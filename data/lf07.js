/* LF 7 – Cyber-physische Systeme ergänzen */
LEARN.module({
  id: "lf07",
  type: "lf",
  nr: 7,
  title: "Cyber-physische Systeme ergänzen",
  year: 2,
  hours: 80,
  exam: ["AP1", "AP2"],
  summary: "Du lernst, wie Sensoren, Aktoren, Mikrocontroller und Netzwerke die physische Welt mit der IT verbinden: vom Regelkreis über A/D-Wandlung, Bussysteme und IoT-Funk bis zu MQTT, Energiebedarf, IoT-Sicherheit und der Dokumentation eines eigenen Arduino-Projekts.",
  goals: [
    "Ein cyber-physisches System (CPS) anhand eines Kundenauftrags analysieren und Sensoren, Aktoren, Steuerung und Kommunikation benennen",
    "Steuerkette und Regelkreis unterscheiden und die Größen eines Regelkreises (Sollwert, Istwert, Regeldifferenz, Stellgröße, Störgröße) zuordnen",
    "Energie-, Stoff- und Informationsflüsse eines CPS erfassen und in einem Blockschaltbild darstellen",
    "Mikrocontroller, Single Board Computer, System-on-Chip und Embedded System vergleichen und für einen Einsatzzweck begründet auswählen",
    "Einen Arduino-Sketch mit setup()/loop(), digitalen und analogen Ein-/Ausgängen, PWM und seriellem Monitor lesen, ergänzen und Fehler finden sowie die Schaltung nach Schaltplan auf dem Steckbrett aufbauen",
    "A/D-Wandlung berechnen (Auflösung, Quantisierungsstufen, Abtastrate, Datenmenge) und PWM-Werte in Tastgrad und Mittelwertspannung umrechnen",
    "Schnittstellen (GPIO, UART, I²C, SPI, 1-Wire, CAN) und IoT-Funktechniken (WLAN, BLE, Zigbee, Z-Wave, LoRaWAN, NB-IoT) nach Kriterien auswählen",
    "MQTT (Broker, Topics, Wildcards, QoS), HTTP/REST und CoAP erklären sowie Edge, Fog, Cloud und digitalen Zwilling einordnen",
    "Energiebedarf, Akkulaufzeit, Vorwiderstände und Spannungsteiler berechnen und Messwerte in einem Prüfprotokoll festhalten",
    "Betriebs- und Datensicherheit eines IoT-Systems bewerten und Maßnahmen (Passwörter, Updates, Segmentierung, Verschlüsselung, DSGVO) ableiten"
  ],
  school: {
    hinweise: "In der AIFS51 wurde LF7 in Einheiten aufgebaut: Einstieg über fünf CPS-Fallbeispiele (Smart-Home-Heizung, Fertigungsstraße, autonomer Notbremsassistent, Fitness-Tracker, Smart Farming) mit Gruppenpräsentation, danach Hardware-Grundlagen im digitalen Gallery Walk (Mikrocontroller, SBC, SoC, Embedded System), Energie-, Stoff- und Informationsflüsse im Blockschaltbild und Praxis mit dem Arduino UNO R3 (LED-Fade per PWM, PIR-Bewegungsmelder HC-SR501). Abschluss ist ein eigenes CPS-Projekt mit Projektdokumentation (10 Gliederungspunkte) und Präsentation mit Live-Demo. KI-Werkzeuge sind als Hilfsmittel erlaubt – jedes Gruppenmitglied muss Code und Entscheidungen selbst erklären können.",
    themen: [
      "CPS analysieren: Sensoren, Aktoren, Schnittstelle physische Welt/IT, Kommunikationswege",
      "Hardware-Grundlagen: Mikrocontroller, Single Board Computer, System-on-Chip, Embedded System",
      "Energie-, Stoff- und Informationsflüsse (Linienkonvention im Blockschaltbild)",
      "Arduino UNO R3: LED dimmen mit PWM (analogWrite), zweite LED gegenläufig, Bewegungsmelder HC-SR501",
      "Schaltplan und Steckbrett: LED mit 220-Ω-Vorwiderstand, Anode/Kathode, Pin-Zuordnungen",
      "Projekt: Projektdokumentation und Präsentation mit Live-Demonstration"
    ]
  },
  topics: [
    {
      id: "cps-grundlagen",
      title: "Cyber-physische Systeme: Begriff, Aufbau, Beispiele",
      exam: ["AP2"],
      summary: "Was ein CPS ausmacht, wie es sich von IoT, Embedded System und Industrie 4.0 abgrenzt und wie du ein CPS systematisch analysierst.",
      html: `
        <p>Ein <strong>cyber-physisches System (CPS)</strong> koppelt informationsverarbeitende Komponenten (<em>cyber</em>: Software, Mikrocontroller, Netzwerk) eng mit einem <em>physischen</em> Prozess. Sensoren erfassen Größen der realen Welt, eine Recheneinheit wertet sie aus und entscheidet, Aktoren greifen wieder in die reale Welt ein. Meist sind die Komponenten zusätzlich vernetzt – untereinander, mit anderen Systemen oder mit der Cloud.</p>
        <h5>Typische Merkmale</h5>
        <ul>
          <li><strong>Sensorik und Aktorik:</strong> Messen und Eingreifen in physikalische Vorgänge (Temperatur, Bewegung, Kraft, Durchfluss …).</li>
          <li><strong>Eingebettete Datenverarbeitung:</strong> Die Rechentechnik ist Teil des Geräts oder der Anlage.</li>
          <li><strong>Vernetzung:</strong> Datenaustausch über Bus, Funk oder IP-Netz.</li>
          <li><strong>Rückkopplung:</strong> Die Wirkung des Aktors wird erneut gemessen (Regelkreis).</li>
          <li><strong>Echtzeitanforderungen:</strong> Reaktion innerhalb fester Zeitgrenzen (z. B. Notbremsung).</li>
          <li><strong>Autonomie und Anpassungsfähigkeit:</strong> Entscheidungen ohne Eingriff eines Menschen, teils mit externen Daten (Wetterprognose).</li>
        </ul>
        <h5>Aufbau nach dem EVA-Prinzip</h5>
        <pre class="ascii">
 physische Welt          IT-System                     physische Welt
 ──────────────    ┌─────────────────────┐            ──────────────
 Temperatur  ──►  SENSOR ──► VERARBEITUNG ──► AKTOR ──►  Ventil öffnet
 (Messgröße)      (Eingabe)  (Steuerung/    (Ausgabe)   Wärme fließt
                              Regelung)
        ▲                        │ Kommunikation (WLAN, Bus, MQTT)
        └──── Rückwirkung ───────┴──► Cloud / App / MES
        </pre>
        <p>Die <strong>Schnittstelle zwischen physischer Welt und IT</strong> liegt bei Sensoren und Aktoren bzw. an den Ein- und Ausgängen der Steuerung: Der Sensor wandelt eine physikalische Größe in ein elektrisches (und nach A/D-Wandlung digitales) Signal, der Aktor wandelt ein Steuersignal zurück in Bewegung, Wärme, Licht oder Kraft.</p>
        <h5>Abgrenzung verwandter Begriffe</h5>
        <table><thead><tr><th>Begriff</th><th>Schwerpunkt</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td>Embedded System</td><td>In ein Gerät fest eingebauter Rechner für eine Spezialaufgabe, nicht zwingend vernetzt</td><td>Waschmaschinensteuerung</td></tr>
          <tr><td>CPS</td><td>Enge Kopplung von Rechnen und physischem Prozess, meist mit Rückkopplung und Vernetzung</td><td>Notbremsassistent</td></tr>
          <tr><td>IoT (Internet of Things)</td><td>Vernetzung von Alltagsgegenständen über Internet-Protokolle, Daten oft in der Cloud</td><td>Smarte Steckdose mit App</td></tr>
          <tr><td>Industrie 4.0 / IIoT</td><td>CPS in der Produktion: vernetzte Maschinen, Werkstücke und IT (MES, ERP)</td><td>Fertigungsstraße mit Feldbus und MES</td></tr>
        </tbody></table>
        <h5>Die fünf Unterrichtsbeispiele im Überblick</h5>
        <table><thead><tr><th>CPS</th><th>Sensor (Größe)</th><th>Verarbeitung</th><th>Aktor (Wirkung)</th><th>Kommunikation</th></tr></thead><tbody>
          <tr><td>Smart-Home-Heizung</td><td>Temperatursensor (°C), Fensterkontakt (offen/zu)</td><td>Mikrocontroller im Thermostat</td><td>Stellmotor am Heizkörperventil (Durchfluss)</td><td>WLAN zur Cloud-App</td></tr>
          <tr><td>Fertigungsstraße</td><td>Lichtschranke (Licht → Werkstück da), Kraftsensor (N)</td><td>SPS</td><td>Förderbandmotor, Roboterarm mit Greifer</td><td>Feldbus/Industrial Ethernet zum MES</td></tr>
          <tr><td>Notbremsassistent</td><td>Radar (Abstand, Relativgeschwindigkeit), Kamera</td><td>Steuergerät in Echtzeit</td><td>Bremsaktorik</td><td>Fahrzeugbus (z. B. CAN)</td></tr>
          <tr><td>Fitness-Tracker</td><td>Optischer Pulssensor, Beschleunigungssensor</td><td>Prozessor (SoC) im Armband</td><td>Vibrationsmotor, Display</td><td>Bluetooth LE zum Smartphone</td></tr>
          <tr><td>Smart Farming</td><td>Bodenfeuchtesensor (Wassergehalt), Wetterdaten aus dem Internet</td><td>Zentraler Controller mit Schwellenwert</td><td>Magnetventil der Bewässerung</td><td>LoRaWAN → Gateway → IP-Netz</td></tr>
        </tbody></table>
        <h5>Industrie 4.0, digitaler Zwilling, Predictive Maintenance</h5>
        <p>In der Produktion ordnet man Systeme in Ebenen: <strong>Feld</strong> (Sensoren, Aktoren) → <strong>Steuerung</strong> (SPS) → <strong>Prozessleitung</strong> (SCADA) → <strong>Betriebsleitung</strong> (MES) → <strong>Unternehmen</strong> (ERP). Industrie 4.0 löst diese Pyramide auf: Geräte liefern Daten direkt (OPC UA, MQTT) an höhere Ebenen.</p>
        <p>Ein <strong>digitaler Zwilling</strong> ist ein virtuelles Abbild einer realen Anlage, das über Sensordaten laufend synchronisiert wird – zum Beobachten, Simulieren und Testen von Änderungen. Unterschied nach dem Datenfluss: <em>digitales Modell</em> (beide Richtungen manuell), <em>digitaler Schatten</em> (real → digital automatisch), <em>digitaler Zwilling</em> (beide Richtungen automatisch). Darauf baut <strong>Predictive Maintenance</strong> auf: Statt nach festem Intervall (präventiv) oder erst nach dem Ausfall (reaktiv) wird gewartet, wenn Trends und Schwellwerte (Schwingung, Temperatur, Stromaufnahme) einen baldigen Ausfall ankündigen.</p>
        <div class="callout merke"><strong>Merke:</strong> Ein CPS <em>misst – entscheidet – handelt</em>. Erst wenn ein IT-System über Aktoren tatsächlich auf die physische Welt einwirkt und deren Zustand über Sensoren wieder wahrnimmt, ist es cyber-physisch.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Der Mikrocontroller selbst ist <em>nicht</em> die Schnittstelle zur physischen Welt – er verarbeitet nur Signale. Die Schnittstelle bilden Sensoren (Eingabe) und Aktoren (Ausgabe). Außerdem gilt: Nicht jedes IoT-Gerät hat einen Aktor, und nicht jedes Embedded System ist vernetzt.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Ein Szenario beschreibt eine Anlage (Gewächshaus, Kühlhaus, Zutrittskontrolle). Du sollst Sensoren und Aktoren <em>nennen</em>, den Datenfluss <em>beschreiben</em> oder als Blockschaltbild <em>skizzieren</em> und <em>erläutern</em>, warum es sich um ein CPS handelt. Nenne immer die physikalische Größe mit, z. B. „Kraftsensor misst die Anpresskraft in Newton“.</div>
      `
    },
    {
      id: "steuerung-regelung",
      title: "Steuerkette und Regelkreis",
      exam: ["AP2"],
      summary: "Offener und geschlossener Wirkungsablauf, Größen des Regelkreises und der Zweipunktregler mit Hysterese.",
      html: `
        <p>Jedes CPS beeinflusst einen physischen Prozess. Entscheidend ist, ob das Ergebnis dieser Beeinflussung zurückgemeldet wird. Danach unterscheidet man <strong>Steuerung</strong> und <strong>Regelung</strong>.</p>
        <h5>Steuerung – offene Steuerkette</h5>
        <p>Bei einer Steuerung beeinflusst eine Eingangsgröße die Ausgangsgröße nach einer festen Vorschrift. Es gibt <strong>keine Rückführung</strong>: Ob das Ziel erreicht wurde, prüft die Steuerung nicht. Störungen werden nicht ausgeglichen.</p>
        <pre class="ascii">
 Eingabe ──► Steuerglied ──► Stellglied ──► Steuerstrecke ──► Ausgabe
 (Taster)    (Mikrocontroller) (Relais)       (Lampe)          (Licht an)
        </pre>
        <p>Beispiele: Treppenhauslicht mit Zeitschalter, Bewässerung per Zeitschaltuhr, Bewegungsmelder schaltet Licht für 30 s ein, Ampel mit festem Zeitplan.</p>
        <h5>Regelung – geschlossener Regelkreis</h5>
        <p>Bei einer Regelung wird die zu beeinflussende Größe (<strong>Regelgröße</strong>) fortlaufend gemessen, mit dem <strong>Sollwert</strong> verglichen und bei einer Abweichung nachgestellt. Durch diese <strong>Rückführung</strong> werden auch Störungen ausgeglichen.</p>
        <pre class="ascii">
          Störgröße z (offenes Fenster)
                         │
 w ──►(−)── e ──► REGLER ── y ──► STELLGLIED ──► REGELSTRECKE ──┬──► x
 Soll  ▲                        (Ventilmotor)    (Raum)          │   Ist
       └────────────── MESSGLIED (Temperatursensor) ◄────────────┘
        </pre>
        <table><thead><tr><th>Größe / Glied</th><th>Zeichen</th><th>Bedeutung</th><th>Heizungsbeispiel</th></tr></thead><tbody>
          <tr><td>Führungsgröße (Sollwert)</td><td>w</td><td>Gewünschter Wert</td><td>21 °C aus der App</td></tr>
          <tr><td>Regelgröße (Istwert)</td><td>x</td><td>Gemessener, zu regelnder Wert</td><td>Raumtemperatur 19,6 °C</td></tr>
          <tr><td>Regeldifferenz</td><td>e = w − x</td><td>Abweichung, auf die der Regler reagiert</td><td>21 − 19,6 = 1,4 K</td></tr>
          <tr><td>Stellgröße</td><td>y</td><td>Ausgang des Reglers an das Stellglied</td><td>Ventilstellung 0–100 %</td></tr>
          <tr><td>Störgröße</td><td>z</td><td>Unerwünschter Einfluss von außen</td><td>Offenes Fenster, Sonne</td></tr>
          <tr><td>Regelstrecke</td><td>–</td><td>Der Teil der Anlage, in dem geregelt wird</td><td>Heizkörper und Raum</td></tr>
          <tr><td>Messglied</td><td>–</td><td>Sensor, der x erfasst</td><td>Temperatursensor</td></tr>
        </tbody></table>
        <h5>Vergleich</h5>
        <table><thead><tr><th>Kriterium</th><th>Steuerung</th><th>Regelung</th></tr></thead><tbody>
          <tr><td>Wirkungsablauf</td><td>offen (Kette)</td><td>geschlossen (Kreis)</td></tr>
          <tr><td>Rückführung der Ausgangsgröße</td><td>nein</td><td>ja, über Messglied</td></tr>
          <tr><td>Reaktion auf Störungen</td><td>nur, wenn die Störung vorher bekannt ist</td><td>gleicht auch unbekannte Störungen aus</td></tr>
          <tr><td>Aufwand</td><td>gering, günstig</td><td>höher (Sensor, Regler, Stabilität)</td></tr>
        </tbody></table>
        <h5>Zweipunktregler mit Hysterese</h5>
        <p>Der einfachste Regler kennt nur zwei Zustände: EIN und AUS. Damit der Aktor bei Werten nahe am Sollwert nicht ständig schaltet (Relais- und Ventilverschleiß), nutzt man eine <strong>Hysterese</strong> – eine Schaltlücke zwischen Ein- und Ausschaltpunkt.</p>
        <div class="callout beispiel"><strong>Beispiel:</strong> Sollwert 21 °C, Hysterese ±0,5 K.<br>Einschalten, wenn x &lt; 21 − 0,5 = <strong>20,5 °C</strong>; ausschalten, wenn x &gt; 21 + 0,5 = <strong>21,5 °C</strong>. Zwischen 20,5 und 21,5 °C bleibt der letzte Zustand erhalten. Die Temperatur pendelt dadurch in einem Band von 1 K um den Sollwert.</div>
        <pre><code>const float SOLL = 21.0;   // Führungsgröße w in °C
const float HYST = 0.5;    // halbe Schaltlücke in K
bool heizen = false;

void loop() {
  float ist = leseTemperatur();            // Regelgröße x
  if (ist &lt; SOLL - HYST) heizen = true;    // unter 20,5 °C: EIN
  if (ist &gt; SOLL + HYST) heizen = false;   // über 21,5 °C: AUS
  digitalWrite(VENTIL_PIN, heizen ? HIGH : LOW);  // Stellgröße y
  delay(1000);                             // Abfragerhythmus 1 s
}</code></pre>
        <p>Stetige Regler stellen die Stellgröße dagegen stufenlos: Der <strong>P-Regler</strong> reagiert proportional zur Regeldifferenz (schnell, aber mit bleibender Abweichung), der <strong>PI-Regler</strong> ergänzt einen Integralanteil (keine bleibende Abweichung) und der <strong>PID-Regler</strong> zusätzlich einen Differentialanteil (reagiert auf die Änderungsgeschwindigkeit).</p>
        <div class="callout merke"><strong>Merke:</strong> Regelung = messen, vergleichen, stellen – immer wieder. Fehlt der Vergleich mit dem gemessenen Istwert, ist es eine Steuerung, auch wenn ein Sensor beteiligt ist (ein Bewegungsmelder, der Licht einschaltet, steuert nur).</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Die Regeldifferenz ist <strong>e = w − x</strong> (Soll minus Ist), nicht umgekehrt. Und: Ein Sensor allein macht noch keinen Regelkreis – er muss die <em>beeinflusste</em> Größe messen. Der Fensterkontakt der Heizung misst eine Störgröße und greift steuernd ein.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Entscheiden Sie begründet, ob eine Steuerung oder Regelung vorliegt“, „Ordnen Sie die Begriffe Führungs-, Regel-, Stell- und Störgröße dem Szenario zu“ oder „Ergänzen Sie den Pseudocode eines Zweipunktreglers“. Begründe immer mit der vorhandenen oder fehlenden Rückführung.</div>
      `
    },
    {
      id: "fluesse",
      title: "Energie-, Stoff- und Informationsflüsse",
      exam: [],
      summary: "Die drei Flussarten eines CPS unterscheiden, im Blockschaltbild darstellen und ihre Wechselwirkung beschreiben.",
      html: `
        <p>In einem CPS fließen nicht nur Daten. Motoren brauchen Energie, Ventile lassen Wasser strömen, Förderbänder bewegen Werkstücke. Um ein System vollständig zu dokumentieren und Fehler systematisch zu suchen, trennt man drei <strong>Flussarten</strong>.</p>
        <table><thead><tr><th>Flussart</th><th>Was fließt?</th><th>Typische Beispiele</th><th>Linie im Blockschaltbild (Unterricht)</th></tr></thead><tbody>
          <tr><td><strong>Energiefluss</strong></td><td>Energie in elektrischer, mechanischer, thermischer oder chemischer Form</td><td>Versorgungsstrom zum Motor, Akku → Elektronik, Wärme vom Heizkörper an den Raum</td><td>dünne durchgezogene Linie</td></tr>
          <tr><td><strong>Stofffluss</strong></td><td>Materie: Werkstücke, Flüssigkeiten, Gase, Schüttgut</td><td>Warmwasser im Heizkreis, Werkstück auf dem Förderband, Gießwasser</td><td>dicke durchgezogene Linie</td></tr>
          <tr><td><strong>Informationsfluss</strong></td><td>Daten und Signale – unabhängig davon, wie viel Energie der Träger hat</td><td>Messwert Sensor → Controller, Steuerbefehl, MQTT-Nachricht, Sollwert aus der App</td><td>gestrichelte Linie</td></tr>
        </tbody></table>
        <h5>Die typische Wirkungskette</h5>
        <p>In fast jedem CPS lässt sich dieselbe Kette erkennen:</p>
        <ol>
          <li>Ein <strong>Informationsfluss</strong> (Messwert unter dem Sollwert) wird von der Steuerung ausgewertet.</li>
          <li>Die Steuerung löst einen <strong>Energiefluss</strong> aus (Relais schaltet, Motor erhält Strom).</li>
          <li>Der Energiefluss bewirkt einen <strong>Stofffluss</strong> (Ventil öffnet, Wasser strömt).</li>
          <li>Der Stofffluss verändert die physikalische Größe, die der Sensor erneut misst – der Kreis schließt sich.</li>
        </ol>
        <pre class="ascii">
Legende:  ───  Energie      ═══  Stoff      - - -  Information

 Netzteil ─────────────► Controller ─────────► Stellmotor
                             ▲  - - - - - - - - ► (Steuersignal)
 Temperatursensor - - - - - -┘                        │
                                                      ▼
 Vorlauf ═════════════════════════════════════► Ventil ═══► Heizkörper ═══► Rücklauf
        </pre>
        <h5>Flüsse in den Unterrichtsbeispielen</h5>
        <table><thead><tr><th>CPS</th><th>Energiefluss</th><th>Stofffluss</th><th>Informationsfluss</th></tr></thead><tbody>
          <tr><td>Smart-Home-Heizung</td><td>Strom zum Stellmotor des Ventils; Wärme vom Heizkörper in den Raum</td><td>Heizungswasser durch das geöffnete Ventil</td><td>Temperatur- und Fensterzustand → Mikrocontroller; Sollwert und Status über WLAN ↔ App</td></tr>
          <tr><td>Fertigungsstraße</td><td>Strom zu Förderband- und Robotermotoren, Bewegungsenergie</td><td>Werkstücke auf dem Band und im Greifer</td><td>Lichtschranke/Kraftsensor → SPS → Aktoren; Prozessdaten über Feldbus → MES</td></tr>
          <tr><td>Notbremsassistent</td><td>Bordnetz versorgt Steuergerät und Bremsaktorik; Bewegungsenergie wird an der Bremse in Wärme umgewandelt</td><td>Bremsflüssigkeit im Hydrauliksystem</td><td>Radar-/Kameradaten → Steuergerät → Bremsbefehl über den Fahrzeugbus</td></tr>
          <tr><td>Fitness-Tracker</td><td>Akku → Prozessor, Sensoren, Vibrationsmotor</td><td>praktisch keiner (das Blut wird nur gemessen, nicht bewegt)</td><td>Puls- und Beschleunigungswerte → Prozessor → BLE → App</td></tr>
          <tr><td>Smart Farming</td><td>Strom zum Magnetventil (und ggf. zur Pumpe); Batterie der Sensorknoten</td><td>Wasser von der Leitung auf das Feld</td><td>Bodenfeuchte per LoRaWAN, Wetterprognose per Internet → Controller → Ventilbefehl</td></tr>
        </tbody></table>
        <h5>Warum das wichtig ist</h5>
        <ul>
          <li><strong>Dokumentation:</strong> Blockschaltbilder mit getrennten Flüssen zeigen dem Kunden und dem Service, wie das System arbeitet.</li>
          <li><strong>Fehlersuche:</strong> Bleibt das Ventil zu, prüfst du getrennt: Kommt der Befehl an (Information)? Liegt Spannung am Motor an (Energie)? Ist die Leitung frei (Stoff)?</li>
          <li><strong>Dimensionierung:</strong> Aus dem Energiefluss ergibt sich der Strombedarf, aus dem Informationsfluss die Datenrate und das Protokoll.</li>
        </ul>
        <div class="callout merke"><strong>Merke:</strong> Information löst Energie aus, Energie löst Stoff aus. Sensoren und Steuerleitungen führen Information, Versorgungs- und Motorleitungen führen Energie, Rohre und Förderbänder führen Stoff.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Auch ein Steuersignal ist elektrisch – trotzdem zählt es als <em>Informationsfluss</em>, weil es eine Nachricht (EIN/AUS, Sollwert) trägt. Der kräftige Strom, der den Motor antreibt, ist dagegen ein <em>Energiefluss</em>. Dazwischen sitzt meist ein Treiber oder Relais, das mit einem kleinen Informationssignal einen großen Energiefluss schaltet.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Ergänzen Sie das Blockschaltbild um Energie-, Stoff- und Informationsflüsse“, „Nennen Sie je einen Fluss im Szenario“ oder „Beschreiben Sie eine Wechselwirkung zwischen zwei Flussarten“. Formuliere vollständig: <em>Wer</em> sendet <em>was</em> an <em>wen</em> und was wird dadurch ausgelöst?</div>
      `
    },
    {
      id: "hardware-plattformen",
      title: "Mikrocontroller, SBC, SoC und Embedded System",
      exam: ["AP2"],
      summary: "Vier Hardware-Kategorien für CPS vergleichen und nach Einsatzkriterien begründet auswählen.",
      html: `
        <p>Für die „Verarbeitung“ in einem CPS stehen verschiedene Hardware-Kategorien zur Wahl. Sie unterscheiden sich in Rechenleistung, Energiebedarf, Echtzeitfähigkeit, Betriebssystem und Kosten.</p>
        <h5>Die vier Kategorien</h5>
        <ul>
          <li><strong>Mikrocontroller (MCU):</strong> Ein-Chip-Computer mit CPU, Flash (Programm), RAM und Ein-/Ausgängen (GPIO, ADC, Timer, UART, I²C, SPI). Läuft ohne Betriebssystem oder mit einem schlanken Echtzeitbetriebssystem (RTOS, z. B. FreeRTOS) und führt ein festes Programm (Firmware) aus.</li>
          <li><strong>Single Board Computer (SBC):</strong> Vollständiger Computer auf einer Platine mit USB, HDMI, Netzwerk und GPIO. Er bootet ein vollwertiges Betriebssystem (meist Linux), kann Multitasking, Datenbanken und grafische Oberflächen.</li>
          <li><strong>System-on-Chip (SoC):</strong> Ein Chip, der mehrere CPU-Kerne, Grafikeinheit, Speichercontroller und Funkmodule (WLAN, Bluetooth, Mobilfunk) vereint. Grundlage von Smartphones, Tablets, Wearables und vielen SBCs.</li>
          <li><strong>Embedded System:</strong> Kein Hardware-Typ, sondern ein <em>funktionaler</em> Begriff: ein Rechner, der fest in ein technisches Gesamtsystem eingebettet ist und dort eine bestimmte Steuer-, Regel- oder Überwachungsaufgabe erfüllt (Motorsteuergerät, Waschmaschine, Herzschrittmacher). Er kann auf einer MCU, einem SoC oder einem SBC beruhen.</li>
        </ul>
        <h5>Vergleichstabelle</h5>
        <table><thead><tr><th>Kriterium</th><th>Mikrocontroller</th><th>SBC</th><th>SoC</th><th>Embedded System</th></tr></thead><tbody>
          <tr><td>Rechenleistung</td><td>gering (8/32 Bit, MHz-Bereich)</td><td>mittel bis hoch (GHz, mehrere Kerne)</td><td>hoch bei kleiner Fläche</td><td>so viel wie die Aufgabe braucht</td></tr>
          <tr><td>Betriebssystem</td><td>keins oder RTOS</td><td>Linux (z. B. Raspberry Pi OS)</td><td>Android, iOS, Linux, RTOS</td><td>Firmware, RTOS oder Embedded Linux</td></tr>
          <tr><td>Energiebedarf</td><td>sehr gering (mA, im Tiefschlaf µA)</td><td>mittel (einige Watt)</td><td>gering bis mittel, sehr effizient</td><td>abhängig von der Plattform</td></tr>
          <tr><td>Kosten</td><td>sehr gering (wenige Euro)</td><td>gering bis mittel</td><td>als Chip günstig, Entwicklung aufwendig</td><td>abhängig von Stückzahl</td></tr>
          <tr><td>Echtzeit / Startzeit</td><td>deterministisch, startet in Millisekunden</td><td>kein hartes Echtzeit-OS, Boot in Sekunden</td><td>je nach Betriebssystem</td><td>oft harte Echtzeit gefordert</td></tr>
          <tr><td>Beispiele</td><td>ATmega328P (Arduino UNO), ESP32, RP2040, STM32</td><td>Raspberry Pi 4/5</td><td>Broadcom BCM2712 (im Pi 5), Smartphone-Chips</td><td>Airbag-Steuergerät, Fitness-Tracker, Thermostat</td></tr>
        </tbody></table>
        <h5>Konkrete Plattformen</h5>
        <table><thead><tr><th>Plattform</th><th>Kerndaten</th><th>Stärken</th></tr></thead><tbody>
          <tr><td>Arduino UNO R3</td><td>ATmega328P, 8 Bit, 16 MHz, 32 KiB Flash, 2 KiB SRAM, 5-V-Logik, 10-Bit-ADC</td><td>robust, einfach, riesige Community</td></tr>
          <tr><td>ESP32</td><td>32 Bit, bis 240 MHz (meist zwei Kerne), WLAN und Bluetooth LE integriert, 3,3-V-Logik, 12-Bit-ADC, Deep Sleep</td><td>günstiger vernetzter IoT-Knoten</td></tr>
          <tr><td>Raspberry Pi 5</td><td>SoC mit vier 64-Bit-Kernen (2,4 GHz), Linux, 40-Pin-GPIO mit 3,3 V, Gigabit-Ethernet, WLAN, Versorgung 5 V über USB-C</td><td>Gateway, Datenbank, Dashboard, Bildverarbeitung</td></tr>
          <tr><td>SPS (PLC)</td><td>Industriesteuerung, 24-V-Signale, Programmierung nach IEC 61131-3</td><td>robust, zertifiziert, zyklische Echtzeit</td></tr>
        </tbody></table>
        <h5>Auswahlkriterien</h5>
        <ul>
          <li><strong>Echtzeit:</strong> Muss in festen Zeitgrenzen reagiert werden (Bremse, Motorsteuerung)? → MCU/RTOS oder SPS.</li>
          <li><strong>Energie:</strong> Batterie- oder Solarbetrieb über Monate? → MCU mit Tiefschlaf.</li>
          <li><strong>Rechenleistung und Software:</strong> Bildverarbeitung, KI, Datenbank, Webserver? → SBC oder SoC.</li>
          <li><strong>Schnittstellen:</strong> Analogeingänge, Funk (WLAN, BLE, LoRa), Anzahl GPIO, Logikpegel 5 V oder 3,3 V.</li>
          <li><strong>Umgebung und Wartung:</strong> Temperaturbereich, Staub, EMV, Update-Fähigkeit, Lebensdauer, Kosten pro Stück.</li>
        </ul>
        <div class="callout beispiel"><strong>Beispiel Smart Farming:</strong> Die Bodenfeuchte-Knoten im Feld laufen mit Batterie und senden alle 15 Minuten einen Wert → <em>Mikrocontroller</em> mit LoRa-Funk und Tiefschlaf. Die Zentrale mit Wetter-API, Datenbank und Dashboard → <em>SBC</em> (z. B. Raspberry Pi) mit Linux.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Der Raspberry Pi hat <strong>keine analogen Eingänge</strong> – für einen analogen Sensor brauchst du einen externen A/D-Wandler (z. B. über I²C oder SPI). Seine GPIOs arbeiten mit 3,3 V und sind nicht 5-V-tolerant. Und: „Embedded System“ ist keine eigene Chip-Sorte, sondern beschreibt die Einbettung in ein Gerät. Die Grenzen sind fließend: Espressif selbst bezeichnet den ESP32 als SoC, weil WLAN und Bluetooth mit auf dem Chip sitzen – eingesetzt wird er aber wie ein Mikrocontroller (Firmware ohne Linux, Tiefschlaf).</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Vergleichen Sie Mikrocontroller und Einplatinencomputer anhand von drei Kriterien“ oder „Wählen Sie für das Szenario eine Plattform aus und begründen Sie Ihre Wahl“. Nenne Kriterien <em>mit Bezug zum Szenario</em> (Batteriebetrieb, Echtzeit, Analogeingang).</div>
      `
    },
    {
      id: "sensoren-aktoren",
      title: "Sensoren und Aktoren auswählen",
      exam: ["AP1", "AP2"],
      summary: "Wichtige Sensoren (PIR, Ultraschall, Temperatur) und Aktoren (LED, Relais, Motor, Servo, Ventil) kennen, Datenblätter lesen und Bauteile nach Kriterien auswählen.",
      html: `
        <p>Ein <strong>Sensor</strong> wandelt eine physikalische oder chemische Größe (Temperatur, Abstand, Licht, Kraft, Feuchte) in ein elektrisches Signal. Ein <strong>Aktor</strong> macht das Umgekehrte: Er wandelt ein elektrisches Steuersignal in eine physikalische Wirkung (Bewegung, Licht, Wärme, Ton, Durchfluss).</p>
        <h5>Arten von Sensorsignalen</h5>
        <ul>
          <li><strong>Binär:</strong> nur zwei Zustände (Taster, Reed-Kontakt am Fenster, Lichtschranke, PIR-Ausgang) → <code>digitalRead()</code>.</li>
          <li><strong>Analog:</strong> Spannung proportional zur Messgröße (TMP36/LM35 mit 10 mV/°C, Fotowiderstand oder NTC im Spannungsteiler, Bodenfeuchtesensor) → ADC, <code>analogRead()</code>.</li>
          <li><strong>Digital über Bus:</strong> Der Sensor wandelt selbst und sendet Zahlenwerte (DS18B20 über 1-Wire, BME280 über I²C/SPI, DHT22 mit eigenem Eindrahtprotokoll) → Bibliothek nutzen.</li>
        </ul>
        <h5>Wichtige Sensoren aus Unterricht und Prüfung</h5>
        <table><thead><tr><th>Sensor</th><th>Messgröße / Prinzip</th><th>Ausgang</th><th>Praxis-Hinweise</th></tr></thead><tbody>
          <tr><td>PIR HC-SR501</td><td>Bewegung warmer Körper: pyroelektrischer Sensor erkennt <em>Änderungen</em> der Infrarotstrahlung</td><td>binär: HIGH (ca. 3,3 V) für die eingestellte Haltezeit</td><td>Versorgung laut gängigen Datenblättern ca. 4,5–20 V; zwei Potis (Empfindlichkeit, Haltezeit); Jumper für Einzel- oder Mehrfachauslösung; nach dem Einschalten ca. 1 min Aufwärmzeit</td></tr>
          <tr><td>Reed-Kontakt</td><td>Tür/Fenster offen oder zu: Magnet schließt einen Kontakt im Glasröhrchen</td><td>binär (wie ein Schalter)</td><td>mit Pull-up (<code>INPUT_PULLUP</code>) gegen GND; typischer Fensterkontakt im Smart Home und in Alarmanlagen</td></tr>
          <tr><td>LDR (Fotowiderstand)</td><td>Helligkeit</td><td>analog im Spannungsteiler</td><td>Widerstand sinkt bei Licht; z. B. Beleuchtung am Arbeitsplatz oder Außenlicht nach Dämmerung schalten</td></tr>
          <tr><td>CO₂-Sensor (NDIR)</td><td>CO₂-Konzentration in ppm über Absorption von Infrarotlicht</td><td>meist digital (I²C/UART)</td><td>Luftqualität in Büro und Schulungsraum („CO₂-Ampel“); die Arbeitsstättenregel ASR A3.6 nennt 1000 ppm als Orientierungswert fürs Lüften</td></tr>
          <tr><td>Ultraschall HC-SR04</td><td>Abstand über Laufzeit eines 40-kHz-Schallimpulses</td><td>Echo-Impuls, dessen Länge der Laufzeit entspricht</td><td>5 V; ca. 2–400 cm; 10-µs-Impuls an TRIG; Echo liefert 5 V → an 3,3-V-Boards Spannungsteiler</td></tr>
          <tr><td>DS18B20</td><td>Temperatur −55 bis +125 °C</td><td>digital, 1-Wire</td><td>4,7-kΩ-Pull-up; 9–12 Bit Auflösung; mehrere Sensoren an einer Leitung</td></tr>
          <tr><td>DHT22</td><td>Temperatur und Luftfeuchte</td><td>digital, eigenes Protokoll</td><td>höchstens alle 2 s abfragen</td></tr>
          <tr><td>LM35 / TMP36</td><td>Temperatur</td><td>analog, 10 mV/°C</td><td>TMP36 hat 500 mV Offset bei 0 °C</td></tr>
          <tr><td>NTC (Heißleiter)</td><td>Temperatur über Widerstandsänderung</td><td>analog im Spannungsteiler</td><td>Widerstand sinkt bei Wärme</td></tr>
          <tr><td>Kraftsensor / Wägezelle</td><td>Kraft, Gewicht (Dehnungsmessstreifen)</td><td>sehr kleine Spannung → Messverstärker mit ADC</td><td>Greifkraft in der Fertigungsstraße</td></tr>
        </tbody></table>
        <div class="callout formel"><strong>Ultraschall-Abstand:</strong> s = (v × t) ÷ 2 &nbsp;&nbsp; mit v ≈ 343 m/s (Luft, 20 °C), t = gemessene Echo-Zeit<br>Faustformel: Abstand in cm ≈ Echo-Zeit in µs ÷ 58</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> Der HC-SR04 meldet eine Echo-Zeit von 1166 µs.<br>s = 343 m/s × 0,001166 s ÷ 2 = 0,19997 m ≈ <strong>20 cm</strong>. Geteilt durch 2, weil der Schall hin <em>und</em> zurück läuft. Kontrolle: 1166 ÷ 58 ≈ 20,1 cm.</div>
        <h5>Wichtige Aktoren</h5>
        <table><thead><tr><th>Aktor</th><th>Wirkung</th><th>Ansteuerung</th></tr></thead><tbody>
          <tr><td>LED</td><td>Licht</td><td>direkt am Pin, immer mit Vorwiderstand; dimmen per PWM</td></tr>
          <tr><td>Relais</td><td>schaltet einen separaten Laststromkreis, galvanisch getrennt</td><td>über Transistor/Relaismodul, Freilaufdiode gegen Spannungsspitzen</td></tr>
          <tr><td>Transistor / MOSFET</td><td>elektronischer Schalter für größere Ströme</td><td>kleiner Steuerstrom am Pin schaltet großen Laststrom</td></tr>
          <tr><td>DC-Motor</td><td>Drehbewegung (Förderband, Lüfter, Pumpe)</td><td>Motortreiber (H-Brücke), Drehzahl per PWM</td></tr>
          <tr><td>Servo</td><td>Drehung auf einen Winkel (ca. 0–180°)</td><td>Pulsbreite ca. 1–2 ms alle 20 ms (Bibliothek Servo)</td></tr>
          <tr><td>Schrittmotor</td><td>präzise Positionierung in Schritten</td><td>Schrittmotortreiber</td></tr>
          <tr><td>Magnetventil</td><td>öffnet/schließt einen Durchfluss (Bewässerung)</td><td>Relais oder MOSFET, oft 12/24 V</td></tr>
          <tr><td>Buzzer, Vibrationsmotor, Display</td><td>Ton, Vibration, Anzeige</td><td>Pin (PWM/<code>tone()</code>) bzw. I²C/SPI</td></tr>
        </tbody></table>
        <h5>Auswahlkriterien und Datenblatt</h5>
        <ul>
          <li>Messbereich, Genauigkeit, Auflösung, Ansprech- bzw. Wandlungszeit</li>
          <li>Versorgungsspannung, Stromaufnahme und <strong>Logikpegel</strong> (5 V oder 3,3 V?)</li>
          <li>Schnittstelle (binär, analog, I²C, SPI, 1-Wire, UART) und verfügbare <strong>Bibliothek</strong></li>
          <li>Umgebung: Temperaturbereich, Feuchte, Schutzart (IP-Code), Montage</li>
          <li>Preis, Verfügbarkeit, Dokumentation</li>
        </ul>
        <h5>Englische Datenblätter lesen</h5>
        <p>Datenblätter sind fast immer englisch. Die Werte stehen meist in einer Tabelle mit den Spalten <em>Min.</em>, <em>Typ.</em> (typisch) und <em>Max.</em> – für eine sichere Auslegung rechnest du mit dem ungünstigsten Wert (z. B. dem maximalen Strom).</p>
        <table><thead><tr><th>Englischer Begriff</th><th>Bedeutung</th></tr></thead><tbody>
          <tr><td>Supply / Operating voltage</td><td>zulässige Versorgungs- bzw. Betriebsspannung</td></tr>
          <tr><td>Supply / Operating current</td><td>Stromaufnahme im Betrieb</td></tr>
          <tr><td>Quiescent / Standby / Sleep current</td><td>Ruhestrom (wichtig für Batteriebetrieb)</td></tr>
          <tr><td>Measuring range / Detection range</td><td>Messbereich / Erfassungsbereich (Reichweite)</td></tr>
          <tr><td>Accuracy</td><td>Genauigkeit: maximale Abweichung vom wahren Wert, z. B. ±0,5 °C</td></tr>
          <tr><td>Resolution</td><td>Auflösung: kleinster unterscheidbarer Schritt, z. B. 0,0625 °C</td></tr>
          <tr><td>Response time / Conversion time</td><td>Ansprechzeit / Wandlungszeit</td></tr>
          <tr><td>Operating temperature</td><td>zulässige Umgebungstemperatur</td></tr>
          <tr><td>Output (high/low level), Pinout</td><td>Ausgangssignal und Pegel, Pinbelegung</td></tr>
          <tr><td>Absolute maximum ratings</td><td>Grenzwerte, die nie – auch nicht kurz – überschritten werden dürfen</td></tr>
        </tbody></table>
        <div class="callout achtung"><strong>Prüfungsfalle Datenblatt:</strong> <em>Accuracy</em> und <em>Resolution</em> sind nicht dasselbe. Der DS18B20 löst bei 12 Bit 0,0625 °C auf, ist aber im mittleren Bereich nur auf etwa ±0,5 °C genau. Und: Die <em>absolute maximum ratings</em> sind keine Betriebswerte – dauerhaft betreibst du ein Bauteil nur innerhalb der empfohlenen Betriebsbedingungen.</div>
        <div class="callout merke"><strong>Merke:</strong> Ein Mikrocontroller-Pin liefert nur wenige Milliampere (Arduino UNO: 20 mA empfohlen). Motoren, Relais und Ventile schließt du <em>nie</em> direkt an, sondern immer über Transistor, Relaismodul oder Treiber – mit eigener Versorgung und gemeinsamer Masse (GND).</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> „Passiv“ beim PIR heißt, dass der Sensor selbst nichts aussendet, sondern nur Wärmestrahlung empfängt. Der Ultraschallsensor ist dagegen aktiv, denn er sendet einen Schallimpuls. Und: Ein PIR erkennt <em>Bewegung</em>, keine ruhig sitzende Person.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Aus einem (oft englischen) Datenblatt Werte herauslesen, einen geeigneten Sensor für ein Szenario auswählen und begründen, einen Abstand aus einer Laufzeit berechnen oder erklären, warum ein Motor einen Treiber braucht. In der AP1 werden Sensoren im Arbeitsplatz- und Gebäudeumfeld abgefragt: Nenne zum Einsatzzweck (Licht bei Anwesenheit, Fenster offen, Luftqualität) den passenden Sensor und seine Messgröße.</div>
      `
    },
    {
      id: "signale-ad",
      title: "Signale, A/D-Wandlung und PWM",
      exam: ["AP2"],
      summary: "Analoge und digitale Signale, Abtastung, Quantisierung, Auflösung und Datenmenge berechnen sowie PWM als Pseudo-Analogausgang.",
      html: `
        <p>Sensoren liefern häufig <strong>analoge</strong> Spannungen, ein Mikrocontroller rechnet aber nur mit <strong>digitalen</strong> Zahlen. Die Brücke dazwischen ist der <strong>Analog-Digital-Wandler (ADC)</strong>.</p>
        <table><thead><tr><th>Signal</th><th>Zeit</th><th>Wert</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td>analog</td><td>kontinuierlich</td><td>kontinuierlich (beliebig viele Zwischenwerte)</td><td>Ausgangsspannung eines TMP36</td></tr>
          <tr><td>digital</td><td>diskret (Abtastzeitpunkte)</td><td>diskret (endlich viele Stufen)</td><td>ADC-Wert 0–1023</td></tr>
          <tr><td>binär</td><td>–</td><td>genau zwei Zustände (LOW/HIGH)</td><td>PIR-Ausgang, Taster</td></tr>
        </tbody></table>
        <h5>Die drei Schritte der A/D-Wandlung</h5>
        <ol>
          <li><strong>Abtasten:</strong> Das Signal wird in festen Zeitabständen gemessen (Abtastrate fₐ in Hz) → zeitdiskret.</li>
          <li><strong>Quantisieren:</strong> Jeder Messwert wird einer von 2ⁿ Stufen zugeordnet → wertdiskret. Dabei entsteht der <strong>Quantisierungsfehler</strong>: bei idealer Rundung höchstens ±½ LSB, beim einfachen Abrunden (Abschneiden) bis knapp 1 LSB.</li>
          <li><strong>Codieren:</strong> Die Stufe wird als Binärzahl mit n Bit ausgegeben.</li>
        </ol>
        <div class="callout formel"><strong>Formeln A/D-Wandlung</strong> (n = Auflösung in Bit, U(ref) = Referenzspannung)<br>
          Anzahl Stufen = 2ⁿ &nbsp;·&nbsp; größter Digitalwert = 2ⁿ − 1<br>
          Spannung pro Stufe (LSB) = U(ref) ÷ 2ⁿ<br>
          Digitalwert D = abgerundet (U(ein) ÷ U(ref) × 2ⁿ) &nbsp;·&nbsp; Rückrechnung U ≈ D × LSB<br>
          Abtasttheorem (Nyquist-Shannon): fₐ &gt; 2 × fₘₐₓ<br>
          Datenrate = fₐ × n × Kanäle &nbsp;·&nbsp; Datenmenge = Datenrate × Zeit</div>
        <table><thead><tr><th>Auflösung</th><th>Stufen</th><th>LSB bei 5 V</th><th>LSB bei 3,3 V</th><th>Typisch</th></tr></thead><tbody>
          <tr><td>8 Bit</td><td>256</td><td>19,53 mV</td><td>12,89 mV</td><td>PWM-Wert <code>analogWrite</code></td></tr>
          <tr><td>10 Bit</td><td>1024</td><td>4,88 mV</td><td>3,22 mV</td><td>Arduino UNO</td></tr>
          <tr><td>12 Bit</td><td>4096</td><td>1,22 mV</td><td>0,81 mV</td><td>ESP32, RP2040</td></tr>
          <tr><td>16 Bit</td><td>65 536</td><td>0,076 mV</td><td>0,050 mV</td><td>externer ADC (z. B. ADS1115)</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel 1 – Digitalwert:</strong> Arduino UNO, 10 Bit, U(ref) = 5 V, am Eingang liegen 2,2 V.<br>LSB = 5 V ÷ 1024 ≈ 4,88 mV. D = 2,2 ÷ 5 × 1024 = 450,56 → <strong>450</strong>.<br><br>
        <strong>Beispiel 2 – Temperaturauflösung:</strong> LM35 (10 mV/°C) am Arduino: 4,88 mV ÷ 10 mV/°C ≈ <strong>0,49 °C pro Stufe</strong>. Mit der internen 1,1-V-Referenz wären es 1,1 V ÷ 1024 ≈ 1,07 mV → ca. 0,11 °C.<br><br>
        <strong>Beispiel 3 – Rückrechnung:</strong> TMP36 liefert den Wert 153. U = 153 × 5 V ÷ 1024 ≈ 0,747 V. T = (0,747 V − 0,5 V) × 100 °C/V ≈ <strong>24,7 °C</strong>.<br><br>
        <strong>Beispiel 4 – Datenmenge:</strong> Audio mit 44,1 kHz, 16 Bit, 2 Kanäle, 1 Minute:<br>44 100 × 16 × 2 = 1 411 200 bit/s; × 60 s = 84 672 000 bit ÷ 8 = 10 584 000 Byte ÷ 2²⁰ ≈ <strong>10,09 MiB</strong>. Datenmengen gibt der Prüfungskatalog mit Binärpräfixen an (KiB, MiB, GiB), Datenraten mit Dezimalpräfixen (kbit/s).<br><br>
        <strong>Beispiel 5 – Quantisierungsfehler:</strong> Arduino UNO, 10 Bit, 5 V: LSB ≈ 4,88 mV → maximaler Fehler bei idealer Rundung ±½ LSB = ±2,44 mV. Beim ESP32 (12 Bit, 3,3 V) sind es nur ±0,40 mV – rein rechnerisch. In der Praxis begrenzen Rauschen, Referenzspannung und Nichtlinearität die Genauigkeit oft stärker als die Bitzahl.</div>
        <h5>Abtastrate richtig wählen</h5>
        <p>Wird ein Signal zu selten abgetastet, entstehen Scheinfrequenzen (<strong>Aliasing</strong>): Eine schnelle Schwingung erscheint als langsame. Deshalb muss fₐ mehr als doppelt so hoch sein wie die höchste Signalfrequenz. Für langsame Größen wie Raumtemperatur reicht dagegen ein Wert pro Minute – häufigeres Messen kostet nur Energie und Speicher.</p>
        <h5>PWM – Pulsweitenmodulation</h5>
        <p>Der Arduino UNO hat keinen echten Analogausgang. Mit <code>analogWrite(pin, wert)</code> schaltet er einen PWM-fähigen Pin (Kennzeichnung ~: 3, 5, 6, 9, 10, 11) sehr schnell ein und aus (ca. 490 Hz, Pins 5 und 6 ca. 980 Hz). Der Wert 0–255 (8 Bit) legt den <strong>Tastgrad</strong> fest. LED und Motor „sehen“ wegen ihrer Trägheit den Mittelwert.</p>
        <div class="callout formel">Tastgrad D = t(ein) ÷ T = wert ÷ 255 &nbsp;·&nbsp; U(mittel) = D × U(HIGH)</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> <code>analogWrite(9, 64)</code> → D = 64 ÷ 255 ≈ 25,1 % → U(mittel) ≈ 0,251 × 5 V ≈ <strong>1,25 V</strong>. <code>analogWrite(9, 191)</code> → 74,9 % → ≈ 3,75 V.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Manche Quellen rechnen LSB = U(ref) ÷ (2ⁿ − 1), Arduino-Beispiele oft mit <code>5.0 / 1023.0</code>. Der Unterschied ist winzig – schreibe deine Formel hin, dann ist der Rechenweg nachvollziehbar. Verwechsle außerdem nicht: <code>analogRead</code> liefert 0–1023 (10 Bit), <code>analogWrite</code> erwartet 0–255 (8 Bit).</div>
        <div class="callout tipp"><strong>Tipp ESP32:</strong> Der ADC des klassischen ESP32 ist an den Rändern des Messbereichs ungenau und nicht ganz linear. Für genaue Messungen nutzt du die Kalibrierfunktionen aus dem Hersteller-Framework oder einen externen ADC (z. B. über I²C). In Prüfungsaufgaben rechnest du trotzdem mit dem idealen Wandler und der angegebenen Referenzspannung.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Berechnen Sie die Auflösung in mV“, „Welcher Digitalwert ergibt sich bei 2,2 V?“, „Wie groß muss die Abtastrate mindestens sein?“, „Berechnen Sie die Datenmenge für 24 h Messung“. Schreibe Formel, eingesetzte Werte und Einheit hin.</div>
      `
    },
    {
      id: "arduino",
      title: "Arduino UNO R3: Pins und Sketch-Grundlagen",
      exam: ["AP2"],
      summary: "Aufbau des Arduino UNO R3, Pinbelegung, Sketch-Struktur mit setup() und loop() sowie die wichtigsten Befehle für Ein- und Ausgänge und den seriellen Monitor.",
      html: `
        <p>Der <strong>Arduino UNO R3</strong> ist eine Mikrocontroller-Platine mit dem 8-Bit-Chip <strong>ATmega328P</strong> (16 MHz, 32 KiB Flash, davon 0,5 KiB Bootloader, 2 KiB SRAM, 1 KiB EEPROM). Programmiert wird in C/C++ mit der Arduino IDE; ein Programm heißt <strong>Sketch</strong>. Beim Hochladen wählst du Board und seriellen Port (COM-Port), der Sketch wird kompiliert und in den Flash geschrieben.</p>
        <h5>Pinbelegung und Versorgung</h5>
        <table><thead><tr><th>Pins</th><th>Funktion</th><th>Hinweis</th></tr></thead><tbody>
          <tr><td>D0–D13</td><td>14 digitale Ein-/Ausgänge (5-V-Logik)</td><td>D0 (RX) und D1 (TX) belegt die USB-Seriell-Verbindung</td></tr>
          <tr><td>~3, ~5, ~6, ~9, ~10, ~11</td><td>PWM-Ausgänge für <code>analogWrite()</code></td><td>Tilde ~ auf der Platine</td></tr>
          <tr><td>A0–A5</td><td>6 analoge Eingänge, 10-Bit-ADC (0–1023)</td><td>auch digital nutzbar; A4 = SDA, A5 = SCL (I²C)</td></tr>
          <tr><td>D13</td><td>eingebaute LED (<code>LED_BUILTIN</code>)</td><td>zugleich SCK für SPI (D10–D13)</td></tr>
          <tr><td>D2, D3</td><td>externe Interrupts</td><td><code>attachInterrupt()</code></td></tr>
          <tr><td>5V, 3.3V, GND, VIN</td><td>Versorgung für Sensoren; VIN/Hohlstecker für externe Quelle</td><td>empfohlen 7–12 V am Hohlstecker; 3,3-V-Pin nur ca. 50 mA</td></tr>
        </tbody></table>
        <p>Jeder I/O-Pin sollte mit höchstens <strong>20 mA</strong> belastet werden (absolutes Maximum 40 mA); zusammen dürfen alle Pins laut Datenblatt des ATmega328P höchstens ca. 200 mA über VCC bzw. GND ziehen. Das reicht für LEDs mit Vorwiderstand, aber nicht für Motoren oder Relaisspulen.</p>
        <h5>Aufbau eines Sketches</h5>
        <pre><code>// 1. Globale Konstanten und Variablen
const int LED_PIN = 9;

void setup() {             // 2. läuft EINMAL nach Start/Reset
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);      // serielle Schnittstelle, 9600 Baud
}

void loop() {              // 3. läuft danach ENDLOS immer wieder
  digitalWrite(LED_PIN, HIGH);
  delay(500);
  digitalWrite(LED_PIN, LOW);
  delay(500);
}</code></pre>
        <h5>Die wichtigsten Befehle</h5>
        <table><thead><tr><th>Befehl</th><th>Wirkung</th><th>Werte</th></tr></thead><tbody>
          <tr><td><code>pinMode(pin, modus)</code></td><td>Pin als Ein- oder Ausgang festlegen</td><td>INPUT, OUTPUT, INPUT_PULLUP</td></tr>
          <tr><td><code>digitalWrite(pin, wert)</code></td><td>Ausgang ein-/ausschalten</td><td>HIGH (5 V) / LOW (0 V)</td></tr>
          <tr><td><code>digitalRead(pin)</code></td><td>binären Eingang lesen</td><td>HIGH / LOW</td></tr>
          <tr><td><code>analogRead(A0)</code></td><td>Spannung am Analogeingang wandeln</td><td>0–1023</td></tr>
          <tr><td><code>analogWrite(pin, wert)</code></td><td>PWM ausgeben (nur ~-Pins)</td><td>0–255</td></tr>
          <tr><td><code>delay(ms)</code> / <code>millis()</code></td><td>warten (blockierend) / Millisekunden seit Start</td><td>1000 ms = 1 s</td></tr>
          <tr><td><code>Serial.begin()</code>, <code>Serial.println()</code></td><td>Ausgabe an den seriellen Monitor</td><td>Baudrate muss im Monitor gleich sein</td></tr>
          <tr><td><code>map(x, 0, 1023, 0, 255)</code></td><td>Wertebereich umrechnen</td><td>Ganzzahlen</td></tr>
        </tbody></table>
        <h5>Beispiel: Bewegungsmelder HC-SR501 mit LED</h5>
        <p>Anschluss: VCC → 5V, GND → GND, OUT → D7. Der Sketch meldet nur <em>Änderungen</em> des Zustands, damit der serielle Monitor nicht zugeschrieben wird.</p>
        <pre><code>const int PIR_PIN = 7;
const int LED_PIN = LED_BUILTIN;
int letzterZustand = LOW;

void setup() {
  pinMode(PIR_PIN, INPUT);
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int zustand = digitalRead(PIR_PIN);
  if (zustand != letzterZustand) {       // nur bei Flanke reagieren
    digitalWrite(LED_PIN, zustand);
    Serial.println(zustand == HIGH ? "Bewegung erkannt" : "Keine Bewegung");
    letzterZustand = zustand;
  }
  delay(100);                            // Abfragerhythmus 100 ms
}</code></pre>
        <h5>Beispiel: LED dimmen (Fade) mit PWM</h5>
        <pre><code>const int LED_PIN = 9;     // PWM-Pin ~9, LED über 220 Ω gegen GND
int helligkeit = 0;
int schritt = 5;

void setup() { pinMode(LED_PIN, OUTPUT); }

void loop() {
  analogWrite(LED_PIN, helligkeit);
  helligkeit = helligkeit + schritt;
  if (helligkeit &lt;= 0 || helligkeit &gt;= 255) {
    schritt = -schritt;    // Richtung umkehren
  }
  delay(30);               // kleiner = schnelleres Dimmen
}</code></pre>
        <p>Die Geschwindigkeit des Dimmens hängt von <code>schritt</code> und <code>delay(30)</code> ab: Ein kompletter Zyklus dunkel → hell → dunkel braucht 102 Durchläufe von <code>loop()</code> (52 Werte von 0 bis 255 und 50 Werte zurück) × 30 ms ≈ 3,1 s. Eine zweite LED an Pin ~10 dimmt gegenläufig mit <code>analogWrite(10, 255 - helligkeit);</code>.</p>
        <h5>Datentypen auf dem UNO (8-Bit-AVR)</h5>
        <table><thead><tr><th>Typ</th><th>Größe</th><th>Wertebereich</th><th>Typischer Einsatz</th></tr></thead><tbody>
          <tr><td><code>bool</code></td><td>1 Byte</td><td>true / false</td><td>Zustand (Pumpe an/aus)</td></tr>
          <tr><td><code>byte</code></td><td>1 Byte</td><td>0 bis 255</td><td>PWM-Wert, kleine Zähler</td></tr>
          <tr><td><code>int</code></td><td>2 Byte</td><td>−32 768 bis 32 767</td><td>Pinnummern, ADC-Werte</td></tr>
          <tr><td><code>unsigned int</code></td><td>2 Byte</td><td>0 bis 65 535</td><td>Zähler ohne Vorzeichen</td></tr>
          <tr><td><code>long</code></td><td>4 Byte</td><td>−2 147 483 648 bis 2 147 483 647</td><td>große Zähler, Produkte</td></tr>
          <tr><td><code>unsigned long</code></td><td>4 Byte</td><td>0 bis 4 294 967 295</td><td>Zeitstempel von <code>millis()</code></td></tr>
          <tr><td><code>float</code></td><td>4 Byte</td><td>Kommazahl, ca. 6–7 gültige Stellen</td><td>Spannung, Temperatur</td></tr>
        </tbody></table>
        <p><code>millis()</code> läuft nach 2³² ms ≈ 49,7 Tagen über und beginnt wieder bei 0. Die Schreibweise <code>millis() - letzteMessung &gt;= INTERVALL</code> mit <code>unsigned long</code> rechnet auch über den Überlauf hinweg richtig. Achtung beim Portieren: Auf dem ESP32 (32 Bit) ist <code>int</code> 4 Byte groß – derselbe Code kann sich dort anders verhalten.</p>
        <h5>Pull-up und Pull-down</h5>
        <p>Ein offener Eingang „floatet“ und liefert zufällige Werte. Ein Widerstand zieht ihn auf einen definierten Pegel. Mit <code>pinMode(pin, INPUT_PULLUP)</code> schaltest du den internen Pull-up ein: Den Taster legst du dann gegen GND, <strong>gedrückt = LOW</strong> (invertierte Logik).</p>
        <div class="callout merke"><strong>Merke:</strong> <code>setup()</code> einmal, <code>loop()</code> endlos. Digital heißt HIGH/LOW, <code>analogRead</code> liefert 0–1023, <code>analogWrite</code> erwartet 0–255 und funktioniert nur an den ~-Pins.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> <code>=</code> ist eine Zuweisung, <code>==</code> ein Vergleich – <code>if (zustand = HIGH)</code> ist immer wahr. Stimmt die Baudrate im seriellen Monitor nicht mit <code>Serial.begin()</code> überein, erscheint Zeichensalat. Ohne <code>pinMode(..., OUTPUT)</code> leuchtet eine LED mit <code>digitalWrite</code> nur schwach (es wird nur der interne Pull-up geschaltet). Ein <code>int</code>-Zähler auf dem UNO läuft nach 32 767 über und springt praktisch auf −32 768.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Einen kurzen Sketch oder Pseudocode lesen und die Ausgabe bestimmen (Schreibtischtest), fehlende Zeilen ergänzen oder Fehler finden. Syntaxfehler werden laut Prüfungskatalog toleriert – die Logik und die Kontrollstrukturen müssen stimmen.</div>
      `
    },
    {
      id: "schaltplan",
      title: "Schaltplan, Schaltzeichen und Steckbrett",
      exam: [],
      summary: "Schaltpläne lesen und zeichnen, wichtige Schaltzeichen und Bauteilkennzeichen, Widerstands-Farbcode, Aufbau auf dem Steckbrett und der Transistor als Schalter mit Freilaufdiode.",
      html: `
        <p>Für jedes CPS-Projekt brauchst du einen <strong>Schaltplan</strong>: Er zeigt, welcher Anschluss mit welchem verbunden ist – unabhängig davon, wie die Kabel auf dem Tisch liegen. Das <strong>Blockschaltbild</strong> zeigt dagegen nur Funktionsblöcke und Flüsse, der <strong>Steckplan</strong> den realen Aufbau auf dem Steckbrett. In der Projektdokumentation der Klasse gehören Schaltplan mit Pin-Zuordnungen <em>und</em> ein Foto des Aufbaus zusammen.</p>
        <h5>Wichtige Schaltzeichen (nach DIN EN 60617)</h5>
        <table><thead><tr><th>Bauteil</th><th>Kennzeichen</th><th>Schaltzeichen (Beschreibung)</th><th>Hinweis</th></tr></thead><tbody>
          <tr><td>Widerstand</td><td>R1, R2 …</td><td>schmales Rechteck (in US-Plänen Zickzacklinie)</td><td>Wert daneben, z. B. 220 Ω</td></tr>
          <tr><td>Potentiometer</td><td>R</td><td>Rechteck mit schrägem Pfeil bzw. Pfeil auf den Schleifer</td><td>3 Anschlüsse, einstellbarer Spannungsteiler</td></tr>
          <tr><td>Diode</td><td>D</td><td>Dreieck, das auf einen Querstrich zeigt</td><td>Strom fließt in Pfeilrichtung von der Anode zur Kathode (Strich)</td></tr>
          <tr><td>LED</td><td>D</td><td>Diodensymbol mit zwei Pfeilen nach außen</td><td>Anode = langes Bein, Kathode = kurzes Bein bzw. abgeflachte Gehäuseseite</td></tr>
          <tr><td>Taster (Schließer)</td><td>S</td><td>Kontakt, der die Leitung erst beim Betätigen schließt</td><td>federt zurück; Schalter bleibt in seiner Stellung</td></tr>
          <tr><td>Kondensator</td><td>C</td><td>zwei parallele Striche; Elko mit Pluszeichen</td><td>Elektrolytkondensator ist gepolt</td></tr>
          <tr><td>NPN-Transistor</td><td>Q bzw. T</td><td>Basis, Kollektor, Emitter; Pfeil am Emitter zeigt nach außen</td><td>elektronischer Schalter für größere Ströme</td></tr>
          <tr><td>Relais</td><td>K</td><td>Rechteck (Spule) und Schaltkontakt, gestrichelt verbunden</td><td>Spule und Lastkreis sind galvanisch getrennt</td></tr>
          <tr><td>Motor</td><td>M</td><td>Kreis mit „M“</td><td>Gleichstrommotor: „M“ mit Gleichstromzeichen</td></tr>
          <tr><td>Masse / Versorgung</td><td>GND, 5V, 3V3</td><td>Masse: Querstrich unter der Leitung; Versorgung: Pfeil oder Strich mit Spannungsangabe</td><td>Alle Punkte mit gleichem Namen sind verbunden</td></tr>
        </tbody></table>
        <h5>Regeln für Schaltpläne</h5>
        <ul>
          <li>Ein <strong>Verbindungspunkt</strong> (dicker Punkt) bedeutet: Die Leitungen sind verbunden. Kreuzen sich Leitungen <em>ohne</em> Punkt, sind sie <em>nicht</em> verbunden.</li>
          <li><strong>Netznamen</strong> (5V, GND, SDA, SCL) ersetzen lange Leitungen: Gleich benannte Anschlüsse sind elektrisch verbunden.</li>
          <li>Übersichtlich zeichnen: Versorgung oben, Masse unten, Signale von links (Eingänge, Sensoren) nach rechts (Ausgänge, Aktoren). Jedes Bauteil erhält Kennzeichen und Wert (R1 = 220 Ω).</li>
          <li>An den Controller schreibst du die <strong>Pinbezeichnungen</strong> (D9, A0, GPIO4). Ergänzend gehört eine <strong>Pin-Zuordnungstabelle</strong> in die Doku.</li>
        </ul>
        <pre class="ascii">
 Pin ~9 ────[ R1 220 Ω ]────►|──── GND
                           D1 (LED)
                     Anode ─┘   └─ Kathode
        </pre>
        <h5>Das Steckbrett (Breadboard)</h5>
        <ul>
          <li>Die <strong>Versorgungsschienen</strong> am Rand (rot = +, blau = −) sind über die ganze Länge verbunden. Bei langen Brettern sind sie manchmal in der Mitte unterbrochen – im Zweifel mit dem Multimeter auf Durchgang prüfen.</li>
          <li>Im <strong>Mittelfeld</strong> sind jeweils <strong>5 Kontakte einer Reihe</strong> quer zur Mittelrille miteinander verbunden. Die <strong>Mittelrille</strong> trennt die beiden Hälften; Module und ICs steckst du über die Rille.</li>
          <li>Die beiden Beine eines Bauteils müssen in <strong>verschiedenen</strong> Kontaktreihen stecken – sonst ist das Bauteil kurzgeschlossen und ohne Funktion.</li>
          <li>Werden 5 V und 3,3 V gleichzeitig genutzt, bekommen sie getrennte Schienen, die nie verbunden werden. Die Massen (GND) werden dagegen immer verbunden.</li>
          <li>Kabelfarben einheitlich wählen (z. B. rot = Versorgung, schwarz/blau = GND) und vor jedem Umstecken die Versorgung trennen (USB abziehen).</li>
        </ul>
        <h5>Widerstands-Farbcode</h5>
        <table><thead><tr><th>Farbe</th><th>Ziffer</th><th>Farbe</th><th>Ziffer</th></tr></thead><tbody>
          <tr><td>schwarz</td><td>0</td><td>grün</td><td>5</td></tr>
          <tr><td>braun</td><td>1</td><td>blau</td><td>6</td></tr>
          <tr><td>rot</td><td>2</td><td>violett</td><td>7</td></tr>
          <tr><td>orange</td><td>3</td><td>grau</td><td>8</td></tr>
          <tr><td>gelb</td><td>4</td><td>weiß</td><td>9</td></tr>
        </tbody></table>
        <div class="callout formel"><strong>4 Ringe:</strong> Ziffer · Ziffer · Multiplikator · Toleranz &nbsp;·&nbsp; <strong>5 Ringe:</strong> Ziffer · Ziffer · Ziffer · Multiplikator · Toleranz<br>
          Multiplikator = 10 hoch (Ziffer der Farbe), z. B. braun = × 10¹, rot = × 10²; gold = × 0,1; silber = × 0,01 &nbsp;·&nbsp; Toleranz: braun ±1 %, rot ±2 %, gold ±5 %, silber ±10 %<br>
          E12-Normreihe (±10 %): 10 · 12 · 15 · 18 · 22 · 27 · 33 · 39 · 47 · 56 · 68 · 82 (jeweils × 10ⁿ)</div>
        <div class="callout beispiel"><strong>Beispiele Farbcode:</strong><br>
          rot – rot – braun – gold → 2 | 2 | × 10¹ | ±5 % = <strong>220 Ω ± 5 %</strong> (zulässig 209–231 Ω)<br>
          braun – schwarz – rot – gold → 10 × 10² = <strong>1 kΩ</strong> ± 5 %<br>
          gelb – violett – orange – gold → 47 × 10³ = <strong>47 kΩ</strong> ± 5 %<br>
          braun – schwarz – schwarz – braun – braun (5 Ringe) → 100 × 10¹ = <strong>1 kΩ ± 1 %</strong></div>
        <div class="callout tipp"><strong>Eselsbrücke</strong> für die Reihenfolge schwarz, braun, rot, orange, gelb, grün, blau, violett, grau, weiß: „<em>Schwarze Bären rauben oft gelbe Gurken bei Vollmond ganz wild</em>“. Im Zweifel misst du den Widerstand einfach mit dem Multimeter (spannungsfrei!).</div>
        <h5>Transistor als Schalter mit Freilaufdiode</h5>
        <p>Ein Pin darf nur ca. 20 mA liefern. Für eine Relaisspule (z. B. 70 mA) schaltet ein NPN-Transistor den Strom gegen Masse („Low-Side-Schalter“). Beim Abschalten erzeugt die Spule eine hohe Gegenspannung; die <strong>Freilaufdiode</strong> parallel zur Spule (Kathode an +5 V) leitet diese Spitze ab und schützt Transistor und Controller. Fertige Relaismodule enthalten Transistor und Diode bereits.</p>
        <pre class="ascii">
   +5 V ──────┬───────────────┐
              │               │
         Relaisspule K1   Diode D1 (Kathode an +5 V)
              │               │
              ├───────────────┘
              │ C
 Pin 7 ──[ R1 ]── B   Q1 NPN (z. B. BC547)
              │ E
   GND ───────┘
        </pre>
        <div class="callout beispiel"><strong>Beispiel Basiswiderstand (vereinfacht):</strong> Relaisspule 70 mA, Stromverstärkung des Transistors laut Datenblatt mindestens B = 100, U(BE) ≈ 0,7 V, Pin-Spannung 5 V.<br>
          Mindest-Basisstrom: I(B) = 70 mA ÷ 100 = 0,7 mA. Damit der Transistor sicher voll durchschaltet, rechnet man mit einem Übersteuerungsfaktor von 3: I(B) = 3 × 0,7 mA = 2,1 mA.<br>
          R1 = (5 V − 0,7 V) ÷ 2,1 mA = 4,3 V ÷ 0,0021 A ≈ 2048 Ω → nächstkleinerer E12-Wert <strong>1,8 kΩ</strong> (kleiner wählen, damit der Basisstrom sicher reicht): I(B) = 4,3 V ÷ 1800 Ω ≈ 2,39 mA – für den Pin unkritisch. Am ESP32 mit 3,3 V: (3,3 V − 0,7 V) ÷ 2,1 mA ≈ 1238 Ω → 1,2 kΩ.</div>
        <div class="callout merke"><strong>Merke:</strong> Punkt = verbunden, Kreuzung ohne Punkt = nicht verbunden. Auf dem Steckbrett sind 5 Kontakte einer Reihe verbunden, die Mittelrille trennt. LED: langes Bein (Anode) zum Pin bzw. nach +, kurzes Bein (Kathode) nach GND, immer mit Vorwiderstand. Induktive Lasten (Relais, Motor) nur über Transistor/Treiber und mit Freilaufdiode.</div>
        <div class="callout achtung"><strong>Typische Aufbaufehler:</strong> LED verpolt (leuchtet nicht), beide Beine eines Bauteils in derselben Kontaktreihe, fehlende gemeinsame Masse zwischen zwei Versorgungen, 5-V- und 3,3-V-Schiene verbunden, Freilaufdiode falsch herum (dann schließt sie die Versorgung kurz, sobald der Transistor schaltet).</div>
        <div class="callout pruefung"><strong>So kommt es in Klassenarbeit und Projekt dran:</strong> Farbcode eines Widerstands bestimmen, einen Schaltplan zu einer Beschreibung zeichnen oder einen Steckplan auf Fehler prüfen, eine Pin-Zuordnungstabelle anlegen und begründen, wozu Vorwiderstand, Transistor und Freilaufdiode dienen. In der Projektpräsentation erklärst du deinen Aufbau anhand des Schaltplans.</div>
      `
    },
    {
      id: "cps-software",
      title: "CPS-Software: Bibliotheken, Abfragerhythmus, Fehlersuche",
      exam: ["AP2"],
      summary: "Wie Software auf Sensoren und Aktoren zugreift: Bibliotheken nutzen, Abfragerhythmus planen, millis() statt delay(), Flanken und Entprellen, typische Fehler finden.",
      html: `
        <p>Der Prüfungskatalog verlangt für CPS ausdrücklich: geeignete Sensoren/Aktoren auswählen, <strong>Bibliotheken nutzen</strong>, den <strong>Abfragerhythmus planen</strong> und wissen, <strong>wie die Software auf Sensoren und Aktoren zugreift</strong>.</p>
        <h5>Zugriff auf Sensoren und Aktoren</h5>
        <ul>
          <li><strong>Direkt über Pins:</strong> binäre Signale mit <code>digitalRead/digitalWrite</code>, analoge Spannungen mit <code>analogRead</code>, PWM mit <code>analogWrite</code>.</li>
          <li><strong>Über ein Busprotokoll:</strong> I²C (<code>Wire</code>), SPI (<code>SPI</code>), 1-Wire (<code>OneWire</code>), UART (<code>Serial</code>).</li>
          <li><strong>Über eine Bauteil-Bibliothek:</strong> Sie kapselt Protokoll und Umrechnung, z. B. <code>DHT</code>, <code>DallasTemperature</code>, <code>Servo</code>, <code>Keypad</code>. Installation über den Bibliotheksverwalter der IDE.</li>
        </ul>
        <pre><code>#include &lt;DHT.h&gt;              // Bibliothek einbinden
DHT dht(2, DHT22);              // Sensor an Pin 2, Typ DHT22

void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  float t = dht.readTemperature();   // Bibliothek erledigt das Protokoll
  if (isnan(t)) {
    Serial.println("Sensorfehler");  // Fehlerfall behandeln!
  } else {
    Serial.println(t);
  }
  delay(2000);                       // DHT22: höchstens alle 2 s
}</code></pre>
        <p>Bei Bibliotheken prüfst du Herkunft, Pflegezustand, Lizenz und Kompatibilität mit deinem Board – und führst sie im Quellenverzeichnis der Dokumentation auf.</p>
        <h5>Abfragerhythmus planen</h5>
        <table><thead><tr><th>Einflussfaktor</th><th>Bedeutung</th></tr></thead><tbody>
          <tr><td>Dynamik der Messgröße</td><td>Raumtemperatur ändert sich in Minuten, Abstand beim Einparken in Millisekunden</td></tr>
          <tr><td>Grenzen des Sensors</td><td>DHT22 alle 2 s, DS18B20 braucht bei 12 Bit bis 750 ms pro Wandlung</td></tr>
          <tr><td>Reaktionszeit</td><td>Wie schnell muss der Aktor reagieren? (Sicherheitsfunktionen: sehr schnell)</td></tr>
          <tr><td>Energie</td><td>Jede Messung und jede Funkübertragung kostet Akkulaufzeit</td></tr>
          <tr><td>Datenmenge</td><td>Messungen pro Tag × Nachrichtengröße → Speicher und Funkbudget</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel Datenmenge:</strong> Ein Sensor sendet alle 5 s eine MQTT-Nachricht mit 60 Byte. Pro Tag: 86 400 s ÷ 5 s = 17 280 Nachrichten × 60 Byte = 1 036 800 Byte ÷ 2²⁰ ≈ <strong>0,99 MiB</strong>. Bei einem Wert pro Minute wären es nur 1440 × 60 Byte = 86 400 Byte ≈ 84,4 KiB.</div>
        <h5>Polling oder Interrupt?</h5>
        <p><strong>Polling</strong> fragt den Sensor regelmäßig in <code>loop()</code> ab – einfach, aber kurze Impulse zwischen zwei Abfragen gehen verloren. Ein <strong>Interrupt</strong> unterbricht das Programm sofort bei einer Flanke am Pin (UNO: D2, D3) und ruft eine kurze Funktion auf – ideal für Zähler oder Not-Aus-Taster.</p>
        <h5>millis() statt delay()</h5>
        <p><code>delay()</code> blockiert: Während der Pause reagiert der Controller auf nichts. Mit <code>millis()</code> merkt man sich den Zeitpunkt der letzten Aktion und arbeitet mehrere Aufgaben „gleichzeitig“ ab.</p>
        <pre><code>const unsigned long INTERVALL = 2000;
unsigned long letzteMessung = 0;

void loop() {
  if (millis() - letzteMessung &gt;= INTERVALL) {
    letzteMessung = millis();
    messenUndSenden();        // alle 2 s
  }
  pruefeTaster();             // läuft ständig, nichts blockiert
}</code></pre>
        <p>Mechanische Taster <strong>prellen</strong>: Beim Drücken entstehen für einige Millisekunden mehrere Flanken. Abhilfe: Zustand erst übernehmen, wenn er ca. 20–50 ms stabil ist (Entprellen per Software).</p>
        <h5>Typische Fehler finden</h5>
        <table><thead><tr><th>Fehler</th><th>Auswirkung</th><th>Korrektur</th></tr></thead><tbody>
          <tr><td><code>float u = wert * 5 / 1024;</code></td><td>Ganzzahldivision: bei wert = 512 ergibt sich 2 statt 2,5</td><td><code>wert * 5.0 / 1024.0</code></td></tr>
          <tr><td><code>int</code> für große Werte (UNO: 16 Bit, bis 32 767)</td><td>Überlauf, z. B. bei <code>millis()</code></td><td><code>long</code> bzw. <code>unsigned long</code></td></tr>
          <tr><td><code>if (x = 5)</code></td><td>Zuweisung statt Vergleich, immer wahr</td><td><code>if (x == 5)</code></td></tr>
          <tr><td>Grenzwert mit <code>&gt;</code> statt <code>&gt;=</code></td><td>Aktion genau am Grenzwert fehlt</td><td>Anforderung prüfen, Extremwerte testen</td></tr>
          <tr><td>Fehlender Sensor-Fehlerfall</td><td>Aktor reagiert auf Unsinnswerte</td><td>Plausibilität prüfen, sicheren Zustand wählen</td></tr>
        </tbody></table>
        <p>Werkzeuge: <strong>print-Debugging</strong> mit <code>Serial.println()</code>, Serial Plotter für Messkurven, Schreibtischtest mit Wertetabelle, Multimeter für Pegel am Pin.</p>
        <div class="callout tipp"><strong>Tipp Raspberry Pi:</strong> In Python greifst du mit der Bibliothek <code>gpiozero</code> auf GPIOs zu (z. B. <code>MotionSensor(4)</code>, <code>LED(17)</code>). Die ältere Bibliothek RPi.GPIO, die viele Datenblatt-Beispiele (auch das zum HC-SR501) noch verwenden, unterstützt den Raspberry Pi 5 nicht mehr direkt – dort nimmst du gpiozero.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> „So oft wie möglich messen“ ist keine gute Begründung. Der Abfragerhythmus richtet sich nach der Dynamik der Größe, den Sensorgrenzen, der geforderten Reaktionszeit und dem Energie- und Datenbudget.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Planen Sie einen geeigneten Abfragerhythmus und begründen Sie ihn“, „Nennen Sie zwei Vorteile einer Bibliothek“, „Finden Sie zwei Fehler im Code“ oder „Ergänzen Sie den Pseudocode um eine Schwellwertabfrage“.</div>
      `
    },
    {
      id: "schnittstellen",
      title: "Schnittstellen und Bussysteme: GPIO, UART, I²C, SPI, 1-Wire, CAN",
      exam: ["AP2"],
      summary: "Drahtgebundene Schnittstellen zwischen Controller, Sensoren und Steuergeräten vergleichen, Übertragungszeiten und Adressen berechnen und Pegel anpassen.",
      html: `
        <p>Zwischen Mikrocontroller, Sensoren und anderen Steuergeräten werden Daten über <strong>serielle Schnittstellen</strong> übertragen. Wichtige Unterscheidungsmerkmale:</p>
        <ul>
          <li><strong>synchron</strong> (eigene Taktleitung) oder <strong>asynchron</strong> (beide Seiten vereinbaren die Geschwindigkeit, z. B. 9600 Baud)</li>
          <li><strong>Punkt-zu-Punkt</strong> oder <strong>Bus</strong> mit mehreren Teilnehmern (Adressierung nötig)</li>
          <li><strong>Vollduplex</strong> (gleichzeitig senden und empfangen) oder <strong>Halbduplex</strong> (abwechselnd)</li>
        </ul>
        <p><strong>GPIO</strong> (General Purpose Input/Output) sind frei programmierbare Pins, die als digitaler Ein- oder Ausgang dienen oder eine Sonderfunktion (UART, I²C, SPI, PWM) übernehmen. Wichtig ist der <strong>Logikpegel</strong>: Arduino UNO 5 V, ESP32 und Raspberry Pi 3,3 V.</p>
        <h5>Vergleich der Schnittstellen</h5>
        <table><thead><tr><th>Schnittstelle</th><th>Leitungen</th><th>Takt / Duplex</th><th>Teilnehmer</th><th>Tempo (typisch)</th><th>Einsatz</th></tr></thead><tbody>
          <tr><td>UART</td><td>TX, RX, GND</td><td>asynchron, vollduplex</td><td>Punkt-zu-Punkt</td><td>9600–115 200 Baud</td><td>serieller Monitor, GPS, Funkmodule</td></tr>
          <tr><td>I²C</td><td>SDA (Daten), SCL (Takt), GND</td><td>synchron, halbduplex</td><td>Bus, 7-Bit-Adresse je Gerät</td><td>100 kbit/s, 400 kbit/s</td><td>Displays, Umweltsensoren, Portexpander</td></tr>
          <tr><td>SPI</td><td>SCLK, MOSI, MISO, CS je Gerät</td><td>synchron, vollduplex</td><td>ein Controller, Auswahl über CS</td><td>einige MHz bis &gt; 10 MHz</td><td>SD-Karte, schnelle ADCs, Displays</td></tr>
          <tr><td>1-Wire</td><td>Daten (DQ), GND</td><td>asynchron, halbduplex</td><td>Bus, 64-Bit-ID je Sensor</td><td>ca. 16 kbit/s</td><td>DS18B20-Temperatursensoren</td></tr>
          <tr><td>CAN</td><td>CAN_H, CAN_L (differenziell)</td><td>asynchron, halbduplex</td><td>Multi-Master-Bus</td><td>bis 1 Mbit/s (CAN FD mehr)</td><td>Fahrzeuge, Maschinen</td></tr>
        </tbody></table>
        <h5>Details, die geprüft werden</h5>
        <ul>
          <li><strong>UART:</strong> TX des einen Geräts an RX des anderen (gekreuzt), gemeinsame Masse, gleiche Baudrate. Ein Zeichen im Format <strong>8N1</strong> besteht aus 1 Startbit + 8 Datenbits + 1 Stoppbit = 10 Bit.</li>
          <li><strong>I²C:</strong> Beide Leitungen brauchen Pull-up-Widerstände. Jedes Gerät hat eine Adresse; zwei Geräte mit gleicher Adresse stören sich. Oft lässt sich die Adresse über Lötbrücken oder Jumper (A0–A2) ändern.</li>
          <li><strong>SPI:</strong> Keine Adressen – jedes Gerät bekommt eine eigene Chip-Select-Leitung. Dafür sehr schnell und vollduplex.</li>
          <li><strong>1-Wire:</strong> Eine Datenleitung mit 4,7-kΩ-Pull-up; viele Sensoren parallel, jeder über seine werkseitige 64-Bit-Seriennummer ansprechbar.</li>
          <li><strong>CAN:</strong> Differenzielle Übertragung → störfest. Bei gleichzeitigem Senden gewinnt die Nachricht mit der <strong>niedrigeren ID</strong> (höhere Priorität), ohne dass Daten zerstört werden. An beiden Busenden sitzt je ein 120-Ω-Abschlusswiderstand.</li>
        </ul>
        <div class="callout beispiel"><strong>Beispiel 1 – UART-Übertragungszeit:</strong> Die Nachricht „T=23.5“ plus Zeilenumbruch (\\r\\n) hat 8 Zeichen. Bei 9600 Baud und 8N1: 8 × 10 bit = 80 bit ÷ 9600 bit/s ≈ <strong>8,33 ms</strong>. Nutzdatenrate: 9600 ÷ 10 = 960 Byte/s.<br><br>
        <strong>Beispiel 2 – I²C-Adresse:</strong> Ein Portexpander PCF8574 hat die Adresse 0100 A2 A1 A0 (binär). Mit A2 = 1, A1 = 1, A0 = 0 ergibt sich 0100110₂ = <strong>0x26</strong> (dezimal 38). A2 = A1 = A0 = 1 → 0100111₂ = 0x27. Ob ein gesteckter Jumper auf dem Modul „1“ (an VCC) oder „0“ (an GND) bedeutet, hängt von der Platine ab – im Datenblatt bzw. mit dem I²C-Scanner prüfen.<br><br>
        <strong>Beispiel 3 – CAN prüfen:</strong> Zwei 120-Ω-Abschlüsse liegen parallel: 1 ÷ (1/120 + 1/120) = <strong>60 Ω</strong>. Misst du bei ausgeschaltetem Bus zwischen CAN_H und CAN_L 120 Ω, fehlt ein Abschluss.</div>
        <h5>Pegel anpassen: 5 V an 3,3 V</h5>
        <p>Liefert ein Sensor 5 V (z. B. Echo des HC-SR04), ein ESP32 verträgt aber nur 3,3 V, hilft ein <strong>Spannungsteiler</strong> oder ein Pegelwandler-Modul (bei I²C bidirektional).</p>
        <div class="callout formel">U(aus) = U(ein) × R2 ÷ (R1 + R2) &nbsp;·&nbsp; mit R1 = 1 kΩ, R2 = 2 kΩ: 5 V × 2 ÷ 3 ≈ 3,33 V</div>
        <h5>Industrie: Feldbus, Industrial Ethernet, OPC UA</h5>
        <p>In Fertigungsanlagen verbinden Feldbusse (PROFIBUS, Modbus) und Industrial-Ethernet-Systeme (PROFINET, EtherCAT) Sensoren, Aktoren und SPS echtzeitfähig. <strong>OPC UA</strong> ist ein herstellerunabhängiger Kommunikationsstandard (IEC 62541) mit Informationsmodell und eingebauter Sicherheit, der Maschinendaten an MES, ERP oder Cloud liefert. Für längere Strecken im Feld wird statt UART oft <strong>RS-485</strong> (differenziell) genutzt.</p>
        <div class="callout merke"><strong>Merke:</strong> UART = 2 Datenleitungen gekreuzt, ohne Takt. I²C = 2 Leitungen mit Adressen und Pull-ups. SPI = 4 Leitungen, pro Gerät ein CS, am schnellsten. 1-Wire = 1 Datenleitung mit ID. CAN = differenziell, Priorität über ID. Und immer: <strong>gemeinsame Masse</strong>.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Bei UART wird TX mit RX verbunden, nicht TX mit TX. Die DHT-Sensoren nutzen <em>kein</em> 1-Wire, sondern ein eigenes Eindrahtprotokoll. Und: Baud ist die Symbolrate – bei 8N1 sind nur 8 von 10 Bit Nutzdaten.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Vergleichen Sie I²C und SPI anhand von drei Kriterien“, „Berechnen Sie die Übertragungsdauer bei 9600 Baud“, „Erläutern Sie, warum im Fahrzeug CAN eingesetzt wird“ oder „Warum darf der Echo-Pin nicht direkt an den ESP32?“.</div>
      `
    },
    {
      id: "iot-funk",
      title: "IoT-Funk: WLAN, BLE, Zigbee, Z-Wave, LoRaWAN, NB-IoT",
      exam: ["AP2"],
      summary: "Drahtlose Übertragungstechniken für CPS nach Reichweite, Datenrate, Energiebedarf und Topologie vergleichen und begründet auswählen.",
      html: `
        <p>Nicht jedes CPS kann verkabelt werden: Felder sind weitläufig, Wearables bewegen sich, Sensoren sitzen im Keller. Für die Auswahl der Funktechnik gilt ein Grundkonflikt: <strong>Reichweite, Datenrate und geringer Energiebedarf</strong> lassen sich nicht gleichzeitig maximieren.</p>
        <h5>Auswahlkriterien</h5>
        <ul>
          <li><strong>Reichweite</strong> und Gebäudedurchdringung (niedrige Frequenzen dringen besser durch Wände)</li>
          <li><strong>Datenrate</strong> (Messwert alle 15 min oder Videostream?) und <strong>Latenz</strong></li>
          <li><strong>Energiebedarf</strong> (Netzteil oder Batterie über Jahre?)</li>
          <li><strong>Topologie:</strong> Stern (alle zum Access Point/Gateway) oder <strong>Mesh</strong> (Geräte leiten weiter, Netz wächst mit)</li>
          <li><strong>Frequenz und Kosten:</strong> lizenzfreie ISM/SRD-Bänder oder Mobilfunk mit SIM und Vertrag; Gateway nötig?</li>
          <li><strong>IP-Fähigkeit, Interoperabilität, Sicherheit</strong> (Verschlüsselung, Authentifizierung)</li>
        </ul>
        <h5>Vergleichstabelle</h5>
        <table><thead><tr><th>Technik</th><th>Frequenz (EU)</th><th>Reichweite</th><th>Datenrate</th><th>Energie</th><th>Topologie</th><th>Typischer Einsatz</th></tr></thead><tbody>
          <tr><td>WLAN (IEEE 802.11)</td><td>2,4 / 5 / 6 GHz</td><td>ca. 20–50 m im Gebäude</td><td>hoch (Mbit/s bis Gbit/s)</td><td>hoch</td><td>Stern (Access Point)</td><td>Kamera, Gateway, ESP32 mit Netzteil</td></tr>
          <tr><td>Bluetooth LE</td><td>2,4 GHz</td><td>ca. 10–50 m</td><td>1–2 Mbit/s</td><td>sehr gering</td><td>Stern (Mesh möglich)</td><td>Fitness-Tracker, Beacons</td></tr>
          <tr><td>Zigbee (IEEE 802.15.4)</td><td>2,4 GHz</td><td>ca. 10–100 m je Hop</td><td>250 kbit/s</td><td>sehr gering</td><td>Mesh</td><td>Lampen, Schalter, Sensoren</td></tr>
          <tr><td>Z-Wave</td><td>868 MHz</td><td>ca. 30–100 m je Hop</td><td>bis 100 kbit/s</td><td>sehr gering</td><td>Mesh</td><td>Türschlösser, Heizkörperthermostate</td></tr>
          <tr><td>LoRaWAN</td><td>868 MHz</td><td>einige km (Stadt) bis über 10 km (Land)</td><td>sehr gering (ca. 0,25–50 kbit/s)</td><td>extrem gering, Batterie hält Jahre</td><td>Stern von Sternen über Gateways</td><td>Smart Farming, Zähler, Parkplatzsensoren</td></tr>
          <tr><td>NB-IoT / LTE-M</td><td>Mobilfunkbänder (lizenziert)</td><td>km, sehr gute Gebäudedurchdringung</td><td>gering (NB-IoT) bis ca. 1 Mbit/s (LTE-M)</td><td>gering (Stromsparmodus)</td><td>Stern über Mobilfunkmast</td><td>Zähler im Keller, Tracking</td></tr>
        </tbody></table>
        <h5>Weitere Begriffe</h5>
        <ul>
          <li><strong>Thread:</strong> IPv6-fähiges Mesh-Netz auf Basis von IEEE 802.15.4.</li>
          <li><strong>Matter:</strong> herstellerübergreifender Smart-Home-Anwendungsstandard, der über WLAN, Thread und Ethernet läuft.</li>
          <li><strong>5G-Campusnetz:</strong> privates Mobilfunknetz auf dem Firmengelände für Industrie 4.0 mit geringer Latenz.</li>
          <li><strong>ESP-NOW:</strong> herstellereigenes Funkprotokoll von Espressif für direkte Kommunikation zwischen ESP-Boards ohne Router.</li>
        </ul>
        <h5>LoRaWAN im Detail (Smart-Farming-Beispiel)</h5>
        <p>Sensorknoten senden kleine Pakete per Funk an ein oder mehrere <strong>Gateways</strong>. Diese leiten die Pakete über IP (Ethernet, Mobilfunk) an einen <strong>Netzwerkserver</strong> weiter, der sie der Anwendung (Controller, Dashboard) übergibt. Die Nutzdaten sind mit AES-128 verschlüsselt. Im 868-MHz-Band darf ein Gerät nur einen kleinen Teil der Zeit senden (Duty Cycle, meist 1 %) – LoRaWAN eignet sich deshalb für wenige Byte in großen Abständen, nicht für Steuerbefehle im Sekundentakt.</p>
        <div class="callout beispiel"><strong>Beispiel Auswahl:</strong> Die Nordlicht Agrar GmbH in Meldorf will Bodenfeuchte auf 40 ha Kohlfeldern messen, Stromanschluss gibt es nicht, ein Wert alle 15 Minuten genügt.<br>→ <strong>LoRaWAN</strong>: Reichweite im km-Bereich, Batterielaufzeit von Jahren, geringe Datenmenge passt zur niedrigen Datenrate. WLAN scheidet aus (Reichweite, Energie), BLE ebenfalls (Reichweite). NB-IoT wäre möglich, kostet aber SIM-Gebühren pro Sensor.</div>
        <div class="callout merke"><strong>Merke:</strong> Viel Daten, Netzteil vorhanden → WLAN. Körpernah und Smartphone → BLE. Smart Home mit vielen Batteriegeräten → Zigbee, Z-Wave oder Thread (Mesh). Große Fläche, wenig Daten → LoRaWAN. Keller oder bundesweit ohne eigene Infrastruktur → NB-IoT/LTE-M.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> <em>LoRa</em> ist nur die Funkmodulation (physikalische Schicht), <em>LoRaWAN</em> das Netzwerkprotokoll darüber. Bluetooth LE ist nicht dasselbe wie Bluetooth Classic (Audio). Und 2,4-GHz-Techniken (WLAN, BLE, Zigbee) können sich gegenseitig stören.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Wählen Sie eine geeignete Funktechnik aus und begründen Sie Ihre Entscheidung mit zwei Kriterien“ oder „Vergleichen Sie Stern- und Mesh-Topologie“. Beziehe dich immer auf die Angaben im Szenario (Fläche, Energie, Datenmenge).</div>
      `
    },
    {
      id: "iot-protokolle",
      title: "IoT-Protokolle (MQTT, REST, CoAP) und Edge/Fog/Cloud",
      exam: ["AP2"],
      summary: "Publish/Subscribe mit MQTT (Broker, Topics, Wildcards, QoS, Retain, Last Will), Request/Response mit HTTP/REST und CoAP sowie die Verteilung der Verarbeitung auf Edge, Fog und Cloud.",
      html: `
        <p>Funk und Bus transportieren Bits – welche Nachrichten ausgetauscht werden, legt ein <strong>Anwendungsprotokoll</strong> fest. Im IoT sind zwei Muster verbreitet: <strong>Publish/Subscribe</strong> (MQTT) und <strong>Request/Response</strong> (HTTP/REST, CoAP).</p>
        <h5>MQTT – Publish/Subscribe über einen Broker</h5>
        <p>MQTT ist ein schlankes Protokoll über TCP (Port <strong>1883</strong>, mit TLS <strong>8883</strong>). Clients schicken Nachrichten nicht direkt an Empfänger, sondern <em>veröffentlichen</em> (publish) sie unter einem <strong>Topic</strong> beim <strong>Broker</strong> (z. B. Mosquitto). Alle Clients, die das Topic <em>abonniert</em> (subscribe) haben, erhalten sie vom Broker – etwa Dashboard, Datenbank und Lüfter-Controller gleichzeitig. Sender und Empfänger kennen sich nicht (Entkopplung). Verbreitet sind die OASIS-Standards MQTT 3.1.1 und MQTT 5.0.</p>
        <h5>Topics und Wildcards</h5>
        <p>Topics sind hierarchisch mit <code>/</code> aufgebaut, Groß-/Kleinschreibung zählt. Zwei Platzhalter beim Abonnieren:</p>
        <table><thead><tr><th>Abonnement</th><th>Bedeutung</th><th>passt auf</th><th>passt nicht auf</th></tr></thead><tbody>
          <tr><td><code>heide/halle1/+/temp</code></td><td><code>+</code> = genau <strong>eine</strong> Ebene</td><td><code>heide/halle1/linie2/temp</code></td><td><code>heide/halle1/linie2/ofen/temp</code></td></tr>
          <tr><td><code>heide/halle1/#</code></td><td><code>#</code> = beliebig viele Ebenen, nur am Ende</td><td><code>heide/halle1/linie2/temp</code>, <code>heide/halle1/status</code></td><td><code>heide/halle2/status</code></td></tr>
        </tbody></table>
        <h5>Quality of Service (QoS)</h5>
        <table><thead><tr><th>QoS</th><th>Zusicherung</th><th>Ablauf</th><th>Einsatz</th></tr></thead><tbody>
          <tr><td>0</td><td>höchstens einmal (at most once)</td><td>senden und vergessen, keine Bestätigung</td><td>häufige Messwerte, Verlust verkraftbar</td></tr>
          <tr><td>1</td><td>mindestens einmal (at least once)</td><td>Bestätigung (PUBACK); Duplikate möglich</td><td>Standard für wichtige Werte</td></tr>
          <tr><td>2</td><td>genau einmal (exactly once)</td><td>vierstufiger Handshake, am langsamsten</td><td>Zählerstände, Abrechnung, Befehle</td></tr>
        </tbody></table>
        <ul>
          <li><strong>Retained Message:</strong> Der Broker speichert die letzte Nachricht eines Topics und liefert sie neuen Abonnenten sofort.</li>
          <li><strong>Last Will:</strong> Nachricht, die der Broker veröffentlicht, wenn ein Client unerwartet wegbricht („offline“).</li>
          <li><strong>Keep Alive:</strong> Meldeintervall, an dem der Broker Ausfälle erkennt.</li>
        </ul>
        <pre><code># Temperaturen aller Linien in Halle 1 abonnieren (TLS)
mosquitto_sub -h broker.local -p 8883 --cafile ca.crt -t "heide/halle1/+/temp" -v
# Messwert mit QoS 1 als retained veröffentlichen
mosquitto_pub -h broker.local -p 8883 --cafile ca.crt -t "heide/halle1/linie2/temp" -m "23.5" -q 1 -r</code></pre>
        <h5>HTTP/REST</h5>
        <p>Bei <strong>REST</strong> fragt ein Client eine Ressource per URL ab (Request/Response über HTTP/HTTPS): <code>GET</code> lesen, <code>POST</code> anlegen, <code>PUT</code> ändern, <code>DELETE</code> löschen. Antworten tragen Statuscodes (200 OK, 201 Created, 401, 404, 500) und meist <strong>JSON</strong>, z. B. <code>{"sensor": 42, "wert": 23.5}</code>. REST ist zustandslos und ideal für Konfiguration und externe Quellen wie eine Wetter-API. Für viele kleine Messwerte ist der Overhead aber groß, und der Client muss aktiv nachfragen (Polling).</p>
        <h5>CoAP</h5>
        <p>Das <strong>Constrained Application Protocol</strong> überträgt REST-ähnliche Anfragen über <strong>UDP</strong> (Port 5683, mit DTLS 5684) – für sehr kleine Geräte und verlustbehaftete Funknetze; mit „Observe“ abonniert ein Client Änderungen.</p>
        <table><thead><tr><th>Kriterium</th><th>MQTT</th><th>HTTP/REST</th><th>CoAP</th></tr></thead><tbody>
          <tr><td>Muster</td><td>Publish/Subscribe über Broker</td><td>Request/Response</td><td>Request/Response (+ Observe)</td></tr>
          <tr><td>Transport / Port</td><td>TCP 1883, TLS 8883</td><td>TCP 80, HTTPS 443</td><td>UDP 5683, DTLS 5684</td></tr>
          <tr><td>Overhead</td><td>sehr gering</td><td>hoch</td><td>sehr gering</td></tr>
          <tr><td>Stärke</td><td>viele Sensoren, Ereignisse, 1:n-Verteilung</td><td>Web-APIs, Konfiguration, Integration</td><td>sehr kleine Geräte, UDP-Netze</td></tr>
        </tbody></table>
        <h5>Wo wird verarbeitet? Edge, Fog, Cloud</h5>
        <table><thead><tr><th>Ebene</th><th>Ort</th><th>Latenz</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td><strong>Edge</strong></td><td>im Gerät oder Gateway direkt an der Anlage</td><td>sehr gering</td><td>Steuergerät des Notbremsassistenten; ESP32 mittelt Messwerte</td></tr>
          <tr><td><strong>Fog</strong></td><td>lokale Zwischenschicht im Betrieb</td><td>gering</td><td>Hallenserver mit Broker, Datenbank und Dashboard</td></tr>
          <tr><td><strong>Cloud</strong></td><td>zentrales Rechenzentrum im Internet</td><td>höher, abhängig von der Verbindung</td><td>Langzeitanalyse, KI, App-Zugriff von unterwegs</td></tr>
        </tbody></table>
        <p>Sicherheitskritische Entscheidungen gehören an die Edge: Sie dürfen nicht auf das Internet warten, und die Anlage muss bei Netzausfall weiterlaufen. Die Edge reduziert außerdem Datenmengen (Mittelwerte statt Rohdaten) und hält personenbezogene Daten lokal. Die Cloud bietet Speicher, Skalierung und Auswertung – Serverstandort und Auftragsverarbeitung nach DSGVO beachten.</p>
        <div class="callout beispiel"><strong>Beispiel Latenz:</strong> 100 km/h ÷ 3,6 ≈ 27,8 m/s. Ein Cloud-Umweg von 100 ms bedeutet 27,8 m/s × 0,1 s ≈ <strong>2,8 m</strong> Fahrt ohne Reaktion – deshalb entscheidet das Steuergerät im Fahrzeug selbst.</div>
        <div class="callout merke"><strong>Merke:</strong> MQTT: Broker in der Mitte, Topics mit <code>/</code>, <code>+</code> eine Ebene, <code>#</code> alle darunter, QoS 0/1/2 = höchstens/mindestens/genau einmal. REST: Ressource per URL, GET/POST/PUT/DELETE, Antwort meist JSON. Schnell und sicherheitskritisch → Edge; speichern und auswerten → Cloud.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Der Broker ist der Vermittler, nicht der Empfänger. QoS 1 kann Duplikate erzeugen – für genau eine Zustellung QoS 2. Ohne TLS und Anmeldung kann jeder im Netz Topics mitlesen und Befehle einspielen. „Alles in die Cloud“ ist falsch, wenn Echtzeit oder Ausfallsicherheit gefordert sind.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Erläutern Sie das Publish/Subscribe-Prinzip“, „Welche Topics empfängt ein Client mit dem Abonnement …?“, „Wählen Sie eine QoS-Stufe und begründen Sie“, „Vergleichen Sie MQTT mit REST“ oder „Begründen Sie, warum die Auswertung lokal erfolgen sollte“.</div>
      `
    },
    {
      id: "energie",
      title: "Stromversorgung, Energiebedarf und Messen",
      exam: ["AP1", "AP2"],
      summary: "Elektrotechnische Grundlagen für CPS: ohmsches Gesetz, Leistung, Energie, Vorwiderstand, Spannungsteiler, Akkulaufzeit, Wirkungsgrad und Messen mit dem Multimeter.",
      html: `
        <p>Jedes CPS braucht eine passende Energieversorgung. Du musst den Strombedarf aller Komponenten abschätzen, eine Quelle auswählen (USB, Netzteil, Akku, Solar, PoE), Bauteile richtig dimensionieren und die Werte anschließend nachmessen.</p>
        <div class="callout formel"><strong>Grundformeln</strong><br>
          Ohmsches Gesetz: U = R × I &nbsp;·&nbsp; Leistung: P = U × I = I² × R = U² ÷ R<br>
          Energie: W = P × t &nbsp;·&nbsp; Ladung (Akkukapazität): Q = I × t &nbsp;·&nbsp; Akkuenergie in Wh = Kapazität in Ah × Nennspannung in V<br>
          Wirkungsgrad: η = P(ab) ÷ P(zu) &nbsp;·&nbsp; Laufzeit t = nutzbare Kapazität ÷ mittlerer Strom<br>
          Reihenschaltung: R = R1 + R2, Strom überall gleich, Spannungen addieren sich<br>
          Parallelschaltung: 1/R = 1/R1 + 1/R2, Spannung überall gleich, Ströme addieren sich</div>
        <h5>LED-Vorwiderstand</h5>
        <p>Eine LED braucht einen Widerstand, der den Strom begrenzt. Am Widerstand fällt die Differenz zwischen Versorgungs- und LED-Flussspannung ab.</p>
        <div class="callout beispiel"><strong>Beispiel:</strong> Rote LED (Flussspannung U(F) = 2,0 V, I = 20 mA) an einem 5-V-Pin.<br>R = (5 V − 2,0 V) ÷ 0,02 A = <strong>150 Ω</strong>. Mit dem im Unterricht genutzten 220-Ω-Widerstand fließen I = 3 V ÷ 220 Ω ≈ 13,6 mA – etwas dunkler, aber pinschonend. Leistung am Widerstand: 3 V × 0,0136 A ≈ 0,041 W → ein 0,25-W-Widerstand reicht.</div>
        <h5>Energiebudget eines Projekts</h5>
        <div class="callout beispiel"><strong>Beispiel Powerbank:</strong> Arduino UNO (ca. 50 mA) + 3 LEDs à 15 mA + Relaismodul (70 mA) + HC-SR04 (15 mA) = 50 + 45 + 70 + 15 = <strong>180 mA</strong> bei 5 V → P = 5 V × 0,18 A = 0,9 W.<br>
          Powerbank 10 000 mAh bei 3,7 V Zellspannung → 10 Ah × 3,7 V = 37 Wh. Wandler-Wirkungsgrad 85 % → 37 Wh × 0,85 = 31,45 Wh nutzbar.<br>
          Laufzeit t = 31,45 Wh ÷ 0,9 W ≈ <strong>34,9 h</strong>.</div>
        <div class="callout beispiel"><strong>Beispiel Tiefschlaf (Duty Cycle):</strong> Ein ESP32-Sensorknoten misst und funkt alle 10 min (600 s) für 2 s mit 80 mA und schläft sonst mit 10 µA (0,01 mA).<br>
          Mittlerer Strom = (80 mA × 2 s + 0,01 mA × 598 s) ÷ 600 s = (160 + 5,98) ÷ 600 ≈ <strong>0,277 mA</strong>.<br>
          Akku 2000 mAh: 2000 mAh ÷ 0,277 mA ≈ 7220 h ≈ 301 Tage (ideal). Rechnet man nur 80 % nutzbare Kapazität: 1600 mAh ÷ 0,277 mA ≈ 5776 h ≈ <strong>241 Tage</strong>.</div>
        <h5>Spannung wandeln: Linearregler oder Schaltregler?</h5>
        <p>Ein <strong>Linearregler</strong> „verheizt“ die überschüssige Spannung. Beispiel: 12 V auf 5 V bei 200 mA → P(zu) = 12 V × 0,2 A = 2,4 W, P(ab) = 5 V × 0,2 A = 1,0 W, η ≈ 41,7 %, <strong>1,4 W Wärme</strong>. Ein <strong>Schaltregler</strong> (Step-down/Buck) erreicht oft rund 90 % und ist für Akkubetrieb die bessere Wahl.</p>
        <h5>Versorgungsquellen</h5>
        <table><thead><tr><th>Quelle</th><th>Kennwerte</th><th>Hinweis</th></tr></thead><tbody>
          <tr><td>USB</td><td>5 V; USB 2.0 bis 500 mA, USB 3.x bis 900 mA; USB-C bis 3 A bei 5 V, mit USB Power Delivery auch höhere Spannungen (bis 240 W)</td><td>ideal für Entwicklung</td></tr>
          <tr><td>Arduino-Hohlstecker / VIN</td><td>empfohlen 7–12 V</td><td>interner Linearregler wird bei hoher Spannung warm</td></tr>
          <tr><td>Raspberry Pi 5</td><td>5 V / 5 A über USB-C (27-W-Netzteil empfohlen)</td><td>zu schwache Netzteile führen zu Instabilität</td></tr>
          <tr><td>Akku / Powerbank / Solar</td><td>Kapazität in mAh oder Wh</td><td>Tiefschlaf und seltene Übertragung verlängern die Laufzeit</td></tr>
          <tr><td>PoE (IEEE 802.3af / at / bt)</td><td>bis 15,4 W / 30 W / 60 bzw. 90 W am Switch-Port (am Gerät kommt weniger an, z. B. 12,95 W bei af)</td><td>Daten und Strom über ein Netzwerkkabel</td></tr>
        </tbody></table>
        <p><strong>Energiekosten:</strong> Ein Raspberry Pi mit durchschnittlich 5 W im Dauerbetrieb braucht 5 W × 8760 h = 43,8 kWh pro Jahr; bei 0,35 €/kWh sind das ≈ 15,33 €. Ein Arduino mit 0,25 W kommt auf 2,19 kWh ≈ 0,77 €.</p>
        <h5>Messen mit dem Multimeter</h5>
        <ul>
          <li><strong>Spannung</strong> parallel zum Bauteil messen (Messbereich V DC).</li>
          <li><strong>Strom</strong> in Reihe messen: Stromkreis auftrennen, Messleitung in die A- oder mA-Buchse.</li>
          <li><strong>Widerstand und Durchgang</strong> nur im spannungsfreien Zustand messen.</li>
          <li>Messwerte mit Sollwert und Toleranz in einem <strong>Prüfprotokoll</strong> festhalten.</li>
        </ul>
        <div class="callout merke"><strong>Merke:</strong> mAh ist eine Ladung, keine Energie – erst mit der Spannung (Wh = Ah × V) kannst du verschiedene Akkus vergleichen. Laufzeit = nutzbare Kapazität ÷ <em>mittlerer</em> Strom.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Einheiten umrechnen (mA → A, µA → mA, min → h)! Ein Strommessgerät parallel zur Quelle erzeugt einen Kurzschluss. Und die Powerbank-Angabe in mAh bezieht sich auf die Zellspannung (3,7 V), nicht auf 5 V.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Berechnen Sie den Vorwiderstand“, „Wie lange läuft das System mit dem Akku?“, „Berechnen Sie die jährlichen Stromkosten“, „Wie hoch ist der Wirkungsgrad?“ – immer mit Formel, Einsetzen, Ergebnis und Einheit. Leistungs- und Stromkostenrechnungen sind auch in der AP1 ein Dauerbrenner.</div>
      `
    },
    {
      id: "iot-sicherheit",
      title: "Datenschutz und IT-Sicherheit im IoT",
      exam: ["AP2"],
      summary: "Betriebssicherheit und Informationssicherheit eines CPS bewerten, typische IoT-Schwachstellen erkennen und technische, organisatorische und rechtliche Maßnahmen ableiten.",
      html: `
        <p>Ein CPS kann nicht nur Daten verlieren, sondern über seine Aktoren auch <strong>physischen Schaden</strong> anrichten. Deshalb betrachtest du zwei Seiten:</p>
        <table><thead><tr><th></th><th>Betriebssicherheit (Safety)</th><th>Informationssicherheit (Security)</th></tr></thead><tbody>
          <tr><td>Schützt …</td><td>Menschen und Umwelt vor der Anlage</td><td>Anlage und Daten vor Angriffen und Fehlbedienung</td></tr>
          <tr><td>Beispiele</td><td>Not-Aus, sicherer Zustand bei Sensorausfall, Watchdog, Überstromschutz</td><td>Passwörter, Verschlüsselung, Updates, Segmentierung</td></tr>
          <tr><td>Ziele</td><td>keine Gefährdung, fehlertolerantes Verhalten</td><td>Vertraulichkeit, Integrität, Verfügbarkeit, Authentizität</td></tr>
        </tbody></table>
        <p>Beides hängt zusammen: Ein gefälschter MQTT-Befehl (Security) kann ein Ventil öffnen und ein Gewächshaus fluten (Safety).</p>
        <h5>Typische Schwachstellen</h5>
        <ul>
          <li><strong>Standardpasswörter</strong> und fest einprogrammierte Zugangsdaten – das Mirai-Botnetz übernahm 2016 so Hunderttausende Kameras und Router für DDoS-Angriffe.</li>
          <li><strong>Fehlende Updates</strong> und kurzer Herstellersupport.</li>
          <li><strong>Unverschlüsselte Übertragung</strong>, z. B. MQTT über Port 1883 ohne Anmeldung oder Funkbefehle im Klartext.</li>
          <li><strong>Unnötige offene Dienste</strong> (Telnet, Debug-Schnittstellen) und Portweiterleitungen ins Internet.</li>
          <li><strong>Funkangriffe:</strong> Mitschneiden, Wiedereinspielen (Replay) oder Stören (Jamming).</li>
          <li><strong>Physischer Zugriff</strong> auf Gerät, Speicherkarte oder serielle Schnittstelle.</li>
        </ul>
        <h5>Maßnahmen</h5>
        <table><thead><tr><th>Maßnahme</th><th>Umsetzung im CPS</th></tr></thead><tbody>
          <tr><td>Starke, individuelle Zugangsdaten</td><td>Standardkennwörter sofort ändern, pro Gerät eigene Schlüssel oder Zertifikate</td></tr>
          <tr><td>Updates</td><td>signierte Firmware-Updates (auch „over the air“), Supportzeitraum beim Kauf prüfen</td></tr>
          <tr><td>Netzsegmentierung</td><td>eigenes IoT-VLAN oder WLAN, Firewall erlaubt nur nötige Verbindungen (z. B. nur zum Broker), Fernzugriff per VPN statt Portweiterleitung</td></tr>
          <tr><td>Verschlüsselung</td><td>TLS (MQTT 8883, HTTPS), WPA3 im WLAN, AES bei LoRaWAN, Schlüssel bei ESP-NOW</td></tr>
          <tr><td>Authentifizierung und Rechte</td><td>Broker nur mit Anmeldung, Zugriffslisten (ACL) pro Topic, Prinzip der minimalen Rechte</td></tr>
          <tr><td>Härtung und Überwachung</td><td>unnötige Dienste abschalten, Geräte inventarisieren, Logs und Ausfälle überwachen</td></tr>
          <tr><td>Sicherer Zustand</td><td>bei Funk- oder Sensorausfall definiert reagieren (z. B. Ventil zu, Heizung aus, Alarm)</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel Unterrichtsprojekt:</strong> Eine Alarmanlage aus zwei ESP8266 sendet die PIN per ESP-NOW unverschlüsselt als Broadcast und speichert sie im Klartext. Jeder mit einem ESP in Reichweite könnte mitlesen oder eine Freigabe senden. Verbesserungen: ESP-NOW-Verschlüsselung mit Schlüssel, Sperre nach mehreren Fehlversuchen, Schutz vor Replay (Zähler/Zeitstempel), Pufferakku gegen Stromausfall.</div>
        <h5>Datenschutz (DSGVO)</h5>
        <p>Viele CPS-Daten sind <strong>personenbezogen</strong>: Bewegungsmelder und Heizungsdaten verraten, wann jemand zu Hause ist; Fitness-Tracker erfassen <strong>Gesundheitsdaten</strong> – eine besondere Kategorie nach Art. 9 DSGVO. Es gelten die Grundsätze aus Art. 5 (u. a. Zweckbindung, Datenminimierung, Speicherbegrenzung), <strong>Datenschutz durch Technikgestaltung und datenschutzfreundliche Voreinstellungen</strong> (Art. 25) und geeignete technische und organisatorische Maßnahmen (Art. 32). Praktisch: nur nötige Daten erfassen, lokal vorverarbeiten, pseudonymisieren, Löschfristen festlegen, Serverstandort und Auftragsverarbeitung prüfen.</p>
        <h5>Regeln und Standards</h5>
        <ul>
          <li><strong>EU Cyber Resilience Act</strong> (Verordnung (EU) 2024/2847): Sicherheitsanforderungen für Produkte mit digitalen Elementen, z. B. sichere Standardeinstellungen und Sicherheitsupdates über den Supportzeitraum. Meldepflichten für aktiv ausgenutzte Schwachstellen gelten seit 11.09.2026, die übrigen Pflichten ab 11.12.2027.</li>
          <li><strong>Funkanlagen:</strong> Für vernetzte Funkgeräte gelten seit 01.08.2025 zusätzliche Cybersicherheitsanforderungen der EU-Funkanlagenrichtlinie.</li>
          <li><strong>ETSI EN 303 645</strong> (Grundanforderungen für Consumer-IoT) und <strong>BSI IT-Grundschutz</strong>, Baustein SYS.4.4 „Allgemeines IoT-Gerät“.</li>
        </ul>
        <div class="callout merke"><strong>Merke:</strong> Die fünf IoT-Klassiker: Standardpasswort ändern, Updates einspielen, IoT-Geräte in ein eigenes Netzsegment, Kommunikation verschlüsseln und authentifizieren, nur nötige Daten erfassen.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Verschlüsselung allein reicht nicht – ohne Authentifizierung kann ein Angreifer trotzdem eigene (verschlüsselte) Befehle senden. Und „sicher“ heißt bei einem CPS auch: Was passiert bei Stromausfall oder Funkstörung?</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Nennen Sie drei Risiken des IoT-Geräts und je eine Gegenmaßnahme“, „Erläutern Sie, warum IoT-Geräte in ein eigenes VLAN gehören“, „Beurteilen Sie das System hinsichtlich Datenschutz“ oder „Unterscheiden Sie Betriebs- und Datensicherheit“.</div>
      `
    },
    {
      id: "projekt-doku",
      title: "CPS-Projekt: Inbetriebnahme, Prüfprotokoll, Dokumentation",
      exam: ["AP1", "AP2"],
      summary: "Vom Kundenauftrag bis zur Übergabe: technische Unterlagen, schrittweise Inbetriebnahme, Prüf- und Abnahmeprotokoll, Projektdokumentation nach den Unterrichtsvorgaben und Präsentation.",
      html: `
        <p>Ein CPS zu „ergänzen“ bedeutet im Kern: einen Kundenauftrag in einer vollständigen Handlung umsetzen – analysieren, planen, durchführen, prüfen, übergeben und reflektieren.</p>
        <h5>Ablauf eines CPS-Projekts</h5>
        <ol>
          <li><strong>Analysieren:</strong> Auftrag und Ist-Zustand klären, Anforderungen festhalten (Lastenheft des Kunden → Pflichtenheft des Auftragnehmers).</li>
          <li><strong>Planen:</strong> Komponenten nach Kriterien auswählen (ggf. Nutzwertanalyse), Blockschaltbild, Schaltplan, Stückliste, Energiebudget und Zeitplan erstellen.</li>
          <li><strong>Durchführen:</strong> schrittweise aufbauen und nach jedem Schritt testen (erst Versorgung messen, dann Bus prüfen, z. B. mit einem I²C-Scanner, dann Sensor, dann Aktor).</li>
          <li><strong>Prüfen:</strong> Funktionstest, Messungen, Grenzwerte und Fehlerfälle testen, alles im Prüfprotokoll dokumentieren (Soll-Ist-Vergleich).</li>
          <li><strong>Übergeben:</strong> Kunde einweisen, Dokumentation übergeben, Abnahmeprotokoll unterschreiben lassen.</li>
          <li><strong>Reflektieren:</strong> Nachkalkulation, Lessons Learned, mögliche Folgeaufträge (Erweiterungen).</li>
        </ol>
        <h5>Technische Unterlagen</h5>
        <table><thead><tr><th>Unterlage</th><th>Zeigt</th></tr></thead><tbody>
          <tr><td>Datenblatt</td><td>Kennwerte eines Bauteils: Versorgung, Stromaufnahme, Messbereich, Pinbelegung, Timing</td></tr>
          <tr><td>Blockschaltbild</td><td>Funktionsblöcke und Flüsse (Energie, Stoff, Information) ohne Verdrahtungsdetails</td></tr>
          <tr><td>Schaltplan</td><td>elektrische Verbindungen mit Normsymbolen und Pinbezeichnungen</td></tr>
          <tr><td>Steck- bzw. Verdrahtungsplan</td><td>realer Aufbau auf dem Steckbrett (z. B. mit Fritzing oder einem Online-Schaltungseditor)</td></tr>
          <tr><td>Stückliste</td><td>alle Bauteile mit Anzahl, Typ, Bezugsquelle und Preis</td></tr>
        </tbody></table>
        <h5>Prüfprotokoll (Beispiel)</h5>
        <table><thead><tr><th>Nr.</th><th>Prüfschritt</th><th>Sollwert</th><th>Istwert</th><th>Ergebnis</th></tr></thead><tbody>
          <tr><td>1</td><td>Spannung 5-V-Schiene gegen GND</td><td>5,0 V ± 5 % (4,75–5,25 V)</td><td>4,96 V</td><td>i. O.</td></tr>
          <tr><td>2</td><td>Echo-Pegel hinter dem Spannungsteiler</td><td>≤ 3,4 V</td><td>3,31 V</td><td>i. O.</td></tr>
          <tr><td>3</td><td>Stromaufnahme gesamt</td><td>≤ 200 mA</td><td>182 mA</td><td>i. O.</td></tr>
          <tr><td>4</td><td>Bewegung vor dem PIR → LED an, Meldung im seriellen Monitor</td><td>Reaktion &lt; 1 s</td><td>ca. 0,3 s</td><td>i. O.</td></tr>
          <tr><td>5</td><td>Sensorkabel abziehen (Fehlerfall)</td><td>Fehlermeldung, Aktor aus</td><td>Aktor bleibt an</td><td>n. i. O. → Nachbesserung</td></tr>
        </tbody></table>
        <p>Zum Protokoll gehören Datum, Prüfer, verwendete Messgeräte und die geprüfte Software-Version.</p>
        <h5>Abnahmeprotokoll</h5>
        <p>Mit der Abnahme bestätigt der Kunde, dass die Leistung im Wesentlichen vertragsgemäß erbracht wurde. Inhalt: Auftrag bzw. Projekt, Datum und Ort, Beteiligte, abgenommene Leistungen, festgestellte <strong>Mängel</strong> (Schlechtleistung, Falschlieferung, Minderlieferung), vereinbarte Fristen zur Nachbesserung, Vermerk „Abnahme erteilt / unter Vorbehalt / verweigert“ und Unterschriften beider Seiten.</p>
        <h5>Projektdokumentation nach den Unterrichtsvorgaben</h5>
        <ol>
          <li>Deckblatt (Titel, Gruppenmitglieder, Klasse, Datum)</li>
          <li>Idee und Zielsetzung – welches Problem wird gelöst?</li>
          <li>Funktionsbeschreibung aus Anwendersicht, ohne Code-Details</li>
          <li>Verwendete Bauteile mit Zweck</li>
          <li>Aufbau und Schaltplan mit Pin-Zuordnungen plus Foto des realen Aufbaus</li>
          <li>Sourcecode als separate Datei (in der Doku nur Verweis auf den Dateinamen)</li>
          <li>Erläuterung der wichtigen Codeabschnitte (Kernlogik, Berechnungen, Schwellwerte, Aktorsteuerung) – nicht das Grundgerüst</li>
          <li>Herausforderungen – konkret an Bauteilen und Situationen, mit Lösung</li>
          <li>Fazit und Ausblick (Gelerntes, Erweiterungen)</li>
          <li>Quellenverzeichnis (Datenblätter, Tutorials, Bibliotheken)</li>
        </ol>
        <p><strong>Präsentation:</strong> mindestens 10 Minuten pro Person, jede Person mit erkennbar eigenem Teil. Ablauf: Idee und Ziel → Aufbau/Schaltung und wichtigste Codeabschnitte → Herausforderungen und Lösungen → Fazit und Erweiterungen → Live-Demonstration. <strong>KI-Werkzeuge</strong> dürfen zur Recherche, Fehlersuche und Programmierunterstützung genutzt werden; Prompts gehören nicht in die Doku, aber jede Person muss Code und Entscheidungen selbst erklären können.</p>
        <div class="callout tipp"><strong>Tipp:</strong> Nimm vorab ein kurzes Video der funktionierenden Demo auf – falls live etwas ausfällt (WLAN, Akku, Wackelkontakt), hast du einen Plan B. Und: Teste die Demo in dem Raum, in dem du präsentierst.</div>
        <div class="callout merke"><strong>Merke:</strong> Erst messen, dann weiterstecken. Jeder Test wird mit Soll, Ist und Ergebnis protokolliert – auch die Fehlerfälle. Das Abnahmeprotokoll dokumentiert die Übergabe und eventuelle Mängel.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Ein Prüfprotokoll ohne Sollwert ist wertlos, denn ohne Soll gibt es keinen Soll-Ist-Vergleich. Lastenheft (Was will der Kunde?) und Pflichtenheft (Wie setzt der Auftragnehmer es um?) nicht verwechseln.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> In der AP1 z. B. „Nennen Sie vier Inhalte eines Abnahmeprotokolls“, „Unterscheiden Sie Mängelarten“ oder „Führen Sie einen Soll-Ist-Vergleich durch“; in der AP2 „Erstellen Sie ein Testprotokoll“ oder „Planen Sie die Tests für die Inbetriebnahme“.</div>
      `
    }
  ],
  exercises: [
    {
      id: "e-cps-kuehlhaus",
      topic: "cps-grundlagen",
      title: "Kühlhaus-Überwachung als CPS analysieren",
      level: 2,
      exam: ["AP2"],
      task: `<p>Die <strong>Nordlicht IT GmbH in Heide</strong> soll für die Frischelogistik Marsch GmbH ein Kühlhaus überwachen. Geplant ist: Ein Temperatursensor misst die Innentemperatur. Steigt sie über 7 °C, schaltet ein Controller einen zusätzlichen Kompressor ein. Ein Türkontakt erkennt, ob die Tür offen ist; bleibt sie länger als 2 Minuten offen, leuchtet eine Warnleuchte und die Schichtleitung erhält eine Push-Nachricht. Alle Messwerte gehen per WLAN an ein Cloud-Dashboard.</p>
      <p>a) Nenne alle Sensoren und die jeweils erfasste Größe.<br>b) Nenne alle Aktoren und ihre Wirkung auf die physische Welt.<br>c) Beschreibe, wo die Schnittstelle zwischen physischer Welt und IT-System liegt.<br>d) Erläutere, warum es sich um ein cyber-physisches System handelt.<br>e) Stelle den Datenfluss vom Sensor bis zum Aktor als einfaches Blockschaltbild (Text mit Pfeilen) dar.</p>`,
      hints: ["Frage bei jedem Bauteil: Nimmt es etwas aus der realen Welt auf oder wirkt es auf sie ein?", "Die Push-Nachricht ist kein Aktor – sie wirkt nicht physisch."],
      solution: `<p><strong>a)</strong> Temperatursensor: Innentemperatur in °C. Türkontakt (z. B. Reed-Kontakt mit Magnet): Zustand der Tür offen/geschlossen (binär).</p>
      <p><strong>b)</strong> Kompressor: erzeugt zusätzliche Kälteleistung und senkt so die Temperatur im Kühlhaus. Warnleuchte: erzeugt ein Lichtsignal für die Mitarbeitenden vor Ort. (Die Push-Nachricht ist eine Information im IT-System, kein Aktor.)</p>
      <p><strong>c)</strong> Die Schnittstelle liegt an den Sensoren und Aktoren bzw. an den Ein- und Ausgängen des Controllers: Temperatursensor und Türkontakt wandeln physikalische Zustände in elektrische Signale um (beim Temperatursensor anschließend A/D-Wandlung). Kompressor (über Relais/Schütz) und Warnleuchte wandeln die Steuersignale des Controllers wieder in physikalische Wirkungen (Kälte, Licht) um.</p>
      <p><strong>d)</strong> Das System erfasst mit Sensoren Größen der realen Welt, verarbeitet sie in einem Controller nach festgelegten Regeln (Grenzwert 7 °C, 2 Minuten Türzeit), greift über Aktoren in die reale Welt ein und misst die Wirkung erneut (die Temperatur sinkt → der Sensor erfasst das). Zusätzlich ist es über WLAN mit einem Cloud-Dashboard vernetzt. Rechnen und physischer Prozess sind also eng über einen Regelkreis gekoppelt.</p>
      <p><strong>e)</strong></p>
      <pre class="ascii">
Innentemperatur → Temperatursensor → Controller (Vergleich mit 7 °C) → Relais → Kompressor → Kälte
                                           ▲                                        │
Tür offen/zu → Türkontakt ─────────────────┤         Rückwirkung: Temperatur sinkt ◄┘
                                           ├──► Warnleuchte (Tür &gt; 2 min offen)
                                           └──► WLAN → Cloud-Dashboard → Push an Schichtleitung</pre>`
    },
    {
      id: "e-steuerung-oder-regelung",
      topic: "steuerung-regelung",
      title: "Steuerung oder Regelung?",
      level: 1,
      exam: ["AP2"],
      task: `<p>a) Entscheide jeweils, ob eine <strong>Steuerung</strong> oder eine <strong>Regelung</strong> vorliegt, und begründe kurz:</p>
      <ol>
        <li>Eine Straßenlaterne schaltet sich täglich um 19:00 Uhr ein.</li>
        <li>Ein Kühlschrank hält mit Thermostat 5 °C.</li>
        <li>Ein Bewegungsmelder schaltet das Flurlicht für 60 s ein.</li>
        <li>Ein Tempomat hält 120 km/h – auch bergauf.</li>
        <li>Eine Bewässerung startet bei Bodenfeuchte unter 30 % und stoppt über 45 %.</li>
        <li>Eine Waschmaschine spült nach Programm 12 Minuten lang.</li>
      </ol>
      <p>b) Ordne beim Tempomat Führungsgröße, Regelgröße, Regeldifferenz, Stellgröße und zwei Störgrößen zu.</p>`,
      hints: ["Prüfe: Wird genau die Größe gemessen, die beeinflusst wird?"],
      solution: `<p><strong>a)</strong></p>
      <ol>
        <li><strong>Steuerung:</strong> Die Uhrzeit ist fest vorgegeben, die Helligkeit auf der Straße wird nicht zurückgemeldet.</li>
        <li><strong>Regelung:</strong> Die Innentemperatur (Regelgröße) wird gemessen, mit dem Sollwert verglichen und der Kompressor entsprechend geschaltet.</li>
        <li><strong>Steuerung:</strong> Der Sensor erkennt Bewegung, misst aber nicht die beeinflusste Größe (Helligkeit); das Licht brennt eine feste Zeit.</li>
        <li><strong>Regelung:</strong> Die Ist-Geschwindigkeit wird fortlaufend gemessen, Abweichungen (z. B. durch Steigung) werden ausgeglichen.</li>
        <li><strong>Regelung</strong> (Zweipunktregler mit Hysterese): Gemessen wird die Bodenfeuchte, die durch die Bewässerung verändert wird – die Rückführung ist geschlossen.</li>
        <li><strong>Steuerung:</strong> Ablauf nach Zeit, ohne Rückmeldung, ob die Wäsche sauber ist.</li>
      </ol>
      <p><strong>b)</strong> Führungsgröße w = 120 km/h (eingestellte Geschwindigkeit); Regelgröße x = tatsächliche Geschwindigkeit (gemessen über Raddrehzahlsensoren); Regeldifferenz e = w − x (z. B. 120 − 114 = 6 km/h); Stellgröße y = Motorleistung bzw. Stellung von Drosselklappe/Einspritzung (bei E-Autos Motorstrom); Störgrößen z: Steigung/Gefälle, Gegenwind, Beladung, Anhänger.</p>`
    },
    {
      id: "e-zweipunkt-kuehlhaus",
      topic: "steuerung-regelung",
      title: "Zweipunktregler mit Hysterese im Kühlhaus",
      level: 2,
      exam: ["AP2"],
      task: `<p>Der Kompressor im Kühlhaus der Frischelogistik Marsch GmbH wird von einem Zweipunktregler geschaltet. Sollwert 4 °C, Hysterese ±1 K. Der Kompressor ist beim Start <strong>AUS</strong>.</p>
      <p>Messreihe (°C): 4,2 · 5,3 · 4,6 · 3,4 · 2,8 · 3,6 · 4,9 · 5,1</p>
      <p>a) Gib die Schaltschwellen an (Achtung: Es wird gekühlt!).<br>b) Bestimme für jeden Messwert den Zustand des Kompressors.<br>c) Wie viele Schaltvorgänge (EIN oder AUS) finden statt?<br>d) Erläutere, warum man eine Hysterese verwendet.<br>e) Formuliere die Schaltlogik als Pseudocode.</p>`,
      hints: ["Beim Kühlen wird eingeschaltet, wenn es zu warm ist.", "Zwischen den Schwellen bleibt der letzte Zustand erhalten."],
      solution: `<p><strong>a)</strong> EIN, wenn x &gt; 4 + 1 = <strong>5 °C</strong>; AUS, wenn x &lt; 4 − 1 = <strong>3 °C</strong>.</p>
      <p><strong>b)</strong></p>
      <table><thead><tr><th>Messwert</th><th>4,2</th><th>5,3</th><th>4,6</th><th>3,4</th><th>2,8</th><th>3,6</th><th>4,9</th><th>5,1</th></tr></thead><tbody>
      <tr><td>Kompressor</td><td>AUS</td><td>EIN</td><td>EIN</td><td>EIN</td><td>AUS</td><td>AUS</td><td>AUS</td><td>EIN</td></tr></tbody></table>
      <p>Begründung: 5,3 &gt; 5 → EIN; bis 3,4 bleibt er EIN (keine Schwelle unterschritten); 2,8 &lt; 3 → AUS; 3,6 und 4,9 liegen im Band → bleibt AUS; 5,1 &gt; 5 → EIN.</p>
      <p><strong>c)</strong> 3 Schaltvorgänge: EIN bei 5,3 °C, AUS bei 2,8 °C, EIN bei 5,1 °C.</p>
      <p><strong>d)</strong> Ohne Hysterese würde der Kompressor bei Werten um 4 °C ständig ein- und ausschalten, weil schon kleinste Schwankungen oder Messrauschen die Schwelle überschreiten. Das erhöht Verschleiß und Energiebedarf (hoher Anlaufstrom) und kann den Kompressor beschädigen. Die Hysterese schafft eine Schaltlücke; die Temperatur pendelt dafür in einem Band von 2 K.</p>
      <p><strong>e)</strong></p>
      <pre><code>WENN temperatur &gt; 5 DANN kompressor = EIN
SONST WENN temperatur &lt; 3 DANN kompressor = AUS
// sonst: Zustand unverändert lassen</code></pre>`
    },
    {
      id: "e-fluesse-farming",
      topic: "fluesse",
      title: "Flüsse im Smart-Farming-System",
      level: 2,
      exam: [],
      task: `<p>Die Marschhof Agrar KG bei Wöhrden bewässert ein Kohlfeld automatisch: Bodenfeuchtesensoren senden per LoRaWAN an ein Gateway, ein Controller auf einem Einplatinencomputer vergleicht mit einem Schwellenwert und berücksichtigt eine Wetterprognose aus dem Internet. Bei Bedarf schaltet er über ein Relais ein 24-V-Magnetventil, das Wasser aus der Leitung auf das Feld lässt.</p>
      <p>a) Nenne je zwei Energie-, Stoff- und Informationsflüsse.<br>b) Gib an, wie du die drei Flussarten im Blockschaltbild darstellst.<br>c) Beschreibe die Wechselwirkungskette der Flussarten, die zur Bewässerung führt.<br>d) Im Dashboard steht „Bewässerung EIN“, aber das Feld bleibt trocken. Beschreibe eine systematische Fehlersuche entlang der drei Flussarten.</p>`,
      solution: `<p><strong>a)</strong> Energie: Netzteil → Relais/Magnetventil (24 V); Batterie der Sensorknoten → Elektronik und Funkmodul; (auch: Stromversorgung des Controllers). Stoff: Wasser aus der Leitung durch das Ventil auf das Feld; Wasser, das im Boden versickert. Information: Bodenfeuchte-Messwerte Sensor → LoRaWAN → Gateway → Controller; Wetterprognose aus dem Internet → Controller; Schaltbefehl Controller → Relais; Status → Dashboard.</p>
      <p><strong>b)</strong> Laut Unterrichtskonvention: Energiefluss dünne durchgezogene Linie, Stofffluss dicke durchgezogene Linie, Informationsfluss gestrichelte Linie.</p>
      <p><strong>c)</strong> Informationsfluss: Der Messwert „Bodenfeuchte 24 %“ liegt unter dem Schwellenwert und es ist kein Regen angekündigt → der Controller sendet den Befehl „Ventil öffnen“. Energiefluss: Das Relais schließt, Strom fließt durch die Spule des Magnetventils. Stofffluss: Das Ventil öffnet, Wasser strömt auf das Feld. Rückwirkung: Die Bodenfeuchte steigt, was der Sensor wieder als Information meldet.</p>
      <p><strong>d)</strong> 1. <em>Information:</em> Kommt der Befehl beim Relais an? (Log/serieller Monitor prüfen, Relais-LED, klickt das Relais?) 2. <em>Energie:</em> Liegen am Magnetventil tatsächlich 24 V an? (Multimeter parallel zum Ventil; Sicherung, Netzteil, Verdrahtung prüfen.) 3. <em>Stoff:</em> Steht Wasserdruck an, ist die Leitung frei, ist der Absperrhahn offen, ist das Ventil verschmutzt? Durch die Trennung der Flüsse lässt sich der Fehler schnell eingrenzen – z. B. ist das Dashboard nur ein Informationsfluss und beweist nicht, dass Energie und Wasser fließen.</p>`
    },
    {
      id: "e-plattform-nwa",
      topic: "hardware-plattformen",
      title: "Plattform für eine autarke Messstation auswählen",
      level: 3,
      exam: ["AP2"],
      task: `<p>Die <strong>Nordlicht IT GmbH in Heide</strong> baut für einen Campingplatz in Büsum eine Messstation: Wassertemperatur, Lufttemperatur und Luftfeuchte sollen alle 10 Minuten per LoRaWAN gesendet werden. Einen Stromanschluss gibt es nicht – versorgt wird über Solarmodul und Akku. Zur Wahl stehen:</p>
      <ul><li>A: ESP32-Board mit LoRa-Modul</li><li>B: Raspberry Pi 5 mit LoRa-HAT</li><li>C: Arduino UNO R3 mit LoRa-Shield</li></ul>
      <table><thead><tr><th>Kriterium</th><th>Gewicht</th><th>A</th><th>B</th><th>C</th></tr></thead><tbody>
      <tr><td>Energiebedarf</td><td>40 %</td><td>9</td><td>2</td><td>6</td></tr>
      <tr><td>Anschaffungskosten</td><td>20 %</td><td>9</td><td>4</td><td>7</td></tr>
      <tr><td>Schnittstellen (ADC, Funk, GPIO)</td><td>25 %</td><td>8</td><td>7</td><td>5</td></tr>
      <tr><td>Entwicklungsaufwand</td><td>15 %</td><td>7</td><td>8</td><td>9</td></tr></tbody></table>
      <p>a) Führe die Nutzwertanalyse durch (Punkte 1–10, 10 = am besten) und gib eine Empfehlung.<br>b) Vergleiche Mikrocontroller und Einplatinencomputer anhand von drei Kriterien.<br>c) Erläutere, warum der Tiefschlafmodus für dieses Szenario entscheidend ist.<br>d) Der Kunde möchte später zusätzlich alle 10 Minuten ein Kamerabild auswerten lassen. Beurteile, wie sich die Auswahl dadurch ändern könnte.</p>`,
      hints: ["Nutzwert = Summe aus Gewicht × Punkte.", "Denk bei d) an Rechenleistung, Energie und Funk-Datenrate."],
      solution: `<p><strong>a)</strong></p>
      <table><thead><tr><th>Kriterium</th><th>A (ESP32)</th><th>B (Pi 5)</th><th>C (UNO)</th></tr></thead><tbody>
      <tr><td>Energie (0,40)</td><td>0,40 × 9 = 3,60</td><td>0,40 × 2 = 0,80</td><td>0,40 × 6 = 2,40</td></tr>
      <tr><td>Kosten (0,20)</td><td>0,20 × 9 = 1,80</td><td>0,20 × 4 = 0,80</td><td>0,20 × 7 = 1,40</td></tr>
      <tr><td>Schnittstellen (0,25)</td><td>0,25 × 8 = 2,00</td><td>0,25 × 7 = 1,75</td><td>0,25 × 5 = 1,25</td></tr>
      <tr><td>Aufwand (0,15)</td><td>0,15 × 7 = 1,05</td><td>0,15 × 8 = 1,20</td><td>0,15 × 9 = 1,35</td></tr>
      <tr><td><strong>Nutzwert</strong></td><td><strong>8,45</strong></td><td><strong>4,55</strong></td><td><strong>6,40</strong></td></tr></tbody></table>
      <p>Empfehlung: <strong>Variante A (ESP32)</strong> hat den höchsten Nutzwert. Sie ist sparsam, günstig, hat einen integrierten ADC und bereits WLAN/BLE für die Einrichtung.</p>
      <p><strong>b)</strong> (drei genügen) Rechenleistung: Mikrocontroller gering (MHz, KiB RAM), SBC hoch (GHz, GiB RAM). Betriebssystem: Mikrocontroller ohne OS oder RTOS, SBC mit Linux. Energiebedarf: Mikrocontroller mA bzw. µA im Tiefschlaf, SBC mehrere Watt dauerhaft. Startzeit/Echtzeit: Mikrocontroller sofort und deterministisch, SBC bootet Sekunden und ist nicht hart echtzeitfähig. Analogeingänge: Mikrocontroller ja, Raspberry Pi nein.</p>
      <p><strong>c)</strong> Die Station ist nur alle 10 Minuten wenige Sekunden aktiv. Im Tiefschlaf sinkt die Stromaufnahme vom mA- in den µA-Bereich. Dadurch sinkt der mittlere Strom drastisch, der Akku hält viel länger und Solarmodul und Akku können kleiner und günstiger ausfallen – gerade im Winter mit wenig Sonne ist das entscheidend.</p>
      <p><strong>d)</strong> Bildauswertung braucht deutlich mehr Rechenleistung und Speicher. Außerdem ist LoRaWAN für Bilddaten ungeeignet (sehr geringe Datenrate, Duty Cycle). Möglich wären: ein ESP32 mit Kamera, der nur das Ergebnis der Auswertung (z. B. „Strand belegt: ja/nein“) per LoRaWAN sendet (Edge-Verarbeitung), oder ein SBC mit Mobilfunk/WLAN – dann steigt aber der Energiebedarf, und Solarmodul und Akku müssen größer dimensioniert werden. Zudem wäre der Datenschutz zu prüfen (Personen auf den Bildern).</p>`
    },
    {
      id: "e-ultraschall",
      topic: "sensoren-aktoren",
      title: "Abstandsmessung mit dem HC-SR04",
      level: 2,
      exam: ["AP2"],
      task: `<p>Im Lager der Nordlicht IT GmbH soll ein HC-SR04 den Abstand eines Gabelstaplers zur Wand messen. Rechne mit einer Schallgeschwindigkeit von 343 m/s.</p>
      <p>a) Der Echo-Impuls ist 2332 µs lang. Berechne den Abstand in cm.<br>b) Wie lang ist der Echo-Impuls bei einem Abstand von 1,5 m?<br>c) Im Winter herrschen im Lager 0 °C (Schallgeschwindigkeit ca. 331 m/s). Das Programm rechnet weiter mit 343 m/s. Wie groß ist der tatsächliche Abstand bei 2332 µs und wie groß der Messfehler?<br>d) Der Sensor soll an einen ESP32 angeschlossen werden. Erläutere das Problem am Echo-Pin und berechne die Ausgangsspannung eines Spannungsteilers mit R1 = 1 kΩ und R2 = 2 kΩ.<br>e) Begründe, warum ein PIR-Sensor für diese Aufgabe ungeeignet ist.</p>`,
      hints: ["s = v × t ÷ 2 – der Schall läuft hin und zurück.", "U(aus) = U(ein) × R2 ÷ (R1 + R2)"],
      solution: `<p><strong>a)</strong> s = 343 m/s × 0,002332 s ÷ 2 = 0,39994 m ≈ <strong>40 cm</strong>.</p>
      <p><strong>b)</strong> t = 2 × s ÷ v = 2 × 1,5 m ÷ 343 m/s ≈ 0,008746 s ≈ <strong>8,75 ms</strong>.</p>
      <p><strong>c)</strong> Tatsächlich: s = 331 m/s × 0,002332 s ÷ 2 ≈ 0,386 m = <strong>38,6 cm</strong>. Das Programm zeigt 40,0 cm an → Fehler ≈ 1,4 cm, bezogen auf den tatsächlichen Abstand ca. 3,6 % zu viel (343 ÷ 331 ≈ 1,036). Abhilfe: Temperatur zusätzlich messen und die Schallgeschwindigkeit korrigieren (v ≈ 331 m/s + 0,6 m/s pro °C).</p>
      <p><strong>d)</strong> Der HC-SR04 wird mit 5 V betrieben und gibt am Echo-Pin 5 V aus. Die GPIOs des ESP32 vertragen nur 3,3 V; 5 V können den Eingang dauerhaft schädigen. Ein Spannungsteiler reduziert den Pegel: U(aus) = 5 V × 2 kΩ ÷ (1 kΩ + 2 kΩ) = 5 V × 2 ÷ 3 ≈ <strong>3,33 V</strong>. Der TRIG-Eingang des Sensors erkennt die 3,3 V des ESP32 in der Regel als HIGH. Alle Massen müssen verbunden sein.</p>
      <p><strong>e)</strong> Ein PIR erkennt nur Änderungen der Wärmestrahlung, also Bewegung warmer Körper, und liefert lediglich ein binäres Signal. Er misst keinen Abstand und reagiert nicht auf eine kalte Wand oder einen stehenden Stapler.</p>`
    },
    {
      id: "e-datenblatt-co2",
      topic: "sensoren-aktoren",
      title: "CO₂-Ampel: englisches Datenblatt auswerten",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die <strong>Nordlicht IT GmbH in Heide</strong> richtet für ihren Schulungsraum eine CO₂-Ampel mit einem ESP32 ein. Auszug aus dem (fiktiven) Datenblatt des Sensormoduls:</p>
      <table><thead><tr><th>Parameter</th><th>Min.</th><th>Typ.</th><th>Max.</th><th>Unit</th></tr></thead><tbody>
      <tr><td>Supply voltage</td><td>2.4</td><td>3.3</td><td>5.5</td><td>V</td></tr>
      <tr><td>Average supply current (one measurement every 5 s)</td><td>–</td><td>15</td><td>18</td><td>mA</td></tr>
      <tr><td>CO₂ measurement range</td><td>400</td><td>–</td><td>5000</td><td>ppm</td></tr>
      <tr><td>Accuracy</td><td colspan="4">±(50 ppm + 5 % of reading)</td></tr>
      <tr><td>Response time (63 %)</td><td>–</td><td>60</td><td>–</td><td>s</td></tr>
      <tr><td>Interface</td><td colspan="4">I²C, fixed address 0x62</td></tr>
      <tr><td>Absolute maximum supply voltage</td><td>–</td><td>–</td><td>6.0</td><td>V</td></tr></tbody></table>
      <p>a) Erkläre auf Deutsch, was die Angaben <em>Supply voltage</em>, <em>Average supply current</em>, <em>Accuracy</em>, <em>Response time</em> und <em>Absolute maximum supply voltage</em> bedeuten.<br>b) Prüfe, ob das Modul am 3,3-V-Pin des ESP32 betrieben werden kann, und nenne, was bei den I²C-Leitungen zu beachten ist.<br>c) Der Sensor zeigt 1200 ppm an. In welchem Bereich liegt der wahre Wert laut Datenblatt?<br>d) Die Ampel soll sich an der Arbeitsstättenregel ASR A3.6 orientieren: grün unter 1000 ppm, gelb von 1000 bis 2000 ppm, rot über 2000 ppm. Formuliere die Logik als Pseudocode und begründe, warum eine Hysterese sinnvoll ist.<br>e) Ein zweiter, baugleicher Sensor soll an denselben I²C-Bus. Beurteile das Vorhaben.<br>f) Der ESP32 sendet alle 30 s eine MQTT-Nachricht mit 20 Byte Nutzdaten. Berechne die Nutzdatenmenge pro Tag in KiB.</p>`,
      hints: ["Accuracy wird hier aus einem festen Anteil und einem Anteil vom Messwert zusammengesetzt.", "1 Tag = 86 400 s; 1 KiB = 1024 Byte"],
      solution: `<p><strong>a)</strong> <em>Supply voltage:</em> zulässige Versorgungsspannung, hier 2,4 bis 5,5 V, typisch 3,3 V. <em>Average supply current:</em> mittlere Stromaufnahme im Betrieb bei einer Messung alle 5 s, typisch 15 mA, höchstens 18 mA – für die Auslegung von Netzteil oder Akku rechnet man mit dem Maximalwert. <em>Accuracy:</em> Genauigkeit, also die größte zulässige Abweichung vom wahren Wert (50 ppm plus 5 % des Messwerts). <em>Response time:</em> Ansprechzeit – nach einer sprunghaften Änderung vergehen etwa 60 s, bis 63 % der Änderung angezeigt werden; für Raumluft reicht das. <em>Absolute maximum supply voltage:</em> Grenzwert von 6,0 V, der nie überschritten werden darf; er ist kein Betriebswert.</p>
      <p><strong>b)</strong> 3,3 V liegen im zulässigen Bereich von 2,4 bis 5,5 V, das Modul kann also am 3,3-V-Pin betrieben werden. Die höchstens 18 mA liefert der 3,3-V-Regler eines ESP32-Boards in der Regel problemlos (Datenblatt des Boards prüfen). Bei I²C gilt: Pull-up-Widerstände nur gegen 3,3 V (nicht gegen 5 V), weil die GPIOs des ESP32 nicht 5-V-tolerant sind; gemeinsame Masse; SDA und SCL an die I²C-Pins (beim ESP32 im Arduino-Framework standardmäßig GPIO 21 = SDA, GPIO 22 = SCL).</p>
      <p><strong>c)</strong> Abweichung = ±(50 ppm + 0,05 × 1200 ppm) = ±(50 + 60) ppm = ±110 ppm. Der wahre Wert liegt zwischen <strong>1090 und 1310 ppm</strong>.</p>
      <p><strong>d)</strong></p>
      <pre><code>WENN co2 &gt; 2000 DANN ampel = ROT
