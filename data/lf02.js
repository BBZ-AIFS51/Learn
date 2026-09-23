/* LF 2 – Arbeitsplätze nach Kundenwunsch ausstatten */
LEARN.module({
  id: "lf02",
  type: "lf",
  nr: 2,
  title: "Arbeitsplätze nach Kundenwunsch ausstatten",
  year: 1,
  hours: 80,
  exam: ["AP1", "AP2"],
  summary: "Vom Kundengespräch bis zur Übergabe: Du ermittelst den Bedarf, wählst Hardware und Software nach Datenblättern aus, rechnest Datenmengen, Übertragungszeiten und Stromkosten, vergleichst Angebote per Nutzwertanalyse und übergibst einen ergonomischen, energieeffizienten IT-Arbeitsplatz – der Kern der AP1.",
  goals: [
    "Kundenwünsche im Gespräch aufnehmen, in Anforderungen übersetzen und Lasten- und Pflichtenheft unterscheiden",
    "PC-Komponenten (Gehäuse, Netzteil, Mainboard, CPU, RAM, Massenspeicher, Grafik) und ihre Kenngrößen erklären und kompatibel zusammenstellen",
    "Schnittstellen, Monitore und Peripherie anhand von Datenblättern – auch englischsprachigen – bewerten und auswählen",
    "Einen Bildschirmarbeitsplatz nach Arbeitsstättenverordnung ergonomisch und barrierefrei gestalten",
    "Zahlen zwischen Dezimal-, Dual-, Oktal- und Hexadezimalsystem umrechnen und Textcodierungen (ASCII, Unicode, UTF-8) erklären",
    "Speicherbedarf von Texten, Bildern, Audio und Video sowie Übertragungsdauern berechnen und dabei SI- und IEC-Präfixe sicher unterscheiden",
    "Leistungsaufnahme, Energiebedarf, Stromkosten und Amortisation berechnen und Green-IT-Maßnahmen sowie die Entsorgung nach ElektroG begründen",
    "Angebote quantitativ (Bezugskalkulation) und qualitativ (Nutzwertanalyse) vergleichen, ein Kundenangebot kalkulieren und Kauf, Miete und Leasing abwägen",
    "Einen Kaufvertrag abwickeln, Mängel erkennen und Rechte bei Vertragsstörungen nennen",
    "Betriebssysteme installieren, Lizenzmodelle unterscheiden und die Arbeit mit einer sauber gegliederten Dokumentation und einem Übergabeprotokoll abschließen"
  ],
  school: {
    hinweise: "Im Moodle-Kurs der Klasse lagen die Schwerpunkte auf den PC-Komponenten (Gehäuse, Kühlsysteme, Netzteil mit 80-PLUS-Stufen, Mainboard, Arbeitsspeicher, Prozessor; Grafikkarte und Festplatten als Rechercheauftrag), auf Zahlensystemen, Bits & Bytes, Textcodierung und Dateigrößen sowie auf der Dokumentation mit MS Word (Deckblatt, Inhalts- und Abbildungsverzeichnis, Seitenzahlen ab Seite 3, Umbrüche, Zitate, Literaturverzeichnis, Fußnoten). Die 80-PLUS-Tabelle im Unterricht enthält die klassischen 115-V-Werte; im Lernzettel stehen 115-V- und 230-V-Werte nebeneinander. Achtung: In manchen Unterrichtstexten steht noch „1 kB = 1024 Byte“. Der IHK-Prüfungskatalog verlangt dagegen: Datenmengen mit Binärpräfixen (1 KiB = 1024 Byte, MiB, GiB, TiB), Datenraten und physikalische Größen mit Dezimalpräfixen (1 kbit/s = 1000 bit/s).",
    themen: [
      "PC-Komponenten: Gehäuse, Kühlung, Netzteil (80 PLUS)",
      "Mainboard, Arbeitsspeicher, Prozessor",
      "Grafikkarte & Festplatten (Rechercheauftrag)",
      "Zahlensysteme und Umrechnung",
      "Bits & Bytes, Textcodierung (ASCII, Unicode)",
      "Dateigrößen berechnen",
      "Dokumentation mit MS Word (Deckblatt, Verzeichnisse, Zitate, Fußnoten)"
    ]
  },
  topics: [
    {
      id: "kundenbedarf",
      title: "Kundenbedarf ermitteln: Anforderungsanalyse, Lasten- und Pflichtenheft",
      exam: ["AP1", "AP2"],
      summary: "Wie du im Kundengespräch Anforderungen erfasst, sie in funktionale und nicht-funktionale Kriterien übersetzt und Lasten- und Pflichtenheft sauber unterscheidest.",
      html: `
        <p>Jeder IT-Arbeitsplatz beginnt mit der Frage: <strong>Was braucht der Kunde wirklich?</strong> Kunden können <em>intern</em> (z. B. die Buchhaltung im eigenen Betrieb) oder <em>extern</em> (z. B. eine Steuerkanzlei, die bei deinem Betrieb einkauft) sein. Deine Aufgabe ist es, aus oft unscharfen Wünschen („Der PC soll schnell sein“) messbare Anforderungen abzuleiten („Office und ERP parallel, Start der Anwendung in unter 3 s, 2 Monitore“).</p>
        <h5>Ablauf der Anforderungsanalyse</h5>
        <ol>
          <li><strong>Ist-Analyse:</strong> Was ist vorhanden (Hardware, Software, Netzwerk, Lizenzen)? Was funktioniert nicht?</li>
          <li><strong>Soll-Konzept:</strong> Welche Aufgaben sollen am Arbeitsplatz erledigt werden? Welche Programme, Datenmengen, Peripherie?</li>
          <li><strong>Rahmenbedingungen:</strong> Budget, Termin, Raum, Energie, Datenschutz, Barrierefreiheit, Vorgaben der IT-Abteilung (z. B. nur ein Hersteller).</li>
          <li><strong>Anforderungen dokumentieren</strong> (Lastenheft) und mit dem Kunden abstimmen.</li>
        </ol>
        <p><strong>Datenquellen:</strong> eigene Erhebung (Kundengespräch, Fragebogen, Beobachtung am Arbeitsplatz) und vorhandene Daten (Inventarliste, Ticketstatistik, Lizenzübersicht). Anforderungen gliederst du in <strong>Muss-Kriterien</strong> (unverzichtbar, K.-o.) und <strong>Kann-Kriterien</strong> (wünschenswert).</p>
        <h5>Das Kundengespräch</h5>
        <p>Nutze <strong>offene Fragen</strong> (W-Fragen), um Informationen zu sammeln, und <strong>geschlossene Fragen</strong> (Ja/Nein), um Details zu bestätigen. Fasse am Ende zusammen („Habe ich richtig verstanden, dass …?“) und halte die Ergebnisse schriftlich fest. Aus dem ermittelten Bedarf entsteht später das Angebot mit Leistungsbeschreibung, Preisen, Liefer- und Zahlungsbedingungen und Gültigkeitsdauer.</p>
        <table><thead><tr><th>Bereich</th><th>Beispielfragen</th></tr></thead><tbody>
          <tr><td>Tätigkeit</td><td>Welche Aufgaben erledigen die Mitarbeitenden? Welche Programme laufen gleichzeitig?</td></tr>
          <tr><td>Mobilität</td><td>Wird im Büro, im Homeoffice oder beim Kunden gearbeitet?</td></tr>
          <tr><td>Leistung</td><td>Werden große Dateien (CAD, Video) bearbeitet? Wie viele Monitore?</td></tr>
          <tr><td>Peripherie</td><td>Drucker, Scanner, Headset, Kartenleser, Dockingstation?</td></tr>
          <tr><td>Rahmen</td><td>Budget? Liefertermin? Kauf oder Leasing? Besondere Bedürfnisse (z. B. Sehbehinderung)?</td></tr>
        </tbody></table>
        <h5>Funktionale und nicht-funktionale Anforderungen</h5>
        <div class="grid-2">
          <div class="callout merke"><strong>Funktional</strong> – <em>was</em> das System können muss: „Zwei Monitore anschließen“, „Belege scannen“, „Videokonferenzen führen“.</div>
          <div class="callout merke"><strong>Nicht-funktional</strong> – <em>wie gut</em> es das kann: Leistung, Lautstärke (&lt; 25 dB(A)), Energieverbrauch, Ergonomie, Sicherheit, Verfügbarkeit, Kosten.</div>
        </div>
        <h5>Lastenheft und Pflichtenheft</h5>
        <table><thead><tr><th>Merkmal</th><th>Lastenheft</th><th>Pflichtenheft</th></tr></thead><tbody>
          <tr><td>Urheber</td><td>Auftraggeber (Kunde)</td><td>Auftragnehmer (IT-Dienstleister)</td></tr>
          <tr><td>Frage</td><td><strong>Was</strong> soll erreicht werden, <strong>wofür</strong>?</td><td><strong>Wie</strong> und <strong>womit</strong> wird es umgesetzt?</td></tr>
          <tr><td>Inhalt</td><td>Ausgangssituation, Ziele, Anforderungen, Rahmenbedingungen, Abnahmekriterien</td><td>Konkrete Lösung: Produkte, Konfiguration, Zeitplan, Kosten, Testfälle</td></tr>
          <tr><td>Zeitpunkt</td><td>vor der Angebotsanfrage</td><td>nach Auftragserteilung bzw. als Teil des Angebots</td></tr>
          <tr><td>Verbindlichkeit</td><td colspan="2">Nach Abstimmung wird das Pflichtenheft Vertragsgrundlage; die Abnahme prüft gegen seine Kriterien.</td></tr>
        </tbody></table>
        <div class="callout tipp"><strong>Eselsbrücke:</strong> Das <strong>L</strong>astenheft schreibt der Kunde, der die <strong>L</strong>ast (das Problem) hat. Das <strong>P</strong>flichtenheft schreibt der Dienstleister, der die <strong>P</strong>flicht zur Umsetzung übernimmt.</div>
        <h5>Geräteklassen passend zum Bedarf</h5>
        <table><thead><tr><th>Geräteklasse</th><th>Stärken</th><th>typischer Einsatz</th></tr></thead><tbody>
          <tr><td>Desktop-PC (Tower, Mini-PC)</td><td>leistungsstark, aufrüstbar, günstig pro Leistung</td><td>Sachbearbeitung, CAD, Entwicklung</td></tr>
          <tr><td>Notebook</td><td>mobil, mit Dockingstation vollwertiger Arbeitsplatz</td><td>Außendienst, Homeoffice, Hybridarbeit</td></tr>
          <tr><td>All-in-One</td><td>platzsparend, wenige Kabel</td><td>Empfang, Beratungsplatz</td></tr>
          <tr><td>Thin Client</td><td>sparsam, zentral verwaltet, kaum Daten lokal</td><td>virtuelle Desktops (VDI/DaaS), Schulungsräume</td></tr>
          <tr><td>Tablet / Smartphone</td><td>sehr mobil, Touch, Kamera</td><td>Lager, Service vor Ort, Unterschriften</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel:</strong> Die Steuerkanzlei „Deichblick“ in Husum möchte „neue Rechner“. Im Gespräch zeigt sich: 6 Mitarbeitende arbeiten zwei Tage pro Woche im Homeoffice, nutzen eine Kanzlei-Branchensoftware und scannen viele Belege. Ableitung: Notebooks mit Dockingstation (Mobilität), je zwei 24-Zoll-Monitore (Belege und Software nebeneinander), Dokumentenscanner mit automatischem Einzug, VPN-Zugang, verschlüsselte SSD (Mandantendaten = hoher Schutzbedarf).</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Verwechsle nicht Urheber und Inhalt. „Der Kunde beschreibt im Pflichtenheft …“ ist falsch. Und: Anforderungen sollen <strong>messbar</strong> sein – „schnell“ ist keine prüfbare Anforderung, „Bootzeit unter 20 s“ schon.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Nennen</em> Sie vier Fragen, die Sie im Kundengespräch stellen“, „<em>Unterscheiden</em> Sie Lasten- und Pflichtenheft hinsichtlich Urheber und Inhalt“, „<em>Begründen</em> Sie die Wahl einer Geräteklasse für den Außendienst“. Beziehe deine Antwort immer auf die Situation im Aufgabentext.</div>
      `
    },
    {
      id: "gehaeuse-netzteil",
      title: "Gehäuse, Kühlung und Netzteil",
      exam: ["AP1", "AP2"],
      summary: "Formfaktoren von Gehäuse und Mainboard, Kühlsysteme im Vergleich, Aufgaben und Kenngrößen des Netzteils, 80-PLUS-Stufen, Netzteildimensionierung mit Reserve sowie PC-Montage mit ESD-Schutz.",
      html: `
        <h5>Gehäuse und Formfaktoren</h5>
        <p>Das Gehäuse schützt die Komponenten vor Staub, Berührung und Beschädigung, führt die Luft (Airflow) und bestimmt, welches Mainboard, wie lange Grafikkarten, welche Kühler und wie viele Laufwerke passen. Der <strong>Formfaktor</strong> legt Maße und Befestigungspunkte fest.</p>
        <table><thead><tr><th>Formfaktor</th><th>Maße (Mainboard)</th><th>Erweiterungsslots</th><th>Einsatz</th></tr></thead><tbody>
          <tr><td>ATX</td><td>305 × 244 mm</td><td>bis 7</td><td>Standard-Tower, viel Erweiterung</td></tr>
          <tr><td>Micro-ATX</td><td>244 × 244 mm</td><td>bis 4</td><td>kompakte Büro-PCs</td></tr>
          <tr><td>Mini-ITX</td><td>170 × 170 mm</td><td>1</td><td>sehr kleine PCs, Mini-Tower</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>Merke:</strong> Kleinere Boards passen in größere Gehäuse (Micro-ATX in ein ATX-Gehäuse), aber nicht umgekehrt.</div>
        <h5>Kühlsysteme</h5>
        <p>Jede elektrische Leistung, die ein Chip aufnimmt, wird am Ende zu Wärme. Diese muss über <strong>Wärmeleitpaste</strong> (füllt Luftspalte zwischen Chip und Kühler) und <strong>Kühlkörper</strong> abgeführt werden.</p>
        <table><thead><tr><th>Kühlung</th><th>Vorteile</th><th>Nachteile</th></tr></thead><tbody>
          <tr><td>Luftkühlung (Kühlkörper + Lüfter)</td><td>günstig, einfach, wartungsarm, kaum Ausfallrisiko</td><td>begrenzte Leistung, bei hoher Drehzahl laut, braucht Platz</td></tr>
          <tr><td>Wasserkühlung (AiO oder Custom-Loop)</td><td>hohe Kühlleistung, oft leiser, gleichmäßige Temperaturen</td><td>teurer, Pumpe als Verschleißteil, Leckage-Risiko</td></tr>
          <tr><td>Passivkühlung (ohne Lüfter)</td><td>lautlos, kein Staub durch Lüfter</td><td>nur für sparsame Systeme (Thin Clients, Mini-PCs)</td></tr>
          <tr><td>Phasenwechsel / Kompressor</td><td>Temperaturen unter Raumtemperatur</td><td>sehr teuer, laut, nur für Extrem-Übertaktung</td></tr>
        </tbody></table>
        <h5>Das Netzteil (PSU)</h5>
        <ul>
          <li><strong>Umwandlung:</strong> 230 V Wechselspannung (AC) → Gleichspannungen (DC) von <strong>12 V</strong> (CPU, Grafikkarte, Lüfter), <strong>5 V</strong> und <strong>3,3 V</strong>.</li>
          <li><strong>Nennleistung</strong> in Watt = maximale <em>Ausgangsleistung</em> (DC), die das Netzteil dauerhaft liefern kann.</li>
          <li><strong>Anschlüsse:</strong> 24-Pin-Mainboard (ATX), 4+4-Pin-CPU (EPS), PCIe 6+2-Pin bzw. 12V-2×6 (moderne Grafikkarten), SATA-Strom.</li>
          <li><strong>Schutzschaltungen:</strong> OCP (Überstrom), OVP/UVP (Über-/Unterspannung), SCP (Kurzschluss), OTP (Übertemperatur).</li>
          <li><strong>Bauformen:</strong> ATX (Standard), SFX (kleine Gehäuse), TFX (flache Slim-PCs); <em>modulare</em> Netzteile erlauben, nicht benötigte Kabel wegzulassen.</li>
        </ul>
        <h5>Wirkungsgrad und 80 PLUS</h5>
        <div class="callout formel">η = P_ab ÷ P_zu &nbsp;→&nbsp; P_zu = P_ab ÷ η &nbsp;&nbsp;|&nbsp;&nbsp; Verlustleistung P_V = P_zu − P_ab</div>
        <table><thead><tr><th>Stufe</th><th>115 V intern (klassische Tabelle)<br>20 / 50 / 100 % Last</th><th>230 V EU intern<br>20 / 50 / 100 % Last</th></tr></thead><tbody>
          <tr><td>80 PLUS (Standard)</td><td>80 / 80 / 80 %</td><td>82 / 85 / 82 %</td></tr>
          <tr><td>Bronze</td><td>82 / 85 / 82 %</td><td>85 / 88 / 85 %</td></tr>
          <tr><td>Silver</td><td>85 / 88 / 85 %</td><td>87 / 90 / 87 %</td></tr>
          <tr><td>Gold</td><td>87 / 90 / 87 %</td><td>90 / 92 / 89 %</td></tr>
          <tr><td>Platinum</td><td>90 / 92 / 89 %</td><td>92 / 94 / 90 %</td></tr>
          <tr><td>Titanium (zusätzlich 90 % bei 10 % Last)</td><td>92 / 94 / 90 %</td><td>94 / 96 / 94 %</td></tr>
        </tbody></table>
        <div class="callout achtung"><strong>Achtung:</strong> Es gibt zwei Tabellen. Schulbücher und viele Webseiten zeigen die klassische <strong>115-V-Tabelle</strong> (US-Netz), in Europa (230 V) gelten die etwas höheren Werte rechts. In der Prüfung gilt immer der Wert aus dem Aufgabentext bzw. Datenblatt. Der höchste Wirkungsgrad liegt meist bei <strong>etwa 50 % Auslastung</strong> – ein riesig überdimensioniertes Netzteil arbeitet im Büroalltag ineffizient. Neben 80 PLUS gibt es das Prüfsiegel <strong>Cybenetics</strong>: ETA bewertet die Effizienz, LAMBDA die Lautstärke.</div>
        <h5>Netzteil dimensionieren</h5>
        <div class="callout beispiel"><strong>Beispiel:</strong> CPU 125 W, Grafikkarte 200 W, Mainboard 40 W, RAM 10 W, 2 SSDs à 5 W, 5 Lüfter à 3 W.<br>
          Summe: 125 + 200 + 40 + 10 + 10 + 15 = <strong>400 W</strong><br>
          Reserve 25 % (Lastspitzen, Alterung, Aufrüstung): 400 W × 1,25 = <strong>500 W</strong> → gewählt wird das nächstgrößere Standardmodell, z. B. <strong>550 W</strong>.<br>
          Leistungsaufnahme aus der Steckdose bei 400 W Last und η = 90 %: 400 W ÷ 0,9 ≈ <strong>444,4 W</strong>, davon ≈ 44,4 W Abwärme im Netzteil.</div>
        <div class="callout beispiel"><strong>Beispiel Teillast:</strong> Ein 650-W-Netzteil wird im Betrieb zu 50 % ausgelastet und erreicht dabei η = 90 %.<br>
          Abgegebene Leistung: 650 W × 0,5 = <strong>325 W</strong> · Aufgenommene Leistung: 325 W ÷ 0,9 ≈ <strong>361,1 W</strong> · Verlustleistung ≈ 36,1 W<br>
          Typischer Fehler: 650 W ÷ 0,9 ≈ 722,2 W – dann hättest du so gerechnet, als liefe das Netzteil ständig unter Volllast.</div>
        <h5>PC zusammenbauen: Reihenfolge und ESD-Schutz</h5>
        <ol>
          <li><strong>Vorbereiten:</strong> Kompatibilität geprüft? Netzstecker gezogen, Arbeitsplatz mit ESD-Matte, Erdungsarmband angelegt, Werkzeug und Handbuch bereit.</li>
          <li><strong>Mainboard vorbestücken</strong> (auf der Antistatikunterlage): CPU in den Sockel (Markierung beachten, nicht auf die Kontakte fassen), Wärmeleitpaste und Kühler, RAM in die Dual-Channel-Slots, M.2-SSD.</li>
          <li><strong>Gehäuse vorbereiten:</strong> Abstandshalter passend zum Formfaktor, I/O-Blende, Netzteil einbauen.</li>
          <li><strong>Mainboard einsetzen</strong> und verschrauben, dann Erweiterungskarten (Grafikkarte) und 2,5″/3,5″-Laufwerke.</li>
          <li><strong>Verkabeln:</strong> 24-Pin-ATX, EPS für die CPU, PCIe-Strom der Grafikkarte, SATA, Front-Panel (Power, Reset, USB, Audio), Lüfter. Kabel so verlegen, dass der Luftstrom frei bleibt.</li>
          <li><strong>Erststart und Test:</strong> POST, im UEFI erkannte CPU, RAM-Größe und Laufwerke prüfen, Temperaturen beobachten, danach Betriebssystem, Treiber und Funktionstest – alles im Protokoll festhalten.</li>
        </ol>
        <div class="callout merke"><strong>ESD (Electrostatic Discharge):</strong> Der Mensch kann sich auf mehrere tausend Volt aufladen, ohne es zu merken. Schon eine nicht spürbare Entladung kann Chips schädigen oder vorschädigen (späterer Ausfall). Schutz: Erdungsarmband, ESD-Matte, Bauteile nur am Rand anfassen und in Antistatikbeuteln lagern, keine Kunstfaserkleidung.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Berechnen</em> Sie die Mindestleistung des Netzteils mit 20 % Reserve“, „<em>Ermitteln</em> Sie die aufgenommene Leistung bei einem Wirkungsgrad von 90 %“, „<em>Erläutern</em> Sie die Bedeutung von 80 PLUS Gold“, „<em>Nennen</em> Sie drei Maßnahmen zum ESD-Schutz beim Einbau“. Lies genau, ob nach der <strong>Ausgangs-</strong> (Nennleistung) oder der <strong>Eingangsleistung</strong> (aus dem Netz) gefragt ist, und folge exakt dem Rechenweg, den die Aufgabe vorgibt.</div>
      `
    },
    {
      id: "mainboard-cpu",
      title: "Mainboard, Chipsatz, Bussysteme, UEFI und Prozessor",
      exam: ["AP1", "AP2"],
      summary: "Aufbau des Mainboards, Sockel und Chipsatz, Systembus und PCIe-Lanes, BIOS/UEFI-Einstellungen sowie die Kenngrößen einer CPU: Kerne, Threads, Takt, Cache und TDP.",
      html: `
        <h5>Das Mainboard – die zentrale Verbindungsplatine</h5>
        <ul>
          <li><strong>CPU-Sockel:</strong> mechanische und elektrische Schnittstelle zur CPU. Beispiele 2026: <strong>AM5</strong> (AMD Ryzen 7000/8000/9000), <strong>LGA 1851</strong> (Intel Core Ultra 200S), <strong>LGA 1700</strong> (Intel Core 12.–14. Generation).</li>
          <li><strong>Chipsatz:</strong> stellt zusätzliche Anschlüsse bereit (USB, SATA, weitere PCIe-Lanes, LAN, Audio) und legt Funktionen fest, z. B. Übertakten. Beispiele: Intel Z890/B860, AMD X870/B850. Speichercontroller und die schnellsten PCIe-Lanes (Grafikkarte, erste M.2-SSD) sitzen heute direkt in der CPU.</li>
          <li><strong>RAM-Steckplätze</strong> (DIMM), <strong>PCIe-Slots</strong>, <strong>M.2-Steckplätze</strong>, <strong>SATA-Ports</strong>.</li>
          <li><strong>Stromanschlüsse:</strong> 24-Pin-ATX und 4+4-Pin-EPS für die CPU.</li>
          <li><strong>Firmware-Chip</strong> (BIOS/UEFI) und <strong>Knopfzelle</strong> (CR2032) für Uhr und Einstellungen.</li>
          <li><strong>I/O-Blende</strong> hinten: USB, LAN, Audio, ggf. HDMI/DisplayPort für die integrierte Grafik.</li>
        </ul>
        <div class="callout achtung"><strong>Kompatibilität prüfen:</strong> CPU passt zum Sockel <em>und</em> wird von Chipsatz und BIOS-Version unterstützt · RAM-Typ passt (AM5 und LGA 1851: nur DDR5; LGA 1700: DDR4 <em>oder</em> DDR5 – je nach Board) · Formfaktor passt ins Gehäuse · Kühler schafft die TDP und passt auf den Sockel · Netzteil hat die nötigen Stecker.</div>
        <h5>Bussysteme</h5>
        <p>Ein <strong>Bus</strong> ist ein gemeinsamer Übertragungsweg für Daten. Klassisch besteht der Systembus aus <strong>Datenbus</strong> (transportiert die Daten), <strong>Adressbus</strong> (wählt die Speicherstelle) und <strong>Steuerbus</strong> (Lesen/Schreiben, Takt, Interrupts).</p>
        <div class="callout formel">Adressierbare Speicherstellen = 2ⁿ (n = Breite des Adressbusses in Bit) &nbsp;→&nbsp; 32 Bit: 2³² = 4.294.967.296 Byte = 4 GiB</div>
        <p><strong>PCI Express (PCIe)</strong> ist dagegen eine serielle Punkt-zu-Punkt-Verbindung. Sie besteht aus <strong>Lanes</strong> (je ein Sende- und Empfangspaar, vollduplex). Slots gibt es als x1, x4, x8 und x16; Grafikkarten nutzen x16, NVMe-SSDs meist x4.</p>
        <table><thead><tr><th>Version</th><th>Transferrate/Lane</th><th>≈ Datenrate/Lane und Richtung</th><th>x4</th><th>x16</th></tr></thead><tbody>
          <tr><td>PCIe 3.0</td><td>8 GT/s</td><td>≈ 0,98 GB/s</td><td>≈ 3,9 GB/s</td><td>≈ 15,8 GB/s</td></tr>
          <tr><td>PCIe 4.0</td><td>16 GT/s</td><td>≈ 1,97 GB/s</td><td>≈ 7,9 GB/s</td><td>≈ 31,5 GB/s</td></tr>
          <tr><td>PCIe 5.0</td><td>32 GT/s</td><td>≈ 3,94 GB/s</td><td>≈ 15,8 GB/s</td><td>≈ 63 GB/s</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>Merke:</strong> Jede neue PCIe-Generation verdoppelt die Datenrate pro Lane. PCIe ist abwärtskompatibel – es gilt dann die langsamere Version beider Partner.</div>
        <h5>BIOS und UEFI</h5>
        <p>Die Firmware führt nach dem Einschalten den <strong>POST</strong> (Power-On Self-Test) durch, initialisiert die Hardware und startet den Bootloader. Das moderne <strong>UEFI</strong> hat das alte BIOS abgelöst.</p>
        <table><thead><tr><th>Merkmal</th><th>Legacy-BIOS</th><th>UEFI</th></tr></thead><tbody>
          <tr><td>Partitionsschema zum Booten</td><td>MBR (max. 2 TiB, 4 primäre Partitionen)</td><td>GPT (sehr große Datenträger, viele Partitionen)</td></tr>
          <tr><td>Sicherheit</td><td>kein Secure Boot</td><td><strong>Secure Boot</strong> prüft Signaturen des Bootloaders</td></tr>
          <tr><td>Bedienung</td><td>Text, Tastatur</td><td>grafisch, Maus, oft Netzwerk-/Update-Funktion</td></tr>
        </tbody></table>
        <p>Typische Einstellungen: Bootreihenfolge, Secure Boot, TPM 2.0 (Intel PTT / AMD fTPM), Virtualisierung (VT-x/AMD-V), Speicherprofil (XMP/EXPO), Lüfterkurven, Firmware-Passwort, Wake-on-LAN.</p>
        <h5>Der Prozessor (CPU)</h5>
        <p>Die CPU führt die Befehle der Programme aus. Innen arbeiten <strong>Steuerwerk</strong> (holt und dekodiert Befehle), <strong>Rechenwerk/ALU</strong> (rechnet und vergleicht), <strong>Register</strong> (kleinste, schnellste Speicher) und <strong>Cache</strong> zusammen.</p>
        <table><thead><tr><th>Kenngröße</th><th>Bedeutung</th></tr></thead><tbody>
          <tr><td>Kerne (Cores)</td><td>eigenständige Recheneinheiten; moderne CPUs kombinieren oft Leistungs- (P) und Effizienzkerne (E)</td></tr>
          <tr><td>Threads</td><td>gleichzeitig ausführbare Befehlsströme; mit SMT/Hyper-Threading 2 Threads pro Kern</td></tr>
          <tr><td>Takt (GHz)</td><td>Taktzyklen pro Sekunde; Basis- und Boost-Takt. 4,5 GHz → ein Takt dauert 1 ÷ 4,5 GHz ≈ 0,22 ns</td></tr>
          <tr><td>Cache L1/L2/L3</td><td>schneller Zwischenspeicher (SRAM); L1 am kleinsten und schnellsten, L3 von allen Kernen geteilt</td></tr>
          <tr><td>TDP / Base Power (W)</td><td>Richtwert für die abzuführende Wärme → Auswahl von Kühler und Netzteil; Boost kann kurzzeitig deutlich mehr ziehen</td></tr>
          <tr><td>Fertigung (nm)</td><td>kleinere Strukturen → mehr Transistoren, meist weniger Energie pro Rechenschritt</td></tr>
          <tr><td>iGPU / NPU</td><td>integrierte Grafik bzw. KI-Beschleuniger (Leistung in TOPS)</td></tr>
          <tr><td>Befehlssatz</td><td>x86-64 (Intel, AMD) oder ARM (z. B. Apple M-Serie, Snapdragon X)</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel:</strong> Eine Hybrid-CPU hat 8 P-Kerne mit Hyper-Threading und 16 E-Kerne ohne SMT.<br>Kerne: 8 + 16 = <strong>24</strong> · Threads: 8 × 2 + 16 × 1 = <strong>32</strong>.<br>Ein Nachfolgemodell ohne Hyper-Threading mit ebenfalls 24 Kernen hat nur 24 Threads – kann aber durch höhere Leistung pro Takt (IPC) trotzdem schneller sein.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Mehr GHz heißt nicht automatisch mehr Leistung. Entscheidend ist das Zusammenspiel aus Takt, Befehlen pro Takt (IPC), Kernzahl und Cache. Für Office reichen wenige schnelle Kerne; Virtualisierung, Video-Rendering und Kompilieren profitieren von vielen Kernen.</div>
        <p>So liest du die CPU-Daten eines Systems aus:</p>
        <pre><code>Get-CimInstance Win32_Processor | Select-Object Name, NumberOfCores, NumberOfLogicalProcessors, MaxClockSpeed   # PowerShell
lscpu          # Linux: Kerne, Threads, Cache
nproc          # Linux: Anzahl logischer Prozessoren</code></pre>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Ein (oft englisches) Datenblatt ist gegeben. „<em>Erläutern</em> Sie die Angaben Cores/Threads/L3 Cache/TDP“, „<em>Prüfen</em> Sie, ob CPU, Mainboard und RAM zusammenpassen“, „<em>Nennen</em> Sie zwei UEFI-Einstellungen, die für Windows 11 aktiviert sein müssen“ (Secure Boot, TPM 2.0).</div>
      `
    },
    {
      id: "ram-speicher",
      title: "Arbeitsspeicher, Massenspeicher, Dateisysteme und Grafik",
      exam: ["AP1", "AP2"],
      summary: "DDR4 und DDR5, Dual Channel, Latenz und ECC; Speicherhierarchie; HDD, SATA-SSD und NVMe-SSD im Vergleich (Datenrate, IOPS, TBW); Dateisysteme FAT32, exFAT, NTFS, ext4 und APFS; integrierte und dedizierte Grafik.",
      html: `
        <h5>Arbeitsspeicher (RAM)</h5>
        <p>Der RAM hält Programme und Daten, mit denen die CPU gerade arbeitet. Er ist <strong>flüchtig</strong>: ohne Strom sind die Daten weg. Als Hauptspeicher dient <strong>DRAM</strong> (Kondensatoren, muss ständig aufgefrischt werden); der schnellere, teurere <strong>SRAM</strong> steckt als Cache in der CPU.</p>
        <table><thead><tr><th>Merkmal</th><th>DDR4</th><th>DDR5</th></tr></thead><tbody>
          <tr><td>Übliche Geschwindigkeit</td><td>2133–3200 MT/s</td><td>4800 bis über 6400 MT/s</td></tr>
          <tr><td>Spannung</td><td>1,2 V</td><td>1,1 V (Spannungsregler/PMIC auf dem Modul)</td></tr>
          <tr><td>Aufbau je Modul</td><td>ein 64-Bit-Kanal</td><td>zwei 32-Bit-Subkanäle, On-Die-ECC im Chip</td></tr>
          <tr><td>Kompatibilität</td><td colspan="2">mechanisch verschieden kodiert (Kerbe) – DDR4 passt nicht in DDR5-Slots</td></tr>
        </tbody></table>
        <p><strong>Bauformen:</strong> DIMM (Desktop), SO-DIMM (Notebook), CAMM2 (flaches Notebook-Modul) oder fest verlöteter LPDDR5X-Speicher (nicht aufrüstbar!).</p>
        <div class="callout formel">Bandbreite je Kanal = Transferrate (MT/s) × 8 Byte (64 Bit)<br>Tatsächliche Latenz (ns) = CL × 2000 ÷ Transferrate (MT/s)</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> DDR5-5600 im Dual-Channel-Betrieb<br>
          je Kanal: 5600 MT/s × 8 Byte = 44.800 MB/s = <strong>44,8 GB/s</strong><br>
          Dual Channel: 2 × 44,8 GB/s = <strong>89,6 GB/s</strong><br>
          Latenz-Vergleich: DDR4-3200 CL16 → 16 × 2000 ÷ 3200 = 10 ns; DDR5-6000 CL30 → 30 × 2000 ÷ 6000 = 10 ns. Die höhere CL-Zahl von DDR5 bedeutet also nicht automatisch eine längere Wartezeit.</div>
        <ul>
          <li><strong>Dual Channel:</strong> Zwei gleiche Module in den dafür vorgesehenen Slots (Handbuch, meist A2/B2) verdoppeln die Busbreite auf 128 Bit – spürbar vor allem bei integrierter Grafik. Ein 16-GB-Modul ist daher langsamer als 2 × 8 GB.</li>
          <li><strong>ECC</strong> (Error Correction Code): Zusatzbits erkennen und korrigieren Einzelbitfehler. Standard in Servern und üblich in Workstations; CPU und Mainboard müssen es unterstützen. Das On-Die-ECC von DDR5 schützt nur die Daten im Chip und ersetzt echtes ECC-RAM nicht.</li>
          <li><strong>XMP / EXPO:</strong> Profile im Modul, mit denen das UEFI höhere Geschwindigkeiten als den JEDEC-Standard einstellt.</li>
        </ul>
        <h5>Speicherarten im Überblick</h5>
        <table><thead><tr><th>Speicher</th><th>flüchtig?</th><th>Technik / Einsatz</th></tr></thead><tbody>
          <tr><td>Register, Cache (SRAM)</td><td>ja</td><td>Flipflops, sehr schnell und teuer – in der CPU</td></tr>
          <tr><td>Arbeitsspeicher (DRAM, DDR-SDRAM)</td><td>ja</td><td>Kondensatoren, regelmäßiges Auffrischen (Refresh) nötig – Hauptspeicher</td></tr>
          <tr><td>ROM / Flash-EEPROM</td><td>nein</td><td>Firmware (BIOS/UEFI), elektrisch neu beschreibbar für Firmware-Updates</td></tr>
          <tr><td>NAND-Flash</td><td>nein</td><td>SSD, USB-Stick, Speicherkarte</td></tr>
          <tr><td>Magnetspeicher</td><td>nein</td><td>HDD, Magnetband (LTO) für Archiv und Backup</td></tr>
        </tbody></table>
        <p>Die <strong>Speicherhierarchie</strong> reicht von klein, schnell und teuer (Register, Cache) bis groß, langsam und günstig (HDD, Band). Programme werden vom Massenspeicher in den RAM geladen, die CPU holt sich die gerade benötigten Daten über den Cache.</p>
        <h5>Massenspeicher</h5>
        <table><thead><tr><th>Merkmal</th><th>HDD</th><th>SSD (SATA)</th><th>SSD (NVMe, PCIe 4.0 x4)</th></tr></thead><tbody>
          <tr><td>Technik</td><td>rotierende Magnetscheiben, Schreib-/Leseköpfe</td><td>NAND-Flash, Controller</td><td>NAND-Flash, direkt an PCIe</td></tr>
          <tr><td>Sequenziell lesen</td><td>ca. 150–280 MB/s</td><td>ca. 550 MB/s (SATA III: 6 Gbit/s)</td><td>bis ca. 7.000 MB/s</td></tr>
          <tr><td>Zugriffszeit</td><td>mehrere ms</td><td>≈ 0,1 ms</td><td>≈ 0,02–0,1 ms</td></tr>
          <tr><td>IOPS (zufällige 4-KiB-Zugriffe)</td><td>ca. 100–200</td><td>bis ca. 100.000</td><td>mehrere 100.000 bis über 1 Mio.</td></tr>
          <tr><td>Stärken</td><td>günstig pro TB, große Kapazitäten</td><td>stoßfest, leise, passt als 2,5″ in alte Systeme</td><td>sehr schnell, kompakt (M.2)</td></tr>
          <tr><td>Schwächen</td><td>laut, stoßempfindlich, langsamer Zugriff</td><td>SATA bremst</td><td>teurer pro TB, wird warm</td></tr>
        </tbody></table>
        <ul>
          <li><strong>IOPS</strong> (Input/Output Operations per Second) zählt die Lese- und Schreibvorgänge pro Sekunde. Für Systemstart, Datenbanken und viele kleine Dateien ist sie wichtiger als die sequenzielle Datenrate, die vor allem beim Kopieren großer Dateien (Video, Images) zählt. Deshalb fühlt sich ein PC mit SSD viel schneller an als mit HDD.</li>
          <li><strong>M.2</strong> ist nur ein <em>Formfaktor</em> (z. B. 2280 = 22 mm breit, 80 mm lang). Ein M.2-Steckplatz kann SATA oder NVMe sprechen – Datenblatt prüfen!</li>
          <li><strong>Haltbarkeit:</strong> SSDs geben die Schreibmenge als <strong>TBW</strong> (Terabytes Written) an. Wear Leveling verteilt Schreibzugriffe, TRIM meldet gelöschte Blöcke.</li>
          <li><strong>Zellentypen:</strong> SLC (1 Bit/Zelle) → MLC → TLC → QLC (4 Bit/Zelle): mehr Bits pro Zelle = billiger, aber weniger haltbar und beim Schreiben langsamer.</li>
          <li><strong>Zustand prüfen:</strong> S.M.A.R.T.-Werte (Self-Monitoring, Analysis and Reporting Technology).</li>
        </ul>
        <h5>Dateisysteme</h5>
        <p>Bevor ein Betriebssystem einen Datenträger nutzen kann, wird er partitioniert (GPT oder MBR) und mit einem Dateisystem formatiert. Das Dateisystem legt fest, wie Dateien, Ordner und Rechte gespeichert werden.</p>
        <table><thead><tr><th>Dateisystem</th><th>Einsatz</th><th>Besonderheiten</th></tr></thead><tbody>
          <tr><td>FAT32</td><td>USB-Sticks, EFI-Partition</td><td>sehr kompatibel, max. Dateigröße 4 GiB − 1 Byte, keine Rechte</td></tr>
          <tr><td>exFAT</td><td>Wechseldatenträger, SD-Karten</td><td>große Dateien, kompatibel zu Windows und macOS, keine Rechte</td></tr>
          <tr><td>NTFS</td><td>Windows-Systemlaufwerk</td><td>Zugriffsrechte (ACL), Journaling, Verschlüsselung, Kompression</td></tr>
          <tr><td>ext4</td><td>Linux</td><td>Journaling, Unix-Rechte</td></tr>
          <tr><td>APFS</td><td>macOS</td><td>für SSDs optimiert, Snapshots, Verschlüsselung</td></tr>
        </tbody></table>
        <h5>Grafik</h5>
        <div class="grid-2">
          <div class="callout merke"><strong>Integrierte Grafik (iGPU)</strong><br>in der CPU, nutzt den Arbeitsspeicher mit (Dual Channel lohnt sich!), sparsam, günstig – ideal für Office, Web, Videokonferenz, 2–3 Monitore.</div>
          <div class="callout merke"><strong>Dedizierte Grafikkarte (dGPU)</strong><br>eigene Karte im PCIe-x16-Slot mit eigenem Grafikspeicher (GDDR6/GDDR7), viel Rechenleistung – für CAD, Videoschnitt, KI-Anwendungen, Gaming. Braucht viel Strom und Kühlung.</div>
        </div>
        <p>Kenngrößen im Datenblatt: Grafikspeicher (VRAM), Anzahl Recheneinheiten, Leistungsaufnahme (TBP), Anschlüsse und Anzahl gleichzeitig nutzbarer Monitore. Für CAD gibt es Workstation-Karten mit zertifizierten Treibern.</p>
        <div class="callout beispiel"><strong>Beispiel Bildspeicher:</strong> Ein einzelnes 4K-Bild mit 32 Bit je Pixel belegt 3840 × 2160 × 4 Byte = 33.177.600 Byte ≈ <strong>31,64 MiB</strong>. Für die reine Bildausgabe reicht also wenig Speicher – viel VRAM brauchen 3D-Modelle, Texturen, Videoschnitt und KI-Modelle, die komplett in den Grafikspeicher geladen werden.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Eine „2-TB“-Festplatte zeigt Windows mit nur rund 1,8 „TB“ an. Nichts fehlt: Der Hersteller rechnet mit 2 × 10¹² Byte, Windows teilt durch 1024⁴ (TiB). 2 × 10¹² ÷ 1024⁴ ≈ 1,82 TiB.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Nennen</em> Sie zwei Vorteile einer SSD gegenüber einer HDD“, „<em>Erklären</em> Sie Dual Channel“, „<em>Begründen</em> Sie, ob für den Buchhaltungsarbeitsplatz eine dedizierte Grafikkarte nötig ist“, „<em>Erläutern</em> Sie die Angabe TBW im Datenblatt“.</div>
      `
    },
    {
      id: "schnittstellen",
      title: "Schnittstellen: USB, Thunderbolt, HDMI und DisplayPort",
      exam: ["AP1"],
      summary: "USB-Versionen und Steckertypen, Stromversorgung per USB Power Delivery, Thunderbolt, Bildschirmanschlüsse und Daisy Chaining – mit Rechenbeispielen zu Übertragungszeit und Leistung.",
      html: `
        <p>Moderne Schnittstellen übertragen Daten <strong>seriell</strong> (Bit für Bit über wenige Leitungspaare) mit sehr hohen Taktraten. Datenraten werden in <strong>Bit pro Sekunde</strong> angegeben (Mbit/s, Gbit/s) – Dateigrößen dagegen in Byte. Der Faktor 8 ist die häufigste Fehlerquelle.</p>
        <h5>USB-Versionen</h5>
        <table><thead><tr><th>Bezeichnung (technisch)</th><th>Verkaufsname / früher</th><th>Datenrate (brutto)</th><th>Stecker</th></tr></thead><tbody>
          <tr><td>USB 2.0</td><td>Hi-Speed</td><td>480 Mbit/s</td><td>A, B, Micro-B, C</td></tr>
          <tr><td>USB 3.2 Gen 1</td><td>„USB 5Gbps“, früher USB 3.0 / 3.1 Gen 1</td><td>5 Gbit/s</td><td>A (blau), C</td></tr>
          <tr><td>USB 3.2 Gen 2</td><td>„USB 10Gbps“, früher USB 3.1 Gen 2</td><td>10 Gbit/s</td><td>A, C</td></tr>
          <tr><td>USB 3.2 Gen 2×2</td><td>„USB 20Gbps“</td><td>20 Gbit/s</td><td>nur C</td></tr>
          <tr><td>USB4 (Version 1)</td><td>„USB 40Gbps“</td><td>20 oder 40 Gbit/s</td><td>nur C</td></tr>
          <tr><td>USB4 Version 2.0</td><td>„USB 80Gbps“</td><td>80 Gbit/s (asymmetrisch bis 120)</td><td>nur C</td></tr>
        </tbody></table>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> <strong>USB-C ist ein Steckerformat, keine Geschwindigkeit!</strong> Hinter einer USB-C-Buchse kann USB 2.0 mit 480 Mbit/s oder USB4 mit 40 Gbit/s stecken. Entscheidend sind Datenblatt und Kabel (für hohe Raten und 5 A braucht es ein E-Marker-Kabel).</div>
        <h5>Strom über USB</h5>
        <div class="callout formel">P = U × I &nbsp;&nbsp;(Leistung in Watt = Spannung in Volt × Stromstärke in Ampere)</div>
        <table><thead><tr><th>Quelle</th><th>Spannung × Strom</th><th>Leistung</th></tr></thead><tbody>
          <tr><td>USB-2.0-Port</td><td>5 V × 0,5 A</td><td>2,5 W</td></tr>
          <tr><td>USB-3.x-Port</td><td>5 V × 0,9 A</td><td>4,5 W</td></tr>
          <tr><td>USB-A-Ladeanschluss (z. B. Steckernetzteil)</td><td>häufig 5 V × 2,4 A</td><td>12 W</td></tr>
          <tr><td>USB-C ohne PD (Type-C Current)</td><td>5 V × 1,5 A oder 5 V × 3 A</td><td>7,5 W bzw. 15 W</td></tr>
          <tr><td>USB Power Delivery (SPR)</td><td>bis 20 V × 5 A</td><td>bis 100 W</td></tr>
          <tr><td>USB PD Extended Power Range (EPR)</td><td>bis 48 V × 5 A</td><td>bis 240 W</td></tr>
        </tbody></table>
        <p>Seit Ende 2024 müssen in der EU Smartphones, Tablets, Kameras u. Ä. mit USB-C laden, seit dem 28.04.2026 auch neue Notebooks (gemeinsames Ladegerät).</p>
        <h5>Thunderbolt</h5>
        <p>Thunderbolt (Intel) nutzt ebenfalls USB-C-Stecker und bündelt PCIe, DisplayPort und USB in einem Kabel. <strong>Thunderbolt 3 und 4:</strong> 40 Gbit/s; Thunderbolt 4 schreibt Mindestwerte vor (z. B. zwei 4K-Monitore, Laden, PCIe-Tunnel). <strong>Thunderbolt 5:</strong> 80 Gbit/s in beide Richtungen, mit „Bandwidth Boost“ bis 120 Gbit/s in eine Richtung. Typischer Einsatz: <strong>Dockingstation</strong> – ein Kabel für Strom, Monitore, LAN und USB.</p>
        <h5>Bildschirmanschlüsse</h5>
        <table><thead><tr><th>Anschluss</th><th>Versionen / Datenrate</th><th>Besonderheiten</th></tr></thead><tbody>
          <tr><td>HDMI</td><td>1.4: 10,2 Gbit/s (4K@30 Hz) · 2.0: 18 Gbit/s (4K@60 Hz) · 2.1: 48 Gbit/s (4K@120 Hz, 8K@60 Hz) · 2.2: bis 96 Gbit/s</td><td>Standard bei TV und Beamer, überträgt Audio, CEC (Fernsteuerung), ARC/eARC</td></tr>
          <tr><td>DisplayPort</td><td>1.2: 21,6 Gbit/s · 1.4: 32,4 Gbit/s (zusätzlich DSC-Kompression möglich) · 2.1: bis 80 Gbit/s (UHBR20)</td><td>Standard bei PC-Monitoren, <strong>MST</strong> (Daisy Chaining), auch über USB-C („DP Alt Mode“)</td></tr>
          <tr><td>DVI / VGA</td><td>veraltet</td><td>VGA überträgt analog → unscharf bei hohen Auflösungen</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>Daisy Chaining (MST):</strong> Mit DisplayPort Multi-Stream Transport hängst du mehrere Monitore hintereinander („Kette“): PC → Monitor 1 (DP-Out) → Monitor 2. Alle Monitore teilen sich die Bandbreite eines Anschlusses. Voraussetzung: Grafikkarte und Monitore unterstützen MST, der Monitor hat einen DP-Ausgang. HDMI kann kein Daisy Chaining.</div>
        <h5>Weitere Schnittstellen am Arbeitsplatz</h5>
        <ul>
          <li><strong>RJ45 / Ethernet:</strong> 1 Gbit/s Standard, 2,5 Gbit/s zunehmend verbreitet.</li>
          <li><strong>WLAN</strong> (Wi-Fi 6/6E/7) und <strong>Bluetooth</strong> für Maus, Tastatur, Headset.</li>
          <li><strong>3,5-mm-Klinke</strong> für analoges Audio, <strong>Kartenleser</strong> (SD), <strong>Smartcard-Leser</strong> für Signaturkarten.</li>
        </ul>
        <div class="callout beispiel"><strong>Beispiel 1 – Übertragungsdauer:</strong> Ein 25-GB-Videoprojekt (25 × 10⁹ Byte) soll auf eine externe SSD.<br>
          Datenmenge in Bit: 25 × 10⁹ × 8 = 2 × 10¹¹ bit<br>
          USB 3.2 Gen 1: 2 × 10¹¹ bit ÷ (5 × 10⁹ bit/s) = <strong>40 s</strong> (theoretisch)<br>
          USB 2.0: 2 × 10¹¹ bit ÷ (480 × 10⁶ bit/s) ≈ 416,7 s ≈ <strong>6 min 57 s</strong><br>
          <strong>Beispiel 2 – Leistung:</strong> Ein Notebook braucht ein 65-W-Netzteil. Bei 20 V fließen I = P ÷ U = 65 W ÷ 20 V = <strong>3,25 A</strong>. Ein USB-C-Dock mit 90 W Power Delivery reicht, ein USB-A-Port mit 4,5 W nicht.</div>
        <div class="callout tipp"><strong>Englische Datenblätter:</strong> „up to 10 Gbps“ = bis zu 10 Gbit/s · „backward compatible“ = abwärtskompatibel · „Power Delivery up to 100 W“ · „daisy chain support“ · „refresh rate“ = Bildwiederholrate.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Anschlüsse auf einem Foto oder in einer Skizze <em>zuordnen</em> (USB-A, USB-C, HDMI, DP, RJ45), die maximale Leistung eines Ports <em>berechnen</em> (P = U × I), eine Übertragungsdauer <em>ermitteln</em> oder anhand eines englischen Textes Daisy Chaining <em>erklären</em>.</div>
      `
    },
    {
      id: "monitore-peripherie",
      title: "Monitore und Peripherie",
      exam: ["AP1"],
      summary: "Auflösung, Seitenverhältnis, Pixeldichte, benötigte Datenrate, Paneltypen und weitere Monitor-Kenngrößen sowie die Auswahl von Drucker, Scanner, Headset und Dockingstation nach Bedarf.",
      html: `
        <h5>Kenngrößen eines Monitors</h5>
        <table><thead><tr><th>Kenngröße</th><th>Bedeutung / typische Werte</th></tr></thead><tbody>
          <tr><td>Diagonale</td><td>in Zoll (1″ = 2,54 cm); Büro meist 24–27″</td></tr>
          <tr><td>Auflösung</td><td>Full HD 1920 × 1080 · WUXGA 1920 × 1200 · WQHD 2560 × 1440 · 4K UHD 3840 × 2160</td></tr>
          <tr><td>Seitenverhältnis</td><td>16:9 (Standard), 16:10 (mehr Höhe für Dokumente), 21:9 / 32:9 (Ultrawide)</td></tr>
          <tr><td>Pixeldichte</td><td>ppi (pixels per inch) – je höher, desto schärfer Schrift und Bilder</td></tr>
          <tr><td>Bildwiederholrate</td><td>Hz; Büro 60–75 Hz, Gaming 144 Hz und mehr</td></tr>
          <tr><td>Reaktionszeit</td><td>ms; wichtig bei schnellen Bewegungen (Gaming, Video)</td></tr>
          <tr><td>Helligkeit, Kontrast</td><td>cd/m² (Büro ca. 250–350), statisch z. B. 1000:1</td></tr>
          <tr><td>Farbraum, Farbtiefe</td><td>sRGB, DCI-P3, Adobe RGB; 8 Bit je Farbkanal = 24 Bit → 2²⁴ = 16.777.216 Farben</td></tr>
          <tr><td>Ergonomie</td><td>höhenverstellbar, neig- und drehbar, Pivot, entspiegelt/matt, flimmerfrei, VESA-Halterung</td></tr>
          <tr><td>Anschlüsse</td><td>HDMI, DisplayPort (ggf. DP-Out für MST), USB-C mit Power Delivery, USB-Hub, integrierter KVM-Switch</td></tr>
        </tbody></table>
        <h5>Pixeldichte und Maße berechnen</h5>
        <div class="callout formel">Diagonale in Pixel = √(Breite² + Höhe²) &nbsp;&nbsp;→&nbsp;&nbsp; ppi = Diagonale in Pixel ÷ Diagonale in Zoll<br>
          Bildbreite = Diagonale × a ÷ √(a² + b²) &nbsp;&nbsp; Bildhöhe = Diagonale × b ÷ √(a² + b²) &nbsp;&nbsp;(Seitenverhältnis a:b)</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> 27-Zoll-Monitor mit WQHD (2560 × 1440)<br>
          Diagonale in Pixel: √(2560² + 1440²) = √(6.553.600 + 2.073.600) = √8.627.200 ≈ 2937,2 px<br>
          Pixeldichte: 2937,2 ÷ 27 ≈ <strong>108,8 ppi</strong><br>
          Zum Vergleich: 24″ Full HD ≈ 91,8 ppi · 27″ 4K ≈ 163,2 ppi<br>
          Sichtbare Breite bei 16:9: 27″ × 16 ÷ √(16² + 9²) = 27″ × 16 ÷ 18,36 ≈ 23,5″ ≈ <strong>59,8 cm</strong>, Höhe ≈ 13,2″ ≈ 33,6 cm</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> 4K hat nicht doppelt, sondern <strong>viermal</strong> so viele Pixel wie Full HD (3840 × 2160 = 8.294.400 gegenüber 2.073.600). Und: Auf einem 27″-4K-Monitor wirkt Schrift ohne Skalierung (z. B. 150 %) winzig.</div>
        <h5>Welche Datenrate braucht ein Monitor?</h5>
        <div class="callout formel">Datenrate (bit/s) ≈ Breite × Höhe × Farbtiefe (Bit pro Pixel) × Bildwiederholrate (Hz)<br>
          (vereinfacht ohne Austastlücken; HDMI bis 2.0 und DisplayPort bis 1.4 nutzen die 8b/10b-Codierung → nur 80 % der Brutto-Datenrate stehen für Bilddaten zur Verfügung)</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> 4K-Monitor (3840 × 2160), 24 Bit, 60 Hz<br>
          3840 × 2160 × 24 bit × 60 /s = 11.943.936.000 bit/s ≈ <strong>11,94 Gbit/s</strong><br>
          HDMI 1.4: 10,2 Gbit/s × 0,8 = 8,16 Gbit/s → reicht <strong>nicht</strong> (daher nur 4K@30 Hz) · HDMI 2.0: 18 Gbit/s × 0,8 = 14,4 Gbit/s → <strong>reicht</strong><br>
          Daisy Chaining über DisplayPort 1.4 (32,4 Gbit/s × 0,8 = 25,92 Gbit/s): zwei 4K@60-Monitore brauchen 2 × 11,94 ≈ 23,89 Gbit/s → passt knapp; drei solche Monitore (zusammen ≈ 35,83 Gbit/s) gehen nur mit DSC-Kompression oder geringerer Auflösung bzw. Bildrate.</div>
        <h5>Paneltypen</h5>
        <table><thead><tr><th>Panel</th><th>Stärken</th><th>Schwächen</th><th>Einsatz</th></tr></thead><tbody>
          <tr><td>TN</td><td>sehr schnell, günstig</td><td>blickwinkelabhängig, schwache Farben</td><td>günstige Gaming-Monitore</td></tr>
          <tr><td>IPS</td><td>farbtreu, stabile Blickwinkel</td><td>mittlerer Kontrast, leichtes Aufhellen („IPS-Glow“)</td><td>Büro, Grafik, Foto</td></tr>
          <tr><td>VA</td><td>hoher Kontrast, tiefes Schwarz</td><td>langsamer, Farbverschiebung seitlich</td><td>Film, Büro, Curved-Monitore</td></tr>
          <tr><td>OLED</td><td>selbstleuchtende Pixel, perfektes Schwarz, sehr schnell</td><td>teuer, Einbrenngefahr bei statischen Inhalten</td><td>Multimedia, High-End</td></tr>
        </tbody></table>
        <div class="callout tipp"><strong>Tipp:</strong> Für einen Büroarbeitsplatz mit Tabellen und Texten ist ein 24–27″-IPS-Monitor mit mattem Panel, Höhenverstellung und USB-C-Dock-Funktion fast immer die beste Wahl. Statische Taskleisten und Tabellen sprechen gegen OLED.</div>
        <h5>Peripherie</h5>
        <ul>
          <li><strong>Eingabe:</strong> Tastatur, Maus, Scanner (Auflösung in dpi, automatischer Einzug ADF, Duplex), Webcam, Mikrofon, Grafiktablett, Barcode- und Kartenleser. Ein 1D-Barcode (z. B. EAN-13 auf Waren) speichert nur wenige Ziffern; ein 2D-Code wie der <strong>QR-Code</strong> fasst deutlich mehr Daten (z. B. URL, WLAN-Zugang, Inventarnummer) und bleibt dank Fehlerkorrektur auch bei Verschmutzung lesbar.</li>
          <li><strong>Ausgabe:</strong> Monitor, Drucker, Lautsprecher, Beamer.</li>
          <li><strong>Ein- und Ausgabe:</strong> Headset (für Videokonferenzen, ggf. mit Geräuschunterdrückung), Touchscreen, Multifunktionsgerät (Drucken, Scannen, Kopieren).</li>
          <li><strong>Verbindung:</strong> Dockingstation (ein Kabel zum Notebook), KVM-Switch (eine Tastatur/Maus für mehrere Rechner).</li>
        </ul>
        <table><thead><tr><th>Drucker</th><th>Vorteile</th><th>Nachteile</th></tr></thead><tbody>
          <tr><td>Laser</td><td>schnell, günstig pro Seite, wischfest</td><td>Feinstaub/Ozon, teurer in der Anschaffung, Fotos mäßig</td></tr>
          <tr><td>Tinte</td><td>gute Fotos, günstig in der Anschaffung</td><td>hohe Seitenkosten, Tinte trocknet ein</td></tr>
          <tr><td>Thermo</td><td>kein Verbrauchsmaterial außer Spezialpapier</td><td>nur Etiketten und Belege, verblasst</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel Seitenkosten:</strong> Toner 89 € für 3.000 Seiten → 89 € ÷ 3.000 ≈ 2,97 ct/Seite. Tintenpatronen 60 € für 500 Seiten → 12 ct/Seite. Bei 1.000 Seiten pro Monat über 36 Monate (36.000 Seiten): Laser ≈ <strong>1.068 €</strong>, Tinte <strong>4.320 €</strong> Verbrauchskosten.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Berechnen</em> Sie die Pixeldichte“, „<em>Prüfen</em> Sie rechnerisch, ob HDMI 1.4 für den 4K-Monitor mit 60 Hz ausreicht“, „<em>Vergleichen</em> Sie IPS- und VA-Panel“, „<em>Wählen</em> Sie anhand der Datenblätter einen Monitor aus und <em>begründen</em> Sie“, „<em>Ermitteln</em> Sie die Druckkosten über 36 Monate“.</div>
      `
    },
    {
      id: "ergonomie",
      title: "Ergonomie, Arbeitsschutz und Barrierefreiheit am Bildschirmarbeitsplatz",
      exam: ["AP1", "AP2"],
      summary: "Anforderungen der Arbeitsstättenverordnung an Bildschirmarbeitsplätze, Software-Ergonomie, elektrische Sicherheit und Prüfzeichen sowie barrierefreie Hardware und Einstellungen.",
      html: `
        <h5>Rechtliche Grundlagen</h5>
        <ul>
          <li><strong>Arbeitsschutzgesetz (ArbSchG):</strong> Der Arbeitgeber muss Gefährdungen beurteilen (Gefährdungsbeurteilung, auch psychische Belastungen) und Maßnahmen treffen.</li>
          <li><strong>Arbeitsstättenverordnung (ArbStättV), Anhang Nr. 6:</strong> Anforderungen an Bildschirmarbeitsplätze. Die frühere Bildschirmarbeitsverordnung ist seit 2016 darin aufgegangen.</li>
          <li><strong>Technische Regeln für Arbeitsstätten (ASR)</strong>, z. B. ASR A3.4 Beleuchtung, und die <strong>DGUV Information 215-410</strong> (Leitfaden Bildschirm- und Büroarbeitsplätze) konkretisieren die Vorgaben.</li>
          <li><strong>Arbeitsmedizinische Vorsorge (ArbMedVV):</strong> Beschäftigten ist eine Untersuchung der Augen anzubieten; eine nötige spezielle Bildschirmarbeitsbrille zahlt der Arbeitgeber.</li>
        </ul>
        <h5>Der ergonomische Bildschirmarbeitsplatz</h5>
        <table><thead><tr><th>Element</th><th>Anforderung</th></tr></thead><tbody>
          <tr><td>Bildschirm</td><td>flimmerfrei, scharf, Helligkeit und Kontrast einstellbar, frei dreh- und neigbar, entspiegelt; oberste Textzeile auf oder leicht unter Augenhöhe; Sehabstand etwa 50–70 cm (großer Monitor → mehr Abstand)</td></tr>
          <tr><td>Aufstellung</td><td>Blickrichtung <strong>parallel zur Fensterfront</strong> – weder mit dem Rücken noch mit dem Gesicht zum Fenster (Spiegelungen, Blendung)</td></tr>
          <tr><td>Tastatur, Maus</td><td>vom Bildschirm getrennt, neigbar, reflexionsarm, Platz vor der Tastatur zum Auflegen der Hände</td></tr>
          <tr><td>Arbeitstisch</td><td>ausreichend groß (Richtwert 160 × 80 cm), reflexionsarm, Beinfreiheit; höhenverstellbare Sitz-Steh-Tische fördern Bewegung</td></tr>
          <tr><td>Stuhl</td><td>höhenverstellbar, Rückenlehne mit Lordosenstütze, 5 Rollen; Oberschenkel etwa waagerecht, Füße flach auf dem Boden (sonst Fußstütze), Unterarme locker auf Tischhöhe</td></tr>
          <tr><td>Beleuchtung</td><td>Büro mindestens <strong>500 lx</strong> im Arbeitsbereich, blendfrei, möglichst Tageslicht; Leuchten nicht im Spiegelbereich des Monitors</td></tr>
          <tr><td>Umgebung</td><td>angenehmes Raumklima (Büro mind. 20 °C), wenig Lärm – laute Drucker in einen Nebenraum</td></tr>
          <tr><td>Organisation</td><td>Bildschirmarbeit durch andere Tätigkeiten oder Kurzpausen unterbrechen</td></tr>
        </tbody></table>
        <p><strong>Software-Ergonomie</strong> (DIN EN ISO 9241-110, Fassung 2020 mit sieben Interaktionsprinzipien): Aufgabenangemessenheit, Selbstbeschreibungsfähigkeit, Erwartungskonformität, Erlernbarkeit, Steuerbarkeit, Robustheit gegen Benutzungsfehler und Benutzerbindung (die Software motiviert zur weiteren Nutzung). Ältere Unterlagen nennen noch die Grundsätze der Fassung von 2006, u. a. „Fehlertoleranz“, „Lernförderlichkeit“ und „Individualisierbarkeit“.</p>
        <div class="callout beispiel"><strong>Beispiele:</strong> Ein Formular zeigt fehlende Pflichtfelder sofort rot an und erklärt, was fehlt → Robustheit gegen Benutzungsfehler und Selbstbeschreibungsfähigkeit. <kbd>Strg</kbd> + <kbd>C</kbd> kopiert wie in allen anderen Programmen → Erwartungskonformität. Ein Vorgang lässt sich jederzeit abbrechen oder rückgängig machen → Steuerbarkeit.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> „Monitor direkt vor dem Fenster“ und „Monitor mit dem Rücken zum Fenster“ sind <em>beide</em> falsch: Im ersten Fall blendet das Gegenlicht, im zweiten spiegelt sich das Fenster im Bildschirm. Richtig ist die seitliche Aufstellung mit Blick parallel zum Fenster.</div>
        <h5>Elektrische Sicherheit und Kennzeichnungen</h5>
        <table><thead><tr><th>Zeichen / Begriff</th><th>Bedeutung</th></tr></thead><tbody>
          <tr><td>CE</td><td>Der <strong>Hersteller erklärt selbst</strong>, dass das Produkt die EU-Richtlinien erfüllt – Voraussetzung für den Verkauf in der EU, kein Prüfsiegel</td></tr>
          <tr><td>GS</td><td>„Geprüfte Sicherheit“ – freiwillig, von einer unabhängigen Prüfstelle (z. B. TÜV, VDE) vergeben</td></tr>
          <tr><td>VDE-Zeichen</td><td>freiwilliges Prüfzeichen des VDE-Prüfinstituts für die elektrische Sicherheit, z. B. bei Steckdosenleisten und Kabeln</td></tr>
          <tr><td>Schutzklasse I</td><td>Gehäuse über Schutzleiter geerdet (Schukostecker), z. B. PC-Netzteil</td></tr>
          <tr><td>Schutzklasse II</td><td>doppelte/verstärkte Isolierung (Symbol: zwei ineinanderliegende Quadrate), z. B. Notebook-Netzteil</td></tr>
          <tr><td>Schutzklasse III</td><td>Betrieb mit Schutzkleinspannung (SELV), z. B. USB-Geräte</td></tr>
          <tr><td>IP-Schutzart</td><td>IP54: 1. Ziffer = Schutz gegen Fremdkörper/Staub, 2. Ziffer = Schutz gegen Wasser</td></tr>
          <tr><td>DGUV Vorschrift 3</td><td>Ortsveränderliche elektrische Geräte (PC, Monitor, Verlängerung) werden regelmäßig von einer Elektrofachkraft geprüft; die Frist legt der Betrieb per Gefährdungsbeurteilung fest</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>Beim Schrauben am PC:</strong> Netzstecker ziehen, <strong>ESD-Schutz</strong> (Erdungsarmband, ESD-Matte, Bauteile in Antistatikbeuteln) gegen elektrostatische Entladung, Netzteil nie öffnen (Kondensatoren können noch geladen sein).</div>
        <h5>Barrierefreiheit</h5>
        <p>Ein barrierefreier Arbeitsplatz ermöglicht Menschen mit Behinderung die Arbeit ohne fremde Hilfe. Rechtlicher Rahmen: Behindertengleichstellungsgesetz und <strong>BITV 2.0</strong> (Websites und Apps öffentlicher Stellen) sowie seit 28.06.2025 das <strong>Barrierefreiheitsstärkungsgesetz (BFSG)</strong> für viele Produkte und Dienstleistungen, z. B. Computer, Smartphones und Online-Shops. Technische Grundlage sind die <strong>WCAG</strong> mit vier Prinzipien: wahrnehmbar, bedienbar, verständlich, robust.</p>
        <table><thead><tr><th>Einschränkung</th><th>Hardware</th><th>Einstellungen / Software</th></tr></thead><tbody>
          <tr><td>Sehbehinderung</td><td>großer Monitor, Monitorarm für geringen Abstand, Großschrifttastatur</td><td>Bildschirmlupe (<kbd>Win</kbd> + <kbd>+</kbd>), Skalierung, Kontrastdesigns, Browser-Zoom (<kbd>Strg</kbd> + <kbd>+</kbd>)</td></tr>
          <tr><td>Blindheit</td><td>Braillezeile, Lautsprecher/Headset</td><td>Screenreader (z. B. Windows-Sprachausgabe, NVDA), Websites mit Alternativtexten</td></tr>
          <tr><td>Motorische Einschränkung</td><td>Einhand- oder Großtastentastatur, Trackball, Kopf-/Augensteuerung, unterfahrbarer höhenverstellbarer Tisch</td><td>Einrastfunktion, Spracheingabe, Bildschirmtastatur</td></tr>
          <tr><td>Hörbehinderung</td><td>Headset mit Verstärkung, optische Signale</td><td>Live-Untertitel, Chat statt Telefon</td></tr>
        </tbody></table>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Ein Foto oder eine Beschreibung eines Arbeitsplatzes ist gegeben: „<em>Nennen</em> Sie vier ergonomische Mängel und je eine Verbesserung“. Oder: „Eine Mitarbeiterin ist stark sehbehindert. <em>Schlagen</em> Sie zwei Hardware-Erweiterungen und zwei Systemeinstellungen <em>vor</em>.“ Auch „<em>Unterscheiden</em> Sie CE- und GS-Zeichen“ ist beliebt.</div>
      `
    },
    {
      id: "zahlensysteme",
      title: "Zahlensysteme, Bits und Textcodierung",
      exam: ["AP1"],
      summary: "Dezimal-, Dual-, Oktal- und Hexadezimalsystem sicher umrechnen, Bits für eine Anzahl von Zuständen bestimmen und ASCII, Unicode und UTF-8 erklären.",
      html: `
        <h5>Stellenwertsysteme</h5>
        <p>In einem Stellenwertsystem hängt der Wert einer Ziffer von ihrer Position ab. Jede Stelle ist eine Potenz der <strong>Basis</strong>: Die Dezimalzahl 305 bedeutet 3 × 10² + 0 × 10¹ + 5 × 10⁰.</p>
        <table><thead><tr><th>System</th><th>Basis</th><th>Ziffern</th><th>Kennzeichnung</th></tr></thead><tbody>
          <tr><td>Dezimal</td><td>10</td><td>0–9</td><td>305 bzw. 305₁₀</td></tr>
          <tr><td>Dual (binär)</td><td>2</td><td>0, 1</td><td>1011₂ oder 0b1011</td></tr>
          <tr><td>Oktal</td><td>8</td><td>0–7</td><td>265₈ oder 0o265</td></tr>
          <tr><td>Hexadezimal</td><td>16</td><td>0–9, A–F (A = 10 … F = 15)</td><td>B5₁₆, 0xB5 oder B5h</td></tr>
        </tbody></table>
        <pre class="ascii">dez  0  1  2  3  4  5  6  7  8  9  10  11  12  13  14  15
hex  0  1  2  3  4  5  6  7  8  9   A   B   C   D   E   F
dual 0000 0001 0010 0011 0100 0101 0110 0111
     1000 1001 1010 1011 1100 1101 1110 1111</pre>
        <h5>Dezimal → andere Basis: Divisionsrestverfahren</h5>
        <div class="callout beispiel"><strong>Beispiel:</strong> 181₁₀ ins Dualsystem<br>
          181 ÷ 2 = 90 Rest 1 · 90 ÷ 2 = 45 Rest 0 · 45 ÷ 2 = 22 Rest 1 · 22 ÷ 2 = 11 Rest 0 · 11 ÷ 2 = 5 Rest 1 · 5 ÷ 2 = 2 Rest 1 · 2 ÷ 2 = 1 Rest 0 · 1 ÷ 2 = 0 Rest 1<br>
          Reste <strong>von unten nach oben</strong> lesen: 181₁₀ = <strong>1011 0101₂</strong><br>
          Hexadezimal: 181 ÷ 16 = 11 Rest 5 · 11 ÷ 16 = 0 Rest 11 (B) → <strong>B5₁₆</strong></div>
        <h5>Andere Basis → dezimal: Stellenwerte addieren</h5>
        <div class="callout beispiel"><strong>Beispiel:</strong> 1011 0101₂ = 128 + 32 + 16 + 4 + 1 = <strong>181</strong><br>
          3F7₁₆ = 3 × 16² + 15 × 16¹ + 7 × 16⁰ = 768 + 240 + 7 = <strong>1015</strong></div>
        <h5>Dual ↔ Hex und Dual ↔ Oktal: Gruppen bilden</h5>
        <p>Eine Hex-Ziffer entspricht genau <strong>4 Bit</strong> (Nibble), eine Oktalziffer genau <strong>3 Bit</strong>. Gruppiere von rechts und fülle links mit Nullen auf.</p>
        <div class="callout beispiel">1101 1110₂ → D | E → <strong>DE₁₆</strong> (= 222)<br>
          1011 0101₂ → 010 | 110 | 101 → 2 | 6 | 5 → <strong>265₈</strong></div>
        <div class="callout tipp"><strong>Tipp:</strong> Lerne die Zweierpotenzen auswendig: 2⁰ = 1, 2⁴ = 16, 2⁸ = 256, 2¹⁰ = 1024, 2¹⁶ = 65.536, 2²⁴ = 16.777.216, 2³² ≈ 4,3 Mrd. Der Taschenrechner kann oft auch umrechnen (Modus BASE bzw. DEC/BIN/HEX) – aber der Rechenweg bringt Punkte.</div>
        <pre class="ascii">Stellenwerte eines Bytes:
Bit       7    6    5    4    3    2    1    0
Wert    128   64   32   16    8    4    2    1
Beispiel  1    0    1    1    0    1    0    1   → 128 + 32 + 16 + 4 + 1 = 181</pre>
        <h5>Zahlensysteme in der IT-Praxis</h5>
        <table><thead><tr><th>Anwendung</th><th>Beispiel</th><th>Erklärung</th></tr></thead><tbody>
          <tr><td>Farbwerte (Web, Grafik)</td><td><code>#FF8800</code></td><td>je 2 Hex-Ziffern = 1 Byte für Rot, Grün, Blau → R 255, G 136, B 0 (Orange)</td></tr>
          <tr><td>MAC-Adresse</td><td><code>00:1A:2B:3C:4D:5E</code></td><td>48 Bit = 6 Byte = 12 Hex-Ziffern; die ersten 24 Bit kennzeichnen den Hersteller (OUI)</td></tr>
          <tr><td>IPv6-Adresse</td><td><code>2001:db8::1</code></td><td>128 Bit = 32 Hex-Ziffern in 8 Blöcken zu je 16 Bit</td></tr>
          <tr><td>Linux-Rechte (oktal)</td><td><code>chmod 754 datei</code></td><td>jede Oktalziffer = 3 Bit rwx: 7 = 111 = rwx (Besitzer), 5 = 101 = r-x (Gruppe), 4 = 100 = r-- (Andere)</td></tr>
          <tr><td>Speicheradressen, Fehlercodes</td><td><code>0x0000007B</code></td><td>Hex-Schreibweise ist kürzer als dual und lässt sich direkt in Bit zerlegen</td></tr>
        </tbody></table>
        <h5>Bits und Zustände</h5>
        <div class="callout formel">Mit n Bit lassen sich 2ⁿ Zustände darstellen. &nbsp;Benötigte Bits für N Zustände: kleinstes n mit 2ⁿ ≥ N.</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> Ein Fahrradverleih in Büsum möchte 11 Radtypen eindeutig codieren. 2³ = 8 reicht nicht, 2⁴ = 16 reicht → <strong>4 Bit</strong>. Es bleiben 16 − 11 = <strong>5</strong> freie Codes, bevor ein fünftes Bit nötig wird. Ein Byte (8 Bit) hat 2⁸ = 256 Werte (0 bis 255).</div>
        <h5>Textcodierung</h5>
        <table><thead><tr><th>Codierung</th><th>Größe pro Zeichen</th><th>Umfang / Besonderheit</th></tr></thead><tbody>
          <tr><td>ASCII</td><td>7 Bit (meist in 1 Byte gespeichert)</td><td>128 Zeichen: Steuerzeichen, Ziffern, englische Buchstaben. „A“ = 65 = 0x41, „a“ = 97 = 0x61, „0“ = 48 = 0x30, Leerzeichen = 0x20</td></tr>
          <tr><td>ISO 8859-1 / -15, Windows-1252 (Codepages)</td><td>8 Bit</td><td>256 Zeichen inkl. Umlauten; dasselbe Byte bedeutet je Codepage etwas anderes</td></tr>
          <tr><td>Unicode</td><td>–</td><td>ein Zeichensatz für alle Schriften (weit über 150.000 Zeichen), jedes Zeichen hat einen Codepoint, z. B. U+00E4 = ä</td></tr>
          <tr><td>UTF-8</td><td>1–4 Byte</td><td>ASCII-kompatibel, Standard im Web; ä = C3 A4 (2 Byte), € = E2 82 AC (3 Byte), Emoji 4 Byte</td></tr>
          <tr><td>UTF-16 / UTF-32</td><td>2 oder 4 Byte / immer 4 Byte</td><td>UTF-16 intern in Windows und Java</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel:</strong> Hexfolge <code>49 54 2D 50 72 6F</code> nach ASCII: 0x49 = I, 0x54 = T, 0x2D = -, 0x50 = P, 0x72 = r, 0x6F = o → „IT-Pro“.<br>
          Speicherbedarf von „Größe“: ISO 8859-1 = 5 Byte · UTF-8 = 7 Byte (ö und ß je 2 Byte) · UTF-16 = 10 Byte.</div>
        <div class="callout achtung"><strong>Achtung:</strong> Wird UTF-8-Text mit der falschen Codepage gelesen, entsteht „Zeichensalat“: Aus „Käse“ wird „KÃ¤se“, weil die zwei UTF-8-Bytes von „ä“ als zwei einzelne Latin-1-Zeichen angezeigt werden.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Rechnen</em> Sie 0xC0 ins Dezimalsystem um“ (192), „<em>Ermitteln</em> Sie, wie viele Bit für 300 Artikelgruppen nötig sind“ (9 Bit), „<em>Erklären</em> Sie, warum UTF-8 für eine mehrsprachige Website besser geeignet ist als ASCII“. Zahlensysteme stecken oft auch in Farbwerten (#FF8800) oder MAC-Adressen.</div>
      `
    },
    {
      id: "datenmengen",
      title: "Datenmengen, Speicherbedarf und Übertragungsdauer",
      exam: ["AP1", "AP2"],
      summary: "SI- und IEC-Präfixe sicher unterscheiden, Speicherbedarf von Text, Bild, Audio und Video berechnen, Übertragungsdauern mit und ohne Overhead ermitteln sowie Raster-/Vektorgrafik und Dateiformate einordnen.",
      html: `
        <h5>SI-Präfixe (dezimal) und IEC-Präfixe (binär)</h5>
        <table><thead><tr><th>dezimal (SI)</th><th>Wert</th><th>binär (IEC)</th><th>Wert</th><th>Abweichung</th></tr></thead><tbody>
          <tr><td>1 kB (Kilobyte)</td><td>10³ = 1.000 Byte</td><td>1 KiB (Kibibyte)</td><td>2¹⁰ = 1.024 Byte</td><td>2,4 %</td></tr>
          <tr><td>1 MB</td><td>10⁶ Byte</td><td>1 MiB</td><td>2²⁰ = 1.048.576 Byte</td><td>≈ 4,9 %</td></tr>
          <tr><td>1 GB</td><td>10⁹ Byte</td><td>1 GiB</td><td>2³⁰ = 1.073.741.824 Byte</td><td>≈ 7,4 %</td></tr>
          <tr><td>1 TB</td><td>10¹² Byte</td><td>1 TiB</td><td>2⁴⁰ Byte</td><td>≈ 10 %</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>Regel des IHK-Prüfungskatalogs (ZPA):</strong> <strong>Datenmengen</strong> gibst du mit <strong>Binärpräfixen</strong> an (KiB, MiB, GiB, TiB) – Datenmengen mit Dezimalpräfix gelten als falsch. <strong>Physikalische Größen</strong> wie Datenrate (Mbit/s), Leistung oder Strom stehen mit <strong>Dezimalpräfixen</strong>. Gibt die Aufgabe selbst eine Einheit vor (z. B. „2 TB“ auf dem Etikett), übernimmst du diese Angabe und rechnest sauber um. <strong>1 Byte = 8 Bit</strong>; kleines b = Bit, großes B = Byte.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Festplattenhersteller beschriften dezimal (TB), Windows rechnet binär, schreibt aber „GB“. Ältere Lehrbücher und Unterrichtstexte setzen oft 1 kB = 1024 Byte. In der AP1 zählt die saubere Unterscheidung: Ergebnisse von Speicherberechnungen in KiB/MiB/GiB/TiB, Datenraten dezimal.</div>
        <h5>Formeln für den Speicherbedarf (unkomprimiert)</h5>
        <div class="callout formel">Text: Anzahl Zeichen × Byte pro Zeichen<br>
          Rastergrafik: Breite (px) × Höhe (px) × Farbtiefe (Bit) ÷ 8 = Byte<br>
          Audio (PCM): Abtastrate (Hz) × Abtasttiefe (Bit) × Kanäle × Dauer (s) ÷ 8 = Byte<br>
          Video unkomprimiert: Breite × Höhe × Farbtiefe × Bilder pro Sekunde × Dauer ÷ 8<br>
          Video/Audio komprimiert: Bitrate (bit/s) × Dauer (s) ÷ 8 = Byte<br>
          Übertragungsdauer: t = Datenmenge (Bit) ÷ Datenrate (Bit/s)</div>
        <h5>Durchgerechnete Beispiele</h5>
        <div class="callout beispiel"><strong>Bild:</strong> Full-HD-Screenshot, 24 Bit Farbtiefe<br>
          1920 × 1080 × 24 Bit ÷ 8 = 1920 × 1080 × 3 Byte = 6.220.800 Byte<br>
          = 6.220.800 ÷ 1.048.576 ≈ <strong>5,93 MiB</strong> (zum Vergleich dezimal ≈ 6,22 MB)</div>
        <div class="callout beispiel"><strong>Symbole:</strong> 500 Icons mit je 64 × 64 Pixel und 32 Bit Farbtiefe<br>
          500 × 64 × 64 × 4 Byte = 8.192.000 Byte ÷ 1024 = <strong>8.000 KiB</strong> ÷ 1024 ≈ <strong>7,81 MiB</strong></div>
        <div class="callout beispiel"><strong>Audio:</strong> 3 Minuten in CD-Qualität (44,1 kHz, 16 Bit, Stereo)<br>
          44.100 × 16 × 2 = 1.411.200 bit/s → × 180 s = 254.016.000 Bit ÷ 8 = 31.752.000 Byte ≈ <strong>30,28 MiB</strong></div>
        <div class="callout beispiel"><strong>Video:</strong> 90-minütiger Film mit 8 Mbit/s<br>
          8.000.000 bit/s × 5.400 s = 43,2 × 10⁹ Bit ÷ 8 = 5,4 × 10⁹ Byte ÷ 1024³ ≈ <strong>5,03 GiB</strong> (dezimal 5,4 GB)<br>
          Zum Vergleich unkomprimiert (1920 × 1080, 24 Bit, 25 Bilder/s): 155.520.000 Byte pro Sekunde ≈ 148,3 MiB/s – deshalb wird Video immer komprimiert.</div>
        <div class="callout beispiel"><strong>Übertragung:</strong> Ein 4-GiB-Backup soll über eine 100-Mbit/s-Leitung hochgeladen werden.<br>
          4 × 1.073.741.824 Byte × 8 = 34.359.738.368 Bit<br>
          t = 34.359.738.368 ÷ 100.000.000 ≈ 343,6 s ≈ <strong>5 min 44 s</strong><br>
          Mit 10 % Protokoll-Overhead stehen nur 90 Mbit/s Nutzdatenrate zur Verfügung: t ≈ 381,8 s ≈ 6 min 22 s</div>
        <div class="callout beispiel"><strong>Speicherplanung Videoüberwachung:</strong> 3 Kameras schreiben je 1,5 MiB/s, Aufbewahrung 24 h.<br>
          3 × 1,5 MiB/s × 86.400 s = 388.800 MiB ÷ 1024 ≈ <strong>379,7 GiB</strong></div>
        <div class="callout beispiel"><strong>Speicherkosten in Paketen:</strong> Ein Archiv braucht 12 GiB Cloud-Speicher. Der Anbieter verkauft nur 5-GiB-Pakete zu je 18 € pro Jahr.<br>
          12 GiB ÷ 5 GiB = 2,4 → es werden <strong>3 Pakete</strong> benötigt (immer auf ganze Pakete aufrunden) → 3 × 18 € = <strong>54 € pro Jahr</strong>.<br>
          Lies bei solchen Aufgaben genau, ob die Datenmenge jedes Jahr gleich bleibt oder wächst – und rechne nur das, was im Aufgabentext steht.</div>
        <h5>Kompression</h5>
        <table><thead><tr><th>Art</th><th>Prinzip</th><th>Formate</th></tr></thead><tbody>
          <tr><td>verlustfrei</td><td>Redundanz wird entfernt, Original exakt wiederherstellbar</td><td>ZIP, PNG, FLAC</td></tr>
          <tr><td>verlustbehaftet</td><td>für Menschen kaum wahrnehmbare Details werden weggelassen</td><td>JPEG, MP3, AAC, H.264, H.265, AV1</td></tr>
        </tbody></table>
        <div class="callout formel">Kompressionsrate: komprimierte Größe = unkomprimierte Größe ÷ Kompressionsfaktor (z. B. 10 : 1 → ein Zehntel)</div>
        <h5>Rastergrafik, Vektorgrafik und Dateiformate</h5>
        <div class="grid-2">
          <div class="callout merke"><strong>Rastergrafik (Pixelgrafik)</strong><br>Bild aus einzelnen Bildpunkten mit fester Auflösung – ideal für Fotos und Screenshots. Beim Vergrößern entstehen sichtbare Treppchen; die Dateigröße hängt von Pixelzahl und Farbtiefe ab. Formate: BMP, PNG, JPEG, GIF, TIFF, WebP.</div>
          <div class="callout merke"><strong>Vektorgrafik</strong><br>Bild aus mathematisch beschriebenen Objekten (Linien, Kurven, Flächen) – ideal für Logos, Pläne, Diagramme und Schriften. Verlustfrei skalierbar; die Dateigröße hängt von der Zahl der Objekte ab, nicht von der Ausgabegröße. Formate: SVG, EPS, (auch in PDF).</div>
        </div>
        <table><thead><tr><th>Format</th><th>Art</th><th>typischer Einsatz</th></tr></thead><tbody>
          <tr><td>TXT, CSV</td><td>reiner Text (CSV = Werte mit Trennzeichen)</td><td>Notizen, Konfigurationen, Datenaustausch mit Tabellen und Datenbanken</td></tr>
          <tr><td>DOCX, XLSX, PPTX / ODT, ODS</td><td>Office-Formate (gepackte XML-Dateien)</td><td>Textverarbeitung, Tabellen, Präsentationen</td></tr>
          <tr><td>PDF</td><td>seitenorientiertes Dokument; PDF/A für die Langzeitarchivierung</td><td>Rechnungen, Handbücher, Dokumentation zum Versenden</td></tr>
          <tr><td>PNG / JPEG / SVG</td><td>Raster verlustfrei / Raster verlustbehaftet / Vektor</td><td>Screenshots und Grafiken / Fotos / Logos und Symbole</td></tr>
          <tr><td>MP3, AAC, FLAC / MP4 (H.264, H.265)</td><td>Audio verlustbehaftet bzw. verlustfrei / Video-Container</td><td>Musik, Podcasts / Videos, Schulungsvideos</td></tr>
          <tr><td>ZIP, 7Z</td><td>Archiv, verlustfrei komprimiert</td><td>mehrere Dateien bündeln und versenden</td></tr>
        </tbody></table>
        <div class="callout tipp"><strong>Rechentipp:</strong> Schreibe zuerst alle Größen mit Einheit hin, rechne dann in Bit oder Byte durch und teile erst am Ende durch 1000er- oder 1024er-Potenzen. Bei Zeiten in „min und s“ umrechnen: 343,6 s = 5 × 60 s + 43,6 s.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Berechnen</em> Sie den Speicherbedarf eines Fotos/Scans in MiB“, „<em>Ermitteln</em> Sie die Dauer des Uploads“, „<em>Berechnen</em> Sie den Speicherbedarf der Videoüberwachung für 72 Stunden in TiB“, „<em>Nennen</em> Sie ein geeignetes Dateiformat für ein Firmenlogo und begründen Sie“ (SVG, verlustfrei skalierbar). Rechenweg mit Einheiten angeben – für den Weg gibt es Teilpunkte, auch wenn sich ein Rundungsfehler einschleicht.</div>
      `
    },
    {
      id: "energie-green-it",
      title: "Energieeffizienz, Stromkosten und Green IT",
      exam: ["AP1", "AP2"],
      summary: "Leistung, Energie und Wirkungsgrad berechnen, Stromkosten und Amortisation ermitteln, Energielabels einordnen und Altgeräte nach ElektroG entsorgen.",
      html: `
        <h5>Elektrische Grundgrößen</h5>
        <table><thead><tr><th>Größe</th><th>Formelzeichen</th><th>Einheit</th></tr></thead><tbody>
          <tr><td>Spannung</td><td>U</td><td>Volt (V)</td></tr>
          <tr><td>Stromstärke</td><td>I</td><td>Ampere (A)</td></tr>
          <tr><td>Leistung</td><td>P</td><td>Watt (W), 1 kW = 1000 W</td></tr>
          <tr><td>Energie (Arbeit)</td><td>W bzw. E</td><td>Wattstunden (Wh), 1 kWh = 1000 Wh</td></tr>
          <tr><td>Wirkungsgrad</td><td>η</td><td>ohne Einheit (0 bis 1 bzw. %)</td></tr>
        </tbody></table>
        <div class="callout formel">P = U × I &nbsp;&nbsp;|&nbsp;&nbsp; W = P × t &nbsp;&nbsp;|&nbsp;&nbsp; Kosten = W (kWh) × Preis (€/kWh) &nbsp;&nbsp;|&nbsp;&nbsp; η = P_ab ÷ P_zu<br>
          Amortisationsdauer = Mehrkosten der Anschaffung ÷ Einsparung pro Jahr</div>
        <div class="callout beispiel"><strong>Beispiel 1 – Stromkosten:</strong> Ein PC nimmt im Mittel 120 W auf und läuft 8 h an 220 Arbeitstagen. Strompreis 0,35 €/kWh.<br>
          W = 120 W × 8 h × 220 = 211.200 Wh = 211,2 kWh<br>
          Kosten = 211,2 kWh × 0,35 €/kWh = <strong>73,92 € pro Jahr</strong></div>
        <div class="callout beispiel"><strong>Beispiel 2 – Standby:</strong> Monitor und Dock ziehen ausgeschaltet zusammen 3 W. Standby-Zeit: 16 h an 220 Arbeitstagen + 24 h an 145 freien Tagen = 3.520 h + 3.480 h = 7.000 h.<br>
          W = 3 W × 7.000 h = 21 kWh → 21 × 0,35 € = <strong>7,35 € pro Jahr und Arbeitsplatz</strong>. Bei 40 Arbeitsplätzen sind das 294 € – eine schaltbare Steckdosenleiste lohnt sich.</div>
        <div class="callout beispiel"><strong>Beispiel 3 – Wirkungsgrad und Amortisation:</strong> Ein PC braucht 250 W Gleichstromleistung (DC). Netzteil A (Bronze) hat bei dieser Last η = 85 %, Netzteil B (Gold) η = 90 %; B kostet 30 € mehr.<br>
          P_zu(A) = 250 W ÷ 0,85 ≈ 294,1 W · P_zu(B) = 250 W ÷ 0,90 ≈ 277,8 W · Differenz ≈ 16,34 W<br>
          Einsparung: 16,34 W × 8 h × 220 ≈ 28,76 kWh → × 0,35 € ≈ 10,07 € pro Jahr<br>
          Amortisation: 30 € ÷ 10,07 €/Jahr ≈ <strong>3 Jahre</strong></div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> W und Wh nicht verwechseln (Leistung ≠ Energie). Watt immer erst in kW bzw. Wh in kWh umrechnen, bevor du mit dem Preis pro kWh multiplizierst. Und: Das Datenblatt nennt oft die <em>maximale</em> Leistung – für Stromkosten zählt der typische Verbrauch bzw. die Angabe der Aufgabe (z. B. „50 % Auslastung“).</div>
        <h5>Green IT</h5>
        <p>Green IT bedeutet, IT über den <strong>gesamten Lebenszyklus</strong> – Herstellung, Nutzung, Entsorgung – ressourcenschonend zu betreiben. Bei Notebooks und Smartphones entsteht ein großer Teil der CO₂-Emissionen schon bei der Herstellung. Deshalb ist eine <strong>lange Nutzungsdauer</strong> oft wirksamer als ein etwas sparsameres Neugerät.</p>
        <ul>
          <li>energieeffiziente, passend dimensionierte Geräte wählen (Labels, 80 PLUS, Thin Clients)</li>
          <li>Energiesparpläne: Monitor aus nach wenigen Minuten, Standby/Ruhezustand, Geräte nachts wirklich ausschalten</li>
          <li>reparier- und aufrüstbare Geräte, Ersatzteile, generalüberholte (refurbished) Hardware, Zweitnutzung</li>
          <li>Duplexdruck, papierarme Prozesse, Ökostrom, Server virtualisieren</li>
        </ul>
        <table><thead><tr><th>Label</th><th>Aussage</th></tr></thead><tbody>
          <tr><td>EU-Energielabel (A–G)</td><td>Pflicht u. a. für Monitore und Fernseher; zeigt Effizienzklasse und Verbrauch, QR-Code zur EU-Produktdatenbank (EPREL). Seit 20.06.2025 auch für Smartphones und Tablets – dort zusätzlich mit Akku-Lebensdauer, Robustheit und Reparierbarkeitsklasse</td></tr>
          <tr><td>Energy Star</td><td>US-Umweltbehörde EPA, Effizienz im Betrieb und Standby</td></tr>
          <tr><td>Blauer Engel</td><td>deutsches Umweltzeichen: sparsam, schadstoffarm, langlebig, recyclinggerecht</td></tr>
          <tr><td>TCO Certified</td><td>Nachhaltigkeit über den Lebenszyklus inkl. sozialer Kriterien in der Produktion und Ergonomie</td></tr>
          <tr><td>EPEAT</td><td>Umweltbewertung über den Lebenszyklus (Stufen Bronze, Silber, Gold)</td></tr>
          <tr><td>80 PLUS</td><td>Wirkungsgrad von Netzteilen</td></tr>
        </tbody></table>
        <h5>Entsorgung nach ElektroG</h5>
        <ul>
          <li>Das <strong>Elektro- und Elektronikgerätegesetz</strong> setzt die EU-WEEE-Richtlinie um. Symbol: <strong>durchgestrichene Mülltonne</strong> – Altgeräte gehören nicht in den Hausmüll.</li>
          <li>Kostenlose Rückgabe bei kommunalen Sammelstellen und bei Händlern mit mindestens 400 m² Verkaufsfläche für Elektrogeräte (online: Lager- und Versandfläche) sowie großen Lebensmittelmärkten: <strong>1:1</strong> beim Kauf eines gleichartigen Neugeräts, <strong>0:1</strong> für Kleingeräte (keine Kante länger als 25 cm, bis zu 3 Stück je Geräteart) ohne Kauf.</li>
          <li>Hersteller müssen sich bei der Stiftung EAR registrieren und die Rücknahme finanzieren.</li>
          <li>Besitzer müssen entnehmbare Batterien/Akkus vorher entfernen und sind für das <strong>Löschen personenbezogener Daten</strong> selbst verantwortlich → Datenträger sicher löschen oder nach DIN 66399 vernichten lassen und protokollieren.</li>
          <li><strong>Batterien und Akkus</strong> (auch aus USV-Anlagen) gehören in eigene Sammelsysteme; Grundlage sind die EU-Batterieverordnung und in Deutschland das Batterierecht-Durchführungsgesetz, das 2025 das frühere Batteriegesetz (BattG) abgelöst hat. Lithium-Akkus wegen Brandgefahr mit abgeklebten Polen abgeben.</li>
          <li><strong>Toner und Tintenpatronen</strong> über Rücknahmesysteme der Hersteller oder Wiederbefüller zurückgeben.</li>
        </ul>
        <div class="callout merke"><strong>Abfallhierarchie (Kreislaufwirtschaftsgesetz, § 6 KrWG):</strong> 1. Vermeidung → 2. Vorbereitung zur Wiederverwendung (z. B. Gerät aufbereiten und weitergeben) → 3. Recycling → 4. sonstige, z. B. energetische Verwertung → 5. Beseitigung. Für die IT heißt das: erst länger nutzen, reparieren, gebraucht weitergeben – dann recyceln. Die EU-Richtlinie zum „Recht auf Reparatur“ (2024) stärkt zusätzlich den Anspruch von Verbrauchern auf Reparatur bestimmter Produkte, z. B. Smartphones.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Berechnen</em> Sie die jährlichen Stromkosten für 25 Arbeitsplätze“, „<em>Ermitteln</em> Sie, nach wie vielen Jahren sich das effizientere Gerät amortisiert“, „<em>Nennen</em> Sie drei Green-IT-Maßnahmen“, „<em>Beschreiben</em> Sie, wie Altgeräte datenschutzkonform entsorgt werden“.</div>
      `
    },
    {
      id: "angebotsvergleich",
      title: "Angebotsvergleich, Nutzwertanalyse und Angebotskalkulation",
      exam: ["AP1", "AP2"],
      summary: "Angebote quantitativ mit der Bezugskalkulation und qualitativ mit der Nutzwertanalyse vergleichen, mit Zuschlagssätzen ein Kundenangebot kalkulieren sowie fixe/variable Kosten, Break-even und Nachkalkulation anwenden.",
      html: `
        <p>Nach der Anforderungsanalyse holst du bei mehreren Lieferanten <strong>Angebote</strong> ein (Anfrage = unverbindlich). Bezugsquellen findest du in der Lieferantendatei, auf Hersteller- und Händlerportalen, in Katalogen oder auf Messen. Verglichen wird <strong>quantitativ</strong> (Preis) und <strong>qualitativ</strong> (Lieferzeit, Service, Zuverlässigkeit, Umweltaspekte).</p>
        <h5>Quantitativer Vergleich: Bezugskalkulation</h5>
        <pre class="ascii">  Listeneinkaufspreis
− Liefererrabatt (in % vom Listenpreis)
= Zieleinkaufspreis
− Liefererskonto (in % vom Zieleinkaufspreis, nur bei Zahlung innerhalb der Skontofrist)
= Bareinkaufspreis
+ Bezugskosten (Fracht, Verpackung, Versicherung)
= Bezugspreis (Einstandspreis)</pre>
        <div class="callout beispiel"><strong>Beispiel:</strong> Zwei Angebote für einen Workstation-PC<br>
          <strong>Angebot A:</strong> 1.250,00 € − 12 % Rabatt (150,00 €) = 1.100,00 € − 2 % Skonto (22,00 €) = 1.078,00 € + 15,00 € Versand = <strong>1.093,00 €</strong><br>
          <strong>Angebot B:</strong> 1.180,00 € − 5 % Rabatt (59,00 €) = 1.121,00 € − 3 % Skonto (33,63 €) = 1.087,37 € + 0,00 € (frei Haus) = <strong>1.087,37 €</strong><br>
          → B ist um 5,63 € günstiger, obwohl A den höheren Rabatt bietet.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Skonto wird vom <em>Ziel</em>einkaufspreis (nach Rabatt) berechnet, nicht vom Listenpreis. Und: Den günstigsten Preis zu finden, reicht nicht – eine lange Lieferzeit oder fehlender Vor-Ort-Service kann das billigste Angebot ungeeignet machen.</div>
        <h5>Qualitativer Vergleich: Nutzwertanalyse (NWA)</h5>
        <ol>
          <li><strong>Kriterien</strong> festlegen (aus dem Lastenheft), ggf. K.-o.-Kriterien vorab (z. B. „mind. 16 GB RAM“).</li>
          <li><strong>Gewichtung</strong> vergeben – Summe = <strong>100 %</strong>.</li>
          <li><strong>Punkte</strong> je Angebot und Kriterium vergeben (z. B. 1–10), nach einer festen Regel.</li>
          <li><strong>Teilnutzwert</strong> = Gewicht × Punkte; <strong>Nutzwert</strong> = Summe der Teilnutzwerte.</li>
          <li>Höchster Nutzwert = beste Alternative; Ergebnis kritisch prüfen und begründen.</li>
        </ol>
        <table><thead><tr><th>Kriterium</th><th>Gewicht</th><th>A Punkte</th><th>A gew.</th><th>B Punkte</th><th>B gew.</th><th>C Punkte</th><th>C gew.</th></tr></thead><tbody>
          <tr><td>Preis</td><td>30 %</td><td>8</td><td>2,40</td><td>6</td><td>1,80</td><td>9</td><td>2,70</td></tr>
          <tr><td>Leistung</td><td>25 %</td><td>6</td><td>1,50</td><td>9</td><td>2,25</td><td>5</td><td>1,25</td></tr>
          <tr><td>Akkulaufzeit</td><td>20 %</td><td>7</td><td>1,40</td><td>6</td><td>1,20</td><td>8</td><td>1,60</td></tr>
          <tr><td>Service/Garantie</td><td>15 %</td><td>5</td><td>0,75</td><td>8</td><td>1,20</td><td>6</td><td>0,90</td></tr>
          <tr><td>Gewicht</td><td>10 %</td><td>9</td><td>0,90</td><td>6</td><td>0,60</td><td>7</td><td>0,70</td></tr>
          <tr><td><strong>Nutzwert</strong></td><td>100 %</td><td></td><td><strong>6,95</strong></td><td></td><td><strong>7,05</strong></td><td></td><td><strong>7,15</strong></td></tr>
        </tbody></table>
        <p>→ Notebook <strong>C</strong> hat den höchsten Nutzwert (7,15) und wird empfohlen.</p>
        <div class="callout tipp"><strong>Punkte aus Datenblättern ableiten:</strong> Beim Preis bekommt das günstigste Angebot die Höchstpunktzahl, die anderen anteilig: Punkte = 10 × günstigster Preis ÷ eigener Preis. Bei 1.099 €, 1.180 € und 1.290 € ergibt das 10,00 / 9,31 / 8,52 Punkte. Bei Leistungswerten („je mehr, desto besser“) umgekehrt: 10 × eigener Wert ÷ bester Wert.</div>
        <h5>Angebotskalkulation für den Kunden</h5>
        <pre class="ascii">  Bezugspreis
+ Handlungskosten (Zuschlag in % vom Bezugspreis)
= Selbstkosten
+ Gewinn (Zuschlag in % von den Selbstkosten)
= Barverkaufspreis
+ Kundenskonto (im Hundert: ÷ (1 − Skontosatz))
= Zielverkaufspreis
+ Kundenrabatt (im Hundert: ÷ (1 − Rabattsatz))
= Listenverkaufspreis (netto)
+ 19 % Umsatzsteuer
= Listenverkaufspreis (brutto)</pre>
        <div class="callout beispiel"><strong>Beispiel:</strong> Bezugspreis 800,00 €, Handlungskosten 25 %, Gewinn 10 %, Kundenskonto 2 %, Kundenrabatt 10 %<br>
          800,00 + 200,00 = 1.000,00 € Selbstkosten + 100,00 € Gewinn = 1.100,00 € Barverkaufspreis<br>
          1.100,00 ÷ 0,98 = 1.122,45 € Zielverkaufspreis (Skonto 22,45 €)<br>
          1.122,45 ÷ 0,90 = 1.247,17 € Listenverkaufspreis netto (Rabatt 124,72 €)<br>
          + 19 % USt (236,96 €) = <strong>1.484,13 € brutto</strong></div>
        <div class="callout merke"><strong>Merke:</strong> Skonto und Rabatt, die der Kunde später abzieht, werden „im Hundert“ aufgeschlagen (durch 0,98 bzw. 0,90 teilen). Wer einfach 2 % bzw. 10 % aufschlägt, bekommt nach dem Abzug durch den Kunden weniger als den geplanten Barverkaufspreis.</div>
        <h5>Fixe und variable Kosten, Break-even, Nachkalkulation</h5>
        <p><strong>Fixe Kosten</strong> fallen unabhängig von der Nutzung an (Anschaffung, Grundgebühr), <strong>variable Kosten</strong> steigen mit der Menge (Seiten, Stunden, kWh). Aus beiden entsteht eine Kostenfunktion K(x) = K_fix + k_var × x. Wo sich zwei Kostenfunktionen schneiden, liegt die <strong>kritische Menge</strong> (Break-even).</p>
        <div class="callout beispiel"><strong>Beispiel:</strong> Drucker kaufen: 600 € + 1,5 ct/Seite · Pay-per-Use-Vertrag: 3,5 ct/Seite ohne Anschaffung.<br>
          600 + 0,015 × x = 0,035 × x → 600 = 0,02 × x → x = <strong>30.000 Seiten</strong>. Werden in der Nutzungsdauer mehr Seiten gedruckt, ist der Kauf günstiger.<br>
          <strong>Preis-Leistungs-Verhältnis:</strong> SSD 1 TB (≈ 931,3 GiB) für 79 € → ≈ 8,5 ct/GiB; 2 TB (≈ 1.862,6 GiB) für 139 € → ≈ 7,5 ct/GiB.<br>
          <strong>Nachkalkulation (Soll-Ist-Vergleich):</strong> geplant 6 h Einrichtung, tatsächlich 7,5 h → Abweichung +1,5 h = +25 % → Ursache analysieren (z. B. fehlende Treiber) und künftig einplanen.</div>
        <p><strong>Vertriebsformen:</strong> direkter Vertrieb (eigener Außendienst, Onlineshop des Herstellers) und indirekter Vertrieb (Fachhändler, Systemhaus, Distributor) – der indirekte Weg bietet oft Beratung und Service vor Ort, ist aber meist teurer.</p>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Ermitteln</em> Sie mit einer Nutzwertanalyse das beste Angebot“ (Tabelle ausfüllen, Punkte teils selbst aus Datenblättern vergeben), „<em>Berechnen</em> Sie den Bezugspreis“, „<em>Nennen</em> Sie zwei qualitative Kriterien der Lieferantenauswahl“, „<em>Kalkulieren</em> Sie den Angebotspreis“. Die NWA ist einer der größten Punktebringer der AP1.</div>
      `
    },
    {
      id: "beschaffung",
      title: "Beschaffung: Kauf, Miete, Leasing und Kaufvertrag",
      exam: ["AP1", "AP2"],
      summary: "Finanzierungsformen im Vergleich, Zustandekommen des Kaufvertrags, Wareneingang und Rechnungsprüfung, Vertragsarten, Vertragsstörungen und Rechte des Käufers sowie Gewährleistung und Garantie.",
      html: `
        <h5>Kauf, Miete, Leasing, Pay-per-Use</h5>
        <table><thead><tr><th>Form</th><th>Vorteile</th><th>Nachteile</th></tr></thead><tbody>
          <tr><td>Kauf</td><td>Eigentum, über die Laufzeit meist am günstigsten, frei in der Nutzung</td><td>hohe Kapitalbindung, Risiko veralteter Technik, Wartung und Entsorgung selbst organisieren</td></tr>
          <tr><td>Leasing</td><td>schont die Liquidität, planbare Raten (Betriebsausgaben), regelmäßiger Technologiewechsel, oft mit Service</td><td>insgesamt teurer, feste Vertragslaufzeit, kein Eigentum</td></tr>
          <tr><td>Miete</td><td>sehr flexibel, kurzfristig kündbar, Instandhaltung beim Vermieter</td><td>auf lange Sicht am teuersten</td></tr>
          <tr><td>Pay-per-Use / DaaS</td><td>Kosten nach tatsächlicher Nutzung (z. B. pro Seite, pro Nutzer und Monat)</td><td>Abhängigkeit vom Anbieter, laufende Kosten</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel:</strong> Notebook, geplante Nutzung 36 Monate<br>
          Kauf: 1.400 € (≈ 38,89 € pro Monat) · Leasing: 36 × 42 € = <strong>1.512 €</strong> · Miete: 36 × 55 € = <strong>1.980 €</strong><br>
          Leasing kostet 112 € mehr als der Kauf, bindet aber kein Kapital und enthält hier den Vor-Ort-Service. Für einen Aushilfsarbeitsplatz über 4 Monate wäre die Miete (220 €) die beste Wahl.</div>
        <div class="callout merke"><strong>TCO (Total Cost of Ownership):</strong> Vergleiche nicht nur den Kaufpreis, sondern alle Kosten über die Nutzungsdauer: Anschaffung + Einrichtung + Strom + Lizenzen + Wartung/Support + Schulung + Entsorgung.</div>
        <h5>Der Kaufvertrag</h5>
        <p>Ein Kaufvertrag entsteht durch <strong>zwei übereinstimmende Willenserklärungen</strong>: Antrag und Annahme. Typischer Ablauf: Anfrage (unverbindlich) → <strong>Angebot</strong> (Antrag, verbindlich) → <strong>Bestellung</strong> (Annahme) → Auftragsbestätigung. Bestellt der Kunde ohne vorheriges Angebot, ist die Bestellung der Antrag und die Auftragsbestätigung oder Lieferung die Annahme.</p>
        <ul>
          <li>Freizeichnungsklauseln („freibleibend“, „solange der Vorrat reicht“) schränken die Bindung an ein Angebot ein.</li>
          <li><strong>Pflichten (§ 433 BGB):</strong> Verkäufer übergibt die Sache frei von Mängeln und verschafft das Eigentum; Käufer zahlt den Kaufpreis und nimmt die Sache ab.</li>
          <li>Arten: Verbrauchsgüterkauf (Unternehmer → Verbraucher), zweiseitiger Handelskauf (zwischen Kaufleuten), bürgerlicher Kauf (zwischen Privatleuten).</li>
        </ul>
        <h5>Wareneingang</h5>
        <p>Beim Eintreffen der Ware: Anzahl der Pakete und Verpackung in Gegenwart des Zustellers prüfen (Transportschäden auf dem Lieferschein vermerken lassen), Lieferschein mit Bestellung abgleichen, Ware auspacken, Artikel, Menge und Seriennummern prüfen, Funktionstest, Mängel mit Fotos dokumentieren.</p>
        <p><strong>Eingangsrechnung prüfen:</strong> sachlich (Artikel und Mengen wie bestellt und geliefert?), rechnerisch (Einzelpreise, Rabatt, Nettosumme, Umsatzsteuer auf den <em>rabattierten</em> Nettobetrag, Bruttosumme, Skonto) und formal (Pflichtangaben nach § 14 UStG, z. B. Namen und Anschriften, Steuernummer oder USt-IdNr., Rechnungsnummer, Datum, Art und Menge der Leistung, Steuersatz und Steuerbetrag). Seit dem 01.01.2025 müssen Unternehmen in Deutschland <strong>E-Rechnungen</strong> in einem strukturierten Format (z. B. XRechnung, ZUGFeRD) empfangen und verarbeiten können; die Pflicht zum Ausstellen folgt schrittweise 2027/2028. Ein einfaches PDF per E-Mail ist keine E-Rechnung in diesem Sinne.</p>
        <p><strong>Weitere Vertragsarten:</strong> Mietvertrag, Leasingvertrag, Lizenzvertrag (Nutzungsrechte an Software), <strong>Werkvertrag</strong> (geschuldet ist ein Erfolg, z. B. ein fertig eingerichteter Arbeitsplatz – mit Abnahme), <strong>Dienstvertrag</strong> (geschuldet ist die Tätigkeit, z. B. Support-Stunden), Servicevertrag mit SLA (Reaktionszeit, Verfügbarkeit).</p>
        <h5>Vertragsstörungen</h5>
        <table><thead><tr><th>Störung</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td>Mangelhafte Lieferung – Schlechtleistung (Qualitätsmangel)</td><td>Monitor mit Pixelfehlern, Lüfter defekt</td></tr>
          <tr><td>Falschlieferung (Artikelmangel)</td><td>16 statt 32 GB RAM, falsches Modell</td></tr>
          <tr><td>Minderlieferung (Quantitätsmangel)</td><td>8 statt 10 Dockingstationen</td></tr>
          <tr><td>Montagemangel / fehlerhafte Anleitung</td><td>Monitorarm falsch montiert, Anleitung unbrauchbar</td></tr>
          <tr><td>Lieferungsverzug</td><td>fällige Lieferung bleibt trotz Mahnung aus (bei kalendermäßig bestimmtem Termin keine Mahnung nötig)</td></tr>
          <tr><td>Zahlungsverzug / Annahmeverzug</td><td>Käufer zahlt nicht bzw. nimmt ordnungsgemäß angebotene Ware nicht an</td></tr>
        </tbody></table>
        <p><strong>Mängel nach Erkennbarkeit:</strong> offen (sofort sichtbar), versteckt (zeigt sich erst später), arglistig verschwiegen (Verkäufer kannte ihn).</p>
        <div class="callout merke"><strong>Rechte bei mangelhafter Lieferung:</strong> Vorrangig <strong>Nacherfüllung</strong> – der Käufer wählt Nachbesserung (Reparatur) oder Ersatzlieferung. Scheitert sie oder verstreicht eine angemessene Frist, nachrangig: <strong>Rücktritt</strong> (nicht bei geringfügigem Mangel), <strong>Minderung</strong> des Preises, <strong>Schadensersatz</strong> (bei Verschulden).</div>
        <div class="callout achtung"><strong>Rügefrist:</strong> Beim zweiseitigen Handelskauf (§ 377 HGB) muss die Ware <strong>unverzüglich</strong> geprüft und ein Mangel unverzüglich gerügt werden – sonst gilt die Ware als genehmigt. Versteckte Mängel sind unverzüglich nach Entdeckung zu rügen. Eine Mängelrüge enthält: Bestell- und Lieferscheinnummer, genaue Beschreibung des Mangels, gewünschtes Recht, Frist.</div>
        <h5>Gewährleistung und Garantie</h5>
        <table><thead><tr><th>Merkmal</th><th>Gewährleistung (Mängelhaftung)</th><th>Garantie</th></tr></thead><tbody>
          <tr><td>Grundlage</td><td>gesetzlich (BGB)</td><td>freiwillige Zusage von Hersteller oder Händler</td></tr>
          <tr><td>Gegenüber</td><td>Verkäufer</td><td>Garantiegeber (oft Hersteller)</td></tr>
          <tr><td>Dauer</td><td>2 Jahre ab Übergabe (neue Sachen)</td><td>laut Garantiebedingungen, z. B. 3 Jahre Vor-Ort-Service</td></tr>
          <tr><td>Umfang</td><td>Mangel muss bei Übergabe vorgelegen haben; beim Verbrauchsgüterkauf wird das im ersten Jahr vermutet</td><td>frei festgelegt, z. B. auch Verschleißteile oder Austausch am nächsten Werktag</td></tr>
        </tbody></table>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Vergleichen</em> Sie Kauf und Leasing anhand von zwei Kriterien“, „<em>Berechnen</em> Sie die Gesamtkosten über 36 Monate“, „Statt 10 wurden 8 Geräte geliefert – <em>benennen</em> Sie die Art des Mangels und die Rechte des Käufers“, „<em>Unterscheiden</em> Sie Gewährleistung und Garantie“.</div>
      `
    },
    {
      id: "betriebssysteme",
      title: "Betriebssysteme, Software-Auswahl, Lizenzen und Übergabe",
      exam: ["AP1", "AP2"],
      summary: "Aufgaben von Betriebssystemen und Installation mit UEFI, Rollout, Softwarearten, Cloud-Modelle (SaaS, DaaS) und KI-Software, Lizenzmodelle und Urheberrecht sowie Test, Einweisung und Übergabeprotokoll.",
      html: `
        <h5>Aufgaben eines Betriebssystems</h5>
        <p>Das Betriebssystem verwaltet die <strong>Hardware</strong> (über Treiber), <strong>Prozesse</strong> und <strong>Arbeitsspeicher</strong>, das <strong>Dateisystem</strong>, <strong>Benutzer und Rechte</strong> und stellt Programmen Schnittstellen sowie dem Menschen eine Oberfläche bereit. Verbreitet: Windows 11, macOS, Linux (z. B. Ubuntu, Debian), mobil Android und iOS.</p>
        <div class="callout merke"><strong>Windows 11 – Mindestanforderungen:</strong> 64-Bit-CPU mit mind. 2 Kernen und 1 GHz (auf der Kompatibilitätsliste), 4 GB RAM, 64 GB Speicher, <strong>UEFI mit Secure Boot</strong>, <strong>TPM 2.0</strong>, DirectX-12-fähige Grafik. Für Unternehmen: <strong>Pro oder höher</strong> (Domänenbeitritt, Gruppenrichtlinien, BitLocker). Der reguläre Support für Windows 10 endete am 14.10.2025; Sicherheitsupdates gibt es seitdem nur noch über das kostenpflichtige bzw. an Bedingungen geknüpfte ESU-Programm (Extended Security Updates) – für Privatkunden bis Oktober 2026, für Unternehmen gegen jährlich steigende Gebühren höchstens bis Oktober 2028. Ein System ohne Sicherheitsupdates ist ein erhebliches Risiko und sollte migriert werden.</div>
        <h5>Installation Schritt für Schritt</h5>
        <ol>
          <li>Hardware und Kompatibilität prüfen, Daten sichern, Lizenz bereithalten.</li>
          <li>UEFI einstellen: Bootreihenfolge (USB-Stick), Secure Boot und TPM aktiv, ggf. Virtualisierung.</li>
          <li>Datenträger partitionieren (GPT) und formatieren; Windows legt EFI-Systempartition (FAT32), MSR, Systempartition (NTFS) und Wiederherstellungspartition an.</li>
          <li>Betriebssystem installieren, Region/Tastatur wählen, <strong>Standardbenutzerkonto</strong> für die tägliche Arbeit (Admin nur zur Verwaltung).</li>
          <li>Treiber (Chipsatz, Grafik, Netzwerk), Updates, Aktivierung.</li>
          <li>Konfiguration: Netzwerk, Domänenbeitritt, Drucker, Datenschutz- und Energieeinstellungen, Verschlüsselung (BitLocker), Virenschutz und Firewall.</li>
          <li>Anwendungssoftware installieren, testen, dokumentieren, übergeben.</li>
        </ol>
        <p><strong>Anwendungssoftware an den Kunden anpassen:</strong> Standardeinstellungen und Vorlagen (z. B. Briefvorlage mit Firmenlogo), Add-ins, Standardprogramme (PDF, Browser), Autostart, Netzlaufwerke und Drucker, Energie- und Datenschutzeinstellungen – und alles dokumentieren, damit der Arbeitsplatz reproduzierbar ist.</p>
        <p><strong>Rollout vieler Arbeitsplätze:</strong> Bei vielen gleichen Geräten verteilt man ein vorbereitetes <strong>Image</strong> oder nutzt automatisierte Bereitstellung (z. B. Windows Autopilot, Softwareverteilung). Geplant werden Reihenfolge und Zeitfenster (außerhalb der Hauptarbeitszeit), eine <strong>Pilotgruppe</strong>, die zuerst umgestellt wird, ein <strong>Rückfallplan</strong> und die rechtzeitige Information der Nutzer.</p>
        <pre><code>msinfo32                # Systeminformationen inkl. BIOS-Modus (UEFI) und Secure Boot
Get-Tpm                 # PowerShell (Admin): TPM vorhanden und bereit?
Confirm-SecureBootUEFI  # PowerShell (Admin): True = Secure Boot aktiv</code></pre>
        <h5>Software auswählen: lokal, Cloud, KI</h5>
        <p><strong>Softwarearten:</strong> Systemsoftware (Betriebssystem, Treiber) · Standardsoftware (Office, Browser, Datenbanksystem) · Branchensoftware (ERP, CRM, SCM, Praxis- oder Kanzleisoftware) · Individualsoftware (für einen Kunden entwickelt: passgenau, aber teuer und mit langer Einführung). Kriterien: Funktionsumfang, Anpassbarkeit, Wartbarkeit, Schnittstellen, Kompatibilität, Support, Kosten.</p>
        <ul>
          <li><strong>SaaS</strong> (Software as a Service): Die Anwendung läuft beim Anbieter und wird im Browser genutzt, Abrechnung meist pro Nutzer und Monat.</li>
          <li><strong>DaaS</strong> (Desktop as a Service): kompletter virtueller Desktop aus der Cloud; <strong>VDI</strong>: virtuelle Desktops im eigenen Rechenzentrum. Als Endgerät genügt oft ein Thin Client.</li>
          <li><strong>Cloud-Vorteile:</strong> keine lokale Installation, ortsunabhängig, skalierbar, Updates durch den Anbieter. <strong>Nachteile:</strong> Internetabhängigkeit, laufende Kosten, Anbieterabhängigkeit, Datenschutz (Serverstandort, Auftragsverarbeitungsvertrag nach Art. 28 DSGVO).</li>
          <li><strong>KI-Software</strong> (Schreib- und Übersetzungsassistenten, Chatbots, Bilderkennung) läuft lokal (z. B. auf der NPU – Daten bleiben im Haus) oder in der Cloud (leistungsstärker, Daten verlassen das Unternehmen). Prüfen: Zweck, Kosten, Datenschutz (keine vertraulichen oder personenbezogenen Daten in öffentliche Dienste, EU-Serverstandort, Nutzung für Training abschaltbar) und Qualität – KI-Ergebnisse können falsch sein und müssen kontrolliert werden.</li>
        </ul>
        <h5>Lizenzmodelle</h5>
        <table><thead><tr><th>Modell</th><th>Merkmale</th></tr></thead><tbody>
          <tr><td>Vollversion (Retail/Box)</td><td>einzeln gekauft, meist auf ein anderes Gerät übertragbar</td></tr>
          <tr><td>OEM</td><td>mit neuer Hardware ausgeliefert, günstig, an das Gerät gebunden, Support über den Gerätehersteller</td></tr>
          <tr><td>Volumenlizenz</td><td>für Unternehmen ab einer Mindestmenge, zentrale Verwaltung und Aktivierung, Rabatte</td></tr>
          <tr><td>Abonnement (Subscription)</td><td>monatliche/jährliche Gebühr pro Nutzer oder Gerät, immer aktuelle Version, endet mit dem Abo</td></tr>
          <tr><td>Pay-per-Use</td><td>Abrechnung nach tatsächlicher Nutzung</td></tr>
          <tr><td>Open Source</td><td>Quellcode offen, darf untersucht, verändert und weitergegeben werden; <strong>GPL</strong> (Copyleft: Änderungen wieder unter GPL), MIT/Apache (freizügig)</td></tr>
          <tr><td>Freeware / Shareware</td><td>kostenlos, aber Code nicht offen (oft nur privat) / Testversion mit Einschränkungen</td></tr>
        </tbody></table>
        <p>Die Nutzungsbedingungen stehen in der <strong>EULA</strong> (End User License Agreement). Software ist nach dem <strong>Urheberrechtsgesetz</strong> (§§ 69a ff. UrhG) geschützt – automatisch mit der Entstehung, ohne Anmeldung oder ©-Vermerk. Der Käufer erwirbt nur ein <strong>Nutzungsrecht</strong>, das Urheberrecht bleibt beim Urheber bzw. Hersteller. Eine Sicherungskopie ist erlaubt, weitere Vervielfältigung und Weitergabe nur im Rahmen der Lizenz.</p>
        <p><strong>Inhalte eines Lizenzvertrags:</strong> Nutzungsumfang (privat/gewerblich), Anzahl der Nutzer oder Geräte, Laufzeit, Übertragbarkeit, Updates und Support, Haftung. <strong>Folgen eines Lizenzverstoßes:</strong> Unterlassung, Schadensersatz, Nachlizenzierung (oft teurer als der reguläre Kauf), ggf. Strafverfahren und Imageschaden. Lizenzen deshalb in einer Lizenzverwaltung (Software-Asset-Management) dokumentieren und regelmäßig mit den Installationen abgleichen.</p>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Open Source heißt nicht automatisch „ohne Bedingungen“ – die GPL verpflichtet dazu, veränderten Code bei Weitergabe offenzulegen. Und Freeware ist nicht Open Source: kostenlos, aber der Quellcode bleibt geschlossen.</div>
        <h5>Test und Übergabe</h5>
        <div class="grid-2">
          <div class="callout merke"><strong>Testprotokoll:</strong> Testfall, Voraussetzung, erwartetes Ergebnis, tatsächliches Ergebnis, Status (ok/nicht ok), Datum, Tester. Beispiel: „Drucken auf Etage 2 – Testseite wird gedruckt – ok“.</div>
          <div class="callout merke"><strong>Übergabe-/Abnahmeprotokoll:</strong> Auftrag und Kunde, Datum, übergebene Geräte mit Seriennummern und Zubehör, installierte Software und Lizenzen, Testergebnisse, festgestellte Mängel und Restarbeiten, Einweisung erfolgt, Unterschriften beider Seiten.</div>
        </div>
        <p>Mit der Abnahme bestätigt der Kunde die vertragsgemäße Leistung. Danach folgen Rechnung, Nachkalkulation (Soll-Ist-Vergleich) und Lessons Learned; oft ergeben sich Folgeaufträge (Wartungsvertrag, Schulung, Erweiterung).</p>
        <p><strong>Einweisung planen:</strong> Zielgruppe (Vorkenntnisse?), Lernziele und Inhalte (z. B. Anmeldung, Dockingstation, Drucken, Datenablage, Sicherheitsregeln), Methode (Vorführen und selbst ausprobieren lassen), Dauer und Termin, Unterlagen (Kurzanleitung), Erfolgskontrolle (Nutzer führt die wichtigsten Schritte selbst aus) – die Einweisung wird im Übergabeprotokoll bestätigt.</p>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Nennen</em> Sie zwei Hardware-Voraussetzungen für Windows 11“, „<em>Unterscheiden</em> Sie OEM- und Volumenlizenz“, „<em>Begründen</em> Sie ein Dateisystem für einen USB-Stick, der mit Windows und macOS genutzt wird“ (exFAT), „<em>Nennen</em> Sie vier Inhalte eines Abnahmeprotokolls“.</div>
      `
    },
    {
      id: "dokumentation-word",
      title: "Dokumentation mit Textverarbeitung (Word)",
      exam: [],
      summary: "Aufbau einer technischen Dokumentation mit Deckblatt, automatischen Verzeichnissen, Seitenzahlen ab Seite 3, Abbildungsbeschriftungen, Zitaten, Fußnoten und Literaturverzeichnis.",
      html: `
        <p>Dokumentationen begleiten dich durch die ganze Ausbildung: Arbeitsaufträge in der Schule, Übergabedokumente für Kunden und am Ende die <strong>Projektdokumentation</strong> in Teil 2 der Abschlussprüfung. Wer die Werkzeuge der Textverarbeitung beherrscht, spart viel Zeit und liefert ein professionelles Ergebnis.</p>
        <h5>Typischer Aufbau</h5>
        <ol>
          <li><strong>Deckblatt</strong> (ohne Seitenzahl): Titel, Untertitel, Name, Klasse, Lernfeld/Fach, Schule oder Betrieb, Abgabedatum, betreuende Person</li>
          <li><strong>Inhaltsverzeichnis</strong> (automatisch erzeugt)</li>
          <li>ggf. Abbildungs-, Tabellen- und Abkürzungsverzeichnis</li>
          <li><strong>Textteil</strong>: Einleitung (Ausgangslage, Ziel) – Hauptteil – Fazit/Ausblick</li>
          <li><strong>Literatur- bzw. Quellenverzeichnis</strong></li>
          <li>Anhang (Datenblätter, Screenshots, Protokolle), ggf. Erklärung zur selbstständigen Anfertigung</li>
        </ol>
        <p><strong>Deckblatt:</strong> Über <em>Einfügen → Deckblatt</em> bietet Word fertige Vorlagen, die automatisch ohne Seitenzahl bleiben. Alternativ gestaltest du Seite 1 selbst und aktivierst in der Kopf-/Fußzeile <em>Erste Seite anders</em>.</p>
        <h5>Formatvorlagen und Inhaltsverzeichnis</h5>
        <p>Formatiere Überschriften nie „von Hand“, sondern mit den Formatvorlagen <strong>Überschrift 1, 2, 3</strong> (Reiter Start). Dann erzeugt Word über <em>Referenzen → Inhaltsverzeichnis</em> ein automatisches Verzeichnis mit Seitenzahlen, und der Navigationsbereich zeigt die Gliederung. Nach Änderungen: Rechtsklick → <em>Felder aktualisieren</em> (bzw. <kbd>F9</kbd>).</p>
        <h5>Umbrüche</h5>
        <table><thead><tr><th>Umbruch</th><th>Wirkung</th><th>Eingabe</th></tr></thead><tbody>
          <tr><td>Zeilenumbruch</td><td>neue Zeile im selben Absatz</td><td><kbd>Umschalt</kbd> + <kbd>Enter</kbd></td></tr>
          <tr><td>Absatzumbruch</td><td>neuer Absatz (Abstände der Formatvorlage)</td><td><kbd>Enter</kbd></td></tr>
          <tr><td>Seitenumbruch</td><td>Text beginnt auf neuer Seite, ohne Leerzeilen zu stapeln</td><td><kbd>Strg</kbd> + <kbd>Enter</kbd></td></tr>
          <tr><td>Abschnittsumbruch</td><td>neuer Abschnitt mit eigener Kopf-/Fußzeile, Seitenzählung oder Ausrichtung (Querformat)</td><td><em>Layout → Umbrüche → Nächste Seite</em></td></tr>
        </tbody></table>
        <div class="callout tipp"><strong>Tipp:</strong> Blende die Formatierungszeichen (¶ im Reiter Start, Tastenkürzel <kbd>Strg</kbd> + <kbd>*</kbd> – auf der deutschen Tastatur <kbd>Strg</kbd> + <kbd>Umschalt</kbd> + <kbd>+</kbd>) ein. Sie werden nicht mitgedruckt. So siehst du, wo Umbrüche, Leerzeichen und Tabstopps stehen, und findest Layoutfehler sofort.</div>
        <h5>Seitenzahlen erst ab Seite 3 (Textteil beginnt mit 1)</h5>
        <ol>
          <li>Hinter dem Inhaltsverzeichnis einen <strong>Abschnittsumbruch (Nächste Seite)</strong> einfügen.</li>
          <li>In die Fußzeile des zweiten Abschnitts wechseln und <strong>„Mit vorheriger verknüpfen“ ausschalten</strong>.</li>
          <li>Seitenzahl einfügen, dann <em>Seitenzahlen formatieren → Beginnen bei: 1</em>.</li>
          <li>In der Fußzeile des ersten Abschnitts (Deckblatt, Inhaltsverzeichnis) die Seitenzahl löschen oder römische Zahlen wählen.</li>
        </ol>
        <h5>Abbildungen und Verzeichnisse</h5>
        <p>Bilder über <em>Einfügen → Bilder</em> einsetzen, dann <em>Referenzen → Beschriftung einfügen</em> („Abbildung 1: Aufbau des Mainboards“, mit Quelle). Word nummeriert automatisch; über <em>Referenzen → Abbildungsverzeichnis einfügen</em> entsteht die Liste. Mit <em>Querverweisen</em> verweist du im Text auf „Abbildung 3“, ohne die Nummer von Hand pflegen zu müssen.</p>
        <h5>Zitieren und Quellen angeben</h5>
        <div class="grid-2">
          <div class="callout merke"><strong>Direktes Zitat:</strong> wörtlich, in Anführungszeichen, buchstabengetreu; Auslassungen mit […] kennzeichnen. Sparsam einsetzen.</div>
          <div class="callout merke"><strong>Indirektes Zitat:</strong> Inhalt in eigenen Worten wiedergegeben, ohne Anführungszeichen, Beleg mit „vgl.“.</div>
        </div>
        <p>Jede fremde Aussage wird belegt – als <strong>Fußnote</strong> (<em>Referenzen → Fußnote einfügen</em>; die hochgestellte Zahl erscheint im Text und am Seitenende) oder als Kurzbeleg im Text (Autor Jahr, Seite). Über <em>Referenzen → Zitat einfügen → Neue Quelle hinzufügen</em> verwaltet Word alle Quellen und erzeugt daraus das <strong>Literaturverzeichnis</strong> in einem einheitlichen Zitierstil.</p>
        <div class="callout beispiel"><strong>Beispiele für Quellenangaben (fiktiv):</strong><br>
          Buch: Petersen, Lena: IT-Hardware kompakt. 3. Aufl., Kiel: Förde-Verlag, 2024, S. 42.<br>
          Internet: Nordlicht IT GmbH (Hrsg.): Datenblatt Office-PC NL-500. URL: https://www.example.com/nl-500.pdf (Abruf: 23.09.2026).<br>
          Pflichtangaben: <strong>wer</strong> (Autor/Herausgeber), <strong>was</strong> (Titel), <strong>wo</strong> (Ort, Verlag bzw. URL), <strong>wann</strong> (Jahr bzw. Abrufdatum), <strong>welche Seite</strong>.</div>
        <div class="callout achtung"><strong>Achtung:</strong> Übernommene Texte, Bilder und Tabellen ohne Quellenangabe sind ein Plagiat – in der Projektdokumentation der AP2 kann das zum Nichtbestehen führen. Auch mit KI erzeugte Inhalte kennzeichnest du nach den Vorgaben der Schule bzw. IHK.</div>
        <div class="callout pruefung"><strong>So wird es geprüft:</strong> Vor allem in schulischen Leistungsnachweisen (Dokumentation abgeben, Seitenzahlen ab Seite 3, automatische Verzeichnisse, korrekte Zitate). Für die IHK-Prüfung ist Word selbst kein Thema, die Fähigkeit, sauber und nachvollziehbar zu dokumentieren, aber schon (Test-, Übergabe- und Projektdokumentation).</div>
      `
    }
  ],
  exercises: [
    {
      id: "e-bedarf-gespraech",
      topic: "kundenbedarf",
      title: "Kundengespräch vorbereiten und Anforderungen ordnen",
      level: 1,
      exam: ["AP1"],
      task: `<p>Die <strong>Nordlicht IT GmbH</strong> in Heide soll für die Tischlerei Brodersen KG in Meldorf drei Arbeitsplätze erneuern. Du bereitest das Erstgespräch vor.</p>
        <p>a) Nenne vier offene Fragen, die du dem Kunden stellst.</p>
        <p>b) Ordne die folgenden Anforderungen als funktional (F) oder nicht-funktional (NF) ein:</p>
        <ol><li>Zeichnungen im CAD-Programm erstellen</li><li>Der Rechner darf höchstens 30 dB(A) laut sein.</li><li>Aufträge aus dem Warenwirtschaftssystem drucken</li><li>Das 3D-Modell soll sich mit mindestens 30 Bildern pro Sekunde drehen lassen.</li><li>Lieferscheine per Scanner einlesen</li><li>Die Geräte müssen bis zum 15.11. einsatzbereit sein.</li></ol>
        <p>c) Erkläre, wer das Lastenheft und wer das Pflichtenheft erstellt und worin sich beide inhaltlich unterscheiden.</p>`,
      hints: ["Offene Fragen beginnen mit einem W-Wort.", "Funktional = was das System tut; nicht-funktional = wie gut, wie schnell, bis wann, unter welchen Bedingungen."],
      solution: `<p><strong>a)</strong> Mögliche Fragen (vier genügen):</p>
        <ul><li>Welche Tätigkeiten werden an den Arbeitsplätzen erledigt?</li><li>Welche Programme werden genutzt und wie groß sind die Dateien (z. B. CAD-Zeichnungen)?</li><li>Welche Peripherie (Drucker, Scanner, Plotter) muss angeschlossen werden?</li><li>Wie viel Budget steht zur Verfügung und bis wann soll alles fertig sein?</li><li>Wo stehen die Geräte (Büro oder staubige Werkstatt)?</li></ul>
        <p><strong>b)</strong></p>
        <table><thead><tr><th>Nr.</th><th>Einordnung</th><th>Begründung</th></tr></thead><tbody>
          <tr><td>1</td><td>F</td><td>beschreibt eine Funktion</td></tr>
          <tr><td>2</td><td>NF</td><td>Qualitätsmerkmal (Lautstärke)</td></tr>
          <tr><td>3</td><td>F</td><td>Funktion (Drucken)</td></tr>
          <tr><td>4</td><td>NF</td><td>Leistungsanforderung (wie schnell)</td></tr>
          <tr><td>5</td><td>F</td><td>Funktion (Scannen)</td></tr>
          <tr><td>6</td><td>NF</td><td>Rahmenbedingung (Termin)</td></tr>
        </tbody></table>
        <p><strong>c)</strong> Das <strong>Lastenheft</strong> erstellt der <strong>Auftraggeber</strong>, hier die Tischlerei. Es beschreibt, <em>was</em> sie erreichen will und <em>wofür</em>: Ausgangssituation, Ziele, Anforderungen und Rahmenbedingungen. Das <strong>Pflichtenheft</strong> erstellt der <strong>Auftragnehmer</strong>, hier die Nordlicht IT GmbH. Es beschreibt, <em>wie</em> und <em>womit</em> die Anforderungen umgesetzt werden, z. B. mit konkreten Produkten, Konfiguration, Zeitplan und Testfällen.</p>`
    },
    {
      id: "e-geraeteklassen",
      topic: "kundenbedarf",
      title: "Geräteklassen passend zum Einsatz wählen",
      level: 2,
      exam: ["AP1"],
      task: `<p>Die Wattwerk Energie GmbH in Brunsbüttel beauftragt die Nordlicht IT GmbH mit der Ausstattung folgender Arbeitsplätze:</p>
        <ol><li>Vertriebsmitarbeiter, der täglich Kunden in ganz Dithmarschen besucht und im Büro an zwei Monitoren arbeitet</li><li>Konstrukteurin, die große 3D-Modelle von Leitungsnetzen bearbeitet</li><li>Empfangstresen mit sehr wenig Platz, nur Terminverwaltung und E-Mail</li><li>Schulungsraum mit 12 Plätzen; die Desktops laufen zentral virtualisiert im Rechenzentrum</li><li>Techniker im Außeneinsatz, der Zählerstände erfasst und Fotos macht</li></ol>
        <p>a) Wähle für jeden Arbeitsplatz eine geeignete Geräteklasse und begründe deine Wahl mit einem Argument.</p>
        <p>b) Nenne zwei Vorteile von Thin Clients für den Schulungsraum aus Sicht der IT-Abteilung.</p>`,
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Arbeitsplatz</th><th>Geräteklasse</th><th>Begründung</th></tr></thead><tbody>
          <tr><td>1 Vertrieb</td><td>Notebook mit Dockingstation</td><td>mobil beim Kunden; im Büro mit einem Kabel an zwei Monitoren, Tastatur und Maus</td></tr>
          <tr><td>2 Konstruktion</td><td>Desktop-Workstation (Tower)</td><td>starke CPU, dedizierte Grafikkarte, viel RAM, gut kühl- und aufrüstbar</td></tr>
          <tr><td>3 Empfang</td><td>All-in-One-PC oder Mini-PC hinter dem Monitor</td><td>platzsparend, wenige Kabel, Leistung für Office reicht</td></tr>
          <tr><td>4 Schulung</td><td>Thin Clients</td><td>Rechenleistung liegt im Rechenzentrum, Clients zeigen nur den virtuellen Desktop an</td></tr>
          <tr><td>5 Außeneinsatz</td><td>robustes Tablet oder Smartphone</td><td>leicht, Kamera, Touch, mobile Datenverbindung</td></tr>
        </tbody></table>
        <p><strong>b)</strong> Thin Clients werden <strong>zentral verwaltet</strong>: Updates und Software werden nur einmal im Rechenzentrum eingespielt. Sie sind <strong>sparsam</strong> (oft unter 15 W), leise und langlebig. Außerdem liegen <strong>keine Daten lokal</strong>, sodass ein Diebstahl oder Defekt keinen Datenverlust bedeutet und ein Gerät in Minuten getauscht ist.</p>`
    },
    {
      id: "e-netzteil",
      topic: "gehaeuse-netzteil",
      title: "Netzteil für eine Workstation dimensionieren und bewerten",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH stellt für ein Ingenieurbüro in Itzehoe eine CAD-Workstation zusammen. Laut Datenblättern benötigen die Komponenten maximal:</p>
        <table><thead><tr><th>Komponente</th><th>Leistung</th></tr></thead><tbody>
          <tr><td>CPU</td><td>170 W</td></tr><tr><td>Grafikkarte</td><td>285 W</td></tr><tr><td>Mainboard</td><td>50 W</td></tr>
          <tr><td>4 RAM-Module</td><td>je 5 W</td></tr><tr><td>2 NVMe-SSDs</td><td>je 8 W</td></tr><tr><td>1 HDD</td><td>9 W</td></tr>
          <tr><td>6 Lüfter</td><td>je 2,5 W</td></tr><tr><td>USB-Geräte</td><td>15 W</td></tr>
        </tbody></table>
        <p>a) Berechne die maximale Gesamtleistung der Komponenten.</p>
        <p>b) Die Firma plant 20 % Reserve ein. Wähle aus den Nennleistungen 650 W, 750 W, 850 W und 1000 W das passende Netzteil.</p>
        <p>c) Im typischen Betrieb braucht die Workstation 350 W (DC). Ein Gold-Netzteil erreicht dabei η = 92 %, ein Bronze-Netzteil η = 88 %. Berechne jeweils die aufgenommene Leistung aus dem Netz.</p>
        <p>d) Die Workstation läuft 9 h an 230 Tagen im Jahr, der Strompreis beträgt 0,32 €/kWh. Berechne die jährlichen Stromkosten für beide Netzteile.</p>
        <p>e) Das Gold-Netzteil kostet 25 € mehr. Nach wie vielen Jahren hat sich der Aufpreis amortisiert?</p>`,
      hints: ["Leistung aus dem Netz = Ausgangsleistung ÷ Wirkungsgrad", "Betriebsstunden pro Jahr zuerst ausrechnen."],
      solution: `<p><strong>a)</strong> 170 + 285 + 50 + 4 × 5 + 2 × 8 + 9 + 6 × 2,5 + 15 = 170 + 285 + 50 + 20 + 16 + 9 + 15 + 15 = <strong>580 W</strong></p>
        <p><strong>b)</strong> 580 W × 1,2 = <strong>696 W</strong> → Das kleinste ausreichende Netzteil ist das mit <strong>750 W</strong>. 650 W wäre zu knapp; 850 W oder 1000 W wären überdimensioniert (teurer, im Teillastbetrieb weniger effizient).</p>
        <p><strong>c)</strong> Gold: P_zu = 350 W ÷ 0,92 ≈ <strong>380,43 W</strong> · Bronze: P_zu = 350 W ÷ 0,88 ≈ <strong>397,73 W</strong> (Differenz ≈ 17,29 W)</p>
        <p><strong>d)</strong> Betriebsstunden: 9 h × 230 = 2.070 h<br>
          Gold: 380,43 W × 2.070 h ≈ 787.500 Wh = 787,5 kWh → 787,5 × 0,32 € = <strong>252,00 €</strong><br>
          Bronze: 397,73 W × 2.070 h ≈ 823.300 Wh = 823,3 kWh → 823,3 × 0,32 € ≈ <strong>263,45 €</strong></p>
        <p><strong>e)</strong> Einsparung: 263,45 € − 252,00 € = 11,45 € pro Jahr → Amortisation: 25 € ÷ 11,45 €/Jahr ≈ <strong>2,2 Jahre</strong>. Bei einer üblichen Nutzungsdauer von 4–5 Jahren lohnt sich das Gold-Netzteil; zusätzlich entsteht weniger Abwärme.</p>`
    },
    {
      id: "e-kompatibilitaet",
      topic: "mainboard-cpu",
      title: "Datenblatt lesen und Kompatibilität prüfen",
      level: 2,
      exam: ["AP1"],
      task: `<p>Ein Kunde möchte sich einen Büro-PC selbst zusammenstellen und legt dir folgende Auszüge vor:</p>
        <pre><code>Mainboard: Socket AM5 | Chipset B650 | 4 x DDR5 DIMM, max. 192 GB, dual channel
           1 x PCIe 4.0 x16 | 2 x M.2 (PCIe 4.0 x4) | 4 x SATA 6Gb/s | Form factor: Micro-ATX
CPU:       8 cores / 16 threads | base clock 3.8 GHz | boost clock up to 5.4 GHz
           L3 cache 32 MB | default TDP 65 W | socket AM5 | integrated graphics</code></pre>
        <p>Weitere geplante Teile: 2 × 16 GB DDR4-3200, eine NVMe-SSD mit PCIe 5.0 x4, ein ATX-Midi-Tower, ein Kühler für 65 W.</p>
        <p>a) Prüfe die Kompatibilität aller Teile und begründe.</p>
        <p>b) Erläutere die Angaben „8 cores / 16 threads“, „L3 cache 32 MB“ und „default TDP 65 W“ auf Deutsch.</p>
        <p>c) Ein älteres System hat einen 36 Bit breiten Adressbus. Berechne, wie viel Speicher damit adressiert werden kann.</p>`,
      solution: `<p><strong>a)</strong></p>
        <ul><li><strong>CPU ↔ Mainboard:</strong> beide Sockel AM5 → passt (BIOS-Version sicherheitshalber prüfen).</li>
          <li><strong>RAM:</strong> <strong>passt nicht!</strong> Das Board unterstützt nur DDR5, DDR4-Module sind mechanisch anders kodiert. → 2 × 16 GB DDR5 bestellen (Dual Channel).</li>
          <li><strong>SSD:</strong> Eine PCIe-5.0-SSD läuft im PCIe-4.0-Slot (abwärtskompatibel), aber nur mit PCIe-4.0-Geschwindigkeit (theoretisch ≈ 7,9 GB/s). Eine günstigere PCIe-4.0-SSD reicht.</li>
          <li><strong>Gehäuse:</strong> Micro-ATX passt in ein ATX-Gehäuse → passt.</li>
          <li><strong>Kühler:</strong> ist für 65 W TDP ausgelegt → passt, sofern er AM5 unterstützt.</li></ul>
        <p><strong>b)</strong> Die CPU hat <strong>8 physische Kerne</strong>; dank SMT kann jeder Kern zwei Befehlsströme verarbeiten, also <strong>16 Threads</strong> gleichzeitig. Der <strong>L3-Cache</strong> ist ein von allen Kernen gemeinsam genutzter, sehr schneller Zwischenspeicher mit 32 MB; er verringert Zugriffe auf den langsameren RAM. Die <strong>TDP von 65 W</strong> gibt an, für welche Wärmeabgabe Kühler und Stromversorgung im Normalbetrieb ausgelegt sein müssen.</p>
        <p><strong>c)</strong> 2³⁶ Byte = 68.719.476.736 Byte = 2³⁶ ÷ 2³⁰ GiB = <strong>64 GiB</strong></p>`
    },
    {
      id: "e-ram-ssd",
      topic: "ram-speicher",
      title: "Arbeitsspeicher und SSD beurteilen",
      level: 2,
      exam: ["AP1"],
      task: `<p>Ein Kunde der Nordlicht IT GmbH beschwert sich, dass sein neuer PC mit integrierter Grafik „bei Videokonferenzen ruckelt“. Verbaut ist <strong>1 × 16 GB DDR5-6400</strong>.</p>
        <p>a) Berechne die theoretische Speicherbandbreite im aktuellen Zustand und nach Umbau auf 2 × 8 GB DDR5-6400 im Dual-Channel-Betrieb.</p>
        <p>b) Erkläre, warum der Umbau gerade bei integrierter Grafik spürbar hilft.</p>
        <p>c) Ein Kollege meint, DDR4-3600 CL18 habe eine kürzere Latenz als DDR5-6400 CL32. Prüfe die Aussage rechnerisch.</p>
        <p>d) Die SSD hat laut Datenblatt eine Haltbarkeit von 600 TBW. Der Kunde schreibt täglich etwa 80 GB. Wie viele Jahre reicht die angegebene Schreibmenge rechnerisch?</p>
        <p>e) Nenne einen Einsatzzweck, für den du ECC-Arbeitsspeicher empfiehlst, und begründe.</p>`,
      hints: ["Bandbreite je Kanal = MT/s × 8 Byte", "Latenz in ns = CL × 2000 ÷ MT/s"],
      solution: `<p><strong>a)</strong> Ein Modul (Single Channel): 6400 MT/s × 8 Byte = 51.200 MB/s = <strong>51,2 GB/s</strong><br>
          Dual Channel: 2 × 51,2 GB/s = <strong>102,4 GB/s</strong></p>
        <p><strong>b)</strong> Die integrierte Grafik hat keinen eigenen Grafikspeicher, sondern nutzt den Arbeitsspeicher mit. Jedes Bild muss durch den Speicherbus. Verdoppelt sich die Bandbreite, bekommt die GPU die Daten schneller, und Videobilder werden flüssiger berechnet.</p>
        <p><strong>c)</strong> DDR4-3600 CL18: 18 × 2000 ÷ 3600 = <strong>10 ns</strong> · DDR5-6400 CL32: 32 × 2000 ÷ 6400 = <strong>10 ns</strong>. Die tatsächliche Latenz ist gleich, die Aussage ist also falsch. Die höhere CL-Zahl wird durch den höheren Takt ausgeglichen.</p>
        <p><strong>d)</strong> 600 TBW = 600.000 GB → 600.000 GB ÷ 80 GB/Tag = 7.500 Tage → 7.500 ÷ 365 ≈ <strong>20,5 Jahre</strong>. Die Haltbarkeit ist für diesen Kunden also kein Problem.</p>
        <p><strong>e)</strong> Zum Beispiel für einen <strong>Server</strong> oder eine Workstation für Berechnungen: ECC erkennt und korrigiert Einzelbitfehler im Speicher. So werden Abstürze und unbemerkt verfälschte Daten verhindert, die bei Dauerbetrieb und großen Datenmengen sonst eher auftreten.</p>`
    },
    {
      id: "e-schnittstellen",
      topic: "schnittstellen",
      title: "Anschlüsse zuordnen, Übertragungszeit und USB-Leistung berechnen",
      level: 2,
      exam: ["AP1"],
      task: `<p>Die Nordlicht IT GmbH richtet für eine Physiotherapiepraxis in Heide einen Notebook-Arbeitsplatz mit Dockingstation ein.</p>
        <p>a) Ordne jeder Anforderung einen passenden Anschluss zu: (1) Bild und Ton an den Fernseher im Wartezimmer, (2) zwei Monitore in Reihe an einem einzigen Grafikausgang, (3) Notebook laden und gleichzeitig Monitore, LAN und USB über ein Kabel anbinden, (4) kabelgebundene Netzwerkverbindung, (5) älterer USB-Stick.</p>
        <p>b) Eine 60-GiB-Datensicherung wird über USB 3.2 Gen 2 (10 Gbit/s) auf eine externe SSD kopiert. Durch Protokoll-Overhead stehen nur 80 % der Datenrate zur Verfügung. Berechne die Dauer.</p>
        <p>c) Ein USB-C-Port liefert laut Datenblatt „USB PD 15 V / 3 A“. Das Notebook benötigt ein 65-W-Netzteil. Prüfe rechnerisch, ob der Port das Notebook voll versorgen kann.</p>
        <p>d) Erkläre den folgenden Datenblatt-Auszug auf Deutsch: <em>„DisplayPort 1.4 supports Multi-Stream Transport (MST), which allows several monitors to be daisy-chained from a single output. All displays in the chain share the available bandwidth.“</em></p>`,
      solution: `<p><strong>a)</strong> (1) <strong>HDMI</strong> · (2) <strong>DisplayPort</strong> mit MST (Daisy Chaining) · (3) <strong>USB-C</strong> mit Thunderbolt/USB4 bzw. DP Alt Mode und Power Delivery · (4) <strong>RJ45</strong> (Ethernet) · (5) <strong>USB-A</strong></p>
        <p><strong>b)</strong> Datenmenge: 60 × 1.073.741.824 Byte × 8 = 515.396.075.520 Bit<br>
          Nutzdatenrate: 10 Gbit/s × 0,8 = 8 × 10⁹ bit/s<br>
          t = 515.396.075.520 ÷ 8.000.000.000 ≈ <strong>64,4 s</strong> (gut eine Minute)</p>
        <p><strong>c)</strong> P = U × I = 15 V × 3 A = <strong>45 W</strong> &lt; 65 W → Der Port reicht <strong>nicht</strong>. Das Notebook lädt unter Last gar nicht oder nur sehr langsam. Benötigt wird ein Port mit mindestens 65 W, z. B. 20 V × 3,25 A.</p>
        <p><strong>d)</strong> DisplayPort 1.4 unterstützt „Multi-Stream Transport“. Damit lassen sich mehrere Monitore hintereinanderschalten (Daisy Chaining), obwohl der Computer nur einen Ausgang nutzt: Das Signal geht vom PC zum ersten Monitor und von dessen DP-Ausgang zum nächsten. Alle Monitore der Kette teilen sich die Bandbreite der einen Verbindung; bei hohen Auflösungen oder Bildraten ist die Anzahl der Monitore deshalb begrenzt.</p>`
    },
    {
      id: "e-monitor",
      topic: "monitore-peripherie",
      title: "Monitore vergleichen: Pixeldichte, Maße, Panel",
      level: 2,
      exam: ["AP1"],
      task: `<p>Ein Grafikbüro in Husum lässt sich von der Nordlicht IT GmbH beraten. Zur Auswahl stehen:</p>
        <table><thead><tr><th>Modell</th><th>Diagonale</th><th>Auflösung</th><th>Panel</th></tr></thead><tbody>
          <tr><td>M1</td><td>24″</td><td>1920 × 1200 (16:10)</td><td>VA</td></tr>
          <tr><td>M2</td><td>27″</td><td>2560 × 1440 (16:9)</td><td>IPS</td></tr>
          <tr><td>M3</td><td>32″</td><td>3840 × 2160 (16:9)</td><td>IPS</td></tr>
        </tbody></table>
        <p>a) Berechne die Pixeldichte (ppi) aller drei Modelle (eine Nachkommastelle).</p>
        <p>b) Berechne Breite und Höhe der Bildfläche von M1 in cm (1″ = 2,54 cm).</p>
        <p>c) Welcher Paneltyp eignet sich für farbverbindliche Grafikarbeit? Begründe mit zwei Eigenschaften.</p>
        <p>d) M3 kann 10 Bit je Farbkanal darstellen. Wie viele Farben sind das, und wie viele mehr als bei 8 Bit je Kanal?</p>`,
      solution: `<p><strong>a)</strong> ppi = √(Breite² + Höhe²) ÷ Diagonale<br>
          M1: √(1920² + 1200²) = √5.126.400 ≈ 2264,2 px ÷ 24 ≈ <strong>94,3 ppi</strong><br>
          M2: √(2560² + 1440²) ≈ 2937,2 px ÷ 27 ≈ <strong>108,8 ppi</strong><br>
          M3: √(3840² + 2160²) ≈ 4405,8 px ÷ 32 ≈ <strong>137,7 ppi</strong></p>
        <p><strong>b)</strong> √(16² + 10²) = √356 ≈ 18,87<br>
          Breite: 24″ × 16 ÷ 18,87 ≈ 20,35″ × 2,54 ≈ <strong>51,7 cm</strong><br>
          Höhe: 24″ × 10 ÷ 18,87 ≈ 12,72″ × 2,54 ≈ <strong>32,3 cm</strong></p>
        <p><strong>c)</strong> <strong>IPS</strong>: Es stellt Farben sehr genau dar (großer Farbraum, farbtreu) und die Farben bleiben auch bei seitlichem Blick stabil (hohe Blickwinkelstabilität). Beides ist wichtig, wenn Kunden gemeinsam auf den Bildschirm schauen und Farben verbindlich sein müssen.</p>
        <p><strong>d)</strong> 10 Bit × 3 Kanäle = 30 Bit → 2³⁰ = <strong>1.073.741.824 Farben</strong>. Bei 8 Bit: 2²⁴ = 16.777.216 Farben. Das sind 1.056.964.608 Farben mehr, also das 2⁶ = <strong>64-Fache</strong>.</p>`
    },
    {
      id: "e-ergonomie",
      topic: "ergonomie",
      title: "Bildschirmarbeitsplatz verbessern und barrierefrei ausstatten",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Bei einer Begehung im Büro der Reederei Watt &amp; Meer GmbH in Büsum stellst du fest:</p>
        <ul><li>Der Monitor steht direkt vor dem Fenster; die Mitarbeiterin blickt ins Gegenlicht.</li><li>Die Oberkante des Monitors liegt deutlich über Augenhöhe.</li><li>Gearbeitet wird acht Stunden am Notebook ohne externe Tastatur und Maus.</li><li>Der Bürostuhl ist nicht höhenverstellbar, die Füße erreichen den Boden nicht.</li><li>Gemessene Beleuchtungsstärke am Arbeitsplatz: 300 lx.</li><li>Ein lauter Laserdrucker steht direkt neben dem Schreibtisch.</li></ul>
        <p>a) Nenne vier Mängel und schlage jeweils eine Verbesserung vor.</p>
        <p>b) Ein neuer Kollege ist stark sehbehindert. Schlage zwei Hardware-Erweiterungen und zwei Einstellungen im Betriebssystem vor.</p>
        <p>c) Auf dem neuen Monitor findest du das CE- und das GS-Zeichen. Erkläre den Unterschied.</p>`,
      solution: `<p><strong>a)</strong> (vier genügen)</p>
        <table><thead><tr><th>Mangel</th><th>Verbesserung</th></tr></thead><tbody>
          <tr><td>Blick ins Gegenlicht → Blendung</td><td>Monitor so drehen, dass die Blickrichtung parallel zur Fensterfront verläuft; zusätzlich Jalousien</td></tr>
          <tr><td>Monitor zu hoch → Nackenbelastung</td><td>Höhe so einstellen, dass die oberste Textzeile auf oder leicht unter Augenhöhe liegt</td></tr>
          <tr><td>Notebook ohne externe Eingabegeräte → Zwangshaltung</td><td>Dockingstation mit externem Monitor, separater Tastatur und Maus</td></tr>
          <tr><td>Stuhl nicht verstellbar</td><td>höhenverstellbaren Bürostuhl mit Lordosenstütze bereitstellen, ggf. Fußstütze</td></tr>
          <tr><td>300 lx zu dunkel</td><td>Beleuchtung auf mindestens 500 lx verbessern (Arbeitsplatzleuchte, Deckenbeleuchtung)</td></tr>
          <tr><td>Lärm und Emissionen des Druckers</td><td>Drucker in einen separaten Raum oder Flur stellen</td></tr>
        </tbody></table>
        <p><strong>b)</strong> Hardware: großer, hoch auflösender Monitor mit Monitorarm (geringer Sehabstand möglich), Großschrift- oder kontrastreiche Tastatur, ggf. Braillezeile oder Headset für die Sprachausgabe. Einstellungen: Bildschirmlupe, Skalierung/Textgröße erhöhen, Kontrastdesign aktivieren, Mauszeiger vergrößern, Sprachausgabe (Screenreader) einschalten.</p>
        <p><strong>c)</strong> Mit dem <strong>CE-Zeichen</strong> erklärt der <strong>Hersteller selbst</strong>, dass das Produkt die geltenden EU-Richtlinien erfüllt. Es ist Voraussetzung für den Verkauf in der EU, aber kein Prüfsiegel. Das <strong>GS-Zeichen</strong> („Geprüfte Sicherheit“) ist freiwillig und wird von einer <strong>unabhängigen Prüfstelle</strong> nach einer Prüfung des Produkts vergeben. Es ist daher aussagekräftiger.</p>`
    },
    {
      id: "e-zahlen-1",
      topic: "zahlensysteme",
      title: "Zahlensysteme umrechnen",
      level: 1,
      exam: ["AP1"],
      task: `<p>Rechne um und gib jeweils den Rechenweg an:</p>
        <p>a) 100₁₀ ins Dual-, Oktal- und Hexadezimalsystem</p>
        <p>b) C0₁₆ ins Dezimalsystem</p>
        <p>c) 1111 0000₂ ins Hexadezimal- und Dezimalsystem</p>
        <p>d) 777₈ ins Dezimalsystem</p>
        <p>e) 1000₁₀ ins Hexadezimalsystem</p>`,
      hints: ["Dezimal → andere Basis: fortlaufend durch die Basis teilen, Reste von unten nach oben lesen.", "Dual → Hex: Viererblöcke von rechts bilden."],
      solution: `<p><strong>a)</strong> Dual: 100 ÷ 2 = 50 R 0 · 50 ÷ 2 = 25 R 0 · 25 ÷ 2 = 12 R 1 · 12 ÷ 2 = 6 R 0 · 6 ÷ 2 = 3 R 0 · 3 ÷ 2 = 1 R 1 · 1 ÷ 2 = 0 R 1 → <strong>110 0100₂</strong><br>
          Oktal: 100 ÷ 8 = 12 R 4 · 12 ÷ 8 = 1 R 4 · 1 ÷ 8 = 0 R 1 → <strong>144₈</strong><br>
          Hex: 100 ÷ 16 = 6 R 4 · 6 ÷ 16 = 0 R 6 → <strong>64₁₆</strong><br>
          Probe: 0110 0100₂ → 6 | 4 ✓</p>
        <p><strong>b)</strong> C0₁₆ = 12 × 16 + 0 × 1 = <strong>192</strong></p>
        <p><strong>c)</strong> 1111 | 0000 → F | 0 → <strong>F0₁₆</strong> = 15 × 16 = <strong>240</strong> (bzw. 128 + 64 + 32 + 16 = 240)</p>
        <p><strong>d)</strong> 777₈ = 7 × 64 + 7 × 8 + 7 × 1 = 448 + 56 + 7 = <strong>511</strong></p>
        <p><strong>e)</strong> 1000 ÷ 16 = 62 R 8 · 62 ÷ 16 = 3 R 14 (E) · 3 ÷ 16 = 0 R 3 → <strong>3E8₁₆</strong>. Probe: 3 × 256 + 14 × 16 + 8 = 768 + 224 + 8 = 1000 ✓</p>`
    },
    {
      id: "e-zahlen-2",
      topic: "zahlensysteme",
      title: "Bits, ASCII und UTF-8 anwenden",
      level: 2,
      exam: ["AP1"],
      task: `<p>Die Nordlicht IT GmbH entwickelt für einen Großhändler in Heide ein Etikettensystem.</p>
        <p>a) Es gibt 300 Artikelgruppen. Wie viele Bit werden mindestens für einen eindeutigen Code benötigt, und wie viele Codes bleiben frei?</p>
        <p>b) Ein Etikettendrucker sendet die Hexfolge <code>4C 46 32 20 4F 4B</code> (ASCII). Dekodiere sie. Hilfe: 0x20 = Leerzeichen, 0x32 = „2“, 0x41 = „A“, das Alphabet ist fortlaufend nummeriert.</p>
        <p>c) Wie viele Byte belegt der Text „Übergabe ✓“ in UTF-8? (Ü = U+00DC, ✓ = U+2713)</p>
        <p>d) Das Firmenlogo nutzt die Farbe <code>#1E90FF</code>. Gib die Rot-, Grün- und Blauanteile dezimal an.</p>`,
      solution: `<p><strong>a)</strong> 2⁸ = 256 &lt; 300 ≤ 512 = 2⁹ → <strong>9 Bit</strong>. Freie Codes: 512 − 300 = <strong>212</strong>.</p>
        <p><strong>b)</strong> 0x41 = A → 0x4C = A + 11 = L · 0x46 = A + 5 = F · 0x32 = 2 · 0x20 = Leerzeichen · 0x4F = A + 14 = O · 0x4B = A + 10 = K → <strong>„LF2 OK“</strong></p>
        <p><strong>c)</strong> In UTF-8 belegen ASCII-Zeichen 1 Byte, Codepoints von U+0080 bis U+07FF 2 Byte und von U+0800 bis U+FFFF 3 Byte.<br>
          Ü = 2 Byte · „bergabe“ = 7 × 1 Byte · Leerzeichen = 1 Byte · ✓ = 3 Byte → 2 + 7 + 1 + 3 = <strong>13 Byte</strong></p>
        <p><strong>d)</strong> Rot: 1E₁₆ = 1 × 16 + 14 = <strong>30</strong> · Grün: 90₁₆ = 9 × 16 = <strong>144</strong> · Blau: FF₁₆ = 15 × 16 + 15 = <strong>255</strong></p>`
    },
    {
      id: "e-dateigroesse",
      topic: "datenmengen",
      title: "Speicherbedarf von Scan, Audio und Text berechnen",
      level: 2,
      exam: ["AP1"],
      task: `<p>Eine Steuerkanzlei in Heide will ihr Papierarchiv digitalisieren und einen Podcast für Mandanten anbieten.</p>
        <p>a) Eine DIN-A4-Seite wird mit 300 dpi gescannt, das ergibt 2480 × 3508 Pixel. Berechne den unkomprimierten Speicherbedarf bei 24 Bit Farbtiefe in MiB.</p>
        <p>b) Wie groß ist dieselbe Seite als Schwarz-Weiß-Scan mit 1 Bit Farbtiefe (in KiB)?</p>
        <p>c) Eine Podcastfolge dauert 45 Minuten und wird als MP3 mit 128 kbit/s gespeichert. Berechne die Dateigröße in MiB (prüfungskonform) und zum Vergleich in MB.</p>
        <p>d) Ein Handbuch hat 400 Seiten mit durchschnittlich 2.500 Zeichen; es wird als reiner Text mit 1 Byte pro Zeichen gespeichert. Gib die Größe in KiB an.</p>`,
      hints: ["kbit/s ist eine Datenrate und damit dezimal: 128 kbit/s = 128.000 bit/s."],
      solution: `<p><strong>a)</strong> 2480 × 3508 = 8.699.840 Pixel × 3 Byte = 26.099.520 Byte ÷ 1.048.576 ≈ <strong>24,89 MiB</strong></p>
        <p><strong>b)</strong> 8.699.840 Bit ÷ 8 = 1.087.480 Byte ÷ 1024 ≈ <strong>1.062 KiB</strong> (≈ 1,04 MiB) – ein Vierundzwanzigstel des Farbscans.</p>
        <p><strong>c)</strong> 45 min = 2.700 s → 128.000 bit/s × 2.700 s = 345.600.000 Bit ÷ 8 = 43.200.000 Byte ÷ 1.048.576 ≈ <strong>41,2 MiB</strong> (dezimal 43,2 MB)</p>
        <p><strong>d)</strong> 400 × 2.500 = 1.000.000 Zeichen = 1.000.000 Byte ÷ 1024 ≈ <strong>976,6 KiB</strong></p>`
    },
    {
      id: "e-uebertragung",
      topic: "datenmengen",
      title: "Videoüberwachung und Cloud-Backup planen",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Das Hotel „Möwenkoje“ in Büsum beauftragt die Nordlicht IT GmbH mit einer Videoüberwachung des Eingangsbereichs und einem nächtlichen Cloud-Backup.</p>
        <p>a) Sechs Kameras senden je einen Videostrom mit 4 Mbit/s. Die Aufnahmen sollen 72 Stunden gespeichert werden. Berechne den Speicherbedarf in GiB und TiB.</p>
        <p>b) Im Rekorder steckt eine Festplatte mit 1 TB. Berechne, wie viele Stunden Aufnahmen darauf maximal passen.</p>
        <p>c) Jede Nacht werden 50 GiB Daten in die Cloud gesichert. Der Upload beträgt 50 Mbit/s, davon gehen 15 % durch Overhead verloren. Berechne die Dauer in Stunden, Minuten und Sekunden.</p>
        <p>d) Das Backup-Fenster soll auf 1 Stunde verkürzt werden. Welche Upload-Rate (brutto, gleicher Overhead) ist mindestens nötig?</p>
        <p>e) Nenne zwei datenschutzrechtliche Punkte, die das Hotel bei der Videoüberwachung beachten muss.</p>`,
      hints: ["72 h = 259.200 s", "Datenraten sind dezimal, GiB ist binär."],
      solution: `<p><strong>a)</strong> Datenrate gesamt: 6 × 4 Mbit/s = 24 Mbit/s = 24.000.000 bit/s = 3.000.000 Byte/s<br>
          72 h = 72 × 3.600 s = 259.200 s → 3.000.000 Byte/s × 259.200 s = 777.600.000.000 Byte<br>
          ÷ 1024³ ≈ <strong>724,2 GiB</strong> · ÷ 1024⁴ ≈ <strong>0,71 TiB</strong> (dezimal wären es 777,6 GB – als Ergebnis aber binär angeben)</p>
        <p><strong>b)</strong> 1 TB = 10¹² Byte → 10¹² ÷ 3.000.000 Byte/s ≈ 333.333 s ÷ 3.600 ≈ <strong>92,6 h</strong>. Die geforderten 72 h passen also.</p>
        <p><strong>c)</strong> Datenmenge: 50 × 1.073.741.824 × 8 = 429.496.729.600 Bit<br>
          Nutzrate: 50.000.000 × 0,85 = 42.500.000 bit/s<br>
          t = 429.496.729.600 ÷ 42.500.000 ≈ 10.105,8 s = 2 h (7.200 s) + 48 min (2.880 s) + 25,8 s → <strong>≈ 2 h 48 min 26 s</strong></p>
        <p><strong>d)</strong> benötigte Nutzrate: 429.496.729.600 Bit ÷ 3.600 s ≈ 119.304.647 bit/s ≈ 119,3 Mbit/s<br>
          brutto: 119,3 Mbit/s ÷ 0,85 ≈ <strong>140,4 Mbit/s</strong> → in der Praxis ein Anschluss mit mindestens 150–200 Mbit/s Upload.</p>
        <p><strong>e)</strong> Zum Beispiel: Videoüberwachung nur für einen festgelegten Zweck (Hausrecht, Schutz vor Einbruch) und nur so lange speichern, wie nötig (Speicherbegrenzung); gut sichtbare Hinweisschilder mit Verantwortlichem; keine Überwachung sensibler Bereiche; Zugriff auf die Aufnahmen nur für berechtigte Personen; ggf. Betriebsrat beteiligen, wenn Beschäftigte erfasst werden.</p>`
    },
    {
      id: "e-stromkosten",
      topic: "energie-green-it",
      title: "Stromkosten alter und neuer PCs vergleichen",
      level: 2,
      exam: ["AP1"],
      task: `<p>Das Versicherungsbüro Thiessen in Heide ersetzt 25 alte Tower-PCs (mittlere Leistungsaufnahme 85 W) durch Mini-PCs (25 W). Die Geräte laufen 8 Stunden an 220 Arbeitstagen, der Strompreis beträgt 0,34 €/kWh.</p>
        <p>a) Berechne den jährlichen Energiebedarf und die Stromkosten für einen alten und einen neuen PC.</p>
        <p>b) Berechne die jährliche Einsparung für alle 25 Arbeitsplätze in kWh und Euro.</p>
        <p>c) Im ausgeschalteten Zustand ziehen die alten PCs 4 W, die neuen 1 W – und zwar 7.000 Stunden im Jahr. Berechne die zusätzliche Einsparung für alle 25 Geräte.</p>
        <p>d) Der Stromanbieter gibt 0,4 kg CO₂ je kWh an. Wie viel CO₂ wird insgesamt (b + c) pro Jahr eingespart?</p>`,
      solution: `<p><strong>a)</strong> alt: 85 W × 8 h × 220 = 149.600 Wh = <strong>149,6 kWh</strong> → × 0,34 € ≈ <strong>50,86 €</strong><br>
          neu: 25 W × 8 h × 220 = 44.000 Wh = <strong>44 kWh</strong> → × 0,34 € = <strong>14,96 €</strong></p>
        <p><strong>b)</strong> Einsparung je PC: 149,6 − 44 = 105,6 kWh → × 25 = <strong>2.640 kWh</strong> → × 0,34 € = <strong>897,60 €</strong> pro Jahr</p>
        <p><strong>c)</strong> (4 W − 1 W) × 7.000 h = 21.000 Wh = 21 kWh je PC → × 25 = <strong>525 kWh</strong> → × 0,34 € = <strong>178,50 €</strong></p>
        <p><strong>d)</strong> (2.640 + 525) kWh = 3.165 kWh × 0,4 kg/kWh = <strong>1.266 kg CO₂</strong> (≈ 1,3 t) pro Jahr. Die Gesamtersparnis beträgt 897,60 € + 178,50 € = 1.076,10 € jährlich.</p>`
    },
    {
      id: "e-green-it",
      topic: "energie-green-it",
      title: "Monitortausch: Energie, Amortisation und Entsorgung",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Die Kreisverwaltung eines fiktiven Landkreises an der Westküste ersetzt 40 alte Monitore (32 W im Betrieb). Zur Auswahl stehen:</p>
        <table><thead><tr><th>Modell</th><th>Leistungsaufnahme</th><th>Preis je Stück</th><th>Label</th></tr></thead><tbody>
          <tr><td>Standard</td><td>22 W</td><td>179 €</td><td>EU-Energielabel E</td></tr>
          <tr><td>Effizient</td><td>16 W</td><td>199 €</td><td>EU-Energielabel C, Blauer Engel</td></tr>
        </tbody></table>
        <p>Betrieb: 9 h an 225 Tagen, Strompreis 0,36 €/kWh.</p>
        <p>a) Berechne für alle 40 Monitore den jährlichen Energiebedarf und die Stromkosten für die alten, die Standard- und die effizienten Monitore.</p>
        <p>b) Nach wie vielen Jahren amortisiert sich der Mehrpreis des effizienten Modells gegenüber dem Standardmodell? Beurteile das Ergebnis bei einer geplanten Nutzungsdauer von 6 Jahren.</p>
        <p>c) Erläutere, wofür der Blaue Engel steht, und nenne zwei weitere Green-IT-Maßnahmen für die Verwaltung.</p>
        <p>d) Beschreibe, wie die alten Monitore gesetzeskonform entsorgt werden.</p>`,
      solution: `<p><strong>a)</strong> Betriebsstunden: 9 h × 225 = 2.025 h</p>
        <table><thead><tr><th>Modell</th><th>je Monitor</th><th>40 Monitore</th><th>Kosten/Jahr</th></tr></thead><tbody>
          <tr><td>alt (32 W)</td><td>32 × 2.025 = 64,8 kWh</td><td>2.592 kWh</td><td>933,12 €</td></tr>
          <tr><td>Standard (22 W)</td><td>22 × 2.025 = 44,55 kWh</td><td>1.782 kWh</td><td>641,52 €</td></tr>
          <tr><td>Effizient (16 W)</td><td>16 × 2.025 = 32,4 kWh</td><td>1.296 kWh</td><td>466,56 €</td></tr>
        </tbody></table>
        <p><strong>b)</strong> Einsparung je Monitor: (44,55 − 32,4) kWh × 0,36 € = 12,15 kWh × 0,36 € ≈ 4,37 € pro Jahr<br>
          Mehrpreis: 199 € − 179 € = 20 € → Amortisation: 20 € ÷ 4,37 €/Jahr ≈ <strong>4,6 Jahre</strong><br>
          Bei 6 Jahren Nutzung spart das effiziente Modell über die Laufzeit mehr Stromkosten ein, als es mehr kostet (6 × 4,37 € ≈ 26,22 € &gt; 20 €). Hinzu kommen Vorteile wie Schadstoffarmut und weniger CO₂. → Empfehlung: effizientes Modell. Für alle 40 Geräte sinken die Stromkosten gegenüber dem Altbestand um 933,12 € − 466,56 € = 466,56 € pro Jahr.</p>
        <p><strong>c)</strong> Der <strong>Blaue Engel</strong> ist das Umweltzeichen der Bundesregierung. Er kennzeichnet Produkte, die im Vergleich besonders energiesparend, schadstoffarm, langlebig bzw. reparierbar und recyclinggerecht sind. Weitere Maßnahmen: Energiesparpläne (Monitor nach 5 min aus, Ruhezustand), schaltbare Steckdosenleisten gegen Standby-Verluste, Geräte länger nutzen und reparieren, Duplexdruck als Standard, Thin Clients bzw. virtualisierte Desktops, Ökostrom.</p>
        <p><strong>d)</strong> Nach dem <strong>ElektroG</strong> dürfen Altgeräte nicht in den Restmüll (Symbol durchgestrichene Mülltonne). Als gewerbliche Altgeräte werden sie über die Rücknahme des Herstellers bzw. Händlers oder einen zertifizierten Entsorgungsfachbetrieb dem Recycling zugeführt. Übergabe mit Entsorgungsnachweis dokumentieren. Enthalten Geräte Datenspeicher (z. B. PCs), müssen die Daten vorher sicher gelöscht oder die Datenträger nach DIN 66399 vernichtet werden.</p>`
    },
    {
      id: "e-bezugskalkulation",
      topic: "angebotsvergleich",
      title: "Drei Monitor-Angebote quantitativ vergleichen",
      level: 2,
      exam: ["AP1"],
      task: `<p>Die Nordlicht IT GmbH benötigt 10 baugleiche Monitore und hat drei Angebote eingeholt:</p>
        <table><thead><tr><th>Angebot</th><th>Listenpreis/Stück</th><th>Rabatt</th><th>Skonto</th><th>Bezugskosten</th><th>Lieferzeit</th></tr></thead><tbody>
          <tr><td>1 – Förde-Hardware</td><td>219,00 €</td><td>10 %</td><td>2 %</td><td>25,00 € pauschal</td><td>2 Tage</td></tr>
          <tr><td>2 – Elbe-Distribution</td><td>205,00 €</td><td>–</td><td>3 %</td><td>frei Haus</td><td>3 Wochen</td></tr>
          <tr><td>3 – Marschland-IT</td><td>229,00 €</td><td>15 %</td><td>–</td><td>4,90 € je Stück</td><td>5 Tage</td></tr>
        </tbody></table>
        <p>a) Berechne für alle drei Angebote den Bezugspreis für 10 Monitore (Skonto wird genutzt).</p>
        <p>b) Die Monitore werden in 10 Tagen für ein Kundenprojekt gebraucht. Triff unter Einbeziehung eines qualitativen Kriteriums eine begründete Entscheidung.</p>
        <p>c) Nenne drei weitere qualitative Kriterien für die Lieferantenauswahl.</p>`,
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Schritt</th><th>Angebot 1</th><th>Angebot 2</th><th>Angebot 3</th></tr></thead><tbody>
          <tr><td>Listenpreis (10 Stück)</td><td>2.190,00 €</td><td>2.050,00 €</td><td>2.290,00 €</td></tr>
          <tr><td>− Rabatt</td><td>219,00 €</td><td>0,00 €</td><td>343,50 €</td></tr>
          <tr><td>= Zieleinkaufspreis</td><td>1.971,00 €</td><td>2.050,00 €</td><td>1.946,50 €</td></tr>
          <tr><td>− Skonto</td><td>39,42 €</td><td>61,50 €</td><td>0,00 €</td></tr>
          <tr><td>= Bareinkaufspreis</td><td>1.931,58 €</td><td>1.988,50 €</td><td>1.946,50 €</td></tr>
          <tr><td>+ Bezugskosten</td><td>25,00 €</td><td>0,00 €</td><td>49,00 €</td></tr>
          <tr><td>= <strong>Bezugspreis</strong></td><td><strong>1.956,58 €</strong></td><td><strong>1.988,50 €</strong></td><td><strong>1.995,50 €</strong></td></tr>
        </tbody></table>
        <p><strong>b)</strong> Angebot 1 ist mit 1.956,58 € (195,66 € je Monitor) am günstigsten und liefert in 2 Tagen – also rechtzeitig. Angebot 2 hat den niedrigsten Listenpreis, wäre aber teurer und mit 3 Wochen Lieferzeit für das Projekt zu spät. <strong>Entscheidung: Angebot 1.</strong></p>
        <p><strong>c)</strong> Zuverlässigkeit und Termintreue, Qualität der Ware, Service und Support (z. B. Vor-Ort-Austausch), Garantiebedingungen, Zahlungsbedingungen (Zahlungsziel), Umwelt- und Sozialstandards, räumliche Nähe, bisherige Erfahrungen.</p>`
    },
    {
      id: "e-nwa",
      topic: "angebotsvergleich",
      title: "Nutzwertanalyse für Multifunktionsdrucker",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Eine Arztpraxis in Heide benötigt einen Multifunktionsdrucker. Die Nordlicht IT GmbH hat drei Geräte vorausgewählt:</p>
        <table><thead><tr><th>Kriterium</th><th>Gewicht</th><th>Drucker A</th><th>Drucker B</th><th>Drucker C</th></tr></thead><tbody>
          <tr><td>Anschaffungspreis</td><td>20 %</td><td>649 €</td><td>899 €</td><td>549 €</td></tr>
          <tr><td>Seitenkosten</td><td>30 %</td><td>1,8 ct</td><td>1,2 ct</td><td>2,6 ct</td></tr>
          <tr><td>Druckgeschwindigkeit</td><td>20 %</td><td>40 Seiten/min</td><td>45 Seiten/min</td><td>33 Seiten/min</td></tr>
          <tr><td>Energieverbrauch (TEC)</td><td>15 %</td><td>0,9 kWh/Woche</td><td>1,2 kWh/Woche</td><td>0,8 kWh/Woche</td></tr>
          <tr><td>Service</td><td>15 %</td><td>Vor-Ort, nächster Werktag</td><td>Vor-Ort, nächster Werktag</td><td>Einsenden (Bring-in)</td></tr>
        </tbody></table>
        <p>a) Vergib Punkte nach der Regel: bester Wert 3 Punkte, mittlerer 2 Punkte, schlechtester 1 Punkt. Beim Service erhalten gleichwertige Angebote dieselbe Punktzahl (Vor-Ort = 3, Bring-in = 1). Führe die Nutzwertanalyse durch und triff eine Entscheidung.</p>
        <p>b) Die Praxis druckt 2.500 Seiten pro Monat. Berechne die Gesamtkosten (Anschaffung + Seitenkosten + Strom bei 0,35 €/kWh) über 36 Monate (= 156 Wochen).</p>
        <p>c) Beurteile, ob das Ergebnis aus b) die Entscheidung aus a) stützt, und nenne eine Schwäche der Nutzwertanalyse.</p>`,
      hints: ["Beim Preis, bei den Seitenkosten und beim Energieverbrauch ist der niedrigste Wert der beste.", "Teilnutzwert = Gewicht × Punkte"],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Kriterium</th><th>Gewicht</th><th>A</th><th>A gew.</th><th>B</th><th>B gew.</th><th>C</th><th>C gew.</th></tr></thead><tbody>
          <tr><td>Preis</td><td>0,20</td><td>2</td><td>0,40</td><td>1</td><td>0,20</td><td>3</td><td>0,60</td></tr>
          <tr><td>Seitenkosten</td><td>0,30</td><td>2</td><td>0,60</td><td>3</td><td>0,90</td><td>1</td><td>0,30</td></tr>
          <tr><td>Geschwindigkeit</td><td>0,20</td><td>2</td><td>0,40</td><td>3</td><td>0,60</td><td>1</td><td>0,20</td></tr>
          <tr><td>Energie</td><td>0,15</td><td>2</td><td>0,30</td><td>1</td><td>0,15</td><td>3</td><td>0,45</td></tr>
          <tr><td>Service</td><td>0,15</td><td>3</td><td>0,45</td><td>3</td><td>0,45</td><td>1</td><td>0,15</td></tr>
          <tr><td><strong>Nutzwert</strong></td><td>1,00</td><td></td><td><strong>2,15</strong></td><td></td><td><strong>2,30</strong></td><td></td><td><strong>1,70</strong></td></tr>
        </tbody></table>
        <p>Drucker <strong>B</strong> erreicht den höchsten Nutzwert (2,30) und wird empfohlen.</p>
        <p><strong>b)</strong> Seiten: 2.500 × 36 = 90.000; Energie: TEC × 156 Wochen</p>
        <table><thead><tr><th>Posten</th><th>A</th><th>B</th><th>C</th></tr></thead><tbody>
          <tr><td>Anschaffung</td><td>649,00 €</td><td>899,00 €</td><td>549,00 €</td></tr>
          <tr><td>Seitenkosten (90.000 Seiten)</td><td>1.620,00 €</td><td>1.080,00 €</td><td>2.340,00 €</td></tr>
          <tr><td>Strom</td><td>140,4 kWh → 49,14 €</td><td>187,2 kWh → 65,52 €</td><td>124,8 kWh → 43,68 €</td></tr>
          <tr><td><strong>Summe</strong></td><td><strong>2.318,14 €</strong></td><td><strong>2.044,52 €</strong></td><td><strong>2.932,68 €</strong></td></tr>
        </tbody></table>
        <p><strong>c)</strong> Ja: Drucker B ist trotz des höchsten Anschaffungspreises über 36 Monate am günstigsten, weil die niedrigen Seitenkosten bei 90.000 Seiten den Ausschlag geben. Beide Verfahren kommen zum selben Ergebnis. <strong>Schwäche der NWA:</strong> Gewichtung und Punktevergabe sind subjektiv; die grobe 1–3-Skala bildet Abstände nicht ab (C ist beim Preis nur 100 € günstiger als A, bekommt aber einen ganzen Punkt mehr). Kleine Änderungen der Gewichte können das Ergebnis kippen.</p>`
    },
    {
      id: "e-angebotskalkulation",
      topic: "angebotsvergleich",
      title: "Kundenangebot mit Zuschlagssätzen kalkulieren",
      level: 3,
      exam: ["AP1"],
      task: `<p>Die Nordlicht IT GmbH bezieht einen Office-PC zum Bezugspreis von 950,00 €. Für das Angebot an einen Kunden in Meldorf gelten folgende Sätze:</p>
        <ul><li>Handlungskostenzuschlag 20 %</li><li>Gewinnzuschlag 12 %</li><li>Kundenskonto 2 %</li><li>Kundenrabatt 5 %</li><li>Umsatzsteuer 19 %</li></ul>
        <p>a) Kalkuliere den Listenverkaufspreis netto und brutto. Gib alle Zwischenergebnisse an.</p>
        <p>b) Der Kunde erhält den Rabatt und zahlt innerhalb der Skontofrist. Welchen Betrag überweist er? Zeige, dass die Nordlicht IT GmbH damit genau ihren geplanten Barverkaufspreis (zzgl. USt) erhält.</p>
        <p>c) Erkläre, warum Kundenskonto und Kundenrabatt „im Hundert“ und nicht „vom Hundert“ aufgeschlagen werden.</p>`,
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Schritt</th><th>Rechnung</th><th>Betrag</th></tr></thead><tbody>
          <tr><td>Bezugspreis</td><td></td><td>950,00 €</td></tr>
          <tr><td>+ Handlungskosten 20 %</td><td>950,00 × 0,20</td><td>190,00 €</td></tr>
          <tr><td>= Selbstkosten</td><td></td><td>1.140,00 €</td></tr>
          <tr><td>+ Gewinn 12 %</td><td>1.140,00 × 0,12</td><td>136,80 €</td></tr>
          <tr><td>= Barverkaufspreis</td><td></td><td>1.276,80 €</td></tr>
          <tr><td>+ Kundenskonto 2 % (i. H.)</td><td>1.276,80 ÷ 0,98 = 1.302,86</td><td>26,06 €</td></tr>
          <tr><td>= Zielverkaufspreis</td><td></td><td>1.302,86 €</td></tr>
          <tr><td>+ Kundenrabatt 5 % (i. H.)</td><td>1.302,86 ÷ 0,95 = 1.371,43</td><td>68,57 €</td></tr>
          <tr><td>= <strong>Listenverkaufspreis netto</strong></td><td></td><td><strong>1.371,43 €</strong></td></tr>
          <tr><td>+ USt 19 %</td><td>1.371,43 × 0,19</td><td>260,57 €</td></tr>
          <tr><td>= <strong>Listenverkaufspreis brutto</strong></td><td></td><td><strong>1.632,00 €</strong></td></tr>
        </tbody></table>
        <p><strong>b)</strong> Rechnung: 1.371,43 € − 5 % Rabatt (68,57 €) = 1.302,86 € netto + 19 % USt = 1.550,40 € brutto. Bei Zahlung mit 2 % Skonto (31,01 €) überweist der Kunde <strong>1.519,39 €</strong>. Das entspricht dem Barverkaufspreis 1.276,80 € × 1,19 = 1.519,39 € – die Kalkulation geht also genau auf.</p>
        <p><strong>c)</strong> Der Kunde zieht Rabatt und Skonto später vom <em>höheren</em> Betrag ab (Rabatt vom Listenpreis, Skonto vom Zielverkaufspreis). Der Abzug ist deshalb größer als ein Aufschlag auf den kleineren Betrag. Nur wenn man durch (1 − Satz) teilt, bleibt nach dem Abzug genau der geplante Betrag übrig. Beispiel: 1.276,80 € + 2 % = 1.302,34 €; davon 2 % Skonto abgezogen ergibt nur 1.276,29 €, also 0,51 € zu wenig.</p>`
    },
    {
      id: "e-leasing",
      topic: "beschaffung",
      title: "Kauf, Leasing oder Miete für 12 Notebooks",
      level: 3,
      exam: ["AP1"],
      task: `<p>Ein Ingenieurbüro in Heide benötigt 12 Notebooks für 36 Monate. Die Nordlicht IT GmbH legt drei Varianten vor:</p>
        <ul><li><strong>Kauf:</strong> 1.150 € je Gerät, zusätzlich einmalig 89 € je Gerät für einen 3-Jahres-Servicevertrag</li>
          <li><strong>Leasing:</strong> 38 € je Gerät und Monat, Laufzeit 36 Monate, Service inklusive</li>
          <li><strong>Miete:</strong> 49 € je Gerät und Monat, monatlich kündbar, Service inklusive</li></ul>
        <p>a) Berechne die Gesamtkosten aller drei Varianten für 12 Geräte über 36 Monate.</p>
        <p>b) Berechne jeweils die monatlichen Kosten je Gerät.</p>
        <p>c) Nenne je einen Vorteil von Leasing und Kauf, der nicht im Preis liegt.</p>
        <p>d) Für ein Projekt werden zusätzlich 4 Notebooks für nur 5 Monate gebraucht. Empfiehl eine Variante und begründe rechnerisch.</p>`,
      solution: `<p><strong>a)</strong> Kauf: (1.150 € + 89 €) × 12 = 1.239 € × 12 = <strong>14.868 €</strong><br>
          Leasing: 38 € × 36 × 12 = <strong>16.416 €</strong><br>
          Miete: 49 € × 36 × 12 = <strong>21.168 €</strong></p>
        <p><strong>b)</strong> Kauf: 1.239 € ÷ 36 ≈ <strong>34,42 €</strong> · Leasing: <strong>38,00 €</strong> · Miete: <strong>49,00 €</strong> je Gerät und Monat</p>
        <p><strong>c)</strong> <strong>Leasing:</strong> Es wird kein Kapital auf einmal gebunden (Liquidität bleibt erhalten), die Raten sind planbar und nach 36 Monaten erhält man einfach neue Technik. <strong>Kauf:</strong> Die Geräte gehören dem Büro; es kann sie nach 36 Monaten weiter nutzen oder verkaufen und ist nicht an Vertragsbedingungen gebunden.</p>
        <p><strong>d)</strong> <strong>Miete:</strong> 4 × 49 € × 5 = <strong>980 €</strong>. Ein Kauf würde 4 × 1.150 € = 4.600 € kosten (ein Wiederverkaufserlös ist unsicher), und ein Leasingvertrag setzt meist eine Mindestlaufzeit voraus (hier 36 Monate = 4 × 38 € × 36 = 5.472 €). Für kurze Zeiträume ist die Miete deshalb am günstigsten und am flexibelsten.</p>`
    },
    {
      id: "e-maengel",
      topic: "beschaffung",
      title: "Wareneingang prüfen und Mängel rügen",
      level: 2,
      exam: ["AP1"],
      task: `<p>Die Nordlicht IT GmbH hat bei der Förde-Hardware GmbH 10 Dockingstationen „DS-400“ bestellt. Geliefert werden 8 Geräte; zwei davon sind das ältere Modell „DS-200“, bei einem weiteren ist das Gehäuse gebrochen.</p>
        <p>a) Beschreibe vier Schritte der Wareneingangskontrolle.</p>
        <p>b) Benenne die drei Arten mangelhafter Lieferung, die hier vorliegen.</p>
        <p>c) Welche Rechte hat die Nordlicht IT GmbH vorrangig, welche nachrangig?</p>
        <p>d) Warum muss die Nordlicht IT GmbH besonders schnell reagieren? Nenne vier Inhalte der Mängelrüge.</p>`,
      solution: `<p><strong>a)</strong> Anzahl der Pakete und Verpackung in Gegenwart des Zustellers prüfen und Transportschäden quittieren lassen · Lieferschein mit Bestellung vergleichen (Artikel, Menge) · Ware auspacken und auf Beschädigungen, Modell und Seriennummern prüfen · Funktionstest durchführen · Mängel mit Fotos dokumentieren und Einkauf/Lieferant informieren.</p>
        <p><strong>b)</strong> <strong>Minderlieferung</strong> (Quantitätsmangel): 8 statt 10 Geräte · <strong>Falschlieferung</strong>: 2 × DS-200 statt DS-400 · <strong>Schlechtleistung</strong> (Qualitätsmangel): gebrochenes Gehäuse</p>
        <p><strong>c)</strong> Vorrangig: <strong>Nacherfüllung</strong> – die Nordlicht IT GmbH wählt Nachbesserung oder Ersatzlieferung, hier sinnvoll: Nachlieferung der 2 fehlenden und Austausch der 3 mangelhaften Geräte. Nachrangig (nach erfolglosem Ablauf einer angemessenen Frist): <strong>Rücktritt</strong> vom Vertrag, <strong>Minderung</strong> des Kaufpreises oder <strong>Schadensersatz</strong> bei Verschulden.</p>
        <p><strong>d)</strong> Beide Vertragspartner sind Kaufleute (GmbH) – es liegt ein <strong>zweiseitiger Handelskauf</strong> vor. Nach § 377 HGB muss die Ware unverzüglich geprüft und ein erkennbarer Mangel unverzüglich gerügt werden, sonst gilt sie als genehmigt und die Rechte gehen verloren. Inhalte der Mängelrüge: Bestell- und Lieferscheinnummer, Lieferdatum, genaue Beschreibung jedes Mangels (fehlende Menge, falsches Modell, Beschädigung), Fotos als Beleg, gewünschtes Recht (Nachlieferung/Ersatzlieferung), Frist zur Erledigung.</p>`
    },
    {
      id: "e-os-lizenz",
      topic: "betriebssysteme",
      title: "Windows-11-Tauglichkeit, Lizenzen und Dateisysteme",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Ein Kunde der Nordlicht IT GmbH möchte einen älteren PC auf Windows 11 umstellen. <code>msinfo32</code> zeigt: BIOS-Modus „Legacy“, Datenträger mit MBR-Partitionsstil, TPM-Version 1.2, 8 GB RAM, 256-GB-SSD, CPU nicht auf der Kompatibilitätsliste.</p>
        <p>a) Nenne alle Punkte, die gegen Windows 11 sprechen, und beschreibe, welche davon sich durch Einstellungen beheben lassen.</p>
        <p>b) Empfiehl jeweils ein Lizenzmodell und begründe: (1) 25 Büroarbeitsplätze sollen immer die aktuelle Office-Version erhalten, (2) ein neuer Komplett-PC wird mit vorinstalliertem Windows gekauft, (3) ein Unternehmen passt eine GPL-lizenzierte Software an und gibt sie an Kunden weiter.</p>
        <p>c) Ein USB-Stick soll zwischen Windows- und macOS-Rechnern Videodateien mit bis zu 6 GB austauschen. Wähle ein Dateisystem und begründe, warum FAT32 und NTFS weniger geeignet sind.</p>`,
      solution: `<p><strong>a)</strong> Gegen Windows 11 sprechen: <strong>Legacy-BIOS statt UEFI</strong> (damit kein Secure Boot), <strong>MBR statt GPT</strong>, <strong>TPM 1.2 statt 2.0</strong> und die <strong>nicht unterstützte CPU</strong>. RAM (8 GB ≥ 4 GB) und SSD (256 GB ≥ 64 GB) reichen. Behebbar: MBR lässt sich in GPT umwandeln (z. B. mit dem Windows-Werkzeug MBR2GPT), danach UEFI-Modus und Secure Boot im Firmware-Menü aktivieren. TPM 1.2 und die CPU lassen sich in der Regel nicht per Einstellung ändern. → Für einen unterstützten Betrieb ist neue Hardware nötig.</p>
        <p><strong>b)</strong> (1) <strong>Abonnement</strong> (Subscription pro Nutzer): Updates auf die neueste Version sind enthalten, die Kosten sind planbar, Lizenzen lassen sich zentral zuweisen. (2) <strong>OEM-Lizenz</strong>: wird mit der Hardware ausgeliefert, ist günstig, aber an dieses Gerät gebunden. (3) <strong>Open Source unter GPL</strong>: Die Software darf verändert und weitergegeben werden, aber wegen des Copylefts muss die veränderte Version wieder unter der GPL stehen und der Quellcode mitgeliefert bzw. zugänglich gemacht werden.</p>
        <p><strong>c)</strong> <strong>exFAT</strong>: Es wird von Windows und macOS gelesen und geschrieben und erlaubt Dateien über 4 GB. FAT32 ist zwar kompatibel, erlaubt aber höchstens 4 GiB − 1 Byte pro Datei – die 6-GB-Videos passen nicht. NTFS kann macOS standardmäßig nur lesen, nicht beschreiben.</p>`
    },
    {
      id: "e-uebergabe",
      topic: "betriebssysteme",
      title: "Testprotokoll und Übergabe eines Arbeitsplatzes",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Du hast für die Buchhaltung eines Autohauses in Heide einen neuen Arbeitsplatz eingerichtet: Notebook mit Dockingstation, zwei Monitore, Netzwerkdrucker, Buchhaltungssoftware, Domänenbeitritt.</p>
        <p>a) Erstelle ein Testprotokoll mit fünf sinnvollen Testfällen (Testfall, erwartetes Ergebnis).</p>
        <p>b) Nenne sechs Inhalte des Übergabeprotokolls.</p>
        <p>c) Erläutere, warum der Kunde das Protokoll unterschreiben sollte.</p>`,
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Nr.</th><th>Testfall</th><th>Erwartetes Ergebnis</th></tr></thead><tbody>
          <tr><td>1</td><td>Anmeldung mit dem Domänenkonto des Mitarbeiters</td><td>Anmeldung erfolgreich, Netzlaufwerke werden verbunden</td></tr>
          <tr><td>2</td><td>Notebook an der Dockingstation anschließen</td><td>beide Monitore zeigen Bild in nativer Auflösung, Notebook lädt, LAN aktiv</td></tr>
          <tr><td>3</td><td>Testseite auf dem Netzwerkdrucker drucken</td><td>Seite wird vollständig gedruckt</td></tr>
          <tr><td>4</td><td>Buchhaltungssoftware starten und Testbuchung anlegen</td><td>Programm startet ohne Fehler, Buchung wird gespeichert</td></tr>
          <tr><td>5</td><td>Verschlüsselung und Updates prüfen</td><td>BitLocker aktiv, keine ausstehenden Updates, Virenschutz aktuell</td></tr>
        </tbody></table>
        <p>Zu jedem Testfall werden außerdem das tatsächliche Ergebnis, der Status (ok/nicht ok), Datum und Prüfer eingetragen.</p>
        <p><strong>b)</strong> Auftragsnummer und Kunde, Datum und Ort, übergebene Geräte mit Seriennummern und Zubehör, installierte Software und Lizenzen, Ergebnisse der Tests, offene Mängel und Restarbeiten, Bestätigung der Einweisung, Unterschriften von Kunde und Dienstleister.</p>
        <p><strong>c)</strong> Mit der Unterschrift bestätigt der Kunde, dass die Leistung vollständig und vertragsgemäß erbracht wurde (<strong>Abnahme</strong>). Damit ist der Auftrag abgeschlossen, die Rechnung kann gestellt werden, und bei späteren Streitigkeiten ist dokumentiert, in welchem Zustand der Arbeitsplatz übergeben wurde.</p>`
    },
    {
      id: "e-word-doku",
      topic: "dokumentation-word",
      title: "Dokumentation formal richtig gestalten",
      level: 1,
      exam: [],
      task: `<p>Du erstellst die Dokumentation zu deinem Arbeitsauftrag „Grafikkarten und Festplatten“ in Word.</p>
        <p>a) Beschreibe die Schritte, damit das Deckblatt und das Inhaltsverzeichnis keine Seitenzahl haben und der Textteil auf Seite 3 mit „1“ beginnt.</p>
        <p>b) Erkläre den Unterschied zwischen Seitenumbruch und Abschnittsumbruch.</p>
        <p>c) Erstelle aus folgenden Angaben eine Quellenangabe: Autorin Jana Hansen, Buch „Rechnertechnik verständlich“, 2. Auflage, erschienen 2025 im Westküsten-Verlag in Husum, zitiert wird Seite 57.</p>
        <p>d) Wandle das direkte Zitat <em>„Eine SSD enthält keine beweglichen Teile.“</em> in ein indirektes Zitat um.</p>`,
      solution: `<p><strong>a)</strong> Überschriften mit Formatvorlagen versehen und das automatische Inhaltsverzeichnis einfügen. Hinter dem Inhaltsverzeichnis einen <strong>Abschnittsumbruch (Nächste Seite)</strong> setzen. In der Fußzeile des zweiten Abschnitts <strong>„Mit vorheriger verknüpfen“ deaktivieren</strong>, die Seitenzahl einfügen und über „Seitenzahlen formatieren“ <strong>Beginnen bei 1</strong> einstellen. Im ersten Abschnitt die Seitenzahl löschen. Zum Schluss das Inhaltsverzeichnis aktualisieren.</p>
        <p><strong>b)</strong> Ein <strong>Seitenumbruch</strong> lässt den folgenden Text auf einer neuen Seite beginnen; Kopf- und Fußzeile sowie das Seitenlayout bleiben gleich. Ein <strong>Abschnittsumbruch</strong> beginnt einen neuen Abschnitt, der eigene Einstellungen haben kann: andere Kopf-/Fußzeilen, eine neue Seitenzählung oder Querformat.</p>
        <p><strong>c)</strong> Hansen, Jana: Rechnertechnik verständlich. 2. Aufl., Husum: Westküsten-Verlag, 2025, S. 57.</p>
        <p><strong>d)</strong> Solid-State-Drives arbeiten ohne mechanisch bewegte Bauteile (vgl. Hansen 2025, S. 57). – Der Inhalt wird in eigenen Worten und ohne Anführungszeichen wiedergegeben, aber trotzdem mit „vgl.“ belegt.</p>`
    },
    {
      id: "e-breakeven",
      topic: "angebotsvergleich",
      title: "Kopierertarife mit Break-even vergleichen",
      level: 2,
      exam: ["AP1"],
      task: `<p>Ein Architekturbüro in Heide least einen Kopierer und kann zwischen zwei Seitenpreis-Tarifen wählen:</p>
        <ul><li>Tarif A: Grundgebühr 30 € pro Monat + 0,8 ct pro Seite</li><li>Tarif B: keine Grundgebühr, 2,3 ct pro Seite</li></ul>
        <p>a) Stelle für beide Tarife die monatliche Kostenfunktion auf und benenne fixe und variable Kosten.</p>
        <p>b) Berechne die kritische Seitenzahl, ab der Tarif A günstiger ist.</p>
        <p>c) Das Büro druckt durchschnittlich 3.500 Seiten im Monat. Berechne die monatlichen Kosten beider Tarife und empfiehl einen Tarif.</p>`,
      solution: `<p><strong>a)</strong> K_A(x) = 30 € + 0,008 €/Seite × x · K_B(x) = 0,023 €/Seite × x<br>
          Fixe Kosten: die Grundgebühr von 30 € (fällt unabhängig von der Seitenzahl an). Variable Kosten: der Seitenpreis (steigt mit jeder Seite).</p>
        <p><strong>b)</strong> 30 + 0,008 × x = 0,023 × x → 30 = 0,015 × x → x = <strong>2.000 Seiten pro Monat</strong>. Oberhalb von 2.000 Seiten ist Tarif A günstiger, darunter Tarif B.</p>
        <p><strong>c)</strong> K_A(3.500) = 30 € + 0,008 € × 3.500 = 30 € + 28 € = <strong>58,00 €</strong> · K_B(3.500) = 0,023 € × 3.500 = <strong>80,50 €</strong><br>
          → Tarif A spart 22,50 € pro Monat bzw. 270 € im Jahr und wird empfohlen, solange das Druckvolumen deutlich über 2.000 Seiten liegt.</p>`
    },
    {
      id: "e-rechnung-kredit",
      topic: "beschaffung",
      title: "Finanzierung vergleichen und Rechnung prüfen",
      level: 3,
      exam: ["AP1"],
      task: `<p>Die Nordlicht IT GmbH berät einen Pflegedienst in Heide bei der Anschaffung eines Notebooks (Nutzung 36 Monate).</p>
        <ul><li>Kauf: 1.380 €</li><li>Leasing: 36 Monatsraten à 42 € inklusive Vor-Ort-Service</li><li>Kreditkauf: 5 % Zinsen pro Jahr auf den vollen Betrag über 3 Jahre (vereinfachte Rechnung)</li></ul>
        <p>a) Berechne für alle drei Varianten die Gesamtkosten und die monatlichen Kosten.</p>
        <p>b) Nenne zwei Gründe, warum der Pflegedienst trotzdem Leasing wählen könnte.</p>
        <p>c) Zusätzlich liegt eine Lieferantenrechnung vor: 4 Monitore à 289,00 €, 5 % Rabatt, ausgewiesene Umsatzsteuer 219,64 €, Rechnungsbetrag 1.317,84 €. Prüfe die Rechnung, gib den korrekten Rechnungsbetrag an und berechne den Überweisungsbetrag bei 2 % Skonto.</p>
        <p>d) Nenne drei Pflichtangaben einer Rechnung nach dem Umsatzsteuergesetz.</p>`,
      hints: ["Einfache Zinsen = Kapital × Zinssatz × Jahre", "Die Umsatzsteuer wird auf den Nettobetrag nach Rabatt berechnet."],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Variante</th><th>Gesamtkosten</th><th>pro Monat</th></tr></thead><tbody>
          <tr><td>Kauf</td><td>1.380,00 €</td><td>1.380 € ÷ 36 ≈ 38,33 €</td></tr>
          <tr><td>Leasing</td><td>36 × 42 € = 1.512,00 €</td><td>42,00 €</td></tr>
          <tr><td>Kredit</td><td>1.380 € + 1.380 € × 0,05 × 3 = 1.380 € + 207 € = 1.587,00 €</td><td>1.587 € ÷ 36 ≈ 44,08 €</td></tr>
        </tbody></table>
        <p><strong>b)</strong> Beim Leasing ist der <strong>Vor-Ort-Service</strong> enthalten, der beim Kauf extra bezahlt werden müsste. Außerdem wird kein Kapital auf einmal gebunden (<strong>Liquidität</strong>), und nach 36 Monaten wird das Gerät einfach gegen ein aktuelles getauscht.</p>
        <p><strong>c)</strong> Listenpreis: 4 × 289,00 € = 1.156,00 € − 5 % Rabatt (57,80 €) = <strong>1.098,20 € netto</strong><br>
          Richtige USt: 1.098,20 € × 0,19 = <strong>208,66 €</strong>. Ausgewiesen wurden 219,64 € = 19 % vom Betrag <em>vor</em> Rabatt (1.156,00 € × 0,19) – ein Fehler von 10,98 €.<br>
          Korrekter Rechnungsbetrag: 1.098,20 € + 208,66 € = <strong>1.306,86 €</strong> (statt 1.317,84 €)<br>
          Mit 2 % Skonto: 1.306,86 € − 26,14 € = <strong>1.280,72 €</strong> Überweisungsbetrag. Die fehlerhafte Rechnung wird reklamiert und eine Rechnungskorrektur angefordert.</p>
        <p><strong>d)</strong> Vollständiger Name und Anschrift von leistendem Unternehmen und Kunde, Steuernummer oder USt-IdNr. des Leistenden, Ausstellungsdatum, fortlaufende Rechnungsnummer, Menge und Art der Leistung, Zeitpunkt der Lieferung, Entgelt, Steuersatz und Steuerbetrag.</p>`
    },
    {
      id: "e-cloud-ki",
      topic: "betriebssysteme",
      title: "Office-Abo, virtuelle Desktops und KI-Assistent bewerten",
      level: 2,
      exam: ["AP1"],
      task: `<p>Eine Steuerberatungskanzlei in Husum mit 15 Mitarbeitenden fragt die Nordlicht IT GmbH nach der künftigen Software-Ausstattung.</p>
        <p>a) Office als Abonnement (SaaS) kostet 10,50 € pro Nutzer und Monat, eine Kauflizenz 399 € pro Arbeitsplatz (Nutzung 36 Monate, keine Upgrades enthalten). Vergleiche die Kosten über 36 Monate.</p>
        <p>b) Nenne je zwei Vor- und Nachteile der Cloud-Lösung für die Kanzlei.</p>
        <p>c) Für eine neue Außenstelle wird Desktop as a Service (DaaS) vorgeschlagen. Erkläre DaaS und begründe, warum dort Thin Clients genügen.</p>
        <p>d) Die Mitarbeitenden möchten einen KI-Schreibassistenten nutzen. Nenne drei Anforderungen, die aus Datenschutzsicht erfüllt sein müssen.</p>`,
      solution: `<p><strong>a)</strong> SaaS: 15 × 10,50 € × 36 = <strong>5.670 €</strong> · Kauf: 15 × 399 € = <strong>5.985 €</strong>. Das Abo ist über 36 Monate um 315 € günstiger und enthält zusätzlich alle Updates auf neue Versionen.</p>
        <p><strong>b)</strong> Vorteile: immer aktuelle Version ohne eigenen Update-Aufwand; Zugriff von überall, z. B. im Homeoffice; Lizenzen lassen sich monatlich an die Mitarbeiterzahl anpassen. Nachteile: ohne Internetverbindung eingeschränkt nutzbar; laufende Kosten und Abhängigkeit vom Anbieter; vertrauliche Mandantendaten liegen bei einem Dienstleister (Serverstandort, Auftragsverarbeitungsvertrag nötig).</p>
        <p><strong>c)</strong> Bei <strong>DaaS</strong> stellt ein Anbieter komplette virtuelle Windows-Desktops in seinem Rechenzentrum bereit; die Nutzer greifen über das Netz darauf zu. Rechenleistung, Programme und Daten liegen in der Cloud, das Endgerät zeigt nur Bild, Ton und Eingaben an. Deshalb reicht ein sparsamer, zentral verwalteter <strong>Thin Client</strong> ohne lokale Daten – das ist günstig, sicher und schnell austauschbar.</p>
        <p><strong>d)</strong> Zum Beispiel: Auftragsverarbeitungsvertrag nach Art. 28 DSGVO mit dem Anbieter; Serverstandort in der EU; keine Nutzung der eingegebenen Daten zum Training der KI; keine personenbezogenen Mandantendaten in öffentliche KI-Dienste eingeben; Zugriff nur mit Firmenkonten; Mitarbeitende schulen und Ergebnisse vor der Verwendung prüfen.</p>`
    },
    {
      id: "e-pc-montage",
      topic: "gehaeuse-netzteil",
      title: "Büro-PCs montieren und Netzteil im Teillastbetrieb bewerten",
      level: 2,
      exam: ["AP1"],
      task: `<p>Die Nordlicht IT GmbH baut für eine Steuerkanzlei in Wesselburen sechs Büro-PCs selbst zusammen. Jeder PC erhält ein 450-W-Netzteil mit 80 PLUS Gold.</p>
        <p>a) Bringe die folgenden Arbeitsschritte in eine sinnvolle Reihenfolge: (A) Mainboard ins Gehäuse einsetzen und verschrauben · (B) CPU, Kühler und RAM auf das Mainboard setzen · (C) Netzstecker ziehen und Erdungsarmband anlegen · (D) 24-Pin-ATX, EPS und Front-Panel anschließen · (E) Erststart: POST und erkannte Hardware im UEFI prüfen · (F) Netzteil und I/O-Blende ins Gehäuse einbauen</p>
        <p>b) Erkläre, warum ESD-Schutz nötig ist, und nenne drei Schutzmaßnahmen.</p>
        <p>c) Im Büroalltag gibt jedes Netzteil nur etwa 20 % seiner Nennleistung ab. Laut 80-PLUS-Tabelle (230 V intern) erreicht ein Gold-Netzteil dabei η = 90 %. Berechne die abgegebene und die aufgenommene Leistung sowie die Verlustleistung.</p>
        <p>d) Die PCs laufen 8 h an 220 Tagen, der Strompreis beträgt 0,36 €/kWh. Berechne die Stromkosten pro Jahr für einen PC und für alle sechs.</p>
        <p>e) Ein günstigeres Netzteil nach 80 PLUS (Standard) erreicht bei 20 % Last nur η = 82 %. Wie viel Euro Stromkosten würden alle sechs PCs damit pro Jahr mehr verursachen?</p>`,
      hints: ["Abgegebene Leistung = Nennleistung × Auslastung", "Aufgenommene Leistung = abgegebene Leistung ÷ η", "Betriebsstunden: 8 h × 220 = 1.760 h"],
      solution: `<p><strong>a)</strong> <strong>C → B → F → A → D → E</strong>. Das Mainboard wird außerhalb des Gehäuses auf der Antistatikunterlage bestückt, weil man dort besser an Sockel und Slots kommt. Netzteil und I/O-Blende können auch vor dem Bestücken eingebaut werden – wichtig ist nur, dass die Blende vor dem Mainboard sitzt und der Erststart ganz am Ende steht.</p>
        <p><strong>b)</strong> Menschen laden sich z. B. beim Gehen über Teppich elektrostatisch auf. Eine Entladung über ein Bauteil kann Halbleiter sofort zerstören oder unbemerkt vorschädigen, sodass das Gerät später ausfällt. Schutzmaßnahmen: Erdungsarmband tragen, auf einer geerdeten ESD-Matte arbeiten, Bauteile nur am Rand anfassen und bis zum Einbau im Antistatikbeutel lassen, keine Kleidung aus Kunstfasern.</p>
        <p><strong>c)</strong> Abgegebene Leistung: P_ab = 450 W × 0,2 = <strong>90 W</strong><br>
          Aufgenommene Leistung: P_zu = 90 W ÷ 0,9 = <strong>100 W</strong><br>
          Verlustleistung: P_V = 100 W − 90 W = <strong>10 W</strong> (wird im Netzteil zu Wärme)</p>
        <p><strong>d)</strong> Betriebsstunden: 8 h × 220 = 1.760 h<br>
          Ein PC: 100 W × 1.760 h = 176.000 Wh = 176 kWh → 176 kWh × 0,36 €/kWh = <strong>63,36 €</strong><br>
          Sechs PCs: 6 × 176 kWh = 1.056 kWh → × 0,36 €/kWh = <strong>380,16 €</strong> pro Jahr</p>
        <p><strong>e)</strong> P_zu = 90 W ÷ 0,82 ≈ 109,76 W → Mehrverbrauch ≈ 9,76 W je PC<br>
          9,76 W × 1.760 h ≈ 17,17 kWh je PC → × 6 ≈ 103,02 kWh → × 0,36 €/kWh ≈ <strong>37,09 € pro Jahr</strong> mehr. Über eine Nutzungsdauer von 5 Jahren sind das rund 185 € – das Gold-Netzteil lohnt sich also, wenn es nicht deutlich teurer ist.</p>`
    },
    {
      id: "e-monitor-datenrate",
      topic: "monitore-peripherie",
      title: "Zwei 4K-Monitore anschließen: Datenrate und Schnittstelle prüfen",
      level: 3,
      exam: ["AP1"],
      task: `<p>Ein Architekturbüro in Heide möchte an ein Notebook zwei 27-Zoll-Monitore mit 3840 × 2160 Pixeln, 24 Bit Farbtiefe und 60 Hz anschließen. Das Notebook hat einen HDMI-1.4-Ausgang und einen USB-C-Port mit DisplayPort 1.4 (DP Alt Mode). Die Monitore besitzen je einen DP-Eingang und einen DP-Ausgang (MST).</p>
        <p>a) Berechne vereinfacht (ohne Austastlücken) die Datenrate, die ein Monitor benötigt, in Gbit/s.</p>
        <p>b) HDMI 1.4 überträgt brutto 10,2 Gbit/s, davon sind wegen der 8b/10b-Codierung 80 % nutzbar. Prüfe, ob ein Monitor über HDMI 1.4 mit 60 Hz betrieben werden kann, und berechne die höchste mögliche Bildwiederholrate bei voller Auflösung.</p>
        <p>c) DisplayPort 1.4 überträgt brutto 32,4 Gbit/s (ebenfalls 80 % nutzbar). Prüfe, ob beide Monitore per Daisy Chaining über den USB-C-Port mit 60 Hz laufen können.</p>
        <p>d) Berechne die Pixeldichte der Monitore und begründe, warum in Windows eine Skalierung von 150 % eingestellt werden sollte.</p>
        <p>e) Wie viel Grafikspeicher belegt je ein Bild beider Monitore bei 32 Bit pro Pixel zusammen (in MiB)?</p>`,
      hints: ["Datenrate = Breite × Höhe × Farbtiefe × Bildwiederholrate", "Nutzbare Rate = Bruttorate × 0,8"],
      solution: `<p><strong>a)</strong> 3840 × 2160 × 24 bit × 60 /s = 11.943.936.000 bit/s ≈ <strong>11,94 Gbit/s</strong></p>
        <p><strong>b)</strong> Nutzbar: 10,2 Gbit/s × 0,8 = 8,16 Gbit/s &lt; 11,94 Gbit/s → 60 Hz sind über HDMI 1.4 <strong>nicht</strong> möglich.<br>
          Höchste Bildwiederholrate: 8,16 × 10⁹ bit/s ÷ (3840 × 2160 × 24 bit) ≈ 41 Hz → in der Praxis bietet HDMI 1.4 bei 4K nur <strong>30 Hz</strong> an, was bei Mausbewegungen ruckelig wirkt.</p>
        <p><strong>c)</strong> Nutzbar: 32,4 Gbit/s × 0,8 = 25,92 Gbit/s · Bedarf: 2 × 11,94 Gbit/s ≈ 23,89 Gbit/s ≤ 25,92 Gbit/s → <strong>ja</strong>, beide Monitore laufen mit 60 Hz in der Kette (Notebook → Monitor 1 DP-In, Monitor 1 DP-Out → Monitor 2). Der Puffer ist aber klein; ein dritter Monitor gleicher Art wäre ohne DSC-Kompression nicht möglich.</p>
        <p><strong>d)</strong> √(3840² + 2160²) ≈ 4405,8 Pixel ÷ 27″ ≈ <strong>163,2 ppi</strong>. Bei so hoher Pixeldichte werden Schrift und Symbole ohne Skalierung sehr klein dargestellt (etwa zwei Drittel der Größe auf einem 27″-WQHD-Monitor mit 108,8 ppi). Mit 150 % Skalierung erscheinen sie in angenehmer Größe, bleiben aber besonders scharf – ergonomisch sinnvoll für die Arbeit an Plänen.</p>
        <p><strong>e)</strong> Ein Bild: 3840 × 2160 × 4 Byte = 33.177.600 Byte ≈ 31,64 MiB → zwei Monitore: 2 × 33.177.600 Byte ÷ 1.048.576 ≈ <strong>63,28 MiB</strong>. Das ist für heutige Grafikspeicher wenig; die integrierte Grafik des Notebooks reicht für die Bildausgabe aus.</p>`
    },
    {
      id: "e-ssd-hdd-auswahl",
      topic: "ram-speicher",
      title: "Massenspeicher vergleichen: Preis je GiB, Kopierzeit und Haltbarkeit",
      level: 2,
      exam: ["AP1"],
      task: `<p>Ein Fotostudio in Büsum lässt sich von der Nordlicht IT GmbH zu Massenspeichern beraten. Zur Auswahl stehen:</p>
        <table><thead><tr><th>Modell</th><th>Kapazität (Herstellerangabe)</th><th>Preis</th><th>sequenziell lesen</th></tr></thead><tbody>
          <tr><td>HDD 3,5″</td><td>4 TB</td><td>99 €</td><td>200 MB/s</td></tr>
          <tr><td>SATA-SSD 2,5″</td><td>2 TB</td><td>119 €</td><td>540 MB/s</td></tr>
          <tr><td>NVMe-SSD M.2 (PCIe 4.0 x4)</td><td>2 TB</td><td>139 €</td><td>7.000 MB/s</td></tr>
        </tbody></table>
        <p>a) Rechne die Kapazitäten in GiB um und berechne jeweils den Preis je GiB in Cent.</p>
        <p>b) Ein Fotoarchiv von 500 GiB soll sequenziell gelesen werden. Berechne jeweils die Dauer (Herstellerangaben in MB/s sind dezimal).</p>
        <p>c) Empfiehl je ein Laufwerk für das Systemlaufwerk des Bildbearbeitungs-PCs und für ein Archiv, das selten gelesen wird. Beziehe die Zugriffszeit bzw. IOPS in deine Begründung ein.</p>
        <p>d) Die NVMe-SSD ist mit 1.200 TBW angegeben. Täglich werden etwa 50 GB geschrieben. Nach wie vielen Jahren ist die Schreibmenge rechnerisch erreicht?</p>`,
      solution: `<p><strong>a)</strong> 4 TB = 4 × 10¹² Byte ÷ 1024³ ≈ 3.725,3 GiB · 2 TB = 2 × 10¹² Byte ÷ 1024³ ≈ 1.862,6 GiB</p>
        <table><thead><tr><th>Modell</th><th>Rechnung</th><th>Preis je GiB</th></tr></thead><tbody>
          <tr><td>HDD</td><td>99 € ÷ 3.725,3 GiB</td><td>≈ <strong>2,66 ct</strong></td></tr>
          <tr><td>SATA-SSD</td><td>119 € ÷ 1.862,6 GiB</td><td>≈ <strong>6,39 ct</strong></td></tr>
          <tr><td>NVMe-SSD</td><td>139 € ÷ 1.862,6 GiB</td><td>≈ <strong>7,46 ct</strong></td></tr>
        </tbody></table>
        <p><strong>b)</strong> 500 GiB = 500 × 1.073.741.824 Byte = 536.870.912.000 Byte<br>
          HDD: 536.870.912.000 Byte ÷ 200.000.000 Byte/s ≈ 2.684,4 s ≈ <strong>44 min 44 s</strong><br>
          SATA-SSD: ÷ 540.000.000 Byte/s ≈ 994,2 s ≈ <strong>16 min 34 s</strong><br>
          NVMe-SSD: ÷ 7.000.000.000 Byte/s ≈ <strong>76,7 s</strong> (gut 1 Minute) – vorausgesetzt, das Ziel ist ebenso schnell.</p>
        <p><strong>c)</strong> <strong>Systemlaufwerk: NVMe-SSD.</strong> Betriebssystem und Bildbearbeitung greifen ständig auf viele kleine Dateien zu; hier zählen kurze Zugriffszeiten (Bruchteile einer Millisekunde) und sehr hohe IOPS, bei denen eine HDD mit wenigen hundert IOPS chancenlos ist. Der Aufpreis gegenüber der SATA-SSD ist gering, der Geschwindigkeitsgewinn groß. <strong>Archiv: HDD.</strong> Sie ist mit Abstand am günstigsten je GiB und bietet viel Kapazität; die langsamere Zugriffszeit stört bei seltenem Lesen kaum. (Für die Datensicherung sollte das Archiv zusätzlich auf einem zweiten Medium liegen.)</p>
        <p><strong>d)</strong> 1.200 TBW = 1.200.000 GB → 1.200.000 GB ÷ 50 GB/Tag = 24.000 Tage ÷ 365 ≈ <strong>65,8 Jahre</strong>. Die Schreibmenge ist für dieses Nutzungsprofil kein begrenzender Faktor.</p>`
    },
    {
      id: "e-zahlen-3",
      topic: "zahlensysteme",
      title: "Zahlensysteme in der Praxis: MAC-Adresse, Rechte, Farben",
      level: 2,
      exam: ["AP1"],
      task: `<p>Bei der Einrichtung eines Arbeitsplatzes begegnen dir verschiedene Zahlensysteme. Gib jeweils den Rechenweg an.</p>
        <p>a) <code>ipconfig /all</code> zeigt die physische Adresse <code>3C-52-82-1A-F0-07</code>. Wie viele Bit hat die Adresse? Wandle das erste Byte ins Dual- und Dezimalsystem um und erkläre, was die ersten drei Byte angeben.</p>
        <p>b) Auf einem Linux-Server sollen die Rechte einer Datei auf <code>rwxr-x---</code> gesetzt werden. Gib die Oktalzahl für <code>chmod</code> an. Welche Rechte ergeben sich umgekehrt aus <code>chmod 640</code>?</p>
        <p>c) Das Corporate Design verlangt die Farbe RGB(0, 128, 255). Gib den Hex-Farbcode an.</p>
        <p>d) Wandle 1 0111 0011₂ ins Hexadezimal-, Oktal- und Dezimalsystem um.</p>
        <p>e) Ein Zähler speichert Werte mit 16 Bit (ohne Vorzeichen). Wie viele verschiedene Werte sind möglich, und wie lautet der größte Wert dezimal und hexadezimal?</p>`,
      hints: ["Eine Hex-Ziffer = 4 Bit, eine Oktalziffer = 3 Bit.", "r = 4, w = 2, x = 1"],
      solution: `<p><strong>a)</strong> 6 Byte × 8 Bit = <strong>48 Bit</strong> (12 Hex-Ziffern × 4 Bit). Erstes Byte 3C₁₆: 3 = 0011, C = 1100 → <strong>0011 1100₂</strong> = 32 + 16 + 8 + 4 = <strong>60</strong> (bzw. 3 × 16 + 12 = 60). Die ersten drei Byte (3C-52-82) sind die <strong>Herstellerkennung (OUI)</strong>, die letzten drei Byte vergibt der Hersteller fortlaufend für die Netzwerkkarte.</p>
        <p><strong>b)</strong> rwx = 4 + 2 + 1 = 7 · r-x = 4 + 0 + 1 = 5 · --- = 0 → <strong>chmod 750</strong>. Umgekehrt: 6 = 110 = rw-, 4 = 100 = r--, 0 = 000 = --- → <strong>rw-r-----</strong> (Besitzer lesen und schreiben, Gruppe nur lesen, andere nichts).</p>
        <p><strong>c)</strong> 0 = 00₁₆ · 128 = 8 × 16 + 0 = 80₁₆ · 255 = 15 × 16 + 15 = FF₁₆ → <strong>#0080FF</strong></p>
        <p><strong>d)</strong> Hex: Viererblöcke von rechts: 1 | 0111 | 0011 → 1 | 7 | 3 → <strong>173₁₆</strong><br>
          Oktal: Dreierblöcke von rechts: 101 | 110 | 011 → 5 | 6 | 3 → <strong>563₈</strong><br>
          Dezimal: 1 × 256 + 7 × 16 + 3 = 256 + 112 + 3 = <strong>371</strong> (Probe oktal: 5 × 64 + 6 × 8 + 3 = 320 + 48 + 3 = 371 ✓)</p>
        <p><strong>e)</strong> 2¹⁶ = <strong>65.536</strong> verschiedene Werte (0 bis 65.535). Größter Wert: <strong>65.535</strong> = 1111 1111 1111 1111₂ = <strong>FFFF₁₆</strong>.</p>`
    },
    {
      id: "e-fotos-upload",
      topic: "datenmengen",
      title: "Fotos einer Maklerin: Speicherbedarf, Kompression und Upload",
      level: 2,
      exam: ["AP1"],
      task: `<p>Eine Immobilienmaklerin in Meldorf fotografiert pro Monat 250 Objektfotos mit 6000 × 4000 Pixeln und 24 Bit Farbtiefe. Die Nordlicht IT GmbH berät sie beim Speichern und Hochladen.</p>
        <p>a) Berechne den Speicherbedarf eines unkomprimierten Fotos in MiB.</p>
        <p>b) Berechne den Speicherbedarf aller 250 Fotos unkomprimiert in GiB.</p>
        <p>c) Die Fotos werden als JPEG mit einem Kompressionsfaktor von 12 : 1 gespeichert. Berechne die Gesamtgröße in MiB.</p>
        <p>d) Die komprimierten Fotos werden über einen Upload mit 40 Mbit/s in die Cloud geladen. Berechne die Dauer ohne und mit 10 % Protokoll-Overhead.</p>
        <p>e) Wie viele Farben kann ein Pixel darstellen? Nenne außerdem ein Format, das für das Firmenlogo der Maklerin besser geeignet ist als JPEG, und begründe.</p>`,
      hints: ["24 Bit = 3 Byte pro Pixel", "Datenrate dezimal: 40 Mbit/s = 40.000.000 bit/s"],
      solution: `<p><strong>a)</strong> 6000 × 4000 × 3 Byte = 72.000.000 Byte ÷ 1.048.576 ≈ <strong>68,66 MiB</strong></p>
        <p><strong>b)</strong> 250 × 72.000.000 Byte = 18.000.000.000 Byte ÷ 1.073.741.824 ≈ <strong>16,76 GiB</strong></p>
        <p><strong>c)</strong> 18.000.000.000 Byte ÷ 12 = 1.500.000.000 Byte ÷ 1.048.576 ≈ <strong>1.430,5 MiB</strong> (≈ 1,40 GiB)</p>
        <p><strong>d)</strong> 1.500.000.000 Byte × 8 = 12.000.000.000 Bit<br>
          ohne Overhead: 12.000.000.000 Bit ÷ 40.000.000 bit/s = <strong>300 s = 5 min</strong><br>
          mit 10 % Overhead: Nutzrate 40 Mbit/s × 0,9 = 36 Mbit/s → 12.000.000.000 ÷ 36.000.000 ≈ 333,3 s ≈ <strong>5 min 33 s</strong></p>
        <p><strong>e)</strong> 2²⁴ = <strong>16.777.216 Farben</strong>. Für das Logo eignet sich <strong>SVG</strong> (Vektorgrafik): Es lässt sich ohne Qualitätsverlust für Visitenkarte und Plakat skalieren und ist sehr klein. Alternativ PNG (verlustfrei, scharfe Kanten, Transparenz) – JPEG erzeugt an harten Kanten und Schrift sichtbare Kompressionsartefakte.</p>`
    },
    {
      id: "e-arbeitsplatz-monatskosten",
      topic: "beschaffung",
      title: "Monatliche Kosten eines Arbeitsplatzes berechnen",
      level: 3,
      exam: ["AP1"],
      task: `<p>Die Nordlicht IT GmbH stattet ein Steuerbüro in Brunsbüttel mit 8 neuen Arbeitsplätzen aus. Je Arbeitsplatz fallen an:</p>
        <table><thead><tr><th>Posten</th><th>Preis netto</th><th>geplante Nutzungsdauer</th></tr></thead><tbody>
          <tr><td>Mini-PC</td><td>899,00 €</td><td>36 Monate</td></tr>
          <tr><td>2 Monitore</td><td>je 229,00 €</td><td>60 Monate</td></tr>
          <tr><td>Tastatur-Maus-Set</td><td>45,00 €</td><td>36 Monate</td></tr>
          <tr><td>Einrichtung</td><td>1,5 h × 85,00 €/h (einmalig, auf 36 Monate verteilt)</td><td>–</td></tr>
          <tr><td>Office-Abonnement</td><td>12,50 € pro Nutzer und Monat</td><td>laufend</td></tr>
        </tbody></table>
        <p>Auf die Hardware gewährt der Lieferant 5 % Rabatt.</p>
        <p>a) Berechne die monatlichen Kosten je Arbeitsplatz (auf Cent runden).</p>
        <p>b) Berechne die monatlichen und jährlichen Kosten für alle 8 Arbeitsplätze.</p>
        <p>c) Erkläre, warum für PC und Monitore unterschiedliche Nutzungsdauern angesetzt werden.</p>
        <p>d) Nenne drei Kostenarten, die für eine vollständige TCO-Betrachtung noch fehlen.</p>`,
      hints: ["Rabatt zuerst abziehen: Preis × 0,95", "Monatliche Kosten = Anschaffungskosten ÷ Nutzungsdauer in Monaten"],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Posten</th><th>Rechnung</th><th>pro Monat</th></tr></thead><tbody>
          <tr><td>Mini-PC</td><td>899,00 € × 0,95 = 854,05 € ÷ 36</td><td>23,72 €</td></tr>
          <tr><td>2 Monitore</td><td>2 × 229,00 € × 0,95 = 435,10 € ÷ 60</td><td>7,25 €</td></tr>
          <tr><td>Tastatur-Maus-Set</td><td>45,00 € × 0,95 = 42,75 € ÷ 36</td><td>1,19 €</td></tr>
          <tr><td>Einrichtung</td><td>1,5 h × 85,00 €/h = 127,50 € ÷ 36</td><td>3,54 €</td></tr>
          <tr><td>Office-Abo</td><td>laufend</td><td>12,50 €</td></tr>
          <tr><td><strong>Summe</strong></td><td></td><td><strong>48,20 €</strong></td></tr>
        </tbody></table>
        <p><strong>b)</strong> 8 × 48,20 € = <strong>385,60 € pro Monat</strong> · 385,60 € × 12 = <strong>4.627,20 € pro Jahr</strong> (Werte mit gerundeten Monatsbeträgen)</p>
        <p><strong>c)</strong> Monitore altern technisch langsamer: Ein Monitor mit guter Ergonomie kann problemlos an einem Nachfolge-PC weiterverwendet werden. PCs dagegen veralten schneller (Leistung, Betriebssystem-Anforderungen, Garantieende), deshalb werden sie nach etwa 3 Jahren ersetzt. Die monatlichen Kosten sind genauer, wenn jede Komponente über ihre tatsächliche Nutzungsdauer verteilt wird.</p>
        <p><strong>d)</strong> Zum Beispiel Stromkosten, Wartung und Support (Service-Stunden, Hotline), Schulung der Mitarbeitenden, Versicherung, Datensicherung und Entsorgung bzw. sichere Datenlöschung am Ende der Nutzung.</p>`
    },
    {
      id: "e-lizenzkosten",
      topic: "betriebssysteme",
      title: "Lizenzkosten: Staffelpreise, Wartung und Abo vergleichen",
      level: 2,
      exam: ["AP1"],
      task: `<p>Ein ambulanter Pflegedienst in Heide mit 18 Mitarbeitenden braucht eine Dokumentationssoftware. Der Hersteller bietet an:</p>
        <ul><li><strong>Kauflizenz:</strong> 1–10 Lizenzen je 249 €, ab 11 Lizenzen je 219 € (gilt dann für alle Lizenzen); dazu jährlich 20 % des Kaufpreises für Wartung (Updates und Support)</li>
          <li><strong>Abonnement:</strong> 9,90 € pro Nutzer und Monat, Updates und Support enthalten, monatlich anpassbar</li></ul>
        <p>a) Berechne die Gesamtkosten beider Varianten für 18 Nutzer über 3 Jahre.</p>
        <p>b) Ab welchem Monat ist die Kauflizenz günstiger? Stelle dazu die monatlichen Kosten gegenüber (Wartung auf Monate verteilen).</p>
        <p>c) Bei einer Überprüfung stellt sich heraus, dass die Software auf 22 Geräten installiert ist, aber nur 18 Lizenzen gekauft wurden. Nenne zwei mögliche Folgen und zwei Maßnahmen.</p>
        <p>d) Nenne je ein Argument für das Abonnement und für die Kauflizenz, das nicht im Preis liegt.</p>`,
      solution: `<p><strong>a)</strong> <strong>Kauf:</strong> 18 Lizenzen ≥ 11 → 18 × 219 € = 3.942,00 € · Wartung: 3.942,00 € × 0,20 = 788,40 € pro Jahr × 3 = 2.365,20 € → gesamt <strong>6.307,20 €</strong><br>
          <strong>Abo:</strong> 18 × 9,90 € × 36 Monate = <strong>6.415,20 €</strong><br>
          → Über 3 Jahre ist die Kauflizenz um 108,00 € günstiger.</p>
        <p><strong>b)</strong> Abo pro Monat: 18 × 9,90 € = 178,20 € · Wartung pro Monat: 788,40 € ÷ 12 = 65,70 €<br>
          Kauf lohnt sich, sobald die Ersparnis von 178,20 € − 65,70 € = 112,50 € pro Monat die Anschaffung ausgleicht: 3.942,00 € ÷ 112,50 €/Monat ≈ 35,04 Monate → ab dem <strong>36. Monat</strong> ist die Kauflizenz günstiger. Bei kürzerer Nutzung ist das Abo günstiger.</p>
        <p><strong>c)</strong> Folgen: Der Hersteller kann Unterlassung und Schadensersatz verlangen, es droht eine teure <strong>Nachlizenzierung</strong>, bei vorsätzlicher Verletzung sogar ein Strafverfahren; außerdem entsteht ein Imageschaden. Maßnahmen: sofort 4 Lizenzen nachkaufen oder die Software auf den überzähligen Geräten deinstallieren; eine Lizenzverwaltung (Software-Asset-Management) einführen und Installationen nur durch die IT-Abteilung erlauben (keine Adminrechte für Nutzer).</p>
        <p><strong>d)</strong> <strong>Abo:</strong> flexibel – bei neuen oder ausscheidenden Mitarbeitenden lässt sich die Nutzerzahl monatlich anpassen, keine hohe Anfangsinvestition. <strong>Kauf:</strong> Die Software darf auch nach Ende der Wartung weiter genutzt werden, und der Pflegedienst ist weniger abhängig von künftigen Preiserhöhungen des Anbieters.</p>`
    },
    {
      id: "e-cpu-datenblatt",
      topic: "mainboard-cpu",
      title: "CPU-Datenblatt auswerten und Leistungsdaten berechnen",
      level: 2,
      exam: ["AP1"],
      task: `<p>Für einen Entwickler-Arbeitsplatz der Nordlicht IT GmbH liegt folgender (fiktiver) Datenblattauszug vor:</p>
        <pre><code>Cores: 14 (6 Performance-cores with Hyper-Threading, 8 Efficient-cores)
Max. turbo frequency: 5.2 GHz | Cache: 24 MB (shared)
Processor base power: 65 W | Maximum turbo power: 148 W
Memory: DDR5-5600, 2 channels | PCIe 5.0 lanes: 16 | PCIe 4.0 lanes: 4
Integrated graphics: yes | Virtualization: VT-x, VT-d</code></pre>
        <p>a) Wie viele Threads kann die CPU gleichzeitig ausführen? Zeige die Rechnung.</p>
        <p>b) Berechne die Dauer eines Taktzyklus bei maximalem Turbotakt in Nanosekunden.</p>
        <p>c) Erkläre den Unterschied zwischen „Processor base power“ und „Maximum turbo power“ und welche Folgen er für die Wahl von Kühler und Netzteil hat.</p>
        <p>d) Auf der NVMe-SSD (PCIe 4.0 x4) liegt ein 64-GiB-Image einer virtuellen Maschine. Die SSD liest real mit 6.500 MB/s. Berechne die Ladedauer und vergleiche mit einer SATA-SSD (550 MB/s).</p>
        <p>e) Der Entwickler will virtuelle Maschinen betreiben und Windows 11 nutzen. Nenne drei UEFI-Einstellungen, die aktiviert sein müssen.</p>`,
      hints: ["Nur die P-Kerne haben Hyper-Threading.", "t = 1 ÷ f", "MB/s im Datenblatt ist dezimal, GiB ist binär."],
      solution: `<p><strong>a)</strong> 6 P-Kerne × 2 Threads + 8 E-Kerne × 1 Thread = 12 + 8 = <strong>20 Threads</strong> (bei 14 physischen Kernen).</p>
        <p><strong>b)</strong> t = 1 ÷ f = 1 ÷ (5,2 × 10⁹ Hz) ≈ 0,192 × 10⁻⁹ s ≈ <strong>0,19 ns</strong></p>
        <p><strong>c)</strong> Die <strong>Base Power</strong> (65 W) ist die Leistungsaufnahme bzw. Wärmeabgabe im Dauerbetrieb beim Basistakt. Mit <strong>Maximum Turbo Power</strong> (148 W) darf die CPU unter Last deutlich mehr aufnehmen, um höhere Turbotakte zu erreichen. Kühler und Netzteil müssen deshalb für die höhere Turbo-Leistung ausgelegt sein; ein Kühler nur für 65 W würde die CPU drosseln (thermisches Throttling), sodass sie ihre Leistung nicht abruft.</p>
        <p><strong>d)</strong> 64 GiB = 64 × 1.073.741.824 Byte = 68.719.476.736 Byte<br>
          NVMe: 68.719.476.736 Byte ÷ 6.500.000.000 Byte/s ≈ <strong>10,6 s</strong><br>
          SATA-SSD: 68.719.476.736 Byte ÷ 550.000.000 Byte/s ≈ 124,9 s ≈ <strong>2 min 5 s</strong> → die NVMe-SSD ist hier etwa zwölfmal so schnell.</p>
        <p><strong>e)</strong> <strong>Secure Boot</strong> (UEFI-Modus statt Legacy/CSM), <strong>TPM 2.0</strong> (bei Intel „PTT“) und <strong>Virtualisierung</strong> (Intel VT-x, für durchgereichte Geräte zusätzlich VT-d). Außerdem sinnvoll: das Speicherprofil (XMP) für DDR5-5600 und ein Firmware-Passwort.</p>`
    },
    {
      id: "e-dockingstation",
      topic: "schnittstellen",
      title: "Dockingstation anhand eines englischen Datenblatts prüfen",
      level: 2,
      exam: ["AP1"],
      task: `<p>Die Stadtbücherei Heide erhält Notebooks mit Thunderbolt-4-Anschluss. Das Notebook braucht ein 65-W-Netzteil (20 V). Die Nordlicht IT GmbH schlägt folgende Dockingstation vor:</p>
        <pre><code>Host connection: Thunderbolt 4 (40 Gbps), certified 0.8 m cable included
Upstream charging: up to 90 W (USB Power Delivery)
Video: 2 × 4K @ 60 Hz via DisplayPort 1.4 or HDMI 2.0
Network: 1 × 2.5GbE (RJ45)
Downstream ports: 3 × USB-A 10Gbps (4.5 W each), 1 × USB-C 10Gbps (15 W)
Power adapter: 180 W | Dock power consumption: approx. 12 W</code></pre>
        <p>a) Erkläre „Upstream charging up to 90 W“ und „2.5GbE“ auf Deutsch.</p>
        <p>b) Berechne den Strom, den das Notebook bei 65 W und 20 V aufnimmt, und beurteile, ob die Ladeleistung des Docks ausreicht.</p>
        <p>c) Prüfe, ob das 180-W-Netzteil des Docks reicht, wenn das Notebook mit der vollen Ladeleistung versorgt wird und alle USB-Ports ihre maximale Leistung abgeben.</p>
        <p>d) Ein 12-GiB-Ordner wird von einem Stick an einem USB-A-10Gbps-Port kopiert; effektiv werden 60 % der Datenrate erreicht. Berechne die Dauer und vergleiche mit USB 2.0 (480 Mbit/s, ebenfalls 60 % effektiv).</p>
        <p>e) Ein Mitarbeiter ersetzt das mitgelieferte Kabel durch ein beliebiges USB-C-Ladekabel. Danach bleiben die Monitore schwarz. Erkläre die Ursache.</p>`,
      solution: `<p><strong>a)</strong> <strong>Upstream charging up to 90 W:</strong> Das Dock versorgt das angeschlossene Notebook (in Richtung Host, „upstream“) über das Thunderbolt-Kabel per USB Power Delivery mit bis zu 90 W – ein separates Notebook-Netzteil ist nicht nötig. <strong>2.5GbE:</strong> ein kabelgebundener Netzwerkanschluss (RJ45) mit 2,5 Gigabit Ethernet, also 2,5 Gbit/s.</p>
        <p><strong>b)</strong> I = P ÷ U = 65 W ÷ 20 V = <strong>3,25 A</strong>. Das Dock liefert bis zu 90 W ≥ 65 W → die Ladeleistung <strong>reicht</strong>, auch unter Volllast des Notebooks.</p>
        <p><strong>c)</strong> Notebook 90 W + 3 × 4,5 W + 15 W = 118,5 W; mit Eigenverbrauch des Docks: 118,5 W + 12 W = <strong>130,5 W ≤ 180 W</strong> → das Netzteil reicht mit Reserve.</p>
        <p><strong>d)</strong> 12 GiB = 12 × 1.073.741.824 Byte × 8 = 103.079.215.104 Bit<br>
          USB 10Gbps: effektiv 10 Gbit/s × 0,6 = 6 Gbit/s → 103.079.215.104 ÷ 6.000.000.000 ≈ <strong>17,2 s</strong><br>
          USB 2.0: effektiv 480 Mbit/s × 0,6 = 288 Mbit/s → 103.079.215.104 ÷ 288.000.000 ≈ 357,9 s ≈ <strong>5 min 58 s</strong></p>
        <p><strong>e)</strong> USB-C beschreibt nur den Stecker. Viele einfache Ladekabel unterstützen nur USB 2.0 (480 Mbit/s) und keine Thunderbolt- bzw. DisplayPort-Signale; oft fehlt auch der E-Marker-Chip für Ströme über 3 A. Über ein solches Kabel kommen keine Bildsignale an. Lösung: das zertifizierte Thunderbolt-4-Kabel verwenden.</p>`
    },
    {
      id: "e-ergonomie-2",
      topic: "ergonomie",
      title: "Schutzarten, Schutzklassen und Software-Ergonomie anwenden",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH stattet das Lager einer Spedition in Brunsbüttel und das dazugehörige Büro aus.</p>
        <p>a) Für die Inventur im offenen Lagerbereich (Staub, gelegentlich Regen an der Rampe) stehen Tablets mit IP54 und mit IP67 zur Auswahl. Erkläre beide Angaben und empfiehl ein Gerät.</p>
        <p>b) Ordne die Geräte den Schutzklassen I, II oder III zu und begründe kurz: (1) Tower-PC mit Schukostecker, (2) Notebook-Netzteil mit Doppelquadrat-Symbol, (3) USB-Maus.</p>
        <p>c) Ordne jeder Beobachtung an der neuen Lagersoftware einen Grundsatz nach DIN EN ISO 9241-110 zu: (1) Eine versehentlich gelöschte Buchung lässt sich mit „Rückgängig“ wiederherstellen. (2) Die Maske zeigt nur die Felder, die für die Inventur nötig sind. (3) Neben jedem Eingabefeld erklärt ein Hinweis, welches Format erwartet wird.</p>
        <p>d) Wer ist für die Gefährdungsbeurteilung der Bildschirmarbeitsplätze verantwortlich? Nenne zwei psychische Belastungen, die dabei zu betrachten sind.</p>`,
      solution: `<p><strong>a)</strong> Die erste Ziffer gibt den Schutz gegen Fremdkörper und Staub an, die zweite den Schutz gegen Wasser. <strong>IP54:</strong> staubgeschützt (Staub dringt nur in unschädlicher Menge ein) und geschützt gegen Spritzwasser aus allen Richtungen. <strong>IP67:</strong> staubdicht und geschützt gegen zeitweiliges Untertauchen. Empfehlung: <strong>IP67</strong> – es hält Staub vollständig ab und übersteht auch einen Sturz in eine Pfütze; IP54 würde für Staub und Regenspritzer zwar grundsätzlich reichen, bietet aber weniger Reserve.</p>
        <p><strong>b)</strong> (1) <strong>Schutzklasse I</strong> – das Metallgehäuse ist über den Schutzleiter des Schukosteckers geerdet. (2) <strong>Schutzklasse II</strong> – doppelte bzw. verstärkte Isolierung, kein Schutzleiter nötig. (3) <strong>Schutzklasse III</strong> – Betrieb mit Schutzkleinspannung (5 V über USB).</p>
        <p><strong>c)</strong> (1) <strong>Robustheit gegen Benutzungsfehler</strong> (Fehler lassen sich mit geringem Aufwand korrigieren; auch Steuerbarkeit ist vertretbar). (2) <strong>Aufgabenangemessenheit</strong> – die Software unterstützt genau die Arbeitsaufgabe ohne unnötige Elemente. (3) <strong>Selbstbeschreibungsfähigkeit</strong> – der Nutzer erkennt jederzeit, was von ihm erwartet wird.</p>
        <p><strong>d)</strong> Verantwortlich ist der <strong>Arbeitgeber</strong> (§ 5 ArbSchG, § 3 ArbStättV); er kann sich von der Fachkraft für Arbeitssicherheit und dem Betriebsarzt unterstützen lassen. Psychische Belastungen sind z. B. Zeit- und Termindruck, häufige Unterbrechungen, schlecht bedienbare Software, Lärm im Großraumbüro oder fehlende Pausen bzw. zu lange ununterbrochene Bildschirmarbeit.</p>`
    },
  ],
  quiz: [
    { id: "q-kb-1", topic: "kundenbedarf", type: "single", exam: ["AP1", "AP2"],
      q: "Wer erstellt das Lastenheft?",
      options: ["Der Auftraggeber (Kunde)", "Der Auftragnehmer (IT-Dienstleister)", "Die IHK als zuständige Stelle", "Der Hersteller der Hardware"], answer: 0,
      explain: "Im Lastenheft beschreibt der Auftraggeber, was er erreichen will und wofür. Der Auftragnehmer antwortet darauf mit dem Pflichtenheft (wie und womit). IHK und Hersteller sind am Auftrag nicht beteiligt." },
    { id: "q-kb-2", topic: "kundenbedarf", type: "single", exam: ["AP1", "AP2"],
      q: "Welche Aussage beschreibt das Pflichtenheft zutreffend?",
      options: ["Es beschreibt, wie und womit die Anforderungen des Kunden umgesetzt werden.", "Es enthält ausschließlich die Wünsche des Kunden ohne Lösungsweg.", "Es ist die Schlussrechnung nach Abschluss des Auftrags.", "Es listet die Garantiebedingungen des Herstellers auf."], answer: 0,
      explain: "Das Pflichtenheft erstellt der Auftragnehmer; es konkretisiert die Lösung (Produkte, Konfiguration, Zeitplan, Tests). Die reinen Kundenwünsche stehen im Lastenheft. Rechnung und Garantiebedingungen sind eigene Dokumente." },
    { id: "q-kb-3", topic: "kundenbedarf", type: "multi", exam: ["AP1"],
      q: "Welche Anforderungen sind <strong>nicht-funktional</strong>?",
      options: ["Der PC darf höchstens 25 dB(A) laut sein.", "Die Anwendung startet in unter 3 Sekunden.", "Belege können eingescannt werden.", "Rechnungen können gedruckt werden.", "Das System ist zu 99 % der Arbeitszeit verfügbar."], answer: [0, 1, 4],
      explain: "Nicht-funktionale Anforderungen beschreiben, wie gut etwas funktioniert: Lautstärke, Geschwindigkeit, Verfügbarkeit. Scannen und Drucken sind Funktionen, also funktionale Anforderungen." },
    { id: "q-kb-4", topic: "kundenbedarf", type: "single", exam: ["AP1"],
      q: "Welche Geräteklasse eignet sich am besten für einen Schulungsraum, dessen Desktops zentral virtualisiert im Rechenzentrum laufen?",
      options: ["Thin Client", "Gaming-PC", "All-in-One-PC mit dedizierter Grafikkarte", "CAD-Workstation"], answer: 0,
      explain: "Ein Thin Client zeigt nur den virtuellen Desktop an; die Rechenleistung kommt aus dem Rechenzentrum. Er ist sparsam, zentral verwaltbar und speichert keine Daten lokal. Leistungsstarke PCs oder Workstations wären hier Verschwendung." },
    { id: "q-kb-5", topic: "kundenbedarf", type: "tf", exam: ["AP1"],
      q: "Eine offene Frage im Kundengespräch lässt sich mit „Ja“ oder „Nein“ beantworten.",
      answer: false,
      explain: "Das gilt für geschlossene Fragen. Offene Fragen beginnen mit einem W-Wort („Welche Programme nutzen Sie?“) und liefern ausführliche Informationen." },
    { id: "q-kb-6", topic: "kundenbedarf", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Inhalte gehören typischerweise in ein Lastenheft?",
      options: ["Beschreibung der Ausgangssituation", "Ziele und Anforderungen", "Rahmenbedingungen wie Budget und Termin", "Konkrete Konfigurationsanweisungen des Dienstleisters", "Seriennummern der gelieferten Geräte"], answer: [0, 1, 2],
      explain: "Das Lastenheft beschreibt aus Kundensicht Ausgangslage, Ziele, Anforderungen und Rahmenbedingungen. Konfigurationsdetails gehören ins Pflichtenheft, Seriennummern ins Übergabeprotokoll." },
    { id: "q-nt-1", topic: "gehaeuse-netzteil", type: "single", exam: ["AP1"],
      q: "Welche Gleichspannung versorgt im PC vor allem CPU und Grafikkarte?",
      options: ["12 V", "3,3 V", "5 V", "230 V"], answer: 0,
      explain: "Die leistungshungrigen Verbraucher hängen an der 12-V-Schiene (über EPS- und PCIe-Stecker). 3,3 V und 5 V versorgen vor allem Logik und Laufwerke; 230 V ist die Wechselspannung aus der Steckdose, die das Netzteil erst umwandelt." },
    { id: "q-nt-2", topic: "gehaeuse-netzteil", type: "input", exam: ["AP1", "AP2"],
      q: "Die Komponenten eines PCs benötigen zusammen 400 W. Mit 25 % Reserve: Welche Netzteil-Nennleistung in Watt ist mindestens nötig?",
      answer: ["500", "500 W", "500 Watt"],
      explain: "400 W × 1,25 = 500 W. Die Reserve deckt Lastspitzen, Alterung und spätere Erweiterungen ab. In der Praxis wählt man das nächste Standardmodell ab 500 W." },
    { id: "q-nt-3", topic: "gehaeuse-netzteil", type: "single", exam: ["AP1", "AP2"],
      q: "Ein Netzteil gibt 450 W an die Komponenten ab und hat bei dieser Last einen Wirkungsgrad von 90 %. Wie viel Leistung nimmt es aus dem Stromnetz auf?",
      options: ["500 W", "405 W", "450 W", "495 W"], answer: 0,
      explain: "P_zu = P_ab ÷ η = 450 W ÷ 0,9 = 500 W. Wer mit 0,9 multipliziert (405 W), vergisst, dass die Aufnahme immer größer als die Abgabe ist. 495 W entstünde durch einfaches Aufschlagen von 10 % – das ist mathematisch nicht dasselbe." },
    { id: "q-nt-4", topic: "gehaeuse-netzteil", type: "single", exam: ["AP1"],
      q: "Was sagt die Zertifizierung „80 PLUS Gold“ bei einem Netzteil aus?",
      options: ["Das Netzteil erreicht bei festgelegten Lastpunkten einen vorgeschriebenen Mindestwirkungsgrad.", "Das Netzteil liefert mindestens 80 A auf der 12-V-Schiene.", "Das Netzteil hat 80 % Leistungsreserve.", "Das Netzteil besteht zu 80 % aus recyceltem Material."], answer: 0,
      explain: "80 PLUS ist ein Effizienzprogramm: Je höher die Stufe (Bronze bis Titanium), desto höher der Mindestwirkungsgrad bei 20, 50 und 100 % Last. Über Stromstärke, Reserve oder Material sagt es nichts aus." },
    { id: "q-nt-5", topic: "gehaeuse-netzteil", type: "tf", exam: ["AP1"],
      q: "Ein Micro-ATX-Mainboard passt in ein ATX-Gehäuse.",
      answer: true,
      explain: "ATX-Gehäuse haben die Befestigungspunkte auch für die kleineren Formfaktoren Micro-ATX und Mini-ITX. Umgekehrt passt ein ATX-Board nicht in ein Mini-ITX-Gehäuse." },
    { id: "q-nt-6", topic: "gehaeuse-netzteil", type: "multi", exam: ["AP1"],
      q: "Welche Aussagen zur Wasserkühlung treffen im Vergleich zur Luftkühlung zu?",
      options: ["Sie kann mehr Wärme abführen.", "Sie ist in der Regel teurer.", "Es besteht ein Leckagerisiko.", "Sie ist völlig wartungsfrei.", "Sie kommt ganz ohne Lüfter aus."], answer: [0, 1, 2],
      explain: "Wasserkühlungen sind leistungsfähiger, aber teurer und bergen ein Leckagerisiko. Die Pumpe verschleißt, Flüssigkeit muss ggf. geprüft werden – also nicht wartungsfrei. Auch der Radiator wird meist von Lüftern gekühlt." },
    { id: "q-mb-1", topic: "mainboard-cpu", type: "single", exam: ["AP1"],
      q: "Eine CPU hat 8 Performance-Kerne mit Hyper-Threading und 16 Effizienz-Kerne ohne SMT. Wie viele Threads kann sie gleichzeitig ausführen?",
      options: ["32", "24", "48", "16"], answer: 0,
      explain: "8 P-Kerne × 2 Threads + 16 E-Kerne × 1 Thread = 16 + 16 = 32. 24 ist die Zahl der Kerne; 48 entstünde, wenn man fälschlich allen Kernen SMT zuschreibt." },
    { id: "q-mb-2", topic: "mainboard-cpu", type: "single", exam: ["AP1"],
      q: "Welche Aufgabe hat der Chipsatz auf dem Mainboard?",
      options: ["Er stellt zusätzliche Schnittstellen wie USB, SATA und PCIe-Lanes bereit und bindet sie an die CPU an.", "Er speichert das Betriebssystem dauerhaft.", "Er wandelt die Netzspannung in 12 V um.", "Er berechnet die 3D-Grafik für Spiele."], answer: 0,
      explain: "Der Chipsatz erweitert die Anschlussmöglichkeiten der CPU und bestimmt den Funktionsumfang des Boards. Das Betriebssystem liegt auf dem Massenspeicher, die Spannung wandelt das Netzteil, 3D-Grafik berechnet die GPU." },
    { id: "q-mb-3", topic: "mainboard-cpu", type: "single", exam: ["AP1"],
      q: "Wie viel Speicher kann ein 32 Bit breiter Adressbus (byteweise Adressierung) ansprechen?",
      options: ["4 GiB", "32 GiB", "4 MiB", "2 GiB"], answer: 0,
      explain: "2³² = 4.294.967.296 Adressen = 4 GiB. Deshalb können reine 32-Bit-Systeme nicht mehr als etwa 4 GiB Arbeitsspeicher direkt nutzen." },
    { id: "q-mb-4", topic: "mainboard-cpu", type: "multi", exam: ["AP1"],
      q: "Welche Einstellungen findest du typischerweise im UEFI-Setup?",
      options: ["Bootreihenfolge", "Secure Boot", "TPM aktivieren", "Standarddrucker festlegen", "E-Mail-Konto einrichten"], answer: [0, 1, 2],
      explain: "Im UEFI werden hardwarenahe Dinge eingestellt: Bootreihenfolge, Secure Boot, TPM, Virtualisierung, Speicherprofile. Drucker und E-Mail-Konten richtet man im Betriebssystem ein." },
    { id: "q-mb-5", topic: "mainboard-cpu", type: "tf", exam: ["AP1"],
      q: "PCI Express ist ein paralleler Bus, bei dem sich alle Steckplätze dieselben Leitungen teilen.",
      answer: false,
      explain: "PCIe arbeitet seriell als Punkt-zu-Punkt-Verbindung. Jede Verbindung besteht aus eigenen Lanes (x1, x4, x8, x16) mit je einem Sende- und Empfangspaar. Der geteilte parallele Bus war der Vorgänger PCI." },
    { id: "q-mb-6", topic: "mainboard-cpu", type: "single", exam: ["AP1"],
      q: "Wie verändert sich die Datenrate pro Lane beim Schritt von PCIe 4.0 auf PCIe 5.0?",
      options: ["Sie verdoppelt sich.", "Sie bleibt gleich, nur die Stecker ändern sich.", "Sie steigt um etwa 25 %.", "Sie halbiert sich zugunsten geringerer Leistungsaufnahme."], answer: 0,
      explain: "Jede PCIe-Generation verdoppelt die Transferrate: 16 GT/s (4.0) → 32 GT/s (5.0), also ≈ 2 GB/s → ≈ 4 GB/s pro Lane und Richtung. Die Stecker bleiben kompatibel." },
    { id: "q-mb-7", topic: "mainboard-cpu", type: "input", exam: ["AP1"],
      q: "Wie lange dauert ein Taktzyklus einer CPU mit 4 GHz? Gib das Ergebnis in Nanosekunden an.",
      answer: ["0,25", "0,25 ns", "0.25ns", "1/4"],
      explain: "t = 1 ÷ f = 1 ÷ (4 × 10⁹ Hz) = 0,25 × 10⁻⁹ s = 0,25 ns." },
    { id: "q-ram-1", topic: "ram-speicher", type: "single", exam: ["AP1"],
      q: "Welche theoretische Bandbreite hat ein DDR5-5600-Modul im Single-Channel-Betrieb?",
      options: ["44,8 GB/s", "5,6 GB/s", "89,6 GB/s", "22,4 GB/s"], answer: 0,
      explain: "5600 MT/s × 8 Byte (64 Bit) = 44.800 MB/s = 44,8 GB/s. 89,6 GB/s wären es erst im Dual Channel mit zwei Modulen. 5,6 GB/s entstehen, wenn man die 8 Byte pro Transfer vergisst." },
    { id: "q-ram-2", topic: "ram-speicher", type: "multi", exam: ["AP1"],
      q: "Welche Vorteile hat eine NVMe-SSD gegenüber einer HDD?",
      options: ["deutlich kürzere Zugriffszeit", "höhere Datenrate", "unempfindlich gegenüber Erschütterungen", "geringerer Preis pro Terabyte", "unbegrenzte Anzahl an Schreibzyklen"], answer: [0, 1, 2],
      explain: "SSDs haben keine Mechanik: Zugriff in Mikrosekunden, hohe Datenraten, stoßfest. Pro Terabyte sind HDDs aber günstiger, und Flash-Zellen vertragen nur eine begrenzte Schreibmenge (TBW)." },
    { id: "q-ram-3", topic: "ram-speicher", type: "tf", exam: ["AP1"],
      q: "M.2 bezeichnet einen Formfaktor; ein M.2-Steckplatz kann je nach Mainboard SATA- oder NVMe-SSDs unterstützen.",
      answer: true,
      explain: "M.2 legt nur Bauform und Stecker fest. Welches Protokoll (SATA oder NVMe über PCIe) der Steckplatz spricht, steht im Handbuch des Mainboards. Eine M.2-SATA-SSD ist nicht schneller als eine 2,5″-SATA-SSD." },
    { id: "q-ram-4", topic: "ram-speicher", type: "single", exam: ["AP1", "AP2"],
      q: "Wofür steht ECC beim Arbeitsspeicher?",
      options: ["Fehlerkorrektur: Einzelbitfehler werden erkannt und korrigiert.", "Ein Energiesparmodus für Notebooks", "Ein Übertaktungsprofil des Herstellers", "Eine besondere Kühlung der Speicherchips"], answer: 0,
      explain: "ECC (Error Correction Code) speichert Prüfbits mit und korrigiert Einzelbitfehler – wichtig für Server und Workstations. Übertaktungsprofile heißen XMP bzw. EXPO." },
    { id: "q-ram-5", topic: "ram-speicher", type: "single", exam: ["AP1"],
      q: "Warum sind 2 × 8 GB RAM bei integrierter Grafik meist schneller als 1 × 16 GB?",
      options: ["Weil im Dual-Channel-Betrieb die Speicherbandbreite verdoppelt wird.", "Weil zwei Module zusammen mehr Kapazität haben.", "Weil die CPU nur 8-GB-Module direkt ansprechen kann.", "Weil ein einzelnes Modul automatisch mit halber Spannung läuft."], answer: 0,
      explain: "Beide Varianten haben 16 GB. Mit zwei Modulen arbeiten zwei Speicherkanäle parallel (128 statt 64 Bit). Davon profitiert besonders die iGPU, die den Arbeitsspeicher als Grafikspeicher mitnutzt." },
    { id: "q-ram-6", topic: "ram-speicher", type: "input", exam: ["AP1"],
      q: "Eine SSD ist mit 600 TBW angegeben. Täglich werden 100 GB geschrieben. Nach wie vielen Tagen ist die TBW-Angabe erreicht?",
      answer: ["6000", "6.000", "6000 Tage", "6.000 Tage"],
      explain: "600 TB = 600.000 GB; 600.000 GB ÷ 100 GB/Tag = 6.000 Tage ≈ 16,4 Jahre." },
    { id: "q-ram-7", topic: "ram-speicher", type: "multi", exam: ["AP1"],
      q: "Welche Merkmale unterscheiden DDR5 von DDR4?",
      options: ["höhere Transferraten", "geringere Betriebsspannung (1,1 V statt 1,2 V)", "zwei 32-Bit-Subkanäle je Modul", "DDR5-Module passen in DDR4-Steckplätze", "halbe Kapazität je Modul"], answer: [0, 1, 2],
      explain: "DDR5 ist schneller, sparsamer und teilt jedes Modul in zwei Subkanäle. Die Kerbe sitzt an anderer Stelle, daher passen die Module nicht in DDR4-Slots. Die Kapazität je Modul ist eher größer." },
    { id: "q-if-1", topic: "schnittstellen", type: "single", exam: ["AP1"],
      q: "Welche Brutto-Datenrate hat USB 3.2 Gen 2?",
      options: ["10 Gbit/s", "5 Gbit/s", "20 Gbit/s", "480 Mbit/s"], answer: 0,
      explain: "USB 3.2 Gen 1 = 5 Gbit/s, Gen 2 = 10 Gbit/s, Gen 2×2 = 20 Gbit/s, USB 2.0 = 480 Mbit/s. Die verwirrenden Namen sind eine klassische Prüfungsfalle." },
    { id: "q-if-2", topic: "schnittstellen", type: "tf", exam: ["AP1"],
      q: "Ein USB-C-Anschluss garantiert eine Datenrate von mindestens 10 Gbit/s.",
      answer: false,
      explain: "USB-C ist nur die Steckerform. Dahinter kann alles von USB 2.0 (480 Mbit/s) bis USB4/Thunderbolt stecken. Die Datenrate steht im Datenblatt." },
    { id: "q-if-3", topic: "schnittstellen", type: "single", exam: ["AP1"],
      q: "Welcher Anschluss erlaubt es, mehrere Monitore per Multi-Stream Transport (MST) in Reihe zu schalten?",
      options: ["DisplayPort", "HDMI", "VGA", "DVI-D"], answer: 0,
      explain: "MST ist eine Funktion von DisplayPort (ab 1.2), auch über USB-C im DP Alt Mode. HDMI, VGA und DVI unterstützen kein Daisy Chaining." },
    { id: "q-if-4", topic: "schnittstellen", type: "input", exam: ["AP1"],
      q: "Ein USB-Port liefert 5 V bei maximal 0,9 A. Welche Leistung in Watt stellt er bereit?",
      answer: ["4,5", "4,5 W", "4.5W", "4,5 Watt"],
      explain: "P = U × I = 5 V × 0,9 A = 4,5 W – der Standardwert eines USB-3.x-Ports." },
    { id: "q-if-5", topic: "schnittstellen", type: "single", exam: ["AP1"],
      q: "Welche maximale Leistung erlaubt USB Power Delivery im Extended Power Range (EPR)?",
      options: ["240 W", "100 W", "60 W", "15 W"], answer: 0,
      explain: "EPR erlaubt bis zu 48 V × 5 A = 240 W. 100 W (20 V × 5 A) ist die Grenze des Standard Power Range (SPR), USB-C ohne PD liefert höchstens 15 W (5 V × 3 A)." },
    { id: "q-if-6", topic: "schnittstellen", type: "multi", exam: ["AP1"],
      q: "Was kann über ein einziges Thunderbolt-4-Kabel zwischen Notebook und Dockingstation übertragen werden?",
      options: ["Bildsignale für externe Monitore", "USB-Daten für Tastatur und Maus", "Netzwerkverkehr über den LAN-Port des Docks", "Strom zum Laden des Notebooks", "230-V-Netzspannung für den Monitor"], answer: [0, 1, 2, 3],
      explain: "Thunderbolt bündelt DisplayPort, PCIe und USB und kann per Power Delivery laden. So verbindet ein Kabel den kompletten Arbeitsplatz. Netzspannung wird nie über USB-C/Thunderbolt übertragen – der Monitor hat ein eigenes Netzkabel." },
    { id: "q-mon-1", topic: "monitore-peripherie", type: "single", exam: ["AP1"],
      q: "Wie viele Pixel hat ein 4K-UHD-Monitor (3840 × 2160) im Vergleich zu Full HD (1920 × 1080)?",
      options: ["viermal so viele", "doppelt so viele", "dreimal so viele", "achtmal so viele"], answer: 0,
      explain: "Breite und Höhe verdoppeln sich jeweils: 2 × 2 = 4. 8.294.400 ÷ 2.073.600 = 4. Wer nur auf die Breite schaut, kommt fälschlich auf „doppelt“." },
    { id: "q-mon-2", topic: "monitore-peripherie", type: "input", exam: ["AP1"],
      q: "Berechne die Pixeldichte eines 24-Zoll-Monitors mit 1920 × 1080 Pixeln (auf ganze ppi gerundet).",
      answer: ["92", "92 ppi"],
      explain: "√(1920² + 1080²) = √4.852.800 ≈ 2202,9 Pixel Diagonale; 2202,9 ÷ 24 ≈ 91,8 → 92 ppi." },
    { id: "q-mon-3", topic: "monitore-peripherie", type: "single", exam: ["AP1"],
      q: "Welcher Paneltyp bietet einen sehr hohen Kontrast, reagiert aber vergleichsweise träge?",
      options: ["VA", "IPS", "TN", "OLED"], answer: 0,
      explain: "VA-Panels erreichen hohe statische Kontraste (z. B. 3000:1), sind aber langsamer. IPS ist farbtreu mit mittlerem Kontrast, TN schnell aber blickwinkelabhängig, OLED hat perfektes Schwarz und ist sehr schnell." },
    { id: "q-mon-4", topic: "monitore-peripherie", type: "single", exam: ["AP1"],
      q: "Welcher Nachteil ist typisch für OLED-Monitore im Büroeinsatz?",
      options: ["Einbrenngefahr bei statischen Inhalten wie Taskleisten", "schlechte Blickwinkelstabilität", "geringer Kontrast", "sehr lange Reaktionszeiten"], answer: 0,
      explain: "Selbstleuchtende organische Pixel altern ungleichmäßig; dauerhaft gleiche Inhalte können sich einbrennen. Kontrast, Blickwinkel und Reaktionszeit sind dagegen Stärken von OLED." },
    { id: "q-mon-5", topic: "monitore-peripherie", type: "multi", exam: ["AP1"],
      q: "Welche Kriterien sind bei der Auswahl eines Bürodruckers für 3.000 Seiten pro Monat besonders wichtig?",
      options: ["Kosten pro Seite", "empfohlenes monatliches Druckvolumen", "Duplexdruck", "Abdeckung des Farbraums Adobe RGB", "Bildwiederholrate"], answer: [0, 1, 2],
      explain: "Bei hohem Volumen dominieren die Seitenkosten, das Gerät muss für die Menge ausgelegt sein, und Duplex spart Papier. Adobe RGB betrifft Foto-/Grafikarbeit, die Bildwiederholrate Monitore." },
    { id: "q-mon-6", topic: "monitore-peripherie", type: "single", exam: ["AP1"],
      q: "Wie viele Farben lassen sich mit 24 Bit Farbtiefe darstellen?",
      options: ["16.777.216", "65.536", "1.073.741.824", "256"], answer: 0,
      explain: "2²⁴ = 16.777.216 (je 8 Bit für Rot, Grün, Blau). 65.536 = 2¹⁶ (16 Bit), 1.073.741.824 = 2³⁰ (10 Bit je Kanal), 256 = 2⁸." },
    { id: "q-erg-1", topic: "ergonomie", type: "single", exam: ["AP1", "AP2"],
      q: "Wie sollte ein Bildschirmarbeitsplatz zum Fenster ausgerichtet sein?",
      options: ["Blickrichtung parallel zur Fensterfront", "Bildschirm direkt vor dem Fenster", "Mit dem Rücken zum Fenster", "Die Ausrichtung ist egal, wenn der Bildschirm hell genug ist."], answer: 0,
      explain: "Vor dem Fenster blendet das Gegenlicht, mit dem Rücken zum Fenster spiegelt es sich im Bildschirm. Nur die seitliche Aufstellung mit Blick parallel zum Fenster vermeidet beides." },
    { id: "q-erg-2", topic: "ergonomie", type: "single", exam: ["AP1", "AP2"],
      q: "Welche Beleuchtungsstärke gilt nach den Technischen Regeln für Arbeitsstätten als Mindestwert für Büroarbeitsplätze?",
      options: ["500 lx", "100 lx", "300 lx", "1.500 lx"], answer: 0,
      explain: "Die ASR A3.4 nennt für Büroarbeit mindestens 500 Lux im Arbeitsbereich. 300 lx reichen für Bildschirmarbeit nicht aus; 1.500 lx wären unnötig hell und blendend." },
    { id: "q-erg-3", topic: "ergonomie", type: "tf", exam: ["AP1", "AP2"],
      q: "Das CE-Zeichen wird von einer unabhängigen Prüfstelle nach einer Sicherheitsprüfung vergeben.",
      answer: false,
      explain: "Mit dem CE-Zeichen erklärt der Hersteller selbst die Konformität mit EU-Richtlinien. Eine unabhängige Prüfung belegt dagegen das freiwillige GS-Zeichen („Geprüfte Sicherheit“)." },
    { id: "q-erg-4", topic: "ergonomie", type: "multi", exam: ["AP1"],
      q: "Welche Hilfsmittel unterstützen einen blinden Mitarbeiter bei der Arbeit am PC?",
      options: ["Braillezeile", "Screenreader", "Headset oder Lautsprecher für die Sprachausgabe", "Monitor mit 144 Hz", "Farbfilter gegen Rot-Grün-Schwäche"], answer: [0, 1, 2],
      explain: "Blinde Menschen erfassen Inhalte über Blindenschrift (Braillezeile) und Sprachausgabe (Screenreader mit Audioausgabe). Bildwiederholrate und Farbfilter helfen nur sehenden Nutzern." },
    { id: "q-erg-5", topic: "ergonomie", type: "single", exam: ["AP1", "AP2"],
      q: "Welche Schutzklasse hat ein Gerät mit doppelter bzw. verstärkter Isolierung und ohne Schutzleiteranschluss?",
      options: ["Schutzklasse II", "Schutzklasse I", "Schutzklasse III", "Schutzart IP54"], answer: 0,
      explain: "Schutzklasse II (Symbol: zwei ineinanderliegende Quadrate) schützt durch Isolierung, z. B. Notebook-Netzteile. Klasse I nutzt den Schutzleiter, Klasse III Schutzkleinspannung. IP54 ist eine Schutzart gegen Staub und Wasser." },
    { id: "q-erg-6", topic: "ergonomie", type: "single", exam: ["AP1", "AP2"],
      q: "Wo sind die Anforderungen an Bildschirmarbeitsplätze heute geregelt?",
      options: ["In der Arbeitsstättenverordnung (Anhang Nr. 6)", "In einer eigenständigen Bildschirmarbeitsverordnung", "Im Elektro- und Elektronikgerätegesetz", "In der Datenschutz-Grundverordnung"], answer: 0,
      explain: "Die frühere Bildschirmarbeitsverordnung wurde 2016 in die Arbeitsstättenverordnung integriert (Anhang Nr. 6). Das ElektroG regelt die Entsorgung, die DSGVO den Datenschutz." },
    { id: "q-zs-1", topic: "zahlensysteme", type: "input", exam: ["AP1"],
      q: "Rechne 0x2F ins Dezimalsystem um.",
      answer: ["47"],
      explain: "2F₁₆ = 2 × 16 + 15 × 1 = 32 + 15 = 47." },
    { id: "q-zs-2", topic: "zahlensysteme", type: "single", exam: ["AP1"],
      q: "Welche Dualzahl entspricht der Dezimalzahl 181?",
      options: ["1011 0101", "1010 1101", "1101 0101", "1011 0110"], answer: 0,
      explain: "128 + 32 + 16 + 4 + 1 = 181 → Bits für 128, 32, 16, 4 und 1 gesetzt: 1011 0101. Die Option 1010 1101 ist die rückwärts gelesene Restfolge – ein typischer Fehler beim Divisionsrestverfahren." },
    { id: "q-zs-3", topic: "zahlensysteme", type: "single", exam: ["AP1"],
      q: "Wie viele Bit werden mindestens benötigt, um die 26 Buchstaben des Alphabets eindeutig zu codieren?",
      options: ["5", "4", "6", "26"], answer: 0,
      explain: "2⁴ = 16 reicht nicht, 2⁵ = 32 ≥ 26 reicht. Also 5 Bit, 6 freie Codes bleiben übrig." },
    { id: "q-zs-4", topic: "zahlensysteme", type: "multi", exam: ["AP1"],
      q: "Welche Aussagen zu UTF-8 sind richtig?",
      options: ["Ein Zeichen belegt 1 bis 4 Byte.", "Die ersten 128 Zeichen sind identisch mit ASCII.", "Umlaute wie „ä“ belegen 2 Byte.", "Jedes Zeichen belegt genau 2 Byte.", "UTF-8 kann nur lateinische Schriftzeichen darstellen."], answer: [0, 1, 2],
      explain: "UTF-8 ist eine variable Codierung des Unicode-Zeichensatzes: ASCII-Zeichen 1 Byte, Umlaute 2 Byte, € 3 Byte, Emojis 4 Byte. Sie deckt alle Schriften ab. Feste 2 Byte (für die meisten Zeichen) hat UTF-16." },
    { id: "q-zs-5", topic: "zahlensysteme", type: "tf", exam: ["AP1"],
      q: "Eine Hexadezimalziffer entspricht genau 4 Bit.",
      answer: true,
      explain: "16 = 2⁴, daher lassen sich 4 Bit (ein Nibble) exakt als eine Hex-Ziffer 0–F schreiben. Ein Byte entspricht zwei Hex-Ziffern." },
    { id: "q-zs-6", topic: "zahlensysteme", type: "single", exam: ["AP1"],
      q: "Welches Zeichen hat im ASCII-Code den Wert 0x41?",
      options: ["A", "B", "1", "!"], answer: 0,
      explain: "0x41 = 65 = „A“; „B“ folgt mit 0x42. Ziffern beginnen bei 0x30 („1“ = 0x31), „!“ ist 0x21, Kleinbuchstaben beginnen bei 0x61." },
    { id: "q-zs-7", topic: "zahlensysteme", type: "input", exam: ["AP1"],
      q: "Wie lautet die Dezimalzahl 255 im Hexadezimalsystem?",
      answer: ["FF", "0xFF", "FFh", "FF16"],
      explain: "255 ÷ 16 = 15 Rest 15 → F F. 255 ist der größte Wert eines Bytes (1111 1111₂)." },
    { id: "q-dm-1", topic: "datenmengen", type: "single", exam: ["AP1", "AP2"],
      q: "Wie viele Byte sind 1 KiB?",
      options: ["1.024", "1.000", "8.192", "1.048.576"], answer: 0,
      explain: "KiB (Kibibyte) ist ein IEC-Binärpräfix: 2¹⁰ = 1.024 Byte. 1.000 Byte sind 1 kB (SI-Präfix), 1.048.576 Byte sind 1 MiB, 8.192 ist die Anzahl Bit in 1 KiB." },
    { id: "q-dm-2", topic: "datenmengen", type: "single", exam: ["AP1"],
      q: "Wie groß ist ein unkomprimiertes Bild mit 1920 × 1080 Pixeln und 24 Bit Farbtiefe?",
      options: ["≈ 5,93 MiB", "≈ 47,46 MiB", "≈ 1,98 MiB", "≈ 59,3 MiB"], answer: 0,
      explain: "1920 × 1080 × 3 Byte = 6.220.800 Byte ÷ 1.048.576 ≈ 5,93 MiB. 47,46 erhält man, wenn man die Bit nicht durch 8 teilt; 1,98 bei nur 1 Byte pro Pixel." },
    { id: "q-dm-3", topic: "datenmengen", type: "input", exam: ["AP1"],
      q: "Wie viele Sekunden dauert die Übertragung von 1 GB (10⁹ Byte) mit 40 Mbit/s (ohne Overhead)?",
      answer: ["200", "200 s", "200 Sekunden"],
      explain: "10⁹ Byte × 8 = 8 × 10⁹ Bit; 8 × 10⁹ ÷ (40 × 10⁶ bit/s) = 200 s = 3 min 20 s." },
    { id: "q-dm-4", topic: "datenmengen", type: "tf", exam: ["AP1", "AP2"],
      q: "Datenraten wie 100 Mbit/s werden mit dezimalen Präfixen angegeben, also 1 Mbit/s = 1.000.000 bit/s.",
      answer: true,
      explain: "Übertragungsraten sind immer dezimal. Rechnest du Dateigrößen in MiB oder GiB, musst du beim Übergang zur Datenrate sauber umrechnen (× 1.048.576 bzw. × 1.073.741.824 Byte, × 8 Bit)." },
    { id: "q-dm-5", topic: "datenmengen", type: "multi", exam: ["AP1"],
      q: "Welche Formate komprimieren verlustbehaftet?",
      options: ["JPEG", "MP3", "H.265", "PNG", "ZIP"], answer: [0, 1, 2],
      explain: "JPEG, MP3 und H.265 lassen kaum wahrnehmbare Details weg – das Original ist nicht exakt wiederherstellbar. PNG und ZIP komprimieren verlustfrei." },
    { id: "q-dm-6", topic: "datenmengen", type: "single", exam: ["AP1"],
      q: "Eine Festplatte ist mit „2 TB“ beschriftet. Welche Größe zeigt ein System an, das binär rechnet?",
      options: ["≈ 1,82 TiB", "2,00 TiB", "≈ 2,20 TiB", "≈ 1,60 TiB"], answer: 0,
      explain: "2 × 10¹² Byte ÷ 1024⁴ ≈ 1,82 TiB. Es fehlt nichts – Hersteller und Betriebssystem rechnen nur mit unterschiedlichen Präfixen." },
    { id: "q-dm-7", topic: "datenmengen", type: "single", exam: ["AP1"],
      q: "Wie groß ist eine unkomprimierte Stereo-Audioaufnahme von 3 Minuten mit 44,1 kHz und 16 Bit?",
      options: ["31.752.000 Byte", "15.876.000 Byte", "254.016.000 Byte", "5.292.000 Byte"], answer: 0,
      explain: "44.100 × 16 Bit × 2 Kanäle × 180 s ÷ 8 = 31.752.000 Byte (≈ 30,28 MiB). 15.876.000 wäre Mono, 254.016.000 ist das Ergebnis in Bit statt Byte." },
    { id: "q-en-1", topic: "energie-green-it", type: "single", exam: ["AP1"],
      q: "Ein PC nimmt 150 W auf und läuft 8 h an 200 Tagen im Jahr. Wie hoch sind die Stromkosten bei 0,30 €/kWh?",
      options: ["72,00 €", "240,00 €", "72.000,00 €", "36,00 €"], answer: 0,
      explain: "150 W × 8 h × 200 = 240.000 Wh = 240 kWh; 240 kWh × 0,30 €/kWh = 72,00 €. 240 € entsteht, wenn man kWh mit Euro verwechselt; 72.000 €, wenn man Wh nicht in kWh umrechnet." },
    { id: "q-en-2", topic: "energie-green-it", type: "input", exam: ["AP1"],
      q: "Ein Gerät nimmt 60 W bei 12 V auf. Welche Stromstärke in Ampere fließt?",
      answer: ["5", "5 A", "5 Ampere"],
      explain: "I = P ÷ U = 60 W ÷ 12 V = 5 A." },
    { id: "q-en-3", topic: "energie-green-it", type: "tf", exam: ["AP1"],
      q: "Die Einheit kWh (Kilowattstunde) beschreibt eine Leistung.",
      answer: false,
      explain: "kWh ist eine Energieeinheit (Leistung × Zeit). Die Leistung wird in Watt bzw. Kilowatt angegeben. Stromkosten rechnest du deshalb immer mit kWh." },
    { id: "q-en-4", topic: "energie-green-it", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Maßnahmen gehören zur Green IT?",
      options: ["Geräte länger nutzen und reparieren", "Energiesparpläne aktivieren", "Duplexdruck als Standard einstellen", "Animierte Bildschirmschoner dauerhaft laufen lassen", "Altgeräte im Restmüll entsorgen"], answer: [0, 1, 2],
      explain: "Green IT senkt Energie- und Ressourcenverbrauch über den Lebenszyklus: lange Nutzung, Energiesparen, weniger Papier. Bildschirmschoner sparen keine Energie (Monitor ausschalten schon), und Altgeräte müssen nach ElektroG getrennt entsorgt werden." },
    { id: "q-en-5", topic: "energie-green-it", type: "single", exam: ["AP1", "AP2"],
      q: "Was bedeutet das Symbol einer durchgestrichenen Mülltonne auf einem Elektrogerät?",
      options: ["Das Gerät darf nicht in den Hausmüll und muss getrennt als Elektroaltgerät entsorgt werden.", "Das Gerät ist vollständig biologisch abbaubar.", "Das Gerät ist frei von Schadstoffen.", "Das Gerät darf nur vom Hersteller repariert werden."], answer: 0,
      explain: "Das Symbol schreibt das ElektroG vor: Altgeräte gehören zu Sammelstellen oder zur Händlerrücknahme, damit Schadstoffe fachgerecht behandelt und Rohstoffe zurückgewonnen werden." },
    { id: "q-en-6", topic: "energie-green-it", type: "single", exam: ["AP1"],
      q: "Ein effizienteres Gerät kostet 60 € mehr und spart 15 € Stromkosten pro Jahr. Nach wie vielen Jahren hat es sich amortisiert?",
      options: ["4 Jahre", "0,25 Jahre", "9 Jahre", "15 Jahre"], answer: 0,
      explain: "Amortisationsdauer = Mehrkosten ÷ jährliche Einsparung = 60 € ÷ 15 €/Jahr = 4 Jahre. 0,25 entsteht, wenn man die Division umdreht." },
    { id: "q-en-7", topic: "energie-green-it", type: "single", exam: ["AP1", "AP2"],
      q: "Wer ist nach dem ElektroG für das Löschen personenbezogener Daten auf einem zu entsorgenden Altgerät verantwortlich?",
      options: ["Der Besitzer bzw. Endnutzer des Altgeräts", "Der Wertstoffhof", "Der Hersteller des Geräts", "Die Stiftung EAR"], answer: 0,
      explain: "Der Endnutzer muss selbst dafür sorgen, dass Daten sicher gelöscht oder Datenträger vernichtet werden (z. B. nach DIN 66399). Sammelstellen und Hersteller übernehmen das nicht automatisch." },
    { id: "q-av-1", topic: "angebotsvergleich", type: "single", exam: ["AP1"],
      q: "In welcher Reihenfolge wird bei der Bezugskalkulation gerechnet?",
      options: ["Listenpreis − Rabatt − Skonto + Bezugskosten", "Listenpreis − Skonto − Rabatt + Bezugskosten", "Listenpreis + Bezugskosten − Rabatt − Skonto", "Listenpreis − Rabatt + Bezugskosten − Skonto"], answer: 0,
      explain: "Zuerst der Rabatt vom Listenpreis (→ Zieleinkaufspreis), dann Skonto vom Zieleinkaufspreis (→ Bareinkaufspreis), zuletzt die Bezugskosten (→ Bezugspreis). Skonto wird nie auf Fracht gewährt." },
    { id: "q-av-2", topic: "angebotsvergleich", type: "input", exam: ["AP1"],
      q: "Listenpreis 1.000 €, 10 % Rabatt, 2 % Skonto, 20 € Bezugskosten. Wie hoch ist der Bezugspreis in Euro?",
      answer: ["902", "902,00", "902 €", "902,00 €", "902 Euro"],
      explain: "1.000 € − 100 € = 900 € Zieleinkaufspreis; − 2 % (18 €) = 882 € Bareinkaufspreis; + 20 € = 902 € Bezugspreis." },
    { id: "q-av-3", topic: "angebotsvergleich", type: "single", exam: ["AP1", "AP2"],
      q: "Was muss für die Gewichtung der Kriterien in einer Nutzwertanalyse gelten?",
      options: ["Die Summe aller Gewichte ergibt 100 %.", "Jedes Kriterium erhält dasselbe Gewicht.", "Der Preis muss immer mindestens 50 % ausmachen.", "Die Gewichte werden erst nach der Punktevergabe festgelegt."], answer: 0,
      explain: "Die Gewichte verteilen 100 % auf die Kriterien nach ihrer Wichtigkeit für den Kunden. Sie werden vor der Bewertung festgelegt, damit das Ergebnis nicht nachträglich „passend gemacht“ wird." },
    { id: "q-av-4", topic: "angebotsvergleich", type: "single", exam: ["AP1", "AP2"],
      q: "Kriterium 1 wiegt 30 %, Kriterium 2 wiegt 70 %. Angebot X erhält 8 und 6 Punkte, Angebot Y 5 und 8 Punkte. Welches Angebot gewinnt?",
      options: ["Y mit einem Nutzwert von 7,1", "X mit einem Nutzwert von 6,6", "X mit einem Nutzwert von 7,1", "Y mit einem Nutzwert von 6,6"], answer: 0,
      explain: "X: 0,3 × 8 + 0,7 × 6 = 2,4 + 4,2 = 6,6. Y: 0,3 × 5 + 0,7 × 8 = 1,5 + 5,6 = 7,1. Y gewinnt, weil es beim stark gewichteten Kriterium besser ist – obwohl X die höhere Punktsumme hat (14 zu 13)." },
    { id: "q-av-5", topic: "angebotsvergleich", type: "multi", exam: ["AP1"],
      q: "Welche Kriterien sind qualitative Kriterien der Lieferantenauswahl?",
      options: ["Termintreue", "Servicequalität", "Umwelt- und Sozialstandards", "Listeneinkaufspreis", "Bezugskosten"], answer: [0, 1, 2],
      explain: "Qualitative Kriterien lassen sich nicht direkt in Euro ausdrücken. Listenpreis und Bezugskosten sind quantitative Größen und gehen in die Bezugskalkulation ein." },
    { id: "q-av-6", topic: "angebotsvergleich", type: "tf", exam: ["AP1"],
      q: "Das Kundenskonto wird in der Angebotskalkulation „im Hundert“ berechnet, also wird der Barverkaufspreis durch (1 − Skontosatz) geteilt.",
      answer: true,
      explain: "Der Kunde zieht das Skonto vom höheren Zielverkaufspreis ab. Nur durch Teilen durch 0,98 (bei 2 %) bleibt nach seinem Abzug exakt der geplante Barverkaufspreis übrig." },
    { id: "q-av-7", topic: "angebotsvergleich", type: "single", exam: ["AP1"],
      q: "Selbstkosten 1.000 €, Gewinnzuschlag 10 %, keine Nachlässe, 19 % Umsatzsteuer. Wie hoch ist der Bruttoverkaufspreis?",
      options: ["1.309,00 €", "1.290,00 €", "1.100,00 €", "1.190,00 €"], answer: 0,
      explain: "1.000 € + 10 % = 1.100 € netto; 1.100 € × 1,19 = 1.309 € brutto. 1.290 € entsteht, wenn man 10 % und 19 % einfach addiert – die Umsatzsteuer wird aber auf den Nettopreis inklusive Gewinn berechnet." },
    { id: "q-bs-1", topic: "beschaffung", type: "single", exam: ["AP1"],
      q: "Wodurch kommt ein Kaufvertrag zustande?",
      options: ["Durch zwei übereinstimmende Willenserklärungen (Antrag und Annahme)", "Bereits durch die Anfrage des Kunden", "Erst durch die vollständige Bezahlung", "Durch eine Werbeanzeige des Händlers"], answer: 0,
      explain: "Ein Vertrag entsteht durch Antrag und Annahme. Eine Anfrage ist unverbindlich, Werbung nur eine Aufforderung zur Abgabe eines Angebots. Die Bezahlung ist die Erfüllung eines bereits bestehenden Vertrags." },
    { id: "q-bs-2", topic: "beschaffung", type: "single", exam: ["AP1"],
      q: "Bestellt wurden 10 Monitore, geliefert werden 8 einwandfreie Geräte. Welche Art von Mangel liegt vor?",
      options: ["Minderlieferung", "Falschlieferung", "Schlechtleistung", "Annahmeverzug"], answer: 0,
      explain: "Eine zu geringe Menge ist eine Minderlieferung (Quantitätsmangel). Falschlieferung wäre ein anderes Produkt, Schlechtleistung ein defektes Produkt. Annahmeverzug betrifft den Käufer, der Ware nicht annimmt." },
    { id: "q-bs-3", topic: "beschaffung", type: "single", exam: ["AP1"],
      q: "Welches Recht hat der Käufer bei mangelhafter Lieferung vorrangig?",
      options: ["Nacherfüllung (Nachbesserung oder Ersatzlieferung)", "Sofortigen Rücktritt vom Vertrag", "Minderung des Kaufpreises", "Schadensersatz statt der Leistung"], answer: 0,
      explain: "Der Verkäufer bekommt zuerst eine zweite Chance: Nacherfüllung nach Wahl des Käufers. Erst wenn sie scheitert oder eine angemessene Frist verstreicht, kommen Rücktritt, Minderung oder Schadensersatz in Betracht." },
    { id: "q-bs-4", topic: "beschaffung", type: "tf", exam: ["AP1"],
      q: "Die gesetzliche Gewährleistungsfrist beim Kauf neuer Sachen beträgt zwei Jahre ab Übergabe.",
      answer: true,
      explain: "Nach § 438 BGB verjähren Mängelansprüche bei neuen beweglichen Sachen in zwei Jahren ab Ablieferung. Eine Garantie kann darüber hinausgehen, ist aber freiwillig." },
    { id: "q-bs-5", topic: "beschaffung", type: "multi", exam: ["AP1"],
      q: "Welche Aussagen treffen auf Leasing im Vergleich zum Kauf zu?",
      options: ["Es schont die Liquidität.", "Die Raten sind planbar.", "Über die gesamte Laufzeit ist es meist teurer.", "Der Leasingnehmer wird Eigentümer des Geräts.", "Der Vertrag ist jederzeit ohne Kosten kündbar."], answer: [0, 1, 2],
      explain: "Beim Leasing zahlt man monatliche Raten statt einer großen Summe – planbar und liquiditätsschonend, in Summe aber teurer. Eigentümer bleibt der Leasinggeber, und Leasingverträge haben feste Laufzeiten." },
    { id: "q-bs-6", topic: "beschaffung", type: "single", exam: ["AP1"],
      q: "Was ist eine Garantie?",
      options: ["Eine freiwillige Zusage, z. B. des Herstellers, über festgelegte Leistungen", "Die gesetzliche Mängelhaftung des Verkäufers", "Die Pflicht des Verkäufers aus § 433 BGB", "Die Rügepflicht beim zweiseitigen Handelskauf"], answer: 0,
      explain: "Die Garantie ist ein freiwilliges Versprechen mit selbst festgelegtem Umfang und Dauer. Die gesetzliche Haftung des Verkäufers für Mängel heißt Gewährleistung (Mängelhaftung)." },
    { id: "q-bs-7", topic: "beschaffung", type: "single", exam: ["AP1"],
      q: "Ein Paket kommt sichtbar beschädigt an. Wie gehst du richtig vor?",
      options: ["Den Schaden in Gegenwart des Zustellers auf dem Lieferschein vermerken und bestätigen lassen", "Das Paket annehmen und den Schaden erst nach einigen Wochen melden", "Das Paket kommentarlos annehmen und den Inhalt entsorgen", "Den Schaden nur intern notieren, damit der Lieferant nichts davon erfährt"], answer: 0,
      explain: "Äußerlich erkennbare Transportschäden müssen sofort beim Zusteller dokumentiert werden; sonst lässt sich später kaum beweisen, wo der Schaden entstanden ist. Anschließend wird der Lieferant informiert." },
    { id: "q-os-1", topic: "betriebssysteme", type: "multi", exam: ["AP1"],
      q: "Welche Voraussetzungen nennt Microsoft für Windows 11?",
      options: ["TPM 2.0", "UEFI mit Secure-Boot-Fähigkeit", "mindestens 4 GB RAM", "mindestens 32 GB RAM", "Legacy-BIOS mit MBR-Partitionierung"], answer: [0, 1, 2],
      explain: "Windows 11 verlangt u. a. TPM 2.0, UEFI mit Secure Boot, 4 GB RAM und 64 GB Speicher sowie eine unterstützte 64-Bit-CPU. 32 GB RAM sind keine Voraussetzung; Legacy-BIOS mit MBR wird gerade nicht unterstützt." },
    { id: "q-os-2", topic: "betriebssysteme", type: "single", exam: ["AP1", "AP2"],
      q: "Welche Lizenzart ist an die Hardware gebunden, mit der sie ausgeliefert wurde?",
      options: ["OEM-Lizenz", "Volumenlizenz", "Retail-Lizenz (Vollversion)", "GPL"], answer: 0,
      explain: "OEM-Lizenzen liegen neuen Geräten bei, sind günstig und an dieses Gerät gebunden. Retail-Lizenzen lassen sich meist übertragen, Volumenlizenzen verwalten Unternehmen zentral, die GPL ist eine Open-Source-Lizenz." },
    { id: "q-os-3", topic: "betriebssysteme", type: "single", exam: ["AP1"],
      q: "Welches Dateisystem erlaubt Dateien über 4 GB und kann von Windows und macOS ohne Zusatzsoftware gelesen und beschrieben werden?",
      options: ["exFAT", "FAT32", "NTFS", "ext4"], answer: 0,
      explain: "exFAT ist für Wechseldatenträger gedacht und plattformübergreifend beschreibbar. FAT32 begrenzt Dateien auf 4 GiB − 1 Byte, NTFS kann macOS standardmäßig nur lesen, ext4 ist ein Linux-Dateisystem." },
    { id: "q-os-4", topic: "betriebssysteme", type: "tf", exam: ["AP1"],
      q: "Freeware ist immer Open Source.",
      answer: false,
      explain: "Freeware ist nur kostenlos nutzbar; der Quellcode bleibt meist geschlossen und darf nicht verändert werden. Open Source bedeutet offenen, veränderbaren Quellcode – unabhängig vom Preis." },
    { id: "q-os-5", topic: "betriebssysteme", type: "single", exam: ["AP1", "AP2"],
      q: "Was bedeutet „Copyleft“ bei der GNU General Public License (GPL)?",
      options: ["Veränderte und weitergegebene Versionen müssen wieder unter der GPL stehen.", "Die Software darf überhaupt nicht kopiert werden.", "Die Software darf nur privat, nicht kommerziell genutzt werden.", "Der Quellcode muss geheim gehalten werden."], answer: 0,
      explain: "Copyleft sorgt dafür, dass die Freiheiten erhalten bleiben: Wer GPL-Software verändert weitergibt, muss den Quellcode unter derselben Lizenz zugänglich machen. Kommerzielle Nutzung ist erlaubt." },
    { id: "q-os-6", topic: "betriebssysteme", type: "multi", exam: ["AP1", "AP2"],
      q: "Was gehört in ein Übergabe- bzw. Abnahmeprotokoll?",
      options: ["Seriennummern der übergebenen Geräte", "Ergebnisse der durchgeführten Tests", "Unterschriften von Kunde und Dienstleister", "Die privaten Passwörter des Kunden", "Die Gehaltsabrechnung des Technikers"], answer: [0, 1, 2],
      explain: "Das Protokoll dokumentiert, was in welchem Zustand übergeben wurde (Geräte, Software, Tests, offene Punkte) und wird von beiden Seiten unterschrieben. Passwörter gehören aus Sicherheitsgründen nicht hinein, interne Personaldaten ebenso wenig." },
    { id: "q-os-7", topic: "betriebssysteme", type: "single", exam: ["AP1"],
      q: "Warum sollten Mitarbeitende im Alltag mit einem Standardbenutzerkonto statt mit Administratorrechten arbeiten?",
      options: ["Schadsoftware und Fehlbedienungen können dann weniger Schaden am System anrichten.", "Standardkonten arbeiten spürbar schneller.", "Nur Standardkonten dürfen drucken.", "Administratorkonten können keine E-Mails abrufen."], answer: 0,
      explain: "Programme laufen mit den Rechten des angemeldeten Kontos. Ohne Adminrechte kann Malware keine Systemdateien verändern, und versehentliche Änderungen an der Konfiguration sind nicht möglich (Prinzip der minimalen Rechte)." },
    { id: "q-doc-1", topic: "dokumentation-word", type: "single", exam: [],
      q: "Wie erreichst du in Word, dass die Seitennummerierung auf Seite 3 mit „1“ beginnt?",
      options: ["Abschnittsumbruch einfügen, „Mit vorheriger verknüpfen“ in der Fußzeile lösen und die Nummerierung bei 1 beginnen lassen", "Leerzeilen einfügen, bis Seite 3 erreicht ist", "Einen normalen Seitenumbruch einfügen; Word zählt dann automatisch neu", "Die Seitenzahlen auf Seite 1 und 2 weiß einfärben"], answer: 0,
      explain: "Nur ein Abschnittsumbruch erlaubt eigene Fußzeilen und eine neue Zählung. Ein Seitenumbruch ändert die Nummerierung nicht, Leerzeilen verschieben sich bei jeder Änderung, und weiße Zahlen sind ein unsauberer Trick." },
    { id: "q-doc-2", topic: "dokumentation-word", type: "tf", exam: [],
      q: "Ein indirektes Zitat braucht keine Quellenangabe, weil es in eigenen Worten formuliert ist.",
      answer: false,
      explain: "Auch sinngemäß übernommene Gedanken sind fremdes geistiges Eigentum und müssen belegt werden, meist mit „vgl.“. Ohne Beleg ist es ein Plagiat." },
    { id: "q-doc-3", topic: "dokumentation-word", type: "single", exam: [],
      q: "Welche Voraussetzung braucht Word, um ein automatisches Inhaltsverzeichnis zu erzeugen?",
      options: ["Die Überschriften sind mit Formatvorlagen (Überschrift 1, 2, …) formatiert.", "Die Überschriften sind fett und in größerer Schrift gesetzt.", "Das Dokument wurde als PDF gespeichert.", "Jede Überschrift steht auf einer eigenen Seite."], answer: 0,
      explain: "Word erkennt Überschriften nur an den Formatvorlagen. Von Hand fett oder groß formatierter Text erscheint nicht im Verzeichnis." },
    { id: "q-doc-4", topic: "dokumentation-word", type: "multi", exam: [],
      q: "Welche Angaben gehören zu einer vollständigen Quellenangabe für ein Buch?",
      options: ["Autorin bzw. Autor", "Titel", "Verlag und Erscheinungsort", "Erscheinungsjahr", "Kaufpreis des Buches"], answer: [0, 1, 2, 3],
      explain: "Eine Quellenangabe beantwortet: wer, was, wo, wann – plus Seitenzahl beim Zitat. Der Kaufpreis ist für die Nachprüfbarkeit unerheblich." },
    { id: "q-doc-5", topic: "dokumentation-word", type: "single", exam: [],
      q: "Welche Tastenkombination fügt in Word einen Seitenumbruch ein?",
      options: ["Strg + Enter", "Umschalt + Enter", "Alt + F4", "Strg + Z"], answer: 0,
      explain: "Strg + Enter erzeugt einen Seitenumbruch. Umschalt + Enter ist ein Zeilenumbruch im selben Absatz, Alt + F4 schließt das Fenster, Strg + Z macht rückgängig." },
    { id: "q-os-8", topic: "betriebssysteme", type: "single", exam: ["AP1"],
      q: "Was beschreibt „Desktop as a Service“ (DaaS)?",
      options: ["Ein Anbieter stellt komplette virtuelle Desktops aus seinem Rechenzentrum bereit, auf die Nutzer über das Netz zugreifen.", "Eine einzelne Anwendung wird im Browser genutzt, z. B. ein Online-Textprogramm.", "Der Kunde mietet einen leeren Server und installiert alles selbst.", "Ein Techniker richtet den Desktop-PC beim Kunden vor Ort ein."], answer: 0,
      explain: "Bei DaaS kommt der ganze Arbeitsplatz-Desktop aus der Cloud; als Endgerät reicht oft ein Thin Client. Eine einzelne Anwendung im Browser ist SaaS, ein gemieteter leerer Server entspricht IaaS." },
    { id: "q-os-9", topic: "betriebssysteme", type: "multi", exam: ["AP1"],
      q: "Welche Maßnahmen sind beim Einsatz eines cloudbasierten KI-Assistenten in einer Arztpraxis aus Datenschutzsicht sinnvoll?",
      options: ["Auftragsverarbeitungsvertrag mit dem Anbieter abschließen", "Serverstandort in der EU wählen", "Keine Patientendaten in den Dienst eingeben", "Alle Patientendaten hochladen, damit die KI bessere Antworten liefert", "Ergebnisse der KI ungeprüft an Patienten weitergeben"], answer: [0, 1, 2],
      explain: "Gesundheitsdaten sind besonders schutzbedürftig und unterliegen der Schweigepflicht. Der AV-Vertrag ist gesetzlich vorgeschrieben (Art. 28 DSGVO); ein EU-Serverstandort und der Verzicht auf Patientendaten im Dienst senken das Risiko deutlich. KI-Ergebnisse können falsch sein und müssen immer geprüft werden." },
    { id: "q-av-8", topic: "angebotsvergleich", type: "input", exam: ["AP1"],
      q: "Tarif A kostet 20 € Grundgebühr pro Monat plus 1 ct pro Seite, Tarif B 3 ct pro Seite ohne Grundgebühr. Ab wie vielen Seiten pro Monat sind beide Tarife gleich teuer?",
      answer: ["1000", "1.000", "1000 Seiten", "1.000 Seiten"],
      explain: "20 + 0,01 × x = 0,03 × x → 20 = 0,02 × x → x = 1.000 Seiten. Darüber ist Tarif A günstiger, darunter Tarif B." },
    { id: "q-bs-8", topic: "beschaffung", type: "single", exam: ["AP1"],
      q: "Ein IT-Dienstleister schuldet laut Vertrag einen fertig eingerichteten, funktionierenden Arbeitsplatz. Um welche Vertragsart handelt es sich?",
      options: ["Werkvertrag", "Dienstvertrag", "Mietvertrag", "Leasingvertrag"], answer: 0,
      explain: "Beim Werkvertrag wird ein Erfolg geschuldet, der vom Kunden abgenommen wird. Beim Dienstvertrag schuldet man nur die Tätigkeit (z. B. 10 Support-Stunden), nicht den Erfolg." },
    { id: "q-bs-9", topic: "beschaffung", type: "single", exam: ["AP1"],
      q: "Auf einer Rechnung werden 1.000 € netto mit 10 % Rabatt berechnet. Wie hoch muss die Umsatzsteuer (19 %) sein?",
      options: ["171,00 €", "190,00 €", "19,00 €", "180,50 €"], answer: 0,
      explain: "Die Umsatzsteuer wird auf den Nettobetrag nach Rabatt berechnet: 900 € × 0,19 = 171 €. 190 € (19 % vom Betrag vor Rabatt) ist ein typischer Rechnungsfehler, der in Prüfungsaufgaben entdeckt werden soll." },
    { id: "q-dm-8", topic: "datenmengen", type: "tf", exam: ["AP1", "AP2"],
      q: "Nach dem IHK-Prüfungskatalog sollen Datenmengen mit Binärpräfixen (KiB, MiB, GiB) angegeben werden, Datenraten dagegen mit Dezimalpräfixen.",
      answer: true,
      explain: "Die Präfix-Regel im Anhang des Katalogs verlangt Binärpräfixe für Datenmengen; Dezimalpräfixe gelten dort als ungenau. Für physikalische Größen wie Datenrate, Leistung oder Strom werden Dezimalpräfixe verwendet." },
    { id: "q-kb-7", topic: "kundenbedarf", type: "single", exam: ["AP1"],
      q: "Ein Kunde sagt: „Das Notebook muss unbedingt ein eingebautes Mobilfunkmodem haben, eine beleuchtete Tastatur wäre schön.“ Wie ordnest du die Anforderungen ein?",
      options: ["Mobilfunkmodem = Muss-Kriterium, beleuchtete Tastatur = Kann-Kriterium", "Modem und Tastatur sind Muss-Kriterien", "Mobilfunkmodem = Kann-Kriterium, beleuchtete Tastatur = Muss-Kriterium", "Modem und Tastatur sind Rahmenbedingungen"], answer: 0,
      explain: "„Unbedingt“ kennzeichnet ein Muss-Kriterium (K.-o.-Kriterium): Angebote ohne Mobilfunkmodem scheiden aus. „Wäre schön“ ist ein Kann-Kriterium, das bei der Bewertung Zusatzpunkte bringen kann." },
    { id: "q-nt-7", topic: "gehaeuse-netzteil", type: "single", exam: ["AP1", "AP2"],
      q: "Ein 650-W-Netzteil ist im Betrieb zu 50 % ausgelastet und erreicht dabei einen Wirkungsgrad von 90 %. Welche Leistung nimmt es aus dem Stromnetz auf?",
      options: ["≈ 361,1 W", "≈ 722,2 W", "292,5 W", "325 W"], answer: 0,
      explain: "Abgegeben werden 650 W × 0,5 = 325 W; aufgenommen werden 325 W ÷ 0,9 ≈ 361,1 W. 722,2 W wäre die Aufnahme unter Volllast, 292,5 W entsteht, wenn man mit η multipliziert statt dividiert, und 325 W ist nur die abgegebene Leistung." },
    { id: "q-nt-8", topic: "gehaeuse-netzteil", type: "multi", exam: ["AP1"],
      q: "Welche Maßnahmen schützen Bauteile beim PC-Einbau vor elektrostatischer Entladung (ESD)?",
      options: ["Erdungsarmband tragen", "Auf einer geerdeten ESD-Matte arbeiten", "Bauteile bis zum Einbau im Antistatikbeutel lassen", "Kleidung aus Kunstfasern tragen", "Die Kontakte von CPU und RAM mit den Fingern säubern"], answer: [0, 1, 2],
      explain: "Erdungsarmband und ESD-Matte leiten Ladungen kontrolliert ab, Antistatikbeutel schirmen die Bauteile ab. Kunstfaserkleidung lädt sich besonders stark auf, und Berühren der Kontakte kann Entladungen direkt ins Bauteil leiten und hinterlässt Fett und Schmutz." },
    { id: "q-ram-8", topic: "ram-speicher", type: "single", exam: ["AP1"],
      q: "Welche Kenngröße gibt an, wie viele Lese- und Schreibvorgänge ein Datenträger bei zufälligen Zugriffen pro Sekunde schafft?",
      options: ["IOPS", "TBW", "MTBF", "U/min"], answer: 0,
      explain: "IOPS = Input/Output Operations per Second – hier liegen SSDs um Größenordnungen vor HDDs. TBW ist die zugesicherte Gesamtschreibmenge einer SSD, MTBF die mittlere Betriebszeit zwischen Ausfällen und U/min die Drehzahl einer HDD." },
    { id: "q-ram-9", topic: "ram-speicher", type: "multi", exam: ["AP1"],
      q: "Welche Speicher sind <strong>flüchtig</strong>, verlieren ihren Inhalt also ohne Stromversorgung?",
      options: ["DRAM (Arbeitsspeicher)", "SRAM (Cache)", "CPU-Register", "NAND-Flash einer SSD", "Flash-Chip mit der UEFI-Firmware"], answer: [0, 1, 2],
      explain: "DRAM, SRAM und Register brauchen dauerhaft Strom (DRAM zusätzlich regelmäßiges Auffrischen). Flash-Speicher in SSDs und der Firmware-Chip behalten ihre Daten auch ohne Strom – sonst wären Betriebssystem und UEFI nach jedem Ausschalten weg." },
    { id: "q-if-7", topic: "schnittstellen", type: "input", exam: ["AP1"],
      q: "Ein USB-Ladeanschluss liefert 5 V bei 2,4 A. Welche Leistung in Watt stellt er bereit?",
      answer: ["12", "12 W", "12 Watt"],
      explain: "P = U × I = 5 V × 2,4 A = 12 W. Zum Vergleich: Ein normaler USB-3.x-Port liefert nur 5 V × 0,9 A = 4,5 W." },
    { id: "q-mon-7", topic: "monitore-peripherie", type: "single", exam: ["AP1"],
      q: "Ein 4K-Monitor (3840 × 2160, 24 Bit, 60 Hz) benötigt vereinfacht rund 11,9 Gbit/s. Welcher der folgenden Anschlüsse reicht dafür aus, wenn 80 % der Brutto-Datenrate nutzbar sind?",
      options: ["HDMI 2.0 (18 Gbit/s)", "HDMI 1.4 (10,2 Gbit/s)", "USB 2.0 (480 Mbit/s)", "Gigabit-Ethernet (1 Gbit/s)"], answer: 0,
      explain: "HDMI 2.0: 18 Gbit/s × 0,8 = 14,4 Gbit/s ≥ 11,9 Gbit/s. HDMI 1.4 liefert nur 10,2 × 0,8 = 8,16 Gbit/s und schafft 4K deshalb nur mit 30 Hz. USB 2.0 und Gigabit-Ethernet sind keine Monitoranschlüsse und viel zu langsam." },
    { id: "q-zs-8", topic: "zahlensysteme", type: "single", exam: ["AP1"],
      q: "Welche Rechte setzt der Linux-Befehl <code>chmod 754 datei</code>?",
      options: ["rwxr-xr--", "rwxrw-r--", "rw-r-xr--", "rwxr--r-x"], answer: 0,
      explain: "Jede Oktalziffer steht für 3 Bit (r = 4, w = 2, x = 1): 7 = 111 = rwx (Besitzer), 5 = 101 = r-x (Gruppe), 4 = 100 = r-- (andere)." },
    { id: "q-zs-9", topic: "zahlensysteme", type: "input", exam: ["AP1"],
      q: "Eine MAC-Adresse ist 48 Bit lang. Aus wie vielen Hexadezimalziffern besteht sie?",
      answer: ["12", "12 Ziffern", "12 Hex-Ziffern", "zwölf"],
      explain: "Eine Hex-Ziffer codiert genau 4 Bit: 48 Bit ÷ 4 = 12 Hex-Ziffern, z. B. 3C-52-82-1A-F0-07 (6 Byte zu je 2 Ziffern)." },
    { id: "q-zs-10", topic: "zahlensysteme", type: "input", exam: ["AP1"],
      q: "Rechne die Dualzahl 1100 1000₂ ins Dezimalsystem um.",
      answer: ["200"],
      explain: "Gesetzte Bits: 128 + 64 + 8 = 200. Probe hexadezimal: 1100 | 1000 = C8₁₆ = 12 × 16 + 8 = 200." },
    { id: "q-dm-9", topic: "datenmengen", type: "single", exam: ["AP1"],
      q: "Welches Format eignet sich am besten für ein Firmenlogo, das von der Visitenkarte bis zum Messebanner in jeder Größe scharf bleiben soll?",
      options: ["SVG", "JPEG", "BMP", "GIF"], answer: 0,
      explain: "SVG ist ein Vektorformat: Das Logo besteht aus mathematisch beschriebenen Formen und lässt sich ohne Qualitätsverlust beliebig skalieren. JPEG, BMP und GIF sind Rastergrafiken mit fester Pixelzahl – vergrößert werden sie unscharf oder treppig." },
    { id: "q-dm-10", topic: "datenmengen", type: "input", exam: ["AP1"],
      q: "Ein Archiv braucht 23 GiB Cloud-Speicher. Der Anbieter verkauft nur 10-GiB-Pakete für je 15 € pro Jahr. Wie viel Euro kostet der Speicher pro Jahr?",
      answer: ["45", "45 €", "45,00", "45,00 €", "45 Euro"],
      explain: "23 GiB ÷ 10 GiB = 2,3 → es müssen 3 volle Pakete gebucht werden: 3 × 15 € = 45 €. Wer 2,3 × 15 € = 34,50 € rechnet, übersieht, dass nur ganze Pakete verkauft werden." },
    { id: "q-dm-11", topic: "datenmengen", type: "single", exam: ["AP1"],
      q: "Ein Foto belegt unkomprimiert 72.000.000 Byte. Wie groß ist es nach einer JPEG-Kompression im Verhältnis 12 : 1?",
      options: ["6.000.000 Byte", "864.000.000 Byte", "60.000.000 Byte", "7.200.000 Byte"], answer: 0,
      explain: "Kompression 12 : 1 bedeutet ein Zwölftel der Ausgangsgröße: 72.000.000 Byte ÷ 12 = 6.000.000 Byte (≈ 5,72 MiB). 864.000.000 entsteht durch Multiplizieren, 7.200.000 durch Teilen durch 10." },
    { id: "q-en-8", topic: "energie-green-it", type: "tf", exam: ["AP1", "AP2"],
      q: "Nach der Abfallhierarchie des Kreislaufwirtschaftsgesetzes hat das Recycling eines Altgeräts Vorrang vor seiner Wiederverwendung.",
      answer: false,
      explain: "Die Reihenfolge lautet: Vermeidung → Vorbereitung zur Wiederverwendung → Recycling → sonstige Verwertung → Beseitigung. Ein aufbereitetes, weiter genutztes Notebook spart mehr Ressourcen als das Zerlegen in Rohstoffe." },
    { id: "q-en-9", topic: "energie-green-it", type: "single", exam: ["AP1"],
      q: "Welche Angabe enthält das EU-Energielabel für Smartphones und Tablets (seit Juni 2025) zusätzlich zur Energieeffizienzklasse?",
      options: ["eine Reparierbarkeitsklasse", "die Anzahl der CPU-Kerne", "den empfohlenen Verkaufspreis", "die unterstützte Mobilfunkgeneration"], answer: 0,
      explain: "Das Label für Smartphones und Tablets zeigt neben der Effizienzklasse u. a. Akkulaufzeit, Ladezyklen, Robustheit und eine Reparierbarkeitsklasse (A–E). So sollen langlebige und reparierbare Geräte erkennbar werden – ein Ziel von Green IT." },
    { id: "q-os-10", topic: "betriebssysteme", type: "single", exam: ["AP1"],
      q: "Ein Kunde betreibt im September 2026 noch PCs mit Windows 10, ohne am ESU-Programm teilzunehmen. Wie beurteilst du die Lage?",
      options: ["Die PCs erhalten keine Sicherheitsupdates mehr und sollten auf Windows 11 migriert oder ersetzt werden.", "Windows 10 wird noch bis 2030 regulär mit Sicherheitsupdates versorgt.", "Ohne ESU lässt sich Windows 10 nicht mehr starten.", "Windows 10 wird automatisch und kostenlos auf jeder Hardware zu Windows 11 aktualisiert."], answer: 0,
      explain: "Der reguläre Support endete am 14.10.2025; danach gibt es Sicherheitsupdates nur über das ESU-Programm. Das System startet weiter, ist aber zunehmend angreifbar. Ein Upgrade auf Windows 11 setzt geeignete Hardware (TPM 2.0, UEFI/Secure Boot, unterstützte CPU) voraus." },
    { id: "q-os-11", topic: "betriebssysteme", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Folgen kann die Nutzung nicht lizenzierter Software für ein Unternehmen haben?",
      options: ["Unterlassungsanspruch des Rechteinhabers", "Schadensersatz bzw. teure Nachlizenzierung", "Imageschaden", "Das Urheberrecht geht auf das Unternehmen über.", "Anspruch auf kostenlose Vollversionen"], answer: [0, 1, 2],
      explain: "Der Rechteinhaber kann Unterlassung und Schadensersatz verlangen; meist wird teuer nachlizenziert, und der Ruf leidet. Das Urheberrecht bleibt immer beim Urheber – ein Kunde erwirbt höchstens Nutzungsrechte." },
    { id: "q-os-12", topic: "betriebssysteme", type: "single", exam: ["AP1"],
      q: "Was versteht man beim Rollout von 50 neuen Arbeitsplätzen unter einer Pilotgruppe?",
      options: ["Eine kleine Gruppe von Nutzern, die zuerst umgestellt wird, damit Fehler vor dem großen Rollout auffallen", "Die Administratoren, die den Rollout durchführen", "Die Mitarbeitenden, die als Letzte neue Geräte erhalten", "Einen externen Dienstleister, der die Altgeräte entsorgt"], answer: 0,
      explain: "Die Pilotgruppe testet Image, Software und Abläufe im echten Betrieb. Fehler betreffen so nur wenige Nutzer und können vor der Umstellung aller Arbeitsplätze behoben werden; dazu gehört ein Rückfallplan." },
    { id: "q-erg-7", topic: "ergonomie", type: "single", exam: ["AP1"],
      q: "Ein Programm speichert wie alle anderen Anwendungen mit <kbd>Strg</kbd> + <kbd>S</kbd>. Welcher Grundsatz der Software-Ergonomie (DIN EN ISO 9241-110) wird damit vor allem erfüllt?",
      options: ["Erwartungskonformität", "Robustheit gegen Benutzungsfehler", "Aufgabenangemessenheit", "Benutzerbindung"], answer: 0,
      explain: "Erwartungskonform ist eine Software, die sich so verhält, wie Nutzer es von anderen Programmen gewohnt sind. Robustheit betrifft den Umgang mit Fehleingaben, Aufgabenangemessenheit die Unterstützung der eigentlichen Arbeitsaufgabe, Benutzerbindung die Motivation zur Nutzung." },
    { id: "q-bs-10", topic: "beschaffung", type: "input", exam: ["AP1"],
      q: "Ein Monitor kostet 240 € und soll 60 Monate genutzt werden. Wie hoch sind die monatlichen Kosten in Euro?",
      answer: ["4", "4 €", "4,00", "4,00 €", "4 Euro"],
      explain: "Monatliche Kosten = Anschaffungskosten ÷ Nutzungsdauer in Monaten = 240 € ÷ 60 = 4,00 €. Wer mit 36 Monaten rechnet (6,67 €), übersieht die im Text genannte längere Nutzungsdauer von Monitoren." },
    { id: "q-bs-11", topic: "beschaffung", type: "tf", exam: ["AP1", "AP2"],
      q: "Eine Rechnung, die ein Lieferant 2026 als einfaches PDF per E-Mail an ein Unternehmen schickt, ist eine E-Rechnung im Sinne des Umsatzsteuergesetzes.",
      answer: false,
      explain: "Eine E-Rechnung muss in einem strukturierten, maschinell auswertbaren Format vorliegen (z. B. XRechnung oder ZUGFeRD). Ein reines PDF gilt als „sonstige Rechnung“. Seit 2025 müssen Unternehmen E-Rechnungen empfangen können; das Ausstellen wird 2027/2028 schrittweise Pflicht." },
    { id: "q-doc-6", topic: "dokumentation-word", type: "single", exam: [],
      q: "Wie erzeugst du in Word ein Abbildungsverzeichnis, das sich bei Änderungen automatisch aktualisieren lässt?",
      options: ["Jedes Bild über Referenzen → Beschriftung einfügen beschriften und dann Referenzen → Abbildungsverzeichnis einfügen wählen", "Die Bildunterschriften fett formatieren und von Hand nummerieren", "Alle Bilder in eine Tabelle am Dokumentende kopieren", "Die Bilder als Fußnoten einfügen"], answer: 0,
      explain: "Nur über die Beschriftungsfunktion kennt Word die Abbildungen samt Nummer; daraus baut es das Verzeichnis und aktualisiert es (F9). Von Hand nummerierte Bildunterschriften verrutschen bei jeder Änderung, und Querverweise darauf funktionieren nicht." },
    { id: "q-doc-7", topic: "dokumentation-word", type: "tf", exam: [],
      q: "Eingeblendete Formatierungszeichen wie ¶ werden beim Drucken des Dokuments mit ausgegeben.",
      answer: false,
      explain: "Formatierungszeichen dienen nur der Kontrolle am Bildschirm (Absätze, Leerzeichen, Tabstopps, Umbrüche) und werden nicht gedruckt. Du kannst sie deshalb bedenkenlos dauerhaft eingeblendet lassen." }
  ],
  cards: [
    { topic: "kundenbedarf", f: "Lastenheft", b: "Erstellt der Auftraggeber: WAS soll erreicht werden und WOFÜR – Ausgangslage, Ziele, Anforderungen, Rahmenbedingungen." },
    { topic: "kundenbedarf", f: "Pflichtenheft", b: "Erstellt der Auftragnehmer: WIE und WOMIT wird umgesetzt – Produkte, Konfiguration, Zeitplan, Testfälle." },
    { topic: "kundenbedarf", f: "Funktionale vs. nicht-funktionale Anforderung", b: "Funktional: was das System kann (z. B. scannen). Nicht-funktional: wie gut (Leistung, Lautstärke, Verfügbarkeit, Kosten)." },
    { topic: "kundenbedarf", f: "Thin Client", b: "Schlankes Endgerät, das einen zentral bereitgestellten Desktop anzeigt – sparsam, zentral verwaltet, kaum lokale Daten." },
    { topic: "gehaeuse-netzteil", f: "Mainboard-Formfaktoren", b: "ATX 305 × 244 mm · Micro-ATX 244 × 244 mm · Mini-ITX 170 × 170 mm" },
    { topic: "gehaeuse-netzteil", f: "Wirkungsgrad η", b: "η = P_ab ÷ P_zu → Aufnahme aus dem Netz: P_zu = P_ab ÷ η" },
    { topic: "gehaeuse-netzteil", f: "80 PLUS", b: "Effizienzsiegel für Netzteile: Mindestwirkungsgrad bei 20/50/100 % Last; Bronze < Silver < Gold < Platinum < Titanium." },
    { topic: "gehaeuse-netzteil", f: "Netzteil dimensionieren", b: "Summe aller Komponentenleistungen + 20–30 % Reserve → nächstgrößere Standard-Nennleistung wählen." },
    { topic: "gehaeuse-netzteil", f: "Wärmeleitpaste", b: "Füllt mikroskopische Luftspalte zwischen Chip und Kühler und verbessert so die Wärmeübertragung." },
    { topic: "mainboard-cpu", f: "Chipsatz", b: "Stellt zusätzliche Schnittstellen bereit (USB, SATA, PCIe-Lanes) und legt den Funktionsumfang des Mainboards fest." },
    { topic: "mainboard-cpu", f: "Kerne vs. Threads", b: "Kerne = physische Recheneinheiten; Threads = gleichzeitig ausführbare Befehlsströme (mit SMT 2 pro Kern)." },
    { topic: "mainboard-cpu", f: "TDP", b: "Thermal Design Power: Richtwert für die abzuführende Wärme in Watt – Grundlage für Kühler- und Netzteilwahl." },
    { topic: "mainboard-cpu", f: "PCIe-Lanes", b: "Serielle Punkt-zu-Punkt-Verbindungen; x16 für Grafik, x4 für NVMe. Jede Generation verdoppelt die Datenrate." },
    { topic: "mainboard-cpu", f: "UEFI vs. BIOS", b: "UEFI: GPT-Boot, Secure Boot, grafisch, große Datenträger. Legacy-BIOS: MBR, max. 2 TiB, textbasiert." },
    { topic: "mainboard-cpu", f: "Adressbus mit n Bit", b: "2ⁿ adressierbare Speicherstellen – 32 Bit → 4 GiB, 36 Bit → 64 GiB." },
    { topic: "ram-speicher", f: "RAM-Bandbreite", b: "MT/s × 8 Byte je Kanal: DDR5-5600 = 44,8 GB/s, im Dual Channel 89,6 GB/s." },
    { topic: "ram-speicher", f: "Dual Channel", b: "Zwei gleiche Module in den passenden Slots → 128-Bit-Speicherbus, doppelte Bandbreite." },
    { topic: "ram-speicher", f: "ECC-RAM", b: "Error Correction Code: erkennt und korrigiert Einzelbitfehler – Standard in Servern und Workstations." },
    { topic: "ram-speicher", f: "TBW", b: "Terabytes Written: vom Hersteller garantierte Gesamtschreibmenge einer SSD." },
    { topic: "ram-speicher", f: "SATA-SSD vs. NVMe-SSD", b: "SATA ≈ 550 MB/s (Schnittstelle bremst); NVMe über PCIe 4.0 x4 bis ≈ 7.000 MB/s." },
    { topic: "ram-speicher", f: "iGPU vs. dGPU", b: "iGPU: in der CPU, nutzt den RAM, sparsam. dGPU: eigene Karte mit VRAM für CAD, KI, Gaming." },
    { topic: "schnittstellen", f: "USB 2.0 / 3.2 Gen 1 / Gen 2 / Gen 2×2", b: "480 Mbit/s / 5 Gbit/s / 10 Gbit/s / 20 Gbit/s" },
    { topic: "schnittstellen", f: "USB4 und Thunderbolt", b: "USB4 20/40 Gbit/s (Version 2.0: 80) · Thunderbolt 3/4: 40 Gbit/s · Thunderbolt 5: 80 Gbit/s, Boost bis 120" },
    { topic: "schnittstellen", f: "USB Power Delivery", b: "Bis 100 W (20 V × 5 A), Extended Power Range bis 240 W (48 V × 5 A)." },
    { topic: "schnittstellen", f: "Daisy Chaining (MST)", b: "Mehrere Monitore in Reihe an einem DisplayPort-Ausgang; alle teilen sich die Bandbreite." },
    { topic: "schnittstellen", f: "HDMI 2.1", b: "Bis 48 Gbit/s, z. B. 4K mit 120 Hz oder 8K mit 60 Hz; Standard bei TV und Beamer." },
    { topic: "monitore-peripherie", f: "Pixeldichte (ppi)", b: "√(Breite² + Höhe²) in Pixel ÷ Diagonale in Zoll" },
    { topic: "monitore-peripherie", f: "WQHD / 4K UHD", b: "2560 × 1440 / 3840 × 2160 Pixel (je 16:9)" },
    { topic: "monitore-peripherie", f: "IPS vs. VA", b: "IPS: farbtreu, blickwinkelstabil. VA: hoher Kontrast, tiefes Schwarz, aber träger." },
    { topic: "monitore-peripherie", f: "Seitenkosten", b: "Preis des Verbrauchsmaterials ÷ Reichweite in Seiten, z. B. 89 € ÷ 3.000 ≈ 2,97 ct/Seite" },
    { topic: "ergonomie", f: "Monitor richtig aufstellen", b: "Blick parallel zur Fensterfront, oberste Zeile auf/unter Augenhöhe, Abstand ca. 50–70 cm." },
    { topic: "ergonomie", f: "Beleuchtung im Büro", b: "Mindestens 500 lx im Arbeitsbereich (ASR A3.4), blendfrei." },
    { topic: "ergonomie", f: "CE vs. GS", b: "CE: Selbsterklärung des Herstellers (EU-Konformität). GS: freiwillig, von unabhängiger Stelle geprüft." },
    { topic: "ergonomie", f: "Schutzklassen I / II / III", b: "I: Schutzleiter · II: doppelte Isolierung (Doppelquadrat) · III: Schutzkleinspannung" },
    { topic: "ergonomie", f: "BFSG", b: "Barrierefreiheitsstärkungsgesetz: seit 28.06.2025 Pflicht zur Barrierefreiheit für viele Produkte und Dienste (z. B. Computer, Online-Shops)." },
    { topic: "ergonomie", f: "ESD", b: "Elektrostatische Entladung – Schutz durch Erdungsarmband, ESD-Matte und Antistatikbeutel." },
    { topic: "zahlensysteme", f: "Hex ↔ Dual ↔ Oktal", b: "1 Hex-Ziffer = 4 Bit, 1 Oktalziffer = 3 Bit – von rechts gruppieren." },
    { topic: "zahlensysteme", f: "Divisionsrestverfahren", b: "Fortlaufend durch die Basis teilen, Reste von unten nach oben lesen." },
    { topic: "zahlensysteme", f: "Bits für N Zustände", b: "Kleinstes n mit 2ⁿ ≥ N, z. B. 300 Artikelgruppen → 9 Bit." },
    { topic: "zahlensysteme", f: "ASCII", b: "7-Bit-Code mit 128 Zeichen: A = 0x41, a = 0x61, 0 = 0x30, Leerzeichen = 0x20" },
    { topic: "zahlensysteme", f: "UTF-8", b: "Unicode-Codierung mit 1–4 Byte pro Zeichen, ASCII-kompatibel; ä = 2 Byte, € = 3 Byte." },
    { topic: "datenmengen", f: "kB vs. KiB", b: "kB = 1.000 Byte (SI, dezimal) · KiB = 1.024 Byte (IEC, binär)" },
    { topic: "datenmengen", f: "Größe einer Rastergrafik", b: "Breite × Höhe × Farbtiefe (Bit) ÷ 8 = Byte" },
    { topic: "datenmengen", f: "Größe einer Audiodatei (PCM)", b: "Abtastrate × Bittiefe × Kanäle × Sekunden ÷ 8 = Byte" },
    { topic: "datenmengen", f: "Übertragungsdauer", b: "t = Datenmenge in Bit ÷ Datenrate in bit/s (Datenraten sind dezimal!)" },
    { topic: "datenmengen", f: "1 GiB", b: "2³⁰ = 1.073.741.824 Byte (≈ 7,4 % mehr als 1 GB)" },
    { topic: "energie-green-it", f: "P = U × I", b: "Leistung (W) = Spannung (V) × Stromstärke (A)" },
    { topic: "energie-green-it", f: "W = P × t", b: "Energie (Wh bzw. kWh) = Leistung × Zeit; Kosten = kWh × Preis pro kWh" },
    { topic: "energie-green-it", f: "Amortisationsdauer", b: "Mehrkosten der Anschaffung ÷ Einsparung pro Jahr" },
    { topic: "energie-green-it", f: "ElektroG – Rücknahme", b: "Große Händler: 1:1 beim Neukauf, 0:1 für Kleingeräte (keine Kante über 25 cm, max. 3 je Geräteart)." },
    { topic: "energie-green-it", f: "Blauer Engel", b: "Umweltzeichen der Bundesregierung: energiesparend, schadstoffarm, langlebig, recyclinggerecht." },
    { topic: "angebotsvergleich", f: "Bezugskalkulation", b: "Listenpreis − Rabatt = Zieleinkaufspreis − Skonto = Bareinkaufspreis + Bezugskosten = Bezugspreis" },
    { topic: "angebotsvergleich", f: "Nutzwertanalyse", b: "Kriterien gewichten (Σ = 100 %), Punkte vergeben, Gewicht × Punkte summieren – höchster Nutzwert gewinnt." },
    { topic: "angebotsvergleich", f: "Angebotskalkulation", b: "Bezugspreis + Handlungskosten = Selbstkosten + Gewinn = Barverkaufspreis + Skonto (i. H.) + Rabatt (i. H.) = Listenpreis netto + USt" },
    { topic: "beschaffung", f: "Kaufvertrag", b: "Entsteht durch zwei übereinstimmende Willenserklärungen: Antrag und Annahme." },
    { topic: "beschaffung", f: "Mängelarten", b: "Schlechtleistung, Falschlieferung, Minderlieferung, Montagemangel; offen, versteckt oder arglistig verschwiegen." },
    { topic: "beschaffung", f: "Rechte bei Mängeln", b: "Vorrangig Nacherfüllung (Nachbesserung/Ersatzlieferung); nachrangig Rücktritt, Minderung, Schadensersatz." },
    { topic: "beschaffung", f: "§ 377 HGB", b: "Zweiseitiger Handelskauf: Ware unverzüglich prüfen und Mängel unverzüglich rügen – sonst gilt sie als genehmigt." },
    { topic: "beschaffung", f: "Gewährleistung vs. Garantie", b: "Gewährleistung: gesetzlich, 2 Jahre, gegen den Verkäufer. Garantie: freiwillig, z. B. vom Hersteller." },
    { topic: "beschaffung", f: "Leasing", b: "Nutzung gegen Raten ohne Eigentum – liquiditätsschonend und planbar, über die Laufzeit meist teurer als Kauf." },
    { topic: "betriebssysteme", f: "Windows 11 – Voraussetzungen", b: "UEFI mit Secure Boot, TPM 2.0, 4 GB RAM, 64 GB Speicher, unterstützte 64-Bit-CPU" },
    { topic: "betriebssysteme", f: "OEM-Lizenz", b: "Mit neuer Hardware ausgeliefert, günstig, an dieses Gerät gebunden." },
    { topic: "betriebssysteme", f: "GPL", b: "Open-Source-Lizenz mit Copyleft: veränderte Versionen müssen bei Weitergabe wieder unter der GPL stehen." },
    { topic: "betriebssysteme", f: "FAT32 / exFAT / NTFS", b: "FAT32: max. 4 GiB je Datei · exFAT: große Dateien, Windows + macOS · NTFS: Rechte, Journaling (Windows)" },
    { topic: "betriebssysteme", f: "Abnahmeprotokoll", b: "Geräte mit Seriennummern, Software, Testergebnisse, Mängel, Einweisung, Unterschriften beider Seiten." },
    { topic: "dokumentation-word", f: "Seitenzahlen ab Seite 3", b: "Abschnittsumbruch (Nächste Seite), „Mit vorheriger verknüpfen“ lösen, Seitenzahl „Beginnen bei 1“." },
    { topic: "dokumentation-word", f: "Direktes vs. indirektes Zitat", b: "Direkt: wörtlich in Anführungszeichen. Indirekt: sinngemäß mit „vgl.“. Beide brauchen eine Quellenangabe." },
    { topic: "dokumentation-word", f: "Automatisches Inhaltsverzeichnis", b: "Überschriften mit Formatvorlagen setzen → Referenzen → Inhaltsverzeichnis; nach Änderungen aktualisieren." },
    { topic: "datenmengen", f: "Präfix-Regel der IHK (ZPA)", b: "Datenmengen binär (KiB, MiB, GiB, TiB), Datenraten und physikalische Größen dezimal (kbit/s, W, A)." },
    { topic: "betriebssysteme", f: "SaaS", b: "Software as a Service: Anwendung läuft beim Anbieter, Nutzung im Browser, Abrechnung meist pro Nutzer und Monat." },
    { topic: "betriebssysteme", f: "DaaS / VDI", b: "Virtuelle Desktops aus der Cloud (DaaS) bzw. aus dem eigenen Rechenzentrum (VDI) – als Endgerät genügt ein Thin Client." },
    { topic: "angebotsvergleich", f: "Break-even (kritische Menge)", b: "Menge, bei der zwei Kostenfunktionen gleich sind: K_fix1 + k1 × x = K_fix2 + k2 × x nach x auflösen." },
    { topic: "beschaffung", f: "Werkvertrag vs. Dienstvertrag", b: "Werkvertrag: Erfolg geschuldet, mit Abnahme. Dienstvertrag: nur die Tätigkeit geschuldet (z. B. Support-Stunden)." },
    { topic: "beschaffung", f: "Rechnung prüfen", b: "Sachlich (Artikel, Menge), rechnerisch (Rabatt, USt auf rabattierten Nettobetrag, Summe) und formal (Pflichtangaben § 14 UStG)." },
    { topic: "gehaeuse-netzteil", f: "Netzteil bei Teillast", b: "P_ab = Nennleistung × Auslastung, P_zu = P_ab ÷ η – z. B. 650 W × 0,5 = 325 W; 325 W ÷ 0,9 ≈ 361,1 W" },
    { topic: "gehaeuse-netzteil", f: "PC-Montage – Reihenfolge", b: "ESD-Schutz → Mainboard bestücken (CPU, Kühler, RAM, M.2) → Netzteil und I/O-Blende → Mainboard einsetzen → Karten/Laufwerke → verkabeln → POST/UEFI-Test" },
    { topic: "gehaeuse-netzteil", f: "80 PLUS Gold: 115 V vs. 230 V", b: "115 V: 87/90/87 % · 230 V EU: 90/92/89 % bei 20/50/100 % Last – in der Prüfung gilt der Wert aus der Aufgabe." },
    { topic: "ram-speicher", f: "IOPS", b: "Lese-/Schreibvorgänge pro Sekunde bei zufälligen Zugriffen: HDD ≈ 100–200, NVMe-SSD mehrere 100.000." },
    { topic: "ram-speicher", f: "Flüchtig vs. nichtflüchtig", b: "Flüchtig: Register, Cache (SRAM), Arbeitsspeicher (DRAM). Nichtflüchtig: Flash (SSD, UEFI-Chip), HDD, Magnetband." },
    { topic: "monitore-peripherie", f: "Datenrate eines Monitors", b: "Breite × Höhe × Farbtiefe × Hz – 4K, 24 Bit, 60 Hz ≈ 11,94 Gbit/s → HDMI 1.4 reicht nicht, HDMI 2.0 schon." },
    { topic: "zahlensysteme", f: "chmod oktal", b: "r = 4, w = 2, x = 1 je Ziffer (Besitzer, Gruppe, andere): 754 = rwxr-xr--, 640 = rw-r-----" },
    { topic: "zahlensysteme", f: "MAC-Adresse", b: "48 Bit = 6 Byte = 12 Hex-Ziffern; die ersten 3 Byte sind die Herstellerkennung (OUI)." },
    { topic: "datenmengen", f: "Raster- vs. Vektorgrafik", b: "Raster: Pixel mit fester Auflösung (JPEG, PNG) – Fotos. Vektor: mathematische Formen, verlustfrei skalierbar (SVG) – Logos." },
    { topic: "energie-green-it", f: "Abfallhierarchie (§ 6 KrWG)", b: "Vermeidung → Vorbereitung zur Wiederverwendung → Recycling → sonstige Verwertung → Beseitigung" },
    { topic: "betriebssysteme", f: "Windows 10 – Supportende", b: "Regulär am 14.10.2025; Sicherheitsupdates danach nur über ESU (Privatkunden bis 10/2026, Unternehmen höchstens bis 10/2028)." },
    { topic: "betriebssysteme", f: "Folgen eines Lizenzverstoßes", b: "Unterlassung, Schadensersatz, teure Nachlizenzierung, ggf. Strafverfahren, Imageschaden" },
    { topic: "ergonomie", f: "DIN EN ISO 9241-110 (2020)", b: "Aufgabenangemessenheit, Selbstbeschreibungsfähigkeit, Erwartungskonformität, Erlernbarkeit, Steuerbarkeit, Robustheit gegen Benutzungsfehler, Benutzerbindung" },
    { topic: "beschaffung", f: "E-Rechnung", b: "Rechnung in strukturiertem Format (XRechnung, ZUGFeRD); Empfang seit 2025 Pflicht für Unternehmen, Ausstellen ab 2027/2028 – ein PDF allein genügt nicht." },
    { topic: "beschaffung", f: "Monatliche Kosten eines Arbeitsplatzes", b: "Anschaffungskosten nach Rabatt ÷ Nutzungsdauer in Monaten (je Komponente) + laufende Kosten wie Abo oder Service" }
  ],
  checklist: [
    { id: "c-kb-1", topic: "kundenbedarf", text: "Ich kann Lasten- und Pflichtenheft nach Urheber, Zweck und Inhalt unterscheiden.", exam: ["AP1", "AP2"] },
    { id: "c-kb-2", topic: "kundenbedarf", text: "Ich kann im Kundengespräch offene und geschlossene Fragen gezielt einsetzen und Anforderungen in funktional und nicht-funktional einteilen.", exam: ["AP1"] },
    { id: "c-kb-3", topic: "kundenbedarf", text: "Ich kann für einen Einsatzzweck eine passende Geräteklasse (Desktop, Notebook, All-in-One, Thin Client, Tablet) auswählen und begründen.", exam: ["AP1"] },
    { id: "c-nt-1", topic: "gehaeuse-netzteil", text: "Ich kann Formfaktoren (ATX, Micro-ATX, Mini-ITX) und Kühlsysteme mit Vor- und Nachteilen vergleichen.", exam: ["AP1"] },
    { id: "c-nt-2", topic: "gehaeuse-netzteil", text: "Ich kann die Aufgaben eines Netzteils und die Bedeutung der 80-PLUS-Stufen erklären.", exam: ["AP1"] },
    { id: "c-nt-3", topic: "gehaeuse-netzteil", text: "Ich kann eine Netzteil-Nennleistung mit Reserve dimensionieren und die Leistungsaufnahme aus dem Netz mit dem Wirkungsgrad berechnen.", exam: ["AP1", "AP2"] },
    { id: "c-mb-1", topic: "mainboard-cpu", text: "Ich kann Sockel, Chipsatz, RAM-Typ und Formfaktor auf Kompatibilität prüfen.", exam: ["AP1"] },
    { id: "c-mb-2", topic: "mainboard-cpu", text: "Ich kann Kerne, Threads, Takt, Cache und TDP aus einem englischsprachigen Datenblatt erklären.", exam: ["AP1"] },
    { id: "c-mb-3", topic: "mainboard-cpu", text: "Ich kann UEFI und Legacy-BIOS unterscheiden und wichtige Einstellungen wie Secure Boot, TPM und Bootreihenfolge nennen.", exam: ["AP1"] },
    { id: "c-ram-1", topic: "ram-speicher", text: "Ich kann die Bandbreite von DDR4/DDR5-Speicher berechnen und Dual Channel sowie ECC erklären.", exam: ["AP1"] },
    { id: "c-ram-2", topic: "ram-speicher", text: "Ich kann HDD, SATA-SSD und NVMe-SSD nach Geschwindigkeit, Preis, Haltbarkeit und Einsatz vergleichen.", exam: ["AP1"] },
    { id: "c-if-1", topic: "schnittstellen", text: "Ich kann USB-Versionen mit Datenraten nennen und erklären, warum USB-C keine Geschwindigkeit festlegt.", exam: ["AP1"] },
    { id: "c-if-2", topic: "schnittstellen", text: "Ich kann HDMI, DisplayPort und Thunderbolt unterscheiden und Daisy Chaining erklären.", exam: ["AP1"] },
    { id: "c-if-3", topic: "schnittstellen", text: "Ich kann mit P = U × I die Leistung eines USB-Ports berechnen und prüfen, ob sie für ein Gerät reicht.", exam: ["AP1"] },
    { id: "c-mon-1", topic: "monitore-peripherie", text: "Ich kann Pixeldichte sowie Breite und Höhe eines Monitors aus Diagonale, Auflösung und Seitenverhältnis berechnen.", exam: ["AP1"] },
    { id: "c-mon-2", topic: "monitore-peripherie", text: "Ich kann die Paneltypen TN, IPS, VA und OLED vergleichen und für einen Einsatzzweck auswählen.", exam: ["AP1"] },
    { id: "c-mon-3", topic: "monitore-peripherie", text: "Ich kann Druckkosten pro Seite und über eine Nutzungsdauer berechnen.", exam: ["AP1"] },
    { id: "c-erg-1", topic: "ergonomie", text: "Ich kann Anforderungen an einen Bildschirmarbeitsplatz nach Arbeitsstättenverordnung nennen und Mängel mit Verbesserungen benennen.", exam: ["AP1", "AP2"] },
    { id: "c-erg-2", topic: "ergonomie", text: "Ich kann für Menschen mit Seh-, Hör- oder motorischen Einschränkungen passende Hardware und Systemeinstellungen vorschlagen.", exam: ["AP1"] },
    { id: "c-erg-3", topic: "ergonomie", text: "Ich kann CE- und GS-Zeichen sowie die Schutzklassen I bis III unterscheiden und ESD-Schutzmaßnahmen nennen.", exam: ["AP1", "AP2"] },
    { id: "c-zs-1", topic: "zahlensysteme", text: "Ich kann Zahlen zwischen Dezimal-, Dual-, Oktal- und Hexadezimalsystem mit Rechenweg umrechnen.", exam: ["AP1"] },
    { id: "c-zs-2", topic: "zahlensysteme", text: "Ich kann bestimmen, wie viele Bit für eine gegebene Anzahl von Zuständen nötig sind.", exam: ["AP1"] },
    { id: "c-zs-3", topic: "zahlensysteme", text: "Ich kann ASCII, Codepages, Unicode und UTF-8 unterscheiden und Hexfolgen in Text umwandeln.", exam: ["AP1"] },
    { id: "c-dm-1", topic: "datenmengen", text: "Ich kann sicher zwischen kB/MB/GB und KiB/MiB/GiB sowie zwischen Bit und Byte umrechnen.", exam: ["AP1", "AP2"] },
    { id: "c-dm-2", topic: "datenmengen", text: "Ich kann den Speicherbedarf von Texten, Bildern, Audio- und Videodateien berechnen.", exam: ["AP1"] },
    { id: "c-dm-3", topic: "datenmengen", text: "Ich kann Übertragungsdauern – auch mit Protokoll-Overhead – berechnen und in Minuten und Sekunden angeben.", exam: ["AP1", "AP2"] },
    { id: "c-en-1", topic: "energie-green-it", text: "Ich kann Energiebedarf und Stromkosten eines Arbeitsplatzes einschließlich Standby berechnen.", exam: ["AP1"] },
    { id: "c-en-2", topic: "energie-green-it", text: "Ich kann die Amortisationsdauer einer energieeffizienteren Anschaffung berechnen und bewerten.", exam: ["AP1"] },
    { id: "c-en-3", topic: "energie-green-it", text: "Ich kann Green-IT-Maßnahmen, Energielabels und die Entsorgung nach ElektroG erklären.", exam: ["AP1", "AP2"] },
    { id: "c-av-1", topic: "angebotsvergleich", text: "Ich kann mehrere Angebote mit der Bezugskalkulation quantitativ vergleichen.", exam: ["AP1"] },
    { id: "c-av-2", topic: "angebotsvergleich", text: "Ich kann eine Nutzwertanalyse vollständig durchführen und Punkte selbst aus Datenblättern ableiten.", exam: ["AP1", "AP2"] },
    { id: "c-av-3", topic: "angebotsvergleich", text: "Ich kann mit Zuschlagssätzen einen Listenverkaufspreis netto und brutto kalkulieren.", exam: ["AP1"] },
    { id: "c-bs-1", topic: "beschaffung", text: "Ich kann Kauf, Miete und Leasing rechnerisch und mit qualitativen Argumenten vergleichen.", exam: ["AP1"] },
    { id: "c-bs-2", topic: "beschaffung", text: "Ich kann das Zustandekommen eines Kaufvertrags und die Pflichten von Käufer und Verkäufer beschreiben.", exam: ["AP1"] },
    { id: "c-bs-3", topic: "beschaffung", text: "Ich kann Mängelarten erkennen, die Rechte des Käufers nennen und Gewährleistung von Garantie abgrenzen.", exam: ["AP1"] },
    { id: "c-os-1", topic: "betriebssysteme", text: "Ich kann eine Betriebssystem-Installation planen und die Windows-11-Voraussetzungen prüfen.", exam: ["AP1"] },
    { id: "c-os-2", topic: "betriebssysteme", text: "Ich kann Lizenzmodelle (OEM, Retail, Volumen, Abo, Open Source, Freeware) unterscheiden und passend empfehlen.", exam: ["AP1", "AP2"] },
    { id: "c-os-3", topic: "betriebssysteme", text: "Ich kann ein Testprotokoll und ein Übergabe-/Abnahmeprotokoll für einen Arbeitsplatz erstellen.", exam: ["AP1", "AP2"] },
    { id: "c-doc-1", topic: "dokumentation-word", text: "Ich kann in Word automatische Inhalts- und Abbildungsverzeichnisse anlegen und Seitenzahlen ab Seite 3 einfügen.", exam: [] },
    { id: "c-doc-2", topic: "dokumentation-word", text: "Ich kann direkt und indirekt zitieren und vollständige Quellenangaben mit Fußnoten oder Literaturverzeichnis erstellen.", exam: [] },
    { id: "c-os-4", topic: "betriebssysteme", text: "Ich kann Softwarearten, SaaS, DaaS/VDI und KI-Software unterscheiden und Vor- und Nachteile inklusive Datenschutz abwägen.", exam: ["AP1"] },
    { id: "c-av-4", topic: "angebotsvergleich", text: "Ich kann fixe und variable Kosten unterscheiden, Kostenfunktionen aufstellen und die kritische Menge (Break-even) berechnen.", exam: ["AP1"] },
    { id: "c-bs-4", topic: "beschaffung", text: "Ich kann eine Eingangsrechnung sachlich, rechnerisch und formal prüfen und Werk- von Dienstvertrag unterscheiden.", exam: ["AP1"] },
    { id: "c-nt-4", topic: "gehaeuse-netzteil", text: "Ich kann einen PC in sinnvoller Reihenfolge montieren und die nötigen ESD-Schutzmaßnahmen begründen.", exam: ["AP1"] },
    { id: "c-nt-5", topic: "gehaeuse-netzteil", text: "Ich kann die Leistungsaufnahme eines Netzteils im Teillastbetrieb mit Werten aus der 80-PLUS-Tabelle berechnen.", exam: ["AP1", "AP2"] },
    { id: "c-ram-3", topic: "ram-speicher", text: "Ich kann flüchtige und nichtflüchtige Speicher einordnen und Datenträger nach Preis je GiB, Kopierdauer, IOPS und TBW vergleichen.", exam: ["AP1"] },
    { id: "c-mon-4", topic: "monitore-peripherie", text: "Ich kann die Datenrate eines Monitors berechnen und prüfen, ob HDMI oder DisplayPort (auch beim Daisy Chaining) dafür ausreichen.", exam: ["AP1"] },
    { id: "c-zs-4", topic: "zahlensysteme", text: "Ich kann Hex- und Oktalzahlen in der Praxis deuten und umrechnen (Farbcodes, MAC-Adressen, chmod-Rechte).", exam: ["AP1"] },
    { id: "c-dm-4", topic: "datenmengen", text: "Ich kann Raster- und Vektorgrafik unterscheiden, gängige Dateiformate zuordnen und Kompressionsfaktoren in Berechnungen anwenden.", exam: ["AP1"] },
    { id: "c-en-4", topic: "energie-green-it", text: "Ich kann die Abfallhierarchie des KrWG anwenden und die Entsorgung von Altgeräten, Batterien, Toner und Datenträgern beschreiben.", exam: ["AP1", "AP2"] },
    { id: "c-erg-4", topic: "ergonomie", text: "Ich kann die Grundsätze der Software-Ergonomie nach DIN EN ISO 9241-110 an Beispielen erklären.", exam: ["AP1"] },
    { id: "c-bs-5", topic: "beschaffung", text: "Ich kann die monatlichen Kosten eines Arbeitsplatzes mit Rabatt und unterschiedlichen Nutzungsdauern berechnen.", exam: ["AP1"] },
    { id: "c-os-5", topic: "betriebssysteme", text: "Ich kann einen Rollout mit Pilotgruppe und Rückfallplan sowie die Einweisung der Nutzer planen.", exam: ["AP1"] },
    { id: "c-os-6", topic: "betriebssysteme", text: "Ich kann Lizenzkosten (Staffelpreise, Wartung, Abo) vergleichen und Folgen von Lizenzverstößen nennen.", exam: ["AP1", "AP2"] }
  ],
  glossary: [
    { term: "80 PLUS", def: "Zertifizierungsprogramm für PC-Netzteile, das Mindestwirkungsgrade bei 20, 50 und 100 % Last vorschreibt (Stufen von Standard über Bronze bis Titanium)." },
    { term: "Abnahmeprotokoll", def: "Dokument, in dem der Kunde die erbrachte Leistung mit Geräten, Tests und ggf. Mängeln bestätigt und unterschreibt; schließt den Auftrag formal ab." },
    { term: "Abschnittsumbruch", def: "Umbruch in der Textverarbeitung, der einen neuen Abschnitt mit eigenen Kopf-/Fußzeilen, eigener Seitenzählung oder Ausrichtung beginnt." },
    { term: "Amortisationsdauer", def: "Zeit, nach der sich eine Mehrinvestition durch Einsparungen bezahlt gemacht hat: Mehrkosten ÷ jährliche Einsparung." },
    { term: "ASCII", def: "American Standard Code for Information Interchange – 7-Bit-Zeichencode mit 128 Zeichen (Steuerzeichen, Ziffern, englische Buchstaben, Sonderzeichen)." },
    { term: "Bezugspreis", def: "Einstandspreis einer Ware: Listenpreis abzüglich Rabatt und Skonto zuzüglich Bezugskosten." },
    { term: "Barrierefreiheit", def: "Gestaltung von Hardware, Software und Websites so, dass Menschen mit Behinderungen sie ohne fremde Hilfe nutzen können (z. B. nach WCAG, BITV 2.0, BFSG)." },
    { term: "CE-Kennzeichnung", def: "Erklärung des Herstellers, dass ein Produkt die geltenden EU-Richtlinien erfüllt; Voraussetzung für den Vertrieb in der EU, aber kein Prüfsiegel." },
    { term: "Chipsatz", def: "Baustein auf dem Mainboard, der zusätzliche Schnittstellen (USB, SATA, PCIe) bereitstellt und mit der CPU verbindet." },
    { term: "Daisy Chaining", def: "Reihenschaltung mehrerer Monitore an einem Ausgang, bei DisplayPort über Multi-Stream Transport (MST)." },
    { term: "Dual Channel", def: "Betrieb zweier Speichermodule an zwei Speicherkanälen gleichzeitig, wodurch sich die Speicherbandbreite verdoppelt." },
    { term: "ECC", def: "Error Correction Code – Verfahren, mit dem Arbeitsspeicher Einzelbitfehler erkennt und korrigiert; üblich in Servern." },
    { term: "ElektroG", def: "Elektro- und Elektronikgerätegesetz; regelt Inverkehrbringen, Rücknahme und umweltgerechte Entsorgung von Elektrogeräten in Deutschland." },
    { term: "ESD", def: "Electrostatic Discharge – elektrostatische Entladung, die elektronische Bauteile beschädigen kann; Schutz durch Erdung und antistatische Hilfsmittel." },
    { term: "exFAT", def: "Dateisystem für Wechseldatenträger, das große Dateien unterstützt und von Windows und macOS gelesen und beschrieben werden kann." },
    { term: "Formfaktor", def: "Genormte Größe und Bauform einer Komponente, z. B. ATX bei Mainboards oder 2280 bei M.2-SSDs." },
    { term: "Garantie", def: "Freiwillige, vertraglich festgelegte Zusage eines Herstellers oder Händlers über die Funktionsfähigkeit eines Produkts." },
    { term: "Gewährleistung", def: "Gesetzliche Mängelhaftung des Verkäufers; bei neuen Sachen zwei Jahre ab Übergabe." },
    { term: "GiB", def: "Gibibyte – binäres Vielfaches: 2³⁰ = 1.073.741.824 Byte." },
    { term: "Lastenheft", def: "Vom Auftraggeber erstelltes Dokument mit allen Anforderungen und Rahmenbedingungen an eine Lösung (was und wofür)." },
    { term: "Leasing", def: "Überlassung eines Wirtschaftsguts zur Nutzung gegen regelmäßige Raten, ohne dass der Leasingnehmer Eigentümer wird." },
    { term: "M.2", def: "Kompakter Steckplatz-Formfaktor für SSDs und Erweiterungskarten, der je nach Mainboard SATA oder PCIe/NVMe nutzt." },
    { term: "NVMe", def: "Non-Volatile Memory Express – Protokoll, über das SSDs direkt per PCIe angebunden werden; deutlich schneller als SATA." },
    { term: "Nutzwertanalyse", def: "Entscheidungsverfahren, bei dem Alternativen anhand gewichteter Kriterien mit Punkten bewertet und über die Summe der Teilnutzwerte verglichen werden." },
    { term: "OEM-Lizenz", def: "Softwarelizenz, die zusammen mit neuer Hardware verkauft wird und an dieses Gerät gebunden ist." },
    { term: "PCI Express (PCIe)", def: "Serielle Punkt-zu-Punkt-Schnittstelle für Erweiterungskarten und SSDs, bestehend aus einer oder mehreren Lanes." },
    { term: "Pflichtenheft", def: "Vom Auftragnehmer erstelltes Dokument, das beschreibt, wie und womit die Anforderungen des Lastenhefts umgesetzt werden." },
    { term: "Pixeldichte (ppi)", def: "Anzahl der Pixel pro Zoll einer Bildschirmdiagonale; Maß für die Bildschärfe." },
    { term: "Secure Boot", def: "UEFI-Funktion, die beim Start nur digital signierte Bootloader und Treiber zulässt und so Bootkits verhindert." },
    { term: "Skonto", def: "Preisnachlass für die Zahlung innerhalb einer bestimmten Frist, berechnet vom Zieleinkaufs- bzw. Rechnungsbetrag." },
    { term: "TCO", def: "Total Cost of Ownership – alle Kosten eines IT-Systems über seine Nutzungsdauer, von der Anschaffung bis zur Entsorgung." },
    { term: "TDP", def: "Thermal Design Power – Richtwert in Watt für die Wärmeleistung, die das Kühlsystem eines Prozessors abführen können muss." },
    { term: "Thin Client", def: "Leistungsschwaches, zentral verwaltetes Endgerät, das Anwendungen oder Desktops von einem Server bzw. aus der Cloud darstellt." },
    { term: "Thunderbolt", def: "Von Intel entwickelte Schnittstelle über USB-C, die PCIe, DisplayPort, USB und Stromversorgung in einem Kabel bündelt (TB4: 40 Gbit/s, TB5: 80 Gbit/s)." },
    { term: "TPM", def: "Trusted Platform Module – Sicherheitschip bzw. Firmwarefunktion zum sicheren Speichern von Schlüsseln; Version 2.0 ist Voraussetzung für Windows 11." },
    { term: "UEFI", def: "Unified Extensible Firmware Interface – moderne Firmware-Schnittstelle, die das BIOS ablöst und u. a. GPT-Boot und Secure Boot unterstützt." },
    { term: "Unicode", def: "Universeller Zeichensatz, der jedem Zeichen aller Schriftsysteme einen eindeutigen Codepoint (z. B. U+00E4 für ä) zuordnet." },
    { term: "USB Power Delivery", def: "USB-Standard zur Aushandlung höherer Spannungen und Ströme; bis 100 W, im Extended Power Range bis 240 W." },
    { term: "UTF-8", def: "Variable Unicode-Codierung mit 1 bis 4 Byte je Zeichen, abwärtskompatibel zu ASCII; Standard im Web." },
    { term: "Wirkungsgrad", def: "Verhältnis von abgegebener zu aufgenommener Leistung (η = P_ab ÷ P_zu); der Rest wird zu Wärme." },
    { term: "SaaS", def: "Software as a Service – Cloud-Modell, bei dem eine Anwendung beim Anbieter betrieben und über das Internet, meist im Browser, genutzt wird." },
    { term: "DaaS", def: "Desktop as a Service – ein Anbieter stellt komplette virtuelle Desktops aus seinem Rechenzentrum bereit." },
    { term: "Break-even (kritische Menge)", def: "Menge, bei der zwei Kostenalternativen gleich teuer sind; darüber bzw. darunter ist jeweils eine Alternative günstiger." },
    { term: "Werkvertrag", def: "Vertrag, in dem ein bestimmter Erfolg (z. B. ein funktionsfähig eingerichteter Arbeitsplatz) geschuldet wird; der Kunde nimmt das Werk ab." },
    { term: "IOPS", def: "Input/Output Operations per Second – Anzahl der Lese- und Schreibvorgänge, die ein Datenträger pro Sekunde ausführt; entscheidend bei vielen kleinen, zufälligen Zugriffen." },
    { term: "Rastergrafik", def: "Bild aus einzelnen Bildpunkten (Pixeln) mit fester Auflösung, z. B. JPEG oder PNG; beim Vergrößern verliert es an Schärfe." },
    { term: "Vektorgrafik", def: "Bild aus mathematisch beschriebenen Objekten wie Linien, Kurven und Flächen, z. B. SVG; lässt sich ohne Qualitätsverlust skalieren." },
    { term: "ESU (Extended Security Updates)", def: "Programm, über das Microsoft nach dem regulären Supportende gegen Gebühr bzw. unter Bedingungen weiter Sicherheitsupdates liefert, z. B. für Windows 10." },
    { term: "Abfallhierarchie", def: "Rangfolge nach § 6 Kreislaufwirtschaftsgesetz: Vermeidung, Vorbereitung zur Wiederverwendung, Recycling, sonstige Verwertung, Beseitigung." },
    { term: "Multi-Stream Transport (MST)", def: "DisplayPort-Funktion, die mehrere Bildsignale über einen Anschluss überträgt und so das Hintereinanderschalten (Daisy Chaining) von Monitoren ermöglicht." },
    { term: "Nutzungsrecht", def: "Recht, eine Software im Umfang der Lizenz zu verwenden; das Urheberrecht selbst verbleibt beim Urheber bzw. Hersteller." },
    { term: "Pilotgruppe", def: "Kleine Nutzergruppe, die bei einem Rollout zuerst umgestellt wird, damit Fehler vor der flächendeckenden Einführung erkannt werden." },
    { term: "Volumenlizenz", def: "Lizenzmodell für Organisationen mit vielen Arbeitsplätzen: Mengenrabatt, zentrale Verwaltung und Aktivierung der Lizenzen." },
    { term: "Wear Leveling", def: "Verfahren des SSD-Controllers, Schreibzugriffe gleichmäßig auf alle Flash-Zellen zu verteilen und so die Lebensdauer der SSD zu verlängern." }
  ],
  links: [
    { title: "Arbeitsstättenverordnung (ArbStättV) – Anhang Nr. 6 Bildschirmarbeitsplätze", url: "https://www.gesetze-im-internet.de/arbst_ttv_2004/", note: "Gesetzestext bei gesetze-im-internet.de" },
    { title: "Elektro- und Elektronikgerätegesetz (ElektroG)", url: "https://www.gesetze-im-internet.de/elektrog_2015/", note: "Rücknahme und Entsorgung von Altgeräten" },
    { title: "BGB § 433 – Vertragstypische Pflichten beim Kaufvertrag", url: "https://www.gesetze-im-internet.de/bgb/__433.html" },
    { title: "Microsoft Learn: Systemanforderungen für Windows 11", url: "https://learn.microsoft.com/de-de/windows/whats-new/windows-11-requirements" },
    { title: "Bundesfachstelle Barrierefreiheit", url: "https://www.bundesfachstelle-barrierefreiheit.de/", note: "BFSG, BITV 2.0, Informationen zu barrierefreier IT" },
    { title: "Blauer Engel – Umweltzeichen der Bundesregierung", url: "https://www.blauer-engel.de/", note: "Vergabekriterien u. a. für Computer, Monitore und Drucker" },
    { title: "DGUV – Deutsche Gesetzliche Unfallversicherung", url: "https://www.dguv.de/", note: "Informationen zu Bildschirm- und Büroarbeitsplätzen (DGUV Information 215-410)" },
    { title: "USB Implementers Forum (USB-IF)", url: "https://www.usb.org/", note: "Spezifikationen und Logos zu USB und USB Power Delivery (englisch)" },
    { title: "Kreislaufwirtschaftsgesetz (KrWG)", url: "https://www.gesetze-im-internet.de/krwg/", note: "§ 6 Abfallhierarchie" },
    { title: "Urheberrechtsgesetz (UrhG)", url: "https://www.gesetze-im-internet.de/urhg/", note: "§§ 69a ff. Schutz von Computerprogrammen" },
    { title: "Bundesanstalt für Arbeitsschutz und Arbeitsmedizin (BAuA)", url: "https://www.baua.de/", note: "Technische Regeln für Arbeitsstätten (ASR), Bildschirmarbeit" },
    { title: "Umweltbundesamt", url: "https://www.umweltbundesamt.de/", note: "Informationen zu Green IT, Elektroaltgeräten und Energiesparen" },
    { title: "EPREL – EU-Produktdatenbank zum Energielabel", url: "https://eprel.ec.europa.eu/", note: "Datenblätter zu Energielabels, z. B. für Monitore und Smartphones" }
  ]
});
