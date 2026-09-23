/* WiSo – Wirtschafts- und Sozialkunde */
LEARN.module({
  id: "wiso",
  type: "fach",
  title: "Wirtschafts- und Sozialkunde",
  exam: ["AP1", "AP2"],
  summary: "Alles für den AP2-Prüfungsbereich WiSo (60 min, gebundene Aufgaben, 10 % der Gesamtnote) und den Wirtschaft/Politik-Unterricht: Ausbildung und Arbeitsrecht, Tarif und Mitbestimmung, Sozialversicherung und Entgeltabrechnung, Unternehmensformen, Volks- und Betriebswirtschaft mit Kennzahlen, Einkauf und Handelskalkulation, Kaufvertrag, Arbeits- und Umweltschutz – mit vielen Rechenübungen im Prüfungsstil.",
  goals: [
    "Rechte und Pflichten aus dem Ausbildungsvertrag nach BBiG benennen, Probezeit- und Kündigungstermine im Ausbildungsverhältnis bestimmen und die Aufgaben von Betrieb, Berufsschule und IHK im dualen System unterscheiden",
    "Schutzgesetze (JArbSchG, ArbZG, BUrlG, MuSchG, BEEG, SGB IX, AGG) auf Fälle anwenden und Arbeitszeiten, Pausen und Urlaubsansprüche berechnen",
    "Kündigungen beurteilen: Fristen nach § 622 BGB ausrechnen, KSchG und besonderen Kündigungsschutz prüfen, Arbeitszeugnisse deuten und den richtigen Rechtsweg (Arbeits-/Sozialgericht) wählen",
    "Tarifverträge, Arbeitskampf, Betriebsrat, JAV, Personalrat und Betriebsvereinbarung erklären und Beteiligungsrechte des Betriebsrats Fällen zuordnen",
    "Die fünf Zweige der Sozialversicherung mit Trägern und Leistungen nennen und eine Entgeltabrechnung vom Brutto bis zum Auszahlungsbetrag rechnen",
    "Unternehmensformen nach Haftung, Kapital, Leitung, Gewinnverteilung und Handelsregister vergleichen sowie Vollmachten und Organisationsformen zuordnen",
    "Volkswirtschaftliche Grundlagen erklären: Sektoren, ökonomisches Prinzip, Produktionsfaktoren, Wirtschaftskreislauf, Preisbildung, soziale Marktwirtschaft und Unternehmenszusammenschlüsse",
    "Betriebliche Kennzahlen (Produktivität, Wirtschaftlichkeit, Rentabilität) und Indexzahlen berechnen und interpretieren",
    "Angebote per Bezugskalkulation und Nutzwertanalyse vergleichen und Verkaufspreise mit der Handelskalkulation vorwärts, rückwärts und als Differenzkalkulation ermitteln",
    "Kaufverträge und Kaufvertragsstörungen beurteilen sowie Arbeitsschutz-, Unfall-, Brand- und Umweltschutzregeln im IT-Betrieb anwenden"
  ],
  school: {
    hinweise: "Im Fach Wirtschaft/Politik (WIPO) der AIFS51 wurden bisher vor allem diese Schwerpunkte bearbeitet: Unternehmensformen mit der seit 2024 geltenden Gewinnverteilung und den Handelsregister-Abteilungen A/B, Arbeitszeugnis, Arbeits- und Sozialgerichtsbarkeit, ökonomische Prinzipien, Tarifverträge, Betriebsrat und Personalrat samt JAV (öffentlicher Dienst in Schleswig-Holstein vs. Privatwirtschaft), Nutzwertanalyse mit Angebotsvergleich, Wirtschaftssektoren und Arten von Betrieben, Produktionsfaktoren (VWL und BWL), Ziele, Kennzahlen und Indexzahlen, duale Ausbildung, ordentliche und außerordentliche Kündigung mit Kündigungsschutz, Handelskalkulation vorwärts und rückwärts (inkl. Preissenkung und Ausgleich über den Liefererrabatt) sowie der erweiterte Wirtschaftskreislauf. Dazu kam eine Gruppenpräsentation zu Digitalisierung und Nachhaltigkeit eines Unternehmens (gemeinsam mit LF 2). Rechenaufgaben (Kalkulation, Kennzahlen, Kündigungsfristen) kommen in Klassenarbeiten besonders oft vor – rechne sie mit Schema und Einheit.",
    themen: [
      "Präsentation: Digitalisierung und Nachhaltigkeit eines Unternehmens",
      "Unternehmensformen, Gewinnverteilung, Handelsregister A/B",
      "Arbeitszeugnis",
      "Arbeits- und Sozialgerichtsbarkeit",
      "Ökonomische Prinzipien",
      "Tarifverträge",
      "Personalrat, Betriebsrat und JAV",
      "Nutzwertanalyse und Angebotsvergleich",
      "Wirtschaftssektoren, Zielsetzungen und Arten von Betrieben",
      "Produktionsfaktoren (VWL und BWL)",
      "Mitbestimmung im Betrieb",
      "Ziele, Kennzahlen und Indexzahlen",
      "Duale Ausbildung",
      "Kündigung und Kündigungsschutz",
      "Handelskalkulation vorwärts und rückwärts",
      "Erweiterter Wirtschaftskreislauf"
    ]
  },
  topics: [
    {
      id: "duales-system",
      title: "Duale Ausbildung & Ausbildungsvertrag (BBiG)",
      exam: ["AP2"],
      summary: "Lernorte Betrieb und Berufsschule, Ausbildungsordnung und Rahmenlehrplan, Inhalte des Ausbildungsvertrags, Pflichten und Folgen von Pflichtverletzungen, Ausbildungsvergütung mit Mindestvergütung 2026, Probezeit, Kündigung und Ende der Ausbildung sowie die Aufgaben der IHK.",
      html: `
    <p>Deine Ausbildung findet an zwei Lernorten statt: im <strong>Betrieb</strong> und in der <strong>Berufsschule</strong>. Rechtsgrundlage ist vor allem das <strong>Berufsbildungsgesetz (BBiG)</strong>. In der WiSo-Prüfung kommen fast immer Fragen zu Vertrag, Probezeit, Kündigung und Ende der Ausbildung.</p>
    <h5>Die Lernorte im Vergleich</h5>
    <table><thead><tr><th>Merkmal</th><th>Ausbildungsbetrieb</th><th>Berufsschule</th></tr></thead><tbody>
    <tr><td>Lehrende</td><td>Ausbilder/in (fachlich und pädagogisch geeignet, AEVO)</td><td>Lehrkräfte</td></tr>
    <tr><td>Schwerpunkt</td><td>Praxis, berufliche Handlungsfähigkeit</td><td>Theorie in Lernfeldern + allgemeine Fächer</td></tr>
    <tr><td>Grundlage</td><td>BBiG, Ausbildungsordnung (FIAusbV) mit Ausbildungsrahmenplan</td><td>Schulgesetz des Landes, KMK-Rahmenlehrplan</td></tr>
    <tr><td>Kosten</td><td>Betrieb (Vergütung, Ausbildungsmittel, Prüfungsgebühren)</td><td>Land und Schulträger</td></tr>
    <tr><td>Aufsicht</td><td>IHK (zuständige Stelle)</td><td>Land (Schulaufsicht)</td></tr>
    </tbody></table>
    <p><strong>Vorteile:</strong> Theorie und Praxis greifen ineinander, Vergütung, gute Übernahmechancen, bundesweit anerkannter Abschluss. Betrieb und Schule stimmen sich ab (Lernortkooperation).</p>
    <h5>Ausbildungsordnung, Rahmenlehrplan, Ausbildungsplan</h5>
    <ul>
    <li><strong>Ausbildungsordnung</strong> (§ 5 BBiG, bei dir die FIAusbV 2020, vom Bund erlassen): Berufsbezeichnung, Ausbildungsdauer, Berufsbild, <strong>Ausbildungsrahmenplan</strong> (sachliche und zeitliche Gliederung), Prüfungsanforderungen.</li>
    <li><strong>Rahmenlehrplan</strong> (KMK): Lernfelder für die Berufsschule, mit der Ausbildungsordnung abgestimmt.</li>
    <li><strong>Betrieblicher Ausbildungsplan</strong>: setzt den Ausbildungsrahmenplan für deinen Betrieb um (welche Abteilung, wann, was) – Anlage zum Vertrag, ergänzt durch Einsatz- und Versetzungspläne.</li>
    </ul>
    <h5>Ausbildungsvertrag (§§ 10–12 BBiG)</h5>
    <p>Der wesentliche Inhalt wird vor Beginn niedergelegt (seit 2024 auch in Textform möglich); bei Minderjährigen müssen die gesetzlichen Vertreter zustimmen. Die IHK trägt den Vertrag in das <strong>Verzeichnis der Berufsausbildungsverhältnisse</strong> ein. Mindestinhalte nach § 11: Art, Gliederung und Ziel · Beginn und Dauer · Maßnahmen außerhalb der Ausbildungsstätte · tägliche Ausbildungszeit · Probezeit · Vergütung · Urlaub · Kündigungsvoraussetzungen · Hinweis auf Tarifverträge/Betriebsvereinbarungen · Form des Ausbildungsnachweises.</p>
    <p><strong>Nichtig</strong> sind (§ 12): Entschädigung für die Ausbildung, Vertragsstrafen, Ausschluss oder Pauschalierung von Schadensersatz, Beschränkung der späteren Berufsausübung (erst in den letzten 6 Monaten darf ein Arbeitsverhältnis vereinbart werden).</p>
    <h5>Pflichten</h5>
    <div class="grid-2">
    <div><strong>Auszubildende/r (§ 13)</strong><ul><li>Lernpflicht, Weisungen befolgen</li><li>Berufsschule und Prüfungen besuchen</li><li>Ausbildungsnachweis führen</li><li>Betriebsordnung beachten, Arbeitsmittel pfleglich behandeln</li><li>Stillschweigen über Betriebs- und Geschäftsgeheimnisse</li></ul></div>
    <div><strong>Ausbildende/r (§§ 14–17)</strong><ul><li>planmäßig ausbilden, nur ausbildungsbezogene Aufgaben</li><li>Ausbildungsmittel inkl. Fachliteratur kostenlos</li><li>freistellen für Berufsschule, Prüfungen und den Arbeitstag vor der schriftlichen Abschlussprüfung (§ 15)</li><li>angemessene, jährlich steigende Vergütung (§ 17, Mindestvergütung – jährlich angepasst; 2./3./4. Jahr +18 %/+35 %/+40 %)</li><li>Zeugnis ausstellen (§ 16)</li></ul></div>
    </div>
    <h5>Ausbildungsvergütung</h5>
    <p>Die Vergütung wird spätestens am letzten Arbeitstag des Monats gezahlt und bei Krankheit bis zu 6 Wochen fortgezahlt (§ 19 BBiG, EFZG). Gilt ein Tarifvertrag, ist die tarifliche Vergütung maßgeblich; sonst darf der Betrieb die tarifübliche Vergütung höchstens um 20 % unterschreiten – die gesetzliche Mindestvergütung ist aber immer die Untergrenze.</p>
    <table><thead><tr><th>Beginn der Ausbildung 2026</th><th>1. Jahr</th><th>2. Jahr (+18 %)</th><th>3. Jahr (+35 %)</th><th>4. Jahr (+40 %)</th></tr></thead><tbody>
    <tr><td>Mindestvergütung je Monat</td><td>724 €</td><td>854 €</td><td>977 €</td><td>1.014 €</td></tr>
    </tbody></table>
    <div class="callout formel"><strong>Rechenweg:</strong> Aufschläge immer auf den Wert des <strong>1. Jahres</strong>: 724 € × 1,18 = 854,32 € → 854 € · 724 € × 1,35 = 977,40 € → 977 € · 724 € × 1,40 = 1.013,60 € → 1.014 €. Maßgeblich ist das Jahr, in dem die Ausbildung <strong>beginnt</strong> – wer 2025 angefangen hat, behält die Werte von 2025 (1. Jahr 682 €).</div>
    <h5>Wenn Pflichten verletzt werden</h5>
    <ul>
    <li><strong>Azubi</strong> verletzt Pflichten (schwänzt die Berufsschule, führt keinen Ausbildungsnachweis): Gespräch, <strong>Abmahnung</strong>, im Wiederholungsfall fristlose Kündigung aus wichtigem Grund; bei Vorsatz Schadensersatz.</li>
    <li><strong>Betrieb</strong> verletzt Pflichten (nur ausbildungsfremde Arbeiten, keine Freistellung): Beschwerde beim Ausbildungsberater der IHK, die IHK kann die Ausbildungseignung entziehen; der Azubi kann Schadensersatz verlangen oder fristlos kündigen. Verstöße gegen das JArbSchG sind Ordnungswidrigkeiten mit Bußgeld.</li>
    </ul>
    <h5>Probezeit, Kündigung, Ende</h5>
    <table><thead><tr><th>Situation</th><th>Regel</th></tr></thead><tbody>
    <tr><td>Probezeit (§ 20)</td><td>mindestens 1, höchstens 4 Monate</td></tr>
    <tr><td>Kündigung in der Probezeit</td><td>jederzeit, ohne Frist und ohne Grund – aber schriftlich</td></tr>
    <tr><td>danach durch den Azubi</td><td>4 Wochen Frist, wenn er die Ausbildung aufgibt oder einen anderen Beruf lernen will</td></tr>
    <tr><td>danach durch beide Seiten</td><td>nur fristlos aus wichtigem Grund, innerhalb von 2 Wochen nach Kenntnis</td></tr>
    <tr><td>Form (§ 22)</td><td>immer schriftlich, nach der Probezeit mit Angabe der Gründe</td></tr>
    <tr><td>Ende (§ 21)</td><td>mit Ablauf der Ausbildungszeit; bei vorherigem Bestehen mit Bekanntgabe des Ergebnisses; bei Nichtbestehen auf Verlangen Verlängerung bis zur nächsten Wiederholungsprüfung, höchstens 1 Jahr</td></tr>
    <tr><td>Weiterarbeit ohne Absprache (§ 24)</td><td>unbefristetes Arbeitsverhältnis</td></tr>
    </tbody></table>
    <div class="callout beispiel"><strong>Beispiel:</strong> Beginn bei der Nordlicht IT GmbH in Heide am 01.08.2026, Probezeit 4 Monate → sie endet am <strong>30.11.2026</strong>. Kündigt der Azubi am 10.01.2027 schriftlich, weil er Koch werden will, endet die Ausbildung 4 Wochen (28 Tage) später am <strong>07.02.2027</strong> – ein Termin „zum 15. oder Monatsende“ gilt hier nicht.</div>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> Nach der Probezeit kann der Betrieb nicht mehr ordentlich kündigen, nur noch fristlos aus wichtigem Grund. Eine mündliche Kündigung oder eine per Messenger ist unwirksam.</div>
    <h5>Die IHK als zuständige Stelle</h5>
    <ul><li>prüft die Eignung von Ausbildungsstätte und Ausbilder, führt das Verzeichnis, berät und überwacht (Ausbildungsberater)</li><li>nimmt die Prüfungen ab – im <strong>Prüfungsausschuss</strong> sitzen ehrenamtlich Arbeitgeber- und Arbeitnehmervertreter in gleicher Zahl und mindestens eine Lehrkraft</li><li>entscheidet über Verkürzung und Verlängerung und schlichtet Streitigkeiten</li></ul>
    <div class="callout pruefung"><strong>So kommt es dran:</strong> Mindestinhalte des Vertrags erkennen, Probezeitende oder Kündigungsdatum eintragen, Pflichten und Aufgaben von Azubi, Betrieb und IHK zuordnen.</div>
      `
    },
    {
      id: "arbeitszeit-schutz",
      title: "Arbeitszeit, Urlaub & Schutzgesetze (JArbSchG, ArbZG, BUrlG, MuSchG)",
      exam: ["AP2"],
      summary: "Arbeitszeiten, Pausen, Ruhezeiten und Urlaub für Jugendliche und Erwachsene vergleichen, Berufsschulzeiten anrechnen, Urlaubsansprüche berechnen sowie Mutterschutz, Elternzeit und Schwerbehindertenschutz kennen.",
      html: `
    <p>Arbeitszeit- und Urlaubsfragen sind in WiSo reine Zahlenfragen. Lerne die Werte als Vergleich: <strong>Jugendliche</strong> (15 bis unter 18 Jahre) fallen unter das JArbSchG, <strong>Erwachsene</strong> unter ArbZG und BUrlG.</p>
    <h5>Jugendliche und Erwachsene im Vergleich</h5>
    <table><thead><tr><th>Regelung</th><th>JArbSchG (unter 18)</th><th>ArbZG/BUrlG (ab 18)</th></tr></thead><tbody>
    <tr><td>täglich</td><td>8 h (8,5 h, wenn an anderen Tagen der Woche weniger)</td><td>8 h je Werktag, bis 10 h bei Ausgleich auf 8 h im Schnitt von 6 Monaten/24 Wochen</td></tr>
    <tr><td>wöchentlich</td><td>40 h, 5-Tage-Woche</td><td>Werktage Mo–Sa → 48 h (kurzfristig bis 60 h mit Ausgleich)</td></tr>
    <tr><td>Ruhepausen</td><td>mehr als 4,5 bis 6 h: 30 min; mehr als 6 h: 60 min; nie länger als 4,5 h ohne Pause</td><td>mehr als 6 bis 9 h: 30 min; mehr als 9 h: 45 min; nie länger als 6 h ohne Pause</td></tr>
    <tr><td>Ruhezeit</td><td>12 h</td><td>11 h</td></tr>
    <tr><td>Nachtruhe</td><td>20–6 Uhr (Ausnahmen z. B. Gastronomie)</td><td>keine feste Grenze, Schutzregeln für Nachtarbeit</td></tr>
    <tr><td>Wochenende</td><td>Samstag und Sonntag grundsätzlich frei</td><td>Sonn- und Feiertagsruhe (mit Ausnahmen)</td></tr>
    <tr><td>Urlaub</td><td>30/27/25 Werktage, wenn zu Beginn des Kalenderjahres noch nicht 16/17/18</td><td>mindestens 24 Werktage</td></tr>
    <tr><td>Gesundheit</td><td>Erstuntersuchung vor Beginn (höchstens 14 Monate alt), Nachuntersuchung nach 1 Jahr</td><td>Vorsorge nach ArbMedVV, z. B. Angebot einer Augenuntersuchung bei Bildschirmarbeit</td></tr>
    </tbody></table>
    <p>Pausen sind mindestens 15 Minuten lang und zählen nicht zur Arbeitszeit. Der Arbeitgeber muss die Arbeitszeit erfassen (Rechtsprechung des BAG seit 2022). Jugendliche dürfen außerdem nicht im Akkord und nicht mit gefährlichen Arbeiten beschäftigt werden; ihre <strong>Schichtzeit</strong> (Arbeitszeit + Pausen) beträgt höchstens 10 Stunden.</p>
    <div class="callout tipp"><strong>Aktueller Stand (September 2026):</strong> Die Bundesregierung plant eine Reform des Arbeitszeitgesetzes – u. a. eine wöchentliche statt einer täglichen Höchstarbeitszeit auf Grundlage von Tarifverträgen und eine gesetzliche Pflicht zur Zeiterfassung, frühestens ab 2027. Bis eine Reform in Kraft ist, gelten die Werte in der Tabelle. Prüfe vor deiner Prüfung, ob sich etwas geändert hat.</div>
    <h5>Berufsschule und Arbeitszeit</h5>
    <ul>
    <li>Ein Berufsschultag mit <strong>mehr als 5 Unterrichtsstunden</strong> à 45 min ist einmal pro Woche beschäftigungsfrei. Er zählt bei Jugendlichen mit 8 h, bei volljährigen Azubis mit der durchschnittlichen täglichen Ausbildungszeit (§ 15 BBiG).</li>
    <li>An einem zweiten, kürzeren Berufsschultag darf danach gearbeitet werden; die Unterrichtszeit inklusive Pausen wird angerechnet.</li>
    <li>Blockunterricht mit mindestens 25 Stunden an 5 Tagen: keine Beschäftigung, die Woche zählt voll.</li>
    </ul>
    <div class="callout beispiel"><strong>Beispiel:</strong> Lena (17) hat montags 6 und mittwochs 4 Unterrichtsstunden. Montag ist betriebsfrei und zählt 8 h. Am Mittwoch muss sie nach der Schule in den Betrieb, soweit Arbeitszeit übrig ist. Wochenkonto: 40 h − 8 h = <strong>32 h</strong> für Dienstag bis Freitag. Arbeitet sie dienstags 7 h, braucht sie <strong>60 min</strong> Pause.</div>
    <h5>Urlaub berechnen (BUrlG)</h5>
    <div class="callout formel"><strong>Formeln:</strong><br>Urlaub in Arbeitstagen = Urlaub in Werktagen × Arbeitstage pro Woche ÷ 6<br>Teilurlaub = Jahresurlaub × volle Beschäftigungsmonate ÷ 12 (Bruchteile ab einem halben Tag aufrunden)</div>
    <ul><li>voller Anspruch erst nach 6 Monaten Wartezeit (§ 4)</li><li>Übertragung nur aus dringenden Gründen, dann bis 31.03. des Folgejahres (§ 7)</li><li>Krankheit im Urlaub mit ärztlichem Attest wird nicht angerechnet (§ 9)</li></ul>
    <div class="callout beispiel"><strong>Beispiel:</strong> Jonas ist am 01.01.2026 noch 15 → 30 Werktage = 30 × 5 ÷ 6 = <strong>25 Arbeitstage</strong>. Eine 22-jährige Kollegin mit Mindesturlaub hat 24 × 5 ÷ 6 = 20 Arbeitstage. Arbeitet sie nur 4 volle Monate im Jahr, stehen ihr 20 × 4 ÷ 12 = 6,67 → <strong>7 Arbeitstage</strong> zu.</div>
    <h5>Mutterschutz, Elternzeit, Schwerbehinderung</h5>
    <ul>
    <li><strong>MuSchG:</strong> Schutzfrist 6 Wochen vor der Entbindung (Arbeit nur auf eigenen Wunsch) und 8 Wochen danach (Beschäftigungsverbot; 12 Wochen bei Früh- oder Mehrlingsgeburt); Kündigungsverbot ab Beginn der Schwangerschaft bis 4 Monate nach der Entbindung. Seit Juni 2025 gibt es auch nach einer Fehlgeburt ab der 13. Schwangerschaftswoche gestaffelte Schutzfristen (bis zu 8 Wochen).</li>
    <li><strong>BEEG:</strong> Elternzeit bis 3 Jahre je Kind und Elternteil (bis zu 24 Monate davon zwischen 3. und 8. Geburtstag); Anmeldung spätestens 7 Wochen vorher; Kündigungsschutz ab Anmeldung (frühestens 8 Wochen vor Beginn); Elterngeld ersetzt einen Teil des Nettoeinkommens.</li>
    <li><strong>SGB IX:</strong> schwerbehindert ab GdB 50; 5 Arbeitstage Zusatzurlaub (bei 5-Tage-Woche); Kündigung nur mit Zustimmung des Integrations- bzw. Inklusionsamts; Schwerbehindertenvertretung.</li>
    </ul>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> Urlaub steht in JArbSchG und BUrlG in <strong>Werktagen</strong> (Mo–Sa). Maßgeblich ist das Alter am <strong>1. Januar</strong>, nicht der Geburtstag im Lauf des Jahres. „Mehr als 5 Stunden“ heißt: Genau 5 Stunden reichen nicht für den freien Tag.</div>
    <div class="callout pruefung"><strong>So kommt es dran:</strong> Urlaubsanspruch aus einem Geburtsdatum ermitteln, Pausenlänge eintragen, einen Dienstplan auf Verstöße prüfen, Schutzfristen und Kündigungsschutz nennen.</div>
      `
    },
    {
      id: "arbeitsvertrag-zeugnis",
      title: "Arbeitsvertrag, AGG, Arbeitszeugnis & Gerichtsbarkeit",
      exam: ["AP2"],
      summary: "Zustandekommen und Pflichten aus dem Arbeitsvertrag, Diskriminierungsschutz nach AGG, einfaches und qualifiziertes Arbeitszeugnis mit Zeugnissprache sowie der Rechtsweg zu Arbeits- und Sozialgerichten.",
      html: `
    <p>Nach der Ausbildung arbeitest du auf Grundlage eines <strong>Arbeitsvertrags</strong> (§ 611a BGB). Er ist formfrei gültig, der Arbeitgeber muss die wesentlichen Bedingungen aber nach dem <strong>Nachweisgesetz</strong> dokumentieren (u. a. Beginn, Tätigkeit, Entgelt, Arbeitszeit, Urlaub, Kündigungsfristen; seit 2025 grundsätzlich auch in Textform). Eine Befristung ohne Sachgrund ist höchstens 2 Jahre lang zulässig (TzBfG).</p>
    <h5>Pflichten aus dem Arbeitsvertrag</h5>
    <table><thead><tr><th>Arbeitnehmer/in</th><th>Arbeitgeber/in</th></tr></thead><tbody>
    <tr><td>Arbeitspflicht (persönlich, sorgfältig)</td><td>Vergütungspflicht (mindestens gesetzlicher Mindestlohn, 2026: 13,90 €/h, ab 2027: 14,60 €/h; gilt nicht für Azubis – für sie gilt die Mindestausbildungsvergütung)</td></tr>
    <tr><td>Weisungen befolgen (Direktionsrecht)</td><td>Beschäftigungspflicht</td></tr>
    <tr><td>Treue-/Rücksichtnahmepflicht: Verschwiegenheit, kein Wettbewerb, keine Bestechlichkeit</td><td>Fürsorgepflicht: Arbeits-, Gesundheits- und Datenschutz</td></tr>
    <tr><td>Krankmeldung unverzüglich, Nachweis ab dem 4. Tag</td><td>Entgeltfortzahlung bei Krankheit bis 6 Wochen, Urlaub gewähren</td></tr>
    <tr><td>Haftung für Schäden bei Verschulden</td><td>Gleichbehandlung, Zeugnis ausstellen</td></tr>
    </tbody></table>
    <h5>Allgemeines Gleichbehandlungsgesetz (AGG)</h5>
    <p>Niemand darf bei Bewerbung, Beförderung, Bezahlung oder Kündigung benachteiligt werden wegen <strong>ethnischer Herkunft, Geschlecht, Religion/Weltanschauung, Behinderung, Alter oder sexueller Identität</strong>. Deshalb sind Stellenanzeigen neutral formuliert („m/w/d“). Betroffene können sich beschweren und Entschädigung verlangen (schriftlich innerhalb von 2 Monaten).</p>
    <h5>Arbeitszeugnis</h5>
    <p>Bei Ende des Arbeitsverhältnisses besteht Anspruch auf ein schriftliches Zeugnis (§ 109 GewO, für Azubis § 16 BBiG). <strong>Neu:</strong> Mit Einwilligung der oder des Beschäftigten darf das Zeugnis inzwischen auch in <strong>elektronischer Form</strong> erteilt werden (GewO seit 2025) – ohne diese Zustimmung bleibt es beim unterschriebenen Papierzeugnis. Ein <strong>Zwischenzeugnis</strong> gibt es bei berechtigtem Interesse, z. B. Vorgesetztenwechsel oder Versetzung. Das <strong>Ausbildungszeugnis</strong> nennt Art, Dauer und Ziel der Ausbildung sowie die erworbenen Fertigkeiten, Kenntnisse und Fähigkeiten; Angaben zu Verhalten und Leistung kommen nur auf Verlangen des Azubis hinein.</p>
    <div class="grid-2">
    <div><strong>Einfaches Zeugnis</strong><br>nur Art und Dauer der Tätigkeit</div>
    <div><strong>Qualifiziertes Zeugnis</strong> (auf Verlangen)<br>zusätzlich Leistung und Verhalten</div>
    </div>
    <p>Das Zeugnis muss <strong>wahr und wohlwollend</strong> sein und darf keine versteckten Merkmale enthalten. In der Praxis hat sich trotzdem eine feste Zeugnissprache entwickelt:</p>
    <table><thead><tr><th>Formulierung (Leistung)</th><th>entspricht etwa</th></tr></thead><tbody>
    <tr><td>stets zu unserer vollsten Zufriedenheit</td><td>sehr gut</td></tr>
    <tr><td>stets zu unserer vollen Zufriedenheit</td><td>gut</td></tr>
    <tr><td>zu unserer vollen Zufriedenheit</td><td>befriedigend</td></tr>
    <tr><td>zu unserer Zufriedenheit</td><td>ausreichend</td></tr>
    <tr><td>im Großen und Ganzen zu unserer Zufriedenheit</td><td>mangelhaft</td></tr>
    <tr><td>hat sich bemüht, die Aufgaben zu erledigen</td><td>ungenügend</td></tr>
    </tbody></table>
    <div class="callout tipp"><strong>Tipp:</strong> Achte beim Verhalten auf die Reihenfolge „Vorgesetzte, Kollegen, Kunden“ und auf die Schlussformel mit Dank, Bedauern und guten Wünschen. Fehlt etwas davon, ist das ein Warnsignal.</div>
    <h5>Arbeits- und Sozialgerichtsbarkeit</h5>
    <table><thead><tr><th></th><th>Arbeitsgerichtsbarkeit</th><th>Sozialgerichtsbarkeit</th></tr></thead><tbody>
    <tr><td>zuständig</td><td>Streit aus Arbeits- und Ausbildungsverhältnis (Kündigung, Lohn, Zeugnis, Urlaub), zwischen Tarifparteien und aus dem BetrVG</td><td>Streit mit Sozialversicherungsträgern und Sozialbehörden (Kranken-, Pflege-, Renten-, Unfall-, Arbeitslosenversicherung, Grundsicherungsgeld – bis Juni 2026 „Bürgergeld“, Schwerbehinderung, Elterngeld)</td></tr>
    <tr><td>1. Instanz</td><td>Arbeitsgericht: zuerst Güteverhandlung, dann Kammer (1 Berufsrichter + 2 ehrenamtliche Richter von Arbeitgeber- und Arbeitnehmerseite)</td><td>Sozialgericht (vorher Widerspruch beim Träger)</td></tr>
    <tr><td>2. Instanz</td><td>Landesarbeitsgericht (Berufung), in SH in Kiel</td><td>Landessozialgericht (Berufung), in SH in Schleswig</td></tr>
    <tr><td>3. Instanz</td><td>Bundesarbeitsgericht in Erfurt (Revision)</td><td>Bundessozialgericht in Kassel (Revision)</td></tr>
    <tr><td>Kosten/Fristen</td><td>1. Instanz: jede Seite zahlt ihren Anwalt selbst, kein Anwaltszwang; Kündigungsschutzklage binnen 3 Wochen</td><td>für Versicherte gerichtskostenfrei; Klage binnen 1 Monat nach Widerspruchsbescheid</td></tr>
    </tbody></table>
    <div class="callout merke"><strong>Merke:</strong> Streit zwischen Arbeitgeber und Arbeitnehmer → Arbeitsgericht. Streit mit Krankenkasse, Rentenversicherung, Berufsgenossenschaft oder Arbeitsagentur → Sozialgericht. Bei Streit im Ausbildungsverhältnis ist vorher der Schlichtungsausschuss der IHK anzurufen, falls eingerichtet.</div>
    <div class="callout pruefung"><strong>So kommt es dran:</strong> Zeugnisformulierungen einer Note zuordnen, einfaches und qualifiziertes Zeugnis unterscheiden, Instanzenzug in die richtige Reihenfolge bringen, den zuständigen Gerichtszweig für einen Fall wählen.</div>
      `
    },
    {
      id: "kuendigung",
      title: "Kündigung & Kündigungsschutz",
      exam: ["AP2"],
      summary: "Ordentliche und außerordentliche Kündigung, Fristen nach § 622 BGB berechnen, Kündigungsschutzgesetz, Abmahnung und besonderer Kündigungsschutz.",
      html: `
    <p>Die Kündigung ist eine einseitige, empfangsbedürftige Willenserklärung: Sie wirkt mit <strong>Zugang</strong>, eine Zustimmung braucht es nicht. Sie muss <strong>schriftlich</strong> mit eigenhändiger Unterschrift erfolgen (§ 623 BGB) – E-Mail, Fax oder Messenger reichen nicht.</p>
    <h5>Arten der Beendigung</h5>
    <ul>
    <li><strong>Ordentliche Kündigung:</strong> fristgerecht nach § 622 BGB, Tarif- oder Arbeitsvertrag.</li>
    <li><strong>Außerordentliche Kündigung</strong> (§ 626 BGB): fristlos aus wichtigem Grund, wenn die Fortsetzung bis zum Fristende unzumutbar ist (Diebstahl, Tätlichkeit, beharrliche Arbeitsverweigerung; aus AN-Sicht z. B. ausbleibender Lohn). Nur binnen <strong>2 Wochen</strong> ab Kenntnis.</li>
    <li><strong>Änderungskündigung:</strong> Kündigung plus Angebot neuer Bedingungen.</li>
    <li><strong>Aufhebungsvertrag:</strong> einvernehmlich, ohne Frist, ebenfalls nur schriftlich wirksam (§ 623 BGB) – Achtung: Sperrzeit beim Arbeitslosengeld möglich.</li>
    </ul>
    <h5>Fristen nach § 622 BGB</h5>
    <table><thead><tr><th>Fall</th><th>Frist</th></tr></thead><tbody>
    <tr><td>vereinbarte Probezeit (max. 6 Monate)</td><td>2 Wochen, zu jedem Tag</td></tr>
    <tr><td>Grundkündigungsfrist (Arbeitnehmer immer; Arbeitgeber unter 2 Jahren)</td><td>4 Wochen zum 15. oder zum Monatsende</td></tr>
    <tr><td>Arbeitgeber, Betriebszugehörigkeit ab 2 / 5 / 8 Jahren</td><td>1 / 2 / 3 Monate zum Monatsende</td></tr>
    <tr><td>ab 10 / 12 / 15 / 20 Jahren</td><td>4 / 5 / 6 / 7 Monate zum Monatsende</td></tr>
    </tbody></table>
    <p>Die verlängerten Fristen gelten nur für Kündigungen durch den Arbeitgeber. Für den Arbeitnehmer darf vertraglich keine längere Frist als für den Arbeitgeber vereinbart werden; Tarifverträge dürfen abweichen.</p>
    <div class="callout formel"><strong>Rechenweg:</strong> 1. Zugangstag bestimmen (zählt nicht mit) → 2. Frist addieren (4 Wochen = 28 Tage, Monate kalendarisch) → 3. auf den nächsten zulässigen Endtermin gehen (15. oder Monatsende bzw. nur Monatsende).<br>Rückwärts: spätester Zugang = Endtermin − 28 Tage.</div>
    <div class="callout beispiel"><strong>Beispiel:</strong> Zugang am 20.05.2026<br>• Eigenkündigung des Arbeitnehmers: 20.05. + 28 Tage = 17.06. → Ende <strong>30.06.2026</strong><br>• Arbeitgeberkündigung nach 6 Jahren (2 Monate zum Monatsende): 20.07. → Ende <strong>31.07.2026</strong><br>• Kündigung in der Probezeit: 20.05. + 14 Tage → Ende <strong>03.06.2026</strong><br>• Soll ein Arbeitsverhältnis mit Grundfrist am 31.07. enden, muss die Kündigung spätestens am 31.07. − 28 Tage = <strong>03.07.</strong> zugehen.</div>
    <h5>Kündigungsschutzgesetz (KSchG)</h5>
    <p>Es gilt, wenn der Betrieb regelmäßig <strong>mehr als 10 Arbeitnehmer</strong> hat (Azubis zählen nicht; Teilzeit bis 20 h = 0,5, bis 30 h = 0,75) und das Arbeitsverhältnis <strong>länger als 6 Monate</strong> besteht. Dann muss eine Kündigung des Arbeitgebers sozial gerechtfertigt sein:</p>
    <table><thead><tr><th>Grund</th><th>Beispiele</th><th>Voraussetzung</th></tr></thead><tbody>
    <tr><td>personenbedingt</td><td>lange Krankheit mit schlechter Prognose, Entzug der Fahrerlaubnis beim Berufskraftfahrer, Sucht</td><td>keine andere Einsatzmöglichkeit</td></tr>
    <tr><td>verhaltensbedingt</td><td>wiederholtes Zuspätkommen, Arbeitsverweigerung, Verstoß gegen IT-Richtlinien</td><td>in der Regel vorherige <strong>Abmahnung</strong></td></tr>
    <tr><td>betriebsbedingt</td><td>Auftragsmangel, Schließung einer Filiale, Umstrukturierung</td><td>dringend, kein freier Arbeitsplatz, <strong>Sozialauswahl</strong> (Betriebszugehörigkeit, Alter, Unterhaltspflichten, Schwerbehinderung)</td></tr>
    </tbody></table>
    <p>Wer die Kündigung für unwirksam hält, muss <strong>innerhalb von 3 Wochen</strong> nach Zugang Klage beim Arbeitsgericht erheben, sonst gilt sie als wirksam. Besteht ein Betriebsrat, muss er vor jeder Kündigung angehört werden – sonst ist sie unwirksam.</p>
    <h5>Besonderer Kündigungsschutz</h5>
    <ul>
    <li>Schwangere und Mütter bis 4 Monate nach der Entbindung (nur mit Zustimmung der Aufsichtsbehörde)</li>
    <li>Beschäftigte in Elternzeit ab Anmeldung</li>
    <li>schwerbehinderte Menschen: nur mit Zustimmung des Integrationsamts</li>
    <li>Betriebsrats- und JAV-Mitglieder: ordentlich unkündbar (bis 1 Jahr nach der Amtszeit), außerordentlich nur mit Zustimmung des Betriebsrats</li>
    <li>Azubis nach der Probezeit: nur aus wichtigem Grund</li>
    </ul>
    <div class="callout achtung"><strong>Prüfungsfallen:</strong> „4 Wochen“ sind nicht „1 Monat“. Das Lebensalter spielt für die Fristen keine Rolle – auch Jahre vor dem 25. Geburtstag zählen voll zur Betriebszugehörigkeit, ebenso die Ausbildungszeit im selben Betrieb. Maßgeblich ist die Dauer am Tag des Zugangs der Kündigung. Der Arbeitnehmer hat ohne Vereinbarung immer nur die Grundfrist. In den ersten 6 Monaten greift das KSchG noch nicht. Auch vor einer fristlosen Kündigung muss ein bestehender Betriebsrat angehört werden.</div>
    <div class="callout pruefung"><strong>So kommt es dran:</strong> Beendigungsdatum eintragen, prüfen, ob das KSchG gilt, Kündigungsgründe personen-, verhaltens- oder betriebsbedingt zuordnen, besonders geschützte Personen erkennen.</div>
      `
    },
    {
      id: "tarifvertrag",
      title: "Tarifvertrag, Tarifparteien & Arbeitskampf",
      exam: ["AP2"],
      summary: "Tarifautonomie, Gewerkschaften und Arbeitgeberverbände, Arten von Tarifverträgen, Friedenspflicht, Günstigkeitsprinzip, Allgemeinverbindlichkeit sowie der Ablauf einer Tarifauseinandersetzung mit Streik und Aussperrung.",
      html: `
    <p>Löhne, Arbeitszeit und Urlaub werden oft nicht einzeln, sondern kollektiv ausgehandelt. Grundlage ist die <strong>Tarifautonomie</strong>: Nach Art. 9 Abs. 3 GG (Koalitionsfreiheit) regeln Gewerkschaften und Arbeitgeber(verbände) die Arbeitsbedingungen ohne staatliche Einmischung selbst. Den Rahmen setzt das Tarifvertragsgesetz (TVG).</p>
    <h5>Tarifparteien</h5>
    <table><thead><tr><th>Arbeitnehmerseite</th><th>Arbeitgeberseite</th></tr></thead><tbody>
    <tr><td>Gewerkschaften nach Branchen, z. B. ver.di (Dienstleistungen, auch IT), IG Metall, IG BCE; Dachverband DGB</td><td>Arbeitgeberverbände je Branche, Dachverband BDA – oder ein einzelnes Unternehmen</td></tr>
    <tr><td>Aufgaben: Tarifverhandlungen, Rechtsschutz und Beratung der Mitglieder, Streikgeld, politische Interessenvertretung</td><td>Aufgaben: Tarifverhandlungen, Beratung der Mitglieder, Interessenvertretung</td></tr>
    </tbody></table>
    <p>Nicht verwechseln: <strong>Kammern</strong> wie IHK oder Handwerkskammer sind öffentlich-rechtliche Körperschaften mit Pflichtmitgliedschaft – sie schließen keine Tarifverträge. Fachverbände wie Bitkom vertreten Brancheninteressen, sind aber keine Tarifpartei. Wichtige <strong>Behörden</strong> für Betriebe sind die Agentur für Arbeit (Vermittlung, Arbeitslosengeld), das Finanzamt, die Arbeitsschutzbehörde (Gewerbeaufsicht) und die Datenschutzaufsicht – in Schleswig-Holstein das Unabhängige Landeszentrum für Datenschutz (ULD).</p>
    <h5>Arten von Tarifverträgen</h5>
    <table><thead><tr><th>Art</th><th>Inhalt</th><th>Laufzeit</th></tr></thead><tbody>
    <tr><td>Mantel-/Rahmentarifvertrag</td><td>allgemeine Arbeitsbedingungen: Arbeitszeit, Urlaub, Zuschläge, Kündigungsfristen</td><td>lang (mehrere Jahre)</td></tr>
    <tr><td>Entgelt-/Lohn-/Gehaltstarifvertrag</td><td>Höhe der Löhne, Gehälter und Ausbildungsvergütungen</td><td>kurz (meist 12–24 Monate)</td></tr>
    <tr><td>Entgeltrahmentarifvertrag</td><td>Eingruppierung: Merkmale der Entgeltgruppen</td><td>mittel bis lang</td></tr>
    </tbody></table>
    <p>Nach den Vertragsparteien unterscheidet man den <strong>Verbands- oder Flächentarifvertrag</strong> (Gewerkschaft + Arbeitgeberverband, gilt für Branche und Region) und den <strong>Firmen- oder Haustarifvertrag</strong> (Gewerkschaft + ein Unternehmen).</p>
    <h5>Grundsätze</h5>
    <ul>
    <li><strong>Tarifbindung:</strong> Der Tarifvertrag gilt unmittelbar und zwingend für Mitglieder beider Seiten; viele Arbeitgeber wenden ihn per Arbeitsvertrag auf alle an.</li>
    <li><strong>Friedenspflicht:</strong> Während der Laufzeit sind Arbeitskämpfe über die geregelten Inhalte verboten.</li>
    <li><strong>Günstigkeitsprinzip:</strong> Abweichungen sind nur zugunsten der Arbeitnehmer erlaubt.</li>
    <li><strong>Allgemeinverbindlicherklärung:</strong> Das Bundesarbeitsministerium kann einen Tarifvertrag auf Antrag im öffentlichen Interesse für alle Betriebe der Branche verbindlich machen.</li>
    <li><strong>Nachwirkung:</strong> Ein abgelaufener Tarifvertrag gilt weiter, bis eine neue Abmachung ihn ersetzt.</li>
    </ul>
    <pre class="ascii">Rangfolge der Regelungen (nach unten nur günstiger):
Grundgesetz / EU-Recht
  → Gesetze, Verordnungen (BUrlG, ArbZG, MiLoG …)
    → Tarifvertrag
      → Betriebsvereinbarung
        → Arbeitsvertrag</pre>
    <div class="callout beispiel"><strong>Beispiel:</strong> Das Tarifgehalt einer Entgeltgruppe steigt von 3.200 € um 4,5 %: 3.200 € × 1,045 = <strong>3.344 €</strong>. Eine tarifgebundene Mitarbeiterin mit bisher 3.300 € muss nun mindestens 3.344 € erhalten. Ein Kollege mit vertraglich 3.500 € behält seine 3.500 € – die günstigere Regelung bleibt.</div>
    <h5>Ablauf einer Tarifauseinandersetzung</h5>
    <ol>
    <li>Kündigung des alten Tarifvertrags, Forderungen</li>
    <li>Verhandlungen – nach Ende der Friedenspflicht oft mit Warnstreiks</li>
    <li>Scheitern der Verhandlungen</li>
    <li>Schlichtung durch einen neutralen Schlichter</li>
    <li>Urabstimmung der Gewerkschaftsmitglieder (meist mind. 75 % Zustimmung nötig)</li>
    <li>Streik – Arbeitgeber können mit Aussperrung antworten</li>
    <li>neue Verhandlungen und Einigung</li>
    <li>zweite Urabstimmung über das Ergebnis (meist genügen 25 % Zustimmung)</li>
    <li>neuer Tarifvertrag → wieder Friedenspflicht</li>
    </ol>
    <div class="callout merke"><strong>Merke:</strong> Ein <strong>Streik</strong> ist die planmäßige Arbeitsniederlegung vieler Beschäftigter, organisiert von einer Gewerkschaft, um tarifliche Ziele durchzusetzen. Streikende bekommen keinen Lohn, Mitglieder erhalten Streikgeld; die Arbeitsagentur zahlt nichts (Neutralität). Bei der <strong>Aussperrung</strong> schließt der Arbeitgeber Beschäftigte von der Arbeit aus und zahlt keinen Lohn.</div>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> „Wilde“ Streiks ohne Gewerkschaft und politische Streiks sind unzulässig. Der Betriebsrat darf nicht zum Streik aufrufen, Beamte dürfen nicht streiken.</div>
    <div class="callout pruefung"><strong>So kommt es dran:</strong> Schritte einer Tarifrunde in die richtige Reihenfolge bringen, Friedenspflicht, Günstigkeitsprinzip und Allgemeinverbindlichkeit zuordnen, Mantel- und Entgelttarifvertrag unterscheiden.</div>
      `
    },
    {
      id: "mitbestimmung",
      title: "Mitbestimmung: Betriebsrat, JAV, Personalrat & Betriebsvereinbarung",
      exam: ["AP2"],
      summary: "Wahl, Größe und Rechte des Betriebsrats, Stufen der Beteiligung von Information bis echter Mitbestimmung, Betriebsvereinbarung, Jugend- und Auszubildendenvertretung sowie Personalrat im öffentlichen Dienst.",
      html: `
    <p>Mitbestimmung heißt: Beschäftigte wirken über gewählte Vertretungen an Entscheidungen mit. In privaten Betrieben gilt das <strong>Betriebsverfassungsgesetz (BetrVG)</strong>, im öffentlichen Dienst das Personalvertretungsrecht. Grundsatz ist die <strong>vertrauensvolle Zusammenarbeit</strong> von Arbeitgeber und Betriebsrat (§ 2 BetrVG); Arbeitskämpfe zwischen beiden sind verboten.</p>
    <h5>Betriebsrat</h5>
    <ul>
    <li>wählbar in Betrieben mit mindestens <strong>5 ständigen wahlberechtigten Arbeitnehmern</strong>, von denen 3 wählbar sind</li>
    <li><strong>aktives Wahlrecht</strong> ab 16 Jahren (auch Azubis), <strong>passives Wahlrecht</strong> ab 18 Jahren und 6 Monaten Betriebszugehörigkeit</li>
    <li>Amtszeit <strong>4 Jahre</strong>, regelmäßige Wahlen vom 1. März bis 31. Mai (2026, 2030 …)</li>
    <li>ehrenamtlich; Kosten trägt der Arbeitgeber; ab 200 Arbeitnehmern ist mindestens ein Mitglied voll freigestellt</li>
    <li>Betriebsversammlung einmal im Kalendervierteljahr, dazu Sprechstunden</li>
    </ul>
    <table><thead><tr><th>Wahlberechtigte</th><th>5–20</th><th>21–50</th><th>51–100</th><th>101–200</th><th>201–400</th><th>401–700</th></tr></thead><tbody>
    <tr><td>Mitglieder</td><td>1</td><td>3</td><td>5</td><td>7</td><td>9</td><td>11</td></tr>
    </tbody></table>
    <h5>Beteiligungsrechte – von schwach nach stark</h5>
    <table><thead><tr><th>Stufe</th><th>Bedeutung</th><th>Beispiele</th></tr></thead><tbody>
    <tr><td>Information</td><td>Arbeitgeber muss rechtzeitig unterrichten</td><td>Personalplanung, Planung von Neubauten und technischen Anlagen</td></tr>
    <tr><td>Anhörung</td><td>Betriebsrat wird gehört, Arbeitgeber entscheidet</td><td>jede Kündigung (§ 102) – ohne Anhörung unwirksam</td></tr>
    <tr><td>Beratung</td><td>Arbeitgeber muss mit dem Betriebsrat beraten</td><td>Arbeitsplatzgestaltung, Betriebsänderungen</td></tr>
    <tr><td>Widerspruch / Zustimmungsverweigerung</td><td>Betriebsrat kann aus gesetzlichen Gründen widersprechen</td><td>Einstellung, Eingruppierung, Versetzung in Unternehmen mit mehr als 20 wahlberechtigten AN (§ 99)</td></tr>
    <tr><td>echte Mitbestimmung</td><td>ohne Zustimmung keine Maßnahme; bei Streit entscheidet die Einigungsstelle</td><td>soziale Angelegenheiten (§ 87): Beginn und Ende der Arbeitszeit, Pausen, Überstunden, Urlaubsgrundsätze, technische Einrichtungen zur Leistungs- oder Verhaltenskontrolle, mobile Arbeit</td></tr>
    </tbody></table>
    <p><strong>Betriebsvereinbarung:</strong> schriftlicher Vertrag zwischen Arbeitgeber und Betriebsrat, der unmittelbar für alle Beschäftigten gilt – z. B. zu Gleitzeit, Homeoffice, E-Mail- und Internetnutzung oder einem neuen Ticketsystem. Entgelthöhen, die üblicherweise tariflich geregelt sind, gehören nicht hinein (Tarifvorrang).</p>
    <h5>Jugend- und Auszubildendenvertretung (JAV)</h5>
    <ul>
    <li>Voraussetzung: Es gibt einen Betriebsrat und mindestens <strong>5 Arbeitnehmer unter 18 oder Azubis</strong>.</li>
    <li>Wählen dürfen alle unter 18 und alle Azubis (seit 2021 ohne Altersgrenze); wählbar sind Beschäftigte unter 25 und alle Azubis.</li>
    <li>Amtszeit <strong>2 Jahre</strong>, Wahlen vom 1. Oktober bis 30. November (2026, 2028 …); Größe: 5–20 → 1, 21–50 → 3, 51–150 → 5 Mitglieder.</li>
    <li>Die JAV handelt über den Betriebsrat: Teilnahme an dessen Sitzungen, Stimmrecht bei Jugend- und Azubi-Themen, eigene Versammlungen.</li>
    <li>Azubis in der JAV haben Anspruch auf Übernahme, wenn sie ihn in den letzten 3 Monaten vor Ausbildungsende schriftlich verlangen (§ 78a).</li>
    </ul>
    <div class="callout beispiel"><strong>Beispiel:</strong> Die Förde-Netz GmbH in Flensburg hat 150 wahlberechtigte Arbeitnehmer, darunter 6 Azubis und 2 weitere Beschäftigte unter 18. Betriebsrat: 101–200 → <strong>7 Mitglieder</strong>. JAV: 6 + 2 = 8 Wahlberechtigte (≥ 5) → wählbar, 5–20 → <strong>1 Mitglied</strong>.</div>
    <h5>Personalrat im öffentlichen Dienst</h5>
    <p>In Behörden, Schulen oder Rathäusern gibt es statt eines Betriebsrats einen <strong>Personalrat</strong>. Grundlage ist für Bundesbehörden das Bundespersonalvertretungsgesetz, in Schleswig-Holstein für Land und Kommunen das <strong>Mitbestimmungsgesetz Schleswig-Holstein (MBG Schl.-H.)</strong>. Verhandlungspartner ist die Dienststellenleitung; statt Betriebsvereinbarungen gibt es Dienstvereinbarungen. Auch hier gibt es eine JAV, die über den Personalrat handelt – Altersgrenzen weichen teilweise vom BetrVG ab.</p>
    <div class="callout achtung"><strong>Prüfungsfallen:</strong> Anhörung ist keine Zustimmung – der Betriebsrat kann eine Kündigung nicht verhindern, ohne Anhörung ist sie aber unwirksam. Ohne Betriebsrat keine JAV. Ein Monitoring-Tool, das Leistung auswerten kann, ist echte Mitbestimmung.</div>
    <div class="callout pruefung"><strong>So kommt es dran:</strong> Fälle der richtigen Beteiligungsstufe zuordnen, Betriebsratsgröße und JAV-Voraussetzungen bestimmen, Amtszeiten und Wahlalter nennen.</div>
      `
    },
    {
      id: "sozialversicherung",
      title: "Sozialversicherung & Entgeltabrechnung",
      exam: ["AP2"],
      summary: "Die fünf Zweige der Sozialversicherung mit Trägern, Leistungen und Beitragssätzen, Prinzipien der sozialen Sicherung, Beitragsbemessungsgrenze, Steuerklassen und das Schema der Lohn- und Gehaltsabrechnung mit Rechenbeispiel.",
      html: `
    <p>Die gesetzliche Sozialversicherung schützt gegen die großen Lebensrisiken Krankheit, Pflegebedürftigkeit, Alter, Arbeitslosigkeit und Arbeitsunfall. Sie beruht auf <strong>Versicherungspflicht</strong> (auch für Azubis), dem <strong>Solidaritätsprinzip</strong> (Beitrag nach Einkommen, Leistung nach Bedarf) und der <strong>Selbstverwaltung</strong> durch Versicherte und Arbeitgeber. Die Rente wird im <strong>Umlageverfahren</strong> bezahlt: Die heutigen Beitragszahler finanzieren die heutigen Renten (Generationenvertrag).</p>
    <h5>Die fünf Zweige</h5>
    <table><thead><tr><th>Zweig</th><th>Träger</th><th>Leistungen (Beispiele)</th><th>Beitrag 2026</th><th>Wer zahlt?</th></tr></thead><tbody>
    <tr><td>Krankenversicherung</td><td>Krankenkassen (AOK, Ersatzkassen, BKK, IKK)</td><td>Arzt, Krankenhaus, Medikamente, Krankengeld ab der 7. Woche</td><td>14,6 % + Zusatzbeitrag der Kasse (Ø ca. 2,9 %)</td><td>je zur Hälfte</td></tr>
    <tr><td>Pflegeversicherung</td><td>Pflegekassen (bei den Krankenkassen)</td><td>Pflegegeld, ambulante und stationäre Pflege</td><td>3,6 % + 0,6 % Zuschlag für Kinderlose ab 23</td><td>je zur Hälfte, Zuschlag nur AN</td></tr>
    <tr><td>Rentenversicherung</td><td>Deutsche Rentenversicherung</td><td>Alters-, Erwerbsminderungs-, Hinterbliebenenrente, Reha</td><td>18,6 %</td><td>je zur Hälfte</td></tr>
    <tr><td>Arbeitslosenversicherung</td><td>Bundesagentur für Arbeit</td><td>Arbeitslosengeld, Vermittlung, Weiterbildung, Kurzarbeitergeld</td><td>2,6 %</td><td>je zur Hälfte</td></tr>
    <tr><td>Unfallversicherung</td><td>Berufsgenossenschaften (z. B. VBG für viele IT-Dienstleister), Unfallkassen</td><td>Heilbehandlung, Reha, Verletztengeld, Unfallrente, Prävention</td><td>nach Lohnsumme und Gefahrklasse</td><td><strong>Arbeitgeber allein</strong></td></tr>
    </tbody></table>
    <div class="callout tipp"><strong>Hinweis zu den Sätzen:</strong> Stand Anfang 2026, gerundet – Zusatzbeiträge und Grenzwerte ändern sich jährlich. In der Prüfung werden die Sätze in der Regel vorgegeben. Bei der Pflegeversicherung gibt es Abschläge ab dem 2. Kind und in Sachsen eine andere Aufteilung.</div>
    <ul>
    <li><strong>Beitragsbemessungsgrenze:</strong> Einkommen darüber ist beitragsfrei (2026: 8.450 €/Monat in RV/AV, 5.812,50 €/Monat in KV/PV). Liegt das Gehalt darüber, wird der Beitrag nur von der Grenze berechnet – eine Gehaltserhöhung erhöht diesen Beitrag dann nicht mehr.</li>
    <li><strong>Versicherungspflichtgrenze</strong> (Jahresarbeitsentgeltgrenze, 2026: 77.400 € im Jahr): Wer mehr verdient, kann in die private Krankenversicherung wechseln.</li>
    <li>Azubis mit höchstens 325 € Vergütung im Monat: Der Arbeitgeber zahlt die Beiträge allein.</li>
    <li><strong>Minijob</strong> (2026 bis 603 €/Monat, Grenze steigt mit dem Mindestlohn): für den Beschäftigten keine Beiträge zu KV, PV und AV; Rentenversicherungspflicht mit Befreiungsmöglichkeit; der Arbeitgeber zahlt Pauschalabgaben an die Minijob-Zentrale. <strong>Midijob</strong> (Übergangsbereich 603,01 € bis 2.000 €): reduzierte Arbeitnehmerbeiträge.</li>
    <li>Der Arbeitgeber überweist den Gesamtsozialversicherungsbeitrag an die Krankenkasse als Einzugsstelle.</li>
    </ul>
    <h5>Prinzipien der sozialen Sicherung</h5>
    <p><strong>Versicherungsprinzip</strong>: Leistung, weil Beiträge gezahlt wurden (Sozialversicherung). <strong>Versorgungsprinzip</strong>: steuerfinanzierte Leistung für besondere Gruppen (z. B. Beamtenversorgung). <strong>Fürsorgeprinzip</strong>: Hilfe nach Bedürftigkeitsprüfung (Sozialhilfe, Grundsicherung für Arbeitsuchende – seit 01.07.2026 „Grundsicherungsgeld“, vorher „Bürgergeld“). Die <strong>Subsidiarität</strong> verlangt zuerst Eigenverantwortung. Problem: Durch den demografischen Wandel stehen immer weniger Beitragszahler immer mehr Rentnern gegenüber.</p>
    <h5>Schema der Entgeltabrechnung</h5>
    <pre class="ascii">  Bruttoentgelt (Gehalt + Zuschläge + VL-Zuschuss des AG)
− Lohnsteuer (nach Steuerklasse)
− Solidaritätszuschlag (nur bei hohen Einkommen)
− Kirchensteuer (9 % der Lohnsteuer, in BY/BW 8 %)
− Arbeitnehmeranteile KV, PV, RV, AV
= Nettoentgelt
− sonstige Abzüge (VL-Sparrate, Vorschuss …)
= Auszahlungsbetrag</pre>
    <p><strong>Steuerklassen:</strong> I ledig · II alleinerziehend · III verheiratet, Partner in V oder ohne Einkommen · IV verheiratet, ähnliches Einkommen · V Partner von III · VI zweites und weiteres Arbeitsverhältnis.</p>
    <div class="callout beispiel"><strong>Beispiel:</strong> Tim (26, ledig, kinderlos, evangelisch, Steuerklasse I) erhält 2.960 € Gehalt + 40 € VL-Zuschuss = <strong>3.000,00 € brutto</strong>. Vorgaben: Lohnsteuer laut Tabelle 300,00 €, kein Soli, KV 8,75 % (7,3 % + halber Zusatzbeitrag 1,45 %), PV 2,4 %, RV 9,3 %, AV 1,3 %.<br>
    Kirchensteuer: 9 % × 300,00 € = 27,00 €<br>
    KV 262,50 € + PV 72,00 € + RV 279,00 € + AV 39,00 € = 652,50 € Sozialversicherung<br>
    Netto: 3.000,00 − 300,00 − 27,00 − 652,50 = <strong>2.020,50 €</strong><br>
    Auszahlung nach 40 € VL-Sparrate: <strong>1.980,50 €</strong><br>
    Der Arbeitgeber zahlt zusätzlich seinen Anteil von 634,50 € (ohne Kinderlosenzuschlag) plus Unfallversicherung.</div>
    <div class="callout achtung"><strong>Prüfungsfallen:</strong> Die Kirchensteuer ist ein Prozentsatz der Lohnsteuer, nicht des Bruttos. Die Unfallversicherung wird nie vom Lohn abgezogen. Netto ist nicht gleich Auszahlungsbetrag.</div>
    <div class="callout pruefung"><strong>So kommt es dran:</strong> Zweige und Träger zuordnen, „Wer zahlt die Unfallversicherung?“, eine Abrechnung mit vorgegebenen Sätzen rechnen, Positionen der eigenen Entgeltabrechnung erklären.</div>
      `
    },
    {
      id: "unternehmensformen",
      title: "Unternehmensformen, Handelsregister & Vollmachten",
      exam: ["AP1", "AP2"],
      summary: "Einzelunternehmen, Personen- und Kapitalgesellschaften nach Kapital, Haftung, Leitung und Register vergleichen, Gewinn nach der Rechtslage seit 2024 verteilen, Handelsregister A/B unterscheiden, Firma und weitere Rechtsformen (eG, e. V., gGmbH, Stiftung) einordnen und Prokura von Handlungsvollmacht abgrenzen.",
      html: `
    <p>Die Rechtsform legt fest, wer haftet, wer entscheidet, wie der Gewinn verteilt wird und wo das Unternehmen eingetragen ist. Bei <strong>Personengesellschaften</strong> arbeiten die Gesellschafter meist mit und haften persönlich; <strong>Kapitalgesellschaften</strong> sind juristische Personen, die Gesellschafter haften nicht mit ihrem Privatvermögen.</p>
    <table><thead><tr><th>Rechtsform</th><th>Gründung / Kapital</th><th>Haftung</th><th>Leitung</th><th>Register</th></tr></thead><tbody>
    <tr><td>Einzelunternehmen (e. K.)</td><td>1 Person, kein Mindestkapital</td><td>unbeschränkt, auch privat</td><td>Inhaber</td><td>HR A</td></tr>
    <tr><td>GbR</td><td>mind. 2, kein Mindestkapital</td><td>alle unbeschränkt und gesamtschuldnerisch</td><td>laut Vertrag, sonst gemeinsam</td><td>kein HR; seit 2024 freiwillig Gesellschaftsregister (eGbR)</td></tr>
    <tr><td>OHG</td><td>mind. 2, kein Mindestkapital</td><td>alle unbeschränkt, unmittelbar, solidarisch</td><td>jeder Gesellschafter</td><td>HR A</td></tr>
    <tr><td>KG</td><td>mind. 1 Komplementär + 1 Kommanditist</td><td>Komplementär unbeschränkt; Kommanditist nur bis zur Einlage</td><td>Komplementär; Kommanditist nur Kontroll- und Widerspruchsrecht</td><td>HR A</td></tr>
    <tr><td>GmbH &amp; Co. KG</td><td>GmbH ist Komplementärin</td><td>im Ergebnis beschränkt</td><td>Geschäftsführer der GmbH</td><td>HR A</td></tr>
    <tr><td>GmbH</td><td>Stammkapital 25.000 € (mind. 12.500 € eingezahlt)</td><td>nur Gesellschaftsvermögen</td><td>Geschäftsführer, Gesellschafterversammlung</td><td>HR B</td></tr>
    <tr><td>UG (haftungsbeschränkt)</td><td>ab 1 €; 25 % des Jahresüberschusses in Rücklage</td><td>nur Gesellschaftsvermögen</td><td>wie GmbH</td><td>HR B</td></tr>
    <tr><td>AG</td><td>Grundkapital 50.000 € in Aktien</td><td>nur Gesellschaftsvermögen; Aktionär riskiert seine Einlage</td><td>Vorstand leitet, Aufsichtsrat kontrolliert, Hauptversammlung beschließt</td><td>HR B</td></tr>
    </tbody></table>
    <h5>Gewinnverteilung</h5>
    <ul>
    <li><strong>OHG und KG seit 2024:</strong> zuerst nach den vereinbarten Beteiligungsverhältnissen, sonst nach dem Verhältnis der vereinbarten Einlagen, sonst nach Köpfen. Die frühere 4-%-Regel gilt nicht mehr; meist regelt der Gesellschaftsvertrag alles. Kommanditisten tragen Verluste nur bis zur Höhe ihrer Einlage.</li>
    <li><strong>GmbH:</strong> nach dem Verhältnis der Geschäftsanteile, wenn der Vertrag nichts anderes bestimmt.</li>
    <li><strong>AG:</strong> Dividende je Aktie; die Hauptversammlung beschließt die Gewinnverwendung.</li>
    </ul>
    <div class="callout beispiel"><strong>Beispiel:</strong> Bei der Westküsten Systemhaus OHG in Husum hat A 120.000 € und B 80.000 € eingelegt; der Vertrag nennt nur die Einlagen. Gewinn 90.000 €. Verhältnis 120.000 : 80.000 = 3 : 2 → A: 90.000 × 3/5 = <strong>54.000 €</strong>, B: <strong>36.000 €</strong>. Gäbe es keine Vereinbarung über die Einlagen: nach Köpfen je 45.000 €.<br>Bei einer GmbH mit Geschäftsanteilen von 60 % und 40 % wird eine Ausschüttung von 50.000 € auf 30.000 € und 20.000 € verteilt.</div>
    <h5>Handelsregister</h5>
    <p>Öffentliches, online einsehbares Verzeichnis beim Amtsgericht. <strong>Abteilung A (HRA):</strong> Einzelkaufleute und Personenhandelsgesellschaften (e. K., OHG, KG). <strong>Abteilung B (HRB):</strong> Kapitalgesellschaften (GmbH, UG, AG). Bei Kapitalgesellschaften wirkt die Eintragung <strong>konstitutiv</strong> – die GmbH entsteht erst mit der Eintragung. Beim Istkaufmann wirkt sie nur <strong>deklaratorisch</strong>. Eingetragen werden z. B. Firma, Sitz, Inhaber bzw. Geschäftsführer, Kapital und Prokura.</p>
    <h5>Die Firma</h5>
    <p>Die <strong>Firma</strong> ist der Name, unter dem ein Kaufmann seine Geschäfte betreibt und unterschreibt (§ 17 HGB). Sie muss unterscheidungskräftig sein und immer einen <strong>Rechtsformzusatz</strong> tragen (e. K., OHG, KG, GmbH, UG (haftungsbeschränkt), AG). Nach dem Inhalt unterscheidet man die <strong>Personenfirma</strong> (Nachname, z. B. „Jensen IT e. K.“), die <strong>Sachfirma</strong> (Tätigkeit, z. B. „Netzwerktechnik Heide GmbH“), die <strong>Fantasiefirma</strong> („Nordlicht IT GmbH“) und die <strong>gemischte Firma</strong>.</p>
    <h5>Weitere Rechtsformen</h5>
    <table><thead><tr><th>Rechtsform</th><th>Zweck / Merkmale</th><th>Register</th></tr></thead><tbody>
    <tr><td>eingetragene Genossenschaft (eG)</td><td>Förderung der Mitglieder (z. B. Volksbank, Wohnungsgenossenschaft, Einkaufsgenossenschaft von Computerhändlern); mind. 3 Mitglieder, jedes Mitglied hat grundsätzlich eine Stimme; Organe: Vorstand, Aufsichtsrat, Generalversammlung</td><td>Genossenschaftsregister</td></tr>
    <tr><td>eingetragener Verein (e. V.)</td><td>meist ideeller, oft gemeinnütziger Zweck (Sportverein, Förderverein); mind. 7 Gründungsmitglieder; Organe: Vorstand, Mitgliederversammlung</td><td>Vereinsregister</td></tr>
    <tr><td>gemeinnützige GmbH (gGmbH)</td><td>GmbH mit steuerbegünstigtem Zweck, z. B. Bildungsträger oder soziale Einrichtung; Gewinne bleiben im Zweck gebunden</td><td>HR B</td></tr>
    <tr><td>Stiftung</td><td>verselbstständigtes Vermögen für einen dauerhaften Zweck, keine Mitglieder oder Gesellschafter</td><td>kein HR; Anerkennung durch die Stiftungsbehörde des Landes (ein bundesweites Stiftungsregister ist beschlossen, aber noch im Aufbau)</td></tr>
    </tbody></table>
    <h5>Vollmachten</h5>
    <table><thead><tr><th></th><th>Prokura (§§ 48 ff. HGB)</th><th>Handlungsvollmacht (§ 54 HGB)</th></tr></thead><tbody>
    <tr><td>Erteilung</td><td>nur vom Kaufmann, ausdrücklich, Eintragung ins HR</td><td>formlos, keine Eintragung</td></tr>
    <tr><td>Umfang</td><td>fast alle Geschäfte, die irgendein Handelsgewerbe mit sich bringt</td><td>allgemeine Vollmacht, Artvollmacht (z. B. Einkauf) oder Einzelvollmacht</td></tr>
    <tr><td>verboten ohne Sonderbefugnis</td><td>Grundstücke verkaufen/belasten; nie: Bilanz und Steuererklärung unterschreiben, Prokura erteilen, Insolvenz anmelden</td><td>zusätzlich Kredite aufnehmen und Prozesse führen</td></tr>
    <tr><td>Zeichnung</td><td>ppa.</td><td>i. V. bzw. i. A. (Einzelvollmacht)</td></tr>
    </tbody></table>
    <div class="callout achtung"><strong>Prüfungsfallen:</strong> „Beschränkte Haftung“ bei der GmbH meint die Gesellschafter – die GmbH selbst haftet mit ihrem ganzen Vermögen. Der Kommanditist darf die KG nicht leiten. Die <strong>Firma</strong> ist der Name des Kaufmanns, nicht das Gebäude oder der Betrieb.</div>
    <div class="callout pruefung"><strong>So kommt es dran:</strong> Merkmale einer Rechtsform zuordnen, HR-Abteilung bestimmen, Gewinn verteilen, prüfen, ob ein Prokurist oder Handlungsbevollmächtigter ein Geschäft abschließen darf.</div>
      `
    },
    {
      id: "betrieb-ziele",
      title: "Betrieb in der Gesamtwirtschaft: Sektoren, Betriebsarten, Ziele & Organisation",
      exam: ["AP1", "AP2"],
      summary: "Wirtschaftssektoren, Betrieb, Unternehmen und Konzern, Arten von Betrieben und ihre Zielsetzungen, ökonomische, ökologische und soziale Ziele mit Zielbeziehungen sowie Formen der Aufbauorganisation.",
      html: `
    <p>Jeder Betrieb ist Teil der Gesamtwirtschaft. Du musst ihn einordnen können: in welchen <strong>Sektor</strong>, welche <strong>Art</strong> von Betrieb, welche <strong>Ziele</strong> er verfolgt und wie er <strong>organisiert</strong> ist.</p>
    <h5>Wirtschaftssektoren</h5>
    <table><thead><tr><th>Sektor</th><th>Tätigkeit</th><th>Beispiele</th></tr></thead><tbody>
    <tr><td>primär</td><td>Urproduktion, Gewinnung von Naturgütern</td><td>Landwirtschaft, Fischerei (Krabbenkutter in Büsum), Forst, Bergbau</td></tr>
    <tr><td>sekundär</td><td>Be- und Verarbeitung</td><td>Industrie, Handwerk, Energie, Bau – z. B. Chip- oder Serverhersteller</td></tr>
    <tr><td>tertiär</td><td>Dienstleistungen</td><td>Handel, Banken, Versicherungen, Verkehr, Tourismus, IT-Systemhaus</td></tr>
    <tr><td>quartär (teils ausgegliedert)</td><td>Information und Wissen</td><td>Softwareentwicklung, Beratung, Forschung, Cloud-Dienste</td></tr>
    </tbody></table>
    <p><strong>Strukturwandel:</strong> Heute arbeiten in Deutschland rund drei Viertel der Erwerbstätigen im tertiären Sektor, im primären nur noch wenige Prozent.</p>
    <p><strong>Betrieb</strong> = örtliche, technische Einheit, in der Leistungen erstellt werden (Werk, Filiale). <strong>Unternehmen</strong> = rechtlich-wirtschaftliche Einheit mit Rechtsform, die einen oder mehrere Betriebe umfasst. <strong>Konzern</strong> = mehrere rechtlich selbstständige Unternehmen unter einheitlicher Leitung.</p>
    <h5>Arten von Betrieben</h5>
    <ul>
    <li>nach der Leistung: <strong>Sachleistungsbetriebe</strong> (Gewinnung, Verarbeitung) und <strong>Dienstleistungsbetriebe</strong> (Handel, Banken, Versicherungen, Verkehr, IT-Services)</li>
    <li>nach dem vorherrschenden Produktionsfaktor: arbeitsintensiv (IT-Support), anlagenintensiv (Rechenzentrum), materialintensiv (Hardware-Montage)</li>
    <li>nach der Größe: Klein-, Mittel- und Großbetriebe (KMU: unter 250 Beschäftigte); nach dem Träger: privat oder öffentlich</li>
    </ul>
    <table><thead><tr><th>Zielsetzung</th><th>Ziel</th><th>Beispiel</th></tr></thead><tbody>
    <tr><td>erwerbswirtschaftlich</td><td>möglichst hoher Gewinn</td><td>IT-Systemhaus GmbH, AG</td></tr>
    <tr><td>gemeinwirtschaftlich: Kostendeckung</td><td>Versorgung, Kosten decken</td><td>Stadtwerke, Abfallentsorgung</td></tr>
    <tr><td>gemeinwirtschaftlich: Zuschussprinzip</td><td>Leistung trotz Verlust, Staat gleicht aus</td><td>Theater, Schwimmbad, Bücherei</td></tr>
    <tr><td>genossenschaftlich / gemeinnützig</td><td>Förderung der Mitglieder bzw. der Allgemeinheit</td><td>Volksbank, Wohnungsgenossenschaft, Verein</td></tr>
    </tbody></table>
    <h5>Unternehmensziele und Zielbeziehungen</h5>
    <p>Ziele lassen sich in <strong>ökonomische</strong> (Umsatz, Gewinn, Marktanteil, Liquidität), <strong>ökologische</strong> (Energie und Ressourcen sparen, Emissionen senken) und <strong>soziale</strong> Ziele (sichere Arbeitsplätze, faire Bezahlung, Weiterbildung) einteilen – die drei Säulen der Nachhaltigkeit. <strong>Sachziele</strong> beschreiben das Leistungsangebot (z. B. Managed Services), <strong>Formalziele</strong> den messbaren Erfolg (Gewinn, Rentabilität, Produktivität).</p>
    <ul>
    <li><strong>Zielharmonie:</strong> Ein Ziel fördert das andere – sparsame Server senken Stromkosten und CO₂.</li>
    <li><strong>Zielkonflikt:</strong> Ein Ziel behindert das andere – billigste Hardware gegen faire Lieferkette.</li>
    <li><strong>Zielneutralität:</strong> Die Ziele beeinflussen sich nicht.</li>
    </ul>
    <p>Wer Nachhaltigkeit nur behauptet, ohne echte Maßnahmen, betreibt <strong>Greenwashing</strong>.</p>
    <h5>Aufbauorganisation</h5>
    <table><thead><tr><th>Form</th><th>Merkmal</th><th>Vorteil</th><th>Nachteil</th></tr></thead><tbody>
    <tr><td>Einlinien</td><td>genau ein Vorgesetzter je Stelle</td><td>klare Zuständigkeit</td><td>lange Dienstwege</td></tr>
    <tr><td>Mehrlinien</td><td>mehrere fachliche Vorgesetzte</td><td>kurze Wege, Spezialwissen</td><td>Kompetenzkonflikte</td></tr>
    <tr><td>Stablinien</td><td>Einlinie + beratende Stabsstellen ohne Weisungsrecht (z. B. Datenschutz)</td><td>Leitung wird entlastet</td><td>Konflikte zwischen Stab und Linie</td></tr>
    <tr><td>Sparten</td><td>Bereiche nach Produkten oder Regionen</td><td>Marktnähe</td><td>doppelte Funktionen, Kosten</td></tr>
    <tr><td>Matrix</td><td>zwei Dimensionen: Funktion × Produkt/Projekt</td><td>Teamarbeit, schnelle Abstimmung</td><td>zwei Vorgesetzte, Machtkämpfe</td></tr>
    </tbody></table>
    <p><strong>Stelle</strong> = kleinste organisatorische Einheit, <strong>Instanz</strong> = Stelle mit Weisungsbefugnis, <strong>Leitungsspanne</strong> = Zahl der direkt unterstellten Mitarbeiter. Die <strong>Ablauforganisation</strong> regelt Prozesse, z. B. als EPK.</p>
    <div class="callout pruefung"><strong>So kommt es dran:</strong> Unternehmen einem Sektor zuordnen, Zielbeziehungen erkennen, ein Organigramm der richtigen Organisationsform zuordnen, Vor- und Nachteile nennen.</div>
      `
    },
    {
      id: "wirtschaften-grundlagen",
      title: "Ökonomisches Prinzip, Produktionsfaktoren & Wirtschaftskreislauf",
      exam: ["AP2"],
      summary: "Bedürfnis, Bedarf und Nachfrage, Maximal-, Minimal- und Optimumprinzip, volks- und betriebswirtschaftliche Produktionsfaktoren sowie der einfache und erweiterte Wirtschaftskreislauf mit Rechenbeispiel.",
      html: `
    <p>Wirtschaften heißt, mit knappen Mitteln möglichst viele Bedürfnisse zu befriedigen. Aus einem <strong>Bedürfnis</strong> (Gefühl eines Mangels) wird <strong>Bedarf</strong>, wenn Kaufkraft vorhanden ist, und <strong>Nachfrage</strong>, wenn dieser Bedarf am Markt wirksam wird. Freie Güter wie Luft sind unbegrenzt, wirtschaftliche Güter sind knapp und haben einen Preis.</p>
    <h5>Ökonomisches Prinzip</h5>
    <table><thead><tr><th>Prinzip</th><th>fest vorgegeben</th><th>angestrebt</th><th>Beispiel</th></tr></thead><tbody>
    <tr><td>Maximalprinzip</td><td>Mitteleinsatz (Input)</td><td>größtmöglicher Erfolg</td><td>Mit 20.000 € Budget möglichst viele Arbeitsplätze ausstatten</td></tr>
    <tr><td>Minimalprinzip</td><td>Ziel (Output)</td><td>geringstmöglicher Mitteleinsatz</td><td>Genau 20 Arbeitsplätze so günstig wie möglich ausstatten</td></tr>
    <tr><td>Optimumprinzip</td><td>nichts</td><td>bestes Verhältnis von Input und Output</td><td>Anzahl und Ausstattung so wählen, dass das Preis-Leistungs-Verhältnis am besten ist</td></tr>
    </tbody></table>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> „Mit möglichst geringem Einsatz möglichst viel erreichen“ ist kein ökonomisches Prinzip, sondern unlogisch – beim Maximal- und Minimalprinzip liegt immer eine Größe fest.</div>
    <h5>Produktionsfaktoren</h5>
    <div class="grid-2">
    <div><strong>Volkswirtschaftlich</strong><ul><li><strong>Arbeit</strong>: körperliche und geistige Tätigkeit</li><li><strong>Boden/Natur</strong>: Anbau-, Abbau- und Standortboden</li><li><strong>Kapital</strong>: Realkapital wie Maschinen, Gebäude, Server – entsteht durch Sparen und Investieren (abgeleiteter Faktor)</li><li>oft ergänzt: <strong>Wissen/Bildung</strong></li></ul>Arbeit und Boden sind originäre (ursprüngliche) Faktoren.</div>
    <div><strong>Betriebswirtschaftlich</strong><ul><li>Elementarfaktoren: <strong>ausführende Arbeit</strong>, <strong>Betriebsmittel</strong> (Gebäude, Maschinen, Werkzeuge, IT), <strong>Werkstoffe</strong></li><li>Werkstoffe: Rohstoffe (Hauptbestandteil), Hilfsstoffe (Nebenbestandteil), Betriebsstoffe (werden verbraucht, gehen nicht ins Produkt), Fertigteile (fremd bezogen, eingebaut)</li><li><strong>dispositiver Faktor</strong>: leitende Arbeit – plant, organisiert, leitet, kontrolliert und kombiniert die Elementarfaktoren</li></ul></div>
    </div>
    <div class="callout beispiel"><strong>Beispiel:</strong> PC-Montage bei der Marschland Computer e. K. in Brunsbüttel: Mainboard, CPU und SSD sind Fertigteile, Schrauben und Wärmeleitpaste Hilfsstoffe, Strom für die Testplätze ist Betriebsstoff, Montagetisch und Messgeräte sind Betriebsmittel, der Techniker leistet ausführende, die Inhaberin dispositive Arbeit. Ersetzt ein Chatbot einen Teil der Hotline, wird Arbeit durch Kapital <strong>substituiert</strong>.</div>
    <h5>Wirtschaftskreislauf</h5>
    <p>Der <strong>einfache Kreislauf</strong> kennt nur Haushalte und Unternehmen; alle Einkommen werden konsumiert. Güter- und Geldstrom fließen entgegengesetzt:</p>
    <pre class="ascii">Haushalte ── Faktorleistungen (Arbeit, Boden, Kapital) ──▶ Unternehmen
Haushalte ◀── Einkommen (Lohn, Miete, Zinsen) ─────────── Unternehmen
Haushalte ◀── Konsumgüter ─────────────────────────────── Unternehmen
Haushalte ── Konsumausgaben ─────────────────────────────▶ Unternehmen</pre>
    <p>Der <strong>erweiterte Kreislauf</strong> ergänzt Staat, Banken (Vermögensänderung) und Ausland:</p>
    <table><thead><tr><th>Von → an</th><th>Geldstrom</th></tr></thead><tbody>
    <tr><td>Haushalte → Staat</td><td>Lohn- und Einkommensteuer, Sozialbeiträge</td></tr>
    <tr><td>Staat → Haushalte</td><td>Transfers (Rente, Kindergeld, Grundsicherungsgeld), Gehälter im öffentlichen Dienst</td></tr>
    <tr><td>Unternehmen → Staat</td><td>Gewerbe- und Körperschaftsteuer</td></tr>
    <tr><td>Staat → Unternehmen</td><td>Subventionen, Zahlungen für Staatsaufträge</td></tr>
    <tr><td>Haushalte ↔ Banken</td><td>Ersparnisse, Konsumkredite und Zinsen</td></tr>
    <tr><td>Banken ↔ Unternehmen</td><td>Investitionskredite, Zinsen und Tilgung</td></tr>
    <tr><td>Ausland ↔ Unternehmen</td><td>Zahlungen für Exporte (herein) und Importe (hinaus)</td></tr>
    </tbody></table>
    <div class="callout formel"><strong>Grundregel:</strong> Für jeden Sektor gilt Zuflüsse = Abflüsse.<br>Haushalte: Einkommen + Transfers = Konsum + Steuern/Abgaben + Ersparnis<br>Staat mit ausgeglichenem Haushalt: Einnahmen = Ausgaben</div>
    <div class="callout beispiel"><strong>Beispiel:</strong> Haushalte erhalten 900 GE von Unternehmen sowie 200 GE Transfers und 100 GE Gehälter vom Staat, zusammen 1.200 GE. Sie zahlen 300 GE Steuern/Abgaben und sparen 150 GE → Konsum = 1.200 − 300 − 150 = <strong>750 GE</strong>. Unternehmen zahlen 150 GE Steuern → Staatseinnahmen 450 GE. Bisherige Staatsausgaben 200 + 100 = 300 GE → Subventionen bei ausgeglichenem Haushalt = <strong>150 GE</strong>.</div>
    <div class="callout pruefung"><strong>So kommt es dran:</strong> Maximal- oder Minimalprinzip erkennen, Produktionsfaktoren zuordnen, Ströme im Kreislauf benennen und fehlende Beträge berechnen.</div>
      `
    },
    {
      id: "markt-preisbildung",
      title: "Markt, Preisbildung & Marktformen",
      exam: ["AP1", "AP2"],
      summary: "Angebot und Nachfrage, Gleichgewichtspreis mit Rechenbeispiel, Angebots- und Nachfrageüberhang, Käufer- und Verkäufermarkt, Funktionen des Preises, vollkommener Markt und Marktformen.",
      html: `
    <p>Auf dem <strong>Markt</strong> treffen Angebot und Nachfrage zusammen. Je höher der Preis, desto mehr wollen die Anbieter verkaufen (die Angebotskurve steigt) und desto weniger wollen die Nachfrager kaufen (die Nachfragekurve fällt). Wo beide Kurven sich schneiden, liegt der <strong>Gleichgewichtspreis</strong>.</p>
    <h5>Preisbildung am Beispiel</h5>
    <p>Markt für USB-C-Dockingstationen in einer Region (Mengen je Monat):</p>
    <table><thead><tr><th>Preis</th><th>Nachfrage</th><th>Angebot</th><th>Situation</th><th>Absatz</th><th>Umsatz</th></tr></thead><tbody>
    <tr><td>40 €</td><td>1.000</td><td>200</td><td>Nachfrageüberhang 800</td><td>200</td><td>8.000 €</td></tr>
    <tr><td>50 €</td><td>800</td><td>400</td><td>Nachfrageüberhang 400</td><td>400</td><td>20.000 €</td></tr>
    <tr><td>60 €</td><td>600</td><td>600</td><td><strong>Gleichgewicht</strong></td><td>600</td><td><strong>36.000 €</strong></td></tr>
    <tr><td>70 €</td><td>400</td><td>800</td><td>Angebotsüberhang 400</td><td>400</td><td>28.000 €</td></tr>
    <tr><td>80 €</td><td>200</td><td>1.000</td><td>Angebotsüberhang 800</td><td>200</td><td>16.000 €</td></tr>
    </tbody></table>
    <div class="callout merke"><strong>Merke:</strong> Abgesetzt wird immer nur die <strong>kleinere</strong> der beiden Mengen. Beim Gleichgewichtspreis wird der Markt geräumt, und es wird die größte Menge umgesetzt. Liegt der Preis darüber, entsteht ein <strong>Angebotsüberhang</strong> → Preise sinken (<strong>Käufermarkt</strong>). Liegt er darunter, entsteht ein <strong>Nachfrageüberhang</strong> → Preise steigen (<strong>Verkäufermarkt</strong>, z. B. bei Chipknappheit).</div>
    <h5>Verschiebungen</h5>
    <ul>
    <li>Nachfrage steigt (höhere Einkommen, Trend, Förderprogramm) → Preis und Menge steigen.</li>
    <li>Nachfrage sinkt → Preis und Menge sinken.</li>
    <li>Angebot steigt (neue Anbieter, günstigere Produktion) → Preis sinkt, Menge steigt.</li>
    <li>Angebot sinkt (Lieferengpass, Rohstoffmangel) → Preis steigt, Menge sinkt.</li>
    </ul>
    <h5>Funktionen des Preises</h5>
    <ul>
    <li><strong>Ausgleichsfunktion:</strong> Der Preis bringt Angebot und Nachfrage zum Ausgleich.</li>
    <li><strong>Signalfunktion:</strong> Er zeigt Knappheit an.</li>
    <li><strong>Lenkungsfunktion:</strong> Er lenkt Produktionsfaktoren dorthin, wo sie am meisten einbringen.</li>
    <li><strong>Auslesefunktion:</strong> Unwirtschaftliche Anbieter und zahlungsschwache Nachfrager scheiden aus.</li>
    </ul>
    <h5>Vollkommener und unvollkommener Markt</h5>
    <p>Ein <strong>vollkommener Markt</strong> setzt voraus: gleichartige (homogene) Güter, vollständige Markttransparenz, keine Vorlieben (sachlich, persönlich, räumlich, zeitlich) und sofortige Reaktion aller Beteiligten. Annähernd erfüllt ist das an der Börse. Die meisten realen Märkte sind <strong>unvollkommen</strong> – deshalb gibt es für das gleiche Produkt verschiedene Preise.</p>
    <h5>Marktformen</h5>
    <table><thead><tr><th>Anbieter</th><th>viele Nachfrager</th><th>Beispiel</th></tr></thead><tbody>
    <tr><td>einer</td><td>Angebotsmonopol</td><td>Betreiber eines Schienennetzes, Wasserversorger vor Ort</td></tr>
    <tr><td>wenige</td><td>Angebotsoligopol</td><td>Desktop-Betriebssysteme, große Cloud-Anbieter, Mobilfunknetze</td></tr>
    <tr><td>viele</td><td>Polypol (vollständige Konkurrenz)</td><td>IT-Dienstleister und Computerläden in einer Region</td></tr>
    </tbody></table>
    <p>Entsprechend gibt es auf der Nachfrageseite das Nachfragemonopol (z. B. der Staat als einziger Käufer bestimmter Technik) und das Nachfrageoligopol. Je weniger Anbieter, desto größer ihre Macht über den Preis; im Polypol muss jeder Anbieter den Marktpreis weitgehend hinnehmen.</p>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> Beim Käufermarkt ist das <strong>Angebot</strong> größer als die Nachfrage – die Käufer haben die Macht. Beim Verkäufermarkt ist es umgekehrt.</div>
    <div class="callout pruefung"><strong>So kommt es dran:</strong> Gleichgewichtspreis und Umsatz aus einer Tabelle bestimmen, Überhänge berechnen, Folgen einer Kurvenverschiebung beschreiben, Marktformen zuordnen.</div>
      `
    },
    {
      id: "wirtschaftsordnung",
      title: "Soziale Marktwirtschaft, Globalisierung & Unternehmenszusammenschlüsse",
      exam: ["AP2"],
      summary: "Merkmale, Möglichkeiten und Grenzen der sozialen Marktwirtschaft, magisches Viereck, Arbeitsteilung und Globalisierung sowie Kartell, Konzern und Fusion mit Fusionskontrolle.",
      html: `
    <h5>Wirtschaftsordnungen</h5>
    <table><thead><tr><th>Freie Marktwirtschaft</th><th>Soziale Marktwirtschaft</th><th>Zentralverwaltungswirtschaft</th></tr></thead><tbody>
    <tr><td>Markt steuert alles, Staat schützt nur Eigentum und Sicherheit</td><td>Markt + Wettbewerb, Staat setzt Rahmen und sorgt für sozialen Ausgleich</td><td>Staat plant Produktion, Preise und Verteilung</td></tr>
    </tbody></table>
    <p>Deutschland hat die <strong>soziale Marktwirtschaft</strong> (Idee von Alfred Müller-Armack, umgesetzt von Ludwig Erhard): „So viel Markt wie möglich, so viel Staat wie nötig.“</p>
    <div class="grid-2">
    <div><strong>Marktelemente</strong><ul><li>Privateigentum an Produktionsmitteln</li><li>Vertrags-, Gewerbe- und Berufsfreiheit</li><li>freie Preisbildung und Wettbewerb</li></ul></div>
    <div><strong>Soziale Elemente / Staat</strong><ul><li>Wettbewerbsschutz (Kartellverbot, Bundeskartellamt)</li><li>Sozialversicherung, Transferleistungen, progressive Einkommensteuer</li><li>Arbeitnehmerschutz, Mindestlohn, Tarifautonomie, Mitbestimmung</li><li>Konjunktur- und Umweltpolitik</li></ul></div>
    </div>
    <p><strong>Grenzen:</strong> Finanzierbarkeit des Sozialstaats bei demografischem Wandel, Staatsverschuldung, Bürokratie, Umweltschäden als nicht bezahlte (externe) Kosten, Marktmacht großer Plattformkonzerne.</p>
    <h5>Magisches Viereck</h5>
    <p>Das Stabilitätsgesetz von 1967 nennt vier gesamtwirtschaftliche Ziele: <strong>Preisniveaustabilität</strong> (Inflation nahe 2 %), <strong>hoher Beschäftigungsstand</strong>, <strong>außenwirtschaftliches Gleichgewicht</strong> und <strong>stetiges, angemessenes Wirtschaftswachstum</strong>. „Magisch“ heißt: Alle vier gleichzeitig zu erreichen gelingt kaum, weil Zielkonflikte bestehen – z. B. Wachstum gegen Umweltschutz oder Vollbeschäftigung gegen Preisstabilität. Zum <strong>magischen Sechseck</strong> gehören zusätzlich gerechte Einkommensverteilung und Schutz der Umwelt.</p>
    <h5>Arbeitsteilung und Globalisierung</h5>
    <p>Arbeitsteilung gibt es <strong>beruflich</strong> (Spezialisierung auf Berufe), <strong>betrieblich</strong> (Abteilungen, Arbeitsschritte), <strong>volkswirtschaftlich</strong> (Branchen, Sektoren) und <strong>international</strong>. Die <strong>Globalisierung</strong> ist die weltweite Verflechtung von Märkten durch Handel, Kapital und Information.</p>
    <table><thead><tr><th>Chancen</th><th>Risiken</th></tr></thead><tbody>
    <tr><td>neue Absatzmärkte, günstige Beschaffung, Spezialisierung und Produktivität, Wissenstransfer, größere Auswahl für Verbraucher</td><td>Abhängigkeit und störanfällige Lieferketten (z. B. Halbleiter), Standortwettbewerb und Lohndruck, Verlagerung von Arbeitsplätzen, niedrigere Umwelt- und Sozialstandards</td></tr>
    </tbody></table>
    <h5>Unternehmenszusammenschlüsse</h5>
    <table><thead><tr><th>Form</th><th>rechtlich selbstständig?</th><th>wirtschaftlich selbstständig?</th><th>Beispiel</th></tr></thead><tbody>
    <tr><td>Kartell</td><td>ja</td><td>eingeschränkt (vertragliche Absprachen)</td><td>zwei Softwarehäuser sprechen Preise ab – grundsätzlich verboten (GWB), Bußgelder durch das Bundeskartellamt</td></tr>
    <tr><td>Konzern</td><td>ja</td><td>nein – einheitliche Leitung</td><td>Holding mit mehreren Tochter-GmbHs</td></tr>
    <tr><td>Fusion</td><td>nein</td><td>nein</td><td>zwei Unternehmen verschmelzen zu einem</td></tr>
    </tbody></table>
    <ul>
    <li><strong>horizontal:</strong> gleiche Wirtschaftsstufe (Systemhaus + Systemhaus)</li>
    <li><strong>vertikal:</strong> vor- oder nachgelagerte Stufe (Chiphersteller + PC-Hersteller)</li>
    <li><strong>diagonal (konglomerat):</strong> branchenfremd (Softwarehaus + Hotelkette)</li>
    </ul>
    <p>Ziele sind Marktmacht, Kostenvorteile (Synergien) und Risikostreuung; die Gefahr ist weniger Wettbewerb mit höheren Preisen. Deshalb prüft das <strong>Bundeskartellamt</strong> größere Zusammenschlüsse vorab (<strong>Fusionskontrolle</strong>), bei EU-weiter Bedeutung die EU-Kommission.</p>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> Beim Konzern bleiben die Unternehmen rechtlich selbstständig (eigene GmbH/AG), verlieren aber ihre wirtschaftliche Selbstständigkeit. Beim Kartell treffen selbstständige Unternehmen nur Absprachen – bei der Fusion bleibt ein einziges Unternehmen übrig.</div>
    <div class="callout pruefung"><strong>So kommt es dran:</strong> Merkmale einer Wirtschaftsordnung zuordnen, Ziele des magischen Vierecks nennen und Zielkonflikte zeigen, Chancen und Risiken der Globalisierung nennen, Kartell, Konzern und Fusion unterscheiden.</div>
      `
    },
    {
      id: "kennzahlen",
      title: "Kennzahlen: Produktivität, Wirtschaftlichkeit, Rentabilität & Indexzahlen",
      exam: ["AP1", "AP2"],
      summary: "Umsatz und Gewinn, Produktivität, Wirtschaftlichkeit, Eigen-, Gesamtkapital- und Umsatzrentabilität, Soll-Ist-Abweichung, Indexzahlen mit Basiswechsel sowie Inflationsrate und Reallohn berechnen und richtig deuten.",
      html: `
    <p>Ob ein Unternehmen seine Formalziele erreicht, zeigen <strong>Kennzahlen</strong>. In WiSo und AP1 musst du sie berechnen und deuten – immer mit Formel, eingesetzten Werten und Ergebnis mit Einheit.</p>
    <div class="callout formel"><strong>Formeln:</strong><br>
    Umsatz = Absatzmenge × Preis · Gewinn = Ertrag (Umsatz) − Aufwand (Kosten)<br>
    Produktivität = Ausbringungsmenge ÷ Einsatzmenge (z. B. Tickets je Stunde)<br>
    Wirtschaftlichkeit = Ertrag ÷ Aufwand<br>
    Eigenkapitalrentabilität = Gewinn × 100 ÷ Eigenkapital<br>
    Umsatzrentabilität = Gewinn × 100 ÷ Umsatz<br>
    Gesamtkapitalrentabilität = (Gewinn + Fremdkapitalzinsen) × 100 ÷ (Eigenkapital + Fremdkapital)<br>
    Indexzahl = Wert Berichtsjahr ÷ Wert Basisjahr × 100</div>
    <table><thead><tr><th>Kennzahl</th><th>misst</th><th>Einheit / Deutung</th></tr></thead><tbody>
    <tr><td>Produktivität</td><td>mengenmäßige Ergiebigkeit</td><td>Stück/h, Tickets/Mitarbeiter</td></tr>
    <tr><td>Wirtschaftlichkeit</td><td>Verhältnis der Werte Ertrag zu Aufwand</td><td>ohne Einheit: über 1 wirtschaftlich, 1 kostendeckend, unter 1 Verlust</td></tr>
    <tr><td>Rentabilität</td><td>Verzinsung des Kapitals bzw. Gewinnanteil am Umsatz</td><td>Prozent</td></tr>
    </tbody></table>
    <div class="callout beispiel"><strong>Beispiel:</strong> Die Nordlicht IT GmbH hat 2025 einen Umsatz von 2.400.000 € und Kosten von 2.160.000 €. Eigenkapital 1.200.000 €, Fremdkapital 800.000 € mit 40.000 € Zinsen. Der Servicedesk löst 4.320 Tickets in 1.440 Stunden.<br>
    Gewinn = 2.400.000 − 2.160.000 = <strong>240.000 €</strong><br>
    Wirtschaftlichkeit = 2.400.000 ÷ 2.160.000 ≈ <strong>1,11</strong><br>
    Eigenkapitalrentabilität = 240.000 × 100 ÷ 1.200.000 = <strong>20 %</strong><br>
    Umsatzrentabilität = 240.000 × 100 ÷ 2.400.000 = <strong>10 %</strong><br>
    Gesamtkapitalrentabilität = (240.000 + 40.000) × 100 ÷ 2.000.000 = <strong>14 %</strong><br>
    Produktivität = 4.320 ÷ 1.440 = <strong>3 Tickets je Stunde</strong><br>
    Deutung: Jeder Euro Aufwand bringt rund 1,11 € Ertrag; das Eigenkapital verzinst sich mit 20 %, von jedem Euro Umsatz bleiben 10 Cent Gewinn.</div>
    <h5>Zusammenhänge</h5>
    <ul>
    <li>Die Produktivität kann steigen, während die Wirtschaftlichkeit sinkt – etwa wenn mehr Tickets pro Stunde nur mit teurer Software möglich sind.</li>
    <li>Rentabilität ist das wichtigste Ziel der Kapitalgeber; ein Vergleich mit dem Zins einer sicheren Geldanlage zeigt, ob sich das Risiko lohnt.</li>
    <li>Kennzahlen stehen oft im Zielkonflikt mit sozialen und ökologischen Zielen (Personalabbau steigert kurzfristig die Rentabilität).</li>
    </ul>
    <h5>Soll-Ist-Vergleich</h5>
    <p>Abweichung absolut = Ist − Soll; Abweichung in % = (Ist − Soll) × 100 ÷ Soll. Beispiel: geplante Projektkosten 12.000 €, tatsächlich 13.500 € → +1.500 € bzw. +12,5 %.</p>
    <h5>Indexzahlen</h5>
    <p>Eine Indexreihe setzt alle Werte ins Verhältnis zu einem <strong>Basisjahr</strong> (= 100). So werden Entwicklungen sofort vergleichbar.</p>
    <table><thead><tr><th>Jahr</th><th>Umsatz</th><th>Index (2022 = 100)</th><th>Index (2024 = 100)</th></tr></thead><tbody>
    <tr><td>2022</td><td>1.800.000 €</td><td>100</td><td>83,3</td></tr>
    <tr><td>2023</td><td>1.980.000 €</td><td>110</td><td>91,7</td></tr>
    <tr><td>2024</td><td>2.160.000 €</td><td>120</td><td>100</td></tr>
    <tr><td>2025</td><td>2.400.000 €</td><td>133,3</td><td>111,1</td></tr>
    </tbody></table>
    <div class="callout achtung"><strong>Prüfungsfalle Punkte vs. Prozent:</strong> Von 2024 auf 2025 steigt der Index (Basis 2022) von 120 auf 133,3 – das sind 13,3 <strong>Indexpunkte</strong>, aber nur 11,1 % Wachstum (2.400.000 ÷ 2.160.000 − 1). Direkt als Prozent ablesen kannst du nur die Veränderung gegenüber dem Basisjahr: 2025 liegt 33,3 % über 2022.</div>
    <div class="callout formel"><strong>Basisjahr wechseln:</strong> neuer Index = alter Index ÷ alter Index des neuen Basisjahres × 100<br>Beispiel: 2023 auf Basis 2024 → 110 ÷ 120 × 100 = 91,7</div>
    <h5>Produktivität als Wertgröße</h5>
    <p>Im Unterricht und in Klassenarbeiten wird die Produktivität oft auch wertmäßig berechnet, z. B. als <strong>Umsatz je Mitarbeiter</strong> (Arbeitsproduktivität). Beispiel: 2024 erzielen 18 Beschäftigte 2.160.000 € Umsatz → 120.000 €/MA; 2025 erzielen 16 Beschäftigte 2.400.000 € → 150.000 €/MA. Produktivitätsindex (2024 = 100): 150.000 ÷ 120.000 × 100 = <strong>125</strong> – die Produktivität ist um 25 % gestiegen.</p>
    <h5>Preisindex, Inflation und Reallohn</h5>
    <p>Der <strong>Verbraucherpreisindex</strong> (VPI) des Statistischen Bundesamts misst die Preisentwicklung eines typischen Warenkorbs. Seine Veränderung zum Vorjahr in Prozent ist die <strong>Inflationsrate</strong>. Ob ein Lohnplus wirklich mehr Kaufkraft bringt, zeigt erst der <strong>Reallohn</strong>.</p>
    <div class="callout formel"><strong>Formeln:</strong><br>Inflationsrate = (VPI Berichtsjahr − VPI Vorjahr) × 100 ÷ VPI Vorjahr<br>Reallohn = Nominallohn × 100 ÷ Preisindex<br>reale Veränderung = (1 + nominale Veränderung) ÷ (1 + Inflationsrate) − 1 (Näherung: nominal − Inflation)</div>
    <div class="callout beispiel"><strong>Beispiel:</strong> Ein Administrator verdient 2024 3.000 € und 2025 3.150 € brutto (+5 %). Der VPI (2020 = 100) steigt von 120,0 auf 122,4.<br>
    Inflationsrate = (122,4 − 120,0) × 100 ÷ 120,0 = <strong>2 %</strong><br>
    Reallohn 2024 = 3.000 × 100 ÷ 120,0 = 2.500,00 € · Reallohn 2025 = 3.150 × 100 ÷ 122,4 = 2.573,53 € (jeweils in Preisen von 2020)<br>
    reale Steigerung = 2.573,53 ÷ 2.500,00 − 1 ≈ <strong>2,94 %</strong> (Näherung 5 % − 2 % = 3 %). Steigen die Preise stärker als der Lohn, sinkt der Reallohn trotz Lohnerhöhung.</div>
    <div class="callout pruefung"><strong>So kommt es dran:</strong> Aus einer Tabelle Gewinn, Wirtschaftlichkeit, Rentabilität und Produktivität berechnen (meist auf zwei Nachkommastellen), Indexreihen ergänzen oder auf ein neues Basisjahr umrechnen und das Ergebnis in einem Satz deuten.</div>
      `
    },
    {
      id: "angebotsvergleich-nwa",
      title: "Angebotsvergleich, Bezugskalkulation & Nutzwertanalyse",
      exam: ["AP1", "AP2"],
      summary: "Angebote quantitativ mit der Bezugskalkulation (Rabatt, Skonto, Bezugskosten) und qualitativ mit der Nutzwertanalyse vergleichen, den Skontovorteil einschätzen und eine Lieferantenentscheidung begründen.",
      html: `
    <p>Vor dem Einkauf werden Angebote <strong>quantitativ</strong> (Preis) und <strong>qualitativ</strong> (Lieferzeit, Service, Qualität, Zuverlässigkeit, Nachhaltigkeit) verglichen. Unternehmen vergleichen <strong>netto</strong>, weil sie die Umsatzsteuer als Vorsteuer zurückbekommen.</p>
    <h5>Bezugskalkulation</h5>
    <pre class="ascii">  Listeneinkaufspreis
− Liefererrabatt   (% vom Listeneinkaufspreis)
= Zieleinkaufspreis
− Liefererskonto   (% vom Zieleinkaufspreis)
= Bareinkaufspreis
+ Bezugskosten     (Fracht, Verpackung, Versicherung)
= Bezugspreis (Einstandspreis)</pre>
    <p><strong>Rabatt</strong> ist ein sofortiger Preisnachlass (Menge, Treue, Wiederverkäufer), <strong>Skonto</strong> ein Nachlass für Zahlung innerhalb der Skontofrist, <strong>Bezugskosten</strong> kommen hinzu – pauschal oder je Stück.</p>
    <div class="callout beispiel"><strong>Beispiel:</strong> Die Nordlicht IT GmbH braucht 20 Notebooks.<br>
    A: 899 €/Stück, 10 % Rabatt, 2 % Skonto, Versand pauschal 60 €<br>
    B: 949 €/Stück, 15 % Rabatt, 3 % Skonto, frei Haus<br>
    C: 869 €/Stück, kein Rabatt, 2 % Skonto, Versand 4,50 €/Stück
    <table><thead><tr><th></th><th>A</th><th>B</th><th>C</th></tr></thead><tbody>
    <tr><td>Listeneinkaufspreis</td><td>17.980,00</td><td>18.980,00</td><td>17.380,00</td></tr>
    <tr><td>− Rabatt</td><td>1.798,00</td><td>2.847,00</td><td>0,00</td></tr>
    <tr><td>= Zieleinkaufspreis</td><td>16.182,00</td><td>16.133,00</td><td>17.380,00</td></tr>
    <tr><td>− Skonto</td><td>323,64</td><td>483,99</td><td>347,60</td></tr>
    <tr><td>= Bareinkaufspreis</td><td>15.858,36</td><td>15.649,01</td><td>17.032,40</td></tr>
    <tr><td>+ Bezugskosten</td><td>60,00</td><td>0,00</td><td>90,00</td></tr>
    <tr><td>= Bezugspreis gesamt</td><td>15.918,36</td><td><strong>15.649,01</strong></td><td>17.122,40</td></tr>
    <tr><td>je Notebook</td><td>795,92</td><td><strong>782,45</strong></td><td>856,12</td></tr>
    </tbody></table>
    Das Angebot mit dem höchsten Listenpreis (B) ist wegen Rabatt, Skonto und freier Lieferung am günstigsten.</div>
    <div class="callout formel"><strong>Lohnt sich Skonto?</strong> Näherung für den Jahreszins: Skontosatz × 360 ÷ (Zahlungsziel − Skontofrist).<br>2 % Skonto bei 10 Tagen, Ziel 30 Tage: 2 × 360 ÷ 20 = <strong>36 %</strong> pro Jahr – Skonto ziehen lohnt sich fast immer, notfalls sogar mit Kontokorrentkredit.</div>
    <h5>Nutzwertanalyse (NWA)</h5>
    <ol>
    <li>Kriterien festlegen, vorher K.-o.-Kriterien prüfen (z. B. Mindestgarantie)</li>
    <li>Kriterien gewichten – Summe 100 %</li>
    <li>jedes Angebot je Kriterium mit Punkten bewerten (z. B. 1–10)</li>
    <li>Teilnutzen = Gewicht × Punkte</li>
    <li>Gesamtnutzwert = Summe der Teilnutzen → Rangfolge und begründete Entscheidung</li>
    </ol>
    <table><thead><tr><th>Kriterium</th><th>Gewicht</th><th>A</th><th>B</th><th>C</th></tr></thead><tbody>
    <tr><td>Preis</td><td>40 %</td><td>7 → 2,80</td><td>9 → 3,60</td><td>3 → 1,20</td></tr>
    <tr><td>Lieferzeit</td><td>15 %</td><td>9 → 1,35</td><td>5 → 0,75</td><td>8 → 1,20</td></tr>
    <tr><td>Service/Garantie</td><td>25 %</td><td>6 → 1,50</td><td>8 → 2,00</td><td>7 → 1,75</td></tr>
    <tr><td>Nachhaltigkeit</td><td>20 %</td><td>5 → 1,00</td><td>8 → 1,60</td><td>9 → 1,80</td></tr>
    <tr><td><strong>Gesamtnutzwert</strong></td><td>100 %</td><td>6,65</td><td><strong>7,95</strong></td><td>5,95</td></tr>
    </tbody></table>
    <p>Rangfolge: B vor A vor C. <strong>Vorteile</strong> der NWA: qualitative Kriterien werden vergleichbar, die Entscheidung ist nachvollziehbar dokumentiert. <strong>Nachteile</strong>: Gewichte und Punkte sind subjektiv, die Zahlen täuschen Genauigkeit vor. Ergänzend kann man die Kosten je Nutzenpunkt berechnen.</p>
    <div class="callout achtung"><strong>Prüfungsfallen:</strong> Skonto wird vom Zieleinkaufspreis berechnet, nicht vom Listenpreis. Pauschale und stückbezogene Bezugskosten nicht verwechseln. Das billigste Angebot ist nicht automatisch das beste.</div>
    <div class="callout pruefung"><strong>So kommt es dran:</strong> Bezugspreis je Stück und gesamt berechnen, günstigstes Angebot und Ersparnis bestimmen, eine NWA-Tabelle vervollständigen und die Entscheidung in ganzen Sätzen begründen.</div>
      `
    },
    {
      id: "handelskalkulation",
      title: "Handelskalkulation vorwärts, rückwärts & Differenzkalkulation",
      exam: ["AP1"],
      summary: "Vom Listeneinkaufspreis zum Bruttoverkaufspreis und zurück: Kalkulationsschema mit Rechnen vom und im Hundert, Kalkulationszuschlag, Kalkulationsfaktor, Handelsspanne und Gewinnermittlung bei vorgegebenem Marktpreis.",
      html: `
    <p>Mit der <strong>Handelskalkulation</strong> ermittelt ein Händler – z. B. ein Systemhaus, das Hardware weiterverkauft – seinen Angebotspreis. <strong>Vorwärts</strong> geht es vom Einkaufs- zum Verkaufspreis, <strong>rückwärts</strong> vom Marktpreis zum höchstens zulässigen Einkaufspreis, die <strong>Differenzkalkulation</strong> ermittelt den Gewinn bei festen Ein- und Verkaufspreisen.</p>
    <h5>Schema mit Beispiel (vorwärts)</h5>
    <table><thead><tr><th>Schritt</th><th>Basis (= 100 %)</th><th>€</th></tr></thead><tbody>
    <tr><td>Listeneinkaufspreis</td><td></td><td>800,00</td></tr>
    <tr><td>− Liefererrabatt 12,5 %</td><td>Listeneinkaufspreis</td><td>100,00</td></tr>
    <tr><td>= Zieleinkaufspreis</td><td></td><td>700,00</td></tr>
    <tr><td>− Liefererskonto 2 %</td><td>Zieleinkaufspreis</td><td>14,00</td></tr>
    <tr><td>= Bareinkaufspreis</td><td></td><td>686,00</td></tr>
    <tr><td>+ Bezugskosten</td><td></td><td>14,00</td></tr>
    <tr><td>= Bezugspreis (Einstandspreis)</td><td></td><td>700,00</td></tr>
    <tr><td>+ Handlungskosten 20 %</td><td>Bezugspreis</td><td>140,00</td></tr>
    <tr><td>= Selbstkostenpreis</td><td></td><td>840,00</td></tr>
    <tr><td>+ Gewinnzuschlag 15 %</td><td>Selbstkostenpreis</td><td>126,00</td></tr>
    <tr><td>= Barverkaufspreis</td><td>= 93 % des Zielverkaufspreises</td><td>966,00</td></tr>
    <tr><td>+ Kundenskonto 2 %</td><td>Zielverkaufspreis (im Hundert)</td><td>20,77</td></tr>
    <tr><td>+ Vertreterprovision 5 %</td><td>Zielverkaufspreis (im Hundert)</td><td>51,94</td></tr>
    <tr><td>= Zielverkaufspreis</td><td>= 90 % des Listenverkaufspreises</td><td>1.038,71</td></tr>
    <tr><td>+ Kundenrabatt 10 %</td><td>Listenverkaufspreis (im Hundert)</td><td>115,41</td></tr>
    <tr><td>= Listenverkaufspreis netto</td><td></td><td>1.154,12</td></tr>
    <tr><td>+ Umsatzsteuer 19 %</td><td>Listenverkaufspreis netto</td><td>219,28</td></tr>
    <tr><td>= Listenverkaufspreis brutto</td><td></td><td><strong>1.373,40</strong></td></tr>
    </tbody></table>
    <div class="callout formel"><strong>Im Hundert rechnen:</strong> Der Kunde zieht Skonto und Rabatt vom späteren, höheren Preis ab.<br>Zielverkaufspreis = Barverkaufspreis × 100 ÷ (100 − Kundenskonto − Provision) = 966 × 100 ÷ 93<br>Listenverkaufspreis = Zielverkaufspreis × 100 ÷ (100 − Kundenrabatt) = 1.038,71 × 100 ÷ 90</div>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> Wer einfach 2 % auf 966 € aufschlägt, rechnet falsch – der Kunde zieht seine 2 % vom höheren Zielverkaufspreis ab, und beim Händler käme weniger als der kalkulierte Barverkaufspreis an.</div>
    <h5>Kalkulationszuschlag, Kalkulationsfaktor, Handelsspanne</h5>
    <div class="callout formel">Kalkulationszuschlag = (Listenverkaufspreis netto − Bezugspreis) × 100 ÷ Bezugspreis<br>Kalkulationsfaktor = Listenverkaufspreis netto ÷ Bezugspreis<br>Handelsspanne = (Listenverkaufspreis netto − Bezugspreis) × 100 ÷ Listenverkaufspreis netto</div>
    <div class="callout beispiel"><strong>Beispiel:</strong> (1.154,12 − 700) × 100 ÷ 700 = <strong>64,87 %</strong> Zuschlag · Faktor 1.154,12 ÷ 700 ≈ <strong>1,6487</strong> · Spanne 454,12 × 100 ÷ 1.154,12 = <strong>39,35 %</strong>.<br>Kurzweg: Artikel mit 500 € Bezugspreis → 500 × 1,6487 ≈ 824,35 € netto. Rückwärts: Verkaufspreis netto 900 € → Bezugspreis höchstens 900 × (1 − 0,3935) = 545,85 €.</div>
    <div class="callout merke"><strong>Merke:</strong> Der Zuschlag bezieht sich auf den Einkauf (Bezugspreis = 100 %), die Spanne auf den Verkauf (Listenverkaufspreis = 100 %). Deshalb ist die Handelsspanne immer kleiner als der Kalkulationszuschlag.</div>
    <h5>Rückwärts- und Differenzkalkulation</h5>
    <p>Die Konkurrenz verlangt 1.249,50 € brutto. Wie viel darf der Einkauf höchstens kosten? Rechne von unten nach oben – was vorwärts „im Hundert“ war, wird rückwärts „vom Hundert“ und umgekehrt:</p>
    <pre class="ascii">Listenverkaufspreis brutto 1.249,50 ÷ 1,19
= Listenverkaufspreis netto 1.050,00 − 10 % Rabatt 105,00
= Zielverkaufspreis          945,00 − 2 % Skonto 18,90 − 5 % Provision 47,25
= Barverkaufspreis           878,85 ÷ 1,15
= Selbstkostenpreis          764,22 ÷ 1,20
= Bezugspreis                636,85 − Bezugskosten 14,00
= Bareinkaufspreis           622,85 ÷ 0,98
= Zieleinkaufspreis          635,56 ÷ 0,875
= Listeneinkaufspreis        726,35  (Einkaufslimit)</pre>
    <p><strong>Differenzkalkulation:</strong> Bleibt der Einkauf bei 800 € (Selbstkosten 840 €) und muss der Verkaufspreis auf 1.249,50 € brutto sinken, bleibt ein Barverkaufspreis von 878,85 € → Gewinn 878,85 − 840,00 = <strong>38,85 €</strong>, Gewinnzuschlag 38,85 × 100 ÷ 840 = <strong>4,63 %</strong>.</p>
    <div class="callout pruefung"><strong>So kommt es dran:</strong> Schema vervollständigen, Verkaufspreis berechnen, Zuschlag und Spanne bestimmen, Gewinn nach einer Preissenkung ermitteln oder den nötigen Liefererrabatt berechnen.</div>
      `
    },
    {
      id: "kaufvertrag",
      title: "Kaufvertrag, Geschäftsfähigkeit & Kaufvertragsstörungen",
      exam: ["AP1", "AP2"],
      summary: "Rechts- und Geschäftsfähigkeit, Zustandekommen eines Kaufvertrags durch Antrag und Annahme, Pflichten der Vertragspartner sowie mangelhafte Lieferung, Lieferungs-, Annahme- und Zahlungsverzug mit den Rechten der Beteiligten.",
      html: `
    <p>Der Kaufvertrag (§ 433 BGB) ist das häufigste Rechtsgeschäft – beim Einkauf von Hardware ebenso wie beim Verkauf an Kunden.</p>
    <h5>Rechts- und Geschäftsfähigkeit</h5>
    <table><thead><tr><th>Stufe</th><th>Wer?</th><th>Folge</th></tr></thead><tbody>
    <tr><td>Rechtsfähigkeit</td><td>Menschen ab Geburt, juristische Personen (GmbH, AG, e. V.) ab Gründung bzw. Eintragung</td><td>Träger von Rechten und Pflichten</td></tr>
    <tr><td>geschäftsunfähig</td><td>unter 7 Jahren</td><td>Willenserklärungen sind nichtig</td></tr>
    <tr><td>beschränkt geschäftsfähig</td><td>7 bis unter 18 Jahre</td><td>Verträge schwebend unwirksam bis zur Zustimmung der Eltern; sofort wirksam: nur rechtlicher Vorteil, Kauf mit Taschengeld (§ 110), genehmigtes Arbeitsverhältnis (§ 113)</td></tr>
    <tr><td>voll geschäftsfähig</td><td>ab 18 Jahren</td><td>uneingeschränkt</td></tr>
    </tbody></table>
    <h5>Zustandekommen und Pflichten</h5>
    <p>Ein Vertrag entsteht durch <strong>zwei übereinstimmende Willenserklärungen</strong>: <strong>Antrag</strong> und <strong>Annahme</strong>. Der Antrag kann vom Verkäufer (Angebot → Bestellung) oder vom Käufer (Bestellung ohne Angebot → Lieferung oder Auftragsbestätigung) ausgehen.</p>
    <ul>
    <li>Eine <strong>Anfrage</strong> ist unverbindlich. Werbung, Katalog, Schaufenster und Onlineshop sind nur eine <strong>Aufforderung, ein Angebot abzugeben</strong>.</li>
    <li>Ein Angebot bindet: unter Anwesenden (auch am Telefon) nur sofort, unter Abwesenden so lange, wie üblicherweise mit Antwort zu rechnen ist. Klauseln wie „freibleibend“ oder „solange Vorrat reicht“ heben die Bindung auf.</li>
    <li>Eine verspätete oder abgeänderte Annahme gilt als neuer Antrag.</li>
    </ul>
    <div class="grid-2">
    <div><strong>Verkäufer</strong>: Sache mangelfrei übergeben und Eigentum verschaffen</div>
    <div><strong>Käufer</strong>: Kaufpreis zahlen und die Ware abnehmen</div>
    </div>
    <p><strong>Besitz</strong> ist die tatsächliche, <strong>Eigentum</strong> die rechtliche Herrschaft über eine Sache. Beim <strong>Eigentumsvorbehalt</strong> bleibt der Verkäufer bis zur vollständigen Zahlung Eigentümer. Verbraucher können Fernabsatzverträge (Onlinekauf) 14 Tage lang widerrufen.</p>
    <h5>Kaufvertragsstörungen</h5>
    <table><thead><tr><th>Störung</th><th>Voraussetzungen</th><th>Rechte</th></tr></thead><tbody>
    <tr><td>mangelhafte Lieferung</td><td>Sachmangel (falsche Beschaffenheit, Falschlieferung, Zuweniglieferung, fehlerhafte Montage oder Anleitung) oder Rechtsmangel; unter Kaufleuten unverzügliche Rüge (§ 377 HGB)</td><td>zuerst <strong>Nacherfüllung</strong> (Nachbesserung oder Ersatzlieferung, der Käufer wählt); danach Rücktritt (nicht bei unerheblichem Mangel), Minderung, Schadensersatz bei Verschulden</td></tr>
    <tr><td>Lieferungsverzug</td><td>Fälligkeit, Mahnung (entbehrlich bei kalendermäßig bestimmtem Termin), Verschulden für Schadensersatz</td><td>Lieferung und Verzugsschaden; nach angemessener Nachfrist Rücktritt und/oder Schadensersatz statt der Leistung</td></tr>
    <tr><td>Annahmeverzug</td><td>Käufer nimmt ordnungsgemäß angebotene Ware nicht ab</td><td>Ware auf Kosten des Käufers einlagern, auf Abnahme klagen oder Selbsthilfeverkauf; Verkäufer haftet nur noch für Vorsatz und grobe Fahrlässigkeit</td></tr>
    <tr><td>Zahlungsverzug</td><td>Fälligkeit und Mahnung – oder spätestens 30 Tage nach Rechnung (bei Verbrauchern nur mit Hinweis darauf)</td><td>Zahlung plus Verzugszinsen: 5 Prozentpunkte über dem Basiszinssatz (Verbraucher), 9 Prozentpunkte (Unternehmen) + 40 € Pauschale; gerichtliches Mahnverfahren</td></tr>
    </tbody></table>
    <p><strong>Gewährleistung</strong> ist gesetzlich: 2 Jahre ab Übergabe; beim Kauf durch Verbraucher wird im ersten Jahr vermutet, dass der Mangel schon bei Übergabe da war. Eine <strong>Garantie</strong> ist eine freiwillige Zusatzleistung von Hersteller oder Händler zu selbst festgelegten Bedingungen. Kaufpreisforderungen verjähren regelmäßig nach 3 Jahren zum Jahresende (Rechnung vom 12.05.2026 → Ablauf 31.12.2029).</p>
    <div class="callout beispiel"><strong>Beispiel:</strong> Die Kranich Systems UG in Büsum bestellt 10 Monitore „Lieferung bis spätestens 30.09.“. Am 02.10. ist nichts da → Lieferungsverzug ohne Mahnung, weil der Termin kalendermäßig bestimmt ist. Kranich setzt eine Nachfrist bis 12.10.; danach kann sie zurücktreten und bei einem anderen Lieferer kaufen. Die Mehrkosten kann sie als Schadensersatz verlangen, wenn der Lieferer den Verzug verschuldet hat.</div>
    <div class="callout achtung"><strong>Prüfungsfallen:</strong> Rücktritt und Minderung gibt es erst, wenn die Nacherfüllung gescheitert ist. Gewährleistung und Garantie sind nicht dasselbe. Ein Werbeprospekt ist kein Angebot.</div>
    <div class="callout pruefung"><strong>So kommt es dran:</strong> Einen Fall der richtigen Störung zuordnen, Rechte in der richtigen Reihenfolge nennen, prüfen, ob ein Vertrag zustande gekommen ist, Geschäftsfähigkeit anwenden.</div>
      `
    },
    {
      id: "arbeitsschutz",
      title: "Arbeitsschutz, Unfallversicherung & Brandschutz",
      exam: ["AP1", "AP2"],
      summary: "Duales Arbeitsschutzsystem mit Gesetzen, Verordnungen und DGUV-Vorschriften, Akteure im Betrieb, Gefährdungsbeurteilung und Gefährdungsarten, ergonomischer Bildschirmarbeitsplatz, Sicherheitszeichen, Arbeits- und Wegeunfall mit Unfallanzeige, Erste Hilfe und Brandschutz.",
      html: `
    <p>Der Arbeitgeber muss für sichere und gesunde Arbeitsplätze sorgen, die Beschäftigten müssen mitwirken (Weisungen befolgen, Schutzausrüstung nutzen, Mängel melden). Das <strong>duale Arbeitsschutzsystem</strong> besteht aus staatlichen Vorschriften, überwacht von der Arbeitsschutzbehörde des Landes, und den Unfallverhütungsvorschriften der Berufsgenossenschaften (DGUV-Vorschriften).</p>
    <table><thead><tr><th>Vorschrift</th><th>Inhalt</th></tr></thead><tbody>
    <tr><td>Arbeitsschutzgesetz</td><td>Gefährdungsbeurteilung (auch psychische Belastung), Unterweisung, Pflichten von Arbeitgeber und Beschäftigten</td></tr>
    <tr><td>Arbeitssicherheitsgesetz</td><td>Betriebsarzt und Fachkraft für Arbeitssicherheit</td></tr>
    <tr><td>Arbeitsstättenverordnung</td><td>Räume, Licht, Klima, Pausenräume; Anhang 6: Bildschirmarbeitsplätze</td></tr>
    <tr><td>Betriebssicherheitsverordnung</td><td>sichere Arbeitsmittel und ihre regelmäßige Prüfung</td></tr>
    <tr><td>DGUV Vorschrift 3</td><td>Prüfung elektrischer Anlagen und Betriebsmittel</td></tr>
    </tbody></table>
    <ul>
    <li><strong>Sicherheitsbeauftragte</strong> (bei mehr als 20 Beschäftigten): Kollegen, die ehrenamtlich unterstützen und auf Mängel hinweisen – ohne Weisungsbefugnis.</li>
    <li><strong>Fachkraft für Arbeitssicherheit</strong> und <strong>Betriebsarzt</strong> beraten den Arbeitgeber.</li>
    <li><strong>Ersthelfer:</strong> bei 2–20 Anwesenden mindestens 1, darüber 5 % (Verwaltung, Handel) bzw. 10 % (sonstige Betriebe).</li>
    <li><strong>Unterweisung</strong> mindestens jährlich, bei Jugendlichen halbjährlich.</li>
    </ul>
    <h5>Gefährdungsbeurteilung</h5>
    <p>Nach § 5 ArbSchG muss der Arbeitgeber für jeden Arbeitsplatz die Gefährdungen ermitteln, bewerten und Maßnahmen festlegen – und das dokumentieren. Ablauf: Arbeitsbereiche festlegen → Gefährdungen ermitteln → beurteilen → Maßnahmen festlegen → umsetzen → Wirksamkeit prüfen → fortschreiben. Bei den Maßnahmen gilt die Rangfolge <strong>STOP</strong>: Substitution (Gefahr ersetzen) vor technischen, organisatorischen und zuletzt persönlichen Maßnahmen.</p>
    <table><thead><tr><th>Gefährdungsart</th><th>Beispiel im IT-Betrieb</th></tr></thead><tbody>
    <tr><td>mechanisch</td><td>Quetschen beim Einbau schwerer Server ins Rack, Stolpern über Kabel</td></tr>
    <tr><td>elektrisch</td><td>Arbeiten am geöffneten Netzteil, defekte Mehrfachsteckdose</td></tr>
    <tr><td>thermisch / Brand</td><td>heiße Bauteile, überhitzte oder beschädigte Lithium-Akkus</td></tr>
    <tr><td>chemisch</td><td>Tonerstaub, Batteriesäure aus USV-Anlagen</td></tr>
    <tr><td>physikalisch / Lärm, Klima</td><td>Lüfterlärm und Zugluft im Serverraum</td></tr>
    <tr><td>ergonomisch</td><td>falsch eingestellter Bildschirmarbeitsplatz, Heben schwerer Geräte</td></tr>
    <tr><td>psychisch</td><td>Zeitdruck, ständige Erreichbarkeit, Rufbereitschaft, Konflikte mit Kunden</td></tr>
    </tbody></table>
    <h5>Ergonomischer Bildschirmarbeitsplatz</h5>
    <p>Bildschirm blendfrei und im rechten Winkel zum Fenster, oberste Zeile knapp unter Augenhöhe, ausreichender Sehabstand, Oberarme locker hängend und Unterarme etwa waagerecht, Füße flach auf dem Boden, Wechsel von Bildschirm- und anderen Tätigkeiten mit Pausen. Der Arbeitgeber muss eine Augenuntersuchung anbieten.</p>
    <h5>Sicherheitszeichen</h5>
    <table><thead><tr><th>Art</th><th>Farbe</th><th>Form</th><th>Beispiel</th></tr></thead><tbody>
    <tr><td>Verbot</td><td>rot (weißer Grund)</td><td>rund, durchgestrichen</td><td>Rauchen verboten</td></tr>
    <tr><td>Warnung</td><td>gelb, schwarzer Rand</td><td>Dreieck</td><td>elektrische Spannung</td></tr>
    <tr><td>Gebot</td><td>blau</td><td>rund</td><td>Gehörschutz benutzen</td></tr>
    <tr><td>Rettung</td><td>grün</td><td>rechteckig/quadratisch</td><td>Notausgang, Erste Hilfe</td></tr>
    <tr><td>Brandschutz</td><td>rot</td><td>rechteckig/quadratisch</td><td>Feuerlöscher</td></tr>
    </tbody></table>
    <h5>Elektrische Sicherheit und Prüfzeichen</h5>
    <ul>
    <li><strong>Schutzklassen:</strong> I = Schutzleiter (PC, Server), II = doppelte bzw. verstärkte Isolierung (viele Notebook-Netzteile), III = Schutzkleinspannung (höchstens 50 V Wechsel- bzw. 120 V Gleichspannung).</li>
    <li><strong>IP-Code:</strong> erste Ziffer = Schutz gegen Fremdkörper und Berührung, zweite Ziffer = Schutz gegen Wasser; IP54 = staubgeschützt und spritzwassergeschützt.</li>
    <li><strong>Prüfzeichen:</strong> CE = Erklärung des Herstellers, dass EU-Vorschriften eingehalten sind (kein Prüfsiegel); GS = „geprüfte Sicherheit“ durch eine unabhängige Stelle; VDE-Zeichen = Prüfung nach VDE-Normen.</li>
    </ul>
    <h5>Arbeitsunfall und Unfallversicherung</h5>
    <p>Die gesetzliche Unfallversicherung (Berufsgenossenschaft, Beitrag nur vom Arbeitgeber) zahlt bei <strong>Arbeitsunfällen</strong>, <strong>Wegeunfällen</strong> (direkter Weg zur Arbeit oder Berufsschule, auch Umwege für Fahrgemeinschaft oder Kinderbetreuung) und <strong>Berufskrankheiten</strong>. Führt ein Unfall zu <strong>mehr als 3 Kalendertagen</strong> Arbeitsunfähigkeit, muss der Arbeitgeber binnen <strong>3 Tagen</strong> eine Unfallanzeige an die Berufsgenossenschaft schicken. Behandlung beim Durchgangsarzt; jede Erste-Hilfe-Leistung wird im Verbandbuch dokumentiert.</p>
    <p><strong>Rettungskette:</strong> Unfallstelle absichern → Notruf 112 (Wo? Was? Wie viele Verletzte? Welche Verletzungen? Warten auf Rückfragen) → Erste Hilfe → Rettungsdienst.</p>
    <h5>Brandschutz</h5>
    <table><thead><tr><th>Brandklasse</th><th>brennender Stoff</th><th>geeignetes Löschmittel</th></tr></thead><tbody>
    <tr><td>A</td><td>feste, glutbildende Stoffe (Papier, Holz)</td><td>Wasser, Schaum, Pulver</td></tr>
    <tr><td>B</td><td>Flüssigkeiten (Benzin, Lack)</td><td>Schaum, Pulver, CO₂</td></tr>
    <tr><td>C</td><td>Gase</td><td>Pulver</td></tr>
    <tr><td>D</td><td>Metalle</td><td>Metallbrandpulver</td></tr>
    <tr><td>F</td><td>Speiseöle und -fette</td><td>Fettbrandlöscher</td></tr>
    </tbody></table>
    <p>Für Server und Elektronik eignet sich der <strong>CO₂-Löscher</strong> (hinterlässt keine Rückstände, leitet keinen Strom). Verhalten im Brandfall: Ruhe bewahren, Brand melden, Menschen warnen und in Sicherheit bringen, Löschversuch nur ohne Eigengefährdung, keinen Aufzug benutzen, Türen schließen, zum Sammelplatz gehen.</p>
    <p><strong>Typische Brandursachen im Büro:</strong> überlastete oder hintereinandergesteckte Mehrfachsteckdosen, defekte Kabel, Wasserkocher und Kaffeemaschinen, beschädigte Akkus, Wärmestau an verdeckten Lüftungsschlitzen. <strong>Richtig löschen:</strong> mit dem Wind im Rücken, Flächenbrände von vorn nach hinten, Tropf- und Fließbrände von oben nach unten, lieber mehrere Löscher gleichzeitig als nacheinander; benutzte Feuerlöscher nicht zurückhängen, sondern prüfen und neu füllen lassen. Fluchtwege und Notausgänge sind immer freizuhalten.</p>
    <div class="callout pruefung"><strong>So kommt es dran:</strong> Sicherheitszeichen nach Farbe und Form zuordnen, Löschmittel für einen Serverraum wählen, Voraussetzungen der Unfallanzeige nennen, Wegeunfall erkennen, Aufgaben von Sicherheitsbeauftragten und Fachkraft unterscheiden.</div>
      `
    },
    {
      id: "umwelt-nachhaltigkeit",
      title: "Umweltschutz, Nachhaltigkeit & Compliance",
      exam: ["AP1", "AP2"],
      summary: "Drei Säulen der Nachhaltigkeit, Abfallhierarchie des Kreislaufwirtschaftsgesetzes, Entsorgung von Elektroaltgeräten, Batterien, Datenträgern und Verpackungen, Green IT sowie Ethik- und Compliance-Regeln im Betrieb.",
      html: `
    <p>Auch IT belastet die Umwelt: Rechenzentren verbrauchen viel Strom, Geräte enthalten seltene Rohstoffe und Schadstoffe, der Elektroschrott wächst. Umweltschutz im Betrieb heißt: vermeiden, sparsam nutzen, richtig entsorgen und die Gesetze einhalten.</p>
    <h5>Nachhaltigkeit</h5>
    <p>Nachhaltig handelt, wer heute so wirtschaftet, dass auch künftige Generationen gut leben können. Die drei Säulen sind gleichberechtigt: <strong>ökologisch</strong> (Umwelt und Ressourcen schonen), <strong>ökonomisch</strong> (dauerhaft wirtschaftlich erfolgreich sein) und <strong>sozial</strong> (faire Arbeitsbedingungen, auch in der Lieferkette).</p>
    <h5>Abfallhierarchie (Kreislaufwirtschaftsgesetz)</h5>
    <ol>
    <li><strong>Vermeidung</strong> – z. B. Geräte länger nutzen, reparieren, weniger drucken</li>
    <li><strong>Vorbereitung zur Wiederverwendung</strong> – z. B. Notebooks nach sicherer Datenlöschung aufbereiten oder spenden</li>
    <li><strong>Recycling</strong> – stoffliche Verwertung von Metallen und Kunststoffen</li>
    <li><strong>sonstige Verwertung</strong> – z. B. energetisch durch Verbrennung</li>
    <li><strong>Beseitigung</strong> – Deponie als letzter Weg</li>
    </ol>
    <table><thead><tr><th>Abfall</th><th>richtige Entsorgung</th></tr></thead><tbody>
    <tr><td>Elektroaltgeräte</td><td>ElektroG: nicht in den Restmüll (Symbol durchgestrichene Mülltonne); Rückgabe an Wertstoffhof, Hersteller oder rücknahmepflichtigen Handel – vorher Daten löschen</td></tr>
    <tr><td>Batterien, Akkus, USV-Batterien</td><td>getrennt über Rücknahmesysteme oder Handel (EU-Batterieverordnung, in Deutschland seit 2025 umgesetzt durch das Batterierecht-Durchführungsgesetz, das das frühere Batteriegesetz ablöste); beschädigte Lithium-Akkus sind brandgefährlich</td></tr>
    <tr><td>Datenträger</td><td>sicher löschen oder nach DIN 66399 vernichten (Schutzklassen, Sicherheitsstufen 1–7), Vernichtung protokollieren</td></tr>
    <tr><td>Verpackungen</td><td>VerpackG: Hersteller beteiligen sich am dualen System, Karton und Folie getrennt sammeln</td></tr>
    <tr><td>Toner, Tinte</td><td>Rücknahmesysteme der Hersteller</td></tr>
    </tbody></table>
    <p>Das <strong>Bundes-Immissionsschutzgesetz</strong> schützt vor Luftverunreinigung, Lärm und Erschütterungen (Details in TA Luft und TA Lärm) – relevant z. B. für Kühlanlagen und Notstromaggregate eines Rechenzentrums. Verstöße gegen Umweltrecht führen zu Bußgeldern, im Extremfall zu Strafverfahren, Schadensersatz und Imageschäden.</p>
    <h5>Green IT</h5>
    <ul>
    <li>energieeffiziente Geräte und Netzteile, Siegel wie Blauer Engel, TCO Certified, EU-Energielabel, 80 PLUS</li>
    <li>Virtualisierung und Konsolidierung von Servern, Energiesparmodi, Abschalten statt Standby</li>
    <li>Ökostrom, Abwärmenutzung, effiziente Kühlung im Rechenzentrum</li>
    <li>Duplexdruck, digitale Ablage, lange Nutzungsdauer, generalüberholte (refurbished) Geräte</li>
    <li>Managementsysteme: Umwelt nach ISO 14001 oder EMAS, Energie nach ISO 50001</li>
    </ul>
    <h5>Ethik und Compliance</h5>
    <p><strong>Compliance</strong> bedeutet, Gesetze und interne Regeln (Verhaltenskodex, Code of Conduct) einzuhalten: keine Bestechung (Geschenke nur im erlaubten Rahmen und offen), Datenschutz, legale Lizenzen, keine Kartellabsprachen. Hinweise auf Verstöße können über interne Meldestellen gegeben werden (Hinweisgeberschutzgesetz, Pflicht ab 50 Beschäftigten). Ethische Fragen stellen sich in der IT z. B. bei der Überwachung von Mitarbeitenden, bei KI-Systemen, die Menschen benachteiligen können, und bei der Gestaltung von Formularen und Datenbanken, die alle Geschlechter (auch „divers“) abbilden sollen.</p>
    <div class="callout achtung"><strong>Prüfungsfalle:</strong> Recycling ist erst Stufe 3 – Vermeidung und Wiederverwendung haben Vorrang. „Papierkorb leeren“ oder Schnellformatieren löscht Daten nicht sicher.</div>
    <div class="callout pruefung"><strong>So kommt es dran:</strong> Die Stufen der Abfallhierarchie ordnen, Abfälle dem richtigen Entsorgungsweg zuordnen, Green-IT-Maßnahmen nennen und Zielkonflikte zwischen Ökonomie und Ökologie erklären.</div>
      `
    },
    {
      id: "lernen-zusammenarbeit",
      title: "Weiterbildung, Europass, digitale Zusammenarbeit & Datenschutz",
      exam: ["AP2"],
      summary: "Anpassungs- und Aufstiegsfortbildung, Umschulung und staatliche Förderung, Europass und Mobilität in Europa, Netiquette, CC/BCC, soziale Medien und Social Engineering sowie Schutzziele, DSGVO-Grundsätze und TOM als IT-Sicherheitsgrundlagen im WiSo-Teil.",
      html: `
    <h5>Lebenslanges Lernen</h5>
    <p>IT-Wissen veraltet schnell. Wer im Beruf bleiben und aufsteigen will, muss sich laufend weiterbilden.</p>
    <table><thead><tr><th>Art</th><th>Ziel</th><th>Beispiel</th></tr></thead><tbody>
    <tr><td>Anpassungsfortbildung</td><td>Wissen auf dem aktuellen Stand halten</td><td>Schulung zu einer neuen Serverversion, Herstellerzertifikat (Cisco, Microsoft, Linux)</td></tr>
    <tr><td>Aufstiegsfortbildung</td><td>höher qualifizierter Abschluss mit Kammerprüfung</td><td>Geprüfte/r Berufsspezialist/in, Bachelor Professional, Master Professional (DQR-Stufen 5–7) im IT-Bereich</td></tr>
    <tr><td>Umschulung</td><td>Abschluss in einem neuen Beruf</td><td>Kauffrau im Einzelhandel wird Fachinformatikerin</td></tr>
    <tr><td>Studium</td><td>Hochschulabschluss, auch berufsbegleitend</td><td>Bachelor Informatik</td></tr>
    </tbody></table>
    <p><strong>Förderung:</strong> Aufstiegs-BAföG (Zuschuss und zinsgünstiges Darlehen für Lehrgangs- und Prüfungskosten, ggf. Lebensunterhalt – ohne Altersgrenze), Weiterbildungsstipendium für junge Fachkräfte mit sehr gutem Abschluss, Bildungsurlaub nach Landesrecht (in Schleswig-Holstein bis zu 5 Arbeitstage im Jahr), Förderung durch die Agentur für Arbeit (Bildungsgutschein).</p>
    <h5>Europass und Mobilität</h5>
    <p>Der <strong>Europass</strong> der EU macht Qualifikationen europaweit verständlich:</p>
    <ul>
    <li><strong>Lebenslauf</strong> im einheitlichen Format mit Selbsteinschätzung der Sprachkenntnisse</li>
    <li><strong>Mobilitätsnachweis</strong> über Lernaufenthalte im Ausland, z. B. ein Auslandspraktikum</li>
    <li><strong>Zeugniserläuterung</strong> für Berufsabschlüsse und <strong>Diploma Supplement</strong> für Hochschulabschlüsse</li>
    </ul>
    <p>Mit <strong>Erasmus+</strong> werden Auslandsaufenthalte in der Ausbildung gefördert; bis zu einem Viertel der Ausbildungszeit darf im Ausland stattfinden (§ 2 BBiG). Die <strong>Europäische Sozialcharta</strong> des Europarats sichert soziale Grundrechte wie gerechte Arbeitsbedingungen und soziale Sicherheit.</p>
    <h5>Digitale Zusammenarbeit</h5>
    <ul>
    <li><strong>Netiquette in dienstlichen E-Mails:</strong> aussagekräftiger Betreff, Anrede und Gruß, kurz und sachlich, Signatur mit den Pflichtangaben des Unternehmens, Anhänge prüfen, keine Kettenmails, Vertrauliches nicht unverschlüsselt senden.</li>
    <li><strong>An / CC / BCC:</strong> „An“ für den, der handeln soll, „CC“ zur Kenntnis (für alle sichtbar), „BCC“ verdeckt. Bei Rundmails an externe Empfänger gehört der Verteiler ins BCC – E-Mail-Adressen sind personenbezogene Daten.</li>
    <li><strong>Soziale Medien:</strong> Beschäftigte müssen Rücksicht auf die Interessen des Arbeitgebers nehmen. Beleidigungen über Chef oder Kollegen und das Ausplaudern interner Informationen können zu Abmahnung und Kündigung führen.</li>
    <li><strong>Teamarbeit:</strong> klare Absprachen zu Erreichbarkeit und Kanälen, Wertschätzung, unterschiedliche Kulturen und Perspektiven als Chance nutzen.</li>
    </ul>
    <h5>Social Engineering</h5>
    <p>Angreifer nutzen menschliche Eigenschaften wie Hilfsbereitschaft, Respekt vor Autorität oder Zeitdruck aus: <strong>Phishing</strong> (gefälschte Mails und Webseiten), <strong>CEO-Fraud</strong> (angebliche Chefanweisung zu einer eiligen Überweisung), <strong>Pretexting</strong> (erfundene Geschichte, z. B. ein Anruf vom „Microsoft-Support“), <strong>Tailgating</strong> (hinter Berechtigten durch die Tür gehen).</p>
    <div class="callout merke"><strong>Merke:</strong> Nie Passwörter oder Fernzugriff herausgeben, über eine bekannte Nummer zurückrufen, bei Zahlungen das Vier-Augen-Prinzip einhalten, verdächtige Vorfälle sofort der IT melden.</div>
    <h5>Datenschutz und Informationssicherheit im Überblick</h5>
    <p><strong>Informationssicherheit</strong> schützt alle Informationen eines Unternehmens (auch Konstruktionsdaten oder Preislisten) vor Verlust, Manipulation und unbefugtem Zugriff. <strong>Datenschutz</strong> schützt Menschen davor, dass ihre personenbezogenen Daten missbraucht werden.</p>
    <table><thead><tr><th>Schutzziel</th><th>Bedeutung</th><th>Beispiel für eine Verletzung</th></tr></thead><tbody>
    <tr><td>Vertraulichkeit</td><td>nur Befugte können Daten lesen</td><td>Kundenliste per unverschlüsselter Mail an falschen Empfänger</td></tr>
    <tr><td>Integrität</td><td>Daten sind vollständig und unverändert</td><td>Schadsoftware verändert Kontonummern in Rechnungen</td></tr>
    <tr><td>Verfügbarkeit</td><td>Systeme und Daten sind nutzbar, wenn sie gebraucht werden</td><td>Ransomware verschlüsselt den Fileserver</td></tr>
    <tr><td>Authentizität</td><td>Absender bzw. Daten sind echt und überprüfbar</td><td>gefälschte Absenderadresse beim CEO-Fraud</td></tr>
    </tbody></table>
    <ul>
    <li><strong>Ziele der DSGVO</strong> (Art. 1): Schutz natürlicher Personen bei der Verarbeitung ihrer Daten und freier Datenverkehr in der EU. <strong>Grundsätze</strong> (Art. 5): Rechtmäßigkeit, Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung, Integrität und Vertraulichkeit, Rechenschaftspflicht.</li>
    <li><strong>Rechte der Betroffenen:</strong> Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21). Bußgelder bis 20 Mio. € oder 4 % des weltweiten Jahresumsatzes.</li>
    <li><strong>TOM</strong> (technische und organisatorische Maßnahmen, Art. 32): technisch z. B. Verschlüsselung, Zugriffsrechte, Backups, Firewall; organisatorisch z. B. Richtlinien, Schulungen, Vier-Augen-Prinzip, Besucherregelung.</li>
    <li><strong>BSI</strong> (Bundesamt für Sicherheit in der Informationstechnik): warnt vor Sicherheitslücken, gibt den IT-Grundschutz heraus, zertifiziert und berät. Datenschutzaufsicht in Schleswig-Holstein ist das ULD.</li>
    </ul>
    <h5>Selbstgesteuert lernen</h5>
    <p>Plane dein Lernen mit Zielen und festen Zeiten, wiederhole in wachsenden Abständen (z. B. mit Karteikarten), rechne Aufgaben selbst statt Lösungen nur zu lesen und erkläre Stoff anderen in einer Lerngruppe. Nutze seriöse Quellen – Gesetzestexte, IHK, BSI, Herstellerdokumentationen – und prüfe Aktualität und Urheber; auch Antworten einer KI müssen gegengeprüft werden.</p>
    <div class="callout pruefung"><strong>So kommt es dran:</strong> Das richtige Adressfeld für eine Rundmail wählen, das richtige Verhalten bei einem verdächtigen Anruf nennen, Folgen eines Posts über den Arbeitgeber einschätzen, Fortbildungsarten und Europass-Dokumente zuordnen, einen Vorfall dem verletzten Schutzziel zuordnen und Maßnahmen als technisch oder organisatorisch einordnen.</div>
      `
    },
  ],
  exercises: [
    {
      id: "e-ausbildungsvertrag",
      topic: "duales-system",
      title: "Ausbildungsvertrag, Probezeit und Kündigung bei der Nordlicht IT GmbH",
      level: 2,
      exam: ["AP2"],
      task: `<p>Mia (17) beginnt am <strong>01.09.2026</strong> ihre Ausbildung zur Fachinformatikerin Systemintegration bei der Nordlicht IT GmbH in Heide. Im Vertrag ist eine Probezeit von <strong>3 Monaten</strong> vereinbart, die Ausbildung dauert 3 Jahre.</p>
      <p>a) Wann endet die Probezeit?</p>
      <p>b) Am 25.11.2026 kündigt der Betrieb ohne Angabe von Gründen per E-Mail. Beurteile die Kündigung.</p>
      <p>c) Nach der Probezeit möchte Mia in eine schulische Ausbildung zur Erzieherin wechseln. Ihre Kündigung geht dem Betrieb am <strong>15.03.2027</strong> zu. Wann endet das Ausbildungsverhältnis, und was muss die Kündigung enthalten?</p>
      <p>d) Nenne vier Angaben, die der Ausbildungsvertrag nach § 11 BBiG mindestens enthalten muss.</p>
      <p>e) Angenommen, Mia bleibt und besteht ihre Abschlussprüfung; das Ergebnis wird ihr am 20.06.2029 mitgeteilt. Wann endet die Ausbildung? Was gilt, wenn sie am 21.06.2029 ohne weitere Absprache weiterarbeitet?</p>`,
      hints: ["Die Probezeit endet mit Ablauf des Tages vor dem gleichen Kalendertag.", "4 Wochen sind 28 Tage – kein Endtermin zum 15. oder Monatsende."],
      solution: `<p><strong>a)</strong> Beginn 01.09.2026 + 3 Monate → die Probezeit endet am <strong>30.11.2026</strong>.</p>
      <p><strong>b)</strong> In der Probezeit darf der Betrieb jederzeit ohne Frist und ohne Angabe von Gründen kündigen. Die Kündigung muss aber <strong>schriftlich</strong> erfolgen (§ 22 Abs. 3 BBiG). Eine E-Mail erfüllt die Schriftform nicht – die Kündigung ist <strong>unwirksam</strong>. Der Betrieb könnte bis zum 30.11.2026 noch wirksam schriftlich kündigen – weil Mia minderjährig ist, muss die Kündigung ihren Eltern als gesetzlichen Vertretern zugehen.</p>
      <p><strong>c)</strong> Nach der Probezeit kann die Auszubildende mit einer Frist von <strong>4 Wochen</strong> kündigen, wenn sie die Berufsausbildung aufgeben oder sich für einen anderen Beruf ausbilden lassen will. 15.03.2027 + 28 Tage = <strong>12.04.2027</strong>. Die Kündigung muss schriftlich erfolgen und den Kündigungsgrund (Berufswechsel) nennen. Ist Mia dann noch minderjährig, müssen ihre gesetzlichen Vertreter zustimmen.</p>
      <p><strong>d)</strong> z. B. Art, sachliche und zeitliche Gliederung sowie Ziel der Ausbildung; Beginn und Dauer; tägliche Ausbildungszeit; Dauer der Probezeit; Zahlung und Höhe der Vergütung; Dauer des Urlaubs; Voraussetzungen der Kündigung; Maßnahmen außerhalb der Ausbildungsstätte; Hinweis auf Tarifverträge/Betriebsvereinbarungen; Form des Ausbildungsnachweises.</p>
      <p><strong>e)</strong> Besteht die Auszubildende vor Ablauf der Ausbildungszeit, endet das Ausbildungsverhältnis mit der <strong>Bekanntgabe des Ergebnisses</strong> durch den Prüfungsausschuss, also am <strong>20.06.2029</strong>. Wird sie danach ohne ausdrückliche Vereinbarung weiterbeschäftigt, gilt ein <strong>Arbeitsverhältnis auf unbestimmte Zeit</strong> als begründet (§ 24 BBiG).</p>`
    },
    {
      id: "e-jugendarbeitsschutz",
      topic: "arbeitszeit-schutz",
      title: "Jugendarbeitsschutz: Urlaub und Wochenplan prüfen",
      level: 3,
      exam: ["AP2"],
      task: `<p>Paul ist am <strong>14.02.2011</strong> geboren und seit 01.08.2026 Auszubildender bei der Förde-Netz GmbH in Flensburg (5-Tage-Woche). Die Ausbilderin plant für eine Woche im Januar 2027:</p>
      <table><thead><tr><th>Tag</th><th>Plan</th></tr></thead><tbody>
      <tr><td>Montag</td><td>Berufsschule 7:45–13:00 (6 Unterrichtsstunden à 45 min), danach Betrieb 14:00–17:00</td></tr>
      <tr><td>Dienstag</td><td>Betrieb 7:30–16:00, Pause 30 min</td></tr>
      <tr><td>Mittwoch</td><td>Betrieb 8:00–16:30, Pause 60 min</td></tr>
      <tr><td>Donnerstag</td><td>Betrieb 8:00–16:30, Pause 60 min</td></tr>
      <tr><td>Freitag</td><td>Betrieb 7:00–13:00, Pause 30 min</td></tr>
      <tr><td>Samstag</td><td>Messestand 9:00–13:00</td></tr>
      </tbody></table>
      <p>a) Wie viele Werktage und Arbeitstage Urlaub stehen Paul 2027 mindestens zu? Wie viele Werktage sind es 2028?</p>
      <p>b) Prüfe den Wochenplan und nenne alle Verstöße gegen das JArbSchG mit Begründung.</p>
      <p>c) Wie viele Stunden darf Paul in dieser Woche höchstens noch im Betrieb arbeiten, nachdem der Montag angerechnet wurde?</p>`,
      solution: `<p><strong>a)</strong> Maßgeblich ist das Alter zu Beginn des Kalenderjahres. Am 01.01.2027 ist Paul 15 Jahre alt, also noch nicht 16 → <strong>30 Werktage</strong>. Bei einer 5-Tage-Woche: 30 × 5 ÷ 6 = <strong>25 Arbeitstage</strong>. Am 01.01.2028 ist er 16, also noch nicht 17 → <strong>27 Werktage</strong>.</p>
      <p><strong>b)</strong></p>
      <ul>
      <li><strong>Montag:</strong> Bei mehr als 5 Unterrichtsstunden ist der Berufsschultag einmal pro Woche beschäftigungsfrei. Die Arbeit von 14:00 bis 17:00 ist unzulässig.</li>
      <li><strong>Dienstag:</strong> 7:30–16:00 = 8,5 h minus 0,5 h Pause = 8 h Arbeitszeit. Bei mehr als 6 h muss die Pause <strong>60 min</strong> betragen – 30 min sind zu wenig.</li>
      <li><strong>Mittwoch/Donnerstag:</strong> je 8,5 h − 1 h = 7,5 h mit 60 min Pause – zulässig.</li>
      <li><strong>Freitag:</strong> 6 h − 0,5 h = 5,5 h Arbeit, 30 min Pause (mehr als 4,5 bis 6 h) – zulässig.</li>
      <li><strong>Samstag:</strong> Jugendliche dürfen samstags grundsätzlich nicht beschäftigt werden (Ausnahmen nur für bestimmte Branchen). Außerdem ist Paul mit dem Berufsschultag bereits an 5 Tagen eingesetzt – ein sechster Tag verstößt gegen die 5-Tage-Woche. Der Messeeinsatz ist unzulässig.</li>
      <li><strong>Wochenarbeitszeit:</strong> Geplant sind 8 h (Berufsschultag) + 3 h (Montagnachmittag) + 8 h + 7,5 h + 7,5 h + 5,5 h + 4 h (Samstag) = <strong>43,5 h</strong>. Jugendliche dürfen höchstens <strong>40 h</strong> pro Woche beschäftigt werden (§ 8 JArbSchG) – auch das ist ein Verstoß.</li>
      </ul>
      <p><strong>c)</strong> Der Berufsschultag wird mit 8 h auf die Wochenarbeitszeit angerechnet: 40 h − 8 h = <strong>32 h</strong> für Dienstag bis Freitag. Der korrigierte Plan (Di 8 h, Mi 7,5 h, Do 7,5 h, Fr 5,5 h = 28,5 h) liegt darunter.</p>`
    },
    {
      id: "e-urlaub-arbeitszeit",
      topic: "arbeitszeit-schutz",
      title: "Urlaub und Arbeitszeit bei Erwachsenen berechnen",
      level: 2,
      exam: ["AP2"],
      task: `<p>Jana (24) arbeitet seit mehreren Jahren als Systemadministratorin bei der Nordlicht IT GmbH. Ihr Vertrag verweist beim Urlaub nur auf das Gesetz.</p>
      <p>a) Wie viele Urlaubstage hat Jana bei einer 5-Tage-Woche? Wie viele wären es bei einer 4-Tage-Woche?</p>
      <p>b) Jana scheidet zum 31.05.2026 aus und hat 2026 noch keinen Urlaub genommen. Wie viele Urlaubstage stehen ihr zu (5-Tage-Woche)?</p>
      <p>c) In einer Projektphase arbeitet Jana montags bis donnerstags von 8:00 bis 18:45 Uhr mit 45 min Pause und freitags 6 h ohne Pause. Ist das nach dem Arbeitszeitgesetz zulässig? Begründe.</p>`,
      solution: `<p><strong>a)</strong> Gesetzlicher Mindesturlaub: 24 Werktage (Mo–Sa). 5-Tage-Woche: 24 × 5 ÷ 6 = <strong>20 Arbeitstage</strong>. 4-Tage-Woche: 24 × 4 ÷ 6 = <strong>16 Arbeitstage</strong>.</p>
      <p><strong>b)</strong> Wer in der ersten Jahreshälfte ausscheidet, erhält Teilurlaub von 1/12 je vollem Monat (§ 5 BUrlG): 20 × 5 ÷ 12 = 8,33 Tage. Nur Bruchteile ab einem halben Tag werden aufgerundet → <strong>8 Urlaubstage</strong>. (Der Rest von 0,33 Tagen verfällt nach der Rechtsprechung nicht einfach, sondern ist stundenweise zu gewähren oder auszuzahlen; als Prüfungsantwort werden 8 Tage erwartet.)</p>
      <p><strong>c)</strong> Mo–Do: 8:00–18:45 = 10,75 h − 0,75 h Pause = <strong>10 h</strong> täglich. Das ArbZG erlaubt bis zu 10 h je Werktag, wenn im Durchschnitt von 6 Monaten bzw. 24 Wochen 8 h je Werktag nicht überschritten werden – ein Ausgleich muss also später erfolgen. Die Pause von 45 min ist bei mehr als 9 h richtig. Die Ruhezeit von 18:45 bis 8:00 beträgt 13,25 h und damit mehr als 11 h. Freitag: Bei genau 6 h ist keine Pause vorgeschrieben (erst bei mehr als 6 h). Wochenarbeitszeit 4 × 10 + 6 = 46 h, also unter 48 h. Ergebnis: <strong>zulässig</strong>, sofern der Ausgleich eingehalten wird.</p>`
    },
    {
      id: "e-kuendigungsfristen",
      topic: "kuendigung",
      title: "Kündigungsfristen nach § 622 BGB berechnen",
      level: 3,
      exam: ["AP2"],
      task: `<p>Die Westküsten Systemhaus KG in Husum hat 35 Beschäftigte. Es gibt keinen Tarifvertrag und keine besonderen Vereinbarungen zu Kündigungsfristen. Bestimme jeweils den Tag, an dem das Arbeitsverhältnis endet.</p>
      <p>a) Lars ist seit dem 01.04.2019 beschäftigt. Die Kündigung des Arbeitgebers geht ihm am Freitag, 12.06.2026 zu.</p>
      <p>b) Lars kündigt selbst; die Kündigung geht dem Arbeitgeber am 12.06.2026 zu.</p>
      <p>c) Sabine ist seit dem 01.02.2016 beschäftigt. Die Arbeitgeberkündigung geht ihr am 20.10.2026 zu.</p>
      <p>d) Ein neuer Mitarbeiter ist in der vereinbarten Probezeit von 4 Monaten. Die Kündigung geht ihm am 29.01.2026 zu.</p>
      <p>e) Tom ist seit einem Jahr beschäftigt. Sein Arbeitsverhältnis soll durch den Arbeitgeber zum 30.11.2026 enden. Wann muss ihm die Kündigung spätestens zugehen?</p>
      <p>f) Mehmet ist Mitglied des Betriebsrats. Kann ihm ordentlich gekündigt werden?</p>`,
      hints: ["Erst Frist addieren, dann auf den nächsten zulässigen Endtermin gehen.", "Verlängerte Fristen gelten nur, wenn der Arbeitgeber kündigt."],
      solution: `<p><strong>a)</strong> Betriebszugehörigkeit 7 Jahre → ab 5 Jahren: 2 Monate zum Monatsende. 12.06. + 2 Monate = 12.08. → Ende <strong>31.08.2026</strong>.</p>
      <p><strong>b)</strong> Für den Arbeitnehmer gilt die Grundfrist: 4 Wochen zum 15. oder Monatsende. 12.06. + 28 Tage = 10.07. → nächster zulässiger Termin <strong>15.07.2026</strong>.</p>
      <p><strong>c)</strong> Betriebszugehörigkeit 10 Jahre und 8 Monate → ab 10 Jahren: 4 Monate zum Monatsende. 20.10.2026 + 4 Monate = 20.02.2027 → Ende <strong>28.02.2027</strong>.</p>
      <p><strong>d)</strong> In der Probezeit: 2 Wochen zu jedem Tag. 29.01. + 14 Tage = <strong>12.02.2026</strong>.</p>
      <p><strong>e)</strong> Unter 2 Jahren gilt auch für den Arbeitgeber die Grundfrist von 4 Wochen. 30.11.2026 − 28 Tage = <strong>02.11.2026</strong> (spätester Zugang).</p>
      <p><strong>f)</strong> Nein. Betriebsratsmitglieder sind während der Amtszeit und bis ein Jahr danach ordentlich unkündbar (§ 15 KSchG). Möglich ist nur eine außerordentliche Kündigung aus wichtigem Grund mit Zustimmung des Betriebsrats.</p>`
    },
    {
      id: "e-kschg",
      topic: "kuendigung",
      title: "Gilt das Kündigungsschutzgesetz? Kündigungsgründe zuordnen",
      level: 2,
      exam: ["AP2"],
      task: `<p>Die Kranich Systems UG in Büsum beschäftigt 8 Vollzeitkräfte, 3 Teilzeitkräfte mit je 20 Wochenstunden, 2 Teilzeitkräfte mit je 30 Wochenstunden und 2 Auszubildende.</p>
      <p>a) Prüfe rechnerisch, ob das Kündigungsschutzgesetz im Betrieb gilt.</p>
      <p>b) Ordne zu: personen-, verhaltens- oder betriebsbedingt?<br>1. Ein Mitarbeiter kommt trotz zweier Abmahnungen regelmäßig zu spät.<br>2. Ein Großkunde springt ab, die Supportabteilung wird verkleinert.<br>3. Eine Mitarbeiterin ist seit Jahren dauerhaft erkrankt, eine Besserung ist nicht absehbar.<br>4. Ein Servicetechniker, der täglich zu Kunden fahren muss, verliert dauerhaft seinen Führerschein.<br>5. Ein Mitarbeiter lädt nach einer Abmahnung erneut illegal Filme über das Firmennetz.<br>6. Der Serverbetrieb wird komplett an einen externen Dienstleister ausgelagert.</p>
      <p>c) Einem Mitarbeiter geht am Mittwoch, 06.05.2026 eine Kündigung zu, die er für sozial ungerechtfertigt hält. Was muss er bis wann tun?</p>
      <p>d) Nenne drei Kriterien der Sozialauswahl bei betriebsbedingten Kündigungen.</p>`,
      solution: `<p><strong>a)</strong> Teilzeitkräfte werden anteilig gezählt (bis 20 h = 0,5; bis 30 h = 0,75), Auszubildende gar nicht: 8 + 3 × 0,5 + 2 × 0,75 = 8 + 1,5 + 1,5 = <strong>11</strong>. Da mehr als 10 Arbeitnehmer beschäftigt sind, <strong>gilt das KSchG</strong> – für alle, deren Arbeitsverhältnis länger als 6 Monate besteht.</p>
      <p><strong>b)</strong> 1. verhaltensbedingt · 2. betriebsbedingt · 3. personenbedingt · 4. personenbedingt · 5. verhaltensbedingt · 6. betriebsbedingt</p>
      <p><strong>c)</strong> Er muss innerhalb von <strong>3 Wochen</strong> nach Zugang Kündigungsschutzklage beim <strong>Arbeitsgericht</strong> erheben, also bis spätestens <strong>27.05.2026</strong>. Versäumt er die Frist, gilt die Kündigung als von Anfang an wirksam.</p>
      <p><strong>d)</strong> Dauer der Betriebszugehörigkeit, Lebensalter, Unterhaltspflichten, Schwerbehinderung.</p>`
    },
    {
      id: "e-zeugnis-gericht",
      topic: "arbeitsvertrag-zeugnis",
      title: "Arbeitszeugnis deuten und Rechtsweg bestimmen",
      level: 1,
      exam: ["AP2"],
      task: `<p>Tim verlässt die Deichblick Software GmbH in Kiel und erhält ein Zeugnis.</p>
      <p>a) Welcher Note entsprechen diese Sätze?<br>1. „Er erledigte die ihm übertragenen Aufgaben stets zu unserer vollen Zufriedenheit.“<br>2. „Er hat sich bemüht, den Anforderungen gerecht zu werden.“<br>3. „Seine Leistungen fanden stets unsere vollste Anerkennung; er arbeitete stets zu unserer vollsten Zufriedenheit.“</p>
      <p>b) Tim erhält nur ein Zeugnis mit Angaben zu Art und Dauer seiner Tätigkeit. Um welche Zeugnisart handelt es sich, und was kann er verlangen?</p>
      <p>c) Welches Gericht ist zuständig?<br>1. Tim streitet mit dem Arbeitgeber über die Formulierung seines Zeugnisses.<br>2. Die Berufsgenossenschaft erkennt Tims Fahrradsturz auf dem Weg zur Arbeit nicht als Wegeunfall an.<br>3. Der Arbeitgeber zahlt das letzte Monatsgehalt nicht.<br>4. Die Rentenversicherung lehnt eine Reha-Maßnahme ab.</p>
      <p>d) Bringe die Instanzen der Arbeitsgerichtsbarkeit in die richtige Reihenfolge und nenne den Sitz des obersten Gerichts.</p>`,
      solution: `<p><strong>a)</strong> 1. gut · 2. ungenügend · 3. sehr gut</p>
      <p><strong>b)</strong> Es ist ein <strong>einfaches Zeugnis</strong>. Tim kann ein <strong>qualifiziertes Zeugnis</strong> verlangen, das zusätzlich Leistung und Verhalten beurteilt (§ 109 GewO). Für Bewerbungen ist das qualifizierte Zeugnis üblich.</p>
      <p><strong>c)</strong> 1. Arbeitsgericht · 2. Sozialgericht (nach erfolglosem Widerspruch bei der BG) · 3. Arbeitsgericht · 4. Sozialgericht (nach Widerspruch)</p>
      <p><strong>d)</strong> Arbeitsgericht → Landesarbeitsgericht (Berufung) → Bundesarbeitsgericht (Revision) mit Sitz in <strong>Erfurt</strong>.</p>`
    },
    {
      id: "e-tarif",
      topic: "tarifvertrag",
      title: "Tarifrunde, Günstigkeitsprinzip und Tariferhöhung",
      level: 2,
      exam: ["AP2"],
      task: `<p>Für die Beschäftigten eines Arbeitgeberverbands der IT-Dienstleister läuft der Entgelttarifvertrag aus.</p>
      <p>a) Bringe in die richtige Reihenfolge: Urabstimmung über Streik · Scheitern der Verhandlungen · Streik · Kündigung des Tarifvertrags · Schlichtung · Einigung · Tarifverhandlungen · Urabstimmung über das Ergebnis</p>
      <p>b) Der Manteltarifvertrag sieht 30 Urlaubstage vor. Welcher Urlaub gilt für eine tarifgebundene Mitarbeiterin, deren Arbeitsvertrag (1) 28 Tage bzw. (2) 32 Tage nennt? Begründe.</p>
      <p>c) Das Ergebnis der Tarifrunde: +3,8 % ab 01.01.2027 und weitere +2,5 % ab 01.01.2028. Berechne das neue Tarifentgelt für eine Entgeltgruppe mit bisher 2.850,00 € und die gesamte prozentuale Steigerung.</p>
      <p>d) Im Juni 2027 fordert die Gewerkschaft mehr Geld und ruft zum Warnstreik auf. Beurteile.</p>`,
      solution: `<p><strong>a)</strong> Kündigung des Tarifvertrags → Tarifverhandlungen → Scheitern der Verhandlungen → Schlichtung → Urabstimmung über Streik → Streik → Einigung → Urabstimmung über das Ergebnis</p>
      <p><strong>b)</strong> (1) <strong>30 Tage</strong>: Der Tarifvertrag ist Mindeststandard; eine schlechtere Regelung im Arbeitsvertrag ist unwirksam. (2) <strong>32 Tage</strong>: Nach dem Günstigkeitsprinzip darf der Arbeitsvertrag zugunsten der Arbeitnehmerin abweichen.</p>
      <p><strong>c)</strong> 2.850,00 € × 1,038 = <strong>2.958,30 €</strong> ab 2027; 2.958,30 € × 1,025 = <strong>3.032,26 €</strong> ab 2028. Gesamtsteigerung: 3.032,26 ÷ 2.850,00 − 1 ≈ <strong>6,40 %</strong> – etwas mehr als 3,8 % + 2,5 % = 6,3 %, weil die zweite Erhöhung auf das bereits erhöhte Entgelt berechnet wird.</p>
      <p><strong>d)</strong> Während der Laufzeit des neuen Entgelttarifvertrags gilt die <strong>Friedenspflicht</strong>. Ein Streik für höhere Entgelte ist unzulässig; der Arbeitgeberverband könnte Unterlassung und Schadensersatz verlangen.</p>`
    },
    {
      id: "e-betriebsrat-jav",
      topic: "mitbestimmung",
      title: "Betriebsrat und JAV bei der Holstentor IT AG",
      level: 3,
      exam: ["AP2"],
      task: `<p>Die Holstentor IT AG in Lübeck hat 380 wahlberechtigte Arbeitnehmer, darunter 14 Auszubildende (17 bis 27 Jahre) und 3 weitere Beschäftigte unter 18 Jahren.</p>
      <p>a) Aus wie vielen Mitgliedern besteht der Betriebsrat?</p>
      <p>b) Kann eine JAV gewählt werden, und wie viele Mitglieder hat sie?</p>
      <p>c) Beurteile: (1) Ein 27-jähriger Auszubildender will für die JAV kandidieren. (2) Ein 24-jähriger Netzwerkadministrator (keine Ausbildung mehr) will für die JAV kandidieren. (3) Derselbe Administrator will die JAV mitwählen.</p>
      <p>d) Ordne die Maßnahmen der Beteiligungsstufe des Betriebsrats zu:<br>1. Einführung einer Software, die Tastatureingaben und Bearbeitungszeiten je Mitarbeiter auswertet<br>2. ordentliche Kündigung eines Mitarbeiters<br>3. Einstellung eines neuen Netzwerkadministrators<br>4. Planung eines neuen Bürogebäudes<br>5. neue Gleitzeitregelung</p>
      <p>e) Wann finden die nächsten regelmäßigen Wahlen von Betriebsrat und JAV statt? (Heute: 23.09.2026)</p>`,
      solution: `<p><strong>a)</strong> 201–400 wahlberechtigte Arbeitnehmer → <strong>9 Mitglieder</strong>.</p>
      <p><strong>b)</strong> Ja: Es gibt einen Betriebsrat, und mit 14 Azubis + 3 weiteren Jugendlichen = 17 Wahlberechtigten sind mindestens 5 vorhanden. Bei 5–20 Wahlberechtigten besteht die JAV aus <strong>1 Mitglied</strong>.</p>
      <p><strong>c)</strong> (1) Ja – Auszubildende sind seit 2021 ohne Altersgrenze wählbar. (2) Ja – Beschäftigte unter 25 sind wählbar, auch ohne Ausbildungsverhältnis. (3) Nein – wählen dürfen nur Beschäftigte unter 18 und Auszubildende.</p>
      <p><strong>d)</strong> 1. echte Mitbestimmung (technische Einrichtung zur Leistungs- und Verhaltenskontrolle, § 87) · 2. Anhörung (§ 102; ohne Anhörung ist die Kündigung unwirksam) · 3. Zustimmungsverweigerungsrecht (§ 99, Unternehmen mit mehr als 20 wahlberechtigten AN) · 4. Unterrichtung und Beratung (§ 90) · 5. echte Mitbestimmung (Beginn und Ende der Arbeitszeit, § 87)</p>
      <p><strong>e)</strong> Die JAV wird regelmäßig vom <strong>1. Oktober bis 30. November 2026</strong> gewählt (alle 2 Jahre). Die Betriebsratswahlen fanden im Frühjahr 2026 statt; die nächsten regelmäßigen folgen vom <strong>1. März bis 31. Mai 2030</strong> (alle 4 Jahre).</p>`
    },
    {
      id: "e-entgelt",
      topic: "sozialversicherung",
      title: "Ausbildungsvergütung abrechnen",
      level: 3,
      exam: ["AP2"],
      task: `<p>Finn (20, ledig, kinderlos, kein Kirchenmitglied, Steuerklasse I) ist im 3. Ausbildungsjahr bei der Förde-Netz GmbH. Er erhält 1.150,00 € Ausbildungsvergütung und 20,00 € vermögenswirksame Leistungen (VL) vom Arbeitgeber. Er spart monatlich 40,00 € in einem VL-Vertrag. Laut Lohnsteuertabelle fällt keine Lohnsteuer an.</p>
      <p>Beitragssätze (Arbeitnehmeranteil laut Aufgabe): KV 8,75 % (inkl. halbem Zusatzbeitrag), PV 1,8 %, RV 9,3 %, AV 1,3 %.</p>
      <p>a) Erstelle die Entgeltabrechnung bis zum Auszahlungsbetrag.</p>
      <p>b) Warum zahlt Finn keinen Zuschlag zur Pflegeversicherung für Kinderlose?</p>
      <p>c) Wie hoch ist der Arbeitgeberanteil zur Sozialversicherung (ohne Unfallversicherung), wenn er den gleichen Sätzen entspricht? Welche Versicherung zahlt der Arbeitgeber zusätzlich allein?</p>`,
      solution: `<table><thead><tr><th>Position</th><th>€</th></tr></thead><tbody>
      <tr><td>Ausbildungsvergütung</td><td>1.150,00</td></tr>
      <tr><td>+ VL-Zuschuss Arbeitgeber</td><td>20,00</td></tr>
      <tr><td>= Bruttoentgelt</td><td>1.170,00</td></tr>
      <tr><td>− Lohnsteuer, Soli, Kirchensteuer</td><td>0,00</td></tr>
      <tr><td>− KV 8,75 %</td><td>102,38</td></tr>
      <tr><td>− PV 1,8 %</td><td>21,06</td></tr>
      <tr><td>− RV 9,3 %</td><td>108,81</td></tr>
      <tr><td>− AV 1,3 %</td><td>15,21</td></tr>
      <tr><td>= Nettoentgelt (SV-Abzüge 247,46 €)</td><td><strong>922,54</strong></td></tr>
      <tr><td>− VL-Sparrate</td><td>40,00</td></tr>
      <tr><td>= Auszahlungsbetrag</td><td><strong>882,54</strong></td></tr>
      </tbody></table>
      <p><strong>b)</strong> Der Kinderlosenzuschlag wird erst ab Vollendung des 23. Lebensjahres erhoben. Finn ist 20.</p>
      <p><strong>c)</strong> Arbeitgeberanteil: 102,38 + 21,06 + 108,81 + 15,21 = <strong>247,46 €</strong>. Zusätzlich zahlt der Arbeitgeber allein den Beitrag zur <strong>gesetzlichen Unfallversicherung</strong> an die Berufsgenossenschaft.</p>`
    },
    {
      id: "e-rechtsformen",
      topic: "unternehmensformen",
      title: "Gründung, Haftung und Gewinnverteilung einer KG",
      level: 2,
      exam: ["AP2"],
      task: `<p>Kai, Lea und Mo gründen in Heide ein IT-Systemhaus. Kai will die Geschäfte führen und legt 60.000 € ein. Lea und Mo legen je 30.000 € ein, wollen aber nicht mitarbeiten und nicht mit ihrem Privatvermögen haften.</p>
      <p>a) Welche Rechtsform bietet sich an? Nenne die Bezeichnungen der Gesellschafter.</p>
      <p>b) Der Gesellschaftsvertrag regelt nur die Höhe der Einlagen. Verteile einen Jahresgewinn von 72.000 € nach der seit 2024 geltenden gesetzlichen Regel.</p>
      <p>c) Ein Lieferant hat eine Forderung von 150.000 €, das Gesellschaftsvermögen reicht nicht aus. Wer haftet wie?</p>
      <p>d) In welche Abteilung des Handelsregisters wird die Gesellschaft eingetragen?</p>
      <p>e) Kai erteilt Nina Prokura. Darf Nina (1) einen Server für 25.000 € kaufen, (2) einen Kredit aufnehmen, (3) das Betriebsgrundstück verkaufen, (4) die Bilanz unterschreiben?</p>
      <p>f) Welche Rechtsform wäre sinnvoll, wenn alle drei nicht persönlich haften wollen, aber zusammen nur 3.000 € aufbringen?</p>`,
      solution: `<p><strong>a)</strong> Eine <strong>Kommanditgesellschaft (KG)</strong>: Kai ist <strong>Komplementär</strong> (Vollhafter, Geschäftsführung), Lea und Mo sind <strong>Kommanditisten</strong> (Teilhafter).</p>
      <p><strong>b)</strong> Maßgeblich ist das Verhältnis der vereinbarten Einlagen: 60.000 : 30.000 : 30.000 = 2 : 1 : 1 (4 Teile). 72.000 € ÷ 4 = 18.000 € je Teil → Kai <strong>36.000 €</strong>, Lea <strong>18.000 €</strong>, Mo <strong>18.000 €</strong>.</p>
      <p><strong>c)</strong> Kai haftet als Komplementär unbeschränkt, unmittelbar und solidarisch – also auch mit seinem Privatvermögen für die gesamte Restforderung. Lea und Mo haften nur bis zur Höhe ihrer Einlage; ist diese vollständig eingezahlt, haften sie nicht weiter.</p>
      <p><strong>d)</strong> Als Personenhandelsgesellschaft in <strong>Abteilung A</strong> (HRA).</p>
      <p><strong>e)</strong> (1) ja – gewöhnliches Geschäft · (2) ja – Kredite sind von der Prokura gedeckt · (3) nein – Grundstücke veräußern nur mit besonderer Befugnis · (4) nein – die Bilanz unterschreibt der Inhaber bzw. Komplementär persönlich.</p>
      <p><strong>f)</strong> Eine <strong>UG (haftungsbeschränkt)</strong>: Gründung ab 1 € Stammkapital, Haftung nur mit dem Gesellschaftsvermögen. Sie muss jedes Jahr 25 % des Jahresüberschusses in eine gesetzliche Rücklage einstellen – so lange, bis das Stammkapital auf mindestens 25.000 € erhöht ist (dann kann sie zur GmbH werden).</p>`
    },
    {
      id: "e-kennzahlen",
      topic: "kennzahlen",
      title: "Kennzahlen der Deichblick Software GmbH vergleichen",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Die Deichblick Software GmbH in Kiel legt folgende Zahlen vor:</p>
      <table><thead><tr><th></th><th>2024</th><th>2025</th></tr></thead><tbody>
      <tr><td>Umsatz</td><td>1.500.000 €</td><td>1.680.000 €</td></tr>
      <tr><td>Kosten</td><td>1.320.000 €</td><td>1.428.000 €</td></tr>
      <tr><td>Eigenkapital</td><td>900.000 €</td><td>1.050.000 €</td></tr>
      <tr><td>Fremdkapital</td><td>600.000 €</td><td>450.000 €</td></tr>
      <tr><td>Fremdkapitalzinsen</td><td>30.000 €</td><td>22.500 €</td></tr>
      <tr><td>gelöste Supporttickets</td><td>9.000</td><td>10.800</td></tr>
      <tr><td>Arbeitsstunden im Support</td><td>3.000</td><td>3.000</td></tr>
      </tbody></table>
      <p>a) Berechne für beide Jahre Gewinn, Wirtschaftlichkeit (4 Nachkommastellen), Eigenkapital-, Umsatz- und Gesamtkapitalrentabilität sowie die Produktivität des Supports.</p>
      <p>b) Berechne den Umsatzindex 2025 (Basis 2024 = 100) und die prozentuale Veränderung des Gewinns.</p>
      <p>c) Beurteile die Entwicklung in zwei Sätzen.</p>`,
      solution: `<table><thead><tr><th>Kennzahl</th><th>2024</th><th>2025</th></tr></thead><tbody>
      <tr><td>Gewinn = Umsatz − Kosten</td><td>180.000 €</td><td>252.000 €</td></tr>
      <tr><td>Wirtschaftlichkeit = Umsatz ÷ Kosten</td><td>1,1364</td><td>1,1765</td></tr>
      <tr><td>EK-Rentabilität = Gewinn × 100 ÷ EK</td><td>20,00 %</td><td>24,00 %</td></tr>
      <tr><td>Umsatzrentabilität = Gewinn × 100 ÷ Umsatz</td><td>12,00 %</td><td>15,00 %</td></tr>
      <tr><td>GK-Rentabilität = (Gewinn + Zinsen) × 100 ÷ GK</td><td>(180.000 + 30.000) × 100 ÷ 1.500.000 = 14,00 %</td><td>(252.000 + 22.500) × 100 ÷ 1.500.000 = 18,30 %</td></tr>
      <tr><td>Produktivität = Tickets ÷ Stunden</td><td>3,0 Tickets/h</td><td>3,6 Tickets/h</td></tr>
      </tbody></table>
      <p><strong>b)</strong> Umsatzindex 2025 = 1.680.000 ÷ 1.500.000 × 100 = <strong>112</strong> (Umsatz +12 %). Gewinnveränderung: 252.000 ÷ 180.000 − 1 = <strong>+40 %</strong>.</p>
      <p><strong>c)</strong> Alle Kennzahlen haben sich verbessert: Der Gewinn wächst deutlich stärker als der Umsatz, weil die Kosten langsamer steigen. Die Supportproduktivität ist um 20 % gestiegen, und das eingesetzte Kapital verzinst sich besser – auch weil weniger Fremdkapitalzinsen anfallen.</p>`
    },
    {
      id: "e-kreislauf",
      topic: "wirtschaften-grundlagen",
      title: "Erweiterter Wirtschaftskreislauf mit Zahlen",
      level: 2,
      exam: ["AP2"],
      task: `<p>In einer Modellvolkswirtschaft (Beträge in Geldeinheiten, GE) gilt: Unternehmen zahlen an Haushalte 1.500 GE Löhne, Gehälter, Mieten und Zinsen. Der Staat zahlt an Haushalte 320 GE Transferleistungen und 280 GE Gehälter. Haushalte zahlen 540 GE Steuern und Sozialabgaben und sparen 260 GE. Unternehmen zahlen 360 GE Steuern. Der Staat kauft bei Unternehmen Güter für 100 GE und zahlt Subventionen. Der Staatshaushalt ist ausgeglichen.</p>
      <p>a) Berechne die Konsumausgaben der Haushalte.</p>
      <p>b) Berechne die Einnahmen des Staates und die Höhe der Subventionen.</p>
      <p>c) Wie hoch können die Investitionskredite der Banken an Unternehmen sein, wenn die Banken nur die Ersparnisse der Haushalte weitergeben?</p>
      <p>d) Ordne zu, zwischen welchen Sektoren der Geldstrom fließt: Kindergeld · Gewerbesteuer · Zahlung eines US-Kunden für eine Softwarelizenz · Zinsen für einen Konsumkredit.</p>`,
      solution: `<p><strong>a)</strong> Einnahmen der Haushalte: 1.500 + 320 + 280 = 2.100 GE. Konsum = 2.100 − 540 − 260 = <strong>1.300 GE</strong>.</p>
      <p><strong>b)</strong> Staatseinnahmen = 540 + 360 = <strong>900 GE</strong>. Ausgaben ohne Subventionen: 320 + 280 + 100 = 700 GE. Ausgeglichener Haushalt → Subventionen = 900 − 700 = <strong>200 GE</strong>.</p>
      <p><strong>c)</strong> Die Ersparnis von <strong>260 GE</strong> fließt über die Banken als Investitionskredite an die Unternehmen.</p>
      <p><strong>d)</strong> Kindergeld: Staat → Haushalte · Gewerbesteuer: Unternehmen → Staat · Softwarelizenz: Ausland → Unternehmen (Export) · Zinsen für Konsumkredit: Haushalte → Banken</p>`
    },
    {
      id: "e-markt",
      topic: "markt-preisbildung",
      title: "Gleichgewichtspreis für generalüberholte Notebooks",
      level: 3,
      exam: ["AP2"],
      task: `<p>Für generalüberholte Business-Notebooks gelten in Schleswig-Holstein folgende Monatswerte:</p>
      <table><thead><tr><th>Preis</th><th>200 €</th><th>250 €</th><th>300 €</th><th>350 €</th><th>400 €</th></tr></thead><tbody>
      <tr><td>Nachfrage (Stück)</td><td>900</td><td>750</td><td>600</td><td>450</td><td>300</td></tr>
      <tr><td>Angebot (Stück)</td><td>300</td><td>450</td><td>600</td><td>750</td><td>900</td></tr>
      </tbody></table>
      <p>a) Bestimme Gleichgewichtspreis, Absatzmenge und Umsatz.</p>
      <p>b) Welche Marktsituation liegt bei 250 € und bei 350 € vor? Berechne jeweils Überhang und Umsatz.</p>
      <p>c) Ein Förderprogramm für Schulen erhöht die Nachfrage bei jedem Preis um 150 Stück. Beide Kurven verlaufen linear (Nachfrage: N = 1.650 − 3 × Preis, Angebot: A = 3 × Preis − 300). Berechne den neuen Gleichgewichtspreis und die neue Menge.</p>
      <p>d) Welche Marktform liegt vor, wenn viele kleine Händler viele Käufer beliefern?</p>`,
      solution: `<p><strong>a)</strong> Bei <strong>300 €</strong> gilt Angebot = Nachfrage = <strong>600 Stück</strong>. Umsatz = 300 € × 600 = <strong>180.000 €</strong>.</p>
      <p><strong>b)</strong> 250 €: Nachfrage 750 &gt; Angebot 450 → <strong>Nachfrageüberhang</strong> von 300 Stück (Verkäufermarkt). Abgesetzt wird nur die kleinere Menge: 250 € × 450 = 112.500 €.<br>350 €: Angebot 750 &gt; Nachfrage 450 → <strong>Angebotsüberhang</strong> von 300 Stück (Käufermarkt). Umsatz: 350 € × 450 = 157.500 €.</p>
      <p><strong>c)</strong> Neue Nachfrage = Angebot: 1.650 − 3p = 3p − 300 → 1.950 = 6p → <strong>p = 325 €</strong>. Menge: 3 × 325 − 300 = <strong>675 Stück</strong>. Die gestiegene Nachfrage erhöht also Preis und Menge.</p>
      <p><strong>d)</strong> Viele Anbieter und viele Nachfrager → <strong>Polypol</strong> (vollständige Konkurrenz).</p>`
    },
    {
      id: "e-angebotsvergleich",
      topic: "angebotsvergleich-nwa",
      title: "Zwei Angebote für 15 Switches vergleichen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Westküsten Systemhaus KG benötigt 15 verwaltbare Switches.</p>
      <ul>
      <li><strong>Lieferer 1:</strong> 420,00 €/Stück, 12 % Mengenrabatt, 2 % Skonto, Bezugskosten 3,20 €/Stück</li>
      <li><strong>Lieferer 2:</strong> 395,00 €/Stück, 8 % Rabatt, 3 % Skonto innerhalb von 14 Tagen oder 30 Tage netto, Fracht pauschal 45,00 € und Verpackung pauschal 15,00 €</li>
      </ul>
      <p>a) Berechne für beide Angebote den Bezugspreis gesamt und je Stück (Skonto wird genutzt).</p>
      <p>b) Wie hoch ist die Ersparnis beim günstigeren Angebot insgesamt und je Stück?</p>
      <p>c) Lohnt es sich bei Lieferer 2, das Skonto zu nutzen, auch wenn dafür der Kontokorrentkredit (11 % Zinsen p. a.) in Anspruch genommen werden muss? Rechne mit der Näherungsformel.</p>
      <p>d) Nenne drei qualitative Kriterien, die vor der Bestellung zusätzlich geprüft werden sollten.</p>`,
      solution: `<table><thead><tr><th></th><th>Lieferer 1</th><th>Lieferer 2</th></tr></thead><tbody>
      <tr><td>Listeneinkaufspreis (15 Stück)</td><td>6.300,00</td><td>5.925,00</td></tr>
      <tr><td>− Rabatt</td><td>756,00 (12 %)</td><td>474,00 (8 %)</td></tr>
      <tr><td>= Zieleinkaufspreis</td><td>5.544,00</td><td>5.451,00</td></tr>
      <tr><td>− Skonto</td><td>110,88 (2 %)</td><td>163,53 (3 %)</td></tr>
      <tr><td>= Bareinkaufspreis</td><td>5.433,12</td><td>5.287,47</td></tr>
      <tr><td>+ Bezugskosten</td><td>48,00 (15 × 3,20)</td><td>60,00 (45 + 15)</td></tr>
      <tr><td>= Bezugspreis gesamt</td><td>5.481,12</td><td><strong>5.347,47</strong></td></tr>
      <tr><td>Bezugspreis je Stück</td><td>365,41</td><td><strong>356,50</strong></td></tr>
      </tbody></table>
      <p><strong>b)</strong> Lieferer 2 ist günstiger: Ersparnis 5.481,12 − 5.347,47 = <strong>133,65 €</strong> insgesamt, je Stück 365,41 − 356,50 = <strong>8,91 €</strong>.</p>
      <p><strong>c)</strong> Jahreszins des Skontos ≈ 3 × 360 ÷ (30 − 14) = <strong>67,5 %</strong>. Das ist weit mehr als die 11 % Kreditzinsen – das Skonto zu nutzen lohnt sich.</p>
      <p><strong>d)</strong> z. B. Lieferzeit und Termintreue, Qualität und Garantie, Service und Reklamationsverhalten, Kompatibilität, Nachhaltigkeit (Energieverbrauch, Rücknahme), Zuverlässigkeit aus bisherigen Geschäften.</p>`
    },
    {
      id: "e-nwa",
      topic: "angebotsvergleich-nwa",
      title: "Nutzwertanalyse: Ticketsystem auswählen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH will ein neues Ticketsystem einführen. Das Projektteam hat drei Produkte mit 1 (schlecht) bis 10 (sehr gut) Punkten bewertet:</p>
      <table><thead><tr><th>Kriterium</th><th>Gewicht</th><th>X</th><th>Y</th><th>Z</th></tr></thead><tbody>
      <tr><td>Kosten</td><td>35 %</td><td>8</td><td>5</td><td>7</td></tr>
      <tr><td>Funktionsumfang</td><td>25 %</td><td>6</td><td>9</td><td>7</td></tr>
      <tr><td>Datenschutz</td><td>20 %</td><td>4</td><td>9</td><td>8</td></tr>
      <tr><td>Bedienbarkeit</td><td>20 %</td><td>7</td><td>6</td><td>8</td></tr>
      </tbody></table>
      <p>a) Berechne Teilnutzen und Gesamtnutzwerte und gib die Rangfolge an.</p>
      <p>b) Die Geschäftsleitung legt nachträglich fest: Daten dürfen nur in der EU gespeichert werden. Produkt X speichert in den USA. Welche Folge hat das, und wie hätte man das in der NWA berücksichtigen sollen?</p>
      <p>c) Nenne zwei Schwächen der Nutzwertanalyse.</p>`,
      solution: `<table><thead><tr><th>Kriterium</th><th>X</th><th>Y</th><th>Z</th></tr></thead><tbody>
      <tr><td>Kosten (35 %)</td><td>0,35 × 8 = 2,80</td><td>1,75</td><td>2,45</td></tr>
      <tr><td>Funktionsumfang (25 %)</td><td>1,50</td><td>2,25</td><td>1,75</td></tr>
      <tr><td>Datenschutz (20 %)</td><td>0,80</td><td>1,80</td><td>1,60</td></tr>
      <tr><td>Bedienbarkeit (20 %)</td><td>1,40</td><td>1,20</td><td>1,60</td></tr>
      <tr><td><strong>Gesamtnutzwert</strong></td><td>6,50</td><td>7,00</td><td><strong>7,40</strong></td></tr>
      </tbody></table>
      <p>Rangfolge: <strong>Z (7,40) vor Y (7,00) vor X (6,50)</strong> – Produkt Z wird empfohlen.</p>
      <p><strong>b)</strong> Produkt X scheidet aus, unabhängig von seinem Nutzwert. Eine solche Mindestanforderung ist ein <strong>K.-o.-Kriterium</strong> und muss vor der Punktbewertung geprüft werden; nur Produkte, die alle K.-o.-Kriterien erfüllen, kommen in die NWA.</p>
      <p><strong>c)</strong> Gewichtung und Punktvergabe sind subjektiv; die Ergebnisse täuschen eine Genauigkeit vor, die es nicht gibt; kleine Änderungen der Gewichte können die Rangfolge umdrehen; Kosten und Nutzen werden vermischt.</p>`
    },
    {
      id: "e-kalk-vorwaerts",
      topic: "handelskalkulation",
      title: "Handelskalkulation vorwärts: Mini-PC",
      level: 3,
      exam: ["AP1"],
      task: `<p>Die Marschland Computer e. K. in Brunsbüttel kalkuliert den Angebotspreis für einen Mini-PC:</p>
      <ul>
      <li>Listeneinkaufspreis 480,00 €, Liefererrabatt 25 %, Liefererskonto 2 %, Bezugskosten 7,20 € je Stück</li>
      <li>Handlungskosten 18 %, Gewinnzuschlag 20 %</li>
      <li>Kundenskonto 2 %, Vertreterprovision 5 %, Kundenrabatt 12 %, Umsatzsteuer 19 %</li>
      </ul>
      <p>a) Berechne den Listenverkaufspreis brutto.</p>
      <p>b) Berechne Kalkulationszuschlag, Kalkulationsfaktor (4 Nachkommastellen) und Handelsspanne.</p>
      <p>c) Ein weiteres Gerät hat einen Bezugspreis von 250,00 €. Ermittle mit dem Kalkulationsfaktor den Listenverkaufspreis netto.</p>`,
      solution: `<table><thead><tr><th>Schritt</th><th>€</th></tr></thead><tbody>
      <tr><td>Listeneinkaufspreis</td><td>480,00</td></tr>
      <tr><td>− 25 % Liefererrabatt</td><td>120,00</td></tr>
      <tr><td>= Zieleinkaufspreis</td><td>360,00</td></tr>
      <tr><td>− 2 % Liefererskonto</td><td>7,20</td></tr>
      <tr><td>= Bareinkaufspreis</td><td>352,80</td></tr>
      <tr><td>+ Bezugskosten</td><td>7,20</td></tr>
      <tr><td>= Bezugspreis</td><td>360,00</td></tr>
      <tr><td>+ 18 % Handlungskosten</td><td>64,80</td></tr>
      <tr><td>= Selbstkostenpreis</td><td>424,80</td></tr>
      <tr><td>+ 20 % Gewinn</td><td>84,96</td></tr>
      <tr><td>= Barverkaufspreis (93 %)</td><td>509,76</td></tr>
      <tr><td>+ 2 % Kundenskonto (im Hundert)</td><td>10,96</td></tr>
      <tr><td>+ 5 % Vertreterprovision (im Hundert)</td><td>27,41</td></tr>
      <tr><td>= Zielverkaufspreis (100 % bzw. 88 %) = 509,76 × 100 ÷ 93</td><td>548,13</td></tr>
      <tr><td>+ 12 % Kundenrabatt (im Hundert)</td><td>74,75</td></tr>
      <tr><td>= Listenverkaufspreis netto = 548,13 × 100 ÷ 88</td><td>622,88</td></tr>
      <tr><td>+ 19 % Umsatzsteuer</td><td>118,35</td></tr>
      <tr><td>= Listenverkaufspreis brutto</td><td><strong>741,23</strong></td></tr>
      </tbody></table>
      <p><strong>b)</strong> Kalkulationszuschlag = (622,88 − 360,00) × 100 ÷ 360,00 = <strong>73,02 %</strong><br>Kalkulationsfaktor = 622,88 ÷ 360,00 = <strong>1,7302</strong><br>Handelsspanne = (622,88 − 360,00) × 100 ÷ 622,88 = <strong>42,20 %</strong></p>
      <p><strong>c)</strong> 250,00 € × 1,7302 = <strong>432,55 €</strong> Listenverkaufspreis netto.</p>`
    },
    {
      id: "e-kalk-rueckwaerts",
      topic: "handelskalkulation",
      title: "Preissenkung: Differenzkalkulation und neuer Liefererrabatt",
      level: 3,
      exam: ["AP1"],
      task: `<p>Fortsetzung der Aufgabe „Mini-PC“ (Selbstkostenpreis 424,80 €, alle Prozentsätze unverändert): Ein Onlinehändler bietet das gleiche Gerät für <strong>699,00 € brutto</strong> an. Die Marschland Computer e. K. senkt ihren Listenverkaufspreis brutto auf diesen Betrag.</p>
      <p>a) Wie hoch sind jetzt der Gewinn in Euro und der Gewinnzuschlag in Prozent? (Differenzkalkulation)</p>
      <p>b) Künftig soll wieder ein Gewinnzuschlag von 20 % erreicht werden. Der Listeneinkaufspreis bleibt bei 480,00 €; die Preissenkung soll über einen höheren Liefererrabatt ausgeglichen werden. Wie hoch muss der Rabatt in Euro und Prozent sein? (Rückwärtskalkulation)</p>`,
      hints: ["Rückwärts wird aus „im Hundert“ ein Abzug „vom Hundert“ und umgekehrt.", "Rabattsatz = Rabatt × 100 ÷ Listeneinkaufspreis"],
      solution: `<p><strong>a) Differenzkalkulation</strong> (von unten bis zum Barverkaufspreis):</p>
      <table><thead><tr><th>Schritt</th><th>€</th></tr></thead><tbody>
      <tr><td>Listenverkaufspreis brutto</td><td>699,00</td></tr>
      <tr><td>− 19 % USt (699,00 ÷ 1,19 = netto)</td><td>111,61</td></tr>
      <tr><td>= Listenverkaufspreis netto</td><td>587,39</td></tr>
      <tr><td>− 12 % Kundenrabatt</td><td>70,49</td></tr>
      <tr><td>= Zielverkaufspreis</td><td>516,90</td></tr>
      <tr><td>− 2 % Kundenskonto</td><td>10,34</td></tr>
      <tr><td>− 5 % Vertreterprovision</td><td>25,85</td></tr>
      <tr><td>= Barverkaufspreis</td><td>480,71</td></tr>
      <tr><td>− Selbstkostenpreis</td><td>424,80</td></tr>
      <tr><td>= Gewinn</td><td><strong>55,91</strong></td></tr>
      </tbody></table>
      <p>Gewinnzuschlag = 55,91 × 100 ÷ 424,80 = <strong>13,16 %</strong> (statt 20 %).</p>
      <p><strong>b) Rückwärtskalkulation</strong> ab Barverkaufspreis 480,71 €:</p>
      <table><thead><tr><th>Schritt</th><th>€</th></tr></thead><tbody>
      <tr><td>Barverkaufspreis (120 %)</td><td>480,71</td></tr>
      <tr><td>− 20 % Gewinn (im Hundert: 480,71 ÷ 1,2)</td><td>80,12</td></tr>
      <tr><td>= Selbstkostenpreis (118 %)</td><td>400,59</td></tr>
      <tr><td>− 18 % Handlungskosten (400,59 ÷ 1,18)</td><td>61,11</td></tr>
      <tr><td>= Bezugspreis</td><td>339,48</td></tr>
      <tr><td>− Bezugskosten</td><td>7,20</td></tr>
      <tr><td>= Bareinkaufspreis (98 %)</td><td>332,28</td></tr>
      <tr><td>+ 2 % Liefererskonto (332,28 ÷ 0,98)</td><td>6,78</td></tr>
      <tr><td>= Zieleinkaufspreis</td><td>339,06</td></tr>
      <tr><td>Listeneinkaufspreis</td><td>480,00</td></tr>
      </tbody></table>
      <p>Nötiger Rabatt = 480,00 − 339,06 = <strong>140,94 €</strong>; Rabattsatz = 140,94 × 100 ÷ 480,00 = <strong>29,36 %</strong> (statt bisher 25 %).</p>`
    },
    {
      id: "e-kaufvertrag",
      topic: "kaufvertrag",
      title: "Fälle zum Kaufvertrag und zu Kaufvertragsstörungen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>a) Der 16-jährige Azubi Ole kauft ohne Wissen seiner Eltern einen Gaming-Laptop für 1.400 € auf Raten. Die Eltern sind dagegen. Ist der Vertrag wirksam?</p>
      <p>b) In einem Onlineshop wird ein Server wegen eines Tippfehlers für 49 € statt 4.900 € angezeigt. Die Nordlicht IT GmbH bestellt sofort fünf Stück. Muss der Shop liefern?</p>
      <p>c) Von 10 gelieferten SSDs sind 2 defekt. Die Nordlicht IT GmbH hat die Lieferung sofort geprüft und den Mangel noch am selben Tag gemeldet. Welche Rechte hat sie, und in welcher Reihenfolge?</p>
      <p>d) Ein Geschäftskunde zahlt eine Rechnung über 12.000 € nicht. Er ist seit 45 Tagen im Verzug. Berechne die Verzugszinsen, wenn der Basiszinssatz laut Aufgabe 1,5 % beträgt (Zinstage ÷ 365), und nenne den zusätzlichen Pauschalbetrag.</p>
      <p>e) Grenze Gewährleistung und Garantie voneinander ab.</p>`,
      solution: `<p><strong>a)</strong> Ole ist beschränkt geschäftsfähig (7 bis unter 18). Der Vertrag ist bis zur Genehmigung der Eltern <strong>schwebend unwirksam</strong>; da sie die Genehmigung verweigern, ist er <strong>unwirksam</strong>. Der Taschengeldparagraf greift nicht, weil ein Ratenkauf über 1.400 € nicht mit frei verfügbaren Mitteln sofort bezahlt wird.</p>
      <p><strong>b)</strong> Nein. Die Darstellung im Shop ist nur eine <strong>Aufforderung zur Abgabe eines Angebots</strong>. Die Bestellung ist der Antrag; erst die Annahme durch den Shop (z. B. Auftragsbestätigung oder Lieferung) schließt den Vertrag. Eine reine Eingangsbestätigung ist noch keine Annahme. Der Shop kann die Bestellung ablehnen. Hat er bereits angenommen, kann er seine Erklärung wegen Irrtums (§ 119 BGB) unverzüglich anfechten – dann ist der Vertrag nichtig.</p>
      <p><strong>c)</strong> Es liegt eine <strong>mangelhafte Lieferung</strong> vor; die Rüge war rechtzeitig (§ 377 HGB). Vorrangig: <strong>Nacherfüllung</strong> – Ersatzlieferung oder Reparatur, die Käuferin wählt. Erst wenn die Nacherfüllung scheitert oder verweigert wird: Rücktritt (für die defekten Stücke), Minderung und – bei Verschulden – Schadensersatz.</p>
      <p><strong>d)</strong> Zinssatz unter Unternehmen = Basiszinssatz + 9 Prozentpunkte = 10,5 %. Zinsen = 12.000 € × 10,5 % × 45 ÷ 365 = <strong>155,34 €</strong>. Zusätzlich kann eine <strong>Pauschale von 40 €</strong> verlangt werden.</p>
      <p><strong>e)</strong> Die <strong>Gewährleistung</strong> (Mängelhaftung) ist gesetzlich vorgeschrieben: Der Verkäufer haftet 2 Jahre für Mängel, die bei Übergabe vorhanden waren. Die <strong>Garantie</strong> ist eine freiwillige Zusage des Herstellers oder Händlers, deren Dauer und Bedingungen er selbst festlegt; sie besteht zusätzlich zur Gewährleistung.</p>`
    },
    {
      id: "e-arbeitsschutz",
      topic: "arbeitsschutz",
      title: "Arbeitsschutz, Wegeunfall und Brandschutz im Systemhaus",
      level: 1,
      exam: ["AP2"],
      task: `<p>a) Beschreibe Farbe und Form eines Verbots-, Warn-, Gebots- und Rettungszeichens.</p>
      <p>b) Im Serverraum brennt ein Netzteil. Welcher Feuerlöscher ist geeignet? Begründe.</p>
      <p>c) Azubi Lea stürzt auf dem direkten Weg zur Berufsschule mit dem Fahrrad und ist 5 Tage arbeitsunfähig. Um welche Art von Unfall handelt es sich, welche Versicherung ist zuständig, und was muss der Betrieb tun?</p>
      <p>d) Wie viele Ersthelfer braucht ein Verwaltungsbetrieb mit 60 Beschäftigten, wie viele eine Werkstatt mit 30 Beschäftigten?</p>
      <p>e) Nenne drei Maßnahmen für einen ergonomischen Bildschirmarbeitsplatz.</p>`,
      solution: `<p><strong>a)</strong> Verbot: rot, rund, durchgestrichen · Warnung: gelb, dreieckig, schwarzer Rand · Gebot: blau, rund · Rettung: grün, rechteckig/quadratisch.</p>
      <p><strong>b)</strong> Ein <strong>CO₂-Löscher</strong> (Kohlendioxid): Er leitet keinen Strom, hinterlässt keine Rückstände und beschädigt die übrige Elektronik nicht. Wasser ist wegen der Stromgefahr ungeeignet, Pulver verschmutzt die Geräte stark.</p>
      <p><strong>c)</strong> Es ist ein <strong>Wegeunfall</strong>; zuständig ist die gesetzliche <strong>Unfallversicherung</strong> (Berufsgenossenschaft des Betriebs). Da Lea mehr als 3 Kalendertage arbeitsunfähig ist, muss der Betrieb innerhalb von 3 Tagen eine <strong>Unfallanzeige</strong> an die Berufsgenossenschaft schicken. Lea sollte einen Durchgangsarzt aufsuchen.</p>
      <p><strong>d)</strong> Verwaltungsbetrieb: 5 % von 60 = <strong>3 Ersthelfer</strong>. Werkstatt (sonstiger Betrieb): 10 % von 30 = <strong>3 Ersthelfer</strong>.</p>
      <p><strong>e)</strong> z. B. Monitor blendfrei im rechten Winkel zum Fenster aufstellen, oberste Bildschirmzeile knapp unter Augenhöhe, Stuhl und Tisch so einstellen, dass Unterarme waagerecht liegen und die Füße flach aufstehen, regelmäßige Pausen oder Mischarbeit, Angebot einer Augenuntersuchung.</p>`
    },
    {
      id: "e-umwelt",
      topic: "umwelt-nachhaltigkeit",
      title: "Altgeräte, Batterien und Green IT",
      level: 1,
      exam: ["AP2"],
      task: `<p>Die Förde-Netz GmbH tauscht 25 alte PCs, die Batterien einer USV-Anlage und mehrere Monitore aus. Dabei fallen viele Kartons an.</p>
      <p>a) Bringe die Stufen der Abfallhierarchie des Kreislaufwirtschaftsgesetzes in die richtige Reihenfolge.</p>
      <p>b) Beschreibe den richtigen Umgang mit den PCs (inklusive Festplatten), den USV-Batterien und den Kartons.</p>
      <p>c) Nenne drei Green-IT-Maßnahmen für die neuen Arbeitsplätze.</p>
      <p>d) Erkläre an einem Beispiel einen Zielkonflikt zwischen ökonomischen und ökologischen Zielen.</p>`,
      solution: `<p><strong>a)</strong> Vermeidung → Vorbereitung zur Wiederverwendung → Recycling → sonstige Verwertung (z. B. energetisch) → Beseitigung.</p>
      <p><strong>b)</strong> PCs: Daten sicher löschen oder Datenträger nach DIN 66399 vernichten und protokollieren; funktionsfähige Geräte aufbereiten, verkaufen oder spenden (Wiederverwendung), sonst als Elektroaltgeräte nach ElektroG über Wertstoffhof, Hersteller oder Händler zurückgeben. USV-Batterien: getrennt über Rücknahmesysteme bzw. den Handel entsorgen, nicht in den Restmüll. Kartons: getrennt als Papier/Pappe sammeln; die Verpackungen sind über das duale System lizenziert.</p>
      <p><strong>c)</strong> z. B. energieeffiziente Geräte mit Siegeln wie Blauer Engel oder TCO Certified, Energiesparmodi und automatisches Abschalten, Duplexdruck und digitale Ablage, Ökostrom, lange Nutzungsdauer oder generalüberholte Geräte.</p>
      <p><strong>d)</strong> Die billigsten Geräte senken kurzfristig die Kosten (ökonomisch), verbrauchen aber mehr Strom und halten kürzer, was die Umwelt stärker belastet (ökologisch). Energieeffiziente, langlebige Geräte sind teurer in der Anschaffung, schonen aber Umwelt und oft langfristig auch das Budget.</p>`
    },
    {
      id: "e-prinzip-faktoren",
      topic: "wirtschaften-grundlagen",
      title: "Ökonomisches Prinzip und Produktionsfaktoren zuordnen",
      level: 1,
      exam: ["AP2"],
      task: `<p>a) Welches ökonomische Prinzip liegt vor?<br>1. Die Nordlicht IT GmbH will mit einem Schulungsbudget von 8.000 € möglichst viele Mitarbeitende zertifizieren lassen.<br>2. Ein Rechenzentrum soll eine Verfügbarkeit von 99,9 % mit möglichst geringen Kosten erreichen.<br>3. Ein Azubi sagt: „Wir wollen mit möglichst wenig Aufwand möglichst viele Tickets lösen.“</p>
      <p>b) Ordne bei einem Hersteller von Netzwerkkabeln zu (Rohstoff, Hilfsstoff, Betriebsstoff, Betriebsmittel, ausführende Arbeit, dispositiver Faktor): Kupferdraht · Schmieröl für die Maschinen · Kabelummantelungsmaschine · Etiketten auf den Kabelrollen · Maschinenführerin · Produktionsleiter · Strom</p>
      <p>c) Nenne die drei klassischen volkswirtschaftlichen Produktionsfaktoren und erkläre, warum Kapital ein abgeleiteter Faktor ist.</p>`,
      solution: `<p><strong>a)</strong> 1. <strong>Maximalprinzip</strong> – der Mitteleinsatz (8.000 €) ist fest, der Erfolg soll maximal sein. 2. <strong>Minimalprinzip</strong> – das Ziel (99,9 %) ist fest, die Kosten sollen minimal sein. 3. Das ist <strong>kein ökonomisches Prinzip</strong>, sondern widersprüchlich: Man kann nicht gleichzeitig Einsatz minimieren und Ergebnis maximieren – eine Größe muss vorgegeben sein.</p>
      <p><strong>b)</strong> Kupferdraht: Rohstoff (Hauptbestandteil) · Schmieröl: Betriebsstoff · Kabelummantelungsmaschine: Betriebsmittel · Etiketten: Hilfsstoff (Nebenbestandteil) · Maschinenführerin: ausführende Arbeit · Produktionsleiter: dispositiver Faktor · Strom: Betriebsstoff</p>
      <p><strong>c)</strong> Arbeit, Boden (Natur) und Kapital. Kapital (Maschinen, Gebäude, Anlagen) ist <strong>abgeleitet</strong>, weil es erst durch den Einsatz von Arbeit und Boden hergestellt und durch Sparen und Investieren finanziert werden muss – es ist nicht von Natur aus vorhanden.</p>`
    },
    {
      id: "e-sektoren-organisation",
      topic: "betrieb-ziele",
      title: "Sektoren, Zielbeziehungen und Organisationsformen",
      level: 1,
      exam: ["AP1", "AP2"],
      task: `<p>a) Ordne den Wirtschaftssektoren zu: Krabbenfischerei in Büsum · Windkraftanlagenbauer in Husum · IT-Systemhaus in Heide · Sparkasse · Kiesabbau · Hersteller von Leiterplatten</p>
      <p>b) Welche Zielbeziehung liegt vor?<br>1. Durch Servervirtualisierung sinken Stromkosten und CO₂-Ausstoß.<br>2. Höhere Löhne verbessern die Mitarbeiterzufriedenheit, senken aber kurzfristig den Gewinn.<br>3. Ein neues Logo hat keinen Einfluss auf die Energiekosten.</p>
      <p>c) In einem Unternehmen erhalten die Mitarbeitenden eines Projekts Anweisungen von ihrem Abteilungsleiter und zusätzlich von der Projektleiterin. Welche Organisationsform liegt vor? Nenne je einen Vor- und Nachteil.</p>
      <p>d) Welche Zielsetzung verfolgen Stadtwerke, eine Volksbank und eine IT-GmbH typischerweise?</p>`,
      solution: `<p><strong>a)</strong> primär: Krabbenfischerei, Kiesabbau · sekundär: Windkraftanlagenbauer, Leiterplattenhersteller · tertiär: IT-Systemhaus, Sparkasse</p>
      <p><strong>b)</strong> 1. Zielharmonie · 2. Zielkonflikt · 3. Zielneutralität</p>
      <p><strong>c)</strong> <strong>Matrixorganisation</strong> (Funktion × Projekt) – eine Form des Mehrliniensystems, deshalb ist auch „Mehrliniensystem“ als Antwort vertretbar. Vorteil: fachübergreifende Zusammenarbeit und schnelle Abstimmung. Nachteil: Mehrfachunterstellung, Konflikte zwischen Linien- und Projektleitung.</p>
      <p><strong>d)</strong> Stadtwerke: gemeinwirtschaftlich (Versorgung, Kostendeckung) · Volksbank: genossenschaftlich (Förderung der Mitglieder) · IT-GmbH: erwerbswirtschaftlich (Gewinnerzielung).</p>`
    },
    {
      id: "e-wirtschaftsordnung",
      topic: "wirtschaftsordnung",
      title: "Soziale Marktwirtschaft und Unternehmenszusammenschlüsse",
      level: 2,
      exam: ["AP2"],
      task: `<p>a) Ordne zu – Kartell, Konzern oder Fusion?<br>1. Drei Softwarehäuser in Schleswig-Holstein vereinbaren gemeinsame Mindeststundensätze.<br>2. Eine Holding AG hält die Mehrheit an vier rechtlich selbstständigen IT-GmbHs und bestimmt deren Strategie.<br>3. Zwei Systemhäuser verschmelzen zu einer neuen GmbH.</p>
      <p>b) Ist der Zusammenschluss horizontal, vertikal oder diagonal?<br>1. Ein PC-Hersteller übernimmt einen Chiphersteller.<br>2. Ein Systemhaus übernimmt ein anderes Systemhaus.<br>3. Ein Softwarehaus kauft eine Hotelkette.</p>
      <p>c) Nenne die vier Ziele des magischen Vierecks und erkläre einen Zielkonflikt.</p>
      <p>d) Nenne je zwei Merkmale der sozialen Marktwirtschaft, die für „Markt“ und für „sozial“ stehen.</p>`,
      solution: `<p><strong>a)</strong> 1. <strong>Kartell</strong> (Preisabsprache, grundsätzlich verboten) · 2. <strong>Konzern</strong> (rechtlich selbstständig, einheitliche Leitung) · 3. <strong>Fusion</strong> (Verlust der rechtlichen und wirtschaftlichen Selbstständigkeit)</p>
      <p><strong>b)</strong> 1. vertikal (vorgelagerte Produktionsstufe) · 2. horizontal (gleiche Stufe) · 3. diagonal/konglomerat (branchenfremd)</p>
      <p><strong>c)</strong> Preisniveaustabilität, hoher Beschäftigungsstand, außenwirtschaftliches Gleichgewicht, stetiges und angemessenes Wirtschaftswachstum. Zielkonflikt z. B.: Um Arbeitslosigkeit zu senken, erhöht der Staat seine Ausgaben – die steigende Nachfrage kann aber die Preise treiben und die Preisniveaustabilität gefährden.</p>
      <p><strong>d)</strong> Markt: Privateigentum, Vertrags- und Gewerbefreiheit, freie Preisbildung, Wettbewerb. Sozial: Sozialversicherung, progressive Einkommensteuer und Transferleistungen, Kündigungs- und Arbeitsschutz, Mindestlohn, Tarifautonomie.</p>`
    },
    {
      id: "e-digital-weiterbildung",
      topic: "lernen-zusammenarbeit",
      title: "Rundmail, verdächtiger Anruf und Weiterbildung",
      level: 1,
      exam: ["AP2"],
      task: `<p>a) Du sollst eine Einladung zu einem Kundenworkshop an 40 externe Kunden schicken. Welches Adressfeld nutzt du für die Kunden? Begründe.</p>
      <p>b) Ein Anrufer stellt sich als „Microsoft-Support“ vor, behauptet, dein PC sei infiziert, und verlangt Fernzugriff. Wie verhältst du dich?</p>
      <p>c) Eine Kollegin postet in einem sozialen Netzwerk abfällige Bemerkungen über ihren Vorgesetzten und den Betrieb. Welche Folgen drohen?</p>
      <p>d) Ordne zu: Anpassungsfortbildung, Aufstiegsfortbildung oder Umschulung?<br>1. Ein FISI besucht einen Kurs zur neuen Firewall-Version.<br>2. Ein FISI macht den Abschluss „Bachelor Professional“ im IT-Bereich.<br>3. Ein Koch lässt sich zum Fachinformatiker ausbilden.</p>
      <p>e) Welche Dokumente gehören zum Europass, und wofür nutzt man sie?</p>`,
      solution: `<p><strong>a)</strong> <strong>BCC</strong> (Blindkopie). Die Empfänger sehen die Adressen der anderen nicht – E-Mail-Adressen sind personenbezogene Daten, deren Offenlegung gegen den Datenschutz verstoßen würde. Ins Feld „An“ kann die eigene Adresse.</p>
      <p><strong>b)</strong> Keinen Fernzugriff gewähren und keine Daten nennen, das Gespräch beenden, bei Unsicherheit über eine bekannte offizielle Nummer rückfragen und den Vorfall sofort der IT-Abteilung melden. Es handelt sich um Social Engineering.</p>
      <p><strong>c)</strong> Die Kollegin verletzt ihre Rücksichtnahme- und Loyalitätspflicht. Je nach Schwere drohen <strong>Abmahnung</strong>, <strong>ordentliche</strong> oder bei groben Beleidigungen sogar <strong>fristlose Kündigung</strong>.</p>
      <p><strong>d)</strong> 1. Anpassungsfortbildung · 2. Aufstiegsfortbildung · 3. Umschulung</p>
      <p><strong>e)</strong> Europass-Lebenslauf (mit Sprachkenntnissen), Mobilitätsnachweis (Lernaufenthalte im Ausland), Zeugniserläuterung (Berufsabschlüsse) und Diploma Supplement (Hochschulabschlüsse). Sie machen Qualifikationen europaweit vergleichbar und erleichtern Bewerbungen im Ausland.</p>`
    },
    {
      id: "e-ausbildungsverguetung",
      topic: "duales-system",
      title: "Ausbildungsvergütung prüfen und Pflichtverletzungen beurteilen",
      level: 1,
      exam: ["AP2"],
      task: `<p>Lars beginnt am <strong>01.08.2026</strong> seine Ausbildung zum Fachinformatiker Systemintegration bei der Deichblick Software GmbH in Kiel. Der Betrieb ist nicht tarifgebunden und bietet folgende Monatsvergütung an: 1. Jahr 700 €, 2. Jahr 830 €, 3. Jahr 950 €.</p>
      <p>a) Prüfe mit der gesetzlichen Mindestvergütung für Ausbildungsbeginn 2026 (1. Jahr 724 €; Aufschläge 18 % bzw. 35 % auf den Wert des 1. Jahres), ob die Vergütung zulässig ist.</p>
      <p>b) Der einschlägige Tarifvertrag der Branche sieht im 1. Jahr 1.050 € vor. Welche Vergütung muss der nicht tarifgebundene Betrieb im 1. Jahr mindestens zahlen? Begründe.</p>
      <p>c) Lars fehlt dreimal unentschuldigt in der Berufsschule. Welche Folgen können ihm drohen?</p>
      <p>d) Der Betrieb lässt Lars wochenlang nur Pakete tragen und Kaffee kochen. Welche Pflicht verletzt der Betrieb, und was kann Lars tun?</p>`,
      solution: `<p><strong>a)</strong> Mindestwerte: 1. Jahr 724 €; 2. Jahr 724 € × 1,18 = 854,32 € → 854 €; 3. Jahr 724 € × 1,35 = 977,40 € → 977 €. Alle drei angebotenen Beträge (700 €, 830 €, 950 €) liegen darunter – die Vergütung ist in <strong>allen drei Jahren unzulässig</strong>. Lars hat Anspruch mindestens auf 724 €, 854 € und 977 €.</p>
      <p><strong>b)</strong> Nach § 17 BBiG ist eine Vergütung nicht mehr angemessen, wenn sie die tarifliche Vergütung um mehr als 20 % unterschreitet: 1.050 € × 0,80 = <strong>840 €</strong>. Da 840 € über der Mindestvergütung von 724 € liegt, muss der Betrieb im 1. Jahr mindestens 840 € zahlen.</p>
      <p><strong>c)</strong> Lars verletzt seine Pflicht zum Besuch der Berufsschule (§ 13 BBiG). Der Betrieb kann ihn <strong>abmahnen</strong>; setzt er das Verhalten fort, droht nach der Probezeit eine <strong>fristlose Kündigung aus wichtigem Grund</strong> (schriftlich mit Gründen, innerhalb von 2 Wochen nach Kenntnis).</p>
      <p><strong>d)</strong> Der Betrieb verletzt seine <strong>Ausbildungspflicht</strong>: Er darf nur Aufgaben übertragen, die dem Ausbildungszweck dienen (§ 14 BBiG). Lars sollte das Gespräch mit dem Ausbilder suchen, sich – falls vorhanden – an die JAV bzw. den Betriebsrat wenden und den <strong>Ausbildungsberater der IHK</strong> einschalten. Die IHK kann eingreifen und im Extremfall die Ausbildungseignung entziehen; Lars kann bei schweren Verstößen selbst fristlos kündigen und Schadensersatz verlangen.</p>`
    },
    {
      id: "e-staffelrabatt",
      topic: "angebotsvergleich-nwa",
      title: "Mengenstaffel, Skonto und Bestellmenge: Dockingstationen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Dithmarscher Netzwerk-Service GmbH in Meldorf braucht <strong>40 USB-C-Dockingstationen</strong>. Ein Lieferer bietet an:</p>
      <ul>
      <li>Listeneinkaufspreis 189,00 € je Stück</li>
      <li>Mengenrabatt: ab 10 Stück 5 %, ab 25 Stück 10 %, ab 50 Stück 15 %</li>
      <li>2 % Skonto bei Zahlung innerhalb von 10 Tagen, sonst 30 Tage netto</li>
      <li>Bezugskosten je Stück: 3,50 € (unter 25 Stück), 2,80 € (ab 25 Stück), 2,20 € (ab 50 Stück)</li>
      </ul>
      <p>a) Berechne den Bezugspreis gesamt und je Stück für 40 Stück bei Zahlung innerhalb von 10 Tagen.</p>
      <p>b) Der Einkäufer schlägt vor, 50 Stück zu bestellen, „weil es pro Stück billiger ist“, und die Rechnung erst nach 3 Wochen zu bezahlen. Berechne den Bezugspreis gesamt und je Stück.</p>
      <p>c) Wie hoch wäre der Bezugspreis bei 50 Stück mit Skontoabzug? Wie viel Euro kostet die späte Zahlung?</p>
      <p>d) Beurteile den Vorschlag des Einkäufers, wenn wirklich nur 40 Geräte gebraucht werden.</p>`,
      hints: ["Erst die richtige Rabatt- und Bezugskostenstufe bestimmen.", "Nach 3 Wochen ist die Skontofrist von 10 Tagen abgelaufen."],
      solution: `<table><thead><tr><th></th><th>a) 40 Stück, mit Skonto</th><th>b) 50 Stück, ohne Skonto</th><th>c) 50 Stück, mit Skonto</th></tr></thead><tbody>
      <tr><td>Listeneinkaufspreis</td><td>40 × 189,00 = 7.560,00</td><td>50 × 189,00 = 9.450,00</td><td>9.450,00</td></tr>
      <tr><td>− Rabatt</td><td>10 % = 756,00</td><td>15 % = 1.417,50</td><td>1.417,50</td></tr>
      <tr><td>= Zieleinkaufspreis</td><td>6.804,00</td><td>8.032,50</td><td>8.032,50</td></tr>
      <tr><td>− Skonto 2 %</td><td>136,08</td><td>0,00</td><td>160,65</td></tr>
      <tr><td>= Bareinkaufspreis</td><td>6.667,92</td><td>8.032,50</td><td>7.871,85</td></tr>
      <tr><td>+ Bezugskosten</td><td>40 × 2,80 = 112,00</td><td>50 × 2,20 = 110,00</td><td>110,00</td></tr>
      <tr><td>= Bezugspreis gesamt</td><td><strong>6.779,92</strong></td><td><strong>8.142,50</strong></td><td><strong>7.981,85</strong></td></tr>
      <tr><td>je Stück</td><td><strong>169,50</strong></td><td><strong>162,85</strong></td><td><strong>159,64</strong></td></tr>
      </tbody></table>
      <p><strong>c)</strong> Durch die Zahlung nach der Skontofrist gehen 8.142,50 − 7.981,85 = <strong>160,65 €</strong> verloren (genau der Skontobetrag).</p>
      <p><strong>d)</strong> Der Stückpreis sinkt zwar (mit Skonto von 169,50 € auf 159,64 €), insgesamt zahlt das Unternehmen aber 7.981,85 − 6.779,92 = <strong>1.201,93 € mehr</strong> für 10 Geräte, die es nicht braucht. Dazu kommen Kapitalbindung, Lagerkosten und das Risiko, dass die Geräte veralten. Der Vorschlag ist nur sinnvoll, wenn die zusätzlichen Geräte bald gebraucht werden. Auf jeden Fall sollte innerhalb der Skontofrist gezahlt werden.</p>`
    },
    {
      id: "e-index-reallohn",
      topic: "kennzahlen",
      title: "Kennzahlen, Indexreihe und Reallohn der Husumer Kabel & Netz GmbH",
      level: 2,
      exam: ["AP2"],
      task: `<p>Die Husumer Kabel & Netz GmbH legt folgende Zahlen vor:</p>
      <table><thead><tr><th></th><th>2023</th><th>2024</th><th>2025</th></tr></thead><tbody>
      <tr><td>Umsatz</td><td>1.350.000 €</td><td>1.512.000 €</td><td>1.620.000 €</td></tr>
      <tr><td>Kosten</td><td>1.215.000 €</td><td>1.344.000 €</td><td>1.404.000 €</td></tr>
      <tr><td>Beschäftigte</td><td>15</td><td>16</td><td>15</td></tr>
      </tbody></table>
      <p>a) Berechne für jedes Jahr Gewinn, Wirtschaftlichkeit (3 Nachkommastellen), Umsatzrentabilität und Produktivität als Umsatz je Beschäftigten.</p>
      <p>b) Stelle für Umsatz und Produktivität je eine Indexreihe auf (Basis 2023 = 100).</p>
      <p>c) Das Durchschnittsgehalt steigt von 3.400 € (2024) auf 3.536 € (2025). Der Verbraucherpreisindex (2020 = 100) steigt im gleichen Zeitraum von 120,0 auf 123,0. Berechne die Inflationsrate, den nominalen Gehaltsanstieg und den Reallohnanstieg in Prozent.</p>
      <p>d) Deute die Ergebnisse in zwei bis drei Sätzen.</p>`,
      solution: `<table><thead><tr><th>Kennzahl</th><th>2023</th><th>2024</th><th>2025</th></tr></thead><tbody>
      <tr><td>Gewinn = Umsatz − Kosten</td><td>135.000 €</td><td>168.000 €</td><td>216.000 €</td></tr>
      <tr><td>Wirtschaftlichkeit = Umsatz ÷ Kosten</td><td>1,111</td><td>1,125</td><td>1,154</td></tr>
      <tr><td>Umsatzrentabilität = Gewinn × 100 ÷ Umsatz</td><td>10,00 %</td><td>11,11 %</td><td>13,33 %</td></tr>
      <tr><td>Produktivität = Umsatz ÷ Beschäftigte</td><td>90.000 €/MA</td><td>94.500 €/MA</td><td>108.000 €/MA</td></tr>
      </tbody></table>
      <p><strong>b)</strong> Umsatzindex: 2023 = 100 · 2024 = 1.512.000 ÷ 1.350.000 × 100 = <strong>112</strong> · 2025 = 1.620.000 ÷ 1.350.000 × 100 = <strong>120</strong>.<br>Produktivitätsindex: 2023 = 100 · 2024 = 94.500 ÷ 90.000 × 100 = <strong>105</strong> · 2025 = 108.000 ÷ 90.000 × 100 = <strong>120</strong>.</p>
      <p><strong>c)</strong> Inflationsrate = (123,0 − 120,0) × 100 ÷ 120,0 = <strong>2,5 %</strong>. Nominaler Anstieg = 3.536 ÷ 3.400 − 1 = <strong>4 %</strong>. Reallohn 2024 = 3.400 × 100 ÷ 120,0 = 2.833,33 €; Reallohn 2025 = 3.536 × 100 ÷ 123,0 = 2.874,80 € → realer Anstieg = 2.874,80 ÷ 2.833,33 − 1 ≈ <strong>1,46 %</strong> (Probe: 1,04 ÷ 1,025 − 1 ≈ 1,46 %; Näherung 4 % − 2,5 % = 1,5 %).</p>
      <p><strong>d)</strong> Das Unternehmen arbeitet in allen Jahren wirtschaftlich (Wert über 1), und die Umsatzrentabilität steigt von 10 % auf gut 13 %. Der Umsatz wächst bis 2025 um 20 %, und weil 2025 wieder nur 15 Personen beschäftigt sind, steigt die Produktivität je Beschäftigten ebenfalls um 20 %. Die Beschäftigten haben real etwa 1,5 % mehr Kaufkraft, weil ihr Gehalt stärker gestiegen ist als die Preise.</p>`
    },
    {
      id: "e-gehalt-bbg",
      topic: "sozialversicherung",
      title: "Gehaltsabrechnung über der Beitragsbemessungsgrenze",
      level: 3,
      exam: ["AP2"],
      task: `<p>Kira (35, verheiratet, ein Kind, evangelisch, Steuerklasse IV) ist IT-Sicherheitsberaterin bei der Holstentor IT AG in Lübeck. Sie erhält 6.200,00 € Monatsgehalt und 40,00 € vermögenswirksame Leistungen vom Arbeitgeber; ihre VL-Sparrate beträgt 40,00 €.</p>
      <p>Vorgaben laut Aufgabe: Lohnsteuer 1.150,00 €, kein Solidaritätszuschlag, Kirchensteuer 9 %. Arbeitnehmeranteile: KV 8,75 %, PV 1,8 %, RV 9,3 %, AV 1,3 %. Beitragsbemessungsgrenzen je Monat: KV/PV 5.812,50 €, RV/AV 8.450,00 €. Versicherungspflichtgrenze der KV: 77.400 € im Jahr.</p>
      <p>a) Erstelle die Entgeltabrechnung bis zum Auszahlungsbetrag.</p>
      <p>b) Um wie viel Euro wären Kiras KV- und PV-Beiträge höher, wenn es keine Beitragsbemessungsgrenze gäbe?</p>
      <p>c) Kira erhält eine Gehaltserhöhung um 300,00 €. Um wie viel steigen ihre Arbeitnehmerbeiträge zu KV, PV, RV und AV?</p>
      <p>d) Könnte Kira nach der Erhöhung in eine private Krankenversicherung wechseln? Rechne mit 12 Monatsgehältern.</p>`,
      solution: `<table><thead><tr><th>Position</th><th>Rechnung</th><th>€</th></tr></thead><tbody>
      <tr><td>Gehalt + VL-Zuschuss</td><td>6.200,00 + 40,00</td><td>6.240,00</td></tr>
      <tr><td>− Lohnsteuer</td><td>laut Vorgabe</td><td>1.150,00</td></tr>
      <tr><td>− Kirchensteuer</td><td>9 % × 1.150,00</td><td>103,50</td></tr>
      <tr><td>− KV</td><td>8,75 % × 5.812,50 (BBG!)</td><td>508,59</td></tr>
      <tr><td>− PV</td><td>1,8 % × 5.812,50 (BBG!)</td><td>104,63</td></tr>
      <tr><td>− RV</td><td>9,3 % × 6.240,00 (unter BBG)</td><td>580,32</td></tr>
      <tr><td>− AV</td><td>1,3 % × 6.240,00</td><td>81,12</td></tr>
      <tr><td>= Nettoentgelt</td><td>6.240,00 − 1.150,00 − 103,50 − 1.274,66</td><td><strong>3.711,84</strong></td></tr>
      <tr><td>− VL-Sparrate</td><td></td><td>40,00</td></tr>
      <tr><td>= Auszahlungsbetrag</td><td></td><td><strong>3.671,84</strong></td></tr>
      </tbody></table>
      <p>Da Kira ein Kind hat, zahlt sie keinen Kinderlosenzuschlag zur Pflegeversicherung.</p>
      <p><strong>b)</strong> Ohne BBG: KV 8,75 % × 6.240,00 = 546,00 € (+37,41 €), PV 1,8 % × 6.240,00 = 112,32 € (+7,69 €) → zusammen <strong>45,10 €</strong> mehr.</p>
      <p><strong>c)</strong> KV und PV steigen <strong>nicht</strong>, weil Kira bereits über der BBG von 5.812,50 € liegt. RV: 9,3 % × 300 = 27,90 €, AV: 1,3 % × 300 = 3,90 € → zusammen <strong>31,80 €</strong> mehr (6.540 € liegen noch unter der BBG von 8.450 €).</p>
      <p><strong>d)</strong> Jahresentgelt vorher 6.240 € × 12 = 74.880 € (unter 77.400 € → versicherungspflichtig). Nachher 6.540 € × 12 = 78.480 € – das liegt über der Versicherungspflichtgrenze. Die Versicherungspflicht endet dann mit Ablauf des Kalenderjahres (vorausgesetzt, das Entgelt liegt auch über der Grenze des Folgejahres). Danach <strong>kann</strong> Kira in die private Krankenversicherung wechseln, muss aber nicht – sie kann auch freiwillig gesetzlich versichert bleiben.</p>`
    },
    {
      id: "e-datenschutz-wiso",
      topic: "lernen-zusammenarbeit",
      title: "Schutzziele, TOM und Auskunftsrecht",
      level: 1,
      exam: ["AP2"],
      task: `<p>Bei der Nordlicht IT GmbH in Heide passieren in einer Woche mehrere Dinge.</p>
      <p>a) Welches Schutzziel ist jeweils verletzt?<br>1. Wegen einer defekten Klimaanlage fällt der Fileserver einen Tag aus.<br>2. Ein Praktikant öffnet einen falsch freigegebenen Ordner und liest die Gehaltsliste.<br>3. Schadsoftware ändert unbemerkt Beträge in der Buchhaltungsdatenbank.<br>4. Eine Mail „vom Geschäftsführer“ kommt in Wahrheit von einer externen Adresse.</p>
      <p>b) Ordne zu – technische oder organisatorische Maßnahme? Festplattenverschlüsselung · Clean-Desk-Richtlinie · Phishing-Schulung · Zwei-Faktor-Authentifizierung · Besucherbuch am Empfang · tägliche automatische Datensicherung</p>
      <p>c) Ein Kunde möchte wissen, welche Daten das Unternehmen über ihn gespeichert hat. Auf welches Recht beruft er sich, und was muss das Unternehmen tun?</p>
      <p>d) Nenne zwei Aufgaben des BSI.</p>`,
      solution: `<p><strong>a)</strong> 1. Verfügbarkeit · 2. Vertraulichkeit · 3. Integrität · 4. Authentizität</p>
      <p><strong>b)</strong> Technisch: Festplattenverschlüsselung, Zwei-Faktor-Authentifizierung, tägliche Datensicherung. Organisatorisch: Clean-Desk-Richtlinie, Phishing-Schulung, Besucherbuch.</p>
      <p><strong>c)</strong> Er nutzt sein <strong>Auskunftsrecht nach Art. 15 DSGVO</strong>. Das Unternehmen muss unverzüglich, in der Regel innerhalb eines Monats, mitteilen, welche Daten es zu welchen Zwecken verarbeitet, an wen sie weitergegeben werden, wie lange sie gespeichert werden und woher sie stammen, und auf Wunsch eine Kopie der Daten zur Verfügung stellen. Vorher muss es prüfen, dass wirklich der Betroffene anfragt.</p>
      <p><strong>d)</strong> z. B. vor Sicherheitslücken und Angriffen warnen (CERT-Bund), den IT-Grundschutz und weitere Standards herausgeben, Produkte und Dienstleister zertifizieren, Behörden, Unternehmen und Bürger beraten.</p>`
    },
  ],
  quiz: [
    { id: "q-ds-1", topic: "duales-system", type: "single", exam: ["AP2"],
      q: "Wie lange darf die Probezeit in einem Berufsausbildungsverhältnis höchstens dauern?",
      options: ["1 Monat", "3 Monate", "4 Monate", "6 Monate", "12 Monate"], answer: 2,
      explain: "§ 20 BBiG: mindestens 1, höchstens 4 Monate. Die 6 Monate sind die Höchstdauer einer vereinbarten Probezeit im normalen Arbeitsverhältnis (§ 622 Abs. 3 BGB) – nicht verwechseln." },
    { id: "q-ds-2", topic: "duales-system", type: "single", exam: ["AP2"],
      q: "Welche Vereinbarung in einem Ausbildungsvertrag ist nichtig?",
      options: ["Die Probezeit beträgt 4 Monate.", "Der Azubi zahlt eine Vertragsstrafe von 1.000 €, wenn er die Ausbildung abbricht.", "Die tägliche Ausbildungszeit beträgt 8 Stunden.", "Der Urlaub richtet sich nach dem geltenden Tarifvertrag.", "Der Ausbildungsnachweis wird elektronisch geführt."], answer: 1,
      explain: "Vertragsstrafen sind nach § 12 BBiG nichtig, ebenso eine Entschädigungszahlung für die Ausbildung. Die übrigen Punkte sind zulässige Vertragsinhalte (Probezeit bis 4 Monate, Ausbildungszeit, Verweis auf Tarifverträge, Form des Ausbildungsnachweises)." },
    { id: "q-ds-3", topic: "duales-system", type: "multi", exam: ["AP2"],
      q: "Welche Aufgaben übernimmt die IHK als zuständige Stelle in der Berufsausbildung?",
      options: ["Abschlussprüfungen abnehmen", "das Verzeichnis der Berufsausbildungsverhältnisse führen", "Berufsschulunterricht erteilen", "die Ausbildungsvergütung auszahlen", "die Eignung von Ausbildungsbetrieben und Ausbildern überwachen"], answer: [0, 1, 4],
      explain: "Die IHK prüft, führt das Verzeichnis, berät und überwacht. Unterricht erteilt die Berufsschule (Land), die Vergütung zahlt der Ausbildungsbetrieb." },
    { id: "q-ds-4", topic: "duales-system", type: "tf", exam: ["AP2"],
      q: "Nach der Probezeit kann der Ausbildungsbetrieb einem Azubi mit einer Frist von 4 Wochen ordentlich kündigen.",
      answer: false,
      explain: "Falsch. Nach der Probezeit kann der Betrieb nur noch fristlos aus wichtigem Grund kündigen. Die 4-Wochen-Frist gibt es nur für den Azubi, wenn er die Ausbildung aufgibt oder den Beruf wechseln will." },
    { id: "q-ds-5", topic: "duales-system", type: "input", exam: ["AP2"],
      q: "Ausbildungsbeginn ist der 01.08.2026, die Probezeit beträgt 4 Monate. An welchem Tag endet die Probezeit? (Format TT.MM.JJJJ)",
      answer: ["30.11.2026", "30.11.26", "30. November 2026"],
      explain: "Eine Frist, die mit dem Beginn eines Tages anfängt, endet mit Ablauf des Tages vor dem gleichen Kalendertag: 01.08. + 4 Monate → 30.11.2026." },
    { id: "q-ds-6", topic: "duales-system", type: "single", exam: ["AP2"],
      q: "Was regelt der Ausbildungsrahmenplan?",
      options: ["die sachliche und zeitliche Gliederung der betrieblichen Ausbildung", "die Lernfelder der Berufsschule", "die Höhe der Ausbildungsvergütung", "die Termine der Abschlussprüfung", "die Pausenzeiten im Betrieb"], answer: 0,
      explain: "Der Ausbildungsrahmenplan ist Teil der Ausbildungsordnung und gliedert die betriebliche Ausbildung sachlich und zeitlich. Die Lernfelder stehen im Rahmenlehrplan der KMK, die Vergütung im Vertrag bzw. Tarifvertrag." },
    { id: "q-az-1", topic: "arbeitszeit-schutz", type: "single", exam: ["AP2"],
      q: "Eine 17-jährige Auszubildende arbeitet 7 Stunden am Tag. Wie lang müssen ihre Ruhepausen insgesamt mindestens sein?",
      options: ["15 Minuten", "30 Minuten", "45 Minuten", "60 Minuten", "90 Minuten"], answer: 3,
      explain: "JArbSchG: mehr als 4,5 bis 6 Stunden → 30 min, mehr als 6 Stunden → 60 min. Die 45 Minuten gelten nach dem ArbZG für Erwachsene bei mehr als 9 Stunden." },
    { id: "q-az-2", topic: "arbeitszeit-schutz", type: "input", exam: ["AP2"],
      q: "Jonas ist am 1. Januar 16 Jahre alt und wird im März 17. Wie viele Werktage Urlaub stehen ihm in diesem Jahr nach dem JArbSchG mindestens zu? (Zahl)",
      answer: ["27", "27 Werktage"],
      explain: "Maßgeblich ist das Alter zu Beginn des Kalenderjahres: noch nicht 17 → 27 Werktage. Der Geburtstag im März ändert daran nichts." },
    { id: "q-az-3", topic: "arbeitszeit-schutz", type: "single", exam: ["AP2"],
      q: "Wie viele Arbeitstage Urlaub hat ein erwachsener Arbeitnehmer mit 5-Tage-Woche nach dem Bundesurlaubsgesetz mindestens?",
      options: ["18 Arbeitstage", "20 Arbeitstage", "24 Arbeitstage", "25 Arbeitstage", "30 Arbeitstage"], answer: 1,
      explain: "Das BUrlG nennt 24 Werktage (Montag bis Samstag). Umgerechnet auf 5 Arbeitstage: 24 × 5 ÷ 6 = 20 Arbeitstage. 24 wäre die Zahl in Werktagen." },
    { id: "q-az-4", topic: "arbeitszeit-schutz", type: "multi", exam: ["AP2"],
      q: "Welche Aussagen zum Arbeitszeitgesetz (Erwachsene) sind richtig?",
      options: ["Die werktägliche Arbeitszeit beträgt 8 Stunden, mit Ausgleich bis zu 10 Stunden.", "Nach Arbeitsende ist eine ununterbrochene Ruhezeit von mindestens 11 Stunden einzuhalten.", "Bei 8 Stunden Arbeit ist eine Pause von 45 Minuten vorgeschrieben.", "Der Samstag zählt als Werktag.", "Ruhepausen zählen zur Arbeitszeit."], answer: [0, 1, 3],
      explain: "Richtig: 8/10 Stunden, 11 Stunden Ruhezeit, Samstag ist Werktag. Bei mehr als 6 bis 9 Stunden reichen 30 Minuten Pause; 45 Minuten erst bei mehr als 9 Stunden. Pausen gehören nicht zur Arbeitszeit." },
    { id: "q-az-5", topic: "arbeitszeit-schutz", type: "tf", exam: ["AP2"],
      q: "Die Schutzfrist nach der Entbindung beträgt nach dem Mutterschutzgesetz im Regelfall 8 Wochen.",
      answer: true,
      explain: "Richtig. Vor der Entbindung sind es 6 Wochen (Arbeit auf eigenen Wunsch möglich), danach 8 Wochen absolutes Beschäftigungsverbot, bei Früh- oder Mehrlingsgeburten 12 Wochen." },
    { id: "q-az-6", topic: "arbeitszeit-schutz", type: "single", exam: ["AP2"],
      q: "Ein 17-jähriger Azubi hat dienstags und donnerstags je 6 Unterrichtsstunden à 45 Minuten. Was gilt?",
      options: ["Er ist dienstags und donnerstags beschäftigungsfrei.", "Er ist an einem der zwei Schultage beschäftigungsfrei; am anderen muss er nach der Schule in den Betrieb, soweit Arbeitszeit übrig ist.", "Er muss dienstags und donnerstags nach der Schule in den Betrieb.", "Die Schultage werden nicht auf die Arbeitszeit angerechnet.", "Er ist nur beschäftigungsfrei, wenn die Schule nach 13 Uhr endet."], answer: 1,
      explain: "Der Berufsschultag mit mehr als 5 Unterrichtsstunden ist nur einmal pro Woche beschäftigungsfrei (und zählt mit 8 Stunden). Am zweiten Schultag wird die Unterrichtszeit angerechnet, danach kann Arbeit im Betrieb folgen." },
    { id: "q-av-1", topic: "arbeitsvertrag-zeugnis", type: "single", exam: ["AP2"],
      q: "Welche Formulierung im Arbeitszeugnis entspricht der Note „gut“?",
      options: ["stets zu unserer vollsten Zufriedenheit", "stets zu unserer vollen Zufriedenheit", "zu unserer Zufriedenheit", "im Großen und Ganzen zu unserer Zufriedenheit", "hat sich bemüht, die Aufgaben zu erledigen"], answer: 1,
      explain: "„stets … vollen“ = gut. „stets … vollsten“ = sehr gut, „zu unserer Zufriedenheit“ = ausreichend, „im Großen und Ganzen“ = mangelhaft, „bemüht“ = ungenügend." },
    { id: "q-av-2", topic: "arbeitsvertrag-zeugnis", type: "single", exam: ["AP2"],
      q: "Eine Arbeitnehmerin streitet mit ihrer Krankenkasse über die Zahlung von Krankengeld; ihr Widerspruch wurde abgelehnt. Welches Gericht ist zuständig?",
      options: ["Arbeitsgericht", "Sozialgericht", "Amtsgericht", "Finanzgericht", "Verwaltungsgericht"], answer: 1,
      explain: "Streitigkeiten mit Sozialversicherungsträgern gehören vor die Sozialgerichte. Das Arbeitsgericht entscheidet Streit zwischen Arbeitgeber und Arbeitnehmer, das Finanzgericht Steuerfragen." },
    { id: "q-av-3", topic: "arbeitsvertrag-zeugnis", type: "multi", exam: ["AP2"],
      q: "Was enthält ein qualifiziertes Arbeitszeugnis?",
      options: ["Art und Dauer der Tätigkeit", "eine Beurteilung der Leistung", "eine Beurteilung des Verhaltens", "die Gründe für Krankheitszeiten", "die Mitgliedschaft in einer Gewerkschaft"], answer: [0, 1, 2],
      explain: "Das qualifizierte Zeugnis ergänzt das einfache Zeugnis (Art und Dauer) um Leistung und Verhalten. Krankheiten oder Gewerkschaftszugehörigkeit gehören nicht hinein – das würde gegen das Wohlwollensgebot und den Datenschutz verstoßen." },
    { id: "q-av-4", topic: "arbeitsvertrag-zeugnis", type: "tf", exam: ["AP2"],
      q: "In der ersten Instanz vor dem Arbeitsgericht trägt jede Partei ihre Anwaltskosten selbst – auch die Partei, die den Prozess gewinnt.",
      answer: true,
      explain: "Richtig (§ 12a ArbGG). Damit soll das Kostenrisiko für Arbeitnehmer gering bleiben. Ein Anwalt ist in der ersten Instanz außerdem nicht vorgeschrieben." },
    { id: "q-av-5", topic: "arbeitsvertrag-zeugnis", type: "single", exam: ["AP2"],
      q: "Welches Merkmal gehört NICHT zu den im Allgemeinen Gleichbehandlungsgesetz (AGG) geschützten Merkmalen?",
      options: ["Alter", "Religion oder Weltanschauung", "Behinderung", "Höhe des Schulabschlusses", "sexuelle Identität"], answer: 3,
      explain: "Das AGG schützt ethnische Herkunft, Geschlecht, Religion/Weltanschauung, Behinderung, Alter und sexuelle Identität. Anforderungen an Abschlüsse sind zulässig, wenn sie sachlich begründet sind." },
    { id: "q-av-6", topic: "arbeitsvertrag-zeugnis", type: "single", exam: ["AP2"],
      q: "In welcher Stadt sitzt das Bundesarbeitsgericht?",
      options: ["Kassel", "Erfurt", "Karlsruhe", "Leipzig", "Kiel"], answer: 1,
      explain: "Das BAG sitzt in Erfurt. In Kassel sitzt das Bundessozialgericht, in Karlsruhe der Bundesgerichtshof und das Bundesverfassungsgericht, in Kiel das Landesarbeitsgericht Schleswig-Holstein." },
    { id: "q-k-1", topic: "kuendigung", type: "single", exam: ["AP2"],
      q: "Ein Arbeitnehmer ist seit 3 Jahren im Betrieb. Welche Frist muss der Arbeitgeber bei einer ordentlichen Kündigung ohne abweichende Vereinbarung einhalten?",
      options: ["2 Wochen", "4 Wochen zum 15. oder zum Monatsende", "1 Monat zum Monatsende", "2 Monate zum Monatsende", "3 Monate zum Monatsende"], answer: 2,
      explain: "§ 622 Abs. 2 BGB: ab 2 Jahren Betriebszugehörigkeit 1 Monat zum Monatsende, ab 5 Jahren 2 Monate, ab 8 Jahren 3 Monate. Die Grundfrist von 4 Wochen gilt für den Arbeitgeber nur in den ersten 2 Jahren." },
    { id: "q-k-2", topic: "kuendigung", type: "input", exam: ["AP2"],
      q: "Eine Arbeitnehmerin kündigt selbst; die Kündigung geht dem Arbeitgeber am 20.03.2026 zu. Es gilt die gesetzliche Frist. An welchem Tag endet das Arbeitsverhältnis? (TT.MM.JJJJ)",
      answer: ["30.04.2026", "30.04.26", "30. April 2026"],
      explain: "Grundfrist 4 Wochen zum 15. oder Monatsende: 20.03. + 28 Tage = 17.04. Der nächste zulässige Termin ist der 30.04.2026 (der 15.04. ist schon zu früh)." },
    { id: "q-k-3", topic: "kuendigung", type: "single", exam: ["AP2"],
      q: "Innerhalb welcher Frist nach Zugang der Kündigung muss eine Kündigungsschutzklage erhoben werden?",
      options: ["1 Woche", "2 Wochen", "3 Wochen", "4 Wochen", "1 Monat"], answer: 2,
      explain: "§ 4 KSchG: 3 Wochen nach Zugang. Die 2 Wochen gehören zur außerordentlichen Kündigung (Ausschlussfrist für den Kündigenden nach Kenntnis des Grundes)." },
    { id: "q-k-4", topic: "kuendigung", type: "multi", exam: ["AP2"],
      q: "Welche Voraussetzungen müssen erfüllt sein, damit der allgemeine Kündigungsschutz nach dem KSchG greift?",
      options: ["Im Betrieb sind regelmäßig mehr als 10 Arbeitnehmer beschäftigt.", "Das Arbeitsverhältnis besteht länger als 6 Monate.", "Der Arbeitnehmer ist Mitglied einer Gewerkschaft.", "Im Betrieb gibt es einen Betriebsrat.", "Der Arbeitnehmer ist älter als 25 Jahre."], answer: [0, 1],
      explain: "Nur Betriebsgröße (mehr als 10 AN, Azubis zählen nicht) und Wartezeit (mehr als 6 Monate) sind Voraussetzungen. Gewerkschaft, Betriebsrat und Alter spielen dafür keine Rolle." },
    { id: "q-k-5", topic: "kuendigung", type: "tf", exam: ["AP2"],
      q: "Eine Kündigung per E-Mail ist wirksam, wenn sie eine eingescannte Unterschrift enthält.",
      answer: false,
      explain: "Falsch. § 623 BGB verlangt die Schriftform mit eigenhändiger Unterschrift auf Papier; die elektronische Form ist ausdrücklich ausgeschlossen." },
    { id: "q-k-6", topic: "kuendigung", type: "single", exam: ["AP2"],
      q: "Innerhalb welcher Frist nach Kenntnis des wichtigen Grundes muss eine außerordentliche Kündigung erklärt werden?",
      options: ["sofort am selben Tag", "innerhalb von 3 Tagen", "innerhalb von 2 Wochen", "innerhalb von 4 Wochen", "innerhalb von 3 Monaten"], answer: 2,
      explain: "§ 626 Abs. 2 BGB (und § 22 BBiG für Azubis): 2 Wochen ab Kenntnis der Tatsachen. Wer länger wartet, zeigt, dass die Fortsetzung doch zumutbar war." },
    { id: "q-t-1", topic: "tarifvertrag", type: "single", exam: ["AP2"],
      q: "Was versteht man unter der Friedenspflicht?",
      options: ["Während der Laufzeit eines Tarifvertrags sind Arbeitskämpfe über die darin geregelten Inhalte verboten.", "Arbeitgeber und Betriebsrat müssen Streitigkeiten vor der Einigungsstelle klären.", "Arbeitnehmer dürfen während ihrer Probezeit nicht streiken.", "Beamte dürfen grundsätzlich nicht streiken.", "Der Staat darf sich nicht in Tarifverhandlungen einmischen."], answer: 0,
      explain: "Die Friedenspflicht gehört zum Tarifvertrag: Solange er läuft, wird über seine Inhalte nicht gestreikt. Die Einigungsstelle gehört zum BetrVG, das Streikverbot der Beamten folgt aus dem Beamtenrecht, die Nichteinmischung des Staates ist die Tarifautonomie." },
    { id: "q-t-2", topic: "tarifvertrag", type: "single", exam: ["AP2"],
      q: "Welche Regelung steht typischerweise in einem Manteltarifvertrag?",
      options: ["die Höhe der Monatsentgelte je Entgeltgruppe", "die wöchentliche Arbeitszeit und die Zahl der Urlaubstage", "die Lohnsteuertabelle", "die Beitragssätze der Sozialversicherung", "die Termine der nächsten Betriebsratswahl"], answer: 1,
      explain: "Der Mantel- oder Rahmentarifvertrag regelt allgemeine Arbeitsbedingungen wie Arbeitszeit, Urlaub, Zuschläge und Kündigungsfristen und läuft meist mehrere Jahre. Entgelthöhen stehen im Entgelttarifvertrag; Steuern und Sozialabgaben legt der Gesetzgeber fest." },
    { id: "q-t-3", topic: "tarifvertrag", type: "multi", exam: ["AP2"],
      q: "Welche Aussagen zum Tarifvertrag sind richtig?",
      options: ["Tarifparteien sind Gewerkschaften und Arbeitgeberverbände oder einzelne Arbeitgeber.", "Die IHK schließt Tarifverträge für ihre Mitgliedsunternehmen ab.", "Nach dem Günstigkeitsprinzip darf ein Arbeitsvertrag zugunsten des Arbeitnehmers vom Tarifvertrag abweichen.", "Das Bundesarbeitsministerium kann einen Tarifvertrag für allgemeinverbindlich erklären.", "Ein Streik ist zulässig, sobald der Betriebsrat dazu aufruft."], answer: [0, 2, 3],
      explain: "Die IHK ist eine Kammer mit Pflichtmitgliedschaft und keine Tarifpartei. Der Betriebsrat darf keinen Arbeitskampf führen; zum Streik ruft nur eine Gewerkschaft auf." },
    { id: "q-t-4", topic: "tarifvertrag", type: "tf", exam: ["AP2"],
      q: "Während eines Streiks zahlt die Agentur für Arbeit den Streikenden Arbeitslosengeld.",
      answer: false,
      explain: "Falsch. Die Arbeitsagentur muss im Arbeitskampf neutral bleiben und zahlt nichts. Streikende erhalten keinen Lohn; Gewerkschaftsmitglieder bekommen Streikgeld von ihrer Gewerkschaft." },
    { id: "q-m-1", topic: "mitbestimmung", type: "single", exam: ["AP2"],
      q: "Ab welcher Betriebsgröße kann ein Betriebsrat gewählt werden?",
      options: ["ab 5 ständigen wahlberechtigten Arbeitnehmern, von denen 3 wählbar sind", "ab 10 Arbeitnehmern", "ab 20 Arbeitnehmern", "ab 50 Arbeitnehmern", "ab 100 Arbeitnehmern"], answer: 0,
      explain: "§ 1 BetrVG: mindestens 5 ständige wahlberechtigte Arbeitnehmer, davon 3 wählbar. Die Zahl 10 gehört zum Kündigungsschutzgesetz, 20 zum Zustimmungsrecht bei Einstellungen (§ 99)." },
    { id: "q-m-2", topic: "mitbestimmung", type: "single", exam: ["AP2"],
      q: "Die Geschäftsleitung will ein Tool einführen, das die Bearbeitungszeit jedes Mitarbeiters im Ticketsystem auswertet. Welches Beteiligungsrecht hat der Betriebsrat?",
      options: ["nur ein Informationsrecht", "ein Anhörungsrecht", "ein Beratungsrecht", "ein Widerspruchsrecht", "ein echtes Mitbestimmungsrecht"], answer: 4,
      explain: "Technische Einrichtungen, die Verhalten oder Leistung überwachen können, unterliegen der echten Mitbestimmung (§ 87 Abs. 1 Nr. 6 BetrVG). Ohne Zustimmung des Betriebsrats darf das Tool nicht eingeführt werden; bei Streit entscheidet die Einigungsstelle." },
    { id: "q-m-3", topic: "mitbestimmung", type: "tf", exam: ["AP2"],
      q: "Eine Kündigung, die ohne Anhörung des bestehenden Betriebsrats ausgesprochen wird, ist unwirksam.",
      answer: true,
      explain: "Richtig (§ 102 BetrVG). Der Betriebsrat muss vor jeder Kündigung gehört werden. Er kann sie zwar nicht verhindern, aber ohne Anhörung ist sie unwirksam." },
    { id: "q-m-4", topic: "mitbestimmung", type: "multi", exam: ["AP2"],
      q: "Wer darf in einem privaten Unternehmen die Jugend- und Auszubildendenvertretung wählen?",
      options: ["eine 17-jährige Beschäftigte, die bereits ausgelernt hat", "ein 26-jähriger Auszubildender", "ein 22-jähriger Systemadministrator ohne Ausbildungsverhältnis", "ein 16-jähriger Auszubildender", "ein 19-jähriger Werkstudent"], answer: [0, 1, 3],
      explain: "Wahlberechtigt sind alle Beschäftigten unter 18 und alle Auszubildenden – seit 2021 ohne Altersgrenze. Der 22-jährige Administrator ist zwar wählbar (unter 25), darf aber nicht mitwählen; der Werkstudent ist weder unter 18 noch Azubi." },
    { id: "q-m-5", topic: "mitbestimmung", type: "input", exam: ["AP2"],
      q: "Ein Betrieb hat 150 wahlberechtigte Arbeitnehmer. Aus wie vielen Mitgliedern besteht der Betriebsrat? (Zahl)",
      answer: ["7", "7 Mitglieder"],
      explain: "Staffel nach § 9 BetrVG: 5–20 → 1, 21–50 → 3, 51–100 → 5, 101–200 → 7 Mitglieder." },
    { id: "q-m-6", topic: "mitbestimmung", type: "single", exam: ["AP2"],
      q: "Welches Gremium vertritt die Beschäftigten einer Kreisverwaltung in Schleswig-Holstein?",
      options: ["ein Betriebsrat nach dem Betriebsverfassungsgesetz", "ein Personalrat nach dem Mitbestimmungsgesetz Schleswig-Holstein", "der Aufsichtsrat", "die Gewerkschaft ver.di", "die Industrie- und Handelskammer"], answer: 1,
      explain: "Im öffentlichen Dienst gilt nicht das BetrVG, sondern das Personalvertretungsrecht – für Land und Kommunen in Schleswig-Holstein das MBG Schl.-H. Verhandlungspartner ist die Dienststellenleitung." },
    { id: "q-sv-1", topic: "sozialversicherung", type: "single", exam: ["AP2"],
      q: "Wer trägt die Beiträge zur gesetzlichen Unfallversicherung?",
      options: ["der Arbeitnehmer allein", "der Arbeitgeber allein", "Arbeitgeber und Arbeitnehmer je zur Hälfte", "der Staat aus Steuermitteln", "die Krankenkasse"], answer: 1,
      explain: "Die Unfallversicherung (Berufsgenossenschaft) wird allein vom Arbeitgeber finanziert – im Gegenzug haftet er bei Arbeitsunfällen grundsätzlich nicht persönlich. Kranken-, Pflege-, Renten- und Arbeitslosenversicherung werden grundsätzlich geteilt." },
    { id: "q-sv-2", topic: "sozialversicherung", type: "single", exam: ["AP2"],
      q: "Welcher Träger ist für die Arbeitslosenversicherung zuständig?",
      options: ["Deutsche Rentenversicherung", "Bundesagentur für Arbeit", "Berufsgenossenschaft", "Krankenkasse", "Finanzamt"], answer: 1,
      explain: "Träger der Arbeitslosenversicherung ist die Bundesagentur für Arbeit (Arbeitslosengeld, Vermittlung, Weiterbildungsförderung). Die Krankenkasse zieht die Beiträge nur als Einzugsstelle ein." },
    { id: "q-sv-3", topic: "sozialversicherung", type: "multi", exam: ["AP2"],
      q: "Welche Positionen werden vom Bruttoentgelt abgezogen, um das Nettoentgelt zu ermitteln?",
      options: ["Lohnsteuer", "Kirchensteuer", "Arbeitnehmeranteil zur Rentenversicherung", "Beitrag zur Unfallversicherung", "vermögenswirksame Sparrate"], answer: [0, 1, 2],
      explain: "Brutto − Steuern − Arbeitnehmeranteile zur Sozialversicherung = Netto. Die Unfallversicherung zahlt der Arbeitgeber allein. Die VL-Sparrate wird erst vom Netto abgezogen und führt zum Auszahlungsbetrag." },
    { id: "q-sv-4", topic: "sozialversicherung", type: "input", exam: ["AP2"],
      q: "Ein Arbeitnehmer in Schleswig-Holstein zahlt 240,00 € Lohnsteuer und ist Kirchenmitglied (Kirchensteuersatz 9 %). Wie hoch ist die Kirchensteuer in Euro?",
      answer: ["21,60", "21,6", "21,60 €", "21,60 Euro"],
      explain: "Die Kirchensteuer bemisst sich an der Lohnsteuer, nicht am Brutto: 240,00 € × 9 % = 21,60 €." },
    { id: "q-sv-5", topic: "sozialversicherung", type: "tf", exam: ["AP2"],
      q: "Die gesetzliche Rentenversicherung ist im Umlageverfahren finanziert: Die Beiträge der heutigen Beschäftigten bezahlen die heutigen Renten.",
      answer: true,
      explain: "Richtig – man spricht vom Generationenvertrag. Deshalb belastet der demografische Wandel (weniger Beitragszahler, mehr Rentner) das System." },
    { id: "q-u-1", topic: "unternehmensformen", type: "single", exam: ["AP2"],
      q: "Welches Mindestkapital ist für die Gründung einer GmbH vorgeschrieben?",
      options: ["1 €", "12.500 €", "25.000 €", "50.000 €", "kein Mindestkapital"], answer: 2,
      explain: "Das Stammkapital der GmbH beträgt mindestens 25.000 €, davon müssen bei Gründung mindestens 12.500 € eingezahlt sein. 1 € reicht bei der UG (haftungsbeschränkt), 50.000 € ist das Grundkapital der AG." },
    { id: "q-u-2", topic: "unternehmensformen", type: "single", exam: ["AP2"],
      q: "Welcher Gesellschafter haftet nur bis zur Höhe seiner Einlage?",
      options: ["der Komplementär einer KG", "der Kommanditist einer KG", "der Gesellschafter einer OHG", "der Inhaber eines Einzelunternehmens", "der Gesellschafter einer GbR"], answer: 1,
      explain: "Der Kommanditist ist Teilhafter. Komplementär, OHG- und GbR-Gesellschafter sowie Einzelunternehmer haften unbeschränkt, auch mit ihrem Privatvermögen." },
    { id: "q-u-3", topic: "unternehmensformen", type: "multi", exam: ["AP2"],
      q: "Welche Unternehmen werden in Abteilung B des Handelsregisters eingetragen?",
      options: ["GmbH", "AG", "KG", "OHG", "UG (haftungsbeschränkt)"], answer: [0, 1, 4],
      explain: "Abteilung B (HRB) ist für Kapitalgesellschaften. KG und OHG sind Personenhandelsgesellschaften und stehen – wie der eingetragene Kaufmann – in Abteilung A." },
    { id: "q-u-4", topic: "unternehmensformen", type: "single", exam: ["AP2"],
      q: "Welche Organe hat eine Aktiengesellschaft?",
      options: ["Vorstand, Aufsichtsrat und Hauptversammlung", "Geschäftsführer und Gesellschafterversammlung", "Komplementär und Kommanditist", "Inhaber und Prokurist", "Betriebsrat und Wirtschaftsausschuss"], answer: 0,
      explain: "Der Vorstand leitet, der Aufsichtsrat kontrolliert, die Hauptversammlung der Aktionäre entscheidet z. B. über die Gewinnverwendung. Geschäftsführer und Gesellschafterversammlung sind Organe der GmbH." },
    { id: "q-u-5", topic: "unternehmensformen", type: "tf", exam: ["AP1", "AP2"],
      q: "Ein Prokurist darf ohne besondere Befugnis ein Betriebsgrundstück verkaufen.",
      answer: false,
      explain: "Falsch. Veräußerung und Belastung von Grundstücken sind von der Prokura nur mit besonderer Befugnis gedeckt. Andere Geschäfte wie Kreditaufnahme oder Einstellungen darf der Prokurist dagegen abschließen." },
    { id: "q-u-6", topic: "unternehmensformen", type: "input", exam: ["AP2"],
      q: "In einer OHG hat A 90.000 € und B 60.000 € eingelegt; der Vertrag regelt nur die Einlagen. Der Jahresgewinn beträgt 50.000 €. Wie viel Euro erhält A nach der seit 2024 geltenden Regel?",
      answer: ["30000", "30.000", "30.000 €", "30000 €", "30.000 Euro"],
      explain: "Ohne vereinbarte Beteiligungsverhältnisse wird nach dem Verhältnis der Einlagen verteilt: 90.000 : 60.000 = 3 : 2. A erhält 50.000 € × 3/5 = 30.000 €, B 20.000 €." },
    { id: "q-b-1", topic: "betrieb-ziele", type: "single", exam: ["AP2"],
      q: "Welchem Wirtschaftssektor gehört ein Hersteller von Leiterplatten an?",
      options: ["primärer Sektor", "sekundärer Sektor", "tertiärer Sektor", "quartärer Sektor"], answer: 1,
      explain: "Die Be- und Verarbeitung (Industrie, Handwerk) bildet den sekundären Sektor. Primär ist die Urproduktion (z. B. Fischerei), tertiär sind Dienstleistungen wie ein IT-Systemhaus, quartär der Informations- und Wissenssektor." },
    { id: "q-b-2", topic: "betrieb-ziele", type: "single", exam: ["AP1", "AP2"],
      q: "Ein Unternehmen stellt auf energieeffiziente Server um; dadurch sinken Stromkosten und CO₂-Ausstoß. Welche Zielbeziehung liegt vor?",
      options: ["Zielharmonie", "Zielkonflikt", "Zielneutralität", "Zielverzicht"], answer: 0,
      explain: "Das ökonomische Ziel (Kosten senken) und das ökologische Ziel (Emissionen senken) fördern sich gegenseitig – das ist Zielharmonie. Beim Zielkonflikt behindert ein Ziel das andere, bei Zielneutralität besteht kein Einfluss." },
    { id: "q-b-3", topic: "betrieb-ziele", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Merkmale treffen auf das Stabliniensystem zu?",
      options: ["Jede Stelle hat genau einen weisungsberechtigten Vorgesetzten.", "Stabsstellen beraten die Leitung, haben aber keine Weisungsbefugnis gegenüber der Linie.", "Mitarbeitende erhalten Anweisungen von mehreren gleichrangigen Fachvorgesetzten.", "Ein typisches Beispiel für eine Stabsstelle ist der Datenschutzbeauftragte.", "Das Unternehmen ist nach Produkten in eigenständige Ergebnisbereiche gegliedert."], answer: [0, 1, 3],
      explain: "Das Stabliniensystem ist ein Einliniensystem mit beratenden Stabsstellen. Mehrere Fachvorgesetzte kennzeichnen das Mehrliniensystem, die Gliederung nach Produkten die Spartenorganisation." },
    { id: "q-b-4", topic: "betrieb-ziele", type: "single", exam: ["AP2"],
      q: "Welche Zielsetzung verfolgt ein kommunales Hallenbad typischerweise?",
      options: ["Gewinnmaximierung", "Förderung der Mitglieder einer Genossenschaft", "Zuschussprinzip: Leistung für die Bevölkerung, Verluste trägt der öffentliche Träger", "Maximierung des Marktanteils", "hohe Dividende für die Aktionäre"], answer: 2,
      explain: "Schwimmbäder, Theater oder Büchereien decken ihre Kosten meist nicht; die Kommune gleicht aus (Zuschussprinzip). Gewinnmaximierung ist erwerbswirtschaftlich, Mitgliederförderung genossenschaftlich." },
    { id: "q-w-1", topic: "wirtschaften-grundlagen", type: "single", exam: ["AP2"],
      q: "Mit einem festen Budget von 10.000 € sollen möglichst viele Headsets für den Support beschafft werden. Welches Prinzip liegt vor?",
      options: ["Maximalprinzip", "Minimalprinzip", "Optimumprinzip", "Solidaritätsprinzip", "Subsidiaritätsprinzip"], answer: 0,
      explain: "Der Mitteleinsatz ist vorgegeben, der Erfolg (Anzahl) soll maximal sein → Maximalprinzip. Beim Minimalprinzip wäre die Anzahl fest und die Kosten sollen minimal sein. Solidarität und Subsidiarität sind Prinzipien der sozialen Sicherung." },
    { id: "q-w-2", topic: "wirtschaften-grundlagen", type: "multi", exam: ["AP2"],
      q: "Welche Beispiele zählen bei einem PC-Montagebetrieb zu den Betriebsmitteln?",
      options: ["Montagetisch", "Messgerät", "Wärmeleitpaste", "Firmenfahrzeug für den Kundendienst", "eingebaute SSD"], answer: [0, 1, 3],
      explain: "Betriebsmittel sind Anlagen und Ausstattung, die für die Leistungserstellung genutzt, aber nicht verbraucht werden. Wärmeleitpaste ist ein Hilfsstoff, die eingebaute SSD ein Fertigteil – beide gehören zu den Werkstoffen." },
    { id: "q-w-3", topic: "wirtschaften-grundlagen", type: "tf", exam: ["AP2"],
      q: "Im einfachen Wirtschaftskreislauf fließen Güterstrom und Geldstrom in dieselbe Richtung.",
      answer: false,
      explain: "Falsch. Die Ströme laufen entgegengesetzt: Haushalte liefern Arbeitsleistung und erhalten Einkommen; Unternehmen liefern Konsumgüter und erhalten Konsumausgaben." },
    { id: "q-w-4", topic: "wirtschaften-grundlagen", type: "single", exam: ["AP2"],
      q: "Welcher Geldstrom fließt im erweiterten Wirtschaftskreislauf vom Staat zu den Unternehmen?",
      options: ["Subventionen", "Lohnsteuer", "Kindergeld", "Konsumausgaben", "Ersparnisse"], answer: 0,
      explain: "Subventionen (und Zahlungen für Staatsaufträge) fließen vom Staat zu den Unternehmen. Lohnsteuer fließt von Haushalten zum Staat, Kindergeld vom Staat zu Haushalten, Ersparnisse von Haushalten zu Banken." },
    { id: "q-mp-1", topic: "markt-preisbildung", type: "single", exam: ["AP1", "AP2"],
      q: "Der Marktpreis liegt über dem Gleichgewichtspreis. Was ist die Folge?",
      options: ["Es entsteht ein Angebotsüberhang, der Preis sinkt tendenziell.", "Es entsteht ein Nachfrageüberhang, der Preis steigt tendenziell.", "Der Markt ist geräumt.", "Die Nachfrage steigt, weil der Preis hoch ist.", "Das Angebot sinkt auf null."], answer: 0,
      explain: "Bei zu hohem Preis wollen Anbieter mehr verkaufen, als nachgefragt wird → Angebotsüberhang (Käufermarkt). Die Anbieter senken die Preise, bis das Gleichgewicht erreicht ist." },
    { id: "q-mp-2", topic: "markt-preisbildung", type: "single", exam: ["AP1", "AP2"],
      q: "Wenige große Anbieter beliefern sehr viele Nachfrager. Welche Marktform liegt vor?",
      options: ["Angebotsmonopol", "Angebotsoligopol", "Polypol", "Nachfragemonopol", "bilaterales Monopol"], answer: 1,
      explain: "Wenige Anbieter, viele Nachfrager = Angebotsoligopol (z. B. große Cloud-Anbieter). Beim Monopol gibt es nur einen Anbieter, beim Polypol viele." },
    { id: "q-mp-3", topic: "markt-preisbildung", type: "input", exam: ["AP2"],
      q: "Bei einem Preis von 60 € werden 900 Stück nachgefragt und 700 Stück angeboten. Wie hoch ist der Umsatz in Euro?",
      answer: ["42000", "42.000", "42000 €", "42.000 €", "42.000 Euro"],
      explain: "Abgesetzt wird nur die kleinere Menge – hier das Angebot von 700 Stück (es besteht ein Nachfrageüberhang von 200). Umsatz = 60 € × 700 = 42.000 €." },
    { id: "q-mp-4", topic: "markt-preisbildung", type: "tf", exam: ["AP1", "AP2"],
      q: "Auf einem Verkäufermarkt ist die Nachfrage größer als das Angebot.",
      answer: true,
      explain: "Richtig. Die Ware ist knapp, die Verkäufer können die Bedingungen bestimmen (z. B. bei Grafikkarten während einer Chipknappheit). Beim Käufermarkt übersteigt das Angebot die Nachfrage." },
    { id: "q-wo-1", topic: "wirtschaftsordnung", type: "single", exam: ["AP2"],
      q: "Zwei Softwarehäuser sprechen ihre Stundensätze ab, bleiben aber rechtlich selbstständige Unternehmen. Um welche Form handelt es sich?",
      options: ["Kartell", "Konzern", "Fusion", "Genossenschaft", "Franchising"], answer: 0,
      explain: "Eine Absprache rechtlich selbstständiger Unternehmen, die den Wettbewerb beschränkt, ist ein Kartell – grundsätzlich verboten. Beim Konzern stehen die Unternehmen unter einheitlicher Leitung, bei der Fusion verschmelzen sie zu einem." },
    { id: "q-wo-2", topic: "wirtschaftsordnung", type: "multi", exam: ["AP2"],
      q: "Welche Ziele gehören zum magischen Viereck des Stabilitätsgesetzes?",
      options: ["Preisniveaustabilität", "hoher Beschäftigungsstand", "außenwirtschaftliches Gleichgewicht", "stetiges und angemessenes Wirtschaftswachstum", "ausgeglichener Staatshaushalt"], answer: [0, 1, 2, 3],
      explain: "Die vier Ziele des Stabilitätsgesetzes von 1967 sind Preisniveaustabilität, hoher Beschäftigungsstand, außenwirtschaftliches Gleichgewicht und angemessenes Wachstum. Ein ausgeglichener Staatshaushalt gehört nicht dazu; zum Sechseck kommen gerechte Einkommensverteilung und Umweltschutz hinzu." },
    { id: "q-wo-3", topic: "wirtschaftsordnung", type: "single", exam: ["AP2"],
      q: "Ein PC-Hersteller übernimmt einen Chiphersteller. Welche Art von Zusammenschluss ist das?",
      options: ["horizontaler Zusammenschluss", "vertikaler Zusammenschluss", "diagonaler Zusammenschluss", "Kartell ohne Kapitalbeteiligung"], answer: 1,
      explain: "Chip- und PC-Hersteller arbeiten auf aufeinanderfolgenden Produktionsstufen → vertikal. Horizontal wäre ein Zusammenschluss zweier PC-Hersteller, diagonal einer mit einer branchenfremden Firma." },
    { id: "q-wo-4", topic: "wirtschaftsordnung", type: "tf", exam: ["AP2"],
      q: "In der sozialen Marktwirtschaft setzt der Staat einen Rahmen, z. B. durch Wettbewerbsschutz und soziale Sicherung, überlässt die Preisbildung aber grundsätzlich dem Markt.",
      answer: true,
      explain: "Richtig – „so viel Markt wie möglich, so viel Staat wie nötig“. In der Zentralverwaltungswirtschaft würde der Staat Preise und Produktion planen, in der freien Marktwirtschaft gäbe es keinen sozialen Ausgleich." },
    { id: "q-kz-1", topic: "kennzahlen", type: "single", exam: ["AP1", "AP2"],
      q: "Ein Unternehmen erzielt 800.000 € Umsatz bei 640.000 € Kosten. Wie hoch ist die Wirtschaftlichkeit?",
      options: ["0,8", "1,25", "1,6", "20 %", "160.000 €"], answer: 1,
      explain: "Wirtschaftlichkeit = Ertrag ÷ Aufwand = 800.000 ÷ 640.000 = 1,25. 0,8 wäre der Kehrwert, 160.000 € ist der Gewinn und 20 % die Umsatzrentabilität." },
    { id: "q-kz-2", topic: "kennzahlen", type: "input", exam: ["AP1", "AP2"],
      q: "Gewinn 60.000 €, Eigenkapital 400.000 €. Wie hoch ist die Eigenkapitalrentabilität in Prozent? (Zahl)",
      answer: ["15", "15 %", "15%", "15,0"],
      explain: "Eigenkapitalrentabilität = Gewinn × 100 ÷ Eigenkapital = 60.000 × 100 ÷ 400.000 = 15 %." },
    { id: "q-kz-3", topic: "kennzahlen", type: "single", exam: ["AP1", "AP2"],
      q: "Welche Kennzahl beschreibt ein reines Mengenverhältnis von Ausbringung zu Einsatz, z. B. gelöste Tickets je Stunde?",
      options: ["Produktivität", "Wirtschaftlichkeit", "Eigenkapitalrentabilität", "Umsatzrentabilität", "Indexzahl"], answer: 0,
      explain: "Produktivität misst Mengen (Output ÷ Input). Wirtschaftlichkeit vergleicht Werte (Ertrag ÷ Aufwand), Rentabilität setzt den Gewinn ins Verhältnis zu Kapital oder Umsatz." },
    { id: "q-kz-4", topic: "kennzahlen", type: "single", exam: ["AP1", "AP2"],
      q: "Ein Umsatzindex (Basis 2022 = 100) steigt von 125 im Jahr 2024 auf 150 im Jahr 2025. Um wie viel Prozent ist der Umsatz von 2024 auf 2025 gestiegen?",
      options: ["25 %", "20 %", "50 %", "15 %", "125 %"], answer: 1,
      explain: "150 ÷ 125 = 1,2 → +20 %. Die 25 sind Indexpunkte, keine Prozent; 50 % ist der Anstieg gegenüber dem Basisjahr 2022." },
    { id: "q-kz-5", topic: "kennzahlen", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Größen brauchst du, um die Gesamtkapitalrentabilität zu berechnen?",
      options: ["Gewinn", "Fremdkapitalzinsen", "Eigenkapital", "Fremdkapital", "Umsatz"], answer: [0, 1, 2, 3],
      explain: "Gesamtkapitalrentabilität = (Gewinn + Fremdkapitalzinsen) × 100 ÷ (Eigenkapital + Fremdkapital). Der Umsatz wird für die Umsatzrentabilität gebraucht, nicht hier." },
    { id: "q-ag-1", topic: "angebotsvergleich-nwa", type: "single", exam: ["AP1", "AP2"],
      q: "Wovon wird der Liefererskonto in der Bezugskalkulation berechnet?",
      options: ["vom Listeneinkaufspreis", "vom Zieleinkaufspreis", "vom Bareinkaufspreis", "vom Bezugspreis", "von den Bezugskosten"], answer: 1,
      explain: "Reihenfolge: Listeneinkaufspreis − Rabatt = Zieleinkaufspreis − Skonto = Bareinkaufspreis + Bezugskosten = Bezugspreis. Skonto wird also vom Zieleinkaufspreis gerechnet, weil der Rabatt schon abgezogen ist." },
    { id: "q-ag-2", topic: "angebotsvergleich-nwa", type: "input", exam: ["AP1", "AP2"],
      q: "Listeneinkaufspreis 1.000 €, 10 % Rabatt, 2 % Skonto, Bezugskosten 25 €. Wie hoch ist der Bezugspreis in Euro?",
      answer: ["907", "907,00", "907 €", "907,00 €", "907 Euro"],
      explain: "1.000 − 100 (10 %) = 900 Zieleinkaufspreis; 900 − 18 (2 %) = 882 Bareinkaufspreis; 882 + 25 = 907 € Bezugspreis." },
    { id: "q-ag-3", topic: "angebotsvergleich-nwa", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Aussagen zur Nutzwertanalyse sind richtig?",
      options: ["Die Gewichte der Kriterien ergeben zusammen 100 %.", "Der Teilnutzen ist das Produkt aus Gewicht und Punktzahl.", "Das Angebot mit dem niedrigsten Preis gewinnt immer.", "K.-o.-Kriterien werden vor der Punktbewertung geprüft.", "Die Nutzwertanalyse ist frei von subjektiven Einschätzungen."], answer: [0, 1, 3],
      explain: "Die NWA bezieht auch qualitative Kriterien ein, deshalb gewinnt nicht automatisch das billigste Angebot. Gewichte und Punkte beruhen auf Einschätzungen und sind damit subjektiv." },
    { id: "q-ag-4", topic: "angebotsvergleich-nwa", type: "single", exam: ["AP1", "AP2"],
      q: "Ein Lieferer gewährt 2 % Skonto bei Zahlung innerhalb von 10 Tagen, das Zahlungsziel beträgt 40 Tage. Welcher Jahreszins ergibt sich ungefähr (Näherungsformel)?",
      options: ["2 %", "12 %", "24 %", "36 %", "72 %"], answer: 2,
      explain: "Skontosatz × 360 ÷ (Zahlungsziel − Skontofrist) = 2 × 360 ÷ 30 = 24 %. 36 % ergäben sich bei einem Ziel von 30 Tagen." },
    { id: "q-hk-1", topic: "handelskalkulation", type: "single", exam: ["AP1"],
      q: "Worauf bezieht sich der Gewinnzuschlag in der Handelskalkulation?",
      options: ["auf den Selbstkostenpreis", "auf den Bezugspreis", "auf den Listenverkaufspreis", "auf den Barverkaufspreis", "auf den Listeneinkaufspreis"], answer: 0,
      explain: "Selbstkostenpreis + Gewinnzuschlag = Barverkaufspreis. Die Handlungskosten beziehen sich auf den Bezugspreis, Rabatt und Skonto des Kunden auf die späteren Verkaufspreise." },
    { id: "q-hk-2", topic: "handelskalkulation", type: "input", exam: ["AP1"],
      q: "Bezugspreis 400 €, Listenverkaufspreis netto 600 €. Wie hoch ist der Kalkulationszuschlag in Prozent? (Zahl)",
      answer: ["50", "50 %", "50%"],
      explain: "Kalkulationszuschlag = (600 − 400) × 100 ÷ 400 = 50 %. Basis ist der Bezugspreis." },
    { id: "q-hk-3", topic: "handelskalkulation", type: "single", exam: ["AP1"],
      q: "Bezugspreis 400 €, Listenverkaufspreis netto 600 €. Wie hoch ist die Handelsspanne?",
      options: ["50 %", "33,33 %", "66,67 %", "150 %", "200 %"], answer: 1,
      explain: "Handelsspanne = (600 − 400) × 100 ÷ 600 = 33,33 %. Basis ist der Verkaufspreis – deshalb ist die Spanne kleiner als der Kalkulationszuschlag von 50 %." },
    { id: "q-hk-4", topic: "handelskalkulation", type: "tf", exam: ["AP1"],
      q: "Kundenskonto und Kundenrabatt werden in der Vorwärtskalkulation „im Hundert“ berechnet, weil der Kunde sie vom höheren Endpreis abzieht.",
      answer: true,
      explain: "Richtig. Beispiel: Barverkaufspreis 966 € bei 2 % Kundenskonto + 5 % Vertreterprovision (zusammen 7 %) → Zielverkaufspreis = 966 × 100 ÷ 93. Ein einfacher Aufschlag von 7 % auf 966 € wäre zu wenig." },
    { id: "q-hk-5", topic: "handelskalkulation", type: "single", exam: ["AP1"],
      q: "Was ermittelt man mit der Differenzkalkulation?",
      options: ["den Gewinn bei vorgegebenem Einkaufs- und Verkaufspreis", "den höchstens zulässigen Einkaufspreis bei vorgegebenem Verkaufspreis", "den Verkaufspreis aus dem Einkaufspreis", "die Höhe der Handlungskosten", "die Umsatzsteuerzahllast"], answer: 0,
      explain: "Bei der Differenzkalkulation stehen Ein- und Verkaufspreis fest; man rechnet von beiden Seiten zum Selbstkosten- bzw. Barverkaufspreis und erhält den Gewinn als Differenz. Den zulässigen Einkaufspreis liefert die Rückwärtskalkulation, den Verkaufspreis die Vorwärtskalkulation." },
    { id: "q-kv-1", topic: "kaufvertrag", type: "single", exam: ["AP1", "AP2"],
      q: "Wie kommt ein Kaufvertrag zustande?",
      options: ["durch zwei übereinstimmende Willenserklärungen – Antrag und Annahme", "durch die Anfrage des Käufers", "durch die Zusendung eines Katalogs", "erst durch die Bezahlung der Ware", "nur durch die schriftliche Unterschrift von Käufer und Verkäufer"], answer: 0,
      explain: "Ein Vertrag entsteht durch Antrag und Annahme. Anfrage und Katalog sind unverbindlich, die Bezahlung ist bereits die Erfüllung, und Kaufverträge sind grundsätzlich formfrei." },
    { id: "q-kv-2", topic: "kaufvertrag", type: "single", exam: ["AP1", "AP2"],
      q: "Welches Recht muss der Käufer bei einer mangelhaften Lieferung zuerst geltend machen?",
      options: ["Rücktritt vom Vertrag", "Minderung des Kaufpreises", "Nacherfüllung (Nachbesserung oder Ersatzlieferung)", "Schadensersatz statt der Leistung", "Anfechtung wegen Irrtums"], answer: 2,
      explain: "Vorrangig ist die Nacherfüllung – der Verkäufer bekommt eine zweite Chance. Erst wenn sie scheitert, verweigert wird oder unzumutbar ist, folgen Rücktritt, Minderung oder Schadensersatz." },
    { id: "q-kv-3", topic: "kaufvertrag", type: "multi", exam: ["AP2"],
      q: "Welche Geschäfte eines 15-Jährigen sind ohne Zustimmung der Eltern wirksam?",
      options: ["Er nimmt ein Geschenk an, das ihn zu nichts verpflichtet.", "Er kauft von seinem Taschengeld ein Buch für 12 € und bezahlt sofort.", "Er schließt einen Handyvertrag mit 24 Monaten Laufzeit ab.", "Er kauft einen Laptop für 900 € auf Raten.", "Er schließt einen Vertrag mit einem Fitnessstudio ab."], answer: [0, 1],
      explain: "Beschränkt Geschäftsfähige können ohne Zustimmung nur Geschäfte mit lediglich rechtlichem Vorteil schließen und Käufe, die sie sofort mit Taschengeld bezahlen (§ 110 BGB). Laufzeitverträge und Ratenkäufe sind schwebend unwirksam." },
    { id: "q-kv-4", topic: "kaufvertrag", type: "tf", exam: ["AP1", "AP2"],
      q: "Ein Werbeprospekt mit Preisangaben ist ein verbindliches Angebot.",
      answer: false,
      explain: "Falsch. Prospekte, Kataloge, Schaufenster und Onlineshops sind nur eine Aufforderung zur Abgabe eines Angebots. Der Antrag kommt erst mit der Bestellung des Kunden." },
    { id: "q-kv-5", topic: "kaufvertrag", type: "single", exam: ["AP1", "AP2"],
      q: "Welche Aussage zur gesetzlichen Gewährleistung beim Kauf neuer Ware ist richtig?",
      options: ["Sie beträgt 2 Jahre ab Übergabe der Ware.", "Sie ist eine freiwillige Leistung des Herstellers.", "Sie beträgt immer 6 Monate.", "Sie gilt nur, wenn zusätzlich eine Garantie vereinbart wurde.", "Sie gilt nur zwischen Unternehmen."], answer: 0,
      explain: "Die Mängelhaftung (Gewährleistung) ist gesetzlich und dauert bei neuen Sachen 2 Jahre ab Übergabe. Die Garantie ist dagegen eine freiwillige Zusatzleistung." },
    { id: "q-as-1", topic: "arbeitsschutz", type: "single", exam: ["AP2"],
      q: "Welche Art von Sicherheitszeichen ist blau und rund?",
      options: ["Verbotszeichen", "Warnzeichen", "Gebotszeichen", "Rettungszeichen", "Brandschutzzeichen"], answer: 2,
      explain: "Gebot = blau und rund (z. B. Schutzbrille tragen). Verbot = rot, rund, durchgestrichen; Warnung = gelbes Dreieck; Rettung = grünes Rechteck; Brandschutz = rotes Rechteck." },
    { id: "q-as-2", topic: "arbeitsschutz", type: "single", exam: ["AP2"],
      q: "Welcher Feuerlöscher eignet sich am besten für einen Brand in einem Serverschrank?",
      options: ["Wasserlöscher", "CO₂-Löscher", "Schaumlöscher", "Fettbrandlöscher", "Metallbrandlöscher"], answer: 1,
      explain: "Kohlendioxid leitet keinen Strom und hinterlässt keine Rückstände, die die Elektronik zusätzlich schädigen. Wasser und Schaum leiten Strom, Fett- und Metallbrandlöscher sind für die Brandklassen F und D gedacht." },
    { id: "q-as-3", topic: "arbeitsschutz", type: "single", exam: ["AP2"],
      q: "Ab wann muss der Arbeitgeber einen Arbeitsunfall mit einer Unfallanzeige der Berufsgenossenschaft melden?",
      options: ["bei jedem Unfall, auch ohne Ausfallzeit", "wenn der Beschäftigte mehr als 3 Kalendertage arbeitsunfähig ist", "erst ab 6 Wochen Arbeitsunfähigkeit", "nur bei tödlichen Unfällen", "nur wenn ein Rettungswagen gerufen wurde"], answer: 1,
      explain: "Meldepflichtig sind Unfälle mit mehr als 3 Kalendertagen Arbeitsunfähigkeit (und tödliche Unfälle), innerhalb von 3 Tagen nach Kenntnis. Kleinere Verletzungen werden im Verbandbuch dokumentiert." },
    { id: "q-as-4", topic: "arbeitsschutz", type: "multi", exam: ["AP2"],
      q: "Welche Unfälle sind durch die gesetzliche Unfallversicherung abgesichert?",
      options: ["Sturz auf der Treppe im Betrieb", "Fahrradunfall auf dem direkten Weg zur Berufsschule", "Sportunfall am Wochenende im Verein", "Unfall auf dem Umweg, um das eigene Kind zur Kita zu bringen", "Unfall beim privaten Einkauf nach Feierabend"], answer: [0, 1, 3],
      explain: "Versichert sind Arbeitsunfälle und Wegeunfälle – auch auf dem Weg zur Berufsschule und auf notwendigen Umwegen zur Kinderbetreuung. Freizeitsport und private Erledigungen sind nicht versichert." },
    { id: "q-as-5", topic: "arbeitsschutz", type: "tf", exam: ["AP2"],
      q: "Sicherheitsbeauftragte haben gegenüber den übrigen Beschäftigten Weisungsbefugnis.",
      answer: false,
      explain: "Falsch. Sicherheitsbeauftragte sind Beschäftigte, die ehrenamtlich unterstützen und auf Mängel hinweisen. Die Verantwortung für den Arbeitsschutz bleibt beim Arbeitgeber und den Vorgesetzten." },
    { id: "q-as-6", topic: "arbeitsschutz", type: "single", exam: ["AP1", "AP2"],
      q: "Wofür steht die zweite Ziffer im IP-Code eines Geräts, z. B. bei IP54?",
      options: ["Schutz gegen Wasser", "Schutz gegen Fremdkörper und Berührung", "Schutzklasse des Geräts", "Anzahl der Prüfungen nach DGUV Vorschrift 3", "maximale Spannung in Volt"], answer: 0,
      explain: "Die erste Ziffer beschreibt den Schutz gegen Fremdkörper und Berührung (5 = staubgeschützt), die zweite den Schutz gegen Wasser (4 = Spritzwasser). Die Schutzklassen I–III sind ein eigenes System zum Schutz vor elektrischem Schlag." },
    { id: "q-um-1", topic: "umwelt-nachhaltigkeit", type: "single", exam: ["AP2"],
      q: "Welche Stufe steht in der Abfallhierarchie des Kreislaufwirtschaftsgesetzes an erster Stelle?",
      options: ["Recycling", "Vermeidung", "Beseitigung", "energetische Verwertung", "Vorbereitung zur Wiederverwendung"], answer: 1,
      explain: "Reihenfolge: Vermeidung → Vorbereitung zur Wiederverwendung → Recycling → sonstige (z. B. energetische) Verwertung → Beseitigung. Recycling ist erst die dritte Stufe." },
    { id: "q-um-2", topic: "umwelt-nachhaltigkeit", type: "multi", exam: ["AP2"],
      q: "Wie werden ausgemusterte Firmen-Notebooks richtig behandelt?",
      options: ["Daten sicher löschen oder Datenträger zertifiziert vernichten", "funktionsfähige Geräte aufbereiten und weiterverwenden", "defekte Geräte über den Restmüll entsorgen", "defekte Geräte als Elektroaltgeräte zurückgeben", "Akkus zusammen mit dem Papiermüll entsorgen"], answer: [0, 1, 3],
      explain: "Datenschutz geht vor: sicher löschen oder nach DIN 66399 vernichten. Wiederverwendung hat Vorrang vor Recycling. Elektroaltgeräte und Akkus gehören nie in Rest- oder Papiermüll, sondern in die Rücknahmesysteme." },
    { id: "q-um-3", topic: "umwelt-nachhaltigkeit", type: "single", exam: ["AP1", "AP2"],
      q: "Welche drei Dimensionen umfasst das Nachhaltigkeitsdreieck?",
      options: ["ökologisch, ökonomisch, sozial", "regional, national, global", "technisch, rechtlich, organisatorisch", "kurzfristig, mittelfristig, langfristig", "privat, öffentlich, gemeinnützig"], answer: 0,
      explain: "Nachhaltigkeit verbindet gleichberechtigt Umwelt (ökologisch), wirtschaftlichen Erfolg (ökonomisch) und Gesellschaft (sozial). „Technisch, organisatorisch“ erinnert an TOM aus dem Datenschutz." },
    { id: "q-lz-1", topic: "lernen-zusammenarbeit", type: "single", exam: ["AP2"],
      q: "Du verschickst eine Einladung an 40 externe Kunden. In welches Feld gehören deren E-Mail-Adressen?",
      options: ["An", "CC", "BCC", "Betreff", "Signatur"], answer: 2,
      explain: "Im BCC sehen die Empfänger die anderen Adressen nicht. E-Mail-Adressen sind personenbezogene Daten; bei „An“ oder „CC“ würden sie allen Empfängern offengelegt." },
    { id: "q-lz-2", topic: "lernen-zusammenarbeit", type: "single", exam: ["AP2"],
      q: "Ein Fachinformatiker legt vor der IHK eine Prüfung zum „Bachelor Professional“ im IT-Bereich ab. Welche Art der Weiterbildung ist das?",
      options: ["Anpassungsfortbildung", "Aufstiegsfortbildung", "Umschulung", "Einarbeitung", "Berufsausbildungsvorbereitung"], answer: 1,
      explain: "Die Aufstiegsfortbildung führt zu einem höheren Abschluss (DQR 5–7) und wird z. B. mit dem Aufstiegs-BAföG gefördert. Die Anpassungsfortbildung hält Wissen aktuell, die Umschulung führt in einen neuen Beruf." },
    { id: "q-lz-3", topic: "lernen-zusammenarbeit", type: "multi", exam: ["AP2"],
      q: "Welche Dokumente gehören zum Europass?",
      options: ["Lebenslauf", "Mobilitätsnachweis", "Zeugniserläuterung", "Führungszeugnis", "Arbeitsvertrag"], answer: [0, 1, 2],
      explain: "Zum Europass gehören Lebenslauf, Mobilitätsnachweis, Zeugniserläuterung für Berufsabschlüsse und Diploma Supplement für Hochschulabschlüsse. Führungszeugnis und Arbeitsvertrag sind keine Europass-Dokumente." },
    { id: "q-lz-4", topic: "lernen-zusammenarbeit", type: "tf", exam: ["AP2"],
      q: "Bei einem Anruf vom angeblichen „Microsoft-Support“ sollte man Fernzugriff gewähren, wenn der Anrufer bereits Details zum eigenen Rechner kennt.",
      answer: false,
      explain: "Falsch. Das ist ein typischer Social-Engineering-Trick; Details lassen sich leicht vorab ausspähen. Kein Fernzugriff, Gespräch beenden, über eine bekannte Nummer rückfragen und den Vorfall der IT melden." },
    { id: "q-ds-7", topic: "duales-system", type: "input", exam: ["AP2"],
      q: "Eine Auszubildende beginnt 2026 ihre Ausbildung in einem Betrieb ohne Tarifbindung. Wie viel Euro beträgt die gesetzliche Mindestvergütung im 2. Ausbildungsjahr (1. Jahr: 724 €)? (Zahl)",
      answer: ["854", "854 €", "854,00", "854 Euro"],
      explain: "Im 2. Jahr kommen 18 % auf den Wert des 1. Jahres: 724 € × 1,18 = 854,32 € → 854 €. Wer 35 % oder 40 % nimmt, rechnet das 3. bzw. 4. Jahr (977 € bzw. 1.014 €)." },
    { id: "q-ds-8", topic: "duales-system", type: "tf", exam: ["AP2"],
      q: "Der gesetzliche Mindestlohn von 13,90 € je Stunde (2026) gilt auch für Auszubildende.",
      answer: false,
      explain: "Falsch. Auszubildende sind vom Mindestlohngesetz ausgenommen. Für sie gilt die Mindestausbildungsvergütung nach § 17 BBiG (Ausbildungsbeginn 2026: 724 € im 1. Jahr) bzw. die tarifliche Vergütung." },
    { id: "q-az-7", topic: "arbeitszeit-schutz", type: "single", exam: ["AP2"],
      q: "Wie lang darf die Schichtzeit (Arbeitszeit einschließlich Pausen) eines Jugendlichen in einem IT-Betrieb höchstens sein?",
      options: ["8 Stunden", "8,5 Stunden", "10 Stunden", "11 Stunden", "12 Stunden"], answer: 2,
      explain: "§ 12 JArbSchG: höchstens 10 Stunden (Ausnahmen z. B. im Gastgewerbe). 8 bzw. 8,5 Stunden sind die tägliche Arbeitszeit ohne Pausen, 12 Stunden die Freizeit zwischen zwei Arbeitstagen." },
    { id: "q-av-7", topic: "arbeitsvertrag-zeugnis", type: "tf", exam: ["AP2"],
      q: "Ein Arbeitgeber darf das Arbeitszeugnis auch gegen den Willen des Arbeitnehmers nur elektronisch ausstellen.",
      answer: false,
      explain: "Falsch. Die elektronische Form ist nach § 109 GewO nur mit Einwilligung des Arbeitnehmers zulässig. Ohne Einwilligung hat er Anspruch auf ein schriftliches, unterschriebenes Zeugnis." },
    { id: "q-k-7", topic: "kuendigung", type: "single", exam: ["AP2"],
      q: "Lena hat vom 01.08.2020 bis 31.07.2023 im selben Betrieb ihre Ausbildung gemacht und ist seitdem dort angestellt. Die Kündigung des Arbeitgebers geht ihr am 15.09.2026 zu. Welche gesetzliche Frist gilt?",
      options: ["4 Wochen zum 15. oder zum Monatsende", "1 Monat zum Monatsende", "2 Monate zum Monatsende", "3 Monate zum Monatsende", "2 Wochen"], answer: 2,
      explain: "Die Ausbildungszeit im selben Betrieb zählt zur Betriebszugehörigkeit: 01.08.2020 bis 15.09.2026 sind mehr als 6 Jahre → ab 5 Jahren 2 Monate zum Monatsende, Ende also am 30.11.2026. Wer nur ab dem Arbeitsvertrag 2023 zählt, kommt fälschlich auf 1 Monat." },
    { id: "q-t-5", topic: "tarifvertrag", type: "single", exam: ["AP2"],
      q: "Eine Gewerkschaft schließt einen Tarifvertrag direkt mit einem einzelnen IT-Unternehmen ab. Wie heißt diese Art von Tarifvertrag?",
      options: ["Flächentarifvertrag", "Firmen- oder Haustarifvertrag", "Manteltarifvertrag", "Betriebsvereinbarung", "Allgemeinverbindlicherklärung"], answer: 1,
      explain: "Tarifpartner auf Arbeitgeberseite kann auch ein einzelnes Unternehmen sein – dann spricht man vom Firmen- oder Haustarifvertrag. Der Flächentarifvertrag wird mit einem Arbeitgeberverband geschlossen; die Betriebsvereinbarung schließen Arbeitgeber und Betriebsrat." },
    { id: "q-t-6", topic: "tarifvertrag", type: "multi", exam: ["AP2"],
      q: "Welche Aussagen zum Arbeitskampf sind richtig?",
      options: ["Einen Streik darf nur eine Gewerkschaft organisieren.", "Während der Friedenspflicht sind Warnstreiks über die geregelten Inhalte erlaubt.", "Ausgesperrte Beschäftigte erhalten für die Zeit der Aussperrung keinen Lohn.", "Beamte dürfen streiken, wenn ihre Gewerkschaft dazu aufruft.", "Vor einem unbefristeten Streik stimmen die Gewerkschaftsmitglieder in einer Urabstimmung ab."], answer: [0, 2, 4],
      explain: "Streiks sind nur zulässig, wenn eine Gewerkschaft sie trägt; bei der Aussperrung entfällt der Lohn. Warnstreiks sind erst nach Ende der Friedenspflicht erlaubt, und Beamte haben kein Streikrecht." },
    { id: "q-u-7", topic: "unternehmensformen", type: "single", exam: ["AP2"],
      q: "Mehrere Computerhändler gründen eine eingetragene Genossenschaft, um gemeinsam günstiger einzukaufen. Wo wird die eG eingetragen?",
      options: ["Handelsregister Abteilung A", "Handelsregister Abteilung B", "Genossenschaftsregister", "Vereinsregister", "Grundbuch"], answer: 2,
      explain: "Die eG hat ein eigenes Register, das Genossenschaftsregister beim Amtsgericht. Abteilung A ist für Einzelkaufleute und Personenhandelsgesellschaften, Abteilung B für Kapitalgesellschaften, das Vereinsregister für den e. V." },
    { id: "q-u-8", topic: "unternehmensformen", type: "single", exam: ["AP2"],
      q: "Welche Firma ist eine reine Sachfirma?",
      options: ["Netzwerktechnik Meldorf GmbH", "Jensen & Petersen OHG", "Zephyra AG", "Möller IT-Service e. K.", "Hansen KG"], answer: 0,
      explain: "Die Sachfirma nennt den Gegenstand des Unternehmens (Netzwerktechnik). „Jensen & Petersen OHG“ und „Hansen KG“ sind Personenfirmen, „Zephyra AG“ ist eine Fantasiefirma, „Möller IT-Service e. K.“ verbindet Name und Tätigkeit (gemischte Firma)." },
    { id: "q-b-5", topic: "betrieb-ziele", type: "single", exam: ["AP1", "AP2"],
      q: "Welches Beispiel beschreibt ein Formalziel?",
      options: ["Die Eigenkapitalrentabilität soll 2027 mindestens 15 % betragen.", "Das Systemhaus bietet Managed Services für Arztpraxen an.", "Das Unternehmen entwickelt eine App für ambulante Pflegedienste.", "Der Servicedesk betreut Kunden in ganz Dithmarschen.", "Das Unternehmen verkauft und installiert Netzwerktechnik."], answer: 0,
      explain: "Formalziele beschreiben den messbaren wirtschaftlichen Erfolg (Gewinn, Rentabilität, Produktivität). Die übrigen Aussagen beschreiben das Leistungsangebot – das sind Sachziele." },
    { id: "q-kz-6", topic: "kennzahlen", type: "single", exam: ["AP2"],
      q: "Der Verbraucherpreisindex steigt von 118,00 auf 121,54. Wie hoch ist die Inflationsrate?",
      options: ["3,54 %", "3 %", "21,54 %", "2,9 %", "103 %"], answer: 1,
      explain: "(121,54 − 118,00) × 100 ÷ 118,00 = 3 %. Die 3,54 sind Indexpunkte, keine Prozent; 21,54 % wäre der Anstieg gegenüber dem Basisjahr (= 100)." },
    { id: "q-kz-7", topic: "kennzahlen", type: "input", exam: ["AP2"],
      q: "Der Nominallohn steigt um 6 %, die Inflationsrate beträgt 2 %. Um wie viel Prozent steigt der Reallohn? Rechne exakt mit (1 + nominal) ÷ (1 + Inflation) − 1 und runde auf zwei Nachkommastellen.",
      answer: ["3,92", "3,92 %", "3,92%"],
      explain: "1,06 ÷ 1,02 − 1 = 0,0392 → 3,92 %. Die Näherung „6 % − 2 % = 4 %“ ist nur ein Überschlag." },
    { id: "q-sv-6", topic: "sozialversicherung", type: "single", exam: ["AP2"],
      q: "Eine Arbeitnehmerin verdient 7.000 € brutto im Monat. Die Beitragsbemessungsgrenze der KV beträgt laut Aufgabe 5.812,50 €, ihr Arbeitnehmeranteil 8,75 %. Wie hoch ist ihr KV-Beitrag?",
      options: ["508,59 €", "612,50 €", "1.017,19 €", "546,00 €", "0,00 €"], answer: 0,
      explain: "Beiträge werden höchstens bis zur Beitragsbemessungsgrenze berechnet: 5.812,50 € × 8,75 % = 508,59 €. 612,50 € wäre der Beitrag auf das volle Gehalt, 1.017,19 € der Gesamtbeitrag von Arbeitnehmer und Arbeitgeber." },
    { id: "q-sv-7", topic: "sozialversicherung", type: "single", exam: ["AP2"],
      q: "Bis zu welchem regelmäßigen Monatsverdienst liegt 2026 ein Minijob vor?",
      options: ["520 €", "538 €", "556 €", "603 €", "2.000 €"], answer: 3,
      explain: "Die Minijob-Grenze ist an den Mindestlohn gekoppelt und beträgt 2026 603 € (2025: 556 €, 2024: 538 €, 2023: 520 €). Bis 2.000 € reicht der Übergangsbereich (Midijob)." },
    { id: "q-as-7", topic: "arbeitsschutz", type: "single", exam: ["AP2"],
      q: "Ein Servicetechniker leidet unter ständigem Zeitdruck und häufiger Rufbereitschaft am Wochenende. Welche Gefährdungsart muss die Gefährdungsbeurteilung hier erfassen?",
      options: ["mechanische Gefährdung", "elektrische Gefährdung", "psychische Belastung", "chemische Gefährdung", "thermische Gefährdung"], answer: 2,
      explain: "Zeitdruck, ständige Erreichbarkeit und Konflikte sind psychische Belastungen; sie müssen seit 2013 ausdrücklich in der Gefährdungsbeurteilung (§ 5 ArbSchG) berücksichtigt werden." },
    { id: "q-as-8", topic: "arbeitsschutz", type: "single", exam: ["AP2"],
      q: "Welche Schutzmaßnahme hat nach dem STOP-Prinzip Vorrang?",
      options: ["ein gefährliches Reinigungsmittel durch ein ungefährliches ersetzen", "eine Absauganlage einbauen", "eine Betriebsanweisung aushängen", "Schutzhandschuhe ausgeben", "die Beschäftigten jährlich unterweisen"], answer: 0,
      explain: "STOP = Substitution vor technischen, organisatorischen und persönlichen Maßnahmen. Wer die Gefahr ganz ersetzt, muss sich nicht mehr vor ihr schützen." },
    { id: "q-um-4", topic: "umwelt-nachhaltigkeit", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Maßnahmen gehören zur Green IT?",
      options: ["Server virtualisieren und konsolidieren", "Ökostrom für das Rechenzentrum beziehen", "Geräte nachts im Standby lassen, damit sie morgens schneller starten", "generalüberholte (refurbished) Notebooks beschaffen", "bei jedem Update die gesamte Hardware erneuern"], answer: [0, 1, 3],
      explain: "Virtualisierung, Ökostrom und längere Nutzung aufbereiteter Geräte sparen Energie und Ressourcen. Standby verbraucht unnötig Strom, und ein vorzeitiger Hardwaretausch erhöht Elektroschrott." },
    { id: "q-um-5", topic: "umwelt-nachhaltigkeit", type: "tf", exam: ["AP2"],
      q: "Ein aufgeblähter Lithium-Akku aus einem Notebook darf in den Restmüll, wenn er vorher vollständig entladen wurde.",
      answer: false,
      explain: "Falsch. Batterien und Akkus gehören nie in den Restmüll, sondern in die Rücknahmesysteme. Beschädigte Lithium-Akkus sind zusätzlich brandgefährlich und müssen getrennt und sicher gelagert werden." },
    { id: "q-lz-5", topic: "lernen-zusammenarbeit", type: "single", exam: ["AP2"],
      q: "Eine Schadsoftware verändert unbemerkt Beträge in der Buchhaltungsdatenbank. Welches Schutzziel ist verletzt?",
      options: ["Vertraulichkeit", "Integrität", "Verfügbarkeit", "Zweckbindung", "Datenminimierung"], answer: 1,
      explain: "Integrität bedeutet, dass Daten vollständig und unverändert sind. Vertraulichkeit wäre verletzt, wenn Unbefugte die Daten lesen, Verfügbarkeit, wenn die Datenbank nicht erreichbar ist. Zweckbindung und Datenminimierung sind Grundsätze der DSGVO, keine Schutzziele." },
    { id: "q-lz-6", topic: "lernen-zusammenarbeit", type: "multi", exam: ["AP2"],
      q: "Welche der folgenden Maßnahmen sind organisatorische Maßnahmen (TOM)?",
      options: ["Clean-Desk-Richtlinie", "Festplattenverschlüsselung", "Datenschutzschulung für alle Beschäftigten", "Firewall am Internetzugang", "Vier-Augen-Prinzip bei Überweisungen"], answer: [0, 2, 4],
      explain: "Organisatorische Maßnahmen regeln Abläufe und Verhalten (Richtlinien, Schulungen, Vier-Augen-Prinzip). Verschlüsselung und Firewall sind technische Maßnahmen." },
  ],
  cards: [
    { topic: "duales-system", f: "Probezeit in der Ausbildung", b: "mindestens 1, höchstens 4 Monate (§ 20 BBiG); in dieser Zeit Kündigung jederzeit ohne Frist, aber schriftlich" },
    { topic: "duales-system", f: "Kündigung durch den Azubi nach der Probezeit", b: "mit 4 Wochen Frist, wenn er die Ausbildung aufgibt oder einen anderen Beruf lernen will – schriftlich mit Grund" },
    { topic: "duales-system", f: "Ende der Ausbildung bei vorzeitigem Bestehen", b: "mit Bekanntgabe des Prüfungsergebnisses durch den Prüfungsausschuss (§ 21 BBiG)" },
    { topic: "duales-system", f: "Weiterarbeit nach der Ausbildung ohne Absprache", b: "gilt als unbefristetes Arbeitsverhältnis (§ 24 BBiG)" },
    { topic: "arbeitszeit-schutz", f: "Urlaub nach JArbSchG", b: "30 / 27 / 25 Werktage, wenn der Jugendliche zu Beginn des Kalenderjahres noch nicht 16 / 17 / 18 ist" },
    { topic: "arbeitszeit-schutz", f: "Pausen Jugendliche vs. Erwachsene", b: "Jugendliche: 30 min (mehr als 4,5 h), 60 min (mehr als 6 h) · Erwachsene: 30 min (mehr als 6 h), 45 min (mehr als 9 h)" },
    { topic: "arbeitszeit-schutz", f: "Ruhezeit nach Arbeitsende", b: "Jugendliche 12 h, Erwachsene 11 h" },
    { topic: "arbeitszeit-schutz", f: "Mutterschutzfristen", b: "6 Wochen vor der Entbindung (Arbeit auf Wunsch möglich), 8 Wochen danach (12 bei Früh-/Mehrlingsgeburt); Kündigungsverbot bis 4 Monate nach der Geburt" },
    { topic: "arbeitsvertrag-zeugnis", f: "Einfaches vs. qualifiziertes Zeugnis", b: "einfach: Art und Dauer der Tätigkeit · qualifiziert: zusätzlich Leistung und Verhalten" },
    { topic: "arbeitsvertrag-zeugnis", f: "„stets zu unserer vollsten Zufriedenheit“", b: "Zeugnissprache für „sehr gut“" },
    { topic: "arbeitsvertrag-zeugnis", f: "Instanzen der Arbeitsgerichtsbarkeit", b: "Arbeitsgericht → Landesarbeitsgericht (SH: Kiel) → Bundesarbeitsgericht (Erfurt)" },
    { topic: "arbeitsvertrag-zeugnis", f: "Instanzen der Sozialgerichtsbarkeit", b: "Sozialgericht → Landessozialgericht (SH: Schleswig) → Bundessozialgericht (Kassel); vorher Widerspruch beim Träger" },
    { topic: "kuendigung", f: "Grundkündigungsfrist § 622 BGB", b: "4 Wochen zum 15. oder zum Ende eines Kalendermonats" },
    { topic: "kuendigung", f: "Arbeitgeberkündigung nach 5 / 8 / 10 Jahren", b: "2 / 3 / 4 Monate zum Monatsende" },
    { topic: "kuendigung", f: "Voraussetzungen KSchG", b: "mehr als 10 Arbeitnehmer im Betrieb (Azubis zählen nicht) und Arbeitsverhältnis länger als 6 Monate" },
    { topic: "kuendigung", f: "Klagefrist Kündigungsschutzklage", b: "3 Wochen nach Zugang der Kündigung beim Arbeitsgericht" },
    { topic: "kuendigung", f: "Außerordentliche Kündigung", b: "fristlos aus wichtigem Grund (§ 626 BGB), innerhalb von 2 Wochen nach Kenntnis" },
    { topic: "tarifvertrag", f: "Tarifautonomie", b: "Recht von Gewerkschaften und Arbeitgeber(verbänden), Arbeitsbedingungen ohne Staat auszuhandeln (Art. 9 Abs. 3 GG)" },
    { topic: "tarifvertrag", f: "Friedenspflicht", b: "Während der Laufzeit eines Tarifvertrags keine Arbeitskämpfe über die geregelten Inhalte" },
    { topic: "tarifvertrag", f: "Günstigkeitsprinzip", b: "Abweichungen vom Tarifvertrag sind nur zugunsten der Arbeitnehmer zulässig" },
    { topic: "tarifvertrag", f: "Manteltarif- vs. Entgelttarifvertrag", b: "Mantel: Arbeitszeit, Urlaub, Zuschläge (lange Laufzeit) · Entgelt: Höhe von Lohn und Gehalt (kurze Laufzeit)" },
    { topic: "mitbestimmung", f: "Amtszeit Betriebsrat / JAV", b: "Betriebsrat 4 Jahre (Wahl März–Mai), JAV 2 Jahre (Wahl Oktober–November)" },
    { topic: "mitbestimmung", f: "Voraussetzung für eine JAV", b: "Betriebsrat vorhanden und mindestens 5 Beschäftigte unter 18 oder Azubis" },
    { topic: "mitbestimmung", f: "§ 87 BetrVG", b: "echte Mitbestimmung in sozialen Angelegenheiten: Arbeitszeit, Pausen, Urlaubsgrundsätze, technische Überwachung, mobile Arbeit" },
    { topic: "mitbestimmung", f: "§ 102 BetrVG", b: "Anhörung des Betriebsrats vor jeder Kündigung – sonst ist die Kündigung unwirksam" },
    { topic: "mitbestimmung", f: "Personalrat", b: "Arbeitnehmervertretung im öffentlichen Dienst; in SH für Land und Kommunen nach dem MBG Schl.-H." },
    { topic: "sozialversicherung", f: "Die 5 Zweige der Sozialversicherung", b: "Kranken-, Pflege-, Renten-, Arbeitslosen- und Unfallversicherung" },
    { topic: "sozialversicherung", f: "Träger der Unfallversicherung", b: "Berufsgenossenschaften (öffentlicher Dienst: Unfallkassen); Beitrag zahlt allein der Arbeitgeber" },
    { topic: "sozialversicherung", f: "Schema Entgeltabrechnung", b: "Brutto − Lohnsteuer − Soli − Kirchensteuer − AN-Anteile SV = Netto − sonstige Abzüge = Auszahlung" },
    { topic: "sozialversicherung", f: "Beitragsbemessungsgrenze", b: "Einkommensgrenze, bis zu der Sozialversicherungsbeiträge erhoben werden; darüber beitragsfrei" },
    { topic: "unternehmensformen", f: "Mindestkapital GmbH / UG / AG", b: "GmbH 25.000 € Stammkapital · UG ab 1 € · AG 50.000 € Grundkapital" },
    { topic: "unternehmensformen", f: "Komplementär vs. Kommanditist", b: "Komplementär: Vollhafter, führt die Geschäfte · Kommanditist: haftet nur bis zur Einlage, keine Geschäftsführung" },
    { topic: "unternehmensformen", f: "Handelsregister A / B", b: "A: e. K., OHG, KG (Personenhandelsgesellschaften) · B: GmbH, UG, AG (Kapitalgesellschaften)" },
    { topic: "unternehmensformen", f: "Gewinnverteilung OHG/KG seit 2024", b: "nach vereinbarten Beteiligungsverhältnissen, sonst nach Einlagen, sonst nach Köpfen" },
    { topic: "unternehmensformen", f: "Prokura", b: "weitreichende, im HR eingetragene Vollmacht (ppa.); nicht erlaubt u. a.: Bilanz unterschreiben, Prokura erteilen, Grundstücke ohne Sonderbefugnis veräußern" },
    { topic: "betrieb-ziele", f: "Wirtschaftssektoren", b: "primär: Urproduktion · sekundär: Verarbeitung · tertiär: Dienstleistung · quartär: Information/Wissen" },
    { topic: "betrieb-ziele", f: "Zielharmonie / Zielkonflikt / Zielneutralität", b: "Ziele fördern sich / behindern sich / beeinflussen sich nicht" },
    { topic: "betrieb-ziele", f: "Stabliniensystem", b: "Einliniensystem mit beratenden Stabsstellen ohne Weisungsbefugnis (z. B. Datenschutzbeauftragter)" },
    { topic: "betrieb-ziele", f: "Matrixorganisation", b: "zwei Dimensionen (Funktion × Produkt/Projekt), Mitarbeitende haben zwei Vorgesetzte" },
    { topic: "wirtschaften-grundlagen", f: "Maximalprinzip", b: "gegebener Mitteleinsatz → größtmöglicher Erfolg" },
    { topic: "wirtschaften-grundlagen", f: "Minimalprinzip", b: "gegebenes Ziel → geringstmöglicher Mitteleinsatz" },
    { topic: "wirtschaften-grundlagen", f: "Betriebswirtschaftliche Produktionsfaktoren", b: "Elementarfaktoren (ausführende Arbeit, Betriebsmittel, Werkstoffe) + dispositiver Faktor (leitende Arbeit)" },
    { topic: "wirtschaften-grundlagen", f: "Roh-, Hilfs-, Betriebsstoffe", b: "Rohstoff = Hauptbestandteil · Hilfsstoff = Nebenbestandteil · Betriebsstoff = wird verbraucht, geht nicht ins Produkt" },
    { topic: "wirtschaften-grundlagen", f: "Erweiterter Wirtschaftskreislauf", b: "Haushalte, Unternehmen + Staat, Banken (Vermögensänderung), Ausland" },
    { topic: "markt-preisbildung", f: "Gleichgewichtspreis", b: "Preis, bei dem Angebot = Nachfrage; Markt wird geräumt, größter Absatz" },
    { topic: "markt-preisbildung", f: "Käufermarkt / Verkäufermarkt", b: "Käufermarkt: Angebot größer als Nachfrage · Verkäufermarkt: Nachfrage größer als Angebot" },
    { topic: "markt-preisbildung", f: "Marktformen nach Anbietern", b: "einer: Monopol · wenige: Oligopol · viele: Polypol" },
    { topic: "wirtschaftsordnung", f: "Magisches Viereck", b: "Preisniveaustabilität, hoher Beschäftigungsstand, außenwirtschaftliches Gleichgewicht, stetiges Wachstum" },
    { topic: "wirtschaftsordnung", f: "Kartell / Konzern / Fusion", b: "Absprache Selbstständiger (verboten) / einheitliche Leitung rechtlich selbstständiger Firmen / Verschmelzung zu einem Unternehmen" },
    { topic: "wirtschaftsordnung", f: "Horizontal / vertikal / diagonal", b: "gleiche Stufe / vor- oder nachgelagerte Stufe / branchenfremd" },
    { topic: "kennzahlen", f: "Wirtschaftlichkeit", b: "Ertrag ÷ Aufwand; über 1 = wirtschaftlich" },
    { topic: "kennzahlen", f: "Eigenkapitalrentabilität", b: "Gewinn × 100 ÷ Eigenkapital" },
    { topic: "kennzahlen", f: "Gesamtkapitalrentabilität", b: "(Gewinn + Fremdkapitalzinsen) × 100 ÷ Gesamtkapital" },
    { topic: "kennzahlen", f: "Indexzahl", b: "Wert Berichtsjahr ÷ Wert Basisjahr × 100 (Basisjahr = 100)" },
    { topic: "angebotsvergleich-nwa", f: "Bezugskalkulation", b: "Listeneinkaufspreis − Rabatt = Zieleinkaufspreis − Skonto = Bareinkaufspreis + Bezugskosten = Bezugspreis" },
    { topic: "angebotsvergleich-nwa", f: "Teilnutzen in der NWA", b: "Gewichtung × Punktzahl; Summe der Teilnutzen = Gesamtnutzwert" },
    { topic: "angebotsvergleich-nwa", f: "Skonto-Jahreszins (Näherung)", b: "Skontosatz × 360 ÷ (Zahlungsziel − Skontofrist)" },
    { topic: "handelskalkulation", f: "Kalkulationszuschlag", b: "(Listenverkaufspreis netto − Bezugspreis) × 100 ÷ Bezugspreis" },
    { topic: "handelskalkulation", f: "Handelsspanne", b: "(Listenverkaufspreis netto − Bezugspreis) × 100 ÷ Listenverkaufspreis netto" },
    { topic: "handelskalkulation", f: "Kalkulationsfaktor", b: "Listenverkaufspreis netto ÷ Bezugspreis; Bezugspreis × Faktor = Verkaufspreis netto" },
    { topic: "kaufvertrag", f: "Geschäftsfähigkeit", b: "unter 7: geschäftsunfähig · 7 bis unter 18: beschränkt (Zustimmung der Eltern, Taschengeld) · ab 18: voll" },
    { topic: "kaufvertrag", f: "Rechte bei mangelhafter Lieferung", b: "zuerst Nacherfüllung; danach Rücktritt, Minderung, Schadensersatz" },
    { topic: "kaufvertrag", f: "Gewährleistung vs. Garantie", b: "Gewährleistung: gesetzlich, 2 Jahre · Garantie: freiwillig, Bedingungen legt der Garantiegeber fest" },
    { topic: "arbeitsschutz", f: "Sicherheitszeichen", b: "Verbot rot/rund · Warnung gelb/Dreieck · Gebot blau/rund · Rettung grün/Rechteck · Brandschutz rot/Rechteck" },
    { topic: "arbeitsschutz", f: "Unfallanzeige", b: "bei mehr als 3 Kalendertagen Arbeitsunfähigkeit, binnen 3 Tagen an die Berufsgenossenschaft" },
    { topic: "arbeitsschutz", f: "Brandklassen", b: "A feste Stoffe · B Flüssigkeiten · C Gase · D Metalle · F Speisefette" },
    { topic: "arbeitsschutz", f: "Schutzklassen I / II / III", b: "I Schutzleiter · II doppelte Isolierung · III Schutzkleinspannung" },
    { topic: "arbeitsschutz", f: "CE-Zeichen vs. GS-Zeichen", b: "CE: Herstellererklärung zur Einhaltung der EU-Vorschriften · GS: „geprüfte Sicherheit“ durch unabhängige Prüfstelle" },
    { topic: "umwelt-nachhaltigkeit", f: "Abfallhierarchie KrWG", b: "Vermeidung → Wiederverwendung → Recycling → sonstige Verwertung → Beseitigung" },
    { topic: "umwelt-nachhaltigkeit", f: "DIN 66399", b: "Norm für die datenschutzgerechte Vernichtung von Datenträgern (Schutzklassen, Sicherheitsstufen 1–7)" },
    { topic: "lernen-zusammenarbeit", f: "Europass", b: "EU-Dokumente: Lebenslauf, Mobilitätsnachweis, Zeugniserläuterung, Diploma Supplement" },
    { topic: "lernen-zusammenarbeit", f: "Aufstiegs-BAföG", b: "staatliche Förderung (Zuschuss + Darlehen) für Aufstiegsfortbildungen, z. B. Bachelor Professional" },
    { topic: "lernen-zusammenarbeit", f: "BCC", b: "Blindkopie: Empfänger sehen die anderen Adressen nicht – Pflicht bei externen Verteilern (Datenschutz)" },
    { topic: "duales-system", f: "Mindestausbildungsvergütung bei Beginn 2026", b: "1. Jahr 724 € · 2. Jahr 854 € (+18 %) · 3. Jahr 977 € (+35 %) · 4. Jahr 1.014 € (+40 %)" },
    { topic: "duales-system", f: "Angemessene Vergütung ohne Tarifbindung", b: "höchstens 20 % unter dem einschlägigen Tarif, aber nie unter der Mindestvergütung (§ 17 BBiG)" },
    { topic: "arbeitszeit-schutz", f: "Schichtzeit Jugendliche", b: "Arbeitszeit + Pausen höchstens 10 Stunden (§ 12 JArbSchG)" },
    { topic: "arbeitsvertrag-zeugnis", f: "Gesetzlicher Mindestlohn", b: "2026: 13,90 €/h, ab 2027: 14,60 €/h – gilt nicht für Auszubildende" },
    { topic: "kuendigung", f: "Betriebszugehörigkeit für § 622 BGB", b: "zählt ab Beginn im Betrieb inklusive Ausbildung, unabhängig vom Lebensalter; Stichtag ist der Zugang der Kündigung" },
    { topic: "sozialversicherung", f: "Minijob / Midijob 2026", b: "Minijob bis 603 €/Monat · Übergangsbereich (Midijob) 603,01 € bis 2.000 € mit reduzierten AN-Beiträgen" },
    { topic: "sozialversicherung", f: "Grundsicherungsgeld", b: "seit 01.07.2026 Name der Leistung für erwerbsfähige Bedürftige (vorher Bürgergeld); steuerfinanziert, Fürsorgeprinzip" },
    { topic: "unternehmensformen", f: "Firmenarten", b: "Personenfirma (Name) · Sachfirma (Tätigkeit) · Fantasiefirma · gemischte Firma – immer mit Rechtsformzusatz" },
    { topic: "unternehmensformen", f: "Eingetragene Genossenschaft (eG)", b: "Förderung der Mitglieder, mind. 3 Mitglieder, je Mitglied grundsätzlich 1 Stimme, Genossenschaftsregister" },
    { topic: "kennzahlen", f: "Inflationsrate", b: "(VPI Berichtsjahr − VPI Vorjahr) × 100 ÷ VPI Vorjahr" },
    { topic: "kennzahlen", f: "Reallohn", b: "Nominallohn × 100 ÷ Preisindex; reale Veränderung = (1 + nominal) ÷ (1 + Inflation) − 1" },
    { topic: "arbeitsschutz", f: "STOP-Prinzip", b: "Substitution vor Technik vor Organisation vor persönlicher Schutzausrüstung" },
    { topic: "arbeitsschutz", f: "Gefährdungsbeurteilung (§ 5 ArbSchG)", b: "Gefährdungen ermitteln, beurteilen, Maßnahmen festlegen, umsetzen, Wirksamkeit prüfen, dokumentieren – auch psychische Belastung" },
    { topic: "lernen-zusammenarbeit", f: "Schutzziele der Informationssicherheit", b: "Vertraulichkeit, Integrität, Verfügbarkeit (oft ergänzt: Authentizität)" },
    { topic: "lernen-zusammenarbeit", f: "TOM", b: "technische und organisatorische Maßnahmen (Art. 32 DSGVO), z. B. Verschlüsselung, Backup bzw. Richtlinie, Schulung" },
  ],
  checklist: [
    { id: "c-ds-1", topic: "duales-system", text: "Ich kann die Aufgaben von Ausbildungsbetrieb, Berufsschule und IHK im dualen System unterscheiden und Ausbildungsordnung, Ausbildungsrahmenplan, Rahmenlehrplan und betrieblichen Ausbildungsplan einordnen.", exam: ["AP2"] },
    { id: "c-ds-2", topic: "duales-system", text: "Ich kann Mindestinhalte des Ausbildungsvertrags nennen, das Ende der Probezeit berechnen und Kündigung sowie Ende der Ausbildung nach BBiG beurteilen.", exam: ["AP2"] },
    { id: "c-az-1", topic: "arbeitszeit-schutz", text: "Ich kann Arbeitszeit, Pausen, Ruhezeit und Urlaub nach JArbSchG und ArbZG/BUrlG vergleichen und einen Dienstplan auf Verstöße prüfen.", exam: ["AP2"] },
    { id: "c-az-2", topic: "arbeitszeit-schutz", text: "Ich kann Urlaubsansprüche in Werk- und Arbeitstagen sowie Teilurlaub berechnen und Schutzfristen nach MuSchG, BEEG und SGB IX nennen.", exam: ["AP2"] },
    { id: "c-av-1", topic: "arbeitsvertrag-zeugnis", text: "Ich kann Pflichten von Arbeitnehmer und Arbeitgeber nennen und die geschützten Merkmale des AGG aufzählen.", exam: ["AP2"] },
    { id: "c-av-2", topic: "arbeitsvertrag-zeugnis", text: "Ich kann einfaches und qualifiziertes Zeugnis unterscheiden, Zeugnisformulierungen Noten zuordnen und für einen Streitfall das zuständige Gericht mit Instanzenzug nennen.", exam: ["AP2"] },
    { id: "c-k-1", topic: "kuendigung", text: "Ich kann Kündigungsfristen nach § 622 BGB für Arbeitnehmer- und Arbeitgeberkündigungen auf das Datum genau berechnen.", exam: ["AP2"] },
    { id: "c-k-2", topic: "kuendigung", text: "Ich kann prüfen, ob das Kündigungsschutzgesetz gilt, Kündigungsgründe personen-, verhaltens- oder betriebsbedingt zuordnen und besonders geschützte Personengruppen nennen.", exam: ["AP2"] },
    { id: "c-t-1", topic: "tarifvertrag", text: "Ich kann Tarifautonomie, Tarifparteien sowie Mantel- und Entgelttarifvertrag erklären.", exam: ["AP2"] },
    { id: "c-t-2", topic: "tarifvertrag", text: "Ich kann Friedenspflicht, Günstigkeitsprinzip und Allgemeinverbindlichkeit anwenden und den Ablauf einer Tarifauseinandersetzung in die richtige Reihenfolge bringen.", exam: ["AP2"] },
    { id: "c-m-1", topic: "mitbestimmung", text: "Ich kann Voraussetzungen, Wahlrecht, Größe und Amtszeit von Betriebsrat und JAV bestimmen.", exam: ["AP2"] },
    { id: "c-m-2", topic: "mitbestimmung", text: "Ich kann betriebliche Maßnahmen der richtigen Beteiligungsstufe (Information, Anhörung, Beratung, Widerspruch, Mitbestimmung) zuordnen und Betriebsvereinbarung sowie Personalrat erklären.", exam: ["AP2"] },
    { id: "c-sv-1", topic: "sozialversicherung", text: "Ich kann die fünf Zweige der Sozialversicherung mit Trägern, Leistungen und Beitragsverteilung nennen.", exam: ["AP2"] },
    { id: "c-sv-2", topic: "sozialversicherung", text: "Ich kann eine Entgeltabrechnung mit vorgegebenen Sätzen vom Brutto bis zum Auszahlungsbetrag rechnen und Steuerklassen zuordnen.", exam: ["AP2"] },
    { id: "c-u-1", topic: "unternehmensformen", text: "Ich kann Einzelunternehmen, GbR, OHG, KG, GmbH, UG und AG nach Kapital, Haftung, Leitung und Handelsregisterabteilung vergleichen.", exam: ["AP2"] },
    { id: "c-u-2", topic: "unternehmensformen", text: "Ich kann Gewinne nach der seit 2024 geltenden Regel verteilen und Befugnisse von Prokura und Handlungsvollmacht abgrenzen.", exam: ["AP1", "AP2"] },
    { id: "c-b-1", topic: "betrieb-ziele", text: "Ich kann Unternehmen Wirtschaftssektoren zuordnen und erwerbswirtschaftliche, gemeinwirtschaftliche und genossenschaftliche Zielsetzungen unterscheiden.", exam: ["AP2"] },
    { id: "c-b-2", topic: "betrieb-ziele", text: "Ich kann ökonomische, ökologische und soziale Ziele sowie Zielbeziehungen erkennen und Organisationsformen an Organigrammen mit Vor- und Nachteilen beschreiben.", exam: ["AP1", "AP2"] },
    { id: "c-w-1", topic: "wirtschaften-grundlagen", text: "Ich kann Maximal-, Minimal- und Optimumprinzip an Beispielen erkennen und volks- und betriebswirtschaftliche Produktionsfaktoren zuordnen.", exam: ["AP2"] },
    { id: "c-w-2", topic: "wirtschaften-grundlagen", text: "Ich kann den einfachen und erweiterten Wirtschaftskreislauf darstellen und fehlende Geldströme berechnen.", exam: ["AP2"] },
    { id: "c-mp-1", topic: "markt-preisbildung", text: "Ich kann aus einer Tabelle Gleichgewichtspreis, Überhänge und Umsatz bestimmen und die Folgen von Angebots- und Nachfrageänderungen beschreiben.", exam: ["AP2"] },
    { id: "c-mp-2", topic: "markt-preisbildung", text: "Ich kann Marktformen sowie Käufer- und Verkäufermarkt an IT-Beispielen erklären.", exam: ["AP1", "AP2"] },
    { id: "c-wo-1", topic: "wirtschaftsordnung", text: "Ich kann Merkmale, Möglichkeiten und Grenzen der sozialen Marktwirtschaft sowie die Ziele des magischen Vierecks mit Zielkonflikten erklären.", exam: ["AP2"] },
    { id: "c-wo-2", topic: "wirtschaftsordnung", text: "Ich kann Kartell, Konzern und Fusion sowie horizontale, vertikale und diagonale Zusammenschlüsse unterscheiden und Chancen und Risiken der Globalisierung nennen.", exam: ["AP2"] },
    { id: "c-kz-1", topic: "kennzahlen", text: "Ich kann Produktivität, Wirtschaftlichkeit, Eigen-, Gesamtkapital- und Umsatzrentabilität berechnen und in einem Satz deuten.", exam: ["AP1", "AP2"] },
    { id: "c-kz-2", topic: "kennzahlen", text: "Ich kann Indexreihen berechnen, auf ein neues Basisjahr umstellen und Indexpunkte von Prozenten unterscheiden.", exam: ["AP2"] },
    { id: "c-ag-1", topic: "angebotsvergleich-nwa", text: "Ich kann mehrere Angebote mit der Bezugskalkulation vergleichen und den Vorteil der Skontoausnutzung abschätzen.", exam: ["AP1", "AP2"] },
    { id: "c-ag-2", topic: "angebotsvergleich-nwa", text: "Ich kann eine Nutzwertanalyse mit K.-o.-Kriterien, Gewichten und Teilnutzen durchführen und die Entscheidung begründen.", exam: ["AP1", "AP2"] },
    { id: "c-hk-1", topic: "handelskalkulation", text: "Ich kann mit dem Kalkulationsschema vom Listeneinkaufspreis zum Bruttoverkaufspreis rechnen und dabei „vom Hundert“ und „im Hundert“ richtig anwenden.", exam: ["AP1"] },
    { id: "c-hk-2", topic: "handelskalkulation", text: "Ich kann Rückwärts- und Differenzkalkulationen durchführen sowie Kalkulationszuschlag, Kalkulationsfaktor und Handelsspanne berechnen.", exam: ["AP1"] },
    { id: "c-kv-1", topic: "kaufvertrag", text: "Ich kann das Zustandekommen eines Kaufvertrags prüfen und die Geschäftsfähigkeit der Beteiligten beurteilen.", exam: ["AP1", "AP2"] },
    { id: "c-kv-2", topic: "kaufvertrag", text: "Ich kann mangelhafte Lieferung, Lieferungs-, Annahme- und Zahlungsverzug erkennen und die Rechte in der richtigen Reihenfolge nennen.", exam: ["AP1", "AP2"] },
    { id: "c-as-1", topic: "arbeitsschutz", text: "Ich kann Arbeitsschutzvorschriften und Akteure (Fachkraft für Arbeitssicherheit, Betriebsarzt, Sicherheitsbeauftragte, Ersthelfer) zuordnen und einen Bildschirmarbeitsplatz ergonomisch einrichten.", exam: ["AP1", "AP2"] },
    { id: "c-as-2", topic: "arbeitsschutz", text: "Ich kann Sicherheitszeichen und Brandklassen zuordnen, das passende Löschmittel wählen und die Meldepflicht bei Arbeits- und Wegeunfällen anwenden.", exam: ["AP2"] },
    { id: "c-um-1", topic: "umwelt-nachhaltigkeit", text: "Ich kann die Abfallhierarchie anwenden und IT-Abfälle (Elektroaltgeräte, Batterien, Datenträger, Verpackungen) richtig entsorgen.", exam: ["AP2"] },
    { id: "c-um-2", topic: "umwelt-nachhaltigkeit", text: "Ich kann Green-IT-Maßnahmen und die drei Säulen der Nachhaltigkeit erklären und Compliance-Regeln im Betrieb beachten.", exam: ["AP1", "AP2"] },
    { id: "c-lz-1", topic: "lernen-zusammenarbeit", text: "Ich kann Anpassungs- und Aufstiegsfortbildung sowie Umschulung unterscheiden und Förderungen sowie die Europass-Dokumente nennen.", exam: ["AP2"] },
    { id: "c-lz-2", topic: "lernen-zusammenarbeit", text: "Ich kann Regeln für dienstliche E-Mails (An/CC/BCC) anwenden, Social Engineering erkennen und Folgen von Äußerungen in sozialen Medien einschätzen.", exam: ["AP2"] },
    { id: "c-ds-3", topic: "duales-system", text: "Ich kann die Mindestausbildungsvergütung für jedes Ausbildungsjahr berechnen, die 20-%-Grenze zum Tarif anwenden und Folgen von Pflichtverletzungen für Azubi und Betrieb nennen.", exam: ["AP2"] },
    { id: "c-sv-3", topic: "sozialversicherung", text: "Ich kann Beitragsbemessungsgrenzen, Versicherungspflichtgrenze sowie Minijob- und Midijob-Grenze bei einer Abrechnung berücksichtigen.", exam: ["AP2"] },
    { id: "c-u-3", topic: "unternehmensformen", text: "Ich kann Firmenarten unterscheiden und eG, e. V., gGmbH und Stiftung nach Zweck und Register einordnen.", exam: ["AP2"] },
    { id: "c-kz-3", topic: "kennzahlen", text: "Ich kann Inflationsrate und Reallohn aus einem Preisindex berechnen und die Produktivität als Umsatz je Beschäftigten mit Indexreihe angeben.", exam: ["AP2"] },
    { id: "c-as-3", topic: "arbeitsschutz", text: "Ich kann die Schritte einer Gefährdungsbeurteilung nennen, Gefährdungsarten an IT-Beispielen zuordnen und das STOP-Prinzip anwenden.", exam: ["AP2"] },
    { id: "c-lz-3", topic: "lernen-zusammenarbeit", text: "Ich kann Vorfälle den Schutzzielen zuordnen, DSGVO-Grundsätze und Betroffenenrechte nennen und Maßnahmen als technisch oder organisatorisch einordnen.", exam: ["AP2"] },
  ],
  glossary: [
    { term: "Abmahnung", def: "Rüge eines konkreten Fehlverhaltens mit der Androhung arbeitsrechtlicher Folgen im Wiederholungsfall; meist Voraussetzung für eine verhaltensbedingte Kündigung." },
    { term: "Allgemeinverbindlicherklärung", def: "Erklärung des Bundesarbeitsministeriums, dass ein Tarifvertrag für alle Arbeitgeber und Arbeitnehmer einer Branche gilt, auch ohne Verbands- oder Gewerkschaftsmitgliedschaft." },
    { term: "Ausbildungsrahmenplan", def: "Teil der Ausbildungsordnung, der die betriebliche Ausbildung sachlich und zeitlich gliedert." },
    { term: "Aussperrung", def: "Arbeitskampfmittel der Arbeitgeber: Beschäftigte werden von der Arbeit ausgeschlossen und erhalten keinen Lohn." },
    { term: "Beitragsbemessungsgrenze", def: "Einkommensgrenze, bis zu der Beiträge zur Sozialversicherung berechnet werden; Einkommen darüber ist beitragsfrei." },
    { term: "Betriebsvereinbarung", def: "Schriftlicher Vertrag zwischen Arbeitgeber und Betriebsrat, der unmittelbar für alle Beschäftigten des Betriebs gilt." },
    { term: "Bezugspreis", def: "Einstandspreis einer Ware: Listeneinkaufspreis abzüglich Rabatt und Skonto zuzüglich Bezugskosten." },
    { term: "Differenzkalkulation", def: "Kalkulation, die bei vorgegebenem Einkaufs- und Verkaufspreis den erzielbaren Gewinn ermittelt." },
    { term: "Dispositiver Faktor", def: "Leitende Arbeit, die die Elementarfaktoren plant, organisiert, steuert und kontrolliert." },
    { term: "Duales System", def: "Berufsausbildung an den zwei Lernorten Betrieb und Berufsschule." },
    { term: "Europass", def: "EU-Dokumentenmappe (Lebenslauf, Mobilitätsnachweis, Zeugniserläuterung, Diploma Supplement), die Qualifikationen europaweit verständlich macht." },
    { term: "Firma", def: "Name, unter dem ein Kaufmann seine Geschäfte betreibt und unterschreibt (§ 17 HGB); muss einen Rechtsformzusatz enthalten." },
    { term: "Friedenspflicht", def: "Verbot von Arbeitskämpfen über die in einem geltenden Tarifvertrag geregelten Inhalte während seiner Laufzeit." },
    { term: "Fusion", def: "Verschmelzung von Unternehmen zu einem einzigen Unternehmen; die beteiligten Firmen verlieren ihre rechtliche und wirtschaftliche Selbstständigkeit." },
    { term: "Gefährdungsbeurteilung", def: "Pflicht des Arbeitgebers nach § 5 ArbSchG, Gefährdungen an jedem Arbeitsplatz – auch psychische Belastungen – zu ermitteln, zu bewerten, Schutzmaßnahmen festzulegen und dies zu dokumentieren." },
    { term: "Genossenschaft (eG)", def: "Rechtsform zur Förderung der wirtschaftlichen Interessen ihrer Mitglieder, z. B. Volksbank oder Einkaufsgenossenschaft; eingetragen im Genossenschaftsregister." },
    { term: "Gleichgewichtspreis", def: "Preis, bei dem angebotene und nachgefragte Menge übereinstimmen und der Markt geräumt wird." },
    { term: "Günstigkeitsprinzip", def: "Grundsatz, dass von höherrangigen Regelungen (z. B. Tarifvertrag) nur zugunsten der Arbeitnehmer abgewichen werden darf." },
    { term: "Handelsregister", def: "Öffentliches Verzeichnis beim Amtsgericht mit Angaben über Kaufleute und Handelsgesellschaften; Abteilung A für Personen-, Abteilung B für Kapitalgesellschaften." },
    { term: "Handelsspanne", def: "Unterschied zwischen Verkaufspreis netto und Bezugspreis in Prozent des Verkaufspreises." },
    { term: "Handlungsvollmacht", def: "Formlos erteilte kaufmännische Vollmacht für alle gewöhnlichen Geschäfte (allgemeine Vollmacht), eine Art von Geschäften (Artvollmacht) oder ein einzelnes Geschäft (Einzelvollmacht); nicht im Handelsregister eingetragen." },
    { term: "Indexzahl", def: "Verhältniszahl, die Werte einer Reihe auf ein Basisjahr (= 100) bezieht." },
    { term: "Inflationsrate", def: "Prozentuale Veränderung des Verbraucherpreisindex gegenüber dem Vorjahr; zeigt, wie stark das Preisniveau gestiegen ist." },
    { term: "Jugend- und Auszubildendenvertretung (JAV)", def: "Gewählte Vertretung der Beschäftigten unter 18 und der Auszubildenden, die ihre Anliegen über den Betriebs- oder Personalrat einbringt; Amtszeit 2 Jahre." },
    { term: "Kalkulationszuschlag", def: "Aufschlag vom Bezugspreis auf den Listenverkaufspreis netto in Prozent des Bezugspreises." },
    { term: "Kartell", def: "Vertragliche Absprache rechtlich selbstständiger Unternehmen zur Beschränkung des Wettbewerbs; grundsätzlich verboten." },
    { term: "Konzern", def: "Zusammenfassung rechtlich selbstständiger Unternehmen unter einheitlicher Leitung." },
    { term: "Kündigungsschutzgesetz (KSchG)", def: "Gesetz, nach dem Arbeitgeberkündigungen in Betrieben mit mehr als 10 Arbeitnehmern nach 6 Monaten Beschäftigung sozial gerechtfertigt sein müssen." },
    { term: "Magisches Viereck", def: "Vier gesamtwirtschaftliche Ziele des Stabilitätsgesetzes: Preisniveaustabilität, hoher Beschäftigungsstand, außenwirtschaftliches Gleichgewicht und stetiges Wachstum." },
    { term: "Mindestausbildungsvergütung", def: "Gesetzliche Untergrenze der Ausbildungsvergütung nach § 17 BBiG; für Ausbildungsbeginn 2026 im 1. Jahr 724 €, in den Folgejahren 18 %, 35 % und 40 % mehr." },
    { term: "Minijob", def: "Geringfügige Beschäftigung bis zur Minijob-Grenze (2026: 603 € im Monat); für Beschäftigte frei von KV-, PV- und AV-Beiträgen, der Arbeitgeber zahlt Pauschalabgaben." },
    { term: "Nutzwertanalyse", def: "Entscheidungsverfahren, das Alternativen anhand gewichteter Kriterien mit Punkten bewertet und zu einem Gesamtnutzwert zusammenfasst." },
    { term: "Personalrat", def: "Arbeitnehmervertretung in Dienststellen des öffentlichen Dienstes nach Personalvertretungsrecht (in SH für Land und Kommunen: MBG Schl.-H.)." },
    { term: "Probezeit", def: "Vereinbarte Anfangszeit, in der mit verkürzter Frist gekündigt werden kann: in der Ausbildung 1–4 Monate, im Arbeitsverhältnis höchstens 6 Monate." },
    { term: "Produktivität", def: "Mengenmäßiges Verhältnis von Ausbringungsmenge zu Einsatzmenge." },
    { term: "Prokura", def: "Im Handelsregister eingetragene, umfassende kaufmännische Vollmacht für fast alle Geschäfte eines Handelsgewerbes (Zeichnung ppa.)." },
    { term: "Reallohn", def: "Um die Preisentwicklung bereinigter Lohn (Nominallohn × 100 ÷ Preisindex); zeigt die tatsächliche Kaufkraft." },
    { term: "Rentabilität", def: "Verhältnis des Gewinns zum eingesetzten Kapital oder zum Umsatz in Prozent." },
    { term: "Schutzziele", def: "Grundwerte der Informationssicherheit: Vertraulichkeit, Integrität und Verfügbarkeit, oft ergänzt um Authentizität." },
    { term: "Soziale Marktwirtschaft", def: "Wirtschaftsordnung Deutschlands, die freien Wettbewerb mit sozialem Ausgleich und staatlichem Ordnungsrahmen verbindet." },
    { term: "Tarifautonomie", def: "Grundgesetzlich geschütztes Recht der Tarifparteien, Arbeitsbedingungen ohne staatliche Einmischung auszuhandeln (Art. 9 Abs. 3 GG)." },
    { term: "TOM", def: "Technische und organisatorische Maßnahmen nach Art. 32 DSGVO, mit denen personenbezogene Daten angemessen geschützt werden, z. B. Verschlüsselung, Zugriffsrechte, Schulungen und Richtlinien." },
    { term: "Umlageverfahren", def: "Finanzierung, bei der laufende Beiträge sofort für laufende Leistungen verwendet werden, z. B. in der gesetzlichen Rentenversicherung." },
    { term: "Urabstimmung", def: "Abstimmung der Gewerkschaftsmitglieder über Beginn oder Ende eines Streiks." },
    { term: "Wegeunfall", def: "Unfall auf dem direkten Weg zwischen Wohnung und Arbeitsstätte oder Berufsschule; durch die gesetzliche Unfallversicherung abgesichert." },
    { term: "Wirtschaftlichkeit", def: "Wertmäßiges Verhältnis von Ertrag zu Aufwand; ein Wert über 1 bedeutet wirtschaftliches Arbeiten." },
  ],
  links: [
    { title: "Berufsbildungsgesetz (BBiG)", url: "https://www.gesetze-im-internet.de/bbig_2005/", note: "Ausbildungsvertrag, Probezeit, Kündigung, Pflichten – gesetze-im-internet.de" },
    { title: "Jugendarbeitsschutzgesetz (JArbSchG)", url: "https://www.gesetze-im-internet.de/jarbschg/", note: "Arbeitszeit, Pausen, Urlaub und Berufsschule für Jugendliche" },
    { title: "§ 622 BGB – Kündigungsfristen", url: "https://www.gesetze-im-internet.de/bgb/__622.html", note: "Grund- und verlängerte Kündigungsfristen im Wortlaut" },
    { title: "Betriebsverfassungsgesetz (BetrVG)", url: "https://www.gesetze-im-internet.de/betrvg/", note: "Betriebsrat, JAV und Beteiligungsrechte" },
    { title: "Europass (Europäische Union)", url: "https://europass.europa.eu/de", note: "Lebenslauf erstellen und Europass-Dokumente" },
    { title: "Deutsche Gesetzliche Unfallversicherung (DGUV)", url: "https://www.dguv.de/", note: "Unfallversicherung, Arbeitsschutz, Unfallverhütungsvorschriften" },
    { title: "Kündigungsschutzgesetz (KSchG)", url: "https://www.gesetze-im-internet.de/kschg/", note: "Sozial ungerechtfertigte Kündigung, Klagefrist, Schutz von Betriebsratsmitgliedern" },
    { title: "Arbeitszeitgesetz (ArbZG)", url: "https://www.gesetze-im-internet.de/arbzg/", note: "Höchstarbeitszeit, Ruhepausen, Ruhezeit – Reformstand vor der Prüfung prüfen" },
    { title: "Bundesurlaubsgesetz (BUrlG)", url: "https://www.gesetze-im-internet.de/burlg/", note: "Mindesturlaub, Wartezeit, Teilurlaub" },
    { title: "BIBB – Mindestausbildungsvergütung", url: "https://www.bibb.de/de/199658.php", note: "aktuelle Beträge je Ausbildungsjahr" },
    { title: "Bundesamt für Sicherheit in der Informationstechnik (BSI)", url: "https://www.bsi.bund.de/", note: "IT-Grundschutz, Warnungen, Tipps zu Phishing und Social Engineering" },
    { title: "Statistisches Bundesamt (Destatis)", url: "https://www.destatis.de/", note: "Verbraucherpreisindex und Inflationsrate" },
  ]
});
