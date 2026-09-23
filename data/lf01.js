/* LF 1 – Das Unternehmen und die eigene Rolle im Betrieb beschreiben */
LEARN.module({
  id: "lf01",
  type: "lf",
  nr: 1,
  title: "Das Unternehmen und die eigene Rolle im Betrieb beschreiben",
  year: 1,
  hours: 40,
  exam: ["AP1", "AP2"],
  summary: "Du lernst deinen Ausbildungsbetrieb als System kennen: Ziele und Leitbild, Markt und Stakeholder, Rechtsform, Aufbau- und Ablauforganisation sowie Wertschöpfungskette. Dazu kommen deine eigene Rolle im dualen System (Rechte, Pflichten, Vollmachten, Prüfungen, Weiterbildung), Kommunikation, Selbstorganisation, Nachhaltigkeit und das Präsentieren im Team.",
  goals: [
    "Die ökonomischen, ökologischen und sozialen Ziele eines Unternehmens erklären, Zielbeziehungen erkennen und die Zielerreichung mit Kennzahlen (Produktivität, Wirtschaftlichkeit, Rentabilität) beurteilen",
    "Den Ausbildungsbetrieb als offenes System mit Stakeholdern, Wirtschaftssektor, Markt- und Kundenbeziehungen einordnen und Marktformen der IT-Branche analysieren",
    "Rechtsformen (Einzelunternehmen, GbR, OHG, KG, GmbH, UG, AG) nach Haftung, Kapital, Geschäftsführung, Gewinnverteilung und Handelsregister vergleichen und begründet auswählen",
    "Die Aufbauorganisation mit Stellen, Instanzen und Organigramm darstellen und Ein-, Mehr-, Stablinien-, Sparten- und Matrixorganisation bewerten",
    "Geschäftsprozesse (Kern-, Unterstützungs-, Managementprozesse) und die Wertschöpfungskette beschreiben, die Wertschöpfung berechnen und die eigene Rolle darin verorten",
    "Den eigenen Handlungs- und Entscheidungsspielraum (Prokura, Handlungsvollmacht) sowie Rechte und Pflichten in der dualen Ausbildung benennen",
    "Den Aufbau der gestreckten Abschlussprüfung (AP1/AP2) erklären und Wege der Fort- und Weiterbildung aufzeigen",
    "Im Betrieb situationsgerecht kommunizieren, Feedback geben und die eigene Arbeit und das Lernen selbst organisieren",
    "Nachhaltigkeit und gesellschaftliche Verantwortung (CSR, Green IT) des Betriebs beurteilen",
    "Im Team eine zielgruppengerechte Unternehmenspräsentation planen, halten und anhand von Kriterien bewerten"
  ],
  school: {
    hinweise: "Der Moodle-Kurs zu LF1 bündelt vor allem Organisatorisches rund um die Ausbildung: Einschulungsunterlagen und Regelung der Fehlzeiten (Bestätigung durch den Betrieb), die KMK-Rahmenlehrpläne, die Ausbildungsverordnung (besonders §§ 21–25: schriftliche AP2-Bereiche, Gewichtung, Bestehen, Ergänzungsprüfung), IHK-Hinweise zur betrieblichen Projektarbeit samt Bewertungsmatrix für Projekt, Präsentation und Fachgespräch, Prüfungstermine, den Antrag auf Ausweisung der Berufsschulnote im IHK-Zeugnis und Infos zum Erwerb schulischer Abschlüsse in der dualen Ausbildung. Die fachlichen Inhalte dieses Moduls folgen dem Rahmenlehrplan und dem Prüfungskatalog.",
    themen: [
      "Organisatorisches: BBZ, KMK, IHK, SHIBB",
      "Duales System, Ausbildungsordnung und Rahmenlehrplan",
      "Prüfungsaufbau AP1/AP2 und betriebliche Projektarbeit",
      "Unternehmensziele und Leitbild",
      "Markt, Wettbewerb und Stakeholder",
      "Rechtsformen und Vollmachten",
      "Aufbau- und Ablauforganisation",
      "Wertschöpfungskette und Geschäftsprozesse",
      "Unternehmenspräsentation im Team"
    ]
  },
  topics: [
    {
      id: "unternehmen-system",
      title: "Unternehmen als System, Sektoren & Stakeholder",
      exam: ["AP1", "AP2"],
      summary: "Betrieb, Unternehmen und Firma unterscheiden, das Unternehmen als offenes System mit Güter- und Geldströmen und Produktionsfaktoren verstehen, Leistungsschwerpunkte und Wirtschaftssektoren zuordnen und Stakeholder mit ihren Interessen analysieren.",
      html: `
    <p>Bevor du erklären kannst, welche Rolle du im Betrieb hast, musst du das Unternehmen selbst beschreiben können: <strong>Was</strong> bietet es an, <strong>für wen</strong>, <strong>mit wem</strong> arbeitet es zusammen und <strong>wer</strong> hat Interessen an ihm? Genau das ist der Kern von LF1.</p>
    <h5>Betrieb, Unternehmen, Firma</h5>
    <table><thead><tr><th>Begriff</th><th>Bedeutung</th><th>Beispiel</th></tr></thead><tbody>
      <tr><td><strong>Betrieb</strong></td><td>örtliche, technisch-organisatorische Einheit, in der Leistungen erstellt werden</td><td>Standort Heide der Nordlicht IT GmbH</td></tr>
      <tr><td><strong>Unternehmen</strong></td><td>rechtlich-wirtschaftliche Einheit mit Rechtsform und Eigentümern; kann mehrere Betriebe umfassen</td><td>Nordlicht IT GmbH mit Standorten in Heide und Husum</td></tr>
      <tr><td><strong>Firma</strong></td><td>der <em>Name</em>, unter dem ein Kaufmann seine Geschäfte betreibt und unterschreibt (§ 17 HGB)</td><td>„Nordlicht IT GmbH“</td></tr>
    </tbody></table>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> Umgangssprachlich sagt man „meine Firma“ und meint das Unternehmen. Rechtlich ist die Firma nur der <strong>Name</strong> im Handelsregister.</div>
    <h5>Das Unternehmen als offenes, soziotechnisches System</h5>
    <p>Ein Unternehmen ist ein <strong>offenes System</strong>: Es tauscht ständig Güter, Geld und Informationen mit seiner Umwelt aus. Es ist <strong>soziotechnisch</strong>, weil Menschen und Technik zusammenwirken, und <strong>dynamisch</strong>, weil es sich an Markt, Technik und Gesetze anpassen muss.</p>
    <pre class="ascii">
 Beschaffungsmärkte              UNTERNEHMEN                 Absatzmarkt
 (Lieferanten, Arbeits-,     +---------------------+        (Kunden)
  Kapitalmarkt) ── Input ──→ | Leistungserstellung | ── Output ──→ Produkte,
 Material, Arbeit, Kapital,  | (Transformation)    |              Dienstleistungen
 Informationen               +---------------------+
       ←──────────── Geldstrom (Zahlungen) läuft entgegengesetzt ────────────
    </pre>
    <h5>Produktionsfaktoren</h5>
    <p>Damit ein Unternehmen Leistungen erstellen kann, kombiniert es <strong>Produktionsfaktoren</strong>. Die Volkswirtschaftslehre (VWL) unterscheidet <strong>Arbeit, Boden und Kapital</strong> (oft ergänzt um Wissen/Bildung). Die Betriebswirtschaftslehre (BWL) schaut genauer in den Betrieb:</p>
    <table><thead><tr><th>BWL-Faktor</th><th>Bedeutung</th><th>Beispiel im IT-Systemhaus</th></tr></thead><tbody>
      <tr><td><strong>ausführende Arbeit</strong> (Elementarfaktor)</td><td>Arbeit, die direkt mit Leistungserstellung, Beschaffung oder Absatz zu tun hat</td><td>Techniker im Kundeneinsatz, Service-Desk, Einkauf, Buchhaltung</td></tr>
      <tr><td><strong>Betriebsmittel</strong> (Elementarfaktor)</td><td>Anlagen und Einrichtungen, die genutzt, aber nicht verbraucht werden</td><td>Gebäude, Server, Messgeräte, Firmenwagen, Werkzeug</td></tr>
      <tr><td><strong>Werkstoffe</strong> (Elementarfaktor)</td><td>Stoffe, die bei der Leistungserstellung eingehen oder verbraucht werden: Rohstoffe (Hauptbestandteil), Hilfsstoffe (Nebenbestandteil), Betriebsstoffe (gehen nicht ins Produkt ein), Fremdbauteile</td><td>Gehäuse und Mainboard beim PC-Bau (Rohstoff/Fremdbauteil), Kabelbinder und Wärmeleitpaste (Hilfsstoffe), Strom für die Werkstatt (Betriebsstoff)</td></tr>
      <tr><td><strong>dispositiver Faktor</strong> (leitende Arbeit)</td><td>kombiniert die Elementarfaktoren: planen, organisieren, leiten, kontrollieren</td><td>Geschäftsführung, Abteilungs- und Teamleitung</td></tr>
    </tbody></table>
    <div class="callout tipp"><strong>Eselsbrücke:</strong> Die Elementarfaktoren sind die „Zutaten“ (Arbeit, Mittel, Stoffe), der dispositive Faktor ist der „Koch“, der sie sinnvoll kombiniert.</div>
    <h5>Das ökonomische Prinzip</h5>
    <table><thead><tr><th>Prinzip</th><th>Gegeben</th><th>Gesucht</th><th>IT-Beispiel</th></tr></thead><tbody>
      <tr><td>Maximalprinzip</td><td>Mitteleinsatz (Budget)</td><td>größtmöglicher Ertrag</td><td>Mit 20.000 € Budget möglichst viele gleichwertige Notebooks beschaffen</td></tr>
      <tr><td>Minimalprinzip</td><td>Ziel (Menge/Leistung)</td><td>geringstmöglicher Mitteleinsatz</td><td>Genau 20 Notebooks einer Spezifikation zum niedrigsten Gesamtpreis beschaffen</td></tr>
    </tbody></table>
    <div class="callout achtung"><strong>Achtung:</strong> „Mit minimalem Einsatz maximalen Ertrag“ ist <strong>kein</strong> ökonomisches Prinzip – eine Größe muss immer feststehen.</div>
    <h5>Wirtschaftssektoren und Unternehmensarten</h5>
    <table><thead><tr><th>Sektor</th><th>Tätigkeit</th><th>Beispiele</th></tr></thead><tbody>
      <tr><td>primär</td><td>Urproduktion</td><td>Landwirtschaft (Kohlanbau), Fischerei, Forstwirtschaft</td></tr>
      <tr><td>sekundär</td><td>Be- und Verarbeitung</td><td>Industrie, Handwerk, Energieerzeugung, Bau, Hardwarefertigung</td></tr>
      <tr><td>tertiär</td><td>Dienstleistungen</td><td>Handel, Banken, Tourismus, Verwaltung, IT-Systemhaus</td></tr>
    </tbody></table>
    <p>Manche Modelle lösen Informations- und Wissensdienste als <strong>quartären Sektor</strong> heraus. Im <strong>Strukturwandel</strong> wächst der Dienstleistungssektor (Tertiarisierung): In Deutschland arbeiten rund drei Viertel der Erwerbstätigen dort.</p>
    <p>Weitere Einteilungen: <strong>erwerbswirtschaftlich</strong> (Ziel Gewinn), <strong>gemeinwirtschaftlich</strong> (Bedarfsdeckung, z. B. Stadtwerke), <strong>gemeinnützig</strong> (keine Gewinnausschüttung, z. B. Verein). Als <strong>KMU</strong> gelten laut EU Unternehmen mit weniger als 250 Beschäftigten und höchstens 50 Mio. € Umsatz (oder 43 Mio. € Bilanzsumme).</p>
    <div class="callout achtung"><strong>Zuordnungsfalle:</strong> Maßgeblich ist die <strong>Hauptleistung des Unternehmens</strong>. Die IT-Abteilung einer Werft gehört zum sekundären Sektor, ein IT-Systemhaus zum tertiären.</div>
    <h5>Leistungsschwerpunkte, Kunden- und Lieferantenbeziehungen</h5>
    <p>Wenn du deinen Betrieb vorstellst, beschreibst du sein <strong>Leistungsprogramm</strong> und seine wichtigsten Marktpartner. Typische Leistungsschwerpunkte von IT-Betrieben:</p>
    <table><thead><tr><th>Leistungsschwerpunkt</th><th>Beispiel</th><th>typische Partner</th></tr></thead><tbody>
      <tr><td>Handel</td><td>Hardware und Lizenzen verkaufen</td><td>Hersteller, Distributoren (Lieferanten); Firmen- und Privatkunden</td></tr>
      <tr><td>Projektgeschäft</td><td>Netzwerk, Serverraum oder 20 Arbeitsplätze einrichten</td><td>Kunden (B2B, öffentliche Auftraggeber), Subunternehmer</td></tr>
      <tr><td>Managed Services und Support</td><td>Wartungsvertrag, Hotline, Monitoring</td><td>Stammkunden mit Servicevertrag (SLA)</td></tr>
      <tr><td>Cloud und Hosting</td><td>Microsoft 365 betreuen, Server im Rechenzentrum betreiben</td><td>Cloud-Anbieter, Rechenzentrumsbetreiber</td></tr>
      <tr><td>Softwareentwicklung und Beratung</td><td>Branchensoftware anpassen, Schulungen</td><td>Kunden, Softwarehersteller</td></tr>
    </tbody></table>
    <p>Als <strong>interner IT-Dienstleister</strong> (z. B. IT-Abteilung eines Krankenhauses) sind deine „Kunden“ die Fachabteilungen des eigenen Unternehmens.</p>
    <h5>Stakeholder – wer hat Interessen am Unternehmen?</h5>
    <p><strong>Stakeholder</strong> (Anspruchsgruppen) sind alle Personen und Gruppen, die vom Unternehmen betroffen sind oder es beeinflussen. <strong>Shareholder</strong> sind nur die Anteilseigner.</p>
    <div class="grid-2">
      <div><h6>Interne Stakeholder</h6><ul>
        <li>Eigentümer: Gewinn, Wertsteigerung</li>
        <li>Geschäftsführung: Erfolg, Gestaltungsspielraum</li>
        <li>Mitarbeitende/Azubis: sicherer Job, faire Vergütung, gute Ausbildung</li>
        <li>Betriebsrat/JAV: Mitbestimmung</li>
      </ul></div>
      <div><h6>Externe Stakeholder</h6><ul>
        <li>Kunden: Qualität, Preis, Service</li>
        <li>Lieferanten: pünktliche Zahlung</li>
        <li>Banken: Zinsen, Tilgung, Sicherheiten</li>
        <li>Staat/Gemeinde: Steuern, Arbeitsplätze</li>
        <li>Öffentlichkeit: Umwelt- und Sozialverträglichkeit</li>
      </ul></div>
    </div>
    <p>Die Interessen widersprechen sich oft (Ausschüttung vs. Gehälter vs. Investitionen). Eine <strong>Stakeholder-Analyse</strong> ordnet die Gruppen nach <strong>Einfluss</strong> und <strong>Interesse</strong>:</p>
    <table><thead><tr><th></th><th>geringes Interesse</th><th>hohes Interesse</th></tr></thead><tbody>
      <tr><td><strong>hoher Einfluss</strong></td><td>zufriedenstellen</td><td>eng einbinden (Schlüsselakteure)</td></tr>
      <tr><td><strong>geringer Einfluss</strong></td><td>beobachten</td><td>regelmäßig informieren</td></tr>
    </tbody></table>
    <div class="callout beispiel"><strong>Beispiel:</strong> Die Nordlicht IT GmbH in Heide stellt auf Cloud-Telefonie um. Geschäftsführung und Betriebsrat (Mitbestimmung wegen möglicher Leistungskontrolle über Anrufstatistiken) haben hohen Einfluss und hohes Interesse → eng einbinden. Die Support-Mitarbeitenden (hohes Interesse, geringer Einfluss) werden regelmäßig informiert und geschult.</div>
    <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> WiSo: Betriebe einem <em>Sektor zuordnen</em>, Maximal-/Minimalprinzip <em>unterscheiden</em>. AP1: „<em>Nennen</em> Sie drei externe Stakeholder mit je einem Interesse“, „<em>Beurteilen</em> Sie den Einfluss der Stakeholder auf das Projekt“ – immer mit Bezug zur Situation.</div>
    <div class="callout merke"><strong>Merke:</strong> Offenes System: Input → Leistungserstellung → Output, Geld fließt entgegengesetzt. Stakeholder = alle Anspruchsgruppen, Shareholder = nur Eigentümer.</div>
      `
    },
    {
      id: "ziele-leitbild",
      title: "Unternehmensziele, Leitbild & Kennzahlen",
      exam: ["AP1", "AP2"],
      summary: "Ökonomische, ökologische und soziale Ziele, Zielharmonie und Zielkonflikt, SMART-Ziele, Leitbild und Corporate Identity sowie Produktivität, Wirtschaftlichkeit, Rentabilität und Indexzahlen berechnen.",
      html: `
    <p>Unternehmen verfolgen ein <strong>Zielsystem</strong>. <strong>Sachziele</strong> legen fest, <em>was</em> geleistet wird (z. B. IT-Betreuung für Handwerksbetriebe), <strong>Formalziele</strong> messen den wirtschaftlichen Erfolg (Gewinn, Rentabilität, Liquidität). Ökonomische, ökologische und soziale Ziele bilden das <strong>Nachhaltigkeitsdreieck</strong> (Drei-Säulen-Modell).</p>
    <h5>Zieldimensionen</h5>
    <table><thead><tr><th>Dimension</th><th>Typische Ziele</th><th>Beispiel im IT-Betrieb</th></tr></thead><tbody>
      <tr><td><strong>ökonomisch</strong></td><td>Gewinn, Umsatz, Marktanteil, Liquidität (Zahlungsfähigkeit), Kostensenkung, Wachstum</td><td>Anteil der Wartungsverträge am Umsatz steigern</td></tr>
      <tr><td><strong>ökologisch</strong></td><td>Energie und CO₂ einsparen, Ressourcen schonen, Abfall vermeiden, Recycling</td><td>Serverraum mit Ökostrom betreiben, Altgeräte aufbereiten statt entsorgen</td></tr>
      <tr><td><strong>sozial</strong></td><td>sichere Arbeitsplätze, faire Vergütung, Aus- und Weiterbildung, Gesundheitsschutz, Vereinbarkeit von Familie und Beruf</td><td>Zertifizierungen bezahlen, mobiles Arbeiten ermöglichen, ergonomische Arbeitsplätze</td></tr>
    </tbody></table>
    <h5>Zielbeziehungen</h5>
    <table><thead><tr><th>Beziehung</th><th>Bedeutung</th><th>Beispiel</th></tr></thead><tbody>
      <tr><td><strong>Zielharmonie</strong> (komplementär)</td><td>Das Erreichen eines Ziels fördert ein anderes.</td><td>Energieeffiziente Server senken den CO₂-Ausstoß <em>und</em> die Stromkosten.</td></tr>
      <tr><td><strong>Zielkonflikt</strong> (konkurrierend)</td><td>Das Erreichen eines Ziels behindert ein anderes.</td><td>Höhere Gehälter (sozial) verringern kurzfristig den Gewinn (ökonomisch).</td></tr>
      <tr><td><strong>Zielneutralität</strong> (indifferent)</td><td>Die Ziele beeinflussen sich nicht.</td><td>Neues Kantinenangebot und höhere Verfügbarkeit des Mailservers</td></tr>
    </tbody></table>
    <div class="callout tipp"><strong>Tipp:</strong> Viele Zielkonflikte bestehen nur <strong>kurzfristig</strong> (Weiterbildung kostet heute, bringt morgen Qualität). Nenne in Begründungen die Zeitperspektive.</div>
    <h5>Zielhierarchie und SMART-Ziele</h5>
    <p><strong>Oberziel</strong> (strategisch, langfristig) → <strong>Bereichsziel</strong> (taktisch, z. B. „Managed Services wachsen jährlich um 10 %“) → <strong>Handlungsziel</strong> (operativ, z. B. „15 neue Wartungsverträge im 4. Quartal“).</p>
    <table><thead><tr><th>Buchstabe</th><th>Bedeutung</th><th>Prüffrage</th></tr></thead><tbody>
      <tr><td>S</td><td>spezifisch</td><td>Ist eindeutig beschrieben, was erreicht werden soll?</td></tr>
      <tr><td>M</td><td>messbar</td><td>Gibt es eine Kennzahl, mit der man die Erreichung prüfen kann?</td></tr>
      <tr><td>A</td><td>attraktiv/akzeptiert</td><td>Tragen die Beteiligten das Ziel mit?</td></tr>
      <tr><td>R</td><td>realistisch</td><td>Ist das Ziel mit den vorhandenen Mitteln erreichbar?</td></tr>
      <tr><td>T</td><td>terminiert</td><td>Bis wann soll das Ziel erreicht sein?</td></tr>
    </tbody></table>
    <div class="callout beispiel"><strong>Beispiel:</strong> Unklar: „Wir wollen den Support verbessern.“<br>SMART: „Bis zum 31.03.2027 werden mindestens 80 % aller Tickets der Priorität 3 innerhalb von 8 Arbeitsstunden gelöst (Ist-Wert September 2026: 65 %).“ – spezifisch (Tickets Prio 3), messbar (80 %, 8 h), akzeptiert (mit dem Team abgestimmt), realistisch (Ausgangswert 65 %), terminiert (31.03.2027).</div>
    <h5>Leitbild und Corporate Identity</h5>
    <p>Das <strong>Unternehmensleitbild</strong> hält schriftlich fest, wofür ein Unternehmen steht. Es beantwortet drei Fragen:</p>
    <ul>
      <li><strong>Mission</strong> – Wozu gibt es uns heute? („Wir machen die IT von Handwerk und Mittelstand an der Westküste sicher und verlässlich.“)</li>
      <li><strong>Vision</strong> – Wo wollen wir langfristig hin? (Zukunftsbild)</li>
      <li><strong>Werte</strong> – Wie handeln wir? (z. B. Verlässlichkeit, Transparenz, Nachhaltigkeit, Respekt)</li>
    </ul>
    <p>Nach <strong>innen</strong> gibt das Leitbild Orientierung und stärkt die Identifikation, nach <strong>außen</strong> prägt es das Image. Daraus folgt die <strong>Corporate Identity</strong>: Corporate Design (Logo, Farben, Folienvorlagen, Bildschirmmasken), Corporate Communication und Corporate Behaviour. Ein Leitbild ist kein Werbeslogan – es wirkt nur, wenn es im Alltag gelebt wird.</p>
    <h5>Kennzahlen: Ist das Ziel erreicht?</h5>
    <div class="callout formel"><strong>Formeln:</strong><br>
      Produktivität = Ausbringungsmenge ÷ Einsatzmenge (mengenmäßig, z. B. Tickets pro Stunde)<br>
      Wirtschaftlichkeit = Leistungen (Erträge) ÷ Kosten (Aufwendungen) → wirtschaftlich, wenn &gt; 1<br>
      Eigenkapitalrentabilität = Gewinn ÷ Eigenkapital × 100 %<br>
      Umsatzrentabilität = Gewinn ÷ Umsatz × 100 %<br>
      Gesamtkapitalrentabilität = (Gewinn + Fremdkapitalzinsen) ÷ Gesamtkapital × 100 %</div>
    <div class="callout beispiel"><strong>Durchgerechnetes Beispiel – Nordlicht IT GmbH:</strong><br>
      <strong>Produktivität:</strong> Der Service-Desk löst in 120 Arbeitsstunden 360 Tickets → 360 ÷ 120 = 3 Tickets/h. Mit einer neuen Wissensdatenbank sind es 420 Tickets → 420 ÷ 120 = 3,5 Tickets/h. Steigerung: (3,5 − 3) ÷ 3 × 100 % ≈ 16,67 %.<br>
      <strong>Wirtschaftlichkeit:</strong> Erträge 3.600.000 €, Aufwendungen 3.432.000 € → 3.600.000 ÷ 3.432.000 ≈ 1,05 → wirtschaftlich (Gewinn 168.000 €).<br>
      <strong>Eigenkapitalrentabilität:</strong> Eigenkapital 1.200.000 € → 168.000 ÷ 1.200.000 × 100 % = 14 %.<br>
      <strong>Umsatzrentabilität:</strong> Umsatz 3.600.000 € → 168.000 ÷ 3.600.000 × 100 % ≈ 4,67 % (von jedem Euro Umsatz bleiben rund 4,7 Cent Gewinn).<br>
      <strong>Gesamtkapitalrentabilität:</strong> Fremdkapital 800.000 € mit 30.000 € Zinsen → Gesamtkapital 2.000.000 € → (168.000 + 30.000) ÷ 2.000.000 × 100 % = 9,9 %.</div>
    <div class="callout achtung"><strong>Prüfungsfallen:</strong> Produktivität rechnet mit <strong>Mengen</strong>, Wirtschaftlichkeit mit <strong>Werten in €</strong>. Bei der Gesamtkapitalrentabilität werden die Fremdkapitalzinsen zum Gewinn <strong>addiert</strong>, weil sie das Entgelt für das Fremdkapital sind. Höhere Produktivität bedeutet nicht automatisch höhere Rentabilität, z. B. wenn das neue Werkzeug teurer ist als die eingesparte Arbeitszeit. Manche Aufgaben geben die Produktivität auch <strong>wertmäßig</strong> vor, z. B. als Umsatz je Mitarbeitendem (3.600.000 € ÷ 40 Beschäftigte = 90.000 € je Beschäftigtem) – dann rechnest du genau mit der vorgegebenen Formel.</div>
    <h5>Indexzahlen: Entwicklungen vergleichbar machen</h5>
    <p>Mit einer <strong>Indexzahl</strong> setzt du eine Reihe gleichartiger Werte (z. B. Umsatz, Tickets, Stromverbrauch) ins Verhältnis zu einem festen <strong>Basisjahr</strong>, das den Wert 100 erhält. So erkennst du Entwicklungen auf einen Blick, auch bei großen Zahlen.</p>
    <div class="callout formel"><strong>Formel:</strong> Indexzahl = Wert im Berichtsjahr ÷ Wert im Basisjahr × 100</div>
    <div class="callout beispiel"><strong>Beispiel – Umsatz der Nordlicht IT GmbH:</strong>
    <table><thead><tr><th>Jahr</th><th>Umsatz</th><th>Index (Basis 2023 = 100)</th><th>Index (Basis 2025 = 100)</th></tr></thead><tbody>
      <tr><td>2023</td><td>2.880.000 €</td><td>100</td><td>88,89</td></tr>
      <tr><td>2024</td><td>3.168.000 €</td><td>110</td><td>97,78</td></tr>
      <tr><td>2025</td><td>3.240.000 €</td><td>112,5</td><td>100</td></tr>
      <tr><td>2026</td><td>3.600.000 €</td><td>125</td><td>111,11</td></tr>
    </tbody></table>
    Rechenweg 2026 (Basis 2023): 3.600.000 ÷ 2.880.000 × 100 = 125 → der Umsatz liegt 25 % über dem Basisjahr.</div>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> Der Unterschied zwischen zwei Indexwerten ist in <strong>Prozentpunkten</strong> angegeben, nicht in Prozent. Von 110 (2024) auf 112,5 (2025) sind es 2,5 Punkte, die prozentuale Steigerung beträgt aber nur 2,5 ÷ 110 × 100 % ≈ 2,27 %.</div>
    <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> WiSo: Rentabilität und Indexzahlen <em>berechnen</em>, Zielbeziehung <em>bestimmen</em>. AP1: ökonomische, ökologische und soziale Aspekte einer Entscheidung <em>erläutern</em>, ein Ziel nach SMART <em>formulieren</em>.</div>
    <div class="callout merke"><strong>Merke:</strong> Ökonomie, Ökologie, Soziales = Nachhaltigkeitsdreieck. Ziele harmonieren, konkurrieren oder sind neutral. SMART macht Ziele prüfbar, Kennzahlen messen sie.</div>
      `
    },
    {
      id: "markt-wettbewerb",
      title: "Markt, Marktformen & Wettbewerb",
      exam: ["AP1", "AP2"],
      summary: "Marktformen nach Anzahl der Anbieter und Nachfrager, Käufer- und Verkäufermarkt, Preisbildung, Zielgruppen, direkter und indirekter Vertrieb sowie Kartell, Konzern und Fusion.",
      html: `
<p>Ein <strong>Markt</strong> ist jedes Zusammentreffen von Angebot und Nachfrage – egal ob Wochenmarkt, Onlineshop oder Ausschreibungsplattform. Dein Betrieb steht auf dem <strong>Beschaffungsmarkt</strong> als Nachfrager (Hardware, Lizenzen, Fachkräfte) und auf dem <strong>Absatzmarkt</strong> als Anbieter.</p>
<h5>Marktformen (morphologisches Marktformenschema)</h5>
<table><thead><tr><th>Anbieter ↓ / Nachfrager →</th><th>viele</th><th>wenige</th><th>einer</th></tr></thead><tbody>
<tr><td><strong>viele</strong></td><td>Polypol (vollständige Konkurrenz)</td><td>Nachfrageoligopol</td><td>Nachfragemonopol</td></tr>
<tr><td><strong>wenige</strong></td><td>Angebotsoligopol</td><td>zweiseitiges Oligopol</td><td>beschränktes Nachfragemonopol</td></tr>
<tr><td><strong>einer</strong></td><td>Angebotsmonopol</td><td>beschränktes Angebotsmonopol</td><td>zweiseitiges Monopol</td></tr>
</tbody></table>
<ul>
<li><strong>Polypol:</strong> viele kleine IT-Systemhäuser und Onlinehändler für Zubehör – der einzelne Anbieter hat kaum Einfluss auf den Preis.</li>
<li><strong>Angebotsoligopol:</strong> wenige große Cloud-Anbieter, wenige Hersteller von Desktop-CPUs oder Smartphone-Betriebssystemen – die Anbieter beobachten sich gegenseitig genau.</li>
<li><strong>Angebotsmonopol:</strong> ein einziger Anbieter, z. B. der Betreiber des regionalen Stromnetzes oder ein Hersteller mit Patent auf eine Technik.</li>
<li><strong>Nachfrageoligopol:</strong> wenige Verarbeitungsbetriebe kaufen den Kohl vieler Dithmarscher Landwirte.</li>
</ul>
<div class="callout tipp"><strong>Eselsbrücke:</strong> „Poly“ = viele, „Oligo“ = wenige, „Mono“ = einer. Das Wort ohne Zusatz („Oligopol“) meint in Prüfungen fast immer die <strong>Angebotsseite</strong>.</div>
<h5>Käufermarkt und Verkäufermarkt</h5>
<table><thead><tr><th></th><th>Käufermarkt</th><th>Verkäufermarkt</th></tr></thead><tbody>
<tr><td>Situation</td><td>Angebot &gt; Nachfrage</td><td>Nachfrage &gt; Angebot</td></tr>
<tr><td>Wer hat die Macht?</td><td>Käufer (Preisdruck, Rabatte, Service)</td><td>Verkäufer (hohe Preise, lange Lieferzeiten)</td></tr>
<tr><td>IT-Beispiel</td><td>Speichermedien bei Überproduktion</td><td>Grafikkarten und Chips während der Chipkrise 2021/22; IT-Fachkräfte auf dem Arbeitsmarkt</td></tr>
</tbody></table>
<h5>Preisbildung im Polypol</h5>
<p>Auf einem <strong>vollkommenen Markt</strong> (gleichartige Güter, vollständige Markttransparenz, keine persönlichen, räumlichen oder zeitlichen Vorlieben, sofortige Reaktion aller Teilnehmer) bildet sich ein <strong>Gleichgewichtspreis</strong>, bei dem angebotene und nachgefragte Menge übereinstimmen. Reale IT-Märkte sind <strong>unvollkommen</strong>: Produkte unterscheiden sich, Kunden haben Markenvorlieben und Serviceverträge.</p>
<div class="callout beispiel"><strong>Beispiel – Markt für eine Backup-Lizenz (Stück pro Monat):</strong>
<table><thead><tr><th>Preis</th><th>20 €</th><th>30 €</th><th>40 €</th><th>50 €</th><th>60 €</th></tr></thead><tbody>
<tr><td>Nachfrage</td><td>900</td><td>700</td><td>500</td><td>300</td><td>100</td></tr>
<tr><td>Angebot</td><td>100</td><td>300</td><td>500</td><td>700</td><td>900</td></tr>
</tbody></table>
Gleichgewicht bei <strong>40 €</strong> mit 500 Stück → Umsatz 40 € × 500 = 20.000 €. Bei 30 € entsteht ein <strong>Nachfrageüberhang</strong> von 700 − 300 = 400 Stück (Preis steigt), bei 50 € ein <strong>Angebotsüberhang</strong> von 700 − 300 = 400 Stück (Preis sinkt).</div>
<h5>Zielgruppen und Vertriebsformen</h5>
<p>Eine <strong>Zielgruppe</strong> ist eine möglichst gleichartige Kundengruppe, die gezielt angesprochen wird. Man grenzt sie nach Merkmalen ab: Privat- oder Geschäftskunden (B2C/B2B), öffentliche Auftraggeber (B2G), Branche, Größe, Region, Budget, technisches Vorwissen.</p>
<table><thead><tr><th>Vertrieb</th><th>Weg</th><th>Beispiele</th></tr></thead><tbody>
<tr><td><strong>direkt</strong></td><td>Hersteller verkauft ohne Zwischenhändler an den Endkunden</td><td>eigener Onlineshop, Außendienst, eigene Filiale</td></tr>
<tr><td><strong>indirekt</strong></td><td>über rechtlich selbstständige Absatzmittler</td><td>Hersteller → Distributor → Systemhaus/Fachhandel → Kunde</td></tr>
</tbody></table>
<h5>Unternehmenszusammenschlüsse</h5>
<table><thead><tr><th>Form</th><th>Merkmal</th></tr></thead><tbody>
<tr><td><strong>Kartell</strong></td><td>Absprache rechtlich und wirtschaftlich selbstständiger Unternehmen, um den Wettbewerb zu beschränken (Preise, Gebiete, Quoten). Grundsätzlich verboten (GWB), überwacht vom Bundeskartellamt.</td></tr>
<tr><td><strong>Konzern</strong></td><td>Unternehmen bleiben rechtlich selbstständig, stehen aber wirtschaftlich unter einheitlicher Leitung (z. B. Mutter- und Tochtergesellschaften).</td></tr>
<tr><td><strong>Fusion</strong></td><td>Verschmelzung: Mindestens ein Unternehmen verliert seine rechtliche Selbstständigkeit.</td></tr>
</tbody></table>
<p>Richtung: <strong>horizontal</strong> (gleiche Wirtschaftsstufe, z. B. zwei Systemhäuser), <strong>vertikal</strong> (vor- oder nachgelagerte Stufe, z. B. Distributor kauft Systemhaus), <strong>diagonal/konglomerat</strong> (branchenfremd). Große Zusammenschlüsse prüft das Bundeskartellamt in der Fusionskontrolle.</p>
<div class="callout achtung"><strong>Prüfungsfalle:</strong> Beim Konzern bleiben die Unternehmen <strong>rechtlich selbstständig</strong>, bei der Fusion nicht. Ein Kartell ist keine Fusion, sondern eine (meist verbotene) Absprache.</div>
<div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1 (Katalog „Marktsituationen bewerten“): Marktform <em>bestimmen</em> und <em>begründen</em>, Käufer- und Verkäufermarkt <em>unterscheiden</em>, Zielgruppe <em>abgrenzen</em>, Vertriebsform <em>zuordnen</em>. WiSo: Kartell, Konzern und Fusion <em>unterscheiden</em>.</div>
<div class="callout merke"><strong>Merke:</strong> Marktform = Anzahl der Anbieter × Anzahl der Nachfrager. Käufermarkt: Angebot &gt; Nachfrage. Gleichgewichtspreis: Angebot = Nachfrage.</div>
      `
    },
    {
      id: "rechtsformen",
      title: "Rechtsformen & Handelsregister",
      exam: ["AP2"],
      summary: "Einzelunternehmen, GbR, OHG, KG, GmbH, UG und AG nach Haftung, Kapital, Geschäftsführung und Gewinnverteilung vergleichen; Kaufmannsarten, Handelsregister A/B sowie eG, e. V., gGmbH und Stiftung.",
      html: `
<p>Die <strong>Rechtsform</strong> ist das rechtliche „Kleid“ eines Unternehmens. Sie bestimmt, <strong>wer haftet</strong>, <strong>wie viel Kapital</strong> nötig ist, <strong>wer entscheidet</strong> und <strong>wie der Gewinn verteilt</strong> wird.</p>
<h5>Kaufmann und Handelsregister</h5>
<ul>
<li><strong>Istkaufmann</strong> (§ 1 HGB): betreibt ein Handelsgewerbe, das einen kaufmännisch eingerichteten Geschäftsbetrieb erfordert → muss sich eintragen.</li>
<li><strong>Kannkaufmann</strong> (§ 2 HGB): Kleingewerbetreibender, der sich freiwillig eintragen lässt.</li>
<li><strong>Formkaufmann</strong> (§ 6 HGB): GmbH, UG, AG sind kraft Rechtsform Kaufleute.</li>
</ul>
<p>Das <strong>Handelsregister</strong> ist ein öffentliches, elektronisches Verzeichnis beim Amtsgericht (einsehbar über handelsregister.de). <strong>Abteilung A</strong>: Einzelkaufleute (e. K.) und Personenhandelsgesellschaften (OHG, KG, GmbH &amp; Co. KG). <strong>Abteilung B</strong>: Kapitalgesellschaften (GmbH, UG, AG). Eine Eintragung wirkt <strong>deklaratorisch</strong> (bestätigt nur, z. B. Istkaufmann, Prokura) oder <strong>konstitutiv</strong> (rechtsbegründend, z. B. GmbH und AG entstehen als juristische Person erst mit der Eintragung).</p>
<h5>Die Rechtsformen im Vergleich</h5>
<table><thead><tr><th>Rechtsform</th><th>Mindestkapital</th><th>Haftung</th><th>Geschäftsführung</th><th>Register</th></tr></thead><tbody>
<tr><td>Einzelunternehmen (e. K.)</td><td>keins</td><td>Inhaber unbeschränkt, auch mit Privatvermögen</td><td>Inhaber</td><td>HR A</td></tr>
<tr><td>GbR (ab 2 Personen)</td><td>keins</td><td>alle Gesellschafter unbeschränkt, unmittelbar, gesamtschuldnerisch</td><td>alle gemeinsam (falls nichts anderes vereinbart)</td><td>freiwillig Gesellschaftsregister (eGbR)</td></tr>
<tr><td>OHG (ab 2 Personen)</td><td>keins</td><td>alle unbeschränkt, unmittelbar, gesamtschuldnerisch</td><td>jeder Gesellschafter einzeln bei gewöhnlichen Geschäften; außergewöhnliche Geschäfte nur mit Beschluss aller</td><td>HR A</td></tr>
<tr><td>KG</td><td>keins</td><td>Komplementär unbeschränkt; Kommanditist nur bis zur Höhe seiner Einlage</td><td>Komplementär; Kommanditist hat Kontroll- und Widerspruchsrecht</td><td>HR A</td></tr>
<tr><td>GmbH</td><td>25.000 € Stammkapital, bei Anmeldung mind. 12.500 € eingezahlt</td><td>nur Gesellschaftsvermögen</td><td>Geschäftsführer</td><td>HR B</td></tr>
<tr><td>UG (haftungsbeschränkt)</td><td>ab 1 €, voll in bar einzuzahlen</td><td>nur Gesellschaftsvermögen</td><td>Geschäftsführer</td><td>HR B</td></tr>
<tr><td>AG</td><td>50.000 € Grundkapital</td><td>nur Gesellschaftsvermögen</td><td>Vorstand</td><td>HR B</td></tr>
</tbody></table>
<ul>
<li><strong>GmbH:</strong> Organe sind Geschäftsführer, Gesellschafterversammlung und – ab mehr als 500 Beschäftigten – ein Aufsichtsrat. Der Gesellschaftsvertrag muss notariell beurkundet werden; Gewinn nach Geschäftsanteilen.</li>
<li><strong>UG:</strong> „Mini-GmbH“; 25 % des Jahresüberschusses (abzüglich Verlustvortrag) müssen in eine Rücklage – so lange, bis das Stammkapital durch eine Kapitalerhöhung mindestens 25.000 € beträgt.</li>
<li><strong>AG:</strong> Vorstand leitet, Aufsichtsrat bestellt und überwacht den Vorstand, Hauptversammlung der Aktionäre beschließt u. a. über Gewinnverwendung (Dividende) und Satzungsänderungen. Die Aktionäre riskieren nur den Betrag, den sie für ihre Aktien bezahlt haben.</li>
<li><strong>GmbH &amp; Co. KG:</strong> KG, deren Komplementär eine GmbH ist → die Haftung ist faktisch beschränkt.</li>
</ul>
<div class="callout achtung"><strong>Achtung, Rechtslage seit 2024 (MoPeG):</strong> Die GbR ist rechtsfähig und kann ins Gesellschaftsregister eingetragen werden. Die früher gesetzliche Gewinnregel der OHG und KG „4 % auf den Kapitalanteil, Rest nach Köpfen bzw. in angemessenem Verhältnis“ gilt nicht mehr. Heute gilt diese Reihenfolge: 1. Regelung im Gesellschaftsvertrag (vereinbarte Beteiligungsverhältnisse) → 2. fehlt sie, das Verhältnis der vereinbarten Werte der Einlagen → 3. fehlt auch das, nach Köpfen (gleiche Anteile). Bei der GmbH wird der Gewinn nach Geschäftsanteilen verteilt, wenn der Vertrag nichts anderes bestimmt. In Prüfungsaufgaben wird die Regel meist vorgegeben – lies sie genau.</div>
<div class="callout beispiel"><strong>Beispiel Gewinnverteilung OHG:</strong> Kapitalanteile: Hansen 120.000 €, Peters 80.000 €. Vertrag: 5 % Zinsen auf den Kapitalanteil, Rest nach Köpfen. Gewinn: 90.000 €.<br>
Zinsen: Hansen 120.000 × 5 % = 6.000 €, Peters 80.000 × 5 % = 4.000 € → zusammen 10.000 €.<br>
Rest: 90.000 − 10.000 = 80.000 € ÷ 2 = 40.000 € je Kopf.<br>
Ergebnis: Hansen 46.000 €, Peters 44.000 € (Probe: 46.000 + 44.000 = 90.000 €).</div>
<div class="callout beispiel"><strong>Beispiel GmbH-Gründung:</strong> Drei Gesellschafter übernehmen 12.500 €, 7.500 € und 5.000 € (= 25.000 €). Zahlt jeder nur das gesetzliche Viertel ein (3.125 + 1.875 + 1.250 = 6.250 €), reicht das nicht: Insgesamt müssen mindestens 12.500 € eingezahlt sein.</div>
<p><strong>Kriterien für die Wahl der Rechtsform:</strong> Haftungsrisiko, Kapitalbedarf, Gründungsaufwand und -kosten (Notar), Kreditwürdigkeit, Mitspracherechte, Steuern, Publizitätspflichten.</p>
<h5>Weitere Rechts- und Organisationsformen</h5>
<table><thead><tr><th>Form</th><th>Kennzeichen</th><th>Beispiel</th></tr></thead><tbody>
<tr><td><strong>eG</strong> (eingetragene Genossenschaft)</td><td>fördert ihre Mitglieder durch gemeinsamen Geschäftsbetrieb; jedes Mitglied hat grundsätzlich eine Stimme; Genossenschaftsregister</td><td>Volks- und Raiffeisenbanken, Energie- und Einkaufsgenossenschaften, DATEV eG (IT-Dienstleister für Steuerberatung)</td></tr>
<tr><td><strong>e. V.</strong> (eingetragener Verein)</td><td>Personenvereinigung mit ideellem Zweck; Vereinsregister; Haftung mit dem Vereinsvermögen</td><td>Sportverein, Förderverein einer Schule</td></tr>
<tr><td><strong>gGmbH</strong></td><td>GmbH mit steuerlich anerkannt gemeinnützigem Zweck; Gewinne dürfen nicht an Gesellschafter ausgeschüttet werden</td><td>Träger einer Pflegeeinrichtung oder Bildungsstätte</td></tr>
<tr><td><strong>Stiftung</strong></td><td>Vermögen wird dauerhaft einem festgelegten Zweck gewidmet; hat keine Mitglieder oder Gesellschafter</td><td>Stiftung zur Förderung der Digitalbildung</td></tr>
</tbody></table>
<div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> WiSo: Aussagen zu Haftung, Mindestkapital oder Organen <em>zuordnen</em>, Handelsregister-Abteilung <em>bestimmen</em>, Gewinnverteilung <em>berechnen</em>. Im Betrieb: Rechtsform des Ausbildungsbetriebs <em>erläutern</em>.</div>
<div class="callout merke"><strong>Merke:</strong> Personengesellschaften (GbR, OHG, KG): mindestens ein Vollhafter, HR A. Kapitalgesellschaften (GmbH 25.000 €, UG ab 1 €, AG 50.000 €): Haftung nur mit Gesellschaftsvermögen, HR B.</div>
      `
    },
    {
      id: "vollmachten",
      title: "Vollmachten & eigener Handlungsspielraum",
      exam: ["AP1", "AP2"],
      summary: "Prokura und Handlungsvollmacht (allgemeine, Art-, Einzelvollmacht) nach Erteilung, Umfang, Grenzen und Unterschrift unterscheiden und den eigenen Entscheidungsspielraum als Azubi einschätzen.",
      html: `
<p>Ein Unternehmen handelt durch Menschen. <strong>Gesetzliche Vertreter</strong> sind z. B. der Inhaber, der GmbH-Geschäftsführer oder der AG-Vorstand. Damit nicht jede Bestellung über ihren Tisch muss, erteilen sie <strong>Vollmachten</strong>. Wichtig ist die Unterscheidung zwischen <strong>Außenverhältnis</strong> (was jemand gegenüber Dritten wirksam <em>kann</em>) und <strong>Innenverhältnis</strong> (was er laut Arbeitsvertrag und Anweisung <em>darf</em>).</p>
<h5>Prokura (§§ 48–53 HGB)</h5>
<ul>
<li><strong>Erteilung:</strong> nur durch den Kaufmann bzw. gesetzlichen Vertreter persönlich und <strong>ausdrücklich</strong>; Eintragung ins Handelsregister ist Pflicht, wirkt aber nur <strong>deklaratorisch</strong> – die Prokura gilt ab Erteilung.</li>
<li><strong>Umfang:</strong> alle gerichtlichen und außergerichtlichen Geschäfte, die der Betrieb <em>irgendeines</em> Handelsgewerbes mit sich bringt – also auch ungewöhnliche Geschäfte (z. B. Kredit aufnehmen, Mitarbeitende einstellen, Server für 80.000 € kaufen).</li>
<li><strong>Nur mit besonderer Befugnis:</strong> Grundstücke veräußern oder belasten.</li>
<li><strong>Nicht erlaubt</strong> (Inhabergeschäfte): Bilanz und Steuererklärungen unterschreiben, Prokura erteilen, Insolvenz beantragen, Gesellschafter aufnehmen, das Geschäft verkaufen oder auflösen, eigene Handelsregistereintragungen des Inhabers anmelden.</li>
<li><strong>Arten:</strong> Einzelprokura, Gesamtprokura (nur zusammen mit einem weiteren Prokuristen oder Geschäftsführer), Filialprokura (auf eine Niederlassung beschränkt).</li>
<li><strong>Unterschrift:</strong> Firma + <strong>ppa.</strong> + Name.</li>
<li><strong>Erlöschen:</strong> Widerruf (jederzeit möglich), Ende des Arbeitsverhältnisses, Tod des Prokuristen, Geschäftsaufgabe – <em>nicht</em> durch den Tod des Inhabers. Die Löschung wird eingetragen; bis dahin dürfen gutgläubige Dritte auf das Register vertrauen.</li>
</ul>
<div class="callout achtung"><strong>Prüfungsfalle:</strong> Eine Beschränkung der Prokura im Innenverhältnis („nur bis 50.000 €“) ist <strong>gegenüber Dritten unwirksam</strong> (§ 50 HGB). Der Vertrag über 70.000 € ist gültig – der Prokurist haftet aber intern und riskiert arbeitsrechtliche Folgen.</div>
<h5>Handlungsvollmacht (§ 54 HGB)</h5>
<p>Wird vom Kaufmann <strong>oder einem Prokuristen</strong> formlos erteilt (auch stillschweigend) und <strong>nicht</strong> ins Handelsregister eingetragen. Wer eine allgemeine Handlungsvollmacht hat, kann im Rahmen seiner Befugnisse wiederum Art- und Einzelvollmachten erteilen (z. B. der Abteilungsleiter an eine Azubine). Sie gilt nur für <strong>gewöhnliche</strong> Geschäfte <em>dieses</em> Handelsgewerbes.</p>
<table><thead><tr><th>Art</th><th>Umfang</th><th>Beispiel</th></tr></thead><tbody>
<tr><td>allgemeine Handlungsvollmacht</td><td>alle gewöhnlichen Geschäfte des Betriebs</td><td>Abteilungsleitung IT-Services</td></tr>
<tr><td>Artvollmacht</td><td>eine bestimmte Art regelmäßig wiederkehrender Geschäfte</td><td>Einkäuferin bestellt Verbrauchsmaterial und Standard-Hardware</td></tr>
<tr><td>Einzelvollmacht</td><td>ein einzelnes Rechtsgeschäft</td><td>Azubi holt eine bestellte Lieferung beim Großhändler ab und quittiert sie</td></tr>
</tbody></table>
<p><strong>Besondere Befugnis nötig für:</strong> Grundstücke veräußern oder belasten, Wechselverbindlichkeiten eingehen, Darlehen aufnehmen, Prozesse führen. Unterschrift meist <strong>i. V.</strong> (allgemeine Vollmacht) bzw. <strong>i. A.</strong> (Einzelaufträge).</p>
<h5>Prokura und Handlungsvollmacht im Vergleich</h5>
<table><thead><tr><th>Merkmal</th><th>Prokura</th><th>Handlungsvollmacht</th></tr></thead><tbody>
<tr><td>Wer erteilt?</td><td>nur Kaufmann/gesetzlicher Vertreter</td><td>Kaufmann oder Prokurist; Art- und Einzelvollmacht auch allgemeine Handlungsbevollmächtigte</td></tr>
<tr><td>Form</td><td>ausdrücklich</td><td>formlos, auch stillschweigend</td></tr>
<tr><td>Handelsregister</td><td>ja (deklaratorisch)</td><td>nein</td></tr>
<tr><td>Umfang</td><td>gewöhnliche und außergewöhnliche Geschäfte</td><td>nur gewöhnliche Geschäfte</td></tr>
<tr><td>Darlehen aufnehmen</td><td>erlaubt</td><td>nur mit besonderer Befugnis</td></tr>
<tr><td>Zusatz</td><td>ppa.</td><td>i. V. / i. A.</td></tr>
</tbody></table>
<h5>Dein Handlungsspielraum als Azubi</h5>
<p>Als Azubi hast du in der Regel <strong>keine</strong> Vollmacht, Verträge für den Betrieb abzuschließen. Du arbeitest nach Weisung und handelst im Auftrag. Trotzdem hast du einen <strong>Entscheidungsspielraum</strong>, der mit deiner Erfahrung wächst:</p>
<ul>
<li><strong>Selbst entscheiden:</strong> Reihenfolge deiner Aufgaben, Lösungsweg für ein Standardticket, Dokumentation.</li>
<li><strong>Vorher Rücksprache halten:</strong> alles, was Geld kostet, Zusagen an Kunden (Termine, Preise), Eingriffe in produktive Systeme, Vergabe von Admin-Rechten, Fragen zum Datenschutz.</li>
<li><strong>Weitergeben (eskalieren):</strong> Aufgaben außerhalb deiner Zuständigkeit oder deines Wissens – rechtzeitig und mit sauberer Dokumentation.</li>
</ul>
<div class="callout beispiel"><strong>Beispiel:</strong> Prokuristin Jensen der Nordlicht IT GmbH (Einzelprokura) kauft einen Server-Cluster für 80.000 € auf Rechnung (zulässig), nimmt einen Investitionskredit auf (zulässig) und will das Betriebsgrundstück mit einer Grundschuld belasten (nur mit besonderer Befugnis). Die Bilanz darf sie nicht unterschreiben. Der Abteilungsleiter mit allgemeiner Handlungsvollmacht darf Standard-Hardware bestellen, aber ohne besondere Befugnis keinen Kredit aufnehmen.</div>
<div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1 (Katalog „Aufbauorganisation und Befugnisse“): Prokura und Handlungsvollmacht <em>unterscheiden</em>, den eigenen Handlungsspielraum in einem Auftrag (Bestellgrenzen, Freigaben) <em>einschätzen</em>. WiSo: „Welches Geschäft darf ein Prokurist ohne besondere Befugnis vornehmen?“ oder Vollmachtsarten <em>zuordnen</em>.</div>
<div class="callout merke"><strong>Merke:</strong> Prokura = fast alles, ausdrücklich erteilt, im HR eingetragen, „ppa.“. Handlungsvollmacht = gewöhnliche Geschäfte, formlos, nicht im HR, „i. V.“. Innenbeschränkungen der Prokura wirken nicht nach außen.</div>
      `
    },
    {
      id: "aufbauorganisation",
      title: "Aufbauorganisation & Organigramm",
      exam: ["AP1", "AP2"],
      summary: "Stelle, Instanz, Stabsstelle, Abteilung und Leitungsspanne erklären, Organigramme lesen und Einlinien-, Mehrlinien-, Stablinien-, Sparten- und Matrixorganisation vergleichen.",
      html: `
<p>Die <strong>Aufbauorganisation</strong> legt die dauerhafte Struktur fest: <em>Wer</em> ist für <em>was</em> zuständig und <em>wer</em> darf <em>wem</em> Weisungen geben? Die <strong>Ablauforganisation</strong> regelt dagegen, <em>wie</em> und <em>in welcher Reihenfolge</em> gearbeitet wird (siehe Geschäftsprozesse). Beide gehören zusammen.</p>
<h5>Von der Aufgabe zur Stelle</h5>
<p>In der <strong>Aufgabenanalyse</strong> wird die Gesamtaufgabe in Teilaufgaben zerlegt – nach <strong>Verrichtung</strong> (Funktion: Einkauf, Vertrieb, IT) oder nach <strong>Objekt</strong> (Produkt, Region, Kundengruppe). In der <strong>Aufgabensynthese</strong> werden Teilaufgaben zu Stellen zusammengefasst.</p>
<table><thead><tr><th>Begriff</th><th>Bedeutung</th></tr></thead><tbody>
<tr><td><strong>Stelle</strong></td><td>kleinste organisatorische Einheit; Aufgabenbereich für eine gedachte Person (personenunabhängig)</td></tr>
<tr><td><strong>Instanz</strong></td><td>Stelle mit Leitungs-, Weisungs- und Entscheidungsbefugnis (z. B. Abteilungsleitung)</td></tr>
<tr><td><strong>Stabsstelle</strong></td><td>berät und unterstützt eine Instanz, hat aber <strong>keine</strong> Weisungsbefugnis gegenüber der Linie (z. B. Datenschutz, Controlling, Recht)</td></tr>
<tr><td><strong>Abteilung</strong></td><td>mehrere Stellen unter einer gemeinsamen Instanz</td></tr>
<tr><td><strong>Leitungsspanne</strong></td><td>Anzahl der Stellen, die einer Instanz direkt unterstellt sind</td></tr>
<tr><td><strong>Gliederungstiefe</strong></td><td>Anzahl der Hierarchieebenen</td></tr>
<tr><td><strong>Stellenbeschreibung</strong></td><td>Dokument mit Bezeichnung, Über- und Unterstellung, Zielen, Aufgaben, Befugnissen, Anforderungen und Stellvertretung</td></tr>
</tbody></table>
<h5>Das Organigramm</h5>
<pre class="ascii">
                  Geschäftsführung ····· [Stab: Datenschutz]
                         |
   +------------+--------+---------+-------------+
Vertrieb   IT-Services        Verwaltung    Einkauf/Lager
   |      +-----+------+           |             |
 5 MA  Service-  Netz-  Cloud    4 MA           2 MA
        Desk     werk
        6 MA     4 MA   3 MA
</pre>
<p>Das Organigramm der Nordlicht IT GmbH zeigt: Die Geschäftsführung hat eine Leitungsspanne von 4 (Abteilungsleitungen, ohne Stab), die Leitung IT-Services von 3 (Teamleitungen). Im Bereich IT-Services gibt es 4 Ebenen: Geschäftsführung → Abteilungsleitung → Teamleitung → Mitarbeitende. Eine <strong>große Leitungsspanne</strong> führt zu einer <strong>flachen</strong> Hierarchie mit kurzen Wegen, eine kleine zu einer <strong>steilen</strong> Hierarchie mit vielen Ebenen.</p>
<h5>Organisationsformen im Vergleich</h5>
<table><thead><tr><th>Form</th><th>Merkmal</th><th>Vorteile</th><th>Nachteile</th></tr></thead><tbody>
<tr><td><strong>Einliniensystem</strong></td><td>jede Stelle hat genau <strong>einen</strong> Vorgesetzten; Dienstweg</td><td>klare Zuständigkeit und Verantwortung, eindeutige Weisungen</td><td>lange Dienstwege, Überlastung der Leitung, schwerfällig</td></tr>
<tr><td><strong>Mehrliniensystem</strong></td><td>eine Stelle hat <strong>mehrere</strong> fachliche Vorgesetzte</td><td>Spezialisierung, kurze Wege</td><td>widersprüchliche Weisungen, Kompetenzkonflikte</td></tr>
<tr><td><strong>Stabliniensystem</strong></td><td>Einliniensystem + beratende Stabsstellen</td><td>Entlastung der Leitung durch Expertenwissen</td><td>Konflikte zwischen Stab und Linie; Stab hat Wissen ohne Entscheidungsverantwortung</td></tr>
<tr><td><strong>Spartenorganisation</strong> (divisional)</td><td>Gliederung nach Produkten, Regionen oder Kundengruppen, jede Sparte mit eigenen Funktionen</td><td>Marktnähe, Flexibilität, klare Ergebnisverantwortung (Profit-Center)</td><td>Doppelarbeit, hoher Personal- und Kostenaufwand, Spartenegoismus</td></tr>
<tr><td><strong>Matrixorganisation</strong></td><td>Kombination aus Funktionen (z. B. Technik, Vertrieb) und Objekten (z. B. Produkte, Projekte); zwei Weisungslinien</td><td>Fach- und Objektsicht zugleich, kurze Kommunikationswege, Innovation</td><td>Kompetenzkonflikte, hoher Abstimmungsaufwand</td></tr>
</tbody></table>
<div class="callout achtung"><strong>Prüfungsfalle:</strong> Stabsstellen haben <strong>keine Weisungsbefugnis</strong> gegenüber der Linie – sie beraten nur. Das Mehrliniensystem ist nicht dasselbe wie die Matrixorganisation: Bei der Matrix kreuzen sich systematisch zwei Dimensionen (Funktion × Objekt).</div>
<div class="callout tipp"><strong>IT-Bezug:</strong> Das Organigramm ist die Vorlage für dein Rechtekonzept. Organisationseinheiten und Gruppen im Verzeichnisdienst (z. B. Active Directory) bilden oft Abteilungen und Rollen ab – wer im Vertrieb arbeitet, bekommt Zugriff auf das CRM, aber nicht auf die Lohnbuchhaltung.</div>
<div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1: Organisationsform im Organigramm <em>erkennen</em>, Vor- und Nachteile <em>nennen</em> und <em>bestimmen</em>, mit wem ein Auftrag auf dem Dienstweg abzustimmen ist. WiSo: Organigramm <em>auswerten</em> (Leitungsspanne, Stab, Organisationsform). LF1: das eigene Team im Organigramm des Betriebs <em>einordnen</em>.</div>
<div class="callout merke"><strong>Merke:</strong> Stelle = kleinste Einheit, Instanz = Stelle mit Leitungsbefugnis, Stab = beraten ohne Weisungsrecht. Einlinie = ein Chef, Mehrlinie = mehrere Chefs, Matrix = Funktion × Objekt, Sparte = Gliederung nach Produkt/Region.</div>
      `
    },
    {
      id: "geschaeftsprozesse",
      title: "Geschäftsprozesse & Wertschöpfungskette",
      exam: ["AP1", "AP2"],
      summary: "Ablauforganisation, Kern-, Unterstützungs- und Managementprozesse, Wertschöpfungskette nach Porter, Wertschöpfung berechnen, Durchlaufzeit, PDCA und Soll-Ist-Vergleich.",
      html: `
<p>Die <strong>Ablauforganisation</strong> regelt, wie Arbeit abläuft: in welcher Reihenfolge, von wem, wann, wo und womit. Moderne Unternehmen denken dabei in <strong>Geschäftsprozessen</strong>: Ein Geschäftsprozess ist eine Folge logisch verbundener Tätigkeiten, die durch ein Ereignis ausgelöst wird (z. B. Kundenanfrage) und ein Ergebnis mit Wert für einen internen oder externen Kunden liefert – oft quer durch mehrere Abteilungen.</p>
<h5>Prozessarten</h5>
<table><thead><tr><th>Prozessart</th><th>Aufgabe</th><th>Beispiele im IT-Systemhaus</th></tr></thead><tbody>
<tr><td><strong>Kernprozesse</strong> (primär)</td><td>schaffen direkt Kundennutzen und Umsatz</td><td>Kundenauftrag von Anfrage bis Rechnung, Arbeitsplätze einrichten, Managed Services, Support</td></tr>
<tr><td><strong>Unterstützungsprozesse</strong> (Support)</td><td>ermöglichen die Kernprozesse, ohne selbst Kundennutzen zu stiften</td><td>Personalwesen, Buchhaltung, Einkauf, interne IT, Gebäudemanagement</td></tr>
<tr><td><strong>Managementprozesse</strong> (Führung)</td><td>planen, steuern und kontrollieren das Unternehmen</td><td>Strategieplanung, Controlling, Qualitätsmanagement, Budgetplanung</td></tr>
</tbody></table>
<div class="callout achtung"><strong>Prüfungsfalle:</strong> Ob ein Prozess Kern- oder Unterstützungsprozess ist, hängt vom Unternehmen ab. Der IT-Support ist im Systemhaus ein <strong>Kernprozess</strong> (er wird verkauft), in einer Bäckerei ein <strong>Unterstützungsprozess</strong>.</div>
<h5>Wertschöpfungskette nach Porter</h5>
<pre class="ascii">
+---------------------------------------------------------------+
| Unterstützende Aktivitäten: Unternehmensinfrastruktur,        |
| Personalwirtschaft, Technologieentwicklung, Beschaffung       |  Gewinn-
+-----------+-----------+-----------+-------------+-------------+  spanne
| Eingangs- | Operatio- | Ausgangs- | Marketing   | Kunden-     |  (Marge)
| logistik  | nen       | logistik  | & Vertrieb  | dienst      |
+-----------+-----------+-----------+-------------+-------------+
          Primäre Aktivitäten (direkt wertschöpfend)
</pre>
<p>Für ein Systemhaus heißt das z. B.: Wareneingang von Hardware (Eingangslogistik) → Vorkonfiguration und Imaging (Operationen) → Auslieferung und Aufbau beim Kunden (Ausgangslogistik) → Beratung und Angebot (Vertrieb) → Hotline und Wartung (Kundendienst). Als FISI-Azubi arbeitest du meist in <strong>Operationen</strong> und <strong>Kundendienst</strong> sowie in der unterstützenden internen IT.</p>
<h5>Wertschöpfung berechnen</h5>
<div class="callout formel"><strong>Formel (vereinfacht):</strong> Wertschöpfung = Produktionswert (Umsatz) − Vorleistungen (von anderen Unternehmen bezogene Waren und Dienstleistungen)</div>
<div class="callout beispiel"><strong>Beispiel:</strong> Die Nordlicht IT GmbH erzielt 3.600.000 € Umsatz. Für Handelsware, Fremdleistungen, Energie und Miete zahlt sie 2.250.000 €.<br>
Wertschöpfung = 3.600.000 € − 2.250.000 € = <strong>1.350.000 €</strong>.<br>
Verteilung: Löhne und Gehälter 1.080.000 € (Mitarbeitende), Zinsen 30.000 € (Banken), Steuern 72.000 € (Staat), Gewinn 168.000 € (Eigentümer) – Summe 1.350.000 €. Der Anteil der Mitarbeitenden beträgt 1.080.000 ÷ 1.350.000 × 100 % = 80 %.</div>
<h5>Prozesse darstellen und verbessern</h5>
<ul>
<li><strong>Darstellung:</strong> EPK (ereignisgesteuerte Prozesskette: Ereignis-Sechseck, Funktion-Rechteck mit runden Ecken, Konnektoren UND/ODER/XOR) oder BPMN (Pools und Lanes, Tasks, Start-/Endereignis, Gateways). Die Notationen findest du ausführlich in LF6; in der Prüfung liegen sie als Beiblatt bei.</li>
<li><strong>Kennzahl Durchlaufzeit</strong> = Bearbeitungszeit + Liegezeit + Transportzeit.</li>
<li><strong>Schwachstellen:</strong> Medienbrüche (Papier → Excel → ERP), unnötige Schnittstellen, Wartezeiten, doppelte Datenerfassung.</li>
<li><strong>Software:</strong> ERP bildet die Geschäftsprozesse integriert ab (Einkauf, Lager, Vertrieb, Finanzen), CRM verwaltet Kundenbeziehungen, SCM die Lieferkette.</li>
</ul>
<div class="callout beispiel"><strong>Beispiel Durchlaufzeit:</strong> Ein neuer Mitarbeiter-PC wird bestellt, eingerichtet und übergeben. Bearbeitung 4 h, Liegezeit (Freigabe, Wartezeit) 30 h, Transport 14 h → Durchlaufzeit 48 h. Nur 4 ÷ 48 × 100 % ≈ 8,33 % davon ist echte Arbeit – das Verbesserungspotenzial liegt in den Liegezeiten (z. B. digitale Freigabe im Ticketsystem).</div>
<h5>Kontinuierliche Verbesserung: PDCA und Soll-Ist-Vergleich</h5>
<p>Der <strong>PDCA-Zyklus</strong> (Deming-Kreis) ist die Grundlage des <strong>KVP</strong> (kontinuierlicher Verbesserungsprozess): <strong>Plan</strong> (Problem analysieren, Ziel und Maßnahme planen) → <strong>Do</strong> (im Kleinen umsetzen) → <strong>Check</strong> (Ergebnis mit dem Ziel vergleichen) → <strong>Act</strong> (bewährte Lösung als Standard einführen oder nachbessern) – und von vorn.</p>
<div class="callout formel"><strong>Soll-Ist-Vergleich:</strong> absolute Abweichung = Ist − Soll; relative Abweichung = (Ist − Soll) ÷ Soll × 100 %</div>
<div class="callout beispiel"><strong>Beispiel:</strong> Budget (Soll) für die Umstellung der Telefonanlage 18.000 €, tatsächliche Kosten (Ist) 19.980 € → absolute Abweichung 1.980 €, relative Abweichung 1.980 ÷ 18.000 × 100 % = 11 % Budgetüberschreitung.</div>
<div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1: Wertschöpfung und Prozesse <em>beschreiben</em>, Soll-Ist-Abweichung <em>berechnen</em>, PDCA <em>erläutern</em>, einen Ablauf als Prozess <em>darstellen</em> oder Schwachstellen <em>benennen</em>. WiSo: Kern- und Unterstützungsprozesse <em>zuordnen</em>.</div>
<div class="callout merke"><strong>Merke:</strong> Kernprozesse schaffen Kundennutzen, Unterstützungsprozesse ermöglichen sie, Managementprozesse steuern. Wertschöpfung = Umsatz − Vorleistungen. PDCA: Plan – Do – Check – Act.</div>
      `
    },
    {
      id: "duales-system",
      title: "Duales System, Ausbildungsvertrag, Rechte & Pflichten",
      exam: ["AP2"],
      summary: "Lernorte und Akteure der dualen Ausbildung, Aufgaben der IHK, Inhalte des Ausbildungsvertrags, Rechte und Pflichten nach BBiG, Probezeit, Kündigung, Berufsschulzeiten, Urlaub, Ausbildungsnachweis sowie JAV und Hilfe bei Problemen.",
      html: `
<p>In Deutschland findet die Berufsausbildung an zwei Lernorten statt – daher „dual“. Rechtsgrundlage ist das <strong>Berufsbildungsgesetz (BBiG)</strong>, für deinen Beruf ergänzt durch die <strong>Fachinformatiker-Ausbildungsverordnung (FIAusbV 2020)</strong>.</p>
<h5>Lernorte und Beteiligte</h5>
<table><thead><tr><th></th><th>Ausbildungsbetrieb</th><th>Berufsschule</th></tr></thead><tbody>
<tr><td>Grundlage</td><td>Ausbildungsordnung mit <strong>Ausbildungsrahmenplan</strong> (Bund); daraus der betriebliche Ausbildungsplan (§ 6 FIAusbV)</td><td><strong>Rahmenlehrplan</strong> der KMK mit Lernfeldern, Schulrecht des Landes</td></tr>
<tr><td>Schwerpunkt</td><td>Praxis in echten Kundenaufträgen</td><td>Fachtheorie, WiSo, Deutsch/Kommunikation, Englisch</td></tr>
<tr><td>Aufsicht</td><td>IHK (zuständige Stelle)</td><td>Land (in Schleswig-Holstein das SHIBB)</td></tr>
<tr><td>Finanzierung</td><td>Ausbildungsbetrieb (Vergütung, Ausbilder, Ausbildungsmittel)</td><td>Land und Schulträger (Lehrkräfte, Gebäude)</td></tr>
</tbody></table>
<p>Die <strong>Ausbildungsordnung</strong> (§ 5 BBiG) legt bundeseinheitlich mindestens fest: Berufsbezeichnung, Ausbildungsdauer (2 bis 3 Jahre), das Ausbildungsberufsbild (Fertigkeiten, Kenntnisse, Fähigkeiten), den Ausbildungsrahmenplan (sachliche und zeitliche Gliederung) und die Prüfungsanforderungen. Der <strong>betriebliche Ausbildungsplan</strong> setzt den Rahmenplan für deinen Betrieb um (Stationen, Zeiträume).</p>
<p>Die <strong>IHK</strong> als zuständige Stelle trägt den Vertrag ins Verzeichnis der Ausbildungsverhältnisse ein, prüft die Eignung von Betrieb und Ausbilder, berät und überwacht durch Ausbildungsberater, nimmt die Prüfungen ab (Prüfungsausschuss aus Arbeitgebern, Arbeitnehmern und Lehrkräften) und schlichtet bei Streit. Der <strong>Ausbildende</strong> ist dein Vertragspartner (der Betrieb), der <strong>Ausbilder</strong> die fachlich und persönlich geeignete Person, die dich ausbildet.</p>
<h5>Ausbildungsvertrag (§§ 10, 11 BBiG)</h5>
<p>Vor Beginn der Ausbildung muss der wesentliche Vertragsinhalt niedergelegt werden (seit 2024 genügt Textform). Mindestinhalte: Namen und Anschriften der Vertragspartner (bei Minderjährigen auch der gesetzlichen Vertreter) · Art, Ziel und Gliederung der Ausbildung · Beginn und Dauer · Ausbildungsstätte und Ausbildungsmaßnahmen außerhalb des Betriebs · tägliche Ausbildungszeit · Dauer der Probezeit · Höhe, Zusammensetzung und Zahlung der Vergütung · Vergütung oder Ausgleich von Überstunden · Urlaub · Kündigungsvoraussetzungen · Hinweis auf Tarifverträge und Betriebsvereinbarungen · Form des Ausbildungsnachweises. Bei Minderjährigen unterschreiben die gesetzlichen Vertreter mit. Der Betrieb beantragt anschließend die Eintragung ins <strong>Verzeichnis der Berufsausbildungsverhältnisse</strong> bei der IHK.</p>
<h5>Rechte und Pflichten</h5>
<div class="grid-2">
<div><h6>Pflichten des Azubis (§ 13)</h6><ul>
<li>Lernpflicht: sich bemühen, das Ausbildungsziel zu erreichen</li>
<li>übertragene Aufgaben sorgfältig ausführen</li>
<li>Berufsschule und Prüfungen besuchen</li>
<li>Weisungen befolgen, Betriebsordnung beachten</li>
<li>Werkzeuge und Geräte pfleglich behandeln</li>
<li>Stillschweigen über Betriebs- und Geschäftsgeheimnisse</li>
<li>Ausbildungsnachweis führen</li>
</ul></div>
<div><h6>Pflichten des Ausbildenden (§ 14)</h6><ul>
<li>planmäßig und zielgerichtet ausbilden</li>
<li>Ausbildungsmittel kostenlos stellen, Prüfungsgebühren tragen</li>
<li>zum Berufsschulbesuch anhalten und freistellen</li>
<li>Ausbildungsnachweis regelmäßig durchsehen</li>
<li>nur Aufgaben übertragen, die dem Ausbildungszweck dienen</li>
<li>charakterlich fördern, vor Gefahren schützen</li>
<li>Vergütung zahlen, Zeugnis ausstellen (§§ 16, 17)</li>
</ul></div>
</div>
<h5>Probezeit, Kündigung, Ende</h5>
<table><thead><tr><th>Situation</th><th>Regel</th></tr></thead><tbody>
<tr><td>Probezeit (§ 20)</td><td>mindestens 1, höchstens 4 Monate</td></tr>
<tr><td>Kündigung in der Probezeit</td><td>jederzeit, von beiden Seiten, ohne Frist und ohne Grund – aber schriftlich</td></tr>
<tr><td>nach der Probezeit (§ 22)</td><td>fristlos nur aus wichtigem Grund (beide Seiten, innerhalb von 2 Wochen nach Kenntnis); der Azubi kann mit 4 Wochen Frist kündigen, wenn er die Ausbildung aufgibt oder einen anderen Beruf lernen will; schriftlich mit Angabe der Gründe</td></tr>
<tr><td>Ende (§ 21)</td><td>mit Ablauf der Ausbildungszeit; bei vorherigem Bestehen mit Bekanntgabe des Ergebnisses durch den Prüfungsausschuss; bei Nichtbestehen auf Verlangen Verlängerung bis zur nächsten Wiederholungsprüfung, höchstens 1 Jahr</td></tr>
<tr><td>Weiterarbeit (§ 24)</td><td>wird ohne Absprache weitergearbeitet, entsteht ein unbefristetes Arbeitsverhältnis</td></tr>
</tbody></table>
<h5>Berufsschule, Urlaub, Ausbildungsnachweis</h5>
<ul>
<li><strong>Freistellung und Anrechnung (§ 15 BBiG):</strong> Vor einem Unterricht, der vor 9 Uhr beginnt, darfst du nicht im Betrieb beschäftigt werden. Ein Berufsschultag mit mehr als 5 Unterrichtsstunden à 45 Minuten ist <strong>einmal pro Woche</strong> komplett frei (keine Rückkehr in den Betrieb) und zählt als voller durchschnittlicher Ausbildungstag. Eine Blockwoche mit mindestens 25 Stunden an 5 Tagen zählt als volle Woche. An anderen Schultagen zählt die Unterrichtszeit einschließlich Pausen und notwendiger Wegezeiten. Für Prüfungen und am Arbeitstag unmittelbar vor der schriftlichen Abschlussprüfung bist du freizustellen.</li>
<li><strong>Urlaub:</strong> Jugendliche nach JArbSchG mindestens 30 / 27 / 25 Werktage, wenn sie zu Jahresbeginn noch nicht 16 / 17 / 18 Jahre alt sind; Erwachsene mindestens 24 Werktage (BUrlG), oft mehr laut Tarif- oder Arbeitsvertrag.</li>
<li><strong>Vergütung:</strong> angemessen, mindestens die gesetzliche Mindestausbildungsvergütung (§ 17 BBiG). Der Betrag für das 1. Jahr wird jedes Jahr neu bekannt gemacht; im 2. Jahr kommen 18 %, im 3. Jahr 35 % und im 4. Jahr 40 % hinzu. Zahlung spätestens am letzten Arbeitstag des Monats; Fortzahlung bei Krankheit bis zu 6 Wochen.</li>
<li><strong>Ausbildungsnachweis (Berichtsheft):</strong> schriftlich oder elektronisch, regelmäßig (üblich: wöchentlich) während der Arbeitszeit geführt und vom Ausbilder abgezeichnet. Ein ordnungsgemäß geführter Nachweis ist <strong>Zulassungsvoraussetzung</strong> zur Abschlussprüfung (§ 43 BBiG).</li>
<li><strong>Fehlzeiten:</strong> Krankheit sofort Betrieb <em>und</em> Schule melden. Dauert die Arbeitsunfähigkeit länger als drei Kalendertage, muss sie ärztlich festgestellt sein (der Betrieb kann das früher verlangen). Gesetzlich Versicherte bekommen seit 2023 die elektronische AU (eAU): Der Betrieb ruft sie bei der Krankenkasse ab, du musst sie nicht mehr auf Papier einreichen. Schulversäumnisse lässt du nach den Regeln deiner Schule vom Betrieb bestätigen.</li>
</ul>
<div class="callout beispiel"><strong>Beispiel Anrechnung:</strong> Lena hat eine 40-Stunden-Woche (8 h/Tag). Montag: 6 Unterrichtsstunden → zählt 8 h. Donnerstag: 4 Unterrichtsstunden, 08:00–11:30 Uhr inklusive Pausen → zählt 3,5 h. Dienstag, Mittwoch, Freitag im Betrieb: 24 h. Bisher 8 + 3,5 + 24 = 35,5 h → am Donnerstag darf sie noch höchstens 4,5 h im Betrieb arbeiten (Wegezeiten vernachlässigt).</div>
<h5>Wenn es Probleme gibt: Pflichtverletzungen und Interessenvertretung</h5>
<ul>
<li><strong>Pflichtverletzungen des Azubis</strong> (z. B. unentschuldigtes Fehlen, Berichtsheft nicht geführt): Gespräch → <strong>Abmahnung</strong> → bei wiederholten schweren Verstößen fristlose Kündigung aus wichtigem Grund; bei vorsätzlich verursachten Schäden auch Schadensersatz.</li>
<li><strong>Pflichtverletzungen des Betriebs</strong> (z. B. ausbildungsfremde Tätigkeiten, keine Freistellung für die Berufsschule): Ansprechpartner sind Ausbilder, Betriebsrat/JAV und der <strong>Ausbildungsberater der IHK</strong>; bei Streit aus dem Ausbildungsverhältnis muss zuerst der Schlichtungsausschuss der Kammer angerufen werden (sofern eingerichtet), erst danach das Arbeitsgericht.</li>
<li><strong>Jugend- und Auszubildendenvertretung (JAV):</strong> wird in Betrieben mit Betriebsrat gewählt, wenn dort mindestens 5 Beschäftigte unter 18 Jahren oder Azubis unter 25 Jahren arbeiten. Wählbar sind Beschäftigte unter 25 Jahren, die Amtszeit beträgt 2 Jahre. Die JAV vertritt eure Interessen gegenüber dem <strong>Betriebsrat</strong>; dieser verhandelt mit dem Arbeitgeber und muss z. B. vor jeder Kündigung angehört werden.</li>
</ul>
<div class="callout achtung"><strong>Prüfungsfalle:</strong> Die Regel „mehr als 5 Stunden = ganzer Tag“ gilt nur <strong>einmal pro Woche</strong>. Nach der Probezeit kann der <strong>Betrieb</strong> nicht ordentlich mit Frist kündigen – nur aus wichtigem Grund.</div>
<div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> WiSo: Mindestinhalte des Vertrags, Pflichten <em>zuordnen</em>, Probezeit- und Kündigungsregeln, Urlaubsanspruch nach Alter oder Anrechnung der Berufsschulzeit <em>ermitteln</em>, Aufgaben der IHK und Voraussetzungen der JAV <em>nennen</em>, Ausbildungsrahmenplan und Rahmenlehrplan <em>unterscheiden</em>.</div>
<div class="callout merke"><strong>Merke:</strong> Zwei Lernorte, zwei Grundlagen: Betrieb → Ausbildungsordnung mit Ausbildungsrahmenplan (Bund, Aufsicht IHK), Berufsschule → Rahmenlehrplan (KMK/Land). Probezeit 1–4 Monate, danach kündigt der Betrieb nur noch aus wichtigem Grund. Vertrag in Textform, Kündigung schriftlich.</div>
      `
    },
    {
      id: "pruefung-weiterbildung",
      title: "Gestreckte Abschlussprüfung & Weiterbildung",
      exam: ["AP2"],
      summary: "Aufbau, Gewichtung und Bestehensregeln der gestreckten Abschlussprüfung FISI (AP1/AP2), betriebliche Projektarbeit, Notenschlüssel, Ergänzungsprüfung sowie Fort- und Weiterbildungswege.",
      html: `
<p>Fachinformatiker/-innen legen eine <strong>gestreckte Abschlussprüfung</strong> ab (§ 44 BBiG, §§ 7–25 FIAusbV): Teil 1 findet im <strong>4. Ausbildungshalbjahr</strong> statt, Teil 2 am Ende der Ausbildung. Eine eigene Zwischenprüfung gibt es nicht – Teil 1 zählt bereits zur Endnote.</p>
<h5>Aufbau und Gewichtung (Fachrichtung Systemintegration)</h5>
<table><thead><tr><th>Teil</th><th>Prüfungsbereich</th><th>Form und Dauer</th><th>Gewicht</th></tr></thead><tbody>
<tr><td>AP1</td><td>Einrichten eines IT-gestützten Arbeitsplatzes (Inhalte der ersten 18 Monate, LF1–LF6)</td><td>schriftlich, 90 min, offene (ungebundene) Aufgaben, meist 4 Aufgaben</td><td>20 %</td></tr>
<tr><td>AP2</td><td>Planen und Umsetzen eines Projektes der Systemintegration</td><td>betriebliche Projektarbeit + Dokumentation höchstens 40 h; Präsentation höchstens 15 min und Fachgespräch, zusammen höchstens 30 min (Projektarbeit mit Dokumentation und Präsentation mit Fachgespräch zählen je 50 % des Bereichs)</td><td>50 %</td></tr>
<tr><td>AP2</td><td>Konzeption und Administration von IT-Systemen</td><td>schriftlich, 90 min</td><td>10 %</td></tr>
<tr><td>AP2</td><td>Analyse und Entwicklung von Netzwerken</td><td>schriftlich, 90 min</td><td>10 %</td></tr>
<tr><td>AP2</td><td>Wirtschafts- und Sozialkunde</td><td>schriftlich, 60 min, gebundene Aufgaben</td><td>10 %</td></tr>
</tbody></table>
<p>Vor der Projektarbeit reichst du bei der IHK einen <strong>Projektantrag</strong> (Ausgangssituation, Projektziel, Zeitplanung) zur Genehmigung ein – bei der IHK Flensburg über das Bildungsportal. Erst nach der Genehmigung darfst du beginnen.</p>
<h5>Bestehensregeln (§ 24 FIAusbV)</h5>
<ol>
<li>Gesamtergebnis aus Teil 1 und Teil 2 mindestens „ausreichend“ (50 Punkte),</li>
<li>Ergebnis von Teil 2 mindestens „ausreichend“,</li>
<li>mindestens drei der vier Prüfungsbereiche von Teil 2 mindestens „ausreichend“,</li>
<li>kein Prüfungsbereich von Teil 2 „ungenügend“ (unter 30 Punkte).</li>
</ol>
<p>Die AP1 hat <strong>keine eigene Bestehensgrenze</strong> und kann nicht einzeln wiederholt werden. Wer an Teil 1 nicht teilnimmt, wird zu Teil 2 grundsätzlich nicht zugelassen. Die gesamte Abschlussprüfung kann zweimal wiederholt werden. Eine <strong>mündliche Ergänzungsprüfung</strong> (ca. 15 min) gibt es auf Antrag in <em>einem</em> schriftlichen AP2-Bereich unter 50 Punkten, wenn sie für das Bestehen den Ausschlag geben kann; das alte Ergebnis zählt doppelt: (2 × alt + mündlich) ÷ 3.</p>
<table><thead><tr><th>Punkte</th><th>100–92</th><th>91–81</th><th>80–67</th><th>66–50</th><th>49–30</th><th>29–0</th></tr></thead><tbody>
<tr><td>Note</td><td>sehr gut</td><td>gut</td><td>befriedigend</td><td>ausreichend</td><td>mangelhaft</td><td>ungenügend</td></tr>
</tbody></table>
<div class="callout formel"><strong>Formeln:</strong> Gesamt = 0,2 × AP1 + 0,5 × Projekt + 0,1 × KA + 0,1 × NW + 0,1 × WiSo<br>Teil 2 = (0,5 × Projekt + 0,1 × KA + 0,1 × NW + 0,1 × WiSo) ÷ 0,8</div>
<div class="callout beispiel"><strong>Beispiel:</strong> AP1 68, Projekt 74, Konzeption/Administration 52, Netzwerke 47, WiSo 81.<br>
Gesamt = 13,6 + 37 + 5,2 + 4,7 + 8,1 = <strong>68,6 Punkte</strong> (befriedigend).<br>
Teil 2 = (37 + 5,2 + 4,7 + 8,1) ÷ 0,8 = 55 ÷ 0,8 = 68,75 Punkte ✔. Drei Bereiche ≥ 50 (Projekt, KA, WiSo) ✔, keiner unter 30 ✔ → <strong>bestanden</strong>.<br>
Hätte Netzwerke nur 28 Punkte, wäre die Prüfung wegen Regel 4 zunächst nicht bestanden. Mit einer Ergänzungsprüfung bräuchte man (2 × 28 + x) ÷ 3 ≥ 30 → x ≥ 34 Punkte.</div>
<div class="callout achtung"><strong>Prüfungsfalle:</strong> Eine schwache AP1 sperrt nicht, zählt aber mit 20 % – mehr als jeder schriftliche AP2-Bereich. Mit 40 Punkten in der AP1 brauchst du in Teil 2 im gewichteten Schnitt (50 − 0,2 × 40) ÷ 0,8 = 52,5 Punkte.</div>
<h5>Termine und Zeugnis</h5>
<p>Die schriftlichen Termine sind bundeseinheitlich, z. B. AP1 am 30.09.2026 und 24.02.2027, AP2 am 25.11.2026 und 28.04.2027 – maßgeblich ist immer die Einladung der IHK. Nach bestandener Prüfung erhältst du das IHK-Prüfungszeugnis; <strong>auf Antrag</strong> wird darauf auch die Berufsschulnote ausgewiesen (§ 37 Abs. 3 BBiG). Mit dem Berufsschulabschluss lassen sich unter bestimmten Voraussetzungen auch allgemeinbildende Abschlüsse erwerben – die Regeln legt das Land fest.</p>
<h5>Fort- und Weiterbildung – lebenslanges Lernen</h5>
<ul>
<li><strong>Anpassungsfortbildung:</strong> Wissen aktuell halten (Schulungen, Webinare, neue Softwareversionen). Davon zu unterscheiden ist die <strong>Umschulung</strong> – sie befähigt zu einem anderen Beruf.</li>
<li><strong>Aufstiegsfortbildung</strong> nach BBiG in drei Stufen: Geprüfte/r Berufsspezialist/in → Bachelor Professional → Master Professional (auch im IT-Bereich, z. B. als IT-Spezialist/in oder IT-Projektleiter/in).</li>
<li><strong>Herstellerzertifikate:</strong> z. B. Cisco CCNA, Microsoft-Zertifizierungen (Azure, Microsoft 365), Linux (LPI), ITIL 4 Foundation.</li>
<li><strong>Studium:</strong> dual oder berufsbegleitend, teilweise auch ohne Abitur über die berufliche Qualifikation.</li>
<li><strong>Förderung:</strong> Aufstiegs-BAföG, Weiterbildungsstipendium, Arbeitgeber; im Ausland hilft der <strong>Europass</strong> (einheitlicher Lebenslauf, Mobilitätsnachweis).</li>
</ul>
<div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> WiSo: Weiterbildungsarten <em>unterscheiden</em>, Förderung und Europass <em>zuordnen</em>, Bestehensregeln <em>anwenden</em>. Für dich selbst: Gesamtergebnis <em>berechnen</em> und rechtzeitig Projektantrag und Fristen planen.</div>
<div class="callout merke"><strong>Merke:</strong> AP1 20 % + Projekt 50 % + KA 10 % + NW 10 % + WiSo 10 % = 100 %. Bestanden bei: Gesamt ≥ 50, Teil 2 ≥ 50, mindestens drei AP2-Bereiche ≥ 50, keiner unter 30. Die AP1 hat keine eigene Bestehensgrenze, zählt aber doppelt so viel wie ein schriftlicher AP2-Bereich.</div>
      `
    },
    {
      id: "rolle-kommunikation",
      title: "Eigene Rolle, Kommunikation & Teamarbeit",
      exam: ["AP1", "AP2"],
      summary: "Rollen und Rollenkonflikte im Betrieb, interne und externe Kunden, Sender-Empfänger- und Vier-Ohren-Modell, Feedbackregeln, E-Mail-Knigge, Verschwiegenheit und Teamphasen nach Tuckman.",
      html: `
<p>Im Betrieb hast du mehrere <strong>Rollen</strong> gleichzeitig: Lernende/r, Teammitglied, Kollege/Kollegin, Dienstleister/in für interne und externe Kunden und Berufsschüler/in. An jede Rolle richten andere Menschen <strong>Erwartungen</strong> – Muss-Erwartungen (z. B. Verschwiegenheit, Pünktlichkeit), Soll-Erwartungen (Hilfsbereitschaft) und Kann-Erwartungen (Engagement über das Übliche hinaus).</p>
<h5>Rollenkonflikte</h5>
<table><thead><tr><th>Art</th><th>Bedeutung</th><th>Beispiel</th></tr></thead><tbody>
<tr><td><strong>Intrarollenkonflikt</strong></td><td>widersprüchliche Erwartungen an <em>eine</em> Rolle</td><td>Der Kunde will eine schnelle Lösung, der Ausbilder eine saubere Dokumentation im Ticket.</td></tr>
<tr><td><strong>Interrollenkonflikt</strong></td><td>Erwartungen <em>verschiedener</em> Rollen kollidieren</td><td>Am Tag vor der Berufsschulklausur soll der Azubi bei einem Kundeneinsatz bis spät abends bleiben.</td></tr>
</tbody></table>
<p>Lösung: Konflikt ansprechen, Prioritäten mit dem Ausbilder klären, Ich-Botschaften nutzen. <strong>Interne Kunden</strong> sind Kolleginnen und Kollegen anderer Abteilungen (z. B. der Vertrieb, der ein neues Notebook braucht) – sie verdienen denselben Service wie externe Kunden.</p>
<h5>Kommunikationsmodelle</h5>
<p><strong>Sender-Empfänger-Modell:</strong> Der Sender <strong>codiert</strong> eine Nachricht (Sprache, Fachbegriffe), sendet sie über einen <strong>Kanal</strong> (Telefon, E-Mail, Ticket), der Empfänger <strong>decodiert</strong> sie. Störungen entstehen durch Lärm, schlechte Verbindung oder unterschiedliche „Codes“ (Fachchinesisch gegenüber Laien). <strong>Feedback</strong> zeigt, ob die Nachricht richtig angekommen ist.</p>
<p><strong>Vier-Seiten-Modell (Schulz von Thun):</strong> Jede Nachricht hat vier Seiten – Sachinhalt, Selbstoffenbarung (auch Selbstkundgabe genannt), Beziehung und Appell – und der Empfänger hört mit „vier Ohren“. Weitere Modelle wie die Axiome nach Watzlawick, aktives Zuhören und Fragetechniken vertiefst du in LF6 und im Fach Kommunikation.</p>
<div class="callout beispiel"><strong>Beispiel:</strong> Eine Kundin ruft an: „Der Drucker geht <em>schon wieder</em> nicht!“<br>
<strong>Sachinhalt:</strong> Der Drucker funktioniert nicht.<br>
<strong>Selbstoffenbarung:</strong> Ich bin genervt und stehe unter Zeitdruck.<br>
<strong>Beziehung:</strong> Ihr bekommt das offenbar nicht dauerhaft hin.<br>
<strong>Appell:</strong> Repariert ihn sofort und so, dass er hält.<br>
Professionell reagierst du auf dem Sach- und Appellohr („Ich verstehe, dass das ärgerlich ist. Ich schaue mir das sofort an …“) statt dich auf dem Beziehungsohr angegriffen zu fühlen.</div>
<h5>Feedback geben und nehmen</h5>
<div class="grid-2">
<div><h6>Feedback geben</h6><ul>
<li>Ich-Botschaften statt Du-Vorwürfen</li>
<li>konkret und beschreibend, nicht wertend</li>
<li>zeitnah und unter vier Augen</li>
<li>Stärken und Verbesserungen nennen</li>
<li>Vorschlag statt Befehl</li>
</ul></div>
<div><h6>Feedback annehmen</h6><ul>
<li>zuhören, ausreden lassen</li>
<li>nicht rechtfertigen oder verteidigen</li>
<li>bei Unklarheit nachfragen</li>
<li>bedanken und selbst entscheiden, was du umsetzt</li>
</ul></div>
</div>
<h5>Professionelles Verhalten und E-Mail</h5>
<ul>
<li><strong>E-Mail:</strong> aussagekräftiger Betreff, korrekte Anrede, kurz und sachlich, ein Thema pro Mail, CC bewusst einsetzen, bei großen externen Verteilern <strong>BCC</strong> (Datenschutz), Anhänge prüfen, Signatur, keine sensiblen Daten unverschlüsselt.</li>
<li><strong>Verschwiegenheit:</strong> Betriebs- und Geschäftsgeheimnisse sowie Kundendaten bleiben im Betrieb – auch nach Feierabend und in sozialen Netzwerken. Abfällige Posts über den Arbeitgeber können eine Abmahnung oder Kündigung nach sich ziehen.</li>
<li><strong>Wertschätzung und Vielfalt:</strong> respektvoller Umgang unabhängig von Herkunft, Geschlecht, Alter oder Religion; betriebliche Compliance-Regeln einhalten.</li>
<li><strong>Vorsicht Social Engineering:</strong> Anrufer, die sich als Chef oder Support ausgeben und Passwörter wollen, erhalten keine Auskunft.</li>
</ul>
<h5>Teamentwicklung nach Tuckman</h5>
<table><thead><tr><th>Phase</th><th>Kennzeichen</th></tr></thead><tbody>
<tr><td>Forming</td><td>Kennenlernen, Unsicherheit, Höflichkeit</td></tr>
<tr><td>Storming</td><td>Konflikte um Rollen, Ziele und Vorgehen</td></tr>
<tr><td>Norming</td><td>Regeln und Rollen werden vereinbart, Wir-Gefühl</td></tr>
<tr><td>Performing</td><td>produktive, selbstständige Zusammenarbeit</td></tr>
<tr><td>Adjourning</td><td>Auflösung, Rückblick (Lessons Learned)</td></tr>
</tbody></table>
<div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1 (Kundenkommunikation): eine Kundenaussage nach dem Vier-Seiten-Modell <em>analysieren</em>, eine E-Mail <em>formulieren</em>, Teamphasen <em>beschreiben</em>. WiSo: E-Mail-Regeln, Verhalten in sozialen Medien, Social Engineering.</div>
<div class="callout merke"><strong>Merke:</strong> Vier Seiten: Sachinhalt, Selbstoffenbarung, Beziehung, Appell. Feedback: Ich-Botschaft, konkret, zeitnah. Tuckman: Forming – Storming – Norming – Performing – Adjourning.</div>
      `
    },
    {
      id: "selbstorganisation",
      title: "Arbeitsorganisation & Selbstorganisation",
      exam: ["AP1", "AP2"],
      summary: "Aufgaben priorisieren (Eisenhower, ALPEN, Pareto), mit Kanban und Pomodoro arbeiten, Arbeitszeitregeln kennen und das eigene Lernen bis zur Prüfung selbst steuern – auch mit KI-Unterstützung.",
      html: `
<p>Im IT-Alltag prasseln Tickets, Anrufe, Kundentermine, Berufsschulaufgaben und das Berichtsheft gleichzeitig auf dich ein. Wer sich selbst organisiert, arbeitet stressfreier, zuverlässiger und lernt mehr.</p>
<h5>Prioritäten setzen: Eisenhower-Matrix</h5>
<table><thead><tr><th></th><th>dringend</th><th>nicht dringend</th></tr></thead><tbody>
<tr><td><strong>wichtig</strong></td><td><strong>A – sofort selbst erledigen</strong><br>Mailserver beim Kunden ausgefallen</td><td><strong>B – terminieren und selbst erledigen</strong><br>Backup-Wiederherstellung testen, Zertifizierung vorbereiten, Dokumentation</td></tr>
<tr><td><strong>nicht wichtig</strong></td><td><strong>C – delegieren oder bündeln</strong><br>Papier im Drucker nachfüllen, Routineanfragen</td><td><strong>D – nicht tun (Papierkorb)</strong><br>Werbe-Newsletter lesen</td></tr>
</tbody></table>
<div class="callout tipp"><strong>Tipp:</strong> Erfolgreiche Leute verbringen viel Zeit im <strong>B-Quadranten</strong>. Wer B-Aufgaben (Tests, Doku, Wartung) liegen lässt, erzeugt später A-Notfälle.</div>
<h5>Tagesplanung mit der ALPEN-Methode</h5>
<ol>
<li><strong>A</strong>ufgaben und Termine notieren</li>
<li><strong>L</strong>änge (Dauer) jeder Aufgabe schätzen</li>
<li><strong>P</strong>ufferzeit einplanen: nur ca. 60 % der Zeit verplanen, 40 % für Unerwartetes und Spontanes freihalten</li>
<li><strong>E</strong>ntscheidungen treffen: Prioritäten setzen, kürzen, delegieren</li>
<li><strong>N</strong>achkontrolle: Was ist erledigt? Unerledigtes übertragen</li>
</ol>
<div class="callout beispiel"><strong>Beispiel:</strong> Dein Arbeitstag hat 8 Stunden → 60 % × 8 h = 4,8 h (4 h 48 min) sind verplanbar. Geplant sind: Notebook-Rollout 1,5 h, Ticket-Abarbeitung 2 h, Dokumentation 1 h, Berichtsheft 0,5 h = 5 h. Das sind 0,2 h zu viel → du verschiebst z. B. die Dokumentation teilweise auf morgen (B-Aufgabe mit Termin) oder sprichst die Priorität mit deinem Ausbilder ab.</div>
<h5>Weitere Methoden</h5>
<ul>
<li><strong>Pareto-Prinzip (80/20-Regel):</strong> Mit rund 20 % des Aufwands erreicht man oft 80 % des Ergebnisses – erst die wirkungsvollsten Aufgaben erledigen, Perfektionismus bei Kleinigkeiten vermeiden.</li>
<li><strong>Kanban-Board:</strong> Spalten „To do – Doing – Done“, begrenzte Zahl paralleler Aufgaben (WIP-Limit) → Überblick und weniger Multitasking.</li>
<li><strong>Pomodoro-Technik:</strong> 25 Minuten konzentriert arbeiten, 5 Minuten Pause, nach vier Runden eine längere Pause.</li>
<li><strong>Zeitdiebe erkennen:</strong> ständige Unterbrechungen, Multitasking, unklare Aufträge, Push-Benachrichtigungen – Gegenmittel: Aufgaben bündeln, feste Zeiten für E-Mails, Aufträge vorher klären.</li>
</ul>
<h5>Rechtlicher Rahmen der Arbeitszeit</h5>
<table><thead><tr><th>Regel</th><th>Erwachsene (ArbZG)</th><th>Jugendliche unter 18 (JArbSchG)</th></tr></thead><tbody>
<tr><td>tägliche Arbeitszeit</td><td>8 h, bis 10 h mit Ausgleich</td><td>höchstens 8 h, 40 h pro Woche</td></tr>
<tr><td>Pausen</td><td>30 min bei mehr als 6 h, 45 min bei mehr als 9 h</td><td>30 min bei mehr als 4,5 h, 60 min bei mehr als 6 h</td></tr>
<tr><td>Ruhezeit</td><td>11 h zwischen zwei Arbeitstagen</td><td>12 h</td></tr>
<tr><td>Arbeitstage pro Woche</td><td>Werktage Montag bis Samstag möglich (max. 48 h pro Woche)</td><td>5-Tage-Woche</td></tr>
<tr><td>Nachtruhe</td><td>Nachtarbeit mit besonderen Schutzregeln erlaubt</td><td>grundsätzlich keine Beschäftigung zwischen 20 und 6 Uhr</td></tr>
</tbody></table>
<h5>Das eigene Lernen steuern</h5>
<ul>
<li><strong>Rückwärts planen:</strong> vom Prüfungstermin aus Lernblöcke verteilen (z. B. AP1 im Frühjahr → ab Herbst wöchentlich ein Themenblock, Altprüfungen in den letzten 8 Wochen).</li>
<li><strong>Verteilt und aktiv lernen:</strong> lieber täglich 20 Minuten als einmal 3 Stunden; sich selbst abfragen (Karteikarten, Leitner-System) wirkt besser als nur Lesen.</li>
<li><strong>Berichtsheft als Lernwerkzeug:</strong> Wer Tätigkeiten mit Fachbegriffen beschreibt, wiederholt dabei den Stoff.</li>
<li><strong>Reflexion:</strong> Was lief gut? Was mache ich nächste Woche anders? – derselbe Gedanke wie beim PDCA-Zyklus.</li>
</ul>
<h5>KI-Werkzeuge verantwortungsvoll nutzen</h5>
<p>KI-Assistenten helfen beim Formulieren, Zusammenfassen, Erklären von Fehlermeldungen oder beim Erstellen von Skript-Entwürfen. Dabei gilt: <strong>keine personenbezogenen Daten, Kundendaten oder Passwörter</strong> in öffentliche KI-Dienste eingeben, betriebliche Freigaben beachten und jedes Ergebnis <strong>fachlich prüfen</strong> – KI kann plausibel klingende Fehler („Halluzinationen“) liefern.</p>
<div class="callout achtung"><strong>Prüfungsfalle:</strong> „Dringend“ ist nicht gleich „wichtig“. Ein klingelndes Telefon ist dringend, aber nicht automatisch wichtig. Die Pausenregeln unterscheiden sich für Jugendliche und Erwachsene.</div>
<div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1: Arbeitsschritte in eine sinnvolle Reihenfolge bringen und einen Zeitplan <em>erstellen</em>, Chancen und Risiken von KI-Unterstützung <em>erläutern</em>. WiSo: Arbeitszeit- und Pausenregeln <em>anwenden</em>, Lern- und Arbeitstechniken <em>zuordnen</em>.</div>
<div class="callout merke"><strong>Merke:</strong> Eisenhower: wichtig/dringend → A sofort, B planen, C delegieren, D streichen. ALPEN: 60 % planen, 40 % Puffer. Pareto: 80/20.</div>
      `
    },
    {
      id: "nachhaltigkeit-csr",
      title: "Nachhaltigkeit, CSR & Green IT",
      exam: ["AP1", "AP2"],
      summary: "Drei-Säulen-Modell, Corporate Social Responsibility, Greenwashing, Green IT im Betrieb und Rechenzentrum (PUE), Energieeinsparung berechnen sowie umweltgerechte Entsorgung von IT-Geräten.",
      html: `
<p><strong>Nachhaltig</strong> wirtschaftet, wer die Bedürfnisse der heutigen Generation befriedigt, ohne die Möglichkeiten künftiger Generationen zu gefährden. Das <strong>Drei-Säulen-Modell</strong> verbindet ökonomische, ökologische und soziale Ziele (siehe Unternehmensziele).</p>
<h5>Corporate Social Responsibility (CSR)</h5>
<p>CSR ist die <strong>freiwillige</strong> Übernahme gesellschaftlicher Verantwortung <strong>über gesetzliche Pflichten hinaus</strong>. Handlungsfelder:</p>
<table><thead><tr><th>Handlungsfeld</th><th>Beispiel im IT-Betrieb</th></tr></thead><tbody>
<tr><td>Markt</td><td>faire Verträge, transparente Preise, Lieferanten mit Sozialstandards</td></tr>
<tr><td>Arbeitsplatz</td><td>Weiterbildung, Gesundheitsförderung, flexible Arbeitszeiten, Diversität</td></tr>
<tr><td>Umwelt</td><td>Ökostrom, Refurbished-Hardware, papierlose Prozesse</td></tr>
<tr><td>Gemeinwesen</td><td>ausgemusterte, sicher gelöschte Notebooks an Schulen spenden, lokaler Sportverein</td></tr>
</tbody></table>
<p>Investoren bewerten Nachhaltigkeit oft nach <strong>ESG</strong> (Environmental, Social, Governance). Große Unternehmen haben EU-Berichtspflichten zur Nachhaltigkeit (CSRD); die EU hat sie ab 2025 mit dem sogenannten Omnibus-Paket zeitlich verschoben und auf weniger, sehr große Unternehmen beschränkt. Kleine und mittlere Betriebe spüren die Anforderungen vor allem indirekt, weil große Kunden Nachhaltigkeitsdaten ihrer Lieferanten abfragen.</p>
<div class="callout achtung"><strong>Achtung – Greenwashing:</strong> Wer sich umweltfreundlicher darstellt, als er ist (z. B. „klimaneutral“ nur durch billige Zertifikate), schadet seiner Glaubwürdigkeit und riskiert rechtliche Folgen. CSR muss messbar und belegbar sein.</div>
<h5>Green IT</h5>
<div class="grid-2">
<div><h6>Green <em>in</em> IT (IT selbst sparsamer)</h6><ul>
<li>energieeffiziente Geräte (EU-Energielabel, Energy Star, 80-PLUS-Netzteile)</li>
<li>Energiesparpläne zentral per Gruppenrichtlinie, Geräte nachts aus</li>
<li>Server virtualisieren und konsolidieren</li>
<li>lange Nutzung, Reparatur, Refurbished statt Neukauf</li>
<li>Rechenzentrum: Ökostrom, effiziente Kühlung, Abwärmenutzung</li>
</ul></div>
<div><h6>Green <em>by</em> IT (IT hilft sparen)</h6><ul>
<li>Videokonferenz statt Dienstreise</li>
<li>digitale Workflows statt Papier</li>
<li>Smart Building: bedarfsgerechte Heizung und Beleuchtung</li>
<li>Fernwartung statt Anfahrt</li>
</ul></div>
</div>
<div class="callout formel"><strong>Formeln:</strong> Energie W = P × t (1 kWh = 1.000 Wh) · Kosten = Energie in kWh × Preis je kWh<br>PUE (Power Usage Effectiveness) = Gesamtenergie des Rechenzentrums ÷ Energie der IT-Geräte (Idealwert 1,0)</div>
<div class="callout beispiel"><strong>Beispiel Leerlauf:</strong> Bei der Nordlicht IT GmbH laufen 30 PCs nachts und am Wochenende im Leerlauf mit je 35 W, das sind 118 Stunden pro Woche.<br>
Energie pro Woche: 30 × 35 W × 118 h = 123.900 Wh = 123,9 kWh<br>
pro Jahr (52 Wochen): 123,9 kWh × 52 = 6.442,8 kWh<br>
Kosten bei 0,30 €/kWh: 6.442,8 × 0,30 € = <strong>1.932,84 €</strong> pro Jahr<br>
CO₂ bei angenommenen 0,4 kg/kWh: 6.442,8 × 0,4 kg ≈ 2.577 kg ≈ 2,6 t.<br>
Eine Gruppenrichtlinie, die die PCs nachts herunterfährt, spart also Geld <em>und</em> CO₂ – ein Fall von Zielharmonie.</div>
<div class="callout beispiel"><strong>Beispiel PUE:</strong> Ein Rechenzentrum verbraucht 1.500.000 kWh im Jahr, davon entfallen 1.000.000 kWh auf die IT-Geräte → PUE = 1.500.000 ÷ 1.000.000 = 1,5. Pro kWh für die IT werden also 0,5 kWh zusätzlich für Kühlung, USV-Verluste und Beleuchtung benötigt.</div>
<p><strong>Rebound-Effekt:</strong> Effizienzgewinne werden durch Mehrnutzung aufgezehrt (sparsamere Server → es werden mehr betrieben).</p>
<h5>Umweltgerechte Entsorgung</h5>
<ul>
<li><strong>Abfallhierarchie</strong> (Kreislaufwirtschaftsgesetz): 1. Vermeidung → 2. Vorbereitung zur Wiederverwendung → 3. Recycling → 4. sonstige (z. B. energetische) Verwertung → 5. Beseitigung.</li>
<li>Elektroaltgeräte gehören nicht in den Restmüll (ElektroG): Rückgabe über Hersteller, Händler oder Wertstoffhof; Akkus und Batterien getrennt entsorgen.</li>
<li><strong>Datenträger</strong> vorher sicher löschen oder nachweisbar vernichten lassen (Sicherheitsstufen nach DIN 66399) – Datenschutz!</li>
<li>Toner und Kartuschen über Rücknahmesysteme, Verpackungen trennen.</li>
</ul>
<div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1: ökologische, ökonomische und soziale Aspekte einer Beschaffung <em>erläutern</em>, Energieeinsparung und Kosten <em>berechnen</em>. WiSo: Stufen der Abfallhierarchie <em>ordnen</em>, Umweltschutzmaßnahmen <em>zuordnen</em>, CSR <em>erklären</em>.</div>
<div class="callout merke"><strong>Merke:</strong> CSR = freiwillige Verantwortung über das Gesetz hinaus. Green in IT spart in der IT, Green by IT spart mithilfe der IT. Vermeiden vor Wiederverwenden vor Recyceln.</div>
      `
    },
    {
      id: "projekt-praesentation",
      title: "Grundlagen Projektarbeit & Präsentieren",
      exam: ["AP1", "AP2"],
      summary: "Projektmerkmale, magisches Dreieck, Projektphasen (Wasserfall, Scrum), Projektorganisation sowie eine Unternehmenspräsentation zielgruppengerecht planen, mit passenden Diagrammen und geprüften Quellen gestalten, halten und kriteriengeleitet bewerten.",
      html: `
<p>Die Unternehmenspräsentation im Team ist das zentrale Handlungsprodukt von LF1 – und gleichzeitig dein erstes kleines <strong>Projekt</strong>. In der AP2 präsentierst du dein Abschlussprojekt vor dem Prüfungsausschuss.</p>
<h5>Was ist ein Projekt?</h5>
<p>Ein Projekt ist ein Vorhaben, das durch die <strong>Einmaligkeit seiner Bedingungen</strong> gekennzeichnet ist. Merkmale: klares <strong>Ziel</strong>, <strong>zeitliche Begrenzung</strong> (Start und Ende), <strong>begrenzte Ressourcen</strong> (Budget, Personal), <strong>Neuartigkeit und Komplexität</strong>, oft fachübergreifende Zusammenarbeit, eigene Projektorganisation und ein <strong>Risiko</strong>. Routinearbeiten (täglicher Backup-Check) sind keine Projekte.</p>
<div class="callout merke"><strong>Magisches Dreieck:</strong> <strong>Leistung/Qualität – Zeit – Kosten</strong> hängen voneinander ab. Soll das Projekt schneller fertig werden, steigen meist die Kosten oder die Qualität leidet.</div>
<h5>Projektphasen</h5>
<table><thead><tr><th>Phase</th><th>Inhalte</th></tr></thead><tbody>
<tr><td>Initialisierung</td><td>Idee, Auftrag, Machbarkeit, Stakeholder</td></tr>
<tr><td>Definition</td><td>SMART-Ziele, Anforderungen (Lastenheft des Auftraggebers, Pflichtenheft des Auftragnehmers)</td></tr>
<tr><td>Planung</td><td>Projektstrukturplan mit Arbeitspaketen, Termine (Gantt-Diagramm, Netzplan), Meilensteine, Ressourcen, Kosten, Risiken</td></tr>
<tr><td>Durchführung und Steuerung</td><td>Umsetzung, Soll-Ist-Vergleich, Gegensteuern</td></tr>
<tr><td>Abschluss</td><td>Abnahme, Dokumentation, Präsentation, Lessons Learned</td></tr>
</tbody></table>
<p><strong>Wasserfallmodell:</strong> Phasen laufen nacheinander ab; gut bei klaren, stabilen Anforderungen. <strong>Scrum:</strong> agil in kurzen Iterationen (Sprints von 1–4 Wochen) mit den Rollen Product Owner, Scrum Master und Developers; Ereignisse Sprint Planning, Daily Scrum, Sprint Review und Retrospektive; gut bei unklaren oder sich ändernden Anforderungen.</p>
<p><strong>Projektorganisation:</strong> reine Projektorganisation (eigenes Team, volle Weisungsbefugnis der Projektleitung), Stabs- bzw. Einfluss-Projektorganisation (Projektleitung berät nur) und Matrix-Projektorganisation (Mitarbeitende bleiben in ihrer Abteilung, arbeiten aber anteilig im Projekt).</p>
<h5>Präsentation vorbereiten</h5>
<ol>
<li><strong>Ziel und Zielgruppe klären:</strong> Wer hört zu (Kunden, Mitschüler, Prüfungsausschuss)? Was wissen sie schon, was erwarten sie?</li>
<li><strong>Inhalte sammeln und strukturieren:</strong> Kernbotschaften festlegen (z. B. Leistungen, Rechtsform, Organisation, Wertschöpfung, Ausbildung im Betrieb).</li>
<li><strong>Medien wählen:</strong> Folien, Flipchart, Live-Demo, Handout – passend zu Raum und Zielgruppe.</li>
<li><strong>Proben:</strong> Zeit stoppen, Übergänge zwischen den Teammitgliedern üben, Technik vorher testen.</li>
</ol>
<table><thead><tr><th>Teil</th><th>Inhalt</th></tr></thead><tbody>
<tr><td>Einleitung</td><td>Begrüßung, Vorstellung, Thema und Ziel, Gliederung (Agenda), Einstieg, der neugierig macht</td></tr>
<tr><td>Hauptteil</td><td>logisch aufgebaute Inhalte, Beispiele, Visualisierungen</td></tr>
<tr><td>Schluss</td><td>Zusammenfassung, Fazit oder Ausblick, Dank, Fragen</td></tr>
</tbody></table>
<h5>Folien gestalten und vortragen</h5>
<ul>
<li>wenige Stichpunkte pro Folie (Faustregel: höchstens 6–7 Zeilen), gut lesbare Schriftgröße, starker Kontrast</li>
<li>Diagramme und Bilder statt Textwüsten; einheitliches Design nach Corporate Design</li>
<li>Quellen angeben und Urheberrechte bei Bildern beachten</li>
<li>frei sprechen, Blickkontakt, ruhige Körpersprache, Pausen, deutliche Stimme</li>
<li>Zeitvorgabe einhalten – bei der IHK höchstens 15 Minuten Präsentation</li>
</ul>
<h5>Zahlen visualisieren: die passende Diagrammart</h5>
<table><thead><tr><th>Aussage</th><th>Diagrammart</th><th>Beispiel</th></tr></thead><tbody>
<tr><td>Anteile an einem Ganzen (100 %)</td><td>Kreis- oder Ringdiagramm (wenige Segmente)</td><td>Umsatzanteile der Leistungsbereiche</td></tr>
<tr><td>Werte vergleichen</td><td>Säulen- oder Balkendiagramm</td><td>Tickets je Team, Angebote im Preisvergleich</td></tr>
<tr><td>Entwicklung über die Zeit</td><td>Liniendiagramm</td><td>Umsatz 2023–2026, Serverauslastung pro Stunde</td></tr>
<tr><td>Zusammensetzung im Vergleich</td><td>gestapeltes Säulendiagramm</td><td>Tickets je Monat nach Priorität</td></tr>
<tr><td>Strukturen und Abläufe</td><td>Organigramm, Ablaufdiagramm, Mindmap</td><td>Aufbau des Betriebs, Ablauf eines Kundenauftrags</td></tr>
</tbody></table>
<div class="callout achtung"><strong>Achtung:</strong> Diagramme können täuschen, z. B. durch eine abgeschnittene y-Achse (kleine Unterschiede wirken riesig), 3D-Effekte oder fehlende Achsenbeschriftung und Einheiten. Jedes Diagramm braucht Titel, Beschriftung, Einheit und Quelle.</div>
<h5>Medienkompetenz: Quellen prüfen und richtig nutzen</h5>
<p>Für eine Präsentation recherchierst du Informationen. Prüfe jede Quelle, bevor du sie verwendest:</p>
<ul>
<li><strong>Urheber:</strong> Wer hat es veröffentlicht? Hersteller, Behörde, Fachverlag, anonymer Forenbeitrag?</li>
<li><strong>Aktualität:</strong> Von wann ist die Information? In der IT veralten Angaben schnell (Versionen, Preise, Gesetze).</li>
<li><strong>Seriosität und Belege:</strong> Werden Quellen genannt? Lässt sich die Aussage in einer zweiten, unabhängigen Quelle bestätigen?</li>
<li><strong>Interessen:</strong> Will die Quelle informieren oder verkaufen (Werbung, gesponserte Tests)?</li>
<li><strong>KI-Ergebnisse:</strong> Texte aus KI-Assistenten sind keine Quelle – Fakten immer an der Originalquelle prüfen.</li>
</ul>
<p>Bilder, Grafiken und Texte sind <strong>urheberrechtlich geschützt</strong>. Verwende eigene Materialien, Bilder mit passender Lizenz (z. B. Creative Commons mit Namensnennung) oder zitiere kurz mit Quellenangabe. Fremde Logos und Fotos von Personen nur mit Erlaubnis.</p>
<h5>Präsentationen kriteriengeleitet bewerten</h5>
<div class="callout beispiel"><strong>Beispiel (gewichtete Bewertung wie bei einer Nutzwertanalyse):</strong> Kriterien: Inhalt 40 %, Aufbau 20 %, Visualisierung 20 %, Vortrag 20 %; Punkte von 1 bis 10.<br>
Team A: 8, 6, 9, 7 → 0,4 × 8 + 0,2 × 6 + 0,2 × 9 + 0,2 × 7 = 3,2 + 1,2 + 1,8 + 1,4 = <strong>7,6</strong><br>
Team B: 7, 9, 6, 8 → 2,8 + 1,8 + 1,2 + 1,6 = <strong>7,4</strong><br>
Team A liegt knapp vorn, obwohl Team B besser aufgebaut war – das Kriterium Inhalt wiegt doppelt so schwer.</div>
<div class="callout tipp"><strong>Tipp:</strong> Nach der Bewertung folgt die Verbesserung: Feedback nach den Feedbackregeln geben, Überarbeitungspunkte festhalten und in der nächsten Präsentation umsetzen (PDCA).</div>
<div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1: Projektmerkmale <em>nennen</em>, Wasserfall und Scrum <em>unterscheiden</em>, ein SMART-Ziel <em>formulieren</em>, Hinweise zur Präsentation <em>geben</em>, eine passende Diagrammart <em>auswählen</em> und die Seriosität einer Quelle <em>beurteilen</em>. Netzplan und Gantt-Diagramm übst du in LF6. AP2: Projektpräsentation (max. 15 min) mit anschließendem Fachgespräch.</div>
<div class="callout merke"><strong>Merke:</strong> Projekt = einmalig, zielorientiert, zeitlich begrenzt, begrenzte Ressourcen. Präsentation = Einleitung – Hauptteil – Schluss, zielgruppengerecht. Anteile → Kreis, Vergleich → Säule/Balken, Entwicklung → Linie. Quellen immer prüfen und angeben.</div>
      `
    },
    {
      id: "machbarkeit-kalkulation",
      title: "Machbarkeit, Vor- & Nachkalkulation",
      exam: ["AP1"],
      summary: "Machbarkeit eines Auftrags prüfen, Stundensätze und Dienstleistungskosten berechnen, eine Vorkalkulation mit Zuschlägen erstellen, per Nachkalkulation Abweichungen auswerten und Risiken bewerten.",
      html: `
<p>Bevor dein Betrieb einen Auftrag annimmt, prüft er, ob er ihn überhaupt stemmen kann und ob er sich lohnt. Nach Abschluss wird kontrolliert, ob die Planung gestimmt hat. Der Prüfungskatalog ordnet diese Rechnungen ausdrücklich auch LF1 zu.</p>
<h5>Machbarkeitsanalyse</h5>
<table><thead><tr><th>Dimension</th><th>Prüffrage</th></tr></thead><tbody>
<tr><td>technisch</td><td>Haben wir Know-how, Werkzeuge und Lizenzen?</td></tr>
<tr><td>personell</td><td>Sind genug Fachkräfte im Zeitraum verfügbar?</td></tr>
<tr><td>terminlich</td><td>Ist der Wunschtermin mit Lieferzeiten und Puffern erreichbar?</td></tr>
<tr><td>wirtschaftlich</td><td>Liegen die kalkulierten Kosten im Budget des Kunden – und bleibt ein Gewinn?</td></tr>
<tr><td>rechtlich</td><td>Werden Datenschutz, Verträge und Lizenzbedingungen eingehalten?</td></tr>
</tbody></table>
<h5>Stundensätze und Dienstleistungskosten</h5>
<div class="callout formel"><strong>Formeln:</strong><br>
Kostensatz je Stunde = Jahreskosten der Arbeitskraft ÷ produktive (abrechenbare) Stunden<br>
Personalkosten = Stunden × Stundensatz<br>
Selbstkosten = Personalkosten + Sachkosten + Gemeinkostenzuschlag<br>
Nettoangebotspreis = Selbstkosten + Gewinnzuschlag · Bruttopreis = Netto × 1,19</div>
<div class="callout beispiel"><strong>Beispiel Stundensatz:</strong> Ein Techniker kostet den Betrieb inklusive Lohnnebenkosten 72.000 € im Jahr und ist 1.440 Stunden abrechenbar → 72.000 ÷ 1.440 = 50 €/h Kostensatz. Mit 20 % Gewinnzuschlag ergibt sich ein Verrechnungssatz von 60 €/h.<br>
<strong>Techniker-Einsatz:</strong> Anfahrtspauschale 45 € + 3,5 h × 78 €/h = 45 + 273 = 318 € netto → × 1,19 = 378,42 € brutto.<br>
<strong>Hotline:</strong> Grundgebühr 49 € pro Monat + 1,20 € je Minute bei 180 Minuten → 49 + 216 = 265 €.</div>
<h5>Vorkalkulation</h5>
<p>Die <strong>Vorkalkulation</strong> entsteht vor Auftragsbeginn und ist Grundlage des Angebots. Sie arbeitet mit geschätzten Mengen und Zeiten.</p>
<div class="callout beispiel"><strong>Beispiel:</strong> Die Nordlicht IT GmbH soll bei einer Arztpraxis 12 Arbeitsplätze einrichten. Das Budget des Kunden beträgt 4.000 € brutto.<br>
Personalkosten: Techniker 30 h × 65 €/h = 1.950 € + Azubi 16 h × 25 €/h = 400 € → 2.350 €<br>
Sachkosten (Kleinmaterial, Anfahrten): 440 €<br>
Gemeinkostenzuschlag 15 % auf Personalkosten: 2.350 € × 0,15 = 352,50 €<br>
Selbstkosten: 2.350 + 440 + 352,50 = 3.142,50 €<br>
Gewinnzuschlag 10 %: 314,25 € → Nettoangebotspreis 3.456,75 €<br>
Umsatzsteuer 19 %: 656,78 € → <strong>Bruttoangebotspreis 4.113,53 €</strong><br>
Budgetvergleich: 4.113,53 € − 4.000 € = 113,53 € über Budget → nicht ohne Weiteres machbar. Mögliche Lösungen: Leistungsumfang reduzieren (z. B. Kunde übernimmt Abbau der Altgeräte), Gewinnzuschlag senken oder mit dem Kunden über das Budget verhandeln.</div>
<h5>Nachkalkulation</h5>
<p>Die <strong>Nachkalkulation</strong> rechnet nach Abschluss mit den <strong>Ist-Werten</strong> und vergleicht sie mit der Vorkalkulation (Soll-Ist-Vergleich).</p>
<div class="callout beispiel"><strong>Beispiel (Fortsetzung):</strong> Der Kunde nimmt das Angebot zum Festpreis an. Tatsächlich braucht der Techniker 36 statt 30 Stunden.<br>
Personalkosten Ist: 36 × 65 € + 400 € = 2.740 €; Gemeinkosten 15 % = 411 €; Selbstkosten Ist = 2.740 + 440 + 411 = 3.591 €<br>
Abweichung: 3.591 − 3.142,50 = 448,50 € → 448,50 ÷ 3.142,50 × 100 % ≈ 14,27 % über Plan<br>
Ergebnis: Nettoerlös 3.456,75 € − Selbstkosten 3.591 € = <strong>−134,25 € Verlust</strong>. Lessons Learned: Zeitansatz für Datenübernahme künftig höher schätzen, Risikopuffer einplanen.</div>
<h5>Risiken bewerten</h5>
<p><strong>Risiko = Eintrittswahrscheinlichkeit × Schadenshöhe.</strong> Beispiel: Die Hardware kommt mit 30 % Wahrscheinlichkeit zu spät, der Schaden (Mehraufwand, zweite Anfahrt) beträgt 2.000 € → Risikowert 0,3 × 2.000 € = 600 €. Strategien: <strong>vermeiden</strong> (früher bestellen), <strong>vermindern</strong> (Ersatzlieferant), <strong>übertragen</strong> (Versicherung, Vertragsstrafe), <strong>akzeptieren</strong> (Puffer einplanen).</p>
<div class="callout achtung"><strong>Prüfungsfallen:</strong> Gemeinkostenzuschlag nur auf die angegebene Basis rechnen (hier Personalkosten); Gewinnzuschlag auf die Selbstkosten; Umsatzsteuer erst ganz am Ende auf den Nettopreis. Budgetangaben des Kunden genau lesen: brutto oder netto?</div>
<div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1: Kosten eines Einsatzes oder Projekts <em>berechnen</em>, mit einer Budgetvorgabe <em>vergleichen</em> und die Machbarkeit <em>beurteilen</em>; Nachkalkulation mit prozentualer Abweichung <em>durchführen</em>; Risiken <em>bewerten</em> und Gegenmaßnahmen <em>nennen</em>.</div>
<div class="callout merke"><strong>Merke:</strong> Personal- + Sach- + Gemeinkosten = Selbstkosten → + Gewinnzuschlag = Nettopreis → + 19 % USt = Bruttopreis. Vorkalkulation = Soll (Schätzung), Nachkalkulation = Ist. Risiko = Wahrscheinlichkeit × Schaden.</div>
      `
    },
  ],
  exercises: [
    {
      id: "e-system-1",
      topic: "unternehmen-system",
      title: "Wirtschaftssektoren und ökonomisches Prinzip",
      level: 1,
      exam: ["AP2"],
      task: `<p>Die Nordlicht IT GmbH in Heide betreut Kunden aus ganz Dithmarschen.</p>
<p>a) Ordne die folgenden Kunden jeweils einem Wirtschaftssektor zu: (1) Krabbenfischerei in Büsum, (2) Hersteller von Rotorblättern für Windkraftanlagen, (3) Hotel in St. Peter-Ording, (4) Landwirtschaftsbetrieb mit Kohlanbau, (5) Steuerberatungskanzlei in Heide.</p>
<p>b) Die Nordlicht IT GmbH selbst gehört zu welchem Sektor? Begründe kurz.</p>
<p>c) Entscheide, ob das Maximal- oder das Minimalprinzip vorliegt: (1) „Mit dem Budget von 15.000 € wollen wir möglichst viele Arbeitsplätze mit neuen Monitoren ausstatten.“ (2) „Wir brauchen 12 Access Points einer bestimmten Spezifikation – der Einkauf soll das günstigste Angebot finden.“</p>`,
      hints: ["Primär = Urproduktion, sekundär = Be- und Verarbeitung, tertiär = Dienstleistungen.", "Beim ökonomischen Prinzip steht immer genau eine Größe fest."],
      solution: `<p><strong>a)</strong> (1) Krabbenfischerei → primärer Sektor (Urproduktion). (2) Rotorblatthersteller → sekundärer Sektor (industrielle Verarbeitung). (3) Hotel → tertiärer Sektor (Dienstleistung). (4) Kohlanbau → primärer Sektor. (5) Steuerberatung → tertiärer Sektor.</p>
<p><strong>b)</strong> Die Nordlicht IT GmbH ist ein IT-Dienstleister (Beratung, Einrichtung, Support) und gehört damit zum <strong>tertiären Sektor</strong>. Wer Informations- und Wissensdienste gesondert betrachtet, ordnet sie dem quartären Sektor zu.</p>
<p><strong>c)</strong> (1) <strong>Maximalprinzip</strong>: Der Mitteleinsatz (15.000 €) ist gegeben, der Ertrag (Anzahl ausgestatteter Arbeitsplätze) soll maximal sein. (2) <strong>Minimalprinzip</strong>: Das Ziel (12 Access Points einer Spezifikation) ist gegeben, der Mitteleinsatz (Preis) soll minimal sein.</p>`
    },
    {
      id: "e-faktoren-1",
      topic: "unternehmen-system",
      title: "Produktionsfaktoren in der PC-Werkstatt",
      level: 1,
      exam: ["AP2"],
      task: `<p>Die Nordlicht IT GmbH baut in ihrer Werkstatt in Heide Büro-PCs für Kunden zusammen.</p>
<p>a) Ordne die Beispiele den betriebswirtschaftlichen Produktionsfaktoren zu (ausführende Arbeit, Betriebsmittel, Werkstoffe, dispositiver Faktor): (1) Montagetisch mit Werkzeug, (2) Technikerin beim Zusammenbau, (3) Mainboards und Gehäuse, (4) Werkstattleiter, der die Aufträge einplant und kontrolliert, (5) Wärmeleitpaste und Kabelbinder, (6) Strom für Lötstation und Prüfgeräte, (7) Firmenwagen für die Auslieferung.</p>
<p>b) Ordne die Werkstoffe aus a) genauer zu (Rohstoff bzw. Fremdbauteil, Hilfsstoff, Betriebsstoff) und begründe kurz.</p>
<p>c) Erläutere, warum der dispositive Faktor für den Erfolg der Werkstatt entscheidend ist.</p>`,
      hints: ["Betriebsmittel werden genutzt, aber nicht verbraucht.", "Hauptbestandteil – Nebenbestandteil – geht gar nicht ins Produkt ein."],
      solution: `<p><strong>a)</strong> Ausführende Arbeit: (2). Betriebsmittel: (1) und (7). Werkstoffe: (3), (5) und (6). Dispositiver Faktor: (4).</p>
<p><strong>b)</strong> Mainboards und Gehäuse werden <strong>Hauptbestandteil</strong> des PCs → Rohstoffe bzw. zugekaufte Fremdbauteile. Wärmeleitpaste und Kabelbinder sind nur <strong>Nebenbestandteile</strong> → Hilfsstoffe. Strom wird bei der Arbeit <strong>verbraucht</strong>, geht aber nicht in den PC ein → Betriebsstoff.</p>
<p><strong>c)</strong> Die Elementarfaktoren erzeugen allein noch keine Leistung – sie müssen sinnvoll kombiniert werden. Der Werkstattleiter plant, welche Aufträge wann bearbeitet werden, sorgt dafür, dass das Material rechtzeitig vorhanden ist, verteilt die Arbeit auf die Technikerinnen und kontrolliert Qualität und Termine. Fehlt diese Planung, entstehen Leerlauf, Lieferverzug und unnötige Kosten, obwohl Personal, Werkzeug und Material vorhanden sind.</p>`
    },
    {
      id: "e-stakeholder-2",
      topic: "unternehmen-system",
      title: "Stakeholder-Analyse bei der Einführung einer Zeiterfassung",
      level: 2,
      exam: ["AP1"],
      task: `<p>Die Nordlicht IT GmbH führt für ihre 40 Beschäftigten eine digitale Zeiterfassung per App ein. Als Azubi sollst du die Projektleitung bei der Stakeholder-Analyse unterstützen.</p>
<p>a) Nenne drei interne und zwei externe Stakeholder dieses Projekts mit jeweils einem typischen Interesse.</p>
<p>b) Erläutere einen Interessenkonflikt zwischen zwei Stakeholdern.</p>
<p>c) Ordne die Geschäftsführung, den Betriebsrat und die Mitarbeitenden in eine Einfluss-Interesse-Matrix ein und nenne je eine passende Maßnahme.</p>`,
      hints: ["Bei technischen Einrichtungen, die Leistung oder Verhalten überwachen können, hat der Betriebsrat ein Mitbestimmungsrecht.", "Denke auch an den Softwareanbieter und an den Datenschutz."],
      solution: `<p><strong>a)</strong> Interne Stakeholder: <em>Geschäftsführung</em> – genaue Erfassung abrechenbarer Stunden, geringer Verwaltungsaufwand; <em>Mitarbeitende</em> – einfache Bedienung, keine Überwachung, korrekte Überstundenerfassung; <em>Betriebsrat</em> – Schutz vor Leistungs- und Verhaltenskontrolle, Mitbestimmung; (auch: Lohnbuchhaltung – automatische Übernahme der Daten). Externe Stakeholder: <em>Softwareanbieter</em> – Lizenzumsatz, langfristiger Vertrag; <em>Kunden</em> – nachvollziehbare Abrechnung der Einsatzzeiten; (auch: Aufsichtsbehörde für Datenschutz – rechtmäßige Verarbeitung).</p>
<p><strong>b)</strong> Die Geschäftsführung möchte möglichst detaillierte Daten (z. B. Standort und Zeit je Kundeneinsatz), um Abläufe zu optimieren. Die Mitarbeitenden und der Betriebsrat befürchten dadurch eine lückenlose Leistungs- und Verhaltenskontrolle. Beide Interessen widersprechen sich; eine Betriebsvereinbarung kann regeln, welche Daten erfasst und wofür sie verwendet werden dürfen.</p>
<p><strong>c)</strong> Geschäftsführung: hoher Einfluss, hohes Interesse → eng einbinden (Lenkungsausschuss, Entscheidungen). Betriebsrat: hoher Einfluss (Mitbestimmungsrecht bei technischen Überwachungseinrichtungen), hohes Interesse → früh beteiligen, Betriebsvereinbarung gemeinsam erarbeiten. Mitarbeitende: hohes Interesse, einzeln geringer Einfluss → regelmäßig informieren, Schulung und Testphase anbieten.</p>`
    },
    {
      id: "e-ziele-1",
      topic: "ziele-leitbild",
      title: "Zieldimensionen und Zielbeziehungen",
      level: 1,
      exam: ["AP1", "AP2"],
      task: `<p>Im Leitbild der Nordlicht IT GmbH stehen folgende Ziele:</p>
<ol><li>Den Umsatz mit Wartungsverträgen um 10 % steigern.</li><li>Den Stromverbrauch des eigenen Serverraums um 20 % senken.</li><li>Jedem Azubi eine Herstellerzertifizierung finanzieren.</li><li>Die Zahlungsfähigkeit jederzeit sichern.</li><li>Ausgemusterte Notebooks aufbereiten und an Schulen spenden.</li></ol>
<p>a) Ordne jedes Ziel einer Zieldimension (ökonomisch, ökologisch, sozial) zu.</p>
<p>b) Bestimme die Zielbeziehung zwischen Ziel 2 und dem Ziel „Kosten senken“ sowie zwischen Ziel 3 und dem Ziel „kurzfristig den Gewinn maximieren“. Begründe.</p>`,
      solution: `<p><strong>a)</strong> 1 → ökonomisch (Umsatz). 2 → ökologisch (Energie/CO₂). 3 → sozial (Aus- und Weiterbildung). 4 → ökonomisch (Liquidität). 5 → ökologisch (Wiederverwendung, Abfallvermeidung) und zugleich sozial (Unterstützung von Schulen).</p>
<p><strong>b)</strong> Ziel 2 und „Kosten senken“ stehen in <strong>Zielharmonie</strong>: Wer weniger Strom verbraucht, zahlt auch weniger Stromkosten – beide Ziele fördern sich. Ziel 3 und „kurzfristig Gewinn maximieren“ stehen in einem <strong>Zielkonflikt</strong>: Die Zertifizierungen kosten Geld und Arbeitszeit und verringern kurzfristig den Gewinn. Langfristig können besser qualifizierte Mitarbeitende aber mehr Umsatz bringen, sodass sich der Konflikt entschärft.</p>`
    },
    {
      id: "e-kennzahlen-3",
      topic: "ziele-leitbild",
      title: "Kennzahlen berechnen und beurteilen",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Die Dithmarscher Netzwerk-Service GmbH in Meldorf richtet IT-Arbeitsplätze bei Kunden ein. Aus der Buchhaltung liegen folgende Werte für 2026 vor:</p>
<table><thead><tr><th>Größe</th><th>Wert</th></tr></thead><tbody>
<tr><td>Arbeitsstunden der Techniker 2025 / 2026</td><td>8.000 h / 8.000 h</td></tr>
<tr><td>eingerichtete Arbeitsplätze 2025 / 2026</td><td>1.600 / 1.840</td></tr>
<tr><td>Erträge (= Umsatz) 2026</td><td>2.750.000 €</td></tr>
<tr><td>Aufwendungen 2026</td><td>2.585.000 €</td></tr>
<tr><td>Eigenkapital</td><td>1.100.000 €</td></tr>
<tr><td>Fremdkapital / Zinsaufwand</td><td>400.000 € / 20.000 €</td></tr>
</tbody></table>
<p>a) Berechne die Arbeitsproduktivität für 2025 und 2026 sowie die Veränderung in Prozent.</p>
<p>b) Berechne Gewinn und Wirtschaftlichkeit für 2026 (zwei Nachkommastellen).</p>
<p>c) Berechne Eigenkapital-, Umsatz- und Gesamtkapitalrentabilität.</p>
<p>d) Ein Gesellschafter meint, man solle das Eigenkapital lieber als Festgeld zu 3 % anlegen. Beurteile diesen Vorschlag anhand deiner Ergebnisse.</p>
<p>e) Formuliere für das kommende Jahr ein SMARTes Ziel zur Produktivität.</p>`,
      hints: ["Produktivität rechnet mit Mengen, Wirtschaftlichkeit mit Euro-Werten.", "Gesamtkapitalrentabilität: Zinsen zum Gewinn addieren."],
      solution: `<p><strong>a)</strong> 2025: 1.600 ÷ 8.000 h = 0,2 Arbeitsplätze je Stunde. 2026: 1.840 ÷ 8.000 h = 0,23 Arbeitsplätze je Stunde. Veränderung: (0,23 − 0,2) ÷ 0,2 × 100 % = <strong>+15 %</strong>.</p>
