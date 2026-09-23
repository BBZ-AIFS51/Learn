// Prüft Datendateien auf Schema-Fehler.  Aufruf: node tools/validate.mjs [datei ...]
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const strict = process.argv.includes("--strict");

const ctx = { window: {}, console };
ctx.window = ctx;
vm.createContext(ctx);
const run = (file) => vm.runInContext(fs.readFileSync(file, "utf8"), ctx, { filename: file });
run(path.join(root, "assets/js/core.js"));
run(path.join(root, "data/meta.js"));

const dataDir = path.join(root, "data");
const files = args.length
  ? args.map((a) => path.resolve(a))
  : fs.readdirSync(dataDir).filter((f) => f.endsWith(".js") && f !== "meta.js").map((f) => path.join(dataDir, f));

let errors = 0, warnings = 0;
const err = (f, m) => { errors++; console.log(`  ✗ ${m}`); };
const warn = (f, m) => { warnings++; console.log(`  ! ${m}`); };

const EXAMS = ["AP1", "AP2"];
const catalogIds = new Set(ctx.LEARN.meta.catalog.map((c) => c.id));
const BALANCED = ["div", "table", "thead", "tbody", "tr", "ul", "ol", "pre", "code", "strong", "em", "h5", "h6", "td", "th", "li", "p"];

function checkHtml(f, where, html) {
  if (typeof html !== "string" || !html.trim()) return err(f, `${where}: HTML fehlt`);
  if (/<script/i.test(html)) err(f, `${where}: <script> nicht erlaubt`);
  if (/\sstyle=/i.test(html)) warn(f, `${where}: Inline-Style gefunden`);
  if (/<h[1-4][\s>]/i.test(html)) warn(f, `${where}: h1–h4 gefunden (nur h5/h6 verwenden)`);
  if (/<img\s/i.test(html)) warn(f, `${where}: <img> gefunden`);
  for (const t of BALANCED) {
    const open = (html.match(new RegExp(`<${t}(\\s[^>]*)?>`, "gi")) || []).length;
    const close = (html.match(new RegExp(`</${t}>`, "gi")) || []).length;
    if (t === "p" || t === "li" || t === "td" || t === "th") { if (close > open) warn(f, `${where}: mehr </${t}> als <${t}>`); continue; }
    if (open !== close) err(f, `${where}: <${t}> ${open}× geöffnet, ${close}× geschlossen`);
  }
}
const isStr = (v) => typeof v === "string" && v.trim().length > 0;
const checkExamArr = (f, where, v) => { if (v === undefined) return; if (!Array.isArray(v) || v.some((x) => !EXAMS.includes(x))) err(f, `${where}: exam muss Array aus ${EXAMS.join("/")} sein`); };
const uniq = (f, where, arr, key = "id") => { const s = new Set(); for (const x of arr) { const k = x && x[key]; if (!isStr(k)) { err(f, `${where}: Eintrag ohne ${key}`); continue; } if (s.has(k)) err(f, `${where}: doppelte ${key} "${k}"`); s.add(k); } return s; };

