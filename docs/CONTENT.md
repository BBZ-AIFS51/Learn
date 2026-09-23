# Inhalte bearbeiten & ergänzen

Alle Lerninhalte liegen als JavaScript-Dateien in `data/`. Jede Datei registriert genau **ein** Modul
(`LEARN.module({...})`) oder **eine** Prüfung (`LEARN.exam({...})`). Es gibt keinen Build-Schritt:
Datei speichern, `index.html` neu laden, fertig. Die Seite läuft auch lokal per Doppelklick.

Nach jeder Änderung prüfen:

```bash
node tools/validate.mjs            # alle Dateien
node tools/validate.mjs data/lf09.js
```

---

## 1. Modul (Lernfeld oder Fach) – `data/<id>.js`

```js
LEARN.module({
  id: "lf09",                       // muss zu data/meta.js → catalog passen (lf01…lf12, wiso, englisch, kommunikation)
  type: "lf",                       // "lf" oder "fach"
  nr: 9,                            // nur bei Lernfeldern
  title: "Netzwerke und Dienste bereitstellen",
  year: 2,                          // Ausbildungsjahr (bei Fächern weglassen)
  hours: 80,                        // Stunden laut Rahmenlehrplan (bei Fächern weglassen)
  exam: ["AP1", "AP2"],             // für welche Prüfungsteile das Modul relevant ist
  summary: "Ein bis zwei Sätze, worum es geht.",
  goals: [                          // "Das musst du am Ende können" – 5–10 Kompetenzen in eigenen Worten
    "Netzwerke nach dem OSI- und TCP/IP-Modell beschreiben und Protokolle zuordnen",
  ],
  school: {                         // optional: klassenspezifische Infos (aus Moodle)
    hinweise: "Kurzer Text, z. B. Schwerpunkte der Lehrkraft.",
    themen: ["Referenzmodelle & Protokolle", "Adressierung", "Routing"]
  },

  topics: [ /* Lernzettel, siehe 1.1 */ ],
  exercises: [ /* Übungsaufgaben mit Lösung, siehe 1.2 */ ],
  quiz: [ /* Quizfragen, siehe 1.3 */ ],
  cards: [ /* Karteikarten, siehe 1.4 */ ],
  checklist: [ /* "Ich kann …"-Punkte, siehe 1.5 */ ],
  glossary: [ /* Fachbegriffe, siehe 1.6 */ ],
  links: [ /* öffentliche Quellen, siehe 1.7 */ ]
});
```

### 1.1 `topics` – Lernzettel

```js
{
  id: "osi",                        // eindeutig im Modul, nur a-z 0-9 -
  title: "OSI- und TCP/IP-Modell",
  exam: ["AP1", "AP2"],             // optional; sonst gilt modul.exam
  summary: "Ein Satz für die Übersicht.",
  html: `
    <p>Fließtext …</p>
    <h5>Zwischenüberschrift</h5>
    <ul><li>…</li></ul>
    <table><thead><tr><th>Schicht</th><th>Name</th></tr></thead><tbody><tr><td>7</td><td>Anwendung</td></tr></tbody></table>
    <div class="callout merke"><strong>Merke:</strong> …</div>
  `
}
```

Erlaubtes HTML im `html`-Feld (die App ergänzt Tabellen-Styles automatisch):

| Element | Verwendung |
|---|---|
| `<p>`, `<ul>`, `<ol>`, `<li>`, `<strong>`, `<em>`, `<br>` | normaler Text |
| `<h5>`, `<h6>` | Zwischenüberschriften (keine h1–h4) |
| `<table>` mit `<thead>`/`<tbody>` | Tabellen (keine Klassen nötig) |
| `<code>`, `<pre><code>…</code></pre>`, `<kbd>` | Befehle, Konfigurationen, Code |
| `<pre class="ascii">…</pre>` | einfache Text-Diagramme |
| `<div class="callout merke">` | **Merke** – das Wichtigste |
| `<div class="callout tipp">` | Tipp / Eselsbrücke |
| `<div class="callout achtung">` | Typischer Fehler / Prüfungsfalle |
| `<div class="callout beispiel">` | Durchgerechnetes Beispiel |
| `<div class="callout formel">` | Formel(n) |
| `<div class="callout pruefung">` | So kommt es in der Prüfung dran |
| `<div class="grid-2">…</div>` | zwei Spalten nebeneinander (auf dem Handy untereinander) |
| `<span class="badge-soft">…</span>` | kleines Label |

Regeln: keine `<script>`-Tags, keine Inline-Styles, keine externen Bilder. Formeln in Unicode
(×, ÷, ², ³, √, ≈, ≤, ≥, →, Ω, η, φ) statt LaTeX. Backticks im Text als `\``  escapen, `${` vermeiden.

### 1.2 `exercises` – Übungsaufgaben