<p><strong>b)</strong> Gewinn = 2.750.000 € − 2.585.000 € = <strong>165.000 €</strong>. Wirtschaftlichkeit = 2.750.000 ÷ 2.585.000 ≈ <strong>1,06</strong> → größer als 1, das Unternehmen arbeitet wirtschaftlich.</p>
<p><strong>c)</strong> Eigenkapitalrentabilität = 165.000 ÷ 1.100.000 × 100 % = <strong>15 %</strong>.<br>Umsatzrentabilität = 165.000 ÷ 2.750.000 × 100 % = <strong>6 %</strong>.<br>Gesamtkapital = 1.100.000 + 400.000 = 1.500.000 €; Gesamtkapitalrentabilität = (165.000 + 20.000) ÷ 1.500.000 × 100 % ≈ <strong>12,33 %</strong>.</p>
<p><strong>d)</strong> Das Eigenkapital verzinst sich im Unternehmen mit 15 % und damit deutlich besser als mit 3 % beim Festgeld. Rein rechnerisch lohnt sich der Vorschlag nicht. Allerdings trägt das Unternehmen ein höheres Risiko als ein Festgeld; die Differenz von 12 Prozentpunkten gleicht dieses Risiko aber deutlich aus. Außerdem wird das Kapital im Betrieb gebraucht, z. B. für Werkzeuge, Fahrzeuge und die Vorfinanzierung von Hardware für Kundenaufträge.</p>
<p><strong>e)</strong> Beispiel: „Bis zum 31.12.2027 steigern wir die Produktivität bei der Arbeitsplatzeinrichtung von 0,23 auf 0,25 Arbeitsplätze je Technikerstunde, indem wir die Vorkonfiguration per automatisiertem Imaging einführen.“ – spezifisch (Arbeitsplatzeinrichtung), messbar (0,25 je Stunde), akzeptiert/attraktiv (mit Maßnahme), realistisch (+ ca. 9 %), terminiert (31.12.2027).</p>`
    },
    {
      id: "e-index-2",
      topic: "ziele-leitbild",
      title: "Kennzahlen im Zeitvergleich mit Indexzahlen",
      level: 2,
      exam: ["AP2"],
      task: `<p>Die Husumer Netzwerk-Service GmbH legt folgende Zahlen vor:</p>
