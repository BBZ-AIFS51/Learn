/* LF 3 – Clients in Netzwerke einbinden */
LEARN.module({
  id: "lf03",
  type: "lf",
  nr: 3,
  title: "Clients in Netzwerke einbinden",
  year: 1,
  hours: 80,
  exam: ["AP1", "AP2"],
  summary: "Von den elektrotechnischen Grundlagen über Kupfer-, Glasfaser- und Funkstrecken bis zur fertigen IP-Konfiguration: Du lernst, wie ein Client physisch und logisch ins Netzwerk kommt, wie du die Verbindung prüfst und wie du Verkabelung, USV und Switch sinnvoll auswählst und einrichtest.",
  goals: [
    "Spannung, Strom, Widerstand, Leistung, Arbeit und Wirkungsgrad berechnen und daraus Energiekosten und PoE-Budgets ableiten",
    "logische Grundfunktionen mit Wahrheitstabelle, Schaltzeichen und Gleichung darstellen und einfache Schaltungen vereinfachen",
    "Netzarten, Topologien, Netzwerkkomponenten und die Schichten des OSI-Modells unterscheiden und zuordnen",
    "Übertragungsmedien (Twisted Pair, Koax, Lichtwellenleiter, Funk) nach Kategorie, Reichweite und Einsatzzweck auswählen und begründen",
    "Signallaufzeit, Bandbreite-Länge-Produkt, Dämpfung in dB und Pegel einer Übertragungsstrecke berechnen",
    "eine strukturierte Verkabelung nach Primär-, Sekundär- und Tertiärbereich planen und lesen",
    "eine USV nach Klassifizierung, Scheinleistung, Wirkleistung und Überbrückungszeit auswählen",
    "Clients mit IPv4 und IPv6 konfigurieren (Adresse, Maske/Präfix, Gateway, DNS, DHCP) und die Verbindung mit ipconfig, ping, tracert, nslookup und arp systematisch testen und protokollieren",
    "WLAN-Standards, Frequenzbänder und Verschlüsselungsverfahren vergleichen, eine sichere WLAN-Lösung empfehlen und Homeoffice-Zugänge per VPN-Client und Remote Desktop absichern",
    "einen Cisco-Switch per CLI grundkonfigurieren (Modi, hostname, Passwörter, Management-IP auf VLAN 1, Speichern)"
  ],
  school: {
    hinweise: "Im Unterricht der AIFS51 lag der Schwerpunkt auf den elektrotechnischen Grundgrößen (inkl. Wirkungsgrad und Reihenschaltung), den logischen Grundfunktionen mit DNF und Schaltungsvereinfachung, den Übertragungsmedien (Kupfer, Koax, Lichtwellenleiter inkl. Modendispersion, Bandbreite-Länge-Produkt und Mängeln an Verbindungsstellen), der Dämpfung in dB sowie der Notstromversorgung (USV). Dazu kamen eine Gruppenarbeit zu Netzwerkkomponenten und die Switch-Grundkonfiguration in Cisco Packet Tracer. IP-Adressierung und Subnetting werden in LF 9 vertieft.",
    themen: [
      "Elektrische Grundgrößen: SI-Präfixe, Leistung, Arbeit, Wirkungsgrad, Reihenschaltung",
      "Logische Grundfunktionen: UND, ODER, NICHT, NAND, NOR, XOR, XNOR, DNF, Funktionsplan, Schaltungsvereinfachung",
      "Gruppenarbeit Netzwerkkomponenten",
      "Übertragungsmedien: Twisted Pair (UTP/STP), Koaxialkabel, Lichtwellenleiter",
      "Signallaufzeit, Verkürzungsfaktor (NVP), Modendispersion, Bandbreite-Länge-Produkt",
      "Dämpfung: Dämpfungsfaktor, Dämpfungsmaß, Übertragungsfaktor, Übertragungssysteme",
      "Einführung in Netzwerke (Cisco): Switch-Grundkonfiguration in Packet Tracer",
      "Notstromversorgung: Zweck, Klassifizierung, Auswahl und Bypass einer USV"
    ]
  },
  topics: [
    {
      id: "elektro-grundgroessen",
      title: "Elektrotechnische Grundgrößen & Ohmsches Gesetz",
      exam: ["AP1"],
      summary: "Spannung, Strom, Widerstand, SI-Präfixe sowie Reihen- und Parallelschaltung sicher berechnen.",
      html: `
        <p>Jedes Netzteil, jeder PoE-Switch und jede USV lässt sich nur sinnvoll auswählen, wenn du die elektrischen Grundgrößen beherrschst. In der AP1 tauchen sie regelmäßig in Rechenaufgaben zu Leistungsaufnahme, Netzteil und Stromkosten auf.</p>
        <h5>Die Grundgrößen</h5>
        <table><thead><tr><th>Größe</th><th>Formelzeichen</th><th>Einheit</th><th>Vorstellung</th></tr></thead><tbody>
          <tr><td>Spannung</td><td>U</td><td>Volt (V)</td><td>„Druck“, der die Elektronen antreibt (Potenzialunterschied)</td></tr>
          <tr><td>Stromstärke</td><td>I</td><td>Ampere (A)</td><td>Menge an Ladung, die pro Sekunde durch den Leiter fließt</td></tr>
          <tr><td>Widerstand</td><td>R</td><td>Ohm (Ω)</td><td>Hemmt den Stromfluss</td></tr>
          <tr><td>Leistung</td><td>P</td><td>Watt (W)</td><td>Umgesetzte Energie pro Zeit</td></tr>
          <tr><td>Arbeit / Energie</td><td>W</td><td>Wattsekunde (Ws) = Joule (J), kWh</td><td>Leistung über eine bestimmte Zeit</td></tr>
        </tbody></table>
        <p>Ein <strong>Ohmscher Widerstand</strong> hat einen konstanten Wert: Er hängt nicht von der angelegten Spannung oder vom Strom ab. Dann steigt der Strom proportional zur Spannung.</p>
        <div class="callout formel"><strong>Ohmsches Gesetz:</strong> U = R × I &nbsp;→&nbsp; R = U ÷ I &nbsp;→&nbsp; I = U ÷ R</div>
        <div class="callout tipp"><strong>Eselsbrücke:</strong> „URI“ – U steht oben, R und I stehen nebeneinander darunter. Halte die gesuchte Größe zu, der Rest zeigt dir die Rechnung.</div>
        <h5>SI-Präfixe (Zehnerpotenzen)</h5>
        <table><thead><tr><th>Präfix</th><th>Zeichen</th><th>Faktor</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td>Tera</td><td>T</td><td>10¹²</td><td>1 TB = 1.000.000.000.000 Byte</td></tr>
          <tr><td>Giga</td><td>G</td><td>10⁹</td><td>2,4 GHz WLAN</td></tr>
          <tr><td>Mega</td><td>M</td><td>10⁶</td><td>100 Mbit/s</td></tr>
          <tr><td>Kilo</td><td>k</td><td>10³</td><td>1 kW = 1000 W</td></tr>
          <tr><td>Milli</td><td>m</td><td>10⁻³</td><td>350 mA = 0,35 A</td></tr>
          <tr><td>Mikro</td><td>µ</td><td>10⁻⁶</td><td>0,5 µs Signallaufzeit</td></tr>
          <tr><td>Nano</td><td>n</td><td>10⁻⁹</td><td>850 nm Wellenlänge</td></tr>
          <tr><td>Piko</td><td>p</td><td>10⁻¹²</td><td>Kapazität in pF</td></tr>
        </tbody></table>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> SI-Präfixe sind <em>dezimal</em> (k = 1000). Bei Speichergrößen gibt es zusätzlich die <em>Binärpräfixe</em> Ki = 2¹⁰ = 1024, Mi = 2²⁰, Gi = 2³⁰. 1 kB ≠ 1 KiB! Übernimm immer genau die Einheit aus der Aufgabe. Außerdem: kleines „m“ = Milli, großes „M“ = Mega.</div>
        <h5>Reihenschaltung</h5>
        <ul>
          <li>Durch alle Widerstände fließt <strong>derselbe Strom</strong> I.</li>
          <li>Die Gesamtspannung teilt sich auf: U = U₁ + U₂ + …</li>
          <li>Gesamtwiderstand: R_ges = R₁ + R₂ + … (größer als der größte Einzelwiderstand)</li>
          <li>Spannungsteiler: U₁ ÷ U₂ = R₁ ÷ R₂ – am größeren Widerstand fällt die größere Spannung ab.</li>
        </ul>
        <h5>Parallelschaltung</h5>
        <ul>
          <li>An allen Zweigen liegt <strong>dieselbe Spannung</strong> U.</li>
          <li>Die Ströme addieren sich: I = I₁ + I₂ + …</li>
          <li>1 ÷ R_ges = 1 ÷ R₁ + 1 ÷ R₂ + … ; für zwei Widerstände: R_ges = (R₁ × R₂) ÷ (R₁ + R₂)</li>
          <li>R_ges ist immer <strong>kleiner als der kleinste</strong> Einzelwiderstand.</li>
        </ul>
        <div class="callout beispiel"><strong>Beispiel Reihenschaltung:</strong> R₁ = 100 Ω und R₂ = 220 Ω liegen in Reihe an U = 12 V.<br>
          R_ges = 100 Ω + 220 Ω = 320 Ω<br>
          I = U ÷ R_ges = 12 V ÷ 320 Ω = 0,0375 A = 37,5 mA<br>
          U₁ = R₁ × I = 100 Ω × 0,0375 A = 3,75 V; U₂ = 220 Ω × 0,0375 A = 8,25 V<br>
          Probe: 3,75 V + 8,25 V = 12 V ✓</div>
        <div class="callout beispiel"><strong>Beispiel Parallelschaltung:</strong> Dieselben Widerstände parallel an 12 V.<br>
          R_ges = (100 Ω × 220 Ω) ÷ (100 Ω + 220 Ω) = 22.000 Ω² ÷ 320 Ω = 68,75 Ω<br>
          I₁ = 12 V ÷ 100 Ω = 0,12 A; I₂ = 12 V ÷ 220 Ω ≈ 0,0545 A<br>
          I_ges = 0,12 A + 0,0545 A ≈ 0,1745 A – Probe: 12 V ÷ 68,75 Ω ≈ 0,1745 A ✓</div>
        <div class="callout merke"><strong>Merke:</strong> Verbraucher im Haushalt und Rechenzentrum (PCs, Monitore, Server an einer Steckdosenleiste) sind <strong>parallel</strong> geschaltet – jeder bekommt 230 V, die Ströme addieren sich. Deshalb kann eine überlastete Steckdosenleiste die Sicherung auslösen.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Berechnen Sie …“ – meist eingebettet in ein Szenario (USB-Port, PoE-Kamera, Netzteil). Schreibe immer Formel → eingesetzte Werte mit Einheit → Ergebnis mit Einheit. Punkte gibt es auch für einen richtigen Rechenweg mit Folgefehler.</div>
      `
    },
    {
      id: "leistung-energie",
      title: "Leistung, Arbeit, Wirkungsgrad & Energiekosten",
      exam: ["AP1", "AP2"],
      summary: "P = U × I, W = P × t, η = P_ab ÷ P_zu – dazu Stromkosten, Netzteilverluste und PoE-Budget.",
      html: `
        <p>Die AP1 fragt fast in jeder Prüfung nach Leistungsaufnahme, Stromkosten oder Wirkungsgrad. Das Muster ist immer ähnlich: Leistung bestimmen → Arbeit über die Nutzungszeit → Kosten mit dem Strompreis.</p>
        <h5>Elektrische Leistung</h5>
        <div class="callout formel"><strong>Leistung:</strong> P = U × I &nbsp;|&nbsp; mit dem Ohmschen Gesetz auch P = I² × R = U² ÷ R<br>Einheit: 1 W = 1 V × 1 A</div>
        <p>Beispiel: Ein USB-Port liefert 5 V bei 2,4 A → P = 5 V × 2,4 A = 12 W.</p>
        <h5>Elektrische Arbeit (Energie)</h5>
        <div class="callout formel"><strong>Arbeit:</strong> W = P × t &nbsp;|&nbsp; 1 kWh = 1000 W × 1 h = 3.600.000 Ws<br><strong>Energiekosten:</strong> Kosten = W (in kWh) × Arbeitspreis (in €/kWh)</div>
        <h5>Wirkungsgrad η</h5>
        <p>Kein Gerät wandelt Energie verlustfrei um – ein Teil wird zu Wärme. Der Wirkungsgrad η (Eta) gibt an, welcher Anteil der zugeführten Leistung nutzbar abgegeben wird.</p>
        <div class="callout formel"><strong>Wirkungsgrad:</strong> η = P_ab ÷ P_zu (immer &lt; 1 bzw. &lt; 100 %)<br>P_zu = P_ab ÷ η &nbsp;|&nbsp; Verlustleistung P_V = P_zu − P_ab<br>Mehrere Stufen hintereinander: η_ges = η₁ × η₂ × …</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Beim Netzteil ist P_ab die Leistung, die die PC-Komponenten brauchen, und P_zu die Leistung aus der Steckdose. Du musst also <strong>durch η teilen</strong>, nicht mit η malnehmen – die Aufnahme aus dem Netz ist immer größer als der Bedarf der Komponenten.</div>
        <div class="callout beispiel"><strong>Beispiel Stromkosten:</strong> Die Komponenten eines PCs benötigen 270 W, das Netzteil hat η = 0,9. Der PC läuft 8 h an 220 Tagen, der Strompreis beträgt 0,32 €/kWh.<br>
          P_zu = 270 W ÷ 0,9 = 300 W; Verlustleistung = 300 W − 270 W = 30 W<br>
          Betriebsstunden: 8 h × 220 = 1760 h<br>
          W = 0,3 kW × 1760 h = 528 kWh<br>
          Kosten = 528 kWh × 0,32 €/kWh = <strong>168,96 € pro Jahr</strong></div>
        <div class="callout beispiel"><strong>Beispiel Netzteil dimensionieren:</strong> Die Komponenten eines Servers benötigen 450 W, es sollen 20 % Reserve eingeplant werden, der Wirkungsgrad beträgt 0,9.<br>
          Nennleistung (Ausgangsseite): 450 W × 1,2 = 540 W → gewählt wird z. B. ein 550-W-Netzteil<br>
          Leistungsaufnahme aus dem Netz bei Volllast der Komponenten: 450 W ÷ 0,9 = 500 W<br>
          Lies genau, ob nach der Netzteilgröße (Ausgang) oder nach der Aufnahme aus dem Netz (Eingang) gefragt ist.</div>
        <div class="callout tipp"><strong>Tipp:</strong> Rechne Watt früh in Kilowatt um (300 W = 0,3 kW), dann kommt direkt kWh heraus. Die 80-PLUS-Siegel (Bronze, Gold, Platinum, Titanium) stehen für Netzteile mit hohem Wirkungsgrad – je höher, desto weniger Abwärme und Stromkosten.</div>
        <h5>Power over Ethernet (PoE)</h5>
        <p>Mit PoE versorgt ein Switch (PSE, Power Sourcing Equipment) Endgeräte (PD, Powered Device) wie Access Points, IP-Telefone oder Kameras über das Netzwerkkabel mit Strom – mit etwa 48 V Nennspannung (zulässig ca. 44–57 V).</p>
        <table><thead><tr><th>Standard</th><th>Bezeichnung</th><th>Leistung am Switch-Port</th><th>garantiert am Endgerät</th></tr></thead><tbody>
          <tr><td>IEEE 802.3af</td><td>PoE (Typ 1)</td><td>15,4 W</td><td>12,95 W</td></tr>
          <tr><td>IEEE 802.3at</td><td>PoE+ (Typ 2)</td><td>30 W</td><td>25,5 W</td></tr>
          <tr><td>IEEE 802.3bt</td><td>PoE++ Typ 3</td><td>60 W</td><td>51 W</td></tr>
          <tr><td>IEEE 802.3bt</td><td>PoE++ Typ 4</td><td>90 W</td><td>71,3 W</td></tr>
        </tbody></table>
        <p>Die Differenz zwischen Port- und Endgeräteleistung geht als Wärme im Kabel verloren (Leitungswiderstand, P = I² × R).</p>
        <p>Innerhalb der Standards teilt sich das Endgerät über seine <strong>PoE-Klasse</strong> mit, wie viel Leistung es höchstens braucht. Der Switch reserviert dann die passende Leistung am Port:</p>
        <table><thead><tr><th>Klasse</th><th>Standard</th><th>am Switch-Port</th><th>am Endgerät</th><th>typisches Gerät</th></tr></thead><tbody>
          <tr><td>1</td><td>802.3af</td><td>4 W</td><td>3,84 W</td><td>einfacher Sensor</td></tr>
          <tr><td>2</td><td>802.3af</td><td>7 W</td><td>6,49 W</td><td>IP-Telefon</td></tr>
          <tr><td>0 und 3</td><td>802.3af</td><td>15,4 W</td><td>12,95 W</td><td>IP-Kamera, kleiner Access Point</td></tr>
          <tr><td>4</td><td>802.3at</td><td>30 W</td><td>25,5 W</td><td>Wi-Fi-6-Access-Point, Dome-Kamera mit Heizung</td></tr>
          <tr><td>5 / 6</td><td>802.3bt</td><td>45 / 60 W</td><td>40 / 51 W</td><td>Wi-Fi-7-Access-Point, PTZ-Kamera</td></tr>
          <tr><td>7 / 8</td><td>802.3bt</td><td>75 / 90 W</td><td>62 / 71,3 W</td><td>Displays, Thin Clients, Beleuchtung</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel Strom am Endgerät:</strong> Laut englischem Datenblatt hat eine Kamera „PoE IEEE 802.3af, max. power consumption 11 W“.<br>
          Reicht 802.3af? Am Endgerät sind 12,95 W garantiert, 11 W ≤ 12,95 W → <strong>ja</strong>.<br>
          Strom bei 48 V: I = P ÷ U = 11 W ÷ 48 V ≈ 0,229 A ≈ <strong>229 mA</strong></div>
        <div class="callout beispiel"><strong>Beispiel PoE-Budget:</strong> Ein Switch hat ein PoE-Budget von 120 W. Es sollen 8 Kameras nach 802.3af angeschlossen werden, die der Switch jeweils mit 15,4 W reserviert.<br>
          Bedarf: 8 × 15,4 W = 123,2 W &gt; 120 W → <strong>Das Budget reicht nicht.</strong> Lösung: Switch mit größerem Budget oder weniger Geräte pro Switch.<br>
          Strom je Port bei 48 V: I = P ÷ U = 15,4 W ÷ 48 V ≈ 0,32 A = 320 mA</div>
        <div class="callout merke"><strong>Merke:</strong> Das PoE-Budget ist die <em>Summe</em>, die ein Switch insgesamt liefern kann – nicht die Leistung je Port. Wenn die Aufgabe nichts anderes vorgibt, rechnest du mit der Leistung, die der Switch pro Port nach Klasse bzw. Standard reserviert (z. B. 15,4 W bei 802.3af), und nicht mit dem tatsächlichen Verbrauch – so bist du auf der sicheren Seite.</div>
        <div class="callout tipp"><strong>Energieeffizienz im Netz:</strong> Energy Efficient Ethernet (IEEE 802.3az) versetzt Ethernet-Ports in Pausen ohne Datenverkehr in einen Stromsparmodus (Low Power Idle). Zusätzlich lassen sich bei vielen Switches ungenutzte Ports, PoE-Ports außerhalb der Arbeitszeit (z. B. für Telefone) oder die Port-LEDs zeitgesteuert abschalten.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Berechnen Sie die jährlichen Stromkosten …“, „Ermitteln Sie die Leistungsaufnahme unter Berücksichtigung des Wirkungsgrads …“, „Prüfen Sie, ob das PoE-Budget ausreicht …“. Häufig kommt eine Amortisationsfrage dazu: Mehrpreis ÷ jährliche Ersparnis = Jahre bis zur Amortisation.</div>
      `
    },
    {
      id: "logik",
      title: "Logische Grundfunktionen, DNF & Schaltungsvereinfachung",
      exam: [],
      summary: "UND, ODER, NICHT und die abgeleiteten Gatter NAND, NOR, XOR, XNOR – mit Schaltzeichen, Wahrheitstabelle, DNF, KV-Diagramm und Funktionsplan.",
      html: `
        <p>Digitale Schaltungen – vom Prozessor bis zur Alarmanlage im Serverraum – arbeiten mit nur zwei Zuständen: <strong>0</strong> (falsch, aus) und <strong>1</strong> (wahr, ein). Mit wenigen Grundfunktionen lässt sich jede Logik aufbauen. Im Unterricht ist das Thema Pflicht; im AP1-Katalog steht es nicht ausdrücklich, die Denkweise hilft dir aber bei Bedingungen in Pseudocode und Skripten.</p>
        <h5>Die Grundfunktionen</h5>
        <table><thead><tr><th>Funktion</th><th>Gleichung</th><th>Schaltzeichen (IEC 60617)</th><th>Ausgang = 1, wenn …</th><th>Schalter-Modell</th></tr></thead><tbody>
          <tr><td>UND (AND)</td><td>z = a ∧ b (auch a · b)</td><td>Kasten mit „&amp;“</td><td>alle Eingänge 1 sind</td><td>Schließer in Reihe</td></tr>
          <tr><td>ODER (OR)</td><td>z = a ∨ b (auch a + b)</td><td>Kasten mit „≥1“</td><td>mindestens ein Eingang 1 ist</td><td>Schließer parallel</td></tr>
          <tr><td>NICHT (NOT)</td><td>z = ¬a</td><td>Kasten mit „1“, Kreis am Ausgang</td><td>der Eingang 0 ist</td><td>Öffner</td></tr>
          <tr><td>NAND</td><td>z = ¬(a ∧ b)</td><td>„&amp;“ mit Kreis am Ausgang</td><td>nicht alle Eingänge 1 sind</td><td>–</td></tr>
          <tr><td>NOR</td><td>z = ¬(a ∨ b)</td><td>„≥1“ mit Kreis am Ausgang</td><td>alle Eingänge 0 sind</td><td>–</td></tr>
          <tr><td>XOR (Antivalenz)</td><td>z = (a ∧ ¬b) ∨ (¬a ∧ b)</td><td>„=1“</td><td>genau ein Eingang 1 ist (Eingänge ungleich)</td><td>Wechselschaltung</td></tr>
          <tr><td>XNOR (Äquivalenz)</td><td>z = ¬(a XOR b)</td><td>„=1“ mit Kreis am Ausgang</td><td>beide Eingänge gleich sind</td><td>–</td></tr>
        </tbody></table>
        <h5>Wahrheitstabelle für zwei Eingänge</h5>
        <p>Bei n Eingängen hat die Tabelle 2ⁿ Zeilen (2 Eingänge → 4, 3 Eingänge → 8). Zähle die Eingänge wie eine Dualzahl von 0 bis 2ⁿ − 1 hoch, dann vergisst du keine Kombination.</p>
        <table><thead><tr><th>a</th><th>b</th><th>AND</th><th>OR</th><th>NAND</th><th>NOR</th><th>XOR</th><th>XNOR</th></tr></thead><tbody>
          <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
          <tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td></tr>
          <tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td></tr>
          <tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>Merke:</strong> Ein Kreis (Negationspunkt) am Schaltzeichen dreht das Signal um. NAND, NOR und XNOR sind deshalb spaltenweise genau das Gegenteil von AND, OR und XOR.</div>
        <h5>Disjunktive Normalform (DNF)</h5>
        <p>Aus jeder Wahrheitstabelle lässt sich direkt eine Gleichung ablesen: Du nimmst <strong>jede Zeile mit z = 1</strong>, bildest daraus einen UND-Term (Eingang = 0 wird negiert) und verknüpfst alle Terme mit ODER. Die Terme heißen Minterme.</p>
        <div class="callout beispiel"><strong>Beispiel „2-von-3-Alarm“:</strong> Drei Temperatursensoren a, b, c im Serverraum. Alarm z = 1, wenn mindestens zwei Sensoren auslösen.<br>
          Zeilen mit z = 1: 011, 101, 110, 111<br>
          DNF: z = (¬a ∧ b ∧ c) ∨ (a ∧ ¬b ∧ c) ∨ (a ∧ b ∧ ¬c) ∨ (a ∧ b ∧ c)<br>
          Vereinfachung: Den Term a ∧ b ∧ c darfst du mehrfach verwenden (a ∨ a = a). Dann gilt z. B. (¬a ∧ b ∧ c) ∨ (a ∧ b ∧ c) = b ∧ c ∧ (¬a ∨ a) = b ∧ c.<br>
          Ergebnis: <strong>z = (a ∧ b) ∨ (a ∧ c) ∨ (b ∧ c)</strong> – nur noch drei UND-Gatter mit je zwei Eingängen und ein ODER-Gatter.</div>
        <h5>Rechenregeln der Schaltalgebra (Auswahl)</h5>
        <ul>
          <li>a ∧ 0 = 0 · a ∧ 1 = a · a ∨ 0 = a · a ∨ 1 = 1</li>
          <li>a ∧ a = a · a ∨ a = a · a ∧ ¬a = 0 · a ∨ ¬a = 1 · ¬¬a = a</li>
          <li>Distributivgesetz: (a ∧ b) ∨ (a ∧ c) = a ∧ (b ∨ c)</li>
          <li>Absorption: a ∨ (a ∧ b) = a · a ∧ (a ∨ b) = a</li>
          <li>De Morgan: ¬(a ∧ b) = ¬a ∨ ¬b · ¬(a ∨ b) = ¬a ∧ ¬b</li>
        </ul>
        <div class="callout beispiel"><strong>Beispiel Vereinfachung:</strong> z = (a ∧ b) ∨ (a ∧ ¬b)<br>
          = a ∧ (b ∨ ¬b) (Distributivgesetz) = a ∧ 1 = <strong>a</strong> – die ganze Schaltung ist nur ein Draht von a nach z.</div>
        <h5>Grafisch vereinfachen: KV-Diagramm</h5>
        <p>Das <strong>KV-Diagramm</strong> (Karnaugh-Veitch-Diagramm) ist eine andere Darstellung der Wahrheitstabelle: Jede Zeile wird zu einem Feld. Die Felder sind so angeordnet, dass sich <strong>benachbarte Felder nur in einer einzigen Variablen</strong> unterscheiden (Reihenfolge 00, 01, 11, 10 – Gray-Code). So erkennst du auf einen Blick, welche Terme sich zusammenfassen lassen.</p>
        <pre class="ascii">            ab = 00   ab = 01   ab = 11   ab = 10
          ┌─────────┬─────────┬─────────┬─────────┐
  c = 0   │    0    │    0    │    1    │    0    │
          ├─────────┼─────────┼─────────┼─────────┤
  c = 1   │    0    │    1    │    1    │    1    │
          └─────────┴─────────┴─────────┴─────────┘</pre>
        <p>Das Diagramm zeigt den „2-von-3-Alarm“ von oben (Einsen bei 110, 011, 111, 101). Vorgehen:</p>
        <ol>
          <li>Einsen aus der Wahrheitstabelle in die passenden Felder eintragen.</li>
          <li>Benachbarte Einsen zu möglichst <strong>großen</strong> Rechteck-Blöcken mit 1, 2, 4 oder 8 Feldern zusammenfassen. Blöcke dürfen sich überlappen; der linke und der rechte Rand gelten als benachbart.</li>
          <li>Für jeden Block nur die Variablen aufschreiben, die im ganzen Block <strong>gleich</strong> bleiben, und die Terme mit ODER verknüpfen.</li>
        </ol>
        <p>Hier ergeben sich drei Zweierblöcke: Spalte ab = 11 (c wechselt) → a ∧ b; Felder ab = 01 und 11 in Zeile c = 1 (a wechselt) → b ∧ c; Felder ab = 11 und 10 in Zeile c = 1 (b wechselt) → a ∧ c. Ergebnis: <strong>z = (a ∧ b) ∨ (b ∧ c) ∨ (a ∧ c)</strong> – dasselbe wie auf dem schaltalgebraischen Weg.</p>
        <div class="callout achtung"><strong>Achtung:</strong> Die Beschriftung von KV-Diagrammen unterscheidet sich je nach Lehrbuch (welche Variable an welchem Rand steht). Lies immer zuerst die Randbeschriftung. Ein Block mit 3 oder 6 Feldern ist nicht erlaubt – nur Zweierpotenzen.</div>
        <h5>Funktionsplan (FUP)</h5>
        <p>Der Funktionsplan zeigt die Logik grafisch mit Schaltzeichen: Eingänge links, Ausgang rechts, Signalfluss von links nach rechts. Beispiel für z = (a ∧ ¬b) ∨ c:</p>
        <pre class="ascii">        ┌───┐
a ──────┤ &amp; │
        │   ├──────┐    ┌────┐
b ─────o┤   │      └────┤ ≥1 │
        └───┘           │    ├──── z
c ──────────────────────┤    │
                        └────┘</pre>
        <h5>Alles aus NAND</h5>
        <p>NAND (und ebenso NOR) ist <strong>universell</strong>: Jede andere Funktion lässt sich nur aus NAND-Gattern bauen. Das spart Bauteile, weil ein IC wie der 7400 vier NAND-Gatter mit je zwei Eingängen enthält.</p>
        <ul>
          <li>NICHT: ¬a = a NAND a (beide Eingänge verbunden)</li>
          <li>UND: a ∧ b = (a NAND b) NAND (a NAND b)</li>
          <li>ODER: a ∨ b = (a NAND a) NAND (b NAND b) – folgt aus De Morgan</li>
        </ul>
        <div class="callout achtung"><strong>Typischer Fehler:</strong> Bei ODER vergessen viele die Zeile 1/1 – ODER ist dort 1 (inklusives Oder). Nur XOR liefert bei 1/1 eine 0. Außerdem: Das UND-Zeichen darf man weglassen (ab), das ODER-Zeichen nie.</div>
        <div class="callout pruefung"><strong>So kommt es in Klassenarbeiten dran:</strong> „Erstellen Sie die Wahrheitstabelle …“, „Ermitteln Sie die DNF …“, „Vereinfachen Sie die Schaltung schaltalgebraisch und grafisch (KV-Diagramm) …“, „Realisieren Sie die Schaltung nur mit NAND-Gattern (IC 7400) …“, „Zeichnen Sie den Funktionsplan …“ oder „Bestimmen Sie den Ausgang für a = 1, b = 0“.</div>
      `
    },
    {
      id: "netzwerk-grundlagen",
      title: "Netzwerkgrundlagen: Netzarten, Topologien, Client-Server",
      exam: ["AP1", "AP2"],
      summary: "PAN bis GAN, Bus/Ring/Stern/Masche, physischer und logischer Netzplan, Client-Server vs. Peer-to-Peer, Domäne vs. Arbeitsgruppe.",
      html: `
        <p>Ein Netzwerk verbindet Endgeräte (Clients, Server, Drucker), damit sie Daten und Dienste gemeinsam nutzen können. Bevor du einen Client einbindest, musst du wissen, welche Art Netz vorliegt, wie es aufgebaut ist und wie es dokumentiert wird.</p>
        <h5>Netzarten nach Ausdehnung</h5>
        <table><thead><tr><th>Abk.</th><th>Name</th><th>Ausdehnung</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td>PAN</td><td>Personal Area Network</td><td>wenige Meter</td><td>Bluetooth-Headset am Smartphone</td></tr>
          <tr><td>LAN</td><td>Local Area Network</td><td>Gebäude, Firmengelände</td><td>Büro-Netz mit Switches; als Funknetz: WLAN</td></tr>
          <tr><td>MAN</td><td>Metropolitan Area Network</td><td>Stadt, Region</td><td>Glasfaserring der Stadtwerke</td></tr>
          <tr><td>WAN</td><td>Wide Area Network</td><td>Länder, Kontinente</td><td>Standortvernetzung Heide – Kiel über Provider</td></tr>
          <tr><td>GAN</td><td>Global Area Network</td><td>weltweit</td><td>Internet, Satellitennetze</td></tr>
        </tbody></table>
        <h5>Topologien</h5>
        <table><thead><tr><th>Topologie</th><th>Aufbau</th><th>Vorteile</th><th>Nachteile</th></tr></thead><tbody>
          <tr><td>Bus</td><td>alle Geräte an einer gemeinsamen Leitung</td><td>wenig Kabel, günstig</td><td>Kabelbruch legt alles lahm, Kollisionen, veraltet</td></tr>
          <tr><td>Ring</td><td>jedes Gerät mit zwei Nachbarn verbunden</td><td>deterministisch, bei Doppelring ausfallsicher</td><td>einfacher Ring: ein Ausfall unterbricht den Ring</td></tr>
          <tr><td>Stern</td><td>alle Geräte an einem zentralen Switch</td><td>einfache Fehlersuche, Ausfall eines Kabels betrifft nur ein Gerät</td><td>zentrale Komponente ist Single Point of Failure, viel Kabel</td></tr>
          <tr><td>Erweiterter Stern / Baum</td><td>mehrere Sterne hierarchisch verbunden</td><td>gut erweiterbar, Standard in Firmen-LANs</td><td>Ausfall eines oberen Knotens trennt ganze Äste</td></tr>
          <tr><td>Masche (vermascht)</td><td>Geräte über mehrere Wege verbunden</td><td>hohe Ausfallsicherheit, Lastverteilung</td><td>teuer, aufwendig (WAN, Backbone, WLAN-Mesh)</td></tr>
        </tbody></table>
        <div class="callout formel"><strong>Vollvermaschung:</strong> Anzahl Verbindungen = n × (n − 1) ÷ 2 &nbsp;(n = Anzahl Knoten)</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> Fünf Standortrouter sollen vollvermascht werden: 5 × 4 ÷ 2 = <strong>10 Verbindungen</strong>. Bei 10 Routern wären es schon 10 × 9 ÷ 2 = 45 – deshalb ist Vollvermaschung nur im Kern eines Netzes üblich.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Physische und logische Topologie können sich unterscheiden. Ein Hub ist physisch ein Stern, arbeitet logisch aber wie ein Bus (alle teilen sich das Medium).</div>
        <h5>Physischer und logischer Netzwerkplan</h5>
        <ul>
          <li><strong>Physischer Plan:</strong> Wo steht welches Gerät, welche Dose ist mit welchem Patchfeld-Port verbunden, welche Kabel liegen wo (Räume, Schränke, Kabelwege)?</li>
          <li><strong>Logischer Plan:</strong> Welche IP-Netze, VLANs, Gateways und Dienste gibt es und wie fließen die Daten (IP-Adressen, Subnetze, Router)?</li>
        </ul>
        <h5>Client-Server oder Peer-to-Peer?</h5>
        <table><thead><tr><th>Merkmal</th><th>Peer-to-Peer / Arbeitsgruppe</th><th>Client-Server / Domäne</th></tr></thead><tbody>
          <tr><td>Rollen</td><td>alle Rechner gleichberechtigt</td><td>Server stellen Dienste bereit, Clients nutzen sie</td></tr>
          <tr><td>Benutzerkonten</td><td>lokal auf jedem Rechner</td><td>zentral, z. B. im Active Directory auf dem Domänencontroller</td></tr>
          <tr><td>Verwaltung</td><td>jeder Rechner einzeln</td><td>zentral (Gruppenrichtlinien, Rechte, Updates)</td></tr>
          <tr><td>Geeignet für</td><td>sehr kleine Netze (bis ca. 10 Rechner)</td><td>Firmennetze jeder Größe</td></tr>
          <tr><td>Kosten</td><td>gering</td><td>Server, Lizenzen, Administration</td></tr>
        </tbody></table>
        <p><strong>Voraussetzungen für den Domänenbeitritt</strong> eines Windows-Clients:</p>
        <ul>
          <li>funktionierende Netzwerkverbindung zum Domänencontroller (IP-Konfiguration prüfen)</li>
          <li>als DNS-Server ein DNS, das die Domäne auflösen kann – meist der Domänencontroller selbst; sonst findet der Client die Domäne nicht</li>
          <li>eine geeignete Windows-Edition (Pro, Enterprise oder Education – die Home-Edition kann keiner Domäne beitreten)</li>
          <li>ein Benutzerkonto mit dem Recht, Computer in die Domäne aufzunehmen, sowie ein eindeutiger Computername</li>
          <li>eine annähernd richtige Uhrzeit – die Kerberos-Anmeldung toleriert standardmäßig nur etwa 5 Minuten Abweichung</li>
        </ul>
        <p>Nach dem Beitritt und einem Neustart melden sich die Mitarbeitenden mit ihrem Domänenkonto an, und die Gruppenrichtlinien der Domäne werden angewendet.</p>
        <p><strong>Freigaben</strong> werden unter Windows per SMB (TCP-Port 445) bereitgestellt und über einen UNC-Pfad wie <code>\\\\fileserver\\projekte</code> angesprochen oder als Netzlaufwerk verbunden (z. B. Laufwerk P:). Beim Zugriff über das Netz wirken Freigabeberechtigungen und NTFS-Berechtigungen zusammen – es gilt jeweils die <strong>restriktivere</strong> der beiden.</p>
        <div class="callout merke"><strong>Merke:</strong> Domäne = zentrale Anmeldung und Verwaltung; Arbeitsgruppe = jeder Rechner verwaltet sich selbst. Ein falsch eingetragener DNS-Server ist der häufigste Grund, warum ein Domänenbeitritt scheitert.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Nennen Sie zwei Vor- und Nachteile der Sterntopologie“, „Unterscheiden Sie Client-Server- und Peer-to-Peer-Netz“, „Erläutern Sie, welche Voraussetzungen für den Domänenbeitritt erfüllt sein müssen“ oder einen Netzwerkplan auswerten und ergänzen.</div>
      `
    },
    {
      id: "osi-komponenten",
      title: "OSI-Modell & Netzwerkkomponenten",
      exam: ["AP1", "AP2"],
      summary: "Die 7 OSI-Schichten, das TCP/IP-Modell, Kapselung, MAC-Adresse sowie Repeater, Hub, Bridge, Switch, Router und Access Point.",
      html: `
        <p>Das OSI-Referenzmodell zerlegt die Netzwerkkommunikation in sieben Schichten. Jede Schicht erfüllt eine klar abgegrenzte Aufgabe und nutzt nur die Dienste der Schicht darunter. So kannst du Geräte, Protokolle und Fehler sauber einordnen („Fehler auf Schicht 1“ = Kabel/Stecker).</p>
        <h5>OSI- und TCP/IP-Modell</h5>
        <table><thead><tr><th>Nr.</th><th>OSI-Schicht</th><th>Aufgabe</th><th>Beispiele</th><th>Dateneinheit</th><th>TCP/IP-Modell</th></tr></thead><tbody>
          <tr><td>7</td><td>Anwendung (Application)</td><td>Schnittstelle zu den Anwendungen</td><td>HTTP(S), DNS, SMTP, DHCP</td><td rowspan="3">Daten</td><td rowspan="3">Anwendung</td></tr>
          <tr><td>6</td><td>Darstellung (Presentation)</td><td>Kodierung, Kompression, Verschlüsselung</td><td>TLS, UTF-8, JPEG</td></tr>
          <tr><td>5</td><td>Sitzung (Session)</td><td>Auf- und Abbau von Sitzungen</td><td>RPC, NetBIOS</td></tr>
          <tr><td>4</td><td>Transport</td><td>Ende-zu-Ende, Ports, ggf. Zuverlässigkeit</td><td>TCP, UDP</td><td>Segment</td><td>Transport</td></tr>
          <tr><td>3</td><td>Vermittlung (Network)</td><td>logische Adressierung, Wegewahl (Routing)</td><td>IPv4, IPv6, ICMP; <strong>Router</strong></td><td>Paket</td><td>Internet</td></tr>
          <tr><td>2</td><td>Sicherung (Data Link)</td><td>physische Adressierung (MAC), Fehlererkennung</td><td>Ethernet, WLAN-MAC; <strong>Switch, Bridge, AP</strong></td><td>Frame (Rahmen)</td><td rowspan="2">Netzzugang</td></tr>
          <tr><td>1</td><td>Bitübertragung (Physical)</td><td>Bits als Signale übertragen, Stecker, Kabel</td><td>Kabel, RJ45, LWL, Funk; <strong>Hub, Repeater</strong></td><td>Bit</td></tr>
        </tbody></table>
        <div class="callout tipp"><strong>Eselsbrücke</strong> (Schicht 1 → 7, englische Namen): „<em>P</em>lease <em>D</em>o <em>N</em>ot <em>T</em>hrow <em>S</em>ausage <em>P</em>izza <em>A</em>way“ – Physical, Data Link, Network, Transport, Session, Presentation, Application.</div>
        <h5>Kapselung</h5>
        <p>Beim Senden fügt jede Schicht ihre Steuerinformationen (Header) hinzu: Die Anwendungsdaten werden zum Segment (TCP-/UDP-Header mit Ports), dann zum Paket (IP-Header mit IP-Adressen), dann zum Frame (Ethernet-Header mit MAC-Adressen und Prüfsumme FCS) und schließlich als Bits übertragen. Der Empfänger entpackt in umgekehrter Reihenfolge (Entkapselung).</p>
        <h5>MAC-Adresse</h5>
        <p>Die MAC-Adresse ist die 48 Bit lange Hardwareadresse einer Netzwerkschnittstelle, geschrieben als 6 Byte hexadezimal, z. B. <code>3C-52-82-1A-7F-09</code>. Die ersten 24 Bit (OUI) kennzeichnen den Hersteller. <code>FF-FF-FF-FF-FF-FF</code> ist die Broadcast-Adresse. MAC-Adressen gelten nur im lokalen Netzsegment – Router tauschen sie bei jedem Hop aus, die IP-Adressen bleiben gleich.</p>
        <h5>Netzwerkkomponenten</h5>
        <table><thead><tr><th>Gerät</th><th>OSI</th><th>Funktion</th><th>Merkmal</th></tr></thead><tbody>
          <tr><td>Repeater</td><td>1</td><td>verstärkt und regeneriert Signale</td><td>verlängert die Leitung, versteht keine Adressen</td></tr>
          <tr><td>Hub</td><td>1</td><td>Multiport-Repeater</td><td>sendet alles an alle Ports, eine Kollisionsdomäne, nur Halbduplex – veraltet</td></tr>
          <tr><td>Bridge</td><td>2</td><td>verbindet zwei Netzsegmente</td><td>filtert anhand von MAC-Adressen</td></tr>
          <tr><td>Switch</td><td>2</td><td>Multiport-Bridge, verbindet Endgeräte im LAN</td><td>lernt Quell-MACs in der MAC-Adresstabelle, leitet gezielt weiter, jeder Port eigene Kollisionsdomäne, Vollduplex</td></tr>
          <tr><td>Access Point</td><td>2</td><td>bindet WLAN-Clients an das kabelgebundene LAN</td><td>Übergang Funk ↔ Ethernet, oft per PoE versorgt</td></tr>
          <tr><td>Router</td><td>3</td><td>verbindet unterschiedliche IP-Netze</td><td>entscheidet per Routingtabelle, trennt Broadcast-Domänen, ist das Standardgateway</td></tr>
          <tr><td>Layer-3-Switch</td><td>2 + 3</td><td>Switch mit Routingfunktion</td><td>routet zwischen VLANs in Hardware</td></tr>
          <tr><td>Firewall</td><td>3–7</td><td>filtert Datenverkehr nach Regeln</td><td>trennt Sicherheitszonen, z. B. LAN und Internet</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>Merke:</strong> Ein Switch leitet einen Frame an eine <em>unbekannte</em> Ziel-MAC an alle Ports weiter (Flooding) – außer an den Eingangsport. Sobald er die Ziel-MAC gelernt hat, sendet er nur noch an den passenden Port. Broadcasts leitet ein Switch immer an alle Ports weiter; erst ein Router stoppt sie.</div>
        <h5>Wichtige Ports (Schicht 4)</h5>
        <p>TCP arbeitet verbindungsorientiert mit Bestätigung, UDP verbindungslos und schneller. Häufige Ports: DNS 53 (UDP/TCP), DHCP 67/68 (UDP), HTTP 80, HTTPS 443, SSH 22, SMB 445 (jeweils TCP).</p>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Der Access Point ist kein Router. Viele „WLAN-Router“ für zu Hause vereinen Modem, Router, Switch, Access Point, DHCP-Server und Firewall in einem Gehäuse – in der Prüfung sollst du die einzelnen Funktionen trotzdem getrennt zuordnen.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Ordnen Sie die Geräte/Protokolle den OSI-Schichten zu“, „Erläutern Sie den Unterschied zwischen Hub und Switch“, „Beschreiben Sie, wie ein Switch seine MAC-Adresstabelle füllt“ oder eine englische Produktbeschreibung (z. B. „managed Layer-2 switch with 24 PoE+ ports“) auswerten.</div>
      `
    },
    {
      id: "kupferkabel",
      title: "Kupferkabel: Twisted Pair, Kategorien & Koax",
      exam: ["AP1", "AP2"],
      summary: "Schirmungsarten (U/UTP bis S/FTP), Kategorien Cat 5e bis Cat 8 mit Frequenz und Datenrate, TIA-568A/B, Patch- und Crossover-Kabel, Koaxialkabel.",
      html: `
        <p>Im Etagenbereich eines Firmennetzes ist Twisted Pair (TP) das Standardmedium. Ein TP-Kabel enthält vier Adernpaare, die jeweils miteinander verdrillt sind. Die Verdrillung sorgt dafür, dass sich Störungen von außen und das Übersprechen zwischen den Paaren (NEXT, Near End Crosstalk) weitgehend aufheben.</p>
        <h5>Schirmung: Bezeichnung nach ISO/IEC 11801</h5>
        <p>Schema <strong>XX/YTP</strong>: Vor dem Schrägstrich steht der Gesamtschirm, dahinter die Schirmung der einzelnen Paare. U = ungeschirmt, F = Folie, S = Geflecht (Braided Screen), SF = Geflecht + Folie.</p>
        <table><thead><tr><th>Bezeichnung</th><th>Gesamtschirm</th><th>Paarschirm</th><th>alter Name</th><th>Einsatz</th></tr></thead><tbody>
          <tr><td>U/UTP</td><td>keiner</td><td>keiner</td><td>UTP</td><td>günstig, Patchkabel, störungsarme Umgebung</td></tr>
          <tr><td>F/UTP</td><td>Folie</td><td>keiner</td><td>FTP / ScTP</td><td>leichte Störungen</td></tr>
          <tr><td>U/FTP</td><td>keiner</td><td>Folie je Paar</td><td>STP (teilweise)</td><td>Cat 6A, gutes Übersprechverhalten</td></tr>
          <tr><td>S/FTP</td><td>Geflecht</td><td>Folie je Paar</td><td>S/STP, PiMF</td><td>Cat 7/7A/8, hohe Störfestigkeit, Verlegekabel in Deutschland üblich</td></tr>
        </tbody></table>
        <div class="callout achtung"><strong>Achtung:</strong> Ein Schirm wirkt nur, wenn er durchgängig verbunden und geerdet ist (geschirmte Stecker, Dosen, Patchfeld). Ein nicht aufgelegter Schirm kann wie eine Antenne Störungen einfangen.</div>
        <h5>Kategorien (Kabel) und Klassen (Übertragungsstrecke)</h5>
        <table><thead><tr><th>Kategorie</th><th>Frequenz bis</th><th>typische Datenrate</th><th>Klasse (Link)</th><th>Bemerkung</th></tr></thead><tbody>
          <tr><td>Cat 5</td><td>100 MHz</td><td>100 Mbit/s (100BASE-TX)</td><td>D</td><td>veraltet</td></tr>
          <tr><td>Cat 5e</td><td>100 MHz</td><td>1 Gbit/s (1000BASE-T), 2,5 Gbit/s</td><td>D</td><td>Mindestanforderung für Gigabit</td></tr>
          <tr><td>Cat 6</td><td>250 MHz</td><td>1 Gbit/s; 10 Gbit/s nur bis ca. 55 m</td><td>E</td><td>–</td></tr>
          <tr><td>Cat 6A</td><td>500 MHz</td><td>10 Gbit/s bis 100 m (10GBASE-T)</td><td>E_A</td><td>heutiger Standard für Neuinstallationen</td></tr>
          <tr><td>Cat 7 / 7A</td><td>600 / 1000 MHz</td><td>10 Gbit/s</td><td>F / F_A</td><td>nur S/FTP; volle Leistung nur mit Spezialsteckern (GG45, TERA)</td></tr>
          <tr><td>Cat 8.1 / 8.2</td><td>2000 MHz</td><td>25 und 40 Gbit/s (25GBASE-T, 40GBASE-T) bis 30 m</td><td>I / II</td><td>Rechenzentrum, kurze Server-Switch-Strecken; 8.1 mit RJ45, 8.2 nur S/FTP mit GG45/TERA</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>Merke:</strong> Über Twisted Pair sind maximal <strong>100 m</strong> Übertragungsstrecke (Channel) erlaubt: 90 m fest verlegtes Kabel + 10 m Patchkabel. Die Kategorie beschreibt einzelne Komponenten, die Klasse die gesamte Strecke – die schwächste Komponente bestimmt die Klasse.</div>
        <h5>Ethernet-Bezeichnungen lesen</h5>
        <p><strong>1000BASE-T</strong>: 1000 = 1000 Mbit/s, BASE = Basisbandübertragung, T = Twisted Pair. Bei Glasfaser stehen z. B. SX/SR (Multimode, kurze Wellenlänge 850 nm) oder LX/LR (lange Wellenlänge 1310 nm, meist Singlemode).</p>
        <table><thead><tr><th>Standard</th><th>Datenrate</th><th>Medium</th><th>Reichweite</th></tr></thead><tbody>
          <tr><td>100BASE-TX (Fast Ethernet)</td><td>100 Mbit/s</td><td>TP ab Cat 5, 2 Paare</td><td>100 m</td></tr>
          <tr><td>1000BASE-T (Gigabit Ethernet)</td><td>1 Gbit/s</td><td>TP ab Cat 5e, 4 Paare</td><td>100 m</td></tr>
          <tr><td>2.5GBASE-T / 5GBASE-T</td><td>2,5 / 5 Gbit/s</td><td>Cat 5e / Cat 6</td><td>100 m (z. B. für Wi-Fi-6/7-Access-Points)</td></tr>
          <tr><td>10GBASE-T</td><td>10 Gbit/s</td><td>Cat 6A (Cat 6 nur bis ca. 55 m)</td><td>100 m</td></tr>
          <tr><td>1000BASE-SX / 10GBASE-SR</td><td>1 / 10 Gbit/s</td><td>Multimode, 850 nm</td><td>10GBASE-SR: 300 m (OM3), 400 m (OM4)</td></tr>
          <tr><td>1000BASE-LX / 10GBASE-LR</td><td>1 / 10 Gbit/s</td><td>Singlemode, 1310 nm</td><td>10GBASE-LR: 10 km</td></tr>
        </tbody></table>
        <h5>Steckerbelegung TIA-568A und TIA-568B (RJ45)</h5>
        <table><thead><tr><th>Pin</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th></tr></thead><tbody>
          <tr><td>T568A</td><td>ws-gn</td><td>gn</td><td>ws-or</td><td>bl</td><td>ws-bl</td><td>or</td><td>ws-br</td><td>br</td></tr>
          <tr><td>T568B</td><td>ws-or</td><td>or</td><td>ws-gn</td><td>bl</td><td>ws-bl</td><td>gn</td><td>ws-br</td><td>br</td></tr>
        </tbody></table>
        <p>Der Unterschied: Das grüne und das orange Paar sind vertauscht. Fast Ethernet nutzt nur die Pins 1, 2, 3 und 6, Gigabit Ethernet alle vier Paare.</p>
        <ul>
          <li><strong>Patchkabel (1:1, straight-through):</strong> beide Enden gleich belegt (A–A oder B–B). Für Ports mit unterschiedlicher Belegung: Endgerät oder Router (MDI) ↔ Switch oder Hub (MDI-X), z. B. PC ↔ Switch, Router ↔ Switch.</li>
          <li><strong>Crossover-Kabel:</strong> ein Ende T568A, das andere T568B. Klassisch für Ports mit gleicher Belegung (MDI ↔ MDI oder MDI-X ↔ MDI-X), z. B. PC ↔ PC, Switch ↔ Switch, PC ↔ Router (PC und Router senden auf denselben Pins).</li>
          <li><strong>Auto-MDI-X:</strong> Moderne Ports erkennen die Belegung selbst und tauschen intern – deshalb funktioniert heute meist jedes Patchkabel.</li>
        </ul>
        <h5>Verlegekabel, Patchkabel und Brandschutz</h5>
        <table><thead><tr><th>Merkmal</th><th>Verlege-/Installationskabel</th><th>Patchkabel</th></tr></thead><tbody>
          <tr><td>Leiter</td><td>massiver Draht (starr), meist AWG 23 oder 22</td><td>Litze (flexibel), meist AWG 26 bis 24, Slim-Patchkabel AWG 28</td></tr>
          <tr><td>Einsatz</td><td>fest in Wand, Kanal oder Trasse, aufgelegt auf Dose und Patchfeld</td><td>Patchfeld ↔ Switch, Dose ↔ Endgerät</td></tr>
          <tr><td>Anschluss</td><td>LSA-Klemmtechnik bzw. werkzeugloses Auflegen</td><td>fertig konfektionierte RJ45-Stecker</td></tr>
          <tr><td>Dämpfung</td><td>geringer (dickerer Leiter)</td><td>höher – deshalb max. 10 m Patchkabel pro Strecke</td></tr>
        </tbody></table>
        <p>AWG (American Wire Gauge): Je <strong>kleiner</strong> die Zahl, desto <strong>dicker</strong> der Leiter. Für PoE sind dickere Leiter günstiger, weil der Leitungswiderstand und damit die Wärmeentwicklung sinkt.</p>
        <p>In Gebäuden werden Kabel mit halogenfreiem, raucharmem Mantel eingesetzt (<strong>LSZH</strong> = Low Smoke Zero Halogen, auch LS0H). Im Brandfall entstehen dann weniger dichter Rauch und keine ätzenden, giftigen Gase (z. B. Salzsäure aus PVC). Fest verlegte Datenkabel werden außerdem nach der EU-Bauproduktenverordnung in Brandklassen von Aca (nicht brennbar) bis Fca eingestuft; welche Klasse nötig ist, hängt vom Gebäude und den Brandschutzvorgaben ab.</p>
        <h5>Koaxialkabel</h5>
        <p>Aufbau von innen nach außen: Innenleiter, Isolierung (Dielektrikum), Außenleiter als Geflecht oder Folie (zugleich Schirm), Außenmantel. Beide Leiter liegen auf derselben Achse („ko-axial“). Typische Wellenwiderstände: 50 Ω (Funk, Antennenkabel, früher 10BASE2) und 75 Ω (TV, Kabel-Internet nach DOCSIS). Stecker: BNC, N, F. Im LAN wurde Koax durch Twisted Pair und LWL verdrängt.</p>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Wählen Sie eine geeignete Kabelkategorie für 10 Gbit/s über 80 m und begründen Sie“, „Erläutern Sie die Bezeichnung S/FTP“, „Nennen Sie die maximale Länge einer TP-Strecke“ oder ein englisches Datenblatt (z. B. „Cat 6A U/FTP, 500 MHz, LSZH“) interpretieren.</div>
      `
    },
    {
      id: "lwl",
      title: "Lichtwellenleiter (LWL): Aufbau, Fasertypen, Stecker",
      exam: ["AP1", "AP2"],
      summary: "Totalreflexion, Singlemode und Multimode, Stufen- und Gradientenindex, Modendispersion, OM-/OS-Klassen, Stecker und Mängel an Verbindungsstellen.",
      html: `
        <p>Lichtwellenleiter übertragen Daten als Lichtimpulse, typischerweise im Infrarotbereich bei <strong>850 nm</strong> und <strong>1300 nm</strong> (Multimode) sowie <strong>1310 nm</strong> und <strong>1550 nm</strong> (Singlemode). Diese Bereiche heißen auch „optische Fenster“; die Bereiche um 1310 nm und 1550 nm werden als O-Band bzw. C-Band bezeichnet. LWL sind das Medium für Gebäudeverbindungen, Backbones, Rechenzentren und Glasfaseranschlüsse (FTTH). Als Sender dienen LEDs oder Laserdioden, als Empfänger Fotodioden.</p>
        <h5>Aufbau und Prinzip</h5>
        <ul>
          <li><strong>Kern (Core):</strong> optisch dichter, höhere Brechzahl n₁ – hier läuft das Licht.</li>
          <li><strong>Mantel (Cladding):</strong> optisch dünner, etwas kleinere Brechzahl n₂; Außendurchmesser meist 125 µm.</li>
          <li><strong>Beschichtung (Coating)</strong> und Schutzhülle (Vollader oder Bündelader), Zugentlastung (Aramidgarn), Außenmantel.</li>
        </ul>
        <p>Trifft Licht aus dem Kern flach genug auf die Grenzfläche zum Mantel (Einfallswinkel größer als der Grenzwinkel), wird es vollständig zurückgeworfen: <strong>Totalreflexion</strong>. So bleibt das Licht im Kern. Die Brechzahl n gibt an, um welchen Faktor sich Licht im Medium langsamer ausbreitet als im Vakuum (Vakuum n = 1, Glas ≈ 1,46–1,48).</p>
        <div class="callout formel"><strong>Numerische Apertur:</strong> NA = sin θ = √(n₁² − n₂²)<br>θ = Akzeptanzwinkel: größter Winkel zur Faserachse, unter dem eingekoppeltes Licht noch geführt wird.<br>Beispiel: n₁ = 1,48, n₂ = 1,46 → NA = √(2,1904 − 2,1316) ≈ 0,24 → θ ≈ 14°</div>
        <h5>Fasertypen</h5>
        <table><thead><tr><th>Typ</th><th>Kern/Mantel</th><th>Brechzahlprofil</th><th>Modendispersion</th><th>Einsatz</th></tr></thead><tbody>
          <tr><td>Multimode-Stufenindex</td><td>groß, z. B. 100–200 µm (Kunststofffaser POF bis 980 µm)</td><td>Brechzahl springt an der Kern-Mantel-Grenze</td><td>stark</td><td>kurze Strecken, Industrie, Auto</td></tr>
          <tr><td>Multimode-Gradientenindex</td><td>50/125 µm oder 62,5/125 µm</td><td>Brechzahl nimmt von der Kernmitte nach außen allmählich ab</td><td>gering</td><td>LAN, Gebäude, Rechenzentrum (bis einige 100 m)</td></tr>
          <tr><td>Singlemode (Einmoden)</td><td>ca. 9/125 µm</td><td>Stufenprofil, sehr dünner Kern</td><td>keine (nur ein Mode)</td><td>Campus, WAN, Provider (km-Bereich)</td></tr>
        </tbody></table>
        <h5>Modendispersion</h5>
        <p>In einer Multimodefaser breitet sich das Licht auf vielen Wegen (Moden) aus. Steile Strahlen legen einen längeren Weg zurück als der Strahl entlang der Achse und kommen später an. Ein kurzer Lichtimpuls wird dadurch am Ende <strong>breiter</strong>. Liegen die Impulse eng beieinander (hohe Datenrate), verschwimmen sie und der Empfänger kann 0 und 1 nicht mehr unterscheiden. Die Modendispersion begrenzt also das Produkt aus Datenrate und Länge.</p>
        <div class="callout merke"><strong>Merke:</strong> Gradientenindex gleicht die Laufzeitunterschiede aus: Außen ist die Brechzahl kleiner, dort ist das Licht schneller – die längeren Wege werden schneller durchlaufen. Singlemode vermeidet Modendispersion ganz, weil nur ein Mode existiert. Dort begrenzt vor allem die <strong>chromatische Dispersion</strong> die Reichweite: Die Lichtquelle sendet nie exakt nur eine Wellenlänge, und unterschiedliche Wellenlängen laufen unterschiedlich schnell.</div>
        <h5>OM- und OS-Klassen (ISO/IEC 11801)</h5>
        <table><thead><tr><th>Klasse</th><th>Faser</th><th>Bandbreite-Länge-Produkt bei 850 nm</th><th>10GBASE-SR bis</th><th>übliche Mantelfarbe</th></tr></thead><tbody>
          <tr><td>OM1</td><td>MM 62,5/125</td><td>200 MHz·km</td><td>33 m</td><td>orange</td></tr>
          <tr><td>OM2</td><td>MM 50/125</td><td>500 MHz·km</td><td>82 m</td><td>orange</td></tr>
          <tr><td>OM3</td><td>MM 50/125, laseroptimiert</td><td>2000 MHz·km</td><td>300 m</td><td>türkis (aqua)</td></tr>
          <tr><td>OM4</td><td>MM 50/125, laseroptimiert</td><td>4700 MHz·km</td><td>400 m</td><td>türkis oder violett</td></tr>
          <tr><td>OM5</td><td>MM 50/125, Breitband (850–953 nm)</td><td>4700 MHz·km</td><td>400 m</td><td>limettengrün</td></tr>
          <tr><td>OS1 / OS2</td><td>SM 9/125</td><td>Dämpfung max. 1,0 bzw. 0,4 dB/km</td><td>10GBASE-LR: 10 km</td><td>gelb</td></tr>
        </tbody></table>
        <h5>Steckverbinder</h5>
        <ul>
          <li><strong>LC:</strong> kleiner Push-Pull-Stecker (1,25-mm-Ferrule), meist als Duplex – Standard an SFP-Modulen und Switches.</li>
          <li><strong>SC:</strong> quadratischer Push-Pull-Stecker (2,5-mm-Ferrule), verbreitet in Patchfeldern und FTTH.</li>
          <li><strong>ST:</strong> runder Bajonettstecker, älter.</li>
          <li><strong>E2000:</strong> mit Staubschutzklappe und Verriegelung, in Deutschland häufig.</li>
          <li><strong>MPO/MTP:</strong> Mehrfaserstecker (12 oder 24 Fasern) für 40/100/400-Gbit/s-Verbindungen.</li>
        </ul>
        <p>Schliffarten: PC/UPC (gerade, meist blau) und APC (8° schräg, grün, weniger Rückreflexion). Ein APC-Stecker darf nie mit einem UPC-Stecker verbunden werden – es entstünde ein Luftspalt mit hoher Dämpfung, und die Stirnflächen können beschädigt werden.</p>
        <h5>Mängel an Spleiß- und Steckverbindungen</h5>
        <p>Jede Verbindungsstelle erzeugt Dämpfung. Planungswerte: etwa 0,1 dB je Spleiß und bis 0,5 dB je Steckverbindung (Norm-Höchstwert 0,75 dB). Typische Fehler:</p>
        <ul>
          <li><strong>Kernversatz (lateraler Versatz):</strong> Die Kerne liegen nicht genau übereinander.</li>
          <li><strong>Winkelversatz:</strong> Die Faserachsen stehen schräg zueinander.</li>
          <li><strong>Stirnflächenabstand (Luftspalt):</strong> Licht tritt aus und wird teilweise reflektiert (Fresnel-Reflexion).</li>
          <li><strong>Unterschiedliche Kerndurchmesser oder NA:</strong> z. B. 62,5 µm auf 50 µm – vom dickeren in den dünneren Kern geht Licht verloren.</li>
          <li><strong>Mangelhafte Stirnflächen:</strong> schräger oder ausgebrochener Faserbruch vor dem Spleißen, Kratzer, Schmutz, Fett.</li>
          <li><strong>Einschlüsse im Spleiß:</strong> Luftblasen, Kernexzentrizität oder Elliptizität der Faser.</li>
        </ul>
        <div class="callout tipp"><strong>Praxis:</strong> Beim Fusionsspleißen werden die Faserenden mit einem Lichtbogen verschmolzen (sehr geringe Dämpfung). Vor jedem Stecken Stirnflächen reinigen und prüfen; zur Fehlersuche dient ein OTDR (optisches Rückstreumessgerät).</div>
        <h5>Vor- und Nachteile von LWL</h5>
        <div class="grid-2"><div class="callout merke"><strong>Vorteile:</strong> unempfindlich gegen elektromagnetische Störungen, galvanische Trennung zwischen Gebäuden, große Reichweite und Bandbreite, schwer abhörbar, leicht und dünn.</div><div class="callout achtung"><strong>Nachteile:</strong> Konfektionierung und Spleißen erfordern Spezialwerkzeug und Fachwissen, Mindestbiegeradius beachten, kein PoE, teurere aktive Komponenten (Transceiver).</div></div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Erläutern Sie den Unterschied zwischen Singlemode und Multimode“, „Beschreiben Sie die Ursache der Modendispersion“, „Wählen Sie eine Faserklasse für eine 10-Gbit/s-Strecke über 350 m und begründen Sie“, „Nennen Sie drei Ursachen für eine hohe Dämpfung an einer Spleißstelle“.</div>
      `
    },
    {
      id: "signal-daempfung",
      title: "Signallaufzeit, Bandbreite-Länge-Produkt & Dämpfung",
      exam: ["AP1", "AP2"],
      summary: "Ausbreitungsgeschwindigkeit und Verkürzungsfaktor (NVP), Bandbreite-Länge-Produkt, Dämpfungsfaktor, Dämpfungsmaß in dB, Übertragungsfaktor und Pegelrechnung.",
      html: `
        <h5>Signallaufzeit und Verkürzungsfaktor</h5>
        <p>Elektrische und optische Signale breiten sich im Kabel <strong>langsamer</strong> aus als Licht im Vakuum (c₀ ≈ 3 × 10⁸ m/s). Das Verhältnis heißt Verkürzungsfaktor k oder NVP (Nominal Velocity of Propagation).</p>
        <div class="callout formel"><strong>Ausbreitungsgeschwindigkeit:</strong> v = k × c₀ (k = NVP, z. B. 0,69 bzw. 69 %)<br><strong>Signallaufzeit:</strong> t = l ÷ v<br><strong>LWL:</strong> k = 1 ÷ n (n = Brechzahl des Kerns)</div>
        <table><thead><tr><th>Medium</th><th>typischer NVP</th></tr></thead><tbody>
          <tr><td>Twisted Pair Cat 5e–6A</td><td>ca. 0,65–0,75</td></tr>
          <tr><td>Koaxialkabel (Vollisolierung PE)</td><td>ca. 0,66</td></tr>
          <tr><td>Glasfaser (n ≈ 1,47)</td><td>ca. 0,68</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel Signallaufzeit:</strong> 90 m Cat-6-Kabel mit NVP = 0,69.<br>
          v = 0,69 × 3 × 10⁸ m/s = 2,07 × 10⁸ m/s<br>
          t = 90 m ÷ 2,07 × 10⁸ m/s ≈ 4,35 × 10⁻⁷ s = <strong>435 ns</strong><br>
          Zum Vergleich im Vakuum: 90 m ÷ 3 × 10⁸ m/s = 300 ns.</div>
        <div class="callout beispiel"><strong>Beispiel Kabeltester (Längenmessung):</strong> Ein Tester schickt einen Impuls ins Kabel und misst, wann die Reflexion vom offenen Ende zurückkommt: nach 1 µs, NVP = 0,7.<br>
          Hin- und Rückweg: s = v × t = 0,7 × 3 × 10⁸ m/s × 1 × 10⁻⁶ s = 210 m<br>
          Kabellänge l = 210 m ÷ 2 = <strong>105 m</strong> – die Strecke ist für Ethernet zu lang (max. 100 m).</div>
        <div class="callout achtung"><strong>Nicht verwechseln:</strong> Die <em>Signallaufzeit</em> hängt nur von Länge und Medium ab (Nanosekunden). Die <em>Übertragungsdauer</em> einer Datei hängt von Datenmenge und Datenrate ab: t = Datenmenge ÷ Datenrate. Beispiel: 2 GiB = 2 × 1024³ × 8 bit = 17.179.869.184 bit; bei 100 Mbit/s → 17.179.869.184 ÷ 100.000.000 ≈ 171,8 s ≈ 2 min 52 s.</div>
        <h5>Bandbreite-Länge-Produkt (BLP)</h5>
        <p>Wegen der Dispersion sinkt die nutzbare Bandbreite einer Faser mit der Länge. Hersteller geben daher das Produkt aus Bandbreite und Länge an (MHz·km). Es ist für eine Faser konstant.</p>
        <div class="callout formel"><strong>BLP = B × l</strong> &nbsp;→&nbsp; B_max = BLP ÷ l &nbsp;|&nbsp; l_max = BLP ÷ B</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> OM2-Faser mit BLP = 500 MHz·km.<br>
          Bei 250 m = 0,25 km: B_max = 500 MHz·km ÷ 0,25 km = <strong>2000 MHz</strong><br>
          Werden 1000 MHz benötigt: l_max = 500 MHz·km ÷ 1000 MHz = 0,5 km = <strong>500 m</strong></div>
        <h5>Dämpfung</h5>
        <p>Auf dem Weg durch ein Kabel verliert ein Signal Leistung (Wärme im Leiter, Absorption und Streuung im Glas, Verbindungsstellen). Ein Verstärker kann das Signal wieder anheben.</p>
        <div class="callout formel"><strong>Übertragungsfaktor:</strong> A = P₂ ÷ P₁ (Ausgang ÷ Eingang; A &lt; 1 Dämpfung, A &gt; 1 Verstärkung)<br><strong>Dämpfungsfaktor:</strong> D = P₁ ÷ P₂ = 1 ÷ A<br><strong>Dämpfungsmaß:</strong> a = 10 × lg(P₁ ÷ P₂) dB = 20 × lg(U₁ ÷ U₂) dB<br><strong>Verstärkungsmaß:</strong> g = 10 × lg(P₂ ÷ P₁) dB</div>
        <table><thead><tr><th>Leistung am Ausgang</th><th>Dämpfungsmaß</th><th>Spannung am Ausgang</th><th>Dämpfungsmaß</th></tr></thead><tbody>
          <tr><td>1/2</td><td>≈ 3 dB</td><td>≈ 0,707 (1 ÷ √2)</td><td>≈ 3 dB</td></tr>
          <tr><td>1/4</td><td>≈ 6 dB</td><td>1/2</td><td>≈ 6 dB</td></tr>
          <tr><td>1/10</td><td>10 dB</td><td>1/10</td><td>20 dB</td></tr>
          <tr><td>1/100</td><td>20 dB</td><td>1/100</td><td>40 dB</td></tr>
          <tr><td>1/1000</td><td>30 dB</td><td>1/1000</td><td>60 dB</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>Merke:</strong> Die Leistung ist proportional zum Quadrat der Spannung (P = U² ÷ R). Deshalb steht bei Spannungen 20 × lg statt 10 × lg. Große Vorteile der dB-Rechnung: Bei hintereinandergeschalteten Strecken werden dB-Werte einfach <strong>addiert</strong> (Verstärkungen subtrahiert), statt Faktoren zu multiplizieren. Leitungsdämpfung: a = α × l (α z. B. in dB/km).</div>
        <h5>Pegelrechnung mit dBm</h5>
        <p>Der absolute Leistungspegel bezieht sich auf 1 mW: L = 10 × lg(P ÷ 1 mW) dBm. Also 1 mW = 0 dBm, 10 mW = 10 dBm, 100 mW = 20 dBm, 1 W = 30 dBm. Ausgangspegel = Eingangspegel − Dämpfungen + Verstärkungen.</p>
        <div class="callout beispiel"><strong>Beispiel Übertragungssystem:</strong> Eingangsleistung 20 mW; Leitung 1 dämpft 6 dB, ein Verstärker hebt um 10 dB an, Leitung 2 dämpft 7 dB.<br>
          Gesamt: a = 6 dB − 10 dB + 7 dB = 3 dB → Die Leistung halbiert sich (ungefähr): P₂ ≈ 20 mW ÷ 2 = <strong>10 mW</strong><br>
          In Pegeln: 20 mW ≈ 13 dBm → 13 dBm − 3 dB = 10 dBm = 10 mW ✓</div>
        <div class="callout beispiel"><strong>Beispiel LWL-Dämpfungsbudget:</strong> Singlemode-Strecke 12 km mit 0,4 dB/km, 2 Steckverbindungen à 0,5 dB, 4 Spleiße à 0,1 dB. Sendepegel −5 dBm, Empfängerempfindlichkeit −20 dBm.<br>
          Faser: 12 km × 0,4 dB/km = 4,8 dB; Stecker: 2 × 0,5 dB = 1,0 dB; Spleiße: 4 × 0,1 dB = 0,4 dB → Summe <strong>6,2 dB</strong><br>
          Empfangspegel: −5 dBm − 6,2 dB = −11,2 dBm → Reserve: −11,2 dBm − (−20 dBm) = <strong>8,8 dB</strong> → Die Strecke funktioniert.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Berechnen Sie die Signallaufzeit …“, „Berechnen Sie das Dämpfungsmaß in dB“, „Prüfen Sie rechnerisch, ob das Signal beim Empfänger ausreichend ankommt“ oder „Bestimmen Sie die maximale Streckenlänge mithilfe des Bandbreite-Länge-Produkts“. Immer die Formel angeben und die Einheit (dB, dBm, MHz·km) mitführen.</div>
      `
    },
    {
      id: "strukturierte-verkabelung",
      title: "Strukturierte Verkabelung (Primär, Sekundär, Tertiär)",
      exam: ["AP1", "AP2"],
      summary: "Hierarchischer Aufbau nach EN 50173 / ISO/IEC 11801 mit Standort-, Gebäude- und Etagenverteiler, Längengrenzen, Medien und Abnahmemessung.",
      html: `
        <p>Eine strukturierte Verkabelung ist eine <strong>anwendungsneutrale</strong>, hierarchisch aufgebaute Gebäudeverkabelung. Sie wird einmal sauber geplant und installiert und trägt dann über viele Jahre unterschiedliche Dienste (Daten, Telefonie, WLAN-Access-Points, Kameras mit PoE). Grundlage sind die Normen <strong>DIN EN 50173</strong> und <strong>ISO/IEC 11801</strong>.</p>
        <h5>Die drei Bereiche</h5>
        <table><thead><tr><th>Bereich</th><th>verbindet</th><th>max. Länge</th><th>typisches Medium</th></tr></thead><tbody>
          <tr><td><strong>Primärbereich</strong> (Geländeverkabelung, Campus-Backbone)</td><td>Standortverteiler (SV) ↔ Gebäudeverteiler (GV)</td><td>1500 m</td><td>LWL, meist Singlemode (OS2)</td></tr>
          <tr><td><strong>Sekundärbereich</strong> (Gebäude-/Steigbereichsverkabelung)</td><td>Gebäudeverteiler (GV) ↔ Etagenverteiler (EV)</td><td>500 m</td><td>LWL Multimode (OM3/OM4) oder Singlemode, selten Kupfer</td></tr>
          <tr><td><strong>Tertiärbereich</strong> (Etagen-/Horizontalverkabelung)</td><td>Etagenverteiler (EV) ↔ Anschlussdose (TA)</td><td>90 m fest verlegt + 10 m Patchkabel = 100 m</td><td>Twisted Pair Cat 6A / Cat 7 (S/FTP)</td></tr>
        </tbody></table>
        <p>Die Gesamtstrecke vom Standortverteiler bis zur Anschlussdose soll 2000 m nicht überschreiten. Zusammen ergibt sich ein <strong>hierarchischer Stern</strong> (Baumstruktur).</p>
        <pre class="ascii">                 [SV] Standortverteiler (Serverraum Haus A)
                  │  Primärbereich (LWL Singlemode)
        ┌─────────┴─────────┐
      [GV] Haus A         [GV] Haus B
        │  Sekundärbereich (LWL Multimode)
   ┌────┴────┐
 [EV] EG   [EV] 1. OG
   │  Tertiärbereich (Cu Cat 6A, max. 90 m)
 [TA] [TA] [TA]  Anschlussdosen am Arbeitsplatz</pre>
        <div class="callout merke"><strong>Merke:</strong> Zwischen Gebäuden wird fast immer Glasfaser verlegt – nicht nur wegen der Länge, sondern wegen der <strong>galvanischen Trennung</strong>: Unterschiedliche Erdpotenziale und Blitzeinwirkungen können über Kupferleitungen Schäden verursachen.</div>
        <h5>Komponenten im Verteiler</h5>
        <ul>
          <li><strong>19-Zoll-Netzwerkschrank:</strong> Höhe in Höheneinheiten (1 HE = 1,75 Zoll = 44,45 mm).</li>
          <li><strong>Patchfeld (Patchpanel):</strong> Hier endet das fest verlegte Installationskabel. Mit kurzen Patchkabeln wird vom Patchfeld auf den Switch rangiert.</li>
          <li><strong>Anschlussdose (TA, informationstechnischer Anschluss):</strong> meist zwei RJ45-Buchsen je Dose am Arbeitsplatz.</li>
          <li>Kabelmanagement, Beschriftung und aktuelle Dokumentation (welcher Port gehört zu welcher Dose).</li>
        </ul>
        <div class="callout beispiel"><strong>Beispiel Planung:</strong> Im 1. OG der Nordlicht IT GmbH ist das entfernteste Büro über die Kabeltrasse 96 m vom geplanten Etagenverteiler entfernt. Das überschreitet die 90 m für das Installationskabel. Lösung: den Etagenverteiler zentraler platzieren oder einen zweiten Etagenverteiler vorsehen, der per LWL an den Gebäudeverteiler angebunden wird.</div>
        <h5>Abnahmemessung</h5>
        <p>Nach der Installation wird jede Strecke mit einem Zertifizierungs-Messgerät geprüft und protokolliert:</p>
        <ul>
          <li><strong>Permanent Link:</strong> fest installierte Strecke vom Patchfeld bis zur Dose (ohne Patchkabel).</li>
          <li><strong>Channel:</strong> gesamte Übertragungsstrecke inklusive Patch- und Anschlusskabel.</li>
          <li>Geprüft werden u. a. Verdrahtung (Wiremap: vertauschte, offene oder kurzgeschlossene Adern, Split Pair), Länge, Einfügedämpfung, Nahnebensprechen (NEXT), Rückflussdämpfung und Laufzeitunterschied.</li>
          <li>Bei LWL: Dämpfungsmessung mit Lichtquelle und Leistungsmesser, Fehlersuche mit OTDR.</li>
        </ul>
        <h5>Vorteile der strukturierten Verkabelung</h5>
        <ul>
          <li>anwendungs- und herstellerneutral, zukunftssicher</li>
          <li>einfache Umzüge und Änderungen durch Umpatchen</li>
          <li>Fehler bleiben lokal begrenzt (Stern), schnelle Fehlersuche</li>
          <li>klare Dokumentation und Normkonformität, Investitionsschutz</li>
        </ul>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Die 100 m gelten für die gesamte Kupferstrecke inklusive Patchkabel an beiden Enden. Wer 100 m Installationskabel verlegt und dann noch Patchkabel ansteckt, überschreitet die Norm. Außerdem nicht verwechseln: <em>Primär</em> = zwischen Gebäuden, <em>Tertiär</em> = auf der Etage.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Ordnen Sie die Bereiche der strukturierten Verkabelung zu und nennen Sie jeweils ein geeignetes Übertragungsmedium“, „Begründen Sie, warum zwischen zwei Gebäuden LWL eingesetzt wird“, „Ergänzen Sie den Netzwerkplan um Patchfeld und Netzwerkdosen“.</div>
      `
    },
    {
      id: "usv",
      title: "Notstromversorgung: USV",
      exam: ["AP1", "AP2"],
      summary: "Zweck einer USV, Netzstörungen, Klassifizierung VFD/VI/VFI nach IEC 62040-3, Dimensionierung mit VA, W und cos φ, Überbrückungszeit und Bypass.",
      html: `
        <p>Eine <strong>unterbrechungsfreie Stromversorgung (USV)</strong> sitzt zwischen Stromnetz und Verbrauchern (Server, Switches, Firewall, Storage). Sie sichert die <strong>Verfügbarkeit</strong> – eines der drei Schutzziele – und schützt vor Datenverlust durch abrupte Abschaltungen.</p>
        <h5>Wozu eine USV?</h5>
        <ul>
          <li>Überbrücken von Stromausfällen, bis die Systeme kontrolliert heruntergefahren sind oder ein Notstromaggregat (Netzersatzanlage) übernimmt.</li>
          <li>Filtern von Netzstörungen: Die meisten Probleme sind keine Totalausfälle, sondern kurze Spannungseinbrüche, Überspannungen, Spannungsspitzen, Frequenzschwankungen oder Oberschwingungen.</li>
          <li>Kontrolliertes Herunterfahren: Über USB, serielle Schnittstelle oder Netzwerkkarte (SNMP) meldet die USV einen niedrigen Batteriestand an die Server; eine Software fährt sie automatisch herunter.</li>
        </ul>
        <h5>Klassifizierung nach IEC 62040-3 (Stufe 1)</h5>
        <table><thead><tr><th>Klasse</th><th>Bauart</th><th>Arbeitsweise</th><th>Umschaltzeit</th><th>Schutzumfang</th><th>Einsatz</th></tr></thead><tbody>
          <tr><td><strong>VFD</strong> (Voltage and Frequency Dependent)</td><td>Offline / Standby</td><td>Last hängt normal direkt am Netz; bei Störung schaltet sie auf den Wechselrichter um</td><td>wenige ms (ca. 2–10 ms)</td><td>Netzausfall, grobe Einbrüche und Spitzen</td><td>Einzel-PC, Homeoffice</td></tr>
          <tr><td><strong>VI</strong> (Voltage Independent)</td><td>Line-Interactive</td><td>zusätzlich Spannungsregelung (AVR) im Netzbetrieb</td><td>ca. 2–4 ms</td><td>auch dauerhafte Unter- und Überspannung</td><td>Netzwerkschrank, kleine Server</td></tr>
          <tr><td><strong>VFI</strong> (Voltage and Frequency Independent)</td><td>Online / Doppelwandler</td><td>Gleichrichter → Batterie/Zwischenkreis → Wechselrichter ständig in Betrieb</td><td>0 ms</td><td>alle Netzstörungen inkl. Frequenzschwankungen</td><td>Serverraum, Rechenzentrum</td></tr>
        </tbody></table>
        <p><strong>Stufe 2</strong> beschreibt mit zwei Buchstaben die Kurvenform der Ausgangsspannung im Netz- und im Batteriebetrieb: S = sinusförmig (auch bei nichtlinearer Last), X = sinusförmig nur bei linearer Last, Y = nicht sinusförmig (z. B. Rechteck). <strong>Stufe 3</strong> gibt mit drei Ziffern das dynamische Verhalten bei Betriebsartwechsel und Lastsprüngen an: 1 = ohne Unterbrechung, 2 = Unterbrechung bis ca. 1 ms, 3 = bis ca. 10 ms (für die meisten Schaltnetzteile noch ausreichend).</p>
        <div class="callout merke"><strong>Merke:</strong> Die bestmögliche Einstufung lautet <strong>VFI-SS-111</strong> (Online-USV). Nachteil der Online-Technik: höherer Preis und durch die Doppelwandlung mehr Abwärme (geringerer Wirkungsgrad). Viele Geräte bieten deshalb einen Eco-Modus.</div>
        <h5>Dimensionierung</h5>
        <p>USVs werden mit zwei Leistungsangaben verkauft: <strong>Scheinleistung S in VA</strong> und <strong>Wirkleistung P in W</strong>. Beide Grenzen müssen eingehalten werden.</p>
        <div class="callout formel"><strong>Leistungsfaktor:</strong> P = S × cos φ &nbsp;→&nbsp; S = P ÷ cos φ<br>Scheinleistung: S = U × I (in VA)</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> Zu versorgen sind 2 Server mit je 540 W (cos φ = 0,9), ein NAS mit 160 W (cos φ = 0,8) sowie Switch und Firewall mit zusammen 120 W (cos φ = 0,8).<br>
          Server: 540 W ÷ 0,9 = 600 VA (je Server); NAS: 160 W ÷ 0,8 = 200 VA; Switch/Firewall: 120 W ÷ 0,8 = 150 VA<br>
          Summe: P = 540 + 540 + 160 + 120 = 1360 W; S = 600 + 600 + 200 + 150 = 1550 VA<br>
          Mit 25 % Reserve: P = 1360 W × 1,25 = 1700 W; S = 1550 VA × 1,25 = 1937,5 VA<br>
          Auswahl: Eine USV mit <strong>2200 VA / 1980 W</strong> erfüllt beide Werte; ein Modell mit 1500 VA / 1350 W wäre zu klein.</div>
        <h5>Überbrückungszeit (Autonomiezeit)</h5>
        <p>Wie lange die USV durchhält, hängt von der Batteriekapazität und der Last ab und steht in den Laufzeittabellen des Herstellers. Halbe Last bedeutet deutlich mehr als die doppelte Laufzeit. Grobe Abschätzung über die gespeicherte Energie: t ≈ (U_Batt × Kapazität × η_Wechselrichter) ÷ P.</p>
        <div class="callout beispiel"><strong>Beispiel:</strong> Batterie 48 V, 9 Ah → 48 V × 9 Ah = 432 Wh; η = 0,9; Last 540 W.<br>
          t ≈ 432 Wh × 0,9 ÷ 540 W = 0,72 h ≈ 43 min (theoretischer Höchstwert – real weniger, da die Batterie nicht vollständig entladen wird und altert).</div>
        <p>Die benötigte Zeit ergibt sich aus der Dauer für das geordnete Herunterfahren aller Systeme plus Sicherheitsreserve bzw. aus der Startzeit des Notstromaggregats.</p>
        <h5>Bypass</h5>
        <ul>
          <li><strong>Automatischer (statischer) Bypass:</strong> Bei Überlast oder einem Fehler im Wechselrichter schaltet die USV die Verbraucher direkt ans Netz. Die Versorgung bleibt erhalten, aber ohne Schutzfunktion.</li>
          <li><strong>Manueller Wartungsbypass:</strong> Ermöglicht Wartung, Batterietausch oder den Austausch der USV, ohne die Server abzuschalten.</li>
        </ul>
        <div class="callout achtung"><strong>Prüfungsfallen:</strong> Watt und VA nicht gleichsetzen – sonst wird die USV zu klein. Batterien (meist Blei-Vlies/AGM) altern: Lebensdauer typisch 3–5 Jahre, bei hoher Raumtemperatur deutlich kürzer; regelmäßige Batterietests einplanen. Laserdrucker gehören wegen hoher Einschaltströme nicht an die USV.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Erläutern Sie die Funktionsweise einer VFI-USV“, „Berechnen Sie die erforderliche Scheinleistung und wählen Sie ein Modell aus“, „Beschreiben Sie die Aufgabe des Bypasses“, „Nennen Sie Maßnahmen, damit Server bei einem Stromausfall ohne Datenverlust herunterfahren“. In der AP1 kommt die USV eher qualitativ als Maßnahme für das Schutzziel Verfügbarkeit vor (z. B. für NAS oder Server), in der AP2 (Konzeption und Administration) mit Dimensionierung und Klassenwahl.</div>
      `
    },
    {
      id: "ipv4-client",
      title: "IPv4-Grundlagen & Client-Konfiguration",
      exam: ["AP1", "AP2"],
      summary: "Adresse, Subnetzmaske/CIDR, Netz- und Broadcastadresse, private Bereiche, Gateway, DNS, DHCP – und die Diagnose mit ipconfig, ping, tracert, nslookup und arp.",
      html: `
        <h5>Aufbau einer IPv4-Adresse</h5>
        <p>Eine IPv4-Adresse ist <strong>32 Bit</strong> lang und wird in vier Oktetten dezimal geschrieben, z. B. <code>192.168.10.37</code>. Die <strong>Subnetzmaske</strong> legt fest, welcher Teil die Netzadresse und welcher den Host bezeichnet: Einsen = Netzanteil, Nullen = Hostanteil. Die CIDR-Schreibweise zählt die Einsen: 255.255.255.0 = <code>/24</code>.</p>
        <table><thead><tr><th>CIDR</th><th>Maske</th><th>nutzbare Hosts</th></tr></thead><tbody>
          <tr><td>/8</td><td>255.0.0.0</td><td>16.777.214</td></tr>
          <tr><td>/16</td><td>255.255.0.0</td><td>65.534</td></tr>
          <tr><td>/24</td><td>255.255.255.0</td><td>254</td></tr>
          <tr><td>/26</td><td>255.255.255.192</td><td>62</td></tr>
          <tr><td>/28</td><td>255.255.255.240</td><td>14</td></tr>
          <tr><td>/30</td><td>255.255.255.252</td><td>2</td></tr>
        </tbody></table>
        <div class="callout formel"><strong>Hosts pro Netz:</strong> 2^(32 − Präfixlänge) − 2 &nbsp;(Netzadresse und Broadcastadresse sind nicht nutzbar)<br><strong>Netzadresse:</strong> alle Hostbits 0 &nbsp;|&nbsp; <strong>Broadcast:</strong> alle Hostbits 1</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> Client 192.168.10.37/26<br>
          /26 → Maske 255.255.255.192, Blockgröße im 4. Oktett: 256 − 192 = 64 → Netze beginnen bei .0, .64, .128, .192<br>
          37 liegt im Block 0–63 → Netzadresse <strong>192.168.10.0</strong>, Broadcast <strong>192.168.10.63</strong><br>
          Nutzbar: 192.168.10.1 bis 192.168.10.62 = 2⁶ − 2 = <strong>62 Hosts</strong></div>
        <h5>Ein Netz in gleich große Subnetze aufteilen</h5>
        <p>Für jede Verdopplung der Subnetzanzahl „leihst“ du dir ein Bit aus dem Hostanteil: n geliehene Bits → 2ⁿ Subnetze. Die Präfixlänge steigt um n, die Blockgröße halbiert sich jedes Mal.</p>
        <div class="callout formel"><strong>Subnetze:</strong> Anzahl = 2^(geliehene Bits) &nbsp;|&nbsp; neue Präfixlänge = alte Präfixlänge + geliehene Bits &nbsp;|&nbsp; Blockgröße = 2^(32 − neue Präfixlänge)</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> Das Netz 192.168.10.0/24 soll in 4 gleich große Subnetze für Verwaltung, Vertrieb, Technik und Gäste geteilt werden.<br>
          4 Subnetze = 2² → 2 Bit leihen → /24 + 2 = <strong>/26</strong> (255.255.255.192), Blockgröße 2⁶ = 64, je 62 nutzbare Hosts<br>
          1. Subnetz: 192.168.10.0 – .63 (Hosts .1 – .62)<br>
          2. Subnetz: 192.168.10.64 – .127 (Hosts .65 – .126)<br>
          3. Subnetz: 192.168.10.128 – .191 (Hosts .129 – .190)<br>
          4. Subnetz: 192.168.10.192 – .255 (Hosts .193 – .254)</div>
        <p>Ausführliches Subnetting (auch über Oktettgrenzen hinweg und mit unterschiedlich großen Netzen, VLSM) vertiefst du in LF 9.</p>
        <h5>Besondere Adressbereiche</h5>
        <ul>
          <li><strong>Privat</strong> (im Internet nicht geroutet, NAT nötig): 10.0.0.0/8, 172.16.0.0/12 (172.16.0.0–172.31.255.255), 192.168.0.0/16</li>
          <li><strong>Loopback:</strong> 127.0.0.0/8, meist 127.0.0.1 (der eigene Rechner)</li>
          <li><strong>APIPA / Link-Local:</strong> 169.254.0.0/16 – vergibt sich Windows selbst, wenn kein DHCP-Server antwortet</li>
        </ul>
        <h5>Was ein Client braucht</h5>
        <table><thead><tr><th>Einstellung</th><th>Zweck</th></tr></thead><tbody>
          <tr><td>IP-Adresse + Subnetzmaske</td><td>eindeutige Adresse im eigenen Netz</td></tr>
          <tr><td>Standardgateway</td><td>Router-Adresse im <em>eigenen</em> Netz; Ziel für alle Pakete in fremde Netze</td></tr>
          <tr><td>DNS-Server</td><td>übersetzt Namen (z. B. www.ihk.de) in IP-Adressen</td></tr>
        </tbody></table>
        <h5>DHCP – automatische Konfiguration</h5>
        <p>Ein DHCP-Server verteilt IP-Adresse, Maske, Gateway, DNS-Server und Lease-Dauer. Ablauf <strong>DORA</strong> (UDP, Server-Port 67, Client-Port 68):</p>
        <ol>
          <li><strong>Discover</strong> – Client sucht per Broadcast einen DHCP-Server.</li>
          <li><strong>Offer</strong> – Server bietet eine Adresse an.</li>
          <li><strong>Request</strong> – Client fordert die angebotene Adresse an (ebenfalls per Broadcast, damit andere DHCP-Server ihr Angebot zurückziehen).</li>
          <li><strong>Acknowledge</strong> – Server bestätigt, die Lease beginnt.</li>
        </ol>
        <p>Server, Drucker und Netzwerkgeräte bekommen feste Adressen – statisch oder als DHCP-Reservierung anhand der MAC-Adresse.</p>
        <h5>ARP – von der IP- zur MAC-Adresse</h5>
        <p>Im lokalen Netz werden Frames an MAC-Adressen geschickt. Kennt der Client zu einer Ziel-IP im eigenen Netz die MAC-Adresse noch nicht, sendet er eine <strong>ARP-Anfrage als Broadcast</strong> („Wer hat 192.168.10.1? Bitte an 192.168.10.37 melden.“). Nur das Gerät mit dieser IP antwortet per Unicast mit seiner MAC-Adresse. Das Ergebnis wird im <strong>ARP-Cache</strong> zwischengespeichert (<code>arp -a</code>). Liegt das Ziel in einem fremden Netz, fragt der Client per ARP nach der MAC-Adresse des <strong>Standardgateways</strong>.</p>
        <h5>DNS – vom Namen zur IP-Adresse</h5>
        <p>Der Client fragt den eingetragenen DNS-Server, welche IP-Adresse zu einem Namen gehört (Resolver). Vorher schaut Windows in den eigenen DNS-Cache (<code>ipconfig /displaydns</code>) und in die lokale Datei <code>hosts</code>. Wichtige Eintragstypen: <strong>A</strong> (Name → IPv4), <strong>AAAA</strong> (Name → IPv6), <strong>PTR</strong> (IP → Name, Reverse Lookup), <strong>MX</strong> (Mailserver einer Domäne), <strong>CNAME</strong> (Alias). Mit <code>nslookup www.ihk.de</code> prüfst du, ob und von welchem Server ein Name aufgelöst wird.</p>
        <h5>Diagnosebefehle</h5>
        <table><thead><tr><th>Windows</th><th>Linux</th><th>Zweck</th></tr></thead><tbody>
          <tr><td><code>ipconfig /all</code></td><td><code>ip a</code>, <code>ip r</code></td><td>IP-Konfiguration, MAC, DHCP, Gateway, DNS anzeigen</td></tr>
          <tr><td><code>ipconfig /release</code>, <code>/renew</code></td><td>je nach Distribution z. B. <code>nmcli</code> oder <code>dhclient -r</code> / <code>dhclient</code></td><td>DHCP-Adresse freigeben / neu anfordern</td></tr>
          <tr><td><code>ipconfig /flushdns</code></td><td><code>resolvectl flush-caches</code> (systemd)</td><td>DNS-Cache des Clients leeren</td></tr>
          <tr><td><code>ping</code></td><td><code>ping</code></td><td>Erreichbarkeit und Antwortzeit (ICMP Echo)</td></tr>
          <tr><td><code>tracert</code></td><td><code>traceroute</code></td><td>Weg über die Router (Hops) verfolgen</td></tr>
          <tr><td><code>nslookup</code></td><td><code>nslookup</code>, <code>dig</code></td><td>DNS-Auflösung prüfen</td></tr>
          <tr><td><code>arp -a</code></td><td><code>ip neigh</code></td><td>ARP-Cache: Zuordnung IP → MAC im lokalen Netz</td></tr>
        </tbody></table>
        <h5>Systematisch testen (von innen nach außen)</h5>
        <pre><code>ping 127.0.0.1          (1) TCP/IP-Stack des Clients
ping 192.168.10.37      (2) eigene Adresse / Netzwerkkarte
ping 192.168.10.1       (3) Standardgateway im eigenen Netz
ping 1.1.1.1            (4) Adresse im Internet – Routing
ping www.ihk.de         (5) Namensauflösung per DNS</code></pre>
        <div class="callout tipp"><strong>Auswertung:</strong> (4) klappt, (5) nicht → DNS-Problem. (3) klappt nicht → Kabel, Switchport, VLAN oder falsche Maske/Adresse. Adresse 169.254.x.x → DHCP-Server nicht erreichbar. Antwortzeiten im 100-ms-Bereich statt unter 10 ms im LAN deuten auf Überlast oder Funkstörungen hin; „Zeitüberschreitung“ kann auch eine Firewall bedeuten, die ICMP blockiert.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Das Gateway muss im selben Subnetz liegen wie der Client. 192.168.10.37/26 mit Gateway 192.168.10.65 funktioniert nicht – .65 gehört zum Netz 192.168.10.64/26.</div>
        <h5>Testprotokoll</h5>
        <p>Die Einbindung wird dokumentiert: Datum, Prüfer, Gerät (Name, MAC, Standort), Testfall, erwartetes Ergebnis (Soll), tatsächliches Ergebnis (Ist), Bewertung (i. O. / n. i. O.), Maßnahme, Unterschrift. So ist die Leistung nachweisbar und bei Fehlern nachvollziehbar.</p>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> IP-Einstellungen eines Clients in eine Maske eintragen, Netz- und Broadcastadresse sowie Hostanzahl bestimmen, eine <code>ipconfig</code>- oder <code>ping</code>-Ausgabe analysieren, den DHCP-Ablauf beschreiben oder ein Testprotokoll ergänzen.</div>
      `
    },
    {
      id: "ipv6",
      title: "IPv6-Grundlagen",
      exam: ["AP1", "AP2"],
      summary: "128-Bit-Adressen, Kürzungsregeln, Präfix und Interface-ID, Adresstypen (GUA, Link-Local, ULA, Multicast), SLAAC, NDP und Unterschiede zu IPv4.",
      html: `
        <p>IPv4 bietet nur rund 4,3 Milliarden Adressen – längst zu wenig. IPv6 nutzt <strong>128 Bit</strong> (2¹²⁸ ≈ 3,4 × 10³⁸ Adressen) und wird parallel zu IPv4 betrieben (Dual Stack).</p>
        <h5>Schreibweise</h5>
        <p>Acht Blöcke zu je 16 Bit, jeweils vier Hexadezimalziffern, getrennt durch Doppelpunkte:<br><code>2001:0db8:0000:0000:0000:0000:0a00:0001</code></p>
        <h5>Kürzungsregeln (RFC 5952)</h5>
        <ol>
          <li>Führende Nullen in einem Block dürfen entfallen: <code>0db8</code> → <code>db8</code>, <code>0000</code> → <code>0</code>.</li>
          <li>Eine zusammenhängende Folge von Null-Blöcken darf durch <code>::</code> ersetzt werden – <strong>nur einmal</strong> pro Adresse (sonst ist unklar, wie viele Blöcke fehlen). Man ersetzt die längste Folge; bei gleich langen die erste. Ein einzelner Null-Block wird nach RFC 5952 nicht durch <code>::</code> ersetzt, sondern als <code>0</code> geschrieben.</li>
          <li>Hexziffern werden kleingeschrieben.</li>
        </ol>
        <div class="callout beispiel"><strong>Beispiele:</strong><br>
          2001:0db8:0000:0000:0000:0000:0a00:0001 → <strong>2001:db8::a00:1</strong><br>
          2001:0db8:0000:0000:0001:0000:0000:0001 → <strong>2001:db8::1:0:0:1</strong> (zwei gleich lange Nullfolgen → die erste wird gekürzt)<br>
          Rückwärts: 2001:db8:a::12 hat 4 Blöcke → :: steht für 8 − 4 = 4 Null-Blöcke → 2001:0db8:000a:0000:0000:0000:0000:0012</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Nur <em>führende</em> Nullen dürfen weg: <code>0a00</code> wird zu <code>a00</code>, nicht zu <code>a</code>. Und <code>2001:db8::1::5</code> ist ungültig (zweimal ::).</div>
        <h5>Präfix und Interface-ID</h5>
        <p>Wie bei CIDR gibt die Präfixlänge den Netzanteil an. Im LAN ist <strong>/64</strong> Standard: Die ersten 64 Bit sind das Netzpräfix (Routing-Präfix + Subnetz-ID), die letzten 64 Bit die <strong>Interface-ID</strong> des Geräts. Ein Unternehmen erhält vom Provider z. B. ein /48 und kann daraus 2¹⁶ = 65.536 Subnetze mit /64 bilden.</p>
        <h5>Adresstypen</h5>
        <table><thead><tr><th>Typ</th><th>Präfix</th><th>Beispiel</th><th>Bedeutung</th></tr></thead><tbody>
          <tr><td>Global Unicast (GUA)</td><td>2000::/3</td><td>2001:db8:… (Dokumentationsbereich)</td><td>weltweit eindeutig und routbar – entspricht öffentlichen IPv4-Adressen</td></tr>
          <tr><td>Link-Local (LLA)</td><td>fe80::/10</td><td>fe80::1c2b:3aff:fe4d:5e6f</td><td>jedes IPv6-Interface hat automatisch eine; nur im lokalen Segment gültig, wird nicht geroutet</td></tr>
          <tr><td>Unique Local (ULA)</td><td>fc00::/7 (genutzt: fd00::/8)</td><td>fd12:3456:789a:1::10</td><td>privat, vergleichbar mit 192.168.x.x</td></tr>
          <tr><td>Multicast</td><td>ff00::/8</td><td>ff02::1 (alle Knoten), ff02::2 (alle Router)</td><td>an eine Gruppe; IPv6 kennt <strong>keinen Broadcast</strong></td></tr>
          <tr><td>Loopback</td><td>::1/128</td><td>::1</td><td>der eigene Rechner (wie 127.0.0.1)</td></tr>
        </tbody></table>
        <h5>Autokonfiguration</h5>
        <ul>
          <li><strong>SLAAC</strong> (Stateless Address Autoconfiguration): Der Router sendet Router Advertisements mit dem Präfix; der Client bildet seine Interface-ID selbst (zufällig oder nach EUI-64) und prüft per DAD (Duplicate Address Detection), ob die Adresse frei ist.</li>
          <li><strong>DHCPv6</strong>: zustandsbehaftet (Server vergibt Adressen) oder zustandslos (nur Zusatzinfos wie DNS).</li>
          <li><strong>NDP</strong> (Neighbor Discovery Protocol, Teil von ICMPv6) ersetzt ARP und findet Router und Nachbarn.</li>
        </ul>
        <div class="callout beispiel"><strong>Beispiel EUI-64:</strong> MAC 00-1A-2B-3C-4D-5E<br>
          1. In der Mitte FFFE einfügen: 001A:2BFF:FE3C:4D5E<br>
          2. Das 7. Bit des ersten Bytes umkehren (U/L-Bit): 00 → 02<br>
          Interface-ID: <strong>021a:2bff:fe3c:4d5e</strong> → Link-Local-Adresse fe80::21a:2bff:fe3c:4d5e</div>
        <h5>IPv4 und IPv6 im Vergleich</h5>
        <table><thead><tr><th>Merkmal</th><th>IPv4</th><th>IPv6</th></tr></thead><tbody>
          <tr><td>Adresslänge</td><td>32 Bit, dezimal mit Punkten</td><td>128 Bit, hexadezimal mit Doppelpunkten</td></tr>
          <tr><td>Broadcast</td><td>ja</td><td>nein – Multicast</td></tr>
          <tr><td>Adressauflösung</td><td>ARP</td><td>NDP (ICMPv6)</td></tr>
          <tr><td>Autokonfiguration</td><td>DHCP, sonst APIPA</td><td>SLAAC, DHCPv6, Link-Local immer vorhanden</td></tr>
          <tr><td>NAT</td><td>wegen Adressmangel üblich</td><td>nicht nötig</td></tr>
          <tr><td>Header</td><td>variabel, mit Prüfsumme</td><td>fest 40 Byte, ohne Prüfsumme, Erweiterungs-Header</td></tr>
        </tbody></table>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Kürzen Sie die folgende IPv6-Adresse“ bzw. „Schreiben Sie sie vollständig aus“, „Nennen Sie zwei Unterschiede zwischen IPv4 und IPv6“, „Ordnen Sie die Adresse fe80::… einem Adresstyp zu“. IPv6 kam in 4 der 10 AP1-Prüfungen von Herbst 2021 bis Frühjahr 2026 vor (zusammen rund 28 Punkte).</div>
      `
    },
    {
      id: "wlan",
      title: "WLAN: Standards, Frequenzbänder & Verschlüsselung",
      exam: ["AP1", "AP2"],
      summary: "IEEE 802.11 von b bis be (Wi-Fi 4 bis 7), 2,4/5/6 GHz, Betriebsarten, WPA2 und WPA3 (Personal/Enterprise) und sichere Konfiguration.",
      html: `
        <p>WLAN (Wireless LAN) ist in IEEE 802.11 genormt. Alle Clients einer Funkzelle teilen sich das Medium und senden abwechselnd (Zugriffsverfahren CSMA/CA, Halbduplex). Deshalb liegt die tatsächlich erreichbare <strong>Nettodatenrate</strong> meist nur bei etwa der Hälfte der beworbenen Bruttorate – und sie wird unter allen aktiven Clients aufgeteilt.</p>
        <h5>Standards im Überblick</h5>
        <table><thead><tr><th>IEEE</th><th>Marketingname</th><th>Jahr</th><th>Frequenzband</th><th>max. Bruttodatenrate</th></tr></thead><tbody>
          <tr><td>802.11b</td><td>–</td><td>1999</td><td>2,4 GHz</td><td>11 Mbit/s</td></tr>
          <tr><td>802.11a</td><td>–</td><td>1999</td><td>5 GHz</td><td>54 Mbit/s</td></tr>
          <tr><td>802.11g</td><td>–</td><td>2003</td><td>2,4 GHz</td><td>54 Mbit/s</td></tr>
          <tr><td>802.11n</td><td>Wi-Fi 4</td><td>2009</td><td>2,4 und 5 GHz</td><td>600 Mbit/s</td></tr>
          <tr><td>802.11ac</td><td>Wi-Fi 5</td><td>2013</td><td>5 GHz</td><td>≈ 6,9 Gbit/s</td></tr>
          <tr><td>802.11ax</td><td>Wi-Fi 6 / 6E</td><td>2019/2021</td><td>2,4 und 5 GHz, bei 6E zusätzlich 6 GHz</td><td>≈ 9,6 Gbit/s</td></tr>
          <tr><td>802.11be</td><td>Wi-Fi 7</td><td>2024</td><td>2,4, 5 und 6 GHz</td><td>≈ 46 Gbit/s</td></tr>
        </tbody></table>
        <p>Wichtige Techniken: <strong>MIMO</strong> (mehrere Antennen, mehrere parallele Datenströme), <strong>MU-MIMO</strong> (mehrere Clients gleichzeitig), <strong>OFDMA</strong> ab Wi-Fi 6 (Kanal wird in Teilbereiche für mehrere Clients aufgeteilt – gut bei vielen Geräten), breitere Kanäle (bis 160 MHz, bei Wi-Fi 7 bis 320 MHz) und <strong>Multi-Link Operation</strong> bei Wi-Fi 7 (gleichzeitig über mehrere Bänder).</p>
        <h5>Frequenzbänder</h5>
        <table><thead><tr><th>Band</th><th>Vorteile</th><th>Nachteile</th></tr></thead><tbody>
          <tr><td>2,4 GHz</td><td>größere Reichweite, dringt besser durch Wände, von allen Geräten unterstützt</td><td>nur drei überlappungsfreie Kanäle (z. B. 1, 6, 11), Störungen durch Bluetooth, Mikrowellen, Nachbarnetze</td></tr>
          <tr><td>5 GHz</td><td>viele Kanäle, höhere Datenraten, weniger Störungen</td><td>geringere Reichweite; auf manchen Kanälen DFS (Ausweichen bei Radar)</td></tr>
          <tr><td>6 GHz</td><td>viel freies Spektrum, breite Kanäle, kaum Altgeräte</td><td>noch geringere Reichweite, nur neue Geräte (Wi-Fi 6E/7), WPA3 Pflicht; in der EU ist für WLAN nur der untere Teil (5.945–6.425 MHz) freigegeben (Stand 2026; über den oberen Teil wird auf EU-Ebene noch entschieden)</td></tr>
        </tbody></table>
        <h5>Betriebsarten</h5>
        <ul>
          <li><strong>Infrastrukturmodus:</strong> Clients verbinden sich mit einem Access Point. Mehrere APs mit derselben SSID bilden ein ESS – Clients können zwischen ihnen wechseln (Roaming). In Firmen verwaltet oft ein WLAN-Controller alle APs zentral.</li>
          <li><strong>Ad-hoc-Modus:</strong> Geräte verbinden sich direkt miteinander, ohne AP.</li>
          <li><strong>Mesh:</strong> APs verbinden sich per Funk untereinander und leiten Daten weiter – nur ein AP braucht einen Kabelanschluss.</li>
        </ul>
        <h5>Verschlüsselung</h5>
        <table><thead><tr><th>Verfahren</th><th>Technik</th><th>Bewertung</th></tr></thead><tbody>
          <tr><td>WEP</td><td>RC4</td><td>gebrochen – nie verwenden</td></tr>
          <tr><td>WPA</td><td>TKIP</td><td>veraltet, unsicher</td></tr>
          <tr><td>WPA2</td><td>AES-CCMP; Personal (PSK) oder Enterprise (802.1X)</td><td>noch verbreitet; PSK anfällig für Offline-Wörterbuchangriffe bei schwachem Passwort</td></tr>
          <tr><td>WPA3</td><td>Personal: weiterhin eine Passphrase, aber Schlüsselaushandlung per SAE statt des PSK-Handshakes; Schutz der Management-Frames (PMF) Pflicht; Enterprise optional mit 192-Bit-Sicherheit</td><td>aktueller Standard, Pflicht im 6-GHz-Band</td></tr>
        </tbody></table>
        <div class="grid-2"><div class="callout merke"><strong>Personal:</strong> Alle Nutzer teilen sich einen Schlüssel (Passphrase). Einfach, aber scheidet ein Mitarbeiter aus, muss der Schlüssel überall geändert werden.</div><div class="callout merke"><strong>Enterprise:</strong> Jeder Nutzer meldet sich einzeln an (Benutzerkonto oder Zertifikat), geprüft über 802.1X/EAP an einem RADIUS-Server. Konten sind einzeln sperrbar – Standard im Unternehmen.</div></div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> SSID verstecken und MAC-Filter sind <em>keine</em> wirksamen Schutzmaßnahmen – die SSID taucht trotzdem im Funkverkehr auf und MAC-Adressen lassen sich fälschen. Wirksam sind WPA3 (bzw. WPA2/WPA3), eine lange zufällige Passphrase, geändertes Admin-Passwort, deaktiviertes WPS, aktuelle Firmware und ein getrenntes Gäste-WLAN.</div>
        <div class="callout beispiel"><strong>Beispiel Empfehlung:</strong> Die Nordlicht IT GmbH in Heide möchte 40 Notebooks und Besucher-Smartphones per WLAN anbinden. Empfehlung: Wi-Fi-6-Access-Points (viele Clients → OFDMA) mit PoE+, Betrieb vorrangig im 5-GHz-Band, Mitarbeiter-WLAN mit WPA3-Enterprise über RADIUS, separates Gäste-WLAN in eigenem VLAN mit Internetzugang, aber ohne Zugriff auf das Firmennetz.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Vergleichen Sie 2,4 GHz und 5 GHz“, „Erläutern Sie den Unterschied zwischen WPA2-Personal und WPA3-Enterprise“, „Nennen Sie Maßnahmen zur Absicherung eines WLANs“, „Warum erreicht ein Notebook nicht die im Datenblatt angegebene Datenrate?“ – oft mit englischem Datenblatt.</div>
      `
    },
    {
      id: "fernzugriff",
      title: "Fernzugriff im Homeoffice: Remote Desktop & VPN-Client",
      exam: ["AP1", "AP2"],
      summary: "Remote Desktop (RDP) einrichten und absichern, VPN-Arten und -Protokolle, VPN-Client konfigurieren und testen, sicheres mobiles Arbeiten.",
      html: `
        <p>Homeoffice und mobiles Arbeiten sind Alltag – deshalb gehört der sichere Fernzugriff dazu, wenn du einen Client einbindest. Zwei Bausteine musst du unterscheiden: Das <strong>VPN</strong> schafft einen sicheren Weg ins Firmennetz, <strong>Remote Desktop</strong> überträgt den Bildschirm eines entfernten Rechners. „Remotearbeit“ und „VPN“ kamen in mehreren AP1-Prüfungen vor.</p>
        <h5>Möglichkeiten im Überblick</h5>
        <table><thead><tr><th>Verfahren</th><th>Was passiert?</th><th>typischer Einsatz</th></tr></thead><tbody>
          <tr><td>VPN (Client-to-Site)</td><td>Der Client wird über einen verschlüsselten Tunnel logisch Teil des Firmennetzes.</td><td>Homeoffice, Außendienst: Netzlaufwerke, Intranet, interne Anwendungen</td></tr>
          <tr><td>Remote Desktop (RDP)</td><td>Bild, Tastatur und Maus eines entfernten Windows-Rechners werden übertragen; die Programme laufen auf dem entfernten Rechner.</td><td>am Büro-PC oder Terminalserver arbeiten, Server administrieren</td></tr>
          <tr><td>Fernwartung (z. B. Windows-Schnellhilfe)</td><td>Ein Supporter sieht oder steuert den Bildschirm eines Anwenders – nur nach dessen Zustimmung.</td><td>1st-/2nd-Level-Support</td></tr>
          <tr><td>SSH</td><td>verschlüsselte Kommandozeile (TCP 22)</td><td>Linux-Server, Switches und Router administrieren</td></tr>
        </tbody></table>
        <h5>Remote Desktop einrichten (Windows)</h5>
        <ol>
          <li><strong>Edition prüfen:</strong> Der Zielrechner braucht Windows Pro, Enterprise oder Education. Mit Windows Home kann man nur auf andere Rechner zugreifen, sich selbst aber nicht fernsteuern lassen.</li>
          <li><strong>Remotedesktop aktivieren</strong> (Einstellungen → System → Remotedesktop) und die <strong>Authentifizierung auf Netzwerkebene (NLA)</strong> eingeschaltet lassen: Die Anmeldung wird geprüft, bevor eine Sitzung aufgebaut wird.</li>
          <li><strong>Berechtigte Benutzer festlegen:</strong> Anmelden dürfen nur Administratoren und Mitglieder der Gruppe „Remotedesktopbenutzer“ – so wenige Konten wie möglich.</li>
          <li><strong>Firewall:</strong> Beim Aktivieren wird die Regel für Remotedesktop (TCP 3389, zusätzlich UDP 3389) freigegeben; den Zugriff möglichst auf den VPN-Adressbereich beschränken.</li>
          <li><strong>Energieoptionen:</strong> Der Zielrechner darf nicht in den Energiesparmodus gehen (oder Wake-on-LAN einrichten).</li>
          <li><strong>Verbinden:</strong> Am Client die „Remotedesktopverbindung“ (<code>mstsc</code>) starten, Rechnername oder IP-Adresse eingeben und mit dem Domänenkonto anmelden.</li>
        </ol>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> RDP nie per Portweiterleitung direkt aus dem Internet erreichbar machen! Offene 3389-Ports werden automatisiert mit Passwortlisten angegriffen (Brute Force) und sind ein häufiger Einstieg für Ransomware. Richtig: Zugriff nur über VPN oder ein Remotedesktop-Gateway, zusätzlich mit Multi-Faktor-Authentifizierung.</div>
        <h5>RDP absichern – Checkliste</h5>
        <ul>
          <li>Erreichbarkeit nur über VPN bzw. Gateway, NLA aktiv</li>
          <li>nur persönliche, berechtigte Konten (Least Privilege), starke Passwörter und MFA</li>
          <li>Kontosperrung nach mehreren Fehlversuchen, Anmeldungen protokollieren</li>
          <li>Updates zeitnah einspielen – RDP hatte kritische Lücken (z. B. „BlueKeep“ 2019)</li>
          <li>Laufwerks- und Zwischenablage-Umleitung bei Bedarf sperren, damit keine Firmendaten auf private Geräte gelangen</li>
        </ul>
        <h5>VPN – Virtual Private Network</h5>
        <p>Ein VPN baut über ein unsicheres Netz (Internet) einen <strong>verschlüsselten Tunnel</strong> auf: Die Originalpakete werden verschlüsselt und in neue Pakete verpackt (Tunneling). Damit sichert das VPN die <strong>Vertraulichkeit</strong> (Verschlüsselung), die <strong>Integrität</strong> (Prüfwerte erkennen Veränderungen) und die <strong>Authentizität</strong> (Anmeldung von Benutzer bzw. Gerät, z. B. per Zertifikat).</p>
        <table><thead><tr><th>VPN-Art</th><th>verbindet</th><th>Beispiel</th><th>Besonderheit</th></tr></thead><tbody>
          <tr><td>Client-to-Site (Remote Access, End-to-Site)</td><td>einzelnes Endgerät ↔ Firmennetz (VPN-Gateway, meist die Firewall)</td><td>Homeoffice, Außendienst</td><td>VPN-Client auf dem Endgerät nötig</td></tr>
          <tr><td>Site-to-Site</td><td>zwei Standortnetze über Router/Firewalls</td><td>Filiale Husum ↔ Zentrale Heide</td><td>dauerhaft; die Endgeräte merken nichts davon</td></tr>
          <tr><td>End-to-End</td><td>zwei einzelne Endgeräte direkt</td><td>Admin-PC ↔ Server</td><td>Tunnel reicht bis zum Zielgerät</td></tr>
        </tbody></table>
        <table><thead><tr><th>Protokoll</th><th>Merkmale</th><th>typische Ports</th></tr></thead><tbody>
          <tr><td>IPsec (mit IKEv2)</td><td>arbeitet auf Schicht 3, Standard für Site-to-Site, auch für Clients</td><td>UDP 500 und 4500 (NAT-Traversal), ESP</td></tr>
          <tr><td>SSL/TLS-VPN (z. B. OpenVPN)</td><td>nutzt TLS, kommt fast durch jede Firewall</td><td>OpenVPN standardmäßig UDP 1194, oft auch TCP 443</td></tr>
          <tr><td>WireGuard</td><td>schlank, moderne Kryptografie, schneller Verbindungsaufbau</td><td>UDP, häufig 51820</td></tr>
          <tr><td>PPTP</td><td>veraltet und unsicher – nicht mehr verwenden</td><td>TCP 1723</td></tr>
        </tbody></table>
        <h5>VPN-Client einrichten und testen</h5>
        <ol>
          <li>VPN-Client installieren (oder den in Windows integrierten Client nutzen) und das Profil der IT importieren: Serveradresse, Protokoll, ggf. Zertifikat.</li>
          <li>Authentifizierung einrichten: Benutzerkonto mit zweitem Faktor (Authenticator-App, Token) oder Gerätezertifikat.</li>
          <li>Verbindung aufbauen und testen: <code>ipconfig</code> zeigt einen zusätzlichen (virtuellen) Adapter mit einer Adresse aus dem VPN-Adresspool; <code>ping</code> auf einen internen Server; <code>nslookup</code> auf einen internen Namen (interner DNS); Netzlaufwerk öffnen.</li>
          <li>Ergebnis im Testprotokoll dokumentieren und die Nutzerin bzw. den Nutzer einweisen (Verbindung starten und trennen, was tun bei Fehlern).</li>
        </ol>
        <div class="grid-2"><div class="callout merke"><strong>Full Tunnel:</strong> Der gesamte Datenverkehr läuft durch den Tunnel ins Firmennetz – auch das Surfen im Internet. Vorteil: zentrale Kontrolle durch Firewall und Filter. Nachteil: mehr Last auf der Internetleitung der Firma.</div><div class="callout merke"><strong>Split Tunneling:</strong> Nur der Verkehr ins Firmennetz geht durch den Tunnel, alles andere direkt über den Heimanschluss. Vorteil: entlastet die Firmenleitung (z. B. bei Videokonferenzen). Nachteil: weniger Kontrolle, höheres Risiko.</div></div>
        <div class="callout beispiel"><strong>Beispiel Homeoffice:</strong> Eine Mitarbeiterin der Nordlicht IT GmbH in Heide soll von zu Hause an ihrem Büro-PC arbeiten.<br>
          1. Auf ihrem Firmennotebook wird der VPN-Client mit Gerätezertifikat und MFA eingerichtet.<br>
          2. Nach dem Tunnelaufbau startet sie <code>mstsc</code> und verbindet sich mit ihrem Büro-PC <code>PC-HEI-017</code>.<br>
          3. Der Büro-PC erlaubt RDP nur aus dem VPN-Adressbereich, NLA ist aktiv, und nur ihr Konto steht in der Gruppe „Remotedesktopbenutzer“.<br>
          Ergebnis: Die Daten verlassen das Firmennetz nicht, nur Bildschirminhalte werden verschlüsselt übertragen.</div>
        <h5>Sicher mobil arbeiten</h5>
        <ul>
          <li>Festplattenverschlüsselung (z. B. BitLocker) auf Notebooks, Bildschirmsperre, Sichtschutzfilter unterwegs</li>
          <li>Firmengeräte nutzen; private Geräte nur mit klarer Regelung</li>
          <li>Heim-WLAN mit WPA2/WPA3 und eigenem, starkem Passwort; öffentliche WLANs nur mit VPN</li>
          <li>Updates und Virenschutz aktuell halten; vertrauliche Ausdrucke nicht im Hausmüll entsorgen</li>
        </ul>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Erläutern Sie, wie ein VPN die Datenübertragung im Homeoffice absichert“, „Nennen Sie drei Maßnahmen zur Absicherung eines Remotedesktop-Zugangs“, „Unterscheiden Sie Site-to-Site- und Client-to-Site-VPN“, „Beschreiben Sie, wie Sie die VPN-Verbindung testen“ – meist eingebettet in ein Szenario mit Außendienst oder Homeoffice.</div>
      `
    },
    {
      id: "cisco-switch",
      title: "Cisco-Switch-Grundkonfiguration (Packet Tracer)",
      exam: ["AP2"],
      summary: "IOS-Modi, Konsolenzugang, hostname, enable secret, Leitungspasswörter, Management-IP auf VLAN 1, Standardgateway, Speichern und show-Befehle.",
      html: `
        <p>Managed Switches werden über eine Kommandozeile (CLI) konfiguriert. Bei Cisco heißt das Betriebssystem <strong>IOS</strong>. Üben kannst du das mit dem kostenlosen Simulator <strong>Cisco Packet Tracer</strong> (Dateien .pkt, Übungsaktivitäten .pka).</p>
        <h5>Zugang</h5>
        <p>Ein fabrikneuer Switch hat noch keine IP-Adresse. Die Erstkonfiguration erfolgt über den <strong>Konsolenport</strong> mit einem Konsolenkabel (Rollover-Kabel, RJ45 auf seriell oder USB) und einem Terminalprogramm (z. B. PuTTY, 9600 Baud). Später erfolgt der Fernzugriff über die VTY-Leitungen per SSH (Telnet ist unverschlüsselt).</p>
        <h5>Die IOS-Modi</h5>
        <table><thead><tr><th>Modus</th><th>Prompt</th><th>Wechsel</th><th>Zweck</th></tr></thead><tbody>
          <tr><td>User EXEC</td><td><code>Switch&gt;</code></td><td>nach dem Anmelden</td><td>nur einfache Anzeigebefehle</td></tr>
          <tr><td>Privileged EXEC</td><td><code>Switch#</code></td><td><code>enable</code></td><td>alle show-Befehle, Speichern, Neustart</td></tr>
          <tr><td>Globale Konfiguration</td><td><code>Switch(config)#</code></td><td><code>configure terminal</code></td><td>Einstellungen für das ganze Gerät</td></tr>
          <tr><td>Interface-Konfiguration</td><td><code>Switch(config-if)#</code></td><td><code>interface …</code></td><td>Einstellungen für einen Port oder ein VLAN-Interface</td></tr>
          <tr><td>Line-Konfiguration</td><td><code>Switch(config-line)#</code></td><td><code>line console 0</code> / <code>line vty 0 15</code></td><td>Zugänge absichern</td></tr>
        </tbody></table>
        <p><code>exit</code> geht eine Ebene zurück, <code>end</code> (oder Strg+Z) springt direkt in den Privileged-EXEC-Modus. <code>?</code> zeigt die möglichen Befehle, die Tab-Taste vervollständigt sie.</p>
        <h5>Grundkonfiguration Schritt für Schritt</h5>
        <pre><code>Switch&gt; enable
Switch# configure terminal
Switch(config)# hostname SW-HEIDE-01
SW-HEIDE-01(config)# enable secret Pr1v!Heide26
SW-HEIDE-01(config)# line console 0
SW-HEIDE-01(config-line)# password K0ns0le!26
SW-HEIDE-01(config-line)# login
SW-HEIDE-01(config-line)# exit
SW-HEIDE-01(config)# line vty 0 15
SW-HEIDE-01(config-line)# password Vty!Heide26
SW-HEIDE-01(config-line)# login
SW-HEIDE-01(config-line)# exit
SW-HEIDE-01(config)# service password-encryption
SW-HEIDE-01(config)# banner motd #Zugriff nur fuer berechtigte Personen#
SW-HEIDE-01(config)# interface vlan 1
SW-HEIDE-01(config-if)# ip address 192.168.10.2 255.255.255.0
SW-HEIDE-01(config-if)# no shutdown
SW-HEIDE-01(config-if)# exit
SW-HEIDE-01(config)# ip default-gateway 192.168.10.1
SW-HEIDE-01(config)# end
SW-HEIDE-01# copy running-config startup-config</code></pre>
        <table><thead><tr><th>Befehl</th><th>Wirkung</th></tr></thead><tbody>
          <tr><td><code>hostname</code></td><td>Gerätename, erscheint im Prompt</td></tr>
          <tr><td><code>enable secret</code></td><td>schützt den Privileged-EXEC-Modus; wird als Hash gespeichert (besser als <code>enable password</code>, das im Klartext steht)</td></tr>
          <tr><td><code>password</code> + <code>login</code></td><td>Passwort für Konsole bzw. VTY – ohne <code>login</code> wird es nicht abgefragt</td></tr>
          <tr><td><code>service password-encryption</code></td><td>verschleiert alle Klartextpasswörter in der Konfiguration (schwache Typ-7-Verschlüsselung)</td></tr>
          <tr><td><code>interface vlan 1</code></td><td>virtuelles Management-Interface (SVI); ein Layer-2-Switch braucht nur diese eine IP zur Fernverwaltung</td></tr>
          <tr><td><code>no shutdown</code></td><td>aktiviert das Interface</td></tr>
          <tr><td><code>ip default-gateway</code></td><td>Gateway, damit der Switch aus anderen Netzen verwaltet werden kann</td></tr>
          <tr><td><code>copy running-config startup-config</code></td><td>aktuelle Konfiguration (RAM) dauerhaft in den NVRAM speichern</td></tr>
        </tbody></table>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Die <strong>running-config</strong> liegt im RAM und ist nach einem Neustart weg, wenn sie nicht mit <code>copy running-config startup-config</code> gesichert wurde. Und: Die Endgeräte an den Ports brauchen die IP auf VLAN 1 nicht – sie dient nur der Verwaltung des Switches.</div>
        <h5>Kontrollbefehle (Privileged EXEC)</h5>
        <ul>
          <li><code>show running-config</code> – aktive Konfiguration</li>
          <li><code>show ip interface brief</code> – Interfaces mit IP-Adresse und Status (up/down)</li>
          <li><code>show mac address-table</code> – gelernte MAC-Adressen je Port</li>
          <li><code>show vlan brief</code> – VLANs und zugeordnete Ports</li>
          <li><code>show version</code> – IOS-Version, Laufzeit, Hardware</li>
        </ul>
        <div class="callout tipp"><strong>Sicherheit erhöhen:</strong> Für SSH zusätzlich <code>ip domain-name</code>, <code>crypto key generate rsa</code>, einen lokalen Benutzer mit <code>username … secret …</code> sowie auf den VTY-Leitungen <code>login local</code> und <code>transport input ssh</code> setzen. Best Practice ist außerdem ein eigenes Management-VLAN statt VLAN 1 und das Abschalten ungenutzter Ports.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Befehlsfolgen ergänzen oder in die richtige Reihenfolge bringen, einem Befehl seine Wirkung zuordnen, erklären, warum ein Switch nach dem Neustart seine Konfiguration verloren hat, oder begründen, warum <code>enable secret</code> statt <code>enable password</code> verwendet wird.</div>
      `
    },
  ],
  exercises: [
    {
      id: "e-ohm-luefter",
      topic: "elektro-grundgroessen",
      title: "Lüfter, Widerstände und SI-Präfixe",
      level: 1,
      exam: ["AP1"],
      task: `<p>Die Nordlicht IT GmbH in Heide rüstet einen Netzwerkschrank mit zusätzlichen Lüftern aus.</p>
        <p>a) Ein Lüfter nimmt an 12 V einen Strom von 250 mA auf. Berechne seinen Widerstand (als Ohmscher Widerstand angenommen) und seine Leistung.</p>
        <p>b) Zwei dieser Lüfter werden parallel an 12 V angeschlossen. Berechne Gesamtwiderstand, Gesamtstrom und Gesamtleistung.</p>
        <p>c) Für eine Statusanzeige liegen R₁ = 330 Ω und R₂ = 470 Ω in Reihe an 5 V. Berechne den Strom und die Teilspannungen.</p>
        <p>d) Rechne um: 0,045 A in mA · 2,5 kW in W · 850 nm in m · 3,3 MΩ in Ω.</p>`,
      hints: ["R = U ÷ I, P = U × I", "Bei zwei gleichen Widerständen parallel halbiert sich der Gesamtwiderstand."],
      solution: `<p><strong>a)</strong> R = U ÷ I = 12 V ÷ 0,25 A = <strong>48 Ω</strong>; P = U × I = 12 V × 0,25 A = <strong>3 W</strong>.</p>
        <p><strong>b)</strong> R_ges = (48 Ω × 48 Ω) ÷ (48 Ω + 48 Ω) = <strong>24 Ω</strong>; I_ges = 12 V ÷ 24 Ω = <strong>0,5 A</strong> (= 2 × 0,25 A); P_ges = 12 V × 0,5 A = <strong>6 W</strong>.</p>
        <p><strong>c)</strong> R_ges = 330 Ω + 470 Ω = 800 Ω; I = 5 V ÷ 800 Ω = 0,00625 A = <strong>6,25 mA</strong>.<br>
          U₁ = 330 Ω × 0,00625 A ≈ <strong>2,06 V</strong>; U₂ = 470 Ω × 0,00625 A ≈ <strong>2,94 V</strong>; Probe: 2,0625 V + 2,9375 V = 5 V.</p>
        <p><strong>d)</strong> 0,045 A = 45 mA · 2,5 kW = 2500 W · 850 nm = 850 × 10⁻⁹ m = 8,5 × 10⁻⁷ m · 3,3 MΩ = 3.300.000 Ω.</p>`
    },
    {
      id: "e-energiekosten",
      topic: "leistung-energie",
      title: "Stromkosten beim PC-Austausch",
      level: 2,
      exam: ["AP1"],
      task: `<p>Die Nordlicht IT GmbH ersetzt 30 Büro-PCs. Die Komponenten eines alten PCs benötigen 180 W, sein Netzteil hat einen Wirkungsgrad von 75 %. Beim neuen PC benötigen die Komponenten 108 W bei einem Netzteil-Wirkungsgrad von 90 %. Die PCs laufen 8 Stunden an 220 Tagen im Jahr, der Strompreis beträgt 0,30 €/kWh.</p>
        <p>a) Berechne die Leistungsaufnahme aus dem Netz für einen alten und einen neuen PC.</p>
        <p>b) Berechne jeweils die Verlustleistung im Netzteil.</p>
        <p>c) Berechne die jährlichen Stromkosten aller 30 PCs vorher und nachher sowie die Ersparnis.</p>
        <p>d) Die energieeffizienteren Geräte kosten insgesamt 5.700 € mehr als vergleichbare Standardgeräte. Nach wie vielen Jahren hat sich die Mehrinvestition amortisiert?</p>
        <p>e) Die neuen PCs verbrauchen außerhalb der Arbeitszeit im Standby je 1,5 W. Berechne die jährlichen Standby-Kosten aller 30 PCs (1 Jahr = 8760 h).</p>`,
      hints: ["P_zu = P_ab ÷ η", "Betriebsstunden: 8 h × 220 Tage", "Standby-Stunden = 8760 h − Betriebsstunden"],
      solution: `<p><strong>a)</strong> Alt: P_zu = 180 W ÷ 0,75 = <strong>240 W</strong>; neu: P_zu = 108 W ÷ 0,9 = <strong>120 W</strong>.</p>
        <p><strong>b)</strong> Alt: 240 W − 180 W = <strong>60 W</strong>; neu: 120 W − 108 W = <strong>12 W</strong>.</p>
        <p><strong>c)</strong> Betriebsstunden: 8 h × 220 = 1760 h.<br>
          Alt: 0,24 kW × 1760 h = 422,4 kWh je PC → 422,4 kWh × 0,30 €/kWh = 126,72 € → × 30 = <strong>3.801,60 €</strong><br>
          Neu: 0,12 kW × 1760 h = 211,2 kWh je PC → 211,2 kWh × 0,30 €/kWh = 63,36 € → × 30 = <strong>1.900,80 €</strong><br>
          Ersparnis: 3.801,60 € − 1.900,80 € = <strong>1.900,80 € pro Jahr</strong></p>
        <p><strong>d)</strong> Amortisationszeit = Mehrkosten ÷ jährliche Ersparnis = 5.700 € ÷ 1.900,80 €/Jahr ≈ <strong>3 Jahre</strong>. Danach spart das Unternehmen jedes Jahr rund 1.900 €.</p>
        <p><strong>e)</strong> Standby-Stunden: 8760 h − 1760 h = 7000 h. W = 30 × 1,5 W × 7000 h = 315.000 Wh = 315 kWh → 315 kWh × 0,30 €/kWh = <strong>94,50 € pro Jahr</strong>. Mit schaltbaren Steckdosenleisten ließe sich dieser Betrag fast vollständig einsparen.</p>`
    },
    {
      id: "e-poe-budget",
      topic: "leistung-energie",
      title: "PoE-Budget für eine Lagerhalle",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Die Deichkontor Logistik GmbH in Meldorf beauftragt die Nordlicht IT GmbH, in einer Lagerhalle einen PoE-Switch mit 24 Ports und einem PoE-Budget von 370 W zu installieren. Angeschlossen werden sollen:</p>
        <table><thead><tr><th>Gerät</th><th>Anzahl</th><th>PoE-Klasse / Standard</th><th>vom Switch reservierte Leistung je Port</th></tr></thead><tbody>
          <tr><td>IP-Kamera</td><td>10</td><td>Klasse 3 (802.3af)</td><td>15,4 W</td></tr>
          <tr><td>WLAN-Access-Point</td><td>6</td><td>Klasse 4 (802.3at)</td><td>30 W</td></tr>
          <tr><td>IP-Telefon</td><td>4</td><td>Klasse 2</td><td>7 W</td></tr>
        </tbody></table>
        <p>a) Prüfe rechnerisch, ob das PoE-Budget ausreicht, und gib die verbleibende Reserve an.</p>
        <p>b) Später sollen zwei weitere Access Points gleicher Klasse angeschlossen werden. Beurteile die Situation und schlage zwei Lösungen vor.</p>
        <p>c) Ein Access-Point-Port liefert 30 W bei 50 V. Berechne den Strom in mA.</p>
        <p>d) Am Access Point kommen garantiert 25,5 W an. Berechne die Verlustleistung auf dem Kabel und den Wirkungsgrad der Übertragung.</p>
        <p>e) Im Mittel stellt der Switch rund um die Uhr 250 W PoE-Leistung bereit, sein internes Netzteil hat η = 0,92. Berechne die jährlichen Stromkosten für die PoE-Versorgung bei 0,30 €/kWh.</p>`,
      hints: ["Summe aller reservierten Portleistungen mit dem Budget vergleichen", "I = P ÷ U", "1 Jahr = 8760 h"],
      solution: `<p><strong>a)</strong> Kameras: 10 × 15,4 W = 154 W; Access Points: 6 × 30 W = 180 W; Telefone: 4 × 7 W = 28 W.<br>
          Summe: 154 W + 180 W + 28 W = <strong>362 W ≤ 370 W</strong> → Das Budget reicht; Reserve: 370 W − 362 W = <strong>8 W</strong> (sehr knapp).</p>
        <p><strong>b)</strong> Zwei weitere APs benötigen 2 × 30 W = 60 W → 362 W + 60 W = 422 W &gt; 370 W. Das Budget wird um 52 W überschritten; der Switch würde einzelne Ports nicht oder nur nach Priorität versorgen. Lösungen: einen Switch mit größerem PoE-Budget (z. B. 740 W) einsetzen, einen zweiten PoE-Switch installieren oder einzelne Geräte über PoE-Injektoren versorgen.</p>
        <p><strong>c)</strong> I = P ÷ U = 30 W ÷ 50 V = 0,6 A = <strong>600 mA</strong>.</p>
        <p><strong>d)</strong> Verlustleistung: 30 W − 25,5 W = <strong>4,5 W</strong>; Wirkungsgrad η = 25,5 W ÷ 30 W = <strong>0,85 = 85 %</strong>. Die Verluste entstehen als Wärme im Leitungswiderstand (P = I² × R).</p>
        <p><strong>e)</strong> Aufgenommene Leistung: P_zu = 250 W ÷ 0,92 ≈ 271,74 W ≈ 0,2717 kW<br>
          Arbeit: 0,27174 kW × 8760 h ≈ 2.380,43 kWh<br>
          Kosten: 2.380,43 kWh × 0,30 €/kWh ≈ <strong>714,13 € pro Jahr</strong></p>`
    },
    {
      id: "e-logik-tueralarm",
      topic: "logik",
      title: "Türalarm für den Serverraum",
      level: 2,
      task: `<p>Für den Serverraum soll eine Alarmlogik entworfen werden. Eingänge: <strong>t</strong> = 1, wenn die Tür offen ist; <strong>k</strong> = 1, wenn eine gültige Zugangskarte erkannt wurde; <strong>n</strong> = 1, wenn der Nachtmodus aktiv ist. Der Alarm <strong>z</strong> soll auslösen, wenn die Tür offen ist und keine gültige Karte vorliegt – oder wenn die Tür im Nachtmodus geöffnet wird.</p>
        <p>a) Erstelle die Wahrheitstabelle.</p>
        <p>b) Ermittle die disjunktive Normalform (DNF).</p>
        <p>c) Vereinfache die Gleichung mit den Regeln der Schaltalgebra.</p>
        <p>d) Beschreibe den Funktionsplan der vereinfachten Schaltung.</p>
        <p>e) Welchen Wert hat z für t = 1, k = 1, n = 0? Begründe kurz.</p>`,
      hints: ["3 Eingänge → 8 Zeilen", "Fasse Terme zusammen, die sich nur in einer Variablen unterscheiden."],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>t</th><th>k</th><th>n</th><th>z</th></tr></thead><tbody>
          <tr><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>1</td><td>0</td></tr>
          <tr><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td></tr>
          <tr><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td><td>1</td><td>1</td></tr>
          <tr><td>1</td><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td></tr>
        </tbody></table>
        <p><strong>b)</strong> Zeilen mit z = 1: 100, 101, 111 → z = (t ∧ ¬k ∧ ¬n) ∨ (t ∧ ¬k ∧ n) ∨ (t ∧ k ∧ n)</p>
        <p><strong>c)</strong> (t ∧ ¬k ∧ ¬n) ∨ (t ∧ ¬k ∧ n) = t ∧ ¬k ∧ (¬n ∨ n) = t ∧ ¬k<br>
          (t ∧ ¬k ∧ n) ∨ (t ∧ k ∧ n) = t ∧ n ∧ (¬k ∨ k) = t ∧ n (der mittlere Term darf zweimal verwendet werden, da a ∨ a = a)<br>
          z = (t ∧ ¬k) ∨ (t ∧ n) = <strong>t ∧ (¬k ∨ n)</strong></p>
        <p><strong>d)</strong> k wird über einen negierten Eingang (oder ein NICHT-Glied) zusammen mit n auf ein ODER-Glied (≥1) geführt. Dessen Ausgang und t gehen auf ein UND-Glied (&amp;), dessen Ausgang z ist. Es werden also nur ein ODER- und ein UND-Glied plus eine Negation benötigt.</p>
        <p><strong>e)</strong> z = 1 ∧ (¬1 ∨ 0) = 1 ∧ (0 ∨ 0) = 1 ∧ 0 = <strong>0</strong> – eine berechtigte Person öffnet tagsüber die Tür, es gibt keinen Alarm.</p>`
    },
    {
      id: "e-netz-kanzlei",
      topic: "netzwerk-grundlagen",
      title: "Netzwerk für eine Steuerkanzlei",
      level: 1,
      exam: ["AP1"],
      task: `<p>Die Steuerkanzlei Friesenhof in Husum hat bisher acht PCs, die über einen Switch verbunden sind und jeweils eigene Benutzerkonten haben. Die Kanzlei wächst auf 25 Arbeitsplätze und eröffnet eine Filiale in Niebüll.</p>
        <p>a) Ordne das Netz in Husum und die Verbindung Husum – Niebüll jeweils einer Netzart zu.</p>
        <p>b) Nenne die Topologie des Büronetzes sowie je zwei Vor- und Nachteile.</p>
        <p>c) Empfiehl, ob die Kanzlei künftig als Arbeitsgruppe oder als Domäne organisiert werden sollte, und begründe mit zwei Argumenten.</p>
        <p>d) Später sollen vier Standorte über eigene Leitungen vollvermascht werden. Wie viele Verbindungen sind nötig?</p>
        <p>e) Erkläre den Unterschied zwischen einem physischen und einem logischen Netzwerkplan.</p>`,
      solution: `<p><strong>a)</strong> Das Büronetz in Husum ist ein <strong>LAN</strong>; die Verbindung zwischen Husum und Niebüll über einen Provider ist ein <strong>WAN</strong>.</p>
        <p><strong>b)</strong> <strong>Sterntopologie</strong> (alle PCs am zentralen Switch). Vorteile: Ein defektes Kabel betrifft nur einen PC; Fehlersuche und Erweiterung sind einfach. Nachteile: Fällt der Switch aus, ist das ganze Netz betroffen (Single Point of Failure); es wird mehr Kabel benötigt als bei einem Bus.</p>
        <p><strong>c)</strong> Empfehlung: <strong>Domäne</strong>. Bei 25 Arbeitsplätzen und zwei Standorten ist eine zentrale Benutzerverwaltung sinnvoll: Mitarbeiter melden sich mit einem Konto an jedem PC an, Rechte und Gruppenrichtlinien (z. B. Bildschirmsperre, Passwortregeln) werden zentral gesetzt. Außerdem erleichtert eine Domäne die Umsetzung von Datenschutz- und Sicherheitsvorgaben, was bei Mandantendaten besonders wichtig ist.</p>
        <p><strong>d)</strong> n × (n − 1) ÷ 2 = 4 × 3 ÷ 2 = <strong>6 Verbindungen</strong>.</p>
        <p><strong>e)</strong> Der <strong>physische</strong> Plan zeigt die tatsächliche Lage von Geräten, Kabeln, Dosen, Patchfeldern und Schränken. Der <strong>logische</strong> Plan zeigt IP-Netze, VLANs, Gateways und Datenflüsse – also wie die Geräte adressiert sind und miteinander kommunizieren.</p>`
    },
    {
      id: "e-osi-zuordnung",
      topic: "osi-komponenten",
      title: "Geräte und Protokolle im OSI-Modell",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Im Rahmen der Gruppenarbeit „Netzwerkkomponenten“ sollst du für die Nordlicht IT GmbH eine Übersicht erstellen.</p>
        <p>a) Ordne folgende Begriffe der passenden OSI-Schicht zu: Switch, Router, Hub, Access Point, TCP, IPv4, HTTPS, Ethernet-Frame mit MAC-Adressen, RJ45-Stecker.</p>
        <p>b) Erläutere zwei Unterschiede zwischen einem Hub und einem Switch.</p>
        <p>c) PC-A (MAC …:0A) an Port 1 sendet einen Frame an PC-B (MAC …:0B) an Port 5. Die MAC-Adresstabelle des Switches ist leer. Beschreibe, was der Switch tut.</p>
        <p>d) Nenne in der richtigen Reihenfolge die Dateneinheiten, die beim Senden einer Webseite von Schicht 4 bis Schicht 1 entstehen.</p>`,
      solution: `<p><strong>a)</strong> Schicht 1: Hub, RJ45-Stecker · Schicht 2: Switch, Access Point, Ethernet-Frame mit MAC-Adressen · Schicht 3: Router, IPv4 · Schicht 4: TCP · Schicht 7: HTTPS (die Verschlüsselung per TLS wird Schicht 6 zugeordnet).</p>
        <p><strong>b)</strong> Ein Hub arbeitet auf Schicht 1 und sendet jedes Signal an <em>alle</em> Ports; alle Geräte teilen sich eine Kollisionsdomäne und arbeiten im Halbduplex. Ein Switch arbeitet auf Schicht 2, lernt die MAC-Adressen und leitet Frames <em>gezielt</em> an den Zielport weiter; jeder Port ist eine eigene Kollisionsdomäne, Vollduplex ist möglich. Dadurch sind Switches schneller und sicherer.</p>
        <p><strong>c)</strong> Der Switch trägt die Quell-MAC …:0A mit Port 1 in seine MAC-Adresstabelle ein. Die Ziel-MAC …:0B kennt er noch nicht, deshalb leitet er den Frame an alle Ports außer Port 1 weiter (Flooding). Antwortet PC-B, lernt der Switch auch dessen MAC an Port 5 – danach werden Frames zwischen beiden nur noch direkt zwischen Port 1 und Port 5 weitergeleitet.</p>
        <p><strong>d)</strong> Segment (Schicht 4, TCP-Header mit Ports) → Paket (Schicht 3, IP-Header) → Frame (Schicht 2, Ethernet-Header mit MAC-Adressen und Prüfsumme) → Bits (Schicht 1).</p>`
    },
    {
      id: "e-kupfer-auswahl",
      topic: "kupferkabel",
      title: "Kabelkategorie und Kabeltyp wählen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH plant die Verkabelung eines neuen Bürotrakts. Die Arbeitsplätze sollen später mit 10 Gbit/s angebunden werden können; die längste Strecke vom Etagenverteiler zur Dose beträgt 85 m.</p>
        <p>a) Wähle eine geeignete Kabelkategorie und begründe, warum Cat 6 nicht ausreicht.</p>
        <p>b) Erkläre die Bezeichnung <code>S/FTP</code>.</p>
        <p>c) Welches Kabel (Patch oder Crossover) wird klassisch benötigt für: PC ↔ Switch, Switch ↔ Switch, PC ↔ Router? Was ändert Auto-MDI-X daran?</p>
        <p>d) Gib die Farbbelegung der Pins 1 bis 3 und 6 nach T568B an.</p>
        <p>e) Ein Techniker verlegt 95 m Installationskabel und steckt an beiden Enden je 3 m Patchkabel an. Beurteile die Strecke.</p>`,
      solution: `<p><strong>a)</strong> <strong>Cat 6A</strong> (Klasse E_A, 500 MHz): Sie überträgt 10GBASE-T über die volle Länge von 100 m. Cat 6 (250 MHz) schafft 10 Gbit/s nur bis etwa 55 m und ist für 85 m daher ungeeignet. Alternativ Cat 7 S/FTP als Verlegekabel mit Cat-6A-Anschlusskomponenten.</p>
        <p><strong>b)</strong> S/FTP: Das Kabel hat einen Gesamtschirm aus Geflecht (S) und jedes Adernpaar ist zusätzlich mit Folie geschirmt (FTP = foiled twisted pair). Dadurch ist es sehr störfest und hat ein gutes Übersprechverhalten.</p>
        <p><strong>c)</strong> PC ↔ Switch: <strong>Patchkabel</strong> (PC = MDI, Switch = MDI-X – unterschiedliche Portbelegung). Switch ↔ Switch: <strong>Crossover</strong> (beide MDI-X). PC ↔ Router: <strong>Crossover</strong> (beide MDI, senden also auf denselben Pins). Mit Auto-MDI-X erkennt der Port die Belegung selbst und tauscht Sende- und Empfangspaare intern – dann funktioniert ein normales Patchkabel in allen Fällen.</p>
        <p><strong>d)</strong> T568B: Pin 1 weiß-orange, Pin 2 orange, Pin 3 weiß-grün, Pin 6 grün.</p>
        <p><strong>e)</strong> Die Strecke ist <strong>nicht normgerecht</strong>: Das fest verlegte Kabel darf höchstens 90 m lang sein (hier 95 m), und der gesamte Channel darf 100 m nicht überschreiten (hier 95 m + 2 × 3 m = 101 m). Es drohen Übertragungsfehler oder ein Rückfall auf eine niedrigere Geschwindigkeit. Lösung: Etagenverteiler näher platzieren oder eine andere Kabelführung wählen.</p>`
    },
    {
      id: "e-lwl-gebaeude",
      topic: "lwl",
      title: "Glasfaser zwischen Halle und Verwaltung",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordsee Fisch GmbH in Büsum möchte ihre Produktionshalle mit dem Verwaltungsgebäude verbinden. Die Kabeltrasse ist 350 m lang, gefordert sind 10 Gbit/s. In der Halle stehen große Motoren und Kühlaggregate.</p>
        <p>a) Nenne drei Gründe, warum hier Lichtwellenleiter statt Kupfer eingesetzt werden sollte.</p>
        <p>b) Die Switches unterstützen SFP+-Module für 10GBASE-SR (Multimode, 850 nm) und 10GBASE-LR (Singlemode, 1310 nm). Wähle eine geeignete Faserklasse und begründe. Welcher Steckertyp ist an den SFP+-Modulen üblich?</p>
        <p>c) Erkläre, was Modendispersion ist und wie eine Gradientenindexfaser sie verringert.</p>
        <p>d) Berechne mit dem Bandbreite-Länge-Produkt einer OM3-Faser (2000 MHz·km) die nutzbare Bandbreite auf 350 m.</p>
        <p>e) Bei der Abnahmemessung zeigt eine Spleißstelle 0,8 dB Dämpfung statt der geplanten 0,1 dB. Nenne drei mögliche Ursachen.</p>`,
      hints: ["Reichweite 10GBASE-SR: OM3 300 m, OM4 400 m", "B = BLP ÷ l"],
      solution: `<p><strong>a)</strong> (1) LWL ist unempfindlich gegen die elektromagnetischen Störungen der Motoren und Kühlaggregate. (2) Zwischen zwei Gebäuden sorgt Glasfaser für galvanische Trennung – unterschiedliche Erdpotenziale oder Blitzeinwirkungen können nicht über die Leitung übertragen werden. (3) Mit Kupfer-Twisted-Pair sind höchstens 100 m möglich, 350 m sind nur mit LWL erreichbar.</p>
        <p><strong>b)</strong> OM3 schafft 10GBASE-SR nur bis 300 m und scheidet aus. Geeignet ist <strong>OM4</strong> (bis 400 m) – allerdings mit wenig Reserve. Zukunftssicherer ist <strong>Singlemode OS2</strong> mit 10GBASE-LR (bis 10 km): kaum Längenbeschränkung, Reserven für spätere 25/100 Gbit/s; die Transceiver sind etwas teurer. An SFP+-Modulen wird üblicherweise ein <strong>LC-Duplex-Stecker</strong> verwendet.</p>
        <p><strong>c)</strong> In einer Multimodefaser breitet sich das Licht auf vielen Wegen (Moden) aus. Steile Strahlen legen einen längeren Weg zurück und kommen später an als achsnahe Strahlen; ein Impuls wird dadurch breiter und kann mit dem nächsten verschwimmen. Bei der Gradientenindexfaser nimmt die Brechzahl vom Kern nach außen ab. Außen läuft das Licht deshalb schneller und gleicht den längeren Weg aus – die Laufzeitunterschiede werden stark verringert.</p>
        <p><strong>d)</strong> B = BLP ÷ l = 2000 MHz·km ÷ 0,35 km ≈ <strong>5714 MHz</strong>.</p>
        <p><strong>e)</strong> Mögliche Ursachen: schräg oder unsauber gebrochene Faserendflächen, Verschmutzung der Faser vor dem Spleißen, Kernversatz oder Winkelversatz der Faserenden, Luftblasen oder Einschlüsse in der Spleißstelle, unterschiedliche Fasertypen (z. B. 62,5 µm auf 50 µm). Der Spleiß sollte neu ausgeführt werden.</p>`
    },
    {
      id: "e-signallaufzeit",
      topic: "signal-daempfung",
      title: "Signallaufzeit und Kabellänge",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Bei der Abnahme einer Verkabelung in Heide werden Laufzeiten gemessen (c₀ = 3 × 10⁸ m/s).</p>
        <p>a) Ein Cat-6A-Kabel ist 75 m lang, der NVP beträgt 0,66. Berechne Ausbreitungsgeschwindigkeit und Signallaufzeit.</p>
        <p>b) Ein Kabeltester empfängt die Reflexion vom offenen Kabelende nach 0,8 µs (NVP = 0,66). Wie lang ist das Kabel?</p>
        <p>c) Eine Glasfaser mit der Kernbrechzahl n = 1,48 ist 2 km lang. Berechne die Signallaufzeit.</p>
        <p>d) Grenze die Signallaufzeit von der Übertragungsdauer ab und berechne, wie lange eine Datei mit 500 MiB über eine 1-Gbit/s-Verbindung (ohne Overhead) übertragen wird.</p>`,
      hints: ["v = NVP × c₀; t = l ÷ v", "Beim Kabeltester läuft der Impuls hin und zurück.", "LWL: v = c₀ ÷ n"],
      solution: `<p><strong>a)</strong> v = 0,66 × 3 × 10⁸ m/s = <strong>1,98 × 10⁸ m/s</strong>; t = 75 m ÷ 1,98 × 10⁸ m/s ≈ 3,79 × 10⁻⁷ s ≈ <strong>379 ns</strong>.</p>
        <p><strong>b)</strong> Gesamtweg s = v × t = 1,98 × 10⁸ m/s × 0,8 × 10⁻⁶ s = 158,4 m. Da der Impuls hin- und zurückläuft: l = 158,4 m ÷ 2 = <strong>79,2 m</strong>.</p>
        <p><strong>c)</strong> v = c₀ ÷ n = 3 × 10⁸ m/s ÷ 1,48 ≈ 2,03 × 10⁸ m/s; t = 2000 m ÷ 2,027 × 10⁸ m/s ≈ 9,87 × 10⁻⁶ s ≈ <strong>9,87 µs</strong>.</p>
        <p><strong>d)</strong> Die Signallaufzeit ist die Zeit, die ein einzelnes Signal vom Anfang bis zum Ende der Leitung braucht; sie hängt nur von Länge und Medium ab. Die Übertragungsdauer ist die Zeit für eine ganze Datenmenge und hängt von der Datenrate ab.<br>
          500 MiB = 500 × 1024² Byte × 8 = 4.194.304.000 bit; t = 4.194.304.000 bit ÷ 1.000.000.000 bit/s ≈ <strong>4,19 s</strong>.<br>
          Beachte: Die Datenmenge ist binär (Mi = 2²⁰), die Datenrate dezimal (G = 10⁹) angegeben – genau so rechnet auch die IHK-Prüfung.</p>`
    },
    {
      id: "e-daempfungsbudget",
      topic: "signal-daempfung",
      title: "Dämpfungsmaß und Dämpfungsbudget",
      level: 3,
      exam: ["AP2"],
      task: `<p>Die Nordlicht IT GmbH prüft Übertragungsstrecken bei einem Kunden in Brunsbüttel.</p>
        <p>a) Am Eingang einer Leitung werden 8 mW gemessen, am Ausgang 2 mW. Berechne Übertragungsfaktor, Dämpfungsfaktor und Dämpfungsmaß.</p>
        <p>b) An einer anderen Leitung sinkt die Spannung von 1 V auf 0,1 V. Berechne das Dämpfungsmaß.</p>
        <p>c) Gib die 8 mW aus a) als Pegel in dBm an.</p>
        <p>d) Eine Multimode-Strecke (OM4) ist 400 m lang, die Faser dämpft 3,5 dB/km bei 850 nm. Die Strecke enthält 4 Steckverbindungen à 0,5 dB und 2 Spleiße à 0,1 dB. Laut Datenblatt sendet der Transceiver mit −3 dBm, der Empfänger benötigt mindestens −11 dBm. Gefordert ist eine Systemreserve von 3 dB. Prüfe rechnerisch, ob die Strecke funktioniert.</p>
        <p>e) Wie viele zusätzliche Steckverbindungen à 0,5 dB könnten unter Einhaltung der Reserve noch eingefügt werden?</p>`,
      hints: ["a = 10 × lg(P₁ ÷ P₂) dB bzw. 20 × lg(U₁ ÷ U₂) dB", "Alle Dämpfungen in dB addieren, dann vom Sendepegel abziehen."],
      solution: `<p><strong>a)</strong> Übertragungsfaktor A = P₂ ÷ P₁ = 2 mW ÷ 8 mW = <strong>0,25</strong>; Dämpfungsfaktor D = P₁ ÷ P₂ = <strong>4</strong>; Dämpfungsmaß a = 10 × lg 4 dB ≈ <strong>6,02 dB</strong>.</p>
        <p><strong>b)</strong> a = 20 × lg(1 V ÷ 0,1 V) dB = 20 × lg 10 dB = <strong>20 dB</strong>.</p>
        <p><strong>c)</strong> L = 10 × lg(8 mW ÷ 1 mW) dBm ≈ <strong>9,03 dBm</strong>.</p>
        <p><strong>d)</strong> Faser: 0,4 km × 3,5 dB/km = 1,4 dB; Stecker: 4 × 0,5 dB = 2,0 dB; Spleiße: 2 × 0,1 dB = 0,2 dB → Gesamtdämpfung <strong>3,6 dB</strong>.<br>
          Empfangspegel: −3 dBm − 3,6 dB = <strong>−6,6 dBm</strong> (≈ 0,22 mW).<br>
          Reserve: −6,6 dBm − (−11 dBm) = <strong>4,4 dB ≥ 3 dB</strong> → Die Strecke funktioniert mit ausreichender Systemreserve.</p>
        <p><strong>e)</strong> Nutzbar über die geforderte Reserve hinaus: 4,4 dB − 3 dB = 1,4 dB; 1,4 dB ÷ 0,5 dB = 2,8 → höchstens <strong>2 zusätzliche Steckverbindungen</strong>.</p>`
    },
    {
      id: "e-strukturierte-verkabelung",
      topic: "strukturierte-verkabelung",
      title: "Campus-Verkabelung planen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Westküsten Energie GmbH in Brunsbüttel besitzt ein dreistöckiges Verwaltungsgebäude mit Serverraum im Erdgeschoss und eine 600 m entfernte Werkstatt mit zwei Etagen. Beide Gebäude sollen strukturiert verkabelt werden.</p>
        <p>a) Benenne die drei Bereiche der strukturierten Verkabelung und ordne ihnen die jeweils verbundenen Verteiler zu.</p>
        <p>b) Schlage für jeden Bereich ein Übertragungsmedium vor und begründe kurz.</p>
        <p>c) In der Werkstatt liegt eine Dose 92 m vom Etagenverteiler entfernt; angeschlossen werden je 5 m Patchkabel. Beurteile die Strecke.</p>
        <p>d) Erkläre den Unterschied zwischen Permanent Link und Channel.</p>
        <p>e) Nenne drei Vorteile einer strukturierten Verkabelung.</p>`,
      solution: `<p><strong>a)</strong> Primärbereich (Geländeverkabelung): Standortverteiler ↔ Gebäudeverteiler, hier Serverraum Verwaltung ↔ Werkstatt. Sekundärbereich (Steigbereich): Gebäudeverteiler ↔ Etagenverteiler in jedem Gebäude. Tertiärbereich (Etagenverkabelung): Etagenverteiler ↔ Anschlussdosen an den Arbeitsplätzen.</p>
        <p><strong>b)</strong> Primär: LWL Singlemode (OS2) – 600 m, galvanische Trennung zwischen den Gebäuden, Reserven für höhere Datenraten. Sekundär: LWL Multimode OM4 (oder Singlemode) – störunempfindlich, hohe Datenraten zwischen den Etagen. Tertiär: Twisted Pair Cat 6A bzw. Cat 7 S/FTP – günstig, PoE-fähig, bis 100 m ausreichend.</p>
        <p><strong>c)</strong> Nicht normgerecht: Das fest verlegte Kabel darf höchstens 90 m lang sein (hier 92 m), der Channel höchstens 100 m (hier 92 m + 2 × 5 m = 102 m). Abhilfe: kürzere Kabelführung, zusätzlicher Etagenverteiler oder die Dose an eine andere Stelle setzen.</p>
        <p><strong>d)</strong> Der <strong>Permanent Link</strong> ist die fest installierte Strecke vom Patchfeld bis zur Anschlussdose ohne Patchkabel – er wird bei der Abnahme gemessen. Der <strong>Channel</strong> ist die gesamte Übertragungsstrecke vom aktiven Gerät bis zum Endgerät einschließlich aller Patch- und Anschlusskabel.</p>
        <p><strong>e)</strong> Anwendungsneutral und zukunftssicher; Änderungen und Umzüge durch einfaches Umpatchen; Fehler bleiben lokal begrenzt und sind schnell zu finden; übersichtliche Dokumentation und Normkonformität.</p>`
    },
    {
      id: "e-usv-auswahl",
      topic: "usv",
      title: "USV für den Serverraum dimensionieren",
      level: 3,
      exam: ["AP2"],
      task: `<p>Nach mehreren Stromausfällen soll die Westküsten Energie GmbH in Brunsbüttel eine neue USV für ihren Serverraum erhalten. Zu versorgen sind:</p>
        <table><thead><tr><th>Gerät</th><th>Anzahl</th><th>Wirkleistung je Gerät</th><th>cos φ</th></tr></thead><tbody>
          <tr><td>Server</td><td>3</td><td>450 W</td><td>0,9</td></tr>
          <tr><td>Storage</td><td>1</td><td>360 W</td><td>0,9</td></tr>
          <tr><td>Switch</td><td>2</td><td>90 W</td><td>0,75</td></tr>
          <tr><td>Firewall</td><td>1</td><td>60 W</td><td>0,8</td></tr>
        </tbody></table>
        <p>a) Berechne die gesamte Wirk- und Scheinleistung und rechne 20 % Reserve hinzu.</p>
        <p>b) Zur Auswahl stehen: Modell A 2200 VA / 1980 W (VI-SY-311), Modell B 3000 VA / 2700 W (VFI-SS-111), Modell C 3000 VA / 2100 W (VFI-SS-111). Wähle ein Modell und begründe.</p>
        <p>c) Erläutere die Einstufung VFI-SS-111.</p>
        <p>d) Das geordnete Herunterfahren aller Systeme dauert 12 Minuten; es sollen 50 % Puffer eingeplant werden. Laut Laufzeittabelle hält Modell B bei 1500 W 21 min, bei 2000 W 14 min und bei 2500 W 9 min durch. Beurteile, ob die Laufzeit ausreicht, und schlage ggf. eine Maßnahme vor.</p>
        <p>e) Beschreibe die Aufgabe eines Wartungsbypasses.</p>`,
      hints: ["S = P ÷ cos φ für jedes Gerät, dann addieren", "Beide Grenzwerte – VA und W – müssen eingehalten werden."],
      solution: `<p><strong>a)</strong> Scheinleistungen: Server 450 W ÷ 0,9 = 500 VA; Storage 360 W ÷ 0,9 = 400 VA; Switch 90 W ÷ 0,75 = 120 VA; Firewall 60 W ÷ 0,8 = 75 VA.<br>
          P = 3 × 450 W + 360 W + 2 × 90 W + 60 W = <strong>1950 W</strong><br>
          S = 3 × 500 VA + 400 VA + 2 × 120 VA + 75 VA = <strong>2215 VA</strong><br>
          Mit 20 % Reserve: P = 1950 W × 1,2 = <strong>2340 W</strong>; S = 2215 VA × 1,2 = <strong>2658 VA</strong></p>
        <p><strong>b)</strong> Modell A ist mit 2200 VA / 1980 W zu klein (und nur VI). Modell C erfüllt zwar die Scheinleistung (3000 VA ≥ 2658 VA), aber nicht die Wirkleistung (2100 W &lt; 2340 W). <strong>Modell B</strong> erfüllt beide Werte (3000 VA ≥ 2658 VA, 2700 W ≥ 2340 W) und ist als Online-USV (VFI) für einen Serverraum am besten geeignet.</p>
        <p><strong>c)</strong> <strong>VFI</strong>: Die Ausgangsspannung ist unabhängig von Spannung und Frequenz des Netzes (Online-/Doppelwandler-Prinzip, Wechselrichter ständig aktiv). <strong>SS</strong>: sinusförmige Ausgangsspannung sowohl im Netz- als auch im Batteriebetrieb, auch bei nichtlinearer Last. <strong>111</strong>: Beim Wechsel der Betriebsart sowie bei linearen und nichtlinearen Lastsprüngen tritt keine Unterbrechung auf (beste Klasse 1).</p>
        <p><strong>d)</strong> Benötigt: 12 min × 1,5 = <strong>18 min</strong>. Die tatsächliche Last beträgt 1950 W; laut Tabelle stehen bei rund 2000 W nur etwa 14 min zur Verfügung (bei 1500 W wären es 21 min). 14 min &lt; 18 min → Die Laufzeit reicht <strong>nicht</strong>. Maßnahmen: externes Batteriemodul ergänzen, das Herunterfahren beschleunigen (z. B. früher auslösen, unkritische Systeme zuerst abschalten) oder Verbraucher auf eine zweite USV verteilen.</p>
        <p><strong>e)</strong> Der Wartungsbypass verbindet die Verbraucher über einen Umgehungsschalter direkt mit dem Netz. So können Batterien getauscht, die USV gewartet oder ausgetauscht werden, ohne die Server abzuschalten. Während dieser Zeit sind die Verbraucher allerdings nicht gegen Netzstörungen geschützt.</p>`
    },
    {
      id: "e-ipv4-client",
      topic: "ipv4-client",
      title: "IP-Konfiguration von Clients prüfen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>In der Filiale der Nordlicht IT GmbH wird das Netz 10.10.5.128/25 genutzt. Der Router hat die erste nutzbare Adresse.</p>
        <p>a) Gib die Subnetzmaske in Punktschreibweise an.</p>
        <p>b) Bestimme Netzadresse, Broadcastadresse, erste und letzte nutzbare Hostadresse sowie die Anzahl nutzbarer Hosts.</p>
        <p>c) Beurteile die folgenden Konfigurationen (Maske jeweils /25):</p>
        <table><thead><tr><th>PC</th><th>IP-Adresse</th><th>Gateway</th></tr></thead><tbody>
          <tr><td>PC-A</td><td>10.10.5.200</td><td>10.10.5.129</td></tr>
          <tr><td>PC-B</td><td>10.10.5.100</td><td>10.10.5.129</td></tr>
          <tr><td>PC-C</td><td>10.10.5.255</td><td>10.10.5.129</td></tr>
        </tbody></table>
        <p>d) Erkläre, wozu ein Client einen DNS-Server benötigt.</p>
        <p>e) Beschreibe den Ablauf, mit dem ein Client seine Adresse per DHCP erhält.</p>`,
      solution: `<p><strong>a)</strong> /25 = 25 Einsen → <strong>255.255.255.128</strong>.</p>
        <p><strong>b)</strong> Blockgröße 256 − 128 = 128 → Netze .0 und .128. Netzadresse <strong>10.10.5.128</strong>, Broadcast <strong>10.10.5.255</strong>, erster Host <strong>10.10.5.129</strong> (Router), letzter Host <strong>10.10.5.254</strong>, Hosts: 2⁷ − 2 = <strong>126</strong>.</p>
        <p><strong>c)</strong> PC-A: <strong>korrekt</strong> – Adresse und Gateway liegen im Netz 10.10.5.128/25. PC-B: <strong>falsch</strong> – 10.10.5.100 gehört zum Netz 10.10.5.0/25, das Gateway 10.10.5.129 liegt in einem anderen Netz und ist nicht direkt erreichbar. PC-C: <strong>falsch</strong> – 10.10.5.255 ist die Broadcastadresse und darf keinem Host zugewiesen werden.</p>
        <p><strong>d)</strong> Menschen und Programme verwenden Namen (z. B. <code>fileserver.nordlicht.local</code> oder <code>www.ihk.de</code>). Der DNS-Server übersetzt diese Namen in IP-Adressen, damit der Client die Verbindung aufbauen kann. Ohne DNS funktionieren nur direkte IP-Adressen; in einer Domäne findet der Client ohne passenden DNS-Server nicht einmal den Domänencontroller.</p>
        <p><strong>e)</strong> DORA: Der Client sendet ein <strong>DHCP-Discover</strong> als Broadcast, der Server antwortet mit einem <strong>Offer</strong> (Adressangebot), der Client fordert diese Adresse mit einem <strong>Request</strong> an, und der Server bestätigt mit einem <strong>Acknowledge</strong>. Mit der Adresse erhält der Client auch Maske, Gateway, DNS-Server und die Lease-Dauer.</p>`
    },
    {
      id: "e-diagnose-ticket",
      topic: "ipv4-client",
      title: "Ticket: „Kein Internet“ – systematische Fehlersuche",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Eine Mitarbeiterin der Deichkontor Logistik GmbH meldet: „Mein neuer PC hat kein Internet.“ Im Netz 192.168.20.0/24 verteilt der Router 192.168.20.1 die Adressen per DHCP. <code>ipconfig /all</code> liefert (Auszug):</p>
        <pre><code>Ethernet-Adapter Ethernet:
   Physische Adresse . . . . . . . . : 3C-52-82-1A-7F-09
   DHCP aktiviert. . . . . . . . . . : Ja
   Autokonfiguration IPv4-Adresse  . : 169.254.112.45(Bevorzugt)
   Subnetzmaske  . . . . . . . . . . : 255.255.0.0
   Standardgateway . . . . . . . . . :</code></pre>
        <p>a) Analysiere die Ausgabe.</p>
        <p>b) Nenne drei mögliche Ursachen.</p>
        <p>c) Nenne die Befehle, mit denen du nach der Fehlerbehebung eine neue Adresse anforderst.</p>
        <p>d) Nach der Reparatur erhält der PC 192.168.20.57. <code>ping 192.168.20.1</code> und <code>ping 1.1.1.1</code> sind erfolgreich, <code>ping www.ihk.de</code> meldet, dass der Host nicht gefunden wurde. Wo liegt der Fehler und wie prüfst du ihn weiter?</p>
        <p>e) Ein Ping zum Gateway zeigt Antwortzeiten von 110–130 ms. Bewerte das Ergebnis.</p>
        <p>f) Erstelle ein kurzes Testprotokoll mit vier Testfällen.</p>`,
      hints: ["Adressen aus 169.254.0.0/16 entstehen, wenn kein DHCP-Server antwortet.", "Teste von innen nach außen: Stack, Gateway, IP im Internet, Name."],
      solution: `<p><strong>a)</strong> DHCP ist aktiviert, der PC hat aber eine <strong>APIPA-Adresse</strong> (169.254.x.x, Maske 255.255.0.0) und kein Standardgateway. Er hat also keine Antwort von einem DHCP-Server erhalten und sich selbst eine Link-Local-Adresse gegeben. Damit kann er weder den Router noch das Internet erreichen.</p>
        <p><strong>b)</strong> Mögliche Ursachen: Netzwerkkabel defekt oder nicht gesteckt bzw. Dose nicht gepatcht; Switchport deaktiviert oder im falschen VLAN; DHCP-Server ausgefallen oder Adresspool erschöpft; Port-Security bzw. 802.1X blockiert das neue Gerät.</p>
        <p><strong>c)</strong> <code>ipconfig /release</code> und anschließend <code>ipconfig /renew</code>; danach mit <code>ipconfig /all</code> kontrollieren.</p>
        <p><strong>d)</strong> Gateway und Internet-IP sind erreichbar, also funktionieren Verkabelung, IP-Konfiguration und Routing. Nur die <strong>Namensauflösung (DNS)</strong> schlägt fehl. Prüfen mit <code>ipconfig /all</code> (welcher DNS-Server ist eingetragen?) und <code>nslookup www.ihk.de</code>; ggf. DNS-Cache mit <code>ipconfig /flushdns</code> leeren und den DNS-Eintrag im DHCP-Server korrigieren.</p>
        <p><strong>e)</strong> Im kabelgebundenen LAN sind Antwortzeiten unter 1–10 ms üblich. 110–130 ms zum eigenen Gateway sind deutlich zu hoch und deuten auf Überlast des Netzes oder Routers, eine Duplex-Fehlanpassung, fehlerhafte Kabel oder – bei WLAN – auf Funkstörungen hin. Das sollte weiter untersucht werden.</p>
        <p><strong>f)</strong> Beispiel:</p>
        <table><thead><tr><th>Nr.</th><th>Testfall</th><th>Soll</th><th>Ist</th><th>Ergebnis</th></tr></thead><tbody>
          <tr><td>1</td><td>IP per DHCP (<code>ipconfig /all</code>)</td><td>Adresse aus 192.168.20.0/24, Gateway 192.168.20.1</td><td>192.168.20.57, GW .1</td><td>i. O.</td></tr>
          <tr><td>2</td><td><code>ping 192.168.20.1</code></td><td>Antwort &lt; 10 ms</td><td>Antwort 1 ms</td><td>i. O.</td></tr>
          <tr><td>3</td><td><code>ping 1.1.1.1</code></td><td>Antwort</td><td>Antwort 14 ms</td><td>i. O.</td></tr>
          <tr><td>4</td><td><code>nslookup www.ihk.de</code></td><td>IP-Adresse wird aufgelöst</td><td>aufgelöst</td><td>i. O.</td></tr>
        </tbody></table>
        <p>Dazu gehören Datum, Name des Prüfers, Gerätebezeichnung/MAC, ggf. Maßnahmen und Unterschrift.</p>`
    },
    {
      id: "e-ipv6-notation",
      topic: "ipv6",
      title: "IPv6-Adressen kürzen, ausschreiben, einordnen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>a) Kürze die folgenden Adressen so weit wie möglich:<br>
          1) 2001:0db8:0a0b:0000:0000:0000:0000:00ff<br>
          2) fe80:0000:0000:0000:0212:34ff:fe56:7890<br>
          3) 2001:0db8:0000:0001:0000:0000:0000:0000</p>
        <p>b) Schreibe vollständig aus: 1) fd00::1:2 &nbsp; 2) 2001:db8:5::a:0</p>
        <p>c) Ordne die Adressen aus a) und b) einem Adresstyp zu.</p>
        <p>d) Bilde aus der MAC-Adresse 3C-52-82-1A-7F-09 die Interface-ID nach EUI-64.</p>
        <p>e) Nenne zwei Unterschiede zwischen IPv4 und IPv6.</p>`,
      hints: ["Nur einmal :: pro Adresse", "EUI-64: FFFE in die Mitte, 7. Bit des ersten Bytes umkehren"],
      solution: `<p><strong>a)</strong> 1) <strong>2001:db8:a0b::ff</strong> &nbsp; 2) <strong>fe80::212:34ff:fe56:7890</strong> &nbsp; 3) <strong>2001:db8:0:1::</strong></p>
        <p><strong>b)</strong> 1) fd00::1:2 hat 3 Blöcke → 5 Null-Blöcke fehlen: <strong>fd00:0000:0000:0000:0000:0000:0001:0002</strong><br>
          2) 2001:db8:5::a:0 hat 5 Blöcke → 3 Null-Blöcke fehlen: <strong>2001:0db8:0005:0000:0000:0000:000a:0000</strong></p>
        <p><strong>c)</strong> 2001:… → Global Unicast (hier Dokumentationsbereich 2001:db8::/32); fe80::… → Link-Local; fd00::… → Unique Local (privat).</p>
        <p><strong>d)</strong> MAC teilen und FFFE einfügen: 3C52:82<strong>FF:FE</strong>1A:7F09. Erstes Byte 3C = 0011 1100; 7. Bit umkehren → 0011 1110 = 3E. Interface-ID: <strong>3e52:82ff:fe1a:7f09</strong>.</p>
        <p><strong>e)</strong> Zum Beispiel: IPv4 hat 32 Bit, IPv6 128 Bit; IPv6 kennt keinen Broadcast, sondern Multicast; IPv6 nutzt NDP statt ARP; IPv6-Clients können sich per SLAAC selbst konfigurieren; bei IPv6 ist NAT wegen des großen Adressraums nicht nötig.</p>`
    },
    {
      id: "e-wlan-praxis",
      topic: "wlan",
      title: "WLAN für eine Physiotherapiepraxis",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Physiotherapiepraxis Wattblick in Büsum möchte ihr veraltetes WLAN (802.11g, WPA mit TKIP) ersetzen. 12 Tablets und Notebooks der Mitarbeiter greifen auf die Praxissoftware zu; Patientinnen und Patienten sollen im Wartebereich ins Internet können. Im Haus gibt es dicke Wände, in der Umgebung funken viele Nachbar-WLANs im 2,4-GHz-Band.</p>
        <p>a) Bewerte die bisherige Lösung aus Sicht der Sicherheit.</p>
        <p>b) Empfiehl einen WLAN-Standard und ein Frequenzband und begründe.</p>
        <p>c) Erläutere den Unterschied zwischen WPA3-Personal und WPA3-Enterprise und empfiehl eine Variante für das Mitarbeiter-WLAN.</p>
        <p>d) Nenne vier weitere Maßnahmen zur Absicherung.</p>
        <p>e) Ein Access Point wirbt mit 1201 Mbit/s. Schätze ab, welche Datenrate jeder von 20 gleichzeitig aktiven Clients ungefähr erwarten kann.</p>`,
      solution: `<p><strong>a)</strong> WPA mit TKIP gilt seit Jahren als unsicher und wird von aktuellen Geräten teils nicht mehr unterstützt. Da in der Praxis Gesundheitsdaten (besondere personenbezogene Daten nach DSGVO) verarbeitet werden, ist die Lösung nicht vertretbar; 802.11g bietet außerdem nur 54 Mbit/s brutto.</p>
        <p><strong>b)</strong> <strong>Wi-Fi 6 (802.11ax)</strong> oder Wi-Fi 7: hohe Datenraten, OFDMA für viele gleichzeitige Clients, WPA3-Unterstützung. Band: vorrangig <strong>5 GHz</strong> – viele überlappungsfreie Kanäle und keine Störungen durch die Nachbarnetze im 2,4-GHz-Band. Wegen der dicken Wände und der geringeren Reichweite sollten mehrere Access Points (z. B. per PoE versorgt) eingeplant werden; 2,4 GHz kann für ältere Geräte zusätzlich aktiv bleiben.</p>
        <p><strong>c)</strong> Bei <strong>WPA3-Personal</strong> nutzen alle Geräte dieselbe Passphrase (Anmeldung per SAE). Bei <strong>WPA3-Enterprise</strong> meldet sich jeder Nutzer bzw. jedes Gerät einzeln mit Benutzerkonto oder Zertifikat über 802.1X an einem RADIUS-Server an. Empfehlung: <strong>Enterprise</strong> für das Mitarbeiter-WLAN – verlässt jemand die Praxis, wird nur sein Konto gesperrt; ist das zu aufwendig, mindestens WPA3-Personal mit langer, zufälliger Passphrase.</p>
        <p><strong>d)</strong> Separates Gäste-WLAN mit eigenem VLAN, nur Internetzugang, Client-Isolation; Admin-Passwort des Routers/Controllers ändern; WPS deaktivieren; Firmware regelmäßig aktualisieren; lange, zufällige Passphrase für das Gästenetz regelmäßig wechseln; Sendeleistung und Standort der APs so wählen, dass das Signal möglichst nicht weit nach außen reicht.</p>
        <p><strong>e)</strong> Netto erreicht WLAN etwa die Hälfte der Bruttorate: rund 600 Mbit/s. Diese teilen sich alle aktiven Clients: 600 Mbit/s ÷ 20 ≈ <strong>30 Mbit/s je Client</strong> (grobe Schätzung, abhängig von Abstand, Störungen und Endgeräten).</p>`
    },
    {
      id: "e-cisco-grundkonfig",
      topic: "cisco-switch",
      title: "Switch-Grundkonfiguration und Fehlersuche",
      level: 3,
      exam: ["AP2"],
      task: `<p>Du sollst in Packet Tracer einen neuen Cisco-Switch für die Nordlicht IT GmbH vorbereiten. Vorgaben: Name <code>SW-KIEL-02</code>, Privileged-Passwort als Hash gespeichert, Konsolen- und VTY-Passwort, Management-IP 192.168.30.5/24 auf VLAN 1, Gateway 192.168.30.1, Konfiguration dauerhaft sichern.</p>
        <p>a) Schreibe die vollständige Befehlsfolge ab dem Prompt <code>Switch&gt;</code>.</p>
        <p>b) Nenne zu jedem der Prompts <code>Switch&gt;</code>, <code>Switch#</code>, <code>Switch(config)#</code>, <code>Switch(config-if)#</code> den Modus.</p>
        <p>c) Ein Kollege meldet: „Nach dem Neustart war der Switch wieder leer.“ Erkläre die Ursache.</p>
        <p>d) Ein PC mit 192.168.30.50/24 kann den Switch nicht anpingen. <code>show ip interface brief</code> zeigt für Vlan1: <code>192.168.30.5  YES manual administratively down  down</code>. Nenne Ursache und Lösung.</p>
        <p>e) Begründe, warum <code>enable secret</code> statt <code>enable password</code> verwendet werden sollte.</p>`,
      solution: `<p><strong>a)</strong></p>
        <pre><code>Switch&gt; enable