SONST WENN co2 &gt;= 1000 DANN ampel = GELB
SONST ampel = GRÜN</code></pre>
      <p>Ohne Hysterese würde die Ampel flackern, wenn der Messwert wegen Messunsicherheit und Rauschen um 1000 ppm schwankt. Sinnvoll ist z. B.: auf GELB schalten ab 1000 ppm, aber erst unter 950 ppm wieder auf GRÜN. So bleibt die Anzeige ruhig und glaubwürdig.</p>
      <p><strong>e)</strong> Beide Sensoren hätten die feste Adresse 0x62. Zwei Geräte mit gleicher Adresse antworten gleichzeitig, die Daten kollidieren. Lösungen: einen I²C-Multiplexer einsetzen, den zweiten Sensor an den zweiten I²C-Controller des ESP32 (eigene Pins) hängen oder den zweiten Sensor über einen eigenen Mikrocontroller anbinden.</p>
      <p><strong>f)</strong> 86 400 s ÷ 30 s = 2880 Nachrichten; 2880 × 20 Byte = 57 600 Byte; 57 600 ÷ 1024 = <strong>56,25 KiB</strong> pro Tag (ohne MQTT-, TCP- und IP-Overhead).</p>`
    },
    {
      id: "e-ad-wandlung",
      topic: "signale-ad",
      title: "A/D-Wandlung am ESP32 und am Arduino",
      level: 2,
      exam: [],
      task: `<p>a) Der ADC eines ESP32 arbeitet mit 12 Bit und einer Referenzspannung von 3,3 V. Wie viele Stufen gibt es und welches ist der größte Digitalwert?<br>b) Berechne die Spannung pro Stufe (LSB) in mV.<br>c) Welcher Digitalwert ergibt sich bei 1,5 V am Eingang?<br>d) Der ADC liefert den Wert 2500. Welche Spannung liegt an?<br>e) Ein LM35 (10 mV/°C) hängt an einem Arduino UNO (10 Bit, 5 V). <code>analogRead()</code> liefert 58. Berechne die Temperatur und die Temperaturauflösung pro Stufe.</p>`,
      solution: `<p><strong>a)</strong> 2¹² = <strong>4096 Stufen</strong>, größter Digitalwert 4096 − 1 = <strong>4095</strong>.</p>
      <p><strong>b)</strong> LSB = 3,3 V ÷ 4096 ≈ 0,000806 V ≈ <strong>0,81 mV</strong>.</p>
      <p><strong>c)</strong> D = 1,5 V ÷ 3,3 V × 4096 = 1861,8 → abgerundet <strong>1861</strong>.</p>
      <p><strong>d)</strong> U = 2500 × 3,3 V ÷ 4096 ≈ <strong>2,01 V</strong>.</p>
      <p><strong>e)</strong> U = 58 × 5 V ÷ 1024 ≈ 0,2832 V = 283,2 mV → T = 283,2 mV ÷ 10 mV/°C ≈ <strong>28,3 °C</strong>. Auflösung: 5 V ÷ 1024 ≈ 4,88 mV pro Stufe → 4,88 mV ÷ 10 mV/°C ≈ <strong>0,49 °C</strong> pro Stufe. Die Temperatur kann also nur in Schritten von etwa einem halben Grad erfasst werden.</p>`
    },
    {
      id: "e-datenmenge-schwingung",
      topic: "signale-ad",
      title: "Schwingungsüberwachung: Abtastrate und Datenmenge",
      level: 3,
      exam: ["AP2"],
      task: `<p>Die Westküsten Klärtechnik GmbH in Brunsbüttel will eine Pumpe per Schwingungssensor überwachen (Predictive Maintenance). Die höchste relevante Schwingfrequenz liegt bei 2 kHz. Der Sensor misst in 3 Achsen mit 16 Bit Auflösung.</p>
      <p>a) Welche Abtastrate ist mindestens erforderlich? Begründe mit dem Abtasttheorem. Gewählt werden 5 kHz – warum etwas mehr als das Minimum?<br>b) Berechne die Datenrate in bit/s und in Byte/s.<br>c) Berechne die Datenmenge pro Tag in Byte und GiB.<br>d) Wie viele volle Tage passen die Rohdaten auf eine Speicherkarte mit der Herstellerangabe 32 GB (= 32 · 10⁹ Byte)?<br>e) Ein Edge-Gateway berechnet stattdessen jede Sekunde einen Kennwertsatz von 64 Byte. Berechne die Datenmenge pro Tag und den Reduktionsfaktor.<br>f) Nenne zwei weitere Vorteile der Verarbeitung an der Edge.</p>`,
      hints: ["Datenrate = Abtastrate × Bit × Kanäle", "1 Tag = 86 400 s; 1 GiB = 2³⁰ Byte"],
      solution: `<p><strong>a)</strong> Nach Nyquist-Shannon muss fₐ &gt; 2 × fₘₐₓ = 2 × 2 kHz = <strong>4 kHz</strong> sein, sonst entsteht Aliasing (Scheinfrequenzen). Etwas Reserve (hier 5 kHz) ist sinnvoll, weil reale Filter vor dem ADC nicht beliebig steil sind und Signalanteile knapp oberhalb von 2 kHz sonst ins Nutzband gespiegelt würden.</p>
      <p><strong>b)</strong> 5000 1/s × 16 bit × 3 = <strong>240 000 bit/s</strong> = 240 kbit/s; ÷ 8 = <strong>30 000 Byte/s</strong>.</p>
      <p><strong>c)</strong> 30 000 Byte/s × 86 400 s = <strong>2 592 000 000 Byte</strong>; ÷ 2³⁰ ≈ <strong>2,41 GiB</strong>. (Mit Dezimalpräfix wären es 2,592 GB – im Prüfungskatalog werden Datenmengen aber binär angegeben.)</p>
      <p><strong>d)</strong> 32 · 10⁹ Byte ≈ 29,8 GiB. 32 000 000 000 Byte ÷ 2 592 000 000 Byte/Tag ≈ 12,35 → <strong>12 volle Tage</strong> (gleiches Ergebnis in GiB: 29,8 ÷ 2,41 ≈ 12,35).</p>
      <p><strong>e)</strong> 64 Byte × 86 400 = <strong>5 529 600 Byte ≈ 5,27 MiB</strong> pro Tag. Reduktionsfaktor: 2 592 000 000 ÷ 5 529 600 = <strong>468,75</strong>.</p>
      <p><strong>f)</strong> Geringere Latenz (Alarm direkt vor Ort), Anlage funktioniert auch bei Ausfall der Internetverbindung, geringere Übertragungs- und Cloudkosten, weniger Angriffsfläche, weil Rohdaten das Werksnetz nicht verlassen.</p>`
    },
    {
      id: "e-pwm",
      topic: "signale-ad",
      title: "PWM-Werte umrechnen",
      level: 1,
      exam: [],
      task: `<p>Eine LED hängt über einen Vorwiderstand an Pin ~10 eines Arduino UNO (5 V).</p>
      <p>a) Berechne Tastgrad und mittlere Spannung für <code>analogWrite(10, 102)</code>.<br>b) Welcher Wert ist für einen Tastgrad von 60 % nötig und welche mittlere Spannung ergibt sich?<br>c) Die PWM-Frequenz an Pin 10 beträgt ca. 490 Hz. Berechne die Periodendauer und die Einschaltzeit bei 40 %.<br>d) Ein Mitschüler schließt die LED an Pin 7 an und wundert sich, dass sie sich nicht dimmen lässt. Erkläre.<br>e) Warum sieht das Auge kein Flackern?</p>`,
      solution: `<p><strong>a)</strong> D = 102 ÷ 255 = 0,40 = <strong>40 %</strong>; U(mittel) = 0,40 × 5 V = <strong>2,0 V</strong>.</p>
      <p><strong>b)</strong> Wert = 0,60 × 255 = <strong>153</strong>; U(mittel) = 153 ÷ 255 × 5 V = <strong>3,0 V</strong>.</p>
      <p><strong>c)</strong> T = 1 ÷ 490 Hz ≈ 0,00204 s = <strong>2,04 ms</strong>; t(ein) = 0,40 × 2,04 ms ≈ <strong>0,82 ms</strong> (danach ca. 1,22 ms aus).</p>
      <p><strong>d)</strong> Pin 7 ist kein PWM-Pin (keine Tilde ~). <code>analogWrite()</code> kann dort keine Pulsweitenmodulation erzeugen; die LED ist nur ganz an oder ganz aus (beim UNO: ab Wert 128 an). Lösung: einen PWM-Pin verwenden (3, 5, 6, 9, 10, 11).</p>
      <p><strong>e)</strong> Die LED schaltet 490-mal pro Sekunde. Das Auge ist zu träge, um so schnelle Wechsel aufzulösen, und nimmt nur die mittlere Helligkeit wahr.</p>`
    },
    {
      id: "e-sketch-fehler",
      topic: "arduino",
      title: "Fehler im Arduino-Sketch finden",
      level: 2,
      exam: ["AP2"],
      task: `<p>Der folgende Sketch soll die Helligkeit einer LED mit einem Potentiometer an A0 einstellen, bei Vollausschlag „Maximum“ melden und die Spannung am Poti im seriellen Monitor anzeigen. Er enthält <strong>vier Fehler</strong>.</p>
      <pre><code>const int LED = 8;