<table><thead><tr><th>Jahr</th><th>2024</th><th>2025</th><th>2026</th></tr></thead><tbody>
<tr><td>Umsatz</td><td>1.500.000 €</td><td>1.650.000 €</td><td>1.800.000 €</td></tr>
<tr><td>Kosten</td><td>1.380.000 €</td><td>1.485.000 €</td><td>1.620.000 €</td></tr>
<tr><td>Beschäftigte</td><td>15</td><td>15</td><td>16</td></tr>
</tbody></table>
<p>a) Berechne für jedes Jahr den Gewinn, die Wirtschaftlichkeit (drei Nachkommastellen) und die Umsatzrentabilität.</p>
<p>b) Berechne den Umsatz je Beschäftigtem sowie die Indexzahlen für den Umsatz und für den Umsatz je Beschäftigtem (Basisjahr 2024 = 100).</p>
<p>c) Die Geschäftsführerin sagt: „Der Umsatzindex ist von 2025 auf 2026 um 10 gestiegen, also ist der Umsatz um 10 % gewachsen.“ Nimm Stellung.</p>
<p>d) Beurteile die Entwicklung von 2025 auf 2026 anhand deiner Ergebnisse.</p>`,
      hints: ["Wirtschaftlichkeit = Umsatz ÷ Kosten", "Indexzahl = Wert ÷ Wert des Basisjahres × 100"],
      solution: `<p><strong>a)</strong><br>2024: Gewinn = 1.500.000 − 1.380.000 = <strong>120.000 €</strong>; Wirtschaftlichkeit = 1.500.000 ÷ 1.380.000 ≈ <strong>1,087</strong>; Umsatzrentabilität = 120.000 ÷ 1.500.000 × 100 % = <strong>8 %</strong>.<br>
