/* FISI Lernportal – Single-Page-App ohne Build-Schritt.
   Daten: window.LEARN (siehe assets/js/core.js und docs/CONTENT.md) */
(function () {
  "use strict";
  const L = window.LEARN;
  const META = L.meta;

  /* ================= Hilfsfunktionen ================= */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = (s) => String(s ?? "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ß/g, "ss");
  const strip = (html) => String(html ?? "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\s+/g, " ").trim();
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const hash = (s) => { let h = 5381; for (const c of String(s)) h = ((h << 5) + h + c.charCodeAt(0)) | 0; return (h >>> 0).toString(36); };
  const pct = (a, b) => (b ? Math.round((a * 100) / b) : 0);
  const icon = (n, cls = "") => `<i class="bi bi-${n}${cls ? " " + cls : ""}" aria-hidden="true"></i>`;
  const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;
  const MONTHS = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
  const today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
  const parseDate = (s) => { const [y, m, d] = String(s).split("-").map(Number); return new Date(y, m - 1, d); };
  const daysUntil = (s) => Math.round((parseDate(s) - today()) / 864e5);
  const fmtDate = (s) => { const d = parseDate(s); return `${d.getDate()}. ${MONTHS[d.getMonth()]} ${d.getFullYear()}`; };
  const relDays = (n) => (n === 0 ? "heute" : n === 1 ? "morgen" : n > 0 ? `in ${n} Tagen` : `vor ${-n} Tagen`);
  const normInput = (s) => String(s ?? "").trim().toLowerCase().replace(/\s+/g, "").replace(/,/g, ".");

  function toast(msg) {
    let t = $(".toast-lite");
    if (!t) { t = document.createElement("div"); t.className = "toast-lite"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("show"), 2200);
  }

  /* ================= Speicher (nur im Browser) ================= */
  const Store = {
    key: "learn.v1",
    d: { check: {}, read: {}, quiz: {}, cards: {}, score: {}, prefs: {} },
    load() { try { const s = JSON.parse(localStorage.getItem(this.key) || "null"); if (s && typeof s === "object") for (const k in this.d) this.d[k] = Object.assign({}, this.d[k], s[k] || {}); } catch (e) { /* privat/gesperrt */ } },
    save() { try { localStorage.setItem(this.key, JSON.stringify(this.d)); } catch (e) { /* ignorieren */ } },
    reset() { this.d = { check: {}, read: {}, quiz: {}, cards: {}, score: {}, prefs: this.d.prefs }; this.save(); },
  };
  Store.load();

  /* ================= Datenmodell ================= */
  const loaded = {};
  for (const m of L.modules) loaded[m.id] = m;
  const EMPTY = () => ({ topics: [], exercises: [], quiz: [], cards: [], checklist: [], glossary: [], links: [], goals: [], exam: [] });
  const MODS = META.catalog.map((c) => {
    const m = Object.assign(EMPTY(), c, loaded[c.id] || {});
    m.icon = c.icon; m.hue = c.hue; m.nr = c.nr; m.year = c.year || m.year; m.hours = c.hours || m.hours;
    m.loaded = !!loaded[c.id];
    m.code = c.code || (c.nr ? String(c.nr) : "");
    m.label = c.nr ? `LF ${m.code}` : c.short || c.title;
    m.topicMap = Object.fromEntries(m.topics.map((t) => [t.id, t]));
    return m;
  });
  const MOD = Object.fromEntries(MODS.map((m) => [m.id, m]));
  const EXAMS = (META.exams || []).map((x) => Object.assign({ facts: [], parts: [], areas: [], tasks: [], tips: [], dates: [], links: [] }, x, L.exams.find((e) => e.id === x.id) || {}, { loaded: !!L.exams.find((e) => e.id === x.id) }));
  const EXAM = Object.fromEntries(EXAMS.map((e) => [e.id, e]));
  const TOOLS = L.tools.slice();

  const tKey = (m, t) => `${m.id}/${t.id}`;
  const cKey = (m, c) => `c:${m.id}/${c.id}`;
  const xKey = (e, it) => `x:${e.id}/${it.id}`;
  const qKey = (m, q) => `${m.id}/${q.id}`;
  const kKey = (m, c) => `${m.id}/${hash(c.f)}`;
  const examTags = (m, q) => q.exam || (m.topicMap[q.topic] || {}).exam || m.exam || [];

  const allQuestions = () => MODS.flatMap((m) => m.quiz.map((q) => ({ key: qKey(m, q), m, t: m.topicMap[q.topic], q })));
  const allCards = () => MODS.flatMap((m) => m.cards.map((c) => ({ key: kKey(m, c), m, t: m.topicMap[c.topic], c })));

  /* ================= Fortschritt ================= */
  function counts(scope) {
    const [kind, id] = scope.split(":");
    const S = Store.d;
    if (kind === "mod") { const m = MOD[id]; const tot = m.checklist.length; const done = m.checklist.filter((c) => S.check[cKey(m, c)]).length; return { done, tot }; }
    if (kind === "read") { const m = MOD[id]; return { done: m.topics.filter((t) => S.read[tKey(m, t)]).length, tot: m.topics.length }; }
    if (kind === "quizm") { const m = MOD[id]; return { done: m.quiz.filter((q) => (S.quiz[qKey(m, q)] || {}).l).length, tot: m.quiz.length }; }
    if (kind === "exam") { const e = EXAM[id]; const items = e.areas.flatMap((a) => a.items || []); return { done: items.filter((it) => S.check[xKey(e, it)]).length, tot: items.length }; }
    if (kind === "area") { const [eid, aid] = id.split("/"); const e = EXAM[eid]; const a = e.areas.find((x) => x.id === aid) || { items: [] }; const items = a.items || []; return { done: items.filter((it) => S.check[xKey(e, it)]).length, tot: items.length }; }
    if (kind === "all") {
      let done = 0, tot = 0;
      for (const m of MODS) { const c = counts("mod:" + m.id); done += c.done; tot += c.tot; }
      for (const e of EXAMS) { const c = counts("exam:" + e.id); done += c.done; tot += c.tot; }
      return { done, tot };
    }
    return { done: 0, tot: 0 };
  }
  function progEl(scope, fmt, extra = "") {
    const { done, tot } = counts(scope); const p = pct(done, tot);
    if (fmt === "bar") return `<div class="progress-thin ${extra}" data-prog="${scope}" data-fmt="bar" role="progressbar" aria-valuenow="${p}" aria-valuemin="0" aria-valuemax="100"><span style="width:${p}%"></span></div>`;
    if (fmt === "ring") return `<div class="ring ${extra}" data-prog="${scope}" data-fmt="ring" style="--p:${p}" data-label="${p}%"></div>`;
    if (fmt === "frac") return `<span data-prog="${scope}" data-fmt="frac">${done}/${tot}</span>`;
    return `<span data-prog="${scope}" data-fmt="pct">${p}%</span>`;
  }
  function refreshProgress() {
    for (const el of $$("[data-prog]")) {
      const { done, tot } = counts(el.dataset.prog); const p = pct(done, tot);
      const f = el.dataset.fmt;
      if (f === "bar") { el.firstElementChild.style.width = p + "%"; el.setAttribute("aria-valuenow", p); }
      else if (f === "ring") { el.style.setProperty("--p", p); el.dataset.label = p + "%"; }
      else if (f === "frac") el.textContent = `${done}/${tot}`;
      else el.textContent = p + "%";
    }
    renderNav();
  }

  /* ================= Bausteine ================= */
  const modIco = (m, size = "") => `<span class="mod-ico ${size}" style="--h:${m.hue}">${icon(m.icon)}</span>`;
  const examChips = (arr) => (arr || []).map((x) => `<span class="chip ${x.toLowerCase()}">${x}</span>`).join(" ");
  const lvlDots = (n) => `<span class="lvl" title="Schwierigkeit ${n}/3">${[1, 2, 3].map((i) => `<i class="${i <= n ? "on" : ""}"></i>`).join("")}</span>`;
  const emptyBox = (ic, text) => `<div class="empty">${icon(ic)}${text}</div>`;
  const crumbs = (...parts) => `<nav class="crumbs no-print" aria-label="Brotkrumen"><a href="#/">${icon("house")}</a>${parts.map((p) => `<span>/</span>${p}`).join("")}</nav>`;
  const checkItem = (key, text, aside = "") => `<label class="check-item"><input type="checkbox" data-check="${esc(key)}" ${Store.d.check[key] ? "checked" : ""} aria-label="erledigt"><span class="txt">${text}${aside ? `<span class="aside">${aside}</span>` : ""}</span></label>`;
  const CALLOUT_ICONS = { merke: "bookmark-star", tipp: "lightbulb", achtung: "exclamation-triangle", beispiel: "pencil-square", formel: "calculator", pruefung: "mortarboard" };

  function enhance(root) {
    for (const t of $$(".prose table, .quiz-q table", root)) {
      if (!t.parentElement.classList.contains("table-wrap")) { const w = document.createElement("div"); w.className = "table-wrap"; t.parentNode.insertBefore(w, t); w.appendChild(t); }
    }
    for (const c of $$(".callout", root)) {
      if (c.querySelector(":scope > .callout-ico")) continue;
      const kind = Object.keys(CALLOUT_ICONS).find((k) => c.classList.contains(k));
      c.insertAdjacentHTML("afterbegin", `<i class="bi bi-${CALLOUT_ICONS[kind] || "info-circle"} callout-ico" aria-hidden="true"></i>`);
    }
  }

  /* ================= Navigation ================= */
  const navEl = $("#nav");
  function navLink(href, inner, extra = "") { return `<a class="nav-link-x" href="${href}" ${extra}>${inner}</a>`; }
  function renderNav() {
    const cur = location.hash || "#/";
    const act = (href, exact) => (exact ? cur === href : cur === href || cur.startsWith(href + "/")) ? "active" : "";
    const modLink = (m) => {
      const c = counts("mod:" + m.id); const p = pct(c.done, c.tot);
      return `<a class="nav-link-x ${act("#/m/" + m.id)}" href="#/m/${m.id}" title="${esc(m.title)}"><span class="lf-no">${m.nr ? "LF" + m.code : icon(m.icon)}</span><span class="nav-title">${esc(m.nr ? m.title : m.title)}</span>${p ? `<span class="nav-pct">${p}%</span>` : ""}</a>`;
    };
    const group = (title, links) => `<div class="nav-group">${title ? `<span class="small-caps">${title}</span>` : ""}${links}</div>`;
    const years = [1, 2, 3].map((y) => group(`${y}. Ausbildungsjahr${y === 3 ? " · FISI" : ""}`, MODS.filter((m) => m.year === y && m.nr).map(modLink).join(""))).join("");
    navEl.innerHTML = `
      <a class="brand" href="#/"><span class="brand-logo">${icon("mortarboard-fill")}</span><span><span class="brand-title d-block">${esc(META.title)}</span><span class="brand-sub">${esc(META.klasse || "")}</span></span></a>
      ${group("", [
        [`#/`, "house", "Start", true], [`#/lernplan`, "list-check", "Lernplan & To-dos"], [`#/quiz`, "patch-question", "Quiz"],
        [`#/karten`, "stack", "Karteikarten"], [`#/tools`, "tools", "Rechner & Trainer"], [`#/glossar`, "book", "Glossar"],
      ].map(([h, i, t, ex]) => `<a class="nav-link-x ${act(h, ex)}" href="${h}">${icon(i)}<span class="nav-title">${t}</span></a>`).join(""))}
      ${group("Prüfungen", EXAMS.map((e) => { const c = counts("exam:" + e.id); const p = pct(c.done, c.tot); return `<a class="nav-link-x ${act("#/p/" + e.id)}" href="#/p/${e.id}">${icon(e.icon)}<span class="nav-title">${esc(e.title)} · ${esc(e.subtitle.split("·")[0].trim())}</span>${p ? `<span class="nav-pct">${p}%</span>` : ""}</a>`; }).join(""))}
      ${years}
      ${group("Fächer", MODS.filter((m) => !m.nr).map(modLink).join(""))}
      ${group("", `<a class="nav-link-x ${act("#/info")}" href="#/info">${icon("info-circle")}<span class="nav-title">Info, Quellen & Datenschutz</span></a><a class="nav-link-x" href="${esc(META.repo)}" target="_blank" rel="noopener">${icon("github")}<span class="nav-title">GitHub</span></a>`)}
    `;
  }

  /* ================= Router ================= */
  const view = $("#view");
  let disposers = [];
  const onDispose = (fn) => disposers.push(fn);
  function mount(html) { view.innerHTML = html; enhance(view); }

  const routes = [
    [/^\/?$/, viewHome],
    [/^\/m\/([\w-]+)\/t\/([\w-]+)$/, viewTopic],
    [/^\/m\/([\w-]+)\/arbeit$/, viewPracticeTest],
    [/^\/m\/([\w-]+)(?:\/([\w-]+))?(?:\/([\w-]+))?$/, viewModule],
    [/^\/p\/([\w-]+)(?:\/([\w-]+))?$/, viewExam],
    [/^\/quiz$/, viewQuizCenter],
    [/^\/karten$/, viewCardCenter],
    [/^\/tools(?:\/([\w-]+))?$/, viewTools],
    [/^\/lernplan$/, viewPlan],
    [/^\/glossar(?:\/(.+))?$/, viewGlossary],
    [/^\/info$/, viewInfo],
  ];
  function route() {
    disposers.forEach((f) => { try { f(); } catch (e) { /* */ } }); disposers = [];
    const path = decodeURIComponent((location.hash || "#/").slice(1));
    let hit = false;
    for (const [re, fn] of routes) { const mm = path.match(re); if (mm) { fn(...mm.slice(1)); hit = true; break; } }
    if (!hit) mount(emptyBox("signpost-split", `Seite nicht gefunden. <a href="#/">Zur Startseite</a>`));
    renderNav();
    const oc = window.bootstrap && bootstrap.Offcanvas.getInstance($("#sidebar")); if (oc) oc.hide();
    if (!route.keepScroll) window.scrollTo(0, 0);
    route.keepScroll = false;
    view.focus({ preventScroll: true });
    const title = $("h1", view); document.title = (title ? title.textContent.trim() + " · " : "") + META.title;
  }
  window.addEventListener("hashchange", route);

  /* ================= Globale Events ================= */
  view.addEventListener("change", (ev) => {
    const cb = ev.target.closest("[data-check]");
    if (cb) { const k = cb.dataset.check; if (cb.checked) Store.d.check[k] = 1; else delete Store.d.check[k]; Store.save(); refreshProgress(); }
  });
  view.addEventListener("click", (ev) => {
    const b = ev.target.closest("[data-sol]");
    if (b) {
      const box = document.getElementById(b.dataset.sol); if (!box) return;
      const open = box.hidden; box.hidden = !open;
      b.innerHTML = open ? `${icon("eye-slash")} Lösung ausblenden` : `${icon("eye")} Lösung anzeigen`;
      b.setAttribute("aria-expanded", open);
      return;
    }
    const h = ev.target.closest("[data-hint]");
    if (h) { const box = document.getElementById(h.dataset.hint); if (box) { box.hidden = !box.hidden; } }
  });

  /* ================= Startseite ================= */
  function nextDates() {
    const list = [];
    for (const t of META.termine || []) list.push({ ...t, href: t.module ? `#/m/${t.module}` : "" });
    for (const e of EXAMS) for (const d of e.dates || []) list.push({ ...d, href: `#/p/${e.id}` });
    return list.filter((d) => daysUntil(d.date) >= 0).sort((a, b) => parseDate(a.date) - parseDate(b.date));
  }
  function dateRow(d) {
    const dt = parseDate(d.date); const n = daysUntil(d.date);
    const inner = `<div class="date-box"><div class="d">${dt.getDate()}</div><div class="m">${MONTHS[dt.getMonth()]}</div></div><div class="grow"><div class="ttl">${esc(d.title)}</div><div class="sub">${relDays(n)}${d.note ? " · " + esc(d.note) : ""}</div></div>`;
    return d.href ? `<a class="list-row" href="${d.href}">${inner}</a>` : `<div class="list-row">${inner}</div>`;
  }
  function modCard(m) {
    const cl = counts("mod:" + m.id);
    return `<a class="tile mod-card ${m.loaded ? "" : "pending"}" href="#/m/${m.id}">
      <div class="d-flex gap-3 align-items-start">${modIco(m)}<div><div class="k">${esc(m.label)}${m.hours ? ` · ${m.hours} h` : ""}</div><div class="t">${esc(m.title)}</div></div></div>
      <div class="foot">
        <div class="meta">${m.loaded ? `<span>${icon("journal-text")} ${m.topics.length} Themen</span><span>${icon("patch-question")} ${m.quiz.length} Fragen</span><span>${icon("pencil-square")} ${m.exercises.length} Übungen</span>` : `<span>${icon("hourglass-split")} Inhalte folgen</span>`}</div>
        ${cl.tot ? progEl("mod:" + m.id, "bar") : ""}
        <div class="d-flex gap-1 flex-wrap">${examChips(m.exam)}</div>
      </div></a>`;
  }
  function viewHome() {
    const S = Store.d;
    const qs = Object.values(S.quiz); const answered = qs.length; const right = qs.filter((x) => x.l).length;
    const cardsKnown = Object.values(S.cards).filter((b) => b >= 3).length;
    const dates = nextDates().slice(0, 5);
    const pool = allQuestions().filter((x) => x.q.type === "single" || x.q.type === "tf");
    const qod = pool.length ? pool[Math.floor(today().getTime() / 864e5) % pool.length] : null;
    const years = [1, 2, 3].map((y) => `<h2 class="section-title">${icon("mortarboard")} ${y}. Ausbildungsjahr${y === 3 ? " · Fachrichtung Systemintegration" : ""}</h2><div class="grid cols-3">${MODS.filter((m) => m.year === y && m.nr).map(modCard).join("")}</div>`).join("");
    mount(`
      <section class="tile hero">
        <div>
          <div class="small-caps mb-2">${esc(META.klasse || "")}</div>
          <h1>Lernen für die FISI-Ausbildung</h1>
          <p>${esc(META.subtitle)} – Lernzettel, Übungen mit Lösungen, Quiz, Karteikarten, Probeklausuren und eine To-do-Liste für AP1 und AP2.</p>
          <div class="d-flex gap-2 flex-wrap">
            ${(() => { const l = S.prefs.last; const lm = l && MOD[l.m]; const lt = lm && lm.topicMap[l.t]; return lt ? `<a class="btn btn-accent" href="#/m/${lm.id}/t/${lt.id}">${icon("play-fill")} Weiterlernen: ${esc(lm.label)} · ${esc(lt.title.length > 38 ? lt.title.slice(0, 36) + "…" : lt.title)}</a>` : ""; })()}
            <a class="btn ${S.prefs.last ? "btn-soft" : "btn-accent"}" href="#/lernplan">${icon("list-check")} Lernplan öffnen</a>
            <a class="btn btn-soft" href="#/quiz">${icon("patch-question")} Quiz starten</a>
            <a class="btn btn-soft" href="#/karten">${icon("stack")} Karteikarten</a>
          </div>
        </div>
        <div class="d-flex align-items-center gap-3">${progEl("all", "ring")}<div class="stat"><span class="l">Lernziele erledigt</span><span class="v">${progEl("all", "frac")}</span></div></div>
      </section>

      <div class="grid cols-2 mt-3">
        <section class="tile">
          <div class="area-head"><span class="ttl">${icon("calendar-event")} Nächste Termine</span><a class="ms-auto small" href="#/p/ap1">Prüfungen</a></div>
          <div class="list">${dates.length ? dates.map(dateRow).join("") : `<div class="list-row"><span class="muted">Keine anstehenden Termine eingetragen.</span></div>`}</div>
        </section>
        <section class="tile tile-pad">
          <div class="ttl fw-bold mb-3">${icon("graph-up-arrow")} Dein Stand <span class="muted small fw-normal">(nur in diesem Browser gespeichert)</span></div>
          <div class="grid cols-4" style="gap:18px">
            <div class="stat"><span class="v">${answered}</span><span class="l">Fragen beantwortet</span></div>
            <div class="stat"><span class="v">${pct(right, answered)}%</span><span class="l">zuletzt richtig</span></div>
            <div class="stat"><span class="v">${cardsKnown}</span><span class="l">Karten sicher</span></div>
            <div class="stat"><span class="v">${Object.keys(S.read).length}</span><span class="l">Themen gelernt</span></div>
          </div>
        </section>
      </div>

      <h2 class="section-title">${icon("award")} Prüfungen</h2>
      <div class="grid cols-2">${EXAMS.map((e) => {
        const d = (e.dates || []).filter((x) => daysUntil(x.date) >= 0).sort((a, b) => parseDate(a.date) - parseDate(b.date))[0];
        return `<a class="tile tile-pad" href="#/p/${e.id}">
          <div class="d-flex gap-3 align-items-center mb-3"><span class="mod-ico" style="--h:${e.id === "ap1" ? 200 : 245}">${icon(e.icon)}</span><div><div class="fw-bold">${esc(e.title)} · ${esc(e.name)}</div><div class="muted small">${esc(e.subtitle)}</div></div></div>
          ${progEl("exam:" + e.id, "bar")}
          <div class="d-flex justify-content-between mt-2 small muted"><span>${progEl("exam:" + e.id, "frac")} Themen abgehakt</span><span>${d ? `${icon("calendar")} ${fmtDate(d.date)} · ${relDays(daysUntil(d.date))}` : ""}</span></div>
        </a>`;
      }).join("")}</div>

      ${qod ? `<h2 class="section-title">${icon("lightning-charge")} Frage des Tages</h2><section class="tile tile-pad qod" id="qod"></section>` : ""}

      ${years}
      <h2 class="section-title">${icon("collection")} Fächer</h2>
      <div class="grid cols-3">${MODS.filter((m) => !m.nr).map(modCard).join("")}</div>

      ${TOOLS.length ? `<h2 class="section-title">${icon("tools")} Rechner & Trainer</h2><div class="grid cols-4">${TOOLS.map(toolCard).join("")}</div>` : ""}
      ${footer()}
    `);
    if (qod) miniQuestion($("#qod"), qod);
  }
  function footer() {
    return `<footer class="footer"><span>${esc(META.title)} · ${esc(META.klasse || "")}${META.stand ? ` · Stand ${esc(META.stand)}` : ""} · kein offizielles Angebot der IHK oder Schule</span><span><a href="#/info">Info & Quellen</a> · <a href="#/info">Datenschutz</a> · <a href="${esc(META.repo)}" target="_blank" rel="noopener">GitHub</a></span></footer>`;
  }
  function miniQuestion(root, it) {
    const q = it.q;
    const opts = q.type === "tf" ? [["Richtig", true], ["Falsch", false]] : shuffle(q.options.map((o, i) => [o, i]));
    root.innerHTML = `<div class="small muted mb-2">${esc(it.m.label)}${it.t ? " · " + esc(it.t.title) : ""}</div><div class="quiz-q" style="font-size:16px">${q.q}</div>
      <div>${opts.map(([o, v], i) => `<button class="opt" data-v="${esc(JSON.stringify(v))}"><span class="key">${i + 1}</span><span>${q.type === "tf" ? o : o}</span></button>`).join("")}</div><div class="fb"></div>`;
    enhance(root);
    root.addEventListener("click", (ev) => {
      const b = ev.target.closest(".opt"); if (!b || b.disabled) return;
      const v = JSON.parse(b.dataset.v); const ok = v === q.answer;
      for (const o of $$(".opt", root)) { o.disabled = true; if (JSON.parse(o.dataset.v) === q.answer) o.classList.add("right"); }
      if (!ok) b.classList.add("wrong");
      recordAnswer(it.key, ok);
      $(".fb", root).innerHTML = feedbackBox(ok, q.explain);
    });
  }
  const feedbackBox = (ok, explain) => `<div class="feedback ${ok ? "ok" : "bad"}"><div class="h">${icon(ok ? "check-circle-fill" : "x-circle-fill")} ${ok ? "Richtig!" : "Leider falsch"}</div>${explain ? `<div>${explain}</div>` : ""}</div>`;
  function recordAnswer(key, ok) {
    const r = Store.d.quiz[key] || { r: 0, w: 0, l: 0 };
    if (ok) r.r++; else r.w++;
    r.l = ok ? 1 : 0; Store.d.quiz[key] = r; Store.save();
  }

  /* ================= Modul-Seite ================= */
  const MOD_TABS = [
    ["uebersicht", "Überblick", "grid", null],
    ["lernzettel", "Lernzettel", "journal-text", "topics"],
    ["uebungen", "Übungen", "pencil-square", "exercises"],
    ["quiz", "Quiz", "patch-question", "quiz"],
    ["karten", "Karteikarten", "stack", "cards"],
    ["checkliste", "Checkliste", "list-check", "checklist"],
    ["glossar", "Glossar", "book", "glossary"],
  ];
  function moduleHead(m, tab) {
    return `${crumbs(`<span>${esc(m.label)}</span>`)}
      <header class="page-head d-flex gap-3 align-items-start">
        ${modIco(m, "lg")}
        <div class="flex-grow-1">
          <div class="small-caps">${esc(m.label)}${m.year ? ` · ${m.year}. Ausbildungsjahr` : ""}${m.hours ? ` · ${m.hours} Stunden` : ""}</div>
          <h1>${esc(m.title)}</h1>
          <div class="d-flex gap-2 flex-wrap align-items-center">${examChips(m.exam)}${m.checklist.length ? `<span class="chip">${icon("list-check")} ${progEl("mod:" + m.id, "frac")} Lernziele</span>` : ""}${m.topics.length ? `<span class="chip">${icon("journal-check")} ${progEl("read:" + m.id, "frac")} Themen gelernt</span>` : ""}</div>
        </div>
      </header>
      <nav class="tabs" role="tablist">${MOD_TABS.map(([id, label, ic, key]) => {
        const n = key ? m[key].length : null; if (key && !n) return "";
        return `<a href="#/m/${m.id}/${id}" class="${tab === id ? "active" : ""}" role="tab" aria-selected="${tab === id}">${icon(ic)} ${label}${n ? ` <span class="cnt">${n}</span>` : ""}</a>`;
      }).join("")}</nav>`;
  }
  function viewModule(id, tab = "uebersicht", sub) {
    const m = MOD[id];
    if (!m) return mount(emptyBox("question-circle", "Unbekanntes Modul."));
    if (!m.loaded) return mount(moduleHead(m, "") + emptyBox("hourglass-split", "Für dieses Modul werden die Inhalte gerade erstellt. Schau bald wieder vorbei!"));
    const body = {
      uebersicht: () => modOverview(m),
      lernzettel: () => modTopics(m),
      uebungen: () => modExercises(m),
      quiz: () => `<div id="quizroot"></div>`,
      karten: () => `<div id="cardroot"></div>`,
      checkliste: () => modChecklist(m),
      glossar: () => glossaryList(m.glossary.map((g) => ({ ...g, m }))),
    }[tab];
    if (!body) return mount(emptyBox("question-circle", "Unbekannter Bereich."));
    mount(moduleHead(m, tab) + body() + footer());
    if (tab === "quiz") quizSetup($("#quizroot"), m.quiz.map((q) => ({ key: qKey(m, q), m, t: m.topicMap[q.topic], q })), { title: m.label, topics: m.topics });
    if (tab === "karten") new CardRunner($("#cardroot"), m.cards.map((c) => ({ key: kKey(m, c), m, t: m.topicMap[c.topic], c })));
    if (tab === "uebungen" && sub) { const el = document.getElementById("ex-" + sub); if (el) { route.keepScroll = true; setTimeout(() => el.scrollIntoView({ block: "start" }), 30); } }
  }
  function modOverview(m) {
    const s = m.school || {};
    return `
      <div class="grid cols-2">
        <section class="tile tile-pad">
          <div class="small-caps mb-2">Worum geht's?</div>
          <p class="mb-3">${esc(m.summary)}</p>
          <div class="small-caps mb-2">Das musst du am Ende können</div>
          <ul class="mb-0 ps-3">${m.goals.map((g) => `<li class="mb-1">${esc(g)}</li>`).join("")}</ul>
        </section>
        <section class="tile">
          <div class="area-head"><span class="ttl">${icon("signpost")} So lernst du dieses Lernfeld</span></div>
          <div class="list">
            ${[["lernzettel", "journal-text", "Lernzettel lesen", `${m.topics.length} Themen`, "read:" + m.id],
               ["uebungen", "pencil-square", "Übungen rechnen", `${m.exercises.length} Aufgaben mit Musterlösung`, null],
               ["quiz", "patch-question", "Quiz machen", `${m.quiz.length} Fragen`, "quizm:" + m.id],
               ["karten", "stack", "Karteikarten wiederholen", `${m.cards.length} Karten`, null],
               ["checkliste", "list-check", "Lernziele abhaken", `${m.checklist.length} Punkte`, "mod:" + m.id]]
              .filter((r) => m[{ lernzettel: "topics", uebungen: "exercises", quiz: "quiz", karten: "cards", checkliste: "checklist" }[r[0]]].length)
              .map(([tab, ic, t, sub, sc], i) => `<a class="list-row" href="#/m/${m.id}/${tab}"><span class="num-badge">${i + 1}</span><span class="grow"><span class="ttl d-block">${icon(ic)} ${t}</span><span class="sub">${sub}</span></span>${sc ? `<span class="small muted">${progEl(sc, "pct")}</span>` : icon("chevron-right", "muted")}</a>`).join("")}
          </div>
        </section>
      </div>
      ${s.hinweise || (s.themen && s.themen.length) || (s.termine && s.termine.length) ? `
      <h2 class="section-title">${icon("easel")} Im Unterricht (AIFS51)</h2>
      <section class="tile tile-pad">
        ${s.hinweise ? `<p>${esc(s.hinweise)}</p>` : ""}
        ${s.themen && s.themen.length ? `<div class="d-flex flex-wrap gap-2">${s.themen.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>` : ""}
      </section>` : ""}
      ${(() => { const ds = (META.termine || []).filter((t) => t.module === m.id && daysUntil(t.date) >= 0); return ds.length ? `<h2 class="section-title">${icon("calendar-event")} Termine</h2><section class="tile"><div class="list">${ds.map(dateRow).join("")}</div></section>` : ""; })()}
      <h2 class="section-title">${icon("journal-text")} Themen</h2>
      ${topicList(m)}
      ${m.links.length ? `<h2 class="section-title">${icon("link-45deg")} Weiterführende Links</h2><section class="tile"><div class="list">${m.links.map((l) => `<a class="list-row" href="${esc(l.url)}" target="_blank" rel="noopener"><span class="grow"><span class="ttl d-block">${esc(l.title)}</span>${l.note ? `<span class="sub">${esc(l.note)}</span>` : ""}</span>${icon("box-arrow-up-right", "muted")}</a>`).join("")}</div></section>` : ""}`;
  }
  function topicList(m) {
    return `<section class="tile"><div class="list">${m.topics.map((t, i) => {
      const done = Store.d.read[tKey(m, t)];
      return `<a class="list-row" href="#/m/${m.id}/t/${t.id}"><span class="num-badge ${done ? "done" : ""}">${done ? icon("check-lg") : i + 1}</span><span class="grow"><span class="ttl d-block">${esc(t.title)}</span>${t.summary ? `<span class="sub">${esc(t.summary)}</span>` : ""}</span><span class="d-none d-sm-flex gap-1">${examChips(t.exam || m.exam)}</span>${icon("chevron-right", "muted")}</a>`;
    }).join("")}</div></section>`;
  }
  function modTopics(m) {
    return `<div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2"><span class="muted">${plural(m.topics.length, "Thema", "Themen")} · ${progEl("read:" + m.id, "frac")} als gelernt markiert</span></div>${topicList(m)}`;
  }
  function exerciseCard(m, e, n) {
    const t = m.topicMap[e.topic];
    const sid = `sol-${m.id}-${e.id}`, hid = `hint-${m.id}-${e.id}`;
    return `<article class="tile exercise" id="ex-${esc(e.id)}">
      <div class="head"><span class="num-badge">${n}</span><span class="ttl">${esc(e.title)}</span>${lvlDots(e.level)}${examChips(e.exam)}${t ? `<a class="small ms-auto" href="#/m/${m.id}/t/${t.id}">${icon("journal-text")} ${esc(t.title)}</a>` : ""}</div>
      <div class="prose">${e.task}</div>
      <div class="d-flex gap-2 flex-wrap mt-2 no-print">
        <button class="btn btn-soft btn-sm" data-sol="${sid}" aria-expanded="false">${icon("eye")} Lösung anzeigen</button>
        ${e.hints && e.hints.length ? `<button class="btn btn-ghost btn-sm" data-hint="${hid}">${icon("lightbulb")} Tipp</button>` : ""}
      </div>
      ${e.hints && e.hints.length ? `<div id="${hid}" class="callout tipp mt-2" hidden>${e.hints.map((h) => `<p>${h}</p>`).join("")}</div>` : ""}
      <div id="${sid}" class="solution prose" hidden><span class="small-caps">${icon("check2-circle")} Musterlösung</span>${e.solution}</div>
    </article>`;
  }
  function modExercises(m) {
    return `<div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <div class="seg" role="radiogroup" aria-label="Schwierigkeit">${[["0", "Alle"], ["1", "Leicht"], ["2", "Mittel"], ["3", "Prüfungsnah"]].map(([v, l], i) => `<input type="radio" name="lvl" id="lvl${v}" value="${v}" ${i === 0 ? "checked" : ""}><label for="lvl${v}">${l}</label>`).join("")}</div>
        <a class="btn btn-soft btn-sm" href="#/m/${m.id}/arbeit">${icon("printer")} Übungsarbeit erstellen</a>
      </div>
      <div id="exlist">${m.exercises.map((e, i) => exerciseCard(m, e, i + 1)).join("")}</div>`;
  }
  view.addEventListener("change", (ev) => {
    if (ev.target.name !== "lvl") return;
    const v = +ev.target.value; const id = (location.hash.match(/#\/m\/([\w-]+)/) || [])[1]; const m = MOD[id]; if (!m) return;
    for (const e of m.exercises) { const el = document.getElementById("ex-" + e.id); if (el) el.hidden = v && e.level !== v; }
  });
  function modChecklist(m) {
    const groups = m.topics.map((t) => ({ t, items: m.checklist.filter((c) => c.topic === t.id) })).filter((g) => g.items.length);
    const rest = m.checklist.filter((c) => !m.topicMap[c.topic]);
    if (rest.length) groups.push({ t: { title: "Allgemein" }, items: rest });
    return `<section class="tile tile-pad d-flex gap-3 align-items-center mb-3">${progEl("mod:" + m.id, "ring", "sm")}<div><div class="fw-bold">Lernziele ${esc(m.label)}</div><div class="muted small">Hake ab, was du sicher kannst. Der Fortschritt wird nur in diesem Browser gespeichert.</div></div></section>
      ${groups.map((g) => `<section class="tile mb-3"><div class="area-head"><span class="ttl">${esc(g.t.title)}</span>${g.t.id ? `<a class="ms-auto small" href="#/m/${m.id}/t/${g.t.id}">${icon("journal-text")} Lernzettel</a>` : ""}</div><div class="check-list">${g.items.map((c) => checkItem(cKey(m, c), esc(c.text), examChips(c.exam))).join("")}</div></section>`).join("")}`;
  }

  /* ================= Thema (Lernzettel) ================= */
  function viewTopic(mid, tid) {
    const m = MOD[mid]; const t = m && m.topicMap[tid];
    if (!t) return mount(emptyBox("question-circle", "Thema nicht gefunden."));
    const i = m.topics.indexOf(t); const prev = m.topics[i - 1], next = m.topics[i + 1];
    const k = tKey(m, t); const done = !!Store.d.read[k];
    Store.d.prefs.last = { m: m.id, t: t.id }; Store.save();
    const qs = m.quiz.filter((q) => q.topic === t.id), ex = m.exercises.filter((e) => e.topic === t.id), cl = m.checklist.filter((c) => c.topic === t.id), cards = m.cards.filter((c) => c.topic === t.id);
    mount(`${crumbs(`<a href="#/m/${m.id}">${esc(m.label)}</a>`, `<a href="#/m/${m.id}/lernzettel">Lernzettel</a>`)}
      <header class="page-head">
        <div class="small-caps">${esc(m.label)} · Thema ${i + 1} von ${m.topics.length}</div>
        <h1>${esc(t.title)}</h1>
        <div class="d-flex gap-2 flex-wrap">${examChips(t.exam || m.exam)}</div>
      </header>
      <article class="tile tile-pad prose">${t.html}</article>
      <div class="d-flex gap-2 flex-wrap mt-3 no-print">
        <button class="btn ${done ? "btn-ok" : "btn-accent"}" id="readBtn">${icon(done ? "check-circle-fill" : "check-circle")} ${done ? "Als gelernt markiert" : "Als gelernt markieren"}</button>
        ${qs.length ? `<button class="btn btn-soft" id="topicQuiz">${icon("patch-question")} ${qs.length} Quizfragen zum Thema</button>` : ""}
        ${cards.length ? `<button class="btn btn-soft" id="topicCards">${icon("stack")} ${cards.length} Karteikarten</button>` : ""}
        <button class="btn btn-ghost" onclick="window.print()">${icon("printer")} Drucken</button>
      </div>
      <div id="topicRunner" class="mt-3"></div>
      ${cl.length ? `<h2 class="section-title">${icon("list-check")} Kannst du das?</h2><section class="tile check-list">${cl.map((c) => checkItem(cKey(m, c), esc(c.text))).join("")}</section>` : ""}
      ${ex.length ? `<h2 class="section-title">${icon("pencil-square")} Übungen zum Thema</h2>${ex.map((e) => exerciseCard(m, e, m.exercises.indexOf(e) + 1)).join("")}` : ""}
      <nav class="topic-nav no-print">
        ${prev ? `<a class="tile" href="#/m/${m.id}/t/${prev.id}"><div class="dir">${icon("arrow-left")} Vorheriges Thema</div><div class="fw-semi">${esc(prev.title)}</div></a>` : "<span></span>"}
        ${next ? `<a class="tile text-end" href="#/m/${m.id}/t/${next.id}"><div class="dir">Nächstes Thema ${icon("arrow-right")}</div><div class="fw-semi">${esc(next.title)}</div></a>` : `<a class="tile text-end" href="#/m/${m.id}/quiz"><div class="dir">Geschafft ${icon("arrow-right")}</div><div class="fw-semi">Quiz zum ganzen Lernfeld</div></a>`}
      </nav>${footer()}`);
    $("#readBtn").addEventListener("click", (ev) => {
      const now = !Store.d.read[k]; if (now) Store.d.read[k] = 1; else delete Store.d.read[k]; Store.save();
      const b = ev.currentTarget; b.className = `btn ${now ? "btn-ok" : "btn-accent"}`; b.innerHTML = `${icon(now ? "check-circle-fill" : "check-circle")} ${now ? "Als gelernt markiert" : "Als gelernt markieren"}`;
      refreshProgress(); if (now) toast("Super – weiter so!");
    });
    const runner = $("#topicRunner");
    if (qs.length) $("#topicQuiz").addEventListener("click", () => { new QuizRunner(runner, shuffle(qs).map((q) => ({ key: qKey(m, q), m, t, q })), { mode: "practice", onClose: () => (runner.innerHTML = "") }); runner.scrollIntoView({ behavior: "smooth", block: "start" }); });
    if (cards.length) $("#topicCards").addEventListener("click", () => { new CardRunner(runner, cards.map((c) => ({ key: kKey(m, c), m, t, c }))); runner.scrollIntoView({ behavior: "smooth", block: "start" }); });
  }

  /* ================= Übungsarbeit (Druckansicht) ================= */
  function viewPracticeTest(mid) {
    const m = MOD[mid]; if (!m || !m.loaded) return mount(emptyBox("question-circle", "Modul nicht gefunden."));
    const render = (n, lvl) => {
      const ex = shuffle(m.exercises.filter((e) => !lvl || e.level >= lvl)).slice(0, n);
      // Optionen mischen (in den Daten steht die richtige Antwort oft an erster Stelle)
      const mc = shuffle(m.quiz.filter((q) => q.type === "single" || q.type === "multi")).slice(0, 8).map((q) => {
        const order = shuffle(q.options.map((_, i) => i));
        const pos = (i) => order.indexOf(i);
        return { ...q, options: order.map((i) => q.options[i]), answer: Array.isArray(q.answer) ? q.answer.map(pos).sort((a, b) => a - b) : pos(q.answer) };
      });
      $("#paper").innerHTML = `
        <div class="tile tile-pad">
          <div class="d-flex justify-content-between flex-wrap gap-2 mb-3"><div><div class="small-caps">Übungsarbeit · ${esc(m.label)}</div><div class="fw-bold fs-5">${esc(m.title)}</div></div><div class="muted small">Name: ____________________ &nbsp; Datum: ____________</div></div>
          <div class="small-caps mb-2">Teil A · Aufgaben</div>
          ${ex.map((e, i) => `<div class="mb-4"><div class="fw-bold mb-1">Aufgabe ${i + 1}: ${esc(e.title)} ${lvlDots(e.level)}</div><div class="prose">${e.task}</div></div>`).join("")}
          ${mc.length ? `<div class="small-caps mb-2 mt-4">Teil B · Multiple Choice ${mc.some((q) => q.type === "multi") ? "(bei ☐☐ mehrere richtig)" : ""}</div>
          ${mc.map((q, i) => `<div class="mb-3"><div class="fw-semi mb-1">${i + 1}. ${q.q}${q.type === "multi" ? " <span class='muted small'>(mehrere richtig)</span>" : ""}</div>${q.options.map((o) => `<div>☐ ${o}</div>`).join("")}</div>`).join("")}` : ""}
        </div>
        <div class="print-break"></div>
        <div class="tile tile-pad mt-3" id="paperSol" hidden>
          <div class="small-caps mb-2">Lösungen</div>
          ${ex.map((e, i) => `<div class="mb-4"><div class="fw-bold mb-1">Aufgabe ${i + 1}: ${esc(e.title)}</div><div class="prose">${e.solution}</div></div>`).join("")}
          ${mc.length ? `<div class="fw-bold mb-1">Teil B</div><ol>${mc.map((q) => `<li>${(Array.isArray(q.answer) ? q.answer : [q.answer]).map((a) => q.options[a]).join(" · ")}</li>`).join("")}</ol>` : ""}
        </div>`;
      enhance($("#paper"));
    };
    mount(`${crumbs(`<a href="#/m/${m.id}">${esc(m.label)}</a>`, `<a href="#/m/${m.id}/uebungen">Übungen</a>`)}
      <header class="page-head"><h1>Übungsarbeit ${esc(m.label)}</h1><p class="lead">Zufällig zusammengestellte Aufgaben – ausdrucken oder am Bildschirm bearbeiten, danach mit den Lösungen vergleichen.</p></header>
      <div class="sticky-bar no-print">
        <select class="form-select form-select-sm w-auto" id="ptN">${[3, 5, 8, 12].map((n) => `<option value="${n}" ${n === 5 ? "selected" : ""}>${n} Aufgaben</option>`).join("")}</select>
        <select class="form-select form-select-sm w-auto" id="ptL"><option value="0">alle Stufen</option><option value="2">ab mittel</option><option value="3">nur prüfungsnah</option></select>
        <button class="btn btn-soft btn-sm" id="ptNew">${icon("shuffle")} Neu mischen</button>
        <button class="btn btn-soft btn-sm" id="ptSol">${icon("eye")} Lösungen</button>
        <button class="btn btn-accent btn-sm" onclick="window.print()">${icon("printer")} Drucken</button>
      </div>
      <div id="paper"></div>`);
    const go = () => render(+$("#ptN").value, +$("#ptL").value);
    $("#ptNew").onclick = go; $("#ptN").onchange = go; $("#ptL").onchange = go;
    $("#ptSol").onclick = () => { const s = $("#paperSol"); s.hidden = !s.hidden; if (!s.hidden) s.scrollIntoView({ behavior: "smooth" }); };
    go();
  }

  /* ================= Quiz ================= */
  function quizSetup(root, pool, opts = {}) {
    if (!pool.length) { root.innerHTML = emptyBox("patch-question", "Noch keine Fragen vorhanden."); return; }
    const topics = (opts.topics || []).filter((t) => pool.some((x) => x.q.topic === t.id));
    root.innerHTML = `<section class="tile tile-pad">
      <div class="fw-bold mb-3">${icon("sliders")} Quiz einstellen</div>
      ${topics.length > 1 ? `<div class="mb-3"><div class="small-caps mb-2">Themen</div><div class="pick-chips">${topics.map((t) => `<input type="checkbox" id="qt-${t.id}" value="${t.id}" checked><label for="qt-${t.id}">${esc(t.title)}</label>`).join("")}</div></div>` : ""}
      <div class="d-flex gap-3 flex-wrap align-items-end">
        <div><div class="small-caps mb-2">Anzahl</div><div class="seg">${[10, 20, 40, 0].map((n, i) => `<input type="radio" name="qn" id="qn${n}" value="${n}" ${i === 0 ? "checked" : ""}><label for="qn${n}">${n || "Alle"}</label>`).join("")}</div></div>
        <div><div class="small-caps mb-2">Auswahl</div><div class="seg">${[["all", "Alle"], ["weak", "Falsch/Neu"]].map(([v, l], i) => `<input type="radio" name="qf" id="qf${v}" value="${v}" ${i === 0 ? "checked" : ""}><label for="qf${v}">${l}</label>`).join("")}</div></div>
        <div><div class="small-caps mb-2">Modus</div><div class="seg">${[["practice", "Üben"], ["exam", "Prüfung"]].map(([v, l], i) => `<input type="radio" name="qm" id="qm${v}" value="${v}" ${i === 0 ? "checked" : ""}><label for="qm${v}">${l}</label>`).join("")}</div></div>
        <button class="btn btn-accent ms-auto" id="qStart">${icon("play-fill")} Start <span class="opacity-75" id="qCount"></span></button>
      </div>
      <div class="muted small mt-3">Üben: sofort Rückmeldung mit Erklärung. Prüfung: Auswertung am Ende, mit Zeitlimit (1,5 min pro Frage).</div>
    </section>`;
    const sel = () => {
      const tp = $$(".pick-chips input", root).filter((i) => i.checked).map((i) => i.value);
      const f = $("input[name=qf]:checked", root).value;
      return pool.filter((x) => (!topics.length || tp.includes(x.q.topic)) && (f === "all" || !(Store.d.quiz[x.key] || {}).l));
    };
    const upd = () => { const n = +$("input[name=qn]:checked", root).value; const c = sel().length; $("#qCount", root).textContent = `(${n ? Math.min(n, c) : c})`; };
    root.addEventListener("change", upd); upd();
    $("#qStart", root).onclick = () => {
      const n = +$("input[name=qn]:checked", root).value; const mode = $("input[name=qm]:checked", root).value;
      const items = shuffle(sel()).slice(0, n || undefined);
      if (!items.length) return toast("Keine passenden Fragen – ändere die Auswahl.");
      new QuizRunner(root, items, { mode, minutes: mode === "exam" ? Math.ceil(items.length * 1.5) : 0, onClose: () => quizSetup(root, pool, opts) });
    };
  }

  function evaluate(q, ans) {
    if (ans === undefined || ans === null) return false;
    if (q.type === "single") return ans === q.answer;
    if (q.type === "multi") return Array.isArray(ans) && ans.length === q.answer.length && q.answer.every((a) => ans.includes(a));
    if (q.type === "tf") return ans === q.answer;
    if (q.type === "input") { const n = normInput(ans); return n !== "" && q.answer.some((a) => normInput(a) === n); }
    return false;
  }
  function answerText(q, ans) {
    if (q.type === "single") return ans === undefined ? "–" : q.options[ans];
    if (q.type === "multi") return ans && ans.length ? ans.map((a) => q.options[a]).join(" · ") : "–";
    if (q.type === "tf") return ans === undefined ? "–" : ans ? "Richtig" : "Falsch";
    return ans ? esc(ans) : "–";
  }
  const correctText = (q) => (q.type === "input" ? esc(q.answer[0]) : answerText(q, q.answer));

  class QuizRunner {
    constructor(root, items, opts = {}) {
      this.root = root; this.opts = opts; this.mode = opts.mode || "practice";
      this.items = items.map((it) => ({ ...it, order: it.q.options ? shuffle(it.q.options.map((_, i) => i)) : null, ans: undefined, checked: false }));
      this.i = 0; this.t0 = Date.now(); this.finished = false;
      this.onKey = (e) => this.key(e);
      document.addEventListener("keydown", this.onKey);
      onDispose(() => this.dispose());
      if (opts.minutes) this.deadline = Date.now() + opts.minutes * 60000;
      this.render();
      if (this.deadline) { this.timer = setInterval(() => this.tick(), 1000); }
    }
    dispose() { document.removeEventListener("keydown", this.onKey); clearInterval(this.timer); }
    tick() {
      const el = $(".timer", this.root); const left = Math.max(0, this.deadline - Date.now());
      if (el) { const s = Math.round(left / 1000); el.innerHTML = `${icon("stopwatch")} ${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; el.classList.toggle("low", s < 60); }
      if (!left && !this.finished) { toast("Zeit abgelaufen!"); this.finish(); }
    }
    get cur() { return this.items[this.i]; }
    render() {
      const it = this.cur, q = it.q, n = this.items.length, practice = this.mode === "practice";
      const lock = practice && it.checked;
      let body = "";
      if (q.type === "single" || q.type === "multi") {
        body = it.order.map((oi, k) => {
          const selected = q.type === "single" ? it.ans === oi : (it.ans || []).includes(oi);
          let cls = selected ? "sel" : "";
          if (lock) { const right = q.type === "single" ? q.answer === oi : q.answer.includes(oi); cls = right ? "right" : selected ? "wrong" : ""; }
          return `<button class="opt ${cls}" data-o="${oi}" ${lock ? "disabled" : ""}><span class="key">${k + 1}</span><span>${q.options[oi]}</span></button>`;
        }).join("");
        if (q.type === "multi") body = `<div class="small muted mb-2">${icon("ui-checks")} Mehrere Antworten können richtig sein.</div>` + body;
      } else if (q.type === "tf") {
        body = [[true, "Richtig"], [false, "Falsch"]].map(([v, l], k) => {
          let cls = it.ans === v ? "sel" : ""; if (lock) cls = q.answer === v ? "right" : it.ans === v ? "wrong" : "";
          return `<button class="opt ${cls}" data-tf="${v}" ${lock ? "disabled" : ""}><span class="key">${k + 1}</span><span>${l}</span></button>`;
        }).join("");
      } else {
        body = `<input class="form-control form-control-lg mono" id="qin" autocomplete="off" spellcheck="false" placeholder="Antwort eingeben …" value="${esc(it.ans || "")}" ${lock ? "disabled" : ""}>`;
        if (lock && !evaluate(q, it.ans)) body += `<div class="small mt-2">Richtige Antwort: <strong class="mono">${esc(q.answer[0])}</strong></div>`;
      }
      const fb = lock ? feedbackBox(evaluate(q, it.ans), q.explain) : "";
      const last = this.i === n - 1;
      const primary = practice
        ? (it.checked ? `<button class="btn btn-accent" data-act="next">${last ? `${icon("flag")} Auswertung` : `Weiter ${icon("arrow-right")}`}</button>` : `<button class="btn btn-accent" data-act="check">${icon("check2")} Prüfen</button>`)
        : `<button class="btn btn-accent" data-act="next">${last ? `${icon("flag")} Abgeben` : `Weiter ${icon("arrow-right")}`}</button>`;
      this.root.innerHTML = `<section class="tile tile-pad quiz-wrap">
        <div class="quiz-top"><span class="small fw-semi">Frage ${this.i + 1}/${n}</span><div class="progress-thin"><span style="width:${pct(this.i + (it.checked ? 1 : 0), n)}%"></span></div>${this.deadline ? `<span class="timer"></span>` : ""}<button class="btn btn-ghost btn-sm" data-act="quit" title="Beenden">${icon("x-lg")}</button></div>
        <div class="small muted mb-2">${esc(it.m.label)}${it.t ? " · " + esc(it.t.title) : ""}</div>
        <div class="quiz-q">${q.q}</div>
        <div>${body}</div>
        ${fb}
        <div class="quiz-actions">
          <button class="btn btn-ghost" data-act="prev" ${this.i === 0 || practice ? "hidden" : ""}>${icon("arrow-left")} Zurück</button>
          <span class="small muted align-self-center d-none d-md-inline">${practice ? "Tasten: 1–9 wählen · Enter prüfen" : "Tasten: 1–9 wählen · Enter weiter"}</span>
          ${primary}
        </div></section>`;
      enhance(this.root);
      if (this.deadline) this.tick();
      this.root.onclick = (e) => this.click(e);
      const inp = $("#qin", this.root);
      if (inp) { inp.oninput = () => (it.ans = inp.value); if (!lock) setTimeout(() => inp.focus(), 0); }
    }
    click(e) {
      const it = this.cur, q = it.q;
      const o = e.target.closest("[data-o]"), tf = e.target.closest("[data-tf]"), act = e.target.closest("[data-act]");
      if (o && !o.disabled) {
        const v = +o.dataset.o;
        if (q.type === "single") it.ans = v;
        else { const s = new Set(it.ans || []); s.has(v) ? s.delete(v) : s.add(v); it.ans = [...s]; }
        this.render(); return;
      }
      if (tf && !tf.disabled) { it.ans = tf.dataset.tf === "true"; this.render(); return; }
      if (act) this.action(act.dataset.act);
    }
    action(a) {
      const it = this.cur;
      if (a === "check") {
        if (it.ans === undefined || (Array.isArray(it.ans) && !it.ans.length) || (it.q.type === "input" && !String(it.ans).trim())) return toast("Bitte zuerst eine Antwort wählen.");
        it.checked = true; recordAnswer(it.key, evaluate(it.q, it.ans)); this.render();
      } else if (a === "next") {
        if (this.i < this.items.length - 1) { this.i++; this.render(); this.root.scrollIntoView({ block: "nearest" }); } else this.finish();
      } else if (a === "prev") { if (this.i > 0) { this.i--; this.render(); } }
      else if (a === "quit") { if (confirm("Quiz beenden? Bisherige Antworten werden ausgewertet.")) this.finish(); }
    }
    key(e) {
      if (this.finished || !this.root.isConnected) return;
      if (e.target.matches("input:not(#qin), textarea, select")) return;
      const it = this.cur;
      if (/^[1-9]$/.test(e.key) && e.target.id !== "qin") {
        const k = +e.key - 1;
        if (it.order && it.order[k] !== undefined) $$(".opt", this.root)[k]?.click();
        else if (it.q.type === "tf" && k < 2) $$(".opt", this.root)[k]?.click();
      } else if (e.key === "Enter") {
        e.preventDefault(); const b = $("[data-act=check], [data-act=next]", this.root); if (b) b.click();
      }
    }
    finish() {
      if (this.finished) return; this.finished = true; this.dispose();
      if (this.mode === "exam") for (const it of this.items) if (!it.checked) { it.checked = true; recordAnswer(it.key, evaluate(it.q, it.ans)); }
      const res = this.items.filter((it) => it.checked || this.mode === "exam");
      const right = res.filter((it) => evaluate(it.q, it.ans));
      const wrong = res.filter((it) => !evaluate(it.q, it.ans));
      const p = pct(right.length, res.length); const secs = Math.round((Date.now() - this.t0) / 1000);
      const grade = p >= 92 ? "sehr gut (1)" : p >= 81 ? "gut (2)" : p >= 67 ? "befriedigend (3)" : p >= 50 ? "ausreichend (4)" : p >= 30 ? "mangelhaft (5)" : "ungenügend (6)";
      this.root.innerHTML = `<section class="tile tile-pad quiz-wrap">
        <div class="d-flex gap-4 align-items-center flex-wrap mb-3">
          <div class="ring" style="--p:${p}" data-label="${p}%"></div>
          <div><div class="fw-bold fs-5">${right.length} von ${res.length} richtig</div><div class="muted">IHK-Notenschlüssel: ${grade} · ${Math.floor(secs / 60)} min ${secs % 60} s</div></div>
        </div>
        <div class="d-flex gap-2 flex-wrap mb-3">
          ${wrong.length ? `<button class="btn btn-accent" data-r="wrong">${icon("arrow-repeat")} ${wrong.length} falsche wiederholen</button>` : ""}
          <button class="btn btn-soft" data-r="again">${icon("shuffle")} Nochmal mischen</button>
          <button class="btn btn-ghost" data-r="close">${icon("sliders")} Neue Auswahl</button>
        </div>
        ${res.length ? `<div class="small-caps mb-2">Auswertung</div><div class="list tile">${res.map((it) => { const ok = evaluate(it.q, it.ans); return `<details class="list-row d-block" ${ok ? "" : "open"}><summary class="d-flex gap-2 align-items-start" style="cursor:pointer;list-style:none">${icon(ok ? "check-circle-fill text-success" : "x-circle-fill text-danger")}<span class="grow">${strip(it.q.q).slice(0, 160)}</span></summary><div class="mt-2 small ps-4">${ok ? "" : `<div>Deine Antwort: ${answerText(it.q, it.ans)}</div>`}<div>Richtig: <strong>${correctText(it.q)}</strong></div>${it.q.explain ? `<div class="muted mt-1">${it.q.explain}</div>` : ""}</div></details>`; }).join("")}</div>` : ""}
      </section>`;
      this.root.onclick = (e) => {
        const b = e.target.closest("[data-r]"); if (!b) return;
        const r = b.dataset.r;
        if (r === "wrong") new QuizRunner(this.root, shuffle(wrong).map(({ key, m, t, q }) => ({ key, m, t, q })), { ...this.opts, minutes: 0, mode: "practice" });
        else if (r === "again") new QuizRunner(this.root, shuffle(this.items).map(({ key, m, t, q }) => ({ key, m, t, q })), this.opts);
        else if (this.opts.onClose) this.opts.onClose(); else this.root.innerHTML = "";
      };
      refreshProgress();
    }
  }

  function viewQuizCenter() {
    const pool = allQuestions();
    const S = Store.d.quiz;
    const byMod = MODS.filter((m) => m.quiz.length);
    const weakTopics = MODS.flatMap((m) => m.topics.map((t) => {
      const qs = m.quiz.filter((q) => q.topic === t.id).map((q) => S[qKey(m, q)]).filter(Boolean);
      const w = qs.filter((x) => !x.l).length; return { m, t, w, n: qs.length };
    })).filter((x) => x.w > 0).sort((a, b) => b.w - a.w).slice(0, 6);
    mount(`${crumbs("<span>Quiz</span>")}
      <header class="page-head"><h1>Quiz</h1><p class="lead">${pool.length} Fragen aus allen Lernfeldern. Wähle Module oder einen Prüfungsteil – im Prüfungsmodus mit Zeitlimit und Auswertung nach IHK-Notenschlüssel.</p></header>
      <div id="qc"></div>
      ${weakTopics.length ? `<h2 class="section-title">${icon("bullseye")} Deine Schwachstellen</h2><section class="tile"><div class="list">${weakTopics.map((x) => `<a class="list-row" href="#/m/${x.m.id}/t/${x.t.id}">${modIco(x.m, "sm")}<span class="grow"><span class="ttl d-block">${esc(x.t.title)}</span><span class="sub">${esc(x.m.label)} · ${x.w} von ${x.n} Fragen zuletzt falsch</span></span>${icon("chevron-right", "muted")}</a>`).join("")}</div></section>` : ""}
      ${footer()}`);
    const root = $("#qc");
    const setup = () => {
      root.innerHTML = `<section class="tile tile-pad">
        <div class="mb-3"><div class="small-caps mb-2">Prüfungsteil</div><div class="seg">${[["", "Alle"], ["AP1", "Nur AP1"], ["AP2", "Nur AP2"]].map(([v, l], i) => `<input type="radio" name="qx" id="qx${i}" value="${v}" ${i === 0 ? "checked" : ""}><label for="qx${i}">${l}</label>`).join("")}</div></div>
        <div class="mb-3"><div class="d-flex align-items-center gap-2 mb-2"><span class="small-caps">Module</span><button class="btn btn-ghost btn-sm" id="qcAll">alle</button><button class="btn btn-ghost btn-sm" id="qcNone">keine</button></div>
          <div class="pick-chips">${byMod.map((m) => `<input type="checkbox" id="qm-${m.id}" value="${m.id}" checked><label for="qm-${m.id}">${esc(m.label)} <span class="opacity-75">${m.quiz.length}</span></label>`).join("")}</div></div>
        <div id="qcInner"></div></section>`;
      const inner = () => {
        const x = $("input[name=qx]:checked", root).value;
        const ms = $$(".pick-chips input", root).filter((i) => i.checked).map((i) => i.value);
        const sub = pool.filter((it) => ms.includes(it.m.id) && (!x || examTags(it.m, it.q).includes(x)));
        const box = $("#qcInner", root);
        box.innerHTML = "<div></div>";
        quizSetup(box.firstChild, sub, { onClose: setup });
        const tile = box.querySelector(".tile"); if (tile) { tile.classList.remove("tile", "tile-pad"); tile.querySelector(".fw-bold")?.remove(); }
      };
      root.querySelector(".seg").addEventListener("change", inner);
      root.querySelectorAll(".pick-chips")[0].addEventListener("change", inner);
      $("#qcAll", root).onclick = () => { $$(".pick-chips input", root).slice(0, byMod.length).forEach((i) => (i.checked = true)); inner(); };
      $("#qcNone", root).onclick = () => { $$(".pick-chips input", root).slice(0, byMod.length).forEach((i) => (i.checked = false)); inner(); };
      inner();
    };
    setup();
  }

  /* ================= Karteikarten ================= */
  class CardRunner {
    constructor(root, cards, opts = {}) {
      this.root = root; this.all = cards; this.opts = opts;
      this.onKey = (e) => this.key(e); document.addEventListener("keydown", this.onKey); onDispose(() => document.removeEventListener("keydown", this.onKey));
      this.start();
    }
    box(k) { return Store.d.cards[k.key] || 0; }
    start() {
      if (!this.all.length) { this.root.innerHTML = emptyBox("stack", "Keine Karteikarten vorhanden."); return; }
      const groups = [0, 1, 2, 3, 4, 5].map((b) => shuffle(this.all.filter((c) => this.box(c) === b)));
      // zuerst schwache/neue Karten, sichere (Box 5) nur wenn sonst nichts da ist
      this.deck = [...groups[1], ...groups[0], ...groups[2], ...groups[3], ...groups[4]].slice(0, 25);
      if (!this.deck.length) this.deck = groups[5].slice(0, 25);
      this.i = 0; this.flipped = false; this.stats = { ok: 0, no: 0 };
      this.render();
    }
    render() {
      if (this.i >= this.deck.length) return this.done();
      const c = this.deck[this.i];
      const counts = [0, 1, 2, 3, 4, 5].map((b) => this.all.filter((x) => this.box(x) === b).length);
      this.root.innerHTML = `<div class="fc-stage">
        <div class="d-flex justify-content-between small muted mb-2"><span>Karte ${this.i + 1}/${this.deck.length}</span><span>${esc(c.m.label)}${c.t ? " · " + esc(c.t.title) : ""}</span></div>
        <div class="fc ${this.flipped ? "flipped" : ""}" tabindex="0" role="button" aria-label="Karte umdrehen">
          <div class="fc-face tile"><span class="corner chip">Frage</span><div class="txt">${c.c.f}</div><span class="hint">Klicken oder Leertaste zum Umdrehen</span></div>
          <div class="fc-face fc-back tile"><span class="corner chip ok">Antwort</span><div class="txt">${c.c.b}</div></div>
        </div>
        <div class="fc-actions">
          ${this.flipped ? `<button class="btn btn-bad" data-a="no">${icon("arrow-counterclockwise")} Nochmal <kbd class="ms-1 d-none d-md-inline">1</kbd></button><button class="btn btn-ok" data-a="ok">${icon("check-lg")} Gewusst <kbd class="ms-1 d-none d-md-inline">2</kbd></button>` : `<button class="btn btn-accent" data-a="flip">${icon("arrow-repeat")} Umdrehen</button>`}
        </div>
        <div class="boxes" title="Leitner-Fächer">${counts.map((n, b) => `<span>${b === 0 ? "neu" : "Fach " + b}: ${n}</span>`).join("")}</div>
      </div>`;
      this.root.onclick = (e) => { const b = e.target.closest("[data-a]"); if (b) return this.act(b.dataset.a); if (e.target.closest(".fc")) this.act("flip"); };
    }
    act(a) {
      const c = this.deck[this.i]; if (!c) return;
      if (a === "flip") { this.flipped = !this.flipped; $(".fc", this.root).classList.toggle("flipped", this.flipped); this.render(); return; }
      const b = this.box(c);
      Store.d.cards[c.key] = a === "ok" ? Math.min(5, b + 1) : 1; Store.save();
      this.stats[a === "ok" ? "ok" : "no"]++;
      if (a === "no") this.deck.push(c); // am Ende der Runde nochmal
      this.i++; this.flipped = false; this.render();
    }
    key(e) {
      if (!this.root.isConnected || e.target.matches("input, textarea, select")) return;
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); this.act("flip"); }
      else if (this.flipped && e.key === "1") this.act("no");
      else if (this.flipped && e.key === "2") this.act("ok");
    }
    done() {
      this.root.innerHTML = `<section class="tile tile-pad text-center"><div class="fs-1 mb-2">${icon("emoji-smile")}</div><div class="fw-bold fs-5 mb-1">Runde geschafft!</div><div class="muted mb-3">${this.stats.ok}× gewusst · ${this.stats.no}× nochmal</div><button class="btn btn-accent" data-a="again">${icon("arrow-repeat")} Nächste Runde</button></section>`;
      this.root.onclick = (e) => { if (e.target.closest("[data-a=again]")) this.start(); };
    }
  }
  function viewCardCenter() {
    const mods = MODS.filter((m) => m.cards.length);
    mount(`${crumbs("<span>Karteikarten</span>")}
      <header class="page-head"><h1>Karteikarten</h1><p class="lead">Lernen nach dem Leitner-Prinzip: Gewusste Karten wandern ein Fach weiter, nicht gewusste zurück in Fach 1 und kommen öfter dran.</p></header>
      <section class="tile tile-pad mb-3"><div class="d-flex align-items-center gap-2 mb-2"><span class="small-caps">Module</span><button class="btn btn-ghost btn-sm" id="kAll">alle</button><button class="btn btn-ghost btn-sm" id="kNone">keine</button></div>
        <div class="pick-chips" id="kPick">${mods.map((m) => `<input type="checkbox" id="km-${m.id}" value="${m.id}" checked><label for="km-${m.id}">${esc(m.label)} <span class="opacity-75">${m.cards.length}</span></label>`).join("")}</div></section>
      <div id="kRoot"></div>${footer()}`);
    const go = () => { const ids = $$("#kPick input").filter((i) => i.checked).map((i) => i.value); new CardRunner($("#kRoot"), allCards().filter((c) => ids.includes(c.m.id))); };
    $("#kPick").addEventListener("change", go);
    $("#kAll").onclick = () => { $$("#kPick input").forEach((i) => (i.checked = true)); go(); };
    $("#kNone").onclick = () => { $$("#kPick input").forEach((i) => (i.checked = false)); go(); };
    go();
  }

  /* ================= Prüfungen ================= */
  const EXAM_TABS = [["ueberblick", "Überblick", "info-circle"], ["themen", "Themen & To-dos", "list-check"], ["probeklausur", "Probeklausur", "file-earmark-text"], ["quiz", "Quiz", "patch-question"], ["tipps", "Tipps", "lightbulb"]];
  function viewExam(id, tab = "ueberblick") {
    const e = EXAM[id]; if (!e) return mount(emptyBox("question-circle", "Unbekannte Prüfung."));
    const head = `${crumbs(`<span>Prüfungen</span>`, `<span>${esc(e.title)}</span>`)}
      <header class="page-head d-flex gap-3 align-items-start">
        <span class="mod-ico lg" style="--h:${e.id === "ap1" ? 200 : 245}">${icon(e.icon)}</span>
        <div class="flex-grow-1"><div class="small-caps">${esc(e.name)}</div><h1>${esc(e.title)} · ${esc(e.subtitle)}</h1>
        <div class="d-flex gap-2 flex-wrap">${e.areas.length ? `<span class="chip">${icon("list-check")} ${progEl("exam:" + e.id, "frac")} Themen abgehakt</span>` : ""}</div></div>
      </header>
      <nav class="tabs">${EXAM_TABS.map(([t, l, ic]) => `<a href="#/p/${e.id}/${t}" class="${t === tab ? "active" : ""}">${icon(ic)} ${l}</a>`).join("")}</nav>`;
    if (!e.loaded) return mount(head + emptyBox("hourglass-split", "Die Inhalte zu dieser Prüfung werden gerade erstellt."));
    const pool = allQuestions().filter((it) => examTags(it.m, it.q).includes(e.title));
    const body = {
      ueberblick: () => `
        <div class="grid cols-4 mb-3">${e.facts.map((f) => `<div class="tile tile-pad"><div class="small muted mb-1">${icon(f.icon || "dot")} ${esc(f.label)}</div><div class="fw-bold">${esc(f.value)}</div></div>`).join("")}</div>
        <article class="tile tile-pad prose">${e.html}</article>
        ${e.parts.length ? `<h2 class="section-title">${icon("diagram-2")} Prüfungsbereiche</h2><div class="grid cols-2">${e.parts.map((p) => `<section class="tile tile-pad"><div class="fw-bold mb-2">${esc(p.title)}</div><div class="d-flex gap-2 flex-wrap mb-2">${p.weight ? `<span class="chip">${icon("percent")} ${esc(p.weight)}</span>` : ""}${p.duration ? `<span class="chip">${icon("clock")} ${esc(p.duration)}</span>` : ""}${p.form ? `<span class="chip">${esc(p.form)}</span>` : ""}</div>${p.html ? `<div class="prose small">${p.html}</div>` : ""}</section>`).join("")}</div>` : ""}
        ${e.dates.length ? `<h2 class="section-title">${icon("calendar-event")} Termine</h2><section class="tile"><div class="list">${e.dates.slice().sort((a, b) => parseDate(a.date) - parseDate(b.date)).map((d) => dateRow({ ...d, href: "" })).join("")}</div></section>` : ""}
        ${e.links.length ? `<h2 class="section-title">${icon("link-45deg")} Offizielle Quellen</h2><section class="tile"><div class="list">${e.links.map((l) => `<a class="list-row" href="${esc(l.url)}" target="_blank" rel="noopener"><span class="grow ttl">${esc(l.title)}</span>${icon("box-arrow-up-right", "muted")}</a>`).join("")}</div></section>` : ""}`,
      themen: () => examAreas(e),
      probeklausur: () => examTasks(e),
      quiz: () => `<div id="quizroot"></div>`,
      tipps: () => `<section class="tile"><div class="list">${e.tips.map((t, i) => `<div class="list-row"><span class="num-badge">${i + 1}</span><span class="grow">${t}</span></div>`).join("")}</div></section>`,
    }[tab];
    if (!body) return mount(head + emptyBox("question-circle", "Unbekannter Bereich."));
    mount(head + body() + footer());
    if (tab === "quiz") quizSetup($("#quizroot"), pool, {});
    if (tab === "probeklausur") bindTasks(e);
    if (tab === "themen") bindAreaFilter();
  }
  function examAreas(e) {
    const partOf = (a) => e.parts.find((p) => p.id === a.part);
    const byPart = e.parts.length ? [...e.parts.map((p) => ({ p, areas: e.areas.filter((a) => a.part === p.id) })), { p: { title: "Weitere Themen" }, areas: e.areas.filter((a) => !partOf(a)) }].filter((g) => g.areas.length) : [{ p: null, areas: e.areas }];
    return `<section class="tile tile-pad d-flex gap-3 align-items-center flex-wrap mb-3">${progEl("exam:" + e.id, "ring", "sm")}<div class="flex-grow-1"><div class="fw-bold">Deine To-do-Liste für die ${esc(e.title)}</div><div class="muted small">Alle prüfungsrelevanten Themen laut Prüfungskatalog – hake ab, was du sicher kannst. <span class="chip hot">${icon("fire")} häufig</span> = kommt oft dran.</div></div>
        <div class="seg" id="areaFilter"><input type="radio" name="af" id="afA" value="all" checked><label for="afA">Alle</label><input type="radio" name="af" id="afO" value="open"><label for="afO">Offen</label><input type="radio" name="af" id="afH" value="hot"><label for="afH">Häufig</label></div></section>
      ${byPart.map((g) => `${g.p ? `<h2 class="section-title">${icon("folder2-open")} ${esc(g.p.title)}</h2>` : ""}${g.areas.map((a) => `
        <section class="tile mb-3" data-area>
          <div class="area-head"><div class="grow"><div class="ttl">${esc(a.title)}</div><div class="d-flex gap-1 flex-wrap mt-1">${(a.lf || []).map((l) => (MOD[l] ? `<a class="chip" href="#/m/${l}">${esc(MOD[l].label)}</a>` : "")).join("")}</div></div><span class="small muted ms-auto">${progEl(`area:${e.id}/${a.id}`, "frac")}</span></div>
          <div class="check-list">${(a.items || []).map((it) => {
            const ref = it.ref && it.ref.split("/"); const rm = ref && MOD[ref[0]]; const rt = rm && rm.topicMap[ref[1]];
            const aside = `${it.hot ? `<span class="chip hot">${icon("fire")} häufig</span>` : ""}${rt ? `<a href="#/m/${rm.id}/t/${rt.id}">${icon("journal-text")} ${esc(rm.label)}: ${esc(rt.title)}</a>` : ""}`;
            return `<div data-item data-hot="${it.hot ? 1 : 0}" data-key="${esc(xKey(e, it))}">${checkItem(xKey(e, it), esc(it.text), aside)}</div>`;
          }).join("")}</div>
        </section>`).join("")}`).join("")}`;
  }
  function bindAreaFilter() {
    const f = $("#areaFilter"); if (!f) return;
    const apply = () => {
      const v = $("input[name=af]:checked").value;
      for (const el of $$("[data-item]")) el.hidden = (v === "open" && Store.d.check[el.dataset.key]) || (v === "hot" && el.dataset.hot !== "1");
      for (const s of $$("[data-area]")) s.hidden = !$$("[data-item]", s).some((x) => !x.hidden);
    };
    f.addEventListener("change", apply);
  }
  function examTasks(e) {
    if (!e.tasks.length) return emptyBox("file-earmark-text", "Noch keine Probeklausur vorhanden.");
    const total = e.tasks.reduce((n, t) => n + t.parts.reduce((m, p) => m + (p.points || 0), 0), 0);
    const byPart = e.parts.length && e.tasks.some((t) => t.part) ? e.parts.filter((p) => e.tasks.some((t) => t.part === p.id)) : null;
    const sets = [...new Set(e.tasks.map((t) => t.set).filter(Boolean))];
    return `<div class="sticky-bar no-print">
        ${sets.length > 1 ? `<select class="form-select form-select-sm w-auto" id="tkSet">${sets.map((s, i) => `<option value="${esc(s)}" ${i === 0 ? "selected" : ""}>Probeklausur ${esc(s)}</option>`).join("")}<option value="">Alle Aufgaben</option></select>` : ""}
        ${byPart ? `<select class="form-select form-select-sm w-auto" id="tkPart"><option value="">Alle Bereiche</option>${byPart.map((p) => `<option value="${p.id}">${esc(p.title)}</option>`).join("")}</select>` : ""}
        <button class="btn btn-soft btn-sm" id="tkTimer">${icon("stopwatch")} 90-Minuten-Timer</button><span class="timer" id="tkClock"></span>
        <span class="ms-auto small fw-semi">Selbstbewertung: <span id="tkScore">0</span> / <span id="tkTotal">${total}</span> Punkte · <span id="tkGrade">–</span></span>
        <button class="btn btn-ghost btn-sm" onclick="window.print()" title="Drucken">${icon("printer")}</button>
      </div>
      <p class="muted small">Bearbeite die Aufgaben wie in der echten Prüfung (auf Papier oder in den Textfeldern), decke dann die Musterlösung auf und trage deine Punkte ein. Punkte werden im Browser gespeichert.</p>
      ${e.tasks.map((t, ti) => `<article class="tile task-card" data-task data-part="${esc(t.part || "")}" data-set="${esc(t.set || "")}">
        <div class="d-flex gap-2 align-items-baseline flex-wrap"><span class="num-badge">${t.set ? e.tasks.filter((x) => x.set === t.set).indexOf(t) + 1 : ti + 1}</span><div class="fw-bold fs-6 flex-grow-1">${esc(t.title)}</div><span class="pts">${t.parts.reduce((m, p) => m + (p.points || 0), 0)} Punkte</span></div>
        <div class="prose mt-2">${t.scenario}</div>
        ${t.parts.map((p, pi) => { const sid = `tsol-${t.id}-${pi}`; const sk = `${e.id}/${t.id}/${pi}`; return `<div class="task-part">
          <div class="d-flex gap-2"><div class="prose flex-grow-1">${p.q}</div><span class="pts">${p.points || 0} P.</span></div>
          <textarea class="form-control mt-2 no-print" rows="3" placeholder="Deine Antwort / Notizen (wird nicht gespeichert)"></textarea>
          <div class="d-flex gap-2 align-items-center mt-2 no-print flex-wrap">
            <button class="btn btn-soft btn-sm" data-sol="${sid}">${icon("eye")} Lösung anzeigen</button>
            <label class="small muted d-flex align-items-center gap-2 ms-auto">Erreicht <input type="number" class="form-control form-control-sm" style="width:80px" min="0" max="${p.points || 0}" step="0.5" data-score="${esc(sk)}" value="${Store.d.score[sk] ?? ""}"> / ${p.points || 0}</label>
          </div>
          <div id="${sid}" class="solution prose" hidden><span class="small-caps">${icon("check2-circle")} Musterlösung</span>${p.solution}</div>
        </div>`; }).join("")}
      </article>`).join("")}`;
  }
  function bindTasks(e) {
    const upd = () => {
      let s = 0, tot = 0;
      for (const card of $$("[data-task]")) { if (card.hidden) continue; for (const inp of $$("[data-score]", card)) { s += +inp.value || 0; tot += +inp.max || 0; } }
      $("#tkScore").textContent = String(s).replace(".", ","); $("#tkTotal").textContent = tot;
      const p = pct(s, tot); $("#tkGrade").textContent = s ? `${p}% → ${p >= 92 ? "1" : p >= 81 ? "2" : p >= 67 ? "3" : p >= 50 ? "4" : p >= 30 ? "5" : "6"}` : "–";
    };
    view.addEventListener("input", (ev) => {
      const inp = ev.target.closest("[data-score]"); if (!inp) return;
      const v = Math.max(0, Math.min(+inp.max, +inp.value || 0)); if (inp.value === "") delete Store.d.score[inp.dataset.score]; else Store.d.score[inp.dataset.score] = v;
      Store.save(); upd();
    });
    const selP = $("#tkPart"), selS = $("#tkSet");
    const filter = () => { for (const c of $$("[data-task]")) c.hidden = !!((selP && selP.value && c.dataset.part !== selP.value) || (selS && selS.value && c.dataset.set !== selS.value)); upd(); };
    if (selP) selP.onchange = filter;
    if (selS) selS.onchange = filter;
    filter();
    let tm = null;
    const mins = () => (selP && selP.value === "wiso" ? 60 : 90);
    const label = () => `${icon("stopwatch")} ${mins()}-Minuten-Timer`;
    if (selP) selP.addEventListener("change", () => { if (!tm) $("#tkTimer").innerHTML = label(); });
    $("#tkTimer").onclick = () => {
      if (tm) { clearInterval(tm); tm = null; $("#tkClock").textContent = ""; $("#tkTimer").innerHTML = label(); return; }
      const end = Date.now() + mins() * 60000;
      const tick = () => { const s = Math.max(0, Math.round((end - Date.now()) / 1000)); $("#tkClock").innerHTML = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; $("#tkClock").classList.toggle("low", s < 600); if (!s) { clearInterval(tm); toast("Zeit ist um!"); } };
      tm = setInterval(tick, 1000); tick(); $("#tkTimer").innerHTML = `${icon("stop-circle")} Timer stoppen`;
      onDispose(() => clearInterval(tm));
    };
    upd();
  }

  /* ================= Lernplan (alle To-dos) ================= */
  function viewPlan() {
    const S = Store.d;
    const all = counts("all");
    mount(`${crumbs("<span>Lernplan</span>")}
      <header class="page-head"><h1>Lernplan & To-dos</h1><p class="lead">Alle Lernziele an einem Ort: die Themenlisten für AP1 und AP2 aus dem Prüfungskatalog und die Lernziele jedes Lernfelds. Abhaken, was sitzt – der Rest ist deine To-do-Liste.</p></header>
      <section class="tile tile-pad d-flex gap-4 align-items-center flex-wrap mb-3">
        ${progEl("all", "ring")}
        <div class="flex-grow-1"><div class="fw-bold fs-5">${progEl("all", "frac")} erledigt</div><div class="muted small">Gespeichert in diesem Browser. Sichere deinen Stand per Export, um ihn auf ein anderes Gerät zu übertragen.</div></div>
        <div class="d-flex gap-2 flex-wrap no-print">
          <button class="btn btn-soft btn-sm" id="exp">${icon("download")} Export</button>
          <label class="btn btn-soft btn-sm mb-0">${icon("upload")} Import<input type="file" accept="application/json" id="imp" hidden></label>
          <button class="btn btn-ghost btn-sm" id="rst">${icon("trash")} Zurücksetzen</button>
        </div>
      </section>
      <div class="d-flex gap-2 flex-wrap mb-2 no-print">
        <div class="seg" id="planF">${[["all", "Alles"], ["ap1", "AP1"], ["ap2", "AP2"], ["lf", "Lernfelder"]].map(([v, l], i) => `<input type="radio" name="pf" id="pf${v}" value="${v}" ${i === 0 ? "checked" : ""}><label for="pf${v}">${l}</label>`).join("")}</div>
        <div class="seg" id="planO"><input type="radio" name="po" id="poA" value="all" checked><label for="poA">Alle Punkte</label><input type="radio" name="po" id="poO" value="open"><label for="poO">Nur offene</label></div>
      </div>
      ${EXAMS.filter((e) => e.loaded).map((e) => `<div data-plan="${e.id}">
        <h2 class="section-title">${icon(e.icon)} ${esc(e.title)} · ${esc(e.subtitle)} <span class="small muted fw-normal ms-auto">${progEl("exam:" + e.id, "frac")}</span></h2>
        ${e.areas.map((a) => `<details class="tile mb-2" data-group><summary class="area-head" style="cursor:pointer"><span class="grow ttl">${esc(a.title)}</span><span class="small muted">${progEl(`area:${e.id}/${a.id}`, "frac")}</span></summary>
          <div class="check-list">${(a.items || []).map((it) => `<div data-item data-key="${esc(xKey(e, it))}">${checkItem(xKey(e, it), esc(it.text), it.hot ? `<span class="chip hot">${icon("fire")} häufig</span>` : "")}</div>`).join("")}</div></details>`).join("")}
      </div>`).join("")}
      <div data-plan="lf"><h2 class="section-title">${icon("mortarboard")} Lernfelder & Fächer</h2>
        ${MODS.filter((m) => m.checklist.length).map((m) => `<details class="tile mb-2" data-group><summary class="area-head" style="cursor:pointer">${modIco(m, "sm")}<span class="grow"><span class="ttl d-block">${esc(m.label)} · ${esc(m.title)}</span></span><span class="small muted">${progEl("mod:" + m.id, "frac")}</span></summary>
          <div class="check-list">${m.checklist.map((c) => `<div data-item data-key="${esc(cKey(m, c))}">${checkItem(cKey(m, c), esc(c.text), examChips(c.exam))}</div>`).join("")}</div></details>`).join("")}
      </div>${footer()}`);
    const apply = () => {
      const f = $("input[name=pf]:checked").value, o = $("input[name=po]:checked").value;
      for (const sec of $$("[data-plan]")) sec.hidden = f !== "all" && sec.dataset.plan !== f;
      for (const it of $$("[data-item]")) it.hidden = o === "open" && !!Store.d.check[it.dataset.key];
      for (const g of $$("[data-group]")) { g.hidden = !$$("[data-item]", g).some((x) => !x.hidden); if (o === "open") g.open = true; }
    };
    $("#planF").onchange = apply; $("#planO").onchange = apply;
    $("#exp").onclick = () => {
      const blob = new Blob([JSON.stringify({ app: "fisi-lernportal", v: 1, date: new Date().toISOString(), data: Store.d }, null, 1)], { type: "application/json" });
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `lernstand-${new Date().toISOString().slice(0, 10)}.json`; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    };
    $("#imp").onchange = async (ev) => {
      const f = ev.target.files[0]; if (!f) return;
      try { const j = JSON.parse(await f.text()); const d = j.data || j; for (const k in Store.d) if (d[k]) Store.d[k] = Object.assign({}, Store.d[k], d[k]); Store.save(); toast("Lernstand importiert"); route(); }
      catch (e) { toast("Datei konnte nicht gelesen werden"); }
    };
    $("#rst").onclick = () => { if (confirm("Wirklich den gesamten Lernstand (Häkchen, Quiz, Karteikarten) löschen?")) { Store.reset(); route(); toast("Zurückgesetzt"); } };
  }

  /* ================= Glossar ================= */
  function glossaryList(entries, withSource) {
    if (!entries.length) return emptyBox("book", "Keine Einträge.");
    const sorted = entries.slice().sort((a, b) => a.term.localeCompare(b.term, "de", { sensitivity: "base" }));
    const letter = (t) => { const c = norm(t)[0] || "#"; return /[a-z]/.test(c) ? c.toUpperCase() : "#"; };
    const letters = [...new Set(sorted.map((g) => letter(g.term)))];
    return `${letters.length > 6 ? `<nav class="letter-nav">${letters.map((l) => `<a href="javascript:void(0)" data-letter="${l}">${l}</a>`).join("")}</nav>` : ""}
      <section class="tile tile-pad"><dl class="gloss mb-0">${sorted.map((g, i) => `${i === 0 || letter(g.term) !== letter(sorted[i - 1].term) ? `<div class="small-caps mt-3" id="gl-${letter(g.term)}">${letter(g.term)}</div>` : ""}<div data-g="${esc(norm(g.term + " " + g.def))}"><dt>${esc(g.term)}${withSource ? ` <a class="src fw-normal" href="#/m/${g.m.id}">${esc(g.m.label)}</a>` : ""}</dt><dd>${esc(g.def)}</dd></div>`).join("")}</dl></section>`;
  }
  view.addEventListener("click", (ev) => { const a = ev.target.closest("[data-letter]"); if (a) { ev.preventDefault(); document.getElementById("gl-" + a.dataset.letter)?.scrollIntoView({ behavior: "smooth", block: "start" }); } });
  function viewGlossary(q = "") {
    const entries = MODS.flatMap((m) => m.glossary.map((g) => ({ ...g, m })));
    mount(`${crumbs("<span>Glossar</span>")}<header class="page-head"><h1>Glossar</h1><p class="lead">${entries.length} Fachbegriffe aus allen Lernfeldern – von ARP bis Zero Trust.</p></header>
      <input class="form-control mb-3" id="gq" placeholder="Begriff filtern …" value="${esc(q)}" autocomplete="off">
      <div id="gl">${glossaryList(entries, true)}</div>${footer()}`);
    const inp = $("#gq");
    const f = () => { const v = norm(inp.value.trim()); for (const d of $$("[data-g]")) d.hidden = v && !d.dataset.g.includes(v); };
    inp.oninput = f; if (q) f();
  }

  /* ================= Tools ================= */
  const toolHelpers = {
    esc, icon, shuffle, toast,
    rand: (a, b) => a + Math.floor(Math.random() * (b - a + 1)),
    pick: (arr) => arr[Math.floor(Math.random() * arr.length)],
    fmt: (n, d = 2) => Number(n).toLocaleString("de-DE", { maximumFractionDigits: d }),
    parse: (s) => { s = String(s ?? "").trim().replace(/\s/g, ""); if (s.includes(",")) s = s.replace(/\./g, "").replace(",", "."); const n = parseFloat(s); return Number.isFinite(n) ? n : NaN; },
    feedback: (ok, html) => feedbackBox(ok, html),
    onDispose,
  };
  const toolCard = (t) => `<a class="tile mod-card" href="#/tools/${t.id}"><div class="d-flex gap-3 align-items-center"><span class="mod-ico sm" style="--h:${t.hue ?? 230}">${icon(t.icon || "tools")}</span><div class="t">${esc(t.title)}</div></div><div class="muted small">${esc(t.desc || "")}</div><div class="foot"><div class="d-flex gap-1">${examChips(t.exam)}</div></div></a>`;
  function viewTools(id) {
    if (!id) {
      return mount(`${crumbs("<span>Rechner & Trainer</span>")}<header class="page-head"><h1>Rechner & Trainer</h1><p class="lead">Interaktive Übungen für die typischen Rechenaufgaben in AP1 und AP2 – mit Zufallsaufgaben, Lösungskontrolle und Rechenweg.</p></header>
        ${TOOLS.length ? `<div class="grid cols-3">${TOOLS.map(toolCard).join("")}</div>` : emptyBox("tools", "Die Trainer werden gerade gebaut.")}${footer()}`);
    }
    const t = TOOLS.find((x) => x.id === id); if (!t) return mount(emptyBox("question-circle", "Tool nicht gefunden."));
    mount(`${crumbs(`<a href="#/tools">Rechner & Trainer</a>`)}<header class="page-head d-flex gap-3 align-items-start"><span class="mod-ico lg" style="--h:${t.hue ?? 230}">${icon(t.icon || "tools")}</span><div><h1>${esc(t.title)}</h1><p class="lead">${esc(t.desc || "")}</p><div class="d-flex gap-2 mt-2 flex-wrap">${examChips(t.exam)}${(t.modules || []).map((mm) => (MOD[mm] ? `<a class="chip" href="#/m/${mm}">${esc(MOD[mm].label)}</a>` : "")).join("")}</div></div></header><div class="tool-root" id="toolRoot"></div>${footer()}`);
    try { t.render($("#toolRoot"), toolHelpers); enhance($("#toolRoot")); } catch (e) { console.error(e); $("#toolRoot").innerHTML = emptyBox("bug", "Dieses Tool konnte nicht geladen werden."); }
  }

  /* ================= Info ================= */
  function viewInfo() {
    const n = { topics: 0, quiz: 0, exercises: 0, cards: 0, checklist: 0, glossary: 0 };
    for (const m of MODS) for (const k in n) n[k] += m[k].length;
    const xi = EXAMS.reduce((s, e) => s + e.areas.reduce((a, x) => a + (x.items || []).length, 0), 0);
    mount(`${crumbs("<span>Info & Quellen</span>")}<header class="page-head"><h1>Info & Quellen</h1><p class="lead">Ein Lernportal von Azubis für Azubis der Klasse ${esc(META.klasse || "")}.</p></header>
      <div class="grid cols-4 mb-3">${[["journal-text", n.topics, "Lernzettel"], ["pencil-square", n.exercises, "Übungen"], ["patch-question", n.quiz, "Quizfragen"], ["stack", n.cards, "Karteikarten"], ["list-check", n.checklist + xi, "Lernziele"], ["book", n.glossary, "Glossarbegriffe"], ["tools", TOOLS.length, "Trainer"], ["file-earmark-text", EXAMS.reduce((s, e) => s + e.tasks.length, 0), "Prüfungsaufgaben"]].map(([i, v, l]) => `<div class="tile tile-pad stat"><span class="l">${icon(i)} ${l}</span><span class="v">${v}</span></div>`).join("")}</div>
      <article class="tile tile-pad prose">
        <h5>Was ist das?</h5>
        <p>Eine Lernplattform für die Ausbildung zum Fachinformatiker / zur Fachinformatikerin für Systemintegration. Sie deckt alle Lernfelder des KMK-Rahmenlehrplans (LF 1–12, Fachrichtung Systemintegration) sowie WiSo, Englisch und Kommunikation ab und bereitet gezielt auf die IHK-Abschlussprüfung Teil 1 (AP1) und Teil 2 (AP2) vor.</p>
        <h5>Quellen</h5>
        <ul>
          <li>KMK-Rahmenlehrplan Fachinformatiker/-in (Beschluss vom 13.12.2019) und Ausbildungsverordnung für Fachinformatiker/-innen (FIAusbV, 2020)</li>
          <li>Prüfungskatalog der ZPA Nord-West für Fachinformatiker/-in Systemintegration, 2. Auflage 2024 – die Themen-Checklisten orientieren sich an dessen Gliederung, sind aber eigenständig formuliert. Das Original ist beim u-form Verlag erhältlich.</li>
          <li>Unterrichtsmaterialien und Themenübersichten der Klasse AIFS51 (BBZ Dithmarschen) als Orientierung, welche Themen im Unterricht behandelt werden</li>
          <li>Öffentliche Informationen der IHKs zu Prüfungsaufbau und Terminen</li>
        </ul>
        <div class="callout achtung"><strong>Ohne Gewähr:</strong> Alle Inhalte wurden sorgfältig erstellt und geprüft, können aber Fehler enthalten. Verbindlich sind immer die Angaben deiner IHK und deiner Lehrkräfte. Prüfungstermine bitte bei der IHK Flensburg gegenprüfen.</div>
        <h5 id="datenschutz">Datenschutz</h5>
        <ul>
          <li><strong>Hosting:</strong> Die Seite wird über GitHub Pages (GitHub Inc., USA) ausgeliefert. Beim Aufruf verarbeitet GitHub technisch notwendige Verbindungsdaten wie deine IP-Adresse, um die Seite auszuliefern und abzusichern. Details: <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">GitHub-Datenschutzerklärung</a>. GitHub ist unter dem EU-US Data Privacy Framework zertifiziert.</li>
          <li><strong>Keine Drittanbieter:</strong> Schriften, Icons und Bootstrap liegen direkt in diesem Repository. Es werden keine Google Fonts, CDNs, Analyse- oder Tracking-Dienste eingebunden und keine Cookies gesetzt.</li>
          <li><strong>Dein Fortschritt:</strong> Häkchen, Quiz-Ergebnisse, Karteikarten-Stände und die Design-Einstellung werden ausschließlich lokal in deinem Browser gespeichert (localStorage) und nie übertragen – es gibt kein Konto. Du kannst die Daten jederzeit unter <a href="#/lernplan">Lernplan → Zurücksetzen</a> oder über die Browser-Einstellungen löschen. Per Export sicherst du deinen Stand als Datei, um ihn auf ein anderes Gerät zu übertragen.</li>
          <li><strong>Externe Links</strong> (z. B. zu IHK, BSI oder Gesetzestexten) öffnen fremde Seiten; dort gelten deren Datenschutzbestimmungen.</li>
        </ul>
        <h5>Mitmachen</h5>
        <p>Fehler gefunden oder Inhalte ergänzen? Alle Inhalte liegen als einfache Dateien im Ordner <code>data/</code> des <a href="${esc(META.repo)}" target="_blank" rel="noopener">GitHub-Repositorys</a>. Das Format ist in <code>docs/CONTENT.md</code> beschrieben.</p>
      </article>
      ${(META.links || []).length ? `<h2 class="section-title">${icon("link-45deg")} Nützliche Links</h2><section class="tile"><div class="list">${META.links.map((l) => `<a class="list-row" href="${esc(l.url)}" target="_blank" rel="noopener"><span class="grow ttl">${esc(l.title)}</span>${icon("box-arrow-up-right", "muted")}</a>`).join("")}</div></section>` : ""}
      ${footer()}`);
  }

  /* ================= Suche ================= */
  let INDEX = null;
  function buildIndex() {
    const I = [];
    for (const m of MODS) {
      I.push({ ic: m.icon, type: "Lernfeld", title: `${m.label} · ${m.title}`, sub: m.summary || "", text: (m.goals || []).join(" "), href: `#/m/${m.id}` });
      if (!m.loaded) continue;
      for (const t of m.topics) I.push({ ic: "journal-text", type: "Lernzettel", title: t.title, sub: `${m.label} · ${t.summary || ""}`, text: strip(t.html), href: `#/m/${m.id}/t/${t.id}` });
      for (const e of m.exercises) I.push({ ic: "pencil-square", type: "Übung", title: e.title, sub: `${m.label} · Übung`, text: strip(e.task), href: `#/m/${m.id}/uebungen/${e.id}` });
      for (const g of m.glossary) I.push({ ic: "book", type: "Begriff", title: g.term, sub: g.def, text: "", href: `#/glossar/${encodeURIComponent(g.term)}` });
      for (const c of m.checklist) I.push({ ic: "check2-square", type: "Lernziel", title: c.text, sub: m.label, text: "", href: `#/m/${m.id}/checkliste` });
    }
    for (const e of EXAMS) {
      I.push({ ic: e.icon, type: "Prüfung", title: `${e.title} · ${e.subtitle}`, sub: e.name, text: strip(e.html || ""), href: `#/p/${e.id}` });
      for (const a of e.areas) I.push({ ic: "list-check", type: `${e.title}-Thema`, title: a.title, sub: (a.items || []).map((x) => x.text).join(" · "), text: "", href: `#/p/${e.id}/themen` });
      for (const t of e.tasks) I.push({ ic: "file-earmark-text", type: `${e.title}-Aufgabe`, title: t.title, sub: strip(t.scenario).slice(0, 160), text: "", href: `#/p/${e.id}/probeklausur` });
    }
    for (const t of TOOLS) I.push({ ic: t.icon || "tools", type: "Trainer", title: t.title, sub: t.desc || "", text: "", href: `#/tools/${t.id}` });
    for (const x of I) { x.nt = norm(x.title); x.all = norm(x.title + " " + x.sub + " " + x.text); }
    return I;
  }
  function search(q) {
    INDEX = INDEX || buildIndex();
    const words = norm(q).split(/\s+/).filter(Boolean); if (!words.length) return [];
    const res = [];
    for (const x of INDEX) {
      if (!words.every((w) => x.all.includes(w))) continue;
      let s = 0; for (const w of words) { if (x.nt.startsWith(w)) s += 12; else if (x.nt.includes(w)) s += 8; else s += 1; }
      s += { Lernfeld: 3, Lernzettel: 4, Begriff: 3, Trainer: 3, Übung: 1 }[x.type] || 0;
      res.push([s, x]);
    }
    return res.sort((a, b) => b[0] - a[0]).slice(0, 40).map((r) => r[1]);
  }
  const hl = (text, q) => { let h = esc(text); for (const w of q.split(/\s+/).filter((w) => w.length > 1)) h = h.replace(new RegExp(`(${w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"), "<mark>$1</mark>"); return h; };
  function initSearch() {
    const modalEl = $("#searchModal"); const inp = $("#searchInput"); const out = $("#searchResults");
    const modal = window.bootstrap ? new bootstrap.Modal(modalEl) : null;
    let focus = -1;
    const render = () => {
      const q = inp.value.trim(); const r = search(q); focus = r.length ? 0 : -1;
      out.innerHTML = q ? (r.length ? r.map((x, i) => `<a class="sr ${i === 0 ? "focus" : ""}" href="${x.href}">${icon(x.ic)}<span class="grow"><span class="d-block ttl">${hl(x.title, q)}</span><span class="sub">${esc(x.type)} · ${hl(x.sub.slice(0, 180), q)}</span></span></a>`).join("") : `<div class="empty py-4">${icon("search")}Nichts gefunden für „${esc(q)}“</div>`) : `<div class="p-3 small muted">Tipp: Suche nach Begriffen wie <em>Subnetz</em>, <em>RAID</em>, <em>DSGVO</em>, <em>Kündigung</em> oder <em>Port 443</em>.</div>`;
    };
    inp.addEventListener("input", render);
    inp.addEventListener("keydown", (e) => {
      const items = $$(".sr", out); if (!items.length) return;
      if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); focus = (focus + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length; items.forEach((el, i) => el.classList.toggle("focus", i === focus)); items[focus].scrollIntoView({ block: "nearest" }); }
      else if (e.key === "Enter" && focus >= 0) { e.preventDefault(); location.hash = items[focus].getAttribute("href"); modal && modal.hide(); }
    });
    out.addEventListener("click", (e) => { if (e.target.closest(".sr")) modal && modal.hide(); });
    const open = () => { if (!modal) return; modal.show(); setTimeout(() => { inp.select(); inp.focus(); render(); }, 150); };
    $("#searchBtn").addEventListener("click", open);
    document.addEventListener("keydown", (e) => {
      if ((e.key === "k" && (e.ctrlKey || e.metaKey)) || (e.key === "/" && !e.target.matches("input, textarea, select, [contenteditable]"))) { e.preventDefault(); open(); }
    });
  }

  /* ================= Theme ================= */
  function initTheme() {
    const btn = $("#themeBtn");
    const set = (t) => { document.documentElement.setAttribute("data-bs-theme", t); btn.innerHTML = icon(t === "dark" ? "sun" : "moon-stars"); btn.setAttribute("aria-label", t === "dark" ? "Helles Design" : "Dunkles Design"); };
    set(document.documentElement.getAttribute("data-bs-theme") || "light");
    btn.addEventListener("click", () => { const t = document.documentElement.getAttribute("data-bs-theme") === "dark" ? "light" : "dark"; set(t); try { localStorage.setItem("learn.theme", t); } catch (e) { /* */ } });
  }

  /* ================= Start ================= */
  try { history.scrollRestoration = "manual"; } catch (e) { /* */ }
  initTheme();
  initSearch();
  route();
})();
