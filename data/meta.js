/* Zentrale Konfiguration: Reihenfolge der Module, Farben, Termine.
   Inhalte der Module stehen in data/<id>.js */
LEARN.setMeta({
  title: "FISI Lernportal",
  subtitle: "Fachinformatiker/-in Systemintegration · alle Lernfelder, AP1 & AP2",
  klasse: "AIFS51 · BBZ Dithmarschen",
  stand: "September 2026",
  repo: "https://github.com/BBZ-AIFS51/Learn",

  // Kanonische Liste – auch wenn eine Datendatei fehlt, erscheint das Modul als "in Arbeit".
  catalog: [
    { id: "lf01", nr: 1,  title: "Das Unternehmen und die eigene Rolle im Betrieb beschreiben", year: 1, hours: 40,  icon: "buildings",     hue: 210 },
    { id: "lf02", nr: 2,  title: "Arbeitsplätze nach Kundenwunsch ausstatten",               year: 1, hours: 80,  icon: "pc-display",    hue: 250 },
    { id: "lf03", nr: 3,  title: "Clients in Netzwerke einbinden",                           year: 1, hours: 80,  icon: "ethernet",      hue: 190 },
    { id: "lf04", nr: 4,  title: "Schutzbedarfsanalyse im eigenen Arbeitsbereich durchführen", year: 1, hours: 40, icon: "shield-lock", hue: 350 },
    { id: "lf05", nr: 5,  title: "Software zur Verwaltung von Daten anpassen",               year: 1, hours: 80,  icon: "code-slash",    hue: 145 },
    { id: "lf06", nr: 6,  title: "Serviceanfragen bearbeiten",                               year: 2, hours: 40,  icon: "headset",       hue: 30 },
    { id: "lf07", nr: 7,  title: "Cyber-physische Systeme ergänzen",                         year: 2, hours: 80,  icon: "cpu",           hue: 280 },
    { id: "lf08", nr: 8,  title: "Daten systemübergreifend bereitstellen",                   year: 2, hours: 80,  icon: "database",      hue: 165 },
    { id: "lf09", nr: 9,  title: "Netzwerke und Dienste bereitstellen",                      year: 2, hours: 80,  icon: "diagram-3",     hue: 220 },
    { id: "lf10", nr: 10, code: "10b", title: "Serverdienste bereitstellen und Administrationsaufgaben automatisieren", year: 3, hours: 80, icon: "hdd-rack", hue: 260 },
    { id: "lf11", nr: 11, code: "11b", title: "Betrieb und Sicherheit vernetzter Systeme gewährleisten",  year: 3, hours: 80,  icon: "shield-check",  hue: 0 },
    { id: "lf12", nr: 12, code: "12b", title: "Kundenspezifische Systemintegration durchführen", year: 3, hours: 120, icon: "kanban",        hue: 45 },
    { id: "wiso",          title: "Wirtschafts- und Sozialkunde", short: "WiSo",  icon: "bank",      hue: 120 },
    { id: "englisch",      title: "Englisch (IT-Fachsprache)",   short: "ENG",   icon: "translate", hue: 300 },
    { id: "kommunikation", title: "Kommunikation",               short: "KOM",   icon: "chat-dots", hue: 330 }
  ],

  exams: [
    { id: "ap1", title: "AP1", name: "Abschlussprüfung Teil 1", subtitle: "Einrichten eines IT-gestützten Arbeitsplatzes", icon: "1-circle" },
    { id: "ap2", title: "AP2", name: "Abschlussprüfung Teil 2", subtitle: "Konzeption & Administration · Netzwerke · WiSo · Projekt", icon: "2-circle" }
  ],

  // Termine der Klasse (aus Moodle) – Datum im Format JJJJ-MM-TT
  termine: [
    { date: "2026-10-07", title: "LF9 · Test (Leistungsnachweis 1)", module: "lf09" },
    { date: "2026-10-28", title: "LF8 · Klausur (Leistungsnachweis 1)", module: "lf08" },
    { date: "2026-12-16", title: "LF9 · Klausur (Leistungsnachweis 2)", module: "lf09" }
  ],

  links: [
    { title: "Kommunikation Crashkurs (KOM-Arbeit-1)", url: "https://bbz-aifs51.github.io/KOM-Arbeit-1/" },
    { title: "Moodle BBZ Dithmarschen", url: "https://moodle.bbz-dithmarschen.de/my/" },
    { title: "IHK Flensburg – Prüfungstermine", url: "https://www.ihk.de/flensburg" },
    { title: "KMK-Rahmenlehrplan Fachinformatiker/-in (2019)", url: "https://www.kmk.org/fileadmin/Dateien/pdf/Bildung/BeruflicheBildung/rlp/Fachinformatiker_19-12-13_EL.pdf" },
    { title: "Ausbildungsverordnung FIAusbV (2020)", url: "https://www.gesetze-im-internet.de/fiausbv/" }
  ]
});