2025: Gewinn = 1.650.000 − 1.485.000 = <strong>165.000 €</strong>; Wirtschaftlichkeit = 1.650.000 ÷ 1.485.000 ≈ <strong>1,111</strong>; Umsatzrentabilität = 165.000 ÷ 1.650.000 × 100 % = <strong>10 %</strong>.<br>
2026: Gewinn = 1.800.000 − 1.620.000 = <strong>180.000 €</strong>; Wirtschaftlichkeit = 1.800.000 ÷ 1.620.000 ≈ <strong>1,111</strong>; Umsatzrentabilität = 180.000 ÷ 1.800.000 × 100 % = <strong>10 %</strong>.</p>
<p><strong>b)</strong> Umsatz je Beschäftigtem: 2024: 1.500.000 ÷ 15 = <strong>100.000 €</strong>; 2025: 1.650.000 ÷ 15 = <strong>110.000 €</strong>; 2026: 1.800.000 ÷ 16 = <strong>112.500 €</strong>.<br>
Umsatzindex: 2024 = 100; 2025: 1.650.000 ÷ 1.500.000 × 100 = <strong>110</strong>; 2026: 1.800.000 ÷ 1.500.000 × 100 = <strong>120</strong>.<br>
Index Umsatz je Beschäftigtem: 2024 = 100; 2025: 110.000 ÷ 100.000 × 100 = <strong>110</strong>; 2026: 112.500 ÷ 100.000 × 100 = <strong>112,5</strong>.</p>
<p><strong>c)</strong> Die Aussage ist falsch. Der Index ist um 10 <strong>Prozentpunkte</strong> gestiegen. Die prozentuale Steigerung beträgt (120 − 110) ÷ 110 × 100 % ≈ <strong>9,09 %</strong> – das zeigt auch die direkte Rechnung: (1.800.000 − 1.650.000) ÷ 1.650.000 × 100 % ≈ 9,09 %.</p>
<p><strong>d)</strong> Umsatz und Kosten sind von 2025 auf 2026 im gleichen Verhältnis gewachsen (jeweils um rund 9,09 %). Deshalb bleiben Wirtschaftlichkeit (≈ 1,111) und Umsatzrentabilität (10 %) gleich, der Gewinn steigt aber absolut um 15.000 €. Der Umsatz je Beschäftigtem steigt nur um 112.500 ÷ 110.000 ≈ 1,0227, also rund 2,27 %, weil eine zusätzliche Person eingestellt wurde. Das ist nicht automatisch schlecht: Die neue Fachkraft kann z. B. erst eingearbeitet werden und künftig mehr Umsatz bringen.</p>`
    },
    {
      id: "e-markt-2",
      topic: "markt-wettbewerb",
      title: "Marktformen, Preisbildung und Zusammenschlüsse",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH analysiert ihre Märkte.</p>
<p>a) Bestimme jeweils die Marktform: (1) In Dithmarschen bieten rund 40 kleine IT-Dienstleister Arbeitsplatzbetreuung für viele Handwerksbetriebe an. (2) Für Public-Cloud-Rechenleistung gibt es weltweit nur wenige große Anbieter, aber Millionen Kunden. (3) Ein einziger Hersteller besitzt das Patent auf ein spezielles Verschlüsselungsmodul, das viele Behörden kaufen.</p>
<p>b) 2021/22 waren Grafikkarten kaum lieferbar, die Preise stiegen stark. Um welche Marktsituation handelte es sich? Begründe.</p>
<p>c) Für einen standardisierten Wartungsvertrag (Preis pro Monat) gilt:</p>
<table><thead><tr><th>Preis</th><th>60 €</th><th>80 €</th><th>100 €</th><th>120 €</th><th>140 €</th></tr></thead><tbody>
<tr><td>Nachfrage (Verträge)</td><td>1.000</td><td>800</td><td>600</td><td>400</td><td>200</td></tr>
<tr><td>Angebot (Verträge)</td><td>200</td><td>400</td><td>600</td><td>800</td><td>1.000</td></tr>
</tbody></table>
<p>Ermittle Gleichgewichtspreis, Gleichgewichtsmenge und Monatsumsatz im Gleichgewicht. Welche Situation entsteht bei 80 €?</p>
<p>d) Die Nordlicht IT GmbH übernimmt 100 % der Anteile eines Husumer Systemhauses, das als GmbH weiterbesteht. Um welche Form und welche Richtung des Zusammenschlusses handelt es sich?</p>`,
      solution: `<p><strong>a)</strong> (1) viele Anbieter, viele Nachfrager → <strong>Polypol</strong>. (2) wenige Anbieter, viele Nachfrager → <strong>Angebotsoligopol</strong>. (3) ein Anbieter, viele Nachfrager → <strong>Angebotsmonopol</strong>.</p>
<p><strong>b)</strong> Es lag ein <strong>Verkäufermarkt</strong> vor: Die Nachfrage war größer als das Angebot. Die Verkäufer hatten die stärkere Marktposition, konnten höhere Preise durchsetzen, und die Käufer mussten lange Lieferzeiten akzeptieren.</p>
<p><strong>c)</strong> Bei <strong>100 €</strong> stimmen Angebot und Nachfrage mit je <strong>600 Verträgen</strong> überein. Umsatz = 100 € × 600 = <strong>60.000 € pro Monat</strong>. Bei 80 € werden 800 Verträge nachgefragt, aber nur 400 angeboten → <strong>Nachfrageüberhang</strong> von 400 Verträgen; der Preis würde steigen.</p>
<p><strong>d)</strong> Das Husumer Systemhaus bleibt rechtlich selbstständig, steht aber unter der einheitlichen Leitung der Nordlicht IT GmbH → <strong>Konzern</strong> (Mutter- und Tochtergesellschaft). Beide Unternehmen sind auf derselben Wirtschaftsstufe tätig → <strong>horizontaler</strong> Zusammenschluss.</p>`
    },
    {
      id: "e-rechtsform-3",
      topic: "rechtsformen",
      title: "Gründungsberatung: Welche Rechtsform passt?",
      level: 3,
      exam: ["AP2"],
      task: `<p>Lea, Mehmet und Tim wollen in Meldorf das IT-Dienstleistungsunternehmen „Westküsten Cloud Services“ gründen. Sie haben unterschiedlich viel Geld: Lea kann 15.000 €, Mehmet 6.000 € und Tim 4.000 € beisteuern, verfügen aber sofort nur jeweils über ein Viertel dieser Beträge. Allen ist wichtig, nicht mit dem Privatvermögen zu haften. Tim möchte außerdem, dass jeder allein Aufträge annehmen darf.</p>
<p>a) Erläutere, warum eine OHG für die drei ungeeignet ist.</p>
<p>b) Die drei erwägen eine GmbH mit 25.000 € Stammkapital nach ihren Anteilen. Prüfe rechnerisch, ob die sofort verfügbaren Mittel für die Anmeldung zum Handelsregister ausreichen.</p>
<p>c) Stelle die UG (haftungsbeschränkt) als Alternative dar. Wie hoch ist die Pflichtrücklage, wenn im ersten Jahr ein Jahresüberschuss von 40.000 € erzielt wird (kein Verlustvortrag)?</p>
<p>d) Gib eine begründete Empfehlung und nenne die Handelsregister-Abteilung sowie den korrekten Firmenzusatz.</p>
<p>e) Wie kann Tims Wunsch in einer GmbH umgesetzt werden?</p>`,
      hints: ["GmbHG: Jede Stammeinlage mindestens zu einem Viertel, insgesamt mindestens die Hälfte des Mindeststammkapitals.", "UG: Stammkapital voll und in bar, 25 % des Jahresüberschusses in die Rücklage."],
      solution: `<p><strong>a)</strong> In der OHG haften alle Gesellschafter <strong>unbeschränkt</strong> (auch mit dem Privatvermögen), <strong>unmittelbar</strong> und <strong>gesamtschuldnerisch</strong>. Ein Gläubiger könnte also z. B. Tim für alle Schulden des Unternehmens in Anspruch nehmen. Das widerspricht dem Wunsch der drei nach Haftungsbeschränkung.</p>
<p><strong>b)</strong> Verfügbar sind je ein Viertel: 15.000 ÷ 4 = 3.750 €, 6.000 ÷ 4 = 1.500 €, 4.000 ÷ 4 = 1.000 € → zusammen <strong>6.250 €</strong>. Das Viertel je Einlage ist zwar erfüllt, aber insgesamt müssen bei der Anmeldung mindestens <strong>12.500 €</strong> (die Hälfte von 25.000 €) eingezahlt sein. 6.250 € &lt; 12.500 € → <strong>reicht nicht</strong>.</p>
<p><strong>c)</strong> Die UG (haftungsbeschränkt) ist eine GmbH-Variante mit einem Stammkapital ab 1 €, das aber <strong>vollständig und in bar</strong> eingezahlt werden muss. Die drei könnten z. B. eine UG mit 6.250 € Stammkapital gründen. Die Haftung ist auf das Gesellschaftsvermögen beschränkt. Pflichtrücklage: 25 % × 40.000 € = <strong>10.000 €</strong>; diese Rücklage ist so lange jährlich zu bilden, bis das Stammkapital durch eine Kapitalerhöhung (z. B. aus der Rücklage) auf mindestens 25.000 € erhöht worden ist. Nachteil: geringere Kreditwürdigkeit und der Zusatz „haftungsbeschränkt“ wirkt auf Kunden weniger solide.</p>
<p><strong>d)</strong> Empfehlung: Gründung als <strong>UG (haftungsbeschränkt)</strong>, weil die Haftung beschränkt ist und das verfügbare Kapital von 6.250 € ausreicht. Sobald durch Rücklagen oder Einzahlungen 25.000 € erreicht sind, kann die UG in eine GmbH umfirmiert werden. Eintragung im <strong>Handelsregister Abteilung B</strong>, Firmenzusatz: „Westküsten Cloud Services UG (haftungsbeschränkt)“. (Alternativ ist eine GmbH möglich, wenn die drei bis zur Anmeldung insgesamt 12.500 € aufbringen.)</p>
<p><strong>e)</strong> Alle drei werden zu <strong>Geschäftsführern</strong> bestellt und erhalten im Gesellschaftsvertrag <strong>Einzelvertretungsbefugnis</strong>. Dann darf jeder allein Verträge im Namen der Gesellschaft abschließen.</p>`
    },
    {
      id: "e-gewinn-2",
      topic: "rechtsformen",
      title: "Gewinnverteilung und Haftung in der KG",
      level: 2,
      exam: ["AP2"],
      task: `<p>Die Jensen Netzwerktechnik KG in Heide hat einen Komplementär (Hauke Jensen, Kapitaleinlage 200.000 €) und eine Kommanditistin (Frauke Sievers, Einlage 100.000 €, voll eingezahlt). Laut Gesellschaftsvertrag erhält jeder zunächst 4 % auf seine Einlage, der Rest wird im Verhältnis 3 : 1 (Jensen : Sievers) verteilt. Der Jahresgewinn beträgt 120.000 €.</p>
<p>a) Berechne die Gewinnanteile beider Gesellschafter.</p>
<p>b) Ein Lieferant fordert offene Rechnungen über 60.000 € direkt von Frau Sievers. Beurteile die Rechtslage.</p>
<p>c) Frau Sievers möchte bei einem geplanten Grundstückskauf mitentscheiden und die Bücher einsehen. Welche Rechte hat sie?</p>
<p>d) In welcher Abteilung des Handelsregisters ist die KG eingetragen?</p>`,
      solution: `<p><strong>a)</strong> Vorabverzinsung: Jensen 200.000 × 4 % = 8.000 €; Sievers 100.000 × 4 % = 4.000 € → zusammen 12.000 €.<br>Restgewinn: 120.000 − 12.000 = 108.000 €. Verteilung 3 : 1 → 4 Teile à 27.000 €: Jensen 3 × 27.000 = 81.000 €, Sievers 27.000 €.<br>Gewinnanteile: <strong>Jensen 89.000 €</strong>, <strong>Sievers 31.000 €</strong> (Probe: 89.000 + 31.000 = 120.000 €).</p>
<p><strong>b)</strong> Als Kommanditistin haftet Frau Sievers nur bis zur Höhe ihrer im Handelsregister eingetragenen Einlage. Da die Einlage von 100.000 € voll eingezahlt ist, haftet sie <strong>nicht mehr mit ihrem Privatvermögen</strong>. Der Lieferant muss sich an die KG bzw. an den Komplementär Hauke Jensen halten, der unbeschränkt haftet.</p>
<p><strong>c)</strong> Die Kommanditistin ist von der Geschäftsführung ausgeschlossen. Bei <strong>außergewöhnlichen Geschäften</strong> wie einem Grundstückskauf hat sie ein <strong>Widerspruchsrecht</strong>. Außerdem hat sie ein <strong>Kontrollrecht</strong>: Sie kann eine Abschrift des Jahresabschlusses verlangen und dessen Richtigkeit anhand der Bücher und Papiere prüfen.</p>
<p><strong>d)</strong> Als Personenhandelsgesellschaft in <strong>Abteilung A</strong>.</p>`
    },
    {
      id: "e-vollmacht-3",
      topic: "vollmachten",
      title: "Durfte sie das? Fälle zu Prokura und Handlungsvollmacht",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Bei der Nordlicht IT GmbH hat Anna Jensen Einzelprokura; im Innenverhältnis wurde vereinbart, dass sie Verträge nur bis 50.000 € abschließen darf. Ole Friedrichs leitet den Vertrieb mit allgemeiner Handlungsvollmacht. Beurteile die folgenden Fälle (wirksam oder nicht? Begründung!):</p>
<ol>
<li>Frau Jensen kauft ein Storage-System für 70.000 €.</li>
<li>Frau Jensen unterschreibt den Jahresabschluss (Bilanz).</li>
<li>Frau Jensen verkauft ein nicht mehr benötigtes Grundstück der GmbH.</li>
<li>Herr Friedrichs nimmt bei der Hausbank ein Darlehen über 30.000 € für Vorführgeräte auf.</li>
<li>Herr Friedrichs erteilt der Azubine Mia den Auftrag, eine bestellte Lieferung beim Großhändler abzuholen und den Empfang zu quittieren.</li>
<li>Die Prokura eines weiteren Mitarbeiters wurde am 01.09. widerrufen, die Löschung im Handelsregister ist aber noch nicht eingetragen. Am 05.09. schließt er mit einem Lieferanten, der vom Widerruf nichts weiß, einen Kaufvertrag.</li>
</ol>
<p>Nenne außerdem, wie Frau Jensen und Herr Friedrichs korrekt unterschreiben.</p>`,
      hints: ["§ 50 HGB: Beschränkungen der Prokura wirken nicht gegenüber Dritten.", "§ 15 HGB: Solange eine Tatsache nicht eingetragen und bekannt gemacht ist, darf ein gutgläubiger Dritter auf das Register vertrauen."],
      solution: `<ol>
<li><strong>Wirksam.</strong> Die Prokura umfasst alle Geschäfte, die der Betrieb eines Handelsgewerbes mit sich bringt. Die interne Grenze von 50.000 € gilt gegenüber dem Verkäufer nicht (§ 50 HGB). Frau Jensen verletzt aber ihre internen Pflichten und kann dafür haftbar gemacht oder abgemahnt werden.</li>
<li><strong>Nicht zulässig.</strong> Das Unterschreiben des Jahresabschlusses ist ein Inhabergeschäft; das darf nur die Geschäftsführung.</li>
<li><strong>Nicht wirksam</strong>, sofern ihr keine besondere Befugnis (Grundstücksbefugnis) erteilt wurde. Für die Veräußerung und Belastung von Grundstücken braucht ein Prokurist eine ausdrückliche Zusatzbefugnis.</li>
<li><strong>Nicht wirksam.</strong> Mit allgemeiner Handlungsvollmacht darf man ohne besondere Befugnis keine Darlehen aufnehmen (§ 54 Abs. 2 HGB).</li>
<li><strong>Wirksam.</strong> Herr Friedrichs darf als Handlungsbevollmächtigter eine Einzelvollmacht erteilen. Mia handelt für dieses eine Geschäft im Auftrag.</li>
<li><strong>Wirksam.</strong> Der Widerruf der Prokura ist eine eintragungspflichtige Tatsache. Solange er nicht eingetragen und bekannt gemacht ist, darf sich der gutgläubige Lieferant auf den Registerinhalt verlassen (§ 15 HGB). Die GmbH ist an den Vertrag gebunden.</li>
</ol>
<p><strong>Unterschriften:</strong> Frau Jensen: „Nordlicht IT GmbH, ppa. Anna Jensen“. Herr Friedrichs: „Nordlicht IT GmbH, i. V. Ole Friedrichs“.</p>`
    },
    {
      id: "e-organigramm-2",
      topic: "aufbauorganisation",
      title: "Organigramm auswerten",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Das Organigramm der Heider Datenwerk GmbH:</p>
<pre class="ascii">
                Geschäftsführung ····· [Stab: IT-Sicherheit]
                        |
      +-----------------+-----------------+
  Vertrieb           Technik         Verwaltung
  (Leitung)         (Leitung)         (Leitung)
      |          +------+------+          |
    4 MA    TL Support    TL Netzwerk   3 MA
                 |             |
               5 MA          3 MA
</pre>
<p>a) Bestimme die Leitungsspanne der Geschäftsführung (ohne Stab) und der Leitung Technik.</p>
<p>b) Wie viele Instanzen und wie viele Stellen insgesamt gibt es (jede Leitung, jeder Stab und jeder Mitarbeitende = eine Stelle)?</p>
<p>c) Um welche Organisationsform handelt es sich? Begründe.</p>
<p>d) Die IT-Sicherheitsbeauftragte weist einen Mitarbeiter im Support an, sofort alle USB-Ports zu sperren. Beurteile diese Anweisung.</p>
<p>e) Nenne je einen Vor- und einen Nachteil dieser Organisationsform.</p>`,
      solution: `<p><strong>a)</strong> Geschäftsführung: 3 direkt unterstellte Linienstellen (Vertrieb, Technik, Verwaltung) → Leitungsspanne <strong>3</strong>. Leitung Technik: 2 Teamleitungen → Leitungsspanne <strong>2</strong>.</p>
<p><strong>b)</strong> Instanzen (Stellen mit Leitungsbefugnis): Geschäftsführung, 3 Abteilungsleitungen, 2 Teamleitungen = <strong>6 Instanzen</strong>. Stellen: 1 GF + 1 Stab + 3 Abteilungsleitungen + 2 Teamleitungen + 4 + 5 + 3 + 3 Mitarbeitende = <strong>22 Stellen</strong>.</p>
<p><strong>c)</strong> <strong>Stabliniensystem</strong>: Jede Stelle hat genau einen Vorgesetzten (Einliniensystem), zusätzlich ist der Geschäftsführung eine beratende Stabsstelle (IT-Sicherheit) zugeordnet.</p>
<p><strong>d)</strong> Die Anweisung ist <strong>nicht zulässig</strong>. Eine Stabsstelle hat keine Weisungsbefugnis gegenüber der Linie. Die IT-Sicherheitsbeauftragte muss ihre Empfehlung der Geschäftsführung vorlegen; diese entscheidet und gibt die Weisung über den Dienstweg (Leitung Technik → Teamleitung Support) weiter.</p>
<p><strong>e)</strong> Vorteil: Die Geschäftsführung wird durch Expertenwissen entlastet, gleichzeitig bleiben die Zuständigkeiten klar. Nachteil: Es kann zu Konflikten zwischen Stab und Linie kommen, weil der Stab Fachwissen hat, aber keine Entscheidungen treffen darf; außerdem sind die Dienstwege lang.</p>`
    },
    {
      id: "e-orgform-3",
      topic: "aufbauorganisation",
      title: "Neue Organisationsform für ein wachsendes Systemhaus",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH ist bisher funktional im Einliniensystem organisiert (Vertrieb, Technik, Verwaltung). Inzwischen bietet sie drei sehr unterschiedliche Leistungen an: Hardwarehandel, Managed Services und Cloud-Lösungen. Kunden beschweren sich, dass Angebote lange dauern, weil Anfragen zwischen den Abteilungen hin- und hergeschoben werden.</p>
<p>a) Erläutere, warum das bisherige Einliniensystem zu diesem Problem beiträgt.</p>
<p>b) Stelle eine Sparten- und eine Matrixorganisation für die Nordlicht IT GmbH gegenüber (Aufbau, je zwei Vor- und Nachteile).</p>
<p>c) Gib eine begründete Empfehlung für ein Unternehmen mit 40 Beschäftigten.</p>
<p>d) Erläutere, welche Auswirkung eine Umorganisation auf das Berechtigungskonzept in der IT hat.</p>`,
      solution: `<p><strong>a)</strong> Im Einliniensystem laufen Informationen über den Dienstweg. Eine Kundenanfrage muss vom Vertrieb über die Abteilungsleitung zur Technik und zurück. Niemand ist für die gesamte Leistung „Cloud-Lösung“ verantwortlich, jede Abteilung sieht nur ihre Funktion. Das führt zu langen Wegen, Wartezeiten und Abstimmungsproblemen.</p>
