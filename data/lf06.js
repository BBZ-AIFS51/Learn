/* LF 6 – Serviceanfragen bearbeiten */
LEARN.module({
  id: "lf06",
  type: "lf",
  nr: 6,
  title: "Serviceanfragen bearbeiten",
  year: 2,
  hours: 40,
  exam: ["AP1", "AP2"],
  summary: "IT-Service-Management von der Anfrage bis zur Lösung: Service Desk und Ticketsystem, Incident-, Problem- und Change Management nach ITIL 4, SLA und Kennzahlen, Kommunikation und Deeskalation sowie Prozessmodellierung (EPK, BPMN, Use-Case) und Projektplanung mit Netzplan und Gantt.",
  goals: [
    "Serviceanfragen über verschiedene Kanäle aufnehmen, mit gezielten Fragen klären, im Ticketsystem dokumentieren und nach Auswirkung × Dringlichkeit priorisieren",
    "Incident, Problem, Known Error, Service Request und Change sicher unterscheiden und die passenden ITSM-Prozesse (ITIL 4) anwenden",
    "Support-Level (1st/2nd/3rd Level) und Eskalationsarten (funktional, hierarchisch) situationsgerecht einsetzen",
    "SLA, OLA und Underpinning Contract abgrenzen sowie Verfügbarkeit, Ausfallzeiten, MTBF, MTTR und Erstlösungsquote berechnen und bewerten",
    "ITSM-Rahmenwerke (ITIL 4, ISO/IEC 20000, FitSM, COBIT) einordnen und für ein Unternehmen begründet empfehlen",
    "IT-Dienstleistungen (IMAC/RD, Werk- und Dienstvertrag, Gewährleistung, Garantie, Kulanz) rechtlich und fachlich einordnen",
    "Kundengespräche mit Kommunikationsmodellen (Sender-Empfänger, Schulz von Thun, Watzlawick) analysieren und Konflikte deeskalieren",
    "Geschäfts- und Serviceprozesse als EPK/eEPK und BPMN 2.0 sowie Anforderungen als UML-Use-Case-Diagramm modellieren",
    "Netzpläne vollständig berechnen (FAZ, FEZ, SAZ, SEZ, GP, FP, kritischer Pfad) und Gantt-Diagramme erstellen und interpretieren",
    "Serviceprozesse mit Kennzahlen, Kostenvergleichen und PDCA kostenbewusst optimieren und die Kundenzufriedenheit messen"
  ],
  school: {
    hinweise: "Schwerpunkte im Unterricht der AIFS51: EPK mit draw.io (Übungen Kommissionierung und Billing), IT-Dienstleistungen (IMAC/RD-Lebenszyklus, Dienstleistungsarten, Gewährleistung – Garantie – Kulanz inkl. Beweislastumkehr nach § 477 BGB), Arten des IT-Dienstleistungsmanagements, Gruppenpräsentationen zu ITIL 4, ISO/IEC 20000, FitSM und COBIT sowie Anforderungen an Service-Mitarbeitende. Laut Themenliste der Lehrkraft ist alles prüfungsrelevant – inklusive Netzplantechnik, Gantt, Use-Case und BPMN. Inhalte ohne AP-Kennzeichnung (Aufbau von ITIL 4, ISO/IEC 20000, FitSM, COBIT, Watzlawick, DISG, Glasl) sind Klassenarbeitsstoff und in der IHK-Prüfung höchstens indirekt gefragt.",
    themen: [
      "Ereignisgesteuerte Prozessketten (EPK)",
      "Serviceanfragen aufnehmen & bearbeiten",
      "Konfliktsituationen & Deeskalationsstrategien",
      "Störungsfälle bearbeiten (Incident Management)",
      "Problemlösungen finden (Problem Management)",
      "Serviceanfragen nachhaltig managen",
      "Änderungen durchführen (Change Management)",
      "Grundlagen ITSM (ITIL 4, ISO/IEC 20000, FitSM, COBIT)",
      "IT-Dienstleistungen & IMAC/RD",
      "Prozesse kostengetrieben optimieren",
      "Methoden zur Sicherstellung der IT",
      "Kommunikationsmodelle",
      "Persönlichkeitstypen",
      "Netzplantechnik",
      "Use-Case-Diagramme",
      "Gantt-Diagramme",
      "BPMN"
    ]
  },
  topics: [
    {
      id: "itsm-grundlagen",
      title: "Grundlagen ITSM: ITIL 4, ISO/IEC 20000, FitSM, COBIT",
      exam: [],
      summary: "Was ein IT-Service ist, wie ITIL 4 aufgebaut ist (SVS, Wertschöpfungskette, 4 Dimensionen, Leitprinzipien, Practices), welche Management-Bereiche es gibt und wie sich ISO/IEC 20000, FitSM und COBIT davon abgrenzen.",
      html: `
        <p><strong>IT-Service-Management (ITSM)</strong> bedeutet: Die IT versteht sich als <em>Dienstleister</em>, der für seine Kunden messbaren Nutzen erbringt – geplant, dokumentiert, mit festen Prozessen und Kennzahlen. Nicht die Technik steht im Mittelpunkt, sondern der <strong>Service</strong>, den der Kunde bekommt (z. B. „E-Mail-Dienst mit 99,5 % Verfügbarkeit“ statt „Exchange-Server“).</p>
        <h5>Grundbegriffe</h5>
        <ul>
          <li><strong>Service</strong> (nach ITIL 4, sinngemäß): ein Weg, gemeinsam mit dem Kunden Wert zu schaffen, indem Ergebnisse ermöglicht werden, die der Kunde erreichen will – ohne dass er bestimmte Kosten und Risiken selbst tragen muss.</li>
          <li><strong>Kunde</strong> legt die Anforderungen fest und verantwortet das Ergebnis (z. B. Abteilungsleitung). <strong>Anwender (User)</strong> nutzt den Service. <strong>Sponsor</strong> gibt das Budget frei. Eine Person kann mehrere Rollen haben.</li>
          <li><strong>Utility (Nutzen, „fit for purpose“)</strong>: Was leistet der Service? <strong>Warranty (Gewährleistung, „fit for use“)</strong>: Wie zuverlässig? – Verfügbarkeit, Kapazität, Sicherheit, Kontinuität. (Nicht verwechseln mit der gesetzlichen Gewährleistung beim Kauf!)</li>
        </ul>
        <h5>ITIL 4 im Überblick</h5>
        <p>ITIL (ursprünglich <em>IT Infrastructure Library</em>) ist eine Sammlung bewährter Praktiken (Best Practices), kein Gesetz und keine Norm. ITIL 4 erschien 2019 (AXELOS, heute PeopleCert); PeopleCert entwickelt das Rahmenwerk laufend weiter, Unterricht und Fachliteratur beziehen sich derzeit überwiegend auf ITIL 4. Kernidee: Aus <strong>Nachfrage/Chancen</strong> wird über das <strong>Service Value System (SVS)</strong> <strong>Wert</strong>.</p>
        <table><thead><tr><th>Baustein</th><th>Inhalt</th></tr></thead><tbody>
          <tr><td>Service Value System (5 Komponenten)</td><td>Leitprinzipien · Governance · Service-Wertschöpfungskette · Practices · Kontinuierliche Verbesserung</td></tr>
          <tr><td>Service Value Chain (6 Aktivitäten)</td><td>Plan (Planen) · Improve (Verbessern) · Engage (Einbinden) · Design &amp; Transition (Entwerfen &amp; Überführen) · Obtain/Build (Beschaffen/Erstellen) · Deliver &amp; Support (Liefern &amp; Unterstützen)</td></tr>
          <tr><td>4 Dimensionen</td><td>Organisationen &amp; Menschen · Informationen &amp; Technologie · Partner &amp; Lieferanten · Wertströme &amp; Prozesse (dazu externe Einflüsse, z. B. Politik, Recht, Wirtschaft)</td></tr>
          <tr><td>7 Leitprinzipien (Guiding Principles)</td><td>Fokus auf Wert · Dort anfangen, wo man steht · Iterativ mit Feedback vorgehen · Zusammenarbeiten und Transparenz fördern · Ganzheitlich denken und arbeiten · Einfach und praktisch halten · Optimieren und automatisieren</td></tr>
          <tr><td>34 Practices</td><td>14 allgemeine Management-Practices (z. B. Continual Improvement, Risk Management), 17 Service-Management-Practices (z. B. Incident Management, Problem Management, Change Enablement, Service Desk, Service Level Management, Service Request Management), 3 technische Practices (z. B. Deployment Management)</td></tr>
        </tbody></table>
        <div class="callout tipp"><strong>Eselsbrücke Dimensionen:</strong> „<strong>O</strong>hne <strong>I</strong>nfos <strong>P</strong>asst <strong>W</strong>enig“ – Organisation, Information, Partner, Wertströme. Wer eine Maßnahme plant (z. B. neues Ticketsystem), prüft alle vier: Wer arbeitet damit? Welche Technik/Daten? Welcher Lieferant? Welcher Ablauf ändert sich?</div>
        <h5>Wichtige Practices (Management-Bereiche) im Überblick</h5>
        <p>Im Unterricht heißen sie auch „Arten des IT-Dienstleistungsmanagements“. Jede Practice bündelt Aufgaben, Rollen und Werkzeuge für einen Bereich. Die wichtigsten für den Service-Alltag:</p>
        <table><thead><tr><th>Practice (ITIL 4)</th><th>Worum geht es?</th><th>Beispiel bei der Nordlicht IT GmbH</th></tr></thead><tbody>
          <tr><td>Service Level Management</td><td>Service-Ziele mit dem Kunden vereinbaren (SLA), messen und berichten</td><td>monatlicher Bericht mit Verfügbarkeit und Lösungszeiten</td></tr>
          <tr><td>Service Catalogue Management</td><td>Übersicht aller aktuell bestellbaren Services mit Leistung, Preis und Lieferzeit pflegen</td><td>Katalogeintrag „Notebook-Arbeitsplatz Standard“ im Portal</td></tr>
          <tr><td>Portfolio Management</td><td>entscheiden, welche Services neu angeboten, weiterentwickelt oder eingestellt werden</td><td>„Managed Backup“ kommt neu, „Band-Sicherung vor Ort“ läuft aus</td></tr>
          <tr><td>Relationship Management · Supplier Management</td><td>Beziehungen zu Kunden bzw. zu Lieferanten und Subunternehmern pflegen und steuern</td><td>Jahresgespräch mit dem Großkunden · Vertrag mit dem Druckerhersteller</td></tr>
          <tr><td>Availability Management</td><td>Verfügbarkeit planen, messen und sichern</td><td>zweite Firewall im Cluster, Verfügbarkeitsauswertung</td></tr>
          <tr><td>Capacity and Performance Management</td><td>genug Leistung und Kapazität zur richtigen Zeit bereitstellen</td><td>Speicherwachstum auswerten und rechtzeitig erweitern</td></tr>
          <tr><td>Service Continuity Management</td><td>auf Notfälle und Katastrophen vorbereiten, Wiederanlauf sichern</td><td>Notfallhandbuch, jährlicher Wiederanlauftest</td></tr>
          <tr><td>Information Security Management</td><td>Informationen schützen – einschließlich Identitäts- und Zugriffsverwaltung (in ITIL v3 eigener Prozess „Access Management“)</td><td>Konten und Rechte am Austrittstag sperren, MFA einführen</td></tr>
          <tr><td>Service Configuration Management</td><td>Configuration Items und ihre Beziehungen aktuell dokumentieren (CMDB)</td><td>getauschter Switch wird mit Seriennummer nachgetragen</td></tr>
          <tr><td>Knowledge Management</td><td>Wissen sammeln, prüfen, pflegen und bereitstellen (Wissensdatenbank)</td><td>Lösungsartikel „VPN-Profil neu laden“ für den 1st Level</td></tr>
          <tr><td>Monitoring and Event Management</td><td>Systeme überwachen, Ereignisse bewerten und darauf reagieren</td><td>Alarm „Festplatte 90 % belegt“ erzeugt automatisch ein Ticket</td></tr>
          <tr><td>Business Analysis</td><td>Anforderungen an Services und Systeme erheben und dokumentieren (Requirements Engineering)</td><td>Anforderungskatalog für ein neues Ticketportal</td></tr>
          <tr><td>Continual Improvement</td><td>Services und Practices laufend verbessern (Kennzahlen, Feedback, PDCA)</td><td>Maßnahmenplan zur Erhöhung der Erstlösungsquote</td></tr>
          <tr><td>Service Desk · Incident, Problem, Service Request Management · Change Enablement</td><td>die Kern-Practices des Supports</td><td>eigene Lernzettel in diesem Modul</td></tr>
        </tbody></table>
        <div class="callout tipp"><strong>ITIL v3 → ITIL 4:</strong> ITIL v3 (2007, überarbeitet 2011) gliederte das Service-Management in fünf Lebenszyklusphasen (Service Strategy, Service Design, Service Transition, Service Operation, Continual Service Improvement) mit 26 Prozessen. ITIL 4 ersetzt das durch Service Value System und Practices. Ältere Begriffe begegnen dir noch oft: Request Fulfilment → Service Request Management · Change Management → Change Enablement · Continual Service Improvement → Continual Improvement · Access Management → Teil des Information Security Managements. <strong>Katalog oder Portfolio?</strong> Der Service-Katalog zeigt die aktuell bestellbaren Services; das Service-Portfolio umfasst zusätzlich geplante und eingestellte Services (interne, strategische Sicht).</div>
        <h5>ISO/IEC 20000, FitSM und COBIT</h5>
        <ul>
          <li><strong>ISO/IEC 20000-1</strong> (aktuelle Ausgabe 2018) ist eine <strong>internationale Norm</strong>. Sie legt fest, <em>was</em> ein Service-Management-System (SMS) erfüllen muss. Aufbau nach der High-Level-Structure (Kapitel 4–10: Kontext, Führung, Planung, Unterstützung, Betrieb, Bewertung, Verbesserung) mit PDCA-Zyklus. <strong>Zertifiziert wird die Organisation</strong> durch ein externes Audit.</li>
          <li><strong>FitSM</strong> ist eine schlanke, <strong>kostenlos nutzbare</strong> Standardfamilie aus einem EU-geförderten Projekt. Sie beschreibt 14 Kernprozesse (z. B. Incident &amp; Service Request Management, Problem, Change, Configuration) mit Mindestanforderungen und ist an ISO/IEC 20000 angelehnt – ideal für KMU und öffentliche Einrichtungen.</li>
          <li><strong>COBIT 2019</strong> (ISACA) ist ein Rahmenwerk für <strong>IT-Governance</strong>: Die Unternehmensleitung steuert und kontrolliert die IT. 40 Governance- und Management-Ziele in 5 Domänen (EDM, APO, BAI, DSS, MEA), Reifegrade 0–5. Stark bei Revision, Risiko und Compliance.</li>
        </ul>
        <table><thead><tr><th>Kriterium</th><th>ITIL 4</th><th>ISO/IEC 20000</th><th>FitSM</th><th>COBIT 2019</th></tr></thead><tbody>
          <tr><td>Art</td><td>Best-Practice-Framework</td><td>Norm (Anforderungen)</td><td>schlanker Standard</td><td>Governance-Framework</td></tr>
          <tr><td>Leitfrage</td><td>Wie setze ich guten Service um?</td><td>Was muss nachweisbar erfüllt sein?</td><td>Was ist das Minimum für gutes ITSM?</td><td>Was soll die IT leisten, wie wird das kontrolliert?</td></tr>
          <tr><td>Zertifizierung</td><td>Personen (z. B. ITIL 4 Foundation)</td><td>Organisation</td><td>Personen</td><td>Personen</td></tr>
          <tr><td>Kosten/Zugang</td><td>kommerziell</td><td>Norm kostenpflichtig, Audit teuer</td><td>kostenlos</td><td>kommerziell</td></tr>
          <tr><td>Passt zu</td><td>IT-Abteilungen, Systemhäuser jeder Größe</td><td>Dienstleister, die Qualität nachweisen müssen</td><td>KMU, Verwaltung, Einstieg</td><td>Banken, Versicherungen, Konzerne, KRITIS</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>Merke:</strong> ITIL sagt <em>wie</em>, ISO/IEC 20000 prüft <em>ob</em>, COBIT steuert <em>was</em> und <em>warum</em>. Die Ansätze ergänzen sich: Viele Unternehmen arbeiten nach ITIL und lassen sich nach ISO/IEC 20000 zertifizieren.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> „Unser Unternehmen ist ITIL-zertifiziert“ ist fachlich falsch – nach ITIL werden nur <strong>Personen</strong> zertifiziert. Ein Unternehmen weist gutes Service-Management über eine <strong>ISO/IEC-20000-Zertifizierung</strong> nach. Außerdem heißen die Bausteine in ITIL 4 „Practices“ und nicht mehr „Prozesse“ (ITIL v3).</div>
        <div class="callout pruefung"><strong>So kommt es dran:</strong> Der Aufbau von ITIL 4 und der Vergleich der Rahmenwerke sind vor allem Stoff für Klassenarbeiten und Präsentationen; in der IHK-Prüfung zählen die Anwendung (Incident, Problem, Change, SLA) und Begriffe wie Zertifizierung. Typische Aufgaben: „<em>Nennen</em> Sie zwei Vorteile der Einführung von ITIL“ (einheitliche Begriffe, klare Zuständigkeiten, messbare Qualität, weniger Ausfälle, höhere Kundenzufriedenheit) · „<em>Erläutern</em> Sie den Unterschied zwischen ITIL und ISO/IEC 20000“ · „<em>Ordnen</em> Sie die Tätigkeit ‚Drucker-Störung beheben‘ einer Practice zu“ (Incident Management). In Klassenarbeiten beliebt: kurze Fallbeschreibungen dem passenden Management-Bereich zuordnen (z. B. Rechteentzug beim Austritt → Information Security Management).</div>`
    },
    {
      id: "dienstleistungen",
      title: "IT-Dienstleistungen, IMAC/RD und Verträge",
      exam: ["AP1", "AP2"],
      summary: "Dienstleistungsarten im IT-Service, der IMAC/RD-Lebenszyklus, Werkvertrag vs. Dienstvertrag sowie Gewährleistung, Garantie und Kulanz.",
      html: `
        <p>Ein Systemhaus verkauft vor allem <strong>Dienstleistungen</strong>. Damit klar ist, was geschuldet ist, müssen Leistungsart, Erbringungsform und Vertragstyp feststehen.</p>
        <h5>Dienstleistungsarten und IMAC/RD</h5>
        <table><thead><tr><th>Dienstleistung</th><th>Kennzeichen / Beispiel</th></tr></thead><tbody>
          <tr><td>Vor-Ort-Service (Break/Fix, Field Service)</td><td>Einsatz nach Bedarf, Abrechnung von Zeit, Anfahrt, Material – Netzteil im Drucker tauschen</td></tr>
          <tr><td>Remote-Support / Helpdesk</td><td>Hilfe per Telefon, Chat, Portal oder Fernwartung</td></tr>
          <tr><td>Swap-Service</td><td>sofortiger Tausch gegen ein gleiches, vorkonfiguriertes Ersatzgerät</td></tr>
          <tr><td>Wartung / Wartungsvertrag</td><td>regelmäßige, vorbeugende Prüfung und Pflege (Updates, Sichtprüfung)</td></tr>
          <tr><td>Managed Services</td><td>dauerhafte Übernahme eines Aufgabenbereichs zum Festpreis, Qualität per SLA</td></tr>
          <tr><td>On-Site-Management</td><td>Personal des Dienstleisters arbeitet dauerhaft in den Räumen des Kunden, z. B. ein fest eingesetzter Techniker in einer Klinik</td></tr>
          <tr><td>Garantieservice</td><td>kostenlose Reparatur oder kostenloser Tausch im Rahmen einer Hersteller- oder Händlergarantie</td></tr>
          <tr><td>Cloud, Beratung, Schulung, Projekte</td><td>IaaS/PaaS/SaaS, Know-how, Planung und Einführung</td></tr>
          <tr><td>DIY-Service</td><td>Kunde darf definierte Arbeiten selbst erledigen, ohne die Garantie zu verlieren</td></tr>
        </tbody></table>
        <p><strong>IMAC/RD-Lebenszyklus:</strong> <strong>I</strong>nstall (Arbeitsplatz einrichten) · <strong>M</strong>ove (Umzug) · <strong>A</strong>dd (Komponente, Software oder Recht ergänzen) · <strong>C</strong>hange (Vorhandenes ändern, z. B. RAM aufrüsten) · <strong>R</strong>emove (sichern, sicher löschen, abbauen) · <strong>D</strong>ispose (Entsorgung/Recycling mit Nachweis der Datenvernichtung).</p>
        <h5>Vor Ort oder per Fernwartung?</h5>
        <table><thead><tr><th>Kriterium</th><th>Vor Ort</th><th>Fernwartung (remote)</th></tr></thead><tbody>
          <tr><td>Kosten / Zeit</td><td>Anfahrt und Reisezeit</td><td>gering, sofort möglich</td></tr>
          <tr><td>geeignet für</td><td>Hardwaredefekte, Verkabelung, Einweisung</td><td>Software, Konfiguration, Updates</td></tr>
          <tr><td>Voraussetzungen</td><td>Zutritt zum Standort, Termin</td><td>Internet, Fernwartungstool, <strong>Zustimmung des Kunden</strong> je Sitzung, Datenschutz (Auftragsverarbeitung, Protokollierung)</td></tr>
        </tbody></table>
        <h5>Werkvertrag oder Dienstvertrag?</h5>
        <table><thead><tr><th></th><th>Werkvertrag (§§ 631 ff. BGB)</th><th>Dienstvertrag (§§ 611 ff. BGB)</th></tr></thead><tbody>
          <tr><td>Geschuldet</td><td>ein <strong>Erfolg</strong> (fertiges Werk)</td><td>eine <strong>Tätigkeit</strong>, kein Erfolg</td></tr>
          <tr><td>Abnahme / Mängel</td><td>Abnahme (§ 640); Mängelrechte: Nacherfüllung, Selbstvornahme, Rücktritt, Minderung, Schadensersatz</td><td>keine Abnahme, keine Mängelrechte (nur Schadensersatz bei Pflichtverletzung)</td></tr>
          <tr><td>IT-Beispiele</td><td>Netzwerk installieren und funktionsfähig übergeben, Software erstellen</td><td>Hotline nach Stunden, Beratung, Schulung</td></tr>
        </tbody></table>
        <p>Serviceverträge sind oft <strong>gemischt</strong> (Hotline = Dienst, Reparatur = Werk). Deshalb beschreibt das <strong>SLA</strong> die Leistungen genau.</p>
        <h5>Abnahme und Mängelarten</h5>
        <p>Das <strong>Abnahmeprotokoll</strong> enthält Vertragsparteien, Datum und Ort, die abgenommene Leistung, Prüfergebnisse (z. B. Testprotokoll), festgestellte Mängel mit Frist zur Beseitigung und die Unterschriften. Mit der Abnahme wird die Vergütung fällig und die Verjährung der Mängelansprüche beginnt. <strong>Mängelarten:</strong> Schlechtleistung (Qualitätsmangel, z. B. defekter Port), Falschlieferung (anderes Modell), Minderlieferung (zu geringe Menge); außerdem offene und versteckte Mängel.</p>
        <p><strong>Nach dem Auftrag:</strong> Soll-Ist-Vergleich von Zeit, Kosten und Qualität (Nachkalkulation), Lessons Learned dokumentieren und passende Folgeaufträge anbieten (Wartungsvertrag, Schulung, Erweiterung, Hardware-Refresh).</p>
        <h5>Gewährleistung – Garantie – Kulanz</h5>
        <table><thead><tr><th></th><th>Gewährleistung</th><th>Garantie</th><th>Kulanz</th></tr></thead><tbody>
          <tr><td>Grundlage</td><td><strong>Gesetz</strong> (§§ 434, 437 ff. BGB)</td><td>freiwilliges Versprechen (§ 443 BGB)</td><td>freiwilliges Entgegenkommen</td></tr>
          <tr><td>Gegenüber</td><td>Verkäufer</td><td>meist Hersteller</td><td>Händler/Hersteller</td></tr>
          <tr><td>Dauer</td><td>2 Jahre ab Übergabe</td><td>frei festgelegt</td><td>kein Anspruch</td></tr>
          <tr><td>Rechte</td><td>zuerst Nacherfüllung (Reparatur/Ersatz), dann Rücktritt, Minderung, Schadensersatz</td><td>laut Garantiebedingungen</td><td>was angeboten wird</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel:</strong> Frau Petersen kauft privat bei der Nordlicht IT GmbH in Heide ein Notebook mit 3 Jahren Herstellergarantie. Ausfall nach <strong>8 Monaten</strong>: Gewährleistung; wegen der <strong>Beweislastumkehr (§ 477 BGB, 1 Jahr)</strong> wird vermutet, dass der Mangel schon bei Übergabe bestand. Nach <strong>18 Monaten</strong>: Gewährleistung läuft noch, aber sie muss den ursprünglichen Mangel beweisen – einfacher ist die <strong>Garantie</strong>. Nach <strong>40 Monaten</strong>: kostenloser Tausch nur noch aus <strong>Kulanz</strong>.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Die Gewährleistung besteht immer (gesetzlich), die Garantie nur, wenn sie versprochen wurde. Zwischen Kaufleuten gilt die <strong>Rügepflicht (§ 377 HGB)</strong>: Ware unverzüglich prüfen und Mängel sofort melden, sonst gehen die Rechte verloren.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Entscheiden</em> Sie begründet, ob ein Werk- oder Dienstvertrag vorliegt“ · „<em>Vergleichen</em> Sie Vor-Ort-Einsatz und Fernwartung“ · „<em>Nennen</em> Sie Inhalte eines Abnahmeprotokolls“ · „<em>Unterscheiden</em> Sie Gewährleistung und Garantie“.</div>`
    },
    {
      id: "service-desk",
      title: "Service Desk, Support-Level, Eskalation und Service Requests",
      exam: ["AP1", "AP2"],
      summary: "Der Service Desk als Single Point of Contact, Kontaktkanäle, 1st/2nd/3rd Level, funktionale und hierarchische Eskalation sowie die Bearbeitung von Service Requests.",
      html: `
        <p>Der <strong>Service Desk</strong> ist die zentrale Anlaufstelle (<strong>SPOC – Single Point of Contact</strong>) zwischen IT-Dienstleister und Anwendern. Alle Anliegen – Störungen, Bestellungen, Fragen, Beschwerden – laufen hier ein, werden als Ticket erfasst, gelöst oder gezielt weitergeleitet. Vorteil: Anwender müssen nicht wissen, wer intern zuständig ist, und nichts geht verloren.</p>
        <h5>Call Center – Help Desk – Service Desk</h5>
        <table><thead><tr><th>Form</th><th>Aufgabe</th></tr></thead><tbody>
          <tr><td>Call Center</td><td>nimmt viele Anrufe entgegen und leitet weiter, kaum eigene Lösungskompetenz</td></tr>
          <tr><td>Help Desk</td><td>nimmt Störungen auf und löst einfache technische Probleme</td></tr>
          <tr><td>Service Desk</td><td>SPOC für <em>alle</em> Anliegen, eng verzahnt mit Incident-, Request-, Problem- und Change-Prozess, überwacht SLA-Zeiten</td></tr>
        </tbody></table>
        <p><strong>Kontaktkanäle:</strong> Telefon/Hotline, E-Mail, Self-Service-Portal, Chat/Chatbot, persönlich vor Ort, automatische Meldungen aus dem Monitoring.<br>
        <strong>Organisationsformen:</strong> lokal (am Standort), zentral (ein Desk für alle Standorte), virtuell (verteilte Teams wirken wie ein Desk), Follow the Sun (Weitergabe über Zeitzonen für 24/7-Betreuung).</p>
        <h5>Support-Level</h5>
        <table><thead><tr><th>Level</th><th>Wer?</th><th>Aufgaben / Beispiel</th></tr></thead><tbody>
          <tr><td>Level 0 (Self-Service)</td><td>Anwender selbst</td><td>FAQ, Wissensdatenbank, Passwort-Self-Service, Chatbot</td></tr>
          <tr><td>1st Level</td><td>Service Desk</td><td>Annahme, Erfassung, Kategorisierung, Priorisierung, Standardlösungen, z. B. Drucker neu verbinden; Ziel: möglichst viel im Erstkontakt lösen</td></tr>
          <tr><td>2nd Level</td><td>Fachteams (Netzwerk, Server, Anwendungen), ggf. Vor-Ort-Techniker</td><td>tiefere Analyse mit Spezialwissen und erweiterten Rechten, z. B. VLAN-Fehlkonfiguration beheben</td></tr>
          <tr><td>3rd Level</td><td>Hersteller, Entwickler, externe Spezialisten</td><td>Fehler in Software/Firmware, Hardwaretausch unter Garantie, Bugfix</td></tr>
        </tbody></table>
        <h5>Eskalation</h5>
        <table><thead><tr><th></th><th>Funktionale Eskalation (horizontal)</th><th>Hierarchische Eskalation (vertikal)</th></tr></thead><tbody>
          <tr><td>Was?</td><td>Weitergabe an ein Team mit <strong>mehr Fachwissen oder Rechten</strong></td><td>Einbeziehen der <strong>Führungsebene</strong> (Teamleitung, IT-Leitung)</td></tr>
          <tr><td>Wann?</td><td>1st Level kann nicht lösen, Know-how oder Berechtigung fehlt, Zeitlimit des Levels erreicht</td><td>SLA-Verletzung droht, Entscheidungen oder zusätzliche Ressourcen/Budget nötig, massive Kundenbeschwerde, Major Incident</td></tr>
          <tr><td>Beispiel</td><td>Service Desk übergibt Ticket an das Netzwerkteam</td><td>Teamleitung genehmigt Einsatz eines externen Technikers am Wochenende</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>Merke:</strong> Funktional = <em>zur Fachkompetenz</em> (seitwärts), hierarchisch = <em>zur Entscheidungskompetenz</em> (nach oben). Auch bei einer Weitergabe bleibt der Service Desk Ansprechpartner des Anwenders, überwacht das Ticket und informiert über den Stand. Viele Ticketsysteme eskalieren zusätzlich <strong>zeitgesteuert</strong>, z. B. automatisch, sobald 75 % einer SLA-Frist verstrichen sind.</div>
        <h5>Service Requests (Service Request Management)</h5>
        <p>Ein <strong>Service Request</strong> ist eine Anfrage nach einer <em>vereinbarten Standardleistung</em> – nichts ist kaputt. Beispiele: Passwort zurücksetzen, Software aus dem Katalog installieren, neuen Benutzerzugang anlegen, Toner bestellen, Auskunft geben. In ITIL v3 hieß der Prozess <em>Request Fulfilment</em>.</p>
        <ul>
          <li>Grundlage ist ein <strong>Service-Katalog</strong>: Welche Leistungen kann man bestellen, zu welchen Kosten und in welcher Zeit?</li>
          <li>Bestellung meist über ein <strong>Self-Service-Portal</strong>, Abwicklung über <strong>standardisierte Workflows</strong>, bei Kosten mit Genehmigung (z. B. durch die Kostenstelle).</li>
          <li>Viele Requests lassen sich <strong>automatisieren</strong> (z. B. Softwareverteilung, Passwort-Self-Service) – das spart Zeit und Geld.</li>
        </ul>
        <h5>KI im Service Desk</h5>
        <p>KI-Chatbots beantworten Standardfragen rund um die Uhr, KI-Funktionen im Ticketsystem schlagen Kategorie und Priorität vor, fassen lange Tickets zusammen und finden passende Artikel der Wissensdatenbank. <strong>Grenzen:</strong> Antworten können falsch sein (Halluzinationen), personenbezogene Daten dürfen nur DSGVO-konform verarbeitet werden, die Verantwortung für Antworten bleibt beim Unternehmen, und bei Unzufriedenheit muss ein Mensch übernehmen können. Den Nutzen (Entlastung des 1st Levels, 24/7-Erreichbarkeit) wägt man gegen die Kosten ab: Lizenz- bzw. Nutzungsgebühren, Einrichtung, Pflege der Wissensbasis, Schulung.</p>
        <div class="grid-2">
          <div class="callout tipp"><strong>Persönliche Voraussetzungen im Service:</strong> Freundlichkeit, Geduld, Belastbarkeit, Empathie, sicheres Auftreten, Kommunikationsstärke, Kundenorientierung, Lernbereitschaft.</div>
          <div class="callout tipp"><strong>Fachliche Voraussetzungen:</strong> Betriebssysteme, Netzwerktechnik, Ticketsystem und Incident-Prozess, Datenschutz und IT-Sicherheit, Englisch, Dokumentation.</div>
        </div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> „Passwort vergessen“ ist <strong>kein Incident</strong>, sondern ein Service Request – der Service selbst funktioniert. Und: Die Weitergabe vom 1st an den 2nd Level ist <strong>funktional</strong>, nicht hierarchisch.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Erläutern</em> Sie die Aufgaben des 1st-Level-Supports“ · „<em>Unterscheiden</em> Sie funktionale und hierarchische Eskalation an je einem Beispiel“ · „<em>Nennen</em> Sie zwei Vorteile eines SPOC“ · „<em>Beurteilen</em> Sie den Einsatz eines KI-Chatbots im Support“.</div>`
    },
    {
      id: "incident",
      title: "Ticketsystem, Priorisierung und Incident Management",
      exam: ["AP1", "AP2"],
      summary: "Inhalte und Lebenszyklus eines Tickets, Kategorisierung, Priorität aus Auswirkung × Dringlichkeit und der Ablauf des Incident Managements inklusive Major Incident.",
      html: `
        <p>Ein <strong>Incident (Störung)</strong> ist eine ungeplante Unterbrechung eines Services oder eine Minderung seiner Qualität – auch ein drohender Ausfall (z. B. Festplatte meldet S.M.A.R.T.-Fehler). <strong>Ziel des Incident Managements:</strong> den normalen Servicebetrieb <em>so schnell wie möglich</em> wiederherstellen und die Auswirkungen auf das Geschäft gering halten.</p>
        <h5>Was gehört in ein Ticket?</h5>
        <ul>
          <li>eindeutige Ticketnummer, Datum/Uhrzeit, Kanal, erfassende Person</li>
          <li>Melder mit Kontaktdaten, Standort, betroffener Service bzw. Configuration Item (CI, z. B. Druckername)</li>
          <li>genaue Beschreibung (Fehlermeldung, seit wann, was wurde geändert, reproduzierbar?)</li>
          <li>Typ (Incident, Service Request …), Kategorie, Auswirkung, Dringlichkeit, Priorität</li>
          <li>Status, zuständige Gruppe/Bearbeiter, SLA-Fristen</li>
          <li>alle Maßnahmen mit Zeitstempel, Lösung, Abschlussbestätigung</li>
        </ul>
        <h5>Lebenszyklus eines Tickets</h5>
        <pre class="ascii">Neu → Zugewiesen → In Bearbeitung ⇄ Wartend (z. B. auf Kunde/Lieferant)
                                ↓
                             Gelöst → Geschlossen
                                ↑          (Kunde bestätigt oder Frist abgelaufen)
                     Wiedereröffnet (Lösung hat nicht funktioniert)</pre>
        <p><strong>Nutzen eines Ticketsystems:</strong> Nichts geht verloren, jeder Bearbeitungsstand ist nachvollziehbar (auch bei Urlaub), SLA-Fristen werden automatisch überwacht, Auswertungen und Kennzahlen werden möglich, und gelöste Tickets füllen die Wissensdatenbank.</p>
        <h5>Kategorisierung und Priorisierung</h5>
        <p><strong>Kategorisierung</strong> ordnet das Ticket ein (z. B. Hardware › Drucker › Papiereinzug). Das ermöglicht die richtige Zuweisung und spätere Auswertungen (Welche Kategorie verursacht die meisten Tickets?).</p>
        <p>Die <strong>Priorität</strong> ergibt sich aus zwei Größen:</p>
        <ul>
          <li><strong>Auswirkung (Impact):</strong> Wie groß ist der Schaden? – Anzahl betroffener Personen, Kritikalität des Services, finanzieller Schaden, Sicherheit.</li>
          <li><strong>Dringlichkeit (Urgency):</strong> Wie schnell muss es gelöst sein? – Termindruck, Umgehungslösung vorhanden?</li>
        </ul>
        <div class="callout formel">Priorität = f(Auswirkung, Dringlichkeit) → abgelesen aus der Prioritätsmatrix</div>
        <table><thead><tr><th>Auswirkung ↓ / Dringlichkeit →</th><th>hoch</th><th>mittel</th><th>niedrig</th></tr></thead><tbody>
          <tr><td><strong>hoch</strong></td><td>1 – kritisch</td><td>2 – hoch</td><td>3 – mittel</td></tr>
          <tr><td><strong>mittel</strong></td><td>2 – hoch</td><td>3 – mittel</td><td>4 – niedrig</td></tr>
          <tr><td><strong>niedrig</strong></td><td>3 – mittel</td><td>4 – niedrig</td><td>5 – Planung</td></tr>
        </tbody></table>
        <p>Jedes Unternehmen legt Matrix und Zielzeiten im SLA selbst fest, z. B.: Prio 1 → Reaktion 15 min / Lösung 4 h; Prio 2 → 30 min / 8 h; Prio 3 → 2 h / 2 Arbeitstage; Prio 4 → 4 h / 5 Arbeitstage; Prio 5 → nach Absprache.</p>
        <div class="callout beispiel"><strong>Beispiel (Nordlicht IT GmbH, Heide):</strong><br>
        • Ticket A: Das Warenwirtschaftssystem ist für alle 40 Beschäftigten ausgefallen, der Versand steht. → Auswirkung hoch, Dringlichkeit hoch → <strong>Priorität 1</strong>.<br>
        • Ticket B: Bei einer Person flackert der zweite Monitor, sie kann mit einem Bildschirm weiterarbeiten. → Auswirkung niedrig, Dringlichkeit niedrig (Workaround) → <strong>Priorität 5</strong>.<br>
        • Ticket C: Der Abteilungsdrucker (8 Personen) druckt nicht, in 2 h müssen Angebote raus; ein Ausweichdrucker steht im Nachbarbüro. → Auswirkung mittel, Dringlichkeit mittel → <strong>Priorität 3</strong>.</div>
        <h5>Ablauf des Incident Managements</h5>
        <ol>
          <li><strong>Erkennen und Erfassen</strong> (Anruf, Portal, Monitoring-Alarm) – Ticket anlegen</li>
          <li><strong>Kategorisieren</strong> und <strong>Priorisieren</strong></li>
          <li><strong>Erstdiagnose</strong> durch den 1st Level (Wissensdatenbank, bekannte Fehler prüfen)</li>
          <li><strong>Eskalieren</strong>, falls nötig (funktional/hierarchisch)</li>
          <li><strong>Untersuchen und Diagnostizieren</strong></li>
          <li><strong>Lösen und Wiederherstellen</strong> (Lösung oder Workaround)</li>
          <li><strong>Abschließen</strong>: Lösung dokumentieren, Anwender bestätigen lassen, Kategorie prüfen, ggf. Problem-Ticket anstoßen</li>
        </ol>
        <p><strong>Major Incident:</strong> Störung mit sehr großer Auswirkung (z. B. Ausfall des gesamten Netzwerks). Dafür gibt es ein eigenes Verfahren: eigenes Team mit Verantwortlichem (Major Incident Manager), verkürzte Zeiten, regelmäßige Statusmeldungen an alle Betroffenen, Management wird sofort informiert, anschließend Nachbetrachtung.</p>
        <div class="callout merke"><strong>Merke:</strong> Incident Management fragt „Wie läuft es schnell wieder?“ – nicht „Warum ist es passiert?“. Die Ursachenforschung übernimmt das Problem Management.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Die Priorität hängt nicht davon ab, wie laut sich jemand beschwert oder welche Position er hat. Entscheidend sind Auswirkung und Dringlichkeit. Ein „VIP“ kann per SLA eine Sonderregel haben – dann muss das dort vereinbart sein.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Bestimmen</em> Sie mithilfe der Matrix die Priorität der drei Tickets und <em>begründen</em> Sie Ihre Einstufung“ · „<em>Nennen</em> Sie vier Angaben, die ein Ticket enthalten muss“ · „<em>Beschreiben</em> Sie den Ablauf des Incident Managements“.</div>`
    },
    {
      id: "problem",
      title: "Problem Management und systematische Fehleranalyse",
      exam: ["AP1", "AP2"],
      summary: "Problem, Known Error, Workaround und KEDB, der Ablauf des Problem Managements sowie Analysemethoden wie Ishikawa-Diagramm, 5-Why und strukturiertes Troubleshooting.",
      html: `
        <p>Ein <strong>Problem</strong> ist die <em>Ursache</em> (oder mögliche Ursache) eines oder mehrerer Incidents. Während das Incident Management den Anwender schnell wieder arbeitsfähig macht, sucht das <strong>Problem Management</strong> die <strong>Grundursache (Root Cause)</strong> und beseitigt sie dauerhaft – damit dieselbe Störung nicht immer wieder auftritt.</p>
        <table><thead><tr><th></th><th>Incident Management</th><th>Problem Management</th></tr></thead><tbody>
          <tr><td>Ziel</td><td>Service schnell wiederherstellen</td><td>Ursache finden und dauerhaft beseitigen, Incidents verhindern</td></tr>
          <tr><td>Zeitdruck</td><td>hoch (SLA-Zeiten)</td><td>geringer, gründliche Analyse</td></tr>
          <tr><td>Ergebnis</td><td>Lösung oder Workaround</td><td>Known Error, Workaround, dauerhafte Lösung (oft per Change)</td></tr>
          <tr><td>Auslöser</td><td>einzelne Störung</td><td>wiederkehrende oder schwere Incidents, Trendanalysen, Herstellerwarnungen</td></tr>
        </tbody></table>
        <h5>Zentrale Begriffe</h5>
        <ul>
          <li><strong>Workaround (Umgehungslösung):</strong> verringert oder beseitigt die Auswirkung eines Incidents oder Problems, solange es noch keine endgültige Lösung gibt. Beispiel: Anwender drucken über einen anderen Drucker.</li>
          <li><strong>Known Error (bekannter Fehler):</strong> ein Problem, das analysiert wurde (Ursache bekannt), aber noch nicht behoben ist.</li>
          <li><strong>KEDB (Known Error Database):</strong> Datenbank mit bekannten Fehlern, deren Symptomen, Ursachen und Workarounds. Der 1st Level durchsucht sie bei jeder Störung – so werden viele Incidents sofort gelöst.</li>
          <li><strong>Reaktives</strong> Problem Management startet nach aufgetretenen Incidents, <strong>proaktives</strong> sucht Schwachstellen vorher (Trendanalyse, Monitoring, Herstellerhinweise).</li>
        </ul>
        <h5>Ablauf (ITIL 4)</h5>
        <ol>
          <li><strong>Problemidentifikation:</strong> wiederkehrende Incidents erkennen (z. B. Auswertung nach Kategorie), Problem-Ticket anlegen, mit den Incidents verknüpfen.</li>
          <li><strong>Problemkontrolle:</strong> priorisieren, Ursache analysieren, Workaround entwickeln, Known Error dokumentieren (KEDB).</li>
          <li><strong>Fehlerkontrolle:</strong> dauerhafte Lösung planen, meist über einen <strong>Change (RFC)</strong> umsetzen, Wirksamkeit prüfen, Problem schließen.</li>
        </ol>
        <h5>Ishikawa-Diagramm (Ursache-Wirkungs-Diagramm, Fischgräte)</h5>
        <p>Am „Kopf“ steht die Wirkung (das Problem), an den „Gräten“ die Ursachenkategorien. Klassisch sind die <strong>6 M</strong>: Mensch, Maschine, Methode, Material, Milieu (Umwelt), Messung. In der IT oft angepasst: Mensch, Hardware, Software, Netzwerk, Prozess, Umgebung.</p>
        <pre class="ascii"> Mensch             Hardware            Software
   \\ fehlende         \\ WLAN-Access-       \\ fehlerhaftes
    \\ Schulung         \\ Point veraltet     \\ VPN-Client-Update
     \\__________________\\____________________\\______▶ VPN-Verbindung
     /                  /                    /        bricht täglich ab
    / kein Test vor    / DSL-Leitung        / Router im
   / Updates          / überlastet         / Homeoffice
 Prozess            Netzwerk            Umgebung</pre>
        <h5>5-Why-Methode</h5>
        <div class="callout beispiel"><strong>Beispiel:</strong> Der Dateiserver der Nordlicht IT GmbH ist nicht erreichbar.<br>
        1. Warum? – Der Dienst ist abgestürzt.<br>
        2. Warum? – Die Systempartition ist voll.<br>
        3. Warum? – Die Protokolldateien wachsen unbegrenzt.<br>
        4. Warum? – Nach einem Update ist die Log-Rotation deaktiviert.<br>
        5. Warum? – Das Update wurde ohne Test und ohne Checkliste eingespielt.<br>
        → <strong>Root Cause:</strong> fehlender Test im Change-Prozess. Workaround: Logs löschen. Dauerhafte Lösung: Log-Rotation aktivieren, Speicherwarnung im Monitoring, Change-Checkliste ergänzen.</div>
        <h5>Strukturiertes Troubleshooting</h5>
        <ul>
          <li><strong>Bottom-up:</strong> entlang des OSI-Modells von Schicht 1 (Kabel, Link-LED) nach oben – gut bei Netzwerkproblemen.</li>
          <li><strong>Top-down:</strong> von der Anwendung nach unten – gut, wenn nur ein Programm betroffen ist.</li>
          <li><strong>Divide and Conquer:</strong> in der Mitte beginnen (z. B. <code>ping</code> aufs Gateway) und je nach Ergebnis oben oder unten weitersuchen.</li>
          <li>Immer nur <strong>eine Änderung gleichzeitig</strong> testen und alles im Ticket dokumentieren.</li>
        </ul>
        <pre><code>ipconfig /all              (IP-Konfiguration, DNS, DHCP prüfen)
ping 192.168.10.1          (Gateway erreichbar?)
tracert www.bsi.bund.de    (wo endet der Weg?)
nslookup fileserver01      (Namensauflösung ok?)</code></pre>
        <div class="callout merke"><strong>Merke:</strong> Incident = Symptom, Problem = Ursache. Known Error = Ursache bekannt, aber noch nicht behoben. Ein Workaround ist <em>keine</em> dauerhafte Lösung – das Problem bleibt offen, bis die Ursache beseitigt ist.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> „Das Problem wurde gelöst, weil der Anwender wieder arbeiten kann“ ist falsch – das beschreibt den gelösten Incident. Außerdem wird nicht jeder Incident zum Problem, sondern vor allem wiederkehrende oder schwerwiegende.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Grenzen</em> Sie Incident und Problem voneinander <em>ab</em>“ · „<em>Erläutern</em> Sie den Begriff Known Error“ · „<em>Wenden</em> Sie die 5-Why-Methode auf den Fall <em>an</em>“ · „<em>Ordnen</em> Sie mögliche Ursachen den Kategorien eines Ishikawa-Diagramms <em>zu</em>“.</div>`
    },
    {
      id: "change",
      title: "Change Enablement und Veränderungsprozesse",
      exam: ["AP1", "AP2"],
      summary: "Changes kontrolliert durchführen: Standard-, Normal- und Emergency-Change, RFC, CAB, Ablauf und Rückfallplan sowie Umgang mit Widerständen bei organisatorischen Veränderungen.",
      html: `
        <p>Ein <strong>Change</strong> ist das Hinzufügen, Ändern oder Entfernen von allem, was sich direkt oder indirekt auf Services auswirken kann – z. B. ein Server-Update, eine neue Firewall-Regel oder der Austausch eines Switches. Ziel des <strong>Change Enablements</strong> (ITIL 4, früher Change Management/Change Control): möglichst viele Changes <strong>erfolgreich</strong> umsetzen, indem Risiken bewertet, Changes genehmigt und zeitlich koordiniert werden.</p>
        <h5>Change-Arten</h5>
        <table><thead><tr><th>Art</th><th>Merkmale</th><th>Genehmigung</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td><strong>Standard Change</strong></td><td>geringes Risiko, häufig, gut dokumentiertes Verfahren</td><td>vorab genehmigt, wird direkt ausgeführt</td><td>freigegebene Software aus dem Katalog installieren, RAM nach Standard aufrüsten</td></tr>
          <tr><td><strong>Normal Change</strong></td><td>muss einzeln bewertet und geplant werden</td><td>Change Authority, bei größeren Changes das CAB</td><td>Migration des Mailservers, neues VLAN-Konzept</td></tr>
          <tr><td><strong>Emergency Change</strong></td><td>muss sofort umgesetzt werden, um Schaden abzuwenden</td><td>beschleunigt, z. B. durch ein Notfall-CAB (ECAB); Dokumentation ggf. nachträglich vervollständigen</td><td>Sicherheitspatch gegen eine aktiv ausgenutzte Lücke</td></tr>
        </tbody></table>
        <h5>Request for Change (RFC)</h5>
        <p>Ein <strong>RFC</strong> ist der formale Antrag auf eine Änderung. Er enthält u. a.: Antragsteller, Beschreibung und Begründung (Nutzen), betroffene Services und CIs, Risiko- und Auswirkungsbewertung, benötigte Ressourcen und Kosten, Zeitplan (Wartungsfenster), Testkonzept und <strong>Rückfallplan (Backout-Plan)</strong>.</p>
        <div class="callout tipp"><strong>Die 7 R des Change Managements</strong> (Prüffragen für jeden RFC): Wer hat ihn gestellt (<em>Raised</em>)? Warum (<em>Reason</em>)? Welcher Nutzen (<em>Return</em>)? Welche Risiken (<em>Risks</em>)? Welche Ressourcen (<em>Resources</em>)? Wer ist verantwortlich (<em>Responsible</em>)? Welche Abhängigkeiten zu anderen Changes (<em>Relationship</em>)?</div>
        <h5>Ablauf eines Normal Changes</h5>
        <ol>
          <li>RFC erfassen und auf Vollständigkeit prüfen</li>
          <li>Change klassifizieren, Risiko und Auswirkungen bewerten</li>
          <li>genehmigen oder ablehnen (Change Authority / CAB)</li>
          <li>planen und in den <strong>Change-Kalender</strong> (Change Schedule) eintragen</li>
          <li>vorbereiten und testen (Testumgebung)</li>
          <li>umsetzen im Wartungsfenster; bei Fehlschlag Rückfallplan ausführen</li>
          <li>Review (Post Implementation Review): Ziel erreicht? Nebenwirkungen? Dokumentation und <strong>CMDB</strong> aktualisieren, Change schließen</li>
        </ol>
        <p><strong>CAB (Change Advisory Board):</strong> Gremium aus Vertretern von IT-Betrieb, Fachbereichen, Sicherheit und ggf. Lieferanten, das Normal Changes bewertet und berät. ITIL 4 spricht allgemeiner von der <strong>Change Authority</strong> – das kann auch eine einzelne Person sein. <strong>CMDB (Configuration Management Database):</strong> speichert alle Configuration Items (CIs) und ihre Beziehungen – daraus erkennt man, welche Services ein Change betrifft.</p>
        <div class="callout beispiel"><strong>Beispiel:</strong> Die Nordlicht IT GmbH will am Samstag die Firmware aller Core-Switches aktualisieren. Normal Change → RFC mit Begründung (Sicherheitslücke, Herstellerempfehlung), betroffene CIs (2 Core-Switches, alle VLANs), Risiko (Netzausfall), Wartungsfenster Sa 06:00–08:00 Uhr, Test am Laborswitch, Rückfallplan (alte Firmware-Partition booten), CAB-Genehmigung am Dienstag, Information aller Anwender.</div>
        <h5>Veränderungsprozesse im Unternehmen begleiten</h5>
        <p>Auch organisatorische Veränderungen (neues Ticketsystem, neue Arbeitsabläufe) müssen gesteuert werden – ITIL 4 nennt das <strong>Organizational Change Management</strong>, der AP1-Katalog „Veränderungsprozesse begleiten (Change Management)“. Menschen reagieren unterschiedlich: <strong>Promotoren</strong> treiben voran, <strong>Skeptiker</strong> zweifeln und brauchen Argumente, <strong>Bremser</strong> verzögern, <strong>Widerständler</strong> lehnen offen ab. Ursachen für Widerstand sind z. B. Angst vor Kompetenz- oder Statusverlust, Wissenslücken, schlechte Erfahrungen mit früheren Veränderungen.</p>
        <p><strong>Drei-Phasen-Modell nach Lewin:</strong> 1. <em>Auftauen (Unfreeze)</em> – Notwendigkeit erklären, Betroffene früh informieren und beteiligen · 2. <em>Verändern (Move)</em> – neue Abläufe einführen, schulen, begleiten · 3. <em>Stabilisieren (Refreeze)</em> – Neues verankern (Dokumentation, Erfolge sichtbar machen, Rückfall in alte Muster verhindern).</p>
        <ul>
          <li>früh und ehrlich informieren, Chancen betonen, Ziele erklären</li>
          <li>Betroffene beteiligen (Workshops, Pilotgruppen), Veränderungsschritte sichtbar machen</li>
          <li>qualifizieren: Schulungen, Blended Learning, Multiplikatoren (Key-User)</li>
        </ul>
        <div class="callout merke"><strong>Merke:</strong> Standard = vorab genehmigt · Normal = einzeln bewertet und genehmigt · Emergency = beschleunigt genehmigt. Kein Change ohne Test und Rückfallplan.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Ein Emergency Change ist <em>nicht</em> ungenehmigt – er wird nur schneller genehmigt. Und ein Service Request (z. B. Passwort zurücksetzen) ist kein Change.<br><strong>Begriffsfalle „Change Management“:</strong> Gemeint sein kann (1) die kontrollierte Durchführung <em>technischer</em> Änderungen mit RFC und CAB (ITIL 4: Change Enablement) oder (2) die Begleitung der <em>Menschen</em> durch eine Veränderung mit Lewin-Modell, Information, Schulung und Umgang mit Widerständen (ITIL 4: Organizational Change Management). Der AP1-Katalog meint unter „Veränderungsprozesse begleiten“ Bedeutung (2); lies trotzdem im Aufgabentext genau, worum es geht.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Ordnen</em> Sie die Änderungen den Change-Arten <em>zu</em>“ · „<em>Nennen</em> Sie vier Inhalte eines RFC“ · „<em>Erläutern</em> Sie die Aufgabe des CAB“ – gern auch auf Basis eines englischen Textes (z. B. „emergency change“, „rollback plan“, „change window“).</div>`
    },
    {
      id: "sla-kennzahlen",
      title: "SLA, OLA, UC und Service-Kennzahlen",
      exam: ["AP1", "AP2"],
      summary: "Vereinbarungen zwischen Kunde, IT und Lieferanten, Servicezeit, Reaktions- und Lösungszeit sowie die Berechnung von Verfügbarkeit, Ausfallzeit, MTBF, MTTR und Erstlösungsquote.",
      html: `
        <p>Damit Service-Qualität messbar wird, schließen die Beteiligten Vereinbarungen mit konkreten, überprüfbaren Zielwerten (<strong>Service Level</strong>) ab. Das <strong>Service Level Management</strong> verhandelt sie, überwacht sie und berichtet darüber.</p>
        <table><thead><tr><th>Vereinbarung</th><th>zwischen</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td><strong>SLA</strong> – Service Level Agreement</td><td>IT-Dienstleister und <strong>Kunde</strong></td><td>E-Mail-Service: 99,5 % Verfügbarkeit, Prio-1-Lösung in 4 h</td></tr>
          <tr><td><strong>OLA</strong> – Operational Level Agreement</td><td>IT-Dienstleister und <strong>interner</strong> Einheit</td><td>Netzwerkteam übernimmt Tickets des Service Desks innerhalb von 30 min</td></tr>
          <tr><td><strong>UC</strong> – Underpinning Contract</td><td>IT-Dienstleister und <strong>externem Lieferanten</strong></td><td>Hersteller liefert Ersatzteile am nächsten Arbeitstag (NBD)</td></tr>
        </tbody></table>
        <pre class="ascii">          SLA                       OLA
Kunde ◀────────▶ IT-Dienstleister ◀────────▶ interne Teams (Netzwerk, Server)
                        ▲
                        │ UC (Vertrag)
                        ▼
               externe Lieferanten (Hersteller, Provider)</pre>
        <div class="callout merke"><strong>Merke:</strong> OLA und UC müssen zum SLA passen. Sagt das SLA „Lösung in 4 h“ zu, der Lieferant liefert laut UC aber erst am nächsten Tag, ist das SLA nicht einzuhalten.</div>
        <p><strong>Typische SLA-Inhalte:</strong> Leistungsbeschreibung, Servicezeiten, Prioritäten mit Reaktions- und Lösungszeiten, Verfügbarkeit, Eskalationswege, Ansprechpartner, Mitwirkungspflichten des Kunden, Messverfahren und Berichte (Reporting), Vertragsstrafen bzw. Bonus/Malus, Laufzeit und Kündigung. Oft gibt es gestufte <strong>Service Level</strong>, z. B. Gold (24/7, Reaktion 30 min), Silber (Mo–Fr 7–19 Uhr, 2 h), Bronze (Mo–Fr 8–17 Uhr, nächster Arbeitstag) – je höher die Stufe, desto teurer.</p>
        <h5>Zeiten im SLA</h5>
        <ul>
          <li><strong>Servicezeit:</strong> Zeitraum, in dem der Service unterstützt wird (z. B. Mo–Fr 8–17 Uhr oder 24/7).</li>
          <li><strong>Reaktionszeit:</strong> von der Meldung bis zum Beginn der qualifizierten Bearbeitung (Rückmeldung durch Fachpersonal).</li>
          <li><strong>Lösungszeit (Wiederherstellungszeit):</strong> von der Meldung bis zur Wiederherstellung des Services.</li>
        </ul>
        <div class="callout beispiel"><strong>Beispiel Fristberechnung:</strong> Servicezeit Mo–Fr 8–17 Uhr, Lösungszeit 4 h. Meldung am Freitag um 16:30 Uhr.<br>Freitag bis 17:00 Uhr verbraucht: 0,5 h → Rest 3,5 h → Montag 8:00 + 3,5 h = <strong>Montag 11:30 Uhr</strong>. Die SLA-Uhr steht außerhalb der Servicezeit.</div>
        <h5>Verfügbarkeit</h5>
        <div class="callout formel">Verfügbarkeit (%) = (vereinbarte Servicezeit − Ausfallzeit) ÷ vereinbarte Servicezeit × 100<br>
        maximale Ausfallzeit = vereinbarte Servicezeit × (100 % − Verfügbarkeit)</div>
        <table><thead><tr><th>Verfügbarkeit</th><th>max. Ausfall pro Jahr (24/7, 8.760 h)</th></tr></thead><tbody>
          <tr><td>99 %</td><td>87,6 h</td></tr>
          <tr><td>99,5 %</td><td>43,8 h</td></tr>
          <tr><td>99,9 %</td><td>8,76 h ≈ 8 h 46 min</td></tr>
          <tr><td>99,99 %</td><td>52,56 min</td></tr>
          <tr><td>99,999 %</td><td>≈ 5,26 min</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel:</strong> Servicezeit Mo–Fr 8–18 Uhr, der Monat hat 21 Arbeitstage → 21 × 10 h = 210 h. SLA: 98 % → erlaubter Ausfall = 210 h × 0,02 = <strong>4,2 h</strong> (4 h 12 min). Tatsächlich fiel der Service 3 h aus → (210 − 3) ÷ 210 × 100 ≈ <strong>98,57 %</strong> → SLA eingehalten.</div>
        <h5>MTBF und MTTR</h5>
        <div class="callout formel">MTBF (Mean Time Between Failures) = Betriebszeit ÷ Anzahl Ausfälle<br>
        MTTR (Mean Time To Repair/Restore) = gesamte Ausfallzeit ÷ Anzahl Ausfälle (ITIL spricht auch von MTRS – Mean Time to Restore Service)<br>
        Verfügbarkeit = MTBF ÷ (MTBF + MTTR)<br>
        AFR (jährliche Ausfallrate) ≈ 8.760 h ÷ MTBF – z. B. MTBF 250.000 h → ≈ 3,5 % pro Gerät und Jahr</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> Ein Server läuft ein Jahr (8.760 h) und fällt 4-mal aus, insgesamt 12 h.<br>
        Betriebszeit = 8.760 h − 12 h = 8.748 h → MTBF = 8.748 h ÷ 4 = <strong>2.187 h</strong><br>
        MTTR = 12 h ÷ 4 = <strong>3 h</strong><br>
        Verfügbarkeit = 2.187 ÷ (2.187 + 3) = 2.187 ÷ 2.190 ≈ <strong>99,86 %</strong></div>
        <h5>Weitere Kennzahlen (KPIs)</h5>
        <ul>
          <li><strong>Erstlösungsquote (First Call/Contact Resolution, FCR)</strong> = im Erstkontakt gelöste Tickets ÷ alle Tickets × 100. Beispiel: 868 von 1.240 → 70 %.</li>
          <li><strong>SLA-Erfüllungsgrad</strong> = fristgerecht gelöste Tickets ÷ alle Tickets × 100</li>
          <li>durchschnittliche Reaktions- und Lösungszeit, Ticketanzahl je Kategorie, Rückstand (Backlog), Wiedereröffnungsquote, Kundenzufriedenheit</li>
        </ul>
        <div class="callout beispiel"><strong>Beispiel Vertragsstrafe:</strong> Monatspauschale 2.400 €, vereinbart 99,5 %, erreicht 99,2 %. Pro volle 0,1 Prozentpunkte Unterschreitung gibt es 3 % Gutschrift. Unterschreitung 0,3 Punkte → 3 × 3 % = 9 % → 2.400 € × 0,09 = <strong>216 € Gutschrift</strong>.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Rechne Verfügbarkeiten immer auf die <em>vereinbarte Servicezeit</em>, nicht automatisch auf 24/7. Achte auf Einheiten (h ↔ min: 0,76 h = 45,6 min, nicht 76 min) und darauf, ob Reaktions- oder Lösungszeit gefragt ist.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Berechnen</em> Sie die maximal zulässige Ausfallzeit pro Monat“ · „<em>Prüfen</em> Sie, ob das SLA eingehalten wurde“ · „<em>Grenzen</em> Sie SLA, OLA und UC <em>ab</em>“ · „<em>Berechnen</em> Sie MTBF und MTTR“. Rechenweg mit Formel und Einheiten hinschreiben!</div>`
    },
    {
      id: "it-sicherstellung",
      title: "Methoden zur Sicherstellung des IT-Betriebs",
      exam: ["AP1", "AP2"],
      summary: "Monitoring mit Schwellwerten, Wartungsstrategien, Redundanz und Verfügbarkeit von Systemketten, USV, Datensicherung und Notfallvorsorge.",
      html: `
        <p>Die beste Störung ist die, die gar nicht erst auftritt. Deshalb kombinieren IT-Abteilungen <strong>Überwachung</strong>, <strong>vorbeugende Wartung</strong>, <strong>Redundanz</strong> und <strong>Notfallvorsorge</strong>, um die im SLA zugesagte Verfügbarkeit zu erreichen.</p>
        <h5>Monitoring</h5>
        <ul>
          <li><strong>Was?</strong> CPU-, RAM- und Festplattenauslastung, Temperatur, Dienste und Prozesse, Bandbreite, Antwortzeiten, Log-Einträge, Zertifikatslaufzeiten, Backup-Ergebnisse.</li>
          <li><strong>Wie?</strong> <strong>SNMP</strong> (Abfrage über UDP 161, Traps an UDP 162), <strong>S.M.A.R.T.</strong> (Selbstdiagnose von Festplatten/SSDs), Syslog, Agenten auf den Systemen; Werkzeuge z. B. Zabbix, Checkmk, PRTG, Icinga.</li>
          <li><strong>Schwellwerte</strong> festlegen, z. B. Festplatte: Warnung ab 80 %, kritisch ab 90 %. Bei Überschreitung: Alarm per Mail/SMS und automatisches Ticket.</li>
          <li><strong>Systemlastanalyse und Kapazitätsplanung:</strong> Trends erkennen (z. B. Speicher wächst 5 % pro Monat) und rechtzeitig erweitern, bevor ein Engpass entsteht.</li>
        </ul>
        <h5>Wartungsstrategien</h5>
        <table><thead><tr><th>Strategie</th><th>Vorgehen</th><th>Vor-/Nachteil</th></tr></thead><tbody>
          <tr><td>korrektiv (reaktiv, Break/Fix)</td><td>reparieren, wenn etwas defekt ist</td><td>keine Vorabkosten, aber ungeplante Ausfälle</td></tr>
          <tr><td>präventiv (vorbeugend)</td><td>feste Intervalle: Updates, Reinigung, Lüftertausch, Akkutausch USV</td><td>planbar, aber evtl. Tausch noch intakter Teile</td></tr>
          <tr><td>vorausschauend (Predictive Maintenance)</td><td>Zustandsdaten auswerten (S.M.A.R.T.-Werte, Temperaturtrends), Tausch kurz vor dem erwarteten Ausfall</td><td>effizient, braucht gutes Monitoring und Daten</td></tr>
        </tbody></table>
        <p>Dazu gehört ein geregeltes <strong>Patch- und Update-Management</strong>. <strong>Korrektive Maßnahmen</strong> aus dem Monitoring sind z. B. Ressourcen erweitern, Last verteilen, Dienst neu starten oder Hardware tauschen. Wiederkehrende Fälle beschreibt man als <strong>Standard Operating Procedure (SOP)</strong>, damit jeder sie gleich und fehlerarm erledigt.</p>
        <h5>Dokumentation und Handbücher</h5>
        <table><thead><tr><th>Dokument</th><th>Zielgruppe</th><th>Inhalt</th></tr></thead><tbody>
          <tr><td>Benutzerhandbuch</td><td>Anwender</td><td>Bedienung Schritt für Schritt, einfache Sprache, Screenshots, FAQ</td></tr>
          <tr><td>System-/Administrationshandbuch</td><td>Systembetreuer</td><td>Architektur, Installation, Konfiguration, Backup/Restore, Notfallmaßnahmen</td></tr>
          <tr><td>Konfigurationsdokumentation</td><td>IT-Betrieb</td><td>Zweck, Versionen, Einstellungen, Abhängigkeiten, Änderungshistorie</td></tr>
          <tr><td>Checkliste</td><td>alle Ausführenden</td><td>Routinearbeiten wie Benutzeranlage, Offboarding, Server-Neuinstallation</td></tr>
        </tbody></table>
        <p>Dokumentationen sind zielgruppengerecht und barrierefrei (klare Struktur, Kontrast, Alternativtexte), versioniert und zentral abgelegt; feste Verantwortliche halten sie aktuell.</p>
        <h5>Redundanz und Verfügbarkeit</h5>
        <p>Redundanz heißt: kritische Komponenten sind mehrfach vorhanden (redundante Netzteile, zweiter Internetanschluss, Server-Cluster, RAID, Link-Aggregation). Fällt eine aus, übernimmt die andere.</p>
        <div class="callout formel">Reihe (alle nötig): A(gesamt) = A₁ × A₂ × …<br>Parallel (eine reicht): A(gesamt) = 1 − (1 − A₁) × (1 − A₂) × …</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> Ein Webshop braucht Router (99 %) und Server (98 %) hintereinander: 0,99 × 0,98 = 0,9702 → <strong>97,02 %</strong> – die Kette ist schlechter als jedes Einzelteil.<br>
        Zwei parallele Server mit je 99 %: 1 − (0,01 × 0,01) = 1 − 0,0001 = <strong>99,99 %</strong>.</div>
        <h5>USV (Unterbrechungsfreie Stromversorgung)</h5>
        <table><thead><tr><th>Typ</th><th>Funktion</th></tr></thead><tbody>
          <tr><td>Offline / VFD</td><td>schaltet erst bei Stromausfall auf Akku um (kurze Umschaltzeit), günstig, für Arbeitsplätze</td></tr>
          <tr><td>Line-Interactive / VI</td><td>zusätzlich Spannungsregelung bei Unter-/Überspannung, für kleine Server</td></tr>
          <tr><td>Online / VFI (Doppelwandler)</td><td>Verbraucher hängen dauerhaft am Wechselrichter, keine Umschaltzeit, filtert alle Störungen – für Rechenzentren</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel Überbrückungszeit:</strong> Nutzbare Akku-Energie 300 Wh, Wirkungsgrad des Wechselrichters 90 %, Last 600 W → t = 300 Wh × 0,9 ÷ 600 W = 0,45 h = <strong>27 min</strong>. In dieser Zeit müssen Server sauber herunterfahren (Shutdown-Software).</div>
        <h5>Datensicherung und Notfallvorsorge</h5>
        <ul>
          <li><strong>3-2-1-Regel:</strong> 3 Kopien der Daten (Original + 2 Sicherungen), auf 2 verschiedenen Medientypen, 1 Kopie außer Haus. Erweiterung <strong>3-2-1-1-0</strong>: zusätzlich 1 Kopie offline bzw. unveränderbar (Schutz vor Ransomware) und 0 Fehler beim Wiederherstellungstest.</li>
          <li><strong>Restore-Tests</strong> regelmäßig durchführen – ein ungetestetes Backup ist kein Backup.</li>
          <li><strong>RPO</strong> (maximal tolerierter Datenverlust) und <strong>RTO</strong> (maximale Wiederanlaufzeit) festlegen – sie bestimmen Backup-Intervall und Technik.</li>
          <li><strong>Notfallkonzept / Disaster Recovery:</strong> Notfallhandbuch, Wiederanlaufpläne, Ersatzhardware, Alarmierungsketten; Orientierung bietet der BSI-Standard 200-4 (Business Continuity Management).</li>
        </ul>
        <div class="callout merke"><strong>Merke:</strong> Monitoring erkennt, Wartung beugt vor, Redundanz überbrückt, Backup stellt wieder her, Notfallplanung organisiert den Ernstfall.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> RAID und Redundanz sind <strong>kein Backup</strong> – versehentlich gelöschte oder verschlüsselte Daten sind auf allen Platten gleichzeitig weg. Bei Reihenschaltung sinkt die Gesamtverfügbarkeit, bei Parallelschaltung steigt sie.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Nennen</em> Sie drei Werte, die per Monitoring überwacht werden sollten, und je einen sinnvollen Schwellwert“ · „<em>Berechnen</em> Sie die Gesamtverfügbarkeit“ · „<em>Unterscheiden</em> Sie präventive und vorausschauende Wartung“.</div>`
    },
    {
      id: "optimierung",
      title: "Serviceprozesse kostenbewusst optimieren: Kosten, Qualität, Kundenzufriedenheit",
      exam: ["AP1", "AP2"],
      summary: "Kosten pro Ticket, Dienstleistungs- und Prozesskosten berechnen, Shift-left und Self-Service bewerten, Qualitätsmanagement (ISO 9001, Testprotokoll), Kundenzufriedenheit (CSAT, NPS) und kontinuierliche Verbesserung mit PDCA.",
      html: `
        <p>Service kostet Geld – vor allem <strong>Personalzeit</strong>. Wer Serviceprozesse optimiert, will dieselbe oder bessere Qualität mit weniger Aufwand erreichen. Grundlage sind Zahlen: Was kostet ein Ticket, wo entstehen die Kosten, was bringt eine Maßnahme?</p>
        <div class="callout formel">Kosten pro Ticket = Gesamtkosten des Supports ÷ Anzahl Tickets<br>
        Prozesskosten je Durchlauf = Bearbeitungszeit × Minutensatz (+ Sachkosten)<br>
        Minutensatz = Stundensatz ÷ 60 (z. B. 54 €/h ÷ 60 = 0,90 €/min)<br>
        Amortisationszeit = Investition ÷ Einsparung pro Periode</div>
        <div class="callout beispiel"><strong>Beispiel Dienstleistungskosten:</strong> Techniker-Einsatz mit Anfahrtspauschale 45 € und 2,5 h à 68 €: 45 € + 2,5 × 68 € = 215 € netto → + 19 % USt. = <strong>255,85 € brutto</strong>. Hotline-Tarif mit 49 € Grundgebühr pro Monat und 0,95 €/min bei 120 Gesprächsminuten: 49 € + 120 × 0,95 € = <strong>163 €</strong>.</div>
        <h5>Hebel zur Kostensenkung</h5>
        <ul>
          <li><strong>Shift-left:</strong> Lösungen auf eine günstigere Ebene verlagern (3rd → 2nd → 1st Level → Self-Service), z. B. durch Wissensdatenbank, Schulung des 1st Levels, erweiterte Rechte.</li>
          <li><strong>Self-Service und Automatisierung:</strong> Passwort-Self-Service, Softwareverteilung, Chatbot, automatische Ticketanlage aus dem Monitoring.</li>
          <li><strong>Standardisierung:</strong> einheitliche Hardware, Images, Standard Changes, Vorlagen und Checklisten.</li>
          <li><strong>Problem Management:</strong> Ursachen beseitigen senkt die Ticketmenge dauerhaft.</li>
          <li><strong>Fernwartung statt Anfahrt</strong>, Sammeltermine vor Ort, Outsourcing/Managed Services, wenn ein Dienstleister günstiger ist (Make-or-buy).</li>
        </ul>
        <div class="callout beispiel"><strong>Beispiel Shift-left:</strong> Die Nordlicht IT GmbH bearbeitet 2.000 Tickets/Monat. Kosten je Ticket: Self-Service 2 €, 1st Level 15 €, 2nd Level 45 €, 3rd Level 120 €.
        <table><thead><tr><th>Ebene</th><th>vorher</th><th>Kosten vorher</th><th>nachher</th><th>Kosten nachher</th></tr></thead><tbody>
          <tr><td>Self-Service</td><td>0</td><td>0 €</td><td>400</td><td>800 €</td></tr>
          <tr><td>1st Level</td><td>1.200</td><td>18.000 €</td><td>1.100</td><td>16.500 €</td></tr>
          <tr><td>2nd Level</td><td>600</td><td>27.000 €</td><td>400</td><td>18.000 €</td></tr>
          <tr><td>3rd Level</td><td>200</td><td>24.000 €</td><td>100</td><td>12.000 €</td></tr>
          <tr><td><strong>Summe</strong></td><td>2.000</td><td><strong>69.000 €</strong></td><td>2.000</td><td><strong>47.300 €</strong></td></tr>
        </tbody></table>
        Einsparung: 69.000 € − 47.300 € = <strong>21.700 € pro Monat</strong> (≈ 31,4 %).</div>
        <div class="callout beispiel"><strong>Beispiel Amortisation:</strong> 300 Passwort-Resets/Monat à 8 min, Minutensatz 0,90 € → 300 × 8 × 0,90 € = 2.160 €/Monat. Ein Self-Service-Portal kostet 9.000 € einmalig und 150 €/Monat und übernimmt 80 % der Fälle. Rest: 60 × 7,20 € = 432 €. Einsparung/Monat: 2.160 € − 432 € − 150 € = 1.578 €. Amortisation: 9.000 € ÷ 1.578 €/Monat ≈ <strong>5,7 Monate</strong> → im 6. Monat hat sich das Portal bezahlt gemacht.</div>
        <h5>Kundenzufriedenheit und Feedback</h5>
        <p>Kosten sparen darf die Qualität nicht verschlechtern. Deshalb wird die Kundensicht regelmäßig erfasst: kurze Umfrage nach Ticketabschluss, jährliche Zufriedenheitsbefragung, Auswertung von Beschwerden und Lob, Service-Review-Gespräche mit dem Kunden, Testanrufe (Mystery Calls).</p>
        <div class="callout formel">CSAT (Customer Satisfaction) = zufriedene Antworten (z. B. 4 oder 5 von 5 Sternen) ÷ alle Antworten × 100<br>
        NPS (Net Promoter Score) = % Promotoren (9–10 Punkte) − % Kritiker (0–6 Punkte); Wertebereich −100 bis +100</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> 200 Rückmeldungen, 150 mit 4 oder 5 Sternen → CSAT = 150 ÷ 200 × 100 = <strong>75 %</strong>.<br>
        Weiterempfehlung: 110 Promotoren, 50 Passive, 40 Kritiker → 55 % − 20 % = <strong>NPS +35</strong>.</div>
        <h5>Qualitätsmanagement</h5>
        <p><strong>Qualität</strong> = Grad, in dem Anforderungen erfüllt werden. <strong>Qualitätssicherung</strong> prüft und testet, z. B. mit einem Testprotokoll nach dem Einrichten eines Arbeitsplatzes (Testfall, erwartetes und tatsächliches Ergebnis, bestanden ja/nein, Datum, Prüfer). <strong>Qualitätsmanagement</strong> steuert alles: Ziele planen, Arbeit lenken (Anweisungen, Checklisten), Ergebnisse sichern, verbessern. Ein QM-System nach <strong>ISO 9001</strong> setzt auf Kunden- und Prozessorientierung, dokumentierte Abläufe und kontinuierliche Verbesserung; eine unabhängige Stelle zertifiziert es per Audit (Zertifikat meist 3 Jahre gültig, jährliche Überwachungsaudits).</p>
        <h5>Kontinuierliche Verbesserung mit PDCA</h5>
        <table><thead><tr><th>Phase</th><th>Beispiel: Erstlösungsquote erhöhen</th></tr></thead><tbody>
          <tr><td><strong>Plan</strong> – Ist-Zustand analysieren, Ziel festlegen</td><td>Ist 70 %, Ziel 75 %; häufigste Weiterleitungen auswerten</td></tr>
          <tr><td><strong>Do</strong> – Maßnahme umsetzen (zunächst im Kleinen)</td><td>10 neue Wissensartikel, Schulung des 1st Levels</td></tr>
          <tr><td><strong>Check</strong> – Soll-Ist-Vergleich</td><td>nach 3 Monaten FCR messen, Abweichung berechnen</td></tr>
          <tr><td><strong>Act</strong> – standardisieren oder nachsteuern</td><td>wirksame Maßnahmen dauerhaft einführen, nächsten Zyklus starten</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Soll-Ist-Vergleich:</strong> Soll 75 %, Ist 70 % → absolute Abweichung −5 Prozentpunkte; relative Abweichung = −5 ÷ 75 × 100 ≈ <strong>−6,7 %</strong>.</div>
        <div class="callout merke"><strong>Merke:</strong> Kostenoptimierung im Service = Tickets vermeiden (Problem Management), Tickets günstiger lösen (Shift-left, Self-Service) und Wirkung messen (KPIs, Zufriedenheit, PDCA).</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Prozentpunkte ≠ Prozent. Und: Eine Maßnahme lohnt sich nur, wenn die <em>laufenden</em> Kosten der neuen Lösung von der Einsparung abgezogen werden.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Berechnen</em> Sie die monatliche Einsparung und die Amortisationszeit“ · „<em>Vergleichen</em> Sie zwei Supportangebote und <em>ermitteln</em> Sie die Menge, ab der sich die Pauschale lohnt“ · „<em>Nennen</em> Sie zwei Methoden, die Kundenzufriedenheit zu messen“.</div>`
    },
    {
      id: "kommunikation",
      title: "Kommunikationsmodelle und Gesprächsführung im Support",
      exam: ["AP1"],
      summary: "Sender-Empfänger-Modell, Vier-Seiten-Modell nach Schulz von Thun, die Axiome nach Watzlawick, aktives Zuhören, Fragetechniken und ein Gesprächsleitfaden für Supportanrufe.",
      html: `
        <p>Im Support entscheidet oft nicht nur die technische Lösung über die Zufriedenheit, sondern <em>wie</em> kommuniziert wird. Kommunikationsmodelle helfen zu verstehen, warum Missverständnisse entstehen – und wie man sie vermeidet.</p>
        <h5>Sender-Empfänger-Modell</h5>
        <pre class="ascii">Sender ──(codiert)──▶ Nachricht über Kanal ──(decodiert)──▶ Empfänger
   ▲                     ⚡ Störungen                          │
   └─────────────────────── Rückmeldung (Feedback) ◀──────────┘</pre>
        <p>Der Sender verschlüsselt seine Gedanken in Zeichen (Sprache, Schrift, Gestik), der Empfänger entschlüsselt sie. Verständigung klappt nur mit einem <strong>gemeinsamen Zeichenvorrat</strong>. Störungen: Lärm, schlechte Verbindung, Fachjargon, Sprachbarrieren, Emotionen. <strong>Feedback</strong> zeigt, ob die Nachricht richtig ankam.</p>
        <p>Kommunikation läuft auf drei Ebenen: <strong>verbal</strong> (Worte), <strong>paraverbal</strong> (Tonfall, Tempo, Lautstärke – am Telefon besonders wichtig) und <strong>nonverbal</strong> (Mimik, Gestik, Körperhaltung).</p>
        <h5>Vier-Seiten-Modell (Schulz von Thun)</h5>
        <p>Jede Nachricht hat vier Seiten – und der Empfänger hört mit „vier Ohren“. Beispiel: Ein Kunde ruft an: „Der Drucker geht <em>schon wieder</em> nicht!“</p>
        <table><thead><tr><th>Seite</th><th>Frage</th><th>Im Beispiel</th></tr></thead><tbody>
          <tr><td>Sachinhalt</td><td>Worüber informiere ich?</td><td>Der Drucker funktioniert nicht, nicht zum ersten Mal.</td></tr>
          <tr><td>Selbstkundgabe (Selbstoffenbarung)</td><td>Was gebe ich von mir preis?</td><td>Ich bin genervt und stehe unter Zeitdruck.</td></tr>
          <tr><td>Beziehung</td><td>Was halte ich von dir, wie stehen wir zueinander?</td><td>Ihr bekommt das nicht dauerhaft hin.</td></tr>
          <tr><td>Appell</td><td>Wozu will ich dich bringen?</td><td>Kümmert euch sofort und endgültig darum!</td></tr>
        </tbody></table>
        <p>Hört der Supporter nur mit dem Beziehungsohr („Der hält uns für unfähig“), reagiert er leicht gekränkt. Professionell ist: Sachinhalt aufnehmen, Selbstkundgabe anerkennen („Ich verstehe, dass das ärgerlich ist“), Appell beantworten.</p>
        <h5>Axiome nach Watzlawick (sinngemäß)</h5>
        <table><thead><tr><th>Axiom</th><th>Bedeutung im Support</th></tr></thead><tbody>
          <tr><td>1. Man kann nicht nicht kommunizieren.</td><td>Auch Schweigen oder eine unbeantwortete Mail sendet eine Botschaft („Die kümmern sich nicht“).</td></tr>
          <tr><td>2. Jede Kommunikation hat einen Inhalts- und einen Beziehungsaspekt; der Beziehungsaspekt bestimmt, wie der Inhalt verstanden wird.</td><td>Eine korrekte Lösung, schnippisch vorgetragen, kommt schlecht an.</td></tr>
          <tr><td>3. Beide Seiten gliedern den Ablauf unterschiedlich (Interpunktion).</td><td>Kunde: „Ich schimpfe, weil ihr nicht helft.“ – Support: „Wir helfen zögerlich, weil er schimpft.“</td></tr>
          <tr><td>4. Kommunikation ist digital (Worte) und analog (Tonfall, Körpersprache).</td><td>Das „Kein Problem!“ mit genervtem Seufzer wirkt widersprüchlich.</td></tr>
          <tr><td>5. Kommunikation ist symmetrisch (gleichrangig) oder komplementär (ergänzend, z. B. Experte – Laie).</td><td>Den Kunden nicht von oben herab behandeln, auch wenn man mehr weiß.</td></tr>
        </tbody></table>
        <p><strong>Eisbergmodell:</strong> Nur ein kleiner Teil (Sachebene: Fakten, Zahlen) ist sichtbar; der größere Teil unter der Wasseroberfläche (Gefühle, Erwartungen, Ängste) steuert das Gespräch maßgeblich.</p>
        <h5>Aktives Zuhören, Ich-Botschaften und Fragetechniken</h5>
        <ul>
          <li><strong>Aktives Zuhören:</strong> Aufmerksamkeit zeigen („mhm“, „verstehe“), Paraphrasieren („Sie meinen also, dass …“), Gefühle ansprechen, Nachfragen, Zusammenfassen.</li>
          <li><strong>Ich-Botschaft statt Du-Botschaft:</strong> „Ich kann den Fehler noch nicht nachvollziehen – können Sie mir die Meldung vorlesen?“ statt „Sie beschreiben das falsch.“</li>
        </ul>
        <table><thead><tr><th>Frageart</th><th>Zweck</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td>offene Frage (W-Frage)</td><td>Informationen sammeln, Kunde erzählt</td><td>„Was genau passiert, wenn Sie drucken?“</td></tr>
          <tr><td>geschlossene Frage</td><td>Fakten bestätigen, Antwort ja/nein</td><td>„Leuchtet die Netzwerk-LED?“</td></tr>
          <tr><td>Alternativfrage</td><td>Auswahl anbieten, Entscheidung herbeiführen</td><td>„Passt Ihnen der Termin heute 14 Uhr oder morgen 9 Uhr?“</td></tr>
          <tr><td>Kontrollfrage</td><td>Verständnis sichern</td><td>„Habe ich richtig verstanden, dass nur Ihr PC betroffen ist?“</td></tr>
          <tr><td>Suggestivfrage (vermeiden!)</td><td>legt Antwort in den Mund</td><td>„Sie haben den Rechner doch sicher neu gestartet, oder?“</td></tr>
        </tbody></table>
        <h5>Gesprächsleitfaden für Supportanrufe</h5>
        <ol>
          <li>Begrüßung mit Firma und Namen, freundlicher Ton</li>
          <li>Anrufer identifizieren (Name, Abteilung, Rückrufnummer, Gerätenummer)</li>
          <li>Anliegen mit offenen, dann geschlossenen Fragen klären, aktiv zuhören</li>
          <li>zusammenfassen und bestätigen lassen, Ticket anlegen, Ticketnummer nennen</li>
          <li>lösen oder nächsten Schritt und realistische Zeit ankündigen</li>
          <li>freundlich verabschieden, Ticket vollständig dokumentieren</li>
        </ol>
        <p><strong>Englisch im Support:</strong> „Could you please describe the error message?“ · „I'm sorry for the inconvenience.“ · „I'll escalate this to our second-level team.“ · „Your ticket number is …“</p>
        <div class="callout merke"><strong>Merke:</strong> Beziehung vor Inhalt – erst den Menschen „abholen“, dann das technische Problem lösen. Offene Fragen öffnen das Gespräch, geschlossene Fragen grenzen den Fehler ein.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Analysieren</em> Sie die Aussage des Kunden mit dem Vier-Seiten-Modell“ · „<em>Formulieren</em> Sie zwei offene und zwei geschlossene Fragen zur Fehlereingrenzung“ · „<em>Formulieren</em> Sie eine kundenorientierte E-Mail“ (Aufbau, CC/BCC und Netiquette im Modul Kommunikation). Hinweis: Eisbergmodell, aktives Zuhören und die Axiome nach Watzlawick nennt der AP1-Katalog seit 2025 nicht mehr ausdrücklich – sie bleiben Klassenarbeitsstoff und helfen dir im Kundengespräch und im Fachgespräch der AP2.</div>`
    },
    {
      id: "konflikte",
      title: "Persönlichkeitstypen, Konflikte und Deeskalation",
      exam: ["AP1"],
      summary: "Kundentypen mit dem DISG-Modell erkennen, Konfliktarten und Eskalationsstufen nach Glasl einordnen, Deeskalationstechniken und Beschwerdemanagement anwenden.",
      html: `
        <p>Im Support treffen Menschen oft in Stresssituationen aufeinander: Der Kunde kann nicht arbeiten, der Supporter hat zehn offene Tickets. Wer Persönlichkeitstypen und Konfliktmuster kennt, kann sein Verhalten anpassen und Gespräche beruhigen, statt sie anzuheizen.</p>
        <h5>Das DISG-Modell</h5>
        <p>Das DISG-Modell (nach W. M. Marston) ordnet Verhalten auf zwei Achsen ein: <strong>extrovertiert/aktiv vs. introvertiert/zurückhaltend</strong> und <strong>aufgabenorientiert vs. menschenorientiert</strong>. Daraus ergeben sich vier Grundtypen:</p>
        <table><thead><tr><th>Typ</th><th>Merkmale</th><th>So gehst du im Support darauf ein</th></tr></thead><tbody>
          <tr><td><strong>D – dominant</strong> (aktiv, aufgabenorientiert)</td><td>direkt, entschlossen, ergebnisorientiert, ungeduldig</td><td>kurz und klar, gleich zur Lösung, Optionen zur Entscheidung anbieten, nicht ausschweifen</td></tr>
          <tr><td><strong>I – initiativ</strong> (aktiv, menschenorientiert)</td><td>kontaktfreudig, begeisterungsfähig, gesprächig, spontan</td><td>freundlich und persönlich, Raum zum Reden lassen, Absprachen schriftlich festhalten</td></tr>
          <tr><td><strong>S – stetig</strong> (zurückhaltend, menschenorientiert)</td><td>hilfsbereit, geduldig, harmoniebedürftig, sicherheitsorientiert</td><td>ruhig, geduldig, Schritt für Schritt anleiten, Sicherheit geben, keinen Druck machen</td></tr>
          <tr><td><strong>G – gewissenhaft</strong> (zurückhaltend, aufgabenorientiert)</td><td>analytisch, genau, qualitätsbewusst, kritisch</td><td>Fakten, Details und Belege liefern, präzise dokumentieren, Fragen gründlich beantworten</td></tr>
        </tbody></table>
        <div class="callout achtung"><strong>Achtung:</strong> Das DISG-Modell beschreibt <em>bevorzugtes Verhalten</em>, keine festen Charaktere, und ist wissenschaftlich umstritten. Niemand ist ein „reiner“ Typ. Es ist ein Hilfsmittel, um die eigene Kommunikation anzupassen – nicht um Menschen in Schubladen zu stecken.</div>
        <h5>Konfliktarten</h5>
        <ul>
          <li><strong>Sachkonflikt:</strong> unterschiedliche Meinungen zur Sache (Welche Lösung ist die richtige?)</li>
          <li><strong>Zielkonflikt:</strong> unvereinbare Ziele (schnell und billig vs. gründlich und sicher)</li>
          <li><strong>Verteilungskonflikt:</strong> Streit um knappe Ressourcen (Techniker, Budget, Termine)</li>
          <li><strong>Beziehungskonflikt:</strong> Antipathie, verletzte Gefühle, fehlende Wertschätzung</li>
          <li><strong>Rollenkonflikt:</strong> widersprüchliche Erwartungen an eine Rolle (Kunde erwartet Sofortservice, Chef erwartet Einhaltung der Priorisierung)</li>
          <li><strong>Wertekonflikt:</strong> unterschiedliche Grundüberzeugungen</li>
        </ul>
        <p>Im Support häufig: <strong>Erwartungskonflikte</strong> – der Kunde erwartet mehr, als im SLA vereinbart ist.</p>
        <h5>Eskalationsstufen nach Glasl</h5>
        <table><thead><tr><th>Ebene</th><th>Stufen</th></tr></thead><tbody>
          <tr><td>win-win (beide können gewinnen)</td><td>1 Verhärtung · 2 Debatte, Polemik · 3 Taten statt Worte</td></tr>
          <tr><td>win-lose (einer gewinnt, einer verliert)</td><td>4 Images und Koalitionen · 5 Gesichtsverlust · 6 Drohstrategien</td></tr>
          <tr><td>lose-lose (beide verlieren)</td><td>7 begrenzte Vernichtungsschläge · 8 Zersplitterung · 9 gemeinsam in den Abgrund</td></tr>
        </tbody></table>
        <p>Je früher ein Konflikt erkannt wird, desto leichter lässt er sich selbst lösen. Ab Stufe 4 hilft meist nur noch ein Dritter (Vorgesetzte, Moderation), ab Stufe 7 oft nur noch Machteingriff.</p>
        <h5>Deeskalation im Kundengespräch</h5>
        <ol>
          <li><strong>Ruhe bewahren:</strong> nicht persönlich nehmen, langsam und ruhig sprechen.</li>
          <li><strong>Ausreden lassen und aktiv zuhören:</strong> Der Ärger muss erst „raus“.</li>
          <li><strong>Verständnis zeigen:</strong> „Ich verstehe, dass der Ausfall Sie gerade stark behindert.“ (Verständnis heißt nicht, Schuld einzugestehen.)</li>
          <li><strong>Auf die Sachebene lenken:</strong> Fakten klären, zusammenfassen.</li>
          <li><strong>Lösung oder nächsten Schritt anbieten</strong> und verbindlich zusagen, was realistisch ist.</li>
          <li><strong>Nachfassen:</strong> Rückruf halten, Ergebnis bestätigen lassen.</li>
        </ol>
        <table><thead><tr><th>eskalierend</th><th>deeskalierend</th></tr></thead><tbody>
          <tr><td>„Da sind Sie nicht der Einzige.“</td><td>„Danke, dass Sie sich melden – ich kümmere mich jetzt darum.“</td></tr>
          <tr><td>„Das ist nicht meine Schuld.“</td><td>„Ich verstehe Ihren Ärger. Lassen Sie uns gemeinsam schauen …“</td></tr>
          <tr><td>„Beruhigen Sie sich erst mal!“</td><td>„Ich möchte Ihnen helfen – dafür brauche ich noch zwei Angaben.“</td></tr>
          <tr><td>„Das geht nicht.“</td><td>„Das ist so leider nicht möglich, ich kann Ihnen aber … anbieten.“</td></tr>
        </tbody></table>
        <p>Hilfreich ist auch das <strong>Harvard-Konzept</strong>: Mensch und Problem getrennt behandeln, Interessen statt Positionen klären, mehrere Optionen entwickeln, neutrale Kriterien (z. B. SLA) nutzen. Bei Beleidigungen oder Drohungen darf man Grenzen setzen („So kann ich das Gespräch nicht fortführen“) und hierarchisch eskalieren.</p>
        <h5>Beschwerdemanagement</h5>
        <p>Eine Beschwerde ist eine Chance: Der Kunde gibt dem Unternehmen die Möglichkeit, es besser zu machen. Ablauf: Beschwerde annehmen und bedanken → Sachverhalt klären → Lösung anbieten und umsetzen → nachfassen → auswerten (Ursachen im Problem Management oder PDCA beseitigen). Gut gelöste Beschwerden können die Kundenbindung sogar stärken.</p>
        <div class="callout merke"><strong>Merke:</strong> Erst die Emotion, dann die Sache. Wer zuhört, Verständnis zeigt und verbindliche nächste Schritte nennt, nimmt dem Konflikt die Energie.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Beschreiben</em> Sie drei Maßnahmen zur Deeskalation“ · „<em>Formulieren</em> Sie die Aussage in eine Ich-Botschaft um“ · „<em>Ordnen</em> Sie das Verhalten des Kunden einem DISG-Typ <em>zu</em> und <em>leiten</em> Sie eine passende Gesprächsstrategie <em>ab</em>“.</div>`
    },
    {
      id: "epk",
      title: "Ereignisgesteuerte Prozessketten (EPK/eEPK)",
      exam: ["AP1", "AP2"],
      summary: "Elemente, Konnektoren und Modellierungsregeln der EPK sowie die Erweiterung zur eEPK mit Organisationseinheiten und Informationsobjekten – am Beispiel eines Incident-Prozesses.",
      html: `
        <p>Die <strong>ereignisgesteuerte Prozesskette (EPK)</strong> stellt Geschäftsprozesse grafisch dar: Welche Tätigkeiten laufen in welcher Reihenfolge ab, welche Zustände lösen sie aus und wo verzweigt der Ablauf? Die <strong>erweiterte EPK (eEPK)</strong> ergänzt, <em>wer</em> etwas tut und <em>welche Informationen</em> benötigt werden. Einsatz: Prozesse dokumentieren, Schwachstellen finden, Software (z. B. Ticketsystem) einführen.</p>
        <h5>Elemente</h5>
        <table><thead><tr><th>Symbol</th><th>Element</th><th>Bedeutung / Beschriftung</th></tr></thead><tbody>
          <tr><td>Sechseck</td><td><strong>Ereignis</strong></td><td>eingetretener Zustand, der eine Funktion auslöst oder ihr Ergebnis ist; passiv formuliert: „Ticket ist erfasst“</td></tr>
          <tr><td>Rechteck mit abgerundeten Ecken</td><td><strong>Funktion</strong></td><td>Tätigkeit, die einen Zustand in einen neuen überführt; aktiv: „Ticket erfassen“</td></tr>
          <tr><td>Kreis mit ∧ / ∨ / XOR</td><td><strong>Konnektor</strong></td><td>verzweigt oder führt den Kontrollfluss zusammen</td></tr>
          <tr><td>Pfeil</td><td><strong>Kontrollfluss</strong></td><td>zeitlich-logische Reihenfolge</td></tr>
          <tr><td>Ellipse mit senkrechtem Strich</td><td><strong>Organisationseinheit</strong> (eEPK)</td><td>zuständige Stelle/Rolle, z. B. Service Desk</td></tr>
          <tr><td>Rechteck</td><td><strong>Informationsobjekt</strong> (eEPK)</td><td>Daten, Dokumente, Systeme, z. B. Ticketsystem, KEDB</td></tr>
          <tr><td>Linie / Pfeil zum Objekt</td><td><strong>Zuordnung / Informationsfluss</strong></td><td>ordnet Organisationseinheit zu; Pfeilrichtung zeigt Lesen oder Schreiben von Daten</td></tr>
          <tr><td>Funktion auf Ereignis-Sechseck</td><td><strong>Prozesswegweiser</strong></td><td>Schnittstelle zu einem vor- oder nachgelagerten Prozess</td></tr>
        </tbody></table>
        <h5>Konnektoren</h5>
        <table><thead><tr><th>Konnektor</th><th>als Verzweigung (nach einer Funktion)</th><th>als Zusammenführung</th></tr></thead><tbody>
          <tr><td><strong>UND (∧)</strong></td><td>alle folgenden Ereignisse treten ein bzw. alle Pfade laufen parallel</td><td>weiter erst, wenn <em>alle</em> Pfade abgeschlossen sind</td></tr>
          <tr><td><strong>ODER (∨)</strong></td><td>mindestens eines, evtl. mehrere Ereignisse treten ein</td><td>weiter, wenn mindestens ein Pfad abgeschlossen ist</td></tr>
          <tr><td><strong>XOR (exklusives Oder)</strong></td><td>genau eines von mehreren Ereignissen tritt ein (Entscheidung)</td><td>genau ein Pfad kommt an</td></tr>
        </tbody></table>
        <h5>Modellierungsregeln</h5>
        <ul>
          <li>Eine EPK <strong>beginnt und endet mit Ereignissen</strong> (Start- und Endereignis).</li>
          <li><strong>Ereignisse und Funktionen wechseln sich ab</strong> – nie zwei Ereignisse oder zwei Funktionen direkt hintereinander (auch nicht über einen Konnektor hinweg).</li>
          <li><strong>Nach einem Ereignis darf kein ODER- oder XOR-Split folgen</strong>, denn Ereignisse können nicht entscheiden. Entscheidungen trifft immer eine Funktion; ein UND-Split nach einem Ereignis ist erlaubt.</li>
          <li>Funktionen und Ereignisse haben genau <strong>eine</strong> eingehende und <strong>eine</strong> ausgehende Kante (Start- bzw. Endereignisse nur eine); Verzweigungen nur über Konnektoren.</li>
          <li>Ein geöffneter Konnektor wird mit dem <strong>gleichen Typ</strong> wieder geschlossen.</li>
        </ul>
        <h5>Beispiel: Incident-Bearbeitung als eEPK</h5>
        <pre class="ascii">          ⬡ Störungsmeldung ist eingegangen
                        │
 (|Service Desk)──[ Störung erfassen ]──▭ Ticketsystem
                        │
          ⬡ Ticket ist erfasst
                        │
 (|Service Desk)──[ Störung analysieren ]──▭ KEDB
                        │
                      (XOR)
             ┌──────────┴──────────┐
  ⬡ Lösung ist bekannt   ⬡ Lösung ist unbekannt
             │                     │
   [ Störung beheben ]   [ an 2nd Level eskalieren ]
             │                     │
             │           ⬡ Ticket ist eskaliert
             │                     │
             │           [ Störung beheben ]──(|2nd Level)
             └──────────┬──────────┘
                      (XOR)
                        │
          ⬡ Störung ist behoben
                        │
 (|Service Desk)──[ Ticket abschließen ]──▭ Ticketsystem
                        │
          ⬡ Ticket ist geschlossen

Legende: ⬡ Ereignis · [ ] Funktion · (XOR) Konnektor
         (|…) Organisationseinheit · ▭ Informationsobjekt</pre>
        <div class="callout tipp"><strong>Tipp zur Beschriftung:</strong> Ereignis = Substantiv + Partizip („Auftrag ist eingegangen“, „Artikel sind verfügbar“), Funktion = Substantiv + Verb im Infinitiv („Verfügbarkeit prüfen“). Bei XOR-Verzweigungen formulieren die Ereignisse die Alternativen („… verfügbar“ / „… nicht verfügbar“).</div>
        <p><strong>Vorteile:</strong> leicht verständlich, auch für Fachabteilungen; Medienbrüche, Doppelarbeit und Schwachstellen werden sichtbar; gute Grundlage für Prozessoptimierung und Softwareeinführung. <strong>Nachteile:</strong> große Prozesse werden schnell unübersichtlich, keine Zeit- und Mengenangaben, Interaktion zwischen Unternehmen schlechter darstellbar als in BPMN.</p>
        <div class="callout achtung"><strong>Typische Fehler:</strong> XOR direkt nach einem Ereignis · zwei Funktionen ohne Ereignis dazwischen · fehlendes Start- oder Endereignis · Verzweigung mit XOR, Zusammenführung mit UND (dann wartet der Prozess ewig auf den nicht gewählten Pfad).</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Ergänzen</em> Sie die unvollständige EPK anhand des Textes“ · „<em>Identifizieren</em> Sie drei Modellierungsfehler“ · „<em>Erstellen</em> Sie eine eEPK mit Organisationseinheiten und Informationsobjekten“. Die Notation steht im Belegsatz – die Regeln musst du können.</div>`
    },
    {
      id: "bpmn-uml",
      title: "BPMN 2.0 und UML-Use-Case-Diagramm",
      exam: ["AP1", "AP2"],
      summary: "Prozesse mit BPMN 2.0 (Pools, Lanes, Events, Tasks, Gateways, Sequenz- und Nachrichtenfluss) modellieren, EPK, BPMN und UML-Aktivitätsdiagramm vergleichen und Anforderungen an ein System als UML-Anwendungsfalldiagramm darstellen.",
      html: `
        <h5>BPMN 2.0 – Business Process Model and Notation</h5>
        <p>BPMN ist ein internationaler Standard der OMG (auch ISO/IEC 19510) zur grafischen Darstellung von Geschäftsprozessen. Stärke: Die <strong>Zusammenarbeit mehrerer Beteiligter</strong> (z. B. Kunde und IT-Dienstleister) und der Austausch von Nachrichten lassen sich klar zeigen.</p>
        <table><thead><tr><th>Element</th><th>Symbol</th><th>Bedeutung</th></tr></thead><tbody>
          <tr><td>Pool</td><td>großes Rechteck, links beschriftet</td><td>ein Prozessbeteiligter (Organisation), z. B. „Kunde“, „Nordlicht IT GmbH“</td></tr>
          <tr><td>Lane</td><td>Streifen innerhalb eines Pools</td><td>Rolle oder Abteilung, z. B. „Service Desk“, „2nd Level“</td></tr>
          <tr><td>Startereignis</td><td>Kreis mit dünnem Rand</td><td>Beginn des Prozesses</td></tr>
          <tr><td>Zwischenereignis</td><td>Kreis mit doppeltem Rand</td><td>tritt während des Prozesses ein (z. B. Warten auf Nachricht, Frist)</td></tr>
          <tr><td>Endereignis</td><td>Kreis mit dickem Rand</td><td>Ende des Prozesses bzw. Pfades</td></tr>
          <tr><td>Ereignistypen</td><td>Symbol im Kreis</td><td>Nachricht (Briefumschlag), Timer (Uhr), Fehler/Ausnahme (Blitz)</td></tr>
          <tr><td>Task (Aufgabe)</td><td>Rechteck mit abgerundeten Ecken</td><td>einzelne Tätigkeit; mit „+“ unten: zugeklappter Teilprozess</td></tr>
          <tr><td>Exklusives Gateway (XOR)</td><td>Raute mit „X“</td><td>genau ein Pfad wird gewählt</td></tr>
          <tr><td>Paralleles Gateway (AND)</td><td>Raute mit „+“</td><td>alle Pfade laufen parallel bzw. werden synchronisiert</td></tr>
          <tr><td>Inklusives Gateway (OR)</td><td>Raute mit Kreis</td><td>ein oder mehrere Pfade</td></tr>
          <tr><td>Sequenzfluss</td><td>durchgezogene Linie mit Pfeil</td><td>Reihenfolge <strong>innerhalb</strong> eines Pools</td></tr>
          <tr><td>Nachrichtenfluss</td><td>gestrichelte Linie mit Kreis am Anfang und offenem Pfeil</td><td>Kommunikation <strong>zwischen</strong> Pools</td></tr>
          <tr><td>Datenobjekt</td><td>Blatt mit umgeknickter Ecke</td><td>benötigte oder erzeugte Information, z. B. „Ticket“</td></tr>
        </tbody></table>
        <pre class="ascii">┌ Pool: Kunde ───────────────────────────────────────────────────┐
│ (○)→[Störung melden]─────────────────────────→(◎)→[prüfen]→(●) │
└─────────────┆──────────────────────────────────▲───────────────┘
              ┆ Störungsmeldung                  ┆ Lösungsinfo
┌──────────┬──▼──────────────────────────────────┆───────────────┐
│ Service  │ (✉)→[erfassen]→&lt;X&gt;─ja→[lösen]→[informieren]→(●)     │
│ Desk     │                 │nein               ▲               │
├──────────┼─────────────────▼───────────────────│───────────────┤
│ 2nd Level│             [analysieren, lösen]────┘               │
└──────────┴─────────────────────────── Pool: Nordlicht IT GmbH ─┘
(○) Start · (◎) Zwischenereignis (Nachricht) · (●) Ende · (✉) Nachrichten-Startereignis
&lt;X&gt; XOR-Gateway „Lösung bekannt?“ · → Sequenzfluss · ┆ Nachrichtenfluss</pre>
        <div class="callout achtung"><strong>Regeln und typische Fehler:</strong> Sequenzfluss darf <strong>keine Pool-Grenze</strong> überschreiten – zwischen Pools nur Nachrichtenfluss. Gateways entscheiden nicht selbst: Die Entscheidung trifft die Aufgabe davor; die ausgehenden Pfade werden beschriftet („ja“/„nein“). Jeder Pfad sollte sichtbar mit einem Endereignis abschließen.</div>
        <h5>Drei Notationen im Vergleich</h5>
        <table><thead><tr><th>Kriterium</th><th>EPK</th><th>BPMN 2.0</th><th>UML-Aktivitätsdiagramm</th></tr></thead><tbody>
          <tr><td>Aufbau</td><td>Ereignisse und Funktionen wechseln sich ab</td><td>Aufgaben im Fluss, Ereignisse nur wo nötig</td><td>Aktionen (abgerundete Rechtecke) zwischen Startknoten (gefüllter Kreis) und Endknoten (Kreis mit Punkt)</td></tr>
          <tr><td>Entscheidung</td><td>XOR-Konnektor nach einer Funktion, Folgeereignisse nennen die Alternativen</td><td>exklusives Gateway (Raute mit X), Pfade beschriftet</td><td>Entscheidungsknoten (Raute), Bedingungen in eckigen Klammern, z. B. [Code gültig]</td></tr>
          <tr><td>Parallelität</td><td>UND-Konnektor (∧)</td><td>paralleles Gateway (Raute mit +)</td><td>Gabelung und Synchronisation (dicker Balken)</td></tr>
          <tr><td>Zuständigkeiten</td><td>Organisationseinheiten an Funktionen (eEPK)</td><td>Pools und Lanes</td><td>Schwimmbahnen (Partitionen)</td></tr>
          <tr><td>Mehrere Unternehmen</td><td>kaum darstellbar</td><td>mehrere Pools mit Nachrichtenfluss</td><td>nur eingeschränkt (Signale senden/empfangen)</td></tr>
          <tr><td>Verbreitung</td><td>v. a. deutschsprachig (ARIS)</td><td>internationaler Standard (OMG, ISO/IEC 19510)</td><td>Teil der UML (OMG), v. a. in der Softwareentwicklung</td></tr>
        </tbody></table>
        <p>Das UML-Aktivitätsdiagramm wurde in der AP1 schon zum Zeichnen verlangt (z. B. Ablauf „Passwort zurücksetzen“ im Self-Service-Portal). Wer EPK oder BPMN sicher beherrscht, überträgt den Ablauf mit dieser Tabelle schnell; ausführlich übst du das Aktivitätsdiagramm im Modul LF 5.</p>
        <h5>UML-Anwendungsfalldiagramm (Use-Case-Diagramm)</h5>
        <p>Das Use-Case-Diagramm zeigt, <strong>was</strong> ein System aus Sicht seiner Nutzer leisten soll – nicht, <em>wie</em> und in welcher Reihenfolge. Es eignet sich, um Anforderungen (z. B. an ein Ticketportal) mit dem Kunden abzustimmen.</p>
        <ul>
          <li><strong>Systemgrenze:</strong> Rechteck mit dem Namen des Systems.</li>
          <li><strong>Akteur:</strong> Strichmännchen <em>außerhalb</em> der Systemgrenze – eine Rolle (Person) oder ein externes System, z. B. „Anwender“, „Monitoring-System“.</li>
          <li><strong>Anwendungsfall:</strong> Ellipse <em>innerhalb</em> der Systemgrenze, benannt mit Substantiv + Verb („Störung melden“).</li>
          <li><strong>Assoziation:</strong> durchgezogene Linie zwischen Akteur und Anwendungsfall.</li>
          <li><strong>«include»:</strong> gestrichelter Pfeil vom Basis-Anwendungsfall zum eingebundenen – wird <em>immer</em> mit ausgeführt.</li>
          <li><strong>«extend»:</strong> gestrichelter Pfeil vom erweiternden zum Basis-Anwendungsfall – wird nur <em>unter einer Bedingung</em> ausgeführt (Extension Point).</li>
          <li><strong>Generalisierung:</strong> Linie mit hohlem Dreieck zum allgemeineren Akteur bzw. Anwendungsfall (Vererbung).</li>
        </ul>
        <pre class="ascii">                 ┌──────────── Ticketportal ─────────────────────────┐
  O              │                                                   │
 /|\\ Anwender ───┼── ( Störung melden ) ┄┄«include»┄┄▶ ( Anmelden )   │
 / \\             │                                        ▲          │
       └─────────┼── ( Ticketstatus abfragen ) ┄«include»┄┘          │
  O              │                                                   │
 /|\\ Service- ───┼── ( Ticket bearbeiten )                           │
 / \\ Desk-MA     │           ▲                                       │
  △              │       «extend» [Lösung im 1st Level nicht möglich]│
  │              │           ┆                                       │
  O              │     ( Ticket eskalieren )                         │
 /|\\ 2nd-Level ──┼── ( Known Error erfassen )                        │
 / \\ Techniker   └───────────────────────────────────────────────────┘</pre>
        <p>Per Generalisierung (△) erbt der 2nd-Level-Techniker alle Anwendungsfälle des Service-Desk-MA.</p>
        <div class="callout merke"><strong>Merke:</strong> «include» = muss, Pfeil zeigt zum eingebundenen Fall. «extend» = kann, Pfeil zeigt zum Basisfall. Akteure stehen immer außerhalb der Systemgrenze.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Ergänzen</em> Sie das Use-Case-Diagramm um die fehlenden Akteure und Beziehungen“ · „<em>Erläutern</em> Sie den Unterschied zwischen «include» und «extend»“ · „<em>Modellieren</em> Sie den Prozess als BPMN-Diagramm mit zwei Lanes“.</div>`
    },
    {
      id: "netzplan-gantt",
      title: "Netzplantechnik und Gantt-Diagramm",
      exam: ["AP1"],
      summary: "Vorgangsknotennetzplan vollständig berechnen (FAZ, FEZ, SAZ, SEZ, GP, FP), kritischen Pfad bestimmen, Terminprobleme lösen und ein Gantt-Diagramm erstellen.",
      html: `
        <p>Service-Projekte (z. B. Einführung eines Ticketsystems, Rollout neuer Arbeitsplätze) müssen terminlich geplant werden. Der <strong>Netzplan</strong> zeigt Abhängigkeiten und Pufferzeiten, das <strong>Gantt-Diagramm</strong> den zeitlichen Ablauf als Balken.</p>
        <h5>Aufbau eines Vorgangsknotens (wie im IHK-Belegsatz)</h5>
        <pre class="ascii">FAZ                      FEZ
┌─────────┬──────────────────┐
│ Vorgang │ Beschreibung     │
├─────────┼────────┬─────────┤
│ Dauer   │   GP   │   FP    │
└─────────┴────────┴─────────┘
SAZ                      SEZ</pre>
        <p>FAZ/FEZ = frühester Anfangs-/Endzeitpunkt, SAZ/SEZ = spätester Anfangs-/Endzeitpunkt, GP = Gesamtpuffer, FP = freier Puffer.</p>
        <div class="callout formel"><strong>Vorwärtsrechnung:</strong> FAZ (Startvorgang) = 0 · FEZ = FAZ + Dauer · FAZ = <strong>größter</strong> FEZ aller Vorgänger<br>
        <strong>Rückwärtsrechnung:</strong> SEZ (Endvorgang) = FEZ (Endvorgang) · SAZ = SEZ − Dauer · SEZ = <strong>kleinster</strong> SAZ aller Nachfolger<br>
        <strong>Puffer:</strong> GP = SAZ − FAZ = SEZ − FEZ · FP = kleinster FAZ der Nachfolger − eigener FEZ<br>
        <strong>Kritischer Pfad:</strong> alle Vorgänge mit GP = 0</div>
        <h5>Durchgerechnetes Beispiel: Einführung eines Ticketsystems</h5>
        <table><thead><tr><th>Vorgang</th><th>Beschreibung</th><th>Dauer (Tage)</th><th>Vorgänger</th></tr></thead><tbody>
          <tr><td>A</td><td>Anforderungen aufnehmen</td><td>3</td><td>–</td></tr>
          <tr><td>B</td><td>Ticketsystem auswählen</td><td>4</td><td>A</td></tr>
          <tr><td>C</td><td>Server bereitstellen</td><td>2</td><td>A</td></tr>
          <tr><td>D</td><td>Software installieren und konfigurieren</td><td>5</td><td>B, C</td></tr>
          <tr><td>E</td><td>Wissensdatenbank befüllen</td><td>6</td><td>B</td></tr>
          <tr><td>F</td><td>Mitarbeitende schulen</td><td>3</td><td>D</td></tr>
          <tr><td>G</td><td>Testbetrieb</td><td>4</td><td>D, E</td></tr>
          <tr><td>H</td><td>Go-live</td><td>1</td><td>F, G</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Vorwärtsrechnung:</strong> A: 0 → 3 · B: 3 → 7 · C: 3 → 5 · D: FAZ = max(7; 5) = 7 → 12 · E: 7 → 13 · F: 12 → 15 · G: FAZ = max(12; 13) = 13 → 17 · H: FAZ = max(15; 17) = 17 → 18. <strong>Projektdauer: 18 Tage.</strong><br>
        <strong>Rückwärtsrechnung:</strong> H: SEZ 18, SAZ 17 · G: 17 / 13 · F: 17 / 14 · E: SEZ = SAZ(G) = 13, SAZ 7 · D: SEZ = min(14; 13) = 13, SAZ 8 · C: SEZ = SAZ(D) = 8, SAZ 6 · B: SEZ = min(8; 7) = 7, SAZ 3 · A: SEZ = min(3; 6) = 3, SAZ 0.
        <table><thead><tr><th>Vorgang</th><th>FAZ</th><th>FEZ</th><th>SAZ</th><th>SEZ</th><th>GP</th><th>FP</th></tr></thead><tbody>
          <tr><td>A</td><td>0</td><td>3</td><td>0</td><td>3</td><td>0</td><td>0</td></tr>
          <tr><td>B</td><td>3</td><td>7</td><td>3</td><td>7</td><td>0</td><td>0</td></tr>
          <tr><td>C</td><td>3</td><td>5</td><td>6</td><td>8</td><td>3</td><td>2</td></tr>
          <tr><td>D</td><td>7</td><td>12</td><td>8</td><td>13</td><td>1</td><td>0</td></tr>
          <tr><td>E</td><td>7</td><td>13</td><td>7</td><td>13</td><td>0</td><td>0</td></tr>
          <tr><td>F</td><td>12</td><td>15</td><td>14</td><td>17</td><td>2</td><td>2</td></tr>
          <tr><td>G</td><td>13</td><td>17</td><td>13</td><td>17</td><td>0</td><td>0</td></tr>
          <tr><td>H</td><td>17</td><td>18</td><td>17</td><td>18</td><td>0</td><td>0</td></tr>
        </tbody></table>
        <strong>Kritischer Pfad: A → B → E → G → H</strong> (3 + 4 + 6 + 4 + 1 = 18 Tage).<br>
        Deutung: C darf sich um 2 Tage verschieben, ohne dass sich ein Nachfolger verschiebt (FP), und um 3 Tage, ohne dass sich das Projektende verschiebt (GP). D hat GP 1, aber FP 0: Jede Verzögerung verschiebt den Start von F, das Projektende aber erst ab 2 Tagen.</div>
        <div class="callout achtung"><strong>Prüfungsfallen:</strong> Bei mehreren Vorgängern den <em>größten</em> FEZ nehmen, bei mehreren Nachfolgern den <em>kleinsten</em> SAZ. GP und FP nicht verwechseln (FP ≤ GP). Beginnt die Aufgabe mit „Tag 1“ statt 0, die dort vorgegebene Zählweise übernehmen. In der AP1 Frühjahr 2026 mussten Fehler in einem fertigen Netzplan gefunden werden – rechne deshalb jeden Wert nach.</div>
        <p><strong>Termine im Kalender:</strong> Die Projektdauer in Arbeitstagen wird auf den Kalender übertragen; Wochenenden und Feiertage (in Schleswig-Holstein z. B. der Reformationstag am 31.10.) werden übersprungen. Beispiel: Start Montag, 05.10.2026, 18 Arbeitstage → Ende <strong>Mittwoch, 28.10.2026</strong>. Aus einem festen Endtermin ergibt sich rückwärts der späteste Starttermin.</p>
        <h5>Terminprobleme lösen</h5>
        <ul>
          <li>Vorgänge auf dem kritischen Pfad verkürzen: mehr Personal, Überstunden, externe Unterstützung</li>
          <li>Vorgänge parallelisieren oder überlappen lassen (Abhängigkeiten prüfen)</li>
          <li>Puffer nicht kritischer Vorgänge nutzen, um Ressourcen umzuverteilen</li>
          <li>Umfang reduzieren oder Termine mit dem Kunden neu verhandeln; Meilensteine setzen und regelmäßig Soll-Ist vergleichen</li>
        </ul>
        <h5>Gantt-Diagramm (Balkendiagramm)</h5>
        <p>Jeder Vorgang ist ein Balken auf einer Zeitachse; Länge = Dauer, Lage = Start und Ende. Meilensteine (◆) markieren wichtige Termine ohne Dauer. Der kritische Pfad wird oft farbig hervorgehoben.</p>
        <pre class="ascii">Tag                     |0    5    10   15 18
A Anforderungen         |▓▓▓
B System auswählen      |   ▓▓▓▓
C Server bereitstellen  |   ░░
D Installieren          |       ░░░░░
E Wissensdatenbank      |       ▓▓▓▓▓▓
F Schulung              |            ░░░
G Testbetrieb           |             ▓▓▓▓
H Go-live               |                 ▓◆
▓ kritischer Pfad · ░ nicht kritisch · ◆ Meilenstein Projektende</pre>
        <table><thead><tr><th></th><th>Netzplan</th><th>Gantt-Diagramm</th></tr></thead><tbody>
          <tr><td>Stärke</td><td>Abhängigkeiten, Puffer und kritischer Pfad genau berechenbar</td><td>zeitlicher Ablauf auf einen Blick, gut für Kunden und Team</td></tr>
          <tr><td>Schwäche</td><td>bei vielen Vorgängen unübersichtlich, keine Kalenderdarstellung</td><td>Abhängigkeiten und Puffer schlechter erkennbar</td></tr>
        </tbody></table>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Vervollständigen</em> Sie den Netzplan“ · „<em>Ermitteln</em> Sie den kritischen Pfad und die Projektdauer“ · „<em>Beurteilen</em> Sie die Auswirkung, wenn Vorgang C drei Tage länger dauert“ · „<em>Finden</em> Sie die Fehler im Netzplan“ · „<em>Erstellen</em> Sie ein Gantt-Diagramm“ – typischerweise 10–14 Punkte, einer der größten Punktebringer der AP1.</div>`
    },
  ],
  exercises: [
    {
      id: "e-itsm-1",
      topic: "itsm-grundlagen",
      title: "ITSM-Rahmenwerke und ITIL-4-Bausteine zuordnen",
      level: 1,
      exam: [],
      task: `<p>Die Nordlicht IT GmbH in Heide beschäftigt sich mit IT-Service-Management.</p>
        <p>a) Ordne jede Situation dem passenden Ansatz zu (ITIL 4, ISO/IEC 20000, FitSM, COBIT 2019):</p>
        <ol>
          <li>Ein Großkunde verlangt den Nachweis durch ein externes Audit, dass das Service-Management festgelegte Anforderungen erfüllt.</li>
          <li>Ein kleines Systemhaus sucht einen kostenlosen, schlanken Einstieg ins Service-Management.</li>
          <li>Die Geschäftsführung einer Bank will IT-Risiken steuern und der Revision Reifegrade nachweisen.</li>
          <li>Das Service-Desk-Team sucht praxiserprobte Empfehlungen für den Ablauf von Incidents und Changes.</li>
        </ol>
        <p>b) Nenne die sechs Aktivitäten der ITIL-4-Service-Value-Chain.</p>
        <p>c) Ordne jede Maßnahme einer der vier Dimensionen zu: (1) neuer Wartungsvertrag mit dem Druckerhersteller, (2) Schulung des 1st Levels, (3) Einführung einer KI-gestützten Wissensdatenbank, (4) neuer Ablauf für Passwort-Resets.</p>`,
      hints: ["Norm = Anforderungen und Zertifikat für die Organisation; Governance = Steuerung durch die Leitung."],
      solution: `<p><strong>a)</strong> 1 → ISO/IEC 20000 (Norm, Organisation wird zertifiziert) · 2 → FitSM (kostenlos, schlank) · 3 → COBIT 2019 (Governance, Risiko, Reifegrade) · 4 → ITIL 4 (Best Practices für Practices wie Incident Management und Change Enablement).</p>
        <p><strong>b)</strong> Plan (Planen), Improve (Verbessern), Engage (Einbinden), Design &amp; Transition (Entwerfen &amp; Überführen), Obtain/Build (Beschaffen/Erstellen), Deliver &amp; Support (Liefern &amp; Unterstützen).</p>
        <p><strong>c)</strong> (1) Partner &amp; Lieferanten · (2) Organisationen &amp; Menschen · (3) Informationen &amp; Technologie · (4) Wertströme &amp; Prozesse.</p>`
    },
    {
      id: "e-itsm-2",
      topic: "itsm-grundlagen",
      title: "ITSM bei der Nordlicht IT GmbH einführen",
      level: 3,
      exam: [],
      task: `<p>Die Nordlicht IT GmbH (45 Beschäftigte, Heide) betreut rund 120 kleine und mittlere Unternehmen an der Westküste. Bisher rufen Kunden direkt „ihren“ Techniker an oder schreiben ihm eine E-Mail. Anfragen gehen verloren, bei Urlaub weiß niemand Bescheid, und die Geschäftsführung hat keine Zahlen zur Servicequalität.</p>
        <p>a) Erläutere drei Vorteile, die eine ITSM-Einführung für Nordlicht und ihre Kunden bringt. (3 Punkte)</p>
        <p>b) Die Geschäftsführerin möchte, dass sich die Firma „nach ITIL zertifizieren lässt“, um damit zu werben. Nimm fachlich Stellung. (4 Punkte)</p>
        <p>c) Empfiehl begründet einen Ansatz für Nordlicht und beschreibe ein sinnvolles Vorgehen bei der Einführung. Beziehe dich dabei auf zwei ITIL-4-Leitprinzipien. (6 Punkte)</p>
        <p>d) Zur Einführung gehört ein Ticketsystem. Zeige an je einem Beispiel, was in den vier Dimensionen von ITIL 4 zu bedenken ist. (4 Punkte)</p>`,
      hints: ["Wer wird bei ITIL zertifiziert, wer bei ISO/IEC 20000?", "Leitprinzipien z. B. „Dort anfangen, wo man steht“ und „Iterativ mit Feedback vorgehen“."],
      solution: `<p><strong>a)</strong> (1) Ein zentraler Service Desk als SPOC sorgt dafür, dass keine Anfrage verloren geht, weil jede als Ticket erfasst wird – auch bei Urlaub oder Krankheit. (2) Einheitliche, dokumentierte Abläufe und eine Wissensdatenbank machen die Bearbeitung schneller und die Qualität gleichmäßiger. (3) Kennzahlen wie Erstlösungsquote, Lösungszeit und SLA-Erfüllung machen die Servicequalität messbar, sodass die Geschäftsführung gezielt verbessern und Kunden verbindliche Zusagen (SLA) machen kann.</p>
        <p><strong>b)</strong> Eine Zertifizierung des Unternehmens nach ITIL ist nicht möglich. ITIL ist eine Sammlung bewährter Praktiken; zertifiziert werden nur Personen (z. B. ITIL 4 Foundation). Wenn Nordlicht die Qualität seines Service-Managements nach außen nachweisen will, ist eine Zertifizierung des Service-Management-Systems nach der Norm ISO/IEC 20000-1 durch eine akkreditierte Zertifizierungsstelle der richtige Weg. Die Geschäftsführerin kann aber damit werben, dass ihre Beschäftigten ITIL-zertifiziert sind und nach ITIL arbeiten.</p>
        <p><strong>c)</strong> Für ein Systemhaus mit 45 Beschäftigten eignet sich ITIL 4 als praxisnahe Grundlage (oder als schlanker, kostenloser Einstieg FitSM). COBIT ist auf Governance und Revision großer, regulierter Unternehmen ausgerichtet und wäre überdimensioniert; ISO/IEC 20000 kommt erst infrage, wenn Kunden einen Nachweis fordern. Vorgehen: Nach dem Leitprinzip <em>„Dort anfangen, wo man steht“</em> wird zuerst erhoben, was schon funktioniert (z. B. vorhandene Kundendatenbank, erfahrene Techniker), statt alles neu zu erfinden. Nach <em>„Iterativ mit Feedback vorgehen“</em> führt man zuerst Service Desk und Incident Management ein, holt nach einigen Wochen Rückmeldungen von Kunden und Team ein, verbessert und ergänzt danach Problem- und Change-Management. Dazu passt <em>„Einfach und praktisch halten“</em>: nur so viele Prozessschritte wie nötig.</p>
        <p><strong>d)</strong> <em>Organisationen &amp; Menschen:</em> Rollen festlegen (1st/2nd Level), Techniker schulen, Akzeptanz schaffen. <em>Informationen &amp; Technologie:</em> Auswahl des Ticketsystems, Schnittstellen zu E-Mail und Monitoring, Datenschutz der Kundendaten. <em>Partner &amp; Lieferanten:</em> Vertrag und Support des Software-Anbieters bzw. Cloud-Hosters, Einbindung der Hersteller-Hotlines. <em>Wertströme &amp; Prozesse:</em> Ablauf von der Meldung bis zum Abschluss, Kategorien, Prioritätsmatrix, Eskalationsregeln.</p>`
    },
    {
      id: "e-itsm-3",
      topic: "itsm-grundlagen",
      title: "Fälle den Management-Bereichen (Practices) zuordnen",
      level: 1,
      exam: [],
      task: `<p>Bei der Nordlicht IT GmbH in Heide fallen folgende Tätigkeiten an.</p>
        <p>a) Ordne jede Tätigkeit der passenden ITIL-4-Practice zu.</p>
        <ol>
          <li>Die Geschäftsführung beschließt, ab 2027 den neuen Service „Managed Backup“ anzubieten und die Band-Sicherung vor Ort nicht mehr zu verkaufen.</li>
          <li>Im Kundenportal steht zu jedem bestellbaren Service, was er umfasst, was er kostet und wie schnell er geliefert wird.</li>
          <li>Am letzten Arbeitstag einer Mitarbeiterin werden alle ihre Konten gesperrt und Berechtigungen entzogen.</li>
          <li>Das Speichersystem wächst um 4 % pro Monat; es wird berechnet, wann zusätzliche Platten beschafft werden müssen.</li>
          <li>Einmal im Jahr wird geübt, die wichtigsten Systeme nach einem Brand im Ausweich-Rechenzentrum wieder anlaufen zu lassen.</li>
          <li>Nach einer kniffligen Störung schreibt ein Techniker einen geprüften Lösungsartikel für die Wissensdatenbank.</li>
          <li>Ein getauschter Switch wird mit Seriennummer, Standort und Verbindungen in der CMDB nachgetragen.</li>
          <li>Der Vertrag mit dem Ersatzteillieferanten wird neu verhandelt, weil die Lieferzeiten nicht mehr zum SLA passen.</li>
        </ol>
        <p>b) Wie heißen die ITIL-v3-Prozesse „Request Fulfilment“ und „Change Management“ in ITIL 4?</p>
        <p>c) Erkläre den Unterschied zwischen Service-Katalog und Service-Portfolio.</p>`,
      hints: ["Frag dich bei jedem Fall: Geht es um Angebot, Sicherheit, Kapazität, Notfall, Wissen, Konfiguration oder Lieferanten?"],
      solution: `<p><strong>a)</strong> 1. Portfolio Management (Entscheidung über das Service-Angebot) · 2. Service Catalogue Management · 3. Information Security Management (Identitäts- und Zugriffsverwaltung, in ITIL v3 „Access Management“) · 4. Capacity and Performance Management · 5. Service Continuity Management · 6. Knowledge Management · 7. Service Configuration Management · 8. Supplier Management (der Vertrag ist ein Underpinning Contract).</p>
        <p><strong>b)</strong> Request Fulfilment → <strong>Service Request Management</strong>; Change Management → <strong>Change Enablement</strong>.</p>
        <p><strong>c)</strong> Der <strong>Service-Katalog</strong> enthält die Services, die Kunden aktuell bestellen können, mit Leistungsumfang, Preis und Lieferzeit – er richtet sich an Kunden und Anwender. Das <strong>Service-Portfolio</strong> ist die umfassendere, interne Sicht: Es enthält zusätzlich die Services, die geplant oder in Entwicklung sind, und die, die auslaufen oder eingestellt wurden. Der Katalog ist also ein Teil des Portfolios.</p>`
    },
    {
      id: "e-dl-1",
      topic: "dienstleistungen",
      title: "Vertragsart und Mängelrechte bestimmen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH hat verschiedene Aufträge und Kundenanfragen.</p>
        <p>a) Entscheide begründet, ob ein Werkvertrag oder ein Dienstvertrag vorliegt:</p>
        <ol>
          <li>Einrichtung eines WLANs mit vier Access Points in einer Kanzlei in Meldorf zum Festpreis von 3.200 €, Übergabe mit Abnahmeprotokoll.</li>
          <li>Telefon-Support für eine Arztpraxis, abgerechnet nach tatsächlich geleisteten Stunden.</li>
          <li>Zweitägige Administrator-Schulung für die Stadtverwaltung.</li>
          <li>Erstellung eines Skripts, das neue Benutzerkonten automatisch anlegt, zum Festpreis.</li>
        </ol>
        <p>b) Welches Recht nutzt der Kunde jeweils: Gewährleistung, Garantie oder Kulanz?</p>
        <ol>
          <li>Ein Privatkunde hat vor 5 Monaten eine SSD gekauft, die nun ausfällt.</li>
          <li>Ein 30 Monate alter Monitor mit 3 Jahren Herstellergarantie zeigt Pixelfehler.</li>
          <li>Eine 26 Monate alte Tastatur ohne Garantie ist defekt; der Händler tauscht sie trotzdem kostenlos.</li>
        </ol>
        <p>c) Erläutere zwei Folgen der Abnahme beim Werkvertrag.</p>`,
      solution: `<p><strong>a)</strong> 1. <strong>Werkvertrag</strong> – geschuldet ist ein funktionierendes WLAN (Erfolg), es gibt eine Abnahme. 2. <strong>Dienstvertrag</strong> – geschuldet ist die Unterstützungstätigkeit, bezahlt wird die Zeit, kein bestimmter Erfolg. 3. <strong>Dienstvertrag</strong> – geschuldet ist die Durchführung der Schulung, nicht der Lernerfolg der Teilnehmenden. 4. <strong>Werkvertrag</strong> – geschuldet ist ein funktionsfähiges Skript als Ergebnis.</p>
        <p><strong>b)</strong> 1. <strong>Gewährleistung</strong> gegenüber dem Händler; wegen der Beweislastumkehr (§ 477 BGB, erstes Jahr) wird vermutet, dass der Mangel schon bei Übergabe vorlag. 2. <strong>Garantie</strong> des Herstellers – die Gewährleistung (2 Jahre) ist abgelaufen, die Garantie (3 Jahre) läuft noch. 3. <strong>Kulanz</strong> – es besteht kein Anspruch mehr, der Händler handelt freiwillig.</p>
        <p><strong>c)</strong> Mit der Abnahme wird die Vergütung fällig (§ 641 BGB). Außerdem beginnt die Verjährungsfrist für Mängelansprüche, die Gefahr geht auf den Besteller über, und für später behauptete Mängel muss grundsätzlich der Besteller beweisen, dass sie vorliegen. Deshalb gehört zur Abnahme ein Protokoll, in dem bekannte Mängel festgehalten werden.</p>`
    },
    {
      id: "e-dl-2",
      topic: "dienstleistungen",
      title: "IMAC/RD und Dienstleistungsarten zuordnen",
      level: 1,
      exam: ["AP1"],
      task: `<p>a) Ordne die Tätigkeiten der passenden Phase des IMAC/RD-Lebenszyklus zu:</p>
        <ol>
          <li>Die Buchhaltung zieht in ein neues Gebäude; alle Arbeitsplätze werden ab- und wieder aufgebaut.</li>
          <li>Eine Mitarbeiterin erhält zusätzlich eine Dockingstation und einen zweiten Monitor.</li>
          <li>Altgeräte werden an einen zertifizierten Entsorger übergeben, der die Datenvernichtung bescheinigt.</li>
          <li>Ein neuer Auszubildender bekommt einen komplett eingerichteten Arbeitsplatz.</li>
          <li>Die Office-Version wird aktualisiert und die Berechtigungen werden angepasst.</li>
          <li>Der PC eines ausgeschiedenen Mitarbeiters wird gesichert, sicher gelöscht und abgebaut.</li>
        </ol>
        <p>b) Benenne die jeweilige Dienstleistungsart:</p>
        <ol>
          <li>Ein Techniker fährt zum Kunden, weil ein Serverlüfter defekt ist.</li>
          <li>Eine Mitarbeiterin bekommt sofort ein identisch vorkonfiguriertes Ersatznotebook.</li>
          <li>Überwachung und Patchen aller Server zum monatlichen Festpreis mit vereinbarten Service Levels.</li>
          <li>Ein Kunde erhält ohne Anspruch eine kostenlose Zusatzleistung.</li>
        </ol>`,
      solution: `<p><strong>a)</strong> 1. Move · 2. Add · 3. Dispose · 4. Install · 5. Change · 6. Remove</p>
        <p><strong>b)</strong> 1. Vor-Ort-Service (Break/Fix, Field Service) · 2. Swap-Service · 3. Managed Service (per SLA vereinbarte, dauerhafte Leistung) · 4. Kulanz</p>`
    },
    {
      id: "e-sd-1",
      topic: "service-desk",
      title: "Support-Level, Eskalation und Anfragearten",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Im Service Desk der Nordlicht IT GmbH gehen verschiedene Anliegen ein.</p>
        <p>a) Ordne das passende Support-Level zu (Self-Service, 1st, 2nd oder 3rd Level): (1) Der Service Desk verbindet am Telefon einen Netzwerkdrucker neu. (2) Das Netzwerkteam korrigiert eine Fehlkonfiguration am Core-Switch. (3) Der Storage-Hersteller behebt einen Firmwarefehler per Patch. (4) Ein Anwender setzt sein Passwort im Portal selbst zurück.</p>
        <p>b) Handelt es sich um eine funktionale oder hierarchische Eskalation? (1) Der 1st Level übergibt ein Ticket an das Datenbankteam. (2) Bei einem Prio-1-Ausfall droht die SLA-Frist zu verstreichen; die IT-Leitung genehmigt einen externen Spezialisten. (3) Der 2nd Level eröffnet einen Supportfall beim Hersteller. (4) Ein verärgerter Kunde verlangt, mit der Geschäftsführung zu sprechen.</p>
        <p>c) Nenne zwei Vorteile eines Service Desks als Single Point of Contact.</p>
        <p>d) Incident oder Service Request? (1) Passwort vergessen. (2) Bildschirm bleibt nach dem Einschalten schwarz. (3) Bestellung einer Software aus dem Katalog. (4) Frage, wie man eine Abwesenheitsnotiz einrichtet.</p>`,
      solution: `<p><strong>a)</strong> (1) 1st Level · (2) 2nd Level · (3) 3rd Level · (4) Self-Service (Level 0)</p>
        <p><strong>b)</strong> (1) funktional – mehr Fachwissen nötig · (2) hierarchisch – Entscheidung über zusätzliche Ressourcen durch die Führung · (3) funktional – Weitergabe an Spezialisten (3rd Level) · (4) hierarchisch – Führungsebene wird eingebunden</p>
        <p><strong>c)</strong> Anwender haben nur eine Anlaufstelle und müssen interne Zuständigkeiten nicht kennen. Alle Anliegen werden einheitlich erfasst, nichts geht verloren, und die Einhaltung der SLA-Zeiten lässt sich zentral überwachen und auswerten.</p>
        <p><strong>d)</strong> (1) Service Request (der Service funktioniert, eine Standardleistung wird angefragt) · (2) Incident (ungeplante Störung) · (3) Service Request · (4) Service Request (Informationsanfrage)</p>`
    },
    {
      id: "e-inc-1",
      topic: "incident",
      title: "Tickets priorisieren und Lösungsfristen berechnen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH nutzt die Prioritätsmatrix aus dem Lernzettel. Laut SLA gilt die Servicezeit Mo–Fr 7–17 Uhr; die Lösungszeiten zählen nur innerhalb der Servicezeit: Prio 1 = 4 h, Prio 2 = 8 h, Prio 3 = 16 h, Prio 4 = 40 h.</p>
        <p>Am Donnerstag gehen folgende Meldungen ein:</p>
        <table><thead><tr><th>Nr.</th><th>Uhrzeit</th><th>Meldung</th></tr></thead><tbody>
          <tr><td>1</td><td>09:00</td><td>Der Onlineshop eines Kunden ist für alle Käufer nicht erreichbar.</td></tr>
          <tr><td>2</td><td>15:30</td><td>Die Buchhaltung (6 Personen) kann keine Zahlungsdateien exportieren; der Zahlungslauf muss am Freitag erfolgen.</td></tr>
          <tr><td>3</td><td>16:00</td><td>Der Abteilungsscanner (5 Personen) ist defekt; ein Scanner im Nachbarraum kann genutzt werden.</td></tr>
          <tr><td>4</td><td>08:10</td><td>Das Notebook einer Vertriebsmitarbeiterin startet nicht; sie hat in einer Stunde einen Kundentermin.</td></tr>
        </tbody></table>
        <p>a) Bestimme für jede Meldung Auswirkung, Dringlichkeit und Priorität und begründe kurz.</p>
        <p>b) Berechne jeweils den spätesten Lösungszeitpunkt laut SLA.</p>
        <p>c) Beurteile die Lösungsfrist von Meldung 2 im Hinblick auf das Geschäft des Kunden.</p>`,
      hints: ["Die SLA-Uhr läuft nur Mo–Fr zwischen 7 und 17 Uhr.", "Prio 4 mit 40 h entspricht vier vollen Servicetagen."],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Nr.</th><th>Auswirkung</th><th>Dringlichkeit</th><th>Priorität</th></tr></thead><tbody>
          <tr><td>1</td><td>hoch – Kerngeschäft des Kunden, alle Käufer betroffen</td><td>hoch – jede Minute kostet Umsatz</td><td>1</td></tr>
          <tr><td>2</td><td>mittel – eine Abteilung</td><td>hoch – Termin am nächsten Tag</td><td>2</td></tr>
          <tr><td>3</td><td>mittel – eine Abteilung</td><td>niedrig – Ausweichgerät vorhanden</td><td>4</td></tr>
          <tr><td>4</td><td>niedrig – eine Person</td><td>hoch – Termin in einer Stunde</td><td>3</td></tr>
        </tbody></table>
        <p><strong>b)</strong></p>
        <ul>
          <li>Meldung 1: 09:00 + 4 h = <strong>Donnerstag 13:00 Uhr</strong>.</li>
          <li>Meldung 2: Donnerstag 15:30–17:00 = 1,5 h; Rest 8 h − 1,5 h = 6,5 h → Freitag 07:00 + 6,5 h = <strong>Freitag 13:30 Uhr</strong>.</li>
          <li>Meldung 3: Donnerstag 16:00–17:00 = 1 h; Rest 39 h → Freitag 10 h (Rest 29 h), Montag 10 h (Rest 19 h), Dienstag 10 h (Rest 9 h) → Mittwoch 07:00 + 9 h = <strong>Mittwoch 16:00 Uhr</strong>.</li>
          <li>Meldung 4: Donnerstag 08:10–17:00 = 8 h 50 min; Rest 16 h − 8 h 50 min = 7 h 10 min → Freitag 07:00 + 7 h 10 min = <strong>Freitag 14:10 Uhr</strong>.</li>
        </ul>
        <p><strong>c)</strong> Formal hält Nordlicht das SLA ein, wenn der Fehler bis Freitag 13:30 Uhr behoben ist. Findet der Zahlungslauf aber am Vormittag statt, reicht diese Frist geschäftlich nicht. Der Service Desk sollte deshalb nachfragen, bis wann der Export spätestens nötig ist, und – falls nötig – die Dringlichkeit erhöhen oder hierarchisch eskalieren, damit zusätzliche Ressourcen bereitgestellt werden. Für die Zukunft sollte im Service-Review geprüft werden, ob die Zahlungsfunktion im SLA als kritischer Service eingestuft werden muss.</p>`
    },
    {
      id: "e-inc-2",
      topic: "incident",
      title: "Störungsmeldung vollständig bearbeiten",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Freitag, 14:05 Uhr. Frau Hansen, Lagerleiterin der Marschland Agrarhandel GmbH in Wesselburen, ruft bei der Hotline der Nordlicht IT GmbH an: „Seit heute Mittag geht im Lager gar nichts mehr! Die Handscanner können nichts buchen, und um 16 Uhr muss die Lieferung für unseren Großkunden raus!“ Betroffen sind drei Lagerarbeitsplätze und sechs Handscanner, im Büro funktioniert alles.</p>
        <p>a) Formuliere zwei offene und zwei geschlossene Fragen zur Eingrenzung der Störung. (4 Punkte)</p>
        <p>b) Nenne sechs Angaben, die du im Ticket erfasst. (3 Punkte)</p>
        <p>c) Bestimme mithilfe der Prioritätsmatrix Auswirkung, Dringlichkeit und Priorität und begründe deine Einstufung. (4 Punkte)</p>
        <p>d) Nach 20 Minuten hast du im 1st Level keine Lösung gefunden. Die Fernabfrage zeigt, dass der WLAN-Access-Point im Lager nicht erreichbar ist. Beschreibe das weitere Vorgehen, einschließlich Eskalation und Kommunikation mit Frau Hansen. (5 Punkte)</p>
        <p>e) Nenne drei Schritte, die nach der Behebung zum Abschluss des Tickets gehören. (3 Punkte)</p>`,
      hints: ["Offene Fragen beginnen mit einem W-Wort, geschlossene lassen sich mit Ja/Nein beantworten.", "Workaround bis 16 Uhr mitdenken!"],
      solution: `<p><strong>a)</strong> Offen: „Was genau passiert, wenn Sie mit dem Scanner buchen – welche Meldung erscheint?“ · „Was hat sich seit heute Mittag im Lager verändert (Umbau, Stromausfall, neue Geräte)?“ Geschlossen: „Können die Lager-PCs Webseiten oder das Warenwirtschaftssystem öffnen?“ · „Leuchten am WLAN-Gerät an der Lagerdecke die Lämpchen?“</p>
        <p><strong>b)</strong> Ticketnummer, Datum/Uhrzeit (Fr 14:05), Melderin mit Rückrufnummer, Firma und Standort, betroffene Geräte/Services (Lager-WLAN, 3 PCs, 6 Handscanner), Fehlerbeschreibung („seit Mittag keine Buchung möglich, Büro nicht betroffen“), Kategorie, Priorität, Bearbeiter, Termin 16 Uhr.</p>
        <p><strong>c)</strong> Kategorie: Netzwerk › WLAN (vermutet). Auswirkung: <strong>hoch</strong> – der gesamte Lagerbereich steht, der Versand an einen Großkunden ist gefährdet. Dringlichkeit: <strong>hoch</strong> – die Lieferung muss in knapp zwei Stunden raus, ein Workaround ist bisher nicht bekannt. → <strong>Priorität 1</strong>.</p>
        <p><strong>d)</strong> Da der 1st Level den Fehler nicht lösen kann und Netzwerk-Fachwissen bzw. ein Vor-Ort-Einsatz nötig ist, eskaliere ich das Ticket <strong>funktional</strong> an den 2nd Level (Netzwerkteam) und übergebe alle bisherigen Erkenntnisse. Weil die Frist 16 Uhr eng ist, informiere ich zusätzlich die Teamleitung (<strong>hierarchische</strong> Eskalation), damit sofort ein Techniker losfahren kann bzw. ein Ersatz-Access-Point bereitgestellt wird. Parallel prüfen wir einen <strong>Workaround</strong>, z. B. Lieferschein über einen Büro-PC buchen oder Scanner vorübergehend im Büro-WLAN betreiben. Frau Hansen rufe ich zurück, erkläre verständlich den Stand, nenne einen realistischen Zeitpunkt (z. B. „Techniker ist gegen 15 Uhr bei Ihnen“) und melde mich spätestens alle 30 Minuten; alle Schritte werden im Ticket dokumentiert.</p>
        <p><strong>e)</strong> Lösung und Ursache im Ticket dokumentieren (z. B. defektes PoE-Netzteil getauscht), mit Frau Hansen die Funktion prüfen und die Lösung bestätigen lassen, Ticket auf „gelöst“ und nach Bestätigung auf „geschlossen“ setzen, ggf. Wissensartikel anlegen und prüfen, ob ein Problem-Ticket nötig ist (z. B. wenn ähnliche Access Points betroffen sein könnten).</p>`
    },
    {
      id: "e-prob-1",
      topic: "problem",
      title: "Wiederkehrende VPN-Abbrüche analysieren",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Bei der Nordlicht IT GmbH gingen in den letzten vier Wochen 23 Tickets ein: „VPN-Verbindung im Homeoffice bricht ab“. Jedes Mal half ein erneuter Verbindungsaufbau. Eine erste Analyse ergab folgende Einzelbefunde (ungeordnet):</p>
        <ul>
          <li>Der Tunnel wird nach 60 Minuten neu ausgehandelt, und diese Neuaushandlung schlägt fehl.</li>
          <li>Das Client-Update wurde ohne Testphase an alle Homeoffice-Rechner verteilt.</li>
          <li>Die Verbindung bricht jeweils nach genau 60 Minuten ab.</li>
          <li>Für Client-Updates gibt es keinen geregelten Change-Prozess mit Test.</li>
          <li>Seit dem letzten Update des VPN-Clients passen dessen Standardparameter nicht mehr zur Firewall.</li>
        </ul>
        <p>a) Begründe, warum hier das Problem Management eingeschaltet werden sollte, und grenze Incident und Problem voneinander ab. (3 Punkte)</p>
        <p>b) Ordne die möglichen Ursachen den Kategorien eines Ishikawa-Diagramms (Mensch, Hardware, Software, Netzwerk, Prozess, Umgebung) zu: (1) fehlende Schulung zum VPN-Client, (2) Client-Update mit geänderten Standardwerten, (3) überlastete Internetleitung am Firmensitz, (4) Updates ohne Testphase, (5) Firewall an der Leistungsgrenze, (6) WLAN-Störungen in den Wohnungen der Beschäftigten. (3 Punkte)</p>
        <p>c) Bringe die Befunde in eine 5-Why-Kette und benenne die Grundursache. (4 Punkte)</p>
        <p>d) Formuliere einen Eintrag für die Known Error Database. (4 Punkte)</p>
        <p>e) Über welche Practice wird die dauerhafte Lösung umgesetzt? Begründe. (2 Punkte)</p>`,
      solution: `<p><strong>a)</strong> Die Störung tritt wiederholt bei vielen Anwendern auf; das Incident Management stellt jedes Mal nur kurzfristig den Betrieb wieder her (Neuverbindung), die Ursache bleibt bestehen und verursacht weiter Aufwand. Ein <strong>Incident</strong> ist die einzelne Unterbrechung des Services mit dem Ziel schneller Wiederherstellung; ein <strong>Problem</strong> ist die (unbekannte) Ursache eines oder mehrerer Incidents, die das Problem Management dauerhaft beseitigen soll.</p>
        <p><strong>b)</strong> (1) Mensch · (2) Software · (3) Netzwerk · (4) Prozess · (5) Hardware (das Firewall-Gerät ist überlastet; eine Zuordnung zu „Netzwerk“ ist mit Begründung ebenfalls vertretbar) · (6) Umgebung</p>
        <p><strong>c)</strong></p>
        <ol>
          <li>Warum bricht die Verbindung ab? – Sie bricht jeweils nach genau 60 Minuten ab, weil …</li>
          <li>… der Tunnel nach 60 Minuten neu ausgehandelt wird und die Neuaushandlung fehlschlägt. Warum?</li>
          <li>Seit dem Client-Update passen die Standardparameter des Clients nicht mehr zur Firewall. Warum?</li>
          <li>Das Update wurde ohne Testphase an alle Rechner verteilt. Warum?</li>
          <li>Für Client-Updates gibt es keinen geregelten Change-Prozess mit Test.</li>
        </ol>
        <p><strong>Grundursache (Root Cause):</strong> fehlender Change-Prozess mit Testphase für Client-Updates; technische Ursache sind die nicht passenden Tunnelparameter.</p>
        <p><strong>d)</strong> <em>Titel:</em> VPN-Abbruch nach 60 Minuten seit Client-Update · <em>Symptom:</em> VPN-Verbindung im Homeoffice bricht exakt nach 60 min ab, Neuverbindung möglich · <em>betroffen:</em> alle Clients mit neuer VPN-Client-Version · <em>Ursache:</em> abweichende Parameter für die Neuaushandlung zwischen Client und Firewall · <em>Workaround:</em> Verbindung neu aufbauen bzw. bis zur Lösung das bisherige Verbindungsprofil verwenden · <em>Status:</em> Known Error, Lösung per Change geplant · <em>Verknüpfte Tickets:</em> 23 Incidents.</p>
        <p><strong>e)</strong> Über <strong>Change Enablement</strong>: Die Anpassung der Parameter auf allen Clients bzw. der Firewall ist eine Änderung an Configuration Items, die Risiken hat (z. B. Ausfall aller VPN-Verbindungen). Deshalb wird ein RFC gestellt, als Normal Change bewertet, getestet und mit Rückfallplan umgesetzt. Zusätzlich wird ein Testschritt für künftige Client-Updates in den Change-Prozess aufgenommen.</p>`
    },
    {
      id: "e-prob-2",
      topic: "problem",
      title: "Begriffe des Problem Managements an einem Fall zuordnen",
      level: 1,
      exam: ["AP1", "AP2"],
      task: `<p>Seit drei Wochen meldet der Versand der Marschland Agrarhandel GmbH in Wesselburen fast täglich: „Der Etikettendrucker ist offline.“ Nach einem Neustart des Druckers funktioniert er jedes Mal wieder.</p>
        <p>a) Ordne jeder Aussage genau einen Begriff zu: Incident, Problem, Workaround, Known Error, Root Cause, dauerhafte Lösung.</p>
        <ol>
          <li>Die Meldung vom Dienstag, 10:15 Uhr: Im Versand lassen sich keine Etiketten drucken.</li>
          <li>Den Drucker aus- und wieder einschalten.</li>
          <li>Die zunächst unbekannte Ursache der wiederkehrenden Ausfälle.</li>
          <li>Ein Speicherfehler in der aktuellen Drucker-Firmware lässt den Netzwerkdienst des Druckers nach einigen Tagen abstürzen.</li>
          <li>Ursache und Umgehungslösung sind in der KEDB dokumentiert, eine endgültige Behebung gibt es noch nicht.</li>
          <li>Der Hersteller liefert ein Firmware-Update, das nach einem Test im Wartungsfenster eingespielt wird.</li>
        </ol>
        <p>b) Liegt reaktives oder proaktives Problem Management vor? Begründe und nenne ein Beispiel für die jeweils andere Form.</p>
        <p>c) Erläutere, wie der KEDB-Eintrag dem 1st Level hilft und welche Kennzahl sich dadurch verbessert.</p>
        <p>d) Begründe, warum das Problem-Ticket nicht geschlossen werden darf, sobald der Workaround bekannt ist.</p>`,
      solution: `<p><strong>a)</strong> 1. Incident · 2. Workaround · 3. Problem · 4. Root Cause · 5. Known Error · 6. dauerhafte Lösung (umgesetzt als Change über Change Enablement).</p>
        <p><strong>b)</strong> <strong>Reaktiv</strong>, weil das Problem Management erst durch die Häufung bereits aufgetretener Incidents ausgelöst wurde. Proaktiv wäre es z. B., wenn die IT nach einer Sicherheits- oder Fehlermeldung des Herstellers vorsorglich alle baugleichen Drucker prüft und aktualisiert, bevor Störungen auftreten.</p>
        <p><strong>c)</strong> Meldet ein Anwender „Etikettendrucker offline“, findet der 1st Level über das Symptom sofort den KEDB-Eintrag mit Ursache und Workaround. Er kann den Anwender direkt anleiten, statt das Ticket an den 2nd Level weiterzugeben. Dadurch steigt die <strong>Erstlösungsquote (FCR)</strong>, die durchschnittliche Lösungszeit sinkt, und die Kosten pro Ticket gehen zurück.</p>
        <p><strong>d)</strong> Ein Workaround mildert nur die Auswirkung, die Ursache (Firmware-Fehler) bleibt bestehen – der Drucker fällt weiter aus und verursacht Tickets und Stillstand im Versand. Das Problem wird erst geschlossen, wenn die dauerhafte Lösung umgesetzt und ihre Wirksamkeit geprüft wurde (z. B. zwei Wochen ohne neue Meldung); danach werden Known Error und verknüpfte Incidents aktualisiert.</p>`
    },
    {
      id: "e-change-1",
      topic: "change",
      title: "Changes einordnen und RFC vorbereiten",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>a) Ordne die Änderungen der passenden Change-Art (Standard, Normal, Emergency) zu und begründe kurz:</p>
        <ol>
          <li>Installation einer freigegebenen Software aus dem Service-Katalog nach Checkliste.</li>
          <li>Migration aller Postfächer eines Kunden in eine Cloud-Lösung.</li>
          <li>Der Hersteller meldet eine aktiv ausgenutzte Sicherheitslücke in der Firewall; der Patch muss noch heute eingespielt werden.</li>
          <li>RAM-Aufrüstung eines Standard-PCs nach freigegebener Anleitung.</li>
          <li>Einführung eines neuen VLAN-Konzepts im gesamten Unternehmen.</li>
        </ol>
        <p>b) Nenne sechs Inhalte eines RFC für die Postfach-Migration.</p>
        <p>c) Beschreibe die Aufgabe des Change Advisory Board (CAB) und nenne drei mögliche Mitglieder.</p>
        <p>d) Erläutere an einem Beispiel, warum jeder Change einen Rückfallplan braucht.</p>`,
      solution: `<p><strong>a)</strong> 1. Standard – geringes Risiko, wiederkehrend, vorab genehmigtes Verfahren. 2. Normal – großer Umfang, Risiko für alle Postfächer, muss bewertet und genehmigt werden. 3. Emergency – sofortiges Handeln nötig, um Schaden abzuwenden; beschleunigte Genehmigung (z. B. ECAB). 4. Standard – Routine nach freigegebener Anleitung. 5. Normal – betrifft das gesamte Netz, braucht Planung, Tests und Genehmigung.</p>
        <p><strong>b)</strong> Antragsteller, Beschreibung und Begründung (Nutzen), betroffene Services und CIs (Mailserver, Clients, Mobilgeräte), Risiko- und Auswirkungsbewertung, Zeitplan/Wartungsfenster, benötigte Ressourcen und Kosten, Testplan, Rückfallplan, Kommunikationsplan für die Anwender.</p>
        <p><strong>c)</strong> Das CAB bewertet Normal Changes hinsichtlich Nutzen, Risiken, Ressourcen und Abhängigkeiten zu anderen Changes und berät die Change Authority bei der Genehmigung und Terminierung. Mögliche Mitglieder: Change Manager, Vertreter des IT-Betriebs (Server-/Netzwerkteam), Service Desk, Informationssicherheit, Vertreter des Fachbereichs bzw. Kunden, ggf. Lieferanten.</p>
        <p><strong>d)</strong> Auch gut geplante Changes können scheitern. Schlägt z. B. ein Firmware-Update auf dem Core-Switch fehl, ist das gesamte Netzwerk betroffen. Ein vorher getesteter Rückfallplan (alte Firmware-Partition booten, Konfigurationssicherung zurückspielen) stellt den alten Zustand innerhalb des Wartungsfensters wieder her und begrenzt so Ausfallzeit und Schaden.</p>`
    },
    {
      id: "e-change-2",
      topic: "change",
      title: "Englische Change-Ankündigung auswerten",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Die Marschland Agrarhandel GmbH erhält von ihrem Firewall-Dienstleister folgende E-Mail:</p>
        <pre><code>Subject: Planned change – firewall firmware upgrade (CHG-2026-0412)

Dear customer,

we will upgrade the firmware of your firewall cluster on Saturday,
10 October 2026, between 06:00 and 08:00 (change window).
The change has been approved by our Change Advisory Board as a
normal change. During the upgrade, VPN connections and internet
access may be interrupted for up to 15 minutes.
A rollback plan is in place: if the upgrade fails, the previous
firmware will be restored within 30 minutes.
Please make sure that no critical jobs are scheduled during this
time. If you notice any issues after the change, please open a
ticket via our service portal and reference the change number.

Kind regards
Service Management Team</code></pre>
        <p>a) Fasse die wesentlichen Inhalte der E-Mail auf Deutsch zusammen. (4 Punkte)</p>
        <p>b) Um welche Change-Art handelt es sich, und wer hat den Change genehmigt? Erläutere die Rolle dieses Gremiums. (3 Punkte)</p>
        <p>c) Erkläre die Begriffe „change window“ und „rollback plan“. (2 Punkte)</p>
        <p>d) Welche Mitwirkungspflichten ergeben sich für den Kunden? (2 Punkte)</p>
        <p>e) Am Samstag um 07:00 Uhr läuft beim Kunden eine wichtige Datensicherung ins Rechenzentrum. Formuliere eine kurze englische Antwort, in der du darauf hinweist und um einen anderen Termin bittest. (4 Punkte)</p>`,
      solution: `<p><strong>a)</strong> Der Dienstleister aktualisiert am Samstag, 10.10.2026, zwischen 6 und 8 Uhr die Firmware des Firewall-Clusters (Change CHG-2026-0412). Während des Updates können VPN und Internetzugang bis zu 15 Minuten ausfallen. Falls das Update fehlschlägt, wird innerhalb von 30 Minuten die alte Firmware wiederhergestellt. Der Kunde soll in dieser Zeit keine kritischen Aufgaben einplanen und Probleme nach dem Change über das Serviceportal unter Angabe der Change-Nummer melden.</p>
        <p><strong>b)</strong> Es ist ein <strong>Normal Change</strong>, genehmigt vom <strong>Change Advisory Board (CAB)</strong>. Das CAB ist ein Gremium aus Fachleuten (Betrieb, Sicherheit, Service Desk, ggf. Kunden), das Nutzen, Risiken, Ressourcen und Termin eines Changes bewertet und die Genehmigung empfiehlt bzw. erteilt.</p>
        <p><strong>c)</strong> <em>Change window</em> (Wartungsfenster): vorab vereinbarter Zeitraum, in dem Änderungen durchgeführt werden dürfen, meist zu nutzungsarmen Zeiten. <em>Rollback plan</em> (Rückfallplan): festgelegtes Vorgehen, um bei einem Fehlschlag den vorherigen, funktionierenden Zustand wiederherzustellen.</p>
        <p><strong>d)</strong> Der Kunde muss sicherstellen, dass im Wartungsfenster keine kritischen Jobs laufen (bzw. Anwender informieren), und er soll Störungen nach dem Change über das Serviceportal mit Referenz auf die Change-Nummer melden.</p>
        <p><strong>e)</strong> Beispiel: „Dear Service Management Team, thank you for the information about change CHG-2026-0412. Unfortunately, an important backup job to our data centre is scheduled for Saturday at 07:00. Could you please postpone the change or suggest an alternative change window, for example on Sunday morning? Thank you in advance. Kind regards, …“</p>`
    },
    {
      id: "e-sla-1",
      topic: "sla-kennzahlen",
      title: "SLA-Erfüllung prüfen und Vertragsstrafe berechnen",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH betreibt für die Marschland Energie GmbH in Meldorf das ERP-System. Laut SLA gilt: Servicezeit Mo–Sa 6–22 Uhr, Verfügbarkeit mindestens 99,5 % pro Monat, Reaktionszeit Prio 2 = 30 Minuten (nur innerhalb der Servicezeit), Monatspauschale 3.600 €. Für jede <em>angefangenen</em> 0,1 Prozentpunkte Unterschreitung der Verfügbarkeit erhält der Kunde 2 % der Monatspauschale gutgeschrieben.</p>
        <p>Der Abrechnungsmonat hat 26 Servicetage. Das Monitoring meldet folgende Ausfälle:</p>
        <table><thead><tr><th>Tag</th><th>Ausfall</th></tr></thead><tbody>
          <tr><td>Dienstag</td><td>09:10–10:30 Uhr</td></tr>
          <tr><td>Sonntag</td><td>02:00–05:00 Uhr (geplante Wartung)</td></tr>
          <tr><td>Donnerstag</td><td>14:20–15:00 Uhr</td></tr>
          <tr><td>Freitag</td><td>21:30–22:45 Uhr</td></tr>
        </tbody></table>
        <p>a) Berechne die vereinbarte Servicezeit im Monat und die maximal zulässige Ausfallzeit. (3 Punkte)</p>
        <p>b) Berechne die tatsächliche Verfügbarkeit und beurteile, ob das SLA eingehalten wurde. (4 Punkte)</p>
        <p>c) Berechne die Gutschrift für den Kunden. (3 Punkte)</p>
        <p>d) Ein Prio-2-Ticket ging am Samstag um 21:40 Uhr ein, die qualifizierte Rückmeldung erfolgte am Montag um 06:25 Uhr. Prüfe, ob die Reaktionszeit eingehalten wurde. (3 Punkte)</p>
        <p>e) Nordlicht ist auf das eigene Datenbankteam und auf den ERP-Hersteller angewiesen. Benenne die jeweils nötige Vereinbarung und erläutere, warum sie zum SLA passen müssen. (3 Punkte)</p>`,
      hints: ["Nur Ausfälle innerhalb der Servicezeit zählen.", "„Angefangene“ 0,1 Prozentpunkte: Auch eine Unterschreitung um 0,101 Punkte ergibt zwei angefangene Stufen."],
      solution: `<p><strong>a)</strong> Servicezeit pro Tag: 22 − 6 = 16 h → 26 × 16 h = <strong>416 h</strong>. Maximal zulässige Ausfallzeit: 416 h × (100 % − 99,5 %) = 416 h × 0,005 = <strong>2,08 h</strong> = 2 h 4,8 min ≈ 2 h 5 min.</p>
        <p><strong>b)</strong> Relevante Ausfälle innerhalb der Servicezeit:</p>
        <ul>
          <li>Dienstag 09:10–10:30 = 80 min</li>
          <li>Sonntag: keine Servicezeit → zählt nicht</li>
          <li>Donnerstag 14:20–15:00 = 40 min</li>
          <li>Freitag 21:30–22:00 = 30 min (ab 22 Uhr keine Servicezeit)</li>
        </ul>
        <p>Summe: 80 + 40 + 30 = 150 min = 2,5 h. Verfügbarkeit = (416 h − 2,5 h) ÷ 416 h × 100 = 413,5 ÷ 416 × 100 ≈ <strong>99,40 %</strong>. Da 99,40 % &lt; 99,5 % (bzw. 2,5 h &gt; 2,08 h), wurde das SLA <strong>nicht eingehalten</strong>.</p>
        <p><strong>c)</strong> Unterschreitung: 99,5 % − 99,399 % ≈ 0,101 Prozentpunkte → das sind <strong>2 angefangene</strong> 0,1-Stufen → 2 × 2 % = 4 % → 3.600 € × 0,04 = <strong>144 € Gutschrift</strong>.</p>
        <p><strong>d)</strong> Samstag 21:40–22:00 = 20 min verbraucht, Rest 10 min. Sonntag ist keine Servicezeit, weiter geht es Montag 06:00 Uhr → Frist endet <strong>Montag 06:10 Uhr</strong>. Die Rückmeldung um 06:25 Uhr kam 15 Minuten zu spät; die Reaktionszeit wurde <strong>nicht eingehalten</strong>.</p>
        <p><strong>e)</strong> Mit dem eigenen Datenbankteam schließt Nordlicht ein <strong>OLA</strong> (Operational Level Agreement), mit dem ERP-Hersteller einen <strong>Underpinning Contract (UC)</strong>. Beide müssen mindestens so strenge Zeiten und Werte enthalten wie das SLA: Braucht das Datenbankteam z. B. vier Stunden für eine Reaktion oder liefert der Hersteller Patches erst nach Tagen, kann Nordlicht die zugesagten 30 Minuten Reaktionszeit und 99,5 % Verfügbarkeit gegenüber dem Kunden nicht einhalten.</p>`
    },
    {
      id: "e-sla-2",
      topic: "sla-kennzahlen",
      title: "MTBF, MTTR und Erstlösungsquote",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>a) Ein Core-Switch lief im letzten Halbjahr 180 Tage rund um die Uhr. Er fiel dreimal aus: 2 h, 5 h und 1,5 h. Berechne MTTR, MTBF und die Verfügbarkeit.</p>
        <p>b) Der Hersteller gibt für ein neues Switch-Modell eine MTBF von 250.000 h an. Schätze die jährliche Ausfallrate (AFR) mit der Näherung AFR ≈ 8.760 h ÷ MTBF und die Zahl der zu erwartenden Ausfälle pro Jahr bei 40 Switches.</p>
        <p>c) Der Service Desk hat im Quartal 1.850 Tickets bearbeitet, davon 1.221 im Erstkontakt gelöst. Berechne die Erstlösungsquote. Wie viele Tickets hätten im Erstkontakt gelöst werden müssen, um das Ziel von 70 % zu erreichen?</p>
        <p>d) Erläutere, warum eine hohe Erstlösungsquote sowohl für die Kundenzufriedenheit als auch für die Kosten wichtig ist.</p>`,
      solution: `<p><strong>a)</strong> Betrachtungszeit: 180 × 24 h = 4.320 h. Gesamte Ausfallzeit: 2 + 5 + 1,5 = 8,5 h.<br>
        MTTR = 8,5 h ÷ 3 ≈ <strong>2,83 h</strong> (≈ 2 h 50 min)<br>
        MTBF = (4.320 h − 8,5 h) ÷ 3 = 4.311,5 h ÷ 3 ≈ <strong>1.437,17 h</strong><br>
        Verfügbarkeit = MTBF ÷ (MTBF + MTTR) = 1.437,17 ÷ 1.440 ≈ <strong>99,80 %</strong> (Kontrolle: 4.311,5 ÷ 4.320 ≈ 99,80 %).</p>
        <p><strong>b)</strong> AFR ≈ 8.760 ÷ 250.000 ≈ 0,035 = <strong>3,5 %</strong> pro Gerät und Jahr. Bei 40 Switches: 40 × 0,035 ≈ <strong>1,4 Ausfälle pro Jahr</strong> – man sollte also mit ein bis zwei Ausfällen rechnen und Ersatzgeräte bzw. einen passenden Wartungsvertrag einplanen.</p>
        <p><strong>c)</strong> FCR = 1.221 ÷ 1.850 × 100 = <strong>66 %</strong>. Ziel: 0,70 × 1.850 = 1.295 Tickets → es fehlen 1.295 − 1.221 = <strong>74 Tickets</strong>.</p>
        <p><strong>d)</strong> Wird ein Anliegen schon im ersten Kontakt gelöst, kann der Anwender sofort weiterarbeiten, muss nicht auf Rückrufe warten und erlebt den Service als kompetent – das erhöht die Zufriedenheit. Gleichzeitig entfallen Übergaben an den teureren 2nd oder 3rd Level, Doppelarbeit und erneute Einarbeitung in das Ticket; die Kosten pro Ticket sinken.</p>`
    },
    {
      id: "e-sich-1",
      topic: "it-sicherstellung",
      title: "Verfügbarkeit einer Systemkette, Monitoring und USV",
      level: 2,
      exam: ["AP2"],
      task: `<p>Der Webshop der Nordsee Fisch Handels GmbH in Büsum läuft rund um die Uhr. Er benötigt hintereinander eine Internetleitung (Verfügbarkeit 99,5 %), eine Firewall (99,9 %) und einen Server (99,8 %).</p>
        <p>a) Berechne die Gesamtverfügbarkeit und die daraus folgende maximale Ausfallzeit pro Jahr (8.760 h).</p>
        <p>b) Es wird eine zweite, unabhängige Internetleitung (99,0 %) parallel geschaltet. Berechne die neue Gesamtverfügbarkeit und die maximale Ausfallzeit pro Jahr.</p>
        <p>c) Nenne drei Werte, die am Server überwacht werden sollten, mit je einem sinnvollen Schwellwert und der Reaktion bei Überschreitung.</p>
        <p>d) Die USV hat zwei Akkus mit je 12 V und 9 Ah, davon sind 80 % nutzbar; der Wechselrichter hat einen Wirkungsgrad von 90 %. Die Last beträgt 450 W. Berechne die Überbrückungszeit. Reicht sie, wenn die Shutdown-Software nach 10 Minuten Stromausfall das Herunterfahren startet und dieses 5 Minuten dauert?</p>
        <p>e) Empfiehl eine Wartungsstrategie für die Server-Festplatten und begründe sie.</p>`,
      solution: `<p><strong>a)</strong> Reihenschaltung: 0,995 × 0,999 × 0,998 ≈ 0,99202 → <strong>≈ 99,20 %</strong>. Ausfallzeit: (1 − 0,99202) × 8.760 h ≈ <strong>69,9 h pro Jahr</strong>.</p>
        <p><strong>b)</strong> Internet parallel: 1 − (1 − 0,995) × (1 − 0,99) = 1 − 0,005 × 0,01 = 0,99995. Gesamt: 0,99995 × 0,999 × 0,998 ≈ 0,99695 → <strong>≈ 99,70 %</strong>. Ausfallzeit: (1 − 0,99695) × 8.760 h ≈ <strong>26,7 h pro Jahr</strong> – die Redundanz senkt die mögliche Ausfallzeit um rund 43 Stunden.</p>
        <p><strong>c)</strong> z. B. Festplattenbelegung: Warnung ab 80 %, kritisch ab 90 % → Ticket anlegen, Daten bereinigen oder Speicher erweitern. CPU-Auslastung: Warnung, wenn länger als 15 min über 85 % → Ursache (Prozess, Last) analysieren. S.M.A.R.T.-Werte (z. B. neu zugewiesene Sektoren &gt; 0) → Festplatte vorsorglich tauschen. Außerdem Dienststatus des Webservers: nicht erreichbar → sofortiger Alarm per SMS an die Rufbereitschaft.</p>
        <p><strong>d)</strong> Energie: 2 × 12 V × 9 Ah = 216 Wh; nutzbar: 216 Wh × 0,8 = 172,8 Wh; nach Wirkungsgrad: 172,8 Wh × 0,9 = 155,52 Wh. Zeit: 155,52 Wh ÷ 450 W ≈ 0,346 h ≈ <strong>20,7 min</strong>. Benötigt werden 10 min + 5 min = 15 min → die Zeit <strong>reicht</strong>, es bleiben knapp 6 Minuten Reserve.</p>
        <p><strong>e)</strong> Sinnvoll ist eine <strong>vorausschauende Wartung (Predictive Maintenance)</strong>: Die S.M.A.R.T.-Werte werden laufend überwacht, und Platten werden getauscht, sobald sich Fehler abzeichnen. So vermeidet man ungeplante Ausfälle (anders als bei korrektiver Wartung) und tauscht keine intakten Platten nur nach Kalender (anders als bei rein präventiver Wartung). Ergänzend sorgen RAID und Backups dafür, dass ein Plattenausfall nicht zum Datenverlust führt.</p>`
    },
    {
      id: "e-opt-1",
      topic: "optimierung",
      title: "Supportangebote vergleichen und Self-Service bewerten",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Die Deichblick Steuerberatung in Büsum möchte ihren IT-Support auslagern und hat zwei Angebote:</p>
        <ul>
          <li><strong>Angebot A:</strong> Pauschale 890 € pro Monat inkl. 20 Supportstunden, jede weitere Stunde 55 €.</li>
          <li><strong>Angebot B:</strong> 78 € pro Stunde, abgerechnet wird je angefangene 15 Minuten.</li>
        </ul>
        <p>a) Bisher gab es 60 Supportfälle pro Monat mit je 14 Minuten Dauer. Berechne die monatlichen Kosten beider Angebote. (4 Punkte)</p>
        <p>b) Ermittle, ab wie vielen abgerechneten Stunden pro Monat Angebot A günstiger ist als Angebot B (Taktung vernachlässigen, bis 20 h). (2 Punkte)</p>
        <p>c) Nach Einführung einer neuen Kanzleisoftware rechnet man mit 30 Stunden pro Monat (in vollen Viertelstunden). Berechne erneut. (2 Punkte)</p>
        <p>d) Nenne zwei qualitative Kriterien für die Entscheidung. (2 Punkte)</p>
        <p>e) Der Anbieter selbst hat Service-Desk-Kosten von 312.000 € pro Jahr bei 24.000 Tickets. Ein Self-Service-Portal (25.000 € einmalig, 4.800 € pro Jahr Betrieb) soll 15 % der Tickets übernehmen; ein Self-Service-Fall kostet 2 €. Berechne die Kosten pro Ticket, die jährliche Nettoeinsparung und die Amortisationszeit in Monaten. Gehe vereinfachend davon aus, dass die Kosten pro Ticket vollständig eingespart werden. (6 Punkte)</p>`,
      hints: ["Jeder 14-Minuten-Fall wird bei B als eine Viertelstunde abgerechnet.", "Einsparung pro verlagertem Ticket = Kosten Service Desk − Kosten Self-Service."],
      solution: `<p><strong>a)</strong> Angebot A: 60 × 14 min = 840 min = 14 h ≤ 20 h → <strong>890 €</strong>. Angebot B: jeder Fall wird mit einer angefangenen Viertelstunde abgerechnet; 78 € ÷ 4 = 19,50 € pro Viertelstunde → 60 × 19,50 € = <strong>1.170 €</strong>. Angebot A ist 280 € günstiger.</p>
        <p><strong>b)</strong> Bis 20 h kostet A immer 890 €, B kostet 78 € je Stunde. Gleichstand: 890 € ÷ 78 €/h ≈ 11,41 h. Bei <strong>mehr als rund 11,4 Stunden</strong> pro Monat ist die Pauschale günstiger; in Viertelstunden gerechnet ab <strong>11,5 h</strong> (B: 11,5 × 78 € = 897 € &gt; 890 €; bei 11,25 h wäre B mit 877,50 € noch günstiger).</p>
        <p><strong>c)</strong> A: 890 € + (30 − 20) × 55 € = 890 € + 550 € = <strong>1.440 €</strong>. B: 30 × 78 € = <strong>2.340 €</strong>. A bleibt deutlich günstiger (900 € Unterschied).</p>
        <p><strong>d)</strong> z. B. Reaktions- und Lösungszeiten im SLA, Erreichbarkeit/Servicezeiten, Qualifikation und Nähe des Dienstleisters (Vor-Ort-Einsätze), Datenschutz und Verschwiegenheit (Steuerberatung!), Vertragslaufzeit und Kündigungsfristen, Referenzen.</p>
        <p><strong>e)</strong> Kosten pro Ticket: 312.000 € ÷ 24.000 = <strong>13 €</strong>. Verlagerte Tickets: 24.000 × 0,15 = 3.600. Einsparung: 3.600 × (13 € − 2 €) = 39.600 € pro Jahr. Abzüglich Betrieb: 39.600 € − 4.800 € = <strong>34.800 € Nettoeinsparung pro Jahr</strong> (im ersten Jahr nach Abzug der Investition: 34.800 € − 25.000 € = 9.800 €). Amortisation: 25.000 € ÷ 34.800 €/Jahr ≈ 0,72 Jahre ≈ <strong>8,6 Monate</strong> → nach etwa 9 Monaten hat sich das Portal bezahlt gemacht.</p>`
    },
    {
      id: "e-opt-2",
      topic: "optimierung",
      title: "Kundenzufriedenheit auswerten und verbessern",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH hat nach Ticketabschluss eine Umfrage verschickt.</p>
        <p>a) 320 Kunden haben mit 1–5 Sternen bewertet: 5 Sterne: 140, 4 Sterne: 92, 3 Sterne: 48, 2 Sterne: 24, 1 Stern: 16. Berechne den CSAT, wenn 4 und 5 Sterne als „zufrieden“ gelten.</p>
        <p>b) Auf die Frage „Wie wahrscheinlich ist es, dass Sie uns weiterempfehlen?“ (0–10) antworteten 250 Kunden: 0–6 Punkte: 45, 7–8 Punkte: 80, 9–10 Punkte: 125. Berechne den Net Promoter Score.</p>
        <p>c) Der häufigste Kritikpunkt lautet „lange Wartezeit an der Hotline“. Plane eine Verbesserung nach dem PDCA-Zyklus.</p>
        <p>d) Nenne zwei weitere Methoden, um Kundenfeedback zu gewinnen.</p>`,
      solution: `<p><strong>a)</strong> Zufrieden: 140 + 92 = 232 → CSAT = 232 ÷ 320 × 100 = <strong>72,5 %</strong>.</p>
        <p><strong>b)</strong> Promotoren: 125 ÷ 250 = 50 %; Kritiker: 45 ÷ 250 = 18 %; NPS = 50 − 18 = <strong>+32</strong> (die 80 Passiven zählen nicht mit).</p>
        <p><strong>c)</strong> <em>Plan:</em> Ist-Wert messen (z. B. durchschnittliche Wartezeit 4 min), Ursachen analysieren (Anrufspitzen montags 8–10 Uhr, viele Passwortanrufe), Ziel festlegen (Ø unter 2 min). <em>Do:</em> Maßnahmen testweise umsetzen, z. B. Passwort-Self-Service einführen, Schichtplan an die Spitzen anpassen, Rückrufoption anbieten. <em>Check:</em> nach vier Wochen Wartezeit und Zufriedenheit erneut messen und mit dem Ziel vergleichen. <em>Act:</em> wirksame Maßnahmen dauerhaft einführen und dokumentieren; bei Zielverfehlung nachsteuern und einen neuen Zyklus starten.</p>
        <p><strong>d)</strong> z. B. jährliche Zufriedenheitsbefragung, Service-Review-Gespräche mit Kunden, systematische Auswertung von Beschwerden und Lob, Testanrufe (Mystery Calls), Feedback-Button im Self-Service-Portal.</p>`
    },
    {
      id: "e-kom-1",
      topic: "kommunikation",
      title: "Kundenaussagen mit Kommunikationsmodellen analysieren",
      level: 2,
      exam: ["AP1"],
      task: `<p>Eine Kundin ruft an: „Ich habe Ihnen schon dreimal gesagt, dass mein Outlook ständig abstürzt!“</p>
        <p>a) Analysiere die Aussage mit dem Vier-Seiten-Modell nach Schulz von Thun.</p>
        <p>b) Der Supporter antwortet: „Dann haben Sie wohl wieder ein falsches Add-in installiert.“ Mit welchem Ohr hat er vor allem gehört, und wie wirkt seine Antwort? Formuliere eine bessere Antwort als Ich-Botschaft.</p>
        <p>c) Ordne jeweils ein Axiom nach Watzlawick zu: (1) Ein Supporter beantwortet eine Kundenmail tagelang nicht; der Kunde fühlt sich ignoriert. (2) „Natürlich helfe ich Ihnen gern“ – mit hörbar genervtem Seufzer. (3) Kunde: „Ich rufe so oft an, weil ihr nie zurückruft.“ Support: „Wir rufen nicht zurück, weil er sowieso ständig anruft.“ (4) Zwei gleichrangige Administratoren wollen beide recht behalten und schaukeln sich hoch.</p>
        <p>d) Formuliere zwei offene und zwei geschlossene Fragen, um den Outlook-Fehler einzugrenzen.</p>`,
      solution: `<p><strong>a)</strong> <em>Sachinhalt:</em> Outlook stürzt häufig ab, das Problem wurde bereits dreimal gemeldet. <em>Selbstkundgabe:</em> Ich bin verärgert und fühle mich nicht ernst genommen. <em>Beziehung:</em> Ihr hört mir nicht zu bzw. kümmert euch nicht richtig. <em>Appell:</em> Löst das Problem jetzt endlich dauerhaft!</p>
        <p><strong>b)</strong> Er hat vor allem mit dem <strong>Beziehungsohr</strong> gehört (Vorwurf) und kontert mit einem Gegenvorwurf (Du-Botschaft). Das verschärft den Konflikt, weil die Kundin sich beschuldigt fühlt. Besser: „Ich verstehe, dass es sehr ärgerlich ist, wenn der Fehler immer wieder auftritt. Ich möchte die Ursache diesmal gründlich finden – dafür schaue ich mir jetzt Ihre bisherigen Tickets an und stelle Ihnen ein paar Fragen.“</p>
        <p><strong>c)</strong> (1) Axiom 1: Man kann nicht nicht kommunizieren – auch Schweigen ist eine Botschaft. (2) Axiom 4: digitale (Worte) und analoge (Tonfall) Kommunikation widersprechen sich. (3) Axiom 3: Interpunktion – beide sehen den Anfang der Kette beim anderen. (4) Axiom 5: symmetrische Kommunikation unter Gleichrangigen, die eskaliert.</p>
        <p><strong>d)</strong> Offen: „Was tun Sie gerade, wenn Outlook abstürzt?“ · „Welche Fehlermeldung erscheint genau?“ Geschlossen: „Tritt der Fehler auch auf, wenn Sie Outlook im abgesicherten Modus starten?“ · „Haben Sie in den letzten Tagen ein neues Programm oder Add-in installiert?“</p>`
    },
    {
      id: "e-kom-2",
      topic: "kommunikation",
      title: "Telefonat mit dem Sender-Empfänger-Modell untersuchen",
      level: 1,
      exam: ["AP1"],
      task: `<p>Frau Jensen vom Service Desk der Nordlicht IT GmbH telefoniert mit einem Kunden, der seine E-Mails nicht abrufen kann. Beim Kunden läuft im Hintergrund ein Radio, seine Handyverbindung bricht zweimal kurz ab. Frau Jensen sagt: „Prüfen Sie bitte, ob der IMAP-Port in Ihrem Client auf 993 mit SSL/TLS steht.“ Der Kunde antwortet zögernd: „Äh … ja, mach ich.“ Frau Jensen spricht schnell und klingt gehetzt, weil noch fünf Anrufe warten.</p>
        <p>a) Ordne Sender, Empfänger, Nachricht, Kanal sowie Codierung und Decodierung dem Gespräch zu.</p>
        <p>b) Nenne vier Störquellen in diesem Gespräch und je eine Gegenmaßnahme.</p>
        <p>c) Verbal, paraverbal oder nonverbal? (1) die Worte „IMAP-Port auf 993“, (2) das schnelle, gehetzte Sprechen, (3) das zögernde „Äh …“, (4) Frau Jensen verschränkt beim Telefonieren genervt die Arme.</p>
        <p>d) Formuliere eine Rückfrage, mit der Frau Jensen prüft, ob ihre Nachricht richtig angekommen ist, und begründe deine Wahl.</p>`,
      solution: `<p><strong>a)</strong> Sender: Frau Jensen · Empfänger: der Kunde · Nachricht: Aufforderung, Port und Verschlüsselung des E-Mail-Kontos zu prüfen · Kanal: Telefon (Mobilfunk) · Codierung: Frau Jensen fasst ihre Anweisung in Fachbegriffe · Decodierung: Der Kunde muss „IMAP-Port 993 mit SSL/TLS“ verstehen – ihm fehlt dafür der gemeinsame Zeichenvorrat, wie sein unsicheres Feedback zeigt.</p>
        <p><strong>b)</strong> (1) Fachjargon → einfache Sprache, Schritt für Schritt anleiten („Klicken Sie oben links auf ‚Datei‘ …“) oder Fernwartung anbieten. (2) Radio im Hintergrund → freundlich bitten, es leiser zu stellen. (3) Instabile Handyverbindung → Rückruf über das Festnetz anbieten. (4) Zeitdruck und schnelles Sprechen → bewusst langsam und ruhig sprechen; die Warteschlange darf das Gespräch nicht bestimmen. (5) Unsicherheit des Kunden → Kontrollfragen stellen, Ergebnis zusammenfassen.</p>
        <p><strong>c)</strong> (1) verbal · (2) paraverbal · (3) paraverbal (Füllwort, zögernder Tonfall) · (4) nonverbal – der Kunde sieht es zwar nicht, aber die Haltung färbt oft hörbar auf die Stimme ab.</p>
        <p><strong>d)</strong> Zum Beispiel: „Damit wir sicher sind, dass es klappt: Welche Zahl steht bei Ihnen jetzt im Feld ‚Port‘?“ Eine offene Kontrollfrage zwingt zu einer inhaltlichen Rückmeldung. Die geschlossene Frage „Haben Sie das verstanden?“ lädt dagegen zu einem unsicheren „Ja“ ein und deckt Missverständnisse nicht auf.</p>`
    },
    {
      id: "e-konf-1",
      topic: "konflikte",
      title: "Beschwerdeanruf deeskalieren",
      level: 3,
      exam: ["AP1"],
      task: `<p>Der Geschäftsführer der Westküsten Mobil GmbH, einem Kunden der Nordlicht IT GmbH, ruft laut und schnell sprechend an: „Zum dritten Mal diese Woche fällt unser Werkstattsystem aus! Ich will sofort einen Techniker hier haben, sonst kündige ich den Vertrag. Für Ihre Fragen habe ich keine Zeit!“</p>
        <p>a) Ordne das Verhalten einem DISG-Typ zu, begründe und leite eine passende Gesprächsstrategie ab. (4 Punkte)</p>
        <p>b) Ordne die Aussage einer Eskalationsstufe nach Glasl zu und begründe. (3 Punkte)</p>
        <p>c) Beschreibe fünf Schritte zur Deeskalation mit je einer Beispielformulierung. (5 Punkte)</p>
        <p>d) Formuliere die Du-Botschaften in Ich-Botschaften um: (1) „Sie haben schon wieder die Anleitung nicht gelesen.“ (2) „Sie müssen mir schon sagen, was genau nicht geht.“ (2 Punkte)</p>
        <p>e) Nenne zwei Maßnahmen, damit die Beschwerde langfristig zu einer Verbesserung führt. (2 Punkte)</p>`,
      solution: `<p><strong>a)</strong> Das Verhalten passt zum <strong>D-Typ (dominant)</strong>: direkt, fordernd, ergebnisorientiert, ungeduldig („keine Zeit für Fragen“), aktiv und aufgabenorientiert. Strategie: kurz und sachlich bleiben, nicht ausschweifen, sofort sagen, was konkret passiert, nur die nötigsten Fragen stellen und begründen („Damit der Techniker das richtige Ersatzteil mitbringt, brauche ich zwei Angaben“), ihm Optionen zur Entscheidung anbieten.</p>
        <p><strong>b)</strong> Die Aussage enthält ein Ultimatum („sofort …, sonst kündige ich“) und entspricht damit der Stufe <strong>6 – Drohstrategien</strong> auf der Ebene win-lose. Der Kunde versucht, durch Druck seine Forderung durchzusetzen; ohne schnelle, glaubwürdige Reaktion droht der Verlust des Kunden.</p>
        <p><strong>c)</strong></p>
        <ol>
          <li><strong>Ruhig bleiben und ausreden lassen</strong> – nicht unterbrechen, ruhiger Ton: „Ich höre Ihnen zu.“</li>
          <li><strong>Verständnis zeigen</strong>: „Ich verstehe, dass drei Ausfälle in einer Woche Ihren Werkstattbetrieb massiv stören.“</li>
          <li><strong>Auf die Sache lenken und zusammenfassen</strong>: „Das Werkstattsystem ist seit heute Morgen nicht erreichbar, alle Arbeitsplätze sind betroffen – richtig?“</li>
          <li><strong>Konkrete Lösung bzw. nächsten Schritt zusagen</strong>: „Ich stufe das als Priorität 1 ein; ein Techniker ist in 45 Minuten bei Ihnen, bis dahin prüfen wir den Server per Fernzugriff.“</li>
          <li><strong>Nachfassen</strong>: „Ich rufe Sie um 11 Uhr mit dem aktuellen Stand an.“ – und den Rückruf auch einhalten.</li>
        </ol>
        <p><strong>d)</strong> (1) „Ich habe den Eindruck, dass die Anleitung noch nicht klar genug ist – darf ich Ihnen die Schritte kurz zeigen?“ (2) „Ich brauche noch etwas mehr Information, um den Fehler zu finden. Was genau sehen Sie auf dem Bildschirm?“</p>
        <p><strong>e)</strong> Wegen der wiederholten Ausfälle ein <strong>Problem-Ticket</strong> anlegen und die Ursache dauerhaft beseitigen; Beschwerde dokumentieren und im <strong>Service-Review</strong> mit dem Kunden auswerten (ggf. SLA, Monitoring oder Redundanz anpassen); nach der Lösung aktiv nachfragen, ob der Kunde zufrieden ist.</p>`
    },
    {
      id: "e-epk-1",
      topic: "epk",
      title: "EPK für eine Hardwareanforderung erstellen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Modelliere folgenden Ablauf der Nordlicht IT GmbH als eEPK:</p>
        <p>„Geht eine Hardwareanforderung eines Mitarbeiters über das Self-Service-Portal ein, prüft der <em>Service Desk</em> anhand des <em>Service-Katalogs</em>, ob das Gerät freigegeben ist. Ist es nicht freigegeben, lehnt der Service Desk die Anforderung ab. Ist es freigegeben, bestellt der <em>Einkauf</em> das Gerät beim Lieferanten. Sobald das Gerät geliefert ist, richtet der <em>2nd Level</em> es ein und gleichzeitig erfasst der Service Desk es in der <em>CMDB</em>. Wenn beides erledigt ist, übergibt der 2nd Level das Gerät an den Mitarbeiter.“</p>
        <p>a) Erstelle die EPK mit allen Ereignissen, Funktionen und Konnektoren.</p>
        <p>b) Ergänze Organisationseinheiten und Informationsobjekte (eEPK).</p>
        <p>c) Begründe, warum nach „Gerät ist geliefert“ ein UND-Konnektor stehen darf, ein XOR-Konnektor dort aber falsch wäre.</p>`,
      solution: `<pre class="ascii">              ⬡ Hardwareanforderung ist eingegangen
                              │
 (|Service Desk)──[ Freigabe prüfen ]──▭ Service-Katalog
                              │
                            (XOR)
              ┌───────────────┴───────────────┐
 ⬡ Gerät ist nicht freigegeben     ⬡ Gerät ist freigegeben
              │                               │
 [ Anforderung ablehnen ]──(|SD)    [ Gerät bestellen ]──(|Einkauf)
              │                               │
 ⬡ Anforderung ist abgelehnt        ⬡ Gerät ist geliefert
                                              │
                                             (∧)
                              ┌───────────────┴───────────────┐
    (|2nd Level)──[ Gerät einrichten ]      [ Gerät in CMDB erfassen ]──(|SD) ──▭ CMDB
                              │                               │
                 ⬡ Gerät ist eingerichtet        ⬡ Gerät ist erfasst
                              └───────────────┬───────────────┘
                                             (∧)
                                              │
                   (|2nd Level)──[ Gerät übergeben ]
                                              │
                                  ⬡ Gerät ist übergeben
(|SD) = Organisationseinheit Service Desk · ▭ = Informationsobjekt</pre>
        <p><strong>a/b)</strong> Die Skizze zeigt Start- und Endereignisse, den Wechsel von Ereignissen und Funktionen, die XOR-Entscheidung nach der Funktion „Freigabe prüfen“ sowie die parallelen Tätigkeiten mit UND-Split und UND-Join. Organisationseinheiten: Service Desk, Einkauf, 2nd Level; Informationsobjekte: Service-Katalog (gelesen), CMDB (geschrieben).</p>
        <p><strong>c)</strong> Ein Ereignis kann nichts entscheiden. Ein XOR (oder ODER) direkt nach einem Ereignis würde bedeuten, dass das Ereignis selbst eine Auswahl trifft – das ist nach den EPK-Regeln unzulässig. Ein UND-Split nach einem Ereignis ist dagegen erlaubt: Das Ereignis „Gerät ist geliefert“ löst einfach beide folgenden Funktionen parallel aus; eine Entscheidung ist nicht nötig.</p>`
    },
    {
      id: "e-epk-2",
      topic: "epk",
      title: "Fehler in einer EPK finden und korrigieren",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Ein Auszubildender hat den folgenden Störungsprozess als EPK modelliert:</p>
        <pre class="ascii">          ⬡ Störung ist gemeldet
                    │
                  (XOR)
          ┌─────────┴──────────┐
 [ Ticket erfassen ]    [ Rückruf vereinbaren ]
          │                    │
 [ Störung analysieren ]  ⬡ Rückruf ist vereinbart
          │                    │
 ⬡ Ursache ist bekannt         │
          └─────────┬──────────┘
                   (∧)
                    │
           [ Störung beheben ]
                    │
           [ Ticket schließen ]</pre>
        <p>a) Finde fünf Verstöße gegen die Modellierungsregeln und begründe sie. (5 Punkte)</p>
        <p>b) Skizziere eine korrigierte Fassung. (5 Punkte)</p>`,
      hints: ["Prüfe: Wer entscheidet? Wechseln sich Ereignisse und Funktionen ab? Passt der schließende Konnektor? Gibt es ein Endereignis?"],
      solution: `<p><strong>a)</strong></p>
        <ol>
          <li>Die <strong>XOR-Verzweigung folgt direkt auf ein Ereignis</strong> („Störung ist gemeldet“). Ereignisse können nicht entscheiden; vor dem XOR muss eine Funktion stehen, z. B. „Meldung prüfen“.</li>
          <li>„Ticket erfassen“ und „Störung analysieren“ folgen <strong>direkt aufeinander</strong> – es fehlt das Ereignis „Ticket ist erfasst“.</li>
          <li>Der mit <strong>XOR geöffnete</strong> Zweig wird mit <strong>UND geschlossen</strong>. Da nur ein Pfad durchlaufen wird, würde der UND-Konnektor ewig auf den zweiten warten; er muss ebenfalls XOR sein.</li>
          <li>„Störung beheben“ und „Ticket schließen“ folgen direkt aufeinander – es fehlt das Ereignis „Störung ist behoben“.</li>
          <li>Es fehlt ein <strong>Endereignis</strong>; eine EPK muss mit einem Ereignis enden, z. B. „Ticket ist geschlossen“.</li>
        </ol>
        <p><strong>b)</strong></p>
        <pre class="ascii">            ⬡ Störung ist gemeldet
                      │
             [ Meldung prüfen ]
                      │
                    (XOR)
          ┌───────────┴────────────┐
 ⬡ Sofortbearbeitung       ⬡ Rückruf ist nötig
   ist möglich                     │
          │               [ Rückruf vereinbaren ]
 [ Ticket erfassen ]               │
          │               ⬡ Rückruf ist vereinbart
 ⬡ Ticket ist erfasst              │
          │               [ Störung im Rückruf
 [ Störung analysieren ]    analysieren ]
          │                        │
          └───────────┬────────────┘
                    (XOR)
                      │
            ⬡ Ursache ist bekannt
                      │
             [ Störung beheben ]
                      │
            ⬡ Störung ist behoben
                      │
             [ Ticket schließen ]
                      │
            ⬡ Ticket ist geschlossen</pre>
        <p>Die beiden Funktionen „Störung analysieren“ bzw. „Störung im Rückruf analysieren“ werden per XOR zusammengeführt und münden in das gemeinsame Ereignis „Ursache ist bekannt“; so bleibt der Wechsel von Funktionen und Ereignissen erhalten.</p>`
    },
    {
      id: "e-bpmn-1",
      topic: "bpmn-uml",
      title: "BPMN-Elemente für einen Bestellprozess auswählen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Kanzlei Deichblick bestellt bei der Nordlicht IT GmbH per E-Mail einen neuen Arbeitsplatz. Bei Nordlicht prüft der <em>Vertrieb</em>, ob das Gerät auf Lager ist. Falls nicht, wird es bestellt und man wartet auf die Lieferung (maximal 3 Tage). Danach schreibt der Vertrieb die Rechnung, während gleichzeitig die <em>Technik</em> das Gerät einrichtet. Zum Schluss liefert die Technik den Arbeitsplatz aus und die Kanzlei erhält eine Auslieferungsnachricht.</p>
        <p>a) Welche Pools und Lanes benötigst du?</p>
        <p>b) Nenne das passende BPMN-Element für: (1) Start durch eingehende E-Mail, (2) „Gerät auf Lager?“, (3) Warten auf die Lieferung, (4) Rechnung schreiben und Gerät einrichten gleichzeitig, (5) Auslieferungsnachricht an die Kanzlei, (6) Prozessende.</p>
        <p>c) Begründe, warum zwischen der Kanzlei und Nordlicht kein Sequenzfluss gezeichnet werden darf.</p>
        <p>d) Skizziere den Ablauf im Pool von Nordlicht in einer einfachen Textnotation.</p>`,
      solution: `<p><strong>a)</strong> Zwei Pools: „Kanzlei Deichblick“ und „Nordlicht IT GmbH“. Im Pool von Nordlicht zwei Lanes: „Vertrieb“ und „Technik“. Der Pool der Kanzlei kann zugeklappt (als leerer Pool) dargestellt werden.</p>
        <p><strong>b)</strong> (1) Nachrichten-Startereignis (Kreis mit Briefumschlag) mit eingehendem Nachrichtenfluss · (2) exklusives Gateway (Raute mit X) nach der Aufgabe „Lagerbestand prüfen“ · (3) Nachrichten-Zwischenereignis „Lieferung eingegangen“ (bzw. Timer-Zwischenereignis für die Frist von 3 Tagen) · (4) paralleles Gateway (Raute mit +) zum Aufteilen und ein zweites zum Zusammenführen · (5) Nachrichtenfluss (gestrichelte Linie) von der Aufgabe bzw. einem Nachrichten-Endereignis zum Pool der Kanzlei · (6) Endereignis (Kreis mit dickem Rand).</p>
        <p><strong>c)</strong> Kanzlei und Nordlicht sind eigenständige Beteiligte mit eigenen Prozessen (eigene Pools). Sequenzfluss beschreibt die Reihenfolge innerhalb eines Prozesses und darf Pool-Grenzen nicht überschreiten; der Austausch zwischen Organisationen wird ausschließlich als Nachrichtenfluss dargestellt.</p>
        <p><strong>d)</strong></p>
        <pre class="ascii">Vertrieb: (✉ Bestellung) → [Lagerbestand prüfen] → &lt;X&gt; auf Lager?
            nein → [Gerät bestellen] → (◎ Lieferung eingegangen) ─┐
            ja ───────────────────────────────────────────────────┴→ &lt;X&gt; → &lt;+&gt;
          &lt;+&gt; → [Rechnung schreiben] ───────────────────────────┐
Technik:  &lt;+&gt; → [Gerät einrichten] ─────────────────────────────┴→ &lt;+&gt; → [Arbeitsplatz ausliefern] → (●✉ Auslieferung gemeldet)</pre>`
    },
    {
      id: "e-uc-1",
      topic: "bpmn-uml",
      title: "Use-Case-Diagramm für ein Self-Service-Portal",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH beschreibt ihr neues Self-Service-Portal so:</p>
        <p>„Anwender können Störungen melden, Artikel aus dem Service-Katalog bestellen und den Ticketstatus abfragen. Für alle drei Funktionen müssen sie sich anmelden. Ist ein bestellter Artikel kostenpflichtig, wird zusätzlich eine Genehmigung angefordert. Führungskräfte können alles, was Anwender können, und außerdem Bestellungen genehmigen. Das Monitoring-System meldet Störungen automatisch über das Portal.“</p>
        <p>a) Nenne alle Akteure und Anwendungsfälle.</p>
        <p>b) Erstelle das Use-Case-Diagramm mit Systemgrenze, Assoziationen, «include», «extend» und Generalisierung.</p>
        <p>c) Begründe, warum „Anmelden“ per «include», „Genehmigung anfordern“ dagegen per «extend» angebunden wird.</p>`,
      solution: `<p><strong>a)</strong> Akteure: Anwender, Führungskraft (Spezialisierung des Anwenders), Monitoring-System (externes System). Anwendungsfälle: Störung melden, Artikel bestellen, Ticketstatus abfragen, Anmelden, Genehmigung anfordern, Bestellung genehmigen.</p>
        <p><strong>b)</strong></p>
        <pre class="ascii">                 ┌──────────── Self-Service-Portal ──────────────────────┐
  O              │                                                       │
 /|\\ Anwender ───┼── ( Störung melden ) ┄┄┄┄┄┄┄«include»┄┄┄┄┄┐           │
 / \\  │    │     │                                           ▼           │
      │    └─────┼── ( Artikel bestellen ) ┄«include»┄▶ ( Anmelden )     │
      │          │          ▲                                ▲           │
      └──────────┼── ( Ticketstatus abfragen ) ┄«include»┄┄┄┄┘           │
  △              │          ┆ «extend» [Artikel ist kostenpflichtig]     │
  │              │    ( Genehmigung anfordern )                          │
  O              │                                                       │
 /|\\ Führungs- ──┼── ( Bestellung genehmigen )                           │
 / \\ kraft       │                                                       │
  O              │                                                       │
 /|\\ Monitoring-─┼── ( Störung melden ) – dieselbe Ellipse wie oben      │
 / \\ System      │                                                       │
                 └───────────────────────────────────────────────────────┘</pre>
        <p>Die Generalisierung (△ zeigt zum allgemeinen Akteur „Anwender“) sorgt dafür, dass die Führungskraft alle Anwendungsfälle des Anwenders erbt. Akteure stehen außerhalb, Anwendungsfälle innerhalb der Systemgrenze.</p>
        <p><strong>c)</strong> „Anmelden“ ist bei allen drei Funktionen <strong>immer</strong> nötig – der Basis-Anwendungsfall bindet ihn verpflichtend ein, daher «include» (Pfeil vom Basisfall zu „Anmelden“). „Genehmigung anfordern“ wird nur <strong>unter einer Bedingung</strong> ausgeführt (Artikel ist kostenpflichtig) und erweitert den Basisfall „Artikel bestellen“ optional, daher «extend» (Pfeil vom erweiternden Fall zum Basisfall, mit Bedingung).</p>`
    },
    {
      id: "e-notation-1",
      topic: "bpmn-uml",
      title: "Leihgeräte-Ausgabe als UML-Aktivitätsdiagramm und im Notationsvergleich",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH verleiht Notebooks an Beschäftigte ihrer Kunden. Ablauf: „Eine Anwenderin beantragt im Self-Service-Portal ein Leih-Notebook. Der <em>Service Desk</em> prüft, ob ein Gerät frei ist. Ist keins frei, sendet der Service Desk eine Absage, und der Ablauf endet. Ist ein Gerät frei, erstellt der Service Desk den Leihvertrag, während gleichzeitig der <em>2nd Level</em> das Notebook vorbereitet. Sind beide Tätigkeiten erledigt, übergibt der Service Desk das Gerät.“</p>
        <p>a) Skizziere ein UML-Aktivitätsdiagramm mit den Schwimmbahnen Anwender, Service Desk und 2nd Level. (6 Punkte)</p>
        <p>b) Gib für die Entscheidung „Gerät frei?“ und für die gleichzeitigen Tätigkeiten jeweils das passende Element in EPK, BPMN 2.0 und UML-Aktivitätsdiagramm an. (3 Punkte)</p>
        <p>c) Nordlicht will zusätzlich zeigen, wie mit dem externen Lieferanten der Leihgeräte Nachrichten ausgetauscht werden. Welche Notation eignet sich am besten? Begründe. (2 Punkte)</p>
        <p>d) In ihrer EPK-Fassung setzt eine Kollegin direkt hinter das Ereignis „Antrag ist eingegangen“ einen XOR-Konnektor. Beurteile das. (2 Punkte)</p>`,
      hints: ["Startknoten = gefüllter Kreis, Endknoten = Kreis mit Punkt, Parallelität = Balken, Entscheidung = Raute mit [Bedingungen]."],
      solution: `<p><strong>a)</strong> Beispiel-Skizze:</p>
        <pre class="ascii">Bahn Anwender      ●  Startknoten
                   │
Bahn Anwender      (Leih-Notebook im Portal beantragen)
                   │
Bahn Service Desk  (Verfügbarkeit prüfen)
                   │
                   ◇ ──[kein Gerät frei]──▶ (Absage senden) ──▶ ◉
                   │
              [Gerät frei]
                   │
        ━━━━━━━━━━━┻━━━━━━━━━━━  Gabelung
        │                     │
 Bahn Service Desk      Bahn 2nd Level
 (Leihvertrag           (Notebook
  erstellen)             vorbereiten)
        │                     │
        ━━━━━━━━━━━┳━━━━━━━━━━━  Synchronisation
                   │
Bahn Service Desk  (Gerät übergeben)
                   │
                   ◉  Endknoten

● Start · ◉ Ende · ( ) Aktion · ◇ Entscheidung mit [Bedingung] · ━ Gabelung/Synchronisation</pre>
        <p>Bewertet werden: Start- und Endknoten, alle sechs Aktionen (beantragen, Verfügbarkeit prüfen, Absage senden, Leihvertrag erstellen, Notebook vorbereiten, Gerät übergeben) in der richtigen Schwimmbahn, Entscheidungsknoten mit zwei eindeutigen Bedingungen, Gabelung und Synchronisation um die beiden parallelen Aktionen.</p>
        <p><strong>b)</strong></p>
        <table><thead><tr><th></th><th>EPK</th><th>BPMN 2.0</th><th>UML-Aktivitätsdiagramm</th></tr></thead><tbody>
          <tr><td>Entscheidung „Gerät frei?“</td><td>XOR-Konnektor nach der Funktion „Verfügbarkeit prüfen“, danach die Ereignisse „Gerät ist frei“ / „Kein Gerät ist frei“</td><td>exklusives Gateway (Raute mit X), ausgehende Pfade mit „ja“/„nein“ beschriftet</td><td>Entscheidungsknoten (Raute) mit den Bedingungen [Gerät frei] und [kein Gerät frei]</td></tr>
          <tr><td>gleichzeitige Tätigkeiten</td><td>UND-Konnektor zum Aufteilen und zum Zusammenführen</td><td>paralleles Gateway (Raute mit +) zum Aufteilen und zum Zusammenführen</td><td>Gabelung und Synchronisation (Balken)</td></tr>
        </tbody></table>
        <p><strong>c)</strong> <strong>BPMN 2.0</strong>: Nordlicht und der Lieferant werden als eigene Pools dargestellt, der Austausch von Bestellung und Lieferavis als Nachrichtenfluss zwischen den Pools. In der EPK lässt sich die Zusammenarbeit mehrerer Unternehmen kaum darstellen, und das Aktivitätsdiagramm bietet dafür nur eingeschränkte Mittel.</p>
        <p><strong>d)</strong> Das ist ein Modellierungsfehler. Ein Ereignis ist ein passiver Zustand und kann nichts entscheiden; auf ein Ereignis darf deshalb kein XOR- (oder ODER-)Split folgen. Richtig ist: Ereignis „Antrag ist eingegangen“ → Funktion „Verfügbarkeit prüfen“ → XOR-Konnektor → Ereignisse „Gerät ist frei“ bzw. „Kein Gerät ist frei“.</p>`
    },
    {
      id: "e-np-1",
      topic: "netzplan-gantt",
      title: "Netzplan für einen Arbeitsplatz-Rollout berechnen",
      level: 3,
      exam: ["AP1"],
      task: `<p>Die Nordlicht IT GmbH erneuert bei der Westküsten Logistik GmbH in Husum 60 Arbeitsplätze. Vorgangsliste (Dauer in Arbeitstagen):</p>
        <table><thead><tr><th>Vorgang</th><th>Beschreibung</th><th>Dauer</th><th>Vorgänger</th></tr></thead><tbody>
          <tr><td>A</td><td>Bestandsaufnahme</td><td>2</td><td>–</td></tr>
          <tr><td>B</td><td>Hardware bestellen und liefern lassen</td><td>8</td><td>A</td></tr>
          <tr><td>C</td><td>Image erstellen und testen</td><td>5</td><td>A</td></tr>
          <tr><td>D</td><td>Netzwerkdosen erweitern</td><td>4</td><td>A</td></tr>
          <tr><td>E</td><td>Geräte vorkonfigurieren (Staging)</td><td>3</td><td>B, C</td></tr>
          <tr><td>F</td><td>Aufstellen und anschließen</td><td>4</td><td>D, E</td></tr>
          <tr><td>G</td><td>Datenmigration</td><td>2</td><td>E</td></tr>
          <tr><td>H</td><td>Anwenderschulung</td><td>3</td><td>F</td></tr>
          <tr><td>I</td><td>Abnahme</td><td>1</td><td>G, H</td></tr>
        </tbody></table>
        <p>a) Führe die Vorwärts- und Rückwärtsrechnung durch und bestimme für alle Vorgänge FAZ, FEZ, SAZ, SEZ, GP und FP. (8 Punkte)</p>
        <p>b) Gib den kritischen Pfad und die Projektdauer an. (2 Punkte)</p>
        <p>c) Projektstart ist Montag, 05.10.2026. Gearbeitet wird Mo–Fr. Bestimme den Endtermin. (2 Punkte)</p>
        <p>d) Der Lieferant meldet, dass sich die Lieferung (B) um 2 Tage verzögert. Welche Auswirkung hat das? (2 Punkte)</p>
        <p>e) Die Erweiterung der Netzwerkdosen (D) dauert 5 Tage länger als geplant. Welche Auswirkung hat das? (2 Punkte)</p>
        <p>f) Schlage zwei Maßnahmen vor, um die Verzögerung aus d) aufzuholen. (2 Punkte)</p>`,
      hints: ["FAZ des Startvorgangs = 0; bei mehreren Vorgängern den größten FEZ nehmen.", "Rückwärts: SEZ = kleinster SAZ der Nachfolger."],
      solution: `<p><strong>a)</strong> Vorwärts: A 0–2 · B 2–10 · C 2–7 · D 2–6 · E: FAZ = max(10; 7) = 10, FEZ 13 · F: FAZ = max(6; 13) = 13, FEZ 17 · G: 13–15 · H: 17–20 · I: FAZ = max(15; 20) = 20, FEZ 21.<br>
        Rückwärts: I: SEZ 21, SAZ 20 · H: SEZ 20, SAZ 17 · G: SEZ = SAZ(I) = 20, SAZ 18 · F: SEZ = SAZ(H) = 17, SAZ 13 · E: SEZ = min(SAZ F 13; SAZ G 18) = 13, SAZ 10 · D: SEZ = SAZ(F) = 13, SAZ 9 · C: SEZ = SAZ(E) = 10, SAZ 5 · B: SEZ 10, SAZ 2 · A: SEZ = min(2; 5; 9) = 2, SAZ 0.</p>
        <table><thead><tr><th>Vorgang</th><th>Dauer</th><th>FAZ</th><th>FEZ</th><th>SAZ</th><th>SEZ</th><th>GP</th><th>FP</th></tr></thead><tbody>
          <tr><td>A</td><td>2</td><td>0</td><td>2</td><td>0</td><td>2</td><td>0</td><td>0</td></tr>
          <tr><td>B</td><td>8</td><td>2</td><td>10</td><td>2</td><td>10</td><td>0</td><td>0</td></tr>
          <tr><td>C</td><td>5</td><td>2</td><td>7</td><td>5</td><td>10</td><td>3</td><td>3</td></tr>
          <tr><td>D</td><td>4</td><td>2</td><td>6</td><td>9</td><td>13</td><td>7</td><td>7</td></tr>
          <tr><td>E</td><td>3</td><td>10</td><td>13</td><td>10</td><td>13</td><td>0</td><td>0</td></tr>
          <tr><td>F</td><td>4</td><td>13</td><td>17</td><td>13</td><td>17</td><td>0</td><td>0</td></tr>
          <tr><td>G</td><td>2</td><td>13</td><td>15</td><td>18</td><td>20</td><td>5</td><td>5</td></tr>
          <tr><td>H</td><td>3</td><td>17</td><td>20</td><td>17</td><td>20</td><td>0</td><td>0</td></tr>
          <tr><td>I</td><td>1</td><td>20</td><td>21</td><td>20</td><td>21</td><td>0</td><td>0</td></tr>
        </tbody></table>
        <p>Freie Puffer, z. B. C: FAZ(E) − FEZ(C) = 10 − 7 = 3; D: FAZ(F) − FEZ(D) = 13 − 6 = 7; G: FAZ(I) − FEZ(G) = 20 − 15 = 5.</p>
        <p><strong>b)</strong> Kritischer Pfad: <strong>A → B → E → F → H → I</strong> (2 + 8 + 3 + 4 + 3 + 1 = <strong>21 Arbeitstage</strong>).</p>
        <p><strong>c)</strong> Tag 1 = Mo 05.10. → Tag 5 = Fr 09.10., Tag 10 = Fr 16.10., Tag 15 = Fr 23.10., Tag 20 = Fr 30.10., Tag 21 = <strong>Montag, 02.11.2026</strong>. (Der Reformationstag am 31.10. – in Schleswig-Holstein ein Feiertag – fällt 2026 auf einen Samstag und verschiebt nichts.)</p>
        <p><strong>d)</strong> B liegt auf dem kritischen Pfad (GP = 0). Jede Verzögerung verschiebt das Projektende direkt: 21 + 2 = <strong>23 Arbeitstage</strong>, Ende am Mittwoch, 04.11.2026.</p>
        <p><strong>e)</strong> D hat einen Gesamtpuffer und einen freien Puffer von 7 Tagen. Eine Verzögerung um 5 Tage wird vollständig durch den Puffer aufgefangen: weder der Nachfolger F noch das Projektende verschieben sich (neuer FEZ von D = 11 ≤ FAZ von F = 13).</p>
        <p><strong>f)</strong> Vorgänge auf dem kritischen Pfad verkürzen, z. B. das Staging (E) mit zusätzlichen Technikern oder im Schichtbetrieb durchführen; beim Aufstellen (F) mehr Personal einsetzen; die Schulung (H) teilweise parallel zu F beginnen (Abhängigkeit lockern, z. B. Schulung der zuerst ausgestatteten Abteilungen); ggf. mit dem Lieferanten eine Teillieferung vereinbaren, damit das Staging früher starten kann.</p>`
    },
    {
      id: "e-np-2",
      topic: "netzplan-gantt",
      title: "Fehler in einem Netzplan finden",
      level: 3,
      exam: ["AP1"],
      task: `<p>Ein Kollege hat für die Einführung eines Monitoring-Systems bei der Husumer Hafenlogistik GmbH folgenden Netzplan berechnet (Dauer in Tagen):</p>
        <table><thead><tr><th>Vorgang</th><th>Beschreibung</th><th>Dauer</th><th>Vorgänger</th><th>FAZ</th><th>FEZ</th><th>SAZ</th><th>SEZ</th><th>GP</th><th>FP</th></tr></thead><tbody>
          <tr><td>A</td><td>Ist-Analyse</td><td>4</td><td>–</td><td>0</td><td>4</td><td>0</td><td>4</td><td>0</td><td>0</td></tr>
          <tr><td>B</td><td>Monitoring-Server aufsetzen</td><td>6</td><td>A</td><td>4</td><td>10</td><td>5</td><td>10</td><td>1</td><td>0</td></tr>
          <tr><td>C</td><td>Agentenpaket erstellen</td><td>3</td><td>A</td><td>4</td><td>7</td><td>10</td><td>13</td><td>6</td><td>6</td></tr>
          <tr><td>D</td><td>Schwellwerte und Alarme konfigurieren</td><td>5</td><td>B</td><td>10</td><td>15</td><td>10</td><td>15</td><td>0</td><td>0</td></tr>
          <tr><td>E</td><td>Agenten verteilen</td><td>2</td><td>C</td><td>7</td><td>9</td><td>12</td><td>15</td><td>5</td><td>6</td></tr>
          <tr><td>F</td><td>Testlauf</td><td>4</td><td>D, E</td><td>15</td><td>19</td><td>15</td><td>19</td><td>0</td><td>0</td></tr>
          <tr><td>G</td><td>Übergabe und Dokumentation</td><td>2</td><td>F</td><td>19</td><td>21</td><td>19</td><td>21</td><td>0</td><td>0</td></tr>
        </tbody></table>
        <p>a) Der Netzplan enthält in drei Vorgängen Fehler. Finde sie, begründe und korrigiere die Werte. (6 Punkte)</p>
        <p>b) Gib den korrekten kritischen Pfad und die Projektdauer an. (2 Punkte)</p>
        <p>c) Das Agentenpaket (C) dauert 4 Tage länger. Beurteile die Auswirkungen auf E und auf das Projektende. (2 Punkte)</p>`,
      hints: ["Prüfe jede Zeile: FEZ = FAZ + Dauer, SAZ = SEZ − Dauer, GP = SAZ − FAZ, FP = FAZ(Nachfolger) − FEZ."],
      solution: `<p><strong>a)</strong></p>
        <ol>
          <li><strong>Vorgang B:</strong> SAZ = SEZ − Dauer = 10 − 6 = <strong>4</strong> (nicht 5). Damit ist GP = 4 − 4 = <strong>0</strong> (nicht 1). B liegt also auf dem kritischen Pfad.</li>
          <li><strong>Vorgang C:</strong> Der freie Puffer ist falsch. FP = FAZ(E) − FEZ(C) = 7 − 7 = <strong>0</strong> (nicht 6). Der Gesamtpuffer von 6 ist richtig (10 − 4).</li>
          <li><strong>Vorgang E:</strong> SAZ = SEZ − Dauer = 15 − 2 = <strong>13</strong> (nicht 12); GP = 13 − 7 = <strong>6</strong> (nicht 5). Der FP von 6 ist richtig (FAZ(F) 15 − FEZ(E) 9).</li>
        </ol>
        <p><strong>b)</strong> Kritischer Pfad: <strong>A → B → D → F → G</strong>, Projektdauer 4 + 6 + 5 + 4 + 2 = <strong>21 Tage</strong>.</p>
        <p><strong>c)</strong> C hat keinen freien Puffer (FP = 0): Der Beginn von E verschiebt sich um 4 Tage (FAZ 11, FEZ 13). Da der Gesamtpuffer von C 6 Tage beträgt (bzw. E noch Puffer hat: FEZ 13 ≤ FAZ F 15), verschiebt sich das Projektende <strong>nicht</strong>; der Pfad C–E wird aber knapper (verbleibender Puffer 2 Tage).</p>`
    },
    {
      id: "e-gantt-1",
      topic: "netzplan-gantt",
      title: "Gantt-Diagramm erstellen und lesen",
      level: 1,
      exam: ["AP1"],
      task: `<p>Für die Umstellung der Telefonanlage einer Arztpraxis in Brunsbüttel gilt folgende Vorgangsliste (Dauer in Tagen):</p>
        <table><thead><tr><th>Vorgang</th><th>Beschreibung</th><th>Dauer</th><th>Vorgänger</th></tr></thead><tbody>
          <tr><td>A</td><td>Planung</td><td>2</td><td>–</td></tr>
          <tr><td>B</td><td>Beschaffung</td><td>5</td><td>A</td></tr>
          <tr><td>C</td><td>Installation</td><td>3</td><td>B</td></tr>
          <tr><td>D</td><td>Dokumentation und Einweisungsunterlagen</td><td>4</td><td>B</td></tr>
          <tr><td>E</td><td>Übergabe</td><td>1</td><td>C, D</td></tr>
        </tbody></table>
        <p>a) Erstelle ein Gantt-Diagramm (Zeitachse in Tagen, Start bei 0).</p>
        <p>b) Lies Projektdauer, kritischen Pfad und den Puffer von C ab.</p>
        <p>c) Wo setzt du sinnvollerweise einen Meilenstein?</p>
        <p>d) Nenne je einen Vorteil des Gantt-Diagramms und des Netzplans.</p>`,
      solution: `<p><strong>a)</strong></p>
        <pre class="ascii">Tag              |0    5    10
A Planung        |▓▓
B Beschaffung    |  ▓▓▓▓▓
C Installation   |       ░░░
D Dokumentation  |       ▓▓▓▓
E Übergabe       |           ▓◆
▓ kritisch · ░ nicht kritisch · ◆ Meilenstein „Übergabe erfolgt“ (Tag 12)</pre>
        <p><strong>b)</strong> A 0–2, B 2–7, C 7–10, D 7–11, E 11–12 → Projektdauer <strong>12 Tage</strong>. Kritischer Pfad: <strong>A → B → D → E</strong>. C endet an Tag 10, E beginnt erst an Tag 11 → C hat <strong>1 Tag Puffer</strong>.</p>
        <p><strong>c)</strong> z. B. nach der Beschaffung (Tag 7: „Hardware vollständig geliefert“) und am Projektende (Tag 12: „Übergabe an die Praxis“). Meilensteine haben keine Dauer und dienen der Terminkontrolle.</p>
        <p><strong>d)</strong> Gantt: Der zeitliche Ablauf ist auf einen Blick verständlich, auch für Kunden. Netzplan: Abhängigkeiten, Puffer und kritischer Pfad lassen sich exakt berechnen.</p>`
    },
    {
      id: "e-ki-1",
      topic: "service-desk",
      title: "KI-Chatbot im Service Desk bewerten",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH bearbeitet 24.000 Tickets pro Jahr; ein Ticket im Service Desk kostet durchschnittlich 13 €. Etwa 30 % der Tickets sind Standardfragen (Passwort, Drucker verbinden, VPN-Anleitung). Ein KI-Chatbot soll diese Anfragen zuerst beantworten und voraussichtlich 60 % davon abschließend lösen. Kosten des Chatbots: 8.000 € einmalig für die Einführung, 6.000 € Lizenz pro Jahr und 0,80 € je Konversation. Alle Standardanfragen laufen künftig zuerst über den Chatbot; nicht gelöste Fälle bearbeitet wie bisher der Service Desk.</p>
        <p>a) Nenne drei Einsatzmöglichkeiten von KI im Service Desk. (3 Punkte)</p>
        <p>b) Berechne die jährliche Nettoeinsparung und die Amortisationszeit der Einführungskosten in Monaten. (5 Punkte)</p>
        <p>c) Nenne vier Risiken bzw. Nachteile des Chatbots und je eine Gegenmaßnahme. (4 Punkte)</p>
        <p>d) Erläutere, was beim Datenschutz zu beachten ist, wenn Anwender im Chat personenbezogene Daten eingeben. (4 Punkte)</p>
        <p>e) Gib eine begründete Empfehlung ab. (2 Punkte)</p>
        <p>f) Ein Teil des Service-Desk-Teams lehnt den Chatbot ab. Nenne drei mögliche Ursachen für diesen Widerstand und je eine passende Maßnahme. (3 Punkte)</p>`,
      hints: ["Konversationskosten fallen für alle Standardanfragen an, die Einsparung nur für die gelösten."],
      solution: `<p><strong>a)</strong> z. B. Chatbot für Standardfragen rund um die Uhr, automatische Kategorisierung und Priorisierungsvorschlag für neue Tickets, Zusammenfassung langer Ticketverläufe, Vorschläge passender Wissensartikel bzw. Antwortentwürfe für die Supporter, Erkennen von Häufungen (Hinweis auf Problem).</p>
        <p><strong>b)</strong> Standardanfragen: 24.000 × 0,30 = 7.200 pro Jahr. Vom Chatbot gelöst: 7.200 × 0,60 = 4.320 Tickets.<br>
        Einsparung: 4.320 × 13 € = 56.160 €.<br>
        Laufende Kosten: 7.200 × 0,80 € + 6.000 € = 5.760 € + 6.000 € = 11.760 €.<br>
        Nettoeinsparung: 56.160 € − 11.760 € = <strong>44.400 € pro Jahr</strong>.<br>
        Amortisation: 8.000 € ÷ 44.400 €/Jahr ≈ 0,18 Jahre ≈ <strong>2,2 Monate</strong>.</p>
        <p><strong>c)</strong> (1) Falsche oder erfundene Antworten (Halluzinationen) → Antworten auf geprüfte Wissensartikel beschränken, regelmäßig kontrollieren. (2) Frust bei Anwendern, wenn der Bot nicht weiterkommt → jederzeit einfache Übergabe an einen Menschen. (3) Datenschutzverstöße → Datenminimierung, Anbieter mit Auftragsverarbeitungsvertrag und Datenverarbeitung in der EU. (4) Veraltetes Wissen → Wissensbasis pflegen, Verantwortliche benennen. (5) Abhängigkeit vom Anbieter/Kostensteigerung → Vertrag mit Kündigungsmöglichkeit, Kosten überwachen.</p>
        <p><strong>d)</strong> Die Verarbeitung braucht eine Rechtsgrundlage und muss transparent sein: Anwender werden informiert, dass sie mit einer KI kommunizieren und was mit ihren Daten geschieht (auch die EU-KI-Verordnung verlangt, dass ein Chatbot als KI erkennbar ist). Mit dem Anbieter wird ein Auftragsverarbeitungsvertrag (Art. 28 DSGVO) geschlossen; der Serverstandort bzw. eine Übermittlung in Drittländer ist zu prüfen. Es gelten Datenminimierung (nur nötige Daten abfragen, keine Passwörter oder Gesundheitsdaten eingeben lassen), Zweckbindung (keine Nutzung zum Training ohne Zustimmung) und ein Löschkonzept für Chatverläufe.</p>
        <p><strong>e)</strong> Die Einführung ist wirtschaftlich sehr attraktiv (Amortisation nach gut zwei Monaten, danach rund 44.000 € Einsparung pro Jahr) und entlastet den 1st Level. Empfehlung: einführen, aber zunächst als Pilot für wenige Themen, mit menschlicher Übergabe, datenschutzkonformem Anbieter und regelmäßiger Auswertung der Lösungsquote und Kundenzufriedenheit.</p>
        <p><strong>f)</strong> (1) Angst vor Arbeitsplatz- oder Kompetenzverlust → früh und ehrlich informieren, betonen, dass der Bot Routinefragen übernimmt und das Team sich auf anspruchsvollere Fälle konzentrieren kann. (2) Wissenslücken bzw. Unsicherheit im Umgang mit KI → Schulungen, Key-User als Multiplikatoren. (3) Schlechte Erfahrungen mit früheren Einführungen → Team an Pilotphase und Auswahl der Themen beteiligen, Feedback ernst nehmen, Erfolge sichtbar machen (Lewin: auftauen, verändern, stabilisieren).</p>`
    },
    {
      id: "e-abnahme-1",
      topic: "dienstleistungen",
      title: "Leistungserbringung, Abnahme und Mängel",
      level: 2,
      exam: ["AP1"],
      task: `<p>Die Nordlicht IT GmbH hat in einer Tierarztpraxis in Meldorf 12 neue Arbeitsplätze mit Monitoren und einen Switch installiert. Nun stehen Abnahme und Nachbetreuung an.</p>
        <p>a) Vergleiche Vor-Ort-Einsatz und Fernwartung für die spätere Betreuung anhand von vier Kriterien.</p>
        <p>b) Nenne sechs Inhalte des Abnahmeprotokolls.</p>
        <p>c) Bei der Abnahme fällt auf: (1) Es wurden nur 11 statt 12 Monitore geliefert. (2) Ein Port des Switches ist defekt. (3) Statt der bestellten 27-Zoll-Monitore wurden an zwei Plätzen 24-Zoll-Modelle aufgestellt. Ordne die Mängelarten zu und nenne das Recht, das die Praxis zuerst geltend macht.</p>
        <p>d) Begründe, warum die Mängel unbedingt im Abnahmeprotokoll festgehalten werden sollten.</p>`,
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Kriterium</th><th>Vor Ort</th><th>Fernwartung</th></tr></thead><tbody>
          <tr><td>Kosten</td><td>höher (Anfahrt, Reisezeit)</td><td>gering</td></tr>
          <tr><td>Reaktionszeit</td><td>länger, abhängig von der Anfahrt</td><td>sofort möglich</td></tr>
          <tr><td>Einsatzbereich</td><td>Hardwaredefekte, Verkabelung, Einweisungen</td><td>Software, Konfiguration, Updates</td></tr>
          <tr><td>Voraussetzungen/Datenschutz</td><td>Zutritt, Termin</td><td>Internet, Fernwartungssoftware, Zustimmung der Praxis je Sitzung, Protokollierung, Auftragsverarbeitung (sensible Kundendaten)</td></tr>
        </tbody></table>
        <p><strong>b)</strong> Vertragsparteien, Datum und Ort, Bezug zum Auftrag, abgenommene Leistungen (Geräte, Konfiguration), Ergebnisse der Funktionsprüfung bzw. Testprotokoll, festgestellte Mängel mit Frist zur Beseitigung, Vermerk „abgenommen“ bzw. „abgenommen unter Vorbehalt“, Unterschriften beider Parteien.</p>
        <p><strong>c)</strong> (1) Minderlieferung (zu geringe Menge) · (2) Schlechtleistung (Qualitätsmangel) · (3) Falschlieferung (andere Ware als bestellt). Zuerst verlangt die Praxis <strong>Nacherfüllung</strong>, also Nachlieferung, Reparatur bzw. Austausch; erst wenn diese fehlschlägt, kommen Rücktritt, Minderung oder Schadensersatz infrage.</p>
        <p><strong>d)</strong> Wer ein Werk in Kenntnis eines Mangels ohne Vorbehalt abnimmt, verliert insoweit die Rechte auf Nacherfüllung, Selbstvornahme, Rücktritt und Minderung (§ 640 Abs. 3 BGB); Schadensersatz bleibt grundsätzlich möglich. Nach der Abnahme muss außerdem grundsätzlich der Kunde beweisen, dass ein Mangel vorliegt. Die Eintragung sichert die Rechte der Praxis, legt Fristen fest und dokumentiert den Zustand bei der Übergabe.</p>`
    },
  ],
  quiz: [
    { id: "q-itsm-1", topic: "itsm-grundlagen", type: "single", exam: [],
      q: "Was trifft auf ITIL 4 zu?",
      options: ["Es ist eine gesetzlich vorgeschriebene Norm für IT-Dienstleister.", "Es ist eine Sammlung bewährter Praktiken für das IT-Service-Management.", "Es ist eine Software zur Verwaltung von Tickets.", "Es ist ein Zertifikat, das Unternehmen für ihren Service Desk erhalten."],
      answer: 1,
      explain: "ITIL 4 ist ein Best-Practice-Framework (Erfahrungswissen), kein Gesetz und keine Norm. Unternehmen können nicht „nach ITIL“ zertifiziert werden – nur Personen. Ticketsysteme setzen ITIL-Abläufe um, sind aber nicht ITIL selbst." },
    { id: "q-itsm-2", topic: "itsm-grundlagen", type: "single", exam: [],
      q: "Nach welchem Regelwerk kann sich ein Unternehmen sein Service-Management-System durch ein externes Audit zertifizieren lassen?",
      options: ["COBIT 2019", "ITIL 4", "ISO/IEC 20000-1", "Service Value Chain"],
      answer: 2,
      explain: "ISO/IEC 20000-1 ist eine Norm mit prüfbaren Anforderungen; zertifiziert wird die Organisation. Bei ITIL 4 und COBIT werden Personen zertifiziert, die Service Value Chain ist nur ein Baustein von ITIL 4." },
    { id: "q-itsm-3", topic: "itsm-grundlagen", type: "multi", exam: [],
      q: "Welche gehören zu den vier Dimensionen des Service-Managements in ITIL 4?",
      options: ["Partner und Lieferanten", "Informationen und Technologie", "Wertströme und Prozesse", "Organisationen und Menschen", "Kosten und Budget", "Hardware und Software"],
      answer: [0, 1, 2, 3],
      explain: "Die vier Dimensionen sind Organisationen &amp; Menschen, Informationen &amp; Technologie, Partner &amp; Lieferanten sowie Wertströme &amp; Prozesse. Kosten sind zwar wichtig, aber keine eigene Dimension; Hardware und Software gehören zur Dimension Informationen &amp; Technologie." },
    { id: "q-itsm-4", topic: "itsm-grundlagen", type: "single", exam: [],
      q: "Welches Rahmenwerk ist vor allem auf IT-Governance, Risikosteuerung und Revision durch die Unternehmensleitung ausgerichtet?",
      options: ["ITIL 4", "IMAC/RD", "FitSM", "COBIT 2019"],
      answer: 3,
      explain: "COBIT (ISACA) kommt aus Audit und Revision und beschreibt, wie die Leitung die IT steuert und kontrolliert (5 Domänen, 40 Ziele, Reifegrade). ITIL 4 und FitSM beschreiben das operative Service-Management, IMAC/RD ist ein Lebenszyklus für IT-Dienstleistungen." },
    { id: "q-itsm-5", topic: "itsm-grundlagen", type: "tf", exam: [],
      q: "Die Service Value Chain von ITIL 4 besteht aus sechs Aktivitäten, darunter Plan, Engage und Deliver &amp; Support.",
      answer: true,
      explain: "Richtig: Plan, Improve, Engage, Design &amp; Transition, Obtain/Build und Deliver &amp; Support – sechs Aktivitäten, die in beliebiger Kombination zu Wertströmen verbunden werden." },
    { id: "q-itsm-6", topic: "itsm-grundlagen", type: "input", exam: [],
      q: "Wie viele Practices umfasst ITIL 4 insgesamt? (Zahl)",
      answer: ["34", "34 Practices"],
      explain: "34 Practices: 14 allgemeine Management-Practices, 17 Service-Management-Practices und 3 technische Management-Practices." },
    { id: "q-dl-1", topic: "dienstleistungen", type: "single", exam: ["AP1", "AP2"],
      q: "Was wird bei einem Werkvertrag geschuldet?",
      options: ["die Übergabe einer Ware gegen Zahlung des Kaufpreises", "ein Erfolg, also ein fertiges, funktionierendes Werk", "die zeitweise Überlassung einer Sache gegen Entgelt", "nur das Tätigwerden, unabhängig vom Ergebnis"],
      answer: 1,
      explain: "Beim Werkvertrag (§ 631 BGB) schuldet der Unternehmer den Erfolg, z. B. ein funktionierendes Netzwerk; es folgt eine Abnahme. Das bloße Tätigwerden kennzeichnet den Dienstvertrag, die Überlassung auf Zeit den Mietvertrag, Ware gegen Kaufpreis den Kaufvertrag." },
    { id: "q-dl-2", topic: "dienstleistungen", type: "single", exam: ["AP1", "AP2"],
      q: "Eine Arztpraxis beauftragt Telefon-Support, der nach tatsächlich geleisteten Stunden abgerechnet wird. Welche Vertragsart liegt vor?",
      options: ["Kaufvertrag", "Dienstvertrag", "Werkvertrag", "Mietvertrag"],
      answer: 1,
      explain: "Geschuldet ist die Unterstützungstätigkeit, bezahlt wird nach Zeit, ein bestimmter Erfolg wird nicht versprochen – das ist ein Dienstvertrag (§ 611 BGB). Ein Werkvertrag läge vor, wenn ein konkretes Ergebnis (z. B. eingerichteter Server) mit Abnahme geschuldet wäre." },
    { id: "q-dl-3", topic: "dienstleistungen", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Aussagen zur gesetzlichen Gewährleistung beim Kauf einer neuen Sache sind richtig?",
      options: ["Sie gilt nur, wenn eine Garantiekarte vorliegt.", "Sie richtet sich gegen den Verkäufer.", "Der Mangel muss bereits bei der Übergabe vorgelegen haben.", "Sie ist eine freiwillige Zusage des Herstellers.", "Sie beträgt grundsätzlich zwei Jahre."],
      answer: [1, 2, 4],
      explain: "Die Gewährleistung ist gesetzlich (§§ 437 ff. BGB), besteht gegenüber dem Vertragspartner (Verkäufer), dauert bei neuen Sachen zwei Jahre und betrifft Mängel, die schon bei Übergabe vorhanden waren. Freiwillige Herstellerzusagen mit Garantiekarte sind eine Garantie – etwas anderes." },
    { id: "q-dl-4", topic: "dienstleistungen", type: "single", exam: ["AP1"],
      q: "Ein Mitarbeiter erhält zusätzlich zu seinem vorhandenen Arbeitsplatz einen zweiten Monitor. Welcher IMAC/RD-Phase entspricht das?",
      options: ["Add", "Move", "Install", "Change"],
      answer: 0,
      explain: "Add = Hinzufügen zusätzlicher Komponenten, Software oder Rechte. Install wäre die Ersteinrichtung eines Arbeitsplatzes, Change die Änderung vorhandener Komponenten (z. B. RAM tauschen), Move ein Umzug." },
    { id: "q-dl-5", topic: "dienstleistungen", type: "tf", exam: ["AP1"],
      q: "Kulanz ist eine freiwillige Leistung, auf die der Kunde keinen Rechtsanspruch hat.",
      answer: true,
      explain: "Richtig. Kulanz gewährt ein Händler oder Hersteller aus Kundenfreundlichkeit, z. B. nach Ablauf von Gewährleistung und Garantie. Einen Anspruch darauf gibt es nicht." },
    { id: "q-dl-6", topic: "dienstleistungen", type: "input", exam: ["AP1"],
      q: "Wofür steht das „D“ im IMAC/RD-Lebenszyklus? (englischer oder deutscher Begriff)",
      answer: ["Dispose", "Disposal", "Entsorgung", "Entsorgen"],
      explain: "IMAC/RD = Install, Move, Add, Change, Remove, Dispose. Dispose meint die Entsorgung bzw. Verwertung von Altgeräten – inklusive sicherer Datenvernichtung." },
    { id: "q-dl-7", topic: "dienstleistungen", type: "single", exam: ["AP1", "AP2"],
      q: "Wie lange nach der Übergabe wird beim Verbrauchsgüterkauf vermutet, dass ein auftretender Mangel schon bei Übergabe vorlag (Beweislastumkehr, § 477 BGB)?",
      options: ["1 Jahr", "6 Monate", "3 Jahre", "2 Jahre"],
      answer: 0,
      explain: "Seit 2022 gilt die Beweislastumkehr beim Verbrauchsgüterkauf ein Jahr lang (vorher sechs Monate). Zwei Jahre ist die Gewährleistungsfrist, drei Jahre sind eine typische Garantiedauer mancher Hersteller." },
    { id: "q-sd-1", topic: "service-desk", type: "single", exam: ["AP1", "AP2"],
      q: "Was bedeutet SPOC im Zusammenhang mit dem Service Desk?",
      options: ["Service Process Operation Control – die Überwachung der Serverprozesse", "Single Point of Contact – eine zentrale Anlaufstelle für alle Anliegen der Anwender", "Standard Procedure of Change – das Verfahren für Standard Changes", "Second-level Point of Competence – der Ansprechpartner im 2nd Level"],
      answer: 1,
      explain: "SPOC = Single Point of Contact. Anwender wenden sich mit allen Anliegen an eine Stelle; diese erfasst, löst oder leitet weiter. Die übrigen Auflösungen sind erfunden." },
    { id: "q-sd-2", topic: "service-desk", type: "single", exam: ["AP1", "AP2"],
      q: "Der 1st Level gibt ein Ticket an das Netzwerkteam weiter, weil ihm Fachwissen und Berechtigungen fehlen. Um welche Eskalation handelt es sich?",
      options: ["funktionale Eskalation", "Major-Incident-Eskalation", "proaktive Eskalation", "hierarchische Eskalation"],
      answer: 0,
      explain: "Die Weitergabe an ein Team mit mehr Fachkompetenz ist eine funktionale (horizontale) Eskalation. Hierarchisch wäre die Einbindung der Führungsebene, z. B. wenn Entscheidungen oder zusätzliche Ressourcen nötig sind." },
    { id: "q-sd-3", topic: "service-desk", type: "single", exam: ["AP1", "AP2"],
      q: "In welcher Situation ist eine hierarchische Eskalation angebracht?",
      options: ["Ein Anwender setzt sein Passwort im Portal selbst zurück.", "Ein Ticket wird einer Kategorie zugeordnet.", "Eine SLA-Verletzung droht und es müssen zusätzliche Ressourcen genehmigt werden.", "Der 1st Level wendet eine Standardlösung aus der Wissensdatenbank an."],
      answer: 2,
      explain: "Hierarchisch (vertikal) wird eskaliert, wenn Entscheidungs- oder Weisungsbefugnis gebraucht wird – etwa bei drohender SLA-Verletzung, Budget- oder Ressourcenfragen oder massiven Beschwerden. Die anderen Beispiele sind normale Arbeitsschritte ohne Eskalation." },
    { id: "q-sd-4", topic: "service-desk", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Anliegen sind Service Requests und keine Incidents?",
      options: ["Passwort zurücksetzen lassen", "Auskunft, wie man eine Abwesenheitsnotiz einrichtet", "Der Dateiserver ist nicht erreichbar.", "Der Drucker druckt nur leere Seiten.", "Software aus dem Service-Katalog bestellen"],
      answer: [0, 1, 4],
      explain: "Service Requests sind Anfragen nach vereinbarten Standardleistungen oder Informationen – nichts ist gestört. Ein nicht erreichbarer Server und ein Drucker, der leere Seiten ausgibt, sind ungeplante Störungen, also Incidents." },
    { id: "q-sd-5", topic: "service-desk", type: "tf", exam: ["AP1", "AP2"],
      q: "Bei einer funktionalen Eskalation an den 2nd Level gibt der Service Desk die Verantwortung für die Kommunikation mit dem Anwender vollständig ab.",
      answer: false,
      explain: "Falsch. Der Service Desk bleibt Ansprechpartner (SPOC) des Anwenders, verfolgt das Ticket und informiert über den Stand – auch wenn ein anderes Team technisch weiterarbeitet." },
    { id: "q-sd-6", topic: "service-desk", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Aufgaben gehören typischerweise zum 1st-Level-Support?",
      options: ["Tickets erfassen und kategorisieren", "Firmwarefehler eines Storage-Systems in der Entwicklungsabteilung des Herstellers analysieren", "die Priorität eines Tickets festlegen", "Standardstörungen mithilfe der Wissensdatenbank lösen", "Fehler im Quellcode einer Herstellersoftware beheben"],
      answer: [0, 2, 3],
      explain: "Der 1st Level nimmt Anliegen an, erfasst, kategorisiert und priorisiert sie und löst Standardfälle. Eingriffe in Herstellersoftware oder Firmware-Analysen beim Hersteller sind Aufgaben des 3rd Levels." },
    { id: "q-sd-7", topic: "service-desk", type: "single", exam: ["AP1", "AP2"],
      q: "Wer übernimmt typischerweise den 3rd-Level-Support?",
      options: ["der Service Desk als erste Anlaufstelle", "Hersteller, Softwareentwickler oder externe Spezialisten", "die Teamleitung des Service Desks", "der Anwender selbst über das Self-Service-Portal"],
      answer: 1,
      explain: "Der 3rd Level verfügt über das tiefste Spezialwissen, z. B. Hersteller oder Entwickler, die Bugs beheben. Der Service Desk ist 1st Level, Self-Service wird oft als Level 0 bezeichnet, und die Teamleitung ist Ziel einer hierarchischen Eskalation, kein Support-Level." },
    { id: "q-inc-1", topic: "incident", type: "single", exam: ["AP1", "AP2"],
      q: `Bestimme die Priorität mit dieser Matrix: Auswirkung <strong>hoch</strong>, Dringlichkeit <strong>mittel</strong>.<table><thead><tr><th>Auswirkung / Dringlichkeit</th><th>hoch</th><th>mittel</th><th>niedrig</th></tr></thead><tbody><tr><td>hoch</td><td>1</td><td>2</td><td>3</td></tr><tr><td>mittel</td><td>2</td><td>3</td><td>4</td></tr><tr><td>niedrig</td><td>3</td><td>4</td><td>5</td></tr></tbody></table>`,
      options: ["Priorität 1", "Priorität 4", "Priorität 2", "Priorität 3"],
      answer: 2,
      explain: "Zeile „Auswirkung hoch“, Spalte „Dringlichkeit mittel“ → 2. Priorität 1 gäbe es nur, wenn auch die Dringlichkeit hoch wäre; 3 entspräche z. B. hoch/niedrig oder mittel/mittel." },
    { id: "q-inc-2", topic: "incident", type: "single", exam: ["AP1", "AP2"],
      q: "Was ist das vorrangige Ziel des Incident Managements?",
      options: ["Verträge mit externen Lieferanten verhandeln", "den normalen Servicebetrieb so schnell wie möglich wiederherstellen", "Änderungen an der IT-Infrastruktur bewerten und genehmigen", "die Grundursache von Störungen dauerhaft beseitigen"],
      answer: 1,
      explain: "Incident Management stellt den Service schnell wieder her – notfalls per Workaround. Die dauerhafte Ursachenbeseitigung ist Aufgabe des Problem Managements, Genehmigungen gehören zum Change Enablement, Lieferantenverträge zum Supplier Management." },
    { id: "q-inc-3", topic: "incident", type: "multi", exam: ["AP1", "AP2"],
      q: "Aus welchen Größen wird die Priorität eines Incidents üblicherweise ermittelt?",
      options: ["Dringlichkeit (Urgency)", "Auswirkung (Impact)", "Position des Melders im Unternehmen", "Reihenfolge des Eingangs", "Lautstärke der Beschwerde"],
      answer: [0, 1],
      explain: "Priorität = Auswirkung × Dringlichkeit (Prioritätsmatrix). Wie laut sich jemand beschwert, wann ein Ticket eingeht oder welche Position der Melder hat, bestimmt die Priorität nicht – Sonderregeln (z. B. VIP) müssten ausdrücklich im SLA stehen." },
    { id: "q-inc-4", topic: "incident", type: "tf", exam: ["AP1", "AP2"],
      q: "Auch ein drohender Ausfall, z. B. eine S.M.A.R.T.-Warnung einer Server-Festplatte, kann bereits als Incident erfasst werden.",
      answer: true,
      explain: "Richtig. Auch ein Fehler an einer Komponente, der den Service noch nicht beeinträchtigt, wird als Incident behandelt – so lässt sich der Ausfall verhindern, bevor Anwender betroffen sind." },
    { id: "q-inc-5", topic: "incident", type: "single", exam: ["AP1", "AP2"],
      q: "Ein Techniker hat die Störung behoben, der Anwender hat die Lösung aber noch nicht bestätigt. Welcher Ticketstatus passt?",
      options: ["Zugewiesen", "Geschlossen", "Neu", "Gelöst"],
      answer: 3,
      explain: "„Gelöst“ bedeutet: Lösung umgesetzt, Bestätigung steht aus. „Geschlossen“ wird das Ticket erst nach Bestätigung bzw. Ablauf einer Frist. „Neu“ und „Zugewiesen“ beschreiben frühere Phasen." },
    { id: "q-inc-6", topic: "incident", type: "input", exam: ["AP1", "AP2"],
      q: `Welche Priorität (Zahl) ergibt sich bei Auswirkung <strong>mittel</strong> und Dringlichkeit <strong>niedrig</strong>?<table><thead><tr><th>Auswirkung / Dringlichkeit</th><th>hoch</th><th>mittel</th><th>niedrig</th></tr></thead><tbody><tr><td>hoch</td><td>1</td><td>2</td><td>3</td></tr><tr><td>mittel</td><td>2</td><td>3</td><td>4</td></tr><tr><td>niedrig</td><td>3</td><td>4</td><td>5</td></tr></tbody></table>`,
      answer: ["4", "Priorität 4", "Prio 4"],
      explain: "Zeile „mittel“, Spalte „niedrig“ → Priorität 4 (niedrig). Typisches Beispiel: Abteilungsdrucker defekt, Ausweichgerät vorhanden." },
    { id: "q-inc-7", topic: "incident", type: "single", exam: ["AP1", "AP2"],
      q: "Was kennzeichnet einen Major Incident?",
      options: ["jede Störung, die von einer Führungskraft gemeldet wird", "jede Störung, die länger als einen Arbeitstag dauert", "eine Störung mit sehr großer Auswirkung, für die ein eigenes, beschleunigtes Verfahren gilt", "ein Problem, dessen Ursache bereits bekannt ist"],
      answer: 2,
      explain: "Ein Major Incident hat außergewöhnlich große Auswirkungen (z. B. Ausfall des gesamten Netzes) und wird mit eigenem Team, verkürzten Zeiten und laufender Kommunikation bearbeitet. Wer meldet oder wie lange es dauert, macht einen Incident nicht zum Major Incident; ein Problem mit bekannter Ursache ist ein Known Error." },
    { id: "q-prob-1", topic: "problem", type: "single", exam: ["AP1", "AP2"],
      q: "Was ist ein Known Error?",
      options: ["eine genehmigte Änderung mit bekanntem Risiko", "ein Incident, der bereits geschlossen wurde", "ein Problem, dessen Ursache analysiert ist, das aber noch nicht behoben wurde", "ein Fehler, den der Anwender selbst verursacht hat"],
      answer: 2,
      explain: "Known Error = Problem mit bekannter Ursache (und meist einem Workaround), dessen endgültige Lösung noch aussteht. Er wird in der KEDB dokumentiert. Geschlossene Incidents, Anwenderfehler oder Changes sind etwas anderes." },
    { id: "q-prob-2", topic: "problem", type: "single", exam: ["AP1", "AP2"],
      q: "Was ist ein Workaround?",
      options: ["ein Notfall-Change außerhalb des Wartungsfensters", "eine vorläufige Umgehungslösung, die die Auswirkung verringert, ohne die Ursache zu beseitigen", "die Weiterleitung eines Tickets an den 2nd Level", "die endgültige Beseitigung der Grundursache"],
      answer: 1,
      explain: "Ein Workaround hilft dem Anwender weiterzuarbeiten (z. B. anderen Drucker nutzen), die Ursache bleibt aber bestehen – das Problem ist damit noch nicht gelöst. Die Weiterleitung an den 2nd Level ist eine funktionale Eskalation." },
    { id: "q-prob-3", topic: "problem", type: "single", exam: ["AP1", "AP2"],
      q: "Wofür steht die Abkürzung KEDB?",
      options: ["Knowledge Escalation Database", "Kernel Error Debug Buffer", "Known Error Database", "Key Event Data Base"],
      answer: 2,
      explain: "KEDB = Known Error Database: Sammlung bekannter Fehler mit Symptomen, Ursachen und Workarounds. Der 1st Level durchsucht sie, um Incidents schnell zu lösen." },
    { id: "q-prob-4", topic: "problem", type: "tf", exam: ["AP1", "AP2"],
      q: "Das Problem Management wird ausschließlich tätig, nachdem Incidents aufgetreten sind.",
      answer: false,
      explain: "Falsch. Neben dem reaktiven gibt es das proaktive Problem Management: Es sucht Schwachstellen vorab, z. B. durch Trendanalysen, Monitoring-Auswertungen oder Herstellerwarnungen." },
    { id: "q-prob-5", topic: "problem", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Methoden eignen sich zur Ursachenanalyse im Problem Management?",
      options: ["Gantt-Diagramm", "5-Why-Methode", "Ishikawa-Diagramm", "Trendanalyse wiederkehrender Incidents", "Use-Case-Diagramm"],
      answer: [1, 2, 3],
      explain: "Ishikawa (Ursachenkategorien), 5-Why (Ursachenkette) und Trendanalysen (Häufungen erkennen) dienen der Ursachenfindung. Gantt-Diagramme planen Termine, Use-Case-Diagramme beschreiben Anforderungen an Systeme." },
    { id: "q-prob-6", topic: "problem", type: "single", exam: ["AP1", "AP2"],
      q: "Wie geht man beim Bottom-up-Troubleshooting nach dem OSI-Modell vor?",
      options: ["Man tauscht zuerst alle Komponenten gleichzeitig aus.", "Man beginnt in der Mitte, z. B. mit einem ping auf das Gateway.", "Man beginnt bei der Anwendung (Schicht 7) und arbeitet sich nach unten.", "Man beginnt bei Schicht 1 (z. B. Kabel, Link-LED) und arbeitet sich nach oben."],
      answer: 3,
      explain: "Bottom-up startet bei der physikalischen Schicht. Von oben nach unten ist Top-down, der Einstieg in der Mitte heißt Divide and Conquer. Mehrere Änderungen gleichzeitig verhindern, dass man die Ursache erkennt." },
    { id: "q-chg-1", topic: "change", type: "single", exam: ["AP1", "AP2"],
      q: "Welche Change-Art ist vorab genehmigt, risikoarm und folgt einem festgelegten Verfahren?",
      options: ["Standard Change", "Normal Change", "Major Change", "Emergency Change"],
      answer: 0,
      explain: "Standard Changes (z. B. freigegebene Software installieren) sind vorautorisiert und werden direkt ausgeführt. Normal Changes müssen einzeln bewertet und genehmigt werden, Emergency Changes beschleunigt. „Major Change“ ist keine der drei ITIL-Change-Arten." },
    { id: "q-chg-2", topic: "change", type: "single", exam: ["AP1", "AP2"],
      q: "Eine aktiv ausgenutzte Sicherheitslücke in der Firewall muss noch heute per Patch geschlossen werden. Um welche Change-Art handelt es sich?",
      options: ["Normal Change", "Service Request", "Emergency Change", "Standard Change"],
      answer: 2,
      explain: "Um akuten Schaden abzuwenden, wird der Patch als Emergency Change mit beschleunigter Genehmigung (z. B. ECAB) eingespielt. Für einen Normal Change mit regulärer CAB-Sitzung fehlt die Zeit, ein Standard Change ist es wegen des Risikos nicht, und ein Service Request ist keine Änderung an der Infrastruktur." },
    { id: "q-chg-3", topic: "change", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Angaben gehören in einen Request for Change (RFC)?",
      options: ["Risiko- und Auswirkungsbewertung", "die Liste aller bekannten Fehler der KEDB", "Begründung und erwarteter Nutzen", "betroffene Services und Configuration Items", "der Net Promoter Score des Vormonats", "Rückfallplan (Backout-Plan)"],
      answer: [0, 2, 3, 5],
      explain: "Ein RFC beschreibt, was geändert werden soll, warum, mit welchem Risiko, welche CIs betroffen sind, wie getestet und wie im Fehlerfall zurückgerollt wird. Der NPS und die komplette KEDB haben mit dem Änderungsantrag nichts zu tun." },
    { id: "q-chg-4", topic: "change", type: "tf", exam: ["AP1", "AP2"],
      q: "Ein Emergency Change darf ganz ohne Genehmigung durchgeführt werden.",
      answer: false,
      explain: "Falsch. Auch ein Emergency Change wird genehmigt – nur beschleunigt, z. B. durch ein Notfall-CAB (ECAB) oder eine benannte Change Authority. Die Dokumentation darf ggf. nachträglich vervollständigt werden." },
    { id: "q-chg-5", topic: "change", type: "single", exam: ["AP1", "AP2"],
      q: "Welche Aufgabe hat das Change Advisory Board (CAB)?",
      options: ["Es erstellt die Monatsabrechnung für den Kunden.", "Es sucht die Grundursache wiederkehrender Incidents.", "Es nimmt als Service Desk alle Störungsmeldungen an.", "Es bewertet Normal Changes und berät bei Genehmigung und Terminierung."],
      answer: 3,
      explain: "Das CAB ist ein Gremium aus Fachleuten, das Nutzen, Risiken, Ressourcen und Abhängigkeiten von Changes bewertet. Störungsannahme ist Aufgabe des Service Desks, Ursachenanalyse die des Problem Managements." },
    { id: "q-chg-6", topic: "change", type: "single", exam: ["AP1", "AP2"],
      q: "Was wird in einer CMDB gespeichert?",
      options: ["bekannte Fehler mit ihren Workarounds", "Configuration Items und ihre Beziehungen zueinander", "sämtliche E-Mails der Anwender", "die Verträge mit allen Kunden"],
      answer: 1,
      explain: "Die Configuration Management Database enthält alle CIs (Server, Switches, Software, Services …) und ihre Abhängigkeiten – so erkennt man, was ein Change oder Incident betrifft. Bekannte Fehler stehen in der KEDB." },
    { id: "q-chg-7", topic: "change", type: "single", exam: ["AP1"],
      q: "Wie nennt man Beteiligte, die eine organisatorische Veränderung aktiv vorantreiben und andere dafür gewinnen?",
      options: ["Skeptiker", "Promotoren", "Bremser", "Widerständler"],
      answer: 1,
      explain: "Promotoren unterstützen und treiben Veränderungen voran. Skeptiker zweifeln und brauchen Argumente, Bremser verzögern, Widerständler lehnen offen ab. Alle Gruppen früh einbinden!" },
    { id: "q-sla-1", topic: "sla-kennzahlen", type: "single", exam: ["AP1", "AP2"],
      q: "Zwischen welchen Parteien wird ein Operational Level Agreement (OLA) geschlossen?",
      options: ["zwischen zwei Kunden desselben Dienstleisters", "zwischen dem IT-Dienstleister und dem Kunden", "zwischen dem IT-Dienstleister und einer internen Organisationseinheit", "zwischen dem IT-Dienstleister und einem externen Lieferanten"],
      answer: 2,
      explain: "OLA = interne Vereinbarung, z. B. mit dem Netzwerkteam. Mit dem Kunden wird ein SLA, mit externen Lieferanten ein Underpinning Contract (UC) geschlossen." },
    { id: "q-sla-2", topic: "sla-kennzahlen", type: "single", exam: ["AP1", "AP2"],
      q: "Wie heißt der Vertrag zwischen einem IT-Dienstleister und einem externen Lieferanten, der die Erfüllung eines SLA absichert?",
      options: ["Operational Level Agreement (OLA)", "Underpinning Contract (UC)", "Service Level Agreement (SLA)", "Request for Change (RFC)"],
      answer: 1,
      explain: "Der Underpinning Contract (UC) regelt Leistungen externer Lieferanten, z. B. Ersatzteillieferung am nächsten Tag. OLA gilt intern, SLA gegenüber dem Kunden, ein RFC ist ein Änderungsantrag." },
    { id: "q-sla-3", topic: "sla-kennzahlen", type: "input", exam: ["AP1", "AP2"],
      q: "Ein Service läuft 24/7 (8.760 h pro Jahr) mit vereinbarter Verfügbarkeit von 99,5 %. Wie viele Stunden Ausfall sind pro Jahr maximal zulässig?",
      answer: ["43,8", "43,8 h", "43,8 Stunden", "43,80"],
      explain: "8.760 h × (100 % − 99,5 %) = 8.760 h × 0,005 = 43,8 h (≈ 43 h 48 min)." },
    { id: "q-sla-4", topic: "sla-kennzahlen", type: "input", exam: ["AP1", "AP2"],
      q: "Die vereinbarte Servicezeit im Monat beträgt 200 h, der Service fiel 3 h aus. Wie hoch war die Verfügbarkeit in Prozent?",
      answer: ["98,5", "98,5 %", "98,50"],
      explain: "(200 h − 3 h) ÷ 200 h × 100 = 197 ÷ 200 × 100 = 98,5 %." },
    { id: "q-sla-5", topic: "sla-kennzahlen", type: "single", exam: ["AP1", "AP2"],
      q: "Ein Server fiel in einem Monat viermal aus, insgesamt 12 Stunden. Wie groß ist die MTTR?",
      options: ["3 h", "0,33 h", "48 h", "12 h"],
      answer: 0,
      explain: "MTTR = gesamte Ausfallzeit ÷ Anzahl Ausfälle = 12 h ÷ 4 = 3 h. 48 h entstünde durch Multiplizieren, 0,33 h durch Vertauschen von Zähler und Nenner, 12 h ist die Summe, nicht der Mittelwert." },
    { id: "q-sla-6", topic: "sla-kennzahlen", type: "single", exam: ["AP1", "AP2"],
      q: "Mit welcher Formel lässt sich die Verfügbarkeit aus MTBF und MTTR berechnen?",
      options: ["MTBF ÷ (MTBF + MTTR)", "(MTBF − MTTR) ÷ MTTR", "MTBF × MTTR", "MTTR ÷ (MTBF + MTTR)"],
      answer: 0,
      explain: "Verfügbarkeit = Betriebszeit ÷ Gesamtzeit = MTBF ÷ (MTBF + MTTR). MTTR ÷ (MTBF + MTTR) wäre der Anteil der Ausfallzeit (Nichtverfügbarkeit)." },
    { id: "q-sla-7", topic: "sla-kennzahlen", type: "tf", exam: ["AP1", "AP2"],
      q: "Die Reaktionszeit im SLA endet in der Regel erst, wenn die Störung vollständig behoben ist.",
      answer: false,
      explain: "Falsch. Die Reaktionszeit reicht von der Meldung bis zum Beginn der qualifizierten Bearbeitung. Die Zeit bis zur Behebung ist die Lösungs- bzw. Wiederherstellungszeit." },
    { id: "q-sla-8", topic: "sla-kennzahlen", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Inhalte gehören typischerweise in ein Service Level Agreement?",
      options: ["Regelungen zu Vertragsstrafen bzw. Bonus/Malus", "Servicezeiten", "Reaktions- und Lösungszeiten je Priorität", "vereinbarte Verfügbarkeit", "die privaten Telefonnummern aller Techniker", "der Quellcode der betriebenen Software"],
      answer: [0, 1, 2, 3],
      explain: "Ein SLA legt messbare Service-Ziele fest: Servicezeiten, Reaktions- und Lösungszeiten, Verfügbarkeit, Eskalation, Reporting und Sanktionen. Private Daten von Beschäftigten oder Quellcode gehören nicht hinein." },
    { id: "q-sla-9", topic: "sla-kennzahlen", type: "single", exam: ["AP1", "AP2"],
      q: "Von 900 Tickets wurden 630 bereits im ersten Kontakt gelöst. Wie hoch ist die Erstlösungsquote (FCR)?",
      options: ["63 %", "70 %", "30 %", "143 %"],
      answer: 1,
      explain: "FCR = 630 ÷ 900 × 100 = 70 %. 30 % wäre der Anteil, der nicht im Erstkontakt gelöst wurde; 143 % entsteht durch Vertauschen von Zähler und Nenner." },
    { id: "q-sich-1", topic: "it-sicherstellung", type: "single", exam: ["AP2"],
      q: "Ein Dienst benötigt hintereinander einen Router (99 %) und einen Server (98 %). Wie hoch ist die Gesamtverfügbarkeit?",
      options: ["97,02 %", "98 %", "99 %", "99,98 %"],
      answer: 0,
      explain: "Reihenschaltung: 0,99 × 0,98 = 0,9702 = 97,02 %. Die Kette ist immer schlechter als ihr schwächstes Glied. 99,98 % ergäbe sich bei einer Parallelschaltung." },
    { id: "q-sich-2", topic: "it-sicherstellung", type: "single", exam: ["AP2"],
      q: "Zwei unabhängige Server mit je 99 % Verfügbarkeit werden redundant (parallel) betrieben; einer reicht aus. Wie hoch ist die Gesamtverfügbarkeit?",
      options: ["99,5 %", "98,01 %", "99 %", "99,99 %"],
      answer: 3,
      explain: "Parallel: 1 − (1 − 0,99) × (1 − 0,99) = 1 − 0,0001 = 0,9999 = 99,99 %. 98,01 % wäre das Ergebnis einer Reihenschaltung (0,99 × 0,99)." },
    { id: "q-sich-3", topic: "it-sicherstellung", type: "tf", exam: ["AP2"],
      q: "Ein RAID-System ersetzt eine regelmäßige Datensicherung.",
      answer: false,
      explain: "Falsch. RAID schützt vor dem Ausfall einzelner Platten, aber nicht vor versehentlichem Löschen, Ransomware oder Brand – diese Schäden betreffen alle Platten gleichzeitig. Dafür braucht man Backups (3-2-1-Regel)." },
    { id: "q-sich-4", topic: "it-sicherstellung", type: "single", exam: ["AP2"],
      q: "Bei welchem USV-Typ hängen die Verbraucher dauerhaft am Wechselrichter, sodass beim Stromausfall keine Umschaltzeit entsteht?",
      options: ["Überspannungsschutz-Steckdosenleiste", "Online-USV (VFI, Doppelwandler)", "Line-Interactive-USV (VI)", "Offline-USV (VFD)"],
      answer: 1,
      explain: "Die Online-USV (VFI) versorgt die Last ständig über Gleich- und Wechselrichter – ohne Umschaltzeit, mit Filterung aller Netzstörungen. Offline- und Line-Interactive-USVs schalten erst im Fehlerfall um; eine Steckdosenleiste puffert gar nichts." },
    { id: "q-sich-5", topic: "it-sicherstellung", type: "multi", exam: ["AP1", "AP2"],
      q: "Was fordert die 3-2-1-Regel der Datensicherung?",
      options: ["zwei verschiedene Speichermedien bzw. -typen", "drei Kopien der Daten", "eine Kopie auf demselben RAID-Verbund wie die Originaldaten", "zwei Kopien im selben Serverraum", "eine Kopie außer Haus"],
      answer: [0, 1, 4],
      explain: "3 Kopien (Original + 2 Sicherungen), 2 Medientypen, 1 Kopie außer Haus – so überstehen die Daten Hardwaredefekte, Brand und Diebstahl. Gegen Ransomware ergänzt man eine Offline- bzw. unveränderbare Kopie (3-2-1-1-0). Kopien im selben Raum oder auf demselben RAID würden bei einem Schaden mit zerstört." },
    { id: "q-sich-6", topic: "it-sicherstellung", type: "single", exam: ["AP2"],
      q: "Was kennzeichnet vorausschauende Wartung (Predictive Maintenance)?",
      options: ["Wartung wird vollständig an den Anwender übertragen.", "Komponenten werden unabhängig vom Zustand nach festen Intervallen getauscht.", "Zustandsdaten werden ausgewertet, und Komponenten werden kurz vor dem erwarteten Ausfall getauscht.", "Komponenten werden erst getauscht, nachdem sie ausgefallen sind."],
      answer: 2,
      explain: "Predictive Maintenance nutzt Messwerte (z. B. S.M.A.R.T., Temperaturtrends), um Ausfälle vorherzusagen. Tausch nach Ausfall ist korrektive Wartung, Tausch nach Kalender präventive Wartung." },
    { id: "q-opt-1", topic: "optimierung", type: "single", exam: ["AP1", "AP2"],
      q: "Was bedeutet „Shift-left“ im Support?",
      options: ["Lösungen auf eine frühere, günstigere Ebene verlagern, z. B. vom 2nd Level in den 1st Level oder in den Self-Service", "Tickets grundsätzlich an den 3rd Level weitergeben", "Servicezeiten in die Abendstunden verschieben", "Tickets nach links in der Prioritätsmatrix einsortieren"],
      answer: 0,
      explain: "Shift-left verlagert Wissen und Lösungen „nach links“ in der Support-Kette (3rd → 2nd → 1st Level → Self-Service). Das senkt Kosten und beschleunigt Lösungen. Mehr Tickets beim 3rd Level wären das Gegenteil." },
    { id: "q-opt-2", topic: "optimierung", type: "input", exam: ["AP1", "AP2"],
      q: "Ein Service Desk kostet 240.000 € pro Jahr und bearbeitet 16.000 Tickets. Wie hoch sind die Kosten pro Ticket in Euro?",
      answer: ["15", "15 €", "15,00", "15 Euro"],
      explain: "Kosten pro Ticket = 240.000 € ÷ 16.000 = 15 €." },
    { id: "q-opt-3", topic: "optimierung", type: "single", exam: ["AP1", "AP2"],
      q: "Wie wird der Net Promoter Score (NPS) berechnet?",
      options: ["Anteil der Promotoren plus Anteil der Passiven", "Anteil der Promotoren (9–10 Punkte) minus Anteil der Kritiker (0–6 Punkte)", "Anzahl zufriedener Antworten geteilt durch alle Antworten", "Durchschnitt aller vergebenen Punkte"],
      answer: 1,
      explain: "NPS = % Promotoren − % Kritiker, Wertebereich −100 bis +100; die Passiven (7–8) zählen nicht. Zufriedene ÷ alle Antworten ist die Formel für den CSAT." },
    { id: "q-opt-4", topic: "optimierung", type: "single", exam: ["AP1", "AP2"],
      q: "In welcher Phase des PDCA-Zyklus wird ein Soll-Ist-Vergleich durchgeführt?",
      options: ["Do", "Plan", "Check", "Act"],
      answer: 2,
      explain: "Check = überprüfen, ob die Maßnahme das Ziel erreicht hat (Soll-Ist-Vergleich). Plan legt Ziele fest, Do setzt um, Act standardisiert oder steuert nach." },
    { id: "q-opt-5", topic: "optimierung", type: "tf", exam: ["AP1", "AP2"],
      q: "Sinkt die Erstlösungsquote von 75 % auf 70 %, ist sie um 5 Prozent gesunken.",
      answer: false,
      explain: "Falsch. Sie ist um 5 Prozent<strong>punkte</strong> gesunken. Relativ entspricht das 5 ÷ 75 ≈ 6,7 Prozent." },
    { id: "q-opt-6", topic: "optimierung", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Maßnahmen senken typischerweise die gesamten Supportkosten?",
      options: ["Ursachen wiederkehrender Störungen beseitigen", "Wissensdatenbank für den 1st Level", "bei jedem Ticket einen Techniker hinfahren lassen statt Fernwartung zu nutzen", "alle Tickets direkt an den 3rd Level geben", "Self-Service-Portal für Passwort-Resets"],
      answer: [0, 1, 4],
      explain: "Self-Service und Wissensdatenbank verlagern Lösungen auf günstigere Ebenen (Shift-left), Problem Management verringert die Ticketmenge. Der 3rd Level und Vor-Ort-Einsätze sind die teuersten Supportformen." },
    { id: "q-kom-1", topic: "kommunikation", type: "single", exam: ["AP1"],
      q: "Ein Kunde sagt: „Das dauert ja schon wieder ewig!“ Welche Seite der Nachricht (Schulz von Thun) beschreibt die Botschaft „Ich bin ungeduldig und genervt“?",
      options: ["Appell", "Beziehung", "Selbstkundgabe", "Sachinhalt"],
      answer: 2,
      explain: "Was der Sender über sich selbst preisgibt (Gefühle, Stimmung), ist die Selbstkundgabe (Selbstoffenbarung). Sachinhalt wäre „Die Bearbeitung dauert lange“, Beziehung „Ihr seid zu langsam“, Appell „Beeilt euch!“." },
    { id: "q-kom-2", topic: "kommunikation", type: "single", exam: [],
      q: "Was bedeutet das Axiom „Man kann nicht nicht kommunizieren“ im Support?",
      options: ["Nonverbale Signale spielen am Telefon keine Rolle.", "Auch Schweigen oder eine unbeantwortete E-Mail sendet eine Botschaft an den Kunden.", "Nur schriftliche Kommunikation ist verbindlich.", "Man muss jede Anfrage sofort telefonisch beantworten."],
      answer: 1,
      explain: "Jedes Verhalten hat Mitteilungscharakter – wer nicht reagiert, signalisiert z. B. Desinteresse. Daraus folgt nicht, dass alles sofort telefonisch geklärt werden muss; paraverbale Signale (Tonfall) sind am Telefon sogar besonders wichtig." },
    { id: "q-kom-3", topic: "kommunikation", type: "multi", exam: ["AP1"],
      q: "Welche Seiten einer Nachricht unterscheidet das Vier-Seiten-Modell nach Schulz von Thun?",
      options: ["Appell", "Codierung", "Rückkopplung", "Beziehung", "Sachinhalt", "Selbstkundgabe"],
      answer: [0, 3, 4, 5],
      explain: "Die vier Seiten sind Sachinhalt, Selbstkundgabe (Selbstoffenbarung), Beziehung und Appell. Codierung und Rückkopplung (Feedback) sind Begriffe aus dem Sender-Empfänger-Modell." },
    { id: "q-kom-4", topic: "kommunikation", type: "single", exam: ["AP1"],
      q: "Welche Frage ist eine offene Frage?",
      options: ["„Haben Sie den Rechner neu gestartet?“", "„Sie haben doch sicher nichts verändert, oder?“", "„Leuchtet die Netzwerk-LED?“", "„Was genau passiert, wenn Sie auf Drucken klicken?“"],
      answer: 3,
      explain: "Offene Fragen (W-Fragen) lassen den Kunden frei erzählen und liefern viele Informationen. Die Fragen nach LED und Neustart sind geschlossene Ja/Nein-Fragen, „Sie haben doch sicher nichts verändert, oder?“ ist eine Suggestivfrage, die man vermeiden sollte." },
    { id: "q-kom-5", topic: "kommunikation", type: "tf", exam: ["AP1"],
      q: "Zur paraverbalen Kommunikation gehören Tonfall, Sprechtempo und Lautstärke.",
      answer: true,
      explain: "Richtig. Paraverbal = wie etwas gesagt wird. Verbal sind die Worte selbst, nonverbal Mimik, Gestik und Körperhaltung. Am Telefon wirkt vor allem die paraverbale Ebene." },
    { id: "q-kom-6", topic: "kommunikation", type: "multi", exam: [],
      q: "Welche Aussagen gehören zu den Axiomen nach Watzlawick?",
      options: ["Jede Kommunikation hat einen Inhalts- und einen Beziehungsaspekt.", "Kommunikation besteht aus Sender, Kanal und Empfänger.", "Kommunikation verläuft symmetrisch oder komplementär.", "Man kann nicht nicht kommunizieren.", "Jede Nachricht hat Sachinhalt, Selbstkundgabe, Beziehung und Appell."],
      answer: [0, 2, 3],
      explain: "Axiome nach Watzlawick sind „Man kann nicht nicht kommunizieren“, „Jede Kommunikation hat einen Inhalts- und einen Beziehungsaspekt“ und „Kommunikation verläuft symmetrisch oder komplementär“ (dazu kommen Interpunktion sowie digitale und analoge Modalitäten). Die vier Seiten einer Nachricht stammen von Schulz von Thun, Sender–Kanal–Empfänger vom Sender-Empfänger-Modell." },
    { id: "q-kom-7", topic: "kommunikation", type: "single", exam: ["AP1"],
      q: "Womit stellt man im Sender-Empfänger-Modell sicher, dass eine Nachricht richtig verstanden wurde?",
      options: ["mit einem lauteren Tonfall", "mit möglichst vielen Fachbegriffen", "mit Rückmeldung (Feedback) des Empfängers", "mit einem zusätzlichen Übertragungskanal"],
      answer: 2,
      explain: "Erst die Rückmeldung zeigt, ob der Empfänger die Nachricht so decodiert hat wie gemeint – z. B. durch Paraphrasieren oder eine Kontrollfrage. Fachjargon ist eher eine Störquelle." },
    { id: "q-konf-1", topic: "konflikte", type: "single", exam: [],
      q: "Ein Kunde ist hilfsbereit, geduldig, harmoniebedürftig und braucht Sicherheit. Welchem DISG-Typ entspricht das am ehesten?",
      options: ["S – stetig", "D – dominant", "I – initiativ", "G – gewissenhaft"],
      answer: 0,
      explain: "Der S-Typ ist zurückhaltend und menschenorientiert: ruhig, loyal, sicherheitsbedürftig. D ist direkt und ergebnisorientiert, I kontaktfreudig und begeisterungsfähig, G analytisch und detailgenau." },
    { id: "q-konf-2", topic: "konflikte", type: "single", exam: [],
      q: "Wie gehst du im Support am besten auf einen Kunden vom D-Typ (dominant) ein?",
      options: ["möglichst viele technische Details und Messwerte vorlegen", "sehr langsam und in vielen kleinen Schritten vorgehen", "ausführlich über persönliche Themen plaudern", "kurz, klar und lösungsorientiert, mit Optionen zur Entscheidung"],
      answer: 3,
      explain: "D-Typen wollen schnell Ergebnisse und selbst entscheiden. Plaudern passt eher zum I-Typ, kleine geduldige Schritte zum S-Typ, viele Details und Belege zum G-Typ." },
    { id: "q-konf-3", topic: "konflikte", type: "input", exam: [],
      q: "Wie viele Eskalationsstufen umfasst das Konfliktmodell nach Friedrich Glasl? (Zahl)",
      answer: ["9", "neun"],
      explain: "Neun Stufen in drei Ebenen: win-win (1–3), win-lose (4–6) und lose-lose (7–9)." },
    { id: "q-konf-4", topic: "konflikte", type: "single", exam: ["AP1"],
      q: "Welche Formulierung wirkt in einem angespannten Kundengespräch deeskalierend?",
      options: ["„Ich verstehe Ihren Ärger. Lassen Sie uns gemeinsam schauen, wie ich Ihnen schnell helfen kann.“", "„Beruhigen Sie sich erst mal!“", "„Da sind Sie nicht der Einzige.“", "„Das ist nicht meine Schuld.“"],
      answer: 0,
      explain: "Verständnis zeigen und Hilfe anbieten nimmt Emotionen die Schärfe. Aufforderungen zur Beruhigung, Relativieren oder Rechtfertigen wirken belehrend oder abweisend und heizen den Konflikt eher an." },
    { id: "q-konf-5", topic: "konflikte", type: "tf", exam: ["AP1"],
      q: "Wer einem verärgerten Kunden Verständnis zeigt, übernimmt damit automatisch die Schuld für den Fehler.",
      answer: false,
      explain: "Falsch. Verständnis bezieht sich auf die Gefühle des Kunden („Ich verstehe, dass das ärgerlich ist“), nicht auf eine Schuldfrage. Es öffnet den Weg zurück auf die Sachebene." },
    { id: "q-konf-6", topic: "konflikte", type: "multi", exam: ["AP1"],
      q: "Welche Verhaltensweisen wirken in Konfliktgesprächen deeskalierend?",
      options: ["aktiv zuhören und ausreden lassen", "Ich-Botschaften statt Du-Botschaften verwenden", "mit Fachbegriffen die eigene Kompetenz betonen", "verbindliche nächste Schritte und Rückrufzeiten nennen", "den Kunden unterbrechen, um Zeit zu sparen"],
      answer: [0, 1, 3],
      explain: "Zuhören, Ich-Botschaften und verbindliche Zusagen schaffen Vertrauen. Unterbrechen und Fachjargon wirken respektlos bzw. überheblich und verschärfen den Konflikt." },
    { id: "q-epk-1", topic: "epk", type: "single", exam: ["AP1", "AP2"],
      q: "Mit welchem Symbol wird in einer EPK ein Ereignis dargestellt?",
      options: ["Sechseck", "Ellipse mit senkrechtem Strich", "Rechteck mit abgerundeten Ecken", "Kreis mit Konnektorsymbol"],
      answer: 0,
      explain: "Ereignis = Sechseck. Das abgerundete Rechteck ist die Funktion, der Kreis ein Konnektor (∧, ∨, XOR), die Ellipse mit Strich eine Organisationseinheit (eEPK)." },
    { id: "q-epk-2", topic: "epk", type: "single", exam: ["AP1", "AP2"],
      q: "Was darf in einer EPK nicht direkt auf ein Ereignis folgen?",
      options: ["eine UND-Verzweigung", "eine XOR-Verzweigung", "eine XOR-Zusammenführung, die mehrere Ereignisse zu einer Funktion führt", "eine Funktion"],
      answer: 1,
      explain: "Ereignisse können nichts entscheiden – deshalb darf nach einem Ereignis keine XOR- oder ODER-Verzweigung folgen; die Entscheidung trifft immer eine Funktion. Eine UND-Verzweigung (paralleles Auslösen) und das Zusammenführen mehrerer Ereignisse sind erlaubt." },
    { id: "q-epk-3", topic: "epk", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Elemente kommen in der erweiterten EPK (eEPK) gegenüber der einfachen EPK hinzu?",
      options: ["Konnektor", "Funktion", "Ereignis", "Organisationseinheit", "Informationsobjekt"],
      answer: [3, 4],
      explain: "Die eEPK ergänzt die Organisationssicht (wer führt die Funktion aus?) und die Informationssicht (welche Daten/Dokumente werden gelesen oder geschrieben?). Ereignisse, Funktionen und Konnektoren gibt es schon in der einfachen EPK." },
    { id: "q-epk-4", topic: "epk", type: "tf", exam: ["AP1", "AP2"],
      q: "Eine EPK beginnt und endet immer mit einem Ereignis.",
      answer: true,
      explain: "Richtig. Das Startereignis beschreibt, wodurch der Prozess ausgelöst wird, das Endereignis den erreichten Zustand. Dazwischen wechseln sich Funktionen und Ereignisse ab." },
    { id: "q-epk-5", topic: "epk", type: "single", exam: ["AP1", "AP2"],
      q: "Welche Beschriftung ist für eine Funktion in einer EPK korrekt?",
      options: ["„Service Desk“", "„Ticket ist erfasst“", "„Ticketsystem“", "„Ticket erfassen“"],
      answer: 3,
      explain: "Funktionen beschreiben Tätigkeiten (Substantiv + Verb im Infinitiv). „Ticket ist erfasst“ ist ein Ereignis (Zustand), „Service Desk“ eine Organisationseinheit und „Ticketsystem“ ein Informationsobjekt." },
    { id: "q-epk-6", topic: "epk", type: "single", exam: ["AP1", "AP2"],
      q: "Nach der Funktion „Lagerbestand prüfen“ tritt genau eines der Ereignisse „Artikel ist verfügbar“ oder „Artikel ist nicht verfügbar“ ein. Welcher Konnektor ist richtig?",
      options: ["kein Konnektor, zwei Pfeile genügen", "UND (∧)", "XOR (exklusives Oder)", "ODER (∨)"],
      answer: 2,
      explain: "Die beiden Ereignisse schließen sich gegenseitig aus – genau eines tritt ein: XOR. UND hieße, beide treten ein; ODER ließe auch beide gleichzeitig zu. Verzweigungen ohne Konnektor sind in der EPK nicht erlaubt." },
    { id: "q-bpmn-1", topic: "bpmn-uml", type: "single", exam: ["AP1", "AP2"],
      q: "Wie wird in BPMN 2.0 die Kommunikation zwischen zwei Pools dargestellt?",
      options: ["als gemeinsame Lane", "als Sequenzfluss (durchgezogene Linie)", "als Nachrichtenfluss (gestrichelte Linie)", "als Assoziation zu einem Datenobjekt"],
      answer: 2,
      explain: "Zwischen Pools (eigenständigen Beteiligten) ist nur der Nachrichtenfluss erlaubt. Sequenzfluss beschreibt die Reihenfolge innerhalb eines Pools; Lanes gliedern einen Pool, verbinden aber keine Pools." },
    { id: "q-bpmn-2", topic: "bpmn-uml", type: "single", exam: ["AP1", "AP2"],
      q: "Was bedeutet in BPMN eine Raute mit einem „+“?",
      options: ["exklusives Gateway (XOR)", "inklusives Gateway (ODER)", "Zwischenereignis", "paralleles Gateway (UND)"],
      answer: 3,
      explain: "Raute mit + = paralleles Gateway: Alle Pfade werden gleichzeitig durchlaufen bzw. synchronisiert. Das X steht für exklusiv, der Kreis für inklusiv; Ereignisse sind Kreise, keine Rauten." },
    { id: "q-bpmn-3", topic: "bpmn-uml", type: "single", exam: ["AP1", "AP2"],
      q: "Wie wird in BPMN ein Endereignis dargestellt?",
      options: ["Kreis mit doppeltem Rand", "Raute mit Kreis", "Kreis mit dickem Rand", "Kreis mit dünnem Rand"],
      answer: 2,
      explain: "Startereignis = dünner Kreis, Zwischenereignis = doppelter Kreis, Endereignis = dicker Kreis. Die Raute mit Kreis ist das inklusive Gateway." },
    { id: "q-bpmn-4", topic: "bpmn-uml", type: "tf", exam: ["AP1", "AP2"],
      q: "In BPMN darf ein Sequenzfluss die Grenze eines Pools überschreiten.",
      answer: false,
      explain: "Falsch. Sequenzfluss bleibt innerhalb eines Pools (er darf aber Lanes überqueren). Zwischen Pools wird ausschließlich Nachrichtenfluss verwendet." },
    { id: "q-bpmn-5", topic: "bpmn-uml", type: "single", exam: ["AP1", "AP2"],
      q: "Was bedeutet eine «include»-Beziehung im Use-Case-Diagramm?",
      options: ["Der Anwendungsfall wird nur unter einer bestimmten Bedingung ausgeführt.", "Ein Akteur erbt alle Anwendungsfälle eines anderen Akteurs.", "Zwei Akteure kommunizieren direkt miteinander.", "Der eingebundene Anwendungsfall wird bei jeder Ausführung des Basisfalls immer mit ausgeführt."],
      answer: 3,
      explain: "«include» = Pflichtbestandteil (Pfeil vom Basisfall zum eingebundenen Fall). Die bedingte Ausführung ist «extend», das Erben ist eine Generalisierung. Direkte Beziehungen zwischen Akteuren werden im Use-Case-Diagramm nicht modelliert." },
    { id: "q-bpmn-6", topic: "bpmn-uml", type: "single", exam: ["AP1", "AP2"],
      q: "In welche Richtung zeigt der gestrichelte Pfeil einer «extend»-Beziehung?",
      options: ["vom Akteur zum Anwendungsfall", "vom erweiternden Anwendungsfall zum Basis-Anwendungsfall", "von der Systemgrenze zum Akteur", "vom Basis-Anwendungsfall zum erweiternden Anwendungsfall"],
      answer: 1,
      explain: "Bei «extend» zeigt der Pfeil vom optionalen, erweiternden Fall auf den Basisfall (mit Bedingung/Extension Point). Bei «include» ist es umgekehrt: vom Basisfall zum eingebundenen Fall." },
    { id: "q-bpmn-7", topic: "bpmn-uml", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Aussagen zum UML-Use-Case-Diagramm sind richtig?",
      options: ["Anwendungsfälle werden als Ellipsen dargestellt.", "Das Diagramm zeigt die zeitliche Reihenfolge der Abläufe.", "Lanes gliedern die Zuständigkeiten innerhalb des Systems.", "Akteure stehen außerhalb der Systemgrenze.", "Ein Akteur kann auch ein externes System sein."],
      answer: [0, 3, 4],
      explain: "Akteure (Personen-Rollen oder externe Systeme) stehen außerhalb, Anwendungsfälle als Ellipsen innerhalb der Systemgrenze. Die zeitliche Abfolge zeigt ein Aktivitäts- oder Sequenzdiagramm; Lanes gibt es in BPMN bzw. als Schwimmbahnen im Aktivitätsdiagramm." },
    { id: "q-bpmn-8", topic: "bpmn-uml", type: "single", exam: ["AP1", "AP2"],
      q: "Was stellt eine Lane in einem BPMN-Diagramm dar?",
      options: ["einen Nachrichtenaustausch", "eine Rolle oder Abteilung innerhalb eines Pools", "ein eigenständiges Unternehmen", "eine einzelne Aufgabe"],
      answer: 1,
      explain: "Pools stehen für eigenständige Beteiligte (z. B. Unternehmen), Lanes unterteilen einen Pool nach Rollen oder Abteilungen (z. B. Service Desk, 2nd Level). Aufgaben sind abgerundete Rechtecke, Nachrichten werden als Nachrichtenfluss gezeichnet." },
    { id: "q-np-1", topic: "netzplan-gantt", type: "single", exam: ["AP1"],
      q: "Wie berechnet man den Gesamtpuffer (GP) eines Vorgangs?",
      options: ["GP = SAZ − FAZ", "GP = FAZ − SAZ", "GP = FAZ des Nachfolgers − FEZ", "GP = FEZ − FAZ"],
      answer: 0,
      explain: "GP = SAZ − FAZ (gleichwertig SEZ − FEZ). FEZ − FAZ ist die Dauer, FAZ(Nachfolger) − FEZ ist der freie Puffer." },
    { id: "q-np-2", topic: "netzplan-gantt", type: "single", exam: ["AP1"],
      q: "Ein Vorgang hat mehrere Vorgänger. Wie ermittelst du seinen FAZ?",
      options: ["kleinster FEZ aller Vorgänger", "Summe der FEZ aller Vorgänger", "größter FEZ aller Vorgänger", "kleinster SAZ aller Vorgänger"],
      answer: 2,
      explain: "Ein Vorgang kann erst beginnen, wenn alle Vorgänger fertig sind – also beim größten FEZ. Den kleinsten Wert (SAZ der Nachfolger) nimmt man bei der Rückwärtsrechnung für den SEZ." },
    { id: "q-np-3", topic: "netzplan-gantt", type: "input", exam: ["AP1"],
      q: "Ein Vorgang hat FAZ = 4, FEZ = 9 und SAZ = 6. Wie groß ist sein Gesamtpuffer in Tagen?",
      answer: ["2", "2 Tage"],
      explain: "GP = SAZ − FAZ = 6 − 4 = 2 Tage (Kontrolle: SEZ = 6 + 5 = 11, SEZ − FEZ = 11 − 9 = 2)." },
    { id: "q-np-4", topic: "netzplan-gantt", type: "single", exam: ["AP1"],
      q: "Woran erkennst du im berechneten Netzplan die Vorgänge des kritischen Pfades?",
      options: ["Sie haben keine Vorgänger.", "Sie haben die längste Einzeldauer.", "Ihr freier Puffer ist größer als ihr Gesamtpuffer.", "Ihr Gesamtpuffer ist 0."],
      answer: 3,
      explain: "Kritisch sind alle Vorgänge ohne Gesamtpuffer (GP = 0): Jede Verzögerung verschiebt das Projektende. Die längste Einzeldauer sagt nichts über die Lage im Netz aus, und FP kann nie größer als GP sein." },
    { id: "q-np-5", topic: "netzplan-gantt", type: "input", exam: ["AP1"],
      q: "Ein Vorgang hat FEZ = 10. Seine Nachfolger haben FAZ = 12 und FAZ = 15. Wie groß ist sein freier Puffer?",
      answer: ["2", "2 Tage"],
      explain: "FP = kleinster FAZ der Nachfolger − eigener FEZ = 12 − 10 = 2. Maßgeblich ist der früheste Nachfolger, sonst würde dieser verschoben." },
    { id: "q-np-6", topic: "netzplan-gantt", type: "tf", exam: ["AP1"],
      q: "Der freie Puffer eines Vorgangs ist nie größer als sein Gesamtpuffer.",
      answer: true,
      explain: "Richtig. Der freie Puffer darf ausgeschöpft werden, ohne dass sich ein Nachfolger verschiebt; der Gesamtpuffer, ohne dass sich das Projektende verschiebt. Deshalb gilt immer FP ≤ GP." },
    { id: "q-np-7", topic: "netzplan-gantt", type: "single", exam: ["AP1"],
      q: "Ein Vorgang hat mehrere Nachfolger. Wie ermittelst du bei der Rückwärtsrechnung seinen SEZ?",
      options: ["kleinster SAZ aller Nachfolger", "FAZ plus Dauer", "größter FEZ aller Nachfolger", "größter SAZ aller Nachfolger"],
      answer: 0,
      explain: "Der Vorgang muss spätestens fertig sein, wenn der früheste der späten Anfänge der Nachfolger beginnt – also beim kleinsten SAZ. FAZ plus Dauer ergibt den FEZ (Vorwärtsrechnung)." },
    { id: "q-np-8", topic: "netzplan-gantt", type: "single", exam: ["AP1"],
      q: "Was ist ein Meilenstein im Gantt-Diagramm?",
      options: ["ein wichtiges Ereignis bzw. Zwischenziel ohne Dauer", "die Summe aller Pufferzeiten", "ein Vorgang mit großem Puffer", "der Vorgang mit der längsten Dauer"],
      answer: 0,
      explain: "Meilensteine (◆) markieren wichtige Termine wie „Hardware geliefert“ oder „Go-live“. Sie haben keine Dauer und dienen der Terminkontrolle." },
    { id: "q-np-9", topic: "netzplan-gantt", type: "multi", exam: ["AP1"],
      q: "Ein Projekt droht den Endtermin zu überschreiten. Welche Maßnahmen können helfen?",
      options: ["Vorgänge parallelisieren, wo die Abhängigkeiten es zulassen", "im Netzplan einfach eine kürzere Projektdauer eintragen", "Vorgänge auf dem kritischen Pfad mit zusätzlichem Personal verkürzen", "einen Vorgang mit großem Gesamtpuffer verkürzen", "Ressourcen von Vorgängen mit Puffer auf kritische Vorgänge umschichten"],
      answer: [0, 2, 4],
      explain: "Nur Verkürzungen auf dem kritischen Pfad verkürzen das Projekt. Ein Vorgang mit Puffer ist nicht terminbestimmend – ihn zu verkürzen bringt nichts. Eine geschönte Zahl im Plan ändert die tatsächliche Dauer nicht." },
    { id: "q-np-10", topic: "netzplan-gantt", type: "multi", exam: ["AP1"],
      q: "Welche Aussagen zum kritischen Pfad sind richtig?",
      options: ["Er besteht immer aus genau drei Vorgängen.", "Jede Verzögerung eines Vorgangs auf ihm verschiebt das Projektende.", "Alle Vorgänge auf ihm haben einen Gesamtpuffer von 0.", "Er ist der längste Weg vom Start- zum Endvorgang.", "Seine Vorgänge haben den größten freien Puffer."],
      answer: [1, 2, 3],
      explain: "Der kritische Pfad ist der längste Weg durch den Netzplan; seine Vorgänge haben keinen Puffer, jede Verzögerung verlängert das Projekt. Die Zahl der Vorgänge ist beliebig, und ohne Gesamtpuffer gibt es auch keinen freien Puffer." },
    { id: "q-itsm-7", topic: "itsm-grundlagen", type: "multi", exam: [],
      q: "Welche der folgenden Aussagen sind Leitprinzipien (Guiding Principles) von ITIL 4?",
      options: ["Fokus auf Wert", "Jeden Prozess vollständig neu entwickeln", "Erst alles dokumentieren, dann handeln", "Dort anfangen, wo man steht", "Einfach und praktisch halten"],
      answer: [0, 3, 4],
      explain: "Zu den sieben Leitprinzipien gehören u. a. Fokus auf Wert, Dort anfangen, wo man steht, und Einfach und praktisch halten (außerdem: iterativ mit Feedback, zusammenarbeiten und Transparenz fördern, ganzheitlich denken, optimieren und automatisieren). Übermäßige Dokumentation und kompletter Neubeginn widersprechen den Prinzipien." },
    { id: "q-dl-8", topic: "dienstleistungen", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Aufträge sind typischerweise Werkverträge?",
      options: ["eine zweitägige Administratorschulung durchführen", "ein WLAN einrichten und funktionsfähig mit Abnahmeprotokoll übergeben", "ein Skript zur automatischen Benutzeranlage zum Festpreis programmieren", "Telefon-Support nach Stunden abrechnen", "einen Server für 36 Monate gegen monatliches Entgelt überlassen"],
      answer: [1, 2],
      explain: "Bei WLAN-Einrichtung und Skripterstellung ist ein Erfolg (funktionierendes Ergebnis) geschuldet – Werkvertrag. Support nach Stunden und Schulungen sind Dienstverträge (Tätigkeit), die Überlassung eines Servers gegen Entgelt ist Miete." },
    { id: "q-inc-8", topic: "incident", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Angaben gehören in ein Störungsticket?",
      options: ["Beschreibung des Fehlerbilds", "Kontostand der Kundenfirma", "Melder mit Kontaktdaten", "eindeutige Ticketnummer und Zeitpunkt der Meldung", "Priorität und Status", "Privatadresse des bearbeitenden Technikers"],
      answer: [0, 2, 3, 4],
      explain: "Ein Ticket muss eindeutig identifizierbar sein und alle Informationen für Bearbeitung, Priorisierung, SLA-Überwachung und Auswertung enthalten. Private Daten des Technikers oder Finanzdaten des Kunden sind überflüssig und aus Datenschutzsicht unzulässig." },
    { id: "q-dl-9", topic: "dienstleistungen", type: "single", exam: ["AP1"],
      q: "Bei der Abnahme stellt der Kunde fest, dass nur 18 der 20 bestellten Headsets geliefert wurden. Welche Mängelart liegt vor?",
      options: ["Schlechtleistung", "Minderlieferung", "Annahmeverzug", "Falschlieferung"],
      answer: 1,
      explain: "Zu geringe Menge = Minderlieferung (Quantitätsmangel). Schlechtleistung wäre ein Qualitätsmangel (z. B. defektes Headset), Falschlieferung eine andere Ware als bestellt. Annahmeverzug liegt vor, wenn der Käufer ordnungsgemäße Ware nicht annimmt." },
    { id: "q-dl-10", topic: "dienstleistungen", type: "multi", exam: ["AP1"],
      q: "Was ist bei der Leistungserbringung per Fernwartung zu beachten?",
      options: ["Datenschutz, z. B. Auftragsverarbeitung bei Zugriff auf personenbezogene Daten", "Anwesenheit des Technikers im Serverraum des Kunden", "Berechnung einer Anfahrtspauschale", "Zustimmung des Kunden zur Fernwartungssitzung", "Protokollierung der durchgeführten Arbeiten"],
      answer: [0, 3, 4],
      explain: "Fernwartung braucht die Zustimmung des Kunden, eine nachvollziehbare Protokollierung und datenschutzkonforme Regelungen. Anfahrtspauschale und Anwesenheit vor Ort gehören gerade nicht dazu – das sind Merkmale des Vor-Ort-Einsatzes." },
    { id: "q-chg-8", topic: "change", type: "single", exam: ["AP1"],
      q: "In welcher Reihenfolge laufen die Phasen des Veränderungsmodells nach Lewin ab?",
      options: ["Auftauen – Verändern – Stabilisieren", "Verändern – Auftauen – Stabilisieren", "Forming – Storming – Norming – Performing", "Planen – Umsetzen – Prüfen – Handeln"],
      answer: 0,
      explain: "Lewin: Unfreeze (Notwendigkeit erkennen, Bereitschaft schaffen), Move (verändern), Refreeze (Neues verankern). Plan-Do-Check-Act ist der PDCA-Zyklus, Forming bis Performing sind die Teamphasen nach Tuckman." },
    { id: "q-opt-7", topic: "optimierung", type: "single", exam: ["AP1", "AP2"],
      q: "Welche Norm beschreibt Anforderungen an ein Qualitätsmanagementsystem?",
      options: ["ISO/IEC 27001", "DIN EN ISO 9241", "ISO 9001", "ISO/IEC 20000-1"],
      answer: 2,
      explain: "ISO 9001 ist die Norm für QM-Systeme (Kunden- und Prozessorientierung, kontinuierliche Verbesserung). ISO/IEC 20000-1 betrifft IT-Service-Management, ISO/IEC 27001 Informationssicherheits-Managementsysteme, DIN EN ISO 9241 die Ergonomie." },
    { id: "q-sich-7", topic: "it-sicherstellung", type: "single", exam: ["AP2"],
      q: "Welche Dokumentation richtet sich vor allem an Systembetreuer und beschreibt Installation, Konfiguration sowie Backup und Wiederherstellung?",
      options: ["Benutzerhandbuch", "System- bzw. Administrationshandbuch", "Service-Katalog", "Abnahmeprotokoll"],
      answer: 1,
      explain: "Das Systemhandbuch enthält technische Details für Administratoren. Das Benutzerhandbuch erklärt Anwendern die Bedienung, das Abnahmeprotokoll dokumentiert die Übergabe, der Service-Katalog listet bestellbare Leistungen." },
    { id: "q-sd-8", topic: "service-desk", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Aussagen zum Einsatz eines KI-Chatbots im Service Desk sind richtig?",
      options: ["Er kann Standardfragen rund um die Uhr beantworten.", "Er liefert garantiert fehlerfreie Antworten.", "Seine Antworten können sachlich falsch sein.", "Personenbezogene Daten dürfen nur DSGVO-konform verarbeitet werden.", "Mit seinem Einsatz entfällt die Verantwortung des Unternehmens für die Antworten."],
      answer: [0, 2, 3],
      explain: "Chatbots entlasten den 1st Level und sind ständig erreichbar, können aber halluzinieren; Datenschutz gilt uneingeschränkt. Fehlerfreiheit ist nicht garantiert, und die Verantwortung für die Auskünfte bleibt beim Unternehmen." },
    { id: "q-sd-9", topic: "service-desk", type: "tf", exam: ["AP1", "AP2"],
      q: "Ticketsysteme können Tickets automatisch eskalieren, wenn ein festgelegter Anteil einer SLA-Frist verstrichen ist.",
      answer: true,
      explain: "Richtig. Neben funktionaler und hierarchischer Eskalation gibt es die zeitgesteuerte Eskalation: Das System benachrichtigt z. B. bei 75 % der Frist das nächste Level oder die Teamleitung." },
    { id: "q-sla-10", topic: "sla-kennzahlen", type: "single", exam: ["AP2"],
      q: "Ein Hersteller gibt für eine Festplatte eine MTBF von 200.000 h an. Wie hoch ist die jährliche Ausfallrate (AFR ≈ 8.760 h ÷ MTBF) ungefähr?",
      options: ["≈ 4,4 %", "≈ 22,8 %", "≈ 44 %", "≈ 0,44 %"],
      answer: 0,
      explain: "8.760 ÷ 200.000 = 0,0438 ≈ 4,4 %. Bei 100 solcher Platten muss man also mit etwa vier Ausfällen pro Jahr rechnen. Die anderen Werte entstehen durch Kommafehler bzw. Vertauschen von Zähler und Nenner." },
    { id: "q-itsm-8", topic: "itsm-grundlagen", type: "single", exam: [],
      q: "Nach einem Abteilungswechsel soll ein Anwender nur noch auf die Ordner seiner neuen Abteilung zugreifen können. Welche ITIL-4-Practice ist dafür zuständig?",
      options: ["Information Security Management", "Capacity and Performance Management", "Service Catalogue Management", "Service Continuity Management"],
      answer: 0,
      explain: "Identitäten und Zugriffsrechte verwalten gehört in ITIL 4 zum Information Security Management (in ITIL v3 ein eigener Prozess „Access Management“). Capacity sorgt für ausreichende Leistung, der Service-Katalog listet bestellbare Services, Continuity bereitet auf Notfälle vor." },
    { id: "q-itsm-9", topic: "itsm-grundlagen", type: "single", exam: [],
      q: "Was unterscheidet den Service-Katalog vom Service-Portfolio?",
      options: ["Der Katalog enthält nur eingestellte Services, das Portfolio nur neue.", "Der Katalog zeigt die aktuell bestellbaren Services; das Portfolio umfasst zusätzlich geplante und eingestellte Services.", "Das Portfolio ist die Liste aller offenen Tickets, der Katalog die Liste der Known Errors.", "Katalog und Portfolio sind zwei Namen für die CMDB."],
      answer: 1,
      explain: "Der Service-Katalog richtet sich an Kunden: Was kann ich jetzt bestellen, zu welchem Preis, in welcher Zeit? Das Portfolio ist die interne, strategische Gesamtsicht mit geplanten, aktiven und auslaufenden Services – der Katalog ist ein Teil davon. Tickets, Known Errors und CIs stehen im Ticketsystem, in der KEDB bzw. der CMDB." },
    { id: "q-itsm-10", topic: "itsm-grundlagen", type: "multi", exam: [],
      q: "Welche Zuordnungen von ITIL-v3-Begriffen zu den Namen in ITIL 4 sind richtig?",
      options: ["Request Fulfilment → Service Request Management", "Change Management → Change Enablement", "Continual Service Improvement → Continual Improvement", "Incident Management → Problem Management", "Service Desk → Service Level Management"],
      answer: [0, 1, 2],
      explain: "ITIL 4 hat einige Prozesse als Practices umbenannt: Service Request Management, Change Enablement und Continual Improvement. Incident Management, Problem Management, Service Desk und Service Level Management heißen weiterhin so und sind jeweils eigene Practices." },
    { id: "q-chg-9", topic: "change", type: "single", exam: ["AP1"],
      q: "Der AP1-Prüfungskatalog nennt „Change Management“ im Zusammenhang mit „Veränderungsprozesse begleiten“. Was ist dort gemeint?",
      options: ["die Genehmigung technischer Änderungen ausschließlich durch das CAB", "die Pflege der Configuration Items in der CMDB", "die Wiederherstellung eines Services nach einer Störung", "die Begleitung der Beschäftigten durch organisatorische Veränderungen, z. B. nach Lewin und mit Maßnahmen gegen Widerstände"],
      answer: 3,
      explain: "Gemeint ist die menschliche Seite von Veränderungen (ITIL 4: Organizational Change Management): informieren, beteiligen, schulen, Widerstände abbauen. Technische Änderungen mit RFC und CAB laufen über Change Enablement, die CMDB gehört zum Configuration Management, die Wiederherstellung zum Incident Management." },
    { id: "q-bpmn-9", topic: "bpmn-uml", type: "single", exam: ["AP1", "AP2"],
      q: "Welches Element des UML-Aktivitätsdiagramms entspricht dem parallelen Gateway (Raute mit +) in BPMN?",
      options: ["Entscheidungsknoten (Raute)", "Gabelung bzw. Synchronisation (dicker Balken)", "Endknoten (Kreis mit Punkt)", "Schwimmbahn (Partition)"],
      answer: 1,
      explain: "Parallele Abläufe werden im Aktivitätsdiagramm mit einem Balken aufgeteilt (Gabelung) und mit einem Balken wieder zusammengeführt (Synchronisation). Die Raute ist der Entscheidungsknoten (entspricht dem exklusiven Gateway), Schwimmbahnen entsprechen Lanes, der Endknoten dem Endereignis." },
    { id: "q-bpmn-10", topic: "bpmn-uml", type: "tf", exam: ["AP1", "AP2"],
      q: "Im UML-Aktivitätsdiagramm werden die Bedingungen an den Ausgängen eines Entscheidungsknotens in eckigen Klammern notiert, z. B. [Gerät frei].",
      answer: true,
      explain: "Richtig. Diese Bedingungen heißen Guards. Sie sollten sich gegenseitig ausschließen und alle Fälle abdecken, damit immer genau ein Ausgang gewählt wird – vergleichbar mit den beschrifteten Pfaden am exklusiven Gateway in BPMN." },
  ],
  cards: [
    { topic: "itsm-grundlagen", f: "ITIL 4 – was ist das?", b: "Best-Practice-Framework für IT-Service-Management (2019, heute PeopleCert). Zertifiziert werden Personen, nicht Unternehmen." },
    { topic: "itsm-grundlagen", f: "ISO/IEC 20000-1", b: "Internationale Norm mit Anforderungen an ein Service-Management-System – hier wird die <strong>Organisation</strong> zertifiziert." },
    { topic: "itsm-grundlagen", f: "Die 4 Dimensionen des Service-Managements (ITIL 4)", b: "Organisationen &amp; Menschen · Informationen &amp; Technologie · Partner &amp; Lieferanten · Wertströme &amp; Prozesse" },
    { topic: "itsm-grundlagen", f: "Service Value Chain – die 6 Aktivitäten", b: "Plan · Improve · Engage · Design &amp; Transition · Obtain/Build · Deliver &amp; Support" },
    { topic: "itsm-grundlagen", f: "COBIT 2019", b: "Governance-Framework der ISACA: 5 Domänen (EDM, APO, BAI, DSS, MEA), 40 Ziele, Reifegrade 0–5 – „steuert“ die IT." },
    { topic: "itsm-grundlagen", f: "FitSM", b: "Schlanker, kostenloser ITSM-Standard aus einem EU-Projekt, 14 Kernprozesse, an ISO/IEC 20000 angelehnt – ideal für KMU." },
    { topic: "dienstleistungen", f: "Werkvertrag (§ 631 BGB)", b: "<strong>Erfolg</strong> geschuldet, Abnahme, Mängelrechte – z. B. Netzwerk installieren, Software erstellen." },
    { topic: "dienstleistungen", f: "Dienstvertrag (§ 611 BGB)", b: "<strong>Tätigkeit</strong> geschuldet, kein Erfolg, Vergütung meist nach Zeit – z. B. Hotline, Beratung, Schulung." },
    { topic: "dienstleistungen", f: "Gewährleistung", b: "Gesetzlich, gegenüber dem Verkäufer, 2 Jahre, Mangel lag bei Übergabe vor; zuerst Nacherfüllung." },
    { topic: "dienstleistungen", f: "Garantie", b: "Freiwilliges Versprechen (meist Hersteller), Dauer und Bedingungen frei, zusätzlich zur Gewährleistung." },
    { topic: "dienstleistungen", f: "Kulanz", b: "Freiwillige Leistung ohne Rechtsanspruch, z. B. kostenloser Tausch nach Fristablauf." },
    { topic: "dienstleistungen", f: "IMAC/RD", b: "Install · Move · Add · Change · Remove · Dispose" },
    { topic: "dienstleistungen", f: "Beweislastumkehr (§ 477 BGB)", b: "Beim Verbrauchsgüterkauf wird 1 Jahr lang vermutet, dass ein Mangel schon bei Übergabe bestand." },
    { topic: "service-desk", f: "SPOC", b: "Single Point of Contact – eine zentrale Anlaufstelle für alle Anliegen der Anwender (Service Desk)." },
    { topic: "service-desk", f: "Funktionale Eskalation", b: "Weitergabe an ein Team mit mehr Fachwissen oder Rechten (z. B. 1st → 2nd Level) – „seitwärts“." },
    { topic: "service-desk", f: "Hierarchische Eskalation", b: "Einbinden der Führungsebene: Entscheidungen, Ressourcen, drohende SLA-Verletzung, Beschwerden – „nach oben“." },
    { topic: "service-desk", f: "Service Request", b: "Anfrage nach einer vereinbarten Standardleistung, z. B. Passwort-Reset, Software aus dem Katalog, Auskunft." },
    { topic: "service-desk", f: "Support-Level", b: "0 Self-Service · 1st Service Desk · 2nd Fachteams · 3rd Hersteller/Entwickler" },
    { topic: "incident", f: "Incident", b: "Ungeplante Unterbrechung oder Qualitätsminderung eines Services – Ziel: schnellstmögliche Wiederherstellung." },
    { topic: "incident", f: "Priorität eines Tickets", b: "Auswirkung (Impact) × Dringlichkeit (Urgency) → Prioritätsmatrix" },
    { topic: "incident", f: "Ticket-Lebenszyklus", b: "Neu → Zugewiesen → In Bearbeitung (⇄ Wartend) → Gelöst → Geschlossen" },
    { topic: "incident", f: "Major Incident", b: "Störung mit sehr großer Auswirkung – eigenes, beschleunigtes Verfahren mit Verantwortlichem und laufender Kommunikation." },
    { topic: "problem", f: "Problem", b: "Ursache oder mögliche Ursache eines oder mehrerer Incidents." },
    { topic: "problem", f: "Known Error", b: "Problem mit analysierter Ursache, das noch nicht behoben ist." },
    { topic: "problem", f: "Workaround", b: "Vorläufige Umgehungslösung, die die Auswirkung verringert – die Ursache bleibt bestehen." },
    { topic: "problem", f: "KEDB", b: "Known Error Database – bekannte Fehler mit Symptomen, Ursachen und Workarounds." },
    { topic: "problem", f: "5-Why-Methode", b: "So lange (ca. fünfmal) „Warum?“ fragen, bis die Grundursache (Root Cause) gefunden ist." },
    { topic: "problem", f: "Ishikawa-Diagramm", b: "Fischgräten-Diagramm: Wirkung am Kopf, Ursachenkategorien an den Gräten (z. B. 6 M: Mensch, Maschine, Methode, Material, Milieu, Messung)." },
    { topic: "change", f: "Standard Change", b: "Risikoarm, wiederkehrend, <strong>vorab genehmigt</strong> – z. B. freigegebene Software installieren." },
    { topic: "change", f: "Normal Change", b: "Wird einzeln bewertet, geplant und genehmigt (Change Authority/CAB)." },
    { topic: "change", f: "Emergency Change", b: "Muss sofort umgesetzt werden, um Schaden abzuwenden – beschleunigte Genehmigung (ECAB)." },
    { topic: "change", f: "RFC", b: "Request for Change – formaler Änderungsantrag mit Begründung, Risiko, betroffenen CIs, Zeitplan, Test- und Rückfallplan." },
    { topic: "change", f: "CAB", b: "Change Advisory Board – Gremium, das Normal Changes bewertet und bei Genehmigung/Terminierung berät." },
    { topic: "change", f: "CMDB", b: "Configuration Management Database – alle Configuration Items (CIs) und ihre Beziehungen." },
    { topic: "sla-kennzahlen", f: "SLA · OLA · UC", b: "SLA: mit dem Kunden · OLA: mit internen Teams · UC: mit externen Lieferanten" },
    { topic: "sla-kennzahlen", f: "Verfügbarkeit (Formel)", b: "(vereinbarte Servicezeit − Ausfallzeit) ÷ vereinbarte Servicezeit × 100" },
    { topic: "sla-kennzahlen", f: "MTBF", b: "Mean Time Between Failures = Betriebszeit ÷ Anzahl Ausfälle" },
    { topic: "sla-kennzahlen", f: "MTTR", b: "Mean Time To Repair/Restore = gesamte Ausfallzeit ÷ Anzahl Ausfälle" },
    { topic: "sla-kennzahlen", f: "99,9 % Verfügbarkeit bei 24/7 – max. Ausfall pro Jahr?", b: "8.760 h × 0,001 = 8,76 h ≈ 8 h 46 min" },
    { topic: "sla-kennzahlen", f: "Reaktionszeit vs. Lösungszeit", b: "Reaktion: bis zum Beginn der qualifizierten Bearbeitung · Lösung: bis zur Wiederherstellung des Services" },
    { topic: "sla-kennzahlen", f: "Erstlösungsquote (FCR)", b: "im Erstkontakt gelöste Tickets ÷ alle Tickets × 100" },
    { topic: "it-sicherstellung", f: "Verfügbarkeit in Reihe", b: "A(gesamt) = A₁ × A₂ × … – die Kette ist schlechter als jedes Einzelteil." },
    { topic: "it-sicherstellung", f: "Verfügbarkeit parallel (redundant)", b: "A(gesamt) = 1 − (1 − A₁) × (1 − A₂) – z. B. 2 × 99 % → 99,99 %" },
    { topic: "it-sicherstellung", f: "3-2-1-Regel", b: "3 Kopien · 2 verschiedene Medientypen · 1 Kopie außer Haus (Erweiterung 3-2-1-1-0: + 1 Offline-/unveränderbare Kopie, 0 Fehler beim Restore-Test)" },
    { topic: "it-sicherstellung", f: "USV-Typen", b: "Offline (VFD) · Line-Interactive (VI) · Online/Doppelwandler (VFI, keine Umschaltzeit)" },
    { topic: "it-sicherstellung", f: "Predictive Maintenance", b: "Vorausschauende Wartung anhand von Zustandsdaten (z. B. S.M.A.R.T., Temperaturtrends)." },
    { topic: "it-sicherstellung", f: "SNMP-Ports", b: "UDP 161 (Abfragen) · UDP 162 (Traps/Meldungen an den Manager)" },
    { topic: "it-sicherstellung", f: "RPO und RTO", b: "RPO: maximal tolerierter Datenverlust (Zeitraum) · RTO: maximal tolerierte Wiederanlaufzeit" },
    { topic: "optimierung", f: "Kosten pro Ticket", b: "Gesamtkosten des Supports ÷ Anzahl Tickets" },
    { topic: "optimierung", f: "Shift-left", b: "Lösungen auf günstigere Ebenen verlagern: 3rd → 2nd → 1st Level → Self-Service" },
    { topic: "optimierung", f: "Net Promoter Score (NPS)", b: "% Promotoren (9–10) − % Kritiker (0–6); Bereich −100 bis +100" },
    { topic: "optimierung", f: "CSAT", b: "zufriedene Antworten (z. B. 4–5 Sterne) ÷ alle Antworten × 100" },
    { topic: "optimierung", f: "PDCA-Zyklus", b: "Plan – Do – Check – Act: planen, umsetzen, Soll-Ist-Vergleich, standardisieren bzw. nachsteuern" },
    { topic: "optimierung", f: "Amortisationszeit", b: "Investition ÷ Einsparung pro Periode (laufende Kosten vorher abziehen!)" },
    { topic: "kommunikation", f: "Vier Seiten einer Nachricht", b: "Sachinhalt · Selbstkundgabe · Beziehung · Appell (Schulz von Thun)" },
    { topic: "kommunikation", f: "Watzlawick – 1. Axiom", b: "Man kann nicht nicht kommunizieren." },
    { topic: "kommunikation", f: "Watzlawick – 2. Axiom", b: "Jede Kommunikation hat einen Inhalts- und einen Beziehungsaspekt; die Beziehung bestimmt, wie der Inhalt ankommt." },
    { topic: "kommunikation", f: "Paraverbale Kommunikation", b: "Tonfall, Sprechtempo, Lautstärke, Pausen – am Telefon besonders wichtig." },
    { topic: "kommunikation", f: "Aktives Zuhören", b: "Aufmerksamkeit zeigen, paraphrasieren, Gefühle ansprechen, nachfragen, zusammenfassen." },
    { topic: "kommunikation", f: "Offene vs. geschlossene Frage", b: "Offen (W-Frage): Informationen sammeln · geschlossen (Ja/Nein): Fakten bestätigen" },
    { topic: "konflikte", f: "DISG – die vier Typen", b: "D dominant · I initiativ · S stetig · G gewissenhaft" },
    { topic: "konflikte", f: "Glasl – drei Ebenen", b: "win-win (Stufen 1–3) · win-lose (4–6) · lose-lose (7–9)" },
    { topic: "konflikte", f: "Ich-Botschaft", b: "„Ich brauche noch eine Angabe, um Ihnen zu helfen“ statt „Sie haben das falsch beschrieben“." },
    { topic: "konflikte", f: "Deeskalation – Kernschritte", b: "ruhig bleiben · zuhören · Verständnis zeigen · Sache klären · verbindliche Lösung bzw. nächsten Schritt zusagen" },
    { topic: "konflikte", f: "Harvard-Konzept", b: "Mensch und Problem trennen · Interessen statt Positionen · Optionen entwickeln · neutrale Kriterien" },
    { topic: "epk", f: "EPK: Ereignis", b: "Sechseck; passiver Zustand, z. B. „Ticket ist erfasst“" },
    { topic: "epk", f: "EPK: Funktion", b: "Abgerundetes Rechteck; aktive Tätigkeit, z. B. „Ticket erfassen“" },
    { topic: "epk", f: "EPK-Konnektoren", b: "UND (∧): alle · ODER (∨): mindestens einer · XOR: genau einer" },
    { topic: "epk", f: "EPK-Regel zu Entscheidungen", b: "Nach einem Ereignis kein XOR- oder ODER-Split – entscheiden können nur Funktionen." },
    { topic: "epk", f: "eEPK-Zusätze", b: "Organisationseinheit (Ellipse mit Strich) · Informationsobjekt (Rechteck) · Prozesswegweiser" },
    { topic: "bpmn-uml", f: "BPMN: Pool vs. Lane", b: "Pool = eigenständiger Beteiligter (Organisation) · Lane = Rolle/Abteilung innerhalb des Pools" },
    { topic: "bpmn-uml", f: "BPMN: Sequenz- vs. Nachrichtenfluss", b: "Sequenzfluss: durchgezogen, innerhalb eines Pools · Nachrichtenfluss: gestrichelt, zwischen Pools" },
    { topic: "bpmn-uml", f: "BPMN-Gateways", b: "Raute mit X = exklusiv · mit + = parallel · mit Kreis = inklusiv" },
    { topic: "bpmn-uml", f: "BPMN-Ereignisse", b: "Start: dünner Kreis · Zwischen: doppelter Kreis · Ende: dicker Kreis" },
    { topic: "bpmn-uml", f: "UML «include»", b: "Wird immer mit ausgeführt; Pfeil vom Basisfall zum eingebundenen Fall." },
    { topic: "bpmn-uml", f: "UML «extend»", b: "Wird nur unter einer Bedingung ausgeführt; Pfeil vom erweiternden Fall zum Basisfall." },
    { topic: "netzplan-gantt", f: "FAZ und FEZ", b: "Frühester Anfang/frühestes Ende; FEZ = FAZ + Dauer" },
    { topic: "netzplan-gantt", f: "SAZ und SEZ", b: "Spätester Anfang/spätestes Ende; SAZ = SEZ − Dauer" },
    { topic: "netzplan-gantt", f: "Gesamtpuffer (GP)", b: "GP = SAZ − FAZ = SEZ − FEZ – Verschiebung ohne Einfluss auf das Projektende" },
    { topic: "netzplan-gantt", f: "Freier Puffer (FP)", b: "FP = kleinster FAZ der Nachfolger − eigener FEZ – Verschiebung ohne Einfluss auf Nachfolger" },
    { topic: "netzplan-gantt", f: "Kritischer Pfad", b: "Alle Vorgänge mit GP = 0; längster Weg, bestimmt die Projektdauer." },
    { topic: "netzplan-gantt", f: "Mehrere Vorgänger bzw. Nachfolger", b: "Vorwärts: größten FEZ nehmen · rückwärts: kleinsten SAZ nehmen" },
    { topic: "netzplan-gantt", f: "Gantt-Diagramm", b: "Balken auf einer Zeitachse; Meilensteine (◆) ohne Dauer; kritischer Pfad oft farbig." },
    { topic: "dienstleistungen", f: "Mängelarten bei Lieferung/Abnahme", b: "Schlechtleistung (Qualität) · Falschlieferung (andere Ware) · Minderlieferung (zu wenig); offene und versteckte Mängel" },
    { topic: "dienstleistungen", f: "Inhalte eines Abnahmeprotokolls", b: "Parteien, Datum/Ort, abgenommene Leistung, Prüfergebnisse, Mängel mit Frist, Vorbehalt, Unterschriften" },
    { topic: "dienstleistungen", f: "Vor Ort vs. Fernwartung", b: "Vor Ort: Hardware, Verkabelung, teurer · Remote: schnell, günstig, braucht Zustimmung des Kunden und Protokollierung" },
    { topic: "change", f: "Veränderungsmodell nach Lewin", b: "Auftauen (Unfreeze) → Verändern (Move) → Stabilisieren (Refreeze)" },
    { topic: "optimierung", f: "ISO 9001", b: "Norm für Qualitätsmanagementsysteme; Zertifikat nach Audit, meist 3 Jahre mit jährlichen Überwachungsaudits" },
    { topic: "optimierung", f: "Testprotokoll (Arbeitsplatz)", b: "Testfall · Voraussetzung · erwartetes/tatsächliches Ergebnis · bestanden? · Datum · Prüfer · Maßnahmen" },
    { topic: "it-sicherstellung", f: "Benutzer- vs. Systemhandbuch", b: "Benutzerhandbuch: Bedienung für Anwender · Systemhandbuch: Installation, Konfiguration, Backup/Restore für Administratoren" },
    { topic: "it-sicherstellung", f: "SOP", b: "Standard Operating Procedure – festgelegte Schritt-für-Schritt-Anleitung für wiederkehrende Aufgaben oder Störungen" },
    { topic: "service-desk", f: "Zeitgesteuerte Eskalation", b: "Automatische Weitergabe bzw. Benachrichtigung, wenn z. B. 75 % einer SLA-Frist verstrichen sind" },
    { topic: "service-desk", f: "KI im Service Desk – Nutzen und Risiken", b: "Nutzen: 24/7, Entlastung, Kategorisierung, Wissenssuche · Risiken: Halluzinationen, Datenschutz, Kosten, Akzeptanz" },
    { topic: "itsm-grundlagen", f: "Service-Katalog vs. Service-Portfolio", b: "Katalog: aktuell bestellbare Services (Leistung, Preis, Lieferzeit) · Portfolio: zusätzlich geplante und eingestellte Services (interne Gesamtsicht)" },
    { topic: "itsm-grundlagen", f: "Knowledge Management", b: "Wissen sammeln, prüfen, pflegen und bereitstellen, z. B. Lösungsartikel in der Wissensdatenbank – Grundlage für Shift-left." },
    { topic: "itsm-grundlagen", f: "ITIL v3 → ITIL 4: neue Namen", b: "Request Fulfilment → Service Request Management · Change Management → Change Enablement · CSI → Continual Improvement · Access Management → Teil des Information Security Managements" },
    { topic: "itsm-grundlagen", f: "Capacity vs. Availability vs. Continuity Management", b: "Capacity: genug Leistung · Availability: Service ist nutzbar, wenn vereinbart · Continuity: Wiederanlauf nach Notfall/Katastrophe" },
    { topic: "change", f: "Change Enablement vs. Organizational Change Management", b: "Change Enablement: technische Änderungen (RFC, CAB) · Organizational Change Management: Menschen durch Veränderungen begleiten (Lewin, Widerstände)" },
    { topic: "bpmn-uml", f: "Parallelität in EPK, BPMN und UML-Aktivitätsdiagramm", b: "EPK: UND-Konnektor (∧) · BPMN: paralleles Gateway (Raute mit +) · UML: Gabelung/Synchronisation (Balken)" },
    { topic: "bpmn-uml", f: "Entscheidung in EPK, BPMN und UML-Aktivitätsdiagramm", b: "EPK: XOR nach einer Funktion · BPMN: exklusives Gateway (Raute mit X) · UML: Entscheidungsknoten (Raute) mit [Guards]" },
  ],
  checklist: [
    { id: "c-itsm-1", topic: "itsm-grundlagen", text: "Ich kann die Begriffe Service, Kunde, Anwender und Serviceanbieter erklären und Vorteile von ITSM nennen.", exam: ["AP1", "AP2"] },
    { id: "c-itsm-2", topic: "itsm-grundlagen", text: "Ich kann Service Value System, die sechs Aktivitäten der Service Value Chain, die vier Dimensionen und mindestens vier Leitprinzipien von ITIL 4 nennen.", exam: [] },
    { id: "c-itsm-3", topic: "itsm-grundlagen", text: "Ich kann ITIL 4, ISO/IEC 20000, FitSM und COBIT vergleichen und für ein Unternehmen begründet empfehlen.", exam: [] },
    { id: "c-dl-1", topic: "dienstleistungen", text: "Ich kann IT-Dienstleistungsarten (z. B. Vor-Ort-, Swap-, Managed Service) unterscheiden und Tätigkeiten dem IMAC/RD-Lebenszyklus zuordnen.", exam: ["AP1"] },
    { id: "c-dl-2", topic: "dienstleistungen", text: "Ich kann an einem Fall begründet entscheiden, ob ein Werk- oder ein Dienstvertrag vorliegt.", exam: ["AP1", "AP2"] },
    { id: "c-dl-3", topic: "dienstleistungen", text: "Ich kann Gewährleistung, Garantie und Kulanz abgrenzen und die Beweislastumkehr erklären.", exam: ["AP1", "AP2"] },
    { id: "c-sd-1", topic: "service-desk", text: "Ich kann die Aufgaben des Service Desks als SPOC und die Unterschiede zwischen 1st, 2nd und 3rd Level beschreiben.", exam: ["AP1", "AP2"] },
    { id: "c-sd-2", topic: "service-desk", text: "Ich kann funktionale und hierarchische Eskalation an Beispielen unterscheiden.", exam: ["AP1", "AP2"] },
    { id: "c-sd-3", topic: "service-desk", text: "Ich kann Service Requests von Incidents unterscheiden und Vor- und Nachteile von Self-Service und KI-Chatbots beurteilen.", exam: ["AP1", "AP2"] },
    { id: "c-inc-1", topic: "incident", text: "Ich kann die notwendigen Inhalte eines Tickets und den Ticket-Lebenszyklus nennen.", exam: ["AP1", "AP2"] },
    { id: "c-inc-2", topic: "incident", text: "Ich kann mit einer Prioritätsmatrix aus Auswirkung und Dringlichkeit die Priorität bestimmen und begründen.", exam: ["AP1", "AP2"] },
    { id: "c-inc-3", topic: "incident", text: "Ich kann den Ablauf des Incident Managements beschreiben und erklären, was einen Major Incident ausmacht.", exam: ["AP1", "AP2"] },
    { id: "c-prob-1", topic: "problem", text: "Ich kann Incident, Problem, Known Error, Workaround und KEDB sicher voneinander abgrenzen.", exam: ["AP1", "AP2"] },
    { id: "c-prob-2", topic: "problem", text: "Ich kann ein Ishikawa-Diagramm erstellen und die 5-Why-Methode auf einen Fall anwenden.", exam: ["AP1", "AP2"] },
    { id: "c-prob-3", topic: "problem", text: "Ich kann strukturiertes Troubleshooting (Bottom-up, Top-down, Divide and Conquer) mit passenden Befehlen beschreiben.", exam: ["AP1", "AP2"] },
    { id: "c-chg-1", topic: "change", text: "Ich kann Standard-, Normal- und Emergency Change unterscheiden und Beispiele zuordnen.", exam: ["AP1", "AP2"] },
    { id: "c-chg-2", topic: "change", text: "Ich kann die Inhalte eines RFC, die Aufgabe des CAB und den Ablauf eines Normal Changes inklusive Rückfallplan erklären.", exam: ["AP1", "AP2"] },
    { id: "c-chg-3", topic: "change", text: "Ich kann Ursachen für Widerstände bei Veränderungen nennen und Maßnahmen zur Einbindung der Beschäftigten vorschlagen.", exam: ["AP1"] },
    { id: "c-sla-1", topic: "sla-kennzahlen", text: "Ich kann SLA, OLA und Underpinning Contract abgrenzen und typische SLA-Inhalte nennen.", exam: ["AP1", "AP2"] },
    { id: "c-sla-2", topic: "sla-kennzahlen", text: "Ich kann Verfügbarkeit, zulässige Ausfallzeit und SLA-Fristen unter Beachtung der Servicezeit berechnen.", exam: ["AP1", "AP2"] },
    { id: "c-sla-3", topic: "sla-kennzahlen", text: "Ich kann MTBF, MTTR, Erstlösungsquote und eine Vertragsstrafe berechnen und interpretieren.", exam: ["AP1", "AP2"] },
    { id: "c-sich-1", topic: "it-sicherstellung", text: "Ich kann Monitoring-Werte mit sinnvollen Schwellwerten festlegen und Wartungsstrategien unterscheiden.", exam: ["AP2"] },
    { id: "c-sich-2", topic: "it-sicherstellung", text: "Ich kann die Gesamtverfügbarkeit von Reihen- und Parallelschaltungen sowie die Überbrückungszeit einer USV berechnen.", exam: ["AP2"] },
    { id: "c-sich-3", topic: "it-sicherstellung", text: "Ich kann die 3-2-1-Regel, RPO/RTO und den Unterschied zwischen Redundanz und Backup erklären.", exam: ["AP1", "AP2"] },
    { id: "c-opt-1", topic: "optimierung", text: "Ich kann Kosten pro Ticket, Einsparungen durch Shift-left und die Amortisationszeit einer Maßnahme berechnen.", exam: ["AP1", "AP2"] },
    { id: "c-opt-2", topic: "optimierung", text: "Ich kann zwei Supportangebote vergleichen und die Menge bestimmen, ab der sich eine Pauschale lohnt.", exam: ["AP1", "AP2"] },
    { id: "c-opt-3", topic: "optimierung", text: "Ich kann CSAT und NPS berechnen und eine Verbesserung mit dem PDCA-Zyklus planen.", exam: ["AP1", "AP2"] },
    { id: "c-kom-1", topic: "kommunikation", text: "Ich kann eine Kundenaussage mit dem Vier-Seiten-Modell analysieren und das Sender-Empfänger-Modell erklären.", exam: ["AP1"] },
    { id: "c-kom-2", topic: "kommunikation", text: "Ich kann die fünf Axiome nach Watzlawick mit Beispielen aus dem Support erläutern.", exam: [] },
    { id: "c-kom-3", topic: "kommunikation", text: "Ich kann offene, geschlossene und Kontrollfragen gezielt formulieren und ein Supportgespräch nach Leitfaden führen – auch mit einfachen englischen Sätzen.", exam: ["AP1"] },
    { id: "c-konf-1", topic: "konflikte", text: "Ich kann die vier DISG-Typen beschreiben und meine Gesprächsstrategie daran anpassen.", exam: [] },
    { id: "c-konf-2", topic: "konflikte", text: "Ich kann Konfliktarten und die Eskalationsstufen nach Glasl einordnen.", exam: [] },
    { id: "c-konf-3", topic: "konflikte", text: "Ich kann Deeskalationstechniken im Kundengespräch anwenden und eine Beschwerde strukturiert bearbeiten.", exam: ["AP1"] },
    { id: "c-epk-1", topic: "epk", text: "Ich kann aus einem Text eine eEPK mit Ereignissen, Funktionen, Konnektoren, Organisationseinheiten und Informationsobjekten erstellen.", exam: ["AP1", "AP2"] },
    { id: "c-epk-2", topic: "epk", text: "Ich kann Modellierungsfehler in einer EPK finden und korrigieren.", exam: ["AP1", "AP2"] },
    { id: "c-bpmn-1", topic: "bpmn-uml", text: "Ich kann ein BPMN-Diagramm mit Pools, Lanes, Ereignissen, Aufgaben, Gateways sowie Sequenz- und Nachrichtenfluss lesen und erstellen.", exam: ["AP1", "AP2"] },
    { id: "c-bpmn-2", topic: "bpmn-uml", text: "Ich kann ein Use-Case-Diagramm mit Systemgrenze, Akteuren, «include», «extend» und Generalisierung erstellen.", exam: ["AP1", "AP2"] },
    { id: "c-np-1", topic: "netzplan-gantt", text: "Ich kann einen Netzplan vollständig vorwärts und rückwärts berechnen (FAZ, FEZ, SAZ, SEZ, GP, FP) und den kritischen Pfad bestimmen.", exam: ["AP1"] },
    { id: "c-np-2", topic: "netzplan-gantt", text: "Ich kann Fehler in einem Netzplan finden und die Auswirkungen von Verzögerungen beurteilen.", exam: ["AP1"] },
    { id: "c-np-3", topic: "netzplan-gantt", text: "Ich kann ein Gantt-Diagramm mit Meilensteinen erstellen und Maßnahmen bei Terminproblemen vorschlagen.", exam: ["AP1"] },
    { id: "c-dl-4", topic: "dienstleistungen", text: "Ich kann Vor-Ort-Einsatz und Fernwartung vergleichen, die Inhalte eines Abnahmeprotokolls nennen und Mängelarten (Schlechtleistung, Falsch-, Minderlieferung) zuordnen.", exam: ["AP1"] },
    { id: "c-sd-4", topic: "service-desk", text: "Ich kann Einsatzmöglichkeiten, Kosten, Nutzen und Risiken eines KI-Chatbots im Support bewerten und Datenschutzanforderungen nennen.", exam: ["AP1", "AP2"] },
    { id: "c-chg-4", topic: "change", text: "Ich kann das Drei-Phasen-Modell nach Lewin erklären und auf die Einführung eines neuen Systems anwenden.", exam: ["AP1"] },
    { id: "c-opt-4", topic: "optimierung", text: "Ich kann Qualität, Qualitätssicherung und Qualitätsmanagement abgrenzen, die Zertifizierung nach ISO 9001 erklären und ein Testprotokoll erstellen.", exam: ["AP1", "AP2"] },
    { id: "c-opt-5", topic: "optimierung", text: "Ich kann Dienstleistungskosten berechnen (Stundensatz, Anfahrtspauschale, Grundgebühr plus Minutenpreis, Umsatzsteuer).", exam: ["AP1"] },
    { id: "c-sich-4", topic: "it-sicherstellung", text: "Ich kann Benutzer- und Systemhandbuch unterscheiden, eine Konfigurationsdokumentation anlegen und SOPs bzw. Checklisten für Routinearbeiten erstellen.", exam: ["AP2"] },
    { id: "c-itsm-4", topic: "itsm-grundlagen", text: "Ich kann wichtige Management-Bereiche (z. B. Service Level, Service Catalogue, Capacity, Availability, Continuity, Information Security, Configuration, Knowledge Management) beschreiben, Praxisfällen zuordnen und Service-Katalog und -Portfolio unterscheiden.", exam: [] },
    { id: "c-chg-5", topic: "change", text: "Ich kann Change Enablement (technische Änderungen mit RFC und CAB) und Change Management im Sinne von Veränderungsprozessen (Menschen begleiten) sicher auseinanderhalten.", exam: ["AP1"] },
    { id: "c-bpmn-3", topic: "bpmn-uml", text: "Ich kann Entscheidung, Parallelität und Zuständigkeiten in EPK, BPMN und UML-Aktivitätsdiagramm einander zuordnen und für einen Zweck die passende Notation begründet auswählen.", exam: ["AP1", "AP2"] },
  ],
  glossary: [
    { term: "IT-Service-Management (ITSM)", def: "Gesamtheit der Methoden und Prozesse, mit denen ein IT-Dienstleister seine Services kundenorientiert plant, erbringt, überwacht und verbessert." },
    { term: "ITIL 4", def: "Weit verbreitetes Best-Practice-Framework für IT-Service-Management (2019, heute PeopleCert) mit Service Value System, vier Dimensionen, sieben Leitprinzipien und 34 Practices." },
    { term: "Service Value System (SVS)", def: "Modell aus ITIL 4, das zeigt, wie Leitprinzipien, Governance, Service Value Chain, Practices und kontinuierliche Verbesserung aus Nachfrage Wert erzeugen." },
    { term: "Service Value Chain", def: "Sechs Aktivitäten in ITIL 4 (Plan, Improve, Engage, Design and Transition, Obtain/Build, Deliver and Support), die zu Wertströmen kombiniert werden." },
    { term: "ISO/IEC 20000", def: "Internationale Normenreihe für IT-Service-Management; Teil 1 enthält die Anforderungen, nach denen eine Organisation zertifiziert werden kann." },
    { term: "FitSM", def: "Schlanke, frei verfügbare Standardfamilie für IT-Service-Management mit 14 Kernprozessen, besonders für kleine Organisationen geeignet." },
    { term: "COBIT", def: "Rahmenwerk der ISACA für IT-Governance und -Management mit 40 Zielen in fünf Domänen und Reifegradmessung, stark auf Kontrolle und Compliance ausgerichtet." },
    { term: "Service Desk", def: "Zentrale Anlaufstelle (SPOC) des IT-Dienstleisters, die alle Anliegen annimmt, als Ticket erfasst, löst oder weiterleitet und die Anwender informiert." },
    { term: "SPOC", def: "Single Point of Contact – eine einzige Kontaktstelle für alle Anliegen der Anwender." },
    { term: "Ticketsystem", def: "Software zur Erfassung, Zuweisung, Priorisierung, Verfolgung und Auswertung von Anfragen und Störungen." },
    { term: "Incident", def: "Ungeplante Unterbrechung eines IT-Services oder Minderung seiner Qualität." },
    { term: "Major Incident", def: "Incident mit sehr großer Auswirkung, der nach einem eigenen, beschleunigten Verfahren bearbeitet wird." },
    { term: "Service Request", def: "Anfrage eines Anwenders nach einer vereinbarten Standardleistung, z. B. Passwort-Reset, Softwarebestellung oder Auskunft." },
    { term: "Problem", def: "Ursache oder mögliche Ursache eines oder mehrerer Incidents." },
    { term: "Known Error", def: "Problem, dessen Ursache analysiert, das aber noch nicht dauerhaft behoben ist." },
    { term: "Workaround", def: "Vorläufige Umgehungslösung, die die Auswirkung eines Incidents oder Problems verringert, ohne die Ursache zu beseitigen." },
    { term: "KEDB", def: "Known Error Database – Datenbank mit bekannten Fehlern, ihren Symptomen, Ursachen und Workarounds." },
    { term: "Root Cause", def: "Grundursache eines Problems, deren Beseitigung ein erneutes Auftreten verhindert." },
    { term: "Change", def: "Hinzufügen, Ändern oder Entfernen von allem, was sich direkt oder indirekt auf Services auswirken kann." },
    { term: "RFC", def: "Request for Change – formaler Antrag auf eine Änderung mit Begründung, Risikobewertung, Zeitplan und Rückfallplan." },
    { term: "CAB", def: "Change Advisory Board – Gremium, das Normal Changes bewertet und bei ihrer Genehmigung und Terminierung berät." },
    { term: "CMDB", def: "Configuration Management Database – Datenbank aller Configuration Items (CIs) und ihrer Beziehungen." },
    { term: "Configuration Item (CI)", def: "Jede Komponente, die zur Erbringung eines Services verwaltet werden muss, z. B. Server, Switch, Software oder Vertrag." },
    { term: "Funktionale Eskalation", def: "Weitergabe eines Tickets an eine Stelle mit mehr Fachwissen oder Berechtigungen, z. B. vom 1st an den 2nd Level." },
    { term: "Hierarchische Eskalation", def: "Einbeziehung der Führungsebene, wenn Entscheidungen, zusätzliche Ressourcen oder die Abwendung einer SLA-Verletzung nötig sind." },
    { term: "SLA", def: "Service Level Agreement – Vereinbarung zwischen IT-Dienstleister und Kunde über messbare Service-Ziele wie Servicezeit, Reaktionszeit und Verfügbarkeit." },
    { term: "OLA", def: "Operational Level Agreement – interne Vereinbarung zwischen dem IT-Dienstleister und einer anderen Einheit derselben Organisation." },
    { term: "Underpinning Contract (UC)", def: "Vertrag zwischen IT-Dienstleister und externem Lieferanten, der die Erfüllung von SLAs absichert." },
    { term: "Verfügbarkeit", def: "Anteil der vereinbarten Servicezeit, in der ein Service tatsächlich nutzbar ist, angegeben in Prozent." },
    { term: "MTBF", def: "Mean Time Between Failures – durchschnittliche Betriebszeit zwischen zwei Ausfällen." },
    { term: "MTTR", def: "Mean Time To Repair bzw. Restore – durchschnittliche Dauer bis zur Wiederherstellung nach einem Ausfall." },
    { term: "Erstlösungsquote (FCR)", def: "Anteil der Anfragen, die bereits im ersten Kontakt gelöst werden (First Call bzw. First Contact Resolution)." },
    { term: "Shift-left", def: "Strategie, Lösungen auf frühere und günstigere Support-Ebenen bis hin zum Self-Service zu verlagern." },
    { term: "Net Promoter Score (NPS)", def: "Kennzahl zur Weiterempfehlungsbereitschaft: Anteil der Promotoren (9–10 Punkte) minus Anteil der Kritiker (0–6 Punkte)." },
    { term: "PDCA-Zyklus", def: "Regelkreis der kontinuierlichen Verbesserung mit den Phasen Plan, Do, Check und Act (Deming-Kreis)." },
    { term: "IMAC/RD", def: "Lebenszyklus von IT-Dienstleistungen am Arbeitsplatz: Install, Move, Add, Change, Remove, Dispose." },
    { term: "Werkvertrag", def: "Vertrag, bei dem ein bestimmter Erfolg geschuldet wird (§ 631 BGB); die Vergütung wird mit der Abnahme fällig." },
    { term: "Dienstvertrag", def: "Vertrag, bei dem eine Tätigkeit, aber kein bestimmter Erfolg geschuldet wird (§ 611 BGB)." },
    { term: "Gewährleistung", def: "Gesetzliche Mängelhaftung des Verkäufers bzw. Werkunternehmers, beim Kauf neuer Sachen grundsätzlich zwei Jahre." },
    { term: "Garantie", def: "Freiwilliges, zusätzliches Versprechen meist des Herstellers, für bestimmte Mängel innerhalb einer selbst gewählten Frist einzustehen." },
    { term: "Kulanz", def: "Freiwilliges Entgegenkommen eines Anbieters ohne rechtliche Verpflichtung." },
    { term: "Vier-Seiten-Modell", def: "Kommunikationsmodell nach Schulz von Thun: Jede Nachricht enthält Sachinhalt, Selbstkundgabe, Beziehungshinweis und Appell." },
    { term: "DISG-Modell", def: "Verhaltensmodell mit den vier Grundtypen dominant, initiativ, stetig und gewissenhaft, das hilft, die Kommunikation an Gesprächspartner anzupassen." },
    { term: "Deeskalation", def: "Gesprächsführung mit dem Ziel, Emotionen zu beruhigen und einen Konflikt auf die Sachebene zurückzuführen." },
    { term: "EPK", def: "Ereignisgesteuerte Prozesskette – grafische Darstellung von Geschäftsprozessen mit abwechselnden Ereignissen und Funktionen sowie Konnektoren." },
    { term: "BPMN 2.0", def: "Business Process Model and Notation – internationaler Standard zur Prozessmodellierung mit Pools, Lanes, Ereignissen, Aufgaben und Gateways." },
    { term: "Use-Case-Diagramm", def: "UML-Diagramm, das die Anwendungsfälle eines Systems aus Sicht seiner Akteure darstellt." },
    { term: "Kritischer Pfad", def: "Folge von Vorgängen ohne Gesamtpuffer im Netzplan; jede Verzögerung auf ihm verschiebt das Projektende." },
    { term: "Gesamtpuffer", def: "Zeit, um die ein Vorgang verschoben werden kann, ohne das Projektende zu gefährden (SAZ − FAZ)." },
    { term: "Freier Puffer", def: "Zeit, um die ein Vorgang verschoben werden kann, ohne den frühesten Anfang eines Nachfolgers zu verschieben." },
    { term: "Gantt-Diagramm", def: "Balkendiagramm, das Vorgänge eines Projekts mit Dauer und Lage auf einer Zeitachse darstellt." },
    { term: "Abnahmeprotokoll", def: "Dokument über die Übergabe einer Leistung mit Prüfergebnissen, festgestellten Mängeln, Fristen und Unterschriften; mit der Abnahme wird beim Werkvertrag die Vergütung fällig." },
    { term: "Fernwartung", def: "Leistungserbringung über eine Remote-Verbindung auf das System des Kunden; erfordert dessen Zustimmung, Protokollierung und datenschutzkonforme Regelungen." },
    { term: "Standard Operating Procedure (SOP)", def: "Verbindliche Schritt-für-Schritt-Anleitung für wiederkehrende Tätigkeiten oder Störungen, damit sie einheitlich und fehlerarm erledigt werden." },
    { term: "ISO 9001", def: "Internationale Norm mit Anforderungen an Qualitätsmanagementsysteme; Organisationen können sich danach durch ein Audit zertifizieren lassen." },
    { term: "Drei-Phasen-Modell nach Lewin", def: "Modell für Veränderungsprozesse mit den Phasen Auftauen (Unfreeze), Verändern (Move) und Stabilisieren (Refreeze)." },
    { term: "Service-Katalog", def: "Übersicht der Services, die Kunden aktuell bestellen können, mit Leistungsumfang, Preis, Lieferzeit und Ansprechpartnern; Grundlage für Service Requests." },
    { term: "Service-Portfolio", def: "Gesamtheit aller Services eines Anbieters – geplante, aktive und eingestellte; interne Grundlage für Entscheidungen über das Service-Angebot." },
    { term: "Knowledge Management", def: "Practice, die Wissen (z. B. Lösungsartikel, Anleitungen, Known Errors) sammelt, prüft, aktuell hält und den richtigen Personen bereitstellt." },
    { term: "Organizational Change Management", def: "ITIL-4-Practice, die Menschen durch organisatorische Veränderungen begleitet (informieren, beteiligen, schulen, Widerstände abbauen); abzugrenzen vom Change Enablement für technische Änderungen." },
    { term: "Standard Change", def: "Risikoarme, häufig wiederkehrende Änderung nach festgelegtem Verfahren, die vorab genehmigt ist und direkt ausgeführt werden darf." },
    { term: "Emergency Change", def: "Änderung, die sofort umgesetzt werden muss, um Schaden abzuwenden; sie wird beschleunigt (z. B. durch ein ECAB) genehmigt und die Dokumentation ggf. nachgereicht." },
    { term: "Change Enablement", def: "ITIL-4-Practice (früher Change Management), die Risiken von Änderungen bewertet, Changes genehmigt und terminiert, damit möglichst viele erfolgreich umgesetzt werden." },
  ],
  links: [
    { title: "PeopleCert – Herausgeber von ITIL 4", url: "https://www.peoplecert.org", note: "Offizielle Informationen zu ITIL 4 und den ITIL-Zertifizierungen" },
    { title: "FitSM – schlanker ITSM-Standard", url: "https://www.fitsm.eu", note: "Frei verfügbare Standarddokumente und Vorlagen" },
    { title: "ISACA – COBIT", url: "https://www.isaca.org/resources/cobit", note: "Überblick über das Governance-Framework COBIT" },
    { title: "BGB § 631 – Werkvertrag", url: "https://www.gesetze-im-internet.de/bgb/__631.html", note: "Gesetzestext (Bundesministerium der Justiz)" },
    { title: "BGB § 611 – Dienstvertrag", url: "https://www.gesetze-im-internet.de/bgb/__611.html", note: "Gesetzestext (Bundesministerium der Justiz)" },
    { title: "BGB § 437 – Rechte des Käufers bei Mängeln", url: "https://www.gesetze-im-internet.de/bgb/__437.html", note: "Grundlage der Gewährleistung beim Kauf" },
    { title: "BGB § 477 – Beweislastumkehr", url: "https://www.gesetze-im-internet.de/bgb/__477.html", note: "Vermutung eines Mangels bei Übergabe im ersten Jahr (Verbrauchsgüterkauf)" },
    { title: "BGB § 640 – Abnahme", url: "https://www.gesetze-im-internet.de/bgb/__640.html", note: "Abnahme beim Werkvertrag, Vorbehalt bei bekannten Mängeln" },
    { title: "ISO – Normenüberblick", url: "https://www.iso.org", note: "Offizielle Seite der ISO (u. a. ISO/IEC 20000-1 und ISO 9001; Normtexte kostenpflichtig)" },
    { title: "OMG – BPMN-Spezifikation", url: "https://www.omg.org/spec/BPMN/", note: "Offizielle Spezifikation von BPMN 2.0 (englisch)" },
    { title: "Wikipedia – Ereignisgesteuerte Prozesskette", url: "https://de.wikipedia.org/wiki/Ereignisgesteuerte_Prozesskette", note: "Ergänzend: Elemente und Regeln der EPK" }
  ]
});