const int POTI = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int wert = analogRead(POTI);
  int hell = wert / 4;
  analogWrite(LED, hell);
  if (wert = 1023) {
    Serial.println("Maximum");
  }
  float spannung = wert * 5 / 1024;
  Serial.println(spannung)
  delay(200);
}</code></pre>
      <p>a) Finde die vier Fehler, beschreibe ihre Auswirkung und korrigiere sie.<br>b) Erkläre, wozu <code>wert / 4</code> dient.<br>c) Der serielle Monitor zeigt nur unleserliche Zeichen. Nenne die wahrscheinliche Ursache.</p>`,
      hints: ["Ein Fehler verhindert schon das Kompilieren.", "Achte auf PWM-Pins, Vergleiche und Datentypen."],
      solution: `<p><strong>a)</strong></p>
      <ol>
        <li><code>const int LED = 8;</code> – Pin 8 ist kein PWM-Pin, die LED lässt sich nicht dimmen. Korrektur: <code>const int LED = 9;</code> (oder 3, 5, 6, 10, 11).</li>
        <li><code>if (wert = 1023)</code> – Zuweisung statt Vergleich: <code>wert</code> wird auf 1023 gesetzt, die Bedingung ist immer wahr, „Maximum“ erscheint ständig und die Spannungsberechnung nutzt den falschen Wert. Korrektur: <code>if (wert == 1023)</code>.</li>
        <li><code>float spannung = wert * 5 / 1024;</code> – Ganzzahldivision: Das Ergebnis wird vor der Zuweisung abgeschnitten (z. B. 512 × 5 ÷ 1024 = 2 statt 2,5). Korrektur: <code>wert * 5.0 / 1024.0</code>.</li>
        <li><code>Serial.println(spannung)</code> – Semikolon fehlt, der Sketch kompiliert nicht. Korrektur: <code>Serial.println(spannung);</code></li>
      </ol>
      <p><strong>b)</strong> <code>analogRead</code> liefert 0–1023 (10 Bit), <code>analogWrite</code> erwartet 0–255 (8 Bit). Die Division durch 4 skaliert den Bereich um (1023 ÷ 4 = 255 bei Ganzzahldivision). Gleichwertig: <code>map(wert, 0, 1023, 0, 255)</code>.</p>
      <p><strong>c)</strong> Die im seriellen Monitor eingestellte Baudrate stimmt nicht mit <code>Serial.begin(9600)</code> überein. Im Monitor ebenfalls 9600 Baud einstellen.</p>`
    },
    {
      id: "e-fade-zwei-leds",
      topic: "arduino",
      title: "Fade erweitern: zwei LEDs gegenläufig dimmen",
      level: 1,
      exam: [],
      task: `<p>Im Unterricht hast du eine LED an Pin ~9 mit PWM gedimmt (Fade-Sketch aus dem Lernzettel: <code>schritt = 5</code>, <code>delay(30)</code>, Werte 0–255).</p>
      <p>a) Erweitere den Sketch um eine zweite LED an Pin ~10, die gegenläufig dimmt: Ist LED 1 hell, ist LED 2 dunkel. Gib den vollständigen Sketch an.<br>b) Welche Codestellen bestimmen die Geschwindigkeit des Dimmens? Berechne die Dauer eines vollständigen Zyklus dunkel → hell → dunkel (Laufzeit der Befehle vernachlässigen).<br>c) Der Zyklus soll doppelt so schnell laufen. Nenne eine sichere Änderung und erkläre, warum <code>schritt = 10</code> ein Problem erzeugt.<br>d) Ein Mitschüler steckt die zweite LED an Pin 8. Beschreibe, was er beobachtet, und erkläre es.<br>e) Für eine grüne LED (Flussspannung 2,2 V) sollen höchstens 15 mA fließen. Berechne den Vorwiderstand an 5 V und wähle einen Wert aus der E12-Reihe (… 150, 180, 220, 270 …). Wie groß ist der Strom dann?</p>`,
      hints: ["255 − helligkeit ergibt genau den Gegenwert.", "Zähle, wie viele Werte pro Zyklus ausgegeben werden: 0, 5, …, 255 und wieder zurück."],
      solution: `<p><strong>a)</strong></p>
      <pre><code>const int LED1 = 9;       // PWM-Pin ~9