<p><strong>b)</strong> <em>Spartenorganisation:</em> Unter der Geschäftsführung entstehen die Sparten Hardwarehandel, Managed Services und Cloud, jede mit eigenem Vertrieb und eigener Technik. Vorteile: Marktnähe und schnelle Entscheidungen innerhalb der Sparte; klare Ergebnisverantwortung je Sparte. Nachteile: Doppelarbeit, weil Funktionen mehrfach vorhanden sind (höhere Personalkosten); Spartenegoismus, Wissen wird nicht geteilt.<br>
<em>Matrixorganisation:</em> Die Funktionsbereiche (Vertrieb, Technik, Verwaltung) bleiben bestehen, zusätzlich gibt es Produktmanager für die drei Leistungen. Mitarbeitende haben einen fachlichen (Funktion) und einen produktbezogenen Vorgesetzten. Vorteile: Fachwissen wird gebündelt und gleichzeitig ist jede Leistung klar verantwortet; kurze Kommunikationswege. Nachteile: Kompetenzkonflikte zwischen den beiden Weisungslinien; hoher Abstimmungsaufwand.</p>
<p><strong>c)</strong> Für 40 Beschäftigte ist eine vollständige Spartenorganisation meist zu teuer, weil nicht jede Sparte genug Personal für eigene Funktionsbereiche hat. Empfehlenswert ist eine <strong>Matrixorganisation</strong> (oder eine schlanke Variante mit Produktverantwortlichen): Die Techniker bleiben ein gemeinsamer Pool, die Produktverantwortlichen steuern Angebote und Kundenkontakte ihrer Leistung. Wichtig sind klare Regeln, wer bei Konflikten entscheidet.</p>
<p><strong>d)</strong> Das Berechtigungskonzept orientiert sich an der Organisation. Nach der Umorganisation müssen Gruppen und Organisationseinheiten im Verzeichnisdienst angepasst, Zugriffsrechte auf Dateiablagen, CRM und Ticketsystem neu zugeordnet und nicht mehr benötigte Rechte entzogen werden (Prinzip der minimalen Rechte). Auch Verteilerlisten und Ticket-Warteschlangen müssen der neuen Struktur folgen.</p>`
    },
    {
      id: "e-wertschoepfung-3",
      topic: "geschaeftsprozesse",
      title: "Wertschöpfung und Geschäftsprozesse eines Systemhauses",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Die Westküsten-IT KG in Husum legt folgende Jahreszahlen vor: Umsatzerlöse 1.850.000 €; bezogene Handelsware 820.000 €, Fremdleistungen (Subunternehmer) 95.000 €, Energie 25.000 €, Miete 60.000 €; Löhne und Gehälter 640.000 €, Zinsen 12.000 €, Steuern 48.000 €.</p>
<p>a) Berechne die Wertschöpfung.</p>
<p>b) Ermittle den Gewinn als Rest der Wertschöpfung und berechne die Anteile von Mitarbeitenden und Eigentümern an der Wertschöpfung in Prozent (zwei Nachkommastellen).</p>
<p>c) Ordne folgende Tätigkeiten den primären oder unterstützenden Aktivitäten der Wertschöpfungskette nach Porter zu: Hardware im Wareneingang prüfen, Mitarbeitende einstellen, Notebooks per Image vorinstallieren, Wartungshotline, neue Monitoring-Lösung für die eigenen Dienste entwickeln, Messestand auf einer regionalen Fachmesse.</p>
<p>d) Das Erstellen eines Angebots dauert 24 Stunden, davon 3 Stunden Bearbeitung, der Rest ist Liegezeit. Berechne den Bearbeitungsanteil an der Durchlaufzeit und nenne zwei Verbesserungsmaßnahmen.</p>`,
      solution: `<p><strong>a)</strong> Vorleistungen = 820.000 + 95.000 + 25.000 + 60.000 = 1.000.000 €. Wertschöpfung = 1.850.000 € − 1.000.000 € = <strong>850.000 €</strong>. (Löhne, Zinsen und Steuern sind keine Vorleistungen, sondern Teil der Verteilung.)</p>
<p><strong>b)</strong> Gewinn = 850.000 − 640.000 − 12.000 − 48.000 = <strong>150.000 €</strong>.<br>Anteil Mitarbeitende = 640.000 ÷ 850.000 × 100 % ≈ <strong>75,29 %</strong>.<br>Anteil Eigentümer = 150.000 ÷ 850.000 × 100 % ≈ <strong>17,65 %</strong>.</p>
<p><strong>c)</strong> Primär: Wareneingang prüfen (Eingangslogistik), Notebooks vorinstallieren (Operationen), Messestand (Marketing und Vertrieb), Wartungshotline (Kundendienst). Unterstützend: Mitarbeitende einstellen (Personalwirtschaft), Monitoring-Lösung für eigene Dienste entwickeln (Technologieentwicklung).</p>
<p><strong>d)</strong> Bearbeitungsanteil = 3 ÷ 24 × 100 % = <strong>12,5 %</strong>; 87,5 % der Zeit wartet der Vorgang. Maßnahmen: Angebotsvorlagen und Standardpakete im ERP/CRM hinterlegen; digitale Freigabe mit festen Reaktionszeiten statt Umlaufmappe; Anfragen im Ticketsystem direkt dem zuständigen Vertriebsmitarbeiter zuweisen, um Liegezeiten und Medienbrüche zu vermeiden.</p>`
    },
    {
      id: "e-pdca-2",
      topic: "geschaeftsprozesse",
      title: "Soll-Ist-Vergleich und PDCA im Service-Desk",
      level: 2,
      exam: ["AP1"],
      task: `<p>Der Service-Desk der Nordlicht IT GmbH hat das Ziel, 85 % aller Tickets innerhalb der vereinbarten Lösungszeit zu schließen. Im 3. Quartal wurden 1.200 Tickets bearbeitet, davon 942 fristgerecht.</p>
<p>a) Berechne die Ist-Quote, die Abweichung in Prozentpunkten und die relative Abweichung vom Soll (zwei Nachkommastellen).</p>
<p>b) Beschreibe, wie das Team mit dem PDCA-Zyklus vorgehen kann. Nenne zu jeder Phase eine konkrete Tätigkeit.</p>
<p>c) Im 4. Quartal wurden 989 von 1.150 Tickets fristgerecht gelöst. Wurde das Ziel erreicht? Was geschieht jetzt im PDCA-Zyklus?</p>`,
      solution: `<p><strong>a)</strong> Ist-Quote = 942 ÷ 1.200 × 100 % = <strong>78,5 %</strong>. Abweichung = 78,5 % − 85 % = <strong>−6,5 Prozentpunkte</strong>. Relative Abweichung = (78,5 − 85) ÷ 85 × 100 % ≈ <strong>−7,65 %</strong> (das Soll wurde um 7,65 % verfehlt).</p>
<p><strong>b)</strong> <em>Plan:</em> Ursachen analysieren (z. B. welche Ticketkategorien zu spät gelöst werden) und eine Maßnahme planen, etwa eine Wissensdatenbank für häufige Druckerprobleme. <em>Do:</em> Die Maßnahme in einem Team testweise einführen. <em>Check:</em> Die Quote nach vier Wochen messen und mit dem Ziel vergleichen. <em>Act:</em> Bei Erfolg die Wissensdatenbank für alle verbindlich einführen, sonst die Ursache neu analysieren und einen neuen Zyklus starten.</p>
<p><strong>c)</strong> 989 ÷ 1.150 × 100 % = <strong>86 %</strong> ≥ 85 % → Ziel erreicht. In der <em>Act</em>-Phase wird die Maßnahme zum Standard gemacht (dokumentiert, geschult). Danach beginnt ein neuer Zyklus – z. B. mit einem höheren Ziel oder einer anderen Schwachstelle (kontinuierlicher Verbesserungsprozess).</p>`
    },
    {
      id: "e-ausbildung-3",
      topic: "duales-system",
      title: "Fall Jonas: Probezeit, Kündigung, Urlaub und Ende der Ausbildung",
      level: 3,
      exam: ["AP2"],
      task: `<p>Jonas Petersen (geboren am 12.11.2009) beginnt am 01.08.2026 seine Ausbildung zum Fachinformatiker Systemintegration bei der Nordlicht IT GmbH. Im Vertrag ist die längste zulässige Probezeit vereinbart. Die Ausbildung dauert drei Jahre. Der Betrieb hat einen Betriebsrat.</p>
<p>a) Wann endet die Probezeit?</p>
<p>b) Am 20.10.2026 möchte der Betrieb Jonas kündigen, weil er häufig zu spät kommt. Welche Regeln gelten? Worauf muss der Betrieb achten, weil Jonas minderjährig ist und es einen Betriebsrat gibt?</p>
<p>c) Angenommen, Jonas bleibt. Im Februar 2027 möchte er in eine Ausbildung zum Elektroniker wechseln. Wie kann er kündigen?</p>
<p>d) Wie viele Werktage Urlaub stehen Jonas im Kalenderjahr 2027 mindestens zu, und wie viele im Jahr 2028?</p>
<p>e) Das Ausbildungsverhältnis ist bis 31.07.2029 befristet. Am 19.06.2029 teilt ihm der Prüfungsausschuss nach dem Fachgespräch mit, dass er bestanden hat. Wann endet die Ausbildung? Was gilt, wenn Jonas am 20.06.2029 ohne weitere Absprache wie gewohnt weiterarbeitet?</p>`,
      hints: ["§ 20 BBiG: Probezeit 1 bis 4 Monate.", "§ 19 JArbSchG: Urlaub richtet sich nach dem Alter zu Beginn des Kalenderjahres.", "§ 21 und § 24 BBiG"],
      solution: `<p><strong>a)</strong> Höchstens 4 Monate (§ 20 BBiG): vom 01.08.2026 bis <strong>30.11.2026</strong>.</p>
<p><strong>b)</strong> Die Kündigung fällt in die Probezeit. Beide Seiten können dann <strong>jederzeit ohne Einhaltung einer Frist</strong> und <strong>ohne Angabe von Gründen</strong> kündigen; die Kündigung muss aber <strong>schriftlich</strong> erfolgen (§ 22 BBiG). Weil Jonas minderjährig ist, wird die Kündigung erst wirksam, wenn sie seinen <strong>gesetzlichen Vertretern</strong> (Eltern) zugeht. Außerdem muss der <strong>Betriebsrat</strong> vor jeder Kündigung angehört werden, sonst ist sie unwirksam; bei Azubis wird üblicherweise auch die JAV beteiligt.</p>
<p><strong>c)</strong> Nach der Probezeit kann ein Azubi mit einer <strong>Frist von vier Wochen</strong> kündigen, wenn er die Berufsausbildung aufgeben oder sich für eine andere Berufstätigkeit ausbilden lassen will (§ 22 Abs. 2 Nr. 2 BBiG). Die Kündigung muss <strong>schriftlich</strong> und <strong>unter Angabe des Grundes</strong> erfolgen. Da Jonas noch minderjährig ist, müssen seine Eltern zustimmen bzw. mitunterschreiben.</p>
<p><strong>d)</strong> Maßgeblich ist das Alter zu Beginn des Kalenderjahres. Am 01.01.2027 ist Jonas 17 Jahre alt, also „noch nicht 18“ → mindestens <strong>25 Werktage</strong> (JArbSchG). Am 01.01.2028 ist er 18 → das JArbSchG gilt nicht mehr, es gilt das Bundesurlaubsgesetz mit mindestens <strong>24 Werktagen</strong> (sofern Vertrag oder Tarif nicht mehr vorsehen).</p>
<p><strong>e)</strong> Besteht der Azubi vor Ablauf der Ausbildungszeit die Abschlussprüfung, endet das Ausbildungsverhältnis mit der <strong>Bekanntgabe des Ergebnisses durch den Prüfungsausschuss</strong> – hier am <strong>19.06.2029</strong> (§ 21 Abs. 2 BBiG). Arbeitet Jonas danach weiter, ohne dass etwas anderes vereinbart wurde, entsteht ein <strong>Arbeitsverhältnis auf unbestimmte Zeit</strong> (§ 24 BBiG) – mit Anspruch auf reguläres Gehalt.</p>`
    },
    {
      id: "e-pruefung-2",
      topic: "pruefung-weiterbildung",
      title: "Bestanden oder nicht? Prüfungsergebnisse auswerten",
      level: 2,
      exam: ["AP2"],
      task: `<p>Zwei Prüflinge der Fachrichtung Systemintegration haben folgende Punkte erreicht:</p>
<table><thead><tr><th>Bereich</th><th>Lukas</th><th>Emma</th></tr></thead><tbody>
<tr><td>AP1</td><td>55</td><td>35</td></tr>
<tr><td>Projekt (Doku + Präsentation/Fachgespräch)</td><td>62</td><td>58</td></tr>
<tr><td>Konzeption und Administration (KA)</td><td>48</td><td>61</td></tr>
<tr><td>Analyse und Entwicklung von Netzwerken (NW)</td><td>44</td><td>57</td></tr>
<tr><td>WiSo</td><td>71</td><td>50</td></tr>
</tbody></table>
<p>a) Berechne für beide das Gesamtergebnis und das Ergebnis von Teil 2.</p>
<p>b) Prüfe für beide alle vier Bestehensregeln und entscheide.</p>
<p>c) Wer nicht bestanden hat: In welchem Bereich lohnt sich eine mündliche Ergänzungsprüfung, und wie viele Punkte sind dort mindestens nötig?</p>`,
      hints: ["Gesamt = 0,2 × AP1 + 0,5 × Projekt + 0,1 × KA + 0,1 × NW + 0,1 × WiSo", "Ergänzungsprüfung: (2 × alt + neu) ÷ 3"],
      solution: `<p><strong>a)</strong> Lukas: Gesamt = 0,2 × 55 + 0,5 × 62 + 0,1 × 48 + 0,1 × 44 + 0,1 × 71 = 11 + 31 + 4,8 + 4,4 + 7,1 = <strong>58,3</strong>. Teil 2 = (31 + 4,8 + 4,4 + 7,1) ÷ 0,8 = 47,3 ÷ 0,8 ≈ <strong>59,13</strong>.<br>
Emma: Gesamt = 7 + 29 + 6,1 + 5,7 + 5 = <strong>52,8</strong>. Teil 2 = (29 + 6,1 + 5,7 + 5) ÷ 0,8 = 45,8 ÷ 0,8 = <strong>57,25</strong>.</p>
<p><strong>b)</strong> Lukas: (1) Gesamt 58,3 ≥ 50 ✔; (2) Teil 2 ≥ 50 ✔; (3) nur Projekt und WiSo ≥ 50 – das sind 2 statt mindestens 3 Bereiche ✘; (4) kein Bereich unter 30 ✔ → <strong>nicht bestanden</strong>.<br>
Emma: (1) 52,8 ✔; (2) 57,25 ✔; (3) alle vier Bereiche ≥ 50 ✔; (4) ✔ → <strong>bestanden</strong> (ausreichend) – trotz schwacher AP1, weil Teil 1 keine Sperrwirkung hat.</p>
<p><strong>c)</strong> Lukas kann eine Ergänzungsprüfung in KA oder NW beantragen; ein Bereich muss auf mindestens 50 Punkte steigen. KA: (2 × 48 + x) ÷ 3 ≥ 50 → x ≥ 150 − 96 = <strong>54 Punkte</strong>. NW: (2 × 44 + x) ÷ 3 ≥ 50 → x ≥ 62 Punkte. Sinnvoller ist <strong>KA</strong>, weil dort weniger Punkte nötig sind. Mit 54 Punkten in der Ergänzungsprüfung hätte er KA = 50, Gesamt = 58,5 und Teil 2 ≈ 59,38 → bestanden.</p>`
    },
    {
      id: "e-kommunikation-2",
      topic: "rolle-kommunikation",
      title: "Vier-Seiten-Modell, Rollenkonflikt und E-Mail",
      level: 2,
      exam: ["AP1"],
      task: `<p>Azubi Finn arbeitet im Service-Desk der Nordlicht IT GmbH. Seine Ausbilderin sagt am Freitagnachmittag im Vorbeigehen: „Das Ticket von der Steuerkanzlei ist ja immer noch offen.“</p>
<p>a) Analysiere die Aussage mit dem Vier-Seiten-Modell.</p>
<p>b) Finn antwortet gereizt: „Ich kann ja nicht alles gleichzeitig machen!“ Auf welchem Ohr hat er vermutlich gehört? Formuliere eine bessere Reaktion.</p>
<p>c) Am selben Tag soll Finn für eine Berufsschulklausur am Montag lernen und gleichzeitig beim Kunden einen Serverumzug bis in den Abend begleiten. Um welche Art von Rollenkonflikt handelt es sich, und wie kann er ihn lösen?</p>
<p>d) Finn muss der Kanzlei per E-Mail mitteilen, dass das Problem erst am Montag gelöst wird. Nenne fünf Regeln für eine professionelle geschäftliche E-Mail.</p>`,
      solution: `<p><strong>a)</strong> <em>Sachinhalt:</em> Das Ticket der Steuerkanzlei ist noch nicht geschlossen. <em>Selbstoffenbarung:</em> Ich mache mir Sorgen um die Kundenzufriedenheit / ich behalte den Überblick. <em>Beziehung:</em> Ich erwarte von dir, dass du Tickets im Blick hast (evtl. auch: ich traue dir das zu). <em>Appell:</em> Kümmere dich bitte noch heute um das Ticket oder gib mir einen Stand.</p>
<p><strong>b)</strong> Finn hat die Aussage vermutlich auf dem <strong>Beziehungsohr</strong> als Vorwurf gehört. Besser: „Stimmt, das ist noch offen. Ich warte auf die Rückmeldung des Druckerherstellers. Soll ich es vorziehen, oder reicht es, wenn ich die Kanzlei heute über den Stand informiere?“ – sachlich, mit Ich-Botschaft und klärender Rückfrage.</p>
<p><strong>c)</strong> Es ist ein <strong>Interrollenkonflikt</strong>: Die Erwartungen an Finn als Berufsschüler und als Mitarbeiter im Kundeneinsatz kollidieren. Lösung: den Konflikt frühzeitig bei der Ausbilderin ansprechen, Prioritäten klären (der Betrieb muss die Teilnahme am Unterricht ermöglichen und soll den Lernerfolg fördern), z. B. nur bis zu einer festen Uhrzeit beim Serverumzug mitarbeiten oder einen Kollegen einplanen.</p>
<p><strong>d)</strong> Beispiele: 1. aussagekräftiger Betreff mit Ticketnummer; 2. korrekte, höfliche Anrede; 3. kurz und sachlich: Stand, Grund, nächster Schritt und Termin; 4. verständliche Sprache ohne Fachjargon; 5. freundlicher Gruß und vollständige Signatur mit Kontaktdaten; außerdem: vor dem Senden Empfänger, Rechtschreibung und Anhänge prüfen, keine vertraulichen Daten unverschlüsselt versenden.</p>`
    },
    {
      id: "e-selbstorg-1",
      topic: "selbstorganisation",
      title: "Eisenhower-Matrix und ALPEN-Planung",
      level: 1,
      exam: ["AP1"],
      task: `<p>Azubine Mia hat am Dienstag einen Arbeitstag von 7,5 Stunden. Auf ihrer Liste stehen:</p>
<ol><li>Der Drucker in der Geschäftsführung druckt nicht, eine Vertragsunterschrift steht in 30 Minuten an.</li><li>Berichtsheft der letzten Woche nachtragen (Abgabe Freitag).</li><li>Werbe-E-Mails eines Softwareherstellers lesen.</li><li>Kollegin bittet, Toner aus dem Lager zu holen.</li><li>Test der Datensicherung für nächste Woche vorbereiten.</li></ol>
<p>a) Ordne die Aufgaben den Quadranten der Eisenhower-Matrix zu und nenne die jeweilige Handlungsempfehlung.</p>
<p>b) Mia schätzt ihre geplanten Aufgaben auf 2 h, 1,5 h, 1 h und 0,75 h. Prüfe mit der ALPEN-Regel (60 : 40), ob der Plan realistisch ist.</p>`,
      solution: `<p><strong>a)</strong> 1 → <strong>A</strong> (wichtig und dringend): sofort selbst erledigen. 2 → <strong>B</strong> (wichtig, noch nicht dringend): fest terminieren, z. B. Mittwoch 30 Minuten. 5 → <strong>B</strong>: einplanen und selbst erledigen. 4 → <strong>C</strong> (dringend für die Kollegin, für Mia nicht wichtig): bündeln oder delegieren, z. B. beim nächsten Lagergang mitnehmen. 3 → <strong>D</strong> (weder wichtig noch dringend): nicht bearbeiten oder löschen.</p>
<p><strong>b)</strong> Verplanbar sind 60 % von 7,5 h = <strong>4,5 h</strong>. Geplant sind 2 + 1,5 + 1 + 0,75 = <strong>5,25 h</strong>. Der Plan liegt 0,75 h über dem Richtwert und ist damit zu voll; unerwartete Anfragen (wie der Drucker) würden alles verschieben. Mia sollte eine B-Aufgabe auf einen anderen Tag legen oder die Prioritäten mit ihrem Ausbilder abstimmen.</p>`
    },
    {
      id: "e-green-2",
      topic: "nachhaltigkeit-csr",
      title: "Green IT: Monitortausch bewerten",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH will 25 alte Monitore (je 32 W im Betrieb) durch sparsamere Modelle (je 18 W) ersetzen. Die Monitore laufen 8 Stunden an 220 Arbeitstagen im Jahr, der Strompreis beträgt 0,32 €/kWh. Ein sparsamer Monitor kostet 30 € mehr als ein vergleichbares Standardmodell.</p>
<p>a) Berechne die jährliche Energie- und Kosteneinsparung für alle 25 Monitore.</p>
<p>b) Nach wie vielen Jahren hat sich der Mehrpreis amortisiert?</p>
<p>c) Was soll mit den alten, funktionsfähigen Monitoren geschehen? Begründe mit der Abfallhierarchie.</p>
<p>d) Die Marketingabteilung möchte nach dem Tausch mit „Wir sind ein klimaneutrales IT-Unternehmen“ werben. Beurteile diese Idee.</p>`,
      solution: `<p><strong>a)</strong> Einsparung je Monitor: 32 W − 18 W = 14 W. Betriebsstunden: 8 h × 220 = 1.760 h. Energie je Monitor: 14 W × 1.760 h = 24.640 Wh = 24,64 kWh. Für 25 Monitore: 24,64 kWh × 25 = <strong>616 kWh</strong> pro Jahr. Kosten: 616 kWh × 0,32 €/kWh = <strong>197,12 €</strong> pro Jahr.</p>
<p><strong>b)</strong> Mehrpreis: 25 × 30 € = 750 €. Amortisationszeit: 750 € ÷ 197,12 €/Jahr ≈ <strong>3,8 Jahre</strong>. Bei einer Nutzungsdauer von 5 bis 7 Jahren lohnt sich der Kauf auch wirtschaftlich (Zielharmonie zwischen Ökologie und Ökonomie).</p>
<p><strong>c)</strong> Nach der Abfallhierarchie hat die <strong>Wiederverwendung</strong> Vorrang vor dem Recycling. Die funktionsfähigen Monitore sollten verkauft, an Schulen oder Vereine gespendet oder als Zweitmonitore weiterverwendet werden. Erst defekte Geräte werden über das ElektroG-Rücknahmesystem (Wertstoffhof, Hersteller) dem Recycling zugeführt – niemals über den Restmüll.</p>
<p><strong>d)</strong> Die Aussage wäre <strong>Greenwashing</strong>: Ein Monitortausch spart nur einen kleinen Teil der Emissionen; Stromverbrauch der Server, Fahrten zu Kunden und die Herstellung der Geräte verursachen weiter CO₂. Werbeaussagen zur Klimaneutralität müssen belegbar sein, sonst drohen Abmahnungen und ein Imageschaden. Besser: konkret und messbar kommunizieren („Wir haben den Stromverbrauch unserer Bildschirme um über 40 % gesenkt.“).</p>`
    },
    {
      id: "e-praesentation-2",
      topic: "projekt-praesentation",
      title: "Unternehmenspräsentation planen und bewerten",
      level: 2,
      exam: ["AP1"],
      task: `<p>Drei Teams deiner Berufsschulklasse sollen ihre Ausbildungsbetriebe in je 10 Minuten vor den neuen Azubis des Einführungstags präsentieren.</p>
