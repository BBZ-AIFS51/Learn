/* Rechner & Trainer: Netzwerk & Zahlen – IPv4-Subnetting, Zahlensysteme, IPv6.
   Aufbau:
   - reine Rechenfunktionen V4, NUM, V6 (ohne DOM; für Tests als tool.lib erreichbar)
   - Aufgabengeneratoren je Tool (liefern Aufgabentext, Felder mit Prüffunktion, Rechenweg)
   - ein gemeinsamer Trainer-Rahmen (Modi „Üben“ und „Rechner“), der nur Bootstrap- und App-Klassen nutzt */
(function () {
  "use strict";
  const L = typeof window !== "undefined" ? window.LEARN : undefined;
  if (!L || typeof L.tool !== "function") return;

  /* ================= Allgemeine Helfer ================= */
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const P2 = (n) => Math.pow(2, n);
  const grp = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const sup = (n) => `<sup>${n}</sup>`;
  const code = (s) => `<code>${esc(s)}</code>`;
  const pl = (n, one, many) => `${n} ${n === 1 ? one : many}`;
  const hx2 = (x) => x.toString(16).padStart(2, "0").toUpperCase();
  const hex4 = (x) => x.toString(16).padStart(4, "0");
  /* Binärstring links mit Nullen auf Vielfache von k auffüllen und in k-er-Gruppen trennen */
  const nib = (bits, k = 4) => { const s = String(bits); const pad = (k - (s.length % k)) % k; return ("0".repeat(pad) + s).replace(new RegExp(`(.{${k}})(?=.)`, "g"), "$1 "); };
  const tag = (t) => `<div class="small-caps mb-1">${t}</div>`;

  /* Ganze Zahl ≥ 0 lesen – Tausenderpunkte und Leerzeichen erlaubt; sonst NaN */
  function parseCount(s) {
    s = String(s ?? "").trim().replace(/[\s  ']/g, "");
    if (/^\d{1,3}(\.\d{3})+$/.test(s)) s = s.replace(/\./g, "");
    return /^\d{1,16}$/.test(s) ? Number(s) : NaN;
  }
  /* Ganze Zahl mit Vorzeichen (auch typografisches Minus) */
  function parseSigned(s) {
    s = String(s ?? "").trim().replace(/[\s  ]/g, "").replace(/^[−–]/, "-");
    return /^[-+]?\d{1,16}$/.test(s) ? Number(s) : NaN;
  }

  /* Bitfolge farbig: Netzanteil (.n) und Hostanteil (.h); Gruppen mit Trenner, optional Vierergruppen */
  function colorBits(bits, netLen, groupLen, sep, nibble, keep) {
    const out = [];
    for (let s = 0; s < bits.length; s += groupLen) {
      const g = bits.slice(s, s + groupLen);
      const k = Math.max(0, Math.min(g.length, netLen - s));
      let html = "", cur = null;
      for (let j = 0; j < g.length; j++) {
        const c = j < k ? "n" : "h";
        const space = nibble && j > 0 && j % 4 === 0;
        if (c !== cur) { if (cur) html += "</span>"; if (space) html += " "; html += `<span class="${c}">`; cur = c; }
        else if (space) html += " ";
        html += g[j];
      }
      if (cur) html += "</span>";
      out.push(keep ? `<span class="text-nowrap">${html}</span>` : html);
    }
    return out.join(sep);
  }

  /* HTML-Bausteine (nur vorhandene App-/Bootstrap-Klassen) */
  const errBox = (msg) => `<div class="feedback bad" role="alert"><div class="h"><i class="bi bi-exclamation-triangle-fill" aria-hidden="true"></i> Eingabe prüfen</div><div>${msg}</div></div>`;
  const stepsBox = (html, title = "Rechenweg") => `<div class="result-box mt-3"><div class="small-caps mb-2"><i class="bi bi-list-ol" aria-hidden="true"></i> ${title}</div><div class="prose">${html}</div></div>`;
  const resBox = (inner) => `<div class="result-box mt-3">${inner}</div>`;
  const kv = (rows) => `<dl class="kv mb-0">${rows.filter(Boolean).map(([k, v]) => `<dt>${k}</dt><dd class="text-break">${v}</dd>`).join("")}</dl>`;
  const section = (title, html) => `<div class="mt-3"><div class="small-caps mb-2">${title}</div><div class="prose">${html}</div></div>`;
  const table = (head, rows) => `<div class="table-wrap"><table>${head ? `<thead><tr>${head.map((x) => `<th>${x}</th>`).join("")}</tr></thead>` : ""}<tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  const legend = `<p class="small mb-2"><span class="bits"><span class="n">Netzanteil</span> · <span class="h">Hostanteil</span></span></p>`;

  /* =====================================================================
     IPv4 – reine Funktionen
     ===================================================================== */
  const V4 = (() => {
    const parseIp = (s) => {
      const m = String(s ?? "").trim().match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
      if (!m) return null;
      const o = m.slice(1).map(Number);
      if (o.some((x) => x > 255)) return null;
      return ((o[0] * 256 + o[1]) * 256 + o[2]) * 256 + o[3];
    };
    const octets = (n) => [n >>> 24, (n >>> 16) & 255, (n >>> 8) & 255, n & 255];
    const toIp = (n) => octets(n).join(".");
    const maskOf = (p) => (p <= 0 ? 0 : p >= 32 ? 0xffffffff : (0xffffffff << (32 - p)) >>> 0);
    const wildOf = (p) => (~maskOf(p)) >>> 0;
    const prefixOfMask = (m) => {
      const inv = (~m) >>> 0;
      if (((inv + 1) & inv) !== 0) return -1; // Einsen nicht lückenlos
      let c = 0;
      for (let x = inv; x; x >>>= 1) c++;
      return 32 - c;
    };
    const usable = (p) => (p >= 32 ? 1 : p === 31 ? 2 : P2(32 - p) - 2);
    const hostBitsFor = (h) => { let b = 2; while (b < 60 && P2(b) - 2 < h) b++; return b; };
    const bin8 = (x) => x.toString(2).padStart(8, "0");
    const ones = (x) => bin8(x).replace(/0/g, "").length;
    const bits32 = (n) => octets(n).map(bin8).join("");
    const bitsHtml = (n, p) => colorBits(bits32(n), p, 8, ".", false);

    function analyze(ip, p) {
      const mask = maskOf(p), size = P2(32 - p);
      const net = (ip & mask) >>> 0, bc = net + size - 1;
      return { ip, p, mask, wild: wildOf(p), net, bc, first: p >= 31 ? net : net + 1, last: p >= 31 ? bc : bc - 1, size, hosts: usable(p) };
    }
    function cls(n) { const a = n >>> 24; return a < 128 ? "A" : a < 192 ? "B" : a < 224 ? "C" : a < 240 ? "D (Multicast)" : "E (reserviert)"; }
    function scope(n) {
      const [a, b, c] = octets(n);
      if (a === 10 || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168)) return "privat (RFC 1918)";
      if (a === 127) return "Loopback (127.0.0.0/8)";
      if (a === 169 && b === 254) return "Link-Local / APIPA (169.254.0.0/16)";
      if (a === 100 && b >= 64 && b <= 127) return "Carrier-Grade-NAT (100.64.0.0/10)";
      if ((a === 192 && b === 0 && c === 2) || (a === 198 && b === 51 && c === 100) || (a === 203 && b === 0 && c === 113)) return "Dokumentation (TEST-NET)";
      if (a >= 224 && a <= 239) return "Multicast (224.0.0.0/4)";
      if (a >= 240) return "reserviert";
      if (a === 0) return "„dieses Netz“ (0.0.0.0/8)";
      return "öffentlich";
    }

    /* "IP/Präfix", "IP Maske" oder "IP/Maske" lesen */
    function parseCidr(s) {
      const raw = String(s ?? "").trim();
      if (!raw) return { error: "Bitte gib eine IP-Adresse mit Präfix ein, z. B. <code>192.168.10.77/26</code>." };
      const m = raw.match(/^(\S+?)\s*(?:\/\s*|\s+)(\S+)$/);
      if (!m) {
        if (parseIp(raw) !== null) return { error: `Es fehlt das Präfix bzw. die Subnetzmaske – z. B. <code>${esc(raw)}/24</code> oder <code>${esc(raw)} 255.255.255.0</code>.` };
        return { error: `„${esc(raw)}“ kann ich nicht lesen. Beispiel: <code>192.168.10.77/26</code>.` };
      }
      const ip = parseIp(m[1]);
      if (ip === null) return { error: `„${esc(m[1])}“ ist keine gültige IPv4-Adresse – sie besteht aus vier Zahlen von 0 bis 255, getrennt durch Punkte.` };
      let p;
      if (/^\d{1,2}$/.test(m[2])) {
        p = Number(m[2]);
        if (p > 32) return { error: "Die Präfixlänge muss zwischen /0 und /32 liegen." };
      } else {
        const mk = parseIp(m[2]);
        if (mk === null) return { error: `„${esc(m[2])}“ ist weder eine Präfixlänge (z. B. 26) noch eine Subnetzmaske (z. B. 255.255.255.192).` };
        p = prefixOfMask(mk);
        if (p < 0) return { error: `${esc(m[2])} ist keine gültige Subnetzmaske: Die Einsen müssen lückenlos von links kommen (erlaubte Oktettwerte: 0, 128, 192, 224, 240, 248, 252, 254, 255).` };
      }
      return { ip, p };
    }

    /* Zeilen für ausgewählte Subnetz-Indizes (0-basiert, aufsteigend); Lücken werden zu { gap: n } */
    function subnetRows(base, newP, idx) {
      const size = P2(32 - newP), rows = [];
      idx.forEach((i, k) => {
        if (k > 0 && i - idx[k - 1] > 1) rows.push({ gap: i - idx[k - 1] - 1 });
        const net = base + i * size, bc = net + size - 1;
        rows.push({ nr: i + 1, net, bc, first: newP >= 31 ? net : net + 1, last: newP >= 31 ? bc : bc - 1 });
      });
      return rows;
    }
    /* alle Subnetze, bei mehr als max Stück: die ersten max − 2, Lücke, das letzte */
    function subnetList(base, newP, count, max = 64) {
      const idx = [];
      if (count <= max) for (let i = 0; i < count; i++) idx.push(i);
      else { for (let i = 0; i < max - 2; i++) idx.push(i); idx.push(count - 1); }
      return subnetRows(base, newP, idx);
    }
    function subnetTable(rows, hi) {
      return `<div class="table-wrap"><table><thead><tr><th>Nr.</th><th>Netzadresse</th><th>Erster Host</th><th>Letzter Host</th><th>Broadcast</th></tr></thead><tbody>${rows.map((r) => {
        if (r.gap) return `<tr><td colspan="5" class="muted">⋮ ${grp(r.gap)} ${r.gap === 1 ? "weiteres Subnetz" : "weitere Subnetze"} ⋮</td></tr>`;
        const b = (x) => (r.nr === hi ? `<strong>${x}</strong>` : x);
        return `<tr><td>${b(r.nr)}</td><td class="mono">${b(toIp(r.net))}</td><td class="mono">${b(toIp(r.first))}</td><td class="mono">${b(toIp(r.last))}</td><td class="mono">${b(toIp(r.bc))}</td></tr>`;
      }).join("")}</tbody></table></div>`;
    }

    /* Tabelle mit UND-Verknüpfung, bitweise farbig */
    function andTable(a) {
      const row = (lbl, n) => `<tr><th>${lbl}</th><td class="bits text-nowrap">${bitsHtml(n, a.p)}</td><td class="mono text-nowrap">${toIp(n)}</td></tr>`;
      return `<div class="table-wrap"><table><tbody>${row("IP-Adresse", a.ip)}${row("Subnetzmaske", a.mask)}${row("Netz = IP UND Maske", a.net)}${row("Broadcast (Hostbits = 1)", a.bc)}</tbody></table></div>`;
    }

    function blockList(bs, start) {
      if (bs >= 256) return "Es gibt nur einen Block: 0 bis 255";
      const n = 256 / bs;
      if (n <= 8) return "Blöcke: " + Array.from({ length: n }, (_, i) => i * bs).join(" · ");
      const items = [];
      if (start - bs >= 0) items.push(start - bs);
      items.push(start);
      if (start + bs <= 255) items.push(start + bs);
      return `Blöcke in ${bs}er-Schritten: ${start - bs > 0 ? "… · " : ""}${items.join(" · ")}${start + bs < 256 - bs ? " · …" : ""}`;
    }

    /* Rechenweg: Methode „interessantes Oktett“ */
    function stepsAnalyze(a) {
      const { p } = a, ipO = octets(a.ip), mO = octets(a.mask);
      const S = [`<li><strong>Subnetzmaske:</strong> /${p} = ${p} Einsen und ${32 - p} Nullen → ${code(toIp(a.mask))}</li>`];
      const i = Math.min(3, Math.floor(p / 8));
      const bs = 256 - mO[i];
      const start = Math.floor(ipO[i] / bs) * bs, end = start + bs - 1;
      S.push(`<li><strong>Interessantes Oktett:</strong> das ${i + 1}. Oktett – das letzte Oktett der Maske, das nicht 255 ist (Wert ${mO[i]}).</li>`);
      S.push(`<li><strong>Blockgröße:</strong> 256 − ${mO[i]} = ${bs}</li>`);
      S.push(`<li><strong>Block finden:</strong> ${blockList(bs, start)} → ${ipO[i]} liegt im Block <strong>${start} bis ${end}</strong>.</li>`);
      S.push(`<li><strong>Netzadresse</strong> = Blockanfang ${start}${i < 3 ? ", alle Oktette dahinter 0" : ""} → ${code(toIp(a.net))}</li>`);
      if (p <= 30) {
        S.push(`<li><strong>Broadcast</strong> = nächster Blockanfang − 1 = ${end}${i < 3 ? ", alle Oktette dahinter 255" : ""} → ${code(toIp(a.bc))}</li>`);
        S.push(`<li><strong>Erster Host</strong> = Netzadresse + 1 → ${code(toIp(a.first))}; <strong>letzter Host</strong> = Broadcast − 1 → ${code(toIp(a.last))}</li>`);
        S.push(`<li><strong>Nutzbare Hosts:</strong> 32 − ${p} = ${32 - p} Host-Bits → 2${sup(32 - p)} − 2 = ${grp(a.size)} − 2 = <strong>${grp(a.hosts)}</strong></li>`);
      } else if (p === 31) {
        S.push(`<li><strong>Sonderfall /31</strong> (RFC 3021): Beide Adressen ${code(toIp(a.net))} und ${code(toIp(a.bc))} sind auf Punkt-zu-Punkt-Verbindungen nutzbar, es gibt keinen Broadcast.</li>`);
      } else {
        S.push(`<li><strong>Sonderfall /32:</strong> genau eine Adresse – eine Host-Route.</li>`);
      }
      return `<ol>${S.join("")}</ol>`;
    }

    function stepsMask(p, given) {
      const m = octets(maskOf(p)), full = Math.floor(p / 8), r = p % 8;
      const S = [];
      if (given === "w") S.push(`<li><strong>Wildcard → Maske:</strong> jedes Oktett von 255 abziehen: ${octets(wildOf(p)).map((x) => `255 − ${x} = ${255 - x}`).join(" · ")} → ${code(toIp(maskOf(p)))}</li>`);
      if (given === "p") S.push(`<li><strong>Präfix → Maske:</strong> /${p} = ${full} × 8 Einsen${r ? ` + ${r} Einsen im ${full + 1}. Oktett: ${"1".repeat(r)}${"0".repeat(8 - r)} = ${m[full]}` : ""} → ${code(toIp(maskOf(p)))}</li>`);
      else S.push(`<li><strong>Maske → Präfix:</strong> Einsen je Oktett zählen: ${m.map((x) => `${x} = ${bin8(x)} → ${ones(x)}`).join(" · ")}; ${m.map(ones).join(" + ")} = <strong>/${p}</strong></li>`);
      if (given !== "w") S.push(`<li><strong>Wildcard</strong> = 255.255.255.255 − Maske (oktettweise): ${m.map((x) => `255 − ${x} = ${255 - x}`).join(" · ")} → ${code(toIp(wildOf(p)))}</li>`);
      S.push(`<li>Zur Kontrolle: ${32 - p} Host-Bits → 2${sup(32 - p)} = ${grp(P2(32 - p))} Adressen, davon ${grp(usable(p))} nutzbar.</li>`);
      return `<ol>${S.join("")}</ol>`;
    }

    function stepsHosts(H) {
      const hb = hostBitsFor(H), p = 32 - hb;
      return `<ol>
        <li><strong>Benötigte Adressen:</strong> ${grp(H)} Hosts + 2 (Netz- und Broadcast-Adresse) = ${grp(H + 2)}</li>
        <li><strong>Kleinste passende Zweierpotenz:</strong> 2${sup(hb - 1)} = ${grp(P2(hb - 1))} reicht nicht, 2${sup(hb)} = ${grp(P2(hb))} ≥ ${grp(H + 2)} → <strong>${hb} Host-Bits</strong></li>
        <li><strong>Präfixlänge:</strong> 32 − ${hb} = <strong>/${p}</strong> → Maske ${code(toIp(maskOf(p)))}</li>
        <li><strong>Nutzbare Hosts:</strong> 2${sup(hb)} − 2 = ${grp(usable(p))} ≥ ${grp(H)} ✓</li></ol>`;
    }

    function stepsSplit(base, n, newP, k, i) {
      const s = newP - n, size = P2(32 - newP);
      const oi = Math.min(3, Math.floor((newP - 1) / 8));
      const step = P2(8 * (oi + 1) - newP);
      const S = [];
      if (k != null) S.push(`<li><strong>Subnetz-Bits:</strong> kleinstes s mit 2${sup("s")} ≥ ${grp(k)}${s > 0 ? `: 2${sup(s - 1)} = ${grp(P2(s - 1))} reicht nicht, 2${sup(s)} = ${grp(P2(s))} reicht` : ""} → s = ${s}</li>`);
      else S.push(`<li><strong>Subnetz-Bits:</strong> /${newP} − /${n} = ${s} geliehene Bits</li>`);
      S.push(`<li><strong>Neue Präfixlänge:</strong> /${n} + ${s} = <strong>/${newP}</strong> → Maske ${code(toIp(maskOf(newP)))}</li>`);
      S.push(`<li><strong>Anzahl Subnetze:</strong> 2${sup(s)} = ${grp(P2(s))}; <strong>Hosts je Subnetz:</strong> 32 − ${newP} = ${32 - newP} Host-Bits → 2${sup(32 - newP)} − 2 = ${grp(usable(newP))}</li>`);
      S.push(`<li><strong>Schrittweite (Blockgröße):</strong> ${step} im ${oi + 1}. Oktett (= ${grp(size)} Adressen je Subnetz). Das 1. Subnetz beginnt bei ${code(toIp(base))}.</li>`);
      if (i != null) {
        const net = base + (i - 1) * size, bc = net + size - 1, bo = octets(base)[oi];
        S.push(bo + (i - 1) * step <= 255
          ? `<li><strong>${i}. Subnetz:</strong> ${bo} + (${i} − 1) × ${step} = ${octets(net)[oi]} im ${oi + 1}. Oktett → Netzadresse ${code(toIp(net))}</li>`
          : `<li><strong>${i}. Subnetz:</strong> ${toIp(base)} + (${i} − 1) × ${grp(size)} Adressen → Netzadresse ${code(toIp(net))}</li>`);
        S.push(bc < 0xffffffff
          ? `<li><strong>Broadcast:</strong> nächste Netzadresse ${code(toIp(bc + 1))} − 1 → ${code(toIp(bc))}</li>`
          : `<li><strong>Broadcast:</strong> letzte Adresse des Blocks → ${code(toIp(bc))}</li>`);
      }
      return `<ol>${S.join("")}</ol>`;
    }

    /* VLSM: Anforderungen lesen, absteigend zuteilen */
    function parseReqs(str) {
      const parts = String(str ?? "").split(/[,;\n]+/).map((x) => x.trim()).filter(Boolean);
      if (!parts.length) return { error: "Bitte gib mindestens eine Host-Anforderung ein, z. B. <code>Verwaltung 50, Lager 12</code>." };
      if (parts.length > 64) return { error: "Bitte plane höchstens 64 Subnetze auf einmal." };
      const reqs = [];
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        const m = p.match(/^(.*?)[\s:=]*(\d{1,3}(?:\.\d{3})+|\d+)\s*(?:hosts?|geräte|clients?|pcs?)?$/i);
        if (!m) return { error: `Im Eintrag „${esc(p)}“ finde ich keine Hostanzahl. Schreib z. B. <code>Vertrieb 26</code> oder nur <code>26</code>.` };
        const hosts = parseCount(m[2]);
        if (!(hosts >= 1)) return { error: `„${esc(p)}“: Ein Subnetz braucht mindestens 1 Host.` };
        const name = m[1].trim().replace(/[:=]+$/, "").trim() || `Netz ${String.fromCharCode(65 + (i % 26))}${i >= 26 ? Math.floor(i / 26) : ""}`;
        reqs.push({ name, hosts });
      }
      return { reqs };
    }
    function vlsm(ip, p, reqs) {
      const base = (ip & maskOf(p)) >>> 0, end = base + P2(32 - p);
      const order = reqs.map((r, i) => Object.assign({}, r, { i })).sort((a, b) => b.hosts - a.hosts || a.i - b.i);
      const rows = [];
      let cur = base;
      for (const r of order) {
        const hb = hostBitsFor(r.hosts), size = P2(hb), np = 32 - hb;
        if (np < p) return { error: `„${esc(r.name)}“ braucht ${grp(r.hosts)} Hosts – mehr, als das ganze Netz /${p} bietet (${grp(usable(p))} Hosts).` };
        cur = base + Math.ceil((cur - base) / size) * size;
        if (cur + size > end) return { error: `Der Platz reicht nicht: „${esc(r.name)}“ braucht einen Block mit ${grp(size)} Adressen (/${np}), frei sind nur noch ${grp(Math.max(0, end - cur))} Adressen${cur < end ? ` ab ${toIp(cur)}` : ""}.` };
        rows.push(Object.assign({}, r, { hb, size, np, net: cur, bc: cur + size - 1, first: cur + 1, last: cur + size - 2, usable: size - 2 }));
        cur += size;
      }
      return { base, p, rows, used: cur - base, free: end - cur, next: cur, end };
    }

    return { parseIp, octets, toIp, maskOf, wildOf, prefixOfMask, usable, hostBitsFor, bin8, ones, bits32, bitsHtml, analyze, cls, scope, parseCidr, subnetRows, subnetList, subnetTable, andTable, stepsAnalyze, stepsMask, stepsHosts, stepsSplit, parseReqs, vlsm };
  })();

  /* ---------- Feld-Fabriken für Übungsaufgaben: check(v) → { ok } | { err } (+ note) ---------- */
  const F = {
    ip: (label, ans) => ({ label, ph: "z. B. 192.168.1.0", show: V4.toIp(ans), check: (v) => { const n = V4.parseIp(v); return n === null ? { err: "Bitte im Format a.b.c.d eingeben (vier Zahlen von 0 bis 255)." } : { ok: n === ans }; } }),
    int: (label, ans) => ({ label, ph: "Zahl", im: "numeric", show: grp(ans), check: (v) => { const n = parseCount(v); return Number.isNaN(n) ? { err: "Bitte eine ganze Zahl eingeben (Tausenderpunkte sind erlaubt)." } : { ok: n === ans }; } }),
    prefix: (label, ans) => ({ label, ph: "z. B. /26", show: "/" + ans, check: (v) => { const m = String(v).trim().match(/^\/?\s*(\d{1,2})$/); if (!m || Number(m[1]) > 32) return { err: "Bitte eine Präfixlänge von /0 bis /32 eingeben, z. B. /26." }; return { ok: Number(m[1]) === ans }; } }),
  };

  /* ---------- IPv4-Aufgabengeneratoren ---------- */
  const V4G = (() => {
    const T = V4.toIp;
    const prefixFor = (lvl) => (lvl === 1 ? rnd(24, 30) : lvl === 2 ? rnd(16, 23) : rnd(8, 15));
    function randIp(p) {
      const opts = [() => [10, rnd(0, 255), rnd(0, 255), rnd(0, 255)]];
      if (p >= 12) opts.push(() => [172, rnd(16, 31), rnd(0, 255), rnd(0, 255)]);
      if (p >= 16) opts.push(() => [192, 168, rnd(0, 255), rnd(0, 255)], () => [192, 168, rnd(0, 255), rnd(0, 255)]);
      opts.push(() => [pick([45, 62, 77, 85, 91, 128, 141, 151, 176, 185, 193, 212, 217]), rnd(0, 255), rnd(0, 255), rnd(0, 255)]);
      const o = pick(opts)();
      return ((o[0] * 256 + o[1]) * 256 + o[2]) * 256 + o[3];
    }
    function randHost(p) {
      for (let t = 0; t < 50; t++) { const ip = randIp(p), a = V4.analyze(ip, p); if (p > 30 || (ip !== a.net && ip !== a.bc)) return ip; }
      return V4.analyze(randIp(p), p).first;
    }
    function analyze(lvl) {
      const p = prefixFor(lvl), a = V4.analyze(randHost(p), p);
      return {
        html: `${tag("IP-Adresse analysieren")}<p class="mb-0">Ein Host hat die Adresse <strong class="mono">${T(a.ip)}/${p}</strong>. Bestimme die folgenden Werte.</p>`,
        fields: [F.ip("Subnetzmaske (dezimal)", a.mask), F.ip("Netzadresse", a.net), F.ip("Broadcast-Adresse", a.bc), F.ip("Erste Host-Adresse", a.first), F.ip("Letzte Host-Adresse", a.last), F.int("Anzahl nutzbarer Hosts", a.hosts)],
        steps: V4.stepsAnalyze(a) + `<p class="mb-1"><strong>Kontrolle binär</strong> – Netzadresse = IP UND Maske:</p>${legend}${V4.andTable(a)}`,
      };
    }
    function mask(lvl) {
      const p = prefixFor(lvl), given = pick(["p", "p", "m", "m", "w"]);
      const fields = [];
      if (given !== "p") fields.push(F.prefix("Präfixlänge (CIDR)", p));
      if (given !== "m") fields.push(F.ip("Subnetzmaske", V4.maskOf(p)));
      if (given !== "w") fields.push(F.ip("Wildcard-Maske", V4.wildOf(p)));
      const txt = given === "p" ? `die Präfixlänge <strong class="mono">/${p}</strong>` : given === "m" ? `die Subnetzmaske <strong class="mono">${T(V4.maskOf(p))}</strong>` : `die Wildcard-Maske <strong class="mono">${T(V4.wildOf(p))}</strong>`;
      return { html: `${tag("CIDR ↔ Maske ↔ Wildcard")}<p class="mb-0">Gegeben ist ${txt}. Ergänze die fehlenden Angaben.</p>`, fields, steps: V4.stepsMask(p, given) };
    }
    function split(lvl) {
      let newP, bits;
      if (lvl === 1) { newP = rnd(25, 30); bits = newP - 24; }
      else if (lvl === 2) { newP = rnd(17, 24); bits = rnd(1, Math.min(6, newP - 16)); }
      else { newP = rnd(9, 16); bits = rnd(1, Math.min(6, newP - 8)); }
      const n = newP - bits, base = (randIp(n) & V4.maskOf(n)) >>> 0, maxK = P2(bits);
      const k = lvl > 1 && bits >= 2 && Math.random() < 0.5 ? rnd(P2(bits - 1) + 1, maxK - 1) : maxK;
      const i = rnd(2, Math.max(2, k)), size = P2(32 - newP), net = base + (i - 1) * size;
      const kTxt = k === maxK ? `in <strong>${k}</strong> gleich große Subnetze` : `in <strong>mindestens ${k}</strong> gleich große Subnetze`;
      const idx = [...new Set([0, 1, 2, i - 2, i - 1, i].filter((x) => x >= 0 && x < maxK))].sort((a, b) => a - b);
      return {
        html: `${tag("Subnetze bilden")}<p class="mb-1">Das Netz <strong class="mono">${T(base)}/${n}</strong> soll ${kTxt} aufgeteilt werden – mit so wenigen Subnetz-Bits wie möglich.</p><p class="small muted mb-0">Zählung: Das 1. Subnetz beginnt bei ${T(base)}.</p>`,
        fields: [F.prefix("Neue Präfixlänge", newP), F.int("Nutzbare Hosts je Subnetz", V4.usable(newP)), F.ip(`Netzadresse des ${i}. Subnetzes`, net), F.ip(`Broadcast des ${i}. Subnetzes`, net + size - 1)],
        steps: V4.stepsSplit(base, n, newP, k, i) + `<p class="mb-1"><strong>Subnetze im Überblick</strong> (${pl(maxK, "Subnetz", "Subnetze")} insgesamt):</p>` + V4.subnetTable(V4.subnetRows(base, newP, idx), i),
      };
    }
    function hosts(lvl) {
      const p = prefixFor(lvl), hb = 32 - p, lo = P2(hb - 1) - 1, hi = P2(hb) - 2, r = Math.random();
      const H = r < 0.15 ? hi : r < 0.3 ? lo : rnd(lo, hi);
      return {
        html: `${tag("Präfix für H Hosts")}<p class="mb-0">Ein Subnetz soll <strong>mindestens ${grp(H)} Hosts</strong> aufnehmen. Wähle das kleinstmögliche passende Subnetz.</p>`,
        fields: [F.prefix("Präfixlänge", p), F.ip("Subnetzmaske", V4.maskOf(p)), F.int("Nutzbare Hosts in diesem Subnetz", V4.usable(p))],
        steps: V4.stepsHosts(H),
      };
    }
    return { analyze, mask, split, hosts, randIp, randHost };
  })();

  /* ---------- IPv4-Rechner ---------- */
  function calcIp(str) {
    const r = V4.parseCidr(str);
    if (r.error) return r;
    const a = V4.analyze(r.ip, r.p), T = V4.toIp, notes = [];
    if (a.p <= 30 && a.ip === a.net) notes.push("Die eingegebene Adresse ist die <strong>Netzadresse</strong> selbst – sie kann keinem Host zugewiesen werden.");
    if (a.p <= 30 && a.ip === a.bc) notes.push("Die eingegebene Adresse ist die <strong>Broadcast-Adresse</strong> – sie kann keinem Host zugewiesen werden.");
    if (a.p === 31) notes.push("/31 ist ein Sonderfall (RFC 3021): Auf Punkt-zu-Punkt-Verbindungen sind beide Adressen nutzbar, es gibt keinen Broadcast.");
    if (a.p === 32) notes.push("/32 bezeichnet genau eine Adresse (Host-Route).");
    const html = resBox(kv([
      ["IP-Adresse", `${T(a.ip)}/${a.p}`],
      ["Subnetzmaske", T(a.mask)],
      ["Wildcard-Maske", T(a.wild)],
      ["Netzadresse", `${T(a.net)}/${a.p}`],
      ["Broadcast", a.p === 31 ? "keine (RFC 3021)" : a.p === 32 ? "–" : T(a.bc)],
      ["Erster Host", T(a.first)],
      ["Letzter Host", T(a.last)],
      ["Adressen im Netz", `2${sup(32 - a.p)} = ${grp(a.size)}`],
      ["Nutzbare Hosts", grp(a.hosts)],
      ["Adressbereich", V4.scope(a.ip)],
      ["Klasse (historisch)", V4.cls(a.ip)],
    ]) + (notes.length ? `<p class="small mt-2 mb-0">${notes.join("<br>")}</p>` : ""))
      + section("Binärdarstellung", legend + V4.andTable(a))
      + stepsBox(V4.stepsAnalyze(a));
    return { html };
  }
  function calcSplit(netStr, by, valStr) {
    const r = V4.parseCidr(netStr);
    if (r.error) return r;
    const p = r.p, base = (r.ip & V4.maskOf(p)) >>> 0, T = V4.toIp;
    if (p > 30) return { error: "Ein /31- oder /32-Netz lässt sich nicht weiter sinnvoll aufteilen." };
    const val = parseCount(String(valStr ?? "").trim().replace(/^\//, ""));
    if (Number.isNaN(val)) return { error: "Bitte gib als Wert eine ganze Zahl ein." };
    let newP, k = null, pre = "";
    if (by === "count") {
      if (val < 2) return { error: "Aufteilen heißt: mindestens 2 Subnetze." };
      let s = 0;
      while (P2(s) < val) s++;
      newP = p + s;
      if (newP > 30) return { error: `Für ${grp(val)} Subnetze bräuchtest du ${s} Subnetz-Bits → /${newP}. Dann bleiben keine nutzbaren Hosts übrig (höchstens /30).` };
      k = val;
    } else if (by === "hosts") {
      if (val < 1) return { error: "Ein Subnetz braucht mindestens 1 Host." };
      newP = 32 - V4.hostBitsFor(val);
      if (newP < p) return { error: `Das Netz /${p} hat nur ${grp(V4.usable(p))} nutzbare Hosts – für ${grp(val)} Hosts ist es zu klein.` };
      pre = `<h6>Präfixlänge für ${grp(val)} Hosts</h6>${V4.stepsHosts(val)}<h6>Aufteilung</h6>`;
    } else {
      newP = val;
      if (newP <= p || newP > 30) return { error: `Die neue Präfixlänge muss größer als /${p} und höchstens /30 sein.` };
    }
    const s = newP - p, count = P2(s), size = P2(32 - newP);
    const html = (base !== r.ip ? `<p class="small muted mt-3 mb-0"><i class="bi bi-info-circle" aria-hidden="true"></i> ${T(r.ip)} ist keine Netzadresse – gerechnet wird mit dem Netz ${T(base)}/${p}.</p>` : "")
      + (s === 0 ? `<p class="small muted mt-3 mb-0"><i class="bi bi-info-circle" aria-hidden="true"></i> Das Netz hat schon die kleinste passende Größe – eine Aufteilung ist nicht nötig.</p>` : "")
      + resBox(kv([
        ["Ausgangsnetz", `${T(base)}/${p}`],
        ["Subnetz-Bits", String(s)],
        ["Neue Präfixlänge", `/${newP}`],
        ["Neue Maske", T(V4.maskOf(newP))],
        ["Subnetze", `2${sup(s)} = ${grp(count)}`],
        ["Adressen je Netz", grp(size)],
        ["Hosts je Netz", `${grp(V4.usable(newP))} nutzbar`],
      ]))
      + section(`Alle Subnetze${count > 64 ? ` (Auszug – ${grp(count)} insgesamt)` : ""}`, V4.subnetTable(V4.subnetList(base, newP, count, 64)))
      + stepsBox(pre + V4.stepsSplit(base, p, newP, k, null));
    return { html };
  }
  function calcVlsm(netStr, reqStr) {
    const r = V4.parseCidr(netStr);
    if (r.error) return r;
    if (r.p > 30) return { error: "Das verfügbare Netz ist zu klein – mindestens /30 wird benötigt." };
    const q = V4.parseReqs(reqStr);
    if (q.error) return q;
    const res = V4.vlsm(r.ip, r.p, q.reqs);
    if (res.error) return { error: res.error };
    const T = V4.toIp, total = P2(32 - r.p);
    const rows = res.rows.map((x) => `<tr><td>${esc(x.name)}</td><td>${grp(x.hosts)}</td><td class="mono">/${x.np}</td><td class="mono">${T(x.net)}</td><td class="mono">${T(x.first)}</td><td class="mono">${T(x.last)}</td><td class="mono">${T(x.bc)}</td><td>${grp(x.usable)}</td></tr>`).join("");
    const steps = `<ol><li><strong>Absteigend sortieren:</strong> ${res.rows.map((x) => `${esc(x.name)} (${grp(x.hosts)})`).join(" → ")}. So liegt jedes Subnetz automatisch auf einer passenden Blockgrenze.</li>${res.rows.map((x) => `<li><strong>${esc(x.name)}:</strong> ${grp(x.hosts)} + 2 = ${grp(x.hosts + 2)} Adressen → 2${sup(x.hb)} = ${grp(x.size)} → <strong>/${x.np}</strong> ab der nächsten freien Adresse: ${code(T(x.net))} bis ${code(T(x.bc))}. Nächste freie Adresse: ${code(T(x.bc + 1 <= 0xffffffff ? x.bc + 1 : x.bc))}</li>`).join("")}</ol>`;
    const html = resBox(kv([
      ["Verfügbares Netz", `${T(res.base)}/${r.p} (${grp(total)} Adressen)`],
      ["Belegt", `${grp(res.used)} Adressen (${Math.round((res.used * 100) / total)} %)`],
      ["Noch frei", res.free ? `${grp(res.free)} Adressen: ${T(res.next)} – ${T(res.end - 1)}` : "nichts – das Netz ist voll belegt"],
    ]))
      + section("Zuteilung (größtes Netz zuerst)", `<div class="table-wrap"><table><thead><tr><th>Subnetz</th><th>Hosts benötigt</th><th>Präfix</th><th>Netzadresse</th><th>Erster Host</th><th>Letzter Host</th><th>Broadcast</th><th>nutzbar</th></tr></thead><tbody>${rows}</tbody></table></div>`)
      + stepsBox(steps);
    return { html };
  }

  /* =====================================================================
     Zahlensysteme – reine Funktionen
     ===================================================================== */
  const NUM = (() => {
    const NAME = { 2: "Binär", 8: "Oktal", 10: "Dezimal", 16: "Hexadezimal" };
    const SYS = { 2: "Binärsystem", 8: "Oktalsystem", 10: "Dezimalsystem", 16: "Hexadezimalsystem" };
    const DIG = "0123456789ABCDEF";
    const ALLOWED = { 2: "0 und 1", 8: "0 bis 7", 10: "0 bis 9", 16: "0 bis 9 und A bis F" };
    const RE = { 2: /^[01]+$/, 8: /^[0-7]+$/, 10: /^\d+$/, 16: /^[0-9A-F]+$/ };
    const BITS = { 2: 1, 8: 3, 16: 4 };
    const toBase = (n, b) => n.toString(b).toUpperCase();
    const show = (n, b) => (b === 2 ? nib(toBase(n, 2)) : b === 10 ? grp(n) : toBase(n, b));

    function parse(str, b) {
      const raw = String(str ?? "").trim();
      let s = raw.replace(/[\s_'  ]/g, "");
      if (!s) return { error: "Bitte gib eine Zahl ein." };
      if (/^[-−–]/.test(s)) return { error: "Negative Zahlen gibt es hier nicht – dafür ist das Zweierkomplement da." };
      s = s.replace(/(₂|₈|₁₀|₁₆)$/, "").replace(/\((?:2|8|10|16)\)$/, "");
      if (b === 16) s = s.replace(/^0x/i, "").replace(/h$/i, "");
      else if (b === 2) s = s.replace(/^0b/i, "");
      else if (b === 8) s = s.replace(/^0o/i, "");
      else if (/^\d{1,3}(\.\d{3})+$/.test(s)) s = s.replace(/\./g, "");
      s = s.toUpperCase();
      if (!s || !RE[b].test(s)) return { error: `„${esc(raw)}“ ist keine gültige ${NAME[b]}zahl – erlaubt sind nur die Ziffern ${ALLOWED[b]}.` };
      let v = 0;
      for (const c of s) {
        v = v * b + DIG.indexOf(c);
        if (v > Number.MAX_SAFE_INTEGER) return { error: "Die Zahl ist zu groß – höchstens 2<sup>53</sup> − 1 (9.007.199.254.740.991)." };
      }
      return { value: v, clean: s, digits: s.replace(/^0+(?=.)/, "") };
    }

    function divSteps(n, b) {
      if (n === 0) return "<p>0 ist in jedem Zahlensystem 0.</p>";
      const rows = [];
      for (let x = n; x > 0; x = Math.floor(x / b)) rows.push([x, Math.floor(x / b), x % b]);
      const digits = rows.map((r) => DIG[r[2]]).reverse().join("");
      const probe = [...digits].map((c, i) => ({ d: DIG.indexOf(c), e: digits.length - 1 - i })).filter((t) => t.d);
      return `<p><strong>Divisionsrestverfahren:</strong> Teile immer wieder durch ${b} und notiere den Rest, bis das Ergebnis 0 ist.</p>`
        + table(["Rechnung", "Ergebnis", "Rest"], rows.map(([x, q, r]) => [`<span class="mono">${grp(x)} : ${b}</span>`, `<span class="mono">${grp(q)}</span>`, `<span class="mono">${r}${b === 16 && r > 9 ? ` → ${DIG[r]}` : ""}</span>`]))
        + `<p>Die Reste <strong>von unten nach oben</strong> lesen: ${code(b === 2 ? nib(digits) : digits)}</p>`
        + `<p class="small muted">Probe: ${probe.map((t) => (b === 2 ? grp(P2(t.e)) : `${t.d}·${grp(Math.pow(b, t.e))}`)).join(" + ")} = ${grp(n)} ✓</p>`;
    }

    function placeSteps(digits, b) {
      const n = digits.length;
      const terms = [...digits].map((c, i) => ({ c, d: DIG.indexOf(c), e: n - 1 - i }));
      const nz = terms.filter((t) => t.d);
      const val = terms.reduce((s, t) => s + t.d * Math.pow(b, t.e), 0);
      let html = `<p><strong>Stellenwertmethode:</strong> Jede Ziffer mit ihrem Stellenwert (Potenz von ${b}) multiplizieren und alles addieren. Die Stellen zählen von rechts ab 0.</p>`;
      if (n <= 16) html += table(null, [["<strong>Stellenwert</strong>", ...terms.map((t) => `<span class="mono">${grp(Math.pow(b, t.e))}</span>`)], ["<strong>Ziffer</strong>", ...terms.map((t) => `<span class="mono">${t.c}</span>`)]]);
      if (!nz.length) return html + "<p>Alle Ziffern sind 0 → Ergebnis <strong>0</strong>.</p>";
      const letters = b === 16 && nz.some((t) => t.d > 9) ? ` <span class="muted">(${[...new Set(nz.filter((t) => t.d > 9).map((t) => `${t.c} = ${t.d}`))].join(", ")})</span>` : "";
      const l1 = (n <= 16 ? terms : nz).map((t) => `${t.c}·${b}${sup(t.e)}`).join(" + ");
      const l2 = nz.map((t) => (t.d === 1 ? grp(Math.pow(b, t.e)) : `${t.d}·${grp(Math.pow(b, t.e))}`)).join(" + ");
      const l3 = nz.some((t) => t.d > 1) ? nz.map((t) => grp(t.d * Math.pow(b, t.e))).join(" + ") : "";
      return html + `<p class="mono">${esc(digits)}<sub>${b}</sub> = ${l1}${letters}<br>= ${l2}${l3 ? `<br>= ${l3}` : ""}<br>= <strong>${grp(val)}</strong></p>`;
    }

    function groupSteps(digits, from, to) {
      if (from === 2) {
        const k = BITS[to], pad = (k - (digits.length % k)) % k, padded = "0".repeat(pad) + digits;
        const groups = padded.match(new RegExp(`.{${k}}`, "g"));
        const out = groups.map((g) => DIG[parseInt(g, 2)]);
        const res = out.join("").replace(/^0+(?=.)/, "");
        return `<p><strong>${k === 4 ? "Nibble-Gruppierung" : "Dreiergruppen"}:</strong> Teile die Binärzahl <strong>von rechts</strong> in Gruppen zu je ${k} Bit${pad ? ` (links ${pad === 1 ? "eine Null" : pad + " Nullen"} ergänzen)` : ""} und ersetze jede Gruppe durch ihre ${NAME[to]}ziffer (Stellenwerte ${k === 4 ? "8-4-2-1" : "4-2-1"}).</p>`
          + table(null, [["<strong>Bits</strong>", ...groups.map((g) => `<span class="mono">${g}</span>`)], [`<strong>${NAME[to]}</strong>`, ...out.map((d, i) => `<span class="mono">${d}</span>${parseInt(groups[i], 2) > 9 ? ` <span class="muted">(${parseInt(groups[i], 2)})</span>` : ""}`)]])
          + `<p>Ergebnis: ${code(res)}</p>`;
      }
      if (to === 2) {
        const k = BITS[from], groups = [...digits].map((c) => DIG.indexOf(c).toString(2).padStart(k, "0"));
        const res = groups.join("").replace(/^0+(?=.)/, "");
        return `<p><strong>${k === 4 ? "Nibble-Methode" : "Dreiergruppen"}:</strong> Ersetze jede ${NAME[from]}ziffer durch ihre ${k} Bit (Stellenwerte ${k === 4 ? "8-4-2-1" : "4-2-1"}).</p>`
          + table(null, [[`<strong>${NAME[from]}</strong>`, ...[...digits].map((d) => `<span class="mono">${d}</span>`)], ["<strong>Bits</strong>", ...groups.map((g) => `<span class="mono">${g}</span>`)]])
          + `<p>Aneinanderhängen: ${code(groups.join(" "))}${res.length < groups.join("").length ? ` – führende Nullen dürfen weg: ${code(nib(res))}` : ""}</p>`;
      }
      const bin = parseInt(digits, from).toString(2);
      return `<p>Zwischen ${NAME[from]} und ${NAME[to]} rechnest du am einfachsten <strong>über das Binärsystem</strong>.</p><h6>1. ${NAME[from]} → Binär</h6>${groupSteps(digits, from, 2)}<h6>2. Binär → ${NAME[to]}</h6>${groupSteps(bin, 2, to)}`;
    }

    function steps(value, from, to) {
      if (from === to) return "<p>Quell- und Zielsystem sind gleich.</p>";
      if (to === 10) return placeSteps(toBase(value, from), from);
      if (from === 10) return divSteps(value, to);
      return groupSteps(toBase(value, from), from, to);
    }

    /* Binäre Addition mit Überträgen; C[i] = Übertrag in Spalte i (von rechts, ab 0) */
    function add(aDigits, bDigits, width = 0) {
      const W = Math.max(width, aDigits.length, bDigits.length);
      const A = aDigits.padStart(W, "0"), B = bDigits.padStart(W, "0");
      const S = [], C = Array(W + 1).fill(0), cols = [];
      let c = 0;
      for (let i = 0; i < W; i++) {
        const x = Number(A[W - 1 - i]), y = Number(B[W - 1 - i]), t = x + y + c;
        cols.push({ i, x, y, c, t, s: t & 1, co: t >> 1 });
        S.unshift(t & 1);
        c = t >> 1;
        C[i + 1] = c;
      }
      return { A, B, W, C, cols, carry: c, bits: S.join(""), sum: (c ? "1" : "") + S.join("") };
    }
    function addLayout(r, decA, decB, decS, dropCarry) {
      const lbl = (s) => s.padEnd(10, " ");
      const cells = (arr) => arr.join(" ");
      const aC = [" ", ...r.A], bC = [" ", ...r.B], cC = [], sC = [dropCarry ? " " : r.carry ? "1" : " ", ...r.bits];
      for (let j = 0; j <= r.W; j++) { const i = r.W - j; cC.push(i >= 1 && r.C[i] ? "1" : " "); }
      const w = 10 + (r.W + 1) * 2 - 1;
      const lines = [
        lbl("") + cells(aC) + (decA != null ? `   (${decA})` : ""),
        lbl("+") + cells(bC) + (decB != null ? `   (${decB})` : ""),
        lbl("Übertrag") + cells(cC),
        "─".repeat(w),
        lbl("=") + cells(sC) + (decS != null ? `   (${decS})` : ""),
      ];
      return `<pre>${esc(lines.join("\n"))}</pre>`;
    }
    function addSteps(r, a, b) {
      const S = r.cols.map((k) => `<li>Bit ${k.i}: ${k.x} + ${k.y}${k.c ? " + 1 (Übertrag)" : ""} = ${k.t} → binär ${k.t.toString(2)} → schreibe <strong>${k.s}</strong>${k.co ? ", Übertrag <strong>1</strong>" : ""}</li>`).join("");
      return `<p><strong>Schriftlich addieren</strong> – Spalte für Spalte von rechts: 0+0 = 0, 0+1 = 1, 1+1 = 10 (0 schreiben, 1 übertragen), 1+1+1 = 11 (1 schreiben, 1 übertragen).</p>`
        + addLayout(r, a, b, a + b)
        + (r.W <= 16 ? `<ol>${S}</ol>` : "")
        + (r.carry ? `<p>Übertrag aus dem höchsten Bit → das Ergebnis braucht ${r.W + 1} Bit${r.W === 8 ? " (bei vorzeichenlosen 8-Bit-Zahlen ein <strong>Überlauf</strong>)" : ""}.</p>` : "")
        + `<p class="small muted">Probe dezimal: ${grp(a)} + ${grp(b)} = ${grp(a + b)} = ${code(nib(r.sum))} ✓</p>`;
    }

    /* Zweierkomplement 8 Bit */
    const twos = (v) => (((v % 256) + 256) % 256).toString(2).padStart(8, "0");
    const fromTwos = (bits8) => { const u = parseInt(bits8, 2); return u >= 128 ? u - 256 : u; };
    const invert = (bits) => [...bits].map((x) => (x === "0" ? "1" : "0")).join("");
    function signedProbe(bits8) {
      const terms = [...bits8].map((c, i) => (c === "1" ? (i === 0 ? -128 : P2(7 - i)) : 0)).filter(Boolean);
      return terms.length ? `${terms.map((t, i) => (i === 0 ? String(t).replace("-", "−") : t < 0 ? `− ${-t}` : `+ ${t}`)).join(" ")} = ${String(fromTwos(bits8)).replace("-", "−")}` : "0";
    }
    function twosSteps(v) {
      if (v >= 0) return `<p>${v} ist nicht negativ → ganz normal in 8 Bit umrechnen: ${code(nib(twos(v)))}. Das erste Bit ist 0 = positiv.</p>`;
      const abs = -v, b = abs.toString(2).padStart(8, "0"), inv = invert(b), res = twos(v);
      return `<ol>
        <li><strong>Betrag</strong> ${abs} in 8 Bit: ${code(nib(b))}</li>
        <li><strong>Alle Bits invertieren</strong> (Einerkomplement): ${code(nib(inv))}</li>
        <li><strong>1 addieren:</strong> ${code(nib(inv))} + 1 = ${code(nib(res))}</li></ol>
        <p>Probe: Das erste Bit hat im Zweierkomplement den Stellenwert −128: ${signedProbe(res)} ✓</p>`;
    }
    function fromTwosSteps(bits8) {
      const v = fromTwos(bits8);
      if (bits8[0] === "0") return `<p>Das erste Bit ist 0 → die Zahl ist positiv und wird normal gelesen: ${signedProbe(bits8)}.</p>`;
      const inv = invert(bits8), mag = parseInt(inv, 2) + 1;
      return `<p>Das erste Bit ist 1 → die Zahl ist <strong>negativ</strong>. Zwei Wege:</p><ol>
        <li><strong>Stellenwert −128:</strong> ${signedProbe(bits8)}</li>
        <li><strong>Zurückrechnen:</strong> invertieren ${code(nib(inv))} und 1 addieren → ${code(nib((mag % 256).toString(2).padStart(8, "0")))} = ${mag} → Wert −${mag}</li></ol>
        <p>Ergebnis: <strong>${String(v).replace("-", "−")}</strong></p>`;
    }
    /* A − B = A + Zweierkomplement(B), 8 Bit, A und B in 0…127 */
    function sub8(a, b) {
      const Bb = b.toString(2).padStart(8, "0"), inv = invert(Bb), neg = twos(-b);
      const r = add(a.toString(2).padStart(8, "0"), neg, 8);
      return { Bb, inv, neg, r, res: r.bits, value: a - b };
    }
    function subSteps(s, a, b) {
      return `<ol>
        <li><strong>B in 8 Bit:</strong> ${b} = ${code(nib(s.Bb))}</li>
        <li><strong>Einerkomplement</strong> (alle Bits invertieren): ${code(nib(s.inv))}</li>
        <li><strong>+ 1 → Zweierkomplement</strong> (entspricht −${b}): ${code(nib(s.neg))}</li>
        <li><strong>A + (−B) addieren:</strong>${addLayout(s.r, a, null, null, true)}</li>
        <li>${s.r.carry ? "Der Übertrag aus Bit 7 wird bei 8 Bit <strong>verworfen</strong>" : "Kein Übertrag aus Bit 7"} → Ergebnis ${code(nib(s.res))}</li>
        <li><strong>Deuten:</strong> ${s.res[0] === "1" ? `erstes Bit 1 → negativ: ${signedProbe(s.res)}` : `erstes Bit 0 → positiv: ${signedProbe(s.res)}`}</li></ol>
        <p class="small muted">Probe dezimal: ${a} − ${b} = ${String(a - b).replace("-", "−")} ✓</p>`;
    }

    return { NAME, SYS, DIG, toBase, show, parse, divSteps, placeSteps, groupSteps, steps, add, addLayout, addSteps, twos, fromTwos, invert, twosSteps, fromTwosSteps, signedProbe, sub8, subSteps };
  })();

  /* ---------- Zahlensysteme: Aufgaben ---------- */
  const NUMG = (() => {
    const CONV = ["10-2", "2-10", "10-16", "16-10", "2-16", "16-2", "10-8", "8-10", "2-8"];
    const randVal = (bits) => (bits === 8 ? rnd(10, 255) : bits === 16 ? rnd(256, 65535) : rnd(65536, 4294967295));
    const numField = (label, v, b) => ({ label, ph: { 2: "z. B. 1011 0101", 8: "z. B. 755", 10: "z. B. 181", 16: "z. B. B5" }[b], im: b === 10 || b === 8 ? "numeric" : "text", show: NUM.show(v, b), check: (s) => { const r = NUM.parse(s, b); return r.error ? { err: r.error } : { ok: r.value === v }; } });
    const given = (v, b) => `<strong class="mono">${NUM.show(v, b)}</strong><sub>${b}</sub>`;
    function conv(from, to, bits) {
      const v = randVal(bits);
      return { html: `${tag(`${NUM.NAME[from]} → ${NUM.NAME[to]}`)}<p class="mb-0">Rechne die ${NUM.NAME[from]}zahl ${given(v, from)} in das ${NUM.SYS[to]} um.</p>`, fields: [numField(`${NUM.NAME[to]}zahl`, v, to)], steps: NUM.steps(v, from, to) };
    }
    function tab(bits) {
      const from = pick([10, 2, 16, 8]), v = randVal(bits), others = [10, 2, 16, 8].filter((b) => b !== from);
      return {
        html: `${tag("Tabelle ergänzen")}<p class="mb-0">Die Zahl ${given(v, from)} ist im ${NUM.SYS[from]} gegeben. Ergänze die übrigen Darstellungen.</p>`,
        fields: others.map((b) => numField(NUM.NAME[b], v, b)),
        steps: others.map((b) => `<h6>${NUM.NAME[from]} → ${NUM.NAME[b]}</h6>${NUM.steps(v, from, b)}`).join(""),
      };
    }
    function addTask() {
      const a = rnd(20, 200), b = rnd(10, 255 - a), r = NUM.add(a.toString(2), b.toString(2), 8);
      return {
        html: `${tag("Binäre Addition (8 Bit)")}<p class="mb-1">Addiere schriftlich im Binärsystem:</p><pre class="mono mb-0">  ${nib(r.A)}\n+ ${nib(r.B)}</pre>`,
        fields: [numField("Summe (binär)", a + b, 2), numField("Summe (dezimal)", a + b, 10)],
        steps: NUM.addSteps(r, a, b),
      };
    }
    function twosTask() {
      if (Math.random() < 0.6) {
        const v = -rnd(1, 128), bits = NUM.twos(v);
        return {
          html: `${tag("Zweierkomplement (8 Bit)")}<p class="mb-0">Stelle die Zahl <strong class="mono">${String(v).replace("-", "−")}</strong> als 8-Bit-Zweierkomplement dar.</p>`,
          fields: [{ label: "8-Bit-Muster", ph: "z. B. 1111 0110", show: nib(bits), check: (s) => { const r = NUM.parse(s, 2); if (r.error) return { err: r.error }; if (r.clean.length > 8) return { err: "Bitte höchstens 8 Bit eingeben." }; return { ok: r.value === parseInt(bits, 2) }; } }],
          steps: NUM.twosSteps(v),
        };
      }
      const u = rnd(128, 255), bits = u.toString(2), v = u - 256;
      return {
        html: `${tag("Zweierkomplement (8 Bit)")}<p class="mb-0">Das Bitmuster <strong class="mono">${nib(bits)}</strong> ist eine 8-Bit-Zahl im Zweierkomplement. Welchen Dezimalwert hat sie?</p>`,
        fields: [{ label: "Dezimalwert (mit Vorzeichen)", ph: "z. B. −42", im: "text", show: String(v).replace("-", "−"), check: (s) => { const n = parseSigned(s); return Number.isNaN(n) ? { err: "Bitte eine ganze Zahl mit Vorzeichen eingeben, z. B. −42." } : { ok: n === v }; } }],
        steps: NUM.fromTwosSteps(bits),
      };
    }
    function gen(type, lvl) {
      const bits = lvl === 16 || lvl === 32 ? lvl : 8;
      if (type === "tab") return tab(bits);
      if (type === "add") return addTask();
      if (type === "twos") return twosTask();
      const [from, to] = (type === "mix" ? pick(CONV) : type).split("-").map(Number);
      return conv(from, to, bits);
    }
    return { gen, CONV };
  })();

  /* ---------- Zahlensysteme: Rechner ---------- */
  function calcConv(val, base) {
    const r = NUM.parse(val, base);
    if (r.error) return r;
    const v = r.value, bin = NUM.toBase(v, 2), others = [10, 2, 16, 8].filter((b) => b !== base);
    const html = resBox(kv([
      ["Dezimal", grp(v)],
      ["Binär", `${nib(bin)}`],
      ["Hexadezimal", NUM.toBase(v, 16)],
      ["Oktal", NUM.toBase(v, 8)],
      ["Mindestens nötige Bits", `${bin.length} Bit → ${Math.ceil(bin.length / 8)} Byte`],
    ])) + stepsBox(others.map((b) => `<h6>${NUM.NAME[base]} → ${NUM.NAME[b]}</h6>${NUM.steps(v, base, b)}`).join(""));
    return { html };
  }
  function calcAdd(aStr, op, bStr) {
    const A = NUM.parse(aStr, 2);
    if (A.error) return { error: "Zahl A: " + A.error };
    const B = NUM.parse(bStr, 2);
    if (B.error) return { error: "Zahl B: " + B.error };
    if (op === "-") {
      if (A.value > 127 || B.value > 127) return { error: "Für die 8-Bit-Subtraktion müssen A und B zwischen 0 und 127 liegen (höchstens 0111 1111)." };
      const s = NUM.sub8(A.value, B.value);
      return { html: resBox(kv([["A", `${nib(A.value.toString(2).padStart(8, "0"))} (${A.value})`], ["B", `${nib(s.Bb)} (${B.value})`], ["−B (Zweierkomplement)", nib(s.neg)], ["A − B (8 Bit)", nib(s.res)], ["Dezimal", String(s.value).replace("-", "−")]])) + stepsBox(NUM.subSteps(s, A.value, B.value)) };
    }
    if (A.clean.length > 32 || B.clean.length > 32) return { error: "Bitte höchstens 32 Bit je Zahl eingeben." };
    const r = NUM.add(A.digits, B.digits, Math.max(A.clean.length, B.clean.length));
    return { html: resBox(kv([["A", `${nib(r.A)} (${grp(A.value)})`], ["B", `${nib(r.B)} (${grp(B.value)})`], ["A + B", `${nib(r.sum)} (${grp(A.value + B.value)})`], r.carry ? ["Hinweis", `Übertrag aus dem höchsten Bit – das Ergebnis braucht ${r.W + 1} Bit.`] : null])) + stepsBox(NUM.addSteps(r, A.value, B.value)) };
  }
  function calcTwos(val, kind) {
    let v, bits;
    if (kind === "bin") {
      const r = NUM.parse(val, 2);
      if (r.error) return r;
      if (r.clean.length !== 8) return { error: "Bitte genau 8 Bit eingeben, z. B. <code>1001 1100</code>." };
      bits = r.clean;
      v = NUM.fromTwos(bits);
    } else {
      v = parseSigned(val);
      if (Number.isNaN(v)) return { error: "Bitte eine ganze Zahl eingeben, z. B. <code>-100</code>." };
      if (v < -128 || v > 127) return { error: "Mit 8 Bit im Zweierkomplement sind nur Werte von −128 bis 127 darstellbar." };
      bits = NUM.twos(v);
    }
    return { html: resBox(kv([["Dezimal (mit Vorzeichen)", String(v).replace("-", "−")], ["8-Bit-Zweierkomplement", nib(bits)], ["Hexadezimal", NUM.toBase(parseInt(bits, 2), 16).padStart(2, "0")], ["Vorzeichenlos gelesen", String(parseInt(bits, 2))]])) + stepsBox(kind === "bin" ? NUM.fromTwosSteps(bits) : NUM.twosSteps(v)) };
  }

  /* =====================================================================
     IPv6 – reine Funktionen
     ===================================================================== */
  const V6 = (() => {
    const eq = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);
    /* Blöcke (N Stück) aus Text mit optionalem "::" lesen */
    function core(s, N) {
      const halves = s.split("::");
      if (halves.length > 2) return { error: "„::“ darf nur <strong>einmal</strong> vorkommen – sonst wäre unklar, wie viele Null-Blöcke wo fehlen." };
      const head = halves[0] ? halves[0].split(":") : [];
      const tail = halves.length === 2 ? (halves[1] ? halves[1].split(":") : []) : null;
      for (const x of head.concat(tail || [])) {
        if (x === "") return { error: "Da ist ein leerer Block (z. B. „:::“ oder ein einzelner Doppelpunkt am Anfang/Ende). Null-Blöcke darf nur „::“ ersetzen." };
        if (x.length > 4) return { error: `Der Block „${esc(x)}“ hat mehr als 4 Hex-Ziffern.` };
        if (!/^[0-9a-f]+$/.test(x)) return { error: `„${esc(x)}“ ist kein gültiger Block (nur 0–9 und a–f).` };
      }
      const n = head.length + (tail ? tail.length : 0);
      if (!tail && n !== N) return { error: `${N === 8 ? "Eine IPv6-Adresse" : "Die Interface-ID"} hat ${N} Blöcke – hier sind es ${n}. Null-Blöcke kannst du mit „::“ abkürzen.` };
      if (tail && n > N - 1) return { error: `Mit „::“ dürfen höchstens ${N - 1} Blöcke ausgeschrieben sein.` };
      const h = (x) => parseInt(x, 16);
      return { g: tail ? head.map(h).concat(Array(N - n).fill(0), tail.map(h)) : head.map(h) };
    }
    function parse(str) {
      let s = String(str ?? "").trim().toLowerCase().replace(/^\[/, "").replace(/\]$/, "");
      if (!s) return { error: "Bitte gib eine IPv6-Adresse ein." };
      let len = null;
      const sl = s.indexOf("/");
      if (sl >= 0) {
        const ps = s.slice(sl + 1).trim();
        s = s.slice(0, sl).trim();
        if (!/^\d{1,3}$/.test(ps) || Number(ps) > 128) return { error: "Die Präfixlänge hinter „/“ muss eine Zahl von 0 bis 128 sein." };
        len = Number(ps);
      }
      s = s.replace(/%[\w.-]*$/, "");
      if (!s) return { error: "Vor dem „/“ fehlt die Adresse." };
      if (/[^0-9a-f:.]/.test(s)) return { error: "In einer IPv6-Adresse dürfen nur 0–9, a–f und Doppelpunkte vorkommen (am Ende ggf. eine IPv4-Adresse)." };
      if (!s.includes(":")) return { error: "Eine IPv6-Adresse hat Doppelpunkte zwischen den Blöcken, z. B. <code>2001:db8::1</code>." };
      if (s.includes(".")) {
        const i = s.lastIndexOf(":"), v4 = V4.parseIp(s.slice(i + 1));
        if (v4 === null || s.slice(0, i).includes(".")) return { error: "Eine eingebettete IPv4-Adresse (z. B. ::ffff:192.0.2.1) muss gültig sein und am Ende stehen." };
        s = s.slice(0, i + 1) + (v4 >>> 16).toString(16) + ":" + (v4 & 0xffff).toString(16);
      }
      const r = core(s, 8);
      return r.error ? r : { g: r.g, len };
    }
    function parseIid(str) {
      const s = String(str ?? "").trim().toLowerCase();
      if (!s) return { error: "Bitte gib die Interface-ID ein." };
      if (/[^0-9a-f:]/.test(s)) return { error: "Die Interface-ID besteht aus Hex-Ziffern und Doppelpunkten, z. B. <code>21a:2bff:fe3c:4d5e</code>." };
      const r = core(s, 4);
      if (!r.error) return r;
      const a = core(s, 8);
      if (!a.error && a.g.slice(0, 4).every((x) => x === 0)) return { g: a.g.slice(4) };
      return { error: "Die Interface-ID hat 4 Blöcke (64 Bit), z. B. <code>21a:2bff:fe3c:4d5e</code>." };
    }
    const full = (g) => g.map(hex4).join(":");
    const plain = (g) => g.map((x) => x.toString(16)).join(":");
    function zeroRuns(g) {
      const runs = [];
      for (let i = 0; i < g.length;) {
        if (g[i] === 0) { let j = i; while (j < g.length && g[j] === 0) j++; runs.push({ s: i, l: j - i }); i = j; } else i++;
      }
      return runs;
    }
    function bestRun(g) { let b = null; for (const r of zeroRuns(g)) if (r.l >= 2 && (!b || r.l > b.l)) b = r; return b; }
    function compress(g) {
      const p = g.map((x) => x.toString(16)), b = bestRun(g);
      return b ? p.slice(0, b.s).join(":") + "::" + p.slice(b.s + b.l).join(":") : p.join(":");
    }
    const maskG = (g, len) => g.map((x, i) => { const k = Math.max(0, Math.min(16, len - 16 * i)); return k === 0 ? 0 : k === 16 ? x : x & ((0xffff << (16 - k)) & 0xffff); });
    const bits128 = (g) => g.map((x) => x.toString(2).padStart(16, "0")).join("");

    const TYPES = {
      gua: { name: "Global Unicast", net: "2000::/3", bits: 3, desc: "weltweit eindeutig und im Internet routbar (öffentliche Adresse)" },
      ula: { name: "Unique Local", net: "fc00::/7", bits: 7, desc: "private Adresse für interne Netze (in der Praxis fd00::/8), wird im Internet nicht geroutet" },
      ll: { name: "Link-Local", net: "fe80::/10", bits: 10, desc: "nur im eigenen Netzsegment gültig, wird nie geroutet; jedes IPv6-Interface hat automatisch eine" },
      mc: { name: "Multicast", net: "ff00::/8", bits: 8, desc: "an eine Gruppe von Empfängern – IPv6 kennt keinen Broadcast" },
      loop: { name: "Loopback", net: "::1/128", bits: 128, desc: "das eigene Gerät (wie 127.0.0.1 bei IPv4)" },
      unspec: { name: "Unspezifiziert", net: "::/128", bits: 128, desc: "„keine Adresse“ – z. B. Absender, solange ein Gerät noch keine Adresse hat" },
      v4m: { name: "IPv4-gemappt", net: "::ffff:0:0/96", bits: 96, desc: "IPv4-Adresse in IPv6-Schreibweise (Dual-Stack-Software)" },
      other: { name: "Sonstige / reserviert", net: "–", bits: 0, desc: "gehört zu keinem der üblichen Bereiche" },
    };
    const TYPE_KEYS = ["gua", "ula", "ll", "mc", "loop", "unspec"];
    function typeOf(g) {
      if (g.every((x) => x === 0)) return "unspec";
      if (g.slice(0, 7).every((x) => x === 0) && g[7] === 1) return "loop";
      if ((g[0] & 0xff00) === 0xff00) return "mc";
      if ((g[0] & 0xffc0) === 0xfe80) return "ll";
      if ((g[0] & 0xfe00) === 0xfc00) return "ula";
      if ((g[0] & 0xe000) === 0x2000) return "gua";
      if (g.slice(0, 5).every((x) => x === 0) && g[5] === 0xffff) return "v4m";
      return "other";
    }
    const MC_SCOPE = { 1: "Interface-lokal", 2: "Link-lokal", 4: "Admin-lokal", 5: "Site-lokal", 8: "Organisations-lokal", 14: "global" };
    function typeNote(g) {
      const t = typeOf(g);
      if (t === "gua" && g[0] === 0x2001 && g[1] === 0x0db8) return "Dokumentationspräfix 2001:db8::/32 – nur für Beispiele";
      if (t === "gua" && (g[0] & 0xfff0) === 0x3ff0) return "3fff::/20 ist ebenfalls für Dokumentation reserviert";
      if (t === "mc") {
        const known = { "ff02::1": "alle Knoten im Link", "ff02::2": "alle Router im Link", "ff02::fb": "mDNS", "ff02::1:2": "alle DHCPv6-Server/Relays", "ff05::1:3": "alle DHCPv6-Server (Site)" };
        const c = compress(g);
        if (known[c]) return known[c];
        if (g[0] === 0xff02 && g[5] === 1 && (g[6] >> 8) === 0xff) return "Solicited-Node-Multicast (Neighbor Discovery)";
        return `Gültigkeitsbereich: ${MC_SCOPE[g[0] & 0xf] || "reserviert"}`;
      }
      return "";
    }
    function typeSteps(g) {
      const t = typeOf(g), T = TYPES[t];
      if (t === "unspec") return "<p><strong>Adresstyp:</strong> Alle 128 Bit sind 0 → <strong>unspezifizierte Adresse</strong> <code>::</code>.</p>";
      if (t === "loop") return "<p><strong>Adresstyp:</strong> Alle Bits sind 0 außer dem letzten → <strong>Loopback</strong> <code>::1</code>.</p>";
      if (t === "v4m" || t === "other") return `<p><strong>Adresstyp:</strong> ${T.name} (${T.net}).</p>`;
      const b = g[0].toString(2).padStart(16, "0");
      const first = { gua: "001", ula: "1111 110", ll: "1111 1110 10", mc: "1111 1111" }[t];
      return `<p><strong>Adresstyp am Anfang erkennen:</strong> erster Block ${code(hex4(g[0]))} = <span class="bits">${colorBits(b, T.bits, 16, "", true)}</span>. Die ersten ${T.bits} Bit sind ${first} → Bereich ${code(T.net)} → <strong>${T.name}</strong>.</p>`;
    }
    function compressSteps(g) {
      const S = [`<li><strong>Vollständig:</strong> ${code(full(g))}</li>`, `<li><strong>Führende Nullen</strong> in jedem Block weglassen: ${code(plain(g))}</li>`];
      const runs = zeroRuns(g), b = bestRun(g);
      if (!runs.length) S.push(`<li>Kein Block ist 0 → kein „::“ möglich. Ergebnis: ${code(compress(g))}</li>`);
      else if (!b) S.push(`<li>Es gibt nur einzelne 0-Blöcke – die bleiben als „0“ stehen („::“ erst ab zwei Null-Blöcken). Ergebnis: ${code(compress(g))}</li>`);
      else {
        const list = runs.map((r) => (r.l === 1 ? `Block ${r.s + 1} (1×)` : `Blöcke ${r.s + 1}–${r.s + r.l} (${r.l}×)`)).join(", ");
        const tie = runs.filter((r) => r.l === b.l).length > 1;
        S.push(`<li><strong>Nullfolgen suchen:</strong> ${list}. ${tie ? "Zwei gleich lange Folgen → die <strong>erste</strong> wird ersetzt." : "Die <strong>längste</strong> wird ersetzt."}</li>`);
        S.push(`<li><strong>Durch „::“ ersetzen</strong> (nur einmal erlaubt): ${code(compress(g))}</li>`);
      }
      return `<ol>${S.join("")}</ol>`;
    }
    function expandSteps(g) {
      const b = bestRun(g), S = [];
      if (b) {
        const hn = b.s, tn = 8 - b.s - b.l;
        S.push(`<li><strong>„::“ auflösen:</strong> davor ${pl(hn, "Block", "Blöcke")}, dahinter ${pl(tn, "Block", "Blöcke")} → es fehlen 8 − ${hn} − ${tn} = <strong>${b.l}</strong> Null-Blöcke: ${code(plain(g))}</li>`);
      } else S.push("<li>Kein „::“ vorhanden – alle 8 Blöcke stehen schon da.</li>");
      S.push(`<li><strong>Jeden Block auf 4 Stellen auffüllen</strong> (führende Nullen ergänzen): ${code(full(g))}</li>`);
      return `<ol>${S.join("")}</ol>`;
    }
    function prefixSteps(g, len) {
      const f = Math.floor(len / 16), rest = len % 16, net = maskG(g, len);
      const S = [`<li><strong>/${len}</strong> = ${pl(f, "voller Block", "volle Blöcke")} à 16 Bit${rest ? ` + ${rest} Bit im ${f + 1}. Block` : ""}${len % 4 === 0 ? ` = die ersten ${len / 4} Hex-Ziffern` : ""}.</li>`];
      if (rest) {
        const x = g[f];
        if (rest % 4 === 0) S.push(`<li>Im ${f + 1}. Block ${code(hex4(x))} bleiben die ersten ${pl(rest / 4, "Hex-Ziffer", "Hex-Ziffern")} stehen, der Rest wird 0 → ${code(hex4(net[f]))}</li>`);
        else S.push(`<li>Im ${f + 1}. Block: ${code(hex4(x))} = <span class="bits">${colorBits(x.toString(2).padStart(16, "0"), rest, 16, "", true)}</span> → nur die ersten ${rest} Bit bleiben: ${code(hex4(net[f]))}</li>`);
      }
      S.push(`<li>Alles dahinter wird 0 → Präfix ${code(compress(net) + "/" + len)}</li>`);
      if (len === 64) S.push(`<li>Die letzten 64 Bit sind die <strong>Interface-ID</strong>: ${code(plain(g.slice(4)))}</li>`);
      return `<ol>${S.join("")}</ol>`;
    }

    /* MAC / EUI-64 */
    function parseMac(str) {
      const raw = String(str ?? "").trim(), s = raw.replace(/[\s:.-]/g, "");
      if (!/^[0-9a-f]{12}$/i.test(s)) return { error: `„${esc(raw)}“ ist keine gültige MAC-Adresse – sie besteht aus 12 Hex-Ziffern, z. B. <code>00-1A-2B-3C-4D-5E</code>.` };
      return { mac: s.match(/../g).map((x) => parseInt(x, 16)) };
    }
    const eui64 = (mac) => { const b = [mac[0] ^ 2, mac[1], mac[2], 0xff, 0xfe, mac[3], mac[4], mac[5]]; return [0, 2, 4, 6].map((i) => (b[i] << 8) | b[i + 1]); };
    function macFromIid(iid) {
      if ((iid[1] & 0xff) !== 0xff || iid[2] >> 8 !== 0xfe) return null;
      return [(iid[0] >> 8) ^ 2, iid[0] & 0xff, iid[1] >> 8, iid[2] & 0xff, iid[3] >> 8, iid[3] & 0xff];
    }
    const macStr = (mac) => mac.map(hx2).join("-");
    const solicited = (g) => [0xff02, 0, 0, 0, 0, 1, 0xff00 | (g[6] & 0xff), g[7]];
    function euiSteps(mac, net) {
      const b0 = mac[0], f0 = b0 ^ 2, iid = eui64(mac);
      const hb = (x) => { const s = x.toString(2).padStart(8, "0"); return `<span class="bits">${s.slice(0, 4)} ${s.slice(4, 6)}<span class="n">${s[6]}</span>${s[7]}</span>`; };
      return `<ol>
        <li><strong>MAC-Adresse in der Mitte teilen:</strong> ${code(mac.slice(0, 3).map(hx2).join("-"))} | ${code(mac.slice(3).map(hx2).join("-"))}</li>
        <li><strong>FF-FE einfügen:</strong> ${code([...mac.slice(0, 3), 0xff, 0xfe, ...mac.slice(3)].map(hx2).join("-"))}</li>
        <li><strong>7. Bit des ersten Bytes invertieren</strong> (U/L-Bit): ${hx2(b0)} = ${hb(b0)} → ${hb(f0)} = ${hx2(f0)}</li>
        <li><strong>In vier 16-Bit-Blöcke schreiben:</strong> ${code(full(iid))} → ohne führende Nullen ${code(plain(iid))}</li>
        ${net ? `<li><strong>Mit dem /64-Präfix verbinden:</strong> ${code(compress(net) + "/64")} + Interface-ID → ${code(compress(net.slice(0, 4).concat(iid)))}</li>` : ""}</ol>`;
    }

    /* Generatoren */
    const randGroup = () => pick([() => rnd(0x1000, 0xffff), () => rnd(0x1000, 0xffff), () => rnd(0x100, 0xfff), () => rnd(0x10, 0xff), () => rnd(1, 0xf)])();
    const TRAPS = ["10011001", "11001001", "10010011", "10001000", "10010001", "01001000", "10111011", "11011110", "10110001", "10001101", "00011111", "00100001", "11110000", "11100100", "11111111", "10101011"];
    function genAddr(lvl) {
      let pat;
      if (lvl === 1) { const l = rnd(2, 5), s = rnd(1, 8 - l); pat = Array.from({ length: 8 }, (_, i) => (i >= s && i < s + l ? 0 : 1)); }
      else pat = [...pick(TRAPS)].map(Number);
      const g = pat.map((z) => (z ? randGroup() : 0));
      const pres = [[0x2001, 0x0db8], [0x2001, 0x0db8], [0xfd00 | rnd(0, 0xff), rnd(1, 0xffff)], [0x2a01, rnd(0x100, 0xfff)], [0x2003, rnd(0x10, 0xfff)]];
      if (!pat[1] && !pat[2] && !pat[3]) pres.push([0xfe80], [0xfe80]);
      pick(pres).forEach((x, i) => { if (pat[i]) g[i] = x; });
      return g;
    }
    function genTyped(key) {
      const iid = () => pick([() => [randGroup(), randGroup(), randGroup(), randGroup()], () => [0, 0, 0, rnd(1, 0xff)], () => [rnd(0, 0xffff), rnd(0, 0xff) << 8 | 0xff, 0xfe00 | rnd(0, 0xff), rnd(0, 0xffff)]])();
      switch (key) {
        case "gua": return pick([
          () => [0x2001, 0x0db8, rnd(1, 0xffff), rnd(0, 0xff), ...iid()],
          () => [0x2a02, rnd(0x100, 0xfff), rnd(0, 0xffff), rnd(0, 0xffff), ...iid()],
          () => [0x2003, rnd(0x10, 0xff), rnd(0, 0xffff), rnd(0, 0xffff), ...iid()],
          () => [0x2600 | rnd(0, 0xff), rnd(0, 0xffff), rnd(0, 0xffff), rnd(0, 0xffff), ...iid()],
          () => [0x3fff, rnd(0, 0xfff), rnd(0, 0xffff), rnd(0, 0xff), ...iid()],
        ])();
        case "ula": return Math.random() < 0.85 ? [0xfd00 | rnd(0, 0xff), rnd(0, 0xffff), rnd(0, 0xffff), rnd(0, 0xff), ...iid()] : [0xfc00, 0, 0, rnd(1, 0xff), ...iid()];
        case "ll": return [0xfe80, 0, 0, 0, ...iid()];
        case "mc": return pick([[0xff02, 0, 0, 0, 0, 0, 0, 1], [0xff02, 0, 0, 0, 0, 0, 0, 2], [0xff02, 0, 0, 0, 0, 1, 0xff00 | rnd(0, 0xff), rnd(0, 0xffff)], [0xff05, 0, 0, 0, 0, 0, 1, 3], [0xff02, 0, 0, 0, 0, 0, 0, 0xfb], [0xff0e, 0, 0, 0, 0, 0, 0, 0x101]]);
        case "loop": return [0, 0, 0, 0, 0, 0, 0, 1];
        default: return [0, 0, 0, 0, 0, 0, 0, 0];
      }
    }
    function genSite() {
      const g = pick([() => [0x2001, 0x0db8, rnd(1, 0xffff)], () => [0x2a02, rnd(0x100, 0xfff), rnd(1, 0xffff)], () => [0xfd00 | rnd(0, 0xff), rnd(1, 0xffff), rnd(1, 0xffff)]])();
      g.push((rnd(1, 0xff) << 8) | rnd(1, 0xff));
      return g.concat(pick([() => [randGroup(), randGroup(), randGroup(), randGroup()], () => [0, 0, 0, rnd(1, 0xfff)], () => [rnd(0, 0xffff), (rnd(0, 0xff) << 8) | 0xff, 0xfe00 | rnd(0, 0xff), rnd(0, 0xffff)]])());
    }

    /* Prüfen mit hilfreicher Rückmeldung */
    function whyNot(s, g) {
      const R = [], b = bestRun(g);
      const blocks = s.split("::").join(":").split(":").filter(Boolean);
      if (blocks.some((x) => x.length > 1 && x[0] === "0")) R.push("führende Nullen in jedem Block weglassen");
      if (!s.includes("::")) { if (b) R.push(`die Nullfolge ab Block ${b.s + 1} mit „::“ abkürzen`); }
      else {
        const [hd, tl] = s.split("::");
        const hn = hd ? hd.split(":").length : 0, tn = tl ? tl.split(":").length : 0, ul = 8 - hn - tn;
        if (ul === 1) R.push("einen einzelnen 0-Block nicht mit „::“ ersetzen, sondern als „0“ schreiben");
        else if (b && (hn !== b.s || ul !== b.l)) {
          const inside = zeroRuns(g).find((r) => hn >= r.s && hn + ul <= r.s + r.l);
          if (inside && ul < inside.l) R.push("die Nullfolge komplett durch „::“ ersetzen – die angrenzenden 0-Blöcke gehören dazu");
          else if (ul < b.l) R.push("die längste Nullfolge mit „::“ ersetzen");
          else R.push("bei gleich langen Nullfolgen die erste mit „::“ ersetzen");
        }
      }
      if (!R.length) R.push(`kürzeste Form ist ${compress(g)}`);
      return R.join("; ") + ".";
    }
    function checkShort(v, g) {
      const r = parse(v);
      if (r.error) return { err: r.error };
      if (r.len !== null) return { err: "Bitte die Adresse ohne Präfixlänge eingeben." };
      if (!eq(r.g, g)) return { ok: false, note: "Das ist eine andere Adresse – prüfe, ob beim Kürzen ein Block verloren gegangen ist." };
      const s = String(v).trim().toLowerCase();
      if (s === compress(g)) return { ok: true };
      return { ok: false, note: "Gleiche Adresse, aber nicht die Normschreibweise: " + whyNot(s, g) };
    }
    function checkFull(v, g) {
      const r = parse(v);
      if (r.error) return { err: r.error };
      if (r.len !== null) return { err: "Bitte die Adresse ohne Präfixlänge eingeben." };
      if (!eq(r.g, g)) return { ok: false, note: "Das ist eine andere Adresse – zähle die Null-Blöcke hinter „::“ noch einmal nach." };
      if (/^([0-9a-f]{4}:){7}[0-9a-f]{4}$/.test(String(v).trim().toLowerCase())) return { ok: true };
      return { ok: false, note: "Gleiche Adresse, aber nicht vollständig: alle 8 Blöcke mit je 4 Stellen, führende Nullen ergänzen, kein „::“." };
    }
    function fPrefix(label, net, len) {
      return {
        label, wide: true, ph: len === 64 ? "z. B. 2001:db8:abcd:12::/64" : "z. B. 2001:db8:abcd::/48", show: `${compress(net)}/${len}`,
        check: (v) => {
          const r = parse(v);
          if (r.error) return { err: r.error };
          if (r.len !== null && r.len !== len) return { ok: false, note: `Die Präfixlänge ist /${len}, nicht /${r.len}.` };
          if (eq(r.g, net)) return { ok: true };
          if (eq(maskG(r.g, len), net)) return { ok: false, note: `Der Netzanteil stimmt, aber hinter den ersten ${len} Bit muss alles 0 sein.` };
          return { ok: false };
        },
      };
    }
    const fIid = (label, iid) => ({ label, ph: "z. B. 21a:2bff:fe3c:4d5e", show: plain(iid), check: (v) => { const r = parseIid(v); return r.error ? { err: r.error } : { ok: eq(r.g, iid) }; } });

    return { eq, core, parse, parseIid, full, plain, compress, zeroRuns, bestRun, maskG, bits128, TYPES, TYPE_KEYS, typeOf, typeNote, typeSteps, compressSteps, expandSteps, prefixSteps, parseMac, eui64, macFromIid, macStr, solicited, euiSteps, randGroup, genAddr, genTyped, genSite, whyNot, checkShort, checkFull, fPrefix, fIid };
  })();

  /* ---------- IPv6: Aufgaben ---------- */
  const V6G = (() => {
    function short(lvl) {
      const g = V6.genAddr(lvl);
      return { html: `${tag("Adresse kürzen")}<p class="mb-0">Schreibe <strong class="mono text-break">${V6.full(g)}</strong> so kurz wie möglich (Regeln nach RFC 5952).</p>`, fields: [{ label: "Kürzeste Schreibweise", wide: true, ph: "z. B. 2001:db8::1", show: V6.compress(g), check: (v) => V6.checkShort(v, g) }], steps: V6.compressSteps(g) };
    }
    function long(lvl) {
      const g = V6.genAddr(lvl);
      return { html: `${tag("Adresse expandieren")}<p class="mb-0">Schreibe <strong class="mono text-break">${V6.compress(g)}</strong> vollständig aus: 8 Blöcke mit je 4 Hex-Ziffern.</p>`, fields: [{ label: "Vollständige Schreibweise", wide: true, ph: "xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx", show: V6.full(g), check: (v) => V6.checkFull(v, g) }], steps: V6.expandSteps(g) };
    }
    function type(lvl) {
      const key = pick(["gua", "gua", "ula", "ula", "ll", "ll", "mc", "mc", "loop", "unspec"]), g = V6.genTyped(key), T = V6.TYPES;
      const shown = Math.random() < 0.25 ? V6.full(g) : V6.compress(g);
      return {
        html: `${tag("Adresstyp bestimmen")}<p class="mb-0">Welcher Adresstyp ist <strong class="mono text-break">${shown}</strong>?</p>`,
        fields: [{ label: "Adresstyp", options: V6.TYPE_KEYS.map((k) => [k, lvl === 1 ? `${T[k].name} (${T[k].net})` : T[k].name]), show: `${T[key].name} (${T[key].net})`, check: (v) => ({ ok: v === key }) }],
        steps: V6.typeSteps(g) + `<p class="mb-0">${T[key].name}: ${T[key].desc}.${V6.typeNote(g) ? ` Hier: ${V6.typeNote(g)}.` : ""}</p>`,
      };
    }
    function prefix(lvl) {
      const len = lvl === 1 ? pick([48, 64]) : pick([48, 56, 56, 64]), g = V6.genSite(), net = V6.maskG(g, len);
      const fields = [V6.fPrefix("Präfix (Netzanteil), gekürzt mit Präfixlänge", net, len)];
      if (len === 64) fields.push(V6.fIid("Interface-ID (letzte 64 Bit)", g.slice(4)));
      return { html: `${tag("Präfix bestimmen")}<p class="mb-0">Ein Host hat die Adresse <strong class="mono text-break">${V6.compress(g)}/${len}</strong>. Bestimme ${len === 64 ? "Präfix und Interface-ID" : "das Präfix (den Netzanteil)"}.</p>`, fields, steps: V6.prefixSteps(g, len) };
    }
    function subnets(lvl) {
      const from = lvl === 1 ? 48 : pick([48, 56]);
      const base = [0x2001, 0x0db8, rnd(1, 0xffff), from === 56 ? rnd(1, 0xff) << 8 : 0, 0, 0, 0, 0];
      const count = P2(64 - from);
      const n = pick([2, 3, 4, 5, 8, 10, 11, 12, 16, 17, 20, 26, 32, 33, 100, 256].filter((x) => x <= count));
      const id = n - 1, sub = base.slice();
      sub[3] = base[3] | id;
      const idHex = id.toString(16);
      return {
        html: `${tag("/64-Subnetze bilden")}<p class="mb-1">Du bekommst das Präfix <strong class="mono">${V6.compress(base)}/${from}</strong> und teilst es in /64-Subnetze auf.</p><p class="small muted mb-0">Zählung: Das 1. Subnetz hat die Subnetz-ID 0.</p>`,
        fields: [F.int("Anzahl möglicher /64-Subnetze", count), V6.fPrefix(`Präfix des ${n}. /64-Subnetzes`, sub, 64)],
        steps: `<ol>
          <li><strong>Bits für die Subnetz-ID:</strong> 64 − ${from} = ${64 - from} Bit → 2${sup(64 - from)} = <strong>${grp(count)}</strong> /64-Subnetze</li>
          <li><strong>Subnetz-ID:</strong> Das ${n}. Subnetz hat die ID ${n} − 1 = ${id} (dezimal) = <strong>${idHex}</strong> (hex)${id > 15 ? ` – denn ${id} = ${Math.floor(id / 16)}·16 + ${id % 16}` : ""}</li>
          <li><strong>Einsetzen:</strong> ${from === 48 ? "Bei einem /48 ist der komplette 4. Block die Subnetz-ID" : `Bei einem /56 gehören die ersten beiden Hex-Ziffern des 4. Blocks (${hex4(base[3]).slice(0, 2)}) noch zum Präfix, die Subnetz-ID steht in den letzten beiden (${idHex.padStart(2, "0")})`} → 4. Block ${code(hex4(sub[3]))} → ${code(V6.compress(sub) + "/64")}</li></ol>`,
      };
    }
    function eui() {
      const mac = [(rnd(0, 63) << 2) | (Math.random() < 0.2 ? 2 : 0), rnd(0, 255), rnd(0, 255), rnd(0, 255), rnd(0, 255), rnd(0, 255)];
      const shown = pick([() => mac.map(hx2).join("-"), () => mac.map(hx2).join(":").toLowerCase(), () => [0, 2, 4].map((i) => hx2(mac[i]) + hx2(mac[i + 1])).join(".").toLowerCase()])();
      const iid = V6.eui64(mac), ll = [0xfe80, 0, 0, 0, ...iid];
      return {
        html: `${tag("EUI-64")}<p class="mb-0">Ein Interface hat die MAC-Adresse <strong class="mono">${shown}</strong>. Bilde die modifizierte EUI-64-Interface-ID und die Link-Local-Adresse (Präfix fe80::/64).</p>`,
        fields: [V6.fIid("Interface-ID (EUI-64)", iid), { label: "Link-Local-Adresse (gekürzt)", wide: true, ph: "fe80::…", show: V6.compress(ll), check: (v) => { const r = V6.parse(v); return r.error ? { err: r.error } : { ok: V6.eq(r.g, ll) }; } }],
        steps: V6.euiSteps(mac, [0xfe80, 0, 0, 0, 0, 0, 0, 0]),
      };
    }
    const ALL = { short, long, type, prefix, subnets, eui };
    const gen = (t, lvl) => ALL[t === "mix" ? pick(Object.keys(ALL)) : t](lvl);
    return { gen, ALL };
  })();

  /* ---------- IPv6: Rechner ---------- */
  function calcV6(str) {
    const r = V6.parse(str);
    if (r.error) return r;
    const g = r.g, len = r.len ?? 64, t = V6.typeOf(g), T = V6.TYPES[t], net = V6.maskG(g, len), note = V6.typeNote(g);
    const mac = V6.macFromIid(g.slice(4));
    const unicast = t === "gua" || t === "ula" || t === "ll";
    const exp = 128 - len;
    const html = resBox(kv([
      ["Vollständig", V6.full(g)],
      ["Gekürzt (RFC 5952)", V6.compress(g)],
      ["Adresstyp", `${T.name} (${T.net})`],
      ["Präfixlänge", `/${len}${r.len === null ? " (angenommen)" : ""}`],
      ["Präfix (Netzanteil)", `${V6.compress(net)}/${len}`],
      len === 64 ? ["Interface-ID", V6.plain(g.slice(4))] : null,
      ["Adressen im Präfix", exp <= 64 ? `2${sup(exp)} = ${grp((2n ** BigInt(exp)).toString())}` : `2${sup(exp)} ≈ ${(Math.pow(2, exp) / Math.pow(10, Math.floor(exp * Math.log10(2)))).toFixed(1).replace(".", ",")} · 10${sup(Math.floor(exp * Math.log10(2)))}`],
      len < 64 ? ["/64-Subnetze darin", `2${sup(64 - len)} = ${grp((2n ** BigInt(64 - len)).toString())}`] : null,
      mac && unicast ? ["EUI-64 erkannt", `ja – MAC ${V6.macStr(mac)}`] : null,
      unicast ? ["Solicited-Node-Multicast", V6.compress(V6.solicited(g))] : null,
    ]) + `<p class="small mt-2 mb-0"><strong>${T.name}:</strong> ${T.desc}${note ? ` – ${note}` : ""}.</p>`)
      + section(`Binärdarstellung (${len} Bit Präfix)`, legend + `<div class="bits">${colorBits(V6.bits128(g), len, 16, " : ", true, true)}</div>`)
      + stepsBox(`<h6>Kürzen</h6>${V6.compressSteps(g)}<h6>Adresstyp</h6>${V6.typeSteps(g)}<h6>Präfix /${len}</h6>${V6.prefixSteps(g, len)}`);
    return { html };
  }
  function calcEui(macIn, prefixIn) {
    const m = V6.parseMac(macIn);
    if (m.error) return m;
    const p = V6.parse(String(prefixIn ?? "").trim() || "fe80::/64");
    if (p.error) return { error: "Präfix: " + p.error };
    if (p.len !== null && p.len !== 64) return { error: "EUI-64 wird mit einem /64-Präfix kombiniert – bitte ein /64 angeben, z. B. <code>fe80::/64</code> oder <code>2001:db8:1:2::/64</code>." };
    const net = V6.maskG(p.g, 64), iid = V6.eui64(m.mac), addr = net.slice(0, 4).concat(iid);
    const html = (V6.eq(net, p.g) ? "" : `<p class="small muted mt-3 mb-0"><i class="bi bi-info-circle" aria-hidden="true"></i> Hinter den ersten 64 Bit wurde das Präfix auf 0 gesetzt: ${esc(V6.compress(net))}/64.</p>`)
      + resBox(kv([
        ["MAC-Adresse", V6.macStr(m.mac)],
        ["U/L-Bit", `${(m.mac[0] & 2) ? "1 (lokal verwaltet)" : "0 (weltweit eindeutig)"} → wird invertiert`],
        ["Interface-ID", `${V6.full(iid)} = ${V6.plain(iid)}`],
        ["IPv6-Adresse", V6.compress(addr)],
        ["Vollständig", V6.full(addr)],
        ["Adresstyp", `${V6.TYPES[V6.typeOf(addr)].name} (${V6.TYPES[V6.typeOf(addr)].net})`],
      ]))
      + stepsBox(V6.euiSteps(m.mac, net));
    return { html };
  }

  /* =====================================================================
     Gemeinsamer Trainer-Rahmen
     ===================================================================== */
  function trainer(root, h, cfg) {
    const id = cfg.id, P = cfg.practice;
    const st = { task: null, ok: 0, n: 0, calc: cfg.calc[0].v };
    const seg = (name, items, cur, label) => `<div class="seg" role="radiogroup" aria-label="${label}">${items.map(([v, t]) => `<input type="radio" name="${id}-${name}" id="${id}-${name}-${v}" value="${v}"${v === cur ? " checked" : ""}><label for="${id}-${name}-${v}">${t}</label>`).join("")}</div>`;
    root.innerHTML = `
      <section class="tile tile-pad">
        <div class="d-flex flex-wrap gap-2 align-items-center justify-content-between mb-3">
          ${seg("mode", [["practice", `${h.icon("pencil-square")} Üben`], ["calc", `${h.icon("calculator")} Rechner`]], "practice", "Modus")}
          <span class="chip" data-score aria-live="polite"></span>
        </div>
        <div data-pane="practice">
          <div class="row g-2 align-items-end mb-2">
            <div class="col-12 col-md-auto">
              <label class="form-label small fw-semi mb-1" for="${id}-type">Aufgabentyp</label>
              <select class="form-select" id="${id}-type">${P.types.map(([v, t]) => `<option value="${v}">${t}</option>`).join("")}</select>
            </div>
            ${P.levels ? `<div class="col-12 col-md-auto" data-lvl><div class="form-label small fw-semi mb-1">Schwierigkeit</div>${seg("lvl", P.levels, P.levels[0][0], "Schwierigkeit")}</div>` : ""}
          </div>
          ${P.hint ? `<p class="small muted mb-3">${P.hint}</p>` : ""}
          <div data-task></div>
          <div class="d-flex flex-wrap gap-2 mt-3">
            <button type="button" class="btn btn-accent" data-act="check">${h.icon("check2")} Prüfen</button>
            <button type="button" class="btn btn-soft" data-act="new">${h.icon("arrow-repeat")} Neue Aufgabe</button>
            <button type="button" class="btn btn-ghost" data-act="solve">${h.icon("eye")} Lösung zeigen</button>
          </div>
          <div data-out aria-live="polite"></div>
        </div>
        <div data-pane="calc" hidden>
          ${cfg.calc.length > 1 ? `<div class="mb-3">${seg("cm", cfg.calc.map((m) => [m.v, m.label]), st.calc, "Rechner-Art")}</div>` : ""}
          <div data-cform></div>
          <div class="d-flex flex-wrap gap-2 mt-3"><button type="button" class="btn btn-accent" data-act="calc">${h.icon("calculator")} Berechnen</button></div>
          <div data-cout aria-live="polite"></div>
        </div>
      </section>
      <section class="tile tile-pad prose mt-3">${cfg.info}</section>`;

    const q = (s) => root.querySelector(s);
    const taskEl = q("[data-task]"), out = q("[data-out]"), cform = q("[data-cform]"), cout = q("[data-cout]");
    const scoreEl = q("[data-score]"), typeSel = q(`#${id}-type`), lvlBox = q("[data-lvl]");
    const lvl = () => { const r = q(`input[name="${id}-lvl"]:checked`); return r ? Number(r.value) : 1; };
    const ctrl = (i) => taskEl.querySelector(`[data-i="${i}"]`);
    const fbEl = (i) => taskEl.querySelector(`[data-fb="${i}"]`);
    const updScore = () => { scoreEl.innerHTML = `${h.icon("trophy")} ${st.ok} von ${st.n} richtig`; };

    function fieldHtml(f, i) {
      const fid = `${id}-f${i}`;
      const ctl = f.options
        ? `<select class="form-select" id="${fid}" data-i="${i}"><option value="">– bitte wählen –</option>${f.options.map(([v, t]) => `<option value="${esc(v)}">${esc(t)}</option>`).join("")}</select>`
        : `<input class="form-control mono" id="${fid}" data-i="${i}" type="text" inputmode="${f.im || "text"}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${esc(f.ph || "")}">`;
      return `<div class="${f.wide ? "col-12 col-lg-8" : "col-12 col-sm-6 col-lg-4"}"><label class="form-label small fw-semi mb-1" for="${fid}">${f.label}</label>${ctl}<div class="small mt-1" data-fb="${i}"></div></div>`;
    }
    function newTask(focus) {
      const type = typeSel.value;
      if (lvlBox) lvlBox.hidden = P.usesLevel ? !P.usesLevel(type) : false;
      let t = null;
      try { t = P.gen(type, lvl()); } catch (e) { console.error(e); }
      if (!t) { taskEl.innerHTML = ""; out.innerHTML = errBox("Die Aufgabe konnte nicht erzeugt werden – klick bitte noch einmal auf „Neue Aufgabe“."); return; }
      st.task = t;
      t.counted = false;
      taskEl.innerHTML = `<div class="result-box mb-3">${t.html}</div><div class="row g-2">${t.fields.map(fieldHtml).join("")}</div>`;
      out.innerHTML = "";
      if (focus) { const c = ctrl(0); if (c) c.focus({ preventScroll: true }); }
    }
    function mark(i, r, f) {
      const c = ctrl(i);
      c.classList.remove("is-valid", "is-invalid");
      c.classList.add(r.ok ? "is-valid" : "is-invalid");
      c.setAttribute("aria-invalid", r.ok ? "false" : "true");
      fbEl(i).innerHTML = r.ok
        ? `<span class="chip ok">${h.icon("check-lg")} richtig</span>`
        : `<span class="chip bad">${h.icon("x-lg")} ${r.empty ? "leer" : "falsch"}</span> <span class="mono text-break">Lösung: ${esc(f.show)}</span>${r.note ? `<div class="muted mt-1">${r.note}</div>` : ""}`;
    }
    function check() {
      const t = st.task;
      if (!t) return;
      const vals = t.fields.map((_, i) => { const c = ctrl(i); return c ? String(c.value).trim() : ""; });
      if (vals.every((v) => !v)) { h.toast("Trag zuerst deine Lösung ein."); const c = ctrl(0); if (c) c.focus(); return; }
      const res = t.fields.map((f, i) => {
        if (!vals[i]) return { ok: false, empty: true };
        try { return f.check(vals[i]) || { ok: false }; } catch (e) { console.error(e); return { err: "Diese Eingabe kann ich nicht lesen." }; }
      });
      const bad = [];
      res.forEach((r, i) => {
        const c = ctrl(i);
        c.classList.remove("is-valid", "is-invalid");
        fbEl(i).innerHTML = "";
        if (r.err) { bad.push(i); c.classList.add("is-invalid"); c.setAttribute("aria-invalid", "true"); fbEl(i).innerHTML = `<span class="chip bad">${h.icon("exclamation-triangle")} Format</span> <span class="muted">${r.err}</span>`; }
      });
      if (bad.length) {
        out.innerHTML = errBox(`Bitte prüfe das Format ${bad.length === 1 ? "im markierten Feld" : "in den markierten Feldern"} und klick dann noch einmal auf „Prüfen“.`);
        ctrl(bad[0]).focus();
        return;
      }
      res.forEach((r, i) => mark(i, r, t.fields[i]));
      const nOk = res.filter((r) => r.ok).length, all = nOk === res.length;
      if (!t.counted) { t.counted = true; st.n++; if (all) st.ok++; updScore(); }
      out.innerHTML = h.feedback(all, all ? "Alle Felder stimmen – stark! Zum Vergleich hier der Rechenweg." : `${nOk} von ${res.length} ${res.length === 1 ? "Feld" : "Feldern"} richtig. Die Lösungen stehen unter den Feldern, der Rechenweg darunter.`) + stepsBox(t.steps);
    }
    function solve() {
      const t = st.task;
      if (!t) return;
      t.fields.forEach((f, i) => { fbEl(i).innerHTML = `<span class="chip">${h.icon("eye")} Lösung</span> <span class="mono text-break">${esc(f.show)}</span>`; });
      if (!t.counted) { t.counted = true; st.n++; updScore(); }
      out.innerHTML = stepsBox(t.steps);
    }
    function setMode(m) {
      q('[data-pane="practice"]').hidden = m !== "practice";
      q('[data-pane="calc"]').hidden = m !== "calc";
      scoreEl.hidden = m !== "practice";
      if (m === "calc" && !cform.innerHTML) renderCalc();
    }
    function cfield(f) {
      const fid = `${id}-c-${f.name}`;
      const ctl = f.options
        ? `<select class="form-select" id="${fid}" data-c="${f.name}">${f.options.map(([v, t]) => `<option value="${esc(v)}"${v === f.value ? " selected" : ""}>${t}</option>`).join("")}</select>`
        : `<input class="form-control mono" id="${fid}" data-c="${f.name}" type="text" inputmode="${f.im || "text"}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" value="${esc(f.value || "")}" placeholder="${esc(f.ph || "")}">`;
      return `<div class="${f.col || "col-12 col-md-6"}"><label class="form-label small fw-semi mb-1" for="${fid}">${f.label}</label>${ctl}${f.help ? `<div class="form-text">${f.help}</div>` : ""}</div>`;
    }
    const calcMode = () => cfg.calc.find((x) => x.v === st.calc) || cfg.calc[0];
    function renderCalc() {
      const m = calcMode();
      cform.innerHTML = `${m.intro ? `<p class="small muted mb-2">${m.intro}</p>` : ""}<div class="row g-2">${m.fields.map(cfield).join("")}</div>`;
      runCalc();
    }
    function runCalc() {
      const m = calcMode(), v = {};
      cform.querySelectorAll("[data-c]").forEach((el) => { v[el.dataset.c] = el.value; });
      let r;
      try { r = m.run(v); } catch (e) { console.error(e); r = { error: "Da ist etwas schiefgelaufen – prüf bitte deine Eingabe." }; }
      cout.innerHTML = r && r.html ? r.html : errBox((r && r.error) || "Keine Ausgabe.");
    }

    root.addEventListener("click", (e) => {
      const b = e.target.closest("[data-act]");
      if (!b || !root.contains(b)) return;
      const a = b.dataset.act;
      if (a === "check") check();
      else if (a === "new") newTask(true);
      else if (a === "solve") solve();
      else if (a === "calc") runCalc();
    });
    root.addEventListener("change", (e) => {
      const t = e.target;
      if (t.name === `${id}-mode`) setMode(t.value);
      else if (t.name === `${id}-lvl` || t === typeSel) newTask(false);
      else if (t.name === `${id}-cm`) { st.calc = t.value; renderCalc(); }
      else if (t.matches("select[data-c]")) runCalc();
    });
    root.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" || e.isComposing) return;
      const t = e.target;
      if (!t.matches || !t.matches("input.form-control")) return;
      e.preventDefault();
      if (t.closest('[data-pane="calc"]')) runCalc();
      else check();
    });
    updScore();
    newTask(false);
  }

  /* =====================================================================
     Erklärtexte
     ===================================================================== */
  const INFO_SUBNET = `
    <h5>So rechnest du</h5>
    <div class="callout formel"><strong>Formeln</strong><br>
      Host-Bits = 32 − Präfixlänge<br>
      Nutzbare Hosts = 2<sup>Host-Bits</sup> − 2<br>
      Anzahl Subnetze = 2<sup>geliehene Bits</sup> (geliehene Bits = neues Präfix − altes Präfix)<br>
      Blockgröße = 256 − Maskenwert im interessanten Oktett<br>
      Wildcard = 255.255.255.255 − Subnetzmaske</div>
    <div class="callout merke"><strong>Merke:</strong> Netzadresse = IP-Adresse UND Subnetzmaske (bitweise) – alle Hostbits 0. Broadcast = alle Hostbits 1 = nächste Netzadresse − 1. Netz- und Broadcast-Adresse bekommt kein Host, deshalb „− 2“. Bei der Anzahl der Subnetze wird nichts abgezogen.</div>
    <h6>Maskenwerte im interessanten Oktett</h6>
    <table><thead><tr><th>Einsen im Oktett</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th></tr></thead>
      <tbody><tr><td>Maskenwert</td><td>128</td><td>192</td><td>224</td><td>240</td><td>248</td><td>252</td><td>254</td><td>255</td></tr>
      <tr><td>Blockgröße</td><td>128</td><td>64</td><td>32</td><td>16</td><td>8</td><td>4</td><td>2</td><td>1</td></tr></tbody></table>
    <div class="callout tipp"><strong>VLSM:</strong> Plane immer vom größten zum kleinsten Subnetz. Dann liegt jedes Subnetz automatisch auf einer passenden Blockgrenze und es entstehen keine Lücken.</div>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> „mindestens 62 Hosts“ passt genau in ein /26 (64 − 2 = 62), „mindestens 63 Hosts“ braucht schon ein /25. Und /31 bzw. /32 sind Sonderfälle (Punkt-zu-Punkt-Link bzw. einzelner Host).</div>`;

  const INFO_NUM = `
    <h5>So rechnest du</h5>
    <div class="callout formel"><strong>Stellenwertmethode (→ Dezimal)</strong><br>
      Wert = Σ Ziffer · Basis<sup>Stelle</sup> (Stellen von rechts ab 0)<br>
      z. B. 1011<sub>2</sub> = 1·8 + 0·4 + 1·2 + 1·1 = 11<br><br>
      <strong>Divisionsrestverfahren (Dezimal →)</strong><br>
      so lange durch die Basis teilen, bis 0 herauskommt – Reste von unten nach oben lesen</div>
    <div class="callout merke"><strong>Merke:</strong> 1 Hex-Ziffer = 4 Bit (Nibble), 1 Oktalziffer = 3 Bit, 1 Byte = 2 Hex-Ziffern. Zwischen Binär, Oktal und Hex rechnest du deshalb ohne Division – nur durch Gruppieren von rechts.</div>
    <h6>Die ersten 16 Zahlen</h6>
    <table><thead><tr><th>Dez</th><th>Bin</th><th>Hex</th><th>Dez</th><th>Bin</th><th>Hex</th></tr></thead><tbody>
      ${Array.from({ length: 8 }, (_, i) => `<tr><td>${i}</td><td class="mono">${i.toString(2).padStart(4, "0")}</td><td class="mono">${i.toString(16).toUpperCase()}</td><td>${i + 8}</td><td class="mono">${(i + 8).toString(2)}</td><td class="mono">${(i + 8).toString(16).toUpperCase()}</td></tr>`).join("")}
    </tbody></table>
    <div class="callout formel"><strong>Binär addieren</strong><br>0 + 0 = 0 · 0 + 1 = 1 · 1 + 1 = 10 (0, Übertrag 1) · 1 + 1 + 1 = 11 (1, Übertrag 1)<br><br>
      <strong>Zweierkomplement (8 Bit)</strong><br>−x = alle Bits von x invertieren, dann + 1<br>Wertebereich: −128 … +127 · höchstes Bit hat den Stellenwert −128</div>
    <div class="callout tipp"><strong>Tipp:</strong> Subtraktion ist im Rechner eine Addition: A − B = A + Zweierkomplement(B). Ein Übertrag aus dem höchsten Bit wird bei fester Bitbreite einfach verworfen.</div>`;

  const INFO_V6 = `
    <h5>Kürzen nach RFC 5952</h5>
    <div class="callout merke"><strong>Merke:</strong><br>
      1. Führende Nullen in jedem Block weglassen (0db8 → db8, 0000 → 0).<br>
      2. Die <strong>längste</strong> Folge von mindestens zwei 0-Blöcken durch „::“ ersetzen – nur <strong>einmal</strong> pro Adresse.<br>
      3. Bei gleich langen Folgen die <strong>erste</strong> ersetzen.<br>
      4. Ein einzelner 0-Block bleibt als „0“ stehen. Hex-Buchstaben klein schreiben.</div>
    <h6>Adresstypen</h6>
    <table><thead><tr><th>Typ</th><th>Präfix</th><th>Erkennst du an</th><th>Beispiel</th></tr></thead><tbody>
      <tr><td>Global Unicast</td><td class="mono">2000::/3</td><td>beginnt mit 2 oder 3</td><td class="mono">2001:db8:acad::1</td></tr>
      <tr><td>Unique Local</td><td class="mono">fc00::/7</td><td>beginnt mit fc oder fd</td><td class="mono">fd12:3456:789a::1</td></tr>
      <tr><td>Link-Local</td><td class="mono">fe80::/10</td><td>beginnt mit fe8 bis feb</td><td class="mono">fe80::21a:2bff:fe3c:4d5e</td></tr>
      <tr><td>Multicast</td><td class="mono">ff00::/8</td><td>beginnt mit ff</td><td class="mono">ff02::1</td></tr>
      <tr><td>Loopback</td><td class="mono">::1/128</td><td>nur das letzte Bit ist 1</td><td class="mono">::1</td></tr>
      <tr><td>Unspezifiziert</td><td class="mono">::/128</td><td>alles 0</td><td class="mono">::</td></tr>
    </tbody></table>
    <div class="callout formel"><strong>Präfixe und Subnetze</strong><br>
      1 Hex-Ziffer = 4 Bit · 1 Block = 16 Bit<br>
      /48 = 3 Blöcke · /56 = 3 Blöcke + 2 Hex-Ziffern · /64 = 4 Blöcke<br>
      Anzahl /64-Subnetze = 2<sup>64 − Präfixlänge</sup>: /48 → 65.536 · /56 → 256 · /60 → 16</div>
    <div class="callout formel"><strong>EUI-64 (Interface-ID aus MAC)</strong><br>
      1. MAC in der Mitte teilen · 2. FF-FE einfügen · 3. 7. Bit des 1. Bytes invertieren<br>
      00-1A-2B-3C-4D-5E → 021a:2bff:fe3c:4d5e</div>
    <div class="callout tipp"><strong>Tipp zum 7. Bit:</strong> Es hat den Wert 2 und steckt in der zweiten Hex-Ziffer: 0 ↔ 2, 4 ↔ 6, 8 ↔ A, C ↔ E (und 1 ↔ 3, 5 ↔ 7, 9 ↔ B, D ↔ F).</div>`;

  /* =====================================================================
     Registrierung
     ===================================================================== */
  L.tool({
    id: "subnetting",
    title: "IPv4-Subnetting-Trainer",
    icon: "diagram-2",
    hue: 220,
    desc: "Netz- und Broadcast-Adresse, Hostbereich, Masken, Subnetz-Aufteilung und VLSM üben und berechnen – mit vollständigem Rechenweg.",
    exam: ["AP1", "AP2"],
    modules: ["lf09", "lf03", "lf11"],
    lib: Object.assign({}, V4, { gen: V4G, calcIp, calcSplit, calcVlsm }),
    render(root, h) {
      trainer(root, h, {
        id: "sn",
        practice: {
          types: [["mix", "Gemischt"], ["a", "IP/CIDR analysieren (Netz, Broadcast, Hosts)"], ["b", "CIDR ↔ Subnetzmaske ↔ Wildcard"], ["c", "Netz in k gleich große Subnetze teilen"], ["d", "Präfixlänge für mindestens H Hosts"]],
          levels: [["1", "Leicht · /24–/30"], ["2", "Mittel · /16–/23"], ["3", "Schwer · /8–/15"]],
          hint: "Die Schwierigkeit legt fest, in welchem Oktett gerechnet wird: leicht im 4., mittel im 3., schwer im 2. Oktett.",
          gen: (type, lvl) => { const t = type === "mix" ? pick(["a", "b", "c", "d"]) : type; return { a: V4G.analyze, b: V4G.mask, c: V4G.split, d: V4G.hosts }[t](lvl); },
        },
        calc: [
          { v: "ip", label: "IP-Analyse", intro: "IP-Adresse mit Präfix (z. B. /26) oder mit Subnetzmaske eingeben.", fields: [{ name: "cidr", label: "IP-Adresse / Präfix", value: "192.168.10.77/26", ph: "z. B. 172.16.45.14/20 oder 10.1.2.3 255.255.0.0", col: "col-12" }], run: (v) => calcIp(v.cidr) },
          { v: "split", label: "Subnetz-Aufteilung", intro: "Ein Netz in gleich große Subnetze teilen – nach Anzahl, nach Hosts je Subnetz oder nach neuer Präfixlänge.", fields: [{ name: "net", label: "Ausgangsnetz", value: "192.168.0.0/24", ph: "z. B. 10.0.0.0/16", col: "col-12 col-md-5" }, { name: "by", label: "Aufteilen nach", options: [["count", "Anzahl Subnetze (mindestens)"], ["hosts", "Hosts je Subnetz (mindestens)"], ["prefix", "neuer Präfixlänge"]], value: "count", col: "col-12 col-sm-7 col-md-4" }, { name: "val", label: "Wert", value: "6", im: "numeric", ph: "z. B. 6", col: "col-12 col-sm-5 col-md-3" }], run: (v) => calcSplit(v.net, v.by, v.val) },
          { v: "vlsm", label: "VLSM-Planer", intro: "Netz und Host-Anforderungen eingeben – die Subnetze werden absteigend nach Größe lückenlos zugeteilt.", fields: [{ name: "net", label: "Verfügbares Netz", value: "192.168.1.0/24", col: "col-12 col-md-4" }, { name: "reqs", label: "Anforderungen (Name Anzahl, mit Komma getrennt)", value: "Verwaltung 50, Vertrieb 26, Lager 12, Server 5, WAN 2", col: "col-12 col-md-8" }], run: (v) => calcVlsm(v.net, v.reqs) },
        ],
        info: INFO_SUBNET,
      });
    },
  });

  L.tool({
    id: "zahlensysteme",
    title: "Zahlensysteme-Trainer",
    icon: "123",
    hue: 250,
    desc: "Zwischen Dezimal, Binär, Hexadezimal und Oktal umrechnen, binär addieren und das Zweierkomplement bilden – Schritt für Schritt.",
    exam: ["AP1"],
    modules: ["lf02", "lf03"],
    lib: Object.assign({}, NUM, { gen: NUMG, calcConv, calcAdd, calcTwos }),
    render(root, h) {
      trainer(root, h, {
        id: "zs",
        practice: {
          types: [["mix", "Gemischt (Umrechnen)"], ["10-2", "Dezimal → Binär"], ["2-10", "Binär → Dezimal"], ["10-16", "Dezimal → Hexadezimal"], ["16-10", "Hexadezimal → Dezimal"], ["2-16", "Binär → Hexadezimal"], ["16-2", "Hexadezimal → Binär"], ["10-8", "Dezimal → Oktal"], ["8-10", "Oktal → Dezimal"], ["2-8", "Binär → Oktal"], ["tab", "Tabelle: alle Systeme ergänzen"], ["add", "Binäre Addition (8 Bit)"], ["twos", "Zweierkomplement (8 Bit)"]],
          levels: [["8", "8 Bit"], ["16", "16 Bit"], ["32", "32 Bit"]],
          usesLevel: (t) => t !== "add" && t !== "twos",
          gen: NUMG.gen,
        },
        calc: [
          { v: "conv", label: "Umrechnen", intro: "Zahl eingeben und das Zahlensystem der Eingabe wählen (Präfixe wie 0x oder 0b sind erlaubt).", fields: [{ name: "val", label: "Zahl", value: "2026", ph: "z. B. 2026, 1011 0101 oder 7EA", col: "col-12 col-md-8" }, { name: "base", label: "Eingabe im …", options: [["10", "Dezimalsystem"], ["2", "Binärsystem"], ["16", "Hexadezimalsystem"], ["8", "Oktalsystem"]], value: "10", col: "col-12 col-md-4" }], run: (v) => calcConv(v.val, Number(v.base)) },
          { v: "add", label: "Binär rechnen", intro: "Addition mit Überträgen – oder Subtraktion über das Zweierkomplement (8 Bit).", fields: [{ name: "a", label: "Binärzahl A", value: "0101 1010", col: "col-12 col-md-4" }, { name: "op", label: "Rechenart", options: [["+", "A + B"], ["-", "A − B (8 Bit, Zweierkomplement)"]], value: "+", col: "col-12 col-md-4" }, { name: "b", label: "Binärzahl B", value: "0011 1100", col: "col-12 col-md-4" }], run: (v) => calcAdd(v.a, v.op, v.b) },
          { v: "twos", label: "Zweierkomplement (8 Bit)", fields: [{ name: "val", label: "Wert", value: "-100", ph: "z. B. -100 oder 1001 1100", col: "col-12 col-md-6" }, { name: "kind", label: "Eingabe ist …", options: [["dec", "Dezimalzahl (−128 … 127)"], ["bin", "8-Bit-Muster"]], value: "dec", col: "col-12 col-md-6" }], run: (v) => calcTwos(v.val, v.kind) },
        ],
        info: INFO_NUM,
      });
    },
  });

  L.tool({
    id: "ipv6",
    title: "IPv6-Trainer",
    icon: "globe2",
    hue: 190,
    desc: "IPv6-Adressen kürzen und expandieren, Adresstypen erkennen, Präfixe und /64-Subnetze bestimmen und die EUI-64-Interface-ID bilden.",
    exam: ["AP1", "AP2"],
    modules: ["lf09", "lf03"],
    lib: Object.assign({}, V6, { gen: V6G, calcV6, calcEui }),
    render(root, h) {
      trainer(root, h, {
        id: "v6",
        practice: {
          types: [["mix", "Gemischt"], ["short", "Adresse kürzen"], ["long", "Adresse expandieren"], ["type", "Adresstyp bestimmen"], ["prefix", "Präfix bestimmen (/48, /56, /64)"], ["subnets", "/64-Subnetze aus /48 oder /56"], ["eui", "EUI-64 aus MAC-Adresse"]],
          levels: [["1", "Leicht"], ["2", "Schwer · mit Fallen"]],
          usesLevel: (t) => t !== "eui",
          gen: V6G.gen,
        },
        calc: [
          { v: "addr", label: "Adresse analysieren", intro: "IPv6-Adresse in beliebiger Schreibweise, optional mit Präfixlänge (ohne Angabe wird /64 angenommen).", fields: [{ name: "addr", label: "IPv6-Adresse", value: "2001:0db8:0000:0042:0000:8a2e:0370:7334/64", ph: "z. B. fe80::1/64", col: "col-12" }], run: (v) => calcV6(v.addr) },
          { v: "eui", label: "EUI-64 aus MAC", intro: "Aus der MAC-Adresse die Interface-ID bilden und mit einem /64-Präfix zur IPv6-Adresse verbinden.", fields: [{ name: "mac", label: "MAC-Adresse", value: "00-1A-2B-3C-4D-5E", ph: "z. B. 00:1a:2b:3c:4d:5e" }, { name: "prefix", label: "Präfix (/64)", value: "fe80::/64", ph: "z. B. 2001:db8:1:2::/64" }], run: (v) => calcEui(v.mac, v.prefix) },
        ],
        info: INFO_V6,
      });
    },
  });
})();
