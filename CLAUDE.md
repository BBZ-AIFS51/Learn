# CLAUDE.md – FISI Lernportal (BBZ-AIFS51/Learn)

Diese Datei ist das Gedächtnis des Projekts. Der Schul-PC wird zurückgesetzt, daher steht hier alles,
was eine neue Claude-Sitzung (oder ein Mensch) wissen muss. **Zuerst komplett lesen.**

## Projekt in einem Satz

Statische Lernplattform (GitHub Pages) für **Fachinformatiker/-in Systemintegration**, Klasse **AIFS51**,
**BBZ Dithmarschen** (zuständig: **IHK Flensburg**): alle Lernfelder, WiSo, Englisch, Kommunikation,
Vorbereitung auf **AP1** und **AP2**.

- Live: https://bbz-aifs51.github.io/Learn/
- Repo: https://github.com/BBZ-AIFS51/Learn (Branch `main`, Deployment über `.github/workflows/pages.yml`)
- Pages-Einstellung: *Settings → Pages → Source = GitHub Actions* (ist aktiv)
- Schwesterprojekt: https://bbz-aifs51.github.io/KOM-Arbeit-1/ (Repo BBZ-AIFS51/KOM-Arbeit-1)

## Harte Regeln

1. **Kein AI-Co-Author.** Commit-Nachrichten niemals mit `Co-Authored-By: Claude …` oder „Generated with Claude Code“, auch nicht in PRs.
2. **Commit-Identität** (repo-lokal setzen, da der PC zurückgesetzt wird):
   ```bash
   git config user.name "felixgrad2917"
   git config user.email "felixgrad2917@gmail.com"
   ```
3. **Push:** Der Git Credential Manager braucht einen erlaubten Login-Dialog, sonst kommt „Cannot prompt because user interactivity has been disabled“. In PowerShell `$env:GCM_INTERACTIVE='always'` setzen und dann `git push` ausführen. Das GitHub-Login erledigt der Nutzer selbst, Claude gibt nie Passwörter ein.
4. **Datenschutz:**
   - Keine externen Ressourcen: keine Google Fonts, keine CDNs, kein Tracking, keine Cookies. Bootstrap 5.3.3, Bootstrap Icons 1.11.3, Inter und JetBrains Mono liegen selbst gehostet in `assets/vendor/`.
   - Der Fortschritt bleibt nur im `localStorage`.
   - Den Datenschutzhinweis unter `#/info` aktuell halten.
5. **Keine personenbezogenen Daten:** keine Namen von Lehrkräften oder Mitschüler:innen, keine Noten, keine Moodle-Links zu Kursinhalten.
6. **Urheberrecht:**
   - Unterrichtsmaterial (Moodle, H:\, K:\) und der ZPA-Prüfungskatalog dienen **nur als Quelle**. Nichts wörtlich übernehmen und keine Originaldateien ins Repo legen.
   - Alle Texte sind eigenständig formuliert. Eine Überlappungsprüfung am 23.09.2026 hat 0 wörtliche Passagen gefunden.
7. **Vor jedem Commit** `node tools/validate.mjs` ausführen (muss „0 Fehler“ melden). GitHub Actions prüft dasselbe vor dem Deployment.
8. **Cache-Busting:** Wenn sich Dateien ändern, in `index.html` den Parameter `?v=JJJJMMTT` hochzählen (bei `assets/*` und `data/*`).

## Technik & Aufbau

Kein Build-Schritt. HTML + CSS + Vanilla JS mit Bootstrap 5. Die Seite läuft auch per Doppelklick auf `index.html`.

```
index.html                 Einstieg, lädt alle Skripte (defer, feste Reihenfolge)
assets/css/app.css         Design-Tokens (hell/dunkel), alle Komponenten
assets/js/core.js          Registry: LEARN.module(), LEARN.exam(), LEARN.tool(), LEARN.setMeta()
assets/js/app.js           SPA: Hash-Router, Views, Quiz-/Karteikarten-Engine, Lernplan, Suche, Fortschritt
assets/js/tools-net.js     Trainer: Subnetting, Zahlensysteme, IPv6
assets/js/tools-calc.js    Trainer: Speicher & Übertragung, RAID, Strom/USV/Elektro, Verfügbarkeit
assets/js/tools-biz.js     Trainer: Nutzwertanalyse, Kalkulation, Logik/Wahrheitstabellen, Netzplan
assets/vendor/             Bootstrap, Icons, Schriften (selbst gehostet, mit Lizenzen)
data/meta.js               Modulkatalog (Reihenfolge, Icons, Farben), Klassentermine, Links
data/lf01.js … lf12.js     Lernfelder (LF 10b/11b/12b = Fachrichtung Systemintegration!)
data/wiso.js, englisch.js, kommunikation.js
data/ap1.js, data/ap2.js   Prüfungen: Überblick, To-do-Checklisten, Probeklausuren
docs/CONTENT.md            VERBINDLICHES Datenschema für alle Datendateien
tools/validate.mjs         Validator (Schema, HTML-Balance, Antwortindizes, Mindestmengen mit --strict)
tools/list-topics.mjs      listet alle Themen-IDs (für ref-Verweise in ap1/ap2)
```