```js
{
  id: "e-subnet-1",
  topic: "subnetting",              // id eines topics
  title: "Netz in 4 Subnetze teilen",
  level: 2,                         // 1 = leicht, 2 = mittel, 3 = prüfungsnah/schwer
  exam: ["AP1"],                    // optional
  task: `<p>Aufgabentext (HTML wie oben) …</p>`,
  hints: ["optionaler Tipp 1"],     // optional
  solution: `<p>Musterlösung mit vollständigem Rechenweg …</p>`
}
```

### 1.3 `quiz` – Quizfragen

```js
{ id: "q1", topic: "osi", type: "single",           // genau eine richtige Antwort
  q: "Auf welcher OSI-Schicht arbeitet ein Switch (klassisch)?",
  options: ["Schicht 1", "Schicht 2", "Schicht 3", "Schicht 4"],
  answer: 1,                                         // Index der richtigen Option (0-basiert)
  explain: "Ein Switch arbeitet mit MAC-Adressen → Sicherungsschicht (2)." }

{ id: "q2", topic: "osi", type: "multi",            // mehrere richtige Antworten
  q: "Welche Protokolle gehören zur Transportschicht?",
  options: ["TCP", "IP", "UDP", "ARP"], answer: [0, 2], explain: "…" }

{ id: "q3", topic: "osi", type: "tf",               // richtig/falsch
  q: "Ein Router verbindet unterschiedliche IP-Netze.", answer: true, explain: "…" }

{ id: "q4", topic: "subnetting", type: "input",     // Freitext; alle akzeptierten Schreibweisen angeben
  q: "Wie viele nutzbare Hosts hat ein /27-Netz?", answer: ["30"], explain: "2⁵ − 2 = 30" }
```

Regeln: Optionen werden gemischt → keine Optionen wie „Alle genannten“ / „A und B“.
Eingaben werden ohne Groß-/Kleinschreibung und ohne Leerzeichen verglichen.
`q` darf einfaches HTML enthalten (`<code>`, `<br>`, `<strong>`, kleine Tabellen).

### 1.4 `cards` – Karteikarten

```js
{ topic: "ports", f: "Port 443", b: "HTTPS (TCP)" }
```

### 1.5 `checklist` – Lernziele / To-do

```js
{ id: "c-osi-1", topic: "osi", text: "Ich kann die 7 OSI-Schichten nennen und je ein Protokoll zuordnen.", exam: ["AP1"] }
```

### 1.6 `glossary`

```js
{ term: "ARP", def: "Address Resolution Protocol – ermittelt zu einer IPv4-Adresse die MAC-Adresse." }
```

### 1.7 `links` – nur öffentliche, seriöse Quellen

```js
{ title: "BSI IT-Grundschutz-Kompendium", url: "https://www.bsi.bund.de/…", note: "optional" }
```

---

## 2. Prüfung – `data/ap1.js`, `data/ap2.js`

```js
LEARN.exam({
  id: "ap1",
  title: "AP1",
  name: "Abschlussprüfung Teil 1",
  subtitle: "Einrichten eines IT-gestützten Arbeitsplatzes",
  facts: [ { icon: "clock", label: "Dauer", value: "90 Minuten" } ],   // Kennzahlen-Kacheln
  html: `<p>Aufbau, Ablauf, Bewertung, Hilfsmittel …</p>`,             // Überblick (HTML wie in topics)
  parts: [                                                              // Prüfungsbereiche (v. a. AP2)
    { id: "kau", title: "Konzeption und Administration von IT-Systemen", weight: "10 %", duration: "90 min", form: "schriftlich", html: `…` }
  ],
  areas: [                                                              // Themen-Checkliste (To-do)
    { id: "hw", title: "Hardware auswählen und Arbeitsplätze ausstatten", part: "kau", lf: ["lf02"],
      items: [ { id: "ap1-hw-1", text: "Ich kann …", hot: true, ref: "lf02/hardware" } ] }
  ],
  tasks: [                                                              // Probeklausur / Handlungsschritte
    { id: "t1", set: "A", title: "Aufgabe 1: Arbeitsplatz planen", points: 25, part: "kau",   // set = Probeklausur A/B/…
      scenario: `<p>Ausgangssituation …</p>`,
      parts: [ { q: `<p>a) …</p>`, points: 6, solution: `<p>…</p>` } ] }
  ],
  tips: [ "Lies zuerst alle Aufgaben …" ],
  dates: [ { date: "2027-03-02", title: "AP1 Frühjahr 2027", note: "laut IHK – bitte prüfen" } ],
  links: [ { title: "…", url: "https://…" } ]
});
```

`hot: true` markiert besonders häufig geprüfte Punkte. `ref` verweist auf ein Lernzettel-Thema (`modul/topic-id`).
`part` ordnet Bereiche/Aufgaben einem Prüfungsbereich aus `parts` zu (optional).

---

## 3. Tools – `assets/js/tools-*.js`

```js
LEARN.tool({
  id: "subnetting", title: "Subnetting-Trainer", icon: "diagram-2",
  desc: "Kurzbeschreibung", exam: ["AP1", "AP2"], modules: ["lf09", "lf03"],
  render(root, h) { /* root = leeres <div>; h = Hilfsfunktionen (siehe app.js → toolHelpers) */ }
});
```
