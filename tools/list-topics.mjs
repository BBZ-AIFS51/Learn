// Listet alle Module mit ihren Themen-IDs (für ref-Verweise in ap1.js/ap2.js).  Aufruf: node tools/list-topics.mjs
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
const run = (f) => vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
run(path.join(root, "assets/js/core.js"));
run(path.join(root, "data/meta.js"));
for (const f of fs.readdirSync(path.join(root, "data"))) {
  if (!f.endsWith(".js") || f === "meta.js" || /^ap\d/.test(f)) continue;
  try { run(path.join(root, "data", f)); } catch (e) { console.log(`# ${f}: FEHLER ${e.message}`); }
}
for (const m of ctx.LEARN.modules) {
  console.log(`\n${m.id} – ${m.title}`);
  for (const t of m.topics || []) console.log(`  ${m.id}/${t.id}  ${t.title}${t.exam ? "  [" + t.exam.join(",") + "]" : ""}`);
}