<p>a) Begründe, ob die Erstellung der Präsentation die Merkmale eines Projekts erfüllt.</p>
<p>b) Nenne drei Fragen zur Zielgruppenanalyse und schlage eine Gliederung (Einleitung, Hauptteil, Schluss) mit passenden Inhalten aus LF1 vor.</p>
<p>c) Nenne vier Regeln für die Foliengestaltung.</p>
<p>d) Die Präsentationen werden gewichtet bewertet: Inhalt 35 %, Struktur 25 %, Visualisierung 20 %, Vortrag 20 % (Punkte 1–10). Team Nord: 7, 8, 6, 9; Team Süd: 9, 6, 7, 6; Team West: 8, 7, 8, 7. Ermittle die Rangfolge.</p>`,
      solution: `<p><strong>a)</strong> Ja, es handelt sich um ein kleines Projekt: Es ist <strong>einmalig</strong> (diese Präsentation für diese Zielgruppe), hat ein klares <strong>Ziel</strong> (Betrieb in 10 Minuten verständlich vorstellen), ist <strong>zeitlich begrenzt</strong> (Termin des Einführungstags), hat <strong>begrenzte Ressourcen</strong> (Teammitglieder, Unterrichtsstunden) und erfordert <strong>Zusammenarbeit im Team</strong> mit Aufgabenverteilung.</p>
<p><strong>b)</strong> Fragen: Was wissen die neuen Azubis schon über die Betriebe und die IT-Berufe? Was interessiert sie besonders (Aufgaben, Arbeitszeiten, Übernahme)? Wie viele Personen sind es, und welche Technik steht zur Verfügung?<br>
Gliederung: <em>Einleitung</em> – Begrüßung, Vorstellung des Teams, Ziel und Agenda, Einstieg mit einem typischen Arbeitstag. <em>Hauptteil</em> – Leistungen und Kunden, Rechtsform und Größe, Organigramm und Einordnung der Azubis, Ablauf eines Kundenauftrags (Wertschöpfung), Ausbildung im Betrieb. <em>Schluss</em> – Zusammenfassung in drei Kernaussagen, Tipps für den Start, Dank und Fragen.</p>
<p><strong>c)</strong> Beispiele: wenige Stichpunkte pro Folie (höchstens 6–7 Zeilen); gut lesbare, ausreichend große Schrift mit starkem Kontrast; Bilder, Diagramme und Organigramme statt Textblöcken; einheitliches Layout (Corporate Design des Betriebs); Quellen angeben.</p>
<p><strong>d)</strong> Nord: 0,35 × 7 + 0,25 × 8 + 0,2 × 6 + 0,2 × 9 = 2,45 + 2 + 1,2 + 1,8 = <strong>7,45</strong>.<br>Süd: 0,35 × 9 + 0,25 × 6 + 0,2 × 7 + 0,2 × 6 = 3,15 + 1,5 + 1,4 + 1,2 = <strong>7,25</strong>.<br>West: 0,35 × 8 + 0,25 × 7 + 0,2 × 8 + 0,2 × 7 = 2,8 + 1,75 + 1,6 + 1,4 = <strong>7,55</strong>.<br>Rangfolge: 1. West (7,55), 2. Nord (7,45), 3. Süd (7,25). Team Süd hatte zwar den besten Inhalt, verliert aber durch schwächere Struktur und Vortrag.</p>`
    },
    {
      id: "e-medien-1",
      topic: "projekt-praesentation",
      title: "Diagramme und Quellen für die Unternehmenspräsentation",
      level: 1,
      exam: ["AP1"],
      task: `<p>Dein Team bereitet eine Präsentation über die Nordlicht IT GmbH vor (Umsatz 2026: 3.600.000 €).</p>
<p>a) Wähle jeweils eine passende Diagrammart und begründe: (1) Anteile der Leistungsbereiche am Umsatz 2026: Managed Services 45 %, Hardwarehandel 30 %, Cloud 15 %, Schulungen 10 %; (2) Entwicklung der Beschäftigtenzahl von 2020 bis 2026; (3) Anzahl gelöster Tickets der drei Support-Teams im September.</p>
<p>b) Berechne für die Daten aus (1) die Umsätze in Euro und die Winkel der Segmente im Kreisdiagramm.</p>
<p>c) Für die Folie „Markt und Wettbewerb“ habt ihr zwei Quellen gefunden: (A) einen Blogartikel eines Serverherstellers aus dem Jahr 2019 mit dem Titel „Warum jedes Unternehmen jetzt unseren Server braucht“, ohne Quellenangaben; (B) eine aktuelle Pressemitteilung des Statistischen Bundesamts zur Zahl der Beschäftigten in der IT-Branche. Beurteile beide Quellen anhand von vier Kriterien.</p>
<p>d) Ein Teammitglied möchte ein Foto aus der Bildersuche einer Suchmaschine auf die Titelfolie setzen. Worauf müsst ihr achten?</p>`,
      hints: ["Ein Kreis hat 360°: Winkel = Anteil × 360°."],
      solution: `<p><strong>a)</strong> (1) <strong>Kreisdiagramm</strong> (oder Ringdiagramm): Es zeigt Anteile an einem Ganzen (100 %), und es gibt nur vier Segmente. (2) <strong>Liniendiagramm</strong>: Es zeigt eine Entwicklung über die Zeit. (3) <strong>Säulen- oder Balkendiagramm</strong>: Es vergleicht die Werte mehrerer Teams.</p>
<p><strong>b)</strong> Umsätze: Managed Services 45 % × 3.600.000 € = <strong>1.620.000 €</strong>; Hardwarehandel 30 % × 3.600.000 € = <strong>1.080.000 €</strong>; Cloud 15 % × 3.600.000 € = <strong>540.000 €</strong>; Schulungen 10 % × 3.600.000 € = <strong>360.000 €</strong> (Probe: Summe 3.600.000 €).<br>
Winkel: 0,45 × 360° = <strong>162°</strong>; 0,30 × 360° = <strong>108°</strong>; 0,15 × 360° = <strong>54°</strong>; 0,10 × 360° = <strong>36°</strong> (Probe: 162 + 108 + 54 + 36 = 360°).</p>
<p><strong>c)</strong> <em>Quelle A</em>: Der Urheber ist ein Hersteller mit Verkaufsinteresse, der Artikel ist veraltet (2019), es gibt keine Belege, und der Titel ist werblich formuliert → für sachliche Marktdaten <strong>ungeeignet</strong>. <em>Quelle B</em>: Der Urheber ist eine amtliche Statistikbehörde ohne Verkaufsinteresse, die Daten sind aktuell, die Methodik ist dokumentiert → <strong>geeignet</strong>. Die Quelle wird auf der Folie angegeben (Herausgeber, Titel, Datum).</p>
<p><strong>d)</strong> Fotos aus der Bildersuche sind in der Regel urheberrechtlich geschützt – dass man sie findet, heißt nicht, dass man sie nutzen darf. Das Team muss prüfen, unter welcher Lizenz das Bild steht (z. B. Creative Commons mit Namensnennung), die Lizenzbedingungen einhalten und die Quelle angeben. Sind Personen erkennbar, ist auch deren Einverständnis nötig. Am sichersten sind eigene Fotos oder Bilder aus dem Corporate-Design-Fundus des Betriebs.</p>`
    },
    {
      id: "e-kalkulation-3",
      topic: "machbarkeit-kalkulation",
      title: "Vor- und Nachkalkulation für eine Tierarztpraxis",
      level: 3,
      exam: ["AP1"],
      task: `<p>Die Nordlicht IT GmbH soll in einer Tierarztpraxis in Wesselburen sechs Arbeitsplätze und ein neues WLAN einrichten. Die Praxis nennt ein Budget von <strong>3.000 € brutto</strong>. Kalkulationsgrundlagen:</p>
<ul><li>Techniker: 20 h zu 70 €/h, Azubi: 12 h zu 22 €/h</li><li>Kleinmaterial 180 €, 2 Anfahrten zu je 40 €</li><li>Gemeinkostenzuschlag 20 % auf die Personalkosten, Gewinnzuschlag 12 % auf die Selbstkosten, Umsatzsteuer 19 %</li></ul>
<p>a) Erstelle die Vorkalkulation bis zum Bruttoangebotspreis (Beträge auf Cent runden).</p>
<p>b) Prüfe die wirtschaftliche Machbarkeit im Vergleich zum Budget und schlage zwei Lösungen vor.</p>
<p>c) Der Auftrag wird zum kalkulierten Nettopreis als Festpreis angenommen. Tatsächlich braucht der Techniker 23 Stunden, das Material kostet 190 € und es sind 3 Anfahrten nötig. Führe die Nachkalkulation durch, berechne die Abweichung der Selbstkosten absolut und in Prozent sowie das Ergebnis des Auftrags.</p>
<p>d) Die Access Points kommen mit 20 % Wahrscheinlichkeit zu spät; der Schaden läge dann bei 900 €. Berechne den Risikowert und nenne eine Maßnahme zur Risikoverminderung.</p>`,
      hints: ["Reihenfolge: Personalkosten + Sachkosten + Gemeinkosten = Selbstkosten → + Gewinn = netto → + USt = brutto", "Budget ist brutto angegeben – vergleiche brutto mit brutto."],
      solution: `<p><strong>a)</strong> Personalkosten: 20 h × 70 € = 1.400 € + 12 h × 22 € = 264 € → <strong>1.664,00 €</strong><br>