const int LED2 = 10;      // PWM-Pin ~10
int helligkeit = 0;
int schritt = 5;

void setup() {
  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);
}

void loop() {
  analogWrite(LED1, helligkeit);
  analogWrite(LED2, 255 - helligkeit);   // gegenläufig
  helligkeit = helligkeit + schritt;
  if (helligkeit &lt;= 0 || helligkeit &gt;= 255) {
    schritt = -schritt;                  // Richtung umkehren
  }
  delay(30);
}</code></pre>
      <p><strong>b)</strong> Die Geschwindigkeit bestimmen die Schrittweite <code>schritt</code> und die Wartezeit <code>delay(30)</code>. Pro Zyklus werden die Werte 0, 5, …, 255 (52 Werte) und zurück 250, …, 5 (50 Werte) ausgegeben, also 102 Durchläufe von <code>loop()</code>. Dauer: 102 × 30 ms = 3060 ms ≈ <strong>3,1 s</strong>.</p>
      <p><strong>c)</strong> Sicher ist <code>delay(15)</code>: gleiche Werte, halbe Wartezeit → 102 × 15 ms ≈ 1,5 s. Mit <code>schritt = 10</code> erreicht die Helligkeit 0, 10, …, 250 und springt dann auf 260. Erst danach wird die Richtung umgekehrt – im nächsten Durchlauf wird also 260 an <code>analogWrite</code> übergeben (bei LED 2 entsprechend 255 − 260 = −5), ein Wert außerhalb von 0–255. Die LEDs zeigen dann für diesen Durchlauf eine undefinierte, falsche Helligkeit (kurzes Flackern). Die Schrittweite muss 255 ohne Rest teilen (z. B. 3, 5, 15, 17) oder man begrenzt den Wert mit <code>constrain(helligkeit, 0, 255)</code>.</p>
      <p><strong>d)</strong> Pin 8 ist kein PWM-Pin (keine Tilde). <code>analogWrite</code> schaltet dort nur hart: unter 128 aus, ab 128 ganz an. Die LED dimmt also nicht, sondern springt zwischen aus und voll hell. Lösung: einen PWM-Pin verwenden (3, 5, 6, 9, 10, 11).</p>
      <p><strong>e)</strong> R = (5 V − 2,2 V) ÷ 0,015 A = 2,8 V ÷ 0,015 A ≈ 186,7 Ω. Da höchstens 15 mA fließen sollen, wählst du den nächstgrößeren E12-Wert <strong>220 Ω</strong>. Strom: I = 2,8 V ÷ 220 Ω ≈ <strong>12,7 mA</strong>.</p>`
    },
    {
      id: "e-schaltplan",
      topic: "schaltplan",
      title: "Tür-Überwachung: Schaltplan, Farbcode und Steckbrett",
      level: 2,
      exam: [],
      task: `<p>Ein Auszubildender der <strong>Nordlicht IT GmbH in Heide</strong> baut mit einem Arduino UNO eine Tür-Überwachung für den Serverraum: Ein Reed-Kontakt an D2 schaltet gegen GND (interner Pull-up). Ist die Tür offen, leuchtet eine rote LED an D9 und über D7 wird mit einem NPN-Transistor ein 5-V-Relais (Spulenstrom 70 mA) angesteuert, das eine Warnleuchte schaltet. Parallel zur Relaisspule sitzt eine Diode.</p>
      <p>a) In der Bauteilkiste liegen drei Widerstände: (1) rot – rot – braun – gold, (2) braun – schwarz – rot – gold, (3) braun – grau – rot – gold. Bestimme die Werte. Welcher passt als LED-Vorwiderstand, welcher als Basiswiderstand, wenn laut Berechnung etwa 1,8 kΩ nötig sind?<br>b) Erstelle eine Pin-Zuordnungstabelle für die Projektdokumentation.<br>c) Die LED leuchtet nie. Nenne drei mögliche Aufbaufehler auf dem Steckbrett und wie du sie prüfst.<br>d) Erkläre die Aufgabe der Diode parallel zur Relaisspule und gib ihre Polung an.<br>e) Welchen Pegel liest <code>digitalRead(2)</code> bei geschlossener Tür (Magnet am Kontakt, Kontakt geschlossen) und bei offener Tür? Begründe.<br>f) Prüfe, ob auch Widerstand (2) als Basiswiderstand funktionieren würde (Stromverstärkung B mindestens 100, U(BE) ≈ 0,7 V, Übersteuerungsfaktor 3).</p>`,
      hints: ["Farbcode: Ziffer, Ziffer, Multiplikator (10 hoch Ziffer), Toleranz.", "INPUT_PULLUP zieht den offenen Eingang auf HIGH."],
      solution: `<p><strong>a)</strong> (1) rot 2, rot 2, braun × 10¹ → <strong>220 Ω</strong> ± 5 %. (2) braun 1, schwarz 0, rot × 10² → <strong>1 kΩ</strong> ± 5 %. (3) braun 1, grau 8, rot × 10² → <strong>1,8 kΩ</strong> ± 5 %. Der 220-Ω-Widerstand dient als LED-Vorwiderstand ((5 V − 2 V) ÷ 220 Ω ≈ 13,6 mA), der 1,8-kΩ-Widerstand als Basiswiderstand.</p>
      <p><strong>b)</strong></p>
      <table><thead><tr><th>Pin</th><th>Richtung</th><th>Bauteil</th><th>Bemerkung</th></tr></thead><tbody>
      <tr><td>D2</td><td>Eingang (INPUT_PULLUP)</td><td>Reed-Kontakt gegen GND</td><td>Tür zu = LOW, Tür offen = HIGH</td></tr>
      <tr><td>D7</td><td>Ausgang</td><td>Basis Q1 über R = 1,8 kΩ</td><td>schaltet Relais K1 (70 mA)</td></tr>
      <tr><td>D9</td><td>Ausgang</td><td>rote LED über R = 220 Ω</td><td>Warnanzeige</td></tr>
      <tr><td>5V / GND</td><td>Versorgung</td><td>Relaisspule, Emitter, Reed-Kontakt, LED-Kathode</td><td>gemeinsame Masse</td></tr></tbody></table>
      <p><strong>c)</strong> (drei genügen) LED verpolt – Anode (langes Bein) muss zum Widerstand bzw. Pin, Kathode (kurzes Bein) nach GND; prüfen durch Umdrehen oder mit der Diodenprüfung des Multimeters. Beide Beine der LED oder des Widerstands stecken in derselben 5er-Kontaktreihe – dann ist das Bauteil überbrückt; Steckplan mit der Reihenbeschriftung vergleichen. LED-Kathode nicht mit der GND-Schiene verbunden oder Versorgungsschiene in der Mitte unterbrochen; mit dem Multimeter auf Durchgang prüfen (spannungsfrei). Falscher Pin im Sketch; Pin-Zuordnungstabelle mit dem Code vergleichen und die Spannung an D9 messen.</p>
      <p><strong>d)</strong> Die Relaisspule speichert Energie im Magnetfeld. Schaltet der Transistor ab, erzeugt die Spule eine hohe Gegenspannung, die den Transistor und den Controller zerstören kann. Die <strong>Freilaufdiode</strong> bietet dem Strom einen Weg, bis die Energie abgebaut ist. Sie wird in Sperrrichtung zur Versorgung eingebaut: <strong>Kathode an +5 V</strong>, Anode am Kollektor bzw. an der unteren Spulenseite.</p>
      <p><strong>e)</strong> Tür geschlossen: Der Magnet schließt den Reed-Kontakt, D2 ist direkt mit GND verbunden → <strong>LOW</strong>. Tür offen: Der Kontakt ist offen, der interne Pull-up zieht D2 auf 5 V → <strong>HIGH</strong>. Die Logik ist also invertiert; ein Kabelbruch meldet sich dabei wie eine offene Tür, was für eine Überwachung der sichere Fall ist.</p>
      <p><strong>f)</strong> Nötig: I(B) = 3 × 70 mA ÷ 100 = 2,1 mA. Mit 1 kΩ: I(B) = (5 V − 0,7 V) ÷ 1000 Ω = 4,3 mA. Das ist mehr als 2,1 mA, der Transistor schaltet also sicher durch, und 4,3 mA liegen deutlich unter der Pin-Grenze von 20 mA. Widerstand (2) funktioniert ebenfalls; 1,8 kΩ belastet den Pin nur etwas weniger.</p>`
    },
    {
      id: "e-schreibtischtest",
      topic: "cps-software",
      title: "Schreibtischtest: Bewässerungslogik mit Hysterese",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Für die automatische Bewässerung der Marschhof Agrar KG wurde folgende Logik mit gespeicherten Testwerten (Bodenfeuchte in %) geschrieben:</p>
      <pre><code>int feuchte[] = {48, 35, 28, 31, 40, 47, 44, 26};
bool pumpe = false;
int schaltungen = 0;
int summe = 0;

for (int i = 0; i &lt; 8; i++) {
  if (!pumpe &amp;&amp; feuchte[i] &lt; 30) {
    pumpe = true;
    schaltungen++;
  } else if (pumpe &amp;&amp; feuchte[i] &gt; 45) {
    pumpe = false;
    schaltungen++;
  }
  summe = summe + feuchte[i];
  Serial.println(pumpe ? "EIN" : "AUS");
}
Serial.println(summe / 8);
Serial.println(schaltungen);</code></pre>
      <p>a) Führe einen Schreibtischtest durch: Gib für jeden Schleifendurchlauf den Wert und die Ausgabe an.<br>b) Welche Werte werden nach der Schleife ausgegeben? Begründe den ersten Wert genau.<br>c) Welche Regelungsart ist hier umgesetzt? Nenne Ein- und Ausschaltschwelle.<br>d) Ein defekter Sensor liefert dauerhaft −1. Beschreibe die Folge und ergänze eine Plausibilitätsprüfung (Pseudocode genügt).</p>`,
      hints: ["Notiere pumpe und schaltungen in einer Wertetabelle.", "summe und 8 sind beide int."],
      solution: `<p><strong>a)</strong></p>
      <table><thead><tr><th>i</th><th>feuchte[i]</th><th>Bedingung</th><th>pumpe</th><th>schaltungen</th><th>Ausgabe</th></tr></thead><tbody>
      <tr><td>0</td><td>48</td><td>AUS und 48 nicht &lt; 30</td><td>false</td><td>0</td><td>AUS</td></tr>
      <tr><td>1</td><td>35</td><td>nicht &lt; 30</td><td>false</td><td>0</td><td>AUS</td></tr>
      <tr><td>2</td><td>28</td><td>AUS und 28 &lt; 30 → EIN</td><td>true</td><td>1</td><td>EIN</td></tr>
      <tr><td>3</td><td>31</td><td>EIN, 31 nicht &gt; 45</td><td>true</td><td>1</td><td>EIN</td></tr>
      <tr><td>4</td><td>40</td><td>nicht &gt; 45</td><td>true</td><td>1</td><td>EIN</td></tr>
      <tr><td>5</td><td>47</td><td>EIN und 47 &gt; 45 → AUS</td><td>false</td><td>2</td><td>AUS</td></tr>
      <tr><td>6</td><td>44</td><td>nicht &lt; 30</td><td>false</td><td>2</td><td>AUS</td></tr>
      <tr><td>7</td><td>26</td><td>AUS und 26 &lt; 30 → EIN</td><td>true</td><td>3</td><td>EIN</td></tr></tbody></table>
      <p><strong>b)</strong> Summe = 48 + 35 + 28 + 31 + 40 + 47 + 44 + 26 = 299. Da <code>summe</code> und 8 Ganzzahlen sind, rechnet C eine Ganzzahldivision: 299 ÷ 8 = 37,375 → Ausgabe <strong>37</strong> (Nachkommastellen werden abgeschnitten). Danach wird <strong>3</strong> (Schaltvorgänge) ausgegeben.</p>
      <p><strong>c)</strong> Ein Zweipunktregler mit Hysterese: EIN bei Bodenfeuchte unter 30 %, AUS über 45 %. Dazwischen bleibt der Zustand erhalten (siehe 31 % und 40 %: Pumpe bleibt EIN; 44 %: bleibt AUS).</p>
      <p><strong>d)</strong> −1 ist kleiner als 30 → die Pumpe schaltet EIN und nie wieder AUS, weil der Wert nie über 45 steigt. Das Feld würde überflutet und Wasser verschwendet. Ergänzung:</p>
      <pre><code>WENN feuchte &lt; 0 ODER feuchte &gt; 100 DANN
    pumpe = false          // sicherer Zustand
    meldeFehler("Sensor defekt")
SONST
    // normale Hysterese-Logik
ENDE WENN</code></pre>`
    },
    {
      id: "e-abfragerhythmus",
      topic: "cps-software",
      title: "Abfragerhythmus im Gewächshaus planen",
      level: 2,
      exam: ["AP2"],
      task: `<p>Die Marschgemüse GmbH in Wesselburen lässt ein Gewächshaus überwachen. Ein ESP32 fragt drei Sensoren ab und sendet pro Meldung eine MQTT-Nachricht mit 40 Byte (beim DHT22 Temperatur und Feuchte zusammen in einer Nachricht):</p>
      <ul><li>DS18B20 im Boden (Bodentemperatur, ändert sich langsam)</li><li>DHT22 (Lufttemperatur und Luftfeuchte; laut Datenblatt höchstens alle 2 s abfragbar)</li><li>Reed-Kontakt an der Tür (etwa 50 Öffnungen pro Tag)</li></ul>
      <p>a) Schlage für jeden Sensor einen Abfragerhythmus bzw. ein Verfahren vor und begründe.<br>b) Berechne die tägliche Datenmenge, wenn die Bodentemperatur alle 5 min, der DHT22 jede Minute und die Tür nur bei Zustandsänderung (Öffnen und Schließen je eine Nachricht) gemeldet wird.<br>c) Erkläre, warum der Sketch <code>millis()</code> statt <code>delay()</code> verwenden sollte.<br>d) Nenne zwei Vorteile einer fertigen Bibliothek für den DS18B20.</p>`,
      solution: `<p><strong>a)</strong> Bodentemperatur: alle 5 min genügt, weil sich der Boden sehr träge erwärmt; häufigeres Messen spart keine Informationen, kostet aber Energie und Daten. DHT22: jede Minute – Luftwerte ändern sich schneller (Lüftung, Sonne), das Sensorlimit von 2 s wird sicher eingehalten. Türkontakt: ereignisgesteuert per Interrupt oder schnelles Polling (z. B. alle 50–100 ms mit Entprellung) und nur bei Zustandsänderung senden – eine Öffnung soll sofort erkannt werden.</p>
      <p><strong>b)</strong> Bodentemperatur: 24 × 60 ÷ 5 = 288 Nachrichten; DHT22: 1440 Nachrichten; Tür: 50 Öffnungen × 2 Zustandsänderungen (auf, zu) = 100 Nachrichten. Summe 288 + 1440 + 100 = 1828 Nachrichten × 40 Byte = <strong>73 120 Byte ≈ 71,4 KiB</strong> pro Tag (73 120 ÷ 1024). Würde nur das Öffnen gemeldet, wären es 50 Türnachrichten und 71 120 Byte ≈ 69,5 KiB.</p>
      <p><strong>c)</strong> <code>delay()</code> blockiert den Controller. Wartet der Sketch z. B. 60 s auf die nächste DHT-Messung, wird in dieser Zeit keine Türöffnung erkannt. Mit <code>millis()</code> prüft <code>loop()</code> ständig, ob das jeweilige Intervall abgelaufen ist, und erledigt dazwischen andere Aufgaben (Tür abfragen, MQTT-Verbindung halten).</p>
      <p><strong>d)</strong> Die Bibliothek kapselt das 1-Wire-Protokoll (Timing, Adressierung per 64-Bit-ID, Prüfsumme) und die Umrechnung in °C; der Code wird kürzer, besser lesbar und weniger fehleranfällig; sie ist bereits getestet und oft für mehrere Boards verfügbar.</p>`
    },
    {
      id: "e-schnittstellen",
      topic: "schnittstellen",
      title: "I²C-Adressen, UART-Auslastung und Busauswahl",
      level: 2,
      exam: ["AP2"],
      task: `<p>Für eine Zutrittskontrolle der Nordlicht IT GmbH werden mehrere Module an einen Mikrocontroller angeschlossen.</p>
      <p>a) Portexpander PCF8574 haben die Adresse 0100 A2 A1 A0 (binär). Gib die Adresse in Hexadezimal für A2 A1 A0 = 000 und = 101 an. Wie viele dieser Expander passen maximal an einen Bus?<br>b) Zwei identische Sensoren mit derselben festen I²C-Adresse sollen an einen Bus. Erkläre das Problem und nenne zwei Lösungen.<br>c) Ein GPS-Modul sendet pro Sekunde 10 Datensätze à 70 Zeichen über UART mit 9600 Baud im Format 8N1. Reicht die Baudrate? Berechne die Auslastung. Würden 4800 Baud genügen?<br>d) Für eine SD-Karte (Protokollierung) stehen I²C und SPI zur Wahl. Begründe die Wahl.<br>e) Am CAN-Bus einer Maschine misst du bei ausgeschalteter Anlage zwischen CAN_H und CAN_L 120 Ω. Was schließt du daraus?</p>`,
      solution: `<p><strong>a)</strong> 000 → 0100000₂ = <strong>0x20</strong>; 101 → 0100101₂ = <strong>0x25</strong>. Mit drei Adressbits sind 2³ = <strong>8</strong> Expander (0x20 bis 0x27) möglich.</p>
      <p><strong>b)</strong> Bei I²C spricht der Controller ein Gerät über seine Adresse an. Haben zwei Geräte dieselbe Adresse, antworten beide gleichzeitig – die Daten kollidieren und sind nicht unterscheidbar. Lösungen: Adresse eines Sensors über Adresspin/Lötbrücke ändern (falls vorhanden), einen I²C-Multiplexer einsetzen, den zweiten Sensor an einen zweiten I²C-Bus hängen oder eine Sensorvariante mit anderer Adresse wählen.</p>
      <p><strong>c)</strong> 10 × 70 = 700 Zeichen/s; bei 8N1 sind es 10 Bit pro Zeichen → 7000 bit/s. Auslastung: 7000 ÷ 9600 ≈ <strong>72,9 %</strong> → 9600 Baud reichen. 4800 Baud reichen <strong>nicht</strong>, weil 7000 bit/s &gt; 4800 bit/s; es würden Daten verloren gehen.</p>
      <p><strong>d)</strong> SPI: SD-Karten unterstützen den SPI-Modus, SPI ist deutlich schneller (MHz-Takt) und vollduplex – wichtig für das Schreiben ganzer Datenblöcke. I²C mit 100/400 kbit/s wäre zu langsam und wird von SD-Karten nicht unterstützt. Nachteil von SPI: eine zusätzliche CS-Leitung pro Gerät.</p>
      <p><strong>e)</strong> Ein korrekt abgeschlossener CAN-Bus hat an beiden Enden je 120 Ω; parallel ergibt das 60 Ω. 120 Ω bedeuten, dass <strong>ein Abschlusswiderstand fehlt</strong> (oder eine Leitung zu einem Busende unterbrochen ist). Folge: Reflexionen und Übertragungsfehler, besonders bei hohen Datenraten.</p>`
    },
    {
      id: "e-funk-auswahl",
      topic: "iot-funk",
      title: "Funktechniken für einen Agrarbetrieb auswählen",
      level: 3,
      exam: ["AP2"],
      task: `<p>Die Nordlicht IT GmbH plant für die Marschhof Agrar KG bei Wöhrden vier Teilsysteme:</p>
      <ol>
        <li>60 Bodenfeuchtesensoren auf 25 ha Feldern ohne Stromanschluss, Batteriebetrieb, alle 30 min 12 Byte</li>
        <li>eine Stallkamera mit Netzteil, Videostream ca. 4 Mbit/s zum Hofbüro (60 m)</li>
        <li>ein Wasserzähler im Kellerschacht, kein Stromanschluss, ein Zählerstand pro Tag</li>
        <li>12 batteriebetriebene Heizkörperthermostate im Wohnhaus</li>
      </ol>
      <p>a) Wähle für jedes Teilsystem eine geeignete Übertragungstechnik aus und begründe mit mindestens zwei Kriterien.<br>b) Ein LoRaWAN-Paket belegt den Kanal 0,4 s; erlaubt ist ein Duty Cycle von 1 %. Wie viele Pakete darf ein Sensor höchstens pro Stunde senden, und welcher Mindestabstand ergibt sich? Passt das zum geplanten Intervall?<br>c) Begründe mit drei Argumenten, warum WLAN für die Feldsensoren ungeeignet ist.<br>d) Nenne für die Stallkamera zwei Sicherheitsmaßnahmen.</p>`,
      hints: ["Kriterien: Reichweite, Datenrate, Energie, Topologie, Kosten, Gebäudedurchdringung."],
      solution: `<p><strong>a)</strong></p>
      <ol>
        <li><strong>LoRaWAN:</strong> Reichweite im Kilometerbereich deckt 25 ha mit wenigen Gateways ab; extrem geringer Energiebedarf → Batterien halten Jahre; 12 Byte alle 30 min passen gut zur geringen Datenrate; lizenzfreies 868-MHz-Band ohne SIM-Kosten.</li>
        <li><strong>WLAN</strong> (oder Ethernet/PoE): 4 Mbit/s erfordern hohe Datenrate; Netzteil vorhanden, Energie spielt keine Rolle; 60 m sind mit Access Point oder Richtfunk-WLAN machbar. Kabel mit PoE wäre noch störsicherer und versorgt die Kamera gleich mit.</li>
        <li><strong>NB-IoT</strong> (alternativ LoRaWAN, falls ein Gateway den Schacht erreicht): sehr gute Gebäude- und Kellerdurchdringung, stromsparend, ein Wert pro Tag ist minimal; keine eigene Infrastruktur nötig, dafür SIM-Kosten.</li>
        <li><strong>Zigbee, Z-Wave oder Thread:</strong> sehr geringer Energiebedarf für Batteriegeräte; Mesh-Topologie – netzbetriebene Geräte leiten weiter, das Netz deckt das ganze Haus ab; verbreitete Smart-Home-Standards.</li>
      </ol>
      <p><strong>b)</strong> Sendezeit pro Stunde: 3600 s × 0,01 = 36 s → 36 s ÷ 0,4 s = <strong>90 Pakete pro Stunde</strong>. Mindestabstand: 0,4 s ÷ 0,01 = <strong>40 s</strong>. Geplant ist 1 Paket pro 30 min (2 pro Stunde) → weit unter der Grenze, passt.</p>
      <p><strong>c)</strong> Reichweite: WLAN reicht nur einige Dutzend Meter, auf 25 ha wären viele Access Points mit Stromversorgung nötig. Energie: WLAN-Verbindungsaufbau und Senden brauchen viel Strom → Batterien wären schnell leer. Infrastruktur/Kosten: Access Points im Feld brauchen Strom, Netzanbindung und Wetterschutz.</p>
      <p><strong>d)</strong> Zwei aus: Standardpasswort ändern, Firmware aktualisieren, Kamera in ein eigenes VLAN/IoT-Netz, verschlüsselter Stream (HTTPS/RTSPS), kein Portforwarding ins Internet (Fernzugriff nur per VPN), Datenschutz beachten (Aufnahmebereich auf den Stall begrenzen, Mitarbeitende informieren).</p>`
    },
    {
      id: "e-mqtt-topics",
      topic: "iot-protokolle",
      title: "MQTT-Topics, Wildcards und QoS",
      level: 2,
      exam: ["AP2"],
      task: `<p>Am Broker der Nordlicht IT GmbH werden folgende Topics veröffentlicht:</p>
      <ul>
        <li>T1: <code>nordlicht/heide/halle1/linie1/temp</code></li>
        <li>T2: <code>nordlicht/heide/halle1/linie2/temp</code></li>
        <li>T3: <code>nordlicht/heide/halle2/linie1/temp</code></li>
        <li>T4: <code>nordlicht/heide/halle1/linie1/motor/strom</code></li>
        <li>T5: <code>nordlicht/husum/halle1/linie1/temp</code></li>
      </ul>
      <p>a) Welche Topics empfängt ein Client mit dem Abonnement A: <code>nordlicht/heide/+/linie1/temp</code>, B: <code>nordlicht/heide/halle1/#</code>, C: <code>nordlicht/+/+/+/temp</code>?<br>b) Wähle eine QoS-Stufe und begründe: (1) Temperatur alle 5 s, (2) Befehl „Förderband stoppen“, (3) Stückzähler für die Abrechnung mit dem Kunden.<br>c) Ein neues Dashboard soll beim Start sofort den aktuellen Status jeder Linie anzeigen. Welche MQTT-Funktion nutzt du?<br>d) Wie erfährt das Dashboard, dass ein Sensorknoten unerwartet ausgefallen ist?</p>`,
      solution: `<p><strong>a)</strong> A: <code>+</code> ersetzt genau eine Ebene (die Halle) → <strong>T1, T3</strong>. B: <code>#</code> umfasst alle Ebenen unter <code>halle1</code> in Heide → <strong>T1, T2, T4</strong>. C: genau fünf Ebenen mit <code>temp</code> am Ende → <strong>T1, T2, T3, T5</strong> (T4 hat sechs Ebenen und endet nicht auf <code>temp</code>).</p>
      <p><strong>b)</strong> (1) <strong>QoS 0</strong>: Der nächste Wert kommt nach 5 s, ein einzelner Verlust ist unkritisch; geringster Overhead. (2) <strong>QoS 1</strong> (mindestens einmal): Der Befehl muss ankommen; ein doppelter Stopp-Befehl schadet nicht. (Sicherheitskritische Not-Aus-Funktionen gehören zusätzlich immer fest verdrahtet an die Maschine.) (3) <strong>QoS 2</strong> (genau einmal): Weder Verlust noch Doppelzählung sind für die Abrechnung akzeptabel.</p>
      <p><strong>c)</strong> Die Statusmeldungen als <strong>Retained Messages</strong> veröffentlichen: Der Broker speichert je Topic die letzte Nachricht und liefert sie neuen Abonnenten sofort aus.</p>
      <p><strong>d)</strong> Über <strong>Last Will and Testament</strong>: Jeder Sensorknoten hinterlegt beim Verbinden eine Nachricht (z. B. <code>.../status = offline</code>). Bricht die Verbindung ohne ordnungsgemäße Abmeldung ab (Keep-Alive läuft ab), veröffentlicht der Broker diese Nachricht, und das Dashboard kann den Ausfall anzeigen.</p>`
    },
    {
      id: "e-energie-akku",
      topic: "energie",
      title: "Akkulaufzeit eines Sensorknotens berechnen",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Die Messstation am Campingplatz (ESP32 mit LoRa) ist alle 5 Minuten für 3 s aktiv und nimmt dabei 120 mA auf. In der übrigen Zeit schläft sie mit 15 µA. Versorgt wird sie aus einem Akku mit 3000 mAh bei 3,7 V; nutzbar sind 80 % der Kapazität.</p>
      <p>a) Berechne den mittleren Strom.<br>b) Berechne die Laufzeit in Stunden und Tagen ohne Nachladen.<br>c) Das Sendeintervall wird auf 15 Minuten verlängert. Berechne mittleren Strom und Laufzeit erneut und vergleiche.<br>d) Wie viel Energie in Wh verbraucht die Station bei 5-Minuten-Intervall pro Tag?<br>e) Eine blaue Status-LED (Flussspannung 2,9 V, 5 mA) soll an einem 3,3-V-GPIO leuchten. Berechne den Vorwiderstand und wähle einen Normwert aus der E12-Reihe (… 68, 82, 100 …). Wie groß ist dann der Strom?</p>`,
      hints: ["Mittlerer Strom = Summe (Strom × Zeit) ÷ Periodendauer", "Einheiten angleichen: 15 µA = 0,015 mA"],
      solution: `<p><strong>a)</strong> Periodendauer 5 min = 300 s, davon 3 s aktiv und 297 s Schlaf.<br>I(mittel) = (120 mA × 3 s + 0,015 mA × 297 s) ÷ 300 s = (360 + 4,455) mAs ÷ 300 s ≈ <strong>1,215 mA</strong>.</p>
      <p><strong>b)</strong> Nutzbare Kapazität: 3000 mAh × 0,8 = 2400 mAh. t = 2400 mAh ÷ 1,215 mA ≈ <strong>1975 h</strong> ≈ 1975 ÷ 24 ≈ <strong>82 Tage</strong>.</p>
      <p><strong>c)</strong> Periodendauer 900 s: I(mittel) = (360 + 0,015 × 897) ÷ 900 = (360 + 13,455) ÷ 900 ≈ <strong>0,415 mA</strong>. t = 2400 ÷ 0,415 ≈ <strong>5783 h ≈ 241 Tage</strong>. Die Laufzeit steigt fast auf das Dreifache, weil die aktive Phase den Verbrauch dominiert und nun nur noch ein Drittel so oft vorkommt.</p>
      <p><strong>d)</strong> Ladung pro Tag: 1,215 mA × 24 h ≈ 29,16 mAh = 0,02916 Ah. Energie: 0,02916 Ah × 3,7 V ≈ <strong>0,108 Wh</strong> pro Tag.</p>
      <p><strong>e)</strong> R = (3,3 V − 2,9 V) ÷ 0,005 A = 0,4 V ÷ 0,005 A = <strong>80 Ω</strong>. Nächster größerer E12-Wert: <strong>82 Ω</strong> (größer wählen, damit der Strom nicht über 5 mA steigt). I = 0,4 V ÷ 82 Ω ≈ <strong>4,88 mA</strong>. Tipp: Die LED nur kurz beim Senden blinken lassen – dauerhaft würde sie mehr Strom brauchen als der ganze schlafende Knoten.</p>`
    },
    {
      id: "e-arduino-pir",
      topic: "arduino",
      title: "Bewegungsmelder mit Buzzer programmieren",
      level: 1,
      exam: ["AP2"],
      task: `<p>Für den Lagerraum der Nordlicht IT GmbH soll ein einfacher Bewegungsalarm entstehen: PIR-Sensor HC-SR501 an D2, aktiver Buzzer an D8, Kontroll-LED an D13.</p>
      <p>a) Schreibe einen Sketch: Bei erkannter Bewegung leuchtet die LED, der Buzzer piept einmal 200 ms und im seriellen Monitor erscheint „Alarm“. Ohne Bewegung ist die LED aus.<br>b) Erkläre den Unterschied zwischen <code>setup()</code> und <code>loop()</code> an deinem Sketch.<br>c) Wozu dienen die beiden Potentiometer und der Jumper auf dem HC-SR501?<br>d) Nach dem Einschalten meldet der Sensor in der ersten Minute mehrfach Bewegung, obwohl niemand im Raum ist. Erkläre.</p>`,
      solution: `<p><strong>a)</strong> Ein möglicher Sketch (Piepen nur bei der steigenden Flanke):</p>
      <pre><code>const int PIR = 2;
