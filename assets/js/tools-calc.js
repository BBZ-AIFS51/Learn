/* Rechner & Trainer – Rechnen: Speicher & Übertragung · RAID · Strom/USV/Elektrotechnik · Verfügbarkeit
   Aufbau dieser Datei:
     1) CALC – reine Rechenfunktionen (ohne DOM, mit node testbar – siehe module.exports ganz unten)
     2) GEN  – Zufallsaufgaben für den Übungsmodus (Frage, erwartete Antworten, Rechenweg)
     3) UI   – gemeinsame Bausteine (Übungsmodus, Rechner-Formulare, Ergebnis-Boxen)
     4) LEARN.tool(...) – die vier Tools
   Gestaltung ausschließlich mit Bootstrap- und App-Klassen (assets/css/app.css). */
(function () {
  "use strict";
  const G = typeof window !== "undefined" ? window : globalThis;

  /* =====================================================================
     1) Reine Hilfs- und Rechenfunktionen
     ===================================================================== */
  class CalcError extends Error { constructor(msg) { super(msg); this.name = "CalcError"; } }
  const fail = (msg) => { throw new CalcError(msg); };
  const SUPS = { "-": "⁻", 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹" };
  const SUBS = { 0: "₀", 1: "₁", 2: "₂", 3: "₃", 4: "₄", 5: "₅", 6: "₆", 7: "₇", 8: "₈", 9: "₉" };
  const sup = (n) => String(n).replace(/[-0-9]/g, (c) => SUPS[c]);
  const sub = (n) => String(n).replace(/[0-9]/g, (c) => SUBS[c]);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const sum = (a) => a.reduce((x, y) => x + y, 0);
  const lg = Math.log10;

  /** Zahl im deutschen Format. d = max. Nachkommastellen; bei 0 < |n| < 1 werden mind. 3 signifikante Stellen gezeigt. */
  function nf(n, d = 2) {
    if (typeof n !== "number" || !Number.isFinite(n)) return "–";
    const a = Math.abs(n);
    let dd = d;
    if (a > 0 && a < 1) dd = Math.max(d, Math.min(12, Math.ceil(-lg(a)) + 2));
    const s = n.toLocaleString("de-DE", { maximumFractionDigits: dd });
    return s === "-0" ? "0" : s;
  }
  /** Automatische Stellenzahl für Ergebnistabellen. */
  const nfa = (n) => nf(n, Math.abs(n) >= 1000 ? 2 : Math.abs(n) >= 1 ? 4 : 6);
  /** Prozentwerte bei Verfügbarkeiten (viele Neunen brauchen mehr Stellen). */
  const pf = (x) => nf(x, x >= 99.99 && x < 100 ? 6 : 4);

  /** Eingabe → Zahl. Akzeptiert Komma oder Punkt, Tausenderpunkte (1.234,5 / 6.220.800), Leerzeichen, ein % am Ende.
      Alles andere (Einheiten, Buchstaben) → NaN. */
  function parseNum(s) {
    let t = String(s ?? "").trim().replace(/[\s  '’]/g, "").replace(/[−–]/g, "-").replace(/%$/, "");
    if (!t) return NaN;
    const commas = (t.match(/,/g) || []).length;
    if (commas > 1) return NaN;
    if (commas === 1) t = t.replace(/\./g, "").replace(",", ".");
    else if (/^[-+]?\d{1,3}(\.\d{3}){2,}$/.test(t)) t = t.replace(/\./g, "");
    if (!/^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?$/i.test(t)) return NaN;
    const n = Number(t);
    return Number.isFinite(n) ? n : NaN;
  }
  /** Zweite Lesart für "1.024" (deutscher Tausenderpunkt) – nur im Übungsmodus als Alternative genutzt. */
  function parseAlt(s) {
    const t = String(s ?? "").trim().replace(/[\s  ]/g, "");
    return /^-?\d{1,3}\.\d{3}$/.test(t) ? Number(t.replace(".", "")) : NaN;
  }
  /** Liste wie "4; 4; 6", "4 4 6", "4, 4, 6", "3×4; 6" → Zahlen. Rückgabe { values, bad } (bad = ungültiger Teil). */
  function parseList(s) {
    const src = String(s ?? "").trim().replace(/\s*[x×*]\s*/gi, "×");
    if (!src) return { values: [], bad: null };
    const tokens = src.split(/\s*;\s*|,\s+|\s*\+\s*|\s*\|\s*|\s+/).filter(Boolean)
      .flatMap((t) => ((t.match(/,/g) || []).length > 1 ? t.split(",").filter(Boolean) : [t]));
    const values = [];
    for (const t of tokens) {
      const m = t.match(/^(\d+)×(.+)$/);
      if (m) {
        const k = Number(m[1]), v = parseNum(m[2]);
        if (!(k >= 1 && k <= 256) || Number.isNaN(v)) return { values, bad: t };
        for (let i = 0; i < k; i++) values.push(v);
        continue;
      }
      const v = parseNum(t);
      if (Number.isNaN(v)) return { values, bad: t };
      values.push(v);
    }
    return { values, bad: null };
  }
  /** Toleranzvergleich: |u − c| ≤ max(|c|·rel, abs). */
  function close(u, c, tol = {}) {
    if (!Number.isFinite(u) || !Number.isFinite(c)) return false;
    const lim = Math.max(Math.abs(c) * (tol.rel || 0), tol.abs || 0);
    return Math.abs(u - c) <= lim + 1e-9 * Math.max(1, Math.abs(c));
  }
  /** Sekunden → "1 h 23 min 20 s". */
  function dur(sec) {
    if (typeof sec !== "number" || !Number.isFinite(sec) || sec < 0) return "–";
    if (sec < 60) return `${nf(sec, sec < 10 ? 2 : 1)} s`;
    let t = Math.round(sec);
    const d = Math.floor(t / 86400); t -= d * 86400;
    const hh = Math.floor(t / 3600); t -= hh * 3600;
    const m = Math.floor(t / 60); const s = t - m * 60;
    const parts = [];
    if (d) parts.push(`${nf(d, 0)} ${d === 1 ? "Tag" : "Tage"}`);
    if (hh) parts.push(`${hh} h`);
    if (m) parts.push(`${m} min`);
    if (s) parts.push(`${s} s`);
    return parts.join(" ") || "0 s";
  }
  /** Eingabeprüfung mit freundlicher Meldung. */
  function num(v, name, o = {}) {
    if (typeof v !== "number" || !Number.isFinite(v)) fail(`Bitte bei „${name}“ eine gültige Zahl eingeben.`);
    if (o.gt !== undefined && !(v > o.gt)) fail(`„${name}“ muss größer als ${nf(o.gt)} sein.`);
    if (o.min !== undefined && v < o.min) fail(`„${name}“ muss mindestens ${nf(o.min)} sein.`);
    if (o.max !== undefined && v > o.max) fail(`„${name}“ darf höchstens ${nf(o.max)} sein.`);
    if (o.int && !Number.isInteger(v)) fail(`„${name}“ muss eine ganze Zahl sein.`);
    return v;
  }

  /* ---------- Datenmengen & Übertragung ---------- */
  const PFX = [["k", "Ki", 1], ["M", "Mi", 2], ["G", "Gi", 3], ["T", "Ti", 4]];
  const DU = [
    { id: "bit", name: "Bit", byte: false, f: 1, sys: "", pow: "1" },
    { id: "Byte", name: "Byte", byte: true, f: 1, sys: "", pow: "1" },
  ];
  for (const byte of [false, true]) {
    for (const [si, iec, e] of PFX) {
      DU.push({ id: si + (byte ? "B" : "bit"), byte, f: 1000 ** e, sys: "SI", pow: "10" + sup(3 * e) });
      DU.push({ id: iec + (byte ? "B" : "bit"), byte, f: 1024 ** e, sys: "IEC", pow: "2" + sup(10 * e) });
    }
  }
  for (const u of DU) { u.name = u.name || u.id; u.bits = u.f * (u.byte ? 8 : 1); }
  const DUM = Object.fromEntries(DU.map((u) => [u.id, u]));
  const unitOf = (id) => DUM[id] || fail(`Unbekannte Einheit „${id}“.`);
  const facTxt = (u) => (u.f === 1 ? "1" : `${u.pow} (= ${nf(u.f, 0)})`);
  /** SI ↔ IEC-Gegenstück (MB ↔ MiB, kbit ↔ Kibit …). */
  function counterpart(id) {
    const m = String(id).match(/^([kKMGT])(i?)(B|bit)$/);
    if (!m) return id;
    if (m[2]) return (m[1] === "K" ? "k" : m[1]) + m[3];
    return (m[1] === "k" ? "K" : m[1]) + "i" + m[3];
  }
  function convert(v, from, to) { return (v * unitOf(from).bits) / unitOf(to).bits; }
  function convSteps(v, from, to) {
    num(v, "Wert");
    const a = unitOf(from), b = unitOf(to);
    const value = convert(v, from, to);
    const steps = [];
    let x = v, cur = a.byte ? "Byte" : "Bit";
    if (a.f !== 1) { const y = x * a.f; steps.push(`${a.name} in ${cur}: ${nf(x, 6)} × ${facTxt(a)} = ${nf(y, 6)} ${cur}`); x = y; }
    if (a.byte && !b.byte) { const y = x * 8; steps.push(`Byte → Bit: ${nf(x, 6)} Byte × 8 = ${nf(y, 6)} Bit`); x = y; cur = "Bit"; }
    if (!a.byte && b.byte) { const y = x / 8; steps.push(`Bit → Byte: ${nf(x, 6)} Bit ÷ 8 = ${nf(y, 6)} Byte`); x = y; cur = "Byte"; }
    if (b.f !== 1) { const y = x / b.f; steps.push(`${cur} in ${b.name}: ${nf(x, 6)} ${cur} ÷ ${facTxt(b)} = ${nf(y, 6)} ${b.name}`); }
    if (!steps.length) steps.push(`${nf(v, 6)} ${a.name} = ${nf(value, 6)} ${b.name} (gleiche Einheit)`);
    return { value, steps };
  }
  /** Rechenschritt "Byte → Einheit". */
  function unitStep(bytes, unit) {
    const u = unitOf(unit);
    if (!u.byte) return `in ${u.name}: ${nf(bytes, 2)} Byte × 8 ÷ ${facTxt(u)} = ${nf((bytes * 8) / u.f, 4)} ${u.name}`;
    if (u.f === 1) return `in Byte: ${nf(bytes, 2)} Byte`;
    return `in ${u.name}: ${nf(bytes, 2)} Byte ÷ ${facTxt(u)} = ${nf(bytes / u.f, 4)} ${u.name}`;
  }
  function imageSize(w, h, depth, count = 1) {
    num(w, "Breite", { gt: 0 }); num(h, "Höhe", { gt: 0 }); num(depth, "Farbtiefe", { gt: 0 }); num(count, "Anzahl Bilder", { gt: 0 });
    const px = w * h, bits = px * depth * count, bytes = bits / 8;
    return {
      px, bits, bytes,
      steps: [
        `Anzahl Pixel: ${nf(w)} × ${nf(h)} = ${nf(px)} Pixel`,
        `Datenmenge in Bit: ${nf(px)} Pixel × ${nf(depth)} Bit${count !== 1 ? ` × ${nf(count)} Bilder` : ""} = ${nf(bits)} Bit`,
        `in Byte: ${nf(bits)} Bit ÷ 8 = ${nf(bytes)} Byte`,
      ],
    };
  }
  function audioSize(rateHz, depth, ch, sec) {
    num(rateHz, "Abtastrate", { gt: 0 }); num(depth, "Bittiefe", { gt: 0 }); num(ch, "Kanäle", { gt: 0 }); num(sec, "Dauer", { gt: 0 });
    const bps = rateHz * depth * ch, bits = bps * sec, bytes = bits / 8;
    return {
      bps, bits, bytes,
      steps: [
        `Datenrate: ${nf(rateHz)} Hz × ${nf(depth)} Bit × ${nf(ch)} ${ch === 1 ? "Kanal" : "Kanäle"} = ${nf(bps)} bit/s`,
        `Datenmenge: ${nf(bps)} bit/s × ${nf(sec)} s = ${nf(bits)} Bit`,
        `in Byte: ${nf(bits)} Bit ÷ 8 = ${nf(bytes)} Byte`,
      ],
    };
  }
  function videoSize(w, h, depth, fps, sec) {
    num(w, "Breite", { gt: 0 }); num(h, "Höhe", { gt: 0 }); num(depth, "Farbtiefe", { gt: 0 }); num(fps, "Bildrate", { gt: 0 }); num(sec, "Dauer", { gt: 0 });
    const frameBits = w * h * depth, bps = frameBits * fps, bits = bps * sec, bytes = bits / 8;
    return {
      frameBits, bps, bits, bytes,
      steps: [
        `Ein Einzelbild: ${nf(w)} × ${nf(h)} Pixel × ${nf(depth)} Bit = ${nf(frameBits)} Bit`,
        `Pro Sekunde: ${nf(frameBits)} Bit × ${nf(fps)} Bilder/s = ${nf(bps)} bit/s (≈ ${nf(bps / 1e6, 2)} Mbit/s)`,
        `Gesamt: ${nf(bps)} bit/s × ${nf(sec)} s = ${nf(bits)} Bit`,
        `in Byte: ${nf(bits)} Bit ÷ 8 = ${nf(bytes)} Byte`,
      ],
    };
  }
  function sizeRows(bits) {
    const bytes = bits / 8, big = bytes >= 1e11;
    const si = ["bit", "Byte", "kB", "MB", "GB"].concat(big ? ["TB"] : []);
    const iec = ["KiB", "MiB", "GiB"].concat(big ? ["TiB"] : []);
    return { si: si.map((id) => [DUM[id].name, bits / DUM[id].bits]), iec: iec.map((id) => [id, bits / DUM[id].bits]) };
  }
  const RU = [["bit/s", 1, "1"], ["kbit/s", 1e3, "10³"], ["Mbit/s", 1e6, "10⁶"], ["Gbit/s", 1e9, "10⁹"], ["kB/s", 8e3, "10³ × 8"], ["MB/s", 8e6, "10⁶ × 8"], ["GB/s", 8e9, "10⁹ × 8"]];
  const RUM = Object.fromEntries(RU.map(([id, f, t]) => [id, { id, f, t }]));
  const TU = { s: [1, "s"], min: [60, "min"], h: [3600, "h"], d: [86400, "Tage"] };
  function toBits(amount, unit) {
    const u = unitOf(unit), bits = amount * u.bits;
    const txt = u.id === "bit" ? `${nf(amount, 6)} Bit`
      : `${nf(amount, 6)} ${u.name}${u.f !== 1 ? ` × ${facTxt(u)}` : ""}${u.byte ? " × 8" : ""} = ${nf(bits, 0)} Bit`;
    return { bits, txt };
  }
  function transferTime(amount, unit, rate, runit) {
    num(amount, "Datenmenge", { gt: 0 }); num(rate, "Datenrate", { gt: 0 });
    const r = RUM[runit] || fail("Unbekannte Einheit der Datenrate.");
    const { bits, txt } = toBits(amount, unit);
    const bps = rate * r.f, sec = bits / bps;
    return {
      bits, bps, sec,
      steps: [
        `Datenmenge in Bit: ${txt}`,
        r.f === 1 ? `Datenrate: ${nf(bps, 6)} bit/s` : `Datenrate in bit/s: ${nf(rate, 6)} ${r.id} × ${r.t} = ${nf(bps, 0)} bit/s`,
        `Übertragungsdauer: t = Datenmenge ÷ Datenrate = ${nf(bits, 0)} Bit ÷ ${nf(bps, 0)} bit/s = ${nf(sec, 3)} s`,
        `Umrechnen: ${nf(sec, 2)} s ÷ 60 = ${nf(sec / 60, 3)} min · ÷ 3.600 = ${nf(sec / 3600, 4)} h → ${dur(sec)}`,
      ],
    };
  }
  function requiredRate(amount, unit, time, tunit) {
    num(amount, "Datenmenge", { gt: 0 }); num(time, "Zeit", { gt: 0 });
    const tu = TU[tunit] || fail("Unbekannte Zeiteinheit.");
    const { bits, txt } = toBits(amount, unit);
    const sec = time * tu[0], bps = bits / sec;
    return {
      bits, sec, bps,
      steps: [
        `Datenmenge in Bit: ${txt}`,
        tu[0] === 1 ? `Zeit: ${nf(sec, 4)} s` : `Zeit in Sekunden: ${nf(time, 4)} ${tu[1]} × ${nf(tu[0], 0)} = ${nf(sec, 2)} s`,
        `Datenrate: r = ${nf(bits, 0)} Bit ÷ ${nf(sec, 2)} s = ${nf(bps, 2)} bit/s`,
        `Umrechnen (SI!): ÷ 10⁶ = ${nf(bps / 1e6, 3)} Mbit/s · ÷ 10⁹ = ${nf(bps / 1e9, 4)} Gbit/s`,
      ],
    };
  }

  /* ---------- RAID ---------- */
  const RAID = {
    0: { min: 2, name: "RAID 0", kind: "Striping ohne Redundanz" },
    1: { min: 2, name: "RAID 1", kind: "Spiegelung (Mirroring)" },
    5: { min: 3, name: "RAID 5", kind: "Striping mit verteilter Parität" },
    6: { min: 4, name: "RAID 6", kind: "Striping mit doppelter Parität" },
    10: { min: 4, name: "RAID 10", kind: "Spiegel-Paare mit Striping (1+0)" },
    50: { min: 6, name: "RAID 50", kind: "Striping über RAID-5-Gruppen" },
    60: { min: 8, name: "RAID 60", kind: "Striping über RAID-6-Gruppen" },
  };
  const RAID_LEVELS = [0, 1, 5, 6, 10, 50, 60];
  const raidInfo = (level) => RAID[level] || fail("Bitte ein RAID-Level wählen (0, 1, 5, 6, 10, 50 oder 60).");
  function raidCheck(level, n, g) {
    const L = raidInfo(level);
    num(n, "Anzahl Platten", { int: true, min: 1, max: 1024 });
    if (n < L.min) fail(`${L.name} braucht mindestens ${L.min} Platten (angegeben: ${n}).`);
    if (level === 10 && n % 2) fail("RAID 10 braucht eine gerade Anzahl Platten (Spiegel-Paare).");
    if (level === 50 || level === 60) {
      num(g, "Anzahl Gruppen", { int: true, min: 2 });
      const per = level === 50 ? 3 : 4;
      if (n % g) fail(`${n} Platten lassen sich nicht gleichmäßig auf ${g} Gruppen verteilen.`);
      if (n / g < per) fail(`Jede ${level === 50 ? "RAID-5" : "RAID-6"}-Gruppe braucht mindestens ${per} Platten (${n} ÷ ${g} = ${nf(n / g)}).`);
    }
    return L;
  }
  function raidData(level, n, g = 2) {
    switch (Number(level)) {
      case 0: return n;
      case 1: return 1;
      case 5: return n - 1;
      case 6: return n - 2;
      case 10: return n / 2;
      case 50: return n - g;
      case 60: return n - 2 * g;
      default: return fail("Unbekanntes RAID-Level.");
    }
  }
  function raidTol(level, n, g = 2) {
    switch (Number(level)) {
      case 0: return [0, 0];
      case 1: return [n - 1, n - 1];
      case 5: return [1, 1];
      case 6: return [2, 2];
      case 10: return [1, n / 2];
      case 50: return [1, g];
      case 60: return [2, 2 * g];
      default: return fail("Unbekanntes RAID-Level.");
    }
  }
  function raidFormula(level, n, g, m, unit) {
    const u = unit ? " " + unit : "";
    switch (Number(level)) {
      case 0: return `n × C = ${n} × ${nf(m)}${u}`;
      case 1: return `1 × C = ${nf(m)}${u} (alle ${n} Platten enthalten dieselben Daten)`;
      case 5: return `(n − 1) × C = (${n} − 1) × ${nf(m)}${u}`;
      case 6: return `(n − 2) × C = (${n} − 2) × ${nf(m)}${u}`;
      case 10: return `n ÷ 2 × C = ${n} ÷ 2 × ${nf(m)}${u}`;
      case 50: return `(n − g) × C = (${n} − ${g}) × ${nf(m)}${u}`;
      case 60: return `(n − 2 × g) × C = (${n} − 2 × ${g}) × ${nf(m)}${u}`;
      default: return "";
    }
  }
  function raidTolText(level, n, g) {
    const [a, b] = raidTol(level, n, g);
    switch (Number(level)) {
      case 0: return "RAID 0 hat keine Redundanz – fällt eine Platte aus, sind alle Daten verloren (0 Ausfälle).";
      case 1: return `Solange eine Platte des Spiegels läuft, sind die Daten da: ${a} von ${n} Platten dürfen ausfallen.`;
      case 5: return "Die Parität reicht, um genau 1 ausgefallene Platte zu rekonstruieren.";
      case 6: return "Zwei unabhängige Paritäten → 2 Platten dürfen gleichzeitig ausfallen.";
      case 10: return `Garantiert ${a} Ausfall; im besten Fall ${b} (je Spiegel-Paar höchstens eine Platte).`;
      case 50: return `Garantiert ${a} Ausfall; im besten Fall ${b} (je RAID-5-Gruppe eine Platte).`;
      case 60: return `Garantiert ${a} Ausfälle; im besten Fall ${b} (je RAID-6-Gruppe zwei Platten).`;
      default: return "";
    }
  }
  function raidCalc({ level, sizes, hotSpares = 0, spareSize = null, groups = 2, unit = "TB" }) {
    level = Number(level);
    if (!Array.isArray(sizes) || !sizes.length) fail("Bitte mindestens eine Plattengröße angeben.");
    sizes.forEach((s) => num(s, "Plattengröße", { gt: 0 }));
    num(hotSpares, "Hot-Spares", { int: true, min: 0, max: 64 });
    const n = sizes.length;
    const g = level === 50 || level === 60 ? groups : 1;
    const L = raidCheck(level, n, g);
    const m = Math.min(...sizes), mx = Math.max(...sizes);
    const sp = spareSize == null ? mx : num(spareSize, "Größe Hot-Spare", { gt: 0 });
    const dataDisks = raidData(level, n, g);
    const [tolMin, tolMax] = raidTol(level, n, g);
    const net = dataDisks * m;
    const grossArray = sum(sizes);
    const grossTotal = grossArray + hotSpares * sp;
    const unused = grossArray - n * m;
    const eff = (dataDisks / n) * 100;
    const effTotal = (net / grossTotal) * 100;
    const redundancy = n * m - net;
    const u = unit ? " " + unit : "";
    const same = mx - m < 1e-9;
    const steps = [
      same ? `Alle ${n} Platten im Verbund sind gleich groß: C = ${nf(m)}${u}` : `Unterschiedliche Größen → es zählt die kleinste Platte: C = min(${sizes.map((s) => nf(s)).join("; ")}) = ${nf(m)}${u}`,
      `Nettokapazität ${L.name}: ${raidFormula(level, n, g, m, unit)} = ${nf(net)}${u}`,
      `Bruttokapazität des Verbunds: ${same ? `${n} × ${nf(m)}${u}` : sizes.map((s) => nf(s)).join(" + ")} = ${nf(grossArray)}${u}`,
    ];
    if (hotSpares) steps.push(`+ ${hotSpares} Hot-Spare${hotSpares > 1 ? "s" : ""} × ${nf(sp)}${u} → Brutto gesamt ${nf(grossTotal)}${u} (Hot-Spares bringen keine Nutzkapazität)`);
    if (!same) steps.push(`Ungenutzt (Verschnitt): ${nf(grossArray)}${u} − ${n} × ${nf(m)}${u} = ${nf(unused)}${u}`);
    steps.push(`Speichereffizienz: ${nf(dataDisks)} von ${n} Platten tragen Nutzdaten → ${nf(dataDisks)} ÷ ${n} × 100 % = ${nf(eff, 2)} %`);
    if (hotSpares || !same) steps.push(`Bezogen auf alle eingebauten Platten: ${nf(net)} ÷ ${nf(grossTotal)} × 100 % = ${nf(effTotal, 2)} %`);
    steps.push(`Ausfalltoleranz: ${raidTolText(level, n, g)}`);
    const warnings = [];
    if (hotSpares && sp < m - 1e-9) warnings.push(`Der Hot-Spare (${nf(sp)}${u}) ist kleiner als die genutzte Kapazität je Platte (${nf(m)}${u}) – er könnte keine Platte ersetzen.`);
    if (!same) warnings.push(`Unterschiedliche Plattengrößen: Von jeder Platte werden nur ${nf(m)}${u} genutzt, insgesamt bleiben ${nf(unused)}${u} ungenutzt.`);
    if (level === 0) warnings.push("RAID 0 hat keine Redundanz: Fällt eine Platte aus, sind alle Daten weg. Nur für unkritische, schnelle Daten.");
    return { level, name: L.name, kind: L.kind, n, g, min: L.min, m, mx, sizes: sizes.slice(), dataDisks, net, grossArray, grossTotal, unused, eff, effTotal, redundancy, tolMin, tolMax, hotSpares, spareSize: sp, steps, warnings };
  }
  function raidDisks({ level, net, size, hotSpares = 0, groups = 2, unit = "TB" }) {
    level = Number(level);
    const L = raidInfo(level);
    num(net, "gewünschte Nettokapazität", { gt: 0 }); num(size, "Plattengröße", { gt: 0 }); num(hotSpares, "Hot-Spares", { int: true, min: 0, max: 64 });
    const u = unit ? " " + unit : "";
    const k = Math.max(1, Math.ceil(net / size - 1e-9));
    const steps = [`Benötigte Datenplatten: ${nf(net)}${u} ÷ ${nf(size)}${u} = ${nf(net / size, 3)} → aufrunden auf ${k}`];
    let n;
    switch (level) {
      case 0: n = Math.max(2, k); steps.push(`RAID 0: alle Platten tragen Daten → ${k} Platte${k > 1 ? "n" : ""}${k < 2 ? " → Minimum 2" : ""}`); break;
      case 1:
        if (net > size + 1e-9) fail(`Bei RAID 1 ist die Nutzkapazität immer nur so groß wie eine Platte (${nf(size)}${u}). Für ${nf(net)}${u} brauchst du größere Platten oder RAID 10.`);
        n = 2; steps.push("RAID 1: eine Platte + ihr Spiegel → 2 Platten"); break;
      case 5: n = Math.max(3, k + 1); steps.push(`RAID 5: + 1 Platte Parität → ${k} + 1 = ${k + 1}${k + 1 < 3 ? " → Minimum 3" : ""}`); break;
      case 6: n = Math.max(4, k + 2); steps.push(`RAID 6: + 2 Platten Parität → ${k} + 2 = ${k + 2}${k + 2 < 4 ? " → Minimum 4" : ""}`); break;
      case 10: n = Math.max(4, 2 * k); steps.push(`RAID 10: jede Datenplatte wird gespiegelt → 2 × ${k} = ${2 * k}${2 * k < 4 ? " → Minimum 4" : ""}`); break;
      default: {
        num(groups, "Anzahl Gruppen", { int: true, min: 2 });
        const p = level === 50 ? 1 : 2;
        const per = Math.max(2, Math.ceil(k / groups - 1e-9));
        n = groups * (per + p);
        steps.push(`${L.name}: ${k} Datenplatten auf ${groups} Gruppen verteilen → je Gruppe ${per} Daten- + ${p} Paritätsplatte${p > 1 ? "n" : ""} = ${per + p}`);
        steps.push(`${groups} Gruppen × ${per + p} Platten = ${n} Platten`);
      }
    }
    const res = raidCalc({ level, sizes: Array(n).fill(size), groups, unit });
    const total = n + hotSpares;
    if (hotSpares) steps.push(`+ ${hotSpares} Hot-Spare${hotSpares > 1 ? "s" : ""} → insgesamt ${total} Platten`);
    steps.push(`Kontrolle: Netto = ${raidFormula(level, n, groups, size, unit)} = ${nf(res.net)}${u} ≥ ${nf(net)}${u} ✓`);
    return { n, total, k, net: res.net, res, steps };
  }

  /* ---------- Energie & Elektrotechnik ---------- */
  const HOURS_YEAR = 8760;
  function energyYear({ P, count = 1, hours, days, standby = 0, price }) {
    num(P, "Leistung", { min: 0 }); num(count, "Anzahl Geräte", { gt: 0 }); num(hours, "Betriebsstunden pro Tag", { min: 0, max: 24 });
    num(days, "Tage pro Jahr", { min: 0, max: 366 }); num(standby, "Standby-Leistung", { min: 0 }); num(price, "Strompreis", { min: 0 });
    const opH = hours * days;
    const whOp = P * count * opH, kwhOp = whOp / 1000;
    const sbH = standby > 0 ? Math.max(0, HOURS_YEAR - opH) : 0;
    const whSb = standby * count * sbH, kwhSb = whSb / 1000;
    const kwh = kwhOp + kwhSb, eur = (kwh * price) / 100;
    const cnt = count !== 1 ? ` × ${nf(count)} Geräte` : "";
    const steps = [
      `Betriebsstunden pro Jahr: ${nf(hours)} h/Tag × ${nf(days)} Tage = ${nf(opH)} h`,
      `Energie im Betrieb: W = P × t = ${nf(P)} W${cnt} × ${nf(opH)} h = ${nf(whOp)} Wh = ${nf(kwhOp, 3)} kWh`,
    ];
    if (standby > 0) {
      steps.push(`Standby-Stunden: 8.760 h − ${nf(opH)} h = ${nf(sbH)} h`);
      steps.push(`Energie im Standby: ${nf(standby)} W${cnt} × ${nf(sbH)} h = ${nf(whSb)} Wh = ${nf(kwhSb, 3)} kWh`);
      steps.push(`Energie gesamt: ${nf(kwhOp, 3)} kWh + ${nf(kwhSb, 3)} kWh = ${nf(kwh, 3)} kWh`);
    }
    steps.push(`Kosten: ${nf(kwh, 3)} kWh × ${nf(price)} ct/kWh = ${nf(kwh * price, 2)} ct = ${nf(eur, 2)} €`);
    return { opH, kwhOp, sbH, kwhSb, kwh, eur, steps };
  }
  function amortization({ pOld, pNew, count = 1, hours, days, price, invest }) {
    num(pOld, "Leistung Altgerät", { min: 0 }); num(pNew, "Leistung Neugerät", { min: 0 }); num(invest, "Anschaffungskosten", { min: 0 });
    const a = energyYear({ P: pOld, count, hours, days, price });
    const b = energyYear({ P: pNew, count, hours, days, price });
    const saveKwh = a.kwh - b.kwh, save = a.eur - b.eur;
    const years = save > 0 ? invest / save : Infinity;
    const cnt = count !== 1 ? ` × ${nf(count)}` : "";
    const steps = [
      `Betriebsstunden pro Jahr: ${nf(hours)} h × ${nf(days)} Tage = ${nf(a.opH)} h`,
      `Altgerät: ${nf(pOld)} W${cnt} × ${nf(a.opH)} h = ${nf(a.kwh, 3)} kWh → ${nf(a.kwh, 3)} kWh × ${nf(price)} ct = ${nf(a.eur, 2)} €/Jahr`,
      `Neugerät: ${nf(pNew)} W${cnt} × ${nf(b.opH)} h = ${nf(b.kwh, 3)} kWh → ${nf(b.kwh, 3)} kWh × ${nf(price)} ct = ${nf(b.eur, 2)} €/Jahr`,
      `Ersparnis: ${nf(a.eur, 2)} € − ${nf(b.eur, 2)} € = ${nf(save, 2)} € pro Jahr (${nf(saveKwh, 3)} kWh)`,
      save > 0
        ? `Amortisationszeit = Anschaffungskosten ÷ Ersparnis pro Jahr = ${nf(invest, 2)} € ÷ ${nf(save, 2)} €/Jahr = ${nf(years, 3)} Jahre ≈ ${nf(years * 12, 1)} Monate`
        : "Das Neugerät spart keinen Strom – die Anschaffung amortisiert sich über die Stromkosten nie.",
    ];
    return { a, b, saveKwh, save, years, months: years * 12, steps };
  }
  const UPS_SIZES = [400, 500, 650, 750, 800, 1000, 1200, 1500, 2000, 2200, 3000, 4000, 5000, 6000, 8000, 10000, 15000, 20000, 30000, 40000];
  function ups({ P, cos, reserve = 0 }) {
    num(P, "Wirkleistung P", { gt: 0 }); num(cos, "Leistungsfaktor cos φ", { gt: 0, max: 1 }); num(reserve, "Reserve", { min: 0, max: 500 });
    const S = P / cos, Sres = S * (1 + reserve / 100);
    const pick = UPS_SIZES.find((x) => x >= Sres - 1e-9) ?? null;
    const steps = [`Scheinleistung: S = P ÷ cos φ = ${nf(P)} W ÷ ${nf(cos, 3)} = ${nf(S, 2)} VA`];
    if (reserve) steps.push(`mit ${nf(reserve)} % Reserve: ${nf(S, 2)} VA × ${nf(1 + reserve / 100, 4)} = ${nf(Sres, 2)} VA`);
    steps.push(pick ? `Nächste übliche USV-Größe: ${nf(pick)} VA` : `Mehr als ${nf(UPS_SIZES[UPS_SIZES.length - 1])} VA – mehrere USV-Anlagen oder eine Großanlage nötig`);
    return { P, S, Sres, pick, steps };
  }
  function upsRuntime({ Wh = null, V = null, Ah = null, eta = 100, P }) {
    const steps = [];
    let E = Wh;
    if (E == null) {
      num(V, "Akkuspannung", { gt: 0 }); num(Ah, "Akkukapazität", { gt: 0 });
      E = V * Ah;
      steps.push(`Akkuenergie: E = U × Q = ${nf(V)} V × ${nf(Ah)} Ah = ${nf(E, 2)} Wh`);
    } else {
      num(E, "Akkuenergie", { gt: 0 });
      steps.push(`Akkuenergie: E = ${nf(E, 2)} Wh`);
    }
    num(eta, "Wirkungsgrad", { gt: 0, max: 100 }); num(P, "Last", { gt: 0 });
    const usable = (E * eta) / 100, h = usable / P;
    steps.push(`nutzbare Energie: E × η = ${nf(E, 2)} Wh × ${nf(eta / 100, 3)} = ${nf(usable, 2)} Wh`);
    steps.push(`Überbrückungszeit: t = ${nf(usable, 2)} Wh ÷ ${nf(P)} W = ${nf(h, 4)} h = ${nf(h * 60, 2)} min`);
    return { E, usable, h, min: h * 60, steps };
  }
  function upsBattery({ P, minutes, eta = 100, V = null }) {
    num(P, "Last", { gt: 0 }); num(minutes, "Überbrückungszeit", { gt: 0 }); num(eta, "Wirkungsgrad", { gt: 0, max: 100 });
    const t = minutes / 60, Wh = (P * t) / (eta / 100);
    const steps = [
      `Zeit in Stunden: ${nf(minutes)} min ÷ 60 = ${nf(t, 4)} h`,
      `benötigte Energie an der Last: ${nf(P)} W × ${nf(t, 4)} h = ${nf(P * t, 2)} Wh`,
      `wegen Wirkungsgrad: ${nf(P * t, 2)} Wh ÷ ${nf(eta / 100, 3)} = ${nf(Wh, 2)} Wh Akkuenergie`,
    ];
    let Ah = null;
    if (V != null) { num(V, "Akkuspannung", { gt: 0 }); Ah = Wh / V; steps.push(`Kapazität: Q = E ÷ U = ${nf(Wh, 2)} Wh ÷ ${nf(V)} V = ${nf(Ah, 3)} Ah`); }
    return { Wh, Ah, steps };
  }
  const OHM_NAMES = { U: ["Spannung U", "V"], I: ["Stromstärke I", "A"], R: ["Widerstand R", "Ω"], P: ["Leistung P", "W"] };
  function ohm(g) {
    const keys = ["U", "I", "R", "P"].filter((k) => g[k] != null);
    if (keys.length !== 2) fail("Gib genau zwei der vier Größen (U, I, R, P) an – die anderen beiden werden berechnet.");
    for (const k of keys) num(g[k], OHM_NAMES[k][0], { gt: 0 });
    let { U, I, R, P } = g;
    const s = [];
    const v = (x, u) => `${nf(x, 4)} ${u}`;
    switch (keys.join("")) {
      case "UI": R = U / I; P = U * I; s.push(`R = U ÷ I = ${v(U, "V")} ÷ ${v(I, "A")} = ${v(R, "Ω")}`, `P = U × I = ${v(U, "V")} × ${v(I, "A")} = ${v(P, "W")}`); break;
      case "UR": I = U / R; P = (U * U) / R; s.push(`I = U ÷ R = ${v(U, "V")} ÷ ${v(R, "Ω")} = ${v(I, "A")}`, `P = U² ÷ R = (${v(U, "V")})² ÷ ${v(R, "Ω")} = ${v(P, "W")}  (oder P = U × I)`); break;
      case "UP": I = P / U; R = (U * U) / P; s.push(`I = P ÷ U = ${v(P, "W")} ÷ ${v(U, "V")} = ${v(I, "A")}`, `R = U² ÷ P = (${v(U, "V")})² ÷ ${v(P, "W")} = ${v(R, "Ω")}  (oder R = U ÷ I)`); break;
      case "IR": U = R * I; P = I * I * R; s.push(`U = R × I = ${v(R, "Ω")} × ${v(I, "A")} = ${v(U, "V")}`, `P = I² × R = (${v(I, "A")})² × ${v(R, "Ω")} = ${v(P, "W")}  (oder P = U × I)`); break;
      case "IP": U = P / I; R = P / (I * I); s.push(`U = P ÷ I = ${v(P, "W")} ÷ ${v(I, "A")} = ${v(U, "V")}`, `R = P ÷ I² = ${v(P, "W")} ÷ (${v(I, "A")})² = ${v(R, "Ω")}  (oder R = U ÷ I)`); break;
      case "RP": U = Math.sqrt(P * R); I = Math.sqrt(P / R); s.push(`U = √(P × R) = √(${v(P, "W")} × ${v(R, "Ω")}) = ${v(U, "V")}`, `I = √(P ÷ R) = √(${v(P, "W")} ÷ ${v(R, "Ω")}) = ${v(I, "A")}`); break;
      default: fail("Unerwartete Kombination.");
    }
    return { U, I, R, P, given: keys, steps: s };
  }
  function resistors(list, mode, U = null) {
    if (!Array.isArray(list) || !list.length) fail("Bitte mindestens einen Widerstand angeben.");
    list.forEach((r) => num(r, "Widerstand", { gt: 0 }));
    if (mode !== "reihe" && mode !== "parallel") fail("Bitte Reihen- oder Parallelschaltung wählen.");
    const steps = [];
    const names = list.map((r, i) => `R${sub(i + 1)}`);
    let Rg;
    if (mode === "reihe") {
      Rg = sum(list);
      steps.push(`Reihenschaltung: R_ges = ${names.join(" + ")} = ${list.map((r) => nf(r, 4)).join(" Ω + ")} Ω = ${nf(Rg, 4)} Ω`);
    } else if (list.length === 1) {
      Rg = list[0];
      steps.push(`Nur ein Widerstand: R_ges = ${nf(Rg, 4)} Ω`);
    } else if (list.length === 2) {
      Rg = (list[0] * list[1]) / (list[0] + list[1]);
      steps.push(`Zwei parallele Widerstände: R_ges = (R₁ × R₂) ÷ (R₁ + R₂) = (${nf(list[0], 4)} × ${nf(list[1], 4)}) ÷ (${nf(list[0], 4)} + ${nf(list[1], 4)}) = ${nf(list[0] * list[1], 4)} ÷ ${nf(list[0] + list[1], 4)} = ${nf(Rg, 4)} Ω`);
    } else {
      const inv = sum(list.map((r) => 1 / r));
      Rg = 1 / inv;
      steps.push(`Parallelschaltung: 1/R_ges = ${list.map((r) => `1/${nf(r, 4)}`).join(" + ")} = ${nf(inv, 6)} 1/Ω`);
      steps.push(`R_ges = 1 ÷ ${nf(inv, 6)} = ${nf(Rg, 4)} Ω`);
    }
    if (mode === "parallel" && list.length > 1) steps.push(`Kontrolle: R_ges (${nf(Rg, 4)} Ω) ist kleiner als der kleinste Einzelwiderstand (${nf(Math.min(...list), 4)} Ω) ✓`);
    let I = null, P = null, parts = [];
    if (U != null) {
      num(U, "Spannung", { gt: 0 });
      I = U / Rg; P = U * I;
      steps.push(`Gesamtstrom: I = U ÷ R_ges = ${nf(U, 4)} V ÷ ${nf(Rg, 4)} Ω = ${nf(I, 5)} A = ${nf(I * 1000, 3)} mA`);
      steps.push(`Gesamtleistung: P = U × I = ${nf(U, 4)} V × ${nf(I, 5)} A = ${nf(P, 4)} W`);
      if (mode === "reihe") {
        parts = list.map((r) => ({ R: r, U: I * r, I, P: I * I * r }));
        steps.push(`Teilspannungen (Strom überall gleich): ${parts.map((p, i) => `U${sub(i + 1)} = I × R${sub(i + 1)} = ${nf(p.U, 4)} V`).join(" · ")} (Summe = ${nf(U, 4)} V)`);
      } else {
        parts = list.map((r) => ({ R: r, U, I: U / r, P: (U * U) / r }));
        steps.push(`Teilströme (Spannung überall gleich): ${parts.map((p, i) => `I${sub(i + 1)} = U ÷ R${sub(i + 1)} = ${nf(p.I * 1000, 3)} mA`).join(" · ")} (Summe = ${nf(I * 1000, 3)} mA)`);
      }
    }
    return { Rg, I, P, parts, steps };
  }
  function dbRatio(x1, x2, kind = "leistung") {
    const volt = kind === "spannung";
    num(x1, volt ? "U₁ (Eingang)" : "P₁ (Eingang)", { gt: 0 }); num(x2, volt ? "U₂ (Ausgang)" : "P₂ (Ausgang)", { gt: 0 });
    const k = volt ? 20 : 10, s = volt ? "U" : "P";
    const ratio = x1 / x2, a = k * lg(ratio);
    const steps = [
      `Dämpfungsfaktor: D = ${s}₁ ÷ ${s}₂ = ${nf(x1, 6)} ÷ ${nf(x2, 6)} = ${nf(ratio, 6)}`,
      `Dämpfungsmaß: a = ${k} × lg(${s}₁ ÷ ${s}₂) = ${k} × lg(${nf(ratio, 6)}) = ${k} × ${nf(lg(ratio), 5)} = ${nf(a, 3)} dB`,
      `Übertragungsfaktor: T = ${s}₂ ÷ ${s}₁ = ${nf(1 / ratio, 6)}`,
    ];
    if (a < 0) steps.push("Negatives Dämpfungsmaß bedeutet Verstärkung (Ausgang größer als Eingang).");
    return { a, ratio, T: 1 / ratio, steps };
  }
  function powerAfter(P1, a) {
    num(P1, "P₁ (Eingang)", { gt: 0 }); num(a, "Dämpfungsmaß a", { min: -200, max: 400 });
    const f = 10 ** (a / 10), P2 = P1 / f;
    return {
      P2, factor: f,
      steps: [
        `Aus a = 10 × lg(P₁ ÷ P₂) folgt: P₁ ÷ P₂ = 10^(a ÷ 10) = 10^(${nf(a, 4)} ÷ 10) = ${nf(f, 6)}`,
        `P₂ = P₁ ÷ ${nf(f, 6)} = ${nf(P1, 6)} ÷ ${nf(f, 6)} = ${nf(P2, 6)}`,
      ],
    };
  }
  const dbm = (mW) => 10 * lg(mW);
  const mwFromDbm = (d) => 10 ** (d / 10);
  function link({ len, perKm, conn = 0, connDb = 0, spl = 0, splDb = 0, tx = null, rxMin = null }) {
    num(len, "Länge", { min: 0 }); num(perKm, "Dämpfung pro km", { min: 0 });
    num(conn, "Anzahl Steckverbindungen", { int: true, min: 0 }); num(connDb, "Dämpfung je Stecker", { min: 0 });
    num(spl, "Anzahl Spleiße", { int: true, min: 0 }); num(splDb, "Dämpfung je Spleiß", { min: 0 });
    const aFiber = len * perKm, aConn = conn * connDb, aSpl = spl * splDb, a = aFiber + aConn + aSpl;
    const steps = [
      `Leitung: ${nf(len, 3)} km × ${nf(perKm, 3)} dB/km = ${nf(aFiber, 3)} dB`,
      `Steckverbindungen: ${conn} × ${nf(connDb, 3)} dB = ${nf(aConn, 3)} dB`,
      `Spleiße: ${spl} × ${nf(splDb, 3)} dB = ${nf(aSpl, 3)} dB`,
      `Gesamtdämpfung (dB werden addiert): a = ${nf(aFiber, 3)} + ${nf(aConn, 3)} + ${nf(aSpl, 3)} = ${nf(a, 3)} dB`,
    ];
    let rx = null, margin = null;
    if (tx != null) {
      num(tx, "Sendepegel");
      rx = tx - a;
      steps.push(`Empfangspegel: ${nf(tx, 3)} dBm − ${nf(a, 3)} dB = ${nf(rx, 3)} dBm (≙ ${nf(mwFromDbm(rx), 6)} mW)`);
      if (rxMin != null) {
        num(rxMin, "Empfängerempfindlichkeit");
        margin = rx - rxMin;
        steps.push(`Systemreserve: ${nf(rx, 3)} dBm − (${nf(rxMin, 3)} dBm) = ${nf(margin, 3)} dB → ${margin >= 0 ? "das Signal reicht aus" : "zu viel Dämpfung – der Empfänger erkennt das Signal nicht sicher"}`);
      }
    }
    return { aFiber, aConn, aSpl, a, rx, margin, steps };
  }

  /* ---------- Verfügbarkeit ---------- */
  const PERIODS = [
    { id: "jahr", label: "Jahr (365 Tage)", days: 365 },
    { id: "monat", label: "Monat (30 Tage)", days: 30 },
    { id: "woche", label: "Woche (7 Tage)", days: 7 },
    { id: "tag", label: "Tag", days: 1 },
  ];
  const pctCheck = (p, name) => { num(p, name, { gt: 0, max: 100 }); return p; };
  const downtime = (pct, hours) => (1 - pct / 100) * hours;
  const fromDowntime = (down, hours) => (1 - down / hours) * 100;
  const serial = (pcts) => pcts.reduce((a, p) => a * (p / 100), 1) * 100;
  const parallel = (pcts) => (1 - pcts.reduce((a, p) => a * (1 - p / 100), 1)) * 100;
  const dec = (p) => nf(p / 100, 8);
  function serialSteps(pcts, label = "Reihe") {
    const res = serial(pcts);
    return { value: res, text: `${label}: A = ${pcts.map(dec).join(" × ")} = ${nf(res / 100, 8)} → ${pf(res)} %` };
  }
  function parallelSteps(pcts, label = "Parallel") {
    const res = parallel(pcts);
    const fails = pcts.map((p) => 1 - p / 100);
    const prod = fails.reduce((a, b) => a * b, 1);
    return { value: res, text: `${label}: A = 1 − ${pcts.map((p) => `(1 − ${dec(p)})`).join(" × ")} = 1 − ${fails.map((f) => nf(f, 8)).join(" × ")} = 1 − ${nf(prod, 10)} = ${nf(res / 100, 10)} → ${pf(res)} %` };
  }
  function availSystem(stages, paths = 1) {
    if (!Array.isArray(stages) || !stages.length) fail("Bitte mindestens eine Komponente angeben.");
    num(paths, "Anzahl paralleler Pfade", { int: true, min: 1, max: 20 });
    const steps = [], per = [];
    stages.forEach((s, i) => {
      const name = s.name || `Stufe ${i + 1}`;
      if (!s.values || !s.values.length) fail(`${name}: bitte eine Verfügbarkeit eintragen.`);
      s.values.forEach((v) => pctCheck(v, `Verfügbarkeit bei „${name}“`));
      if (s.values.length > 1) { const r = parallelSteps(s.values, `${esc(name)} (${s.values.length}× parallel)`); per.push(r.value); steps.push(r.text); }
      else per.push(s.values[0]);
    });
    const chain = serial(per);
    steps.push(per.length > 1 ? serialSteps(per, "Alle Stufen in Reihe").text : `Nur eine Stufe: A = ${pf(chain)} %`);
    let total = chain;
    if (paths > 1) {
      total = parallel(Array(paths).fill(chain));
      steps.push(`${paths} gleiche Gesamtpfade parallel: A = 1 − (1 − ${dec(chain)})${sup(paths)} = ${nf(total / 100, 10)} → ${pf(total)} %`);
    }
    return { per, chain, total, steps, downYearH: downtime(total, HOURS_YEAR) };
  }
  const availFromMtbf = (mtbf, mttr) => (mtbf / (mtbf + mttr)) * 100;
  const maxMttr = (pct, mtbf) => (mtbf * (1 - pct / 100)) / (pct / 100);
  const minMtbf = (pct, mttr) => (mttr * (pct / 100)) / (1 - pct / 100);
  function mtbfCalc({ mtbf = null, mttr = null, a = null }) {
    const given = [mtbf, mttr, a].filter((x) => x != null).length;
    if (given !== 2) fail("Fülle genau zwei der drei Felder aus – das dritte wird berechnet.");
    if (mtbf != null) num(mtbf, "MTBF", { gt: 0 });
    if (mttr != null) num(mttr, "MTTR", { min: 0 });
    if (a != null) { num(a, "Verfügbarkeit", { gt: 0 }); if (a >= 100) fail("Die Verfügbarkeit muss kleiner als 100 % sein (sonst gäbe es keine Reparaturzeit)."); }
    const steps = [];
    if (a == null) {
      if (mtbf + mttr <= 0) fail("MTBF + MTTR muss größer als 0 sein.");
      a = availFromMtbf(mtbf, mttr);
      steps.push(`A = MTBF ÷ (MTBF + MTTR) = ${nf(mtbf, 4)} h ÷ (${nf(mtbf, 4)} h + ${nf(mttr, 4)} h) = ${nf(a / 100, 8)} → ${pf(a)} %`);
    } else if (mttr == null) {
      mttr = maxMttr(a, mtbf);
      steps.push(`Aus A = MTBF ÷ (MTBF + MTTR) folgt: MTTR = MTBF × (1 − A) ÷ A = ${nf(mtbf, 4)} h × ${nf(1 - a / 100, 8)} ÷ ${dec(a)} = ${nf(mttr, 4)} h`);
    } else {
      mtbf = minMtbf(a, mttr);
      steps.push(`Aus A = MTBF ÷ (MTBF + MTTR) folgt: MTBF = MTTR × A ÷ (1 − A) = ${nf(mttr, 4)} h × ${dec(a)} ÷ ${nf(1 - a / 100, 8)} = ${nf(mtbf, 4)} h`);
    }
    const cycles = HOURS_YEAR / (mtbf + mttr);
    steps.push(`Zum Vergleich: ${nf(HOURS_YEAR)} h ÷ (MTBF + MTTR) ≈ ${nf(cycles, 2)} Ausfälle pro Jahr, Ausfallzeit ≈ ${nf(downtime(a, HOURS_YEAR), 3)} h/Jahr`);
    return { mtbf, mttr, a, cycles, steps };
  }

  /* =====================================================================
     2) Zufallsaufgaben (GEN) – R = { rand(a,b), pick(arr) }
     ===================================================================== */
  const EXACT = { rel: 0, abs: 1e-9 };
  const INT = { rel: 0, abs: 0.5 };
  const PCT = (d) => ({ rel: 0, abs: 10 ** -d * 1.0001 });
  /** Eingabefeld einer Übungsaufgabe. traps = typische Fehlerwerte mit Hinweis. */
  function fld(label, unit, ans, d = 2, o = {}) {
    const tol = o.tol || { rel: 0.005, abs: 0.6 * 10 ** -d };
    // Fallen, die (fast) der richtigen Lösung entsprechen, sind nutzlos → aussortieren
    const traps = (o.traps || []).filter((t) => t && Number.isFinite(t.v) && !close(t.v, ans, { rel: Math.max(tol.rel || 0, 0.004), abs: tol.abs }));
    return { label, unit, ans, d, tol, traps, ph: o.ph };
  }
  const choice = (label, choices, ans) => ({ label, unit: "", choices, ans, traps: [] });
  /** Bewertet eine Eingabe gegen ein Feld. */
  function judge(f, raw) {
    const s = String(raw ?? "").trim();
    if (f.choices) return { ok: s === f.ans, empty: !s, trap: null };
    if (!s) return { empty: true, ok: false, trap: null };
    const v = parseNum(s);
    if (Number.isNaN(v)) return { invalid: true, ok: false, trap: null };
    const alt = parseAlt(s);
    const ok = close(v, f.ans, f.tol) || (!Number.isNaN(alt) && close(alt, f.ans, f.tol));
    let trap = null;
    if (!ok) {
      for (const t of f.traps) {
        const tt = { rel: 0.006, abs: f.tol.abs };
        if (close(v, t.v, tt) || (!Number.isNaN(alt) && close(alt, t.v, tt))) { trap = t.msg; break; }
      }
    }
    return { ok, trap, v };
  }
  const ansText = (f) => (f.choices ? f.ans : `${nf(f.ans, f.d)}${f.unit ? " " + f.unit : ""}`);

  /* ---- Datenmengen ---- */
  function sizeTraps(bytes, unit) {
    const u = unitOf(unit), c = counterpart(unit), right = (bytes * 8) / u.bits;
    const t = [];
    if (c !== unit) {
      const cu = unitOf(c);
      t.push({ v: (bytes * 8) / cu.bits, msg: u.sys === "IEC" ? `Du hast mit ${cu.pow} gerechnet (das wäre ${cu.name}). Für ${u.name} teilst du durch ${u.pow} = ${nf(u.f, 0)}.` : `Das wäre ${cu.name} (binär, ${cu.pow}). Für ${u.name} teilst du durch ${u.pow} = ${nf(u.f, 0)}.` });
    }
    t.push({ v: right * 8, msg: "Bit statt Byte? Die Datenmenge in Bit musst du noch durch 8 teilen." });
    t.push({ v: right / 8, msg: "Einmal zu oft durch 8 geteilt?" });
    return t;
  }
  function convTraps(v, from, to) {
    const right = convert(v, from, to), t = [];
    const cf = counterpart(from), ct = counterpart(to);
    if (ct !== to) t.push({ v: convert(v, from, ct), msg: `SI und IEC verwechselt: ${DUM[to].name} ist ${DUM[to].sys === "IEC" ? "binär (Zweierpotenzen)" : "dezimal (Zehnerpotenzen)"}.` });
    if (cf !== from) t.push({ v: convert(v, cf, to), msg: `SI und IEC verwechselt: ${DUM[from].name} ist ${DUM[from].sys === "IEC" ? "binär (Zweierpotenzen)" : "dezimal (Zehnerpotenzen)"}.` });
    t.push({ v: right * 8, msg: "Faktor 8 in die falsche Richtung? 1 Byte = 8 Bit – Byte → Bit: × 8, Bit → Byte: ÷ 8." });
    t.push({ v: right / 8, msg: "Faktor 8 in die falsche Richtung? 1 Byte = 8 Bit – Byte → Bit: × 8, Bit → Byte: ÷ 8." });
    return t;
  }
  function timeTraps(amount, unit, rate, runit, div) {
    const r = transferTime(amount, unit, rate, runit), t = [];
    t.push({ v: r.sec / 8 / div, msg: "Faktor 8 vergessen: Die Datenrate ist in Bit/s – die Datenmenge also erst von Byte in Bit umrechnen (× 8)." });
    const c = counterpart(unit);
    if (c !== unit) t.push({ v: transferTime(amount, c, rate, runit).sec / div, msg: DUM[unit].sys === "IEC" ? `${unit} ist binär: 1 ${unit} = ${DUM[unit].pow} Byte, nicht 10er-Potenz.` : `${unit} ist dezimal: 1 ${unit} = ${DUM[unit].pow} Byte – nicht mit Zweierpotenzen rechnen.` });
    t.push({ v: r.bits / (rate * 2 ** 20) / div, msg: "Datenraten sind immer dezimal: 1 Mbit/s = 1.000.000 bit/s (nicht 2²⁰)." });
    return t;
  }
  function genData(type, lvl, R) {
    const { rand, pick } = R;
    if (type === "bild") {
      if (lvl >= 3) {
        const [w, hh] = pick([[4000, 3000], [6000, 4000], [4608, 3456], [5472, 3648]]);
        const card = pick([16, 32, 64, 128]);
        const img = imageSize(w, hh, 24);
        const mb = img.bytes / 1e6, cap = card * 1e9, count = Math.floor(cap / img.bytes);
        return {
          q: `<p>Eine Kamera speichert Fotos mit <strong>${nf(w)} × ${nf(hh)} Pixeln</strong> und <strong>24 Bit Farbtiefe</strong> unkomprimiert (ohne Metadaten). Die Speicherkarte hat laut Hersteller <strong>${card} GB</strong> (1 GB = 10⁹ Byte).</p><p>a) Wie groß ist ein Foto in MB? b) Wie viele Fotos passen vollständig auf die Karte?</p>`,
          fields: [
            fld("a) Größe je Foto", "MB", mb, 2, { traps: sizeTraps(img.bytes, "MB") }),
            fld("b) Anzahl Fotos", "Stück", count, 0, { tol: EXACT, ph: "ganze Zahl", traps: [{ v: Math.floor((card * 2 ** 30) / img.bytes), msg: "Die Karte hat 10⁹ Byte pro GB (Herstellerangabe), nicht 2³⁰." }, { v: Math.ceil(cap / img.bytes), msg: "Nur vollständige Fotos zählen – also abrunden!" }] }),
          ],
          steps: [...img.steps, unitStep(img.bytes, "MB"), `Karte in Byte: ${card} GB × 10⁹ = ${nf(cap)} Byte`, `Anzahl: ${nf(cap)} Byte ÷ ${nf(img.bytes)} Byte = ${nf(cap / img.bytes, 3)} → abgerundet <strong>${count} Fotos</strong>`],
        };
      }
      const [w, hh] = pick(lvl === 1 ? [[640, 480], [800, 600], [1024, 768], [1280, 720]] : [[1920, 1080], [2560, 1440], [3840, 2160], [1280, 1024], [1600, 1200]]);
      const depth = pick(lvl === 1 ? [1, 8, 24] : [16, 24, 32]);
      const r = imageSize(w, hh, depth);
      const units = lvl === 1 ? ["Byte", "kB"] : ["MiB", "MB"];
      return {
        q: `<p>Ein unkomprimiertes Bild (Bitmap) hat <strong>${nf(w)} × ${nf(hh)} Pixel</strong> und eine Farbtiefe von <strong>${depth} Bit</strong>${depth === 1 ? " (Schwarz-Weiß)" : depth === 8 ? " (256 Farben)" : ""}. Berechne den Speicherbedarf.</p>`,
        fields: units.map((u) => fld("Speicherbedarf", u, (r.bytes * 8) / DUM[u].bits, u === "Byte" ? 0 : 2, { tol: u === "Byte" ? INT : undefined, traps: sizeTraps(r.bytes, u) })),
        steps: [...r.steps, ...units.filter((u) => u !== "Byte").map((u) => unitStep(r.bytes, u))],
      };
    }
    if (type === "audio") {
      let rate, depth, ch, sec;
      if (lvl === 1) { rate = pick([44100, 48000]); depth = 16; ch = pick([1, 2]); sec = pick([10, 30, 60]); }
      else if (lvl === 2) { rate = pick([44100, 48000, 96000]); depth = pick([16, 24]); ch = pick([1, 2]); sec = rand(1, 5) * 60 + pick([0, 15, 30, 45]); }
      else { rate = pick([48000, 96000, 192000]); depth = pick([24, 32]); ch = pick([2, 6, 8]); sec = pick([30, 45, 60, 90]) * 60; }
      const r = audioSize(rate, depth, ch, sec);
      const chTxt = { 1: "Mono", 2: "Stereo", 6: "5.1-Surround (6 Kanäle)", 8: "7.1-Surround (8 Kanäle)" }[ch];
      const units = lvl === 1 ? ["Byte", "MB"] : lvl === 2 ? ["MiB", "MB"] : ["GiB", "GB"];
      return {
        q: `<p>Eine Audioaufnahme wird unkomprimiert (PCM/WAV) gespeichert: Abtastrate <strong>${nf(rate / 1000, 1)} kHz</strong>, <strong>${depth} Bit</strong> Auflösung, <strong>${chTxt}</strong>, Dauer <strong>${dur(sec)}</strong>. Wie groß ist die Datei?</p>`,
        fields: units.map((u) => fld("Dateigröße", u, (r.bytes * 8) / DUM[u].bits, u === "Byte" ? 0 : 2, { tol: u === "Byte" ? INT : undefined, traps: sizeTraps(r.bytes, u) })),
        steps: [`Abtastrate: ${nf(rate / 1000, 1)} kHz = ${nf(rate)} Hz (Abtastwerte pro Sekunde)`, `Dauer: ${dur(sec)} = ${nf(sec)} s`, ...r.steps, ...units.filter((u) => u !== "Byte").map((u) => unitStep(r.bytes, u))],
      };
    }
    if (type === "video") {
      let w, hh, depth = 24, fps, sec;
      if (lvl === 1) { [w, hh] = [640, 480]; fps = 25; sec = pick([1, 2, 5]); }
      else if (lvl === 2) { [w, hh] = pick([[1280, 720], [1920, 1080]]); fps = pick([25, 30, 50]); sec = rand(1, 6) * 10; }
      else { [w, hh] = pick([[1920, 1080], [3840, 2160]]); depth = pick([24, 30]); fps = pick([25, 50, 60]); sec = rand(1, 5) * 60; }
      const r = videoSize(w, hh, depth, fps, sec);
      const units = lvl === 1 ? ["MB", "MiB"] : lvl === 2 ? ["GB", "GiB"] : ["GiB"];
      const fields = units.map((u) => fld("Datenmenge", u, (r.bytes * 8) / DUM[u].bits, 2, { traps: sizeTraps(r.bytes, u) }));
      if (lvl >= 3) fields.push(fld("Datenrate (unkomprimiert)", "Gbit/s", r.bps / 1e9, 2, { traps: [{ v: r.bps / 2 ** 30, msg: "Datenraten sind dezimal: 1 Gbit/s = 10⁹ bit/s." }, { v: r.bps / 8e9, msg: "Das wäre GB/s (Byte) – gefragt sind Gbit/s." }] }));
      return {
        q: `<p>Ein Video soll <strong>unkomprimiert</strong> gespeichert werden: <strong>${nf(w)} × ${nf(hh)} Pixel</strong>, <strong>${depth} Bit</strong> Farbtiefe, <strong>${fps} Bilder/s</strong>, Dauer <strong>${dur(sec)}</strong> (ohne Ton).${lvl >= 3 ? " Welche Datenmenge entsteht, und welche Datenrate wäre für eine unkomprimierte Übertragung nötig?" : " Welche Datenmenge entsteht?"}</p>`,
        fields,
        steps: [`Dauer: ${dur(sec)} = ${nf(sec)} s`, ...r.steps, ...units.map((u) => unitStep(r.bytes, u)), ...(lvl >= 3 ? [`Datenrate: ${nf(r.bps)} bit/s ÷ 10⁹ = ${nf(r.bps / 1e9, 4)} Gbit/s`] : [])],
      };
    }
    if (type === "einheit") {
      const pools = {
        1: [() => [rand(2, 9) * 500, "kB", "MB"], () => [pick([1.5, 2.5, 4.7, 8.5]), "GB", "MB"], () => [pick([4, 16, 32, 64]), "Byte", "bit"], () => [pick([8, 16, 24, 100]), "Mbit", "MB"], () => [pick([2, 5, 12, 25]), "MB", "Mbit"], () => [pick([250, 500, 750]), "GB", "TB"]],
        2: [() => [pick([250, 500, 960, 1000, 2000]), "GB", "GiB"], () => [pick([1, 2, 4, 8, 16]), "TB", "TiB"], () => [pick([128, 256, 512]), "MiB", "MB"], () => [pick([4, 8, 16, 32]), "GiB", "GB"], () => [pick([4096, 8192, 65536]), "Byte", "KiB"], () => [pick([2048, 4096, 10240]), "KiB", "MiB"]],
        3: [() => [pick([1, 10, 100]), "Gbit", "MiB"], () => [pick([100, 256, 700]), "MiB", "Mbit"], () => [pick([4, 16, 64]), "GiB", "Gbit"], () => [pick([2, 4, 8]), "TB", "GiB"], () => [pick([50, 100, 250]), "Mbit", "KiB"]],
      };
      const [v, from, to] = pick(pools[Math.min(3, Math.max(1, lvl))])();
      const r = convSteps(v, from, to);
      const d = r.value >= 100 ? 2 : r.value >= 1 ? 3 : 4;
      const hint = from === "TB" && to === "TiB" ? `<p class="muted small">So viel zeigt z. B. Windows für eine ${nf(v)}-TB-Festplatte an – allerdings mit der Beschriftung „TB“.</p>` : "";
      return {
        q: `<p>Rechne <strong>${nf(v)} ${DUM[from].name}</strong> in <strong>${DUM[to].name}</strong> um.</p>${hint}`,
        fields: [fld("Ergebnis", DUM[to].name, r.value, d, { traps: convTraps(v, from, to) })],
        steps: r.steps,
      };
    }
    if (type === "dauer") {
      let amount, unit, rate, ctx = "";
      const runit = "Mbit/s";
      if (lvl === 1) { amount = pick([100, 200, 250, 500, 700]); unit = "MB"; rate = pick([10, 16, 50, 100]); }
      else if (lvl === 2) { amount = pick([1.5, 2, 4.7, 8.5, 10, 25, 50]); unit = "GB"; rate = pick([16, 50, 100, 250, 500, 1000]); }
      else { [amount, unit, ctx] = pick([[40, "GiB", "Ein VM-Image"], [pick([250, 500, 750]), "GiB", "Eine Datensicherung"], [pick([1, 2, 4]), "TB", "Ein Backup"], [pick([60, 120]), "GiB", "Ein Festplatten-Image"]]); rate = pick([100, 250, 1000]); }
      const r = transferTime(amount, unit, rate, runit);
      const q = lvl >= 3
        ? `<p>${ctx} mit <strong>${nf(amount)} ${unit}</strong> soll über eine Leitung mit <strong>${nf(rate)} ${runit}</strong> übertragen werden (ohne Protokoll-Overhead). Wie lange dauert die Übertragung?</p>`
        : `<p>Eine Datei mit <strong>${nf(amount)} ${unit}</strong> wird über eine Verbindung mit <strong>${nf(rate)} ${runit}</strong> übertragen. Wie lange dauert das (ohne Protokoll-Overhead)?</p>`;
      const mk = (u, div, d) => fld("Übertragungsdauer", u, r.sec / div, d, { traps: timeTraps(amount, unit, rate, runit, div) });
      const fields = lvl === 1 ? [mk("s", 1, 1)] : lvl === 2 ? [mk("s", 1, 0), mk("min", 60, 2)] : [mk("h", 3600, 2), mk("min", 60, 1)];
      return { q, fields, steps: r.steps };
    }
    // type === "rate"
    let amount, unit, time, tunit, q, extra = null;
    if (lvl === 1) { amount = pick([100, 250, 500]); unit = "MB"; time = pick([10, 20, 40, 50]); tunit = "s"; q = `<p>Eine Datei mit <strong>${amount} MB</strong> soll in höchstens <strong>${time} Sekunden</strong> übertragen werden. Welche Datenrate ist mindestens nötig?</p>`; }
    else if (lvl === 2) { amount = pick([50, 100, 300, 600]); unit = "GB"; time = pick([1, 2, 4, 8]); tunit = "h"; q = `<p>Ein Backup mit <strong>${amount} GB</strong> soll in <strong>${time} ${time === 1 ? "Stunde" : "Stunden"}</strong> über das Netzwerk gesichert werden. Welche Datenrate ist mindestens nötig (ohne Overhead)?</p>`; }
    else {
      amount = pick([1, 1.5, 2]); unit = "TiB"; const start = pick([22, 23]), end = pick([4, 5, 6]); time = 24 - start + end; tunit = "h";
      q = `<p>Die nächtliche Datensicherung (<strong>${nf(amount)} TiB</strong>) muss im Zeitfenster von <strong>${start}:00 bis ${end}:00 Uhr</strong> vollständig ins Rechenzentrum übertragen werden. Welche Datenrate ist mindestens nötig, und welche Leitung wählst du (kleinste ausreichende)?</p>`;
      extra = `Zeitfenster: ${start}:00 bis 24:00 Uhr = ${24 - start} h, 0:00 bis ${end}:00 Uhr = ${end} h → zusammen ${time} h`;
    }
    const r = requiredRate(amount, unit, time, tunit);
    const mbps = r.bps / 1e6;
    const c = counterpart(unit);
    const fields = [fld("Datenrate", "Mbit/s", mbps, 2, { traps: [{ v: mbps / 8, msg: "Das wäre MB/s – für Mbit/s die Datenmenge in Bit umrechnen (× 8)." }, c !== unit ? { v: requiredRate(amount, c, time, tunit).bps / 1e6, msg: `SI/IEC verwechselt: 1 ${unit} = ${DUM[unit].pow} Byte.` } : null, { v: r.bps / 2 ** 20, msg: "Datenraten sind dezimal: 1 Mbit/s = 10⁶ bit/s." }] })];
    const steps = r.steps.slice();
    if (extra) {
      const lines = [[100, "100 Mbit/s"], [250, "250 Mbit/s"], [500, "500 Mbit/s"], [1000, "1 Gbit/s"], [10000, "10 Gbit/s"]];
      const best = lines.find(([x]) => x >= mbps - 1e-9) || lines[lines.length - 1];
      fields.push(choice("Passende Leitung", lines.map((l) => l[1]), best[1]));
      steps.unshift(extra);
      steps.push(`Kleinste Leitung mit mindestens ${nf(mbps, 2)} Mbit/s: ${best[1]}`);
    }
    return { q, fields, steps };
  }

  /* ---- RAID ---- */
  const RAID_N = { 0: [2, 3, 4, 6], 1: [2], 5: [3, 4, 5, 6, 8], 6: [4, 5, 6, 8, 10], 10: [4, 6, 8, 10], 50: [6, 8, 10], 60: [8, 10, 12] };
  function genRaid(type, lvl, R) {
    const { rand, pick } = R;
    const size = pick(lvl === 1 ? [1, 2, 4] : [2, 4, 6, 8, 10, 12, 16, 18, 20]);
    if (type === "grundlagen") {
      const level = pick([0, 1, 5, 6, 10]);
      const L = RAID[level], tol = raidTol(level, L.min, 2)[0];
      return {
        q: `<p>Beantworte für <strong>${L.name}</strong> (${L.kind}): Wie viele Festplatten brauchst du <strong>mindestens</strong>, und wie viele Platten dürfen dann <strong>garantiert</strong> gleichzeitig ausfallen, ohne dass Daten verloren gehen?</p>`,
        fields: [fld("Mindestanzahl Platten", "Stück", L.min, 0, { tol: EXACT, ph: "ganze Zahl" }), fld("Garantiert tolerierte Ausfälle", "Platten", tol, 0, { tol: EXACT, ph: "ganze Zahl" })],
        steps: [`${L.name}: ${L.kind}`, `Mindestanzahl: ${L.min} Platten`, `Ausfalltoleranz: ${raidTolText(level, L.min, 2)}`],
      };
    }
    if (type === "netto") {
      const level = pick(lvl === 1 ? [0, 1, 5] : lvl === 2 ? [5, 6, 10] : [6, 10, 50, 60]);
      const n = pick(RAID_N[level]);
      const r = raidCalc({ level, sizes: Array(n).fill(size), groups: 2 });
      const traps = [
        { v: n * size, msg: "Das ist die Bruttokapazität – die Redundanz musst du noch abziehen." },
        { v: (n - 1) * size, msg: "Das entspräche RAID 5 (eine Platte Parität) – prüfe die Formel für dieses Level." },
        { v: (n - 2) * size, msg: "Das entspräche RAID 6 (zwei Platten Parität) – prüfe die Formel für dieses Level." },
        { v: (n / 2) * size, msg: "Das entspräche einer Spiegelung (RAID 10: Hälfte) – prüfe die Formel für dieses Level." },
      ];
      return {
        q: `<p>Ein Server bekommt <strong>${n} Festplatten à ${nf(size)} TB</strong>, die als <strong>${r.name}</strong>${level >= 50 ? " mit 2 Gruppen" : ""} betrieben werden.</p><p>Berechne die Nettokapazität und die Speichereffizienz. Wie viele Platten dürfen garantiert gleichzeitig ausfallen?</p>`,
        fields: [
          fld("Nettokapazität", "TB", r.net, 2, { traps }),
          fld("Speichereffizienz", "%", r.eff, 1, { tol: { rel: 0, abs: 0.06 }, traps: [{ v: 100 - r.eff, msg: "Das ist der Anteil für Redundanz – gefragt ist der nutzbare Anteil." }] }),
          fld("Garantiert tolerierte Ausfälle", "Platten", r.tolMin, 0, { tol: EXACT, ph: "ganze Zahl", traps: r.tolMax !== r.tolMin ? [{ v: r.tolMax, msg: `Das ist der beste Fall – garantiert sind nur ${r.tolMin}, weil es im ungünstigsten Fall ${level === 10 ? "beide Platten eines Spiegel-Paares" : "dieselbe Gruppe"} trifft.` }] : [] }),
        ],
        steps: r.steps,
      };
    }
    if (type === "anzahl") {
      const level = pick(lvl === 1 ? [5] : lvl === 2 ? [5, 6, 10] : [5, 6, 10, 50, 60]);
      const hs = lvl >= 3 ? pick([0, 1, 1, 2]) : 0;
      let target, r, tries = 0;
      do { target = rand(2, 16) * 5; r = raidDisks({ level, net: target, size, hotSpares: hs, groups: 2 }); } while ((r.total > 24 || target <= size) && ++tries < 60);
      return {
        q: `<p>Du planst ein Speichersystem mit mindestens <strong>${target} TB Nettokapazität</strong> als <strong>RAID ${level}</strong>${level >= 50 ? " (2 Gruppen)" : ""}. Verfügbar sind Festplatten mit je <strong>${nf(size)} TB</strong>${hs ? `; zusätzlich sollen <strong>${hs} Hot-Spare${hs > 1 ? "s" : ""}</strong> eingeplant werden` : ""}.</p><p>Wie viele Festplatten brauchst du ${hs ? "insgesamt (inkl. Hot-Spare)" : "mindestens"}? Welche Nettokapazität ergibt sich tatsächlich?</p>`,
        fields: [
          fld(hs ? "Platten insgesamt" : "Anzahl Platten", "Stück", r.total, 0, { tol: EXACT, ph: "ganze Zahl", traps: [{ v: r.k, msg: "Das sind nur die Datenplatten – die Platten für Redundanz fehlen noch." }, hs ? { v: r.n, msg: "Hot-Spare nicht vergessen!" } : null] }),
          fld("Tatsächliche Nettokapazität", "TB", r.net, 2),
        ],
        steps: r.steps,
      };
    }
    if (type === "gemischt") {
      const level = pick(lvl === 1 ? [1, 5] : [0, 1, 5, 6]);
      const n = level === 1 ? 2 : level === 6 ? pick([4, 5]) : pick([3, 4]);
      const base = pick([2, 4, 6]);
      const sizes = Array(n).fill(base);
      sizes[n - 1] = pick([base * 2, base + 2, base * 1.5]);
      if (n > 3 && rand(0, 1)) sizes[0] = pick([base + 2, base * 2]);
      const r = raidCalc({ level, sizes });
      const mx = Math.max(...sizes);
      return {
        q: `<p>In einem NAS werden folgende Festplatten zu einem <strong>RAID ${level}</strong> zusammengefasst: <strong>${sizes.map((s) => nf(s) + " TB").join(", ")}</strong>.</p><p>Wie groß ist die Nettokapazität, und wie viel Speicherplatz bleibt insgesamt ungenutzt?</p>`,
        fields: [
          fld("Nettokapazität", "TB", r.net, 2, { traps: [{ v: raidData(level, n) * mx, msg: "Nicht die größte, sondern die kleinste Platte zählt für alle!" }, { v: (sum(sizes) * r.dataDisks) / n, msg: "Mit der Summe der Größen darfst du nicht rechnen – jede Platte zählt nur so viel wie die kleinste." }, { v: sum(sizes) - mx, msg: "Nicht die größte Platte abziehen – rechne mit der kleinsten Platte × Anzahl Datenplatten." }] }),
          fld("Ungenutzter Speicher", "TB", r.unused, 2),
        ],
        steps: r.steps,
      };
    }
    // type === "spare"
    const level = pick(lvl === 1 ? [5] : [5, 6, 10]);
    const hs = lvl >= 3 ? pick([1, 2]) : 1;
    const n = pick(RAID_N[level]);
    const total = n + hs;
    const r = raidCalc({ level, sizes: Array(n).fill(size), hotSpares: hs, spareSize: size });
    return {
      q: `<p>Ein Storage-System enthält <strong>${total} Festplatten à ${nf(size)} TB</strong>. ${hs === 1 ? "Eine Platte wird" : `${hs} Platten werden`} als <strong>Hot-Spare</strong> konfiguriert, die übrigen bilden ein <strong>RAID ${level}</strong>.</p><p>Berechne die Bruttokapazität (alle eingebauten Platten) und die Nettokapazität.</p>`,
      fields: [
        fld("Bruttokapazität", "TB", r.grossTotal, 2, { traps: [{ v: r.grossArray, msg: "Brutto = alle eingebauten Platten, also inklusive Hot-Spare." }] }),
        fld("Nettokapazität", "TB", r.net, 2, { traps: [level === 10 && total % 2 ? null : { v: raidData(level, total) * size, msg: "Der Hot-Spare gehört nicht zum RAID-Verbund – er wartet nur in Reserve." }] }),
      ],
      steps: [`Platten im RAID: ${total} − ${hs} Hot-Spare = ${n}`, ...r.steps],
    };
  }

  /* ---- Energie ---- */
  function genEnergy(type, lvl, R) {
    const { rand, pick } = R;
    const price = pick([28, 30, 32, 34, 35, 38, 40]);
    if (type === "kosten") {
      let P, count = 1, hours, days, standby = 0, q, pre = [];
      if (lvl === 1) {
        if (rand(0, 1)) { P = rand(15, 60) * 10; hours = 24; days = 365; q = `<p>Ein Server hat eine durchschnittliche Leistungsaufnahme von <strong>${P} W</strong> und läuft <strong>rund um die Uhr</strong> (24 h an 365 Tagen). Der Strompreis beträgt <strong>${price} ct/kWh</strong>.</p>`; }
        else { P = rand(6, 20) * 10; hours = pick([6, 8, 10]); days = pick([220, 230, 250]); q = `<p>Ein Arbeitsplatz-PC nimmt im Betrieb <strong>${P} W</strong> auf und läuft <strong>${hours} h</strong> täglich an <strong>${days} Tagen</strong> im Jahr. Strompreis: <strong>${price} ct/kWh</strong>.</p>`; }
      } else {
        count = rand(5, 25);
        const pc = pick([65, 85, 95, 120, 150]), mon = pick([18, 22, 25, 30]);
        P = pc + mon; hours = pick([8, 9]); days = pick([220, 225, 230]);
        if (lvl >= 3) standby = pick([0.5, 1, 1.5, 2, 3]);
        pre = [`Leistung je Arbeitsplatz: ${pc} W + ${mon} W = ${P} W`];
        q = `<p>In einem Büro stehen <strong>${count} Arbeitsplätze</strong>, jeweils mit PC (<strong>${pc} W</strong>) und Monitor (<strong>${mon} W</strong>). Die Geräte laufen <strong>${hours} h</strong> täglich an <strong>${days} Arbeitstagen</strong>.${standby ? ` In der <strong>übrigen Zeit des Jahres</strong> (365 × 24 h minus Betriebszeit) sind sie im Standby und nehmen dann <strong>${nf(standby)} W</strong> je Arbeitsplatz auf.` : ""} Strompreis: <strong>${price} ct/kWh</strong>.</p>`;
      }
      const r = energyYear({ P, count, hours, days, standby, price });
      return {
        q: q + "<p>Berechne den Energiebedarf pro Jahr und die jährlichen Stromkosten.</p>",
        fields: [
          fld("Energie pro Jahr", "kWh", r.kwh, 2, { traps: [{ v: r.kwh * 1000, msg: "Das sind Wh – für kWh noch durch 1.000 teilen." }, standby ? { v: r.kwhOp, msg: "Der Standby-Verbrauch fehlt noch." } : null] }),
          fld("Stromkosten pro Jahr", "€", r.eur, 2, { traps: [{ v: r.eur * 100, msg: "Das sind Cent – für Euro durch 100 teilen." }, { v: r.eur * 1000, msg: "Wh statt kWh und ct statt € – prüfe beide Umrechnungen." }] }),
        ],
        steps: pre.concat(r.steps),
      };
    }
    if (type === "amort") {
      let pOld, pNew, count = 1, hours, days, invest, q, per = 0;
      if (lvl === 1) {
        pOld = rand(30, 60) * 10; pNew = Math.round((pOld * pick([0.4, 0.5, 0.6])) / 10) * 10; hours = 24; days = 365; invest = rand(8, 25) * 100;
        q = `<p>Ein alter Server (<strong>${pOld} W</strong>) soll durch ein sparsameres Modell (<strong>${pNew} W</strong>) ersetzt werden. Beide laufen rund um die Uhr (24 h, 365 Tage). Der neue Server kostet <strong>${nf(invest)} €</strong>, der Strompreis beträgt <strong>${price} ct/kWh</strong>.</p>`;
      } else {
        count = rand(10, 40); pOld = pick([40, 45, 55, 60, 75]); pNew = pick([14, 16, 18, 20, 22]); hours = pick([8, 9, 10]); days = pick([220, 230, 250]); per = pick([119, 139, 149, 169, 189]); invest = per * count;
        q = `<p>In der Firma sollen <strong>${count} alte Monitore</strong> (je <strong>${pOld} W</strong>) durch energiesparende Modelle (je <strong>${pNew} W</strong>) ersetzt werden. Ein neuer Monitor kostet <strong>${nf(per)} €</strong>. Die Monitore laufen <strong>${hours} h</strong> an <strong>${days} Tagen</strong> im Jahr; Strompreis <strong>${price} ct/kWh</strong>.</p>`;
      }
      const r = amortization({ pOld, pNew, count, hours, days, price, invest });
      const fields = [
        fld("Ersparnis pro Jahr", "€", r.save, 2, { traps: [{ v: r.save * 100, msg: "Das sind Cent – durch 100 teilen." }] }),
        fld("Amortisationszeit", "Jahre", r.years, 2, { tol: { rel: 0.01, abs: 0.006 }, traps: [{ v: r.months, msg: "Das sind Monate – gefragt sind Jahre." }] }),
      ];
      if (lvl >= 3) fields.push(fld("Amortisationszeit", "Monate", r.months, 1, { tol: { rel: 0.01, abs: 0.06 } }));
      return { q: q + "<p>Wie viel Geld spart ihr pro Jahr, und nach welcher Zeit hat sich die Anschaffung amortisiert?</p>", fields, steps: (per ? [`Anschaffungskosten: ${count} × ${nf(per)} € = ${nf(invest)} €`] : []).concat(r.steps) };
    }
    if (type === "usv") {
      const cos = pick([0.6, 0.7, 0.75, 0.8, 0.9]);
      if (lvl === 1) {
        const P = rand(6, 18) * 50;
        const r = ups({ P, cos, reserve: 0 });
        return {
          q: `<p>Ein Server hat eine Wirkleistung von <strong>${P} W</strong>, der Leistungsfaktor beträgt <strong>cos φ = ${nf(cos)}</strong>. Welche Scheinleistung muss die USV mindestens liefern?</p>`,
          fields: [fld("Scheinleistung S", "VA", r.S, 1, { traps: [{ v: P * cos, msg: "Umgekehrt: S = P ÷ cos φ – die Scheinleistung ist immer größer als die Wirkleistung." }] })],
          steps: r.steps.slice(0, 1),
        };
      }
      const reserve = pick([20, 25, 30]);
      let devs, P, r, tries = 0;
      do {
        devs = [["Server", rand(4, 12) * 50], ["NAS", rand(4, 10) * 10], ["Switch", rand(3, 12) * 10], ["Firewall", rand(2, 6) * 10]];
        if (rand(0, 1)) devs.push(["Monitor", rand(2, 4) * 10]);
        P = sum(devs.map((d) => d[1]));
        r = ups({ P, cos, reserve });
      } while (r.Sres > 3000 && ++tries < 30);
      const fields = [
        fld("Wirkleistung gesamt P", "W", P, 0, { tol: INT }),
        fld("Scheinleistung inkl. Reserve", "VA", r.Sres, 1, { traps: [{ v: r.S, msg: "Die Reserve fehlt noch." }, { v: P * (1 + reserve / 100), msg: "Den Leistungsfaktor nicht vergessen: S = P ÷ cos φ." }, { v: P * cos * (1 + reserve / 100), msg: "S = P ÷ cos φ (teilen, nicht multiplizieren)." }] }),
      ];
      const steps = [`Wirkleistung: P = ${devs.map((d) => d[1] + " W").join(" + ")} = ${nf(P)} W`, ...r.steps.slice(0, 2)];
      let q = `<p>An eine USV sollen angeschlossen werden: ${devs.map(([n, w]) => `${n} <strong>${w} W</strong>`).join(", ")}. Der Leistungsfaktor beträgt <strong>cos φ = ${nf(cos)}</strong>, als Reserve sollen <strong>${reserve} %</strong> eingeplant werden. Berechne die gesamte Wirkleistung und die benötigte Scheinleistung.</p>`;
      if (lvl >= 3) {
        const opts = [750, 1000, 1500, 2200, 3000];
        const best = opts.find((x) => x >= r.Sres - 1e-9) || 3000;
        q += `<p>Welche USV wählst du aus den Größen ${opts.map((o) => nf(o) + " VA").join(", ")} (kleinste passende)?</p>`;
        fields.push(choice("Passende USV", opts.map((o) => nf(o) + " VA"), nf(best) + " VA"));
        steps.push(`Kleinste USV mit mindestens ${nf(r.Sres, 2)} VA: ${nf(best)} VA`);
      }
      return { q, fields, steps };
    }
    if (type === "akku") {
      const eta = pick([85, 90, 92, 95]);
      if (lvl <= 2) {
        const P = rand(4, 16) * 25;
        let r, txt;
        if (lvl === 1) { const E = pick([216, 288, 432, 504, 864]); r = upsRuntime({ Wh: E, eta, P }); txt = `Die Akkus einer USV speichern <strong>${E} Wh</strong>`; }
        else { const k = pick([2, 4]), V = 12 * k, Ah = pick([7, 9, 12]); r = upsRuntime({ V, Ah, eta, P }); txt = `Eine USV enthält <strong>${k} Akkus à 12 V / ${Ah} Ah</strong>, in Reihe geschaltet (also ${V} V / ${Ah} Ah)`; }
        return {
          q: `<p>${txt}. Der Wechselrichter hat einen Wirkungsgrad von <strong>${eta} %</strong>, die angeschlossene Last beträgt <strong>${P} W</strong>. Wie lange kann die USV die Last ungefähr überbrücken?</p>`,
          fields: [fld("Überbrückungszeit", "min", r.min, 1, { tol: { rel: 0.01, abs: 0.06 }, traps: [{ v: (r.E / P) * 60, msg: "Wirkungsgrad vergessen – nutzbar ist nur E × η." }, { v: (r.E / ((P * eta) / 100)) * 60, msg: "Wirkungsgrad falsch herum: nutzbare Energie = E × η." }, { v: r.h, msg: "Das sind Stunden – gefragt sind Minuten (× 60)." }] })],
          steps: r.steps,
        };
      }
      const P = rand(8, 24) * 50, minutes = pick([10, 15, 20, 30]), V = 48;
      const r = upsBattery({ P, minutes, eta, V });
      return {
        q: `<p>Eine USV soll eine Last von <strong>${P} W</strong> für <strong>${minutes} Minuten</strong> überbrücken. Der Wirkungsgrad beträgt <strong>${eta} %</strong>, das Akkusystem arbeitet mit <strong>${V} V</strong>. Welche Akkuenergie und welche Akkukapazität sind mindestens nötig?</p>`,
        fields: [fld("Akkuenergie", "Wh", r.Wh, 1, { traps: [{ v: (P * minutes) / 60, msg: "Wirkungsgrad vergessen – durch η teilen." }, { v: ((P * minutes) / 60) * (eta / 100), msg: "Durch η teilen, nicht multiplizieren – der Akku muss mehr liefern, als an der Last ankommt." }] }), fld("Akkukapazität", "Ah", r.Ah, 2)],
        steps: r.steps,
      };
    }
    if (type === "ohm") {
      let Rv, Iv;
      if (lvl >= 3) { Rv = pick([2.2, 4.7, 6.8, 12, 18, 27, 39, 56, 68, 82]) * pick([1, 10, 100]); Iv = pick([0.015, 0.03, 0.04, 0.12, 0.35, 1.5]); }
      else { Rv = pick([10, 22, 33, 47, 100, 150, 220, 330, 470, 1000]); Iv = pick([0.05, 0.1, 0.2, 0.25, 0.5, 1, 2]); }
      Rv = Math.round(Rv * 1000) / 1000;
      const Uv = Math.round(Rv * Iv * 1e6) / 1e6, Pv = Uv * Iv;
      const pair = pick(lvl === 1 ? ["UR", "UI", "IR"] : ["UR", "UI", "IR", "UP", "IP", "RP"]);
      const vals = { U: Uv, I: Iv, R: Rv, P: Math.round(Pv * 1e6) / 1e6 };
      const g = { U: null, I: null, R: null, P: null };
      for (const k of pair) g[k] = vals[k];
      const r = ohm(g);
      const ask = ["U", "I", "R", "P"].filter((k) => !pair.includes(k));
      const dig = { U: 2, I: 4, R: 2, P: 3 };
      const trapsFor = (k) => {
        const t = [];
        if (k === "I" && g.U != null && g.R != null) t.push({ v: g.U * g.R, msg: "I = U ÷ R (nicht U × R)." }, { v: g.R / g.U, msg: "I = U ÷ R – du hast den Bruch umgedreht." });
        if (k === "R" && g.U != null && g.I != null) t.push({ v: g.I / g.U, msg: "R = U ÷ I – du hast den Bruch umgedreht." });
        if (k === "U" && g.R != null && g.I != null) t.push({ v: g.R / g.I, msg: "U = R × I (nicht R ÷ I)." });
        if (k === "P" && g.R != null && g.I != null) t.push({ v: g.I * g.R, msg: "Das ist U = R × I – für P noch mit I multiplizieren (P = I² × R)." });
        return t;
      };
      return {
        q: `<p>An einem ohmschen Verbraucher sind gegeben: ${pair.split("").map((k) => `<strong>${k} = ${nf(g[k], 4)} ${OHM_NAMES[k][1]}</strong>`).join(" und ")}. Berechne ${ask.map((k) => OHM_NAMES[k][0]).join(" und ")}.</p>`,
        fields: ask.map((k) => fld(OHM_NAMES[k][0], OHM_NAMES[k][1], r[k], dig[k], { traps: trapsFor(k) })),
        steps: r.steps,
      };
    }
    if (type === "widerstand") {
      const E = [10, 22, 33, 47, 68, 100, 150, 220, 330, 470, 680, 1000];
      if (lvl === 1) {
        const list = Array.from({ length: rand(2, 3) }, () => pick(E));
        const r = resistors(list, "reihe");
        return {
          q: `<p>Die Widerstände ${list.map((x, i) => `<strong>R${sub(i + 1)} = ${nf(x)} Ω</strong>`).join(", ")} sind in <strong>Reihe</strong> geschaltet. Wie groß ist der Gesamtwiderstand?</p>`,
          fields: [fld("Gesamtwiderstand", "Ω", r.Rg, 2, { traps: [{ v: resistors(list, "parallel").Rg, msg: "Das wäre die Parallelschaltung – in Reihe werden die Widerstände addiert." }] })],
          steps: r.steps,
        };
      }
      const U = pick([5, 9, 12, 24]);
      if (lvl === 2) {
        const list = Array.from({ length: rand(2, 3) }, () => pick(E));
        const r = resistors(list, "parallel", U);
        return {
          q: `<p>Die Widerstände ${list.map((x, i) => `<strong>R${sub(i + 1)} = ${nf(x)} Ω</strong>`).join(", ")} sind <strong>parallel</strong> an <strong>U = ${U} V</strong> angeschlossen. Berechne den Gesamtwiderstand und den Gesamtstrom.</p>`,
          fields: [
            fld("Gesamtwiderstand", "Ω", r.Rg, 2, { traps: [{ v: sum(list), msg: "Das wäre die Reihenschaltung. Parallel: 1/R_ges = 1/R₁ + 1/R₂ + …" }, { v: sum(list.map((x) => 1 / x)), msg: "Das ist 1/R_ges – du musst noch den Kehrwert bilden." }] }),
            fld("Gesamtstrom", "mA", r.I * 1000, 2, { traps: [{ v: r.I, msg: "Das ist der Wert in Ampere – gefragt sind Milliampere (× 1.000)." }] }),
          ],
          steps: r.steps.filter((s) => !s.startsWith("Teilströme") && !s.startsWith("Gesamtleistung")),
        };
      }
      const [R1, R2, R3] = [pick(E), pick(E), pick(E)];
      const p = resistors([R2, R3], "parallel");
      const Rg = R1 + p.Rg, I = U / Rg, U1 = I * R1;
      return {
        q: `<p>Schaltung: <strong>R₁ = ${R1} Ω</strong> liegt in Reihe zu einer Parallelschaltung aus <strong>R₂ = ${R2} Ω</strong> und <strong>R₃ = ${R3} Ω</strong>. Die Gesamtspannung beträgt <strong>U = ${U} V</strong>.</p><p>Berechne Gesamtwiderstand, Gesamtstrom und die Spannung an R₁.</p>`,
        fields: [
          fld("Gesamtwiderstand", "Ω", Rg, 2, { traps: [{ v: R1 + R2 + R3, msg: "R₂ und R₃ sind parallel – die darfst du nicht einfach addieren." }] }),
          fld("Gesamtstrom", "mA", I * 1000, 2, { traps: [{ v: I, msg: "Das ist der Wert in Ampere – gefragt sind Milliampere (× 1.000)." }] }),
          fld("Spannung an R₁", "V", U1, 2, { traps: [{ v: U - U1, msg: "Das ist die Spannung an der Parallelschaltung (R₂ ∥ R₃)." }] }),
        ],
        steps: [
          `R₂ ∥ R₃ = (R₂ × R₃) ÷ (R₂ + R₃) = (${R2} × ${R3}) ÷ (${R2} + ${R3}) = ${nf(p.Rg, 4)} Ω`,
          `R_ges = R₁ + R₂₃ = ${R1} Ω + ${nf(p.Rg, 4)} Ω = ${nf(Rg, 4)} Ω`,
          `I = U ÷ R_ges = ${U} V ÷ ${nf(Rg, 4)} Ω = ${nf(I, 6)} A = ${nf(I * 1000, 3)} mA`,
          `U₁ = I × R₁ = ${nf(I, 6)} A × ${R1} Ω = ${nf(U1, 4)} V (an R₂ ∥ R₃ liegen ${nf(U - U1, 4)} V)`,
        ],
      };
    }
    // type === "daempfung"
    if (lvl === 1) {
      const P1 = pick([1, 2, 5, 10, 20, 50, 100]), ratio = pick([2, 4, 5, 10, 20, 100, 1000]), P2 = P1 / ratio;
      const r = dbRatio(P1, P2, "leistung");
      return {
        q: `<p>Am Anfang einer Leitung wird eine Leistung von <strong>P₁ = ${nf(P1)} mW</strong> eingespeist, am Ende kommen <strong>P₂ = ${nf(P2, 4)} mW</strong> an. Wie groß ist das Dämpfungsmaß a?</p>`,
        fields: [fld("Dämpfungsmaß a", "dB", r.a, 2, { tol: { rel: 0.005, abs: 0.011 }, traps: [{ v: 20 * lg(ratio), msg: "20 × lg gilt für Spannungen – bei Leistungen rechnest du mit 10 × lg." }, { v: -r.a, msg: "Vorzeichen: Dämpfung ist positiv, wenn P₂ kleiner als P₁ ist (a = 10 × lg(P₁ ÷ P₂))." }, { v: lg(ratio), msg: "Den Faktor 10 vor dem Logarithmus nicht vergessen (Bel → Dezibel)." }] })],
        steps: r.steps.slice(0, 2),
      };
    }
    if (lvl === 2) {
      if (rand(0, 1)) {
        const P1 = pick([1, 2, 5, 10, 50]), a = pick([3, 6, 10, 13, 20, 30]);
        const r = powerAfter(P1, a);
        return {
          q: `<p>Ein Signal mit <strong>P₁ = ${P1} W</strong> durchläuft eine Strecke mit einem Dämpfungsmaß von <strong>a = ${a} dB</strong>. Welche Leistung P₂ kommt am Ende an?</p>`,
          fields: [fld("Ausgangsleistung P₂", "W", r.P2, 4, { tol: { rel: 0.01, abs: 0.00006 }, traps: [{ v: P1 / 10 ** (a / 20), msg: "Bei Leistung: 10^(a ÷ 10), nicht 10^(a ÷ 20)." }, { v: P1 * r.factor, msg: "Dämpfung verringert die Leistung: P₂ = P₁ ÷ 10^(a ÷ 10)." }] })],
          steps: r.steps,
        };
      }
      const U1 = pick([1, 2, 5, 10]), f = pick([2, 4, 10, 100]), U2 = U1 / f;
      const r = dbRatio(U1, U2, "spannung");
      return {
        q: `<p>Am Eingang eines Kabels liegen <strong>U₁ = ${nf(U1)} V</strong>, am Ausgang werden <strong>U₂ = ${nf(U2, 4)} V</strong> gemessen (gleiche Impedanz). Wie groß ist das Dämpfungsmaß?</p>`,
        fields: [fld("Dämpfungsmaß a", "dB", r.a, 2, { tol: { rel: 0.005, abs: 0.011 }, traps: [{ v: 10 * lg(f), msg: "Bei Spannungen gilt a = 20 × lg(U₁ ÷ U₂) – nicht 10 × lg." }] })],
        steps: r.steps.slice(0, 2),
      };
    }
    const fiber = pick([["Singlemode", [0.25, 0.3, 0.35, 0.4], [10, 40]], ["Multimode", [2.5, 3, 3.5], [1, 4]]]);
    const len = rand(fiber[2][0], fiber[2][1]), perKm = pick(fiber[1]);
    const connDb = pick([0.3, 0.5, 0.75]), spl = rand(0, 6), splDb = pick([0.1, 0.2, 0.3]);
    const tx = pick([-5, -3, 0, 2]), rxMin = pick([-15, -18, -20, -24, -28]);
    const r = link({ len, perKm, conn: 2, connDb, spl, splDb, tx, rxMin });
    return {
      q: `<p>Eine ${fiber[0]}-LWL-Strecke ist <strong>${len} km</strong> lang (Faserdämpfung <strong>${nf(perKm)} dB/km</strong>). Sie hat <strong>2 Steckverbindungen</strong> à ${nf(connDb)} dB und <strong>${spl} Spleiße</strong> à ${nf(splDb)} dB. Der Sender speist <strong>${tx} dBm</strong> ein, der Empfänger benötigt mindestens <strong>${rxMin} dBm</strong>.</p><p>Berechne die Gesamtdämpfung und den Empfangspegel. Funktioniert die Strecke?</p>`,
      fields: [
        fld("Gesamtdämpfung", "dB", r.a, 2, { tol: { rel: 0.005, abs: 0.011 }, traps: [{ v: r.aFiber, msg: "Stecker und Spleiße gehören auch zur Gesamtdämpfung." }] }),
        fld("Empfangspegel", "dBm", r.rx, 2, { tol: { rel: 0, abs: 0.011 }, traps: [{ v: tx + r.a, msg: "Dämpfung wird vom Sendepegel abgezogen, nicht addiert." }] }),
        choice("Reicht der Pegel?", ["ja", "nein"], r.margin >= 0 ? "ja" : "nein"),
      ],
      steps: r.steps,
    };
  }

  /* ---- Verfügbarkeit ---- */
  const COMP = ["Router", "Firewall", "Core-Switch", "Server", "Storage", "USV", "Internetanschluss", "Datenbank", "Access-Switch", "Hypervisor"];
  function genAvail(type, lvl, R) {
    const { rand, pick, shuffle } = R;
    const names = (k) => (shuffle ? shuffle(COMP) : COMP.slice()).slice(0, k);
    if (type === "a2d") {
      if (lvl <= 2) {
        const A = pick(lvl === 1 ? [99, 99.5, 99.9] : [98.5, 99.5, 99.7, 99.8, 99.9, 99.95, 99.99]);
        const hY = downtime(A, 8760), mM = downtime(A, 720) * 60;
        const fields = [fld("Ausfallzeit pro Jahr", "h", hY, 2, { tol: { rel: 0.005, abs: 0.006 }, traps: [{ v: (A / 100) * 8760, msg: "Das ist die Betriebszeit – die erlaubte Ausfallzeit ist der Rest (1 − A)." }, { v: hY * 60, msg: "Das sind Minuten – gefragt sind Stunden." }] })];
        const steps = [`Nichtverfügbarkeit: 100 % − ${nf(A, 3)} % = ${nf(100 - A, 4)} % = ${nf(1 - A / 100, 6)}`, `Jahr: 365 × 24 h = 8.760 h`, `Ausfallzeit pro Jahr: 8.760 h × ${nf(1 - A / 100, 6)} = ${nf(hY, 4)} h (≈ ${dur(hY * 3600)})`];
        if (lvl === 2) { fields.push(fld("Ausfallzeit pro Monat", "min", mM, 1, { tol: { rel: 0.005, abs: 0.06 }, traps: [{ v: mM / 60, msg: "Das sind Stunden – gefragt sind Minuten." }] })); steps.push(`Monat: 30 × 24 h = 720 h → 720 h × ${nf(1 - A / 100, 6)} = ${nf(mM / 60, 4)} h = ${nf(mM, 2)} min`); }
        return { q: `<p>In einem SLA ist eine Verfügbarkeit von <strong>${nf(A, 3)} %</strong> vereinbart (Betrieb rund um die Uhr, 24/7). Wie lange darf das System höchstens ausfallen?</p><p class="muted small">Rechne mit Jahr = 365 Tage${lvl === 2 ? " und Monat = 30 Tage" : ""}.</p>`, fields, steps };
      }
      const [von, bis] = pick([[7, 19], [8, 18], [8, 17], [6, 22]]), days = pick([5, 6]), hw = (bis - von) * days;
      const A = pick([98, 98.5, 99, 99.5]);
      const dw = downtime(A, hw) * 60, dy = downtime(A, hw * 52);
      return {
        q: `<p>Ein Dienstleister garantiert <strong>${nf(A)} % Verfügbarkeit</strong> innerhalb der Servicezeit <strong>${days === 5 ? "Mo–Fr" : "Mo–Sa"}, ${von}–${bis} Uhr</strong>. Wie viele Minuten Ausfall pro Woche und wie viele Stunden Ausfall pro Jahr (52 Wochen) sind in der Servicezeit maximal erlaubt?</p>`,
        fields: [fld("Ausfallzeit pro Woche", "min", dw, 1, { tol: { rel: 0.005, abs: 0.06 }, traps: [{ v: downtime(A, 168) * 60, msg: "Nur die vereinbarte Servicezeit zählt – nicht 7 × 24 h." }] }), fld("Ausfallzeit pro Jahr", "h", dy, 2, { traps: [{ v: downtime(A, 8760), msg: "Nur die Servicezeit zählt (52 Wochen × Servicestunden), nicht 8.760 h." }] })],
        steps: [`Servicezeit pro Woche: ${days} Tage × ${bis - von} h = ${hw} h`, `Erlaubte Ausfallzeit pro Woche: ${hw} h × (1 − ${dec(A)}) = ${nf(dw / 60, 4)} h = ${nf(dw, 2)} min`, `Pro Jahr: ${hw} h × 52 = ${nf(hw * 52)} h → ${nf(hw * 52)} h × ${nf(1 - A / 100, 4)} = ${nf(dy, 3)} h`],
      };
    }
    if (type === "d2a") {
      if (lvl === 1) {
        const down = pick([4, 8, 12, 24, 36, 48, 72]);
        const A = fromDowntime(down, 8760);
        return {
          q: `<p>Ein Webserver (Betrieb 24/7) war im letzten Jahr (365 Tage) insgesamt <strong>${down} Stunden</strong> nicht erreichbar. Welche Verfügbarkeit hatte er?</p>`,
          fields: [fld("Verfügbarkeit", "%", A, 3, { tol: PCT(3), traps: [{ v: 100 - A, msg: "Das ist die Nichtverfügbarkeit – gefragt ist die Verfügbarkeit." }] })],
          steps: [`Gesamtzeit: 365 × 24 h = 8.760 h`, `Betriebszeit: 8.760 h − ${down} h = ${nf(8760 - down)} h`, `A = Betriebszeit ÷ Gesamtzeit = ${nf(8760 - down)} ÷ 8.760 = ${nf(A / 100, 6)} → ${nf(A, 4)} %`],
        };
      }
      let total, downMin, periodTxt, pre;
      if (lvl === 2) { total = 720; const hh = rand(0, 6), mm = pick([0, 12, 24, 30, 45]); downMin = hh * 60 + mm || 30; periodTxt = "im letzten Monat (30 Tage, Betrieb 24/7)"; pre = [`Gesamtzeit: 30 × 24 h = 720 h = 43.200 min`]; }
      else { const [von, bis] = pick([[8, 18], [7, 19], [8, 17]]); total = (bis - von) * 5; downMin = rand(3, 40) * 5; periodTxt = `in einer Woche (Servicezeit Mo–Fr, ${von}–${bis} Uhr)`; pre = [`Servicezeit: 5 × ${bis - von} h = ${total} h = ${nf(total * 60)} min`]; }
      const A = fromDowntime(downMin / 60, total);
      const sla = pick(lvl === 2 ? [99, 99.5, 99.9] : [98, 99, 99.5]);
      return {
        q: `<p>Ein Dienst war ${periodTxt} insgesamt <strong>${dur(downMin * 60)}</strong> ausgefallen. Vereinbart sind <strong>${nf(sla)} %</strong> Verfügbarkeit.</p><p>Welche Verfügbarkeit wurde erreicht, und wurde das SLA eingehalten?</p>`,
        fields: [fld("Erreichte Verfügbarkeit", "%", A, 3, { tol: PCT(3), traps: [{ v: 100 - A, msg: "Das ist die Nichtverfügbarkeit – gefragt ist die Verfügbarkeit." }] }), choice("SLA eingehalten?", ["ja", "nein"], A >= sla - 1e-9 ? "ja" : "nein")],
        steps: [...pre, `Ausfallzeit: ${dur(downMin * 60)} = ${nf(downMin)} min`, `A = (Gesamtzeit − Ausfallzeit) ÷ Gesamtzeit = (${nf(total * 60)} − ${nf(downMin)}) ÷ ${nf(total * 60)} = ${nf(A / 100, 6)} → ${nf(A, 4)} %`, `Vergleich: ${nf(A, 4)} % ${A >= sla - 1e-9 ? "≥" : "<"} ${nf(sla)} % → SLA ${A >= sla - 1e-9 ? "eingehalten" : "verletzt"}`],
      };
    }
    if (type === "reihe") {
      const k = lvl === 1 ? 2 : lvl === 2 ? 3 : 4;
      const nm = names(k), As = nm.map(() => pick([97, 98, 98.5, 99, 99.5, 99.8, 99.9, 99.95, 99.99]));
      const r = serialSteps(As, "Reihenschaltung");
      const fields = [fld("Gesamtverfügbarkeit", "%", r.value, 3, { tol: PCT(3), traps: [{ v: Math.min(...As), msg: "Die Reihe ist schlechter als ihr schwächstes Glied – du musst multiplizieren." }, { v: sum(As) / k, msg: "Nicht den Mittelwert bilden – bei Reihe werden die Verfügbarkeiten multipliziert." }, { v: parallel(As), msg: "Das wäre eine Parallelschaltung (Redundanz)." }] })];
      const steps = [`Prozent in Dezimalzahlen: ${nm.map((n, i) => `${n} ${nf(As[i])} % = ${dec(As[i])}`).join(" · ")}`, r.text];
      if (lvl >= 3) { const d = downtime(r.value, 8760); fields.push(fld("Ausfallzeit pro Jahr", "h", d, 2, { tol: { rel: 0.01, abs: 0.006 } })); steps.push(`Ausfallzeit/Jahr: 8.760 h × (1 − ${nf(r.value / 100, 8)}) = ${nf(d, 3)} h`); }
      return {
        q: `<p>Ein Dienst ist nur erreichbar, wenn alle folgenden Komponenten laufen (<strong>Reihenschaltung</strong>): ${nm.map((n, i) => `${n} <strong>${nf(As[i])} %</strong>`).join(", ")}.</p><p>Wie hoch ist die Gesamtverfügbarkeit${lvl >= 3 ? ", und wie viele Stunden Ausfall pro Jahr (8.760 h) sind zu erwarten" : ""}?</p>`,
        fields, steps,
      };
    }
    if (type === "parallel") {
      const k = lvl >= 3 ? 3 : 2;
      const As = lvl === 1 ? Array(k).fill(pick([90, 95, 97, 98, 99])) : Array.from({ length: k }, () => pick([90, 95, 96, 97, 98, 99]));
      const r = parallelSteps(As, "Parallelschaltung");
      const what = pick(["Server in einem Cluster", "Internetanschlüsse verschiedener Provider", "Netzteile"]);
      return {
        q: `<p>${k} redundante ${what} arbeiten <strong>parallel</strong> – der Dienst läuft, solange mindestens einer funktioniert. Verfügbarkeiten: ${As.map((a) => `<strong>${nf(a)} %</strong>`).join(", ")}.</p><p>Wie hoch ist die Gesamtverfügbarkeit?</p>`,
        fields: [fld("Gesamtverfügbarkeit", "%", r.value, 4, { tol: PCT(4), traps: [{ v: serial(As), msg: "Das wäre die Reihenschaltung. Parallel: A = 1 − (1 − A₁) × (1 − A₂) × …" }, { v: Math.max(...As), msg: "Redundanz verbessert die Verfügbarkeit über die der besten Komponente hinaus." }] })],
        steps: [`Ausfallwahrscheinlichkeiten: ${As.map((a) => `1 − ${dec(a)} = ${nf(1 - a / 100, 6)}`).join(" · ")}`, r.text, "Alle müssten gleichzeitig ausfallen – deshalb werden die Ausfallwahrscheinlichkeiten multipliziert."],
      };
    }
    if (type === "gemischt") {
      if (lvl >= 3 && rand(0, 1)) {
        const aSw = pick([99.5, 99.8, 99.9]), aSrv = pick([98, 99, 99.5]);
        const path = serial([aSw, aSrv]), total = parallel([path, path]);
        return {
          q: `<p>Ein Dienst wird über <strong>zwei komplett getrennte Pfade</strong> bereitgestellt. Jeder Pfad besteht aus einem Switch (<strong>${nf(aSw)} %</strong>) und einem Server (<strong>${nf(aSrv)} %</strong>) in Reihe. Der Dienst läuft, solange ein Pfad funktioniert.</p><p>Wie hoch ist die Gesamtverfügbarkeit?</p>`,
          fields: [fld("Gesamtverfügbarkeit", "%", total, 4, { tol: PCT(4), traps: [{ v: path, msg: "Das ist nur ein Pfad – die beiden Pfade sind noch parallel zu verknüpfen." }, { v: serial([parallel([aSw, aSw]), parallel([aSrv, aSrv])]), msg: "Das wäre „Switches parallel, dann Server parallel“ (Querverbindungen) – hier sind die Pfade aber komplett getrennt." }] })],
          steps: [serialSteps([aSw, aSrv], "Ein Pfad (Reihe)").text, parallelSteps([path, path], "Zwei Pfade parallel").text],
        };
      }
      const nm = names(3);
      const a1 = pick([99.5, 99.8, 99.9, 99.95]), a2 = pick([95, 97, 98, 99]), a3 = pick([99, 99.5, 99.9]);
      const k = lvl === 1 ? 2 : pick([2, 3]);
      const p = parallelSteps(Array(k).fill(a2), `${k}× ${nm[1]} parallel`);
      const s = serialSteps([a1, p.value, a3], "Gesamt (Reihe)");
      return {
        q: `<p>Ein System besteht aus: <strong>${nm[0]}</strong> (${nf(a1)} %) → <strong>${k} redundante ${nm[1]}</strong> parallel (je ${nf(a2)} %) → <strong>${nm[2]}</strong> (${nf(a3)} %). Die drei Stufen liegen in Reihe.</p><p>Berechne die Verfügbarkeit der redundanten Stufe und die Gesamtverfügbarkeit.</p>`,
        fields: [
          fld(`Verfügbarkeit ${k}× ${nm[1]}`, "%", p.value, 4, { tol: PCT(4), traps: [{ v: serial(Array(k).fill(a2)), msg: "Die redundanten Komponenten sind parallel, nicht in Reihe." }] }),
          fld("Gesamtverfügbarkeit", "%", s.value, 3, { tol: PCT(3), traps: [{ v: serial([a1, a2, a3]), msg: "Die Redundanz fehlt – die mittlere Stufe erst parallel zusammenfassen." }] }),
        ],
        steps: [p.text, s.text],
      };
    }
    // type === "mtbf"
    if (lvl === 1) {
      const mtbf = pick([500, 1000, 2000, 5000, 8760, 10000]), mttr = pick([2, 4, 8, 12, 24]);
      const r = mtbfCalc({ mtbf, mttr });
      return {
        q: `<p>Für ein System sind bekannt: <strong>MTBF = ${nf(mtbf)} h</strong> (mittlere Betriebszeit zwischen Ausfällen) und <strong>MTTR = ${mttr} h</strong> (mittlere Reparaturzeit). Wie hoch ist die Verfügbarkeit?</p>`,
        fields: [fld("Verfügbarkeit", "%", r.a, 3, { tol: PCT(3), traps: [{ v: (1 - mttr / mtbf) * 100, msg: "Fast – aber A = MTBF ÷ (MTBF + MTTR): Die Reparaturzeit gehört in den Nenner." }] })],
        steps: r.steps.slice(0, 1),
      };
    }
    if (lvl === 2) {
      const A = pick([99, 99.5, 99.9]), mtbf = pick([1000, 2000, 4380, 8760]);
      const r = mtbfCalc({ mtbf, a: A });
      return {
        q: `<p>Ein SLA verlangt <strong>${nf(A)} %</strong> Verfügbarkeit. Die Hardware hat eine <strong>MTBF von ${nf(mtbf)} h</strong>. Wie lange darf eine Reparatur (MTTR) im Mittel höchstens dauern?</p>`,
        fields: [fld("maximale MTTR", "h", r.mttr, 2, { tol: { rel: 0.002, abs: 0.006 }, traps: [{ v: mtbf * (1 - A / 100), msg: "Fast – genau ist MTTR = MTBF × (1 − A) ÷ A." }] })],
        steps: r.steps.slice(0, 1),
      };
    }
    const k = rand(2, 6), rep = rand(2, 12) * k, up = 8760 - rep;
    const mtbf = up / k, mttr = rep / k, A = availFromMtbf(mtbf, mttr);
    return {
      q: `<p>Ein Server (Betrieb 24/7) ist im letzten Jahr (8.760 h) <strong>${k}-mal ausgefallen</strong>. Die Reparaturen dauerten zusammen <strong>${rep} Stunden</strong>.</p><p>Berechne MTBF, MTTR und die Verfügbarkeit.</p>`,
      fields: [
        fld("MTBF", "h", mtbf, 1, { traps: [{ v: 8760 / k, msg: "Die Reparaturzeit ist keine Betriebszeit – erst abziehen, dann durch die Anzahl der Ausfälle teilen." }] }),
        fld("MTTR", "h", mttr, 2),
        fld("Verfügbarkeit", "%", A, 3, { tol: PCT(3) }),
      ],
      steps: [`Betriebszeit: 8.760 h − ${rep} h = ${nf(up)} h`, `MTBF = Betriebszeit ÷ Anzahl Ausfälle = ${nf(up)} h ÷ ${k} = ${nf(mtbf, 3)} h`, `MTTR = Reparaturzeit ÷ Anzahl Ausfälle = ${rep} h ÷ ${k} = ${nf(mttr, 3)} h`, `A = MTBF ÷ (MTBF + MTTR) = ${nf(mtbf, 3)} ÷ ${nf(mtbf + mttr, 3)} = ${nf(A / 100, 6)} → ${nf(A, 4)} % (= ${nf(up)} h ÷ 8.760 h)`],
    };
  }

  const CALC = {
    CalcError, nf, nfa, pf, parseNum, parseAlt, parseList, close, dur, num, sup, sub,
    data: { DU, DUM, counterpart, convert, convSteps, imageSize, audioSize, videoSize, sizeRows, transferTime, requiredRate },
    raid: { RAID, RAID_LEVELS, raidCalc, raidDisks, raidData, raidTol },
    energy: { energyYear, amortization, ups, upsRuntime, upsBattery, ohm, resistors, dbRatio, powerAfter, dbm, mwFromDbm, link, UPS_SIZES },
    avail: { downtime, fromDowntime, serial, parallel, availSystem, availFromMtbf, maxMttr, minMtbf, mtbfCalc, PERIODS },
  };
  const GEN = { data: genData, raid: genRaid, energy: genEnergy, avail: genAvail, fld, judge, ansText };
  if (typeof module === "object" && module && module.exports) module.exports = { CALC, GEN };

  /* =====================================================================
     3) UI-Bausteine
     ===================================================================== */
  const L = G.LEARN;
  if (!L || typeof L.tool !== "function") return;

  let uidN = 0;
  const uid = (p) => `${p}${++uidN}${Math.random().toString(36).slice(2, 6)}`;
  const CALLOUT_ICONS = { merke: "bookmark-star", tipp: "lightbulb", achtung: "exclamation-triangle", beispiel: "pencil-square", formel: "calculator", pruefung: "mortarboard" };
  const callout = (kind, html) => `<div class="callout ${kind}"><i class="bi bi-${CALLOUT_ICONS[kind] || "info-circle"} callout-ico" aria-hidden="true"></i>${html}</div>`;
  const note = (kind, html) => `<div class="prose mt-3">${callout(kind, html)}</div>`;
  const warnBox = (msg) => note("achtung", `<strong>Eingabe prüfen:</strong> ${esc(msg)}`);
  const kv = (rows) => `<dl class="kv mb-0">${rows.filter(Boolean).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}</dl>`;
  const resultBox = (rows, title = "Ergebnis") => `<div class="result-box mt-3"><div class="small-caps mb-2">${title}</div>${kv(rows)}</div>`;
  const stepsBlock = (steps, title = "Rechenweg") => `<div class="prose mt-3"><div class="small-caps mb-1">${title}</div><ol class="mb-0">${steps.filter(Boolean).map((s) => `<li>${s}</li>`).join("")}</ol></div>`;
  const tableHtml = (head, rows) => `<div class="table-wrap"><table><thead><tr>${head.map((x) => `<th>${x}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  function seg(name, items, sel, label) {
    return `<div class="seg" role="radiogroup"${label ? ` aria-label="${esc(label)}"` : ""}>${items.map(([v, l]) => `<input type="radio" name="${name}" id="${name}-${v}" value="${v}"${String(v) === String(sel) ? " checked" : ""}><label for="${name}-${v}">${l}</label>`).join("")}</div>`;
  }
  function onEnter(el, fn) {
    el.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" || e.isComposing) return;
      if (!e.target.matches("input:not([type=radio]):not([type=checkbox]), select")) return;
      e.preventDefault(); fn();
    });
  }
  function safe(fn) {
    try { return fn(); }
    catch (e) {
      if (e instanceof CalcError) return warnBox(e.message);
      console.error(e);
      return warnBox("Das konnte nicht berechnet werden – bitte prüfe deine Eingaben.");
    }
  }

  /** Übungsmodus: Zufallsaufgabe → Eingaben → Prüfen → Rückmeldung je Feld + Rechenweg. */
  function practice(host, h, cfg) {
    const P = uid(cfg.key);
    const R = { rand: h.rand, pick: h.pick, shuffle: h.shuffle };
    const st = { ok: 0, tot: 0, task: null, counted: false, level: 2, type: "mix", last: "" };
    host.innerHTML = `
      <div class="d-flex flex-wrap gap-2 align-items-center mb-3">
        ${cfg.types.length > 1 ? `<select class="form-select form-select-sm w-auto mw-100" data-type aria-label="Aufgabentyp"><option value="mix">Alle Aufgabentypen gemischt</option>${cfg.types.map(([v, l]) => `<option value="${v}">${esc(l)}</option>`).join("")}</select>` : ""}
        ${seg(P + "l", [["1", "Leicht"], ["2", "Mittel"], ["3", "Prüfung"]], "2", "Schwierigkeit")}
        <span class="ms-auto small muted" data-score aria-live="polite">Noch keine Aufgabe geprüft</span>
      </div>
      <div data-task></div>
      <p class="small muted mt-3 mb-0">${h.icon("keyboard")} Enter im Eingabefeld = Prüfen · Zahlen mit Komma oder Punkt, ohne Einheit.</p>`;
    const taskEl = host.querySelector("[data-task]");
    const scoreEl = host.querySelector("[data-score]");
    const score = () => { scoreEl.textContent = `${st.ok} von ${st.tot} richtig${st.tot ? ` (${Math.round((st.ok * 100) / st.tot)} %)` : ""}`; };
    const fieldHtml = (f, i, n) => {
      const id = `${P}f${i}`;
      const lab = `${f.label}${f.unit ? ` <span class="muted fw-normal">in ${esc(f.unit)}</span>` : ""}`;
      const ctl = f.choices
        ? `<select class="form-select" id="${id}" data-i="${i}"><option value="">– bitte wählen –</option>${f.choices.map((c) => `<option value="${esc(c)}">${esc(c)}</option>`).join("")}</select>`
        : `<input class="form-control mono" id="${id}" data-i="${i}" type="text" inputmode="decimal" autocomplete="off" spellcheck="false" placeholder="${esc(f.ph || (f.d === 0 ? "gerundet auf ganze Zahl" : `auf ${f.d} Nachkommastellen`))}">`;
      return `<div class="col-12 ${n > 1 ? "col-sm-6" : "col-sm-8 col-md-6"}${n > 2 ? " col-lg-4" : ""}"><label class="form-label small fw-semi mb-1" for="${id}">${lab}</label>${ctl}<div class="valid-feedback"></div><div class="invalid-feedback"></div><div class="form-text" data-sol hidden></div></div>`;
    };
    const stepsHtml = (t) => `<div class="small-caps mt-2 mb-1">Rechenweg</div><ol class="mb-0 ps-3">${t.steps.filter(Boolean).map((s) => `<li>${s}</li>`).join("")}</ol>`;
    function show(t) {
      st.task = t; st.counted = false;
      taskEl.innerHTML = `
        <div class="small-caps mb-1">Aufgabe</div>
        <div class="prose mb-3">${t.q}</div>
        <div class="row g-2">${t.fields.map((f, i) => fieldHtml(f, i, t.fields.length)).join("")}</div>
        <div class="d-flex flex-wrap gap-2 mt-3">
          <button class="btn btn-accent" type="button" data-act="check">${h.icon("check2-circle")} Prüfen</button>
          <button class="btn btn-soft" type="button" data-act="new">${h.icon("arrow-repeat")} Neue Aufgabe</button>
          <button class="btn btn-ghost" type="button" data-act="solve">${h.icon("eye")} Lösung zeigen</button>
        </div>
        <div data-fb aria-live="polite"></div>`;
    }
    function newTask(focus) {
      let t = null, tries = 0;
      while (tries++ < 8) {
        const type = st.type === "mix" ? h.pick(cfg.mix(st.level)) : st.type;
        try { t = cfg.gen(type, st.level, R); } catch (e) { console.error(e); t = null; }
        if (t && t.q !== st.last) break;
      }
      if (!t) { taskEl.innerHTML = warnBox("Es konnte keine Aufgabe erzeugt werden – bitte lade die Seite neu."); return; }
      st.last = t.q; show(t);
      if (focus) { const el = taskEl.querySelector("[data-i]"); if (el) el.focus(); }
    }
    const parts = (i) => { const el = taskEl.querySelector(`[data-i="${i}"]`), box = el.parentElement; return { el, vf: box.querySelector(".valid-feedback"), ivf: box.querySelector(".invalid-feedback"), sol: box.querySelector("[data-sol]") }; };
    function check() {
      const t = st.task; if (!t) return;
      let all = true, bad = false;
      t.fields.forEach((f, i) => {
        const { el, vf, ivf, sol } = parts(i);
        el.classList.remove("is-valid", "is-invalid"); sol.hidden = true;
        const r = judge(f, el.value);
        if (r.empty) { bad = true; el.classList.add("is-invalid"); ivf.textContent = f.choices ? "Bitte eine Antwort auswählen." : "Bitte ausfüllen."; return; }
        if (r.invalid) { bad = true; el.classList.add("is-invalid"); ivf.textContent = "Bitte nur eine Zahl eingeben (Komma oder Punkt, ohne Einheit)."; return; }
        if (r.ok) {
          el.classList.add("is-valid");
          const more = !f.choices && nf(f.ans, f.d + 3) !== nf(f.ans, f.d) ? ` (genauer: ${nf(f.ans, f.d + 3)})` : "";
          vf.textContent = `Richtig!${more}`;
        } else {
          all = false; el.classList.add("is-invalid");
          ivf.innerHTML = `Richtig wäre: <strong>${esc(ansText(f))}</strong>${r.trap ? `<br>${esc(r.trap)}` : ""}`;
        }
      });
      const fb = taskEl.querySelector("[data-fb]");
      if (bad) { h.toast("Bitte alle Felder ausfüllen – nur Zahlen, Komma oder Punkt."); fb.innerHTML = ""; return; }
      if (!st.counted) { st.counted = true; st.tot++; if (all) st.ok++; score(); }
      fb.innerHTML = h.feedback(all, (all ? "" : `<p class="mb-2">Vergleiche deinen Weg mit der Musterlösung – typische Fallen stehen direkt unter den Feldern.</p>`) + stepsHtml(t));
    }
    function solve() {
      const t = st.task; if (!t) return;
      t.fields.forEach((f, i) => {
        const { el, sol } = parts(i);
        el.classList.remove("is-valid", "is-invalid");
        sol.hidden = false; sol.innerHTML = `Lösung: <strong>${esc(ansText(f))}</strong>`;
      });
      if (!st.counted) { st.counted = true; st.tot++; score(); }
      taskEl.querySelector("[data-fb]").innerHTML = `<div class="result-box mt-3">${stepsHtml(t)}</div>`;
    }
    host.addEventListener("click", (e) => {
      const b = e.target.closest("[data-act]"); if (!b || !host.contains(b)) return;
      if (b.dataset.act === "check") check();
      else if (b.dataset.act === "new") newTask(true);
      else if (b.dataset.act === "solve") solve();
    });
    host.addEventListener("change", (e) => {
      if (e.target.matches("[data-type]")) { st.type = e.target.value; newTask(false); }
      else if (e.target.name === P + "l") { st.level = Number(e.target.value); newTask(false); }
    });
    onEnter(taskEl, check);
    newTask(false);
  }

  /** Rechner-Formular mit Feldern, "Berechnen" und Ergebnisbereich. */
  function inputHtml(P, f) {
    const id = `${P}${f.k}`;
    const col = f.col || "col-12 col-sm-6 col-md-4";
    let ctl;
    if (f.type === "select") {
      const opt = ([v, l]) => `<option value="${esc(v)}"${String(v) === String(f.value) ? " selected" : ""}>${esc(l)}</option>`;
      ctl = `<select class="form-select" id="${id}" data-k="${f.k}">${f.groups ? f.groups.map(([gl, os]) => `<optgroup label="${esc(gl)}">${os.map(opt).join("")}</optgroup>`).join("") : f.options.map(opt).join("")}</select>`;
    } else {
      ctl = `<input class="form-control${f.type === "text" ? "" : " mono"}" id="${id}" data-k="${f.k}" type="text"${f.type === "text" ? "" : ' inputmode="decimal"'} autocomplete="off" spellcheck="false" value="${esc(f.value ?? "")}" placeholder="${esc(f.ph ?? (f.optional ? "optional" : ""))}">`;
    }
    return `<div class="${col}"><label class="form-label small fw-semi mb-1" for="${id}">${f.label}</label>${ctl}${f.help ? `<div class="form-text">${f.help}</div>` : ""}</div>`;
  }
  function calcForm(host, h, def) {
    const P = uid("c");
    host.innerHTML = `${def.intro ? `<p class="small muted mb-3">${def.intro}</p>` : ""}<div class="row g-2">${def.fields.map((f) => inputHtml(P, f)).join("")}</div>
      <div class="d-flex flex-wrap gap-2 mt-3"><button class="btn btn-accent" type="button" data-go>${h.icon("calculator")} Berechnen</button><button class="btn btn-ghost" type="button" data-reset>${h.icon("arrow-counterclockwise")} Beispielwerte</button></div>
      <div data-out aria-live="polite"></div>`;
    const out = host.querySelector("[data-out]");
    const get = (k) => host.querySelector(`[data-k="${k}"]`);
    const read = () => {
      const v = {};
      for (const f of def.fields) {
        const raw = get(f.k).value.trim();
        v[f.k] = f.type === "select" || f.type === "text" ? raw : raw === "" ? (f.optional ? null : NaN) : parseNum(raw);
      }
      return v;
    };
    const run = () => { out.innerHTML = safe(() => def.compute(read(), h)); };
    host.querySelector("[data-go]").addEventListener("click", run);
    host.querySelector("[data-reset]").addEventListener("click", () => { for (const f of def.fields) get(f.k).value = f.value ?? ""; run(); });
    host.addEventListener("change", (e) => { if (e.target.matches("select[data-k]")) run(); });
    onEnter(host, run);
    run();
  }
  /** Mehrere Rechner hinter einem Segment-Umschalter (lazy gemountet). */
  function multi(host, h, name, items) {
    const P = uid(name);
    host.innerHTML = `${items.length > 1 ? `<div class="mb-3">${seg(P, items.map((c) => [c.id, c.label]), items[0].id, "Rechner auswählen")}</div>` : ""}${items.map((c, i) => `<div data-sub="${c.id}"${i ? " hidden" : ""}></div>`).join("")}`;
    const done = {};
    const showSub = (id) => {
      for (const el of host.querySelectorAll(":scope > [data-sub]")) el.hidden = el.dataset.sub !== id;
      if (!done[id]) { done[id] = true; items.find((c) => c.id === id).mount(host.querySelector(`:scope > [data-sub="${id}"]`), h); }
    };
    for (const r of host.querySelectorAll(`input[name="${P}"]`)) r.addEventListener("change", () => showSub(r.value));
    showSub(items[0].id);
  }
  /** Grundgerüst eines Tools: Modus-Umschalter, Übungs- und Rechnerbereich, Erklärung. */
  function shell(root, h, { key, practice: pcfg, calcs, explain }) {
    const P = uid(key);
    root.innerHTML = `
      <div class="mb-3">${seg(P + "m", [["ueben", `${h.icon("pencil-square")} Üben`], ["rechner", `${h.icon("calculator")} Rechner`]], "ueben", "Modus")}</div>
      <section class="tile tile-pad" data-pane="ueben" aria-label="Üben"></section>
      <section class="tile tile-pad" data-pane="rechner" aria-label="Rechner" hidden></section>
      <section class="tile tile-pad prose mt-3" aria-label="Erklärung">${explain}</section>`;
    const panes = root.querySelectorAll("[data-pane]");
    for (const r of root.querySelectorAll(`input[name="${P}m"]`)) r.addEventListener("change", () => { for (const p of panes) p.hidden = p.dataset.pane !== r.value; });
    practice(root.querySelector('[data-pane="ueben"]'), h, pcfg);
    multi(root.querySelector('[data-pane="rechner"]'), h, key + "c", calcs);
  }

  /* =====================================================================
     4) Tools
     ===================================================================== */

  /* ---------- Tool 1: Speicher & Übertragung ---------- */
  const DATA_GROUPS = [
    ["Byte – dezimal (SI)", ["Byte", "kB", "MB", "GB", "TB"]],
    ["Byte – binär (IEC)", ["KiB", "MiB", "GiB", "TiB"]],
    ["Bit – dezimal (SI)", ["bit", "kbit", "Mbit", "Gbit", "Tbit"]],
    ["Bit – binär (IEC)", ["Kibit", "Mibit", "Gibit", "Tibit"]],
  ].map(([g, ids]) => [g, ids.map((id) => [id, DUM[id].f === 1 ? DUM[id].name : `${DUM[id].name} (${DUM[id].pow} ${DUM[id].byte ? "Byte" : "Bit"})`])]);
  function sizeBox(bits, extra = []) {
    const t = sizeRows(bits);
    const col = (title, rows) => `<div class="col-12 col-sm-6"><div class="small fw-semi mb-1">${title}</div><dl class="kv mb-0">${rows.map(([k, v]) => `<dt>${k}</dt><dd>${nfa(v)}</dd>`).join("")}</dl></div>`;
    return `<div class="result-box mt-3"><div class="small-caps mb-2">Ergebnis</div><div class="row g-3">${col("Dezimal (SI, 10³)", t.si)}${col("Binär (IEC, 2¹⁰)", t.iec)}</div>${extra.length ? `<hr class="my-2">${kv(extra)}` : ""}</div>`;
  }
  const bitByteNote = note("achtung", "<strong>Bit/Byte-Falle:</strong> Datenraten stehen in <strong>Bit</strong> pro Sekunde (kleines b), Dateigrößen in <strong>Byte</strong> (großes B). Vor dem Teilen die Datenmenge × 8 nehmen – und bei Datenraten immer dezimal rechnen (1 Mbit/s = 10⁶ bit/s).");
  const dataCalcs = [
    { id: "bild", label: "Bild", mount: (el, h) => calcForm(el, h, {
      fields: [
        { k: "w", label: "Breite in Pixel", value: "1920" }, { k: "hh", label: "Höhe in Pixel", value: "1080" },
        { k: "depth", label: "Farbtiefe in Bit", value: "24", help: "1 = s/w · 8 = 256 Farben · 24 = True Color · 32 = mit Alpha" },
        { k: "count", label: "Anzahl Bilder", value: "1", optional: true },
      ],
      compute: (v) => {
        const r = imageSize(v.w, v.hh, v.depth, v.count ?? 1);
        return sizeBox(r.bits, [["Pixel", nf(r.px)], ["Farben", v.depth <= 48 ? nf(2 ** v.depth) : "–"]]) + stepsBlock([...r.steps, unitStep(r.bytes, "MB"), unitStep(r.bytes, "MiB")]) + note("tipp", "Das ist die <strong>unkomprimierte</strong> Größe (z. B. BMP/RAW). JPEG oder PNG sind durch Kompression meist deutlich kleiner.");
      },
    }) },
    { id: "audio", label: "Audio", mount: (el, h) => calcForm(el, h, {
      fields: [
        { k: "rate", label: "Abtastrate in kHz", value: "44,1", help: "CD: 44,1 kHz · Video/DVD: 48 kHz" }, { k: "depth", label: "Bittiefe (Auflösung) in Bit", value: "16" },
        { k: "ch", label: "Kanäle", type: "select", value: "2", options: [["1", "1 – Mono"], ["2", "2 – Stereo"], ["6", "6 – 5.1-Surround"], ["8", "8 – 7.1-Surround"]] },
        { k: "min", label: "Dauer: Minuten", value: "3", optional: true }, { k: "sec", label: "Dauer: Sekunden", value: "30", optional: true },
      ],
      compute: (v) => {
        num(v.rate, "Abtastrate", { gt: 0 });
        const mi = v.min ?? 0, se = v.sec ?? 0;
        num(mi, "Minuten", { min: 0 }); num(se, "Sekunden", { min: 0 });
        const t = mi * 60 + se;
        if (!(t > 0)) fail("Bitte eine Dauer größer als 0 angeben.");
        const r = audioSize(v.rate * 1000, v.depth, Number(v.ch), t);
        return sizeBox(r.bits, [["Datenrate", `${nf(r.bps / 1000, 2)} kbit/s`]]) + stepsBlock([`Abtastrate: ${nf(v.rate, 3)} kHz = ${nf(v.rate * 1000)} Hz`, `Dauer: ${nf(mi)} min × 60 + ${nf(se)} s = ${nf(t)} s`, ...r.steps, unitStep(r.bytes, "MB"), unitStep(r.bytes, "MiB")]);
      },
    }) },
    { id: "video", label: "Video", mount: (el, h) => calcForm(el, h, {
      fields: [
        { k: "w", label: "Breite in Pixel", value: "1920" }, { k: "hh", label: "Höhe in Pixel", value: "1080" }, { k: "depth", label: "Farbtiefe in Bit", value: "24" },
        { k: "fps", label: "Bilder pro Sekunde", value: "25" }, { k: "min", label: "Dauer: Minuten", value: "1", optional: true }, { k: "sec", label: "Dauer: Sekunden", value: "0", optional: true },
      ],
      compute: (v) => {
        const mi = v.min ?? 0, se = v.sec ?? 0;
        num(mi, "Minuten", { min: 0 }); num(se, "Sekunden", { min: 0 });
        const t = mi * 60 + se;
        if (!(t > 0)) fail("Bitte eine Dauer größer als 0 angeben.");
        const r = videoSize(v.w, v.hh, v.depth, v.fps, t);
        return sizeBox(r.bits, [["Einzelbild", `${nf(r.frameBits / 8e6, 3)} MB`], ["Datenrate", `${nf(r.bps / 1e6, 2)} Mbit/s = ${nf(r.bps / 1e9, 3)} Gbit/s`]]) + stepsBlock([`Dauer: ${nf(mi)} min × 60 + ${nf(se)} s = ${nf(t)} s`, ...r.steps, unitStep(r.bytes, "GB"), unitStep(r.bytes, "GiB")]) + note("tipp", "Unkomprimiertes Video ist riesig – deshalb werden Videos praktisch immer mit Codecs wie H.264/H.265 komprimiert.");
      },
    }) },
    { id: "einheit", label: "Umrechnen", mount: (el, h) => calcForm(el, h, {
      fields: [
        { k: "val", label: "Wert", value: "500" },
        { k: "from", label: "von", type: "select", value: "GB", groups: DATA_GROUPS },
        { k: "to", label: "nach", type: "select", value: "GiB", groups: DATA_GROUPS },
      ],
      compute: (v) => {
        const r = convSteps(v.val, v.from, v.to);
        const a = DUM[v.from], b = DUM[v.to];
        let hint = "";
        if (a.sys && b.sys && a.sys !== b.sys) hint = note("achtung", `<strong>SI ↔ IEC:</strong> ${a.name} ist ${a.sys === "SI" ? "dezimal (Zehnerpotenzen)" : "binär (Zweierpotenzen)"}, ${b.name} ist ${b.sys === "SI" ? "dezimal" : "binär"}. Genau hier entstehen die „fehlenden“ Gigabyte bei neuen Festplatten.`);
        else if (a.byte !== b.byte) hint = note("merke", "1 Byte = 8 Bit: Byte → Bit × 8, Bit → Byte ÷ 8.");
        return `<div class="result-box mt-3"><div class="small-caps mb-1">Ergebnis</div><div class="fs-5 fw-semi mono">${nf(v.val, 6)} ${a.name} = ${nfa(r.value)} ${b.name}</div></div>` + stepsBlock(r.steps) + hint + sizeBox(v.val * a.bits);
      },
    }) },
    { id: "dauer", label: "Übertragungsdauer", mount: (el, h) => calcForm(el, h, {
      fields: [
        { k: "amount", label: "Datenmenge", value: "4,7" }, { k: "unit", label: "Einheit", type: "select", value: "GB", groups: DATA_GROUPS },
        { k: "rate", label: "Datenrate", value: "100" }, { k: "runit", label: "Einheit", type: "select", value: "Mbit/s", options: RU.map(([id]) => [id, id]) },
      ],
      compute: (v) => {
        const r = transferTime(v.amount, v.unit, v.rate, v.runit);
        return resultBox([["Datenmenge", `${nf(r.bits, 0)} Bit`], ["Datenrate", `${nf(r.bps, 0)} bit/s`], ["Dauer", `<strong>${nf(r.sec, 2)} s</strong>`], ["", `${nf(r.sec / 60, 3)} min`], ["", `${nf(r.sec / 3600, 4)} h`], ["gerundet", dur(r.sec)]]) + stepsBlock(r.steps) + (DUM[v.unit].byte && v.runit.includes("bit") ? bitByteNote : "");
      },
    }) },
    { id: "rate", label: "Datenrate", mount: (el, h) => calcForm(el, h, {
      fields: [
        { k: "amount", label: "Datenmenge", value: "300" }, { k: "unit", label: "Einheit", type: "select", value: "GB", groups: DATA_GROUPS },
        { k: "time", label: "verfügbare Zeit", value: "2" }, { k: "tunit", label: "Einheit", type: "select", value: "h", options: [["s", "Sekunden"], ["min", "Minuten"], ["h", "Stunden"], ["d", "Tage"]] },
      ],
      compute: (v) => {
        const r = requiredRate(v.amount, v.unit, v.time, v.tunit);
        return resultBox([["bit/s", nf(r.bps, 2)], ["kbit/s", nf(r.bps / 1e3, 3)], ["Mbit/s", `<strong>${nf(r.bps / 1e6, 3)}</strong>`], ["Gbit/s", nf(r.bps / 1e9, 4)], ["MB/s", nf(r.bps / 8e6, 3)]], "Mindestens nötige Datenrate") + stepsBlock(r.steps) + note("tipp", "In der Praxis kommt Protokoll-Overhead (TCP/IP, Ethernet) dazu – plane also etwas Reserve ein.");
      },
    }) },
  ];
  const dataExplain = `
    <h5>Formeln</h5>
    <div class="callout formel"><strong>Bild:</strong> Breite × Höhe × Farbtiefe (Bit) ÷ 8 = Byte<br><strong>Audio:</strong> Abtastrate (Hz) × Bittiefe × Kanäle × Dauer (s) ÷ 8 = Byte<br><strong>Video:</strong> Breite × Höhe × Farbtiefe × Bilder/s × Dauer (s) ÷ 8 = Byte<br><strong>Übertragungsdauer:</strong> t = Datenmenge (Bit) ÷ Datenrate (bit/s)<br><strong>Datenrate:</strong> r = Datenmenge (Bit) ÷ Zeit (s)</div>
    <h5>Dezimal (SI) oder binär (IEC)?</h5>
    <table><thead><tr><th>SI (dezimal)</th><th>Faktor</th><th>IEC (binär)</th><th>Faktor</th><th>Unterschied</th></tr></thead><tbody>
      <tr><td>kB – Kilobyte</td><td>10³ = 1.000</td><td>KiB – Kibibyte</td><td>2¹⁰ = 1.024</td><td>2,4 %</td></tr>
      <tr><td>MB – Megabyte</td><td>10⁶ = 1.000.000</td><td>MiB – Mebibyte</td><td>2²⁰ = 1.048.576</td><td>4,9 %</td></tr>
      <tr><td>GB – Gigabyte</td><td>10⁹</td><td>GiB – Gibibyte</td><td>2³⁰ = 1.073.741.824</td><td>7,4 %</td></tr>
      <tr><td>TB – Terabyte</td><td>10¹²</td><td>TiB – Tebibyte</td><td>2⁴⁰ ≈ 1,1 × 10¹²</td><td>10,0 %</td></tr>
    </tbody></table>
    <div class="callout merke"><strong>Merke:</strong> 1 Byte = 8 Bit. Kleines <strong>b</strong> = Bit, großes <strong>B</strong> = Byte. Datenraten (Mbit/s, Gbit/s) sind <strong>immer dezimal</strong>. Festplattenhersteller rechnen dezimal, Windows rechnet binär, schreibt aber „GB“ – deshalb zeigt Windows eine 1-TB-Platte mit etwa 931 „GB“ an.</div>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> In älteren Büchern und im Alltag steht oft „1 kB = 1.024 Byte“. Normgerecht ist 1 kB = 1.000 Byte und 1 KiB = 1.024 Byte. Halte dich an die Vorgabe der Aufgabe und schreib dazu, womit du rechnest.</div>
    <div class="callout beispiel"><strong>Beispiel:</strong> 4,7 GB über 100 Mbit/s: 4,7 × 10⁹ Byte × 8 = 37,6 × 10⁹ Bit ÷ 100 × 10⁶ bit/s = 376 s ≈ 6 min 16 s.</div>`;

  L.tool({
    id: "datenmengen", title: "Speicher & Übertragung", icon: "hdd", hue: 30,
    desc: "Speicherbedarf von Bildern, Audio und Video, Einheiten SI/IEC umrechnen, Übertragungsdauer und Datenrate berechnen.",
    exam: ["AP1", "AP2"], modules: ["lf02", "lf03"],
    render(root, h) {
      shell(root, h, {
        key: "dm",
        practice: {
          key: "dmp",
          types: [["bild", "Bild – Speicherbedarf"], ["audio", "Audio – Speicherbedarf"], ["video", "Video unkomprimiert"], ["einheit", "Einheiten umrechnen (SI/IEC, Bit/Byte)"], ["dauer", "Übertragungsdauer"], ["rate", "Benötigte Datenrate"]],
          mix: () => ["bild", "audio", "video", "einheit", "dauer", "rate"],
          gen: genData,
        },
        calcs: dataCalcs,
        explain: dataExplain,
      });
    },
  });

  /* ---------- Tool 2: RAID-Rechner ---------- */
  const raidLevelField = { k: "level", label: "RAID-Level", type: "select", value: "5", options: RAID_LEVELS.map((l) => [String(l), `${RAID[l].name} – ${RAID[l].kind}`]) };
  const chunk = (a, k) => Array.from({ length: Math.ceil(a.length / k) }, (_, i) => a.slice(i * k, i * k + k));
  function raidVisual(r, unit, h) {
    const groups = r.level === 10 ? chunk(r.sizes, 2) : r.level >= 50 ? chunk(r.sizes, r.n / r.g) : [r.sizes];
    const gl = r.level === 10 ? "Spiegel-Paar" : r.level >= 50 ? `RAID-${r.level === 50 ? 5 : 6}-Gruppe` : "";
    let k = 0;
    const rows = groups.map((g, gi) => `<div class="d-flex flex-wrap gap-1 align-items-center mb-1">${gl ? `<span class="small muted me-1">${gl} ${gi + 1}:</span>` : ""}${g.map((s) => `<span class="chip">${h.icon("hdd")} HDD ${++k} · ${nf(s)} ${esc(unit)}${s > r.m + 1e-9 ? ` (${nf(r.m)} genutzt)` : ""}</span>`).join("")}</div>`).join("");
    const spares = r.hotSpares ? `<div class="d-flex flex-wrap gap-1 align-items-center"><span class="small muted me-1">Reserve:</span>${Array.from({ length: r.hotSpares }, () => `<span class="chip hot">${h.icon("hdd")} Hot-Spare · ${nf(r.spareSize)} ${esc(unit)}</span>`).join("")}</div>` : "";
    return `<div class="mt-3"><div class="small-caps mb-1">Aufbau</div>${rows}${spares}</div>`;
  }
  function raidCompare(sizes, unit) {
    const rows = RAID_LEVELS.map((l) => {
      try {
        const r = raidCalc({ level: l, sizes, groups: 2, unit });
        return [r.name, `${nf(r.net)} ${esc(unit)}`, `${nf(r.eff, 1)} %`, r.tolMin === r.tolMax ? String(r.tolMin) : `${r.tolMin} (max. ${r.tolMax})`];
      } catch (e) {
        return [RAID[l].name, `<span class="muted">nicht möglich</span>`, "–", "–"];
      }
    });
    return `<div class="prose mt-3"><div class="small-caps mb-1">Vergleich: dieselben ${sizes.length} Platten in anderen Levels${sizes.length >= 6 ? " (RAID 50/60 mit 2 Gruppen)" : ""}</div>${tableHtml(["Level", "Netto", "Effizienz", "Ausfälle (garantiert)"], rows)}</div>`;
  }
  const raidCalcs = [
    { id: "kap", label: "Kapazität berechnen", mount: (el, h) => calcForm(el, h, {
      fields: [
        raidLevelField,
        { k: "n", label: "Anzahl Platten im RAID", value: "4" }, { k: "size", label: "Größe je Platte", value: "4" },
        { k: "unit", label: "Einheit", type: "select", value: "TB", options: [["TB", "TB"], ["GB", "GB"]] },
        { k: "list", label: "oder: Einzelgrößen", type: "text", value: "", ph: "z. B. 4; 4; 6; 8", help: "Optional, mit ; trennen – hat Vorrang vor Anzahl × Größe" },
        { k: "hs", label: "Hot-Spares", value: "0", optional: true },
        { k: "spare", label: "Größe je Hot-Spare", value: "", optional: true, ph: "wie größte Platte" },
        { k: "groups", label: "Gruppen (nur RAID 50/60)", value: "2", optional: true },
      ],
      compute: (v, h) => {
        let sizes;
        if (v.list) {
          const p = parseList(v.list);
          if (p.bad) fail(`„${p.bad}“ ist keine gültige Plattengröße. Trenne mehrere Werte mit Semikolon, z. B. 4; 4; 6.`);
          sizes = p.values;
        } else {
          num(v.n, "Anzahl Platten", { int: true, min: 1, max: 256 }); num(v.size, "Größe je Platte", { gt: 0 });
          sizes = Array(v.n).fill(v.size);
        }
        const r = raidCalc({ level: Number(v.level), sizes, hotSpares: v.hs ?? 0, spareSize: v.spare, groups: v.groups ?? 2, unit: v.unit });
        const u = esc(v.unit);
        const rows = [
          ["Level", `<strong>${r.name}</strong>`],
          ["Prinzip", r.kind],
          ["Platten im Verbund", `${r.n} (Minimum: ${r.min})`],
          ["kleinste Platte C", `${nf(r.m)} ${u}`],
          ["Brutto (Verbund)", `${nf(r.grossArray)} ${u}`],
          r.hotSpares ? ["Brutto inkl. Hot-Spare", `${nf(r.grossTotal)} ${u}`] : null,
          ["Nettokapazität", `<strong>${nf(r.net)} ${u}</strong>`],
          ["für Redundanz", `${nf(r.redundancy)} ${u}`],
          r.unused > 1e-9 ? ["ungenutzt", `${nf(r.unused)} ${u}`] : null,
          ["Speichereffizienz", `${nf(r.eff, 2)} %`],
          r.hotSpares || r.unused > 1e-9 ? ["Netto ÷ Brutto gesamt", `${nf(r.effTotal, 2)} %`] : null,
          ["Ausfalltoleranz", r.tolMin === r.tolMax ? `${r.tolMin} Platte${r.tolMin === 1 ? "" : "n"}` : `garantiert ${r.tolMin}, max. ${r.tolMax}`],
        ];
        return resultBox(rows) + raidVisual(r, v.unit, h) + stepsBlock(r.steps) + r.warnings.map((w) => note("achtung", esc(w))).join("") + (r.hotSpares ? note("merke", "Ein Hot-Spare erhöht nicht die Zahl der <em>gleichzeitig</em> tolerierten Ausfälle – aber nach dem automatischen Rebuild ist das RAID wieder voll redundant.") : "") + raidCompare(sizes, v.unit);
      },
    }) },
    { id: "anz", label: "Plattenanzahl ermitteln", mount: (el, h) => calcForm(el, h, {
      fields: [
        raidLevelField,
        { k: "net", label: "gewünschte Nettokapazität", value: "40" }, { k: "size", label: "Größe je Platte", value: "8" },
        { k: "unit", label: "Einheit", type: "select", value: "TB", options: [["TB", "TB"], ["GB", "GB"]] },
        { k: "hs", label: "Hot-Spares", value: "0", optional: true }, { k: "groups", label: "Gruppen (nur RAID 50/60)", value: "2", optional: true },
      ],
      compute: (v, h) => {
        const r = raidDisks({ level: Number(v.level), net: v.net, size: v.size, hotSpares: v.hs ?? 0, groups: v.groups ?? 2, unit: v.unit });
        const u = esc(v.unit);
        return resultBox([["Datenplatten", String(r.k)], ["Platten im RAID", String(r.n)], (v.hs ?? 0) ? ["+ Hot-Spares", String(v.hs)] : null, ["Platten kaufen", `<strong>${r.total}</strong>`], ["Nettokapazität", `${nf(r.net)} ${u}`], ["Reserve", `${nf(r.net - v.net)} ${u}`], ["Speichereffizienz", `${nf(r.res.eff, 2)} %`]]) + raidVisual(Object.assign({}, r.res, { hotSpares: v.hs ?? 0, spareSize: v.size }), v.unit, h) + stepsBlock(r.steps);
      },
    }) },
  ];
  const raidExplain = `
    <h5>Die RAID-Level im Überblick</h5>
    <table><thead><tr><th>Level</th><th>Prinzip</th><th>min. Platten</th><th>Nettokapazität</th><th>Ausfälle (garantiert)</th><th>Effizienz</th></tr></thead><tbody>
      <tr><td>RAID 0</td><td>Striping, keine Redundanz</td><td>2</td><td>n × C</td><td>0</td><td>100 %</td></tr>
      <tr><td>RAID 1</td><td>Spiegelung</td><td>2</td><td>1 × C</td><td>n − 1</td><td>1 ÷ n (50 % bei 2)</td></tr>
      <tr><td>RAID 5</td><td>Striping + verteilte Parität</td><td>3</td><td>(n − 1) × C</td><td>1</td><td>(n − 1) ÷ n</td></tr>
      <tr><td>RAID 6</td><td>Striping + doppelte Parität</td><td>4</td><td>(n − 2) × C</td><td>2</td><td>(n − 2) ÷ n</td></tr>
      <tr><td>RAID 10</td><td>Spiegel-Paare + Striping</td><td>4 (gerade)</td><td>n ÷ 2 × C</td><td>1 (max. n ÷ 2)</td><td>50 %</td></tr>
      <tr><td>RAID 50</td><td>Striping über g RAID-5-Gruppen</td><td>6</td><td>(n − g) × C</td><td>1 (max. g)</td><td>(n − g) ÷ n</td></tr>
      <tr><td>RAID 60</td><td>Striping über g RAID-6-Gruppen</td><td>8</td><td>(n − 2g) × C</td><td>2 (max. 2g)</td><td>(n − 2g) ÷ n</td></tr>
    </tbody></table>
    <div class="callout formel">n = Platten im Verbund · C = Kapazität der kleinsten Platte · g = Anzahl Gruppen<br>Speichereffizienz = Nettokapazität ÷ Bruttokapazität × 100 %<br>benötigte Platten (RAID 5) = ⌈Netto ÷ C⌉ + 1 · (RAID 6) = ⌈Netto ÷ C⌉ + 2 · (RAID 10) = 2 × ⌈Netto ÷ C⌉</div>
    <div class="callout merke"><strong>Merke:</strong> Bei unterschiedlich großen Platten zählt jede Platte nur so viel wie die <strong>kleinste</strong>. Ein <strong>Hot-Spare</strong> gehört nicht zum Verbund: Er bringt keine Nutzkapazität, springt aber bei einem Ausfall sofort ein (automatischer Rebuild).</div>
    <div class="callout achtung"><strong>RAID ist kein Backup!</strong> Versehentlich gelöschte Dateien, Ransomware, Controller-Defekt oder ein Brand treffen alle Platten gleichzeitig. Eine Datensicherung (3-2-1-Regel) bleibt Pflicht.</div>
    <div class="callout pruefung"><strong>So kommt es dran:</strong> RAID wird im Prüfungskatalog seit 2025 nur noch in <strong>AP2</strong> geprüft – z. B. „Berechnen Sie die Nettokapazität …“ oder „Wie viele Festplatten werden benötigt …“. Schreib Formel, eingesetzte Werte und Ergebnis mit Einheit hin.</div>`;

  L.tool({
    id: "raid", title: "RAID-Rechner", icon: "hdd-stack", hue: 260,
    desc: "Nettokapazität, Plattenanzahl, Ausfalltoleranz und Effizienz für RAID 0, 1, 5, 6, 10, 50 und 60 – mit Hot-Spare und gemischten Plattengrößen.",
    exam: ["AP2"], modules: ["lf10"],
    render(root, h) {
      shell(root, h, {
        key: "rd",
        practice: {
          key: "rdp",
          types: [["netto", "Nettokapazität & Ausfalltoleranz"], ["anzahl", "Plattenanzahl für Ziel-Kapazität"], ["gemischt", "Unterschiedlich große Platten"], ["spare", "Mit Hot-Spare"], ["grundlagen", "Grundlagen: Mindestanzahl & Ausfälle"]],
          mix: (lvl) => (lvl === 1 ? ["grundlagen", "netto", "spare"] : ["netto", "anzahl", "spare", "gemischt"]),
          gen: genRaid,
        },
        calcs: raidCalcs,
        explain: raidExplain,
      });
    },
  });

  /* ---------- Tool 3: Strom, USV & Elektrotechnik ---------- */
  const energyCalcs = [
    { id: "kosten", label: "Stromkosten", mount: (el, h) => calcForm(el, h, {
      fields: [
        { k: "P", label: "Leistung je Gerät in W", value: "350" }, { k: "count", label: "Anzahl Geräte", value: "1" },
        { k: "hours", label: "Betrieb in h pro Tag", value: "24" }, { k: "days", label: "Betriebstage pro Jahr", value: "365" },
        { k: "price", label: "Strompreis in ct/kWh", value: "35" },
        { k: "standby", label: "Standby-Leistung in W", value: "", optional: true, help: "gilt für die übrigen Stunden des Jahres (8.760 h − Betrieb)" },
      ],
      compute: (v) => {
        const r = energyYear({ P: v.P, count: v.count, hours: v.hours, days: v.days, standby: v.standby ?? 0, price: v.price });
        return resultBox([["Betriebsstunden", `${nf(r.opH)} h/Jahr`], ["Energie Betrieb", `${nf(r.kwhOp, 2)} kWh`], r.sbH ? ["Energie Standby", `${nf(r.kwhSb, 2)} kWh`] : null, ["Energie gesamt", `<strong>${nf(r.kwh, 2)} kWh/Jahr</strong>`], ["Kosten", `<strong>${nf(r.eur, 2)} €/Jahr</strong>`], ["pro Monat", `${nf(r.eur / 12, 2)} €`]]) + stepsBlock(r.steps);
      },
    }) },
    { id: "amort", label: "Alt vs. neu", mount: (el, h) => calcForm(el, h, {
      fields: [
        { k: "pOld", label: "Leistung Altgerät in W", value: "450" }, { k: "pNew", label: "Leistung Neugerät in W", value: "250" }, { k: "count", label: "Anzahl Geräte", value: "1" },
        { k: "hours", label: "Betrieb in h pro Tag", value: "24" }, { k: "days", label: "Betriebstage pro Jahr", value: "365" }, { k: "price", label: "Strompreis in ct/kWh", value: "35" },
        { k: "invest", label: "Anschaffungskosten gesamt in €", value: "1200" },
      ],
      compute: (v) => {
        const r = amortization({ pOld: v.pOld, pNew: v.pNew, count: v.count, hours: v.hours, days: v.days, price: v.price, invest: v.invest });
        return resultBox([["Kosten Altgerät", `${nf(r.a.eur, 2)} €/Jahr (${nf(r.a.kwh, 2)} kWh)`], ["Kosten Neugerät", `${nf(r.b.eur, 2)} €/Jahr (${nf(r.b.kwh, 2)} kWh)`], ["Ersparnis", `<strong>${nf(r.save, 2)} €/Jahr</strong>`], ["Amortisation", Number.isFinite(r.years) ? `<strong>${nf(r.years, 2)} Jahre</strong> ≈ ${nf(r.months, 1)} Monate` : "nie (keine Ersparnis)"]]) + stepsBlock(r.steps);
      },
    }) },
    { id: "usv", label: "USV", mount: (el, h) => calcForm(el, h, {
      intro: "Dimensionierung (Scheinleistung) und Überbrückungszeit. Mehrere Geräte einfach mit ; trennen – die Wirkleistungen werden addiert.",
      fields: [
        { k: "loads", label: "Wirkleistungen der Geräte in W", type: "text", value: "450; 250; 60; 40", col: "col-12 col-md-8" },
        { k: "cos", label: "Leistungsfaktor cos φ", value: "0,8" }, { k: "reserve", label: "Reserve in %", value: "25", optional: true },
        { k: "V", label: "Akkuspannung in V", value: "48", optional: true }, { k: "Ah", label: "Akkukapazität in Ah", value: "9", optional: true },
        { k: "Wh", label: "oder Akkuenergie in Wh", value: "", optional: true, help: "statt Spannung × Kapazität" },
        { k: "eta", label: "Wirkungsgrad in %", value: "90", optional: true }, { k: "target", label: "gewünschte Überbrückung in min", value: "", optional: true },
      ],
      compute: (v) => {
        const p = parseList(v.loads);
        if (p.bad) fail(`„${p.bad}“ ist keine gültige Leistung. Trenne mehrere Werte mit Semikolon.`);
        if (!p.values.length) fail("Bitte mindestens eine Wirkleistung eingeben.");
        p.values.forEach((x) => num(x, "Wirkleistung", { gt: 0 }));
        const P = sum(p.values);
        const r = ups({ P, cos: v.cos, reserve: v.reserve ?? 0 });
        const eta = v.eta ?? 100;
        let rt = null, need = null;
        if (v.Wh != null || (v.V != null && v.Ah != null)) rt = upsRuntime({ Wh: v.Wh, V: v.V, Ah: v.Ah, eta, P });
        if (v.target != null) need = upsBattery({ P, minutes: v.target, eta, V: v.V });
        const rows = [["Wirkleistung P", `${nf(P)} W`], ["Scheinleistung S", `${nf(r.S, 2)} VA`], (v.reserve ?? 0) ? ["S mit Reserve", `<strong>${nf(r.Sres, 2)} VA</strong>`] : null, ["übliche USV-Größe", r.pick ? `${nf(r.pick)} VA` : "Großanlage"], rt ? ["Akkuenergie", `${nf(rt.E, 2)} Wh`] : null, rt ? ["Überbrückungszeit", `<strong>${nf(rt.min, 1)} min</strong> (${dur(rt.min * 60)})`] : null, need ? ["nötige Akkuenergie", `${nf(need.Wh, 1)} Wh${need.Ah != null ? ` (${nf(need.Ah, 2)} Ah bei ${nf(v.V)} V)` : ""}`] : null];
        return resultBox(rows) + stepsBlock([p.values.length > 1 ? `Gesamte Wirkleistung: P = ${p.values.map((x) => nf(x) + " W").join(" + ")} = ${nf(P)} W` : null, ...r.steps, ...(rt ? rt.steps : []), ...(need ? need.steps : [])]) + note("merke", "Die USV muss <strong>beide</strong> Angaben erfüllen: Scheinleistung (VA) <strong>und</strong> Wirkleistung (W) – auf dem Typenschild stehen meist beide, z. B. 1.500 VA / 1.050 W. Die berechnete Überbrückungszeit ist ein Näherungswert (Akkualter, Temperatur und Entladekurve verkürzen sie).");
      },
    }) },
    { id: "ohm", label: "Ohm & Leistung", mount: (el, h) => calcForm(el, h, {
      intro: "Trage genau <strong>zwei</strong> Größen ein – die anderen beiden werden berechnet.",
      fields: [
        { k: "U", label: "Spannung U in V", value: "230", optional: true }, { k: "I", label: "Stromstärke I in A", value: "", optional: true },
        { k: "R", label: "Widerstand R in Ω", value: "", optional: true }, { k: "P", label: "Leistung P in W", value: "2000", optional: true },
      ],
      compute: (v) => {
        const r = ohm({ U: v.U, I: v.I, R: v.R, P: v.P });
        const mark = (k, val, u) => (r.given.includes(k) ? `${nf(val, 4)} ${u} (gegeben)` : `<strong>${nf(val, 4)} ${u}</strong>`);
        return resultBox([["U", mark("U", r.U, "V")], ["I", mark("I", r.I, "A") + (r.I < 1 ? ` = ${nf(r.I * 1000, 3)} mA` : "")], ["R", mark("R", r.R, "Ω")], ["P", mark("P", r.P, "W")]]) + stepsBlock(r.steps);
      },
    }) },
    { id: "widerstand", label: "Widerstände", mount: (el, h) => calcForm(el, h, {
      fields: [
        { k: "list", label: "Widerstände in Ω", type: "text", value: "100; 220; 330", help: "mit ; trennen, z. B. 100; 220 oder 3×470" },
        { k: "mode", label: "Schaltung", type: "select", value: "reihe", options: [["reihe", "Reihenschaltung"], ["parallel", "Parallelschaltung"]] },
        { k: "U", label: "Spannung in V", value: "12", optional: true },
      ],
      compute: (v) => {
        const p = parseList(v.list);
        if (p.bad) fail(`„${p.bad}“ ist kein gültiger Widerstandswert. Trenne mehrere Werte mit Semikolon.`);
        const r = resistors(p.values, v.mode, v.U);
        const rows = [["R_ges", `<strong>${nf(r.Rg, 4)} Ω</strong>`], r.I != null ? ["Gesamtstrom I", `${nf(r.I, 5)} A = ${nf(r.I * 1000, 3)} mA`] : null, r.P != null ? ["Gesamtleistung P", `${nf(r.P, 4)} W`] : null];
        const tbl = r.parts.length ? `<div class="prose mt-3"><div class="small-caps mb-1">Einzelwerte</div>${tableHtml(["", "R", "U", "I", "P"], r.parts.map((x, i) => [`R${sub(i + 1)}`, `${nf(x.R, 4)} Ω`, `${nf(x.U, 4)} V`, `${nf(x.I * 1000, 3)} mA`, `${nf(x.P, 4)} W`]))}</div>` : "";
        return resultBox(rows) + tbl + stepsBlock(r.steps);
      },
    }) },
    { id: "daempfung", label: "Dämpfung (dB)", mount: (el, h) => multi(el, h, "db", [
      { id: "ratio", label: "a aus P₁/P₂ oder U₁/U₂", mount: (e2, h2) => calcForm(e2, h2, {
        fields: [
          { k: "kind", label: "Größe", type: "select", value: "leistung", options: [["leistung", "Leistung (10 × lg)"], ["spannung", "Spannung (20 × lg)"]] },
          { k: "x1", label: "Eingang (P₁ bzw. U₁)", value: "10" }, { k: "x2", label: "Ausgang (P₂ bzw. U₂)", value: "0,5", help: "gleiche Einheit wie der Eingang" },
        ],
        compute: (v) => {
          const r = dbRatio(v.x1, v.x2, v.kind);
          return resultBox([["Dämpfungsfaktor D", nf(r.ratio, 6)], ["Dämpfungsmaß a", `<strong>${nf(r.a, 3)} dB</strong>`], ["Übertragungsfaktor T", nf(r.T, 6)]]) + stepsBlock(r.steps);
        },
      }) },
      { id: "p2", label: "P₂ aus a", mount: (e2, h2) => calcForm(e2, h2, {
        fields: [{ k: "P1", label: "Eingangsleistung P₁", value: "10" }, { k: "u", label: "Einheit", type: "select", value: "mW", options: [["W", "W"], ["mW", "mW"], ["µW", "µW"]] }, { k: "a", label: "Dämpfungsmaß a in dB", value: "3" }],
        compute: (v) => {
          const r = powerAfter(v.P1, v.a);
          return resultBox([["Ausgangsleistung P₂", `<strong>${nf(r.P2, 6)} ${esc(v.u)}</strong>`], ["Verhältnis P₁ ÷ P₂", nf(r.factor, 6)], ["übrig", `${nf(100 / r.factor, 3)} % der Eingangsleistung`]]) + stepsBlock(r.steps);
        },
      }) },
      { id: "strecke", label: "Strecke & Pegel", mount: (e2, h2) => calcForm(e2, h2, {
        fields: [
          { k: "len", label: "Länge in km", value: "12" }, { k: "perKm", label: "Dämpfung in dB/km", value: "0,35" },
          { k: "conn", label: "Anzahl Stecker", value: "2" }, { k: "connDb", label: "dB je Stecker", value: "0,5" },
          { k: "spl", label: "Anzahl Spleiße", value: "3" }, { k: "splDb", label: "dB je Spleiß", value: "0,1" },
          { k: "tx", label: "Sendepegel in dBm", value: "-3", optional: true }, { k: "rxMin", label: "Empfängerempfindlichkeit in dBm", value: "-20", optional: true },
        ],
        compute: (v) => {
          const r = link({ len: v.len, perKm: v.perKm, conn: v.conn, connDb: v.connDb, spl: v.spl, splDb: v.splDb, tx: v.tx, rxMin: v.tx != null ? v.rxMin : null });
          return resultBox([["Gesamtdämpfung", `<strong>${nf(r.a, 3)} dB</strong>`], r.rx != null ? ["Empfangspegel", `${nf(r.rx, 3)} dBm (${nf(mwFromDbm(r.rx), 6)} mW)`] : null, r.margin != null ? ["Systemreserve", `${nf(r.margin, 3)} dB – ${r.margin >= 0 ? "ausreichend" : "zu wenig!"}`] : null]) + stepsBlock(r.steps);
        },
      }) },
      { id: "pegel", label: "dBm ↔ mW", mount: (e2, h2) => calcForm(e2, h2, {
        intro: "Ein Feld ausfüllen – das andere wird berechnet. Der Pegel in dBm bezieht sich auf 1 mW.",
        fields: [{ k: "mw", label: "Leistung in mW", value: "0,5", optional: true }, { k: "dbm", label: "Pegel in dBm", value: "", optional: true }],
        compute: (v) => {
          if ((v.mw == null) === (v.dbm == null)) fail("Bitte genau ein Feld ausfüllen: Leistung in mW oder Pegel in dBm.");
          if (v.mw != null) { num(v.mw, "Leistung", { gt: 0 }); const d = dbm(v.mw); return resultBox([["Pegel", `<strong>${nf(d, 3)} dBm</strong>`]]) + stepsBlock([`L = 10 × lg(P ÷ 1 mW) = 10 × lg(${nf(v.mw, 6)}) = ${nf(d, 3)} dBm`]); }
          num(v.dbm, "Pegel"); const p = mwFromDbm(v.dbm);
          return resultBox([["Leistung", `<strong>${nf(p, 6)} mW</strong>`]]) + stepsBlock([`P = 1 mW × 10^(L ÷ 10) = 10^(${nf(v.dbm, 4)} ÷ 10) mW = ${nf(p, 6)} mW`]);
        },
      }) },
    ]) },
  ];
  const energyExplain = `
    <h5>Stromkosten & Amortisation</h5>
    <div class="callout formel">Energie: W = P × t (W × h = Wh; ÷ 1.000 = kWh)<br>Kosten = Energie (kWh) × Preis (ct/kWh) ÷ 100 = €<br>Amortisationszeit = Anschaffungskosten ÷ Ersparnis pro Jahr</div>
    <h5>USV</h5>
    <div class="callout formel">Scheinleistung: S = P ÷ cos φ (in VA)<br>mit Reserve: S × (1 + Reserve ÷ 100)<br>Akkuenergie: E = U × Q (V × Ah = Wh)<br>Überbrückungszeit: t ≈ E × η ÷ P</div>
    <h5>Ohmsches Gesetz & Leistung</h5>
    <div class="callout formel">U = R × I · R = U ÷ I · I = U ÷ R<br>P = U × I = I² × R = U² ÷ R</div>
    <h5>Reihen- und Parallelschaltung</h5>
    <div class="callout formel">Reihe: R<sub>ges</sub> = R₁ + R₂ + … (Strom überall gleich, Spannungen teilen sich auf)<br>Parallel: 1/R<sub>ges</sub> = 1/R₁ + 1/R₂ + … (Spannung überall gleich, Ströme teilen sich auf)<br>zwei parallel: R<sub>ges</sub> = (R₁ × R₂) ÷ (R₁ + R₂)</div>
    <h5>Dämpfung in Dezibel</h5>
    <div class="callout formel">Dämpfungsmaß (Leistung): a = 10 × lg(P₁ ÷ P₂) dB<br>Dämpfungsmaß (Spannung): a = 20 × lg(U₁ ÷ U₂) dB<br>Pegel: L = 10 × lg(P ÷ 1 mW) dBm<br>Strecke: a<sub>ges</sub> = Länge × dB/km + Stecker + Spleiße · Empfangspegel = Sendepegel − a<sub>ges</sub></div>
    <table><thead><tr><th>Dämpfung</th><th>3 dB</th><th>6 dB</th><th>10 dB</th><th>20 dB</th><th>30 dB</th></tr></thead><tbody><tr><td>übrige Leistung</td><td>≈ ½</td><td>≈ ¼</td><td>1/10</td><td>1/100</td><td>1/1.000</td></tr></tbody></table>
    <div class="callout merke"><strong>Merke:</strong> Dezibel-Werte einer Strecke werden einfach <strong>addiert</strong> – die Leistungsverhältnisse dagegen multipliziert. cos φ ist höchstens 1, darum ist die Scheinleistung (VA) immer mindestens so groß wie die Wirkleistung (W).</div>
    <div class="callout achtung"><strong>Typische Fehler:</strong> W mit kW, Wh mit kWh oder ct mit € verwechselt; bei Standby-Aufgaben die übrigen Stunden vergessen; bei der USV mit cos φ multipliziert statt geteilt.</div>`;

  L.tool({
    id: "energie", title: "Strom, USV & Elektrotechnik", icon: "lightning-charge", hue: 45,
    desc: "Stromkosten und Amortisation, USV-Dimensionierung und Überbrückungszeit, ohmsches Gesetz, Widerstandsschaltungen und Dämpfung in dB.",
    exam: ["AP1"], modules: ["lf02", "lf03"],
    render(root, h) {
      shell(root, h, {
        key: "en",
        practice: {
          key: "enp",
          types: [["kosten", "Stromkosten"], ["amort", "Alt vs. neu / Amortisation"], ["usv", "USV dimensionieren"], ["akku", "USV-Überbrückungszeit & Akku"], ["ohm", "Ohmsches Gesetz & Leistung"], ["widerstand", "Reihen- & Parallelschaltung"], ["daempfung", "Dämpfung in dB"]],
          mix: () => ["kosten", "amort", "usv", "akku", "ohm", "widerstand", "daempfung"],
          gen: genEnergy,
        },
        calcs: energyCalcs,
        explain: energyExplain,
      });
    },
  });

  /* ---------- Tool 4: Verfügbarkeit & Ausfallzeit ---------- */
  function mountSystem(host, h) {
    const P = uid("sys");
    host.innerHTML = `<p class="small muted mb-3">Jede Zeile ist eine <strong>Stufe in Reihe</strong>. Mehrere Werte in einer Zeile (mit <span class="mono">;</span> getrennt) sind <strong>parallel</strong>, also redundant. Kurzform: <span class="mono">2×99,5</span> = zwei gleiche Komponenten mit je 99,5 %.</p>
      <div data-rows></div>
      <div class="row g-2 mt-1"><div class="col-12 col-sm-6 col-md-4"><label class="form-label small fw-semi mb-1" for="${P}paths">Gleiche Gesamtpfade parallel</label><input class="form-control mono" id="${P}paths" data-paths type="text" inputmode="numeric" autocomplete="off" value="1"><div class="form-text">1 = keine Pfad-Redundanz · 2 = komplette Kette doppelt</div></div></div>
      <div class="d-flex flex-wrap gap-2 mt-3"><button class="btn btn-accent" type="button" data-go>${h.icon("calculator")} Berechnen</button><button class="btn btn-soft" type="button" data-add>${h.icon("plus-lg")} Stufe hinzufügen</button><button class="btn btn-ghost" type="button" data-reset>${h.icon("arrow-counterclockwise")} Beispielwerte</button></div>
      <div data-out aria-live="polite"></div>`;
    const rowsEl = host.querySelector("[data-rows]"), out = host.querySelector("[data-out]");
    let n = 0;
    const addRow = (name = "", av = "") => {
      const i = ++n;
      rowsEl.insertAdjacentHTML("beforeend", `<div class="row g-2 align-items-end mb-2" data-row>
        <div class="col-12 col-sm-5"><label class="form-label small fw-semi mb-1" for="${P}n${i}">Stufe / Komponente</label><input class="form-control" id="${P}n${i}" data-name type="text" autocomplete="off" value="${esc(name)}" placeholder="z. B. Firewall"></div>
        <div class="col-9 col-sm-5"><label class="form-label small fw-semi mb-1" for="${P}a${i}">Verfügbarkeit(en) in %</label><input class="form-control mono" id="${P}a${i}" data-av type="text" autocomplete="off" value="${esc(av)}" placeholder="z. B. 99,9 oder 2×99"></div>
        <div class="col-3 col-sm-2"><button class="btn btn-ghost w-100" type="button" data-del aria-label="Stufe entfernen" title="Stufe entfernen">${h.icon("trash")}</button></div></div>`);
    };
    const DEF = [["Router", "99,9"], ["Firewall (redundant)", "2×99"], ["Server", "99,5"], ["Storage", "99,95"]];
    const reset = () => { rowsEl.innerHTML = ""; DEF.forEach(([a, b]) => addRow(a, b)); host.querySelector("[data-paths]").value = "1"; };
    const run = () => {
      out.innerHTML = safe(() => {
        const stages = [];
        for (const row of rowsEl.querySelectorAll("[data-row]")) {
          const name = row.querySelector("[data-name]").value.trim(), av = row.querySelector("[data-av]").value.trim();
          if (!name && !av) continue;
          const p = parseList(av);
          if (p.bad) fail(`„${p.bad}“ bei „${name || "Stufe"}“ ist keine gültige Prozentangabe (z. B. 99,9 oder 2×99).`);
          stages.push({ name: name || `Stufe ${stages.length + 1}`, values: p.values });
        }
        const paths = parseNum(host.querySelector("[data-paths]").value || "1");
        const r = availSystem(stages, paths);
        const tbl = tableHtml(["Stufe", "Komponenten", "A der Stufe"], stages.map((s, i) => [esc(s.name), s.values.length > 1 ? `${s.values.length}× parallel: ${s.values.map((x) => nf(x, 4) + " %").join(" ∥ ")}` : `${nf(s.values[0], 4)} %`, `${pf(r.per[i])} %`]));
        return resultBox([["Gesamtverfügbarkeit", `<strong>${pf(r.total)} %</strong>`], ["Ausfallzeit/Jahr", `${nf(r.downYearH, 3)} h (${dur(r.downYearH * 3600)})`], ["Ausfallzeit/Monat", dur(downtime(r.total, 720) * 3600)], ["schwächste Stufe", `${esc(stages[r.per.indexOf(Math.min(...r.per))].name)} (${pf(Math.min(...r.per))} %)`]]) + `<div class="prose mt-3">${tbl}</div>` + stepsBlock(r.steps);
      });
    };
    host.addEventListener("click", (e) => {
      const b = e.target.closest("button"); if (!b || !host.contains(b)) return;
      if (b.hasAttribute("data-go")) run();
      else if (b.hasAttribute("data-add")) { addRow(); const inputs = rowsEl.querySelectorAll("[data-name]"); inputs[inputs.length - 1].focus(); }
      else if (b.hasAttribute("data-reset")) { reset(); run(); }
      else if (b.hasAttribute("data-del")) {
        const row = b.closest("[data-row]");
        if (rowsEl.querySelectorAll("[data-row]").length > 1) row.remove();
        else row.querySelectorAll("input").forEach((i) => { i.value = ""; });
        run();
      }
    });
    onEnter(host, run);
    reset(); run();
  }
  const availCalcs = [
    { id: "a2d", label: "% → Ausfallzeit", mount: (el, h) => calcForm(el, h, {
      fields: [
        { k: "a", label: "Verfügbarkeit in %", value: "99,9" },
        { k: "hpd", label: "Betrieb in h pro Tag", value: "24", help: "24 = rund um die Uhr; bei Servicezeit 8–18 Uhr: 10" },
        { k: "own", label: "eigener Bezugszeitraum in h", value: "", optional: true, help: "z. B. Servicezeit 5 × 9 h = 45 h pro Woche" },
      ],
      compute: (v) => {
        pctCheck(v.a, "Verfügbarkeit"); num(v.hpd, "Stunden pro Tag", { gt: 0, max: 24 });
        const rows = PERIODS.map((p) => { const H = p.days * v.hpd, d = downtime(v.a, H); return [p.label, `${nf(H)} h`, `${nf(d, 4)} h`, `<strong>${dur(d * 3600)}</strong>`]; });
        if (v.own != null) { num(v.own, "eigener Bezugszeitraum", { gt: 0 }); const d = downtime(v.a, v.own); rows.push(["eigener Zeitraum", `${nf(v.own)} h`, `${nf(d, 4)} h`, `<strong>${dur(d * 3600)}</strong>`]); }
        const H = 365 * v.hpd;
        return resultBox([["pro Jahr", `<strong>${dur(downtime(v.a, H) * 3600)}</strong> (${nf(downtime(v.a, H), 3)} h)`], ["pro Monat", dur(downtime(v.a, 30 * v.hpd) * 3600)], ["Nichtverfügbarkeit", `${pf(100 - v.a)} %`]]) + `<div class="prose mt-3"><div class="small-caps mb-1">Erlaubte Ausfallzeit bei ${nf(v.a, 4)} %</div>${tableHtml(["Zeitraum", "Bezugszeit", "Ausfallzeit", "entspricht"], rows)}</div>` + stepsBlock([`Nichtverfügbarkeit: 1 − ${dec(v.a)} = ${nf(1 - v.a / 100, 8)}`, `Bezugszeit Jahr: 365 Tage × ${nf(v.hpd)} h = ${nf(H)} h`, `Ausfallzeit: ${nf(H)} h × ${nf(1 - v.a / 100, 8)} = ${nf(downtime(v.a, H), 4)} h = ${nf(downtime(v.a, H) * 60, 2)} min`], "Rechenweg (Beispiel Jahr)");
      },
    }) },
    { id: "d2a", label: "Ausfallzeit → %", mount: (el, h) => calcForm(el, h, {
      fields: [
        { k: "dh", label: "Ausfallzeit: Stunden", value: "5", optional: true }, { k: "dm", label: "Ausfallzeit: Minuten", value: "24", optional: true },
        { k: "per", label: "Bezugszeitraum", type: "select", value: "monat", options: PERIODS.map((p) => [p.id, p.label]).concat([["eigen", "eigener Zeitraum (Stunden)"]]) },
        { k: "hpd", label: "Betrieb in h pro Tag", value: "24" }, { k: "own", label: "eigener Zeitraum in h", value: "", optional: true },
        { k: "sla", label: "vereinbarte Verfügbarkeit (SLA) in %", value: "99,5", optional: true },
      ],
      compute: (v) => {
        const dh = v.dh ?? 0, dm = v.dm ?? 0;
        num(dh, "Stunden", { min: 0 }); num(dm, "Minuten", { min: 0 });
        const down = dh + dm / 60;
        let H, label;
        if (v.per === "eigen") { num(v.own, "eigener Zeitraum", { gt: 0 }); H = v.own; label = "eigener Zeitraum"; }
        else { num(v.hpd, "Stunden pro Tag", { gt: 0, max: 24 }); const p = PERIODS.find((x) => x.id === v.per) || PERIODS[0]; H = p.days * v.hpd; label = p.label; }
        if (down > H) fail(`Die Ausfallzeit (${nf(down, 2)} h) ist länger als der Bezugszeitraum (${nf(H)} h).`);
        const A = fromDowntime(down, H);
        const steps = [`Bezugszeit (${label}): ${nf(H)} h`, `Ausfallzeit: ${nf(dh)} h + ${nf(dm)} min ÷ 60 = ${nf(down, 4)} h`, `A = (Bezugszeit − Ausfallzeit) ÷ Bezugszeit = (${nf(H)} − ${nf(down, 4)}) ÷ ${nf(H)} = ${nf(A / 100, 8)} → ${pf(A)} %`];
        let slaRow = null;
        if (v.sla != null) { pctCheck(v.sla, "SLA"); const ok = A >= v.sla - 1e-9; const allowed = downtime(v.sla, H); slaRow = ["SLA", `${ok ? "eingehalten" : "verletzt"} (erlaubt: ${dur(allowed * 3600)})`]; steps.push(`Vergleich mit SLA: ${pf(A)} % ${ok ? "≥" : "<"} ${nf(v.sla, 4)} % → ${ok ? "eingehalten" : "verletzt"}; erlaubt wären ${nf(allowed, 4)} h`); }
        return resultBox([["Verfügbarkeit", `<strong>${pf(A)} %</strong>`], ["Nichtverfügbarkeit", `${pf(100 - A)} %`], slaRow]) + stepsBlock(steps);
      },
    }) },
    { id: "system", label: "Reihe / Parallel", mount: mountSystem },
    { id: "mtbf", label: "MTBF / MTTR", mount: (el, h) => calcForm(el, h, {
      intro: "Trage genau <strong>zwei</strong> der drei Werte ein – der dritte wird berechnet.",
      fields: [{ k: "mtbf", label: "MTBF in h", value: "2000", optional: true }, { k: "mttr", label: "MTTR in h", value: "8", optional: true }, { k: "a", label: "Verfügbarkeit in %", value: "", optional: true }],
      compute: (v) => {
        const r = mtbfCalc({ mtbf: v.mtbf, mttr: v.mttr, a: v.a });
        return resultBox([["MTBF", `${nf(r.mtbf, 3)} h`], ["MTTR", `${nf(r.mttr, 3)} h`], ["Verfügbarkeit", `<strong>${pf(r.a)} %</strong>`], ["Ausfallzeit/Jahr", dur(downtime(r.a, HOURS_YEAR) * 3600)]]) + stepsBlock(r.steps);
      },
    }) },
  ];
  const ninesRows = [99, 99.5, 99.9, 99.95, 99.99, 99.999].map((a) => `<tr><td>${nf(a, 3)} %</td><td>${dur(downtime(a, 8760) * 3600)}</td><td>${dur(downtime(a, 720) * 3600)}</td><td>${dur(downtime(a, 168) * 3600)}</td></tr>`).join("");
  const availExplain = `
    <h5>Formeln</h5>
    <div class="callout formel">Verfügbarkeit A = Betriebszeit ÷ Gesamtzeit = MTBF ÷ (MTBF + MTTR)<br>erlaubte Ausfallzeit = (1 − A) × Bezugszeitraum<br>Reihe: A = A₁ × A₂ × … × Aₙ<br>Parallel: A = 1 − (1 − A₁) × (1 − A₂) × … × (1 − Aₙ)</div>
    <h5>Die „Neunen“ (24/7-Betrieb)</h5>
    <table><thead><tr><th>Verfügbarkeit</th><th>pro Jahr (365 Tage)</th><th>pro Monat (30 Tage)</th><th>pro Woche</th></tr></thead><tbody>${ninesRows}</tbody></table>
    <div class="callout merke"><strong>Merke:</strong> In <strong>Reihe</strong> ist jede Komponente ein Single Point of Failure – das Ganze ist schlechter als das schwächste Glied. <strong>Parallel</strong> (redundant) ist das Ganze besser als die beste Einzelkomponente. Prozentwerte vorher in Dezimalzahlen umrechnen (99,5 % = 0,995).</div>
    <div class="callout tipp"><strong>Begriffe:</strong> MTBF = <em>Mean Time Between Failures</em> (mittlere Betriebszeit zwischen zwei Ausfällen), MTTR = <em>Mean Time To Repair</em> (mittlere Reparatur- bzw. Wiederherstellungszeit). Eine kürzere MTTR (z. B. Ersatzteile vor Ort, Hot-Spare, schnelle Reaktionszeit im SLA) erhöht die Verfügbarkeit genauso wie eine längere MTBF.</div>
    <div class="callout achtung"><strong>Bezugszeitraum beachten:</strong> Gilt die Verfügbarkeit rund um die Uhr oder nur in der Servicezeit (z. B. Mo–Fr 8–18 Uhr)? Wenn nichts anderes angegeben ist: Jahr = 365 Tage = 8.760 h, Monat = 30 Tage = 720 h.</div>`;

  L.tool({
    id: "verfuegbarkeit", title: "Verfügbarkeit & Ausfallzeit", icon: "activity", hue: 145,
    desc: "Verfügbarkeit in Prozent und erlaubte Ausfallzeit, Reihen- und Parallelschaltung, gemischte Systeme sowie MTBF/MTTR.",
    exam: ["AP2"], modules: ["lf11", "lf06", "lf10"],
    render(root, h) {
      shell(root, h, {
        key: "vf",
        practice: {
          key: "vfp",
          types: [["a2d", "Verfügbarkeit → Ausfallzeit"], ["d2a", "Ausfallzeit → Verfügbarkeit"], ["reihe", "Reihenschaltung"], ["parallel", "Parallelschaltung"], ["gemischt", "Gemischte Systeme"], ["mtbf", "MTBF / MTTR"]],
          mix: () => ["a2d", "d2a", "reihe", "parallel", "gemischt", "mtbf"],
          gen: genAvail,
        },
        calcs: availCalcs,
        explain: availExplain,
      });
    },
  });
})();