function checkModule(f, m) {
  if (!catalogIds.has(m.id)) err(f, `id "${m.id}" nicht in meta.catalog`);
  if (!["lf", "fach"].includes(m.type)) err(f, `type muss "lf" oder "fach" sein`);
  if (!isStr(m.title)) err(f, "title fehlt");
  if (!isStr(m.summary)) err(f, "summary fehlt");
  if (m.type === "lf") { if (!Number.isInteger(m.nr)) err(f, "nr fehlt"); if (!m.year) err(f, "year fehlt"); if (!m.hours) err(f, "hours fehlt"); }
  checkExamArr(f, "modul", m.exam);
  if (!Array.isArray(m.goals) || m.goals.length < 3) err(f, "goals: mind. 3 Einträge");
  for (const k of ["topics", "exercises", "quiz", "cards", "checklist", "glossary", "links"]) if (m[k] !== undefined && !Array.isArray(m[k])) err(f, `${k} muss ein Array sein`);
  const topics = m.topics || [], ex = m.exercises || [], quiz = m.quiz || [], cards = m.cards || [], cl = m.checklist || [], gl = m.glossary || [], links = m.links || [];
  const tIds = uniq(f, "topics", topics);
  for (const t of topics) {
    if (t.id && !/^[a-z0-9-]+$/.test(t.id)) err(f, `topic "${t.id}": id nur a-z0-9-`);
    if (!isStr(t.title)) err(f, `topic "${t.id}": title fehlt`);
    if (!isStr(t.summary)) warn(f, `topic "${t.id}": summary fehlt`);
    checkExamArr(f, `topic "${t.id}"`, t.exam);
    checkHtml(f, `topic "${t.id}"`, t.html);
    if (typeof t.html === "string" && t.html.length < 600) warn(f, `topic "${t.id}": Lernzettel sehr kurz (${t.html.length} Zeichen)`);
  }
  const topicOk = (where, id) => { if (id === undefined) return warn(f, `${where}: topic fehlt`); if (!tIds.has(id)) err(f, `${where}: topic "${id}" existiert nicht`); };
  uniq(f, "exercises", ex);
  for (const e of ex) {
    const w = `exercise "${e.id}"`;
    topicOk(w, e.topic);
    if (!isStr(e.title)) err(f, `${w}: title fehlt`);
    if (![1, 2, 3].includes(e.level)) err(f, `${w}: level 1–3`);
    checkExamArr(f, w, e.exam);
    checkHtml(f, `${w}.task`, e.task);
    checkHtml(f, `${w}.solution`, e.solution);
  }
  uniq(f, "quiz", quiz);
  for (const q of quiz) {
    const w = `quiz "${q.id}"`;
    topicOk(w, q.topic);
    if (!isStr(q.q)) err(f, `${w}: q fehlt`);
    if (!isStr(q.explain)) warn(f, `${w}: explain fehlt`);
    checkExamArr(f, w, q.exam);
    if (q.type === "single" || q.type === "multi") {
      if (!Array.isArray(q.options) || q.options.length < 2) { err(f, `${w}: options fehlen`); continue; }
      if (new Set(q.options.map((o) => String(o).trim().toLowerCase())).size !== q.options.length) err(f, `${w}: doppelte Optionen`);
      if (q.options.some((o) => /alle (oben )?genannt|keine der (oben|genannt)|^(a|b) und (b|c)$|beide/i.test(String(o)))) warn(f, `${w}: Option bezieht sich auf andere Optionen (wird gemischt!)`);
      if (q.type === "single" && !(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length)) err(f, `${w}: answer muss gültiger Index sein`);
      if (q.type === "multi") {
        if (!Array.isArray(q.answer) || !q.answer.length || q.answer.some((i) => !Number.isInteger(i) || i < 0 || i >= q.options.length) || new Set(q.answer).size !== q.answer.length) err(f, `${w}: answer muss Array gültiger Indizes sein`);
        else if (q.answer.length === 1) warn(f, `${w}: multi mit nur einer richtigen Antwort`);
      }
    } else if (q.type === "tf") {
      if (typeof q.answer !== "boolean") err(f, `${w}: answer muss true/false sein`);
    } else if (q.type === "input") {
      if (!Array.isArray(q.answer) || !q.answer.length || q.answer.some((a) => !isStr(String(a)))) err(f, `${w}: answer muss Array akzeptierter Strings sein`);
    } else err(f, `${w}: unbekannter type "${q.type}"`);
  }
  for (const [i, c] of cards.entries()) { if (!isStr(c.f) || !isStr(c.b)) err(f, `card #${i}: f/b fehlt`); if (c.topic && !tIds.has(c.topic)) err(f, `card #${i}: topic "${c.topic}" existiert nicht`); }
  uniq(f, "checklist", cl);
  for (const c of cl) { if (!isStr(c.text)) err(f, `checklist "${c.id}": text fehlt`); if (c.topic && !tIds.has(c.topic)) err(f, `checklist "${c.id}": topic "${c.topic}" existiert nicht`); checkExamArr(f, `checklist "${c.id}"`, c.exam); }
  for (const [i, g] of gl.entries()) if (!isStr(g.term) || !isStr(g.def)) err(f, `glossary #${i}: term/def fehlt`);
  for (const [i, l] of links.entries()) if (!isStr(l.title) || !/^https:\/\//.test(l.url || "")) err(f, `link #${i}: title/https-url fehlt`);

  const min = { topics: 6, exercises: 8, quiz: 30, cards: 25, checklist: 12, glossary: 12 };
  const got = { topics: topics.length, exercises: ex.length, quiz: quiz.length, cards: cards.length, checklist: cl.length, glossary: gl.length };
  for (const k in min) if (got[k] < min[k]) (strict ? err : warn)(f, `${k}: nur ${got[k]} (Ziel ≥ ${min[k]})`);
  const chars = topics.reduce((n, t) => n + (t.html || "").length, 0);
  console.log(`  · ${Object.entries(got).map(([k, v]) => `${k} ${v}`).join(", ")}, Lernzettel ${Math.round(chars / 1000)}k Zeichen`);
}

function checkExam(f, e) {
  if (!["ap1", "ap2"].includes(e.id)) err(f, `exam id "${e.id}" unbekannt`);
  for (const k of ["title", "name", "subtitle", "html"]) if (!isStr(e[k])) err(f, `${k} fehlt`);
  checkHtml(f, "html", e.html);
  if (!Array.isArray(e.facts) || !e.facts.length) err(f, "facts fehlen");
  const partIds = e.parts ? uniq(f, "parts", e.parts) : new Set();
  for (const p of e.parts || []) { if (!isStr(p.title)) err(f, `part "${p.id}": title fehlt`); if (p.html) checkHtml(f, `part "${p.id}"`, p.html); }
  if (!Array.isArray(e.areas) || !e.areas.length) err(f, "areas fehlen");
  uniq(f, "areas", e.areas || []);
  const itemIds = new Set();
  let items = 0;
  for (const a of e.areas || []) {
    if (!isStr(a.title)) err(f, `area "${a.id}": title fehlt`);
    if (a.part && !partIds.has(a.part)) err(f, `area "${a.id}": part "${a.part}" existiert nicht`);
    for (const it of a.items || []) {
      items++;
      if (!isStr(it.id) || itemIds.has(it.id)) err(f, `area "${a.id}": item-id fehlt/doppelt (${it.id})`);
      itemIds.add(it.id);
      if (!isStr(it.text)) err(f, `item "${it.id}": text fehlt`);
      if (it.ref && !/^[a-z0-9]+\/[a-z0-9-]+$/.test(it.ref)) err(f, `item "${it.id}": ref-Format modul/topic`);
    }
  }
  uniq(f, "tasks", e.tasks || []);
  let points = 0;
  for (const t of e.tasks || []) {
    if (!isStr(t.title)) err(f, `task "${t.id}": title fehlt`);
    if (t.part && !partIds.has(t.part)) err(f, `task "${t.id}": part "${t.part}" existiert nicht`);
    checkHtml(f, `task "${t.id}".scenario`, t.scenario);
    if (!Array.isArray(t.parts) || !t.parts.length) err(f, `task "${t.id}": parts fehlen`);
    for (const [i, p] of (t.parts || []).entries()) { checkHtml(f, `task "${t.id}" Teil ${i + 1} q`, p.q); checkHtml(f, `task "${t.id}" Teil ${i + 1} solution`, p.solution); points += p.points || 0; }
  }
  for (const d of e.dates || []) if (!/^\d{4}-\d{2}-\d{2}$/.test(d.date || "")) err(f, `date "${d.title}": Format JJJJ-MM-TT`);
  console.log(`  · Checklisten-Punkte ${items}, Aufgaben ${(e.tasks || []).length} (${points} Punkte), Tipps ${(e.tips || []).length}`);
}

for (const file of files) {
  const rel = path.relative(root, file);
  console.log(`\n${rel}`);
  const before = { m: ctx.LEARN.modules.length, e: ctx.LEARN.exams.length };
  try { run(file); } catch (e) { err(rel, `Syntax-/Laufzeitfehler: ${e.message}`); continue; }
  const newM = ctx.LEARN.modules.slice(before.m), newE = ctx.LEARN.exams.slice(before.e);
  if (newM.length + newE.length !== 1) { err(rel, `Datei muss genau 1 Modul/Prüfung registrieren (gefunden: ${newM.length + newE.length})`); }
  newM.forEach((m) => checkModule(rel, m));
  newE.forEach((e) => checkExam(rel, e));
}

// Querverweise (nur wenn alles geladen wurde)
const topicKeys = new Set(ctx.LEARN.modules.flatMap((m) => (m.topics || []).map((t) => `${m.id}/${t.id}`)));
const loaded = new Set(ctx.LEARN.modules.map((m) => m.id));
for (const e of ctx.LEARN.exams) for (const a of e.areas || []) for (const it of a.items || []) {
  if (it.ref && loaded.has(it.ref.split("/")[0]) && !topicKeys.has(it.ref)) { warnings++; console.log(`  ! ${e.id}: ref "${it.ref}" (item ${it.id}) zeigt auf kein Thema`); }
}

console.log(`\n${errors} Fehler, ${warnings} Warnungen`);
process.exit(errors ? 1 : 0);
