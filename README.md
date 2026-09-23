<div align="center">

# 🎓 FISI Lernportal

**Alles für die Ausbildung zum Fachinformatiker / zur Fachinformatikerin für Systemintegration –
an einem Ort, kostenlos, ohne Anmeldung.**

[![Live-Seite](https://img.shields.io/badge/Live-bbz--aifs51.github.io%2FLearn-4f46e5?style=for-the-badge&logo=github)](https://bbz-aifs51.github.io/Learn/)

![Lernfelder](https://img.shields.io/badge/Lernfelder-LF%201%E2%80%9312b-2563eb?style=flat-square)
![Quizfragen](https://img.shields.io/badge/Quizfragen-1.547-059669?style=flat-square)
![Übungen](https://img.shields.io/badge/%C3%9Cbungen-386-b45309?style=flat-square)
![Prüfung](https://img.shields.io/badge/IHK-AP1%20%26%20AP2-dc2626?style=flat-square)
![Tracking](https://img.shields.io/badge/Tracking-keins-6b7280?style=flat-square)

*Klasse AIFS51 · BBZ Dithmarschen · Stand September 2026*

</div>

---

## ✨ Was dich erwartet

| | Bereich | Das kannst du damit machen |
|---|---|---|
| 📘 | **Lernzettel** | 218 Themen mit Erklärungen, Tabellen, durchgerechneten Beispielen, Merksätzen und „So kommt es in der Prüfung dran“ |
| ✏️ | **Übungen** | 386 Aufgaben im IHK-Stil mit vollständiger Musterlösung und Rechenweg, auch als **druckbare Übungsarbeit** |
| ❓ | **Quiz** | 1.547 Fragen: Single-/Multiple-Choice, Richtig/Falsch, Eingabe. Übungsmodus mit Erklärung oder Prüfungsmodus mit Timer und IHK-Notenschlüssel |
| 🗂️ | **Karteikarten** | 1.206 Karten nach dem Leitner-Prinzip mit fünf Fächern |
| 🎯 | **AP1 & AP2** | Aufbau, Gewichtung, Bestehensregeln, Termine, **To-do-Checklisten nach Prüfungskatalog** (222 + 567 Punkte) und **Probeklausuren** mit Selbstbewertung |
| 🧮 | **Trainer** | 11 interaktive Rechner mit Zufallsaufgaben und Rechenweg (siehe unten) |
| ✅ | **Lernplan** | alle Lernziele an einem Ort, filterbar nach AP1, AP2 und Lernfeldern, Fortschritt exportierbar |
| 🔎 | **Suche & Glossar** | 762 Fachbegriffe, Volltextsuche mit <kbd>Strg</kbd> + <kbd>K</kbd> |

## 📚 Inhalte

| Jahr | Lernfelder |
|---|---|
| **1** | LF 1 Unternehmen & eigene Rolle · LF 2 Arbeitsplätze ausstatten · LF 3 Clients in Netzwerke einbinden · LF 4 Schutzbedarfsanalyse · LF 5 Software zur Datenverwaltung |
| **2** | LF 6 Serviceanfragen · LF 7 Cyber-physische Systeme · LF 8 Daten bereitstellen · LF 9 Netzwerke & Dienste |
| **3** | LF 10b Serverdienste & Automatisierung · LF 11b Betrieb & Sicherheit · LF 12b Kundenspezifische Systemintegration |
| **Fächer** | Wirtschafts- und Sozialkunde · Englisch (IT-Fachsprache) · Kommunikation |

### 🧮 Trainer

`IPv4-Subnetting` · `Zahlensysteme` · `IPv6` · `Speicher & Übertragung` · `RAID` · `Strom, USV & Elektrotechnik` ·
`Verfügbarkeit` · `Nutzwertanalyse` · `Angebotsvergleich & Kalkulation` · `Logik & Wahrheitstabellen` · `Netzplan & kritischer Pfad`

## ✅ So wurde auf Qualität geachtet

- **Prüfungskatalog als Grundlage:** Die Themen richten sich nach dem ZPA-Prüfungskatalog (2. Auflage 2024, gültig ab AP1 Frühjahr 2025), dem KMK-Rahmenlehrplan und dem Unterricht der Klasse.
- **Dreifach geprüft:** Jedes Modul wurde geschrieben, dann fachlich geprüft, und danach wurde jeder Antwortschlüssel nachgerechnet.
- **Eigene Formulierungen:** Unterrichtsmaterialien und Prüfungskatalog wurden nur als Orientierung genutzt.

## 🔒 Datenschutz

- **Kein Konto, kein Tracking, keine Cookies.**
- **Fortschritt bleibt im Browser:** Häkchen, Quiz-Ergebnisse und Karteikarten liegen nur im `localStorage` deines Browsers.
- **Keine Drittanbieter:** Schriften, Icons und Bootstrap sind selbst gehostet (`assets/vendor/`). Es gibt keine Google Fonts und keine CDNs.
- **Hosting:** Die Seite läuft über GitHub Pages. Details stehen auf der Seite unter *Info & Datenschutz*.

## 🚀 Lokal starten

Du brauchst keinen Build-Schritt. Entweder öffnest du `index.html` per Doppelklick, oder du startest einen kleinen Server:

```bash
python -m http.server 8000
```

Dann http://localhost:8000 aufrufen.

## 🤝 Mitmachen

Du hast einen Fehler gefunden oder willst Inhalte ergänzen? Gern!

- **Wo die Inhalte liegen:** `data/` enthält eine Datei pro Lernfeld bzw. Prüfung, die Trainer liegen in `assets/js/tools-*.js`.
- **Format:** Das Datenformat ist in [`docs/CONTENT.md`](docs/CONTENT.md) beschrieben.
- **Vor jedem Commit prüfen:**

  ```bash
  node tools/validate.mjs
  ```

- **Veröffentlichung:** Bei jedem Push auf `main` validiert GitHub Actions automatisch und veröffentlicht die Seite.
- **Hinweise für KI-Assistenten** stehen in [`CLAUDE.md`](CLAUDE.md).

## 🛠️ Technik

HTML, CSS und Vanilla JavaScript · [Bootstrap 5](https://getbootstrap.com/) · [Bootstrap Icons](https://icons.getbootstrap.com/) ·
Schriften [Inter](https://rsms.me/inter/) & [JetBrains Mono](https://www.jetbrains.com/lp/mono/) (SIL OFL) · GitHub Pages

```
index.html          Einstieg
assets/             Design, App-Logik, Trainer, selbst gehostete Bibliotheken
data/               alle Lerninhalte (ein Modul pro Datei)
docs/CONTENT.md     Datenformat
tools/              Validator & Hilfsskripte
```

---

<div align="center">

⚠️ **Kein offizielles Angebot der IHK oder des BBZ Dithmarschen.** Alle Angaben ohne Gewähr.
Verbindlich sind immer deine IHK (Flensburg) und deine Lehrkräfte.

Viel Erfolg bei der Prüfung! 💪

</div>