Switch# configure terminal
Switch(config)# hostname SW-KIEL-02
SW-KIEL-02(config)# enable secret Pr1v!Kiel26
SW-KIEL-02(config)# line console 0
SW-KIEL-02(config-line)# password K0ns0le!26
SW-KIEL-02(config-line)# login
SW-KIEL-02(config-line)# exit
SW-KIEL-02(config)# line vty 0 15
SW-KIEL-02(config-line)# password Vty!Kiel26
SW-KIEL-02(config-line)# login
SW-KIEL-02(config-line)# exit
SW-KIEL-02(config)# service password-encryption
SW-KIEL-02(config)# interface vlan 1
SW-KIEL-02(config-if)# ip address 192.168.30.5 255.255.255.0
SW-KIEL-02(config-if)# no shutdown
SW-KIEL-02(config-if)# exit
SW-KIEL-02(config)# ip default-gateway 192.168.30.1
SW-KIEL-02(config)# end
SW-KIEL-02# copy running-config startup-config</code></pre>
        <p><strong>b)</strong> <code>Switch&gt;</code> User-EXEC-Modus; <code>Switch#</code> Privileged-EXEC-Modus; <code>Switch(config)#</code> globaler Konfigurationsmodus; <code>Switch(config-if)#</code> Interface-Konfigurationsmodus.</p>
        <p><strong>c)</strong> Alle Änderungen wirken sofort in der <strong>running-config</strong>, die im flüchtigen RAM liegt. Wurde sie nicht mit <code>copy running-config startup-config</code> in den NVRAM gespeichert, lädt der Switch beim Neustart die alte (leere) startup-config.</p>
        <p><strong>d)</strong> „administratively down“ bedeutet: Das Interface ist abgeschaltet – der Befehl <code>no shutdown</code> fehlt. Lösung: <code>configure terminal</code> → <code>interface vlan 1</code> → <code>no shutdown</code>; anschließend Status mit <code>show ip interface brief</code> prüfen (up/up) und erneut pingen.</p>
        <p><strong>e)</strong> <code>enable secret</code> speichert das Passwort als Hash, <code>enable password</code> dagegen im Klartext (mit <code>service password-encryption</code> nur schwach verschleiert). Wer die Konfiguration sieht – etwa in einer Sicherung oder über <code>show running-config</code> –, kann ein Klartextpasswort sofort lesen. Sind beide gesetzt, gilt ohnehin das <code>enable secret</code>.</p>`
    },
    {
      id: "e-logik-kv-nand",
      topic: "logik",
      title: "Notlüfter: KV-Diagramm und NAND-Schaltung",
      level: 2,
      task: `<p>Im Serverschrank der Nordlicht IT GmbH soll ein Notlüfter <strong>z</strong> gesteuert werden. Eingänge: <strong>a</strong> = 1, wenn die Klimaanlage eine Störung meldet; <strong>b</strong> = 1, wenn die Temperatur im Schrank über 30 °C liegt; <strong>c</strong> = 1, wenn der Taster „Lüfter manuell ein“ gedrückt ist. Der Lüfter läuft, wenn der Taster gedrückt ist oder wenn die Klimaanlage gestört ist und gleichzeitig die Temperatur über 30 °C liegt.</p>
        <p>a) Erstelle die Wahrheitstabelle.</p>
        <p>b) Stelle die DNF auf.</p>
        <p>c) Trage die Funktion in ein KV-Diagramm ein (Spalten ab = 00, 01, 11, 10; Zeilen c = 0 und c = 1) und ermittle die vereinfachte Gleichung.</p>
        <p>d) Bestätige das Ergebnis auf schaltalgebraischem Weg.</p>
        <p>e) Die Schaltung soll nur mit dem IC 7400 (vier NAND-Gatter mit je zwei Eingängen) aufgebaut werden. Forme die Gleichung um und gib an, wie viele NAND-Gatter du brauchst.</p>`,
      hints: ["Im KV-Diagramm zuerst den größten möglichen Block suchen (4 Felder).", "De Morgan: x ∨ y = ¬(¬x ∧ ¬y)", "¬c = c NAND c"],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>a</th><th>b</th><th>c</th><th>z</th></tr></thead><tbody>
          <tr><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>1</td><td>1</td></tr>
          <tr><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>1</td></tr>
          <tr><td>1</td><td>0</td><td>0</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td><td>1</td></tr>
          <tr><td>1</td><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td></tr>
        </tbody></table>
        <p><strong>b)</strong> Zeilen mit z = 1: 001, 011, 101, 110, 111<br>
          z = (¬a ∧ ¬b ∧ c) ∨ (¬a ∧ b ∧ c) ∨ (a ∧ ¬b ∧ c) ∨ (a ∧ b ∧ ¬c) ∨ (a ∧ b ∧ c)</p>
        <p><strong>c)</strong></p>
        <pre class="ascii">            ab = 00   ab = 01   ab = 11   ab = 10
  c = 0   │    0    │    0    │    1    │    0    │
  c = 1   │    1    │    1    │    1    │    1    │</pre>
        <p>Block 1: die ganze Zeile c = 1 (vier Felder) – a und b wechseln, nur c bleibt gleich → <strong>c</strong>. Block 2: die Spalte ab = 11 (zwei Felder) – c wechselt, a = 1 und b = 1 bleiben → <strong>a ∧ b</strong>. Ergebnis: <strong>z = c ∨ (a ∧ b)</strong>.</p>
        <p><strong>d)</strong> Die vier Terme mit c enthalten alle Kombinationen von a und b: c ∧ [(¬a ∧ ¬b) ∨ (¬a ∧ b) ∨ (a ∧ ¬b) ∨ (a ∧ b)] = c ∧ 1 = c. Außerdem gilt (a ∧ b ∧ ¬c) ∨ (a ∧ b ∧ c) = a ∧ b ∧ (¬c ∨ c) = a ∧ b (der Term a ∧ b ∧ c darf mehrfach verwendet werden). Also z = c ∨ (a ∧ b) ✓.</p>
        <p><strong>e)</strong> Mit De Morgan: z = c ∨ (a ∧ b) = ¬(¬c ∧ ¬(a ∧ b)) = (c NAND c) NAND (a NAND b).<br>
          Gatter 1: a NAND b · Gatter 2: c NAND c (= ¬c) · Gatter 3: Ausgang von Gatter 2 NAND Ausgang von Gatter 1 = z.<br>
          Es werden <strong>3 NAND-Gatter</strong> benötigt – ein IC 7400 reicht, ein Gatter bleibt frei.</p>`
    },
    {
      id: "e-subnetze-abteilungen",
      topic: "ipv4-client",
      title: "Firmennetz in vier Subnetze aufteilen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Deichkontor Logistik GmbH in Meldorf nutzt das Netz 172.16.40.0/24. Es soll in vier gleich große Subnetze für Verwaltung, Lager, Technik und Gäste-WLAN aufgeteilt werden.</p>
        <p>a) Wie viele Bits musst du aus dem Hostanteil leihen? Gib die neue Präfixlänge und die Subnetzmaske an.</p>
        <p>b) Erstelle eine Tabelle mit Netzadresse, erster und letzter nutzbarer Hostadresse sowie Broadcastadresse aller vier Subnetze.</p>
        <p>c) Wie viele Hosts sind je Subnetz nutzbar? Das Lager meldet einen Bedarf von 70 Geräten. Welche Präfixlänge müsste das Lager-Subnetz mindestens haben?</p>
        <p>d) Ein Drucker im dritten Subnetz (Technik) wurde mit 172.16.40.191/26 konfiguriert. Beurteile die Konfiguration.</p>
        <p>e) Das Gateway des Gäste-WLANs (viertes Subnetz) soll die erste nutzbare Adresse erhalten. Nenne sie.</p>`,
      hints: ["4 Subnetze = 2²", "Blockgröße = 256 − letztes Oktett der Maske"],
      solution: `<p><strong>a)</strong> 4 Subnetze = 2² → <strong>2 Bit</strong> leihen → /24 + 2 = <strong>/26</strong>, Maske <strong>255.255.255.192</strong> (Blockgröße 256 − 192 = 64).</p>
        <p><strong>b)</strong></p>
        <table><thead><tr><th>Subnetz</th><th>Netzadresse</th><th>erster Host</th><th>letzter Host</th><th>Broadcast</th></tr></thead><tbody>
          <tr><td>1 Verwaltung</td><td>172.16.40.0</td><td>172.16.40.1</td><td>172.16.40.62</td><td>172.16.40.63</td></tr>
          <tr><td>2 Lager</td><td>172.16.40.64</td><td>172.16.40.65</td><td>172.16.40.126</td><td>172.16.40.127</td></tr>
          <tr><td>3 Technik</td><td>172.16.40.128</td><td>172.16.40.129</td><td>172.16.40.190</td><td>172.16.40.191</td></tr>
          <tr><td>4 Gäste-WLAN</td><td>172.16.40.192</td><td>172.16.40.193</td><td>172.16.40.254</td><td>172.16.40.255</td></tr>
        </tbody></table>
        <p><strong>c)</strong> Je Subnetz 2⁶ − 2 = <strong>62 Hosts</strong>. Für 70 Geräte reicht ein /26 nicht. Benötigt werden mindestens 7 Hostbits (2⁷ − 2 = 126 ≥ 70), also mindestens ein <strong>/25</strong>. Dann können die Subnetze nicht mehr alle gleich groß sein – unterschiedlich große Subnetze (VLSM) behandelst du in LF 9.</p>
        <p><strong>d)</strong> Die Konfiguration ist <strong>falsch</strong>: 172.16.40.191 ist die Broadcastadresse des Subnetzes 172.16.40.128/26 und darf keinem Gerät zugewiesen werden. Der Drucker braucht eine Adresse zwischen 172.16.40.129 und 172.16.40.190, am besten fest reserviert.</p>
        <p><strong>e)</strong> <strong>172.16.40.193</strong></p>`
    },
    {
      id: "e-homeoffice",
      topic: "fernzugriff",
      title: "Homeoffice-Zugang für eine Steuerkanzlei",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Zwei Mitarbeitende der Steuerkanzlei Friesenhof in Husum sollen künftig zwei Tage pro Woche im Homeoffice arbeiten. Sie müssen auf Mandantendaten auf dem Dateiserver und auf die Kanzleisoftware zugreifen, die auf ihren Büro-PCs installiert ist. Der Kanzleiinhaber schlägt vor, am Internetrouter den Port 3389 direkt auf die Büro-PCs weiterzuleiten – „das geht am schnellsten“.</p>
        <p>a) Bewerte den Vorschlag des Kanzleiinhabers.</p>
        <p>b) Beschreibe eine sichere Lösung, die VPN und Remote Desktop kombiniert.</p>
        <p>c) Nenne vier Schritte, mit denen du Remotedesktop auf einem Büro-PC einrichtest.</p>
        <p>d) Erläutere, wie ein VPN die Schutzziele Vertraulichkeit, Integrität und Authentizität unterstützt.</p>
        <p>e) Unterscheide Full Tunnel und Split Tunneling und empfiehl eine Variante für die Kanzlei.</p>
        <p>f) Nenne drei Testfälle für das Testprotokoll nach der Einrichtung.</p>`,
      hints: ["Denke an Brute-Force-Angriffe auf offene Ports.", "Welche Daten verarbeitet eine Steuerkanzlei?"],
      solution: `<p><strong>a)</strong> Der Vorschlag ist <strong>abzulehnen</strong>. Ein aus dem Internet erreichbarer RDP-Port wird automatisiert gefunden und mit Passwortlisten angegriffen; Sicherheitslücken im RDP-Dienst könnten direkt ausgenutzt werden. Gelingt ein Angriff, hat der Angreifer Zugriff auf Mandantendaten – das wäre eine Datenschutzverletzung nach DSGVO und ein erhebliches Risiko (z. B. Ransomware).</p>
        <p><strong>b)</strong> Die Firewall bzw. der Router der Kanzlei wird als VPN-Gateway eingerichtet. Auf den Firmennotebooks wird ein VPN-Client mit Zertifikat und zweitem Faktor installiert (Client-to-Site-VPN). Erst nach dem Aufbau des verschlüsselten Tunnels verbinden sich die Mitarbeitenden per Remotedesktop mit ihrem Büro-PC. Die Büro-PCs erlauben RDP nur aus dem VPN-Adressbereich; Port 3389 ist am Internetrouter nicht freigegeben.</p>
        <p><strong>c)</strong> (1) Prüfen, ob auf dem Büro-PC Windows Pro oder Enterprise läuft. (2) Remotedesktop in den Einstellungen aktivieren und die Authentifizierung auf Netzwerkebene (NLA) eingeschaltet lassen. (3) Nur das Konto der jeweiligen Person zur Gruppe „Remotedesktopbenutzer“ hinzufügen. (4) Die Firewall-Regel auf den VPN-Adressbereich beschränken und den Energiesparmodus deaktivieren, damit der PC erreichbar bleibt.</p>
        <p><strong>d)</strong> <strong>Vertraulichkeit:</strong> Alle Daten werden im Tunnel verschlüsselt; wer den Verkehr im Internet oder im Heim-WLAN mitschneidet, kann ihn nicht lesen. <strong>Integrität:</strong> Kryptografische Prüfwerte zu jedem Paket zeigen, ob Daten unterwegs verändert wurden; manipulierte Pakete werden verworfen. <strong>Authentizität:</strong> Benutzer bzw. Gerät müssen sich mit Zertifikat und/oder Passwort plus zweitem Faktor anmelden, und auch das VPN-Gateway weist sich aus – so kommuniziert der Client sicher mit dem echten Firmennetz.</p>
        <p><strong>e)</strong> Beim <strong>Full Tunnel</strong> läuft der gesamte Datenverkehr durch das VPN, auch das Surfen im Internet; die Kanzlei-Firewall kann alles kontrollieren. Beim <strong>Split Tunneling</strong> geht nur der Verkehr ins Kanzleinetz durch den Tunnel, der übrige Verkehr direkt ins Internet. Empfehlung: <strong>Full Tunnel</strong>, weil Mandantendaten besonders schützenswert sind und nur zwei Personen die Firmenleitung zusätzlich belasten.</p>
        <p><strong>f)</strong> Zum Beispiel: (1) VPN-Verbindung wird mit MFA aufgebaut, <code>ipconfig</code> zeigt eine Adresse aus dem VPN-Pool. (2) <code>ping</code> und <code>nslookup</code> auf den Dateiserver sind erfolgreich, das Netzlaufwerk lässt sich öffnen. (3) Die Remotedesktopverbindung zum eigenen Büro-PC funktioniert, eine Verbindung zum PC eines Kollegen wird abgelehnt. (4) Von außen ohne VPN ist Port 3389 nicht erreichbar.</p>`
    },
  ],
  quiz: [
    { id: "q-el-1", topic: "elektro-grundgroessen", type: "single",
      q: "Wie berechnest du nach dem Ohmschen Gesetz den Widerstand R?",
      options: ["R = U ÷ I", "R = U × I", "R = I ÷ U", "R = P × I"],
      answer: 0,
      explain: "Aus U = R × I folgt durch Umstellen R = U ÷ I. U × I ergibt die Leistung P, I ÷ U wäre der Kehrwert des Widerstands (Leitwert), und P × I hat keine sinnvolle Bedeutung für R." },
    { id: "q-el-2", topic: "elektro-grundgroessen", type: "input",
      q: "Ein Ohmscher Widerstand von 460 Ω liegt an 230 V. Wie groß ist der Strom in Ampere?",
      answer: ["0,5", "0,5 A", "0,5A", "500 mA", "500mA"],
      explain: "I = U ÷ R = 230 V ÷ 460 Ω = 0,5 A (= 500 mA)." },
    { id: "q-el-3", topic: "elektro-grundgroessen", type: "multi",
      q: "Welche Aussagen zur <strong>Parallelschaltung</strong> von Widerständen sind richtig?",
      options: ["Der Gesamtwiderstand ist kleiner als der kleinste Einzelwiderstand.", "Durch alle Widerstände fließt derselbe Strom.", "An allen Zweigen liegt dieselbe Spannung.", "Der Gesamtstrom ist die Summe der Zweigströme."],
      answer: [0,  2,  3],
      explain: "Parallel: gleiche Spannung, Ströme addieren sich, 1 ÷ R_ges = 1 ÷ R₁ + 1 ÷ R₂ – dadurch ist R_ges kleiner als jeder Einzelwiderstand. „Derselbe Strom durch alle Widerstände“ gilt für die Reihenschaltung." },
    { id: "q-el-4", topic: "elektro-grundgroessen", type: "tf",
      q: "In einer Reihenschaltung fließt durch alle Widerstände derselbe Strom.",
      answer: true,
      explain: "Richtig. Es gibt nur einen Stromweg; die Gesamtspannung teilt sich dagegen auf die Widerstände auf (U = U₁ + U₂ + …)." },
    { id: "q-el-5", topic: "elektro-grundgroessen", type: "single",
      q: "Wie viel Ohm sind 4,7 kΩ?",
      options: ["4700 Ω", "470 Ω", "47.000 Ω", "0,0047 Ω"],
      answer: 0,
      explain: "k (Kilo) steht für 10³ = 1000: 4,7 × 1000 Ω = 4700 Ω. 0,0047 Ω entspräche 4,7 mΩ (Milli), 47.000 Ω wären 47 kΩ." },
    { id: "q-pw-1", topic: "leistung-energie", type: "single",
      q: "Die Komponenten eines PCs benötigen 255 W, das Netzteil hat einen Wirkungsgrad von 85 %. Welche Leistung nimmt der PC aus dem Netz auf?",
      options: ["300 W", "216,75 W", "255 W", "340 W"],
      answer: 0,
      explain: "P_zu = P_ab ÷ η = 255 W ÷ 0,85 = 300 W. Wer mit η multipliziert (216,75 W), macht den typischen Fehler – die Netzaufnahme ist immer größer als der Bedarf der Komponenten." },
    { id: "q-pw-2", topic: "leistung-energie", type: "input",
      q: "Ein Monitor mit 60 W läuft 10 Stunden an 250 Tagen im Jahr. Wie viele kWh verbraucht er?",
      answer: ["150", "150 kWh", "150kWh"],
      explain: "W = P × t = 0,06 kW × (10 h × 250) = 0,06 kW × 2500 h = 150 kWh." },
    { id: "q-pw-3", topic: "leistung-energie", type: "multi",
      q: "Welche Aussagen zum Wirkungsgrad η sind richtig?",
      options: ["η = P_ab ÷ P_zu", "Bei realen Geräten ist η immer kleiner als 1.", "Die Verlustleistung wird überwiegend als Wärme frei.", "Bei hintereinandergeschalteten Stufen werden die Wirkungsgrade addiert."],
      answer: [0, 1, 2],
      explain: "η ist das Verhältnis von abgegebener zu zugeführter Leistung und bei realen Geräten immer &lt; 1; die Differenz wird zu Wärme. Mehrere Stufen werden multipliziert (η_ges = η₁ × η₂), nicht addiert – sonst käme man über 100 %." },
    { id: "q-pw-4", topic: "leistung-energie", type: "single",
      q: "Welche maximale Leistung stellt ein Switch-Port nach IEEE 802.3at (PoE+) bereit?",
      options: ["30 W", "15,4 W", "60 W", "90 W"],
      answer: 0,
      explain: "802.3at (PoE+) liefert 30 W am Port (25,5 W am Endgerät). 15,4 W gilt für 802.3af, 60 W und 90 W für die Typen 3 und 4 von 802.3bt." },
    { id: "q-pw-5", topic: "leistung-energie", type: "tf",
      q: "Das PoE-Budget eines Switches gibt an, welche Leistung ein einzelner Port maximal liefern kann.",
      answer: false,
      explain: "Falsch. Das PoE-Budget ist die Gesamtleistung, die der Switch auf alle Ports zusammen verteilen kann. Die Leistung je Port ergibt sich aus Standard bzw. Klasse (z. B. 30 W bei PoE+)." },
    { id: "q-pw-6", topic: "leistung-energie", type: "single",
      q: "Ein USB-C-Netzteil liefert 5 V bei 3 A. Welche Leistung ist das?",
      options: ["15 W", "1,67 W", "8 W", "0,6 W"],
      answer: 0,
      explain: "P = U × I = 5 V × 3 A = 15 W. 1,67 wäre U ÷ I (ein Widerstand in Ω), 8 die Summe der Zahlen." },
    { id: "q-lg-1", topic: "logik", type: "single",
      q: "Bei welcher Verknüpfung ist der Ausgang genau dann 1, wenn die beiden Eingänge <strong>unterschiedlich</strong> sind?",
      options: ["XOR", "XNOR", "NAND", "OR"],
      answer: 0,
      explain: "XOR (Antivalenz) liefert 1 bei 01 und 10. XNOR ist das Gegenteil (1 bei Gleichheit), NAND liefert auch bei 00 eine 1, OR auch bei 11." },
    { id: "q-lg-2", topic: "logik", type: "single",
      q: "Welche Funktion hat ein Schaltzeichen nach IEC 60617 mit der Aufschrift „≥1“ ohne Negationskreis?",
      options: ["ODER", "UND", "NOR", "XOR"],
      answer: 0,
      explain: "„≥1“ bedeutet: Mindestens ein Eingang muss 1 sein → ODER. UND trägt „&amp;“, XOR „=1“. NOR hätte dasselbe Zeichen „≥1“, aber mit Kreis am Ausgang." },
    { id: "q-lg-3", topic: "logik", type: "input",
      q: "Welchen Wert hat z = (a NAND b) XOR a für a = 1 und b = 0?",
      answer: ["0"],
      explain: "a NAND b = ¬(1 ∧ 0) = ¬0 = 1. Danach 1 XOR a = 1 XOR 1 = 0, denn XOR liefert bei gleichen Eingängen 0." },
    { id: "q-lg-4", topic: "logik", type: "multi",
      q: "Welche Ausdrücke sind gleichwertig zu ¬(a ∧ b)?",
      options: ["a NOR b", "¬a ∨ ¬b", "a NAND b", "¬a ∧ ¬b"],
      answer: [1,  2],
      explain: "¬(a ∧ b) ist die NAND-Funktion; nach De Morgan gilt ¬(a ∧ b) = ¬a ∨ ¬b. ¬a ∧ ¬b ist dagegen ¬(a ∨ b) = NOR – ein häufiger Fehler beim Anwenden von De Morgan (das Zeichen muss mitgedreht werden)." },
    { id: "q-lg-5", topic: "logik", type: "tf",
      q: "Eine Wahrheitstabelle für eine Schaltung mit drei Eingängen hat 8 Zeilen.",
      answer: true,
      explain: "Richtig: Bei n Eingängen gibt es 2ⁿ Kombinationen, also 2³ = 8 Zeilen (von 000 bis 111)." },
    { id: "q-nw-1", topic: "netzwerk-grundlagen", type: "single",
      q: "Bei welcher Topologie betrifft ein defektes Kabel nur ein Endgerät, der Ausfall der zentralen Komponente aber das gesamte Netz?",
      options: ["Stern", "Bus", "Ring", "Vollvermaschung"],
      answer: 0,
      explain: "Im Stern hat jedes Gerät eine eigene Leitung zum zentralen Switch. Beim Bus legt ein Kabelbruch das gesamte Segment lahm, beim einfachen Ring unterbricht ein Ausfall den Ring, und eine Vollvermaschung hat gerade keine zentrale Komponente." },
    { id: "q-nw-2", topic: "netzwerk-grundlagen", type: "input",
      q: "Wie viele Verbindungen benötigt man, um 6 Router vollständig zu vermaschen?",
      answer: ["15", "15 Verbindungen"],
      explain: "n × (n − 1) ÷ 2 = 6 × 5 ÷ 2 = 15. Geteilt wird durch 2, weil jede Verbindung zwei Knoten gleichzeitig verbindet." },
    { id: "q-nw-3", topic: "netzwerk-grundlagen", type: "single",
      q: "Was kennzeichnet eine Windows-Domäne im Unterschied zu einer Arbeitsgruppe?",
      options: ["Benutzerkonten und Richtlinien werden zentral auf einem Domänencontroller verwaltet.", "Jeder Rechner verwaltet seine Benutzerkonten selbst.", "Alle Rechner müssen im selben Raum stehen.", "Es wird kein DNS-Server benötigt."],
      answer: 0,
      explain: "In der Domäne liegen Konten, Gruppen und Gruppenrichtlinien zentral im Verzeichnisdienst (z. B. Active Directory). Lokale Konten auf jedem Rechner kennzeichnen die Arbeitsgruppe. Eine Domäne braucht DNS zwingend, um den Domänencontroller zu finden; der Standort der Rechner spielt keine Rolle." },
    { id: "q-nw-4", topic: "netzwerk-grundlagen", type: "multi",
      q: "Welche Informationen gehören typischerweise in einen <strong>logischen</strong> Netzwerkplan?",
      options: ["IP-Subnetze und Präfixe", "VLAN-Zuordnungen", "Standardgateways und Router-Schnittstellen", "Verlauf der Kabel im Kabelkanal", "Position der Netzwerkdosen im Raum"],
      answer: [0, 1, 2],
      explain: "Der logische Plan zeigt Adressierung und Datenfluss: Subnetze, VLANs, Gateways. Kabelwege und Dosenpositionen sind Inhalte des physischen Plans." },
    { id: "q-nw-5", topic: "netzwerk-grundlagen", type: "tf",
      q: "Ein WAN ist in der Regel auf ein einzelnes Gebäude beschränkt.",
      answer: false,
      explain: "Falsch. Ein auf ein Gebäude oder Gelände beschränktes Netz ist ein LAN. Ein WAN (Wide Area Network) verbindet Standorte über große Entfernungen, z. B. über Provider-Leitungen." },
    { id: "q-osi-1", topic: "osi-komponenten", type: "single",
      q: "Auf welcher OSI-Schicht arbeitet ein klassischer Switch?",
      options: ["Schicht 2 – Sicherung", "Schicht 1 – Bitübertragung", "Schicht 3 – Vermittlung", "Schicht 4 – Transport"],
      answer: 0,
      explain: "Ein Switch wertet MAC-Adressen aus und leitet Frames weiter – das ist Schicht 2. Schicht 1 wäre ein Hub oder Repeater, Schicht 3 ein Router (bzw. Layer-3-Switch), Schicht 4 betrifft Ports (TCP/UDP)." },
    { id: "q-osi-2", topic: "osi-komponenten", type: "single",
      q: "Wie heißt die Dateneinheit auf OSI-Schicht 3?",
      options: ["Paket", "Frame", "Segment", "Bit"],
      answer: 0,
      explain: "Schicht 3 (Vermittlung, IP) arbeitet mit Paketen. Frames gehören zu Schicht 2, Segmente zu Schicht 4 (TCP), Bits zu Schicht 1." },
    { id: "q-osi-3", topic: "osi-komponenten", type: "multi",
      q: "Welche Geräte arbeiten auf OSI-Schicht 1?",
      options: ["Switch", "Router", "Hub", "Repeater"],
      answer: [2,  3],
      explain: "Hub und Repeater verstärken bzw. verteilen nur Signale, ohne Adressen auszuwerten – Schicht 1. Der Switch nutzt MAC-Adressen (Schicht 2), der Router IP-Adressen (Schicht 3)." },
    { id: "q-osi-4", topic: "osi-komponenten", type: "single",
      q: "Ein Switch erhält einen Frame an eine Ziel-MAC-Adresse, die noch nicht in seiner MAC-Adresstabelle steht. Was tut er?",
      options: ["Er leitet den Frame an alle Ports außer dem Eingangsport weiter.", "Er verwirft den Frame.", "Er sendet den Frame an das Standardgateway.", "Er fragt per DNS nach der MAC-Adresse."],
      answer: 0,
      explain: "Unbekannte Ziele werden „geflutet“ (Flooding). Sobald das Zielgerät antwortet, lernt der Switch dessen Port. Ein Switch verwirft den Frame nicht, kennt kein Gateway (das ist Sache des Endgeräts) und DNS löst Namen in IP-Adressen auf, nicht MAC-Adressen." },
    { id: "q-osi-5", topic: "osi-komponenten", type: "single",
      q: "Wie lang ist eine MAC-Adresse?",
      options: ["48 Bit", "32 Bit", "64 Bit", "128 Bit"],
      answer: 0,
      explain: "Eine MAC-Adresse hat 48 Bit = 6 Byte, geschrieben als 12 Hexziffern. 32 Bit hat eine IPv4-Adresse, 128 Bit eine IPv6-Adresse, 64 Bit ist die Länge einer IPv6-Interface-ID." },
    { id: "q-osi-6", topic: "osi-komponenten", type: "tf",
      q: "Ein Router leitet Broadcasts standardmäßig in andere IP-Netze weiter.",
      answer: false,
      explain: "Falsch. Router begrenzen Broadcast-Domänen – Broadcasts bleiben im eigenen Netz. Deshalb braucht man z. B. für DHCP über Netzgrenzen hinweg einen DHCP-Relay-Agenten." },
    { id: "q-cu-1", topic: "kupferkabel", type: "single",
      q: "Welche Kabelkategorie erfüllt mindestens die Anforderung für 10 Gbit/s (10GBASE-T) über die volle Länge von 100 m?",
      options: ["Cat 6A", "Cat 5e", "Cat 6", "Cat 5"],
      answer: 0,
      explain: "Cat 6A (500 MHz) ist für 10GBASE-T über 100 m spezifiziert. Cat 6 schafft 10 Gbit/s nur bis etwa 55 m, Cat 5e ist für 1 Gbit/s (bis 2,5 Gbit/s) gedacht, Cat 5 für 100 Mbit/s." },
    { id: "q-cu-2", topic: "kupferkabel", type: "single",
      q: "Was bedeutet die Kabelbezeichnung U/FTP?",
      options: ["Kein Gesamtschirm, jedes Adernpaar mit Folie geschirmt", "Gesamtschirm aus Folie, Paare ungeschirmt", "Gesamtschirm aus Geflecht, Paare mit Folie geschirmt", "Weder Gesamtschirm noch Paarschirm"],
      answer: 0,
      explain: "Vor dem Schrägstrich steht der Gesamtschirm (U = keiner), dahinter die Paarschirmung (FTP = Folie je Paar). Folie gesamt/Paare ungeschirmt wäre F/UTP, Geflecht + Folie je Paar S/FTP, ganz ungeschirmt U/UTP." },
    { id: "q-cu-3", topic: "kupferkabel", type: "input",
      q: "Wie viele Meter darf eine Twisted-Pair-Übertragungsstrecke (Channel) inklusive Patchkabel maximal lang sein?",
      answer: ["100", "100 m", "100m", "100 Meter"],
      explain: "Maximal 100 m: 90 m fest verlegtes Installationskabel (Permanent Link) plus insgesamt 10 m Patch- und Anschlusskabel." },
    { id: "q-cu-4", topic: "kupferkabel", type: "multi",
      q: "Welche Aussagen zu den Belegungen T568A und T568B sind richtig?",
      options: ["Der Unterschied besteht im Tausch des grünen und des orangen Adernpaars.", "Bei einem Patchkabel sind die Enden gleich belegt (1:1).", "Ein Crossover-Kabel hat an einem Ende T568A und am anderen T568B.", "Gigabit Ethernet nutzt nur die Pins 1, 2, 3 und 6.", "T568B ist für Glasfaserstecker vorgesehen."],
      answer: [0, 1, 2],
      explain: "A und B unterscheiden sich nur durch vertauschte grüne/orange Paare; Patchkabel = beide Enden gleich, Crossover = A auf B. Nur Fast Ethernet kommt mit den Pins 1, 2, 3, 6 aus – 1000BASE-T nutzt alle vier Paare. T568A/B beschreibt RJ45-Kupferstecker, nicht LWL." },
    { id: "q-cu-5", topic: "kupferkabel", type: "single",
      q: "Welchen Wellenwiderstand haben Koaxialkabel für Kabelfernsehen und Kabel-Internet üblicherweise?",
      options: ["75 Ω", "50 Ω", "100 Ω", "120 Ω"],
      answer: 0,
      explain: "TV- und Kabelnetze (DOCSIS) arbeiten mit 75-Ω-Koax. 50 Ω ist bei Funk- und Antennentechnik üblich, 100 Ω ist der Wellenwiderstand von Twisted-Pair-Kabeln." },
    { id: "q-cu-6", topic: "kupferkabel", type: "tf",
      q: "Dank Auto-MDI-X funktioniert zwischen zwei modernen Switches in der Regel auch ein normales Patchkabel.",
      answer: true,
      explain: "Richtig. Auto-MDI-X erkennt, auf welchen Adernpaaren gesendet und empfangen wird, und tauscht die Belegung intern. Ein spezielles Crossover-Kabel ist dann nicht mehr nötig." },
    { id: "q-lwl-1", topic: "lwl", type: "single",
      q: "Auf welchem physikalischen Prinzip beruht die Lichtführung im Kern eines Lichtwellenleiters?",
      options: ["Totalreflexion an der Grenze zum optisch dünneren Mantel", "Beugung des Lichts an der Außenhülle", "Verstärkung des Lichts durch die Aramidfasern", "Reflexion an einer Metallschicht zwischen Kern und Mantel"],
      answer: 0,
      explain: "Der Kern hat eine höhere Brechzahl als der Mantel. Trifft das Licht flach genug auf die Grenzfläche, wird es vollständig reflektiert (Totalreflexion). Es gibt keine Metallschicht, und die Aramidfasern dienen nur der Zugentlastung." },
    { id: "q-lwl-2", topic: "lwl", type: "single",
      q: "Welchen Kerndurchmesser hat eine typische Singlemodefaser?",
      options: ["ca. 9 µm", "50 µm", "62,5 µm", "125 µm"],
      answer: 0,
      explain: "Singlemodefasern haben einen sehr dünnen Kern von etwa 9 µm (Bezeichnung 9/125). 50 µm und 62,5 µm sind Multimode-Kerne, 125 µm ist der Manteldurchmesser beider Fasertypen." },
    { id: "q-lwl-3", topic: "lwl", type: "multi",
      q: "Welche Fehler können eine erhöhte Dämpfung an einer LWL-Steck- oder Spleißverbindung verursachen?",
      options: ["eine zu hohe eingestellte Datenrate am Switch", "Kernversatz zwischen den zwei Fasern", "verschmutzte Stirnfläche", "Luftspalt zwischen den Faserenden", "Winkelversatz der Faserachsen"],
      answer: [1,  2,  3,  4],
      explain: "Kern- und Winkelversatz, Verschmutzung und Luftspalt verhindern, dass das Licht vollständig in den nächsten Kern übertritt. Die Datenrate verändert die Dämpfung der Verbindungsstelle nicht – sie beeinflusst nur, wie stark sich Dispersion auswirkt." },
    { id: "q-lwl-4", topic: "lwl", type: "single",
      q: "Welche Multimode-Faserklasse ermöglicht 10GBASE-SR über 400 m?",
      options: ["OM4", "OM3", "OM2", "OM1"],
      answer: 0,
      explain: "10GBASE-SR erreicht mit OM4 (4700 MHz·km) bis 400 m. OM3 schafft etwa 300 m, OM2 nur 82 m und OM1 nur 33 m." },
    { id: "q-lwl-5", topic: "lwl", type: "single",
      q: "Warum hat eine Multimode-Gradientenindexfaser eine deutlich geringere Modendispersion als eine Stufenindexfaser?",
      options: ["Die Brechzahl nimmt nach außen ab, sodass Lichtwege am Rand schneller durchlaufen werden.", "Sie führt nur einen einzigen Mode.", "Ihr Kern ist dicker, sodass sich die Strahlen nicht überlagern.", "Sie arbeitet ausschließlich mit sichtbarem Licht."],
      answer: 0,
      explain: "Beim Gradientenprofil ist die Brechzahl außen kleiner, das Licht dort schneller – die längeren Wege gleichen sich zeitlich aus. Nur einen Mode führt die Singlemodefaser. Ein dickerer Kern würde die Dispersion eher erhöhen, und LWL arbeiten meist im Infrarotbereich." },
    { id: "q-lwl-6", topic: "lwl", type: "tf",
      q: "APC- und UPC-Stecker können problemlos miteinander gesteckt werden.",
      answer: false,
      explain: "Falsch. APC-Stecker haben einen 8°-Schrägschliff (grün), UPC-Stecker einen geraden Schliff (blau). Werden sie kombiniert, entsteht ein Luftspalt mit hoher Dämpfung und die Stirnflächen können beschädigt werden." },
    { id: "q-sd-1", topic: "signal-daempfung", type: "single", exam: ["AP2"],
      q: "Welchem Dämpfungsmaß entspricht eine Halbierung der Leistung?",
      options: ["ca. 3 dB", "ca. 6 dB", "ca. 10 dB", "ca. 0,5 dB"],
      answer: 0,
      explain: "a = 10 × lg(2) dB ≈ 3,01 dB. 6 dB entsprechen einer Halbierung der <em>Spannung</em> (bzw. einem Viertel der Leistung), 10 dB einem Zehntel der Leistung." },
    { id: "q-sd-2", topic: "signal-daempfung", type: "input", exam: ["AP2"],
      q: "Am Eingang einer Leitung liegen 10 mW an, am Ausgang 0,1 mW. Wie groß ist das Dämpfungsmaß in dB?",
      answer: ["20", "20 dB", "20dB"],
      explain: "a = 10 × lg(P₁ ÷ P₂) dB = 10 × lg(10 mW ÷ 0,1 mW) dB = 10 × lg(100) dB = 20 dB." },
    { id: "q-sd-3", topic: "signal-daempfung", type: "single",
      q: "Ein Kabel hat einen NVP von 0,7. Wie schnell breitet sich das Signal ungefähr aus (c₀ ≈ 3 × 10⁸ m/s)?",
      options: ["2,1 × 10⁸ m/s", "4,3 × 10⁸ m/s", "3 × 10⁸ m/s", "0,7 × 10⁶ m/s"],
      answer: 0,
      explain: "v = NVP × c₀ = 0,7 × 3 × 10⁸ m/s = 2,1 × 10⁸ m/s. Ein Signal im Kabel ist immer langsamer als Licht im Vakuum; 4,3 × 10⁸ m/s entstünde durch Teilen statt Multiplizieren." },
    { id: "q-sd-4", topic: "signal-daempfung", type: "single",
      q: "Eine Faser hat ein Bandbreite-Länge-Produkt von 500 MHz·km. Welche Bandbreite steht auf 2 km zur Verfügung?",
      options: ["250 MHz", "1000 MHz", "500 MHz", "2500 MHz"],
      answer: 0,
      explain: "B = BLP ÷ l = 500 MHz·km ÷ 2 km = 250 MHz. Das BLP ist konstant: Doppelte Länge bedeutet halbe Bandbreite. 1000 MHz entstünde durch Multiplizieren." },
    { id: "q-sd-5", topic: "signal-daempfung", type: "multi", exam: ["AP2"],
      q: "Welche Aussagen zur Rechnung mit Dezibel sind richtig?",
      options: ["Die Dämpfungen hintereinandergeschalteter Strecken werden in dB addiert.", "0 dBm entspricht einer Leistung von 1 mW.", "Für Spannungsverhältnisse gilt a = 20 × lg(U₁ ÷ U₂) dB.", "Ein Pegel von 20 dBm entspricht 20 mW."],
      answer: [0, 1, 2],
      explain: "dB-Werte addieren sich in einer Kette; dBm bezieht sich auf 1 mW (0 dBm = 1 mW); wegen P ~ U² steht bei Spannungen der Faktor 20. 20 dBm sind jedoch 100 mW (10^(20/10) = 100), nicht 20 mW." },
    { id: "q-sd-6", topic: "signal-daempfung", type: "tf",
      q: "Die Signallaufzeit auf einer Leitung wird länger, wenn eine größere Datei übertragen wird.",
      answer: false,
      explain: "Falsch. Die Signallaufzeit hängt nur von Leitungslänge und Ausbreitungsgeschwindigkeit ab (t = l ÷ v). Von der Datenmenge hängt die Übertragungsdauer ab (Datenmenge ÷ Datenrate)." },
    { id: "q-sv-1", topic: "strukturierte-verkabelung", type: "single",
      q: "Welche Verteiler verbindet der Tertiärbereich der strukturierten Verkabelung?",
      options: ["Etagenverteiler und Anschlussdose", "Standortverteiler und Gebäudeverteiler", "Gebäudeverteiler und Etagenverteiler", "Anschlussdose und Endgerät"],
      answer: 0,
      explain: "Der Tertiärbereich (Etagenverkabelung) reicht vom Etagenverteiler bis zur Anschlussdose. SV ↔ GV ist der Primärbereich, GV ↔ EV der Sekundärbereich. Die Verbindung Dose ↔ Endgerät ist nur ein Anschlusskabel und kein eigener Bereich." },
    { id: "q-sv-2", topic: "strukturierte-verkabelung", type: "single",
      q: "Welche maximale Länge sieht die Norm für den Primärbereich (Geländeverkabelung) vor?",
      options: ["1500 m", "90 m", "500 m", "10 km"],
      answer: 0,
      explain: "Primärbereich bis 1500 m, Sekundärbereich bis 500 m, Tertiärbereich 90 m fest verlegt (plus 10 m Patchkabel). 10 km ist die Reichweite von 10GBASE-LR, kein Grenzwert der Verkabelungsnorm." },
    { id: "q-sv-3", topic: "strukturierte-verkabelung", type: "multi",
      q: "Warum wird im Primärbereich zwischen zwei Gebäuden meist Lichtwellenleiter verlegt?",
      options: ["Unempfindlichkeit gegen elektromagnetische Störungen", "Endgeräte können darüber per PoE versorgt werden", "galvanische Trennung zwischen unterschiedlichen Erdpotenzialen", "größere Reichweite als Twisted Pair"],
      answer: [0,  2,  3],
      explain: "Glas leitet keinen Strom (galvanische Trennung, Schutz bei Blitz und Potenzialunterschieden), überbrückt große Entfernungen und ist EMV-unempfindlich. PoE ist nur über Kupfer möglich." },
    { id: "q-sv-4", topic: "strukturierte-verkabelung", type: "input",
      q: "Wie viele Millimeter hoch ist eine Höheneinheit (1 HE) in einem 19-Zoll-Schrank?",
      answer: ["44,45", "44,45 mm", "44,45mm"],
      explain: "1 HE = 1,75 Zoll = 1,75 × 25,4 mm = 44,45 mm. Ein 42-HE-Schrank bietet also rund 1,87 m nutzbare Einbauhöhe." },
    { id: "q-usv-1", topic: "usv", type: "single",
      q: "Welche Klassifizierung nach IEC 62040-3 hat eine Online-USV (Doppelwandler)?",
      options: ["VFI", "VFD", "VI", "VDE"],
      answer: 0,
      explain: "VFI = Voltage and Frequency Independent: Der Wechselrichter versorgt die Last ständig, Ausgangsspannung und -frequenz sind vom Netz unabhängig. VFD ist die Offline-USV, VI die Line-Interactive-USV; VDE ist ein Verband, keine USV-Klasse." },
    { id: "q-usv-2", topic: "usv", type: "single",
      q: "Die Verbraucher an einer USV haben zusammen 1800 W Wirkleistung bei cos φ = 0,9. Welche Scheinleistung muss die USV mindestens liefern?",
      options: ["2000 VA", "1620 VA", "1800 VA", "2700 VA"],
      answer: 0,
      explain: "S = P ÷ cos φ = 1800 W ÷ 0,9 = 2000 VA. Mit 1620 VA hätte man fälschlich multipliziert; VA und W sind nur bei cos φ = 1 gleich." },
    { id: "q-usv-3", topic: "usv", type: "multi",
      q: "Welche Aufgaben übernimmt eine USV im Serverraum?",
      options: ["Stromausfälle für eine begrenzte Zeit überbrücken", "Spannungsspitzen und -einbrüche ausfiltern", "die Server rechtzeitig zum kontrollierten Herunterfahren auffordern", "eine regelmäßige Datensicherung ersetzen"],
      answer: [0, 1, 2],
      explain: "Die USV sichert die Verfügbarkeit der Stromversorgung und ermöglicht ein geordnetes Herunterfahren (Signal per USB oder Netzwerk/SNMP). Gegen Datenverlust durch Defekte, Löschen oder Ransomware schützt sie nicht – eine Datensicherung bleibt nötig." },
    { id: "q-usv-4", topic: "usv", type: "single",
      q: "Was geschieht, wenn eine Online-USV bei Überlast auf ihren automatischen Bypass umschaltet?",
      options: ["Die Verbraucher werden direkt aus dem Netz versorgt – ohne Schutz vor Netzstörungen.", "Die Verbraucher werden sofort abgeschaltet.", "Die Batterie übernimmt die Versorgung dauerhaft.", "Die USV erhöht ihre Nennleistung automatisch."],
      answer: 0,
      explain: "Der Bypass schaltet die Last unterbrechungsfrei ans Netz, damit sie weiterläuft. Solange er aktiv ist, filtert die USV nichts – bei einem Netzausfall wären die Server ungeschützt. Eine Abschaltung soll der Bypass gerade verhindern." },
    { id: "q-usv-5", topic: "usv", type: "tf",
      q: "Eine USV mit 3000 VA kann in jedem Fall 3000 W Wirkleistung liefern.",
      answer: false,
      explain: "Falsch. Die Wirkleistung ist durch den Leistungsfaktor begrenzt: P = S × cos φ. Eine 3000-VA-USV liefert z. B. bei einem Faktor von 0,9 höchstens 2700 W – das steht als zweiter Wert im Datenblatt." },
    { id: "q-v4-1", topic: "ipv4-client", type: "single",
      q: "Wie lautet die Netzadresse des Hosts 192.168.1.130/26?",
      options: ["192.168.1.128", "192.168.1.0", "192.168.1.64", "192.168.1.192"],
      answer: 0,
      explain: "/26 → Maske 255.255.255.192, Blockgröße 64: Netze .0, .64, .128, .192. Die 130 liegt im Block 128–191, also Netzadresse 192.168.1.128 (Broadcast .191)." },
    { id: "q-v4-2", topic: "ipv4-client", type: "input",
      q: "Wie viele nutzbare Hostadressen hat ein IPv4-Netz mit dem Präfix /27?",
      answer: ["30", "30 Hosts"],
      explain: "32 − 27 = 5 Hostbits → 2⁵ − 2 = 30. Abgezogen werden Netzadresse und Broadcastadresse." },
    { id: "q-v4-3", topic: "ipv4-client", type: "single",
      q: "Ein Windows-Client zeigt die Adresse 169.254.37.12. Was bedeutet das am wahrscheinlichsten?",
      options: ["Der Client hat keine Antwort von einem DHCP-Server erhalten.", "Der Client hat eine gültige öffentliche Adresse.", "Der DNS-Server ist falsch eingetragen.", "Die Adresse wurde manuell als Loopback konfiguriert."],
      answer: 0,
      explain: "169.254.0.0/16 ist der APIPA-Bereich: Windows vergibt ihn sich selbst, wenn DHCP nicht antwortet. Die Adresse ist privat/link-lokal, hat mit DNS nichts zu tun, und Loopback wäre 127.0.0.1." },
    { id: "q-v4-4", topic: "ipv4-client", type: "multi",
      q: "Welche der folgenden Adressen sind <strong>private</strong> IPv4-Adressen?",
      options: ["11.0.0.1", "10.20.30.40", "172.20.1.1", "192.168.178.104", "172.32.0.1"],
      answer: [1,  2,  3],
      explain: "Privat sind 10.0.0.0/8, 172.16.0.0/12 (172.16.0.0 bis 172.31.255.255) und 192.168.0.0/16. 172.32.0.1 liegt knapp außerhalb von 172.16.0.0/12, 11.0.0.1 ist öffentlich." },
    { id: "q-v4-5", topic: "ipv4-client", type: "single",
      q: "Mit welchem Windows-Befehl zeigst du die Zuordnung von IP-Adressen zu MAC-Adressen im lokalen Netz an?",
      options: ["<code>arp -a</code>", "<code>tracert</code>", "<code>nslookup</code>", "<code>ipconfig /renew</code>"],
      answer: 0,
      explain: "<code>arp -a</code> zeigt den ARP-Cache (IP → MAC). <code>tracert</code> verfolgt den Weg über Router, <code>nslookup</code> fragt DNS ab, <code>ipconfig /renew</code> fordert eine neue DHCP-Adresse an." },
    { id: "q-v4-6", topic: "ipv4-client", type: "single",
      q: "Mit welcher Nachricht beginnt ein Client die Adressvergabe per DHCP?",
      options: ["DHCP-Discover als Broadcast", "DHCP-Request an das Standardgateway", "DHCP-Offer als Broadcast", "DHCP-Acknowledge an den DNS-Server"],
      answer: 0,
      explain: "Ablauf DORA: Discover (Client, Broadcast) → Offer (Server) → Request (Client) → Acknowledge (Server). Der Client kennt zu Beginn weder Server noch Gateway und muss deshalb per Broadcast suchen." },
    { id: "q-v4-7", topic: "ipv4-client", type: "tf",
      q: "Das Standardgateway eines Clients muss im selben IP-Subnetz liegen wie der Client selbst.",
      answer: true,
      explain: "Richtig. Der Client erreicht das Gateway direkt über das lokale Netz (per ARP). Liegt es in einem anderen Subnetz, kann er es nicht ansprechen und keine fremden Netze erreichen." },
    { id: "q-v4-8", topic: "ipv4-client", type: "single",
      q: "<code>ping 1.1.1.1</code> ist erfolgreich, <code>ping www.ihk.de</code> meldet dagegen „Host nicht gefunden“. Wo liegt der Fehler am wahrscheinlichsten?",
      options: ["bei der Namensauflösung (DNS)", "am Netzwerkkabel", "an der Subnetzmaske", "am Standardgateway"],
      answer: 0,
      explain: "Eine Internetadresse ist per IP erreichbar – Kabel, Adresse, Maske und Gateway funktionieren also. Nur die Übersetzung des Namens in eine IP-Adresse scheitert: DNS-Server prüfen (z. B. mit <code>nslookup</code>)." },
    { id: "q-v6-1", topic: "ipv6", type: "single",
      q: "Welche Schreibweise ist die korrekt gekürzte Form von 2001:0db8:0000:0000:0000:ff00:0042:8329?",
      options: ["2001:db8::ff00:42:8329", "2001:db8:0:0:0:ff:42:8329", "2001:db8::ff:42:8329", "2001:db8:::ff00:42:8329"],
      answer: 0,
      explain: "Führende Nullen entfallen (0db8 → db8, 0042 → 42), die drei Null-Blöcke werden durch :: ersetzt. ff00 darf nicht zu ff werden – nur führende, keine nachgestellten Nullen dürfen weg. ::: ist keine gültige Schreibweise." },
    { id: "q-v6-2", topic: "ipv6", type: "single",
      q: "Zu welchem Adresstyp gehört die IPv6-Adresse fe80::5a1f:2bff:fe44:9c01?",
      options: ["Link-Local", "Global Unicast", "Unique Local", "Multicast"],
      answer: 0,
      explain: "fe80::/10 ist der Link-Local-Bereich – gültig nur im eigenen Segment. Global Unicast beginnt mit 2 oder 3 (2000::/3), Unique Local mit fc/fd, Multicast mit ff." },
    { id: "q-v6-3", topic: "ipv6", type: "multi",
      q: "Welche Aussagen zu IPv6 sind richtig?",
      options: ["Eine IPv6-Adresse ist 128 Bit lang.", "IPv6 kennt keinen Broadcast.", "Das Neighbor Discovery Protocol ersetzt ARP.", "Die Abkürzung :: darf mehrfach in einer Adresse vorkommen.", "IPv6-Adressen werden dezimal mit Punkten geschrieben."],
      answer: [0, 1, 2],
      explain: "IPv6 nutzt 128 Bit, Multicast statt Broadcast und NDP statt ARP. :: darf nur einmal vorkommen, sonst wäre die Adresse mehrdeutig; die Schreibweise ist hexadezimal mit Doppelpunkten." },
    { id: "q-v6-4", topic: "ipv6", type: "input",
      q: "Aus wie vielen Bit besteht eine IPv6-Adresse?",
      answer: ["128", "128 Bit", "128Bit"],
      explain: "128 Bit = 8 Blöcke × 16 Bit. Zum Vergleich: IPv4 hat 32 Bit, eine MAC-Adresse 48 Bit." },
    { id: "q-v6-5", topic: "ipv6", type: "single",
      q: "Welche der folgenden IPv6-Adressen ist <strong>ungültig</strong>?",
      options: ["2001:db8::1::1", "2001:db8::1", "::1", "fe80::1"],
      answer: 0,
      explain: "In 2001:db8::1::1 kommt :: zweimal vor – man könnte nicht mehr bestimmen, wie viele Null-Blöcke an welcher Stelle fehlen. ::1 ist die Loopback-Adresse, die anderen sind korrekt gekürzt." },
    { id: "q-v6-6", topic: "ipv6", type: "tf",
      q: "Jede IPv6-fähige Netzwerkschnittstelle erzeugt automatisch eine Link-Local-Adresse.",
      answer: true,
      explain: "Richtig. Die Link-Local-Adresse (fe80::/10) entsteht automatisch, auch ohne Router oder DHCPv6. Über sie laufen z. B. Neighbor Discovery und Router Solicitations." },
    { id: "q-wl-1", topic: "wlan", type: "single",
      q: "Welcher IEEE-Standard verbirgt sich hinter der Bezeichnung „Wi-Fi 6“?",
      options: ["802.11ax", "802.11ac", "802.11n", "802.11be"],
      answer: 0,
      explain: "Wi-Fi 6 = 802.11ax (mit 6-GHz-Band als Wi-Fi 6E). 802.11ac ist Wi-Fi 5, 802.11n Wi-Fi 4 und 802.11be Wi-Fi 7." },
    { id: "q-wl-2", topic: "wlan", type: "single",
      q: "Welches Verfahren ersetzt bei WPA3-Personal den Pre-Shared-Key-Handshake von WPA2?",
      options: ["SAE (Simultaneous Authentication of Equals)", "TKIP", "WEP", "WPS"],
      answer: 0,
      explain: "SAE schützt vor Offline-Wörterbuchangriffen auf mitgeschnittene Handshakes und bietet Forward Secrecy. TKIP gehört zum alten WPA, WEP ist gebrochen, WPS ist ein (unsicheres) Einrichtungsverfahren und keine Verschlüsselung." },
    { id: "q-wl-3", topic: "wlan", type: "multi",
      q: "Welche Maßnahmen erhöhen die Sicherheit eines Firmen-WLANs wirksam?",
      options: ["SSID verstecken", "MAC-Adressfilter als einzige Zugangskontrolle", "WPA3 (bzw. WPA2/WPA3) mit langer, zufälliger Passphrase oder Enterprise-Anmeldung", "WPS deaktivieren", "Firmware der Access Points aktuell halten"],
      answer: [2,  3,  4],
      explain: "Starke Verschlüsselung, deaktiviertes WPS und aktuelle Firmware schließen echte Angriffswege. Eine versteckte SSID ist im Funkverkehr trotzdem sichtbar, und MAC-Adressen lassen sich leicht fälschen – beides ist kein wirksamer Schutz." },
    { id: "q-wl-4", topic: "wlan", type: "single",
      q: "In welchem Frequenzband arbeitet 802.11ac (Wi-Fi 5)?",
      options: ["nur 5 GHz", "nur 2,4 GHz", "2,4 GHz und 5 GHz", "6 GHz"],
      answer: 0,
      explain: "802.11ac ist ein reiner 5-GHz-Standard. Dualband-Router funken im 2,4-GHz-Band dann mit 802.11n. 6 GHz kam erst mit Wi-Fi 6E hinzu." },
    { id: "q-wl-5", topic: "wlan", type: "multi",
      q: "Welche Aussagen treffen auf das 5-GHz-Band im Vergleich zum 2,4-GHz-Band zu?",
      options: ["Es stehen mehr überlappungsfreie Kanäle zur Verfügung.", "Höhere Datenraten sind möglich.", "Die Reichweite ist geringer, Wände dämpfen stärker.", "Es wird von deutlich mehr Altgeräten unterstützt.", "Bluetooth und Mikrowellen stören dort besonders stark."],
      answer: [0, 1, 2],
      explain: "5 GHz bietet viele Kanäle und breite Kanalbündelung, dämpft aber stärker. Altgeräte (802.11b/g) sowie Bluetooth und Mikrowellen nutzen das 2,4-GHz-Band – dort sind Kompatibilität und Störungen typisch." },
    { id: "q-wl-6", topic: "wlan", type: "tf",
      q: "Bei WPA2- bzw. WPA3-Enterprise meldet sich jeder Nutzer einzeln über 802.1X an einem RADIUS-Server an.",
      answer: true,
      explain: "Richtig. Statt eines gemeinsamen Schlüssels gibt es individuelle Zugangsdaten oder Zertifikate. Verlässt jemand das Unternehmen, wird nur sein Konto gesperrt." },
    { id: "q-cs-1", topic: "cisco-switch", type: "single",
      q: "Mit welchem Befehl wechselst du auf einem Cisco-Switch vom User-EXEC- in den Privileged-EXEC-Modus?",
      options: ["<code>enable</code>", "<code>configure terminal</code>", "<code>login</code>", "<code>exit</code>"],
      answer: 0,
      explain: "<code>enable</code> führt von <code>Switch&gt;</code> zu <code>Switch#</code>. <code>configure terminal</code> geht erst danach in den globalen Konfigurationsmodus, <code>login</code> aktiviert die Passwortabfrage auf einer Line, <code>exit</code> geht eine Ebene zurück." },
    { id: "q-cs-2", topic: "cisco-switch", type: "single",
      q: "Mit welchem Befehl sicherst du die aktuelle Konfiguration dauerhaft, sodass sie einen Neustart übersteht?",
      options: ["<code>copy running-config startup-config</code>", "<code>copy startup-config running-config</code>", "<code>show running-config</code>", "<code>reload</code>"],
      answer: 0,
      explain: "Die running-config liegt im RAM; <code>copy running-config startup-config</code> schreibt sie in den NVRAM. Die umgekehrte Richtung würde die gespeicherte Konfiguration laden, <code>show</code> zeigt nur an und <code>reload</code> startet neu – ungespeicherte Änderungen gingen verloren." },
    { id: "q-cs-3", topic: "cisco-switch", type: "single",
      q: "In welchem Modus befindest du dich beim Prompt <code>SW1(config-if)#</code>?",
      options: ["Interface-Konfigurationsmodus", "Globaler Konfigurationsmodus", "Privileged-EXEC-Modus", "Line-Konfigurationsmodus"],
      answer: 0,
      explain: "„config-if“ steht für die Konfiguration eines Interfaces (Port oder VLAN-Interface). Global wäre <code>(config)#</code>, Privileged EXEC <code>#</code> ohne Klammer, Line <code>(config-line)#</code>." },
    { id: "q-cs-4", topic: "cisco-switch", type: "multi",
      q: "Welche Befehle gehören dazu, den Konsolenzugang eines Switches mit einem Passwort abzusichern?",
      options: ["<code>interface vlan 1</code>", "<code>line console 0</code>", "<code>password …</code>", "<code>login</code>", "<code>ip default-gateway …</code>"],
      answer: [1,  2,  3],
      explain: "In die Konsolenleitung wechseln, Passwort setzen und mit <code>login</code> die Abfrage aktivieren. Das Gateway und das VLAN-Interface betreffen die Fernverwaltung über das Netzwerk, nicht die Konsole." },
    { id: "q-cs-5", topic: "cisco-switch", type: "input",
      q: "<code>show ip interface brief</code> zeigt für Vlan1 „administratively down“. Welchen Befehl gibst du im Interface-Modus ein, um das Interface zu aktivieren?",
      answer: ["no shutdown", "no shut"],
      explain: "Interfaces werden mit <code>no shutdown</code> aktiviert; „administratively down“ bedeutet, dass sie per <code>shutdown</code> abgeschaltet sind – beim SVI VLAN 1 ist das der Auslieferungszustand." },
    { id: "q-cs-6", topic: "cisco-switch", type: "tf",
      q: "<code>enable password</code> speichert das Passwort als sicheren Hash in der Konfiguration.",
      answer: false,
      explain: "Falsch. <code>enable password</code> steht im Klartext in der Konfiguration (mit <code>service password-encryption</code> nur schwach verschleiert). Als Hash speichert <code>enable secret</code> – das sollte verwendet werden." },
    { id: "q-osi-7", topic: "osi-komponenten", type: "single",
      q: "Welche Schicht des TCP/IP-Modells entspricht den OSI-Schichten 1 und 2?",
      options: ["Netzzugangsschicht", "Internetschicht", "Transportschicht", "Anwendungsschicht"],
      answer: 0,
      explain: "Das TCP/IP-Modell fasst Bitübertragung und Sicherung zur Netzzugangsschicht zusammen. Die Internetschicht entspricht OSI 3, die Transportschicht OSI 4, die Anwendungsschicht OSI 5–7." },
    { id: "q-v4-9", topic: "ipv4-client", type: "single",
      q: "Welcher Befehl zeigt unter Windows, über welche Router (Hops) ein Paket zu einem Ziel gelangt?",
      options: ["<code>tracert</code>", "<code>ping</code>", "<code>arp -a</code>", "<code>ipconfig /all</code>"],
      answer: 0,
      explain: "<code>tracert</code> (Linux: <code>traceroute</code>) listet die Zwischenstationen mit Antwortzeiten auf. <code>ping</code> prüft nur die Erreichbarkeit des Ziels, <code>arp -a</code> zeigt den ARP-Cache, <code>ipconfig /all</code> die eigene Konfiguration." },
    { id: "q-sv-5", topic: "strukturierte-verkabelung", type: "tf",
      q: "Der Permanent Link umfasst die fest installierte Strecke vom Patchfeld bis zur Anschlussdose, jedoch ohne Patchkabel.",
      answer: true,
      explain: "Richtig. Der Channel schließt dagegen alle Patch- und Anschlusskabel bis zu den aktiven Geräten ein. Bei der Abnahme einer Neuinstallation wird meist der Permanent Link gemessen." },
    { id: "q-usv-6", topic: "usv", type: "input",
      q: "Eine USV-Batterie speichert 432 Wh, der Wechselrichter hat einen Wirkungsgrad von 0,9. Wie viele Minuten kann sie eine Last von 540 W theoretisch höchstens versorgen?",
      answer: ["43,2", "43,2 min", "43,2 Minuten", "43", "43 min", "43 Minuten", "ca. 43", "ca. 43 min"],
      explain: "t = 432 Wh × 0,9 ÷ 540 W = 0,72 h = 0,72 × 60 min = 43,2 min. In der Praxis ist die Laufzeit kürzer, weil Batterien nicht vollständig entladen werden und altern." },
    { id: "q-lwl-7", topic: "lwl", type: "single",
      q: "Welcher Steckverbinder wird an SFP- und SFP+-Transceivern von Switches am häufigsten eingesetzt?",
      options: ["LC-Duplex", "ST", "BNC", "RJ11"],
      answer: 0,
      explain: "Der kleine LC-Stecker (1,25-mm-Ferrule) passt zur geringen Baugröße der SFP-Module und wird als Duplex (Senden/Empfangen) gesteckt. ST ist ein älterer LWL-Bajonettstecker, BNC ein Koax-Stecker, RJ11 ein Telefonstecker." },
    { id: "q-lwl-8", topic: "lwl", type: "multi", exam: ["AP2"],
      q: "Nach dem Tausch eines SFP+-Moduls kommt auf einem Glasfaser-Uplink zwischen zwei Switches kein Link zustande. Welche Ursachen sind plausibel?",
      options: ["Ein Multimode-Modul wurde an eine Singlemodefaser angeschlossen.", "Sende- und Empfangsfaser sind vertauscht.", "Die Module auf den zwei Seiten der Strecke arbeiten mit unterschiedlichen Wellenlängen.", "Am Client fehlt das Standardgateway.", "Der DNS-Server des Switches ist nicht erreichbar."],
      answer: [0, 1, 2],
      explain: "Ein Link auf Schicht 1 kommt nur zustande, wenn Modultyp, Fasertyp und Wellenlänge zusammenpassen und TX auf RX trifft. Gateway und DNS betreffen Schicht 3 bzw. 7 – sie verhindern keinen physischen Link." },
    { id: "q-v6-7", topic: "ipv6", type: "input", exam: ["AP2"],
      q: "Wie viele /64-Subnetze lassen sich aus einem /48-Präfix bilden?",
      answer: ["65536", "65.536", "2^16", "2¹⁶"],
      explain: "Zwischen /48 und /64 liegen 16 Bit für die Subnetz-ID: 2¹⁶ = 65.536 Subnetze." },
    { id: "q-pw-7", topic: "leistung-energie", type: "multi",
      q: "Ein Switch mit 370 W PoE-Budget soll 12 Access Points nach 802.3at (je 30 W reserviert) versorgen. Welche Aussagen sind richtig?",
      options: ["Der Bedarf beträgt 360 W.", "Das Budget reicht mit 10 W Reserve.", "Ein 13. Access Point gleicher Klasse würde das Budget überschreiten.", "Jeder Access Point erhält am Endgerät garantiert 30 W."],
      answer: [0, 1, 2],
      explain: "12 × 30 W = 360 W ≤ 370 W, Reserve 10 W; 13 × 30 W = 390 W &gt; 370 W. Am Endgerät sind bei 802.3at nur 25,5 W garantiert, weil auf dem Kabel Verluste entstehen." },
    { id: "q-pw-8", topic: "leistung-energie", type: "input", exam: ["AP1"],
      q: "Eine IP-Kamera nimmt laut Datenblatt höchstens 11 W auf und wird per PoE mit 48 V versorgt. Wie groß ist der Strom in mA (auf ganze mA gerundet)?",
      answer: ["229", "229 mA", "229mA"],
      explain: "I = P ÷ U = 11 W ÷ 48 V ≈ 0,229 A = 229 mA. Wer U ÷ P rechnet oder vergisst, von A in mA umzurechnen (× 1000), kommt auf ein falsches Ergebnis." },
    { id: "q-pw-9", topic: "leistung-energie", type: "single", exam: ["AP1", "AP2"],
      q: "Ein Access Point benötigt am Gerät 22 W. Welche ist die <strong>kleinste</strong> PoE-Klasse, die ihn zuverlässig versorgt?",
      options: ["Klasse 4 (802.3at, PoE+)", "Klasse 3 (802.3af)", "Klasse 2 (802.3af)", "Klasse 8 (802.3bt)"],
      answer: 0,
      explain: "Klasse 4 garantiert am Endgerät 25,5 W ≥ 22 W. Klasse 3 liefert nur 12,95 W, Klasse 2 nur 6,49 W. Klasse 8 (71,3 W) würde zwar reichen, reserviert aber unnötig viel vom PoE-Budget." },
    { id: "q-lg-6", topic: "logik", type: "single",
      q: "Warum werden die Spalten eines KV-Diagramms in der Reihenfolge 00, 01, 11, 10 beschriftet?",
      options: ["Damit sich benachbarte Felder in genau einer Variablen unterscheiden.", "Damit die Dualzahlen von 0 bis 3 der Größe nach geordnet sind.", "Damit alle Einsen in der rechten Hälfte stehen.", "Weil sich sonst keine Wahrheitstabelle aufstellen ließe."],
      answer: 0,
      explain: "Die Gray-Code-Reihenfolge sorgt dafür, dass Nachbarfelder (auch linker und rechter Rand) sich nur in einer Variablen unterscheiden. Nur deshalb darf man benachbarte Einsen zusammenfassen und diese Variable streichen. Die Dualzahl-Reihenfolge wäre 00, 01, 10, 11 – dort unterscheiden sich 01 und 10 in zwei Variablen." },
    { id: "q-lg-7", topic: "logik", type: "input",
      q: "In einem KV-Diagramm mit drei Variablen fasst du vier benachbarte Einsen zu einem Block zusammen. Wie viele Variablen bleiben im zugehörigen Term übrig?",
      answer: ["1", "eine", "eins", "1 Variable", "eine Variable"],
      explain: "Ein Block mit 2ⁿ Feldern streicht n Variablen: 4 = 2² → 2 von 3 Variablen entfallen, 1 bleibt übrig (z. B. nur c)." },
    { id: "q-cu-7", topic: "kupferkabel", type: "single",
      q: "Was bedeutet die Angabe „LSZH“ im Datenblatt eines Netzwerkkabels?",
      options: ["halogenfreier, raucharmer Kabelmantel", "Schirmung aus Geflecht und Folie", "Kategorie für 40 Gbit/s", "Leiter aus Litze statt massivem Draht"],
      answer: 0,
      explain: "LSZH = Low Smoke Zero Halogen: Im Brandfall entsteht wenig Rauch und es werden keine ätzenden Halogengase frei. Die Schirmung steht in Angaben wie S/FTP, die Leistungsklasse in der Kategorie (Cat), die Leiterart in Angaben wie „solid“ oder „stranded“." },
    { id: "q-cu-8", topic: "kupferkabel", type: "tf",
      q: "Ein Kabel mit Leitern nach AWG 22 hat dünnere Adern als ein Kabel nach AWG 26.",
      answer: false,
      explain: "Falsch. Bei AWG gilt: kleinere Zahl = dickerer Leiter. AWG 22 ist dicker als AWG 26 und hat einen geringeren Widerstand – günstig für Verlegekabel und PoE." },
    { id: "q-v4-10", topic: "ipv4-client", type: "single", exam: ["AP1", "AP2"],
      q: "Das Netz 192.168.10.0/24 soll in 8 gleich große Subnetze aufgeteilt werden. Welche Präfixlänge haben die Subnetze?",
      options: ["/27", "/26", "/28", "/32"],
      answer: 0,
      explain: "8 Subnetze = 2³ → 3 Bit leihen → /24 + 3 = /27 mit je 2⁵ − 2 = 30 Hosts. /26 ergäbe nur 4 Subnetze, /28 schon 16 Subnetze; /32 ist eine einzelne Hostadresse." },
    { id: "q-v4-11", topic: "ipv4-client", type: "single", exam: ["AP1", "AP2"],
      q: "Welches Protokoll ermittelt in einem IPv4-Netz zu einer bekannten IP-Adresse die zugehörige MAC-Adresse?",
      options: ["ARP", "DNS", "DHCP", "ICMP"],
      answer: 0,
      explain: "ARP fragt per Broadcast „Wer hat diese IP?“ und erhält die MAC-Adresse als Antwort. DNS löst Namen in IP-Adressen auf, DHCP verteilt IP-Konfigurationen, ICMP transportiert Fehler- und Diagnosemeldungen (z. B. ping)." },
    { id: "q-v4-12", topic: "ipv4-client", type: "single",
      q: "Welcher DNS-Eintrag ordnet einem Namen eine IPv6-Adresse zu?",
      options: ["AAAA", "A", "MX", "PTR"],
      answer: 0,
      explain: "AAAA-Einträge enthalten IPv6-Adressen, A-Einträge IPv4-Adressen. MX nennt den Mailserver einer Domäne, PTR dient der Rückwärtsauflösung von einer IP-Adresse zum Namen." },
    { id: "q-nw-6", topic: "netzwerk-grundlagen", type: "multi", exam: ["AP1"],
      q: "Welche Voraussetzungen müssen für den Domänenbeitritt eines Windows-Clients erfüllt sein?",
      options: ["Der eingetragene DNS-Server kann die Domäne auflösen (meist der Domänencontroller).", "Auf dem Client läuft eine Edition wie Windows Pro oder Enterprise.", "Ein Konto mit dem Recht, Computer in die Domäne aufzunehmen, steht zur Verfügung.", "Der Client besitzt eine öffentliche IPv4-Adresse.", "Auf dem Client ist das WLAN-Modul deaktiviert."],
      answer: [0, 1, 2],
      explain: "Der Client muss den Domänencontroller per DNS finden, eine domänenfähige Edition haben (Home kann nicht beitreten) und ein berechtigtes Konto nutzen. Eine öffentliche Adresse ist nicht nötig – Domänen arbeiten mit privaten Adressen –, und WLAN spielt für den Beitritt keine Rolle." },
    { id: "q-nw-7", topic: "netzwerk-grundlagen", type: "tf",
      q: "Greift ein Benutzer über das Netz auf eine Windows-Freigabe zu, gilt die weniger restriktive von Freigabe- und NTFS-Berechtigung.",
      answer: false,
      explain: "Falsch. Freigabe- und NTFS-Berechtigungen werden beide geprüft – wirksam ist die restriktivere. Hat jemand auf der Freigabe „Lesen“ und im NTFS „Ändern“, darf er über das Netz nur lesen." },
    { id: "q-fz-1", topic: "fernzugriff", type: "single",
      q: "Welchen Port nutzt das Remote Desktop Protocol (RDP) standardmäßig?",
      options: ["3389", "22", "443", "445"],
      answer: 0,
      explain: "RDP arbeitet standardmäßig auf Port 3389 (TCP, zusätzlich UDP). Port 22 gehört zu SSH, 443 zu HTTPS und 445 zu SMB (Dateifreigaben)." },
    { id: "q-fz-2", topic: "fernzugriff", type: "multi",
      q: "Welche Maßnahmen sichern einen Remotedesktop-Zugang wirksam ab?",
      options: ["Zugriff nur über VPN oder ein Remotedesktop-Gateway", "Authentifizierung auf Netzwerkebene (NLA) aktivieren", "TCP 3389 am Internetrouter direkt auf den PC weiterleiten", "Multi-Faktor-Authentifizierung und Kontosperrung nach Fehlversuchen", "allen Domänenbenutzern die RDP-Anmeldung erlauben"],
      answer: [0, 1, 3],
      explain: "VPN/Gateway, NLA sowie MFA mit Kontosperrung verkleinern die Angriffsfläche. Eine Portweiterleitung macht den PC im Internet angreifbar (Brute Force), und eine RDP-Freigabe für alle widerspricht dem Prinzip der minimalen Rechte." },
    { id: "q-fz-3", topic: "fernzugriff", type: "single",
      q: "Welche VPN-Art verbindet dauerhaft das Netz einer Filiale mit dem Netz der Zentrale, ohne dass auf den Endgeräten eine VPN-Software nötig ist?",
      options: ["Site-to-Site-VPN", "Client-to-Site-VPN", "End-to-End-VPN", "Remotedesktop-Verbindung"],
      answer: 0,
      explain: "Beim Site-to-Site-VPN bauen Router oder Firewalls der Standorte den Tunnel auf; die Endgeräte merken nichts davon. Client-to-Site braucht einen VPN-Client auf jedem Gerät, End-to-End verbindet zwei einzelne Geräte, und RDP ist gar kein VPN." },
    { id: "q-fz-4", topic: "fernzugriff", type: "tf",
      q: "Beim Split Tunneling läuft der gesamte Internetverkehr des Homeoffice-Notebooks durch den VPN-Tunnel ins Firmennetz.",
      answer: false,
      explain: "Falsch. Das beschreibt den Full Tunnel. Beim Split Tunneling geht nur der Verkehr für das Firmennetz durch den Tunnel, alle anderen Verbindungen direkt über den Heimanschluss." },
    { id: "q-fz-5", topic: "fernzugriff", type: "single",
      q: "Welches VPN-Protokoll gilt als veraltet und unsicher und sollte nicht mehr eingesetzt werden?",
      options: ["PPTP", "IPsec mit IKEv2", "WireGuard", "OpenVPN"],
      answer: 0,
      explain: "PPTP hat bekannte kryptografische Schwächen. IPsec mit IKEv2, WireGuard und OpenVPN (TLS) gelten bei aktueller Konfiguration als sicher." },
    { id: "q-fz-6", topic: "fernzugriff", type: "multi",
      q: "Welche Schutzziele unterstützt ein korrekt eingerichtetes VPN unmittelbar?",
      options: ["Vertraulichkeit", "Integrität", "Authentizität", "Verfügbarkeit der Internetleitung"],
      answer: [0, 1, 2],
      explain: "Verschlüsselung schützt die Vertraulichkeit, Prüfwerte die Integrität, und die Anmeldung per Zertifikat oder MFA sichert die Authentizität. Die Verfügbarkeit der Leitung verbessert ein VPN nicht – fällt der Internetanschluss aus, fällt auch der Tunnel aus." },
    { id: "q-sd-7", topic: "signal-daempfung", type: "input",
      q: "Auf einer 100 m langen Leitung wird eine Signallaufzeit von 0,5 µs gemessen. Wie groß ist der Verkürzungsfaktor k (c₀ = 3 × 10⁸ m/s)? Runde auf zwei Nachkommastellen.",
      answer: ["0,67", "67 %", "67%"],
      explain: "v = l ÷ t = 100 m ÷ 0,5 × 10⁻⁶ s = 2 × 10⁸ m/s; k = v ÷ c₀ = 2 × 10⁸ ÷ 3 × 10⁸ ≈ 0,67. Das Signal ist also nur etwa zwei Drittel so schnell wie Licht im Vakuum." },
    { id: "q-usv-7", topic: "usv", type: "single", exam: ["AP1", "AP2"],
      q: "Welches Schutzziel sichert eine USV in erster Linie?",
      options: ["Verfügbarkeit", "Vertraulichkeit", "Authentizität", "Nichtabstreitbarkeit"],
      answer: 0,
      explain: "Die USV hält Systeme bei Stromausfall und Netzstörungen in Betrieb bzw. fährt sie geordnet herunter – das dient der Verfügbarkeit (und verhindert nebenbei Datenverlust). Mit Vertraulichkeit, Authentizität oder Nichtabstreitbarkeit hat sie nichts zu tun." },
  ],
  cards: [
    { topic: "elektro-grundgroessen", f: "Ohmsches Gesetz", b: "U = R × I → R = U ÷ I, I = U ÷ R (U in V, I in A, R in Ω)" },
    { topic: "elektro-grundgroessen", f: "Reihenschaltung: Gesamtwiderstand und Strom", b: "R_ges = R₁ + R₂ + …; überall derselbe Strom, die Spannung teilt sich auf." },
    { topic: "elektro-grundgroessen", f: "Parallelschaltung: Gesamtwiderstand und Spannung", b: "1 ÷ R_ges = 1 ÷ R₁ + 1 ÷ R₂; überall dieselbe Spannung, die Ströme addieren sich; R_ges ist kleiner als der kleinste Einzelwiderstand." },
    { topic: "elektro-grundgroessen", f: "SI-Präfixe m, µ, n", b: "Milli = 10⁻³, Mikro = 10⁻⁶, Nano = 10⁻⁹" },
    { topic: "elektro-grundgroessen", f: "k vs. Ki", b: "k (Kilo) = 10³ = 1000 (SI, dezimal); Ki (Kibi) = 2¹⁰ = 1024 (binär)" },
    { topic: "leistung-energie", f: "Elektrische Leistung", b: "P = U × I = I² × R = U² ÷ R, Einheit Watt (W)" },
    { topic: "leistung-energie", f: "Elektrische Arbeit / Energiekosten", b: "W = P × t (kWh); Kosten = kWh × Preis pro kWh" },
    { topic: "leistung-energie", f: "Wirkungsgrad η", b: "η = P_ab ÷ P_zu (immer kleiner als 1); P_zu = P_ab ÷ η; Verlust P_V = P_zu − P_ab" },
    { topic: "leistung-energie", f: "PoE-Standards (Port / Endgerät)", b: "802.3af 15,4 / 12,95 W · 802.3at 30 / 25,5 W · 802.3bt Typ 3 60 / 51 W · Typ 4 90 / 71,3 W" },
    { topic: "leistung-energie", f: "PoE-Budget", b: "Gesamtleistung, die ein Switch auf alle PoE-Ports verteilen kann – Summe der reservierten Portleistungen muss darunter liegen." },
    { topic: "logik", f: "UND / ODER / NICHT – Ausgang 1, wenn …", b: "UND: alle Eingänge 1 · ODER: mindestens ein Eingang 1 · NICHT: Eingang 0" },
    { topic: "logik", f: "XOR vs. XNOR", b: "XOR: 1 bei ungleichen Eingängen (Antivalenz) · XNOR: 1 bei gleichen Eingängen (Äquivalenz)" },
    { topic: "logik", f: "IEC-Schaltzeichen &amp;, ≥1, =1, 1", b: "&amp; = UND · ≥1 = ODER · =1 = XOR · 1 = NICHT (Kreis am Ausgang = Negation)" },
    { topic: "logik", f: "DNF bilden", b: "Alle Zeilen mit z = 1 als UND-Term (Eingang 0 negiert) aufschreiben und mit ODER verknüpfen." },
    { topic: "logik", f: "De Morgan", b: "¬(a ∧ b) = ¬a ∨ ¬b · ¬(a ∨ b) = ¬a ∧ ¬b" },
    { topic: "netzwerk-grundlagen", f: "PAN, LAN, MAN, WAN, GAN", b: "wenige Meter · Gebäude/Gelände · Stadt · Länder/Kontinente · weltweit" },
    { topic: "netzwerk-grundlagen", f: "Vollvermaschung – Anzahl Verbindungen", b: "n × (n − 1) ÷ 2, z. B. 5 Knoten → 10 Verbindungen" },
    { topic: "netzwerk-grundlagen", f: "Domäne vs. Arbeitsgruppe", b: "Domäne: zentrale Konten/Richtlinien auf dem Domänencontroller · Arbeitsgruppe: lokale Konten auf jedem PC" },
    { topic: "netzwerk-grundlagen", f: "Physischer vs. logischer Netzplan", b: "physisch: Geräte, Kabel, Dosen, Räume · logisch: IP-Netze, VLANs, Gateways, Datenflüsse" },
    { topic: "osi-komponenten", f: "OSI-Schichten 1–7", b: "Bitübertragung, Sicherung, Vermittlung, Transport, Sitzung, Darstellung, Anwendung" },
    { topic: "osi-komponenten", f: "Dateneinheiten Schicht 4 → 1", b: "Segment → Paket → Frame → Bit" },
    { topic: "osi-komponenten", f: "Hub vs. Switch", b: "Hub: Schicht 1, sendet an alle, eine Kollisionsdomäne · Switch: Schicht 2, lernt MACs, leitet gezielt weiter" },
    { topic: "osi-komponenten", f: "Router", b: "Schicht 3; verbindet IP-Netze per Routingtabelle, trennt Broadcast-Domänen, ist das Standardgateway." },
    { topic: "osi-komponenten", f: "MAC-Adresse", b: "48 Bit, 6 Byte hexadezimal; erste 24 Bit = Hersteller (OUI); Broadcast FF-FF-FF-FF-FF-FF" },
    { topic: "kupferkabel", f: "Cat 6A", b: "500 MHz, 10 Gbit/s über 100 m (10GBASE-T), Klasse E_A" },
    { topic: "kupferkabel", f: "S/FTP", b: "Gesamtschirm aus Geflecht (S) + Folienschirm je Adernpaar (FTP)" },
    { topic: "kupferkabel", f: "Max. Länge Twisted Pair", b: "100 m Channel = 90 m Installationskabel + 10 m Patchkabel" },
    { topic: "kupferkabel", f: "T568A vs. T568B", b: "grünes und oranges Paar vertauscht; Patchkabel A–A/B–B, Crossover A–B" },
    { topic: "kupferkabel", f: "Koax: Aufbau", b: "Innenleiter, Dielektrikum, Außenleiter/Schirm, Mantel; 50 Ω (Funk) oder 75 Ω (TV/Kabel-Internet)" },
    { topic: "lwl", f: "Totalreflexion im LWL", b: "Kern hat höhere Brechzahl als der Mantel; flach auftreffendes Licht wird vollständig in den Kern zurückgeworfen." },
    { topic: "lwl", f: "Singlemode vs. Multimode", b: "SM: ~9 µm Kern, ein Mode, km-Strecken, 1310/1550 nm · MM: 50 oder 62,5 µm, viele Moden, bis einige 100 m, 850 nm" },
    { topic: "lwl", f: "Modendispersion", b: "Unterschiedliche Lichtwege → unterschiedliche Laufzeiten → Impulsverbreiterung; begrenzt Datenrate × Länge." },
    { topic: "lwl", f: "OM3 / OM4 bei 10GBASE-SR", b: "OM3: 2000 MHz·km, 300 m · OM4: 4700 MHz·km, 400 m (Mantel türkis bzw. violett)" },
    { topic: "lwl", f: "Mängel an LWL-Verbindungen", b: "Kern- und Winkelversatz, Luftspalt, Schmutz/Kratzer, schlechter Faserbruch, unterschiedliche Kerndurchmesser" },
    { topic: "lwl", f: "Kein Link am Glasfaser-Uplink – typische Ursachen", b: "SM/MM-Modul passt nicht zur Faser, unterschiedliche Wellenlängen, TX/RX vertauscht, verschmutzte Stecker" },
    { topic: "leistung-energie", f: "Netzteil mit Reserve dimensionieren", b: "Nennleistung = Bedarf der Komponenten × 1,2 (20 % Reserve); Netzaufnahme = Ausgangsleistung ÷ η" },
    { topic: "signal-daempfung", f: "Signallaufzeit", b: "t = l ÷ v mit v = NVP × c₀ (c₀ ≈ 3 × 10⁸ m/s)" },
    { topic: "signal-daempfung", f: "Bandbreite-Länge-Produkt", b: "BLP = B × l (MHz·km) → B_max = BLP ÷ l" },
    { topic: "signal-daempfung", f: "Dämpfungsmaß", b: "a = 10 × lg(P₁ ÷ P₂) dB = 20 × lg(U₁ ÷ U₂) dB" },
    { topic: "signal-daempfung", f: "3 dB / 10 dB / 20 dB (Leistung)", b: "halbe Leistung / ein Zehntel / ein Hundertstel" },
    { topic: "signal-daempfung", f: "dBm", b: "Pegel bezogen auf 1 mW: 0 dBm = 1 mW, 10 dBm = 10 mW, 20 dBm = 100 mW, 30 dBm = 1 W" },
    { topic: "strukturierte-verkabelung", f: "Primär-, Sekundär-, Tertiärbereich", b: "SV↔GV (bis 1500 m, LWL) · GV↔EV (bis 500 m, LWL) · EV↔Dose (90 m + 10 m, Cu)" },
    { topic: "strukturierte-verkabelung", f: "Permanent Link vs. Channel", b: "Permanent Link: Patchfeld bis Dose ohne Patchkabel · Channel: gesamte Strecke inkl. Patchkabel" },
    { topic: "strukturierte-verkabelung", f: "1 HE", b: "1,75 Zoll = 44,45 mm (Höheneinheit im 19-Zoll-Schrank)" },
    { topic: "usv", f: "VFD / VI / VFI", b: "Offline (Standby) / Line-Interactive / Online-Doppelwandler – nach IEC 62040-3" },
    { topic: "usv", f: "VFI-SS-111", b: "netzunabhängig, sinusförmiger Ausgang in Netz- und Batteriebetrieb, keine Unterbrechung bei Umschaltung und Lastsprüngen" },
    { topic: "usv", f: "Scheinleistung vs. Wirkleistung", b: "S in VA, P in W; P = S × cos φ → beide Grenzwerte der USV einhalten" },
    { topic: "usv", f: "Bypass einer USV", b: "automatisch: Last bei Überlast/Fehler direkt ans Netz (ohne Schutz) · manuell: Wartung ohne Abschalten der Verbraucher" },
    { topic: "ipv4-client", f: "Private IPv4-Bereiche", b: "10.0.0.0/8 · 172.16.0.0/12 · 192.168.0.0/16" },
    { topic: "ipv4-client", f: "Hosts pro Subnetz", b: "2^(32 − Präfix) − 2, z. B. /24 → 254, /26 → 62, /27 → 30" },
    { topic: "ipv4-client", f: "APIPA", b: "169.254.0.0/16 – Selbstvergabe, wenn kein DHCP-Server antwortet" },
    { topic: "ipv4-client", f: "DHCP-Ablauf DORA", b: "Discover → Offer → Request → Acknowledge (UDP 67/68)" },
    { topic: "ipv4-client", f: "ping-Reihenfolge bei der Fehlersuche", b: "127.0.0.1 → eigene IP → Gateway → IP im Internet → Name (DNS)" },
    { topic: "ipv6", f: "IPv6 kürzen", b: "führende Nullen je Block weglassen; eine Folge von Null-Blöcken einmal durch :: ersetzen" },
    { topic: "ipv6", f: "fe80::/10 · fc00::/7 · ff00::/8 · 2000::/3", b: "Link-Local · Unique Local · Multicast · Global Unicast" },
    { topic: "ipv6", f: "SLAAC", b: "Client bildet seine Adresse selbst aus dem Präfix im Router Advertisement und einer eigenen Interface-ID." },
    { topic: "wlan", f: "Wi-Fi 4 / 5 / 6 / 7", b: "802.11n / 802.11ac / 802.11ax / 802.11be" },
    { topic: "wlan", f: "2,4 GHz vs. 5 GHz", b: "2,4: mehr Reichweite, 3 überlappungsfreie Kanäle, viele Störungen · 5: mehr Kanäle und Datenrate, weniger Reichweite" },
    { topic: "wlan", f: "WPA3-Personal vs. -Enterprise", b: "Personal: gemeinsame Passphrase mit SAE · Enterprise: Einzelanmeldung über 802.1X/RADIUS" },
    { topic: "cisco-switch", f: "IOS-Prompts > # (config)# (config-if)#", b: "User EXEC · Privileged EXEC · globale Konfiguration · Interface-Konfiguration" },
    { topic: "cisco-switch", f: "Management-IP eines Switches", b: "interface vlan 1 → ip address … → no shutdown; dazu ip default-gateway" },
    { topic: "cisco-switch", f: "running-config vs. startup-config", b: "running: aktive Konfiguration im RAM · startup: gespeichert im NVRAM; sichern mit copy running-config startup-config" },
    { topic: "cisco-switch", f: "enable secret vs. enable password", b: "secret: als Hash gespeichert (verwenden!) · password: Klartext; sind beide gesetzt, gilt nur das secret" },
    { topic: "logik", f: "KV-Diagramm – Regeln", b: "Nachbarfelder unterscheiden sich in genau einer Variablen (00, 01, 11, 10); Blöcke aus 1, 2, 4 oder 8 Einsen, möglichst groß; Ränder sind benachbart; nur gleichbleibende Variablen bleiben stehen." },
    { topic: "leistung-energie", f: "PoE-Klassen 1 bis 4 (am Switch-Port)", b: "Klasse 1: 4 W · Klasse 2: 7 W · Klasse 0 und 3: 15,4 W (802.3af) · Klasse 4: 30 W (802.3at)" },
    { topic: "kupferkabel", f: "AWG", b: "American Wire Gauge: kleinere Zahl = dickerer Leiter; Verlegekabel meist AWG 23/22 massiv, Patchkabel AWG 26–24 Litze" },
    { topic: "kupferkabel", f: "LSZH", b: "Low Smoke Zero Halogen: halogenfreier, raucharmer Kabelmantel – im Brandfall wenig Rauch, keine ätzenden Gase" },
    { topic: "ipv4-client", f: "ARP", b: "ermittelt per Broadcast zu einer IPv4-Adresse im eigenen Netz die MAC-Adresse; Cache anzeigen mit arp -a" },
    { topic: "ipv4-client", f: "Gleich große Subnetze bilden", b: "n geliehene Bits → 2ⁿ Subnetze; z. B. /24 in 4 Netze → /26 mit Blockgröße 64 und je 62 Hosts" },
    { topic: "netzwerk-grundlagen", f: "Domänenbeitritt – Voraussetzungen", b: "Netzverbindung, DNS löst die Domäne auf (meist DC), Windows Pro/Enterprise, berechtigtes Konto, synchrone Uhrzeit (Kerberos)" },
    { topic: "fernzugriff", f: "RDP absichern", b: "Port 3389 nie direkt ins Internet; nur über VPN/Gateway, NLA aktiv, MFA, nur Gruppe „Remotedesktopbenutzer“" },
    { topic: "fernzugriff", f: "Client-to-Site- vs. Site-to-Site-VPN", b: "Einzelgerät ↔ Firmennetz (VPN-Client nötig) · Standortnetz ↔ Standortnetz über Router/Firewalls (dauerhaft)" },
    { topic: "fernzugriff", f: "Full Tunnel vs. Split Tunneling", b: "Full: gesamter Verkehr durch den Tunnel (mehr Kontrolle) · Split: nur Firmenverkehr durch den Tunnel (entlastet die Firmenleitung)" },
    { topic: "fernzugriff", f: "VPN-Protokolle", b: "IPsec/IKEv2 (UDP 500/4500), OpenVPN (TLS, UDP 1194), WireGuard (UDP, oft 51820); PPTP ist unsicher" },
    { topic: "ipv6", f: "EUI-64 – Interface-ID aus der MAC", b: "MAC in der Mitte teilen, FFFE einfügen, 7. Bit des ersten Bytes umkehren (00 → 02)" },
    { topic: "ipv6", f: "Präfix /48 und /64", b: "/64 = Standard-Subnetz im LAN (64 Bit Interface-ID) · aus einem /48 entstehen 2¹⁶ = 65.536 /64-Subnetze" },
    { topic: "wlan", f: "WLAN wirksam absichern", b: "WPA3 (bzw. WPA2/WPA3), lange Passphrase oder Enterprise, WPS aus, Firmware aktuell, Gäste-WLAN getrennt – SSID verstecken und MAC-Filter sind kein Schutz" },
    { topic: "wlan", f: "Nettodatenrate WLAN (Faustregel)", b: "etwa die Hälfte der Bruttorate, aufgeteilt auf alle aktiven Clients (Halbduplex, CSMA/CA)" },
    { topic: "strukturierte-verkabelung", f: "Warum LWL zwischen Gebäuden?", b: "galvanische Trennung (Erdpotenziale, Blitz), große Reichweite, unempfindlich gegen elektromagnetische Störungen" }
  ],
  checklist: [
    { id: "c-el-1", topic: "elektro-grundgroessen", text: "Ich kann U, I, R, P und W mit Formelzeichen und Einheit nennen und das Ohmsche Gesetz nach jeder Größe umstellen.", exam: ["AP1"] },
    { id: "c-el-2", topic: "elektro-grundgroessen", text: "Ich kann Gesamtwiderstand, Ströme und Teilspannungen einer Reihen- und einer Parallelschaltung berechnen.", exam: ["AP1"] },
    { id: "c-el-3", topic: "elektro-grundgroessen", text: "Ich kann SI-Präfixe von Piko bis Tera sicher umrechnen und sie von Binärpräfixen (KiB, MiB) unterscheiden.", exam: ["AP1"] },
    { id: "c-pw-1", topic: "leistung-energie", text: "Ich kann die Leistungsaufnahme eines Geräts unter Berücksichtigung des Wirkungsgrads berechnen.", exam: ["AP1", "AP2"] },
    { id: "c-pw-2", topic: "leistung-energie", text: "Ich kann jährliche Energiekosten, Einsparungen und die Amortisationszeit energieeffizienter Geräte berechnen.", exam: ["AP1"] },
    { id: "c-pw-3", topic: "leistung-energie", text: "Ich kann PoE-Standards mit ihren Leistungen nennen und prüfen, ob das PoE-Budget eines Switches ausreicht.", exam: ["AP1", "AP2"] },
    { id: "c-lg-1", topic: "logik", text: "Ich kann für UND, ODER, NICHT, NAND, NOR, XOR und XNOR Wahrheitstabelle, Gleichung und IEC-Schaltzeichen angeben." },
    { id: "c-lg-2", topic: "logik", text: "Ich kann aus einer Wahrheitstabelle die DNF aufstellen und mit den Regeln der Schaltalgebra vereinfachen." },
    { id: "c-lg-3", topic: "logik", text: "Ich kann einen Funktionsplan lesen und zeichnen und eine Funktion nur mit NAND-Gattern aufbauen." },
    { id: "c-nw-1", topic: "netzwerk-grundlagen", text: "Ich kann Netzarten (PAN bis GAN) und Topologien unterscheiden und je Vor- und Nachteile nennen.", exam: ["AP1", "AP2"] },
    { id: "c-nw-2", topic: "netzwerk-grundlagen", text: "Ich kann Client-Server- und Peer-to-Peer-Netze bzw. Domäne und Arbeitsgruppe vergleichen und eine Empfehlung begründen.", exam: ["AP1"] },
    { id: "c-nw-3", topic: "netzwerk-grundlagen", text: "Ich kann einen physischen und einen logischen Netzwerkplan lesen, unterscheiden und ergänzen.", exam: ["AP1", "AP2"] },
    { id: "c-osi-1", topic: "osi-komponenten", text: "Ich kann die sieben OSI-Schichten mit Aufgabe, Dateneinheit und Beispielprotokoll nennen und dem TCP/IP-Modell zuordnen.", exam: ["AP1", "AP2"] },
    { id: "c-osi-2", topic: "osi-komponenten", text: "Ich kann Repeater, Hub, Bridge, Switch, Access Point und Router einer Schicht zuordnen und ihre Funktion erklären.", exam: ["AP1", "AP2"] },
    { id: "c-osi-3", topic: "osi-komponenten", text: "Ich kann beschreiben, wie ein Switch seine MAC-Adresstabelle aufbaut und Frames weiterleitet.", exam: ["AP2"] },
    { id: "c-cu-1", topic: "kupferkabel", text: "Ich kann Schirmungsbezeichnungen wie U/UTP, U/FTP und S/FTP erklären.", exam: ["AP1", "AP2"] },
    { id: "c-cu-2", topic: "kupferkabel", text: "Ich kann für eine geforderte Datenrate und Länge die passende Kabelkategorie (Cat 5e bis Cat 8) auswählen und begründen.", exam: ["AP1", "AP2"] },
    { id: "c-cu-3", topic: "kupferkabel", text: "Ich kann die Belegung nach T568A/B angeben und Patch- und Crossover-Kabel richtig einsetzen.", exam: ["AP1"] },
    { id: "c-lwl-1", topic: "lwl", text: "Ich kann Aufbau und Funktionsprinzip (Totalreflexion) eines Lichtwellenleiters erklären.", exam: ["AP1", "AP2"] },
    { id: "c-lwl-2", topic: "lwl", text: "Ich kann Singlemode, Multimode-Stufenindex und Multimode-Gradientenindex vergleichen und die Modendispersion erklären.", exam: ["AP1", "AP2"] },
    { id: "c-lwl-3", topic: "lwl", text: "Ich kann OM- und OS-Klassen sowie LWL-Stecker (LC, SC, E2000, MPO) zuordnen und eine Faser für eine Strecke auswählen.", exam: ["AP2"] },
    { id: "c-lwl-4", topic: "lwl", text: "Ich kann typische Mängel an Spleiß- und Steckverbindungen nennen und ihre Wirkung beschreiben." },
    { id: "c-sd-1", topic: "signal-daempfung", text: "Ich kann die Signallaufzeit mit Verkürzungsfaktor (NVP) berechnen und von der Übertragungsdauer einer Datei abgrenzen.", exam: ["AP1"] },
    { id: "c-sd-2", topic: "signal-daempfung", text: "Ich kann mit dem Bandbreite-Länge-Produkt die nutzbare Bandbreite oder die maximale Länge einer Faser berechnen." },
    { id: "c-sd-3", topic: "signal-daempfung", text: "Ich kann Dämpfungsfaktor, Übertragungsfaktor und Dämpfungsmaß in dB berechnen und ein Pegel- bzw. Dämpfungsbudget aufstellen.", exam: ["AP2"] },
    { id: "c-sv-1", topic: "strukturierte-verkabelung", text: "Ich kann Primär-, Sekundär- und Tertiärbereich mit Verteilern, Längengrenzen und typischen Medien beschreiben.", exam: ["AP1", "AP2"] },
    { id: "c-sv-2", topic: "strukturierte-verkabelung", text: "Ich kann Permanent Link und Channel unterscheiden und Messgrößen einer Abnahmemessung nennen.", exam: ["AP2"] },
    { id: "c-usv-1", topic: "usv", text: "Ich kann Zweck und Bauarten einer USV (VFD, VI, VFI) erklären und eine Klassifizierung wie VFI-SS-111 deuten.", exam: ["AP2"] },
    { id: "c-usv-2", topic: "usv", text: "Ich kann eine USV mit Scheinleistung, Wirkleistung, cos φ und Reserve dimensionieren und die Überbrückungszeit beurteilen.", exam: ["AP2"] },
    { id: "c-usv-3", topic: "usv", text: "Ich kann die Aufgabe des automatischen und des manuellen Bypasses einer USV beschreiben.", exam: ["AP2"] },
    { id: "c-v4-1", topic: "ipv4-client", text: "Ich kann zu einer IPv4-Adresse mit Präfix Maske, Netzadresse, Broadcastadresse, Hostbereich und Hostanzahl bestimmen.", exam: ["AP1", "AP2"] },
    { id: "c-v4-2", topic: "ipv4-client", text: "Ich kann einen Client mit IP-Adresse, Maske, Gateway und DNS konfigurieren und fehlerhafte Einstellungen erkennen.", exam: ["AP1"] },
    { id: "c-v4-3", topic: "ipv4-client", text: "Ich kann den DHCP-Ablauf (DORA) beschreiben und eine APIPA-Adresse als DHCP-Problem deuten.", exam: ["AP1", "AP2"] },
    { id: "c-v4-4", topic: "ipv4-client", text: "Ich kann mit ipconfig, ping, tracert, nslookup und arp systematisch Fehler eingrenzen und ein Testprotokoll anlegen.", exam: ["AP1", "AP2"] },
    { id: "c-v6-1", topic: "ipv6", text: "Ich kann IPv6-Adressen regelkonform kürzen und vollständig ausschreiben.", exam: ["AP1", "AP2"] },
    { id: "c-v6-2", topic: "ipv6", text: "Ich kann IPv6-Adresstypen am Präfix erkennen und SLAAC, NDP sowie Unterschiede zu IPv4 erklären.", exam: ["AP1", "AP2"] },
    { id: "c-wl-1", topic: "wlan", text: "Ich kann WLAN-Standards (802.11n/ac/ax/be) mit Frequenzband und Datenrate zuordnen und 2,4, 5 und 6 GHz vergleichen.", exam: ["AP1", "AP2"] },
    { id: "c-wl-2", topic: "wlan", text: "Ich kann WPA2 und WPA3 sowie Personal und Enterprise unterscheiden und wirksame Schutzmaßnahmen für ein WLAN empfehlen.", exam: ["AP1", "AP2"] },
    { id: "c-cs-1", topic: "cisco-switch", text: "Ich kann die IOS-Modi am Prompt erkennen und zwischen ihnen wechseln.", exam: ["AP2"] },
    { id: "c-cs-2", topic: "cisco-switch", text: "Ich kann einen Cisco-Switch mit hostname, enable secret, Leitungspasswörtern, Management-IP auf VLAN 1 und Gateway konfigurieren und die Konfiguration sichern.", exam: ["AP2"] },
    { id: "c-lg-4", topic: "logik", text: "Ich kann eine Funktion mit bis zu drei Variablen in ein KV-Diagramm eintragen und damit grafisch vereinfachen." },
    { id: "c-pw-4", topic: "leistung-energie", text: "Ich kann aus einem (englischen) Datenblatt PoE-Standard, PoE-Klasse und Leistungsaufnahme ablesen, prüfen, ob die Versorgung reicht, und den Strom in mA berechnen.", exam: ["AP1", "AP2"] },
    { id: "c-cu-4", topic: "kupferkabel", text: "Ich kann Ethernet-Standards (100BASE-TX bis 10GBASE-T, SR und LR) nach Datenrate, Medium und Reichweite einordnen und Verlege- und Patchkabel unterscheiden.", exam: ["AP1", "AP2"] },
    { id: "c-nw-4", topic: "netzwerk-grundlagen", text: "Ich kann die Voraussetzungen für den Domänenbeitritt eines Clients nennen und erklären, wie Freigabe- und NTFS-Berechtigungen zusammenwirken.", exam: ["AP1"] },
    { id: "c-v4-5", topic: "ipv4-client", text: "Ich kann ein IPv4-Netz in gleich große Subnetze aufteilen und für jedes Subnetz Netz-, Broadcast- und Hostadressen angeben.", exam: ["AP1", "AP2"] },
    { id: "c-v4-6", topic: "ipv4-client", text: "Ich kann die Aufgaben von ARP und DNS erklären und DNS-Eintragstypen (A, AAAA, MX, PTR, CNAME) zuordnen.", exam: ["AP1", "AP2"] },
    { id: "c-usv-4", topic: "usv", text: "Ich kann erklären, warum eine USV das Schutzziel Verfügbarkeit unterstützt und welche Geräte (Server, NAS, Switches, Firewall) an sie gehören.", exam: ["AP1", "AP2"] },
    { id: "c-fz-1", topic: "fernzugriff", text: "Ich kann einen Remotedesktop-Zugang einrichten (Edition, Aktivierung, NLA, Benutzergruppe, Firewall) und mindestens drei Maßnahmen zu seiner Absicherung nennen.", exam: ["AP1", "AP2"] },
    { id: "c-fz-2", topic: "fernzugriff", text: "Ich kann Client-to-Site- und Site-to-Site-VPN unterscheiden und erklären, wie ein VPN Vertraulichkeit, Integrität und Authentizität sichert.", exam: ["AP1", "AP2"] },
    { id: "c-v6-3", topic: "ipv6", text: "Ich kann aus einer MAC-Adresse die Interface-ID nach EUI-64 bilden und die Anzahl der /64-Subnetze aus einem Präfix berechnen.", exam: ["AP2"] },
    { id: "c-wl-3", topic: "wlan", text: "Ich kann begründen, warum ein Client nicht die Bruttodatenrate aus dem Datenblatt erreicht, und die Nettodatenrate je Client abschätzen.", exam: ["AP1", "AP2"] },
    { id: "c-sv-3", topic: "strukturierte-verkabelung", text: "Ich kann eine Kupferstrecke auf Normkonformität prüfen (90 m Installationskabel + 10 m Patchkabel) und bei Überschreitung Lösungen vorschlagen.", exam: ["AP1", "AP2"] },
    { id: "c-fz-3", topic: "fernzugriff", text: "Ich kann einen VPN-Client einrichten, die Verbindung mit ipconfig, ping und nslookup testen und Full Tunnel von Split Tunneling abgrenzen.", exam: ["AP1", "AP2"] }
  ],
  glossary: [
    { term: "Access Point (AP)", def: "Gerät, das WLAN-Clients drahtlos anbindet und mit dem kabelgebundenen LAN verbindet; arbeitet auf OSI-Schicht 2." },
    { term: "APIPA", def: "Automatic Private IP Addressing – Windows vergibt sich selbst eine Adresse aus 169.254.0.0/16, wenn kein DHCP-Server antwortet." },
    { term: "Bandbreite-Länge-Produkt (BLP)", def: "Kenngröße von Glasfasern in MHz·km; konstantes Produkt aus nutzbarer Bandbreite und Streckenlänge." },
    { term: "Bypass (USV)", def: "Umgehung der USV-Elektronik, die die Verbraucher direkt ans Netz schaltet – automatisch bei Überlast oder Fehler, manuell zur Wartung." },
    { term: "Channel", def: "Gesamte Übertragungsstrecke einer Verkabelung einschließlich Patch- und Anschlusskabel; bei Twisted Pair maximal 100 m." },
    { term: "cos φ (Leistungsfaktor)", def: "Verhältnis von Wirkleistung zu Scheinleistung (P = S × cos φ); wichtig für die Dimensionierung von USV und Netzteilen." },
    { term: "Dämpfungsmaß", def: "Logarithmisches Maß für die Signalabschwächung in dB: a = 10 × lg(P₁ ÷ P₂) bzw. 20 × lg(U₁ ÷ U₂)." },
    { term: "dBm", def: "Absoluter Leistungspegel bezogen auf 1 mW; 0 dBm = 1 mW, 30 dBm = 1 W." },
    { term: "DHCP", def: "Dynamic Host Configuration Protocol – verteilt IP-Adresse, Maske, Gateway und DNS-Server automatisch an Clients (Ablauf DORA)." },
    { term: "DNF (disjunktive Normalform)", def: "ODER-Verknüpfung aller UND-Terme (Minterme) der Zeilen einer Wahrheitstabelle, in denen der Ausgang 1 ist." },
    { term: "DNS", def: "Domain Name System – löst Namen wie www.ihk.de in IP-Adressen auf (Port 53)." },
    { term: "Domäne", def: "Zentral verwaltetes Netzwerk, in dem Benutzerkonten, Rechner und Richtlinien auf einem Domänencontroller (z. B. Active Directory) liegen." },
    { term: "Gradientenindexfaser", def: "Multimodefaser, deren Brechzahl von der Kernmitte nach außen allmählich abnimmt; verringert die Modendispersion." },
    { term: "Hub", def: "Veralteter Netzwerkverteiler auf OSI-Schicht 1, der alle Signale an alle Ports weitergibt (eine Kollisionsdomäne)." },
    { term: "IEC 62040-3", def: "Norm, die USV-Anlagen nach Netzabhängigkeit (VFD, VI, VFI), Kurvenform und dynamischem Verhalten klassifiziert." },
    { term: "Link-Local-Adresse", def: "IPv6-Adresse aus fe80::/10, die jede Schnittstelle automatisch erhält; nur im lokalen Segment gültig und nicht routbar." },
    { term: "MAC-Adresse", def: "48 Bit lange Hardwareadresse einer Netzwerkschnittstelle; dient der Adressierung auf OSI-Schicht 2." },
    { term: "Modendispersion", def: "Impulsverbreiterung in Multimodefasern durch unterschiedlich lange Lichtwege der Moden; begrenzt Datenrate und Reichweite." },
    { term: "NAND", def: "Nicht-UND-Verknüpfung: Ausgang 0 nur, wenn alle Eingänge 1 sind; universelles Gatter, aus dem sich jede Funktion bauen lässt." },
    { term: "NDP", def: "Neighbor Discovery Protocol – Teil von ICMPv6; ersetzt bei IPv6 ARP und findet Router und Nachbarn." },
    { term: "NVP (Verkürzungsfaktor)", def: "Nominal Velocity of Propagation – Verhältnis der Signalgeschwindigkeit im Kabel zur Lichtgeschwindigkeit im Vakuum, z. B. 0,69." },
    { term: "Ohmsches Gesetz", def: "Zusammenhang zwischen Spannung, Strom und Widerstand bei konstantem Widerstand: U = R × I." },
    { term: "OSI-Modell", def: "Referenzmodell mit sieben Schichten, das Netzwerkkommunikation in klar getrennte Aufgaben gliedert." },
    { term: "Patchfeld", def: "Anschlussfeld im Netzwerkschrank, an dem die fest verlegten Installationskabel enden und per Patchkabel auf aktive Geräte rangiert werden." },
    { term: "Permanent Link", def: "Fest installierter Teil einer Verkabelungsstrecke vom Patchfeld bis zur Anschlussdose, ohne Patchkabel; maximal 90 m." },
    { term: "PoE (Power over Ethernet)", def: "Stromversorgung von Endgeräten über das Netzwerkkabel nach IEEE 802.3af/at/bt." },
    { term: "Router", def: "Netzwerkgerät auf OSI-Schicht 3, das unterschiedliche IP-Netze verbindet und Pakete anhand einer Routingtabelle weiterleitet." },
    { term: "running-config", def: "Aktive Konfiguration eines Cisco-Geräts im RAM; geht ohne Speichern in die startup-config beim Neustart verloren." },
    { term: "SAE", def: "Simultaneous Authentication of Equals – Anmeldeverfahren von WPA3-Personal, das Offline-Wörterbuchangriffe erschwert." },
    { term: "Singlemodefaser", def: "Glasfaser mit etwa 9 µm Kern, in der sich nur ein Mode ausbreitet; für große Entfernungen ohne Modendispersion." },
    { term: "SLAAC", def: "Stateless Address Autoconfiguration – IPv6-Client bildet seine Adresse selbst aus dem Präfix des Router Advertisements." },
    { term: "Strukturierte Verkabelung", def: "Normierte, anwendungsneutrale und hierarchische Gebäudeverkabelung aus Primär-, Sekundär- und Tertiärbereich (EN 50173, ISO/IEC 11801)." },
    { term: "Subnetzmaske", def: "32-Bit-Wert, der den Netz- und den Hostanteil einer IPv4-Adresse festlegt, z. B. 255.255.255.0 = /24." },
    { term: "SVI (Switch Virtual Interface)", def: "Virtuelles VLAN-Interface eines Switches, z. B. interface vlan 1, das eine IP-Adresse zur Verwaltung erhält." },
    { term: "Switch", def: "Netzwerkverteiler auf OSI-Schicht 2, der MAC-Adressen lernt und Frames gezielt an den richtigen Port weiterleitet." },
    { term: "Totalreflexion", def: "Vollständige Reflexion von Licht an der Grenze zu einem optisch dünneren Medium, wenn der Grenzwinkel überschritten wird; Grundprinzip des LWL." },
    { term: "USV", def: "Unterbrechungsfreie Stromversorgung – überbrückt Netzausfälle mit Batterien und filtert Netzstörungen." },
    { term: "Wirkungsgrad η", def: "Verhältnis von abgegebener zu zugeführter Leistung (η = P_ab ÷ P_zu); bei realen Geräten immer kleiner als 1." },
    { term: "WPA3", def: "Aktueller WLAN-Sicherheitsstandard mit SAE-Anmeldung, geschützten Management-Frames und optionalem 192-Bit-Enterprise-Modus." },
    { term: "XOR (Antivalenz)", def: "Exklusiv-ODER: Ausgang 1, wenn genau einer der beiden Eingänge 1 ist, also wenn die Eingänge ungleich sind." },
    { term: "ARP", def: "Address Resolution Protocol – ermittelt per Broadcast zu einer IPv4-Adresse im lokalen Netz die zugehörige MAC-Adresse." },
    { term: "AWG (American Wire Gauge)", def: "Maß für den Leiterquerschnitt von Kabeln; je kleiner die Zahl, desto dicker der Leiter." },
    { term: "Energy Efficient Ethernet", def: "Stromsparverfahren nach IEEE 802.3az, das Ethernet-Ports in Pausen ohne Datenverkehr in einen Ruhezustand versetzt." },
    { term: "KV-Diagramm", def: "Karnaugh-Veitch-Diagramm – grafische Form der Wahrheitstabelle, in der benachbarte Einsen zu Blöcken zusammengefasst werden, um eine Schaltfunktion zu vereinfachen." },
    { term: "LSZH", def: "Low Smoke Zero Halogen – halogenfreier, raucharmer Kabelmantel, der im Brandfall keine ätzenden Gase freisetzt." },
    { term: "NLA (Authentifizierung auf Netzwerkebene)", def: "Sicherheitsfunktion von Remotedesktop, bei der sich der Benutzer anmelden muss, bevor eine Sitzung auf dem Zielrechner aufgebaut wird." },
    { term: "RDP", def: "Remote Desktop Protocol – Microsoft-Protokoll zur Fernsteuerung eines Windows-Rechners, standardmäßig über Port 3389." },
    { term: "Split Tunneling", def: "VPN-Betriebsart, bei der nur der Datenverkehr ins Firmennetz durch den Tunnel läuft und der übrige Verkehr direkt ins Internet geht." },
    { term: "VPN", def: "Virtual Private Network – verschlüsselter Tunnel über ein unsicheres Netz, der Vertraulichkeit, Integrität und Authentizität der Übertragung sichert." }
  ],
  links: [
    { title: "Microsoft Learn: ipconfig", url: "https://learn.microsoft.com/de-de/windows-server/administration/windows-commands/ipconfig", note: "Alle Parameter von ipconfig (/all, /release, /renew, /flushdns) mit Beispielen" },
    { title: "Microsoft Learn: ping", url: "https://learn.microsoft.com/de-de/windows-server/administration/windows-commands/ping", note: "Syntax und Optionen des ping-Befehls unter Windows" },
    { title: "Microsoft Learn: nslookup", url: "https://learn.microsoft.com/de-de/windows-server/administration/windows-commands/nslookup", note: "DNS-Abfragen auf der Kommandozeile" },
    { title: "Microsoft Learn: tracert", url: "https://learn.microsoft.com/de-de/windows-server/administration/windows-commands/tracert", note: "Weg eines Pakets über die Router verfolgen" },
    { title: "IEEE 802.3 Ethernet Working Group", url: "https://www.ieee802.org/3/", note: "Normungsgruppe für Ethernet und PoE (englisch)" },
    { title: "Cisco Packet Tracer (Networking Academy)", url: "https://www.netacad.com/cisco-packet-tracer", note: "Kostenloser Netzwerksimulator zum Üben der Switch-Konfiguration (Anmeldung erforderlich)" },
    { title: "RFC 5952 – Textdarstellung von IPv6-Adressen", url: "https://www.rfc-editor.org/rfc/rfc5952", note: "Offizielle Regeln zum Kürzen von IPv6-Adressen (englisch)" },
    { title: "IEEE 802.11 Working Group", url: "https://www.ieee802.org/11/", note: "Normungsgruppe der WLAN-Standards – Übersicht über laufende und abgeschlossene Projekte (englisch)" },
    { title: "BSI – Bundesamt für Sicherheit in der Informationstechnik", url: "https://www.bsi.bund.de", note: "Empfehlungen zur sicheren Konfiguration von Router, WLAN und Netzwerk (über die Suche „WLAN“)" },
    { title: "Wikipedia: Lichtwellenleiter", url: "https://de.wikipedia.org/wiki/Lichtwellenleiter", note: "Ergänzend: Aufbau, Fasertypen, Steckverbinder" },
    { title: "Wikipedia: Unterbrechungsfreie Stromversorgung", url: "https://de.wikipedia.org/wiki/Unterbrechungsfreie_Stromversorgung", note: "Ergänzend: Bauarten und Klassifizierung von USV-Anlagen" }
  ]
});