**Routen:** `#/` Start · `#/m/<id>/<tab>` Modul (uebersicht, lernzettel, uebungen, quiz, karten, checkliste, glossar) ·
`#/m/<id>/t/<topic>` Lernzettel · `#/m/<id>/arbeit` druckbare Übungsarbeit · `#/p/ap1|ap2/<tab>`
(ueberblick, themen, probeklausur, quiz, tipps) · `#/quiz` · `#/karten` · `#/tools/<id>` · `#/lernplan` · `#/glossar` · `#/info`

**Fortschritt:** Er steht im `localStorage` unter dem Key `learn.v1` mit den Feldern `check`, `read`, `quiz`, `cards`, `score` und `prefs`. Theme: `learn.theme`. Export und Import gehen über den Lernplan.

**Lokal testen:**
```bash
python -m http.server 8321
node tools/validate.mjs --strict
node tools/list-topics.mjs
```

## Inhalte (Stand 23.09.2026)

| | Anzahl |
|---|---|
| Module | 15 (LF 1–9, LF 10b, 11b, 12b, WiSo, Englisch, Kommunikation) |
| Lernzettel-Themen | 218 (je Modul ca. 70–105 KB Text) |
| Übungen mit Musterlösung | 386 |
| Quizfragen | 1.547 (single/multi/tf/input) |
| Karteikarten | 1.206 |
| Lernziele (Checklisten) | 721 in Modulen + 222 AP1 + 567 AP2 |
| Glossar | 762 Begriffe |
| Probeklausuren | AP1: 2 Sätze × 4 Aufgaben à 25 P · AP2: KAIS A/B, AEN A/B, WiSo A (30 Aufgaben, 500 P) |
| Trainer | 11 (siehe oben) |

**Qualitätssicherung:** Jedes Modul wurde von einem Autor-Agenten geschrieben, danach prüfte ein Fachprüfer Korrektheit und Vollständigkeit gegen den Prüfungskatalog, und ein Antwort-Auditor löste jede Quizfrage und Übung selbst und rechnete sie nach. Zusätzlich lief ein modulübergreifender Konsistenz-Check.

**Konventionen im Inhalt:**
- Deutsch, Du-Form, fiktive Firmen aus Schleswig-Holstein (z. B. „Nordlicht IT GmbH, Heide“).
- Datenmengen nach der ZPA-Präfixregel: Binärpräfixe **KiB/MiB/GiB** für Speicher, SI-Präfixe für Datenraten.
- `exam`-Tags: AP1 = Stoff der ersten 18 Monate (LF 1–6). Laut Katalog, 2. Auflage, kommen **SQL und RAID nur in AP2** vor. **Struktogramm und PAP** sind nicht mehr prüfungsrelevant. **UML, BPMN und KI** sind neu relevant.
- Quiz-Optionen werden in der App gemischt. Deshalb dürfen Optionen nicht auf andere Optionen verweisen (etwa „alle genannten“).

## Prüfungsfakten (recherchiert am 23.09.2026, bitte vor Nutzung prüfen)

- **Rechtsgrundlage:** FIAusbV vom 28.02.2020 (BGBl. I S. 250, verkündet am 05.03.2020).
- **AP1** „Einrichten eines IT-gestützten Arbeitsplatzes“:
  - 90 min, schriftlich, offene Aufgaben ohne Abwahl, 100 P (in der Praxis 4 Aufgaben mit 20–30 P)
  - zählt **20 %**, ohne eigene Bestehensgrenze
  - Termine: **30.09.2026**, **24.02.2027**, 29.09.2027, 22.03.2028
  - Bei Ausbildungsbeginn 08/2025 regulär im **Frühjahr 2027**.