const int BUZZER = 8;
const int LED = 13;
int vorher = LOW;

void setup() {
  pinMode(PIR, INPUT);
  pinMode(BUZZER, OUTPUT);
  pinMode(LED, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int jetzt = digitalRead(PIR);
  digitalWrite(LED, jetzt);            // LED folgt dem Sensor
  if (jetzt == HIGH &amp;&amp; vorher == LOW) { // neue Bewegung
    Serial.println("Alarm");
    digitalWrite(BUZZER, HIGH);
    delay(200);
    digitalWrite(BUZZER, LOW);
  }
  vorher = jetzt;
  delay(50);
}</code></pre>
      <p><strong>b)</strong> <code>setup()</code> läuft einmal nach dem Einschalten oder Reset: Hier werden die Pins als Ein-/Ausgang festgelegt und die serielle Schnittstelle mit 9600 Baud gestartet. <code>loop()</code> läuft danach endlos: Sensor lesen, LED setzen, bei neuer Bewegung melden und piepen, kurz warten, von vorn.</p>
      <p><strong>c)</strong> Ein Potentiometer stellt die Empfindlichkeit bzw. Reichweite ein, das andere die Haltezeit (wie lange der Ausgang nach einer Erkennung HIGH bleibt). Der Jumper wählt zwischen Einzelauslösung (Ausgang fällt nach der Haltezeit ab, auch wenn weiter Bewegung ist) und wiederholter Auslösung (Haltezeit startet bei jeder Bewegung neu).</p>
      <p><strong>d)</strong> Der PIR-Sensor braucht nach dem Einschalten eine Aufwärm- bzw. Kalibrierzeit (laut gängigen HC-SR501-Datenblättern ca. 1 Minute), in der er Fehlauslösungen erzeugen kann. Abhilfe: im <code>setup()</code> ca. 60 s warten oder die ersten Meldungen ignorieren.</p>`
    },
    {
      id: "e-stromkosten",
      topic: "energie",
      title: "Stromkosten eines IoT-Gateways",
      level: 1,
      exam: ["AP1", "AP2"],
      task: `<p>Ein Raspberry Pi arbeitet bei der Nordlicht IT GmbH als MQTT-Gateway rund um die Uhr und nimmt im Mittel 6 W auf. Strompreis: 0,35 €/kWh.</p>
      <p>a) Berechne Energiebedarf und Kosten pro Jahr (8760 h).<br>b) Das Steckernetzteil hat einen Wirkungsgrad von 80 %. Welche Leistung nimmt es aus der Steckdose auf, und wie hoch sind die Jahreskosten dann?<br>c) Ein ESP32-basiertes Gateway würde inklusive Netzteil 0,8 W aus der Steckdose aufnehmen. Wie hoch wäre die jährliche Ersparnis gegenüber b)?</p>`,
      solution: `<p><strong>a)</strong> W = 6 W × 8760 h = 52 560 Wh = <strong>52,56 kWh</strong>; Kosten = 52,56 kWh × 0,35 €/kWh ≈ <strong>18,40 €</strong>.</p>
      <p><strong>b)</strong> P(zu) = P(ab) ÷ η = 6 W ÷ 0,8 = <strong>7,5 W</strong>. W = 7,5 W × 8760 h = 65,7 kWh; Kosten = 65,7 × 0,35 ≈ <strong>23,00 €</strong>.</p>
      <p><strong>c)</strong> W = 0,8 W × 8760 h = 7,008 kWh; Kosten ≈ 7,008 × 0,35 ≈ 2,45 €. Ersparnis: 22,995 € − 2,453 € ≈ <strong>20,54 €</strong> pro Jahr (mit bereits gerundeten Beträgen: 23,00 € − 2,45 € = 20,55 €). Zu prüfen ist, ob der ESP32 die Aufgaben (Datenbank, Dashboard, Sicherheit/Updates) überhaupt leisten kann.</p>`
    },
    {
      id: "e-iot-sicherheit",
      topic: "iot-sicherheit",
      title: "Sicherheitsbewertung einer Ferienanlage mit Smart Home",
      level: 3,
      exam: ["AP2"],
      task: `<p>Die Friesenhus Ferienwohnungen GmbH in St. Peter-Ording hat 20 Wohnungen mit smarten Heizkörperthermostaten, elektronischen Türschlössern mit PIN-Code und einer Kamera am Eingang ausgestattet. Die Nordlicht IT GmbH stellt bei einer Prüfung fest:</p>
      <ul>
        <li>Alle Geräte hängen im selben WLAN, das auch die Gäste nutzen.</li>
        <li>Bei der Kamera ist noch das Werkspasswort aktiv; die Firmware ist zwei Jahre alt.</li>
        <li>Für den Fernzugriff auf die Kamera ist am Router eine Portweiterleitung eingerichtet.</li>
        <li>Die Schloss-PINs werden in einer unverschlüsselten Tabelle in der Cloud gespeichert und nie geändert.</li>
      </ul>
      <p>a) Nenne vier Schwachstellen und je eine konkrete Gegenmaßnahme.<br>b) Entwirf ein Segmentierungskonzept mit mindestens drei Netzen und beschreibe zwei Firewall-Regeln.<br>c) Welche personenbezogenen Daten fallen an? Nenne drei Datenschutzmaßnahmen nach DSGVO.<br>d) Erläutere am Türschloss den Unterschied zwischen Betriebssicherheit und Informationssicherheit. Wie sollte sich das Schloss bei Stromausfall verhalten?<br>e) Worauf sollte die GmbH beim Kauf neuer IoT-Geräte mit Blick auf den Cyber Resilience Act achten?</p>`,
      solution: `<p><strong>a)</strong></p>
      <table><thead><tr><th>Schwachstelle</th><th>Gegenmaßnahme</th></tr></thead><tbody>
      <tr><td>Gäste und IoT-Geräte im selben WLAN – Gäste können Geräte angreifen</td><td>Netzsegmentierung: eigenes Gäste- und eigenes IoT-Netz (VLAN/SSID)</td></tr>
      <tr><td>Werkspasswort der Kamera</td><td>individuelles, starkes Passwort; Standardkonten deaktivieren</td></tr>
      <tr><td>veraltete Firmware</td><td>Updates einspielen, Update-Prozess festlegen, Geräte ohne Support ersetzen</td></tr>
      <tr><td>Portweiterleitung ins Internet</td><td>Weiterleitung entfernen, Fernzugriff nur über VPN</td></tr>
      <tr><td>PINs unverschlüsselt und dauerhaft gleich</td><td>verschlüsselte Speicherung, Zugriffsrechte, PIN je Buchung neu vergeben und nach Abreise löschen</td></tr></tbody></table>
      <p><strong>b)</strong> Beispiel: VLAN 10 Verwaltung (Büro-PCs), VLAN 20 IoT (Thermostat-Gateway, Schlösser, Kamera), VLAN 30 Gäste (nur Internet). Regeln: (1) Gäste-VLAN → alle internen Netze: verweigern, nur Internet erlaubt. (2) IoT-VLAN → Internet: nur zu den benötigten Cloud-Diensten der Hersteller (HTTPS/MQTT über TLS); Verwaltung → IoT: nur vom Admin-PC per HTTPS. Alles andere: implizit verweigern.</p>
      <p><strong>c)</strong> Personenbezogen sind u. a. Kamerabilder der Gäste, Zutrittszeitpunkte (wer betritt wann welche Wohnung), Heizungsdaten, die Anwesenheit verraten, und die Zuordnung PIN ↔ Gast. Maßnahmen (drei genügen): Datenminimierung (Kamera nur auf den Eingangsbereich richten, keine Wohnungen/Wege), Hinweisschild und Information der Gäste, kurze Löschfristen (z. B. Zutrittsprotokolle und Aufnahmen nach wenigen Tagen löschen), Verschlüsselung und Zugriffsbeschränkung, Auftragsverarbeitungsvertrag mit den Cloud-Anbietern und Serverstandort prüfen.</p>
      <p><strong>d)</strong> <em>Informationssicherheit</em> schützt das Schloss vor Angriffen, z. B. davor, dass jemand die PIN mitliest oder das Schloss per Funk öffnet (Vertraulichkeit, Integrität, Authentizität). <em>Betriebssicherheit</em> schützt Menschen vor Gefahren durch das System, z. B. dass Gäste bei einem Brand oder Stromausfall nicht eingesperrt sind. Das Schloss muss sich daher von innen immer mechanisch öffnen lassen (Fluchtweg); von außen sollte es bei Stromausfall verschlossen bleiben und per Notfallschlüssel oder Pufferbatterie zu öffnen sein.</p>
      <p><strong>e)</strong> Der CRA verpflichtet vor allem die <em>Hersteller</em>. Beim Kauf sollte die GmbH auf CE-Kennzeichnung und Konformität, einen zugesicherten Supportzeitraum mit Sicherheitsupdates, sichere Standardeinstellungen (keine Standardpasswörter), eine Kontaktstelle für Schwachstellenmeldungen und dokumentierte Update-Möglichkeiten achten.</p>`
    },
    {
      id: "e-projekt-protokoll",
      topic: "projekt-doku",
      title: "Prüfprotokoll auswerten und Abnahme vorbereiten",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Zwei Auszubildende der Nordlicht IT GmbH haben eine Temperaturüberwachung für ein Gewächshaus aufgebaut. Laut Pflichtenheft soll bei 30,0 °C oder mehr eine Warnung erscheinen. Beim Test wurden notiert:</p>
      <table><thead><tr><th>Nr.</th><th>Prüfschritt</th><th>Sollwert</th><th>Istwert</th></tr></thead><tbody>
      <tr><td>1</td><td>5-V-Versorgung</td><td>5,0 V ± 5 %</td><td>4,71 V</td></tr>
      <tr><td>2</td><td>3,3-V-Versorgung</td><td>3,3 V ± 5 %</td><td>3,29 V</td></tr>
      <tr><td>3</td><td>Stromaufnahme</td><td>≤ 250 mA</td><td>238 mA</td></tr>
      <tr><td>4</td><td>Warnung bei 30,0 °C (Prüfwert 30,0 °C)</td><td>Warnung erscheint</td><td>keine Warnung</td></tr></tbody></table>
      <p>a) Bewerte jeden Prüfschritt (i. O. / n. i. O.) mit Rechenweg.<br>b) Nenne die wahrscheinliche Ursache für Schritt 4 und korrigiere die Bedingung.<br>c) Geplant waren 16 Arbeitsstunden, benötigt wurden 21. Berechne die Abweichung absolut und in Prozent.<br>d) Ordne die Mängelart zu: (1) statt vier vereinbarter Sensoren wurden drei geliefert, (2) statt des vereinbarten DHT22 wurde ein DHT11 verbaut, (3) das Display flackert.<br>e) Nenne vier Inhalte eines Abnahmeprotokolls.</p>`,
      solution: `<p><strong>a)</strong> (1) Toleranz 5,0 V × 0,05 = 0,25 V → 4,75–5,25 V. 4,71 V liegt darunter → <strong>n. i. O.</strong> (Netzteil zu schwach oder Spannungsabfall auf Leitungen prüfen). (2) 3,3 V × 0,05 = 0,165 V → 3,135–3,465 V; 3,29 V → <strong>i. O.</strong> (3) 238 mA ≤ 250 mA → <strong>i. O.</strong> (4) Keine Warnung bei genau 30,0 °C → <strong>n. i. O.</strong></p>
      <p><strong>b)</strong> Vermutlich wird mit „größer als“ statt „größer oder gleich“ verglichen: <code>if (temp &gt; 30.0)</code>. Korrektur: <code>if (temp &gt;= 30.0)</code>. Der Test zeigt, warum Grenzwerte (Extremwerte) immer genau am Rand geprüft werden.</p>
      <p><strong>c)</strong> Abweichung: 21 h − 16 h = <strong>+5 h</strong>; 5 ÷ 16 × 100 % = <strong>+31,25 %</strong> Überschreitung.</p>
      <p><strong>d)</strong> (1) <strong>Minderlieferung</strong> (zu geringe Menge), (2) <strong>Falschlieferung</strong> (anderer Artikel als vereinbart), (3) <strong>Schlechtleistung</strong> (mangelhafte Beschaffenheit).</p>
      <p><strong>e)</strong> Vier aus: Projekt/Auftrag und Vertragsbezug, Datum und Ort, Teilnehmende von Auftraggeber und Auftragnehmer, Umfang der abgenommenen Leistungen, festgestellte Mängel, Fristen zur Mängelbeseitigung, Ergebnis (Abnahme erteilt / unter Vorbehalt / verweigert), Unterschriften beider Parteien.</p>`
    }
  ],
  quiz: [
    { id: "q-cps-1", topic: "cps-grundlagen", type: "single", exam: ["AP2"],
      q: "Was kennzeichnet ein cyber-physisches System (CPS) am besten?",
      options: ["Rechentechnik ist über Sensoren und Aktoren eng mit einem physischen Prozess gekoppelt und meist vernetzt", "Ein Computer ist über das Internet mit einer Cloud verbunden", "Ein Programm simuliert einen physikalischen Vorgang ausschließlich am Bildschirm", "Ein Server betreibt mehrere virtuelle Maschinen"],
      answer: 0,
      explain: "Kern eines CPS ist die Kopplung von Informationsverarbeitung und realem Prozess: Sensoren messen, Software entscheidet, Aktoren greifen ein. Eine reine Cloud-Verbindung, eine Simulation ohne reale Wirkung oder Virtualisierung haben keinen Bezug zur physischen Welt." },
    { id: "q-cps-2", topic: "cps-grundlagen", type: "single", exam: ["AP2"],
      q: "Wo liegt bei der Smart-Home-Heizung die Schnittstelle zwischen physischer Welt und IT-System?",
      options: ["Bei Temperatursensor, Fensterkontakt und Stellmotor des Heizkörperventils", "Im Mikrocontroller, weil er die Entscheidung trifft", "In der Cloud-App, weil dort der Sollwert eingestellt wird", "Im WLAN-Router, weil er die Daten weiterleitet"],
      answer: 0,
      explain: "Sensoren wandeln physikalische Größen in elektrische Signale (Eingabe), der Stellmotor wandelt Steuersignale in Bewegung (Ausgabe). Mikrocontroller, App und Router verarbeiten bzw. transportieren nur Informationen – sie gehören vollständig zur IT-Seite." },
    { id: "q-cps-3", topic: "cps-grundlagen", type: "multi", exam: ["AP2"],
      q: "Welche Komponenten sind im Fallbeispiel <strong>Fertigungsstraße</strong> Aktoren?",
      options: ["Förderbandmotor", "Roboterarm mit Greifer", "Lichtschranke", "Kraftsensor am Greifer", "Manufacturing Execution System (MES)"],
      answer: [0, 1],
      explain: "Aktoren wirken auf die reale Welt ein: Der Motor bewegt das Band, der Roboterarm greift und bearbeitet. Lichtschranke und Kraftsensor sind Sensoren, das MES ist Software zur Protokollierung und Fertigungssteuerung." },
    { id: "q-cps-4", topic: "cps-grundlagen", type: "tf", exam: ["AP2"],
      q: "Jedes Embedded System ist automatisch ein IoT-Gerät.",
      answer: false,
      explain: "Falsch. Ein Embedded System ist ein fest in ein Gerät eingebauter Rechner (z. B. Waschmaschinensteuerung) und muss nicht vernetzt sein. Zum IoT-Gerät wird es erst durch die Anbindung an ein Netz bzw. das Internet." },
    { id: "q-cps-5", topic: "cps-grundlagen", type: "single", exam: ["AP2"],
      q: "Wodurch unterscheidet sich ein digitaler Zwilling von einem digitalen Schatten?",
      options: ["Beim Zwilling fließen Daten automatisch vom realen Objekt ins Abbild und wieder zurück", "Der Zwilling ist ein reines CAD-Modell ohne Datenanbindung", "Beim Schatten werden Befehle automatisch an die reale Anlage übertragen", "Der Zwilling wird nur in der Planungsphase vor dem Bau genutzt"],
      answer: 0,
      explain: "Digitaler Schatten: Daten fließen automatisch nur von der realen Anlage ins Abbild. Digitaler Zwilling: zusätzlich automatisch zurück (z. B. optimierte Parameter). Ein CAD-Modell ohne Datenfluss ist nur ein digitales Modell; ein Zwilling begleitet die Anlage über den ganzen Betrieb." },
    { id: "q-cps-6", topic: "cps-grundlagen", type: "single", exam: ["AP2"],
      q: "Welche Wartungsstrategie nutzt Sensordaten und Trends, um ein Bauteil kurz vor dem erwarteten Ausfall zu tauschen?",
      options: ["Vorausschauende Wartung (Predictive Maintenance)", "Präventive Wartung nach festem Intervall", "Reaktive Instandsetzung nach dem Ausfall", "Gewährleistungsabwicklung beim Hersteller"],
      answer: 0,
      explain: "Predictive Maintenance wertet Zustandsdaten (Schwingung, Temperatur, Strom) mit Schwellwerten und Trends aus. Präventive Wartung tauscht nach festen Intervallen – oft zu früh –, reaktive Instandsetzung erst nach dem Schaden." },
    { id: "q-cps-7", topic: "cps-grundlagen", type: "multi", exam: ["AP2"],
      q: "Welche Merkmale sind typisch für ein CPS?",
      options: ["Sensoren erfassen physikalische Größen", "Aktoren wirken auf die reale Welt ein", "Die Wirkung wird über Messungen zurückgemeldet", "Ausschließlich manuelle Bedienung ohne Automatisierung", "Verzicht auf jede Datenverarbeitung"],
      answer: [0, 1, 2],
      explain: "Ein CPS misst, entscheidet und handelt – und misst die Wirkung erneut (Rückkopplung). Ohne Datenverarbeitung oder Automatisierung gäbe es keinen „Cyber“-Anteil." },
    { id: "q-reg-1", topic: "steuerung-regelung", type: "single", exam: ["AP2"],
      q: "Wie wird die Regeldifferenz e in einem Regelkreis berechnet?",
      options: ["e = w − x (Sollwert minus Istwert)", "e = x − w (Istwert minus Sollwert)", "e = y − x (Stellgröße minus Istwert)", "e = w + z (Sollwert plus Störgröße)"],
      answer: 0,
      explain: "Die Regeldifferenz ist die Abweichung des Istwerts vom Sollwert: e = w − x. Ist die Raumtemperatur 19,6 °C bei 21 °C Soll, beträgt e = 1,4 K. Die Stellgröße y ist das Ergebnis des Reglers, nicht Teil der Differenz." },
    { id: "q-reg-2", topic: "steuerung-regelung", type: "single", exam: ["AP2"],
      q: "Was unterscheidet eine Regelung grundsätzlich von einer Steuerung?",
      options: ["Die Regelgröße wird gemessen und zurückgeführt (geschlossener Wirkungsablauf)", "Eine Regelung arbeitet immer mit Mikrocontroller, eine Steuerung nie", "Eine Regelung kommt ohne Sensor aus", "Eine Steuerung gleicht unbekannte Störungen selbstständig aus"],
      answer: 0,
      explain: "Nur die Regelung hat eine Rückführung: Der Istwert wird fortlaufend mit dem Sollwert verglichen. Deshalb gleicht sie auch unbekannte Störungen aus – die Steuerung nicht. Welche Hardware eingesetzt wird, ist für die Unterscheidung egal." },
    { id: "q-reg-3", topic: "steuerung-regelung", type: "tf", exam: ["AP2"],
      q: "Ein Bewegungsmelder, der das Flurlicht für 60 Sekunden einschaltet, ist eine Regelung, weil ein Sensor beteiligt ist.",
      answer: false,
      explain: "Falsch. Der Sensor erfasst Bewegung, nicht die beeinflusste Größe (Helligkeit). Es gibt keinen Vergleich eines Istwerts mit einem Sollwert – es handelt sich um eine Steuerung." },
    { id: "q-reg-4", topic: "steuerung-regelung", type: "single", exam: ["AP2"],
      q: "Welche Größe ist bei der Raumtemperaturregelung eine <strong>Störgröße</strong>?",
      options: ["Ein geöffnetes Fenster", "Der in der App eingestellte Sollwert 21 °C", "Die Ventilstellung", "Die gemessene Raumtemperatur"],
      answer: 0,
      explain: "Störgrößen wirken ungewollt von außen auf die Regelstrecke (offenes Fenster, Sonneneinstrahlung). Der Sollwert ist die Führungsgröße, die Ventilstellung die Stellgröße, die gemessene Temperatur die Regelgröße." },
    { id: "q-reg-5", topic: "steuerung-regelung", type: "input", exam: ["AP2"],
      q: "Ein Zweipunktregler für eine Heizung hat den Sollwert 21 °C und eine Hysterese von ±0,5 K. Oberhalb welcher Temperatur (in °C) schaltet die Heizung aus?",
      answer: ["21,5", "21,5 °C", "21,5°C", "21,5 Grad"],
      explain: "Ausschaltpunkt = Sollwert + Hysterese = 21 + 0,5 = 21,5 °C. Eingeschaltet wird unterhalb von 21 − 0,5 = 20,5 °C." },
    { id: "q-reg-6", topic: "steuerung-regelung", type: "multi", exam: ["AP2"],
      q: "Warum verwendet man bei einem Zweipunktregler eine Hysterese?",
      options: ["Um ständiges Ein- und Ausschalten nahe dem Sollwert zu verhindern", "Um den Verschleiß von Relais, Ventilen oder Kompressoren zu verringern", "Um die Regelgröße ohne jede Schwankung exakt auf dem Sollwert zu halten", "Um auf den Sensor verzichten zu können"],
      answer: [0, 1],
      explain: "Die Schaltlücke verhindert „Flattern“ bei Messrauschen und schont Aktoren. Der Preis: Die Regelgröße pendelt in einem Band um den Sollwert – exakt gehalten wird sie gerade nicht. Ohne Sensor gäbe es gar keine Regelung." },
    { id: "q-fl-1", topic: "fluesse", type: "single", exam: [],
      q: "Welche Linienart steht laut Unterrichtskonvention im Blockschaltbild für den <strong>Informationsfluss</strong>?",
      options: ["Gestrichelte Linie", "Dicke durchgezogene Linie", "Dünne durchgezogene Linie", "Doppelte Wellenlinie"],
      answer: 0,
      explain: "Konvention im Unterricht: dünn durchgezogen = Energie, dick durchgezogen = Stoff, gestrichelt = Information. Wichtig ist, dass die Legende im Blockschaltbild angegeben wird." },
    { id: "q-fl-2", topic: "fluesse", type: "single", exam: [],
      q: "Werkstücke werden auf einem Förderband zur Bearbeitungsstation transportiert. Um welche Flussart handelt es sich bei den Werkstücken?",
      options: ["Stofffluss", "Energiefluss", "Informationsfluss"],
      answer: 0,
      explain: "Werkstücke sind Materie, ihre Bewegung durch das System ist ein Stofffluss. Der Strom für den Bandmotor wäre ein Energiefluss, die Meldung der Lichtschranke ein Informationsfluss." },
    { id: "q-fl-3", topic: "fluesse", type: "tf", exam: [],
      q: "Das 5-V-Steuersignal vom Mikrocontroller zum Relaismodul zählt als Informationsfluss, obwohl es elektrisch ist.",
      answer: true,
      explain: "Richtig. Das Signal trägt eine Nachricht (EIN/AUS) mit sehr geringer Energie. Der kräftige Laststrom, den das Relais dann zum Motor oder Ventil durchschaltet, ist der Energiefluss." },
    { id: "q-fl-4", topic: "fluesse", type: "single", exam: [],
      q: "Welche Reihenfolge beschreibt die typische Wirkungskette in einem CPS?",
      options: ["Information löst Energie aus, Energie bewirkt einen Stofffluss", "Stoff löst Information aus, Information erzeugt Energie", "Energie löst Information aus, Information bewegt Stoff", "Stoff erzeugt Energie, Energie erzeugt Information"],
      answer: 0,
      explain: "Ein Messwert (Information) führt zur Ansteuerung eines Aktors (Energie), der z. B. ein Ventil öffnet, sodass Wasser strömt (Stoff). Informationen allein bewegen keine Materie." },
    { id: "q-fl-5", topic: "fluesse", type: "multi", exam: [],
      q: "Welche der folgenden Vorgänge sind <strong>Energieflüsse</strong>?",
      options: ["Strom vom Netzteil zum Förderbandmotor", "Der Akku versorgt den Fitness-Tracker", "Messwert des Pulssensors an den Prozessor", "Gießwasser strömt auf das Feld", "MQTT-Nachricht an das Dashboard"],
      answer: [0, 1],
      explain: "Versorgungsströme übertragen Energie. Der Pulsmesswert und die MQTT-Nachricht sind Informationsflüsse, das Gießwasser ist ein Stofffluss." },
    { id: "q-hw-1", topic: "hardware-plattformen", type: "single", exam: ["AP2"],
      q: "Welche Aussage beschreibt einen Mikrocontroller korrekt?",
      options: ["Ein Chip mit CPU, Speicher und Ein-/Ausgängen, der meist ohne Betriebssystem ein festes Programm ausführt", "Ein vollständiger Computer auf einer Platine, der ein Linux-Betriebssystem bootet", "Ein Server für virtuelle Maschinen im Rechenzentrum", "Eine Grafikkarte mit eigenem Speicher"],
      answer: 0,
      explain: "Ein Mikrocontroller vereint Prozessor, Flash, RAM und Peripherie (GPIO, ADC, UART …) auf einem Chip und führt eine Firmware aus – ohne OS oder mit RTOS. Ein Linux bootender Platinenrechner ist ein Single Board Computer." },
    { id: "q-hw-2", topic: "hardware-plattformen", type: "single", exam: ["AP2"],
      q: "Warum ist „Embedded System“ keine eigene Hardware-Kategorie wie Mikrocontroller oder SBC?",
      options: ["Der Begriff beschreibt die feste Einbettung eines Rechners in ein technisches Gesamtsystem, unabhängig von der Hardware", "Weil Embedded Systems grundsätzlich ohne Prozessor arbeiten", "Weil Embedded Systems immer auf einem Raspberry Pi beruhen", "Weil Embedded Systems nur aus Software bestehen"],
      answer: 0,
      explain: "„Embedded“ beschreibt die Funktion: Ein Rechner erfüllt fest eingebaut eine bestimmte Aufgabe (Motorsteuerung, Herzschrittmacher). Realisiert werden kann er mit Mikrocontroller, SoC oder SBC." },
    { id: "q-hw-3", topic: "hardware-plattformen", type: "multi", exam: ["AP2"],
      q: "Welche Anforderungen sprechen für einen Single Board Computer (z. B. Raspberry Pi) statt eines Mikrocontrollers?",
      options: ["Vor Ort wird eine Datenbank mit Weboberfläche benötigt", "Kamerabilder sollen lokal ausgewertet werden", "Der Knoten soll zwei Jahre mit einer Batterie laufen", "Ein Analogsensor soll ohne Zusatzbauteil eingelesen werden", "Die Reaktion muss hart echtzeitfähig im Mikrosekundenbereich erfolgen"],
      answer: [0, 1],
      explain: "Datenbank, Webserver und Bildverarbeitung brauchen Rechenleistung, RAM und ein Betriebssystem – Stärken des SBC. Langer Batteriebetrieb, Analogeingänge (der Raspberry Pi hat keine) und harte Echtzeit sprechen dagegen für einen Mikrocontroller." },
    { id: "q-hw-4", topic: "hardware-plattformen", type: "tf", exam: ["AP2"],
      q: "Der Raspberry Pi besitzt analoge Eingänge und kann einen LM35 direkt einlesen.",
      answer: false,
      explain: "Falsch. Die GPIOs des Raspberry Pi sind rein digital (3,3 V). Für analoge Sensoren braucht man einen externen A/D-Wandler, z. B. über I²C oder SPI." },
    { id: "q-hw-5", topic: "hardware-plattformen", type: "single", exam: ["AP2"],
      q: "Welche Plattform eignet sich am besten für einen batteriebetriebenen Sensorknoten, der alle 15 Minuten einen Wert per WLAN senden soll?",
      options: ["ESP32 mit Tiefschlafmodus", "Raspberry Pi 5 mit Desktop-Betriebssystem", "Industrie-PC mit Lüfter", "Arduino UNO R3 ohne Funkmodul"],
      answer: 0,
      explain: "Der ESP32 hat WLAN integriert und verbraucht im Tiefschlaf nur Mikroampere. Ein Raspberry Pi oder Industrie-PC braucht dauerhaft Watt; der UNO hat kein WLAN." },
    { id: "q-hw-6", topic: "hardware-plattformen", type: "single", exam: ["AP2"],
      q: "Mit welcher Logikspannung arbeiten die GPIOs von ESP32 und Raspberry Pi?",
      options: ["3,3 V", "5 V", "12 V", "24 V"],
      answer: 0,
      explain: "Beide arbeiten mit 3,3 V und sind nicht 5-V-tolerant. Der Arduino UNO arbeitet mit 5 V, SPS-Signale in der Industrie typischerweise mit 24 V." },
    { id: "q-sa-1", topic: "sensoren-aktoren", type: "single", exam: ["AP1", "AP2"],
      q: "Was erkennt ein PIR-Sensor wie der HC-SR501?",
      options: ["Änderungen der Infrarot-Wärmestrahlung, also Bewegung warmer Körper", "Den genauen Abstand zu einem Objekt in Zentimetern", "Die absolute Temperatur eines Raumes", "Die Helligkeit des Umgebungslichts"],
      answer: 0,
      explain: "Der passive Infrarotsensor reagiert auf Änderungen der Wärmestrahlung im Erfassungsbereich und gibt dann ein HIGH-Signal aus. Abstände misst z. B. ein Ultraschallsensor, Temperatur ein Temperatursensor, Helligkeit ein LDR." },
    { id: "q-sa-2", topic: "sensoren-aktoren", type: "input", exam: ["AP2"],
      q: "Ein HC-SR04 misst eine Echo-Zeit von 1166 µs. Wie groß ist der Abstand in cm (gerundet, Schallgeschwindigkeit 343 m/s)?",
      answer: ["20", "20 cm", "20cm"],
      explain: "s = 343 m/s × 0,001166 s ÷ 2 ≈ 0,19997 m ≈ 20 cm. Durch 2 teilen, weil der Schall hin und zurück läuft (Faustformel: 1166 µs ÷ 58 ≈ 20 cm)." },
    { id: "q-sa-3", topic: "sensoren-aktoren", type: "single", exam: ["AP2"],
      q: "Warum schließt man einen DC-Motor nicht direkt an einen Arduino-Pin an?",
      options: ["Der Pin liefert nur wenige Milliampere, der Motor braucht viel mehr Strom und erzeugt Spannungsspitzen", "Weil Arduino-Pins nur als Eingänge nutzbar sind", "Weil ein DC-Motor nur mit Wechselspannung läuft", "Weil der Motor sonst zu schnell dreht"],
      answer: 0,
      explain: "Ein UNO-Pin sollte höchstens ca. 20 mA liefern. Motoren brauchen deutlich mehr und induzieren beim Abschalten Spannungsspitzen. Deshalb nutzt man einen Transistor, Motortreiber oder ein Relaismodul mit eigener Versorgung." },
    { id: "q-sa-4", topic: "sensoren-aktoren", type: "multi", exam: ["AP2"],
      q: "Welche Sensoren liefern ihre Messwerte digital über ein Busprotokoll?",
      options: ["DS18B20 (1-Wire)", "BME280 (I²C/SPI)", "LM35", "Fotowiderstand (LDR)", "NTC-Thermistor"],
      answer: [0, 1],
      explain: "DS18B20 und BME280 wandeln intern und senden Zahlenwerte über einen Bus. LM35 liefert eine analoge Spannung (10 mV/°C); LDR und NTC ändern ihren Widerstand und werden über einen Spannungsteiler analog eingelesen." },
    { id: "q-sa-5", topic: "sensoren-aktoren", type: "tf", exam: ["AP2"],
      q: "Ein NTC-Widerstand wird bei steigender Temperatur hochohmiger.",
      answer: false,
      explain: "Falsch. NTC steht für Negative Temperature Coefficient: Der Widerstand <em>sinkt</em> bei steigender Temperatur. Kaltleiter (PTC) und Platin-Messwiderstände wie der PT100 werden dagegen bei Wärme hochohmiger." },
    { id: "q-sa-7", topic: "sensoren-aktoren", type: "single", exam: ["AP1", "AP2"],
      q: "Mit welchem Sensor erkennt ein Smart-Home-System am einfachsten, ob ein Fenster geschlossen ist?",
      options: ["Reed-Kontakt mit Magnet am Fensterflügel", "PIR-Bewegungsmelder", "CO₂-Sensor", "Fotowiderstand (LDR)"],
      answer: 0,
      explain: "Der Magnet am Flügel schließt bei geschlossenem Fenster den Reed-Kontakt – ein einfaches binäres Signal. Der PIR erkennt Bewegung warmer Körper, der CO₂-Sensor die Luftqualität und der LDR die Helligkeit; keiner davon meldet zuverlässig den Fensterzustand." },
    { id: "q-sa-8", topic: "sensoren-aktoren", type: "single", exam: ["AP1", "AP2"],
      q: "Was bedeutet die Angabe „Quiescent current: 5 µA“ im Datenblatt eines Sensors?",
      options: ["Die Stromaufnahme im Ruhe- bzw. Bereitschaftszustand", "Den Strom, den der Sensor während einer Messung höchstens aufnimmt", "Den Kurzschlussstrom des Ausgangspins", "Den Strom, ab dem der Sensor zerstört wird"],
      answer: 0,
      explain: "Quiescent current ist der Ruhestrom, wenn das Bauteil nicht aktiv misst oder sendet – entscheidend für die Laufzeit batteriebetriebener Knoten. Die Stromaufnahme beim Messen heißt meist operating/supply current, Zerstörgrenzen stehen unter absolute maximum ratings." },
    { id: "q-sa-9", topic: "sensoren-aktoren", type: "tf", exam: ["AP2"],
      q: "Die Angaben „Accuracy“ und „Resolution“ in einem Datenblatt bedeuten dasselbe.",
      answer: false,
      explain: "Falsch. Resolution (Auflösung) ist der kleinste unterscheidbare Schritt, Accuracy (Genauigkeit) die maximale Abweichung vom wahren Wert. Der DS18B20 löst z. B. 0,0625 °C auf, ist aber nur auf etwa ±0,5 °C genau." },
    { id: "q-sa-6", topic: "sensoren-aktoren", type: "single", exam: ["AP2"],
      q: "Welcher Aktor eignet sich, um einen Hebel gezielt auf einen Winkel von z. B. 90° zu drehen?",
      options: ["Servomotor", "Relais", "Buzzer", "Magnetventil"],
      answer: 0,
      explain: "Ein Servo stellt über die Pulsbreite seines Steuersignals (ca. 1–2 ms alle 20 ms) einen Winkel ein. Ein Relais schaltet nur ein/aus, ein Buzzer erzeugt Töne, ein Magnetventil öffnet oder schließt einen Durchfluss." },
    { id: "q-ad-1", topic: "signale-ad", type: "input", exam: [],
      q: "Wie viele Quantisierungsstufen hat ein 12-Bit-A/D-Wandler?",
      answer: ["4096", "4096 Stufen"],
      explain: "Anzahl Stufen = 2ⁿ = 2¹² = 4096. Der größte Digitalwert ist 4095, weil bei 0 begonnen wird." },
    { id: "q-ad-2", topic: "signale-ad", type: "single", exam: [],
      q: "Welchen Wertebereich liefert <code>analogRead()</code> am Arduino UNO?",
      options: ["0 bis 1023", "0 bis 255", "0 bis 4095", "−512 bis 511"],
      answer: 0,
      explain: "Der ADC des ATmega328P hat 10 Bit → 2¹⁰ = 1024 Stufen, also 0–1023. 0–255 ist der Bereich von analogWrite (8-Bit-PWM), 0–4095 gilt für 12-Bit-ADCs wie beim ESP32." },
    { id: "q-ad-3", topic: "signale-ad", type: "input", exam: [],
      q: "Welcher Digitalwert ergibt sich (abgerundet) bei 2,2 V an einem 10-Bit-ADC mit 5 V Referenzspannung?",
      answer: ["450"],
      explain: "D = U(ein) ÷ U(ref) × 2ⁿ = 2,2 ÷ 5 × 1024 = 450,56 → abgerundet 450." },
    { id: "q-ad-4", topic: "signale-ad", type: "single", exam: ["AP2"],
      q: "Ein Signal enthält Frequenzen bis 20 kHz. Welche Abtastrate erfüllt das Abtasttheorem?",
      options: ["44,1 kHz", "20 kHz", "30 kHz", "10 kHz"],
      answer: 0,
      explain: "Nach Nyquist-Shannon muss die Abtastrate größer als das Doppelte der höchsten Signalfrequenz sein: fₐ &gt; 40 kHz. Nur 44,1 kHz erfüllt das; bei den anderen Werten entsteht Aliasing." },
    { id: "q-ad-5", topic: "signale-ad", type: "single", exam: [],
      q: "Wie hoch ist die mittlere Spannung bei <code>analogWrite(9, 64)</code> an einem Arduino mit 5 V?",
      options: ["ca. 1,25 V", "ca. 0,64 V", "ca. 2,5 V", "ca. 3,2 V"],
      answer: 0,
      explain: "Tastgrad = 64 ÷ 255 ≈ 25,1 %; U(mittel) ≈ 0,251 × 5 V ≈ 1,25 V. 2,5 V ergäbe sich bei etwa 128." },
    { id: "q-ad-6", topic: "signale-ad", type: "multi", exam: [],
      q: "Welche Schritte gehören zur A/D-Wandlung?",
      options: ["Abtasten", "Quantisieren", "Codieren", "Modulieren auf eine Trägerfrequenz", "Verschlüsseln"],
      answer: [0, 1, 2],
      explain: "Abtasten (zeitdiskret), Quantisieren (wertdiskret, Zuordnung zu einer von 2ⁿ Stufen) und Codieren (Ausgabe als Binärzahl). Modulation und Verschlüsselung gehören zur Übertragung bzw. Sicherheit, nicht zur Wandlung." },
    { id: "q-ad-7", topic: "signale-ad", type: "tf", exam: [],
      q: "Eine höhere Auflösung des A/D-Wandlers (mehr Bit) verkleinert bei gleicher Referenzspannung den Quantisierungsfehler.",
      answer: true,
      explain: "Richtig. Mehr Bit bedeuten mehr und damit kleinere Stufen (LSB = U(ref) ÷ 2ⁿ). Der maximale Quantisierungsfehler von einer halben Stufe wird dadurch kleiner." },
    { id: "q-ad-9", topic: "signale-ad", type: "input", exam: [],
      q: "Wie groß ist der maximale Quantisierungsfehler in mV (auf zwei Nachkommastellen) eines idealen 10-Bit-ADC mit 5 V Referenzspannung, wenn ideal gerundet wird?",
      answer: ["2,44", "2,44 mV", "2,44mV", "±2,44", "±2,44 mV"],
      explain: "LSB = 5 V ÷ 1024 ≈ 4,88 mV. Bei idealer Rundung beträgt der Fehler höchstens eine halbe Stufe: 4,88 mV ÷ 2 ≈ 2,44 mV. Wer abschneidet statt rundet, hat bis zu knapp einer ganzen Stufe Fehler." },
    { id: "q-ad-8", topic: "signale-ad", type: "single", exam: ["AP1", "AP2"],
      q: "Ein Audiosignal wird mit 44,1 kHz, 16 Bit und 2 Kanälen digitalisiert. Wie groß ist die Datenrate?",
      options: ["1411,2 kbit/s", "705,6 kbit/s", "176,4 kbit/s", "88,2 kbit/s"],
      answer: 0,
      explain: "44 100 × 16 bit × 2 = 1 411 200 bit/s = 1411,2 kbit/s (= 176,4 kByte/s). 705,6 kbit/s wäre Mono; 176,4 ist der Wert in kByte/s, nicht in kbit/s." },
    { id: "q-ar-1", topic: "arduino", type: "single", exam: [],
      q: "Wie oft wird die Funktion <code>setup()</code> in einem Arduino-Sketch ausgeführt?",
      options: ["Einmal nach dem Einschalten oder Reset", "Endlos in einer Schleife", "Einmal pro Sekunde", "Nur beim Hochladen in der IDE"],
      answer: 0,
      explain: "setup() läuft einmal beim Start (z. B. pinMode, Serial.begin). Danach wird loop() endlos wiederholt." },
    { id: "q-ar-2", topic: "arduino", type: "multi", exam: [],
      q: "Welche Pins des Arduino UNO R3 sind PWM-fähig (analogWrite)?",
      options: ["3", "9", "11", "7", "13", "A0"],
      answer: [0, 1, 2],
      explain: "PWM-Pins sind mit ~ markiert: 3, 5, 6, 9, 10 und 11. Pin 7 und 13 sind rein digital, A0 ist ein Analogeingang." },
    { id: "q-ar-3", topic: "arduino", type: "single", exam: ["AP2"],
      q: "Was bewirkt <code>pinMode(4, INPUT_PULLUP)</code>?",
      options: ["Pin 4 wird Eingang mit internem Pull-up; ein Taster gegen GND liefert gedrückt LOW", "Pin 4 wird Ausgang und liefert dauerhaft HIGH", "Pin 4 wird analoger Eingang mit 10 Bit", "Pin 4 wird für PWM mit 490 Hz vorbereitet"],
      answer: 0,
      explain: "Der interne Pull-up zieht den offenen Eingang auf HIGH. Wird der Taster gegen GND gedrückt, liest digitalRead LOW – die Logik ist invertiert. So braucht man keinen externen Widerstand." },
    { id: "q-ar-4", topic: "arduino", type: "single", exam: ["AP2"],
      q: "Der serielle Monitor zeigt nur unleserliche Zeichen. Was ist die wahrscheinlichste Ursache?",
      options: ["Die Baudrate im Monitor stimmt nicht mit Serial.begin() überein", "Der Sketch enthält kein delay()", "Die LED an Pin 13 ist defekt", "Der Analogeingang A0 ist nicht angeschlossen"],
      answer: 0,
      explain: "UART ist asynchron: Beide Seiten müssen dieselbe Baudrate verwenden. Steht der Sketch auf 9600 und der Monitor auf 115200, entsteht Zeichensalat." },
    { id: "q-ar-5", topic: "arduino", type: "tf", exam: ["AP2"],
      q: "Die Bedingung <code>if (zustand = HIGH)</code> prüft korrekt, ob zustand den Wert HIGH hat.",
      answer: false,
      explain: "Falsch. Ein einfaches = ist eine Zuweisung: zustand wird auf HIGH gesetzt und die Bedingung ist immer wahr. Für den Vergleich braucht man ==." },
    { id: "q-ar-6", topic: "arduino", type: "input", exam: [],
      q: "Wie viele analoge Eingänge (A0, A1, …) hat der Arduino UNO R3?",
      answer: ["6", "sechs"],
      explain: "Der UNO R3 hat sechs Analogeingänge A0–A5 am 10-Bit-ADC. A4 und A5 dienen zugleich als SDA und SCL für I²C." },
    { id: "q-ar-7", topic: "arduino", type: "single", exam: [],
      q: "Welcher Mikrocontroller sitzt auf dem Arduino UNO R3?",
      options: ["ATmega328P", "ESP32", "BCM2712", "RP2040"],
      answer: 0,
      explain: "Der UNO R3 nutzt den 8-Bit-AVR ATmega328P mit 16 MHz. ESP32 ist ein 32-Bit-Controller mit WLAN, BCM2712 der SoC des Raspberry Pi 5, RP2040 der Chip des Raspberry Pi Pico." },
    { id: "q-ar-8", topic: "arduino", type: "input", exam: ["AP2"],
      q: "Welchen größten Wert kann eine Variable vom Typ <code>int</code> auf dem Arduino UNO speichern?",
      answer: ["32767", "32.767", "+32767"],
      explain: "Auf dem 8-Bit-AVR ist int 16 Bit groß und vorzeichenbehaftet: −2¹⁵ bis 2¹⁵ − 1, also −32 768 bis 32 767. Wird 32 767 um 1 erhöht, läuft der Wert über (praktisch auf −32 768). Auf dem ESP32 ist int dagegen 32 Bit groß." },
    { id: "q-ar-9", topic: "arduino", type: "single", exam: ["AP2"],
      q: "Welcher Datentyp ist für einen Zeitstempel aus <code>millis()</code> richtig?",
      options: ["unsigned long", "int", "byte", "float"],
      answer: 0,
      explain: "millis() liefert einen 32-Bit-Wert ohne Vorzeichen (bis 4 294 967 295 ms ≈ 49,7 Tage). int (16 Bit) läuft auf dem UNO schon nach etwa 33 s über, byte nach 255 ms, und float verliert bei großen Werten Genauigkeit." },
    { id: "q-sp-1", topic: "schaltplan", type: "input", exam: [],
      q: "Ein Widerstand trägt die Farbringe rot – rot – braun – gold. Welchen Nennwert in Ω hat er?",
      answer: ["220", "220 Ω", "220Ω", "220 Ohm", "220Ohm"],
      explain: "rot = 2, rot = 2 → 22; braun als Multiplikator = × 10¹ → 220 Ω; gold = ±5 % Toleranz. Das ist der typische LED-Vorwiderstand aus dem Unterricht." },
    { id: "q-sp-2", topic: "schaltplan", type: "single", exam: [],
      q: "Wie wird eine LED richtig herum angeschlossen?",
      options: ["Anode (langes Bein) Richtung Pin bzw. Plus, Kathode (kurzes Bein, abgeflachte Seite) nach GND", "Kathode (langes Bein) an den Pin, Anode an GND", "Die Richtung ist egal, LEDs leuchten in jeder Richtung", "Anode und Kathode in dieselbe Kontaktreihe des Steckbretts"],
      answer: 0,
      explain: "Eine LED ist eine Diode und leitet nur von der Anode zur Kathode. Das lange Bein ist die Anode, das kurze bzw. die abgeflachte Gehäuseseite die Kathode. Verpolt leuchtet sie nicht; stecken beide Beine in derselben Kontaktreihe, ist sie kurzgeschlossen." },
    { id: "q-sp-3", topic: "schaltplan", type: "tf", exam: [],
      q: "Auf einem Steckbrett sind die Kontakte links und rechts der Mittelrille miteinander verbunden.",
      answer: false,
      explain: "Falsch. Die Mittelrille trennt die beiden Hälften. Verbunden sind jeweils 5 Kontakte einer Reihe auf einer Seite der Rille sowie die Versorgungsschienen am Rand über ihre Länge. Deshalb steckt man Module und ICs über die Rille." },
    { id: "q-sp-4", topic: "schaltplan", type: "single", exam: [],
      q: "Wozu dient eine Diode, die parallel zu einer Relaisspule geschaltet ist?",
      options: ["Sie leitet die Spannungsspitze beim Abschalten der Spule ab und schützt Transistor und Controller", "Sie lässt die Relaisspule schneller anziehen", "Sie zeigt an, ob das Relais geschaltet hat", "Sie begrenzt den Strom durch die Spule auf 20 mA"],
      answer: 0,
      explain: "Beim Abschalten induziert die Spule eine hohe Gegenspannung. Die Freilaufdiode (Kathode an Plus) schließt diesen Strom kurz, bis die Energie abgebaut ist. Eine Anzeige wäre eine LED, eine Strombegrenzung ein Widerstand." },
    { id: "q-sp-5", topic: "schaltplan", type: "single", exam: [],
      q: "Zwei Leitungen kreuzen sich im Schaltplan <strong>ohne</strong> Verbindungspunkt. Was bedeutet das?",
      options: ["Die Leitungen sind nicht miteinander verbunden", "Die Leitungen sind miteinander verbunden", "An der Stelle sitzt ein Widerstand", "Eine der Leitungen ist die Masse"],
      answer: 0,
      explain: "Nur ein dicker Verbindungspunkt zeigt eine elektrische Verbindung. Kreuzungen ohne Punkt sind nur zeichnerisch – die Leitungen laufen isoliert aneinander vorbei." },
    { id: "q-sp-6", topic: "schaltplan", type: "single", exam: [],
      q: "Wofür steht das Bauteilkennzeichen <strong>K1</strong> in einem Schaltplan üblicherweise?",
      options: ["Relais bzw. Schütz", "Kondensator", "Kathode einer LED", "Kabel Nummer 1"],
      answer: 0,
      explain: "K kennzeichnet Relais und Schütze. Kondensatoren tragen C, Dioden und LEDs D, Widerstände R, Transistoren Q oder T, Taster und Schalter S." },
    { id: "q-sw-1", topic: "cps-software", type: "single", exam: ["AP2"],
      q: "Warum sollte ein Sketch mit mehreren Aufgaben <code>millis()</code> statt langer <code>delay()</code>-Aufrufe verwenden?",
      options: ["delay() blockiert den Controller, sodass er während der Wartezeit auf nichts anderes reagiert", "millis() misst Temperaturen genauer", "delay() funktioniert nur auf dem ESP32", "millis() spart Flash-Speicher, weil keine Variablen nötig sind"],
      answer: 0,
      explain: "Während delay() steht das Programm still – ein Tastendruck oder Sensorereignis wird verpasst. Mit millis() prüft loop() nur, ob ein Intervall abgelaufen ist, und erledigt dazwischen andere Aufgaben. Dafür braucht man sogar zusätzliche Variablen (Zeitstempel)." },
    { id: "q-sw-2", topic: "cps-software", type: "multi", exam: ["AP2"],
      q: "Welche Faktoren bestimmen einen sinnvollen Abfragerhythmus für einen Sensor?",
      options: ["Wie schnell sich die Messgröße ändert", "Der kleinste zulässige Abfrageabstand laut Datenblatt", "Das Energie- und Datenbudget", "Die Farbe des Sensorgehäuses", "Die Länge des Variablennamens im Code"],
      answer: [0, 1, 2],
      explain: "Der Rhythmus richtet sich nach der Dynamik der Größe, den Grenzen des Sensors (z. B. DHT22 höchstens alle 2 s), der geforderten Reaktionszeit sowie Energie und Datenmenge. Gehäusefarbe und Variablennamen spielen keine Rolle." },
    { id: "q-sw-3", topic: "cps-software", type: "single", exam: ["AP1", "AP2"],
      q: "Welchen Wert hat m nach der Anweisung <code>int m = 299 / 8;</code> in C bzw. Arduino?",
      options: ["37", "37,375", "38", "0"],
      answer: 0,
      explain: "Beide Operanden sind Ganzzahlen, daher rechnet C eine Ganzzahldivision und schneidet die Nachkommastellen ab: 299 ÷ 8 = 37,375 → 37. Es wird nicht gerundet (also nicht 38). Für 37,375 bräuchte man z. B. 299.0 / 8 und eine float-Variable." },
    { id: "q-sw-4", topic: "cps-software", type: "single", exam: ["AP2"],
      q: "Was ist ein Vorteil eines Interrupts gegenüber dem Polling eines Eingangs?",
      options: ["Ein kurzer Impuls wird sofort erkannt, auch wenn das Hauptprogramm gerade etwas anderes tut", "Ein Interrupt benötigt keinen Pin", "Interrupts machen Bibliotheken überflüssig", "Mit Interrupts lassen sich analoge Werte ohne ADC lesen"],
      answer: 0,
      explain: "Beim Polling fragt loop() den Pin nur in Abständen ab; kurze Impulse dazwischen gehen verloren. Ein Interrupt unterbricht das Programm bei der Flanke sofort (beim UNO an D2/D3). Er ersetzt weder Pin noch ADC noch Bibliotheken." },
    { id: "q-sw-5", topic: "cps-software", type: "tf", exam: ["AP2"],
      q: "Mechanische Taster können beim Drücken mehrere schnelle Flanken erzeugen, deshalb werden sie entprellt.",
      answer: true,
      explain: "Richtig. Die Kontakte federn für einige Millisekunden nach. Per Software übernimmt man einen neuen Zustand erst, wenn er z. B. 20–50 ms stabil ist; alternativ entprellt man per Hardware (RC-Glied)." },
    { id: "q-sw-6", topic: "cps-software", type: "single", exam: ["AP2"],
      q: "Ein Sensor liefert wegen eines Kabelbruchs dauerhaft einen unmöglichen Wert. Wie sollte die CPS-Software reagieren?",
      options: ["Den Wert als unplausibel erkennen, einen sicheren Zustand herstellen und einen Fehler melden", "Den Wert unverändert an den Aktor weitergeben", "Den Controller in einer Endlosschleife neu starten", "Die Abfragerate erhöhen, bis wieder ein normaler Wert kommt"],
      answer: 0,
      explain: "Unplausible Werte (außerhalb des physikalisch möglichen Bereichs) dürfen keine Aktoren auslösen. Die Software sollte den Aktor in einen sicheren Zustand bringen (z. B. Pumpe aus) und den Fehler melden. Weitergeben, Dauer-Neustart oder schnelleres Abfragen beheben den Defekt nicht." },
    { id: "q-sw-7", topic: "cps-software", type: "multi", exam: ["AP2"],
      q: "Welche Vorteile bietet eine fertige Bauteil-Bibliothek, z. B. für den DHT22?",
      options: ["Sie kapselt Protokoll und Timing des Sensors", "Der eigene Code wird kürzer und besser lesbar", "Sie ist meist bereits von vielen Nutzern getestet", "Sie macht eine Quellenangabe in der Dokumentation überflüssig", "Sie garantiert, dass der Sensor nie ausfällt"],
      answer: [0, 1, 2],
      explain: "Bibliotheken nehmen dir Protokolldetails ab und sind erprobt. Sie müssen aber im Quellenverzeichnis genannt werden (Lizenz!) und schützen nicht vor Hardwaredefekten – den Fehlerfall musst du selbst behandeln." },
    { id: "q-bus-1", topic: "schnittstellen", type: "single", exam: ["AP2"],
      q: "Welche Signalleitungen nutzt der I²C-Bus?",
      options: ["SDA und SCL", "TX und RX", "MOSI, MISO, SCLK und CS", "CAN_H und CAN_L"],
      answer: 0,
      explain: "I²C nutzt die Datenleitung SDA und die Taktleitung SCL (plus GND), beide mit Pull-up-Widerständen. TX/RX gehören zu UART, MOSI/MISO/SCLK/CS zu SPI, CAN_H/CAN_L zum CAN-Bus." },
    { id: "q-bus-2", topic: "schnittstellen", type: "single", exam: ["AP2"],
      q: "Wie wählt der Controller bei SPI ein bestimmtes Gerät aus?",
      options: ["Über eine eigene Chip-Select-Leitung je Gerät", "Über eine 7-Bit-Adresse im Datenstrom", "Über eine werkseitige 64-Bit-Seriennummer", "Über die Priorität der Nachrichten-ID"],
      answer: 0,
      explain: "SPI kennt keine Adressen: Das Gerät, dessen CS-Leitung aktiv (meist LOW) ist, antwortet. 7-Bit-Adressen nutzt I²C, 64-Bit-IDs 1-Wire, Prioritäten über IDs der CAN-Bus." },
    { id: "q-bus-3", topic: "schnittstellen", type: "tf", exam: ["AP2"],
      q: "Bei UART verbindet man TX des Mikrocontrollers mit TX des Moduls.",
      answer: false,
      explain: "Falsch. Die Leitungen werden gekreuzt: TX (Senden) des einen Geräts an RX (Empfangen) des anderen – und umgekehrt. Zusätzlich braucht es eine gemeinsame Masse." },
    { id: "q-bus-4", topic: "schnittstellen", type: "input", exam: ["AP2"],
      q: "Wie viele Bit werden bei UART im Format 8N1 pro übertragenem Zeichen gesendet?",
      answer: ["10", "10 Bit", "zehn"],
      explain: "1 Startbit + 8 Datenbits + keine Parität (N) + 1 Stoppbit = 10 Bit. Bei 9600 Baud sind das 960 Zeichen pro Sekunde." },
    { id: "q-bus-5", topic: "schnittstellen", type: "multi", exam: ["AP2"],
      q: "Welche Aussagen zum CAN-Bus sind richtig?",
      options: ["Die Übertragung erfolgt differenziell über CAN_H und CAN_L", "Senden zwei Teilnehmer gleichzeitig, setzt sich die Nachricht mit der niedrigeren ID durch", "An jedem der zwei Busenden sitzt ein 120-Ω-Abschlusswiderstand", "CAN ist ein Funkstandard für Smart-Home-Geräte", "Jedes Gerät benötigt eine eigene Chip-Select-Leitung"],
      answer: [0, 1, 2],
      explain: "CAN ist ein drahtgebundener, störfester Multi-Master-Bus mit differenzieller Übertragung und Arbitrierung über die ID (niedrigere ID = höhere Priorität), abgeschlossen mit 2 × 120 Ω. Chip-Select-Leitungen gibt es bei SPI." },
    { id: "q-bus-6", topic: "schnittstellen", type: "input", exam: ["AP2"],
      q: "Ein PCF8574 hat die I²C-Adresse 0100 A2 A1 A0 (binär). Welche Adresse ergibt sich hexadezimal mit A2 = 1, A1 = 0, A0 = 1?",
      answer: ["0x25", "25", "25h", "25hex"],
      explain: "0100 101 → 0100101₂ = 32 + 4 + 1 = 37 dezimal = 0x25." },
    { id: "q-bus-7", topic: "schnittstellen", type: "single", exam: ["AP2"],
      q: "Ein HC-SR04 gibt am Echo-Pin 5 V aus, der ESP32 verträgt an seinen GPIOs nur 3,3 V. Welche Lösung ist geeignet?",
      options: ["Ein Spannungsteiler (z. B. 1 kΩ und 2 kΩ) oder ein Pegelwandler", "Ein 220-Ω-Vorwiderstand in der VCC-Leitung des Sensors", "Den Echo-Pin direkt an den 5-V-Pin des ESP32 anschließen", "Die Baudrate der seriellen Schnittstelle verringern"],
      answer: 0,
      explain: "Der Spannungsteiler setzt 5 V auf 5 × 2 ÷ 3 ≈ 3,33 V herab; alternativ passt ein Pegelwandler-Modul. Ein Widerstand in der Versorgung ändert den Signalpegel nicht zuverlässig, und die Baudrate hat mit Spannungspegeln nichts zu tun." },
    { id: "q-rf-1", topic: "iot-funk", type: "single", exam: ["AP2"],
      q: "Welche Funktechnik passt am besten zu batteriebetriebenen Bodenfeuchtesensoren auf weitläufigen Feldern, die alle 15 Minuten wenige Byte senden?",
      options: ["LoRaWAN", "WLAN", "Bluetooth Classic", "5-GHz-WLAN-Richtfunk"],
      answer: 0,
      explain: "LoRaWAN bietet Reichweiten im Kilometerbereich bei extrem geringem Energiebedarf – ideal für kleine Datenmengen in großen Abständen. WLAN und Richtfunk brauchen viel Energie und Infrastruktur, Bluetooth Classic hat zu wenig Reichweite." },
    { id: "q-rf-2", topic: "iot-funk", type: "single", exam: ["AP2"],
      q: "Welche Topologie nutzen Zigbee und Z-Wave typischerweise?",
      options: ["Mesh – Geräte leiten Nachrichten füreinander weiter", "Reine Punkt-zu-Punkt-Verbindung ohne Weiterleitung", "Ring mit Token-Weitergabe", "Linienbus mit Abschlusswiderständen"],
      answer: 0,
      explain: "Im Mesh leiten netzbetriebene Geräte (Router) Nachrichten weiter, sodass das Netz mit jedem Gerät wächst und Ausfälle umgangen werden. Abschlusswiderstände gibt es bei drahtgebundenen Bussen wie CAN." },
    { id: "q-rf-3", topic: "iot-funk", type: "tf", exam: ["AP2"],
      q: "LoRa und LoRaWAN bezeichnen genau dasselbe.",
      answer: false,
      explain: "Falsch. LoRa ist die Funkmodulation (physikalische Schicht), LoRaWAN das darauf aufbauende Netzwerkprotokoll mit Gateways, Netzwerkserver und AES-Verschlüsselung." },
    { id: "q-rf-4", topic: "iot-funk", type: "multi", exam: ["AP2"],
      q: "Welche Aussagen zu NB-IoT sind richtig?",
      options: ["Es nutzt lizenzierte Mobilfunkfrequenzen", "Es erreicht auch Geräte in Kellern gut", "Es eignet sich für HD-Videostreams", "Es kommt ohne SIM bzw. Mobilfunkvertrag aus", "Es funkt im 2,4-GHz-ISM-Band wie WLAN"],
      answer: [0, 1],
      explain: "NB-IoT ist ein Mobilfunkstandard für IoT mit sehr guter Gebäudedurchdringung und geringem Energiebedarf, aber niedriger Datenrate. Man braucht eine SIM bzw. einen Tarif beim Netzbetreiber; es nutzt lizenzierte LTE-Bänder, nicht das ISM-Band." },
    { id: "q-rf-5", topic: "iot-funk", type: "single", exam: ["AP2"],
      q: "Warum nutzt ein Fitness-Tracker zur Verbindung mit dem Smartphone typischerweise Bluetooth LE?",
      options: ["Sehr geringer Energiebedarf bei ausreichender Reichweite zum nahen Smartphone", "Größte Reichweite aller Funktechniken", "Höchste Datenrate für Videostreaming", "Es ist die einzige verschlüsselte Funktechnik"],
      answer: 0,
      explain: "BLE ist für kleine Datenmengen über kurze Distanzen bei minimalem Stromverbrauch gemacht – der Akku des Trackers hält so Tage. Reichweite und Datenrate sind gering, und auch andere Techniken verschlüsseln." },
    { id: "q-rf-6", topic: "iot-funk", type: "single", exam: ["AP2"],
      q: "In welchem Frequenzbereich funkt Z-Wave in Europa?",
      options: ["868 MHz", "2,4 GHz", "5 GHz", "13,56 MHz"],
      answer: 0,
      explain: "Z-Wave nutzt in Europa das SRD-Band um 868 MHz (wie LoRaWAN). Dadurch stört es WLAN, BLE und Zigbee im 2,4-GHz-Band nicht. 13,56 MHz ist die NFC-Frequenz." },
    { id: "q-mq-1", topic: "iot-protokolle", type: "single", exam: ["AP2"],
      q: "Welche Rolle hat der Broker bei MQTT?",
      options: ["Er nimmt veröffentlichte Nachrichten an und verteilt sie an alle Abonnenten des Topics", "Er misst die Sensorwerte und veröffentlicht sie", "Er ist der Aktor, der die Befehle ausführt", "Er übersetzt MQTT in das CAN-Protokoll"],
      answer: 0,
      explain: "Der Broker (z. B. Mosquitto) ist der zentrale Vermittler im Publish/Subscribe-Muster. Sensoren und Aktoren sind Clients, die veröffentlichen bzw. abonnieren." },
    { id: "q-mq-2", topic: "iot-protokolle", type: "multi", exam: ["AP2"],
      q: "Welche Topics empfängt ein Client mit dem Abonnement <code>haus/+/temp</code>?",
      options: ["haus/kueche/temp", "haus/bad/temp", "haus/og/bad/temp", "haus/kueche/feuchte", "garten/kueche/temp"],
      answer: [0, 1],
      explain: "+ ersetzt genau eine Topic-Ebene. haus/og/bad/temp hat eine Ebene zu viel (dafür bräuchte man haus/# oder haus/+/+/temp), …/feuchte endet anders, garten/… beginnt anders." },
    { id: "q-mq-3", topic: "iot-protokolle", type: "single", exam: ["AP2"],
      q: "Welche QoS-Stufe garantiert bei MQTT, dass eine Nachricht genau einmal zugestellt wird?",
      options: ["QoS 2", "QoS 1", "QoS 0", "QoS 3"],
      answer: 0,
      explain: "QoS 2 nutzt einen vierstufigen Handshake und stellt genau einmal zu. QoS 1 garantiert mindestens einmal (Duplikate möglich), QoS 0 höchstens einmal. Eine QoS 3 gibt es nicht." },
    { id: "q-mq-4", topic: "iot-protokolle", type: "input", exam: ["AP2"],
      q: "Welchen TCP-Port nutzt MQTT standardmäßig mit TLS-Verschlüsselung?",
      answer: ["8883"],
      explain: "MQTT über TLS nutzt Port 8883, unverschlüsseltes MQTT Port 1883. Im Firmennetz sollte nur die verschlüsselte Variante mit Anmeldung verwendet werden." },
    { id: "q-mq-5", topic: "iot-protokolle", type: "single", exam: ["AP2"],
      q: "Welche HTTP-Methode verwendet man in einer REST-API, um einen Messwert nur abzurufen?",
      options: ["GET", "POST", "DELETE", "PUT"],
      answer: 0,
      explain: "GET liest eine Ressource, ohne sie zu verändern. POST legt neue Ressourcen an, PUT ersetzt bzw. ändert, DELETE löscht." },
    { id: "q-mq-6", topic: "iot-protokolle", type: "single", exam: ["AP2"],
      q: "Welches Transportprotokoll verwendet CoAP?",
      options: ["UDP", "TCP", "ICMP", "ARP"],
      answer: 0,
      explain: "CoAP läuft über UDP (Port 5683, mit DTLS 5684) und ist damit sehr schlank für kleine Geräte. MQTT und HTTP nutzen TCP; ICMP und ARP sind keine Transportprotokolle für Anwendungsdaten." },
    { id: "q-mq-7", topic: "iot-protokolle", type: "tf", exam: ["AP2"],
      q: "Eine Retained Message wird vom Broker gespeichert und neuen Abonnenten des Topics sofort zugestellt.",
      answer: true,
      explain: "Richtig. Der Broker hält pro Topic die letzte als „retained“ markierte Nachricht vor. So sieht ein neu gestartetes Dashboard sofort den aktuellen Status." },
    { id: "q-mq-8", topic: "iot-protokolle", type: "single", exam: ["AP2"],
      q: "Warum wird die Entscheidung über eine Notbremsung im Fahrzeug selbst (Edge) und nicht in der Cloud getroffen?",
      options: ["Die Reaktion muss in Millisekunden erfolgen und darf nicht von einer Internetverbindung abhängen", "Weil Cloud-Rechenzentren keine Radardaten speichern können", "Weil Edge-Geräte immer mehr Rechenleistung haben als die Cloud", "Weil der Datenschutz Bremsentscheidungen in der Cloud verbietet"],
      answer: 0,
      explain: "Schon 100 ms Umweg bedeuten bei 100 km/h rund 2,8 m Fahrt ohne Reaktion, und im Funkloch gäbe es gar keine Entscheidung. Die Cloud hat meist mehr Rechenleistung – entscheidend sind hier Latenz und Ausfallsicherheit." },
    { id: "q-en-1", topic: "energie", type: "input", exam: ["AP1", "AP2"],
      q: "Welcher Vorwiderstand in Ω ist nötig, damit eine LED mit 2,0 V Flussspannung an 5 V mit 20 mA betrieben wird?",
      answer: ["150", "150 Ω", "150Ω", "150 Ohm", "150Ohm"],
      explain: "R = (U(Versorgung) − U(LED)) ÷ I = (5 V − 2,0 V) ÷ 0,02 A = 150 Ω." },
    { id: "q-en-2", topic: "energie", type: "single", exam: ["AP1", "AP2"],
      q: "Ein Akku hat 2000 mAh bei 3,7 V Nennspannung. Wie viel Energie speichert er?",
      options: ["7,4 Wh", "2000 Wh", "0,54 Wh", "74 Wh"],
      answer: 0,
      explain: "Energie = Kapazität × Spannung = 2 Ah × 3,7 V = 7,4 Wh. mAh ist eine Ladung, erst mit der Spannung wird daraus Energie. 0,54 ergäbe sich fälschlich aus 2 ÷ 3,7." },
    { id: "q-en-3", topic: "energie", type: "single", exam: ["AP1", "AP2"],
      q: "Wie wird ein Multimeter zur Strommessung angeschlossen?",
      options: ["In Reihe in den aufgetrennten Stromkreis", "Parallel zur Spannungsquelle", "Parallel zum Verbraucher", "Direkt zwischen die Pole des Akkus ohne Verbraucher"],
      answer: 0,
      explain: "Der zu messende Strom muss durch das Messgerät fließen, also Reihenschaltung. Parallel zur Quelle oder direkt an den Akku entstünde über den sehr kleinen Innenwiderstand des Amperemeters ein Kurzschluss. Parallel misst man die Spannung." },
    { id: "q-en-4", topic: "energie", type: "single", exam: ["AP1", "AP2"],
      q: "Ein Linearregler erzeugt aus 12 V bei 200 mA eine 5-V-Versorgung. Wie groß ist die Verlustleistung ungefähr?",
      options: ["1,4 W", "2,4 W", "1,0 W", "0,2 W"],
      answer: 0,
      explain: "P(zu) = 12 V × 0,2 A = 2,4 W, P(ab) = 5 V × 0,2 A = 1,0 W. Die Differenz von 1,4 W wird im Regler zu Wärme (η ≈ 42 %)." },
    { id: "q-en-5", topic: "energie", type: "multi", exam: ["AP2"],
      q: "Welche Maßnahmen verlängern die Akkulaufzeit eines Sensorknotens?",
      options: ["Tiefschlaf zwischen den Messungen", "Seltener senden (längeres Intervall)", "Schaltregler statt Linearregler verwenden", "Eine Status-LED dauerhaft leuchten lassen", "Die WLAN-Verbindung ständig aktiv halten"],
      answer: [0, 1, 2],
      explain: "Der mittlere Strom sinkt, wenn der Knoten meist schläft, selten funkt und die Spannung verlustarm gewandelt wird. Eine Dauer-LED oder ständig aktives WLAN erhöhen den Verbrauch deutlich." },
    { id: "q-en-6", topic: "energie", type: "tf", exam: ["AP1", "AP2"],
      q: "Ein Raspberry Pi mit durchschnittlich 5 W im Dauerbetrieb verbraucht pro Jahr 43,8 kWh.",
      answer: true,
      explain: "Richtig: 5 W × 8760 h = 43 800 Wh = 43,8 kWh. Bei 0,35 €/kWh sind das etwa 15,33 € pro Jahr." },
    { id: "q-en-7", topic: "energie", type: "single", exam: ["AP1", "AP2"],
      q: "Zwei Widerstände von je 120 Ω werden parallel geschaltet. Wie groß ist der Gesamtwiderstand?",
      options: ["60 Ω", "240 Ω", "120 Ω", "14 400 Ω"],
      answer: 0,
      explain: "1/R = 1/120 + 1/120 = 2/120 → R = 60 Ω. Bei gleich großen Widerständen halbiert sich der Wert. 240 Ω wäre die Reihenschaltung. Genau diese 60 Ω misst man an einem korrekt abgeschlossenen CAN-Bus." },
    { id: "q-sec-1", topic: "iot-sicherheit", type: "multi", exam: ["AP2"],
      q: "Welche Maßnahmen erhöhen die Sicherheit von IoT-Geräten im Firmennetz?",
      options: ["Standardpasswörter durch individuelle, starke Passwörter ersetzen", "IoT-Geräte in ein eigenes VLAN legen", "Firmware-Updates regelmäßig einspielen", "Fernzugriff per Portweiterleitung direkt aus dem Internet erlauben", "Telnet für die einfache Wartung aktiviert lassen"],
      answer: [0, 1, 2],
      explain: "Individuelle Passwörter, Segmentierung und Updates schließen die häufigsten Lücken. Portweiterleitungen machen Geräte aus dem Internet angreifbar (besser VPN), Telnet überträgt unverschlüsselt und sollte abgeschaltet werden." },
    { id: "q-sec-2", topic: "iot-sicherheit", type: "single", exam: ["AP2"],
      q: "Wie übernahm das Mirai-Botnetz 2016 vor allem IoT-Geräte wie Kameras und Router?",
      options: ["Über unveränderte Standard-Zugangsdaten", "Über eine gebrochene WPA3-Verschlüsselung", "Über gefälschte Firmware-Signaturen der Hersteller", "Über physischen Zugriff auf jedes einzelne Gerät"],
      answer: 0,
      explain: "Mirai probierte eine Liste bekannter Werkspasswörter über Telnet durch und übernahm so massenhaft Geräte für DDoS-Angriffe. WPA3 gab es damals noch nicht, und physischer Zugriff wäre für Hunderttausende Geräte unrealistisch." },
    { id: "q-sec-3", topic: "iot-sicherheit", type: "single", exam: ["AP2"],
      q: "Worin unterscheiden sich Betriebssicherheit (Safety) und Informationssicherheit (Security)?",
      options: ["Safety schützt Menschen und Umwelt vor der Anlage, Security schützt Anlage und Daten vor Angriffen", "Safety betrifft nur Software, Security nur Hardware", "Safety schützt Daten vor Angriffen, Security schützt Menschen vor der Anlage", "Safety ist ein Begriff aus dem Datenschutz, Security aus dem Arbeitsrecht"],
      answer: 0,
      explain: "Safety: Die Anlage darf niemanden gefährden (Not-Aus, sicherer Zustand). Security: Angreifer dürfen Anlage und Daten nicht manipulieren. Im CPS hängen beide zusammen – ein manipulierter Befehl kann eine physische Gefahr auslösen." },
    { id: "q-sec-4", topic: "iot-sicherheit", type: "single", exam: ["AP2"],
      q: "Warum sind die Daten eines Fitness-Trackers datenschutzrechtlich besonders heikel?",
      options: ["Es sind Gesundheitsdaten und damit besondere Kategorien personenbezogener Daten nach Art. 9 DSGVO", "Weil sie per Bluetooth statt per WLAN übertragen werden", "Weil Fitness-Tracker keinem Hersteller zugeordnet werden können", "Weil die DSGVO ausschließlich für Wearables gilt"],
      answer: 0,
      explain: "Puls, Schlaf und Aktivität sind Gesundheitsdaten. Ihre Verarbeitung ist nach Art. 9 DSGVO grundsätzlich verboten, außer es greift eine Ausnahme wie die ausdrückliche Einwilligung. Die Funktechnik spielt dafür keine Rolle." },
    { id: "q-sec-5", topic: "iot-sicherheit", type: "tf", exam: ["AP2"],
      q: "Verschlüsselung allein verhindert zuverlässig, dass ein Angreifer eigene Befehle an einen Aktor sendet.",
      answer: false,
      explain: "Falsch. Verschlüsselung schützt die Vertraulichkeit. Damit nur Berechtigte Befehle senden können, braucht es zusätzlich Authentifizierung und Integritätsschutz (z. B. Anmeldung am Broker, Zertifikate, Schutz vor Replay)." },
    { id: "q-sec-6", topic: "iot-sicherheit", type: "single", exam: ["AP2"],
      q: "Welcher Grundsatz der DSGVO verlangt, nur die für den Zweck notwendigen Daten zu erheben?",
      options: ["Datenminimierung", "Rechenschaftspflicht", "Integrität und Vertraulichkeit", "Richtigkeit"],
      answer: 0,
      explain: "Datenminimierung (Art. 5 Abs. 1 lit. c DSGVO): angemessen, erheblich und auf das notwendige Maß beschränkt. Für ein CPS heißt das z. B.: Kamera nur auf den nötigen Bereich richten, Rohdaten lokal verdichten." },
    { id: "q-sec-7", topic: "iot-sicherheit", type: "multi", exam: ["AP2"],
      q: "Welche Daten eines Smart-Home-Systems können personenbezogen sein?",
      options: ["Zeitpunkte, zu denen die Haustür geöffnet wird", "Heizprofile, die Anwesenheit erkennen lassen", "Kamerabilder vom Hauseingang", "Die vom Hersteller veröffentlichte aktuelle Firmware-Version des Thermostat-Modells", "Die Sendefrequenz des Funkstandards"],
      answer: [0, 1, 2],
      explain: "Türöffnungen, Heizprofile und Kamerabilder lassen sich einer Person bzw. einem Haushalt zuordnen und verraten Gewohnheiten und Anwesenheit. Die allgemein veröffentlichte Firmware-Version eines Gerätemodells und die Funkfrequenz sind technische Angaben ohne Personenbezug." },
    { id: "q-pd-1", topic: "projekt-doku", type: "single", exam: [],
      q: "Wie wird der vollständige Sourcecode laut den Projektvorgaben der Klasse abgegeben?",
      options: ["Als separate Datei; in der Dokumentation steht nur ein Verweis auf den Dateinamen", "Komplett als Textblock im Hauptteil der Dokumentation", "Als Screenshot im Anhang", "Gar nicht – abgegeben werden nur die verwendeten KI-Prompts"],
      answer: 0,
      explain: "Der Code liegt als eigene Datei bei. In der Doku werden nur die wichtigen Abschnitte (Kernlogik, Berechnungen, Schwellwerte, Aktorsteuerung) erläutert. Prompts gehören laut Vorgaben ausdrücklich nicht in die Dokumentation." },
    { id: "q-pd-2", topic: "projekt-doku", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Inhalte gehören in ein Abnahmeprotokoll?",
      options: ["Festgestellte Mängel und Fristen zu ihrer Beseitigung", "Unterschriften von Auftraggeber und Auftragnehmer", "Datum und Umfang der abgenommenen Leistungen", "Die privaten Telefonnummern aller Auszubildenden", "Der vollständige Quellcode"],
      answer: [0, 1, 2],
      explain: "Das Abnahmeprotokoll dokumentiert, was wann abgenommen wurde, welche Mängel bestehen, bis wann sie behoben werden und dass beide Seiten zustimmen (Unterschriften). Private Daten und Quellcode gehören nicht hinein." },
    { id: "q-pd-3", topic: "projekt-doku", type: "single", exam: ["AP1"],
      q: "Statt der vereinbarten vier Sensoren werden nur drei geliefert. Welche Mängelart liegt vor?",
      options: ["Minderlieferung", "Falschlieferung", "Schlechtleistung", "Lieferverzug"],
      answer: 0,
      explain: "Zu wenig geliefert = Minderlieferung. Falschlieferung wäre ein anderer Artikel (DHT11 statt DHT22), Schlechtleistung eine mangelhafte Beschaffenheit (defektes Display). Lieferverzug betrifft den Termin, nicht die Menge." },
    { id: "q-pd-4", topic: "projekt-doku", type: "single", exam: ["AP2"],
      q: "Welche Unterlage zeigt die elektrischen Verbindungen einer Schaltung mit Normsymbolen und Pinbezeichnungen?",
      options: ["Schaltplan", "Blockschaltbild", "Stückliste", "Lastenheft"],
      answer: 0,
      explain: "Der Schaltplan zeigt jede elektrische Verbindung mit Symbolen. Das Blockschaltbild zeigt nur Funktionsblöcke und Flüsse, die Stückliste die Bauteile, das Lastenheft die Anforderungen des Kunden." },
    { id: "q-pd-5", topic: "projekt-doku", type: "tf", exam: ["AP1", "AP2"],
      q: "Ein Prüfprotokoll braucht zu jedem Prüfschritt einen Sollwert, damit ein Soll-Ist-Vergleich möglich ist.",
      answer: true,
      explain: "Richtig. Nur mit Sollwert (und Toleranz) lässt sich der gemessene Istwert als „in Ordnung“ oder „nicht in Ordnung“ bewerten." },
    { id: "q-pd-6", topic: "projekt-doku", type: "input", exam: ["AP1", "AP2"],
      q: "Für ein CPS-Projekt waren 16 Stunden geplant, benötigt wurden 20 Stunden. Um wie viel Prozent wurde der Plan überschritten?",
      answer: ["25", "25%", "25 %", "25 Prozent", "+25", "+25 %"],
      explain: "Abweichung = 20 h − 16 h = 4 h; 4 ÷ 16 × 100 % = 25 %. Bezugsgröße ist immer der Planwert (Soll)." }
  ],
  cards: [
    { topic: "cps-grundlagen", f: "Cyber-physisches System (CPS)", b: "Rechentechnik (Software, Controller, Netz) ist über Sensoren und Aktoren eng mit einem physischen Prozess gekoppelt: messen – entscheiden – handeln, meist vernetzt." },
    { topic: "cps-grundlagen", f: "Schnittstelle physische Welt ↔ IT", b: "Sensoren (Eingabe: physikalische Größe → elektrisches/digitales Signal) und Aktoren (Ausgabe: Steuersignal → Bewegung, Wärme, Licht …)." },
    { topic: "cps-grundlagen", f: "Embedded System vs. IoT-Gerät", b: "Embedded: fest eingebauter Rechner für eine Spezialaufgabe, nicht zwingend vernetzt. IoT: vernetzter Gegenstand, Daten oft in der Cloud." },
    { topic: "cps-grundlagen", f: "Automatisierungspyramide (unten → oben)", b: "Feld (Sensoren/Aktoren) → Steuerung (SPS) → Prozessleitung (SCADA) → Betriebsleitung (MES) → Unternehmen (ERP)." },
    { topic: "cps-grundlagen", f: "Digitales Modell / Schatten / Zwilling", b: "Modell: Datenfluss manuell. Schatten: real → digital automatisch. Zwilling: automatisch in beide Richtungen." },
    { topic: "steuerung-regelung", f: "Steuerung vs. Regelung", b: "Steuerung: offene Kette ohne Rückführung. Regelung: geschlossener Kreis – Istwert wird gemessen, mit Sollwert verglichen und nachgestellt." },
    { topic: "steuerung-regelung", f: "Regeldifferenz", b: "e = w − x (Führungsgröße/Sollwert minus Regelgröße/Istwert)." },
    { topic: "steuerung-regelung", f: "w, x, y, z im Regelkreis", b: "w = Führungsgröße (Soll), x = Regelgröße (Ist), y = Stellgröße, z = Störgröße." },
    { topic: "steuerung-regelung", f: "Hysterese beim Zweipunktregler", b: "Schaltlücke zwischen Ein- und Ausschaltpunkt (z. B. 20,5/21,5 °C) – verhindert ständiges Schalten und Verschleiß." },
    { topic: "fluesse", f: "Linienarten im Blockschaltbild (Unterricht)", b: "Energie: dünn durchgezogen · Stoff: dick durchgezogen · Information: gestrichelt." },
    { topic: "fluesse", f: "Typische Wirkungskette im CPS", b: "Information → Energie → Stoff (Messwert → Motor-/Ventilstrom → Wasser strömt)." },
    { topic: "fluesse", f: "Steuersignal zum Relais / Laststrom zum Motor", b: "Steuersignal = Informationsfluss; Laststrom = Energiefluss." },
    { topic: "hardware-plattformen", f: "Mikrocontroller", b: "Ein-Chip-Computer (CPU, Flash, RAM, GPIO, ADC), ohne OS oder mit RTOS, sparsam und echtzeitfähig – z. B. ATmega328P, ESP32." },
    { topic: "hardware-plattformen", f: "Single Board Computer (SBC)", b: "Vollständiger Computer auf einer Platine mit Linux, USB, HDMI, Netzwerk, GPIO – z. B. Raspberry Pi. Mehr Leistung, mehr Energiebedarf." },
    { topic: "hardware-plattformen", f: "System-on-Chip (SoC)", b: "CPU-Kerne, Grafik, Speichercontroller und Funkmodule auf einem Chip – Basis von Smartphones, Wearables und Raspberry Pi." },
    { topic: "hardware-plattformen", f: "Analogsensor am Raspberry Pi?", b: "Geht nicht direkt – der Pi hat keinen ADC. Externen A/D-Wandler über I²C oder SPI nutzen." },
    { topic: "sensoren-aktoren", f: "HC-SR501", b: "PIR-Bewegungsmelder: reagiert auf Änderung der IR-Wärmestrahlung, Ausgang HIGH für die Haltezeit; Potis für Empfindlichkeit und Haltezeit, Jumper für Einzel-/Mehrfachauslösung." },
    { topic: "sensoren-aktoren", f: "HC-SR04: Abstand berechnen", b: "s = v × t ÷ 2 mit v ≈ 343 m/s; Faustformel: cm ≈ Echo-µs ÷ 58." },
    { topic: "sensoren-aktoren", f: "NTC", b: "Heißleiter: Widerstand sinkt bei steigender Temperatur; Auslesen über Spannungsteiler am ADC." },
    { topic: "sensoren-aktoren", f: "Warum Motor/Relais nicht direkt an den Pin?", b: "Pin liefert nur ca. 20 mA; Motoren brauchen mehr Strom und erzeugen Spannungsspitzen → Transistor, Treiber oder Relaismodul." },
    { topic: "sensoren-aktoren", f: "DS18B20", b: "Digitaler Temperatursensor (−55 bis +125 °C) am 1-Wire-Bus, 4,7-kΩ-Pull-up, eigene 64-Bit-ID." },
    { topic: "sensoren-aktoren", f: "Reed-Kontakt", b: "Magnetisch betätigter Kontakt im Glasröhrchen; binärer Tür-/Fensterkontakt, am Pin mit Pull-up gegen GND." },
    { topic: "sensoren-aktoren", f: "Accuracy vs. Resolution", b: "Accuracy = Genauigkeit (max. Abweichung vom wahren Wert). Resolution = Auflösung (kleinster Schritt). DS18B20: 0,0625 °C Auflösung, ca. ±0,5 °C Genauigkeit." },
    { topic: "sensoren-aktoren", f: "Absolute maximum ratings", b: "Grenzwerte im Datenblatt, die nie überschritten werden dürfen – keine Betriebswerte." },
    { topic: "signale-ad", f: "Stufen eines n-Bit-ADC", b: "2ⁿ Stufen, größter Wert 2ⁿ − 1 (10 Bit: 1024 / 1023; 12 Bit: 4096 / 4095)." },
    { topic: "signale-ad", f: "LSB am Arduino UNO", b: "5 V ÷ 1024 ≈ 4,88 mV pro Stufe." },
    { topic: "signale-ad", f: "Abtasttheorem (Nyquist-Shannon)", b: "fₐ > 2 × fₘₐₓ – sonst entsteht Aliasing." },
    { topic: "signale-ad", f: "Datenrate digitalisierter Signale", b: "Abtastrate × Bit pro Wert × Kanäle (CD: 44 100 × 16 × 2 = 1 411 200 bit/s)." },
    { topic: "signale-ad", f: "PWM: Tastgrad und Mittelwert", b: "D = analogWrite-Wert ÷ 255; U(mittel) = D × 5 V (64 → 25,1 % → 1,25 V)." },
    { topic: "arduino", f: "setup() und loop()", b: "setup(): einmal nach Start/Reset (pinMode, Serial.begin). loop(): läuft danach endlos." },
    { topic: "arduino", f: "analogRead / analogWrite", b: "analogRead: 0–1023 (10-Bit-ADC). analogWrite: 0–255 (8-Bit-PWM), nur an ~-Pins." },
    { topic: "arduino", f: "PWM-Pins des UNO R3", b: "3, 5, 6, 9, 10, 11 (Tilde ~)." },
    { topic: "arduino", f: "INPUT_PULLUP", b: "Interner Pull-up; Taster gegen GND → gedrückt = LOW (invertierte Logik)." },
    { topic: "arduino", f: "Zeichensalat im seriellen Monitor", b: "Baudrate im Monitor stimmt nicht mit Serial.begin() überein." },
    { topic: "arduino", f: "int auf dem UNO", b: "16 Bit mit Vorzeichen: −32 768 bis 32 767 (auf dem ESP32: 32 Bit)." },
    { topic: "arduino", f: "Datentyp für millis()", b: "unsigned long (0 bis 4 294 967 295 ms, Überlauf nach ca. 49,7 Tagen)." },
    { topic: "schaltplan", f: "Widerstands-Farbcode (4 Ringe)", b: "Ziffer, Ziffer, Multiplikator (10 hoch Ziffer), Toleranz. rot-rot-braun-gold = 220 Ω ± 5 %." },
    { topic: "schaltplan", f: "Farben 0–9", b: "schwarz 0, braun 1, rot 2, orange 3, gelb 4, grün 5, blau 6, violett 7, grau 8, weiß 9." },
    { topic: "schaltplan", f: "Steckbrett: was ist verbunden?", b: "Je 5 Kontakte einer Reihe (Mittelrille trennt) und die Versorgungsschienen über ihre Länge." },
    { topic: "schaltplan", f: "LED-Polung", b: "Anode = langes Bein (zum Pin/Plus), Kathode = kurzes Bein bzw. abgeflachte Seite (nach GND)." },
    { topic: "schaltplan", f: "Freilaufdiode", b: "Parallel zur Relais- oder Motorspule, Kathode an Plus; leitet die Abschalt-Spannungsspitze ab." },
    { topic: "schaltplan", f: "Verbindungspunkt im Schaltplan", b: "Punkt = verbunden; Kreuzung ohne Punkt = nicht verbunden. Gleiche Netznamen (GND, 5V) = verbunden." },
    { topic: "cps-software", f: "delay() vs. millis()", b: "delay() blockiert alles; mit millis() wird geprüft, ob ein Intervall abgelaufen ist – andere Aufgaben laufen weiter." },
    { topic: "cps-software", f: "Polling vs. Interrupt", b: "Polling: Eingang regelmäßig abfragen. Interrupt: sofortige Reaktion auf eine Flanke (UNO: D2, D3)." },
    { topic: "cps-software", f: "Entprellen", b: "Tasterzustand erst übernehmen, wenn er ca. 20–50 ms stabil ist (Kontakte federn nach)." },
    { topic: "cps-software", f: "int m = 299 / 8;", b: "m = 37 – Ganzzahldivision schneidet ab. Für 37,375: 299.0 / 8 mit float." },
    { topic: "schnittstellen", f: "I²C", b: "SDA + SCL, synchron, halbduplex, 7-Bit-Adressen, Pull-ups, 100/400 kbit/s." },
    { topic: "schnittstellen", f: "SPI", b: "SCLK, MOSI, MISO + CS je Gerät; synchron, vollduplex, sehr schnell, keine Adressen." },
    { topic: "schnittstellen", f: "UART 8N1", b: "TX↔RX gekreuzt, asynchron, gleiche Baudrate; 1 Start + 8 Daten + 1 Stopp = 10 Bit pro Zeichen." },
    { topic: "schnittstellen", f: "CAN-Bus", b: "Differenziell (CAN_H/CAN_L), Multi-Master, niedrigere ID = höhere Priorität, je 120 Ω an beiden Enden (gemessen 60 Ω)." },
    { topic: "schnittstellen", f: "Spannungsteiler 5 V → 3,3 V", b: "U(aus) = U(ein) × R2 ÷ (R1 + R2); 1 kΩ/2 kΩ → 5 V × 2/3 ≈ 3,33 V." },
    { topic: "iot-funk", f: "LoRaWAN", b: "868 MHz, Reichweite km, sehr geringe Datenrate, extrem sparsam; Sensor → Gateway → Netzwerkserver; Duty Cycle meist 1 %." },
    { topic: "iot-funk", f: "Zigbee / Z-Wave", b: "Mesh-Funk fürs Smart Home. Zigbee: 2,4 GHz (IEEE 802.15.4, 250 kbit/s). Z-Wave: 868 MHz." },
    { topic: "iot-funk", f: "Bluetooth LE", b: "2,4 GHz, kurze Reichweite, sehr geringer Energiebedarf – Wearables, Beacons." },
    { topic: "iot-funk", f: "NB-IoT", b: "Mobilfunk in lizenzierten Bändern, sehr gute Gebäude-/Kellerdurchdringung, geringe Datenrate, SIM nötig." },
    { topic: "iot-protokolle", f: "MQTT-Ports", b: "1883 (unverschlüsselt), 8883 (TLS)." },
    { topic: "iot-protokolle", f: "MQTT-Wildcards", b: "+ = genau eine Ebene; # = alle folgenden Ebenen (nur am Ende)." },
    { topic: "iot-protokolle", f: "MQTT QoS 0 / 1 / 2", b: "Höchstens einmal / mindestens einmal (Duplikate möglich) / genau einmal." },
    { topic: "iot-protokolle", f: "Last Will and Testament", b: "Nachricht, die der Broker veröffentlicht, wenn ein Client unerwartet die Verbindung verliert." },
    { topic: "iot-protokolle", f: "CoAP", b: "REST-ähnliches Protokoll über UDP (5683, DTLS 5684) für sehr kleine Geräte." },
    { topic: "iot-protokolle", f: "Edge / Fog / Cloud", b: "Am Gerät bzw. Gateway / lokale Zwischenschicht im Betrieb / zentrales Rechenzentrum. Schnell und sicherheitskritisch → Edge." },
    { topic: "energie", f: "Ohmsches Gesetz und Leistung", b: "U = R × I; P = U × I = I² × R; W = P × t." },
    { topic: "energie", f: "Akkuenergie", b: "Wh = Ah × V (2000 mAh × 3,7 V = 7,4 Wh)." },
    { topic: "energie", f: "Mittlerer Strom bei Duty Cycle", b: "Σ(Strom × Zeit) ÷ Periodendauer; Laufzeit = nutzbare Kapazität ÷ mittlerer Strom." },
    { topic: "energie", f: "Strom- und Spannungsmessung", b: "Strom: in Reihe (Kreis auftrennen). Spannung: parallel zum Bauteil. Widerstand: spannungsfrei." },
    { topic: "iot-sicherheit", f: "IoT-Sicherheit – fünf Klassiker", b: "Standardpasswort ändern, Updates, eigenes Netzsegment (VLAN), Verschlüsselung + Authentifizierung, nur nötige Daten erfassen." },
    { topic: "iot-sicherheit", f: "Safety vs. Security", b: "Safety: Menschen/Umwelt vor der Anlage schützen. Security: Anlage/Daten vor Angriffen schützen." },
    { topic: "iot-sicherheit", f: "Cyber Resilience Act", b: "EU-Verordnung 2024/2847: Sicherheitsanforderungen an Produkte mit digitalen Elementen; Meldepflichten ab 11.09.2026, voll ab 11.12.2027." },
    { topic: "iot-sicherheit", f: "Art. 9 DSGVO", b: "Besondere Kategorien personenbezogener Daten, u. a. Gesundheitsdaten (Fitness-Tracker)." },
    { topic: "projekt-doku", f: "Mängelarten", b: "Schlechtleistung (mangelhaft), Falschlieferung (anderer Artikel), Minderlieferung (zu wenig)." },
    { topic: "projekt-doku", f: "Prüfprotokoll – Spalten", b: "Prüfschritt, Sollwert mit Toleranz, Istwert, Ergebnis (i. O./n. i. O.), dazu Datum, Prüfer, Messgerät." },
    { topic: "projekt-doku", f: "Lastenheft vs. Pflichtenheft", b: "Lastenheft: Was will der Auftraggeber? Pflichtenheft: Wie setzt der Auftragnehmer es um?" },
    { topic: "projekt-doku", f: "Sourcecode in der Projektdoku (Klasse)", b: "Als separate Datei beilegen, in der Doku nur Verweis; wichtige Abschnitte werden erläutert." }
  ],
  checklist: [
    { id: "c-cps-1", topic: "cps-grundlagen", text: "Ich kann den Begriff cyber-physisches System erklären und von Embedded System, IoT und Industrie 4.0 abgrenzen.", exam: ["AP2"] },
    { id: "c-cps-2", topic: "cps-grundlagen", text: "Ich kann in einem Szenario alle Sensoren und Aktoren mit ihrer physikalischen Größe nennen und die Schnittstelle zwischen physischer Welt und IT beschreiben.", exam: ["AP2"] },
    { id: "c-cps-3", topic: "cps-grundlagen", text: "Ich kann digitalen Zwilling und Predictive Maintenance an einem Beispiel erläutern.", exam: ["AP2"] },
    { id: "c-reg-1", topic: "steuerung-regelung", text: "Ich kann begründet entscheiden, ob eine Steuerung oder eine Regelung vorliegt.", exam: ["AP2"] },
    { id: "c-reg-2", topic: "steuerung-regelung", text: "Ich kann Führungs-, Regel-, Stell- und Störgröße einem Beispiel zuordnen und die Regeldifferenz e = w − x berechnen.", exam: ["AP2"] },
    { id: "c-reg-3", topic: "steuerung-regelung", text: "Ich kann die Schaltpunkte eines Zweipunktreglers mit Hysterese bestimmen und die Logik als Pseudocode formulieren.", exam: ["AP2"] },
    { id: "c-fl-1", topic: "fluesse", text: "Ich kann Energie-, Stoff- und Informationsflüsse eines CPS benennen und im Blockschaltbild mit der richtigen Linienart darstellen." },
    { id: "c-fl-2", topic: "fluesse", text: "Ich kann eine Wechselwirkung zwischen zwei Flussarten beschreiben und daraus eine systematische Fehlersuche ableiten." },
    { id: "c-hw-1", topic: "hardware-plattformen", text: "Ich kann Mikrocontroller, SBC, SoC und Embedded System nach Rechenleistung, Betriebssystem, Energiebedarf, Echtzeit und Kosten vergleichen.", exam: ["AP2"] },
    { id: "c-hw-2", topic: "hardware-plattformen", text: "Ich kann für ein Szenario eine Hardware-Plattform begründet auswählen, auch mithilfe einer Nutzwertanalyse.", exam: ["AP2"] },
    { id: "c-sa-1", topic: "sensoren-aktoren", text: "Ich kann Sensoren nach Signalart (binär, analog, Bus) einordnen und für eine Messaufgabe anhand des Datenblatts einen geeigneten Sensor auswählen.", exam: ["AP1", "AP2"] },
    { id: "c-sa-2", topic: "sensoren-aktoren", text: "Ich kann aus der Echo-Laufzeit eines Ultraschallsensors den Abstand berechnen.", exam: ["AP2"] },
    { id: "c-sa-3", topic: "sensoren-aktoren", text: "Ich kann erklären, warum Motoren, Relais und Ventile über Treiber oder Relaismodule angesteuert werden.", exam: ["AP2"] },
    { id: "c-sa-4", topic: "sensoren-aktoren", text: "Ich kann Angaben aus englischen Datenblättern (supply voltage, supply/quiescent current, accuracy, resolution, absolute maximum ratings) übersetzen und für die Auswahl bewerten.", exam: ["AP1", "AP2"] },
    { id: "c-sa-5", topic: "sensoren-aktoren", text: "Ich kann für Aufgaben im Gebäude- und Arbeitsplatzumfeld (Anwesenheit, Fensterzustand, Helligkeit, Temperatur, Luftqualität) den passenden Sensor nennen.", exam: ["AP1", "AP2"] },
    { id: "c-ad-1", topic: "signale-ad", text: "Ich kann Stufenzahl, LSB und Digitalwert eines A/D-Wandlers berechnen und einen Digitalwert in eine Spannung zurückrechnen." },
    { id: "c-ad-2", topic: "signale-ad", text: "Ich kann die Mindestabtastrate nach dem Abtasttheorem bestimmen und Datenrate sowie Datenmenge berechnen.", exam: ["AP1", "AP2"] },
    { id: "c-ad-3", topic: "signale-ad", text: "Ich kann PWM-Werte in Tastgrad und mittlere Spannung umrechnen und umgekehrt." },
    { id: "c-ar-1", topic: "arduino", text: "Ich kann die Pins des Arduino UNO R3 (digital, analog, PWM, Versorgung) und ihre Grenzen erklären." },
    { id: "c-ar-2", topic: "arduino", text: "Ich kann einen Sketch mit setup(), loop(), pinMode, digitalRead/digitalWrite, analogRead/analogWrite und Serial lesen, ergänzen und testen.", exam: ["AP2"] },
    { id: "c-ar-3", topic: "arduino", text: "Ich kann einen PIR-Bewegungsmelder HC-SR501 und eine LED anschließen, ansteuern und die Meldungen im seriellen Monitor ausgeben." },
    { id: "c-ar-4", topic: "arduino", text: "Ich kann für Variablen den passenden Datentyp (int, long, unsigned long, float, bool, byte) wählen und Überläufe sowie Ganzzahldivisionen erkennen.", exam: ["AP2"] },
    { id: "c-ar-5", topic: "arduino", text: "Ich kann den Fade-Sketch erweitern (zweite LED gegenläufig) und die Dauer eines Dimmzyklus aus Schrittweite und delay() berechnen." },
    { id: "c-sp-1", topic: "schaltplan", text: "Ich kann die wichtigsten Schaltzeichen und Bauteilkennzeichen lesen und zu meinem Aufbau einen Schaltplan mit Pin-Zuordnungstabelle zeichnen." },
    { id: "c-sp-2", topic: "schaltplan", text: "Ich kann den Widerstands-Farbcode bestimmen, eine Schaltung fehlerfrei auf dem Steckbrett aufbauen und typische Aufbaufehler finden." },
    { id: "c-sp-3", topic: "schaltplan", text: "Ich kann erklären, wozu Transistor und Freilaufdiode beim Schalten eines Relais dienen, und einen Basiswiderstand abschätzen." },
    { id: "c-sw-1", topic: "cps-software", text: "Ich kann einen Abfragerhythmus für Sensoren planen und mit Dynamik, Sensorgrenzen, Energie und Datenmenge begründen.", exam: ["AP2"] },
    { id: "c-sw-2", topic: "cps-software", text: "Ich kann typische Fehler (= statt ==, Ganzzahldivision, falscher Pin, fehlender Fehlerfall) finden und einen Schreibtischtest durchführen.", exam: ["AP1", "AP2"] },
    { id: "c-sw-3", topic: "cps-software", text: "Ich kann erklären, wie Bibliotheken den Zugriff auf Sensoren und Aktoren vereinfachen und was ich bei ihrer Auswahl beachte.", exam: ["AP2"] },
    { id: "c-bus-1", topic: "schnittstellen", text: "Ich kann UART, I²C, SPI, 1-Wire und CAN nach Leitungen, Takt, Adressierung, Geschwindigkeit und Einsatz vergleichen.", exam: ["AP2"] },
    { id: "c-bus-2", topic: "schnittstellen", text: "Ich kann UART-Übertragungszeiten und I²C-Adressen berechnen und einen Spannungsteiler zur Pegelanpassung dimensionieren.", exam: ["AP2"] },
    { id: "c-rf-1", topic: "iot-funk", text: "Ich kann WLAN, BLE, Zigbee, Z-Wave, LoRaWAN und NB-IoT nach Reichweite, Datenrate, Energiebedarf und Topologie vergleichen und für ein Szenario begründet auswählen.", exam: ["AP2"] },
    { id: "c-rf-2", topic: "iot-funk", text: "Ich kann den Aufbau eines LoRaWAN-Netzes (Knoten, Gateway, Netzwerkserver) beschreiben und aus dem Duty Cycle die zulässige Sendehäufigkeit berechnen.", exam: ["AP2"] },
    { id: "c-mq-1", topic: "iot-protokolle", text: "Ich kann das Publish/Subscribe-Prinzip von MQTT mit Broker, Topics, Wildcards, QoS, Retained Message und Last Will erklären.", exam: ["AP2"] },
    { id: "c-mq-2", topic: "iot-protokolle", text: "Ich kann MQTT, HTTP/REST und CoAP vergleichen und begründen, welche Verarbeitung an die Edge, in den Fog oder in die Cloud gehört.", exam: ["AP2"] },
    { id: "c-en-1", topic: "energie", text: "Ich kann Vorwiderstand, Leistung, Energie, Wirkungsgrad und Energiekosten berechnen.", exam: ["AP1", "AP2"] },
    { id: "c-en-2", topic: "energie", text: "Ich kann den mittleren Strom eines Sensorknotens mit Tiefschlaf und daraus die Akkulaufzeit berechnen.", exam: ["AP1", "AP2"] },
    { id: "c-en-3", topic: "energie", text: "Ich kann Spannung und Strom mit dem Multimeter richtig messen und die Werte protokollieren.", exam: ["AP1", "AP2"] },
    { id: "c-sec-1", topic: "iot-sicherheit", text: "Ich kann typische IoT-Schwachstellen nennen und passende Maßnahmen (Passwörter, Updates, Segmentierung, Verschlüsselung, Authentifizierung) ableiten.", exam: ["AP2"] },
    { id: "c-sec-2", topic: "iot-sicherheit", text: "Ich kann Betriebs- und Informationssicherheit unterscheiden und die Datenschutzgrundsätze der DSGVO auf ein CPS anwenden.", exam: ["AP2"] },
    { id: "c-pd-1", topic: "projekt-doku", text: "Ich kann ein Prüfprotokoll mit Sollwert, Toleranz und Istwert erstellen und auswerten.", exam: ["AP1", "AP2"] },
    { id: "c-pd-2", topic: "projekt-doku", text: "Ich kann die Inhalte eines Abnahmeprotokolls und die Mängelarten nennen und einen Soll-Ist-Vergleich berechnen.", exam: ["AP1"] },
    { id: "c-pd-3", topic: "projekt-doku", text: "Ich kann meine Projektdokumentation nach den 10 Gliederungspunkten der Klasse aufbauen und das Projekt mit Live-Demo präsentieren." }
  ],
  glossary: [
    { term: "1-Wire", def: "Serieller Bus mit nur einer Datenleitung (plus Masse); jeder Teilnehmer hat eine werkseitige 64-Bit-ID, z. B. Temperatursensor DS18B20." },
    { term: "A/D-Wandler (ADC)", def: "Baustein, der eine analoge Spannung abtastet, quantisiert und als Binärzahl ausgibt; die Auflösung in Bit bestimmt die Zahl der Stufen (2ⁿ)." },
    { term: "Abtastrate", def: "Anzahl der Messungen pro Sekunde bei der Digitalisierung; muss nach Nyquist-Shannon größer als das Doppelte der höchsten Signalfrequenz sein." },
    { term: "Aktor", def: "Bauteil, das ein elektrisches Steuersignal in eine physikalische Wirkung umsetzt, z. B. Motor, Ventil, Relais, LED oder Servo." },
    { term: "Aliasing", def: "Verfälschung durch zu seltene Abtastung: Hohe Frequenzen erscheinen im digitalen Signal als falsche, niedrigere Frequenzen." },
    { term: "Arduino UNO R3", def: "Mikrocontroller-Platine mit ATmega328P (16 MHz, 5-V-Logik), 14 digitalen Pins (6 davon PWM) und 6 Analogeingängen mit 10-Bit-ADC." },
    { term: "Blockschaltbild", def: "Vereinfachte Darstellung eines Systems aus Funktionsblöcken und den Flüssen (Energie, Stoff, Information) zwischen ihnen, ohne Verdrahtungsdetails." },
    { term: "Broker (MQTT)", def: "Zentraler Server, der von Clients veröffentlichte Nachrichten entgegennimmt und an alle Abonnenten des jeweiligen Topics verteilt, z. B. Mosquitto." },
    { term: "CAN-Bus", def: "Störfester, differenzieller Multi-Master-Feldbus (CAN_H/CAN_L) aus Fahrzeug- und Maschinentechnik; die Nachricht mit der niedrigeren ID hat Vorrang." },
    { term: "CoAP", def: "Constrained Application Protocol: REST-ähnliches Anwendungsprotokoll über UDP (Port 5683) für ressourcenschwache IoT-Geräte." },
    { term: "Cyber Resilience Act (CRA)", def: "EU-Verordnung 2024/2847 mit Cybersicherheitsanforderungen an Produkte mit digitalen Elementen, u. a. sichere Voreinstellungen und Sicherheitsupdates." },
    { term: "Cyber-physisches System (CPS)", def: "System, in dem Informationsverarbeitung über Sensoren und Aktoren eng mit physischen Prozessen gekoppelt und meist vernetzt ist." },
    { term: "Digitaler Zwilling", def: "Virtuelles Abbild eines realen Objekts oder Prozesses, das automatisch und in beide Richtungen mit dem Original Daten austauscht." },
    { term: "Edge Computing", def: "Datenverarbeitung direkt am Entstehungsort (Gerät, Gateway) statt in der Cloud – für geringe Latenz, weniger Datenverkehr und Autonomie bei Netzausfall." },
    { term: "Embedded System", def: "Rechner, der fest in ein technisches Gesamtsystem eingebettet ist und dort eine spezielle Steuer-, Regel- oder Überwachungsaufgabe übernimmt." },
    { term: "ESP32", def: "Günstiger 32-Bit-Mikrocontroller von Espressif mit integriertem WLAN und Bluetooth LE, 3,3-V-Logik, 12-Bit-ADC und Tiefschlafmodus." },
    { term: "Fog Computing", def: "Verarbeitungsschicht zwischen Edge und Cloud, z. B. ein lokaler Server im Betrieb, der Daten mehrerer Anlagen bündelt und vorverarbeitet." },
    { term: "Freilaufdiode", def: "Diode parallel zu einer Spule (Relais, Motor), mit der Kathode an Plus; sie leitet die beim Abschalten entstehende Spannungsspitze ab und schützt Transistor und Controller." },
    { term: "GPIO", def: "General Purpose Input/Output: frei programmierbarer Pin, der als digitaler Ein- oder Ausgang oder für Sonderfunktionen genutzt werden kann." },
    { term: "Hysterese", def: "Schaltlücke zwischen Ein- und Ausschaltpunkt eines Zweipunktreglers, die ständiges Hin- und Herschalten verhindert." },
    { term: "I²C", def: "Synchroner Zweidrahtbus (SDA, SCL) mit Pull-up-Widerständen, bei dem Geräte über 7-Bit-Adressen angesprochen werden." },
    { term: "Industrie 4.0", def: "Vernetzung von Maschinen, Werkstücken und IT-Systemen (MES, ERP) in der Produktion auf Basis cyber-physischer Systeme." },
    { term: "Internet of Things (IoT)", def: "Vernetzung physischer Gegenstände über Internet-Protokolle, sodass sie Daten austauschen und aus der Ferne überwacht oder gesteuert werden können." },
    { term: "LoRaWAN", def: "Netzwerkprotokoll für energiesparende Funkübertragung kleiner Datenmengen über Kilometer (EU: 868 MHz) über Gateways zu einem Netzwerkserver." },
    { term: "Mesh-Netz", def: "Funknetz, in dem Geräte Nachrichten füreinander weiterleiten, sodass Reichweite und Ausfallsicherheit mit jedem Knoten wachsen (z. B. Zigbee, Z-Wave, Thread)." },
    { term: "Mikrocontroller", def: "Ein-Chip-Computer mit CPU, Programmspeicher, RAM und Peripherie (GPIO, ADC, Timer, Schnittstellen), der meist ohne Betriebssystem eine feste Firmware ausführt." },
    { term: "MQTT", def: "Schlankes Publish/Subscribe-Protokoll über TCP (1883, mit TLS 8883), bei dem Clients Nachrichten zu Topics über einen Broker austauschen." },
    { term: "NB-IoT", def: "Narrowband IoT: Mobilfunkstandard in lizenzierten Bändern für kleine Datenmengen mit geringem Energiebedarf und sehr guter Gebäudedurchdringung." },
    { term: "OPC UA", def: "Herstellerunabhängiger Kommunikationsstandard (IEC 62541) der Industrie mit Informationsmodell und integrierter Sicherheit zum Austausch von Maschinendaten." },
    { term: "PIR-Sensor", def: "Passiver Infrarotsensor, der Änderungen der Wärmestrahlung erkennt und so Bewegungen von Menschen oder Tieren meldet, z. B. HC-SR501." },
    { term: "Predictive Maintenance", def: "Vorausschauende Wartung: Zustandsdaten werden überwacht, um Bauteile kurz vor einem absehbaren Ausfall zu warten oder zu tauschen." },
    { term: "Pull-up-Widerstand", def: "Widerstand, der einen offenen Eingang auf HIGH zieht und so einen definierten Pegel sicherstellt; beim Arduino intern per INPUT_PULLUP zuschaltbar." },
    { term: "PWM (Pulsweitenmodulation)", def: "Schnelles Ein- und Ausschalten mit variablem Tastgrad; der Mittelwert wirkt wie eine analoge Spannung (Dimmen, Motordrehzahl)." },
    { term: "Quantisierung", def: "Zuordnung eines abgetasteten Messwerts zu einer von endlich vielen Stufen; der dabei entstehende Rundungsfehler heißt Quantisierungsfehler." },
    { term: "Reed-Kontakt", def: "Schaltkontakt in einem Glasröhrchen, der durch einen Magneten geschlossen wird; typischer binärer Tür- und Fensterkontakt." },
    { term: "Regelkreis", def: "Geschlossener Wirkungsablauf, in dem die Regelgröße gemessen, mit dem Sollwert verglichen und über ein Stellglied nachgeführt wird." },
    { term: "RTOS", def: "Echtzeitbetriebssystem (z. B. FreeRTOS), das Aufgaben auf Mikrocontrollern innerhalb garantierter Zeitgrenzen ausführt." },
    { term: "Schaltplan", def: "Zeichnung aller elektrischen Verbindungen einer Schaltung mit genormten Schaltzeichen, Bauteilkennzeichen (R1, D1, K1) und Pinbezeichnungen." },
    { term: "Sensor", def: "Bauteil, das eine physikalische oder chemische Größe erfasst und in ein elektrisches Signal umwandelt." },
    { term: "Single Board Computer (SBC)", def: "Vollständiger Computer auf einer Platine mit Betriebssystem (meist Linux), Netzwerk, USB und GPIO, z. B. Raspberry Pi." },
    { term: "SPI", def: "Schneller synchroner Vollduplex-Bus mit Takt, zwei Datenleitungen (MOSI, MISO) und einer Chip-Select-Leitung je Gerät." },
    { term: "SPS", def: "Speicherprogrammierbare Steuerung: robuste Industriesteuerung, die zyklisch Eingänge liest, ein Programm nach IEC 61131-3 ausführt und Ausgänge setzt." },
    { term: "Steckbrett (Breadboard)", def: "Lötfreie Steckplatine für Versuchsaufbauten: je 5 Kontakte einer Reihe sind verbunden, die Mittelrille trennt, die Versorgungsschienen am Rand laufen über die ganze Länge." },
    { term: "System-on-Chip (SoC)", def: "Chip, der Prozessorkerne, Grafik, Speichercontroller und Kommunikationsmodule vereint, z. B. in Smartphones und im Raspberry Pi." },
    { term: "Tastgrad", def: "Verhältnis von Einschaltzeit zu Periodendauer eines PWM-Signals (D = t(ein) ÷ T); beim Arduino D = analogWrite-Wert ÷ 255." },
    { term: "UART", def: "Asynchrone serielle Schnittstelle mit Sende- (TX) und Empfangsleitung (RX); beide Seiten nutzen dieselbe Baudrate, z. B. 9600 Baud im Format 8N1." },
    { term: "Zigbee", def: "Funkstandard auf Basis von IEEE 802.15.4 (meist 2,4 GHz, 250 kbit/s) mit Mesh-Topologie für stromsparende Smart-Home- und Sensorgeräte." },
    { term: "Z-Wave", def: "Smart-Home-Funkstandard mit Mesh-Topologie, der in Europa im 868-MHz-Band arbeitet und dadurch 2,4-GHz-Netze nicht stört." }
  ],
  links: [
    { title: "Arduino Documentation", url: "https://docs.arduino.cc/", note: "Offizielle Doku: UNO R3 (Datenblatt, Pinout), Sprachreferenz, Tutorials" },
    { title: "Raspberry Pi Documentation", url: "https://www.raspberrypi.com/documentation/", note: "GPIO, Stromversorgung, Raspberry Pi OS" },
    { title: "Espressif Documentation (ESP32)", url: "https://docs.espressif.com/", note: "Datenblätter und Programmierhandbücher zum ESP32" },
    { title: "MQTT.org", url: "https://mqtt.org/", note: "Spezifikation, Grundlagen und Software-Übersicht zu MQTT" },
    { title: "OASIS: MQTT Version 5.0 (Spezifikation)", url: "https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html", note: "Offizieller Standardtext, u. a. QoS, Retained Messages, Will Message" },
    { title: "BAuA – Bundesanstalt für Arbeitsschutz und Arbeitsmedizin", url: "https://www.baua.de/", note: "Technische Regeln für Arbeitsstätten, u. a. ASR A3.6 „Lüftung“ (CO₂-Orientierungswerte)" },
    { title: "BSI – Bundesamt für Sicherheit in der Informationstechnik", url: "https://www.bsi.bund.de/", note: "Empfehlungen zu IoT und Smart Home, IT-Grundschutz-Baustein SYS.4.4 „Allgemeines IoT-Gerät“" },
    { title: "Plattform Industrie 4.0", url: "https://www.plattform-i40.de/", note: "Grundlagen zu Industrie 4.0, digitalem Zwilling und Verwaltungsschale" },
    { title: "Cyber Resilience Act – Verordnung (EU) 2024/2847 (EUR-Lex)", url: "https://eur-lex.europa.eu/eli/reg/2024/2847/oj", note: "Rechtstext der EU-Verordnung über Cybersicherheitsanforderungen an Produkte mit digitalen Elementen" }
  ]
});
