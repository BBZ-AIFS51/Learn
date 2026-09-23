# FISI Lernportal · AIFS51

Lernplattform für die Ausbildung **Fachinformatiker/-in Systemintegration**: alle Lernfelder (LF 1–12),
WiSo, Englisch und Kommunikation, dazu gezielte Vorbereitung auf die IHK-Abschlussprüfung **Teil 1 (AP1)**
und **Teil 2 (AP2)**.

**Live:** https://bbz-aifs51.github.io/Learn/

## Was drin ist

| Bereich | Inhalt |
|---|---|
| Lernzettel | Themen je Lernfeld mit Erklärungen, Tabellen, Rechenbeispielen, Merksätzen und Prüfungshinweisen |
| Übungen | Aufgaben im IHK-Stil mit Musterlösung und Rechenweg, als druckbare Übungsarbeit zusammenstellbar |
| Quiz | Single-/Multiple-Choice, Richtig/Falsch und Eingabefragen, Übungs- und Prüfungsmodus mit Timer |
| Karteikarten | Leitner-System mit fünf Fächern |
| AP1 / AP2 | Aufbau und Bewertung, To-do-Checklisten nach Prüfungskatalog, Probeklausuren mit Selbstbewertung |
| Trainer | Subnetting, Zahlensysteme, IPv6, Speicher & Übertragung, RAID, Strom/USV, Verfügbarkeit, Nutzwertanalyse, Kalkulation, Logik, Netzplan |
| Lernplan | alle Lernziele an einem Ort, filterbar, Fortschritt exportier- und importierbar |

Der Lernfortschritt wird nur lokal im Browser gespeichert (localStorage). Es gibt kein Konto, kein Tracking und keine Cookies.
Schriften, Icons und Bootstrap sind selbst gehostet (`assets/vendor/`), es werden keine Google Fonts oder CDNs geladen.

## Lokal starten

Kein Build nötig. Entweder `index.html` direkt öffnen oder einen kleinen Server starten:

```bash
python -m http.server 8000
```

Dann http://localhost:8000 aufrufen.

## Inhalte ergänzen

Alle Inhalte liegen in `data/` (eine Datei pro Lernfeld bzw. Prüfung), die Trainer in `assets/js/tools-*.js`.
Das Datenformat ist in [docs/CONTENT.md](docs/CONTENT.md) beschrieben. Vor jedem Commit prüfen:

```bash
node tools/validate.mjs
```

Der GitHub-Actions-Workflow validiert die Inhalte und veröffentlicht die Seite bei jedem Push auf `main`.

## Hinweise

- Kein offizielles Angebot der IHK oder der Schule. Alle Angaben ohne Gewähr, verbindlich sind IHK und Lehrkräfte.
- Die Themen-Checklisten orientieren sich an der Gliederung des ZPA-Prüfungskatalogs (2. Auflage 2024), sind aber
  eigenständig formuliert. Der Katalog selbst ist beim u-form Verlag erhältlich.
- Technik: HTML, CSS, Vanilla JS, [Bootstrap 5](https://getbootstrap.com/) und [Bootstrap Icons](https://icons.getbootstrap.com/).