- **AP2 (FISI):**
  - Projekt 50 %: max. 40 h, Präsentation max. 15 min plus Fachgespräch, zusammen max. 30 min
  - Konzeption & Administration von IT-Systemen: 10 %, 90 min
  - Analyse & Entwicklung von Netzwerken: 10 %, 90 min
  - WiSo: 10 %, 60 min
  - **Bestehen:** Gesamt ≥ 50, Teil 2 ≥ 50, mindestens 3 Bereiche von Teil 2 ≥ 50, kein Bereich „ungenügend“. Mündliche Ergänzungsprüfung in 1 schriftlichen Bereich möglich (2:1).
  - Schriftliche Termine: 25.11.2026 und 28.04.2027
  - IHK Flensburg: Projektdoku max. 10 Seiten plus Anhang (unsicher, nachfragen)
- **Notenschlüssel:** 100–92 sehr gut · 91–81 gut · 80–67 befriedigend · 66–50 ausreichend · 49–30 mangelhaft · 29–0 ungenügend
- **Klassentermine** (aus Moodle, stehen in `data/meta.js`): LF9-Test 07.10.2026, LF8-Klausur 28.10.2026, LF9-Klausur 16.12.2026

## Quellen (nur zur Orientierung, nicht veröffentlichen)

- **K:\AIFS51\Handreichung\FISI_Auflage2.pdf:** gescannter **ZPA-Prüfungskatalog FISI, 2. Auflage 2024**. Die Seiten sind 90° gedreht, zwei Buchseiten pro Scan, und die Buchseiten 30–31 fehlen. Er ist die Grundlage der AP1/AP2-Checklisten.
- **H:\LF06 … H:\LF10, H:\Kom, K:\AIFS51\LF6/LF7/LF9/LF10/ML:** Arbeitsblätter und Präsentationen der Klasse.
  - H:\LF06\_header: Themenliste LF6 der Lehrkraft
  - H:\LF10\…\_header: Themenliste LF10
- **Moodle** (https://moodle.bbz-dithmarschen.de, Login über BBZconnect, **Login nur durch den Nutzer**). Kurs-IDs: LF1 1108 · LF2 1109 · LF3 1110 · LF4 1111 · LF5 1112 · LF6 1113 · LF7 1114 · LF8 1115 · LF9 1116 · LF10 1117 · WIPO 1107 · ENG 1331 · Kommunikation 2203. Das Kursformat sind Kacheln („tiles“), die Abschnitte liegen unter `course/section.php?id=…`.
- **Rahmenlehrplan:** KMK-Rahmenlehrplan Fachinformatiker/-in vom 13.12.2019.

## Offene Punkte / Ideen

- [ ] Letzten Konsistenz-Check für `ap1`, `ap2`, `lf01`, `lf12`, `wiso` und `kommunikation` wiederholen. Er ist am 23.09. nicht mehr fertig geworden. Ziel: Fakten modulübergreifend angleichen (Einheiten, Fristen, Werte mit „Stand 2026“).
- [ ] Veränderliche Werte jährlich prüfen: Sozialversicherung, Mindestlohn, BBG, Prüfungstermine, IHK-Flensburg-Fristen.
- [ ] Englisch, Übung `e-abk-1`: Bei einem US-Händler „excl. VAT“ durch „excl. taxes and duties“ ersetzen.
- [ ] Ideen: Screenshots in die README, PWA/Offline-Modus, weitere Probeklausur-Sätze (AP1 C/D), Moodle-Themen der neuen Kacheln (LF9 Routing/VLSM/VLAN, LF10 weitere Kacheln) nachziehen, sobald sie online sind.

## Arbeitsweise, die sich bewährt hat

- **Inhalte ergänzen:** das Schema in `docs/CONTENT.md` einhalten. Große Dateien schrittweise per Marker-Kommentar füllen, z. B. `/*@@QUIZ@@*/` durch neue Einträge plus Marker ersetzen, damit Ausgaben nicht abgeschnitten werden.
- **Viel Inhalt auf einmal:** pro Modul die Pipeline Autor → Fachprüfer → Antwort-Auditor. Jede Rechnung mit `node -e` oder `python -c` nachrechnen.
- **Nach Änderungen:** Validator ausführen, im Browser prüfen (`python -m http.server`), `?v=` hochzählen, committen (ohne Co-Author) und mit `GCM_INTERACTIVE=always` pushen.
