/* =====================================================================
   FISI-Lernportal – Rechner & Trainer: Wirtschaft · Logik · Projektplanung
   ---------------------------------------------------------------------
   Registriert vier Tools über LEARN.tool():
     • nutzwertanalyse – Nutzwertanalyse (Rechner + Übungen)
     • kalkulation     – Angebotsvergleich, Bezugs- und Handelskalkulation
     • logik           – Wahrheitstabellen, DNF/KNF, Gatter erkennen
     • netzplan        – Netzplan, Puffer, kritischer Pfad
   Aufbau: 1) CORE – reine Rechenfunktionen ohne DOM (in Node testbar über
              module.exports)
           2) UI-Helfer (Bootstrap 5.3 + App-Klassen, kein eigenes CSS)
           3) die vier Tools
   Sicherheit: kein eval / new Function – der Logik-Parser ist ein eigener
   Recursive-Descent-Parser. Alle Nutzereingaben werden vor der Ausgabe
   mit h.esc() maskiert.
   ===================================================================== */
(function (G) {
  "use strict";

  /* =====================================================================
     1) CORE – reine Funktionen
     ===================================================================== */

  /* ---------- Zahlen & Zufall ---------- */
  const nf = (n, min = 0, max = 2) => Number(n).toLocaleString("de-DE", { minimumFractionDigits: min, maximumFractionDigits: max });
  function roundN(x, d) {
    if (typeof x !== "number" || !Number.isFinite(x)) return x;
    const f = Math.pow(10, d), s = x < 0 ? -1 : 1;
    // toPrecision gleicht Gleitkomma-Reste aus (211,825 × 100 = 21182,4999… → 21182,5)
    return (s * Math.round(Number((Math.abs(x) * f).toPrecision(14)))) / f;
  }
  const round2 = (x) => roundN(x, 2);
  const exact = (x) => x;
  const ri = (rng, a, b) => a + Math.floor(rng() * (b - a + 1));
  const pickR = (rng, arr) => arr[Math.floor(rng() * arr.length)];
  const shuffleR = (rng, arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  /* Eingabe → Zahl. Akzeptiert 1234,56 · 1.234,56 · 1234.56 · „12 %“ · „99 €“; sonst NaN. */
  function defaultParse(s) { s = String(s ?? "").trim().replace(/\s/g, ""); if (s.includes(",")) s = s.replace(/\./g, "").replace(",", "."); const n = parseFloat(s); return Number.isFinite(n) ? n : NaN; }
  function readNum(raw, money = false, parse = defaultParse) {
    let s = String(raw ?? "").trim().replace(/[\s €%]/g, "").replace(/[−–]/g, "-");
    if (!s) return NaN;
    if (money && !s.includes(",") && /^[-+]?\d{1,3}(\.\d{3})+$/.test(s)) s = s.replace(/\./g, "");
    if (!/^[-+]?(\d+([.,]\d*)?|[.,]\d+|\d{1,3}(\.\d{3})+(,\d*)?)$/.test(s)) return NaN;
    const v = parse(s);
    return typeof v === "number" && Number.isFinite(v) ? v : NaN;
  }

  function vNum(errors, v, label, o = {}) {
    const { min = 0, max = Infinity, minEx = false, maxEx = false, unit = "" } = o;
    if (typeof v !== "number" || !Number.isFinite(v)) { errors.push(`${label}: Bitte eine gültige Zahl eintragen.`); return false; }
    if (minEx ? v <= min : v < min) { errors.push(`${label} muss ${minEx ? "größer als" : "mindestens"} ${nf(min)}${unit} sein.`); return false; }
    if (maxEx ? v >= max : v > max) { errors.push(`${label} muss ${maxEx ? "kleiner als" : "höchstens"} ${nf(max)}${unit} sein.`); return false; }
    return true;
  }

  /* ---------- Nutzwertanalyse ---------- */
  /* criteria: [{name, weight (in %)}], alts: [{name, scores: [Punkte je Kriterium]}] */
  function nwaCompute(criteria, alts, scale) {
    const min = scale && Number.isFinite(scale.min) ? scale.min : 0;
    const max = scale && Number.isFinite(scale.max) ? scale.max : 10;
    const errors = [];
    const cn = (c, i) => (c && String(c.name ?? "").trim()) || `Kriterium ${i + 1}`;
    const an = (a, j) => (a && String(a.name ?? "").trim()) || `Alternative ${j + 1}`;
    if (!Array.isArray(criteria) || !criteria.length) errors.push("Lege mindestens ein Kriterium an.");
    if (!Array.isArray(alts) || alts.length < 2) errors.push("Du brauchst mindestens zwei Alternativen, sonst gibt es nichts zu vergleichen.");
    if (errors.length) return { ok: false, errors, weightSum: 0 };
    let weightSum = 0, weightsOk = true;
    criteria.forEach((c, i) => {
      const w = c.weight;
      if (typeof w !== "number" || !Number.isFinite(w)) { errors.push(`„${cn(c, i)}“: Die Gewichtung fehlt oder ist keine Zahl.`); weightsOk = false; }
      else if (w < 0) { errors.push(`„${cn(c, i)}“: Die Gewichtung darf nicht negativ sein.`); weightsOk = false; }
      else weightSum += w;
    });
    weightSum = roundN(weightSum, 6);
    if (weightsOk && Math.abs(weightSum - 100) > 1e-6) {
      const d = roundN(100 - weightSum, 6);
      errors.push(`Die Gewichtungen ergeben zusammen ${nf(weightSum, 0, 4)} % – es müssen genau 100 % sein (${d > 0 ? "es fehlen" : "zu viel"}: ${nf(Math.abs(d), 0, 4)} Prozentpunkte).`);
    }
    alts.forEach((a, j) => criteria.forEach((c, i) => {
      const p = a && Array.isArray(a.scores) ? a.scores[i] : undefined;
      if (typeof p !== "number" || !Number.isFinite(p)) errors.push(`${an(a, j)}: Die Punkte für „${cn(c, i)}“ fehlen.`);
      else if (p < min || p > max) errors.push(`${an(a, j)}: ${nf(p, 0, 4)} Punkte für „${cn(c, i)}“ liegen außerhalb der Skala ${nf(min)}–${nf(max)}.`);
    }));
    if (errors.length) return { ok: false, errors, weightSum };
    const cells = criteria.map((c, i) => alts.map((a) => roundN((c.weight / 100) * a.scores[i], 6)));
    const totals = alts.map((a, j) => roundN(cells.reduce((s, row) => s + row[j], 0), 6));
    const raw = alts.map((a) => roundN(a.scores.reduce((s, p) => s + p, 0), 6));
    const ranks = totals.map((t) => 1 + totals.filter((u) => u > t + 1e-9).length);
    const best = Math.max(...totals);
    const winners = totals.map((t, j) => (Math.abs(t - best) < 1e-9 ? j : -1)).filter((j) => j >= 0);
    const order = totals.map((t, j) => j).sort((x, y) => totals[y] - totals[x] || x - y);
    return { ok: true, errors: [], weightSum, cells, totals, raw, ranks, winners, order };
  }

  const NWA_CASES = [
    { ctx: "Das Vertriebsteam bekommt neue Notebooks.", crit: ["Anschaffungspreis", "Akkulaufzeit", "Gewicht", "Rechenleistung", "Garantie & Service", "Displayqualität"] },
    { ctx: "Für das Büro soll ein Multifunktionsdrucker angeschafft werden.", crit: ["Anschaffungspreis", "Folgekosten (Toner)", "Druckgeschwindigkeit", "Energieverbrauch", "Wartung & Service", "Scan-Funktionen"] },
    { ctx: "Die Firma sucht einen Cloud-Speicher-Anbieter für Projektdaten.", crit: ["Monatliche Kosten", "Speicherplatz", "Datenschutz (Serverstandort EU)", "Verfügbarkeit (SLA)", "Support", "Bedienbarkeit"] },
    { ctx: "Für den Serverraum wird eine neue USV beschafft.", crit: ["Anschaffungspreis", "Überbrückungszeit", "Leistung", "Wartungsvertrag", "Energieeffizienz", "Lautstärke"] },
    { ctx: "Der IT-Support wählt ein neues Ticketsystem aus.", crit: ["Lizenzkosten", "Funktionsumfang", "Bedienbarkeit", "Schnittstellen", "Hersteller-Support", "Datenschutz"] },
    { ctx: "Die Außenstelle erhält eine neue Firewall-Appliance.", crit: ["Anschaffungspreis", "Durchsatz", "VPN-Funktionen", "Update-Garantie", "Bedienoberfläche", "Erweiterbarkeit"] },
  ];
  /* k Gewichte in Schritten von step, je ≥ 10 % und ≤ 50 %, Summe 100 */
  function nwaWeights(k, step, rng = Math.random) {
    const units = Math.round(100 / step), minU = Math.max(1, Math.round(10 / step)), maxU = Math.floor(50 / step);
    const w = Array(k).fill(minU); let rest = units - k * minU;
    while (rest > 0) { const i = Math.floor(rng() * k); if (w[i] < maxU) { w[i]++; rest--; } }
    return w.map((u) => u * step);
  }
  function nwaRandom(level, rng = Math.random) {
    const k = level === 1 ? 3 : level === 2 ? 4 : 5, n = level === 1 ? 2 : 3, step = level === 1 ? 10 : 5;
    const cs = pickR(rng, NWA_CASES);
    let fallback = null;
    for (let t = 0; t < 600; t++) {
      const names = shuffleR(rng, cs.crit).slice(0, k), weights = nwaWeights(k, step, rng);
      const crit = names.map((name, i) => ({ name, weight: weights[i] }));
      const alts = Array.from({ length: n }, (_, j) => ({ name: "Angebot " + "ABC"[j], scores: crit.map(() => ri(rng, 2, 10)) }));
      const res = nwaCompute(crit, alts, { min: 1, max: 10 });
      if (!res.ok || res.winners.length !== 1) continue;
      const sorted = res.totals.slice().sort((a, b) => b - a);
      if (sorted[0] - sorted[1] < 0.1) continue;
      const task = { ctx: cs.ctx, crit, alts, res };
      fallback = fallback || task;
      if (level === 3 && t < 400) { // schwer: Punktsumme ohne Gewichtung soll einen anderen Sieger haben
        const rb = Math.max(...res.raw);
        if (res.raw.filter((x) => x === rb).length === 1 && res.raw.indexOf(rb) === res.winners[0]) continue;
      }
      return task;
    }
    return fallback;
  }

  /* ---------- Kalkulation ---------- */
  /* Bezugskalkulation. o = {menge, preis (je Stück), rabatt %, skonto %, bezugskosten € gesamt}; r = Rundung je Schritt */
  function kBezug(o, r = round2) {
    const menge = o.menge ?? 1, rab = o.rabatt || 0, sko = o.skonto || 0, bk = o.bezugskosten || 0;
    const lep = r(menge * o.preis), rabattEur = r((lep * rab) / 100), zep = r(lep - rabattEur);
    const skontoEur = r((zep * sko) / 100), bep = r(zep - skontoEur), bzp = r(bep + bk);
    return { menge, preis: o.preis, rabatt: rab, skonto: sko, lep, rabattEur, zep, skontoEur, bep, bk, bzp, stk: bzp / menge };
  }
  const kEk = (o, r) => kBezug({ menge: 1, preis: o.lep, rabatt: o.lrabatt, skonto: o.lskonto, bezugskosten: o.bk }, r);
  /* Handelskalkulation vorwärts: Bezugspreis (oder Listeneinkaufspreis) → Listenverkaufspreis brutto */
  function kVor(o, r = round2) {
    let ek = null, bzp = o.bzp;
    if (o.start === "lep") { ek = kEk(o, r); bzp = ek.bzp; }
    const sk0 = o.skonto || 0, pv = o.provision || 0, rb = o.rabatt || 0, ust = o.ust ?? 19;
    const hkEur = r((bzp * o.hk) / 100), sk = r(bzp + hkEur);
    const gEur = r((sk * o.gewinn) / 100), bvp = r(sk + gEur);
    const base = 100 - sk0 - pv; // Barverkaufspreis = base % des Zielverkaufspreises (im Hundert)
    const skEur = r((bvp / base) * sk0), provEur = r((bvp / base) * pv), zvp = r(bvp + skEur + provEur);
    const rEur = r((zvp / (100 - rb)) * rb), lvp = r(zvp + rEur);
    const ustEur = r((lvp * ust) / 100), brutto = r(lvp + ustEur);
    return { ek, bzp, hkEur, sk, gEur, bvp, skEur, provEur, zvp, rEur, lvp, ustEur, brutto };
  }
  /* Verkaufsseite rückwärts: Listenverkaufspreis (brutto/netto) → Barverkaufspreis */
  function kVkBack(o, r = round2) {
    const ust = o.ust ?? 19, rb = o.rabatt || 0, sk0 = o.skonto || 0, pv = o.provision || 0;
    let brutto, ustEur, lvp;
    if (o.brutto) { brutto = o.vk; ustEur = r((brutto / (100 + ust)) * ust); lvp = r(brutto - ustEur); }
    else { lvp = o.vk; ustEur = r((lvp * ust) / 100); brutto = r(lvp + ustEur); }
    const rEur = r((lvp * rb) / 100), zvp = r(lvp - rEur);
    const skEur = r((zvp * sk0) / 100), provEur = r((zvp * pv) / 100), bvp = r(zvp - skEur - provEur);
    return { brutto, ustEur, lvp, rEur, zvp, skEur, provEur, bvp };
  }
  /* Handelskalkulation rückwärts: Listenverkaufspreis → Bezugspreis (optional → Listeneinkaufspreis) */
  function kRueck(o, r = round2) {
    const v = kVkBack(o, r);
    const gEur = r((v.bvp / (100 + o.gewinn)) * o.gewinn), sk = r(v.bvp - gEur);
    const hkEur = r((sk / (100 + o.hk)) * o.hk), bzp = r(sk - hkEur);
    let ek = null;
    if (o.toLep) {
      const bk = o.bk || 0, ls = o.lskonto || 0, lr = o.lrabatt || 0, bep = r(bzp - bk);
      if (!(bep > 0)) ek = { error: `Die Bezugskosten (${nf(bk, 2, 2)} €) sind nicht kleiner als der Bezugspreis (${nf(bzp, 2, 2)} €) – bis zum Listeneinkaufspreis lässt sich so nicht zurückrechnen.` };
      else { const lsEur = r((bep / (100 - ls)) * ls), zep = r(bep + lsEur), lrEur = r((zep / (100 - lr)) * lr), lep = r(zep + lrEur); ek = { bk, bep, lskonto: ls, lsEur, zep, lrabatt: lr, lrEur, lep }; }
    }
    return Object.assign({}, v, { gEur, sk, hkEur, bzp, ek });
  }
  /* Differenzkalkulation: Einkauf vorwärts bis Selbstkosten, Verkauf rückwärts bis Barverkaufspreis */
  function kDiff(o, r = round2) {
    let ek = null, bzp = o.bzp;
    if (o.start === "lep") { ek = kEk(o, r); bzp = ek.bzp; }
    const hkEur = r((bzp * o.hk) / 100), sk = r(bzp + hkEur);
    const v = kVkBack(o, r);
    const gEur = r(v.bvp - sk), gProz = sk ? (gEur / sk) * 100 : 0;
    return Object.assign({}, v, { ek, bzp, hkEur, sk, gEur, gProz });
  }
  function kKennzahlen(bzp, lvp) { return { zuschlag: ((lvp - bzp) / bzp) * 100, faktor: lvp / bzp, spanne: ((lvp - bzp) / lvp) * 100 }; }
  function kValidate(dir, o) {
    const e = [];
    const rate = (v, label) => vNum(e, v, label, { min: 0, max: 100, maxEx: true, unit: " %" });
    if (dir === "bezug") {
      vNum(e, o.menge, "Menge", { min: 0, minEx: true, max: 1e7 });
      vNum(e, o.preis, "Listenpreis", { min: 0, minEx: true, max: 1e9, unit: " €" });
      rate(o.rabatt, "Liefererrabatt"); rate(o.skonto, "Liefererskonto");
      vNum(e, o.bezugskosten, "Bezugskosten", { max: 1e9, unit: " €" });
      return e;
    }
    if (dir === "vor" || dir === "diff") {
      if (o.start === "lep") { vNum(e, o.lep, "Listeneinkaufspreis", { min: 0, minEx: true, max: 1e9, unit: " €" }); rate(o.lrabatt, "Liefererrabatt"); rate(o.lskonto, "Liefererskonto"); vNum(e, o.bk, "Bezugskosten", { max: 1e9, unit: " €" }); }
      else vNum(e, o.bzp, "Bezugspreis", { min: 0, minEx: true, max: 1e9, unit: " €" });
    }
    if (dir === "rueck" || dir === "diff") vNum(e, o.vk, o.brutto ? "Listenverkaufspreis brutto" : "Listenverkaufspreis netto", { min: 0, minEx: true, max: 1e9, unit: " €" });
    vNum(e, o.hk, "Handlungskosten", { min: 0, max: 1000, unit: " %" });
    if (dir !== "diff") vNum(e, o.gewinn, "Gewinnzuschlag", { min: -100, minEx: true, max: 1000, unit: " %" });
    const s1 = rate(o.skonto, "Kundenskonto"), s2 = rate(o.provision, "Vertreterprovision");
    if (s1 && s2 && o.skonto + o.provision >= 100) e.push("Kundenskonto und Vertreterprovision müssen zusammen unter 100 % bleiben.");
    rate(o.rabatt, "Kundenrabatt");
    vNum(e, o.ust, "Umsatzsteuer", { min: 0, max: 100, unit: " %" });
    if (dir === "rueck" && o.toLep) { vNum(e, o.bk, "Bezugskosten", { max: 1e9, unit: " €" }); rate(o.lskonto, "Liefererskonto"); rate(o.lrabatt, "Liefererrabatt"); }
    return e;
  }

  const PRODUCTS = [
    { n: "Notebooks", min: 480, max: 1400 }, { n: "27-Zoll-Monitore", min: 150, max: 460 }, { n: "Dockingstations", min: 90, max: 260 },
    { n: "24-Port-Switches", min: 180, max: 900 }, { n: "NAS-Systeme", min: 300, max: 1200 }, { n: "Firewall-Appliances", min: 450, max: 2400 },
    { n: "Headsets", min: 40, max: 180 }, { n: "Tablets", min: 250, max: 900 }, { n: "Laserdrucker", min: 150, max: 700 }, { n: "Server", min: 1800, max: 6500 },
  ];
  function kGenBezug(rng = Math.random) {
    const p = pickR(rng, PRODUCTS);
    return { prod: p.n, menge: pickR(rng, [5, 10, 12, 20, 25, 40, 50]), preis: round2(ri(rng, p.min, p.max) + pickR(rng, [0, 0, 0.5, 0.9, 0.99])),
      rabatt: pickR(rng, [0, 5, 8, 10, 12, 15, 20]), skonto: pickR(rng, [0, 2, 2, 3]), bezugskosten: pickR(rng, [0, 9.9, 19.9, 24.5, 35, 49, 59.9, 75]) };
  }
  function kGenVergleich(rng = Math.random, n = 3) {
    let last = null;
    for (let t = 0; t < 300; t++) {
      const base = kGenBezug(rng), offers = [];
      for (let j = 0; j < n; j++) {
        const o = j === 0 ? base : kGenBezug(rng);
        offers.push({ name: "Lieferer " + "ABC"[j], menge: base.menge, preis: j === 0 ? base.preis : round2(base.preis * (0.9 + rng() * 0.2)), rabatt: o.rabatt, skonto: o.skonto, bezugskosten: o.bezugskosten });
      }
      const res = offers.map((o) => kBezug(o)), sorted = res.map((x) => x.bzp).sort((a, b) => a - b);
      last = { prod: base.prod, menge: base.menge, offers, res, best: res.findIndex((x) => x.bzp === sorted[0]) };
      if (sorted[1] - sorted[0] >= 1) return last;
    }
    return last;
  }
  function kGenVor(rng = Math.random) {
    const p = pickR(rng, PRODUCTS);
    return { prod: p.n, start: "bzp", bzp: Math.max(5, Math.round((ri(rng, p.min, p.max) * 0.75) / 5) * 5), hk: pickR(rng, [10, 12, 15, 20, 25, 30]),
      gewinn: pickR(rng, [5, 8, 10, 12, 15, 20, 25]), skonto: pickR(rng, [2, 2, 3]), provision: rng() < 0.3 ? pickR(rng, [5, 8, 10]) : 0, rabatt: pickR(rng, [5, 10, 10, 15, 20]), ust: 19 };
  }
  function kGenRueck(rng = Math.random) {
    const v = kGenVor(rng), p = PRODUCTS.find((x) => x.n === v.prod);
    const vk = round2(Math.max(49, Math.round((ri(rng, p.min, p.max) * 1.4) / 10) * 10) - pickR(rng, [0, 1, 0.1]));
    return { prod: v.prod, vk, brutto: true, hk: v.hk, gewinn: v.gewinn, skonto: v.skonto, provision: v.provision, rabatt: v.rabatt, ust: 19 };
  }
  function kGenDiff(rng = Math.random) {
    let o = null;
    for (let t = 0; t < 200; t++) {
      const v = kGenVor(rng), f = kVor(v);
      o = { prod: v.prod, start: "bzp", bzp: v.bzp, hk: v.hk, vk: Math.max(10, Math.round((f.lvp * (0.9 + rng() * 0.2)) / 5) * 5), brutto: false, skonto: v.skonto, provision: v.provision, rabatt: v.rabatt, ust: 19 };
      if (kDiff(o).gEur > 0) return o;
    }
    return o;
  }
  function kGenKennz(rng = Math.random) {
    const p = pickR(rng, PRODUCTS), bzp = Math.max(10, Math.round((ri(rng, p.min, p.max) * 0.7) / 5) * 5);
    return { prod: p.n, bzp, lvp: Math.max(bzp + 5, Math.round((bzp * (1.25 + rng() * 0.9)) / 5) * 5) };
  }

  /* ---------- Logik ---------- */
  const L_KW = { XNOR: "XNOR", NAND: "NAND", NICHT: "NOT", ODER: "OR", AND: "AND", NOR: "NOR", NOT: "NOT", XOR: "XOR", UND: "AND", OR: "OR" };
  const L_SYM2 = { "&&": "AND", "||": "OR" };
  const L_SYM1 = { "∧": "AND", "&": "AND", "*": "AND", "·": "AND", "⋅": "AND", "∨": "OR", "|": "OR", "+": "OR", "¬": "NOT", "!": "NOT", "~": "NOT",
    "⊕": "XOR", "⊻": "XOR", "⊼": "NAND", "↑": "NAND", "⊽": "NOR", "↓": "NOR", "↔": "XNOR", "≡": "XNOR", "⊙": "XNOR" };
  function lErr(msg, pos) { const e = new Error(msg); e.pos = pos; e.logic = true; return e; }
  const lOpTok = (op, pos, raw) => (op === "NOT" ? { k: "not", pos, raw } : { k: "op", op, pos, raw });
  function lTokenize(src) {
    const s = String(src ?? ""), toks = [];
    if (s.length > 300) throw lErr("Der Ausdruck ist zu lang (höchstens 300 Zeichen).", 0);
    let i = 0;
    while (i < s.length) {
      const c = s[i];
      if (/\s/.test(c)) { i++; continue; }
      if (c === "(" || c === "[") { toks.push({ k: "lp", pos: i, raw: c }); i++; continue; }
      if (c === ")" || c === "]") { toks.push({ k: "rp", pos: i, raw: c }); i++; continue; }
      if (c === "'" || c === "’" || c === "̄" || c === "̅") { toks.push({ k: "post", pos: i, raw: c }); i++; continue; }
      if (c === "0" || c === "1") { toks.push({ k: "const", v: +c, pos: i, raw: c }); i++; continue; }
      const two = s.substr(i, 2);
      if (L_SYM2[two]) { toks.push(lOpTok(L_SYM2[two], i, two)); i += 2; continue; }
      if (L_SYM1[c]) { toks.push(lOpTok(L_SYM1[c], i, c)); i++; continue; }
      if (/[A-Za-zÄÖÜäöüß]/.test(c)) {
        let j = i; while (j < s.length && /[A-Za-zÄÖÜäöüß]/.test(s[j])) j++;
        const w = s.slice(i, j), W = w.toUpperCase();
        if (L_KW[W]) toks.push(lOpTok(L_KW[W], i, w));
        else if (/^[A-D]+$/.test(W)) for (let k = 0; k < W.length; k++) toks.push({ k: "var", v: W[k], pos: i + k, raw: w[k] });
        else if (w.length === 1) throw lErr(`Die Variable „${w}“ ist nicht erlaubt – nutze A, B, C oder D.`, i);
        else throw lErr(`Unbekanntes Wort „${w}“ (Position ${i + 1}). Erlaubt sind die Variablen A–D und AND, OR, NOT, XOR, NAND, NOR, XNOR bzw. UND, ODER, NICHT – mit Leerzeichen dazwischen.`, i);
        i = j; continue;
      }
      if (/[2-9]/.test(c)) throw lErr(`Die Zahl „${c}“ gibt es in der Schaltalgebra nicht – nur 0 und 1.`, i);
      throw lErr(`Unbekanntes Zeichen „${c}“ an Position ${i + 1}.`, i);
    }
    return toks;
  }
  /* Rangfolge: NOT > AND/NAND (auch implizit „AB“) > XOR/XNOR > OR/NOR; binär links-assoziativ */
  function lParse(src) {
    let s = String(src ?? "");
    const m = s.match(/^\s*[E-Ze-z][A-Za-z0-9_]*\s*=(?!=)/); // „Q = …“ am Anfang erlauben
    if (m) s = " ".repeat(m[0].length) + s.slice(m[0].length);
    if (!s.trim()) throw lErr("Gib einen Ausdruck ein, z. B. (A AND B) OR NOT C.", 0);
    const t = lTokenize(s);
    let p = 0;
    const isOp = (tk, ...ops) => tk && tk.k === "op" && ops.includes(tk.op);
    const startsOperand = (tk) => tk && (tk.k === "var" || tk.k === "const" || tk.k === "lp" || tk.k === "not");
    function primary() {
      const tk = t[p];
      if (!tk) throw lErr("Der Ausdruck endet zu früh – am Ende fehlt noch eine Variable, 0/1 oder eine Klammer.", s.length);
      if (tk.k === "var") { p++; return { t: "var", v: tk.v }; }
      if (tk.k === "const") { p++; return { t: "const", v: tk.v }; }
      if (tk.k === "lp") {
        p++; const e = orE();
        if (!t[p] || t[p].k !== "rp") throw lErr(`Die Klammer an Position ${tk.pos + 1} wird nicht geschlossen.`, tk.pos);
        p++; return e;
      }
      if (tk.k === "rp") throw lErr(`Vor der „)“ an Position ${tk.pos + 1} fehlt ein Operand.`, tk.pos);
      if (tk.k === "op") throw lErr(`Vor „${tk.raw}“ (Position ${tk.pos + 1}) fehlt ein Operand.`, tk.pos);
      throw lErr(`„${tk.raw}“ (Position ${tk.pos + 1}) muss direkt hinter einer Variablen oder Klammer stehen.`, tk.pos);
    }
    function unary() {
      if (t[p] && t[p].k === "not") { p++; return { t: "not", a: unary() }; }
      let e = primary();
      while (t[p] && t[p].k === "post") { p++; e = { t: "not", a: e }; }
      return e;
    }
    function andE() {
      let e = unary();
      for (;;) {
        const tk = t[p];
        if (isOp(tk, "AND", "NAND")) { p++; e = { t: "bin", op: tk.op, a: e, b: unary() }; }
        else if (startsOperand(tk)) e = { t: "bin", op: "AND", a: e, b: unary() };
        else return e;
      }
    }
    function xorE() { let e = andE(); while (isOp(t[p], "XOR", "XNOR")) { const op = t[p++].op; e = { t: "bin", op, a: e, b: andE() }; } return e; }
    function orE() { let e = xorE(); while (isOp(t[p], "OR", "NOR")) { const op = t[p++].op; e = { t: "bin", op, a: e, b: xorE() }; } return e; }
    const ast = orE();
    if (p < t.length) {
      const tk = t[p];
      throw lErr(tk.k === "rp" ? `Zu viele schließende Klammern (Position ${tk.pos + 1}).` : `Unerwartetes „${tk.raw}“ an Position ${tk.pos + 1}.`, tk.pos);
    }
    return ast;
  }
  function lEval(n, env) {
    if (n.t === "var") return env[n.v] ? 1 : 0;
    if (n.t === "const") return n.v ? 1 : 0;
    if (n.t === "not") return lEval(n.a, env) ? 0 : 1;
    const a = lEval(n.a, env), b = lEval(n.b, env);
    switch (n.op) {
      case "AND": return a & b;
      case "OR": return a | b;
      case "XOR": return a ^ b;
      case "NAND": return (a & b) ^ 1;
      case "NOR": return (a | b) ^ 1;
      case "XNOR": return (a ^ b) ^ 1;
      default: return 0;
    }
  }
  function lVars(n, set = new Set()) { if (n.t === "var") set.add(n.v); if (n.a) lVars(n.a, set); if (n.b) lVars(n.b, set); return [...set].sort(); }
  const L_SYMOUT = { AND: "∧", OR: "∨", XOR: "⊕" };
  const L_NEG = { NAND: "AND", NOR: "OR", XNOR: "XOR" };
  const L_ASSOC = { AND: 1, OR: 1, XOR: 1 };
  /* style "sym": ∧ ∨ ⊕ ¬ (NAND → ¬(… ∧ …)); style "word": AND OR XOR NOT NAND NOR XNOR */
  function lShow(n, style = "sym", parent = null) {
    if (n.t === "var") return n.v;
    if (n.t === "const") return String(n.v);
    if (n.t === "not") {
      const inner = lShow(n.a, style, "NOT");
      const atomic = n.a.t !== "bin" || (style === "sym" && L_NEG[n.a.op]);
      const body = atomic ? inner : `(${inner})`;
      return style === "sym" ? "¬" + body : "NOT " + body;
    }
    if (style === "sym" && L_NEG[n.op]) return "¬(" + lShow({ t: "bin", op: L_NEG[n.op], a: n.a, b: n.b }, style, null) + ")";
    const s = `${lShow(n.a, style, n.op)} ${style === "sym" ? L_SYMOUT[n.op] : n.op} ${lShow(n.b, style, n.op)}`;
    if (parent === null || parent === "NOT" || (parent === n.op && L_ASSOC[n.op])) return s;
    return `(${s})`;
  }
  /* Wahrheitstabelle; Zeile i = Binärzahl der Variablen (A = höchstwertiges Bit) */
  function lTable(ast, withSteps = true) {
    const vars = lVars(ast), n = vars.length, steps = [];
    if (withSteps) {
      const seen = new Set();
      (function walk(x) {
        if (x.t === "var" || x.t === "const") return;
        if (x.a) walk(x.a); if (x.b) walk(x.b);
        if (x === ast) return;
        const key = lShow(x, "sym");
        if (!seen.has(key)) { seen.add(key); steps.push({ key, node: x }); }
      })(ast);
    }
    const rows = [];
    for (let i = 0; i < 1 << n; i++) {
      const env = {};
      const bits = vars.map((v, k) => { const b = (i >> (n - 1 - k)) & 1; env[v] = b; return b; });
      rows.push({ i, bits, steps: steps.map((st) => lEval(st.node, env)), out: lEval(ast, env) });
    }
    return { vars, steps: steps.map((st) => st.key), rows, outs: rows.map((r) => r.out) };
  }
  const lMinterms = (outs) => outs.map((o, i) => (o ? i : -1)).filter((i) => i >= 0);
  const lMaxterms = (outs) => outs.map((o, i) => (o ? -1 : i)).filter((i) => i >= 0);
  const lTok = (style) => (style === "sym" ? { and: " ∧ ", or: " ∨ ", not: "¬" } : { and: " AND ", or: " OR ", not: "NOT " });
  function lDnf(vars, outs, style = "sym") {
    if (!vars.length) return outs[0] ? "1" : "0";
    const ms = lMinterms(outs), T = lTok(style), n = vars.length;
    if (!ms.length) return "0";
    const terms = ms.map((i) => vars.map((v, k) => ((i >> (n - 1 - k)) & 1 ? v : T.not + v)).join(T.and));
    return terms.length === 1 || n === 1 ? terms.join(T.or) : terms.map((x) => `(${x})`).join(T.or);
  }
  function lKnf(vars, outs, style = "sym") {
    if (!vars.length) return outs[0] ? "1" : "0";
    const zs = lMaxterms(outs), T = lTok(style), n = vars.length;
    if (!zs.length) return "1";
    const cl = zs.map((i) => vars.map((v, k) => ((i >> (n - 1 - k)) & 1 ? T.not + v : v)).join(T.or));
    return cl.length === 1 || n === 1 ? cl.join(T.and) : cl.map((x) => `(${x})`).join(T.and);
  }
  /* Quine-McCluskey (n ≤ 4): minimale Überdeckung, Implikanten als Muster wie "1-0" */
  function lMinimize(n, minterms) {
    if (!minterms.length) return [];
    if (minterms.length === 1 << n) return ["-".repeat(n)];
    let cur = minterms.map((m) => ({ s: m.toString(2).padStart(n, "0"), mask: 1 << m }));
    const primes = new Map();
    while (cur.length) {
      const next = new Map(), used = new Array(cur.length).fill(false);
      for (let i = 0; i < cur.length; i++) for (let j = i + 1; j < cur.length; j++) {
        const a = cur[i].s, b = cur[j].s; let d = -1, cnt = 0;
        for (let k = 0; k < n; k++) if (a[k] !== b[k]) { if (a[k] === "-" || b[k] === "-") { cnt = 9; break; } d = k; if (++cnt > 1) break; }
        if (cnt === 1) {
          const s = a.slice(0, d) + "-" + a.slice(d + 1);
          used[i] = used[j] = true;
          if (!next.has(s)) next.set(s, { s, mask: cur[i].mask | cur[j].mask });
        }
      }
      cur.forEach((c, i) => { if (!used[i] && !primes.has(c.s)) primes.set(c.s, c); });
      cur = [...next.values()];
    }
    const P = [...primes.values()].map((x) => ({ s: x.s, mask: x.mask, lits: x.s.replace(/-/g, "").length }));
    const need = minterms.reduce((a, m) => a | (1 << m), 0);
    const chosen = []; let covered = 0;
    for (const m of minterms) {
      const cov = P.filter((x) => x.mask & (1 << m));
      if (cov.length === 1 && !chosen.includes(cov[0])) { chosen.push(cov[0]); covered |= cov[0].mask; }
    }
    let rest = need & ~covered;
    if (rest) {
      const cand = P.filter((x) => !chosen.includes(x) && x.mask & rest);
      if (cand.length <= 16) {
        let best = null;
        for (let sub = 1; sub < 1 << cand.length; sub++) {
          let mk = 0, cnt = 0, lits = 0;
          for (let k = 0; k < cand.length; k++) if (sub & (1 << k)) { mk |= cand[k].mask; cnt++; lits += cand[k].lits; }
          if ((mk & rest) !== rest) continue;
          if (!best || cnt < best.cnt || (cnt === best.cnt && lits < best.lits)) best = { sub, cnt, lits };
        }
        cand.forEach((c, k) => { if (best.sub & (1 << k)) chosen.push(c); });
      } else {
        const pop = (x) => { let c = 0; while (x) { x &= x - 1; c++; } return c; };
        while (rest) {
          let bestC = null;
          for (const c of cand) if (!chosen.includes(c)) { const g = pop(c.mask & rest); if (g && (!bestC || g > bestC.g || (g === bestC.g && c.lits < bestC.c.lits))) bestC = { c, g }; }
          if (!bestC) break;
          chosen.push(bestC.c); rest &= ~bestC.c.mask;
        }
      }
    }
    const low = (mk) => Math.log2(mk & -mk);
    return chosen.sort((a, b) => low(a.mask) - low(b.mask)).map((x) => x.s);
  }
  function lMinForm(vars, outs, style = "sym") {
    const T = lTok(style), imps = lMinimize(vars.length, lMinterms(outs));
    if (!imps.length) return "0";
    const terms = imps.map((s) => { const lits = [...s].map((c, k) => (c === "1" ? vars[k] : c === "0" ? T.not + vars[k] : null)).filter(Boolean); return lits.length ? lits : ["1"]; });
    if (terms.length === 1) return terms[0].join(T.and);
    return terms.map((l) => (l.length > 1 ? `(${l.join(T.and)})` : l[0])).join(T.or);
  }
  function lDepends(ast) {
    const T = lTable(ast, false), n = T.vars.length;
    return T.vars.every((v, k) => T.outs.some((o, i) => o !== T.outs[i ^ (1 << (n - 1 - k))]));
  }
  function lRandom(level, rng = Math.random) {
    const V = level === 1 ? ["A", "B"] : ["A", "B", "C"];
    const leaf = (v, pr) => (rng() < pr ? { t: "not", a: { t: "var", v } } : { t: "var", v });
    const bin = (op, a, b) => ({ t: "bin", op, a, b });
    const basic = ["AND", "OR", "XOR"], all = ["AND", "OR", "XOR", "NAND", "NOR"];
    for (let k = 0; k < 500; k++) {
      let ast;
      if (level === 1) ast = bin(pickR(rng, all), leaf("A", 0.3), leaf("B", 0.3));
      else if (level === 2) {
        const [x, y, z] = shuffleR(rng, V);
        let inner = bin(pickR(rng, basic), leaf(x, 0.25), leaf(y, 0.25));
        if (rng() < 0.2) inner = { t: "not", a: inner };
        ast = rng() < 0.5 ? bin(pickR(rng, basic), inner, leaf(z, 0.3)) : bin(pickR(rng, basic), leaf(z, 0.3), inner);
      } else {
        const vs = shuffleR(rng, V.concat(pickR(rng, V)));
        const l = bin(pickR(rng, all), leaf(vs[0], 0.3), leaf(vs[1], 0.3));
        let r = bin(pickR(rng, all), leaf(vs[2], 0.3), leaf(vs[3], 0.3));
        if (rng() < 0.25) r = { t: "not", a: r };
        ast = bin(pickR(rng, all), l, r);
      }
      if (lVars(ast).length !== V.length) continue;
      const outs = lTable(ast, false).outs;
      if (outs.every((o) => o === outs[0]) || !lDepends(ast)) continue;
      return ast;
    }
    return bin("AND", { t: "var", v: "A" }, { t: "var", v: "B" });
  }
  const GATES = ["AND", "OR", "XOR", "NAND", "NOR", "XNOR"];
  function gateOut(g, bits) {
    const ones = bits.filter(Boolean).length, n = bits.length;
    switch (g) {
      case "AND": return +(ones === n);
      case "OR": return +(ones > 0);
      case "XOR": return ones % 2;
      case "NAND": return +(ones !== n);
      case "NOR": return +(ones === 0);
      case "XNOR": return +(ones % 2 === 0);
      default: return 0;
    }
  }
  function gateTable(g, n) { const outs = []; for (let i = 0; i < 1 << n; i++) outs.push(gateOut(g, Array.from({ length: n }, (_, k) => (i >> (n - 1 - k)) & 1))); return outs; }

  /* ---------- Netzplan ---------- */
  function npSplitPreds(s) {
    if (Array.isArray(s)) return s.map((x) => String(x).trim().toUpperCase()).filter(Boolean);
    const str = String(s ?? "").trim();
    if (!str || /^[-–—]+$/.test(str) || /^(keine?|start|ohne)$/i.test(str)) return [];
    return [...new Set(str.split(/[\s,;/+&]+/).map((x) => x.trim().toUpperCase()).filter((x) => x && !/^[-–—]+$/.test(x)))];
  }
  function npFindCycle(nodes, byId, done) {
    const state = new Map(), stack = []; let found = null;
    const dfs = (id) => {
      state.set(id, 1); stack.push(id);
      for (const s of byId.get(id).succs) {
        if (found) return;
        if (done.has(s)) continue;
        if (state.get(s) === 1) { found = stack.slice(stack.indexOf(s)).concat(s); return; }
        if (!state.get(s)) dfs(s);
      }
      state.set(id, 2); stack.pop();
    };
    for (const n of nodes) if (!found && !done.has(n.id) && !state.get(n.id)) dfs(n.id);
    return found || nodes.filter((n) => !done.has(n.id)).map((n) => n.id);
  }
  /* list: [{id, name, dur (Zahl), preds ("A, B" oder Array)}] – Zeitpunkte ab 0 (wie IHK/ZPA) */
  function npCompute(list) {
    const errors = [];
    if (!Array.isArray(list) || !list.length) return { ok: false, errors: ["Lege mindestens einen Vorgang an."] };
    if (list.length > 60) return { ok: false, errors: ["Höchstens 60 Vorgänge – das reicht für jede Prüfung."] };
    const nodes = [], byId = new Map();
    list.forEach((r, idx) => {
      const id = String(r.id ?? "").trim().toUpperCase(), label = id || `Zeile ${idx + 1}`;
      if (!id) errors.push(`Zeile ${idx + 1}: Das Kürzel fehlt.`);
      else if (!/^[A-Z0-9ÄÖÜ_]{1,8}$/.test(id)) errors.push(`Zeile ${idx + 1}: Das Kürzel „${String(r.id).trim()}“ ist ungültig – nutze Buchstaben/Ziffern ohne Leerzeichen (max. 8 Zeichen).`);
      else if (byId.has(id)) errors.push(`Das Kürzel „${id}“ kommt mehrfach vor.`);
      const dur = typeof r.dur === "number" ? r.dur : NaN;
      if (!Number.isFinite(dur)) errors.push(`${label}: Die Dauer fehlt oder ist keine Zahl.`);
      else if (dur < 0) errors.push(`${label}: Die Dauer darf nicht negativ sein.`);
      else if (dur > 100000) errors.push(`${label}: Die Dauer ist unrealistisch groß.`);
      const node = { id, name: String(r.name ?? "").trim(), dur, predsRaw: npSplitPreds(r.preds), preds: [], succs: [] };
      nodes.push(node);
      if (id && !byId.has(id)) byId.set(id, node);
    });
    for (const n of nodes) {
      for (const p of n.predsRaw) {
        let ps = [p];
        if (!byId.has(p) && p.length > 1 && [...p].every((c) => byId.has(c))) ps = [...p]; // „BC“ = B, C
        for (const q of ps) {
          if (q === n.id) errors.push(`${n.id}: Ein Vorgang kann nicht sein eigener Vorgänger sein.`);
          else if (!byId.has(q)) errors.push(`${n.id || "?"}: Den Vorgänger „${q}“ gibt es nicht.`);
          else if (!n.preds.includes(q)) n.preds.push(q);
        }
      }
    }
    if (errors.length) return { ok: false, errors };
    for (const n of nodes) for (const p of n.preds) byId.get(p).succs.push(n.id);
    const indeg = new Map(nodes.map((n) => [n.id, n.preds.length])), topo = [];
    const queue = nodes.filter((n) => !n.preds.length).map((n) => n.id);
    while (queue.length) {
      const id = queue.shift(); topo.push(id);
      for (const s of byId.get(id).succs) { indeg.set(s, indeg.get(s) - 1); if (indeg.get(s) === 0) queue.push(s); }
    }
    if (topo.length < nodes.length) {
      const cyc = npFindCycle(nodes, byId, new Set(topo));
      return { ok: false, errors: [`Der Netzplan enthält einen Zyklus: ${cyc.join(" → ")}. Ein Vorgang darf nicht (auch nicht über Umwege) von sich selbst abhängen.`], cycle: cyc };
    }
    const r6 = (x) => roundN(x, 6);
    for (const id of topo) {
      const n = byId.get(id);
      n.faz = n.preds.length ? Math.max(...n.preds.map((p) => byId.get(p).fez)) : 0;
      n.fez = r6(n.faz + n.dur);
      n.level = n.preds.length ? 1 + Math.max(...n.preds.map((p) => byId.get(p).level)) : 0;
    }
    const duration = Math.max(...nodes.map((n) => n.fez));
    for (const id of [...topo].reverse()) {
      const n = byId.get(id);
      n.sez = n.succs.length ? Math.min(...n.succs.map((s) => byId.get(s).saz)) : duration;
      n.saz = r6(n.sez - n.dur);
    }
    for (const n of nodes) {
      n.gp = r6(n.saz - n.faz);
      n.fp = r6((n.succs.length ? Math.min(...n.succs.map((s) => byId.get(s).faz)) : duration) - n.fez);
      n.critical = Math.abs(n.gp) < 1e-9;
    }
    const paths = [];
    const walk = (id, path) => {
      if (paths.length >= 50) return;
      const n = byId.get(id);
      const next = n.succs.filter((s) => { const m = byId.get(s); return m.critical && Math.abs(m.faz - n.fez) < 1e-9; });
      if (!next.length) { if (Math.abs(n.fez - duration) < 1e-9) paths.push(path); return; }
      for (const s of next) walk(s, path.concat(s));
    };
    for (const n of nodes) if (!n.preds.length && n.critical) walk(n.id, [n.id]);
    return { ok: true, errors: [], nodes, byId, topo, duration, paths };
  }
  /* „A-B-E-G“, „A, B, E, G“, „A → B“ oder „ABEG“ → ["A","B","E","G"] */
  function npParsePath(str, ids) {
    const toks = String(str ?? "").toUpperCase().split(/[^A-Z0-9ÄÖÜ_]+/).filter(Boolean);
    const known = new Set(ids || []);
    if (toks.length === 1 && !known.has(toks[0]) && [...toks[0]].every((c) => known.has(c))) return [...toks[0]];
    return toks;
  }
  const NP_START = ["Ist-Analyse durchführen", "Anforderungen aufnehmen", "Projekt-Kick-off"];
  const NP_MID = ["Angebote einholen", "Hardware bestellen", "Netzwerk verkabeln", "Server einrichten", "Clients installieren", "Software verteilen", "Datensicherung einrichten",
    "Benutzerkonten anlegen", "Firewall konfigurieren", "Daten migrieren", "WLAN ausleuchten", "Dokumentation erstellen", "Schulung vorbereiten", "Drucker einbinden"];
  const NP_END = ["Test und Abnahme", "Übergabe an den Kunden", "Abnahme und Go-live"];
  function npRandom(count, rng = Math.random) {
    const ids = "ABCDEFGHIJ".slice(0, count).split("");
    let fallback = null;
    for (let t = 0; t < 800; t++) {
      const preds = ids.map(() => []);
      for (let i = 1; i < count; i++) {
        const pool = []; for (let j = Math.max(0, i - 3); j < i; j++) pool.push(j);
        const k = i >= 2 && rng() < (count >= 8 ? 0.45 : 0.35) ? 2 : 1;
        preds[i] = shuffleR(rng, pool).slice(0, Math.min(k, pool.length));
      }
      for (let i = 0; i < count - 1; i++) if (!preds.some((p) => p.includes(i))) { const j = ri(rng, i + 1, Math.min(count - 1, i + 3)); if (!preds[j].includes(i)) preds[j].push(i); }
      const anc = ids.map(() => new Set()); // transitive Kanten entfernen (A→C, wenn schon A→B→C)
      for (let i = 0; i < count; i++) for (const p of preds[i]) { anc[i].add(p); for (const a of anc[p]) anc[i].add(a); }
      for (let i = 0; i < count; i++) preds[i] = preds[i].filter((p) => !preds[i].some((q) => q !== p && anc[q].has(p))).sort((a, b) => a - b);
      const names = [pickR(rng, NP_START)].concat(shuffleR(rng, NP_MID).slice(0, count - 2), [pickR(rng, NP_END)]);
      const tasks = ids.map((id, i) => ({ id, name: names[i], dur: ri(rng, 1, 9), preds: preds[i].map((j) => ids[j]) }));
      const res = npCompute(tasks.map((x) => Object.assign({}, x, { preds: x.preds.join(", ") })));
      if (!res.ok || res.paths.length !== 1 || res.duration > 45) continue;
      const nonCrit = res.nodes.filter((x) => !x.critical).length;
      if (nonCrit < 2) continue;
      fallback = fallback || { tasks, res };
      if (t < 500 && !res.nodes.some((x) => x.fp !== x.gp)) continue; // GP ≠ FP macht die Aufgabe lehrreicher
      return { tasks, res };
    }
    return fallback;
  }

  const CORE = {
    nf, roundN, round2, readNum, nwaCompute, nwaWeights, nwaRandom,
    kBezug, kVor, kVkBack, kRueck, kDiff, kKennzahlen, kValidate, kGenBezug, kGenVergleich, kGenVor, kGenRueck, kGenDiff, kGenKennz,
    lTokenize, lParse, lEval, lVars, lShow, lTable, lMinterms, lDnf, lKnf, lMinimize, lMinForm, lDepends, lRandom, GATES, gateOut, gateTable,
    npSplitPreds, npCompute, npParsePath, npRandom,
  };
  if (typeof module === "object" && module && module.exports) module.exports = CORE;

  const L = G.LEARN;
  if (!L || typeof L.tool !== "function") return;

  /* =====================================================================
     2) UI-Helfer
     ===================================================================== */
  const SCORE = {}; // Zähler „x von y richtig“ – nur im Speicher der Seite
  const CO_ICON = { merke: "bookmark-star", tipp: "lightbulb", achtung: "exclamation-triangle", beispiel: "pencil-square", formel: "calculator", pruefung: "mortarboard" };
  const eur = (n) => nf(n, 2, 2) + " €";
  const n2 = (n) => nf(n, 2, 2);
  const pct = (n, d = 2) => nf(n, 0, d) + " %";
  const coHtml = (kind, html) => `<div class="prose"><div class="callout ${kind}"><i class="bi bi-${CO_ICON[kind]} callout-ico" aria-hidden="true"></i>${html}</div></div>`;
  const tableHtml = (inner) => `<div class="prose"><div class="table-wrap"><table>${inner}</table></div></div>`;
  function errorsHtml(h, errors, title = "Bitte prüfe deine Eingaben:") {
    const list = errors.slice(0, 6).map((e) => `<li>${h.esc(e)}</li>`).join("") + (errors.length > 6 ? `<li>… und ${errors.length - 6} weitere Hinweise</li>` : "");
    return coHtml("achtung", `<strong>${title}</strong><ul class="mb-0 mt-1">${list}</ul>`);
  }
  const num = (h, raw, money = false) => readNum(raw, money, h.parse);
  const numOr = (h, raw, def, money = false) => (String(raw ?? "").trim() === "" ? def : num(h, raw, money));

  /* Grundgerüst: Umschalter Üben/Rechner, Zähler, zwei Bereiche, Erklärung */
  function frame(root, h, key, parts) {
    root.innerHTML = `
      <div class="d-flex flex-wrap gap-2 align-items-center justify-content-between mb-3">
        <div class="seg" role="radiogroup" aria-label="Modus wählen">
          <input type="radio" name="${key}-mode" id="${key}-mode-u" value="u" checked><label for="${key}-mode-u">${h.icon("pencil-square")} Üben</label>
          <input type="radio" name="${key}-mode" id="${key}-mode-r" value="r"><label for="${key}-mode-r">${h.icon("calculator")} Rechner</label>
        </div>
        <span class="chip" data-score aria-live="polite"></span>
      </div>
      <section class="tile tile-pad" data-pane="u" aria-label="Üben">${parts.ueben}</section>
      <section class="tile tile-pad" data-pane="r" aria-label="Rechner" hidden>${parts.rechner}</section>
      <h2 class="section-title">${h.icon("book")} Formeln & Regeln</h2>
      <article class="tile tile-pad prose">${parts.info}</article>`;
    const U = root.querySelector('[data-pane="u"]'), R = root.querySelector('[data-pane="r"]'), chip = root.querySelector("[data-score]");
    const sc = SCORE[key] || (SCORE[key] = { ok: 0, n: 0 });
    const paint = () => { chip.innerHTML = `${h.icon("trophy")} ${sc.ok} von ${sc.n} richtig`; };
    paint();
    root.querySelectorAll(`input[name="${key}-mode"]`).forEach((r) => r.addEventListener("change", () => {
      const u = root.querySelector(`#${key}-mode-u`).checked;
      U.hidden = !u; R.hidden = u; chip.hidden = !u;
    }));
    return { U, R, score(ok) { sc.n++; if (ok) sc.ok++; paint(); } };
  }
  function onEnter(el, fn) {
    el.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" || e.isComposing) return;
      const t = e.target;
      if (t.matches("input:not([type=radio]):not([type=checkbox]), select") && !t.hasAttribute("data-noenter")) { e.preventDefault(); fn(e); }
    });
  }
  function toolbar(h, selects) {
    return `<div class="d-flex flex-wrap gap-2 align-items-end mb-3">${selects.map((s) => `<div><label class="form-label small fw-semi mb-1" for="${s.id}">${s.label}</label><select class="form-select form-select-sm" id="${s.id}">${s.options.map(([v, l]) => `<option value="${v}"${v === s.value ? " selected" : ""}>${l}</option>`).join("")}</select></div>`).join("")}
      <button type="button" class="btn btn-soft btn-sm" data-act="new">${h.icon("arrow-repeat")} Neue Aufgabe</button></div><div data-task></div>`;
  }
  function wirePractice(ui, h, selIds, next) {
    ui.U.querySelector('[data-act="new"]').addEventListener("click", next);
    selIds.forEach((id) => ui.U.querySelector("#" + id).addEventListener("change", next));
    next();
  }
  function taskField(h, f) {
    if (f.kind === "head") return `<div class="col-12"><div class="small-caps mt-2">${f.label}</div></div>`;
    const cls = f.cls || "col-12 col-sm-6 col-lg-4";
    let ctl;
    if (f.kind === "select") ctl = `<select class="form-select" id="${f.id}"><option value="">– bitte wählen –</option>${f.options.map(([v, l]) => `<option value="${h.esc(v)}">${h.esc(l)}</option>`).join("")}</select>`;
    else {
      const inp = `<input class="form-control${f.kind === "text" ? " mono" : ""}" id="${f.id}"${f.kind === "text" ? "" : ' inputmode="decimal"'} autocomplete="off" spellcheck="false"${f.ph ? ` placeholder="${h.esc(f.ph)}"` : ""}>`;
      ctl = f.unit ? `<div class="input-group">${inp}<span class="input-group-text">${f.unit}</span></div>` : inp;
    }
    return `<div class="${cls}"><label class="form-label small fw-semi mb-1" for="${f.id}">${f.label}</label>${ctl}<div class="mt-1" data-fb="${f.id}"></div></div>`;
  }
  function mark(host, h, id, state, sol) {
    const el = host.querySelector("#" + id), fb = host.querySelector(`[data-fb="${id}"]`);
    if (el) { el.classList.toggle("is-valid", state === "ok"); el.classList.toggle("is-invalid", state === "bad"); }
    if (fb) fb.innerHTML = state === "ok" ? `<span class="chip ok">${h.icon("check-lg")} richtig</span>`
      : state === "bad" ? `<span class="chip bad">${h.icon("x-lg")} richtig wäre: ${sol}</span>` : `<span class="chip">${h.icon("lightbulb")} Lösung: ${sol}</span>`;
  }
  /* Generische Übungsaufgabe: task = {intro, fields: [{id, label, kind: num|text|select|head, accept, tol, sol, ok}], solution()} */
  function mountTask(ui, h, host, task) {
    let counted = false;
    const inputs = task.fields.filter((f) => f.kind !== "head");
    host.innerHTML = `${task.intro}
      <div class="row g-2 mt-1">${task.fields.map((f) => taskField(h, f)).join("")}</div>
      <div class="d-flex flex-wrap gap-2 mt-3">
        <button type="button" class="btn btn-accent" data-act="check">${h.icon("check2-circle")} Prüfen</button>
        <button type="button" class="btn btn-ghost" data-act="solve">${h.icon("eye")} Lösung zeigen</button>
      </div>
      <div class="mt-3" data-out aria-live="polite"></div>`;
    const out = host.querySelector("[data-out]");
    const run = (reveal) => {
      const vals = {};
      if (!reveal) {
        const missing = [], bad = [];
        for (const f of inputs) {
          const raw = host.querySelector("#" + f.id).value;
          if (!String(raw).trim()) { missing.push(f.short || f.label); continue; }
          if (f.kind === "select" || f.kind === "text") vals[f.id] = raw;
          else { const v = num(h, raw, f.money); if (!Number.isFinite(v)) bad.push(f.short || f.label); vals[f.id] = v; }
        }
        if (missing.length) { out.innerHTML = coHtml("tipp", `Fülle bitte noch ${missing.length === 1 ? "dieses Feld" : "diese Felder"} aus: ${missing.map((x) => h.esc(x)).join(", ")}.`); return; }
        if (bad.length) { out.innerHTML = coHtml("achtung", `Das ist keine gültige Zahl: ${bad.map((x) => h.esc(x)).join(", ")}. Schreib z. B. <code>1234,56</code> oder <code>1.234,56</code>.`); return; }
      }
      let right = 0;
      for (const f of inputs) {
        let ok = false;
        if (!reveal) ok = f.kind === "select" || f.kind === "text" ? !!f.ok(vals[f.id]) : f.accept.some((a) => Math.abs(vals[f.id] - a) <= (f.tol ?? 0.01) + 1e-9);
        if (ok) right++;
        mark(host, h, f.id, reveal ? "show" : ok ? "ok" : "bad", f.sol);
      }
      const all = !reveal && right === inputs.length;
      if (!counted) { counted = true; ui.score(all); }
      const sol = task.solution();
      out.innerHTML = reveal ? `<div class="result-box"><div class="small-caps mb-2">${h.icon("eye")} Lösung mit Rechenweg</div>${sol}</div>`
        : h.feedback(all, `<p class="mb-2">${all ? "Alle Felder stimmen – stark!" : `${right} von ${inputs.length} Feldern richtig. Vergleiche deinen Weg Schritt für Schritt:`}</p>${sol}`);
    };
    host.onclick = (e) => { const b = e.target.closest("[data-act]"); if (!b || !host.contains(b)) return; if (b.dataset.act === "check") run(false); else if (b.dataset.act === "solve") run(true); };
    host.onkeydown = (e) => { if (e.key === "Enter" && !e.isComposing && e.target.matches("input, select")) { e.preventDefault(); run(false); } };
  }

  /* =====================================================================
     3a) Nutzwertanalyse
     ===================================================================== */
  function nwaSolutionHtml(h, crit, alts, r) {
    const win = new Set(r.winners);
    const w = (c) => nf(c.weight / 100, 2, 6), v = (x) => nf(x, 2, 4);
    const head = `<thead><tr><th>Kriterium</th><th>Gewichtung</th>${alts.map((a, j) => `<th>${h.esc(a.name)}${win.has(j) ? ` <span class="chip ok">${h.icon("trophy")} Sieger</span>` : ""}</th>`).join("")}</tr></thead>`;
    const body = crit.map((c, i) => `<tr><td>${h.esc(c.name)}</td><td class="mono">${nf(c.weight, 0, 4)} %</td>${alts.map((a, j) => `<td class="mono text-nowrap">${nf(a.scores[i], 0, 4)} × ${w(c)} = <strong>${v(r.cells[i][j])}</strong></td>`).join("")}</tr>`).join("");
    const foot = `<tr><td><strong>Nutzwert (Summe)</strong></td><td class="mono">${nf(r.weightSum, 0, 4)} %</td>${alts.map((a, j) => `<td class="mono"><strong>${v(r.totals[j])}</strong></td>`).join("")}</tr>
      <tr><td>Rang</td><td></td>${alts.map((a, j) => `<td>${r.ranks[j]}.</td>`).join("")}</tr>`;
    const lines = alts.map((a, j) => `<li><strong>${h.esc(a.name)}:</strong> <span class="mono">${crit.map((c, i) => `${w(c)} × ${nf(a.scores[i], 0, 4)}`).join(" + ")} = ${v(r.totals[j])}</span></li>`).join("");
    let verdict;
    if (r.winners.length > 1) verdict = `Gleichstand zwischen ${r.winners.map((j) => `<strong>${h.esc(alts[j].name)}</strong>`).join(" und ")}. Entscheide dann nach dem am höchsten gewichteten Kriterium oder nimm ein weiteres Kriterium auf.`;
    else {
      const wi = r.winners[0], sec = r.order[1];
      verdict = `<strong>${h.esc(alts[wi].name)}</strong> hat mit ${v(r.totals[wi])} den höchsten Nutzwert (Vorsprung ${v(roundN(r.totals[wi] - r.totals[sec], 6))} vor ${h.esc(alts[sec].name)}) und sollte gewählt werden.`;
    }
    const rb = Math.max(...r.raw), rawWin = r.raw.indexOf(rb);
    const rawNote = r.raw.filter((x) => x === rb).length === 1 && r.winners.length === 1 && rawWin !== r.winners[0]
      ? `<p class="mb-0 mt-2 small muted">Ohne Gewichtung (reine Punktsumme) läge ${h.esc(alts[rawWin].name)} mit ${nf(rb, 0, 4)} Punkten vorn – erst die Gewichtung dreht das Ergebnis.</p>` : "";
    return `${tableHtml(head + `<tbody>${body}${foot}</tbody>`)}
      <div class="small-caps mb-1">Rechenweg (Gewichtung als Dezimalzahl × Punkte)</div><ol class="small mb-2 ps-3">${lines}</ol>
      <p class="mb-1"><strong>Rangfolge:</strong> ${r.order.map((j) => `${h.esc(alts[j].name)} (${v(r.totals[j])})`).join(" › ")}</p><p class="mb-0">${verdict}</p>${rawNote}`;
  }
  const NWA_EXAMPLE = () => ({
    crit: [["Anschaffungspreis", "30"], ["Leistung", "25"], ["Service & Garantie", "20"], ["Energieeffizienz", "15"], ["Lieferzeit", "10"]].map(([name, w]) => ({ name, w })),
    alts: [{ name: "Lieferer A", p: ["6", "9", "7", "5", "8"] }, { name: "Lieferer B", p: ["9", "6", "6", "8", "7"] }, { name: "Lieferer C", p: ["7", "8", "9", "6", "4"] }],
  });
  const NWA_INFO = `
    <h5>So gehst du vor</h5>
    <ol>
      <li><strong>K.-o.-Kriterien prüfen</strong> – Angebote, die Muss-Anforderungen nicht erfüllen, fliegen vorher raus.</li>
      <li><strong>Kriterien festlegen und gewichten</strong> – in Prozent, zusammen genau 100 %.</li>
      <li><strong>Punkte vergeben</strong> – je Kriterium und Alternative auf einer festen Skala (z. B. 1–10, 10 = sehr gut). Auch beim Preis gilt: günstiger = mehr Punkte.</li>
      <li><strong>Gewichtete Punkte</strong> berechnen und zum <strong>Nutzwert</strong> aufsummieren.</li>
      <li><strong>Entscheiden und begründen</strong> – der höchste Nutzwert gewinnt.</li>
    </ol>
    <div class="callout formel"><strong>Formel</strong><br>gewichtete Punkte = Gewichtung (als Dezimalzahl) × Punkte<br>Nutzwert = Σ (Gewichtung × Punkte)<br>Beispiel: 0,30 × 8 + 0,20 × 5 + 0,50 × 7 = 2,4 + 1,0 + 3,5 = 6,9</div>
    <div class="callout merke"><strong>Merke:</strong> Die Nutzwertanalyse bewertet auch <em>qualitative</em> Kriterien (Service, Bedienbarkeit, Datenschutz), die ein reiner Preisvergleich nicht erfasst. Gewichtung und Punktevergabe sind subjektiv – begründe sie deshalb nachvollziehbar.</div>
    <div class="callout tipp"><strong>Tipp:</strong> Rechnest du mit Prozentzahlen statt Dezimalzahlen (30 × 8 = 240), wird jeder Nutzwert 100-mal so groß – die Rangfolge bleibt gleich. Bleib innerhalb einer Aufgabe bei einer Schreibweise.</div>
    <div class="callout pruefung"><strong>In der Prüfung:</strong> Tabelle vervollständigen, Nutzwerte berechnen und die Entscheidung in ein bis zwei Sätzen begründen – oft kombiniert mit einem Angebotsvergleich (Bezugspreis).</div>`;

  function renderNwa(root, h) {
    const ui = frame(root, h, "nwa", {
      ueben: toolbar(h, [{ id: "nwa-lvl", label: "Schwierigkeit", value: "2", options: [["1", "leicht – 3 Kriterien, 2 Angebote"], ["2", "mittel – 4 Kriterien, 3 Angebote"], ["3", "schwer – 5 Kriterien, 3 Angebote"]] }]),
      rechner: `
        <p class="muted small mb-3">Trag Kriterien, Gewichtungen (zusammen 100 %) und Punkte je Alternative ein – das Ergebnis rechnet sofort mit.</p>
        <div class="d-flex flex-wrap gap-2 align-items-end mb-2">
          <div><label class="form-label small fw-semi mb-1" for="nwa-scale">Punkteskala</label><select class="form-select form-select-sm" id="nwa-scale">
            <option value="1-10" selected>1–10 Punkte</option><option value="0-10">0–10 Punkte</option><option value="1-5">1–5 Punkte</option><option value="0-5">0–5 Punkte</option><option value="1-6">1–6 Punkte</option><option value="0-100">0–100 Punkte</option></select></div>
          <span class="chip mb-1" data-wsum></span>
        </div>
        <div data-editor></div>
        <div class="d-flex flex-wrap gap-2 mt-2">
          <button type="button" class="btn btn-soft btn-sm" data-act="add-c">${h.icon("plus-lg")} Kriterium</button>
          <button type="button" class="btn btn-soft btn-sm" data-act="add-a">${h.icon("plus-lg")} Alternative</button>
          <button type="button" class="btn btn-ghost btn-sm" data-act="example">${h.icon("stars")} Beispiel</button>
          <button type="button" class="btn btn-ghost btn-sm" data-act="clear">${h.icon("eraser")} Leeren</button>
          <button type="button" class="btn btn-accent btn-sm" data-act="calc">${h.icon("calculator")} Berechnen</button>
        </div>
        <div class="mt-3" data-out aria-live="polite"></div>`,
      info: NWA_INFO,
    });

    /* ---- Üben ---- */
    const host = ui.U.querySelector("[data-task]");
    const makeTask = () => {
      const t = nwaRandom(+ui.U.querySelector("#nwa-lvl").value || 2);
      const { crit, alts, res } = t;
      const intro = `<p class="mb-2">${h.esc(t.ctx)} Es liegen ${alts.length} Angebote vor (Punkte: 1 = schlecht bis 10 = sehr gut). Berechne die Nutzwerte und bestimme den Sieger.</p>
        ${tableHtml(`<thead><tr><th>Kriterium</th><th>Gewichtung</th>${alts.map((a) => `<th>${h.esc(a.name)}</th>`).join("")}</tr></thead><tbody>${crit.map((c, i) => `<tr><td>${h.esc(c.name)}</td><td class="mono">${c.weight} %</td>${alts.map((a) => `<td class="mono">${a.scores[i]} P.</td>`).join("")}</tr>`).join("")}</tbody>`)}`;
      const fields = alts.map((a, j) => ({ id: `nwa-u-${j}`, label: `Nutzwert ${h.esc(a.name)}`, short: a.name, accept: [res.totals[j], res.totals[j] * 100], tol: 0.005, sol: nf(res.totals[j], 2, 4), cls: "col-12 col-sm-6 col-md-3" }));
      fields.push({ id: "nwa-u-win", kind: "select", label: "Sieger", short: "Sieger", options: alts.map((a, j) => [String(j), a.name]), ok: (v) => res.winners.includes(+v), sol: h.esc(alts[res.winners[0]].name), cls: "col-12 col-sm-6 col-md-3" });
      return { intro, fields, solution: () => nwaSolutionHtml(h, crit, alts, res) };
    };
    wirePractice(ui, h, ["nwa-lvl"], () => mountTask(ui, h, host, makeTask()));

    /* ---- Rechner ---- */
    const R = ui.R, out = R.querySelector("[data-out]");
    let st = NWA_EXAMPLE();
    const scaleOf = () => { const [a, b] = R.querySelector("#nwa-scale").value.split("-").map(Number); return { min: a, max: b }; };
    function drawEditor() {
      const x = (i) => `<button type="button" class="btn btn-ghost btn-sm" data-del-c="${i}" title="Kriterium entfernen" aria-label="Kriterium ${i + 1} entfernen">${h.icon("x-lg")}</button>`;
      R.querySelector("[data-editor]").innerHTML = tableHtml(`<thead><tr><th>Kriterium</th><th>Gewichtung</th>${st.alts.map((a, j) => `<th><div class="d-flex gap-1 align-items-center"><input class="form-control form-control-sm" data-a="${j}" value="${h.esc(a.name)}" aria-label="Name Alternative ${j + 1}" style="width:8rem">${st.alts.length > 2 ? `<button type="button" class="btn btn-ghost btn-sm" data-del-a="${j}" title="Alternative entfernen" aria-label="Alternative ${j + 1} entfernen">${h.icon("x-lg")}</button>` : ""}</div></th>`).join("")}<th></th></tr></thead>
        <tbody>${st.crit.map((c, i) => `<tr><td><input class="form-control form-control-sm" data-c="${i}" value="${h.esc(c.name)}" placeholder="Kriterium ${i + 1}" aria-label="Name Kriterium ${i + 1}" style="width:11rem"></td>
          <td><div class="input-group input-group-sm flex-nowrap"><input class="form-control mono" data-w="${i}" value="${h.esc(c.w)}" inputmode="decimal" autocomplete="off" aria-label="Gewichtung Kriterium ${i + 1} in Prozent" style="width:4.5rem"><span class="input-group-text">%</span></div></td>
          ${st.alts.map((a, j) => `<td><input class="form-control form-control-sm mono" data-p="${i}-${j}" value="${h.esc(a.p[i] ?? "")}" inputmode="decimal" autocomplete="off" aria-label="Punkte Alternative ${j + 1}, Kriterium ${i + 1}" style="width:4.5rem"></td>`).join("")}
          <td>${st.crit.length > 1 ? x(i) : ""}</td></tr>`).join("")}</tbody>`);
    }
    function calc() {
      const crit = st.crit.map((c, i) => ({ name: c.name.trim() || `Kriterium ${i + 1}`, weight: num(h, c.w) }));
      const alts = st.alts.map((a, j) => ({ name: a.name.trim() || `Alternative ${j + 1}`, scores: st.crit.map((_, i) => num(h, a.p[i])) }));
      const ws = roundN(crit.reduce((s, c) => s + (Number.isFinite(c.weight) ? c.weight : 0), 0), 6);
      const chip = R.querySelector("[data-wsum]");
      chip.className = "chip mb-1 " + (Math.abs(ws - 100) < 1e-6 ? "ok" : "bad");
      chip.innerHTML = `Σ Gewichtung: ${nf(ws, 0, 4)} %`;
      const empty = st.crit.every((c) => !String(c.w).trim()) && st.alts.every((a) => a.p.every((p) => !String(p ?? "").trim()));
      if (empty) { out.innerHTML = coHtml("tipp", "Trag Kriterien, Gewichtungen und Punkte ein – oder lade das Beispiel."); return; }
      const r = nwaCompute(crit, alts, scaleOf());
      out.innerHTML = r.ok ? `<div class="small-caps mb-2">Ergebnis</div>${nwaSolutionHtml(h, crit, alts, r)}` : errorsHtml(h, r.errors);
    }
    R.addEventListener("input", (e) => {
      const t = e.target, d = t.dataset;
      if (d.c !== undefined) st.crit[+d.c].name = t.value;
      else if (d.w !== undefined) st.crit[+d.w].w = t.value;
      else if (d.a !== undefined) st.alts[+d.a].name = t.value;
      else if (d.p !== undefined) { const [i, j] = d.p.split("-").map(Number); st.alts[j].p[i] = t.value; }
      else return;
      calc();
    });
    R.querySelector("#nwa-scale").addEventListener("change", calc);
    R.addEventListener("click", (e) => {
      const b = e.target.closest("button"); if (!b || !R.contains(b)) return;
      const d = b.dataset; let focus = null;
      if (d.act === "add-c") { if (st.crit.length >= 12) return h.toast("Höchstens 12 Kriterien"); st.crit.push({ name: "", w: "" }); st.alts.forEach((a) => a.p.push("")); focus = `[data-c="${st.crit.length - 1}"]`; }
      else if (d.act === "add-a") { if (st.alts.length >= 5) return h.toast("Höchstens 5 Alternativen"); st.alts.push({ name: `Alternative ${st.alts.length + 1}`, p: st.crit.map(() => "") }); focus = `[data-a="${st.alts.length - 1}"]`; }
      else if (d.act === "example") { st = NWA_EXAMPLE(); h.toast("Beispiel geladen"); }
      else if (d.act === "clear") st = { crit: [0, 1, 2].map(() => ({ name: "", w: "" })), alts: [1, 2].map((k) => ({ name: `Alternative ${k}`, p: ["", "", ""] })) };
      else if (d.act === "calc") { calc(); return; }
      else if (d.delC !== undefined) { const i = +d.delC; st.crit.splice(i, 1); st.alts.forEach((a) => a.p.splice(i, 1)); }
      else if (d.delA !== undefined) st.alts.splice(+d.delA, 1);
      else return;
      drawEditor(); calc();
      if (focus) R.querySelector(focus)?.focus();
    });
    onEnter(R, calc);
    drawEditor(); calc();
  }

  /* =====================================================================
     3b) Angebotsvergleich & Kalkulation
     ===================================================================== */
  function schemaTable(h, rows) {
    return tableHtml(`<thead><tr><th></th><th>Position</th><th>%</th><th>Rechenweg</th><th class="text-end">Betrag</th></tr></thead><tbody>${rows.map((r) => r.sep
      ? `<tr><td colspan="5" class="small-caps">${r.sep}</td></tr>`
      : `<tr><td class="mono">${r.op || ""}</td><td>${r.strong ? `<strong>${r.label}</strong>` : r.label}</td><td class="mono text-nowrap">${r.rate !== undefined && r.rate !== null ? pct(r.rate, 4) : ""}</td><td class="mono small">${r.calc || ""}${r.how ? ` <span class="muted">(${r.how})</span>` : ""}</td><td class="mono text-end text-nowrap">${r.strong ? `<strong>${eur(r.val)}</strong>` : eur(r.val)}</td></tr>`).join("")}</tbody>`);
  }
  function rowsBezug(r) {
    return [
      { op: "", label: "Listeneinkaufspreis", calc: r.menge !== 1 ? `${nf(r.menge, 0, 3)} × ${n2(r.preis)}` : "", val: r.lep, strong: true },
      { op: "−", label: "Liefererrabatt", rate: r.rabatt, calc: `${n2(r.lep)} × ${nf(r.rabatt, 0, 4)} %`, how: "vom Hundert", val: r.rabattEur },
      { op: "=", label: "Zieleinkaufspreis", val: r.zep },
      { op: "−", label: "Liefererskonto", rate: r.skonto, calc: `${n2(r.zep)} × ${nf(r.skonto, 0, 4)} %`, how: "vom Hundert", val: r.skontoEur },
      { op: "=", label: "Bareinkaufspreis", val: r.bep },
      { op: "+", label: "Bezugskosten", val: r.bk },
      { op: "=", label: "Bezugspreis (Einstandspreis)", val: r.bzp, strong: true },
    ];
  }
  function rowsVor(o, r) {
    const rows = r.ek ? rowsBezug(r.ek) : [{ op: "", label: "Bezugspreis (Einstandspreis)", val: r.bzp, strong: true }];
    const base = 100 - (o.skonto || 0) - (o.provision || 0), p = (x) => nf(x, 0, 4);
    rows.push(
      { op: "+", label: "Handlungskosten", rate: o.hk, calc: `${n2(r.bzp)} × ${p(o.hk)} %`, how: "vom Hundert", val: r.hkEur },
      { op: "=", label: "Selbstkosten", val: r.sk, strong: true },
      { op: "+", label: o.gewinn < 0 ? "Gewinn (hier Verlust)" : "Gewinn", rate: o.gewinn, calc: `${n2(r.sk)} × ${p(o.gewinn)} %`, how: "vom Hundert", val: r.gEur },
      { op: "=", label: "Barverkaufspreis", val: r.bvp, strong: true },
      { op: "+", label: "Kundenskonto", rate: o.skonto || 0, calc: `${n2(r.bvp)} ÷ ${p(base)} × ${p(o.skonto || 0)}`, how: "im Hundert", val: r.skEur });
    if (o.provision) rows.push({ op: "+", label: "Vertreterprovision", rate: o.provision, calc: `${n2(r.bvp)} ÷ ${p(base)} × ${p(o.provision)}`, how: "im Hundert", val: r.provEur });
    rows.push(
      { op: "=", label: "Zielverkaufspreis", val: r.zvp },
      { op: "+", label: "Kundenrabatt", rate: o.rabatt || 0, calc: `${n2(r.zvp)} ÷ ${p(100 - (o.rabatt || 0))} × ${p(o.rabatt || 0)}`, how: "im Hundert", val: r.rEur },
      { op: "=", label: "Listenverkaufspreis netto", val: r.lvp, strong: true },
      { op: "+", label: "Umsatzsteuer", rate: o.ust, calc: `${n2(r.lvp)} × ${p(o.ust)} %`, how: "vom Hundert", val: r.ustEur },
      { op: "=", label: "Listenverkaufspreis brutto", val: r.brutto, strong: true });
    return rows;
  }
  function rowsVkBack(o, r) {
    const p = (x) => nf(x, 0, 4), rows = [];
    if (o.brutto) rows.push({ op: "", label: "Listenverkaufspreis brutto", val: r.brutto, strong: true },
      { op: "−", label: "Umsatzsteuer", rate: o.ust, calc: `${n2(r.brutto)} ÷ ${p(100 + o.ust)} × ${p(o.ust)}`, how: "auf Hundert", val: r.ustEur });
    rows.push({ op: o.brutto ? "=" : "", label: "Listenverkaufspreis netto", val: r.lvp, strong: true },
      { op: "−", label: "Kundenrabatt", rate: o.rabatt || 0, calc: `${n2(r.lvp)} × ${p(o.rabatt || 0)} %`, how: "vom Hundert", val: r.rEur },
      { op: "=", label: "Zielverkaufspreis", val: r.zvp },
      { op: "−", label: "Kundenskonto", rate: o.skonto || 0, calc: `${n2(r.zvp)} × ${p(o.skonto || 0)} %`, how: "vom Hundert", val: r.skEur });
    if (o.provision) rows.push({ op: "−", label: "Vertreterprovision", rate: o.provision, calc: `${n2(r.zvp)} × ${p(o.provision)} %`, how: "vom Hundert", val: r.provEur });
    rows.push({ op: "=", label: "Barverkaufspreis", val: r.bvp, strong: true });
    return rows;
  }
  function rowsRueck(o, r) {
    const p = (x) => nf(x, 0, 4), rows = rowsVkBack(o, r);
    rows.push(
      { op: "−", label: "Gewinn", rate: o.gewinn, calc: `${n2(r.bvp)} ÷ ${p(100 + o.gewinn)} × ${p(o.gewinn)}`, how: "auf Hundert", val: r.gEur },
      { op: "=", label: "Selbstkosten", val: r.sk, strong: true },
      { op: "−", label: "Handlungskosten", rate: o.hk, calc: `${n2(r.sk)} ÷ ${p(100 + o.hk)} × ${p(o.hk)}`, how: "auf Hundert", val: r.hkEur },
      { op: "=", label: "Bezugspreis (max. Einstandspreis)", val: r.bzp, strong: true });
    if (r.ek && !r.ek.error) rows.push(
      { op: "−", label: "Bezugskosten", val: r.ek.bk },
      { op: "=", label: "Bareinkaufspreis", val: r.ek.bep },
      { op: "+", label: "Liefererskonto", rate: r.ek.lskonto, calc: `${n2(r.ek.bep)} ÷ ${p(100 - r.ek.lskonto)} × ${p(r.ek.lskonto)}`, how: "im Hundert", val: r.ek.lsEur },
      { op: "=", label: "Zieleinkaufspreis", val: r.ek.zep },
      { op: "+", label: "Liefererrabatt", rate: r.ek.lrabatt, calc: `${n2(r.ek.zep)} ÷ ${p(100 - r.ek.lrabatt)} × ${p(r.ek.lrabatt)}`, how: "im Hundert", val: r.ek.lrEur },
      { op: "=", label: "Listeneinkaufspreis (höchstens)", val: r.ek.lep, strong: true });
    return rows;
  }
  function rowsDiff(o, r) {
    const rows = [{ sep: "Einkaufsseite – vorwärts" }].concat(r.ek ? rowsBezug(r.ek) : [{ op: "", label: "Bezugspreis (Einstandspreis)", val: r.bzp, strong: true }]);
    rows.push({ op: "+", label: "Handlungskosten", rate: o.hk, calc: `${n2(r.bzp)} × ${nf(o.hk, 0, 4)} %`, how: "vom Hundert", val: r.hkEur },
      { op: "=", label: "Selbstkosten", val: r.sk, strong: true }, { sep: "Verkaufsseite – rückwärts" });
    rows.push(...rowsVkBack(o, r));
    rows.push({ sep: "Ergebnis" }, { op: "", label: "Barverkaufspreis", val: r.bvp }, { op: "−", label: "Selbstkosten", val: r.sk },
      { op: "=", label: r.gEur < 0 ? "Verlust" : "Gewinn", rate: roundN(r.gProz, 2), calc: `${n2(r.gEur)} ÷ ${n2(r.sk)} × 100 = ${nf(r.gProz, 2, 2)} %`, how: "Gewinnzuschlag", val: r.gEur, strong: true });
    return rows;
  }
  function kennzHtml(bzp, lvp) {
    const k = kKennzahlen(bzp, lvp);
    return `<dl class="kv mb-0">
      <dt>Kalkulationszuschlag</dt><dd>(${n2(lvp)} − ${n2(bzp)}) ÷ ${n2(bzp)} × 100 = <strong>${nf(k.zuschlag, 2, 2)} %</strong></dd>
      <dt>Kalkulationsfaktor</dt><dd>${n2(lvp)} ÷ ${n2(bzp)} = <strong>${nf(k.faktor, 4, 4)}</strong></dd>
      <dt>Handelsspanne</dt><dd>(${n2(lvp)} − ${n2(bzp)}) ÷ ${n2(lvp)} × 100 = <strong>${nf(k.spanne, 2, 2)} %</strong></dd></dl>`;
  }
  function avTableHtml(h, names, res) {
    const stk = res.map((r) => r.bzp / r.menge), min = Math.min(...stk);
    const best = stk.map((s, j) => (Math.abs(s - min) < 1e-9 ? j : -1)).filter((j) => j >= 0);
    const defs = [
      ["", "Listeneinkaufspreis", (r) => r.lep, (r) => (r.menge !== 1 ? `${nf(r.menge, 0, 3)} × ${n2(r.preis)}` : "")],
      ["−", "Liefererrabatt", (r) => r.rabattEur, (r) => `${nf(r.rabatt, 0, 4)} % von ${n2(r.lep)}`],
      ["=", "Zieleinkaufspreis", (r) => r.zep],
      ["−", "Liefererskonto", (r) => r.skontoEur, (r) => `${nf(r.skonto, 0, 4)} % von ${n2(r.zep)}`],
      ["=", "Bareinkaufspreis", (r) => r.bep],
      ["+", "Bezugskosten", (r) => r.bk],
      ["=", "Bezugspreis gesamt", (r) => r.bzp, null, true],
      ["", "Bezugspreis je Stück", (r) => round2(r.bzp / r.menge), (r) => (r.menge !== 1 ? `${n2(r.bzp)} ÷ ${nf(r.menge, 0, 3)}` : ""), true],
    ];
    const head = `<thead><tr><th></th><th>Position</th>${names.map((n, j) => `<th class="text-end">${h.esc(n)}${best.includes(j) && best.length < names.length ? `<br><span class="chip ok">${h.icon("trophy")} günstigstes</span>` : ""}</th>`).join("")}</tr></thead>`;
    const body = defs.map(([op, label, val, calc, strong]) => `<tr><td class="mono">${op}</td><td>${strong ? `<strong>${label}</strong>` : label}</td>${res.map((r) => `<td class="text-end mono text-nowrap">${strong ? `<strong>${eur(val(r))}</strong>` : eur(val(r))}${calc && calc(r) ? `<div class="small muted">${calc(r)}</div>` : ""}</td>`).join("")}</tr>`).join("");
    let verdict;
    if (best.length === names.length && names.length > 1) verdict = "Alle Angebote kosten je Stück gleich viel – entscheide nach qualitativen Kriterien.";
    else if (best.length > 1) verdict = `Gleichstand beim Bezugspreis zwischen ${best.map((j) => `<strong>${h.esc(names[j])}</strong>`).join(" und ")}.`;
    else {
      const b = best[0], others = stk.filter((_, j) => j !== b);
      verdict = names.length > 1 ? `Das günstigste Angebot ist <strong>${h.esc(names[b])}</strong> mit ${eur(round2(stk[b]))} je Stück – ${eur(round2(Math.min(...others) - stk[b]))} je Stück günstiger als das nächstbeste.` : `Bezugspreis: ${eur(res[0].bzp)} gesamt.`;
    }
    return `${tableHtml(head + `<tbody>${body}</tbody>`)}<p class="mb-1">${verdict}</p><p class="small muted mb-0">Verglichen wird der Bezugspreis je Stück. Lieferzeit, Service oder Qualität bewertest du zusätzlich mit einer <a href="#/tools/nutzwertanalyse">Nutzwertanalyse</a>.</p>`;
  }

  function kalkTask(h, type, rng = Math.random) {
    const types = ["bezug", "vergleich", "vor", "rueck", "diff", "kennz"];
    if (!types.includes(type)) type = pickR(rng, types);
    const mf = (id, label, v, vx) => ({ id, label, short: label, unit: "€", money: true, accept: [v, vx], tol: 0.01, sol: eur(v) });
    const given = (pairs) => `<div class="result-box mb-2"><dl class="kv mb-0">${pairs.filter(Boolean).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}</dl></div>`;
    const badge = (t) => `<p class="mb-2"><span class="chip">${t}</span></p>`;
    const rates = (o) => [["Handlungskosten", pct(o.hk)], o.gewinn !== undefined ? ["Gewinnzuschlag", pct(o.gewinn)] : null, ["Kundenskonto", pct(o.skonto)], o.provision ? ["Vertreterprovision", pct(o.provision)] : null, ["Kundenrabatt", pct(o.rabatt)], ["Umsatzsteuer", pct(o.ust)]];
    const round = "Runde jeden Zwischenschritt auf Cent (Toleranz ±0,01 €).";
    if (type === "bezug") {
      const o = kGenBezug(rng), r = kBezug(o), x = kBezug(o, exact);
      return { intro: `${badge("Bezugskalkulation")}<p class="mb-2">Du bestellst <strong>${o.menge} ${o.prod}</strong>. Berechne den Bezugspreis. ${round}</p>
          ${given([["Listenpreis je Stück", eur(o.preis)], ["Menge", `${o.menge} Stück`], ["Liefererrabatt", pct(o.rabatt)], ["Liefererskonto", pct(o.skonto)], ["Bezugskosten (gesamt)", o.bezugskosten ? eur(o.bezugskosten) : "0,00 € (frei Haus)"]])}`,
        fields: [mf("k-zep", "Zieleinkaufspreis", r.zep, x.zep), mf("k-bep", "Bareinkaufspreis", r.bep, x.bep), mf("k-bzp", "Bezugspreis gesamt", r.bzp, x.bzp), mf("k-stk", "Bezugspreis je Stück", round2(r.bzp / o.menge), x.bzp / o.menge)],
        solution: () => `${schemaTable(h, rowsBezug(r))}<p class="mb-0 mono small">Je Stück: ${n2(r.bzp)} ÷ ${o.menge} = ${eur(round2(r.bzp / o.menge))}</p>` };
    }
    if (type === "vergleich") {
      const g = kGenVergleich(rng, rng() < 0.5 ? 2 : 3), xs = g.offers.map((o) => kBezug(o, exact)), names = g.offers.map((o) => o.name);
      const tbl = tableHtml(`<thead><tr><th></th>${names.map((n) => `<th>${n}</th>`).join("")}</tr></thead><tbody>
        <tr><td>Listenpreis je Stück</td>${g.offers.map((o) => `<td class="mono">${eur(o.preis)}</td>`).join("")}</tr>
        <tr><td>Liefererrabatt</td>${g.offers.map((o) => `<td class="mono">${pct(o.rabatt)}</td>`).join("")}</tr>
        <tr><td>Liefererskonto</td>${g.offers.map((o) => `<td class="mono">${pct(o.skonto)}</td>`).join("")}</tr>
        <tr><td>Bezugskosten (gesamt)</td>${g.offers.map((o) => `<td class="mono">${eur(o.bezugskosten)}</td>`).join("")}</tr></tbody>`);
      return { intro: `${badge("Angebotsvergleich")}<p class="mb-2">Für <strong>${g.menge} ${g.prod}</strong> liegen ${names.length} Angebote vor. Ermittle jeweils den Bezugspreis (gesamt) und das günstigste Angebot. ${round}</p>${tbl}`,
        fields: g.offers.map((o, j) => mf(`k-v${j}`, `Bezugspreis ${o.name}`, g.res[j].bzp, xs[j].bzp)).concat([{ id: "k-vbest", kind: "select", label: "Günstigstes Angebot", short: "Günstigstes Angebot", options: names.map((n, j) => [String(j), n]), ok: (v) => +v === g.best, sol: names[g.best] }]),
        solution: () => avTableHtml(h, names, g.res) };
    }
    if (type === "vor") {
      const o = kGenVor(rng), r = kVor(o), x = kVor(o, exact);
      return { intro: `${badge("Handelskalkulation vorwärts")}<p class="mb-2">Ihr verkauft <strong>${o.prod}</strong>. Kalkuliere ausgehend vom Bezugspreis je Stück den Listenverkaufspreis. ${round}</p>${given([["Bezugspreis", eur(o.bzp)], ...rates(o)])}`,
        fields: [mf("k-sk", "Selbstkosten", r.sk, x.sk), mf("k-bvp", "Barverkaufspreis", r.bvp, x.bvp), mf("k-zvp", "Zielverkaufspreis", r.zvp, x.zvp), mf("k-lvp", "Listenverkaufspreis netto", r.lvp, x.lvp), mf("k-br", "Listenverkaufspreis brutto", r.brutto, x.brutto)],
        solution: () => `${schemaTable(h, rowsVor(o, r))}${coHtml("merke", "Kundenskonto (und Provision) sowie Kundenrabatt werden <strong>im Hundert</strong> gerechnet: Der bekannte Wert ist kleiner als 100 %.")}` };
    }
    if (type === "rueck") {
      const o = kGenRueck(rng), r = kRueck(o), x = kRueck(o, exact);
      return { intro: `${badge("Handelskalkulation rückwärts")}<p class="mb-2">Der Markt lässt für <strong>${o.prod}</strong> nur einen Bruttoverkaufspreis von <strong>${eur(o.vk)}</strong> je Stück zu. Wie hoch darf der Bezugspreis höchstens sein? ${round}</p>${given([["Listenverkaufspreis brutto", eur(o.vk)], ...rates(o)])}`,
        fields: [mf("k-lvp", "Listenverkaufspreis netto", r.lvp, x.lvp), mf("k-zvp", "Zielverkaufspreis", r.zvp, x.zvp), mf("k-bvp", "Barverkaufspreis", r.bvp, x.bvp), mf("k-sk", "Selbstkosten", r.sk, x.sk), mf("k-bzp", "Bezugspreis (max.)", r.bzp, x.bzp)],
        solution: () => `${schemaTable(h, rowsRueck(o, r))}${coHtml("merke", "Rückwärts werden Rabatt und Skonto <strong>vom Hundert</strong> abgezogen, Umsatzsteuer, Gewinn und Handlungskosten <strong>auf Hundert</strong> herausgerechnet (Wert ÷ (100 + p) × p).")}` };
    }
    if (type === "diff") {
      const o = kGenDiff(rng), r = kDiff(o), x = kDiff(o, exact);
      return { intro: `${badge("Differenzkalkulation")}<p class="mb-2">Einkaufspreis und Verkaufspreis für <strong>${o.prod}</strong> stehen fest. Wie viel Gewinn bleibt je Stück übrig? ${round}</p>${given([["Bezugspreis", eur(o.bzp)], ["Listenverkaufspreis netto", eur(o.vk)], ...rates(Object.assign({}, o, { gewinn: undefined }))])}`,
        fields: [mf("k-sk", "Selbstkosten", r.sk, x.sk), mf("k-bvp", "Barverkaufspreis", r.bvp, x.bvp), mf("k-g", "Gewinn in €", r.gEur, x.gEur),
          { id: "k-gp", label: "Gewinnzuschlag", short: "Gewinnzuschlag", unit: "%", accept: [r.gProz, x.gProz], tol: 0.05, sol: nf(r.gProz, 2, 2) + " %" }],
        solution: () => schemaTable(h, rowsDiff(o, r)) };
    }
    const o = kGenKennz(rng), k = kKennzahlen(o.bzp, o.lvp);
    return { intro: `${badge("Kalkulationszuschlag, -faktor & Handelsspanne")}<p class="mb-2">Für <strong>${o.prod}</strong> kennst du Bezugspreis und Listenverkaufspreis (netto). Berechne die drei Kennzahlen (Prozentwerte auf zwei Nachkommastellen).</p>${given([["Bezugspreis", eur(o.bzp)], ["Listenverkaufspreis netto", eur(o.lvp)]])}`,
      fields: [{ id: "k-kz", label: "Kalkulationszuschlag", short: "Kalkulationszuschlag", unit: "%", accept: [k.zuschlag], tol: 0.05, sol: nf(k.zuschlag, 2, 2) + " %" },
        { id: "k-kf", label: "Kalkulationsfaktor", short: "Kalkulationsfaktor", accept: [k.faktor], tol: 0.005, sol: nf(k.faktor, 4, 4) },
        { id: "k-hs", label: "Handelsspanne", short: "Handelsspanne", unit: "%", accept: [k.spanne], tol: 0.05, sol: nf(k.spanne, 2, 2) + " %" }],
      solution: () => `${kennzHtml(o.bzp, o.lvp)}${coHtml("tipp", "Kalkulationsfaktor = 1 + Kalkulationszuschlag ÷ 100. Zuschlag und Spanne haben denselben Zähler – nur der Nenner ist verschieden (Bezugspreis bzw. Verkaufspreis).")}` };
  }
  const AV_EXAMPLE = () => [
    { name: "Lieferer A", menge: "20", preis: "189,00", rabatt: "10", skonto: "2", bk: "35,00" },
    { name: "Lieferer B", menge: "20", preis: "179,90", rabatt: "5", skonto: "3", bk: "0" },
    { name: "Lieferer C", menge: "20", preis: "199,00", rabatt: "15", skonto: "0", bk: "24,90" },
  ];
  const HK_EXAMPLE = { start: "lep", bzp: "1.108,00", lep: "1.250,00", lrabatt: "12", lskonto: "2", bk: "30,00", hk: "20", gewinn: "15", vkart: "brutto", vk: "1.999,00", kskonto: "2", prov: "0", krabatt: "10", ust: "19" };
  const KALK_INFO = `
    <div class="grid-2">
      <div><h6>Bezugskalkulation (Einkauf)</h6>
        <div class="callout formel">Listeneinkaufspreis<br>− Liefererrabatt<br>= Zieleinkaufspreis<br>− Liefererskonto<br>= Bareinkaufspreis<br>+ Bezugskosten (Fracht, Verpackung …)<br>= Bezugspreis (Einstandspreis)</div></div>
      <div><h6>Handelskalkulation (Verkauf)</h6>
        <div class="callout formel">Bezugspreis<br>+ Handlungskosten<br>= Selbstkosten<br>+ Gewinn<br>= Barverkaufspreis<br>+ Kundenskonto (+ Provision) – im Hundert<br>= Zielverkaufspreis<br>+ Kundenrabatt – im Hundert<br>= Listenverkaufspreis netto<br>+ Umsatzsteuer 19 %<br>= Listenverkaufspreis brutto</div></div>
    </div>
    <div class="callout merke"><strong>Merke – vom, im und auf Hundert:</strong>
      <ul class="mb-0">
        <li><em>vom Hundert</em>: Der bekannte Wert ist 100 % → Wert × p ÷ 100 (Rabatt und Skonto im Einkauf, Handlungskosten und Gewinn vorwärts).</li>
        <li><em>im Hundert</em>: Der bekannte Wert ist <strong>kleiner</strong> als 100 % (z. B. Barverkaufspreis = 98 % des Zielverkaufspreises) → Wert ÷ (100 − p) × p. Gilt vorwärts für Kundenskonto, Provision und Kundenrabatt.</li>
        <li><em>auf Hundert</em>: Der bekannte Wert ist <strong>größer</strong> als 100 % (z. B. brutto = 119 %) → Wert ÷ (100 + p) × p. Gilt rückwärts für Umsatzsteuer, Gewinn und Handlungskosten.</li>
      </ul></div>
    <div class="callout formel"><strong>Kennzahlen</strong><br>Kalkulationszuschlag = (Listenverkaufspreis netto − Bezugspreis) ÷ Bezugspreis × 100<br>Kalkulationsfaktor = Listenverkaufspreis netto ÷ Bezugspreis<br>Handelsspanne = (Listenverkaufspreis netto − Bezugspreis) ÷ Listenverkaufspreis netto × 100<br>Gewinnzuschlag (Differenzkalkulation) = Gewinn ÷ Selbstkosten × 100</div>
    <div class="callout tipp"><strong>Warum im Hundert?</strong> Der Kunde zieht Skonto und Rabatt vom <em>höheren</em> Preis ab. Damit danach genau dein Barverkaufspreis übrig bleibt, muss der Aufschlag auf diesen höheren Preis bezogen werden.</div>
    <div class="callout achtung"><strong>Typische Fehler:</strong> Kundenskonto vom Barverkaufspreis rechnen (vom statt im Hundert) · beim Rückwärtsrechnen 19 % vom Bruttopreis abziehen statt brutto ÷ 1,19 · Bezugskosten im Angebotsvergleich vergessen · Angebote mit unterschiedlichen Mengen nicht je Stück vergleichen.</div>
    <div class="callout pruefung"><strong>In der Prüfung:</strong> Schema vollständig aufschreiben und jeden Zwischenschritt auf Cent runden – auch Teilschritte bringen Punkte.</div>`;

  function renderKalk(root, h) {
    const hkF = (k, label, unit, vis) => `<div class="col-12 col-sm-6 col-lg-4" data-vis="${vis}"><label class="form-label small fw-semi mb-1" for="hk-${k}">${label}</label><div class="input-group"><input class="form-control" id="hk-${k}" data-k="${k}" value="${HK_EXAMPLE[k] ?? ""}" inputmode="decimal" autocomplete="off"><span class="input-group-text">${unit}</span></div></div>`;
    const ui = frame(root, h, "kalk", {
      ueben: toolbar(h, [{ id: "kalk-typ", label: "Aufgabentyp", value: "mix", options: [["mix", "Zufall (alle Typen)"], ["bezug", "Bezugskalkulation"], ["vergleich", "Angebotsvergleich"], ["vor", "Handelskalkulation vorwärts"], ["rueck", "Handelskalkulation rückwärts"], ["diff", "Differenzkalkulation"], ["kennz", "Zuschlag, Faktor, Spanne"]] }]),
      rechner: `
        <div class="seg mb-3" role="radiogroup" aria-label="Rechner wählen">
          <input type="radio" name="kalk-sub" id="kalk-sub-av" value="av" checked><label for="kalk-sub-av">${h.icon("layout-three-columns")} Angebotsvergleich</label>
          <input type="radio" name="kalk-sub" id="kalk-sub-hk" value="hk"><label for="kalk-sub-hk">${h.icon("list-ol")} Handelskalkulation</label>
        </div>
        <div data-sub="av">
          <p class="muted small mb-2">Bis zu drei Angebote nebeneinander: Die Bezugskalkulation zeigt, welches Angebot inklusive Rabatt, Skonto und Bezugskosten am günstigsten ist.</p>
          <div class="row g-2" data-offers></div>
          <div class="d-flex flex-wrap gap-2 mt-3">
            <button type="button" class="btn btn-soft btn-sm" data-act="add-o">${h.icon("plus-lg")} Angebot</button>
            <button type="button" class="btn btn-ghost btn-sm" data-act="ex-av">${h.icon("stars")} Beispiel</button>
            <button type="button" class="btn btn-accent btn-sm" data-act="calc-av">${h.icon("calculator")} Berechnen</button>
          </div>
          <div class="mt-3" data-out-av aria-live="polite"></div>
        </div>
        <div data-sub="hk" hidden>
          <div class="seg mb-2" role="radiogroup" aria-label="Rechenrichtung">
            <input type="radio" name="hk-dir" id="hk-dir-vor" value="vor" checked><label for="hk-dir-vor">Vorwärts</label>
            <input type="radio" name="hk-dir" id="hk-dir-rueck" value="rueck"><label for="hk-dir-rueck">Rückwärts</label>
            <input type="radio" name="hk-dir" id="hk-dir-diff" value="diff"><label for="hk-dir-diff">Differenz</label>
          </div>
          <p class="small muted mb-3" data-dirhint></p>
          <div class="d-flex flex-column gap-3">
            <div data-grp="ek"><div class="small-caps mb-1">Einkauf</div><div class="row g-2">
              <div class="col-12 col-sm-6 col-lg-4" data-vis="start"><label class="form-label small fw-semi mb-1" for="hk-start">Ausgangswert</label><select class="form-select" id="hk-start" data-k="start"><option value="lep" selected>Listeneinkaufspreis (mit Bezugskalkulation)</option><option value="bzp">Bezugspreis ist bekannt</option></select></div>
              <div class="col-12" data-vis="tolep"><div class="form-check"><input class="form-check-input" type="checkbox" id="hk-tolep" data-k="tolep"><label class="form-check-label small" for="hk-tolep">weiter bis zum Listeneinkaufspreis zurückrechnen</label></div></div>
              ${hkF("bzp", "Bezugspreis", "€", "bzp")}${hkF("lep", "Listeneinkaufspreis", "€", "lep")}${hkF("lrabatt", "Liefererrabatt", "%", "lcond")}${hkF("lskonto", "Liefererskonto", "%", "lcond")}${hkF("bk", "Bezugskosten", "€", "lcond")}
            </div></div>
            <div data-grp="zu"><div class="small-caps mb-1">Zuschläge</div><div class="row g-2">${hkF("hk", "Handlungskosten", "%", "all")}${hkF("gewinn", "Gewinnzuschlag", "%", "gewinn")}</div></div>
            <div data-grp="vk"><div class="small-caps mb-1">Verkauf</div><div class="row g-2">
              <div class="col-12 col-sm-6 col-lg-4" data-vis="vk"><label class="form-label small fw-semi mb-1" for="hk-vk">Listenverkaufspreis</label><div class="input-group"><input class="form-control" id="hk-vk" data-k="vk" value="${HK_EXAMPLE.vk}" inputmode="decimal" autocomplete="off"><select class="form-select flex-grow-0 w-auto" id="hk-vkart" data-k="vkart" aria-label="brutto oder netto"><option value="brutto" selected>brutto</option><option value="netto">netto</option></select></div></div>
              ${hkF("kskonto", "Kundenskonto", "%", "all")}${hkF("prov", "Vertreterprovision (optional)", "%", "all")}${hkF("krabatt", "Kundenrabatt", "%", "all")}${hkF("ust", "Umsatzsteuer", "%", "all")}
            </div></div>
          </div>
          <div class="d-flex flex-wrap gap-2 mt-3">
            <button type="button" class="btn btn-accent btn-sm" data-act="calc-hk">${h.icon("calculator")} Berechnen</button>
            <button type="button" class="btn btn-ghost btn-sm" data-act="ex-hk">${h.icon("stars")} Beispielwerte</button>
          </div>
          <div class="mt-3" data-out-hk aria-live="polite"></div>
        </div>`,
      info: KALK_INFO,
    });

    /* ---- Üben ---- */
    const host = ui.U.querySelector("[data-task]");
    wirePractice(ui, h, ["kalk-typ"], () => mountTask(ui, h, host, kalkTask(h, ui.U.querySelector("#kalk-typ").value)));

    /* ---- Rechner: Angebotsvergleich ---- */
    const R = ui.R;
    let offers = AV_EXAMPLE();
    const OF = [["menge", "Menge", "Stück"], ["preis", "Listenpreis je Stück", "€"], ["rabatt", "Liefererrabatt", "%"], ["skonto", "Liefererskonto", "%"], ["bk", "Bezugskosten gesamt", "€"]];
    function drawOffers() {
      R.querySelector("[data-offers]").innerHTML = offers.map((o, j) => `<div class="col-12 col-md-6 col-lg-4"><div class="result-box h-100">
        <div class="d-flex gap-2 align-items-center mb-2"><input class="form-control form-control-sm fw-semi" data-o="${j}" data-f="name" value="${h.esc(o.name)}" aria-label="Name Angebot ${j + 1}">${offers.length > 1 ? `<button type="button" class="btn btn-ghost btn-sm" data-del-o="${j}" title="Angebot entfernen" aria-label="Angebot ${j + 1} entfernen">${h.icon("x-lg")}</button>` : ""}</div>
        ${OF.map(([f, l, u]) => `<label class="form-label small mb-1" for="av-${j}-${f}">${l}</label><div class="input-group input-group-sm mb-2"><input class="form-control" id="av-${j}-${f}" data-o="${j}" data-f="${f}" value="${h.esc(o[f])}" inputmode="decimal" autocomplete="off"><span class="input-group-text">${u}</span></div>`).join("")}
      </div></div>`).join("");
    }
    function calcAv() {
      const outEl = R.querySelector("[data-out-av]"), errors = [], res = [];
      offers.forEach((o, j) => {
        const nm = o.name.trim() || `Angebot ${j + 1}`;
        const x = { menge: numOr(h, o.menge, 1), preis: num(h, o.preis, true), rabatt: numOr(h, o.rabatt, 0), skonto: numOr(h, o.skonto, 0), bezugskosten: numOr(h, o.bk, 0, true) };
        const e = kValidate("bezug", x);
        errors.push(...e.map((m) => `${nm}: ${m}`));
        res.push(e.length ? null : kBezug(x));
      });
      outEl.innerHTML = errors.length ? errorsHtml(h, errors) : `<div class="small-caps mb-2">Bezugskalkulation</div>${avTableHtml(h, offers.map((o, j) => o.name.trim() || `Angebot ${j + 1}`), res)}`;
    }

    /* ---- Rechner: Handelskalkulation ---- */
    const dirOf = () => R.querySelector('input[name="hk-dir"]:checked').value;
    const HINT = {
      vor: "Vorwärts: vom Einkaufspreis zum Listenverkaufspreis – „Was muss ich verlangen?“",
      rueck: "Rückwärts: vom Marktpreis zum höchstens zulässigen Bezugspreis – „Was darf ich im Einkauf zahlen?“",
      diff: "Differenz: Einkauf vorwärts bis zu den Selbstkosten, Verkauf rückwärts bis zum Barverkaufspreis – der Rest ist der Gewinn.",
    };
    function syncHk() {
      const dir = dirOf(), start = R.querySelector("#hk-start").value, toLep = R.querySelector("#hk-tolep").checked;
      const vis = { all: true, start: dir !== "rueck", tolep: dir === "rueck", bzp: dir !== "rueck" && start === "bzp", lep: dir !== "rueck" && start === "lep", lcond: dir !== "rueck" ? start === "lep" : toLep, gewinn: dir !== "diff", vk: dir !== "vor" };
      R.querySelectorAll('[data-sub="hk"] [data-vis]').forEach((el) => { el.hidden = !vis[el.dataset.vis]; });
      R.querySelector('[data-grp="vk"]').classList.toggle("order-first", dir === "rueck");
      R.querySelector("[data-dirhint]").textContent = HINT[dir];
    }
    function calcHk() {
      const outEl = R.querySelector("[data-out-hk]"), dir = dirOf();
      const g = (k, def, money) => numOr(h, R.querySelector("#hk-" + k).value, def, money);
      const o = { start: R.querySelector("#hk-start").value, bzp: g("bzp", NaN, true), lep: g("lep", NaN, true), lrabatt: g("lrabatt", 0), lskonto: g("lskonto", 0), bk: g("bk", 0, true),
        hk: g("hk", 0), gewinn: g("gewinn", 0), vk: g("vk", NaN, true), brutto: R.querySelector("#hk-vkart").value === "brutto",
        skonto: g("kskonto", 0), provision: g("prov", 0), rabatt: g("krabatt", 0), ust: g("ust", 19), toLep: R.querySelector("#hk-tolep").checked };
      const errors = kValidate(dir, o);
      if (errors.length) { outEl.innerHTML = errorsHtml(h, errors); return; }
      let rows, bzp, lvp, top = "";
      if (dir === "vor") { const r = kVor(o); rows = rowsVor(o, r); bzp = r.bzp; lvp = r.lvp; top = `<div class="result-box mb-3"><dl class="kv mb-0"><dt>Listenverkaufspreis netto</dt><dd><strong>${eur(r.lvp)}</strong></dd><dt>Listenverkaufspreis brutto</dt><dd><strong>${eur(r.brutto)}</strong></dd></dl></div>`; }
      else if (dir === "rueck") {
        const r = kRueck(o); rows = rowsRueck(o, r); bzp = r.bzp; lvp = r.lvp;
        if (r.ek && r.ek.error) top = errorsHtml(h, [r.ek.error], "Hinweis:");
        top += `<div class="result-box mb-3"><dl class="kv mb-0"><dt>Bezugspreis höchstens</dt><dd><strong>${eur(r.bzp)}</strong></dd>${r.ek && !r.ek.error ? `<dt>Listeneinkaufspreis höchstens</dt><dd><strong>${eur(r.ek.lep)}</strong></dd>` : ""}</dl></div>`;
        if (!(r.bzp > 0)) top += errorsHtml(h, ["Der errechnete Bezugspreis ist nicht positiv – prüfe Verkaufspreis und Zuschläge."], "Hinweis:");
      } else {
        const r = kDiff(o); rows = rowsDiff(o, r); bzp = r.bzp; lvp = r.lvp;
        top = `<div class="result-box mb-3"><dl class="kv mb-0"><dt>${r.gEur < 0 ? "Verlust" : "Gewinn"}</dt><dd><strong>${eur(r.gEur)}</strong></dd><dt>Gewinnzuschlag</dt><dd><strong>${nf(r.gProz, 2, 2)} %</strong> der Selbstkosten</dd></dl></div>`;
      }
      outEl.innerHTML = `${top}<div class="small-caps mb-2">Kalkulationsschema${dir === "rueck" ? " – rückwärts, in Rechenreihenfolge" : ""}</div>${schemaTable(h, rows)}
        ${bzp > 0 && lvp > 0 ? `<div class="result-box mt-2"><div class="small-caps mb-2">Kennzahlen</div>${kennzHtml(bzp, lvp)}</div>` : ""}`;
    }

    /* ---- Events Rechner ---- */
    R.querySelectorAll('input[name="kalk-sub"]').forEach((r) => r.addEventListener("change", () => {
      const av = R.querySelector("#kalk-sub-av").checked;
      R.querySelector('[data-sub="av"]').hidden = !av; R.querySelector('[data-sub="hk"]').hidden = av;
    }));
    R.querySelectorAll('input[name="hk-dir"]').forEach((r) => r.addEventListener("change", () => { syncHk(); calcHk(); }));
    R.addEventListener("input", (e) => {
      const d = e.target.dataset;
      if (d.o !== undefined) { offers[+d.o][d.f] = e.target.value; calcAv(); }
      else if (d.k !== undefined && e.target.type !== "checkbox" && e.target.tagName !== "SELECT") calcHk();
    });
    R.addEventListener("change", (e) => { const d = e.target.dataset; if (d.k === "start" || d.k === "tolep" || d.k === "vkart") { syncHk(); calcHk(); } });
    R.addEventListener("click", (e) => {
      const b = e.target.closest("button"); if (!b || !R.contains(b)) return;
      const d = b.dataset;
      if (d.act === "add-o") { if (offers.length >= 3) return h.toast("Höchstens drei Angebote"); offers.push({ name: `Lieferer ${"ABC"[offers.length]}`, menge: offers[0]?.menge || "1", preis: "", rabatt: "0", skonto: "0", bk: "0" }); drawOffers(); calcAv(); }
      else if (d.delO !== undefined) { offers.splice(+d.delO, 1); drawOffers(); calcAv(); }
      else if (d.act === "ex-av") { offers = AV_EXAMPLE(); drawOffers(); calcAv(); h.toast("Beispiel geladen"); }
      else if (d.act === "calc-av") calcAv();
      else if (d.act === "calc-hk") calcHk();
      else if (d.act === "ex-hk") { for (const [k, v] of Object.entries(HK_EXAMPLE)) { const el = R.querySelector("#hk-" + k); if (el) el.value = v; } R.querySelector("#hk-tolep").checked = false; syncHk(); calcHk(); h.toast("Beispielwerte geladen"); }
    });
    onEnter(R, (e) => (e.target.closest('[data-sub="av"]') ? calcAv() : calcHk()));
    drawOffers(); calcAv(); syncHk(); calcHk();
  }

  /* =====================================================================
     3c) Logik & Wahrheitstabellen
     ===================================================================== */
  const GATE_TXT = {
    AND: ["UND (Konjunktion)", "&", "Q = 1 nur, wenn alle Eingänge 1 sind."],
    OR: ["ODER (Disjunktion)", "≥1", "Q = 1, sobald mindestens ein Eingang 1 ist."],
    XOR: ["Exklusiv-ODER (Antivalenz)", "=1", "Q = 1, wenn die Eingänge verschieden sind."],
    NAND: ["NICHT-UND", "& mit Negationskreis", "Q = 0 nur, wenn alle Eingänge 1 sind – sonst 1."],
    NOR: ["NICHT-ODER", "≥1 mit Negationskreis", "Q = 1 nur, wenn alle Eingänge 0 sind."],
    XNOR: ["Äquivalenz (XNOR)", "=", "Q = 1, wenn beide Eingänge gleich sind."],
  };
  function logicTableHtml(h, T, { minterm = true, answers = null } = {}) {
    const head = `<thead><tr>${T.vars.map((v) => `<th>${v}</th>`).join("")}${T.steps.map((s) => `<th class="mono small">${h.esc(s)}</th>`).join("")}<th>Q</th>${minterm ? "<th>Minterm</th>" : ""}</tr></thead>`;
    const body = T.rows.map((r) => `<tr>${r.bits.map((b) => `<td class="mono">${b}</td>`).join("")}${r.steps.map((b) => `<td class="mono muted">${b}</td>`).join("")}<td class="mono"><strong>${r.out}</strong>${answers && answers[r.i] !== null && answers[r.i] !== r.out ? ` <span class="chip bad">du: ${answers[r.i]}</span>` : ""}</td>${minterm ? `<td class="mono small">${r.out ? `m${r.i}` : ""}</td>` : ""}</tr>`).join("");
    return tableHtml(head + `<tbody>${body}</tbody>`);
  }
  function logicNormalForms(h, T, full) {
    const ms = lMinterms(T.outs), zs = T.outs.map((o, i) => (o ? -1 : i)).filter((i) => i >= 0);
    const kind = !T.outs.length ? "" : ms.length === 0 ? `<span class="chip">Kontradiktion – immer 0</span>` : zs.length === 0 ? `<span class="chip ok">Tautologie – immer 1</span>` : "";
    return `<dl class="kv mb-0">
      <dt>Minterme</dt><dd>${ms.length ? `Q = Σm(${ms.join(", ")})` : "keine"} ${kind}</dd>
      <dt>DNF</dt><dd>Q = ${h.esc(lDnf(T.vars, T.outs, "sym"))}</dd>
      ${full ? `<dt>DNF in Worten</dt><dd>Q = ${h.esc(lDnf(T.vars, T.outs, "word"))}</dd><dt>Maxterme</dt><dd>${zs.length ? `Q = ΠM(${zs.join(", ")})` : "keine"}</dd><dt>KNF</dt><dd>Q = ${h.esc(lKnf(T.vars, T.outs, "sym"))}</dd>` : ""}
      <dt>vereinfacht</dt><dd>Q = ${h.esc(lMinForm(T.vars, T.outs, "sym"))}</dd></dl>`;
  }
  function dnfSteps(h, T, max = 4) {
    const ms = lMinterms(T.outs);
    if (!ms.length || !T.vars.length) return "";
    const n = T.vars.length;
    const items = ms.slice(0, max).map((i) => { const bits = T.vars.map((v, k) => (i >> (n - 1 - k)) & 1); return `<li>Zeile ${i} (${T.vars.map((v, k) => `${v}=${bits[k]}`).join(", ")}) → ${h.esc(T.vars.map((v, k) => (bits[k] ? v : "¬" + v)).join(" ∧ "))}</li>`; }).join("");
    return `<div class="small-caps mt-3 mb-1">So entsteht die DNF</div><ol class="small mono mb-0 ps-3">${items}${ms.length > max ? `<li>… und ${ms.length - max} weitere Zeilen</li>` : ""}</ol><p class="small muted mb-0 mt-1">Jede Zeile mit Q = 1 liefert einen UND-Term (1 → Variable, 0 → negierte Variable). Alle Terme werden mit ODER verbunden.</p>`;
  }
  const LOGIK_INFO = `
    <h5>Grundgatter im Überblick</h5>
    <table><thead><tr><th>A</th><th>B</th><th>AND</th><th>OR</th><th>XOR</th><th>NAND</th><th>NOR</th><th>XNOR</th></tr></thead><tbody>
      <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td></tr>
      <tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>
      <tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>
      <tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td></tr></tbody></table>
    <table><thead><tr><th>Gatter</th><th>Schreibweisen</th><th>Symbol (DIN EN 60617)</th><th>Merksatz</th></tr></thead><tbody>
      <tr><td>AND</td><td>A ∧ B · A · B · A &amp; B</td><td>&amp;</td><td>1 nur, wenn alle Eingänge 1 sind</td></tr>
      <tr><td>OR</td><td>A ∨ B · A + B</td><td>≥1</td><td>1, wenn mindestens ein Eingang 1 ist</td></tr>
      <tr><td>NOT</td><td>¬A · Ā · !A</td><td>1 mit Kreis</td><td>kehrt den Wert um</td></tr>
      <tr><td>XOR</td><td>A ⊕ B</td><td>=1</td><td>1, wenn die Eingänge verschieden sind</td></tr>
      <tr><td>NAND</td><td>¬(A ∧ B)</td><td>&amp; mit Kreis</td><td>0 nur, wenn alle Eingänge 1 sind</td></tr>
      <tr><td>NOR</td><td>¬(A ∨ B)</td><td>≥1 mit Kreis</td><td>1 nur, wenn alle Eingänge 0 sind</td></tr>
      <tr><td>XNOR</td><td>¬(A ⊕ B)</td><td>=</td><td>1, wenn die Eingänge gleich sind</td></tr></tbody></table>
    <div class="callout formel"><strong>Disjunktive Normalform (DNF)</strong><br>1. Alle Zeilen mit Q = 1 suchen (Minterme).<br>2. Je Zeile einen UND-Term bilden: Wert 1 → A, Wert 0 → ¬A.<br>3. Alle Terme mit ODER verbinden.<br>Beispiel XOR: Q = (¬A ∧ B) ∨ (A ∧ ¬B)</div>
    <div class="callout merke"><strong>Merke:</strong> n Eingänge → 2ⁿ Zeilen. Zähle die Eingangskombinationen wie Binärzahlen (000, 001, 010 …) – dann fehlt keine. NAND und NOR sind „universell“: Aus ihnen allein lässt sich jede Schaltung bauen.</div>
    <div class="callout tipp"><strong>Eingabe im Rechner:</strong> <code>(A AND B) OR NOT C</code>, <code>A ∧ ¬B</code>, <code>!(A &amp; B) | C</code>, <code>A UND NICHT B</code>, <code>AB + C</code> (AB = A UND B), <code>A'</code> (= NICHT A). Rangfolge: NICHT vor UND/NAND vor XOR/XNOR vor ODER/NOR – setz im Zweifel Klammern.</div>`;

  function renderLogik(root, h) {
    const EX = ["(A AND B) OR NOT C", "A XOR B", "¬(A ∧ B) ∨ C", "A UND NICHT B ODER C UND D", "(A NAND B) NOR C"];
    const ui = frame(root, h, "logik", {
      ueben: toolbar(h, [{ id: "lg-typ", label: "Aufgabentyp", value: "tab", options: [["tab", "Ausgangsspalte ausfüllen"], ["gate", "Gatter erkennen"]] },
        { id: "lg-lvl", label: "Schwierigkeit", value: "2", options: [["1", "leicht – 2 Eingänge"], ["2", "mittel – 3 Eingänge"], ["3", "schwer – 3 Eingänge, verschachtelt"]] }]),
      rechner: `
        <label class="form-label small fw-semi mb-1" for="lg-expr">Logischer Ausdruck mit den Variablen A–D</label>
        <div class="input-group"><input class="form-control mono" id="lg-expr" value="${h.esc(EX[0])}" autocomplete="off" spellcheck="false" autocapitalize="off"><button type="button" class="btn btn-accent" data-act="calc">${h.icon("calculator")} Berechnen</button></div>
        <div class="d-flex flex-wrap gap-1 mt-2" role="group" aria-label="Zeichen einfügen">${["A", "B", "C", "D", "∧", "∨", "¬", "⊕", "(", ")", " NAND ", " NOR ", " XNOR "].map((s) => `<button type="button" class="btn btn-soft btn-sm mono" data-ins="${h.esc(s)}">${h.esc(s.trim())}</button>`).join("")}<button type="button" class="btn btn-ghost btn-sm" data-act="clear" aria-label="Eingabe leeren">${h.icon("backspace")}</button></div>
        <div class="d-flex flex-wrap gap-1 align-items-center mt-2"><span class="small muted me-1">Beispiele:</span>${EX.map((x) => `<button type="button" class="btn btn-ghost btn-sm mono" data-ex="${h.esc(x)}">${h.esc(x)}</button>`).join("")}</div>
        <div class="form-check mt-2"><input class="form-check-input" type="checkbox" id="lg-steps" checked><label class="form-check-label small" for="lg-steps">Zwischenspalten (Teilausdrücke) anzeigen</label></div>
        <div class="mt-3" data-out aria-live="polite"></div>`,
      info: LOGIK_INFO,
    });

    /* ---- Üben ---- */
    const host = ui.U.querySelector("[data-task]");
    function mountTruth(lvl) {
      const ast = lRandom(lvl), T = lTable(ast, true), ans = T.rows.map(() => null);
      let counted = false;
      host.innerHTML = `<p class="mb-2">Fülle die Ausgangsspalte <strong>Q</strong> aus. Tippe ein Feld an, um zwischen 1 und 0 zu wechseln (Tastatur: <kbd>0</kbd>/<kbd>1</kbd>, Pfeiltasten, <kbd>Enter</kbd> = prüfen).</p>
        <div class="result-box mb-3"><div class="mono fw-semi">Q = ${h.esc(lShow(ast, "word"))}</div><div class="mono small muted mt-1">Q = ${h.esc(lShow(ast, "sym"))}</div></div>
        ${tableHtml(`<thead><tr>${T.vars.map((v) => `<th>${v}</th>`).join("")}<th>Q</th></tr></thead><tbody>${T.rows.map((r) => `<tr>${r.bits.map((b) => `<td class="mono">${b}</td>`).join("")}<td><button type="button" class="btn btn-soft btn-sm mono" data-bit="${r.i}" aria-label="Q für ${T.vars.map((v, k) => `${v} = ${r.bits[k]}`).join(", ")}">?</button><span class="small ms-2" data-bitsol="${r.i}"></span></td></tr>`).join("")}</tbody>`)}
        <div class="d-flex flex-wrap gap-2 mt-3">
          <button type="button" class="btn btn-accent" data-act="check">${h.icon("check2-circle")} Prüfen</button>
          <button type="button" class="btn btn-soft" data-act="zero">Rest mit 0 füllen</button>
          <button type="button" class="btn btn-ghost" data-act="solve">${h.icon("eye")} Lösung zeigen</button>
        </div><div class="mt-3" data-out aria-live="polite"></div>`;
      const out = host.querySelector("[data-out]");
      const btn = (i) => host.querySelector(`[data-bit="${i}"]`);
      const setBit = (i, v) => { ans[i] = v; const b = btn(i); b.textContent = v === null ? "?" : String(v); b.className = "btn btn-soft btn-sm mono"; host.querySelector(`[data-bitsol="${i}"]`).innerHTML = ""; };
      const check = (reveal) => {
        const open = ans.filter((v) => v === null).length;
        if (!reveal && open) { out.innerHTML = coHtml("tipp", `Es ${open === 1 ? "ist noch ein Feld" : `sind noch ${open} Felder`} offen (?). Tipp: „Rest mit 0 füllen“.`); return; }
        let right = 0;
        for (const r of T.rows) {
          const b = btn(r.i), ok = !reveal && ans[r.i] === r.out;
          if (ok) right++;
          if (reveal) { ans[r.i] = r.out; b.textContent = String(r.out); b.className = "btn btn-soft btn-sm mono"; }
          else { b.className = `btn btn-sm mono ${ok ? "btn-ok" : "btn-bad"}`; host.querySelector(`[data-bitsol="${r.i}"]`).innerHTML = ok ? "" : `<span class="muted">richtig: ${r.out}</span>`; }
        }
        const all = !reveal && right === T.rows.length;
        if (!counted) { counted = true; ui.score(all); }
        const sol = `<div class="small-caps mb-1">Wahrheitstabelle mit Zwischenschritten</div>${logicTableHtml(h, T)}${logicNormalForms(h, T, false)}`;
        out.innerHTML = reveal ? `<div class="result-box"><div class="small-caps mb-2">${h.icon("eye")} Lösung</div>${sol}</div>` : h.feedback(all, `<p class="mb-2">${all ? "Alle Zeilen stimmen!" : `${right} von ${T.rows.length} Zeilen richtig. Rechne die Teilausdrücke Spalte für Spalte:`}</p>${sol}`);
      };
      host.onclick = (e) => {
        const b = e.target.closest("button"); if (!b || !host.contains(b)) return;
        if (b.dataset.bit !== undefined) { const i = +b.dataset.bit; setBit(i, ans[i] === 1 ? 0 : 1); }
        else if (b.dataset.act === "zero") ans.forEach((v, i) => { if (v === null) setBit(i, 0); });
        else if (b.dataset.act === "check") check(false);
        else if (b.dataset.act === "solve") check(true);
      };
      host.onkeydown = (e) => {
        const b = e.target.closest ? e.target.closest("[data-bit]") : null;
        if (!b) return;
        const i = +b.dataset.bit;
        if (e.key === "0" || e.key === "1") { e.preventDefault(); setBit(i, +e.key); btn(i + 1)?.focus(); }
        else if (e.key === "ArrowDown") { e.preventDefault(); btn(i + 1)?.focus(); }
        else if (e.key === "ArrowUp") { e.preventDefault(); btn(i - 1)?.focus(); }
        else if (e.key === "Enter") { e.preventDefault(); check(false); }
      };
    }
    function mountGate(lvl) {
      const n = lvl === 3 ? 3 : 2, pool = lvl === 1 ? ["AND", "OR", "NAND", "NOR"] : lvl === 2 ? GATES : ["AND", "OR", "NAND", "NOR"];
      const g = pickR(Math.random, pool), outs = gateTable(g, n), vars = ["A", "B", "C"].slice(0, n);
      let counted = false;
      host.innerHTML = `<p class="mb-2">Welches Gatter liefert diese Wahrheitstabelle${n === 3 ? " (drei Eingänge)" : ""}?</p>
        ${tableHtml(`<thead><tr>${vars.map((v) => `<th>${v}</th>`).join("")}<th>Q</th></tr></thead><tbody>${outs.map((o, i) => `<tr>${vars.map((v, k) => `<td class="mono">${(i >> (n - 1 - k)) & 1}</td>`).join("")}<td class="mono"><strong>${o}</strong></td></tr>`).join("")}</tbody>`)}
        <div class="d-flex flex-wrap gap-2 mt-2" role="group" aria-label="Gatter wählen">${GATES.map((x) => `<button type="button" class="btn btn-soft mono" data-gate="${x}">${x}</button>`).join("")}</div>
        <div class="mt-3" data-out aria-live="polite"></div>`;
      host.onkeydown = null;
      host.onclick = (e) => {
        const b = e.target.closest("[data-gate]"); if (!b || !host.contains(b)) return;
        const pickd = b.dataset.gate, ok = pickd === g;
        host.querySelectorAll("[data-gate]").forEach((x) => { x.className = `btn mono ${x.dataset.gate === g ? "btn-ok" : x === b ? "btn-bad" : "btn-soft"}`; });
        if (!counted) { counted = true; ui.score(ok); }
        const [name, sym, rule] = GATE_TXT[g];
        const expr = n === 2 ? (g === "XOR" ? "A ⊕ B" : g === "XNOR" ? "¬(A ⊕ B)" : g === "AND" ? "A ∧ B" : g === "OR" ? "A ∨ B" : g === "NAND" ? "¬(A ∧ B)" : "¬(A ∨ B)")
          : ({ AND: "A ∧ B ∧ C", OR: "A ∨ B ∨ C", NAND: "¬(A ∧ B ∧ C)", NOR: "¬(A ∨ B ∨ C)" })[g];
        host.querySelector("[data-out]").innerHTML = h.feedback(ok, `<p class="mb-1"><strong>${g}</strong> – ${name}: ${rule}</p><p class="mb-0 small">Schreibweise: <span class="mono">Q = ${expr}</span> · Schaltzeichen: <span class="mono">${h.esc(sym)}</span>${!ok ? `<br>Dein Tipp ${pickd}: ${GATE_TXT[pickd][2]}` : ""}</p>`);
      };
    }
    wirePractice(ui, h, ["lg-typ", "lg-lvl"], () => { const lvl = +ui.U.querySelector("#lg-lvl").value || 2; if (ui.U.querySelector("#lg-typ").value === "gate") mountGate(lvl); else mountTruth(lvl); });

    /* ---- Rechner ---- */
    const R = ui.R, inp = R.querySelector("#lg-expr"), out = R.querySelector("[data-out]"), steps = R.querySelector("#lg-steps");
    function calc() {
      const src = inp.value;
      if (!src.trim()) { out.innerHTML = coHtml("tipp", "Gib einen Ausdruck ein, z. B. <code>(A AND B) OR NOT C</code> – oder tippe auf ein Beispiel."); return; }
      let ast;
      try { ast = lParse(src); } catch (e) {
        const msg = e && e.logic ? e.message : "Der Ausdruck konnte nicht ausgewertet werden.";
        const pos = e && e.logic && Number.isFinite(e.pos) ? Math.min(e.pos, src.length) : null;
        out.innerHTML = coHtml("achtung", `<strong>Das kann ich so nicht lesen:</strong> ${h.esc(msg)}${pos !== null ? `<pre class="mb-0 mt-2">${h.esc(src)}\n${" ".repeat(pos)}^</pre>` : ""}`);
        return;
      }
      const T = lTable(ast, steps.checked), n = T.vars.length;
      out.innerHTML = `<div class="result-box mb-3"><dl class="kv mb-0">
          <dt>Gelesen als</dt><dd>Q = ${h.esc(lShow(ast, "sym"))}</dd>
          <dt>in Worten</dt><dd>Q = ${h.esc(lShow(ast, "word"))}</dd>
          <dt>Variablen</dt><dd>${n ? `${T.vars.join(", ")} → 2${"⁰¹²³⁴"[n]} = ${1 << n} Zeilen` : "keine – der Ausdruck ist konstant"}</dd></dl></div>
        <div class="small-caps mb-1">Wahrheitstabelle</div>${logicTableHtml(h, T)}
        <div class="result-box mt-2">${logicNormalForms(h, T, true)}${dnfSteps(h, T)}</div>`;
    }
    R.addEventListener("click", (e) => {
      const b = e.target.closest("button"); if (!b || !R.contains(b)) return;
      if (b.dataset.ins !== undefined) {
        const ins = b.dataset.ins, s = inp.selectionStart ?? inp.value.length, en = inp.selectionEnd ?? s;
        inp.value = inp.value.slice(0, s) + ins + inp.value.slice(en);
        const p = s + ins.length; inp.focus(); try { inp.setSelectionRange(p, p); } catch (_) { /* ältere Browser */ }
        calc();
      } else if (b.dataset.ex !== undefined) { inp.value = b.dataset.ex; calc(); }
      else if (b.dataset.act === "clear") { inp.value = ""; inp.focus(); calc(); }
      else if (b.dataset.act === "calc") calc();
    });
    inp.addEventListener("input", calc);
    steps.addEventListener("change", calc);
    onEnter(R, calc);
    calc();
  }

  /* =====================================================================
     3d) Netzplan & kritischer Pfad
     ===================================================================== */
  const npF = (x) => nf(x, 0, 3);
  const npVals = (n, z) => ({ faz: n.faz + z, fez: n.fez, saz: n.saz + z, sez: n.sez, gp: n.gp, fp: n.fp });
  function npCard(h, n, z, legend = false) {
    const v = legend ? { faz: "FAZ", fez: "FEZ", saz: "SAZ", sez: "SEZ", gp: "GP", fp: "FP", dur: "Dauer", id: "Nr.", name: "Beschreibung" }
      : Object.assign({ dur: npF(n.dur), id: h.esc(n.id), name: h.esc(n.name || "–") }, Object.fromEntries(Object.entries(npVals(n, z)).map(([k, x]) => [k, npF(x)])));
    return `<div class="result-box p-2 mb-2${!legend && n.critical ? " border border-danger" : ""}">
      <div class="d-flex justify-content-between small mono"><span title="Frühester Anfangszeitpunkt">${v.faz}</span><span title="Frühester Endzeitpunkt">${v.fez}</span></div>
      <div class="border rounded my-1 small">
        <div class="row g-0 border-bottom"><div class="col-3 px-2 py-1 border-end fw-semi text-truncate">${v.id}</div><div class="col-9 px-2 py-1 text-truncate" title="${v.name}">${v.name}</div></div>
        <div class="row g-0 text-center mono"><div class="col-4 py-1 border-end" title="Dauer">${v.dur}</div><div class="col-4 py-1 border-end" title="Gesamtpuffer">${v.gp}</div><div class="col-4 py-1" title="Freier Puffer">${v.fp}</div></div>
      </div>
      <div class="d-flex justify-content-between small mono"><span title="Spätester Anfangszeitpunkt">${v.saz}</span><span title="Spätester Endzeitpunkt">${v.sez}</span></div>
      ${!legend ? `<div class="small muted mt-1">${n.preds.length ? `Vorgänger: ${n.preds.map((p) => h.esc(p)).join(", ")}` : "Startvorgang"}${n.critical ? ` · <span class="chip bad">kritisch</span>` : ""}</div>` : ""}
    </div>`;
  }
  function npSteps(h, res, z) {
    const B = res.byId, f = npF, E = (x) => h.esc(x);
    const fw = res.topo.map((id) => {
      const n = B.get(id), faz = n.faz + z;
      let a;
      if (!n.preds.length) a = `FAZ = ${z} (Startvorgang)`;
      else if (n.preds.length === 1) { const p = B.get(n.preds[0]); a = z ? `FAZ = FEZ ${E(p.id)} + 1 = ${f(p.fez)} + 1 = ${f(faz)}` : `FAZ = FEZ ${E(p.id)} = ${f(faz)}`; }
      else a = `FAZ = max(${n.preds.map((p) => `FEZ ${E(p)} = ${f(B.get(p).fez)}`).join("; ")})${z ? " + 1" : ""} = ${f(faz)}`;
      return `<li><strong>${E(id)}</strong>: ${a} · FEZ = ${f(faz)} + ${f(n.dur)}${z ? " − 1" : ""} = ${f(n.fez)}</li>`;
    }).join("");
    const bw = [...res.topo].reverse().map((id) => {
      const n = B.get(id);
      let a;
      if (!n.succs.length) a = `SEZ = Projektende = ${f(res.duration)}`;
      else if (n.succs.length === 1) { const s = B.get(n.succs[0]); a = z ? `SEZ = SAZ ${E(s.id)} − 1 = ${f(s.saz + z)} − 1 = ${f(n.sez)}` : `SEZ = SAZ ${E(s.id)} = ${f(n.sez)}`; }
      else a = `SEZ = min(${n.succs.map((s) => `SAZ ${E(s)} = ${f(B.get(s).saz + z)}`).join("; ")})${z ? " − 1" : ""} = ${f(n.sez)}`;
      return `<li><strong>${E(id)}</strong>: ${a} · SAZ = ${f(n.sez)} − ${f(n.dur)}${z ? " + 1" : ""} = ${f(n.saz + z)}</li>`;
    }).join("");
    const pf = res.nodes.map((n) => {
      let fp;
      if (!n.succs.length) fp = `FP = Projektende − FEZ = ${f(res.duration)} − ${f(n.fez)} = ${f(n.fp)}`;
      else {
        const minF = Math.min(...n.succs.map((s) => B.get(s).faz)) + z;
        const head = n.succs.length === 1 ? `FAZ ${E(n.succs[0])}` : `min(${n.succs.map((s) => `FAZ ${E(s)} = ${f(B.get(s).faz + z)}`).join("; ")})`;
        fp = `FP = ${head} − FEZ${z ? " − 1" : ""} = ${f(minF)} − ${f(n.fez)}${z ? " − 1" : ""} = ${f(n.fp)}`;
      }
      return `<li><strong>${E(n.id)}</strong>: GP = SAZ − FAZ = ${f(n.saz + z)} − ${f(n.faz + z)} = ${f(n.gp)} · ${fp}${n.critical ? " → <strong>kritisch</strong>" : ""}</li>`;
    }).join("");
    return `<div class="small-caps mb-1">1. Vorwärtsrechnung (FAZ, FEZ)</div><ol class="small mono ps-3 mb-3">${fw}</ol>
      <div class="small-caps mb-1">2. Rückwärtsrechnung (SEZ, SAZ)</div><ol class="small mono ps-3 mb-3">${bw}</ol>
      <div class="small-caps mb-1">3. Puffer</div><ol class="small mono ps-3 mb-0">${pf}</ol>`;
  }
  function npResultHtml(h, res, z) {
    const paths = res.paths.map((p) => p.map((x) => h.esc(x)).join(" → "));
    const crit = res.nodes.filter((n) => n.critical).map((n) => h.esc(n.id));
    const summary = `<div class="result-box mb-3"><dl class="kv mb-0"><dt>Projektdauer</dt><dd><strong>${npF(res.duration)} Tage</strong></dd>
      <dt>${paths.length > 1 ? `Kritische Pfade (${paths.length})` : "Kritischer Pfad"}</dt><dd><strong>${paths.join("<br>") || "–"}</strong></dd>
      <dt>Kritische Vorgänge</dt><dd>${crit.join(", ")} (GP = 0)</dd></dl></div>`;
    const table = tableHtml(`<thead><tr><th>Vorgang</th><th>Beschreibung</th><th>Dauer</th><th>Vorgänger</th><th>FAZ</th><th>FEZ</th><th>SAZ</th><th>SEZ</th><th>GP</th><th>FP</th></tr></thead><tbody>${res.nodes.map((n) => { const v = npVals(n, z); return `<tr><td>${n.critical ? `<strong>${h.esc(n.id)}</strong> <span class="chip bad">kritisch</span>` : h.esc(n.id)}</td><td>${h.esc(n.name)}</td><td class="mono">${npF(n.dur)}</td><td class="mono">${n.preds.map((p) => h.esc(p)).join(", ") || "–"}</td>${["faz", "fez", "saz", "sez", "gp", "fp"].map((k) => `<td class="mono">${npF(v[k])}</td>`).join("")}</tr>`; }).join("")}</tbody>`);
    const maxL = Math.max(...res.nodes.map((n) => n.level));
    const cols = []; for (let l = 0; l <= maxL; l++) cols.push(res.nodes.filter((n) => n.level === l));
    const nodes = `<div class="row flex-nowrap overflow-auto g-2 pb-1">${cols.map((c) => `<div class="col-10 col-sm-6 col-md-4 col-lg-3">${c.map((n) => npCard(h, n, z)).join("")}</div>`).join("")}</div>`;
    return `${summary}<div class="small-caps mb-1">Ergebnistabelle${z ? " (Zählweise ab Tag 1)" : " (Zeitpunkte ab 0)"}</div>${table}
      <div class="small-caps mb-1">Vorgangsknoten (von links nach rechts in Ausführungsreihenfolge, rot = kritisch)</div>${nodes}
      <details class="mt-2" open><summary class="fw-semi mb-2">Rechenweg Schritt für Schritt</summary>${npSteps(h, res, z)}</details>`;
  }
  const NP_EXAMPLE = () => [["A", "Anforderungen aufnehmen", "2", ""], ["B", "Angebote einholen", "3", "A"], ["C", "Hardware bestellen und liefern", "5", "B"], ["D", "Verkabelung erneuern", "4", "A"],
    ["E", "Server installieren", "3", "C"], ["F", "Clients einrichten", "2", "C, D"], ["G", "Test und Abnahme", "1", "E, F"]].map(([id, name, dur, preds]) => ({ id, name, dur, preds }));
  const zSelect = (id) => ({ id, label: "Zählweise", value: "0", options: [["0", "ab 0 (wie IHK-Prüfungskatalog)"], ["1", "ab Tag 1"]] });

  function renderNetz(root, h) {
    const NETZ_INFO = `
      <h5>Aufbau eines Vorgangsknotens</h5>
      <div class="row g-3 align-items-center mb-2"><div class="col-12 col-sm-6 col-md-4">${npCard(h, {}, 0, true)}</div>
        <div class="col-12 col-sm-6 col-md-8"><p class="mb-1">Oben stehen die frühesten, unten die spätesten Zeitpunkte, in der Mitte Vorgangsnummer, Beschreibung, Dauer sowie Gesamtpuffer (GP) und freier Puffer (FP).</p><p class="mb-0">Kritische Vorgänge sind im Tool rot umrandet.</p></div></div>
      <div class="callout formel"><strong>Vorwärtsrechnung</strong> (frühestmögliche Zeiten)<br>FAZ des Startvorgangs = 0<br>FEZ = FAZ + Dauer<br>FAZ = größter FEZ aller Vorgänger<br><br><strong>Rückwärtsrechnung</strong> (spätestmögliche Zeiten)<br>SEZ des Endvorgangs = sein FEZ (= Projektdauer)<br>SAZ = SEZ − Dauer<br>SEZ = kleinster SAZ aller Nachfolger<br><br><strong>Puffer</strong><br>GP = SAZ − FAZ = SEZ − FEZ<br>FP = kleinster FAZ der Nachfolger − FEZ</div>
      <div class="callout merke"><strong>Kritischer Pfad:</strong> die Kette aller Vorgänge mit GP = 0 – der längste Weg durch den Netzplan. Verzögert sich ein kritischer Vorgang, verschiebt sich das Projektende um genau diese Zeit.</div>
      <div class="callout tipp"><strong>GP oder FP?</strong> Der Gesamtpuffer sagt, wie weit sich ein Vorgang verschieben darf, ohne das <em>Projektende</em> zu gefährden. Der freie Puffer sagt, wie weit er sich verschieben darf, ohne den <em>frühesten Start eines Nachfolgers</em> zu verschieben. Es gilt immer FP ≤ GP.</div>
      <div class="callout achtung"><strong>Zählweise:</strong> Der IHK-Prüfungskatalog rechnet mit Zeitpunkten ab 0 (FAZ = FEZ des Vorgängers). Manche Bücher zählen Tage ab 1 (FAZ = FEZ des Vorgängers + 1, FEZ = FAZ + Dauer − 1). Beides kannst du im Tool umschalten – Puffer, kritischer Pfad und Projektdauer bleiben gleich.</div>
      <div class="callout pruefung"><strong>In der Prüfung:</strong> Netzplan aus einer Vorgangsliste zeichnen oder vervollständigen, FAZ/FEZ/SAZ/SEZ und Puffer eintragen, kritischen Pfad markieren und Folgen einer Verzögerung beurteilen.</div>`;
    const ui = frame(root, h, "netz", {
      ueben: toolbar(h, [{ id: "np-lvl", label: "Schwierigkeit", value: "2", options: [["1", "leicht – 6 Vorgänge"], ["2", "mittel – 7 Vorgänge, mit FP"], ["3", "schwer – 8 Vorgänge, mit FP"]] }, zSelect("np-z")]),
      rechner: `
        <p class="muted small mb-2">Trag die Vorgangsliste ein. Vorgänger kommagetrennt (z. B. <code>B, C</code>), beim Startvorgang leer lassen. Die Berechnung läuft automatisch.</p>
        <div class="d-flex flex-wrap gap-2 align-items-end mb-2"><div><label class="form-label small fw-semi mb-1" for="np-rz">Zählweise</label><select class="form-select form-select-sm" id="np-rz"><option value="0" selected>ab 0 (wie IHK-Prüfungskatalog)</option><option value="1">ab Tag 1</option></select></div></div>
        <div data-editor></div>
        <div class="d-flex flex-wrap gap-2 mt-2">
          <button type="button" class="btn btn-soft btn-sm" data-act="add">${h.icon("plus-lg")} Vorgang</button>
          <button type="button" class="btn btn-ghost btn-sm" data-act="example">${h.icon("stars")} Beispiel</button>
          <button type="button" class="btn btn-ghost btn-sm" data-act="clear">${h.icon("eraser")} Leeren</button>
          <button type="button" class="btn btn-accent btn-sm" data-act="calc">${h.icon("calculator")} Berechnen</button>
        </div>
        <div class="mt-3" data-out aria-live="polite"></div>`,
      info: NETZ_INFO,
    });

    /* ---- Üben ---- */
    const host = ui.U.querySelector("[data-task]");
    const makeTask = () => {
      const lvl = +ui.U.querySelector("#np-lvl").value || 2, z = +ui.U.querySelector("#np-z").value || 0;
      const { tasks, res } = npRandom(lvl === 1 ? 6 : lvl === 2 ? 7 : 8);
      const B = res.byId, path = res.paths[0], ids = tasks.map((t) => t.id);
      // 2–3 Vorgänge abfragen: mindestens einer mit Puffer, möglichst einer mit mehreren Vorgängern
      const k = lvl === 1 ? 2 : 3, pick = [];
      const add = (n) => { if (n && !pick.includes(n.id)) pick.push(n.id); };
      add(pickR(Math.random, res.nodes.filter((n) => !n.critical)));
      const merge = res.nodes.filter((n) => n.preds.length > 1 && !pick.includes(n.id));
      if (merge.length) add(pickR(Math.random, merge));
      for (const n of shuffleR(Math.random, res.nodes)) if (pick.length < k) add(n);
      pick.sort();
      const keys = lvl === 1 ? ["faz", "fez", "saz", "sez", "gp"] : ["faz", "fez", "saz", "sez", "gp", "fp"];
      const fields = [];
      for (const id of pick) {
        const n = B.get(id), v = npVals(n, z);
        fields.push({ kind: "head", label: `Vorgang ${id} – ${h.esc(n.name)}` });
        for (const key of keys) fields.push({ id: `np-${id}-${key}`, label: key.toUpperCase(), short: `${id}: ${key.toUpperCase()}`, accept: [v[key]], tol: 0.001, sol: npF(v[key]), cls: "col-4 col-sm-2" });
      }
      fields.push({ kind: "head", label: "Gesamtes Projekt" });
      fields.push({ id: "np-dauer", label: "Projektdauer (Tage)", short: "Projektdauer", accept: [res.duration], tol: 0.001, sol: npF(res.duration), cls: "col-12 col-sm-4" });
      fields.push({ id: "np-cp", kind: "text", label: "Kritischer Pfad", short: "Kritischer Pfad", ph: "z. B. A-B-E-G", cls: "col-12 col-sm-8",
        ok: (v) => { const a = npParsePath(v, ids); return a.length === path.length && [...a].sort().join() === [...path].sort().join(); }, sol: path.join(" → ") });
      const intro = `<p class="mb-2">Berechne den Netzplan zu dieser Vorgangsliste (Dauer in Tagen, Zählweise: ${z ? "ab Tag 1" : "Zeitpunkte ab 0"}). Trag die Werte für die markierten Vorgänge ein.</p>
        ${tableHtml(`<thead><tr><th>Vorgang</th><th>Beschreibung</th><th>Dauer</th><th>Vorgänger</th></tr></thead><tbody>${tasks.map((t) => `<tr><td>${pick.includes(t.id) ? `<strong>${t.id}</strong> <span class="chip">gefragt</span>` : t.id}</td><td>${h.esc(t.name)}</td><td class="mono">${t.dur}</td><td class="mono">${t.preds.join(", ") || "–"}</td></tr>`).join("")}</tbody>`)}`;
      return { intro, fields, solution: () => npResultHtml(h, res, z) };
    };
    wirePractice(ui, h, ["np-lvl", "np-z"], () => mountTask(ui, h, host, makeTask()));

    /* ---- Rechner ---- */
    const R = ui.R, out = R.querySelector("[data-out]");
    let rows = NP_EXAMPLE();
    const nextId = () => { const used = new Set(rows.map((r) => String(r.id).trim().toUpperCase())); for (const c of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") if (!used.has(c)) return c; return ""; };
    function drawEditor() {
      R.querySelector("[data-editor]").innerHTML = tableHtml(`<thead><tr><th>Kürzel</th><th>Beschreibung</th><th>Dauer (Tage)</th><th>Vorgänger</th><th></th></tr></thead><tbody>${rows.map((r, i) => `<tr>
        <td><input class="form-control form-control-sm mono" data-r="${i}" data-f="id" value="${h.esc(r.id)}" aria-label="Kürzel Zeile ${i + 1}" autocomplete="off" style="width:4.5rem"></td>
        <td><input class="form-control form-control-sm" data-r="${i}" data-f="name" value="${h.esc(r.name)}" aria-label="Beschreibung Zeile ${i + 1}" autocomplete="off" style="width:13rem"></td>
        <td><input class="form-control form-control-sm mono" data-r="${i}" data-f="dur" value="${h.esc(r.dur)}" inputmode="decimal" aria-label="Dauer Zeile ${i + 1}" autocomplete="off" style="width:5rem"></td>
        <td><input class="form-control form-control-sm mono" data-r="${i}" data-f="preds" value="${h.esc(r.preds)}" placeholder="z. B. A, B" aria-label="Vorgänger Zeile ${i + 1}" autocomplete="off" style="width:7.5rem"></td>
        <td><button type="button" class="btn btn-ghost btn-sm" data-del-r="${i}" title="Zeile löschen" aria-label="Zeile ${i + 1} löschen">${h.icon("trash")}</button></td></tr>`).join("")}</tbody>`);
    }
    function calc() {
      const z = +R.querySelector("#np-rz").value || 0;
      // Zeilen, in denen nur das automatisch vergebene Kürzel steht, zählen noch nicht mit
      const list = rows.filter((r) => [r.name, r.dur, r.preds].some((x) => String(x ?? "").trim())).map((r) => ({ id: r.id, name: r.name, dur: num(h, r.dur), preds: r.preds }));
      if (!list.length) { out.innerHTML = coHtml("tipp", "Trag mindestens einen Vorgang ein – oder lade das Beispiel."); return; }
      const res = npCompute(list);
      out.innerHTML = res.ok ? npResultHtml(h, res, z) : errorsHtml(h, res.errors);
    }
    R.addEventListener("input", (e) => { const d = e.target.dataset; if (d.r === undefined) return; rows[+d.r][d.f] = e.target.value; calc(); });
    R.querySelector("#np-rz").addEventListener("change", calc);
    R.addEventListener("click", (e) => {
      const b = e.target.closest("button"); if (!b || !R.contains(b)) return;
      const d = b.dataset;
      if (d.act === "add") { if (rows.length >= 30) return h.toast("Höchstens 30 Vorgänge"); rows.push({ id: nextId(), name: "", dur: "", preds: "" }); drawEditor(); calc(); R.querySelector(`[data-r="${rows.length - 1}"][data-f="name"]`)?.focus(); return; }
      if (d.act === "example") { rows = NP_EXAMPLE(); h.toast("Beispiel geladen"); }
      else if (d.act === "clear") rows = [{ id: "A", name: "", dur: "", preds: "" }];
      else if (d.act === "calc") { calc(); return; }
      else if (d.delR !== undefined) { rows.splice(+d.delR, 1); if (!rows.length) rows.push({ id: "A", name: "", dur: "", preds: "" }); }
      else return;
      drawEditor(); calc();
    });
    onEnter(R, calc);
    drawEditor(); calc();
  }

  /* =====================================================================
     Registrierung
     ===================================================================== */
  L.tool({
    id: "nutzwertanalyse", title: "Nutzwertanalyse", icon: "clipboard-data", hue: 120,
    desc: "Angebote mit gewichteten Kriterien vergleichen: Nutzwerte berechnen, Rangfolge bilden und die Entscheidung begründen.",
    exam: ["AP1", "AP2"], modules: ["lf02", "lf12", "wiso"],
    render: renderNwa,
  });
  L.tool({
    id: "kalkulation", title: "Angebotsvergleich & Kalkulation", icon: "calculator", hue: 10,
    desc: "Bezugspreise vergleichen und Verkaufspreise kalkulieren – vorwärts, rückwärts und als Differenzkalkulation mit vollständigem Schema.",
    exam: ["AP1", "AP2"], modules: ["wiso", "lf02"],
    render: renderKalk,
  });
  L.tool({
    id: "logik", title: "Logik & Wahrheitstabellen", icon: "toggles", hue: 280,
    desc: "Logische Ausdrücke auswerten, Wahrheitstabellen ausfüllen, DNF bilden und Gatter an ihrer Tabelle erkennen.",
    exam: ["AP1"], modules: ["lf03", "lf05"],
    render: renderLogik,
  });
  L.tool({
    id: "netzplan", title: "Netzplan & kritischer Pfad", icon: "bezier2", hue: 330,
    desc: "Vorwärts- und Rückwärtsrechnung, Gesamtpuffer, freier Puffer und kritischer Pfad – Schritt für Schritt.",
    exam: ["AP1", "AP2"], modules: ["lf06", "lf12"],
    render: renderNetz,
  });
})(typeof window !== "undefined" ? window : globalThis);
