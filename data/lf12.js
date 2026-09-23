/* LF 12b – Kundenspezifische Systemintegration durchführen */
LEARN.module({
  id: "lf12",
  type: "lf",
  nr: 12,
  title: "Kundenspezifische Systemintegration durchführen",
  year: 3,
  hours: 120,
  exam: ["AP1", "AP2"],
  summary: "Du führst einen Kundenauftrag der Systemintegration vollständig durch: von der Anforderungsanalyse über Projektplanung (klassisch und agil), Kosten-, Wirtschaftlichkeits- und Risikobetrachtung bis zu Tests, Migration, Abnahme, Übergabe und Projektbewertung. Gleichzeitig bereitet dich das Lernfeld gezielt auf die betriebliche Projektarbeit der AP2 vor – sie zählt 50 % der Gesamtnote: Projektantrag, Dokumentation, Präsentation und Fachgespräch.",
  goals: [
    "Mit dem Kunden eine Anforderungsanalyse durchführen (Ist-Analyse, Soll-Konzept, Stakeholder) und daraus SMART-Ziele, Lastenheft- und Pflichtenheftinhalte ableiten",
    "Ein Projekt organisieren und ein passendes Vorgehensmodell (Wasserfall, V-Modell, Scrum, Kanban) begründet auswählen",
    "Projekte mit Projektstrukturplan, Meilensteinen, Netzplan und Gantt-Diagramm planen und Termine im Kalender festlegen",
    "Personal- und Sachkosten, Stundensätze, Vor- und Nachkalkulation sowie Angebotspreise berechnen",
    "Lösungsalternativen technisch, wirtschaftlich und qualitativ vergleichen (Nutzwertanalyse, Kostenvergleich, Amortisation, Make-or-Buy)",
    "Projektrisiken und Schwachstellen bewerten und passende Maßnahmen zur Risikobehandlung und IT-Sicherheit ableiten",
    "Ein Testkonzept mit Testfällen und Abnahmekriterien erstellen, Changes, Migrationen und Rollouts mit Rückfallplan planen",
    "Vertragsarten, Abnahme und Rechtsfolgen im Kundenprojekt (BGB, HGB, AGB, UWG, Compliance) sicher anwenden",
    "Ergebnisse übergeben: Abnahme- und Übergabeprotokoll, Schulungskonzept, Benutzer- und Systemdokumentation, Soll-Ist-Vergleich und Lessons Learned",
    "Die IHK-Projektarbeit planen und bestehen: geeignetes Thema, Projektantrag, 40-Stunden-Zeitplan, Dokumentation, Präsentation und Fachgespräch"
  ],
  school: {
    hinweise: "Für LF 12b liegt kein Moodle-Kurs der Klasse vor. Die Inhalte folgen dem KMK-Rahmenlehrplan (120 Stunden im 3. Ausbildungsjahr), dem ZPA-Prüfungskatalog (2. Auflage) und den Hinweisen der IHK Flensburg zur betrieblichen Projektarbeit. Das Lernfeld läuft parallel zu deinem eigenen IHK-Abschlussprojekt: Nutze die Übungen als Vorlage für Projektantrag, Kostenplanung, Testprotokoll und Präsentation. Fristen und Umfangsvorgaben der IHK Flensburg sind vor der Abgabe immer mit dem PIN-Schreiben bzw. dem Bildungsportal abzugleichen.",
    themen: [
      "Kundenanfrage analysieren und Leistungsumfang festlegen",
      "Projektorganisation, Projektziele und Vorgehensmodelle",
      "Projektstrukturplan, Netzplan und Gantt-Diagramm",
      "Ressourcen-, Kosten- und Angebotsplanung",
      "Lösungsvarianten bewerten: Nutzwertanalyse, Amortisation, Make-or-Buy",
      "Risikomanagement und Schwachstellenanalyse",
      "Testkonzept, Change, Migration und Rollout",
      "Verträge, Abnahme und Übergabe an den Kunden",
      "Projektbewertung und Lessons Learned",
      "IHK-Projektarbeit: Antrag, Dokumentation, Präsentation, Fachgespräch"
    ]
  },
  topics: [
    {
      id: "projekt-grundlagen",
      title: "Projekt, Projektziele & Projektorganisation",
      exam: ["AP1", "AP2"],
      summary: "Projektmerkmale erkennen, das magische Dreieck anwenden, Projektziele SMART formulieren, einen Projektauftrag aufsetzen und die passende Projektorganisation samt Rollen und Teamphasen wählen.",
      html: `
    <p>Fast jeder Kundenauftrag in der Systemintegration – neues WLAN, Servermigration, Backupsystem – läuft als <strong>Projekt</strong>. Auch deine IHK-Projektarbeit (AP2) ist eines.</p>
    <h5>Was ist ein Projekt?</h5>
    <p>Nach DIN 69901-5 ist ein Projekt ein Vorhaben, das sich durch die <strong>Einmaligkeit seiner Bedingungen</strong> in ihrer Gesamtheit auszeichnet. Typische Merkmale:</p>
    <table><thead><tr><th>Merkmal</th><th>Bedeutung</th><th>Beispiel „Einführung 802.1X bei der Nordlicht IT GmbH“</th></tr></thead><tbody>
      <tr><td><strong>Einmaligkeit</strong></td><td>in dieser Form noch nie durchgeführt</td><td>erste Netzwerk-Zugangskontrolle im Unternehmen</td></tr>
      <tr><td><strong>klares Ziel</strong></td><td>definiertes, überprüfbares Ergebnis</td><td>alle 45 Clients melden sich per Zertifikat am LAN an</td></tr>
      <tr><td><strong>zeitliche Begrenzung</strong></td><td>fester Anfang und festes Ende</td><td>19.10. bis 13.11.2026</td></tr>
      <tr><td><strong>begrenzte Ressourcen</strong></td><td>Budget, Personal, Sachmittel</td><td>4.500 € Budget, 1 Azubi + 1 Admin</td></tr>
      <tr><td><strong>Komplexität/Neuartigkeit</strong></td><td>viele Beteiligte, technisches Neuland</td><td>RADIUS, PKI, Switches, VLANs</td></tr>
      <tr><td><strong>Risiko</strong></td><td>Unsicherheit über Verlauf und Ergebnis</td><td>Altgeräte (Drucker) können kein 802.1X</td></tr>
      <tr><td><strong>eigene Organisation</strong></td><td>Projektleitung, Team, Auftraggeber</td><td>Projektleiter + Steuerungsrunde mit der Geschäftsführung</td></tr>
    </tbody></table>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> Wiederkehrende Aufgaben sind <strong>keine</strong> Projekte. „Jeden Monat 30 Clients patchen“ ist Routine (Linienaufgabe). „Einen WSUS für die zentrale Patchverteilung einführen“ ist dagegen ein Projekt – einmalig, befristet, mit klarem Ziel.</div>
    <h5>Magisches Dreieck</h5>
    <p>Jedes Projekt steht im Spannungsfeld aus <strong>Leistung/Qualität</strong> (Was wird geliefert?), <strong>Zeit</strong> (Termin) und <strong>Kosten</strong> (Budget). Ändert sich eine Ecke, wirkt das auf die anderen: Soll das Projekt früher fertig werden, steigen meist die Kosten (mehr Personal, Überstunden) oder die Leistung sinkt (weniger Funktionen). Erweitert man das Dreieck um die Menge (Quantität), spricht man vom <em>Teufelsquadrat</em>.</p>
    <pre class="ascii">          Leistung / Qualität
                 /\\
                /  \\
               /    \\
        Zeit  /______\\  Kosten</pre>
    <h5>Projektziele</h5>
    <p>Ziele werden in vier Dimensionen formuliert: <strong>Sachziel</strong> (Was entsteht?), <strong>Qualitätsziel</strong> (Wie gut?), <strong>Zeitziel</strong> (Bis wann?) und <strong>Kostenziel</strong> (Zu welchem Budget?). Zusätzlich legst du <strong>Nicht-Ziele</strong> fest, um den Umfang abzugrenzen (z. B. „Die Umstellung der Außenstelle Husum ist nicht Teil des Projekts“).</p>
    <div class="callout formel"><strong>SMART:</strong> <strong>S</strong>pezifisch · <strong>M</strong>essbar · <strong>A</strong>kzeptiert/attraktiv · <strong>R</strong>ealistisch · <strong>T</strong>erminiert</div>
    <div class="callout beispiel"><strong>Unscharf:</strong> „Das Netzwerk soll sicherer werden.“<br><strong>SMART:</strong> „Bis zum 13.11.2026 authentifizieren sich alle 45 Firmen-Clients der Nordlicht IT GmbH per 802.1X mit Gerätezertifikat; nicht authentifizierte Geräte landen automatisch im Gäste-VLAN 99. Die Projektkosten betragen höchstens 4.500 €.“</div>
    <h5>Projektauftrag</h5>
    <p>Der Projektauftrag ist der verbindliche Startschuss. Er enthält mindestens: Auftraggeber und Projektleitung, Ausgangssituation, Ziele und Nicht-Ziele, Budget, Start- und Endtermin mit Meilensteinen, Team und Ressourcen, bekannte Risiken sowie die Unterschrift des Auftraggebers. Danach folgt meist das <strong>Kick-off-Meeting</strong>: Auftraggeber, Projektleitung und Team lernen sich kennen und vereinbaren verbindlich Ziele, Rollen, Termine, Kommunikationswege (z. B. wöchentlicher Statusbericht) und Spielregeln.</p>
    <h5>Projektphasen (Projektmanagement-Prozess)</h5>
    <p>Unabhängig vom Vorgehensmodell durchläuft jedes Projekt typische Managementphasen. Die Norm DIN 69901 unterscheidet fünf Phasen:</p>
    <table><thead><tr><th>Phase</th><th>Leitfrage</th><th>typische Ergebnisse</th></tr></thead><tbody>
      <tr><td><strong>Initialisierung</strong></td><td>Lohnt sich das Vorhaben? Wer ist Auftraggeber?</td><td>Projektidee, grobe Ziele, Machbarkeit, Projektauftrag, Projektleitung benannt</td></tr>
      <tr><td><strong>Definition</strong></td><td>Was genau soll erreicht werden?</td><td>Ist-Analyse, Ziele und Nicht-Ziele, Lastenheft, Stakeholderanalyse, Kick-off</td></tr>
      <tr><td><strong>Planung</strong></td><td>Wie, wann, womit und zu welchen Kosten?</td><td>Projektstrukturplan, Termin-, Ressourcen-, Kosten-, Risiko- und QS-Planung</td></tr>
      <tr><td><strong>Steuerung</strong></td><td>Läuft alles nach Plan?</td><td>Soll-Ist-Vergleiche, Statusberichte, Änderungsanträge, Gegensteuerungsmaßnahmen</td></tr>
      <tr><td><strong>Abschluss</strong></td><td>Ist das Ziel erreicht? Was lernen wir?</td><td>Abnahme, Übergabe, Abschlussbericht, Lessons Learned</td></tr>
    </tbody></table>
    <p>Die Phasen deiner IHK-Zeitplanung (Analyse, Planung, Durchführung, Test, Übergabe, Dokumentation) sind eine praxisnahe Variante davon.</p>
    <h5>Projektorganisation</h5>
    <table><thead><tr><th>Form</th><th>Weisungsbefugnis der Projektleitung</th><th>Vorteile</th><th>Nachteile / Einsatz</th></tr></thead><tbody>
      <tr><td><strong>Stabs- bzw. Einfluss-Projektorganisation</strong></td><td>keine – PL berät und koordiniert, Entscheidungen trifft die Linie</td><td>kaum organisatorischer Aufwand, Mitarbeitende bleiben in ihren Abteilungen</td><td>langsame Entscheidungen, PL ohne Durchsetzungskraft; für kleine Projekte</td></tr>
      <tr><td><strong>Matrix-Projektorganisation</strong></td><td>fachlich-projektbezogen; disziplinarisch bleibt die Linie zuständig</td><td>flexibler Einsatz von Spezialisten, Wissen bleibt in den Abteilungen</td><td>Konflikte zwischen PL und Linienvorgesetzten; häufigste Form in IT-Firmen</td></tr>
      <tr><td><strong>Reine (autonome) Projektorganisation</strong></td><td>voll – fachlich und disziplinarisch</td><td>schnelle Entscheidungen, hohe Identifikation des Teams</td><td>teuer, Rückkehr der Mitarbeitenden in die Linie schwierig; für große, lange Projekte</td></tr>
    </tbody></table>
    <p><strong>Rollen:</strong> Der <strong>Auftraggeber</strong> gibt Ziele und Budget vor und nimmt ab. Ein <strong>Lenkungsausschuss</strong> (Steuerungskreis) entscheidet bei großen Abweichungen. Die <strong>Projektleitung</strong> plant, steuert und berichtet. Das <strong>Projektteam</strong> erledigt die Arbeitspakete, <strong>Key User</strong> bringen das Fachwissen der Anwender ein.</p>
    <h5>Verantwortungsmatrix (RACI)</h5>
    <p>Damit bei Arbeitspaketen klar ist, wer was tut, ordnet eine <strong>RACI-Matrix</strong> jeder Aufgabe Rollen zu: <strong>R</strong>esponsible (führt aus), <strong>A</strong>ccountable (trägt die Gesamtverantwortung und gibt frei – pro Aufgabe genau eine Person), <strong>C</strong>onsulted (wird vorher fachlich gefragt), <strong>I</strong>nformed (wird über das Ergebnis informiert).</p>
    <table><thead><tr><th>Aufgabe</th><th>Projektleitung</th><th>Administrator</th><th>Azubi</th><th>Geschäftsführung Kunde</th></tr></thead><tbody>
      <tr><td>RADIUS-Server einrichten</td><td>A</td><td>C</td><td>R</td><td>–</td></tr>
      <tr><td>Switches für 802.1X konfigurieren</td><td>A</td><td>R</td><td>C</td><td>–</td></tr>
      <tr><td>Testprotokoll erstellen</td><td>A</td><td>C</td><td>R</td><td>I</td></tr>
      <tr><td>Abnahme erklären</td><td>R</td><td>C</td><td>C</td><td>A</td></tr>
    </tbody></table>
    <div class="callout tipp"><strong>Tipp:</strong> In der Storming-Phase (siehe unten) entstehen viele Konflikte über Zuständigkeiten – eine früh abgestimmte RACI-Matrix beugt dem vor.</div>
    <h5>Teamentwicklung nach Tuckman</h5>
    <table><thead><tr><th>Phase</th><th>typisches Verhalten</th><th>Aufgabe der Projektleitung</th></tr></thead><tbody>
      <tr><td>Forming</td><td>höflich, unsicher, abwartend</td><td>Ziele und Rollen klären, Orientierung geben</td></tr>
      <tr><td>Storming</td><td>Konflikte, Machtkämpfe, Kritik</td><td>Konflikte moderieren, Regeln vereinbaren</td></tr>
      <tr><td>Norming</td><td>Regeln akzeptiert, Zusammenhalt wächst</td><td>Verantwortung übertragen</td></tr>
      <tr><td>Performing</td><td>selbstorganisiert, hohe Leistung</td><td>unterstützen, Hindernisse beseitigen</td></tr>
      <tr><td>Adjourning</td><td>Auflösung, Abschied</td><td>Erfolge würdigen, Lessons Learned sichern</td></tr>
    </tbody></table>
    <div class="callout merke"><strong>Merke:</strong> Projekt = einmalig + Ziel + befristet + begrenzte Ressourcen. Ziele immer in Sach-, Qualitäts-, Zeit- und Kostenziel aufteilen und SMART formulieren – genau das verlangt auch der IHK-Projektantrag.</div>
    <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Begründen</em> Sie anhand von drei Merkmalen, dass es sich um ein Projekt handelt“ (Merkmal nennen + Bezug zur Situation), „<em>Formulieren</em> Sie das Ziel nach SMART“, „<em>Erläutern</em> Sie eine Auswirkung, wenn der Termin vorgezogen wird“ (magisches Dreieck) oder „<em>Ordnen</em> Sie das Teamverhalten einer Tuckman-Phase zu“. In der Projektdokumentation und im Fachgespräch musst du außerdem deine Rolle und die Zuständigkeiten im Projekt klar darstellen (Eigenleistung!).</div>
      `
    },
    {
      id: "vorgehensmodelle",
      title: "Vorgehensmodelle: Wasserfall, V-Modell, Scrum & Kanban",
      exam: ["AP1", "AP2"],
      summary: "Klassische (Wasserfall, V-Modell) und agile Vorgehensmodelle (Scrum, Kanban) mit Phasen, Rollen, Events und Artefakten kennen und für ein IT-Projekt begründet auswählen.",
      html: `
    <p>Ein <strong>Vorgehensmodell</strong> legt fest, in welchen Schritten ein Projekt abläuft, wann Ergebnisse entstehen und wie mit Änderungen umgegangen wird. Man unterscheidet <strong>klassische (plangetriebene)</strong> und <strong>agile (iterative)</strong> Modelle.</p>
    <h5>Wasserfallmodell</h5>
    <p>Die Phasen laufen <strong>nacheinander</strong> ab; eine Phase beginnt erst, wenn die vorherige abgeschlossen und abgenommen ist:</p>
    <pre class="ascii">Anforderungsanalyse → Entwurf → Umsetzung → Test → Einführung/Betrieb</pre>
    <div class="grid-2">
      <div><strong>Vorteile</strong><ul><li>gut planbar (Termine, Kosten, Festpreis)</li><li>klare Meilensteine und Dokumente</li><li>einfach zu steuern und zu verstehen</li></ul></div>
      <div><strong>Nachteile</strong><ul><li>späte Änderungen sind teuer</li><li>Kunde sieht das Ergebnis erst spät</li><li>Fehler aus der Analyse fallen erst im Test auf</li></ul></div>
    </div>
    <h5>V-Modell</h5>
    <p>Das V-Modell erweitert den Wasserfall: Jeder Spezifikationsstufe auf der linken Seite steht eine <strong>Teststufe</strong> auf der rechten Seite gegenüber. So wird schon beim Planen festgelegt, <em>wogegen</em> später getestet wird. Die Variante <em>V-Modell XT</em> ist Standard bei IT-Projekten des Bundes.</p>
    <table><thead><tr><th>Spezifikation (links)</th><th>wird geprüft durch (rechts)</th></tr></thead><tbody>
      <tr><td>Anforderungsdefinition (Lastenheft)</td><td>Abnahmetest mit dem Kunden</td></tr>
      <tr><td>funktionaler Systementwurf (Pflichtenheft)</td><td>Systemtest</td></tr>
      <tr><td>technischer Systementwurf</td><td>Integrationstest</td></tr>
      <tr><td>Komponentenspezifikation</td><td>Komponententest (Unit-Test)</td></tr>
    </tbody></table>
    <h5>Scrum</h5>
    <p>Scrum ist ein agiles Rahmenwerk: Das Produkt entsteht in kurzen, festen Zyklen (<strong>Sprints</strong>, höchstens ein Monat, oft 2 Wochen). Nach jedem Sprint liegt ein nutzbares Teilergebnis vor. Das Scrum-Team ist klein (in der Regel höchstens 10 Personen).</p>
    <table><thead><tr><th>Baustein</th><th>Inhalt</th></tr></thead><tbody>
      <tr><td><strong>Verantwortlichkeiten</strong></td><td><strong>Product Owner</strong>: verantwortet den Produktwert, pflegt und priorisiert das Product Backlog · <strong>Scrum Master</strong>: sorgt dafür, dass Scrum verstanden und gelebt wird, beseitigt Hindernisse, coacht (kein Chef!) · <strong>Developers</strong>: setzen die Arbeit im Sprint selbstorganisiert um</td></tr>
      <tr><td><strong>Events</strong></td><td><strong>Sprint</strong> (Container) · <strong>Sprint Planning</strong> (Was und wie im Sprint?, max. 8 h bei 1-Monats-Sprint) · <strong>Daily Scrum</strong> (15 min täglich, Abstimmung der Developers) · <strong>Sprint Review</strong> (Ergebnis mit Stakeholdern prüfen, max. 4 h) · <strong>Sprint Retrospective</strong> (Zusammenarbeit verbessern, max. 3 h)</td></tr>
      <tr><td><strong>Artefakte</strong></td><td><strong>Product Backlog</strong> (geordnete Liste aller Anforderungen, Ziel: Product Goal) · <strong>Sprint Backlog</strong> (ausgewählte Einträge + Plan, Ziel: Sprint Goal) · <strong>Inkrement</strong> (fertiges Teilergebnis, erfüllt die Definition of Done)</td></tr>
    </tbody></table>
    <p>Anforderungen werden oft als <strong>User Story</strong> formuliert: „Als <em>Rolle</em> möchte ich <em>Funktion</em>, damit <em>Nutzen</em>.“</p>
    <h5>Kanban</h5>
    <p>Kanban steuert einen <strong>kontinuierlichen Arbeitsfluss</strong> ohne feste Sprints. Die Arbeit wird auf einem <strong>Kanban-Board</strong> visualisiert (z. B. Offen → In Arbeit → Test → Erledigt). <strong>WIP-Limits</strong> (Work in Progress) begrenzen, wie viele Aufgaben gleichzeitig in einer Spalte liegen dürfen; neue Arbeit wird erst „gezogen“, wenn Kapazität frei ist (<strong>Pull-Prinzip</strong>). Kennzahlen sind z. B. Durchlaufzeit und Durchsatz. Kanban passt gut zu Betrieb und Support (Tickets, kleine Changes).</p>
    <h5>Klassisch oder agil?</h5>
    <table><thead><tr><th>Kriterium</th><th>klassisch (Wasserfall/V-Modell)</th><th>agil (Scrum/Kanban)</th></tr></thead><tbody>
      <tr><td>Anforderungen</td><td>zu Beginn vollständig bekannt, stabil</td><td>unklar, ändern sich häufig</td></tr>
      <tr><td>Planung</td><td>vollständig im Voraus</td><td>rollierend je Sprint</td></tr>
      <tr><td>Kundenbeteiligung</td><td>v. a. am Anfang und bei der Abnahme</td><td>laufend (Review, Product Owner)</td></tr>
      <tr><td>Ergebnis</td><td>am Ende komplett</td><td>schrittweise in Inkrementen</td></tr>
      <tr><td>Vertrag</td><td>Festpreis, Werkvertrag</td><td>eher Aufwand/Zeit, Budget je Sprint</td></tr>
      <tr><td>typisches FISI-Beispiel</td><td>Serverraum umziehen, Hardware-Rollout</td><td>Automatisierungsskripte, Self-Service-Portal</td></tr>
    </tbody></table>
    <p>In der Praxis sind <strong>hybride</strong> Modelle häufig: z. B. klassischer Rahmenplan mit Meilensteinen, innerhalb der Umsetzungsphase agile Zyklen.</p>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> Der Scrum Master ist <strong>nicht</strong> der Projektleiter und verteilt keine Aufgaben. Die Priorität der Anforderungen legt allein der <strong>Product Owner</strong> fest. Und: Laut Prüfungskatalog (2. Auflage) werden in der AP1 nur <strong>Wasserfall und Scrum</strong> verlangt – V-Modell und Kanban brauchst du vor allem für die Projektdokumentation und das Fachgespräch.</div>
    <div class="callout merke"><strong>Merke:</strong> Scrum = 3 Verantwortlichkeiten, 5 Events, 3 Artefakte. Klassisch wählen, wenn Anforderungen fest und Termine/Kosten bindend sind; agil, wenn sich Anforderungen erst während der Umsetzung klären.</div>
    <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Nennen</em> Sie die Phasen des Wasserfallmodells“, „<em>Beschreiben</em> Sie die Aufgaben des Product Owners“, „<em>Ordnen</em> Sie die Situation einem Scrum-Event zu“ oder „<em>Begründen</em> Sie, welches Vorgehensmodell sich für das Projekt eignet“ – immer mit Bezug auf die Ausgangssituation (Anforderungen stabil? Kunde verfügbar? Festpreis?).</div>
      `
    },
    {
      id: "anforderungsanalyse",
      title: "Anforderungsanalyse: Ist-Analyse, Soll-Konzept, Lasten- & Pflichtenheft, Stakeholder",
      exam: ["AP1", "AP2"],
      summary: "Anforderungen des Kunden systematisch erheben, Ist-Zustand und Soll-Konzept beschreiben, funktionale und nicht-funktionale Anforderungen unterscheiden, Lasten- und Pflichtenheft abgrenzen und eine Stakeholderanalyse durchführen.",
      html: `
    <p>Die meisten gescheiterten IT-Projekte scheitern nicht an der Technik, sondern an <strong>unklaren Anforderungen</strong>. Deshalb beginnt jeder Kundenauftrag mit einer sauberen Anforderungsanalyse – gemeinsam mit dem Kunden.</p>
    <h5>Ablauf</h5>
    <pre class="ascii">Kundenanfrage → Ist-Analyse → Schwachstellen → Soll-Konzept
      → Lastenheft (Kunde) → Pflichtenheft (Auftragnehmer) → Angebot/Auftrag</pre>
    <h5>Methoden zur Erhebung</h5>
    <ul>
      <li><strong>Interview</strong> mit Auftraggeber, Key Usern, IT-Verantwortlichen – flexibel, Nachfragen möglich</li>
      <li><strong>Workshop</strong> mit mehreren Beteiligten – Anforderungen gemeinsam priorisieren</li>
      <li><strong>Fragebogen</strong> – viele Nutzer mit wenig Aufwand, aber keine Rückfragen</li>
      <li><strong>Beobachtung</strong> am Arbeitsplatz – zeigt tatsächliche Abläufe</li>
      <li><strong>Dokumentenanalyse</strong> und <strong>technische Bestandsaufnahme</strong> – Netzpläne, Inventar, Lizenzlisten, Netzwerkscan, Monitoringdaten</li>
      <li><strong>Mock-up bzw. Prototyp</strong> – Skizze einer Oberfläche (z. B. Self-Service-Portal) oder ein kleiner Testaufbau, an dem der Kunde seine Wünsche konkretisiert</li>
    </ul>
    <h5>Ist-Analyse und Soll-Konzept</h5>
    <p>Die <strong>Ist-Analyse</strong> beschreibt den aktuellen Zustand neutral und messbar: vorhandene Hardware und Software, Netzstruktur, Anzahl Nutzer, Datenmengen, Prozesse, Verträge – und die daraus folgenden <strong>Schwachstellen</strong> (z. B. „Backup nur auf USB-Platte im Serverraum, kein Restore-Test“). Das <strong>Soll-Konzept</strong> beschreibt den angestrebten Zustand und den Nutzen, noch ohne konkretes Produkt festzulegen. Erfasse dabei auch gleich den <strong>Schulungsbedarf</strong> der Anwender und die gewünschten Ergebnisse der Übergabe (z. B. Kurzanleitung, Einweisung der Key User).</p>
    <h5>Arten von Anforderungen</h5>
    <table><thead><tr><th>Art</th><th>Frage</th><th>Beispiel</th></tr></thead><tbody>
      <tr><td><strong>funktional</strong></td><td>Was soll das System tun?</td><td>„Mitarbeitende können gelöschte Dateien der letzten 30 Tage selbst wiederherstellen.“</td></tr>
      <tr><td><strong>nicht-funktional</strong> (Qualität)</td><td>Wie gut? Unter welchen Bedingungen?</td><td>Wiederherstellung eines 50-GiB-Ordners in unter 30 min; Verfügbarkeit 99,5 %; Verschlüsselung AES-256</td></tr>
      <tr><td><strong>Rahmenbedingungen</strong></td><td>Welche Vorgaben gelten?</td><td>Budget 12.000 €, Umsetzung nur am Wochenende, DSGVO, vorhandene VMware-Umgebung</td></tr>
    </tbody></table>
    <p>Priorisieren kannst du Anforderungen z. B. mit <strong>MoSCoW</strong>: <em>Must</em> (zwingend), <em>Should</em> (wichtig), <em>Could</em> (wünschenswert), <em>Won't</em> (diesmal nicht).</p>
    <div class="callout beispiel"><strong>Netzwerkanforderung abschätzen:</strong> 40 Beschäftigte sollen Videokonferenzen mit je 5 Mbit/s führen; erfahrungsgemäß telefonieren höchstens 50 % gleichzeitig, dazu 20 % Reserve.<br>40 × 5 Mbit/s = 200 Mbit/s → × 0,5 = 100 Mbit/s → × 1,2 = <strong>120 Mbit/s</strong> Mindestbandbreite für Videokonferenzen.</div>
    <h5>Lastenheft vs. Pflichtenheft</h5>
    <table><thead><tr><th></th><th>Lastenheft</th><th>Pflichtenheft</th></tr></thead><tbody>
      <tr><td>Ersteller</td><td><strong>Auftraggeber</strong> (Kunde)</td><td><strong>Auftragnehmer</strong> (z. B. Systemhaus)</td></tr>
      <tr><td>Leitfrage</td><td><strong>Was</strong> soll erreicht werden und <strong>wofür</strong>?</td><td><strong>Wie</strong> und <strong>womit</strong> wird es umgesetzt?</td></tr>
      <tr><td>Inhalt</td><td>Ausgangssituation, Ziele, Anforderungen, Rahmenbedingungen, Abnahmekriterien</td><td>konkrete technische Lösung, Produkte, Konfiguration, Zeitplan, Testfälle, Abnahmeverfahren</td></tr>
      <tr><td>Zeitpunkt</td><td>vor der Angebotsanfrage</td><td>nach dem Lastenheft, vor der Umsetzung</td></tr>
      <tr><td>Rolle</td><td>Grundlage für Angebote</td><td>nach Freigabe durch den Kunden Vertragsgrundlage</td></tr>
    </tbody></table>
    <div class="callout tipp"><strong>Eselsbrücke:</strong> Die <strong>L</strong>ast trägt der <strong>L</strong>aie (Kunde) – er beschreibt, was er will. Die <strong>P</strong>flicht hat der <strong>P</strong>rofi – er beschreibt, wie er es umsetzt.</div>
    <h5>Stakeholderanalyse</h5>
    <p>Stakeholder sind alle Personen und Gruppen, die ein Interesse am Projekt haben oder von ihm betroffen sind. Vorgehen: (1) identifizieren, (2) nach <strong>Einfluss</strong> und <strong>Interesse</strong> (und Einstellung: positiv/negativ) bewerten, (3) Maßnahmen ableiten, (4) laufend beobachten.</p>
    <table><thead><tr><th></th><th>geringes Interesse</th><th>hohes Interesse</th></tr></thead><tbody>
      <tr><td><strong>hoher Einfluss</strong></td><td>zufriedenstellen (z. B. Geschäftsführung des Kunden: kurze Statusberichte)</td><td><strong>eng einbinden</strong> (Key Player, z. B. IT-Leitung: Workshops, Abnahme)</td></tr>
      <tr><td><strong>geringer Einfluss</strong></td><td>beobachten (z. B. Lieferant für Kabel)</td><td>informieren (z. B. Mitarbeitende: Infomail, Schulung)</td></tr>
    </tbody></table>
    <p>Denk bei IT-Projekten besonders an den <strong>Betriebsrat</strong> (Mitbestimmung bei technischen Einrichtungen, die Leistung oder Verhalten überwachen können, § 87 Abs. 1 Nr. 6 BetrVG), den <strong>Datenschutzbeauftragten</strong> und externe Dienstleister. Zu jeder Stakeholdergruppe gehört ein fester <strong>Ansprechpartner</strong> beim Kunden, den du dokumentierst.</p>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> Lasten- und Pflichtenheft werden häufig vertauscht. Außerdem gehört in das Lastenheft <strong>keine</strong> fertige Produktentscheidung („Wir wollen Hersteller X“) – sonst nimmst du der Lösungsfindung die Alternativen.</div>
    <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Unterscheiden</em> Sie Lasten- und Pflichtenheft nach Ersteller und Inhalt“, „<em>Ordnen</em> Sie die Aussagen dem Lasten- oder Pflichtenheft zu“, „<em>Nennen</em> Sie zwei nicht-funktionale Anforderungen“, „<em>Führen</em> Sie eine Stakeholderanalyse durch und <em>leiten</em> Sie je eine Maßnahme <em>ab</em>“.</div>
      `
    },
    {
      id: "psp-zeitplanung",
      title: "Projektstrukturplan, Meilensteine, Netzplan & Gantt-Diagramm",
      exam: ["AP1", "AP2"],
      summary: "Ein Projekt in Teilaufgaben und Arbeitspakete zerlegen, Aufwand und Dauer schätzen, mit Netzplan den kritischen Pfad bestimmen, ein Gantt-Diagramm erstellen und Termine im Kalender festlegen.",
      html: `
    <p>Nach dem Projektauftrag wird das Projekt geplant: Zuerst <em>was</em> zu tun ist (Projektstrukturplan), dann <em>in welcher Reihenfolge</em> und <em>wie lange</em> (Ablauf- und Terminplanung).</p>
    <h5>Projektstrukturplan (PSP)</h5>
    <p>Der PSP zerlegt das Projekt hierarchisch in <strong>Teilprojekte/Teilaufgaben</strong> und auf der untersten Ebene in <strong>Arbeitspakete</strong>. Ein Arbeitspaket ist die kleinste plan- und kontrollierbare Einheit mit klarer Verantwortung, Ergebnis, Aufwand und Dauer. Der PSP enthält <strong>keine</strong> zeitliche Reihenfolge.</p>
    <pre class="ascii">1 WLAN-Erneuerung Autohaus Friesen, Husum
├─ 1.1 Analyse
│   ├─ 1.1.1 Ist-Aufnahme Netz
│   └─ 1.1.2 Ausleuchtung (Site Survey)
├─ 1.2 Planung
│   ├─ 1.2.1 Pflichtenheft erstellen
│   └─ 1.2.2 Hardware bestellen
├─ 1.3 Umsetzung
│   ├─ 1.3.1 RADIUS-Server einrichten
│   └─ 1.3.2 Access Points montieren und konfigurieren
└─ 1.4 Abschluss
    ├─ 1.4.1 Test und Abnahme
    └─ 1.4.2 Dokumentation und Einweisung</pre>
    <table><thead><tr><th>Gliederung</th><th>Ebene 2 orientiert sich an …</th><th>Beispiel</th></tr></thead><tbody>
      <tr><td>phasenorientiert</td><td>Projektphasen</td><td>Analyse, Planung, Umsetzung, Abschluss (siehe oben)</td></tr>
      <tr><td>objektorientiert</td><td>Bestandteilen des Ergebnisses</td><td>Server, Netzwerk, Clients, Drucker</td></tr>
      <tr><td>funktionsorientiert</td><td>Tätigkeiten/Abteilungen</td><td>Beschaffen, Installieren, Testen, Schulen</td></tr>
      <tr><td>gemischt</td><td>Kombination</td><td>in der Praxis am häufigsten</td></tr>
    </tbody></table>
    <h5>Aufwand ist nicht gleich Dauer</h5>
    <div class="callout formel"><strong>Dauer</strong> = Aufwand ÷ (Anzahl Personen × Verfügbarkeit × Stunden pro Tag)</div>
    <div class="callout beispiel">Arbeitspaket 1.3.2 hat einen Aufwand von 24 Personenstunden. Zwei Techniker stehen zu je 75 % zur Verfügung, ein Arbeitstag hat 8 h.<br>Dauer = 24 h ÷ (2 × 0,75 × 8 h/Tag) = 24 ÷ 12 = <strong>2 Arbeitstage</strong>.</div>
    <h5>Netzplan und kritischer Pfad</h5>
    <p>Aus der Vorgangsliste (Dauer, Vorgänger) entsteht der Netzplan. Knotennotation laut Prüfungskatalog: oben FAZ und FEZ, Mitte Vorgang und Beschreibung, darunter Dauer, GP und FP, unten SAZ und SEZ.</p>
    <div class="callout formel"><strong>Vorwärts:</strong> FAZ Start = 0 · FEZ = FAZ + Dauer · FAZ = größter FEZ der Vorgänger<br><strong>Rückwärts:</strong> SEZ Ende = Projektende · SAZ = SEZ − Dauer · SEZ = kleinster SAZ der Nachfolger<br><strong>Puffer:</strong> GP = SAZ − FAZ · FP = kleinster FAZ der Nachfolger − eigener FEZ<br><strong>Kritischer Pfad:</strong> alle Vorgänge mit GP = 0</div>
    <div class="callout beispiel"><strong>Beispiel WLAN-Erneuerung</strong> (Dauer in Arbeitstagen): A Ist-Aufnahme 2 (–) · B Pflichtenheft 1 (A) · C Lieferung Hardware 5 (B) · D RADIUS einrichten 2 (B) · E APs montieren 3 (C) · F Test/Abnahme 1 (D, E)<br>
    Vorwärts: A 0–2, B 2–3, C 3–8, D 3–5, E 8–11, F: FAZ = max(5; 11) = 11 → FEZ 12. <strong>Projektdauer 12 Tage.</strong><br>
    Rückwärts: F 11–12, E 8–11, D: SEZ = 11, SAZ = 9, C 3–8, B: SEZ = min(3; 9) = 3, SAZ 2, A 0–2.<br>
    Puffer: D hat GP = 9 − 3 = 6 und FP = 11 − 5 = 6, alle anderen 0. <strong>Kritischer Pfad: A → B → C → E → F.</strong></div>
    <h5>Gantt-Diagramm (Balkenplan)</h5>
    <pre class="ascii">Vorgang          01 02 03 04 05 06 07 08 09 10 11 12
A Ist-Aufnahme   ## ##
B Pflichtenheft        ##
C Lieferung HW            ## ## ## ## ##
D RADIUS                  ## ## .. .. .. .. .. ..
E APs montieren                          ## ## ##
F Test/Abnahme                                    ##
M Abnahme                                          ◆
(## = Vorgang, .. = Puffer, ◆ = Meilenstein)</pre>
    <p>Balken zeigen Dauer und Lage auf der Zeitachse, <strong>Meilensteine</strong> (Raute) sind prüfbare Ereignisse <strong>ohne Dauer</strong> (z. B. „Pflichtenheft freigegeben“, „Abnahme erfolgt“). Abhängigkeiten sind meist Ende-Anfang (EA), möglich sind auch Anfang-Anfang (AA), Ende-Ende (EE) und Anfang-Ende (AE).</p>
    <table><thead><tr><th></th><th>Netzplan</th><th>Gantt-Diagramm</th></tr></thead><tbody>
      <tr><td>Stärke</td><td>Abhängigkeiten, Puffer, kritischer Pfad exakt berechenbar</td><td>anschaulich, Zeitachse und Kalender sofort erkennbar, gut für Kunden</td></tr>
      <tr><td>Schwäche</td><td>wenig anschaulich, keine Kalenderdarstellung</td><td>Puffer und Abhängigkeiten bei vielen Vorgängen unübersichtlich</td></tr>
    </tbody></table>
    <h5>Termine im Kalender und Terminprobleme</h5>
    <p>Startet das Projekt am Montag, 19.10.2026, enden 12 Arbeitstage (ohne Wochenenden) am <strong>Dienstag, 03.11.2026</strong>. Feiertage im Bundesland und Urlaube abziehen! In Schleswig-Holstein ist z. B. der Reformationstag (31.10.) seit 2018 gesetzlicher Feiertag – 2026 fällt er auf einen Samstag. Umgekehrt bestimmst du den <strong>spätesten Starttermin</strong>: Soll das Projekt am Freitag, 13.11.2026, fertig sein, zählst du vom Endtag aus 12 Arbeitstage zurück (der Endtag zählt mit) → spätester Start <strong>Donnerstag, 29.10.2026</strong>.</p>
    <p>Droht ein Terminverzug, gibt es folgende Hebel: Puffer nutzen, Vorgänge parallelisieren, kritische Vorgänge mit zusätzlichem Personal verkürzen, Leistungsumfang reduzieren, Teile fremd vergeben oder den Termin neu verhandeln – jeweils mit Folgen für Kosten oder Qualität (magisches Dreieck).</p>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> Eine Verzögerung auf dem kritischen Pfad verschiebt das Projektende um genau diese Zeit. Bei einem Vorgang mit Puffer verschiebt sich das Ende erst, wenn die Verzögerung den Gesamtpuffer übersteigt. Mehr Personal auf einem <em>unkritischen</em> Vorgang bringt für den Endtermin nichts.</div>
    <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Vervollständigen</em> Sie den Netzplan“, „<em>Ermitteln</em> Sie den kritischen Pfad und die Projektdauer“, „<em>Korrigieren</em> Sie die fehlerhaften Werte“, „<em>Bestimmen</em> Sie den Endtermin“ und „<em>Erläutern</em> Sie die Auswirkung einer Verzögerung von Vorgang X“.</div>
      `
    },
    {
      id: "ressourcen-kosten",
      title: "Ressourcen- & Kostenplanung: Stundensatz, Vor- und Nachkalkulation",
      exam: ["AP1", "AP2"],
      summary: "Personal und Sachmittel einplanen, Kostenarten unterscheiden, einen Stundensatz herleiten, Projektkosten und Angebotspreis vorkalkulieren und mit der Nachkalkulation Abweichungen auswerten.",
      html: `
    <p>Jede Projektplanung braucht eine Antwort auf die Fragen: <em>Wer</em> und <em>was</em> wird benötigt – und <em>was kostet das</em>? Im IHK-Projekt gehört eine nachvollziehbare Kostenplanung ausdrücklich zur Bewertung.</p>
    <h5>Ressourcenplanung</h5>
    <ul>
      <li><strong>Personal:</strong> Qualifikation, Verfügbarkeit (Urlaub, Tagesgeschäft, Rufbereitschaft), interne und externe Kräfte</li>
      <li><strong>Sachmittel:</strong> Hardware, Software und Lizenzen, Testumgebung, Werkzeuge, Fahrzeuge</li>
      <li><strong>Fremdleistungen:</strong> z. B. Elektriker, Provider, Hersteller-Support</li>
    </ul>
    <p>Aus Arbeitspaketen und Terminplan entsteht ein <strong>Belastungsdiagramm</strong>. Ist eine Person an einem Tag überlastet, werden Vorgänge innerhalb ihres Puffers verschoben, Aufgaben umverteilt oder fremd vergeben.</p>
    <h5>Kostenarten im Projekt</h5>
    <table><thead><tr><th>Kostenart</th><th>Beispiele</th></tr></thead><tbody>
      <tr><td><strong>Personalkosten</strong></td><td>geleistete Stunden × Stundensatz (Techniker, Azubi, Projektleitung, Schulungszeit der Anwender)</td></tr>
      <tr><td><strong>Sachkosten</strong></td><td>Server, Switches, Access Points, Kabel, Lizenzen, Verbrauchsmaterial</td></tr>
      <tr><td><strong>Fremdleistungen</strong></td><td>Montage durch Elektrofirma, externe Schulung, Cloud-Dienst</td></tr>
      <tr><td><strong>Gemeinkosten</strong></td><td>Miete, Verwaltung, Arbeitsplatz – meist als Zuschlag oder im Stundensatz enthalten</td></tr>
      <tr><td><strong>laufende Kosten</strong></td><td>Wartung, Supportverträge, Abonnements, Energie (wichtig für Wirtschaftlichkeit)</td></tr>
    </tbody></table>
    <h5>Stundensatz herleiten</h5>
    <div class="callout formel"><strong>Stundensatz</strong> = jährliche Gesamtkosten der Stelle ÷ produktive (verrechenbare) Stunden pro Jahr</div>
    <div class="callout beispiel"><strong>Systemadministratorin der Nordlicht IT GmbH</strong> (Werte vereinfacht):<br>
    Bruttogehalt 3.900 € × 12 = 46.800 € · Arbeitgeberanteil Sozialversicherung ≈ 21 % = 9.828 € → Personalkosten 56.628 €<br>
    + anteilige Gemeinkosten (Arbeitsplatz, Verwaltung, Fahrzeug) 14.000 € → <strong>70.628 € pro Jahr</strong><br>
    Anwesenheit: 210 Arbeitstage × 8 h = 1.680 h, davon 85 % verrechenbar → 1.428 h<br>
    Stundensatz = 70.628 € ÷ 1.428 h ≈ <strong>49,46 €/h</strong></div>
    <h5>Vorkalkulation und Angebotspreis</h5>
    <p>Die <strong>Vorkalkulation</strong> schätzt vor Projektbeginn die Kosten und ist Grundlage für Budget und Angebot:</p>
    <div class="callout beispiel"><strong>Backup-Lösung für einen Kunden in Meldorf</strong><br>
    Personal: Administrator 32 h × 62 €/h = 1.984 € · Azubi 24 h × 22 €/h = 528 € · Projektleitung 6 h × 78 €/h = 468 € → <strong>2.980 €</strong><br>
    Sachkosten: NAS 2.450 € · 4 Festplatten × 289 € = 1.156 € · Backup-Lizenz (3 Jahre) 1.380 € → <strong>4.986 €</strong><br>
    Selbstkosten = 2.980 € + 4.986 € = <strong>7.966 €</strong><br>
    + Gewinnzuschlag 12 % = 955,92 € → Nettoangebotspreis <strong>8.921,92 €</strong><br>
    + 19 % USt = 1.695,16 € → Bruttoangebotspreis <strong>10.617,08 €</strong></div>
    <div class="callout formel">Selbstkosten = Personalkosten + Sachkosten (+ Gemeinkosten, falls nicht im Stundensatz) · Nettopreis = Selbstkosten × (1 + Gewinnzuschlag) · Bruttopreis = Nettopreis × 1,19</div>
    <h5>Nachkalkulation</h5>
    <p>Nach Projektende werden die <strong>Ist-Kosten</strong> erfasst (Zeiterfassung, Rechnungen) und mit der Vorkalkulation verglichen. Im Beispiel brauchte der Administrator 38 statt 32 Stunden: Ist-Personalkosten 3.352 €, Ist-Selbstkosten 8.338 €.</p>
    <div class="callout formel">Abweichung absolut = Ist − Soll · Abweichung in % = (Ist − Soll) ÷ Soll × 100</div>
    <p>Abweichung: 8.338 € − 7.966 € = <strong>+372 €</strong> bzw. 372 ÷ 7.966 × 100 ≈ <strong>+4,67 %</strong>. Wurde ein <strong>Festpreis</strong> vereinbart, trägt der Auftragnehmer die Mehrkosten: Der Gewinn sinkt von 955,92 € auf 8.921,92 € − 8.338 € = <strong>583,92 €</strong>. Ursachen analysieren (Schätzfehler? unerwartete Probleme? Zusatzwünsche?) und für künftige Kalkulationen nutzen.</p>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> Die Umsatzsteuer ist für ein vorsteuerabzugsberechtigtes Unternehmen <strong>kein</strong> Kostenbestandteil – Kosten und Wirtschaftlichkeit rechnest du netto. Brutto brauchst du nur für den Angebots- bzw. Rechnungsbetrag. Und: Prozentuale Abweichungen immer auf den <strong>Soll</strong>-Wert beziehen.</div>
    <div class="callout merke"><strong>Merke:</strong> Personalkosten = Stunden × Stundensatz. Der Stundensatz enthält nicht nur das Gehalt, sondern alle Kosten der Stelle – verteilt auf die wirklich verrechenbaren Stunden.</div>
    <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Berechnen</em> Sie die Personalkosten des Projekts“, „<em>Ermitteln</em> Sie den Angebotspreis inkl. USt.“, „<em>Berechnen</em> Sie die Abweichung zwischen Vor- und Nachkalkulation absolut und in Prozent und <em>nennen</em> Sie zwei mögliche Ursachen“. Rechenweg mit Formel und Einheiten zeigen – der Weg bringt Teilpunkte.</div>
      `
    },
    {
      id: "wirtschaftlichkeit-entscheidung",
      title: "Lösungsalternativen bewerten: Nutzwertanalyse, Kostenvergleich, Amortisation, Make-or-Buy",
      exam: ["AP1", "AP2"],
      summary: "Lösungsvarianten nach technischen, wirtschaftlichen und qualitativen Kriterien vergleichen: Nutzwertanalyse mit Sensitivität, Kostenvergleich mit Break-even, statische Amortisation, TCO und Make-or-Buy.",
      html: `
    <p>§ 20 FIAusbV verlangt im Abschlussprojekt ausdrücklich, dass du <strong>Lösungsalternativen nach technischen, wirtschaftlichen und qualitativen Aspekten</strong> vorschlägst. Die Entscheidung muss nachvollziehbar sein – dafür gibt es Werkzeuge.</p>
    <h5>Vorgehen bei der Entscheidung</h5>
    <ol>
      <li><strong>Alternativen</strong> sammeln (mindestens zwei echte Varianten, ggf. „Ist-Zustand beibehalten“ als Vergleich)</li>
      <li><strong>K.-o.-Kriterien</strong> prüfen (z. B. Serverstandort EU, Kompatibilität zur vorhandenen Umgebung) – wer sie nicht erfüllt, fliegt raus</li>
      <li>verbleibende Varianten mit <strong>Nutzwertanalyse</strong> (qualitativ) und <strong>Kostenvergleich/Amortisation</strong> (quantitativ) bewerten</li>
      <li>Entscheidung begründen und mit dem Kunden abstimmen</li>
    </ol>
    <h5>Nutzwertanalyse (NWA)</h5>
    <p>Kriterien festlegen → gewichten (Summe 100 %) → jede Alternative je Kriterium bewerten (z. B. 1–10 Punkte) → Punkte × Gewicht → Summe = Nutzwert.</p>
    <table><thead><tr><th>Kriterium</th><th>Gewicht</th><th>A: NAS vor Ort</th><th>B: Cloud-Backup</th><th>C: NAS + Cloud-Kopie</th></tr></thead><tbody>
      <tr><td>Kosten (3 Jahre)</td><td>30 %</td><td>7 → 2,10</td><td>6 → 1,80</td><td>5 → 1,50</td></tr>
      <tr><td>Wiederherstellungszeit</td><td>25 %</td><td>9 → 2,25</td><td>5 → 1,25</td><td>9 → 2,25</td></tr>
      <tr><td>Sicherheit/Datenschutz</td><td>20 %</td><td>7 → 1,40</td><td>6 → 1,20</td><td>9 → 1,80</td></tr>
      <tr><td>Administrationsaufwand</td><td>15 %</td><td>6 → 0,90</td><td>9 → 1,35</td><td>6 → 0,90</td></tr>
      <tr><td>Skalierbarkeit</td><td>10 %</td><td>5 → 0,50</td><td>9 → 0,90</td><td>8 → 0,80</td></tr>
      <tr><td><strong>Nutzwert</strong></td><td>100 %</td><td><strong>7,15</strong></td><td><strong>6,50</strong></td><td><strong>7,25</strong></td></tr>
    </tbody></table>
    <p>Variante C gewinnt – aber nur knapp. Eine <strong>Sensitivitätsanalyse</strong> prüft, wie stabil das Ergebnis ist: Gewichtet man Kosten mit 40 % und Skalierbarkeit mit 0 %, liegt plötzlich A vorn (7,35 vor C mit 6,95). Bei knappen Ergebnissen solltest du die Gewichtung mit dem Kunden absichern.</p>
    <h5>Kostenvergleich und Break-even</h5>
    <div class="callout beispiel"><strong>On-Premises oder Cloud?</strong> Eigener Server: 9.600 € einmalig + 140 €/Monat Betrieb. Cloud-Dienst: 540 €/Monat, keine Einmalkosten.<br>
    Break-even: 9.600 € ÷ (540 € − 140 €) = 9.600 ÷ 400 = <strong>24 Monate</strong>. Ab dem 25. Monat ist die eigene Lösung günstiger.<br>
    Über 5 Jahre (60 Monate): eigener Server 9.600 + 60 × 140 = <strong>18.000 €</strong>, Cloud 60 × 540 = <strong>32.400 €</strong>.</div>
    <div class="callout formel">Break-even (Monate) = Differenz der Einmalkosten ÷ Differenz der monatlichen Kosten</div>
    <h5>Statische Amortisationsrechnung</h5>
    <div class="callout formel">Amortisationsdauer = Investition ÷ jährlicher Rückfluss (z. B. eingesparte laufende Kosten)</div>
    <div class="callout beispiel">Ein veralteter Server kostet jährlich 7.800 € (Wartung, Strom, Admin-Aufwand). Eine neue virtualisierte Lösung kostet 14.400 € und danach 2.400 € pro Jahr.<br>
    Einsparung = 7.800 € − 2.400 € = 5.400 €/Jahr → Amortisationsdauer = 14.400 ÷ 5.400 ≈ <strong>2,67 Jahre (≈ 2 Jahre 8 Monate)</strong>. Bei geplanter Nutzungsdauer von 5 Jahren lohnt sich die Investition.</div>
    <h5>TCO und Make-or-Buy</h5>
    <p>Die <strong>Total Cost of Ownership</strong> umfasst alle Kosten über den Lebenszyklus: Anschaffung, Einrichtung, Lizenzen, Energie, Wartung, Support, Schulung und Entsorgung. Beim <strong>Make-or-Buy</strong> entscheidest du, ob eine Leistung selbst erbracht (Make) oder eingekauft wird (Buy, z. B. Managed Service, Cloud, externer Dienstleister).</p>
    <table><thead><tr><th>spricht für Make (selbst)</th><th>spricht für Buy (fremd)</th></tr></thead><tbody>
      <tr><td>Know-how und Kapazität im Haus vorhanden</td><td>Spezialwissen fehlt, Personal ausgelastet</td></tr>
      <tr><td>Kernkompetenz, strategisch wichtig</td><td>Standardleistung, kein Wettbewerbsvorteil</td></tr>
      <tr><td>volle Kontrolle über Daten und Abläufe</td><td>schnelle Verfügbarkeit, Skalierbarkeit</td></tr>
      <tr><td>keine Abhängigkeit von einem Anbieter</td><td>planbare Kosten, Anbieter trägt Betriebsrisiko</td></tr>
    </tbody></table>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> Eine NWA ohne Begründung der Punkte ist wertlos. In der Prüfung musst du Punkte oft selbst aus einem Datenblatt vergeben – schreibe kurz dazu, <em>warum</em>. Und: Die günstigste Lösung ist nicht automatisch die beste; Qualität, Sicherheit und Folgekosten gehören in die Bewertung.</div>
    <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Führen</em> Sie eine Nutzwertanalyse durch und <em>begründen</em> Sie die Entscheidung“, „<em>Berechnen</em> Sie, ab welchem Monat sich Variante A lohnt“, „<em>Ermitteln</em> Sie die Amortisationsdauer“, „<em>Nennen</em> Sie je zwei Argumente für Make und Buy“.</div>
      `
    },
    {
      id: "risikomanagement",
      title: "Risikomanagement & Schwachstellenanalyse im Projekt",
      exam: ["AP1", "AP2"],
      summary: "Projektrisiken identifizieren, mit Eintrittswahrscheinlichkeit und Schadenshöhe bewerten, in einer Risikomatrix einordnen, Strategien zuordnen, Maßnahmen wirtschaftlich beurteilen und die im IHK-Projekt geforderte Schwachstellenanalyse durchführen.",
      html: `
    <p>Ein <strong>Risiko</strong> ist ein mögliches Ereignis, das die Projektziele (Leistung, Zeit, Kosten) gefährdet. Risikomanagement heißt: Risiken früh erkennen, bewerten und gezielt behandeln – statt später „Feuerwehr“ zu spielen.</p>
    <h5>Der Risikomanagement-Prozess</h5>
    <pre class="ascii">identifizieren → bewerten → Maßnahmen planen → überwachen (Risikoliste pflegen)
      ↑________________________________________________|</pre>
    <p><strong>Identifizieren</strong> kannst du Risiken mit Brainstorming im Team, Checklisten und Lessons Learned früherer Projekte, Expertenbefragung oder Gesprächen mit Stakeholdern. Typische Risiken in Systemintegrationsprojekten: Lieferverzug der Hardware, Inkompatibilität mit Altsystemen, Datenverlust bei der Migration, Ausfall einer Schlüsselperson, fehlende Akzeptanz der Anwender, schleichende Erweiterung des Umfangs (<em>Scope Creep</em>), Sicherheitslücken.</p>
    <h5>Bewerten</h5>
    <div class="callout formel"><strong>Risikowert</strong> (Erwartungswert) = Eintrittswahrscheinlichkeit × Schadenshöhe</div>
    <table><thead><tr><th>Nr.</th><th>Risiko</th><th>Wahrscheinlichkeit</th><th>Schaden</th><th>Risikowert</th></tr></thead><tbody>
      <tr><td>R1</td><td>Lieferverzug der Switches</td><td>30 %</td><td>4.000 €</td><td>1.200 €</td></tr>
      <tr><td>R2</td><td>Datenverlust bei der Migration</td><td>5 %</td><td>40.000 €</td><td><strong>2.000 €</strong></td></tr>
      <tr><td>R3</td><td>Ausfall des Administrators</td><td>10 %</td><td>6.000 €</td><td>600 €</td></tr>
      <tr><td>R4</td><td>Altgeräte beherrschen kein 802.1X</td><td>40 %</td><td>3.000 €</td><td>1.200 €</td></tr>
    </tbody></table>
    <p>R2 hat trotz geringer Wahrscheinlichkeit den höchsten Risikowert und wird zuerst behandelt. Alternativ bewertet man qualitativ (z. B. Stufen 1–3) und trägt die Risiken in eine <strong>Risikomatrix</strong> ein:</p>
    <pre class="ascii">Wahrscheinl. ↑
     hoch     | mittel |  hoch  |  hoch
     mittel   | gering | mittel |  hoch
     gering   | gering | gering | mittel
              +--------+--------+--------→ Schadenshöhe
                gering   mittel    hoch</pre>
    <h5>Strategien der Risikobehandlung</h5>
    <table><thead><tr><th>Strategie</th><th>Idee</th><th>Beispiel</th></tr></thead><tbody>
      <tr><td><strong>vermeiden</strong></td><td>Ursache beseitigen, Vorgehen ändern</td><td>auf eine unerprobte Beta-Firmware verzichten</td></tr>
      <tr><td><strong>vermindern</strong></td><td>Wahrscheinlichkeit oder Auswirkung senken</td><td>Vollbackup mit Restore-Test vor der Migration; frühzeitig bestellen</td></tr>
      <tr><td><strong>übertragen</strong></td><td>Risiko an Dritte abgeben</td><td>Versicherung, Vertragsstrafe mit dem Lieferanten, Fremdvergabe</td></tr>
      <tr><td><strong>akzeptieren</strong></td><td>bewusst tragen, Reserve einplanen</td><td>kleine Risiken mit geringem Schaden; Budgetreserve</td></tr>
    </tbody></table>
    <p>Zusätzlich plant man <strong>korrektive</strong> Maßnahmen für den Eintrittsfall: Notfall- bzw. Rückfallplan, Ersatzhardware, Vertretungsregelung.</p>
    <div class="callout beispiel"><strong>Lohnt sich die Maßnahme?</strong> Gegen R2 werden vorab ein zusätzliches Vollbackup und ein Probe-Restore für 800 € durchgeführt. Die Eintrittswahrscheinlichkeit sinkt dadurch auf 1 %.<br>
    neuer Risikowert = 1 % × 40.000 € = 400 € → Verringerung um 2.000 € − 400 € = 1.600 €.<br>
    Da 1.600 € &gt; 800 € Maßnahmenkosten, ist die Maßnahme wirtschaftlich (Nettonutzen 800 €).</div>
    <h5>Schwachstellenanalyse im Abschlussprojekt</h5>
    <p>Die FIAusbV verlangt im Projekt, <strong>Schwachstellen von IT-Systemen zu analysieren sowie Schutzmaßnahmen vorzuschlagen und umzusetzen</strong>. Das gehört also in <em>jedes</em> FISI-Projekt. Vorgehen:</p>
    <ol>
      <li><strong>Schutzbedarf</strong> der betroffenen Informationen und Systeme bestimmen (Vertraulichkeit, Integrität, Verfügbarkeit; normal/hoch/sehr hoch)</li>
      <li><strong>Bedrohungen und Schwachstellen</strong> ermitteln – z. B. mit dem BSI IT-Grundschutz-Kompendium, Herstellerhinweisen, Schwachstellenscan</li>
      <li><strong>Technische und organisatorische Maßnahmen (TOM)</strong> auswählen, umsetzen bzw. vorschlagen und ihre Wirksamkeit testen</li>
    </ol>
    <table><thead><tr><th>Schwachstelle (Beispiel WLAN-Projekt)</th><th>Maßnahme</th></tr></thead><tbody>
      <tr><td>ein gemeinsamer WLAN-Schlüssel für alle</td><td>WPA3-Enterprise mit 802.1X und RADIUS</td></tr>
      <tr><td>Gäste im Firmennetz</td><td>eigene SSID im Gäste-VLAN, Client-Isolation, nur Internet</td></tr>
      <tr><td>Verwaltung der APs per HTTP mit Standardpasswort</td><td>HTTPS, eigenes Management-VLAN, individuelle Passwörter</td></tr>
      <tr><td>veraltete Firmware</td><td>Update vor Inbetriebnahme, Patchprozess festlegen (organisatorisch)</td></tr>
    </tbody></table>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> Unterscheide <strong>Projektrisiken</strong> (gefährden Termin, Kosten, Ergebnis des Projekts) von <strong>IT-Sicherheitsrisiken</strong> des späteren Betriebs. Im IHK-Projekt brauchst du beides. „Akzeptieren“ ist eine legitime Strategie – aber nur als bewusste, dokumentierte Entscheidung.</div>
    <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Berechnen</em> Sie die Risikowerte und <em>priorisieren</em> Sie“, „<em>Ordnen</em> Sie jeder Maßnahme eine Strategie zu“, „<em>Beurteilen</em> Sie, ob sich die Maßnahme wirtschaftlich lohnt“, „<em>Nennen</em> Sie zwei Schwachstellen und je eine Schutzmaßnahme“.</div>
      `
    },
    {
      id: "qualitaet-tests",
      title: "Qualitätssicherung, Testkonzept & Testprotokoll",
      exam: ["AP1", "AP2"],
      summary: "Konstruktive und analytische QS unterscheiden, PDCA anwenden, ein Testkonzept mit Teststufen, Testarten, Testfällen und Abnahmekriterien erstellen und Tests nachvollziehbar protokollieren.",
      html: `
    <p><strong>Qualität</strong> bedeutet, dass das Ergebnis die vereinbarten Anforderungen erfüllt. Qualitätssicherung (QS) plant man deshalb nicht am Ende, sondern von Anfang an – im IHK-Projekt ist die QS-Planung ein eigener Bewertungspunkt.</p>
    <h5>Konstruktive und analytische QS</h5>
    <div class="grid-2">
      <div><strong>konstruktiv</strong> (Fehler vermeiden)<ul><li>Standards, Namenskonventionen, Vorlagen</li><li>Checklisten für Installationen</li><li>Schulung, Vier-Augen-Prinzip bei der Planung</li></ul></div>
      <div><strong>analytisch</strong> (Fehler finden)<ul><li>Tests (dynamisch: System wird ausgeführt)</li><li>Reviews, Konfigurationsprüfung (statisch)</li><li>Audits, Messungen, Monitoring</li></ul></div>
    </div>
    <p>Kontinuierliche Verbesserung folgt dem <strong>PDCA-Zyklus</strong>: <em>Plan</em> (Ziel und Maßnahme planen) → <em>Do</em> (umsetzen, oft zuerst im Kleinen) → <em>Check</em> (Ergebnis messen, Soll-Ist-Vergleich) → <em>Act</em> (Standard festschreiben oder nachsteuern) – als Kreislauf im KVP.</p>
    <h5>Inhalte eines Testkonzepts</h5>
    <ul>
      <li>Testobjekte und Testziele (Was wird gegen welche Anforderung geprüft?)</li>
      <li>Teststufen und Testarten, Testumgebung (Testsystem, Pilotgruppe), Testdaten (realistisch, anonymisiert – ggf. mit Testdatengenerator)</li>
      <li><strong>Testfälle</strong> mit Vorbedingung, Schritten und <strong>erwartetem Ergebnis</strong></li>
      <li><strong>Abnahmekriterien</strong>, Abbruch- und Wiederaufnahmekriterien</li>
      <li>Verantwortliche, Zeitplan, Protokollierung und Fehlerklassen</li>
    </ul>
    <h5>Teststufen und Testarten</h5>
    <table><thead><tr><th>Teststufe</th><th>Was wird geprüft?</th><th>Beispiel</th></tr></thead><tbody>
      <tr><td>Komponententest</td><td>einzelne Komponente isoliert</td><td>RADIUS-Server beantwortet eine Testanfrage</td></tr>
      <tr><td>Integrationstest</td><td>Zusammenspiel von Komponenten</td><td>AP → RADIUS → Verzeichnisdienst → VLAN-Zuweisung</td></tr>
      <tr><td>Systemtest</td><td>Gesamtsystem gegen das Pflichtenheft</td><td>alle Anforderungen im Testnetz</td></tr>
      <tr><td>Abnahmetest</td><td>durch/mit dem Kunden gegen das Lastenheft</td><td>Key User testen im Echtbetrieb</td></tr>
    </tbody></table>
    <p>Wichtige <strong>Testarten</strong>: Funktionstest, Last- und Performancetest (Durchsatz, Antwortzeit unter Last), Penetrationstest (Angriffe simulieren – nur mit schriftlicher Erlaubnis), Regressionstest (funktioniert Altes nach einer Änderung noch?), Ausfall-/Failover-Test, Restore-Test bei Backups sowie der <strong>Grenzwert- bzw. Extremwertetest</strong>: Eingaben genau an und knapp hinter den erlaubten Grenzen (erlaubt 1–100 → teste 0, 1, 100 und 101), weil dort die meisten Fehler stecken. <strong>Black-Box</strong>-Tests prüfen nur Ein- und Ausgaben, <strong>White-Box</strong>-Tests kennen den inneren Aufbau (z. B. Skriptcode). <strong>Statische</strong> Verfahren (Review, Konfigurationsprüfung) kommen ohne Ausführung aus, <strong>dynamische</strong> Verfahren führen das System aus.</p>
    <h5>Testfälle und Testprotokoll</h5>
    <table><thead><tr><th>ID</th><th>Testfall</th><th>erwartetes Ergebnis</th><th>Ergebnis</th></tr></thead><tbody>
      <tr><td>T01</td><td>Firmen-Notebook mit Zertifikat verbindet sich mit „Friesen-Staff“</td><td>Verbindung, IP aus VLAN 10</td><td>bestanden</td></tr>
      <tr><td>T02</td><td>Gerät ohne Zertifikat versucht „Friesen-Staff“</td><td>Zugriff abgelehnt, Eintrag im RADIUS-Log</td><td>bestanden</td></tr>
      <tr><td>T03</td><td>Gast-Smartphone im Gäste-WLAN pingt 10.0.10.5</td><td>kein Zugriff, nur Internet</td><td><strong>nicht bestanden</strong> → Firewallregel ergänzt, Nachtest bestanden</td></tr>
      <tr><td>T04</td><td>AP 2 wird ausgeschaltet</td><td>Clients wechseln binnen 5 s zu AP 1/3</td><td>bestanden</td></tr>
    </tbody></table>
    <p>Das <strong>Testprotokoll</strong> dokumentiert zusätzlich Datum, Tester, getestete Version/Konfiguration, Testumgebung, Abweichungen mit <strong>Fehlerklasse</strong> (z. B. kritisch/schwer/leicht), Maßnahme, Nachtest und die <strong>Freigabeentscheidung</strong> mit Unterschrift. Es ist Nachweis gegenüber Kunde und Prüfungsausschuss.</p>
    <div class="callout beispiel">Von 42 Testfällen wurden 39 im ersten Durchlauf bestanden: 39 ÷ 42 × 100 ≈ <strong>92,86 %</strong>. Freigegeben wird trotzdem erst, wenn kein Fehler der Klasse „kritisch“ mehr offen ist und die Nachtests bestanden sind.</div>
    <h5>Qualitätsmerkmale und Staging</h5>
    <p>Für Software und Systeme beschreibt die Norm ISO/IEC 25010 (Nachfolger von ISO/IEC 9126) Qualitätsmerkmale wie funktionale Eignung, Leistungseffizienz, Kompatibilität, Benutzbarkeit, Zuverlässigkeit, Sicherheit, Wartbarkeit und Übertragbarkeit. In der überarbeiteten Ausgabe von 2023 heißen Benutzbarkeit und Übertragbarkeit „Interaktionsfähigkeit“ bzw. „Flexibilität“, neu ist die Betriebssicherheit (Safety). Im IHK-Projekt nutzt du solche Merkmale, um messbare Qualitätsziele zu formulieren. Änderungen durchlaufen idealerweise ein <strong>Staging</strong>: Testumgebung → Pilotgruppe → Produktion.</p>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> Ein Testfall ohne <strong>erwartetes Ergebnis</strong> ist kein Testfall – du kannst sonst nicht entscheiden, ob er bestanden ist. Und: Nach jeder Fehlerbehebung wird erneut getestet (Nachtest/Regressionstest).</div>
    <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Erstellen</em> Sie drei Testfälle mit erwartetem Ergebnis“, „<em>Unterscheiden</em> Sie System- und Abnahmetest“, „<em>Nennen</em> Sie Inhalte eines Testprotokolls“, „<em>Erläutern</em> Sie den PDCA-Zyklus an einem Beispiel“.</div>
      `
    },
    {
      id: "change-migration",
      title: "Change, Wartungsfenster, Migration & Rollout",
      exam: ["AP1", "AP2"],
      summary: "Änderungen über einen Changeprozess steuern, Wartungsfenster mit dem Kunden abstimmen, Rollback-Pläne erstellen, Migrationsmethoden auswählen, Migrationsdauer berechnen und Rollouts planen.",
      html: `
    <p>Die Umsetzung eines Kundenprojekts bedeutet fast immer einen Eingriff in <strong>laufende</strong> Systeme. Damit der Betrieb des Kunden nicht leidet, werden Änderungen kontrolliert geplant, angekündigt, getestet – und können notfalls zurückgenommen werden.</p>
    <h5>Changeprozess</h5>
    <pre class="ascii">RfC stellen → erfassen/prüfen → bewerten (Nutzen, Risiko, Auswirkung, Aufwand)
 → genehmigen (Change Manager / CAB) → planen (Wartungsfenster, Rollback, Info)
 → umsetzen und testen → Review und Abschluss (dokumentieren)</pre>
    <table><thead><tr><th>Change-Typ</th><th>Merkmal</th><th>Beispiel</th></tr></thead><tbody>
      <tr><td><strong>Standard-Change</strong></td><td>geringes Risiko, vorab genehmigt, Ablauf beschrieben</td><td>neuen Benutzer anlegen, Standard-Software verteilen</td></tr>
      <tr><td><strong>Normal-Change</strong></td><td>einzeln bewerten und genehmigen (ggf. CAB)</td><td>Firewall ersetzen, Dateiserver migrieren</td></tr>
      <tr><td><strong>Notfall-Change</strong></td><td>sofort nötig, beschleunigte Genehmigung, Doku danach vervollständigen</td><td>kritische Sicherheitslücke schließen</td></tr>
    </tbody></table>
    <h5>Wartungsfenster und Kundenkommunikation</h5>
    <p>Ein <strong>Wartungsfenster</strong> ist ein mit dem Kunden vereinbarter Zeitraum, in dem Dienste eingeschränkt sein dürfen. Bei der Abstimmung beachtest du Geschäfts- und Schichtzeiten, Termine mit Spitzenlast (z. B. Monatsabschluss der Buchhaltung), Abhängigkeiten zu anderen Systemen und die Erreichbarkeit der Ansprechpartner. Die Nutzer werden vorab informiert: <em>Was</em> passiert, <em>wann</em>, <em>welche Auswirkungen</em>, <em>wer</em> ist erreichbar.</p>
    <h5>Rollback-Plan</h5>
    <ul>
      <li>Voraussetzungen: aktuelles Backup bzw. Snapshot, gesicherte Altkonfiguration, Altsystem nicht sofort abbauen</li>
      <li><strong>Go/No-Go-Kriterien</strong>: Wann wird zurückgerollt (z. B. Kerntest T01–T05 nicht bestanden)?</li>
      <li>spätester Entscheidungszeitpunkt (<em>Point of no Return</em>), Schritte, Verantwortliche, Dauer</li>
    </ul>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> Der Rollback muss selbst noch <strong>ins Wartungsfenster passen</strong>. Plane daher: Umsetzung + Tests + Rollback-Zeit ≤ Wartungsfenster.</div>
    <h5>Migrationsmethoden</h5>
    <table><thead><tr><th>Methode</th><th>Vorgehen</th><th>Vorteil</th><th>Nachteil</th></tr></thead><tbody>
      <tr><td><strong>Stichtag (Big Bang)</strong></td><td>alles auf einmal zu einem Termin</td><td>kurz, keine doppelte Datenhaltung</td><td>hohes Risiko, bei Fehlern sind alle betroffen</td></tr>
      <tr><td><strong>Parallelbetrieb</strong></td><td>alt und neu laufen eine Zeit gemeinsam</td><td>sicher, Vergleich möglich, Rückfall einfach</td><td>teuer, doppelter Aufwand, Datenabgleich nötig</td></tr>
      <tr><td><strong>stufenweise/Pilot</strong></td><td>erst Pilotgruppe, dann weitere Abteilungen in Wellen</td><td>Fehler früh bei wenigen Nutzern, lernen von Welle zu Welle</td><td>längere Gesamtdauer, Übergangsphase mit zwei Systemen</td></tr>
    </tbody></table>
    <h5>Datenmigration planen</h5>
    <div class="callout formel">Übertragungsdauer = Datenmenge in Bit ÷ effektive Datenrate in bit/s (Datenmenge mit Binärpräfix: 1 TiB = 2⁴⁰ Byte; Datenrate dezimal: 1 Gbit/s = 10⁹ bit/s)</div>
    <div class="callout beispiel">1,5 TiB sollen über 1 Gbit/s mit 70 % Effizienz kopiert werden.<br>
    1,5 × 2⁴⁰ × 8 bit ÷ (0,7 × 10⁹ bit/s) ≈ 18.849 s ≈ <strong>5 h 14 min</strong>.<br>
    Das Wartungsfenster am Samstag 18–24 Uhr (360 min) reicht dafür plus 30 min Tests – aber es bleiben nur 16 min, für einen Rollback also zu wenig. Lösung: Daten während der Woche <strong>vorab synchronisieren</strong> und am Stichtag nur die Änderungen (z. B. 3 % ≈ 9 min) übertragen.</div>
    <pre><code>REM Windows: Vorabkopie inkl. NTFS-Rechten, Protokoll schreiben
robocopy \\\\altserver\\daten D:\\daten /MIR /COPYALL /R:1 /W:1 /LOG:C:\\migration\\sync.log

# Linux: Vorabkopie mit Rechten, ACLs und erweiterten Attributen
rsync -aAX --delete /mnt/altserver/daten/ /srv/daten/</code></pre>
    <p>Außerdem: Daten <strong>klassifizieren</strong> (öffentlich, intern, vertraulich, streng vertraulich) und daraus Transportweg und Verschlüsselung ableiten; <strong>Formate und Zeichensätze</strong> prüfen (z. B. UTF-8 statt ISO-8859-1); <strong>Dateisysteme</strong> vergleichen (FAT32 erlaubt max. 4 GiB je Datei, NTFS-ACLs lassen sich nicht 1:1 auf ext4 abbilden, Linux unterscheidet Groß-/Kleinschreibung). Die Übernahme wird mit Datei- und Größenvergleich, Prüfsummen und Stichproben inkl. Rechten <strong>verifiziert</strong>.</p>
    <h5>Rollout</h5>
    <p>Beim Rollout vieler Arbeitsplätze plant man Pilotgruppe, Reihenfolge der Abteilungen, Zeitfenster, automatisierte Verteilung (Image, Softwareverteilung), Kommunikation und Rückfallplan.</p>
    <div class="callout beispiel">80 Clients, 35 min je Client, 3 Techniker parallel: 80 × 35 min ÷ 3 ≈ 933 min ≈ 15,6 h ≈ <strong>2 Arbeitstage</strong> à 8 h.</div>
    <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Berechnen</em> Sie die Dauer der Datenmigration“, „<em>Vergleichen</em> Sie zwei Migrationsmethoden und <em>empfehlen</em> Sie eine“, „<em>Beschreiben</em> Sie die Schritte eines Changeprozesses“, „<em>Nennen</em> Sie Inhalte eines Rollback-Plans“.</div>
      `
    },
    {
      id: "vertrag-recht",
      title: "Angebot, Verträge & Recht im Kundenprojekt",
      exam: ["AP1", "AP2"],
      summary: "Leistungsbeschreibung und Angebot erstellen, Kauf-, Werk-, Dienst- und Werklieferungsvertrag unterscheiden, Abnahme und ihre Rechtsfolgen kennen sowie HGB-Rügepflicht, AGB-Recht, UWG, Compliance und CRM im Kundengeschäft anwenden.",
      html: `
    <p>Zwischen Systemhaus und Kunde entstehen Verträge – und damit Rechte und Pflichten. Wer sie kennt, formuliert Angebote sauber und weiß, was bei Abnahme und Mängeln gilt.</p>
    <h5>Leistungsbeschreibung und Angebot</h5>
    <p>Die <strong>Leistungsbeschreibung</strong> legt fest, was genau geschuldet ist: Umfang und Mengen, Qualität, Termine, Mitwirkungspflichten des Kunden (z. B. Zugang zum Serverraum), Abnahmekriterien und ausdrückliche Ausschlüsse. Das <strong>Angebot</strong> ist rechtlich ein Antrag (§ 145 BGB) und bindet den Anbieter – außer bei Klauseln wie „freibleibend“. Inhalte: Leistung, Preis (netto, USt., brutto), Liefer- und Zahlungsbedingungen, Bindefrist, Gewährleistung, Hinweis auf die AGB.</p>
    <h5>Vertragsarten</h5>
    <table><thead><tr><th>Vertrag</th><th>geschuldet wird …</th><th>IT-Beispiel</th></tr></thead><tbody>
      <tr><td><strong>Kaufvertrag</strong> (§ 433 BGB)</td><td>Übergabe und Eigentum an einer Sache gegen Kaufpreis</td><td>Lieferung von 20 Notebooks</td></tr>
      <tr><td><strong>Werkvertrag</strong> (§ 631 BGB)</td><td>ein <strong>Erfolg</strong> (Werk), Vergütung nach Abnahme</td><td>„WLAN betriebsbereit einrichten“, Servermigration zum Festpreis</td></tr>
      <tr><td><strong>Dienstvertrag</strong> (§ 611 BGB)</td><td>eine <strong>Tätigkeit</strong>, kein Erfolg</td><td>Administration nach Stunden, Hotline, Schulung</td></tr>
      <tr><td><strong>Werklieferungsvertrag</strong> (§ 650 BGB)</td><td>Herstellung/Lieferung beweglicher Sachen – es gilt Kaufrecht</td><td>individuell zusammengebaute Workstations</td></tr>
      <tr><td><strong>Mietvertrag</strong> (§ 535 BGB) / <strong>Leasing</strong> (gesetzlich nicht eigens geregelt, überwiegend nach Mietrecht beurteilt)</td><td>Gebrauchsüberlassung auf Zeit</td><td>Multifunktionsdrucker im Leasing</td></tr>
    </tbody></table>
    <h5>Abnahme beim Werkvertrag (§ 640 BGB)</h5>
    <p>Der Kunde muss das vertragsgemäß hergestellte Werk abnehmen; wegen <em>unwesentlicher</em> Mängel darf er die Abnahme nicht verweigern. Setzt der Auftragnehmer nach Fertigstellung eine angemessene Frist und verweigert der Kunde die Abnahme nicht unter Angabe mindestens eines Mangels, gilt das Werk als abgenommen (<em>fiktive Abnahme</em>; bei Verbrauchern nur mit Hinweis auf diese Folge in Textform).</p>
    <table><thead><tr><th>Rechtsfolgen der Abnahme</th></tr></thead><tbody>
      <tr><td>Die Vergütung wird fällig (§ 641 BGB).</td></tr>
      <tr><td>Die Gefahr (zufälliger Untergang/Beschädigung) geht auf den Kunden über (§ 644 BGB).</td></tr>
      <tr><td>Die Verjährungsfrist für Mängelansprüche beginnt (§ 634a BGB).</td></tr>
      <tr><td>Die Beweislast kehrt sich um: Nun muss der Kunde einen Mangel beweisen.</td></tr>
      <tr><td>Bekannte Mängel muss der Kunde sich bei der Abnahme <strong>vorbehalten</strong>, sonst verliert er Rechte (§ 640 Abs. 3 BGB).</td></tr>
    </tbody></table>
    <p><strong>Mängelrechte beim Werkvertrag</strong> (§ 634 BGB): zuerst <strong>Nacherfüllung</strong> (der Auftragnehmer wählt Nachbesserung oder Neuherstellung), nach erfolglosem Fristablauf Selbstvornahme mit Aufwendungsersatz, Rücktritt oder Minderung sowie ggf. Schadensersatz.</p>
    <h5>Kaufleute untereinander (HGB)</h5>
    <ul>
      <li>Kaufmann ist, wer ein Handelsgewerbe betreibt (§ 1 HGB); GmbH und AG sind es kraft Rechtsform.</li>
      <li>Beim beiderseitigen Handelskauf muss der Käufer die Ware <strong>unverzüglich untersuchen und Mängel rügen</strong> (§ 377 HGB), versteckte Mängel unverzüglich nach Entdeckung – sonst gilt die Ware als genehmigt.</li>
      <li>Schweigen auf ein <strong>kaufmännisches Bestätigungsschreiben</strong> gilt als Zustimmung zu dessen Inhalt.</li>
    </ul>
    <h5>AGB, UWG, Compliance, CRM</h5>
    <ul>
      <li><strong>AGB</strong> (§§ 305 ff. BGB): werden nur Vertragsinhalt, wenn wirksam einbezogen. Individuelle Absprachen haben Vorrang (§ 305b), überraschende Klauseln werden nicht Vertragsbestandteil (§ 305c), unangemessen benachteiligende sind unwirksam (§ 307) – dann gilt insoweit das Gesetz, der Vertrag bleibt im Übrigen wirksam (§ 306).</li>
      <li><strong>UWG</strong>: verboten sind z. B. irreführende Werbung (§ 5) und unzumutbare Belästigung (§ 7) wie Werbe-E-Mails ohne vorherige ausdrückliche Einwilligung. Folgen: Abmahnung, Unterlassung, Schadensersatz.</li>
      <li><strong>Compliance</strong>: Einhaltung von Gesetzen, Normen und internen Richtlinien (Datenschutz, Lizenzbedingungen, Antikorruption, Geschenkerichtlinie). Verstöße führen zu Bußgeldern, Haftung und Imageschaden.</li>
      <li><strong>CRM</strong> (Customer Relationship Management): bündelt Kontakte, Historie, Angebote, Verträge und Tickets eines Kunden. Datenschutz beachten: Rechtsgrundlage, Zweckbindung, Löschfristen, Rollen und Rechte, Auftragsverarbeitungsvertrag bei Cloud-CRM (Art. 28 DSGVO).</li>
    </ul>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> „Einrichtung eines funktionsfähigen Netzwerks“ ist ein <strong>Werkvertrag</strong> (Erfolg), „10 Stunden Administration“ ein <strong>Dienstvertrag</strong> (Tätigkeit). Die Rügepflicht nach § 377 HGB gilt nur, wenn <strong>beide</strong> Seiten Kaufleute sind.</div>
    <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Ordnen</em> Sie die Leistung einer Vertragsart zu und <em>begründen</em> Sie“, „<em>Nennen</em> Sie drei Rechtsfolgen der Abnahme“, „<em>Prüfen</em> Sie, ob die Klausel wirksam ist“, „<em>Beurteilen</em> Sie die Werbe-E-Mail nach UWG“.</div>
      `
    },
    {
      id: "abnahme-uebergabe",
      title: "Abnahme, Übergabe, Schulung & Kundendokumentation",
      exam: ["AP1", "AP2"],
      summary: "Die Abnahme durchführen und protokollieren, Leistungen mit Übergabeprotokoll übergeben, ein Schulungskonzept erstellen, Benutzer- und Systemdokumentation zielgruppengerecht verfassen und die Akzeptanz der Anwender fördern.",
      html: `
    <p>Ein Projekt ist erst dann erfolgreich, wenn der Kunde das Ergebnis <strong>abgenommen</strong> hat, es <strong>bedienen</strong> kann und die nötigen <strong>Unterlagen</strong> besitzt. Die Kunden- bzw. Anwenderdokumentation ist in der IHK-Bewertung ein eigener Punkt.</p>
    <h5>Abnahme und Abnahmeprotokoll</h5>
    <p>Die Abnahme erfolgt anhand der vorher vereinbarten <strong>Abnahmekriterien</strong> (Lastenheft/Pflichtenheft) – meist mit einem Abnahmetest gemeinsam mit dem Kunden. Das Ergebnis hält das <strong>Abnahmeprotokoll</strong> fest:</p>
    <ul>
      <li>Vertragsparteien, Projekt/Auftrag, Datum, Ort, Teilnehmende</li>
      <li>abgenommene Leistung mit Bezug auf Vertrag bzw. Pflichtenheft</li>
      <li>Prüfergebnisse (Verweis auf das Testprotokoll)</li>
      <li>festgestellte Mängel mit Einstufung und <strong>Frist zur Beseitigung</strong>, Vorbehalte des Kunden</li>
      <li>Entscheidung: abgenommen · abgenommen unter Vorbehalt · Abnahme verweigert</li>
      <li>Unterschriften beider Seiten</li>
    </ul>
    <div class="callout merke"><strong>Merke:</strong> Das unterschriebene Abnahmeprotokoll ist der Nachweis, dass der Werkvertrag erfüllt ist – ab hier wird die Vergütung fällig, die Gefahr geht über und die Verjährung der Mängelansprüche beginnt.</div>
    <h5>Übergabe</h5>
    <p>Das <strong>Übergabeprotokoll</strong> listet, was der Kunde erhält: Geräte mit Seriennummern, Lizenzen und Lizenznachweise, Dokumentation, Garantie- und Supportinformationen, Ansprechpartner. <strong>Zugangsdaten</strong> werden getrennt und sicher übergeben (z. B. Passwortmanager, persönliche Übergabe, Änderung bei der ersten Anmeldung) – niemals im Klartext im Protokoll oder per unverschlüsselter E-Mail.</p>
    <h5>Kundendokumentation</h5>
    <table><thead><tr><th></th><th>Benutzerhandbuch / Kurzanleitung</th><th>System- bzw. Administratorhandbuch</th></tr></thead><tbody>
      <tr><td>Zielgruppe</td><td>Anwender ohne IT-Fachwissen</td><td>Administratoren, Support, Dienstleister</td></tr>
      <tr><td>Inhalt</td><td>Bedienung Schritt für Schritt, Screenshots, häufige Fragen, Hilfe/Ansprechpartner</td><td>Aufbau und Netzplan, IP-Adressen, Konfigurationen, Dienste und Abhängigkeiten, Backup und Restore, Wartung, Notfallmaßnahmen, Änderungshistorie</td></tr>
      <tr><td>Stil</td><td>einfach, handlungsorientiert, wenig Fachbegriffe</td><td>technisch präzise, vollständig</td></tr>
    </tbody></table>
    <p>Gute Dokumentation ist <strong>zielgruppengerecht</strong>, aktuell und <strong>versioniert</strong> (Versionsnummer, Datum, Autor, Änderungen), hat einen festen Ablageort und ist möglichst barrierefrei (klare Struktur, Alternativtexte, ausreichender Kontrast). Für Routinetätigkeiten helfen <strong>Checklisten</strong> (z. B. „Neuen Mitarbeiter-Laptop ins WLAN aufnehmen“).</p>
    <h5>Schulungskonzept</h5>
    <table><thead><tr><th>Frage</th><th>Inhalt des Konzepts</th></tr></thead><tbody>
      <tr><td>Wer?</td><td>Zielgruppen und Vorkenntnisse (Key User, Anwender, Administratoren)</td></tr>
      <tr><td>Was?</td><td>Lernziele und Inhalte je Zielgruppe</td></tr>
      <tr><td>Wie?</td><td>Methode: Präsenz, Webinar, E-Learning, <strong>Blended Learning</strong>, Multiplikatoren (Key User schulen Kollegen)</td></tr>
      <tr><td>Wann/wie lange?</td><td>Termin möglichst kurz vor der Einführung, Dauer, Gruppengröße</td></tr>
      <tr><td>Womit?</td><td>Schulungsumgebung, Unterlagen, Kurzanleitung</td></tr>
      <tr><td>Erfolg?</td><td>Übungsaufgabe, Feedbackbogen, Anzahl Tickets nach dem Go-live</td></tr>
    </tbody></table>
    <div class="callout beispiel"><strong>Autohaus Friesen, neues WLAN mit Zertifikaten:</strong> 2 Key User aus der Werkstatt erhalten eine 3-stündige Einweisung inkl. Gastzugang-Verwaltung; die 24 übrigen Beschäftigten lernen in 3 Gruppen à 8 Personen in je 45 Minuten, wie sie sich anmelden und Gäste-Voucher ausgeben. Jede Person erhält eine einseitige Kurzanleitung als PDF.</div>
    <h5>Akzeptanz: Veränderungen begleiten</h5>
    <p>Neue Systeme lösen oft Widerstand aus (Angst vor Überforderung, Gewohnheit, schlechte Erfahrungen). Nach <strong>Lewin</strong> verläuft Veränderung in drei Schritten: <em>Auftauen</em> (Notwendigkeit erklären, früh informieren) → <em>Verändern</em> (einführen, schulen, unterstützen) → <em>Stabilisieren</em> (neue Abläufe festigen, Erfolge zeigen). Promotoren und Key User als Multiplikatoren einbinden, Skeptiker ernst nehmen.</p>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> Eine Benutzerdokumentation mit IP-Adressen und Konfigurationsdetails ist <strong>nicht</strong> zielgruppengerecht. Umgekehrt reicht dem Administrator eine bebilderte Klickanleitung nicht.</div>
    <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Nennen</em> Sie fünf Inhalte eines Abnahmeprotokolls“, „<em>Unterscheiden</em> Sie Benutzer- und Systemdokumentation“, „<em>Erstellen</em> Sie ein Schulungskonzept für die Mitarbeitenden“, „<em>Beschreiben</em> Sie Maßnahmen zur Förderung der Akzeptanz“.</div>
      `
    },
    {
      id: "projektabschluss",
      title: "Soll-Ist-Vergleich, Projektbewertung & Lessons Learned",
      exam: ["AP1", "AP2"],
      summary: "Projektfortschritt und Ergebnis per Soll-Ist-Vergleich messen, Abweichungen berechnen und begründen, das Projekt nach Zielerreichung, Wirtschaftlichkeit, Skalierbarkeit und Verlässlichkeit bewerten und Lessons Learned sichern.",
      html: `
    <p>Zum Projektabschluss gehört mehr als „fertig“: Du prüfst, ob die Ziele erreicht wurden, bewertest das Ergebnis, holst die Meinung des Kunden ein und sicherst die Erfahrungen für künftige Projekte. Im IHK-Projekt sind Soll-Ist-Vergleich und Fazit Pflichtbestandteile der Dokumentation.</p>
    <h5>Controlling während des Projekts</h5>
    <p>Schon während der Umsetzung vergleicht die Projektleitung regelmäßig Plan und Ist (Termine, Aufwand, Kosten, Ergebnis) und berichtet im <strong>Statusbericht</strong>, oft mit Ampel (grün = im Plan, gelb = Abweichung beherrschbar, rot = Eingreifen nötig). So kann rechtzeitig gegengesteuert werden.</p>
    <h5>Soll-Ist-Vergleich</h5>
    <div class="callout formel">Abweichung absolut = Ist − Soll · Abweichung relativ = (Ist − Soll) ÷ Soll × 100 %</div>
    <table><thead><tr><th>Phase</th><th>Soll (h)</th><th>Ist (h)</th><th>Abweichung</th><th>Begründung</th></tr></thead><tbody>
      <tr><td>Analyse</td><td>5</td><td>4</td><td>−1 h (−20 %)</td><td>Netzpläne des Kunden waren aktuell</td></tr>
      <tr><td>Planung</td><td>8</td><td>7</td><td>−1 h (−12,5 %)</td><td>Vorlagen aus früherem Projekt genutzt</td></tr>
      <tr><td>Durchführung</td><td>14</td><td>16</td><td>+2 h (+14,29 %)</td><td>zwei Drucker konnten kein 802.1X → MAC-basierte Ausnahme eingerichtet</td></tr>
      <tr><td>Test/QS</td><td>4</td><td>5</td><td>+1 h (+25 %)</td><td>Nachtest nach Firewallkorrektur</td></tr>
      <tr><td>Übergabe</td><td>3</td><td>3</td><td>0 h</td><td>–</td></tr>
      <tr><td>Dokumentation</td><td>6</td><td>5</td><td>−1 h (−16,67 %)</td><td>Doku projektbegleitend geführt</td></tr>
      <tr><td><strong>Summe</strong></td><td><strong>40</strong></td><td><strong>40</strong></td><td><strong>0 h</strong></td><td>Mehraufwand durch Einsparungen ausgeglichen</td></tr>
    </tbody></table>
    <p>Kosten: Budget 4.500 €, Ist 4.230 € → −270 € bzw. −6 %. Sachziel: 45 von 45 Clients authentifizieren sich per Zertifikat (100 %); die Druckerausnahme ist dokumentiert und begründet.</p>
    <h5>Kennzahlen für den Projekterfolg</h5>
    <table><thead><tr><th>Kennzahl</th><th>Berechnung</th><th>Beispiel</th></tr></thead><tbody>
      <tr><td>Terminabweichung</td><td>Ist-Endtermin − Soll-Endtermin (in Arbeitstagen)</td><td>0 AT → Termin gehalten</td></tr>
      <tr><td>Kostenabweichung</td><td>(Ist − Soll) ÷ Soll × 100</td><td>(4.230 € − 4.500 €) ÷ 4.500 € × 100 = −6 %</td></tr>
      <tr><td>Zielerreichungsgrad</td><td>erfüllte Muss-Anforderungen ÷ alle Muss-Anforderungen × 100</td><td>45 von 45 Clients = 100 %</td></tr>
      <tr><td>Fehlerquote im Test</td><td>nicht bestandene ÷ durchgeführte Testfälle × 100</td><td>1 von 20 im ersten Durchlauf = 5 %</td></tr>
      <tr><td>Supportaufkommen nach Go-live</td><td>Anzahl Tickets in den ersten zwei Wochen</td><td>3 statt der befürchteten 10 → Schulung hat gewirkt</td></tr>
    </tbody></table>
    <h5>Projekt bewerten</h5>
    <table><thead><tr><th>Kriterium</th><th>Leitfrage</th><th>Beispiel</th></tr></thead><tbody>
      <tr><td><strong>Zielerreichung</strong></td><td>Sach-, Qualitäts-, Zeit- und Kostenziel erreicht?</td><td>alle Muss-Anforderungen erfüllt, Termin gehalten</td></tr>
      <tr><td><strong>Wirtschaftlichkeit</strong></td><td>Stehen Kosten und Nutzen im richtigen Verhältnis? Amortisation?</td><td>weniger Supporttickets durch Self-Service</td></tr>
      <tr><td><strong>Skalierbarkeit</strong></td><td>Wächst die Lösung mit?</td><td>Speicher wächst 15 % pro Jahr: 4 TiB × 1,15³ ≈ 6,08 TiB nach 3 Jahren – NAS hat 8 TiB nutzbar</td></tr>
      <tr><td><strong>Verlässlichkeit</strong></td><td>Wie verfügbar und robust ist die Lösung?</td><td>99,5 % Verfügbarkeit = max. 8.760 h × 0,005 = 43,8 h Ausfall pro Jahr; Single Point of Failure benannt</td></tr>
      <tr><td><strong>Kundensicht</strong></td><td>Ist der Kunde zufrieden? Welche Kritik gibt es?</td><td>Abschlussgespräch, kurzer Fragebogen</td></tr>
    </tbody></table>
    <p>Die <strong>Kritik des Kunden</strong> gehört ausdrücklich in die Reflexion – auch wenn sie unangenehm ist.</p>
    <h5>Projektabschluss</h5>
    <ul>
      <li>Abnahme und Übergabe in den Betrieb (ggf. Wartungsvertrag/SLA, Folgeaufträge)</li>
      <li><strong>Abschlussbericht</strong> (Zielerreichung, Soll-Ist-Vergleich, offene Punkte, Empfehlungen, Lessons Learned) und Abschlussbesprechung mit dem Kunden, Unterlagen archivieren</li>
      <li>Ressourcen freigeben, Team auflösen, Erfolge würdigen</li>
    </ul>
    <h5>Lessons Learned</h5>
    <p>In einer Lessons-Learned-Runde bzw. Retrospektive beantwortet das Team drei Fragen: <em>Was lief gut und soll beibehalten werden?</em> – <em>Was lief schlecht?</em> – <em>Was machen wir beim nächsten Mal anders?</em> Die Ergebnisse werden konkret formuliert („Lieferzeiten der Hardware beim Projektstart abfragen“) und in einer Wissensdatenbank abgelegt, damit Folgeprojekte davon profitieren. Dabei gelten Feedbackregeln: konkret, beschreibend statt wertend, Ich-Botschaften, zeitnah; wer Feedback erhält, hört zu und rechtfertigt sich nicht.</p>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> Relative Abweichungen immer auf den <strong>Soll</strong>-Wert beziehen. Eine Abweichung ohne Begründung ist in der Projektdoku wertlos – die Prüfer wollen sehen, dass du Ursachen erkennst und bewertest.</div>
    <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Berechnen</em> Sie die Abweichungen absolut und prozentual“, „<em>Nennen</em> Sie mögliche Ursachen“, „<em>Beschreiben</em> Sie, wie Lessons Learned durchgeführt werden“, „<em>Bewerten</em> Sie das Projektergebnis hinsichtlich Skalierbarkeit“.</div>
      `
    },
    {
      id: "ihk-projektantrag",
      title: "IHK-Projektarbeit I: Rahmen, Thema, Projektantrag & Durchführung",
      exam: ["AP2"],
      summary: "Die Vorgaben der FIAusbV zur betrieblichen Projektarbeit kennen, ein geeignetes FISI-Thema finden, den Projektantrag mit 40-Stunden-Zeitplan formulieren, Fristen der IHK Flensburg einhalten und das Projekt nachvollziehbar durchführen.",
      html: `
    <p>Der Prüfungsbereich „Planen und Umsetzen eines Projektes der Systemintegration“ zählt <strong>50 % deiner Gesamtnote</strong> – so viel wie kein anderer Teil. Er besteht aus zwei gleich gewichteten Teilen: (1) betriebliche Projektarbeit mit Dokumentation und (2) Präsentation mit Fachgespräch.</p>
    <h5>Rechtlicher Rahmen (§ 20 FIAusbV)</h5>
    <p>Im Projekt weist du nach, dass du …</p>
    <ol>
      <li>auftragsbezogene Anforderungen analysieren kannst,</li>
      <li>Lösungsalternativen nach technischen, wirtschaftlichen und qualitativen Aspekten vorschlagen kannst,</li>
      <li>Systemänderungen und -erweiterungen durchführen und übergeben kannst,</li>
      <li>IT-Systeme einführen und pflegen kannst,</li>
      <li>Schwachstellen analysieren sowie Schutzmaßnahmen vorschlagen und umsetzen kannst,</li>
      <li>Projekte anforderungsgerecht dokumentieren kannst.</li>
    </ol>
    <p>Für Projektarbeit <strong>und</strong> Dokumentation stehen <strong>höchstens 40 Stunden</strong> zur Verfügung. Vor Beginn legst du dem Prüfungsausschuss eine Projektbeschreibung (Projektantrag) mit mindestens <strong>Ausgangssituation, Projektziel und Zeitplanung</strong> zur Genehmigung vor. Laut IHK-Leitfäden müssen alle sechs Punkte im Projekt vorkommen – also auch <strong>Alternativen</strong> und <strong>IT-Sicherheit</strong>.</p>
    <h5>Fristen der IHK Flensburg</h5>
    <table><thead><tr><th>Schritt</th><th>Winterprüfung</th><th>Sommerprüfung</th></tr></thead><tbody>
      <tr><td>Antrag im Bildungsportal</td><td>Mitte September</td><td>Mitte Februar</td></tr>
      <tr><td>Durchführungszeitraum</td><td>15.10.–15.11.</td><td>01.04.–01.05.</td></tr>
      <tr><td>Abgabe der Dokumentation</td><td colspan="2">Termin kommt mit dem PIN-Schreiben</td></tr>
    </tbody></table>
    <div class="callout achtung"><strong>Achtung, IHK-abhängig und ohne Gewähr:</strong> Die Werte stammen aus den Hinweisen der IHK Schleswig-Holstein; das genaue Datum steht im PIN-Schreiben bzw. im Bildungsportal. Die Antragsfrist ist eine <strong>Ausschlussfrist</strong>. Für die Winterprüfung 2026/27 dürfte sie am 23.09.2026 bereits abgelaufen sein – wer betroffen ist, klärt das sofort mit Betrieb und IHK.</div>
    <h5>Genehmigung</h5>
    <p>Mit dem Projekt darfst du erst nach der <strong>schriftlichen Genehmigung</strong> beginnen. Mögliche Ergebnisse: <em>genehmigt</em> · <em>genehmigt mit Auflagen/Hinweisen</em> (diese sind bindend und in der Doku umzusetzen) · <em>abgelehnt</em> (Überarbeitung innerhalb einer kurzen Nachfrist, ggf. mit neuem Thema). Wird auch der überarbeitete Antrag abgelehnt, kann das Projekt im laufenden Prüfungstermin unter Umständen nicht mehr stattfinden (IHK-abhängig).</p>
    <h5>Inhalte des Projektantrags</h5>
    <p>Die Felder unterscheiden sich je IHK; typisch sind: <strong>Projektbezeichnung</strong> (konkret, ergebnisorientiert), <strong>Ausgangssituation/Ist-Analyse</strong>, <strong>Projektziel</strong> (Sach-, Zeit-, Kosten-, Qualitätsziel), Auftraggeber und Projektumfeld/Schnittstellen, geplante <strong>Lösungsalternativen</strong>, Schwachstellenanalyse und Schutzmaßnahmen, Abgrenzung <strong>Eigen- vs. Fremdleistung</strong>, <strong>Zeitplanung</strong> mit Phasen und Stunden sowie geplante praxisbezogene Unterlagen.</p>
    <div class="callout beispiel"><strong>Zeitplanung (40 h)</strong> für „Einführung von WPA3-Enterprise mit RADIUS-Authentifizierung im Firmen-WLAN der Autohaus Friesen GmbH“:<br>
    Analyse 5 h (Ist-Analyse 2 h, Anforderungsgespräch 1 h, Schwachstellenanalyse 2 h) · Planung 8 h (Alternativen und NWA 3 h, Soll-Konzept 2 h, Kosten- und Testplanung 3 h) · Durchführung 14 h (RADIUS und Zertifikate 6 h, Switch/VLAN 3 h, Access Points 5 h) · Test/QS 4 h · Übergabe und Einweisung 3 h · Dokumentation 6 h → <strong>Summe 40 h</strong></div>
    <p>Als Richtwert nennen mehrere IHKs für die Dokumentation etwa <strong>15 % der Zeit (≈ 6 h)</strong>. Die Erstellung der Präsentation zählt nicht zur Projektzeit. Wie weit die 40 h unterschritten werden dürfen, regelt jede Kammer selbst (Beispiele anderer IHKs: bis zu 20 % weniger, also mindestens 32 h, oder mindestens 36 h). Plane deshalb möglichst genau 40 h und belege die Stunden im Projekttagebuch.</p>
    <h5>Geeignete und ungeeignete Themen</h5>
    <div class="grid-2">
      <div><strong>geeignet (Beispiele)</strong><ul><li>Einführung von 802.1X/NAC im Unternehmens-LAN</li><li>Migration auf eine neue Virtualisierungsplattform</li><li>Backup- und Wiederherstellungskonzept mit unveränderlichem Speicher</li><li>Monitoring mit Alarmierung (z. B. Zabbix)</li><li>Neukonzeption des Netzes mit VLAN-Segmentierung</li><li>zentrale Patch- und Softwareverteilung</li><li>VPN-Neukonzeption für Homeoffice</li></ul></div>
      <div><strong>ungeeignet</strong><ul><li>Routinetätigkeiten (z. B. 20 PCs nach Checkliste aufsetzen)</li><li>künstliche Aufgaben ohne echten Auftraggeber</li><li>reine Softwareentwicklung (gehört zum FIAE)</li><li>Literatur- oder Rechercheaufgaben</li><li>Gruppenprojekte ohne klar abgegrenzte Eigenleistung</li><li>Themen ohne Entscheidungsspielraum (keine Alternativen)</li></ul></div>
    </div>
    <div class="callout tipp"><strong>Titel-Check:</strong> Schwach: „Netzwerk-Projekt“. Gut: „Einführung einer zertifikatsbasierten WLAN-Authentifizierung (WPA3-Enterprise) mit Gästenetz für die Autohaus Friesen GmbH“ – Ergebnis, Technik und Kunde sind erkennbar.</div>
    <h5>Durchführung</h5>
    <ul>
      <li><strong>Projekttagebuch</strong> führen: Datum, Tätigkeit, Stunden, Entscheidungen, Probleme</li>
      <li>Abweichungen vom Antrag festhalten und begründen; Auflagen des Ausschusses umsetzen</li>
      <li>Gespräche, Tests, Abnahme und Übergabe protokollieren (spätere Anlagen)</li>
      <li>Kundendaten, Passwörter und öffentliche IP-Adressen anonymisieren bzw. schwärzen</li>
    </ul>
    <div class="callout merke"><strong>Merke:</strong> Bewertet wird dein <strong>Arbeitsprozess</strong>: Analyse, Entscheidungen, Umsetzung, QS, Übergabe. Ein Projekt ohne echte Alternativen und ohne Sicherheitsbetrachtung erfüllt § 20 nicht vollständig.</div>
    <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Im Antrag bewertet der Ausschuss Eignung, Umfang und Vollständigkeit. Im Fachgespräch musst du <em>begründen</em>, warum dein Thema ein Projekt ist, wie du die Zeit geplant hast und warum du von der Planung abgewichen bist.</div>
      `
    },
    {
      id: "ihk-doku-praesentation",
      title: "IHK-Projektarbeit II: Dokumentation, Präsentation & Fachgespräch",
      exam: ["AP2"],
      summary: "Die Projektdokumentation nach den Vorgaben der IHK aufbauen, typische Fehler vermeiden, eine 15-minütige Präsentation mit passenden Diagrammen gestalten und das Fachgespräch souverän führen – inklusive Bewertung und Bestehensregeln.",
      html: `
    <h5>Projektdokumentation</h5>
    <p>Die Doku ist ein <strong>handlungsorientierter Prozessbericht</strong> in Ich- oder Wir-Form – kein Lehrbuch. Sie zeigt, was du wann und <em>warum</em> getan hast. Vorgaben der IHK Flensburg laut IHK-Hinweisen: max. <strong>10 Seiten DIN A4</strong> Text plus max. <strong>25 Seiten Anhang</strong>, Arial 11, einzeilig, fortlaufend nummeriert; Upload im Bildungsportal, danach Freigabe durch den Ausbildungsbetrieb (IHK-abhängig – vor Abgabe mit dem PIN-Schreiben abgleichen).</p>
    <table><thead><tr><th>Teil</th><th>Inhalt</th></tr></thead><tbody>
      <tr><td>Vorspann</td><td>Deckblatt, persönliche Erklärung (selbstständig angefertigt, nur angegebene Hilfsmittel), Inhaltsverzeichnis</td></tr>
      <tr><td>Einleitung</td><td>Ausgangssituation, Auftraggeber, Projektumfeld und Schnittstellen, Ist-Analyse, messbare Ziele, Abgrenzung</td></tr>
      <tr><td>Planung</td><td>Soll-Konzept, Lösungsalternativen mit Entscheidung (z. B. NWA), Zeit-, Ressourcen- und Kostenplanung, QS-Planung, Schwachstellen- bzw. Schutzbedarfsanalyse</td></tr>
      <tr><td>Durchführung</td><td>Umsetzungsschritte, Entscheidungen, Probleme und Abweichungen</td></tr>
      <tr><td>QS</td><td>Tests, umgesetzte technische und organisatorische Schutzmaßnahmen</td></tr>
      <tr><td>Abschluss</td><td>Abnahme, Übergabe, Soll-Ist-Vergleich, Fazit, Ausblick</td></tr>
      <tr><td>Anhang</td><td>Quellen, Glossar, Gesprächs-, Test-, Abnahme- und Übergabeprotokolle, Netzpläne, Konfigurationsauszüge, Kunden- bzw. Anwenderdokumentation</td></tr>
    </tbody></table>
    <h5>Quellen, persönliche Erklärung, Anhang</h5>
    <ul>
      <li><strong>Quellen:</strong> Fremde Inhalte (Herstellerdoku, BSI, Normen, Foren) belegst du im Text mit einem Kurzverweis (z. B. [3]) und im Quellenverzeichnis vollständig: Autor bzw. Herausgeber, Titel, ggf. Version/Ausgabe, bei Internetquellen URL und Abrufdatum. Wörtliche Zitate stehen in Anführungszeichen und bleiben die Ausnahme.</li>
      <li><strong>Abbildungen und Tabellen</strong> werden nummeriert und beschriftet; eigene Screenshots vorher anonymisieren.</li>
      <li><strong>Persönliche Erklärung:</strong> Mit deiner Unterschrift versicherst du, dass du Projekt und Dokumentation selbstständig angefertigt und nur die angegebenen Quellen und Hilfsmittel genutzt hast (Formular bzw. Vorgabe deiner IHK verwenden). Eine falsche Erklärung ist eine Täuschung.</li>
      <li><strong>KI-Werkzeuge</strong> legst du offen: Die IHK Berlin wertet ungekennzeichnete KI-Nutzung als Täuschung; für Schleswig-Holstein ist keine Regel veröffentlicht – im Zweifel nachfragen und immer kennzeichnen. Jede Entscheidung musst du im Fachgespräch selbst erklären können.</li>
      <li><strong>Anhang:</strong> nur Unterlagen, auf die der Text verweist (A1, A2 …). Der Anhang ergänzt Belege, er ersetzt keine Begründung im Text.</li>
    </ul>
    <div class="callout beispiel"><strong>Quellenangabe im Verzeichnis:</strong><br>[3] Bundesamt für Sicherheit in der Informationstechnik (BSI): IT-Grundschutz-Kompendium, Edition 2023, Baustein CON.3 Datensicherungskonzept. Online: https://www.bsi.bund.de (abgerufen am 02.11.2026).<br><strong>Im Text:</strong> „Die Aufbewahrungsdauer der Sicherungen habe ich am Datensicherungskonzept des BSI ausgerichtet [3] und mit der Praxisleitung abgestimmt.“</div>
    <p><strong>Beispiel einer Bewertungsmatrix</strong> (IHK-abhängig): Ausgangssituation 15 % · Ressourcen- und Ablaufplanung 15 % · Durchführung und Auftragsbearbeitung 30 % · Projektergebnisse 15 % · Gestaltung 15 % · Kundendokumentation 10 %.</p>
    <div class="callout achtung"><strong>Typische Fehler:</strong> Eigenleistung nicht erkennbar · Entscheidungen nicht begründet · keine echten Alternativen · IT-Sicherheit fehlt · Auflagen aus der Genehmigung ignoriert · Abweichungen vom Antrag unbegründet · Zeit oder Seitenzahl überschritten · Lehrbuchtexte statt Prozessbeschreibung · aufgeblähter Anhang · keine Kundendokumentation · nicht anonymisierte Daten.</div>
    <h5>Präsentation (soll höchstens 15 Minuten dauern)</h5>
    <p>Zielgruppe ist der <strong>fachkundige Prüfungsausschuss</strong>. Bewährter Aufbau: Ausgangssituation und Ziel → Alternativen und Entscheidung → Vorgehen mit Schlüsselentscheidungen → IT-Sicherheit und QS → Ergebnis mit Soll-Ist-Vergleich → Fazit und Ausblick. Bewertet werden in der Regel Aufbau und Struktur, sprachliche Gestaltung (Fachsprache, freier Vortrag, Körpersprache) sowie zielgruppen- und fachgerechte Darstellung (Medieneinsatz, Visualisierung). Der Ausschuss darf nach Ablauf der Zeit abbrechen – also mehrfach proben (Ziel etwa 12–15 min).</p>
    <table><thead><tr><th>Darstellung</th><th>geeignet für</th><th>Beispiel im Projekt</th></tr></thead><tbody>
      <tr><td>Säulen-/Balkendiagramm</td><td>Vergleich von Werten</td><td>Soll-Ist-Stunden je Phase, Kosten der Alternativen</td></tr>
      <tr><td>Liniendiagramm</td><td>Verlauf über die Zeit</td><td>WLAN-Auslastung über einen Tag</td></tr>
      <tr><td>Kreisdiagramm</td><td>Anteile an einem Ganzen</td><td>Anteil der Projektphasen an 40 h</td></tr>
      <tr><td>Streudiagramm</td><td>Zusammenhang zweier Größen</td><td>Signalstärke gegen Entfernung zum AP</td></tr>
      <tr><td>Netzplan/Topologie</td><td>Aufbau und Abhängigkeiten</td><td>Netzwerkplan vorher/nachher</td></tr>
    </tbody></table>
    <p>Folien: wenige Stichpunkte, große Schrift, einheitliches Layout (Corporate Identity des Betriebs ist möglich, wird aber nicht bewertet), Folien nummerieren. Eigene Technik (Laptop, Adapter, Presenter) mitbringen, Ersatz als PDF auf USB-Stick und auf Papier bereithalten.</p>
    <h5>Fachgespräch</h5>
    <p>Präsentation und Fachgespräch dauern zusammen <strong>höchstens 30 Minuten</strong>, das Fachgespräch also in der Regel etwa 15 Minuten. Gefragt wird zum Projekt <strong>und seinem fachlichen Umfeld</strong> – auch zu Dingen, die nicht in der Doku stehen. Bewertet werden Fachwissen und Fachsprache, Problemlösungskompetenz sowie Argumentation und Begründung.</p>
    <ul>
      <li>Typische Fragen: Warum diese Lösung und nicht die Alternative? Was passiert, wenn Komponente X ausfällt? Wie funktioniert die eingesetzte Technik genau? Wie hast du getestet, was wäre dein Rollback gewesen? Was würdest du heute anders machen?</li>
      <li>Vollständig und strukturiert antworten (nicht einsilbig), Wissenslücken ehrlich zugeben und zu Bekanntem überleiten, nicht mit dem Ausschuss diskutieren.</li>
    </ul>
    <h5>Bewertung und Bestehen</h5>
    <div class="callout beispiel">Doku 72 Punkte, Präsentation und Fachgespräch 84 Punkte → Projektbereich = 0,5 × 72 + 0,5 × 84 = <strong>78 Punkte</strong>. Das Projekt fließt mit 50 % in die Gesamtnote ein.</div>
    <p>Das Projekt ist einer der vier Prüfungsbereiche von Teil 2. Es darf <strong>nicht „ungenügend“</strong> (unter 30 Punkte) sein, und höchstens ein Bereich von Teil 2 darf „mangelhaft“ sein. Für das Projekt gibt es <strong>keine mündliche Ergänzungsprüfung</strong> – sie ist nur in KAIS, AEN oder WiSo möglich.</p>
    <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Die Doku wird schriftlich nach einer Bewertungsmatrix beurteilt, Präsentation und Fachgespräch mündlich direkt im Anschluss. Übe typische Fragen laut mit Kollegen oder Ausbilder und stoppe die Zeit deiner Präsentation.</div>
      `
    },
  ],
  exercises: [
    {
      id: "e-projekt-1",
      topic: "projekt-grundlagen",
      title: "Projekt oder Routine? Merkmale und magisches Dreieck",
      level: 1,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH in Heide betreut mehrere Kunden an der Westküste. Folgende Vorhaben stehen an:</p>
        <ol>
          <li>monatliche Kontrolle der Backup-Protokolle bei einem Steuerbüro</li>
          <li>Umzug des Serverraums der Stadtwerke in ein neues Gebäude bis zum 31.03.2027 mit höchstens 4 Stunden Ausfallzeit</li>
          <li>Anlegen eines Benutzerkontos für eine neue Mitarbeiterin</li>
          <li>Einführung eines Ticketsystems für die 45 Beschäftigten der Nordlicht IT GmbH</li>
        </ol>
        <p>a) Entscheide für jedes Vorhaben, ob es sich um ein Projekt handelt, und begründe mit mindestens einem Merkmal.</p>
        <p>b) Der Kunde möchte den Serverumzug (Vorhaben 2) zwei Wochen früher abschließen. Erläutere zwei mögliche Auswirkungen mithilfe des magischen Dreiecks.</p>
        <p>c) Nenne die vier Zieldimensionen, in denen Projektziele formuliert werden.</p>`,
      hints: ["Projekt = einmalig, klares Ziel, befristet, begrenzte Ressourcen, komplex/risikobehaftet."],
      solution: `<p><strong>a)</strong></p>
        <ol>
          <li><strong>Kein Projekt</strong>: wiederkehrende Routineaufgabe ohne Einmaligkeit und ohne festes Ende.</li>
          <li><strong>Projekt</strong>: einmalig, klares Ziel (Umzug mit max. 4 h Ausfall), fester Endtermin, begrenzte Ressourcen, hohes Risiko und viele Beteiligte.</li>
          <li><strong>Kein Projekt</strong>: Standardtätigkeit nach festem Ablauf, gering komplex, dauert Minuten.</li>
          <li><strong>Projekt</strong>: einmalige Einführung eines neuen Systems mit Auswahl, Konfiguration, Schulung und Terminvorgabe; betrifft viele Beteiligte.</li>
        </ol>
        <p><strong>b)</strong> Wird die Zeit verkürzt, müssen die anderen Ecken nachgeben: (1) Die <strong>Kosten</strong> steigen, weil zusätzliches Personal, Überstunden oder Wochenendzuschläge nötig sind. (2) Die <strong>Leistung/Qualität</strong> kann sinken, z. B. weil Tests verkürzt oder die Neuverkabelung nur teilweise umgesetzt wird, was das Ausfallrisiko erhöht.</p>
        <p><strong>c)</strong> Sachziel, Qualitätsziel, Zeitziel (Termin) und Kostenziel (Budget).</p>`
    },
    {
      id: "e-ziele-2",
      topic: "projekt-grundlagen",
      title: "SMART-Ziel, Projektorganisation und Teamphase",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Steuerkanzlei Petersen &amp; Partner in Husum beauftragt die Nordlicht IT GmbH. Der Kanzleichef sagt: „Wir brauchen bald ein besseres Backup, das nicht zu teuer ist.“</p>
        <p>a) Prüfe die Aussage anhand der SMART-Kriterien und formuliere ein SMART-Ziel. Die Kanzlei hat 18 Arbeitsplätze und rund 900 GiB Daten; das Budget liegt bei 6.000 €, fertig sein soll alles bis 15.12.2026.</p>
        <p>b) Bei Nordlicht arbeiten drei Personen aus dem Server- und dem Netzwerkteam neben dem Tagesgeschäft am Projekt. Die Projektleiterin darf ihnen projektbezogene Aufgaben zuweisen, Urlaub und Beurteilung bleiben bei den Teamleitern. Bestimme die Form der Projektorganisation und nenne je einen Vor- und Nachteil.</p>
        <p>c) In der zweiten Projektwoche streiten zwei Teammitglieder heftig darüber, wer für die Firewallregeln zuständig ist. Ordne die Situation einer Phase nach Tuckman zu und nenne eine passende Maßnahme der Projektleitung.</p>`,
      solution: `<p><strong>a)</strong> Die Aussage ist nicht <em>spezifisch</em> („besseres Backup“), nicht <em>messbar</em> (keine Kennzahl), nicht <em>terminiert</em> („bald“) und das Budget ist unklar („nicht zu teuer“). Ob sie realistisch und akzeptiert ist, lässt sich so nicht beurteilen.<br>
        SMART-Ziel, z. B.: „Bis zum 15.12.2026 werden die Daten aller 18 Arbeitsplätze und des Servers (ca. 900 GiB) täglich automatisch gesichert, wobei eine Kopie verschlüsselt außer Haus liegt. Ein vollständiger Restore des Servers gelingt nachweislich in höchstens 4 Stunden. Die Gesamtkosten betragen höchstens 6.000 €.“</p>
        <p><strong>b)</strong> <strong>Matrix-Projektorganisation</strong>: Die Projektleitung ist fachlich (projektbezogen) weisungsbefugt, disziplinarisch bleiben die Linienvorgesetzten zuständig. Vorteil: Spezialisten können flexibel eingesetzt werden und bleiben in ihren Teams. Nachteil: Konflikte um Prioritäten zwischen Projektleitung und Teamleitern, Doppelbelastung der Mitarbeitenden.</p>
        <p><strong>c)</strong> <strong>Storming</strong>: Rollen und Zuständigkeiten werden ausgehandelt, es kommt zu Konflikten. Maßnahme: Konflikt moderieren und Zuständigkeiten verbindlich klären (z. B. Verantwortungsmatrix für Arbeitspakete), gemeinsame Teamregeln vereinbaren.</p>`
    },
    {
      id: "e-scrum-2",
      topic: "vorgehensmodelle",
      title: "Scrum-Bausteine zuordnen und Vorgehensmodell wählen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH entwickelt für die Deichblick Pflege GmbH in Büsum ein Self-Service-Portal (Passwort-Reset, Softwarebestellung, Geräteausgabe). Es wird nach Scrum gearbeitet.</p>
        <p>a) Ordne jede Situation dem passenden Scrum-Begriff (Verantwortlichkeit, Event oder Artefakt) zu:</p>
        <ol>
          <li>Die Developers stimmen sich jeden Morgen 15 Minuten lang über den Fortschritt zum Sprintziel ab.</li>
          <li>Nach zwei Wochen führt das Team den Vertretern der Pflegeleitung die neue Passwort-Reset-Funktion vor und nimmt Rückmeldungen auf.</li>
          <li>Das Team bespricht, wie es Übergaben zwischen Entwicklung und Test künftig verbessert.</li>
          <li>Frau Hansen entscheidet, dass der Passwort-Reset vor der Softwarebestellung umgesetzt wird.</li>
          <li>Eine geordnete Liste aller gewünschten Portalfunktionen.</li>
        </ol>
        <p>b) Parallel soll bei Deichblick an einem Wochenende der Core-Switch getauscht werden; Hardware, Konfiguration und Termin stehen fest. Begründe, ob du dafür Scrum oder ein klassisches Vorgehen empfiehlst.</p>
        <p>c) Formuliere eine User Story für den Passwort-Reset.</p>`,
      solution: `<p><strong>a)</strong> 1 → <strong>Daily Scrum</strong> · 2 → <strong>Sprint Review</strong> · 3 → <strong>Sprint Retrospective</strong> · 4 → <strong>Product Owner</strong> (ordnet/priorisiert das Product Backlog) · 5 → <strong>Product Backlog</strong>.</p>
        <p><strong>b)</strong> Klassisches Vorgehen (Wasserfall mit festem Ablaufplan): Die Anforderungen sind vollständig bekannt und ändern sich nicht, der Termin (Wartungsfenster) ist fix und der Ablauf muss vorab minutiös geplant werden (inkl. Rückfallplan). Iterative Sprints mit laufendem Kundenfeedback bringen hier keinen Nutzen.</p>
        <p><strong>c)</strong> „Als Pflegekraft möchte ich mein vergessenes Passwort selbst über eine Bestätigung per Smartphone zurücksetzen, damit ich auch im Nachtdienst ohne Wartezeit auf den Support weiterarbeiten kann.“</p>`
    },
    {
      id: "e-lastenheft-2",
      topic: "anforderungsanalyse",
      title: "Lasten-/Pflichtenheft, Anforderungsarten und Bandbreite",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Das Autohaus Friesen in Husum lässt sein WLAN erneuern.</p>
        <p>a) Ordne die Aussagen dem Lastenheft oder dem Pflichtenheft zu:</p>
        <ol>
          <li>„Gäste sollen einen Internetzugang erhalten, ohne auf interne Systeme zugreifen zu können.“</li>
          <li>„Der Gastzugang wird als eigene SSID im VLAN 99 mit Captive Portal auf der Firewall umgesetzt.“</li>
          <li>„Die Lösung soll bis Ende November betriebsbereit sein und höchstens 9.000 € kosten.“</li>
          <li>„Die Authentifizierung erfolgt per EAP-TLS gegen einen RADIUS-Server mit Gerätezertifikaten der internen CA.“</li>
        </ol>
        <p>b) Unterscheide funktionale und nicht-funktionale Anforderungen:</p>
        <ol type="a">
          <li>Das System sendet bei Ausfall eines Access Points eine E-Mail an den Support.</li>
          <li>Beim Wechsel zwischen Access Points darf die Verbindung höchstens 1 Sekunde unterbrochen sein.</li>
          <li>Die Serviceannahme kann Gäste-Voucher mit einer Gültigkeit von 1 bis 7 Tagen erzeugen.</li>
          <li>Das WLAN erreicht während der Öffnungszeiten eine Verfügbarkeit von 99,5 %.</li>
        </ol>
        <p>c) 30 Beschäftigte arbeiten mit Cloud-Anwendungen, je Person werden 4 Mbit/s angesetzt. Erfahrungsgemäß sind 60 % gleichzeitig aktiv; es sollen 25 % Reserve eingeplant werden. Berechne die benötigte Internetbandbreite.</p>`,
      solution: `<p><strong>a)</strong> 1 → Lastenheft (Was/Wofür, Sicht des Kunden) · 2 → Pflichtenheft (konkrete Umsetzung) · 3 → Lastenheft (Rahmenbedingungen des Auftraggebers) · 4 → Pflichtenheft (technische Lösung).</p>
        <p><strong>b)</strong> a) funktional (Was tut das System?) · b) nicht-funktional (Leistung/Qualität) · c) funktional · d) nicht-funktional (Zuverlässigkeit/Verfügbarkeit).</p>
        <p><strong>c)</strong> 30 × 4 Mbit/s = 120 Mbit/s<br>
        × 0,6 (Gleichzeitigkeit) = 72 Mbit/s<br>
        × 1,25 (Reserve) = <strong>90 Mbit/s</strong><br>
        Das Autohaus sollte also einen Anschluss mit mindestens 100 Mbit/s wählen.</p>`
    },
    {
      id: "e-stakeholder-3",
      topic: "anforderungsanalyse",
      title: "Stakeholderanalyse bei einer MDM-Einführung",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Die Meldorfer Bau GmbH (140 Beschäftigte) beauftragt die Nordlicht IT GmbH, die 60 Firmen-Smartphones der Bauleiter und Poliere mit einem Mobile-Device-Management (MDM) zu verwalten. Geplant sind App-Verteilung, Fernlöschung bei Verlust und eine Standortortung der Geräte. Der Anbieter des MDM-Dienstes speichert die Daten in einem Rechenzentrum. Im Betrieb gibt es einen Betriebsrat und einen externen Datenschutzbeauftragten.</p>
        <p>a) Nenne fünf Stakeholder des Projekts und ihr jeweiliges Interesse. (5 Punkte)</p>
        <p>b) Ordne die Stakeholder in eine Einfluss-Interesse-Matrix ein und leite für zwei Quadranten je eine konkrete Maßnahme ab. (6 Punkte)</p>
        <p>c) Erläutere, warum der Betriebsrat unbedingt früh eingebunden werden muss, und welche Folgen es hätte, dies zu versäumen. (4 Punkte)</p>
        <p>d) Formuliere zwei messbare nicht-funktionale Anforderungen an die MDM-Lösung und nenne vier Angaben, die du zu jedem Ansprechpartner beim Kunden dokumentierst. (5 Punkte)</p>`,
      hints: ["Standortortung = technische Einrichtung, die Verhalten und Leistung überwachen kann.", "Einfluss hoch + Interesse hoch → eng einbinden."],
      solution: `<p><strong>a)</strong> (1) <em>Geschäftsführung</em>: Kosten, Schutz der Firmendaten bei Verlust. (2) <em>IT-Leitung der Meldorfer Bau</em>: einfacher, sicherer Betrieb, wenig Supportaufwand. (3) <em>Bauleiter und Poliere</em> (Nutzer): einfache Bedienung, keine Überwachung, private Daten geschützt. (4) <em>Betriebsrat</em>: Schutz vor Leistungs- und Verhaltenskontrolle, Mitbestimmung. (5) <em>Datenschutzbeauftragter</em>: DSGVO-Konformität, Auftragsverarbeitung, Datensparsamkeit. Weitere: MDM-Anbieter (Vertrag, Lizenzumsatz), Projektteam der Nordlicht IT GmbH.</p>
        <p><strong>b)</strong> Mögliche Einordnung: <em>hoher Einfluss/hohes Interesse</em>: IT-Leitung, Betriebsrat, Datenschutzbeauftragter → <strong>eng einbinden</strong>, z. B. gemeinsamer Workshop zur Ortungsfunktion, Freigabe des Konzepts vor der Umsetzung. <em>Hoher Einfluss/geringeres Interesse</em>: Geschäftsführung → <strong>zufriedenstellen</strong>: kurzer Statusbericht zu Kosten und Terminen an den Meilensteinen. <em>Geringer Einfluss/hohes Interesse</em>: Bauleiter und Poliere → <strong>informieren</strong>: Infoschreiben, was das MDM kann und was nicht, Kurzanleitung, Pilotgruppe. <em>Geringer Einfluss/geringes Interesse</em>: MDM-Anbieter → beobachten.</p>
        <p><strong>c)</strong> Das MDM mit Standortortung ist eine technische Einrichtung, die dazu geeignet ist, Verhalten oder Leistung der Beschäftigten zu überwachen. Dafür hat der Betriebsrat nach § 87 Abs. 1 Nr. 6 BetrVG ein <strong>echtes Mitbestimmungsrecht</strong>: Ohne seine Zustimmung darf das System nicht eingeführt werden. Wird er übergangen, kann er die Unterlassung verlangen – die Einführung stoppt, Termin und Budget geraten in Gefahr, und das Vertrauen der Belegschaft leidet. Sinnvoll ist eine Betriebsvereinbarung, z. B. „Ortung nur nach Verlustmeldung, protokolliert, keine Bewegungsprofile“.</p>
        <p><strong>d)</strong> Beispiele für messbare nicht-funktionale Anforderungen: „Die Verwaltungsoberfläche ist nur mit Mehr-Faktor-Authentifizierung erreichbar.“ · „Ein neues Gerät ist nach dem ersten Einschalten in höchstens 15 Minuten automatisch vollständig eingerichtet.“ · „Alle Verwaltungsdaten werden ausschließlich in Rechenzentren innerhalb der EU gespeichert.“<br>
        Angaben je Ansprechpartner: Name, Funktion/Zuständigkeit im Projekt, Erreichbarkeit (Telefon, E-Mail, Zeiten), Entscheidungsbefugnis (z. B. darf Changes freigeben), Vertretung.</p>`
    },
    {
      id: "e-psp-2",
      topic: "psp-zeitplanung",
      title: "Projektstrukturplan für einen Serverraum-Umzug",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Marschland Logistik GmbH in Brunsbüttel zieht ihren Serverraum in einen neuen Gebäudeteil um. Die Nordlicht IT GmbH plant das Projekt.</p>
        <p>a) Erstelle einen phasenorientierten Projektstrukturplan mit vier Teilaufgaben und jeweils mindestens zwei Arbeitspaketen (mit PSP-Code).</p>
        <p>b) Das Arbeitspaket „Systeme abbauen, transportieren und aufbauen“ hat einen Aufwand von 30 Personenstunden. Drei Techniker stehen jeweils zu 62,5 % eines 8-Stunden-Tages zur Verfügung. Berechne die Dauer.</p>
        <p>c) Nenne drei sinnvolle Meilensteine.</p>
        <p>d) Erkläre den Unterschied zwischen Projektstrukturplan und Netzplan.</p>`,
      solution: `<p><strong>a)</strong> Beispiel:</p>
        <pre class="ascii">1 Serverraum-Umzug Marschland Logistik
├─ 1.1 Vorbereitung
│   ├─ 1.1.1 Inventar und Verkabelung dokumentieren
│   ├─ 1.1.2 Umzugsplan und Wartungsfenster abstimmen
│   └─ 1.1.3 Vollbackup mit Restore-Test
├─ 1.2 Neuer Serverraum
│   ├─ 1.2.1 Rack und USV montieren
│   └─ 1.2.2 Netzwerkanschlüsse und Klimatisierung prüfen
├─ 1.3 Umzug
│   ├─ 1.3.1 Systeme herunterfahren und abbauen
│   └─ 1.3.2 Transport, Aufbau und Verkabelung
└─ 1.4 Inbetriebnahme und Abschluss
    ├─ 1.4.1 Systeme starten und testen
    └─ 1.4.2 Abnahme und Dokumentation aktualisieren</pre>
        <p><strong>b)</strong> Tageskapazität = 3 × 0,625 × 8 h = 15 h pro Tag<br>
        Dauer = 30 h ÷ 15 h/Tag = <strong>2 Arbeitstage</strong></p>
        <p><strong>c)</strong> M1 „Umzugsplan vom Kunden freigegeben“ · M2 „Neuer Serverraum betriebsbereit“ (Rack, USV, Klima abgenommen) · M3 „Alle Systeme im neuen Raum online“ · M4 „Abnahme durch den Kunden“.</p>
        <p><strong>d)</strong> Der <strong>PSP</strong> zeigt hierarchisch, <em>was</em> zu tun ist (vollständige Zerlegung in Arbeitspakete), aber keine Reihenfolge und keine Termine. Der <strong>Netzplan</strong> zeigt die <em>logische und zeitliche Reihenfolge</em> der Vorgänge mit Abhängigkeiten, frühesten/spätesten Terminen, Puffern und dem kritischen Pfad.</p>`
    },
    {
      id: "e-netzplan-3",
      topic: "psp-zeitplanung",
      title: "Netzplan: Monitoring-Einführung terminieren",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH führt bei der Nordsee-Logistik GmbH in Brunsbüttel ein Monitoring-System ein. Dauer in Arbeitstagen (AT):</p>
        <table><thead><tr><th>Vorgang</th><th>Beschreibung</th><th>Dauer</th><th>Vorgänger</th></tr></thead><tbody>
          <tr><td>A</td><td>Ist-Analyse und Anforderungen</td><td>2</td><td>–</td></tr>
          <tr><td>B</td><td>Alternativen bewerten, Entscheidung</td><td>1</td><td>A</td></tr>
          <tr><td>C</td><td>Hardware bestellen und Lieferung</td><td>4</td><td>B</td></tr>
          <tr><td>D</td><td>Monitoring-VM vorbereiten</td><td>2</td><td>B</td></tr>
          <tr><td>E</td><td>Agenten auf Servern ausrollen</td><td>3</td><td>D</td></tr>
          <tr><td>F</td><td>Netzwerkgeräte per SNMP einbinden</td><td>2</td><td>C, D</td></tr>
          <tr><td>G</td><td>Alarmierung und Dashboards</td><td>2</td><td>E, F</td></tr>
          <tr><td>H</td><td>Test und Abnahme</td><td>1</td><td>G</td></tr>
          <tr><td>I</td><td>Dokumentation und Schulung</td><td>2</td><td>G</td></tr>
          <tr><td>J</td><td>Projektabschluss</td><td>1</td><td>H, I</td></tr>
        </tbody></table>
        <p>a) Berechne für alle Vorgänge FAZ, FEZ, SAZ, SEZ, GP und FP. (10 Punkte)</p>
        <p>b) Gib den kritischen Pfad und die Projektdauer an. (2 Punkte)</p>
        <p>c) Das Projekt startet am Montag, 26.10.2026. Bestimme den Endtermin (Wochenenden sind arbeitsfrei, im Zeitraum liegt kein Feiertag). (2 Punkte)</p>
        <p>d) Erläutere die Auswirkung auf das Projektende, wenn (1) F einen Tag länger dauert, (2) E zwei Tage länger dauert. (4 Punkte)</p>
        <p>e) Der Kunde möchte zwei Arbeitstage früher fertig sein. Schlage Maßnahmen vor, prüfe ihre Wirkung und nenne die Folgen. (4 Punkte)</p>`,
      hints: ["Bei mehreren Vorgängern den größten FEZ, bei mehreren Nachfolgern den kleinsten SAZ nehmen.", "Prüfe bei Verkürzungen, ob ein anderer Pfad kritisch wird."],
      solution: `<p><strong>a)</strong> Vorwärtsrechnung: F: FAZ = max(FEZ C 7; FEZ D 5) = 7 · G: FAZ = max(FEZ E 8; FEZ F 9) = 9 · J: FAZ = max(FEZ H 12; FEZ I 13) = 13.<br>
        Rückwärtsrechnung: G: SEZ = min(SAZ H 12; SAZ I 11) = 11 · D: SEZ = min(SAZ E 6; SAZ F 7) = 6 · B: SEZ = min(SAZ C 3; SAZ D 4) = 3.</p>
        <table><thead><tr><th>Vorgang</th><th>Dauer</th><th>FAZ</th><th>FEZ</th><th>SAZ</th><th>SEZ</th><th>GP</th><th>FP</th></tr></thead><tbody>
          <tr><td>A</td><td>2</td><td>0</td><td>2</td><td>0</td><td>2</td><td>0</td><td>0</td></tr>
          <tr><td>B</td><td>1</td><td>2</td><td>3</td><td>2</td><td>3</td><td>0</td><td>0</td></tr>
          <tr><td>C</td><td>4</td><td>3</td><td>7</td><td>3</td><td>7</td><td>0</td><td>0</td></tr>
          <tr><td>D</td><td>2</td><td>3</td><td>5</td><td>4</td><td>6</td><td>1</td><td>0</td></tr>
          <tr><td>E</td><td>3</td><td>5</td><td>8</td><td>6</td><td>9</td><td>1</td><td>1</td></tr>
          <tr><td>F</td><td>2</td><td>7</td><td>9</td><td>7</td><td>9</td><td>0</td><td>0</td></tr>
          <tr><td>G</td><td>2</td><td>9</td><td>11</td><td>9</td><td>11</td><td>0</td><td>0</td></tr>
          <tr><td>H</td><td>1</td><td>11</td><td>12</td><td>12</td><td>13</td><td>1</td><td>1</td></tr>
          <tr><td>I</td><td>2</td><td>11</td><td>13</td><td>11</td><td>13</td><td>0</td><td>0</td></tr>
          <tr><td>J</td><td>1</td><td>13</td><td>14</td><td>13</td><td>14</td><td>0</td><td>0</td></tr>
        </tbody></table>
        <p>Freie Puffer: D: min(FAZ E 5; FAZ F 7) − FEZ D 5 = 0 · E: FAZ G 9 − 8 = 1 · H: FAZ J 13 − 12 = 1.</p>
        <p><strong>b)</strong> Kritischer Pfad: <strong>A → B → C → F → G → I → J</strong>, Projektdauer <strong>14 AT</strong>.</p>
        <p><strong>c)</strong> 14 Arbeitstage ab Montag, 26.10.2026 (Wochenenden 31.10./01.11. und 07./08.11. ausgenommen) → Ende am <strong>Donnerstag, 12.11.2026</strong>.</p>
        <p><strong>d)</strong> (1) F liegt auf dem kritischen Pfad (GP = 0): Das Projektende verschiebt sich um <strong>1 AT</strong> auf 15 AT (Freitag, 13.11.2026). (2) E hat nur 1 Tag Gesamtpuffer. Eine Verzögerung um 2 Tage wird zu 1 Tag aufgefangen, der zweite Tag verschiebt G und damit das Projektende um <strong>1 AT</strong> auf 15 AT; der Pfad D → E → G wird kritisch.</p>
        <p><strong>e)</strong> Nur kritische Vorgänge zu kürzen hilft. Wird allein C um 2 Tage verkürzt (Expresslieferung), sinkt die Dauer nur auf 13 AT, weil dann der Pfad über D und E (bisher 1 Tag Puffer) kritisch wird. Wirksame Kombination: C per Expresslieferung um 1 Tag verkürzen (C = 3) <strong>und</strong> I mit einer zweiten Person auf 1 Tag verkürzen → 12 AT (Ende Dienstag, 10.11.2026). Alternativ C um 2 Tage und E um 1 Tag (zweiter Techniker) verkürzen. Folgen: Mehrkosten (Expresszuschlag, zusätzliche Personalstunden), höhere Belastung des Teams und ggf. Qualitätsrisiko bei verkürzter Schulung – das ist mit dem Kunden abzustimmen.</p>`
    },
    {
      id: "e-stundensatz-2",
      topic: "ressourcen-kosten",
      title: "Stundensatz und Kundeneinsatz berechnen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH möchte den Stundensatz eines Netzwerktechnikers ermitteln.</p>
        <ul>
          <li>Bruttogehalt 3.400 € pro Monat, 12 Gehälter; Arbeitgeberanteil zur Sozialversicherung vereinfacht 21 %</li>
          <li>anteilige Gemeinkosten (Fahrzeug, Arbeitsplatz, Verwaltung) 11.500 € pro Jahr</li>
          <li>251 mögliche Arbeitstage, davon 30 Urlaubstage, 6 Krankheitstage, 5 Fortbildungstage; 8 h pro Tag</li>
          <li>80 % der Anwesenheitszeit sind beim Kunden verrechenbar</li>
        </ul>
        <p>a) Berechne den Stundensatz (Selbstkosten je verrechenbarer Stunde).</p>
        <p>b) Nordlicht rechnet mit 15 % Gewinnzuschlag. Ermittle den Verrechnungssatz.</p>
        <p>c) Ein Einsatz dauert 3,5 Stunden, dazu kommt eine Anfahrtspauschale von 35 € netto. Berechne den Rechnungsbetrag netto und brutto (19 % USt.).</p>
        <p>d) Nenne zwei Gründe, warum nicht 100 % der Anwesenheitszeit verrechenbar sind.</p>`,
      solution: `<p><strong>a)</strong> Jahresgehalt: 3.400 € × 12 = 40.800 €<br>
        Arbeitgeberanteil: 40.800 € × 0,21 = 8.568 € → Personalkosten 49.368 €<br>
        + Gemeinkosten 11.500 € → Gesamtkosten <strong>60.868 €</strong><br>
        Anwesenheitstage: 251 − 30 − 6 − 5 = 210 Tage → 210 × 8 h = 1.680 h<br>
        verrechenbar: 1.680 h × 0,8 = 1.344 h<br>
        Stundensatz = 60.868 € ÷ 1.344 h ≈ <strong>45,29 €/h</strong></p>
        <p><strong>b)</strong> Verrechnungssatz = 45,29 €/h × 1,15 ≈ <strong>52,08 €/h</strong></p>
        <p><strong>c)</strong> Arbeitszeit: 3,5 h × 52,08 €/h = 182,28 €<br>
        + Anfahrtspauschale 35,00 € → <strong>217,28 € netto</strong><br>
        USt.: 217,28 € × 0,19 = 41,28 € → <strong>258,56 € brutto</strong></p>
        <p><strong>d)</strong> Interne Besprechungen und Verwaltungsarbeiten, Fahrzeiten zwischen Kunden, eigene Weiterbildung und Einarbeitung, Leerlauf zwischen Aufträgen, Pflege der eigenen Infrastruktur – diese Zeiten kann man keinem Kunden in Rechnung stellen.</p>`
    },
    {
      id: "e-kalkulation-3",
      topic: "ressourcen-kosten",
      title: "Vorkalkulation, Budgetprüfung und Nachkalkulation",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Die Arztpraxis Dr. Lorenzen in Heide bestellt bei der Nordlicht IT GmbH eine neue Firewall mit VPN-Zugang für drei Homeoffice-Plätze. Geplant sind:</p>
        <ul>
          <li>Techniker 14 h zu 58 €/h, Auszubildender 10 h zu 20 €/h, Projektleitung 2 h zu 75 €/h (Vollkostensätze)</li>
          <li>Firewall-Appliance 1.290 €, Security-Lizenz für 3 Jahre 540 €, Kleinmaterial 60 €</li>
          <li>Materialgemeinkostenzuschlag 5 % auf die Sachkosten, Gewinnzuschlag 10 %, Umsatzsteuer 19 %</li>
        </ul>
        <p>a) Erstelle die Vorkalkulation bis zum Bruttoangebotspreis. (8 Punkte)</p>
        <p>b) Die Praxis hat ein Budget von 4.000 € brutto. Beurteile die Machbarkeit und nenne zwei Möglichkeiten, das Angebot anzupassen. Berechne, wie hoch der Gewinnzuschlag höchstens sein dürfte, um das Budget einzuhalten. (6 Punkte)</p>
        <p>c) Es wurde ein Festpreis in Höhe des ursprünglichen Nettoangebots vereinbart. Tatsächlich benötigte der Techniker 18 statt 14 Stunden. Führe die Nachkalkulation durch: Abweichung der Selbstkosten absolut und in Prozent sowie verbleibender Gewinn. (6 Punkte)</p>
        <p>d) Nenne zwei mögliche Ursachen für den Mehraufwand und eine Konsequenz für künftige Kalkulationen. (3 Punkte)</p>`,
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Position</th><th>Rechnung</th><th>Betrag</th></tr></thead><tbody>
          <tr><td>Techniker</td><td>14 h × 58 €/h</td><td>812,00 €</td></tr>
          <tr><td>Auszubildender</td><td>10 h × 20 €/h</td><td>200,00 €</td></tr>
          <tr><td>Projektleitung</td><td>2 h × 75 €/h</td><td>150,00 €</td></tr>
          <tr><td><strong>Personalkosten</strong></td><td></td><td><strong>1.162,00 €</strong></td></tr>
          <tr><td><strong>Sachkosten</strong></td><td>1.290 + 540 + 60</td><td><strong>1.890,00 €</strong></td></tr>
          <tr><td>Materialgemeinkosten</td><td>1.890 € × 0,05</td><td>94,50 €</td></tr>
          <tr><td><strong>Selbstkosten</strong></td><td>1.162 + 1.890 + 94,50</td><td><strong>3.146,50 €</strong></td></tr>
          <tr><td>Gewinnzuschlag</td><td>3.146,50 € × 0,10</td><td>314,65 €</td></tr>
          <tr><td><strong>Nettoangebotspreis</strong></td><td></td><td><strong>3.461,15 €</strong></td></tr>
          <tr><td>Umsatzsteuer</td><td>3.461,15 € × 0,19</td><td>657,62 €</td></tr>
          <tr><td><strong>Bruttoangebotspreis</strong></td><td></td><td><strong>4.118,77 €</strong></td></tr>
        </tbody></table>
        <p><strong>b)</strong> Das Angebot liegt mit 4.118,77 € um 118,77 € über dem Budget – so ist der Auftrag für den Kunden nicht machbar. Anpassungen: Security-Lizenz zunächst nur für 1 Jahr anbieten, einen höheren Azubi-Anteil einplanen, den Gewinnzuschlag senken oder mit dem Kunden eine Budgeterhöhung bzw. einen reduzierten Leistungsumfang vereinbaren.<br>
        Maximaler Nettopreis: 4.000 € ÷ 1,19 ≈ 3.361,34 € → maximaler Gewinn: 3.361,34 € − 3.146,50 € = 214,84 € → maximaler Gewinnzuschlag: 214,84 ÷ 3.146,50 × 100 ≈ <strong>6,83 %</strong>.</p>
        <p><strong>c)</strong> Ist-Personalkosten: 18 × 58 = 1.044 € + 200 € + 150 € = 1.394 €<br>
        Ist-Selbstkosten: 1.394 + 1.890 + 94,50 = <strong>3.378,50 €</strong><br>
        Abweichung: 3.378,50 − 3.146,50 = <strong>+232,00 €</strong> → 232 ÷ 3.146,50 × 100 ≈ <strong>+7,37 %</strong><br>
        Verbleibender Gewinn beim Festpreis: 3.461,15 − 3.378,50 = <strong>82,65 €</strong> statt 314,65 €.</p>
        <p><strong>d)</strong> Ursachen: unerwartete Probleme (z. B. Router eines Homeoffice-Nutzers inkompatibel, Firmware-Update nötig), zu optimistische Schätzung, zusätzliche Kundenwünsche während der Umsetzung, fehlende Vorlagen. Konsequenz: Erfahrungswerte aus der Nachkalkulation für künftige Angebote nutzen, einen Risikozuschlag einplanen und Zusatzwünsche nur per schriftlichem Nachtrag annehmen.</p>`
    },
    {
      id: "e-nwa-2",
      topic: "wirtschaftlichkeit-entscheidung",
      title: "Nutzwertanalyse für eine Monitoring-Lösung",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordsee-Logistik GmbH sucht eine Monitoring-Lösung. K.-o.-Kriterium: Alle Überwachungsdaten müssen in der EU gespeichert werden. Zur Auswahl stehen Produkt A (Open Source, eigener Server), Produkt B (kommerziell, eigener Server) und Produkt C (SaaS, Speicherung der Daten in den USA).</p>
        <table><thead><tr><th>Kriterium</th><th>Gewicht</th><th>A</th><th>B</th><th>C</th></tr></thead><tbody>
          <tr><td>Kosten</td><td>25 %</td><td>9</td><td>5</td><td>7</td></tr>
          <tr><td>Funktionsumfang</td><td>30 %</td><td>8</td><td>9</td><td>7</td></tr>
          <tr><td>Bedienbarkeit</td><td>15 %</td><td>5</td><td>8</td><td>9</td></tr>
          <tr><td>Datenschutz</td><td>20 %</td><td>9</td><td>8</td><td>3</td></tr>
          <tr><td>Hersteller-Support</td><td>10 %</td><td>4</td><td>9</td><td>8</td></tr>
        </tbody></table>
        <p>a) Prüfe das K.-o.-Kriterium.</p>
        <p>b) Berechne die Nutzwerte der verbleibenden Produkte und triff eine Entscheidung.</p>
        <p>c) Der Kunde gewichtet nachträglich die Kosten mit 35 % und den Support mit 0 %. Berechne erneut und bewerte das Ergebnis.</p>
        <p>d) Nenne zwei Schwächen der Nutzwertanalyse.</p>`,
      solution: `<p><strong>a)</strong> Produkt C speichert die Daten in den USA und erfüllt das K.-o.-Kriterium nicht → es scheidet vor der Bewertung aus.</p>
        <p><strong>b)</strong> A: 9 × 0,25 + 8 × 0,30 + 5 × 0,15 + 9 × 0,20 + 4 × 0,10 = 2,25 + 2,40 + 0,75 + 1,80 + 0,40 = <strong>7,60</strong><br>
        B: 5 × 0,25 + 9 × 0,30 + 8 × 0,15 + 8 × 0,20 + 9 × 0,10 = 1,25 + 2,70 + 1,20 + 1,60 + 0,90 = <strong>7,65</strong><br>
        Produkt B hat den höchsten Nutzwert und wird empfohlen – allerdings nur mit 0,05 Punkten Vorsprung.</p>
        <p><strong>c)</strong> A: 9 × 0,35 + 8 × 0,30 + 5 × 0,15 + 9 × 0,20 + 4 × 0 = 3,15 + 2,40 + 0,75 + 1,80 = <strong>8,10</strong><br>
        B: 5 × 0,35 + 9 × 0,30 + 8 × 0,15 + 8 × 0,20 + 9 × 0 = 1,75 + 2,70 + 1,20 + 1,60 = <strong>7,25</strong><br>
        Jetzt liegt A vorn. Das Ergebnis ist also sehr empfindlich gegenüber der Gewichtung (Sensitivität). Die Gewichte müssen deshalb vor der Bewertung mit dem Kunden verbindlich festgelegt und begründet werden – nachträgliches Ändern wirkt wie eine Manipulation zugunsten eines Wunschprodukts.</p>
        <p><strong>d)</strong> Gewichte und Punkte sind subjektiv; ähnliche Kriterien können doppelt zählen; kleine Punkteunterschiede täuschen Genauigkeit vor; Kosten werden oft nur grob in Punkte übersetzt – deshalb zusätzlich eine Kostenrechnung durchführen.</p>`
    },
    {
      id: "e-amortisation-3",
      topic: "wirtschaftlichkeit-entscheidung",
      title: "Mailserver: On-Premises oder Cloud?",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Die Steuerkanzlei Petersen &amp; Partner in Husum (25 Postfächer) muss ihren veralteten Mailserver ablösen, der derzeit 520 € pro Monat kostet (Wartung, Strom, Administration).</p>
        <ul>
          <li><strong>Variante 1 – neuer eigener Server:</strong> Hardware 7.800 €, Lizenzen 3.600 €, Einrichtung 18 h zu 65 €/h; danach Strom 45 €/Monat und Wartung 110 €/Monat</li>
          <li><strong>Variante 2 – Cloud-Mail (SaaS):</strong> 12,50 € pro Postfach und Monat, einmalige Migration 1.200 €</li>
        </ul>
        <p>a) Berechne für beide Varianten die Einmalkosten und die monatlichen Kosten. (4 Punkte)</p>
        <p>b) Ermittle, nach wie vielen Monaten Variante 1 günstiger wird (Break-even). (3 Punkte)</p>
        <p>c) Vergleiche die Gesamtkosten über die geplante Nutzungsdauer von 5 Jahren. (3 Punkte)</p>
        <p>d) Berechne, nach wie vielen Monaten sich die Migrationskosten von Variante 2 gegenüber dem bisherigen Server amortisiert haben. (3 Punkte)</p>
        <p>e) Nenne je zwei qualitative Argumente für beide Varianten und berücksichtige die Verschwiegenheitspflicht einer Steuerkanzlei. (6 Punkte)</p>`,
      solution: `<p><strong>a)</strong> Variante 1: Einmalkosten 7.800 + 3.600 + 18 × 65 (= 1.170) = <strong>12.570 €</strong>; monatlich 45 + 110 = <strong>155 €</strong>.<br>
        Variante 2: Einmalkosten <strong>1.200 €</strong>; monatlich 25 × 12,50 € = <strong>312,50 €</strong>.</p>
        <p><strong>b)</strong> Break-even = (12.570 − 1.200) ÷ (312,50 − 155) = 11.370 ÷ 157,50 ≈ <strong>72,2 Monate</strong>. Die eigene Lösung wäre erst nach gut 6 Jahren günstiger.</p>
        <p><strong>c)</strong> Variante 1: 12.570 + 60 × 155 = 12.570 + 9.300 = <strong>21.870 €</strong><br>
        Variante 2: 1.200 + 60 × 312,50 = 1.200 + 18.750 = <strong>19.950 €</strong><br>
        Über 5 Jahre ist die Cloud-Variante um 1.920 € günstiger. Da Server meist nach etwa 5 Jahren ersetzt werden, wird der Break-even von Variante 1 in der Nutzungsdauer nicht erreicht.</p>
        <p><strong>d)</strong> Einsparung gegenüber heute: 520 − 312,50 = 207,50 € pro Monat → 1.200 ÷ 207,50 ≈ <strong>5,8 Monate</strong>.</p>
        <p><strong>e)</strong> <em>Für Cloud:</em> keine eigene Hardware und keine Updates, hohe Verfügbarkeit und Georedundanz beim Anbieter, flexibel skalierbar (Postfächer monatlich anpassbar), planbare Kosten. <em>Für eigenen Server:</em> volle Kontrolle über Speicherort und Zugriff, keine Abhängigkeit von einem Anbieter (kein Vendor Lock-in), Betrieb auch bei Internetstörung intern möglich. <em>Verschwiegenheit:</em> Steuerberater unterliegen einer besonderen Verschwiegenheitspflicht. Bei der Cloud sind daher ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO, eine vertragliche Verschwiegenheitsverpflichtung des Anbieters, Serverstandort in der EU, Verschlüsselung und Zertifizierungen (z. B. ISO/IEC 27001, BSI C5) Voraussetzung.</p>`
    },
    {
      id: "e-risiko-2",
      topic: "risikomanagement",
      title: "Risikoanalyse bei einer VoIP-Umstellung",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordsee-Logistik GmbH stellt ihre Telefonanlage auf VoIP um. Das Projektteam hat folgende Risiken ermittelt:</p>
        <table><thead><tr><th>Nr.</th><th>Risiko</th><th>Wahrscheinlichkeit</th><th>Schaden</th></tr></thead><tbody>
          <tr><td>R1</td><td>Rufnummernportierung verzögert sich</td><td>25 %</td><td>8.000 €</td></tr>
          <tr><td>R2</td><td>schlechte Sprachqualität wegen fehlender QoS</td><td>30 %</td><td>5.000 €</td></tr>
          <tr><td>R3</td><td>Stromausfall legt PoE-Switches und Telefone lahm</td><td>10 %</td><td>12.000 €</td></tr>
          <tr><td>R4</td><td>verantwortlicher Techniker fällt aus</td><td>15 %</td><td>4.000 €</td></tr>
        </tbody></table>
        <p>a) Berechne die Risikowerte und bringe die Risiken in eine Rangfolge.</p>
        <p>b) Ordne jede Maßnahme einer Strategie (vermeiden, vermindern, übertragen, akzeptieren) zu: (1) USV für die PoE-Switches, (2) Vertragsstrafe mit dem Provider bei verspäteter Portierung, (3) Verzicht auf die nicht kompatible Fax-Integration, (4) Restrisiko durch Budgetreserve abdecken.</p>
        <p>c) Die USV kostet 900 € und senkt die Wahrscheinlichkeit von R3 auf 2 %. Beurteile, ob sich die Maßnahme lohnt.</p>`,
      solution: `<p><strong>a)</strong> R1: 0,25 × 8.000 € = <strong>2.000 €</strong> · R2: 0,30 × 5.000 € = <strong>1.500 €</strong> · R3: 0,10 × 12.000 € = <strong>1.200 €</strong> · R4: 0,15 × 4.000 € = <strong>600 €</strong><br>
        Rangfolge: R1 → R2 → R3 → R4.</p>
        <p><strong>b)</strong> (1) vermindern (senkt die Auswirkung bzw. Wahrscheinlichkeit des Ausfalls) · (2) übertragen (finanzielles Risiko geht auf den Provider über) · (3) vermeiden (Ursache wird beseitigt) · (4) akzeptieren (Risiko bewusst tragen).</p>
        <p><strong>c)</strong> Neuer Risikowert: 0,02 × 12.000 € = 240 € → Verringerung: 1.200 € − 240 € = 960 €. Da 960 € &gt; 900 € Kosten, lohnt sich die USV rein rechnerisch knapp (Nettonutzen 60 €). Zusätzlich spricht ein qualitatives Argument dafür: Bei Stromausfall bleiben Telefone und damit auch Notrufe erreichbar – das ist für die Sicherheit der Beschäftigten wichtig.</p>`
    },
    {
      id: "e-schwachstellen-3",
      topic: "risikomanagement",
      title: "Schwachstellenanalyse für ein Backup-Projekt (IHK-Projekt)",
      level: 3,
      exam: ["AP2"],
      task: `<p>Tjark, Auszubildender der Nordlicht IT GmbH in Heide, plant als Abschlussprojekt für die Physiotherapie Deichkante in Büsum eine neue Datensicherung. Auf dem Praxisserver liegen Patientenakten, Therapiepläne und Abrechnungsdaten (ca. 800 GiB). Bisher wird nur freitags auf eine USB-Festplatte gesichert, die dauerhaft am Server angeschlossen ist; ein Restore wurde noch nie getestet. Geplant ist ein NAS im Serverraum, das über eine Weboberfläche administriert wird, plus eine Kopie außer Haus. Den Serverraum betritt abends auch das Reinigungspersonal.</p>
        <p>a) Bestimme den Schutzbedarf der Patientendaten für Vertraulichkeit, Integrität und Verfügbarkeit (normal, hoch, sehr hoch) und begründe jeweils. (6 Punkte)</p>
        <p>b) Nenne vier Schwachstellen der bisherigen bzw. geplanten Lösung und ordne jeder eine Schutzmaßnahme zu. Kennzeichne, ob die Maßnahme technisch oder organisatorisch ist. (8 Punkte)</p>
        <p>c) Erläutere, warum die dauerhaft angeschlossene USB-Festplatte kaum vor Ransomware schützt, und beschreibe eine Lösung nach der 3-2-1-Regel. (4 Punkte)</p>
        <p>d) Formuliere den Abschnitt „IT-Sicherheit“ für Tjarks Projektantrag in zwei bis drei Sätzen. (3 Punkte)</p>
        <p>e) Nenne zwei Testfälle, mit denen Tjark die Wirksamkeit der Maßnahmen nachweist (jeweils mit erwartetem Ergebnis). (4 Punkte)</p>`,
      hints: ["Gesundheitsdaten gehören zu den besonderen Kategorien personenbezogener Daten (Art. 9 DSGVO).", "3-2-1: drei Kopien, zwei verschiedene Medien, eine Kopie außer Haus."],
      solution: `<p><strong>a)</strong> Beispiel-Einstufung (Begründung zählt):</p>
        <table><thead><tr><th>Schutzziel</th><th>Schutzbedarf</th><th>Begründung</th></tr></thead><tbody>
          <tr><td>Vertraulichkeit</td><td>hoch bis sehr hoch</td><td>Gesundheitsdaten sind besondere Kategorien personenbezogener Daten (Art. 9 DSGVO) und unterliegen der beruflichen Schweigepflicht. Eine Offenlegung kann Patienten erheblich schaden, Bußgelder und einen schweren Vertrauensverlust auslösen.</td></tr>
          <tr><td>Integrität</td><td>hoch</td><td>Verfälschte Befunde oder Therapiepläne können zu falschen Behandlungen führen, falsche Abrechnungsdaten zu finanziellen und rechtlichen Folgen.</td></tr>
          <tr><td>Verfügbarkeit</td><td>normal bis hoch</td><td>Ein Ausfall von wenigen Stunden lässt sich mit Papier-Notbetrieb überbrücken; dauert die Wiederherstellung länger als etwa einen Arbeitstag, fallen Termine und Abrechnung aus. Deshalb wird eine maximale Wiederherstellungszeit als Anforderung festgelegt.</td></tr>
        </tbody></table>
        <p><strong>b)</strong> Mögliche Antworten:</p>
        <table><thead><tr><th>Schwachstelle</th><th>Maßnahme</th><th>Art</th></tr></thead><tbody>
          <tr><td>USB-Platte dauerhaft angeschlossen, Ransomware verschlüsselt sie mit</td><td>Offline- bzw. unveränderliche Kopie (schreibgeschützte Snapshots, Objektsperre), eigenes Backup-Konto</td><td>technisch</td></tr>
          <tr><td>nur wöchentliche Sicherung → bis zu 7 Tage Datenverlust</td><td>tägliche automatische Sicherung, Aufbewahrungsfristen im Datensicherungskonzept festlegen</td><td>technisch/organisatorisch</td></tr>
          <tr><td>nie getesteter Restore</td><td>regelmäßiger, protokollierter Wiederherstellungstest mit festgelegter Zuständigkeit</td><td>organisatorisch</td></tr>
          <tr><td>NAS-Weboberfläche mit Standardzugang im Praxisnetz erreichbar</td><td>individuelles starkes Passwort, Mehr-Faktor-Authentifizierung, Zugriff nur aus einem Management-Netz, keine Portfreigabe ins Internet</td><td>technisch</td></tr>
          <tr><td>Kopie außer Haus könnte unverschlüsselt sein</td><td>Verschlüsselung (z. B. AES-256), Schlüssel sicher hinterlegen</td><td>technisch</td></tr>
          <tr><td>Serverraum für Reinigungspersonal zugänglich</td><td>abschließbares Rack bzw. Zutrittsregelung, Reinigung nur in Begleitung</td><td>organisatorisch/physisch</td></tr>
        </tbody></table>
        <p><strong>c)</strong> Eine dauerhaft angeschlossene Festplatte ist für das Betriebssystem ein normales Laufwerk. Schadsoftware, die mit den Rechten des Servers läuft, kann sie genauso verschlüsseln wie die Originaldaten – Original und Sicherung wären gleichzeitig verloren. Nach der <strong>3-2-1-Regel</strong> gibt es mindestens drei Kopien der Daten (Original und zwei Sicherungen) auf zwei unterschiedlichen Medien bzw. Systemen, davon eine außer Haus und möglichst offline oder unveränderlich. Beispiel: Originaldaten auf dem Server, tägliche Sicherung auf das NAS mit schreibgeschützten Snapshots, zusätzlich eine verschlüsselte Kopie in ein Rechenzentrum in der EU mit Unveränderlichkeit (oder zwei im Wechsel außer Haus gelagerte Festplatten).</p>
        <p><strong>d)</strong> Beispiel: „In der Ist-Analyse ermittle ich den Schutzbedarf der Praxisdaten hinsichtlich Vertraulichkeit, Integrität und Verfügbarkeit und analysiere die Schwachstellen der bisherigen Datensicherung (u. a. dauerhaft angeschlossene USB-Festplatte, fehlende Restore-Tests). Daraus leite ich technische Maßnahmen (verschlüsselte, unveränderliche Kopie außer Haus, abgesicherte NAS-Administration mit MFA) und organisatorische Maßnahmen (Restore-Testplan, Zuständigkeiten, Zutrittsregelung) ab, setze sie um bzw. schlage sie vor und prüfe ihre Wirksamkeit durch Tests.“</p>
        <p><strong>e)</strong> (1) Probe-Restore eines Patientenordners und des kompletten Servers auf Ersatzhardware → erwartet: Daten vollständig (Dateianzahl und Prüfsummen identisch), Wiederherstellung innerhalb der vereinbarten Zeit. (2) Mit einem normalen Praxis-Benutzerkonto wird versucht, einen Snapshot auf dem NAS zu löschen → erwartet: Vorgang wird abgelehnt und protokolliert. (3) Aufruf der NAS-Weboberfläche aus dem Client-Netz → erwartet: nicht erreichbar; aus dem Management-Netz nur mit zweitem Faktor.</p>`
    },
    {
      id: "e-test-2",
      topic: "qualitaet-tests",
      title: "Testfälle und Testauswertung für eine Backup-Lösung",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Für die Steuerkanzlei Petersen &amp; Partner wurde eine Backup-Lösung eingerichtet: inkrementelle Sicherung Mo–Fr um 22 Uhr auf ein NAS, Vollsicherung samstags, verschlüsselte Kopie in ein Cloud-Rechenzentrum in der EU, E-Mail-Alarm bei Fehlern. Anforderung: Ein 200-GiB-Ordner muss in weniger als einer Stunde wiederhergestellt sein.</p>
        <p>a) Formuliere vier Testfälle mit Vorbedingung/Aktion und erwartetem Ergebnis.</p>
        <p>b) Ordne zu, um welche Teststufe bzw. Testart es sich handelt: (1) Der Admin prüft isoliert, ob der Backup-Job mit dem Dienstkonto auf das NAS schreiben kann. (2) Nach einem Firmware-Update des NAS werden alle bisherigen Testfälle wiederholt. (3) Der Kanzleichef prüft die Lösung anhand der vereinbarten Kriterien. (4) Die Wiederherstellung von 200 GiB wird mit der Stoppuhr gemessen.</p>
        <p>c) Von 25 Testfällen wurden 22 bestanden. Offen ist u. a. ein Fehler der Klasse „kritisch“: Die Cloud-Kopie wird unverschlüsselt übertragen. Berechne die Bestehensquote und entscheide über die Freigabe.</p>
        <p>d) Grenze Systemtest und Abnahmetest voneinander ab.</p>`,
      solution: `<p><strong>a)</strong> Beispiele:</p>
        <table><thead><tr><th>ID</th><th>Vorbedingung/Aktion</th><th>erwartetes Ergebnis</th></tr></thead><tbody>
          <tr><td>T01</td><td>Testdatei wird am Montag geändert; Job läuft um 22 Uhr</td><td>Job-Status „Erfolgreich“, geänderte Datei ist im inkrementellen Backup enthalten</td></tr>
          <tr><td>T02</td><td>NAS wird vor dem Job vom Netz getrennt</td><td>Job schlägt fehl, Alarm-E-Mail an support@ innerhalb von 10 min</td></tr>
          <tr><td>T03</td><td>Restore eines 200-GiB-Ordners an einen alternativen Pfad</td><td>Restore in unter 60 min abgeschlossen, Dateianzahl und Prüfsummen identisch</td></tr>
          <tr><td>T04</td><td>Mitschnitt der Übertragung zur Cloud bzw. Prüfung der Job-Einstellungen</td><td>Daten werden nur verschlüsselt übertragen und gespeichert (AES-256), Schlüssel liegt nur bei der Kanzlei</td></tr>
        </tbody></table>
        <p><strong>b)</strong> (1) Komponententest / Funktionstest · (2) Regressionstest · (3) Abnahmetest · (4) Performance- bzw. Restore-Test (nicht-funktionale Anforderung).</p>
        <p><strong>c)</strong> Bestehensquote: 22 ÷ 25 × 100 = <strong>88 %</strong>. Eine Freigabe ist <strong>nicht</strong> möglich, weil ein kritischer Fehler offen ist: Unverschlüsselte Mandantendaten in der Cloud verletzen die Vertraulichkeit und den Datenschutz. Erst Fehler beheben, dann Nachtest von T04 und Regressionstest der betroffenen Testfälle, danach neue Freigabeentscheidung.</p>
        <p><strong>d)</strong> Der <strong>Systemtest</strong> wird vom Auftragnehmer durchgeführt und prüft das Gesamtsystem gegen das Pflichtenheft (technische Sicht). Der <strong>Abnahmetest</strong> erfolgt durch bzw. mit dem Kunden gegen die vereinbarten Abnahmekriterien aus Lastenheft/Vertrag; sein Ergebnis ist Grundlage für die rechtliche Abnahme.</p>`
    },
    {
      id: "e-migration-3",
      topic: "change-migration",
      title: "Dateiserver-Migration mit Wartungsfenster und Rollback",
      level: 3,
      exam: ["AP2"],
      task: `<p>Die Marschland Logistik GmbH (120 Nutzer, 4 Abteilungen) migriert ihren Dateiserver (2,4 TiB) auf ein neues System. Die alte Hardware schafft effektiv nur 110 MiB/s Lesegeschwindigkeit. Als Wartungsfenster wurde Samstag, 14–20 Uhr, vereinbart. Während der Übergangszeit sollen Videodateien (bis 6 GiB groß) zusätzlich auf eine FAT32-formatierte USB-Festplatte kopiert werden.</p>
        <p>a) Berechne die Dauer einer vollständigen Kopie und beurteile, ob sie ins Wartungsfenster passt. (4 Punkte)</p>
        <p>b) Schlage ein Vorgehen vor, mit dem die Umstellung im Wartungsfenster gelingt. Pro Woche ändern sich etwa 5 % der Daten. (4 Punkte)</p>
        <p>c) Wähle begründet eine Migrationsmethode. (3 Punkte)</p>
        <p>d) Nenne vier Inhalte des Rollback-Plans. (4 Punkte)</p>
        <p>e) Um welchen Change-Typ handelt es sich, und wer genehmigt ihn? (2 Punkte)</p>
        <p>f) Erkläre das Problem mit der USB-Festplatte und nenne eine Lösung. (2 Punkte)</p>
        <p>g) Beschreibe, wie du die vollständige Datenübernahme prüfst. (3 Punkte)</p>`,
      hints: ["TiB und MiB sind Binärpräfixe: 1 TiB = 2⁴⁰ Byte, 1 MiB = 2²⁰ Byte.", "Das Wartungsfenster muss auch Tests und einen möglichen Rollback abdecken."],
      solution: `<p><strong>a)</strong> Dauer = 2,4 × 2⁴⁰ Byte ÷ (110 × 2²⁰ Byte/s) = 2,4 × 1.048.576 ÷ 110 s ≈ 22.878 s ≈ <strong>6 h 21 min</strong>. Das Wartungsfenster hat nur 6 h (360 min). Die Kopie allein passt nicht hinein – Tests und ein möglicher Rollback erst recht nicht.</p>
        <p><strong>b)</strong> Die Daten werden in der Woche vor dem Stichtag im laufenden Betrieb <strong>vorab synchronisiert</strong> (z. B. mit <code>robocopy /MIR /COPYALL</code>). Im Wartungsfenster werden die Freigaben am Altserver auf „nur lesen“ gesetzt und nur noch die Änderungen übertragen: 5 % von 22.878 s ≈ 1.144 s ≈ <strong>19 min</strong>. Danach bleibt ausreichend Zeit für Tests (z. B. 1 h), Umstellung der Laufwerkszuordnungen bzw. des DFS-Namespace und einen Rollback-Puffer.</p>
        <p><strong>c)</strong> Empfehlung: <strong>Stichtagsmigration mit Vorabsynchronisation</strong>. Da die Abteilungen gemeinsame Ordner nutzen, würde eine stufenweise Migration die Daten zeitweise auf zwei Server verteilen und zu Versionskonflikten führen. Das Risiko des Stichtags wird durch Vorabkopie, Tests und Rückfallplan begrenzt. (Eine begründete Pilotphase mit einer Abteilung ist ebenfalls vertretbar, wenn deren Daten getrennt sind.)</p>
        <p><strong>d)</strong> (1) Altserver bleibt unverändert und schreibgeschützt bis zur Abnahme; aktuelles Backup liegt vor. (2) Go/No-Go-Kriterien, z. B. Dateianzahl und Prüfsummen identisch, Zugriffe aus allen vier Abteilungen erfolgreich, Rechte korrekt. (3) Spätester Entscheidungszeitpunkt, z. B. Samstag 18:30 Uhr. (4) Schritte: DFS-Ziel bzw. Laufwerkszuordnung zurück auf den Altserver, Schreibrechte wiederherstellen, Nutzer informieren. (5) Verantwortliche und Kontaktdaten.</p>
        <p><strong>e)</strong> <strong>Normal-Change</strong> (geplant, nicht vorab standardisiert, mit Risiko für den Geschäftsbetrieb). Er wird nach Bewertung vom Change Manager bzw. dem Change Advisory Board (CAB) des Kunden genehmigt.</p>
        <p><strong>f)</strong> FAT32 erlaubt höchstens 4 GiB pro Datei, die 6-GiB-Videos lassen sich nicht speichern. Lösung: Festplatte mit exFAT oder NTFS formatieren.</p>
        <p><strong>g)</strong> Anzahl der Dateien und Ordner sowie Gesamtgröße vergleichen, Prüfsummen (z. B. SHA-256) für Stichproben bilden, Berechtigungen stichprobenartig kontrollieren, Log-Datei der Kopie auf Fehler und übersprungene Dateien prüfen und Key User aus jeder Abteilung testen lassen – Ergebnisse im Testprotokoll festhalten.</p>`
    },
    {
      id: "e-vertrag-2",
      topic: "vertrag-recht",
      title: "Vertragsarten und Abnahme im Kundenprojekt",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH schließt mit Kunden verschiedene Verträge.</p>
        <p>a) Ordne die Leistungen einer Vertragsart zu und begründe kurz: (1) Lieferung von 15 Monitoren, (2) „Einrichtung eines funktionsfähigen VPN-Zugangs für drei Homeoffice-Plätze“ zum Festpreis, (3) monatlich 8 Stunden Administration nach Aufwand, (4) Zusammenbau von fünf individuell konfigurierten Workstations, (5) Überlassung eines Kopierers für 48 Monate gegen monatliche Rate, das Eigentum bleibt beim Anbieter.</p>
        <p>b) Bei der Abnahme des VPN (Leistung 2) stellt der Kunde fest, dass der Verbindungsaufbau an einem Platz 20 statt der vereinbarten 10 Sekunden dauert; sonst funktioniert alles. Darf er die Abnahme verweigern? Wie ist vorzugehen?</p>
        <p>c) Nenne drei Rechtsfolgen der Abnahme.</p>
        <p>d) Zwei Monate nach der Abnahme fällt ein VPN-Zugang dauerhaft aus. Welche Rechte hat der Kunde und in welcher Reihenfolge?</p>`,
      solution: `<p><strong>a)</strong> (1) <strong>Kaufvertrag</strong>: Übergabe und Eigentum an Sachen gegen Kaufpreis. (2) <strong>Werkvertrag</strong>: geschuldet ist ein Erfolg (funktionsfähiges VPN). (3) <strong>Dienstvertrag</strong>: geschuldet ist eine Tätigkeit nach Zeitaufwand, kein bestimmter Erfolg. (4) <strong>Werklieferungsvertrag</strong>: herzustellende bewegliche Sachen, es gilt Kaufrecht. (5) <strong>Leasing- bzw. Mietvertrag</strong>: Gebrauchsüberlassung auf Zeit, kein Eigentumsübergang.</p>
        <p><strong>b)</strong> Nein. Wegen eines <strong>unwesentlichen</strong> Mangels darf die Abnahme nicht verweigert werden (§ 640 Abs. 1 BGB). Der Kunde nimmt ab, lässt den Mangel aber im Abnahmeprotokoll festhalten und behält sich seine Rechte ausdrücklich vor; zugleich wird eine Frist zur Beseitigung vereinbart.</p>
        <p><strong>c)</strong> Die Vergütung wird fällig; die Gefahr geht auf den Kunden über; die Verjährungsfrist für Mängelansprüche beginnt; die Beweislast für Mängel liegt nun beim Kunden.</p>
        <p><strong>d)</strong> Zuerst <strong>Nacherfüllung</strong>: Der Kunde setzt eine angemessene Frist; die Nordlicht IT GmbH wählt, ob sie nachbessert oder neu herstellt. Erst wenn die Frist erfolglos abläuft (oder die Nacherfüllung fehlschlägt), kann der Kunde den Mangel selbst beseitigen lassen und Aufwendungsersatz verlangen (Selbstvornahme), vom Vertrag zurücktreten oder die Vergütung mindern sowie ggf. Schadensersatz verlangen (§ 634 BGB). Da die Abnahme erfolgt ist, muss der Kunde den Mangel nachweisen.</p>`
    },
    {
      id: "e-recht-3",
      topic: "vertrag-recht",
      title: "Rechtsfälle: HGB-Rügepflicht, AGB, UWG und Compliance",
      level: 3,
      exam: ["AP2"],
      task: `<p>Die Nordlicht IT GmbH hat mehrere rechtliche Fragen.</p>
        <p>a) Nordlicht kauft bei einer Großhandels-GmbH 40 SSDs. Die Lieferung kommt am 05.10.; ausgepackt wird am 03.11. Dabei zeigen sechs SSDs deutlich sichtbare Beschädigungen am Anschluss. Beurteile die Rechtslage. Wie wäre es, wenn eine SSD äußerlich einwandfrei ist, aber nach zwei Wochen Betrieb ausfällt? (6 Punkte)</p>
        <p>b) In den AGB des Großhändlers steht „Mängelansprüche verjähren nach 6 Monaten“. Im individuell ausgehandelten Rahmenvertrag wurden 24 Monate vereinbart. Was gilt? (3 Punkte)</p>
        <p>c) Ein Vertriebsmitarbeiter möchte einen Werbe-Newsletter an alle 2.000 E-Mail-Adressen im CRM schicken, darunter Visitenkarten von Messebesuchern, die nie eingewilligt haben. Beurteile das Vorhaben und zeige einen rechtssicheren Weg auf. (6 Punkte)</p>
        <p>d) Ein Kunde lädt den Projektleiter kurz vor der Auftragsvergabe zu einem teuren Segeltörn ein. Wie sollte er sich verhalten? (3 Punkte)</p>
        <p>e) Nenne zwei Anforderungen der DSGVO an den Betrieb des CRM-Systems. (2 Punkte)</p>`,
      solution: `<p><strong>a)</strong> Beide Parteien sind als GmbH Kaufleute, es liegt ein beiderseitiges Handelsgeschäft vor. Nach <strong>§ 377 HGB</strong> muss Nordlicht die Ware unverzüglich nach Lieferung untersuchen und erkennbare Mängel unverzüglich rügen. Eine Untersuchung erst nach vier Wochen ist nicht unverzüglich; die sichtbaren Beschädigungen hätten beim Auspacken sofort auffallen müssen. Die Ware gilt hinsichtlich dieser Mängel als <strong>genehmigt</strong> – Mängelrechte bestehen nicht mehr. Bei einem <strong>versteckten Mangel</strong> (Ausfall nach zwei Wochen) muss unverzüglich <em>nach Entdeckung</em> gerügt werden; dann bleiben die Rechte (Nacherfüllung usw.) erhalten. Konsequenz: Wareneingangskontrolle sofort durchführen und dokumentieren.</p>
        <p><strong>b)</strong> Individuelle Vertragsabreden haben <strong>Vorrang vor AGB</strong> (§ 305b BGB). Es gelten die im Rahmenvertrag vereinbarten 24 Monate.</p>
        <p><strong>c)</strong> Werbung per E-Mail ohne vorherige ausdrückliche Einwilligung ist eine <strong>unzumutbare Belästigung nach § 7 UWG</strong>; zudem fehlt für die Nutzung der Adressen zu Werbezwecken eine Rechtsgrundlage nach DSGVO. Folgen: Abmahnung durch Mitbewerber oder Verbände, Unterlassungs- und Schadensersatzansprüche, Beschwerden bei der Datenschutzaufsicht bis hin zu Bußgeldern, Imageschaden. Rechtssicher: nur an Empfänger senden, die per <strong>Double-Opt-in</strong> eingewilligt haben (Einwilligung protokollieren, Abmeldelink in jeder Mail). Bestehende Kunden dürfen unter den engen Voraussetzungen des § 7 Abs. 3 UWG Werbung für ähnliche eigene Produkte erhalten, wenn sie bei der Erhebung und in jeder Mail auf ihr Widerspruchsrecht hingewiesen werden.</p>
        <p><strong>d)</strong> Die Einladung erweckt den Anschein, die Auftragsvergabe beeinflussen zu sollen (Compliance-Verstoß, im Extremfall Bestechlichkeit im geschäftlichen Verkehr). Der Projektleiter lehnt höflich ab bzw. hält sich an die Geschenkerichtlinie des Unternehmens, informiert Vorgesetzte oder Compliance-Beauftragte und dokumentiert den Vorgang.</p>
        <p><strong>e)</strong> Zweckbindung und Rechtsgrundlage für jede Verarbeitung, Löschkonzept mit Fristen, rollenbasierte Zugriffsrechte, Auftragsverarbeitungsvertrag nach Art. 28 DSGVO bei einem Cloud-CRM, Wahrung der Betroffenenrechte (Auskunft, Löschung).</p>`
    },
    {
      id: "e-abnahme-2",
      topic: "abnahme-uebergabe",
      title: "Abnahme, Schulung und Dokumentation einer VPN-Lösung",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH hat für die Arztpraxis Dr. Lorenzen in Heide eine Firewall mit VPN-Zugang für drei Ärztinnen und Ärzte im Homeoffice eingerichtet. Die Anmeldung erfolgt mit Zertifikat und zweitem Faktor (App).</p>
        <p>a) Nenne sechs Inhalte des Abnahmeprotokolls.</p>
        <p>b) Beim Abnahmetest funktioniert an einem der drei Zugänge der zweite Faktor noch nicht – die Anmeldung gelingt dort nur mit Zertifikat. Beschreibe, wie du das im Protokoll festhältst und welche Entscheidung sinnvoll ist.</p>
        <p>c) Entwirf ein kurzes Schulungskonzept für die drei Ärzte (wenig IT-Erfahrung) und die Praxismanagerin (Key User).</p>
        <p>d) Welche Dokumente erhält wer? Unterscheide nach Zielgruppe.</p>
        <p>e) Wie übergibst du die Administrator-Zugangsdaten der Firewall?</p>`,
      solution: `<p><strong>a)</strong> Vertragsparteien und Auftrag; Datum, Ort und Teilnehmende; abgenommene Leistung mit Bezug auf Vertrag/Pflichtenheft; Prüfergebnisse bzw. Verweis auf das Testprotokoll; festgestellte Mängel mit Einstufung und Frist zur Beseitigung; Vorbehalte; Entscheidung (abgenommen, unter Vorbehalt, verweigert); Unterschriften beider Parteien.</p>
        <p><strong>b)</strong> Im Protokoll: betroffener Zugang, fehlgeschlagener Testfall (z. B. T05 „Anmeldung ohne zweiten Faktor wird abgelehnt“ – nicht bestanden), Einstufung als <strong>wesentlicher Mangel</strong>, weil eine vereinbarte Sicherheitsanforderung zum Schutz von Patientendaten nicht erfüllt ist, Frist zur Beseitigung (z. B. 3 Werktage) und neuer Abnahmetermin. Sinnvoll ist, die Abnahme für diesen Teil zu verweigern und den betroffenen Zugang bis zur Behebung zu sperren; die zwei funktionierenden Zugänge können – falls vertraglich vorgesehen – als Teilleistung abgenommen werden.</p>
        <p><strong>c)</strong> <em>Ärzte:</em> Ziel: VPN sicher starten, zweiten Faktor bestätigen, bei Problemen richtig reagieren. Methode: je 30 Minuten Einzeleinweisung am eigenen Homeoffice-Gerät (praxisnah, individuelles Tempo), Übung „Verbindung auf- und abbauen“. <em>Praxismanagerin (Key User):</em> 90 Minuten: Nutzer sperren und freischalten, neues Smartphone für den zweiten Faktor registrieren, einfache Fehlerbilder erkennen, wann der Support zu rufen ist. Unterlagen: bebilderte Kurzanleitung (1 Seite) und Kontaktkarte des Supports. Erfolgskontrolle: Jeder baut die Verbindung einmal selbstständig auf; kurzer Feedbackbogen.</p>
        <p><strong>d)</strong> <em>Ärzte:</em> Benutzer-Kurzanleitung (VPN-Client starten, Anmeldung mit App, Verhalten bei Verlust des Smartphones, Hotline). <em>Praxismanagerin:</em> Key-User-Anleitung (Nutzerverwaltung, Standardprobleme). <em>Nordlicht-Support bzw. Administrator:</em> Systemdokumentation (Netzplan, Firewallregeln, VPN-Profile, Zertifikate mit Ablaufdaten, Sicherung der Konfiguration, Wiederherstellung, Notfallkontakte, Änderungshistorie).</p>
        <p><strong>e)</strong> Nicht im Protokoll und nicht per unverschlüsselter E-Mail: persönliche Übergabe im versiegelten Umschlag bzw. über einen Passwortmanager, getrennter Kanal für Benutzername und Passwort, Änderung des Initialpassworts bei der ersten Anmeldung, Übergabe im Übergabeprotokoll nur als „erfolgt“ vermerken.</p>`
    },
    {
      id: "e-sollist-2",
      topic: "projektabschluss",
      title: "Soll-Ist-Vergleich eines WLAN-Projekts",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH hat im Hotel Friesenhof in St. Peter-Ording das WLAN ausgebaut. Der Stundensatz beträgt 60 €/h.</p>
        <table><thead><tr><th>Phase</th><th>Soll (h)</th><th>Ist (h)</th></tr></thead><tbody>
          <tr><td>Planung</td><td>12</td><td>10</td></tr>
          <tr><td>Beschaffung</td><td>4</td><td>6</td></tr>
          <tr><td>Installation</td><td>20</td><td>26</td></tr>
          <tr><td>Test</td><td>8</td><td>7</td></tr>
          <tr><td>Übergabe</td><td>6</td><td>6</td></tr>
        </tbody></table>
        <p>Sachkosten: Soll 6.800 €, Ist 7.150 €.</p>
        <p>a) Berechne die Abweichungen der Stunden je Phase und insgesamt absolut und in Prozent.</p>
        <p>b) Berechne die Gesamtkosten Soll und Ist sowie die Abweichung absolut und in Prozent.</p>
        <p>c) Nenne zwei plausible Ursachen für die größten Abweichungen.</p>
        <p>d) Formuliere zwei konkrete Lessons Learned.</p>
        <p>e) Vereinbart ist eine Verfügbarkeit von 99,9 % im Jahr. Wie lange darf das WLAN pro Jahr höchstens ausfallen?</p>`,
      solution: `<p><strong>a)</strong> Planung: −2 h (−16,67 %) · Beschaffung: +2 h (+50 %) · Installation: +6 h (+30 %) · Test: −1 h (−12,5 %) · Übergabe: 0 h (0 %).<br>
        Gesamt: Soll 50 h, Ist 55 h → <strong>+5 h</strong> bzw. 5 ÷ 50 × 100 = <strong>+10 %</strong>.</p>
        <p><strong>b)</strong> Personalkosten: Soll 50 × 60 = 3.000 €, Ist 55 × 60 = 3.300 €.<br>
        Gesamtkosten: Soll 3.000 + 6.800 = <strong>9.800 €</strong>, Ist 3.300 + 7.150 = <strong>10.450 €</strong>.<br>
        Abweichung: <strong>+650 €</strong> bzw. 650 ÷ 9.800 × 100 ≈ <strong>+6,63 %</strong>.</p>
        <p><strong>c)</strong> Installation (+30 %): massive Brandschutzwände dämpften das Signal stärker als erwartet, ein zusätzlicher Access Point samt Verkabelung war nötig (erklärt auch die höheren Sachkosten). Beschaffung (+50 %): Lieferengpass beim geplanten Access-Point-Modell, ein gleichwertiges Alternativmodell musste gesucht und abgestimmt werden.</p>
        <p><strong>d)</strong> „Vor der Planung eine Ausleuchtung (Site Survey) vor Ort durchführen, statt nur mit dem Grundriss zu planen.“ · „Lieferzeiten der Hardware bereits in der Analysephase verbindlich abfragen und ein Alternativmodell vorab freigeben lassen.“</p>
        <p><strong>e)</strong> Zulässige Ausfallzeit = 8.760 h × (1 − 0,999) = <strong>8,76 h pro Jahr</strong> (≈ 8 h 46 min).</p>`
    },
    {
      id: "e-themen-1",
      topic: "ihk-projektantrag",
      title: "Geeignete Themen für das IHK-Abschlussprojekt",
      level: 1,
      exam: ["AP2"],
      task: `<p>Drei Auszubildende der Nordlicht IT GmbH überlegen, welches Thema sie für ihr Abschlussprojekt (FISI) beantragen.</p>
        <p>a) Beurteile, ob die Themen geeignet sind, und begründe kurz:</p>
        <ol>
          <li>Einrichtung von 25 Notebooks nach einer vorhandenen Checkliste</li>
          <li>Konzeption und Einführung einer zentralen Log-Sammlung mit Alarmierung für 12 Server eines Kunden</li>
          <li>Programmierung einer Web-Anwendung zur Urlaubsplanung in Java</li>
          <li>Vergleich von Virtualisierungslösungen als reine Literaturarbeit</li>
          <li>Migration der Dateiablage eines Kunden auf ein NAS mit neuem Berechtigungs- und Backupkonzept</li>
          <li>Gemeinsamer Aufbau eines Firmennetzes durch drei Auszubildende</li>
        </ol>
        <p>b) Nenne die sechs Anforderungen, die das Projekt nach § 20 FIAusbV abdecken muss.</p>
        <p>c) Was muss der Projektantrag nach der Verordnung mindestens enthalten, und wie viele Stunden stehen zur Verfügung?</p>`,
      solution: `<p><strong>a)</strong> 1. <strong>ungeeignet</strong> – Routinetätigkeit ohne Analyse, Alternativen und Entscheidungen. 2. <strong>geeignet</strong> – echte Kundenanforderung, Alternativen (z. B. verschiedene Log-Lösungen), Umsetzung, Sicherheitsaspekte und Übergabe möglich. 3. <strong>ungeeignet</strong> – reine Softwareentwicklung gehört zum Beruf FIAE. 4. <strong>ungeeignet</strong> – keine betriebliche Umsetzung, nur Theorie. 5. <strong>geeignet</strong> – Anforderungen, Alternativen, Migration, Berechtigungen und Sicherheit, Übergabe. 6. <strong>nur bedingt</strong> – nur zulässig, wenn jeder einen klar abgegrenzten, eigenständig durchgeführten Teil mit eigener Dokumentation hat; sonst ist die Eigenleistung nicht bewertbar.</p>
        <p><strong>b)</strong> (1) auftragsbezogene Anforderungen analysieren, (2) Lösungsalternativen nach technischen, wirtschaftlichen und qualitativen Aspekten vorschlagen, (3) Systemänderungen und -erweiterungen durchführen und übergeben, (4) IT-Systeme einführen und pflegen, (5) Schwachstellen analysieren sowie Schutzmaßnahmen vorschlagen und umsetzen, (6) Projekte anforderungsgerecht dokumentieren.</p>
        <p><strong>c)</strong> Mindestens <strong>Ausgangssituation, Projektziel und Zeitplanung</strong>; er wird vor Beginn dem Prüfungsausschuss zur Genehmigung vorgelegt. Für Projektarbeit und Dokumentation zusammen stehen <strong>höchstens 40 Stunden</strong> zur Verfügung.</p>`
    },
    {
      id: "e-antrag-3",
      topic: "ihk-projektantrag",
      title: "Einen mangelhaften Projektantrag überarbeiten",
      level: 3,
      exam: ["AP2"],
      task: `<p>Jonas, Auszubildender bei der Nordlicht IT GmbH, zeigt dir seinen Entwurf für den Projektantrag:</p>
        <ul>
          <li><strong>Projektbezeichnung:</strong> Neuer Server</li>
          <li><strong>Ausgangssituation:</strong> Unser alter Server ist zu alt und langsam.</li>
          <li><strong>Projektziel:</strong> Ein neuer Server soll installiert werden, damit alles schneller läuft.</li>
          <li><strong>Umsetzung:</strong> Mein Kollege Tim installiert den Hypervisor, danach richte ich die VMs ein. Wir nehmen wieder das bisherige Produkt, das kennen wir schon.</li>
          <li><strong>Zeitplanung:</strong> Installation 30 h, Dokumentation 15 h</li>
          <li><strong>Beginn:</strong> Ich habe letzte Woche schon mit der Installation angefangen.</li>
        </ul>
        <p>a) Nenne sechs Mängel des Entwurfs und begründe sie mit den Vorgaben der Projektarbeit. (9 Punkte)</p>
        <p>b) Formuliere eine aussagekräftige Projektbezeichnung und ein SMART-Projektziel (eigene, plausible Zahlen). (4 Punkte)</p>
        <p>c) Erstelle eine korrigierte Zeitplanung mit Phasen und Stunden. (5 Punkte)</p>
        <p>d) Nenne zwei Lösungsalternativen sowie zwei Schwachstellen mit passender Schutzmaßnahme, die im Projekt betrachtet werden könnten. (4 Punkte)</p>`,
      solution: `<p><strong>a)</strong></p>
        <ol>
          <li><strong>Projektbezeichnung</strong> zu allgemein – Ergebnis, Technik und Auftraggeber sind nicht erkennbar.</li>
          <li><strong>Ausgangssituation</strong> ohne messbare Ist-Analyse (Alter, Auslastung, Dienste, Nutzerzahl, konkrete Probleme).</li>
          <li><strong>Ziel nicht SMART</strong>: „schneller“ ist nicht messbar; Kosten-, Zeit- und Qualitätsziel fehlen.</li>
          <li><strong>Keine Lösungsalternativen</strong> – das Produkt ist vorab festgelegt; § 20 verlangt Alternativen nach technischen, wirtschaftlichen und qualitativen Aspekten.</li>
          <li><strong>IT-Sicherheit fehlt</strong> – keine Schwachstellenanalyse und keine Schutzmaßnahmen (§ 20 Abs. 2 Nr. 5).</li>
          <li><strong>Zeitplanung</strong>: 45 h überschreiten die maximalen 40 h; Phasen wie Analyse, Planung, Test und Übergabe fehlen; 15 h Doku (≈ 33 %) sind deutlich zu viel (Richtwert ca. 15 %).</li>
          <li><strong>Eigenleistung unklar</strong> – Tim übernimmt einen Kernteil; Eigen- und Fremdleistung müssen klar abgegrenzt sein.</li>
          <li><strong>Beginn vor der Genehmigung</strong> – unzulässig; erst nach schriftlicher Genehmigung darf begonnen werden.</li>
          <li>Übergabe, Einweisung und Kundendokumentation sind nicht vorgesehen.</li>
        </ol>
        <p><strong>b)</strong> Bezeichnung: „Ablösung des Einzelservers durch einen neuen Virtualisierungshost mit Migration der Serverdienste und integrierter Datensicherung bei der Nordlicht IT GmbH“.<br>
        Ziel: „Bis zum 13.11.2026 laufen die sechs bisherigen Serverdienste (Verzeichnisdienst, Datei-, Druck-, Warenwirtschafts-, Update- und Lizenzserver) als virtuelle Maschinen auf einem neuen Host. Die Anmeldezeit der 45 Clients sinkt von durchschnittlich 90 s auf unter 30 s. Die Umstellung erfolgt außerhalb der Geschäftszeiten mit höchstens 4 h Ausfall. Die Projektkosten betragen höchstens 9.500 €.“</p>
        <p><strong>c)</strong></p>
        <table><thead><tr><th>Phase</th><th>Tätigkeiten</th><th>Stunden</th></tr></thead><tbody>
          <tr><td>Analyse</td><td>Ist-Aufnahme 2 h, Anforderungsgespräch 1 h, Schwachstellenanalyse 2 h</td><td>5</td></tr>
          <tr><td>Planung</td><td>Alternativen und Nutzwertanalyse 3 h, Soll-Konzept 2 h, Zeit- und Kostenplanung 2 h, Test- und Migrationsplan 2 h</td><td>9</td></tr>
          <tr><td>Durchführung</td><td>Host installieren und härten 4 h, VMs migrieren 7 h, Backup einbinden 3 h</td><td>14</td></tr>
          <tr><td>Test/QS</td><td>Funktions-, Restore- und Performancetests, Nachtests</td><td>4</td></tr>
          <tr><td>Übergabe</td><td>Abnahme, Einweisung der Administratoren</td><td>2</td></tr>
          <tr><td>Dokumentation</td><td>Projekt- und Kundendokumentation</td><td>6</td></tr>
          <tr><td><strong>Summe</strong></td><td></td><td><strong>40</strong></td></tr>
        </tbody></table>
        <p><strong>d)</strong> Alternativen: kommerzieller Hypervisor (bisheriges Produkt) vs. Microsoft Hyper-V vs. Open-Source-Plattform (z. B. Proxmox VE) oder Auslagerung als IaaS in ein Rechenzentrum – bewertet nach Kosten (Lizenzmodell), Funktionen, Know-how, Support. Schwachstellen und Maßnahmen: Verwaltungsoberfläche des Hypervisors im Produktivnetz → eigenes Management-VLAN und MFA; Backups auf demselben System → 3-2-1-Regel mit Offline- bzw. unveränderlicher Kopie; veraltete Firmware → Updates vor Inbetriebnahme und Patchprozess; Standardpasswörter → individuelle Passwörter im Passwortmanager.</p>`
    },
    {
      id: "e-fachgespraech-3",
      topic: "ihk-doku-praesentation",
      title: "Präsentation planen und Fachgespräch üben",
      level: 3,
      exam: ["AP2"],
      task: `<p>Lea hat als Abschlussprojekt bei der Autohaus Friesen GmbH eine zertifikatsbasierte WLAN-Authentifizierung (WPA3-Enterprise, EAP-TLS, ein RADIUS-Server) mit getrenntem Gästenetz eingeführt. Nun bereitet sie Präsentation und Fachgespräch vor.</p>
        <p>a) Erstelle eine Gliederung der Präsentation mit Zeitangaben (Planung auf etwa 14 Minuten). (5 Punkte)</p>
        <p>b) Formuliere vollständige Antworten auf drei typische Fragen: (1) „Warum haben Sie EAP-TLS statt PEAP mit MSCHAPv2 gewählt?“ (2) „Was passiert, wenn Ihr RADIUS-Server ausfällt?“ (3) „Was würden Sie beim nächsten Projekt anders machen?“ (9 Punkte)</p>
        <p>c) Lea erhält für die Dokumentation 64 Punkte, für die Präsentation 70 und für das Fachgespräch 58 Punkte. Berechne das Ergebnis des Prüfungsbereichs, wenn Präsentation und Fachgespräch gleich gewichtet werden, und ordne die Note ein. (4 Punkte)</p>
        <p>d) Wähle für drei Inhalte die passende Diagrammart: Soll-Ist-Stunden je Phase, Aufteilung der Projektkosten, Anzahl verbundener WLAN-Clients im Tagesverlauf. (3 Punkte)</p>
        <p>e) Nenne drei Verhaltensregeln für das Fachgespräch. (3 Punkte)</p>`,
      solution: `<p><strong>a)</strong> Beispiel:</p>
        <table><thead><tr><th>Abschnitt</th><th>Inhalt</th><th>Zeit</th></tr></thead><tbody>
          <tr><td>1 Einstieg</td><td>Vorstellung, Unternehmen, Ausgangssituation und Problem</td><td>1,5 min</td></tr>
          <tr><td>2 Ziele</td><td>Sach-, Zeit-, Kosten- und Qualitätsziel, Anforderungen</td><td>1,5 min</td></tr>
          <tr><td>3 Entscheidung</td><td>Alternativen, Nutzwertanalyse, Kostenvergleich</td><td>2,5 min</td></tr>
          <tr><td>4 Umsetzung</td><td>Vorgehen, Schlüsselentscheidungen, Probleme und Lösungen</td><td>3,5 min</td></tr>
          <tr><td>5 Sicherheit und QS</td><td>Schwachstellenanalyse, Maßnahmen, Tests</td><td>2,5 min</td></tr>
          <tr><td>6 Ergebnis</td><td>Abnahme, Soll-Ist-Vergleich</td><td>1,5 min</td></tr>
          <tr><td>7 Fazit</td><td>Reflexion, Ausblick</td><td>1 min</td></tr>
          <tr><td></td><td><strong>Summe</strong></td><td><strong>14 min</strong> (1 min Reserve)</td></tr>
        </tbody></table>
        <p><strong>b)</strong> (1) „EAP-TLS authentifiziert Client und Server gegenseitig über Zertifikate. Es werden keine Passwörter übertragen, daher können Zugangsdaten weder erraten noch über einen gefälschten Access Point abgegriffen werden. MSCHAPv2 gilt kryptografisch als schwach, und bei fehlender Prüfung des Serverzertifikats lassen sich Anmeldedaten mitschneiden. Der Nachteil von EAP-TLS – man braucht eine PKI und muss Zertifikate verteilen – war beim Autohaus gering, weil bereits eine interne CA vorhanden war und die Zertifikate automatisch per Gruppenrichtlinie verteilt werden.“<br>
        (2) „Neue Anmeldungen würden scheitern; bereits verbundene Geräte bleiben bis zur nächsten Neuauthentifizierung online. Das ist ein Single Point of Failure. Ich habe deshalb den RADIUS-Server überwacht und die Konfiguration sowie die CA gesichert. Aus Budgetgründen wurde im Projekt nur ein Server umgesetzt; im Ausblick habe ich einen zweiten RADIUS-Server empfohlen, der auf den Access Points bereits als sekundärer Server eingetragen werden kann.“<br>
        (3) „Ich würde die Bestandsaufnahme der Endgeräte früher und vollständiger durchführen. Zwei Drucker unterstützten kein 802.1X, das habe ich erst in der Durchführung bemerkt, und die MAC-basierte Ausnahme kostete zwei zusätzliche Stunden. Künftig prüfe ich die 802.1X-Fähigkeit aller Geräte schon in der Ist-Analyse und plane Ausnahmen vorab mit ein.“</p>
        <p><strong>c)</strong> Präsentation und Fachgespräch: (70 + 58) ÷ 2 = 64 Punkte<br>
        Prüfungsbereich: 0,5 × 64 + 0,5 × 64 = <strong>64 Punkte</strong> → Note <strong>ausreichend</strong> (unter 67 bis 50 Punkte). Hinweis: Die Gewichtung innerhalb des zweiten Teils ist IHK-abhängig; üblich ist 50:50.</p>
        <p><strong>d)</strong> Soll-Ist-Stunden je Phase → gruppiertes Säulen- oder Balkendiagramm (Vergleich) · Aufteilung der Projektkosten → Kreisdiagramm (Anteile) · Clients im Tagesverlauf → Liniendiagramm (Verlauf über die Zeit).</p>
        <p><strong>e)</strong> Vollständig und strukturiert antworten statt einsilbig; Fachbegriffe korrekt verwenden und Entscheidungen begründen; bei Unwissen ehrlich sein und zu Bekanntem überleiten; ruhig bleiben, nicht mit dem Ausschuss diskutieren; Rückfragen stellen, wenn eine Frage unklar ist.</p>`
    },
    {
      id: "e-doku-2",
      topic: "ihk-doku-praesentation",
      title: "Projektdokumentation prüfen und verbessern",
      level: 2,
      exam: ["AP2"],
      task: `<p>Mia, Auszubildende der Nordlicht IT GmbH, zeigt dir den Entwurf ihrer Projektdokumentation „Einführung eines zentralen Monitorings mit Alarmierung für die Nordsee-Logistik GmbH“. Sie legt ihr Projekt bei der IHK Flensburg ab.</p>
        <p>a) Ordne die Inhalte dem passenden Teil der Dokumentation zu (Einleitung, Planung, Durchführung, Qualitätssicherung, Abschluss, Anhang): (1) Nutzwertanalyse der drei Monitoring-Produkte, (2) Beschreibung der bisherigen Überwachung per handschriftlicher Checkliste, (3) vollständiges Testprotokoll mit 18 Testfällen, (4) Soll-Ist-Vergleich der Stunden, (5) Einrichtung der SNMPv3-Zugänge auf den Switches mit Begründung der gewählten Parameter, (6) Kurzanleitung für die Mitarbeitenden der Leitstelle. (6 Punkte)</p>
        <p>b) Finde im folgenden Auszug vier Mängel und schreibe eine verbesserte Fassung: (8 Punkte)</p>
        <p><em>„Monitoring ist die Überwachung von IT-Systemen. Es gibt viele Monitoring-Tools, zum Beispiel Zabbix, PRTG und Checkmk. Zabbix ist sehr beliebt und wird weltweit eingesetzt. Danach wurde der Monitoring-Server installiert (IP 10.20.1.15, Passwort Nordsee2026!). Es gab ein paar Probleme, die aber gelöst wurden.“</em></p>
        <p>c) Mias Text umfasst 12,5 Seiten. Nenne zwei sinnvolle Wege, die Vorgabe der IHK Flensburg einzuhalten, und einen Weg, der nicht erlaubt ist. (3 Punkte)</p>
        <p>d) Schreibe eine vollständige Quellenangabe für die Online-Dokumentation des Herstellers, die Mia genutzt hat. (2 Punkte)</p>
        <p>e) Mia hat sich beim Formulieren von einem KI-Chatbot helfen lassen. Beschreibe, wie sie damit korrekt umgeht, und was sie in der persönlichen Erklärung versichert. (3 Punkte)</p>`,
      hints: ["Bewertet wird der Arbeitsprozess: Was hast du getan, warum, mit welchem Ergebnis?", "Vorgabe IHK Flensburg laut Hinweisen: max. 10 Seiten Text + max. 25 Seiten Anhang, Arial 11, einzeilig."],
      solution: `<p><strong>a)</strong> (1) Planung (Lösungsalternativen und Entscheidung) · (2) Einleitung (Ausgangssituation/Ist-Analyse) · (3) Anhang – im Kapitel Qualitätssicherung steht eine kurze Zusammenfassung mit Verweis · (4) Abschluss · (5) Durchführung · (6) Anhang (Kunden- bzw. Anwenderdokumentation).</p>
        <p><strong>b)</strong> Mängel:</p>
        <ol>
          <li><strong>Lehrbuchtext statt Prozessbericht:</strong> Die allgemeine Definition und die Produktaufzählung zeigen keine Eigenleistung.</li>
          <li><strong>Behauptung ohne Beleg:</strong> „sehr beliebt, weltweit eingesetzt“ ist weder begründet noch mit einer Quelle belegt – und für die Entscheidung irrelevant; die Auswahl muss auf der eigenen Bewertung beruhen.</li>
          <li><strong>Sicherheitsverstoß:</strong> Ein Passwort im Klartext hat in einer Dokumentation nichts zu suchen; interne Adressen sind zu anonymisieren bzw. zu schwärzen.</li>
          <li><strong>Passiv und unkonkret:</strong> „wurde installiert“ verschleiert, wer gehandelt hat; „ein paar Probleme“ nennt weder Ursache noch Lösung noch Zeitaufwand.</li>
        </ol>
        <p>Verbesserte Fassung (Beispiel): „Nach der Entscheidung für Zabbix (Nutzwertanalyse, Kapitel 3.2) habe ich eine virtuelle Maschine auf dem vorhandenen Hypervisor eingerichtet und Zabbix aus dem Herstellerrepository installiert [2]. Beim ersten Einbinden der Access-Switches lieferten diese keine Messwerte, weil dort nur das unsichere SNMPv2c aktiv war. Ich habe deshalb SNMPv3 mit Authentifizierung und Verschlüsselung konfiguriert (Konfigurationsauszug in Anhang A4). Das kostete eine Stunde zusätzlich, die ich im Soll-Ist-Vergleich begründe.“</p>
        <p><strong>c)</strong> Sinnvoll: allgemeine Erklärungen streichen, lange Tabellen, Konfigurationen und Protokolle in den Anhang verschieben (mit Verweis), Wiederholungen zusammenfassen, Abbildungen auf das Wesentliche beschränken. <strong>Nicht erlaubt:</strong> Schriftgröße, Schriftart, Zeilenabstand oder Ränder gegenüber den Formvorgaben verändern.</p>
        <p><strong>d)</strong> Beispiel: [2] Zabbix SIA: Zabbix Manual, Version 7.0, Kapitel „Installation from packages“. Online: https://www.zabbix.com/documentation (abgerufen am 21.10.2026). Entscheidend sind Herausgeber, Titel, Version, URL und Abrufdatum.</p>
        <p><strong>e)</strong> Mia kennzeichnet die KI-Nutzung offen, z. B. in einem Hilfsmittelverzeichnis („KI-Chatbot zur sprachlichen Überarbeitung von Kapitel 4“), prüft alle Aussagen fachlich selbst und übernimmt keine ungeprüften Inhalte. Mit der persönlichen Erklärung versichert sie durch Unterschrift, dass sie Projekt und Dokumentation selbstständig angefertigt und nur die angegebenen Quellen und Hilfsmittel verwendet hat. Ungekennzeichnete Hilfe kann als Täuschung gewertet werden (bis hin zu 0 Punkten); die genauen Regeln der IHK Flensburg sollte sie vorher erfragen.</p>`
    },
  ],
  quiz: [
    { id: "q-pg-1", topic: "projekt-grundlagen", type: "single",
      q: "Welches Vorhaben ist ein Projekt?",
      options: ["Einführung eines Ticketsystems für die 45 Beschäftigten eines Systemhauses", "monatliches Einspielen der Sicherheitsupdates auf 30 Clients", "tägliche Kontrolle der Backup-Protokolle", "Anlegen eines Benutzerkontos für eine neue Mitarbeiterin"],
      answer: 0,
      explain: "Die Einführung eines Ticketsystems ist einmalig, hat ein klares Ziel, ist zeitlich begrenzt und betrifft viele Beteiligte. Die anderen Tätigkeiten wiederholen sich regelmäßig oder folgen einem festen Standardablauf – das sind Routine- bzw. Linienaufgaben." },
    { id: "q-pg-2", topic: "projekt-grundlagen", type: "multi",
      q: "Welche Merkmale kennzeichnen ein Projekt?",
      options: ["Einmaligkeit der Bedingungen", "zeitliche Begrenzung mit festem Anfang und Ende", "unbegrenzt verfügbare Ressourcen", "regelmäßige Wiederholung nach festem Ablauf", "ein definiertes, überprüfbares Ziel"],
      answer: [0, 1, 4],
      explain: "Projekte sind einmalig, befristet und zielgerichtet. Ressourcen sind gerade begrenzt (Budget, Personal) – das macht die Planung nötig. Regelmäßige Wiederholung kennzeichnet dagegen Routineaufgaben." },
    { id: "q-pg-3", topic: "projekt-grundlagen", type: "single",
      q: "Der Kunde möchte, dass ein Projekt zwei Wochen früher fertig wird, ohne auf Leistungen zu verzichten. Welche Auswirkung ist nach dem magischen Dreieck am wahrscheinlichsten?",
      options: ["Die Kosten steigen, z. B. durch zusätzliches Personal oder Überstunden.", "Die Kosten sinken, weil das Projekt kürzer dauert.", "Die Qualität steigt automatisch, weil schneller gearbeitet wird.", "Es gibt keine Auswirkungen, da Zeit, Kosten und Leistung unabhängig sind."],
      answer: 0,
      explain: "Zeit, Kosten und Leistung/Qualität hängen voneinander ab. Soll die Zeit sinken und die Leistung gleich bleiben, müssen meist mehr Ressourcen eingesetzt werden – die Kosten steigen. Eine kürzere Dauer spart nicht automatisch Geld, und Zeitdruck erhöht eher das Qualitätsrisiko." },
    { id: "q-pg-4", topic: "projekt-grundlagen", type: "single",
      q: "Welches Projektziel erfüllt die SMART-Kriterien am besten?",
      options: ["Bis zum 13.11.2026 authentifizieren sich alle 45 Firmen-Clients per 802.1X; die Kosten betragen höchstens 4.500 €.", "Das Netzwerk soll möglichst bald deutlich sicherer werden.", "Wir führen 802.1X ein, damit die IT moderner wird.", "Alle Clients sollen irgendwann per Zertifikat angemeldet werden, Kosten spielen keine Rolle."],
      answer: 0,
      explain: "Nur das erste Ziel ist spezifisch (802.1X, Firmen-Clients), messbar (alle 45), terminiert (13.11.2026) und mit Budget versehen. „Bald“, „deutlich“, „moderner“ und „irgendwann“ sind weder messbar noch terminiert." },
    { id: "q-pg-5", topic: "projekt-grundlagen", type: "single",
      q: "In welcher Projektorganisation hat die Projektleitung volle fachliche und disziplinarische Weisungsbefugnis über das Team?",
      options: ["reine (autonome) Projektorganisation", "Stabs- bzw. Einfluss-Projektorganisation", "Matrix-Projektorganisation", "Linienorganisation ohne Projektleitung"],
      answer: 0,
      explain: "In der reinen Projektorganisation arbeitet das Team ausschließlich für das Projekt und untersteht der Projektleitung vollständig. In der Matrix-Organisation ist die Projektleitung nur fachlich weisungsbefugt, in der Stabs-/Einfluss-Organisation hat sie gar keine Weisungsbefugnis." },
    { id: "q-pg-6", topic: "projekt-grundlagen", type: "tf", exam: ["AP1"],
      q: "In der Storming-Phase nach Tuckman treten typischerweise Konflikte über Rollen und Zuständigkeiten auf.",
      answer: true,
      explain: "Richtig. Nach dem höflichen Kennenlernen (Forming) werden in der Storming-Phase Positionen und Zuständigkeiten ausgehandelt – Konflikte sind normal. Die Projektleitung moderiert und vereinbart Regeln, damit das Team in die Norming-Phase kommt." },
    { id: "q-pg-7", topic: "projekt-grundlagen", type: "single", exam: ["AP2"],
      q: "In welcher Projektphase nach DIN 69901 entstehen Projektstrukturplan, Terminplan und Kostenplan?",
      options: ["Planung", "Definition", "Steuerung", "Abschluss"],
      answer: 0,
      explain: "In der Planungsphase wird festgelegt, wie, wann, womit und zu welchen Kosten das Projekt umgesetzt wird (PSP, Termin-, Ressourcen-, Kosten- und Risikoplanung). In der Definitionsphase werden vorher Ziele und Anforderungen geklärt, in der Steuerung wird der Plan mit dem Ist verglichen, im Abschluss werden Abnahme und Lessons Learned erledigt." },
    { id: "q-pg-8", topic: "projekt-grundlagen", type: "single", exam: ["AP2"],
      q: "Was bedeutet das „A“ in einer RACI-Matrix?",
      options: ["Accountable – trägt die Gesamtverantwortung und gibt das Ergebnis frei; pro Aufgabe genau eine Person", "Assigned – führt die Aufgabe praktisch aus", "Approved – die Aufgabe ist bereits abgeschlossen", "Assisted – unterstützt nur bei Bedarf"],
      answer: 0,
      explain: "RACI steht für Responsible (führt aus), Accountable (verantwortet und genehmigt), Consulted (wird vorher gefragt) und Informed (wird informiert). Wer die Arbeit ausführt, ist R – nicht A. Pro Aufgabe gibt es genau ein A, damit die Verantwortung eindeutig ist." },
    { id: "q-vm-1", topic: "vorgehensmodelle", type: "single",
      q: "Wer legt in Scrum die Reihenfolge der Einträge im Product Backlog fest?",
      options: ["Product Owner", "Scrum Master", "die Developers per Mehrheitsbeschluss", "die Geschäftsführung des Kunden"],
      answer: 0,
      explain: "Der Product Owner verantwortet den Wert des Produkts und ordnet bzw. priorisiert das Product Backlog. Der Scrum Master ist Coach und beseitigt Hindernisse, die Developers planen, wie sie die ausgewählten Einträge im Sprint umsetzen." },
    { id: "q-vm-2", topic: "vorgehensmodelle", type: "single",
      q: "Wie lange dauert das Daily Scrum höchstens?",
      options: ["15 Minuten", "30 Minuten", "1 Stunde", "4 Stunden"],
      answer: 0,
      explain: "Das Daily Scrum ist auf 15 Minuten begrenzt (Timebox) und dient den Developers zur Abstimmung auf das Sprintziel. 4 Stunden ist die Obergrenze für das Sprint Review bei einem Monats-Sprint." },
    { id: "q-vm-3", topic: "vorgehensmodelle", type: "multi",
      q: "Welche Begriffe sind Artefakte in Scrum?",
      options: ["Product Backlog", "Sprint Backlog", "Inkrement", "Lastenheft", "Gantt-Diagramm"],
      answer: [0, 1, 2],
      explain: "Scrum kennt drei Artefakte: Product Backlog, Sprint Backlog und Inkrement. Lastenheft und Gantt-Diagramm sind Werkzeuge des klassischen Projektmanagements." },
    { id: "q-vm-4", topic: "vorgehensmodelle", type: "single", exam: ["AP2"],
      q: "Welche Teststufe steht im V-Modell der Anforderungsdefinition (Lastenheft) gegenüber?",
      options: ["Abnahmetest", "Komponententest", "Integrationstest", "Regressionstest"],
      answer: 0,
      explain: "Im V-Modell prüft jede Teststufe die Spezifikation auf gleicher Höhe: Die Anforderungsdefinition des Kunden wird durch den Abnahmetest geprüft, der technische Entwurf durch den Integrationstest, die Komponentenspezifikation durch den Komponententest." },
    { id: "q-vm-5", topic: "vorgehensmodelle", type: "single", exam: ["AP2"],
      q: "Wozu dient ein WIP-Limit auf einem Kanban-Board?",
      options: ["Es begrenzt, wie viele Aufgaben gleichzeitig in einem Arbeitsschritt bearbeitet werden dürfen.", "Es legt die maximale Dauer eines Sprints fest.", "Es bestimmt, wie viele Personen im Team arbeiten dürfen.", "Es begrenzt das Budget pro Aufgabe."],
      answer: 0,
      explain: "WIP heißt Work in Progress. Das Limit verhindert, dass zu viele Aufgaben gleichzeitig angefangen werden, macht Engpässe sichtbar und verkürzt die Durchlaufzeit. Sprints gibt es in Kanban nicht." },
    { id: "q-vm-6", topic: "vorgehensmodelle", type: "tf",
      q: "Im Wasserfallmodell lassen sich Anforderungen auch spät im Projekt ohne nennenswerten Mehraufwand ändern.",
      answer: false,
      explain: "Falsch. Im Wasserfallmodell bauen die Phasen aufeinander auf; späte Änderungen erfordern das Zurückgehen in frühere Phasen und sind entsprechend teuer. Genau deshalb eignet es sich vor allem für stabile, von Anfang an bekannte Anforderungen." },
    { id: "q-an-1", topic: "anforderungsanalyse", type: "single",
      q: "Wer erstellt üblicherweise das Pflichtenheft?",
      options: ["der Auftragnehmer", "der Auftraggeber", "der Prüfungsausschuss der IHK", "der Datenschutzbeauftragte"],
      answer: 0,
      explain: "Der Auftraggeber beschreibt im Lastenheft, WAS er will. Der Auftragnehmer beschreibt im Pflichtenheft, WIE und WOMIT er die Anforderungen umsetzt. Nach Freigabe durch den Kunden wird das Pflichtenheft Vertragsgrundlage." },
    { id: "q-an-2", topic: "anforderungsanalyse", type: "single",
      q: "Welche Anforderung ist nicht-funktional?",
      options: ["Die Wiederherstellung eines 50-GiB-Ordners dauert höchstens 30 Minuten.", "Mitarbeitende können gelöschte Dateien selbst wiederherstellen.", "Das System versendet bei einem Fehler eine E-Mail an den Support.", "Administratoren können Gäste-Zugänge anlegen."],
      answer: 0,
      explain: "Nicht-funktionale Anforderungen beschreiben, WIE GUT ein System etwas tut (Leistung, Verfügbarkeit, Sicherheit). Die Wiederherstellungszeit ist eine Leistungsanforderung. Die übrigen Aussagen beschreiben Funktionen, also WAS das System tut." },
    { id: "q-an-3", topic: "anforderungsanalyse", type: "multi",
      q: "Welche Methoden eignen sich, um Anforderungen beim Kunden zu erheben?",
      options: ["Interview mit Key Usern", "Beobachtung am Arbeitsplatz", "Workshop mit den Beteiligten", "Netzplantechnik", "Amortisationsrechnung"],
      answer: [0, 1, 2],
      explain: "Interview, Beobachtung und Workshop (ebenso Fragebogen und Dokumentenanalyse) sind Erhebungsmethoden. Netzplantechnik dient der Terminplanung, die Amortisationsrechnung der Wirtschaftlichkeitsbewertung – beide setzen bekannte Anforderungen voraus." },
    { id: "q-an-4", topic: "anforderungsanalyse", type: "single",
      q: "Ein Stakeholder hat hohen Einfluss auf das Projekt und großes Interesse am Ergebnis. Wie gehst du mit ihm um?",
      options: ["eng einbinden, z. B. in Workshops und Entscheidungen", "nur beobachten", "gelegentlich per Rundmail informieren", "erst bei der Abnahme beteiligen"],
      answer: 0,
      explain: "Stakeholder mit hohem Einfluss und hohem Interesse sind „Key Player“ – sie können das Projekt fördern oder stoppen und müssen deshalb aktiv eingebunden werden. Beobachten passt zu geringem Einfluss und Interesse, reines Informieren zu geringem Einfluss und hohem Interesse." },
    { id: "q-an-5", topic: "anforderungsanalyse", type: "input",
      q: "50 Nutzer benötigen je 2 Mbit/s. 40 % sind gleichzeitig aktiv, zusätzlich werden 25 % Reserve eingeplant. Wie viele Mbit/s muss die Leitung mindestens bereitstellen?",
      answer: ["50", "50 Mbit/s", "50Mbit/s", "50 Mbit", "50 Mbps"],
      explain: "50 × 2 Mbit/s = 100 Mbit/s → × 0,4 (Gleichzeitigkeit) = 40 Mbit/s → × 1,25 (Reserve) = 50 Mbit/s." },
    { id: "q-ps-1", topic: "psp-zeitplanung", type: "single",
      q: "Wie berechnet man den Gesamtpuffer (GP) eines Vorgangs?",
      options: ["GP = SAZ − FAZ", "GP = FAZ − SAZ", "GP = FEZ − FAZ", "GP = FAZ des Nachfolgers − eigener FEZ"],
      answer: 0,
      explain: "Der Gesamtpuffer ist die Zeit, um die ein Vorgang verschoben werden kann, ohne das Projektende zu gefährden: GP = SAZ − FAZ (= SEZ − FEZ). FEZ − FAZ ist die Dauer, „FAZ des Nachfolgers − eigener FEZ“ ist der freie Puffer." },
    { id: "q-ps-2", topic: "psp-zeitplanung", type: "single",
      q: "Was ist ein Meilenstein?",
      options: ["ein prüfbares Ereignis ohne Dauer, z. B. „Pflichtenheft freigegeben“", "das längste Arbeitspaket im Projekt", "ein Vorgang mit großem Puffer", "die Summe aller Vorgänge auf dem kritischen Pfad"],
      answer: 0,
      explain: "Meilensteine markieren wichtige Zwischenergebnisse bzw. Entscheidungspunkte. Sie haben keine Dauer und werden im Gantt-Diagramm meist als Raute dargestellt." },
    { id: "q-ps-3", topic: "psp-zeitplanung", type: "input",
      q: "Vorgänge (Dauer in Tagen): A = 3 (kein Vorgänger), B = 4 (nach A), C = 2 (nach A), D = 1 (nach B und C). Wie viele Tage dauert das Projekt mindestens?",
      answer: ["8", "8 Tage", "8 AT", "8 Arbeitstage", "8 Tagen"],
      explain: "Vorwärtsrechnung: A 0–3, B 3–7, C 3–5, D beginnt nach dem größten FEZ der Vorgänger = 7 und endet bei 8. Kritischer Pfad A → B → D." },
    { id: "q-ps-4", topic: "psp-zeitplanung", type: "input",
      q: "Vorgang C hat einen FEZ von 5. Sein einziger Nachfolger D hat einen FAZ von 7. Wie groß ist der freie Puffer von C (in Tagen)?",
      answer: ["2", "2 Tage", "2 AT", "2 Arbeitstage"],
      explain: "FP = kleinster FAZ der Nachfolger − eigener FEZ = 7 − 5 = 2. C kann sich um 2 Tage verschieben, ohne dass D später beginnen muss." },
    { id: "q-ps-5", topic: "psp-zeitplanung", type: "tf",
      q: "Verzögert sich ein Vorgang auf dem kritischen Pfad um einen Tag, verschiebt sich das Projektende um einen Tag.",
      answer: true,
      explain: "Richtig. Vorgänge auf dem kritischen Pfad haben keinen Gesamtpuffer (GP = 0). Jede Verzögerung wirkt direkt auf das Projektende – sofern sie nicht an anderer Stelle durch Beschleunigung ausgeglichen wird." },
    { id: "q-ps-6", topic: "psp-zeitplanung", type: "single",
      q: "Ein Arbeitspaket hat 36 Personenstunden Aufwand. Drei Techniker stehen jeweils zur Hälfte eines 8-Stunden-Tages zur Verfügung. Wie lange dauert das Paket?",
      options: ["3 Arbeitstage", "1,5 Arbeitstage", "4,5 Arbeitstage", "9 Arbeitstage"],
      answer: 0,
      explain: "Dauer = Aufwand ÷ (Personen × Verfügbarkeit × Stunden/Tag) = 36 ÷ (3 × 0,5 × 8) = 36 ÷ 12 = 3 Arbeitstage. 1,5 Tage ergeben sich, wenn man die Verfügbarkeit vergisst (36 ÷ 24), 4,5 Tage, wenn man nur mit einer voll verfügbaren Person rechnet (36 ÷ 8), und 9 Tage, wenn man die drei Personen vergisst (36 ÷ 4)." },
    { id: "q-ps-7", topic: "psp-zeitplanung", type: "multi",
      q: "Das Projektende droht sich zu verzögern. Welche Maßnahmen können den Endtermin retten?",
      options: ["einen kritischen Vorgang mit zusätzlichem Personal verkürzen", "Vorgänge, die bisher nacheinander liefen, parallel ausführen", "den Leistungsumfang in Absprache mit dem Kunden reduzieren", "einen Vorgang mit großem Gesamtpuffer beschleunigen", "den Projektstrukturplan feiner gliedern"],
      answer: [0, 1, 2],
      explain: "Das Projektende hängt am kritischen Pfad. Verkürzen kritischer Vorgänge, Parallelisieren und Reduzieren des Umfangs wirken (mit Folgen für Kosten bzw. Leistung). Einen Vorgang mit Puffer zu beschleunigen ändert am Endtermin nichts; ein feinerer PSP verbessert nur die Planung." },
    { id: "q-ko-1", topic: "ressourcen-kosten", type: "single",
      q: "Wie wird der Stundensatz eines Mitarbeiters ermittelt?",
      options: ["jährliche Gesamtkosten der Stelle ÷ verrechenbare Stunden pro Jahr", "Monatsbruttogehalt ÷ 160 Stunden", "Jahresbruttogehalt ÷ 365 Tage", "Gesamtkosten des Projekts ÷ Anzahl der Mitarbeitenden"],
      answer: 0,
      explain: "Ein realistischer Stundensatz enthält alle Kosten der Stelle (Gehalt, Arbeitgeberanteile, anteilige Gemeinkosten) und verteilt sie auf die tatsächlich verrechenbaren Stunden. Nur das Bruttogehalt durch Stunden zu teilen, unterschätzt die Kosten deutlich." },
    { id: "q-ko-2", topic: "ressourcen-kosten", type: "input",
      q: "Ein Techniker arbeitet 24 h zu 55 €/h, ein Auszubildender 16 h zu 20 €/h. Wie hoch sind die Personalkosten in Euro?",
      answer: ["1640", "1.640", "1640 €", "1.640 €", "1640,00", "1.640,00", "1640,00 €", "1.640,00 €", "1640 Euro", "1.640 Euro"],
      explain: "24 h × 55 €/h = 1.320 € und 16 h × 20 €/h = 320 € → zusammen 1.640 €." },
    { id: "q-ko-3", topic: "ressourcen-kosten", type: "single",
      q: "Die Selbstkosten eines Projekts betragen 5.000 €. Mit 10 % Gewinnzuschlag und 19 % USt. ergibt sich welcher Bruttoangebotspreis?",
      options: ["6.545,00 €", "6.450,00 €", "5.950,00 €", "5.500,00 €"],
      answer: 0,
      explain: "5.000 € × 1,10 = 5.500 € netto → × 1,19 = 6.545 € brutto. 5.500 € ist nur der Nettopreis ohne USt., bei 5.950 € fehlt der Gewinnzuschlag, und 6.450 € entsteht, wenn man 10 % + 19 % = 29 % in einem Schritt auf die Selbstkosten aufschlägt – falsch, weil die USt. auf den Nettopreis inklusive Gewinn berechnet wird." },
    { id: "q-ko-4", topic: "ressourcen-kosten", type: "single",
      q: "Geplant waren 8.000 € Projektkosten, tatsächlich angefallen sind 8.600 €. Wie groß ist die relative Abweichung?",
      options: ["+7,5 %", "+6,98 %", "+600 %", "+0,075 %"],
      answer: 0,
      explain: "Abweichung in % = (Ist − Soll) ÷ Soll × 100 = 600 ÷ 8.000 × 100 = 7,5 %. Wer durch den Ist-Wert teilt, erhält fälschlich 6,98 %. 0,075 ist der Faktor ohne Multiplikation mit 100." },
    { id: "q-ko-5", topic: "ressourcen-kosten", type: "tf",
      q: "Für ein vorsteuerabzugsberechtigtes Unternehmen ist die gezahlte Umsatzsteuer ein Teil der Projektkosten.",
      answer: false,
      explain: "Falsch. Die Vorsteuer bekommt das Unternehmen vom Finanzamt zurück – sie ist ein durchlaufender Posten. Kosten und Wirtschaftlichkeit werden daher netto gerechnet; brutto braucht man nur für Angebots- bzw. Rechnungsbeträge." },
    { id: "q-ko-6", topic: "ressourcen-kosten", type: "multi",
      q: "Welche Positionen zählen zu den Personalkosten eines Projekts?",
      options: ["Arbeitsstunden des Technikers × Stundensatz", "Zeit der Anwender in der Schulung × Stundensatz", "Arbeitsstunden der Projektleitung × Stundensatz", "Kaufpreis eines PoE-Switches", "Lizenzgebühr der Backup-Software"],
      answer: [0, 1, 2],
      explain: "Personalkosten entstehen durch Arbeitszeit – auch die Schulungszeit der Anwender kostet ihr Unternehmen Geld. Switch und Lizenz sind Sachkosten." },
    { id: "q-wi-1", topic: "wirtschaftlichkeit-entscheidung", type: "input",
      q: "Variante A kostet 6.000 € einmalig plus 100 € pro Monat, Variante B 400 € pro Monat ohne Einmalkosten. Nach wie vielen Monaten sind beide Varianten gleich teuer?",
      answer: ["20", "20 Monate", "20 Monaten", "nach 20 Monaten"],
      explain: "Break-even = Differenz der Einmalkosten ÷ Differenz der monatlichen Kosten = 6.000 € ÷ (400 € − 100 €) = 20 Monate. Danach ist Variante A günstiger." },
    { id: "q-wi-2", topic: "wirtschaftlichkeit-entscheidung", type: "input",
      q: "Eine Investition von 9.000 € spart jährlich 3.600 € laufende Kosten. Nach wie vielen Jahren hat sie sich amortisiert?",
      answer: ["2,5", "2.5", "2,5 Jahre", "2.5 Jahre", "2,5 Jahren", "2 Jahre 6 Monate", "2 Jahre und 6 Monate"],
      explain: "Statische Amortisationsdauer = Investition ÷ jährlicher Rückfluss = 9.000 € ÷ 3.600 €/Jahr = 2,5 Jahre (2 Jahre und 6 Monate)." },
    { id: "q-wi-3", topic: "wirtschaftlichkeit-entscheidung", type: "single",
      q: "In einer Nutzwertanalyse erhält eine Alternative beim Kriterium „Funktionsumfang“ (Gewicht 60 %) 8 Punkte und bei „Kosten“ (Gewicht 40 %) 5 Punkte. Wie hoch ist ihr Nutzwert?",
      options: ["6,8", "6,5", "13", "6,2"],
      answer: 0,
      explain: "Nutzwert = Summe aus Punkte × Gewicht = 8 × 0,6 + 5 × 0,4 = 4,8 + 2,0 = 6,8. 6,5 ist der ungewichtete Mittelwert, 13 die ungewichtete Summe, 6,2 entsteht beim Vertauschen der Gewichte (8 × 0,4 + 5 × 0,6)." },
    { id: "q-wi-4", topic: "wirtschaftlichkeit-entscheidung", type: "single",
      q: "Was bedeutet ein K.-o.-Kriterium bei der Auswahl von Lösungsalternativen?",
      options: ["Es muss zwingend erfüllt sein; Alternativen, die es nicht erfüllen, scheiden vor der Bewertung aus.", "Es erhält in der Nutzwertanalyse das höchste Gewicht.", "Es wird nur berücksichtigt, wenn zwei Alternativen gleich viele Punkte haben.", "Es beschreibt das Kriterium mit der schlechtesten Bewertung."],
      answer: 0,
      explain: "K.-o.-Kriterien (Muss-Kriterien) wie „Datenhaltung in der EU“ werden vorab geprüft. Wer sie nicht erfüllt, wird gar nicht erst gewichtet bewertet – ein hoher Nutzwert könnte den Mangel sonst verdecken." },
    { id: "q-wi-5", topic: "wirtschaftlichkeit-entscheidung", type: "multi",
      q: "Welche Argumente sprechen bei einer Make-or-Buy-Entscheidung für den Fremdbezug (Buy)?",
      options: ["Das nötige Spezialwissen fehlt im eigenen Haus.", "Das eigene Personal ist ausgelastet.", "Es handelt sich um eine Standardleistung ohne Wettbewerbsvorteil.", "Die Leistung gehört zur strategischen Kernkompetenz.", "Man möchte volle Kontrolle über alle Daten und Abläufe behalten."],
      answer: [0, 1, 2],
      explain: "Fehlendes Know-how, fehlende Kapazität und Standardleistungen sprechen für Buy. Kernkompetenzen und der Wunsch nach voller Kontrolle sprechen dagegen für Make (Eigenleistung)." },
    { id: "q-wi-6", topic: "wirtschaftlichkeit-entscheidung", type: "tf",
      q: "Eine Nutzwertanalyse ist völlig objektiv, weil sie mit Zahlen arbeitet.",
      answer: false,
      explain: "Falsch. Auswahl der Kriterien, Gewichte und Punktvergabe beruhen auf Einschätzungen. Deshalb begründet man Punkte, stimmt die Gewichtung vorab mit dem Kunden ab und prüft bei knappen Ergebnissen die Sensitivität." },
    { id: "q-ri-1", topic: "risikomanagement", type: "single",
      q: "Ein Risiko tritt mit 20 % Wahrscheinlichkeit ein und verursacht dann 25.000 € Schaden. Wie hoch ist der Risikowert?",
      options: ["5.000 €", "25.000 €", "20.000 €", "500 €"],
      answer: 0,
      explain: "Risikowert (Erwartungswert) = Eintrittswahrscheinlichkeit × Schadenshöhe = 0,2 × 25.000 € = 5.000 €. 25.000 € ist der Schaden im Eintrittsfall, nicht der erwartete Wert." },
    { id: "q-ri-2", topic: "risikomanagement", type: "single",
      q: "Das Projektteam schließt eine Versicherung gegen Transportschäden an der neuen Serverhardware ab. Welche Strategie der Risikobehandlung ist das?",
      options: ["Risiko übertragen", "Risiko vermeiden", "Risiko vermindern", "Risiko akzeptieren"],
      answer: 0,
      explain: "Die finanziellen Folgen gehen auf die Versicherung über – das Risiko wird übertragen. Vermeiden hieße, den Transport ganz zu vermeiden; vermindern, z. B. besser zu verpacken; akzeptieren, den Schaden selbst zu tragen." },
    { id: "q-ri-3", topic: "risikomanagement", type: "single",
      q: "Welches Risiko sollte nach dem Risikowert zuerst behandelt werden?",
      options: ["R2: 5 % Wahrscheinlichkeit, 50.000 € Schaden", "R1: 50 % Wahrscheinlichkeit, 2.000 € Schaden", "R3: 30 % Wahrscheinlichkeit, 3.000 € Schaden", "R4: 10 % Wahrscheinlichkeit, 8.000 € Schaden"],
      answer: 0,
      explain: "Risikowerte: R2 = 2.500 €, R1 = 1.000 €, R3 = 900 €, R4 = 800 €. R2 ist zwar unwahrscheinlich, hat aber den höchsten Erwartungswert. Nur auf die Wahrscheinlichkeit zu schauen, führt zur falschen Priorität." },
    { id: "q-ri-4", topic: "risikomanagement", type: "tf", exam: ["AP2"],
      q: "Im IHK-Abschlussprojekt der Fachrichtung Systemintegration müssen Schwachstellen analysiert und Schutzmaßnahmen vorgeschlagen bzw. umgesetzt werden.",
      answer: true,
      explain: "Richtig. § 20 Abs. 2 Nr. 5 FIAusbV nennt ausdrücklich die Analyse von Schwachstellen sowie das Vorschlagen und Umsetzen von Schutzmaßnahmen. Nach den IHK-Leitfäden muss das Projekt alle sechs Anforderungen abdecken." },
    { id: "q-ri-5", topic: "risikomanagement", type: "multi",
      q: "Welche Maßnahmen vermindern das Risiko „Datenverlust bei der Servermigration“?",
      options: ["Vollbackup mit Probe-Restore vor der Migration", "die Migration vorab mit Testdaten üben", "nach dem Kopieren Dateianzahl und Prüfsummen vergleichen, bevor das Altsystem abgeschaltet wird", "die Altdaten direkt nach dem Kopieren löschen, um Speicher zu sparen", "das Risiko wegen geringer Wahrscheinlichkeit nicht betrachten"],
      answer: [0, 1, 2],
      explain: "Backup mit Restore-Test, Probelauf und Prüfung vor dem Abschalten senken Wahrscheinlichkeit bzw. Auswirkung. Sofortiges Löschen der Quelle nimmt die Rückfallmöglichkeit, und das Ignorieren ist keine bewusste Risikoakzeptanz." },
    { id: "q-ri-6", topic: "risikomanagement", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Schutzmaßnahmen sind <strong>organisatorisch</strong>?",
      options: ["einen Patchprozess mit festen Zuständigkeiten und Terminen festlegen", "eine Zutrittsregelung für den Serverraum verabschieden", "regelmäßige, protokollierte Restore-Tests anordnen", "Mehr-Faktor-Authentifizierung am NAS aktivieren", "die Sicherungskopie mit AES-256 verschlüsseln"],
      answer: [0, 1, 2],
      explain: "Organisatorische Maßnahmen regeln Abläufe, Zuständigkeiten und Verhalten (Prozesse, Richtlinien, Anweisungen). MFA und Verschlüsselung werden dagegen technisch im System umgesetzt. Im IHK-Projekt solltest du beide Arten betrachten." },
    { id: "q-qs-1", topic: "qualitaet-tests", type: "single",
      q: "In welcher Reihenfolge laufen die Schritte des PDCA-Zyklus ab?",
      options: ["Plan – Do – Check – Act", "Do – Plan – Act – Check", "Plan – Check – Do – Act", "Check – Plan – Do – Act"],
      answer: 0,
      explain: "Planen (Ziel und Maßnahme), Umsetzen (oft zunächst im Kleinen), Überprüfen (Messung, Soll-Ist-Vergleich), Handeln (Standard festschreiben oder nachsteuern). Danach beginnt der Kreislauf erneut – das ist die Grundlage des KVP." },
    { id: "q-qs-2", topic: "qualitaet-tests", type: "single",
      q: "Was ist ein Regressionstest?",
      options: ["Wiederholung bereits bestandener Tests nach einer Änderung, um unerwünschte Nebenwirkungen zu finden", "ein Test, der das System gezielt überlastet", "ein Test, bei dem Angreifer simuliert werden", "der abschließende Test durch den Kunden"],
      answer: 0,
      explain: "Nach Updates oder Fehlerbehebungen prüft der Regressionstest, ob bisher funktionierende Teile noch funktionieren. Überlast = Last-/Stresstest, simulierte Angriffe = Penetrationstest, Kundentest = Abnahmetest." },
    { id: "q-qs-3", topic: "qualitaet-tests", type: "single",
      q: "Welche Aussage beschreibt den Abnahmetest richtig?",
      options: ["Der Kunde prüft das System anhand der vereinbarten Abnahmekriterien.", "Der Entwickler testet eine einzelne Komponente isoliert.", "Der Auftragnehmer prüft das Zusammenspiel zweier Schnittstellen.", "Ein externer Dienstleister simuliert einen Hackerangriff."],
      answer: 0,
      explain: "Der Abnahmetest wird durch bzw. mit dem Kunden gegen die vertraglich vereinbarten Kriterien (Lastenheft) durchgeführt und ist Grundlage der rechtlichen Abnahme. Die anderen Optionen beschreiben Komponenten-, Integrations- und Penetrationstest." },
    { id: "q-qs-4", topic: "qualitaet-tests", type: "multi",
      q: "Welche Angaben gehören zu einem vollständigen Testfall?",
      options: ["erwartetes Ergebnis", "Vorbedingungen", "Testschritte bzw. Eingaben", "Stundensatz des Testers", "Amortisationsdauer der Lösung"],
      answer: [0, 1, 2],
      explain: "Ein Testfall braucht Vorbedingung, Schritte/Eingaben und das erwartete Ergebnis – nur so lässt sich eindeutig entscheiden, ob er bestanden ist. Stundensatz und Amortisation gehören zur Kostenbetrachtung." },
    { id: "q-qs-5", topic: "qualitaet-tests", type: "tf",
      q: "Konstruktive Qualitätssicherung bedeutet, Fehler durch Tests im fertigen System zu finden.",
      answer: false,
      explain: "Falsch. Konstruktive QS soll Fehler von vornherein vermeiden (Standards, Vorlagen, Checklisten, Schulung). Das Finden von Fehlern durch Tests, Reviews und Audits ist analytische QS." },
    { id: "q-qs-6", topic: "qualitaet-tests", type: "input",
      q: "Von 45 Testfällen wurden 36 bestanden. Wie hoch ist die Bestehensquote in Prozent?",
      answer: ["80", "80 %", "80%", "80 Prozent"],
      explain: "36 ÷ 45 × 100 = 80 %. Über die Freigabe entscheidet aber nicht die Quote allein: Offene kritische Fehler verhindern die Freigabe auch bei hoher Quote." },
    { id: "q-qs-7", topic: "qualitaet-tests", type: "single", exam: ["AP2"],
      q: "Ein Skript soll nur Portnummern von 1 bis 65535 annehmen. Welche Testeingaben prüfen die Grenzen am gezieltesten?",
      options: ["0, 1, 65535 und 65536", "nur 80 und 443", "alle Werte von 1 bis 65535 nacheinander", "−100 und 100000"],
      answer: 0,
      explain: "Beim Grenzwert- bzw. Extremwertetest prüft man genau an und direkt hinter den Grenzen: 1 und 65535 müssen akzeptiert, 0 und 65536 abgelehnt werden – dort entstehen typische Fehler wie „kleiner“ statt „kleiner gleich“. Typische Ports testen die Grenzen nicht, ein vollständiger Durchlauf ist unnötig aufwendig, und weit entfernte Werte finden Off-by-one-Fehler nicht." },
    { id: "q-cm-1", topic: "change-migration", type: "single", exam: ["AP2"],
      q: "Wie nennt man einen vorab genehmigten Change mit geringem Risiko und beschriebenem Ablauf, z. B. das Anlegen eines Benutzerkontos?",
      options: ["Standard-Change", "Normal-Change", "Notfall-Change", "Major-Incident"],
      answer: 0,
      explain: "Standard-Changes sind risikoarm, wiederkehrend und bereits vorab freigegeben. Normal-Changes werden einzeln bewertet und genehmigt, Notfall-Changes beschleunigt bei akuter Gefahr. Ein Major Incident ist eine schwere Störung, kein Change." },
    { id: "q-cm-2", topic: "change-migration", type: "single", exam: ["AP2"],
      q: "Bei welcher Migrationsmethode laufen altes und neues System eine Zeit lang gleichzeitig?",
      options: ["Parallelbetrieb", "Stichtagsumstellung (Big Bang)", "stufenweise Einführung ohne Altsystem", "Rollback"],
      answer: 0,
      explain: "Im Parallelbetrieb können Ergebnisse verglichen und bei Problemen ohne Umstellung weitergearbeitet werden – dafür entstehen doppelter Aufwand und Kosten. Beim Big Bang wird zu einem Stichtag komplett umgestellt; ein Rollback ist die Rücknahme eines Changes." },
    { id: "q-cm-3", topic: "change-migration", type: "single", exam: ["AP1", "AP2"],
      q: "Eine 6 GiB große Videodatei soll auf einen USB-Stick kopiert werden, doch der Kopiervorgang bricht ab. Welches Dateisystem hat der Stick vermutlich?",
      options: ["FAT32", "NTFS", "exFAT", "ext4"],
      answer: 0,
      explain: "FAT32 erlaubt höchstens 4 GiB (genau 4 GiB − 1 Byte) pro Datei. NTFS, exFAT und ext4 unterstützen deutlich größere Dateien. Lösung: Stick mit exFAT oder NTFS formatieren." },
    { id: "q-cm-4", topic: "change-migration", type: "tf", exam: ["AP2"],
      q: "Ein Rollback-Plan muss so geplant sein, dass die Rücknahme der Änderung noch innerhalb des vereinbarten Wartungsfensters möglich ist.",
      answer: true,
      explain: "Richtig. Umsetzung, Tests und ein eventueller Rollback müssen zusammen in das Wartungsfenster passen. Deshalb legt man einen spätesten Entscheidungszeitpunkt (Point of no Return) fest." },
    { id: "q-cm-5", topic: "change-migration", type: "multi", exam: ["AP2"],
      q: "Welche Inhalte gehören in einen Rollback-Plan?",
      options: ["Go/No-Go-Kriterien, wann zurückgerollt wird", "spätester Entscheidungszeitpunkt", "konkrete Schritte zur Wiederherstellung des alten Zustands", "Verantwortliche und Kontaktdaten", "Gewinnzuschlag des Auftragnehmers", "Tuckman-Phase des Projektteams"],
      answer: [0, 1, 2, 3],
      explain: "Ein Rollback-Plan legt fest, WANN (Kriterien, Zeitpunkt), WIE (Schritte, Voraussetzungen wie Backup/Snapshot) und WER zurückrollt. Kalkulation und Teamphasen haben damit nichts zu tun." },
    { id: "q-cm-6", topic: "change-migration", type: "single", exam: ["AP2"],
      q: "Eine kritische Sicherheitslücke in der Firewall wird aktiv ausgenutzt und muss sofort geschlossen werden. Um welchen Change-Typ handelt es sich?",
      options: ["Notfall-Change", "Standard-Change", "Normal-Change mit Termin im nächsten regulären CAB-Meeting", "kein Change, sondern ein Service Request"],
      answer: 0,
      explain: "Bei akuter Gefahr wird ein Notfall-Change mit beschleunigter Genehmigung (z. B. durch ein kleines Notfall-Gremium) umgesetzt; die Dokumentation wird danach vervollständigt. Auf das nächste reguläre CAB zu warten, wäre zu riskant." },
    { id: "q-vr-1", topic: "vertrag-recht", type: "single",
      q: "Ein Systemhaus verpflichtet sich, beim Kunden ein funktionsfähiges WLAN zum Festpreis einzurichten. Welche Vertragsart liegt vor?",
      options: ["Werkvertrag", "Dienstvertrag", "Kaufvertrag", "Mietvertrag"],
      answer: 0,
      explain: "Geschuldet ist ein Erfolg (funktionsfähiges WLAN) – typisch für den Werkvertrag (§ 631 BGB). Beim Dienstvertrag wäre nur die Tätigkeit geschuldet, beim Kaufvertrag die Übereignung einer Sache." },
    { id: "q-vr-2", topic: "vertrag-recht", type: "single",
      q: "Was schuldet der Auftragnehmer bei einem Dienstvertrag?",
      options: ["das Tätigwerden, z. B. 10 Stunden Administration, aber keinen bestimmten Erfolg", "einen vereinbarten Erfolg, der abgenommen werden muss", "die Übergabe und Übereignung einer Sache", "die Überlassung einer Sache auf Zeit"],
      answer: 0,
      explain: "Beim Dienstvertrag (§ 611 BGB) wird die Tätigkeit geschuldet, z. B. Hotline, Schulung oder Administration nach Stunden. Erfolg und Abnahme gehören zum Werkvertrag, Übereignung zum Kaufvertrag, Überlassung auf Zeit zur Miete." },
    { id: "q-vr-3", topic: "vertrag-recht", type: "multi",
      q: "Welche Rechtsfolgen hat die Abnahme eines Werkes?",
      options: ["Die Vergütung wird fällig.", "Die Gefahr geht auf den Kunden über.", "Die Verjährungsfrist für Mängelansprüche beginnt.", "Der Vertrag wird rückwirkend aufgehoben.", "Der Auftragnehmer muss die doppelte Gewährleistung übernehmen."],
      answer: [0, 1, 2],
      explain: "Mit der Abnahme wird die Vergütung fällig (§ 641 BGB), die Gefahr geht über (§ 644 BGB) und die Verjährung der Mängelansprüche beginnt (§ 634a BGB); außerdem trägt nun der Kunde die Beweislast für Mängel. Aufhebung oder „doppelte Gewährleistung“ gibt es nicht." },
    { id: "q-vr-4", topic: "vertrag-recht", type: "single", exam: ["AP2"],
      q: "Wann gilt die Pflicht zur unverzüglichen Untersuchung und Mängelrüge nach § 377 HGB?",
      options: ["wenn der Kauf für Käufer und Verkäufer jeweils ein Handelsgeschäft ist", "bei jedem Kauf, auch zwischen Privatpersonen", "nur wenn der Käufer ein Verbraucher ist", "nur bei Dienstverträgen"],
      answer: 0,
      explain: "§ 377 HGB setzt ein beiderseitiges Handelsgeschäft voraus, also zwei Kaufleute (z. B. zwei GmbHs). Wer dann nicht unverzüglich untersucht und rügt, verliert seine Rechte wegen erkennbarer Mängel. Für Verbraucher gilt die Regel nicht." },
    { id: "q-vr-5", topic: "vertrag-recht", type: "tf", exam: ["AP2"],
      q: "Werbe-E-Mails an Geschäftskunden sind ohne deren vorherige Einwilligung erlaubt, weil das UWG nur Verbraucher schützt.",
      answer: false,
      explain: "Falsch. Nach § 7 UWG ist Werbung per E-Mail ohne vorherige ausdrückliche Einwilligung grundsätzlich eine unzumutbare Belästigung – gegenüber Verbrauchern und Unternehmen. Eng begrenzte Ausnahmen gelten nur für Bestandskunden (§ 7 Abs. 3 UWG)." },
    { id: "q-vr-6", topic: "vertrag-recht", type: "single", exam: ["AP2"],
      q: "Die AGB eines Lieferanten sehen 6 Monate Frist für Mängelansprüche vor, im individuell ausgehandelten Vertrag wurden 24 Monate vereinbart. Was gilt?",
      options: ["24 Monate, weil individuelle Vertragsabreden Vorrang vor AGB haben", "6 Monate, weil AGB immer Vorrang haben", "der Durchschnitt von 15 Monaten", "keine Frist, weil sich die Regelungen widersprechen"],
      answer: 0,
      explain: "Nach § 305b BGB haben individuelle Vertragsabreden Vorrang vor Allgemeinen Geschäftsbedingungen. Es gelten also die ausgehandelten 24 Monate." },
    { id: "q-vr-7", topic: "vertrag-recht", type: "single",
      q: "Nach der Abnahme zeigt sich ein Mangel am Werk. Welches Recht muss der Kunde in der Regel zuerst geltend machen?",
      options: ["Nacherfüllung", "Rücktritt vom Vertrag", "Minderung der Vergütung", "Schadensersatz statt der Leistung"],
      answer: 0,
      explain: "Beim Werkvertrag hat die Nacherfüllung Vorrang: Der Kunde setzt eine angemessene Frist, der Auftragnehmer wählt Nachbesserung oder Neuherstellung. Erst nach erfolglosem Fristablauf kommen Selbstvornahme, Rücktritt, Minderung oder Schadensersatz in Betracht." },
    { id: "q-ab-1", topic: "abnahme-uebergabe", type: "single",
      q: "Welches Dokument ist für Anwenderinnen und Anwender ohne IT-Fachwissen am besten geeignet?",
      options: ["eine bebilderte Kurzanleitung bzw. ein Benutzerhandbuch", "das Systemhandbuch mit IP-Adressplan und Firewallregeln", "das Pflichtenheft", "das Testprotokoll"],
      answer: 0,
      explain: "Anwender brauchen handlungsorientierte Schritt-für-Schritt-Anleitungen mit wenig Fachbegriffen. Das Systemhandbuch richtet sich an Administratoren, Pflichtenheft und Testprotokoll sind Projektdokumente." },
    { id: "q-ab-2", topic: "abnahme-uebergabe", type: "multi",
      q: "Was gehört in ein Abnahmeprotokoll?",
      options: ["festgestellte Mängel mit Frist zur Beseitigung", "Unterschriften von Auftraggeber und Auftragnehmer", "Bezeichnung der abgenommenen Leistung", "Administratorpasswörter im Klartext", "Stundensätze der eingesetzten Techniker"],
      answer: [0, 1, 2],
      explain: "Das Abnahmeprotokoll dokumentiert Leistung, Prüfergebnisse, Mängel mit Fristen, Vorbehalte, Entscheidung und Unterschriften. Passwörter gehören nie im Klartext in ein Protokoll, und Stundensätze sind Teil der Kalkulation, nicht der Abnahme." },
    { id: "q-ab-3", topic: "abnahme-uebergabe", type: "single", exam: ["AP1"],
      q: "Welche Reihenfolge beschreibt das Phasenmodell der Veränderung nach Lewin?",
      options: ["Auftauen – Verändern – Stabilisieren", "Verändern – Auftauen – Stabilisieren", "Planen – Umsetzen – Prüfen – Handeln", "Forming – Storming – Norming"],
      answer: 0,
      explain: "Nach Lewin wird die Bereitschaft zur Veränderung zuerst geschaffen (Auftauen), dann wird verändert, anschließend werden die neuen Abläufe gefestigt (Stabilisieren/Einfrieren). PDCA ist der Verbesserungszyklus, Forming/Storming/Norming sind Teamphasen nach Tuckman." },
    { id: "q-ab-4", topic: "abnahme-uebergabe", type: "tf",
      q: "Wegen eines unwesentlichen Mangels darf der Kunde die Abnahme eines Werkes verweigern.",
      answer: false,
      explain: "Falsch. Nach § 640 Abs. 1 BGB kann die Abnahme wegen unwesentlicher Mängel nicht verweigert werden. Der Kunde sollte den Mangel aber im Abnahmeprotokoll festhalten und sich seine Rechte vorbehalten." },
    { id: "q-ab-5", topic: "abnahme-uebergabe", type: "single",
      q: "Was versteht man unter Blended Learning?",
      options: ["eine Kombination aus Präsenzschulung und digitalen Lernformen wie E-Learning", "eine Schulung ausschließlich per Video", "Lernen nur mit gedruckten Handbüchern", "eine Schulung, die nur Key User erhalten"],
      answer: 0,
      explain: "Blended Learning verbindet Präsenzphasen (Fragen, Üben mit Trainer) mit Online-Phasen (flexibles Lernen, Nachschlagen). Für die Einführung neuer Systeme ist es oft effizienter als reine Präsenz- oder reine Online-Schulung." },
    { id: "q-pa-1", topic: "projektabschluss", type: "input",
      q: "Für eine Phase waren 32 Stunden geplant, gebraucht wurden 36 Stunden. Wie groß ist die Abweichung in Prozent (bezogen auf den Plan)?",
      answer: ["12,5", "12.5", "12,5 %", "12,5%", "+12,5", "+12,5 %", "+12,5%", "12,5 Prozent"],
      explain: "Abweichung = (Ist − Soll) ÷ Soll × 100 = (36 − 32) ÷ 32 × 100 = 12,5 %. Wer durch den Ist-Wert teilt, erhält fälschlich rund 11,1 %." },
    { id: "q-pa-2", topic: "projektabschluss", type: "single",
      q: "Was ist das Hauptziel von Lessons Learned am Projektende?",
      options: ["Erfahrungen aus dem Projekt festhalten, damit künftige Projekte besser laufen", "Schuldige für Terminverzüge ermitteln", "die Rechnung an den Kunden erstellen", "den Projektstrukturplan nachträglich ändern"],
      answer: 0,
      explain: "Lessons Learned sichern Wissen: Was lief gut, was schlecht, was machen wir künftig anders? Die Ergebnisse werden konkret formuliert und in einer Wissensdatenbank abgelegt. Schuldzuweisungen verhindern offene Rückmeldungen und sind ausdrücklich nicht das Ziel." },
    { id: "q-pa-3", topic: "projektabschluss", type: "single",
      q: "Ein Dienst soll eine Verfügbarkeit von 99,5 % pro Jahr (8.760 h) erreichen. Wie lange darf er höchstens ausfallen?",
      options: ["43,8 Stunden", "4,38 Stunden", "438 Stunden", "8,76 Stunden"],
      answer: 0,
      explain: "Zulässige Ausfallzeit = 8.760 h × (1 − 0,995) = 8.760 h × 0,005 = 43,8 h. 8,76 h entsprechen 99,9 %, 4,38 h entsprechen 99,95 %." },
    { id: "q-pa-4", topic: "projektabschluss", type: "multi",
      q: "Nach welchen Kriterien bewertest du laut Rahmenlehrplan ein abgeschlossenes Systemintegrationsprojekt?",
      options: ["Zielerreichung", "Wirtschaftlichkeit", "Skalierbarkeit", "Verlässlichkeit", "Anzahl der Folien in der Präsentation"],
      answer: [0, 1, 2, 3],
      explain: "Der Rahmenlehrplan nennt Zielerreichung, Wirtschaftlichkeit, Skalierbarkeit und Verlässlichkeit; zusätzlich wird die Kritik des Kunden einbezogen. Die Folienanzahl sagt nichts über die Qualität des Projektergebnisses aus." },
    { id: "q-pa-5", topic: "projektabschluss", type: "tf",
      q: "Die relative Abweichung im Soll-Ist-Vergleich wird auf den Ist-Wert bezogen.",
      answer: false,
      explain: "Falsch. Bezugsgröße ist der Soll-Wert (Plan): Abweichung in % = (Ist − Soll) ÷ Soll × 100. Nur so sieht man, wie stark vom Plan abgewichen wurde." },
    { id: "q-ia-1", topic: "ihk-projektantrag", type: "single",
      q: "Wie viele Stunden stehen einem FISI-Prüfling höchstens für die betriebliche Projektarbeit einschließlich Dokumentation zur Verfügung?",
      options: ["40 Stunden", "35 Stunden", "70 Stunden", "80 Stunden"],
      answer: 0,
      explain: "§ 20 FIAusbV begrenzt Projektarbeit und Dokumentation zusammen auf höchstens 40 Stunden. 80 Stunden gelten für die Fachrichtung Anwendungsentwicklung, nicht für Systemintegration." },
    { id: "q-ia-2", topic: "ihk-projektantrag", type: "multi",
      q: "Welche Angaben muss die Projektbeschreibung (Projektantrag) nach § 20 FIAusbV mindestens enthalten?",
      options: ["Ausgangssituation", "Projektziel", "Zeitplanung", "fertiges Abnahmeprotokoll", "Ergebnis der Nutzwertanalyse"],
      answer: [0, 1, 2],
      explain: "Die Verordnung verlangt Ausgangssituation, Projektziel und Zeitplanung. Abnahmeprotokoll und Ergebnis der Nutzwertanalyse entstehen erst während bzw. nach der Durchführung – der Antrag beschreibt die Planung, nicht das Ergebnis." },
    { id: "q-ia-3", topic: "ihk-projektantrag", type: "single",
      q: "Ab wann darf mit der Durchführung des Abschlussprojekts begonnen werden?",
      options: ["erst nach der schriftlichen Genehmigung durch den Prüfungsausschuss", "sofort nach dem Hochladen des Antrags", "sobald der Ausbildungsbetrieb zustimmt", "jederzeit, die Genehmigung ist nur eine Formsache"],
      answer: 0,
      explain: "Der Antrag wird dem Prüfungsausschuss zur Genehmigung vorgelegt; begonnen wird erst danach. Auflagen aus der Genehmigung sind bindend und in der Dokumentation umzusetzen." },
    { id: "q-ia-4", topic: "ihk-projektantrag", type: "single",
      q: "Mit welchem Anteil geht der Prüfungsbereich „Planen und Umsetzen eines Projektes der Systemintegration“ in die Gesamtnote ein?",
      options: ["50 %", "20 %", "10 %", "25 %"],
      answer: 0,
      explain: "Nach § 24 FIAusbV zählt das Projekt 50 % (davon je die Hälfte Dokumentation und Präsentation/Fachgespräch), AP1 20 %, KAIS, AEN und WiSo je 10 %. 25 % ist nur der Anteil der Dokumentation allein." },
    { id: "q-ia-5", topic: "ihk-projektantrag", type: "tf",
      q: "Die Programmierung einer eigenen Web-Anwendung ist ein typisch geeignetes Abschlussprojekt für Fachinformatiker Systemintegration.",
      answer: false,
      explain: "Falsch. Reine Softwareentwicklung gehört zur Fachrichtung Anwendungsentwicklung. Ein FISI-Projekt muss Systemänderungen bzw. -erweiterungen mit Anforderungsanalyse, Alternativen, Umsetzung, Sicherheitsbetrachtung und Übergabe umfassen – Skripte können darin vorkommen." },
    { id: "q-ia-6", topic: "ihk-projektantrag", type: "single",
      q: "Welcher Projekttitel ist für einen FISI-Projektantrag am besten geeignet?",
      options: ["Einführung einer zentralen Patchverwaltung mit Test- und Freigabeprozess für 60 Clients der Nordlicht IT GmbH", "Neuer Server", "Einrichtung von 25 Notebooks nach Checkliste", "Recherche zu aktuellen Virtualisierungslösungen"],
      answer: 0,
      explain: "Der erste Titel zeigt Ergebnis, Technik, Umfang und Auftraggeber und bietet Raum für Analyse, Alternativen, Sicherheit und Übergabe. „Neuer Server“ ist zu unkonkret, die Notebook-Einrichtung ist Routine und eine Recherche ist keine betriebliche Umsetzung." },
    { id: "q-ia-7", topic: "ihk-projektantrag", type: "single", exam: ["AP2"],
      q: "Dein Projektantrag wird genehmigt – mit der Auflage, zusätzlich eine zweite Lösungsalternative zu betrachten. Wie gehst du vor?",
      options: ["Ich setze die Auflage im Projekt um und gehe in der Dokumentation ausdrücklich darauf ein.", "Ich ignoriere die Auflage, weil der Antrag ja genehmigt ist.", "Ich stelle einen komplett neuen Antrag.", "Ich erwähne die Auflage nur mündlich im Fachgespräch."],
      answer: 0,
      explain: "Auflagen und Hinweise aus der Genehmigung sind bindend. Werden sie nicht umgesetzt, gibt es Punktabzug. Ein neuer Antrag ist nur bei einer Ablehnung nötig, und eine rein mündliche Erwähnung ersetzt die Umsetzung in Projekt und Dokumentation nicht." },
    { id: "q-id-1", topic: "ihk-doku-praesentation", type: "single",
      q: "Wie lange soll die Projektpräsentation laut FIAusbV höchstens dauern?",
      options: ["15 Minuten", "10 Minuten", "30 Minuten", "45 Minuten"],
      answer: 0,
      explain: "Die Präsentation soll höchstens 15 Minuten dauern; zusammen mit dem Fachgespräch sind es höchstens 30 Minuten. Der Ausschuss darf nach Ablauf der Zeit abbrechen." },
    { id: "q-id-2", topic: "ihk-doku-praesentation", type: "single",
      q: "Wie lange dauern Präsentation und Fachgespräch zusammen höchstens?",
      options: ["30 Minuten", "15 Minuten", "45 Minuten", "60 Minuten"],
      answer: 0,
      explain: "§ 20 FIAusbV: Präsentation und Fachgespräch dauern zusammen höchstens 30 Minuten; das Fachgespräch nutzt in der Regel die Zeit nach der maximal 15-minütigen Präsentation." },
    { id: "q-id-3", topic: "ihk-doku-praesentation", type: "single",
      q: "Welchen Umfang nennt die IHK Schleswig-Holstein (Flensburg) in ihren Hinweisen für die Projektdokumentation der IT-Berufe?",
      options: ["max. 10 Seiten DIN A4 plus max. 25 Seiten Anhang", "max. 15 Seiten plus beliebig viel Anhang", "genau 20 Seiten inklusive Anhang", "max. 50 Seiten ohne Anhang"],
      answer: 0,
      explain: "Laut den Hinweisen der IHK Schleswig-Holstein: höchstens 10 Seiten Text und höchstens 25 Seiten Anhang (Arial 11, einzeilig). Andere Kammern haben abweichende Vorgaben – maßgeblich sind immer die aktuellen Unterlagen zum PIN-Schreiben bzw. im Bildungsportal." },
    { id: "q-id-4", topic: "ihk-doku-praesentation", type: "tf",
      q: "Ist das Projekt mangelhaft, kann man dafür eine mündliche Ergänzungsprüfung beantragen.",
      answer: false,
      explain: "Falsch. Die mündliche Ergänzungsprüfung ist nur in einem der schriftlichen Bereiche KAIS, AEN oder WiSo möglich – nicht für das Projekt und nicht für AP1. Das Projekt darf zudem nicht „ungenügend“ (unter 30 Punkte) sein." },
    { id: "q-id-5", topic: "ihk-doku-praesentation", type: "single",
      q: "Mit welcher Diagrammart stellst du in der Präsentation am besten die Anteile der Projektphasen an den 40 Projektstunden dar?",
      options: ["Kreisdiagramm", "Liniendiagramm", "Streudiagramm", "Netzplan"],
      answer: 0,
      explain: "Kreisdiagramme zeigen Anteile an einem Ganzen. Liniendiagramme eignen sich für Verläufe über die Zeit, Streudiagramme für Zusammenhänge zweier Größen, Netzpläne für Abhängigkeiten von Vorgängen." },
    { id: "q-id-6", topic: "ihk-doku-praesentation", type: "multi",
      q: "Welche Punkte führen typischerweise zu Abwertungen in der Projektdokumentation?",
      options: ["Die Eigenleistung ist nicht erkennbar.", "Abweichungen vom Antrag werden nicht begründet.", "Statt des Arbeitsprozesses werden Lehrbuchtexte wiedergegeben.", "Ein Soll-Ist-Vergleich mit Begründungen ist enthalten.", "Fremde Inhalte sind mit Quellen belegt."],
      answer: [0, 1, 2],
      explain: "Bewertet wird der eigene Arbeitsprozess mit begründeten Entscheidungen. Fehlende Eigenleistung, unbegründete Abweichungen und Lehrbuchtexte kosten Punkte. Soll-Ist-Vergleich und Quellenangaben sind dagegen ausdrücklich erwünscht." },
    { id: "q-id-7", topic: "ihk-doku-praesentation", type: "multi", exam: ["AP2"],
      q: "Welche Angaben gehören zu einer vollständigen Quellenangabe für eine Internetquelle in der Projektdokumentation?",
      options: ["Autor bzw. Herausgeber", "Titel des Dokuments bzw. der Seite", "URL", "Abrufdatum", "Name des Prüfungsausschussvorsitzenden", "Dateigröße der Webseite"],
      answer: [0, 1, 2, 3],
      explain: "Eine Quelle muss eindeutig auffindbar sein: Wer hat was veröffentlicht, wo (URL) und wann hast du es gelesen (Abrufdatum, weil sich Webseiten ändern)? Ggf. kommen Version oder Ausgabe hinzu. Prüfer und Dateigröße haben mit der Quelle nichts zu tun." },
    { id: "q-id-8", topic: "ihk-doku-praesentation", type: "tf", exam: ["AP2"],
      q: "Mit der persönlichen Erklärung versicherst du, dass du Projekt und Dokumentation selbstständig angefertigt und nur die angegebenen Quellen und Hilfsmittel verwendet hast.",
      answer: true,
      explain: "Richtig. Die unterschriebene Erklärung gehört in den Vorspann der Dokumentation (bzw. wird als IHK-Formular abgegeben). Wer ungekennzeichnete Hilfe – auch durch KI-Werkzeuge – nutzt, riskiert eine Bewertung als Täuschung." },
  ],
  cards: [
    { topic: "projekt-grundlagen", f: "Merkmale eines Projekts", b: "Einmaligkeit, klares Ziel, zeitliche Begrenzung, begrenzte Ressourcen, Komplexität/Neuartigkeit, Risiko, eigene Projektorganisation." },
    { topic: "projekt-grundlagen", f: "Magisches Dreieck", b: "Leistung/Qualität – Zeit – Kosten. Ändert sich eine Größe, wirkt das auf die anderen (z. B. früherer Termin → höhere Kosten)." },
    { topic: "projekt-grundlagen", f: "SMART", b: "Spezifisch, Messbar, Akzeptiert/attraktiv, Realistisch, Terminiert." },
    { topic: "projekt-grundlagen", f: "Vier Zieldimensionen im Projekt", b: "Sachziel, Qualitätsziel, Zeitziel, Kostenziel – ergänzt um Nicht-Ziele zur Abgrenzung." },
    { topic: "projekt-grundlagen", f: "Matrix-Projektorganisation", b: "Projektleitung fachlich weisungsbefugt, disziplinarisch bleibt die Linie zuständig; flexibel, aber konfliktanfällig." },
    { topic: "projekt-grundlagen", f: "Teamphasen nach Tuckman", b: "Forming → Storming → Norming → Performing → Adjourning." },
    { topic: "projekt-grundlagen", f: "Projektphasen nach DIN 69901", b: "Initialisierung → Definition → Planung → Steuerung → Abschluss." },
    { topic: "projekt-grundlagen", f: "RACI-Matrix", b: "Responsible (führt aus), Accountable (verantwortet/genehmigt, genau eine Person), Consulted (wird gefragt), Informed (wird informiert)." },
    { topic: "vorgehensmodelle", f: "Phasen des Wasserfallmodells", b: "Anforderungsanalyse → Entwurf → Umsetzung → Test → Einführung/Betrieb; streng nacheinander." },
    { topic: "vorgehensmodelle", f: "V-Modell – Grundidee", b: "Jeder Spezifikationsstufe steht eine Teststufe gegenüber: Anforderungen ↔ Abnahmetest, Systementwurf ↔ Systemtest, technischer Entwurf ↔ Integrationstest, Komponente ↔ Komponententest." },
    { topic: "vorgehensmodelle", f: "Scrum: 3 Verantwortlichkeiten", b: "Product Owner (Wert, Backlog-Priorität), Scrum Master (Coach, Hindernisse), Developers (Umsetzung im Sprint)." },
    { topic: "vorgehensmodelle", f: "Scrum: 5 Events", b: "Sprint, Sprint Planning, Daily Scrum (15 min), Sprint Review, Sprint Retrospective." },
    { topic: "vorgehensmodelle", f: "Scrum: 3 Artefakte", b: "Product Backlog (Product Goal), Sprint Backlog (Sprint Goal), Inkrement (Definition of Done)." },
    { topic: "vorgehensmodelle", f: "Kanban", b: "Visualisierter, kontinuierlicher Arbeitsfluss mit WIP-Limits und Pull-Prinzip; keine festen Sprints." },
    { topic: "anforderungsanalyse", f: "Lastenheft", b: "Vom Auftraggeber: WAS soll erreicht werden und WOFÜR? Ziele, Anforderungen, Rahmenbedingungen." },
    { topic: "anforderungsanalyse", f: "Pflichtenheft", b: "Vom Auftragnehmer: WIE und WOMIT wird umgesetzt? Nach Freigabe Vertragsgrundlage." },
    { topic: "anforderungsanalyse", f: "Funktional vs. nicht-funktional", b: "Funktional: Was tut das System? Nicht-funktional: Wie gut (Leistung, Verfügbarkeit, Sicherheit, Bedienbarkeit)?" },
    { topic: "anforderungsanalyse", f: "Stakeholder-Matrix (Einfluss/Interesse)", b: "hoch/hoch → eng einbinden · hoch/gering → zufriedenstellen · gering/hoch → informieren · gering/gering → beobachten." },
    { topic: "anforderungsanalyse", f: "MoSCoW", b: "Must, Should, Could, Won't (this time) – Priorisierung von Anforderungen." },
    { topic: "psp-zeitplanung", f: "Arbeitspaket", b: "Kleinste plan- und kontrollierbare Einheit im PSP mit Verantwortlichem, Ergebnis, Aufwand und Dauer." },
    { topic: "psp-zeitplanung", f: "Netzplan: Vorwärtsrechnung", b: "FAZ Start = 0 · FEZ = FAZ + Dauer · FAZ = größter FEZ aller Vorgänger." },
    { topic: "psp-zeitplanung", f: "Netzplan: Rückwärtsrechnung", b: "SEZ Ende = Projektende · SAZ = SEZ − Dauer · SEZ = kleinster SAZ aller Nachfolger." },
    { topic: "psp-zeitplanung", f: "GP und FP", b: "GP = SAZ − FAZ · FP = kleinster FAZ der Nachfolger − eigener FEZ. Kritischer Pfad: GP = 0." },
    { topic: "psp-zeitplanung", f: "Aufwand → Dauer", b: "Dauer = Aufwand ÷ (Personen × Verfügbarkeit × Stunden pro Tag)." },
    { topic: "ressourcen-kosten", f: "Stundensatz", b: "Jährliche Gesamtkosten der Stelle ÷ verrechenbare Stunden pro Jahr." },
    { topic: "ressourcen-kosten", f: "Vom Selbstkostenpreis zum Angebot", b: "Selbstkosten × (1 + Gewinnzuschlag) = Nettopreis; × 1,19 = Bruttopreis." },
    { topic: "ressourcen-kosten", f: "Vor- vs. Nachkalkulation", b: "Vorkalkulation: Plankosten vor Projektbeginn (Budget, Angebot). Nachkalkulation: Ist-Kosten danach, Abweichungsanalyse." },
    { topic: "wirtschaftlichkeit-entscheidung", f: "Nutzwertanalyse – Ablauf", b: "K.-o.-Kriterien prüfen → Kriterien gewichten (100 %) → Punkte vergeben → Punkte × Gewicht → Summe → Entscheidung begründen." },
    { topic: "wirtschaftlichkeit-entscheidung", f: "Break-even (Kostenvergleich)", b: "Differenz der Einmalkosten ÷ Differenz der laufenden Kosten pro Periode." },
    { topic: "wirtschaftlichkeit-entscheidung", f: "Statische Amortisationsdauer", b: "Investition ÷ jährlicher Rückfluss (z. B. eingesparte laufende Kosten)." },
    { topic: "wirtschaftlichkeit-entscheidung", f: "TCO", b: "Total Cost of Ownership: alle Kosten über den Lebenszyklus – Anschaffung, Betrieb, Energie, Wartung, Schulung, Entsorgung." },
    { topic: "risikomanagement", f: "Risikowert", b: "Eintrittswahrscheinlichkeit × Schadenshöhe (Erwartungswert)." },
    { topic: "risikomanagement", f: "Strategien der Risikobehandlung", b: "Vermeiden, vermindern, übertragen (z. B. Versicherung), akzeptieren (bewusst tragen)." },
    { topic: "risikomanagement", f: "§ 20 Abs. 2 Nr. 5 FIAusbV", b: "Schwachstellen analysieren sowie Schutzmaßnahmen vorschlagen und umsetzen – Pflicht in jedem FISI-Projekt." },
    { topic: "risikomanagement", f: "Technische vs. organisatorische Maßnahme", b: "Technisch: im System umgesetzt (MFA, Verschlüsselung, VLAN). Organisatorisch: Regeln und Abläufe (Patchprozess, Zutrittsregelung, Restore-Testplan)." },
    { topic: "risikomanagement", f: "3-2-1-Regel", b: "Drei Kopien der Daten, auf zwei verschiedenen Medien, davon eine außer Haus (möglichst offline oder unveränderlich)." },
    { topic: "qualitaet-tests", f: "PDCA", b: "Plan – Do – Check – Act; Kreislauf der kontinuierlichen Verbesserung (KVP)." },
    { topic: "qualitaet-tests", f: "Teststufen", b: "Komponententest → Integrationstest → Systemtest (gegen Pflichtenheft) → Abnahmetest (mit Kunde, gegen Lastenheft)." },
    { topic: "qualitaet-tests", f: "Regressionstest", b: "Wiederholung bestandener Tests nach Änderungen, um Nebenwirkungen zu erkennen." },
    { topic: "qualitaet-tests", f: "Testfall – Pflichtangaben", b: "ID, Vorbedingung, Schritte/Eingaben, erwartetes Ergebnis, tatsächliches Ergebnis, Status." },
    { topic: "qualitaet-tests", f: "Grenzwert- bzw. Extremwertetest", b: "Eingaben genau an und direkt hinter den Grenzen testen (erlaubt 1–100 → 0, 1, 100, 101)." },
    { topic: "change-migration", f: "Change-Typen", b: "Standard (vorab genehmigt, risikoarm) · Normal (bewerten, genehmigen, ggf. CAB) · Notfall (sofort, beschleunigt)." },
    { topic: "change-migration", f: "Migrationsmethoden", b: "Stichtag/Big Bang · Parallelbetrieb · stufenweise bzw. Pilot." },
    { topic: "change-migration", f: "Rollback-Plan", b: "Voraussetzungen (Backup/Snapshot), Go/No-Go-Kriterien, Point of no Return, Schritte, Verantwortliche – muss ins Wartungsfenster passen." },
    { topic: "change-migration", f: "FAT32-Grenze", b: "Max. 4 GiB pro Datei – für große Dateien exFAT oder NTFS verwenden." },
    { topic: "vertrag-recht", f: "Werkvertrag vs. Dienstvertrag", b: "Werkvertrag (§ 631 BGB): Erfolg, Abnahme. Dienstvertrag (§ 611 BGB): Tätigkeit ohne Erfolgsgarantie." },
    { topic: "vertrag-recht", f: "Rechtsfolgen der Abnahme", b: "Vergütung fällig, Gefahrübergang, Beginn der Verjährung der Mängelansprüche, Beweislast beim Kunden." },
    { topic: "vertrag-recht", f: "§ 377 HGB", b: "Beim beiderseitigen Handelskauf Ware unverzüglich untersuchen und Mängel unverzüglich rügen – sonst gilt sie als genehmigt." },
    { topic: "vertrag-recht", f: "§ 7 UWG", b: "Werbung per E-Mail ohne vorherige ausdrückliche Einwilligung ist eine unzumutbare Belästigung (B2C und B2B)." },
    { topic: "abnahme-uebergabe", f: "Benutzer- vs. Systemdokumentation", b: "Benutzer: Bedienung, einfach, bebildert. System/Admin: Konfiguration, Netzplan, Backup/Restore, Notfall, Änderungshistorie." },
    { topic: "abnahme-uebergabe", f: "Veränderung nach Lewin", b: "Auftauen → Verändern → Stabilisieren (Einfrieren)." },
    { topic: "abnahme-uebergabe", f: "Abnahmeprotokoll – Kerninhalte", b: "Parteien, Datum/Ort, abgenommene Leistung, Prüfergebnisse, Mängel mit Frist, Vorbehalte, Entscheidung, Unterschriften." },
    { topic: "abnahme-uebergabe", f: "Schulungskonzept – Leitfragen", b: "Wer (Zielgruppe)? Was (Lernziele)? Wie (Methode)? Wann/wie lange? Womit (Unterlagen)? Erfolgskontrolle?" },
    { topic: "projektabschluss", f: "Abweichung relativ", b: "(Ist − Soll) ÷ Soll × 100 %." },
    { topic: "projektabschluss", f: "Lessons Learned – drei Fragen", b: "Was lief gut? Was lief schlecht? Was machen wir beim nächsten Mal anders?" },
    { topic: "projektabschluss", f: "Statusbericht mit Ampel", b: "Grün = im Plan, Gelb = Abweichung beherrschbar, Rot = Eingreifen bzw. Entscheidung des Auftraggebers nötig." },
    { topic: "projektabschluss", f: "Kriterien der Projektbewertung (RLP)", b: "Zielerreichung, Wirtschaftlichkeit, Skalierbarkeit, Verlässlichkeit – plus Kritik des Kunden." },
    { topic: "ihk-projektantrag", f: "IHK-Projekt FISI: Zeitrahmen", b: "Höchstens 40 Stunden für Projektarbeit und Dokumentation; Doku-Richtwert ca. 15 % (≈ 6 h)." },
    { topic: "ihk-projektantrag", f: "Projektantrag – Mindestinhalt", b: "Ausgangssituation, Projektziel, Zeitplanung (§ 20 FIAusbV); Beginn erst nach Genehmigung." },
    { topic: "ihk-projektantrag", f: "Ergebnisse der Antragsprüfung", b: "Genehmigt · genehmigt mit Auflagen/Hinweisen (bindend) · abgelehnt (kurze Nachfrist zur Überarbeitung)." },
    { topic: "ihk-doku-praesentation", f: "Präsentation und Fachgespräch", b: "Präsentation höchstens 15 min, zusammen mit Fachgespräch höchstens 30 min; beide Projektteile zählen je 50 %." },
    { topic: "ihk-doku-praesentation", f: "Projektdoku IHK Flensburg (laut Hinweisen)", b: "Max. 10 Seiten DIN A4 + max. 25 Seiten Anhang, Arial 11, einzeilig – vor Abgabe mit PIN-Schreiben abgleichen." },
    { topic: "ihk-doku-praesentation", f: "Bewertung Fachgespräch", b: "Fachhintergrund/Fachsprache, Problemlösungskompetenz, Argumentation und Begründung." },
    { topic: "ihk-doku-praesentation", f: "Projekt – Bestehensregel", b: "Nicht unter 30 Punkte (ungenügend); höchstens ein Bereich von Teil 2 mangelhaft; keine mündliche Ergänzungsprüfung für das Projekt." },
  ],
  checklist: [
    { id: "c-pg-1", topic: "projekt-grundlagen", text: "Ich kann anhand von mindestens drei Merkmalen begründen, ob ein Vorhaben ein Projekt oder eine Routineaufgabe ist.", exam: ["AP1", "AP2"] },
    { id: "c-pg-2", topic: "projekt-grundlagen", text: "Ich kann das magische Dreieck erklären und die Folgen einer Termin-, Kosten- oder Leistungsänderung ableiten.", exam: ["AP1", "AP2"] },
    { id: "c-pg-3", topic: "projekt-grundlagen", text: "Ich kann ein unscharfes Ziel in ein SMART-Ziel mit Sach-, Qualitäts-, Zeit- und Kostenziel umformulieren.", exam: ["AP1", "AP2"] },
    { id: "c-pg-4", topic: "projekt-grundlagen", text: "Ich kann Stabs-, Matrix- und reine Projektorganisation unterscheiden sowie Teamverhalten einer Tuckman-Phase zuordnen.", exam: ["AP1", "AP2"] },
    { id: "c-pg-5", topic: "projekt-grundlagen", text: "Ich kann die fünf Projektphasen nach DIN 69901 mit typischen Ergebnissen nennen und für die Arbeitspakete meines Projekts eine RACI-Matrix erstellen.", exam: ["AP2"] },
    { id: "c-vm-1", topic: "vorgehensmodelle", text: "Ich kann die Phasen des Wasserfallmodells nennen und seine Vor- und Nachteile erklären.", exam: ["AP1", "AP2"] },
    { id: "c-vm-2", topic: "vorgehensmodelle", text: "Ich kann die Verantwortlichkeiten, Events und Artefakte von Scrum beschreiben und Situationen zuordnen.", exam: ["AP1", "AP2"] },
    { id: "c-vm-3", topic: "vorgehensmodelle", text: "Ich kann für ein Szenario begründet zwischen klassischem und agilem Vorgehen wählen und V-Modell sowie Kanban einordnen.", exam: ["AP1", "AP2"] },
    { id: "c-an-1", topic: "anforderungsanalyse", text: "Ich kann eine Ist-Analyse mit Schwachstellen durchführen und daraus ein Soll-Konzept ableiten.", exam: ["AP1", "AP2"] },
    { id: "c-an-2", topic: "anforderungsanalyse", text: "Ich kann Lastenheft und Pflichtenheft nach Ersteller, Inhalt und Zweck unterscheiden und Aussagen zuordnen.", exam: ["AP1", "AP2"] },
    { id: "c-an-3", topic: "anforderungsanalyse", text: "Ich kann funktionale und nicht-funktionale Anforderungen messbar formulieren und eine benötigte Bandbreite abschätzen.", exam: ["AP1", "AP2"] },
    { id: "c-an-4", topic: "anforderungsanalyse", text: "Ich kann eine Stakeholderanalyse mit Einfluss-Interesse-Matrix durchführen und Maßnahmen ableiten (inkl. Betriebsrat und Datenschutz).", exam: ["AP1", "AP2"] },
    { id: "c-ps-1", topic: "psp-zeitplanung", text: "Ich kann für ein IT-Vorhaben einen Projektstrukturplan mit Teilaufgaben und Arbeitspaketen erstellen.", exam: ["AP1", "AP2"] },
    { id: "c-ps-2", topic: "psp-zeitplanung", text: "Ich kann einen Netzplan vollständig berechnen (FAZ, FEZ, SAZ, SEZ, GP, FP) und den kritischen Pfad angeben.", exam: ["AP1", "AP2"] },
    { id: "c-ps-3", topic: "psp-zeitplanung", text: "Ich kann ein Gantt-Diagramm mit Meilensteinen erstellen, einen Endtermin im Kalender bestimmen und Maßnahmen bei Terminverzug bewerten.", exam: ["AP1", "AP2"] },
    { id: "c-ko-1", topic: "ressourcen-kosten", text: "Ich kann einen Stundensatz aus Gehalt, Arbeitgeberanteil, Gemeinkosten und verrechenbaren Stunden herleiten.", exam: ["AP1", "AP2"] },
    { id: "c-ko-2", topic: "ressourcen-kosten", text: "Ich kann eine Vorkalkulation bis zum Bruttoangebotspreis erstellen und mit einer Budgetvorgabe vergleichen.", exam: ["AP1", "AP2"] },
    { id: "c-ko-3", topic: "ressourcen-kosten", text: "Ich kann eine Nachkalkulation durchführen und Abweichungen absolut und prozentual berechnen und begründen.", exam: ["AP1", "AP2"] },
    { id: "c-wi-1", topic: "wirtschaftlichkeit-entscheidung", text: "Ich kann eine Nutzwertanalyse mit K.-o.-Kriterien durchführen, das Ergebnis begründen und seine Sensitivität beurteilen.", exam: ["AP1", "AP2"] },
    { id: "c-wi-2", topic: "wirtschaftlichkeit-entscheidung", text: "Ich kann einen Kostenvergleich mit Break-even sowie eine statische Amortisationsrechnung durchführen.", exam: ["AP1", "AP2"] },
    { id: "c-wi-3", topic: "wirtschaftlichkeit-entscheidung", text: "Ich kann Make-or-Buy-Argumente und qualitative Kriterien (Datenschutz, Abhängigkeit, Skalierbarkeit) in eine Empfehlung einbeziehen.", exam: ["AP1", "AP2"] },
    { id: "c-ri-1", topic: "risikomanagement", text: "Ich kann Projektrisiken mit Wahrscheinlichkeit × Schaden bewerten, priorisieren und Behandlungsstrategien zuordnen.", exam: ["AP1", "AP2"] },
    { id: "c-ri-2", topic: "risikomanagement", text: "Ich kann beurteilen, ob sich eine Risikomaßnahme wirtschaftlich lohnt.", exam: ["AP1", "AP2"] },
    { id: "c-ri-3", topic: "risikomanagement", text: "Ich kann für mein Projekt eine Schwachstellenanalyse durchführen und passende technische und organisatorische Schutzmaßnahmen begründen.", exam: ["AP2"] },
    { id: "c-ri-4", topic: "risikomanagement", text: "Ich kann den Schutzbedarf der Daten meines Projekts (Vertraulichkeit, Integrität, Verfügbarkeit) begründet einstufen und die Wirksamkeit der Schutzmaßnahmen mit Testfällen nachweisen.", exam: ["AP2"] },
    { id: "c-qs-1", topic: "qualitaet-tests", text: "Ich kann konstruktive und analytische QS unterscheiden und den PDCA-Zyklus auf ein Beispiel anwenden.", exam: ["AP1", "AP2"] },
    { id: "c-qs-2", topic: "qualitaet-tests", text: "Ich kann ein Testkonzept mit Teststufen, Testarten, Testfällen (inkl. erwartetem Ergebnis) und Abnahmekriterien erstellen.", exam: ["AP1", "AP2"] },
    { id: "c-qs-3", topic: "qualitaet-tests", text: "Ich kann ein Testprotokoll führen, Fehler klassifizieren und eine begründete Freigabeentscheidung treffen.", exam: ["AP1", "AP2"] },
    { id: "c-qs-4", topic: "qualitaet-tests", text: "Ich kann statische und dynamische Testverfahren unterscheiden und für eine Eingabe Grenzwert-Testfälle ableiten.", exam: ["AP2"] },
    { id: "c-cm-1", topic: "change-migration", text: "Ich kann den Ablauf eines Changeprozesses beschreiben und Standard-, Normal- und Notfall-Change unterscheiden.", exam: ["AP2"] },
    { id: "c-cm-2", topic: "change-migration", text: "Ich kann ein Wartungsfenster mit dem Kunden abstimmen und einen Rollback-Plan erstellen, der ins Fenster passt.", exam: ["AP2"] },
    { id: "c-cm-3", topic: "change-migration", text: "Ich kann Migrationsmethoden vergleichen, die Dauer einer Datenmigration berechnen und die Datenübernahme prüfen.", exam: ["AP1", "AP2"] },
    { id: "c-vr-1", topic: "vertrag-recht", text: "Ich kann Kauf-, Werk-, Dienst- und Werklieferungsvertrag unterscheiden und IT-Leistungen zuordnen.", exam: ["AP1", "AP2"] },
    { id: "c-vr-2", topic: "vertrag-recht", text: "Ich kann die Abnahme, ihre Rechtsfolgen und die Mängelrechte beim Werkvertrag erklären.", exam: ["AP1", "AP2"] },
    { id: "c-vr-3", topic: "vertrag-recht", text: "Ich kann Fälle zu § 377 HGB, AGB-Recht, UWG, Compliance und CRM-Datenschutz beurteilen.", exam: ["AP2"] },
    { id: "c-ab-1", topic: "abnahme-uebergabe", text: "Ich kann ein Abnahme- und ein Übergabeprotokoll erstellen und Mängel mit Fristen dokumentieren.", exam: ["AP1", "AP2"] },
    { id: "c-ab-2", topic: "abnahme-uebergabe", text: "Ich kann ein Schulungskonzept für verschiedene Zielgruppen entwerfen und Benutzer- von Systemdokumentation abgrenzen.", exam: ["AP1", "AP2"] },
    { id: "c-ab-3", topic: "abnahme-uebergabe", text: "Ich kann die Einführung eines neuen Systems nach Lewin begleiten und Maßnahmen gegen Widerstände der Anwender vorschlagen.", exam: ["AP1", "AP2"] },
    { id: "c-pa-1", topic: "projektabschluss", text: "Ich kann einen Soll-Ist-Vergleich für Zeit, Kosten und Ziele erstellen und Abweichungen begründen.", exam: ["AP1", "AP2"] },
    { id: "c-pa-2", topic: "projektabschluss", text: "Ich kann ein Projekt nach Zielerreichung, Wirtschaftlichkeit, Skalierbarkeit und Verlässlichkeit bewerten und Lessons Learned formulieren.", exam: ["AP1", "AP2"] },
    { id: "c-pa-3", topic: "projektabschluss", text: "Ich kann Projektkennzahlen (Termin- und Kostenabweichung, Zielerreichungsgrad, Fehlerquote) berechnen und in einem Abschlussbericht bewerten.", exam: ["AP2"] },
    { id: "c-ia-1", topic: "ihk-projektantrag", text: "Ich kann die sechs Anforderungen aus § 20 FIAusbV nennen und prüfen, ob mein Projektthema sie erfüllt.", exam: ["AP2"] },
    { id: "c-ia-2", topic: "ihk-projektantrag", text: "Ich kann einen Projektantrag mit Ausgangssituation, SMART-Zielen, Alternativen, Sicherheitsaspekten und 40-Stunden-Zeitplan formulieren.", exam: ["AP2"] },
    { id: "c-ia-3", topic: "ihk-projektantrag", text: "Ich kenne die Fristen meiner IHK (Antrag, Durchführung, Abgabe) und habe sie mit dem PIN-Schreiben abgeglichen.", exam: ["AP2"] },
    { id: "c-id-1", topic: "ihk-doku-praesentation", text: "Ich kann eine Projektdokumentation nach den IHK-Vorgaben gliedern und kenne die typischen Abwertungsgründe.", exam: ["AP2"] },
    { id: "c-id-2", topic: "ihk-doku-praesentation", text: "Ich kann eine 15-minütige Präsentation mit passenden Diagrammen aufbauen und habe sie mit Zeitmessung geprobt.", exam: ["AP2"] },
    { id: "c-id-3", topic: "ihk-doku-praesentation", text: "Ich kann jede Entscheidung meines Projekts im Fachgespräch fachlich begründen und „Was-wäre-wenn“-Fragen beantworten.", exam: ["AP2"] },
    { id: "c-id-4", topic: "ihk-doku-praesentation", text: "Ich kann Quellen vollständig angeben, KI-Nutzung offenlegen, Daten anonymisieren und weiß, was ich mit der persönlichen Erklärung versichere.", exam: ["AP2"] },
  ],
  glossary: [
    { term: "Abnahme", def: "Erklärung des Kunden, dass das Werk im Wesentlichen vertragsgemäß ist (§ 640 BGB); macht die Vergütung fällig, lässt die Gefahr übergehen und startet die Verjährung der Mängelansprüche." },
    { term: "Abnahmeprotokoll", def: "Schriftlicher Nachweis der Abnahme mit abgenommener Leistung, Prüfergebnissen, Mängeln samt Fristen, Vorbehalten, Entscheidung und Unterschriften." },
    { term: "AGB", def: "Allgemeine Geschäftsbedingungen – für viele Verträge vorformulierte Vertragsbedingungen, deren Einbeziehung und Wirksamkeit die §§ 305 ff. BGB regeln." },
    { term: "Amortisationsdauer", def: "Zeitraum, nach dem die Rückflüsse (z. B. Einsparungen) einer Investition deren Anschaffungskosten decken; statisch: Investition ÷ jährlicher Rückfluss." },
    { term: "Arbeitspaket", def: "Kleinste Einheit im Projektstrukturplan mit klarer Verantwortung, definiertem Ergebnis, Aufwand und Dauer." },
    { term: "Break-even", def: "Zeitpunkt oder Menge, ab der zwei Alternativen gleich teuer sind bzw. sich eine Investition lohnt." },
    { term: "CAB", def: "Change Advisory Board – Gremium, das Changes bewertet und bei der Genehmigung berät." },
    { term: "Change", def: "Hinzufügen, Ändern oder Entfernen von Komponenten eines produktiven IT-Services; wird über einen geregelten Changeprozess bewertet, genehmigt, umgesetzt und dokumentiert." },
    { term: "Compliance", def: "Einhaltung von Gesetzen, Normen, Verträgen und unternehmensinternen Richtlinien durch das Unternehmen und seine Beschäftigten." },
    { term: "CRM", def: "Customer Relationship Management – System und Strategie zur Pflege von Kundenbeziehungen mit Kontakten, Historie, Angeboten, Verträgen und Tickets." },
    { term: "Dienstvertrag", def: "Vertrag, bei dem eine Tätigkeit gegen Vergütung geschuldet wird, aber kein bestimmter Erfolg (§ 611 BGB)." },
    { term: "Fachgespräch", def: "Mündlicher Teil nach der Projektpräsentation, in dem der Prüfungsausschuss Projekt und fachliches Umfeld hinterfragt; mit der Präsentation zusammen höchstens 30 Minuten." },
    { term: "Gantt-Diagramm", def: "Balkenplan, der Vorgänge als Balken auf einer Zeitachse sowie Abhängigkeiten und Meilensteine darstellt." },
    { term: "Gesamtpuffer (GP)", def: "Zeit, um die ein Vorgang verschoben werden kann, ohne das Projektende zu gefährden: GP = SAZ − FAZ." },
    { term: "Grenzwerttest", def: "Testverfahren (auch Extremwertetest), bei dem Eingaben genau an und direkt hinter den erlaubten Grenzen geprüft werden, weil dort besonders häufig Fehler auftreten." },
    { term: "Kanban", def: "Agile Methode zur Steuerung eines kontinuierlichen Arbeitsflusses mit visualisiertem Board, WIP-Limits und Pull-Prinzip." },
    { term: "Kick-off-Meeting", def: "Auftaktbesprechung eines Projekts, in der Auftraggeber, Projektleitung und Team Ziele, Rollen, Termine und Kommunikationsregeln verbindlich abstimmen." },
    { term: "Kritischer Pfad", def: "Folge von Vorgängen ohne Gesamtpuffer; ihre Dauer bestimmt die kürzestmögliche Projektdauer." },
    { term: "Lastenheft", def: "Vom Auftraggeber erstellte Beschreibung aller Anforderungen und Rahmenbedingungen an die Lieferungen und Leistungen des Auftragnehmers (Was und Wofür)." },
    { term: "Lessons Learned", def: "Systematische Auswertung der Erfahrungen eines Projekts, um Erkenntnisse für künftige Projekte zu dokumentieren." },
    { term: "Magisches Dreieck", def: "Modell der gegenseitigen Abhängigkeit von Leistung/Qualität, Zeit und Kosten in einem Projekt." },
    { term: "Make-or-Buy", def: "Entscheidung, ob eine Leistung selbst erbracht oder von einem externen Anbieter bezogen wird." },
    { term: "Meilenstein", def: "Prüfbares Ereignis ohne Dauer, das einen wichtigen Zwischenstand im Projekt markiert." },
    { term: "Migration", def: "Überführung von Daten, Anwendungen oder Systemen von einer alten in eine neue Umgebung, z. B. per Stichtag, Parallelbetrieb oder stufenweise." },
    { term: "Netzplan", def: "Grafische Darstellung der Vorgänge eines Projekts mit ihren Abhängigkeiten zur Berechnung von Terminen, Puffern und kritischem Pfad." },
    { term: "Nutzwertanalyse", def: "Entscheidungsverfahren, bei dem Alternativen anhand gewichteter Kriterien mit Punkten bewertet und zu einem Nutzwert summiert werden." },
    { term: "PDCA-Zyklus", def: "Kreislauf der kontinuierlichen Verbesserung aus Plan, Do, Check und Act." },
    { term: "Pflichtenheft", def: "Vom Auftragnehmer erstellte Beschreibung, wie und womit die Anforderungen des Lastenhefts umgesetzt werden; nach Freigabe Vertragsgrundlage." },
    { term: "Product Owner", def: "Verantwortlichkeit in Scrum für den Wert des Produkts; pflegt und ordnet das Product Backlog." },
    { term: "Projekt", def: "Vorhaben, das durch die Einmaligkeit seiner Bedingungen gekennzeichnet ist: klares Ziel, zeitliche Begrenzung, begrenzte Ressourcen, eigene Organisation." },
    { term: "Projektantrag", def: "Projektbeschreibung für die IHK mit mindestens Ausgangssituation, Projektziel und Zeitplanung, die vor Beginn vom Prüfungsausschuss genehmigt werden muss." },
    { term: "Projektstrukturplan (PSP)", def: "Hierarchische Zerlegung eines Projekts in Teilaufgaben und Arbeitspakete, ohne zeitliche Reihenfolge." },
    { term: "RACI-Matrix", def: "Verantwortungsmatrix, die jeder Aufgabe die Rollen Responsible (ausführend), Accountable (verantwortlich, genau eine Person), Consulted (befragt) und Informed (informiert) zuordnet." },
    { term: "Regressionstest", def: "Wiederholung bereits bestandener Tests nach einer Änderung, um unbeabsichtigte Auswirkungen zu erkennen." },
    { term: "Risikowert", def: "Produkt aus Eintrittswahrscheinlichkeit und Schadenshöhe eines Risikos; dient der Priorisierung." },
    { term: "Rollback", def: "Planmäßige Rücknahme einer Änderung, um den vorherigen funktionierenden Zustand wiederherzustellen." },
    { term: "Scrum", def: "Agiles Rahmenwerk, das Produkte in kurzen Sprints mit festen Verantwortlichkeiten, Events und Artefakten schrittweise entwickelt." },
    { term: "Soll-Ist-Vergleich", def: "Gegenüberstellung geplanter und tatsächlicher Werte (Zeit, Kosten, Leistung) mit Berechnung und Begründung der Abweichungen." },
    { term: "Stakeholder", def: "Person oder Gruppe, die ein Interesse am Projekt hat oder von dessen Ergebnis betroffen ist." },
    { term: "Statusbericht", def: "Regelmäßiger Bericht der Projektleitung an Auftraggeber bzw. Lenkungsausschuss über Fortschritt, Termine, Kosten, Risiken und Entscheidungsbedarf, oft mit Ampelbewertung." },
    { term: "Stundensatz", def: "Kosten einer Arbeitsstunde, berechnet aus den jährlichen Gesamtkosten einer Stelle geteilt durch die verrechenbaren Stunden." },
    { term: "UWG", def: "Gesetz gegen den unlauteren Wettbewerb; verbietet u. a. irreführende Werbung und unzumutbare Belästigungen wie E-Mail-Werbung ohne Einwilligung." },
    { term: "V-Modell", def: "Vorgehensmodell, bei dem jeder Spezifikationsstufe eine zugehörige Teststufe gegenübersteht." },
    { term: "Wartungsfenster", def: "Mit dem Kunden vereinbarter Zeitraum, in dem Änderungen durchgeführt und Dienste eingeschränkt sein dürfen." },
    { term: "Werkvertrag", def: "Vertrag, bei dem ein bestimmter Erfolg (Werk) gegen Vergütung geschuldet wird, die nach der Abnahme fällig ist (§ 631 BGB)." },
  ],
  links: [
    { title: "FIAusbV § 20 – Prüfungsbereich Planen und Umsetzen eines Projektes der Systemintegration", url: "https://www.gesetze-im-internet.de/fiausbv/__20.html", note: "Anforderungen an Projekt, Antrag, 40 Stunden, Präsentation und Fachgespräch" },
    { title: "FIAusbV § 24 – Gewichtung und Bestehensregelung", url: "https://www.gesetze-im-internet.de/fiausbv/__24.html", note: "Projekt 50 %, Bestehensregeln für Teil 2" },
    { title: "IHK Schleswig-Holstein: Die betriebliche Projektarbeit – Hinweise für IT-Berufe", url: "https://www.ihk.de/schleswig-holstein/bildung/downloads/formulare-ihk-flensburg/hinweis-projektarbeit-it-6722448", note: "Fristen, Durchführungszeitraum und Umfang der Dokumentation (IHK Flensburg)" },
    { title: "Scrum Guide (offizielle Definition von Scrum)", url: "https://scrumguides.org/", note: "Verantwortlichkeiten, Events und Artefakte; auch auf Deutsch verfügbar" },
    { title: "BGB § 640 – Abnahme", url: "https://www.gesetze-im-internet.de/bgb/__640.html", note: "Abnahme beim Werkvertrag inkl. fiktiver Abnahme" },
    { title: "HGB § 377 – Untersuchungs- und Rügepflicht", url: "https://www.gesetze-im-internet.de/hgb/__377.html", note: "Mängelrüge beim beiderseitigen Handelskauf" },
    { title: "Gesetz gegen den unlauteren Wettbewerb (UWG)", url: "https://www.gesetze-im-internet.de/uwg_2004/", note: "u. a. § 5 irreführende Werbung, § 7 unzumutbare Belästigungen" },
    { title: "BSI – IT-Grundschutz", url: "https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/it-grundschutz_node.html", note: "Grundlage für Schutzbedarfs- und Schwachstellenanalyse im Projekt" },
    { title: "Wikipedia: Netzplantechnik", url: "https://de.wikipedia.org/wiki/Netzplantechnik", note: "ergänzend: Grundlagen und Begriffe der Netzplantechnik" },
  ]
});