Sachkosten: 180 € + 2 × 40 € = <strong>260,00 €</strong><br>
Gemeinkosten: 20 % × 1.664 € = <strong>332,80 €</strong><br>
Selbstkosten: 1.664 + 260 + 332,80 = <strong>2.256,80 €</strong><br>
Gewinnzuschlag: 12 % × 2.256,80 € = 270,82 € → Nettoangebotspreis <strong>2.527,62 €</strong><br>
Umsatzsteuer: 19 % × 2.527,62 € = 480,25 € → Bruttoangebotspreis <strong>3.007,87 €</strong></p>
<p><strong>b)</strong> Der Bruttopreis liegt 3.007,87 € − 3.000 € = <strong>7,87 € über dem Budget</strong>. Der Auftrag ist damit knapp nicht im Budget, aber grundsätzlich machbar. Lösungen: Gewinnzuschlag geringfügig senken (z. B. auf 11,7 %), Leistungsumfang leicht reduzieren (z. B. Kunde entsorgt Verpackungen selbst, eine Anfahrt entfällt) oder mit dem Kunden über eine minimale Budgeterhöhung sprechen. (Falle: Wer den Nettopreis mit dem Bruttobudget vergleicht, hält den Auftrag fälschlich für deutlich günstiger.)</p>
<p><strong>c)</strong> Personalkosten Ist: 23 × 70 € = 1.610 € + 264 € = 1.874,00 €<br>
Sachkosten Ist: 190 € + 3 × 40 € = 310,00 €<br>
Gemeinkosten Ist: 20 % × 1.874 € = 374,80 €<br>
Selbstkosten Ist: 1.874 + 310 + 374,80 = <strong>2.558,80 €</strong><br>
Abweichung: 2.558,80 − 2.256,80 = <strong>302,00 €</strong> → 302 ÷ 2.256,80 × 100 % ≈ <strong>13,38 %</strong> über Plan<br>
Ergebnis: Nettoerlös 2.527,62 € − Selbstkosten 2.558,80 € = <strong>−31,18 €</strong> → Statt des geplanten Gewinns von 270,82 € entsteht ein kleiner Verlust. Ursachen analysieren (Zeitschätzung, zusätzliche Anfahrt) und für Folgeaufträge als Lessons Learned festhalten.</p>
<p><strong>d)</strong> Risikowert = 0,2 × 900 € = <strong>180 €</strong>. Verminderung z. B. durch frühzeitige Bestellung mit verbindlichem Liefertermin, Lagerware bei einem zweiten Lieferanten oder einen Ersatz-Access-Point aus dem eigenen Bestand.</p>`
    },
  ],
  quiz: [
    { id: "q1", topic: "unternehmen-system", type: "single", exam: ["AP2"],
      q: "Was versteht man rechtlich unter der <strong>Firma</strong>?",
      options: ["Den Namen, unter dem ein Kaufmann seine Geschäfte betreibt und unterschreibt", "Das Betriebsgebäude eines Unternehmens", "Die rechtlich selbstständige Wirtschaftseinheit mit allen Standorten", "Die örtliche Produktionsstätte eines Unternehmens"],
      answer: 0,
      explain: "Nach § 17 HGB ist die Firma der Name des Kaufmanns im Handelsverkehr. Die rechtlich-wirtschaftliche Einheit heißt Unternehmen, die örtliche Leistungsstätte Betrieb – umgangssprachlich wird „Firma“ oft falsch für beides verwendet." },
    { id: "q2", topic: "unternehmen-system", type: "single", exam: ["AP2"],
      q: "Zu welchem Wirtschaftssektor gehört ein Hersteller von Rotorblättern für Windkraftanlagen?",
      options: ["Primärer Sektor", "Sekundärer Sektor", "Tertiärer Sektor"],
      answer: 1,
      explain: "Der Hersteller verarbeitet Rohstoffe und Vorprodukte industriell weiter → sekundärer Sektor. Der primäre Sektor umfasst die Urproduktion (Land-, Forstwirtschaft, Fischerei), der tertiäre Dienstleistungen." },
    { id: "q3", topic: "unternehmen-system", type: "single", exam: ["AP2"],
      q: "Welche Aussage beschreibt das <strong>Minimalprinzip</strong>?",
      options: ["Ein festgelegtes Ziel soll mit möglichst geringem Mitteleinsatz erreicht werden", "Mit gegebenen Mitteln soll ein möglichst großer Ertrag erzielt werden", "Mit möglichst geringem Mitteleinsatz soll ein möglichst großer Ertrag erzielt werden", "Die Kosten sollen in jedem Fall auf null gesenkt werden"],
      answer: 0,
      explain: "Beim Minimalprinzip steht das Ziel fest, der Mitteleinsatz wird minimiert. Mit festen Mitteln den Ertrag zu maximieren ist das Maximalprinzip. „Minimaler Einsatz bei maximalem Ertrag“ ist logisch unmöglich, weil nie beide Größen gleichzeitig optimiert werden können." },
    { id: "q4", topic: "unternehmen-system", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche der folgenden Gruppen sind <strong>externe</strong> Stakeholder eines IT-Systemhauses?",
      options: ["Hausbank", "Kunden", "Betriebsrat", "Auszubildende", "Finanzamt"],
      answer: [0, 1, 4],
      explain: "Bank, Kunden und Staat (Finanzamt) stehen außerhalb des Unternehmens. Betriebsrat und Auszubildende gehören zum Unternehmen und sind daher interne Stakeholder." },
    { id: "q5", topic: "unternehmen-system", type: "tf",
      q: "„Shareholder“ und „Stakeholder“ bezeichnen dieselbe Personengruppe.",
      answer: false,
      explain: "Shareholder sind nur die Anteilseigner. Stakeholder sind alle Anspruchsgruppen – also auch Mitarbeitende, Kunden, Lieferanten, Staat und Öffentlichkeit. Shareholder sind damit eine Teilgruppe der Stakeholder." },
    { id: "q6", topic: "ziele-leitbild", type: "single", exam: ["AP1", "AP2"],
      q: "Ein Systemhaus tauscht alte Server gegen energieeffiziente Modelle. Dadurch sinken der CO₂-Ausstoß und die Stromkosten. Welche Zielbeziehung liegt vor?",
      options: ["Zielharmonie", "Zielkonflikt", "Zielneutralität", "Zielhierarchie"],
      answer: 0,
      explain: "Das ökologische Ziel (weniger CO₂) fördert das ökonomische Ziel (geringere Kosten) → komplementäre Beziehung = Zielharmonie. Zielhierarchie beschreibt die Rangordnung von Ober- und Unterzielen, keine Beziehung zwischen zwei Zielen." },
    { id: "q7", topic: "ziele-leitbild", type: "single", exam: ["AP1"],
      q: "Wofür steht das „M“ in der SMART-Regel?",
      options: ["messbar", "motivierend", "maximal", "mittelfristig"],
      answer: 0,
      explain: "SMART = spezifisch, messbar, attraktiv/akzeptiert, realistisch, terminiert. Messbar heißt: Es gibt eine Kennzahl, mit der die Zielerreichung geprüft werden kann (z. B. „80 % der Tickets in 8 Stunden“)." },
    { id: "q8", topic: "ziele-leitbild", type: "input", exam: ["AP2"],
      q: "Ein Unternehmen erzielt 90.000 € Gewinn bei 600.000 € Eigenkapital. Wie hoch ist die Eigenkapitalrentabilität in Prozent?",
      answer: ["15", "15%", "15,0", "15,0%"],
      explain: "Eigenkapitalrentabilität = Gewinn ÷ Eigenkapital × 100 % = 90.000 ÷ 600.000 × 100 % = 15 %." },
    { id: "q9", topic: "ziele-leitbild", type: "single", exam: ["AP2"],
      q: "Wie wird die <strong>Wirtschaftlichkeit</strong> berechnet?",
      options: ["Leistungen (Erträge) ÷ Kosten (Aufwendungen)", "Ausbringungsmenge ÷ Einsatzmenge", "Gewinn ÷ Eigenkapital × 100 %", "Umsatz − Vorleistungen"],
      answer: 0,
      explain: "Wirtschaftlichkeit vergleicht Werte in Euro: Erträge ÷ Aufwendungen; über 1 ist wirtschaftlich. Ausbringung ÷ Einsatz (Mengen) ist die Produktivität, Gewinn ÷ Eigenkapital die Eigenkapitalrentabilität, Umsatz − Vorleistungen die Wertschöpfung." },
    { id: "q10", topic: "ziele-leitbild", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche der folgenden Ziele sind <strong>ökologische</strong> Unternehmensziele?",
      options: ["Stromverbrauch des Serverraums senken", "Altgeräte aufbereiten statt entsorgen", "Marktanteil in Dithmarschen steigern", "Betriebliche Altersvorsorge einführen", "Papierverbrauch durch digitale Workflows reduzieren"],
      answer: [0, 1, 4],
      explain: "Energie sparen, Wiederverwendung und weniger Papier schonen Umwelt und Ressourcen. Marktanteil ist ein ökonomisches Ziel, die Altersvorsorge ein soziales Ziel." },
    { id: "q11", topic: "ziele-leitbild", type: "tf",
      q: "Ein Unternehmensleitbild richtet sich ausschließlich an externe Kunden.",
      answer: false,
      explain: "Das Leitbild wirkt nach außen (Image, Vertrauen, Fachkräftegewinnung) und nach innen (Orientierung, Motivation, Identifikation der Mitarbeitenden)." },
    { id: "q12", topic: "markt-wettbewerb", type: "single", exam: ["AP1"],
      q: "Wenige große Cloud-Anbieter stehen Millionen von Kunden gegenüber. Welche Marktform liegt vor?",
      options: ["Angebotsoligopol", "Polypol", "Angebotsmonopol", "Nachfrageoligopol"],
      answer: 0,
      explain: "Wenige Anbieter und viele Nachfrager = Angebotsoligopol. Beim Polypol gäbe es viele Anbieter, beim Monopol nur einen; ein Nachfrageoligopol hätte wenige Nachfrager." },
    { id: "q13", topic: "markt-wettbewerb", type: "single", exam: ["AP1"],
      q: "Woran erkennt man einen <strong>Käufermarkt</strong>?",
      options: ["Das Angebot ist größer als die Nachfrage", "Die Nachfrage ist größer als das Angebot", "Angebot und Nachfrage sind immer genau gleich groß", "Es gibt nur einen einzigen Käufer"],
      answer: 0,
      explain: "Beim Käufermarkt übersteigt das Angebot die Nachfrage; die Käufer haben die stärkere Position (Preisdruck, Rabatte). Nachfrage größer als Angebot kennzeichnet den Verkäufermarkt; ein einziger Käufer wäre ein Nachfragemonopol." },
    { id: "q14", topic: "markt-wettbewerb", type: "single", exam: ["AP2"],
      q: "Was kennzeichnet einen <strong>Konzern</strong>?",
      options: ["Die Unternehmen bleiben rechtlich selbstständig, stehen aber unter einheitlicher Leitung", "Mindestens ein Unternehmen verliert seine rechtliche Selbstständigkeit", "Selbstständige Unternehmen sprechen Preise ab, um den Wettbewerb zu beschränken", "Ein Unternehmen verkauft ausschließlich über Zwischenhändler"],
      answer: 0,
      explain: "Im Konzern bleiben Mutter- und Tochtergesellschaften eigene juristische Personen, werden aber einheitlich geleitet. Der Verlust der Selbstständigkeit kennzeichnet die Fusion, die Preisabsprache das Kartell." },
    { id: "q15", topic: "markt-wettbewerb", type: "multi", exam: ["AP1"],
      q: "Welche Vertriebswege sind aus Sicht eines Hardwareherstellers <strong>indirekter</strong> Vertrieb?",
      options: ["Verkauf über einen Distributor an Systemhäuser", "Verkauf über den Fachhandel", "Eigener Onlineshop des Herstellers", "Eigener Außendienst beim Großkunden"],
      answer: [0, 1],
      explain: "Indirekt heißt: Rechtlich selbstständige Absatzmittler (Distributor, Fachhandel, Systemhaus) sind zwischengeschaltet. Eigener Onlineshop und eigener Außendienst sind direkter Vertrieb." },
    { id: "q16", topic: "markt-wettbewerb", type: "input", exam: ["AP2"],
      q: "Bei welchem Preis (in €) liegt das Marktgleichgewicht?<br><table><thead><tr><th>Preis</th><th>10 €</th><th>20 €</th><th>30 €</th><th>40 €</th></tr></thead><tbody><tr><td>Nachfrage</td><td>90</td><td>70</td><td>50</td><td>30</td></tr><tr><td>Angebot</td><td>10</td><td>30</td><td>50</td><td>70</td></tr></tbody></table>",
      answer: ["30", "30€", "30Euro"],
      explain: "Bei 30 € stimmen Nachfrage und Angebot mit je 50 Stück überein → Gleichgewichtspreis 30 €. Darunter entsteht ein Nachfrageüberhang, darüber ein Angebotsüberhang." },
    { id: "q17", topic: "markt-wettbewerb", type: "tf", exam: ["AP2"],
      q: "Bei einem Kartell verlieren die beteiligten Unternehmen ihre rechtliche Selbstständigkeit.",
      answer: false,
      explain: "Kartellmitglieder bleiben rechtlich und wirtschaftlich selbstständig; sie treffen nur (meist verbotene) Absprachen. Den Verlust der rechtlichen Selbstständigkeit gibt es bei der Fusion." },
    { id: "q18", topic: "rechtsformen", type: "single", exam: ["AP2"],
      q: "Wie hoch ist das gesetzliche Mindeststammkapital einer GmbH?",
      options: ["25.000 €", "50.000 €", "12.500 €", "1 €"],
      answer: 0,
      explain: "Das Mindeststammkapital der GmbH beträgt 25.000 €; bei der Anmeldung müssen mindestens 12.500 € eingezahlt sein. 50.000 € ist das Mindestgrundkapital der AG, 1 € das Mindeststammkapital der UG (haftungsbeschränkt)." },
    { id: "q19", topic: "rechtsformen", type: "single", exam: ["AP2"],
      q: "In welche Abteilung des Handelsregisters wird eine KG eingetragen?",
      options: ["Abteilung A", "Abteilung B", "Genossenschaftsregister", "Die KG wird nicht eingetragen"],
      answer: 0,
      explain: "Abteilung A: Einzelkaufleute und Personenhandelsgesellschaften (OHG, KG). Abteilung B: Kapitalgesellschaften (GmbH, UG, AG)." },
    { id: "q20", topic: "rechtsformen", type: "multi", exam: ["AP2"],
      q: "Welche Rechtsformen sind <strong>Kapitalgesellschaften</strong>?",
      options: ["GmbH", "AG", "UG (haftungsbeschränkt)", "OHG", "KG"],
      answer: [0, 1, 2],
      explain: "GmbH, UG und AG sind juristische Personen, die nur mit ihrem Gesellschaftsvermögen haften. OHG und KG sind Personengesellschaften mit mindestens einem unbeschränkt haftenden Gesellschafter." },
    { id: "q21", topic: "rechtsformen", type: "single", exam: ["AP2"],
      q: "Wie haftet ein <strong>Kommanditist</strong> einer KG?",
      options: ["Nur bis zur Höhe seiner (im Handelsregister eingetragenen) Einlage", "Unbeschränkt mit seinem gesamten Privatvermögen", "Überhaupt nicht, da er nicht im Handelsregister steht", "Gesamtschuldnerisch mit dem Komplementär für alle Schulden"],
      answer: 0,
      explain: "Der Kommanditist ist Teilhafter: Er haftet nur bis zur Höhe seiner Einlage; ist sie voll eingezahlt, haftet er nicht mehr persönlich. Unbeschränkt haftet der Komplementär (Vollhafter)." },
    { id: "q22", topic: "rechtsformen", type: "single", exam: ["AP2"],
      q: "Welches Organ einer AG bestellt und überwacht den Vorstand?",
      options: ["Aufsichtsrat", "Hauptversammlung", "Gesellschafterversammlung", "Betriebsrat"],
      answer: 0,
      explain: "Der Aufsichtsrat bestellt, überwacht und beruft den Vorstand ab. Die Hauptversammlung der Aktionäre wählt u. a. die Anteilseignervertreter im Aufsichtsrat und beschließt über die Gewinnverwendung. Eine Gesellschafterversammlung gibt es bei der GmbH." },
    { id: "q23", topic: "rechtsformen", type: "input", exam: ["AP2"],
      q: "Wie hoch ist das Mindestgrundkapital einer Aktiengesellschaft in Euro?",
      answer: ["50000", "50.000", "50000€", "50.000€", "50000Euro", "50.000Euro"],
      explain: "Das Grundkapital einer AG muss mindestens 50.000 € betragen (§ 7 AktG). Zum Vergleich: GmbH 25.000 €, UG ab 1 €." },
    { id: "q24", topic: "rechtsformen", type: "tf", exam: ["AP2"],
      q: "Eine UG (haftungsbeschränkt) muss ein Viertel ihres (um einen Verlustvortrag geminderten) Jahresüberschusses in eine gesetzliche Rücklage einstellen.",
      answer: true,
      explain: "§ 5a Abs. 3 GmbHG: 25 % des um einen Verlustvortrag geminderten Jahresüberschusses fließen in die gesetzliche Rücklage. Die Pflicht endet erst, wenn das Stammkapital tatsächlich auf mindestens 25.000 € erhöht worden ist (§ 5a Abs. 5 GmbHG). So wächst die „Mini-GmbH“ schrittweise zur vollwertigen GmbH." },
    { id: "q25", topic: "rechtsformen", type: "single", exam: ["AP2"],
      q: "Wie viel muss bei der Anmeldung einer GmbH mit 25.000 € Stammkapital <strong>insgesamt mindestens</strong> eingezahlt sein?",
      options: ["12.500 €", "6.250 €", "25.000 €", "1 €"],
      answer: 0,
      explain: "Jede Stammeinlage muss zu mindestens einem Viertel eingezahlt sein, insgesamt aber mindestens die Hälfte des Mindeststammkapitals, also 12.500 €. 6.250 € wäre nur das Viertel von 25.000 € und reicht nicht." },
    { id: "q26", topic: "vollmachten", type: "single", exam: ["AP1", "AP2"],
      q: "Welches Geschäft darf ein Prokurist <strong>ohne</strong> besondere Befugnis vornehmen?",
      options: ["Einen Kredit für das Unternehmen aufnehmen", "Ein Betriebsgrundstück verkaufen", "Die Bilanz unterschreiben", "Einem anderen Mitarbeiter Prokura erteilen"],
      answer: 0,
      explain: "Die Prokura deckt auch außergewöhnliche Geschäfte wie Kreditaufnahmen ab. Grundstücke veräußern oder belasten erfordert eine besondere Befugnis; Bilanz unterschreiben und Prokura erteilen sind dem Inhaber vorbehalten." },
    { id: "q27", topic: "vollmachten", type: "single", exam: ["AP1", "AP2"],
      q: "Mit welchem Zusatz unterschreibt ein Prokurist?",
      options: ["ppa.", "i. V.", "i. A.", "gez."],
      answer: 0,
      explain: "„ppa.“ (per procura) kennzeichnet die Prokura. „i. V.“ nutzen Handlungsbevollmächtigte mit allgemeiner Vollmacht, „i. A.“ steht für Handeln im Auftrag, z. B. bei Einzelvollmacht." },
    { id: "q28", topic: "vollmachten", type: "multi", exam: ["AP1", "AP2"],
      q: "Wofür braucht ein Mitarbeiter mit <strong>allgemeiner Handlungsvollmacht</strong> eine besondere Befugnis?",
      options: ["Darlehen aufnehmen", "Prozesse führen", "Grundstücke veräußern", "Büromaterial bestellen", "Kundenangebote unterschreiben"],
      answer: [0, 1, 2],
      explain: "§ 54 Abs. 2 HGB: Grundstücke veräußern/belasten, Wechselverbindlichkeiten eingehen, Darlehen aufnehmen und Prozesse führen sind nur mit besonderer Befugnis erlaubt. Büromaterial und Angebote gehören zu den gewöhnlichen Geschäften." },
    { id: "q29", topic: "vollmachten", type: "tf", exam: ["AP1", "AP2"],
      q: "Eine intern vereinbarte Beschränkung der Prokura auf Geschäfte bis 50.000 € ist auch gegenüber Dritten wirksam.",
      answer: false,
      explain: "§ 50 HGB: Beschränkungen des Umfangs der Prokura sind Dritten gegenüber unwirksam. Der Vertrag gilt; der Prokurist verletzt aber seine Pflichten im Innenverhältnis und kann haftbar gemacht werden." },
    { id: "q30", topic: "vollmachten", type: "single", exam: ["AP1", "AP2"],
      q: "Eine Azubine soll einmalig eine bestellte Lieferung beim Großhändler abholen und quittieren. Welche Vollmacht erhält sie?",
      options: ["Einzelvollmacht", "Artvollmacht", "Allgemeine Handlungsvollmacht", "Gesamtprokura"],
      answer: 0,
      explain: "Für ein einzelnes Rechtsgeschäft genügt eine Einzelvollmacht. Die Artvollmacht gilt für eine Art regelmäßig wiederkehrender Geschäfte, die allgemeine Handlungsvollmacht für alle gewöhnlichen Geschäfte." },
    { id: "q31", topic: "aufbauorganisation", type: "single", exam: ["AP1", "AP2"],
      q: "Was kennzeichnet eine <strong>Stabsstelle</strong>?",
      options: ["Sie berät und unterstützt eine Instanz, hat aber keine Weisungsbefugnis gegenüber der Linie", "Sie ist die oberste Leitungsinstanz des Unternehmens", "Sie darf allen Abteilungen fachliche Weisungen erteilen", "Sie ist eine Abteilung ohne Mitarbeitende"],
      answer: 0,
      explain: "Stabsstellen (z. B. Datenschutz, Controlling) liefern Fachwissen und Entscheidungsvorlagen, entscheiden aber nicht selbst und geben der Linie keine Weisungen." },
    { id: "q32", topic: "aufbauorganisation", type: "single", exam: ["AP1", "AP2"],
      q: "Eine Mitarbeiterin erhält Weisungen von mehreren fachlich spezialisierten Vorgesetzten. Welches Organisationssystem liegt vor?",
      options: ["Mehrliniensystem", "Einliniensystem", "Stabliniensystem", "Spartenorganisation"],
      answer: 0,
      explain: "Im Mehrliniensystem (Funktionsmeistersystem) hat eine Stelle mehrere Vorgesetzte. Im Ein- und Stabliniensystem gibt es genau einen Vorgesetzten; die Spartenorganisation gliedert nach Produkten oder Regionen." },
    { id: "q33", topic: "aufbauorganisation", type: "input", exam: ["AP2"],
      q: "Einer Abteilungsleiterin sind drei Teamleitungen und eine Sachbearbeiterin (Linienstelle) direkt unterstellt; jede Teamleitung führt fünf Mitarbeitende. Wie groß ist die Leitungsspanne der Abteilungsleiterin?",
      answer: ["4", "vier"],
      explain: "Die Leitungsspanne zählt nur die <strong>direkt</strong> unterstellten Stellen: 3 Teamleitungen + 1 Sachbearbeiterin = 4. Die Mitarbeitenden der Teams sind den Teamleitungen unterstellt." },
    { id: "q34", topic: "aufbauorganisation", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Aussagen sind typische <strong>Vorteile</strong> der Spartenorganisation?",
      options: ["Marktnähe und Flexibilität", "Klare Ergebnisverantwortung je Sparte", "Keine Doppelarbeit bei den Funktionen", "Besonders geringer Personalbedarf", "Kein Abstimmungsbedarf mit der Unternehmensleitung"],
      answer: [0, 1],
      explain: "Sparten arbeiten nah am Markt und sind für ihr Ergebnis verantwortlich (Profit-Center). Nachteilig sind gerade Doppelarbeit und höherer Personalbedarf, weil jede Sparte eigene Funktionsbereiche hat; die Gesamtleitung bleibt bestehen." },
    { id: "q35", topic: "aufbauorganisation", type: "tf", exam: ["AP1", "AP2"],
      q: "In der Matrixorganisation haben Mitarbeitende in der Regel zwei Weisungslinien, z. B. eine funktionale und eine produktbezogene.",
      answer: true,
      explain: "Die Matrix kreuzt zwei Gliederungsdimensionen (Funktion × Objekt). Das bündelt Fachwissen und Produktverantwortung, führt aber zu Abstimmungsaufwand und möglichen Kompetenzkonflikten." },
    { id: "q36", topic: "aufbauorganisation", type: "single", exam: ["AP2"],
      q: "Was ist eine <strong>Instanz</strong>?",
      options: ["Eine Stelle mit Leitungs-, Weisungs- und Entscheidungsbefugnis", "Die kleinste organisatorische Einheit ohne Befugnisse", "Eine beratende Stelle ohne Weisungsrecht", "Die Anzahl der Hierarchieebenen"],
      answer: 0,
      explain: "Instanzen sind Leitungsstellen (z. B. Abteilungs- oder Teamleitung). Die kleinste Einheit ist die Stelle, die beratende Stelle ist die Stabsstelle, die Anzahl der Ebenen heißt Gliederungstiefe." },
    { id: "q37", topic: "geschaeftsprozesse", type: "single", exam: ["AP1", "AP2"],
      q: "Welcher Prozess ist in einem IT-Systemhaus ein <strong>Kernprozess</strong>?",
      options: ["Einrichtung von Arbeitsplätzen bei Kunden", "Lohnabrechnung der Mitarbeitenden", "Reinigung der Büroräume", "Jährliche Budgetplanung"],
      answer: 0,
      explain: "Kernprozesse schaffen direkt Kundennutzen und Umsatz – beim Systemhaus die IT-Leistung für Kunden. Lohnabrechnung und Reinigung sind Unterstützungsprozesse, die Budgetplanung ist ein Managementprozess." },
    { id: "q38", topic: "geschaeftsprozesse", type: "input", exam: ["AP1"],
      q: "Ein Unternehmen erzielt 500.000 € Umsatz und bezieht Vorleistungen für 320.000 €. Wie hoch ist die Wertschöpfung in Euro?",
      answer: ["180000", "180.000", "180000€", "180.000€", "180000Euro", "180.000Euro"],
      explain: "Wertschöpfung = Umsatz − Vorleistungen = 500.000 € − 320.000 € = 180.000 €. Daraus werden Löhne, Zinsen, Steuern und Gewinn bezahlt." },
    { id: "q39", topic: "geschaeftsprozesse", type: "single", exam: ["AP1"],
      q: "Welche Tätigkeit gehört nach Porter zu den <strong>primären</strong> Aktivitäten der Wertschöpfungskette?",
      options: ["Kundendienst", "Personalwirtschaft", "Beschaffung", "Unternehmensinfrastruktur"],
      answer: 0,
      explain: "Primäre Aktivitäten: Eingangslogistik, Operationen, Ausgangslogistik, Marketing und Vertrieb, Kundendienst. Personalwirtschaft, Beschaffung, Technologieentwicklung und Unternehmensinfrastruktur sind unterstützende Aktivitäten." },
    { id: "q40", topic: "geschaeftsprozesse", type: "single", exam: ["AP1"],
      q: "Welche Phase folgt im PDCA-Zyklus auf „Check“?",
      options: ["Act – bewährte Lösung als Standard einführen oder nachsteuern", "Plan – Ziele und Maßnahmen festlegen", "Do – Maßnahme im Kleinen erproben", "Report – Abschlussbericht schreiben"],
      answer: 0,
      explain: "Reihenfolge: Plan → Do → Check → Act, danach beginnt ein neuer Zyklus mit Plan. „Report“ ist keine Phase des PDCA-Zyklus." },
    { id: "q41", topic: "geschaeftsprozesse", type: "multi", exam: ["AP1"],
      q: "Aus welchen Zeiten setzt sich die <strong>Durchlaufzeit</strong> eines Vorgangs zusammen?",
      options: ["Bearbeitungszeit", "Liegezeit", "Transportzeit", "Abschreibungsdauer", "Garantiezeit"],
      answer: [0, 1, 2],
      explain: "Durchlaufzeit = Bearbeitungszeit + Liegezeit + Transportzeit. Abschreibungsdauer und Garantiezeit haben mit dem Prozessablauf nichts zu tun." },
    { id: "q42", topic: "geschaeftsprozesse", type: "input", exam: ["AP1"],
      q: "Das Budget (Soll) eines Projekts betrug 20.000 €, die Ist-Kosten 21.500 €. Um wie viel Prozent wurde das Budget überschritten?",
      answer: ["7,5", "7,5%", "+7,5", "+7,5%", "7,50", "7,50%"],
      explain: "Relative Abweichung = (Ist − Soll) ÷ Soll × 100 % = (21.500 − 20.000) ÷ 20.000 × 100 % = 1.500 ÷ 20.000 × 100 % = 7,5 %." },
    { id: "q43", topic: "duales-system", type: "single", exam: ["AP2"],
      q: "Wie lange darf die Probezeit in einem Berufsausbildungsverhältnis dauern?",
      options: ["Mindestens 1 Monat, höchstens 4 Monate", "Mindestens 3, höchstens 6 Monate", "Genau 3 Monate", "Höchstens 6 Wochen"],
      answer: 0,
      explain: "§ 20 BBiG: Die Probezeit beträgt mindestens einen und höchstens vier Monate. Die sechs Monate stammen aus dem allgemeinen Arbeitsrecht (Probezeit im Arbeitsvertrag, Wartezeit im Kündigungsschutzgesetz)." },
    { id: "q44", topic: "duales-system", type: "single", exam: ["AP2"],
      q: "Ein Azubi möchte nach der Probezeit in einen anderen Ausbildungsberuf wechseln. Wie kann er kündigen?",
      options: ["Mit einer Frist von vier Wochen, schriftlich und unter Angabe des Grundes", "Jederzeit fristlos und ohne Angabe von Gründen", "Gar nicht – der Vertrag ist bis zum Ende bindend", "Mündlich mit einer Frist von zwei Wochen"],
      answer: 0,
      explain: "§ 22 Abs. 2 Nr. 2 und Abs. 3 BBiG: Wer die Ausbildung aufgibt oder einen anderen Beruf erlernen will, kann mit vier Wochen Frist kündigen – schriftlich mit Grund. Fristlos ohne Grund geht nur in der Probezeit." },
    { id: "q45", topic: "duales-system", type: "multi", exam: ["AP2"],
      q: "Welche Pflichten hat ein Auszubildender nach § 13 BBiG?",
      options: ["Am Berufsschulunterricht teilnehmen", "Einen Ausbildungsnachweis führen", "Über Betriebs- und Geschäftsgeheimnisse Stillschweigen wahren", "Ausbildungsmittel auf eigene Kosten beschaffen", "Den betrieblichen Ausbildungsplan erstellen"],
      answer: [0, 1, 2],
      explain: "Zu den Azubi-Pflichten gehören u. a. Lernpflicht, Berufsschulbesuch, Weisungen befolgen, Verschwiegenheit und das Führen des Ausbildungsnachweises. Ausbildungsmittel stellt der Betrieb kostenlos, den Ausbildungsplan erstellt ebenfalls der Ausbildende." },
    { id: "q46", topic: "duales-system", type: "single", exam: ["AP2"],
      q: "Welche Aufgabe übernimmt die IHK als zuständige Stelle in der Berufsausbildung?",
      options: ["Sie führt das Verzeichnis der Ausbildungsverhältnisse und nimmt die Prüfungen ab", "Sie erstellt den Rahmenlehrplan für die Berufsschule", "Sie zahlt die Ausbildungsvergütung", "Sie erteilt den Berufsschulunterricht"],
      answer: 0,
      explain: "Die IHK registriert Ausbildungsverträge, überwacht und berät (Ausbildungsberater), organisiert die Prüfungen und schlichtet. Den Rahmenlehrplan beschließt die KMK, den Unterricht erteilt die Berufsschule, die Vergütung zahlt der Ausbildungsbetrieb." },
    { id: "q47", topic: "duales-system", type: "input", exam: ["AP2"],
      q: "Eine Auszubildende ist zu Beginn des Kalenderjahres 16 Jahre alt. Wie viele Werktage Urlaub stehen ihr nach dem Jugendarbeitsschutzgesetz mindestens zu?",
      answer: ["27", "27Werktage"],
      explain: "§ 19 JArbSchG: noch nicht 16 → 30, noch nicht 17 → 27, noch nicht 18 → 25 Werktage. Mit 16 ist sie „noch nicht 17“ → 27 Werktage." },
    { id: "q48", topic: "duales-system", type: "tf", exam: ["AP2"],
      q: "Ein Berufsschultag mit mehr als fünf Unterrichtsstunden à 45 Minuten wird zweimal pro Woche als voller Ausbildungstag angerechnet.",
      answer: false,
      explain: "Nach § 15 BBiG gilt diese Anrechnung nur für <strong>einen</strong> Berufsschultag pro Woche. Ein zweiter Schultag zählt mit der tatsächlichen Unterrichtszeit einschließlich Pausen und notwendiger Wegezeiten." },
    { id: "q49", topic: "duales-system", type: "tf", exam: ["AP2"],
      q: "Besteht ein Azubi die Abschlussprüfung vor Ablauf der vertraglichen Ausbildungszeit, endet das Ausbildungsverhältnis mit der Bekanntgabe des Ergebnisses durch den Prüfungsausschuss.",
      answer: true,
      explain: "§ 21 Abs. 2 BBiG. Arbeitet der Azubi danach ohne weitere Vereinbarung weiter, entsteht ein unbefristetes Arbeitsverhältnis (§ 24 BBiG)." },
    { id: "q50", topic: "pruefung-weiterbildung", type: "single",
      q: "Mit welchem Anteil geht die AP1 (Teil 1) in das Gesamtergebnis der Abschlussprüfung FISI ein?",
      options: ["20 %", "10 %", "50 %", "40 %"],
      answer: 0,
      explain: "§ 24 FIAusbV: AP1 20 %, Projekt 50 %, Konzeption/Administration 10 %, Netzwerke 10 %, WiSo 10 %. Die AP1 wiegt damit doppelt so schwer wie jeder schriftliche AP2-Bereich." },
    { id: "q51", topic: "pruefung-weiterbildung", type: "single",
      q: "Wie viel Zeit steht Fachinformatikern Systemintegration für die betriebliche Projektarbeit zur Verfügung?",
      options: ["Höchstens 40 Stunden einschließlich Dokumentation", "Höchstens 80 Stunden einschließlich Dokumentation", "Höchstens 35 Stunden ohne Dokumentation", "Genau 70 Stunden"],
      answer: 0,
      explain: "FISI: höchstens 40 Stunden für Projektarbeit und Dokumentation (§ 20 FIAusbV). Die 80 Stunden gelten für die Fachrichtung Anwendungsentwicklung." },
    { id: "q52", topic: "pruefung-weiterbildung", type: "multi",
      q: "Welche Bedingungen müssen nach § 24 FIAusbV (Systemintegration) für das Bestehen der Abschlussprüfung erfüllt sein?",
      options: ["Gesamtergebnis aus Teil 1 und Teil 2 mindestens „ausreichend“", "Mindestens drei Prüfungsbereiche von Teil 2 mindestens „ausreichend“", "Kein Prüfungsbereich von Teil 2 „ungenügend“", "AP1 mindestens „ausreichend“", "Alle vier Bereiche von Teil 2 mindestens „befriedigend“"],
      answer: [0, 1, 2],
      explain: "Außerdem muss das Ergebnis von Teil 2 mindestens ausreichend sein. Für die AP1 gibt es keine eigene Bestehensgrenze, und „befriedigend“ ist nirgends gefordert." },
    { id: "q53", topic: "pruefung-weiterbildung", type: "input",
      q: "Berechne das Gesamtergebnis in Punkten: AP1 60, Projekt 70, Konzeption/Administration 50, Netzwerke 60, WiSo 80.",
      answer: ["66", "66,0", "66Punkte"],
      explain: "0,2 × 60 + 0,5 × 70 + 0,1 × 50 + 0,1 × 60 + 0,1 × 80 = 12 + 35 + 5 + 6 + 8 = 66 Punkte (ausreichend, knapp unter befriedigend ab 67)." },
    { id: "q54", topic: "pruefung-weiterbildung", type: "tf",
      q: "Auf Antrag des Auszubildenden wird die Berufsschulnote auf dem IHK-Prüfungszeugnis ausgewiesen.",
      answer: true,
      explain: "§ 37 Abs. 3 BBiG: Auf Antrag ist das Ergebnis berufsschulischer Leistungsfeststellungen auf dem Zeugnis auszuweisen. Der Antrag wird in der Regel über die Schule bzw. mit der Prüfungsanmeldung gestellt." },
    { id: "q55", topic: "rolle-kommunikation", type: "single", exam: ["AP1"],
      q: "Welche vier Seiten einer Nachricht unterscheidet Schulz von Thun?",
      options: ["Sachinhalt, Selbstoffenbarung, Beziehung, Appell", "Sender, Empfänger, Kanal, Störung", "Forming, Storming, Norming, Performing", "Inhalt, Form, Stil, Wirkung"],
      answer: 0,
      explain: "Das Vier-Seiten-Modell (vier Ohren) umfasst Sachinhalt, Selbstoffenbarung, Beziehung und Appell. Sender, Empfänger und Kanal gehören zum Sender-Empfänger-Modell, Forming bis Performing zu den Teamphasen nach Tuckman." },
    { id: "q56", topic: "rolle-kommunikation", type: "single", exam: ["AP2"],
      q: "Der Kunde erwartet eine schnelle Lösung, der Ausbilder eine gründliche Dokumentation – beides richtet sich an dich als Service-Mitarbeiter. Welcher Konflikt liegt vor?",
      options: ["Intrarollenkonflikt", "Interrollenkonflikt", "Zielharmonie", "Kein Konflikt, da alle Erwartungen aus dem Betrieb stammen"],
      answer: 0,
      explain: "Widersprüchliche Erwartungen an <strong>dieselbe</strong> Rolle = Intrarollenkonflikt. Ein Interrollenkonflikt entsteht zwischen verschiedenen Rollen (z. B. Mitarbeiter vs. Berufsschüler)." },
    { id: "q57", topic: "rolle-kommunikation", type: "multi", exam: ["AP1"],
      q: "Welche Regeln gelten beim <strong>Feedback geben</strong>?",
      options: ["Ich-Botschaften verwenden", "Konkretes Verhalten beschreiben", "Zeitnah rückmelden", "Kritik möglichst vor der ganzen Gruppe äußern", "Mit „immer“ und „nie“ verallgemeinern"],
      answer: [0, 1, 2],
      explain: "Gutes Feedback ist eine Ich-Botschaft, beschreibt konkretes Verhalten und kommt zeitnah – Kritik unter vier Augen. Verallgemeinerungen wie „immer“ und „nie“ wirken als Angriff und erzeugen Abwehr." },
    { id: "q58", topic: "rolle-kommunikation", type: "single", exam: ["AP1"],
      q: "In welcher Teamphase nach Tuckman kommt es typischerweise zu Konflikten um Rollen, Ziele und Vorgehen?",
      options: ["Storming", "Forming", "Norming", "Performing"],
      answer: 0,
      explain: "Forming = Kennenlernen, Storming = Konflikte, Norming = Regeln und Rollen werden vereinbart, Performing = produktive Zusammenarbeit (danach Adjourning = Auflösung)." },
    { id: "q59", topic: "rolle-kommunikation", type: "tf", exam: ["AP1", "AP2"],
      q: "Bei einer E-Mail an viele externe Empfänger, die sich untereinander nicht kennen, gehören die Adressen ins BCC-Feld.",
      answer: true,
      explain: "Im BCC sehen die Empfänger die anderen Adressen nicht. Offene Verteiler im An- oder CC-Feld geben personenbezogene Daten (E-Mail-Adressen) preis und können ein Datenschutzverstoß sein." },
    { id: "q60", topic: "selbstorganisation", type: "single", exam: ["AP1"],
      q: "Wie behandelst du nach der Eisenhower-Matrix eine Aufgabe, die <strong>wichtig, aber nicht dringend</strong> ist?",
      options: ["Terminieren und selbst erledigen", "Sofort selbst erledigen", "Delegieren", "Gar nicht bearbeiten"],
      answer: 0,
      explain: "B-Aufgaben (wichtig, nicht dringend) plant man fest ein und erledigt sie selbst, z. B. Backup-Tests oder Dokumentation. Sofort erledigt werden A-Aufgaben, delegiert werden C-Aufgaben, D-Aufgaben entfallen." },
    { id: "q61", topic: "selbstorganisation", type: "input", exam: ["AP1"],
      q: "Nach der ALPEN-Methode verplant man nur etwa 60 % der Arbeitszeit. Wie viele Stunden sind das bei einem 8-Stunden-Tag?",
      answer: ["4,8", "4,80", "4,8h", "4,8Stunden", "4h48min", "4h48", "4:48", "4:48h"],
      explain: "60 % × 8 h = 4,8 h = 4 Stunden 48 Minuten. Die übrigen 40 % bleiben als Puffer für Unerwartetes und Spontanes." },
    { id: "q62", topic: "selbstorganisation", type: "single", exam: ["AP2"],
      q: "Eine 17-jährige Auszubildende arbeitet an einem Tag 7 Stunden. Wie lang müssen ihre Ruhepausen nach dem JArbSchG mindestens sein?",
      options: ["60 Minuten", "30 Minuten", "45 Minuten", "15 Minuten"],
      answer: 0,
      explain: "§ 11 JArbSchG: 30 Minuten bei mehr als 4,5 bis 6 Stunden, 60 Minuten bei mehr als 6 Stunden. Die 30/45-Minuten-Regel (mehr als 6 bzw. 9 Stunden) gilt nach dem ArbZG für Erwachsene." },
    { id: "q63", topic: "selbstorganisation", type: "tf", exam: ["AP1"],
      q: "Kundendaten dürfen in öffentliche KI-Chatbots eingegeben werden, solange man das Ergebnis anschließend fachlich prüft.",
      answer: false,
      explain: "Die Prüfung des Ergebnisses ändert nichts daran, dass personenbezogene oder vertrauliche Daten an einen Drittanbieter übermittelt würden. Ohne Rechtsgrundlage und betriebliche Freigabe ist das ein Datenschutzverstoß." },
    { id: "q64", topic: "nachhaltigkeit-csr", type: "single", exam: ["AP1", "AP2"],
      q: "Was versteht man unter <strong>Corporate Social Responsibility (CSR)</strong>?",
      options: ["Die freiwillige Übernahme gesellschaftlicher Verantwortung über gesetzliche Pflichten hinaus", "Gesetzlich vorgeschriebene Mindeststandards im Arbeitsschutz", "Ein Verfahren zur Berechnung der Rentabilität", "Eine Rechtsform für gemeinnützige Unternehmen"],
      answer: 0,
      explain: "CSR umfasst freiwilliges Engagement in den Feldern Markt, Arbeitsplatz, Umwelt und Gemeinwesen. Reine Gesetzeserfüllung ist Pflicht, keine CSR." },
    { id: "q65", topic: "nachhaltigkeit-csr", type: "single", exam: ["AP2"],
      q: "Welche Stufe hat in der Abfallhierarchie des Kreislaufwirtschaftsgesetzes den höchsten Vorrang?",
      options: ["Vermeidung", "Recycling", "Energetische Verwertung", "Beseitigung"],
      answer: 0,
      explain: "Reihenfolge: Vermeidung → Vorbereitung zur Wiederverwendung → Recycling → sonstige (z. B. energetische) Verwertung → Beseitigung. Am besten ist Abfall, der gar nicht entsteht." },
    { id: "q66", topic: "nachhaltigkeit-csr", type: "input", exam: ["AP2"],
      q: "Ein Rechenzentrum verbraucht jährlich 1.200.000 kWh, davon 800.000 kWh für die IT-Geräte. Wie hoch ist der PUE-Wert?",
      answer: ["1,5", "1,50"],
      explain: "PUE = Gesamtenergie ÷ IT-Energie = 1.200.000 ÷ 800.000 = 1,5. Pro kWh für die IT werden 0,5 kWh zusätzlich für Kühlung, USV und Infrastruktur verbraucht; ideal wäre 1,0." },
    { id: "q67", topic: "nachhaltigkeit-csr", type: "multi", exam: ["AP1"],
      q: "Welche Maßnahmen sind Beispiele für <strong>Green by IT</strong> (IT hilft, an anderer Stelle Ressourcen zu sparen)?",
      options: ["Videokonferenz statt Dienstreise", "Digitale Workflows statt Papierformularen", "Fernwartung statt Anfahrt zum Kunden", "Netzteile mit 80-PLUS-Zertifizierung einsetzen", "Server virtualisieren"],
      answer: [0, 1, 2],
      explain: "Green by IT spart Ressourcen außerhalb der IT (Reisen, Papier, Fahrten). Effiziente Netzteile und Virtualisierung machen die IT selbst sparsamer → Green in IT." },
    { id: "q68", topic: "projekt-praesentation", type: "multi", exam: ["AP1"],
      q: "Welche Merkmale kennzeichnen ein <strong>Projekt</strong>?",
      options: ["Einmaligkeit der Bedingungen", "Zeitliche Begrenzung", "Klar definiertes Ziel", "Tägliche Wiederholung derselben Tätigkeit", "Unbegrenzte Ressourcen"],
      answer: [0, 1, 2],
      explain: "Projekte sind einmalig, zeitlich begrenzt, zielorientiert und haben begrenzte Ressourcen. Tägliche Routinetätigkeiten (z. B. Backup-Kontrolle) sind keine Projekte." },
    { id: "q69", topic: "projekt-praesentation", type: "single", exam: ["AP1"],
      q: "Welche Größen bilden das „magische Dreieck“ des Projektmanagements?",
      options: ["Leistung/Qualität, Zeit, Kosten", "Ökonomie, Ökologie, Soziales", "Plan, Do, Check", "Einleitung, Hauptteil, Schluss"],
      answer: 0,
      explain: "Leistung/Qualität, Zeit und Kosten beeinflussen sich gegenseitig: Wer schneller fertig sein will, braucht meist mehr Budget oder senkt die Qualität. Ökonomie–Ökologie–Soziales ist das Nachhaltigkeitsdreieck." },
    { id: "q70", topic: "projekt-praesentation", type: "single", exam: ["AP1"],
      q: "Welche Scrum-Rolle ist für das Priorisieren des Product Backlogs verantwortlich?",
      options: ["Product Owner", "Scrum Master", "Developers", "Stakeholder"],
      answer: 0,
      explain: "Der Product Owner verantwortet den Produktwert und priorisiert das Product Backlog. Der Scrum Master unterstützt den Prozess und beseitigt Hindernisse, die Developers setzen die Arbeit im Sprint um." },
    { id: "q71", topic: "projekt-praesentation", type: "tf", exam: ["AP1"],
      q: "Beim Wasserfallmodell werden die Projektphasen in kurzen Iterationen (Sprints) mehrfach durchlaufen.",
      answer: false,
      explain: "Das Wasserfallmodell arbeitet die Phasen nacheinander ab (sequenziell). Kurze Iterationen mit Sprints sind typisch für agile Verfahren wie Scrum." },
    { id: "q72", topic: "projekt-praesentation", type: "single", exam: ["AP2"],
      q: "Wie lange soll die Präsentation der betrieblichen Projektarbeit in der AP2 höchstens dauern?",
      options: ["15 Minuten", "30 Minuten", "10 Minuten", "45 Minuten"],
      answer: 0,
      explain: "Die Präsentation soll höchstens 15 Minuten dauern; zusammen mit dem anschließenden Fachgespräch höchstens 30 Minuten (§ 20 FIAusbV)." },
    { id: "q73", topic: "duales-system", type: "multi", exam: ["AP2"],
      q: "Welche Angaben gehören zu den Mindestinhalten des Berufsausbildungsvertrags (§ 11 BBiG)?",
      options: ["Dauer der Probezeit", "Zahlung und Höhe der Vergütung", "Dauer des Urlaubs", "Religionszugehörigkeit des Azubis", "Notendurchschnitt des Schulzeugnisses"],
      answer: [0, 1, 2],
      explain: "§ 11 BBiG nennt u. a. Art und Ziel der Ausbildung, Beginn und Dauer, tägliche Ausbildungszeit, Probezeit, Vergütung, Urlaub und Kündigungsvoraussetzungen. Religion und Schulnoten gehören nicht in den Vertrag." },
    { id: "q74", topic: "markt-wettbewerb", type: "multi", exam: ["AP2"],
      q: "Welche Bedingungen gehören zum Modell des <strong>vollkommenen Marktes</strong>?",
      options: ["Gleichartige (homogene) Güter", "Vollständige Markttransparenz", "Keine persönlichen, räumlichen oder zeitlichen Präferenzen", "Wenige Anbieter", "Staatlich festgelegte Preise"],
      answer: [0, 1, 2],
      explain: "Dazu kommt die sofortige Reaktion aller Marktteilnehmer. Die Zahl der Anbieter bestimmt die Marktform, nicht die Vollkommenheit; staatliche Preisfestsetzung widerspricht freier Preisbildung." },
    { id: "q75", topic: "vollmachten", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Aussagen zur <strong>Prokura</strong> sind richtig?",
      options: ["Sie muss ausdrücklich erteilt werden", "Sie wird ins Handelsregister eingetragen", "Sie erlischt nicht durch den Tod des Inhabers", "Sie kann von einem Handlungsbevollmächtigten erteilt werden", "Sie berechtigt zum Unterschreiben der Bilanz"],
      answer: [0, 1, 2],
      explain: "Prokura wird ausdrücklich vom Kaufmann erteilt, ins Handelsregister eingetragen und besteht beim Tod des Inhabers fort (§ 52 Abs. 3 HGB). Handlungsbevollmächtigte können keine Prokura erteilen; die Bilanz unterschreibt nur der Inhaber bzw. die Geschäftsführung." },
    { id: "q76", topic: "ziele-leitbild", type: "single",
      q: "Was beschreibt die <strong>Vision</strong> in einem Unternehmensleitbild?",
      options: ["Ein langfristiges Zukunftsbild, wohin sich das Unternehmen entwickeln will", "Die aktuelle Bilanzsumme des Unternehmens", "Die Rechtsform und den Firmensitz", "Die tägliche Arbeitszeitregelung"],
      answer: 0,
      explain: "Die Vision ist das angestrebte Zukunftsbild. Die Mission beschreibt den heutigen Zweck, die Werte das gewünschte Verhalten. Bilanzzahlen oder Rechtsform sind keine Leitbildinhalte." },
    { id: "q77", topic: "geschaeftsprozesse", type: "single", exam: ["AP1"],
      q: "Was ist ein <strong>ERP-System</strong>?",
      options: ["Software, die Geschäftsprozesse wie Einkauf, Lager, Vertrieb und Finanzen integriert abbildet", "Software ausschließlich zur Verwaltung von Kundenkontakten", "Ein Protokoll zur Adressauflösung im Netzwerk", "Ein Verfahren zur Datensicherung"],
      answer: 0,
      explain: "ERP (Enterprise Resource Planning) verbindet die Geschäftsprozesse in einer gemeinsamen Datenbasis. Die reine Kundenverwaltung übernimmt ein CRM-System." },
    { id: "q78", topic: "pruefung-weiterbildung", type: "single", exam: ["AP2"],
      q: "Welche Fortbildungsstufe nach dem BBiG folgt auf den „Bachelor Professional“?",
      options: ["Master Professional", "Geprüfte/r Berufsspezialist/in", "Fachinformatiker/-in", "Ausbilder/-in nach AEVO"],
      answer: 0,
      explain: "Die drei Stufen der höherqualifizierenden Berufsbildung lauten: Geprüfte/r Berufsspezialist/in → Bachelor Professional → Master Professional. Fachinformatiker/-in ist der Ausbildungsabschluss, die AEVO-Prüfung ist die Ausbildereignung." },
    { id: "q79", topic: "machbarkeit-kalkulation", type: "input", exam: ["AP1"],
      q: "Ein Techniker-Einsatz wird mit einer Anfahrtspauschale von 60 € und 8 Stunden zu je 85 € berechnet. Wie hoch ist der Nettobetrag in Euro?",
      answer: ["740", "740€", "740,00", "740,00€", "740Euro"],
      explain: "60 € + 8 × 85 € = 60 € + 680 € = 740 € netto. Brutto wären es 740 € × 1,19 = 880,60 €." },
    { id: "q80", topic: "machbarkeit-kalkulation", type: "single", exam: ["AP1"],
      q: "Was kennzeichnet die <strong>Nachkalkulation</strong>?",
      options: ["Sie rechnet nach Auftragsabschluss mit den tatsächlich angefallenen Ist-Werten", "Sie wird vor der Angebotsabgabe mit geschätzten Werten erstellt", "Sie enthält grundsätzlich keine Personalkosten", "Sie ersetzt das Angebot an den Kunden"],
      answer: 0,
      explain: "Die Nachkalkulation vergleicht Ist-Kosten mit der Vorkalkulation (Soll) und deckt Abweichungen auf. Mit Schätzwerten vor Angebotsabgabe arbeitet die Vorkalkulation." },
    { id: "q81", topic: "machbarkeit-kalkulation", type: "single", exam: ["AP1"],
      q: "In welcher Reihenfolge wird ein Angebotspreis kalkuliert?",
      options: ["Selbstkosten → Gewinnzuschlag → Umsatzsteuer", "Umsatzsteuer → Gewinnzuschlag → Selbstkosten", "Gewinnzuschlag → Selbstkosten → Umsatzsteuer", "Selbstkosten → Umsatzsteuer → Gewinnzuschlag"],
      answer: 0,
      explain: "Erst werden die Selbstkosten ermittelt (Personal-, Sach- und Gemeinkosten), darauf kommt der Gewinnzuschlag (= Nettopreis), ganz zum Schluss die Umsatzsteuer (= Bruttopreis)." },
    { id: "q82", topic: "machbarkeit-kalkulation", type: "multi", exam: ["AP1"],
      q: "Welche Strategien gibt es im Umgang mit Projektrisiken?",
      options: ["Vermeiden", "Vermindern", "Übertragen", "Verdoppeln", "Verschweigen"],
      answer: [0, 1, 2],
      explain: "Risiken kann man vermeiden, vermindern, übertragen (z. B. Versicherung, Vertragsstrafe) oder bewusst akzeptieren (mit Puffer). Verschweigen ist keine Strategie, sondern ein Kommunikationsfehler." },
    { id: "q83", topic: "machbarkeit-kalkulation", type: "tf", exam: ["AP1"],
      q: "Liegt der Bruttoangebotspreis über dem Budget des Kunden, muss der Auftrag abgelehnt werden.",
      answer: false,
      explain: "Man prüft Alternativen: Leistungsumfang anpassen, Gewinnzuschlag senken, Budget nachverhandeln oder den Auftrag in Phasen teilen. Wichtig ist, brutto mit brutto bzw. netto mit netto zu vergleichen." },
    { id: "q84", topic: "machbarkeit-kalkulation", type: "single", exam: ["AP1"],
      q: "Ein Risiko tritt mit 10 % Wahrscheinlichkeit ein und verursacht dann einen Schaden von 15.000 €. Wie hoch ist der Risikowert?",
      options: ["1.500 €", "15.000 €", "150 €", "13.500 €"],
      answer: 0,
      explain: "Risiko = Eintrittswahrscheinlichkeit × Schadenshöhe = 0,1 × 15.000 € = 1.500 €. Mit diesem Wert lassen sich Risiken vergleichen und Gegenmaßnahmen priorisieren." },
    { id: "q85", topic: "ziele-leitbild", type: "single", exam: ["AP2"],
      q: "Welches der folgenden Ziele ist ein <strong>Formalziel</strong>?",
      options: ["Die Eigenkapitalrentabilität auf 12 % steigern", "IT-Betreuung für Handwerksbetriebe anbieten", "Ein Rechenzentrum in Heide betreiben", "Cloud-Telefonie als neue Leistung aufnehmen"],
      answer: 0,
      explain: "Formalziele messen den wirtschaftlichen Erfolg (Gewinn, Rentabilität, Liquidität). Die übrigen Aussagen beschreiben, was das Unternehmen leistet – das sind Sachziele." },
    { id: "q86", topic: "unternehmen-system", type: "single", exam: ["AP2"],
      q: "Welcher betriebswirtschaftliche Produktionsfaktor plant, organisiert und kontrolliert den Einsatz der übrigen Faktoren?",
      options: ["Dispositiver Faktor (leitende Arbeit)", "Ausführende Arbeit", "Betriebsmittel", "Werkstoffe"],
      answer: 0,
      explain: "Der dispositive Faktor (Geschäftsführung, Abteilungs- und Teamleitung) kombiniert die Elementarfaktoren. Ausführende Arbeit, Betriebsmittel und Werkstoffe sind Elementarfaktoren, die geplant und eingesetzt werden." },
    { id: "q87", topic: "unternehmen-system", type: "single", exam: ["AP2"],
      q: "In der PC-Werkstatt eines Systemhauses wird Strom für Lötstation und Prüfgeräte verbraucht. Wie wird der Strom betriebswirtschaftlich eingeordnet?",
      options: ["Betriebsstoff", "Rohstoff", "Hilfsstoff", "Betriebsmittel"],
      answer: 0,
      explain: "Betriebsstoffe werden bei der Leistungserstellung verbraucht, gehen aber nicht in das Produkt ein (Strom, Schmiermittel). Rohstoffe sind Hauptbestandteile, Hilfsstoffe Nebenbestandteile des Produkts. Betriebsmittel (Maschinen, Werkzeug) werden genutzt, aber nicht verbraucht." },
    { id: "q88", topic: "ziele-leitbild", type: "input", exam: ["AP2"],
      q: "Der Umsatz eines Systemhauses betrug 2024 800.000 € und 2026 1.000.000 €. Berechne die Indexzahl für 2026 (Basisjahr 2024 = 100).",
      answer: ["125", "125,0"],
      explain: "Indexzahl = Wert im Berichtsjahr ÷ Wert im Basisjahr × 100 = 1.000.000 ÷ 800.000 × 100 = 125. Der Umsatz liegt also 25 % über dem Basisjahr." },
    { id: "q89", topic: "ziele-leitbild", type: "single", exam: ["AP2"],
      q: "Ein Kostenindex steigt von 110 auf 121 (gleiches Basisjahr). Um wie viel Prozent sind die Kosten gestiegen?",
      options: ["10 %", "11 %", "21 %", "1,1 %"],
      answer: 0,
      explain: "Die Differenz von 11 sind Prozentpunkte. Die prozentuale Steigerung beträgt (121 − 110) ÷ 110 × 100 % = 10 %. 21 % wäre die Steigerung gegenüber dem Basisjahr (Index 100), nicht gegenüber dem Ausgangswert 110." },
    { id: "q90", topic: "rechtsformen", type: "single", exam: ["AP2"],
      q: "Der Gesellschaftsvertrag einer OHG regelt weder Beteiligungsverhältnisse noch Werte der Einlagen. Wie wird der Gewinn nach der seit 2024 geltenden Rechtslage verteilt?",
      options: ["Nach Köpfen – jeder Gesellschafter erhält den gleichen Anteil", "4 % auf den Kapitalanteil, der Rest nach Köpfen", "Ausschließlich an den geschäftsführenden Gesellschafter", "Der Gewinn muss vollständig in eine Rücklage eingestellt werden"],
      answer: 0,
      explain: "Reihenfolge seit dem MoPeG: vereinbarte Beteiligungsverhältnisse → Verhältnis der vereinbarten Einlagewerte → nach Köpfen. Die 4-%-Regel war die alte gesetzliche Regel bis Ende 2023. Eine Rücklagenpflicht gibt es bei der UG, nicht bei der OHG." },
    { id: "q91", topic: "rechtsformen", type: "single", exam: ["AP2"],
      q: "Welche Rechtsform hat die Förderung ihrer Mitglieder durch einen gemeinsamen Geschäftsbetrieb zum Zweck und wird in ein eigenes Register eingetragen?",
      options: ["Eingetragene Genossenschaft (eG)", "Eingetragener Verein (e. V.)", "Aktiengesellschaft (AG)", "Kommanditgesellschaft (KG)"],
      answer: 0,
      explain: "Die eG fördert ihre Mitglieder (z. B. Volksbanken, Einkaufsgenossenschaften) und steht im Genossenschaftsregister; jedes Mitglied hat grundsätzlich eine Stimme. Der e. V. verfolgt meist ideelle Zwecke, AG und KG stehen im Handelsregister B bzw. A." },
    { id: "q92", topic: "duales-system", type: "single", exam: ["AP2"],
      q: "Ein Betrieb mit Betriebsrat beschäftigt 3 Jugendliche unter 18 Jahren und 4 Auszubildende im Alter von 19 bis 23 Jahren. Kann eine Jugend- und Auszubildendenvertretung (JAV) gewählt werden?",
      options: ["Ja, weil zusammen mindestens 5 Beschäftigte unter 18 bzw. Azubis unter 25 vorhanden sind", "Nein, weil weniger als 5 Beschäftigte unter 18 Jahre alt sind", "Nein, eine JAV gibt es erst ab 20 Auszubildenden", "Ja, aber nur, wenn die IHK zustimmt"],
      answer: 0,
      explain: "§ 60 BetrVG: In Betrieben mit Betriebsrat wird eine JAV gewählt, wenn mindestens 5 Arbeitnehmer unter 18 oder Azubis unter 25 beschäftigt sind – beide Gruppen zählen zusammen (3 + 4 = 7). Die IHK wirkt bei der Wahl nicht mit." },
    { id: "q93", topic: "duales-system", type: "tf", exam: ["AP2"],
      q: "Beginnt der Berufsschulunterricht um 8:00 Uhr, darf der Betrieb den Auszubildenden an diesem Tag vor dem Unterricht nicht beschäftigen.",
      answer: true,
      explain: "§ 15 Abs. 1 BBiG: Vor einem Berufsschulunterricht, der vor 9 Uhr beginnt, dürfen Auszubildende – egal welchen Alters – nicht beschäftigt werden." },
    { id: "q94", topic: "duales-system", type: "single", exam: ["AP2"],
      q: "Was legt die <strong>Ausbildungsordnung</strong> nach § 5 BBiG fest?",
      options: ["Berufsbezeichnung, Ausbildungsdauer, Berufsbild, Ausbildungsrahmenplan und Prüfungsanforderungen", "Die Lernfelder und Stundenzahlen der Berufsschule", "Die genaue Höhe der Ausbildungsvergütung im Betrieb", "Den individuellen Urlaubsanspruch jedes Azubis"],
      answer: 0,
      explain: "Die Ausbildungsordnung (für dich die FIAusbV) regelt den betrieblichen Teil bundeseinheitlich. Die Lernfelder stehen im Rahmenlehrplan der KMK, Vergütung und Urlaub im Ausbildungsvertrag bzw. Tarifvertrag." },
    { id: "q95", topic: "projekt-praesentation", type: "single", exam: ["AP1"],
      q: "Welche Diagrammart eignet sich am besten, um die Entwicklung des Umsatzes von 2020 bis 2026 darzustellen?",
      options: ["Liniendiagramm", "Kreisdiagramm", "Organigramm", "Mindmap"],
      answer: 0,
      explain: "Entwicklungen über die Zeit zeigt man mit einem Liniendiagramm (alternativ Säulen). Ein Kreisdiagramm zeigt Anteile an einem Ganzen, Organigramm und Mindmap stellen Strukturen dar, keine Zahlenreihen." },
    { id: "q96", topic: "projekt-praesentation", type: "multi", exam: ["AP1"],
      q: "Welche Kriterien helfen dir, die Seriosität einer Internetquelle zu beurteilen?",
      options: ["Der Urheber ist erkennbar und fachlich kompetent", "Das Veröffentlichungsdatum ist aktuell", "Aussagen sind belegt und lassen sich in einer zweiten Quelle bestätigen", "Die Seite steht in der Suchmaschine ganz oben", "Die Seite hat ein ansprechendes Design"],
      answer: [0, 1, 2],
      explain: "Urheber, Aktualität und Belege (plus mögliche Interessen wie Werbung) sind die Prüfkriterien. Die Platzierung in der Suchmaschine kann gekauft oder optimiert sein, und ein schönes Design sagt nichts über die Richtigkeit aus." },
    { id: "q97", topic: "projekt-praesentation", type: "input", exam: ["AP1"],
      q: "Managed Services machen 45 % des Umsatzes aus. Wie groß ist der Winkel dieses Segments in einem Kreisdiagramm (in Grad)?",
      answer: ["162", "162°", "162Grad"],
      explain: "Ein Kreis hat 360°: 0,45 × 360° = 162°." },
    { id: "q98", topic: "selbstorganisation", type: "tf", exam: ["AP2"],
      q: "Jugendliche Auszubildende dürfen nach dem JArbSchG grundsätzlich nur an fünf Tagen pro Woche beschäftigt werden.",
      answer: true,
      explain: "§ 15 JArbSchG schreibt für Jugendliche die Fünf-Tage-Woche vor (höchstens 40 Stunden). Für Erwachsene erlaubt das ArbZG Arbeit an allen Werktagen von Montag bis Samstag." },
  ],
  cards: [
    { topic: "unternehmen-system", f: "Betrieb – Unternehmen – Firma", b: "Betrieb = örtliche Leistungsstätte; Unternehmen = rechtlich-wirtschaftliche Einheit; Firma = Name des Kaufmanns (§ 17 HGB)." },
    { topic: "unternehmen-system", f: "Maximalprinzip vs. Minimalprinzip", b: "Maximal: gegebene Mittel → größter Ertrag. Minimal: gegebenes Ziel → geringster Mitteleinsatz." },
    { topic: "unternehmen-system", f: "Drei Wirtschaftssektoren", b: "Primär = Urproduktion, sekundär = Be-/Verarbeitung (Industrie, Handwerk), tertiär = Dienstleistungen (auch IT-Systemhaus)." },
    { topic: "unternehmen-system", f: "Stakeholder vs. Shareholder", b: "Stakeholder = alle Anspruchsgruppen (intern und extern). Shareholder = nur Anteilseigner." },
    { topic: "unternehmen-system", f: "Stakeholder-Matrix: hoher Einfluss + hohes Interesse", b: "Schlüsselakteure → eng einbinden (z. B. Geschäftsführung, Betriebsrat)." },
    { topic: "ziele-leitbild", f: "Nachhaltigkeitsdreieck", b: "Ökonomische, ökologische und soziale Ziele gleichrangig berücksichtigen (Drei-Säulen-Modell)." },
    { topic: "ziele-leitbild", f: "Zielharmonie / Zielkonflikt / Zielneutralität", b: "Ziele fördern sich / behindern sich / beeinflussen sich nicht." },
    { topic: "ziele-leitbild", f: "SMART", b: "Spezifisch, messbar, attraktiv/akzeptiert, realistisch, terminiert." },
    { topic: "ziele-leitbild", f: "Mission – Vision – Werte", b: "Wozu gibt es uns heute? – Wohin wollen wir? – Wie handeln wir?" },
    { topic: "ziele-leitbild", f: "Produktivität", b: "Ausbringungsmenge ÷ Einsatzmenge (mengenmäßig, z. B. Tickets pro Stunde)." },
    { topic: "ziele-leitbild", f: "Wirtschaftlichkeit", b: "Erträge (Leistungen) ÷ Aufwendungen (Kosten); über 1 = wirtschaftlich." },
    { topic: "ziele-leitbild", f: "Eigenkapitalrentabilität", b: "Gewinn ÷ Eigenkapital × 100 %." },
    { topic: "ziele-leitbild", f: "Gesamtkapitalrentabilität", b: "(Gewinn + Fremdkapitalzinsen) ÷ Gesamtkapital × 100 %." },
    { topic: "markt-wettbewerb", f: "Polypol – Oligopol – Monopol", b: "Viele – wenige – ein Anbieter (bei vielen Nachfragern)." },
    { topic: "markt-wettbewerb", f: "Käufermarkt", b: "Angebot > Nachfrage; Käufer haben Marktmacht (Preisdruck, Rabatte)." },
    { topic: "markt-wettbewerb", f: "Verkäufermarkt", b: "Nachfrage > Angebot; Verkäufer bestimmen Preise, lange Lieferzeiten (z. B. Chipkrise)." },
    { topic: "markt-wettbewerb", f: "Gleichgewichtspreis", b: "Preis, bei dem angebotene und nachgefragte Menge übereinstimmen; der Markt wird geräumt." },
    { topic: "markt-wettbewerb", f: "Kartell – Konzern – Fusion", b: "Absprache Selbstständiger (meist verboten) – einheitliche Leitung, rechtlich selbstständig – Verschmelzung, Selbstständigkeit geht verloren." },
    { topic: "markt-wettbewerb", f: "Direkter vs. indirekter Vertrieb", b: "Direkt: Hersteller → Kunde (Onlineshop, Außendienst). Indirekt: über Distributor, Fachhandel, Systemhaus." },
    { topic: "rechtsformen", f: "Handelsregister Abteilung A / B", b: "A: e. K., OHG, KG (Personenhandelsgesellschaften). B: GmbH, UG, AG (Kapitalgesellschaften)." },
    { topic: "rechtsformen", f: "GmbH: Kapital und Einzahlung", b: "25.000 € Stammkapital; je Einlage mind. ¼, insgesamt mind. 12.500 € bei Anmeldung." },
    { topic: "rechtsformen", f: "UG (haftungsbeschränkt)", b: "Ab 1 € Stammkapital, voll in bar; 25 % des Jahresüberschusses in die Rücklage." },
    { topic: "rechtsformen", f: "AG: Mindestkapital und Organe", b: "50.000 € Grundkapital; Vorstand (leitet), Aufsichtsrat (überwacht), Hauptversammlung (Aktionäre)." },
    { topic: "rechtsformen", f: "Komplementär vs. Kommanditist", b: "Komplementär: Vollhafter mit Geschäftsführung. Kommanditist: haftet nur bis zur Einlage, Kontroll- und Widerspruchsrecht." },
    { topic: "rechtsformen", f: "Haftung in der OHG", b: "Alle Gesellschafter unbeschränkt (auch privat), unmittelbar und gesamtschuldnerisch." },
    { topic: "rechtsformen", f: "Deklaratorisch vs. konstitutiv", b: "Deklaratorisch: Eintragung bestätigt nur (Istkaufmann, Prokura). Konstitutiv: Eintragung begründet das Recht (GmbH/AG entstehen)." },
    { topic: "vollmachten", f: "Prokura – Unterschrift und Eintragung", b: "Zusatz „ppa.“; ausdrücklich erteilt, im Handelsregister eingetragen (deklaratorisch)." },
    { topic: "vollmachten", f: "Was darf ein Prokurist nicht?", b: "Bilanz/Steuererklärung unterschreiben, Prokura erteilen, Insolvenz anmelden, Gesellschafter aufnehmen, Geschäft verkaufen; Grundstücke veräußern oder belasten nur mit Sonderbefugnis." },
    { topic: "vollmachten", f: "Arten der Handlungsvollmacht", b: "Allgemeine (alle gewöhnlichen Geschäfte), Artvollmacht (bestimmte Geschäftsart), Einzelvollmacht (ein Geschäft)." },
    { topic: "vollmachten", f: "§ 50 HGB", b: "Innenbeschränkungen der Prokura sind gegenüber Dritten unwirksam." },
    { topic: "aufbauorganisation", f: "Stelle / Instanz", b: "Stelle = kleinste organisatorische Einheit. Instanz = Stelle mit Leitungs- und Weisungsbefugnis." },
    { topic: "aufbauorganisation", f: "Leitungsspanne", b: "Anzahl der einer Instanz direkt unterstellten Stellen; groß → flache Hierarchie." },
    { topic: "aufbauorganisation", f: "Stabliniensystem", b: "Einliniensystem plus beratende Stabsstellen ohne Weisungsbefugnis." },
    { topic: "aufbauorganisation", f: "Matrixorganisation", b: "Funktion × Objekt (Produkt/Projekt); zwei Weisungslinien; Nachteil: Kompetenzkonflikte." },
    { topic: "aufbauorganisation", f: "Spartenorganisation", b: "Gliederung nach Produkten, Regionen oder Kunden; Vorteil Marktnähe, Nachteil Doppelarbeit." },
    { topic: "geschaeftsprozesse", f: "Kern-, Unterstützungs-, Managementprozesse", b: "Schaffen Kundennutzen – ermöglichen die Kernprozesse – planen und steuern das Unternehmen." },
    { topic: "geschaeftsprozesse", f: "Primäre Aktivitäten nach Porter", b: "Eingangslogistik, Operationen, Ausgangslogistik, Marketing & Vertrieb, Kundendienst." },
    { topic: "geschaeftsprozesse", f: "Wertschöpfung", b: "Umsatz (Produktionswert) − Vorleistungen; verteilt auf Löhne, Zinsen, Steuern, Gewinn." },
    { topic: "geschaeftsprozesse", f: "Durchlaufzeit", b: "Bearbeitungszeit + Liegezeit + Transportzeit." },
    { topic: "geschaeftsprozesse", f: "PDCA", b: "Plan – Do – Check – Act; Grundlage des kontinuierlichen Verbesserungsprozesses (KVP)." },
    { topic: "duales-system", f: "Probezeit in der Ausbildung", b: "1 bis 4 Monate (§ 20 BBiG); Kündigung jederzeit ohne Frist, aber schriftlich." },
    { topic: "duales-system", f: "Kündigung nach der Probezeit", b: "Fristlos nur aus wichtigem Grund; Azubi bei Berufsaufgabe/-wechsel mit 4 Wochen Frist – schriftlich mit Grund." },
    { topic: "duales-system", f: "Urlaub nach JArbSchG", b: "30 / 27 / 25 Werktage, wenn zu Jahresbeginn noch nicht 16 / 17 / 18 Jahre alt." },
    { topic: "duales-system", f: "Aufgaben der IHK", b: "Verträge eintragen, Eignung überwachen, Ausbildungsberatung, Prüfungen abnehmen, Schlichtung." },
    { topic: "duales-system", f: "Ausbildungsrahmenplan vs. Rahmenlehrplan", b: "Rahmenplan: Betrieb, Teil der Ausbildungsordnung (Bund). Rahmenlehrplan: Berufsschule (KMK, Lernfelder)." },
    { topic: "pruefung-weiterbildung", f: "Gewichtung Abschlussprüfung FISI", b: "AP1 20 %, Projekt 50 %, Konzeption/Administration 10 %, Netzwerke 10 %, WiSo 10 %." },
    { topic: "pruefung-weiterbildung", f: "Projektarbeit FISI", b: "Höchstens 40 h inkl. Doku; Präsentation max. 15 min + Fachgespräch, zusammen max. 30 min." },
    { topic: "pruefung-weiterbildung", f: "Mündliche Ergänzungsprüfung", b: "Auf Antrag in einem schriftlichen AP2-Bereich unter 50 Punkten, wenn sie für das Bestehen den Ausschlag geben kann; neu = (2 × alt + mündlich) ÷ 3." },
    { topic: "rolle-kommunikation", f: "Vier Seiten einer Nachricht", b: "Sachinhalt, Selbstoffenbarung, Beziehung, Appell (Schulz von Thun)." },
    { topic: "rolle-kommunikation", f: "Intra- vs. Interrollenkonflikt", b: "Intra: widersprüchliche Erwartungen an eine Rolle. Inter: Erwartungen verschiedener Rollen kollidieren." },
    { topic: "rolle-kommunikation", f: "Teamphasen nach Tuckman", b: "Forming – Storming – Norming – Performing – Adjourning." },
    { topic: "selbstorganisation", f: "Eisenhower-Matrix", b: "A wichtig+dringend: sofort; B wichtig: planen; C dringend: delegieren; D: streichen." },
    { topic: "selbstorganisation", f: "ALPEN-Methode", b: "Aufgaben, Länge schätzen, Pufferzeit (60:40), Entscheidungen, Nachkontrolle." },
    { topic: "nachhaltigkeit-csr", f: "CSR", b: "Freiwillige gesellschaftliche Verantwortung über Gesetze hinaus: Markt, Arbeitsplatz, Umwelt, Gemeinwesen." },
    { topic: "nachhaltigkeit-csr", f: "PUE", b: "Gesamtenergie Rechenzentrum ÷ Energie der IT-Geräte; Idealwert 1,0." },
    { topic: "nachhaltigkeit-csr", f: "Abfallhierarchie", b: "Vermeidung → Wiederverwendung → Recycling → sonstige Verwertung → Beseitigung." },
    { topic: "projekt-praesentation", f: "Magisches Dreieck", b: "Leistung/Qualität – Zeit – Kosten beeinflussen sich gegenseitig." },
    { topic: "projekt-praesentation", f: "Aufbau einer Präsentation", b: "Einleitung (Ziel, Agenda, Einstieg) – Hauptteil – Schluss (Zusammenfassung, Fazit, Fragen)." },
    { topic: "machbarkeit-kalkulation", f: "Vorkalkulation vs. Nachkalkulation", b: "Vorher mit Schätzwerten (Grundlage des Angebots) – nachher mit Ist-Werten (Soll-Ist-Vergleich, Lessons Learned)." },
    { topic: "machbarkeit-kalkulation", f: "Kalkulationsschema Angebotspreis", b: "Personalkosten + Sachkosten + Gemeinkosten = Selbstkosten; + Gewinn = Nettopreis; + 19 % USt = Bruttopreis." },
    { topic: "machbarkeit-kalkulation", f: "Risikowert", b: "Eintrittswahrscheinlichkeit × Schadenshöhe; Strategien: vermeiden, vermindern, übertragen, akzeptieren." },
    { topic: "machbarkeit-kalkulation", f: "Dimensionen der Machbarkeit", b: "Technisch, personell, terminlich, wirtschaftlich (Budget), rechtlich." },
    { topic: "ziele-leitbild", f: "Gewinn", b: "Umsatz (Erträge) − Kosten (Aufwendungen)." },
    { topic: "ziele-leitbild", f: "Sachziel vs. Formalziel", b: "Sachziel: was geleistet wird (Produkte, Dienstleistungen). Formalziel: wirtschaftlicher Erfolg (Gewinn, Rentabilität, Liquidität)." },
    { topic: "unternehmen-system", f: "Produktionsfaktoren (BWL)", b: "Elementarfaktoren: ausführende Arbeit, Betriebsmittel, Werkstoffe. Dispositiver Faktor: leitende Arbeit (planen, organisieren, kontrollieren)." },
    { topic: "unternehmen-system", f: "Rohstoff – Hilfsstoff – Betriebsstoff", b: "Hauptbestandteil des Produkts – Nebenbestandteil – wird verbraucht, geht aber nicht ins Produkt ein (z. B. Strom)." },
    { topic: "ziele-leitbild", f: "Indexzahl", b: "Wert im Berichtsjahr ÷ Wert im Basisjahr × 100 (Basisjahr = 100). Differenz zweier Indexwerte = Prozentpunkte, nicht Prozent." },
    { topic: "rechtsformen", f: "Gewinnverteilung OHG/KG ohne Vertragsregel (seit 2024)", b: "1. vereinbarte Beteiligungsverhältnisse → 2. Verhältnis der vereinbarten Einlagewerte → 3. nach Köpfen." },
    { topic: "rechtsformen", f: "eG – e. V. – gGmbH – Stiftung", b: "Mitgliederförderung (Genossenschaftsregister) – ideeller Zweck (Vereinsregister) – gemeinnützige GmbH ohne Ausschüttung – zweckgebundenes Vermögen ohne Mitglieder." },
    { topic: "duales-system", f: "JAV (Jugend- und Auszubildendenvertretung)", b: "Ab 5 Beschäftigten unter 18 oder Azubis unter 25 in Betrieben mit Betriebsrat; wählbar unter 25; Amtszeit 2 Jahre." },
    { topic: "duales-system", f: "§ 15 BBiG: Berufsschule und Arbeit", b: "Keine Beschäftigung vor Unterricht, der vor 9 Uhr beginnt; einmal pro Woche ist ein Berufsschultag mit mehr als 5 Unterrichtsstunden à 45 min ganz frei (zählt als durchschnittlicher Ausbildungstag); frei am Arbeitstag vor der schriftlichen Abschlussprüfung." },
    { topic: "duales-system", f: "Inhalte der Ausbildungsordnung (§ 5 BBiG)", b: "Berufsbezeichnung, Dauer (2–3 Jahre), Berufsbild, Ausbildungsrahmenplan, Prüfungsanforderungen." },
    { topic: "projekt-praesentation", f: "Passende Diagrammart", b: "Anteile → Kreis; Vergleich → Säule/Balken; Entwicklung über die Zeit → Linie; Strukturen → Organigramm." },
    { topic: "projekt-praesentation", f: "Quellen prüfen", b: "Urheber, Aktualität, Belege/Zweitquelle, Interessen (Werbung?). KI-Texte sind keine Quelle – Fakten im Original prüfen." },
  ],
  checklist: [
    { id: "c-system-1", topic: "unternehmen-system", text: "Ich kann Betrieb, Unternehmen und Firma voneinander abgrenzen und das Unternehmen als offenes System mit Input, Leistungserstellung und Output beschreiben.", exam: ["AP2"] },
    { id: "c-system-2", topic: "unternehmen-system", text: "Ich kann Unternehmen dem primären, sekundären oder tertiären Sektor zuordnen und Maximal- und Minimalprinzip an Beispielen unterscheiden.", exam: ["AP2"] },
    { id: "c-system-4", topic: "unternehmen-system", text: "Ich kann die betriebswirtschaftlichen Produktionsfaktoren nennen, Beispiele aus einem IT-Betrieb zuordnen und die Leistungsschwerpunkte sowie Kunden und Lieferanten meines Ausbildungsbetriebs beschreiben.", exam: ["AP2"] },
    { id: "c-system-3", topic: "unternehmen-system", text: "Ich kann interne und externe Stakeholder meines Betriebs mit ihren Interessen nennen und sie in einer Einfluss-Interesse-Matrix einordnen.", exam: ["AP1", "AP2"] },
    { id: "c-ziele-1", topic: "ziele-leitbild", text: "Ich kann ökonomische, ökologische und soziale Ziele meines Betriebs nennen und Zielharmonie, Zielkonflikt und Zielneutralität an Beispielen erklären.", exam: ["AP1", "AP2"] },
    { id: "c-ziele-2", topic: "ziele-leitbild", text: "Ich kann ein Ziel nach der SMART-Regel formulieren und prüfen.", exam: ["AP1"] },
    { id: "c-ziele-3", topic: "ziele-leitbild", text: "Ich kann Produktivität, Wirtschaftlichkeit sowie Eigenkapital-, Umsatz- und Gesamtkapitalrentabilität berechnen und interpretieren.", exam: ["AP2"] },
    { id: "c-ziele-5", topic: "ziele-leitbild", text: "Ich kann Indexzahlen zu einem Basisjahr berechnen, eine Entwicklung damit beschreiben und Prozentpunkte von Prozent unterscheiden.", exam: ["AP2"] },
    { id: "c-ziele-4", topic: "ziele-leitbild", text: "Ich kann Mission, Vision und Werte des Leitbilds meines Ausbildungsbetriebs erläutern und den Begriff Corporate Identity erklären." },
    { id: "c-markt-1", topic: "markt-wettbewerb", text: "Ich kann Marktformen nach Anzahl der Anbieter und Nachfrager bestimmen und Beispiele aus der IT-Branche zuordnen.", exam: ["AP1"] },
    { id: "c-markt-2", topic: "markt-wettbewerb", text: "Ich kann Käufer- und Verkäufermarkt unterscheiden und aus einer Tabelle Gleichgewichtspreis sowie Angebots- und Nachfrageüberhang bestimmen.", exam: ["AP1", "AP2"] },
    { id: "c-markt-3", topic: "markt-wettbewerb", text: "Ich kann Zielgruppen abgrenzen, direkten und indirekten Vertrieb unterscheiden sowie Kartell, Konzern und Fusion erklären.", exam: ["AP1", "AP2"] },
    { id: "c-recht-1", topic: "rechtsformen", text: "Ich kann Einzelunternehmen, GbR, OHG, KG, GmbH, UG und AG nach Haftung, Mindestkapital, Geschäftsführung und Handelsregister-Abteilung vergleichen.", exam: ["AP2"] },
    { id: "c-recht-2", topic: "rechtsformen", text: "Ich kann eine Gewinnverteilung nach Gesellschaftsvertrag berechnen und die Mindesteinzahlung bei der GmbH-Gründung prüfen.", exam: ["AP2"] },
    { id: "c-recht-4", topic: "rechtsformen", text: "Ich kann die gesetzliche Gewinnverteilung bei OHG und KG seit 2024 erklären und Genossenschaft, Verein, gGmbH und Stiftung einordnen.", exam: ["AP2"] },
    { id: "c-recht-3", topic: "rechtsformen", text: "Ich kann die Rechtsform meines Ausbildungsbetriebs erläutern und für eine Gründung eine begründete Empfehlung geben." },
    { id: "c-voll-1", topic: "vollmachten", text: "Ich kann Prokura und Handlungsvollmacht nach Erteilung, Umfang, Eintragung und Unterschriftszusatz unterscheiden.", exam: ["AP1", "AP2"] },
    { id: "c-voll-2", topic: "vollmachten", text: "Ich kann an Fallbeispielen beurteilen, ob ein Prokurist oder Handlungsbevollmächtigter ein Geschäft wirksam abschließen darf.", exam: ["AP1", "AP2"] },
    { id: "c-voll-3", topic: "vollmachten", text: "Ich kann meinen eigenen Entscheidungsspielraum als Azubi beschreiben und begründen, wann ich Rücksprache halten oder eskalieren muss.", exam: ["AP1"] },
    { id: "c-org-1", topic: "aufbauorganisation", text: "Ich kann Stelle, Instanz, Stabsstelle, Abteilung, Leitungsspanne und Gliederungstiefe erklären und in einem Organigramm bestimmen.", exam: ["AP2"] },
    { id: "c-org-2", topic: "aufbauorganisation", text: "Ich kann Einlinien-, Mehrlinien-, Stablinien-, Sparten- und Matrixorganisation mit je einem Vor- und Nachteil beschreiben.", exam: ["AP1", "AP2"] },
    { id: "c-org-3", topic: "aufbauorganisation", text: "Ich kann das Organigramm meines Ausbildungsbetriebs skizzieren und meine eigene Stelle darin einordnen." },
    { id: "c-proz-1", topic: "geschaeftsprozesse", text: "Ich kann Kern-, Unterstützungs- und Managementprozesse unterscheiden und Beispiele aus meinem Betrieb zuordnen.", exam: ["AP1", "AP2"] },
    { id: "c-proz-2", topic: "geschaeftsprozesse", text: "Ich kann die Wertschöpfungskette nach Porter erklären, die Wertschöpfung berechnen und meine Rolle darin verorten.", exam: ["AP1"] },
    { id: "c-proz-3", topic: "geschaeftsprozesse", text: "Ich kann Durchlaufzeit und Soll-Ist-Abweichung berechnen und den PDCA-Zyklus auf ein Beispiel anwenden.", exam: ["AP1"] },
    { id: "c-dual-1", topic: "duales-system", text: "Ich kann Lernorte, Rechtsgrundlagen und Aufgaben von Betrieb, Berufsschule und IHK im dualen System beschreiben.", exam: ["AP2"] },
    { id: "c-dual-2", topic: "duales-system", text: "Ich kann die Mindestinhalte des Ausbildungsvertrags sowie die Pflichten von Azubi und Ausbildendem nennen.", exam: ["AP2"] },
    { id: "c-dual-3", topic: "duales-system", text: "Ich kann Regeln zu Probezeit, Kündigung, Ende der Ausbildung, Urlaub und Anrechnung der Berufsschulzeit auf einen Fall anwenden.", exam: ["AP2"] },
    { id: "c-dual-5", topic: "duales-system", text: "Ich kann die Freistellungsregeln für Berufsschule und Prüfung anwenden und nennen, an wen ich mich bei Problemen in der Ausbildung wende (Ausbilder, JAV, Betriebsrat, Ausbildungsberater der IHK).", exam: ["AP2"] },
    { id: "c-dual-4", topic: "duales-system", text: "Ich führe meinen Ausbildungsnachweis regelmäßig und weiß, dass er Zulassungsvoraussetzung für die Abschlussprüfung ist." },
    { id: "c-pruef-1", topic: "pruefung-weiterbildung", text: "Ich kann den Aufbau der gestreckten Abschlussprüfung (AP1/AP2) mit Dauer und Gewichtung erklären und mein Gesamtergebnis berechnen.", exam: ["AP2"] },
    { id: "c-pruef-2", topic: "pruefung-weiterbildung", text: "Ich kann die vier Bestehensregeln anwenden und berechnen, wie viele Punkte in einer mündlichen Ergänzungsprüfung nötig sind.", exam: ["AP2"] },
    { id: "c-pruef-3", topic: "pruefung-weiterbildung", text: "Ich kann Wege der Fort- und Weiterbildung (Aufstiegsfortbildung, Zertifikate, Studium, Förderung) aufzeigen.", exam: ["AP2"] },
    { id: "c-rolle-1", topic: "rolle-kommunikation", text: "Ich kann meine Rollen im Betrieb beschreiben und Intra- und Interrollenkonflikte erkennen und ansprechen.", exam: ["AP2"] },
    { id: "c-rolle-2", topic: "rolle-kommunikation", text: "Ich kann eine Aussage mit dem Sender-Empfänger- und dem Vier-Seiten-Modell analysieren und professionell darauf reagieren.", exam: ["AP1"] },
    { id: "c-rolle-3", topic: "rolle-kommunikation", text: "Ich kann Feedback nach Regeln geben und annehmen, eine geschäftliche E-Mail korrekt formulieren und die Teamphasen nach Tuckman nennen.", exam: ["AP1", "AP2"] },
    { id: "c-selbst-1", topic: "selbstorganisation", text: "Ich kann Aufgaben mit der Eisenhower-Matrix priorisieren und einen Tagesplan nach der ALPEN-Methode erstellen.", exam: ["AP1"] },
    { id: "c-selbst-2", topic: "selbstorganisation", text: "Ich kenne die Arbeitszeit- und Pausenregeln für Jugendliche und Erwachsene und nutze KI-Werkzeuge datenschutzkonform.", exam: ["AP1", "AP2"] },
    { id: "c-nach-1", topic: "nachhaltigkeit-csr", text: "Ich kann CSR und Greenwashing erklären und Green in IT von Green by IT mit Beispielen abgrenzen.", exam: ["AP1", "AP2"] },
    { id: "c-nach-2", topic: "nachhaltigkeit-csr", text: "Ich kann Energieeinsparungen, Kosten und den PUE-Wert berechnen und die Abfallhierarchie auf IT-Altgeräte anwenden.", exam: ["AP1", "AP2"] },
    { id: "c-proj-1", topic: "projekt-praesentation", text: "Ich kann Projektmerkmale, das magische Dreieck und die Projektphasen nennen sowie Wasserfall und Scrum unterscheiden.", exam: ["AP1"] },
    { id: "c-proj-2", topic: "projekt-praesentation", text: "Ich kann im Team eine zielgruppengerechte Unternehmenspräsentation gliedern, gestalten, halten und mit gewichteten Kriterien bewerten.", exam: ["AP1", "AP2"] },
    { id: "c-proj-3", topic: "projekt-praesentation", text: "Ich kann für Zahlen die passende Diagrammart wählen und Quellen nach Urheber, Aktualität, Belegen und Interessen beurteilen sowie Bildrechte beachten.", exam: ["AP1"] },
    { id: "c-kalk-1", topic: "machbarkeit-kalkulation", text: "Ich kann Stundensätze und Einsatzkosten berechnen und eine Vorkalkulation mit Gemeinkosten-, Gewinnzuschlag und Umsatzsteuer erstellen.", exam: ["AP1"] },
    { id: "c-kalk-2", topic: "machbarkeit-kalkulation", text: "Ich kann die Machbarkeit eines Auftrags gegen eine Budgetvorgabe prüfen, eine Nachkalkulation mit prozentualer Abweichung durchführen und Risiken als Wahrscheinlichkeit × Schaden bewerten.", exam: ["AP1"] },
  ],
  glossary: [
    { term: "Abfallhierarchie", def: "Fünfstufige Rangfolge des Kreislaufwirtschaftsgesetzes: Vermeidung, Vorbereitung zur Wiederverwendung, Recycling, sonstige Verwertung, Beseitigung." },
    { term: "Ablauforganisation", def: "Regelt die zeitliche, räumliche und logische Abfolge der Arbeitsschritte, also wie, wann, wo und womit gearbeitet wird." },
    { term: "Aufbauorganisation", def: "Dauerhafte Struktur eines Unternehmens aus Stellen, Instanzen und Abteilungen mit ihren Zuständigkeiten und Weisungsbeziehungen." },
    { term: "Ausbildungsnachweis", def: "Schriftlich oder elektronisch geführter Nachweis über die Ausbildungsinhalte (Berichtsheft); Zulassungsvoraussetzung zur Abschlussprüfung." },
    { term: "Ausbildungsrahmenplan", def: "Teil der Ausbildungsordnung, der die sachliche und zeitliche Gliederung der betrieblichen Ausbildung vorgibt." },
    { term: "BBiG", def: "Berufsbildungsgesetz – regelt u. a. Ausbildungsvertrag, Rechte und Pflichten, Probezeit, Kündigung und Prüfungen in der dualen Ausbildung." },
    { term: "CSR (Corporate Social Responsibility)", def: "Freiwillige Übernahme gesellschaftlicher Verantwortung durch Unternehmen über gesetzliche Pflichten hinaus." },
    { term: "Duales System", def: "Berufsausbildung an zwei Lernorten: im Ausbildungsbetrieb (Praxis) und in der Berufsschule (Theorie)." },
    { term: "Eigenkapitalrentabilität", def: "Verzinsung des eingesetzten Eigenkapitals: Gewinn ÷ Eigenkapital × 100 %." },
    { term: "Firma", def: "Name, unter dem ein Kaufmann seine Geschäfte betreibt und seine Unterschrift abgibt (§ 17 HGB)." },
    { term: "Geschäftsprozess", def: "Folge logisch verbundener Tätigkeiten, die durch ein Ereignis ausgelöst wird und ein Ergebnis mit Wert für einen internen oder externen Kunden liefert." },
    { term: "Gestreckte Abschlussprüfung", def: "Abschlussprüfung in zwei zeitlich getrennten Teilen (AP1 im 4. Halbjahr, AP2 am Ende), die beide in das Gesamtergebnis eingehen." },
    { term: "Handelsregister", def: "Öffentliches, elektronisches Verzeichnis der Kaufleute beim Amtsgericht; Abteilung A für Einzelkaufleute und Personenhandelsgesellschaften, Abteilung B für Kapitalgesellschaften." },
    { term: "Handlungsvollmacht", def: "Formlos erteilte Vollmacht für gewöhnliche Geschäfte eines Handelsgewerbes (allgemein, Art- oder Einzelvollmacht); keine Eintragung ins Handelsregister." },
    { term: "Instanz", def: "Stelle mit Leitungs-, Weisungs- und Entscheidungsbefugnis gegenüber untergeordneten Stellen." },
    { term: "Kartell", def: "Absprache rechtlich und wirtschaftlich selbstständiger Unternehmen zur Beschränkung des Wettbewerbs; grundsätzlich verboten." },
    { term: "Konzern", def: "Zusammenschluss rechtlich selbstständiger Unternehmen unter einheitlicher wirtschaftlicher Leitung." },
    { term: "Leitbild", def: "Schriftlich festgelegte Grundsätze eines Unternehmens zu Mission, Vision und Werten; Orientierung nach innen und Image nach außen." },
    { term: "Leitungsspanne", def: "Anzahl der Stellen, die einer Instanz direkt unterstellt sind." },
    { term: "Marktform", def: "Einteilung von Märkten nach der Anzahl der Anbieter und Nachfrager, z. B. Polypol, Oligopol, Monopol." },
    { term: "Matrixorganisation", def: "Organisationsform, die Funktionen und Objekte (Produkte, Projekte) kombiniert; Mitarbeitende haben zwei Weisungslinien." },
    { term: "Prokura", def: "Umfassende, ausdrücklich erteilte und im Handelsregister eingetragene Vollmacht für alle Geschäfte, die der Betrieb eines Handelsgewerbes mit sich bringt; Zusatz „ppa.“." },
    { term: "Probezeit", def: "Anfangsphase der Ausbildung von 1 bis 4 Monaten, in der beide Seiten jederzeit ohne Frist schriftlich kündigen können." },
    { term: "Produktivität", def: "Mengenmäßiges Verhältnis von Ausbringungsmenge zu Einsatzmenge, z. B. gelöste Tickets pro Arbeitsstunde." },
    { term: "Rechtsform", def: "Rechtlicher Rahmen eines Unternehmens, der Haftung, Kapitalaufbringung, Geschäftsführung und Gewinnverteilung regelt." },
    { term: "Stabsstelle", def: "Stelle, die eine Instanz berät und unterstützt, aber keine Weisungsbefugnis gegenüber der Linie hat." },
    { term: "Stakeholder", def: "Person oder Gruppe mit Interessen an einem Unternehmen oder Projekt, z. B. Eigentümer, Mitarbeitende, Kunden, Lieferanten, Staat." },
    { term: "Stelle", def: "Kleinste organisatorische Einheit; Aufgabenbereich, der auf eine gedachte Person zugeschnitten ist." },
    { term: "Wertschöpfung", def: "Wert, den ein Unternehmen den bezogenen Vorleistungen hinzufügt: Produktionswert (Umsatz) minus Vorleistungen." },
    { term: "Wertschöpfungskette", def: "Modell nach Porter, das die Aktivitäten eines Unternehmens in primäre (direkt wertschöpfende) und unterstützende Aktivitäten gliedert." },
    { term: "Wirtschaftlichkeit", def: "Wertmäßiges Verhältnis von Erträgen (Leistungen) zu Aufwendungen (Kosten); Werte über 1 bedeuten wirtschaftliches Arbeiten." },
    { term: "Zielkonflikt", def: "Zielbeziehung, bei der die Verfolgung eines Ziels die Erreichung eines anderen Ziels beeinträchtigt." },
    { term: "Machbarkeitsanalyse", def: "Prüfung, ob ein Vorhaben technisch, personell, terminlich, wirtschaftlich und rechtlich umsetzbar ist, z. B. durch Vergleich der Kosten mit einer Budgetvorgabe." },
    { term: "Vorkalkulation", def: "Kostenrechnung vor Auftragsbeginn mit geschätzten Mengen und Zeiten; Grundlage für den Angebotspreis." },
    { term: "Nachkalkulation", def: "Kostenrechnung nach Auftragsabschluss mit Ist-Werten; zeigt Abweichungen zur Vorkalkulation und das tatsächliche Auftragsergebnis." },
    { term: "Dispositiver Faktor", def: "Leitende Arbeit, die die Elementarfaktoren (ausführende Arbeit, Betriebsmittel, Werkstoffe) plant, organisiert, leitet und kontrolliert." },
    { term: "Indexzahl", def: "Verhältniszahl, die einen Wert auf den Wert eines Basisjahres (= 100) bezieht: Berichtswert ÷ Basiswert × 100." },
    { term: "Jugend- und Auszubildendenvertretung (JAV)", def: "Gewählte Vertretung der Beschäftigten unter 18 und der Azubis unter 25 in Betrieben mit Betriebsrat; bringt deren Anliegen über den Betriebsrat ein." },
    { term: "Ausbildungsordnung", def: "Bundesweit geltende Rechtsverordnung für einen Ausbildungsberuf (für FISI die FIAusbV) mit Berufsbild, Dauer, Ausbildungsrahmenplan und Prüfungsanforderungen." },
    { term: "Genossenschaft (eG)", def: "Rechtsform zur Förderung der Mitglieder durch einen gemeinsamen Geschäftsbetrieb; Eintragung im Genossenschaftsregister, grundsätzlich eine Stimme je Mitglied." },
  ],
  links: [
    { title: "Berufsbildungsgesetz (BBiG)", url: "https://www.gesetze-im-internet.de/bbig_2005/", note: "Ausbildungsvertrag, Rechte und Pflichten, Probezeit, Kündigung, Prüfungen" },
    { title: "Fachinformatiker-Ausbildungsverordnung (FIAusbV)", url: "https://www.gesetze-im-internet.de/fiausbv/", note: "Ausbildungsrahmenplan, Aufbau und Gewichtung der Abschlussprüfung (FISI: §§ 18–25)" },
    { title: "KMK-Rahmenlehrplan Fachinformatiker/-in (2019)", url: "https://www.kmk.org/fileadmin/Dateien/pdf/Bildung/BeruflicheBildung/rlp/Fachinformatiker_19-12-13_EL.pdf", note: "Lernfeld 1 im Original" },
    { title: "Handelsgesetzbuch (HGB)", url: "https://www.gesetze-im-internet.de/hgb/", note: "Kaufmann, Firma, Handelsregister, Prokura und Handlungsvollmacht, OHG und KG" },
    { title: "GmbH-Gesetz (GmbHG)", url: "https://www.gesetze-im-internet.de/gmbhg/", note: "Stammkapital, Einzahlung, UG (haftungsbeschränkt) in § 5a" },
    { title: "Jugendarbeitsschutzgesetz (JArbSchG)", url: "https://www.gesetze-im-internet.de/jarbschg/", note: "Arbeitszeit, Pausen, Urlaub für Azubis unter 18" },
    { title: "Arbeitszeitgesetz (ArbZG)", url: "https://www.gesetze-im-internet.de/arbzg/", note: "Arbeitszeit, Pausen und Ruhezeiten für Erwachsene" },
    { title: "Betriebsverfassungsgesetz (BetrVG)", url: "https://www.gesetze-im-internet.de/betrvg/", note: "Betriebsrat und Jugend- und Auszubildendenvertretung (§§ 60 ff.)" },
    { title: "Gemeinsames Registerportal der Länder", url: "https://www.handelsregister.de", note: "Handelsregister-Einträge (z. B. deines Ausbildungsbetriebs) einsehen" },
    { title: "Bundesinstitut für Berufsbildung (BIBB)", url: "https://www.bibb.de", note: "Informationen zu Ausbildungsberufen, Ausbildungsordnungen und Fortbildung" },
  ]
});
