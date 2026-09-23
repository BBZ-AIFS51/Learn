/* AP2 – Abschlussprüfung Teil 2, Fachinformatiker/-in Systemintegration (FIAusbV 2020, Katalog ZPA 2. Auflage)
   Themen-Checkliste: eigene Formulierungen auf Basis von FIAusbV §§ 18–25, Prüfungskatalog (2. Aufl.) und Prüfungsberichten.
   Checklisten-Punkte verweisen per ref auf Lernzettel (modul/topic-id). Probeklausuren (tasks): KAIS A/B, AEN A/B, WiSo A mit Musterlösungen. */
LEARN.exam({
  id: "ap2",
  title: "AP2",
  name: "Abschlussprüfung Teil 2",
  subtitle: "Konzeption & Administration · Netzwerke · WiSo · Projekt",

  facts: [
    { icon: "calendar-event", label: "Nächste schriftliche AP2", value: "Mi 25.11.2026 (Winter 26/27) · dann Mi 28.04.2027" },
    { icon: "clock", label: "Schriftliche Prüfung", value: "240 min an einem Tag: 90 + 90 + 60 min" },
    { icon: "percent", label: "Gewicht von Teil 2", value: "80 % der Gesamtnote (Projekt 50 %, KAIS/AEN/WiSo je 10 %)" },
    { icon: "kanban", label: "Betriebliches Projekt", value: "max. 40 h für Projektarbeit + Dokumentation" },
    { icon: "easel", label: "Präsentation + Fachgespräch", value: "zusammen max. 30 min, Präsentation max. 15 min" },
    { icon: "list-ol", label: "Aufgaben", value: "KAIS & AEN je 4 Aufgaben à 20–30 P · WiSo ca. 30 Aufgaben · je 100 P" },
    { icon: "calculator", label: "Hilfsmittel", value: "nicht programmierbarer Taschenrechner + Belegsatz" },
    { icon: "exclamation-triangle", label: "Sperrregel", value: "Teil 2: kein Bereich unter 30 P, höchstens einer unter 50 P" }
  ],

  html: `
    <p>Die <strong>Abschlussprüfung Teil 2 (AP2)</strong> ist der zweite und entscheidende Teil deiner <strong>gestreckten Abschlussprüfung</strong>. Sie findet am Ende der Ausbildung statt und zählt mit <strong>80 %</strong> in die Gesamtnote (die AP1 bringt die übrigen 20 % mit). Geregelt ist sie in der Ausbildungsverordnung <strong>FIAusbV vom 28.02.2020</strong> (für Systemintegration §§ 18–25). Die schriftlichen Aufgaben erstellt die <strong>ZPA Nord-West</strong> bundeseinheitlich (Ausnahme: Baden-Württemberg), Schleswig-Holstein und damit die <strong>IHK Flensburg</strong> nutzen diese Aufgaben. Seit der AP2 Sommer 2025 gilt die <strong>2. Auflage des Prüfungskatalogs</strong>.</p>
    <div class="callout merke"><strong>Merke:</strong> Die AP2 besteht aus <strong>vier Prüfungsbereichen</strong>: dem betrieblichen <strong>Projekt</strong> (mit Dokumentation, Präsentation und Fachgespräch) und drei <strong>schriftlichen</strong> Bereichen – Konzeption und Administration von IT-Systemen (KAIS), Analyse und Entwicklung von Netzwerken (AEN) und Wirtschafts- und Sozialkunde (WiSo). Jeder Bereich wird einzeln mit 0–100 Punkten bewertet, und für jeden gelten die Sperrregeln unten.</div>

    <h5>Aufbau und Gewichtung</h5>
    <table>
      <thead><tr><th>Prüfungsbereich</th><th>Form</th><th>Dauer</th><th>Anteil Gesamtnote</th><th>Anteil „Ergebnis Teil 2“*</th></tr></thead>
      <tbody>
        <tr><td>Planen und Umsetzen eines Projektes der Systemintegration (§ 20)</td><td>betriebliche Projektarbeit + Dokumentation, danach Präsentation + Fachgespräch</td><td>max. 40 h; Präsentation max. 15 min, mit Fachgespräch zusammen max. 30 min</td><td><strong>50 %</strong> (Projekt + Doku 25 %, Präsentation + Fachgespräch 25 %)</td><td>62,5 %</td></tr>
        <tr><td>Konzeption und Administration von IT-Systemen – KAIS (§ 21)</td><td>schriftlich, ungebundene (offene) Aufgaben</td><td>90 min</td><td><strong>10 %</strong></td><td>12,5 %</td></tr>
        <tr><td>Analyse und Entwicklung von Netzwerken – AEN (§ 22)</td><td>schriftlich, ungebundene (offene) Aufgaben</td><td>90 min</td><td><strong>10 %</strong></td><td>12,5 %</td></tr>
        <tr><td>Wirtschafts- und Sozialkunde – WiSo (§ 23)</td><td>schriftlich, gebundene und ungebundene, maschinell auswertbare Aufgaben</td><td>60 min</td><td><strong>10 %</strong></td><td>12,5 %</td></tr>
        <tr><td><em>zum Vergleich: AP1 (§ 9)</em></td><td>schriftlich, offene Aufgaben</td><td>90 min</td><td><em>20 %</em></td><td>–</td></tr>
      </tbody>
    </table>
    <p>* Die Spalte „Anteil Ergebnis Teil 2“ ist eine <strong>eigene Herleitung</strong> (50/80 bzw. 10/80). Die Verordnung nennt nur die Gewichte in der Gesamtnote – wie deine Kammer das Teil-2-Ergebnis genau berechnet und rundet, ist <em>nicht offiziell festgelegt</em> <span class="badge-soft">unsicher</span>.</p>
    <div class="callout formel"><strong>Formeln:</strong><br>
      Gesamtergebnis = 0,2 ⋅ AP1 + 0,5 ⋅ Projekt + 0,1 ⋅ KAIS + 0,1 ⋅ AEN + 0,1 ⋅ WiSo<br>
      Ergebnis Teil 2 = (0,5 ⋅ Projekt + 0,1 ⋅ KAIS + 0,1 ⋅ AEN + 0,1 ⋅ WiSo) ÷ 0,8<br>
      Projekt = 0,5 ⋅ (Projektarbeit + Doku) + 0,5 ⋅ (Präsentation + Fachgespräch)</div>

    <h5>Ablauf – vom Antrag bis zum Zeugnis</h5>
    <ol>
      <li><strong>Projektantrag</strong> (Projektbeschreibung mit Ausgangssituation, Projektziel und Zeitplanung) über das Bildungsportal der IHK einreichen – bei der IHK Flensburg für den Winter <strong>Mitte September</strong>, für den Sommer <strong>Mitte Februar</strong>. Das ist eine <strong>Ausschlussfrist</strong>; das genaue Datum steht im PIN-Schreiben <span class="badge-soft">IHK-abhängig</span>.</li>
      <li><strong>Genehmigung</strong> durch den Prüfungsausschuss abwarten – erst danach mit dem Projekt beginnen. Auflagen und Hinweise aus der Genehmigung sind bindend.</li>
      <li><strong>Projektdurchführung</strong> im Betrieb (max. 40 h inklusive Dokumentation). IHK Flensburg: Winter 15.10.–15.11., Sommer 01.04.–01.05.</li>
      <li><strong>Dokumentation</strong> fristgerecht im Bildungsportal hochladen; der Ausbildungsbetrieb muss sie freigeben.</li>
      <li><strong>Schriftliche Prüfung</strong> an einem bundeseinheitlichen Mittwoch: KAIS, AEN und WiSo nacheinander (zusammen 240 min).</li>
      <li><strong>Präsentation und Fachgespräch</strong> vor dem Prüfungsausschuss (in Schleswig-Holstein vermutlich einige Wochen nach der schriftlichen Prüfung <span class="badge-soft">unsicher</span>).</li>
      <li>Falls nötig: <strong>mündliche Ergänzungsprüfung</strong> in einem schriftlichen Bereich, meist direkt im Anschluss.</li>
      <li>Mitteilung „bestanden/nicht bestanden“ meist direkt nach dem Fachgespräch; das Zeugnis kommt später.</li>
    </ol>
    <p><strong>Tagesablauf schriftlich (Beispiel IHK Berlin):</strong> 08:00–09:30 KAIS · 10:00–11:30 AEN · 11:45–12:45 WiSo. Für Schleswig-Holstein ist das nicht bestätigt – maßgeblich ist deine Einladung <span class="badge-soft">IHK-abhängig</span>. Am <strong>Arbeitstag unmittelbar vor der schriftlichen Abschlussprüfung</strong> musst du freigestellt werden (§ 15 BBiG).</p>

    <h5>Aufgabentypen</h5>
    <table>
      <thead><tr><th>Bereich</th><th>So sehen die Aufgaben aus</th><th>Worauf du achten musst</th></tr></thead>
      <tbody>
        <tr><td>KAIS und AEN</td><td>Je <strong>4 ungebundene Aufgaben à 20–30 Punkte = 100 Punkte</strong> (laut Katalog). Jede Aufgabe hat eine Ausgangssituation in einem fiktiven Unternehmen und mehrere Teilaufgaben (a, b, c …). Typisch: Freitext, Tabellen ausfüllen, Berechnungen, Netzplan ergänzen, Konsolenausgaben oder Wireshark-Mitschnitte deuten, Firewall-/Routingtabellen erstellen, Pseudocode oder Skripte ergänzen und korrigieren, SQL-Abfragen schreiben, UML-Diagramme vervollständigen.</td><td>Alle Aufgaben bearbeiten – eine Streich- oder Wahlaufgabe wie in der alten Prüfungsordnung ist im Katalogaufbau nicht vorgesehen. Antworten stehen direkt im Aufgabenheft; Platz und Punkte zeigen, wie ausführlich du antworten sollst.</td></tr>
        <tr><td>WiSo</td><td><strong>ca. 30 maschinell auswertbare Aufgaben = 100 Punkte</strong> (laut Katalog gebundene und ungebundene): Multiple Choice (meist 5 Antworten, eine oder mehrere richtig), Zuordnungen, Reihenfolgen, Zahlen eintragen (z. B. Fristen, Entgelt, Kennzahlen). Für alle IT-Berufe identisch.</td><td>Genau lesen, wie viele Antworten richtig sind. Rechenergebnisse exakt im verlangten Format eintragen. Viele Aufgaben wiederholen sich aus älteren Prüfungen.</td></tr>
        <tr><td>Englisch</td><td>Fließt bereichsübergreifend ein (Datenblatt, Hersteller-Mail, Fehlermeldung, Handbuchauszug).</td><td>Antwort auf Deutsch, sofern nichts anderes verlangt wird.</td></tr>
      </tbody>
    </table>

    <h5>Bewertung: IHK-Notenschlüssel</h5>
    <table>
      <thead><tr><th>Punkte</th><th>Note</th></tr></thead>
      <tbody>
        <tr><td>100 – 92</td><td>1 · sehr gut</td></tr>
        <tr><td>unter 92 – 81</td><td>2 · gut</td></tr>
        <tr><td>unter 81 – 67</td><td>3 · befriedigend</td></tr>
        <tr><td>unter 67 – 50</td><td>4 · ausreichend</td></tr>
        <tr><td>unter 50 – 30</td><td>5 · mangelhaft</td></tr>
        <tr><td>unter 30 – 0</td><td>6 · ungenügend</td></tr>
      </tbody>
    </table>

    <h5>Bestehensregeln (§ 24 Abs. 2 FIAusbV)</h5>
    <p>Du hast bestanden, wenn – auch nach einer eventuellen mündlichen Ergänzungsprüfung – <strong>alle vier</strong> Bedingungen erfüllt sind:</p>
    <ol>
      <li>Gesamtergebnis aus Teil 1 und Teil 2 mindestens „ausreichend“ (≥ 50 P),</li>
      <li>Ergebnis von Teil 2 mindestens „ausreichend“,</li>
      <li>mindestens <strong>drei der vier</strong> Prüfungsbereiche von Teil 2 mindestens „ausreichend“,</li>
      <li><strong>kein</strong> Prüfungsbereich von Teil 2 „ungenügend“ (unter 30 P).</li>
    </ol>
    <div class="callout merke"><strong>Merke:</strong> Höchstens <strong>ein</strong> Bereich von Teil 2 darf „mangelhaft“ (30 bis unter 50 P) sein, und <strong>keiner</strong> darf unter 30 P liegen. Das Projekt zählt dabei als <strong>ein</strong> Bereich (Doku und Präsentation/Fachgespräch zusammen). Die AP1 ist <strong>kein Sperrfach</strong> – sie wirkt nur über die 20 % im Gesamtergebnis.</div>
    <div class="callout beispiel"><strong>Beispiel A – bestanden:</strong> AP1 40 P, Projekt 70, KAIS 45, AEN 55, WiSo 75.<br>
      Gesamt = 0,2 ⋅ 40 + 0,5 ⋅ 70 + 0,1 ⋅ 45 + 0,1 ⋅ 55 + 0,1 ⋅ 75 = 8 + 35 + 4,5 + 5,5 + 7,5 = <strong>60,5 P</strong> ✔<br>
      Teil 2 = (35 + 4,5 + 5,5 + 7,5) ÷ 0,8 = 52,5 ÷ 0,8 ≈ <strong>65,6 P</strong> ✔<br>
      Bereiche ≥ 50 P: Projekt, AEN, WiSo = 3 ✔ · KAIS 45 P ist mangelhaft, aber nicht ungenügend ✔ → <strong>bestanden</strong>.<br><br>
      <strong>Beispiel B – Sperrregel greift:</strong> wie A, aber KAIS nur 28 P. Gesamt 58,8 P und Teil 2 63,5 P wären ausreichend – trotzdem <strong>nicht bestanden</strong>, weil KAIS „ungenügend“ ist (Bedingung 4).<br><br>
      <strong>Beispiel C – zwei schwache Bereiche:</strong> AP1 80, Projekt 85, KAIS 45, AEN 48, WiSo 90. Gesamt = 16 + 42,5 + 4,5 + 4,8 + 9 = <strong>76,8 P</strong> (befriedigend) – aber nur 2 Bereiche ≥ 50 P → <strong>nicht bestanden</strong> (Bedingung 3).</div>
    <div class="callout tipp"><strong>Wie viel brauche ich in Teil 2?</strong> Aus Gesamt ≥ 50 folgt: 0,2 ⋅ AP1 + 0,8 ⋅ Teil 2 ≥ 50. Bei 40 P in der AP1 brauchst du in Teil 2 mindestens (50 − 8) ÷ 0,8 = <strong>52,5 P</strong>, bei 30 P in der AP1 schon <strong>55 P</strong>. Eine schwache AP1 lässt sich also ausgleichen – die Sperrregeln für Teil 2 aber nicht.</div>

    <h5>Mündliche Ergänzungsprüfung (§ 25 FIAusbV)</h5>
    <ul>
      <li>Nur <strong>auf deinen Antrag</strong> und nur in <strong>einem</strong> der Bereiche <strong>KAIS, AEN oder WiSo</strong> – nicht für das Projekt und nicht für die AP1.</li>
      <li>Voraussetzungen: Der Bereich ist <strong>schlechter als „ausreichend“</strong> (unter 50 P) <strong>und</strong> die Ergänzungsprüfung kann für das Bestehen den <strong>Ausschlag geben</strong>.</li>
      <li>Dauer: etwa <strong>15 Minuten</strong> (laut IHK Koblenz ohne Vorbereitungszeit). Meist direkt nach Präsentation und Fachgespräch oder zu einem späteren Termin.</li>
      <li>Neues Bereichsergebnis = (2 ⋅ schriftliches Ergebnis + mündliches Ergebnis) ÷ 3.</li>
    </ul>
    <div class="callout beispiel"><strong>Beispiel:</strong> In Beispiel B (KAIS 28 P) brauchst du mündlich mindestens x mit (2 ⋅ 28 + x) ÷ 3 ≥ 30 → 56 + x ≥ 90 → <strong>x ≥ 34 P</strong>. Dann liegt KAIS bei 30 P (mangelhaft, aber nicht mehr ungenügend) und alle vier Bedingungen sind erfüllt.<br>In Beispiel C wählst du AEN (48 P): (2 ⋅ 48 + x) ÷ 3 ≥ 50 → 96 + x ≥ 150 → <strong>x ≥ 54 P</strong>. Dann sind wieder drei Bereiche ausreichend.</div>
    <p><strong>Wiederholung:</strong> Die Abschlussprüfung kann <strong>zweimal wiederholt</strong> werden; Teil 1 lässt sich nicht eigenständig wiederholen (§ 37 BBiG). Auf dein Verlangen verlängert sich die Ausbildung bis zur nächsten Wiederholungsprüfung, höchstens um ein Jahr (§ 21 Abs. 3 BBiG). Bereits ausreichende Bereiche musst du laut Prüfungsordnung der Kammer auf Antrag meist nicht wiederholen, wenn du dich innerhalb von zwei Jahren anmeldest – bitte bei der IHK Flensburg nachfragen <span class="badge-soft">unsicher</span>.</p>

    <h5>Hilfsmittel und Belegsatz</h5>
    <ul>
      <li><strong>Erlaubt:</strong> ein <strong>nicht programmierbarer</strong>, netzunabhängiger Taschenrechner ohne Kommunikationsfunktion und ein dokumentenechter Stift (Kugelschreiber). Papier stellt die IHK.</li>
      <li><strong>Nicht erlaubt:</strong> Smartphone, Smartwatch und andere vernetzte Geräte. Formelsammlungen, Tabellenbücher oder Wörterbücher sind nach allen Hinweisen nicht zugelassen – verbindlich ist die Einladung <span class="badge-soft">unsicher</span>.</li>
      <li><strong>Belegsatz:</strong> Jede Aufgabe bezieht sich auf beiliegende Unterlagen (Unternehmensbeschreibung, Netzwerkplan, Datenblätter, Konsolenausgaben, Tabellen). Seit der 2. Katalogauflage gibt es <strong>einheitliche Belegsätze</strong> für alle IT-Berufe. Die Notationen aus dem Katalog-Anhang musst du lesen und anwenden können: Netzwerkplan-Symbole, <strong>SQL-Syntax</strong>, <strong>UML</strong> (Anwendungsfall-, Aktivitäts-, Klassen-, Sequenz-, Zustandsdiagramm), EPK, BPMN, Netzplan sowie die Präfix-Tabelle.</li>
    </ul>
    <div class="callout achtung"><strong>Präfix-Regel der ZPA:</strong> <strong>Datenmengen</strong> werden mit <strong>Binärpräfixen</strong> angegeben (1 KiB = 2¹⁰ Byte, 1 MiB = 2²⁰, 1 GiB = 2³⁰, 1 TiB = 2⁴⁰ Byte), <strong>Datenraten, Leistung und Strom</strong> mit <strong>Dezimalpräfixen</strong> (1 Mbit/s = 10⁶ bit/s). Gibt die Aufgabe selbst eine Einheit vor, übernimmst du sie. Beispiel: 1 TB = 10¹² Byte ≈ 0,909 TiB – bei großen Werten macht das fast 10 % aus.</div>

    <h5>Operatoren – was die Prüfer erwarten</h5>
    <table>
      <thead><tr><th>Operator</th><th>Das wird erwartet</th><th>Beispiel aus der AP2</th></tr></thead>
      <tbody>
        <tr><td><strong>nennen, angeben, auflisten</strong></td><td>Begriffe oder Fakten ohne Erklärung – <strong>genau die geforderte Anzahl</strong>.</td><td>„Nennen Sie drei Einträge, die ein Mailserver im DNS benötigt.“ → z. B. MX, A/AAAA, PTR</td></tr>
        <tr><td><strong>beschreiben, darstellen</strong></td><td>Sachverhalt oder Ablauf in ganzen Sätzen, sachlich und geordnet, ohne Bewertung.</td><td>DHCP-Ablauf in vier Schritten (DORA) beschreiben.</td></tr>
        <tr><td><strong>erläutern, erklären</strong></td><td>Beschreiben <strong>plus</strong> Zusammenhang, Ursache/Wirkung oder Beispiel – möglichst mit Bezug zur Ausgangssituation.</td><td>Erläutern, warum RAID 6 bei großen Platten sicherer ist als RAID 5 (lange Rebuild-Zeit).</td></tr>
        <tr><td><strong>begründen</strong></td><td>Entscheidung oder Aussage mit stichhaltigen Argumenten stützen: „… weil …“, bezogen auf das Szenario.</td><td>Begründen, warum für das Homeoffice ein Remote-Access-VPN gewählt wird.</td></tr>
        <tr><td><strong>vergleichen, gegenüberstellen, unterscheiden</strong></td><td>Gemeinsamkeiten und Unterschiede <strong>kriterienweise</strong> herausarbeiten, gern als Tabelle.</td><td>IPsec und SSL-VPN nach Sicherheit, Aufwand und Firewall-Tauglichkeit vergleichen.</td></tr>
        <tr><td><strong>berechnen, ermitteln, bestimmen</strong></td><td>Formel → Werte einsetzen → Ergebnis <strong>mit Einheit</strong>. Der Rechenweg bringt Teilpunkte.</td><td>Nutzkapazität eines RAID 6 aus 6 × 4 TB berechnen.</td></tr>
        <tr><td><strong>beurteilen, bewerten, prüfen</strong></td><td>Kriterien anlegen, abwägen und zu einem <strong>begründeten Urteil</strong> kommen.</td><td>Beurteilen, ob das PoE-Budget eines Switches für 12 Access Points reicht.</td></tr>
        <tr><td><strong>analysieren, untersuchen</strong></td><td>Material (Mitschnitt, Log, Code, Konfiguration) gezielt auswerten und Auffälligkeiten benennen.</td><td>ARP-Poisoning in einem Wireshark-Mitschnitt erkennen.</td></tr>
        <tr><td><strong>entwerfen, entwickeln, erstellen</strong></td><td>Eigene, vollständige Lösung erarbeiten (Regelwerk, Adressplan, Pseudocode, SQL, Diagramm).</td><td>Firewall-Regelwerk für eine DMZ erstellen.</td></tr>
        <tr><td><strong>ergänzen, vervollständigen, zuordnen</strong></td><td>Vorgegebene Struktur fachlich korrekt füllen – Notation aus dem Belegsatz verwenden.</td><td>Fehlende Subinterfaces in einer Router-Konfiguration ergänzen.</td></tr>
        <tr><td><strong>Fehler finden, korrigieren</strong></td><td>Fehler lokalisieren, Art benennen (Syntax/Logik) und die korrigierte Fassung angeben.</td><td>Off-by-one-Fehler in einer Schleife korrigieren.</td></tr>
      </tbody>
    </table>

    <h5>Zeitmanagement</h5>
    <ul>
      <li><strong>KAIS/AEN:</strong> 90 min für 100 P = 0,9 min pro Punkt. Plane 5 min zum Sichten von Aufgaben und Belegsatz und 5 min Kontrolle ein – dann bleiben 0,8 min pro Punkt, also rund <strong>20 min für eine 25-Punkte-Aufgabe</strong>.</li>
      <li><strong>WiSo:</strong> 60 min für ca. 30 Aufgaben = etwa <strong>2 min pro Aufgabe</strong>. Unklare Aufgaben markieren und am Ende noch einmal ansehen – keine Aufgabe unbeantwortet lassen.</li>
      <li>Beginne mit den Aufgaben, die du sicher kannst (Rechnungen, Subnetting, Regelwerke), und beiß dich nicht fest: Lücke lassen, markieren, weiter.</li>
      <li>Die Prüfungsberichte der letzten Jahre sagen übereinstimmend: Die Zeit in KAIS und AEN ist <strong>sehr knapp</strong>. Übe deshalb Probeklausuren immer mit Stoppuhr.</li>
    </ul>

    <h5>Lernfahrplan (Vorschlag)</h5>
    <table>
      <thead><tr><th>Zeitpunkt</th><th>Schwerpunkt</th></tr></thead>
      <tbody>
        <tr><td>Ende 2. Ausbildungsjahr</td><td>Themen-Checkliste einmal ehrlich durchgehen, Grundlagen aus LF 8 und LF 9 sichern (Subnetting, OSI/Ports, SQL). Mit dem Betrieb ein Projektthema suchen.</td></tr>
        <tr><td>ca. 6 Monate vorher</td><td>Projektantrag schreiben (Frist beachten!), pro Woche einen Themenblock aus KAIS/AEN wiederholen, WiSo-Grundlagen auffrischen.</td></tr>
        <tr><td>ca. 8 Wochen vorher</td><td>Probeklausuren und alte Prüfungen unter Zeitdruck (90 min) lösen, Fehler auswerten, schwache Themen gezielt nacharbeiten.</td></tr>
        <tr><td>Projektzeitraum</td><td>Achtung: In Flensburg liegt der Durchführungszeitraum kurz vor bzw. über dem schriftlichen Termin (Winter 15.10.–15.11. vor dem 25.11.; Sommer 01.04.–01.05. mit Termin 28.04.). Lernzeit und Projekt früh mit dem Betrieb abstimmen.</td></tr>
        <tr><td>letzte 2 Wochen</td><td>Formeln und Rechenwege (RAID, USV, Verfügbarkeit, Übertragungszeit, Backup), Ports und WiSo-Fakten mit Karteikarten wiederholen.</td></tr>
        <tr><td>Vortag</td><td>Freistellung nutzen, Taschenrechner und Stifte bereitlegen, Einladung und Ausweis einpacken, früh schlafen.</td></tr>
      </tbody>
    </table>

    <h5>So nutzt du dieses Portal für die AP2</h5>
    <ul>
      <li><strong>Themen &amp; To-dos:</strong> die komplette AP2-Checkliste nach Prüfungsbereichen. Hake nur ab, was du <em>ohne Unterlagen</em> kannst. Mit dem Filter <em>Häufig</em> siehst du die Themen, die in den letzten Prüfungen oft vorkamen – lerne aber nicht nur diese, denn Klassiker wie Subnetting oder RAID fehlten auch schon ganz.</li>
      <li><strong>Lernzettel:</strong> Die Inhalte stehen in den Lernfeldern (vor allem LF 8–12 und WiSo); alles, was für Teil 2 zählt, ist mit <span class="badge-soft">AP2</span> markiert.</li>
      <li><strong>Quiz:</strong> Der Reiter <em>Quiz</em> sammelt alle AP2-Fragen aus allen Modulen – ideal als tägliche 10-Minuten-Wiederholung.</li>
      <li><strong>Probeklausur:</strong> erst selbst mit Stoppuhr lösen, dann mit der Musterlösung vergleichen und Punkte zählen.</li>
      <li><strong>Rechner &amp; Trainer:</strong> RAID-Rechner, Verfügbarkeit &amp; Ausfallzeit, Speicher &amp; Übertragung, Strom &amp; USV, IPv4-Subnetting- und IPv6-Trainer – zum Kontrollieren deiner eigenen Rechnungen.</li>
      <li><strong>Lernplan &amp; Karteikarten:</strong> Fortschritt im Blick behalten und Fakten (Ports, Fristen, Formeln) wiederholen. Dein Stand wird nur lokal im Browser gespeichert – über den Export kannst du ihn sichern.</li>
    </ul>
    <div class="callout achtung"><strong>Wichtig:</strong> Dieses Portal ist kein offizielles Angebot der IHK. Verbindlich sind die FIAusbV, der Prüfungskatalog und die Unterlagen deiner IHK (PIN-Schreiben, Einladung, Bildungsportal). Angaben mit <span class="badge-soft">unsicher</span> oder <span class="badge-soft">IHK-abhängig</span> bitte selbst prüfen – bei der IHK Flensburg hilft das Service-Center (0461 806-806).</div>
  `,

  parts: [
    {
      id: "kau",
      title: "Konzeption und Administration von IT-Systemen (KAIS)",
      weight: "10 %",
      duration: "90 min",
      form: "schriftlich · 4 offene Aufgaben à 20–30 P",
      html: `
        <p><strong>Was geprüft wird (§ 21 FIAusbV):</strong> Du zeigst, dass du</p>
        <ol>
          <li>IT-Systeme für unterschiedliche Anforderungen <strong>planen und konfigurieren</strong>,</li>
          <li>IT-Systeme <strong>administrieren und betreiben</strong>,</li>
          <li><strong>Speicherlösungen</strong> integrieren und verwalten und</li>
          <li><strong>Programme zur automatisierten Systemverwaltung</strong> erstellen kannst (Skripte, Pseudocode).</li>
        </ol>
        <p>Schwerpunkte im Katalog: Betreiben von IT-Systemen, Speicherlösungen, Programmieren, Konzipieren und Realisieren, Administrieren – dazu Datenbanken/SQL, Tests, Qualitätssicherung und IT-Sicherheit aus dem fachrichtungsübergreifenden Teil. Inhaltlich stecken vor allem <strong>LF 8, LF 10b, LF 11b und LF 12b</strong> dahinter.</p>
        <h6>Typische Themen laut Prüfungsberichten 2023–2026</h6>
        <table>
          <thead><tr><th>Thema</th><th>Typische Aufgabe</th></tr></thead>
          <tbody>
            <tr><td>RAID-Level und Kapazität</td><td>Nutzkapazität und Ausfalltoleranz für RAID 5, 6, 10 berechnen, Level begründet empfehlen; Hot Spare zählt nicht mit.</td></tr>
            <tr><td>Skripte und Pseudocode</td><td>Code lesen, Ausgabe bestimmen, Lücken füllen, Syntax- und Logikfehler finden (Schleifen, Arrays, Modulo).</td></tr>
            <tr><td>Cloud und Hochverfügbarkeit</td><td>IaaS/PaaS/SaaS zuordnen, Datenschutz abwägen, Load Balancer, Reverse Proxy, horizontale Skalierung.</td></tr>
            <tr><td>Backup und Restore</td><td>Welche Sicherungen braucht der Restore? RPO/RTO, 3-2-1-Regel, Backup- und Restore-Dauer.</td></tr>
            <tr><td>USV und Netzteil</td><td>Scheinleistung in VA berechnen, USV-Klasse wählen; Netzteil mit Wirkungsgrad und Reserve dimensionieren.</td></tr>
            <tr><td>Datenbanken</td><td>SQL-Abfragen (JOIN, GROUP BY, HAVING), Index, Transaktionen/ACID, Sperren.</td></tr>
            <tr><td>Datenschutz und Sicherheit</td><td>DSGVO-Datenschutzvorfall, TOM, MDM, Härtung, Berechtigungskonzepte.</td></tr>
          </tbody>
        </table>
        <div class="callout formel"><strong>Formeln, die du sicher können musst:</strong><br>
          RAID-Nutzkapazität (n Platten à C): RAID 0 = n ⋅ C · RAID 1 = C · RAID 5 = (n − 1) ⋅ C · RAID 6 = (n − 2) ⋅ C · RAID 10 = n ÷ 2 ⋅ C<br>
          USV: Scheinleistung S [VA] = Wirkleistung P [W] ÷ cos φ, danach Reserve aufschlagen<br>
          Netzteil: P_zu = P_ab ÷ η<br>
          Verfügbarkeit A = MTBF ÷ (MTBF + MTTR) · Ausfallzeit pro Jahr = (1 − A) ⋅ 8.760 h<br>
          Restore: Vollsicherung + <em>alle</em> Inkremente bzw. Vollsicherung + <em>letzte</em> Differenzsicherung</div>
        <div class="callout beispiel"><strong>Kurzbeispiel:</strong> 6 Platten à 4 TB. RAID 5: 5 ⋅ 4 = 20 TB (1 Platte darf ausfallen), RAID 6: 4 ⋅ 4 = 16 TB (2 Platten), RAID 10: 6 ÷ 2 ⋅ 4 = 12 TB. 16 TB = 16 ⋅ 10¹² Byte ÷ 2⁴⁰ ≈ 14,55 TiB.</div>
        <div class="callout tipp"><strong>Tipp:</strong> Bei Code-Aufgaben toleriert der Katalog Syntaxfehler in deinem eigenen Pseudocode – die Kontrollstrukturen müssen aber durch Einrückung klar erkennbar sein. Bei Fehlersuche immer die Fehlerart (Syntax/Logik) benennen und die korrigierte Zeile hinschreiben.</div>
      `
    },
    {
      id: "aen",
      title: "Analyse und Entwicklung von Netzwerken (AEN)",
      weight: "10 %",
      duration: "90 min",
      form: "schriftlich · 4 offene Aufgaben à 20–30 P",
      html: `
        <p><strong>Was geprüft wird (§ 22 FIAusbV):</strong> Du zeigst, dass du</p>
        <ol>
          <li><strong>Netzwerkprotokolle</strong> anwendungsbezogen auswählen und einsetzen,</li>
          <li><strong>Netzwerkkomponenten</strong> bedarfsgerecht auswählen und konfigurieren,</li>
          <li>die <strong>IT-Sicherheit in Netzwerken</strong> sicherstellen und</li>
          <li><strong>Betrieb und Verfügbarkeit</strong> von Netzwerken überwachen und gewährleisten kannst.</li>
        </ol>
        <p>Grundlage ist vor allem <strong>LF 9</strong> (Netzwerke und Dienste) und <strong>LF 11b</strong> (Betrieb und Sicherheit), dazu LF 3 als Basis. Fast jede Aufgabe hängt an einem <strong>Netzwerkplan im Belegsatz</strong> – laut Berichten teils zwei Seiten groß.</p>
        <h6>Typische Themen laut Prüfungsberichten 2023–2026</h6>
        <table>
          <thead><tr><th>Thema</th><th>Typische Aufgabe</th></tr></thead>
          <tbody>
            <tr><td>VLAN, 802.1Q, Inter-VLAN-Routing</td><td>Access-/Trunk-Ports festlegen, Router-on-a-Stick mit Subinterfaces, Aufbau des VLAN-Tags.</td></tr>
            <tr><td>IPv4-/IPv6-Subnetting</td><td>VLSM-Adressplan, /48 in /64-Netze teilen, Adresstypen erkennen, Fehler in ipconfig-Ausgaben.</td></tr>
            <tr><td>VPN</td><td>Site-to-Site vs. Remote Access, IPsec (IKE, ESP, Tunnelmodus) vs. SSL-VPN vs. WireGuard.</td></tr>
            <tr><td>Firewall und Angriffe</td><td>Regelwerk mit DMZ (first match, implicit deny), SPI/NGFW, MITM, ARP-Poisoning, DDoS, Port Security.</td></tr>
            <tr><td>DNS und Mail</td><td>Record-Typen, Split-Horizon, DNSSEC, SPF/DKIM/DMARC.</td></tr>
            <tr><td>Redundanz</td><td>STP (Root Bridge), LACP/Port-Channel, FHRP (HSRP/VRRP), Verfügbarkeit mit zwei Providern.</td></tr>
            <tr><td>Analyse</td><td>Wireshark-Mitschnitt, ping/traceroute, NAT/PAT-Tabelle, Übertragungszeit mit Overhead.</td></tr>
          </tbody>
        </table>
        <div class="callout formel"><strong>Formeln:</strong><br>
          Nutzbare Hosts = 2^(32 − Präfix) − 2 · Anzahl /64-Netze aus /48 = 2^(64 − 48) = 65.536<br>
          Parallel (redundant): A = 1 − (1 − A₁) ⋅ (1 − A₂) · Seriell: A = A₁ ⋅ A₂<br>
          Übertragungszeit = Datenmenge in bit ÷ nutzbare Datenrate; nutzbare Rate = Rate ⋅ (1 − Overhead)</div>
        <div class="callout beispiel"><strong>Kurzbeispiel:</strong> 50 GB über 100 Mbit/s bei 10 % Overhead: nutzbar 90 Mbit/s → 50 ⋅ 10⁹ ⋅ 8 bit ÷ (90 ⋅ 10⁶ bit/s) ≈ 4.444 s ≈ <strong>74 min</strong>. Bei 50 GiB (50 ⋅ 2³⁰ Byte) wären es ≈ 79,5 min.</div>
        <div class="callout tipp"><strong>Tipp:</strong> Lies den Netzwerkplan zuerst komplett und markiere dir Netze, VLAN-IDs, Gateways und Übergänge (Router, Firewall). Viele Teilaufgaben bauen darauf auf. AEN galt in den letzten Terminen oft als schwerer als KAIS – hier lohnen sich Probeklausuren unter Zeitdruck besonders.</div>
      `
    },
    {
      id: "wiso",
      title: "Wirtschafts- und Sozialkunde (WiSo)",
      weight: "10 %",
      duration: "60 min",
      form: "schriftlich · ca. 30 gebundene Aufgaben",
      html: `
        <p><strong>Was geprüft wird (§ 23 FIAusbV):</strong> Du stellst allgemeine wirtschaftliche und gesellschaftliche Zusammenhänge der Berufs- und Arbeitswelt dar und beurteilst sie. Der Katalog gliedert in fünf Gebiete: <strong>Berufsbildung, Arbeits- und Tarifrecht</strong> · <strong>Aufbau und Organisation des Ausbildungsbetriebs</strong> · <strong>Sicherheit und Gesundheitsschutz</strong> · <strong>Umweltschutz</strong> · <strong>vernetztes Zusammenarbeiten mit digitalen Medien</strong>.</p>
        <p><strong>Form:</strong> ca. 30 gebundene und ungebundene, maschinell auswertbare Aufgaben (Multiple Choice meist mit 5 Antworten, Zuordnungen, Reihenfolgen, Zahleneintrag), zusammen 100 Punkte. Das Aufgabenheft ist für alle IT-Berufe gleich.</p>
        <h6>Kernthemen</h6>
        <table>
          <thead><tr><th>Themenfeld</th><th>Das musst du parat haben</th></tr></thead>
          <tbody>
            <tr><td>Ausbildung (BBiG)</td><td>Vertragsinhalte, Probezeit 1–4 Monate, Kündigung in der Ausbildung, Pflichten, Freistellung, Ende der Ausbildung</td></tr>
            <tr><td>Jugendarbeitsschutz</td><td>8 h/Tag, 40 h/Woche, Pausen 30/60 min, Berufsschultag, Urlaub 30/27/25 Werktage</td></tr>
            <tr><td>Arbeitsrecht</td><td>Kündigungsfristen (§ 622 BGB), Kündigungsschutz, Mutterschutz, Elternzeit, ArbZG, BUrlG, AGG</td></tr>
            <tr><td>Tarif und Mitbestimmung</td><td>Tarifvertragsarten, Friedenspflicht, Günstigkeitsprinzip, Betriebsrat, JAV, Beteiligungsrechte, Betriebsvereinbarung</td></tr>
            <tr><td>Sozialversicherung und Entgelt</td><td>fünf Zweige und Träger, Beitragstragung, Brutto-Netto-Rechnung</td></tr>
            <tr><td>Betrieb und Wirtschaft</td><td>Rechtsformen, Organisationsformen, Sektoren, Kennzahlen (Produktivität, Wirtschaftlichkeit, Rentabilität), Konzern/Kartell/Fusion, soziale Marktwirtschaft</td></tr>
            <tr><td>Arbeitssicherheit und Umwelt</td><td>Sicherheitszeichen, Brandklassen, Unfallmeldung, Ergonomie, Entsorgung (ElektroG, BattG), Abfallhierarchie</td></tr>
            <tr><td>Digitale Zusammenarbeit</td><td>E-Mail-Regeln (BCC), Social Engineering, Social Media und Loyalitätspflicht, Ethik, Europass</td></tr>
          </tbody>
        </table>
        <p><strong>Bezug zum Unterricht:</strong> Im Fach Wirtschaft/Politik der Klasse wurden u. a. Unternehmensformen, Arbeitszeugnis, Arbeits- und Sozialgerichtsbarkeit, ökonomisches Prinzip, Tarifverträge, Personalrat, Mitbestimmung, Kündigung und Kündigungsschutz, duale Ausbildung, Wirtschaftssektoren, Produktionsfaktoren, Kennzahlen, Angebotsvergleich und Handelskalkulation behandelt – genau diese Themen tauchen in WiSo-Prüfungen regelmäßig auf.</p>
        <div class="callout beispiel"><strong>Typische Rechenaufgabe:</strong> Ertrag 1,2 Mio. €, Aufwand 1,0 Mio. €, Eigenkapital 1,6 Mio. €. Wirtschaftlichkeit = 1,2 ÷ 1,0 = <strong>1,2</strong>; Gewinn = 200.000 € → Eigenkapitalrentabilität = 200.000 ÷ 1.600.000 ⋅ 100 = <strong>12,5 %</strong>.</div>
        <div class="callout tipp"><strong>Tipp:</strong> WiSo-Aufgaben werden laut Prüfungsberichten oft wiederverwendet – alte WiSo-Prüfungen zu üben lohnt sich hier besonders. Gesetzliche Werte (Beitragssätze, Grenzen, Mindestvergütung) ändern sich jährlich: vor der Prüfung den aktuellen Stand prüfen. 2025 wurden Betriebsrat, JAV, Kündigungsfristen und Jugendarbeitsschutz berichtet, 2026 erstmals der Europass.</div>
      `
    },
    {
      id: "projekt",
      title: "Planen und Umsetzen eines Projektes der Systemintegration",
      weight: "50 %",
      duration: "max. 40 h + max. 30 min",
      form: "Projektarbeit + Doku · Präsentation + Fachgespräch",
      html: `
        <p>Der größte Prüfungsbereich: Du führst im Ausbildungsbetrieb ein <strong>echtes Projekt der Systemintegration</strong> durch, dokumentierst es, präsentierst die Ergebnisse und stellst dich einem Fachgespräch (§ 20 FIAusbV).</p>
        <h6>Anforderungen – alle sechs müssen vorkommen</h6>
        <ol>
          <li>auftragsbezogene Anforderungen analysieren,</li>
          <li>Lösungsalternativen nach technischen, wirtschaftlichen und qualitativen Aspekten vorschlagen,</li>
          <li>Systemänderungen und -erweiterungen durchführen und übergeben,</li>
          <li>IT-Systeme einführen und pflegen,</li>
          <li>Schwachstellen analysieren sowie Schutzmaßnahmen vorschlagen und umsetzen,</li>
          <li>das Projekt anforderungsgerecht dokumentieren.</li>
        </ol>
        <div class="callout achtung"><strong>Achtung:</strong> Laut IHK-Leitfäden muss dein Projekt <strong>alle sechs</strong> Punkte abdecken – also auch <strong>Lösungsalternativen</strong> und eine <strong>Schwachstellenanalyse mit Schutzmaßnahmen</strong> (IT-Sicherheit).</div>
        <h6>1. Projektantrag</h6>
        <ul>
          <li>Pflichtinhalt nach § 20: <strong>Ausgangssituation, Projektziel, Zeitplanung</strong>. Üblich außerdem: konkrete Projektbezeichnung, Sach-, Zeit-, Kosten- und Qualitätsziel, Auftraggeber, Lösungsalternativen, IT-Sicherheit, Eigen- und Fremdleistung.</li>
          <li>Zeitplanung in Phasen mit Stunden (z. B. Analyse, Planung, Durchführung, Test/QS, Übergabe, Dokumentation), Summe höchstens 40 h; für die Dokumentation sehen viele Kammern höchstens etwa 15 % (≈ 6 h) vor.</li>
          <li>IHK Flensburg: Antrag über das Bildungsportal, Frist Winter <strong>Mitte September</strong>, Sommer <strong>Mitte Februar</strong> (Ausschlussfrist, Datum im PIN-Schreiben). Beginn erst nach der schriftlichen Genehmigung; Auflagen sind bindend.</li>
        </ul>
        <h6>2. Durchführung und Dokumentation</h6>
        <ul>
          <li>Durchführung IHK Flensburg: Winter 15.10.–15.11., Sommer 01.04.–01.05. <span class="badge-soft">IHK-abhängig</span></li>
          <li>Dokumentation in Flensburg: <strong>max. 10 Seiten DIN A4</strong> plus <strong>max. 25 Seiten Anhang</strong>, Arial 11, einzeilig, Seiten fortlaufend nummeriert; Upload im Bildungsportal, Freigabe durch den Betrieb <span class="badge-soft">vor Abgabe prüfen</span>.</li>
          <li>Aufbau: Ausgangssituation und Ziele → Planung (Soll-Konzept, Alternativen mit Entscheidungsmatrix, Zeit-/Kostenplan, QS- und Sicherheitsplanung) → Durchführung (Entscheidungen, Abweichungen) → Tests und umgesetzte TOM → Abschluss (Abnahme, Soll-Ist-Vergleich, Fazit) → Anhang (Protokolle, Netzpläne, Konfigurationsauszüge, Kundendokumentation).</li>
          <li>Die Doku ist ein <strong>Prozessbericht</strong> mit erkennbarer Eigenleistung, kein Lehrbuchtext. Betriebsdaten anonymisieren, Passwörter schwärzen, KI-Nutzung offenlegen (Richtschnur IHK Berlin).</li>
        </ul>
        <table>
          <thead><tr><th>Bewertung der Doku (Beispielmatrix einer IHK)</th><th>Gewicht</th></tr></thead>
          <tbody>
            <tr><td>Ausgangssituation (Ziele, Umfeld, Schnittstellen)</td><td>15 %</td></tr>
            <tr><td>Ressourcen- und Ablaufplanung</td><td>15 %</td></tr>
            <tr><td>Durchführung und Auftragsbearbeitung (inkl. QS, Entscheidungen)</td><td>30 %</td></tr>
            <tr><td>Projektergebnisse (Abnahme, Soll-Ist, Fazit)</td><td>15 %</td></tr>
            <tr><td>Gestaltung (äußere und inhaltliche Form)</td><td>15 %</td></tr>
            <tr><td>Kunden-/Anwenderdokumentation</td><td>10 %</td></tr>
          </tbody>
        </table>
        <p>Die Gewichte stammen aus einer IHK-Musterbewertung; welchen Bogen die IHK Flensburg nutzt, ist nicht veröffentlicht <span class="badge-soft">IHK-abhängig</span>.</p>
        <h6>3. Präsentation (höchstens 15 min)</h6>
        <p>Für den fachkundigen Prüfungsausschuss: Ausgangssituation → Alternativen und Entscheidung → Vorgehen → IT-Sicherheit und QS → Ergebnis mit Soll-Ist-Vergleich → Fazit. Bewertet werden Aufbau, Sprache und zielgruppengerechte Darstellung/Medieneinsatz. Technik bringst du selbst mit; nach 15 min darf abgebrochen werden.</p>
        <h6>4. Fachgespräch (Rest bis max. 30 min)</h6>
        <p>Fragen zu deinem Projekt <strong>und seinem fachlichen Umfeld</strong>: Warum diese Lösung? Was passiert bei Ausfall? Wie funktioniert die Technik im Detail? Was würdest du heute anders machen? Bewertet werden Fachwissen und Fachsprache, Problemlösung sowie Argumentation.</p>
        <div class="callout merke"><strong>Merke:</strong> Projektarbeit mit Doku zählt <strong>50 %</strong>, Präsentation mit Fachgespräch <strong>50 %</strong> des Bereichs – zusammen 50 % der Gesamtnote. Für das Projekt gibt es <strong>keine</strong> mündliche Ergänzungsprüfung, und auch hier darf das Ergebnis nicht unter 30 Punkten liegen.</div>
        <p><strong>Geeignete Themen</strong> (Beispiele): VLAN-Neukonzeption, 802.1X/NAC mit RADIUS, Firewall-Migration, Backup-/DR-Konzept mit unveränderlichem Speicher, Monitoring mit Alarmierung, Patchmanagement/Softwareverteilung, Virtualisierungsmigration, MDM-Rollout. <strong>Ungeeignet:</strong> reine Routine, reine Softwareentwicklung, künstliche Übungsaufgaben, Gruppenprojekte ohne abgrenzbare Eigenleistung.</p>
      `
    }
  ],

  areas: [
    /* ===== Kapitel 01 – fachrichtungsübergreifend (19.–36. Monat) ===== */
    {
      id: "kundenrecht", title: "Kundenbeziehungen rechtssicher gestalten (BGB, HGB, UWG, AGB, CRM)", part: "kau", lf: ["lf12", "lf11", "lf06"],
      items: [
        { id: "ap2-kundenrecht-1", text: "Ich kann BGB und HGB im Kundengeschäft anwenden: Wer ist Kaufmann, wann liegt ein zweiseitiges Handelsgeschäft vor, warum muss ein Kaufmann Mängel unverzüglich rügen und warum gilt Schweigen auf ein kaufmännisches Bestätigungsschreiben als Zustimmung.", ref: "lf12/vertrag-recht" },
        { id: "ap2-kundenrecht-2", text: "Ich kann Verstöße gegen das UWG erkennen (z. B. irreführende Werbung, Werbe-Mails ohne Einwilligung als unzumutbare Belästigung) und die Folgen nennen (Abmahnung, Unterlassungsanspruch, ggf. Schadensersatz).", ref: "lf12/vertrag-recht" },
        { id: "ap2-kundenrecht-3", text: "Ich kann das AGB-Recht (§§ 305 ff. BGB) anwenden: wirksame Einbeziehung, überraschende und unangemessen benachteiligende Klauseln sowie den Vorrang einer individuellen Absprache.", ref: "lf12/vertrag-recht" },
        { id: "ap2-kundenrecht-4", text: "Ich kann Compliance erklären – Einhaltung von Gesetzen, Normen und internen Regeln (z. B. Datenschutz, Lizenzen, Antikorruption) – und Folgen von Verstößen für Unternehmen und Beschäftigte nennen.", ref: "lf11/recht-compliance" },
        { id: "ap2-kundenrecht-5", text: "Ich kann Ziele und Funktionen eines CRM-Systems beschreiben (Kundenhistorie, Kontakte, Vertriebschancen, Auswertungen) und dabei die Datenschutzanforderungen für Kundendaten berücksichtigen.", ref: "lf12/vertrag-recht" }
      ]
    },
    {
      id: "datenaufbereitung", title: "Daten auswerten, aufbereiten und präsentieren", part: "kau", lf: ["lf01", "lf10", "lf02", "kommunikation"],
      items: [
        { id: "ap2-datenaufbereitung-1", text: "Ich kann zu einer Datenlage die passende Diagrammart wählen und begründen: Säulen/Balken für Vergleiche, Linie für zeitliche Verläufe, Kreis für Anteile, Streudiagramm für Zusammenhänge.", ref: "lf01/projekt-praesentation" },
        { id: "ap2-datenaufbereitung-2", text: "Ich kann Diagramme und Monitoring-Grafiken lesen und daraus Aussagen und konkrete Handlungsempfehlungen ableiten.", ref: "lf10/monitoring" },
        { id: "ap2-datenaufbereitung-3", text: "Ich kann Grundlagen der Bild- und Videobearbeitung erklären (Raster- vs. Vektorgrafik, Auflösung, verlustfreie vs. verlustbehaftete Kompression, PNG/JPEG/SVG, Codec und Container, Bitrate) und Dateigrößen abschätzen.", ref: "lf02/datenmengen" },
        { id: "ap2-datenaufbereitung-4", text: "Ich kann Tabellenkalkulation für Auswertungen nutzen: Formeln, relative und absolute Bezüge, WENN, SVERWEIS/XVERWEIS, SUMMEWENN und Diagramme." },
        { id: "ap2-datenaufbereitung-5", text: "Ich kann Präsentations- und Multimedia-Programme zielgruppengerecht einsetzen (Folienaufbau, Visualisierung, Barrierefreiheit).", ref: "kommunikation/praesentation" },
        { id: "ap2-datenaufbereitung-6", text: "Ich kann Vorgaben der Corporate Identity (Logo, Farben, Schriften, Corporate Design) in Präsentationen und Dokumenten umsetzen.", ref: "lf01/ziele-leitbild" }
      ]
    },
    {
      id: "testen", title: "Fehler finden und Software testen", part: "kau", lf: ["lf05", "lf08"],
      items: [
        { id: "ap2-testen-1", text: "Ich kann mit einem Debugger arbeiten (Haltepunkt, Einzelschritt, Variablen beobachten) und das Vorgehen bei der Fehlersuche beschreiben.", ref: "lf05/fehler-debugging" },
        { id: "ap2-testen-2", text: "Ich kann statische Tests (Review, Walkthrough, statische Code-Analyse – Code wird nicht ausgeführt) von dynamischen Tests (Programm läuft) unterscheiden.", ref: "lf05/testen" },
        { id: "ap2-testen-3", text: "Ich kann Black-Box-Tests (Äquivalenzklassen, Grenz- und Extremwerte) und White-Box-Tests (Anweisungs- und Zweigüberdeckung) erklären und passende Testfälle aufstellen.", ref: "lf05/testen" },
        { id: "ap2-testen-4", text: "Ich kann sinnvolle Testdaten erzeugen: gültige und ungültige Werte, Grenzwerte und leere Eingaben.", ref: "lf05/testen" },
        { id: "ap2-testen-5", text: "Ich kann Komponenten-, Integrations-, System- und Abnahmetest nach Testgegenstand und Zeitpunkt voneinander abgrenzen.", ref: "lf05/testen" },
        { id: "ap2-testen-6", text: "Ich kann Versionsverwaltung für Code und Skripte mit Git erklären (Repository, Commit, Branch, Merge, Tag, Rückkehr zu einer älteren Version).", ref: "lf08/umsetzung" }
      ]
    },
    {
      id: "algorithmen", title: "Algorithmen formulieren und mit UML darstellen", part: "kau", lf: ["lf05"],
      items: [
        { id: "ap2-algorithmen-1", text: "Ich kann Kontrollstrukturen als UML-Aktivitätsdiagramm oder als Pseudocode darstellen und zwischen beiden Darstellungen übersetzen.", ref: "lf05/algorithmen" },
        { id: "ap2-algorithmen-2", text: "Ich kann UML-Anwendungsfall-, Klassen- und Aktivitätsdiagramme in der Katalog-Notation lesen, ergänzen und aus einer Textbeschreibung erstellen.", ref: "lf05/uml" },
        { id: "ap2-algorithmen-3", text: "Ich kann Bildschirmmasken nach Regeln der Softwareergonomie und Barrierefreiheit entwerfen und bewerten.", ref: "lf05/text-system-gui" },
        { id: "ap2-algorithmen-4", text: "Ich kann einen Algorithmus schrittweise verfeinern: Problem zerlegen, Ein- und Ausgaben festlegen, Sonderfälle berücksichtigen.", ref: "lf05/algorithmen" }
      ]
    },
    {
      id: "datenbanken", title: "Datenbanken modellieren, anlegen und mit SQL abfragen", part: "kau", lf: ["lf08", "lf05"],
      items: [
        { id: "ap2-datenbanken-1", text: "Ich kann relationale und nicht-relationale Datenbanken (NoSQL: Dokument, Key-Value, spaltenorientiert, Graph) vergleichen und für einen Einsatzfall auswählen.", ref: "lf08/nosql" },
        { id: "ap2-datenbanken-2", text: "Ich kann passende Datentypen wählen: Boolean, Integer, Gleitkomma (DOUBLE), Festkomma für Geldbeträge (DECIMAL), Datum/Zeit, CHAR (feste Länge) vs. VARCHAR (variabel), BLOB und Geokoordinaten.", ref: "lf08/sql-ddl" },
        { id: "ap2-datenbanken-3", text: "Ich kann Redundanzen sowie Einfüge-, Änderungs- und Löschanomalien in einer Tabelle erkennen und erklären.", ref: "lf08/normalisierung" },
        { id: "ap2-datenbanken-4", text: "Ich kann Tabellen in die 1. NF (atomare Werte), 2. NF (volle funktionale Abhängigkeit vom Schlüssel) und 3. NF (keine transitiven Abhängigkeiten) überführen.", hot: true, ref: "lf08/normalisierung" },
        { id: "ap2-datenbanken-5", text: "Ich kann ein ER-Modell mit Attributen, Beziehungen und Kardinalitäten erstellen und in ein Relationenmodell mit Primär- und Fremdschlüsseln übertragen.", hot: true, ref: "lf08/erm" },
        { id: "ap2-datenbanken-6", text: "Ich kann referenzielle Integrität und Weitergabe bei Änderung/Löschung (ON UPDATE / ON DELETE CASCADE) erklären und die Folgen beim Löschen eines Datensatzes beurteilen.", ref: "lf08/relationenmodell" },
        { id: "ap2-datenbanken-7", text: "Ich kann Tabellen mit SQL anlegen und ändern (CREATE TABLE mit Datentypen, PRIMARY KEY, FOREIGN KEY … REFERENCES; ALTER TABLE ADD/DROP/MODIFY; DROP TABLE) und einen Index anlegen sowie Nutzen und Kosten eines Index erklären.", hot: true, ref: "lf08/sql-ddl" },
        { id: "ap2-datenbanken-8", text: "Ich kann Daten mit INSERT INTO … VALUES bzw. … SELECT, UPDATE … SET … WHERE und DELETE FROM … WHERE pflegen und erklären, warum ein vergessenes WHERE gefährlich ist.", hot: true, ref: "lf08/sql-dml-dcl" },
        { id: "ap2-datenbanken-9", text: "Ich kann Abfragen mit Projektion und Selektion schreiben (SELECT, DISTINCT, WHERE mit AND/OR/NOT, LIKE mit % und _, IS NULL, IN, Vergleichsoperatoren) und mit ORDER BY … ASC/DESC sortieren.", hot: true, ref: "lf08/sql-select" },
        { id: "ap2-datenbanken-10", text: "Ich kann Abfragen über mehrere Tabellen mit INNER JOIN, LEFT JOIN und RIGHT JOIN formulieren und das Ergebnis vorhersagen.", hot: true, ref: "lf08/sql-join" },
        { id: "ap2-datenbanken-11", text: "Ich kann mit GROUP BY und HAVING gruppieren, Aggregatfunktionen (COUNT, SUM, AVG, MIN, MAX sowie STDDEV, VARIANCE, CORR aus dem Katalog-Anhang) nutzen und WHERE (vor dem Gruppieren) von HAVING (nach dem Gruppieren) abgrenzen.", hot: true, ref: "lf08/sql-select" },
        { id: "ap2-datenbanken-12", text: "Ich kann Unterabfragen (WHERE … IN, EXISTS/NOT EXISTS, Unterabfrage im FROM mit Alias) und UNION einsetzen.", ref: "lf08/sql-join" },
        { id: "ap2-datenbanken-13", text: "Ich kann Funktionen aus dem Katalog-Anhang anwenden (LEFT, RIGHT, NOW, YEAR, MONTH, DAY, WEEKDAY, DATEADD, DATEDIFF) und Rechte mit CREATE USER, GRANT und REVOKE vergeben bzw. entziehen.", ref: "lf08/sql-select" },
        { id: "ap2-datenbanken-14", text: "Ich kann Datenbankkonzepte erklären: Transaktion und ACID-Prinzip, Sperren (Locking) und Deadlock sowie die Wirkung eines Index auf Lese- und Schreibzugriffe.", hot: true, ref: "lf08/transaktionen" },
        { id: "ap2-datenbanken-15", text: "Ich kann Open Data und API-Schnittstellen (REST, JSON) als Datenquelle nutzen und dabei Zugriffsbedingungen wie Lizenz und API-Key beachten.", ref: "lf08/datenaustausch" }
      ]
    },
    {
      id: "qlenkung", title: "Qualität lenken: Prüfverfahren, Last- und Performancetests", part: "kau", lf: ["lf05", "lf12"],
      items: [
        { id: "ap2-qlenkung-1", text: "Ich kann Verfahren zur Fehlererkennung erklären und anwenden: Paritätsbit (gerade/ungerade Parität bestimmen), Prüfsummen bzw. CRC und Redundanz.", ref: "lf05/daten-codierung" },
        { id: "ap2-qlenkung-2", text: "Ich kann Last- und Performancetests planen (Lastprofil, Messgrößen wie Antwortzeit und Durchsatz, Grenzlast) und die Ergebnisse bewerten.", ref: "lf12/qualitaet-tests" },
        { id: "ap2-qlenkung-3", text: "Ich kann Debugging und Ablaufverfolgung (Trace, Logausgaben) einsetzen, um die Ursache von Qualitätsmängeln zu finden.", ref: "lf05/fehler-debugging" },
        { id: "ap2-qlenkung-4", text: "Ich kann für ein Szenario passende statische und dynamische Testverfahren einschließlich Testdaten auswählen.", ref: "lf05/testen" }
      ]
    },
    {
      id: "qm-kennzahlen", title: "Qualitätsmanagement: Ziele messen, PDCA, Protokolle", part: "kau", lf: ["lf12", "lf06"],
      items: [
        { id: "ap2-qm-kennzahlen-1", text: "Ich kann den PDCA-Zyklus (Plan, Do, Check, Act) und den kontinuierlichen Verbesserungsprozess (KVP) auf einen IT-Prozess übertragen.", ref: "lf12/qualitaet-tests" },
        { id: "ap2-qm-kennzahlen-2", text: "Ich kann Qualitätskennzahlen festlegen und berechnen, z. B. Verfügbarkeit, Erstlösungsquote (First Call Resolution), mittlere Lösungszeit oder Fehlerquote.", ref: "lf06/sla-kennzahlen" },
        { id: "ap2-qm-kennzahlen-3", text: "Ich kann einen Soll-Ist-Vergleich durchführen, Abweichungen absolut und in Prozent berechnen und bewerten.", ref: "lf12/projektabschluss" },
        { id: "ap2-qm-kennzahlen-4", text: "Ich kann erklären, wozu Testdatengeneratoren dienen (große, realistische und anonymisierte Testdatenbestände).", ref: "lf12/qualitaet-tests" },
        { id: "ap2-qm-kennzahlen-5", text: "Ich kann Test- und Abnahmeprotokolle erstellen und auswerten.", ref: "lf12/qualitaet-tests" }
      ]
    },
    {
      id: "schaden", title: "IT-Sicherheit: Schadenspotenziale einschätzen (auch AEN)", part: "kau", lf: ["lf11", "lf04"],
      items: [
        { id: "ap2-schaden-1", text: "Ich kann zu einem Sicherheitsvorfall die möglichen Schäden je Schutzziel beschreiben (Imageschaden, finanzieller Schaden, Datenverlust, rechtliche Folgen).", ref: "lf04/schutzbedarf" },
        { id: "ap2-schaden-2", text: "Ich kann Ausfallkosten überschlagen (Kosten je Stunde × Ausfalldauer + Wiederherstellungsaufwand) und mit den Kosten einer Schutzmaßnahme vergleichen.", ref: "lf11/isms-risiko" },
        { id: "ap2-schaden-3", text: "Ich kann Maßnahmen zur Verhinderung und Begrenzung von Schäden den Phasen Prävention, Erkennung, Reaktion und Wiederherstellung zuordnen.", ref: "lf11/notfall-betrieb" }
      ]
    },
    {
      id: "praevention", title: "IT-Sicherheit: vorbeugende Maßnahmen gegen Bedrohungen", part: "kau", lf: ["lf04", "lf11"],
      items: [
        { id: "ap2-praevention-1", text: "Ich kann Maßnahmen gegen Datendiebstahl planen: Rechtekonzept, Verschlüsselung, Data Loss Prevention, USB-Kontrolle und Protokollierung.", ref: "lf11/endgeraete-mdm" },
        { id: "ap2-praevention-2", text: "Ich kann Maßnahmen gegen Ransomware planen: offline bzw. unveränderlich gespeicherte Backups, Patchmanagement, Netzsegmentierung, Makros blockieren, Schulungen und einen Notfallplan.", hot: true, ref: "lf04/malware" },
        { id: "ap2-praevention-3", text: "Ich kann Maßnahmen gegen Phishing und Identitätsdiebstahl planen: MFA, Awareness-Schulung, Mailfilter, SPF/DKIM/DMARC und einen klaren Meldeweg.", hot: true, ref: "lf04/angriffe" },
        { id: "ap2-praevention-4", text: "Ich kann für ein Bedrohungsszenario eine priorisierte Maßnahmenliste aufstellen und begründen.", ref: "lf04/massnahmen" }
      ]
    },
    {
      id: "seckriterien", title: "IT-Sicherheitskriterien, Grundschutz und Zertifizierungen", part: "kau", lf: ["lf11", "lf04"],
      items: [
        { id: "ap2-seckriterien-1", text: "Ich kann erklären, wozu IT-Sicherheitskriterien dienen: als Leitlinie für sichere Entwicklung, zur objektiven Bewertung von Systemen und als Hilfe bei der Produktauswahl.", ref: "lf11/isms-risiko" },
        { id: "ap2-seckriterien-2", text: "Ich kann die Modellierung nach BSI IT-Grundschutz als objektive Bewertungsgrundlage für ein System beschreiben.", ref: "lf04/bsi-grundschutz" },
        { id: "ap2-seckriterien-3", text: "Ich kann „Security by Design“ als Kriterium bei der Auswahl eines Sicherheitsprodukts anwenden.", ref: "lf11/isms-risiko" },
        { id: "ap2-seckriterien-4", text: "Ich kann Prüfsiegel und Zertifizierungen als Auswahlhilfe einordnen, z. B. ISO/IEC 27001, BSI C5 für Cloud-Dienste und Common Criteria.", ref: "lf11/isms-risiko" }
      ]
    },
    {
      id: "secberatung", title: "Kunden zur IT-Sicherheit beraten, Bedrohungen und Gegenmaßnahmen (auch KAIS)", part: "aen", lf: ["lf11", "lf12"],
      items: [
        { id: "ap2-secberatung-1", text: "Ich kann Beratungsschwerpunkte je Zielgruppe unterscheiden: Privathaushalte, Unternehmen (intern und extern) und öffentliche Verwaltung.", ref: "lf11/recht-compliance" },
        { id: "ap2-secberatung-2", text: "Ich kann funktionale Sicherheitsanforderungen (was muss geschützt werden?) von Qualitätsanforderungen (wie gut, wie schnell, wie verfügbar?) trennen.", ref: "lf12/anforderungsanalyse" },
        { id: "ap2-secberatung-3", text: "Ich kann einem Kunden passende technische und organisatorische Maßnahmen (TOM) vorschlagen und begründen.", hot: true, ref: "lf11/recht-compliance" },
        { id: "ap2-secberatung-4", text: "Ich kann die Rahmenbedingungen einer Sicherheitslösung technisch, organisatorisch, rechtlich (DSGVO, IT-Sicherheitsgesetz/NIS2) und ethisch bewerten.", ref: "lf11/recht-compliance" },
        { id: "ap2-secberatung-5", text: "Ich kann gemeinsam mit dem Kunden eine Risikoanalyse durchführen: Gefährdung, Eintrittswahrscheinlichkeit, Schadenshöhe, Risikobehandlung.", ref: "lf11/isms-risiko" },
        { id: "ap2-secberatung-6", text: "Ich kann Angriffe erklären und Gegenmaßnahmen nennen: Man-in-the-Middle (TLS mit Zertifikatsprüfung, Dynamic ARP Inspection), SQL-Injection (Prepared Statements, Eingabeprüfung), DDoS (Filter, Scrubbing-Dienst, CDN, Rate Limiting).", hot: true, ref: "lf11/bedrohungen" }
      ]
    },
    {
      id: "secpruefung", title: "IT-Sicherheit prüfen: Pentest, Schwachstellenscan, IAM", part: "aen", lf: ["lf11"],
      items: [
        { id: "ap2-secpruefung-1", text: "Ich kann Ziel und Ablauf eines Penetrationstests erklären: schriftlicher Auftrag, Black-/Grey-/White-Box, Informationssammlung, Angriffsphase, Abschlussbericht.", ref: "lf11/schwachstellen-haertung" },
        { id: "ap2-secpruefung-2", text: "Ich kann einen Device Security Check beschreiben, also die Prüfung von Konfiguration und Patchstand der Endgeräte.", ref: "lf11/schwachstellen-haertung" },
        { id: "ap2-secpruefung-3", text: "Ich kann die Aufgaben eines Identity & Access Management erklären: Lebenszyklus von Identitäten, Rollen, regelmäßige Rezertifizierung, Single Sign-On.", ref: "lf11/authentifizierung" },
        { id: "ap2-secpruefung-4", text: "Ich kann eine Schwachstellenanalyse mit einem Scanner veranlassen und die Funde anhand von CVE-Nummer und CVSS-Wert priorisieren.", ref: "lf11/schwachstellen-haertung" }
      ]
    },
    {
      id: "tom", title: "TOM auf Wirksamkeit und Effizienz prüfen (Zutritt, Zugang, Zugriff)", part: "kau", lf: ["lf04", "lf11"],
      items: [
        { id: "ap2-tom-1", text: "Ich kann Maßnahmen der Zutrittskontrolle bewerten: Alarmanlage, Videoüberwachung (mit Datenschutzanforderungen), Besucherausweise, Schließsystem.", hot: true, ref: "lf04/massnahmen" },
        { id: "ap2-tom-2", text: "Ich kann Maßnahmen der Zugangskontrolle bewerten: passwortgeschützte Bildschirmsperre, biometrische Verfahren mit ihren Fehlerraten, Magnet- oder Chipkarte.", hot: true, ref: "lf04/massnahmen" },
        { id: "ap2-tom-3", text: "Ich kann Maßnahmen der Zugriffskontrolle bewerten: Datenträgerverschlüsselung, sicheres Löschen und Vernichten von Datenträgern (z. B. nach DIN 66399), Benutzer- und Rollenkonzept.", hot: true, ref: "lf04/massnahmen" },
        { id: "ap2-tom-4", text: "Ich kann ein Konzept für Log-Management beschreiben: zentrale Sammlung, Zeitsynchronisation, Aufbewahrungsdauer, Auswertung und Datenschutz.", ref: "lf11/ids-siem" },
        { id: "ap2-tom-5", text: "Ich kann Compliance-Berichte lesen und festgestellte Abweichungen in konkrete Maßnahmen übersetzen.", ref: "lf11/recht-compliance" },
        { id: "ap2-tom-6", text: "Ich kann Kriterien für Wirksamkeit (erreicht die Maßnahme ihr Ziel?) und Effizienz (Verhältnis von Kosten und Nutzen) einer TOM formulieren.", ref: "lf11/isms-risiko" }
      ]
    },
    /* ===== Kapitel 02 – Fachrichtung Systemintegration: Betreiben von IT-Systemen ===== */
    {
      id: "schichten", title: "Schichtenmodelle, Grundprotokolle und Ports", part: "aen", lf: ["lf09", "lf03"],
      items: [
        { id: "ap2-schichten-1", text: "Ich kann das OSI-Modell (7 Schichten) dem TCP/IP-Modell (4 Schichten) gegenüberstellen und Protokolle, Adressen und Geräte den Schichten zuordnen.", hot: true, ref: "lf09/schichtenmodelle" },
        { id: "ap2-schichten-2", text: "Ich kann IPv4 und IPv6 vergleichen: 32 vs. 128 Bit, Schreibweise, Header, kein Broadcast bei IPv6, SLAAC, NAT-Bedarf, Dual Stack.", hot: true, ref: "lf09/ipv6" },
        { id: "ap2-schichten-3", text: "Ich kann Aufbau und Rolle der MAC-Adresse im Ethernet-Frame erklären (Ziel- und Quell-MAC, EtherType, Prüfsumme FCS).", ref: "lf09/mac-arp" },
        { id: "ap2-schichten-4", text: "Ich kann Switching (Weiterleitung per MAC-Tabelle, Lernen, Fluten) und Routing (Weiterleitung per Routingtabelle, TTL wird verringert) voneinander abgrenzen.", ref: "lf03/osi-komponenten" },
        { id: "ap2-schichten-5", text: "Ich kann ARP erklären (Anfrage per Broadcast, Antwort per Unicast, ARP-Cache, Gratuitous ARP), den Missbrauch durch ARP-Spoofing beschreiben und NDP als IPv6-Gegenstück nennen.", hot: true, ref: "lf09/mac-arp" },
        { id: "ap2-schichten-6", text: "Ich kann TCP (verbindungsorientiert, 3-Way-Handshake SYN – SYN/ACK – ACK, Sequenznummern, Flusskontrolle) und UDP (verbindungslos, wenig Overhead) vergleichen und Anwendungen zuordnen, z. B. VoIP/DNS zu UDP, HTTP/SSH zu TCP.", hot: true, ref: "lf09/ports-tcp-udp" },
        { id: "ap2-schichten-7", text: "Ich kann die wichtigen Ports zuordnen: 20/21 FTP, 22 SSH/SFTP, 23 Telnet, 25/465/587 SMTP, 53 DNS, 67/68 DHCP, 80/443 HTTP/HTTPS, 110/995 POP3, 143/993 IMAP, 123 NTP, 161/162 SNMP, 389/636 LDAP/LDAPS, 445 SMB, 514 Syslog, 1812/1813 RADIUS, 3389 RDP.", hot: true, ref: "lf09/ports-tcp-udp" }
      ]
    },
    {
      id: "komponenten", title: "Netzwerkkomponenten vergleichen und im Netzplan prüfen", part: "aen", lf: ["lf03", "lf09"],
      items: [
        { id: "ap2-komponenten-1", text: "Ich kann Switch, Bridge, Router und Firewall nach OSI-Schicht, Funktion und Einsatzort beschreiben.", ref: "lf03/osi-komponenten" },
        { id: "ap2-komponenten-2", text: "Ich kann in einem Netzplan die Kollisions- und Broadcastdomänen bestimmen.", ref: "lf09/switching-stp" },
        { id: "ap2-komponenten-3", text: "Ich kann Layer-2- und Layer-3-Switches sowie managed und unmanaged Switches unterscheiden.", ref: "lf09/switching-stp" },
        { id: "ap2-komponenten-4", text: "Ich kann die Komponenten eines Netzplans auf Plausibilität prüfen (passendes Gerät am richtigen Ort, fehlende Komponenten).", ref: "lf03/osi-komponenten" }
      ]
    },
    {
      id: "netzkonzepte", title: "Netzwerkkonzepte, Topologien, Verkabelung und WLAN", part: "aen", lf: ["lf03", "lf11", "lf09"],
      items: [
        { id: "ap2-netzkonzepte-1", text: "Ich kann Netze nach ihrer Ausdehnung einordnen (PAN, LAN, MAN, WAN, GAN) und typische Übertragungsraten nennen.", ref: "lf03/netzwerk-grundlagen" },
        { id: "ap2-netzkonzepte-2", text: "Ich kann Zugriffskontrolle im Netz erklären: RADIUS (AAA; Supplicant – Authenticator – Authentication Server) und Kerberos (KDC, Ticket Granting Ticket, Service-Ticket, synchrone Uhrzeit).", ref: "lf11/authentifizierung" },
        { id: "ap2-netzkonzepte-3", text: "Ich kann Verschlüsselung auf Netzebene (IPsec, TLS, MACsec) und VPN als Konzept einordnen.", ref: "lf11/vpn" },
        { id: "ap2-netzkonzepte-4", text: "Ich kann strukturierte Verkabelung beschreiben: Primär- (Gelände), Sekundär- (Gebäude) und Tertiärbereich (Etage), Patchfeld, Anschlussdose, fest verlegte Strecke max. 90 m plus 10 m Patchkabel.", ref: "lf03/strukturierte-verkabelung" },
        { id: "ap2-netzkonzepte-5", text: "Ich kann VLANs als logische Segmentierung erklären und ihren Nutzen begründen (Sicherheit, kleinere Broadcastdomänen, Organisation).", hot: true, ref: "lf09/vlan" },
        { id: "ap2-netzkonzepte-6", text: "Ich kann drahtlose Konzepte unterscheiden: PAN mit Bluetooth, WLAN im Infrastrukturmodus mit Controller, Mesh mit Selbstheilung und Backhaul.", ref: "lf03/wlan" },
        { id: "ap2-netzkonzepte-7", text: "Ich kann die Sicherheit von WLANs bewerten: WEP/WPA unsicher, WPA2/WPA3, Personal vs. Enterprise, versteckte SSID ist kein Schutz, Gast-WLAN isolieren.", hot: true, ref: "lf11/wlan-email" },
        { id: "ap2-netzkonzepte-8", text: "Ich kann Einsatz und Risiken von Bluetooth beschreiben (Pairing, Reichweite und Klassen, Angriffe wie unerwünschtes Koppeln).", ref: "lf11/wlan-email" },
        { id: "ap2-netzkonzepte-9", text: "Ich kann Sicherheitskonzepte und Risiken eines Netzes benennen: Segmentierung, DMZ, Zero Trust und die Schwächen flacher Netze.", ref: "lf11/segmentierung-dmz" },
        { id: "ap2-netzkonzepte-10", text: "Ich kann Topologien (Stern, erweiterter Stern, Ring, Bus, vollständige und teilweise Vermaschung) nach Ausfallsicherheit und Aufwand vergleichen.", ref: "lf03/netzwerk-grundlagen" },
        { id: "ap2-netzkonzepte-11", text: "Ich kann logische und physische Netzwerkpläne lesen, ergänzen und zeichnen (Katalog-Symbole, Netzadressen, VLAN-IDs, Schnittstellen).", hot: true, ref: "lf03/netzwerk-grundlagen" }
      ]
    },
    {
      id: "protokolle", title: "Client-Server vs. Peer-to-Peer und Übertragungsprotokolle", part: "aen", lf: ["lf03", "lf09", "lf10", "lf08", "lf11"],
      items: [
        { id: "ap2-protokolle-1", text: "Ich kann Peer-to-Peer- und Client-Server-Konzepte nach Verwaltung, Sicherheit, Skalierbarkeit und Kosten bewerten.", ref: "lf03/netzwerk-grundlagen" },
        { id: "ap2-protokolle-2", text: "Ich kann Dateifreigaben per SMB/CIFS erklären (Port 445, Versionen, SMBv1 abschalten, Zusammenspiel von Freigabe- und Dateisystemrechten).", ref: "lf10/serverdienste" },
        { id: "ap2-protokolle-3", text: "Ich kann den Datenabruf per HTTP (Methoden, Statuscodes 2xx/3xx/4xx/5xx) und per ODBC (standardisierte Datenbankschnittstelle mit Treiber und DSN) beschreiben.", ref: "lf08/datenaustausch" },
        { id: "ap2-protokolle-4", text: "Ich kann HTTP und HTTPS vergleichen: TLS-Handshake, Prüfung des Serverzertifikats, Ports 80/443 und HSTS.", hot: true, ref: "lf11/pki-tls" },
        { id: "ap2-protokolle-5", text: "Ich kann für eine Anwendung begründen, ob TCP oder UDP das passende Transportprotokoll ist.", ref: "lf09/ports-tcp-udp" }
      ]
    },
    {
      id: "standort", title: "Standortvernetzung (VPN) und Netzdienste (DNS, DHCP, Proxy)", part: "aen", lf: ["lf11", "lf09", "lf10"],
      items: [
        { id: "ap2-standort-1", text: "Ich kann VPN-Modelle unterscheiden (Site-to-Site, End-to-Site/Remote Access, End-to-End) und für ein Szenario das passende auswählen.", hot: true, ref: "lf11/vpn" },
        { id: "ap2-standort-2", text: "Ich kann Tunneling und IPsec erklären (IKE-Phasen, ESP vs. AH, Tunnel- vs. Transportmodus, Pre-Shared Key vs. Zertifikat) und IPsec mit SSL/TLS-VPN und WireGuard vergleichen.", hot: true, ref: "lf11/vpn" },
        { id: "ap2-standort-3", text: "Ich kann die DNS-Namensauflösung beschreiben: Resolver, rekursive und iterative Anfragen, Root-, TLD- und autoritativer Server, Caching und TTL.", hot: true, ref: "lf09/dhcp-dns" },
        { id: "ap2-standort-4", text: "Ich kann DHCP-Abläufe und -Optionen erklären: DORA, Lease, Gateway- und DNS-Option, Reservierung und Relay über Routergrenzen.", ref: "lf09/dhcp-dns" },
        { id: "ap2-standort-5", text: "Ich kann Forward-Proxy (Filtern, Zwischenspeichern, Anonymisieren) und Reverse-Proxy (TLS-Terminierung, Lastverteilung, Schutz der Server) unterscheiden.", hot: true, ref: "lf11/segmentierung-dmz" },
        { id: "ap2-standort-6", text: "Ich kann Fehlkonfigurationen von DNS, DHCP und Proxy an ihren Symptomen erkennen und beheben.", ref: "lf10/dhcp-dns" },
        { id: "ap2-standort-7", text: "Ich kann die Wahl einer Standortvernetzung nach Sicherheit, Kosten, Bandbreite und Verwaltungsaufwand begründen.", ref: "lf11/vpn" }
      ]
    },
    {
      id: "verfuegbarkeit", title: "Verfügbarkeit von Diensten und Ausfallrisiken (auch KAIS)", part: "aen", lf: ["lf11", "lf10", "lf09"],
      items: [
        { id: "ap2-verfuegbarkeit-1", text: "Ich kann Verfügbarkeitsanforderungen für Echtzeitkommunikation (VoIP/Video: Latenz, Jitter, Paketverlust, QoS), Mail-, Web- und Groupware-Server sowie Datenbanken beurteilen.", ref: "lf09/dienste-sicherheit" },
        { id: "ap2-verfuegbarkeit-2", text: "Ich kann Verfügbarkeiten berechnen: A = MTBF ÷ (MTBF + MTTR); in Reihe A = A₁ × A₂; parallel A = 1 − (1 − A₁) × (1 − A₂); Ausfallzeit pro Jahr = (1 − A) × 8.760 h (99,9 % ≈ 8,76 h, 99,99 % ≈ 52,6 min).", hot: true, ref: "lf11/hochverfuegbarkeit" },
        { id: "ap2-verfuegbarkeit-3", text: "Ich kann MTBF, MTTR und AFR erklären, näherungsweise umrechnen (AFR ≈ 8.760 h ÷ MTBF) und daraus die erwarteten Ausfälle für eine Anzahl Geräte abschätzen.", hot: true, ref: "lf10/monitoring" },
        { id: "ap2-verfuegbarkeit-4", text: "Ich kann die Badewannenkurve (Frühausfälle, Zufallsausfälle, Verschleißausfälle) erklären und Folgerungen für Einlaufphase und Austauschzyklen ziehen.", ref: "lf10/monitoring" },
        { id: "ap2-verfuegbarkeit-5", text: "Ich kann Risiken erkennen, Maßnahmen planen und mit dem PDCA-Zyklus nachsteuern.", ref: "lf11/isms-risiko" },
        { id: "ap2-verfuegbarkeit-6", text: "Ich kann ein Notfallkonzept bzw. Disaster Recovery beschreiben: Notfallhandbuch, Wiederanlaufplan, Priorisierung der Dienste, RTO/RPO, Ausweichstandort, regelmäßige Tests (BSI-Standard 200-4).", ref: "lf11/notfall-betrieb" },
        { id: "ap2-verfuegbarkeit-7", text: "Ich kann Single Points of Failure in einer Architektur finden und passende Redundanzen vorschlagen.", ref: "lf11/hochverfuegbarkeit" },
        { id: "ap2-verfuegbarkeit-8", text: "Ich kann SLA-Verfügbarkeiten verschiedener Provider vergleichen und berechnen, was eine zweite, unabhängige Leitung bringt.", ref: "lf09/nat-pat" }
      ]
    },
    {
      id: "betriebssicherung", title: "Betrieb sichern: USV, Redundanz, RAID und Backup", part: "kau", lf: ["lf10", "lf03", "lf11"],
      items: [
        { id: "ap2-betriebssicherung-1", text: "Ich kann die USV-Klassen VFD (Offline/Standby), VI (Line-Interactive) und VFI (Online-Doppelwandler) unterscheiden und je nach Schutzbedarf auswählen.", hot: true, ref: "lf03/usv" },
        { id: "ap2-betriebssicherung-2", text: "Ich kann eine USV dimensionieren: Wirkleistung der Geräte addieren, Scheinleistung S = P ÷ cos φ in VA berechnen, Reserve aufschlagen und die Überbrückungszeit im Datenblatt prüfen.", hot: true, ref: "lf03/usv" },
        { id: "ap2-betriebssicherung-3", text: "Ich kann Hardware-Redundanzen nennen: redundante Netzteile, NIC-Teaming, Cluster, Hot-Swap-Komponenten, Ersatzgeräte.", ref: "lf11/hochverfuegbarkeit" },
        { id: "ap2-betriebssicherung-4", text: "Ich kann RAID 0, 1, 5, 6 und 10 nach Prinzip (Striping, Spiegelung, Parität), Nutzkapazität (n·C, C, (n−1)·C, (n−2)·C, n/2·C), Mindestanzahl Platten, Ausfalltoleranz und Schreibleistung vergleichen – ein Hot Spare zählt nicht zur Nutzkapazität.", hot: true, ref: "lf10/raid-speicher" },
        { id: "ap2-betriebssicherung-5", text: "Ich kann begründen, warum RAID kein Backup ersetzt: Es schützt nicht vor versehentlichem Löschen, Ransomware, Brand oder logischen Fehlern.", hot: true, ref: "lf10/raid-speicher" },
        { id: "ap2-betriebssicherung-6", text: "Ich kann Backups, Replikation und Snapshots als softwareseitige Maßnahmen in ein Betriebskonzept einordnen.", ref: "lf10/datensicherung" }
      ]
    },
    {
      id: "monitoring", title: "Monitoring, Analyse und korrigierende Maßnahmen (auch AEN)", part: "kau", lf: ["lf06", "lf10"],
      items: [
        { id: "ap2-monitoring-1", text: "Ich kann festlegen, welche Werte überwacht werden: CPU, RAM, Datenträger, Netzlast, Dienste, Temperatur, USV-Status und Ablaufdaten von Zertifikaten.", ref: "lf10/monitoring" },
        { id: "ap2-monitoring-2", text: "Ich kann SNMP erklären: Manager und Agent, MIB und OID, GET/SET/Trap, Ports 161/162 und SNMPv3 mit Authentifizierung und Verschlüsselung.", hot: true, ref: "lf10/monitoring" },
        { id: "ap2-monitoring-3", text: "Ich kann S.M.A.R.T.-Werte einer Festplatte deuten und für einen vorbeugenden Austausch nutzen.", ref: "lf06/it-sicherstellung" },
        { id: "ap2-monitoring-4", text: "Ich kann eine Systemlastanalyse durchführen und aus Messwerten den Engpass bestimmen (CPU, RAM mit Auslagerung, I/O-Wartezeit, Netz).", hot: true, ref: "lf06/it-sicherstellung" },
        { id: "ap2-monitoring-5", text: "Ich kann Predictive Maintenance erklären und sinnvolle Schwellwerte für Warnung und kritischen Zustand festlegen.", ref: "lf06/it-sicherstellung" },
        { id: "ap2-monitoring-6", text: "Ich kann Standard Operating Procedures (SOP) für wiederkehrende Störungen schreiben.", ref: "lf06/it-sicherstellung" },
        { id: "ap2-monitoring-7", text: "Ich kann SLAs mit Servicestufen (z. B. Gold/Silber/Bronze mit Reaktionszeiten) lesen und daraus Fristen für die Bearbeitung ableiten.", ref: "lf06/sla-kennzahlen" },
        { id: "ap2-monitoring-8", text: "Ich kann Incident Management mit Ticketsystem und Eskalation (funktional, hierarchisch, zeitgesteuert) beschreiben.", ref: "lf06/service-desk" },
        { id: "ap2-monitoring-9", text: "Ich kann aus Monitoringergebnissen korrigierende Maßnahmen ableiten: Ressourcen erweitern, Last verteilen, Dienst neu starten, Hardware tauschen.", ref: "lf10/monitoring" }
      ]
    },
    {
      id: "handbuch", title: "Handbücher und Dokumentation für Benutzer und Admins", part: "kau", lf: ["lf06", "lf12"],
      items: [
        { id: "ap2-handbuch-1", text: "Ich kann Benutzer- und Systemhandbuch nach Zielgruppe, Inhalt und Detailtiefe unterscheiden.", ref: "lf06/it-sicherstellung" },
        { id: "ap2-handbuch-2", text: "Ich kann eine Programm- und Konfigurationsdokumentation anlegen: Zweck, Versionen, Einstellungen, Abhängigkeiten, Änderungshistorie.", ref: "lf06/it-sicherstellung" },
        { id: "ap2-handbuch-3", text: "Ich kann Checklisten für Routineaufgaben erstellen, z. B. Server-Neuinstallation, Anlegen eines Benutzers oder Offboarding.", ref: "lf06/it-sicherstellung" },
        { id: "ap2-handbuch-4", text: "Ich kann Dokumentationen zielgruppengerecht und barrierefrei gestalten und pflegen (Versionierung, Ablageort, Verantwortliche).", ref: "lf06/it-sicherstellung" }
      ]
    },
    /* ===== Speicherlösungen in Betrieb nehmen ===== */
    {
      id: "speicherschutz", title: "Speicherlösungen absichern: TOM, physisch, softwareseitig", part: "kau", lf: ["lf04", "lf11", "lf10"],
      items: [
        { id: "ap2-speicherschutz-1", text: "Ich kann für eine Speicherlösung ein Berechtigungskonzept mit Zutritt, Zugang und Zugriff entwerfen und organisatorisch verankern.", ref: "lf04/massnahmen" },
        { id: "ap2-speicherschutz-2", text: "Ich kann die physische Absicherung planen: Gebäude, Serverraum, abschließbares Rack, Zutrittsprotokoll, Videoüberwachung.", ref: "lf04/massnahmen" },
        { id: "ap2-speicherschutz-3", text: "Ich kann Elementarrisiken (Feuer, Hochwasser, Überspannung, Klima) und Gegenmaßnahmen nennen: Standortwahl, Brandmelde- und Löschanlage, Klimatisierung, räumlich getrennte Kopie.", ref: "lf04/massnahmen" },
        { id: "ap2-speicherschutz-4", text: "Ich kann Benutzer- und Zugriffsverwaltung umsetzen: minimale Rechte, Gruppen, regelmäßige Rechteüberprüfung.", ref: "lf10/ntfs-rechte" },
        { id: "ap2-speicherschutz-5", text: "Ich kann Firewall und Webfilter zur Absicherung einsetzen und die Regeln begründen.", ref: "lf11/firewalls" },
        { id: "ap2-speicherschutz-6", text: "Ich kann Port Security erklären: erlaubte MAC-Adressen, Sticky MAC und die Verletzungsmodi shutdown, restrict und protect.", ref: "lf11/bedrohungen" },
        { id: "ap2-speicherschutz-7", text: "Ich kann Datenträgerverschlüsselung (z. B. BitLocker mit TPM, Wiederherstellungsschlüssel sicher hinterlegen) einrichten und ihre Grenzen nennen.", ref: "lf04/massnahmen" }
      ]
    },
    {
      id: "cloudmodelle", title: "Service- und Liefermodelle: On-Premises und Cloud", part: "kau", lf: ["lf10"],
      items: [
        { id: "ap2-cloudmodelle-1", text: "Ich kann On-Premises und Cloud (Public, Private, Hybrid, Community) nach Kosten, Kontrolle, Skalierbarkeit und Datenschutz vergleichen.", hot: true, ref: "lf10/cloud" },
        { id: "ap2-cloudmodelle-2", text: "Ich kann IaaS, PaaS und SaaS mit Beispielen erklären und zeigen, wie sich die Verantwortung zwischen Anbieter und Kunde aufteilt (Shared Responsibility).", hot: true, ref: "lf10/cloud" },
        { id: "ap2-cloudmodelle-3", text: "Ich kann für einen Kundenbedarf das passende Modell begründet auswählen (z. B. SaaS für E-Mail, IaaS für einen Altserver).", ref: "lf10/cloud" },
        { id: "ap2-cloudmodelle-4", text: "Ich kann Cloud-Kostenmodelle (nutzungsabhängig, reserviert, Gebühren für Datenabfluss) mit den Investitionskosten eigener Hardware vergleichen.", ref: "lf10/cloud" }
      ]
    },
    {
      id: "datenintegration", title: "Daten aus unterschiedlichen Quellen zusammenführen", part: "kau", lf: ["lf08"],
      items: [
        { id: "ap2-datenintegration-1", text: "Ich kann XML, JSON und CSV lesen und erstellen und die Formate nach Struktur, Lesbarkeit, Größe und Validierbarkeit (XML-Schema, JSON-Schema) vergleichen.", ref: "lf08/datenaustausch" },
        { id: "ap2-datenintegration-2", text: "Ich kann typische Probleme beim Zusammenführen erkennen: Trennzeichen, Zeichenkodierung, Datumsformate, Dubletten, unterschiedliche Schlüssel.", ref: "lf08/daten-governance" },
        { id: "ap2-datenintegration-3", text: "Ich kann einen ETL-Prozess (Extract, Transform, Load) beschreiben.", ref: "lf08/daten-governance" },
        { id: "ap2-datenintegration-4", text: "Ich kann einen Data Lake (Rohdaten in beliebigem Format) von einem Data Warehouse (strukturierte, aufbereitete Daten) abgrenzen.", ref: "lf08/daten-governance" },
        { id: "ap2-datenintegration-5", text: "Ich kann Datenschutz und Zugriffsrechte bei zusammengeführten Datenbeständen berücksichtigen.", ref: "lf08/daten-governance" }
      ]
    },
    {
      id: "speichernetze", title: "Speichernetze: DAS, NAS, SAN und Protokolle", part: "kau", lf: ["lf10", "lf02"],
      items: [
        { id: "ap2-speichernetze-1", text: "Ich kann DAS, NAS und SAN nach Zugriffsart (block- vs. dateibasiert), Leistung, Kosten und Einsatzgebiet vergleichen.", hot: true, ref: "lf10/raid-speicher" },
        { id: "ap2-speichernetze-2", text: "Ich kann iSCSI erklären: Initiator, Target, LUN, Transport über Ethernet und ein eigenes Speicher-VLAN.", ref: "lf10/raid-speicher" },
        { id: "ap2-speichernetze-3", text: "Ich kann SMB und NFS als Protokolle für Dateifreigaben vergleichen (Windows- vs. Unix-Umfeld, Rechte, Versionen).", ref: "lf10/serverdienste" },
        { id: "ap2-speichernetze-4", text: "Ich kann Ethernet und Fibre Channel als Transport für Speichernetze vergleichen (Kosten, Latenz, benötigtes Know-how, eigene Infrastruktur).", ref: "lf10/raid-speicher" },
        { id: "ap2-speichernetze-5", text: "Ich kann für ein Szenario (z. B. Virtualisierungscluster oder Abteilungsdateien) eine Speicherlösung auswählen und begründen.", ref: "lf10/raid-speicher" },
        { id: "ap2-speichernetze-6", text: "Ich kann Speicherkapazitäten zwischen TB und TiB umrechnen und eine Kapazitätsplanung mit Datenwachstum erstellen.", ref: "lf02/datenmengen" }
      ]
    },
    /* ===== Programmieren von Softwarelösungen ===== */
    {
      id: "swanforderungen", title: "Softwareanforderungen und Qualitätsmerkmale", part: "kau", lf: ["lf05", "lf12"],
      items: [
        { id: "ap2-swanforderungen-1", text: "Ich kann Qualitätsmerkmale von Software nach ISO/IEC 9126 bzw. 25010 erklären: Funktionalität, Zuverlässigkeit, Benutzbarkeit, Effizienz, Änderbarkeit/Wartbarkeit und Übertragbarkeit.", ref: "lf05/anforderungen" },
        { id: "ap2-swanforderungen-2", text: "Ich kann Anforderungen an ein Skript oder Werkzeug messbar formulieren und jeweils einem Qualitätsmerkmal zuordnen.", ref: "lf05/anforderungen" },
        { id: "ap2-swanforderungen-3", text: "Ich kann begründen, warum man Normen anwendet (einheitliche Qualität, Vergleichbarkeit, Rechtssicherheit).", ref: "lf05/anforderungen" }
      ]
    },
    {
      id: "modelle", title: "Planen mit Modellen: ERM, UML, Mock-up", part: "kau", lf: ["lf05", "lf08", "lf12"],
      items: [
        { id: "ap2-modelle-1", text: "Ich kann ein ER-Modell und das daraus abgeleitete relationale Datenbankmodell erstellen.", ref: "lf08/erm" },
        { id: "ap2-modelle-2", text: "Ich kann ein UML-Klassendiagramm mit Assoziation, Multiplizität, Aggregation, Komposition, Vererbung und Interface lesen und erstellen.", ref: "lf05/uml" },
        { id: "ap2-modelle-3", text: "Ich kann ein Mock-up einer Benutzeroberfläche skizzieren und für die Abstimmung mit dem Kunden nutzen.", ref: "lf05/anforderungen" },
        { id: "ap2-modelle-4", text: "Ich kann UML-Aktivitäts- und Anwendungsfalldiagramme für einen Administrationsprozess erstellen.", ref: "lf05/uml" },
        { id: "ap2-modelle-5", text: "Ich kann ein UML-Sequenzdiagramm lesen und ergänzen: Lebenslinien, synchrone und asynchrone Nachrichten, Rückantwort, Objekterzeugung, Fragmente alt/opt/loop.", ref: "lf05/uml" },
        { id: "ap2-modelle-6", text: "Ich kann ein UML-Zustandsdiagramm in den Grundzügen lesen (Zustand, Übergang mit Ereignis[Bedingung]/Aktion, entry/do/exit) – laut Katalog vor allem FIAE-Stoff, für FISI genügen die Grundlagen.", ref: "lf05/uml" },
        { id: "ap2-modelle-7", text: "Ich kann für eine Aufgabenstellung das passende Modell auswählen und die Wahl begründen.", ref: "lf05/uml" }
      ]
    },
    {
      id: "schnittstellen", title: "Schnittstellen festlegen und nutzen (XML, JSON, SQL, REST)", part: "kau", lf: ["lf08"],
      items: [
        { id: "ap2-schnittstellen-1", text: "Ich kann Daten per XML oder JSON zwischen Systemen austauschen und ein Beispieldokument syntaktisch korrekt aufbauen.", ref: "lf08/datenaustausch" },
        { id: "ap2-schnittstellen-2", text: "Ich kann SQL aus einem Skript heraus als Datenbankschnittstelle nutzen: Verbindung aufbauen, Abfrage senden, Ergebnis verarbeiten, Prepared Statements verwenden.", ref: "lf08/umsetzung" },
        { id: "ap2-schnittstellen-3", text: "Ich kann eine REST-API beschreiben und nutzen: Ressourcen und Endpunkte, GET/POST/PUT/PATCH/DELETE, Statuscodes, JSON und Authentifizierung per API-Key oder Token.", ref: "lf08/datenaustausch" },
        { id: "ap2-schnittstellen-4", text: "Ich kann die Vorteile standardisierter Schnittstellen für Integration und Austauschbarkeit nennen.", ref: "lf08/datenaustausch" }
      ]
    },
    {
      id: "sprachwahl", title: "Programmier- und Skriptsprache passend wählen", part: "kau", lf: ["lf05", "lf10"],
      items: [
        { id: "ap2-sprachwahl-1", text: "Ich kann Sprachen nach Geschwindigkeit und Speicherbedarf vergleichen (kompiliert vs. interpretiert).", ref: "lf05/sprachen" },
        { id: "ap2-sprachwahl-2", text: "Ich kann die Portabilität bewerten: PowerShell vor allem unter Windows, Bash vor allem unter Linux, Python plattformübergreifend.", ref: "lf10/skripte-analyse" },
        { id: "ap2-sprachwahl-3", text: "Ich kann erklären, welche Rolle Frameworks, Bibliotheken und Entwicklungsumgebungen bei der Sprachwahl spielen.", ref: "lf05/sprachen" },
        { id: "ap2-sprachwahl-4", text: "Ich kann vorhandenes Know-how im Team und die Wartbarkeit als Auswahlkriterien begründen.", ref: "lf05/sprachen" }
      ]
    },
    {
      id: "pseudocode", title: "Algorithmen in Pseudocode: lesen, schreiben, korrigieren", part: "kau", lf: ["lf05", "lf10"],
      items: [
        { id: "ap2-pseudocode-1", text: "Ich kann Algorithmen mit Schleifen, Verzweigungen und Arrays in Pseudocode formulieren, z. B. Summe, Maximum, Zählen, Suchen und Filtern.", hot: true, ref: "lf05/algorithmen" },
        { id: "ap2-pseudocode-2", text: "Ich kann vorgegebenen Code lesen, die Ausgabe für bestimmte Eingaben ermitteln (Schreibtischtest) und Lücken ergänzen.", hot: true, ref: "lf05/kontrollstrukturen" },
        { id: "ap2-pseudocode-3", text: "Ich kann Fehler in Code finden, als Syntax- oder Logikfehler einordnen und korrigieren – z. B. Off-by-one, falscher Vergleichsoperator, Division statt Modulo, fehlende Initialisierung.", hot: true, ref: "lf10/skripte-analyse" },
        { id: "ap2-pseudocode-4", text: "Ich kann Funktionen mit Parametern und Rückgabewert definieren und aufrufen.", ref: "lf05/funktionen-module" },
        { id: "ap2-pseudocode-5", text: "Ich kann Modulo und ganzzahlige Division gezielt einsetzen (gerade/ungerade prüfen, Ziffern einer Zahl, Sekunden in Minuten und Sekunden umrechnen).", ref: "lf05/python-basics" },
        { id: "ap2-pseudocode-6", text: "Ich kann Code so gliedern, dass Kontrollstrukturen durch Einrückung und Kommentare klar erkennbar sind.", ref: "lf05/algorithmen" }
      ]
    },
    {
      id: "cps", title: "Cyber-physische Systeme beschreiben und erweitern", part: "kau", lf: ["lf07"],
      items: [
        { id: "ap2-cps-1", text: "Ich kann den Aufbau eines cyber-physischen Systems erklären (Sensor – Verarbeitung/Mikrocontroller – Aktor – Netzwerk/Cloud) und die zugehörige Software einordnen.", ref: "lf07/cps-grundlagen" },
        { id: "ap2-cps-2", text: "Ich kann Sensoren und Aktoren nach Messgröße, Messbereich, Genauigkeit, Schnittstelle und Energiebedarf auswählen.", ref: "lf07/sensoren-aktoren" },
        { id: "ap2-cps-3", text: "Ich kann Bibliotheken für den Zugriff auf Sensoren und Aktoren nutzen und ihren Vorteil erklären.", ref: "lf07/cps-software" },
        { id: "ap2-cps-4", text: "Ich kann einen sinnvollen Abfragerhythmus planen: Polling-Intervall vs. Interrupt, Abtastrate, Energieverbrauch und entstehende Datenmenge.", ref: "lf07/cps-software" },
        { id: "ap2-cps-5", text: "Ich kann Zugriffswege auf Sensoren und Aktoren beschreiben (GPIO, I²C, SPI, UART, MQTT) und Sicherheitsaspekte beim IoT-Einsatz nennen.", ref: "lf07/schnittstellen" }
      ]
    },
    {
      id: "skripte", title: "Administration mit Skripten automatisieren und überwachen", part: "kau", lf: ["lf10", "lf05"],
      items: [
        { id: "ap2-skripte-1", text: "Ich kann PowerShell-Grundlagen anwenden: Cmdlets nach dem Muster Verb-Nomen, Pipeline, Get-ChildItem, Where-Object, ForEach-Object, Import-Csv, Variablen und Vergleichsoperatoren wie -eq, -lt, -gt.", hot: true, ref: "lf10/powershell" },
        { id: "ap2-skripte-2", text: "Ich kann Bash-Skripte lesen und schreiben: Variablen, if/test, for/while, Parameter wie $1, Exit-Codes, Pipes sowie find und grep.", hot: true, ref: "lf10/bash" },
        { id: "ap2-skripte-3", text: "Ich kann typische Admin-Aufgaben automatisieren: Benutzer aus einer CSV-Datei anlegen, Logdateien älter als n Tage löschen, freien Speicher prüfen und alarmieren, Backups anstoßen.", hot: true, ref: "lf10/powershell" },
        { id: "ap2-skripte-4", text: "Ich kann Python als Skriptsprache für plattformübergreifende Automatisierung einordnen.", ref: "lf05/sprachen" },
        { id: "ap2-skripte-5", text: "Ich kann Aufgaben zeitgesteuert ausführen lassen: cron-Syntax (Minute Stunde Tag Monat Wochentag) und Windows-Aufgabenplanung bzw. schtasks.", ref: "lf10/bash" },
        { id: "ap2-skripte-6", text: "Ich kann Automatisierungen überwachen: Protokollierung, Auswertung von Exit-Codes und Benachrichtigung im Fehlerfall.", ref: "lf10/skripte-analyse" },
        { id: "ap2-skripte-7", text: "Ich kann Risiken der Automatisierung nennen (Massenfehler, zu weitreichende Rechte des Dienstkontos) und Gegenmaßnahmen wie Tests in einer Testumgebung.", ref: "lf10/skripte-analyse" }
      ]
    },
    {
      id: "swtest", title: "Skripte und Software testen: Black-/White-Box, TDD, E2E", part: "kau", lf: ["lf05", "lf10"],
      items: [
        { id: "ap2-swtest-1", text: "Ich kann Black-Box- und White-Box-Tests für ein Skript planen.", ref: "lf10/skripte-analyse" },
        { id: "ap2-swtest-2", text: "Ich kann print-Debugging als einfache Methode einsetzen und seine Grenzen benennen.", ref: "lf05/fehler-debugging" },
        { id: "ap2-swtest-3", text: "Ich kann testgetriebene Entwicklung (Red – Green – Refactor) und Unit-Tests erklären.", ref: "lf05/testen" },
        { id: "ap2-swtest-4", text: "Ich kann End-to-End-Tests beschreiben und von Unit- und Integrationstests abgrenzen.", ref: "lf05/testen" }
      ]
    },
    /* ===== Konzipieren und Realisieren von IT-Systemen ===== */
    {
      id: "anforderungen", title: "Anforderungen an Systemkomponenten und Netzwerk festlegen", part: "kau", lf: ["lf12", "lf10", "lf11", "lf02"],
      items: [
        { id: "ap2-anforderungen-1", text: "Ich kann aus einem Kundenszenario die Anforderungen an Server, Clients, Peripherie, Speicher und Appliances ableiten.", ref: "lf12/anforderungsanalyse" },
        { id: "ap2-anforderungen-2", text: "Ich kann Ressourcen dimensionieren: CPU-Kerne, Arbeitsspeicher, Speicherplatz und IOPS für Dienste oder VMs – inklusive Reserve und Wachstum.", ref: "lf10/virtualisierung" },
        { id: "ap2-anforderungen-3", text: "Ich kann Anforderungen an Virtualisierung, Betriebssysteme und Anwendungen festlegen (Kompatibilität, Lizenzierung, Herstellersupport).", ref: "lf10/betriebssysteme" },
        { id: "ap2-anforderungen-4", text: "Ich kann Sicherheitsanforderungen an Systemkomponenten formulieren: Härtung, Verschlüsselung, Zugriffsschutz, Updates.", ref: "lf11/schwachstellen-haertung" },
        { id: "ap2-anforderungen-5", text: "Ich kann Netzwerkanforderungen bestimmen: Bandbreite (Nutzer × Datenrate + Reserve), Latenz, Verfügbarkeit, Übertragungsmedium und Netzwerksicherheit.", ref: "lf02/datenmengen" },
        { id: "ap2-anforderungen-6", text: "Ich kann die Anforderungen in einem Pflichtenheft bzw. Konzept dokumentieren.", ref: "lf12/anforderungsanalyse" }
      ]
    },
    {
      id: "architektur", title: "Architektur und Infrastruktur: Virtualisierung, Cloud, Hochverfügbarkeit", part: "kau", lf: ["lf10", "lf11", "lf08"],
      items: [
        { id: "ap2-architektur-1", text: "Ich kann 2-Tier-, 3-Tier- und Multi-Tier-Architekturen (Präsentation, Logik, Daten) erklären und für eine Anwendung auswählen.", ref: "lf08/drei-ebenen" },
        { id: "ap2-architektur-2", text: "Ich kann Cloud und eigene Server/Storage (On-Premises) für ein Szenario nach Kosten, Kontrolle, Datenschutz und Skalierbarkeit vergleichen.", hot: true, ref: "lf10/cloud" },
        { id: "ap2-architektur-3", text: "Ich kann Virtualisierung und Bare-Metal-Betrieb vergleichen und Hypervisor Typ 1 (bare metal) von Typ 2 (hosted) unterscheiden.", hot: true, ref: "lf10/virtualisierung" },
        { id: "ap2-architektur-4", text: "Ich kann Container und virtuelle Maschinen vergleichen (Isolation, Overhead, Startzeit, typischer Einsatz).", ref: "lf10/virtualisierung" },
        { id: "ap2-architektur-5", text: "Ich kann horizontale Skalierung (mehr Server) und vertikale Skalierung (stärkerer Server) unterscheiden und Load Balancing mit Round Robin, Least Connections und Health Checks erklären.", hot: true, ref: "lf11/hochverfuegbarkeit" },
        { id: "ap2-architektur-6", text: "Ich kann Hochverfügbarkeit mit Clustern (Aktiv/Aktiv, Aktiv/Passiv, Failover, Live-Migration) und Reverse Proxy planen.", hot: true, ref: "lf11/hochverfuegbarkeit" },
        { id: "ap2-architektur-7", text: "Ich kann eine Virtualisierungsplattform mit N+1-Redundanz dimensionieren (Anzahl Hosts aus dem RAM-Bedarf der VMs).", ref: "lf10/virtualisierung" },
        { id: "ap2-architektur-8", text: "Ich kann Deployment-Strategien wie Blue-Green-Deployment erklären.", ref: "lf10/cloud" }
      ]
    },
    {
      id: "schutzbedarf", title: "Schutzziele, Schutzbedarf und TOM für neue Systeme", part: "kau", lf: ["lf04", "lf11"],
      items: [
        { id: "ap2-schutzbedarf-1", text: "Ich kann die Schutzziele Vertraulichkeit, Integrität, Verfügbarkeit und Authentizität auf ein geplantes System anwenden.", ref: "lf04/grundlagen" },
        { id: "ap2-schutzbedarf-2", text: "Ich kann für ein neues System eine Schutzbedarfsanalyse durchführen und die Einstufung (normal, hoch, sehr hoch) begründen.", hot: true, ref: "lf04/schutzbedarf" },
        { id: "ap2-schutzbedarf-3", text: "Ich kann TOM mit Berechtigungskonzept und Organisationsstruktur (Zutritt, Zugang, Zugriff) für ein System festlegen.", ref: "lf04/massnahmen" },
        { id: "ap2-schutzbedarf-4", text: "Ich kann kundenspezifische Vorgaben (Budget, Branche, Compliance, vorhandene Systeme) in das Konzept einarbeiten.", ref: "lf04/schutzbedarf-praxis" },
        { id: "ap2-schutzbedarf-5", text: "Ich kann Zielkonflikte zwischen Sicherheit, Bedienbarkeit und Kosten erkennen und einen begründeten Kompromiss vorschlagen.", ref: "lf11/isms-risiko" }
      ]
    },
    {
      id: "realisierung", title: "IT-Systeme realisieren und Cloud-Anbieter auswählen", part: "kau", lf: ["lf10", "lf02", "lf11"],
      items: [
        { id: "ap2-realisierung-1", text: "Ich kann Server-Hardware auswählen: Rack oder Tower, redundante Netzteile, ECC-RAM, Hot-Swap-Laufwerke, Fernwartung (IPMI/iLO/iDRAC), Garantie und Service.", ref: "lf11/hochverfuegbarkeit" },
        { id: "ap2-realisierung-2", text: "Ich kann ein Netzteil dimensionieren (Leistung aller Komponenten + Reserve, z. B. 20 %) und die Leistungsaufnahme aus dem Netz mit dem Wirkungsgrad berechnen (P_zu = P_ab ÷ η).", hot: true, ref: "lf02/gehaeuse-netzteil" },
        { id: "ap2-realisierung-3", text: "Ich kann Betriebssystem, Anwendungen und Dienste installieren, konfigurieren und die fertige Lösung bewerten.", ref: "lf10/betriebssysteme" },
        { id: "ap2-realisierung-4", text: "Ich kann Kompatibilitätsprobleme zwischen Komponenten vorab erkennen (Kompatibilitätslisten der Hersteller, Treiber, Firmware).", ref: "lf02/betriebssysteme" },
        { id: "ap2-realisierung-5", text: "Ich kann Cloud-Dienste nach Leistungsumfang, SLA, Kosten und Nutzen, Sicherheit und Datenschutz bewerten.", hot: true, ref: "lf10/cloud" },
        { id: "ap2-realisierung-6", text: "Ich kann Housing (eigene Hardware im fremden Rechenzentrum) und Hosting (gemietete Hardware oder Dienste) unterscheiden.", ref: "lf10/cloud" },
        { id: "ap2-realisierung-7", text: "Ich kann Datenschutzanforderungen an Cloud-Anbieter nennen: Serverstandort in der EU, Auftragsverarbeitungsvertrag nach Art. 28 DSGVO, Zertifikate wie ISO 27001 oder BSI C5, Verschlüsselung, Löschkonzept.", hot: true, ref: "lf10/cloud" },
        { id: "ap2-realisierung-8", text: "Ich kann das Risiko der Anbieterbindung (Vendor Lock-in) beschreiben und eine Exit-Strategie skizzieren.", ref: "lf10/cloud" }
      ]
    },
    {
      id: "kompatibilitaet", title: "Kompatibilitätsprobleme erkennen und lösen", part: "kau", lf: ["lf08", "lf11", "lf12"],
      items: [
        { id: "ap2-kompatibilitaet-1", text: "Ich kann Zeichensatzprobleme erklären und beheben (ASCII, ISO-8859-1, UTF-8, kaputte Umlaute, Byte Order Mark).", ref: "lf08/datenaustausch" },
        { id: "ap2-kompatibilitaet-2", text: "Ich kann Probleme durch unterschiedliche Datei- und Datenformate erkennen (Datums- und Zahlenformate, Dezimaltrennzeichen, Zeilenenden).", ref: "lf08/datenaustausch" },
        { id: "ap2-kompatibilitaet-3", text: "Ich kann Protokoll- und Versionskonflikte lösen, z. B. veraltete TLS- oder SMB-Versionen oder unterschiedliche API-Versionen.", ref: "lf11/schwachstellen-haertung" },
        { id: "ap2-kompatibilitaet-4", text: "Ich kann Probleme an Systemschnittstellen, bei Datentypen (Überlauf, Genauigkeit) und bei Softwarebibliotheken (Abhängigkeiten, Versionen) analysieren.", ref: "lf08/datenaustausch" },
        { id: "ap2-kompatibilitaet-5", text: "Ich kann eine Lösungsstrategie begründen: Konvertierung, Middleware, Update, Kompatibilitätsmodus oder Austausch.", ref: "lf12/change-migration" }
      ]
    },
    {
      id: "lifecycle", title: "Lebenszyklus von Hard- und Software, Updates und Versionen", part: "kau", lf: ["lf12", "lf10", "lf11", "lf02", "lf06"],
      items: [
        { id: "ap2-lifecycle-1", text: "Ich kann den Lebenszyklus von Hardware betrachten: Nutzungsdauer, Energieverbrauch, Green IT, Recycling, Refurbished-Geräte.", ref: "lf02/energie-green-it" },
        { id: "ap2-lifecycle-2", text: "Ich kann Software-Lebenszyklen bewerten (Support, Extended Support, End of Life, Sicherheitsupdates) und Handlungsbedarf ableiten.", ref: "lf10/betriebssysteme" },
        { id: "ap2-lifecycle-3", text: "Ich kann das Einspielen von Software-, Sicherheits- und Betriebssystemupdates planen (Priorisierung, Wartungsfenster, Neustarts).", ref: "lf11/schwachstellen-haertung" },
        { id: "ap2-lifecycle-4", text: "Ich kann Staging (Test → Pilot → Produktion) erklären und Rückfallmöglichkeiten (Rollback) vorsehen.", ref: "lf12/change-migration" },
        { id: "ap2-lifecycle-5", text: "Ich kann Versionsstände dokumentieren: Versionsnummern, Änderungsprotokoll, Konfigurationsstand.", ref: "lf06/change" },
        { id: "ap2-lifecycle-6", text: "Ich kann die Kosten einer verlängerten Nutzung mit denen einer Neuanschaffung vergleichen.", ref: "lf12/wirtschaftlichkeit-entscheidung" }
      ]
    },
    {
      id: "change", title: "Tests planen und dokumentieren, Change-Prozess", part: "kau", lf: ["lf12", "lf06"],
      items: [
        { id: "ap2-change-1", text: "Ich kann Performance-, Penetrations-, Integrations- und Systemtests für die Einführung eines Systems planen.", ref: "lf12/qualitaet-tests" },
        { id: "ap2-change-2", text: "Ich kann einen Change-Prozess beschreiben: Request for Change, Bewertung, Genehmigung (CAB), Standard-, Normal- und Notfall-Change, Umsetzung, Review.", ref: "lf06/change" },
        { id: "ap2-change-3", text: "Ich kann einen Rollback-Plan erstellen (Kriterien, Schritte, Zeitpunkt, vorherige Datensicherung).", ref: "lf12/change-migration" },
        { id: "ap2-change-4", text: "Ich kann ein Testkonzept mit Testfällen, Abnahmekriterien und Verantwortlichen erstellen.", ref: "lf12/qualitaet-tests" },
        { id: "ap2-change-5", text: "Ich kann Testprotokolle führen und auswerten (Fehlerklassen, Nachtests, Freigabeentscheidung).", ref: "lf12/qualitaet-tests" },
        { id: "ap2-change-6", text: "Ich kann Testergebnisse im Change-Prozess nachvollziehbar dokumentieren.", ref: "lf12/qualitaet-tests" }
      ]
    },
    {
      id: "kundenprozesse", title: "Kundenbezogene Prozesse bei der Systemeinführung", part: "kau", lf: ["lf12"],
      items: [
        { id: "ap2-kundenprozesse-1", text: "Ich kann Ansprechpartner und Zuständigkeiten beim Kunden ermitteln und dokumentieren.", ref: "lf12/anforderungsanalyse" },
        { id: "ap2-kundenprozesse-2", text: "Ich kann eine Stakeholder-Analyse für eine Systemeinführung durchführen.", ref: "lf12/anforderungsanalyse" },
        { id: "ap2-kundenprozesse-3", text: "Ich kann Wartungsfenster mit dem Kunden abstimmen und Changes zeitlich planen (Geschäftszeiten, Abhängigkeiten, Information der Nutzer).", ref: "lf12/change-migration" },
        { id: "ap2-kundenprozesse-4", text: "Ich kann eine Kundendokumentation mit Übergabe, Betriebshinweisen und Notfallkontakten erstellen.", ref: "lf12/abnahme-uebergabe" }
      ]
    },
    {
      id: "migration", title: "Migration planen und durchführen", part: "kau", lf: ["lf12", "lf10", "lf02", "lf08"],
      items: [
        { id: "ap2-migration-1", text: "Ich kann Migrationsmethoden vergleichen (Big Bang/Stichtag, Parallelbetrieb, stufenweise bzw. mit Pilotgruppe) und für ein Szenario auswählen.", ref: "lf12/change-migration" },
        { id: "ap2-migration-2", text: "Ich kann die Dauer einer Datenmigration aus Datenmenge und effektiver Übertragungsrate berechnen und daraus ein Migrationsfenster planen.", hot: true, ref: "lf02/datenmengen" },
        { id: "ap2-migration-3", text: "Ich kann Datentypen und Formate bei der Migration berücksichtigen (Konvertierung, Zeichensätze).", ref: "lf12/change-migration" },
        { id: "ap2-migration-4", text: "Ich kann die Kompatibilität von Dateisystemen prüfen: maximale Datei- und Pfadlänge (z. B. 4 GiB je Datei bei FAT32), Rechte bei NTFS vs. ext4, Groß- und Kleinschreibung.", ref: "lf10/betriebssysteme" },
        { id: "ap2-migration-5", text: "Ich kann Daten klassifizieren (öffentlich, intern, vertraulich, streng vertraulich) und daraus Schutz- und Migrationsanforderungen ableiten.", ref: "lf08/daten-governance" },
        { id: "ap2-migration-6", text: "Ich kann eine Datenübernahme testen und abnehmen (Stichproben, Prüfsummen, Vergleich der Anzahl).", ref: "lf12/change-migration" }
      ]
    },
    /* ===== Installieren und Konfigurieren von Netzwerken ===== */
    {
      id: "netzprotokolle", title: "Netzwerkprotokolle je Anwendungsbereich auswählen", part: "aen", lf: ["lf09", "lf11"],
      items: [
        { id: "ap2-netzprotokolle-1", text: "Ich kann IPv4, IPv6 und Dual Stack für ein Netz begründet einsetzen.", hot: true, ref: "lf09/ipv6" },
        { id: "ap2-netzprotokolle-2", text: "Ich kann SSL/TLS-Versionen bewerten (SSL sowie TLS 1.0/1.1 gelten als veraltet, TLS 1.2/1.3 verwenden) und Grundlagen von Cipher Suites nennen.", ref: "lf11/pki-tls" },
        { id: "ap2-netzprotokolle-3", text: "Ich kann Protokolle der Schichten 5–7 auswählen und abgrenzen: DNS, IMAP, SMTP, HTTPS, SFTP (über SSH) vs. FTPS, SSH statt Telnet.", hot: true, ref: "lf09/dienste-sicherheit" },
        { id: "ap2-netzprotokolle-4", text: "Ich kann für unsichere Protokolle sichere Alternativen vorschlagen, z. B. SNMPv3 statt v2c, LDAPS statt LDAP.", ref: "lf11/schwachstellen-haertung" },
        { id: "ap2-netzprotokolle-5", text: "Ich kann zu einem Dienst Anwendungsprotokoll, Transportprotokoll und Port angeben und daraus Firewallregeln ableiten.", ref: "lf09/ports-tcp-udp" }
      ]
    },
    {
      id: "medien", title: "Topologien und Übertragungswege bewerten (Kupfer, LWL, Funk, WAN)", part: "aen", lf: ["lf03", "lf09", "lf11"],
      items: [
        { id: "ap2-medien-1", text: "Ich kann drahtlose Übertragungswege bewerten: WLAN-Bänder 2,4/5/6 GHz, Richtfunk, Mobilfunk als Backup.", ref: "lf03/wlan" },
        { id: "ap2-medien-2", text: "Ich kann Kupferverkabelung bewerten (Cat 5e/6/6A/7, max. 100 m Übertragungsstrecke, Schirmung, PoE).", ref: "lf03/kupferkabel" },
        { id: "ap2-medien-3", text: "Ich kann Lichtwellenleiter bewerten (Multimode vs. Singlemode, Reichweite, Wellenlänge, SFP/SFP+-Module) und Fehlerursachen bei Glasfaser-Uplinks nennen (falsches Modul, vertauschte Fasern, unpassende Geschwindigkeit, Verschmutzung).", hot: true, ref: "lf03/lwl" },
        { id: "ap2-medien-4", text: "Ich kann WAN-Anbindungen vergleichen: DSL, Kabel, Glasfaser/FTTH, Standleitung, MPLS, SD-WAN, Mobilfunk.", ref: "lf09/nat-pat" },
        { id: "ap2-medien-5", text: "Ich kann eine Standortvernetzung nach Bandbreite, Verfügbarkeit, Kosten und Sicherheit planen.", ref: "lf09/nat-pat" },
        { id: "ap2-medien-6", text: "Ich kann eine hierarchische Topologie für ein Gebäude oder Firmengelände (Core, Distribution, Access) begründen.", ref: "lf11/hochverfuegbarkeit" }
      ]
    },
    {
      id: "netzkomponenten", title: "Netzwerkkomponenten auswählen, installieren und betreiben", part: "aen", lf: ["lf09", "lf03", "lf11", "lf06"],
      items: [
        { id: "ap2-netzkomponenten-1", text: "Ich kann Kabel und Anschlusskomponenten passend zur Umgebung auswählen.", ref: "lf03/strukturierte-verkabelung" },
        { id: "ap2-netzkomponenten-2", text: "Ich kann die Aufgaben von WAN-Modem (z. B. DSL-Modem) und Router bei der Internetanbindung unterscheiden.", ref: "lf03/osi-komponenten" },
        { id: "ap2-netzkomponenten-3", text: "Ich kann Switches nach Datenblatt auswählen: Portanzahl, Uplinks, Layer 2/3, PoE-Budget, VLAN-Fähigkeit, Stacking.", ref: "lf09/switching-stp" },
        { id: "ap2-netzkomponenten-4", text: "Ich kann WLAN-Controller und Access Points planen (controllerbasiert vs. autonom, Roaming).", ref: "lf09/dienste-sicherheit" },
        { id: "ap2-netzkomponenten-5", text: "Ich kann Firewall und Load Balancer im Netzplan an der richtigen Stelle platzieren.", ref: "lf11/segmentierung-dmz" },
        { id: "ap2-netzkomponenten-6", text: "Ich kann Managed Services (Betrieb durch einen Dienstleister) gegenüber dem Eigenbetrieb bewerten.", ref: "lf06/dienstleistungen" }
      ]
    },
    {
      id: "netzdienste", title: "Netzdienste und Switching/Routing administrieren", part: "aen", lf: ["lf09", "lf11", "lf03"],
      items: [
        { id: "ap2-netzdienste-1", text: "Ich kann DNS-Einträge anlegen und deuten (A, AAAA, CNAME, MX, PTR, NS, SOA, TXT) und Split-Horizon-DNS sowie DNSSEC erklären.", hot: true, ref: "lf09/dhcp-dns" },
        { id: "ap2-netzdienste-2", text: "Ich kann einen DHCP-Server konfigurieren (Bereich, Ausschlüsse, Reservierungen, Optionen für Gateway und DNS, Lease-Dauer) und DHCP-Relay (IP-Helper) über VLAN-Grenzen einrichten.", hot: true, ref: "lf09/dhcp-dns" },
        { id: "ap2-netzdienste-3", text: "Ich kann SLAAC, zustandsloses (stateless) und zustandsbehaftetes (stateful) DHCPv6 unterscheiden.", hot: true, ref: "lf09/ipv6" },
        { id: "ap2-netzdienste-4", text: "Ich kann einen Proxy administrieren: Filterregeln, Authentifizierung, Ausnahmen, PAC-Datei.", ref: "lf11/segmentierung-dmz" },
        { id: "ap2-netzdienste-5", text: "Ich kann Spanning Tree erklären (Schleifen verhindern, Root Bridge = niedrigste Bridge-ID aus Priorität und MAC, Portrollen Root/Designated/Blocked, RSTP) und blockierte Ports bestimmen.", hot: true, ref: "lf09/switching-stp" },
        { id: "ap2-netzdienste-6", text: "Ich kann statisches und dynamisches Routing vergleichen, eine Routingtabelle erstellen und lesen (Zielnetz, Maske, Next Hop, Interface, Default Route) und den Longest Prefix Match anwenden.", hot: true, ref: "lf09/routing" },
        { id: "ap2-netzdienste-7", text: "Ich kann Distanzvektor- und Link-State-Verfahren (z. B. RIP vs. OSPF) sowie die administrative Distanz grob unterscheiden.", ref: "lf09/routing" },
        { id: "ap2-netzdienste-8", text: "Ich kann VLANs nach IEEE 802.1Q konfigurieren: Access- und Trunk-Port, Tag-Aufbau (TPID 0x8100, PCP, DEI, 12-Bit-VLAN-ID), natives VLAN.", hot: true, ref: "lf09/vlan" },
        { id: "ap2-netzdienste-9", text: "Ich kann Inter-VLAN-Routing per Router-on-a-Stick (Subinterfaces mit dot1Q-Encapsulation) oder per Layer-3-Switch (SVI) planen und Konfigurationsfehler finden.", hot: true, ref: "lf09/vlan" },
        { id: "ap2-netzdienste-10", text: "Ich kann Gateway-Redundanz mit FHRP (HSRP/VRRP) erklären: virtuelle IP und MAC, Rollen Active/Standby bzw. Master/Backup, Priorität und Preemption.", hot: true, ref: "lf09/routing" },
        { id: "ap2-netzdienste-11", text: "Ich kann QoS für Echtzeitdienste begründen: Klassifizierung, DSCP-Markierung (z. B. EF für VoIP), Priorisierung, Bandbreitenreservierung.", ref: "lf09/dienste-sicherheit" },
        { id: "ap2-netzdienste-12", text: "Ich kann Mesh-Netze (WLAN-Mesh, vermaschte Kernnetze) konfigurieren und bewerten.", ref: "lf03/netzwerk-grundlagen" },
        { id: "ap2-netzdienste-13", text: "Ich kann NAT, PAT und Portweiterleitung erklären, eine PAT-Übersetzungstabelle ausfüllen und begründen, warum NAT bei TLS nur IP- und Port-Angaben ändert, nicht die verschlüsselten Nutzdaten.", hot: true, ref: "lf09/nat-pat" }
      ]
    },
    {
      id: "netzanalyse", title: "Netzwerke analysieren und optimieren", part: "aen", lf: ["lf09", "lf11", "lf02"],
      items: [
        { id: "ap2-netzanalyse-1", text: "Ich kann Funktions- und Belastungstests durchführen (Durchsatz z. B. mit iperf, Latenz, Paketverlust) und die Ergebnisse bewerten.", ref: "lf09/cisco-fehlersuche" },
        { id: "ap2-netzanalyse-2", text: "Ich kann Übertragungszeiten mit Protokoll-Overhead berechnen (nutzbare Rate = Rate × (1 − Overhead)) und dabei binäre und dezimale Einheiten sauber trennen.", hot: true, ref: "lf02/datenmengen" },
        { id: "ap2-netzanalyse-3", text: "Ich kann Link Aggregation bzw. einen Port-Channel mit LACP planen und die Voraussetzungen nennen: gleiche Geschwindigkeit und Duplex, gleiche VLAN-/Trunk-Konfiguration, gleiche Gegenstelle bzw. Stack.", hot: true, ref: "lf09/switching-stp" },
        { id: "ap2-netzanalyse-4", text: "Ich kann Load Balancing im Netz (über Uplinks oder Server) und Mesh zur Optimierung einsetzen.", ref: "lf11/hochverfuegbarkeit" },
        { id: "ap2-netzanalyse-5", text: "Ich kann Engpässe in einem Netzplan erkennen (überbuchter Uplink, Single Point of Failure) und Verbesserungen vorschlagen.", ref: "lf11/hochverfuegbarkeit" }
      ]
    },
    {
      id: "netzbedrohung", title: "Angriffe im Netz erkennen und Gegenmaßnahmen vorschlagen", part: "aen", lf: ["lf11"],
      items: [
        { id: "ap2-netzbedrohung-1", text: "Ich kann Anforderungen des IT-Grundschutzes auf Netze anwenden, z. B. Netzarchitektur, Segmentierung und ein getrenntes Management-Netz.", ref: "lf11/segmentierung-dmz" },
        { id: "ap2-netzbedrohung-2", text: "Ich kann betriebliche Sicherheitsaspekte im Netzbetrieb berücksichtigen (Richtlinien, Zuständigkeiten, Dokumentation).", ref: "lf11/notfall-betrieb" },
        { id: "ap2-netzbedrohung-3", text: "Ich kann Angriffe im Netz erklären: MAC-Flooding, ARP-Spoofing/-Poisoning, VLAN-Hopping, Rogue-DHCP-Server, DNS-Spoofing, Man-in-the-Middle und DDoS.", hot: true, ref: "lf11/bedrohungen" },
        { id: "ap2-netzbedrohung-4", text: "Ich kann passende Gegenmaßnahmen zuordnen: Port Security, Dynamic ARP Inspection, DHCP-Snooping, 802.1X, natives VLAN ändern und ungenutzte Ports abschalten, DNSSEC.", hot: true, ref: "lf11/bedrohungen" },
        { id: "ap2-netzbedrohung-5", text: "Ich kann Sicherheitsmaßnahmen nach Wirksamkeit und Aufwand priorisieren und eine Empfehlung begründen.", ref: "lf11/isms-risiko" }
      ]
    },
    {
      id: "netzsicherheit", title: "Sicherheitslösungen im Netz umsetzen: Firewall, DMZ, IDS/IPS, PKI", part: "aen", lf: ["lf11", "lf04"],
      items: [
        { id: "ap2-netzsicherheit-1", text: "Ich kann Firewall-Arten unterscheiden: Paketfilter, Stateful Packet Inspection, Application-Level-Gateway/Proxy und Next Generation Firewall (Deep Packet Inspection, Anwendungserkennung, Benutzerbezug).", hot: true, ref: "lf11/firewalls" },
        { id: "ap2-netzsicherheit-2", text: "Ich kann ein Firewall-Regelwerk erstellen und prüfen (Quelle, Ziel, Protokoll, Port, Aktion; Abarbeitung nach „first match“; implizites Verbot am Ende) und eine ein- oder zweistufige DMZ planen.", hot: true, ref: "lf11/firewalls" },
        { id: "ap2-netzsicherheit-3", text: "Ich kann IDS (erkennt und meldet) und IPS (erkennt und blockiert) unterscheiden – host- vs. netzbasiert, signatur- vs. anomaliebasiert – und im Netz platzieren.", ref: "lf11/ids-siem" },
        { id: "ap2-netzsicherheit-4", text: "Ich kann Monitoring sicherheitsrelevant einsetzen (Alarme bei Anomalien, zentrale Protokollierung).", ref: "lf11/ids-siem" },
        { id: "ap2-netzsicherheit-5", text: "Ich kann Verschlüsselungstechniken und VPN im Netz umsetzen.", ref: "lf11/vpn" },
        { id: "ap2-netzsicherheit-6", text: "Ich kann eine Zertifikatsinfrastruktur erklären: Root- und Intermediate-CA, Zertifikatskette, CSR, Sperrung per CRL oder OCSP, Laufzeiten.", hot: true, ref: "lf11/pki-tls" },
        { id: "ap2-netzsicherheit-7", text: "Ich kann Virtualisierung und Clustering als Maßnahme für Sicherheit und Verfügbarkeit einsetzen.", ref: "lf11/hochverfuegbarkeit" },
        { id: "ap2-netzsicherheit-8", text: "Ich kann Viren- und Spamfilter einrichten (Scanner am Gateway, SPF, DKIM, DMARC, Greylisting).", ref: "lf11/wlan-email" },
        { id: "ap2-netzsicherheit-9", text: "Ich kann den Zugriff auf Netzwerkgeräte absichern: SSH statt Telnet, AAA mit RADIUS oder TACACS+, Management-VLAN, starke Passwörter, Rollen.", ref: "lf11/authentifizierung" },
        { id: "ap2-netzsicherheit-10", text: "Ich kann System- und Firmwareupdates für Netzwerkgeräte planen.", ref: "lf11/schwachstellen-haertung" },
        { id: "ap2-netzsicherheit-11", text: "Ich kann den Zutritt zu Server- und Technikräumen mit einem Zutrittskontrollsystem regeln und protokollieren.", ref: "lf04/massnahmen" }
      ]
    },
    {
      id: "netzdoku", title: "Netz überwachen und dokumentieren: Logs, ping/traceroute, Wireshark", part: "aen", lf: ["lf09", "lf11", "lf10"],
      items: [
        { id: "ap2-netzdoku-1", text: "Ich kann Protokolldateien und Monitoringdaten auswerten (Syslog-Schweregrade, Zeitstempel, wiederkehrende Muster).", ref: "lf10/monitoring" },
        { id: "ap2-netzdoku-2", text: "Ich kann Änderungen an umgesetzten Lösungen nachvollziehbar dokumentieren (Änderungsverfolgung, Sicherung der Konfiguration, Versionsstand).", ref: "lf09/cisco-fehlersuche" },
        { id: "ap2-netzdoku-3", text: "Ich kann Ausgaben von ping und traceroute deuten: Antwortzeit (RTT), TTL, Paketverlust, Sternchen bzw. Zeitüberschreitung, Routingschleife.", hot: true, ref: "lf09/cisco-fehlersuche" },
        { id: "ap2-netzdoku-4", text: "Ich kann einen Wireshark-Mitschnitt analysieren (TCP-Handshake, ARP- und DNS-Anfragen, Ports, Anzeigefilter) und Auffälligkeiten erkennen, z. B. dieselbe IP-Adresse mit wechselnder MAC-Adresse.", hot: true, ref: "lf11/ids-siem" },
        { id: "ap2-netzdoku-5", text: "Ich kann Analysewerkzeuge einordnen (Packet Tracer als Simulator, Wireshark zur Paketanalyse, Nmap als Port- und Dienstscanner) und rechtliche Grenzen beim Scannen beachten.", ref: "lf11/schwachstellen-haertung" },
        { id: "ap2-netzdoku-6", text: "Ich kann Netzwerkmonitoring per SNMP einrichten und Schwellwerte für Auslastung und Fehlerzähler festlegen.", ref: "lf10/monitoring" }
      ]
    },
    /* ===== Administrieren von IT-Systemen ===== */
    {
      id: "richtlinien", title: "Richtlinien für die IT-Nutzung, BYOD und DLP", part: "kau", lf: ["lf11", "lf10", "lf04", "wiso"],
      items: [
        { id: "ap2-richtlinien-1", text: "Ich kann die Inhalte einer IT-Nutzungsrichtlinie beschreiben: erlaubte Nutzung, Passwörter, private Nutzung, Datenablage, Meldepflichten.", ref: "lf11/recht-compliance" },
        { id: "ap2-richtlinien-2", text: "Ich kann erklären, wann eine Betriebsvereinbarung nötig ist – z. B. bei technischen Systemen, die Verhalten oder Leistung überwachen können (Mitbestimmung des Betriebsrats).", ref: "wiso/mitbestimmung" },
        { id: "ap2-richtlinien-3", text: "Ich kann Vorgaben des IT-Grundschutzes und der IT-Sicherheitsrichtlinie in konkrete Administrationsvorgaben übersetzen.", ref: "lf04/bsi-grundschutz" },
        { id: "ap2-richtlinien-4", text: "Ich kann Berechtigungsstufen und Rollen festlegen (Benutzer, Power-User, Administrator, getrennte Admin-Konten).", ref: "lf10/active-directory" },
        { id: "ap2-richtlinien-5", text: "Ich kann BYOD bewerten (Datenschutz, Trennung von privat und dienstlich, MDM mit Container) und Alternativen wie COPE oder COBO nennen.", ref: "lf11/endgeraete-mdm" },
        { id: "ap2-richtlinien-6", text: "Ich kann Data Loss Prevention erklären: Datenklassifizierung, Regeln für E-Mail, USB und Cloud, Warnen oder Blockieren.", ref: "lf11/endgeraete-mdm" }
      ]
    },
    {
      id: "lizenzen", title: "Lizenzmodelle und Lizenzmanagement", part: "kau", lf: ["lf10", "lf04"],
      items: [
        { id: "ap2-lizenzen-1", text: "Ich kann Abo-, Kauf- und Pay-per-Use-Modelle über eine Laufzeit rechnerisch und qualitativ vergleichen.", ref: "lf10/betriebssysteme" },
        { id: "ap2-lizenzen-2", text: "Ich kann Rahmen- und Volumenverträge erklären (Staffelpreise, Laufzeit, Software Assurance).", ref: "lf10/betriebssysteme" },
        { id: "ap2-lizenzen-3", text: "Ich kann Lizenzmodelle unterscheiden: kommerziell, Open Source, Freeware, GPL mit Copyleft, freizügige (permissive) Lizenzen.", ref: "lf04/urheberrecht-lizenzen" },
        { id: "ap2-lizenzen-4", text: "Ich kann Zugriffslizenzen (CALs) als User- oder Device-CAL berechnen und das günstigere Modell wählen – z. B. Device-CAL bei Schichtbetrieb, User-CAL bei Mitarbeitenden mit mehreren Geräten.", hot: true, ref: "lf10/betriebssysteme" },
        { id: "ap2-lizenzen-5", text: "Ich kann Lizenzüberwachung, Lizenzverwaltung und Lizenzbeschaffung als Prozess beschreiben (Inventarisierung, Soll-Ist-Abgleich, Unter- und Überlizenzierung).", ref: "lf10/betriebssysteme" },
        { id: "ap2-lizenzen-6", text: "Ich kann die Aufgabe eines Lizenzservers erklären (Floating-Lizenzen, Lizenzpool).", ref: "lf10/betriebssysteme" },
        { id: "ap2-lizenzen-7", text: "Ich kann ein Lizenz-Audit vorbereiten und die Folgen einer Unterlizenzierung nennen.", ref: "lf10/betriebssysteme" }
      ]
    },
    {
      id: "rechte", title: "Berechtigungskonzepte: AD, AGDLP, NTFS, Linux-Rechte", part: "kau", lf: ["lf10"],
      items: [
        { id: "ap2-rechte-1", text: "Ich kann Benutzerkonten, Zugriffsrechte und Zugriffssteuerungslisten (ACLs) für eine Abteilungsstruktur planen.", ref: "lf10/ntfs-rechte" },
        { id: "ap2-rechte-2", text: "Ich kann das Domänenkonzept erklären: Domäne, Struktur (Tree), Gesamtstruktur (Forest), Domänencontroller und Organisationseinheit.", hot: true, ref: "lf10/active-directory" },
        { id: "ap2-rechte-3", text: "Ich kann Sicherheitsgruppen (global, domänenlokal, universell) einsetzen und nach dem AGDLP-Prinzip (Accounts → Global → Domain Local → Permissions) rollenbasiert berechtigen.", hot: true, ref: "lf10/active-directory" },
        { id: "ap2-rechte-4", text: "Ich kann NTFS- und Freigaberechte kombinieren (über das Netz gilt das restriktivere Recht) und dabei Vererbung und explizites Verweigern berücksichtigen.", hot: true, ref: "lf10/ntfs-rechte" },
        { id: "ap2-rechte-5", text: "Ich kann Linux-Rechte lesen und setzen: rwx für Besitzer, Gruppe und andere, oktale Schreibweise (rwxr-x--- = 750), chmod, chown und umask.", hot: true, ref: "lf10/linux-rechte" },
        { id: "ap2-rechte-6", text: "Ich kann LDAP als Verzeichnisprotokoll erklären und einen Distinguished Name (CN, OU, DC) lesen.", ref: "lf10/active-directory" },
        { id: "ap2-rechte-7", text: "Ich kann Gruppenrichtlinien und ihre Verarbeitungsreihenfolge (lokal, Standort, Domäne, OU) erklären.", ref: "lf10/active-directory" },
        { id: "ap2-rechte-8", text: "Ich kann das Prinzip der minimalen Rechte (Least Privilege, Need to know) begründen.", ref: "lf10/ntfs-rechte" },
        { id: "ap2-rechte-9", text: "Ich kann ein Berechtigungskonzept als Matrix aus Rollen, Ressourcen und Rechten dokumentieren.", ref: "lf10/ntfs-rechte" }
      ]
    },
    {
      id: "auth", title: "Authentifizierung: SSO, Zertifikate, MFA, RADIUS", part: "kau", lf: ["lf11", "lf04"],
      items: [
        { id: "ap2-auth-1", text: "Ich kann Single Sign-On erklären (Kerberos im Firmennetz, SAML bzw. OpenID Connect im Web) und Vor- und Nachteile nennen.", ref: "lf11/authentifizierung" },
        { id: "ap2-auth-2", text: "Ich kann Zertifikate und eine Zertifikatsinfrastruktur für Anmeldung und Verschlüsselung einsetzen.", ref: "lf11/pki-tls" },
        { id: "ap2-auth-3", text: "Ich kann die Anmeldung mit Smartcard und Signatur beschreiben (der private Schlüssel bleibt auf der Karte).", ref: "lf11/authentifizierung" },
        { id: "ap2-auth-4", text: "Ich kann Mehr-Faktor-Authentifizierung mit Hardwaretoken, Chipkarte, Einmalpasswort (TOTP/HOTP) und Security Keys (FIDO2/Passkeys) vergleichen.", hot: true, ref: "lf11/authentifizierung" },
        { id: "ap2-auth-5", text: "Ich kann PIN-Codes für Zutrittsberechtigungen in ein Zutrittskonzept einordnen.", ref: "lf04/massnahmen" },
        { id: "ap2-auth-6", text: "Ich kann RADIUS für die WLAN-Anmeldung erklären: 802.1X, EAP-TLS bzw. PEAP, Supplicant – Authenticator – Authentifizierungsserver.", hot: true, ref: "lf11/authentifizierung" },
        { id: "ap2-auth-7", text: "Ich kann Passwortrichtlinien technisch durchsetzen (Mindestlänge, Kontosperre, Kennworthistorie, Passwortfilter).", ref: "lf04/passwort-krypto" },
        { id: "ap2-auth-8", text: "Ich kann für ein Szenario eine Authentifizierungslösung nach Sicherheit, Kosten und Benutzerfreundlichkeit auswählen.", ref: "lf11/authentifizierung" }
      ]
    },
    {
      id: "updates", title: "Aktualisierungen und Patchmanagement", part: "kau", lf: ["lf11", "lf10", "lf12"],
      items: [
        { id: "ap2-updates-1", text: "Ich kann zentrale Updateverwaltung erklären und einrichten (WSUS, MECM/SCCM bzw. Intune, unter Linux APT mit Repositories: apt update / apt upgrade).", ref: "lf11/schwachstellen-haertung" },
        { id: "ap2-updates-2", text: "Ich kann einen Patchmanagement-Prozess beschreiben: Inventar, Bewertung, Test, Staging, Rollout, Kontrolle, Dokumentation.", ref: "lf11/schwachstellen-haertung" },
        { id: "ap2-updates-3", text: "Ich kann BIOS-/UEFI- und Firmware-Updates planen (Risiken, gesicherte Stromversorgung, Rückfallmöglichkeit).", ref: "lf10/betriebssysteme" },
        { id: "ap2-updates-4", text: "Ich kann ein Hardware-Upgrade gegen einen kompletten Austausch abwägen.", ref: "lf12/wirtschaftlichkeit-entscheidung" },
        { id: "ap2-updates-5", text: "Ich kann Updates automatisieren (Zeitpläne, Wartungsfenster, automatische Neustarts, Berichte).", ref: "lf11/schwachstellen-haertung" },
        { id: "ap2-updates-6", text: "Ich kann begründen, warum Updates zeitnah eingespielt werden müssen (bekannte Schwachstellen, Zero-Day-Lücken).", ref: "lf11/schwachstellen-haertung" }
      ]
    },
    {
      id: "backup", title: "Datensicherung und Archivierung", part: "kau", lf: ["lf10"],
      items: [
        { id: "ap2-backup-1", text: "Ich kann Sicherungsmedien (Band/LTO, Festplatte, NAS, SAN, Cloud, USB, optische Medien) nach Kosten, Kapazität, Geschwindigkeit, Haltbarkeit und Auslagerbarkeit vergleichen.", ref: "lf10/datensicherung" },
        { id: "ap2-backup-2", text: "Ich kann veränderliche und unveränderliche Speicherung unterscheiden (WORM, Immutable Backup als Schutz gegen Ransomware).", hot: true, ref: "lf10/datensicherung" },
        { id: "ap2-backup-3", text: "Ich kann block- und dateibasierte Sicherung vergleichen (Image vs. einzelne Dateien, Granularität, Geschwindigkeit).", ref: "lf10/datensicherung" },
        { id: "ap2-backup-4", text: "Ich kann Sicherungsstrategien erklären: Voll-, inkrementelle und differenzielle Sicherung (welche Sätze brauche ich für den Restore?), Generationenprinzip Großvater-Vater-Sohn, Staffelung von schnell zu langsam (Disk-to-Disk-to-Tape) und FIFO-Rotation.", hot: true, ref: "lf10/datensicherung" },
        { id: "ap2-backup-5", text: "Ich kann die 3-2-1-Regel anwenden (3 Kopien, 2 verschiedene Medien, 1 Kopie außer Haus) und ihre Erweiterung um eine Offline- bzw. unveränderliche Kopie und geprüfte Wiederherstellung erklären.", hot: true, ref: "lf10/datensicherung" },
        { id: "ap2-backup-6", text: "Ich kann Anforderungen an die Lagerung von Sicherungsmedien nennen: eigener Brandabschnitt, Datensicherungstresor, passendes Klima, Verschlüsselung.", ref: "lf10/datensicherung" },
        { id: "ap2-backup-7", text: "Ich kann Aufbewahrungsfristen berücksichtigen (z. B. Handels- und Geschäftsbriefe 6 Jahre, Bücher und Jahresabschlüsse 10 Jahre, Buchungsbelege seit 2025 8 Jahre – aktuellen Rechtsstand prüfen) und Archivierung von Datensicherung abgrenzen.", ref: "lf10/datensicherung" },
        { id: "ap2-backup-8", text: "Ich kann Aufräum- und Löschprozesse für Sicherungen planen (Aufbewahrungsrichtlinie, Löschpflichten nach DSGVO).", ref: "lf10/datensicherung" },
        { id: "ap2-backup-9", text: "Ich kann Versionierung und Snapshots einsetzen und begründen, warum ein Snapshot kein Backup ersetzt.", ref: "lf10/datensicherung" },
        { id: "ap2-backup-10", text: "Ich kann ein Sicherungskonzept für ein Szenario vollständig begründen: was, wann, wie oft, wohin, wie lange, wer ist zuständig und wie wird getestet.", ref: "lf10/datensicherung" }
      ]
    },
    {
      id: "restore", title: "Backup- und Wiederherstellungsdauer, RTO/RPO", part: "kau", lf: ["lf10", "lf11"],
      items: [
        { id: "ap2-restore-1", text: "Ich kann die Dauer einer Sicherung aus Datenmenge, Durchsatz bzw. Bandbreite und Komprimierungsfaktor berechnen und mit dem verfügbaren Backupfenster vergleichen.", hot: true, ref: "lf10/datensicherung" },
        { id: "ap2-restore-2", text: "Ich kann den Speicherbedarf für Sicherungen über einen Aufbewahrungszeitraum berechnen (Voll- und Teilsicherungen, Komprimierung, Generationen).", ref: "lf10/datensicherung" },
        { id: "ap2-restore-3", text: "Ich kann sicherstellen, dass eine Wiederherstellung wirklich funktioniert: regelmäßige Restore-Tests, Bare-Metal-Restore, block- und dateibasierte Wiederherstellung, Snapshots.", ref: "lf10/datensicherung" },
        { id: "ap2-restore-4", text: "Ich kann die Wiederherstellungsdauer berechnen und mit dem RTO vergleichen sowie das RPO aus dem Sicherungsintervall ableiten.", hot: true, ref: "lf10/datensicherung" },
        { id: "ap2-restore-5", text: "Ich kann Maßnahmen vorschlagen, wenn RTO oder RPO nicht erreicht werden: schnelleres Medium, Replikation, Snapshots, Priorisierung der Systeme.", ref: "lf10/datensicherung" },
        { id: "ap2-restore-6", text: "Ich kann eine Wiederherstellungsreihenfolge für abhängige Dienste festlegen (z. B. zuerst AD/DNS, dann Datenbank, dann Anwendung).", ref: "lf11/notfall-betrieb" }
      ]
    },
    {
      id: "mon-setup", title: "Monitoring einrichten, Hochverfügbarkeit und Skalierung", part: "kau", lf: ["lf10", "lf11", "lf03"],
      items: [
        { id: "ap2-mon-setup-1", text: "Ich kann Monitoring-Werkzeuge auswählen und einsetzen (z. B. Zabbix, PRTG, Nagios/Icinga, Checkmk; mit oder ohne Agent).", ref: "lf10/monitoring" },
        { id: "ap2-mon-setup-2", text: "Ich kann eine Überwachung mit Schwellwerten, Fehlererkennung und Benachrichtigung (E-Mail, SMS, Eskalation) einrichten.", ref: "lf10/monitoring" },
        { id: "ap2-mon-setup-3", text: "Ich kann Fernwartung sicher einsetzen (VPN, MFA, Protokollierung, Zustimmung des Nutzers).", ref: "lf03/fernzugriff" },
        { id: "ap2-mon-setup-4", text: "Ich kann Load Balancing, Hochverfügbarkeit und Skalierung als Reaktion auf Monitoringergebnisse planen.", hot: true, ref: "lf11/hochverfuegbarkeit" },
        { id: "ap2-mon-setup-5", text: "Ich kann Cloud-Dienste zur Lastabfederung einsetzen (Content Delivery Network, automatische Skalierung).", ref: "lf10/cloud" },
        { id: "ap2-mon-setup-6", text: "Ich kann Monitoringdaten datenschutzkonform speichern und auswerten.", ref: "lf10/monitoring" }
      ]
    },
    {
      id: "mon-massnahmen", title: "Monitoring auswerten: Troubleshooting, Härtung, MDM", part: "kau", lf: ["lf06", "lf11"],
      items: [
        { id: "ap2-mon-massnahmen-1", text: "Ich kann aus Monitoringereignissen Eskalationsschritte und Maßnahmen des Incident Managements ableiten.", ref: "lf06/incident" },
        { id: "ap2-mon-massnahmen-2", text: "Ich kann systematisch Fehler suchen (Hypothese, Test, Eingrenzung, Lösung, Dokumentation) und Fehler nach ihrer Auswirkung bewerten.", ref: "lf06/problem" },
        { id: "ap2-mon-massnahmen-3", text: "Ich kann Verfahren zur Erkennung von Eindringlingen beschreiben (IDS/IPS, Honeypot).", ref: "lf11/ids-siem" },
        { id: "ap2-mon-massnahmen-4", text: "Ich kann Systeme härten, z. B. unter Windows mit Intune/MECM und Gruppenrichtlinien, sowie mit MDM, Virenschutz und Endpoint Detection and Response (EDR).", hot: true, ref: "lf11/schwachstellen-haertung" },
        { id: "ap2-mon-massnahmen-5", text: "Ich kann Mobile Device Management einsetzen: Richtlinien, Fernlöschung, App-Verwaltung, Containerisierung.", hot: true, ref: "lf11/endgeraete-mdm" },
        { id: "ap2-mon-massnahmen-6", text: "Ich kann Maßnahmen nach Dringlichkeit und Aufwand priorisieren und ihren Erfolg messen.", ref: "lf06/incident" }
      ]
    },
    {
      id: "userservice", title: "Benutzeranfragen bearbeiten: Service Desk und ITIL", part: "kau", lf: ["lf06"],
      items: [
        { id: "ap2-userservice-1", text: "Ich kann ein Ticketsystem für Benutzeranfragen nutzen (Kategorie, Priorität, SLA-Zeiten, Dokumentation).", ref: "lf06/incident" },
        { id: "ap2-userservice-2", text: "Ich kann Anfragen dem 1st-, 2nd- oder 3rd-Level-Support zuordnen und Tickets eskalieren.", ref: "lf06/service-desk" },
        { id: "ap2-userservice-3", text: "Ich kann ITIL-Prozesse unterscheiden: Incident, Service Request, Problem, Change sowie Known Error mit Workaround.", ref: "lf06/itsm-grundlagen" },
        { id: "ap2-userservice-4", text: "Ich kann einen Service Desk als zentrale Anlaufstelle (Single Point of Contact) organisieren.", ref: "lf06/service-desk" },
        { id: "ap2-userservice-5", text: "Ich kann aus wiederkehrenden Anfragen Schulungsmaßnahmen ableiten.", ref: "lf06/optimierung" },
        { id: "ap2-userservice-6", text: "Ich kann Nachschlagewerke aufbauen und nutzen (FAQ, Wiki, Wissensdatenbank).", ref: "lf06/service-desk" },
        { id: "ap2-userservice-7", text: "Ich kann Abläufe standardisieren (Vorlagen, Checklisten, SOPs, Self-Service-Portal).", ref: "lf06/optimierung" }
      ]
    },
    /* ===== Kapitel 03 – Wirtschafts- und Sozialkunde ===== */
    {
      id: "ausbildungsvertrag", title: "Rechte und Pflichten aus dem Ausbildungsvertrag (BBiG)", part: "wiso", lf: ["wiso"],
      items: [
        { id: "ap2-ausbildungsvertrag-1", text: "Ich kann die Mindestinhalte des Ausbildungsvertrags nach § 11 BBiG nennen: Vertragspartner, Art, Gliederung und Ziel der Ausbildung, Beginn und Dauer, Maßnahmen außerhalb der Ausbildungsstätte, tägliche Ausbildungszeit, Probezeit, Vergütung, Urlaub, Kündigungsvoraussetzungen, Hinweis auf Tarif- und Betriebsvereinbarungen, Form des Ausbildungsnachweises.", hot: true, ref: "wiso/duales-system" },
        { id: "ap2-ausbildungsvertrag-2", text: "Ich kann die Probezeit einordnen (mindestens 1, höchstens 4 Monate, § 20 BBiG) und ihr Ende für ein Beispieldatum bestimmen.", hot: true, ref: "wiso/duales-system" },
        { id: "ap2-ausbildungsvertrag-3", text: "Ich kann die Kündigungsregeln in der Ausbildung anwenden (§ 22 BBiG): in der Probezeit jederzeit ohne Frist; danach durch Auszubildende mit 4 Wochen Frist bei Berufsaufgabe oder -wechsel; von beiden Seiten fristlos aus wichtigem Grund innerhalb von 2 Wochen nach Kenntnis; immer schriftlich, nach der Probezeit mit Angabe der Gründe.", hot: true, ref: "wiso/duales-system" },
        { id: "ap2-ausbildungsvertrag-4", text: "Ich kann die Pflichten von Auszubildenden nennen: Lernpflicht, Berufsschulbesuch, Ausbildungsnachweis führen, Weisungen befolgen, Betriebsordnung einhalten, Schweigepflicht, sorgfältiger Umgang mit Arbeitsmitteln.", ref: "wiso/duales-system" },
        { id: "ap2-ausbildungsvertrag-5", text: "Ich kann die Pflichten der Ausbildenden nennen: Ausbildungspflicht, kostenlose Ausbildungsmittel, Freistellung für Berufsschule und Prüfungen, nur ausbildungsbezogene Aufgaben, Fürsorge, Zeugnis und angemessene Vergütung (mindestens die Mindestvergütung).", ref: "wiso/duales-system" },
        { id: "ap2-ausbildungsvertrag-6", text: "Ich kann Folgen bei Pflichtverletzungen nennen (Abmahnung, Kündigung, Schadensersatz, Eingreifen der IHK bzw. der Ausbildungsberatung).", ref: "wiso/duales-system" },
        { id: "ap2-ausbildungsvertrag-7", text: "Ich kann Regelungen zu Vergütung und Urlaub anwenden (Steigerung je Ausbildungsjahr, Urlaub nach JArbSchG bzw. BUrlG oder Tarifvertrag).", ref: "wiso/duales-system" },
        { id: "ap2-ausbildungsvertrag-8", text: "Ich kann das Ende der Ausbildung erklären: mit Ablauf der Ausbildungszeit bzw. bei früherem Bestehen mit Bekanntgabe des Ergebnisses; bei Nichtbestehen Verlängerung auf Verlangen bis zur nächsten Wiederholungsprüfung (max. 1 Jahr); Weiterbeschäftigung ohne Absprache führt zu einem unbefristeten Arbeitsverhältnis.", ref: "wiso/duales-system" },
        { id: "ap2-ausbildungsvertrag-9", text: "Ich kann den Geltungsbereich des BBiG erklären und warum der Vertrag in das Verzeichnis der Berufsausbildungsverhältnisse bei der IHK eingetragen wird.", ref: "wiso/duales-system" }
      ]
    },
    {
      id: "dualessystem", title: "Duales System und Aufgaben der Beteiligten", part: "wiso", lf: ["wiso"],
      items: [
        { id: "ap2-dualessystem-1", text: "Ich kann Vorteile des dualen Systems nennen: Verbindung von Theorie und Praxis, zwei Lernorte, regionale Verankerung, Übernahmechancen, bundesweit anerkannte Abschlüsse.", ref: "wiso/duales-system" },
        { id: "ap2-dualessystem-2", text: "Ich kann das Zusammenwirken von Betrieb und Berufsschule beschreiben (Absprachen, Arbeitskreise, Lernortkooperation, zeitliche Abstimmung der Inhalte).", ref: "wiso/duales-system" },
        { id: "ap2-dualessystem-3", text: "Ich kann die Aufgaben von Ausbildungsbetrieb, Berufsschule und IHK unterscheiden – die Kammer prüft die Eignung, führt das Verzeichnis, überwacht und berät, nimmt Prüfungen ab und richtet Prüfungsausschüsse ein.", ref: "wiso/duales-system" },
        { id: "ap2-dualessystem-4", text: "Ich kann die Inhalte einer Ausbildungsordnung nennen (§ 5 BBiG): Berufsbezeichnung, Dauer, Berufsbild, Ausbildungsrahmenplan, Prüfungsanforderungen.", ref: "wiso/duales-system" },
        { id: "ap2-dualessystem-5", text: "Ich kann Berufsschulpflicht, Anrechnung von Berufsschulzeiten und Freistellung für Prüfungen anwenden – inklusive des freien Arbeitstags vor der schriftlichen Abschlussprüfung (§ 15 BBiG).", ref: "wiso/duales-system" },
        { id: "ap2-dualessystem-6", text: "Ich kann erklären, dass Ausbildungsmittel und Prüfungsgebühren vom Ausbildungsbetrieb getragen werden.", ref: "wiso/duales-system" }
      ]
    },
    {
      id: "ausbildungsplan", title: "Ausbildungsrahmenplan, Rahmenlehrplan und betrieblicher Ausbildungsplan", part: "wiso", lf: ["wiso"],
      items: [
        { id: "ap2-ausbildungsplan-1", text: "Ich kann Ausbildungsrahmenplan (betrieblich, sachliche und zeitliche Gliederung, Teil der Ausbildungsordnung) und Rahmenlehrplan (schulisch, KMK, Lernfelder) unterscheiden.", ref: "wiso/duales-system" },
        { id: "ap2-ausbildungsplan-2", text: "Ich kann den betrieblichen Ausbildungsplan als individuelle Umsetzung des Ausbildungsrahmenplans erklären und beide vergleichen.", ref: "wiso/duales-system" },
        { id: "ap2-ausbildungsplan-3", text: "Ich kann Lernziele des Ausbildungsrahmenplans betrieblichen Stationen zuordnen und Besonderheiten des Betriebs berücksichtigen.", ref: "wiso/duales-system" },
        { id: "ap2-ausbildungsplan-4", text: "Ich kann Einsatz- und Versetzungspläne im Betrieb erklären.", ref: "wiso/duales-system" }
      ]
    },
    {
      id: "arbeitsrecht", title: "Individualarbeitsrecht und Schutzgesetze", part: "wiso", lf: ["wiso"],
      items: [
        { id: "ap2-arbeitsrecht-1", text: "Ich kann Individualarbeitsrecht (Arbeitsvertrag zwischen Arbeitgeber und Arbeitnehmer) und Kollektivarbeitsrecht (Tarifvertrag, Betriebsverfassung) unterscheiden.", ref: "wiso/arbeitsvertrag-zeugnis" },
        { id: "ap2-arbeitsrecht-2", text: "Ich kann Pflichten von Arbeitnehmern (Arbeits-, Treue- und Verschwiegenheitspflicht, Wettbewerbsverbot) und Arbeitgebern (Vergütungs-, Fürsorge-, Beschäftigungs- und Zeugnispflicht) nennen.", ref: "wiso/arbeitsvertrag-zeugnis" },
        { id: "ap2-arbeitsrecht-3", text: "Ich kann Kündigungen beurteilen: Schriftform (§ 623 BGB), gesetzliche Grundfrist 4 Wochen zum 15. oder zum Monatsende (§ 622 BGB), längere Fristen für den Arbeitgeber je nach Betriebszugehörigkeit, 2 Wochen in der Probezeit, außerordentliche Kündigung aus wichtigem Grund (§ 626 BGB), Abmahnung.", hot: true, ref: "wiso/kuendigung" },
        { id: "ap2-arbeitsrecht-4", text: "Ich kann das Kündigungsschutzgesetz anwenden (Betrieb mit mehr als 10 Arbeitnehmern, Arbeitsverhältnis länger als 6 Monate; personen-, verhaltens- oder betriebsbedingte Gründe; Klage innerhalb von 3 Wochen) und besonderen Kündigungsschutz nennen (Schwangere, Elternzeit, Schwerbehinderte, Betriebsrat/JAV, Auszubildende nach der Probezeit).", hot: true, ref: "wiso/kuendigung" },
        { id: "ap2-arbeitsrecht-5", text: "Ich kann das Jugendarbeitsschutzgesetz anwenden: max. 8 h täglich und 40 h wöchentlich, 5-Tage-Woche, Pausen 30 min (mehr als 4,5 h) bzw. 60 min (mehr als 6 h), 12 h Freizeit, Nachtruhe 20–6 Uhr, ein Berufsschultag mit mehr als 5 Unterrichtsstunden pro Woche ist beschäftigungsfrei, Urlaub 30/27/25 Werktage (zu Jahresbeginn noch nicht 16/17/18), ärztliche Erst- und Nachuntersuchung.", hot: true, ref: "wiso/arbeitszeit-schutz" },
        { id: "ap2-arbeitsrecht-6", text: "Ich kann das Arbeitszeitgesetz anwenden (8 h werktäglich, bis zu 10 h mit Ausgleich, Pausen 30 min bei mehr als 6 h und 45 min bei mehr als 9 h, 11 h Ruhezeit) und den Mindesturlaub nach BUrlG (24 Werktage) nennen.", ref: "wiso/arbeitszeit-schutz" },
        { id: "ap2-arbeitsrecht-7", text: "Ich kann Arbeitsschutzgesetz und Arbeitsstättenverordnung als Rahmen für sichere Arbeitsplätze einordnen.", ref: "wiso/arbeitsschutz" },
        { id: "ap2-arbeitsrecht-8", text: "Ich kann Mutterschutz (Schutzfrist 6 Wochen vor und 8 Wochen nach der Geburt, Beschäftigungsverbote, Kündigungsverbot) sowie Elternzeit und Elterngeld nach BEEG (bis zu 3 Jahre je Kind, Anmeldefrist) erklären.", hot: true, ref: "wiso/arbeitszeit-schutz" },
        { id: "ap2-arbeitsrecht-9", text: "Ich kann die Merkmale nennen, nach denen das AGG Benachteiligung verbietet (ethnische Herkunft, Geschlecht, Religion/Weltanschauung, Behinderung, Alter, sexuelle Identität), und Folgen einer Benachteiligung beschreiben.", ref: "wiso/arbeitsvertrag-zeugnis" },
        { id: "ap2-arbeitsrecht-10", text: "Ich kann Regelungen für schwerbehinderte Menschen nennen (SGB IX: ab einem GdB von 50, Zusatzurlaub 5 Arbeitstage, Kündigung nur mit Zustimmung des Integrations- bzw. Inklusionsamts, Schwerbehindertenvertretung).", ref: "wiso/arbeitszeit-schutz" }
      ]
    },
    {
      id: "tarif-sv", title: "Tarifrecht, Entgeltabrechnung und Sozialversicherung", part: "wiso", lf: ["wiso"],
      items: [
        { id: "ap2-tarif-sv-1", text: "Ich kann die Tarifautonomie (Art. 9 Abs. 3 GG) und die Tarifparteien (Gewerkschaften und Arbeitgeberverbände bzw. einzelne Arbeitgeber) erklären.", hot: true, ref: "wiso/tarifvertrag" },
        { id: "ap2-tarif-sv-2", text: "Ich kann Mantel- bzw. Rahmentarifvertrag (allgemeine Arbeitsbedingungen) vom Lohn-, Gehalts- oder Entgelttarifvertrag unterscheiden und Friedenspflicht, Günstigkeitsprinzip und Allgemeinverbindlichkeit erklären.", hot: true, ref: "wiso/tarifvertrag" },
        { id: "ap2-tarif-sv-3", text: "Ich kann den Ablauf einer Tarifauseinandersetzung in die richtige Reihenfolge bringen: Verhandlung, Scheitern, Schlichtung, Urabstimmung, Streik bzw. Aussperrung, neue Verhandlung, Abstimmung über das Ergebnis.", ref: "wiso/tarifvertrag" },
        { id: "ap2-tarif-sv-4", text: "Ich kann Betriebsvereinbarungen erklären (schriftlich zwischen Arbeitgeber und Betriebsrat, z. B. zu Arbeitszeit, Beurteilungen oder IT-Nutzung) und vom Tarifvertrag abgrenzen (Tarifvorrang).", hot: true, ref: "wiso/mitbestimmung" },
        { id: "ap2-tarif-sv-5", text: "Ich kann die fünf Zweige der Sozialversicherung mit Trägern und Leistungen nennen (Kranken-, Pflege-, Renten-, Arbeitslosen- und Unfallversicherung) und erklären, wer die Beiträge zahlt: die Unfallversicherung allein der Arbeitgeber über die Berufsgenossenschaft, die übrigen grundsätzlich je zur Hälfte mit Besonderheiten.", hot: true, ref: "wiso/sozialversicherung" },
        { id: "ap2-tarif-sv-6", text: "Ich kann Beitragsbemessungsgrenze und Versicherungspflichtgrenze erklären (die aktuellen Werte ändern sich jährlich).", ref: "wiso/sozialversicherung" },
        { id: "ap2-tarif-sv-7", text: "Ich kann eine Entgeltabrechnung lesen und berechnen (Brutto − Lohnsteuer − ggf. Solidaritätszuschlag und Kirchensteuer − Arbeitnehmeranteile zur Sozialversicherung = Netto; Netto − sonstige Abzüge wie VL-Sparrate = Auszahlungsbetrag) und Steuerklassen zuordnen.", hot: true, ref: "wiso/sozialversicherung" },
        { id: "ap2-tarif-sv-8", text: "Ich kann Arbeitsgerichtsbarkeit (Güteverhandlung, Instanzen) und Sozialgerichtsbarkeit als Rechtswege einordnen.", ref: "wiso/arbeitsvertrag-zeugnis" }
      ]
    },
    {
      id: "weiterbildung", title: "Lebenslanges Lernen und berufliche Entwicklung", part: "wiso", lf: ["wiso"],
      items: [
        { id: "ap2-weiterbildung-1", text: "Ich kann Fortbildung (Anpassung oder Aufstieg), Umschulung und Weiterbildung unterscheiden.", ref: "wiso/lernen-zusammenarbeit" },
        { id: "ap2-weiterbildung-2", text: "Ich kann Aufstiegswege in der IT nennen: IT-Fortbildungsordnung (Geprüfte/r Berufsspezialist/in, Bachelor Professional, Master Professional in IT), Herstellerzertifikate, Studium.", ref: "wiso/lernen-zusammenarbeit" },
        { id: "ap2-weiterbildung-3", text: "Ich kann staatliche Förderungen nennen: Aufstiegs-BAföG, Weiterbildungsstipendium, Bildungsurlaub nach Landesrecht.", ref: "wiso/lernen-zusammenarbeit" },
        { id: "ap2-weiterbildung-4", text: "Ich kann den Europass erklären (Lebenslauf, Mobilitätsnachweis, Zeugniserläuterungen; Nutzen bei Bewerbungen im Ausland) und Mobilitätsprogramme wie Erasmus+ nennen.", ref: "wiso/lernen-zusammenarbeit" },
        { id: "ap2-weiterbildung-5", text: "Ich kann Lern- und Arbeitstechniken für selbstgesteuertes Lernen sowie berufliche Informationsquellen nennen.", ref: "wiso/lernen-zusammenarbeit" }
      ]
    },
    {
      id: "gesamtwirtschaft", title: "Der Betrieb in der Gesamtwirtschaft", part: "wiso", lf: ["wiso", "lf01"],
      items: [
        { id: "ap2-gesamtwirtschaft-1", text: "Ich kann Unternehmen den Wirtschaftssektoren zuordnen: primär (Urproduktion), sekundär (Industrie, Handwerk, Verarbeitung), tertiär (Dienstleistung), ggf. quartär (Information).", hot: true, ref: "wiso/betrieb-ziele" },
        { id: "ap2-gesamtwirtschaft-2", text: "Ich kann erwerbswirtschaftliche (Gewinnerzielung), gemeinwirtschaftliche und gemeinnützige Betriebe unterscheiden.", ref: "wiso/betrieb-ziele" },
        { id: "ap2-gesamtwirtschaft-3", text: "Ich kann Branche, Leistungsangebot und Märkte meines Ausbildungsbetriebs beschreiben.", ref: "lf01/unternehmen-system" },
        { id: "ap2-gesamtwirtschaft-4", text: "Ich kann die Begriffe Betrieb, Unternehmen und Konzern voneinander abgrenzen.", ref: "wiso/betrieb-ziele" }
      ]
    },
    {
      id: "rechtsformen", title: "Rechtsformen von Unternehmen", part: "wiso", lf: ["wiso", "lf01"],
      items: [
        { id: "ap2-rechtsformen-1", text: "Ich kann Einzelunternehmen und GbR nach Gründung, Haftung und Geschäftsführung beschreiben.", hot: true, ref: "wiso/unternehmensformen" },
        { id: "ap2-rechtsformen-2", text: "Ich kann OHG (alle Gesellschafter haften unbeschränkt, unmittelbar und gesamtschuldnerisch) und KG (Komplementär haftet unbeschränkt, Kommanditist nur bis zur Einlage und ohne Geschäftsführung) unterscheiden.", hot: true, ref: "wiso/unternehmensformen" },
        { id: "ap2-rechtsformen-3", text: "Ich kann die GmbH & Co. KG erklären (eine GmbH ist Komplementärin, dadurch ist die Haftung faktisch beschränkt).", ref: "wiso/unternehmensformen" },
        { id: "ap2-rechtsformen-4", text: "Ich kann die GmbH (Stammkapital mindestens 25.000 €, Geschäftsführer, Gesellschafterversammlung, Haftung nur mit dem Gesellschaftsvermögen) und die UG (haftungsbeschränkt) (ab 1 €, Pflicht zur Rücklagenbildung) beschreiben.", hot: true, ref: "wiso/unternehmensformen" },
        { id: "ap2-rechtsformen-5", text: "Ich kann die AG beschreiben: Grundkapital mindestens 50.000 €, Organe Vorstand, Aufsichtsrat und Hauptversammlung, Aktionäre haften nur mit ihrer Einlage.", hot: true, ref: "wiso/unternehmensformen" },
        { id: "ap2-rechtsformen-6", text: "Ich kann gemeinnützige Organisationsformen einordnen (eingetragener Verein, gGmbH, Stiftung).", ref: "wiso/unternehmensformen" },
        { id: "ap2-rechtsformen-7", text: "Ich kann Handelsregistereinträge zuordnen (Abteilung A: Einzelkaufleute und Personengesellschaften, Abteilung B: Kapitalgesellschaften) und Rechtsformzusätze deuten.", ref: "wiso/unternehmensformen" }
      ]
    },
    {
      id: "organisation", title: "Unternehmensstruktur und Organisationsformen", part: "wiso", lf: ["lf01", "wiso", "lf06"],
      items: [
        { id: "ap2-organisation-1", text: "Ich kann Einlinien-, Mehrlinien-, Stablinien-, Sparten- und Matrixorganisation an Organigrammen erkennen und Vor- und Nachteile nennen.", hot: true, ref: "lf01/aufbauorganisation" },
        { id: "ap2-organisation-2", text: "Ich kann Aufbauorganisation (Stellen, Instanzen, Abteilungen) und Ablauforganisation (Arbeitsabläufe, Prozesse) unterscheiden.", ref: "lf01/aufbauorganisation" },
        { id: "ap2-organisation-3", text: "Ich kann Arbeitsabläufe als EPK darstellen (Ereignis – Funktion – Ereignis, Konnektoren).", ref: "lf06/epk" },
        { id: "ap2-organisation-4", text: "Ich kann Grundsätze der Aufgabenteilung erklären (Stellenbildung, Spezialisierung, Leitungsspanne).", ref: "lf01/aufbauorganisation" },
        { id: "ap2-organisation-5", text: "Ich kann Vollmachten (Prokura, Handlungsvollmacht) in der Organisation zuordnen.", ref: "lf01/vollmachten" }
      ]
    },
    {
      id: "verflechtung", title: "Wirtschaftliche Verflechtungen: Konzern, Kartell, Fusion", part: "wiso", lf: ["wiso"],
      items: [
        { id: "ap2-verflechtung-1", text: "Ich kann Konzern (rechtlich selbstständige Unternehmen unter einheitlicher Leitung), Kartell (Absprachen rechtlich selbstständiger Unternehmen, grundsätzlich verboten, Aufsicht durch das Bundeskartellamt) und Fusion (Verschmelzung zu einem Unternehmen) unterscheiden.", hot: true, ref: "wiso/wirtschaftsordnung" },
        { id: "ap2-verflechtung-2", text: "Ich kann horizontale, vertikale und diagonale (konglomerate) Zusammenschlüsse an Beispielen erkennen.", ref: "wiso/wirtschaftsordnung" },
        { id: "ap2-verflechtung-3", text: "Ich kann Ziele und Risiken von Zusammenschlüssen nennen (Marktmacht und Synergien vs. eingeschränkter Wettbewerb).", ref: "wiso/wirtschaftsordnung" },
        { id: "ap2-verflechtung-4", text: "Ich kann die Aufgabe der Fusionskontrolle erklären.", ref: "wiso/wirtschaftsordnung" }
      ]
    },
    {
      id: "kennzahlen", title: "Betriebliche Ziele und Kennzahlen", part: "wiso", lf: ["wiso", "lf01"],
      items: [
        { id: "ap2-kennzahlen-1", text: "Ich kann die Produktivität berechnen (Ausbringungsmenge ÷ Einsatzmenge, z. B. gelöste Tickets je Arbeitsstunde).", hot: true, ref: "wiso/kennzahlen" },
        { id: "ap2-kennzahlen-2", text: "Ich kann die Wirtschaftlichkeit berechnen (Ertrag ÷ Aufwand; ein Wert über 1 bedeutet wirtschaftlich).", hot: true, ref: "wiso/kennzahlen" },
        { id: "ap2-kennzahlen-3", text: "Ich kann Rentabilitäten berechnen: Eigenkapitalrentabilität = Gewinn ÷ Eigenkapital × 100, Umsatzrentabilität = Gewinn ÷ Umsatz × 100, Gesamtkapitalrentabilität = (Gewinn + Fremdkapitalzinsen) ÷ Gesamtkapital × 100.", hot: true, ref: "wiso/kennzahlen" },
        { id: "ap2-kennzahlen-4", text: "Ich kann Konflikte zwischen betrieblichen Zielen erkennen (z. B. Gewinn vs. Umweltschutz, Kosten vs. Qualität).", ref: "wiso/betrieb-ziele" },
        { id: "ap2-kennzahlen-5", text: "Ich kann Formalziele (z. B. Gewinn, Rentabilität) und Sachziele (z. B. Art und Menge der Leistung) unterscheiden.", ref: "wiso/betrieb-ziele" }
      ]
    },
    {
      id: "marktwirtschaft", title: "Arbeitsteilung, Globalisierung und soziale Marktwirtschaft", part: "wiso", lf: ["wiso"],
      items: [
        { id: "ap2-marktwirtschaft-1", text: "Ich kann betriebliche, volkswirtschaftliche und internationale Arbeitsteilung erklären.", ref: "wiso/wirtschaftsordnung" },
        { id: "ap2-marktwirtschaft-2", text: "Ich kann Chancen und Risiken der Globalisierung nennen (neue Absatzmärkte, Kostenvorteile vs. Abhängigkeiten, Standortwettbewerb, anfällige Lieferketten).", ref: "wiso/wirtschaftsordnung" },
        { id: "ap2-marktwirtschaft-3", text: "Ich kann die Grundprinzipien der sozialen Marktwirtschaft erklären (Markt und Wettbewerb, sozialer Ausgleich, Privateigentum, Staat setzt den Rahmen).", ref: "wiso/wirtschaftsordnung" },
        { id: "ap2-marktwirtschaft-4", text: "Ich kann Möglichkeiten und Grenzen der sozialen Marktwirtschaft beurteilen (Wettbewerbs-, Sozial- und Konjunkturpolitik; Finanzierbarkeit, demografischer Wandel).", ref: "wiso/wirtschaftsordnung" },
        { id: "ap2-marktwirtschaft-5", text: "Ich kann die Ziele des magischen Vierecks nennen (stabiles Preisniveau, hoher Beschäftigungsstand, außenwirtschaftliches Gleichgewicht, stetiges und angemessenes Wachstum) und Zielkonflikte zeigen.", ref: "wiso/wirtschaftsordnung" }
      ]
    },
    {
      id: "verbaende", title: "Verbände, Kammern und Behörden", part: "wiso", lf: ["wiso"],
      items: [
        { id: "ap2-verbaende-1", text: "Ich kann Ziele und Aufgaben von Gewerkschaften (z. B. ver.di, IG Metall; Dachverband DGB) und Arbeitgeberverbänden nennen.", ref: "wiso/tarifvertrag" },
        { id: "ap2-verbaende-2", text: "Ich kann Wirtschaftsorganisationen unterscheiden: IHK (Pflichtmitgliedschaft), Handwerkskammer, Fachverbände wie Bitkom und berufsständische Vertretungen.", ref: "wiso/tarifvertrag" },
        { id: "ap2-verbaende-3", text: "Ich kann ehrenamtliche Mitwirkung erklären, z. B. im Prüfungsausschuss, der mit Arbeitgebern, Arbeitnehmern und Lehrkräften besetzt ist (§ 40 BBiG).", ref: "wiso/duales-system" },
        { id: "ap2-verbaende-4", text: "Ich kann Behörden und Institutionen ihre Aufgaben zuordnen: Arbeitsschutzbehörde (Gewerbeaufsicht), Agentur für Arbeit, Finanzamt, Datenschutzaufsicht und Berufsgenossenschaft als Träger der Unfallversicherung.", ref: "wiso/tarifvertrag" }
      ]
    },
    {
      id: "mitbestimmung", title: "Betriebsverfassung und Mitbestimmung (Betriebsrat, JAV)", part: "wiso", lf: ["wiso"],
      items: [
        { id: "ap2-mitbestimmung-1", text: "Ich kann den Grundsatz der vertrauensvollen Zusammenarbeit von Arbeitgeber und Betriebsrat (§ 2 BetrVG) erklären.", hot: true, ref: "wiso/mitbestimmung" },
        { id: "ap2-mitbestimmung-2", text: "Ich kann Voraussetzungen und Wahl des Betriebsrats erklären: mindestens 5 ständige wahlberechtigte Arbeitnehmer, davon 3 wählbar; wahlberechtigt ab 16 Jahren, wählbar ab 18 Jahren nach 6 Monaten Betriebszugehörigkeit; Amtszeit 4 Jahre; Größe richtet sich nach der Belegschaft.", hot: true, ref: "wiso/mitbestimmung" },
        { id: "ap2-mitbestimmung-3", text: "Ich kann die Jugend- und Auszubildendenvertretung erklären: bei mindestens 5 Arbeitnehmern unter 18 oder Auszubildenden unter 25, wählbar bis unter 25 Jahre, Amtszeit 2 Jahre, handelt über den Betriebsrat, nimmt an Sitzungen teil und stimmt bei Jugendthemen mit ab.", hot: true, ref: "wiso/mitbestimmung" },
        { id: "ap2-mitbestimmung-4", text: "Ich kann die Beteiligungsrechte abstufen: Information, Anhörung (vor jeder Kündigung, § 102 – ohne Anhörung unwirksam), Beratung, Widerspruch bzw. Zustimmungsverweigerung (personelle Einzelmaßnahmen, § 99) und echte Mitbestimmung (soziale Angelegenheiten, § 87, z. B. Arbeitszeit, technische Überwachungseinrichtungen).", hot: true, ref: "wiso/mitbestimmung" },
        { id: "ap2-mitbestimmung-5", text: "Ich kann Betriebsversammlung und Sprechstunden als Informationsinstrumente nennen.", ref: "wiso/mitbestimmung" },
        { id: "ap2-mitbestimmung-6", text: "Ich kann den besonderen Kündigungsschutz von Mitgliedern des Betriebsrats und der JAV erklären.", ref: "wiso/mitbestimmung" },
        { id: "ap2-mitbestimmung-7", text: "Ich kann Betriebsvereinbarungen und die Personalvertretung im öffentlichen Dienst (Personalrat nach Personalvertretungsgesetz) einordnen.", ref: "wiso/mitbestimmung" },
        { id: "ap2-mitbestimmung-8", text: "Ich kann einen Fall der richtigen Beteiligungsstufe zuordnen, z. B. Einführung eines Monitoring-Tools, das Leistung kontrollieren kann → echte Mitbestimmung.", ref: "wiso/mitbestimmung" }
      ]
    },
    {
      id: "arbeitsschutz", title: "Arbeitsschutz: Vorschriften und Zuständigkeiten", part: "wiso", lf: ["wiso"],
      items: [
        { id: "ap2-arbeitsschutz-1", text: "Ich kann Arbeitsschutzgesetz (Gefährdungsbeurteilung, Unterweisung, Pflichten von Arbeitgeber und Beschäftigten) und Arbeitssicherheitsgesetz (Fachkraft für Arbeitssicherheit, Betriebsarzt) einordnen.", ref: "wiso/arbeitsschutz" },
        { id: "ap2-arbeitsschutz-2", text: "Ich kann Betriebssicherheitsverordnung (sichere Arbeitsmittel, Prüfungen) und Arbeitsstättenverordnung (Anhang 6 zur Bildschirmarbeit, in dem die frühere Bildschirmarbeitsverordnung aufgegangen ist) zuordnen.", ref: "wiso/arbeitsschutz" },
        { id: "ap2-arbeitsschutz-3", text: "Ich kann die Unfallverhütungsvorschriften der Berufsgenossenschaften erklären (DGUV, z. B. Vorschrift 3 für elektrische Anlagen und Betriebsmittel).", ref: "wiso/arbeitsschutz" },
        { id: "ap2-arbeitsschutz-4", text: "Ich kann die Aufsicht im dualen Arbeitsschutzsystem zuordnen: staatliche Arbeitsschutzbehörde (Gewerbeaufsicht) und Berufsgenossenschaft.", ref: "wiso/arbeitsschutz" },
        { id: "ap2-arbeitsschutz-5", text: "Ich kann die Aufgaben von Sicherheitsbeauftragten nennen (unterstützen den Unternehmer, weisen auf Mängel hin, keine Weisungsbefugnis, Pflicht ab regelmäßig mehr als 20 Beschäftigten) und sie von der Fachkraft für Arbeitssicherheit abgrenzen.", ref: "wiso/arbeitsschutz" }
      ]
    },
    {
      id: "ergonomie", title: "Gefährdungen, Ergonomie und Vorsorge", part: "wiso", lf: ["wiso", "lf02"],
      items: [
        { id: "ap2-ergonomie-1", text: "Ich kann Gefährdungsarten (mechanisch, elektrisch, thermisch, chemisch, ergonomisch, akustisch, psychisch) mit Beispielen aus dem IT-Umfeld zuordnen.", ref: "wiso/arbeitsschutz" },
        { id: "ap2-ergonomie-2", text: "Ich kann erklären, dass Beschäftigte Gefahren melden und Sicherheitshinweise beachten müssen, und die besondere Fürsorgepflicht des Arbeitgebers beschreiben.", ref: "wiso/arbeitsschutz" },
        { id: "ap2-ergonomie-3", text: "Ich kann einen Bildschirmarbeitsplatz ergonomisch gestalten: blendfreie Aufstellung, oberste Bildschirmzeile knapp unter Augenhöhe, ausreichender Sehabstand, passende Tisch- und Stuhlhöhe, Beleuchtung, Mischarbeit und Pausen.", hot: true, ref: "lf02/ergonomie" },
        { id: "ap2-ergonomie-4", text: "Ich kann Aufgabe und Anzahl der Ersthelfer nennen (bei 2 bis 20 Anwesenden mindestens 1, darüber in Verwaltungs- und Handelsbetrieben 5 %, sonst 10 %).", ref: "wiso/arbeitsschutz" },
        { id: "ap2-ergonomie-5", text: "Ich kann die arbeitsmedizinische Vorsorge bei Bildschirmarbeit (Angebot einer Augenuntersuchung) und die Gefährdungsbeurteilung psychischer Belastungen erklären.", ref: "lf02/ergonomie" }
      ]
    },
    {
      id: "kennzeichnung", title: "Sicherheitskennzeichnung, Schutzklassen und Prüfzeichen", part: "wiso", lf: ["wiso", "lf02"],
      items: [
        { id: "ap2-kennzeichnung-1", text: "Ich kann Sicherheitszeichen nach Farbe und Form zuordnen: Verbot rot/rund, Warnung gelb/dreieckig, Gebot blau/rund, Rettung grün/rechteckig, Brandschutz rot/rechteckig.", hot: true, ref: "wiso/arbeitsschutz" },
        { id: "ap2-kennzeichnung-2", text: "Ich kann Flucht- und Rettungswege, Notausgänge und ihre Kennzeichnung beachten.", ref: "wiso/arbeitsschutz" },
        { id: "ap2-kennzeichnung-3", text: "Ich kann die Schutzklassen elektrischer Geräte (I Schutzleiter, II Schutzisolierung, III Schutzkleinspannung) und die IP-Schutzarten (1. Ziffer Fremdkörper/Berührung, 2. Ziffer Wasser) erklären.", hot: true, ref: "lf02/ergonomie" },
        { id: "ap2-kennzeichnung-4", text: "Ich kann Prüfzeichen deuten: CE als Herstellererklärung für den EU-Markt, GS für „geprüfte Sicherheit“, VDE-Zeichen.", ref: "lf02/ergonomie" },
        { id: "ap2-kennzeichnung-5", text: "Ich kann Verhaltensregeln im Umgang mit Gefahren anwenden (z. B. Arbeiten an geöffneten Geräten, Kabelführung, beschädigte Akkus).", ref: "wiso/arbeitsschutz" }
      ]
    },
    {
      id: "unfall", title: "Verhalten bei Unfällen und Meldepflichten", part: "wiso", lf: ["wiso"],
      items: [
        { id: "ap2-unfall-1", text: "Ich kann Erste-Hilfe-Maßnahmen und die Rettungskette beschreiben (absichern, Notruf, Erste Hilfe, Rettungsdienst).", ref: "wiso/arbeitsschutz" },
        { id: "ap2-unfall-2", text: "Ich kann einen Notruf unter 112 richtig absetzen (Wo? Was? Wie viele? Welche Verletzungen? Auf Rückfragen warten).", ref: "wiso/arbeitsschutz" },
        { id: "ap2-unfall-3", text: "Ich kann Meldeketten, Sammelplätze und Evakuierung beschreiben und die Dokumentation von Erste-Hilfe-Leistungen (Verbandbuch) erklären.", ref: "wiso/arbeitsschutz" },
        { id: "ap2-unfall-4", text: "Ich kann die Meldepflicht für Arbeitsunfälle anwenden: Unfallanzeige an die Berufsgenossenschaft innerhalb von 3 Tagen, wenn die Arbeitsunfähigkeit mehr als 3 Kalendertage dauert; auch Wegeunfälle sind versichert.", hot: true, ref: "wiso/arbeitsschutz" }
      ]
    },
    {
      id: "brandschutz", title: "Brandschutz", part: "wiso", lf: ["wiso"],
      items: [
        { id: "ap2-brandschutz-1", text: "Ich kann typische Brandursachen im Büro nennen (Wasserkocher, Kaffeemaschine, überlastete Mehrfachsteckdosen, defekte Akkus, Wärmestau).", ref: "wiso/arbeitsschutz" },
        { id: "ap2-brandschutz-2", text: "Ich kann Inhalte einer Brandschutzordnung und das richtige Verhalten im Brandfall beschreiben: Ruhe bewahren, Brand melden, Menschen retten, nur ohne Eigengefährdung löschen, keinen Aufzug benutzen, Türen schließen, Sammelplatz aufsuchen.", ref: "wiso/arbeitsschutz" },
        { id: "ap2-brandschutz-3", text: "Ich kann Brandklassen zuordnen (A feste Stoffe, B flüssige oder flüssig werdende Stoffe, C Gase, D Metalle, F Speisefette/-öle) und das passende Löschmittel wählen, z. B. CO₂-Löscher für elektronische Geräte.", hot: true, ref: "wiso/arbeitsschutz" },
        { id: "ap2-brandschutz-4", text: "Ich kann Feuerlöscher (Standort, Bedienung, Wirkungsweise) und Löschdecke richtig einsetzen.", ref: "wiso/arbeitsschutz" },
        { id: "ap2-brandschutz-5", text: "Ich kann Brandmelder, Flucht- und Rettungswege und die Brandschutzzeichen erklären.", ref: "wiso/arbeitsschutz" }
      ]
    },
    {
      id: "wiso-itsec", title: "Grundlagen von Informationssicherheit und Datenschutz (WiSo)", part: "wiso", lf: ["lf04", "wiso"],
      items: [
        { id: "ap2-wiso-itsec-1", text: "Ich kann die Ziele von Informationssicherheit (Schutz von Informationen und Systemen) und Datenschutz (Schutz der Persönlichkeitsrechte bei personenbezogenen Daten) unterscheiden.", ref: "lf04/grundlagen" },
        { id: "ap2-wiso-itsec-2", text: "Ich kann die Ziele der DSGVO nennen (Schutz personenbezogener Daten, freier Datenverkehr in der EU, Rechte der Betroffenen).", ref: "lf04/dsgvo-grundsaetze" },
        { id: "ap2-wiso-itsec-3", text: "Ich kann Verfügbarkeit, Integrität, Vertraulichkeit und Authentizität an Beispielen erklären.", ref: "lf04/grundlagen" },
        { id: "ap2-wiso-itsec-4", text: "Ich kann Aufgaben des BSI nennen (Informationssicherheit des Bundes, Warnungen über CERT-Bund, Standards und IT-Grundschutz, Zertifizierung, Beratung) und seine Empfehlungen berücksichtigen.", ref: "lf04/bsi-grundschutz" },
        { id: "ap2-wiso-itsec-5", text: "Ich kann Bedeutung und Inhalte eines betrieblichen IT-Sicherheitskonzepts nennen.", ref: "lf04/bsi-grundschutz" },
        { id: "ap2-wiso-itsec-6", text: "Ich kann TOM zur Gewährleistung der IT-Sicherheit nennen und umsetzen.", ref: "lf04/massnahmen" }
      ]
    },
    {
      id: "umwelt", title: "Umweltbelastungen vermeiden und Abfälle richtig entsorgen", part: "wiso", lf: ["wiso", "lf02"],
      items: [
        { id: "ap2-umwelt-1", text: "Ich kann umweltrelevante Risiken von IT-Prozessen nennen (USV-Batterien, Energiebedarf von Rechenzentren, Kühlmittel, Toner, Elektroschrott).", ref: "wiso/umwelt-nachhaltigkeit" },
        { id: "ap2-umwelt-2", text: "Ich kann Maßnahmen für sparsamen Energie- und Ressourceneinsatz vorschlagen (Standby vermeiden, Energiesparmodi, Virtualisierung, Duplexdruck, digitale statt papierbasierter Ablage).", ref: "lf02/energie-green-it" },
        { id: "ap2-umwelt-3", text: "Ich kann Abfallvermeidung, Mülltrennung und Recycling im Betrieb umsetzen.", ref: "wiso/umwelt-nachhaltigkeit" },
        { id: "ap2-umwelt-4", text: "Ich kann IT-typische Abfälle erfassen, lagern und entsorgen (Elektroaltgeräte nach ElektroG, Batterien nach BattG, Kabel, Toner) und Datenträger datenschutzgerecht vernichten lassen (z. B. nach DIN 66399).", hot: true, ref: "wiso/umwelt-nachhaltigkeit" }
      ]
    },
    {
      id: "umweltrecht", title: "Umweltrecht und nachhaltige Ressourcennutzung", part: "wiso", lf: ["wiso", "lf01"],
      items: [
        { id: "ap2-umweltrecht-1", text: "Ich kann das duale System der Verpackungsentsorgung erklären (Verpackungsgesetz, Pflicht zur Systembeteiligung).", ref: "wiso/umwelt-nachhaltigkeit" },
        { id: "ap2-umweltrecht-2", text: "Ich kann das Ziel des Bundes-Immissionsschutzgesetzes und die technischen Anleitungen TA Lärm und TA Luft nennen.", ref: "wiso/umwelt-nachhaltigkeit" },
        { id: "ap2-umweltrecht-3", text: "Ich kann Auswirkungen betrieblichen Handelns auf Umwelt, Pflanzen, Tiere und Lebensräume reflektieren.", ref: "wiso/umwelt-nachhaltigkeit" },
        { id: "ap2-umweltrecht-4", text: "Ich kann Nachhaltigkeit bei Einkauf und Lieferantenauswahl berücksichtigen (Energieeffizienz, Umweltsiegel, Reparierbarkeit, Ökostrom).", ref: "lf01/nachhaltigkeit-csr" },
        { id: "ap2-umweltrecht-5", text: "Ich kann Roh-, Hilfs- und Betriebsstoffe sparsam einsetzen und auf Kennzeichnung und getrennte Lagerung achten.", ref: "wiso/umwelt-nachhaltigkeit" },
        { id: "ap2-umweltrecht-6", text: "Ich kann die fünfstufige Abfallhierarchie des Kreislaufwirtschaftsgesetzes anwenden: Vermeidung, Vorbereitung zur Wiederverwendung, Recycling, sonstige Verwertung, Beseitigung.", ref: "wiso/umwelt-nachhaltigkeit" },
        { id: "ap2-umweltrecht-7", text: "Ich kann Rechtsfolgen bei Verstößen gegen Umweltvorschriften nennen (Bußgeld, Straftat, Haftung, Imageschaden).", ref: "wiso/umwelt-nachhaltigkeit" }
      ]
    },
    {
      id: "zusammenarbeit", title: "Wertschätzend zusammenarbeiten – auch virtuell", part: "wiso", lf: ["kommunikation", "wiso"],
      items: [
        { id: "ap2-zusammenarbeit-1", text: "Ich kann Interdisziplinarität und Interkulturalität im Team als Chance und Herausforderung beschreiben.", ref: "kommunikation/team" },
        { id: "ap2-zusammenarbeit-2", text: "Ich kann Regeln für eine wirksame, faire und respektvolle Zusammenarbeit im Team nennen – auch in virtuellen Teams.", ref: "kommunikation/team" },
        { id: "ap2-zusammenarbeit-3", text: "Ich kann an Beispielen zeigen, wie gemeinsame Verantwortung und Wertschätzung einzelner Beiträge im Team gelebt werden.", ref: "kommunikation/team" },
        { id: "ap2-zusammenarbeit-4", text: "Ich kann Unternehmenswerte und betriebliche Verhaltensregeln (Code of Conduct) anwenden.", ref: "wiso/umwelt-nachhaltigkeit" }
      ]
    },
    {
      id: "digikomm", title: "Sicher kommunizieren: E-Mail, soziale Medien, Social Engineering", part: "wiso", lf: ["kommunikation", "wiso", "lf04"],
      items: [
        { id: "ap2-digikomm-1", text: "Ich kann begründen, warum Sicherheitsbewusstsein bei privater und beruflicher IT-Nutzung nötig ist, und eigene Erfahrungen in digitalen Räumen reflektieren.", ref: "wiso/lernen-zusammenarbeit" },
        { id: "ap2-digikomm-2", text: "Ich kann Gefahren sozialer Medien für die IT-Sicherheit nennen (Preisgabe von Informationen, Phishing, Identitätsdiebstahl, schädliche Links).", ref: "wiso/lernen-zusammenarbeit" },
        { id: "ap2-digikomm-3", text: "Ich kann Zuständigkeiten bei Kommunikation und Informationsweitergabe abgrenzen (wer darf was an wen weitergeben).", ref: "kommunikation/schriftlich" },
        { id: "ap2-digikomm-4", text: "Ich kann Regeln für dienstliche E-Mails und Netiquette anwenden: aussagekräftiger Betreff, kurz, höflich und korrekt, aus Sicht des Empfängers, keine Kettenmails, Anhänge prüfen.", hot: true, ref: "kommunikation/schriftlich" },
        { id: "ap2-digikomm-5", text: "Ich kann sorgsam mit Empfängerlisten umgehen (BCC bei externen Verteilern, CC bewusst einsetzen, Datenschutz beachten).", hot: true, ref: "kommunikation/schriftlich" },
        { id: "ap2-digikomm-6", text: "Ich kann mögliche – auch arbeitsrechtliche – Folgen abwertender Äußerungen über den Arbeitgeber in sozialen Netzwerken nennen (Loyalitätspflicht, Abmahnung, Kündigung).", ref: "kommunikation/schriftlich" },
        { id: "ap2-digikomm-7", text: "Ich kann Social Engineering erkennen (Phishing, Pretexting, CEO-Fraud, Tailgating, Anrufe von falschem Support) und richtig reagieren (Rückruf über bekannte Nummer, Vier-Augen-Prinzip, Vorfall melden).", hot: true, ref: "wiso/lernen-zusammenarbeit" }
      ]
    },
    {
      id: "ethik", title: "Ethik, Diversity und Compliance", part: "wiso", lf: ["wiso", "kommunikation", "lf04", "lf01"],
      items: [
        { id: "ap2-ethik-1", text: "Ich kann Diversity im Betrieb fördern und unterschiedliche Perspektiven berücksichtigen.", ref: "kommunikation/team" },
        { id: "ap2-ethik-2", text: "Ich kann geschlechtergerechte Sprache verwenden und das dritte Geschlecht (divers) in IT-Systemen und Formularen berücksichtigen.", ref: "kommunikation/team" },
        { id: "ap2-ethik-3", text: "Ich kann ethische Fragen bei IT-Lösungen reflektieren (Menschenwürde, Schutz der Betroffenen, Überwachung, Diskriminierung durch KI-Algorithmen) – kurz-, mittel- und langfristig.", ref: "lf04/ki-telemetrie" },
        { id: "ap2-ethik-4", text: "Ich kann die Auswirkungen von IT-Lösungen auf Umwelt und Lebewesen in Entscheidungen einbeziehen.", ref: "lf01/nachhaltigkeit-csr" },
        { id: "ap2-ethik-5", text: "Ich kann allgemeine und betriebliche Compliance-Regeln beachten (Antikorruption, Umgang mit Geschenken, Datenschutz, Lizenzen).", ref: "wiso/umwelt-nachhaltigkeit" }
      ]
    },
    /* ===== Betriebliche Projektarbeit ===== */
    {
      id: "antrag", title: "Projektthema finden und Projektantrag stellen", part: "projekt", lf: ["lf12"],
      items: [
        { id: "ap2-antrag-1", text: "Ich kann ein Projektthema wählen, das ein echter betrieblicher Auftrag der Systemintegration ist – kein Übungs-, Routine- oder reines Programmierprojekt – und meine Eigenleistung klar abgrenzen.", ref: "lf12/ihk-projektantrag" },
        { id: "ap2-antrag-2", text: "Ich kann zeigen, dass mein Projekt alle sechs Anforderungen aus § 20 Abs. 2 FIAusbV abdeckt: Anforderungsanalyse, Lösungsalternativen (technisch, wirtschaftlich, qualitativ), Systemänderung mit Übergabe, Einführung und Pflege, Schwachstellenanalyse mit Schutzmaßnahmen, Dokumentation.", ref: "lf12/ihk-projektantrag" },
        { id: "ap2-antrag-3", text: "Ich kann einen Antrag schreiben, der mindestens Ausgangssituation, Projektziel und Zeitplanung enthält (Pflicht nach § 20 FIAusbV).", ref: "lf12/ihk-projektantrag" },
        { id: "ap2-antrag-4", text: "Ich kann eine konkrete Projektbezeichnung formulieren, die das Ergebnis erkennen lässt (z. B. „Einführung einer 802.1X-Authentifizierung im LAN der Nordlicht IT GmbH“).", ref: "lf12/ihk-projektantrag" },
        { id: "ap2-antrag-5", text: "Ich kann Sach-, Zeit-, Kosten- und Qualitätsziel messbar nach SMART formulieren.", ref: "lf12/projekt-grundlagen" },
        { id: "ap2-antrag-6", text: "Ich kann Ist-Zustand, Soll-Konzept und Nutzen beschreiben sowie Auftraggeber und Schnittstellen benennen.", ref: "lf12/ihk-projektantrag" },
        { id: "ap2-antrag-7", text: "Ich kann mindestens zwei echte Lösungsalternativen nennen, die im Projekt verglichen werden (z. B. mit einer Nutzwertanalyse).", ref: "lf12/ihk-projektantrag" },
        { id: "ap2-antrag-8", text: "Ich kann eine Zeitplanung mit Phasen und Stunden aufstellen (Analyse, Planung, Durchführung, Test/QS, Übergabe, Dokumentation), deren Summe höchstens 40 h beträgt – mit höchstens etwa 15 % (≈ 6 h) für die Dokumentation und ohne die Vorbereitung der Präsentation.", ref: "lf12/ihk-projektantrag" },
        { id: "ap2-antrag-9", text: "Ich kann Eigen- und Fremdleistungen im Projekt klar voneinander abgrenzen.", ref: "lf12/ihk-projektantrag" },
        { id: "ap2-antrag-10", text: "Ich kann den Antrag fristgerecht über das Bildungsportal der IHK Flensburg einreichen (Winter Mitte September, Sommer Mitte Februar; das genaue Datum steht im PIN-Schreiben).", ref: "lf12/ihk-projektantrag" },
        { id: "ap2-antrag-11", text: "Ich kann erklären, warum ich erst nach der schriftlichen Genehmigung beginne, und Auflagen oder Hinweise des Prüfungsausschusses umsetzen und in der Doku berücksichtigen.", ref: "lf12/ihk-projektantrag" },
        { id: "ap2-antrag-12", text: "Ich kann einen abgelehnten Antrag innerhalb der kurzen Nachfrist überarbeiten.", ref: "lf12/ihk-projektantrag" }
      ]
    },
    {
      id: "durchfuehrung", title: "Projekt durchführen", part: "projekt", lf: ["lf12"],
      items: [
        { id: "ap2-durchfuehrung-1", text: "Ich kann das Projekt im vorgesehenen Zeitraum durchführen (IHK Flensburg: Winter 15.10.–15.11., Sommer 01.04.–01.05.) und das früh mit dem Betrieb abstimmen.", ref: "lf12/ihk-projektantrag" },
        { id: "ap2-durchfuehrung-2", text: "Ich kann ein Projekttagebuch mit Tätigkeiten, Stunden, Entscheidungen und Problemen führen.", ref: "lf12/ihk-projektantrag" },
        { id: "ap2-durchfuehrung-3", text: "Ich kann Ist-Analyse und Anforderungen mit dem Auftraggeber abstimmen und protokollieren.", ref: "lf12/anforderungsanalyse" },
        { id: "ap2-durchfuehrung-4", text: "Ich kann Lösungsalternativen nachvollziehbar bewerten (Kriterien, Gewichtung, Kostenvergleich, begründete Entscheidung).", ref: "lf12/wirtschaftlichkeit-entscheidung" },
        { id: "ap2-durchfuehrung-5", text: "Ich kann eine Schutzbedarfs- und Schwachstellenanalyse durchführen und technische wie organisatorische Schutzmaßnahmen umsetzen oder vorschlagen.", ref: "lf12/risikomanagement" },
        { id: "ap2-durchfuehrung-6", text: "Ich kann eine Kostenplanung mit Personal- und Sachkosten und ggf. Amortisationsrechnung erstellen.", ref: "lf12/ressourcen-kosten" },
        { id: "ap2-durchfuehrung-7", text: "Ich kann die Qualitätssicherung planen (Testkonzept, Testfälle, Abnahmekriterien) und mit Testprotokollen nachweisen.", ref: "lf12/qualitaet-tests" },
        { id: "ap2-durchfuehrung-8", text: "Ich kann Abweichungen vom Antrag dokumentieren und begründen.", ref: "lf12/projektabschluss" },
        { id: "ap2-durchfuehrung-9", text: "Ich kann Übergabe und Abnahme mit Protokoll durchführen und eine Kunden- bzw. Anwenderdokumentation sowie ggf. eine Einweisung erstellen.", ref: "lf12/abnahme-uebergabe" },
        { id: "ap2-durchfuehrung-10", text: "Ich kann Betriebs- und Kundendaten anonymisieren und Passwörter sowie interne Adressen schwärzen.", ref: "lf12/ihk-doku-praesentation" }
      ]
    },
    {
      id: "doku", title: "Projektdokumentation erstellen", part: "projekt", lf: ["lf12", "kommunikation"],
      items: [
        { id: "ap2-doku-1", text: "Ich kann Umfang und Format meiner IHK einhalten (Flensburg: max. 10 Seiten DIN A4 Text + max. 25 Seiten Anhang, Arial 11, einzeilig, Seiten nummeriert – vor der Abgabe mit den aktuellen Vorgaben abgleichen).", ref: "lf12/ihk-doku-praesentation" },
        { id: "ap2-doku-2", text: "Ich kann die Doku sinnvoll gliedern: Deckblatt, persönliche Erklärung, Inhaltsverzeichnis, Ausgangssituation (Auftrag, Umfeld, Schnittstellen, Ist-Analyse, messbare Ziele, Abgrenzung), Planung (Soll-Konzept, Alternativen mit Entscheidungsmatrix, Zeit-, Ressourcen-, Kosten- und QS-Planung, Schwachstellen- und Schutzbedarfsanalyse), Durchführung, QS/Tests und TOM, Abschluss (Abnahme, Übergabe, Soll-Ist-Vergleich, Fazit, Ausblick), Quellen, Anhang.", ref: "lf12/ihk-doku-praesentation" },
        { id: "ap2-doku-3", text: "Ich kann einen Anhang mit praxisbezogenen Unterlagen zusammenstellen: Gesprächs-, Test-, Abnahme- und Übergabeprotokolle, Netzpläne, Konfigurationsauszüge, Kunden- bzw. Anwenderdokumentation.", ref: "lf12/ihk-doku-praesentation" },
        { id: "ap2-doku-4", text: "Ich kann die Doku als handlungsorientierten Prozessbericht in Ich- bzw. Wir-Form schreiben, in dem meine Eigenleistung sichtbar wird – kein Lehrbuchtext, denn bewertet wird der Arbeitsprozess.", ref: "lf12/ihk-doku-praesentation" },
        { id: "ap2-doku-5", text: "Ich kann jede wichtige Entscheidung begründen (warum diese Lösung, warum diese Konfiguration).", ref: "lf12/ihk-doku-praesentation" },
        { id: "ap2-doku-6", text: "Ich kann einen Soll-Ist-Vergleich für Zeit, Kosten und Ziele aufstellen.", ref: "lf12/projektabschluss" },
        { id: "ap2-doku-7", text: "Ich kann auf korrekte Sprache und Rechtschreibung, beschriftete Abbildungen und Tabellen und vollständige Quellenangaben achten und Grafiken im Text sparsam einsetzen.", ref: "lf12/ihk-doku-praesentation" },
        { id: "ap2-doku-8", text: "Ich kann den Einsatz von KI-Werkzeugen offenlegen (Richtschnur IHK Berlin: nicht gekennzeichnete Nutzung gilt als Täuschung).", ref: "lf12/ihk-doku-praesentation" },
        { id: "ap2-doku-9", text: "Ich kann die Doku fristgerecht im Bildungsportal hochladen und vom Ausbildungsbetrieb freigeben lassen.", ref: "lf12/ihk-doku-praesentation" },
        { id: "ap2-doku-10", text: "Ich kann meine Doku an einer Bewertungsmatrix ausrichten (Beispiel: Ausgangssituation 15 %, Ressourcen- und Ablaufplanung 15 %, Durchführung 30 %, Projektergebnisse 15 %, Gestaltung 15 %, Kundendokumentation 10 %).", ref: "lf12/ihk-doku-praesentation" }
      ]
    },
    {
      id: "praesentation", title: "Projekt präsentieren (höchstens 15 min)", part: "projekt", lf: ["kommunikation", "lf12"],
      items: [
        { id: "ap2-praesentation-1", text: "Ich kann eine Präsentation von etwa 12–15 Minuten halten und weiß, dass der Ausschuss nach 15 Minuten abbrechen darf.", ref: "kommunikation/fachgespraech" },
        { id: "ap2-praesentation-2", text: "Ich kann die Präsentation logisch aufbauen: Ausgangssituation und Ziel → Alternativen und Entscheidung → Vorgehen mit Schlüsselentscheidungen → IT-Sicherheit und QS → Ergebnis mit Soll-Ist-Vergleich → Fazit und Ausblick.", ref: "kommunikation/fachgespraech" },
        { id: "ap2-praesentation-3", text: "Ich kann für den fachkundigen Prüfungsausschuss präsentieren: Fachbegriffe korrekt verwenden, keine Verkaufsshow, Prozess und Entscheidungen in den Mittelpunkt stellen.", ref: "kommunikation/fachgespraech" },
        { id: "ap2-praesentation-4", text: "Ich kann gut visualisieren: wenige, gut lesbare Folien, Netzpläne und Diagramme statt Textwüsten, einheitliches Layout (das Firmen-CI wird nicht bewertet).", ref: "kommunikation/praesentation" },
        { id: "ap2-praesentation-5", text: "Ich kann frei vortragen mit Blickkontakt, klarer Sprache und passender Körpersprache und habe die Zeit mehrfach geprobt.", ref: "kommunikation/praesentation" },
        { id: "ap2-praesentation-6", text: "Ich kann meine Technik sicher vorbereiten (eigener Laptop, Adapter, ggf. Presenter), eine Ersatzkopie als PDF auf USB-Stick und einen Ausdruck bereithalten und Rüstzeit einplanen.", ref: "kommunikation/fachgespraech" },
        { id: "ap2-praesentation-7", text: "Ich kann die Bewertungskriterien benennen: Aufbau und inhaltliche Struktur, sprachliche Gestaltung, zielgruppen- und fachgerechte Darstellung mit Medieneinsatz.", ref: "kommunikation/fachgespraech" }
      ]
    },
    {
      id: "fachgespraech", title: "Fachgespräch führen (Rest bis max. 30 min)", part: "projekt", lf: ["kommunikation", "lf12"],
      items: [
        { id: "ap2-fachgespraech-1", text: "Ich kann jede Entscheidung in meinem Projekt begründen und die Alternativen fachlich bewerten.", ref: "kommunikation/fachgespraech" },
        { id: "ap2-fachgespraech-2", text: "Ich kann die eingesetzten Technologien über mein Projekt hinaus erklären (z. B. VLAN-Tagging, RADIUS-Ablauf, Backup-Verfahren, beteiligte Protokolle).", ref: "kommunikation/fachgespraech" },
        { id: "ap2-fachgespraech-3", text: "Ich kann „Was wäre, wenn …?“-Fragen beantworten (Ausfall einer Komponente, Sicherheitsvorfall, doppelte Nutzerzahl, kleineres Budget).", ref: "kommunikation/fachgespraech" },
        { id: "ap2-fachgespraech-4", text: "Ich kann Kosten, Wirtschaftlichkeit und Amortisation meines Projekts erläutern.", ref: "lf12/wirtschaftlichkeit-entscheidung" },
        { id: "ap2-fachgespraech-5", text: "Ich kann die gefundenen Schwachstellen und die umgesetzten bzw. vorgeschlagenen Schutzmaßnahmen erklären.", ref: "kommunikation/fachgespraech" },
        { id: "ap2-fachgespraech-6", text: "Ich kann QS-Maßnahmen, Tests und die Abnahme beschreiben.", ref: "kommunikation/fachgespraech" },
        { id: "ap2-fachgespraech-7", text: "Ich kann Abweichungen vom Plan und meine Lessons Learned sachlich reflektieren.", ref: "lf12/projektabschluss" },
        { id: "ap2-fachgespraech-8", text: "Ich kann vollständig und strukturiert antworten statt einsilbig, Wissenslücken ehrlich zugeben und zu Bekanntem überleiten, ohne mit dem Ausschuss zu diskutieren.", ref: "kommunikation/fachgespraech" },
        { id: "ap2-fachgespraech-9", text: "Ich kann die Bewertungskriterien benennen: fachlicher Hintergrund und Fachsprache, Problemlösungskompetenz, Argumentation und Begründung.", ref: "kommunikation/fachgespraech" },
        { id: "ap2-fachgespraech-10", text: "Ich weiß, dass das Ergebnis (bestanden/nicht bestanden) meist direkt danach mitgeteilt wird und eine mündliche Ergänzungsprüfung in KAIS, AEN oder WiSo ggf. im Anschluss stattfinden kann.", ref: "kommunikation/fachgespraech" }
      ]
    }
  ],

  dates: [
    { date: "2026-10-15", title: "Projektdurchführung Winter 2026/27 beginnt (Zeitraum 15.10.–15.11.2026)", note: "IHK Flensburg/Schleswig-Holstein, Hinweise zur Projektarbeit IT – nur mit genehmigtem Antrag; bitte prüfen" },
    { date: "2026-11-25", title: "AP2 schriftlich Winter 2026/27 (KAIS, AEN, WiSo)", note: "bundeseinheitlich laut IHK – bitte prüfen; Uhrzeit und Ort laut Einladung" },
    { date: "2027-02-15", title: "Projektantrag AP2 Sommer 2027 – Frist „Mitte Februar“ (ca.)", note: "IHK Flensburg: Ausschlussfrist, genaues Datum steht im PIN-Schreiben bzw. Bildungsportal – bitte prüfen" },
    { date: "2027-04-01", title: "Projektdurchführung Sommer 2027 beginnt (Zeitraum 01.04.–01.05.2027)", note: "IHK Flensburg/Schleswig-Holstein – nur mit genehmigtem Antrag; bitte prüfen" },
    { date: "2027-04-28", title: "AP2 schriftlich Sommer 2027 (KAIS, AEN, WiSo)", note: "bundeseinheitlich laut IHK – bitte prüfen; Uhrzeit und Ort laut Einladung" },
    { date: "2027-11-24", title: "AP2 schriftlich Winter 2027/28", note: "bundeseinheitlich laut Terminübersicht – noch nicht von der IHK Flensburg bestätigt, bitte prüfen" },
    { date: "2028-04-26", title: "AP2 schriftlich Sommer 2028", note: "bundeseinheitlich laut Terminübersicht – noch nicht von der IHK Flensburg bestätigt, bitte prüfen" }
  ],

  tips: [
    "<strong>Belegsatz zuerst sichten:</strong> Nimm dir in KAIS und AEN die ersten 5 Minuten, um Ausgangssituation, Netzwerkplan und Datenblätter komplett zu lesen. Markiere Netze, VLAN-IDs, Gateways und Mengenangaben – viele Teilaufgaben greifen darauf zurück.",
    "<strong>Zeit pro Punkt:</strong> In KAIS und AEN hast du 0,9 min pro Punkt. Rechne mit etwa 20 min für eine 25-Punkte-Aufgabe und beiß dich nicht fest: Lücke markieren, weitermachen, am Ende zurückkommen.",
    "<strong>Operator genau lesen:</strong> Bei „nennen“ reichen Stichworte, bei „erläutern“ und „begründen“ brauchst du ganze Sätze mit Bezug zur Ausgangssituation („…, weil die Firma …“). Nenne genau so viele Punkte, wie verlangt sind – überzählige Antworten werden in der Regel nicht gewertet.",
    "<strong>Rechenweg immer hinschreiben:</strong> Formel → Werte einsetzen → Ergebnis mit Einheit. Auch bei einem Folgefehler gibt es so meist Teilpunkte.",
    "<strong>Präfixe sauber trennen:</strong> Datenmengen binär (KiB, MiB, GiB, TiB), Datenraten und Leistung dezimal (Mbit/s, kW). Byte in Bit umrechnen (× 8) nicht vergessen – das ist einer der häufigsten Fehler bei Übertragungs- und Backupzeiten.",
    "<strong>Klassiker sicher beherrschen:</strong> RAID-Kapazität, USV/Netzteil mit Wirkungsgrad, Verfügbarkeit (seriell/parallel), Backup/Restore mit RTO/RPO, Subnetting v4/v6, VLAN/Trunk, Firewall-Regelwerk – diese Rechen- und Konfigurationsaufgaben bringen verlässlich Punkte.",
    "<strong>Nicht nur „häufig“ lernen:</strong> Die Prüfungen der letzten Jahre haben gezeigt, dass selbst Subnetting oder RAID einmal ganz fehlen können – dafür kamen neue Themen wie Wireshark-Analyse, FHRP oder Load Balancing. Arbeite die komplette Checkliste durch.",
    "<strong>Code-Aufgaben üben:</strong> Führe Schreibtischtests mit einer Wertetabelle durch und suche gezielt nach typischen Fehlern: Schleifengrenze (Off-by-one), falscher Vergleichsoperator, Division statt Modulo, fehlende Initialisierung.",
    "<strong>WiSo gezielt trainieren:</strong> Viele WiSo-Aufgaben kehren in ähnlicher Form wieder – alte WiSo-Prüfungen lohnen sich. Achte bei Multiple Choice darauf, ob eine oder mehrere Antworten richtig sind, und prüfe gesetzliche Werte (Beitragssätze, Grenzen) auf den aktuellen Stand.",
    "<strong>Probeklausuren unter echten Bedingungen:</strong> Löse mindestens drei komplette Durchgänge mit Stoppuhr (90/90/60 min) und nur mit Taschenrechner. Werte danach aus, wo du Punkte verloren hast, und wiederhole genau diese Themen.",
    "<strong>Hilfsmittel vorbereiten:</strong> Nimm einen nicht programmierbaren Taschenrechner mit, den du gut kennst (Ersatzbatterie!), mehrere dokumentenechte Kugelschreiber und eine analoge Uhr. Smartphone und Smartwatch bleiben aus bzw. draußen.",
    "<strong>Freistellung nutzen:</strong> Am Arbeitstag direkt vor der schriftlichen Abschlussprüfung musst du freigestellt werden (§ 15 BBiG). Nutze ihn zum ruhigen Wiederholen der Formeln – nicht für Neues – und schlaf ausreichend.",
    "<strong>Projektantrag früh starten:</strong> Die Antragsfrist der IHK Flensburg ist eine Ausschlussfrist (Winter Mitte September, Sommer Mitte Februar). Achte darauf, dass dein Antrag Lösungsalternativen und IT-Sicherheit (Schwachstellenanalyse, Schutzmaßnahmen) enthält.",
    "<strong>Projekt und Lernen koordinieren:</strong> Der Durchführungszeitraum liegt in Flensburg direkt vor (Winter) bzw. über (Sommer) dem schriftlichen Termin. Plane Projektstunden und Lernzeit gemeinsam mit deinem Betrieb.",
    "<strong>Doku als Prozessbericht:</strong> Schreibe, was du warum entschieden hast, und belege es mit Protokollen im Anhang. Halte die Seitenvorgaben ein, anonymisiere Firmendaten und lege den Einsatz von KI-Werkzeugen offen.",
    "<strong>Präsentation proben:</strong> Übe den Vortrag mehrmals laut mit Stoppuhr (Ziel: 12–15 min) und vor Publikum. Bring eigene Technik plus Ersatz-PDF und Ausdruck mit.",
    "<strong>Fürs Fachgespräch die Technik dahinter verstehen:</strong> Du musst die Funktionsweise jeder eingesetzten Technik erklären und „Was wäre, wenn …?“-Fragen beantworten können. Lass dich vorher von Ausbilder oder Kollegen „grillen“.",
    "<strong>Ergänzungsprüfung kennen:</strong> Liegt ein schriftlicher Bereich unter 50 Punkten und kann eine mündliche Ergänzungsprüfung über das Bestehen entscheiden, kannst du sie beantragen. Die schriftliche Note zählt dann doppelt, die mündliche einfach – bereite dich auf die Kernthemen dieses Bereichs vor."
  ],

  links: [
    { title: "FIAusbV – Verordnung über die Berufsausbildung zum Fachinformatiker/zur Fachinformatikerin", url: "https://www.gesetze-im-internet.de/fiausbv/", note: "§§ 18–25: Teil 2 für Systemintegration" },
    { title: "§ 20 FIAusbV – Prüfungsbereich Projekt (Systemintegration)", url: "https://www.gesetze-im-internet.de/fiausbv/__20.html" },
    { title: "§ 24 FIAusbV – Gewichtung und Bestehensregelung", url: "https://www.gesetze-im-internet.de/fiausbv/__24.html" },
    { title: "§ 25 FIAusbV – Mündliche Ergänzungsprüfung", url: "https://www.gesetze-im-internet.de/fiausbv/__25.html" },
    { title: "§ 37 BBiG – Wiederholung der Abschlussprüfung", url: "https://www.gesetze-im-internet.de/bbig_2005/__37.html" },
    { title: "§ 15 BBiG – Freistellung (auch am Tag vor der schriftlichen Prüfung)", url: "https://www.gesetze-im-internet.de/bbig_2005/__15.html" },
    { title: "IHK Schleswig-Holstein (Flensburg) – Hinweise zur betrieblichen Projektarbeit IT-Berufe", url: "https://www.ihk.de/schleswig-holstein/bildung/downloads/formulare-ihk-flensburg/hinweis-projektarbeit-it-6722448" },
    { title: "IHK Schleswig-Holstein – Prüfungstermine Abschlussprüfung", url: "https://www.ihk.de/schleswig-holstein/bildung/ihk-pruefungen/pruefungstermine/abschlusspruefung-5769918" },
    { title: "IHK Flensburg – Bildungsportal (Projektantrag, Dokumentation)", url: "https://bildung.ihk-flensburg.de/tibrosBB/index.jsp" },
    { title: "KMK-Rahmenlehrplan Fachinformatiker/-in (2019)", url: "https://www.kmk.org/fileadmin/Dateien/pdf/Bildung/BeruflicheBildung/rlp/Fachinformatiker_19-12-13_EL.pdf" },
    { title: "IHK Hannover – Prüfungskataloge IT-Berufe (2. Auflage)", url: "https://www.ihk.de/hannover/hauptnavigation/ausbildung-und-weiterbildung/ausbildung/ausbildung-a-z/neuordnungen/pruefungskataloge-it-berufe-6438900" },
    { title: "u-form Verlag – Prüfungskatalog und Prüfungen FISI (kostenpflichtig)", url: "https://www.u-form-shop.de/abschlusspruefung/fachinformatiker-fachinformatikerin/systemintegration" },
    { title: "IHK Rheinhessen – Notenschlüssel", url: "https://www.ihk.de/rheinhessen/aus-und-weiterbildung/notenschluessel-6189142" },
    { title: "IHK-AkA – bundeseinheitliche Prüfungstermine", url: "https://www.ihk-aka.de/pruefungen" },
    { title: "IHK Berlin – Leitfaden Fachinformatiker/-in Systemintegration (Projekt, Doku, Präsentation)", url: "https://www.ihk.de/blueprint/servlet/resource/blob/6957958/fd54ae065bc407cd8fc092c654af9a96/leitfaden-fi-systemintegration-data.pdf", note: "Regeln einer anderen Kammer – als Orientierung" }
  ],

  tasks: [
    /* ===== Probeklausur A – Konzeption und Administration von IT-Systemen (KAIS), 90 min, 4 Aufgaben = 100 P ===== */
    {
      id: "kau-a1", set: "A", part: "kau", points: 25,
      title: "KAIS A1: Virtualisierungskonzept für die Serverkonsolidierung",
      scenario: `
        <p><strong>Ausgangssituation (gilt für die ganze Probeklausur KAIS A):</strong> Du bist Auszubildende/r bei der <strong>Nordlicht IT GmbH</strong> in Heide, einem IT-Systemhaus. Euer Kunde, die <strong>Küstenfracht Logistik GmbH</strong> in Brunsbüttel (Spedition und Kontraktlogistik, 180 Beschäftigte, Lager im Drei-Schicht-Betrieb), betreibt noch 17 einzelne physische Server. Mehrere davon laufen mit Windows Server 2016, dessen erweiterter Support im Januar 2027 endet. Die Geschäftsführung beauftragt euch, die Serverlandschaft zu modernisieren. Alle Firmen und Zahlen sind frei erfunden.</p>
        <p>Geplant ist ein <strong>Virtualisierungscluster</strong> aus baugleichen Hosts mit gemeinsamem iSCSI-Speicher. Die Bestandsaufnahme ergibt diese virtuellen Maschinen:</p>
        <table>
          <thead><tr><th>VM-Gruppe</th><th>Anzahl</th><th>RAM je VM</th><th>vCPU je VM</th></tr></thead>
          <tbody>
            <tr><td>Domänencontroller</td><td>2</td><td>8 GiB</td><td>2</td></tr>
            <tr><td>Datei- und Druckserver</td><td>2</td><td>16 GiB</td><td>4</td></tr>
            <tr><td>ERP-Anwendungsserver</td><td>2</td><td>32 GiB</td><td>8</td></tr>
            <tr><td>ERP-Datenbankserver</td><td>1</td><td>96 GiB</td><td>12</td></tr>
            <tr><td>Terminalserver</td><td>4</td><td>48 GiB</td><td>8</td></tr>
            <tr><td>Sonstige (Monitoring, WSUS, Telematik, …)</td><td>6</td><td>8 GiB</td><td>2</td></tr>
          </tbody>
        </table>
        <p><strong>Host-Angebot:</strong> 2 CPUs mit je 16 physischen Kernen, 256 GiB RAM. Der Hypervisor reserviert je Host 16 GiB RAM für sich.<br>
        <strong>Planungsregeln der Nordlicht IT:</strong> höchstens 3 vCPU je physischem Kern (Hyperthreading bleibt unberücksichtigt), 25 % Wachstumsreserve auf RAM und vCPU, Ausfall eines Hosts muss ohne Leistungseinbußen verkraftet werden (N+1).</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Für den Cluster soll ein Hypervisor vom <strong>Typ 1</strong> eingesetzt werden. Erläutere den Unterschied zwischen einem Typ-1- und einem Typ-2-Hypervisor und begründe die Wahl für dieses Projekt.</p>`,
          points: 4,
          solution: `
            <table>
              <thead><tr><th></th><th>Typ 1 (bare metal)</th><th>Typ 2 (hosted)</th></tr></thead>
              <tbody>
                <tr><td>Aufbau</td><td>läuft direkt auf der Hardware, ist selbst das „Betriebssystem“ des Hosts</td><td>läuft als Anwendung auf einem normalen Host-Betriebssystem</td></tr>
                <tr><td>Beispiele</td><td>VMware ESXi, Microsoft Hyper-V, Proxmox VE (KVM)</td><td>VirtualBox, VMware Workstation</td></tr>
                <tr><td>Einsatz</td><td>Rechenzentrum, Servervirtualisierung</td><td>Test, Schulung, Arbeitsplatz</td></tr>
              </tbody>
            </table>
            <p><strong>Begründung:</strong> Ein Typ-1-Hypervisor hat keinen zusätzlichen Betriebssystem-Overhead und liefert daher mehr Leistung für die 17 VMs. Er bietet eine kleinere Angriffsfläche und ist stabiler, weil kein allgemeines Host-Betriebssystem mit eigenen Updates und Fehlern darunterliegt. Außerdem stellen nur Typ-1-Lösungen die Cluster-Funktionen bereit, die die Küstenfracht für den Schichtbetrieb braucht (Hochverfügbarkeit, Live-Migration, zentrale Verwaltung).</p>
            <p><strong>Bewertung:</strong> Unterschied 2 P, Begründung mit mindestens zwei Argumenten und Bezug zur Ausgangssituation 2 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Berechne den RAM- und den vCPU-Bedarf einschließlich Wachstumsreserve. Ermittle, wie viele Hosts der Cluster nach der N+1-Regel mindestens braucht, und gib an, welche Ressource die Hostanzahl bestimmt.</p>`,
          points: 9,
          solution: `
            <p><strong>1. RAM-Bedarf:</strong> 2 ⋅ 8 + 2 ⋅ 16 + 2 ⋅ 32 + 1 ⋅ 96 + 4 ⋅ 48 + 6 ⋅ 8 = 16 + 32 + 64 + 96 + 192 + 48 = <strong>448 GiB</strong><br>
            mit 25 % Reserve: 448 GiB ⋅ 1,25 = <strong>560 GiB</strong></p>
            <p><strong>2. vCPU-Bedarf:</strong> 2 ⋅ 2 + 2 ⋅ 4 + 2 ⋅ 8 + 1 ⋅ 12 + 4 ⋅ 8 + 6 ⋅ 2 = 4 + 8 + 16 + 12 + 32 + 12 = <strong>84 vCPU</strong><br>
            mit 25 % Reserve: 84 ⋅ 1,25 = <strong>105 vCPU</strong></p>
            <p><strong>3. Kapazität je Host:</strong> RAM 256 GiB − 16 GiB = <strong>240 GiB</strong> · vCPU 2 ⋅ 16 Kerne ⋅ 3 = <strong>96 vCPU</strong></p>
            <p><strong>4. Hosts für die Last:</strong> RAM 560 ÷ 240 ≈ 2,33 → 3 Hosts · vCPU 105 ÷ 96 ≈ 1,09 → 2 Hosts<br>
            Der <strong>Arbeitsspeicher</strong> ist der Engpass: Die Last braucht 3 Hosts.</p>
            <p><strong>5. N+1:</strong> 3 + 1 = <strong>4 Hosts</strong>.<br>
            Probe: Fällt einer von 4 Hosts aus, bleiben 3 ⋅ 240 GiB = 720 GiB ≥ 560 GiB ✔. Mit nur 3 Hosts blieben 2 ⋅ 240 GiB = 480 GiB &lt; 560 GiB ✘.<br>
            Im Normalbetrieb ist der RAM zu 560 ÷ 960 ≈ 58 % ausgelastet. Die größte VM (ERP-Datenbank, 96 GiB, 12 vCPU) passt auf jeden einzelnen Host.</p>
            <p><strong>Bewertung:</strong> RAM-Bedarf mit Reserve 2 P, vCPU-Bedarf mit Reserve 2 P, Kapazität je Host 2 P, Hostanzahl mit N+1 und Nennung des Engpasses 3 P. Folgefehler werden berücksichtigt.</p>`
        },
        {
          q: `<p><strong>c)</strong> Nenne zwei Funktionen eines Hypervisor-Clusters, die die Verfügbarkeit erhöhen, und beschreibe jeweils, was bei einem Hostausfall bzw. bei einer geplanten Hostwartung passiert.</p>`,
          points: 4,
          solution: `
            <ul>
              <li><strong>Hochverfügbarkeit (HA):</strong> Die Hosts überwachen sich gegenseitig (Heartbeat). Fällt ein Host aus, startet der Cluster dessen VMs automatisch auf den übrigen Hosts neu. Es gibt eine kurze Unterbrechung (Neustartzeit der VMs), aber kein manuelles Eingreifen.</li>
              <li><strong>Live-Migration</strong> (z. B. vMotion, Hyper-V Live Migration): Laufende VMs werden ohne Unterbrechung auf einen anderen Host verschoben. Dabei wird nur der Arbeitsspeicherinhalt über das Migrationsnetz kopiert, die virtuellen Festplatten bleiben auf dem gemeinsamen Speicher. So kann ein Host für Updates oder Hardwaretausch leergeräumt werden.</li>
            </ul>
            <p>Ebenfalls richtig: automatische Lastverteilung (z. B. DRS), Fault Tolerance (gespiegelte Schatten-VM ohne Unterbrechung). Voraussetzungen: gemeinsamer Speicher (hier iSCSI-SAN), eigenes Cluster-/Migrationsnetz, kompatible CPUs.</p>
            <p><strong>Bewertung:</strong> je Funktion 1 P für die Nennung und 1 P für die Beschreibung.</p>`
        },
        {
          q: `<p><strong>d)</strong> Der Administrator der Küstenfracht möchte künftig auf eine separate Datensicherung verzichten, weil der Hypervisor jede Nacht Snapshots aller VMs erstellt. Beurteile diesen Vorschlag.</p>`,
          points: 4,
          solution: `
            <p>Der Vorschlag ist <strong>abzulehnen</strong> – ein Snapshot ist kein Backup:</p>
            <ul>
              <li>Snapshots liegen auf <strong>demselben Speichersystem</strong> wie die VMs. Fällt das SAN aus, verschlüsselt Ransomware den Datenspeicher oder wird ein Datastore gelöscht, sind VM und Snapshot gleichzeitig verloren.</li>
              <li>Ein Snapshot ist nur eine <strong>Differenzdatei</strong>, die von der Basisfestplatte abhängt. Lange Snapshot-Ketten verschlechtern die Leistung und füllen den Speicher.</li>
              <li>Es fehlen eine Kopie an einem anderen Ort, eine Offline- bzw. unveränderliche Kopie und eine längere Aufbewahrung mit Versionen (3-2-1-Regel).</li>
              <li>Ohne Anwendungsintegration (z. B. VSS) ist die Datenbank im Snapshot nicht sicher konsistent.</li>
            </ul>
            <p><strong>Empfehlung:</strong> eine Backup-Software mit anwendungskonsistenter Image-Sicherung auf ein getrenntes Backup-Ziel plus Auslagerung bzw. unveränderliche Kopie. Snapshots nur kurzfristig nutzen, z. B. vor einem Update, und danach wieder löschen.</p>
            <p><strong>Bewertung:</strong> mindestens zwei stichhaltige Argumente 2 P, begründetes Urteil mit Alternative 2 P.</p>`
        },
        {
          q: `<p><strong>e)</strong> Für die neue Tourenplanungs-Webanwendung schlägt der Softwarehersteller Container statt einer eigenen VM vor. Nenne zwei Unterschiede zwischen Containern und virtuellen Maschinen und einen Vorteil von Containern für diesen Einsatz.</p>`,
          points: 4,
          solution: `
            <table>
              <thead><tr><th>Merkmal</th><th>Virtuelle Maschine</th><th>Container</th></tr></thead>
              <tbody>
                <tr><td>Betriebssystem</td><td>eigenes Gast-Betriebssystem mit eigenem Kernel auf virtueller Hardware</td><td>nutzt den Kernel des Hosts mit, isoliert nur Prozesse (Namespaces, cgroups)</td></tr>
                <tr><td>Größe und Start</td><td>mehrere GB, Start in Minuten</td><td>meist nur MB, Start in Sekunden</td></tr>
                <tr><td>Isolation</td><td>stark (Hypervisor-Grenze)</td><td>schwächer, weil der Kernel geteilt wird</td></tr>
              </tbody>
            </table>
            <p><strong>Vorteil für die Tourenplanung (ein Beispiel genügt):</strong> Der Hersteller liefert ein fertiges Image. Updates werden durch das Austauschen des Images eingespielt, und in Test und Produktion läuft exakt dasselbe Image. Bei Lastspitzen, z. B. morgens bei der Tourenplanung, lassen sich schnell weitere Instanzen hinter einem Load Balancer starten.</p>
            <p><strong>Bewertung:</strong> je Unterschied 1 P, Vorteil mit Bezug zum Einsatz 2 P.</p>`
        }
      ]
    },
    {
      id: "kau-a2", set: "A", part: "kau", points: 25,
      title: "KAIS A2: Speichersystem, RAID und Datensicherung",
      scenario: `
        <p>Für den neuen Cluster der <strong>Küstenfracht Logistik GmbH</strong> wird ein iSCSI-Speichersystem mit <strong>10 Einschüben</strong> beschafft, bestückt mit <strong>10 SAS-SSDs à 3,84 TB</strong>. Die VMs belegen heute <strong>14 TiB</strong>. Für die geplante Nutzungsdauer von fünf Jahren rechnet die Küstenfracht mit <strong>30 % Datenwachstum</strong>.</p>
        <p>Zur Auswahl stehen drei Varianten:</p>
        <ul>
          <li>RAID 5 über 9 SSDs + 1 SSD als Hot Spare</li>
          <li>RAID 6 über 9 SSDs + 1 SSD als Hot Spare</li>
          <li>RAID 10 über alle 10 SSDs (ohne Hot Spare)</li>
        </ul>
        <p><strong>Datensicherung:</strong> Ein separater physischer Backup-Server sichert die VMs. Das Lager arbeitet montags bis freitags in drei Schichten. Geplant sind eine <strong>Vollsicherung freitags um 20:00 Uhr</strong> und <strong>inkrementelle Sicherungen montags bis donnerstags um 20:00 Uhr</strong>. Das Sicherungsfenster reicht jeweils von 20:00 bis 05:00 Uhr (Beginn der Frühschicht). Das Backup-Ziel schreibt dauerhaft mit <strong>600 MiB/s</strong>.</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Berechne für jede Variante die Nutzkapazität in TB und in TiB und gib an, wie viele Festplattenausfälle sicher verkraftet werden. Prüfe, welche Varianten den Kapazitätsbedarf in fünf Jahren decken, und empfiehl begründet eine Variante.</p>`,
          points: 8,
          solution: `
            <p><strong>Kapazitätsbedarf:</strong> 14 TiB ⋅ 1,3 = <strong>18,2 TiB</strong>. Umrechnung: TiB = TB ⋅ 10¹² ÷ 2⁴⁰.</p>
            <table>
              <thead><tr><th>Variante</th><th>Nutzkapazität</th><th>in TiB</th><th>sicher verkraftbare Ausfälle</th><th>≥ 18,2 TiB?</th></tr></thead>
              <tbody>
                <tr><td>RAID 5 (9) + Hot Spare</td><td>(9 − 1) ⋅ 3,84 TB = 30,72 TB</td><td>≈ 27,94 TiB</td><td>1 Platte</td><td>ja</td></tr>
                <tr><td>RAID 6 (9) + Hot Spare</td><td>(9 − 2) ⋅ 3,84 TB = 26,88 TB</td><td>≈ 24,45 TiB</td><td>2 beliebige Platten</td><td>ja</td></tr>
                <tr><td>RAID 10 (10)</td><td>10 ÷ 2 ⋅ 3,84 TB = 19,20 TB</td><td>≈ 17,46 TiB</td><td>1 Platte sicher (höchstens eine je Spiegelpaar, im besten Fall 5)</td><td>nein</td></tr>
              </tbody>
            </table>
            <p><strong>Empfehlung: RAID 6 mit Hot Spare.</strong> Es deckt den Bedarf von 18,2 TiB mit Reserve und verkraftet zwei gleichzeitige Ausfälle. Auch während des Rebuilds auf die Hot-Spare-SSD bleibt das Array noch gegen einen weiteren Ausfall geschützt. Das ist für den Schichtbetrieb wichtig, denn das Speichersystem enthält alle VMs. RAID 5 ist während des Rebuilds ungeschützt, und RAID 10 ist zu klein. Die zusätzliche Schreiblast von RAID 6 (doppelte Parität) fällt bei SSDs kaum ins Gewicht. Hinweis: RAID ersetzt kein Backup.</p>
            <p><strong>Bewertung:</strong> je Variante 2 P (Kapazität in TB und TiB, Ausfalltoleranz), Empfehlung mit Begründung 2 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Am <strong>Donnerstag um 14:00 Uhr</strong> fällt der ERP-Datenbankserver durch einen logischen Fehler aus und muss aus der Sicherung wiederhergestellt werden. Gib an, welche Sicherungen in welcher Reihenfolge zurückgespielt werden müssen, (1) beim geplanten inkrementellen Verfahren und (2) wenn statt inkrementell differenziell gesichert würde. Wie groß ist der Datenverlust?</p>`,
          points: 6,
          solution: `
            <ol>
              <li><strong>Inkrementell:</strong> Vollsicherung vom Freitag der Vorwoche → Inkrement Montag → Inkrement Dienstag → Inkrement Mittwoch (4 Sicherungen, genau in dieser Reihenfolge). Jedes Inkrement enthält nur die Änderungen seit der <em>vorherigen</em> Sicherung.</li>
              <li><strong>Differenziell:</strong> Vollsicherung vom Freitag → Differenzsicherung vom Mittwoch (2 Sicherungen). Eine differenzielle Sicherung enthält alle Änderungen seit der letzten <em>Vollsicherung</em>.</li>
            </ol>
            <p><strong>Datenverlust:</strong> in beiden Fällen alle Änderungen seit der letzten Sicherung am Mittwoch um 20:00 Uhr bis zum Ausfall am Donnerstag um 14:00 Uhr, also <strong>18 Stunden</strong>. Das Verfahren beeinflusst die Dauer der Wiederherstellung, nicht den Datenverlust.</p>
            <p><strong>Bewertung:</strong> inkrementell 2 P, differenziell 2 P, Datenverlust 2 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> Berechne, wie lange die Vollsicherung heute (14 TiB) dauert und ob sie in das Sicherungsfenster passt. Beurteile die Situation nach dem erwarteten Datenwachstum.</p>`,
          points: 4,
          solution: `
            <p><strong>Heute:</strong> 14 TiB = 14 ⋅ 1.048.576 MiB = 14.680.064 MiB<br>
            t = 14.680.064 MiB ÷ 600 MiB/s ≈ 24.467 s ≈ 6,80 h ≈ <strong>6 h 48 min</strong><br>
            Das Fenster von 20:00 bis 05:00 Uhr sind 9 h → die Sicherung passt ✔.</p>
            <p><strong>Nach dem Wachstum:</strong> 18,2 TiB = 19.084.083,2 MiB → t ≈ 31.807 s ≈ 8,84 h ≈ <strong>8 h 50 min</strong>. Das passt nur noch mit rund 10 min Reserve – schon eine kleine Störung verschiebt die Sicherung in die Frühschicht.</p>
            <p><strong>Maßnahmen</strong> (eine genügt): synthetische Vollsicherung bzw. „forever incremental“, die Vollsicherung auf das Wochenende legen (z. B. Samstag nach Ende der Nachtschicht – bis zur Frühschicht am Montag bleibt dann viel Zeit), ein schnelleres Backup-Ziel, Deduplizierung/Komprimierung.</p>
            <p><strong>Bewertung:</strong> Rechnung heute 2 P, Rechnung und Beurteilung nach Wachstum 2 P.</p>`
        },
        {
          q: `<p><strong>d)</strong> Für das ERP-System fordert die Geschäftsführung ein <strong>RPO von 1 Stunde</strong> und ein <strong>RTO von 4 Stunden</strong>. Erkläre beide Begriffe und prüfe, ob das Sicherungskonzept die Vorgaben erfüllt. Die VM des ERP-Datenbankservers ist 1,2 TiB groß, die Wiederherstellung läuft ebenfalls mit 600 MiB/s.</p>`,
          points: 4,
          solution: `
            <ul>
              <li><strong>RPO</strong> (Recovery Point Objective): maximal tolerierbarer <strong>Datenverlust</strong>, gemessen als Zeitraum zwischen der letzten Sicherung und dem Ausfall.</li>
              <li><strong>RTO</strong> (Recovery Time Objective): maximal tolerierbare <strong>Ausfallzeit</strong>, bis das System wieder läuft.</li>
            </ul>
            <p><strong>RPO:</strong> Bei einer Sicherung pro Tag können bis zu 24 h Daten verloren gehen (im Beispiel aus b) 18 h) → <strong>nicht erfüllt</strong>. Abhilfe: stündliche Sicherung der Transaktionsprotokolle der Datenbank oder stündliche Replikation der VM auf ein zweites System.</p>
            <p><strong>RTO:</strong> 1,2 TiB = 1.258.291,2 MiB ÷ 600 MiB/s ≈ 2.097 s ≈ <strong>35 min</strong>. Mit Start und Funktionstest bleibt man deutlich unter 4 h → <strong>erfüllt</strong>.</p>
            <p><strong>Bewertung:</strong> Begriffe 2 P, Prüfung von RPO und RTO mit Maßnahme 2 P.</p>`
        },
        {
          q: `<p><strong>e)</strong> Erläutere die 3-2-1-Regel und beschreibe eine Ergänzung, mit der die Sicherungen der Küstenfracht auch einen Ransomware-Angriff überstehen.</p>`,
          points: 3,
          solution: `
            <p><strong>3-2-1-Regel:</strong> mindestens <strong>3</strong> Kopien der Daten (Original + 2 Sicherungen) auf <strong>2</strong> unterschiedlichen Medien- bzw. Speichertypen, davon <strong>1</strong> Kopie an einem anderen Ort (offsite).</p>
            <p><strong>Ergänzung gegen Ransomware (3-2-1-1-0):</strong> eine Kopie <strong>offline oder unveränderlich</strong> (immutable), z. B. LTO-Bänder, die im Tresor einer anderen Niederlassung lagern, oder Objektspeicher mit Object Lock, sodass Angreifer mit Administratorrechten die Sicherung nicht löschen oder verschlüsseln können. Die „0“ steht für null Fehler bei regelmäßigen Wiederherstellungstests. Zusätzlich gehört der Backup-Server nicht in die Domäne und wird mit MFA geschützt.</p>
            <p><strong>Bewertung:</strong> Regel 2 P, Ergänzung 1 P.</p>`
        }
      ]
    },
    {
      id: "kau-a3", set: "A", part: "kau", points: 25,
      title: "KAIS A3: Benutzerkonten per PowerShell anlegen und Rechte vergeben",
      scenario: `
        <p>Die <strong>Küstenfracht Logistik GmbH</strong> stellt zu jeder Saison zahlreiche Aushilfen für Lager und Disposition ein. Die Personalabteilung exportiert die neuen Mitarbeitenden als CSV-Datei. Ein Kollege hat dafür ein PowerShell-Skript geschrieben, das du prüfen und weiterentwickeln sollst.</p>
        <p><strong>Datei C:\\Skripte\\neue_mitarbeiter.csv</strong></p>
        <pre><code>Vorname;Nachname;Abteilung
Jan;Petersen;Disposition
Anna;Meier;Buchhaltung
Jana;Petersen;Lager
Tim;Hansen;Lager</code></pre>
        <p><strong>Skript C:\\Skripte\\neue_konten.ps1</strong></p>
        <pre><code># Neue Benutzerkonten aus der Personalliste anlegen
Import-Module ActiveDirectory
$liste   = Import-Csv -Path "C:\\Skripte\\neue_mitarbeiter.csv" -Delimiter ";"
$zaehler = 0
foreach ($ma in $liste) {
    $sam = ($ma.Vorname.Substring(0,1) + "." + $ma.Nachname).ToLower()
    if (Get-ADUser -Filter "SamAccountName -eq '$sam'") {
        Write-Output "$sam existiert bereits"
    }
    else {
        $pw = ConvertTo-SecureString "Kuestenfracht2026!" -AsPlainText -Force
        $param = @{
            Name                  = $ma.Vorname + " " + $ma.Nachname
            GivenName             = $ma.Vorname
            Surname               = $ma.Nachname
            SamAccountName        = $sam
            Path                  = "OU=" + $ma.Abteilung + ",OU=Benutzer,DC=kuestenfracht,DC=local"
            AccountPassword       = $pw
            ChangePasswordAtLogon = $true
            Enabled               = $true
        }
        New-ADUser @param
        Add-ADGroupMember -Identity ("G_" + $ma.Abteilung) -Members $sam
        $zaehler++
    }
}
Write-Output "$zaehler Konten angelegt"</code></pre>
        <p>Im Active Directory existiert bereits ein Konto <code>a.meier</code>. Gehe davon aus, dass neu angelegte Konten sofort von <code>Get-ADUser</code> gefunden werden.</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Führe einen Schreibtischtest für die vier Zeilen der CSV-Datei durch. Gib für jede Zeile den Wert von <code>$sam</code>, die Aktion des Skripts und den Stand von <code>$zaehler</code> an und notiere die vollständige Ausgabe.</p>`,
          points: 5,
          solution: `
            <table>
              <thead><tr><th>Zeile</th><th>$sam</th><th>Aktion</th><th>$zaehler danach</th></tr></thead>
              <tbody>
                <tr><td>Jan Petersen</td><td>j.petersen</td><td>Konto wird angelegt, Mitglied in G_Disposition</td><td>1</td></tr>
                <tr><td>Anna Meier</td><td>a.meier</td><td>existiert bereits → kein Konto</td><td>1</td></tr>
                <tr><td>Jana Petersen</td><td>j.petersen</td><td>existiert bereits (gerade in Zeile 1 angelegt) → kein Konto</td><td>1</td></tr>
                <tr><td>Tim Hansen</td><td>t.hansen</td><td>Konto wird angelegt, Mitglied in G_Lager</td><td>2</td></tr>
              </tbody>
            </table>
            <p><strong>Ausgabe:</strong></p>
            <pre><code>a.meier existiert bereits
j.petersen existiert bereits
2 Konten angelegt</code></pre>
            <p><strong>Bewertung:</strong> je Zeile 1 P, vollständige Ausgabe 1 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Jana Petersen erhält kein Konto. Ergänze das Skript (PowerShell oder Pseudocode) so, dass bei einem bereits vergebenen Anmeldenamen eine laufende Nummer angehängt wird: <code>j.petersen2</code>, <code>j.petersen3</code> usw. Gib an, welche Zeilen ersetzt werden.</p>`,
          points: 5,
          solution: `
            <p>Die Zeile <code>$sam = …</code> und die <code>if/else</code>-Verzweigung werden ersetzt. Eine Schleife sucht so lange, bis ein freier Name gefunden ist; danach wird das Konto immer angelegt:</p>
            <pre><code>$basis = ($ma.Vorname.Substring(0,1) + "." + $ma.Nachname).ToLower()
$sam   = $basis
$nr    = 2
while (Get-ADUser -Filter "SamAccountName -eq '$sam'") {
    $sam = $basis + $nr
    $nr++
}
# ab hier wie bisher: Passwort, $param, New-ADUser, Add-ADGroupMember, $zaehler++</code></pre>
            <p>Ergebnis mit den Testdaten: Jana Petersen erhält <code>j.petersen2</code>. Anna Meier bekommt allerdings jetzt <code>a.meier2</code> – ob die Personalabteilung wirklich eine zweite Anna Meier eingestellt hat, sollte das Skript zusätzlich melden (z. B. Ausgabe „Name doppelt – bitte prüfen“).</p>
            <p><strong>Zusatzwissen:</strong> Der Anmeldename (sAMAccountName) darf höchstens 20 Zeichen lang sein. Bei langen Nachnamen muss das Skript kürzen.</p>
            <p><strong>Bewertung:</strong> Schleife mit korrekter Bedingung 2 P, Anhängen und Hochzählen der Nummer 2 P, Initialisierung/richtige Einbindung 1 P. Syntaxfehler im Pseudocode werden toleriert, wenn die Struktur eindeutig ist.</p>`
        },
        {
          q: `<p><strong>c)</strong> Nenne zwei Sicherheitsprobleme des Skripts im Umgang mit dem Startpasswort und schlage jeweils eine Verbesserung vor.</p>`,
          points: 4,
          solution: `
            <ul>
              <li><strong>Problem:</strong> Das Startpasswort steht im Klartext im Skript. Jeder, der die Datei lesen kann, kennt das Passwort aller neuen Konten. <strong>Verbesserung:</strong> für jedes Konto ein zufälliges Passwort erzeugen und über einen getrennten Weg übergeben (z. B. verschlossener Brief über die Personalabteilung). Den Skriptordner per NTFS-Rechten nur für Administratoren lesbar machen.</li>
              <li><strong>Problem:</strong> Alle Konten haben <strong>dasselbe</strong> Passwort und sind <strong>sofort aktiviert</strong>. Kennt jemand das Muster, kann er sich vor dem ersten Arbeitstag des neuen Mitarbeiters anmelden. <strong>Verbesserung:</strong> Konten deaktiviert anlegen (<code>Enabled = $false</code>) und erst am ersten Arbeitstag freischalten oder ein Ablaufdatum setzen.</li>
            </ul>
            <p>Positiv: <code>ChangePasswordAtLogon = $true</code> erzwingt bereits eine Passwortänderung bei der ersten Anmeldung.</p>
            <p><strong>Bewertung:</strong> je Problem mit passender Verbesserung 2 P.</p>`
        },
        {
          q: `<p><strong>d)</strong> Auf dem Dateiserver <code>FS01</code> gibt es die Freigabe <code>\\\\FS01\\Lager</code>. Die Beschäftigten des Lagers sollen dort Dateien ändern, die Geschäftsleitung soll nur lesen dürfen. (1) Beschreibe die Umsetzung nach dem <strong>AGDLP-Prinzip</strong> mit sinnvollen Gruppennamen. (2) Ein Schichtleiter ist Mitglied von <code>G_Lager</code> und erhält darüber das NTFS-Recht „Ändern“. Auf der Freigabe ist für „Authentifizierte Benutzer“ nur „Lesen“ eingetragen. Welche effektive Berechtigung hat er beim Zugriff über das Netzwerk und bei einer lokalen Anmeldung am Server?</p>`,
          points: 6,
          solution: `
            <p><strong>(1) AGDLP</strong> – <strong>A</strong>ccounts in <strong>G</strong>lobale Gruppen, diese in <strong>D</strong>omänen<strong>l</strong>okale Gruppen, und nur diese erhalten <strong>P</strong>ermissions:</p>
            <table>
              <thead><tr><th>Accounts</th><th>Globale Gruppe (Rolle)</th><th>Domänenlokale Gruppe (Ressource)</th><th>Permission (NTFS auf dem Lager-Ordner)</th></tr></thead>
              <tbody>
                <tr><td>Konten der Lager-Beschäftigten</td><td>G_Lager</td><td>DL_Lager_Aendern</td><td>Ändern</td></tr>
                <tr><td>Konten der Geschäftsleitung</td><td>G_Geschaeftsleitung</td><td>DL_Lager_Lesen</td><td>Lesen, Ausführen</td></tr>
              </tbody>
            </table>
            <p>Die Freigabeberechtigung wird großzügig gesetzt (z. B. „Authentifizierte Benutzer: Ändern“), die eigentliche Steuerung erfolgt über NTFS. Vorteil: Wechselt jemand die Abteilung, ändert man nur die Gruppenmitgliedschaft, nicht die Rechte am Ordner.</p>
            <p><strong>(2) Effektive Berechtigung:</strong></p>
            <ul>
              <li><strong>Über das Netzwerk:</strong> Es gilt das <strong>restriktivere</strong> Recht aus Freigabe- und NTFS-Berechtigung: Lesen (Freigabe) und Ändern (NTFS) → <strong>Lesen</strong>.</li>
              <li><strong>Lokal am Server:</strong> Freigabeberechtigungen wirken nur beim Netzwerkzugriff → es gilt nur NTFS → <strong>Ändern</strong>.</li>
            </ul>
            <p><strong>Bewertung:</strong> AGDLP-Kette für beide Rollen 4 P, effektive Rechte 2 P.</p>`
        },
        {
          q: `<p><strong>e)</strong> Das Skript soll künftig an jedem Werktag um 06:00 Uhr automatisch laufen. Beschreibe, wie du es vorher sicher <strong>testest</strong>, mit welchem <strong>Konto</strong> du es automatisch ausführst und wie du die Ausführung <strong>überwachst</strong>.</p>`,
          points: 5,
          solution: `
            <ul>
              <li><strong>Test:</strong> zuerst mit dem Parameter <code>-WhatIf</code> bei <code>New-ADUser</code> und <code>Add-ADGroupMember</code> laufen lassen (zeigt nur, was passieren würde) und mit einer Test-CSV in einer Test-OU prüfen. Erst nach erfolgreichem Test produktiv einsetzen.</li>
              <li><strong>Automatische Ausführung:</strong> Aufgabe in der Windows-Aufgabenplanung (oder per <code>Register-ScheduledTask</code>) mit Trigger „wöchentlich Mo–Fr, 06:00 Uhr“. Ausführung unter einem eigenen <strong>Dienstkonto</strong> (am besten gMSA), dem nur das Anlegen von Benutzern in <code>OU=Benutzer</code> und das Ändern der Abteilungsgruppen delegiert wurde (Least Privilege) – <strong>kein</strong> Domänen-Admin.</li>
              <li><strong>Überwachung:</strong> Ausgaben und Fehler in eine Logdatei schreiben (z. B. <code>Start-Transcript</code> oder <code>try/catch</code> mit <code>Add-Content</code>), das Ergebnis der Aufgabe im Monitoring auswerten und bei Fehlern eine Benachrichtigung an die IT senden. Die CSV-Datei nach der Verarbeitung archivieren, damit sie nicht doppelt verarbeitet wird.</li>
            </ul>
            <p><strong>Bewertung:</strong> Test 2 P, Ausführung mit geeignetem Konto 2 P, Überwachung 1 P.</p>`
        }
      ]
    },
    {
      id: "kau-a4", set: "A", part: "kau", points: 25,
      title: "KAIS A4: USV, Verfügbarkeit und Monitoring im Serverraum",
      scenario: `
        <p>Im Serverraum der <strong>Küstenfracht Logistik GmbH</strong> sollen nach der Konsolidierung folgende Geräte über eine gemeinsame USV abgesichert werden (Wirkleistung im Betrieb):</p>
        <table>
          <thead><tr><th>Gerät</th><th>Anzahl</th><th>Leistung je Gerät</th></tr></thead>
          <tbody>
            <tr><td>Virtualisierungshost</td><td>4</td><td>450 W</td></tr>
            <tr><td>iSCSI-Speichersystem</td><td>1</td><td>600 W</td></tr>
            <tr><td>Core-Switch</td><td>2</td><td>150 W</td></tr>
            <tr><td>Firewall</td><td>1</td><td>80 W</td></tr>
            <tr><td>Backup-Server</td><td>1</td><td>350 W</td></tr>
          </tbody>
        </table>
        <p>Leistungsfaktor der Lasten: <strong>cos φ = 0,9</strong>. Die Nordlicht IT plant <strong>25 % Reserve</strong> auf Schein- und Wirkleistung ein. Angeboten werden drei Online-USV-Modelle: <strong>M1</strong> 3.000 VA / 2.700 W · <strong>M2</strong> 5.000 VA / 4.500 W · <strong>M3</strong> 6.000 VA / 5.400 W.</p>
        <p><strong>Auszug aus dem Datenblatt von M2:</strong></p>
        <pre><code>Typical runtime (new batteries, 25 °C):
  50 % load ...... 19 min
  70 % load ...... 12 min
 100 % load .......  7 min
Battery service life: 3–5 years (capacity decreases with age)</code></pre>
        <p>Der geordnete Shutdown aller VMs, Hosts und des Speichersystems dauert laut Test <strong>11 Minuten</strong> und startet sofort bei Netzausfall.</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Berechne die benötigte Schein- und Wirkleistung der USV einschließlich Reserve und wähle begründet ein Modell aus.</p>`,
          points: 7,
          solution: `
            <p><strong>Wirkleistung:</strong> P = 4 ⋅ 450 W + 600 W + 2 ⋅ 150 W + 80 W + 350 W = 1.800 + 600 + 300 + 80 + 350 = <strong>3.130 W</strong></p>
            <p><strong>Scheinleistung:</strong> S = P ÷ cos φ = 3.130 W ÷ 0,9 ≈ <strong>3.477,8 VA</strong></p>
            <p><strong>Mit 25 % Reserve:</strong> S = 3.477,8 VA ⋅ 1,25 ≈ <strong>4.347,2 VA</strong> · P = 3.130 W ⋅ 1,25 = <strong>3.912,5 W</strong></p>
            <p><strong>Auswahl: M2 (5.000 VA / 4.500 W)</strong> – beide Werte werden eingehalten (5.000 VA ≥ 4.347,2 VA und 4.500 W ≥ 3.912,5 W). M1 ist zu klein, M3 wäre überdimensioniert (teurer, schlechterer Wirkungsgrad bei geringer Auslastung).</p>
            <div class="callout achtung"><strong>Prüfungsfalle:</strong> Eine USV muss <strong>beide</strong> Grenzen einhalten – VA <em>und</em> Watt. Wer nur die VA-Angabe vergleicht, übersieht, dass viele USVs in Watt weniger leisten.</div>
            <p><strong>Bewertung:</strong> Summe Wirkleistung 2 P, Scheinleistung 2 P, Reserve 1 P, begründete Auswahl mit Prüfung von VA und W 2 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Beurteile anhand des Datenblatts, ob die Überbrückungszeit von M2 für den geordneten Shutdown ausreicht – auch nach einigen Betriebsjahren.</p>`,
          points: 3,
          solution: `
            <p>Auslastung von M2: 3.130 W ÷ 4.500 W ≈ <strong>70 %</strong> → laut Datenblatt ca. <strong>12 min</strong> Überbrückungszeit mit neuen Batterien.</p>
            <p>Der Shutdown braucht 11 min → heute reicht es nur mit <strong>1 min Reserve</strong>. Das Datenblatt weist darauf hin, dass die Batteriekapazität mit dem Alter abnimmt. Schon bei 80 % Restkapazität blieben nur etwa 12 ⋅ 0,8 ≈ 9,6 min → <strong>nicht ausreichend</strong>.</p>
            <p><strong>Empfehlung:</strong> ein zusätzliches Batteriemodul (Extended Battery Module) einplanen, nicht kritische Lasten (z. B. Backup-Server) zuerst herunterfahren oder den Shutdown beschleunigen. Batterien regelmäßig testen und nach Herstellerangabe tauschen.</p>
            <p><strong>Bewertung:</strong> Auslastung und Laufzeit ablesen 1 P, Beurteilung inkl. Batteriealterung 2 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> Die Angebote sind als „VFI“ gekennzeichnet. Beschreibe die USV-Klassen VFD, VI und VFI und begründe, warum VFI für den Serverraum geeignet ist.</p>`,
          points: 3,
          solution: `
            <ul>
              <li><strong>VFD</strong> (Offline/Standby): Die Last hängt direkt am Netz. Erst bei einem Ausfall schaltet die USV mit einigen Millisekunden Umschaltzeit auf Batterie um. Schutz nur gegen Netzausfall.</li>
              <li><strong>VI</strong> (Line-Interactive): wie VFD, gleicht aber zusätzlich Spannungsschwankungen über einen Regeltransformator aus.</li>
              <li><strong>VFI</strong> (Online, Doppelwandler): Die Last wird ständig über Gleichrichter und Wechselrichter versorgt. Ausgangsspannung und -frequenz sind unabhängig vom Netz, es gibt <strong>keine Umschaltzeit</strong>.</li>
            </ul>
            <p><strong>Begründung:</strong> Der Serverraum versorgt den Schichtbetrieb rund um die Uhr. VFI schützt gegen alle Netzstörungen (Ausfall, Spannungs- und Frequenzschwankungen, Spitzen) ohne Umschaltunterbrechung – das ist für Server und Speichersystem die sicherste Klasse.</p>
            <p><strong>Bewertung:</strong> drei Klassen je 0,5 P, Begründung 1,5 P.</p>`
        },
        {
          q: `<p><strong>d)</strong> Für die ERP-Umgebung sind folgende Verfügbarkeiten bekannt: Stromversorgung über die USV 99,9 %, Speichersystem 99,95 %, Hypervisor-Cluster 99,99 % sowie zwei redundant (parallel) arbeitende Core-Switches mit je 99,8 %. Alle Komponenten werden benötigt. Berechne die Gesamtverfügbarkeit und die erwartete Ausfallzeit pro Jahr (8.760 h). Die Geschäftsführung akzeptiert höchstens <strong>8 Stunden</strong> Ausfall pro Jahr. Prüfe die Anforderung und schlage die wirksamste Verbesserung vor.</p>`,
          points: 7,
          solution: `
            <div class="callout formel"><strong>Formeln:</strong> parallel A = 1 − (1 − A₁) ⋅ (1 − A₂) · seriell A = A₁ ⋅ A₂ ⋅ … · Ausfallzeit = (1 − A) ⋅ 8.760 h</div>
            <p><strong>Core-Switches parallel:</strong> A = 1 − (1 − 0,998)² = 1 − 0,002² = 1 − 0,000004 = <strong>0,999996</strong></p>
            <p><strong>Gesamt (seriell):</strong> A = 0,999 ⋅ 0,9995 ⋅ 0,9999 ⋅ 0,999996 ≈ <strong>0,998397 ≈ 99,84 %</strong></p>
            <p><strong>Ausfallzeit:</strong> (1 − 0,998397) ⋅ 8.760 h ≈ <strong>14,0 h pro Jahr</strong> → die Anforderung (≤ 8 h, also A ≥ 1 − 8 ÷ 8.760 ≈ 99,909 %) ist <strong>nicht erfüllt</strong>.</p>
            <p><strong>Verbesserung:</strong> Das schwächste Glied ist die <strong>USV</strong> (99,9 %, einfach vorhanden = Single Point of Failure). Mit einer zweiten USV und getrennter A/B-Einspeisung (Server mit redundanten Netzteilen) gilt: 1 − 0,001² = 0,999999 → Gesamt ≈ 0,999999 ⋅ 0,9995 ⋅ 0,9999 ⋅ 0,999996 ≈ 0,999395 → Ausfallzeit ≈ <strong>5,3 h pro Jahr</strong> ✔. Als Nächstes wäre das Speichersystem (99,95 %) zu verbessern, z. B. mit zwei Controllern oder Spiegelung auf ein zweites System.</p>
            <p><strong>Bewertung:</strong> Parallelschaltung 2 P, Gesamtverfügbarkeit 2 P, Ausfallzeit mit Bewertung 1 P, begründete Verbesserung (SPOF erkannt) 2 P.</p>`
        },
        {
          q: `<p><strong>e)</strong> Montags gegen 08:15 Uhr klagen Mitarbeitende über einen sehr langsamen Terminalserver TS03. Das Monitoring zeigt: CPU 38 %, Arbeitsspeicher 97 % belegt, Auslagerung 2.400 Seiten/s (sonst &lt; 50), Datenträger-Warteschlange 14 (sonst &lt; 2), Netzwerk 12 %. Bestimme den Engpass mit Begründung, nenne zwei Maßnahmen und schlage sinnvolle Schwellwerte für eine Alarmierung des Arbeitsspeichers vor.</p>`,
          points: 5,
          solution: `
            <p><strong>Engpass: Arbeitsspeicher.</strong> Bei 97 % RAM-Belegung lagert das System Speicherseiten auf die Festplatte aus (2.400 Seiten/s). Diese Auslagerung erzeugt die hohe Datenträger-Warteschlange – der Datenträger ist also Folge, nicht Ursache. CPU und Netzwerk sind unauffällig.</p>
            <p><strong>Maßnahmen</strong> (zwei genügen):</p>
            <ul>
              <li>RAM der VM erhöhen (z. B. von 48 auf 64 GiB) – im Cluster ist dafür nach Aufgabe A1 Reserve vorhanden.</li>
              <li>Benutzer gleichmäßiger auf die Terminalserver verteilen (Verbindungsbroker/Lastverteilung) oder einen weiteren Terminalserver bereitstellen.</li>
              <li>Speicherhungrige Prozesse ermitteln (z. B. Browser mit vielen Tabs) und begrenzen bzw. Anwendungen optimieren.</li>
            </ul>
            <p><strong>Schwellwerte:</strong> z. B. Warnung ab 80 % und kritisch ab 90 % RAM-Belegung über mindestens 5 Minuten (damit kurze Spitzen keinen Fehlalarm auslösen), zusätzlich ein Alarm bei dauerhaft hoher Auslagerungsrate.</p>
            <p><strong>Bewertung:</strong> Engpass mit Begründung 2 P, zwei Maßnahmen 2 P, Schwellwerte 1 P.</p>`
        }
      ]
    },
    /* ===== Probeklausur B – Konzeption und Administration von IT-Systemen (KAIS), 90 min, 4 Aufgaben = 100 P ===== */
    {
      id: "kau-b1", set: "B", part: "kau", points: 25,
      title: "KAIS B1: Cloud-Dienste auswählen und das Kundenportal hochverfügbar betreiben",
      scenario: `
        <p><strong>Ausgangssituation (gilt für die ganze Probeklausur KAIS B):</strong> Die <strong>Eiderland Solar GmbH</strong> mit Sitz in Tönning und einer Niederlassung in Heide plant und montiert Photovoltaikanlagen, Batteriespeicher und Wärmepumpen (140 Beschäftigte, davon 60 Monteure im Außendienst). Du betreust den Kunden als Auszubildende/r der <strong>Nordlicht IT GmbH</strong> in Heide. Alle Firmen und Zahlen sind frei erfunden.</p>
        <p>Die Eiderland Solar will mehrere Dienste in die Cloud verlagern. Besonders wichtig ist das neue <strong>Kundenportal</strong>, in dem Kunden ihre Anlagen, Ertragsdaten, Rechnungen und Wartungstermine sehen. Es speichert Namen, Anschriften, Verbrauchs- und Ertragsdaten sowie Bankverbindungen. Das Portal soll auf <strong>drei Webservern hinter einem Load Balancer</strong> laufen.</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Ordne die folgenden Vorhaben jeweils einem Cloud-Servicemodell (IaaS, PaaS, SaaS) zu und begründe kurz.</p>
            <ol>
              <li>E-Mail, Kalender und Chat für alle Beschäftigten als fertiger Online-Dienst</li>
              <li>Das Kundenportal läuft auf einer vom Anbieter verwalteten Web-App-Plattform mit verwalteter Datenbank; die Nordlicht IT liefert nur den Programmcode.</li>
              <li>Eine ältere Planungssoftware für PV-Anlagen läuft nur unter Windows Server; dafür wird eine virtuelle Maschine gemietet, deren Betriebssystem die Nordlicht IT selbst installiert und patcht.</li>
              <li>Die Monteure erfassen ihre Arbeitszeiten in einer fertigen Browser-Anwendung, die pro Nutzer und Monat abgerechnet wird.</li>
            </ol>`,
          points: 4,
          solution: `
            <table>
              <thead><tr><th>Nr.</th><th>Modell</th><th>Begründung</th></tr></thead>
              <tbody>
                <tr><td>1</td><td><strong>SaaS</strong></td><td>fertige Anwendung, der Kunde nutzt sie nur und verwaltet Benutzer und Daten</td></tr>
                <tr><td>2</td><td><strong>PaaS</strong></td><td>Anbieter stellt Laufzeitumgebung und Datenbank bereit, der Kunde bringt nur Code und Daten mit</td></tr>
                <tr><td>3</td><td><strong>IaaS</strong></td><td>gemietet wird nur die virtuelle Infrastruktur, Betriebssystem und Anwendung liegen in Kundenverantwortung</td></tr>
                <tr><td>4</td><td><strong>SaaS</strong></td><td>fertige Anwendung im Browser, Abrechnung pro Nutzer (Abo)</td></tr>
              </tbody>
            </table>
            <p><strong>Merke:</strong> Von IaaS über PaaS zu SaaS übernimmt der Anbieter immer mehr Schichten (Modell der geteilten Verantwortung). Für die Daten und die Benutzerverwaltung bleibt der Kunde aber immer selbst verantwortlich.</p>
            <p><strong>Bewertung:</strong> je richtiger Zuordnung mit Begründung 1 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Nenne vier Kriterien, nach denen die Eiderland Solar den Cloud-Anbieter für das Kundenportal mit Blick auf Datenschutz und Informationssicherheit auswählen sollte, und erläutere, warum mit dem Anbieter ein <strong>Vertrag zur Auftragsverarbeitung</strong> geschlossen werden muss.</p>`,
          points: 6,
          solution: `
            <p><strong>Kriterien</strong> (vier genügen, je 1 P):</p>
            <ul>
              <li><strong>Standort der Rechenzentren</strong> in der EU bzw. im EWR; bei Anbietern aus Drittländern nur mit geeigneter Rechtsgrundlage (z. B. Zertifizierung nach dem EU-US Data Privacy Framework oder Standardvertragsklauseln), dazu das Zugriffsrisiko durch ausländische Behörden bewerten.</li>
              <li><strong>Nachweise und Zertifizierungen</strong>, z. B. ISO/IEC 27001 oder BSI-C5-Testat.</li>
              <li><strong>Verschlüsselung</strong> bei der Übertragung und bei der Speicherung, möglichst mit eigener Schlüsselverwaltung.</li>
              <li><strong>SLA</strong> mit zugesicherter Verfügbarkeit, Supportzeiten und Regelungen zur Datensicherung.</li>
              <li><strong>Exit-Strategie</strong>: Datenexport in offenen Formaten und Löschung nach Vertragsende.</li>
              <li>Rollen- und Rechtekonzept mit MFA, Protokollierung der Zugriffe.</li>
            </ul>
            <p><strong>Auftragsverarbeitung (2 P):</strong> Der Cloud-Anbieter verarbeitet personenbezogene Daten der Kunden <em>im Auftrag</em> der Eiderland Solar. Diese bleibt Verantwortliche im Sinne der DSGVO. Nach <strong>Art. 28 DSGVO</strong> ist dafür ein Vertrag nötig, der den Anbieter an die Weisungen bindet und Zweck, Art der Daten, TOM, Unterauftragnehmer, Kontrollrechte und die Löschung nach Vertragsende regelt. Ohne diesen Vertrag wäre die Weitergabe der Daten an den Anbieter unzulässig.</p>`
        },
        {
          q: `<p><strong>c)</strong> Die Webserver WEB1 und WEB2 haben je 8 vCPU, WEB3 nur 4 vCPU. In der Spitze kommen 1.500 Anfragen pro Minute an. (1) Berechne die Verteilung bei <strong>Round Robin</strong> und erkläre das Problem. (2) Berechne die Verteilung bei <strong>gewichtetem Round Robin</strong> passend zur Leistung. (3) Erkläre das Verfahren <strong>Least Connections</strong>. (4) Wozu dienen <strong>Health Checks</strong> des Load Balancers?</p>`,
          points: 6,
          solution: `
            <ol>
              <li><strong>Round Robin:</strong> Anfragen werden der Reihe nach verteilt → 1.500 ÷ 3 = <strong>500 Anfragen/min je Server</strong>. WEB3 hat nur halb so viel Leistung, bekommt aber gleich viel Last und wird zuerst überlastet (lange Antwortzeiten).</li>
              <li><strong>Gewichtet</strong> im Verhältnis der vCPUs 8 : 8 : 4 = 2 : 2 : 1 (5 Anteile): WEB1 = WEB2 = 1.500 ⋅ 2 ÷ 5 = <strong>600</strong>, WEB3 = 1.500 ⋅ 1 ÷ 5 = <strong>300 Anfragen/min</strong>.</li>
              <li><strong>Least Connections:</strong> Eine neue Anfrage geht an den Server, der gerade die wenigsten aktiven Verbindungen hat. Das passt sich automatisch an unterschiedlich lange Anfragen und unterschiedliche Leistung an.</li>
              <li><strong>Health Checks:</strong> Der Load Balancer prüft regelmäßig, ob jeder Server antwortet (z. B. HTTP-Abfrage einer Statusseite). Ein ausgefallener Server erhält keine Anfragen mehr und wird nach seiner Wiederherstellung automatisch wieder eingebunden.</li>
            </ol>
            <p><strong>Bewertung:</strong> (1) 1 P, (2) 2 P, (3) 2 P, (4) 1 P.</p>`
        },
        {
          q: `<p><strong>d)</strong> Vor dem Load Balancer soll ein <strong>Reverse Proxy</strong> eingesetzt werden. Nenne zwei Aufgaben eines Reverse Proxy. Erkläre außerdem den Unterschied zwischen <strong>horizontaler</strong> und <strong>vertikaler Skalierung</strong> und ordne das Portal-Konzept zu.</p>`,
          points: 4,
          solution: `
            <p><strong>Aufgaben eines Reverse Proxy</strong> (zwei genügen):</p>
            <ul>
              <li><strong>TLS-Terminierung</strong>: Zertifikat und Verschlüsselung zentral auf dem Proxy, die Webserver werden entlastet.</li>
              <li><strong>Schutz der Backends</strong>: Die internen Server sind von außen nicht direkt erreichbar, ihre Adressen bleiben verborgen; oft mit Web Application Firewall.</li>
              <li><strong>Caching</strong> statischer Inhalte (Bilder, Skripte) und Komprimierung.</li>
            </ul>
            <p><strong>Skalierung:</strong> <strong>Vertikal</strong> („scale up“) = einen Server stärker machen (mehr CPU/RAM) – stößt an Hardwaregrenzen, bleibt ein Single Point of Failure und braucht oft einen Neustart. <strong>Horizontal</strong> („scale out“) = weitere gleichartige Server hinzufügen – fast beliebig erweiterbar und gleichzeitig redundant. Das Portal mit drei Webservern hinter einem Load Balancer ist <strong>horizontal</strong> skaliert.</p>
            <p><strong>Bewertung:</strong> zwei Aufgaben je 1 P, Skalierung 2 P.</p>`
        },
        {
          q: `<p><strong>e)</strong> Vergleiche die Kosten über <strong>3 Jahre</strong>. Alternative 1 (eigener Server im Haus): Anschaffung 9.600 €, Einrichtung 1.200 €, durchschnittliche Leistungsaufnahme 450 W im Dauerbetrieb, Strompreis 0,32 €/kWh, Wartungsvertrag 600 € pro Jahr. Alternative 2 (Cloud-Paket inklusive Load Balancer, Datenbank und Backup): 390 € pro Monat. Nenne außerdem je einen Gesichtspunkt, der nicht in der Rechnung steckt.</p>`,
          points: 5,
          solution: `
            <p><strong>Alternative 1 (im Haus):</strong><br>
            Energie pro Jahr: 0,45 kW ⋅ 8.760 h = 3.942 kWh → 3.942 kWh ⋅ 0,32 €/kWh = 1.261,44 € → 3 Jahre: <strong>3.784,32 €</strong><br>
            Gesamt: 9.600 € + 1.200 € + 3.784,32 € + 3 ⋅ 600 € = <strong>16.384,32 €</strong></p>
            <p><strong>Alternative 2 (Cloud):</strong> 36 ⋅ 390 € = <strong>14.040,00 €</strong></p>
            <p><strong>Ergebnis:</strong> Die Cloud ist über drei Jahre um <strong>2.344,32 €</strong> günstiger.</p>
            <p><strong>Nicht berücksichtigt</strong> (Beispiele): Bei Alternative 1 fehlen Kosten für Klimatisierung, USV-Anteil, Admin-Arbeitszeit und Redundanz – mit nur einem Server wäre das Portal nicht hochverfügbar. Bei Alternative 2 entstehen Abhängigkeit vom Anbieter (Lock-in), Abhängigkeit von der Internetanbindung und mögliche Preissteigerungen bzw. nutzungsabhängige Zusatzkosten (z. B. Datenverkehr).</p>
            <p><strong>Bewertung:</strong> Alternative 1 2 P, Alternative 2 und Vergleich 1 P, qualitative Gesichtspunkte 2 P.</p>`
        }
      ]
    },
    {
      id: "kau-b2", set: "B", part: "kau", points: 25,
      title: "KAIS B2: Inventar- und Ticketdatenbank – UML und SQL",
      scenario: `
        <p>Die <strong>Eiderland Solar GmbH</strong> verwaltet ihre IT-Geräte und Störungsmeldungen in einer relationalen Datenbank. Das Datenmodell liegt als UML-Klassendiagramm (vereinfacht, ohne Attribute) und als Tabellenbeschreibung vor:</p>
        <pre class="ascii">┌───────────────┐
│  Mitarbeiter  │
└───────┬───────┘
        │ 0..1
        │  nutzt
        │ 0..*
┌───────┴───────┐
│    Geraet     │
└───────┬───────┘
        │ 1
        │  betrifft
        │ 0..*
┌───────┴───────┐
│    Ticket     │
└───────────────┘</pre>
        <table>
          <thead><tr><th>Tabelle</th><th>Spalten (PK = Primärschlüssel, FK = Fremdschlüssel)</th></tr></thead>
          <tbody>
            <tr><td>Mitarbeiter</td><td>MitarbeiterID (PK), Vorname, Nachname, Standort</td></tr>
            <tr><td>Geraet</td><td>GeraetID (PK), InventarNr, Typ, Hersteller, Kaufdatum, Preis, MitarbeiterID (FK → Mitarbeiter, darf NULL sein)</td></tr>
            <tr><td>Ticket</td><td>TicketID (PK), GeraetID (FK → Geraet), Eroeffnet, Status, Prioritaet</td></tr>
          </tbody>
        </table>
        <p>Werte für <code>Typ</code> sind z. B. 'Notebook', 'Tablet', 'Drucker'; <code>Status</code> ist 'offen', 'in Bearbeitung' oder 'geschlossen'; <code>Standort</code> ist 'Toenning' oder 'Heide'.</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> (1) Erläutere die beiden Beziehungen des Klassendiagramms anhand ihrer Multiplizitäten. (2) Im nächsten Schritt sollen weitere Klassen ergänzt werden: Ein <em>Ticket</em> besteht aus mehreren <em>Ticketeinträgen</em> (Kommentare der Techniker), die ohne das Ticket keinen Sinn haben. Ein <em>Server</em> enthält mehrere <em>Festplatten</em>, die ausgebaut und in einem anderen Server weiterverwendet werden können. Entscheide jeweils begründet, ob eine <strong>Aggregation</strong> oder eine <strong>Komposition</strong> vorliegt, und beschreibe die Notation.</p>`,
          points: 4,
          solution: `
            <p><strong>(1) Multiplizitäten:</strong></p>
            <ul>
              <li>Mitarbeiter – Geraet: Ein Mitarbeiter nutzt <strong>kein, ein oder viele</strong> Geräte (0..*). Ein Gerät ist <strong>höchstens einem</strong> Mitarbeiter zugeordnet, kann aber auch niemandem zugeordnet sein (0..1, z. B. Lagergerät) – deshalb darf der Fremdschlüssel NULL sein.</li>
              <li>Geraet – Ticket: Zu einem Gerät gibt es <strong>beliebig viele</strong> Tickets (0..*). Jedes Ticket betrifft <strong>genau ein</strong> Gerät (1).</li>
            </ul>
            <p><strong>(2) Aggregation oder Komposition:</strong></p>
            <ul>
              <li>Ticket – Ticketeintrag: <strong>Komposition</strong> („existenzabhängiges Teil-Ganzes“). Wird das Ticket gelöscht, werden auch seine Einträge gelöscht. Notation: <strong>ausgefüllte Raute</strong> am Ganzen (Ticket).</li>
              <li>Server – Festplatte: <strong>Aggregation</strong> („loses Teil-Ganzes“). Die Festplatte existiert unabhängig weiter und kann einem anderen Server zugeordnet werden. Notation: <strong>leere Raute</strong> am Ganzen (Server).</li>
            </ul>
            <p><strong>Bewertung:</strong> (1) 2 P, (2) je Beziehung 1 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Erstelle eine SQL-Abfrage, die für alle <strong>Notebooks</strong> die Inventarnummer, den Hersteller sowie Vor- und Nachnamen der zugeordneten Mitarbeitenden am <strong>Standort Heide</strong> ausgibt, sortiert nach Nachname aufsteigend.</p>`,
          points: 5,
          solution: `
            <pre><code>SELECT g.InventarNr, g.Hersteller, m.Vorname, m.Nachname
FROM Geraet g
INNER JOIN Mitarbeiter m ON g.MitarbeiterID = m.MitarbeiterID
WHERE g.Typ = 'Notebook'
  AND m.Standort = 'Heide'
ORDER BY m.Nachname ASC;</code></pre>
            <p>Der <code>INNER JOIN</code> liefert nur Geräte, die einem Mitarbeiter zugeordnet sind – nicht zugeordnete Notebooks haben keinen Standort über den Mitarbeiter und gehören hier nicht dazu.</p>
            <p><strong>Bewertung:</strong> SELECT-Liste 1 P, JOIN mit richtiger Verknüpfung 2 P, WHERE mit beiden Bedingungen 1 P, ORDER BY 1 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> Die IT-Leitung möchte wissen, bei welchen Gerätetypen es besonders viele Störungen gibt. Erstelle eine SQL-Abfrage, die je Gerätetyp die Anzahl der <strong>offenen</strong> Tickets ausgibt. Es sollen nur Typen mit <strong>mehr als 5</strong> offenen Tickets erscheinen, absteigend nach Anzahl sortiert. Erkläre den Unterschied zwischen <code>WHERE</code> und <code>HAVING</code>.</p>`,
          points: 6,
          solution: `
            <pre><code>SELECT g.Typ, COUNT(t.TicketID) AS AnzahlOffen
FROM Ticket t
INNER JOIN Geraet g ON t.GeraetID = g.GeraetID
WHERE t.Status = 'offen'
GROUP BY g.Typ
HAVING COUNT(t.TicketID) &gt; 5
ORDER BY AnzahlOffen DESC;</code></pre>
            <p><strong>WHERE</strong> filtert <strong>einzelne Datensätze vor</strong> der Gruppierung (hier: nur offene Tickets). <strong>HAVING</strong> filtert <strong>Gruppen nach</strong> der Gruppierung und darf deshalb Aggregatfunktionen wie <code>COUNT()</code> enthalten (hier: nur Typen mit mehr als 5 Tickets).</p>
            <p><strong>Bewertung:</strong> JOIN 1 P, WHERE 1 P, GROUP BY mit COUNT 1 P, HAVING 1 P, ORDER BY 1 P, Erklärung 1 P.</p>`
        },
        {
          q: `<p><strong>d)</strong> Der Mitarbeiter mit der <code>MitarbeiterID</code> 1042 verlässt das Unternehmen. Seine Geräte sollen danach niemandem mehr zugeordnet sein, anschließend soll sein Datensatz gelöscht werden. Gib beide SQL-Anweisungen an und erkläre, warum das Löschen ohne den ersten Schritt fehlschlagen kann.</p>`,
          points: 4,
          solution: `
            <pre><code>UPDATE Geraet
SET MitarbeiterID = NULL
WHERE MitarbeiterID = 1042;

DELETE FROM Mitarbeiter
WHERE MitarbeiterID = 1042;</code></pre>
            <p><strong>Begründung:</strong> Der Fremdschlüssel <code>Geraet.MitarbeiterID</code> sichert die <strong>referenzielle Integrität</strong>. Solange noch Geräte auf den Mitarbeiter 1042 verweisen, würde das DBMS das Löschen ablehnen, weil sonst Verweise ins Leere entstünden (es sei denn, der Fremdschlüssel wurde mit <code>ON DELETE SET NULL</code> oder <code>ON DELETE CASCADE</code> angelegt).</p>
            <p><strong>Achtung:</strong> Ohne <code>WHERE</code> würde das <code>UPDATE</code> alle Geräte aller Mitarbeiter freigeben.</p>
            <p><strong>Bewertung:</strong> UPDATE 1 P, DELETE 1 P, Erklärung referenzielle Integrität 2 P.</p>`
        },
        {
          q: `<p><strong>e)</strong> Die Tabelle <code>Ticket</code> enthält inzwischen 400.000 Datensätze, und die Abfrage aus c) wird langsam. (1) Erkläre, was ein <strong>Index</strong> ist, auf welche Spalte(n) du ihn hier legen würdest und welchen Nachteil er hat. (2) Beim Umzug eines Geräts sollen in einer <strong>Transaktion</strong> die Zuordnung geändert und ein Ticket angelegt werden. Erkläre die ACID-Eigenschaften und beschreibe, was passiert, wenn der Server nach der ersten Anweisung abstürzt.</p>`,
          points: 6,
          solution: `
            <p><strong>(1) Index:</strong> eine zusätzliche, sortierte Datenstruktur (meist B-Baum) mit Verweisen auf die Datensätze – vergleichbar mit dem Stichwortverzeichnis eines Buches. Das DBMS muss dann nicht mehr die ganze Tabelle durchsuchen (Full Table Scan).</p>
            <ul>
              <li>Sinnvolle Spalten: <code>Ticket.Status</code> (Filter in WHERE) und <code>Ticket.GeraetID</code> (JOIN-Spalte), z. B. <code>CREATE INDEX idx_ticket_status_geraet ON Ticket (Status, GeraetID);</code></li>
              <li>Nachteil: Jeder <code>INSERT</code>, <code>UPDATE</code> und <code>DELETE</code> muss auch den Index aktualisieren → Schreibzugriffe werden langsamer, zusätzlicher Speicherplatz.</li>
            </ul>
            <p><strong>(2) ACID:</strong></p>
            <ul>
              <li><strong>Atomarität:</strong> alle Anweisungen der Transaktion oder keine.</li>
              <li><strong>Konsistenz:</strong> Die Datenbank geht von einem gültigen Zustand in einen gültigen Zustand über (Integritätsregeln bleiben erfüllt).</li>
              <li><strong>Isolation:</strong> Parallele Transaktionen beeinflussen sich nicht (umgesetzt über Sperren).</li>
              <li><strong>Dauerhaftigkeit:</strong> Nach dem <code>COMMIT</code> bleiben die Änderungen auch bei einem Absturz erhalten (Transaktionsprotokoll).</li>
            </ul>
            <p><strong>Absturz nach der ersten Anweisung:</strong> Es gab noch kein <code>COMMIT</code>. Beim Neustart setzt das DBMS die Transaktion anhand des Transaktionsprotokolls zurück (<strong>Rollback</strong>). Die Zuordnung ist wieder im alten Zustand, es entsteht kein halb umgezogenes Gerät ohne Ticket.</p>
            <p><strong>Bewertung:</strong> (1) 3 P, (2) ACID 2 P, Absturzfall 1 P.</p>`
        }
      ]
    },
    {
      id: "kau-b3", set: "B", part: "kau", points: 25,
      title: "KAIS B3: Linux-Sicherungsskript und Pseudocode analysieren",
      scenario: `
        <p>Auf dem Linux-Dateiserver der <strong>Eiderland Solar GmbH</strong> liegen die Projektunterlagen (Anlagenpläne, Fotos, Abnahmeprotokolle). Ein Werkstudent hat ein Sicherungsskript geschrieben, das die Daten auf ein eingebundenes NAS sichert. Nach zwei Wochen fällt auf, dass auf dem NAS <strong>keine einzige Sicherung</strong> liegt, obwohl das Log jeden Tag „Sicherung erfolgreich“ meldet.</p>
        <p><strong>Datei /opt/skripte/sicherung.sh</strong></p>
        <pre><code>#!/bin/bash
# Sicherung der Projektdaten auf das NAS
QUELLE="/srv/projekte"
ZIEL="/mnt/nas/sicherung"
LOG="/var/log/sicherung.log"
DATUM=$(date +%F)

tar -czf "$ZIEL/projekte_$DATUM.tar.gz" "$QUELLE"
if [ $? -eq 0 ]; then
    echo "$DATUM Sicherung erfolgreich" &gt;&gt; "$LOG"
else
    echo "$DATUM Sicherung FEHLGESCHLAGEN" &gt;&gt; "$LOG"
fi

find "$ZIEL" -name "projekte_*.tar.gz" -mtime -14 -delete</code></pre>
        <p>Außerdem wertet ein Monitoring-Skript die Füllstände der Server-Volumes aus. Es liegt als Pseudocode vor (Arrays beginnen mit dem Index 0):</p>
        <pre><code>werte ← [72, 91, 85, 64, 97, 88]     // Füllstände in Prozent
grenze ← 85
anzahl ← 0
summe ← 0
FÜR i ← 1 BIS länge(werte)
    WENN werte[i] &gt; grenze DANN
        anzahl ← anzahl + 1
    ENDE WENN
    summe ← summe + werte[i]
ENDE FÜR
durchschnitt ← summe / länge(werte)
AUSGABE anzahl, durchschnitt</code></pre>
        <p><strong>Anforderung an das Monitoring-Skript:</strong> Es soll zählen, wie viele Volumes einen Füllstand von <strong>85 % oder mehr</strong> haben, und den durchschnittlichen Füllstand <strong>aller</strong> Volumes ausgeben.</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Beschreibe, was das Sicherungsskript tut. Erkläre dabei die Bedeutung von <code>$(date +%F)</code>, <code>tar -czf</code>, <code>$?</code> und <code>&gt;&gt;</code>.</p>`,
          points: 4,
          solution: `
            <p>Das Skript packt das Verzeichnis <code>/srv/projekte</code> in ein komprimiertes Archiv mit Datum im Namen auf dem NAS, schreibt das Ergebnis in eine Logdatei und löscht anschließend Archive nach ihrem Alter.</p>
            <ul>
              <li><code>$(date +%F)</code>: Befehlssubstitution – die Ausgabe von <code>date</code> im Format JJJJ-MM-TT (z. B. <code>2026-11-25</code>) wird in der Variablen gespeichert.</li>
              <li><code>tar -czf</code>: <strong>c</strong> = Archiv erstellen (create), <strong>z</strong> = mit gzip komprimieren, <strong>f</strong> = in die angegebene Datei schreiben.</li>
              <li><code>$?</code>: Rückgabewert (Exit-Code) des zuletzt ausgeführten Befehls; <code>0</code> bedeutet Erfolg, alles andere einen Fehler.</li>
              <li><code>&gt;&gt;</code>: hängt die Ausgabe an die Logdatei <strong>an</strong> (<code>&gt;</code> würde sie überschreiben).</li>
            </ul>
            <p><strong>Bewertung:</strong> je Element 1 P (Gesamtfunktion kann Teilpunkte ausgleichen).</p>`
        },
        {
          q: `<p><strong>b)</strong> Finde den Fehler, der dazu führt, dass auf dem NAS keine Sicherung liegt. Erkläre die Wirkung und korrigiere die Zeile. Nenne eine weitere sinnvolle Verbesserung des Skripts.</p>`,
          points: 4,
          solution: `
            <p><strong>Fehler (logischer Fehler):</strong> <code>-mtime -14</code> findet Dateien, die <strong>vor weniger als 14 Tagen</strong> geändert wurden – also alle aktuellen Sicherungen einschließlich der gerade erstellten. Das Skript sichert erfolgreich (daher der Log-Eintrag) und löscht die Sicherung sofort wieder.</p>
            <p><strong>Korrektur:</strong></p>
            <pre><code>find "$ZIEL" -name "projekte_*.tar.gz" -mtime +14 -delete</code></pre>
            <p><code>+14</code> = älter als 14 Tage. Detail: <code>find</code> rundet das Alter auf ganze Tage ab, <code>+14</code> trifft also Dateien ab 15 vollen Tagen.</p>
            <p><strong>Weitere Verbesserung</strong> (eine genügt): Alte Sicherungen nur löschen, wenn die neue Sicherung erfolgreich war (sonst sind nach 14 Fehltagen alle Sicherungen weg). Vorher prüfen, ob das NAS wirklich eingebunden ist (<code>mountpoint -q /mnt/nas</code>), sonst würde lokal gesichert. Bei Fehlern eine Mail bzw. Monitoring-Meldung auslösen. Regelmäßig testweise wiederherstellen.</p>
            <p><strong>Bewertung:</strong> Fehler und Wirkung 2 P, Korrektur 1 P, weitere Verbesserung 1 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> Das Skript soll von <strong>Montag bis Freitag um 23:30 Uhr</strong> automatisch laufen. Gib den passenden Eintrag für die crontab an und erkläre die fünf Zeitfelder.</p>`,
          points: 3,
          solution: `
            <pre><code>30 23 * * 1-5 /opt/skripte/sicherung.sh</code></pre>
            <p>Felder von links: <strong>Minute</strong> (30) · <strong>Stunde</strong> (23) · <strong>Tag des Monats</strong> (* = jeder) · <strong>Monat</strong> (* = jeder) · <strong>Wochentag</strong> (1-5 = Montag bis Freitag; 0 bzw. 7 = Sonntag). Danach folgt der Befehl mit vollständigem Pfad.</p>
            <p><strong>Bewertung:</strong> Eintrag 2 P, Erklärung 1 P.</p>`
        },
        {
          q: `<p><strong>d)</strong> Das Skript soll dem Benutzer <code>root</code> gehören. Der Eigentümer soll alle Rechte haben, die Gruppe <code>backup</code> darf lesen und ausführen, alle anderen haben keine Rechte. Gib die Befehle an und erkläre den Zahlenwert.</p>`,
          points: 3,
          solution: `
            <pre><code>chown root:backup /opt/skripte/sicherung.sh
chmod 750 /opt/skripte/sicherung.sh</code></pre>
            <p>r = 4, w = 2, x = 1: Eigentümer rwx = 4 + 2 + 1 = <strong>7</strong>, Gruppe r-x = 4 + 1 = <strong>5</strong>, andere --- = <strong>0</strong> → <code>rwxr-x---</code> = <strong>750</strong>.</p>
            <p><strong>Bewertung:</strong> chown 1 P, chmod 1 P, Erklärung 1 P.</p>`
        },
        {
          q: `<p><strong>e)</strong> Der Pseudocode des Monitoring-Skripts enthält <strong>zwei Fehler</strong> gegenüber der Anforderung. Benenne sie, ordne sie als Syntax-, Laufzeit- oder Logikfehler ein und gib die korrigierten Zeilen an.</p>`,
          points: 6,
          solution: `
            <ol>
              <li><strong>Schleifengrenzen:</strong> <code>FÜR i ← 1 BIS länge(werte)</code> beginnt bei Index 1 und endet bei Index 6. Damit wird der erste Wert (72) übersprungen und auf <code>werte[6]</code> zugegriffen, das es nicht gibt (Indizes 0 bis 5) → <strong>Laufzeitfehler</strong> (Index außerhalb des Arrays, „Off-by-one“). Korrektur: <code>FÜR i ← 0 BIS länge(werte) − 1</code></li>
              <li><strong>Vergleichsoperator:</strong> <code>werte[i] &gt; grenze</code> zählt 85 % nicht mit, obwohl „85 % oder mehr“ gefordert ist → <strong>Logikfehler</strong> (semantischer Fehler, das Programm läuft, liefert aber ein falsches Ergebnis). Korrektur: <code>WENN werte[i] ≥ grenze DANN</code></li>
            </ol>
            <p>Ein Syntaxfehler liegt nicht vor – der Code ist formal korrekt aufgebaut.</p>
            <p><strong>Bewertung:</strong> je Fehler 1 P Benennung, 1 P Einordnung, 1 P Korrektur.</p>`
        },
        {
          q: `<p><strong>f)</strong> Führe für den <strong>korrigierten</strong> Pseudocode einen Schreibtischtest durch (Tabelle mit i, werte[i], anzahl, summe) und gib die Ausgabe an.</p>`,
          points: 5,
          solution: `
            <table>
              <thead><tr><th>i</th><th>werte[i]</th><th>≥ 85?</th><th>anzahl</th><th>summe</th></tr></thead>
              <tbody>
                <tr><td>0</td><td>72</td><td>nein</td><td>0</td><td>72</td></tr>
                <tr><td>1</td><td>91</td><td>ja</td><td>1</td><td>163</td></tr>
                <tr><td>2</td><td>85</td><td>ja</td><td>2</td><td>248</td></tr>
                <tr><td>3</td><td>64</td><td>nein</td><td>2</td><td>312</td></tr>
                <tr><td>4</td><td>97</td><td>ja</td><td>3</td><td>409</td></tr>
                <tr><td>5</td><td>88</td><td>ja</td><td>4</td><td>497</td></tr>
              </tbody>
            </table>
            <p>durchschnitt = 497 ÷ 6 ≈ 82,83</p>
            <p><strong>Ausgabe: 4, 82,83</strong> (vier Volumes ab 85 %, durchschnittlicher Füllstand ≈ 82,8 %).</p>
            <p><strong>Bewertung:</strong> Tabelle 3 P, anzahl 1 P, durchschnitt 1 P. Folgefehler aus e) werden berücksichtigt.</p>`
        }
      ]
    },
    {
      id: "kau-b4", set: "B", part: "kau", points: 25,
      title: "KAIS B4: Serverbeschaffung, Lizenzen, Datenschutzvorfall und Notfall-Change",
      scenario: `
        <p>Für die Zentrale der <strong>Eiderland Solar GmbH</strong> in Tönning wird ein neuer Server für die lokal verbleibenden Dienste beschafft. Laut Datenblättern benötigen die Komponenten:</p>
        <table>
          <thead><tr><th>Komponente</th><th>Anzahl</th><th>Leistung je Stück</th></tr></thead>
          <tbody>
            <tr><td>CPU</td><td>2</td><td>205 W</td></tr>
            <tr><td>RAM-Modul</td><td>16</td><td>5 W</td></tr>
            <tr><td>NVMe-SSD</td><td>8</td><td>12 W</td></tr>
            <tr><td>Mainboard und Lüfter</td><td>1</td><td>90 W</td></tr>
            <tr><td>Netzwerkkarte 25 GbE</td><td>2</td><td>20 W</td></tr>
          </tbody>
        </table>
        <p>Der Hersteller bietet Netzteile mit <strong>800 W, 1.100 W und 1.600 W</strong> an (Wirkungsgrad im Betriebspunkt <strong>94 %</strong>). Der Server erhält zwei redundante Netzteile. Die Nordlicht IT plant <strong>20 % Leistungsreserve</strong> ein. Strompreis: <strong>0,32 €/kWh</strong>, Betrieb rund um die Uhr (8.760 h/Jahr).</p>
        <p>Für den Zugriff auf den Server werden Client-Zugriffslizenzen (CALs) benötigt: <strong>User-CAL 52 €</strong>, <strong>Device-CAL 44 €</strong>.</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Berechne die Leistung der Komponenten, wähle mit Reserve ein geeignetes Netzteil aus und begründe, was die Redundanz für die Auswahl bedeutet. Berechne anschließend die Leistungsaufnahme aus dem Stromnetz und die jährlichen Stromkosten.</p>`,
          points: 7,
          solution: `
            <p><strong>Leistung der Komponenten:</strong> 2 ⋅ 205 W + 16 ⋅ 5 W + 8 ⋅ 12 W + 90 W + 2 ⋅ 20 W = 410 + 80 + 96 + 90 + 40 = <strong>716 W</strong></p>
            <p><strong>Mit 20 % Reserve:</strong> 716 W ⋅ 1,2 = 859,2 W → <strong>Netzteil 1.100 W</strong> (800 W reicht nicht). Bei redundanten Netzteilen (1+1) muss <strong>jedes einzelne</strong> Netzteil die volle Last allein tragen können, falls das andere ausfällt – daher zwei Netzteile à 1.100 W, nicht zwei à 800 W.</p>
            <p><strong>Leistungsaufnahme:</strong> P_zu = P_ab ÷ η = 716 W ÷ 0,94 ≈ <strong>761,7 W</strong> (die Reserve wird nicht verbraucht, sie ist nur Sicherheitsaufschlag)</p>
            <p><strong>Hinweis:</strong> Die Nennleistung eines Netzteils bezieht sich auf die abgegebene Leistung, deshalb wird die Reserve auf P_ab aufgeschlagen. Rechnet eine Aufgabe ausdrücklich mit der Aufnahme plus Reserve (716 W ÷ 0,94 ⋅ 1,2 ≈ 914 W), führt das hier ebenfalls zum 1.100-W-Netzteil – den Rechenweg immer angeben.</p>
            <p><strong>Stromkosten:</strong> 0,7617 kW ⋅ 8.760 h ≈ 6.672,5 kWh → 6.672,5 kWh ⋅ 0,32 €/kWh ≈ <strong>2.135,20 € pro Jahr</strong></p>
            <div class="callout achtung"><strong>Prüfungsfalle:</strong> Für die Stromkosten zählt die tatsächliche Aufnahme (716 W ÷ η), nicht die Nennleistung des Netzteils (1.100 W) und nicht der Wert mit Reserve.</div>
            <p><strong>Bewertung:</strong> Summe 2 P, Auswahl mit Reserve und Redundanz 2 P, Leistungsaufnahme 1 P, Stromkosten 2 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Ermittle das günstigste CAL-Modell für die beiden Gruppen und die Gesamtkosten: (1) <strong>Lager und Montagevorbereitung</strong>: 45 Beschäftigte im Schichtbetrieb teilen sich 15 PCs. (2) <strong>Monteure</strong>: 60 Personen, jede nutzt ein Tablet und ein Smartphone für den Zugriff.</p>`,
          points: 6,
          solution: `
            <table>
              <thead><tr><th>Gruppe</th><th>User-CALs</th><th>Device-CALs</th><th>günstiger</th></tr></thead>
              <tbody>
                <tr><td>Lager (45 Personen, 15 PCs)</td><td>45 ⋅ 52 € = 2.340 €</td><td>15 ⋅ 44 € = <strong>660 €</strong></td><td>Device-CAL</td></tr>
                <tr><td>Monteure (60 Personen, 120 Geräte)</td><td>60 ⋅ 52 € = <strong>3.120 €</strong></td><td>120 ⋅ 44 € = 5.280 €</td><td>User-CAL</td></tr>
              </tbody>
            </table>
            <p><strong>Gesamtkosten:</strong> 660 € + 3.120 € = <strong>3.780 €</strong>. CAL-Arten dürfen gemischt werden.</p>
            <p><strong>Faustregel:</strong> Viele Personen teilen sich wenige Geräte → Device-CAL. Wenige Personen nutzen viele Geräte → User-CAL. Die Zuordnung sollte im Lizenzmanagement dokumentiert werden (Nachweis bei einem Audit).</p>
            <p><strong>Bewertung:</strong> je Gruppe beide Varianten berechnet und richtig entschieden 2,5 P, Gesamtkosten 1 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> Einem Vertriebsmitarbeiter wird am <strong>Freitag um 16:00 Uhr</strong> das Notebook aus dem Auto gestohlen. Auf der <strong>unverschlüsselten</strong> Festplatte liegt eine Exportdatei mit Namen, Anschriften und Bankverbindungen von rund 800 Kunden. Er meldet den Diebstahl erst am Montag um 08:00 Uhr der IT. Beschreibe das weitere Vorgehen nach DSGVO einschließlich Frist und nenne zwei technische Maßnahmen, die den Schaden verhindert hätten.</p>`,
          points: 6,
          solution: `
            <ul>
              <li><strong>Meldung an die Aufsichtsbehörde</strong> (in Schleswig-Holstein das Unabhängige Landeszentrum für Datenschutz, ULD) nach <strong>Art. 33 DSGVO</strong> unverzüglich, möglichst <strong>binnen 72 Stunden</strong> nach Bekanntwerden. Da der Mitarbeiter den Vorfall schon am Freitag kannte, sollte man vorsichtshalber ab Freitag 16:00 Uhr rechnen → Meldung spätestens <strong>Montag 16:00 Uhr</strong>. Eine spätere Meldung muss begründet werden.</li>
              <li><strong>Benachrichtigung der Betroffenen</strong> nach <strong>Art. 34 DSGVO</strong>: Unverschlüsselte Bankverbindungen mit Namen und Anschrift ermöglichen Betrug (z. B. Lastschriftbetrug) → voraussichtlich <strong>hohes Risiko</strong> → die Kunden unverzüglich informieren und Hinweise geben (Kontoauszüge prüfen).</li>
              <li><strong>Dokumentation</strong> des Vorfalls, seiner Folgen und der Maßnahmen (Art. 33 Abs. 5), Datenschutzbeauftragten einbinden, Diebstahl bei der Polizei anzeigen, Zugangsdaten des Mitarbeiters sperren bzw. ändern.</li>
            </ul>
            <p><strong>Technische Maßnahmen</strong> (zwei genügen): vollständige Festplattenverschlüsselung (z. B. BitLocker mit TPM und PIN) – dann wäre wegen des geringen Risikos meist keine Benachrichtigung der Kunden nötig; Mobile Device Management mit Fernsperrung/-löschung; Kundendaten nicht lokal speichern, sondern nur im zentralen System mit Zugriff über VPN; Verhinderung von Exporten (Data Loss Prevention).</p>
            <p><strong>Bewertung:</strong> Meldung mit Frist 2 P, Benachrichtigung mit Begründung 1 P, Dokumentation/weitere Schritte 1 P, zwei Maßnahmen 2 P.</p>`
        },
        {
          q: `<p><strong>d)</strong> Der Hersteller der Firewall in Tönning veröffentlicht eine kritische, bereits aktiv ausgenutzte Sicherheitslücke im VPN-Portal und stellt ein Update bereit. Die Firewall läuft als Hochverfügbarkeitspaar (aktiv/passiv). Beschreibe in sechs Schritten, wie du das Update als <strong>Notfall-Change</strong> geordnet durchführst.</p>`,
          points: 6,
          solution: `
            <ol>
              <li><strong>Change-Antrag (RFC)</strong> mit Beschreibung, Dringlichkeit, Risiko und betroffenen Diensten anlegen; Hersteller-Hinweise (Release Notes, bekannte Probleme) lesen.</li>
              <li><strong>Genehmigung</strong> im beschleunigten Verfahren durch das Notfall-Gremium (ECAB) bzw. die IT-Leitung; bis dahin ggf. Sofortmaßnahme laut Hersteller (VPN-Portal vorübergehend einschränken).</li>
              <li><strong>Sicherung</strong> der aktuellen Konfiguration und des Firmwarestands, <strong>Rückfallplan</strong> (Rollback auf die alte Version) festlegen.</li>
              <li><strong>Kurzes Wartungsfenster</strong> festlegen und Betroffene informieren (VPN-Nutzer, Außendienst).</li>
              <li><strong>Durchführung</strong>: zuerst das passive Gerät aktualisieren, Failover auf das aktualisierte Gerät, Funktion prüfen, dann das zweite Gerät aktualisieren → kaum Unterbrechung.</li>
              <li><strong>Test und Abschluss</strong>: VPN, Regeln und Hochverfügbarkeit prüfen, Protokolle auf Angriffsspuren durchsehen, Change dokumentieren und schließen, Konfigurationsdatenbank (CMDB) aktualisieren.</li>
            </ol>
            <p><strong>Bewertung:</strong> je sinnvollem Schritt in plausibler Reihenfolge 1 P.</p>`
        }
      ]
    },
    /* ===== Probeklausur A – Analyse und Entwicklung von Netzwerken (AEN), 90 min, 4 Aufgaben = 100 P ===== */
    {
      id: "aen-a1", set: "A", part: "aen", points: 25,
      title: "AEN A1: IPv4-Adressplan mit VLSM und IPv6-Präfixe",
      scenario: `
        <p><strong>Ausgangssituation (gilt für die ganze Probeklausur AEN A):</strong> Die <strong>Holsteiner Landtechnik GmbH</strong> in Meldorf (Landmaschinenhandel mit Werkstatt und Ersatzteillager, 150 Beschäftigte) bezieht einen Neubau. Du planst als Auszubildende/r der <strong>Nordlicht IT GmbH</strong> in Heide das neue Netzwerk. Alle Firmen und Adressen sind frei erfunden bzw. stammen aus Dokumentationsbereichen.</p>
        <p>Für den Standort steht das private Netz <strong>172.20.16.0/22</strong> zur Verfügung. Benötigt werden:</p>
        <table>
          <thead><tr><th>Netz</th><th>VLAN</th><th>benötigte Hosts</th></tr></thead>
          <tbody>
            <tr><td>Verwaltung</td><td>10</td><td>180</td></tr>
            <tr><td>Werkstatt</td><td>20</td><td>90</td></tr>
            <tr><td>Server</td><td>30</td><td>40</td></tr>
            <tr><td>VoIP</td><td>40</td><td>110</td></tr>
            <tr><td>Management</td><td>99</td><td>20</td></tr>
            <tr><td>Transfernetz Router ↔ Firewall</td><td>–</td><td>2</td></tr>
          </tbody>
        </table>
        <p>Vorgaben: Die Netze werden <strong>der Größe nach</strong> (größter Bedarf zuerst) lückenlos ab 172.20.16.0 vergeben. Das Gateway erhält jeweils die <strong>erste nutzbare Adresse</strong>. Der Provider stellt zusätzlich das IPv6-Präfix <strong>2001:db8:4e20::/48</strong> bereit.</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Erstelle den Adressplan. Gib für jedes Netz die Netzadresse mit Präfix, die Subnetzmaske, den nutzbaren Adressbereich und die Broadcastadresse an.</p>`,
          points: 10,
          solution: `
            <p><strong>Vorgehen:</strong> Für jeden Bedarf die kleinste Blockgröße 2ⁿ mit 2ⁿ − 2 ≥ Hosts suchen: 180 → 256 (/24), 110 → 128 (/25), 90 → 128 (/25), 40 → 64 (/26), 20 → 32 (/27), 2 → 4 (/30). Dann vom größten zum kleinsten Block vergeben.</p>
            <table>
              <thead><tr><th>Netz</th><th>Netzadresse</th><th>Maske</th><th>nutzbare Adressen</th><th>Broadcast</th></tr></thead>
              <tbody>
                <tr><td>Verwaltung (180)</td><td>172.20.16.0/24</td><td>255.255.255.0</td><td>172.20.16.1 – 172.20.16.254 (254)</td><td>172.20.16.255</td></tr>
                <tr><td>VoIP (110)</td><td>172.20.17.0/25</td><td>255.255.255.128</td><td>172.20.17.1 – 172.20.17.126 (126)</td><td>172.20.17.127</td></tr>
                <tr><td>Werkstatt (90)</td><td>172.20.17.128/25</td><td>255.255.255.128</td><td>172.20.17.129 – 172.20.17.254 (126)</td><td>172.20.17.255</td></tr>
                <tr><td>Server (40)</td><td>172.20.18.0/26</td><td>255.255.255.192</td><td>172.20.18.1 – 172.20.18.62 (62)</td><td>172.20.18.63</td></tr>
                <tr><td>Management (20)</td><td>172.20.18.64/27</td><td>255.255.255.224</td><td>172.20.18.65 – 172.20.18.94 (30)</td><td>172.20.18.95</td></tr>
                <tr><td>Transfer (2)</td><td>172.20.18.96/30</td><td>255.255.255.252</td><td>172.20.18.97 – 172.20.18.98 (2)</td><td>172.20.18.99</td></tr>
              </tbody>
            </table>
            <p>Die Reihenfolge von VoIP und Werkstatt ergibt sich aus der Vorgabe „größter Bedarf zuerst“ (110 vor 90). Beide Netze sind gleich groß, eine vertauschte Reihenfolge ist fachlich nicht falsch.</p>
            <p><strong>Bewertung:</strong> je Netz 1,5 P (Netzadresse/Präfix, Maske, Bereich, Broadcast), korrektes Vorgehen 1 P. Folgefehler werden berücksichtigt.</p>`
        },
        {
          q: `<p><strong>b)</strong> Wie viele Adressen des /22-Netzes bleiben frei? Die Werkstatt plant eine Erweiterung um ein zusätzliches VLAN mit bis zu 200 Hosts. Gib ein passendes freies Netz an und begründe.</p>`,
          points: 3,
          solution: `
            <p><strong>Frei:</strong> Das /22-Netz hat 2¹⁰ = 1.024 Adressen. Belegt sind 256 + 128 + 128 + 64 + 32 + 4 = 612 → <strong>412 Adressen frei</strong> (172.20.18.100 bis 172.20.19.255).</p>
            <p><strong>Neues VLAN (200 Hosts → /24):</strong> <strong>172.20.19.0/24</strong> (172.20.19.1 – 172.20.19.254). Ein /24 muss an einer Oktettgrenze beginnen (x.x.x.0). Der freie Rest 172.20.18.100 – 172.20.18.255 umfasst nur 156 Adressen und reicht nicht.</p>
            <p><strong>Bewertung:</strong> freie Adressen 1 P, Netz 1 P, Begründung 1 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> Zwei Clients in der Werkstatt haben keine Verbindung. Prüfe die Konfiguration, benenne jeweils den Fehler und gib eine korrekte Einstellung an.</p>
            <table>
              <thead><tr><th>Client</th><th>IPv4-Adresse</th><th>Maske</th><th>Gateway</th></tr></thead>
              <tbody>
                <tr><td>WS-DIAG-01</td><td>172.20.17.130</td><td>255.255.255.128</td><td>172.20.17.1</td></tr>
                <tr><td>WS-DIAG-02</td><td>172.20.17.255</td><td>255.255.255.128</td><td>172.20.17.129</td></tr>
              </tbody>
            </table>`,
          points: 3,
          solution: `
            <ul>
              <li><strong>WS-DIAG-01:</strong> Die Adresse ist korrekt, aber das Gateway 172.20.17.1 liegt im VoIP-Netz 172.20.17.0/25 und damit nicht im eigenen Netz. Der Client kann es nicht direkt erreichen → Gateway <strong>172.20.17.129</strong>.</li>
              <li><strong>WS-DIAG-02:</strong> 172.20.17.255 ist die <strong>Broadcastadresse</strong> des Werkstattnetzes und darf keinem Host zugewiesen werden → z. B. <strong>172.20.17.131</strong> (oder eine andere freie Adresse aus .130 – .254).</li>
            </ul>
            <p><strong>Bewertung:</strong> je Client Fehler 1 P, Korrektur 0,5 P.</p>`
        },
        {
          q: `<p><strong>d)</strong> Jedes VLAN erhält ein /64-Präfix. Die VLAN-ID wird <strong>hexadezimal</strong> im vierten Block der Adresse abgebildet. (1) Wie viele /64-Netze lassen sich aus dem /48 bilden? (2) Gib die Präfixe für die VLANs 10, 20 und 99 an. (3) Die Clients sollen ihre IPv6-Adresse per <strong>SLAAC</strong> erhalten. Beschreibe den Ablauf kurz und nenne einen Nachteil gegenüber stateful DHCPv6.</p>`,
          points: 6,
          solution: `
            <p><strong>(1)</strong> 64 − 48 = 16 Bit für Subnetze → 2¹⁶ = <strong>65.536</strong> /64-Netze.</p>
            <p><strong>(2)</strong> Umrechnung: 10 = 0xA, 20 = 0x14 (1 ⋅ 16 + 4), 99 = 0x63 (6 ⋅ 16 + 3):</p>
            <ul>
              <li>VLAN 10: <strong>2001:db8:4e20:a::/64</strong></li>
              <li>VLAN 20: <strong>2001:db8:4e20:14::/64</strong></li>
              <li>VLAN 99: <strong>2001:db8:4e20:63::/64</strong></li>
            </ul>
            <p><strong>(3) SLAAC:</strong> Der Router sendet regelmäßig bzw. auf Anfrage (Router Solicitation) <strong>Router Advertisements</strong> (ICMPv6) mit dem /64-Präfix und seiner Link-Local-Adresse als Gateway. Der Client bildet die hinteren 64 Bit (Interface-ID) selbst – zufällig (Privacy Extensions) oder nach EUI-64 – und prüft per Duplicate Address Detection, ob die Adresse schon vergeben ist.</p>
            <p><strong>Nachteil</strong> (einer genügt): Es gibt keine zentrale Stelle, die protokolliert, welches Gerät welche Adresse hat (erschwert Dokumentation und Fehlersuche); zusätzliche Optionen wie DNS-Server müssen per RDNSS im Router Advertisement oder über zustandsloses DHCPv6 verteilt werden.</p>
            <p><strong>Bewertung:</strong> (1) 1 P, (2) 3 × 1 P, (3) Ablauf 1 P, Nachteil 1 P.</p>`
        },
        {
          q: `<p><strong>e)</strong> Ordne die folgenden Adressen aus einer <code>ipconfig</code>-Ausgabe jeweils dem richtigen IPv6-Adresstyp zu: <code>fe80::1c4a:9ff:fe12:3456</code> · <code>fd3a:7c10:4e20:14::25</code> · <code>2001:db8:4e20:14:8d2e:51ff:a07:b3c1</code></p>`,
          points: 3,
          solution: `
            <ul>
              <li><code>fe80::…</code> → <strong>Link-Local-Adresse</strong> (fe80::/10): nur im eigenen Segment gültig, wird nicht geroutet, jede IPv6-Schnittstelle hat eine.</li>
              <li><code>fd3a:…</code> → <strong>Unique Local Address</strong> (fc00::/7, in der Praxis fd00::/8): privat, vergleichbar mit RFC-1918-Adressen, nicht im Internet geroutet.</li>
              <li><code>2001:db8:…</code> → <strong>Global Unicast Address</strong> (2000::/3): weltweit eindeutig und routbar (2001:db8::/32 ist der für Beispiele reservierte Bereich).</li>
            </ul>
            <p><strong>Bewertung:</strong> je richtiger Zuordnung 1 P.</p>`
        }
      ]
    },
    {
      id: "aen-a2", set: "A", part: "aen", points: 25,
      title: "AEN A2: VLANs, Trunks und Router-on-a-Stick konfigurieren",
      scenario: `
        <p>Die VLANs der <strong>Holsteiner Landtechnik GmbH</strong> werden über einen Router nach dem Prinzip <strong>Router-on-a-Stick</strong> verbunden. Eingesetzt werden Cisco-Geräte (Switches der Serie 2960, Layer 2). Auszug aus dem Netzplan:</p>
        <pre class="ascii">              [R-MELDORF]
                 Gi0/0
                   │  (Trunk)
                 Gi0/24
              [SW-CORE]
          Gi0/1 │      │ Gi0/2
          Gi0/1 │      │ Gi0/1
         [SW-VERW]   [SW-WERK]
                      Fa0/5: PC Werkstatt
                      Fa0/8: IP-Telefon, PC am Telefon angeschlossen</pre>
        <table>
          <thead><tr><th>VLAN</th><th>Name</th><th>Netz</th><th>Gateway</th></tr></thead>
          <tbody>
            <tr><td>10</td><td>Verwaltung</td><td>172.20.16.0/24</td><td>172.20.16.1</td></tr>
            <tr><td>20</td><td>Werkstatt</td><td>172.20.17.128/25</td><td>172.20.17.129</td></tr>
            <tr><td>30</td><td>Server</td><td>172.20.18.0/26</td><td>172.20.18.1</td></tr>
            <tr><td>40</td><td>VoIP</td><td>172.20.17.0/25</td><td>172.20.17.1</td></tr>
            <tr><td>99</td><td>Management</td><td>172.20.18.64/27</td><td>172.20.18.65</td></tr>
          </tbody>
        </table>
        <p>Der DHCP-Server für alle VLANs hat die Adresse <strong>172.20.18.10</strong> (VLAN 30).</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Vervollständige die Tabelle: Lege für jeden Port den Modus (Access oder Trunk) und die VLAN-Zuordnung fest.</p>
            <table>
              <thead><tr><th>Port</th><th>angeschlossen</th><th>Modus</th><th>VLAN(s)</th></tr></thead>
              <tbody>
                <tr><td>SW-WERK Fa0/5</td><td>PC Werkstatt</td><td>?</td><td>?</td></tr>
                <tr><td>SW-WERK Fa0/8</td><td>IP-Telefon mit PC</td><td>?</td><td>?</td></tr>
                <tr><td>SW-WERK Gi0/1</td><td>Uplink zu SW-CORE</td><td>?</td><td>?</td></tr>
                <tr><td>SW-CORE Gi0/24</td><td>Router Gi0/0</td><td>?</td><td>?</td></tr>
              </tbody>
            </table>`,
          points: 4,
          solution: `
            <table>
              <thead><tr><th>Port</th><th>Modus</th><th>VLAN(s)</th></tr></thead>
              <tbody>
                <tr><td>SW-WERK Fa0/5</td><td>Access</td><td>20</td></tr>
                <tr><td>SW-WERK Fa0/8</td><td>Access mit Voice-VLAN</td><td>Daten 20 (untagged), Sprache 40 (getaggt vom Telefon)</td></tr>
                <tr><td>SW-WERK Gi0/1</td><td>Trunk</td><td>mindestens 20, 40, 99 (üblich: alle VLANs 10, 20, 30, 40, 99)</td></tr>
                <tr><td>SW-CORE Gi0/24</td><td>Trunk</td><td>10, 20, 30, 40, 99 (der Router muss alle VLANs sehen)</td></tr>
              </tbody>
            </table>
            <p><strong>Bewertung:</strong> je Zeile 1 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Gib die Konfiguration des Routers R-MELDORF für die VLANs <strong>20, 40 und 99</strong> in Cisco-IOS-Syntax an (ab dem Konfigurationsmodus).</p>`,
          points: 6,
          solution: `
            <pre><code>interface GigabitEthernet0/0
 no ip address
 no shutdown
!
interface GigabitEthernet0/0.20
 encapsulation dot1Q 20
 ip address 172.20.17.129 255.255.255.128
!
interface GigabitEthernet0/0.40
 encapsulation dot1Q 40
 ip address 172.20.17.1 255.255.255.128
!
interface GigabitEthernet0/0.99
 encapsulation dot1Q 99
 ip address 172.20.18.65 255.255.255.224</code></pre>
            <p>Das physische Interface trägt keine eigene Adresse, muss aber mit <code>no shutdown</code> aktiviert werden – sonst bleiben alle Subinterfaces down. <code>encapsulation dot1Q</code> ordnet das Subinterface dem VLAN zu; die Subinterface-Nummer ist frei wählbar, wird aber zur Übersicht gleich der VLAN-ID gesetzt.</p>
            <p><strong>Bewertung:</strong> je Subinterface 1,5 P (Encapsulation und IP-Adresse mit Maske), physisches Interface aktiviert 1 P, sinnvolle Nummerierung 0,5 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> Konfiguriere auf <strong>SW-WERK</strong> die Ports Fa0/5, Fa0/8 und Gi0/1 entsprechend deiner Tabelle aus a). Die VLANs sind bereits angelegt.</p>`,
          points: 4,
          solution: `
            <pre><code>interface FastEthernet0/5
 switchport mode access
 switchport access vlan 20
!
interface FastEthernet0/8
 switchport mode access
 switchport access vlan 20
 switchport voice vlan 40
!
interface GigabitEthernet0/1
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30,40,99</code></pre>
            <p>Hinweis: Die 2960 beherrscht nur 802.1Q, daher entfällt <code>switchport trunk encapsulation dot1q</code> (auf Layer-3-Switches wie der 3560 ist der Befehl vor <code>switchport mode trunk</code> nötig). Aus Sicherheitsgründen sollte das Native VLAN auf ein ungenutztes VLAN gelegt werden (z. B. <code>switchport trunk native vlan 999</code>, auf beiden Seiten gleich).</p>
            <p><strong>Bewertung:</strong> Fa0/5 1 P, Fa0/8 mit Voice-VLAN 1,5 P, Trunk mit erlaubten VLANs 1,5 P.</p>`
        },
        {
          q: `<p><strong>d)</strong> Beschreibe den Aufbau des <strong>802.1Q-Tags</strong> (Position im Ethernet-Frame, Felder mit Größe) und erkläre, welches Feld für die Sprachqualität der IP-Telefone wichtig ist.</p>`,
          points: 4,
          solution: `
            <p>Der Tag ist <strong>4 Byte</strong> groß und wird zwischen <strong>Quell-MAC-Adresse</strong> und <strong>EtherType/Länge</strong> eingefügt. Der maximale Frame wächst dadurch von 1.518 auf 1.522 Byte.</p>
            <table>
              <thead><tr><th>Feld</th><th>Größe</th><th>Bedeutung</th></tr></thead>
              <tbody>
                <tr><td>TPID</td><td>16 Bit</td><td>Kennung 0x8100 = „es folgt ein VLAN-Tag“</td></tr>
                <tr><td>PCP</td><td>3 Bit</td><td>Priorität 0–7 (Class of Service)</td></tr>
                <tr><td>DEI</td><td>1 Bit</td><td>Frame darf bei Überlast bevorzugt verworfen werden</td></tr>
                <tr><td>VID</td><td>12 Bit</td><td>VLAN-ID; 2¹² = 4.096 Werte, nutzbar 1–4094 (0 und 4095 reserviert)</td></tr>
              </tbody>
            </table>
            <p>Für die Telefone ist das <strong>PCP-Feld</strong> wichtig: Sprachpakete werden hoch priorisiert (üblich Wert 5) und von den Switches bevorzugt weitergeleitet – so bleiben Verzögerung und Jitter gering (QoS).</p>
            <p><strong>Bewertung:</strong> Position und Größe 1 P, Felder 2 P, PCP/QoS 1 P.</p>`
        },
        {
          q: `<p><strong>e)</strong> Nach der Inbetriebnahme erreichen die PCs der Werkstatt ihr Gateway nicht, die IP-Telefone funktionieren. Werte die folgende Ausgabe aus, benenne den Fehler und gib den Befehl zur Behebung an. Worauf musst du bei dem Befehl achten?</p>
            <pre><code>SW-CORE# show interfaces trunk
Port      Mode   Encapsulation  Status     Native vlan
Gi0/1     on     802.1q         trunking   1
Gi0/2     on     802.1q         trunking   1
Gi0/24    on     802.1q         trunking   1

Port      Vlans allowed on trunk
Gi0/1     10,30,40,99
Gi0/2     20,30,40,99
Gi0/24    10,30,40,99</code></pre>`,
          points: 4,
          solution: `
            <p><strong>Fehler:</strong> Auf dem Trunk <strong>Gi0/24 zum Router</strong> ist VLAN 20 nicht erlaubt. Die Frames der Werkstatt-PCs kommen zwar über Gi0/2 bis zum SW-CORE, werden aber nicht zum Router weitergeleitet – das Gateway 172.20.17.129 (Subinterface Gi0/0.20) ist unerreichbar. VLAN 40 (Telefone) ist erlaubt, deshalb funktionieren diese.</p>
            <pre><code>SW-CORE(config)# interface GigabitEthernet0/24
SW-CORE(config-if)# switchport trunk allowed vlan add 20</code></pre>
            <p><strong>Achtung:</strong> Ohne <code>add</code> (also <code>switchport trunk allowed vlan 20</code>) wird die Liste <strong>ersetzt</strong> – dann wäre nur noch VLAN 20 erlaubt und alle anderen VLANs fielen aus. Alternativ die vollständige Liste angeben: <code>switchport trunk allowed vlan 10,20,30,40,99</code>.</p>
            <p><strong>Bewertung:</strong> Fehler mit Begründung 2 P, Befehl 1 P, Hinweis auf <code>add</code> 1 P.</p>`
        },
        {
          q: `<p><strong>f)</strong> Die Werkstatt-PCs erhalten keine IP-Adresse per DHCP, obwohl der Bereich auf dem DHCP-Server 172.20.18.10 angelegt ist. Erkläre die Ursache und gib die nötige Router-Konfiguration an.</p>`,
          points: 3,
          solution: `
            <p><strong>Ursache:</strong> Ein Client ohne Adresse sendet <strong>DHCPDISCOVER als Broadcast</strong> (Ziel 255.255.255.255). Router leiten Broadcasts nicht in andere Netze weiter – der Server in VLAN 30 erhält die Anfrage nie.</p>
            <p><strong>Lösung: DHCP-Relay</strong> auf dem Subinterface der Werkstatt (und aller anderen Client-VLANs):</p>
            <pre><code>interface GigabitEthernet0/0.20
 ip helper-address 172.20.18.10</code></pre>
            <p>Der Router nimmt den Broadcast an, leitet ihn als <strong>Unicast</strong> an den Server weiter und trägt seine eigene Adresse im VLAN (172.20.17.129) als Relay-Agent-Adresse (giaddr) ein. Daran erkennt der Server, aus welchem Bereich er eine Adresse vergeben muss.</p>
            <p><strong>Bewertung:</strong> Ursache 1 P, Befehl am richtigen Interface 1 P, Funktionsweise 1 P.</p>`
        }
      ]
    },
    {
      id: "aen-a3", set: "A", part: "aen", points: 25,
      title: "AEN A3: Firewall-Regelwerk mit DMZ und NAT",
      scenario: `
        <p>Die <strong>Holsteiner Landtechnik GmbH</strong> betreibt einen Online-Ersatzteilshop und einen eigenen Mailserver. Die zentrale Firewall FW-MELDORF (Stateful Packet Inspection) hat drei Zonen:</p>
        <pre class="ascii">Internet ── [WAN 203.0.113.18/29] FW-MELDORF [LAN] ── LAN 172.20.16.0/22
                                     │
                                   [DMZ]
                                10.10.50.0/24</pre>
        <table>
          <thead><tr><th>System</th><th>Zone</th><th>Adresse</th></tr></thead>
          <tbody>
            <tr><td>Webserver (Ersatzteilshop)</td><td>DMZ</td><td>10.10.50.10, öffentlich erreichbar über 203.0.113.20</td></tr>
            <tr><td>Mail-Relay (Spam-/Virenfilter)</td><td>DMZ</td><td>10.10.50.20</td></tr>
            <tr><td>interner DNS-Server</td><td>LAN</td><td>172.20.18.11</td></tr>
            <tr><td>interner Mailserver</td><td>LAN</td><td>172.20.18.20</td></tr>
            <tr><td>Management-Netz der Administratoren</td><td>LAN</td><td>172.20.18.64/27</td></tr>
          </tbody>
        </table>
        <p><strong>Anforderungen:</strong></p>
        <ol>
          <li>Aus dem Internet ist nur der Webshop per HTTPS erreichbar.</li>
          <li>E-Mails aus dem Internet werden nur beim Mail-Relay in der DMZ angenommen.</li>
          <li>Das Mail-Relay leitet E-Mails an den internen Mailserver weiter.</li>
          <li>Alle Clients im LAN dürfen im Internet surfen (HTTP und HTTPS).</li>
          <li>Nur der interne DNS-Server darf DNS-Anfragen ins Internet stellen.</li>
          <li>Die Administratoren dürfen aus dem Management-Netz per SSH auf die Server in der DMZ zugreifen.</li>
          <li>Jeder andere Verkehr ist verboten.</li>
        </ol>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Erstelle das Regelwerk der Firewall als Tabelle mit den Spalten Nr., Quelle, Ziel, Protokoll, Zielport und Aktion. Die Regeln werden von oben nach unten geprüft.</p>`,
          points: 8,
          solution: `
            <table>
              <thead><tr><th>Nr.</th><th>Quelle</th><th>Ziel</th><th>Protokoll</th><th>Zielport</th><th>Aktion</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>any (Internet)</td><td>10.10.50.10</td><td>TCP</td><td>443</td><td>erlauben</td></tr>
                <tr><td>2</td><td>any (Internet)</td><td>10.10.50.20</td><td>TCP</td><td>25</td><td>erlauben</td></tr>
                <tr><td>3</td><td>10.10.50.20</td><td>172.20.18.20</td><td>TCP</td><td>25</td><td>erlauben</td></tr>
                <tr><td>4</td><td>172.20.16.0/22</td><td>any (Internet)</td><td>TCP</td><td>80, 443</td><td>erlauben</td></tr>
                <tr><td>5</td><td>172.20.18.11</td><td>any (Internet)</td><td>UDP und TCP</td><td>53</td><td>erlauben</td></tr>
                <tr><td>6</td><td>172.20.18.64/27</td><td>10.10.50.0/24</td><td>TCP</td><td>22</td><td>erlauben</td></tr>
                <tr><td>7</td><td>any</td><td>any</td><td>any</td><td>any</td><td>verweigern</td></tr>
              </tbody>
            </table>
            <ul>
              <li>Antwortpakete brauchen keine eigenen Regeln – die Stateful-Firewall lässt sie anhand der Verbindungstabelle automatisch zu.</li>
              <li>Ob Regel 1 die öffentliche (203.0.113.20) oder die interne Adresse (10.10.50.10) enthält, hängt vom Hersteller ab (Regelprüfung vor oder nach der Adressumsetzung). Beides wird gewertet, wenn die Portweiterleitung erkennbar ist.</li>
              <li>Quellports werden nicht eingeschränkt, sie sind dynamisch (49152–65535).</li>
              <li>Ergänzung für moderne Browser: HTTP/3 nutzt QUIC über UDP 443 – ohne Freigabe fallen die Browser auf TCP zurück.</li>
            </ul>
            <p><strong>Bewertung:</strong> je richtiger Regel 1 P, abschließende Deny-Regel bzw. richtige Reihenfolge 2 P (bei Regel 5 muss TCP 53 nicht zwingend genannt sein).</p>`
        },
        {
          q: `<p><strong>b)</strong> Erkläre die Prinzipien <strong>„first match“</strong> und <strong>„implicit deny“</strong>. Was würde passieren, wenn Regel 7 versehentlich an erster Stelle stünde?</p>`,
          points: 3,
          solution: `
            <ul>
              <li><strong>First match:</strong> Die Regeln werden von oben nach unten geprüft; die <strong>erste passende</strong> Regel entscheidet, danach wird nicht weiter geprüft. Spezielle Regeln gehören deshalb nach oben, allgemeine nach unten.</li>
              <li><strong>Implicit deny:</strong> Passt keine Regel, wird das Paket verworfen („alles, was nicht ausdrücklich erlaubt ist, ist verboten“). Regel 7 macht dies sichtbar und ermöglicht eine Protokollierung.</li>
            </ul>
            <p>Stünde Regel 7 oben, würde sie auf <strong>jedes</strong> Paket passen → der gesamte Verkehr würde blockiert, die Erlaubnis-Regeln würden nie erreicht (Webshop, Mail und Internet ausgefallen).</p>
            <p><strong>Bewertung:</strong> je Prinzip 1 P, Auswirkung 1 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> Erläutere den Unterschied zwischen einem statischen Paketfilter und einer Firewall mit <strong>Stateful Packet Inspection</strong>. Nenne zwei zusätzliche Funktionen einer <strong>Next-Generation-Firewall</strong>.</p>`,
          points: 4,
          solution: `
            <p><strong>Statischer Paketfilter:</strong> prüft jedes Paket einzeln nur anhand der Header-Daten (IP-Adressen, Protokoll, Ports). Für Antworten braucht man eigene Regeln, z. B. „erlaube alles mit Quellport 443 nach innen“ – das ist grob und leicht auszutricksen.</p>
            <p><strong>Stateful Packet Inspection:</strong> merkt sich den <strong>Verbindungszustand</strong> in einer Zustandstabelle (z. B. TCP-Handshake, Quell-/Zielport). Antwortpakete werden nur zugelassen, wenn sie zu einer bekannten, erlaubten Verbindung gehören. Unaufgeforderte Pakete von außen werden verworfen.</p>
            <p><strong>NGFW-Funktionen</strong> (zwei genügen): Anwendungserkennung unabhängig vom Port (z. B. „Filesharing blockieren“), integriertes IPS, Benutzerbezug der Regeln (Anbindung an AD), TLS-Inspektion, URL-Filter und Malware-Sandbox.</p>
            <p><strong>Bewertung:</strong> Unterschied 2 P, zwei NGFW-Funktionen 2 P.</p>`
        },
        {
          q: `<p><strong>d)</strong> (1) Gib die Portweiterleitung (Destination NAT) für den Webshop an. (2) Zwei Clients greifen gleichzeitig mit demselben Quellport auf einen Server im Internet zu. Die Firewall übersetzt ausgehenden Verkehr per PAT auf ihre WAN-Adresse 203.0.113.18. Vervollständige die Übersetzungstabelle und begründe, warum die Firewall den Port ändern muss. (3) Erkläre, warum NAT auch bei TLS-verschlüsselten Verbindungen funktioniert.</p>
            <table>
              <thead><tr><th>Quelle intern</th><th>Quelle nach PAT</th><th>Ziel</th></tr></thead>
              <tbody>
                <tr><td>172.20.16.23:51000</td><td>?</td><td>198.51.100.80:443</td></tr>
                <tr><td>172.20.16.57:51000</td><td>?</td><td>198.51.100.80:443</td></tr>
              </tbody>
            </table>`,
          points: 6,
          solution: `
            <p><strong>(1) Portweiterleitung:</strong> Pakete an <strong>203.0.113.20:443/TCP</strong> werden auf <strong>10.10.50.10:443</strong> umgesetzt (Zieladresse wird ersetzt).</p>
            <p><strong>(2) PAT-Tabelle</strong> (Portnummern beispielhaft):</p>
            <table>
              <thead><tr><th>Quelle intern</th><th>Quelle nach PAT</th><th>Ziel</th></tr></thead>
              <tbody>
                <tr><td>172.20.16.23:51000</td><td>203.0.113.18:51000</td><td>198.51.100.80:443</td></tr>
                <tr><td>172.20.16.57:51000</td><td>203.0.113.18:<strong>51001</strong></td><td>198.51.100.80:443</td></tr>
              </tbody>
            </table>
            <p>Beide Verbindungen haben nach außen dieselbe IP-Adresse und dasselbe Ziel. Die Antworten des Servers könnten nur anhand des <strong>Zielports</strong> dem richtigen Client zugeordnet werden – deshalb muss die Firewall mindestens einen der Quellports ändern und die Zuordnung in ihrer NAT-Tabelle speichern.</p>
            <p><strong>(3)</strong> NAT verändert nur den <strong>IP-Header</strong> (Schicht 3) und die <strong>Ports im TCP/UDP-Header</strong> (Schicht 4) und berechnet die Prüfsummen neu. TLS verschlüsselt erst die Nutzdaten <strong>oberhalb</strong> von TCP. Die Firewall muss diese Daten weder lesen noch ändern, und TLS schützt die Adressen im IP-Header nicht – daher bemerkt die Verbindung die Umsetzung nicht.</p>
            <p><strong>Bewertung:</strong> (1) 1 P, (2) Tabelle 1 P und Begründung 2 P, (3) 2 P.</p>`
        },
        {
          q: `<p><strong>e)</strong> Begründe, warum Webserver und Mail-Relay in der DMZ stehen und nicht im LAN. Der IT-Leiter überlegt, die DMZ künftig zwischen zwei Firewalls unterschiedlicher Hersteller einzurichten. Erläutere den Vorteil.</p>`,
          points: 4,
          solution: `
            <p><strong>DMZ:</strong> Webserver und Mail-Relay müssen aus dem Internet erreichbar sein und sind damit besonders angreifbar. Wird einer von ihnen kompromittiert, steht der Angreifer nur in der DMZ. Von dort darf er laut Regelwerk nur den internen Mailserver auf Port 25 erreichen, nicht aber Clients, Dateiserver oder das ERP im LAN. Ohne DMZ hätte er sofort Zugriff auf das interne Netz.</p>
            <p><strong>Zweistufige DMZ mit zwei Herstellern:</strong> Ein Angreifer muss zwei unabhängige Firewalls überwinden. Eine Sicherheitslücke oder ein Konfigurationsfehler bei einem Hersteller reicht dann nicht aus, um ins LAN zu gelangen (Defense in Depth). Nachteil: höhere Kosten und doppelter Verwaltungsaufwand.</p>
            <p><strong>Bewertung:</strong> DMZ-Begründung 2 P, Vorteil der zweistufigen Lösung 2 P.</p>`
        }
      ]
    },
    {
      id: "aen-a4", set: "A", part: "aen", points: 25,
      title: "AEN A4: WLAN mit 802.1X, Gästenetz und PoE-Budget",
      scenario: `
        <p>Im Neubau der <strong>Holsteiner Landtechnik GmbH</strong> soll ein flächendeckendes WLAN für Verwaltung, Werkstatthalle und Ersatzteillager entstehen. Geplant sind:</p>
        <ul>
          <li>ein <strong>Mitarbeiter-WLAN</strong> mit persönlicher Anmeldung am Active Directory (RADIUS-Server: Windows NPS),</li>
          <li>ein <strong>Gäste-WLAN</strong> für Kunden, die in der Werkstatt auf ihre Maschinen warten (erwartet: bis zu 25 Gäste gleichzeitig). Der Internetanschluss hat 500 Mbit/s im Download; Gäste dürfen höchstens 20 % davon nutzen.</li>
        </ul>
        <p>Ein Access-Switch mit 48 PoE+-Ports und einem <strong>PoE-Budget von 740 W</strong> soll folgende Endgeräte versorgen. Der Switch reserviert die Leistung nach der PoE-Klasse am Port (PSE-Seite).</p>
        <table>
          <thead><tr><th>Gerät</th><th>Anzahl</th><th>Standard / Klasse</th><th>Leistung am Switch-Port</th></tr></thead>
          <tbody>
            <tr><td>Access Point (Wi-Fi 6)</td><td>14</td><td>IEEE 802.3at, Klasse 4</td><td>30 W</td></tr>
            <tr><td>IP-Kamera</td><td>6</td><td>IEEE 802.3af, Klasse 3</td><td>15,4 W</td></tr>
            <tr><td>IP-Telefon</td><td>20</td><td>IEEE 802.3af, Klasse 2</td><td>7 W</td></tr>
          </tbody>
        </table>
        <p>Ein Kollege schlägt vor, das Mitarbeiter-WLAN zusätzlich mit einer <strong>versteckten SSID</strong> zu schützen.</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Das Mitarbeiter-WLAN wird mit <strong>WPA3-Enterprise (IEEE 802.1X)</strong> betrieben. Nenne die drei beteiligten Rollen mit dem jeweiligen Gerät aus der Ausgangssituation, beschreibe den Ablauf der Anmeldung und nenne einen Vorteil gegenüber einem gemeinsamen WLAN-Schlüssel (Personal/PSK).</p>`,
          points: 6,
          solution: `
            <table>
              <thead><tr><th>Rolle</th><th>Gerät</th></tr></thead>
              <tbody>
                <tr><td>Supplicant (Antragsteller)</td><td>Notebook bzw. Tablet des Mitarbeiters</td></tr>
                <tr><td>Authenticator</td><td>Access Point bzw. WLAN-Controller</td></tr>
                <tr><td>Authentication Server</td><td>RADIUS-Server (Windows NPS), der gegen das Active Directory prüft</td></tr>
              </tbody>
            </table>
            <p><strong>Ablauf:</strong> Der Client verbindet sich mit der SSID. Der AP lässt zunächst nur EAP-Nachrichten durch und leitet sie in RADIUS-Paketen an den NPS weiter. Der NPS prüft die Anmeldedaten – am sichersten mit <strong>EAP-TLS</strong> über Zertifikate, sonst z. B. PEAP mit Benutzername/Passwort. Bei Erfolg sendet er ein <strong>Access-Accept</strong> (optional mit VLAN-Zuweisung). Client und AP leiten daraus individuelle Sitzungsschlüssel ab, danach ist der normale Datenverkehr freigegeben. Bei Misserfolg folgt ein Access-Reject.</p>
            <p><strong>Vorteil</strong> (einer genügt): Jeder meldet sich persönlich an. Verlässt ein Mitarbeiter das Unternehmen, wird nur sein Konto gesperrt – bei PSK müsste der Schlüssel auf allen Geräten geändert werden. Außerdem sind Anmeldungen einzelnen Personen zuordenbar, und jeder Client erhält eigene Schlüssel.</p>
            <p><strong>Bewertung:</strong> Rollen 3 × 1 P, Ablauf 2 P, Vorteil 1 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Nenne drei Maßnahmen, mit denen das Gäste-WLAN vom Firmennetz getrennt und abgesichert wird. Berechne die Bandbreite, die jedem Gast bei voller Auslastung zusteht. Beurteile den Vorschlag der versteckten SSID.</p>`,
          points: 5,
          solution: `
            <p><strong>Maßnahmen</strong> (drei genügen):</p>
            <ul>
              <li>eigene SSID in einem <strong>eigenen VLAN</strong> (z. B. VLAN 50), das an der Firewall nur Zugriff ins Internet erhält – kein Zugriff auf LAN und DMZ,</li>
              <li><strong>Client-Isolation</strong>: Gäste können sich untereinander nicht erreichen,</li>
              <li><strong>Captive Portal</strong> mit Nutzungsbedingungen bzw. zeitlich begrenzten Vouchern,</li>
              <li><strong>Bandbreitenbegrenzung</strong>, damit Gäste den Firmenanschluss nicht auslasten,</li>
              <li>Verschlüsselung auch im offenen Gastnetz mit WPA3 OWE („Enhanced Open“).</li>
            </ul>
            <p><strong>Bandbreite:</strong> 20 % von 500 Mbit/s = 100 Mbit/s für alle Gäste → 100 Mbit/s ÷ 25 = <strong>4 Mbit/s je Gast</strong>.</p>
            <p><strong>Versteckte SSID:</strong> kein wirksamer Schutz. Die SSID steht weiterhin in den Probe Requests der Clients und in Assoziierungsframes und lässt sich mit jedem WLAN-Analysewerkzeug mitlesen. Clients suchen zudem ständig aktiv nach dem versteckten Netz und verraten es dadurch auch außerhalb des Firmengeländes. Die Sicherheit kommt allein von WPA3-Enterprise.</p>
            <p><strong>Bewertung:</strong> drei Maßnahmen 3 P, Rechnung 1 P, Beurteilung 1 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> In der Werkstatthalle überlappen sich die Funkzellen von drei Access Points (AP-H1, AP-H2, AP-H3). Ordne ihnen im 2,4-GHz-Band geeignete Kanäle zu und begründe. Nenne zwei Vorteile des 5-GHz-Bands und erkläre, warum vor der Montage eine Ausleuchtungsmessung sinnvoll ist.</p>`,
          points: 5,
          solution: `
            <p><strong>2,4 GHz:</strong> AP-H1 Kanal <strong>1</strong>, AP-H2 Kanal <strong>6</strong>, AP-H3 Kanal <strong>11</strong>. Ein klassischer 2,4-GHz-Kanal ist rund 22 MHz breit, der Abstand zwischen zwei Kanalnummern beträgt aber nur 5 MHz. Überlappungsfrei sind deshalb nur Kanäle mit fünf Nummern Abstand – also 1, 6 und 11. So stören sich benachbarte Zellen nicht gegenseitig (keine Gleich- und Nachbarkanalstörungen). In reinen OFDM-Netzen mit 20 MHz ist in Europa auch das Schema 1/5/9/13 möglich; 1/6/11 ist aber der übliche Standard.</p>
            <p><strong>5 GHz</strong> (zwei Vorteile genügen): deutlich mehr überlappungsfreie Kanäle (z. B. 36, 40, 44, 48 und DFS-Kanäle), breitere Kanäle mit höherem Durchsatz (40/80 MHz), weniger Störungen durch Bluetooth, Mikrowellen und Nachbarnetze. Nachteil: geringere Reichweite, auf DFS-Kanälen muss der AP bei Radarerkennung den Kanal wechseln.</p>
            <p><strong>Ausleuchtung (Site Survey):</strong> In der Halle dämpfen und reflektieren Metall (Landmaschinen, Regale, Stahlträger) das Signal stark. Eine Messung zeigt, wo die APs tatsächlich hängen müssen, damit überall ausreichend Signalstärke und möglichst wenig Überlappung auf gleichen Kanälen erreicht werden.</p>
            <p><strong>Bewertung:</strong> Kanalzuordnung mit Begründung 2 P, 5-GHz-Vorteile 2 P, Ausleuchtung 1 P.</p>`
        },
        {
          q: `<p><strong>d)</strong> Prüfe rechnerisch, ob das PoE-Budget des Switches ausreicht, und gib die Auslastung in Prozent an. Wie viele zusätzliche Access Points der gleichen Klasse könnten noch angeschlossen werden? Nenne eine Lösung für den Fall, dass später Wi-Fi-7-APs mit IEEE 802.3bt eingesetzt werden.</p>`,
          points: 6,
          solution: `
            <p><strong>Bedarf:</strong> 14 ⋅ 30 W + 6 ⋅ 15,4 W + 20 ⋅ 7 W = 420 W + 92,4 W + 140 W = <strong>652,4 W</strong></p>
            <p><strong>Prüfung:</strong> 652,4 W ≤ 740 W → das Budget <strong>reicht</strong>. Auslastung: 652,4 ÷ 740 ≈ <strong>88,2 %</strong>.</p>
            <p><strong>Reserve:</strong> 740 W − 652,4 W = 87,6 W → 87,6 W ÷ 30 W ≈ 2,92 → <strong>2 zusätzliche APs</strong> (immer abrunden).</p>
            <p><strong>Wi-Fi 7 mit 802.3bt</strong> (Typ 3: bis 60 W am Port): Das Budget wäre schnell erschöpft, außerdem müssen die Ports 802.3bt unterstützen. Lösungen: Switch mit 802.3bt-Ports und größerem Budget bzw. zweitem Netzteil, Verteilung auf zwei Switches oder einzelne PoE-Injektoren.</p>
            <div class="callout merke"><strong>Merke:</strong> Am Switch zählt die Leistung auf der PSE-Seite (af 15,4 W, at 30 W, bt Typ 3 60 W, bt Typ 4 90 W). Am Endgerät kommt wegen der Leitungsverluste weniger an (af 12,95 W, at 25,5 W).</div>
            <p><strong>Bewertung:</strong> Bedarf 2 P, Prüfung und Auslastung 1 P, zusätzliche APs 1 P, 802.3bt-Lösung 2 P.</p>`
        },
        {
          q: `<p><strong>e)</strong> Nenne drei Sicherheitsverbesserungen von WPA3 gegenüber WPA2.</p>`,
          points: 3,
          solution: `
            <ul>
              <li><strong>SAE</strong> (Simultaneous Authentication of Equals) ersetzt im Personal-Modus die PSK-Anmeldung: Ein mitgeschnittener Handshake lässt sich nicht mehr offline per Wörterbuchangriff knacken.</li>
              <li><strong>Forward Secrecy</strong>: Wird das Passwort später bekannt, kann früher aufgezeichneter Verkehr trotzdem nicht entschlüsselt werden.</li>
              <li><strong>Protected Management Frames</strong> (IEEE 802.11w) sind Pflicht: Gefälschte Deauthentication-Frames (Abmelde-Angriffe) werden erkannt.</li>
              <li>Im Enterprise-Modus optional ein <strong>192-Bit-Sicherheitsmodus</strong> mit stärkeren Verfahren.</li>
            </ul>
            <p><strong>Bewertung:</strong> je Verbesserung 1 P.</p>`
        }
      ]
    },
    /* ===== Probeklausur B – Analyse und Entwicklung von Netzwerken (AEN), 90 min, 4 Aufgaben = 100 P ===== */
    {
      id: "aen-b1", set: "B", part: "aen", points: 25,
      title: "AEN B1: Standorte per VPN verbinden und Routing planen",
      scenario: `
        <p><strong>Ausgangssituation (gilt für die ganze Probeklausur AEN B):</strong> Die <strong>Westkant Getränke GmbH</strong> ist ein Getränkegroßhandel mit Zentrale in Husum und Niederlassungen in Heide und Niebüll. 25 Beschäftigte der Verwaltung arbeiten regelmäßig im Homeoffice. Du bist Auszubildende/r der <strong>Nordlicht IT GmbH</strong>, die das Netzwerk betreut. Alle Firmen und Adressen sind frei erfunden bzw. stammen aus Dokumentationsbereichen.</p>
        <p>Die Niederlassungen sollen sternförmig (Hub-and-Spoke) über die Zentrale verbunden werden:</p>
        <table>
          <thead><tr><th>Standort</th><th>LAN</th><th>Firewall/Router, WAN-Adresse</th></tr></thead>
          <tbody>
            <tr><td>Husum (Zentrale)</td><td>10.10.0.0/20</td><td>FW-HUS, 198.51.100.10 (Provider-Gateway 198.51.100.1)</td></tr>
            <tr><td>Heide</td><td>10.20.0.0/24</td><td>R-HEI, 203.0.113.34 (Provider-Gateway 203.0.113.33)</td></tr>
            <tr><td>Niebüll</td><td>10.30.0.0/24</td><td>R-NIE, 203.0.113.66</td></tr>
            <tr><td>Homeoffice-Clients (VPN-Adresspool)</td><td>10.99.0.0/24</td><td>Einwahl an FW-HUS</td></tr>
          </tbody>
        </table>
        <p><strong>Routingtabelle von FW-HUS (Auszug):</strong></p>
        <table>
          <thead><tr><th>Ziel</th><th>Next Hop / Schnittstelle</th></tr></thead>
          <tbody>
            <tr><td>0.0.0.0/0</td><td>198.51.100.1 (WAN)</td></tr>
            <tr><td>10.0.0.0/8</td><td>Null0 (verwerfen)</td></tr>
            <tr><td>10.10.0.0/20</td><td>LAN (direkt verbunden)</td></tr>
            <tr><td>10.20.0.0/24</td><td>Tunnel1 (VPN Heide)</td></tr>
            <tr><td>10.30.0.0/24</td><td>Tunnel2 (VPN Niebüll)</td></tr>
            <tr><td>10.99.0.0/24</td><td>VPN-Einwahl (Remote Access)</td></tr>
          </tbody>
        </table>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Ordne der Anbindung der Niederlassungen und der Anbindung der Homeoffice-Arbeitsplätze jeweils eine VPN-Art zu und begründe.</p>`,
          points: 4,
          solution: `
            <ul>
              <li><strong>Niederlassungen → Site-to-Site-VPN</strong> (Standortvernetzung, Gateway-to-Gateway): Die Router bzw. Firewalls der Standorte bauen einen dauerhaften Tunnel auf. Für die Anwender ist er unsichtbar, sie brauchen keine eigene Software, und ganze Netze werden miteinander verbunden.</li>
              <li><strong>Homeoffice → Remote-Access-VPN</strong> (End-to-Site, Client-to-Site): Auf dem Notebook läuft ein VPN-Client, der sich bei Bedarf mit der Firewall der Zentrale verbindet. Jeder Nutzer meldet sich einzeln an (möglichst mit MFA) und erhält eine Adresse aus dem VPN-Pool 10.99.0.0/24.</li>
            </ul>
            <p><strong>Bewertung:</strong> je Zuordnung mit Begründung 2 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Die Standorte werden per <strong>IPsec</strong> verbunden. Erkläre die Aufgaben von IKE und ESP, begründe, warum AH hinter einem NAT-Router nicht funktioniert, und beschreibe den Unterschied zwischen Tunnel- und Transportmodus. Welcher Modus wird hier eingesetzt?</p>`,
          points: 6,
          solution: `
            <ul>
              <li><strong>IKE</strong> (Internet Key Exchange, heute IKEv2): Die Gateways authentisieren sich gegenseitig (Pre-Shared Key oder Zertifikate), tauschen per <strong>Diffie-Hellman</strong> Schlüsselmaterial aus und handeln die <strong>Security Associations</strong> aus (Verfahren, Schlüssel, Lebensdauer).</li>
              <li><strong>ESP</strong> (Encapsulating Security Payload): <strong>verschlüsselt</strong> die Nutzdaten und sichert Integrität und Herkunft der Pakete (z. B. mit AES-GCM).</li>
              <li><strong>AH</strong> (Authentication Header) verschlüsselt nicht und schützt die Integrität auch der unveränderlichen Felder des <strong>IP-Headers</strong>, also der Adressen. NAT ändert die Quelladresse → die Integritätsprüfung schlägt beim Empfänger fehl. ESP funktioniert dagegen mit NAT-Traversal (Kapselung in UDP 4500).</li>
              <li><strong>Tunnelmodus:</strong> Das <strong>gesamte</strong> ursprüngliche IP-Paket wird verschlüsselt und mit einem neuen äußeren IP-Header (Adressen der Gateways) versehen – die internen Adressen bleiben verborgen. <strong>Transportmodus:</strong> Nur die Nutzdaten werden geschützt, der Original-IP-Header bleibt; geeignet für die direkte Verbindung zweier Hosts.</li>
            </ul>
            <p>Hier wird der <strong>Tunnelmodus</strong> eingesetzt, weil Gateways ganze Netze (10.20.0.0/24 ↔ 10.10.0.0/20) verbinden.</p>
            <p><strong>Bewertung:</strong> IKE 2 P, ESP 1 P, AH/NAT 1 P, Modi mit Zuordnung 2 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> Für das Homeoffice stehen IPsec, ein SSL/TLS-VPN und WireGuard zur Auswahl. Vergleiche die drei Lösungen anhand von drei Kriterien in einer Tabelle und gib eine begründete Empfehlung.</p>`,
          points: 5,
          solution: `
            <table>
              <thead><tr><th>Kriterium</th><th>IPsec (IKEv2)</th><th>SSL/TLS-VPN</th><th>WireGuard</th></tr></thead>
              <tbody>
                <tr><td>Durchlässigkeit durch Hotel- und Gäste-Firewalls, NAT</td><td>mittel: UDP 500/4500 und ggf. ESP müssen offen sein</td><td>sehr gut: läuft über TCP/UDP 443 wie normales HTTPS</td><td>mittel: ein frei wählbarer UDP-Port</td></tr>
                <tr><td>Aufwand/Client</td><td>oft im Betriebssystem enthalten, Konfiguration komplex</td><td>Client des Firewall-Herstellers oder Browser, einfache Verteilung</td><td>schlanker Client, sehr einfache Konfiguration mit Schlüsselpaaren</td></tr>
                <tr><td>Leistung und Sicherheit</td><td>ausgereifter Standard, viele Optionen (Fehlkonfiguration möglich)</td><td>bewährt, Sicherheit hängt stark von der Firmware des Herstellers ab (häufige Angriffsziele)</td><td>sehr schnell, kleiner Code mit festen modernen Verfahren; Benutzeranmeldung/MFA muss zusätzlich gelöst werden</td></tr>
              </tbody>
            </table>
            <p><strong>Empfehlung (Beispiel):</strong> ein <strong>SSL/TLS-VPN</strong> des vorhandenen Firewall-Herstellers mit MFA und Zertifikaten auf den Firmengeräten. Es funktioniert aus fast jedem Netz, lässt sich zentral an das AD anbinden, und die Mitarbeitenden brauchen keine Portfreigaben. Voraussetzung: konsequentes Patchen der Firewall. Andere Empfehlungen sind mit schlüssiger Begründung ebenfalls richtig.</p>
            <p><strong>Bewertung:</strong> Vergleich (drei Kriterien für alle drei Lösungen) 3 P, Empfehlung mit Begründung 2 P.</p>`
        },
        {
          q: `<p><strong>d)</strong> Bestimme mithilfe der Routingtabelle von FW-HUS, wohin Pakete an die folgenden Ziele weitergeleitet werden, und begründe kurz: (1) 10.30.0.77 · (2) 10.10.12.4 · (3) 10.20.1.5 · (4) 192.0.2.44. Erkläre außerdem, wozu der Eintrag <code>10.0.0.0/8 → Null0</code> dient.</p>`,
          points: 6,
          solution: `
            <p><strong>Regel: Longest Prefix Match</strong> – von allen passenden Einträgen gewinnt der mit dem längsten Präfix (der spezifischste).</p>
            <ol>
              <li><strong>10.30.0.77</strong> passt zu 0.0.0.0/0, 10.0.0.0/8 und 10.30.0.0/24 → längstes Präfix /24 → <strong>Tunnel2 (Niebüll)</strong>.</li>
              <li><strong>10.10.12.4</strong>: 10.10.0.0/20 umfasst 10.10.0.0 – 10.10.15.255 → <strong>LAN (direkt)</strong>.</li>
              <li><strong>10.20.1.5</strong> liegt nicht in 10.20.0.0/24 (nur 10.20.0.x) → passend sind nur /8 und /0 → <strong>Null0, das Paket wird verworfen</strong>.</li>
              <li><strong>192.0.2.44</strong> passt nur zur Default-Route → <strong>198.51.100.1 (Internet)</strong>.</li>
            </ol>
            <p><strong>Null0-Route:</strong> Private 10er-Adressen, für die es kein konkretes Standortnetz gibt, dürfen nicht über die Default-Route ins Internet geschickt werden. Das würde unnötigen Verkehr und Informationen über interne Adressen nach außen geben und könnte bei einem ausgefallenen Tunnel Pakete unverschlüsselt Richtung Provider leiten. Die Sammelroute verwirft sie gezielt – die spezifischeren Standortrouten haben trotzdem Vorrang.</p>
            <p><strong>Bewertung:</strong> je Ziel 1 P, Null0-Route 2 P.</p>`
        },
        {
          q: `<p><strong>e)</strong> Gib die statischen Routen für den Router <strong>R-HEI</strong> in Cisco-IOS-Syntax an. Der Tunnel zur Zentrale ist die Schnittstelle <code>Tunnel0</code>; Niebüll und die Homeoffice-Clients werden über die Zentrale erreicht. Der Internetverkehr der Niederlassung geht direkt zum Provider.</p>`,
          points: 4,
          solution: `
            <pre><code>ip route 10.10.0.0 255.255.240.0 Tunnel0
ip route 10.30.0.0 255.255.255.0 Tunnel0
ip route 10.99.0.0 255.255.255.0 Tunnel0
ip route 0.0.0.0 0.0.0.0 203.0.113.33</code></pre>
            <p>Die Maske für /20 ist 255.255.240.0 (20 Einsen: 8 + 8 + 4 → drittes Oktett 11110000 = 240). Alternativ ist eine Sammelroute <code>ip route 10.0.0.0 255.0.0.0 Tunnel0</code> möglich, weil das eigene LAN 10.20.0.0/24 als direkt verbundenes, spezifischeres Netz Vorrang hat.</p>
            <p><strong>Bewertung:</strong> je Route 1 P.</p>`
        }
      ]
    },
    {
      id: "aen-b2", set: "B", part: "aen", points: 25,
      title: "AEN B2: Verfügbarkeit, Gateway-Redundanz, STP und Link Aggregation",
      scenario: `
        <p>Seit die <strong>Westkant Getränke GmbH</strong> Bestellungen ihrer Gastronomiekunden über einen Webshop annimmt und die Niederlassungen per VPN angebunden sind, hängt das Geschäft am Netzwerk der Zentrale in Husum. Die Geschäftsführung verlangt für die Internetanbindung der Zentrale eine <strong>Gesamtverfügbarkeit von mindestens 99,8 %</strong>.</p>
        <p>Geplant sind: ein Glasfaseranschluss (Verfügbarkeit laut Provider 99,5 %) und ein unabhängiger 5G-Backup-Anschluss (98 %), dahinter in Reihe ein Firewall-Cluster (99,99 %) und ein Core-Switch (99,9 %).</p>
        <p>Das Client-VLAN 10 der Zentrale (10.10.1.0/24) erhält zwei Layer-3-Switches als redundantes Standardgateway mit <strong>HSRP</strong>:</p>
        <pre><code>CR1(config)# interface Vlan10
CR1(config-if)# ip address 10.10.1.2 255.255.255.0
CR1(config-if)# standby 10 ip 10.10.1.1
CR1(config-if)# standby 10 priority 110
CR1(config-if)# standby 10 preempt

CR2(config)# interface Vlan10
CR2(config-if)# ip address 10.10.1.3 255.255.255.0
CR2(config-if)# standby 10 ip 10.10.1.1
CR2(config-if)# standby 10 preempt</code></pre>
        <p>Drei Access-Switches sind im Dreieck verbunden (alle Links 1 Gbit/s, gleiche Pfadkosten):</p>
        <table>
          <thead><tr><th>Switch</th><th>Bridge-Priorität</th><th>MAC-Adresse</th></tr></thead>
          <tbody>
            <tr><td>SW-A</td><td>32768</td><td>00:1a:2b:00:00:0a</td></tr>
            <tr><td>SW-B</td><td>32768</td><td>00:1a:2b:00:00:05</td></tr>
            <tr><td>SW-C</td><td>28672</td><td>00:1a:2b:00:00:0f</td></tr>
          </tbody>
        </table>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Berechne die Verfügbarkeit der Internetanbindung (beide Anschlüsse parallel) und die Gesamtverfügbarkeit einschließlich Firewall-Cluster und Core-Switch. Gib die erwartete Ausfallzeit pro Jahr (8.760 h) an, prüfe die Vorgabe der Geschäftsführung und nenne die verbleibende Schwachstelle.</p>`,
          points: 6,
          solution: `
            <p><strong>Internet parallel:</strong> A = 1 − (1 − 0,995) ⋅ (1 − 0,98) = 1 − 0,005 ⋅ 0,02 = 1 − 0,0001 = <strong>0,9999 = 99,99 %</strong></p>
            <p><strong>Gesamt (seriell):</strong> A = 0,9999 ⋅ 0,9999 ⋅ 0,999 ≈ <strong>0,9988 = 99,88 %</strong></p>
            <p><strong>Ausfallzeit:</strong> (1 − 0,9988) ⋅ 8.760 h ≈ <strong>10,5 h pro Jahr</strong></p>
            <p><strong>Prüfung:</strong> 99,88 % ≥ 99,8 % → Vorgabe <strong>erfüllt</strong>. Zum Vergleich: nur mit Glasfaser wären es 0,995 ⋅ 0,9999 ⋅ 0,999 ≈ 99,39 % bzw. rund 53 h Ausfall pro Jahr.</p>
            <p><strong>Schwachstelle:</strong> Der <strong>Core-Switch</strong> ist mit 99,9 % das schwächste Glied und ein Single Point of Failure. Abhilfe: zweiter Core-Switch (Stack bzw. Multi-Chassis-Link-Aggregation).</p>
            <p><strong>Bewertung:</strong> Parallelschaltung 2 P, Gesamtverfügbarkeit 2 P, Ausfallzeit und Prüfung 1 P, Schwachstelle 1 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Werte die HSRP-Konfiguration aus: (1) Welcher Switch ist im Normalbetrieb aktiv und warum? (2) Welches Gateway tragen die Clients ein? (3) Was passiert, wenn CR1 ausfällt? (4) Welche Wirkung hat <code>preempt</code>? (5) Welche MAC-Adresse gehört zum virtuellen Gateway?</p>`,
          points: 6,
          solution: `
            <ol>
              <li><strong>CR1</strong> ist aktiv, weil er die höhere Priorität hat (110 gegenüber dem Standardwert 100 bei CR2). CR2 ist Standby.</li>
              <li>Die Clients tragen die <strong>virtuelle IP 10.10.1.1</strong> als Standardgateway ein – nicht die realen Adressen .2 oder .3.</li>
              <li>CR2 erhält keine Hello-Pakete mehr von CR1 (Standard: Hello alle 3 s, Hold-Time 10 s). Nach Ablauf der Hold-Time wird CR2 aktiv, übernimmt virtuelle IP und virtuelle MAC und meldet dies per Gratuitous ARP an die Switches. Die Clients merken nichts und müssen nichts ändern – nur wenige Sekunden Unterbrechung.</li>
              <li><strong>preempt:</strong> Kommt CR1 zurück, übernimmt er wegen seiner höheren Priorität wieder die aktive Rolle. Ohne preempt bliebe CR2 aktiv.</li>
              <li>HSRP (Version 1) verwendet die virtuelle MAC-Adresse <strong>0000.0c07.ac0a</strong> – die letzten beiden Hexziffern sind die Gruppennummer (10 = 0x0a).</li>
            </ol>
            <p>HSRP ist Cisco-proprietär; der herstellerunabhängige Standard mit gleichem Prinzip ist <strong>VRRP</strong> (Master/Backup).</p>
            <p><strong>Bewertung:</strong> (1) 1 P, (2) 1 P, (3) 2 P, (4) 1 P, (5) 1 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> Erkläre, warum im Dreieck der Access-Switches das <strong>Spanning Tree Protocol</strong> nötig ist. Bestimme die Root Bridge und den Port, der blockiert wird, jeweils mit Begründung.</p>`,
          points: 6,
          solution: `
            <p><strong>Warum STP:</strong> Das Dreieck bildet eine Schleife auf Schicht 2. Ethernet-Frames haben keine Lebensdauer (kein TTL); Broadcasts würden endlos kreisen (<strong>Broadcast-Sturm</strong>), die MAC-Tabellen würden ständig umlernen und das Netz bräche zusammen. STP schaltet redundante Wege logisch ab und aktiviert sie bei einem Ausfall wieder.</p>
            <p><strong>Root Bridge: SW-C</strong> – es gewinnt die niedrigste Bridge-ID (Priorität, danach MAC-Adresse). SW-C hat mit 28672 die niedrigste Priorität; die MAC-Adresse spielt nur bei gleicher Priorität eine Rolle.</p>
            <p><strong>Blockierter Port:</strong> SW-A und SW-B erreichen die Root Bridge direkt über einen Link (niedrigste Pfadkosten) → ihre Ports Richtung SW-C sind <strong>Root Ports</strong>. Auf dem Link SW-A ↔ SW-B haben beide dieselben Pfadkosten zur Root. Dann entscheidet die niedrigere Bridge-ID: gleiche Priorität 32768, SW-B hat die kleinere MAC (…:05 &lt; …:0a) → der Port von SW-B wird <strong>Designated Port</strong>, der <strong>Port von SW-A Richtung SW-B wird blockiert</strong>.</p>
            <p><strong>Bewertung:</strong> Notwendigkeit 2 P, Root Bridge mit Begründung 2 P, blockierter Port mit Begründung 2 P.</p>`
        },
        {
          q: `<p><strong>d)</strong> Zwischen Core-Switch und Server-Switch sollen zwei 10-Gbit/s-Leitungen per <strong>LACP</strong> gebündelt werden. Nenne zwei Voraussetzungen, gib die theoretische Gesamtbandbreite an und erkläre, warum eine einzelne große Dateiübertragung trotzdem höchstens 10 Gbit/s erreicht. Wie verhält sich STP gegenüber dem Bündel?</p>`,
          points: 4,
          solution: `
            <p><strong>Voraussetzungen</strong> (zwei genügen): gleiche Geschwindigkeit und Duplex aller Ports, gleiche VLAN-/Trunk-Konfiguration, LACP auf beiden Seiten (mindestens eine Seite <code>active</code>), alle Links enden am selben Switch bzw. Stack.</p>
            <p><strong>Gesamtbandbreite:</strong> 2 ⋅ 10 Gbit/s = <strong>20 Gbit/s</strong>.</p>
            <p><strong>Einzelne Verbindung:</strong> Die Switches verteilen den Verkehr per Hash (z. B. über Quell-/Ziel-MAC, -IP oder -Port) auf die Links. Alle Frames eines Datenstroms landen auf <strong>demselben</strong> Link, damit die Reihenfolge erhalten bleibt – ein einzelner Datenstrom erreicht daher maximal 10 Gbit/s. Erst viele parallele Verbindungen nutzen beide Links aus.</p>
            <p><strong>STP</strong> sieht den Port-Channel als <strong>eine logische Verbindung</strong> und blockiert keinen der beiden Links. Fällt ein Link aus, läuft der Verkehr ohne STP-Neuberechnung über den anderen weiter. Beispielkonfiguration je Port: <code>channel-group 1 mode active</code>.</p>
            <p><strong>Bewertung:</strong> Voraussetzungen 1 P, Bandbreite und Einzelstrom 2 P, STP 1 P.</p>`
        },
        {
          q: `<p><strong>e)</strong> Jede Nacht werden 120 GiB Daten von Heide in die Zentrale repliziert. Der Upload in Heide hat 100 Mbit/s, der Overhead durch VPN und Protokolle beträgt 12 %. Berechne die Übertragungsdauer und prüfe, ob das Zeitfenster von 22:00 bis 06:00 Uhr reicht.</p>`,
          points: 3,
          solution: `
            <p><strong>Datenmenge:</strong> 120 GiB = 120 ⋅ 2³⁰ Byte ⋅ 8 = 1.030.792.151.040 bit</p>
            <p><strong>Nutzbare Datenrate:</strong> 100 Mbit/s ⋅ (1 − 0,12) = 88 Mbit/s = 88.000.000 bit/s</p>
            <p><strong>Dauer:</strong> 1.030.792.151.040 bit ÷ 88.000.000 bit/s ≈ 11.714 s ≈ <strong>3 h 15 min</strong> → passt in das 8-Stunden-Fenster ✔.</p>
            <p><strong>Bewertung:</strong> Umrechnung in Bit (binäres Präfix, × 8) 1 P, nutzbare Rate 1 P, Ergebnis und Prüfung 1 P.</p>`
        }
      ]
    },
    {
      id: "aen-b3", set: "B", part: "aen", points: 25,
      title: "AEN B3: Paketmitschnitt auswerten – ARP-Spoofing und Portscan",
      scenario: `
        <p>Mehrere Beschäftigte der <strong>Westkant Getränke GmbH</strong> melden, dass das Intranet sporadisch langsam ist und der Browser vereinzelt Zertifikatswarnungen zeigt. Du schneidest über einen Spiegelport (SPAN) am Access-Switch SW-A den Verkehr im Client-VLAN 10 (10.10.1.0/24) mit. Bekannte Adressen:</p>
        <table>
          <thead><tr><th>Gerät</th><th>IP-Adresse</th><th>MAC-Adresse</th></tr></thead>
          <tbody>
            <tr><td>Client der Buchhaltung</td><td>10.10.1.23</td><td>3c:52:82:1a:2b:3c</td></tr>
            <tr><td>virtuelles Gateway (HSRP)</td><td>10.10.1.1</td><td>00:00:0c:07:ac:0a</td></tr>
            <tr><td>DNS-Server</td><td>10.10.0.53</td><td>–</td></tr>
            <tr><td>Intranet-Server / Dateiserver</td><td>10.10.0.80 / 10.10.0.20</td><td>–</td></tr>
            <tr><td>nicht inventarisiertes Notebook an SW-A, Port Fa0/12</td><td>10.10.1.66</td><td>08:00:27:5e:91:c4</td></tr>
          </tbody>
        </table>
        <p><strong>Mitschnitt (Auszug):</strong></p>
        <table>
          <thead><tr><th>Nr.</th><th>Zeit</th><th>Quelle</th><th>Ziel</th><th>Protokoll</th><th>Info</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>0.000</td><td>10.10.1.23</td><td>10.10.0.53</td><td>DNS</td><td>Standard query 0x3f2a A intranet.westkant.local</td></tr>
            <tr><td>2</td><td>0.003</td><td>10.10.0.53</td><td>10.10.1.23</td><td>DNS</td><td>Standard query response 0x3f2a A intranet.westkant.local A 10.10.0.80</td></tr>
            <tr><td>3</td><td>0.004</td><td>10.10.1.23</td><td>10.10.0.80</td><td>TCP</td><td>51544 → 443 [SYN] Seq=0</td></tr>
            <tr><td>4</td><td>0.005</td><td>10.10.0.80</td><td>10.10.1.23</td><td>TCP</td><td>443 → 51544 [SYN, ACK] Seq=0 Ack=1</td></tr>
            <tr><td>5</td><td>0.005</td><td>10.10.1.23</td><td>10.10.0.80</td><td>TCP</td><td>51544 → 443 [ACK] Seq=1 Ack=1</td></tr>
            <tr><td>6</td><td>0.006</td><td>10.10.1.23</td><td>10.10.0.80</td><td>TLSv1.3</td><td>Client Hello (SNI=intranet.westkant.local)</td></tr>
            <tr><td>7</td><td>10.001</td><td>3c:52:82:1a:2b:3c</td><td>ff:ff:ff:ff:ff:ff</td><td>ARP</td><td>Who has 10.10.1.1? Tell 10.10.1.23</td></tr>
            <tr><td>8</td><td>10.002</td><td>00:00:0c:07:ac:0a</td><td>3c:52:82:1a:2b:3c</td><td>ARP</td><td>10.10.1.1 is at 00:00:0c:07:ac:0a</td></tr>
            <tr><td>9</td><td>12.410</td><td>08:00:27:5e:91:c4</td><td>3c:52:82:1a:2b:3c</td><td>ARP</td><td>10.10.1.1 is at 08:00:27:5e:91:c4 (duplicate use of 10.10.1.1 detected!)</td></tr>
            <tr><td>10</td><td>12.411</td><td>08:00:27:5e:91:c4</td><td>00:00:0c:07:ac:0a</td><td>ARP</td><td>10.10.1.23 is at 08:00:27:5e:91:c4</td></tr>
            <tr><td>11</td><td>14.412</td><td>08:00:27:5e:91:c4</td><td>3c:52:82:1a:2b:3c</td><td>ARP</td><td>10.10.1.1 is at 08:00:27:5e:91:c4 (duplicate use of 10.10.1.1 detected!)</td></tr>
            <tr><td>12</td><td>14.413</td><td>08:00:27:5e:91:c4</td><td>00:00:0c:07:ac:0a</td><td>ARP</td><td>10.10.1.23 is at 08:00:27:5e:91:c4</td></tr>
            <tr><td>13</td><td>20.100</td><td>10.10.1.66</td><td>10.10.0.20</td><td>TCP</td><td>40112 → 21 [SYN]</td></tr>
            <tr><td>14</td><td>20.100</td><td>10.10.0.20</td><td>10.10.1.66</td><td>TCP</td><td>21 → 40112 [RST, ACK]</td></tr>
            <tr><td>15</td><td>20.101</td><td>10.10.1.66</td><td>10.10.0.20</td><td>TCP</td><td>40112 → 22 [SYN]</td></tr>
            <tr><td>16</td><td>20.101</td><td>10.10.0.20</td><td>10.10.1.66</td><td>TCP</td><td>22 → 40112 [SYN, ACK]</td></tr>
            <tr><td>17</td><td>20.101</td><td>10.10.1.66</td><td>10.10.0.20</td><td>TCP</td><td>40112 → 22 [RST]</td></tr>
            <tr><td>18</td><td>20.102</td><td>10.10.1.66</td><td>10.10.0.20</td><td>TCP</td><td>40112 → 23 [SYN]</td></tr>
            <tr><td>19</td><td>20.102</td><td>10.10.0.20</td><td>10.10.1.66</td><td>TCP</td><td>23 → 40112 [RST, ACK]</td></tr>
            <tr><td>20</td><td>20.103</td><td>10.10.1.66</td><td>10.10.0.20</td><td>TCP</td><td>40112 → 445 [SYN]</td></tr>
            <tr><td>21</td><td>20.103</td><td>10.10.0.20</td><td>10.10.1.66</td><td>TCP</td><td>445 → 40112 [SYN, ACK]</td></tr>
            <tr><td>22</td><td>20.103</td><td>10.10.1.66</td><td>10.10.0.20</td><td>TCP</td><td>40112 → 445 [RST]</td></tr>
            <tr><td>23</td><td>20.104</td><td>10.10.1.66</td><td>10.10.0.20</td><td>TCP</td><td>40112 → 3389 [SYN]</td></tr>
            <tr><td>24</td><td>20.104</td><td>10.10.0.20</td><td>10.10.1.66</td><td>TCP</td><td>3389 → 40112 [RST, ACK]</td></tr>
          </tbody>
        </table>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Beschreibe, was in den Frames 1 bis 6 passiert. Gehe dabei auf die verwendeten Protokolle und Ports ein.</p>`,
          points: 5,
          solution: `
            <ul>
              <li><strong>Frames 1–2:</strong> Der Client fragt den DNS-Server (UDP, Port 53) nach dem A-Record von intranet.westkant.local und erhält die IPv4-Adresse 10.10.0.80.</li>
              <li><strong>Frames 3–5:</strong> TCP-<strong>Drei-Wege-Handshake</strong> zum Intranet-Server: SYN → SYN/ACK → ACK. Danach ist die Verbindung aufgebaut.</li>
              <li><strong>Ports:</strong> Ziel ist Port <strong>443 (HTTPS)</strong>. Der Quellport 51544 ist ein dynamischer Port (49152–65535), den das Betriebssystem für diese Verbindung zufällig wählt.</li>
              <li><strong>Frame 6:</strong> Beginn des <strong>TLS-1.3-Handshakes</strong>: Der Client bietet Verschlüsselungsverfahren und seinen Schlüsselanteil an und nennt per SNI den gewünschten Servernamen. Ab dem Server Hello ist der weitere Verkehr verschlüsselt.</li>
            </ul>
            <p><strong>Bewertung:</strong> DNS 1 P, Handshake 2 P, Ports 1 P, TLS 1 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Analysiere die Frames 7 bis 12. Benenne den Angriff, erkläre seine Funktionsweise anhand der Frames und beschreibe die Folgen. Stelle einen Bezug zu den gemeldeten Zertifikatswarnungen her.</p>`,
          points: 6,
          solution: `
            <p><strong>Frames 7–8</strong> sind normal: Der Client fragt per Broadcast nach der MAC-Adresse des Gateways und erhält die echte virtuelle HSRP-MAC 00:00:0c:07:ac:0a.</p>
            <p><strong>Frames 9–12: ARP-Spoofing (ARP-Poisoning).</strong> Das Notebook mit der MAC 08:00:27:5e:91:c4 (10.10.1.66) sendet <strong>unaufgefordert</strong> und wiederholt (alle 2 s) gefälschte ARP-Antworten:</p>
            <ul>
              <li>an den Client: „10.10.1.1 (Gateway) hat meine MAC“ – Frames 9 und 11,</li>
              <li>an das Gateway: „10.10.1.23 (Client) hat meine MAC“ – Frames 10 und 12.</li>
            </ul>
            <p>ARP prüft Antworten nicht; beide Seiten überschreiben ihren ARP-Cache. Wireshark erkennt, dass dieselbe IP plötzlich zu zwei MAC-Adressen gehört („duplicate use“).</p>
            <p><strong>Folgen:</strong> Der gesamte Verkehr zwischen Client und Gateway läuft über das Notebook → <strong>Man-in-the-Middle</strong>. Der Angreifer kann unverschlüsselte Daten mitlesen und verändern oder den Verkehr verwerfen (DoS); das Weiterleiten verursacht die Verzögerungen.</p>
            <p><strong>Zertifikatswarnungen:</strong> Der Angreifer versucht offenbar, TLS-Verbindungen mit einem eigenen, nicht vertrauenswürdigen Zertifikat aufzubrechen. Die Warnungen zeigen, dass TLS den Angriff erkennt – Nutzer dürfen sie keinesfalls wegklicken.</p>
            <p><strong>Bewertung:</strong> Angriff benannt 1 P, Funktionsweise anhand der Frames 2 P, Folgen 2 P, Bezug Zertifikatswarnung 1 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> Werte die Frames 13 bis 24 aus. Um welche Aktivität handelt es sich? Gib an, welche Ports auf 10.10.0.20 offen sind, welche Dienste üblicherweise dahinterstehen und woran du das erkennst.</p>`,
          points: 4,
          solution: `
            <p>Das Notebook 10.10.1.66 prüft in schneller Folge verschiedene Ports des Dateiservers → <strong>Portscan</strong>, genauer ein <strong>SYN-Scan</strong> („halboffen“): Der Scanner sendet SYN und bricht bei Antwort sofort mit RST ab, ohne die Verbindung vollständig aufzubauen.</p>
            <ul>
              <li>Antwort <strong>SYN/ACK</strong> → Port <strong>offen</strong>: <strong>22 (SSH)</strong> und <strong>445 (SMB, Windows-Dateifreigaben)</strong>.</li>
              <li>Antwort <strong>RST/ACK</strong> → Port geschlossen: 21 (FTP), 23 (Telnet), 3389 (RDP).</li>
            </ul>
            <p>Zusammen mit dem ARP-Spoofing ist das eindeutig ein Angriffsversuch aus dem internen Netz → Notebook sofort vom Netz trennen, Vorfall dokumentieren und melden.</p>
            <p><strong>Bewertung:</strong> Portscan erkannt 1 P, Erkennungsmerkmal SYN/ACK vs. RST 1 P, offene Ports mit Diensten 2 P.</p>`
        },
        {
          q: `<p><strong>d)</strong> Beschreibe, wie <strong>DHCP-Snooping</strong> zusammen mit <strong>Dynamic ARP Inspection</strong> den Angriff aus b) verhindert. Gib außerdem die Konfiguration für <strong>Port Security</strong> an Port Fa0/12 von SW-A an: nur ein Gerät, dessen MAC-Adresse automatisch gelernt und gespeichert wird; bei Verstoß soll der Port abgeschaltet werden. Erkläre, wogegen Port Security schützt und wogegen nicht.</p>`,
          points: 6,
          solution: `
            <p><strong>DHCP-Snooping + DAI:</strong> Der Switch liest die DHCP-Vergaben mit und legt eine Bindungstabelle an (Port – MAC – IP). DHCP-Antworten akzeptiert er nur von vertrauenswürdigen Ports (Uplink zum DHCP-Server). Dynamic ARP Inspection prüft jede ARP-Nachricht an nicht vertrauenswürdigen Ports gegen diese Tabelle. Die gefälschte Antwort „10.10.1.1 is at 08:00:27:5e:91:c4“ passt nicht zur Bindung und wird <strong>verworfen</strong>.</p>
            <pre><code>ip dhcp snooping
ip dhcp snooping vlan 10
ip arp inspection vlan 10
interface GigabitEthernet0/1
 ip dhcp snooping trust
 ip arp inspection trust</code></pre>
            <p><strong>Port Security an Fa0/12:</strong></p>
            <pre><code>interface FastEthernet0/12
 switchport mode access
 switchport port-security
 switchport port-security maximum 1
 switchport port-security mac-address sticky
 switchport port-security violation shutdown</code></pre>
            <p><strong>Schutzwirkung:</strong> Port Security verhindert, dass <strong>fremde Geräte</strong> an einer Netzwerkdose arbeiten. Steckt jemand statt des gelernten Arbeitsplatz-PCs ein eigenes Notebook ein, geht der Port in den Zustand „err-disabled“. Gegen ARP-Spoofing von einem <strong>zugelassenen</strong> Gerät schützt Port Security nicht – dafür braucht es DAI. Noch wirksamer ist eine Anmeldung jedes Geräts per 802.1X.</p>
            <p><strong>Bewertung:</strong> DHCP-Snooping/DAI 2 P, Port-Security-Konfiguration 3 P, Abgrenzung 1 P.</p>`
        },
        {
          q: `<p><strong>e)</strong> Gib je einen Wireshark-Anzeigefilter an, der (1) nur die ARP-Pakete des verdächtigen Notebooks und (2) nur Verbindungsaufbau-Pakete (SYN ohne ACK) anzeigt.</p>`,
          points: 4,
          solution: `
            <ol>
              <li><code>arp &amp;&amp; eth.src == 08:00:27:5e:91:c4</code></li>
              <li><code>tcp.flags.syn == 1 &amp;&amp; tcp.flags.ack == 0</code></li>
            </ol>
            <p>Auch richtig: <code>and</code> statt <code>&amp;&amp;</code>, bei (1) <code>arp.src.hw_mac == 08:00:27:5e:91:c4</code>. Hilfreich ist außerdem <code>arp.duplicate-address-detected</code>, der genau die markierten Frames 9 und 11 zeigt.</p>
            <p><strong>Bewertung:</strong> je Filter 2 P.</p>`
        }
      ]
    },
    {
      id: "aen-b4", set: "B", part: "aen", points: 25,
      title: "AEN B4: DNS, E-Mail-Sicherheit und Zertifikate",
      scenario: `
        <p>Die <strong>Westkant Getränke GmbH</strong> betreibt ihren Mailserver selbst und verschickt Newsletter über einen externen Dienstleister. In letzter Zeit landen E-Mails von Westkant bei Kunden im Spam, außerdem wurden gefälschte Rechnungs-Mails mit Westkant-Absender verschickt. Die Domain lautet <strong>westkant-getraenke.example</strong> (Beispieldomain).</p>
        <table>
          <thead><tr><th>System</th><th>öffentliche Adresse</th><th>interne Adresse</th></tr></thead>
          <tbody>
            <tr><td>Mailserver mail.westkant-getraenke.example</td><td>198.51.100.25 · 2001:db8:77::25</td><td>10.10.0.25</td></tr>
            <tr><td>Webshop www.westkant-getraenke.example</td><td>bei einem Hosting-Partner: shop.hostingpartner.example</td><td>–</td></tr>
            <tr><td>Newsletter-Dienstleister</td><td>SPF-Angaben unter _spf.newsletter-dienst.example</td><td>–</td></tr>
          </tbody>
        </table>
        <p><strong>Auszug aus der öffentlichen Zonendatei (unvollständig):</strong></p>
        <pre><code>$ORIGIN westkant-getraenke.example.
@        IN  [ 1 ]  10 mail.westkant-getraenke.example.
mail     IN  [ 2 ]  198.51.100.25
mail     IN  [ 3 ]  2001:db8:77::25
www      IN  [ 4 ]  shop.hostingpartner.example.
@        IN  [ 5 ]  "v=spf1 mx include:_spf.newsletter-dienst.example -all"
_dmarc   IN  TXT    "v=DMARC1; p=quarantine; rua=mailto:dmarc@westkant-getraenke.example"</code></pre>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Ergänze die fehlenden Record-Typen [1] bis [5] und erkläre jeweils kurz ihre Aufgabe. Welcher weitere DNS-Eintrag ist für die Zustellbarkeit der E-Mails wichtig, und wer pflegt ihn in der Regel?</p>`,
          points: 6,
          solution: `
            <table>
              <thead><tr><th>Nr.</th><th>Typ</th><th>Aufgabe</th></tr></thead>
              <tbody>
                <tr><td>1</td><td><strong>MX</strong></td><td>Mail Exchanger: nennt den Mailserver der Domain (mit Priorität 10; kleinere Zahl = bevorzugt)</td></tr>
                <tr><td>2</td><td><strong>A</strong></td><td>ordnet dem Namen mail eine IPv4-Adresse zu</td></tr>
                <tr><td>3</td><td><strong>AAAA</strong></td><td>ordnet dem Namen mail eine IPv6-Adresse zu</td></tr>
                <tr><td>4</td><td><strong>CNAME</strong></td><td>Alias: www verweist auf den Namen beim Hosting-Partner</td></tr>
                <tr><td>5</td><td><strong>TXT</strong></td><td>Textinhalt, hier die SPF-Richtlinie</td></tr>
              </tbody>
            </table>
            <p><strong>Weiterer Eintrag:</strong> der <strong>PTR-Record</strong> (Reverse-DNS) für 198.51.100.25 → mail.westkant-getraenke.example in der Zone 100.51.198.in-addr.arpa (und entsprechend für die IPv6-Adresse). Viele empfangende Server lehnen Mails ab oder stufen sie als Spam ein, wenn die IP-Adresse nicht rückwärts auf den Mailserver-Namen auflöst. Die Reverse-Zone gehört dem Inhaber des Adressbereichs, also meist dem <strong>Provider</strong>, der den Eintrag auf Antrag setzt.</p>
            <p><strong>Bewertung:</strong> je Record-Typ mit Aufgabe 1 P, PTR mit Zuständigkeit 1 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Erkläre die Verfahren <strong>SPF</strong>, <strong>DKIM</strong> und <strong>DMARC</strong>. Werte den SPF- und den DMARC-Eintrag der Zonendatei aus: Welche Server dürfen Mails für die Domain senden, und was geschieht mit einer gefälschten Rechnungs-Mail?</p>`,
          points: 5,
          solution: `
            <ul>
              <li><strong>SPF</strong> (Sender Policy Framework): legt per TXT-Record fest, welche Server E-Mails für die Domain versenden dürfen. Der Empfänger vergleicht die IP des einliefernden Servers mit dieser Liste.</li>
              <li><strong>DKIM</strong> (DomainKeys Identified Mail): Der sendende Server signiert Header und Inhalt jeder Mail mit einem privaten Schlüssel. Den öffentlichen Schlüssel veröffentlicht die Domain im DNS (z. B. unter <code>selector._domainkey</code>). Der Empfänger prüft damit Herkunft und Unverfälschtheit.</li>
              <li><strong>DMARC</strong>: legt fest, wie Empfänger mit Mails umgehen sollen, die SPF- und DKIM-Prüfung nicht bestehen bzw. deren Absenderdomain nicht dazu passt, und wohin Berichte gesendet werden.</li>
            </ul>
            <p><strong>SPF-Eintrag:</strong> Senden dürfen die Server aus dem MX-Record (<code>mx</code> → mail.westkant-getraenke.example, 198.51.100.25) und die Server des Newsletter-Dienstleisters (<code>include:</code>). <code>-all</code> („hard fail“): Alle anderen Server sind ausdrücklich nicht berechtigt (<code>~all</code> wäre nur „soft fail“).</p>
            <p><strong>Gefälschte Rechnungs-Mail:</strong> Sie kommt von einem fremden Server → SPF schlägt fehl, eine gültige DKIM-Signatur fehlt → laut DMARC <code>p=quarantine</code> wird sie beim Empfänger in den Spam-/Quarantäneordner verschoben; Westkant erhält zusammengefasste Berichte an die <code>rua</code>-Adresse. Mit <code>p=reject</code> würde sie ganz abgelehnt.</p>
            <p><strong>Bewertung:</strong> drei Verfahren je 1 P, Auswertung SPF 1 P, Auswertung DMARC 1 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> Interne Clients sollen <code>mail.westkant-getraenke.example</code> zur internen Adresse 10.10.0.25 auflösen, Clients im Internet zur öffentlichen Adresse. Erkläre das Konzept <strong>Split-Horizon-DNS</strong> und nenne zwei Vorteile.</p>`,
          points: 4,
          solution: `
            <p><strong>Split-Horizon-DNS</strong> (Split-Brain-DNS): Für denselben Domainnamen gibt es zwei getrennte Sichten der Zone. Der interne DNS-Server beantwortet Anfragen aus dem LAN mit internen Adressen (mail → 10.10.0.25). Der öffentliche DNS-Server liefert Anfragen aus dem Internet die öffentlichen Adressen (mail → 198.51.100.25). Technisch umgesetzt über zwei Zonen auf unterschiedlichen Servern oder über „Views“ bzw. DNS-Richtlinien auf einem Server, abhängig von der Quelladresse.</p>
            <p><strong>Vorteile</strong> (zwei genügen): interne Clients greifen direkt zu, ohne Umweg über die öffentliche Adresse und die Firewall (kein Hairpin-NAT); interne Namen und Adressen werden nicht im Internet veröffentlicht; Mitarbeitende nutzen überall denselben Namen, auch im Homeoffice, und Zertifikate passen in beiden Netzen.</p>
            <p><strong>Bewertung:</strong> Konzept 2 P, zwei Vorteile 2 P.</p>`
        },
        {
          q: `<p><strong>d)</strong> Das Zertifikat des Webshops wurde von einer Zwischenzertifizierungsstelle (Intermediate CA) ausgestellt, die von einer Root-CA signiert ist. (1) Beschreibe vier Prüfungen, die der Browser beim Verbindungsaufbau mit dem Zertifikat durchführt. (2) Erläutere, warum TLS <strong>hybride Verschlüsselung</strong> einsetzt und welche Aufgabe die asymmetrischen und symmetrischen Verfahren jeweils übernehmen.</p>`,
          points: 6,
          solution: `
            <p><strong>(1) Prüfungen</strong> (vier genügen):</p>
            <ul>
              <li><strong>Zertifikatskette:</strong> Die Signatur des Serverzertifikats wird mit dem öffentlichen Schlüssel der Intermediate CA geprüft, deren Zertifikat mit dem der Root-CA. Die Root-CA muss im Vertrauensspeicher von Browser bzw. Betriebssystem stehen. (Der Server muss das Zwischenzertifikat mitliefern.)</li>
              <li><strong>Gültigkeitszeitraum:</strong> Das aktuelle Datum liegt zwischen „gültig ab“ und „gültig bis“.</li>
              <li><strong>Name:</strong> Der Hostname aus der aufgerufenen URL (www.westkant-getraenke.example) steht im Feld Subject Alternative Name – auch wenn der Name per CNAME auf den Hoster zeigt.</li>
              <li><strong>Sperrstatus:</strong> Das Zertifikat ist nicht widerrufen (Prüfung über OCSP bzw. Sperrliste CRL).</li>
              <li><strong>Verwendungszweck:</strong> Das Zertifikat ist für die Serverauthentifizierung zugelassen (Key Usage / Extended Key Usage).</li>
            </ul>
            <p><strong>(2) Hybride Verschlüsselung:</strong> Asymmetrische Verfahren lösen das Schlüsselaustauschproblem, sind aber rechenaufwendig. Symmetrische Verfahren sind sehr schnell, brauchen aber einen gemeinsamen geheimen Schlüssel.</p>
            <ul>
              <li><strong>Asymmetrisch</strong> (im Handshake): Schlüsselaustausch per <strong>ECDHE</strong>, Client und Server berechnen daraus einen gemeinsamen Sitzungsschlüssel, ohne ihn zu übertragen (Forward Secrecy). Der Server beweist mit einer <strong>Signatur</strong> seines privaten Schlüssels, dass ihm das Zertifikat gehört.</li>
              <li><strong>Symmetrisch</strong> (für die Nutzdaten): Alle Daten der Sitzung werden mit dem Sitzungsschlüssel verschlüsselt, z. B. mit <strong>AES-GCM</strong> oder ChaCha20-Poly1305 – das ist schnell und schützt zugleich die Integrität.</li>
            </ul>
            <p><strong>Bewertung:</strong> (1) 4 Prüfungen je 0,5 P, (2) Begründung 1 P, Aufgabenverteilung 3 P.</p>`
        },
        {
          q: `<p><strong>e)</strong> Der Provider empfiehlt, die Zone mit <strong>DNSSEC</strong> zu signieren. Erkläre, wovor DNSSEC schützt und wie die Vertrauenskette aufgebaut ist. Welches Schutzziel erfüllt DNSSEC nicht, und womit lässt es sich erreichen?</p>`,
          points: 4,
          solution: `
            <p><strong>Schutz:</strong> DNSSEC sichert die <strong>Echtheit (Authentizität) und Unverfälschtheit (Integrität)</strong> von DNS-Antworten durch digitale Signaturen. Gefälschte Antworten, z. B. durch <strong>DNS-Spoofing/Cache-Poisoning</strong>, erkennt ein validierender Resolver und verwirft sie.</p>
            <p><strong>Vertrauenskette:</strong> Jeder Record-Satz der Zone erhält eine Signatur (<strong>RRSIG</strong>). Die zugehörigen öffentlichen Schlüssel stehen als <strong>DNSKEY</strong> in der Zone. Ein Hash des Schlüssels wird als <strong>DS-Record</strong> in der übergeordneten Zone (hier der TLD) hinterlegt, diese ist wiederum von der Root-Zone signiert. Der Resolver prüft die Kette bis zum bekannten Schlüssel der Root-Zone (Trust Anchor).</p>
            <p><strong>Nicht erfüllt: Vertraulichkeit.</strong> DNS-Anfragen und -Antworten bleiben unverschlüsselt und können mitgelesen werden. Dafür gibt es <strong>DNS over TLS</strong> (DoT, Port 853) oder <strong>DNS over HTTPS</strong> (DoH, Port 443).</p>
            <p><strong>Bewertung:</strong> Schutz 1 P, Vertrauenskette 2 P, Vertraulichkeit mit Lösung 1 P.</p>`
        }
      ]
    },
    /* ===== Probeklausur A – Wirtschafts- und Sozialkunde (WiSo), 60 min, 14 Kurzaufgaben = 100 P =====
       In der echten Prüfung sind die Aufgaben gebunden (Multiple Choice, Zuordnung, Zahleneintrag). Hier als Kurzantwort-Aufgaben mit Begründung. */
    {
      id: "wiso-a1", set: "A", part: "wiso", points: 8,
      title: "WiSo A1: Probezeit und Kündigung im Ausbildungsverhältnis",
      scenario: `
        <p><strong>Hinweis zur Probeklausur WiSo A:</strong> In der echten Prüfung sind die WiSo-Aufgaben gebunden (Multiple Choice, Zuordnen, Zahlen eintragen). Hier beantwortest du sie kurz und begründet – so trainierst du das Wissen, das hinter den Antwortoptionen steckt. Plane etwa 4 Minuten pro Aufgabe ein. Alle Personen und Firmen sind frei erfunden.</p>
        <p>Mia Carstens hat am <strong>01.08.2026</strong> ihre Ausbildung zur Fachinformatikerin Systemintegration bei der Nordlicht IT GmbH in Heide begonnen. Im Ausbildungsvertrag ist eine Probezeit von <strong>vier Monaten</strong> vereinbart. Die Nordlicht IT hat einen Betriebsrat.</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> An welchem Tag endet Mias Probezeit? Welche Dauer der Probezeit lässt das Berufsbildungsgesetz zu?</p>`,
          points: 2,
          solution: `
            <p>Die Probezeit endet am <strong>30.11.2026</strong> (vier Monate ab dem 01.08.2026). Nach <strong>§ 20 BBiG</strong> beträgt die Probezeit <strong>mindestens einen und höchstens vier Monate</strong>.</p>
            <p><strong>Bewertung:</strong> Datum 1 P, gesetzlicher Rahmen 1 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Am <strong>20.11.2026</strong> erhält Mia ein Schreiben: Die Nordlicht IT kündigt das Ausbildungsverhältnis mit sofortiger Wirkung, ohne einen Grund zu nennen. Ist die Kündigung wirksam? Begründe und nenne eine formale Voraussetzung.</p>`,
          points: 3,
          solution: `
            <p><strong>Ja, die Kündigung ist grundsätzlich wirksam.</strong> Während der Probezeit können beide Seiten das Ausbildungsverhältnis <strong>jederzeit ohne Einhaltung einer Kündigungsfrist</strong> und <strong>ohne Angabe von Gründen</strong> kündigen (§ 22 Abs. 1 BBiG). Der 20.11. liegt noch in der Probezeit.</p>
            <p><strong>Formale Voraussetzungen:</strong> Die Kündigung muss <strong>schriftlich</strong> erfolgen (§ 22 Abs. 3 BBiG, keine E-Mail oder WhatsApp). Da ein Betriebsrat besteht, muss er vorher <strong>angehört</strong> werden (§ 102 BetrVG) – sonst ist die Kündigung unwirksam. Bei Minderjährigen geht die Kündigung an die gesetzlichen Vertreter.</p>
            <p><strong>Bewertung:</strong> Ergebnis mit Begründung 2 P, eine formale Voraussetzung 1 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> Mia hat die Probezeit bestanden. Im März 2027 überlegt sie, die Ausbildung zu beenden. Beurteile beide Fälle: (1) Sie möchte stattdessen eine Ausbildung zur Pflegefachfrau beginnen. (2) Sie möchte dieselbe Ausbildung bei einem anderen IT-Betrieb fortsetzen, der mehr zahlt.</p>`,
          points: 3,
          solution: `
            <ol>
              <li><strong>Berufswechsel:</strong> Nach der Probezeit kann die Auszubildende mit einer Frist von <strong>vier Wochen</strong> kündigen, wenn sie die Berufsausbildung <strong>aufgeben oder sich für einen anderen Beruf ausbilden lassen</strong> will (§ 22 Abs. 2 Nr. 2 BBiG) – schriftlich und unter Angabe des Kündigungsgrundes.</li>
              <li><strong>Gleicher Beruf, anderer Betrieb:</strong> Das ist kein zulässiger Kündigungsgrund. Eine ordentliche Kündigung ist nach der Probezeit nicht möglich, eine fristlose nur aus wichtigem Grund. Mia bleibt nur ein <strong>Aufhebungsvertrag</strong> im gegenseitigen Einvernehmen mit der Nordlicht IT.</li>
            </ol>
            <p><strong>Bewertung:</strong> Fall 1 mit Frist und Form 2 P, Fall 2 1 P.</p>`
        }
      ]
    },
    {
      id: "wiso-a2", set: "A", part: "wiso", points: 7,
      title: "WiSo A2: Jugendarbeitsschutz – Urlaub, Berufsschule, Pausen",
      scenario: `
        <p>Jonas Petersen, geboren am <strong>14.03.2010</strong>, ist seit dem 01.08.2026 Auszubildender bei der Nordlicht IT GmbH. Er hat an zwei Tagen pro Woche Berufsschule: montags und donnerstags jeweils <strong>6 Unterrichtsstunden à 45 Minuten</strong> (08:00 bis 13:10 Uhr).</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Wie viele Urlaubstage stehen Jonas im Kalenderjahr <strong>2027</strong> nach dem Jugendarbeitsschutzgesetz mindestens zu? Begründe.</p>`,
          points: 2,
          solution: `
            <p>Maßgeblich ist das Alter <strong>zu Beginn des Kalenderjahres</strong> (§ 19 JArbSchG). Am 01.01.2027 ist Jonas 16 Jahre alt, also <strong>noch nicht 17</strong> → mindestens <strong>27 Werktage</strong>. Dass er im März 17 wird, spielt keine Rolle.</p>
            <p>Staffel: noch nicht 16 → 30 Werktage · noch nicht 17 → 27 · noch nicht 18 → 25 Werktage (Werktage = Montag bis Samstag).</p>
            <p><strong>Bewertung:</strong> Ergebnis 1 P, Begründung (Stichtag) 1 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Muss Jonas an beiden Berufsschultagen nach dem Unterricht noch in den Betrieb kommen? Begründe.</p>`,
          points: 2,
          solution: `
            <p><strong>Nein, nur an einem der beiden Tage.</strong> An <strong>einem</strong> Berufsschultag pro Woche mit <strong>mehr als fünf Unterrichtsstunden</strong> von mindestens je 45 Minuten darf ein Jugendlicher nicht mehr beschäftigt werden. Dieser Tag wird mit <strong>8 Stunden</strong> auf die Arbeitszeit angerechnet (§ 9 JArbSchG).</p>
            <p>Am zweiten langen Schultag darf er nach dem Unterricht beschäftigt werden. Die Unterrichtszeit einschließlich der Pausen wird dann auf die Arbeitszeit angerechnet.</p>
            <p><strong>Bewertung:</strong> Ergebnis 1 P, Begründung 1 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> Die Ausbilderin plant für Jonas an einem Betriebstag die Arbeitszeit von <strong>07:30 bis 16:30 Uhr</strong> mit einer Pause von <strong>12:30 bis 13:00 Uhr</strong>. Prüfe den Plan und nenne drei Verstöße gegen das JArbSchG.</p>`,
          points: 3,
          solution: `
            <ol>
              <li><strong>Tägliche Arbeitszeit zu lang:</strong> 9 h Anwesenheit − 0,5 h Pause = <strong>8,5 h</strong>. Erlaubt sind höchstens <strong>8 Stunden</strong> täglich (§ 8 JArbSchG); 8,5 h nur, wenn an anderen Tagen derselben Woche entsprechend kürzer gearbeitet wird – das ist hier nicht vorgesehen.</li>
              <li><strong>Pause zu kurz:</strong> Bei mehr als 6 Stunden Arbeitszeit stehen Jugendlichen mindestens <strong>60 Minuten</strong> Ruhepause zu (§ 11 JArbSchG), nicht 30.</li>
              <li><strong>Pause zu spät:</strong> Von 07:30 bis 12:30 Uhr arbeitet Jonas 5 Stunden am Stück. Jugendliche dürfen <strong>nicht länger als 4,5 Stunden ohne Pause</strong> beschäftigt werden.</li>
            </ol>
            <p><strong>Korrekturvorschlag:</strong> 07:30–16:30 Uhr mit Pausen 11:30–12:00 und 14:00–14:30 Uhr = 8 h Arbeitszeit.</p>
            <p><strong>Bewertung:</strong> je Verstoß mit Begründung 1 P.</p>`
        }
      ]
    },
    {
      id: "wiso-a3", set: "A", part: "wiso", points: 7,
      title: "WiSo A3: Kündigungsfristen und Kündigungsschutzklage",
      scenario: `
        <p>Herr Brandt (46 Jahre) ist seit dem <strong>01.04.2016</strong> als Netzwerktechniker bei der Nordlicht IT GmbH (65 Beschäftigte) angestellt. Ein Tarifvertrag gilt nicht, der Arbeitsvertrag verweist auf die gesetzlichen Kündigungsfristen. Die ordentliche Kündigung des Arbeitgebers geht ihm am <strong>Donnerstag, 12.11.2026</strong> zu.</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Zu welchem Termin endet das Arbeitsverhältnis frühestens? Gib Rechtsgrundlage und Rechenweg an.</p>`,
          points: 3,
          solution: `
            <p>Für Kündigungen durch den <strong>Arbeitgeber</strong> verlängert sich die Frist mit der Betriebszugehörigkeit (<strong>§ 622 Abs. 2 BGB</strong>). Herr Brandt ist beim Zugang der Kündigung <strong>10 Jahre</strong> im Betrieb (01.04.2016 bis 12.11.2026) → Frist <strong>4 Monate zum Ende eines Kalendermonats</strong>.</p>
            <p>12.11.2026 + 4 Monate = 12.03.2027 → nächstes Monatsende: <strong>31.03.2027</strong>.</p>
            <p>Staffel zum Merken: ab 2 Jahren 1 Monat, 5 J. 2 Monate, 8 J. 3 Monate, 10 J. 4 Monate, 12 J. 5 Monate, 15 J. 6 Monate, 20 J. 7 Monate – jeweils zum Monatsende.</p>
            <p><strong>Bewertung:</strong> richtige Frist 1 P, Rechenweg 1 P, Datum 1 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Angenommen, Herr Brandt kündigt selbst am 12.11.2026. Wann endet das Arbeitsverhältnis dann frühestens?</p>`,
          points: 2,
          solution: `
            <p>Für den Arbeitnehmer gilt ohne abweichende Vereinbarung nur die <strong>Grundkündigungsfrist</strong> von <strong>vier Wochen zum 15. oder zum Ende eines Kalendermonats</strong> (§ 622 Abs. 1 BGB). Die verlängerten Fristen gelten nur für den Arbeitgeber.</p>
            <p>12.11.2026 + 28 Tage = 10.12.2026 → nächster Termin: <strong>15.12.2026</strong>.</p>
            <p><strong>Bewertung:</strong> Frist 1 P, Datum 1 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> Herr Brandt hält die Kündigung für sozial ungerechtfertigt. Bis wann und wo muss er Klage erheben? Warum gilt für ihn das Kündigungsschutzgesetz?</p>`,
          points: 2,
          solution: `
            <p>Die <strong>Kündigungsschutzklage</strong> muss innerhalb von <strong>drei Wochen nach Zugang</strong> der Kündigung beim <strong>Arbeitsgericht</strong> erhoben werden (§ 4 KSchG) → spätestens am <strong>Donnerstag, 03.12.2026</strong>. Versäumt er die Frist, gilt die Kündigung als wirksam.</p>
            <p>Das KSchG gilt, weil der Betrieb <strong>mehr als 10 Arbeitnehmer</strong> beschäftigt und das Arbeitsverhältnis <strong>länger als 6 Monate</strong> besteht.</p>
            <p><strong>Bewertung:</strong> Frist mit Gericht 1 P, Voraussetzungen KSchG 1 P.</p>`
        }
      ]
    },
    {
      id: "wiso-a4", set: "A", part: "wiso", points: 7,
      title: "WiSo A4: Betriebsrat und Jugend- und Auszubildendenvertretung",
      scenario: `
        <p>Die Holsteiner Landtechnik GmbH in Meldorf beschäftigt in der Regel <strong>150 wahlberechtigte Arbeitnehmer</strong>. Darunter sind <strong>14 Auszubildende</strong>, alle jünger als 25 Jahre, vier von ihnen sind noch nicht 18. Ein Betriebsrat besteht seit vielen Jahren; eine Jugend- und Auszubildendenvertretung (JAV) gibt es bisher nicht. Die Auszubildende Lea ist 17 Jahre alt und seit einem Jahr im Betrieb.</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Aus wie vielen Mitgliedern besteht der Betriebsrat? In welchem Zeitraum finden die regelmäßigen Betriebsratswahlen statt, und wann ist die nächste?</p>`,
          points: 2,
          solution: `
            <p>Bei 101 bis 200 wahlberechtigten Arbeitnehmern hat der Betriebsrat <strong>7 Mitglieder</strong> (§ 9 BetrVG).</p>
            <p>Die regelmäßigen Wahlen finden <strong>alle vier Jahre vom 1. März bis 31. Mai</strong> statt (zuletzt 2026) → nächste regelmäßige Wahl <strong>2030</strong>. Die Amtszeit beträgt vier Jahre.</p>
            <p><strong>Bewertung:</strong> Größe 1 P, Wahlzeitraum/nächste Wahl 1 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Kann eine JAV gewählt werden? Nenne die Voraussetzungen, die Zahl der Mitglieder und die Amtszeit.</p>`,
          points: 3,
          solution: `
            <p><strong>Ja.</strong> Voraussetzungen (§ 60 BetrVG): Im Betrieb sind in der Regel <strong>mindestens fünf</strong> Arbeitnehmer beschäftigt, die <strong>unter 18</strong> sind oder die <strong>zu ihrer Berufsausbildung beschäftigt und unter 25</strong> sind (hier 14), und es besteht ein <strong>Betriebsrat</strong>.</p>
            <p>Bei 5 bis 20 solcher Arbeitnehmer besteht die JAV aus <strong>einem</strong> Mitglied (§ 62 BetrVG). Die Amtszeit beträgt <strong>zwei Jahre</strong>.</p>
            <p><strong>Bewertung:</strong> Voraussetzungen 1 P, Mitgliederzahl 1 P, Amtszeit 1 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> Darf Lea (17) den Betriebsrat wählen, in den Betriebsrat gewählt werden sowie die JAV wählen und für sie kandidieren? Begründe kurz.</p>`,
          points: 2,
          solution: `
            <ul>
              <li><strong>Betriebsrat wählen: ja</strong> – wahlberechtigt sind alle Arbeitnehmer ab <strong>16 Jahren</strong> (§ 7 BetrVG).</li>
              <li><strong>In den Betriebsrat gewählt werden: nein</strong> – wählbar ist man erst ab <strong>18 Jahren</strong> und nach sechs Monaten Betriebszugehörigkeit (§ 8 BetrVG).</li>
              <li><strong>JAV wählen und gewählt werden: ja</strong> – sie ist unter 18 und Auszubildende; wählbar sind alle Arbeitnehmer unter 25 Jahren.</li>
            </ul>
            <p><strong>Bewertung:</strong> Betriebsrat 1 P, JAV 1 P.</p>`
        }
      ]
    },
    {
      id: "wiso-a5", set: "A", part: "wiso", points: 7,
      title: "WiSo A5: Beteiligungsrechte des Betriebsrats zuordnen",
      scenario: `
        <p>Die Geschäftsleitung der Holsteiner Landtechnik GmbH (150 Arbeitnehmer, Betriebsrat vorhanden) plant mehrere Maßnahmen. Der Betriebsrat möchte wissen, wie weit seine Rechte jeweils reichen.</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Ordne jeder Maßnahme das passende Beteiligungsrecht des Betriebsrats zu: <em>Unterrichtung und Beratung</em>, <em>Anhörung</em>, <em>Zustimmungsverweigerungsrecht</em> oder <em>echte Mitbestimmung</em>.</p>
            <ol>
              <li>Einführung eines Ticketsystems, das die Bearbeitungszeiten jedes Technikers auswertet</li>
              <li>Neuregelung von Beginn und Ende der täglichen Arbeitszeit in der Werkstatt</li>
              <li>Einstellung einer neuen Systemadministratorin</li>
              <li>ordentliche Kündigung eines Lagermitarbeiters</li>
              <li>Planung eines Neubaus für das Ersatzteillager</li>
            </ol>`,
          points: 5,
          solution: `
            <table>
              <thead><tr><th>Nr.</th><th>Beteiligungsrecht</th><th>Rechtsgrundlage und Erläuterung</th></tr></thead>
              <tbody>
                <tr><td>1</td><td><strong>echte Mitbestimmung</strong></td><td>§ 87 Abs. 1 Nr. 6 BetrVG: technische Einrichtungen, die geeignet sind, Verhalten oder Leistung zu überwachen</td></tr>
                <tr><td>2</td><td><strong>echte Mitbestimmung</strong></td><td>§ 87 Abs. 1 Nr. 2 BetrVG: Beginn und Ende der täglichen Arbeitszeit, Pausen</td></tr>
                <tr><td>3</td><td><strong>Zustimmungsverweigerungsrecht</strong></td><td>§ 99 BetrVG: personelle Einzelmaßnahmen in Unternehmen mit mehr als 20 wahlberechtigten Arbeitnehmern; Verweigerung nur aus den gesetzlichen Gründen</td></tr>
                <tr><td>4</td><td><strong>Anhörung</strong></td><td>§ 102 BetrVG: Eine Kündigung ohne vorherige Anhörung ist unwirksam; der Betriebsrat kann widersprechen, verhindern kann er sie nicht</td></tr>
                <tr><td>5</td><td><strong>Unterrichtung und Beratung</strong></td><td>§ 90 BetrVG: Planung von Bauten, technischen Anlagen und Arbeitsabläufen</td></tr>
              </tbody>
            </table>
            <p><strong>Bewertung:</strong> je richtiger Zuordnung 1 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Geschäftsleitung und Betriebsrat können sich über die Maßnahme 1 nicht einigen. Wer entscheidet dann, und wie heißt die schriftliche Vereinbarung, mit der eine Einigung festgehalten wird?</p>`,
          points: 2,
          solution: `
            <p>Bei echter Mitbestimmung entscheidet im Streitfall die <strong>Einigungsstelle</strong> (besetzt mit gleich vielen Vertretern beider Seiten und einem unparteiischen Vorsitzenden). Ihr Spruch ersetzt die Einigung (§ 87 Abs. 2 BetrVG). Die Einigung wird in einer <strong>Betriebsvereinbarung</strong> festgehalten, die für alle Arbeitnehmer des Betriebs unmittelbar gilt.</p>
            <p><strong>Bewertung:</strong> Einigungsstelle 1 P, Betriebsvereinbarung 1 P.</p>`
        }
      ]
    },
    {
      id: "wiso-a6", set: "A", part: "wiso", points: 7,
      title: "WiSo A6: Tarifvertrag, Friedenspflicht und Arbeitskampf",
      scenario: `
        <p>Die Küstenfracht Logistik GmbH ist Mitglied im Arbeitgeberverband ihrer Branche. Für die Beschäftigten gelten ein <strong>Manteltarifvertrag</strong> (Laufzeit bis Ende 2028) und ein <strong>Entgelttarifvertrag</strong> (Laufzeit bis 30.06.2027). Die Disponentin Frau Lorenzen ist Gewerkschaftsmitglied.</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Erkläre den Unterschied zwischen Mantel- und Entgelttarifvertrag anhand typischer Inhalte und der üblichen Laufzeit.</p>`,
          points: 2,
          solution: `
            <ul>
              <li><strong>Manteltarifvertrag</strong> (Rahmentarifvertrag): regelt die <strong>allgemeinen Arbeitsbedingungen</strong> wie Arbeitszeit, Urlaub, Zuschläge, Kündigungsfristen, Probezeit. Er hat meist eine <strong>lange Laufzeit</strong> (mehrere Jahre).</li>
              <li><strong>Entgelttarifvertrag</strong> (Lohn- und Gehaltstarifvertrag): legt die <strong>Höhe</strong> der Löhne, Gehälter und Ausbildungsvergütungen je Entgeltgruppe fest. Er hat meist eine <strong>kurze Laufzeit</strong> (etwa 1–2 Jahre).</li>
            </ul>
            <p><strong>Bewertung:</strong> je Tarifvertragsart 1 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Im Februar 2027 ruft die Gewerkschaft zu einem Warnstreik für höhere Löhne auf. Ist das zulässig? Wie wäre es im August 2027 während laufender Verhandlungen?</p>`,
          points: 2,
          solution: `
            <p><strong>Februar 2027: nein.</strong> Während der Laufzeit des Entgelttarifvertrags gilt die <strong>Friedenspflicht</strong>: Über Inhalte, die im gültigen Tarifvertrag geregelt sind (hier die Entgelthöhe), dürfen keine Arbeitskampfmaßnahmen stattfinden.</p>
            <p><strong>August 2027: ja.</strong> Der Entgelttarifvertrag ist ausgelaufen, die Friedenspflicht für die Entgelte endet. Warnstreiks während der Verhandlungen sind dann zulässig.</p>
            <p><strong>Bewertung:</strong> je Zeitpunkt mit Begründung 1 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> Im Arbeitsvertrag von Frau Lorenzen stehen 32 Urlaubstage, der Manteltarifvertrag sieht 30 Tage vor. Wie viele Tage stehen ihr zu? Nenne das zugrunde liegende Prinzip.</p>`,
          points: 1,
          solution: `
            <p><strong>32 Tage</strong> – nach dem <strong>Günstigkeitsprinzip</strong> (§ 4 Abs. 3 TVG) sind Abweichungen vom Tarifvertrag zulässig, wenn sie für den Arbeitnehmer günstiger sind.</p>
            <p><strong>Bewertung:</strong> 1 P.</p>`
        },
        {
          q: `<p><strong>d)</strong> Bringe die Schritte einer Tarifauseinandersetzung in die richtige Reihenfolge: Streik · Schlichtung · Scheitern der Verhandlungen · neuer Tarifvertrag · Urabstimmung über den Streik · Tarifverhandlungen · Einigung und zweite Urabstimmung über das Ergebnis</p>`,
          points: 2,
          solution: `
            <ol>
              <li>Tarifverhandlungen (ggf. begleitet von Warnstreiks)</li>
              <li>Scheitern der Verhandlungen</li>
              <li>Schlichtung</li>
              <li>Urabstimmung über den Streik (laut Satzung vieler Gewerkschaften mindestens 75 % Zustimmung)</li>
              <li>Streik (Arbeitgeber können mit Aussperrung reagieren)</li>
              <li>Einigung und zweite Urabstimmung über das Ergebnis</li>
              <li>neuer Tarifvertrag</li>
            </ol>
            <p><strong>Bewertung:</strong> vollständig richtig 2 P, höchstens ein Vertauschungsfehler 1 P.</p>`
        }
      ]
    },
    {
      id: "wiso-a7", set: "A", part: "wiso", points: 7,
      title: "WiSo A7: Zweige der Sozialversicherung und Wegeunfall",
      scenario: `
        <p>In der Einführungswoche der Nordlicht IT GmbH erklärt die Personalabteilung den neuen Auszubildenden ihre erste Entgeltabrechnung und die gesetzliche Sozialversicherung.</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Nenne die fünf Zweige der gesetzlichen Sozialversicherung, jeweils den Träger und wer die Beiträge grundsätzlich trägt.</p>`,
          points: 5,
          solution: `
            <table>
              <thead><tr><th>Zweig</th><th>Träger</th><th>Beiträge</th></tr></thead>
              <tbody>
                <tr><td>Krankenversicherung</td><td>Krankenkassen (z. B. AOK, Ersatzkassen)</td><td>Arbeitgeber und Arbeitnehmer je zur Hälfte (auch der Zusatzbeitrag)</td></tr>
                <tr><td>Pflegeversicherung</td><td>Pflegekassen (bei den Krankenkassen)</td><td>grundsätzlich je zur Hälfte; den Zuschlag für Kinderlose ab 23 Jahren trägt der Arbeitnehmer allein</td></tr>
                <tr><td>Rentenversicherung</td><td>Deutsche Rentenversicherung</td><td>je zur Hälfte</td></tr>
                <tr><td>Arbeitslosenversicherung</td><td>Bundesagentur für Arbeit</td><td>je zur Hälfte</td></tr>
                <tr><td>Unfallversicherung</td><td>Berufsgenossenschaften (öffentlicher Dienst: Unfallkassen)</td><td><strong>Arbeitgeber allein</strong></td></tr>
              </tbody>
            </table>
            <p>Sonderfall Auszubildende: Liegt die Vergütung bei höchstens 325 € im Monat (Geringverdienergrenze), trägt der Arbeitgeber die Beiträge allein.</p>
            <p><strong>Bewertung:</strong> je Zweig mit Träger und Beitragstragung 1 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Der Auszubildende Tim stürzt auf dem direkten Weg von seiner Wohnung zum Betrieb mit dem Fahrrad und bricht sich das Handgelenk. Welche Versicherung ist zuständig? Wie wäre es, wenn er unterwegs einen Umweg zum Einkaufen gemacht hätte und dort gestürzt wäre?</p>`,
          points: 2,
          solution: `
            <p>Es handelt sich um einen <strong>Wegeunfall</strong>. Zuständig ist die <strong>gesetzliche Unfallversicherung</strong>, also die Berufsgenossenschaft des Betriebs. Sie übernimmt Heilbehandlung und Rehabilitation; Tim soll einen Durchgangsarzt (D-Arzt) aufsuchen.</p>
            <p>Bei einem <strong>privaten Umweg</strong> (Einkaufen) ist der Versicherungsschutz für diese Strecke <strong>unterbrochen</strong> → dann ist die Krankenversicherung zuständig. Versichert bleiben z. B. Umwege für Fahrgemeinschaften oder um Kinder zur Betreuung zu bringen.</p>
            <p><strong>Bewertung:</strong> Wegeunfall/BG 1 P, Umweg 1 P.</p>`
        }
      ]
    },
    {
      id: "wiso-a8", set: "A", part: "wiso", points: 7,
      title: "WiSo A8: Entgeltabrechnung – vom Brutto zur Auszahlung",
      scenario: `
        <p>Die 21-jährige Auszubildende Svea (kinderlos, Steuerklasse I) erhält im dritten Ausbildungsjahr eine Ausbildungsvergütung von <strong>1.180 €</strong>. Der Betrieb zahlt zusätzlich <strong>20 € vermögenswirksame Leistungen</strong> (steuer- und beitragspflichtig). Svea spart monatlich <strong>40 €</strong> in einen Bausparvertrag, den der Betrieb direkt überweist.</p>
        <p><strong>Werte laut Belegsatz</strong> (Arbeitnehmeranteile, vereinfacht): Krankenversicherung 8,75 % · Pflegeversicherung 1,8 % · Rentenversicherung 9,3 % · Arbeitslosenversicherung 1,3 %. Lohnsteuer, Solidaritätszuschlag und Kirchensteuer fallen laut Lohnsteuertabelle nicht an.</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Berechne das steuer- und sozialversicherungspflichtige Bruttoentgelt, die Arbeitnehmeranteile zur Sozialversicherung (einzeln und gesamt) und das Nettoentgelt.</p>`,
          points: 5,
          solution: `
            <p><strong>Bruttoentgelt:</strong> 1.180 € + 20 € = <strong>1.200,00 €</strong></p>
            <table>
              <thead><tr><th>Zweig</th><th>Satz</th><th>Betrag</th></tr></thead>
              <tbody>
                <tr><td>Krankenversicherung</td><td>8,75 %</td><td>105,00 €</td></tr>
                <tr><td>Pflegeversicherung</td><td>1,8 %</td><td>21,60 €</td></tr>
                <tr><td>Rentenversicherung</td><td>9,3 %</td><td>111,60 €</td></tr>
                <tr><td>Arbeitslosenversicherung</td><td>1,3 %</td><td>15,60 €</td></tr>
                <tr><td><strong>Summe</strong></td><td>21,15 %</td><td><strong>253,80 €</strong></td></tr>
              </tbody>
            </table>
            <p><strong>Nettoentgelt:</strong> 1.200,00 € − 0,00 € Steuern − 253,80 € = <strong>946,20 €</strong></p>
            <p>Den Kinderlosenzuschlag zur Pflegeversicherung zahlt Svea noch nicht, weil sie jünger als 23 ist.</p>
            <p><strong>Bewertung:</strong> Brutto 1 P, SV-Anteile 3 P, Netto 1 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Wie hoch ist der Auszahlungsbetrag? Erkläre den Unterschied zwischen Nettoentgelt und Auszahlungsbetrag.</p>`,
          points: 2,
          solution: `
            <p><strong>Auszahlung:</strong> 946,20 € − 40,00 € Sparrate = <strong>906,20 €</strong></p>
            <p>Das <strong>Nettoentgelt</strong> ist das Brutto nach Abzug von Steuern und Sozialversicherungsbeiträgen. Beim <strong>Auszahlungsbetrag</strong> werden zusätzlich sonstige Abzüge berücksichtigt, die der Arbeitgeber im Auftrag überweist (hier die vermögenswirksame Sparleistung, z. B. auch Vorschüsse oder Pfändungen).</p>
            <p><strong>Schema:</strong> Brutto − Lohnsteuer/Soli/Kirchensteuer − SV-Anteile = Netto − sonstige Abzüge = Auszahlung</p>
            <p><strong>Bewertung:</strong> Betrag 1 P, Erklärung 1 P.</p>`
        }
      ]
    },
    {
      id: "wiso-a9", set: "A", part: "wiso", points: 7,
      title: "WiSo A9: Rechtsformen von Unternehmen",
      scenario: `
        <p>Drei ehemalige Auszubildende der Nordlicht IT wollen sich mit einem IT-Servicebetrieb in Husum selbstständig machen. Sie vergleichen verschiedene Rechtsformen.</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Ordne jede Aussage der passenden Rechtsform zu (Einzelunternehmen, OHG, KG, GmbH, UG (haftungsbeschränkt), AG). Eine Aussage kann auf mehrere Rechtsformen zutreffen.</p>
            <ol>
              <li>Das Stammkapital beträgt mindestens 25.000 €; bei der Gründung muss mindestens die Hälfte eingezahlt sein.</li>
              <li>Mindestens ein Gesellschafter haftet unbeschränkt, mindestens einer nur bis zur Höhe seiner Einlage.</li>
              <li>Organe sind Vorstand, Aufsichtsrat und Hauptversammlung; das Grundkapital beträgt mindestens 50.000 €.</li>
              <li>Alle Gesellschafter haften unbeschränkt, unmittelbar und gesamtschuldnerisch.</li>
              <li>Gründung ab 1 € Stammkapital möglich; ein Viertel des Jahresüberschusses muss in eine Rücklage fließen.</li>
              <li>Eintragung in Abteilung B des Handelsregisters.</li>
            </ol>`,
          points: 3,
          solution: `
            <ol>
              <li><strong>GmbH</strong></li>
              <li><strong>KG</strong> (Komplementär unbeschränkt, Kommanditist beschränkt)</li>
              <li><strong>AG</strong></li>
              <li><strong>OHG</strong></li>
              <li><strong>UG (haftungsbeschränkt)</strong> – die Rücklage wird gebildet, bis 25.000 € Stammkapital erreicht sind</li>
              <li><strong>GmbH, UG und AG</strong> (Kapitalgesellschaften; Einzelkaufleute, OHG und KG stehen in Abteilung A)</li>
            </ol>
            <p><strong>Bewertung:</strong> je Aussage 0,5 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Ein Berater empfiehlt eine <strong>GmbH &amp; Co. KG</strong>. Erkläre diese Rechtsform und ihren Vorteil für die Gründer.</p>`,
          points: 2,
          solution: `
            <p>Die GmbH &amp; Co. KG ist eine <strong>Kommanditgesellschaft</strong>, deren <strong>Komplementär</strong> (unbeschränkt haftender Gesellschafter) eine <strong>GmbH</strong> ist. Die Gründer beteiligen sich meist als Kommanditisten und Gesellschafter der GmbH.</p>
            <p><strong>Vorteil:</strong> Die GmbH haftet zwar unbeschränkt, aber nur mit ihrem Gesellschaftsvermögen – <strong>keine natürliche Person haftet mit dem Privatvermögen</strong>. Gleichzeitig bleiben die Vorteile einer Personengesellschaft erhalten (z. B. flexible Gestaltung, Besteuerung).</p>
            <p><strong>Bewertung:</strong> Erklärung 1 P, Vorteil 1 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> Die Gründer entscheiden sich für eine GmbH. Wer führt die Geschäfte und vertritt die GmbH nach außen, und welches Organ bestellt diese Person?</p>`,
          points: 2,
          solution: `
            <p>Die Geschäfte führt und die GmbH vertritt der <strong>Geschäftsführer</strong> (bzw. mehrere Geschäftsführer). Er wird von der <strong>Gesellschafterversammlung</strong> bestellt, die auch über die Gewinnverwendung und den Jahresabschluss beschließt. Ein Aufsichtsrat ist erst bei mehr als 500 Arbeitnehmern Pflicht.</p>
            <p><strong>Bewertung:</strong> Geschäftsführer 1 P, Gesellschafterversammlung 1 P.</p>`
        }
      ]
    },
    {
      id: "wiso-a10", set: "A", part: "wiso", points: 8,
      title: "WiSo A10: Betriebliche Kennzahlen berechnen",
      scenario: `
        <p>Die Nordlicht IT GmbH legt für das Geschäftsjahr 2025 folgende Zahlen vor: Umsatzerlöse (= Erträge) <strong>4.800.000 €</strong>, Aufwendungen <strong>4.500.000 €</strong> (darin enthalten Zinsaufwand für Fremdkapital <strong>90.000 €</strong>), Eigenkapital <strong>1.200.000 €</strong>, Fremdkapital <strong>1.800.000 €</strong>.</p>
        <p>Im Servicedesk wurden 2025 mit <strong>8.000 Arbeitsstunden 21.600 Tickets</strong> gelöst. 2026 sollen nach Einführung eines KI-Chatbots für Standardanfragen <strong>24.000 Tickets mit 7.500 Arbeitsstunden</strong> gelöst werden.</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Berechne die Wirtschaftlichkeit, die Eigenkapitalrentabilität, die Gesamtkapitalrentabilität und die Umsatzrentabilität für 2025.</p>`,
          points: 4,
          solution: `
            <p><strong>Gewinn</strong> = 4.800.000 € − 4.500.000 € = 300.000 €</p>
            <ul>
              <li><strong>Wirtschaftlichkeit</strong> = Ertrag ÷ Aufwand = 4.800.000 ÷ 4.500.000 ≈ <strong>1,07</strong> (&gt; 1 → wirtschaftlich)</li>
              <li><strong>Eigenkapitalrentabilität</strong> = Gewinn ÷ Eigenkapital ⋅ 100 = 300.000 ÷ 1.200.000 ⋅ 100 = <strong>25 %</strong></li>
              <li><strong>Gesamtkapitalrentabilität</strong> = (Gewinn + Fremdkapitalzinsen) ÷ Gesamtkapital ⋅ 100 = (300.000 + 90.000) ÷ 3.000.000 ⋅ 100 = <strong>13 %</strong></li>
              <li><strong>Umsatzrentabilität</strong> = Gewinn ÷ Umsatz ⋅ 100 = 300.000 ÷ 4.800.000 ⋅ 100 = <strong>6,25 %</strong></li>
            </ul>
            <p><strong>Bewertung:</strong> je Kennzahl mit Formel und Ergebnis 1 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Berechne die Arbeitsproduktivität des Servicedesks für 2025 und 2026 sowie die Veränderung in Prozent.</p>`,
          points: 3,
          solution: `
            <p><strong>Produktivität</strong> = Ausbringungsmenge ÷ Einsatzmenge</p>
            <ul>
              <li>2025: 21.600 Tickets ÷ 8.000 h = <strong>2,7 Tickets pro Stunde</strong></li>
              <li>2026: 24.000 Tickets ÷ 7.500 h = <strong>3,2 Tickets pro Stunde</strong></li>
              <li>Veränderung: (3,2 − 2,7) ÷ 2,7 ⋅ 100 ≈ <strong>+18,5 %</strong></li>
            </ul>
            <p><strong>Bewertung:</strong> je Jahr 1 P, Veränderung 1 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> Erkläre den Unterschied zwischen Produktivität und Wirtschaftlichkeit.</p>`,
          points: 1,
          solution: `
            <p><strong>Produktivität</strong> ist ein <strong>mengenmäßiges</strong> Verhältnis (z. B. Tickets pro Arbeitsstunde). <strong>Wirtschaftlichkeit</strong> ist ein <strong>wertmäßiges</strong> Verhältnis in Euro (Ertrag zu Aufwand bzw. Leistung zu Kosten). Eine höhere Produktivität erhöht nur dann die Wirtschaftlichkeit, wenn die Kosten dafür nicht stärker steigen (z. B. Lizenzkosten des Chatbots).</p>
            <p><strong>Bewertung:</strong> 1 P.</p>`
        }
      ]
    },
    {
      id: "wiso-a11", set: "A", part: "wiso", points: 7,
      title: "WiSo A11: Sicherheitszeichen, Brandschutz und Arbeitsunfall",
      scenario: `
        <p>Die Nordlicht IT GmbH überarbeitet ihre Sicherheitsunterweisung. Anlass: Ein Techniker ist beim Montieren eines Access Points von einer Leiter gestürzt und hat sich den Arm gebrochen. Er ist voraussichtlich drei Wochen arbeitsunfähig.</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Ordne den Sicherheitszeichen-Arten Verbot, Warnung, Gebot, Rettung und Brandschutz jeweils Farbe und Form zu.</p>`,
          points: 2,
          solution: `
            <table>
              <thead><tr><th>Art</th><th>Farbe</th><th>Form</th><th>Beispiel</th></tr></thead>
              <tbody>
                <tr><td>Verbotszeichen</td><td>rot (weißer Grund, roter Rand und Querbalken)</td><td>rund</td><td>Rauchen verboten</td></tr>
                <tr><td>Warnzeichen</td><td>gelb mit schwarzem Rand</td><td>dreieckig</td><td>Warnung vor elektrischer Spannung</td></tr>
                <tr><td>Gebotszeichen</td><td>blau</td><td>rund</td><td>Gehörschutz benutzen</td></tr>
                <tr><td>Rettungszeichen</td><td>grün</td><td>rechteckig bzw. quadratisch</td><td>Notausgang, Erste Hilfe</td></tr>
                <tr><td>Brandschutzzeichen</td><td>rot</td><td>rechteckig bzw. quadratisch</td><td>Feuerlöscher</td></tr>
              </tbody>
            </table>
            <p><strong>Bewertung:</strong> alle fünf Zeilen richtig 2 P, vier Zeilen richtig 1 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Im Serverraum brennt ein Netzteil in einem Rack. Welchen Feuerlöscher setzt du ein? Begründe und nenne einen Grund gegen einen Pulverlöscher.</p>`,
          points: 2,
          solution: `
            <p><strong>Kohlendioxid-Löscher (CO₂).</strong> CO₂ ist elektrisch nicht leitend, verdrängt den Sauerstoff und hinterlässt <strong>keine Rückstände</strong> – die übrigen Geräte werden nicht zusätzlich beschädigt. (Nach dem Löschen den Raum lüften, CO₂ ist in hoher Konzentration erstickend.)</p>
            <p><strong>Gegen Pulver:</strong> Das Löschpulver verteilt sich im ganzen Raum, dringt in die Geräte ein und wirkt korrosiv – das zerstört oft mehr Hardware als der Brand selbst. Wasser scheidet wegen der Leitfähigkeit aus.</p>
            <p><strong>Bewertung:</strong> CO₂ mit Begründung 1 P, Grund gegen Pulver 1 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> Was muss der Arbeitgeber nach dem Leitersturz melden, an wen und innerhalb welcher Frist? Was ist unabhängig davon bei jeder Erste-Hilfe-Leistung zu dokumentieren?</p>`,
          points: 3,
          solution: `
            <ul>
              <li><strong>Unfallanzeige</strong> an die <strong>Berufsgenossenschaft</strong> (Unfallversicherungsträger), weil der Unfall zu einer Arbeitsunfähigkeit von <strong>mehr als drei Kalendertagen</strong> führt (§ 193 SGB VII).</li>
              <li><strong>Frist:</strong> innerhalb von <strong>drei Tagen</strong>, nachdem der Arbeitgeber vom Unfall erfahren hat. Der Betriebsrat erhält eine Kopie bzw. unterschreibt mit.</li>
              <li><strong>Dokumentation:</strong> Jede Erste-Hilfe-Leistung – auch bei kleinen Verletzungen ohne Arbeitsunfähigkeit – wird im <strong>Verbandbuch</strong> (Meldeblock) festgehalten und fünf Jahre aufbewahrt. So lässt sich später ein Arbeitsunfall nachweisen.</li>
            </ul>
            <p>Außerdem: Der Verletzte wird einem <strong>Durchgangsarzt</strong> vorgestellt; die Gefährdungsbeurteilung für Leiterarbeiten wird überprüft.</p>
            <p><strong>Bewertung:</strong> Meldung an die BG mit Voraussetzung 1 P, Frist 1 P, Verbandbuch 1 P.</p>`
        }
      ]
    },
    {
      id: "wiso-a12", set: "A", part: "wiso", points: 7,
      title: "WiSo A12: Umweltschutz und Entsorgung von IT-Geräten",
      scenario: `
        <p>Die Nordlicht IT GmbH tauscht bei einem Kunden <strong>40 alte Notebooks</strong> mit Festplatten voller Kundendaten und die <strong>Bleiakkus von sechs USV-Anlagen</strong> aus. Dabei fallen außerdem viele Kartons und Folien an.</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Beschreibe für die Notebooks, die USV-Akkus und die Verpackungen jeweils den richtigen Umgang bzw. Entsorgungsweg.</p>`,
          points: 3,
          solution: `
            <ul>
              <li><strong>Notebooks:</strong> zuerst die Daten <strong>sicher löschen</strong> (zertifiziertes Überschreiben bzw. Löschen per Secure Erase) oder die Datenträger nach <strong>DIN 66399</strong> vernichten und das dokumentieren (Datenschutz). Danach möglichst <strong>wiederverwenden</strong> (Aufbereitung, Spende). Sonst als <strong>Elektroaltgeräte</strong> nach dem ElektroG getrennt zurückgeben – an Wertstoffhof, Hersteller-Rücknahme oder zertifizierten Entsorger, niemals in den Restmüll (Symbol der durchgestrichenen Mülltonne).</li>
              <li><strong>USV-Akkus:</strong> Blei-Säure-Batterien sind gefährlicher Abfall. Sie werden getrennt gesammelt und an den Vertreiber, den Hersteller oder eine Sammelstelle zurückgegeben (Rücknahmepflicht), nicht mit den Geräten entsorgt.</li>
              <li><strong>Verpackungen:</strong> sortenrein trennen (Pappe, Folie) und dem Recycling zuführen; Transportverpackungen kann der Lieferant zurücknehmen.</li>
            </ul>
            <p><strong>Bewertung:</strong> je Gruppe 1 P (bei den Notebooks muss die Datenlöschung genannt sein).</p>`
        },
        {
          q: `<p><strong>b)</strong> Bringe die Stufen der Abfallhierarchie nach dem Kreislaufwirtschaftsgesetz in die richtige Reihenfolge (höchste Priorität zuerst): Recycling · Beseitigung · Vermeidung · sonstige Verwertung (z. B. energetische Verwertung) · Vorbereitung zur Wiederverwendung</p>`,
          points: 2,
          solution: `
            <ol>
              <li>Vermeidung</li>
              <li>Vorbereitung zur Wiederverwendung</li>
              <li>Recycling</li>
              <li>sonstige Verwertung, insbesondere energetische Verwertung</li>
              <li>Beseitigung</li>
            </ol>
            <p><strong>Bewertung:</strong> vollständig richtig 2 P, ein Vertauschungsfehler 1 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> Nenne zwei Maßnahmen, mit denen die Nordlicht IT den Energie- und Ressourcenverbrauch ihrer eigenen IT senken kann („Green IT“).</p>`,
          points: 2,
          solution: `
            <p>Zwei Beispiele genügen:</p>
            <ul>
              <li>energieeffiziente Geräte beschaffen (z. B. mit Umweltzeichen wie Blauer Engel, TCO Certified oder EU-Energielabel beachten),</li>
              <li>Energiesparfunktionen aktivieren (Ruhezustand, Bildschirme aus, zeitgesteuertes Abschalten außerhalb der Arbeitszeit),</li>
              <li>Server virtualisieren und konsolidieren, Klimatisierung des Serverraums optimieren,</li>
              <li>Geräte länger nutzen und reparieren statt neu kaufen, Ökostrom beziehen, Druckaufkommen senken.</li>
            </ul>
            <p><strong>Bewertung:</strong> je Maßnahme 1 P.</p>`
        }
      ]
    },
    {
      id: "wiso-a13", set: "A", part: "wiso", points: 7,
      title: "WiSo A13: Mutterschutz und Elternzeit",
      scenario: `
        <p>Die Systemadministratorin Frau Jensen teilt der Nordlicht IT GmbH am <strong>02.11.2026</strong> mit, dass sie schwanger ist. Der voraussichtliche Entbindungstermin ist der <strong>20.04.2027</strong>. Sie möchte nach der Geburt zwei Jahre Elternzeit nehmen.</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Ab wann gilt die Schutzfrist vor der Entbindung, und darf Frau Jensen in dieser Zeit arbeiten? Wie lange dauert die Schutzfrist nach einer normalen Entbindung am errechneten Termin?</p>`,
          points: 2,
          solution: `
            <p><strong>Vor der Entbindung:</strong> sechs Wochen vor dem voraussichtlichen Termin → ab <strong>09.03.2027</strong> (20.04.2027 − 42 Tage). In dieser Zeit darf sie nur beschäftigt werden, wenn sie sich <strong>ausdrücklich dazu bereit erklärt</strong>; die Erklärung kann sie jederzeit widerrufen (§ 3 MuSchG).</p>
            <p><strong>Nach der Entbindung:</strong> <strong>acht Wochen</strong> absolutes Beschäftigungsverbot, also bis zum 15.06.2027 (bei Früh- und Mehrlingsgeburten zwölf Wochen).</p>
            <p><strong>Bewertung:</strong> Frist vorher mit Beschäftigungsregel 1 P, Frist nachher 1 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Wegen einer Umstrukturierung will die Nordlicht IT Frau Jensen zum 15.01.2027 ordentlich kündigen. Ist das zulässig?</p>`,
          points: 2,
          solution: `
            <p><strong>Nein.</strong> Während der Schwangerschaft und bis <strong>vier Monate nach der Entbindung</strong> ist eine Kündigung durch den Arbeitgeber <strong>unzulässig</strong> (§ 17 MuSchG), wenn ihm die Schwangerschaft bekannt ist (hier seit 02.11.2026). Nur in besonderen Ausnahmefällen, die nichts mit der Schwangerschaft zu tun haben (z. B. Betriebsstilllegung), kann die zuständige Aufsichtsbehörde eine Kündigung vorher für zulässig erklären. Anschließend schützt sie der Kündigungsschutz der Elternzeit.</p>
            <p><strong>Bewertung:</strong> Ergebnis 1 P, Begründung mit Dauer des Kündigungsverbots 1 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> Nenne drei Regeln zur Elternzeit, die Frau Jensen beachten muss bzw. nutzen kann.</p>`,
          points: 3,
          solution: `
            <p>Drei Regeln genügen (Bundeselterngeld- und Elternzeitgesetz):</p>
            <ul>
              <li>Elternzeit gibt es für jedes Elternteil bis zu <strong>drei Jahre</strong> je Kind, grundsätzlich bis zum dritten Geburtstag; bis zu 24 Monate davon können zwischen dem dritten und achten Geburtstag genommen werden.</li>
              <li>Sie muss die Elternzeit <strong>schriftlich</strong> spätestens <strong>sieben Wochen vor Beginn</strong> verlangen (für die Zeit bis zum dritten Geburtstag) und dabei erklären, für welche Zeiten innerhalb von zwei Jahren sie Elternzeit nimmt.</li>
              <li>Während der Elternzeit darf sie in <strong>Teilzeit bis 32 Wochenstunden</strong> arbeiten.</li>
              <li>Ab dem Verlangen (frühestens acht Wochen vor Beginn) und während der Elternzeit besteht <strong>Kündigungsschutz</strong>.</li>
              <li>Die Schutzfrist nach der Geburt wird auf die Elternzeit der Mutter angerechnet. <strong>Elterngeld</strong> zahlt die Elterngeldstelle, nicht der Arbeitgeber.</li>
            </ul>
            <p><strong>Bewertung:</strong> je Regel 1 P.</p>`
        }
      ]
    },
    {
      id: "wiso-a14", set: "A", part: "wiso", points: 7,
      title: "WiSo A14: Digitale Kommunikation, Social Engineering und Europass",
      scenario: `
        <p>Die Auszubildende Lina arbeitet bei der Nordlicht IT GmbH im Marketing und im Support mit. Nach der Ausbildung möchte sie ein halbes Jahr bei einem IT-Dienstleister in Dänemark arbeiten.</p>`,
      parts: [
        {
          q: `<p><strong>a)</strong> Lina soll eine Einladung zu einer Kundenveranstaltung per E-Mail an 60 Firmenkunden senden. In welches Adressfeld gehören die Empfänger? Begründe.</p>`,
          points: 2,
          solution: `
            <p>In das Feld <strong>BCC</strong> (Blindkopie); in „An“ steht z. B. die eigene Adresse. Stünden alle Adressen in „An“ oder „CC“, sähe jeder Empfänger die E-Mail-Adressen aller anderen Kunden. Das ist eine unzulässige Weitergabe <strong>personenbezogener Daten</strong> (DSGVO) und gibt zugleich den Kundenstamm preis. Besser noch: ein Newsletter-System mit Einwilligungen verwenden.</p>
            <p><strong>Bewertung:</strong> BCC 1 P, Begründung 1 P.</p>`
        },
        {
          q: `<p><strong>b)</strong> Im Support ruft ein angeblicher Mitarbeiter von „Microsoft“ an: Auf den Firmenrechnern sei ein Virus entdeckt worden, Lina solle ein Fernwartungsprogramm starten und ihm den Zugangscode nennen. Wie heißt diese Angriffsmethode, und wie verhält sich Lina richtig?</p>`,
          points: 2,
          solution: `
            <p>Das ist <strong>Social Engineering</strong> per Telefon (Vishing bzw. „Tech-Support-Scam“): Der Angreifer nutzt Autorität und Zeitdruck, um an einen Zugang zu kommen.</p>
            <p><strong>Richtiges Verhalten:</strong> keinen Fernzugriff gewähren und keine Codes, Passwörter oder MFA-Bestätigungen weitergeben; das Gespräch beenden; bei Zweifeln über eine bekannte, offizielle Nummer zurückrufen; den Vorfall sofort der IT-Sicherheit bzw. dem Vorgesetzten melden. Hersteller wie Microsoft rufen nicht unaufgefordert an.</p>
            <p><strong>Bewertung:</strong> Methode 1 P, Verhalten 1 P.</p>`
        },
        {
          q: `<p><strong>c)</strong> Ein Mitauszubildender veröffentlicht auf Social Media abfällige Kommentare über einen namentlich genannten Kunden der Nordlicht IT. Mit welchen Folgen muss er rechnen?</p>`,
          points: 1,
          solution: `
            <p>Er verletzt seine arbeitsvertragliche <strong>Rücksichtnahme- und Loyalitätspflicht</strong> sowie die Pflicht zur Verschwiegenheit über Betriebs- und Kundenangelegenheiten. Mögliche Folgen: <strong>Abmahnung</strong>, bei schweren oder wiederholten Verstößen eine <strong>Kündigung aus wichtigem Grund</strong> (nach der Probezeit ist im Ausbildungsverhältnis nur diese möglich), ggf. Schadensersatzforderungen.</p>
            <p><strong>Bewertung:</strong> 1 P.</p>`
        },
        {
          q: `<p><strong>d)</strong> Welche Dokumente des <strong>Europass</strong> helfen Lina bei ihrer Bewerbung in Dänemark, und welchen Zweck erfüllt der Europass?</p>`,
          points: 2,
          solution: `
            <p><strong>Dokumente</strong> (zwei genügen): der <strong>Europass-Lebenslauf</strong> (online im Europass-Portal mit Profil und Selbsteinschätzung der Sprachkenntnisse), die <strong>Zeugniserläuterung</strong> zum Berufsabschluss (beschreibt Inhalte und Niveau des Abschlusses Fachinformatikerin in anderen Sprachen), der <strong>Europass-Mobilitätsnachweis</strong> für bereits absolvierte Auslandsaufenthalte, bei Hochschulabschlüssen der Diplomzusatz.</p>
            <p><strong>Zweck:</strong> Qualifikationen und Kompetenzen werden <strong>europaweit einheitlich, transparent und vergleichbar</strong> dargestellt. Das erleichtert Bewerbungen und die Mobilität in Europa.</p>
            <p><strong>Bewertung:</strong> Dokumente 1 P, Zweck 1 P.</p>`
        }
      ]
    }
  ]
});
