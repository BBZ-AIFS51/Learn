/* AP1 – Abschlussprüfung Teil 1: Einrichten eines IT-gestützten Arbeitsplatzes
   Grundlage: FIAusbV 2020 (§§ 7–9, 24), ZPA-Prüfungskatalog FISI 2. Auflage (gültig ab AP1 Frühjahr 2025),
   Termine laut IHK-AkA. Stand: September 2026. Inhalte in eigenen Worten. */
LEARN.exam({
  id: "ap1",
  title: "AP1",
  name: "Abschlussprüfung Teil 1",
  subtitle: "Einrichten eines IT-gestützten Arbeitsplatzes",

  facts: [
    { icon: "clock", label: "Dauer", value: "90 Minuten" },
    { icon: "pencil-square", label: "Form", value: "schriftlich, offene (ungebundene) Aufgaben, keine Abwahl" },
    { icon: "list-ol", label: "Umfang", value: "4 Aufgaben à 20–30 Punkte = 100 Punkte" },
    { icon: "percent", label: "Gewichtung", value: "20 % des Gesamtergebnisses" },
    { icon: "calendar-event", label: "Zeitpunkt", value: "4. Ausbildungshalbjahr – Stoff der Monate 1–18 (LF 1–6)" },
    { icon: "calculator", label: "Hilfsmittel", value: "nicht programmierbarer Taschenrechner + Belegsatz" },
    { icon: "shield-check", label: "Bestehen", value: "keine eigene Bestehensgrenze, keine Sperrwirkung" },
    { icon: "people", label: "Aufgaben", value: "bundeseinheitlich (ZPA), gleich für alle 7 IT-Berufe" }
  ],

  html: `
    <p>Die <strong>AP1</strong> ist der erste Teil deiner gestreckten Abschlussprüfung. Sie ist keine „Zwischenprüfung zum Üben“ mehr: Ihr Ergebnis zählt mit <strong>20 %</strong> in deine Gesamtnote – mehr als jede einzelne schriftliche Prüfung in Teil 2. Geprüft wird ein einziger Prüfungsbereich: <strong>„Einrichten eines IT-gestützten Arbeitsplatzes“</strong>. Die Aufgaben erstellt die Zentralstelle für Prüfungsaufgaben (ZPA Nord-West) bundeseinheitlich (einzige Ausnahme: Baden-Württemberg), und sie sind für alle sieben IT-Berufe identisch (FISI, FIAE, Daten- und Prozessanalyse, Digitale Vernetzung, IT-System-Elektroniker/-in, Kaufleute für IT-System-Management und für Digitalisierungsmanagement).</p>

    <h5>Worum geht es inhaltlich?</h5>
    <p>Laut § 9 Abs. 2 FIAusbV sollst du zeigen, dass du einen Arbeitsplatz vom Kundengespräch bis zur Abnahme betreuen kannst:</p>
    <ol>
      <li>Kundenbedarfe zielgruppengerecht ermitteln,</li>
      <li>Hard- und Software auswählen und die Beschaffung einleiten,</li>
      <li>einen IT-Arbeitsplatz konfigurieren und testen – unter Beachtung von Datenschutz, IT-Sicherheit und Qualitätssicherung,</li>
      <li>Kundinnen und Kunden in die Nutzung einweisen,</li>
      <li>die Leistungserbringung kontrollieren und protokollieren.</li>
    </ol>
    <p>Geprüft wird der Stoff der <strong>ersten 18 Ausbildungsmonate</strong> aus dem Betrieb (Ausbildungsrahmenplan, § 4 Abs. 2 Nr. 1–7) und aus der Berufsschule (<strong>Lernfelder 1 bis 6</strong>). Der Prüfungskatalog gliedert das in sieben Fragenkomplexe – genau so ist auch die Checkliste im Reiter „Themen &amp; To-dos“ aufgebaut:</p>
    <table><thead><tr><th>Fragenkomplex</th><th>Typische Inhalte</th><th>Lernfelder</th></tr></thead><tbody>
      <tr><td>01 Arbeitsaufgaben planen, vorbereiten und durchführen</td><td>Projektmerkmale, SMART, Netzplan, Gantt, Wasserfall/Scrum, Vor- und Nachkalkulation, Tickets, Support-Level, KI im Support</td><td>LF 1, 5, 6</td></tr>
      <tr><td>02 Informieren und Beraten von Kunden</td><td>Marktformen, Bedarfsanalyse, Kommunikationsmodelle, englische Fachtexte, Präsentation, Nutzwertanalyse</td><td>LF 1, 2</td></tr>
      <tr><td>03 Marktgängige IT-Systeme beurteilen</td><td>PC-Komponenten, Anschlüsse, OSI-Modell, SSD/HDD, Dateisysteme, Datenmengen, Übertragungszeiten, Strom und PoE, TCO, Leasing, Amortisation</td><td>LF 2, 3</td></tr>
      <tr><td>04 IT-Lösungen entwickeln, erstellen und betreuen</td><td>Lasten-/Pflichtenheft, IPv4/IPv6, Konsolenbefehle, DHCP, VPN, Lizenzen, Programmiersprachen, Pseudocode, Schreibtischtest, UML, ER-Modell</td><td>LF 2, 3, 5</td></tr>
      <tr><td>05 Qualitätssichernde Maßnahmen</td><td>QS vs. QM, PDCA-Zyklus, Testfälle und Testprotokoll für einen Arbeitsplatz</td><td>LF 3, 5, 6</td></tr>
      <tr><td>06 IT-Sicherheit und Datenschutz</td><td>Schutzziele, TOM, DSGVO, Schutzbedarfsanalyse, Härtung, Backup, Verschlüsselung, Hash, Signatur, 2FA, Malware</td><td>LF 4</td></tr>
      <tr><td>07 Leistungen erbringen und Auftrag abschließen</td><td>Verträge und Vertragsstörungen, Rechnung prüfen, Leitbild und Ziele, Organigramm, Change Management, Abnahmeprotokoll, Soll-Ist-Vergleich</td><td>LF 1, 2, 3, 6</td></tr>
    </tbody></table>
    <p><strong>Englisch</strong> ist kein eigenes Fach in der AP1, fließt aber laut Katalog in alle Bereiche ein – seit 2025 praktisch in jeder Prüfung (Datenblatt, Hersteller-Mail, Fachtext).</p>

    <h5>Aufbau und Ablauf</h5>
    <ul>
      <li><strong>90 Minuten, schriftlich, 100 Punkte.</strong> Der Aufgabensatz besteht aus <strong>4 Aufgaben mit je 20–30 Punkten</strong>, die in viele Teilaufgaben gegliedert sind (a, b, c … und darunter aa, bb …).</li>
      <li>Alle Aufgaben sind <strong>ungebunden</strong>, also offen: Du schreibst, rechnest und zeichnest selbst. Es gibt keine Ankreuzaufgaben und <strong>nichts zum Abwählen</strong> – alle vier Aufgaben zählen.</li>
      <li>Am Anfang steht eine <strong>Ausgangssituation</strong>: ein IT-Dienstleister und sein Kunde (z. B. eine Apothekengruppe oder eine Steuerkanzlei). Alle Aufgaben beziehen sich auf diese Situation.</li>
      <li>Zum Aufgabensatz gehört ein <strong>Belegsatz</strong> mit Datenblättern, Angeboten, Rechnungen, Tabellen und Notationshilfen. Du trägst deine Antworten <strong>direkt in das Aufgabenheft</strong> ein.</li>
      <li><strong>Termine:</strong> jedes Jahr im Frühjahr und im Herbst, bundeseinheitlich; Beginn meist um 08:00 Uhr (verbindlich ist deine Einladung). Die Anmeldung übernimmt dein Ausbildungsbetrieb online bei der IHK Flensburg; die Einladung kommt etwa vier Wochen vor dem Termin.</li>
      <li><strong>Welcher Termin gilt für dich?</strong> Die AP1 liegt im 4. Ausbildungshalbjahr. Hat deine Ausbildung im August 2025 begonnen, ist das der Zeitraum Februar bis Juli 2027 – also voraussichtlich der <strong>Frühjahrstermin am Mittwoch, 24.02.2027</strong>. Festgelegt wird der Termin von der IHK Flensburg.</li>
    </ul>

    <h5>Aufgabentypen</h5>
    <table><thead><tr><th>Typ</th><th>Beispiele aus bisherigen Prüfungen</th><th>Punkte (Erfahrungswerte)</th></tr></thead><tbody>
      <tr><td>Kurzantwort / Freitext</td><td>Drei Härtungsmaßnahmen nennen, Lasten- und Pflichtenheft unterscheiden, eine Empfehlung begründen</td><td>1–2 P je Nennung, 2–6 P je Erklärung</td></tr>
      <tr><td>Rechnen</td><td>Stromkosten mit Wirkungsgrad, Amortisation, Bildgröße in MiB, Upload-Dauer, Subnetting, Leasing vs. Kauf, Rechnung prüfen</td><td>2–8 P</td></tr>
      <tr><td>Tabelle ausfüllen</td><td>Nutzwertanalyse, Schreibtischtest, Schutzbedarf je Schutzziel, Testprotokoll</td><td>4–14 P</td></tr>
      <tr><td>Diagramm ergänzen oder zeichnen</td><td>Netzplan berechnen oder Fehler finden, ER-Modell, UML-Klassen- und Aktivitätsdiagramm</td><td>6–12 P</td></tr>
      <tr><td>Zuordnen</td><td>Anschlüsse und Symbole, Geräte zu OSI-Schichten, Malware-Arten, Kontrollarten</td><td>2–6 P</td></tr>
      <tr><td>Code analysieren</td><td>Pseudocode per Schreibtischtest durchlaufen, Fehler finden, Code in Worten erklären</td><td>bis 14 P</td></tr>
      <tr><td>Englischer Text</td><td>Datenblatt (z. B. „IR range“, „heater“), Text zu Daisy Chaining oder Change Management – Antwort auf Deutsch</td><td>2–6 P</td></tr>
    </tbody></table>
    <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Eine Aufgabe mischt fast immer mehrere Themen. Beispiel für eine 25-Punkte-Aufgabe: „Die Nordlicht IT GmbH in Heide richtet für eine Steuerkanzlei in Husum zwölf Arbeitsplätze ein. a) Führen Sie mithilfe der Datenblätter eine Nutzwertanalyse durch (8 P). b) Berechnen Sie die jährlichen Stromkosten (5 P). c) Erläutern Sie zwei Anforderungen der DSGVO an die Kanzlei (4 P). d) Übersetzen Sie die markierten Angaben des englischen Datenblatts (4 P). e) Nennen Sie vier Testfälle für das Testprotokoll (4 P).“</div>
    <h5>Bewertung: der IHK-Notenschlüssel</h5>
    <p>Jede Teilaufgabe hat eine feste Punktzahl; zusammen sind es 100 Punkte. Die Punkte werden nach dem einheitlichen 100-Punkte-Schlüssel der IHK in eine Note umgerechnet:</p>
    <table><thead><tr><th>Punkte</th><th>Note</th><th>Bedeutung</th></tr></thead><tbody>
      <tr><td>100 bis 92</td><td>1 – sehr gut</td><td>Leistung entspricht den Anforderungen in besonderem Maß</td></tr>
      <tr><td>unter 92 bis 81</td><td>2 – gut</td><td>entspricht den Anforderungen voll</td></tr>
      <tr><td>unter 81 bis 67</td><td>3 – befriedigend</td><td>entspricht den Anforderungen im Allgemeinen</td></tr>
      <tr><td>unter 67 bis 50</td><td>4 – ausreichend</td><td>weist Mängel auf, entspricht aber im Ganzen noch den Anforderungen</td></tr>
      <tr><td>unter 50 bis 30</td><td>5 – mangelhaft</td><td>entspricht nicht den Anforderungen, Grundkenntnisse sind vorhanden</td></tr>
      <tr><td>unter 30 bis 0</td><td>6 – ungenügend</td><td>entspricht nicht den Anforderungen, selbst Grundkenntnisse fehlen</td></tr>
    </tbody></table>
    <div class="callout tipp"><strong>Tipp:</strong> Für ein „gut“ brauchst du 81 von 100 Punkten. Das schaffst du nur mit breitem Wissen über alle sieben Fragenkomplexe – einzelne Lieblingsthemen reichen nicht, weil keine Aufgabe abgewählt werden kann.</div>

    <h5>Bedeutung für dein Gesamtergebnis</h5>
    <p>Nach § 24 FIAusbV setzt sich das Gesamtergebnis in der Fachrichtung Systemintegration so zusammen:</p>
    <table><thead><tr><th>Prüfungsteil</th><th>Prüfungsbereich</th><th>Gewichtung</th></tr></thead><tbody>
      <tr><td>Teil 1 (AP1)</td><td>Einrichten eines IT-gestützten Arbeitsplatzes</td><td><strong>20 %</strong></td></tr>
      <tr><td>Teil 2 (AP2)</td><td>Durchführen einer betrieblichen Projektarbeit (Doku, Präsentation, Fachgespräch)</td><td>50 %</td></tr>
      <tr><td>Teil 2 (AP2)</td><td>Konzeption und Administration von IT-Systemen</td><td>10 %</td></tr>
      <tr><td>Teil 2 (AP2)</td><td>Analyse und Entwicklung von Netzwerken</td><td>10 %</td></tr>
      <tr><td>Teil 2 (AP2)</td><td>Wirtschafts- und Sozialkunde</td><td>10 %</td></tr>
    </tbody></table>
    <div class="callout formel"><strong>Formel:</strong> Gesamtergebnis = 0,2 × AP1 + 0,5 × Projekt + 0,1 × KAIS + 0,1 × AEN + 0,1 × WiSo</div>
    <div class="callout beispiel"><strong>Beispiel 1 – Gesamtergebnis:</strong> AP1 72 P, Projekt 80 P, KAIS 60 P, AEN 55 P, WiSo 70 P.<br>
      0,2 × 72 + 0,5 × 80 + 0,1 × 60 + 0,1 × 55 + 0,1 × 70 = 14,4 + 40 + 6 + 5,5 + 7 = <strong>72,9 Punkte</strong> → befriedigend.<br><br>
      <strong>Beispiel 2 – schwache AP1:</strong> Du hast in der AP1 nur 40 Punkte. Teil 2 macht 80 % aus. Für mindestens 50 Punkte insgesamt gilt: 0,2 × 40 + 0,8 × x ≥ 50 → 8 + 0,8 × x ≥ 50 → x ≥ 42 ÷ 0,8 = <strong>52,5 Punkte</strong>. Du musst in Teil 2 also im Schnitt mindestens 52,5 Punkte holen.<br><br>
      <strong>Beispiel 3 – starke AP1:</strong> Mit 70 Punkten in der AP1 würde rechnerisch schon x ≥ (50 − 14) ÷ 0,8 = 45 Punkte in Teil 2 reichen. Trotzdem gilt: Teil 2 muss <em>für sich</em> mindestens 50 Punkte erreichen (siehe Bestehensregeln). Eine gute AP1 hebt deine Note, ersetzt aber keine Leistung in Teil 2.</div>
    <p><strong>Bestehensregeln (§ 24 Abs. 2 FIAusbV):</strong> Du hast die Abschlussprüfung bestanden, wenn</p>
    <ol>
      <li>das Gesamtergebnis aus Teil 1 und Teil 2 mindestens „ausreichend“ (50 Punkte) ist,</li>
      <li>das Ergebnis von Teil 2 mindestens „ausreichend“ ist,</li>
      <li>mindestens drei Prüfungsbereiche von Teil 2 mindestens „ausreichend“ sind und</li>
      <li>kein Prüfungsbereich von Teil 2 „ungenügend“ ist.</li>
    </ol>
    <div class="callout merke"><strong>Merke:</strong> Für die AP1 gibt es <strong>keine eigene Bestehensgrenze und keine Sperrwirkung</strong>. Selbst ein „ungenügend“ führt nicht automatisch zum Durchfallen – die fehlenden Punkte musst du aber in Teil 2 ausgleichen. Die AP1 kann <strong>nicht separat wiederholt</strong> werden, und es gibt für sie <strong>keine mündliche Ergänzungsprüfung</strong>. Du erhältst nach Teil 1 eine Bescheinigung über dein Ergebnis.</div>
    <div class="callout achtung"><strong>Achtung:</strong> Zu Teil 2 wird nur zugelassen, wer an Teil 1 <strong>teilgenommen</strong> hat (§ 44 BBiG). Wer ohne eigenes Verschulden fehlt (z. B. mit ärztlichem Attest), legt Teil 1 und Teil 2 später zusammen ab. Unentschuldigtes Fehlen ist also keine Option.</div>
    <h5>Hilfsmittel und Belegsatz</h5>
    <ul>
      <li><strong>Taschenrechner (gesichert):</strong> nicht programmierbar, netzunabhängig (Batterie/Solar) und ohne Kommunikationsfunktion. Handy, Smartwatch und programmierbare Rechner sind tabu. Nimm eine analoge Armbanduhr mit.</li>
      <li><strong>Formelsammlung, Tabellenbuch, Wörterbuch (unsicher):</strong> Eine offizielle Hilfsmittelliste speziell für die IT-Berufe ist nicht veröffentlicht. Nach allem, was bekannt ist, sind sie <em>nicht</em> erlaubt – verbindlich sind das Deckblatt des Aufgabensatzes und deine Einladung.</li>
      <li><strong>Belegsatz:</strong> Anlage zum Aufgabensatz mit Datenblättern, Angeboten, Rechnungen, Tabellen und Notationshilfen. Seit der 2. Katalogauflage gibt es <strong>einheitliche Belegsätze für alle IT-Berufe</strong>. Die Notationen, die darin vorkommen können (z. B. Netzplanknoten, UML, ER-Modell, EPK), sind im Anhang des Prüfungskatalogs abgedruckt – lerne sie vorher.</li>
      <li><strong>Formeln</strong> wie P = U × I und W = P × t stehen nicht (mehr) im Katalog und nicht im Belegsatz, werden aber weiterhin gerechnet. Du musst sie auswendig können.</li>
    </ul>
    <div class="callout achtung"><strong>Prüfungsfalle Einheiten (Präfix-Regel der ZPA):</strong> <strong>Datenmengen</strong> werden mit <strong>Binärpräfixen</strong> angegeben: 1 KiB = 2¹⁰ = 1.024 Byte, 1 MiB = 2²⁰ Byte, 1 GiB = 2³⁰ Byte, 1 TiB = 2⁴⁰ Byte. <strong>Datenraten, Leistung und Strom</strong> werden mit <strong>Dezimalpräfixen</strong> angegeben: 1 Mbit/s = 10⁶ bit/s, 1 kW = 1.000 W. Gibt die Aufgabe selbst eine Einheit vor (z. B. „in MB“), übernimmst du genau diese.</div>
    <div class="callout formel"><strong>Formeln, die du ohne Belegsatz können musst:</strong><br>
      Leistung: P = U × I · Strom: I = P ÷ U · Energie: W = P × t · Energiekosten = kWh × Preis je kWh<br>
      Wirkungsgrad: η = P_ab ÷ P_zu → Aufnahme aus dem Netz P_zu = P_ab ÷ η<br>
      Bildgröße (unkomprimiert) = Breite × Höhe × Farbtiefe in Bit ÷ 8 (Byte) · Farbanzahl = 2^Farbtiefe (z. B. 2²⁴ = 16.777.216)<br>
      Übertragungszeit t = Datenmenge in Bit ÷ Datenrate in bit/s (Byte × 8 = Bit)<br>
      Hosts je IPv4-Netz = 2ⁿ − 2 (n = Anzahl Hostbits)<br>
      Nutzwert = Σ (Gewichtung × Punkte) · Amortisationsdauer = Mehrinvestition ÷ jährliche Einsparung<br>
      Netzplan: FEZ = FAZ + D · SAZ = SEZ − D · GP = SAZ − FAZ · FP = kleinster FAZ der Nachfolger − eigener FEZ<br>
      Schlüsselanzahl: symmetrisch n × (n − 1) ÷ 2 · asymmetrisch 2 × n</div>

    <h5>Operatoren: Was wird von dir erwartet?</h5>
    <p>Das Verb in der Aufgabenstellung (der <strong>Operator</strong>) sagt dir, wie ausführlich deine Antwort sein muss. Eine offizielle Operatorenliste der ZPA speziell für die IT-Berufe ist nicht veröffentlicht; die folgende Auslegung entspricht der üblichen Bewertungspraxis.</p>
    <table><thead><tr><th>Operator</th><th>Das wird erwartet</th><th>Mini-Beispiel</th></tr></thead><tbody>
      <tr><td><strong>nennen, angeben</strong></td><td>Begriff oder Stichwort ohne Erklärung – genau so viele, wie verlangt</td><td>„Nennen Sie zwei Schutzziele.“ → Vertraulichkeit, Integrität</td></tr>
      <tr><td><strong>beschreiben, darstellen</strong></td><td>Sachverhalt in eigenen Worten und ganzen Sätzen wiedergeben, ohne Wertung</td><td>„Beschreiben Sie den DHCP-Ablauf.“ → vier Schritte DORA in Sätzen</td></tr>
      <tr><td><strong>erklären, erläutern</strong></td><td>Beschreiben plus Zusammenhang, Ursache/Wirkung oder Beispiel; beim Erläutern mit Bezug zur Situation</td><td>„Erläutern Sie, warum die Kanzlei hybrid verschlüsseln sollte.“</td></tr>
      <tr><td><strong>begründen</strong></td><td>Entscheidung mit einem stichhaltigen Argument aus dem Szenario stützen („…, weil …“)</td><td>„Begründen Sie Ihre Empfehlung für Drucker B.“</td></tr>
      <tr><td><strong>vergleichen, unterscheiden, gegenüberstellen</strong></td><td>Gemeinsamkeiten und Unterschiede kriterienweise nebeneinanderstellen, gern als Tabelle</td><td>„Vergleichen Sie IMAP und POP3.“</td></tr>
      <tr><td><strong>berechnen, ermitteln</strong></td><td>Formel, eingesetzte Werte, Zwischenergebnisse und Ergebnis mit Einheit</td><td>„Berechnen Sie die jährlichen Stromkosten.“</td></tr>
      <tr><td><strong>prüfen, überprüfen</strong></td><td>Aussage anhand von Kriterien oder Rechnung kontrollieren und ein klares Ergebnis nennen (ja/nein, richtig/falsch mit Korrektur)</td><td>„Prüfen Sie, ob das PoE-Budget ausreicht.“</td></tr>
      <tr><td><strong>beurteilen, bewerten</strong></td><td>Kriterien nennen, Vor- und Nachteile abwägen, eigenes Urteil fällen und begründen</td><td>„Beurteilen Sie den Einsatz eines KI-Chatbots im 1st-Level-Support.“</td></tr>
      <tr><td><strong>ergänzen, zeichnen, skizzieren, erstellen</strong></td><td>Diagramm oder Tabelle in der vorgegebenen Notation vollständig anfertigen</td><td>„Ergänzen Sie das ER-Modell um die Kardinalitäten.“</td></tr>
    </tbody></table>
    <div class="callout achtung"><strong>Typische Punktverluste:</strong> nur Stichworte bei „erläutern“, keine Begründung bei „begründen“, fünf Nennungen bei „nennen Sie drei“ (oft werden nur die ersten gewertet), Ergebnis ohne Rechenweg oder ohne Einheit, Antwort auf Englisch, obwohl nach der Bedeutung auf Deutsch gefragt ist.</div>

    <h5>Zeitmanagement</h5>
    <p>90 Minuten für 100 Punkte bedeuten rund <strong>0,9 Minuten pro Punkt</strong>. Eine 25-Punkte-Aufgabe verträgt also etwa 22 bis 23 Minuten, eine 4-Punkte-Teilaufgabe knapp 4 Minuten.</p>
    <table><thead><tr><th>Phase</th><th>Zeit</th><th>Was du tust</th></tr></thead><tbody>
      <tr><td>Überblick</td><td>ca. 5 min</td><td>Ausgangssituation lesen, Belegsatz auf Vollständigkeit prüfen, alle vier Aufgaben überfliegen, Punktzahlen markieren</td></tr>
      <tr><td>Bearbeitung</td><td>ca. 80 min</td><td>Aufgaben in deiner Reihenfolge lösen – sichere Punktebringer zuerst (Rechnungen, Nutzwertanalyse, Netzplan, Subnetting); pro Aufgabe grob 18–27 min je nach Punktzahl</td></tr>
      <tr><td>Kontrolle</td><td>ca. 5 min</td><td>Lücken füllen, Einheiten und Anzahl der Nennungen prüfen, Rechenwege lesbar machen</td></tr>
    </tbody></table>
    <div class="callout tipp"><strong>Tipp:</strong> Die Teilaufgaben hängen meist nicht voneinander ab. Kommst du bei a) nicht weiter, markiere die Stelle und mach bei b) weiter. Zeitfresser sind vor allem lange Situationstexte und Zeichnungen (Aktivitätsdiagramm, ER-Modell) – hier erst die Grobstruktur, dann die Details.</div>
    <h5>Was ist seit dem Prüfungskatalog 2025 anders?</h5>
    <p>Seit der <strong>AP1 im Frühjahr 2025</strong> gilt die 2. Auflage des ZPA-Prüfungskatalogs (Stand Oktober 2024). Die Verordnung selbst wurde nicht geändert. Wichtig, wenn du mit älteren Prüfungen übst:</p>
    <div class="grid-2">
      <div>
        <p><strong>Nicht mehr AP1-relevant</strong></p>
        <ul>
          <li>SQL und RAID (nur noch in Teil 2)</li>
          <li>Struktogramm und Programmablaufplan (PAP)</li>
          <li>NoSQL, Vererbung in der OOP</li>
          <li>LTE/5G, ISO 2700x, Softwarequalitätskriterien; ISO 9000 und Audit als ausdrückliche Stichworte (QS-Normen und Zertifizierung allgemein bleiben im Katalog)</li>
          <li>SWOT, Benchmarking, Deckungsbeitrag</li>
          <li>Vorgehensmodelle außer Wasserfall und Scrum</li>
        </ul>
      </div>
      <div>
        <p><strong>Neu oder deutlich präzisiert</strong></p>
        <ul>
          <li>UML: Anwendungsfall-, Klassen- und <strong>Aktivitätsdiagramm</strong></li>
          <li><strong>Schreibtischtest</strong>, Fehler in Quellcode finden, Code erklären</li>
          <li><strong>KI</strong> im Support und als Software (Nutzen, Kosten, Datenschutz)</li>
          <li>Barrierefreiheit (Arbeitsplatz, Webseiten, Zusatzhardware)</li>
          <li>Virtuelle Desktops/DaaS, Domäneneinbindung, Dateisysteme, SSD/HDD</li>
          <li>Datenmengen und Übertragungszeiten, KB vs. KiB</li>
          <li>Schutzziele, TOM, Hash, Zertifikat, Signatur, 2FA, Härtung, Personal Firewall, Anonymisierung/Pseudonymisierung</li>
          <li>SMART, Wasserfall/Scrum, Teamentwicklung, Vor-/Nachkalkulation, 1st/2nd/3rd-Level-Support, Change Management, Testprotokoll</li>
        </ul>
      </div>
    </div>
    <div class="callout achtung"><strong>Achtung bei Altprüfungen:</strong> Aufgabensätze von Herbst 2021 bis Herbst 2024 enthalten noch SQL-, RAID- und Struktogramm-Aufgaben. Diese kannst du für die AP1 überspringen (für die AP2 in Systemintegration brauchst du SQL und RAID aber weiterhin). Dafür fehlen in alten Prüfungen KI, Aktivitätsdiagramm und teilweise der Schreibtischtest – übe diese Themen zusätzlich hier im Portal.</div>

    <h5>Was kam bisher am häufigsten dran?</h5>
    <p>Eine Auswertung der zehn AP1-Prüfungen von Herbst 2021 bis Frühjahr 2026 (Themendatenbank des IT-Berufe-Podcasts, also eine <em>Sekundärquelle</em>) zeigt, wo die meisten Punkte lagen:</p>
    <table><thead><tr><th>Thema</th><th>Punkte gesamt (10 Prüfungen)</th><th>Hinweis</th></tr></thead><tbody>
      <tr><td>Nutzwertanalyse</td><td>45</td><td>seit 2025 auch: Punkte selbst aus Datenblättern ableiten</td></tr>
      <tr><td>Netzplan</td><td>35</td><td>Frühjahr 2026: drei Fehler in einem fertigen Netzplan finden</td></tr>
      <tr><td>ER-Modell</td><td>33</td><td>ohne SQL, dafür Tabellen und Kardinalitäten</td></tr>
      <tr><td>Schreibtischtest</td><td>32</td><td>seit Herbst 2024 in jeder Prüfung, einmal 14 Punkte</td></tr>
      <tr><td>Dateigrößen berechnen</td><td>29</td><td>KiB/MiB/GiB sauber unterscheiden</td></tr>
      <tr><td>IPv6</td><td>28</td><td>kürzen, ausschreiben, Unterschiede zu IPv4</td></tr>
      <tr><td>Kosten berechnen</td><td>27</td><td>monatliche Kosten, Stundensätze, Rabatt/Skonto</td></tr>
      <tr><td>KI</td><td>20</td><td>erst seit 2023, seit 2025 regelmäßig</td></tr>
      <tr><td>Leasing</td><td>19</td><td>Kauf vs. Leasing vs. Kredit rechnen und bewerten</td></tr>
    </tbody></table>
    <p>Nach Themenclustern kamen Hardware (10 von 10 Prüfungen), Netzwerktechnik, Softwareentwicklung und Wirtschaftlichkeit (je 9 von 10) sowie IT-Sicherheit und Projektmanagement (je 8 von 10) fast immer vor. In der Checkliste sind die entsprechenden Punkte mit <strong>„häufig“</strong> markiert. Eine Garantie für die nächste Prüfung ist das nicht – die ZPA kann jedes Katalogthema prüfen.</p>

    <h5>So nutzt du dieses Portal für die AP1</h5>
    <ol>
      <li><strong>Themen &amp; To-dos:</strong> Geh die Checkliste Bereich für Bereich durch und hake nur ab, was du wirklich ohne Hilfe kannst. Mit dem Filter „Offen“ siehst du deine Lücken, mit „Häufig“ die wichtigsten Punkte zuerst.</li>
      <li><strong>Lernzettel in LF 1 bis 6:</strong> Die Chips an jedem Bereich führen dich zu den passenden Lernfeldern – überwiegend LF 1 bis 6; einige Themen (z. B. Sensoren, ER-Modell, IPv6) werden in LF 7 bis 9 vertieft. Alle Lernzettel, Übungen und Fragen mit dem Etikett „AP1“ sind prüfungsrelevant.</li>
      <li><strong>Rechner &amp; Trainer:</strong> Übe Rechenaufgaben mit den Werkzeugen „IPv4-Subnetting-Trainer“, „IPv6-Trainer“, „Netzplan &amp; kritischer Pfad“, „Nutzwertanalyse“, „Speicher &amp; Übertragung“, „Strom, USV &amp; Elektrotechnik“ und „Angebotsvergleich &amp; Kalkulation“. Rechne erst selbst und kontrolliere dann.</li>
      <li><strong>Quiz und Karteikarten:</strong> Der Reiter „Quiz“ auf dieser Seite sammelt alle Fragen mit AP1-Bezug aus allen Lernfeldern. Im Modus „Prüfung“ läuft eine Uhr mit.</li>
      <li><strong>Probeklausur:</strong> Bearbeite sie wie die echte Prüfung – 90-Minuten-Timer starten, auf Papier lösen, danach Musterlösung aufdecken und dich ehrlich selbst bewerten. Das Portal rechnet deine Punkte in die IHK-Note um.</li>
    </ol>
    <div class="callout beispiel"><strong>Lernplan-Vorschlag bis zum 24.02.2027 (22 Wochen):</strong><br>
      <strong>Wochen 1–10 (bis Ende November):</strong> pro Woche drei bis vier Bereiche der Checkliste – Lernzettel lesen, Übungen rechnen, Punkte abhaken.<br>
      <strong>Wochen 11–17 (Dezember bis Mitte Januar):</strong> Rechen- und Zeichentraining (Netzplan, Nutzwertanalyse, Subnetting, Datenmengen, Schreibtischtest, ER-Modell, UML) und erste Probeklausur mit Zeitlimit.<br>
      <strong>Wochen 18–22 (bis zur Prüfung):</strong> jede Woche eine vollständige Prüfung unter echten Bedingungen, Lücken über den Filter „Offen“ schließen, täglich 15 Minuten Karteikarten.</div>

    <h5>Was ist unsicher? Bitte selbst prüfen</h5>
    <ul>
      <li><strong>Dein Prüfungstermin und die Anmeldefrist:</strong> legt die IHK Flensburg fest – Einladung abwarten bzw. im Betrieb nachfragen (Service-Center der IHK Flensburg: 0461 806-806).</li>
      <li><strong>Weitere Hilfsmittel</strong> außer dem Taschenrechner (z. B. Wörterbuch, Bleistift für Zeichnungen): nicht offiziell für die IT-Berufe veröffentlicht – siehe Einladung und Deckblatt.</li>
      <li><strong>Beginn 08:00 Uhr</strong> ist üblich, verbindlich ist die Einladung.</li>
      <li><strong>BPMN:</strong> Laut Katalog-Vorwort neu in den IT-Katalogen, im AP1-Themenkatalog aber nicht ausdrücklich genannt. Die Grundsymbole zu kennen schadet nicht, weil Notationen im Belegsatz stehen können.</li>
      <li><strong>Ergebnisse:</strong> erfahrungsgemäß etwa 6–8 Wochen nach dem Termin, bei der IHK Flensburg nicht offiziell angegeben.</li>
      <li><strong>Folgefehler:</strong> Meist wird ein falsches Zwischenergebnis nicht doppelt bestraft, wenn du damit richtig weiterrechnest – das ist ein Erfahrungswert, keine Regel. Deshalb immer den Rechenweg aufschreiben.</li>
    </ul>
  `,

  areas: [
    /* ---------- Fragenkomplex 01: Arbeitsaufgaben planen, vorbereiten und durchführen ---------- */
    { id: "pm", title: "01.01 Projektmanagement: Merkmale, Planung, Vorgehensmodelle, Team", lf: ["lf01", "lf05", "lf06"],
      items: [
        { id: "ap1-pm-1", text: "Ich kann die Merkmale eines Projekts aufzählen (einmalig, klares Ziel, befristet, begrenzte Ressourcen, neuartig/komplex, eigene Projektorganisation, Risiko) und an einem Fallbeispiel begründen, ob ein Vorhaben ein Projekt ist.", ref: "lf01/projekt-praesentation" },
        { id: "ap1-pm-2", text: "Ich kann für ein IT-Vorhaben (z. B. den Rollout von 20 Arbeitsplätzen) einen Projektstrukturplan mit Teilaufgaben und Arbeitspaketen aufstellen.", ref: "lf12/psp-zeitplanung" },
        { id: "ap1-pm-3", text: "Ich kann aus einer Vorgangsliste mit Dauer und Vorgängern einen Netzplan zeichnen und ihn vollständig vorwärts (FEZ = FAZ + Dauer; FAZ = größter FEZ der Vorgänger) und rückwärts (SEZ = kleinster SAZ der Nachfolger; SAZ = SEZ − Dauer) durchrechnen.", hot: true, ref: "lf06/netzplan-gantt" },
        { id: "ap1-pm-4", text: "Ich kann Gesamtpuffer (GP = SAZ − FAZ) und freien Puffer (FP = kleinster FAZ der Nachfolger − eigener FEZ) berechnen, den kritischen Pfad (alle Vorgänge mit GP = 0) und die Projektdauer angeben und erklären, was eine Verzögerung auf einem kritischen bzw. unkritischen Vorgang bewirkt.", hot: true, ref: "lf06/netzplan-gantt" },
        { id: "ap1-pm-5", text: "Ich kann in einem fertig ausgefüllten Netzplan Rechenfehler (z. B. falscher SAZ, SEZ oder Puffer) aufspüren und korrigieren.", hot: true, ref: "lf06/netzplan-gantt" },
        { id: "ap1-pm-6", text: "Ich kann ein Gantt-Diagramm lesen und zeichnen (Balken, Abhängigkeiten, Meilenstein als Raute, Puffer) und Vor- und Nachteile gegenüber dem Netzplan nennen.", ref: "lf06/netzplan-gantt" },
        { id: "ap1-pm-7", text: "Ich kann aus einer Projektdauer in Arbeitstagen unter Beachtung von Wochenenden und Feiertagen den Endtermin im Kalender bestimmen und rückwärts den spätesten Starttermin ermitteln.", ref: "lf12/psp-zeitplanung" },
        { id: "ap1-pm-8", text: "Ich kann bei drohendem Terminverzug Gegenmaßnahmen vorschlagen (Puffer nutzen, Vorgänge parallelisieren, kritische Vorgänge mit zusätzlichen Ressourcen verkürzen, Umfang reduzieren, Fremdvergabe, neuen Termin verhandeln) und ihre Folgen für Kosten und Qualität abwägen.", ref: "lf06/netzplan-gantt" },
        { id: "ap1-pm-9", text: "Ich kann prüfen, ob ein Ziel SMART formuliert ist (spezifisch, messbar, akzeptiert/attraktiv, realistisch, terminiert), und ein unklares Ziel in ein SMART-Ziel umschreiben.", ref: "lf12/projekt-grundlagen" },
        { id: "ap1-pm-10", text: "Ich kann Meilensteine als überprüfbare Ereignisse ohne Dauer festlegen und erklären, wie sie bei der Projektsteuerung helfen.", ref: "lf12/psp-zeitplanung" },
        { id: "ap1-pm-11", text: "Ich kann die Phasen des Wasserfallmodells (Anforderungsanalyse, Entwurf, Umsetzung, Test, Einführung/Betrieb) nennen und seine Stärke (gut planbar) und Schwäche (unflexibel bei Änderungen) erklären.", ref: "lf12/vorgehensmodelle" },
        { id: "ap1-pm-12", text: "Ich kann Scrum mit Rollen (Product Owner, Scrum Master, Developer), Artefakten (Product Backlog, Sprint Backlog, Inkrement) und Events (Sprint, Sprint Planning, Daily Scrum, Sprint Review, Retrospektive) beschreiben und für ein Szenario begründet zwischen Scrum und Wasserfall entscheiden.", ref: "lf12/vorgehensmodelle" },
        { id: "ap1-pm-13", text: "Ich kann die Teamphasen nach Tuckman (Forming, Storming, Norming, Performing, Adjourning) an typischem Verhalten erkennen und passende Maßnahmen der Projektleitung nennen.", ref: "kommunikation/team" },
        { id: "ap1-pm-14", text: "Ich kann Methoden der Reflexion (Feedbackregeln, Retrospektive, Lessons Learned) beschreiben und erklären, wie sie Folgeprojekte verbessern.", ref: "lf12/projektabschluss" }
      ] },
    { id: "machbarkeit", title: "01.02 Machbarkeit und Wirtschaftlichkeit von Projekten", lf: ["lf01", "lf02"],
      items: [
        { id: "ap1-mw-1", text: "Ich kann die Machbarkeit eines Vorhabens prüfen: Kosten zusammenrechnen, mit dem Budget vergleichen und eine begründete Aussage treffen – auch zur technischen, personellen und zeitlichen Machbarkeit.", ref: "lf01/machbarkeit-kalkulation" },
        { id: "ap1-mw-2", text: "Ich kann eine Vorkalkulation aufstellen (Personalkosten = Stunden × Stundensatz, Sachkosten, Gemeinkostenzuschlag, ggf. Gewinnzuschlag und Umsatzsteuer).", hot: true, ref: "lf01/machbarkeit-kalkulation" },
        { id: "ap1-mw-3", text: "Ich kann eine Nachkalkulation mit Ist-Werten erstellen, die Abweichung zur Vorkalkulation in Euro und in Prozent berechnen und mögliche Ursachen nennen.", ref: "lf01/machbarkeit-kalkulation" },
        { id: "ap1-mw-4", text: "Ich kann Stundensätze und Kosten von Dienstleistungen berechnen (z. B. Hotline mit Grundgebühr und Minutenpreis, Technikereinsatz mit Anfahrtspauschale).", hot: true, ref: "lf01/machbarkeit-kalkulation" },
        { id: "ap1-mw-5", text: "Ich kann die Stakeholder eines IT-Projekts ermitteln, sie nach Einfluss und Interesse einordnen (Stakeholder-Matrix) und daraus Maßnahmen für den Umgang mit ihnen ableiten.", ref: "lf12/anforderungsanalyse" },
        { id: "ap1-mw-6", text: "Ich kann eine Risikoanalyse durchführen: Risiken sammeln, mit Eintrittswahrscheinlichkeit × Schadenshöhe bewerten und eine Strategie zuordnen (vermeiden, vermindern, übertragen, akzeptieren).", ref: "lf12/risikomanagement" }
      ] },
    { id: "auftrag", title: "01.03 Aufträge im Geschäftsprozess: Kommunikation, Störungen, Tickets, Support-Level, KI", lf: ["lf06"],
      items: [
        { id: "ap1-ab-1", text: "Ich kann die Kommunikation mit Kundinnen und Kunden während eines Auftrags passend gestalten (Rückfragen, Terminabsprachen, Statusmeldungen, sachliche E-Mails).", ref: "kommunikation/kundengespraech" },
        { id: "ap1-ab-2", text: "Ich kann Incident (Störung schnell beheben, ggf. mit Workaround) und Problem (Ursache finden und dauerhaft beseitigen) unterscheiden und den Ablauf einer Störungsbearbeitung beschreiben (erfassen, klassifizieren, priorisieren, diagnostizieren, lösen, dokumentieren, schließen).", ref: "lf06/incident" },
        { id: "ap1-ab-3", text: "Ich kann die Priorität eines Tickets mit einer Prioritätsmatrix aus Auswirkung und Dringlichkeit bestimmen.", ref: "lf06/incident" },
        { id: "ap1-ab-4", text: "Ich kann erklären, wozu ein Ticketsystem dient (Nachvollziehbarkeit, Status wie neu/in Bearbeitung/wartend/gelöst/geschlossen, SLA-Überwachung, Auswertungen, Wissensdatenbank).", ref: "lf06/incident" },
        { id: "ap1-ab-5", text: "Ich kann 1st-, 2nd- und 3rd-Level-Support abgrenzen (Annahme und Standardlösung – Fachspezialisten – Hersteller bzw. Entwicklung) und entscheiden, wann funktional und wann hierarchisch eskaliert wird.", ref: "lf06/service-desk" },
        { id: "ap1-ab-6", text: "Ich kann beschreiben, wie KI den Support unterstützt (Chatbot, automatische Ticket-Kategorisierung, Wissenssuche, Antwortvorschläge), und Nutzen, Kosten und Risiken abwägen (Halluzinationen, Datenschutz bei personenbezogenen Daten, Verantwortung, Akzeptanz).", hot: true, ref: "lf06/service-desk" }
      ] },
    /* ---------- Fragenkomplex 02: Informieren und Beraten von Kunden ---------- */
    { id: "markt", title: "02.01 Marktsituationen bewerten", lf: ["lf01", "lf02"],
      items: [
        { id: "ap1-mk-1", text: "Ich kann Marktformen nach der Zahl der Anbieter und Nachfrager einordnen (Monopol, Oligopol, Polypol) und an IT-Beispielen erklären, wie sie Preis und Verhandlungsmacht beeinflussen.", ref: "lf01/markt-wettbewerb" },
        { id: "ap1-mk-2", text: "Ich kann Käufer- und Verkäufermarkt unterscheiden und an Marktsignalen erkennen (Überangebot oder Knappheit, z. B. bei Grafikchips oder Arbeitsspeicher).", ref: "lf01/markt-wettbewerb" },
        { id: "ap1-mk-3", text: "Ich kann Zielgruppen anhand von Kriterien festlegen und voneinander abgrenzen (privat/gewerblich, Branche, Unternehmensgröße, Bedarf, Budget, IT-Kenntnisse).", ref: "lf01/markt-wettbewerb" },
        { id: "ap1-mk-4", text: "Ich kann Angebote quantitativ (Preis, Lieferzeit, Konditionen, Folgekosten) und qualitativ (Service, Zuverlässigkeit, Garantie, Nachhaltigkeit) bewerten und eine Bezugskalkulation rechnen (Listenpreis − Rabatt = Zieleinkaufspreis − Skonto = Bareinkaufspreis + Bezugskosten = Bezugspreis).", ref: "lf02/angebotsvergleich" }
      ] },
    { id: "bedarf", title: "02.02 Zielgruppengerechte Bedarfsanalyse", lf: ["lf02"],
      items: [
        { id: "ap1-bd-1", text: "Ich kann eine eigene Datenerhebung planen (Befragung, Interview, Fragebogen, Beobachtung) und dafür passende offene und geschlossene Fragen formulieren.", ref: "lf12/anforderungsanalyse" },
        { id: "ap1-bd-2", text: "Ich kann vorhandene Daten auswerten (Inventarliste, Ticketstatistik, Nutzerprofile, Anforderungen an Büroarbeitsplätze) und daraus Anforderungen ableiten.", ref: "lf02/kundenbedarf" },
        { id: "ap1-bd-3", text: "Ich kann Anforderungen gliedern (funktional/nicht funktional, Muss-/Kann-Kriterien) und in einen Anforderungskatalog übernehmen.", ref: "lf02/kundenbedarf" },
        { id: "ap1-bd-4", text: "Ich kann aus einem Kundenszenario die passende Ausstattung ableiten und begründen (z. B. Notebook oder Tablet für Telearbeit, Anzahl der Monitore, Peripherie).", hot: true, ref: "lf02/kundenbedarf" }
      ] },
    { id: "beratung", title: "02.03 Kundenberatung und Kommunikation", lf: ["lf01", "lf02", "lf06", "kommunikation", "englisch"],
      items: [
        { id: "ap1-kb-1", text: "Ich kann eine Nachricht mit dem Vier-Seiten-Modell nach Schulz von Thun in Sachinhalt, Selbstkundgabe, Beziehung und Appell zerlegen und daraus Missverständnisse erklären.", ref: "kommunikation/vier-seiten" },
        { id: "ap1-kb-2", text: "Ich kann das Sender-Empfänger-Modell (Codierung, Kanal, Decodierung, Rückmeldung, Störquellen) beschreiben und auf Gespräche mit Kunden anwenden.", ref: "kommunikation/grundlagen" },
        { id: "ap1-kb-3", text: "Ich kann ein Kundengespräch situationsgerecht führen (Ich-Botschaften, sachlich bleiben, Verständnis sichern, Einwände behandeln, Beschwerden deeskalieren).", ref: "kommunikation/kundengespraech" },
        { id: "ap1-kb-4", text: "Ich kann vom ermittelten Bedarf zu einem Angebot kommen und seine Bestandteile nennen (Leistungsbeschreibung, Preise, Liefer- und Zahlungsbedingungen, Gültigkeitsdauer).", ref: "kommunikation/kundengespraech" },
        { id: "ap1-kb-5", text: "Ich kann einen englischen Fachtext (Datenblatt, Hersteller-Mail, Auszug aus einem Handbuch) verstehen und die geforderten Informationen auf Deutsch wiedergeben oder erklären.", hot: true, ref: "englisch/pruefung-lesen" }
      ] },
    { id: "information", title: "02.04 Informationen aufbereiten, präsentieren und Quellen auswerten", lf: ["lf01", "lf02", "englisch"],
      items: [
        { id: "ap1-in-1", text: "Ich kann technische und kaufmännische Texte auf Deutsch und Englisch auswerten (Datenblätter, Angebote, Rechnungen, Handbücher) und die wichtigen Kennwerte herausziehen.", hot: true, ref: "englisch/datenblatt-manual" },
        { id: "ap1-in-2", text: "Ich kann gängige englische Fachbegriffe übersetzen und erklären (z. B. power consumption, throughput, latency, warranty, backward compatible, daisy chaining, heater, infrared/IR).", hot: true, ref: "englisch/vokabeln-hardware" },
        { id: "ap1-in-3", text: "Ich kann eine Präsentation zielgruppengerecht aufbauen (Einleitung – Hauptteil – Schluss, Kernbotschaft, Visualisierung, Folienregeln, Zeitplanung).", ref: "lf01/projekt-praesentation" },
        { id: "ap1-in-4", text: "Ich kann Quellen kritisch prüfen (Autor, Aktualität, Seriosität, Interessen), das Urheberrecht bei Bildern und Texten beachten und Quellen korrekt angeben.", ref: "kommunikation/praesentation" },
        { id: "ap1-in-5", text: "Ich kann eine kurze, sachliche Kundeninformation oder E-Mail schreiben (Betreff, Anrede, Kernaussage, Handlungsaufforderung, Gruß).", ref: "kommunikation/schriftlich" }
      ] },
    { id: "nwa", title: "02.05 Marketing unterstützen: Nutzwertanalyse und Vertriebswege", lf: ["lf02"],
      items: [
        { id: "ap1-nw-1", text: "Ich kann eine Nutzwertanalyse vollständig durchführen: Kriterien festlegen, Gewichtungen auf 100 % verteilen, Punkte je Alternative vergeben, gewichtete Summen berechnen und die Entscheidung begründen.", hot: true, ref: "lf02/angebotsvergleich" },
        { id: "ap1-nw-2", text: "Ich kann die Punkte einer Nutzwertanalyse selbst aus Datenblättern ableiten (z. B. schnellster Drucker 3 Punkte, langsamster 1 Punkt) und die Punkteskala nachvollziehbar erklären.", hot: true, ref: "lf12/wirtschaftlichkeit-entscheidung" },
        { id: "ap1-nw-3", text: "Ich kann Grenzen der Nutzwertanalyse nennen (subjektive Gewichtung und Punktvergabe, Scheingenauigkeit) und K.-o.-Kriterien vorab prüfen.", ref: "wiso/angebotsvergleich-nwa" },
        { id: "ap1-nw-4", text: "Ich kann direkten Vertrieb (eigener Außendienst, Onlineshop) und indirekten Vertrieb (Fachhandel, Systemhaus, Distributor) unterscheiden und Vor- und Nachteile für ein IT-Produkt nennen.", ref: "lf01/markt-wettbewerb" }
      ] },
    /* ---------- Fragenkomplex 03: Marktgängige IT-Systeme und kundenspezifische Lösungen beurteilen ---------- */
    { id: "hwsw", title: "03.01 Marktgängige Hard- und Software beurteilen", lf: ["lf02", "lf03", "lf07"],
      items: [
        { id: "ap1-hs-1", text: "Ich kann IT-Systeme nach funktionalen, ökonomischen und ökologischen Kriterien vergleichen (Ergonomie, Leistung, einmalige und laufende Kosten, Nutzungsdauer, Energiebedarf, Reparierbarkeit und Recycling).", ref: "lf02/energie-green-it" },
        { id: "ap1-hs-2", text: "Ich kann Aufgabe und Kenngrößen der Kernkomponenten erklären: CPU (Kerne, Threads, Takt, Cache, TDP), Mainboard (Sockel, Chipsatz, PCIe-Steckplätze, M.2), RAM (DDR4/DDR5, Dual-Channel, ECC), Massenspeicher, Netzteil (Nennleistung, 80-PLUS-Effizienz) und Grafikkarte.", hot: true, ref: "lf02/mainboard-cpu" },
        { id: "ap1-hs-3", text: "Ich kann Peripherie-Anschlüsse und ihre Symbole zuordnen und Kenndaten nennen: USB-A und USB-C (von USB 2.0 mit 480 Mbit/s bis USB4 mit 40 Gbit/s, Power Delivery), Thunderbolt, HDMI, DisplayPort (inkl. MST/Daisy Chaining) und RJ45.", hot: true, ref: "lf02/schnittstellen" },
        { id: "ap1-hs-4", text: "Ich kann Sensoren (z. B. für Temperatur, Bewegung, Helligkeit, Tür- und Fensterkontakt) und ihren Einsatz am Arbeitsplatz und im Gebäude beschreiben.", ref: "lf07/sensoren-aktoren" },
        { id: "ap1-hs-5", text: "Ich kann die Aufgaben von WLAN-Router, Switch, Gateway und Access Point unterscheiden und für einen Arbeitsplatz das passende Gerät auswählen.", ref: "lf03/osi-komponenten" },
        { id: "ap1-hs-6", text: "Ich kann Software einordnen: Standardsoftware (Office, Datenbanksystem, Browser), Branchensoftware (ERP, SCM, CRM), Systemsoftware (Betriebssystem, Treiber) und Entwicklungswerkzeuge (Compiler, Interpreter, virtuelle Maschine, Editor, Debugger).", ref: "lf02/betriebssysteme" },
        { id: "ap1-hs-7", text: "Ich kann Cloud-Angebote wie Software as a Service und Desktop as a Service erklären und Vor- und Nachteile abwägen (Kostenmodell, Skalierbarkeit, Anbieterabhängigkeit, Datenschutz, Internetanbindung).", ref: "lf02/betriebssysteme" },
        { id: "ap1-hs-8", text: "Ich kann KI-Software (z. B. generative Assistenten, Übersetzung, Bilderkennung) beschreiben und nach Einsatzzweck, Kosten, Datenschutz (Serverstandort, Nutzung der Eingaben als Trainingsdaten) und Zuverlässigkeit beurteilen.", hot: true, ref: "lf02/betriebssysteme" },
        { id: "ap1-hs-9", text: "Ich kann lokale virtuelle Desktops (VDI im eigenen Rechenzentrum) und Cloud-Desktops (DaaS) unterscheiden und erklären, warum dafür oft Thin Clients ausreichen.", ref: "lf10/virtualisierung" }
      ] },
    { id: "systeme", title: "03.02 Typische IT-Systeme und ihre Einsatzbereiche", lf: ["lf02", "lf03", "lf09"],
      items: [
        { id: "ap1-sy-1", text: "Ich kann Anforderungen an Kommunikationssysteme wie Videokonferenz- und Social-Media-Lösungen beschreiben (Bandbreite, Kamera und Headset, Datenschutz, Aufzeichnung).", ref: "kommunikation/team" },
        { id: "ap1-sy-2", text: "Ich kann Client-Server- und Peer-to-Peer-Netze vergleichen (zentrale Verwaltung, Sicherheit, Kosten, Skalierbarkeit).", ref: "lf03/netzwerk-grundlagen" },
        { id: "ap1-sy-3", text: "Ich kann erklären, was die Aufnahme eines Clients in eine Domäne bewirkt (zentrale Anmeldung, Gruppenrichtlinien, zentrale Rechteverwaltung) und welche Voraussetzungen nötig sind (DNS-Eintrag zeigt auf den Domain Controller, berechtigtes Konto, Netzwerkverbindung) – im Vergleich zur Arbeitsgruppe.", ref: "lf03/netzwerk-grundlagen" },
        { id: "ap1-sy-4", text: "Ich kann Einsatzmöglichkeiten von Smartphone und Tablet beschreiben und Anforderungen an ihre Verwaltung nennen (Updates, Gerätesperre, Fernlöschung).", ref: "lf11/endgeraete-mdm" },
        { id: "ap1-sy-5", text: "Ich kann die sieben Schichten des OSI-Modells nennen, Geräte (Hub, Switch, Router) und Protokolle (Ethernet, IP, TCP/UDP, DNS, HTTP) zuordnen und die Kapselung erklären.", hot: true, ref: "lf03/osi-komponenten" },
        { id: "ap1-sy-6", text: "Ich kann Aufbau und Aufgabe einer MAC-Adresse (48 Bit, Herstellerkennung OUI) sowie die Grundfunktion von Ethernet, IP und DNS erklären.", hot: true, ref: "lf09/mac-arp" }
      ] },
    { id: "leistung", title: "03.03 Leistungsfähigkeit und Energieeffizienz bestimmen", lf: ["lf02", "lf03"],
      items: [
        { id: "ap1-le-1", text: "Ich kann typische BIOS/UEFI-Einstellungen erklären (Bootreihenfolge, Secure Boot, TPM, Virtualisierung, Passwortschutz) und UEFI mit GPT von BIOS mit MBR abgrenzen.", ref: "lf02/mainboard-cpu" },
        { id: "ap1-le-2", text: "Ich kann HDD und SSD (SATA und NVMe) nach Zugriffszeit, Datenrate, IOPS, Robustheit, Lebensdauer und Preis je GiB vergleichen.", hot: true, ref: "lf02/ram-speicher" },
        { id: "ap1-le-3", text: "Ich kann die Dateisysteme FAT32, NTFS, APFS und ext4 vergleichen (maximale Dateigröße knapp 4 GiB bei FAT32, Rechte und Verschlüsselung bei NTFS, Journaling, Kompatibilität mit den Betriebssystemen).", ref: "lf02/ram-speicher" },
        { id: "ap1-le-4", text: "Ich kann Kenngrößen von Grafikkarte, Netzwerkkarte, Router/Gateway und Switch (Portanzahl, Durchsatz, PoE, managed/unmanaged) aus Datenblättern bewerten.", ref: "lf03/osi-komponenten" },
        { id: "ap1-le-5", text: "Ich kann Ethernet-Standards (100BASE-TX, 1000BASE-T, 10GBASE-T; Kabelkategorien Cat 5e/6/6A), Lichtwellenleiter und WLAN-Standards (Wi-Fi 4/5/6/6E/7 = IEEE 802.11n/ac/ax/ax im 6-GHz-Band/be, Frequenzbänder) nach Geschwindigkeit und Reichweite einordnen.", ref: "lf03/kupferkabel" },
        { id: "ap1-le-6", text: "Ich kann Möglichkeiten für barrierefreien Zugriff am Arbeitsplatz und auf Webseiten nennen (Kontrast, Schriftgröße und Zoom, Screenreader, Untertitel, Bedienung per Tastatur, Sprachsteuerung).", ref: "lf02/ergonomie" },
        { id: "ap1-le-7", text: "Ich kann Energie- und Umweltsiegel (EU-Energielabel, Energy Star, Blauer Engel, TCO Certified, 80 PLUS) erklären und bei der Geräteauswahl berücksichtigen.", ref: "lf02/energie-green-it" },
        { id: "ap1-le-8", text: "Ich kann den Speicherbedarf eines unkomprimierten Bildes berechnen (Breite × Höhe × Farbtiefe in Bit ÷ 8), in KiB, MiB oder GiB umrechnen und aus der Farbtiefe die Anzahl der Farben bestimmen (24 Bit → 2²⁴ = 16.777.216 Farben).", hot: true, ref: "lf02/datenmengen" },
        { id: "ap1-le-9", text: "Ich kann Datenmengen von Dokumenten, Videos und Videoüberwachung berechnen (Datenrate × Zeit, Anzahl × Größe) und sicher zwischen KB/KiB, MB/MiB, GB/GiB und TB/TiB umrechnen.", hot: true, ref: "lf02/datenmengen" },
        { id: "ap1-le-10", text: "Ich kann Übertragungszeiten berechnen (Datenmenge in Bit ÷ Datenrate in bit/s; Byte × 8; Datenrate dezimal, Datenmenge binär) und das Ergebnis in Minuten und Sekunden angeben.", hot: true, ref: "lf02/datenmengen" },
        { id: "ap1-le-11", text: "Ich kann elektrische Größen berechnen: P = U × I bzw. I = P ÷ U (z. B. USB 5 V × 2,4 A = 12 W), Wirkungsgrad η = P_ab ÷ P_zu (Netzteil gibt 450 W ab, η = 0,9 → Aufnahme 500 W), Energie W = P × t und Energiekosten = kWh × Preis.", hot: true, ref: "lf03/leistung-energie" },
        { id: "ap1-le-12", text: "Ich kann PoE-Standards einordnen (IEEE 802.3af: 15,4 W am Switch-Port bzw. 12,95 W am Gerät; 802.3at: 30 W bzw. 25,5 W; 802.3bt: 60 W oder 90 W am Port) und prüfen, ob das PoE-Budget eines Switches für mehrere Endgeräte reicht.", hot: true, ref: "lf03/leistung-energie" }
      ] },
    { id: "wirtschaftlichkeit", title: "03.04 Wirtschaftlichkeit von IT-Systemen", lf: ["lf02"],
      items: [
        { id: "ap1-wi-1", text: "Ich kann Anschaffungs- und Betriebskosten (Strom, Wartung, Support, Verbrauchsmaterial, Lizenzen) über die Nutzungsdauer zu Gesamtkosten (TCO) bzw. monatlichen Kosten zusammenfassen.", hot: true, ref: "lf02/beschaffung" },
        { id: "ap1-wi-2", text: "Ich kann fixe und variable Kosten unterscheiden, Kostenfunktionen aufstellen und die Menge berechnen, ab der ein Tarif günstiger wird (kritische Menge).", ref: "lf02/angebotsvergleich" },
        { id: "ap1-wi-3", text: "Ich kann Lizenzkosten je nach Modell berechnen (Einmalkauf, Abo pro Nutzer oder Gerät und Monat, Staffelpreise).", ref: "lf02/betriebssysteme" },
        { id: "ap1-wi-4", text: "Ich kann Finanzierungskosten mit einfacher Zinsrechnung bestimmen (Zinsen = Kapital × Zinssatz × Zeit) und in einen Kostenvergleich einbeziehen." },
        { id: "ap1-wi-5", text: "Ich kann Kauf, Kredit, Miete, Leasing und Pay-per-Use rechnerisch vergleichen und qualitativ bewerten (Liquidität, Eigentum, Service, Flexibilität, Bilanz).", hot: true, ref: "lf02/beschaffung" },
        { id: "ap1-wi-6", text: "Ich kann die Amortisationsdauer berechnen (Mehrinvestition ÷ jährliche Einsparung, z. B. beim Austausch gegen stromsparende Geräte).", hot: true, ref: "lf02/energie-green-it" },
        { id: "ap1-wi-7", text: "Ich kann Preis-Leistungs-Kennzahlen bilden (z. B. € je GiB, € je Seite, € je Leistungspunkt) und damit Angebote vergleichen.", ref: "lf02/angebotsvergleich" },
        { id: "ap1-wi-8", text: "Ich kann einen quantitativen und qualitativen Angebotsvergleich mit Rabatt, Skonto, Bezugskosten und Umsatzsteuer durchführen und eine Rechnung auf Rechenfehler prüfen.", hot: true, ref: "lf02/angebotsvergleich" },
        { id: "ap1-wi-9", text: "Ich kann den Begriff Wertschöpfung erklären und beschreiben, welchen Beitrag eine IT-Lösung zur Wertschöpfungskette eines Unternehmens leistet.", ref: "lf01/geschaeftsprozesse" }
      ] },
    /* ---------- Fragenkomplex 04: IT-Lösungen entwickeln, erstellen und betreuen ---------- */
    { id: "konzeption", title: "04.01 IT-Systeme konzipieren, konfigurieren, testen und dokumentieren", lf: ["lf02", "lf03", "lf09"],
      items: [
        { id: "ap1-ko-1", text: "Ich kann die Ergebnisse einer Bedarfsanalyse in einen Anforderungskatalog für einen Arbeitsplatz übertragen.", ref: "lf02/kundenbedarf" },
        { id: "ap1-ko-2", text: "Ich kann Lastenheft und Pflichtenheft nach Zweck, Verfasser (Auftraggeber bzw. Auftragnehmer) und Inhalt (Was und wofür? bzw. Wie und womit?) unterscheiden und typische Gliederungspunkte nennen.", hot: true, ref: "lf02/kundenbedarf" },
        { id: "ap1-ko-3", text: "Ich kann die Installation eines Betriebssystems planen und dokumentieren (Partitionierung mit GPT oder MBR, Formatierung, Treiber, Updates, Benutzerkonten).", ref: "lf02/betriebssysteme" },
        { id: "ap1-ko-4", text: "Ich kann einen Client mit IPv4 konfigurieren (IP-Adresse, Subnetzmaske bzw. CIDR-Präfix, Standardgateway, DNS-Server) und zu einer Adresse Netzadresse, Broadcastadresse, erste und letzte Hostadresse sowie die Anzahl der Hosts (2ⁿ − 2) berechnen.", hot: true, ref: "lf03/ipv4-client" },
        { id: "ap1-ko-5", text: "Ich kann private IPv4-Bereiche (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) und APIPA-Adressen (169.254.0.0/16) erkennen und beurteilen, ob eine Adresse in einem bestimmten Netz gültig ist.", hot: true, ref: "lf03/ipv4-client" },
        { id: "ap1-ko-6", text: "Ich kann IPv6-Adressen kürzen und wieder ausschreiben (führende Nullen weglassen, :: genau einmal), Präfix (/64), Adressarten (Link-Local fe80::/10, Global Unicast 2000::/3, Unique Local fc00::/7) und SLAAC erklären sowie zwei Unterschiede zu IPv4 nennen.", hot: true, ref: "lf03/ipv6" },
        { id: "ap1-ko-7", text: "Ich kann einen Remotedesktop-Zugang einrichten und absichern (Freigabe, Benutzerrechte, Port 3389, Authentifizierung auf Netzwerkebene, Zugriff nur über VPN).", ref: "lf03/fernzugriff" },
        { id: "ap1-ko-8", text: "Ich kann die Installation von KI-Software planen (lokal oder in der Cloud, Hardwarebedarf, Datenschutzeinstellungen, Lizenz) und die Konfiguration dokumentieren.", ref: "lf02/betriebssysteme" }
      ] },
    { id: "hardware", title: "04.02 Hardware bedarfsgerecht auswählen", lf: ["lf02"],
      items: [
        { id: "ap1-hw-1", text: "Ich kann Geräteklassen (Desktop-PC, Notebook, All-in-One, Thin Client, Tablet, Smartphone) nach Mobilität, Leistung, Kosten, Wartung und Sicherheit vergleichen und für einen Einsatzfall begründet auswählen.", hot: true, ref: "lf02/kundenbedarf" },
        { id: "ap1-hw-2", text: "Ich kann mobile und stationäre Arbeitsplatzsysteme (PC, Terminal bzw. Thin Client) sowie die Anbindung per LAN oder WLAN für ein Szenario bewerten.", ref: "lf02/kundenbedarf" },
        { id: "ap1-hw-3", text: "Ich kann Barrierefreiheit durch Zusatzhardware herstellen (größerer Monitor, Tastatur mit großen Tasten, Lautsprecher und Mikrofon für Sprachausgabe und -eingabe, Braillezeile) und die Auswahl begründen.", ref: "lf02/ergonomie" },
        { id: "ap1-hw-4", text: "Ich kann einen Bildschirmarbeitsplatz ergonomisch bewerten und Verbesserungen vorschlagen (Höhe und Abstand des Monitors, blendfreie Aufstellung, Stuhl und Tisch, Tastatur, Beleuchtung, Pausen).", hot: true, ref: "lf02/ergonomie" },
        { id: "ap1-hw-5", text: "Ich kann Datenblattwerte mit den Anforderungen abgleichen und fehlende oder überdimensionierte Komponenten erkennen.", ref: "lf02/kundenbedarf" }
      ] },
    { id: "software", title: "04.03 Software bedarfsgerecht auswählen", lf: ["lf02", "lf05"],
      items: [
        { id: "ap1-sw-1", text: "Ich kann Betriebssysteme nach Einsatzzweck (Client, Server, mobil) auswählen und Grundfunktionen erklären (Dateiverwaltung, Freigaben einrichten und berechtigen).", ref: "lf02/betriebssysteme" },
        { id: "ap1-sw-2", text: "Ich kann Bestandteile und Vorteile einer integrierten Entwicklungsumgebung nennen (Editor, Compiler bzw. Interpreter, Debugger, Versionsverwaltung).", ref: "lf05/sprachen" },
        { id: "ap1-sw-3", text: "Ich kann Standard- und Individualsoftware nach Kosten, Anpassbarkeit, Einführungszeit und Support vergleichen.", ref: "lf05/sprachen" },
        { id: "ap1-sw-4", text: "Ich kann Open-Source- und proprietäre Software vergleichen (Lizenzkosten, Einsicht in den Quellcode, Support, Herstellerabhängigkeit, Sicherheit) und für ein Szenario eine Empfehlung geben.", hot: true, ref: "lf04/urheberrecht-lizenzen" },
        { id: "ap1-sw-5", text: "Ich kann Software nach Kriterien wie Anpassbarkeit, Wartbarkeit, Schnittstellen, Kompatibilität und Herstellersupport bewerten.", ref: "lf02/betriebssysteme" },
        { id: "ap1-sw-6", text: "Ich kann für einen Anwendungsfall eine KI-Software auswählen und die Wahl mit Datenschutz, Kosten und Qualität der Ergebnisse begründen.", ref: "lf02/betriebssysteme" }
      ] },
    { id: "lizenzen", title: "04.04 Urheberrecht und Lizenzmodelle", lf: ["lf02", "lf04"],
      items: [
        { id: "ap1-li-1", text: "Ich kann Grundlagen des Urheberrechts bei Software erklären (Schutz entsteht automatisch, Urheberrecht vs. Nutzungsrechte, erlaubte Sicherungskopie, Verbot unerlaubter Vervielfältigung).", ref: "lf04/urheberrecht-lizenzen" },
        { id: "ap1-li-2", text: "Ich kann Lizenzarten unterscheiden: EULA, OEM-Lizenz (an ein Gerät gebunden), Volumenlizenz, GNU GPL (Copyleft), Freeware und Shareware.", hot: true, ref: "lf04/urheberrecht-lizenzen" },
        { id: "ap1-li-3", text: "Ich kann Pay-per-Use- und Abo-Modelle mit Kaufmodellen vergleichen und die Kosten über eine Laufzeit berechnen.", ref: "lf02/beschaffung" },
        { id: "ap1-li-4", text: "Ich kann Folgen eines Lizenzverstoßes nennen (Unterlassung, Schadensersatz, Nachlizenzierung, Imageschaden).", ref: "lf04/urheberrecht-lizenzen" }
      ] },
    { id: "installation", title: "04.05 Installation, Konfiguration, Kommandozeile und Netzwerkverbindungen", lf: ["lf02", "lf03", "lf09"],
      items: [
        { id: "ap1-ik-1", text: "Ich kann Hardware fachgerecht einbauen und in Betrieb nehmen (ESD-Schutz, sinnvolle Reihenfolge, Treiber, Funktionstest).", ref: "lf02/gehaeuse-netzteil" },
        { id: "ap1-ik-2", text: "Ich kann ein Betriebssystem installieren und einrichten (Benutzer, Updates, Energieoptionen) und Anwendungen an Kundenwünsche anpassen (Einstellungen, Vorlagen, Add-ins, Standardwerte, Autostart).", ref: "lf02/betriebssysteme" },
        { id: "ap1-ik-3", text: "Ich kann den Aufbau von Konsolenbefehlen (Befehl, Optionen/Parameter, Argumente) unter Windows und Linux lesen und anwenden.", ref: "lf10/linux" },
        { id: "ap1-ik-4", text: "Ich kann Dateioperationen auf der Konsole ausführen: dir/ls, mkdir, del/rm, copy/cp, chmod (rwx, oktal z. B. 754) und alias.", ref: "lf10/linux-rechte" },
        { id: "ap1-ik-5", text: "Ich kann Diagnosebefehle einsetzen und ihre Ausgaben deuten: ipconfig /all, ifconfig bzw. ip a und ip r, arp -a, ping, tracert/traceroute und nslookup.", hot: true, ref: "lf03/ipv4-client" },
        { id: "ap1-ik-6", text: "Ich kann aus Befehlsausgaben Fehlerursachen ableiten: 169.254.x.x = kein DHCP-Server erreicht; Ping auf die IP-Adresse klappt, auf den Namen nicht = DNS-Problem; Zeitüberschreitung = Firewall, Gateway oder Gerät aus; hohe Antwortzeiten = Überlast oder WLAN-Störung.", hot: true, ref: "lf03/ipv4-client" },
        { id: "ap1-ik-7", text: "Ich kann DHCP erklären (DORA: Discover, Offer, Request, Acknowledge; Lease; Reservierung) und typische DHCP-Probleme beheben.", hot: true, ref: "lf09/dhcp-dns" },
        { id: "ap1-ik-8", text: "Ich kann einen WLAN-Zugang mit Pre-Shared Key (WPA2/WPA3-Personal) und mit Enterprise-Anmeldung (802.1X mit RADIUS) unterscheiden und einrichten.", ref: "lf03/wlan" },
        { id: "ap1-ik-9", text: "Ich kann einen VPN-Client für mobiles Arbeiten einrichten und erklären, warum ein VPN das Homeoffice absichert (verschlüsselter Tunnel, Authentifizierung).", hot: true, ref: "lf03/fernzugriff" },
        { id: "ap1-ik-10", text: "Ich kann Netzwerkverbindungen systematisch von Schicht 1 aufwärts testen und dazu ein Testprotokoll führen.", ref: "lf03/ipv4-client" }
      ] },
    { id: "sprachen", title: "04.06 Programmiersprachen: Merkmale kennen und unterscheiden", lf: ["lf05"],
      items: [
        { id: "ap1-ps-1", text: "Ich kann Compiler, Linker und Interpreter unterscheiden (auch Bytecode und virtuelle Maschine) und ihre Vor- und Nachteile bei Geschwindigkeit, Portabilität und Fehlersuche nennen.", hot: true, ref: "lf05/sprachen" },
        { id: "ap1-ps-2", text: "Ich kann prozedurale und objektorientierte Programmierung gegenüberstellen und jeweils Einsatzfälle nennen.", ref: "lf05/sprachen" },
        { id: "ap1-ps-3", text: "Ich kann Variablen, Datentypen (Integer, Float/Double, Boolean, Char, String) und Datenstrukturen (Array, Liste) passend zu einer Aufgabe auswählen.", ref: "lf05/python-basics" },
        { id: "ap1-ps-4", text: "Ich kann Kontrollstrukturen einsetzen: einfache und mehrfache Verzweigung, kopf- und fußgesteuerte Schleife, Zählschleife.", ref: "lf05/kontrollstrukturen" },
        { id: "ap1-ps-5", text: "Ich kann Prozeduren und Funktionen mit Parametern und Rückgabewert erklären und ihren Nutzen nennen (Wiederverwendung, Übersichtlichkeit, Testbarkeit).", ref: "lf05/funktionen-module" },
        { id: "ap1-ps-6", text: "Ich kann Klasse, Objekt, Attribut, Methode, Konstruktor und Sichtbarkeit (public, private, protected) an einem Beispiel erklären – Vererbung gehört seit 2025 nicht mehr zur AP1.", ref: "lf05/oop" },
        { id: "ap1-ps-7", text: "Ich kann Bibliotheken und Frameworks unterscheiden und Vorteile ihres Einsatzes nennen.", ref: "lf05/sprachen" },
        { id: "ap1-ps-8", text: "Ich kann Skriptsprachen (Bash, PowerShell, Python) einordnen und typische Administrationsaufgaben nennen, die man damit automatisiert.", ref: "lf05/sprachen" },
        { id: "ap1-ps-9", text: "Ich kann Syntaxfehler, Laufzeitfehler und logische Fehler unterscheiden und Debugging-Techniken beschreiben (Haltepunkte, Einzelschrittmodus, Variablen beobachten).", ref: "lf05/fehler-debugging" },
        { id: "ap1-ps-10", text: "Ich kann für ein Szenario eine Programmiersprache begründet auswählen (Plattform, Performance, vorhandenes Know-how, Bibliotheken, statische oder dynamische Webentwicklung).", hot: true, ref: "lf05/sprachen" }
      ] },
    { id: "werkzeuge", title: "04.07 Programmierwerkzeuge: Pseudocode, Schreibtischtest, UML, Bildschirmmasken", lf: ["lf05", "lf06"],
      items: [
        { id: "ap1-pw-1", text: "Ich kann einen Algorithmus in Pseudocode mit Verzweigungen und Schleifen formulieren und die Struktur durch Einrückung sichtbar machen.", ref: "lf05/algorithmen" },
        { id: "ap1-pw-2", text: "Ich kann für gegebenen Pseudocode einen Schreibtischtest durchführen (Tabelle mit einer Spalte je Variable, jede Zuweisung und jeden Schleifendurchlauf eintragen, auch bei verschachtelten Verzweigungen) und die Endwerte bzw. die Ausgabe angeben.", hot: true, ref: "lf05/kontrollstrukturen" },
        { id: "ap1-pw-3", text: "Ich kann Fehler in gegebenem Quellcode finden und korrigieren (falsche Initialisierung, Off-by-one-Fehler an Grenzen, falscher Vergleichsoperator, Endlosschleife).", hot: true, ref: "lf05/fehler-debugging" },
        { id: "ap1-pw-4", text: "Ich kann gegebenen Code in eigenen Worten erklären (was er tut und welches Ergebnis er liefert).", hot: true, ref: "lf05/algorithmen" },
        { id: "ap1-pw-5", text: "Ich kann ein UML-Anwendungsfalldiagramm lesen und ergänzen (Akteur, Anwendungsfall, Systemgrenze, «include», «extend» mit Erweiterungspunkt, Generalisierung).", ref: "lf06/bpmn-uml" },
        { id: "ap1-pw-6", text: "Ich kann ein UML-Klassendiagramm lesen und erstellen (Klassenname, Attribute und Methoden mit Datentyp, Sichtbarkeit + − # ~, Assoziation mit Multiplizitäten).", hot: true, ref: "lf05/uml" },
        { id: "ap1-pw-7", text: "Ich kann ein UML-Aktivitätsdiagramm aus einer Textbeschreibung zeichnen (Start- und Endknoten, Aktionen, Verzweigung mit Bedingungen, Zusammenführung, Gabelung und Synchronisation, Schwimmbahnen).", hot: true, ref: "lf05/uml" },
        { id: "ap1-pw-8", text: "Ich kann eine Bildschirmmaske entwerfen und begründen (Softwareergonomie nach DIN EN ISO 9241-110, Corporate Identity, Barrierefreiheit wie Kontrast und Tastaturbedienung).", ref: "lf05/text-system-gui" }
      ] },
    { id: "erm", title: "04.08 Relationale Datenbanken: ER-Modell", lf: ["lf05", "lf08"],
      items: [
        { id: "ap1-er-1", text: "Ich kann Entität, Entitätstyp, Attribut, Schlüsselattribut und Beziehung erklären und in einem ER-Diagramm darstellen.", hot: true, ref: "lf05/daten-db" },
        { id: "ap1-er-2", text: "Ich kann Kardinalitäten (1:1, 1:n, n:m) aus einer Textbeschreibung ableiten und eintragen.", hot: true, ref: "lf08/erm" },
        { id: "ap1-er-3", text: "Ich kann ein vorgegebenes ER-Modell fachlich ergänzen oder korrigieren (fehlende Entität, falsche Kardinalität).", hot: true, ref: "lf08/erm" },
        { id: "ap1-er-4", text: "Ich kann ein ER-Modell in Tabellen überführen (Primärschlüssel, Fremdschlüssel, Zwischentabelle bei n:m) und Datensätze den richtigen Tabellen zuordnen.", ref: "lf08/relationenmodell" },
        { id: "ap1-er-5", text: "Ich kann für Attribute passende Datentypen wählen (Ganzzahl, Dezimalzahl/Währung, Text mit fester oder variabler Länge, Datum, Wahrheitswert) – SQL wird in der AP1 nicht mehr geprüft.", ref: "lf05/daten-db" }
      ] },

    /* ---------- Fragenkomplex 05: Qualitätssichernde Maßnahmen ---------- */
    { id: "qm-grundlagen", title: "05.01 Grundbegriffe des Qualitätsmanagements", lf: ["lf05", "lf06"],
      items: [
        { id: "ap1-qg-1", text: "Ich kann Qualität, Qualitätssicherung und Qualitätsmanagement voneinander abgrenzen.", ref: "lf06/optimierung" },
        { id: "ap1-qg-2", text: "Ich kann Zweck und Grundsätze eines betrieblichen QM-Systems erklären (Kunden- und Prozessorientierung, dokumentierte Abläufe, kontinuierliche Verbesserung).", ref: "lf06/optimierung" },
        { id: "ap1-qg-3", text: "Ich kann die Bedeutung von QS-Normen grob beschreiben (z. B. ISO 9001 als Norm für Anforderungen an ein QM-System).", ref: "lf06/optimierung" },
        { id: "ap1-qg-4", text: "Ich kann Ablauf und Nutzen einer Zertifizierung erklären (Prüfung durch eine unabhängige Stelle, befristetes Zertifikat, regelmäßige Überwachung, Vertrauen der Kunden).", ref: "lf06/optimierung" }
      ] },
    { id: "qm-praxis", title: "05.02 Qualitätsmanagement im eigenen Arbeitsbereich", lf: ["lf03", "lf05", "lf06"],
      items: [
        { id: "ap1-qp-1", text: "Ich kann eine Qualitätsplanung durchführen: den Ist-Zustand ermitteln und messbare Qualitätsziele (Soll-Zustand) festlegen.", ref: "lf06/optimierung" },
        { id: "ap1-qp-2", text: "Ich kann Qualitätslenkung als Umsetzung der Planung beschreiben (Arbeitsanweisungen, Checklisten, Prüfungen während der Durchführung).", ref: "lf06/optimierung" },
        { id: "ap1-qp-3", text: "Ich kann den PDCA-Zyklus (Plan, Do, Check, Act) erklären und auf die Einrichtung eines Arbeitsplatzes oder einen Supportprozess anwenden.", ref: "lf06/optimierung" },
        { id: "ap1-qp-4", text: "Ich kann ein Testprotokoll für einen neu eingerichteten Arbeitsplatz erstellen (Testfall, Voraussetzung, erwartetes und tatsächliches Ergebnis, bestanden/nicht bestanden, Datum, Prüfer, Maßnahmen).", ref: "lf02/betriebssysteme" },
        { id: "ap1-qp-5", text: "Ich kann sinnvolle Testfälle für einen Arbeitsplatz ableiten (Anmeldung, Netzwerk und Internet, Netzlaufwerke, Drucker, Anwendungen, Berechtigungen, Datensicherung).", ref: "lf12/qualitaet-tests" }
      ] },

    /* ---------- Fragenkomplex 06: IT-Sicherheit und Datenschutz ---------- */
    { id: "sicherheit", title: "06.01 IT-Sicherheit auf Grundschutzniveau und Datenschutz", lf: ["lf04"],
      items: [
        { id: "ap1-is-1", text: "Ich kann die Schutzziele Vertraulichkeit, Integrität und Verfügbarkeit (ergänzt um Authentizität) erklären und Beispiele für ihre Verletzung zuordnen.", hot: true, ref: "lf04/grundlagen" },
        { id: "ap1-is-2", text: "Ich kann Informationssicherheit, Datensicherheit und Datenschutz voneinander abgrenzen.", ref: "lf04/grundlagen" },
        { id: "ap1-is-3", text: "Ich kann technische und organisatorische Maßnahmen (TOM nach Art. 32 DSGVO) nennen und in technische, organisatorische und personelle Maßnahmen einordnen.", hot: true, ref: "lf04/massnahmen" },
        { id: "ap1-is-4", text: "Ich kann Aufgaben und Stellung von IT-Sicherheitsbeauftragten und Datenschutzbeauftragten unterscheiden (Benennungspflicht, Unabhängigkeit, Beratung und Kontrolle).", ref: "lf04/grundlagen" },
        { id: "ap1-is-5", text: "Ich kann eine Passwortrichtlinie erläutern und bewerten (Länge vor Komplexität, keine Wiederverwendung, Passwortmanager, Sperre nach Fehlversuchen, Wechsel laut BSI nur bei Verdacht auf Kompromittierung).", hot: true, ref: "lf04/passwort-krypto" },
        { id: "ap1-is-6", text: "Ich kann technische Schutzmaßnahmen nennen und ihre Wirkung erklären: Virenschutz bzw. Endpoint Security, Personal Firewall, Verschlüsselung, Updates.", hot: true, ref: "lf04/massnahmen" },
        { id: "ap1-is-7", text: "Ich kann symmetrische, asymmetrische und hybride Verschlüsselung unterscheiden (gemeinsamer Schlüssel vs. Schlüsselpaar; Schlüsselanzahl n × (n − 1) ÷ 2 vs. 2 × n; Geschwindigkeit; Schlüsselaustausch) und erklären, warum in der Praxis hybrid verschlüsselt wird.", hot: true, ref: "lf04/passwort-krypto" },
        { id: "ap1-is-8", text: "Ich kann personelle Maßnahmen zur Sensibilisierung begründen (Schulungen, Phishing-Simulationen, Richtlinien, Clean Desk).", hot: true, ref: "lf04/angriffe" },
        { id: "ap1-is-9", text: "Ich kann Auszüge aus dem BSI IT-Grundschutz-Kompendium lesen (Baustein, Gefährdungen, Basis- und Standard-Anforderungen) und auf einen Arbeitsplatz übertragen.", ref: "lf04/bsi-grundschutz" },
        { id: "ap1-is-10", text: "Ich kann an einem Fall prüfen, ob DSGVO und BDSG eingehalten werden (Rechtmäßigkeit, Zweckbindung, Datenminimierung, Speicherbegrenzung, Transparenz).", hot: true, ref: "lf04/dsgvo-grundsaetze" },
        { id: "ap1-is-11", text: "Ich kann personenbezogene Daten definieren, Beispiele nennen und besondere Kategorien erkennen (z. B. Gesundheitsdaten, religiöse Überzeugung, biometrische Daten).", hot: true, ref: "lf04/dsgvo-grundsaetze" },
        { id: "ap1-is-12", text: "Ich kann die Rechte betroffener Personen nennen (Information, Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch) und die Voraussetzungen einer wirksamen Einwilligung erklären (freiwillig, informiert, für einen bestimmten Zweck, jederzeit widerrufbar, nachweisbar).", hot: true, ref: "lf04/dsgvo-grundsaetze" },
        { id: "ap1-is-13", text: "Ich kann Anonymisierung (Personenbezug lässt sich nicht mehr herstellen) und Pseudonymisierung (Zuordnung nur mit getrennt aufbewahrter Zusatzinformation) unterscheiden und je ein Beispiel geben.", ref: "lf04/dsgvo-grundsaetze" }
      ] },
    { id: "schutzbedarf", title: "06.02 Schutzbedarfsanalyse nach BSI IT-Grundschutz", lf: ["lf04"],
      items: [
        { id: "ap1-sb-1", text: "Ich kann das Vorgehen nach BSI-Standard 200-2 beschreiben (Strukturanalyse, Schutzbedarfsfeststellung, Modellierung, IT-Grundschutz-Check, Umsetzung der Maßnahmen).", ref: "lf04/bsi-grundschutz" },
        { id: "ap1-sb-2", text: "Ich kann den Schutzbedarf von Anwendungen, IT-Systemen, Räumen und Kommunikationsverbindungen je Schutzziel bestimmen.", hot: true, ref: "lf04/schutzbedarf-praxis" },
        { id: "ap1-sb-3", text: "Ich kann Schadensszenarien zur Begründung heranziehen (Verstoß gegen Gesetze oder Verträge, Beeinträchtigung der informationellen Selbstbestimmung, der persönlichen Unversehrtheit oder der Aufgabenerfüllung, negative Außenwirkung, finanzielle Auswirkungen).", ref: "lf04/schutzbedarf" },
        { id: "ap1-sb-4", text: "Ich kann Maximumprinzip, Kumulationseffekt und Verteilungseffekt anwenden, um den Schutzbedarf eines Systems aus den darauf laufenden Anwendungen abzuleiten.", ref: "lf04/schutzbedarf" }
      ] },
    { id: "sicherheitskonzept", title: "06.03 Arbeitsplatzbezogenes Sicherheitskonzept modellieren", lf: ["lf04"],
      items: [
        { id: "ap1-sk-1", text: "Ich kann passende Bausteine aus dem IT-Grundschutz-Kompendium zuordnen (z. B. allgemeiner Client, Büroarbeitsplatz, Datensicherungskonzept, Identitäts- und Berechtigungsmanagement).", ref: "lf04/bsi-grundschutz" },
        { id: "ap1-sk-2", text: "Ich kann die Schutzbedarfskategorien normal, hoch und sehr hoch für einen Fall ableiten und mit den möglichen Schadensauswirkungen begründen.", hot: true, ref: "lf04/schutzbedarf" },
        { id: "ap1-sk-3", text: "Ich kann Risiken in einer Matrix aus Eintrittswahrscheinlichkeit und Schadenshöhe einordnen und daraus den Handlungsbedarf ableiten.", ref: "lf04/risikoanalyse" },
        { id: "ap1-sk-4", text: "Ich kann Aufgabe und Elemente eines ISMS erklären (Sicherheitsleitlinie, Rollen, Sicherheitsprozess nach PDCA) und meinen eigenen Beitrag dazu beschreiben.", ref: "lf04/isms-iso27001" }
      ] },
    { id: "sicherheit-umsetzen", title: "06.04 Sicherheitskonzept umsetzen", lf: ["lf04", "lf09"],
      items: [
        { id: "ap1-su-1", text: "Ich kann Security by Design und Security by Default erklären und an einem Produkt- oder Konfigurationsbeispiel zeigen.", ref: "lf04/massnahmen" },
        { id: "ap1-su-2", text: "Ich kann zu einer Gefährdung passende technische (auch infrastrukturelle), organisatorische und personelle Maßnahmen vorschlagen und in den Sicherheitsprozess (planen, umsetzen, prüfen, verbessern) einordnen.", ref: "lf04/massnahmen" },
        { id: "ap1-su-3", text: "Ich kann ein Betriebssystem härten und jede Maßnahme begründen (Updates, unnötige Dienste und Konten deaktivieren, Standardpasswörter ändern, keine Administratorrechte für Endnutzer, Endpoint Security, Autostart und USB-Zugriff einschränken).", hot: true, ref: "lf04/massnahmen" },
        { id: "ap1-su-4", text: "Ich kann Sicherungsarten (Voll-, inkrementelle und differenzielle Sicherung), das Generationenprinzip und die 3-2-1-Regel erklären und für einen Arbeitsplatz ein Sicherungskonzept vorschlagen.", hot: true, ref: "lf10/datensicherung" },
        { id: "ap1-su-5", text: "Ich kann die Verfügbarkeit mit einem NAS erhöhen (zentrale Ablage, Snapshots, Redundanz) und erklären, warum Redundanz kein Backup ersetzt.", ref: "lf04/massnahmen" },
        { id: "ap1-su-6", text: "Ich kann Zutritts-, Zugangs- und Zugriffskontrolle unterscheiden und je zwei Beispiele nennen (z. B. Schließanlage – Anmeldung mit Passwort oder Token – Vergabe von Dateirechten).", hot: true, ref: "lf04/massnahmen" },
        { id: "ap1-su-7", text: "Ich kann Hashwerte erklären (Einwegfunktion, feste Länge, Integritätsprüfung, Passwortspeicherung mit Salt) und ihren Einsatz bei Downloads und digitalen Signaturen beschreiben.", hot: true, ref: "lf04/passwort-krypto" },
        { id: "ap1-su-8", text: "Ich kann Zertifikat (X.509, ausstellende CA, öffentlicher Schlüssel, Gültigkeitsdauer) und digitale Signatur (Hashwert wird mit dem privaten Schlüssel des Absenders signiert, Prüfung mit dessen öffentlichem Schlüssel → Integrität und Authentizität) erklären.", hot: true, ref: "lf04/passwort-krypto" },
        { id: "ap1-su-9", text: "Ich kann E-Mail-Sicherheit erklären: Transportverschlüsselung (TLS) vs. Ende-zu-Ende-Verschlüsselung (S/MIME, OpenPGP) sowie Protokolle und Ports (SMTP 25/587, IMAP 143/993, POP3 110/995) und den Unterschied zwischen IMAP und POP3.", hot: true, ref: "lf04/passwort-krypto" },
        { id: "ap1-su-10", text: "Ich kann Zwei- bzw. Mehr-Faktor-Authentifizierung (Wissen, Besitz, Inhärenz/Biometrie) erklären und eine Anmelderichtlinie bewerten.", hot: true, ref: "lf04/passwort-krypto" },
        { id: "ap1-su-11", text: "Ich kann eine Personal Firewall anpassen (z. B. einer Anwendung den ausgehenden Internetzugriff sperren, eingehende Regeln begrenzen).", ref: "lf04/massnahmen" },
        { id: "ap1-su-12", text: "Ich kann Schadsoftware (Virus, Wurm, Trojaner, Ransomware, Spyware) und Angriffe wie Phishing unterscheiden und passende Gegenmaßnahmen zuordnen.", hot: true, ref: "lf04/malware" }
      ] },
    /* ---------- Fragenkomplex 07: Leistungen erbringen und Auftrag abschließen ---------- */
    { id: "vertraege", title: "07.01 Vertragsarten, Vertragsbestandteile und Vertragsstörungen", lf: ["lf02", "lf06"],
      items: [
        { id: "ap1-vt-1", text: "Ich kann erklären, wie ein Kaufvertrag zustande kommt (zwei übereinstimmende Willenserklärungen: Antrag und Annahme), und die Pflichten von Käufer und Verkäufer nennen.", ref: "lf02/beschaffung" },
        { id: "ap1-vt-2", text: "Ich kann Kauf, Miete und Leasing unterscheiden (Eigentum, Nutzungsrecht, Leasinggeber und Leasingnehmer, Service, Vertragsende) und für ein Szenario eine Empfehlung geben.", hot: true, ref: "lf02/beschaffung" },
        { id: "ap1-vt-3", text: "Ich kann Inhalte eines Lizenzvertrags nennen (Nutzungsumfang, Anzahl, Laufzeit, Übertragbarkeit).", ref: "lf02/betriebssysteme" },
        { id: "ap1-vt-4", text: "Ich kann Inhalte eines Servicevertrags bzw. SLA erklären (Servicezeiten, Reaktions- und Lösungszeit, Verfügbarkeit, Eskalation, Vertragsstrafen) und aus einer Verfügbarkeit die zulässige Ausfallzeit berechnen.", hot: true, ref: "lf06/sla-kennzahlen" },
        { id: "ap1-vt-5", text: "Ich kann Werkvertrag (Erfolg geschuldet, Abnahme) und Dienstvertrag (Tätigkeit geschuldet) unterscheiden und IT-Leistungen richtig zuordnen.", ref: "lf06/dienstleistungen" },
        { id: "ap1-vt-6", text: "Ich kann wesentliche Vertragsbestandteile benennen (Leistungsbeschreibung, Termine, Vergütung, Vertragsstrafe, Gewährleistung).", ref: "lf12/vertrag-recht" },
        { id: "ap1-vt-7", text: "Ich kann Vertragsstörungen erkennen (mangelhafte Lieferung, Lieferverzug, Annahmeverzug, Zahlungsverzug), die Rechte des Käufers nennen (zuerst Nacherfüllung, danach Rücktritt, Minderung oder Schadensersatz) und die gesetzliche Gewährleistung (2 Jahre) von der freiwilligen Garantie abgrenzen.", hot: true, ref: "lf02/beschaffung" },
        { id: "ap1-vt-8", text: "Ich kann eine Rechnung auf formale und rechnerische Richtigkeit prüfen (Positionen, Rabatt, Nettobetrag, Umsatzsteuer, Bruttobetrag, Skonto, Pflichtangaben).", hot: true, ref: "lf02/beschaffung" }
      ] },
    { id: "ziele", title: "07.02 Unternehmensziele aus dem Leitbild ableiten", lf: ["lf01"],
      items: [
        { id: "ap1-zi-1", text: "Ich kann ökonomische (Umsatz, Gewinn, Marktanteil), ökologische (Ressourcenschonung, Nachhaltigkeit) und soziale Ziele (Arbeitsbedingungen) aus einem Unternehmensleitbild herausarbeiten.", ref: "lf01/ziele-leitbild" },
        { id: "ap1-zi-2", text: "Ich kann Zielharmonie, Zielkonflikt und Zielneutralität an Beispielen erklären.", ref: "lf01/ziele-leitbild" },
        { id: "ap1-zi-3", text: "Ich kann Nachhaltigkeit (ökologisch, ökonomisch, sozial) und Green IT auf Beschaffung und Betrieb eines Arbeitsplatzes anwenden.", ref: "lf01/nachhaltigkeit-csr" },
        { id: "ap1-zi-4", text: "Ich kann Umsatz und Gewinn unterscheiden und berechnen (Gewinn = Umsatz − Kosten).", ref: "wiso/kennzahlen" }
      ] },
    { id: "umsetzungsvarianten", title: "07.03 Umsetzungsvarianten der Leistungserbringung", lf: ["lf02", "lf06"],
      items: [
        { id: "ap1-uv-1", text: "Ich kann Leistungserbringung vor Ort und per Fernwartung vergleichen (Kosten, Reaktionszeit, Datenschutz, Einwilligung des Kunden, technische Voraussetzungen).", hot: true, ref: "lf06/dienstleistungen" },
        { id: "ap1-uv-2", text: "Ich kann ein Ticketsystem zur Steuerung der Leistungserbringung nutzen (Auftrag anlegen, Status pflegen, Zeiten erfassen, Abschluss dokumentieren).", ref: "lf06/incident" },
        { id: "ap1-uv-3", text: "Ich kann Kundenvorgaben bei der Planung berücksichtigen: Termin und Erfüllungsort, technische Voraussetzungen (Betriebssystem, Hersteller) und Budget.", ref: "lf02/kundenbedarf" },
        { id: "ap1-uv-4", text: "Ich kann einen Rollout mehrerer Arbeitsplätze planen (Reihenfolge, Pilotgruppe, Zeitfenster, Rückfallplan, Information der Nutzerinnen und Nutzer).", ref: "lf12/change-migration" }
      ] },
    { id: "organisation", title: "07.04 Aufbauorganisation und Befugnisse", lf: ["lf01"],
      items: [
        { id: "ap1-or-1", text: "Ich kann Einlinien-, Mehrlinien-, Stablinien- und Matrixorganisation in einem Organigramm erkennen und Vor- und Nachteile nennen.", ref: "lf01/aufbauorganisation" },
        { id: "ap1-or-2", text: "Ich kann bestimmen, mit wem eine Leistungserbringung auf dem Dienstweg abzustimmen ist (Weisungsbefugnis, Zuständigkeit).", ref: "lf01/aufbauorganisation" },
        { id: "ap1-or-3", text: "Ich kann Vollmachten unterscheiden: Prokura (Eintragung im Handelsregister, weitreichend, mit gesetzlichen Ausnahmen) und Handlungsvollmacht (allgemeine Vollmacht, Artvollmacht, Einzelvollmacht).", ref: "lf01/vollmachten" },
        { id: "ap1-or-4", text: "Ich kann meinen eigenen Handlungs- und Entscheidungsspielraum in einem Auftrag einschätzen (z. B. Bestellgrenzen, notwendige Freigaben).", ref: "lf01/vollmachten" }
      ] },
    { id: "change", title: "07.05 Veränderungsprozesse begleiten (Change Management)", lf: ["lf06"],
      items: [
        { id: "ap1-cm-1", text: "Ich kann die Schritte eines Veränderungsprozesses erkennen und darstellen (z. B. nach Lewin: Auftauen – Verändern – Stabilisieren) und auf die Einführung einer IT-Lösung anwenden.", hot: true, ref: "lf06/change" },
        { id: "ap1-cm-2", text: "Ich kann motivierend kommunizieren und die Chancen einer Veränderung für die Betroffenen herausstellen.", ref: "kommunikation/team" },
        { id: "ap1-cm-3", text: "Ich kann Mitarbeitende einbinden und qualifizieren (frühe Information, Blended Learning, Multiplikatoren bzw. Key-User, Pilotgruppen).", ref: "lf12/abnahme-uebergabe" },
        { id: "ap1-cm-4", text: "Ich kann Rollen im Veränderungsprozess erkennen (Promotoren, Bremser, Skeptiker, Widerständler) und die passende Ansprache wählen.", ref: "lf06/change" },
        { id: "ap1-cm-5", text: "Ich kann Ursachen von Widerstand nennen (Angst vor Kompetenz- oder Jobverlust, Wissenslücken, schlechte Erfahrungen mit früheren Veränderungen) und Gegenmaßnahmen ableiten.", ref: "lf06/change" }
      ] },
    { id: "uebergabe", title: "07.06 Leistungsübergabe und Einweisung planen und dokumentieren", lf: ["lf02", "lf03"],
      items: [
        { id: "ap1-ue-1", text: "Ich kann eine Einweisung oder Schulung planen (Zielgruppe, Inhalte, Methode, Dauer, Unterlagen, Erfolgskontrolle).", ref: "kommunikation/praesentation" },
        { id: "ap1-ue-2", text: "Ich kann die Inhalte eines Abnahmeprotokolls nennen (Vertragspartner, Datum und Ort, abgenommene Leistung, Prüfergebnisse, festgestellte Mängel, Frist zur Beseitigung, Unterschriften) und seine rechtliche Bedeutung erklären.", hot: true, ref: "lf12/abnahme-uebergabe" },
        { id: "ap1-ue-3", text: "Ich kann Mängelarten unterscheiden – Schlechtleistung (Qualitätsmangel), Falschlieferung, Minderlieferung (Quantitätsmangel), offene und versteckte Mängel – und die Rügepflicht unter Kaufleuten erklären.", hot: true, ref: "lf02/beschaffung" },
        { id: "ap1-ue-4", text: "Ich kann eine Übergabe mit Übergabe- bzw. Abnahmeprotokoll und Benutzerdokumentation durchführen.", ref: "lf12/abnahme-uebergabe" }
      ] },
    { id: "abschluss", title: "07.07 Leistungserbringung bewerten und dokumentieren", lf: ["lf02", "lf06"],
      items: [
        { id: "ap1-ls-1", text: "Ich kann einen Soll-Ist-Vergleich für Zeit, Kosten und Qualität durchführen, Abweichungen absolut und in Prozent berechnen und Ursachen analysieren.", ref: "lf12/projektabschluss" },
        { id: "ap1-ls-2", text: "Ich kann eine Nachkalkulation erstellen und mit dem Angebot vergleichen.", ref: "lf01/machbarkeit-kalkulation" },
        { id: "ap1-ls-3", text: "Ich kann Lessons Learned formulieren und dokumentieren.", ref: "lf12/projektabschluss" },
        { id: "ap1-ls-4", text: "Ich kann Ansatzpunkte für Folgeaufträge ableiten (Wartungsvertrag, Erweiterung, Schulung, Hardware-Erneuerung).", ref: "lf06/dienstleistungen" }
      ] },

    /* ---------- Notationen aus dem Katalog-Anhang und Belegsatz ---------- */
    { id: "notationen", title: "Notationen aus Katalog-Anhang und Belegsatz", lf: ["lf02", "lf03", "lf05", "lf06"],
      items: [
        { id: "ap1-no-1", text: "Ich kann einen Netzplanknoten in der Katalog-Notation lesen und ausfüllen (oben FAZ und FEZ, in der Mitte Vorgang und Beschreibung, darunter Dauer, GP und FP, unten SAZ und SEZ).", hot: true, ref: "lf06/netzplan-gantt" },
        { id: "ap1-no-2", text: "Ich kann eine EPK lesen und erstellen (Ereignis als Sechseck, Funktion als abgerundetes Rechteck, Organisationseinheit, Informationsobjekt, Konnektoren UND/XOR/ODER; nach einem Ereignis keine XOR- oder ODER-Verzweigung).", ref: "lf06/epk" },
        { id: "ap1-no-3", text: "Ich kann ein BPMN-Diagramm lesen (Pool und Lanes, Task, Start-, Zwischen- und Endereignis, Nachrichten- und Zeitereignis, Gateways XOR/OR/AND, Sequenzfluss innerhalb eines Pools vs. Nachrichtenfluss zwischen Pools) – unsicher, ob BPMN in der AP1 geprüft wird; die Notation steht aber im Katalog-Anhang.", ref: "lf06/bpmn-uml" },
        { id: "ap1-no-4", text: "Ich kann Netzwerkpläne mit den Katalog-Symbolen lesen und zeichnen (Switch auf Schicht 2, Router auf Schicht 3 ggf. mit NAT/PAT, Firewall mit Stateful Inspection, SOHO-Kombigerät, Access Point, Server, Netzwolke mit Netzadresse und Präfix).", ref: "lf03/netzwerk-grundlagen" },
        { id: "ap1-no-5", text: "Ich kann Dezimal- und Binärpräfixe sicher umrechnen und den Unterschied erklären (1 KiB = 1.024 Byte, also 2,4 % mehr als 1 kB; 1 TiB ≈ 1,0995 TB, also knapp 10 % mehr).", hot: true, ref: "lf02/datenmengen" },
        { id: "ap1-no-6", text: "Ich kann eine Rechnung nach dem Katalog-Muster nachrechnen (Menge × Einzelpreis, Rabatt, Nettobetrag, 19 % Umsatzsteuer, Rechnungsbetrag, Skonto) und Pflichtangaben erkennen (Steuernummer bzw. USt-IdNr., Rechnungsnummer, Liefer- und Rechnungsdatum).", ref: "lf02/beschaffung" },
        { id: "ap1-no-7", text: "Ich kann die UML-Diagramme aus dem Katalog-Anhang (Anwendungsfall-, Aktivitäts-, Klassen-, Sequenz- und Zustandsdiagramm) unterscheiden und dem passenden Zweck zuordnen.", ref: "lf05/uml" }
      ] }
  ],

  tasks: [
    /* ================= Probeklausur A – Kunde: Steuerkanzlei in Husum ================= */
    { id: "pk-a-1", set: "A", title: "Aufgabe 1: Umzugsprojekt planen und Kunden beraten", points: 25,
      scenario: `<p><strong>Ausgangssituation (gilt für alle Aufgaben der Probeklausur A):</strong> Du bist Auszubildende bzw. Auszubildender der <strong>Nordlicht IT GmbH</strong> in Heide, einem Systemhaus mit 35 Beschäftigten. Euer Kunde, die Steuerberatungskanzlei <strong>Friesenhof Steuerberatung PartG mbB</strong> in Husum, zieht im Frühjahr 2027 in ein neues Bürogebäude. Dabei sollen alle <strong>zwölf Arbeitsplätze</strong> erneuert werden. Vier Beschäftigte arbeiten zusätzlich an zwei Tagen pro Woche im Homeoffice. Die Kanzlei verarbeitet Steuer- und Lohndaten ihrer Mandantinnen und Mandanten.</p>
        <p><strong>Situation zu Aufgabe 1:</strong> Deine Ausbilderin leitet das Projekt „Umzug und Modernisierung Friesenhof“. Du unterstützt sie beim Kick-off-Termin mit der Kanzleileiterin Frau Jensen und bei der Terminplanung.</p>`,
      parts: [
        { points: 4,
          q: `<p><strong>a)</strong> Frau Jensen formuliert ihr Ziel so: „Die neue IT soll irgendwann im Frühjahr möglichst schnell laufen.“</p>
            <p>aa) Erläutere anhand von zwei SMART-Kriterien, warum diese Formulierung als Projektziel ungeeignet ist. (2 P)</p>
            <p>bb) Formuliere das Ziel so um, dass es den SMART-Kriterien entspricht. (2 P)</p>`,
          solution: `<p>SMART steht für <strong>s</strong>pezifisch, <strong>m</strong>essbar, <strong>a</strong>kzeptiert (bzw. attraktiv), <strong>r</strong>ealistisch und <strong>t</strong>erminiert.</p>
            <p><strong>aa)</strong> Zwei der folgenden Punkte, jeweils mit Bezug zur Aussage:</p>
            <ul>
              <li><strong>Nicht spezifisch:</strong> „die neue IT“ sagt nicht, was genau fertig sein soll (Arbeitsplätze, Server, Homeoffice-Zugang, Drucker).</li>
              <li><strong>Nicht messbar:</strong> „möglichst schnell laufen“ lässt sich nicht überprüfen. Es fehlt ein Kriterium, an dem man erkennt, dass das Ziel erreicht ist (z. B. bestandener Abnahmetest).</li>
              <li><strong>Nicht terminiert:</strong> „irgendwann im Frühjahr“ ist kein fester Termin. Niemand kann feststellen, ob das Projekt pünktlich fertig ist.</li>
            </ul>
            <p><strong>bb)</strong> Beispiel: „Bis Mittwoch, 31.03.2027, sind alle zwölf Arbeitsplätze im neuen Gebäude in Husum eingerichtet und an das Kanzleinetz angebunden. Sie haben den gemeinsamen Abnahmetest laut Testprotokoll ohne offene Mängel bestanden, und die vier Homeoffice-Arbeitsplätze erreichen die Kanzleisoftware über VPN.“</p>
            <p><strong>Bewertung:</strong> aa) je erläutertem Kriterium 1 P (nur das Stichwort ohne Bezug: 0,5 P). bb) 2 P, wenn das Ziel mindestens spezifisch, messbar und terminiert ist; 1 P, wenn eines dieser Merkmale fehlt.</p>` },
        { points: 8,
          q: `<p><strong>b)</strong> Für das Projekt liegt folgende Vorgangsliste vor (Dauer in Arbeitstagen, AT):</p>
            <table><thead><tr><th>Vorgang</th><th>Beschreibung</th><th>Dauer (AT)</th><th>Vorgänger</th></tr></thead><tbody>
              <tr><td>A</td><td>Ist-Aufnahme und Bedarfsanalyse</td><td>3</td><td>–</td></tr>
              <tr><td>B</td><td>Netz- und Sicherheitskonzept erstellen</td><td>4</td><td>A</td></tr>
              <tr><td>C</td><td>Hardware bestellen und Lieferung abwarten</td><td>8</td><td>A</td></tr>
              <tr><td>D</td><td>Netzwerkdosen im Neubau ergänzen und durchmessen</td><td>5</td><td>B</td></tr>
              <tr><td>E</td><td>Serverdienste und Firewall vorkonfigurieren</td><td>3</td><td>B</td></tr>
              <tr><td>F</td><td>Clients vorbereiten (Image, Software, Domänenbeitritt)</td><td>4</td><td>B, C</td></tr>
              <tr><td>G</td><td>Arbeitsplätze aufstellen und anschließen</td><td>2</td><td>D, F</td></tr>
              <tr><td>H</td><td>Gesamttest und Abnahme</td><td>2</td><td>E, G</td></tr>
              <tr><td>I</td><td>Einweisung der Beschäftigten</td><td>1</td><td>H</td></tr>
            </tbody></table>
            <p>Berechne für alle Vorgänge FAZ, FEZ, SAZ, SEZ, den Gesamtpuffer (GP) und den freien Puffer (FP). Lege dazu eine Tabelle an oder zeichne den Netzplan in der Knotennotation. Der erste Vorgang beginnt zum Zeitpunkt 0.</p>`,
          solution: `<p><strong>Vorwärtsrechnung</strong> (FEZ = FAZ + Dauer; FAZ = größter FEZ aller Vorgänger):</p>
            <p>A: 0 → 3 · B: 3 → 7 · C: 3 → 11 · D: 7 → 12 · E: 7 → 10 · F: FAZ = max(7; 11) = 11 → 15 · G: FAZ = max(12; 15) = 15 → 17 · H: FAZ = max(10; 17) = 17 → 19 · I: 19 → 20</p>
            <p><strong>Rückwärtsrechnung</strong> (SEZ = kleinster SAZ aller Nachfolger; SAZ = SEZ − Dauer), Start beim Projektende 20:</p>
            <p>I: 20 → 19 · H: 19 → 17 · G: 17 → 15 · F: 15 → 11 · E: SEZ = SAZ(H) = 17 → 14 · D: SEZ = SAZ(G) = 15 → 10 · C: SEZ = SAZ(F) = 11 → 3 · B: SEZ = min(10; 14; 11) = 10 → 6 · A: SEZ = min(6; 3) = 3 → 0</p>
            <table><thead><tr><th>Vorgang</th><th>Dauer</th><th>FAZ</th><th>FEZ</th><th>SAZ</th><th>SEZ</th><th>GP</th><th>FP</th></tr></thead><tbody>
              <tr><td>A</td><td>3</td><td>0</td><td>3</td><td>0</td><td>3</td><td>0</td><td>0</td></tr>
              <tr><td>B</td><td>4</td><td>3</td><td>7</td><td>6</td><td>10</td><td>3</td><td>0</td></tr>
              <tr><td>C</td><td>8</td><td>3</td><td>11</td><td>3</td><td>11</td><td>0</td><td>0</td></tr>
              <tr><td>D</td><td>5</td><td>7</td><td>12</td><td>10</td><td>15</td><td>3</td><td>3</td></tr>
              <tr><td>E</td><td>3</td><td>7</td><td>10</td><td>14</td><td>17</td><td>7</td><td>7</td></tr>
              <tr><td>F</td><td>4</td><td>11</td><td>15</td><td>11</td><td>15</td><td>0</td><td>0</td></tr>
              <tr><td>G</td><td>2</td><td>15</td><td>17</td><td>15</td><td>17</td><td>0</td><td>0</td></tr>
              <tr><td>H</td><td>2</td><td>17</td><td>19</td><td>17</td><td>19</td><td>0</td><td>0</td></tr>
              <tr><td>I</td><td>1</td><td>19</td><td>20</td><td>19</td><td>20</td><td>0</td><td>0</td></tr>
            </tbody></table>
            <p><strong>Puffer:</strong> GP = SAZ − FAZ. FP = kleinster FAZ der Nachfolger − eigener FEZ, z. B. B: min(7; 7; 11) − 7 = 0; D: 15 − 12 = 3; E: 17 − 10 = 7.</p>
            <div class="callout achtung"><strong>Prüfungsfalle:</strong> Vorgang B hat einen Gesamtpuffer von 3 AT, aber <strong>keinen freien Puffer</strong>. Verzögert sich B, verschieben sich D und E sofort nach hinten; das Projektende ist erst ab einer Verzögerung von mehr als 3 AT gefährdet.</div>
            <p><strong>Bewertung:</strong> Vorwärtsrechnung 3 P, Rückwärtsrechnung 3 P, Puffer 2 P. Folgefehler werden nicht doppelt abgezogen, wenn mit falschen Zwischenwerten richtig weitergerechnet wird.</p>` },
        { points: 2,
          q: `<p><strong>c)</strong> Gib den kritischen Pfad und die Projektdauer an. Erkläre, woran du einen kritischen Vorgang erkennst.</p>`,
          solution: `<p>Kritischer Pfad: <strong>A → C → F → G → H → I</strong>, Projektdauer <strong>20 AT</strong> (3 + 8 + 4 + 2 + 2 + 1 = 20).</p>
            <p>Ein Vorgang ist kritisch, wenn sein <strong>Gesamtpuffer 0</strong> ist (FAZ = SAZ). Jede Verzögerung eines kritischen Vorgangs verschiebt das Projektende um dieselbe Zeit.</p>
            <p><strong>Bewertung:</strong> Pfad und Dauer 1 P, Erklärung 1 P.</p>` },
        { points: 3,
          q: `<p><strong>d)</strong> Nach dem Kick-off meldet der Lieferant, dass sich die Lieferung (Vorgang C) um <strong>2 AT</strong> verlängert. Außerdem braucht der Elektriker für Vorgang D <strong>2 AT länger</strong> als geplant.</p>
            <p>Ermittle die Auswirkungen beider Verzögerungen auf die Projektdauer und schlage eine Maßnahme vor, mit der der ursprüngliche Endtermin trotzdem gehalten werden kann.</p>`,
          solution: `<ul>
              <li><strong>C liegt auf dem kritischen Pfad</strong> (GP = 0). Die Verzögerung um 2 AT verschiebt das Projektende von 20 auf <strong>22 AT</strong>.</li>
              <li><strong>D hat einen Gesamtpuffer und einen freien Puffer von 3 AT.</strong> Die Verzögerung um 2 AT wird vom Puffer aufgefangen und wirkt sich nicht auf das Projektende aus. Kontrolle mit den neuen Werten: F läuft von 13 bis 17, D von 7 bis 14 → G beginnt bei max(14; 17) = 17.</li>
              <li><strong>Gegenmaßnahme</strong> (eine genügt): einen nachfolgenden kritischen Vorgang verkürzen, z. B. F mit einem zweiten Techniker parallel bearbeiten oder das Image schon vor der Lieferung auf einem Testgerät fertigstellen, sodass F nur noch 2 AT dauert; alternativ Expresslieferung oder einen anderen Lieferanten mit kürzerer Lieferzeit beauftragen.</li>
            </ul>
            <p><strong>Bewertung:</strong> je 1 P für die Auswirkung von C, die Auswirkung von D und eine passende Maßnahme.</p>` },
        { points: 4,
          q: `<p><strong>e)</strong> Im Kick-off sagt Frau Jensen: „Beim letzten Umzug ging eine ganze Woche lang gar nichts mit der IT. Ich hoffe, dass es diesmal klappt.“</p>
            <p>Analysiere die Aussage mit dem Vier-Seiten-Modell nach Schulz von Thun. Gib für jede der vier Seiten an, was Frau Jensen damit ausdrücken könnte.</p>`,
          solution: `<table><thead><tr><th>Seite</th><th>Mögliche Botschaft</th></tr></thead><tbody>
              <tr><td>Sachinhalt</td><td>Beim letzten Umzug fiel die IT eine Woche lang aus.</td></tr>
              <tr><td>Selbstkundgabe (Selbstoffenbarung)</td><td>Ich habe schlechte Erfahrungen gemacht und bin besorgt, weil ein Ausfall für die Kanzlei teuer wäre.</td></tr>
              <tr><td>Beziehung</td><td>Ich vertraue euch noch nicht vollständig und erwarte, dass ihr es besser macht als der letzte Dienstleister.</td></tr>
              <tr><td>Appell</td><td>Plant den Umzug so, dass die IT ohne längere Ausfallzeit weiterläuft, und haltet mich auf dem Laufenden.</td></tr>
            </tbody></table>
            <p><strong>Tipp für das Gespräch:</strong> Den Appell ernst nehmen und konkret antworten, z. B. mit einem Umzug am Wochenende, einem Rückfallplan und einem festen Ansprechpartner.</p>
            <p><strong>Bewertung:</strong> je Seite 1 P für eine plausible, zur Aussage passende Deutung.</p>` },
        { points: 4,
          q: `<p><strong>f)</strong> Frau Jensen übergibt euch ein Dokument mit ihren Anforderungen, unter anderem „zwei Monitore je Arbeitsplatz“ und „sicherer Zugriff aus dem Homeoffice“. Die Nordlicht IT soll darauf aufbauend ein weiteres Dokument erstellen.</p>
            <p>Unterscheide Lastenheft und Pflichtenheft nach Verfasser und Inhalt. Formuliere außerdem für die Anforderung „sicherer Zugriff aus dem Homeoffice“ einen passenden Eintrag im Pflichtenheft.</p>`,
          solution: `<table><thead><tr><th>Merkmal</th><th>Lastenheft</th><th>Pflichtenheft</th></tr></thead><tbody>
              <tr><td>Verfasser</td><td>Auftraggeber (hier: die Kanzlei)</td><td>Auftragnehmer (hier: die Nordlicht IT GmbH)</td></tr>
              <tr><td>Inhalt</td><td><strong>Was</strong> soll erreicht werden und <strong>wofür</strong>? Anforderungen aus Sicht des Kunden</td><td><strong>Wie</strong> und <strong>womit</strong> werden die Anforderungen umgesetzt? Konkrete technische Lösung, die Grundlage des Angebots bzw. Vertrags wird</td></tr>
            </tbody></table>
            <p><strong>Beispiel für den Pflichtenheft-Eintrag:</strong> „Die vier Homeoffice-Notebooks erhalten einen VPN-Client (IPsec oder WireGuard), der einen verschlüsselten Tunnel zur Firewall der Kanzlei aufbaut. Die Anmeldung am VPN erfolgt mit Benutzername, Passwort und einem zweiten Faktor über eine Authenticator-App. Der Zugriff ist auf die Kanzleisoftware und die Netzlaufwerke beschränkt.“</p>
            <p><strong>Bewertung:</strong> Verfasser 1 P, Inhalt 2 P (je Dokument 1 P), Pflichtenheft-Eintrag 1 P (muss eine konkrete technische Lösung nennen – eine Wiederholung der Anforderung reicht nicht).</p>` }
      ] },
    { id: "pk-a-2", set: "A", title: "Aufgabe 2: Hardware auswählen und Wirtschaftlichkeit prüfen", points: 25,
      scenario: `<p><strong>Situation zu Aufgabe 2:</strong> Die Friesenhof Steuerberatung (Husum) ersetzt ihre zwölf Desktop-PCs durch Notebooks mit Dockingstation, damit die Beschäftigten ihr Gerät auch im Homeoffice nutzen können. Drei Modelle kommen infrage (Auszug aus den Datenblättern, alle Preise netto):</p>
        <table><thead><tr><th>Merkmal</th><th>N1 „Nordbook 14 Pro“</th><th>N2 „Deichbook 15“</th><th>N3 „Watt Ultra 14“</th></tr></thead><tbody>
          <tr><td>Preis je Gerät</td><td>1.049 €</td><td>949 €</td><td>1.129 €</td></tr>
          <tr><td>CPU-Benchmark (Punkte, höher = besser)</td><td>18.400</td><td>15.900</td><td>21.300</td></tr>
          <tr><td>Akkulaufzeit (Herstellerangabe)</td><td>11 h</td><td>13 h</td><td>9 h</td></tr>
          <tr><td>Gewicht</td><td>1,35 kg</td><td>1,52 kg</td><td>1,28 kg</td></tr>
          <tr><td>Garantie</td><td>3 Jahre Vor-Ort-Service</td><td>2 Jahre Bring-in</td><td>3 Jahre Bring-in</td></tr>
          <tr><td>Netzteil</td><td>USB-C, 65 W</td><td>USB-C, 65 W</td><td>USB-C, 65 W</td></tr>
        </tbody></table>`,
      parts: [
        { points: 8,
          q: `<p><strong>a)</strong> Die Kanzlei gewichtet die Kriterien so: Preis 30 %, CPU-Leistung 20 %, Akkulaufzeit 20 %, Gewicht 10 %, Garantie 20 %. Je Kriterium erhält das beste Gerät 3 Punkte, das zweitbeste 2 Punkte und das schlechteste 1 Punkt. Bei der Garantie gilt: 3 Jahre Vor-Ort-Service ist besser als 3 Jahre Bring-in, und das ist besser als 2 Jahre Bring-in.</p>
            <p>aa) Vergib die Punkte anhand der Datenblätter und führe die Nutzwertanalyse durch. (6 P)</p>
            <p>bb) Gib eine begründete Empfehlung und nenne eine Schwäche der Nutzwertanalyse. (2 P)</p>`,
          solution: `<p><strong>aa)</strong> Punkte (P) und gewichtete Punkte (Gewicht × P):</p>
            <table><thead><tr><th>Kriterium</th><th>Gewicht</th><th>N1 P</th><th>N1 gew.</th><th>N2 P</th><th>N2 gew.</th><th>N3 P</th><th>N3 gew.</th></tr></thead><tbody>
              <tr><td>Preis (niedrig = gut)</td><td>0,30</td><td>2</td><td>0,60</td><td>3</td><td>0,90</td><td>1</td><td>0,30</td></tr>
              <tr><td>CPU-Leistung</td><td>0,20</td><td>2</td><td>0,40</td><td>1</td><td>0,20</td><td>3</td><td>0,60</td></tr>
              <tr><td>Akkulaufzeit</td><td>0,20</td><td>2</td><td>0,40</td><td>3</td><td>0,60</td><td>1</td><td>0,20</td></tr>
              <tr><td>Gewicht (leicht = gut)</td><td>0,10</td><td>2</td><td>0,20</td><td>1</td><td>0,10</td><td>3</td><td>0,30</td></tr>
              <tr><td>Garantie</td><td>0,20</td><td>3</td><td>0,60</td><td>1</td><td>0,20</td><td>2</td><td>0,40</td></tr>
              <tr><td><strong>Nutzwert</strong></td><td>1,00</td><td></td><td><strong>2,20</strong></td><td></td><td><strong>2,00</strong></td><td></td><td><strong>1,80</strong></td></tr>
            </tbody></table>
            <p>Rechenweg N1: 0,3 × 2 + 0,2 × 2 + 0,2 × 2 + 0,1 × 2 + 0,2 × 3 = 0,6 + 0,4 + 0,4 + 0,2 + 0,6 = 2,20</p>
            <p><strong>bb)</strong> Empfehlung: <strong>N1 „Nordbook 14 Pro“</strong> mit dem höchsten Nutzwert von 2,20. Es ist in keinem Kriterium das schlechteste Gerät und bietet als einziges Vor-Ort-Service. Das ist für die Kanzlei wichtig, weil ein defektes Gerät vor Ort getauscht wird und die Beschäftigten ohne lange Ausfallzeit weiterarbeiten können.</p>
            <p>Schwäche (eine genügt): Gewichtung und Punktvergabe sind <strong>subjektiv</strong>. Die 1-bis-3-Skala bildet außerdem die Abstände nicht ab (N2 ist nur 100 € günstiger als N1, erhält aber einen Punkt mehr). Schon eine kleine Änderung der Gewichte kann die Reihenfolge umdrehen.</p>
            <p><strong>Bewertung:</strong> aa) Punktvergabe 3 P, gewichtete Summen 3 P. bb) Empfehlung mit Begründung 1 P, Schwäche 1 P.</p>` },
        { points: 5,
          q: `<p><strong>b)</strong> Die alten Desktop-PCs nehmen im Betrieb durchschnittlich <strong>95 W</strong> aus dem Stromnetz auf. Ein neuer Arbeitsplatz (Notebook mit Dockingstation) benötigt im Mittel <strong>27 W</strong> an Leistung; das Netzteil hat einen <strong>Wirkungsgrad von 90 %</strong>. Alle Geräte laufen <strong>9 Stunden pro Tag an 220 Arbeitstagen</strong>. Der Strompreis beträgt <strong>0,34 €/kWh</strong>.</p>
            <p>aa) Berechne die Leistung, die ein neuer Arbeitsplatz aus dem Netz aufnimmt. (1 P)</p>
            <p>bb) Berechne die jährlichen Stromkosten aller zwölf Arbeitsplätze vorher und nachher sowie die jährliche Ersparnis. (4 P)</p>`,
          solution: `<p><strong>aa)</strong> η = P_ab ÷ P_zu → P_zu = P_ab ÷ η = 27 W ÷ 0,9 = <strong>30 W</strong></p>
            <p><strong>bb)</strong> Betriebsstunden pro Jahr: 9 h × 220 = 1.980 h</p>
            <ul>
              <li>Vorher: 12 × 95 W = 1.140 W; 1.140 W × 1.980 h = 2.257.200 Wh = 2.257,2 kWh; 2.257,2 kWh × 0,34 €/kWh = <strong>767,45 €</strong></li>
              <li>Nachher: 12 × 30 W = 360 W; 360 W × 1.980 h = 712.800 Wh = 712,8 kWh; 712,8 kWh × 0,34 €/kWh = <strong>242,35 €</strong></li>
              <li>Ersparnis: 767,45 € − 242,35 € = <strong>525,10 € pro Jahr</strong> (entspricht 1.544,4 kWh)</li>
            </ul>
            <div class="callout achtung"><strong>Prüfungsfalle:</strong> Wer mit 27 W statt 30 W rechnet, vergisst den Wirkungsgrad: Das Netzteil nimmt mehr Leistung auf, als es abgibt. Und: W × h ergibt Wh – erst durch 1.000 teilen, dann mit dem Preis je kWh multiplizieren.</div>
            <p><strong>Bewertung:</strong> aa) 1 P. bb) Betriebsstunden bzw. kWh 2 P, Kosten vorher und nachher 1 P, Ersparnis 1 P.</p>` },
        { points: 3,
          q: `<p><strong>c)</strong> Frau Jensen möchte außerdem die zwölf vorhandenen Monitore (je 38 W) nur aus Stromspargründen gegen neue Monitore (je 17 W, Preis 189 € netto je Stück) tauschen. Die Monitore sollen noch sechs Jahre genutzt werden. Nutzungszeit und Strompreis wie in b).</p>
            <p>Berechne die Amortisationsdauer und beurteile den Vorschlag.</p>`,
          solution: `<p>Ersparnis je Monitor: 38 W − 17 W = 21 W; 21 W × 1.980 h = 41.580 Wh = 41,58 kWh; 41,58 kWh × 0,34 €/kWh ≈ <strong>14,14 € pro Jahr</strong></p>
            <p>Amortisationsdauer = Mehrinvestition ÷ jährliche Einsparung = 189 € ÷ 14,14 €/Jahr ≈ <strong>13,4 Jahre</strong> (für alle zwölf Monitore gleich: 2.268 € ÷ 169,65 €/Jahr ≈ 13,4 Jahre).</p>
            <p><strong>Beurteilung:</strong> Die Investition hätte sich erst nach rund 13,4 Jahren bezahlt gemacht – deutlich nach der geplanten Nutzungsdauer von sechs Jahren. <strong>Allein aus Stromspargründen lohnt sich der Tausch nicht.</strong> Sinnvoll wäre er nur aus anderen Gründen, z. B. wegen besserer Ergonomie, eines USB-C-Anschlusses für die Dockingstation oder eines Defekts.</p>
            <p><strong>Bewertung:</strong> Ersparnis 1 P, Amortisationsdauer 1 P, Beurteilung mit Bezug zur Nutzungsdauer 1 P.</p>` },
        { points: 5,
          q: `<p><strong>d)</strong> Für zwölf Geräte N1 liegen zwei Finanzierungsangebote vor:</p>
            <ul>
              <li><strong>Kauf</strong> zum Preis aus dem Datenblatt, geplante Nutzungsdauer drei Jahre,</li>
              <li><strong>Leasing</strong> über 36 Monate zu 34,90 € netto je Gerät und Monat; nach Vertragsende werden die Geräte zurückgegeben.</li>
            </ul>
            <p>aa) Berechne die monatlichen Kosten je Gerät sowie die Gesamtkosten beider Varianten für alle zwölf Geräte über 36 Monate. (3 P)</p>
            <p>bb) Nenne zwei Gründe, die trotz der Mehrkosten für das Leasing sprechen können. (2 P)</p>`,
          solution: `<p><strong>aa)</strong></p>
            <table><thead><tr><th></th><th>Kauf</th><th>Leasing</th></tr></thead><tbody>
              <tr><td>je Gerät und Monat</td><td>1.049 € ÷ 36 ≈ <strong>29,14 €</strong></td><td><strong>34,90 €</strong></td></tr>
              <tr><td>zwölf Geräte, 36 Monate</td><td>12 × 1.049 € = <strong>12.588,00 €</strong></td><td>12 × 36 × 34,90 € = <strong>15.076,80 €</strong></td></tr>
            </tbody></table>
            <p>Das Leasing kostet 15.076,80 € − 12.588,00 € = <strong>2.488,80 € mehr</strong> (ca. 5,76 € je Gerät und Monat).</p>
            <p><strong>bb)</strong> Zwei der folgenden Gründe:</p>
            <ul>
              <li>Die Liquidität wird geschont: keine Einmalzahlung von 12.588 €, sondern gleichbleibende, gut planbare Monatsraten.</li>
              <li>Nach 36 Monaten gibt die Kanzlei die Geräte zurück und kann neue leasen – die Technik bleibt aktuell.</li>
              <li>Rücknahme und fachgerechte Entsorgung der Altgeräte übernimmt der Leasinggeber.</li>
              <li>Die Leasingraten sind in der Regel als laufender Aufwand sofort steuerlich absetzbar; eine Abschreibung über mehrere Jahre entfällt.</li>
            </ul>
            <div class="callout achtung"><strong>Achtung:</strong> Das Argument „Service im Leasing enthalten“ zieht hier kaum, weil N1 schon drei Jahre Vor-Ort-Garantie hat. Prüfe Argumente immer am konkreten Angebot.</div>
            <p><strong>Bewertung:</strong> aa) monatliche Kosten 1 P, Gesamtkosten beider Varianten 2 P. bb) je Grund 1 P.</p>` },
        { points: 4,
          q: `<p><strong>e)</strong> Zu jedem Notebook gehört die Dockingstation „UD-7“. Das Handbuch enthält folgenden Auszug:</p>
            <pre><code>UD-7 USB-C Dock – Technical notes
- Supports up to two external displays via DisplayPort 1.4. With
  Multi-Stream Transport (MST), the second monitor can be daisy-chained
  from the DP-out port of the first monitor, so only one video cable
  runs to the dock.
- Power Delivery: up to 100 W from the dock's power adapter. 10 W are
  reserved for the dock itself; the rest is passed through to the notebook.
- Network: 2.5 Gbit/s Ethernet (RJ45), backward compatible with 1 Gbit/s.
- Note: MST is not supported by macOS. On Mac computers, both external
  monitors will show the same image (mirroring).</code></pre>
            <p>aa) Erkläre auf Deutsch, was mit „daisy-chained“ gemeint ist und welche Voraussetzung der erste Monitor dafür erfüllen muss. (2 P)</p>
            <p>bb) Prüfe anhand des Textes, ob ein Notebook N1 über das Dock ausreichend mit Strom versorgt wird. Erkläre außerdem, was für eine Partnerin gilt, die ein MacBook an das Dock anschließen möchte. (2 P)</p>`,
          solution: `<p><strong>aa)</strong> „Daisy chaining“ bedeutet <strong>Reihenschaltung</strong> der Monitore: Das Dock ist nur mit dem ersten Monitor verbunden, und der zweite Monitor hängt am Ausgang (DP-out) des ersten. Voraussetzung: Der erste Monitor braucht einen <strong>DisplayPort-Ausgang</strong> und muss <strong>MST</strong> unterstützen.</p>
            <p><strong>bb)</strong> Das Dock reicht 100 W − 10 W = <strong>90 W</strong> an das Notebook weiter. N1 hat ein 65-W-Netzteil, also gilt 90 W ≥ 65 W → <strong>Die Versorgung reicht.</strong> Am MacBook funktioniert MST nicht: Beide externen Monitore zeigen <strong>dasselbe Bild</strong> (Spiegelung) statt eines erweiterten Desktops. Für zwei getrennte Bilder braucht die Partnerin eine andere Lösung, z. B. zwei separate Monitorkabel oder ein Dock, das mit macOS zwei Monitore ansteuert.</p>
            <p><strong>Bewertung:</strong> aa) Bedeutung 1 P, Voraussetzung 1 P. bb) Leistungsprüfung 1 P, macOS-Einschränkung 1 P. Antworten auf Englisch werden nicht gewertet, wenn nach der Bedeutung auf Deutsch gefragt ist.</p>` }
      ] },
    { id: "pk-a-3", set: "A", title: "Aufgabe 3: Arbeitsplätze ins Netzwerk einbinden", points: 25,
      scenario: `<p><strong>Situation zu Aufgabe 3:</strong> Im neuen Gebäude der Friesenhof Steuerberatung richtet die Nordlicht IT das Netzwerk ein. Für die Server ist das Subnetz <strong>192.168.40.0/26</strong> vorgesehen (Kanzleiserver: 192.168.40.10), für die Arbeitsplätze das Subnetz <strong>192.168.40.64/26</strong>. Das Standardgateway der Arbeitsplätze erhält die erste nutzbare Adresse ihres Subnetzes. Die Belege der Mandantinnen und Mandanten werden künftig eingescannt und in einem Online-Archiv abgelegt.</p>`,
      parts: [
        { points: 7,
          q: `<p><strong>a)</strong> Betrachte das Subnetz der Arbeitsplätze 192.168.40.64/26.</p>
            <p>aa) Gib die Subnetzmaske in dezimaler Punktschreibweise an. (1 P)</p>
            <p>bb) Gib die Broadcastadresse und die Adresse des Standardgateways an. (2 P)</p>
            <p>cc) Berechne die Anzahl der nutzbaren Hostadressen. (1 P)</p>
            <p>dd) Beurteile für jede der folgenden Adressen, ob du sie einem Arbeitsplatz-PC fest zuweisen kannst: 192.168.40.95 · 192.168.40.127 · 192.168.40.131 (3 P)</p>`,
          solution: `<p><strong>aa)</strong> /26 = 26 Einsen: 11111111.11111111.11111111.11000000 = <strong>255.255.255.192</strong></p>
            <p><strong>bb)</strong> Blockgröße 256 − 192 = 64 → das Netz reicht von 192.168.40.64 bis 192.168.40.127.<br>
              Broadcastadresse: <strong>192.168.40.127</strong> · Standardgateway (erste nutzbare Adresse): <strong>192.168.40.65</strong></p>
            <p><strong>cc)</strong> 32 − 26 = 6 Hostbits → 2⁶ − 2 = 64 − 2 = <strong>62 nutzbare Adressen</strong> (192.168.40.65 bis 192.168.40.126; davon belegt das Gateway eine).</p>
            <p><strong>dd)</strong></p>
            <ul>
              <li><strong>192.168.40.95 – ja:</strong> liegt im Bereich .65 bis .126 und ist weder Gateway noch Netz- oder Broadcastadresse.</li>
              <li><strong>192.168.40.127 – nein:</strong> Das ist die Broadcastadresse des Subnetzes.</li>
              <li><strong>192.168.40.131 – nein:</strong> Die Adresse gehört zum nächsten Subnetz 192.168.40.128/26. Der PC könnte sein Gateway nicht direkt erreichen.</li>
            </ul>
            <p><strong>Bewertung:</strong> aa) 1 P · bb) je Adresse 1 P · cc) 1 P (nur mit Rechenweg) · dd) je Adresse 1 P (nur mit Begründung).</p>` },
        { points: 4,
          q: `<p><strong>b)</strong> Die Firewall arbeitet zusätzlich mit IPv6.</p>
            <p>aa) Kürze die Adresse fd12:3400:0000:0000:0a0b:0000:0000:0001 so weit wie möglich. (1 P)</p>
            <p>bb) Schreibe die Adresse 2001:db8:c0:1::2a vollständig aus. (1 P)</p>
            <p>cc) Nenne zwei Unterschiede zwischen IPv4 und IPv6. (2 P)</p>`,
          solution: `<p><strong>aa)</strong> <strong>fd12:3400::a0b:0:0:1</strong><br>
              Führende Nullen je Block entfallen (0a0b → a0b, 0001 → 1). Es gibt zwei gleich lange Nullblöcke; „::“ darf nur <strong>einmal</strong> vorkommen und ersetzt nach der Empfehlung RFC 5952 den ersten der beiden. Die Schreibweise fd12:3400:0:0:a0b::1 ist ebenfalls gültig. Falsch wäre fd12:3400::a0b::1 (zweimal „::“ – die Adresse wäre nicht mehr eindeutig).</p>
            <p><strong>bb)</strong> Die Kurzform hat fünf Blöcke, „::“ steht also für 8 − 5 = 3 Nullblöcke: <strong>2001:0db8:00c0:0001:0000:0000:0000:002a</strong></p>
            <p><strong>cc)</strong> Zwei der folgenden Unterschiede:</p>
            <ul>
              <li>Adresslänge 128 Bit statt 32 Bit (dadurch viel größerer Adressraum),</li>
              <li>Schreibweise hexadezimal in acht Blöcken mit Doppelpunkt statt dezimal in vier Oktetten mit Punkt,</li>
              <li>kein Broadcast mehr (stattdessen Multicast),</li>
              <li>automatische Adresskonfiguration ohne DHCP-Server per SLAAC möglich,</li>
              <li>jede Schnittstelle hat automatisch eine Link-Local-Adresse (fe80::/10); NAT ist wegen des großen Adressraums in der Regel nicht nötig.</li>
            </ul>
            <p><strong>Hinweis:</strong> fd12:… ist eine Unique Local Address (fc00::/7, vergleichbar mit privaten IPv4-Adressen). 2001:db8::/32 ist für Dokumentation und Beispiele reserviert.</p>
            <p><strong>Bewertung:</strong> aa) 1 P · bb) 1 P · cc) je Unterschied 1 P.</p>` },
        { points: 6,
          q: `<p><strong>c)</strong> Nach dem Umzug melden sich drei Beschäftigte beim Support. Du erhältst folgende Ausgaben:</p>
            <p><strong>PC-07:</strong> „Ich komme weder ins Internet noch auf den Server.“</p>
            <pre><code>C:\\&gt; ipconfig
Ethernet-Adapter Ethernet:
   Autokonfiguration IPv4-Adresse . . : 169.254.88.12
   Subnetzmaske  . . . . . . . . . . : 255.255.0.0
   Standardgateway . . . . . . . . . :</code></pre>
            <p><strong>PC-03:</strong> „Das Steuerportal im Browser lädt nicht.“</p>
            <pre><code>C:\\&gt; ping 192.168.40.65
Antwort von 192.168.40.65: Bytes=32 Zeit=1ms TTL=64
C:\\&gt; ping 9.9.9.9
Antwort von 9.9.9.9: Bytes=32 Zeit=14ms TTL=57
C:\\&gt; ping www.elster.de
Ping-Anforderung konnte Host "www.elster.de" nicht finden.</code></pre>
            <p><strong>PC-11</strong> (Notebook im Besprechungsraum, per WLAN verbunden): „Die Kanzleisoftware ist extrem langsam.“</p>
            <pre><code>C:\\&gt; ping 192.168.40.10
Antwort von 192.168.40.10: Bytes=32 Zeit=148ms TTL=127
Zeitüberschreitung der Anforderung.
Antwort von 192.168.40.10: Bytes=32 Zeit=287ms TTL=127
Antwort von 192.168.40.10: Bytes=32 Zeit=193ms TTL=127
    Pakete: Gesendet = 4, Empfangen = 3, Verloren = 1 (25% Verlust)</code></pre>
            <p>Nenne für jeden PC die wahrscheinliche Fehlerursache und einen sinnvollen nächsten Schritt (mit Befehl, wo es passt).</p>`,
          solution: `<table><thead><tr><th>PC</th><th>Wahrscheinliche Ursache</th><th>Nächster Schritt</th></tr></thead><tbody>
              <tr><td>PC-07</td><td>169.254.x.x ist eine <strong>APIPA-Adresse</strong>: Der PC hat <strong>keinen DHCP-Server erreicht</strong> und sich selbst eine Adresse gegeben (ohne Gateway). Mögliche Gründe: Kabel oder Switchport defekt, falsches VLAN, DHCP-Dienst gestoppt oder Adresspool erschöpft.</td><td>Kabel, Link-LED und Switchport prüfen, DHCP-Dienst kontrollieren, dann mit <code>ipconfig /release</code> und <code>ipconfig /renew</code> eine neue Adresse anfordern.</td></tr>
              <tr><td>PC-03</td><td>Gateway und Internet sind per IP-Adresse erreichbar, nur der <strong>Name wird nicht aufgelöst</strong> → <strong>DNS-Problem</strong> (falscher oder fehlender DNS-Server-Eintrag, DNS-Server nicht erreichbar).</td><td>Mit <code>ipconfig /all</code> den eingetragenen DNS-Server prüfen, mit <code>nslookup www.elster.de</code> die Namensauflösung testen, ggf. <code>ipconfig /flushdns</code>.</td></tr>
              <tr><td>PC-11</td><td>Sehr hohe Antwortzeiten (148–287 ms statt wenige ms im LAN) und 25 % Paketverlust deuten auf eine <strong>gestörte oder überlastete WLAN-Verbindung</strong> hin (schwaches Signal, Kanalüberlappung mit Nachbarnetzen, zu viele Clients am Access Point).</td><td>Signalstärke und Kanal prüfen, zum Vergleich per LAN-Kabel testen (<code>ping -t 192.168.40.10</code>), ggf. den Access Point versetzen oder einen weiteren einplanen.</td></tr>
            </tbody></table>
            <p><strong>Bewertung:</strong> je PC 1 P für die Ursache und 1 P für einen passenden nächsten Schritt.</p>` },
        { points: 4,
          q: `<p><strong>d)</strong> Die Belege werden als A4-Seite mit 300 dpi gescannt. Das ergibt 2.480 × 3.508 Bildpunkte bei 24 Bit Farbtiefe.</p>
            <p>aa) Berechne den Speicherbedarf einer unkomprimierten Seite in MiB. (2 P)</p>
            <p>bb) Als komprimiertes PDF ist eine Seite im Mittel 380 KiB groß. Pro Monat fallen 4.000 Seiten an. Berechne die monatliche Datenmenge in GiB und die Zeit, die der Upload über eine Leitung mit 40 Mbit/s dauert (Ergebnis in Minuten und Sekunden, Protokoll-Overhead vernachlässigen). (2 P)</p>`,
          solution: `<p><strong>aa)</strong> 2.480 × 3.508 = 8.699.840 Bildpunkte; 24 Bit = 3 Byte je Bildpunkt<br>
              8.699.840 × 3 Byte = 26.099.520 Byte<br>
              26.099.520 Byte ÷ 1.024 ÷ 1.024 ≈ <strong>24,89 MiB</strong> (≈ 26,1 MB dezimal)</p>
            <p><strong>bb)</strong> Datenmenge: 4.000 × 380 KiB = 1.520.000 KiB; ÷ 1.024 = 1.484,375 MiB; ÷ 1.024 ≈ <strong>1,45 GiB pro Monat</strong><br>
              In Bit: 1.520.000 × 1.024 Byte × 8 = 12.451.840.000 bit<br>
              Übertragungszeit: 12.451.840.000 bit ÷ 40.000.000 bit/s ≈ 311,3 s ≈ <strong>5 min 11 s</strong></p>
            <div class="callout achtung"><strong>Prüfungsfalle:</strong> Datenmengen sind binär (1 KiB = 1.024 Byte), Datenraten dezimal (1 Mbit/s = 1.000.000 bit/s). Und: Byte × 8 = Bit – wer den Faktor 8 vergisst, erhält nur 39 Sekunden.</div>
            <p><strong>Bewertung:</strong> aa) Rechenweg 1 P, Ergebnis in MiB 1 P · bb) GiB 1 P, Upload-Zeit 1 P.</p>` },
        { points: 4,
          q: `<p><strong>e)</strong> Die vier Homeoffice-Beschäftigten greifen von zu Hause auf die Kanzleisoftware zu.</p>
            <p>aa) Erläutere, wie ein VPN die Verbindung zwischen Homeoffice und Kanzlei schützt. (2 P)</p>
            <p>bb) Nenne zwei weitere Maßnahmen, mit denen die Notebooks im Homeoffice abgesichert werden. (2 P)</p>`,
          solution: `<p><strong>aa)</strong> Ein VPN baut über das unsichere Internet einen <strong>verschlüsselten Tunnel</strong> zwischen dem Notebook und der Firewall der Kanzlei auf. Die Mandantendaten können unterwegs weder mitgelesen noch unbemerkt verändert werden (Vertraulichkeit und Integrität). Außerdem müssen sich Gerät bzw. Benutzer <strong>authentifizieren</strong>, bevor der Tunnel steht – nur Berechtigte kommen ins Kanzleinetz. Das Notebook verhält sich danach so, als wäre es direkt im Kanzleinetz.</p>
            <p><strong>bb)</strong> Zwei der folgenden Maßnahmen:</p>
            <ul>
              <li>Festplattenverschlüsselung (z. B. BitLocker mit TPM), damit bei Diebstahl niemand die Daten lesen kann,</li>
              <li>Zwei-Faktor-Authentifizierung für die VPN-Anmeldung,</li>
              <li>keine lokalen Administratorrechte für die Beschäftigten,</li>
              <li>automatische Updates für Betriebssystem und Anwendungen,</li>
              <li>Endpoint-Security bzw. Virenschutz und aktivierte Personal Firewall,</li>
              <li>automatische Bildschirmsperre, Blickschutzfolie, Sperre von USB-Massenspeichern.</li>
            </ul>
            <p><strong>Bewertung:</strong> aa) verschlüsselter Tunnel 1 P, Authentifizierung bzw. Schutzwirkung 1 P · bb) je Maßnahme 1 P.</p>` }
      ] },
    { id: "pk-a-4", set: "A", title: "Aufgabe 4: IT-Sicherheit, Datenschutz und Qualitätssicherung", points: 25,
      scenario: `<p><strong>Situation zu Aufgabe 4:</strong> Die Friesenhof Steuerberatung arbeitet mit einer Kanzleisoftware. Sie enthält Mandantenstammdaten, Steuererklärungen und Lohnabrechnungen – unter anderem Steuerklasse, Konfession (für die Kirchensteuer) und Krankheitstage der Beschäftigten der Mandanten. Die Software läuft auf dem Kanzleiserver, der zusätzlich den Druckdienst bereitstellt. Jede Nacht sichert ein Skript die Daten auf ein NAS. Vor der Übergabe sollst du Sicherheit, Datenschutz und Qualität der neuen Arbeitsplätze prüfen.</p>`,
      parts: [
        { points: 4,
          q: `<p><strong>a)</strong> Die Kanzlei führt eine Schutzbedarfsfeststellung nach BSI IT-Grundschutz durch (Kategorien normal, hoch, sehr hoch).</p>
            <p>aa) Bestimme den Schutzbedarf der Kanzleisoftware für die drei Schutzziele Vertraulichkeit, Integrität und Verfügbarkeit und begründe jede Einstufung mit einem möglichen Schaden. (3 P)</p>
            <p>bb) Der Druckdienst allein hat überall den Schutzbedarf „normal“. Gib an, welchen Schutzbedarf der Server bei der Vertraulichkeit erhält, und nenne das Prinzip, nach dem du vorgehst. (1 P)</p>`,
          solution: `<p><strong>aa)</strong> Erwartungshorizont (andere Einstufungen sind möglich, wenn sie schlüssig begründet sind):</p>
            <table><thead><tr><th>Schutzziel</th><th>Schutzbedarf</th><th>Begründung</th></tr></thead><tbody>
              <tr><td>Vertraulichkeit</td><td><strong>sehr hoch</strong></td><td>Steuerberater unterliegen einer strafbewehrten Verschwiegenheitspflicht (§ 203 StGB). Konfession und Gesundheitsdaten sind besondere Kategorien personenbezogener Daten (Art. 9 DSGVO). Ein Datenabfluss hätte hohe Bußgelder, Schadensersatzforderungen und einen erheblichen Vertrauensverlust zur Folge – möglicherweise existenzbedrohend.</td></tr>
              <tr><td>Integrität</td><td><strong>hoch</strong></td><td>Verfälschte Steuer- oder Lohndaten führen zu falschen Erklärungen, Nachzahlungen und Haftungsansprüchen der Mandanten gegen die Kanzlei.</td></tr>
              <tr><td>Verfügbarkeit</td><td><strong>hoch</strong></td><td>Die Kanzlei muss feste Fristen einhalten (z. B. monatliche Lohnabrechnungen, Abgabefristen). Ein Ausfall über mehrere Tage führt zu Fristversäumnissen und Verspätungszuschlägen. „Normal“ ist vertretbar, wenn ein Ausfall von bis zu einem Tag ohne Folgen überbrückt werden kann.</td></tr>
            </tbody></table>
            <p><strong>bb)</strong> Nach dem <strong>Maximumprinzip</strong> erhält der Server den höchsten Schutzbedarf aller Anwendungen, die auf ihm laufen: Vertraulichkeit <strong>sehr hoch</strong>.</p>
            <p><strong>Bewertung:</strong> aa) je Schutzziel 1 P für eine Einstufung mit passender Begründung (ohne Begründung 0 P) · bb) 1 P für Einstufung und Prinzip.</p>` },
        { points: 6,
          q: `<p><strong>b)</strong> Die Kanzlei will Steuerbescheide und Lohnabrechnungen per E-Mail verschicken, und zwar Ende-zu-Ende-verschlüsselt und digital signiert.</p>
            <p>aa) Erkläre, wie bei einer hybriden Verschlüsselung eine E-Mail an einen Mandanten verschlüsselt wird, und nenne den Vorteil gegenüber einer rein asymmetrischen Verschlüsselung. (3 P)</p>
            <p>bb) Beschreibe, wie eine digitale Signatur erstellt und geprüft wird und welche Schutzziele sie sicherstellt. (2 P)</p>
            <p>cc) Die zwölf Beschäftigten wollen auch untereinander verschlüsselt kommunizieren. Berechne, wie viele Schlüssel bei symmetrischer und wie viele bei asymmetrischer Verschlüsselung benötigt werden. (1 P)</p>`,
          solution: `<p><strong>aa)</strong> Ablauf der hybriden Verschlüsselung:</p>
            <ol>
              <li>Das E-Mail-Programm der Kanzlei erzeugt einen zufälligen <strong>symmetrischen Sitzungsschlüssel</strong> und verschlüsselt damit die Nachricht samt Anhang (schnell, auch bei großen Dateien).</li>
              <li>Der Sitzungsschlüssel wird mit dem <strong>öffentlichen Schlüssel des Mandanten</strong> asymmetrisch verschlüsselt und mitgeschickt.</li>
              <li>Nur der Mandant kann den Sitzungsschlüssel mit seinem <strong>privaten Schlüssel</strong> entschlüsseln und damit die Nachricht lesen.</li>
            </ol>
            <p>Vorteil: Die rechenaufwendige asymmetrische Verschlüsselung wird nur für den kurzen Schlüssel verwendet, die eigentlichen Daten werden schnell symmetrisch verschlüsselt. Gleichzeitig ist das Problem des sicheren Schlüsselaustauschs gelöst.</p>
            <p><strong>bb)</strong> Die Kanzlei bildet einen <strong>Hashwert</strong> der Nachricht und verschlüsselt (signiert) ihn mit ihrem <strong>privaten Schlüssel</strong>. Der Empfänger entschlüsselt die Signatur mit dem <strong>öffentlichen Schlüssel der Kanzlei</strong>, bildet selbst den Hashwert der empfangenen Nachricht und vergleicht beide Werte. Stimmen sie überein, ist die Nachricht unverändert (<strong>Integrität</strong>) und stammt nachweislich von der Kanzlei (<strong>Authentizität</strong>, auch Nichtabstreitbarkeit). Dass der öffentliche Schlüssel wirklich zur Kanzlei gehört, bestätigt ein Zertifikat.</p>
            <p><strong>cc)</strong> Symmetrisch: n × (n − 1) ÷ 2 = 12 × 11 ÷ 2 = <strong>66 Schlüssel</strong> · asymmetrisch: 2 × n = 2 × 12 = <strong>24 Schlüssel</strong> (12 Schlüsselpaare)</p>
            <p><strong>Bewertung:</strong> aa) Ablauf 2 P, Vorteil 1 P · bb) Erstellen und Prüfen 1 P, Schutzziele 1 P · cc) 1 P für beide Werte.</p>` },
        { points: 6,
          q: `<p><strong>c)</strong> Das Sicherungsskript protokolliert, wie lange jede nächtliche Sicherung gedauert hat (in Minuten). Folgende Funktion wertet das Protokoll aus:</p>
            <pre><code>funktion pruefeSicherungen(dauer, limit)
    ok = 0
    warnungen = 0
    summe = 0
    kritisch = falsch
    für i = 0 bis länge(dauer) - 1
        wenn dauer[i] &gt; limit dann
            warnungen = warnungen + 1
            wenn dauer[i] &gt; 1,5 * limit dann
                kritisch = wahr
            ende wenn
        sonst
            ok = ok + 1
            summe = summe + dauer[i]
        ende wenn
    ende für
    wenn ok &gt; 0 dann
        schnitt = summe / ok
    sonst
        schnitt = 0
    ende wenn
    rückgabe warnungen, schnitt, kritisch
ende funktion</code></pre>
            <p>Hinweis: Das erste Element eines Arrays hat den Index 0; länge(dauer) liefert die Anzahl der Elemente.</p>
            <p>aa) Führe für den Aufruf <code>pruefeSicherungen([42, 75, 38, 96, 50], 60)</code> einen Schreibtischtest durch. Trage die Werte von i, dauer[i], warnungen, kritisch, ok und summe nach jedem Schleifendurchlauf in eine Tabelle ein und gib die Rückgabewerte an. (5 P)</p>
            <p>bb) Beschreibe in einem Satz, welche Aufgabe die Funktion erfüllt. (1 P)</p>`,
          solution: `<p><strong>aa)</strong> Grenze für „kritisch“: 1,5 × 60 = 90 Minuten</p>
            <table><thead><tr><th>i</th><th>dauer[i]</th><th>Prüfung</th><th>warnungen</th><th>kritisch</th><th>ok</th><th>summe</th></tr></thead><tbody>
              <tr><td>–</td><td>–</td><td>Startwerte</td><td>0</td><td>falsch</td><td>0</td><td>0</td></tr>
              <tr><td>0</td><td>42</td><td>42 &gt; 60? nein</td><td>0</td><td>falsch</td><td>1</td><td>42</td></tr>
              <tr><td>1</td><td>75</td><td>75 &gt; 60? ja; 75 &gt; 90? nein</td><td>1</td><td>falsch</td><td>1</td><td>42</td></tr>
              <tr><td>2</td><td>38</td><td>38 &gt; 60? nein</td><td>1</td><td>falsch</td><td>2</td><td>80</td></tr>
              <tr><td>3</td><td>96</td><td>96 &gt; 60? ja; 96 &gt; 90? ja</td><td>2</td><td>wahr</td><td>2</td><td>80</td></tr>
              <tr><td>4</td><td>50</td><td>50 &gt; 60? nein</td><td>2</td><td>wahr</td><td>3</td><td>130</td></tr>
            </tbody></table>
            <p>Nach der Schleife: ok = 3 &gt; 0 → schnitt = 130 ÷ 3 ≈ 43,33</p>
            <p><strong>Rückgabe: warnungen = 2, schnitt ≈ 43,33, kritisch = wahr</strong></p>
            <p><strong>bb)</strong> Die Funktion zählt, wie viele Sicherungen länger als das Zeitlimit gedauert haben, berechnet die durchschnittliche Dauer der Sicherungen innerhalb des Limits und meldet, ob mindestens eine Sicherung das Limit um mehr als 50 % überschritten hat.</p>
            <p><strong>Bewertung:</strong> aa) je richtig ausgefüllter Durchlaufzeile 0,5 P (2,5 P), Umgang mit der verschachtelten Verzweigung (kritisch) 1 P, Rückgabewerte 1,5 P · bb) 1 P.</p>` },
        { points: 2,
          q: `<p><strong>d)</strong> Zwei Änderungswünsche zur Funktion aus c):</p>
            <p>aa) Ein Kollege schreibt die Schleife als <code>für i = 0 bis länge(dauer)</code>. Erkläre, welcher Fehler dann beim Aufruf aus c) auftritt. (1 P)</p>
            <p>bb) Eine Sicherung, die genau so lange dauert wie das Limit, soll künftig ebenfalls als Warnung zählen. Gib die geänderte Programmzeile an. (1 P)</p>`,
          solution: `<p><strong>aa)</strong> Die Schleife läuft dann bis i = 5. Das Array hat aber nur die Indizes 0 bis 4 – der Zugriff auf dauer[5] liegt <strong>außerhalb des Arrays</strong>. Es entsteht ein Laufzeitfehler (Index-Fehler). Typischer <strong>Off-by-one-Fehler</strong>.</p>
            <p><strong>bb)</strong> <code>wenn dauer[i] &gt;= limit dann</code> (statt &gt;)</p>
            <p><strong>Bewertung:</strong> je 1 P.</p>` },
        { points: 4,
          q: `<p><strong>e)</strong> Vor der Abnahme testest du jeden neuen Arbeitsplatz anhand eines Testprotokolls. Die erste Zeile ist vorgegeben:</p>
            <table><thead><tr><th>Nr.</th><th>Testfall</th><th>Erwartetes Ergebnis</th><th>Tatsächliches Ergebnis</th><th>i. O. / n. i. O.</th></tr></thead><tbody>
              <tr><td>1</td><td>Anmeldung mit dem Domänenkonto der Mitarbeiterin</td><td>Anmeldung gelingt, Benutzerprofil und Desktop werden geladen</td><td></td><td></td></tr>
            </tbody></table>
            <p>Ergänze vier weitere sinnvolle Testfälle mit dem jeweils erwarteten Ergebnis.</p>`,
          solution: `<p>Vier der folgenden Testfälle (oder andere, sofern das erwartete Ergebnis eindeutig überprüfbar ist):</p>
            <table><thead><tr><th>Nr.</th><th>Testfall</th><th>Erwartetes Ergebnis</th></tr></thead><tbody>
              <tr><td>2</td><td>Netzlaufwerk „Mandanten“ öffnen, Testdatei anlegen und löschen</td><td>Laufwerk ist verbunden, Schreiben und Löschen funktionieren</td></tr>
              <tr><td>3</td><td>Mit dem Konto einer Mitarbeiterin ohne Lohnberechtigung den Ordner „Lohn“ öffnen</td><td>Zugriff wird verweigert</td></tr>
              <tr><td>4</td><td>Testseite auf dem Etagendrucker drucken</td><td>Seite wird vollständig und sauber gedruckt</td></tr>
              <tr><td>5</td><td>Kanzleisoftware starten und einen Testmandanten öffnen</td><td>Software startet ohne Fehlermeldung, Daten werden angezeigt</td></tr>
              <tr><td>6</td><td>Notebook an die Dockingstation anschließen</td><td>Beide Monitore zeigen einen erweiterten Desktop, Netzwerk und Laden funktionieren</td></tr>
              <tr><td>7</td><td>VPN-Verbindung aus einem fremden Netz (z. B. Smartphone-Hotspot) aufbauen</td><td>Tunnel wird nach Eingabe des zweiten Faktors aufgebaut, Kanzleisoftware ist erreichbar</td></tr>
              <tr><td>8</td><td>www.elster.de im Browser aufrufen</td><td>Seite lädt (Internet und DNS funktionieren)</td></tr>
              <tr><td>9</td><td>Testdatei aus der Nachtsicherung wiederherstellen</td><td>Datei ist vollständig und lässt sich öffnen</td></tr>
            </tbody></table>
            <p><strong>Bewertung:</strong> je Testfall mit passendem, überprüfbarem Soll-Ergebnis 1 P. Vage Angaben wie „funktioniert“ ohne konkreten Prüfpunkt: 0,5 P.</p>` },
        { points: 3,
          q: `<p><strong>f)</strong> Ein ehemaliger Mandant schreibt der Kanzlei per E-Mail: „Teilen Sie mir mit, welche Daten Sie über mich gespeichert haben, und löschen Sie sofort alles.“</p>
            <p>Beurteile beide Forderungen nach der DSGVO und beschreibe, wie die Kanzlei vorgehen sollte.</p>`,
          solution: `<ul>
              <li><strong>Auskunft (Art. 15 DSGVO):</strong> Der Mandant hat das Recht zu erfahren, welche Daten die Kanzlei über ihn verarbeitet, zu welchem Zweck, wie lange sie gespeichert werden und woher sie stammen. Er erhält auch eine Kopie. Die Kanzlei muss grundsätzlich <strong>innerhalb eines Monats</strong> antworten (Art. 12 Abs. 3) und vorher prüfen, ob die Anfrage wirklich vom Mandanten stammt.</li>
              <li><strong>Löschung (Art. 17 DSGVO):</strong> Das Recht auf Löschung gilt <strong>nicht</strong>, solange die Kanzlei zur Aufbewahrung gesetzlich verpflichtet ist (Art. 17 Abs. 3 lit. b), z. B. durch steuer- und handelsrechtliche Aufbewahrungsfristen (Abgabenordnung, HGB) und die Aufbewahrungspflicht für Handakten nach dem Steuerberatungsgesetz. Eine <strong>sofortige vollständige Löschung ist daher nicht zulässig</strong>.</li>
              <li><strong>Vorgehen:</strong> Daten, für die keine Aufbewahrungspflicht besteht (z. B. Newsletter-Adresse), löschen. Die übrigen Daten sperren (Einschränkung der Verarbeitung) und nach Ablauf der Fristen löschen. Dem Mandanten schriftlich mitteilen, was gelöscht wurde, was aus welchem Grund noch aufbewahrt wird und wann es gelöscht wird.</li>
            </ul>
            <p><strong>Bewertung:</strong> Auskunft 1 P, Löschung mit Ausnahme Aufbewahrungspflicht 1 P, sinnvolles Vorgehen 1 P.</p>` }
      ] },

    /* ================= Probeklausur B – Kunde: Gemüse-Genossenschaft in Wesselburen ================= */
    { id: "pk-b-1", set: "B", title: "Aufgabe 1: Videoüberwachung im Wareneingang", points: 25,
      scenario: `<p><strong>Ausgangssituation (gilt für alle Aufgaben der Probeklausur B):</strong> Du bist Auszubildende bzw. Auszubildender der <strong>Deichblick IT-Service GmbH</strong> in Meldorf. Euer Kunde ist die <strong>Dithmarscher Gemüsehof eG</strong> in Wesselburen, eine Genossenschaft von 40 landwirtschaftlichen Betrieben. Sie nimmt Kohl und anderes Gemüse ihrer Mitglieder an, lagert es und verkauft es an den Handel. Die eG hat 65 Beschäftigte (Verwaltung mit 15 Büroarbeitsplätzen, Lagerhalle mit Wareneingang und Kühlhaus) und einen Betriebsrat. Im Jahr 2027 modernisiert sie ihre IT.</p>
        <p><strong>Situation zu Aufgabe 1:</strong> Im Wareneingang sind mehrfach Paletten verschwunden. Die eG beauftragt die Deichblick IT, an der Außenseite der Halle <strong>sechs IP-Kameras</strong> zu installieren. Die Kameras werden über einen PoE-Switch versorgt, ein Netzwerkvideorekorder (NVR) speichert die Aufnahmen. Laut Vertrag schuldet die Deichblick IT die <strong>betriebsbereite Einrichtung</strong> der Anlage. Auszug aus dem Datenblatt der Kamera:</p>
        <pre><code>NC-420 Outdoor Bullet Camera - Key features
- 4 MP resolution, H.265 video compression
- IR range: up to 40 m (night vision)
- Built-in heater: allows operation at ambient
  temperatures down to -35 °C
- Weatherproof housing: IP67
- Power supply: PoE (IEEE 802.3at, Class 4) or 12 V DC
- Max. power consumption: 19.5 W (heater on),
  7.8 W (heater off)</code></pre>`,
      parts: [
        { points: 4,
          q: `<p><strong>a)</strong> Werte das Datenblatt aus. Antworte auf Deutsch.</p>
            <p>aa) Erkläre die Angaben „IR range: up to 40 m“ und „Built-in heater“ und begründe jeweils, warum sie für den Einsatzort wichtig sind. (2 P)</p>
            <p>bb) Erkläre die Schutzart IP67. (1 P)</p>
            <p>cc) Begründe mit dem Datenblatt, warum ein Switch-Port nach IEEE 802.3af für diese Kamera nicht ausreicht. (1 P)</p>`,
          solution: `<p><strong>aa)</strong></p>
            <ul>
              <li><strong>IR range: up to 40 m</strong> – Die Kamera hat eine Infrarotbeleuchtung und kann <strong>bei Dunkelheit bis zu 40 m weit</strong> aufnehmen. Wichtig, weil Paletten vor allem nachts verschwinden und der Hof dann nicht beleuchtet ist.</li>
              <li><strong>Built-in heater</strong> – eingebaute <strong>Heizung</strong>, die den Betrieb bis −35 °C Außentemperatur ermöglicht und Beschlagen bzw. Vereisen verhindert. Wichtig, weil die Kameras im Winter an der Außenwand hängen.</li>
            </ul>
            <p><strong>bb)</strong> IP = International Protection (Schutzart nach DIN EN 60529). Die <strong>6</strong> bedeutet <strong>staubdicht</strong>, die <strong>7</strong> Schutz gegen <strong>zeitweiliges Untertauchen</strong> in Wasser. Regen und Schnee schaden der Kamera also nicht.</p>
            <p><strong>cc)</strong> Mit Heizung braucht die Kamera bis zu <strong>19,5 W</strong>. IEEE 802.3af garantiert am Endgerät nur <strong>12,95 W</strong> (15,4 W am Switch-Port). Deshalb ist PoE+ nach IEEE 802.3at nötig (25,5 W am Gerät, 30 W am Port).</p>
            <p><strong>Bewertung:</strong> aa) je Angabe mit Bezug zum Einsatzort 1 P · bb) 1 P (beide Ziffern) · cc) 1 P (Vergleich der Werte).</p>` },
        { points: 5,
          q: `<p><strong>b)</strong> Vorgesehen ist ein Switch mit 8 PoE+-Ports (IEEE 802.3at) und einem PoE-Gesamtbudget von <strong>150 W</strong>. Der Switch reserviert für jedes angeschlossene Gerät die <strong>maximale Portleistung seiner Leistungsklasse</strong>.</p>
            <p>aa) Berechne die Stromstärke einer Kamera bei maximaler Leistungsaufnahme und einer Spannung von 48 V. Gib das Ergebnis in mA an. (2 P)</p>
            <p>bb) Prüfe, ob das PoE-Budget für alle sechs Kameras ausreicht, und mache gegebenenfalls einen Lösungsvorschlag. (3 P)</p>`,
          solution: `<p><strong>aa)</strong> P = U × I → I = P ÷ U = 19,5 W ÷ 48 V ≈ 0,406 A ≈ <strong>406 mA</strong></p>
            <p><strong>bb)</strong> Class 4 (802.3at) → der Switch reserviert <strong>30 W je Port</strong>.<br>
              6 × 30 W = <strong>180 W &gt; 150 W</strong> → <strong>Das Budget reicht nicht.</strong> Mit 150 W ÷ 30 W = 5 lassen sich nur fünf Kameras versorgen.<br>
              Zum Vergleich: Tatsächlich nehmen die Kameras höchstens 6 × 19,5 W = 117 W auf. Weil der Switch aber nach Klasse reserviert, zählt der höhere Wert.</p>
            <p><strong>Lösungsvorschläge</strong> (einer genügt): Switch mit größerem PoE-Budget (mindestens 180 W, besser mit Reserve, z. B. 240 W) wählen; einen Switch einsetzen, der die Leistung nach dem tatsächlichen Bedarf zuteilt (Aushandlung per LLDP); die sechste Kamera über einen PoE-Injektor oder ein 12-V-Netzteil versorgen.</p>
            <p><strong>Bewertung:</strong> aa) Formel und Rechenweg 1 P, Ergebnis in mA 1 P · bb) Rechnung 1 P, Ergebnis/Aussage 1 P, Lösungsvorschlag 1 P.</p>` },
        { points: 5,
          q: `<p><strong>c)</strong> Jede Kamera sendet einen konstanten Videostrom von <strong>6 Mbit/s</strong>. Die Aufnahmen sollen <strong>72 Stunden</strong> lang aufbewahrt werden.</p>
            <p>aa) Berechne die Datenmenge aller sechs Kameras für 72 Stunden in GiB und in TiB. (3 P)</p>
            <p>bb) Im NVR steckt eine Festplatte mit 2 TB (Herstellerangabe). Berechne, wie viele volle Tage an Aufnahmen aller Kameras darauf passen. (2 P)</p>`,
          solution: `<p><strong>aa)</strong> 6 Mbit/s = 6.000.000 bit/s ÷ 8 = 750.000 Byte/s je Kamera<br>
              72 h = 72 × 3.600 s = 259.200 s<br>
              Alle Kameras: 6 × 750.000 Byte/s × 259.200 s = 1.166.400.000.000 Byte<br>
              ÷ 1.024³ ≈ <strong>1.086,29 GiB</strong> · ÷ 1.024 ≈ <strong>1,06 TiB</strong></p>
            <p><strong>bb)</strong> Datenmenge pro Tag: 6 × 750.000 Byte/s × 86.400 s = 388.800.000.000 Byte<br>
              Die Herstellerangabe ist dezimal: 2 TB = 2.000.000.000.000 Byte<br>
              2.000.000.000.000 ÷ 388.800.000.000 ≈ 5,14 → <strong>5 volle Tage</strong> (die geforderten 72 Stunden passen also).</p>
            <div class="callout achtung"><strong>Prüfungsfalle:</strong> Die Datenrate ist in Mbit/s (dezimal, Bit) angegeben, das Ergebnis wird in GiB/TiB (binär, Byte) verlangt. Erst durch 8 teilen, dann mit 1.024er-Schritten umrechnen. Festplattenhersteller rechnen dagegen dezimal: 2 TB sind nur rund 1,82 TiB.</div>
            <p><strong>Bewertung:</strong> aa) Umrechnung Mbit/s → Byte/s 1 P, Datenmenge in Byte 1 P, GiB und TiB 1 P · bb) Rechnung 1 P, Ergebnis 1 P.</p>` },
        { points: 7,
          q: `<p><strong>d)</strong> Die Kameras erfassen auch Beschäftigte und die Fahrerinnen und Fahrer der Mitgliedsbetriebe.</p>
            <p>aa) Nenne vier Anforderungen, die die eG beim Betrieb der Videoüberwachung nach der DSGVO erfüllen muss. (4 P)</p>
            <p>bb) Der Lagerleiter möchte die Aufnahmen zusätzlich nutzen, um die Pausenzeiten der Lagerbeschäftigten zu kontrollieren. Beurteile diesen Wunsch. (3 P)</p>`,
          solution: `<p><strong>aa)</strong> Vier der folgenden Anforderungen:</p>
            <ul>
              <li><strong>Rechtsgrundlage und Zweck:</strong> berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) mit dokumentierter Interessenabwägung; Zweck klar festlegen (Schutz vor Diebstahl).</li>
              <li><strong>Transparenz:</strong> gut sichtbares Hinweisschild vor dem überwachten Bereich (Verantwortlicher, Zweck, Kontakt zum Datenschutzbeauftragten, Speicherdauer, Hinweis auf weitere Informationen).</li>
              <li><strong>Datenminimierung:</strong> Kameras nur auf den Wareneingang ausrichten – keine Pausen- oder Sozialräume, keine öffentlichen Wege, ggf. Bereiche ausblenden.</li>
              <li><strong>Speicherbegrenzung:</strong> automatische Löschung nach 72 Stunden, wenn kein Vorfall vorliegt.</li>
              <li><strong>Zugriffsschutz (TOM):</strong> Zugriff auf Aufnahmen nur für wenige Berechtigte, starke Passwörter, Protokollierung der Zugriffe, verschlüsselte Übertragung, NVR in abgeschlossenem Raum.</li>
              <li><strong>Dokumentation:</strong> Eintrag im Verzeichnis von Verarbeitungstätigkeiten; prüfen, ob eine Datenschutz-Folgenabschätzung nötig ist.</li>
            </ul>
            <p><strong>bb)</strong> Der Wunsch ist <strong>abzulehnen</strong>:</p>
            <ul>
              <li><strong>Zweckbindung</strong> (Art. 5 Abs. 1 lit. b DSGVO): Die Aufnahmen werden zum Schutz vor Diebstahl erhoben und dürfen nicht nachträglich für die Kontrolle von Verhalten und Leistung genutzt werden.</li>
              <li>Eine dauerhafte Überwachung der Beschäftigten ist <strong>unverhältnismäßig</strong> und greift stark in ihr Persönlichkeitsrecht ein.</li>
              <li>Der <strong>Betriebsrat</strong> hat bei technischen Einrichtungen, die Verhalten oder Leistung der Beschäftigten überwachen können, ein <strong>Mitbestimmungsrecht</strong> (§ 87 Abs. 1 Nr. 6 BetrVG). Ohne Betriebsvereinbarung ist eine solche Nutzung nicht zulässig.</li>
            </ul>
            <p><strong>Bewertung:</strong> aa) je Anforderung 1 P · bb) je Argument 1 P, das Urteil muss erkennbar sein.</p>` },
        { points: 4,
          q: `<p><strong>e)</strong> Nach der Installation wird die Anlage gemeinsam mit der eG abgenommen.</p>
            <p>aa) Nenne vier Inhalte eines Abnahmeprotokolls. (2 P)</p>
            <p>bb) Erläutere zwei rechtliche Folgen, die die Abnahme für die Deichblick IT und die eG hat. (2 P)</p>`,
          solution: `<p><strong>aa)</strong> Vier der folgenden Inhalte (je 0,5 P): Vertragspartner und Auftrag (Auftragsnummer), Datum und Ort der Abnahme, abgenommene Leistung (sechs Kameras, Switch, NVR, Konfiguration), durchgeführte Prüfungen und Ergebnisse (z. B. Bild bei Nacht, Aufzeichnung, Löschung nach 72 h), festgestellte Mängel mit Frist zur Beseitigung, Vorbehalte, Unterschriften beider Parteien.</p>
            <p><strong>bb)</strong> Da ein Erfolg (die betriebsbereite Anlage) geschuldet ist, handelt es sich um einen <strong>Werkvertrag</strong>. Zwei der folgenden Folgen der Abnahme:</p>
            <ul>
              <li>Die <strong>Vergütung wird fällig</strong> – die Deichblick IT darf ihre Rechnung stellen.</li>
              <li>Die <strong>Gefahr geht auf die eG über</strong>: Wird die Anlage danach zufällig beschädigt, trägt die eG das Risiko.</li>
              <li>Die <strong>Verjährungsfrist für Mängelansprüche beginnt</strong> zu laufen.</li>
              <li>Die <strong>Beweislast</strong> für Mängel wechselt: Danach muss die eG nachweisen, dass ein Mangel vorliegt.</li>
              <li>Kennt die eG einen Mangel bei der Abnahme, muss sie sich ihre Rechte <strong>im Protokoll vorbehalten</strong>, sonst verliert sie Ansprüche wie die Nacherfüllung.</li>
            </ul>
            <p><strong>Bewertung:</strong> aa) je Inhalt 0,5 P · bb) je erläuterter Folge 1 P.</p>` }
      ] },
    { id: "pk-b-2", set: "B", title: "Aufgabe 2: Büroarbeitsplätze einrichten und Beschaffung abwickeln", points: 25,
      scenario: `<p><strong>Situation zu Aufgabe 2:</strong> Die Verwaltung der Dithmarscher Gemüsehof eG erhält neue Büroarbeitsplätze. Die Deichblick IT berät die eG bei der Ausstattung, prüft die Eingangsrechnungen des Lieferanten und begleitet die Einführung einer Tablet-App im Wareneingang. Eine Buchhalterin, Frau Petersen, ist stark sehbehindert.</p>`,
      parts: [
        { points: 4,
          q: `<p><strong>a)</strong> Bei der Besichtigung fällt dir der Arbeitsplatz der Einkaufsleiterin auf: Sie arbeitet ausschließlich an einem 14-Zoll-Notebook, das flach auf dem Schreibtisch liegt, ohne separate Tastatur und Maus. Der Schreibtisch steht so, dass sie direkt zum Fenster blickt. Ihr Bürostuhl lässt sich nicht in der Höhe verstellen, und ihre Füße erreichen den Boden nicht ganz. Sie arbeitet oft vier Stunden ohne Unterbrechung am Bildschirm und klagt über Nackenschmerzen und müde Augen.</p>
            <p>Nenne vier ergonomische Mängel und schlage jeweils eine Verbesserung vor.</p>`,
          solution: `<table><thead><tr><th>Mangel</th><th>Verbesserung</th></tr></thead><tbody>
              <tr><td>Blick direkt zum Fenster → Blendung, starker Hell-Dunkel-Kontrast, die Augen ermüden</td><td>Schreibtisch so drehen, dass die Blickrichtung parallel zur Fensterfront verläuft; Jalousie bzw. Blendschutz nutzen</td></tr>
              <tr><td>Notebook liegt flach → Kopf ist dauerhaft nach unten geneigt (Nackenschmerzen)</td><td>externen Monitor oder Notebookständer nutzen; Bildschirmoberkante höchstens in Augenhöhe, Abstand etwa 50–80 cm</td></tr>
              <tr><td>kleiner 14-Zoll-Bildschirm, keine externe Tastatur und Maus</td><td>Dockingstation mit großem Monitor (z. B. 24–27 Zoll), separater Tastatur und Maus</td></tr>
              <tr><td>Stuhl nicht höhenverstellbar, Füße ohne Bodenkontakt</td><td>ergonomischen, höhenverstellbaren Bürostuhl beschaffen, ggf. Fußstütze; Oberschenkel etwa waagerecht</td></tr>
              <tr><td>Stundenlange Bildschirmarbeit ohne Unterbrechung</td><td>regelmäßige Kurzpausen oder Wechsel zu anderen Tätigkeiten einplanen (Mischarbeit)</td></tr>
            </tbody></table>
            <p><strong>Bewertung:</strong> je Mangel mit passender Verbesserung 1 P (höchstens 4 P).</p>` },
        { points: 4,
          q: `<p><strong>b)</strong> Nenne je zwei Hardware- und zwei Software-Maßnahmen, mit denen der Arbeitsplatz von Frau Petersen barrierefrei gestaltet werden kann.</p>`,
          solution: `<div class="grid-2">
              <div><p><strong>Hardware</strong> (zwei davon):</p><ul>
                <li>großer, hochauflösender Monitor (z. B. 32 Zoll) an einem Monitorarm, damit sie ihn nah heranziehen kann,</li>
                <li>Braillezeile zur Ausgabe des Bildschirminhalts in Blindenschrift,</li>
                <li>Tastatur mit großen, kontrastreich beschrifteten Tasten,</li>
                <li>Headset bzw. Lautsprecher für die Sprachausgabe,</li>
                <li>Bildschirmlesegerät (Kamera mit Vergrößerung) für Papierbelege.</li></ul></div>
              <div><p><strong>Software</strong> (zwei davon):</p><ul>
                <li>Bildschirmlupe bzw. Vergrößerungssoftware,</li>
                <li>Screenreader (z. B. die Windows-Sprachausgabe oder NVDA),</li>
                <li>Kontrastdesign und große Skalierung bzw. Schriftgröße, großer Mauszeiger,</li>
                <li>Spracheingabe bzw. Diktierfunktion,</li>
                <li>Buchhaltungssoftware auswählen, die vollständig per Tastatur bedienbar und mit Screenreadern kompatibel ist.</li></ul></div>
            </div>
            <p><strong>Bewertung:</strong> je passender Maßnahme 1 P; es müssen zwei Hardware- und zwei Software-Maßnahmen sein.</p>` },
        { points: 8,
          q: `<p><strong>c)</strong> Im Angebot des Lieferanten wurden vereinbart: <strong>5 % Rabatt</strong> auf den gesamten Warenwert, <strong>2 % Skonto</strong> bei Zahlung innerhalb von 10 Tagen ab Rechnungsdatum, sonst 30 Tage netto. Die Rechnung vom <strong>Dienstag, 13.04.2027</strong> lautet (Auszug):</p>
            <table><thead><tr><th>Pos.</th><th>Menge</th><th>Artikel</th><th>Einzelpreis</th><th>Gesamtpreis</th></tr></thead><tbody>
              <tr><td>1</td><td>8</td><td>Monitor 27 Zoll, USB-C</td><td>219,00 €</td><td>1.752,00 €</td></tr>
              <tr><td>2</td><td>8</td><td>Dockingstation USB-C</td><td>164,50 €</td><td>1.361,00 €</td></tr>
              <tr><td>3</td><td>1</td><td>Multifunktionsdrucker A3</td><td>1.890,00 €</td><td>1.890,00 €</td></tr>
              <tr><td>4</td><td>8</td><td>Tastatur-Maus-Set</td><td>39,90 €</td><td>319,20 €</td></tr>
              <tr><td></td><td></td><td>Summe Warenwert</td><td></td><td>5.322,20 €</td></tr>
              <tr><td></td><td></td><td>− 3 % Rabatt</td><td></td><td>159,67 €</td></tr>
              <tr><td></td><td></td><td>Nettobetrag</td><td></td><td>5.162,53 €</td></tr>
              <tr><td></td><td></td><td>+ 19 % Umsatzsteuer</td><td></td><td>1.011,22 €</td></tr>
              <tr><td></td><td></td><td>Rechnungsbetrag</td><td></td><td>6.173,75 €</td></tr>
            </tbody></table>
            <p>aa) Prüfe die Rechnung und nenne drei Fehler. (3 P)</p>
            <p>bb) Berechne den korrekten Rechnungsbetrag. (3 P)</p>
            <p>cc) Berechne den Zahlbetrag bei Skontoabzug und gib an, bis zu welchem Datum die eG dafür zahlen muss. (2 P)</p>`,
          solution: `<p><strong>aa)</strong> Fehler:</p>
            <ol>
              <li><strong>Pos. 2:</strong> 8 × 164,50 € = 1.316,00 € – berechnet wurden 1.361,00 € (Zahlendreher, 45,00 € zu viel).</li>
              <li><strong>Rabatt:</strong> Vereinbart sind 5 %, abgezogen wurden nur 3 %.</li>
              <li><strong>Umsatzsteuer:</strong> Sie wurde vom Warenwert vor Rabatt berechnet (19 % von 5.322,20 € = 1.011,22 €) statt vom Nettobetrag nach Rabatt.</li>
            </ol>
            <p><strong>bb)</strong> Korrekte Rechnung:</p>
            <table><thead><tr><th>Position</th><th>Betrag</th></tr></thead><tbody>
              <tr><td>Warenwert: 1.752,00 + 1.316,00 + 1.890,00 + 319,20</td><td>5.277,20 €</td></tr>
              <tr><td>− 5 % Rabatt (5.277,20 × 0,05)</td><td>263,86 €</td></tr>
              <tr><td>= Nettobetrag</td><td>5.013,34 €</td></tr>
              <tr><td>+ 19 % Umsatzsteuer (5.013,34 × 0,19 = 952,5346)</td><td>952,53 €</td></tr>
              <tr><td><strong>= Rechnungsbetrag</strong></td><td><strong>5.965,87 €</strong></td></tr>
            </tbody></table>
            <p>Die fehlerhafte Rechnung ist damit 6.173,75 € − 5.965,87 € = 207,88 € zu hoch.</p>
            <p><strong>cc)</strong> Skonto: 5.965,87 € × 0,02 ≈ 119,32 € → Zahlbetrag = 5.965,87 € − 119,32 € = <strong>5.846,55 €</strong><br>
              Frist: Rechnungsdatum 13.04.2027 + 10 Tage → Zahlung bis spätestens <strong>Freitag, 23.04.2027</strong>.</p>
            <p><strong>Bewertung:</strong> aa) je Fehler 1 P · bb) Warenwert 1 P, Rabatt und Nettobetrag 1 P, Umsatzsteuer und Rechnungsbetrag 1 P · cc) Zahlbetrag 1 P, Datum 1 P. Folgefehler werden nicht doppelt bewertet.</p>` },
        { points: 4,
          q: `<p><strong>d)</strong> Bei einer zweiten Lieferung (Tablets für den Wareneingang, anderer Lieferant) stellt ihr am Liefertag beim Auspacken fest:</p>
            <ol>
              <li>Ein Tablet hat ein gesprungenes Display.</li>
              <li>Bestellt waren zehn Schutzhüllen, geliefert wurden neun.</li>
              <li>Bestellt waren Tablets mit 128 GB Speicher, geliefert wurde ein anderes Modell mit 64 GB.</li>
            </ol>
            <p>aa) Ordne jeden Fall der passenden Mängelart zu. (2 P)</p>
            <p>bb) Die eG und der Lieferant sind Kaufleute. Erkläre, was die eG wegen der Rügepflicht tun muss, und nenne das Recht, das sie zuerst geltend machen muss. (2 P)</p>`,
          solution: `<p><strong>aa)</strong> 1 → <strong>Mangel in der Beschaffenheit</strong> (Schlechtleistung, Qualitätsmangel; hier ein offener Mangel) · 2 → <strong>Minderlieferung</strong> (Quantitätsmangel) · 3 → <strong>Falschlieferung</strong> (eine andere als die bestellte Ware)</p>
            <p><strong>bb)</strong> Beim beidseitigen Handelskauf muss die eG die Ware <strong>unverzüglich nach der Lieferung untersuchen</strong> und erkannte Mängel <strong>unverzüglich rügen</strong> (§ 377 HGB), am besten schriftlich und mit Fotos. Rügt sie zu spät, gilt die Ware als genehmigt, und die eG verliert ihre Mängelrechte. (Die eG ist als eingetragene Genossenschaft Kaufmann kraft Rechtsform.)<br>
              Zuerst muss sie <strong>Nacherfüllung</strong> verlangen: nach ihrer Wahl Nachbesserung (Reparatur) oder Ersatzlieferung bzw. Nachlieferung der fehlenden Hülle. Erst wenn die Nacherfüllung scheitert oder eine angemessene Frist erfolglos verstreicht, kann sie zurücktreten, den Preis mindern oder Schadensersatz verlangen.</p>
            <p><strong>Bewertung:</strong> aa) drei richtige Zuordnungen 2 P, zwei richtige 1 P · bb) Rügepflicht 1 P, Nacherfüllung als vorrangiges Recht 1 P.</p>` },
        { points: 5,
          q: `<p><strong>e)</strong> Im Wareneingang sollen Lieferungen künftig per Tablet-App statt mit Papierlieferscheinen erfasst werden. Einige Lagerbeschäftigte sind skeptisch. Die Geschäftsführerin leitet dir folgenden Artikelauszug weiter:</p>
            <pre><code>Why new tools fail - and how to prevent it
A new app changes nothing as long as people keep working the old way.
The psychologist Kurt Lewin described change in three stages. In the
unfreeze stage, employees need to understand why the current process
cannot continue, for example because paper delivery notes get lost.
In the change stage, the new process is introduced step by step;
hands-on training and key users who support their colleagues are
essential. In the refreeze stage, the new routine is anchored: work
instructions are updated, the old paper forms are removed and early
successes are made visible.
Resistance is normal. Employees often fear that they will not be able
to handle the new technology, or they simply do not know what is
coming because nobody has informed them.</code></pre>
            <p>aa) Nenne die drei Phasen des Veränderungsprozesses auf Deutsch und ordne jeder Phase eine konkrete Maßnahme für die Einführung der Wareneingangs-App zu. (3 P)</p>
            <p>bb) Nenne die zwei im Text genannten Ursachen für Widerstand und je eine passende Gegenmaßnahme. (2 P)</p>`,
          solution: `<p><strong>aa)</strong></p>
            <table><thead><tr><th>Phase</th><th>Maßnahme für die eG (Beispiele)</th></tr></thead><tbody>
              <tr><td><strong>Auftauen</strong> (unfreeze)</td><td>In einer Teambesprechung zeigen, warum der Papierprozess nicht mehr funktioniert (verlorene Lieferscheine, doppelte Erfassung, Fehler bei der Abrechnung mit den Mitgliedern).</td></tr>
              <tr><td><strong>Verändern</strong> (change)</td><td>Schrittweise Einführung, zuerst mit einer Pilotgruppe; praktische Schulungen direkt am Tablet; Key-User im Lager, die Kolleginnen und Kollegen unterstützen.</td></tr>
              <tr><td><strong>Stabilisieren</strong> bzw. Einfrieren (refreeze)</td><td>Arbeitsanweisung anpassen, Papierformulare aus dem Lager entfernen, erste Erfolge sichtbar machen (z. B. keine verlorenen Lieferscheine mehr).</td></tr>
            </tbody></table>
            <p><strong>bb)</strong></p>
            <ul>
              <li><strong>Angst, mit der neuen Technik nicht zurechtzukommen</strong> → praxisnahe Schulungen in kleinen Gruppen, Übungsphase ohne Zeitdruck, Ansprechpartner bzw. Key-User vor Ort.</li>
              <li><strong>Fehlende Information</strong> („nobody has informed them“) → frühzeitig und offen informieren, Beschäftigte einbeziehen (z. B. Feedback zur App einholen), Betriebsrat beteiligen.</li>
            </ul>
            <p><strong>Bewertung:</strong> aa) je Phase mit passender Maßnahme 1 P · bb) je Ursache mit Gegenmaßnahme 1 P. Antworten müssen auf Deutsch sein.</p>` }
      ] },
    { id: "pk-b-3", set: "B", title: "Aufgabe 3: Netzwerk, Kommandozeile und Support", points: 25,
      scenario: `<p><strong>Situation zu Aufgabe 3:</strong> Die Dithmarscher Gemüsehof eG erhält ein neues Netzwerk. Das Netz <strong>192.168.20.0/24</strong> soll in <strong>acht gleich große Subnetze</strong> aufgeteilt werden (u. a. Verwaltung, Lager, Kameras, Drucker, Server, Gäste-WLAN). Das erste Subnetz beginnt bei 192.168.20.0, das <strong>dritte Subnetz</strong> ist für die Kameras vorgesehen. Nach der Einrichtung übernimmt die Deichblick IT den Support für die eG über ihr Ticketsystem.</p>`,
      parts: [
        { points: 7,
          q: `<p><strong>a)</strong> Teile das Netz 192.168.20.0/24 in acht gleich große Subnetze auf.</p>
            <p>aa) Gib die Präfixlänge und die Subnetzmaske der neuen Subnetze an. (2 P)</p>
            <p>bb) Berechne die Anzahl der nutzbaren Hostadressen je Subnetz. (1 P)</p>
            <p>cc) Gib für das Kamera-Subnetz (drittes Subnetz) die Netzadresse, die erste und die letzte nutzbare Hostadresse sowie die Broadcastadresse an. (3 P)</p>
            <p>dd) Ein Techniker hat eine Kamera mit der Adresse 192.168.20.97/27 konfiguriert. Prüfe, ob die Kamera im Kamera-Subnetz liegt. (1 P)</p>`,
          solution: `<p><strong>aa)</strong> 8 Subnetze = 2³ → 3 zusätzliche Netzbits: /24 + 3 = <strong>/27</strong>. Subnetzmaske: 11111111.11111111.11111111.11100000 = <strong>255.255.255.224</strong></p>
            <p><strong>bb)</strong> 32 − 27 = 5 Hostbits → 2⁵ − 2 = <strong>30 nutzbare Hostadressen</strong> je Subnetz</p>
            <p><strong>cc)</strong> Blockgröße 2⁵ = 32 → Subnetze beginnen bei .0, .32, .64, .96, … Das dritte Subnetz ist 192.168.20.64/27:</p>
            <table><thead><tr><th>Netzadresse</th><th>erste Hostadresse</th><th>letzte Hostadresse</th><th>Broadcast</th></tr></thead><tbody>
              <tr><td>192.168.20.64</td><td>192.168.20.65</td><td>192.168.20.94</td><td>192.168.20.95</td></tr>
            </tbody></table>
            <p><strong>dd)</strong> <strong>Nein.</strong> 192.168.20.97 liegt im <strong>vierten</strong> Subnetz 192.168.20.96/27 (Hosts .97 bis .126). Die Kamera muss eine Adresse zwischen 192.168.20.65 und 192.168.20.94 erhalten.</p>
            <p><strong>Bewertung:</strong> aa) Präfix 1 P, Maske 1 P · bb) 1 P · cc) Netz- und Broadcastadresse 1 P, erste Hostadresse 1 P, letzte Hostadresse 1 P · dd) 1 P mit Begründung.</p>` },
        { points: 5,
          q: `<p><strong>b)</strong> Die Clients im Verwaltungsnetz erhalten ihre IP-Konfiguration per DHCP.</p>
            <p>aa) Beschreibe die vier Schritte, in denen ein Client seine Adresse vom DHCP-Server erhält. (4 P)</p>
            <p>bb) Für den Netzwerkdrucker der Verwaltung wird eine DHCP-Reservierung angelegt. Erkläre, was das ist und warum sie hier sinnvoll ist. (1 P)</p>`,
          solution: `<p><strong>aa)</strong> Ablauf nach dem DORA-Prinzip:</p>
            <ol>
              <li><strong>Discover:</strong> Der Client hat noch keine Adresse und sucht per Broadcast im Netz nach einem DHCP-Server.</li>
              <li><strong>Offer:</strong> Der DHCP-Server bietet eine freie IP-Adresse aus seinem Bereich an, zusammen mit Subnetzmaske, Gateway, DNS-Server und Leasedauer.</li>
              <li><strong>Request:</strong> Der Client fordert das Angebot an (per Broadcast, damit auch andere DHCP-Server erfahren, welches Angebot er gewählt hat).</li>
              <li><strong>Acknowledge:</strong> Der Server bestätigt die Zuweisung; der Client übernimmt die Konfiguration für die Dauer der Lease.</li>
            </ol>
            <p><strong>bb)</strong> Bei einer Reservierung vergibt der DHCP-Server anhand der <strong>MAC-Adresse</strong> immer <strong>dieselbe IP-Adresse</strong> an ein bestimmtes Gerät. Der Drucker bleibt so dauerhaft unter derselben Adresse erreichbar, und die Konfiguration bleibt trotzdem zentral im DHCP-Server.</p>
            <p><strong>Bewertung:</strong> aa) je Schritt mit Beschreibung 1 P (nur die Begriffe: 0,5 P je Schritt) · bb) 1 P.</p>` },
        { points: 5,
          q: `<p><strong>c)</strong> Gib jeweils einen passenden Konsolenbefehl an:</p>
            <ol>
              <li>Unter Windows die vollständige IP-Konfiguration inklusive DNS-Server und MAC-Adresse anzeigen.</li>
              <li>Prüfen, welche IP-Adresse der DNS-Server für den Rechnernamen <em>nas01</em> liefert.</li>
              <li>Unter Windows alle Router auf dem Weg zum Server 9.9.9.9 anzeigen.</li>
              <li>Die im Zwischenspeicher abgelegten Zuordnungen von IP- zu MAC-Adressen anzeigen.</li>
              <li>Unter Linux die Rechte für das Skript <em>backup.sh</em> so setzen, dass der Besitzer lesen, schreiben und ausführen darf, die Gruppe lesen und ausführen und alle anderen nichts.</li>
            </ol>`,
          solution: `<ol>
              <li><code>ipconfig /all</code></li>
              <li><code>nslookup nas01</code></li>
              <li><code>tracert 9.9.9.9</code> (unter Linux: <code>traceroute 9.9.9.9</code>)</li>
              <li><code>arp -a</code> (unter Linux auch <code>ip neigh</code>)</li>
              <li><code>chmod 750 backup.sh</code> – Besitzer rwx = 4 + 2 + 1 = 7, Gruppe r-x = 4 + 1 = 5, andere --- = 0</li>
            </ol>
            <p><strong>Bewertung:</strong> je richtigem Befehl 1 P. Kleine Syntaxfehler (z. B. fehlender Schrägstrich) führen zu 0,5 P.</p>` },
        { points: 3,
          q: `<p><strong>d)</strong> Die Deichblick IT legt die Priorität von Tickets mit folgender Matrix fest (1 = höchste Priorität):</p>
            <table><thead><tr><th>Auswirkung ↓ / Dringlichkeit →</th><th>hoch</th><th>mittel</th><th>niedrig</th></tr></thead><tbody>
              <tr><td><strong>hoch</strong></td><td>1</td><td>2</td><td>3</td></tr>
              <tr><td><strong>mittel</strong></td><td>2</td><td>3</td><td>4</td></tr>
              <tr><td><strong>niedrig</strong></td><td>3</td><td>4</td><td>5</td></tr>
            </tbody></table>
            <p><strong>Auswirkung:</strong> hoch = ein geschäftskritischer Prozess oder der ganze Standort ist betroffen; mittel = eine Abteilung ist betroffen; niedrig = eine einzelne Person ist betroffen.<br>
              <strong>Dringlichkeit:</strong> hoch = es gibt keine Ausweichlösung und es entsteht sofort Schaden; mittel = eine Ausweichlösung ist vorhanden; niedrig = kann geplant erledigt werden.</p>
            <p>Bestimme mit Begründung die Priorität der folgenden Tickets:</p>
            <ul>
              <li><strong>T1:</strong> Das Warenwirtschaftssystem ist ausgefallen. Im Lager können keine Lieferscheine gedruckt werden, drei Lkw warten auf die Abfertigung.</li>
              <li><strong>T2:</strong> Der Multifunktionsdrucker der Buchhaltung druckt streifig. Die Buchhaltung kann auf den Drucker im Nachbarbüro ausweichen.</li>
              <li><strong>T3:</strong> Eine Mitarbeiterin im Einkauf wünscht sich für die nächste Woche ein zweites Headset für Videokonferenzen.</li>
            </ul>`,
          solution: `<table><thead><tr><th>Ticket</th><th>Auswirkung</th><th>Dringlichkeit</th><th>Priorität</th></tr></thead><tbody>
              <tr><td>T1</td><td>hoch – geschäftskritischer Prozess (Warenannahme und Versand)</td><td>hoch – keine Ausweichlösung, wartende Lkw verursachen sofort Kosten</td><td><strong>1</strong></td></tr>
              <tr><td>T2</td><td>mittel – eine Abteilung betroffen</td><td>mittel – Ausweichdrucker vorhanden</td><td><strong>3</strong></td></tr>
              <tr><td>T3</td><td>niedrig – eine Person</td><td>niedrig – planbar bis nächste Woche</td><td><strong>5</strong></td></tr>
            </tbody></table>
            <p>Hinweis: T3 ist genau genommen keine Störung (Incident), sondern eine Serviceanfrage (Service Request).</p>
            <p><strong>Bewertung:</strong> je Ticket 1 P für die richtige Priorität mit Begründung.</p>` },
        { points: 5,
          q: `<p><strong>e)</strong> Die Deichblick IT arbeitet mit einem gestuften Support.</p>
            <p>aa) Beschreibe die Aufgaben des 1st-, 2nd- und 3rd-Level-Supports und nenne jeweils ein Beispiel aus der Betreuung der eG. (3 P)</p>
            <p>bb) Ticket T1 ist nach der im Servicevertrag vereinbarten Lösungszeit von vier Stunden noch nicht gelöst. Unterscheide funktionale und hierarchische Eskalation und erläutere, wie beide hier aussehen könnten. (2 P)</p>`,
          solution: `<p><strong>aa)</strong></p>
            <table><thead><tr><th>Stufe</th><th>Aufgaben</th><th>Beispiel eG</th></tr></thead><tbody>
              <tr><td>1st Level</td><td>erste Anlaufstelle (Service Desk): Anfragen annehmen, im Ticketsystem erfassen, klassifizieren und priorisieren, Standardprobleme mithilfe der Wissensdatenbank sofort lösen, sonst weiterleiten</td><td>Passwort einer Lagerkraft zurücksetzen, T3 (Headset bestellen) aufnehmen</td></tr>
              <tr><td>2nd Level</td><td>Fachspezialistinnen und -spezialisten für komplexere Fehler, oft mit Fernwartung oder vor Ort; analysieren und beheben Störungen, die der 1st Level nicht lösen kann</td><td>Netzwerktechniker untersucht, warum der Server der Warenwirtschaft nicht erreichbar ist</td></tr>
              <tr><td>3rd Level</td><td>Hersteller, Entwickler oder externe Spezialisten; beheben Softwarefehler, liefern Patches, klären Garantiefälle</td><td>Hersteller der Warenwirtschaftssoftware behebt einen Programmfehler</td></tr>
            </tbody></table>
            <p><strong>bb)</strong></p>
            <ul>
              <li><strong>Funktionale Eskalation:</strong> Das Ticket wird an eine Stelle mit <strong>mehr Fachwissen</strong> weitergegeben. Hier: vom 2nd Level an den Hersteller der Warenwirtschaft (3rd Level).</li>
              <li><strong>Hierarchische Eskalation:</strong> Die <strong>Vorgesetzten</strong> werden eingeschaltet, weil Entscheidungen oder zusätzliche Ressourcen nötig sind oder der Vertrag verletzt wird. Hier: Die Service-Desk-Leitung informiert die Geschäftsführung der Deichblick IT und die eG über die SLA-Verletzung und stellt z. B. zusätzliches Personal bereit oder beauftragt einen Vor-Ort-Einsatz.</li>
            </ul>
            <p><strong>Bewertung:</strong> aa) je Stufe mit Beispiel 1 P · bb) je Eskalationsart mit Bezug zu T1 1 P.</p>` }
      ] },
    { id: "pk-b-4", set: "B", title: "Aufgabe 4: Datenmodell, Prozess, Programmcode und KI", points: 25,
      scenario: `<p><strong>Situation zu Aufgabe 4:</strong> Die Dithmarscher Gemüsehof eG lässt eine Anwendung entwickeln, mit der die Anlieferungen ihrer Mitglieder erfasst und abgerechnet werden. Die Deichblick IT unterstützt beim Datenmodell, bei der Prozessbeschreibung und beim Test. Außerdem plant die eG einen KI-Chatbot auf ihrer Website.</p>
        <p><strong>Anforderungen an die Datenhaltung:</strong> Jedes Mitglied (Mitgliedsnummer, Name, Ort) kann beliebig viele Lieferungen bringen; jede Lieferung (Lieferungsnummer, Datum) stammt von genau einem Mitglied. Eine Lieferung enthält ein oder mehrere Produkte (Produktnummer, Bezeichnung, z. B. Weißkohl), jeweils mit einer Menge in kg. Ein Produkt kann in vielen Lieferungen vorkommen. Jede Lieferung wird von genau einem Beschäftigten des Wareneingangs (Personalnummer, Name) angenommen; ein Beschäftigter nimmt viele Lieferungen an.</p>`,
      parts: [
        { points: 4,
          q: `<p><strong>a)</strong> Erstelle aus den Anforderungen ein ER-Modell mit allen Entitätstypen, Beziehungen und Kardinalitäten (1:1, 1:n, n:m). Gib je Entitätstyp das Schlüsselattribut an und ordne das Attribut „Menge in kg“ richtig zu.</p>`,
          solution: `<pre class="ascii">
 [Mitglied] 1 ----&lt; bringt &gt;---- n [Lieferung] n ----&lt; enthält &gt;---- m [Produkt]
 MitgliedNr                         LieferNr        (MengeKg)           ProduktNr
                                        n
                                        |
                                  &lt; nimmt an &gt;
                                        |
                                        1
                                [Beschäftigter]
                                    PersNr
</pre>
            <ul>
              <li>Mitglied <strong>1 : n</strong> Lieferung (ein Mitglied bringt viele Lieferungen, jede Lieferung stammt von genau einem Mitglied)</li>
              <li>Beschäftigter <strong>1 : n</strong> Lieferung (angenommen von genau einem Beschäftigten)</li>
              <li>Lieferung <strong>n : m</strong> Produkt; das Attribut <strong>MengeKg</strong> gehört zur <strong>Beziehung</strong> „enthält“, weil die Menge erst durch die Kombination aus Lieferung und Produkt bestimmt ist.</li>
            </ul>
            <p><strong>Bewertung:</strong> vier Entitätstypen mit Schlüsselattribut 1 P, drei Beziehungen 1 P, Kardinalitäten 1 P, MengeKg an der n:m-Beziehung 1 P.</p>` },
        { points: 3,
          q: `<p><strong>b)</strong> Überführe das ER-Modell in Tabellen (Relationenmodell). Kennzeichne Primärschlüssel (PK) und Fremdschlüssel (FK).</p>`,
          solution: `<ul>
              <li>Mitglied (<strong>MitgliedNr</strong> PK, Name, Ort)</li>
              <li>Beschäftigter (<strong>PersNr</strong> PK, Name)</li>
              <li>Lieferung (<strong>LieferNr</strong> PK, Datum, <em>MitgliedNr</em> FK, <em>PersNr</em> FK)</li>
              <li>Produkt (<strong>ProduktNr</strong> PK, Bezeichnung)</li>
              <li>Lieferposition (<strong><em>LieferNr</em></strong> PK/FK, <strong><em>ProduktNr</em></strong> PK/FK, MengeKg)</li>
            </ul>
            <div class="callout merke"><strong>Merke:</strong> Bei 1:n wandert der Primärschlüssel der 1-Seite als Fremdschlüssel in die Tabelle der n-Seite. Eine n:m-Beziehung wird zu einer eigenen Zwischentabelle, deren Primärschlüssel aus den beiden Fremdschlüsseln zusammengesetzt ist.</div>
            <p><strong>Bewertung:</strong> Fremdschlüssel in Lieferung 1 P, Zwischentabelle mit zusammengesetztem Schlüssel und MengeKg 1 P, übrige Tabellen mit PK 1 P.</p>` },
        { points: 5,
          q: `<p><strong>c)</strong> Der Ablauf im Wareneingang ist so beschrieben:</p>
            <p>Eine Lagerkraft scannt den Lieferschein mit dem Tablet. Das System prüft die Mitgliedsnummer. Ist sie unbekannt, legt die Lagerkraft einen Klärungsfall an; danach endet der Ablauf. Ist sie bekannt, werden <strong>gleichzeitig</strong> die Ware gewogen und eine Sichtprüfung der Qualität durchgeführt. Sind beide Tätigkeiten abgeschlossen, erfasst die Lagerkraft Gewicht und Qualitätsklasse im Tablet. Ist die Ware nicht handelsfähig, wird sie zurückgewiesen. Andernfalls wird sie eingelagert und ein Palettenetikett gedruckt. Danach endet der Ablauf.</p>
            <p>Zeichne dazu ein UML-Aktivitätsdiagramm.</p>`,
          solution: `<pre class="ascii">
            ●  Startknoten
            |
            v
  ( Lieferschein scannen )
            |
            v
  ( Mitgliedsnummer prüfen )
            |
            v
           &lt;&gt;---[unbekannt]---&gt; ( Klärungsfall anlegen ) ---&gt; (◉)
            |
        [bekannt]
            |
            v
  ========================  Gabelung (Fork)
       |              |
       v              v
( Ware wiegen )  ( Sichtprüfung Qualität )
       |              |
       v              v
  ========================  Synchronisation (Join)
            |
            v
  ( Gewicht und Qualitätsklasse erfassen )
            |
            v
           &lt;&gt;---[nicht handelsfähig]---&gt; ( Ware zurückweisen ) ---+
            |                                                       |
     [handelsfähig]                                                 |
            |                                                       |
            v                                                       |
  ( Ware einlagern )                                                |
            |                                                       |
            v                                                       |
  ( Palettenetikett drucken )                                       |
            |                                                       |
            v                                                       |
           &lt;&gt; &lt;----------------------------------------------------+
            |   Zusammenführung (Merge)
            v
           (◉)  Endknoten
</pre>
            <p>Aktionen stehen in abgerundeten Rechtecken, Entscheidungen und Zusammenführungen als Raute, Bedingungen (Guards) in eckigen Klammern. Gleichzeitige Tätigkeiten beginnen an einem Gabelungsbalken und enden an einem Synchronisationsbalken. Statt der Zusammenführung darf der Zweig „Ware zurückweisen“ auch in einem eigenen Endknoten enden.</p>
            <p><strong>Bewertung:</strong> Start- und Endknoten 1 P, Aktionen vollständig in richtiger Reihenfolge 1 P, erste Verzweigung mit Guards 1 P, Gabelung und Synchronisation 1 P, zweite Verzweigung mit Guards und Zusammenführung bzw. Ende 1 P.</p>` },
        { points: 5,
          q: `<p><strong>d)</strong> Die Auszahlung an ein Mitglied soll so berechnet werden: Für jede Lieferung wird Menge × Preis je kg × Qualitätsfaktor gerechnet (Klasse A: 100 %, B: 85 %, C: 60 %), und die Beträge werden addiert. Liefert das Mitglied insgesamt <strong>mindestens 2.000 kg</strong>, erhöht sich die Auszahlung um 2 %. Ein Entwickler hat folgende Funktion geschrieben (erstes Array-Element hat den Index 0):</p>
            <pre><code>funktion berechneAuszahlung(menge, klasse, preisProKg)
    summeKg = 0
    für i = 1 bis länge(menge) - 1
        gesamt = 0
        wenn klasse[i] == "A" dann
            faktor = 1,0
        sonst wenn klasse[i] == "B" dann
            faktor = 0,85
        sonst
            faktor = 0,6
        ende wenn
        gesamt = gesamt + menge[i] * preisProKg * faktor
        summeKg = summeKg + menge[i]
    ende für
    wenn summeKg &gt; 2000 dann
        gesamt = gesamt * 1,02
    ende wenn
    rückgabe gesamt
ende funktion</code></pre>
            <p>Testaufruf: <code>berechneAuszahlung([900, 650, 450], ["A", "B", "C"], 0,40)</code></p>
            <p>aa) Ermittle, welchen Wert die fehlerhafte Funktion beim Testaufruf zurückgibt. (1 P)</p>
            <p>bb) Nenne die drei Fehler und gib jeweils die Korrektur an. (3 P)</p>
            <p>cc) Berechne den Wert, den die korrigierte Funktion beim Testaufruf zurückgibt. (1 P)</p>`,
          solution: `<p><strong>aa)</strong> Schreibtischtest der fehlerhaften Version:</p>
            <table><thead><tr><th>i</th><th>klasse[i]</th><th>faktor</th><th>gesamt</th><th>summeKg</th></tr></thead><tbody>
              <tr><td>1</td><td>B</td><td>0,85</td><td>0 + 650 × 0,40 × 0,85 = 221</td><td>650</td></tr>
              <tr><td>2</td><td>C</td><td>0,6</td><td>0 + 450 × 0,40 × 0,6 = 108</td><td>1.100</td></tr>
            </tbody></table>
            <p>1.100 &gt; 2.000? nein → Rückgabe <strong>108,00 €</strong></p>
            <p><strong>bb)</strong></p>
            <ol>
              <li><strong>Schleifenbeginn:</strong> <code>für i = 1 …</code> überspringt die erste Lieferung (Index 0). Korrektur: <code>für i = 0 bis länge(menge) - 1</code>.</li>
              <li><strong>Initialisierung in der Schleife:</strong> <code>gesamt = 0</code> setzt die Summe in jedem Durchlauf zurück, sodass nur die letzte Lieferung zählt. Korrektur: <code>gesamt = 0</code> vor die Schleife (zu <code>summeKg = 0</code>) verschieben.</li>
              <li><strong>Vergleichsoperator:</strong> „mindestens 2.000 kg“ schließt 2.000 ein. Korrektur: <code>wenn summeKg &gt;= 2000 dann</code>.</li>
            </ol>
            <p><strong>cc)</strong> 900 × 0,40 × 1,0 = 360,00 · 650 × 0,40 × 0,85 = 221,00 · 450 × 0,40 × 0,6 = 108,00 → Summe 689,00 €<br>
              summeKg = 900 + 650 + 450 = 2.000 ≥ 2.000 → Bonus: 689,00 € × 1,02 = <strong>702,78 €</strong></p>
            <div class="callout tipp"><strong>Tipp:</strong> Testdaten genau auf eine Grenze zu legen (hier exakt 2.000 kg) ist eine typische Technik, um Fehler bei &gt; und &gt;= aufzudecken.</div>
            <p><strong>Bewertung:</strong> aa) 1 P · bb) je Fehler mit Korrektur 1 P · cc) 1 P.</p>` },
        { points: 8,
          q: `<p><strong>e)</strong> Die eG möchte auf ihrer Website einen KI-Chatbot einsetzen, der Fragen der Mitglieder zu Anlieferzeiten, Qualitätsklassen und Auszahlungen beantwortet. Der Anbieter bietet zwei Tarife an: <strong>Pay-per-Use</strong> für 0,02 € je Anfrage oder eine <strong>Flatrate</strong> für 49,00 € pro Monat. Erwartet werden rund 3.000 Anfragen pro Monat.</p>
            <p>aa) Beurteile den Einsatz des Chatbots, indem du zwei Vorteile und zwei Risiken für die eG erläuterst. (4 P)</p>
            <p>bb) Berechne, ab wie vielen Anfragen pro Monat die Flatrate günstiger ist, und empfiehl einen Tarif. (2 P)</p>
            <p>cc) Nenne zwei Anforderungen aus dem Datenschutz oder der KI-Verordnung der EU, die die eG beim Einsatz beachten muss. (2 P)</p>`,
          solution: `<p><strong>aa)</strong> Zwei Vorteile und zwei Risiken, jeweils mit Bezug zur eG, z. B.:</p>
            <div class="grid-2">
              <div><p><strong>Vorteile</strong></p><ul>
                <li>rund um die Uhr erreichbar – auch frühmorgens, wenn die Landwirtinnen und Landwirte anliefern,</li>
                <li>entlastet die Verwaltung von Standardfragen, vor allem in der Erntezeit mit vielen gleichartigen Anfragen,</li>
                <li>schnelle, einheitliche Antworten, bei Bedarf auch in mehreren Sprachen (z. B. für Saisonkräfte).</li></ul></div>
              <div><p><strong>Risiken</strong></p><ul>
                <li>falsche oder erfundene Antworten (Halluzinationen), z. B. zu Qualitätsklassen oder Auszahlungen – die eG haftet für die Auskünfte,</li>
                <li>Datenschutz: Eingaben mit personenbezogenen Daten gelangen zum Anbieter; Auszahlungsbeträge dürfen nur nach sicherer Anmeldung genannt werden,</li>
                <li>geringe Akzeptanz bei Mitgliedern, die lieber telefonieren; laufende Kosten und Pflegeaufwand für die Wissensbasis.</li></ul></div>
            </div>
            <p><strong>Beurteilung:</strong> Für Standardfragen (Anlieferzeiten, Qualitätsklassen) ist der Chatbot sinnvoll. Für Fragen zu Auszahlungen braucht er eine Anmeldung oder eine Weiterleitung an einen Menschen.</p>
            <p><strong>bb)</strong> Gleichsetzen: 0,02 € × x = 49,00 € → x = 49,00 ÷ 0,02 = <strong>2.450 Anfragen</strong>. Ab mehr als 2.450 Anfragen pro Monat ist die Flatrate günstiger.<br>
              Bei 3.000 Anfragen: Pay-per-Use 3.000 × 0,02 € = 60,00 € &gt; Flatrate 49,00 € → <strong>Flatrate empfehlen</strong> (spart 11,00 € im Monat).</p>
            <p><strong>cc)</strong> Zwei der folgenden Anforderungen:</p>
            <ul>
              <li>Vertrag zur Auftragsverarbeitung mit dem Anbieter abschließen (Art. 28 DSGVO),</li>
              <li>Serverstandort in der EU oder geeignete Garantien für eine Übermittlung in Drittländer,</li>
              <li>vertraglich ausschließen, dass die Eingaben zum Training des KI-Modells verwendet werden,</li>
              <li>Datenschutzhinweise auf der Website ergänzen (Transparenz, Zweck, Speicherdauer),</li>
              <li>Transparenzpflicht nach der KI-Verordnung: Die Nutzerinnen und Nutzer müssen erkennen, dass sie mit einer KI und nicht mit einem Menschen kommunizieren,</li>
              <li>Datenminimierung: keine unnötigen personenbezogenen Daten abfragen, Chatverläufe nach kurzer Frist löschen.</li>
            </ul>
            <p><strong>Bewertung:</strong> aa) je Vorteil bzw. Risiko mit Bezug zur eG 1 P · bb) Rechnung 1 P, Empfehlung 1 P · cc) je Anforderung 1 P.</p>` }
      ] }
  ],

  tips: [
    "<strong>Lerne nach dem aktuellen Katalog (2. Auflage, gültig seit Frühjahr 2025).</strong> In Altprüfungen bis Herbst 2024 kannst du SQL-, RAID-, Struktogramm- und PAP-Aufgaben überspringen – übe dafür KI, UML-Aktivitätsdiagramm, Schreibtischtest und Fehlersuche im Code zusätzlich.",
    "<strong>Übe mit echten Aufgabensätzen unter Prüfungsbedingungen:</strong> 90 Minuten, nur Taschenrechner, auf Papier. Plane bis zum Termin mindestens vier bis sechs vollständige Durchläufe ein und werte jeden danach ehrlich mit der Musterlösung aus.",
    "<strong>Lerne breit statt tief.</strong> Jede AP1 mischt Hardware, Netzwerk, Programmierung, Wirtschaftlichkeit, IT-Sicherheit und Projektmanagement – und nichts kann abgewählt werden. Grundlagen in allen sieben Fragenkomplexen bringen mehr Punkte als ein perfektes Lieblingsthema.",
    "<strong>Die ersten fünf Minuten gehören dem Überblick:</strong> Ausgangssituation lesen, Belegsatz auf Vollständigkeit prüfen, alle vier Aufgaben durchblättern und die Punktzahlen markieren. Beginne dann mit deinen sicheren Punktebringern.",
    "<strong>Rechne mit rund 0,9 Minuten pro Punkt.</strong> Eine 4-Punkte-Frage ist keine zehn Minuten wert. Wenn du feststeckst: Stelle markieren, weitermachen, am Ende zurückkommen.",
    "<strong>Bei Rechenaufgaben immer den Weg zeigen:</strong> Formel → eingesetzte Werte → Zwischenergebnis → Ergebnis mit Einheit. Auch bei einem Tippfehler im Taschenrechner bekommst du so Teilpunkte.",
    "<strong>Einheiten sind die häufigste Punktefalle:</strong> Datenmengen binär (KiB, MiB, GiB, TiB), Datenraten dezimal (Mbit/s), Byte × 8 = Bit, W ≠ kWh, netto ≠ brutto. Übernimm die Einheit und die Rundung, die die Aufgabe verlangt.",
    "<strong>Lerne die Formeln auswendig</strong> – sie stehen weder im Katalog noch im Belegsatz: P = U × I, W = P × t, η = P_ab ÷ P_zu, Kosten = kWh × Preis, Übertragungszeit = Bit ÷ bit/s, Hosts = 2ⁿ − 2, Netzplan-Formeln, Nutzwert = Σ Gewicht × Punkte.",
    "<strong>Achte auf den Operator:</strong> „Nennen“ = Stichwort, „beschreiben“ = ganze Sätze, „erläutern“ = mit Zusammenhang oder Beispiel, „begründen“ = mit „weil …“ und Bezug zum Szenario. Gib genau so viele Antworten, wie verlangt sind – oft werden nur die ersten gewertet.",
    "<strong>Antworte mit Bezug zur Ausgangssituation.</strong> Die Musterlösungen erwarten Argumente zum Kunden (z. B. „Da die Kanzlei Mandantendaten verarbeitet, …“) statt allgemeiner Lehrbuchsätze.",
    "<strong>Englische Texte:</strong> Beantworte die Fragen auf Deutsch, sofern nichts anderes verlangt ist. Erschließe unbekannte Wörter aus dem Zusammenhang und lerne typische Datenblattbegriffe wie power consumption, throughput, warranty, backward compatible oder operating temperature.",
    "<strong>Nutze den Belegsatz aktiv:</strong> Zahlen für Nutzwertanalyse, Stromkosten und Rechnungsprüfung stehen dort, ebenso Notationshilfen. Zeichne Netzplan, ER-Modell und UML genau in der vorgegebenen Notation.",
    "<strong>Zeichenaufgaben:</strong> erst die Grobstruktur (alle Knoten bzw. Entitäten), dann Verbindungen, zuletzt Beschriftungen, Guards und Kardinalitäten. Zeichne groß genug und lass Platz für Korrekturen.",
    "<strong>Schreibtischtest:</strong> Lege eine Tabelle mit einer Spalte je Variable an und trage jede Zuweisung in eine neue Zeile ein. Prüfe Schleifengrenzen (&lt; oder ≤?) und Verzweigungen besonders genau – Off-by-one ist der Klassiker.",
    "<strong>Schreib leserlich und eindeutig.</strong> Was die Prüfer nicht lesen können, wird nicht bewertet. Streiche Falsches klar durch, statt zu überschreiben.",
    "<strong>Checkliste für den Prüfungstag:</strong> Einladung, Lichtbildausweis, nicht programmierbarer Taschenrechner mit frischer Batterie, dokumentenechte Stifte, Lineal, analoge Uhr. Handy und Smartwatch bleiben aus bzw. weg. Sei 15 Minuten vor Beginn da.",
    "<strong>Nachteilsausgleich</strong> (z. B. Zeitverlängerung bei Legasthenie oder Behinderung) musst du rechtzeitig vor der Prüfung bei der IHK beantragen – sprich frühzeitig mit deinem Ausbildungsbetrieb.",
    "<strong>Verteile das Lernen:</strong> Täglich 15–20 Minuten Karteikarten und Quiz plus einmal pro Woche eine komplette Aufgabe mit Zeitlimit wirken deutlich besser als Pauken in der letzten Woche."
  ],

  dates: [
    { date: "2026-09-30", title: "AP1 Herbst 2026 (schriftlich)", note: "bundeseinheitlich laut IHK-AkA – v. a. für abweichenden Ausbildungsbeginn oder Verkürzung; bitte prüfen" },
    { date: "2026-11-15", title: "Richtwert: Anmeldeschluss AP1 Frühjahr 2027", note: "Frist bei IHK Köln und Handelskammer Hamburg – die Frist der IHK Flensburg ist nicht veröffentlicht; Anmeldung erfolgt durch den Betrieb, bitte dort nachfragen" },
    { date: "2027-02-24", title: "AP1 Frühjahr 2027 (schriftlich)", note: "bundeseinheitlich laut IHK-AkA, Beginn i. d. R. 08:00 Uhr – bei Ausbildungsbeginn 08/2025 voraussichtlich dein Termin; maßgeblich ist die Einladung der IHK Flensburg" },
    { date: "2027-09-29", title: "AP1 Herbst 2027 (schriftlich)", note: "bundeseinheitlich laut IHK-AkA – bitte prüfen" },
    { date: "2028-03-22", title: "AP1 Frühjahr 2028 (schriftlich)", note: "bundeseinheitlich laut IHK-AkA – bitte prüfen" }
  ],

  links: [
    { title: "FIAusbV – Ausbildungsverordnung Fachinformatiker/-in (gesetze-im-internet.de)", url: "https://www.gesetze-im-internet.de/fiausbv/" },
    { title: "FIAusbV § 9 – Prüfungsbereich von Teil 1 (Inhalte, 90 Minuten)", url: "https://www.gesetze-im-internet.de/fiausbv/__9.html" },
    { title: "FIAusbV § 24 – Gewichtung und Bestehensregelung (Systemintegration)", url: "https://www.gesetze-im-internet.de/fiausbv/__24.html" },
    { title: "BBiG § 44 – Zulassung bei gestreckter Abschlussprüfung", url: "https://www.gesetze-im-internet.de/bbig_2005/__44.html" },
    { title: "IHK-AkA – bundeseinheitliche Prüfungstermine", url: "https://www.ihk-aka.de/pruefungen" },
    { title: "IHK-AkA – Fachinformatiker/-in Systemintegration (Prüfungsstruktur)", url: "https://www.ihk-aka.de/pruefungen/ap/berufe/detail/b1202" },
    { title: "IHK-AkA – zugelassene Hilfsmittel", url: "https://www.ihk-aka.de/pruefungen/ap/hilfsmittel" },
    { title: "IHK Schleswig-Holstein – Zwischenprüfung / Termine", url: "https://www.ihk.de/schleswig-holstein/bildung/ihk-pruefungen/pruefungstermine/zwischenpruefung-5769916" },
    { title: "IHK Schleswig-Holstein – Gestreckte Abschlussprüfung", url: "https://www.ihk.de/schleswig-holstein/bildung/ihk-pruefungen/informationen/gestreckte-abschlusspruefung-1372078" },
    { title: "IHK Schleswig-Holstein – Beruf Fachinformatiker/-in Systemintegration", url: "https://www.ihk.de/schleswig-holstein/bildung/ausbildung/berufe/fachinformatiker-systemintegration-5885218" },
    { title: "IHK Flensburg – Ausbildungsformulare und Online-Anmeldung", url: "https://www.ihk.de/schleswig-holstein/bildung/formulare-ausbildung/ausbildungsformulare-flensburg-1372440" },
    { title: "IHK Hannover – Prüfungskataloge IT-Berufe (2. Auflage)", url: "https://www.ihk.de/hannover/hauptnavigation/ausbildung-und-weiterbildung/ausbildung/ausbildung-a-z/neuordnungen/pruefungskataloge-it-berufe-6438900" },
    { title: "ZPA Nord-West – Aufgabentypen (gebunden/ungebunden)", url: "https://www.ihk-zpa.de/opencms/pages/pruefungen/Methoden/Aufgabentypen.html" },
    { title: "KMK-Rahmenlehrplan Fachinformatiker/-in (13.12.2019)", url: "https://www.kmk.org/fileadmin/Dateien/pdf/Bildung/BeruflicheBildung/rlp/Fachinformatiker_19-12-13_EL.pdf" },
    { title: "U-Form-Verlag – Prüfungskatalog und originale IHK-Prüfungen (Shop)", url: "https://www.u-form-shop.de/" }
  ]
});
