/* LF 4 – Schutzbedarfsanalyse im eigenen Arbeitsbereich durchführen */
LEARN.module({
  id: "lf04",
  type: "lf",
  nr: 4,
  title: "Schutzbedarfsanalyse im eigenen Arbeitsbereich durchführen",
  year: 1,
  hours: 40,
  exam: ["AP1", "AP2"],
  summary: "Informationssicherheit und Datenschutz im eigenen Arbeitsbereich: Schutzziele, DSGVO/BDSG, BSI IT-Grundschutz, Schutzbedarfsfeststellung und Risikoanalyse, Bedrohungen wie Malware und Phishing, passende Schutzmaßnahmen sowie Urheber-, Lizenz- und KI-Recht.",
  goals: [
    "Informationssicherheit, IT-Sicherheit, Datensicherheit und Datenschutz voneinander abgrenzen und die Schutzziele an Beispielen erläutern",
    "Die zentralen Regeln von DSGVO, BDSG und Landesdatenschutzgesetz SH anwenden: Grundsätze, Rechtsgrundlagen, Betroffenenrechte, TOM, Meldepflichten und Bußgelder",
    "Die Rolle des BSI, die BSI-Standards 200-1 bis 200-4, das IT-Grundschutz-Kompendium und ISO/IEC 27001 einordnen",
    "Eine Schutzbedarfsfeststellung für Anwendungen, IT-Systeme, Räume und Kommunikationsverbindungen durchführen und mit Maximumprinzip, Kumulations- und Verteilungseffekt begründen",
    "Risiken aus Eintrittswahrscheinlichkeit und Schadenshöhe bewerten, in einer Risikomatrix einordnen und eine passende Risikobehandlung auswählen",
    "Bedrohungen wie Malware, Ransomware, Phishing, Social Engineering, APT, Botnetze und DDoS erkennen und Gegenmaßnahmen ableiten",
    "Technische, organisatorische, personelle und infrastrukturelle Schutzmaßnahmen für den eigenen Arbeitsplatz empfehlen und umsetzen (Passwort-Policy, MFA, Verschlüsselung, Härtung, Backup, NAS, sicheres Löschen, Container/Sandbox)",
    "Urheber-, Marken- und Lizenzrecht auf Software anwenden und Lizenzmodelle (proprietär, Open Source, Freeware, Shareware) unterscheiden",
    "Die Risikoklassen der EU-KI-Verordnung sowie Datenschutzrisiken durch Telemetrie- und Metadaten einschätzen"
  ],
  school: {
    hinweise: "Der Moodle-Kurs der Klasse gliedert LF 4 in sechs Blöcke: Datenschutz & Datensicherheit (mit BSI als wichtigster Informationsquelle), Gesetze und Standards (DSGVO, BDSG, LDSG Schleswig-Holstein, BSI, ISO/IEC 27000, Regeln für KI-Systeme, Urheber-, Marken- und Lizenzrecht), Malware und Angriffsformen (inkl. BSI-Lagebericht), Schutzbedarf feststellen (Beispiele Software und Clients einer Personalabteilung, Maßnahmen, Software-Container), Formen von Cyberangriffen sowie Telemetrie- und Metadaten. Geübt wird viel mit Gesetzesauszügen (z. B. Art. 32 DSGVO, UrhG und MarkenG) – trainiere, die passende Vorschrift schnell zu finden. Hinweis: Der im Material genannte BSI-Standard 100-2 ist der Vorgänger des heute gültigen Standards 200-2.",
    themen: [
      "Datenschutz & Datensicherheit",
      "Informationsquellen und verantwortliche Stellen (BSI, BfDI, ULD)",
      "DSGVO, BDSG und Landesdatenschutzgesetz SH",
      "Standards: BSI IT-Grundschutz und ISO/IEC 27000",
      "Regelungen für KI-Systeme (EU-KI-Verordnung)",
      "Urheberrecht, Copyright, Markenrecht und Lizenzen",
      "Malware: Arten von Schadprogrammen",
      "APT, Botnetze und DDoS-Angriffe",
      "Identitätsdiebstahl und Social Engineering",
      "Schutzbedarf feststellen: Software und Clients",
      "Schutzmaßnahmen und Software-Container",
      "Formen von Cyberangriffen",
      "Telemetrie- und Metadaten"
    ]
  },
  topics: [
    {
      id: "grundlagen",
      title: "Informationssicherheit, Datenschutz & Schutzziele",
      exam: ["AP1", "AP2"],
      summary: "Begriffe sauber abgrenzen, die Schutzziele Vertraulichkeit, Integrität, Verfügbarkeit (plus Authentizität und Verbindlichkeit) erklären und Rollen im Betrieb unterscheiden.",
      html: `
        <p>In fast jeder Prüfung taucht ein Sicherheits- oder Datenschutzfall auf. Die Punkte gibt es nur, wenn du die Begriffe <strong>exakt</strong> verwendest. Deshalb klären wir zuerst, was womit gemeint ist.</p>
        <h5>Vier Begriffe, die oft verwechselt werden</h5>
        <table><thead><tr><th>Begriff</th><th>Was wird geschützt?</th><th>Leitfrage</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td><strong>Datenschutz</strong></td><td>der <em>Mensch</em> – sein Persönlichkeitsrecht bzw. seine informationelle Selbstbestimmung</td><td>Darf ich diese personenbezogenen Daten überhaupt verarbeiten?</td><td>Kundendaten nur mit Rechtsgrundlage speichern, nicht an Dritte verkaufen</td></tr>
          <tr><td><strong>Datensicherheit</strong></td><td>die <em>Daten</em> selbst (egal ob personenbezogen oder nicht)</td><td>Wie schütze ich die Daten vor Verlust, Manipulation und unbefugtem Zugriff?</td><td>Backup, Verschlüsselung, Zugriffsrechte</td></tr>
          <tr><td><strong>IT-Sicherheit</strong></td><td>IT-Systeme und elektronisch gespeicherte Informationen</td><td>Sind Server, Clients, Netze und Software sicher betrieben?</td><td>Firewall, Patches, Virenschutz</td></tr>
          <tr><td><strong>Informationssicherheit</strong></td><td><em>alle</em> Informationen – digital und analog (Papier, Gespräche, Wissen)</td><td>Sind alle Informationen des Unternehmens angemessen geschützt?</td><td>zusätzlich Aktenvernichtung, Clean Desk, Vertraulichkeitsvereinbarung</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>Merke:</strong> <em>Datenschutz</em> schützt Menschen, <em>Datensicherheit</em> schützt Daten. Die Datensicherheit ist das <strong>Werkzeug</strong>, mit dem der Datenschutz umgesetzt wird (Art. 32 DSGVO verlangt „Sicherheit der Verarbeitung“). Informationssicherheit ist der <strong>umfassendste</strong> Begriff und schließt die IT-Sicherheit ein.</div>
        <h5>Die Schutzziele (Grundwerte)</h5>
        <p>Das BSI nennt Vertraulichkeit, Integrität und Verfügbarkeit die drei <strong>Grundwerte</strong> der Informationssicherheit (englisch <em>CIA-Triade</em>: Confidentiality, Integrity, Availability). Ergänzt werden sie häufig um Authentizität und Verbindlichkeit.</p>
        <table><thead><tr><th>Schutzziel</th><th>Bedeutung</th><th>Typische Verletzung</th><th>Typische Maßnahmen</th></tr></thead><tbody>
          <tr><td><strong>Vertraulichkeit</strong></td><td>Nur Befugte können Informationen lesen.</td><td>Gehaltsliste landet im falschen E-Mail-Verteiler; Notebook wird gestohlen</td><td>Verschlüsselung, Berechtigungskonzept, Authentifizierung</td></tr>
          <tr><td><strong>Integrität</strong></td><td>Daten sind vollständig und unverändert – oder jede Änderung ist erkennbar; Systeme arbeiten korrekt.</td><td>Angreifer ändert die IBAN in einer Rechnung; Übertragungsfehler</td><td>Hashwerte, digitale Signaturen, Protokollierung, Rechte nur „lesen“</td></tr>
          <tr><td><strong>Verfügbarkeit</strong></td><td>Daten und Systeme stehen zur vereinbarten Zeit nutzbar bereit.</td><td>Serverausfall, Ransomware, DDoS, Stromausfall</td><td>Redundanz, Backup, USV, Wartungsverträge, Monitoring</td></tr>
          <tr><td><strong>Authentizität</strong></td><td>Echtheit: Ein Kommunikationspartner oder eine Information stammt nachweisbar von der angegebenen Quelle.</td><td>Gefälschte Absenderadresse beim Phishing</td><td>Zertifikate, digitale Signatur, MFA</td></tr>
          <tr><td><strong>Verbindlichkeit</strong> (Nichtabstreitbarkeit)</td><td>Eine Handlung kann dem Handelnden eindeutig zugeordnet und später nicht abgestritten werden.</td><td>Kunde bestreitet, eine Bestellung abgeschickt zu haben</td><td>qualifizierte elektronische Signatur, revisionssichere Protokolle</td></tr>
        </tbody></table>
        <div class="callout tipp"><strong>Eselsbrücke:</strong> „<strong>V-I-V</strong>“ – <strong>V</strong>ertraulichkeit = niemand <em>liest</em> mit, <strong>I</strong>ntegrität = niemand <em>ändert</em> unbemerkt, <strong>V</strong>erfügbarkeit = es <em>läuft</em>, wenn ich es brauche.</div>
        <h5>Verfügbarkeit berechnen</h5>
        <div class="callout formel"><strong>Formel:</strong><br>Verfügbarkeit (%) = (Gesamtzeit − Ausfallzeit) ÷ Gesamtzeit × 100<br>zulässige Ausfallzeit = Gesamtzeit × (100 % − Verfügbarkeit)</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> Ein Hoster garantiert 99,9 % Verfügbarkeit pro Jahr.<br>Gesamtzeit = 365 × 24 h = 8.760 h<br>zulässige Ausfallzeit = 8.760 h × 0,001 = 8,76 h ≈ <strong>8 h 46 min</strong> pro Jahr.<br>Bei 99,99 % sind es nur noch 8.760 h × 0,0001 = 0,876 h ≈ <strong>52,6 min</strong>.</div>
        <h5>Wer ist wofür zuständig?</h5>
        <table><thead><tr><th></th><th>Informationssicherheitsbeauftragte/r (ISB)</th><th>Datenschutzbeauftragte/r (DSB)</th></tr></thead><tbody>
          <tr><td>Schützt</td><td>alle Informationen und IT-Systeme des Unternehmens</td><td>die Rechte der Personen, deren Daten verarbeitet werden</td></tr>
          <tr><td>Grundlage</td><td>Sicherheitsleitlinie, BSI IT-Grundschutz, ISO/IEC 27001; bei KRITIS/NIS2 gesetzliche Pflichten</td><td>gesetzlich: Art. 37–39 DSGVO, § 38 BDSG</td></tr>
          <tr><td>Aufgaben</td><td>Sicherheitsprozess steuern, Sicherheitskonzept erstellen, Vorfälle auswerten, Schulungen</td><td>beraten, Einhaltung überwachen, Ansprechpartner für Betroffene und Aufsichtsbehörde</td></tr>
          <tr><td>Stellung</td><td>berichtet an die Geschäftsleitung</td><td>weisungsfrei, darf wegen seiner Aufgaben nicht benachteiligt werden</td></tr>
        </tbody></table>
        <p>Beide Rollen sollten <strong>nicht</strong> von derselben Person oder vom IT-Leiter wahrgenommen werden, weil sonst ein Interessenkonflikt entsteht: Man würde sich selbst kontrollieren. Die <strong>Gesamtverantwortung</strong> für Sicherheit und Datenschutz bleibt immer bei der <strong>Geschäftsleitung</strong>. Jede Mitarbeiterin und jeder Mitarbeiter trägt im eigenen Arbeitsbereich Verantwortung, z. B. durch Sperren des Bildschirms und Melden verdächtiger Vorfälle.</p>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Ein gestohlenes, aber verschlüsseltes Notebook verletzt die <em>Verfügbarkeit</em> (Gerät weg), nicht aber die <em>Vertraulichkeit</em>. Eine geänderte Überweisung verletzt die <em>Integrität</em>, auch wenn niemand etwas „gelesen“ hat. Ordne immer genau zu und begründe mit einem Satz.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Nennen</em> Sie die drei Schutzziele und <em>ordnen</em> Sie die folgenden Vorfälle zu“, „<em>Erläutern</em> Sie den Unterschied zwischen Datenschutz und Datensicherheit“, „<em>Grenzen</em> Sie die Aufgaben von ISB und DSB <em>ab</em>“ oder „<em>Berechnen</em> Sie die maximale Ausfallzeit bei 99,5 % Verfügbarkeit“. Beim Zuordnen immer das Schutzziel <strong>und</strong> eine kurze Begründung schreiben.</div>
      `
    },
    {
      id: "dsgvo-grundsaetze",
      title: "DSGVO I: Personenbezug, Grundsätze, Rechtsgrundlagen, Betroffenenrechte",
      exam: ["AP1", "AP2"],
      summary: "Was personenbezogene Daten sind, nach welchen Grundsätzen (Art. 5) und auf welcher Rechtsgrundlage (Art. 6) verarbeitet werden darf und welche Rechte Betroffene haben (Art. 12–22).",
      html: `
        <p>Die <strong>Datenschutz-Grundverordnung (DSGVO)</strong> gilt seit dem <strong>25. Mai 2018</strong> unmittelbar in allen EU-Staaten. Sie regelt die Verarbeitung <strong>personenbezogener Daten</strong> durch Unternehmen, Vereine und Behörden. Rein private und familiäre Tätigkeiten sind ausgenommen.</p>
        <h5>Personenbezogene Daten (Art. 4 Nr. 1)</h5>
        <p>Das sind <strong>alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen</strong>. Identifizierbar heißt: Die Person lässt sich direkt oder mit Zusatzwissen bestimmen.</p>
        <ul>
          <li>direkt: Name, Anschrift, E-Mail-Adresse, Foto, Personalnummer</li>
          <li>indirekt: Kfz-Kennzeichen, Kundennummer, IP-Adresse, Standortdaten, Geräte-ID</li>
          <li><strong>keine</strong> personenbezogenen Daten: Daten juristischer Personen (z. B. Umsatz einer GmbH), echte anonyme Statistiken</li>
        </ul>
        <p><strong>Besondere Kategorien (Art. 9)</strong> dürfen nur ausnahmsweise verarbeitet werden (z. B. mit ausdrücklicher Einwilligung): ethnische Herkunft, politische Meinung, Religion/Weltanschauung, Gewerkschaftszugehörigkeit, genetische und biometrische Daten, Gesundheitsdaten, Sexualleben/sexuelle Orientierung.</p>
        <h5>Anonymisierung oder Pseudonymisierung?</h5>
        <table><thead><tr><th></th><th>Pseudonymisierung (Art. 4 Nr. 5)</th><th>Anonymisierung</th></tr></thead><tbody>
          <tr><td>Vorgehen</td><td>Identifizierende Merkmale werden durch ein Kennzeichen ersetzt; die Zuordnungstabelle wird getrennt und geschützt aufbewahrt.</td><td>Der Personenbezug wird so entfernt, dass niemand ihn mit vertretbarem Aufwand wiederherstellen kann.</td></tr>
          <tr><td>Umkehrbar?</td><td>ja, mit dem Zusatzwissen</td><td>nein</td></tr>
          <tr><td>DSGVO gilt?</td><td><strong>ja</strong> – es bleiben personenbezogene Daten</td><td><strong>nein</strong></td></tr>
          <tr><td>Beispiel</td><td>„Mitarbeiter M-0815“ statt „Jana Petersen“ in einer Krankenstatistik</td><td>„Abteilung Vertrieb: 4,2 Krankheitstage im Schnitt“</td></tr>
        </tbody></table>
        <h5>Grundsätze der Verarbeitung (Art. 5)</h5>
        <table><thead><tr><th>Grundsatz</th><th>Bedeutung in einem Satz</th></tr></thead><tbody>
          <tr><td>Rechtmäßigkeit, Treu und Glauben, Transparenz</td><td>nur mit Rechtsgrundlage, fair und für die Betroffenen nachvollziehbar</td></tr>
          <tr><td>Zweckbindung</td><td>Daten nur für festgelegte, eindeutige Zwecke erheben und nicht zweckfremd weiterverwenden</td></tr>
          <tr><td>Datenminimierung</td><td>nur so viele Daten wie für den Zweck nötig</td></tr>
          <tr><td>Richtigkeit</td><td>Daten müssen sachlich richtig und aktuell sein</td></tr>
          <tr><td>Speicherbegrenzung</td><td>löschen, sobald der Zweck erfüllt ist und keine Aufbewahrungsfrist entgegensteht</td></tr>
          <tr><td>Integrität und Vertraulichkeit</td><td>angemessene Sicherheit durch technische und organisatorische Maßnahmen</td></tr>
          <tr><td>Rechenschaftspflicht (Abs. 2)</td><td>Der Verantwortliche muss die Einhaltung <em>nachweisen</em> können (Dokumentation!).</td></tr>
        </tbody></table>
        <h5>Rechtmäßigkeit (Art. 6): Verbot mit Erlaubnisvorbehalt</h5>
        <p>Jede Verarbeitung ist verboten, <strong>es sei denn</strong>, mindestens eine Rechtsgrundlage greift:</p>
        <ol>
          <li><strong>Einwilligung</strong> der betroffenen Person (lit. a)</li>
          <li><strong>Vertrag</strong> oder vorvertragliche Maßnahmen (lit. b) – z. B. Lieferadresse für eine Bestellung</li>
          <li><strong>rechtliche Verpflichtung</strong> (lit. c) – z. B. steuerliche Aufbewahrungspflicht</li>
          <li>Schutz <strong>lebenswichtiger Interessen</strong> (lit. d)</li>
          <li><strong>öffentliche Aufgabe</strong> (lit. e) – z. B. Schulverwaltung</li>
          <li><strong>berechtigtes Interesse</strong> des Verantwortlichen, sofern die Interessen der Betroffenen nicht überwiegen (lit. f) – z. B. Videoüberwachung eines Serverraums</li>
        </ol>
        <p>Eine <strong>Einwilligung</strong> (Art. 7) muss freiwillig, informiert, für einen bestimmten Fall und eindeutig sein (aktives Handeln, kein vorangekreuztes Kästchen) und <strong>nachweisbar</strong>. Sie ist <strong>jederzeit widerrufbar</strong> – so einfach wie erteilt – und der Widerruf wirkt nur <strong>für die Zukunft</strong>. Bei Online-Diensten brauchen Kinder unter <strong>16 Jahren</strong> die Zustimmung der Eltern (Art. 8).</p>
        <h5>Rechte der Betroffenen (Art. 12–22)</h5>
        <table><thead><tr><th>Artikel</th><th>Recht</th><th>Kurz erklärt</th></tr></thead><tbody>
          <tr><td>12</td><td>transparente Information, Fristen</td><td>Antwort spätestens nach <strong>1 Monat</strong> (in komplexen Fällen +2 Monate), grundsätzlich kostenlos</td></tr>
          <tr><td>13/14</td><td>Informationspflicht</td><td>bei Erhebung informieren: wer, wozu, Rechtsgrundlage, Speicherdauer, Rechte</td></tr>
          <tr><td>15</td><td>Auskunft</td><td>welche Daten gespeichert sind, woher, wozu, an wen, wie lange – inkl. Kopie</td></tr>
          <tr><td>16</td><td>Berichtigung</td><td>falsche Daten korrigieren lassen</td></tr>
          <tr><td>17</td><td>Löschung („Recht auf Vergessenwerden“)</td><td>z. B. wenn der Zweck entfallen ist oder die Einwilligung widerrufen wurde</td></tr>
          <tr><td>18</td><td>Einschränkung der Verarbeitung</td><td>Daten „sperren“, z. B. während ihre Richtigkeit geprüft wird</td></tr>
          <tr><td>20</td><td>Datenübertragbarkeit</td><td>Daten in einem gängigen, maschinenlesbaren Format erhalten (z. B. CSV, JSON)</td></tr>
          <tr><td>21</td><td>Widerspruch</td><td>z. B. gegen Direktwerbung – dann ist diese Verarbeitung sofort zu beenden</td></tr>
          <tr><td>22</td><td>keine rein automatisierte Einzelentscheidung</td><td>Anspruch auf Prüfung durch einen Menschen, z. B. bei automatischer Kreditablehnung</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel:</strong> Ein Kunde der Nordlicht IT GmbH verlangt am 12.10.2026 Auskunft. Die Firma prüft zuerst seine Identität und antwortet spätestens am <strong>12.11.2026</strong> (1 Monat) mit Datenkopie, Zwecken, Empfängern, Speicherdauer und Herkunft der Daten.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Pseudonymisierte Daten bleiben personenbezogen. Und Löschen geht nicht immer sofort: Rechnungen unterliegen gesetzlichen Aufbewahrungsfristen – bis dahin werden sie gesperrt (Einschränkung).</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Prüfen</em> Sie, ob personenbezogene Daten vorliegen“, „<em>Nennen</em> Sie drei Betroffenenrechte“, „<em>Unterscheiden</em> Sie Anonymisierung und Pseudonymisierung“, „<em>Beschreiben</em> Sie die Folgen eines Widerrufs der Einwilligung“.</div>
      `
    },
    {
      id: "dsgvo-pflichten",
      title: "DSGVO II: Pflichten, TOM, Datenpannen, Bußgelder, BDSG & LDSG SH",
      exam: ["AP1", "AP2"],
      summary: "Welche Pflichten Verantwortliche haben: TOM nach Art. 32, Meldung von Datenpannen (Art. 33/34), Auftragsverarbeitung (Art. 28), Datenschutzbeauftragte, Bußgelder – und wie BDSG und LDSG SH die DSGVO ergänzen.",
      html: `
        <h5>Verantwortlicher und Auftragsverarbeiter (Art. 28)</h5>
        <p>Der <strong>Verantwortliche</strong> entscheidet über Zweck und Mittel der Verarbeitung. Ein <strong>Auftragsverarbeiter</strong> verarbeitet Daten nur <em>im Auftrag und nach Weisung</em> – z. B. Cloud-Hoster, IT-Dienstleister mit Fernwartung, Aktenvernichter. Dafür ist ein <strong>Auftragsverarbeitungsvertrag (AVV)</strong> nötig: Gegenstand, Dauer, Zweck, Weisungsbindung, Vertraulichkeit, TOM, Subunternehmer nur mit Genehmigung, Kontrollrechte, Löschung/Rückgabe am Ende. Die <strong>Verantwortung bleibt beim Auftraggeber</strong>.</p>
        <h5>Sicherheit der Verarbeitung (Art. 32) – die TOM</h5>
        <p>Verlangt werden <strong>geeignete technische und organisatorische Maßnahmen (TOM)</strong> unter Berücksichtigung von <strong>Stand der Technik</strong>, <strong>Implementierungskosten</strong>, Art, Umfang und Zweck der Verarbeitung sowie <strong>Eintrittswahrscheinlichkeit und Schwere des Risikos</strong>. Beispielhaft genannt:</p>
        <ol>
          <li>Pseudonymisierung und Verschlüsselung,</li>
          <li>die Fähigkeit, Vertraulichkeit, Integrität, Verfügbarkeit und <strong>Belastbarkeit</strong> der Systeme dauerhaft sicherzustellen,</li>
          <li>die Fähigkeit, Daten nach einem Zwischenfall <strong>rasch wiederherzustellen</strong> (Backup, Notfallplan),</li>
          <li>ein Verfahren zur <strong>regelmäßigen Überprüfung</strong> der Wirksamkeit der Maßnahmen.</li>
        </ol>
        <p>Dazu kommen <em>Privacy by Design / by Default</em> (Art. 25), das <strong>Verzeichnis von Verarbeitungstätigkeiten</strong> (Art. 30) und bei voraussichtlich hohem Risiko eine <strong>Datenschutz-Folgenabschätzung</strong> (Art. 35).</p>
        <h5>Datenpannen melden (Art. 33 und 34)</h5>
        <table><thead><tr><th></th><th>Art. 33: Meldung an die Aufsichtsbehörde</th><th>Art. 34: Benachrichtigung der Betroffenen</th></tr></thead><tbody>
          <tr><td>Wann?</td><td>bei jeder Verletzung des Schutzes personenbezogener Daten – außer sie führt <em>voraussichtlich nicht</em> zu einem Risiko</td><td>wenn <strong>voraussichtlich ein hohes Risiko</strong> für die Betroffenen besteht</td></tr>
          <tr><td>Frist</td><td>unverzüglich, möglichst <strong>binnen 72 Stunden</strong> nach Bekanntwerden; eine Verspätung ist zu begründen</td><td>unverzüglich</td></tr>
          <tr><td>Inhalt</td><td>Art der Verletzung, Kategorien und ungefähre Zahl der Betroffenen, Kontakt des DSB, wahrscheinliche Folgen, ergriffene Maßnahmen</td><td>in klarer, einfacher Sprache: was passiert ist, Folgen, Maßnahmen, Ansprechpartner</td></tr>
          <tr><td>Ausnahme</td><td>–</td><td>z. B. wenn die Daten sicher verschlüsselt waren</td></tr>
        </tbody></table>
        <p>Jede Panne wird <strong>intern dokumentiert</strong>, auch ohne Meldepflicht.</p>
        <div class="callout beispiel"><strong>Beispiel:</strong> Die Förde Logistik GmbH in Kiel bemerkt am Freitag um 16:00 Uhr, dass ihre Kundendatenbank kopiert wurde. Die Meldung an das ULD muss spätestens <strong>Montag 16:00 Uhr</strong> vorliegen. Da Bankverbindungen unverschlüsselt betroffen sind (hohes Risiko), sind auch die Kunden zu benachrichtigen.</div>
        <h5>Datenschutzbeauftragte/r (Art. 37–39 DSGVO, § 38 BDSG)</h5>
        <p>Pflicht u. a. bei Behörden, bei umfangreicher Verarbeitung besonderer Kategorien (z. B. Klinik) und nach § 38 BDSG, wenn <strong>in der Regel mindestens 20 Personen ständig</strong> mit automatisierter Verarbeitung personenbezogener Daten beschäftigt sind. Der DSB kann intern oder extern sein, ist <strong>weisungsfrei</strong>, berichtet der höchsten Managementebene und hat besonderen Kündigungsschutz.</p>
        <h5>Bußgelder und Haftung</h5>
        <div class="callout formel"><strong>Bußgeldrahmen (Art. 83):</strong><br>Stufe 1 (z. B. fehlende TOM, kein Verzeichnis, keine Meldung): bis 10 Mio. € <em>oder</em> 2 % des weltweiten Vorjahresumsatzes<br>Stufe 2 (z. B. Verstoß gegen Grundsätze, Rechtsgrundlagen, Betroffenenrechte): bis 20 Mio. € <em>oder</em> 4 % des weltweiten Vorjahresumsatzes<br>→ es gilt jeweils der <strong>höhere</strong> Betrag.</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> Ein Konzern hat 1,5 Mrd. € Jahresumsatz und verarbeitet Daten ohne Rechtsgrundlage (Stufe 2).<br>4 % × 1.500.000.000 € = 60.000.000 € &gt; 20.000.000 € → Höchstrahmen <strong>60 Mio. €</strong>.<br>Ein Mittelständler mit 60 Mio. € Umsatz: 4 % × 60.000.000 € = 2.400.000 € &lt; 20.000.000 € → Höchstrahmen <strong>20 Mio. €</strong>.<br>Die tatsächliche Strafe legt die Behörde nach Schwere, Vorsatz und Kooperation fest – der Rahmen ist nur die Obergrenze.</div>
        <p>Betroffene können zusätzlich <strong>Schadenersatz</strong> verlangen, auch immateriellen (Art. 82), und sich bei der Aufsichtsbehörde <strong>beschweren</strong> (Art. 77).</p>
        <h5>BDSG und Landesdatenschutzgesetz Schleswig-Holstein</h5>
        <table><thead><tr><th>Regelwerk</th><th>Gilt für</th><th>Beispiele für Inhalte</th></tr></thead><tbody>
          <tr><td><strong>DSGVO</strong> (EU-Verordnung)</td><td>alle Verantwortlichen in der EU – hat Vorrang</td><td>Grundsätze, Rechtsgrundlagen, Betroffenenrechte, TOM, Bußgelder</td></tr>
          <tr><td><strong>BDSG</strong> (Bundesgesetz, 2018)</td><td>nicht-öffentliche Stellen (Unternehmen) und öffentliche Stellen des Bundes</td><td>füllt Öffnungsklauseln: DSB ab 20 Personen (§ 38), Beschäftigtendaten (§ 26 – nach einem EuGH-Urteil von 2023 nur noch eingeschränkt anwendbar), Straf- und Bußgeldvorschriften</td></tr>
          <tr><td><strong>LDSG SH</strong> (Landesgesetz, 2018)</td><td>öffentliche Stellen des Landes SH: Landesbehörden, Kreise, Gemeinden, öffentliche Schulen</td><td>Datenverarbeitung durch Landesbehörden, Stellung der Landesdatenschutzaufsicht</td></tr>
        </tbody></table>
        <p><strong>Aufsichtsbehörden:</strong> In Schleswig-Holstein ist das <strong>Unabhängige Landeszentrum für Datenschutz (ULD)</strong> in Kiel zuständig – für Unternehmen <em>und</em> Landesbehörden. Für Bundesbehörden sowie Telekommunikations- und Postdienste ist die bzw. der <strong>Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</strong> zuständig. Für Cookies und Endgerätezugriffe gilt ergänzend das <strong>TDDDG</strong> (früher TTDSG).</p>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Die 72 Stunden zählen ab <em>Bekanntwerden</em> der Panne und laufen auch am Wochenende. Betroffene müssen nur bei <em>hohem</em> Risiko benachrichtigt werden, die Behörde schon bei einem Risiko.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Nennen</em> Sie vier TOM nach Art. 32“, „<em>Beschreiben</em> Sie das Vorgehen nach einer Datenpanne inkl. Frist“, „<em>Erläutern</em> Sie, wann ein AVV nötig ist“, „<em>Berechnen</em> Sie den Bußgeldrahmen“ – oft mit Gesetzesauszug, aus dem du die passende Stelle heraussuchst.</div>
      `
    },
    {
      id: "bsi-grundschutz",
      title: "BSI und IT-Grundschutz: Standards 200-1 bis 200-4 und Kompendium",
      exam: ["AP1", "AP2"],
      summary: "Aufgaben des BSI, die BSI-Standards 200-1/-2/-3/-4, die Absicherungsvarianten und der Aufbau des IT-Grundschutz-Kompendiums mit Bausteinen und elementaren Gefährdungen.",
      html: `
        <h5>Das BSI</h5>
        <p>Das <strong>Bundesamt für Sicherheit in der Informationstechnik (BSI)</strong> mit Sitz in Bonn ist die nationale Cybersicherheitsbehörde. Es gehört zum Geschäftsbereich des Bundesinnenministeriums und arbeitet auf Grundlage des <strong>BSI-Gesetzes (BSIG)</strong>. Seine wichtigsten Aufgaben:</p>
        <ul>
          <li>die IT des Bundes schützen und Angriffe abwehren (u. a. mit dem <strong>CERT-Bund</strong>),</li>
          <li><strong>warnen und informieren</strong>: Sicherheitswarnungen, Verbraucherinformationen, jährlicher <strong>Lagebericht</strong> zur IT-Sicherheit in Deutschland,</li>
          <li><strong>Standards und Empfehlungen</strong> herausgeben: IT-Grundschutz, Technische Richtlinien, Mindeststandards,</li>
          <li><strong>prüfen und zertifizieren</strong>: z. B. ISO 27001-Zertifizierung auf Basis von IT-Grundschutz, Produktzertifizierungen, IT-Sicherheitskennzeichen,</li>
          <li><strong>Aufsicht</strong> über Betreiber kritischer Infrastrukturen (KRITIS) und über Einrichtungen, die unter die NIS2-Regeln fallen.</li>
        </ul>
        <h5>Die BSI-Standards</h5>
        <table><thead><tr><th>Standard</th><th>Titel / Inhalt</th><th>Kernfrage</th></tr></thead><tbody>
          <tr><td><strong>200-1</strong></td><td>Managementsysteme für Informationssicherheit (ISMS)</td><td>Wie organisiere ich Informationssicherheit als dauerhaften Prozess (Rollen, Leitlinie, PDCA)?</td></tr>
          <tr><td><strong>200-2</strong></td><td>IT-Grundschutz-Methodik</td><td>Wie gehe ich Schritt für Schritt vor (Strukturanalyse, Schutzbedarf, Modellierung, Check)?</td></tr>
          <tr><td><strong>200-3</strong></td><td>Risikomanagement / Risikoanalyse auf der Basis von IT-Grundschutz</td><td>Was tue ich bei erhöhtem Schutzbedarf oder wenn es keinen passenden Baustein gibt?</td></tr>
          <tr><td><strong>200-4</strong></td><td>Business Continuity Management (BCM)</td><td>Wie bleibe ich bei Notfällen und Krisen handlungsfähig (Notfallvorsorge, Wiederanlauf)?</td></tr>
        </tbody></table>
        <p>Die älteren Standards 100-1 bis 100-4 wurden durch die 200er-Reihe abgelöst (100-4 Notfallmanagement durch 200-4).</p>
        <h5>Drei Absicherungsvarianten (nach 200-2)</h5>
        <table><thead><tr><th>Variante</th><th>Idee</th><th>Geeignet für</th></tr></thead><tbody>
          <tr><td>Basis-Absicherung</td><td>schneller Einstieg: nur die grundlegenden Anforderungen für alle Bereiche umsetzen</td><td>kleine Betriebe, erster Schritt</td></tr>
          <tr><td>Kern-Absicherung</td><td>zuerst die besonders wichtigen Geschäftsprozesse und Werte („Kronjuwelen“) umfassend schützen</td><td>wenn wenige Bereiche besonders kritisch sind</td></tr>
          <tr><td>Standard-Absicherung</td><td>vollständiges Vorgehen für den gesamten Informationsverbund – vom BSI empfohlen</td><td>Ziel für die meisten Institutionen, Grundlage einer Zertifizierung</td></tr>
        </tbody></table>
        <h5>Ablauf der Standard-Absicherung</h5>
        <pre class="ascii">
Sicherheitsleitlinie + Geltungsbereich festlegen
        │
        ▼
1. Strukturanalyse ........ Prozesse, Anwendungen, IT-Systeme, Räume, Netze erfassen
        ▼
2. Schutzbedarfsfeststellung  normal / hoch / sehr hoch je Grundwert
        ▼
3. Modellierung ........... passende Bausteine den Zielobjekten zuordnen
        ▼
4. IT-Grundschutz-Check ... Soll-Ist-Vergleich: Anforderung erfüllt? ja / teilweise / nein / entbehrlich
        ▼
5. Risikoanalyse .......... nur bei hohem/sehr hohem Schutzbedarf oder fehlendem Baustein (200-3)
        ▼
6. Umsetzungsplanung und Umsetzung → Aufrechterhaltung und Verbesserung (PDCA)</pre>
        <h5>Das IT-Grundschutz-Kompendium</h5>
        <p>Das Kompendium ist ein „Baukasten“ mit <strong>Bausteinen</strong> für typische Themen. Jeder Baustein beschreibt das Thema, die <strong>Gefährdungslage</strong> und die <strong>Anforderungen</strong>. Die Anforderungen sind abgestuft:</p>
        <ul>
          <li><strong>Basis-Anforderungen</strong> – MÜSSEN vorrangig umgesetzt werden,</li>
          <li><strong>Standard-Anforderungen</strong> – SOLLTEN für normalen Schutzbedarf umgesetzt werden,</li>
          <li><strong>Anforderungen bei erhöhtem Schutzbedarf</strong> – Vorschläge für hohen oder sehr hohen Schutzbedarf.</li>
        </ul>
        <table><thead><tr><th>Schicht</th><th>Bedeutung</th><th>Beispiel-Baustein</th></tr></thead><tbody>
          <tr><td>ISMS</td><td>Sicherheitsmanagement</td><td>ISMS.1 Sicherheitsmanagement</td></tr>
          <tr><td>ORP</td><td>Organisation und Personal</td><td>ORP.3 Sensibilisierung und Schulung zur Informationssicherheit, ORP.4 Identitäts- und Berechtigungsmanagement</td></tr>
          <tr><td>CON</td><td>Konzepte und Vorgehensweisen</td><td>CON.3 Datensicherungskonzept, CON.6 Löschen und Vernichten</td></tr>
          <tr><td>OPS</td><td>Betrieb</td><td>OPS.1.1.4 Schutz vor Schadprogrammen</td></tr>
          <tr><td>DER</td><td>Detektion und Reaktion</td><td>DER.2.1 Behandlung von Sicherheitsvorfällen</td></tr>
          <tr><td>APP</td><td>Anwendungen</td><td>APP.1.1 Office-Produkte, APP.1.2 Webbrowser</td></tr>
          <tr><td>SYS</td><td>IT-Systeme</td><td>SYS.2.1 Allgemeiner Client</td></tr>
          <tr><td>IND</td><td>Industrielle IT</td><td>Steuerungen in der Produktion</td></tr>
          <tr><td>NET</td><td>Netze und Kommunikation</td><td>NET.2.1 WLAN-Betrieb</td></tr>
          <tr><td>INF</td><td>Infrastruktur</td><td>INF.7 Büroarbeitsplatz</td></tr>
        </tbody></table>
        <p>ISMS, ORP, CON, OPS und DER heißen <strong>Prozess-Bausteine</strong>, APP, SYS, IND, NET und INF <strong>System-Bausteine</strong>. Grundlage aller Bausteine sind die <strong>47 elementaren Gefährdungen</strong>, z. B. G 0.1 Feuer, G 0.3 Wasser, G 0.16 Diebstahl von Geräten, Datenträgern oder Dokumenten, G 0.25 Ausfall von Geräten oder Systemen, G 0.39 Schadprogramme, G 0.42 Social Engineering und G 0.45 Datenverlust.</p>
        <div class="callout tipp"><strong>Tipp:</strong> Die letzte klassische Ausgabe des Kompendiums ist die Edition 2023. Unter dem Namen „Grundschutz++“ stellt das BSI den IT-Grundschutz schrittweise auf ein neues, schlankeres und maschinenlesbares Format um – in Schule und Prüfung wird weiterhin mit Bausteinen wie in der Edition 2023 gearbeitet. An der Denkweise – Zielobjekte erfassen, Schutzbedarf bestimmen, Bausteine zuordnen, Soll-Ist-Vergleich – ändert sich dadurch nichts.</div>
        <div class="callout merke"><strong>Merke:</strong> 200-1 = <em>Management</em>, 200-2 = <em>Methodik</em>, 200-3 = <em>Risiko</em>, 200-4 = <em>Notfall/BCM</em>. Das Kompendium liefert das „Was“ (Anforderungen), die Standards das „Wie“ (Vorgehen).</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Häufig bekommst du einen <em>Auszug aus einem Baustein</em> (z. B. SYS.2.1 Allgemeiner Client) und sollst daraus Maßnahmen für einen Arbeitsplatz ableiten oder prüfen, ob sie erfüllt sind. Außerdem: „<em>Nennen</em> Sie drei Aufgaben des BSI“, „<em>Ordnen</em> Sie die BSI-Standards zu“, „<em>Beschreiben</em> Sie die Schritte der IT-Grundschutz-Methodik“.</div>
      `
    },
    {
      id: "isms-iso27001",
      title: "ISMS, Notfallmanagement, ISO/IEC 27001 und IT-Sicherheitsrecht",
      exam: ["AP1", "AP2"],
      summary: "Wie Informationssicherheit als Managementprozess organisiert wird: ISMS mit PDCA, Sicherheitsleitlinie und -konzept, Rollen, Notfallvorsorge mit Notfallhandbuch, ISO/IEC 27001/27002 sowie IT-Sicherheitsgesetz und NIS2.",
      html: `
      <p>Sicherheit ist kein Projekt, das irgendwann „fertig“ ist, sondern ein <strong>dauerhafter Prozess</strong>. Dafür braucht ein Unternehmen ein <strong>Informationssicherheits-Managementsystem (ISMS)</strong>: die Gesamtheit aus Regeln, Verfahren, Verantwortlichkeiten und Werkzeugen, mit denen Informationssicherheit geplant, umgesetzt, überprüft und verbessert wird.</p>
      <h5>Dokumente: von der Leitlinie zur Maßnahme</h5>
      <table><thead><tr><th>Dokument</th><th>Inhalt</th><th>Wer?</th></tr></thead><tbody>
        <tr><td><strong>Sicherheitsleitlinie</strong> (Policy)</td><td>Stellenwert der Sicherheit, Sicherheitsziele, Geltungsbereich, Organisation und Verantwortlichkeiten, Verpflichtung der Leitung, Folgen bei Verstößen</td><td>von der <strong>Geschäftsleitung</strong> verabschiedet und allen bekannt gemacht</td></tr>
        <tr><td><strong>Sicherheitskonzept</strong></td><td>Ergebnis der Grundschutz-Methodik: Strukturanalyse, Schutzbedarf, Maßnahmen, Umsetzungsplan</td><td>ISB mit IT und Fachabteilungen</td></tr>
        <tr><td><strong>Richtlinien</strong> und Arbeitsanweisungen</td><td>konkrete Regeln, z. B. Passwort-Policy, Nutzerordnung, BYOD-Regelung, Clean-Desk-Richtlinie</td><td>ISB/IT, von allen einzuhalten</td></tr>
      </tbody></table>
      <h5>Der PDCA-Zyklus im ISMS</h5>
      <table><thead><tr><th>Phase</th><th>Im ISMS bedeutet das …</th></tr></thead><tbody>
        <tr><td><strong>Plan</strong></td><td>Ziele festlegen, Schutzbedarf und Risiken analysieren, Maßnahmen planen</td></tr>
        <tr><td><strong>Do</strong></td><td>Maßnahmen umsetzen, Mitarbeitende schulen</td></tr>
        <tr><td><strong>Check</strong></td><td>Wirksamkeit prüfen: Audits, Kennzahlen, Auswertung von Vorfällen, IT-Grundschutz-Check</td></tr>
        <tr><td><strong>Act</strong></td><td>Schwachstellen beheben, Konzept anpassen – dann beginnt der Zyklus neu</td></tr>
      </tbody></table>
      <p><strong>Rollen:</strong> Die <strong>Geschäftsleitung</strong> trägt die Gesamtverantwortung und stellt Ressourcen bereit. Der oder die <strong>ISB</strong> steuert den Prozess, der IT-Betrieb setzt technische Maßnahmen um, und alle Beschäftigten halten die Regeln in ihrem Arbeitsbereich ein und melden Auffälligkeiten.</p>
      <h5>Notfallmanagement (BSI-Standard 200-4)</h5>
      <p>Eine <strong>Störung</strong> löst der normale Betrieb selbst. Ein <strong>Notfall</strong> liegt vor, wenn wichtige Prozesse nicht rechtzeitig wiederhergestellt werden können und eine besondere Notfallorganisation nötig ist; eine <strong>Krise</strong> geht sogar über die vorbereiteten Pläne hinaus. Das <strong>Business Continuity Management (BCM)</strong> sorgt vor:</p>
      <ul>
        <li><strong>Notfallhandbuch</strong>: Sofortmaßnahmen, Alarmierungs- und Meldewege, Kontaktlisten (auch Dienstleister und Behörden), Zuständigkeiten und Vertretungen, Wiederanlaufpläne mit Prioritäten, Ablageort der Backups. Es muss auch <strong>ohne IT</strong> verfügbar sein (z. B. ausgedruckt).</li>
        <li><strong>RTO</strong> (<em>Recovery Time Objective</em>): maximal tolerierbare Zeit bis zur Wiederherstellung; <strong>RPO</strong> (<em>Recovery Point Objective</em>): maximal tolerierbarer Datenverlust als Zeitraum – bei einem RPO von 4 h muss mindestens alle 4 Stunden gesichert werden.</li>
        <li>Pläne regelmäßig <strong>üben und testen</strong> (Notfallübung, Wiederherstellungstest) und danach verbessern.</li>
      </ul>
      <h5>ISO/IEC 27001 und 27002</h5>
      <table><thead><tr><th></th><th>ISO/IEC 27001:2022</th><th>ISO/IEC 27002:2022</th><th>BSI IT-Grundschutz</th></tr></thead><tbody>
        <tr><td>Art</td><td>internationale <strong>Anforderungsnorm</strong> an ein ISMS</td><td><strong>Leitfaden</strong> mit Umsetzungsempfehlungen</td><td>deutsche Methodik mit sehr konkreten Bausteinen</td></tr>
        <tr><td>Zertifizierbar?</td><td>ja (durch akkreditierte Stellen)</td><td>nein</td><td>ja, als „ISO 27001 auf der Basis von IT-Grundschutz“ durch das BSI</td></tr>
        <tr><td>Maßnahmen</td><td>Anhang A: <strong>93 Controls</strong> in 4 Themen – organisatorisch (37), personenbezogen (8), physisch (14), technologisch (34)</td><td>erklärt dieselben 93 Controls ausführlich</td><td>Anforderungen in über 100 Bausteinen</td></tr>
      </tbody></table>
      <p>ISO 27001 sagt eher <em>was</em> erreicht werden muss und lässt den Weg offen. Der IT-Grundschutz schreibt deutlich konkreter vor, <em>wie</em> es geht. Ein Zertifikat gilt in der Regel drei Jahre, mit jährlichen Überwachungsaudits.</p>
      <h5>Gesetzlicher Rahmen für IT-Sicherheit</h5>
      <ul>
        <li><strong>IT-Sicherheitsgesetz</strong> (2015, IT-SiG 2.0 von 2021): Pflichten für Betreiber <strong>kritischer Infrastrukturen</strong> (KRITIS, z. B. Energie, Wasser, Gesundheit) – Stand der Technik umsetzen, Vorfälle an das BSI melden.</li>
        <li><strong>NIS2-Richtlinie</strong> der EU, in Deutschland Ende 2025 durch das NIS2-Umsetzungsgesetz ins BSIG übernommen: Sie erfasst Zehntausende „wichtige“ und „besonders wichtige“ Einrichtungen. Pflichten: Risikomanagement-Maßnahmen, Registrierung beim BSI, gestufte Meldepflichten (<strong>frühe Warnung binnen 24 h</strong>, Meldung binnen 72 h, Abschlussbericht nach einem Monat). Die <strong>Geschäftsleitung</strong> muss die Maßnahmen billigen, überwachen und sich schulen lassen.</li>
        <li><strong>DSGVO</strong>: verlangt Sicherheit, soweit personenbezogene Daten betroffen sind (Art. 32).</li>
      </ul>
      <div class="callout merke"><strong>Merke:</strong> Leitlinie = <em>Warum und wer</em> (Geschäftsleitung), Konzept = <em>was konkret</em>, Richtlinie = <em>wie verhalte ich mich</em>. Ein ISMS lebt vom PDCA-Zyklus – Sicherheit wird regelmäßig überprüft und verbessert.</div>
      <div class="callout achtung"><strong>Achtung:</strong> ISO 27001 ist <em>zertifizierbar</em>, ISO 27002 nicht. Und: Die Normenreihe ISO 2700x wird im AP1-Katalog (2. Auflage) nicht mehr ausdrücklich genannt – das ISMS aber schon. Die Details zur Norm brauchst du vor allem für die Berufsschule und AP2.</div>
      <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Erläutern</em> Sie den Begriff ISMS“, „<em>Nennen</em> Sie vier Inhalte einer Sicherheitsleitlinie“, „<em>Beschreiben</em> Sie den PDCA-Zyklus am Beispiel der Informationssicherheit“, „<em>Erklären</em> Sie, wer für die Informationssicherheit verantwortlich ist“.</div>
      `
    },
    {
      id: "schutzbedarf",
      title: "Schutzbedarfsfeststellung: Schadensszenarien, Kategorien, Vererbung",
      exam: ["AP1", "AP2"],
      summary: "Schutzbedarf je Grundwert mit Schadensszenarien bestimmen, die Kategorien normal/hoch/sehr hoch begründen und über Maximumprinzip, Kumulations- und Verteilungseffekt auf IT-Systeme, Räume und Verbindungen vererben.",
      html: `
      <p>Die Schutzbedarfsfeststellung beantwortet die Frage: <strong>Wie schlimm wäre es, wenn Vertraulichkeit, Integrität oder Verfügbarkeit verletzt würden?</strong> Sie wird für jeden Grundwert <strong>getrennt</strong> durchgeführt und stützt sich auf realistische <strong>Schadensszenarien</strong>.</p>
      <h5>Die sechs Schadensszenarien (BSI 200-2)</h5>
      <table><thead><tr><th>Schadensszenario</th><th>Leitfrage / Beispiel</th></tr></thead><tbody>
        <tr><td>Verstoß gegen Gesetze, Vorschriften oder Verträge</td><td>Drohen Bußgelder oder Vertragsstrafen? (DSGVO, SLA)</td></tr>
        <tr><td>Beeinträchtigung des informationellen Selbstbestimmungsrechts</td><td>Werden personenbezogene Daten offengelegt oder missbraucht?</td></tr>
        <tr><td>Beeinträchtigung der persönlichen Unversehrtheit</td><td>Können Menschen verletzt werden? (Medizintechnik, Brandmeldeanlage)</td></tr>
        <tr><td>Beeinträchtigung der Aufgabenerfüllung</td><td>Wie lange kann die Arbeit ohne das System weitergehen?</td></tr>
        <tr><td>Negative Innen- oder Außenwirkung</td><td>Imageschaden, Vertrauensverlust bei Kunden oder Mitarbeitenden</td></tr>
        <tr><td>Finanzielle Auswirkungen</td><td>direkte Kosten, Umsatzausfall, Wiederherstellungsaufwand</td></tr>
      </tbody></table>
      <h5>Die drei Schutzbedarfskategorien</h5>
      <table><thead><tr><th>Kategorie</th><th>Definition</th><th>Beispiel-Grenzen der Nordlicht IT GmbH</th></tr></thead><tbody>
        <tr><td><strong>normal</strong></td><td>Die Schadensauswirkungen sind <strong>begrenzt und überschaubar</strong>.</td><td>Schaden unter 25.000 €; tolerierbare Ausfallzeit über 24 h</td></tr>
        <tr><td><strong>hoch</strong></td><td>Die Schadensauswirkungen können <strong>beträchtlich</strong> sein.</td><td>25.000 € bis 250.000 €; tolerierbare Ausfallzeit 1 bis 24 h</td></tr>
        <tr><td><strong>sehr hoch</strong></td><td>Die Schadensauswirkungen können ein <strong>existenziell bedrohliches, katastrophales</strong> Ausmaß erreichen.</td><td>über 250.000 € (existenzgefährdend); tolerierbare Ausfallzeit unter 1 h; Gefahr für Leib und Leben</td></tr>
      </tbody></table>
      <p>Die Euro-Grenzen legt <strong>jedes Unternehmen selbst</strong> fest – für einen Handwerksbetrieb sind 50.000 € existenzbedrohend, für einen Konzern nicht. Das höchste zutreffende Schadensszenario bestimmt die Kategorie.</p>
      <h5>Vererbung: vom Prozess bis zum Raum</h5>
      <pre class="ascii">
Geschäftsprozess / Information   (z. B. Lohnabrechnung)
          │ vererbt an
          ▼
Anwendung                         (Lohnprogramm, Datenbank)
          │ läuft auf
          ▼
IT-System                         (Server SRV-01, Clients der Personalabteilung)
          │ steht in / ist verbunden über
          ▼
Raum, Gebäude  +  Kommunikationsverbindungen</pre>
      <table><thead><tr><th>Regel</th><th>Bedeutung</th><th>Beispiel</th></tr></thead><tbody>
        <tr><td><strong>Maximumprinzip</strong></td><td>Ein Zielobjekt erhält – je Grundwert – den <strong>höchsten</strong> Schutzbedarf der Anwendungen, die es nutzen oder die darauf laufen.</td><td>Auf einem Server laufen eine Anwendung mit Vertraulichkeit „hoch“ und zwei mit „normal“ → Server: Vertraulichkeit hoch.</td></tr>
        <tr><td><strong>Kumulationseffekt</strong></td><td>Viele Anwendungen oder Schäden mit jeweils normalem Schutzbedarf summieren sich auf einem Objekt → der Schutzbedarf <strong>steigt</strong>.</td><td>Ein Virtualisierungshost betreibt 15 Server mit je „normaler“ Verfügbarkeit. Fällt er aus, steht der ganze Betrieb → Verfügbarkeit hoch.</td></tr>
        <tr><td><strong>Verteilungseffekt</strong></td><td>Eine Anwendung mit hohem Schutzbedarf ist auf mehrere (redundante) Systeme verteilt, sodass das einzelne System weniger kritisch ist → der Schutzbedarf <strong>sinkt</strong>. Gleiches gilt, wenn auf einem System nur unwesentliche Teile einer kritischen Anwendung laufen.</td><td>Webshop mit Verfügbarkeit „hoch“ läuft auf zwei Clusterknoten; fällt einer aus, übernimmt der andere → je Knoten Verfügbarkeit normal.</td></tr>
      </tbody></table>
      <div class="callout beispiel"><strong>Beispiel (Maximumprinzip je Grundwert):</strong> V = Vertraulichkeit, I = Integrität, A = Verfügbarkeit (<em>availability</em>).<br>Auf dem Server SRV-01 laufen:<br>• Warenwirtschaft: V hoch, I hoch, A normal<br>• E-Mail: V normal, I normal, A hoch<br>• Dateiablage Marketing: V normal, I normal, A normal<br>→ SRV-01: <strong>Vertraulichkeit hoch, Integrität hoch, Verfügbarkeit hoch</strong> – jeder Grundwert wird einzeln maximiert. Der Serverraum erbt mindestens diese Werte.</div>
      <p><strong>Kommunikationsverbindungen</strong> sind besonders kritisch, wenn sie nach außen führen (Internet, Standortkopplung), wenn über sie Daten mit hohem Schutzbedarf fließen oder wenn bestimmte Daten dort nicht übertragen werden dürfen.</p>
      <div class="callout achtung"><strong>Prüfungsfalle:</strong> Das Maximumprinzip gilt pro Grundwert – aus „V hoch, A normal“ und „V normal, A hoch“ wird „V hoch, A hoch“, nicht einfach „alles hoch“. Der Verteilungseffekt senkt meist nur die <em>Verfügbarkeit</em>: Liegen auf jedem Knoten dieselben vertraulichen Daten, bleibt die Vertraulichkeit hoch. Und ohne schriftliche <strong>Begründung</strong> gibt es in der Prüfung kaum Punkte.</div>
      <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Meist eine Tabelle mit Anwendungen und Systemen: „<em>Ermitteln</em> Sie den Schutzbedarf des Servers und <em>begründen</em> Sie Ihre Entscheidung“, „<em>Erläutern</em> Sie das Maximumprinzip / den Kumulationseffekt“ oder „<em>Leiten</em> Sie die Schutzbedarfskategorie aus dem Schadensszenario <em>ab</em>“.</div>
      `
    },
    {
      id: "schutzbedarf-praxis",
      title: "Strukturanalyse und Schutzbedarfsanalyse in der Praxis",
      exam: ["AP1", "AP2"],
      summary: "Schritt für Schritt: Zielobjekte erfassen und gruppieren, Schutzbedarf für Anwendungen, Clients, Räume, Verbindungen und Software dokumentieren – am Beispiel einer Personalabteilung.",
      html: `
      <h5>Schritt 1: Strukturanalyse</h5>
      <p>Bevor du Schutzbedarf bestimmen kannst, musst du wissen, <strong>was</strong> es überhaupt gibt. Die Strukturanalyse erfasst den Informationsverbund in dieser Reihenfolge:</p>
      <ol>
        <li><strong>Geschäftsprozesse und Informationen</strong> (z. B. Lohnabrechnung, Bewerbermanagement),</li>
        <li><strong>Anwendungen</strong> (Personalsoftware, E-Mail, Office),</li>
        <li><strong>IT-Systeme</strong> (Server, Clients, Notebooks, Drucker, Smartphones, Switches),</li>
        <li><strong>Räume und Gebäude</strong> (Büros, Serverraum, Archiv),</li>
        <li><strong>Kommunikationsverbindungen</strong> (LAN, WLAN, Internet, VPN, Standortkopplung).</li>
      </ol>
      <p>Hilfreich ist ein <strong>bereinigter Netzplan</strong>. Um den Aufwand klein zu halten, werden gleichartige Objekte zu <strong>Gruppen</strong> zusammengefasst – aber nur, wenn sie vom gleichen Typ sind, gleich konfiguriert sind, dieselben Anwendungen nutzen, im gleichen Umfeld stehen und denselben Schutzbedarf haben.</p>
      <h5>Schritt 2: Schutzbedarf der Anwendungen</h5>
      <div class="callout beispiel"><strong>Beispiel: Personalabteilung der Deichtechnik Husum GmbH</strong><br>Vier gleich eingerichtete Windows-Clients (Gruppe C-PA) im Büro 1.12; sie greifen auf den Server SRV-02 zu. Die Lohndaten gehen monatlich per Internet an den Steuerberater.</div>
      <table><thead><tr><th>Anwendung</th><th>Vertraulichkeit</th><th>Integrität</th><th>Verfügbarkeit</th><th>Begründung (Kurzform)</th></tr></thead><tbody>
        <tr><td>Lohn- und Personalsoftware</td><td>hoch</td><td>hoch</td><td>normal</td><td>Gehälter, Bankdaten und Krankmeldungen (Gesundheitsdaten, Art. 9) – Offenlegung verletzt Persönlichkeitsrechte und DSGVO; falsche Beträge führen zu Fehlzahlungen; ein Ausfall von 1–2 Tagen ist außerhalb des Abrechnungstermins tolerierbar.</td></tr>
        <tr><td>E-Mail</td><td>hoch</td><td>normal</td><td>normal</td><td>Mails enthalten Bewerbungen und Personalvorgänge; Fehler fallen auf und sind korrigierbar; Ausfall überbrückbar per Telefon.</td></tr>
        <tr><td>Zeiterfassung</td><td>normal</td><td>hoch</td><td>normal</td><td>Arbeitszeiten sind intern wenig sensibel, aber manipulierte Zeiten führen zu falschen Löhnen.</td></tr>
      </tbody></table>
      <h5>Schritt 3: Vererbung auf IT-Systeme, Räume und Verbindungen</h5>
      <table><thead><tr><th>Zielobjekt</th><th>V</th><th>I</th><th>A</th><th>Begründung</th></tr></thead><tbody>
        <tr><td>Client-Gruppe C-PA</td><td>hoch</td><td>hoch</td><td>normal</td><td>Maximumprinzip über alle drei Anwendungen; bei Ausfall eines Clients kann an einem anderen weitergearbeitet werden.</td></tr>
        <tr><td>Server SRV-02</td><td>hoch</td><td>hoch</td><td>hoch</td><td>Maximumprinzip; zusätzlich <strong>Kumulationseffekt</strong>: Fällt der Server aus, stehen alle vier Arbeitsplätze und die gesamte Abrechnung still.</td></tr>
        <tr><td>Büro 1.12</td><td>hoch</td><td>hoch</td><td>normal</td><td>erbt von den Clients; zusätzlich liegen dort Papierakten.</td></tr>
        <tr><td>Verbindung zum Steuerberater (Internet)</td><td>hoch</td><td>hoch</td><td>normal</td><td>Außenverbindung mit vertraulichen Lohndaten → nur verschlüsselt übertragen.</td></tr>
      </tbody></table>
      <p>Aus dem Ergebnis folgen die Maßnahmen: Festplattenverschlüsselung und Bildschirmsperre auf den Clients, abschließbares Büro mit Sichtschutz, verschlüsselte Übertragung (TLS/VPN), Berechtigungen nur für die Personalabteilung. Für den Server mit hoher Verfügbarkeit kommen Wartungsvertrag, USV und ein geprüftes Backup hinzu.</p>
      <h5>Beispiel Software: Schutzbedarf über den Lebenszyklus</h5>
      <p>Weit verbreitete <strong>Standardsoftware</strong> (Office-Pakete, Browser, PDF-Reader) ist besonders gefährdet, weil ihre Schwachstellen bekannt sind und Angreifer mit einem Exploit sehr viele Rechner treffen. Office-Dokumente können über <strong>Makros</strong> Schadcode nachladen, Browser verarbeiten Inhalte aus nicht vertrauenswürdigen Quellen. Auch das <strong>Customizing</strong> (Anpassung an den Betrieb) kann neue Lücken öffnen.</p>
      <table><thead><tr><th>Phase</th><th>Sicherheitsaspekte</th></tr></thead><tbody>
        <tr><td>Installation</td><td>nur aus vertrauenswürdigen Quellen, Prüfsumme/Signatur prüfen, nur benötigte Komponenten, keine Admin-Rechte für Endnutzer</td></tr>
        <tr><td>Nutzung und Einstellungen</td><td>Updates zeitnah einspielen, Makros standardmäßig blockieren, sichere Voreinstellungen, Plug-ins minimieren</td></tr>
        <tr><td>Lizenzverwaltung</td><td>Lizenzen dokumentieren, Unterlizenzierung vermeiden</td></tr>
        <tr><td>Deinstallation</td><td>vollständig entfernen, Restdaten und Zugangsdaten löschen, Lizenz freigeben</td></tr>
      </tbody></table>
      <div class="callout tipp"><strong>Tipp:</strong> Auch <strong>Speichermedien</strong> haben Schutzbedarf. Ein USB-Stick mit Kundendaten hat Vertraulichkeit „hoch“ – also nur verschlüsselte Sticks verwenden und Daten nach Gebrauch sicher löschen.</div>
      <div class="callout achtung"><strong>Prüfungsfalle:</strong> Schreibe nicht nur „hoch“ in die Tabelle – die Prüfer wollen eine <em>Begründung</em> mit Bezug auf ein Schadensszenario (z. B. „Verstoß gegen DSGVO, da Gesundheitsdaten“). Gruppen nur bilden, wenn die Objekte wirklich gleichartig sind; ein Chef-Notebook mit Vorstandsunterlagen gehört nicht in die Gruppe der Standard-Clients.</div>
      <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Eine Situationsbeschreibung mit Tabelle: „<em>Ergänzen</em> Sie die Schutzbedarfstabelle für die Clients und <em>begründen</em> Sie jeweils“, „<em>Nennen</em> Sie die Schritte der Strukturanalyse“, „<em>Schlagen</em> Sie zu jedem Schutzbedarf eine passende Maßnahme <em>vor</em>“.</div>
      `
    },
    {
      id: "risikoanalyse",
      title: "Risikoanalyse, Risikomatrix und Risikobehandlung",
      exam: ["AP1", "AP2"],
      summary: "Risiko = Eintrittswahrscheinlichkeit × Schadenshöhe: Gefährdungen einstufen, in einer Risikomatrix klassifizieren, Schadenserwartung berechnen und eine Strategie (vermeiden, mindern, übertragen, akzeptieren) auswählen.",
      html: `
      <h5>Begriffe</h5>
      <ul>
        <li><strong>Bedrohung</strong>: ein Umstand oder Ereignis, das Schaden verursachen kann (z. B. Ransomware, Feuer).</li>
        <li><strong>Schwachstelle</strong>: ein Mangel, über den eine Bedrohung wirken kann (z. B. fehlendes Update, fehlendes Backup).</li>
        <li><strong>Gefährdung</strong>: eine Bedrohung, die über eine Schwachstelle konkret auf ein Objekt trifft.</li>
        <li><strong>Risiko</strong>: Kombination aus <strong>Häufigkeit</strong> (Eintrittswahrscheinlichkeit) und <strong>Auswirkung</strong> (Schadenshöhe).</li>
      </ul>
      <div class="callout formel"><strong>Formeln:</strong><br>Risiko = Eintrittswahrscheinlichkeit × Schadenshöhe<br>jährliche Schadenserwartung (€/Jahr) = Häufigkeit pro Jahr × Schaden je Ereignis (€)<br>Ausfallkosten (€) = Kosten je Stunde × Ausfalldauer (h) + Wiederherstellungsaufwand (€)</div>
      <div class="callout beispiel"><strong>Beispiel Ausfallkosten:</strong> Der Webshop eines Kunden setzt 1.500 € pro Stunde um und fällt 6 Stunden aus; die Wiederherstellung kostet 2.000 €.<br>Ausfallkosten = 1.500 €/h × 6 h + 2.000 € = 9.000 € + 2.000 € = <strong>11.000 €</strong> – dieser Betrag fließt als Schadenshöhe in die Bewertung ein.</div>
      <h5>Qualitative Bewertung mit Skalen</h5>
      <table><thead><tr><th>Wert</th><th>Eintrittswahrscheinlichkeit</th><th>Schadenshöhe</th></tr></thead><tbody>
        <tr><td>1</td><td>selten – höchstens alle 5 Jahre</td><td>vernachlässigbar</td></tr>
        <tr><td>2</td><td>mittel – alle 1 bis 5 Jahre</td><td>begrenzt</td></tr>
        <tr><td>3</td><td>häufig – 1× pro Jahr bis 1× pro Monat</td><td>beträchtlich</td></tr>
        <tr><td>4</td><td>sehr häufig – mehrmals im Monat</td><td>existenzbedrohend</td></tr>
      </tbody></table>
      <h5>Risikomatrix (Risikowert = EW × S)</h5>
      <table><thead><tr><th>Schaden ↓ / EW →</th><th>1 selten</th><th>2 mittel</th><th>3 häufig</th><th>4 sehr häufig</th></tr></thead><tbody>
        <tr><td>4 existenzbedrohend</td><td>4 mittel</td><td>8 hoch</td><td>12 sehr hoch</td><td>16 sehr hoch</td></tr>
        <tr><td>3 beträchtlich</td><td>3 gering</td><td>6 mittel</td><td>9 hoch</td><td>12 sehr hoch</td></tr>
        <tr><td>2 begrenzt</td><td>2 gering</td><td>4 mittel</td><td>6 mittel</td><td>8 hoch</td></tr>
        <tr><td>1 vernachlässigbar</td><td>1 gering</td><td>2 gering</td><td>3 gering</td><td>4 mittel</td></tr>
      </tbody></table>
      <p>Risikoklassen in diesem Beispiel: 1–3 <strong>gering</strong>, 4–6 <strong>mittel</strong>, 8–9 <strong>hoch</strong>, 12–16 <strong>sehr hoch</strong>. Welche Skalen und Grenzen gelten, legt das Unternehmen in seiner Risikomethodik fest.</p>
      <div class="callout beispiel"><strong>Beispiel: Risiken der Nordlicht IT GmbH</strong><br>• Phishing führt zur Übernahme eines Mailkontos: EW 3 × S 3 = <strong>9 → hoch</strong><br>• Ransomware verschlüsselt den Dateiserver: EW 2 × S 4 = <strong>8 → hoch</strong><br>• Brand im Serverraum: EW 1 × S 4 = <strong>4 → mittel</strong><br>• Monitor eines Arbeitsplatzes fällt aus: EW 3 × S 1 = <strong>3 → gering</strong><br>→ Zuerst werden die hohen Risiken behandelt (Awareness, MFA, Offline-Backup).</div>
      <h5>Quantitative Bewertung: lohnt sich die Maßnahme?</h5>
      <div class="callout beispiel"><strong>Beispiel:</strong> Ransomware trifft die Firma statistisch alle 4 Jahre (0,25 pro Jahr), ein Vorfall kostet 120.000 €.<br>Schadenserwartung vorher = 0,25 × 120.000 € = <strong>30.000 €/Jahr</strong><br>Maßnahmenpaket (Offline-Backup, EDR, Schulungen) kostet 9.000 €/Jahr und senkt die Häufigkeit auf 0,05 pro Jahr und den Schaden auf 40.000 €.<br>Schadenserwartung nachher = 0,05 × 40.000 € = <strong>2.000 €/Jahr</strong><br>Einsparung = 30.000 € − 2.000 € = 28.000 €/Jahr<br>Nettonutzen = 28.000 € − 9.000 € = <strong>19.000 €/Jahr</strong> → Die Maßnahme lohnt sich.</div>
      <h5>Risikobehandlung</h5>
      <table><thead><tr><th>Strategie</th><th>Idee</th><th>Beispiel</th></tr></thead><tbody>
        <tr><td><strong>Vermeiden</strong></td><td>risikobehaftete Tätigkeit oder Technik aufgeben bzw. umstrukturieren</td><td>keine Kundendaten mehr auf USB-Sticks; unsicheren Dienst abschalten</td></tr>
        <tr><td><strong>Reduzieren</strong> (mindern)</td><td>zusätzliche Maßnahmen senken Häufigkeit oder Schaden</td><td>MFA, Backup, Patchmanagement, Schulungen</td></tr>
        <tr><td><strong>Übertragen</strong> (transferieren)</td><td>finanzielle Folgen auf Dritte verlagern</td><td>Cyberversicherung, Outsourcing mit vertraglicher Haftung</td></tr>
        <tr><td><strong>Akzeptieren</strong> (tragen)</td><td>bewusst mit dem Restrisiko leben, weil Maßnahmen unwirtschaftlich wären</td><td>Ausfall eines Monitors – Ersatzgerät liegt bereit</td></tr>
      </tbody></table>
      <p>Das BSI beschreibt das Vorgehen im <strong>Standard 200-3</strong>: Gefährdungsübersicht erstellen (auf Basis der elementaren Gefährdungen) → Risiken einstufen → Risiken behandeln → Sicherheitskonzept konsolidieren.</p>
      <div class="callout achtung"><strong>Prüfungsfalle:</strong> Ein Risiko lässt sich nie auf null senken – es bleibt ein <strong>Restrisiko</strong>. Dieses muss die <strong>Geschäftsleitung</strong> bewusst und dokumentiert akzeptieren, nicht der Azubi oder die IT. Eine Versicherung überträgt nur die <em>finanziellen</em> Folgen; Imageschaden und Datenverlust bleiben.</div>
      <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Ordnen</em> Sie die Risiken in die Matrix <em>ein</em>“, „<em>Berechnen</em> Sie den Risikowert bzw. die jährliche Schadenserwartung“, „<em>Nennen</em> Sie vier Strategien der Risikobehandlung mit je einem Beispiel“, „<em>Beurteilen</em> Sie, ob sich die Maßnahme wirtschaftlich lohnt“.</div>
      `
    },
    {
      id: "malware",
      title: "Malware: Arten von Schadprogrammen",
      exam: ["AP1", "AP2"],
      summary: "Virus, Wurm, Trojaner, Ransomware, Spyware, Keylogger, Rootkit und Co. unterscheiden, Infektionswege kennen und passende Schutz- und Sofortmaßnahmen ableiten.",
      html: `
      <p><strong>Malware</strong> (<em>malicious software</em>) ist der Oberbegriff für alle Programme, die absichtlich Schaden anrichten. Umgangssprachlich heißt alles „Virus“ – in der Prüfung musst du aber genau unterscheiden.</p>
      <h5>Virus, Wurm, Trojaner – der Klassiker</h5>
      <table><thead><tr><th></th><th>Virus</th><th>Wurm</th><th>Trojaner</th></tr></thead><tbody>
        <tr><td>Braucht Wirtsdatei?</td><td><strong>ja</strong> – hängt sich an Programme oder Dokumente</td><td>nein – eigenständiges Programm</td><td>nein – ist selbst ein (scheinbar nützliches) Programm</td></tr>
        <tr><td>Verbreitung</td><td>wenn der Wirt ausgeführt oder weitergegeben wird (Nutzeraktion nötig)</td><td><strong>selbstständig</strong> über Netzwerke, meist durch Ausnutzen von Schwachstellen</td><td>verbreitet sich <strong>nicht selbst</strong>; Nutzer installiert ihn freiwillig</td></tr>
        <tr><td>Typisch</td><td>Makrovirus in Office-Dokument</td><td>WannaCry (2017) nutzte eine SMB-Lücke und verbreitete sich weltweit</td><td>„kostenloses Tool“ oder gefälschte Rechnung mit versteckter Schadfunktion</td></tr>
      </tbody></table>
      <h5>Weitere Malware-Arten</h5>
      <table><thead><tr><th>Art</th><th>Was sie tut</th></tr></thead><tbody>
        <tr><td><strong>Ransomware</strong></td><td>verschlüsselt Daten oder sperrt Systeme und fordert Lösegeld; heute meist mit <em>Double Extortion</em>: Daten werden vorher kopiert und ihre Veröffentlichung angedroht. Oft als „Ransomware-as-a-Service“ vermietet.</td></tr>
        <tr><td><strong>Spyware</strong></td><td>späht Nutzer unbemerkt aus (besuchte Seiten, Zugangsdaten, Dokumente) und sendet die Daten an Dritte.</td></tr>
        <tr><td><strong>Keylogger</strong></td><td>zeichnet Tastatureingaben auf – als Software oder als Hardware-Zwischenstecker am Tastaturkabel.</td></tr>
        <tr><td><strong>Rootkit</strong></td><td>nistet sich tief im System ein (bis in den Kernel), <strong>versteckt</strong> sich und andere Malware vor Virenscannern und sichert dauerhaften Admin-Zugriff. Oft hilft nur eine Neuinstallation.</td></tr>
        <tr><td><strong>Backdoor</strong></td><td>Hintertür, die Angreifern später Fernzugriff ermöglicht (z. B. als Remote Access Trojaner).</td></tr>
        <tr><td><strong>Bot</strong></td><td>macht den Rechner fernsteuerbar und zum Teil eines Botnetzes.</td></tr>
        <tr><td><strong>Dropper / Downloader</strong></td><td>lädt nach der Infektion weitere Schadsoftware nach (z. B. Emotet als „Türöffner“ für Ransomware).</td></tr>
        <tr><td><strong>Adware / Scareware</strong></td><td>blendet unerwünschte Werbung ein bzw. erschreckt mit falschen Warnungen („Ihr PC ist infiziert – jetzt kaufen!“).</td></tr>
        <tr><td><strong>Cryptominer</strong></td><td>nutzt heimlich die Rechenleistung zum Schürfen von Kryptowährung (Cryptojacking).</td></tr>
      </tbody></table>
      <h5>Infektionswege</h5>
      <ul>
        <li>E-Mail-Anhänge und Links (Makros, getarnte Archive, gefälschte Rechnungen)</li>
        <li>Drive-by-Download beim Besuch einer manipulierten Webseite</li>
        <li>ungepatchte Schwachstellen in Betriebssystem, Browser oder VPN-Gateway</li>
        <li>USB-Sticks und andere Wechseldatenträger</li>
        <li>Software aus unsicheren Quellen oder manipulierte Updates (Supply-Chain-Angriff)</li>
      </ul>
      <h5>Schutz und Erkennung</h5>
      <p>Virenschutz bzw. <strong>EDR</strong> (Endpoint Detection and Response) erkennt Malware <strong>signaturbasiert</strong> (bekannte Muster), <strong>heuristisch</strong> (verdächtige Code-Merkmale) und <strong>verhaltensbasiert</strong> (z. B. massenhaftes Verschlüsseln von Dateien). Dazu gehören zeitnahe Updates, Arbeiten ohne Admin-Rechte, blockierte Makros aus dem Internet, E-Mail-Filter, <strong>Offline-Backups</strong> gegen Ransomware und regelmäßige Schulungen.</p>
      <div class="callout merke"><strong>Sofortmaßnahmen bei Verdacht:</strong> Gerät vom Netz trennen (LAN-Kabel ziehen, WLAN aus), nicht weiterarbeiten, die IT bzw. die Notfallnummer informieren, nichts löschen und Beobachtungen notieren (Uhrzeit, Meldung, letzte Aktion). Bei Ransomware rät das BSI, <strong>kein Lösegeld</strong> zu zahlen – es gibt keine Garantie, und es finanziert weitere Angriffe.</div>
      <div class="callout achtung"><strong>Prüfungsfalle:</strong> Der Trojaner verbreitet sich <em>nicht</em> selbst – das ist das Merkmal des Wurms. Ein Virus braucht einen Wirt, ein Wurm nicht. Ein Rootkit ist vor allem ein <em>Tarnwerkzeug</em>. Ransomware greift in erster Linie die <strong>Verfügbarkeit</strong> an, bei Double Extortion zusätzlich die <strong>Vertraulichkeit</strong>.</div>
      <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Unterscheiden</em> Sie Virus, Wurm und Trojaner“, „<em>Ordnen</em> Sie die Beschreibungen der passenden Malware-Art <em>zu</em>“, „<em>Nennen</em> Sie drei Maßnahmen gegen Ransomware“, „<em>Beschreiben</em> Sie das richtige Verhalten bei einem Infektionsverdacht“.</div>
      `
    },
    {
      id: "angriffe",
      title: "Cyberangriffe: Social Engineering, Phishing, Identitätsdiebstahl, APT, Botnetze, DDoS",
      exam: ["AP1", "AP2"],
      summary: "Wie Angreifer Menschen manipulieren, Identitäten stehlen, mit Botnetzen DDoS-Angriffe fahren und als APT lange unentdeckt bleiben – plus die Trends aus dem BSI-Lagebericht.",
      html: `
      <h5>Social Engineering – der Mensch als Einfallstor</h5>
      <p>Beim <strong>Social Engineering</strong> manipuliert der Angreifer Menschen, damit sie Informationen preisgeben, Zahlungen auslösen oder Schadsoftware starten. Ausgenutzt werden Hilfsbereitschaft, Respekt vor <strong>Autorität</strong>, <strong>Zeitdruck</strong>, Neugier, Angst und Gier.</p>
      <table><thead><tr><th>Form</th><th>Vorgehen</th></tr></thead><tbody>
        <tr><td><strong>Phishing</strong></td><td>massenhaft verschickte gefälschte Mails oder Webseiten, die Zugangsdaten „abfischen“</td></tr>
        <tr><td><strong>Spear-Phishing</strong> / Whaling</td><td>gezielt auf eine Person bzw. auf Führungskräfte zugeschnitten, mit recherchierten Details</td></tr>
        <tr><td><strong>CEO-Fraud</strong></td><td>angeblicher Chef verlangt eine dringende, vertrauliche Überweisung</td></tr>
        <tr><td><strong>Vishing</strong> / <strong>Smishing</strong> / <strong>Quishing</strong></td><td>Phishing per Telefonanruf / per SMS oder Messenger / per QR-Code</td></tr>
        <tr><td><strong>Pretexting</strong></td><td>erfundene Rolle, z. B. „Hier ist der IT-Support, ich brauche kurz Ihr Passwort“</td></tr>
        <tr><td><strong>Baiting</strong></td><td>Köder: präparierter USB-Stick liegt „zufällig“ auf dem Parkplatz</td></tr>
        <tr><td><strong>Tailgating</strong>, Shoulder Surfing, Dumpster Diving</td><td>hinter Berechtigten durch die Tür schlüpfen, über die Schulter schauen, im Papiermüll suchen</td></tr>
      </tbody></table>
      <h5>Woran du eine Phishing-Mail erkennst</h5>
      <ul>
        <li>Absenderadresse passt nicht zum angeblichen Absender (z. B. <code>service@sparkasse-sicherheit.info</code>)</li>
        <li>Druck und Drohung: „Konto wird in 24 Stunden gesperrt“</li>
        <li>Link-Ziel (Mauszeiger darüber halten) weicht vom angezeigten Text ab</li>
        <li>Aufforderung zur Eingabe von Passwort, TAN oder Zahlungsdaten</li>
        <li>unerwarteter Anhang, oft als Archiv oder Office-Datei mit Makros</li>
      </ul>
      <p>Rechtschreibfehler sind kein verlässliches Merkmal mehr – mit KI geschriebene Mails sind oft fehlerfrei. Im Zweifel: <strong>nicht klicken, über einen bekannten Kanal nachfragen, an die IT melden</strong>. Technisch helfen Mailfilter und die Absenderprüfung per SPF, DKIM und DMARC. Ruft ein angeblicher „Microsoft-Support“ an und will Fernzugriff: nie gewähren, auflegen, der IT melden.</p>
      <h5>Identitätsdiebstahl</h5>
      <p>Angreifer nutzen fremde Identitätsdaten (Zugangsdaten, Ausweis- oder Kontodaten), um im Namen des Opfers zu handeln: Konten übernehmen, auf Rechnung bestellen, Betrugsmails versenden. Beim <strong>Credential Stuffing</strong> probieren sie geleakte E-Mail-Passwort-Kombinationen automatisch bei vielen Diensten aus – das klappt immer dann, wenn jemand dasselbe Passwort mehrfach nutzt. Schutz: für jeden Dienst ein eigenes Passwort (Passwortmanager), <strong>MFA</strong>, sparsam mit Daten umgehen, Leak-Checker wie den des Hasso-Plattner-Instituts nutzen.</p>
      <h5>APT, Botnetze und DDoS</h5>
      <table><thead><tr><th>Angriff</th><th>Merkmale</th><th>Gegenmaßnahmen</th></tr></thead><tbody>
        <tr><td><strong>APT</strong> (Advanced Persistent Threat)</td><td>zielgerichtet, technisch anspruchsvoll, oft staatlich unterstützt; bleibt monatelang unentdeckt, bewegt sich im Netz weiter und leitet Daten aus (Spionage, Sabotage)</td><td>Netzsegmentierung, Monitoring und Log-Auswertung, Patchmanagement, MFA, Least Privilege</td></tr>
        <tr><td><strong>Botnetz</strong></td><td>viele infizierte Geräte (Bots, auch IoT-Kameras und Router) werden über einen Command-and-Control-Server ferngesteuert – für Spam, DDoS, Credential Stuffing oder Mining</td><td>Updates, Standardpasswörter ändern, ausgehenden Verkehr überwachen</td></tr>
        <tr><td><strong>DoS / DDoS</strong> (Distributed Denial of Service)</td><td>Ein Dienst wird mit Anfragen überflutet, bis er nicht mehr erreichbar ist; bei DDoS kommen die Anfragen von Tausenden Quellen gleichzeitig. Ziel: <strong>Verfügbarkeit</strong></td><td>DDoS-Schutz beim Provider, Content Delivery Network, Rate Limiting, Redundanz</td></tr>
      </tbody></table>
      <p>Weitere Angriffe, die du einordnen können solltest: <strong>Man-in-the-Middle</strong> (Angreifer schaltet sich unbemerkt in eine Verbindung – Schutz: TLS mit Zertifikatsprüfung, VPN), <strong>Brute-Force- und Wörterbuchangriffe</strong> auf Passwörter (lange Passwörter, Kontosperre, MFA), <strong>Zero-Day-Exploits</strong> (Lücke ohne verfügbaren Patch) und – vor allem für AP2 – <strong>SQL-Injection</strong> (Schutz: Prepared Statements, Eingabeprüfung).</p>
      <h5>Trends aus dem BSI-Lagebericht</h5>
      <p>Das BSI veröffentlicht jedes Jahr (meist im Herbst) den Bericht „Die Lage der IT-Sicherheit in Deutschland“. Wiederkehrende Kernaussagen, zuletzt auch im Lagebericht 2025:</p>
      <ul>
        <li><strong>Ransomware</strong> bleibt die größte Bedrohung – besonders für kleine und mittlere Unternehmen und Kommunen.</li>
        <li>Angreifer nutzen bekannte, aber <strong>ungepatchte Schwachstellen</strong>, gerade in Randgeräten wie VPN-Gateways und Firewalls.</li>
        <li><strong>DDoS</strong>-Angriffe von Hacktivisten treffen vor allem öffentliche Webseiten.</li>
        <li><strong>KI</strong> senkt die Einstiegshürde: überzeugende Phishing-Texte, gefälschte Stimmen und Videos (Deepfakes).</li>
        <li>Die <strong>Angriffsfläche</strong> wächst durch Vernetzung, Cloud und IoT; schlecht geschützte Systeme sind das Hauptproblem.</li>
      </ul>
      <div class="callout merke"><strong>Merke:</strong> Die beste Technik nützt nichts, wenn Menschen getäuscht werden. Deshalb gehören <strong>Awareness-Schulungen</strong>, klare Melde- und Freigabewege (z. B. Rückruf bei Zahlungsanweisungen) und MFA zu jedem Sicherheitskonzept.</div>
      <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Erläutern</em> Sie den Begriff Social Engineering an einem Beispiel“, „<em>Nennen</em> Sie vier Merkmale einer Phishing-Mail“, „<em>Beschreiben</em> Sie einen DDoS-Angriff und das betroffene Schutzziel“, „<em>Erklären</em> Sie, wie MFA vor Identitätsdiebstahl schützt“.</div>
      `
    },
    {
      id: "massnahmen",
      title: "Schutzmaßnahmen: TOM, Zutritt/Zugang/Zugriff, Härtung, Container, Backup",
      exam: ["AP1", "AP2"],
      summary: "Maßnahmen nach Art (technisch, organisatorisch, personell, infrastrukturell) ordnen, Zutritts-, Zugangs- und Zugriffskontrolle unterscheiden, Arbeitsplätze härten, Security by Design/Default erklären, Anwendungen per Container/Sandbox isolieren, Daten nach der 3-2-1-Regel sichern, Verfügbarkeit per NAS erhöhen und Datenträger nach DIN 66399 sicher löschen bzw. vernichten.",
      html: `
      <h5>Vier Arten von Maßnahmen</h5>
      <table><thead><tr><th>Art</th><th>Beispiele</th></tr></thead><tbody>
        <tr><td><strong>technisch</strong></td><td>Virenschutz/EDR, Personal Firewall, Festplattenverschlüsselung, Backup, MFA, automatische Bildschirmsperre, Updates</td></tr>
        <tr><td><strong>organisatorisch</strong></td><td>Sicherheitsleitlinie, Passwort-Policy, Berechtigungskonzept, Vier-Augen-Prinzip, Clean-Desk-Regel, Notfallplan, Besucherregelung</td></tr>
        <tr><td><strong>personell</strong></td><td>Awareness-Schulungen, Verpflichtung auf Vertraulichkeit, Vertretungsregeln, geregeltes Onboarding und Offboarding (Konten sperren!)</td></tr>
        <tr><td><strong>infrastrukturell</strong> (baulich)</td><td>abschließbarer Serverraum, Zutrittskontrollsystem, Brandmelder, Klimatisierung, Wassermelder, USV, Videoüberwachung</td></tr>
      </tbody></table>
      <h5>Zutritt – Zugang – Zugriff</h5>
      <table><thead><tr><th>Kontrolle</th><th>Verhindert …</th><th>Maßnahmen</th></tr></thead><tbody>
        <tr><td><strong>Zutrittskontrolle</strong></td><td>dass Unbefugte <em>Räume</em> betreten</td><td>Schlüssel, Chipkarte, Alarmanlage, Besucherausweise, Pförtner</td></tr>
        <tr><td><strong>Zugangskontrolle</strong></td><td>dass Unbefugte <em>IT-Systeme nutzen</em></td><td>Login mit Passwort und MFA, Bildschirmsperre mit Passwort, Biometrie, Chipkarte</td></tr>
        <tr><td><strong>Zugriffskontrolle</strong></td><td>dass Berechtigte auf mehr <em>Daten</em> zugreifen als nötig</td><td>Rollen- und Rechtekonzept, NTFS-Rechte, Verschlüsselung, sicheres Löschen/Vernichten (DIN 66399)</td></tr>
        <tr><td>Weitergabe-, Eingabe-, Verfügbarkeits-, Trennungskontrolle</td><td>unsichere Übertragung, nicht nachvollziehbare Änderungen, Datenverlust, Vermischung von Daten</td><td>VPN/TLS, Protokollierung, Backup/USV, getrennte Mandanten</td></tr>
      </tbody></table>
      <div class="callout tipp"><strong>Eselsbrücke:</strong> Zu<strong>tritt</strong> = mit den Füßen (Raum), Zu<strong>gang</strong> = ins System hineingehen (Login), Zu<strong>griff</strong> = mit der Hand nach den Daten greifen (Rechte).</div>
      <h5>Den eigenen Arbeitsplatz absichern und härten</h5>
      <ul>
        <li>Bildschirm beim Verlassen sperren (<kbd>Win</kbd> + <kbd>L</kbd>), Clean Desk, Ausdrucke sofort abholen</li>
        <li>als Standardbenutzer arbeiten – <strong>keine Admin-Rechte</strong> (Least Privilege), sonst läuft Schadsoftware mit vollen Rechten</li>
        <li>Betriebssystem und Anwendungen aktuell halten, Virenschutz aktiv</li>
        <li><strong>Härtung</strong>: unnötige Dienste und Programme entfernen, Standardpasswörter ändern, Makros aus dem Internet blockieren, Autostart von Wechselmedien deaktivieren, Secure Boot und Festplattenverschlüsselung (z. B. BitLocker) aktivieren</li>
        <li><strong>Security by Design</strong> (Sicherheit von Anfang an mitplanen) und <strong>Security by Default</strong> (sichere Grundeinstellungen ab Werk)</li>
      </ul>
      <table><thead><tr><th>Prinzip</th><th>Bedeutung</th><th>Beispiel</th></tr></thead><tbody>
        <tr><td><strong>Security by Design</strong></td><td>Sicherheit ist schon bei Planung, Entwicklung und Beschaffung eine Anforderung – nicht erst ein nachträgliches „Pflaster“.</td><td>Eine neue Kundensoftware wird von Beginn an mit verschlüsselter Speicherung, Rollenkonzept und Protokollierung geplant; bei der Beschaffung zählt die Update-Zusage des Herstellers.</td></tr>
        <tr><td><strong>Security by Default</strong></td><td>Der Auslieferungszustand ist bereits sicher; der Nutzer muss nichts „scharf schalten“.</td><td>Router mit individuellem Initialpasswort statt „admin/admin“, Firewall ab Werk aktiv, Makros aus dem Internet standardmäßig blockiert, Fernzugriff zunächst aus.</td></tr>
        <tr><td><em>Privacy by Design / by Default</em> (Art. 25 DSGVO)</td><td>das Gleiche für den Datenschutz</td><td>Ein Webformular fragt nur Pflichtangaben ab; Newsletter-Häkchen ist nicht vorausgewählt.</td></tr>
      </tbody></table>
      <p>Mit der <strong>Personal Firewall</strong> kannst du z. B. verhindern, dass ein Programm ins Internet kommuniziert:</p>
      <pre><code>New-NetFirewallRule -DisplayName "Tool ohne Internet" -Direction Outbound -Program "C:\\Tools\\tool.exe" -Action Block</code></pre>
      <h5>Isolation: Sandbox und Container</h5>
      <p>Eine <strong>Sandbox</strong> führt ein Programm in einer abgeschotteten Umgebung mit minimalen Rechten aus – was darin passiert, erreicht das eigentliche System nicht. Beispiele: Browser-Sandbox, geschützte Ansicht in Office, Windows-Sandbox zum Testen unbekannter Programme, Analyse verdächtiger Mail-Anhänge beim Mailfilter.</p>
      <p>Ein <strong>Software-Container</strong> (z. B. Docker, Podman) packt eine Anwendung mit allen Abhängigkeiten in eine isolierte Einheit. Container teilen sich den <strong>Kernel des Hosts</strong> und sind deshalb schlanker, aber weniger stark isoliert als virtuelle Maschinen. Sicher betrieben werden sie so: Images nur aus vertrauenswürdigen Quellen, regelmäßig aktualisieren und scannen, nicht als root, nur nötige Rechte und Netzzugriffe.</p>
      <pre><code>docker run --rm -it --read-only --cap-drop ALL --network none --user 1000:1000 alpine sh</code></pre>
      <p>Schreibgeschützt, ohne Sonderrechte, ohne Netz, als normaler Benutzer – und danach gelöscht (<code>--rm</code>).</p>
      <h5>Datensicherung</h5>
      <div class="callout merke"><strong>3-2-1-Regel:</strong> <strong>3</strong> Kopien der Daten, auf <strong>2</strong> verschiedenen Speichermedien, davon <strong>1</strong> außer Haus (offsite). Gegen Ransomware zusätzlich eine Kopie offline bzw. unveränderbar – und Wiederherstellung regelmäßig testen.</div>
      <table><thead><tr><th>Sicherungsart</th><th>sichert …</th><th>Wiederherstellung braucht …</th></tr></thead><tbody>
        <tr><td>Vollsicherung</td><td>alle Daten</td><td>nur die letzte Vollsicherung</td></tr>
        <tr><td>differenziell</td><td>alle Änderungen seit der letzten <strong>Voll</strong>sicherung</td><td>Vollsicherung + letzte differenzielle</td></tr>
        <tr><td>inkrementell</td><td>alle Änderungen seit der letzten Sicherung <strong>jeglicher Art</strong></td><td>Vollsicherung + <em>alle</em> inkrementellen der Reihe nach</td></tr>
      </tbody></table>
      <p>Beim <strong>Generationenprinzip</strong> (Großvater-Vater-Sohn) werden tägliche, wöchentliche und monatliche Sicherungen rotierend aufbewahrt. Für Verfügbarkeit sorgen außerdem <strong>USV</strong>, Redundanz und ein NAS mit Snapshots.</p>
      <h5>Verfügbarkeit mit einem NAS sichern</h5>
      <p>Ein <strong>NAS</strong> (<em>Network Attached Storage</em>) ist ein Speichergerät im Netzwerk, das Dateien zentral bereitstellt. Vorteile für die Verfügbarkeit: Daten liegen nicht verstreut auf einzelnen Clients, sondern an einer Stelle, die zentral gesichert wird; fällt ein Client aus, arbeitet man an einem anderen weiter. <strong>Snapshots</strong> halten den Zustand zu festen Zeitpunkten fest, sodass versehentlich gelöschte oder überschriebene Dateien schnell zurückgeholt werden können. Mehrere Festplatten im Verbund fangen den Ausfall einer Platte ab (die RAID-Level lernst du ausführlich für die AP2).</p>
      <p>Grenzen: Ein NAS im selben Netz ist für Ransomware erreichbar und steht im selben Raum wie die übrigen Geräte. Deshalb Snapshots schreibgeschützt anlegen, ein eigenes Administratorkonto verwenden und <strong>zusätzlich</strong> ein Offline- bzw. Offsite-Backup nach der 3-2-1-Regel führen.</p>
      <h5>Datenträger sicher löschen und vernichten</h5>
      <p>„Löschen“ im Explorer, Papierkorb leeren oder Schnellformatieren entfernt nur die Verweise auf die Daten – mit Wiederherstellungsprogrammen sind sie oft wieder lesbar. Bevor Geräte ausgemustert, verkauft oder zur Reparatur gegeben werden, gilt deshalb:</p>
      <ul>
        <li><strong>Festplatten (HDD)</strong>: vollständig mit einem geeigneten Löschprogramm überschreiben oder physisch vernichten.</li>
        <li><strong>SSDs, USB-Sticks, Speicherkarten</strong>: Überschreiben ist wegen interner Verwaltung (Wear-Leveling, Reservebereiche) unzuverlässig → herstellereigene Secure-Erase-Funktion, <em>Crypto-Erase</em> (bei vollverschlüsselten Datenträgern den Schlüssel sicher vernichten) oder physische Vernichtung.</li>
        <li><strong>Papier</strong>: Aktenvernichter bzw. Datenschutztonne eines zertifizierten Entsorgers – nicht der normale Papiermüll.</li>
      </ul>
      <p>Die Norm <strong>DIN 66399</strong> legt fest, wie klein Datenträger zerkleinert werden müssen:</p>
      <table><thead><tr><th>Begriff</th><th>Bedeutung</th></tr></thead><tbody>
        <tr><td>3 <strong>Schutzklassen</strong></td><td>1 = normaler, 2 = hoher, 3 = sehr hoher Schutzbedarf – passt direkt zu den Schutzbedarfskategorien</td></tr>
        <tr><td>7 <strong>Sicherheitsstufen</strong></td><td>Stufe 1 (grob) bis Stufe 7 (feinste Partikel); Schutzklasse 1 → Stufen 1–3, Schutzklasse 2 → Stufen 3–5, Schutzklasse 3 → Stufen 4–7</td></tr>
        <tr><td>6 <strong>Materialklassen</strong></td><td>P = Papier, F = Film, O = optische Datenträger, T = magnetische Datenträger (z. B. Bänder), H = Festplatten, E = elektronische Datenträger (SSD, USB-Stick)</td></tr>
      </tbody></table>
      <div class="callout beispiel"><strong>Beispiel:</strong> Personalakten haben Vertraulichkeit „hoch“ → Schutzklasse 2 → z. B. Sicherheitsstufe 4 für Papier, abgekürzt <strong>P-4</strong>. Alte SSDs aus der Personalabteilung → Materialklasse E, ebenfalls mindestens Schutzklasse 2. Beauftragt die Firma einen Entsorger, ist das eine Auftragsverarbeitung (AVV) – und sie lässt sich die Vernichtung protokollieren.</div>
      <div class="callout beispiel"><strong>Fallbeispiel Videoüberwachung:</strong> Kameras im Wareneingang (Zutrittskontrolle, Diebstahlschutz) erfassen auch Beschäftigte. Nötig sind: Rechtsgrundlage und klarer Zweck (berechtigtes Interesse), Hinweisschilder, Datenminimierung (nur nötiger Bildausschnitt, keine Pausenräume), kurze Löschfrist (in der Regel 72 h), Zugriff nur für wenige Berechtigte mit Protokoll. Der <strong>Betriebsrat</strong> bestimmt mit, weil sich Verhalten und Leistung überwachen lassen (§ 87 Abs. 1 Nr. 6 BetrVG) → Betriebsvereinbarung.</div>
      <div class="callout achtung"><strong>Prüfungsfalle:</strong> Redundanz (z. B. gespiegelte Festplatten) ist <strong>kein Backup</strong>: Ein versehentliches Löschen oder eine Verschlüsselung durch Ransomware wird sofort mitgespiegelt. Und ein Backup, dessen Wiederherstellung nie getestet wurde, ist nur eine Hoffnung.</div>
      <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Unterscheiden</em> Sie Zutritts-, Zugangs- und Zugriffskontrolle mit je einem Beispiel“, „<em>Ordnen</em> Sie Maßnahmen den Kategorien technisch/organisatorisch/personell/infrastrukturell <em>zu</em>“, „<em>Erläutern</em> Sie die 3-2-1-Regel“, „<em>Nennen</em> Sie drei Maßnahmen zur Härtung eines Clients“, „<em>Erklären</em> Sie Security by Default an einem Beispiel“, „<em>Beschreiben</em> Sie, wie alte SSDs datenschutzgerecht entsorgt werden“.</div>
      `
    },
    {
      id: "passwort-krypto",
      title: "Passwortsicherheit, MFA und Kryptografie-Grundlagen",
      exam: ["AP1", "AP2"],
      summary: "Passwort-Policy bewerten und Passwortstärke berechnen, Authentifizierungsfaktoren und MFA erklären, symmetrische, asymmetrische und hybride Verschlüsselung sowie Hash, digitale Signatur und Zertifikat unterscheiden.",
      html: `
      <h5>Gute Passwort-Policy (nach BSI-Empfehlungen)</h5>
      <ul>
        <li><strong>Länge vor Komplexität</strong>: laut BSI z. B. 8–12 Zeichen mit 4 Zeichenarten <em>oder</em> eine Passphrase mit 20–25 Zeichen und 2 Zeichenarten; für Firmenkonten besser mindestens 12 Zeichen (siehe Rechenbeispiel unten)</li>
        <li>für jeden Dienst ein <strong>eigenes</strong> Passwort; ein <strong>Passwortmanager</strong> hilft</li>
        <li>kein Namen, Geburtsdatum, Wörterbuchwort, keine Tastaturmuster wie <code>qwertz</code></li>
        <li>Wechsel <strong>nur bei Anlass</strong> (Verdacht auf Kompromittierung) statt starrer 90-Tage-Regel</li>
        <li>Kontosperre oder Verzögerung nach mehreren Fehlversuchen; Passwörter nie weitergeben oder aufschreiben</li>
        <li>Systeme speichern Passwörter nur als <strong>gesalzene Hashwerte</strong>, nie im Klartext</li>
      </ul>
      <div class="callout formel"><strong>Formeln:</strong><br>Anzahl Kombinationen = Zeichenvorrat<sup>Länge</sup><br>maximale Rechenzeit = Kombinationen ÷ Versuche pro Sekunde<br>Stärke in Bit = Länge × log₂(Zeichenvorrat)</div>
      <div class="callout beispiel"><strong>Beispiel:</strong> Ein Angreifer testet offline 10¹⁰ Passwörter pro Sekunde. Zeichenvorrat: 26 Klein- + 26 Großbuchstaben + 10 Ziffern = 62.<br>8 Zeichen: 62⁸ = 218.340.105.584.896 ≈ 2,18 × 10¹⁴ Kombinationen → 2,18 × 10¹⁴ ÷ 10¹⁰ ≈ 21.834 s ≈ <strong>6,1 Stunden</strong><br>12 Zeichen: 62¹² ≈ 3,23 × 10²¹ → 3,23 × 10¹¹ s ≈ <strong>10.230 Jahre</strong><br>Nur Kleinbuchstaben, 8 Zeichen: 26⁸ ≈ 2,09 × 10¹¹ → ≈ <strong>21 Sekunden</strong>.<br>→ Jedes zusätzliche Zeichen vervielfacht den Aufwand; die Länge wirkt stärker als zusätzliche Zeichenarten.</div>
      <h5>Authentifizierung und MFA</h5>
      <table><thead><tr><th>Faktor</th><th>Beispiele</th></tr></thead><tbody>
        <tr><td><strong>Wissen</strong> – etwas, das ich weiß</td><td>Passwort, PIN, Antwort auf Sicherheitsfrage</td></tr>
        <tr><td><strong>Besitz</strong> – etwas, das ich habe</td><td>Smartphone mit Authenticator-App (TOTP-Code), Hardware-Token/Security-Key (FIDO2), Chipkarte</td></tr>
        <tr><td><strong>Inhärenz</strong> – etwas, das ich bin</td><td>Fingerabdruck, Gesichtserkennung</td></tr>
      </tbody></table>
      <p><strong>Multi-Faktor-Authentifizierung (MFA)</strong> kombiniert mindestens zwei <strong>verschiedene</strong> Faktoren. Ein gestohlenes Passwort allein reicht dann nicht mehr. Am sichersten gegen Phishing sind <strong>Passkeys</strong> bzw. FIDO2-Schlüssel, weil sie an die echte Webadresse gebunden sind. SMS-Codes sind besser als nichts, aber anfälliger (z. B. SIM-Swapping). Biometrie kann irren: Sie lässt Unbefugte zu (Falschakzeptanzrate, FAR) oder weist Berechtigte ab (Falschrückweisungsrate, FRR).</p>
      <h5>Verschlüsselung</h5>
      <table><thead><tr><th></th><th>symmetrisch</th><th>asymmetrisch</th><th>hybrid</th></tr></thead><tbody>
        <tr><td>Schlüssel</td><td>ein gemeinsamer geheimer Schlüssel</td><td>Schlüsselpaar: öffentlicher + privater Schlüssel</td><td>asymmetrisch wird ein zufälliger Sitzungsschlüssel ausgetauscht, damit dann symmetrisch verschlüsselt</td></tr>
        <tr><td>Beispiel</td><td>AES</td><td>RSA, ECC</td><td>TLS (HTTPS), S/MIME, PGP</td></tr>
        <tr><td>Vorteil</td><td>sehr schnell</td><td>kein geheimer Schlüsselaustausch nötig</td><td>schnell <em>und</em> sicherer Schlüsselaustausch</td></tr>
        <tr><td>Nachteil</td><td>Schlüssel muss sicher übergeben werden; viele Schlüssel bei vielen Partnern</td><td>langsam</td><td>aufwendiger (benötigt PKI/Zertifikate)</td></tr>
      </tbody></table>
      <div class="callout beispiel"><strong>Beispiel Schlüsselanzahl:</strong> 20 Personen wollen paarweise vertraulich kommunizieren.<br>symmetrisch: n × (n − 1) ÷ 2 = 20 × 19 ÷ 2 = <strong>190 Schlüssel</strong><br>asymmetrisch: 2 × n = 2 × 20 = <strong>40 Schlüssel</strong> (je ein Paar pro Person)</div>
      <p>Verschlüsseln: mit dem <strong>öffentlichen</strong> Schlüssel des <strong>Empfängers</strong> – nur sein privater Schlüssel kann entschlüsseln.</p>
      <h5>Hash, digitale Signatur, Zertifikat</h5>
      <ul>
        <li><strong>Hashwert</strong>: Einwegfunktion, die aus beliebigen Daten einen Wert fester Länge berechnet (z. B. SHA-256 → 256 Bit). Kleinste Änderung → völlig anderer Hash. Nutzen: <strong>Integrität</strong> prüfen (z. B. Prüfsumme eines Downloads vergleichen), Passwörter speichern. MD5 und SHA-1 gelten als veraltet.</li>
        <li><strong>Digitale Signatur</strong>: Der Absender bildet den Hash des Dokuments und signiert ihn mit seinem <strong>privaten</strong> Schlüssel. Der Empfänger prüft mit dem <strong>öffentlichen</strong> Schlüssel des Absenders → Integrität, Authentizität, Verbindlichkeit.</li>
        <li><strong>Zertifikat</strong> (X.509): bestätigt, dass ein öffentlicher Schlüssel zu einer bestimmten Person, Firma oder Domain gehört; ausgestellt und signiert von einer Zertifizierungsstelle (CA) innerhalb einer PKI.</li>
      </ul>
      <h5>E-Mails sicher und datenschutzgerecht versenden</h5>
      <ul>
        <li><strong>Transportverschlüsselung (TLS)</strong> schützt nur die Strecke zum bzw. zwischen den Mailservern – auf den Servern liegt die Mail im Klartext. Abruf per IMAP (Port 993) oder POP3 (Port 995), Versand per SMTP-Submission (Port 587), jeweils mit TLS (siehe Tabelle).</li>
        <li><strong>Ende-zu-Ende-Verschlüsselung</strong> mit S/MIME (X.509-Zertifikate) oder OpenPGP: Nur der Empfänger kann entschlüsseln – nötig für vertrauliche Inhalte wie Gesundheits- oder Mandantendaten.</li>
        <li>Rundmails an externe Empfänger mit <strong>BCC</strong> versenden; im Feld „An“ oder „CC“ würden alle Adressen offengelegt – ein Datenschutzverstoß.</li>
      </ul>
      <table><thead><tr><th>Protokoll</th><th>Aufgabe</th><th>Port ohne TLS bzw. mit STARTTLS</th><th>Port mit TLS von Anfang an</th></tr></thead><tbody>
        <tr><td><strong>SMTP</strong></td><td>Mails versenden bzw. zwischen Mailservern weiterleiten</td><td>25 (Server ↔ Server), 587 (Einlieferung durch das Mailprogramm, mit STARTTLS)</td><td>465</td></tr>
        <tr><td><strong>IMAP</strong></td><td>Mails abrufen – sie <strong>bleiben auf dem Server</strong>, Ordner und Gelesen-Status werden auf allen Geräten synchronisiert</td><td>143</td><td>993</td></tr>
        <tr><td><strong>POP3</strong></td><td>Mails abrufen – sie werden auf ein Gerät <strong>heruntergeladen</strong> und meist auf dem Server gelöscht</td><td>110</td><td>995</td></tr>
      </tbody></table>
      <p>Für den Betrieb heißt das: IMAP passt, wenn Beschäftigte mit Notebook und Smartphone auf dasselbe Postfach zugreifen, und die Mails werden mit dem Server zentral gesichert. Bei POP3 liegen die Mails nur noch lokal – geht das Gerät verloren oder ist es nicht gesichert, sind sie weg (Verfügbarkeit), und ein gestohlenes Notebook enthält das komplette Postfach (Vertraulichkeit).</p>
      <div class="callout achtung"><strong>Prüfungsfalle:</strong> Passwort + Sicherheitsfrage ist <em>keine</em> 2FA – beides ist „Wissen“. Ein Hash ist <em>keine</em> Verschlüsselung, weil er sich nicht zurückrechnen lässt. Signieren mit dem <em>privaten</em> Schlüssel des Absenders, verschlüsseln mit dem <em>öffentlichen</em> Schlüssel des Empfängers.</div>
      <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Bewerten</em> Sie die Passwort-Richtlinie“, „<em>Berechnen</em> Sie die Anzahl möglicher Kombinationen“, „<em>Erläutern</em> Sie das Prinzip der hybriden Verschlüsselung“, „<em>Beschreiben</em> Sie, wie eine digitale Signatur die Integrität sicherstellt“, „<em>Nennen</em> Sie die drei Faktoren der Authentifizierung“, „<em>Unterscheiden</em> Sie IMAP und POP3 und <em>nennen</em> Sie die Ports für die verschlüsselte Verbindung“.</div>
      `
    },
    {
      id: "urheberrecht-lizenzen",
      title: "Urheberrecht, Markenrecht und Softwarelizenzen",
      exam: ["AP1", "AP2"],
      summary: "Wie Software und Inhalte durch Urheber- und Markenrecht geschützt sind, was Nutzungsrechte und Lizenzen erlauben und wie sich proprietäre Software, Freeware, Shareware und Open Source (GPL, MIT, Apache) unterscheiden.",
      html: `
      <h5>Urheberrecht (UrhG)</h5>
      <ul>
        <li>Geschützt ist jedes <strong>Werk</strong>, also eine <em>persönliche geistige Schöpfung</em> (§ 2 UrhG): Texte, Bilder, Musik, Filme – und ausdrücklich auch <strong>Computerprogramme</strong> (Sonderregeln in §§ 69a ff.).</li>
        <li>Der Schutz entsteht <strong>automatisch</strong> mit der Schöpfung – ohne Anmeldung, Eintragung oder ©-Vermerk.</li>
        <li>Er endet <strong>70 Jahre nach dem Tod</strong> des Urhebers; danach ist das Werk gemeinfrei.</li>
        <li>Das Urheberrecht selbst ist <strong>nicht übertragbar</strong> (nur vererbbar). Der Urheber kann aber <strong>Nutzungsrechte</strong> einräumen – <em>einfach</em> (auch andere dürfen nutzen) oder <em>ausschließlich</em> (nur der Lizenznehmer), jeweils räumlich, zeitlich und inhaltlich beschränkbar.</li>
        <li><strong>Software von Angestellten</strong> (§ 69b): Entsteht ein Programm in Erfüllung der Arbeitsaufgaben, darf der <strong>Arbeitgeber</strong> alle vermögensrechtlichen Befugnisse ausüben, sofern nichts anderes vereinbart ist.</li>
        <li>Der rechtmäßige Nutzer darf das Programm bestimmungsgemäß verwenden, Fehler beheben und eine <strong>Sicherungskopie</strong> anlegen (§ 69d). Die „Privatkopie“ nach § 53 gilt für Software nicht.</li>
        <li>Verstöße: Unterlassung und <strong>Schadenersatz</strong> (§ 97), bei unerlaubter Verwertung Freiheitsstrafe bis zu 3 Jahren oder Geldstrafe (§ 106).</li>
      </ul>
      <table><thead><tr><th></th><th>Urheberrecht (Deutschland)</th><th>Copyright (z. B. USA)</th></tr></thead><tbody>
        <tr><td>Schutzobjekt</td><td>der Urheber und seine Beziehung zum Werk</td><td>das Werk als Wirtschaftsgut</td></tr>
        <tr><td>Übertragbarkeit</td><td>nicht übertragbar, nur Nutzungsrechte</td><td>vollständig übertragbar, Arbeitgeber kann direkt Rechteinhaber sein</td></tr>
        <tr><td>Verzicht / Public Domain</td><td>kein Verzicht möglich; gemeinfrei erst nach Ablauf</td><td>Freigabe in die Public Domain möglich</td></tr>
      </tbody></table>
      <h5>Markenrecht (MarkenG)</h5>
      <p>Eine <strong>Marke</strong> ist ein Kennzeichen, das Waren oder Dienstleistungen eines Unternehmens von anderen unterscheidet: Wort, Logo, Wort-Bild-Kombination, Farbe, Klang. Schutz entsteht vor allem durch <strong>Eintragung</strong> beim Deutschen Patent- und Markenamt (DPMA) bzw. als Unionsmarke beim EUIPO, außerdem durch Benutzung mit Verkehrsgeltung. Die Schutzdauer beträgt <strong>10 Jahre</strong> und lässt sich beliebig oft um jeweils 10 Jahre verlängern. Das Zeichen ® darf nur für eingetragene Marken verwendet werden. Relevant in der IT: Produkt- und Softwarenamen, Logos in Präsentationen, Domainnamen.</p>
      <h5>Lizenzmodelle</h5>
      <table><thead><tr><th>Modell</th><th>Merkmale</th></tr></thead><tbody>
        <tr><td><strong>proprietär / kommerziell</strong></td><td>Quellcode geheim; Nutzung nur nach Lizenzvertrag, beim Endkunden meist als <strong>EULA</strong> (End User License Agreement)</td></tr>
        <tr><td>OEM-Lizenz</td><td>günstig, an ein bestimmtes Gerät gebunden</td></tr>
        <tr><td>Volumenlizenz</td><td>viele Lizenzen für Unternehmen mit zentraler Verwaltung</td></tr>
        <tr><td>Abo / SaaS, Pay-per-Use</td><td>laufende Gebühr bzw. Abrechnung nach tatsächlicher Nutzung; Nutzungsrecht endet mit dem Vertrag</td></tr>
        <tr><td>CAL (Client Access License)</td><td>Zugriffslizenz pro Benutzer oder pro Gerät für Serverdienste</td></tr>
        <tr><td><strong>Freeware</strong></td><td>kostenlos nutzbar, aber meist <em>ohne</em> Quellcode und oft nur privat erlaubt</td></tr>
        <tr><td><strong>Shareware</strong></td><td>kostenlos testen, nach Testphase oder für den vollen Umfang bezahlen</td></tr>
        <tr><td><strong>Open Source</strong></td><td>Quellcode offen; nutzen, ändern und weitergeben erlaubt – nach den Bedingungen der jeweiligen Lizenz</td></tr>
      </tbody></table>
      <table><thead><tr><th>Open-Source-Lizenz</th><th>Typ</th><th>Wichtigste Pflicht</th></tr></thead><tbody>
        <tr><td>GNU GPL</td><td>starkes <strong>Copyleft</strong></td><td>Wer veränderte oder abgeleitete Software <em>weitergibt</em>, muss sie wieder unter der GPL mit Quellcode weitergeben.</td></tr>
        <tr><td>GNU LGPL</td><td>schwaches Copyleft</td><td>Bibliothek darf in proprietäre Programme eingebunden werden; Änderungen an der Bibliothek selbst bleiben LGPL.</td></tr>
        <tr><td>MIT, BSD</td><td>permissiv (freizügig)</td><td>nur Urheber- und Lizenzhinweis beibehalten; Einbau in proprietäre Produkte erlaubt</td></tr>
        <tr><td>Apache 2.0</td><td>permissiv</td><td>Lizenz- und Änderungshinweise beibehalten; enthält zusätzlich eine Patentlizenz</td></tr>
      </tbody></table>
      <div class="callout beispiel"><strong>Beispiel Kauf vs. Abo:</strong> Eine Kauflizenz kostet einmalig 480 € und wird 3 Jahre genutzt. Das Abo kostet 12,50 € pro Monat.<br>Abo über 3 Jahre = 36 × 12,50 € = <strong>450 €</strong> → etwas günstiger, dazu laufende Updates; dafür endet das Nutzungsrecht mit dem Abo. Bei 4 Jahren Nutzung: 48 × 12,50 € = 600 € &gt; 480 € → dann lohnt der Kauf (sofern keine Upgrades nötig sind).</div>
      <p>Für Bilder und Texte werden oft <strong>Creative-Commons-Lizenzen</strong> genutzt (z. B. CC BY = Namensnennung). Ein <strong>Lizenzmanagement</strong> hält fest, welche Lizenzen vorhanden und im Einsatz sind. Folgen eines Lizenzverstoßes: Unterlassung, Schadenersatz, teure Nachlizenzierung nach einem Hersteller-Audit, Imageschaden.</p>
      <div class="callout achtung"><strong>Prüfungsfalle:</strong> Freeware ist <em>nicht</em> Open Source (kein Quellcode). Open Source ist <em>nicht</em> gemeinfrei – es gelten Lizenzbedingungen. Die GPL verbietet den Verkauf nicht; sie verlangt nur die Weitergabe des Quellcodes unter gleichen Bedingungen. Ein Bild aus der Google-Suche ist urheberrechtlich geschützt, auch ohne ©.</div>
      <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Unterscheiden</em> Sie Open Source und proprietäre Software“, „<em>Erläutern</em> Sie das Copyleft-Prinzip der GPL“, „<em>Beurteilen</em> Sie, ob die Firma die Freeware kommerziell einsetzen darf“, „<em>Nennen</em> Sie die Schutzdauer im Urheber- und im Markenrecht“.</div>
      `
    },
    {
      id: "ki-telemetrie",
      title: "KI-Verordnung, Telemetrie- und Metadaten",
      exam: ["AP1", "AP2"],
      summary: "Die Risikoklassen der EU-KI-Verordnung mit Pflichten und Fristen, sicherer KI-Einsatz im Betrieb sowie Datenschutzrisiken durch Telemetrie und Metadaten – und wie du sie begrenzt.",
      html: `
      <h5>Die EU-KI-Verordnung (AI Act)</h5>
      <p>Die <strong>Verordnung (EU) 2024/1689</strong> ist seit dem <strong>1. August 2024</strong> in Kraft und gilt gestaffelt: Verbote und die Regeln zur <strong>KI-Kompetenz</strong> der Beschäftigten seit dem 2. Februar 2025, Regeln für KI-Modelle mit allgemeinem Verwendungszweck (z. B. große Sprachmodelle) seit dem 2. August 2025, die meisten übrigen Pflichten (z. B. Transparenzpflichten für Chatbots und KI-generierte Inhalte) seit dem 2. August 2026. Der <strong>„digitale Omnibus“ zur KI</strong> (Änderungsverordnung, in Kraft seit Juli 2026) hat die Pflichten für <strong>Hochrisiko-Systeme</strong> verschoben: eigenständige Hochrisiko-Systeme (Anhang III, z. B. Bewerberauswahl, Kreditprüfung) ab dem <strong>2. Dezember 2027</strong>, KI in regulierten Produkten wie Medizinprodukten (Anhang I) ab dem <strong>2. August 2028</strong> (Stand 2026 – vor einer Beratung den aktuellen Stand nachschlagen). Die Verordnung verfolgt einen <strong>risikobasierten Ansatz</strong>:</p>
      <table><thead><tr><th>Risikoklasse</th><th>Beispiele</th><th>Folge</th></tr></thead><tbody>
        <tr><td><strong>unannehmbares Risiko</strong></td><td>Social Scoring, manipulative Techniken, Ausnutzen von Schwächen (z. B. von Kindern), Emotionserkennung am Arbeitsplatz und in Schulen, ungezieltes Sammeln von Gesichtsbildern</td><td><strong>verboten</strong></td></tr>
        <tr><td><strong>hohes Risiko</strong></td><td>KI zur Bewerberauswahl, Kreditwürdigkeitsprüfung, Bewertung von Prüfungen, Steuerung kritischer Infrastruktur, Medizinprodukte</td><td>strenge Pflichten: Risikomanagement, Datenqualität, technische Dokumentation, Protokollierung, <strong>menschliche Aufsicht</strong>, Konformitätsbewertung</td></tr>
        <tr><td><strong>begrenztes Risiko</strong> (Transparenz)</td><td>Chatbots, KI-generierte Bilder, Texte und Videos (Deepfakes)</td><td><strong>Transparenzpflichten</strong>: Nutzer müssen erkennen, dass sie mit KI sprechen bzw. dass Inhalte künstlich erzeugt sind</td></tr>
        <tr><td><strong>minimales Risiko</strong></td><td>Spamfilter, KI in Videospielen, Rechtschreibhilfe</td><td>keine besonderen Pflichten</td></tr>
      </tbody></table>
      <p>Pflichten treffen vor allem <strong>Anbieter</strong> (wer ein KI-System entwickelt und in Verkehr bringt), aber auch <strong>Betreiber</strong> (wer es beruflich einsetzt). Verstöße gegen die Verbote können mit bis zu <strong>35 Mio. € oder 7 %</strong> des weltweiten Jahresumsatzes geahndet werden (bei Unternehmen gilt der höhere Betrag), die meisten übrigen Verstöße mit bis zu 15 Mio. € oder 3 %. Schon seit Februar 2025 müssen Anbieter und Betreiber außerdem Maßnahmen zur <strong>KI-Kompetenz</strong> ihrer Beschäftigten ergreifen (Art. 4) – etwa Schulungen zu Chancen, Risiken und sicherer Nutzung. Der digitale Omnibus hat diese Pflicht 2026 abgeschwächt: Unternehmen müssen die KI-Kompetenz <em>fördern</em>, ein bestimmtes Kompetenzniveau wird nicht mehr verlangt.</p>
      <h5>KI sicher im Betrieb nutzen</h5>
      <ul>
        <li>keine personenbezogenen oder vertraulichen Firmendaten in öffentliche KI-Chatbots eingeben – die Eingaben können gespeichert und zum Training genutzt werden</li>
        <li>eine interne <strong>KI-Richtlinie</strong>: erlaubte Tools, erlaubte Daten, Kennzeichnung, Verantwortlichkeiten</li>
        <li>Ergebnisse immer prüfen – KI kann überzeugend falsche Antworten liefern („Halluzinationen“)</li>
        <li>die DSGVO gilt parallel; rein KI-generierte Inhalte sind mangels menschlicher Schöpfung in der Regel nicht urheberrechtlich geschützt</li>
      </ul>
      <h5>Telemetriedaten</h5>
      <p><strong>Telemetrie</strong> ist die automatische Übertragung von Nutzungs-, Diagnose- und Fehlerdaten an den Hersteller – bei Betriebssystemen, Office-Paketen, Browsern, Smart-TVs oder Apps. Der Hersteller will damit Fehler finden und Produkte verbessern. Problematisch: Die Daten enthalten oft Geräte-IDs, IP-Adressen oder Nutzungsverhalten, sind also häufig <strong>personenbezogen</strong> und fließen teils in Drittländer. Das BSI hat die Windows-Telemetrie im Projekt „SiSyPHuS“ untersucht und Empfehlungen zur Einschränkung gegeben.</p>
      <p>Maßnahmen: Diagnosedaten auf das erforderliche Minimum setzen, im Unternehmen zentral per Gruppenrichtlinie (<em>Computerkonfiguration → Administrative Vorlagen → Windows-Komponenten → Datensammlung und Vorabversionen → Diagnosedaten zulassen</em>), Datenschutzeinstellungen bei der Einrichtung prüfen, bei Bedarf Verbindungen an der Firewall blockieren und den Betriebsrat sowie den DSB einbeziehen.</p>
      <h5>Metadaten</h5>
      <p><strong>Metadaten</strong> sind „Daten über Daten“ – sie beschreiben eine Datei oder einen Vorgang, ohne selbst der Inhalt zu sein.</p>
      <table><thead><tr><th>Quelle</th><th>Typische Metadaten</th><th>Risiko</th></tr></thead><tbody>
        <tr><td>Fotos (EXIF)</td><td>GPS-Koordinaten, Aufnahmezeit, Kameramodell</td><td>verrät Wohnort oder Standort</td></tr>
        <tr><td>Office-Dokumente, PDF</td><td>Autor, Firma, Bearbeitungszeit, Kommentare, frühere Versionen, ausgeblendeter Text</td><td>interne Informationen gelangen an Kunden</td></tr>
        <tr><td>E-Mail-Header</td><td>Absender-IP, beteiligte Mailserver, Zeitstempel</td><td>Rückschlüsse auf Infrastruktur</td></tr>
        <tr><td>Verbindungsdaten</td><td>wer wann mit wem wie lange kommuniziert hat</td><td>Bewegungs- und Beziehungsprofile</td></tr>
      </tbody></table>
      <p>Angreifer werten Metadaten gezielt aus, etwa für Spear-Phishing (Namen, Softwareversionen, Strukturen). Vor der Weitergabe deshalb bereinigen: in Word mit „Dokument prüfen“ (Dokumentinspektor), im Windows-Explorer über <em>Eigenschaften → Details → Eigenschaften und persönliche Informationen entfernen</em> oder mit einem Tool:</p>
      <pre><code>exiftool -all= foto.jpg</code></pre>
      <div class="callout merke"><strong>Merke:</strong> Auch wenn der Inhalt harmlos ist, können die <em>Begleitdaten</em> personenbezogen oder vertraulich sein. Datensparsamkeit bedeutet deshalb auch: Telemetrie begrenzen und Metadaten vor der Weitergabe entfernen.</div>
      <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Ordnen</em> Sie die KI-Anwendungen den Risikoklassen der KI-Verordnung <em>zu</em>“, „<em>Nennen</em> Sie zwei Vor- und zwei Nachteile eines KI-Chatbots im Kundenservice“, „<em>Erläutern</em> Sie, warum Metadaten ein Datenschutzrisiko sind“, „<em>Beschreiben</em> Sie Maßnahmen zur Einschränkung von Telemetrie“.</div>
      `
    },
  ],
  exercises: [
    {
      id: "e-schutzziele",
      topic: "grundlagen",
      title: "Sicherheitsvorfälle den Schutzzielen zuordnen",
      level: 1,
      exam: ["AP1"],
      task: `
      <p>Die <strong>Nordlicht IT GmbH</strong> in Heide betreut mehrere Kunden. In der letzten Woche wurden folgende Vorfälle gemeldet. Ordne jedem Vorfall das hauptsächlich verletzte Schutzziel zu (Vertraulichkeit, Integrität, Verfügbarkeit, Authentizität, Verbindlichkeit) und begründe in einem Satz.</p>
      <ul>
        <li><strong>a)</strong> Ein Praktikant kann auf dem Netzlaufwerk die Gehaltsliste öffnen.</li>
        <li><strong>b)</strong> Nach einem Stromausfall ist der Webshop eines Kunden 6 Stunden nicht erreichbar.</li>
        <li><strong>c)</strong> Ein Angreifer ändert in einer PDF-Rechnung unbemerkt die IBAN.</li>
        <li><strong>d)</strong> Eine E-Mail scheint vom Geschäftsführer zu stammen, wurde aber von einem Betrüger verschickt.</li>
        <li><strong>e)</strong> Ein Kunde bestreitet, einen Wartungsauftrag über das Online-Formular erteilt zu haben – es gibt keinen Nachweis.</li>
        <li><strong>f)</strong> Ransomware verschlüsselt den Dateiserver; die Täter drohen, kopierte Kundendaten zu veröffentlichen.</li>
      </ul>`,
      hints: ["Frage dich: Wurde etwas gelesen, verändert, blockiert, gefälscht oder abgestritten?"],
      solution: `
      <table><thead><tr><th>Vorfall</th><th>Schutzziel</th><th>Begründung</th></tr></thead><tbody>
        <tr><td>a)</td><td>Vertraulichkeit</td><td>Eine unbefugte Person kann vertrauliche Daten lesen, weil die Zugriffsrechte falsch gesetzt sind.</td></tr>
        <tr><td>b)</td><td>Verfügbarkeit</td><td>Der Dienst steht zur benötigten Zeit nicht zur Verfügung.</td></tr>
        <tr><td>c)</td><td>Integrität</td><td>Die Daten wurden unbefugt und unbemerkt verändert (zusätzlich ist die Echtheit der Rechnung fraglich).</td></tr>
        <tr><td>d)</td><td>Authentizität</td><td>Der angezeigte Absender ist nicht der echte Urheber der Nachricht.</td></tr>
        <tr><td>e)</td><td>Verbindlichkeit</td><td>Die Handlung lässt sich dem Kunden nicht nachweisbar zuordnen, deshalb kann er sie abstreiten.</td></tr>
        <tr><td>f)</td><td>Verfügbarkeit und Vertraulichkeit</td><td>Die verschlüsselten Daten sind nicht nutzbar (Verfügbarkeit); die kopierten Kundendaten gelangen an Unbefugte (Vertraulichkeit).</td></tr>
      </tbody></table>`
    },
    {
      id: "e-verfuegbarkeit",
      topic: "grundlagen",
      title: "SLA-Verfügbarkeit berechnen und bewerten",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `
      <p>Die <strong>Meldorfer Energie-Service GmbH</strong> hat mit ihrem Hoster eine Verfügbarkeit von <strong>99,5 % pro Monat</strong> vereinbart (Abrechnungsmonat = 30 Tage). Im September gab es drei Ausfälle: 2 h 15 min, 1 h 50 min und 1 h 15 min.</p>
      <ul>
        <li><strong>a)</strong> Berechne die zulässige Ausfallzeit pro Monat in Stunden und Minuten.</li>
        <li><strong>b)</strong> Berechne die tatsächliche Verfügbarkeit im September (zwei Nachkommastellen).</li>
        <li><strong>c)</strong> Beurteile, ob der Hoster das SLA eingehalten hat, und nenne das betroffene Schutzziel.</li>
        <li><strong>d)</strong> Wie viel Ausfallzeit pro Jahr (365 Tage) wäre bei 99,9 % zulässig?</li>
      </ul>`,
      hints: ["Rechne zuerst die Gesamtzeit des Monats in Stunden aus.", "Minuten in Stunden: 20 min = 20 ÷ 60 h ≈ 0,33 h"],
      solution: `
      <p><strong>a)</strong> Gesamtzeit = 30 × 24 h = 720 h<br>zulässige Ausfallzeit = 720 h × (100 % − 99,5 %) = 720 h × 0,005 = 3,6 h = <strong>3 h 36 min</strong></p>
      <p><strong>b)</strong> Summe der Ausfälle: 2 h 15 min + 1 h 50 min + 1 h 15 min = 5 h 20 min ≈ 5,33 h<br>Verfügbarkeit = (720 h − 5,33 h) ÷ 720 h × 100 = 714,67 ÷ 720 × 100 ≈ <strong>99,26 %</strong></p>
      <p><strong>c)</strong> 99,26 % liegt unter den vereinbarten 99,5 %. Die zulässige Ausfallzeit wurde um 5 h 20 min − 3 h 36 min = <strong>1 h 44 min</strong> überschritten. Das SLA ist verletzt; betroffen ist das Schutzziel <strong>Verfügbarkeit</strong>. Der Kunde sollte die im Vertrag vereinbarten Rechte (z. B. Gutschrift, Vertragsstrafe) geltend machen.</p>
      <p><strong>d)</strong> 365 × 24 h = 8.760 h; 8.760 h × 0,001 = 8,76 h ≈ <strong>8 h 46 min</strong> pro Jahr.</p>`
    },
    {
      id: "e-personenbezug",
      topic: "dsgvo-grundsaetze",
      title: "Personenbezogene Daten erkennen, anonymisieren oder pseudonymisieren",
      level: 1,
      exam: ["AP1"],
      task: `
      <p>Die Personalabteilung der <strong>Deichtechnik Husum GmbH</strong> sammelt verschiedene Angaben.</p>
      <p><strong>a)</strong> Prüfe für jede Angabe, ob sie personenbezogen ist und ob sie zu den besonderen Kategorien nach Art. 9 DSGVO gehört:</p>
      <ol>
        <li>die Funktionsadresse <code>info@…</code> der GmbH</li>
        <li>die dienstliche Adresse <code>vorname.nachname@…</code> einer Mitarbeiterin</li>
        <li>die Krankmeldung eines Mitarbeiters</li>
        <li>der Jahresumsatz der GmbH</li>
        <li>die IP-Adresse eines Webshop-Besuchers im Server-Logfile</li>
        <li>das Fingerabdruck-Template für die Zutrittskontrolle</li>
      </ol>
      <p><strong>b)</strong> Die Firma möchte eine Auswertung der Krankheitstage an eine Hochschule weitergeben. Unterscheide Anonymisierung und Pseudonymisierung und empfiehl ein Verfahren.</p>`,
      solution: `
      <p><strong>a)</strong></p>
      <table><thead><tr><th>Angabe</th><th>personenbezogen?</th><th>Art. 9?</th></tr></thead><tbody>
        <tr><td>1. info@-Adresse</td><td>in der Regel nein – sie bezieht sich auf die juristische Person</td><td>–</td></tr>
        <tr><td>2. vorname.nachname@</td><td>ja, die Person ist direkt identifizierbar</td><td>nein</td></tr>
        <tr><td>3. Krankmeldung</td><td>ja</td><td><strong>ja</strong> – Gesundheitsdaten</td></tr>
        <tr><td>4. Jahresumsatz</td><td>nein – Daten einer juristischen Person</td><td>–</td></tr>
        <tr><td>5. IP-Adresse</td><td>ja – mit Zusatzwissen (z. B. des Providers) ist der Nutzer identifizierbar</td><td>nein</td></tr>
        <tr><td>6. Fingerabdruck</td><td>ja</td><td><strong>ja</strong> – biometrische Daten zur eindeutigen Identifizierung</td></tr>
      </tbody></table>
      <p><strong>b)</strong> Bei der <strong>Pseudonymisierung</strong> werden Namen durch Kennzeichen ersetzt (z. B. „MA-017“); die Zuordnungstabelle bleibt getrennt gespeichert. Mit ihr lässt sich der Personenbezug wiederherstellen – die Daten bleiben personenbezogen und die DSGVO gilt weiter. Bei der <strong>Anonymisierung</strong> wird der Personenbezug endgültig entfernt, z. B. durch Zusammenfassen zu Abteilungswerten; dann gilt die DSGVO nicht mehr.</p>
      <p><strong>Empfehlung:</strong> Die Firma sollte die Daten <strong>anonymisiert</strong> weitergeben (z. B. durchschnittliche Krankheitstage pro Abteilung und Monat, nur bei ausreichend großen Gruppen, damit niemand erkennbar ist). Denn es handelt sich um Gesundheitsdaten, und die Hochschule braucht für eine Statistik keine Einzelpersonen.</p>`
    },
    {
      id: "e-betroffenenrechte",
      topic: "dsgvo-grundsaetze",
      title: "Anfrage einer Kundin nach DSGVO bearbeiten",
      level: 2,
      exam: ["AP1"],
      task: `
      <p>Frau Hansen, ehemalige Kundin der <strong>Nordlicht IT GmbH</strong>, schreibt am Dienstag, 10.03.2026:</p>
      <p><em>„Ich möchte wissen, welche Daten Sie über mich gespeichert haben, und verlange, dass Sie alles löschen. Außerdem will ich Ihren Newsletter nicht mehr bekommen.“</em></p>
      <ul>
        <li><strong>a)</strong> Nenne die drei Rechte, die Frau Hansen geltend macht, jeweils mit Artikel der DSGVO.</li>
        <li><strong>b)</strong> Bis wann muss die Firma spätestens antworten?</li>
        <li><strong>c)</strong> Im System liegen Rechnungen aus dem Jahr 2024 mit Frau Hansens Anschrift. Darf die Firma diese sofort löschen? Begründe.</li>
        <li><strong>d)</strong> Beschreibe, wie die Firma verhindert, dass sie die Auskunft an eine falsche Person schickt.</li>
      </ul>`,
      solution: `
      <p><strong>a)</strong> Recht auf <strong>Auskunft</strong> (Art. 15), Recht auf <strong>Löschung</strong> (Art. 17) und – beim Newsletter – <strong>Widerspruch</strong> gegen Direktwerbung (Art. 21) bzw. <strong>Widerruf</strong> der Einwilligung (Art. 7 Abs. 3). Der Newsletter-Versand ist sofort einzustellen.</p>
      <p><strong>b)</strong> Nach Art. 12 unverzüglich, spätestens innerhalb eines Monats nach Eingang, also bis <strong>Freitag, 10.04.2026</strong>. (Fiele das Fristende auf einen Samstag, Sonntag oder Feiertag, verschöbe es sich nach der EU-Fristenverordnung auf den nächsten Werktag.) Nur bei komplexen Anfragen darf die Frist um zwei Monate verlängert werden; das muss der Kundin innerhalb des ersten Monats mit Begründung mitgeteilt werden.</p>
      <p><strong>c)</strong> Nein. Für Rechnungen bestehen <strong>gesetzliche Aufbewahrungspflichten</strong> aus Handels- und Steuerrecht. Die Speicherung ist durch eine rechtliche Verpflichtung gerechtfertigt (Art. 6 Abs. 1 lit. c), und das Löschrecht gilt insoweit nicht (Ausnahme in Art. 17 Abs. 3). Die Firma muss die Daten aber <strong>sperren</strong> (Einschränkung der Verarbeitung), darf sie nur noch für diesen Zweck nutzen und muss sie nach Ablauf der Frist löschen. Alle übrigen Daten, z. B. Marketingprofil und Newsletter-Adresse, sind zu löschen.</p>
      <p><strong>d)</strong> Die Firma prüft die Identität, bevor sie Daten herausgibt: Sie gleicht die Angaben mit den gespeicherten Daten ab (z. B. Kundennummer, Anschrift), antwortet nur an die bekannte E-Mail- oder Postadresse oder fragt über einen bekannten Kanal nach. Es werden nur so viele Nachweise verlangt wie nötig – eine Ausweiskopie nur, wenn Zweifel bestehen.</p>`
    },
    {
      id: "e-datenpanne",
      topic: "dsgvo-pflichten",
      title: "Gestohlenes Notebook mit Patientendaten – Meldepflicht, Bußgeld, TOM",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `
      <p>Die <strong>Westküsten Pflegedienst GmbH</strong> in Brunsbüttel hat 45 Mitarbeitende und 3,8 Mio. € Jahresumsatz. Am <strong>Dienstag, 15.09.2026, um 9:30 Uhr</strong> meldet eine Pflegekraft, dass ihr Dienst-Notebook aus dem Auto gestohlen wurde. Auf dem Notebook liegen Stammdaten und Pflegedokumentationen von 120 Patientinnen und Patienten. Die Festplatte ist <strong>nicht verschlüsselt</strong>; die Anmeldung erfolgt mit einer 4-stelligen PIN.</p>
      <ul>
        <li><strong>a)</strong> Prüfe, ob der Vorfall der Aufsichtsbehörde gemeldet werden muss. Nenne die zuständige Behörde und die späteste Frist (Datum, Uhrzeit). (4 P)</li>
        <li><strong>b)</strong> Beurteile, ob auch die Betroffenen benachrichtigt werden müssen. (3 P)</li>
        <li><strong>c)</strong> Nenne vier Angaben, die die Meldung an die Behörde enthalten muss. (4 P)</li>
        <li><strong>d)</strong> Berechne den maximalen Bußgeldrahmen für einen Verstoß gegen Art. 32 DSGVO (Stufe 1: 10 Mio. € oder 2 % des Vorjahresumsatzes). (3 P)</li>
        <li><strong>e)</strong> Schlage vier Maßnahmen vor, die den Schaden verhindert oder begrenzt hätten, und ordne sie als technisch, organisatorisch oder personell ein. (6 P)</li>
      </ul>`,
      hints: ["Gesundheitsdaten gehören zu den besonderen Kategorien nach Art. 9.", "Eine 4-stellige PIN hat nur 10⁴ Möglichkeiten – und die Festplatte kann man ausbauen."],
      solution: `
      <p><strong>a)</strong> Ja. Es handelt sich um eine Verletzung des Schutzes personenbezogener Daten (Verlust der Vertraulichkeit). Betroffen sind Gesundheitsdaten (Art. 9), die unverschlüsselt vorliegen – ein Risiko für die Betroffenen ist also nicht auszuschließen. Zuständig ist das <strong>Unabhängige Landeszentrum für Datenschutz Schleswig-Holstein (ULD)</strong>. Frist nach Art. 33: unverzüglich, möglichst binnen 72 Stunden nach Bekanntwerden → spätestens <strong>Freitag, 18.09.2026, 9:30 Uhr</strong>.</p>
      <p><strong>b)</strong> Ja, nach Art. 34 müssen die Patientinnen und Patienten unverzüglich benachrichtigt werden, weil voraussichtlich ein <strong>hohes Risiko</strong> besteht: Es geht um sensible Gesundheitsdaten, die Festplatte ist unverschlüsselt und kann in einem anderen Rechner ausgelesen werden. Die PIN schützt davor nicht. Die Ausnahme „Daten waren verschlüsselt“ greift nicht.</p>
      <p><strong>c)</strong> Art der Verletzung; Kategorien und ungefähre Zahl der Betroffenen (ca. 120 Personen) und der Datensätze; Name und Kontaktdaten des Datenschutzbeauftragten; wahrscheinliche Folgen; ergriffene oder geplante Gegenmaßnahmen (z. B. Anzeige bei der Polizei, Passwörter zurücksetzen, Information der Betroffenen).</p>
      <p><strong>d)</strong> 2 % × 3.800.000 € = 76.000 €. Da 10.000.000 € höher ist, gilt der Höchstrahmen von <strong>10 Mio. €</strong> („je nachdem, welcher Betrag höher ist“). Die tatsächliche Strafe wäre deutlich niedriger und richtet sich nach den Umständen.</p>
      <p><strong>e)</strong> Beispiele:</p>
      <ul>
        <li><strong>technisch:</strong> Festplattenverschlüsselung (z. B. BitLocker mit Pre-Boot-Authentifizierung) – dann wären die Daten für den Dieb nutzlos gewesen.</li>
        <li><strong>technisch:</strong> Daten nur zentral auf dem Server bzw. in der Pflegesoftware speichern, nicht lokal; Fernlöschung über ein Mobile-Device-Management.</li>
        <li><strong>organisatorisch:</strong> Richtlinie für mobile Geräte, z. B. „Notebooks nie unbeaufsichtigt im Fahrzeug lassen“, und ein festgelegter Meldeweg bei Verlust.</li>
        <li><strong>personell:</strong> Schulung und Sensibilisierung aller Pflegekräfte zum Umgang mit mobilen Geräten und Patientendaten.</li>
      </ul>
      <p>Hinweis: Arbeiten mindestens 20 der 45 Beschäftigten ständig mit der Pflegesoftware (was bei einem Pflegedienst typisch ist), muss die Firma nach § 38 BDSG ohnehin einen Datenschutzbeauftragten benannt haben – er ist bei der Meldung einzubeziehen.</p>`
    },
    {
      id: "e-avv-dsb",
      topic: "dsgvo-pflichten",
      title: "Auftragsverarbeitung, Datenschutzbeauftragter und zuständige Gesetze",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `
      <p>Die <strong>Nordlicht IT GmbH</strong> in Heide hat 28 Beschäftigte, davon arbeiten 22 täglich am PC mit Kundendaten. Folgende Vorhaben stehen an:</p>
      <ul>
        <li>(1) Die eigene Kundendatenbank soll zu einem Cloud-Hoster umziehen.</li>
        <li>(2) Ein Entsorger soll alte Festplatten und Akten datenschutzgerecht vernichten.</li>
        <li>(3) Nordlicht übernimmt die Fernwartung der PCs einer Arztpraxis.</li>
      </ul>
      <ul>
        <li><strong>a)</strong> Erläutere für (1) bis (3), wer Verantwortlicher und wer Auftragsverarbeiter ist und ob ein Auftragsverarbeitungsvertrag nötig ist.</li>
        <li><strong>b)</strong> Prüfe, ob Nordlicht einen Datenschutzbeauftragten benennen muss.</li>
        <li><strong>c)</strong> Die Geschäftsführung schlägt den IT-Leiter als Datenschutzbeauftragten vor. Beurteile den Vorschlag.</li>
        <li><strong>d)</strong> Nordlicht betreut auch eine Gemeindeverwaltung im Kreis Dithmarschen. Welches Datenschutzgesetz gilt dort ergänzend zur DSGVO, und welche Behörde führt die Aufsicht?</li>
      </ul>`,
      solution: `
      <p><strong>a)</strong></p>
      <table><thead><tr><th>Fall</th><th>Verantwortlicher</th><th>Auftragsverarbeiter</th><th>AVV?</th></tr></thead><tbody>
        <tr><td>(1) Cloud-Hoster</td><td>Nordlicht IT GmbH</td><td>Cloud-Hoster</td><td>ja</td></tr>
        <tr><td>(2) Entsorger</td><td>Nordlicht IT GmbH</td><td>Entsorger (er kommt mit personenbezogenen Daten in Berührung)</td><td>ja</td></tr>
        <tr><td>(3) Fernwartung</td><td>Arztpraxis</td><td>Nordlicht IT GmbH</td><td>ja – Nordlicht muss den AVV mit der Praxis abschließen und nach Weisung arbeiten</td></tr>
      </tbody></table>
      <p>In allen Fällen verarbeitet ein Dienstleister personenbezogene Daten im Auftrag und nach Weisung; die Verantwortung bleibt beim Auftraggeber (Art. 28 DSGVO).</p>
      <p><strong>b)</strong> Ja. Nach § 38 BDSG ist ein DSB zu benennen, wenn in der Regel mindestens <strong>20 Personen ständig</strong> mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt sind. Bei Nordlicht sind es 22 – die Schwelle ist überschritten.</p>
      <p><strong>c)</strong> Der Vorschlag ist ungeeignet. Der IT-Leiter entscheidet selbst über Systeme und Verarbeitungen und müsste sich als DSB selbst kontrollieren – ein <strong>Interessenkonflikt</strong>. Besser ist eine Person ohne Leitungsfunktion in der IT oder ein externer DSB.</p>
      <p><strong>d)</strong> Für öffentliche Stellen des Landes wie Gemeinden gilt ergänzend das <strong>Landesdatenschutzgesetz Schleswig-Holstein (LDSG SH)</strong>. Aufsichtsbehörde ist das <strong>ULD</strong> in Kiel.</p>`
    },
    {
      id: "e-bsi-modellierung",
      topic: "bsi-grundschutz",
      title: "BSI-Standards zuordnen und einen Arbeitsplatz modellieren",
      level: 2,
      exam: ["AP1"],
      task: `
      <p>Die <strong>Nordlicht IT GmbH</strong> will ihre Informationssicherheit nach BSI IT-Grundschutz aufbauen.</p>
      <ul>
        <li><strong>a)</strong> Welcher BSI-Standard hilft jeweils? (1) ein ISMS mit Rollen und Leitlinie aufbauen, (2) die Risikoanalyse für einen Server mit sehr hohem Schutzbedarf, (3) ein Notfallhandbuch erstellen, (4) das Vorgehen von der Strukturanalyse bis zum IT-Grundschutz-Check.</li>
        <li><strong>b)</strong> Die Geschäftsführung möchte „schnell anfangen und erst einmal überall das Wichtigste umsetzen“. Empfiehl eine Absicherungsvariante und nenne je einen Vor- und Nachteil.</li>
        <li><strong>c)</strong> Ordne den Zielobjekten eines Büroarbeitsplatzes passende Bausteine zu: Windows-Client, Webbrowser, Office-Paket, Büroraum, Datensicherung, Sensibilisierung der Mitarbeitenden, Verwaltung von Benutzerkonten und Rechten.</li>
        <li><strong>d)</strong> Erkläre den Unterschied zwischen Basis- und Standard-Anforderungen und beschreibe, was beim IT-Grundschutz-Check passiert.</li>
      </ul>`,
      solution: `
      <p><strong>a)</strong> (1) <strong>200-1</strong> (ISMS), (2) <strong>200-3</strong> (Risikoanalyse), (3) <strong>200-4</strong> (Business Continuity Management), (4) <strong>200-2</strong> (IT-Grundschutz-Methodik).</p>
      <p><strong>b)</strong> Passend ist die <strong>Basis-Absicherung</strong>. Vorteil: schneller Einstieg mit wenig Aufwand, weil nur die grundlegenden Anforderungen in allen Bereichen umgesetzt werden. Nachteil: Das Schutzniveau ist nur grundlegend; für hohen Schutzbedarf reicht es nicht, und eine ISO-27001-Zertifizierung auf Basis von IT-Grundschutz ist so nicht möglich. Später sollte auf die Standard-Absicherung aufgebaut werden.</p>
      <p><strong>c)</strong> Windows-Client → SYS.2.1 Allgemeiner Client (plus der Windows-spezifische Client-Baustein); Webbrowser → APP.1.2 Webbrowser; Office-Paket → APP.1.1 Office-Produkte; Büroraum → INF.7 Büroarbeitsplatz; Datensicherung → CON.3 Datensicherungskonzept; Sensibilisierung → ORP.3 Sensibilisierung und Schulung zur Informationssicherheit; Benutzerkonten und Rechte → ORP.4 Identitäts- und Berechtigungsmanagement.</p>
      <p><strong>d)</strong> <strong>Basis-Anforderungen</strong> müssen vorrangig umgesetzt werden (MUSS) und bilden das Minimum. <strong>Standard-Anforderungen</strong> sollten zusätzlich umgesetzt werden (SOLLTE), um einen normalen Schutzbedarf angemessen abzudecken. Beim <strong>IT-Grundschutz-Check</strong> wird für jede Anforderung der modellierten Bausteine ein <strong>Soll-Ist-Vergleich</strong> durchgeführt: Ist sie „ja“, „teilweise“, „nein“ umgesetzt oder begründet „entbehrlich“? Die Lücken fließen in den Umsetzungsplan.</p>`
    },
    {
      id: "e-leitlinie-notfall",
      topic: "isms-iso27001",
      title: "Sicherheitsleitlinie, PDCA und Notfallvorsorge",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `
      <p>Die <strong>Förde Logistik GmbH</strong> in Kiel baut ein ISMS auf.</p>
      <ul>
        <li><strong>a)</strong> Nenne fünf Inhalte einer Sicherheitsleitlinie und gib an, wer sie verabschiedet.</li>
        <li><strong>b)</strong> Ordne die Tätigkeiten den Phasen des PDCA-Zyklus zu: (1) internes Audit durchführen, (2) Schulung zur Passwortsicherheit halten, (3) Schutzbedarf analysieren, (4) Passwortrichtlinie nach Audit-Ergebnis anpassen.</li>
        <li><strong>c)</strong> Für den Warenwirtschaftsserver gelten RPO = 4 h und RTO = 8 h. Erkläre beide Begriffe. Bewerte die bisherige Praxis, einmal täglich um 22:00 Uhr zu sichern.</li>
        <li><strong>d)</strong> Nenne vier Inhalte eines Notfallhandbuchs und erkläre, warum es auch ausgedruckt vorliegen sollte.</li>
      </ul>`,
      solution: `
      <p><strong>a)</strong> Stellenwert der Informationssicherheit für das Unternehmen; Sicherheitsziele; Geltungsbereich; Organisation und Verantwortlichkeiten (z. B. ISB); Verpflichtung der Leitung zur Unterstützung; Konsequenzen bei Verstößen; regelmäßige Überprüfung. Verabschiedet wird die Leitlinie von der <strong>Geschäftsleitung</strong>, die damit die Gesamtverantwortung übernimmt.</p>
      <p><strong>b)</strong> (1) Check, (2) Do, (3) Plan, (4) Act.</p>
      <p><strong>c)</strong> <strong>RPO</strong> (Recovery Point Objective) ist der maximal tolerierbare Datenverlust als Zeitraum: Es dürfen höchstens die Daten der letzten 4 Stunden verloren gehen. <strong>RTO</strong> (Recovery Time Objective) ist die maximal tolerierbare Zeit bis zur Wiederherstellung: Nach spätestens 8 Stunden muss der Server wieder laufen. Die tägliche Sicherung reicht <strong>nicht</strong>: Fällt der Server z. B. um 21:00 Uhr aus, fehlen die Daten von 23 Stunden (seit 22:00 Uhr am Vortag) – fast sechsmal so viel wie erlaubt. Es muss mindestens alle 4 Stunden gesichert werden, z. B. mit inkrementellen Sicherungen oder Snapshots um 2, 6, 10, 14, 18 und 22 Uhr.</p>
      <p><strong>d)</strong> Sofortmaßnahmen und Alarmierungsplan; Kontaktlisten (intern, Dienstleister, Behörden, Versicherung); Zuständigkeiten und Vertretungen; Wiederanlaufpläne mit Prioritäten; Ablageort der Backups und Notfallzugänge. Im Notfall sind IT-Systeme oft nicht verfügbar (z. B. nach Ransomware oder Stromausfall) – ein nur digital gespeichertes Notfallhandbuch wäre dann nicht erreichbar.</p>`
    },
    {
      id: "e-schutzbedarf-server",
      topic: "schutzbedarf",
      title: "Schutzbedarf eines Virtualisierungshosts, Webshop-Clusters und Serverraums",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `
      <p>Die <strong>Büsumer Fischhandel GmbH</strong> betreibt auf dem Virtualisierungshost <strong>HV-01</strong> fünf virtuelle Server. Der Schutzbedarf der Anwendungen wurde bereits ermittelt:</p>
      <table><thead><tr><th>VM / Anwendung</th><th>Vertraulichkeit</th><th>Integrität</th><th>Verfügbarkeit</th></tr></thead><tbody>
        <tr><td>Warenwirtschaft (ERP)</td><td>hoch</td><td>hoch</td><td>normal</td></tr>
        <tr><td>E-Mail</td><td>hoch</td><td>normal</td><td>normal</td></tr>
        <tr><td>Intranet</td><td>normal</td><td>normal</td><td>normal</td></tr>
        <tr><td>Druckserver</td><td>normal</td><td>normal</td><td>normal</td></tr>
        <tr><td>Zeiterfassung</td><td>normal</td><td>hoch</td><td>normal</td></tr>
      </tbody></table>
      <p>Der <strong>Webshop</strong> (Vertraulichkeit hoch, Integrität hoch, Verfügbarkeit hoch) läuft auf zwei gleichwertigen Clusterknoten <strong>WEB-1</strong> und <strong>WEB-2</strong>; jeder Knoten kann allein die volle Last tragen. Alle drei Server stehen im selben Serverraum.</p>
      <ul>
        <li><strong>a)</strong> Ermittle den Schutzbedarf von HV-01 nach dem Maximumprinzip. (3 P)</li>
        <li><strong>b)</strong> Die Geschäftsführung meint: „Alle VMs haben nur normale Verfügbarkeit, also reicht für HV-01 ‚normal‘.“ Nimm Stellung. (4 P)</li>
        <li><strong>c)</strong> Bestimme den Schutzbedarf je Clusterknoten WEB-1/WEB-2 und begründe. (4 P)</li>
        <li><strong>d)</strong> Bestimme den Schutzbedarf des Serverraums. Gilt der Verteilungseffekt aus c) auch hier? (4 P)</li>
        <li><strong>e)</strong> Nenne zwei infrastrukturelle Maßnahmen, die sich aus d) ergeben. (2 P)</li>
      </ul>`,
      hints: ["Das Maximumprinzip gilt je Grundwert einzeln.", "Kumulation: Was passiert, wenn HV-01 ausfällt?"],
      solution: `
      <p><strong>a)</strong> Je Grundwert das Maximum der VMs: Vertraulichkeit <strong>hoch</strong> (ERP, E-Mail), Integrität <strong>hoch</strong> (ERP, Zeiterfassung), Verfügbarkeit <strong>normal</strong> (alle normal).</p>
      <p><strong>b)</strong> Die Aussage greift zu kurz. Nach dem Maximumprinzip wäre die Verfügbarkeit zwar „normal“, aber es wirkt der <strong>Kumulationseffekt</strong>: Fällt HV-01 aus, fallen alle fünf Dienste gleichzeitig aus. Warenwirtschaft, E-Mail, Druck und Zeiterfassung stehen still, die Schäden addieren sich, und der Betrieb ist insgesamt kaum arbeitsfähig. Die Verfügbarkeit von HV-01 ist deshalb auf <strong>hoch</strong> anzuheben. Ergebnis HV-01: V hoch, I hoch, A hoch.</p>
      <p><strong>c)</strong> Vertraulichkeit <strong>hoch</strong> und Integrität <strong>hoch</strong>, weil auf jedem Knoten dieselben Kundendaten und Bestellungen verarbeitet werden. Verfügbarkeit <strong>normal</strong> wegen des <strong>Verteilungseffekts</strong>: Fällt ein Knoten aus, übernimmt der andere die volle Last, der Webshop bleibt erreichbar. Voraussetzung ist ein funktionierendes, getestetes Failover.</p>
      <p><strong>d)</strong> Maximumprinzip über HV-01, WEB-1 und WEB-2: Vertraulichkeit <strong>hoch</strong>, Integrität <strong>hoch</strong>, Verfügbarkeit <strong>hoch</strong> (HV-01 hat nach b) hohe Verfügbarkeit). Der Verteilungseffekt gilt für den Raum <strong>nicht</strong>: Beide Knoten stehen im selben Raum. Ein Brand, Wasserschaden oder Stromausfall im Serverraum legt beide gleichzeitig lahm, der Webshop wäre trotz Cluster offline. Für den Raum wirkt also eher ein Kumulationseffekt.</p>
      <p><strong>e)</strong> Zum Beispiel: USV und ggf. Netzersatzanlage; Brandmelde- oder Löschanlage und Klimatisierung; Zutrittskontrolle mit Protokollierung; langfristig ein zweiter Brandabschnitt oder Standort für WEB-2.</p>`
    },
    {
      id: "e-schutzbedarf-praxis",
      topic: "schutzbedarf-praxis",
      title: "Schutzbedarfsanalyse für eine Zahnarztpraxis",
      level: 3,
      exam: ["AP1"],
      task: `
      <p>Die <strong>Zahnarztpraxis Deichblick</strong> in Heide beauftragt dich mit einer Schutzbedarfsanalyse. Die Praxis nutzt:</p>
      <ul>
        <li><strong>Praxisverwaltungssoftware</strong> (Patientenakten, Befunde, Abrechnung) – ohne sie ist keine geordnete Behandlung möglich; ein Ausfall über einen halben Tag würde den Praxisbetrieb stark stören.</li>
        <li><strong>Röntgensoftware</strong> – digitale Röntgenbilder, die Patienten zugeordnet werden.</li>
        <li><strong>Online-Terminbuchung</strong> (Name, Telefon, Terminwunsch); Termine können notfalls auch telefonisch vergeben werden.</li>
      </ul>
      <p>IT-Systeme: ein Empfangs-PC (Praxisverwaltung, Terminbuchung), drei Behandlungs-PCs (Praxisverwaltung, Röntgen) und ein Server (alle Anwendungen, Datenbank).</p>
      <ul>
        <li><strong>a)</strong> Bestimme den Schutzbedarf (normal, hoch, sehr hoch) der drei Anwendungen je Grundwert und begründe jeweils mit einem Schadensszenario. (9 P)</li>
        <li><strong>b)</strong> Leite den Schutzbedarf für den Empfangs-PC, die Behandlungs-PCs und den Server ab. (5 P)</li>
        <li><strong>c)</strong> Der Bildschirm des Empfangs-PCs ist vom Tresen aus für Patienten lesbar. Nenne das betroffene Schutzziel und zwei Maßnahmen. (3 P)</li>
        <li><strong>d)</strong> Nenne für den Server je eine technische, organisatorische, personelle und infrastrukturelle Maßnahme. (4 P)</li>
      </ul>`,
      solution: `
      <p><strong>a)</strong> Beispiel-Lösung (abweichende Einstufungen sind mit schlüssiger Begründung vertretbar):</p>
      <table><thead><tr><th>Anwendung</th><th>V</th><th>I</th><th>A</th><th>Begründung</th></tr></thead><tbody>
        <tr><td>Praxisverwaltung</td><td>hoch bis sehr hoch</td><td>hoch</td><td>hoch</td><td>V: Gesundheitsdaten (Art. 9) – Offenlegung verletzt das informationelle Selbstbestimmungsrecht, Verstoß gegen DSGVO und ärztliche Schweigepflicht, schwerer Vertrauensverlust. I: falsche Befunde oder Abrechnungen können zu Fehlbehandlungen und finanziellen Schäden führen. A: Schon ein Ausfall von mehr als einem halben Tag stört den Praxisbetrieb stark – die tolerierbare Ausfallzeit liegt also im Bereich 1–24 h → Beeinträchtigung der Aufgabenerfüllung.</td></tr>
        <tr><td>Röntgensoftware</td><td>hoch</td><td>sehr hoch</td><td>hoch</td><td>V: Gesundheitsdaten. I: Ein falsch zugeordnetes oder verändertes Röntgenbild kann zu einer falschen Behandlung führen → Gefahr für die persönliche Unversehrtheit. A: Behandlungen, die Röntgenbilder brauchen, müssten verschoben werden.</td></tr>
        <tr><td>Online-Terminbuchung</td><td>hoch</td><td>normal</td><td>normal</td><td>V: Schon die Tatsache eines Zahnarztbesuchs mit Namen und Telefonnummer ist sensibel. I: falsche Termine sind ärgerlich, aber schnell korrigierbar. A: Ausweichen aufs Telefon möglich.</td></tr>
      </tbody></table>
      <p><strong>b)</strong> Nach dem Maximumprinzip je Grundwert:</p>
      <ul>
        <li>Empfangs-PC (Praxisverwaltung, Terminbuchung): V hoch (bzw. sehr hoch), I hoch, A hoch</li>
        <li>Behandlungs-PCs (Praxisverwaltung, Röntgen): V hoch (bzw. sehr hoch), I <strong>sehr hoch</strong>, A hoch</li>
        <li>Server (alle Anwendungen): V hoch (bzw. sehr hoch), I sehr hoch, A hoch – bei der Verfügbarkeit zusätzlich Kumulationseffekt, weil bei seinem Ausfall alle Arbeitsplätze stillstehen; eine Einstufung „sehr hoch“ ist vertretbar.</li>
      </ul>
      <p><strong>c)</strong> Betroffen ist die <strong>Vertraulichkeit</strong>. Maßnahmen: Bildschirm drehen oder Blickschutzfilter anbringen; automatische Bildschirmsperre nach kurzer Zeit bzw. Sperren mit <kbd>Win</kbd> + <kbd>L</kbd> beim Verlassen; Diskretionszone am Tresen.</p>
      <p><strong>d)</strong> Technisch: tägliches, verschlüsseltes Backup nach der 3-2-1-Regel und USV. Organisatorisch: Berechtigungskonzept (Rezeption sieht keine Befunde) und Wartungsvertrag mit festen Reaktionszeiten. Personell: Datenschutz- und Sicherheitsschulung aller Mitarbeitenden, Verpflichtung auf Verschwiegenheit. Infrastrukturell: Server in einem abschließbaren, belüfteten Raum oder Serverschrank, nicht im Wartezimmer.</p>`
    },
    {
      id: "e-strukturanalyse",
      topic: "schutzbedarf-praxis",
      title: "Strukturanalyse: Gruppen bilden und Schadensszenarien einstufen",
      level: 2,
      exam: ["AP1"],
      task: `
      <p>Die <strong>Nordlicht IT GmbH</strong> hat 18 Arbeitsplätze: 12 identisch konfigurierte Windows-Clients im Vertrieb, 4 Entwickler-Notebooks mit Linux und lokalen Admin-Rechten, 1 Notebook der Geschäftsführerin (mit Vorstandsunterlagen) und 1 Client an der öffentlich zugänglichen Rezeption.</p>
      <ul>
        <li><strong>a)</strong> Nenne die fünf Arten von Zielobjekten, die in der Strukturanalyse erfasst werden, in sinnvoller Reihenfolge.</li>
        <li><strong>b)</strong> Bilde sinnvolle Gruppen und begründe, welche Geräte nicht zusammengefasst werden dürfen.</li>
        <li><strong>c)</strong> Die Geschäftsführung legt fest: Schäden unter 20.000 € sind tolerierbar, ab 200.000 € existenzbedrohend. Ordne die Schadensszenarien einer Schutzbedarfskategorie zu: (1) Ausfall eines Vertriebs-Clients, Schaden ca. 500 €; (2) Veröffentlichung der Angebotskalkulationen für Großkunden, Schaden ca. 80.000 €; (3) Verlust aller Kundendaten ohne Backup, Schaden ca. 350.000 €; (4) Webseite drei Tage offline, Schaden ca. 12.000 €.</li>
        <li><strong>d)</strong> Begründe, warum der Schutzbedarf je Grundwert getrennt bestimmt wird.</li>
      </ul>`,
      solution: `
      <p><strong>a)</strong> Geschäftsprozesse/Informationen → Anwendungen → IT-Systeme → Räume/Gebäude → Kommunikationsverbindungen.</p>
      <p><strong>b)</strong> Gruppe 1: die <strong>12 Vertriebs-Clients</strong> – gleicher Typ, gleiche Konfiguration, gleiche Anwendungen, gleiches Umfeld, gleicher Schutzbedarf. Gruppe 2: die <strong>4 Entwickler-Notebooks</strong> – untereinander gleich, aber anderes Betriebssystem, Admin-Rechte und mobiler Einsatz, daher nicht mit Gruppe 1 zusammen. <strong>Einzeln</strong> betrachtet werden: das Notebook der Geschäftsführerin (deutlich höherer Schutzbedarf bei der Vertraulichkeit) und der Rezeptions-Client (andere Einsatzumgebung, Besucher haben Sichtkontakt und evtl. physischen Zugang).</p>
      <p><strong>c)</strong> Grenzen: normal &lt; 20.000 €, hoch 20.000 € bis unter 200.000 €, sehr hoch ab 200.000 €.<br>(1) 500 € → <strong>normal</strong> (Verfügbarkeit); (2) 80.000 € → <strong>hoch</strong> (Vertraulichkeit); (3) 350.000 € → <strong>sehr hoch</strong> (Verfügbarkeit/Integrität der Daten, existenzbedrohend); (4) 12.000 € → <strong>normal</strong> (Verfügbarkeit).</p>
      <p><strong>d)</strong> Ein Objekt kann bei den Grundwerten sehr unterschiedlich kritisch sein: Die öffentliche Webseite hat z. B. keinen Bedarf an Vertraulichkeit, aber Bedarf an Integrität (keine Manipulation) und Verfügbarkeit. Nur wenn jeder Grundwert einzeln bewertet wird, lassen sich passende und wirtschaftliche Maßnahmen auswählen – etwa Verschlüsselung für Vertraulichkeit, Redundanz für Verfügbarkeit.</p>`
    },
    {
      id: "e-risikomatrix",
      topic: "risikoanalyse",
      title: "Risiken bewerten, priorisieren und behandeln",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `
      <p>Die <strong>Förde Logistik GmbH</strong> in Kiel nutzt die Skalen EW (Eintrittswahrscheinlichkeit) und S (Schadenshöhe) von 1 bis 4 und die Risikoklassen 1–3 gering, 4–6 mittel, 8–9 hoch, 12–16 sehr hoch.</p>
      <table><thead><tr><th>Nr.</th><th>Gefährdung</th><th>EW</th><th>S</th></tr></thead><tbody>
        <tr><td>R1</td><td>Phishing führt zur Übernahme eines Mailkontos</td><td>3 (häufig)</td><td>3 (beträchtlich)</td></tr>
        <tr><td>R2</td><td>Ransomware verschlüsselt den Dateiserver</td><td>2 (mittel)</td><td>4 (existenzbedrohend)</td></tr>
        <tr><td>R3</td><td>Wasserschaden im Serverraum im Keller (hochwassergefährdetes Gebiet)</td><td>1 (selten)</td><td>4 (existenzbedrohend)</td></tr>
        <tr><td>R4</td><td>Tastatur eines Arbeitsplatzes fällt aus</td><td>3 (häufig)</td><td>1 (vernachlässigbar)</td></tr>
        <tr><td>R5</td><td>Diebstahl eines verschlüsselten Außendienst-Notebooks</td><td>3 (häufig)</td><td>2 (begrenzt)</td></tr>
      </tbody></table>
      <ul>
        <li><strong>a)</strong> Berechne für alle Risiken den Risikowert und bestimme die Risikoklasse. (5 P)</li>
        <li><strong>b)</strong> Lege eine Reihenfolge der Bearbeitung fest. (2 P)</li>
        <li><strong>c)</strong> Wähle für jedes Risiko eine Behandlungsstrategie und begründe sie mit einer konkreten Maßnahme. (5 P)</li>
        <li><strong>d)</strong> Für R2 wird mit 0,4 Vorfällen pro Jahr und 150.000 € Schaden je Vorfall gerechnet. Ein Maßnahmenpaket für 15.000 € pro Jahr senkt die Häufigkeit auf 0,1 und den Schaden auf 50.000 €. Berechne den jährlichen Nettonutzen. (5 P)</li>
        <li><strong>e)</strong> Wer muss das verbleibende Restrisiko akzeptieren? (1 P)</li>
      </ul>`,
      solution: `
      <p><strong>a)</strong></p>
      <table><thead><tr><th>Nr.</th><th>Rechnung</th><th>Risikowert</th><th>Klasse</th></tr></thead><tbody>
        <tr><td>R1</td><td>3 × 3</td><td>9</td><td>hoch</td></tr>
        <tr><td>R2</td><td>2 × 4</td><td>8</td><td>hoch</td></tr>
        <tr><td>R3</td><td>1 × 4</td><td>4</td><td>mittel</td></tr>
        <tr><td>R4</td><td>3 × 1</td><td>3</td><td>gering</td></tr>
        <tr><td>R5</td><td>3 × 2</td><td>6</td><td>mittel</td></tr>
      </tbody></table>
      <p><strong>b)</strong> R1 (9) → R2 (8) → R5 (6) → R3 (4) → R4 (3). Bei gleichem oder ähnlichem Wert ist es sinnvoll, Risiken mit existenzbedrohendem Schaden (R2, R3) vorzuziehen, weil ein einziger Vorfall die Firma gefährden kann.</p>
      <p><strong>c)</strong></p>
      <ul>
        <li>R1 <strong>reduzieren</strong>: MFA für alle Konten, Awareness-Schulungen, Phishing-Meldebutton.</li>
        <li>R2 <strong>reduzieren</strong> (Offline-Backup, EDR, Patchmanagement, keine Admin-Rechte) und zusätzlich <strong>übertragen</strong> (Cyberversicherung für die finanziellen Folgen).</li>
        <li>R3 <strong>vermeiden</strong>: Serverraum in ein oberes Stockwerk verlegen – oder zumindest reduzieren durch Wassermelder und erhöhte Aufstellung.</li>
        <li>R4 <strong>akzeptieren</strong>: Schaden vernachlässigbar, Ersatztastaturen liegen bereit.</li>
        <li>R5 <strong>reduzieren/akzeptieren</strong>: Die Verschlüsselung wirkt bereits; zusätzlich Fernsperrung per MDM, Restrisiko (Gerätewert) wird akzeptiert oder versichert.</li>
      </ul>
      <p><strong>d)</strong> Schadenserwartung vorher = 0,4 × 150.000 € = 60.000 €/Jahr<br>Schadenserwartung nachher = 0,1 × 50.000 € = 5.000 €/Jahr<br>Einsparung = 60.000 € − 5.000 € = 55.000 €/Jahr<br>Nettonutzen = 55.000 € − 15.000 € = <strong>40.000 €/Jahr</strong> → Die Maßnahme ist wirtschaftlich sinnvoll.</p>
      <p><strong>e)</strong> Die <strong>Geschäftsleitung</strong> – bewusst und schriftlich dokumentiert.</p>`
    },
    {
      id: "e-malware",
      topic: "malware",
      title: "Malware-Arten erkennen",
      level: 1,
      exam: ["AP1"],
      task: `
      <p>Der Support der <strong>Nordlicht IT GmbH</strong> hat bei Kunden folgende Beobachtungen gemacht.</p>
      <p><strong>a)</strong> Ordne jeder Beschreibung die passende Malware-Art zu:</p>
      <ol>
        <li>Ein Programm hängt sich an eine Excel-Datei; wer sie öffnet, infiziert weitere Dokumente.</li>
        <li>Ein Schadprogramm verbreitet sich ohne Zutun über eine Lücke in einem Netzwerkdienst von Rechner zu Rechner.</li>
        <li>Ein „kostenloser PDF-Konverter“ öffnet heimlich einen Fernzugang für Angreifer.</li>
        <li>Alle Tastatureingaben werden aufgezeichnet und an einen fremden Server geschickt.</li>
        <li>Prozesse und Dateien werden auf Kernel-Ebene vor dem Virenscanner versteckt.</li>
        <li>Der Rechner nimmt Befehle eines fremden Steuerservers entgegen und verschickt nachts Spam.</li>
        <li>Alle Dateien tragen plötzlich die Endung <code>.locked</code>, auf dem Desktop liegt eine Zahlungsaufforderung.</li>
      </ol>
      <p><strong>b)</strong> Erkläre, warum ein rein signaturbasierter Virenschutz nicht ausreicht.</p>
      <p><strong>c)</strong> Nenne zwei typische Infektionswege und je eine Gegenmaßnahme.</p>`,
      solution: `
      <p><strong>a)</strong> 1. Virus (Makrovirus) · 2. Wurm · 3. Trojaner mit Backdoor (Remote Access Trojaner) · 4. Keylogger (eine Form von Spyware) · 5. Rootkit · 6. Bot, Teil eines Botnetzes · 7. Ransomware</p>
      <p><strong>b)</strong> Signaturen erkennen nur <strong>bereits bekannte</strong> Schadprogramme. Neue oder leicht veränderte Varianten entstehen täglich in großer Zahl und haben noch keine Signatur. Deshalb braucht man zusätzlich <strong>heuristische</strong> Verfahren (verdächtige Code-Merkmale) und <strong>verhaltensbasierte</strong> Erkennung (z. B. EDR, das massenhaftes Verschlüsseln stoppt).</p>
      <p><strong>c)</strong> Zum Beispiel: E-Mail-Anhang mit Makros → Makros aus dem Internet blockieren, Mailfilter mit Sandbox, Schulung. Ungepatchte Schwachstelle → Patchmanagement, Updates zeitnah einspielen. USB-Stick → Autostart deaktivieren, nur geprüfte Datenträger verwenden. Drive-by-Download → Browser aktuell halten, Werbe- und Skriptblocker, Surfen ohne Admin-Rechte.</p>`
    },
    {
      id: "e-phishing",
      topic: "angriffe",
      title: "Phishing-Mail analysieren und richtig reagieren",
      level: 2,
      exam: ["AP1"],
      task: `
      <p>Eine Mitarbeiterin der <strong>Nordlicht IT GmbH</strong> (Firmendomain <code>nordlicht-it.example</code>) erhält diese Nachricht:</p>
      <pre>Von:     IT-Service &lt;it-service@nordlicht-it-support.example&gt;
Betreff: DRINGEND: Ihr Postfach wird heute gesperrt!

Sehr geehrter Nutzer,
Ihr Postfach hat das Speicherlimit überschritten. Bestätigen Sie
innerhalb von 2 Stunden Ihre Zugangsdaten, sonst werden alle
E-Mails unwiderruflich gelöscht:

https://nordlicht-it.example.konto-pruefung.example/login

Mit freundlichen Grüßen
Ihr IT-Team</pre>
      <ul>
        <li><strong>a)</strong> Nenne fünf Merkmale, an denen du die Phishing-Mail erkennst.</li>
        <li><strong>b)</strong> Erkläre, zu welcher Domain der Link tatsächlich führt.</li>
        <li><strong>c)</strong> Beschreibe das richtige Verhalten der Mitarbeiterin.</li>
        <li><strong>d)</strong> Ein Kollege hat seine Zugangsdaten bereits eingegeben. Nenne vier Sofortmaßnahmen.</li>
        <li><strong>e)</strong> Erläutere, wie MFA den Schaden begrenzt hätte, und nenne eine besonders phishing-resistente Variante.</li>
      </ul>`,
      solution: `
      <p><strong>a)</strong> Absenderdomain <code>nordlicht-it-support.example</code> ist nicht die Firmendomain; unpersönliche Anrede („Sehr geehrter Nutzer“); Zeitdruck und Drohung („innerhalb von 2 Stunden“, „unwiderruflich gelöscht“); Aufforderung, Zugangsdaten einzugeben – das verlangt keine seriöse IT per Mail; Link führt auf eine fremde Domain; unüblicher Ablauf (Speicherlimit wird normalerweise anders gelöst).</p>
      <p><strong>b)</strong> Maßgeblich ist der Hostname zwischen <code>https://</code> und dem nächsten Schrägstrich: <code>nordlicht-it.example.konto-pruefung.example</code>. Ihn liest man <strong>von rechts</strong>: Top-Level-Domain und davor der registrierte Name ergeben die Domain <code>konto-pruefung.example</code> – sie gehört dem Angreifer. „nordlicht-it.example“ ist hier nur eine <strong>Subdomain</strong>, die Vertrauen erwecken soll.</p>
      <p><strong>c)</strong> Nicht auf den Link klicken und keine Daten eingeben; die Mail nicht weiterleiten (außer an die Meldeadresse); über den offiziellen Weg an die IT melden (Meldebutton, Telefon); die Mail danach löschen. Im Zweifel die IT über eine bekannte Telefonnummer anrufen.</p>
      <p><strong>d)</strong> Passwort sofort über den offiziellen Weg ändern (bzw. von der IT zurücksetzen lassen); alle aktiven Sitzungen abmelden; die IT bzw. den Sicherheitsvorfall melden; das Postfach auf neue Weiterleitungs- oder Löschregeln prüfen; das Passwort auch bei allen anderen Diensten ändern, bei denen es verwendet wurde; Anmeldeprotokolle auf fremde Zugriffe prüfen.</p>
      <p><strong>e)</strong> Mit MFA reicht das erbeutete Passwort allein nicht: Der Angreifer bräuchte zusätzlich den zweiten Faktor, z. B. das Smartphone mit der Authenticator-App. Besonders phishing-resistent sind <strong>FIDO2-Sicherheitsschlüssel bzw. Passkeys</strong>, weil sie kryptografisch an die echte Webadresse gebunden sind und auf einer gefälschten Seite gar nicht funktionieren.</p>`
    },
    {
      id: "e-ransomware-fall",
      topic: "angriffe",
      title: "Ransomware-Angriff auf ein Steuerbüro – Fallanalyse",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `
      <p>Das <strong>Steuerbüro Kramer &amp; Partner</strong> in Husum (12 Mitarbeitende) ist Kunde der Nordlicht IT GmbH. Am Montagmorgen tragen alle Dateien auf dem Fileserver die Endung <code>.crypt</code>. Ein Erpresserschreiben fordert Kryptowährung im Wert von 40.000 € und droht, Mandantendaten zu veröffentlichen. Die Analyse zeigt:</p>
      <ul>
        <li>Am Freitag hat eine Mitarbeiterin einen Anhang <code>Rechnung.zip</code> geöffnet. Sie arbeitet dauerhaft mit Administratorrechten.</li>
        <li>Auf dem Fileserver wurden seit acht Monaten keine Updates installiert.</li>
        <li>Die Datensicherung ist eine nächtliche Synchronisation auf ein NAS im selben Netz – auch das NAS ist verschlüsselt.</li>
        <li>Es gibt keinen Notfallplan.</li>
      </ul>
      <ul>
        <li><strong>a)</strong> Nenne vier Sofortmaßnahmen in sinnvoller Reihenfolge. (4 P)</li>
        <li><strong>b)</strong> Beschreibe die datenschutzrechtlichen Pflichten des Steuerbüros. (4 P)</li>
        <li><strong>c)</strong> Der Inhaber möchte das Lösegeld zahlen. Nimm Stellung. (3 P)</li>
        <li><strong>d)</strong> Bewerte das bisherige Backup-Konzept und schlage ein besseres vor. (5 P)</li>
        <li><strong>e)</strong> Nenne vier Schwachstellen, die den Angriff ermöglicht haben, und je eine Gegenmaßnahme mit ihrer Art (technisch, organisatorisch, personell). (8 P)</li>
      </ul>`,
      solution: `
      <p><strong>a)</strong> 1. Betroffene Systeme sofort <strong>vom Netz trennen</strong> (LAN-Kabel, WLAN), um die Ausbreitung zu stoppen – nicht einfach neu starten. 2. Den <strong>IT-Dienstleister und die Geschäftsleitung</strong> alarmieren. 3. <strong>Beweise sichern</strong>: Erpresserschreiben fotografieren, Zeitpunkte und Beobachtungen notieren, nichts löschen. 4. Ausmaß feststellen (welche Systeme und Daten betroffen sind) und <strong>Anzeige</strong> bei der Polizei erstatten (Zentrale Ansprechstelle Cybercrime); Wiederherstellung erst aus sauberen Quellen planen.</p>
      <p><strong>b)</strong> Mandantendaten wurden verschlüsselt und vermutlich kopiert (Drohung mit Veröffentlichung). Das ist eine Verletzung des Schutzes personenbezogener Daten. Das Büro muss sie <strong>binnen 72 Stunden</strong> nach Bekanntwerden dem <strong>ULD</strong> melden (Art. 33). Weil Steuer- und Finanzdaten betroffen sind und eine Veröffentlichung droht, besteht voraussichtlich ein <strong>hohes Risiko</strong> – die Mandanten sind unverzüglich zu benachrichtigen (Art. 34). Der Vorfall ist intern zu dokumentieren.</p>
      <p><strong>c)</strong> Von einer Zahlung ist abzuraten, so empfiehlt es auch das BSI: Es gibt keine Garantie, dass die Täter einen funktionierenden Schlüssel liefern oder die kopierten Daten löschen. Die Zahlung finanziert weitere Angriffe und macht das Büro zum lohnenden Ziel für erneute Erpressung. Die Meldepflichten bleiben ohnehin bestehen.</p>
      <p><strong>d)</strong> Das Konzept ist <strong>unzureichend</strong>: Eine Synchronisation ist kein Backup, weil verschlüsselte oder gelöschte Dateien sofort mitkopiert werden. Das NAS liegt im selben Netz und ist für die Schadsoftware erreichbar; es gibt keine Versionen, keine Kopie außer Haus und keine Offline-Kopie. Besser nach der <strong>3-2-1-Regel</strong>: 3 Kopien (Original + 2 Backups), auf 2 verschiedenen Medien (z. B. NAS mit versionierten Sicherungen und Snapshots sowie wechselnde USB-Festplatten oder Band), davon 1 außer Haus bzw. in einem unveränderbaren Cloud-Speicher; mindestens eine Kopie offline. Die Sicherung läuft mit eigenem Konto, das normale Benutzer nicht kennen, und die Wiederherstellung wird regelmäßig getestet.</p>
      <p><strong>e)</strong></p>
      <table><thead><tr><th>Schwachstelle</th><th>Gegenmaßnahme</th><th>Art</th></tr></thead><tbody>
        <tr><td>Anhang ungeprüft geöffnet</td><td>Awareness-Schulung und Phishing-Übungen</td><td>personell</td></tr>
        <tr><td>dauerhafte Admin-Rechte</td><td>Arbeiten als Standardbenutzer, separates Admin-Konto nur für Verwaltungsaufgaben (Least Privilege)</td><td>technisch/organisatorisch</td></tr>
        <tr><td>fehlende Updates</td><td>Patchmanagement mit festen Update-Zyklen</td><td>organisatorisch/technisch</td></tr>
        <tr><td>Backup nur als Synchronisation im selben Netz</td><td>versioniertes Offline-Backup nach 3-2-1</td><td>technisch</td></tr>
        <tr><td>kein Notfallplan</td><td>Notfallhandbuch mit Alarmierungsplan und Wiederanlaufplan, regelmäßige Übung</td><td>organisatorisch</td></tr>
        <tr><td>ZIP-Anhänge werden zugestellt</td><td>Mailfilter mit Sandbox-Analyse, riskante Dateitypen blockieren</td><td>technisch</td></tr>
      </tbody></table>`
    },
    {
      id: "e-tom-zuordnen",
      topic: "massnahmen",
      title: "Maßnahmen nach Art und Kontrollziel einordnen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `
      <p><strong>a)</strong> Die <strong>Nordlicht IT GmbH</strong> hat folgende Maßnahmen umgesetzt. Ordne jede Maßnahme (1) einer Art zu – technisch, organisatorisch, personell oder infrastrukturell – und (2), wo passend, einem Kontrollziel: Zutritts-, Zugangs-, Zugriffs-, Weitergabe-, Eingabe- oder Verfügbarkeitskontrolle.</p>
      <ol>
        <li>Chipkartenleser an der Serverraumtür</li>
        <li>automatische Bildschirmsperre nach 5 Minuten, Entsperren nur mit Passwort</li>
        <li>Ordnerrechte: Der Vertrieb darf nur die eigenen Kundenordner lesen</li>
        <li>Besucher werden ins Besucherbuch eingetragen und ständig begleitet</li>
        <li>jährliche Awareness-Schulung für alle Beschäftigten</li>
        <li>VPN für alle Homeoffice-Verbindungen</li>
        <li>Protokollierung, wer Kundendatensätze anlegt oder ändert</li>
        <li>USV für den Serverschrank</li>
        <li>Passwortrichtlinie mit Mindestlänge</li>
        <li>Benutzerkonten werden am letzten Arbeitstag gesperrt (Offboarding)</li>
      </ol>
      <p><strong>b)</strong> Erkläre den Unterschied zwischen Zugangs- und Zugriffskontrolle an einem eigenen Beispiel.</p>`,
      solution: `
      <p><strong>a)</strong></p>
      <table><thead><tr><th>Nr.</th><th>Art</th><th>Kontrollziel</th></tr></thead><tbody>
        <tr><td>1</td><td>infrastrukturell (baulich-technisch)</td><td>Zutrittskontrolle</td></tr>
        <tr><td>2</td><td>technisch</td><td>Zugangskontrolle</td></tr>
        <tr><td>3</td><td>technisch (auf Basis eines organisatorischen Rechtekonzepts)</td><td>Zugriffskontrolle</td></tr>
        <tr><td>4</td><td>organisatorisch</td><td>Zutrittskontrolle</td></tr>
        <tr><td>5</td><td>personell</td><td>– (stärkt alle Kontrollen)</td></tr>
        <tr><td>6</td><td>technisch</td><td>Weitergabekontrolle</td></tr>
        <tr><td>7</td><td>technisch</td><td>Eingabekontrolle</td></tr>
        <tr><td>8</td><td>infrastrukturell</td><td>Verfügbarkeitskontrolle</td></tr>
        <tr><td>9</td><td>organisatorisch</td><td>Zugangskontrolle</td></tr>
        <tr><td>10</td><td>organisatorisch (personeller Prozess)</td><td>Zugangskontrolle</td></tr>
      </tbody></table>
      <p><strong>b)</strong> Die <strong>Zugangskontrolle</strong> entscheidet, <em>ob</em> jemand ein IT-System überhaupt nutzen darf – z. B. Anmeldung am Windows-Client mit Passwort und Smartcard. Die <strong>Zugriffskontrolle</strong> regelt, <em>worauf</em> ein angemeldeter Benutzer zugreifen darf – z. B. darf eine Vertriebsmitarbeiterin nach dem Login die Kundenordner lesen, aber nicht den Ordner der Lohnbuchhaltung öffnen.</p>`
    },
    {
      id: "e-backup",
      topic: "massnahmen",
      title: "Inkrementelle und differenzielle Sicherung vergleichen, 3-2-1 prüfen",
      level: 2,
      exam: ["AP1"],
      task: `
      <p>Die <strong>Nordlicht IT GmbH</strong> sichert ihren Fileserver mit 500 GiB Daten. Am Montagabend läuft eine Vollsicherung, von Dienstag bis Freitag abends jeweils eine Teilsicherung. Täglich ändern sich 25 GiB – jeden Tag andere Dateien.</p>
      <ul>
        <li><strong>a)</strong> Berechne den Speicherbedarf der Woche (Montag bis Freitag) bei inkrementeller und bei differenzieller Sicherung.</li>
        <li><strong>b)</strong> Am Samstagmorgen fällt der Server aus. Welche Sicherungen brauchst du jeweils für die Wiederherstellung?</li>
        <li><strong>c)</strong> Nenne je einen Vor- und Nachteil beider Verfahren.</li>
        <li><strong>d)</strong> Bisher liegen alle Sicherungen auf einer USB-Festplatte, die dauerhaft am Server angeschlossen ist. Prüfe dieses Vorgehen anhand der 3-2-1-Regel und mache einen Verbesserungsvorschlag.</li>
      </ul>`,
      solution: `
      <p><strong>a)</strong> <strong>Inkrementell</strong>: jede Teilsicherung enthält nur die Änderungen seit der letzten Sicherung → 4 × 25 GiB = 100 GiB. Gesamt: 500 GiB + 100 GiB = <strong>600 GiB</strong>.<br><strong>Differenziell</strong>: jede Teilsicherung enthält alle Änderungen seit der Vollsicherung → Di 25 GiB + Mi 50 GiB + Do 75 GiB + Fr 100 GiB = 250 GiB. Gesamt: 500 GiB + 250 GiB = <strong>750 GiB</strong>.</p>
      <p><strong>b)</strong> Inkrementell: Vollsicherung Montag + <strong>alle</strong> inkrementellen Sicherungen Di, Mi, Do und Fr in der richtigen Reihenfolge = 5 Sicherungen. Differenziell: Vollsicherung Montag + <strong>nur</strong> die differenzielle Sicherung vom Freitag = 2 Sicherungen.</p>
      <p><strong>c)</strong> Inkrementell: + wenig Speicher und kurze Sicherungszeit; − aufwendige, fehleranfällige Wiederherstellung (fehlt ein Glied der Kette, sind spätere Stände verloren). Differenziell: + schnelle Wiederherstellung mit nur zwei Sicherungen; − Speicherbedarf und Sicherungsdauer wachsen jeden Tag bis zur nächsten Vollsicherung.</p>
      <p><strong>d)</strong> Die Regel ist <strong>nicht erfüllt</strong>: Es gibt nur eine Sicherungskopie, nur ein weiteres Medium, keine Kopie außer Haus – und die dauerhaft angeschlossene Platte wird bei Ransomware, Überspannung oder Brand zusammen mit dem Server zerstört. Vorschlag: <strong>3</strong> Kopien (Original + 2 Sicherungen) auf <strong>2</strong> Medientypen, z. B. NAS mit versionierten Sicherungen und wechselnde USB-Festplatten; <strong>1</strong> Kopie außer Haus (z. B. Platte im Bankschließfach oder verschlüsselter, unveränderbarer Cloud-Speicher). Die Wechselplatte wird nach der Sicherung getrennt (offline). Wiederherstellung regelmäßig testen.</p>`
    },
    {
      id: "e-passwort",
      topic: "passwort-krypto",
      title: "Passwort-Richtlinie bewerten und Passwortstärke berechnen",
      level: 3,
      exam: ["AP1"],
      task: `
      <p>In der <strong>Husumer Werkzeugbau GmbH</strong> gilt folgende Passwort-Richtlinie:</p>
      <ul>
        <li>mindestens 6 Zeichen, erlaubt sind nur Kleinbuchstaben und Ziffern</li>
        <li>Wechsel alle 30 Tage; nur die letzten 2 Passwörter sind gesperrt</li>
        <li>das Passwort darf auf einem Zettel unter der Tastatur notiert werden</li>
        <li>keine Sperre nach Fehlversuchen</li>
        <li>alle Server haben dasselbe Administrator-Passwort</li>
      </ul>
      <ul>
        <li><strong>a)</strong> Bewerte die Richtlinie: Nenne fünf Schwächen mit kurzer Begründung. (5 P)</li>
        <li><strong>b)</strong> Ein Angreifer testet offline 10¹⁰ Passwörter pro Sekunde. Berechne die maximale Dauer eines Brute-Force-Angriffs für (1) 10 Zeichen aus Kleinbuchstaben und Ziffern, (2) 10 Zeichen aus Klein-, Großbuchstaben und Ziffern, (3) eine Passphrase aus 20 Kleinbuchstaben. (6 P)</li>
        <li><strong>c)</strong> Formuliere eine verbesserte Richtlinie mit mindestens fünf Regeln. (5 P)</li>
        <li><strong>d)</strong> Erkläre, welche Faktoren „Passwort + Code aus einer Authenticator-App“ kombiniert und warum „Passwort + PIN“ keine Zwei-Faktor-Authentifizierung ist. (4 P)</li>
      </ul>`,
      hints: ["Kombinationen = Zeichenvorrat hoch Länge", "1 Jahr = 365 × 24 × 3.600 s = 31.536.000 s"],
      solution: `
      <p><strong>a)</strong></p>
      <ul>
        <li>6 Zeichen sind viel zu kurz → in Sekunden per Brute Force zu knacken.</li>
        <li>kleiner Zeichenvorrat (nur 36 Zeichen) → weniger Kombinationen.</li>
        <li>Wechsel alle 30 Tage ohne Anlass → Nutzer wählen einfache Muster („sommer1“, „sommer2“); zudem kann nach zwei Wechseln das alte Passwort wieder verwendet werden.</li>
        <li>Zettel unter der Tastatur → jeder mit Zutritt kennt das Passwort (Vertraulichkeit).</li>
        <li>keine Sperre → Online-Rateangriffe unbegrenzt möglich.</li>
        <li>gleiches Admin-Passwort für alle Server → ein kompromittiertes Passwort öffnet alle Server.</li>
      </ul>
      <p><strong>b)</strong></p>
      <p>(1) Zeichenvorrat 26 + 10 = 36: 36¹⁰ = 3.656.158.440.062.976 ≈ 3,66 × 10¹⁵<br>Zeit = 3,66 × 10¹⁵ ÷ 10¹⁰ ≈ 365.616 s ÷ 3.600 ≈ <strong>101,6 Stunden ≈ 4,2 Tage</strong></p>
      <p>(2) Zeichenvorrat 26 + 26 + 10 = 62: 62¹⁰ ≈ 8,39 × 10¹⁷<br>Zeit ≈ 8,39 × 10⁷ s ÷ 31.536.000 s/Jahr ≈ <strong>2,7 Jahre</strong></p>
      <p>(3) Zeichenvorrat 26, Länge 20: 26²⁰ ≈ 1,99 × 10²⁸<br>Zeit ≈ 1,99 × 10¹⁸ s ÷ 31.536.000 s/Jahr ≈ <strong>6,3 × 10¹⁰ Jahre</strong> (rund 63 Milliarden Jahre)</p>
      <p>Fazit: Die lange Passphrase ist trotz nur einer Zeichenart mit Abstand am stärksten – <strong>Länge schlägt Komplexität</strong>. (Voraussetzung: keine bekannte Redewendung, sonst helfen Wörterbuchangriffe.)</p>
      <p><strong>c)</strong> Mindestens 12 Zeichen mit mehreren Zeichenarten oder eine Passphrase ab 20 Zeichen; für jedes Konto ein eigenes Passwort, Nutzung eines freigegebenen Passwortmanagers; Wechsel nur bei Verdacht auf Kompromittierung; Passwörter nie notieren oder weitergeben; Sperre bzw. Verzögerung nach z. B. 5 Fehlversuchen; individuelle Admin-Passwörter je Server (z. B. über eine Lösung zur Verwaltung lokaler Admin-Passwörter); MFA für Fernzugriff und Admin-Konten; Abgleich neuer Passwörter mit Listen bekannter geleakter Passwörter.</p>
      <p><strong>d)</strong> Das Passwort gehört zum Faktor <strong>Wissen</strong>, der App-Code zum Faktor <strong>Besitz</strong> (Smartphone mit dem geheimen Schlüssel der App). Zwei verschiedene Kategorien → echte 2FA. Passwort und PIN sind beide <strong>Wissen</strong>; wer beides ausspäht, braucht nichts weiter – es fehlt ein zweiter, unabhängiger Faktor.</p>`
    },
    {
      id: "e-krypto",
      topic: "passwort-krypto",
      title: "Verschlüsselung, Signatur und Zertifikat beim E-Mail-Versand",
      level: 2,
      exam: ["AP1"],
      task: `
      <p>Die <strong>Nordlicht IT GmbH</strong> will vertrauliche Angebote per E-Mail an 30 Geschäftspartner schicken.</p>
      <ul>
        <li><strong>a)</strong> Berechne, wie viele Schlüssel nötig sind, wenn alle 31 Beteiligten (Nordlicht + 30 Partner) paarweise vertraulich kommunizieren wollen – symmetrisch und asymmetrisch.</li>
        <li><strong>b)</strong> Beschreibe in Schritten, wie eine E-Mail an den Kunden K <strong>hybrid</strong> verschlüsselt wird.</li>
        <li><strong>c)</strong> Beschreibe, wie Nordlicht ein Angebot digital signiert und wie K die Signatur prüft. Welche Schutzziele werden gesichert?</li>
        <li><strong>d)</strong> K fragt: „Woher weiß ich, dass der öffentliche Schlüssel wirklich von Nordlicht stammt?“ Erkläre.</li>
        <li><strong>e)</strong> Ein Außendienstmitarbeiter von Nordlicht ruft seine Mails mit Notebook und Smartphone ab. Empfiehl IMAP oder POP3, begründe und nenne die Ports für den verschlüsselten Abruf und den verschlüsselten Versand.</li>
      </ul>`,
      solution: `
      <p><strong>a)</strong> n = 31 Beteiligte.<br>symmetrisch: n × (n − 1) ÷ 2 = 31 × 30 ÷ 2 = <strong>465 Schlüssel</strong><br>asymmetrisch: 2 × n = 2 × 31 = <strong>62 Schlüssel</strong> (31 Schlüsselpaare)</p>
      <p><strong>b)</strong> 1. Das Mailprogramm erzeugt einen zufälligen <strong>symmetrischen Sitzungsschlüssel</strong>. 2. Die Nachricht wird damit schnell symmetrisch (z. B. AES) verschlüsselt. 3. Der Sitzungsschlüssel wird mit dem <strong>öffentlichen Schlüssel von K</strong> asymmetrisch verschlüsselt. 4. Beides wird gesendet. 5. K entschlüsselt mit seinem <strong>privaten Schlüssel</strong> den Sitzungsschlüssel und damit die Nachricht. So verbindet man die Geschwindigkeit der symmetrischen mit dem sicheren Schlüsselaustausch der asymmetrischen Verschlüsselung.</p>
      <p><strong>c)</strong> Nordlicht bildet einen <strong>Hashwert</strong> des Angebots und signiert ihn mit dem eigenen <strong>privaten Schlüssel</strong>; die Signatur wird mitgeschickt. K bildet selbst den Hashwert des empfangenen Angebots und prüft die Signatur mit dem <strong>öffentlichen Schlüssel von Nordlicht</strong>. Stimmen die Hashwerte überein, ist das Angebot unverändert (<strong>Integrität</strong>) und stammt von Nordlicht (<strong>Authentizität</strong>); Nordlicht kann das Versenden nicht abstreiten (<strong>Verbindlichkeit</strong>). Vertraulichkeit entsteht durch die Signatur allein nicht.</p>
      <p><strong>d)</strong> Über ein <strong>Zertifikat</strong>: Eine vertrauenswürdige Zertifizierungsstelle (CA) prüft die Identität von Nordlicht und bestätigt mit ihrer eigenen digitalen Signatur, dass der öffentliche Schlüssel zu Nordlicht gehört. K vertraut der CA (ihr Stammzertifikat ist im System hinterlegt) und damit auch dem Zertifikat von Nordlicht. Das Ganze nennt man Public-Key-Infrastruktur (PKI).</p>
      <p><strong>e)</strong> Empfehlung: <strong>IMAP</strong>. Die Mails bleiben auf dem Server, sodass Notebook und Smartphone denselben Stand (Ordner, gelesen/ungelesen) sehen und die Mails mit dem Server zentral gesichert werden. Bei POP3 würden die Mails auf ein Gerät heruntergeladen und meist auf dem Server gelöscht – auf dem zweiten Gerät fehlen sie, und bei Verlust des Geräts sind sie weg. Ports: IMAP über TLS <strong>993</strong>; Versand per SMTP-Submission <strong>587</strong> mit STARTTLS (alternativ 465 mit TLS von Anfang an). Die unverschlüsselten Ports 143 (IMAP) und 110 (POP3) sollten nicht genutzt werden.</p>`
    },
    {
      id: "e-lizenzen",
      topic: "urheberrecht-lizenzen",
      title: "Urheber-, Marken- und Lizenzfragen im Betrieb beurteilen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `
      <p>In der <strong>Nordlicht IT GmbH</strong> tauchen folgende Fragen auf. Beurteile jeden Fall und begründe.</p>
      <ul>
        <li><strong>a)</strong> Ein Entwickler baut eine Bibliothek unter der <strong>GNU GPL</strong> in ein Programm ein, das an Kunden verkauft werden soll – ohne Quellcode.</li>
        <li><strong>b)</strong> Eine andere Bibliothek steht unter der <strong>MIT-Lizenz</strong>. Darf sie in das proprietäre Produkt?</li>
        <li><strong>c)</strong> Ein Tool ist als Freeware „nur für private Nutzung“ gekennzeichnet. Der Vertrieb möchte es dienstlich einsetzen.</li>
        <li><strong>d)</strong> Ein Auszubildender hat während der Arbeitszeit im Auftrag seines Teams ein PowerShell-Skript geschrieben und möchte es privat verkaufen.</li>
        <li><strong>e)</strong> Für die Firmenwebseite wird ein Foto aus der Google-Bildersuche verwendet; ein ©-Vermerk ist nicht zu sehen.</li>
        <li><strong>f)</strong> Die Firma möchte den Produktnamen „Nordlicht Backup“ schützen. Wie geht das und wie lange gilt der Schutz?</li>
      </ul>`,
      solution: `
      <p><strong>a)</strong> Problematisch. Die GPL ist eine <strong>Copyleft</strong>-Lizenz: Wer ein abgeleitetes Werk weitergibt, muss es ebenfalls unter der GPL lizenzieren und den <strong>Quellcode</strong> mitliefern. Ein Verkauf ohne Quellcode verletzt die Lizenz und damit das Urheberrecht. Lösungen: den Quellcode unter GPL offenlegen, eine Bibliothek mit permissiver oder LGPL-Lizenz verwenden oder – falls angeboten – eine kommerzielle Lizenz des Rechteinhabers erwerben.</p>
      <p><strong>b)</strong> Ja. Die MIT-Lizenz ist <strong>permissiv</strong>: Nutzung, Änderung und Einbau in proprietäre Software sind erlaubt. Pflicht ist nur, den Urheberrechts- und Lizenzhinweis beizubehalten (z. B. in einer Datei mit Drittanbieter-Lizenzen).</p>
      <p><strong>c)</strong> Nicht erlaubt. Freeware ist zwar kostenlos, aber die Nutzungsbedingungen des Urhebers gelten. Für den dienstlichen Einsatz braucht die Firma eine kommerzielle Lizenz oder ein anderes Tool; sonst drohen Unterlassungs- und Schadenersatzansprüche.</p>
      <p><strong>d)</strong> Nein. Nach <strong>§ 69b UrhG</strong> darf der Arbeitgeber alle vermögensrechtlichen Befugnisse an Programmen ausüben, die ein Arbeitnehmer in Erfüllung seiner Aufgaben schafft – das gilt auch für Auszubildende. Ohne Zustimmung der Firma ist ein privater Verkauf unzulässig. Als Urheber bleibt der Azubi aber benannt (Urheberpersönlichkeitsrecht).</p>
      <p><strong>e)</strong> Unzulässig. Das Foto ist automatisch <strong>urheberrechtlich geschützt</strong>, ein ©-Vermerk ist dafür nicht nötig. Ohne Nutzungsrecht drohen Abmahnung, Unterlassung und Schadenersatz. Besser: eigene Fotos, gekaufte Lizenzen aus einer Bilddatenbank oder Bilder mit passender Creative-Commons-Lizenz (Namensnennung beachten).</p>
      <p><strong>f)</strong> Als <strong>Marke</strong> beim Deutschen Patent- und Markenamt (DPMA) eintragen lassen, für EU-weiten Schutz als Unionsmarke beim EUIPO. Vorher prüfen, ob es ähnliche ältere Marken gibt. Der Schutz gilt <strong>10 Jahre</strong> und kann beliebig oft um jeweils 10 Jahre verlängert werden. Nach der Eintragung darf das Zeichen ® verwendet werden.</p>`
    },
    {
      id: "e-ki-metadaten",
      topic: "ki-telemetrie",
      title: "KI-Verordnung anwenden, Metadaten und Telemetrie begrenzen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `
      <p>Die <strong>Nordlicht IT GmbH</strong> berät Kunden zu KI und Datenschutz.</p>
      <p><strong>a)</strong> Ordne die Anwendungen einer Risikoklasse der KI-Verordnung zu:</p>
      <ol>
        <li>Chatbot auf der Webseite beantwortet Kundenfragen</li>
        <li>KI sortiert eingehende Bewerbungen vor und lehnt Bewerber ab</li>
        <li>Spamfilter im Mailserver</li>
        <li>Behörde bewertet Bürger nach ihrem Sozialverhalten mit einem Punktesystem</li>
        <li>Webcam-System erkennt Emotionen von Beschäftigten zur Leistungskontrolle</li>
        <li>KI-generiertes Werbevideo mit einer realistisch wirkenden, künstlichen Person</li>
      </ol>
      <p><strong>b)</strong> Ein Mitarbeiter kopiert einen Kundenvertrag mit Namen und Preisen in einen öffentlichen KI-Chatbot, um eine Zusammenfassung zu erhalten. Bewerte das Vorgehen und nenne zwei Alternativen.</p>
      <p><strong>c)</strong> Die Firma veröffentlicht Fotos der Weihnachtsfeier und ein Angebots-PDF auf ihrer Webseite. Erläutere die Risiken durch Metadaten und nenne zwei Gegenmaßnahmen.</p>
      <p><strong>d)</strong> Erkläre den Begriff Telemetrie und nenne zwei Maßnahmen, mit denen ein Unternehmen sie begrenzen kann.</p>`,
      solution: `
      <p><strong>a)</strong> 1. begrenztes Risiko – Transparenzpflicht: Nutzer müssen erkennen, dass sie mit einer KI sprechen · 2. <strong>hohes Risiko</strong> (Beschäftigung/Personalauswahl) – strenge Pflichten, u. a. menschliche Aufsicht · 3. minimales Risiko · 4. <strong>verboten</strong> (Social Scoring) · 5. <strong>verboten</strong> (Emotionserkennung am Arbeitsplatz) · 6. begrenztes Risiko – das Video muss als künstlich erzeugt gekennzeichnet werden (Deepfake).</p>
      <p><strong>b)</strong> Das Vorgehen ist <strong>unzulässig und riskant</strong>: Es werden personenbezogene Daten und Geschäftsgeheimnisse an einen externen Anbieter übermittelt – ohne Rechtsgrundlage und ohne Auftragsverarbeitungsvertrag, eventuell in ein Drittland. Die Eingaben können gespeichert und zum Training genutzt werden (Verletzung der Vertraulichkeit). Alternativen: ein vom Unternehmen freigegebenes KI-Tool mit Vertrag und Datenschutzzusagen (z. B. Enterprise-Version ohne Training auf Kundendaten) oder den Text vorher anonymisieren bzw. selbst zusammenfassen; generell eine interne KI-Richtlinie aufstellen.</p>
      <p><strong>c)</strong> Fotos enthalten oft <strong>EXIF-Daten</strong> wie GPS-Koordinaten, Aufnahmezeit und Kameramodell, PDFs enthalten Autor, Firma, Bearbeitungszeit, Kommentare oder alte Versionen. Dadurch können private Wohnorte, interne Namen oder Kalkulationsdetails bekannt werden – ein Datenschutzrisiko und eine Informationsquelle für Spear-Phishing. Gegenmaßnahmen: Metadaten vor der Veröffentlichung entfernen (Dokumentinspektor „Dokument prüfen“, „Eigenschaften und persönliche Informationen entfernen“, <code>exiftool -all= foto.jpg</code>); GPS-Speicherung in der Kamera-App abschalten; Freigabeprozess vor der Veröffentlichung. Für Fotos von Personen außerdem die Einwilligung einholen.</p>
      <p><strong>d)</strong> Telemetrie ist die automatische Übertragung von Nutzungs-, Diagnose- und Fehlerdaten eines Produkts an den Hersteller. Sie kann personenbezogene Daten enthalten. Maßnahmen: Diagnosedaten per Gruppenrichtlinie auf das Minimum beschränken; Datenschutzeinstellungen bei der Einrichtung restriktiv wählen; Verbindungen zu Telemetrie-Servern an der Firewall bzw. per Proxy blockieren; Produkte mit datensparsamen Voreinstellungen bevorzugen.</p>`
    },
    {
      id: "e-video-mail",
      topic: "massnahmen",
      title: "Datenschutz im Alltag: Videoüberwachung und E-Mail-Versand",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `
      <p>Die <strong>Deichtechnik Husum GmbH</strong> plant zwei Vorhaben:</p>
      <ul>
        <li>Im Wareneingang sollen zwei Kameras Diebstähle verhindern. Sie erfassen auch die dort arbeitenden Beschäftigten.</li>
        <li>Eine Einladung zur Hausmesse soll per E-Mail an 60 externe Kunden gehen; außerdem soll ein Angebot mit interner Kalkulation vertraulich an einen Großkunden geschickt werden.</li>
      </ul>
      <ul>
        <li><strong>a)</strong> Prüfe, ob die Videoaufnahmen personenbezogene Daten sind, und nenne eine passende Rechtsgrundlage. (2 P)</li>
        <li><strong>b)</strong> Nenne vier datenschutzrechtliche Anforderungen bzw. TOM für die Videoüberwachung. (4 P)</li>
        <li><strong>c)</strong> Erkläre die Rolle des Betriebsrats. (2 P)</li>
        <li><strong>d)</strong> Welches Adressfeld ist für die Einladung zu verwenden? Begründe. (2 P)</li>
        <li><strong>e)</strong> Der Mailserver verwendet TLS. Reicht das für das vertrauliche Angebot? Begründe und empfiehl ein Verfahren. (3 P)</li>
      </ul>`,
      solution: `
      <p><strong>a)</strong> Ja. Auf den Aufnahmen sind Personen erkennbar – es handelt sich um personenbezogene Daten. Rechtsgrundlage ist in der Regel das <strong>berechtigte Interesse</strong> (Art. 6 Abs. 1 lit. f DSGVO) am Schutz vor Diebstahl, sofern die Interessen der Beschäftigten nicht überwiegen. Der Zweck muss vorher klar festgelegt sein.</p>
      <p><strong>b)</strong> Zum Beispiel: gut sichtbare <strong>Hinweisschilder</strong> mit Verantwortlichem und Zweck (Informationspflicht); <strong>Datenminimierung</strong> – nur der nötige Bildausschnitt, keine Pausen-, Umkleide- oder Sanitärräume, kein Ton; <strong>kurze Speicherdauer</strong> mit automatischer Löschung (in der Regel nach 72 Stunden, sofern kein Vorfall vorliegt); <strong>Zugriff</strong> nur für wenige benannte Personen, Auswertung nur bei konkretem Anlass und mit Protokollierung; verschlüsselte Speicherung; Eintrag ins Verzeichnis der Verarbeitungstätigkeiten, bei umfangreicher Überwachung eine Datenschutz-Folgenabschätzung.</p>
      <p><strong>c)</strong> Kameras sind technische Einrichtungen, mit denen sich Verhalten und Leistung der Beschäftigten überwachen lassen. Der Betriebsrat hat deshalb ein <strong>Mitbestimmungsrecht</strong> (§ 87 Abs. 1 Nr. 6 BetrVG). Üblich ist eine <strong>Betriebsvereinbarung</strong>, die Zweck, Umfang, Speicherdauer und Auswertung regelt – ohne Zustimmung darf die Anlage nicht in Betrieb gehen.</p>
      <p><strong>d)</strong> Das Feld <strong>BCC</strong> (Blindkopie). Bei „An“ oder „CC“ sehen alle 60 Empfänger die Adressen der anderen Kunden – das ist eine unzulässige Offenlegung personenbezogener Daten und verrät zudem die Kundenliste.</p>
      <p><strong>e)</strong> Nein. TLS verschlüsselt nur den <strong>Transportweg</strong>; auf den beteiligten Mailservern liegt die Nachricht unverschlüsselt vor. Für vertrauliche Inhalte ist eine <strong>Ende-zu-Ende-Verschlüsselung</strong> nötig, z. B. <strong>S/MIME</strong> mit Zertifikaten oder OpenPGP; sinnvollerweise wird das Angebot zusätzlich digital signiert (Integrität, Authentizität). Alternativ: verschlüsseltes Kundenportal oder passwortgeschützter Download mit Passwortübermittlung über einen anderen Kanal.</p>`
    },
    {
      id: "e-adminrechte",
      topic: "massnahmen",
      title: "Client der Personalabteilung härten – Admin-Rechte ja oder nein?",
      level: 2,
      exam: ["AP1"],
      task: `
      <p>In der Personalabteilung der <strong>Nordlicht IT GmbH</strong> werden auf einem Windows-Client Gehaltsdaten bearbeitet. Ein Mitarbeiter bittet dich um lokale Administratorrechte, „damit ich Programme selbst installieren kann“.</p>
      <ul>
        <li><strong>a)</strong> Stufe den Schutzbedarf des Clients für Vertraulichkeit, Integrität und Verfügbarkeit ein und begründe. (3 P)</li>
        <li><strong>b)</strong> Begründe, warum du die Administratorrechte nicht vergibst, und nenne eine Alternative. (3 P)</li>
        <li><strong>c)</strong> Nenne drei Maßnahmen zur Härtung des Clients. (3 P)</li>
        <li><strong>d)</strong> Nenne je ein Beispiel für Zutritts-, Zugangs- und Zugriffskontrolle für diesen Arbeitsplatz. (3 P)</li>
      </ul>`,
      solution: `
      <p><strong>a)</strong> <strong>Vertraulichkeit hoch</strong>: Gehaltsdaten sind personenbezogen; eine Offenlegung verletzt Persönlichkeitsrechte und die DSGVO und schadet dem Betriebsfrieden. <strong>Integrität hoch</strong>: manipulierte Daten führen zu falschen Auszahlungen und finanziellen Schäden. <strong>Verfügbarkeit normal</strong>: Ein kurzer Ausfall ist tolerierbar, die Arbeit kann an einem anderen Client oder später erledigt werden (außer direkt vor dem Abrechnungstermin).</p>
      <p><strong>b)</strong> Nach dem Prinzip der <strong>minimalen Rechte</strong> (Least Privilege) bekommt jeder nur die Rechte, die er für seine Aufgabe braucht. Mit Adminrechten würde Schadsoftware, die der Mitarbeiter versehentlich startet, mit vollen Rechten laufen, den Virenschutz abschalten oder sich dauerhaft einnisten; außerdem könnte er unlizenzierte oder unsichere Software installieren. Alternative: Software wird nach Freigabe von der IT zentral verteilt, z. B. über ein Softwarecenter mit geprüften Programmen.</p>
      <p><strong>c)</strong> Zum Beispiel: Updates automatisch einspielen; Festplattenverschlüsselung (BitLocker); Virenschutz/EDR aktiv und nicht abschaltbar; unnötige Dienste und Programme entfernen; USB-Datenträger sperren bzw. Autostart deaktivieren; Makros aus dem Internet blockieren; Bildschirmsperre nach kurzer Inaktivität.</p>
      <p><strong>d)</strong> Zutritt: Büro der Personalabteilung abschließbar, Zugang nur mit Chipkarte. Zugang: Anmeldung am Client mit Passwort und zweitem Faktor, automatische Bildschirmsperre. Zugriff: Rechte auf den Personalordner nur für die Personalabteilung, keine Rechte für andere Abteilungen.</p>`
    },
    {
      id: "e-entsorgung",
      topic: "massnahmen",
      title: "Altgeräte und Akten datenschutzgerecht entsorgen (DIN 66399)",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `
      <p>Die <strong>Deichtechnik Husum GmbH</strong> tauscht die sechs PCs der Personalabteilung aus: Zwei ältere Geräte haben eine Festplatte (HDD), vier neuere eine SSD. Außerdem sollen alte Personalakten (Papier) nach Ablauf der Aufbewahrungsfrist vernichtet werden. Ein Kollege schlägt vor: „Wir formatieren die Laufwerke und verschenken die PCs an einen Verein, die Akten kommen ins Altpapier.“</p>
      <ul>
        <li><strong>a)</strong> Beurteile den Vorschlag und nenne das betroffene Schutzziel. (3 P)</li>
        <li><strong>b)</strong> Beschreibe für HDD und SSD je ein geeignetes Verfahren, um die Daten sicher zu entfernen, und begründe den Unterschied. (4 P)</li>
        <li><strong>c)</strong> Die Akten und SSDs sollen von einem Dienstleister nach DIN 66399 vernichtet werden. Bestimme eine passende Schutzklasse und nenne eine geeignete Sicherheitsstufe für die Papierakten mit Kurzbezeichnung. (3 P)</li>
        <li><strong>d)</strong> Nenne drei Punkte, die die Firma bei der Beauftragung des Dienstleisters beachten muss. (3 P)</li>
        <li><strong>e)</strong> Nenne eine Maßnahme, die das sichere Löschen bei künftigen Geräten deutlich vereinfacht. (2 P)</li>
      </ul>`,
      hints: ["Was passiert beim Formatieren eigentlich mit den Daten?", "Die Schutzklassen der DIN 66399 entsprechen den Schutzbedarfskategorien normal, hoch, sehr hoch."],
      solution: `
      <p><strong>a)</strong> Der Vorschlag ist <strong>unzulässig</strong>. Formatieren entfernt nur die Verwaltungsinformationen des Dateisystems; die eigentlichen Daten bleiben erhalten und lassen sich mit frei verfügbaren Wiederherstellungsprogrammen oft rekonstruieren. Personalakten im Altpapier kann jeder lesen. Betroffen ist die <strong>Vertraulichkeit</strong> personenbezogener Daten (teilweise Gesundheitsdaten nach Art. 9 DSGVO) – ein Verstoß gegen Art. 5 und Art. 32 DSGVO und eine meldepflichtige Datenpanne, falls Daten in fremde Hände gelangen.</p>
      <p><strong>b)</strong> <strong>HDD</strong>: den gesamten Datenträger mit einem geeigneten Löschprogramm vollständig überschreiben (danach stichprobenartig prüfen) oder die Platte physisch vernichten lassen. <strong>SSD</strong>: die Secure-Erase-Funktion des Herstellers nutzen bzw. bei verschlüsselten SSDs den Schlüssel sicher vernichten (Crypto-Erase) – oder physisch vernichten. Unterschied: Eine SSD verteilt Schreibzugriffe intern auf wechselnde Speicherzellen (Wear-Leveling) und besitzt Reservebereiche. Ein Überschreibprogramm erreicht deshalb nicht sicher alle Zellen, in denen noch alte Daten stehen.</p>
      <p><strong>c)</strong> Personalakten und die SSDs der Personalabteilung haben bei der Vertraulichkeit einen <strong>hohen</strong> Schutzbedarf → <strong>Schutzklasse 2</strong>. Geeignet ist für die Papierakten z. B. Sicherheitsstufe 4, Kurzbezeichnung <strong>P-4</strong> (P = Materialklasse Papier). Für die SSDs gilt Materialklasse E (elektronische Datenträger) mit einer Sicherheitsstufe derselben Schutzklasse.</p>
      <p><strong>d)</strong> Zum Beispiel: <strong>Auftragsverarbeitungsvertrag</strong> nach Art. 28 DSGVO abschließen, weil der Dienstleister personenbezogene Daten in die Hände bekommt; einen zuverlässigen, möglichst zertifizierten Entsorger auswählen, der nach DIN 66399 arbeitet; Transport in verschlossenen Behältern; schriftlichen <strong>Vernichtungsnachweis</strong> (Protokoll mit Datum, Menge, Sicherheitsstufe) verlangen und aufbewahren.</p>
      <p><strong>e)</strong> Eine <strong>Festplatten-Vollverschlüsselung</strong> (z. B. BitLocker) von Anfang an: Wird der Schlüssel am Ende sicher gelöscht, sind die Daten auf dem Datenträger ohne Schlüssel nicht mehr lesbar. Zusätzlich hilft ein festgelegter Aussonderungsprozess (Checkliste, Verantwortliche, Dokumentation).</p>`
    },
  ],
  quiz: [
    { id: "q-gl-1", topic: "grundlagen", type: "single",
      q: "Ein Angreifer ändert unbemerkt die Kontonummer in einer gespeicherten Rechnung. Welches Schutzziel ist vorrangig verletzt?",
      options: ["Verfügbarkeit", "Vertraulichkeit", "Integrität", "Verbindlichkeit"], answer: 2,
      explain: "Die Daten wurden unbefugt verändert – das verletzt die Integrität. Vertraulichkeit wäre betroffen, wenn jemand die Rechnung unbefugt liest; Verfügbarkeit, wenn sie nicht mehr abrufbar wäre. Verbindlichkeit betrifft das Abstreiten von Handlungen." },
    { id: "q-gl-2", topic: "grundlagen", type: "single",
      q: "Welche Aussage grenzt Datenschutz und Datensicherheit richtig ab?",
      options: ["Datenschutz schützt Personen vor dem Missbrauch ihrer Daten; Datensicherheit schützt Daten jeder Art vor Verlust, Manipulation und unbefugtem Zugriff.", "Datensicherheit ist ein Teil des Datenschutzes und gilt nur für personenbezogene Daten.", "Datenschutz und Datensicherheit bedeuten dasselbe und werden im Gesetz gleichbedeutend verwendet.", "Datenschutz betrifft nur Papierakten, Datensicherheit nur digitale Daten."], answer: 0,
      explain: "Datenschutz stellt den Menschen und sein Recht auf informationelle Selbstbestimmung in den Mittelpunkt („Darf ich das?“). Datensicherheit betrifft alle Daten und fragt, wie sie technisch-organisatorisch geschützt werden („Wie schütze ich das?“). Sie ist das Mittel, mit dem Datenschutz umgesetzt wird, aber nicht auf personenbezogene Daten beschränkt." },
    { id: "q-gl-3", topic: "grundlagen", type: "multi",
      q: "Welche Aufgaben gehören typischerweise zur bzw. zum Datenschutzbeauftragten?",
      options: ["Beschäftigte zum Datenschutz beraten und sensibilisieren", "als Geschäftsleitung die Gesamtverantwortung für den Datenschutz tragen", "Firewall-Regeln für das Firmennetz konfigurieren", "als Anlaufstelle für die Aufsichtsbehörde dienen", "die Einhaltung der Datenschutzvorschriften überwachen"], answer: [0, 3, 4],
      explain: "Nach Art. 39 DSGVO berät und überwacht der DSB und arbeitet mit der Aufsichtsbehörde zusammen. Die Firewall zu konfigurieren ist eine Aufgabe der IT, und die Gesamtverantwortung bleibt immer bei der Geschäftsleitung – der DSB ist beratend und weisungsfrei tätig." },
    { id: "q-gl-4", topic: "grundlagen", type: "tf",
      q: "Das Schutzziel Verbindlichkeit bedeutet, dass eine Handlung ihrem Urheber nachweisbar zugeordnet wird und später nicht abgestritten werden kann.",
      answer: true,
      explain: "Richtig. Verbindlichkeit (Nichtabstreitbarkeit) wird z. B. durch qualifizierte elektronische Signaturen oder revisionssichere Protokolle erreicht. Die Echtheit des Absenders allein heißt Authentizität." },
    { id: "q-gl-5", topic: "grundlagen", type: "input",
      q: "Ein Dienst soll eine Verfügbarkeit von 99,9 % pro Jahr (8.760 h) erreichen. Wie viele <strong>Stunden</strong> Ausfall sind pro Jahr höchstens zulässig?",
      answer: ["8,76", "8.76", "8,76 h", "8.76 h", "8,76 Stunden", "8,76 Std", "8 h 46 min"],
      explain: "Zulässige Ausfallzeit = 8.760 h × (100 % − 99,9 %) = 8.760 h × 0,001 = 8,76 h, also rund 8 h 46 min." },
    { id: "q-dg-1", topic: "dsgvo-grundsaetze", type: "single",
      q: "Welche Angabe ist nach der DSGVO <strong>kein</strong> personenbezogenes Datum?",
      options: ["die Personalnummer einer Mitarbeiterin", "die IP-Adresse eines Webseitenbesuchers", "das Kfz-Kennzeichen eines Kunden", "der Jahresumsatz einer GmbH"], answer: 3,
      explain: "Personenbezogen sind Informationen über identifizierte oder identifizierbare natürliche Personen. Der Umsatz einer GmbH betrifft eine juristische Person. IP-Adresse, Personalnummer und Kennzeichen lassen sich mit Zusatzwissen einer Person zuordnen." },
    { id: "q-dg-2", topic: "dsgvo-grundsaetze", type: "single",
      q: "Was unterscheidet Pseudonymisierung von Anonymisierung?",
      options: ["Pseudonymisierte Daten fallen nicht mehr unter die DSGVO.", "Pseudonymisierte Daten lassen sich mit Zusatzwissen wieder einer Person zuordnen und bleiben personenbezogen.", "Anonymisierung bedeutet, dass die Daten mit einem starken Schlüssel verschlüsselt werden.", "Bei der Anonymisierung werden Namen durch Kennziffern ersetzt, deren Zuordnungstabelle getrennt gespeichert wird."], answer: 1,
      explain: "Bei der Pseudonymisierung existiert eine (getrennt aufbewahrte) Zuordnung – die DSGVO gilt weiter. Erst anonyme Daten, bei denen der Personenbezug nicht mehr herstellbar ist, fallen heraus. Kennziffern mit Zuordnungstabelle beschreiben die Pseudonymisierung, und verschlüsselte Daten sind weiterhin personenbezogen." },
    { id: "q-dg-3", topic: "dsgvo-grundsaetze", type: "single",
      q: "Ein Onlineshop speichert die Lieferadresse, um eine Bestellung auszuliefern. Welche Rechtsgrundlage nach Art. 6 DSGVO passt am besten?",
      options: ["berechtigtes Interesse an Werbung (lit. f)", "Erfüllung eines Vertrags (lit. b)", "Schutz lebenswichtiger Interessen (lit. d)", "Einwilligung (lit. a)"], answer: 1,
      explain: "Ohne Adresse kann der Kaufvertrag nicht erfüllt werden – also Art. 6 Abs. 1 lit. b. Eine Einwilligung ist hier weder nötig noch sinnvoll, weil sie jederzeit widerrufen werden könnte. Werbung und lebenswichtige Interessen passen nicht zum Zweck." },
    { id: "q-dg-4", topic: "dsgvo-grundsaetze", type: "multi",
      q: "Welche der folgenden Punkte sind <strong>Grundsätze</strong> der Verarbeitung nach Art. 5 DSGVO?",
      options: ["Speicherbegrenzung", "Datenübertragbarkeit", "Einwilligungspflicht für jede Verarbeitung", "Zweckbindung", "Datenminimierung"], answer: [0, 3, 4],
      explain: "Art. 5 nennt u. a. Zweckbindung, Datenminimierung und Speicherbegrenzung. Datenübertragbarkeit ist ein Betroffenenrecht (Art. 20), kein Grundsatz. Eine Einwilligung ist nur eine von sechs Rechtsgrundlagen – viele Verarbeitungen stützen sich z. B. auf einen Vertrag oder eine gesetzliche Pflicht." },
    { id: "q-dg-5", topic: "dsgvo-grundsaetze", type: "tf",
      q: "Widerruft eine Person ihre Einwilligung, wird die bis dahin erfolgte Verarbeitung rückwirkend rechtswidrig.",
      answer: false,
      explain: "Falsch. Der Widerruf wirkt nur für die Zukunft (Art. 7 Abs. 3). Die bis dahin auf die Einwilligung gestützte Verarbeitung bleibt rechtmäßig; ab dem Widerruf muss sie aber enden, sofern keine andere Rechtsgrundlage besteht." },
    { id: "q-dp-1", topic: "dsgvo-pflichten", type: "single",
      q: "Bis wann muss eine Datenpanne, die ein Risiko für die Betroffenen birgt, der Aufsichtsbehörde gemeldet werden?",
      options: ["binnen 72 Stunden nach dem Angriff, Wochenenden nicht mitgerechnet", "erst nach Abschluss der internen Untersuchung", "innerhalb eines Monats", "unverzüglich, möglichst binnen 72 Stunden nach Bekanntwerden"], answer: 3,
      explain: "Art. 33 verlangt eine Meldung unverzüglich und möglichst binnen 72 Stunden ab dem Zeitpunkt, an dem die Panne bekannt wurde – auch über das Wochenende. Auf das Ende der Untersuchung darf man nicht warten; fehlende Informationen können nachgereicht werden." },
    { id: "q-dp-2", topic: "dsgvo-pflichten", type: "single",
      q: "Welche Datenschutz-Aufsichtsbehörde ist für ein Unternehmen mit Sitz in Heide (Schleswig-Holstein) zuständig?",
      options: ["das Unabhängige Landeszentrum für Datenschutz (ULD)", "die IHK Flensburg", "die bzw. der Bundesbeauftragte für den Datenschutz (BfDI)", "das Bundesamt für Sicherheit in der Informationstechnik (BSI)"], answer: 0,
      explain: "Für Unternehmen und Landesbehörden in Schleswig-Holstein ist das ULD in Kiel zuständig. Der BfDI beaufsichtigt Bundesbehörden sowie Telekommunikations- und Postdienste. Das BSI ist für IT-Sicherheit zuständig, nicht für Datenschutzaufsicht, und die IHK ist keine Aufsichtsbehörde." },
    { id: "q-dp-3", topic: "dsgvo-pflichten", type: "multi",
      q: "Welche Maßnahmen nennt Art. 32 DSGVO ausdrücklich als Beispiele für TOM?",
      options: ["die Fähigkeit, Daten nach einem Zwischenfall rasch wiederherzustellen", "Pseudonymisierung und Verschlüsselung", "ein Verfahren zur regelmäßigen Überprüfung der Wirksamkeit der Maßnahmen", "die Benennung eines Pressesprechers für Datenpannen", "der Abschluss einer Cyberversicherung"], answer: [0, 1, 2],
      explain: "Art. 32 nennt u. a. Pseudonymisierung/Verschlüsselung, die dauerhafte Sicherstellung von Vertraulichkeit, Integrität, Verfügbarkeit und Belastbarkeit, die rasche Wiederherstellung und die regelmäßige Überprüfung. Pressesprecher und Versicherung können sinnvoll sein, stehen aber nicht im Gesetz – eine Versicherung schützt die Daten auch nicht." },
    { id: "q-dp-4", topic: "dsgvo-pflichten", type: "tf",
      q: "Beauftragt ein Unternehmen einen Cloud-Hoster mit der Speicherung seiner Kundendaten, geht die datenschutzrechtliche Verantwortung vollständig auf den Hoster über.",
      answer: false,
      explain: "Falsch. Der Hoster ist Auftragsverarbeiter nach Art. 28 und arbeitet nach Weisung. Der Auftraggeber bleibt Verantwortlicher: Er muss den Dienstleister sorgfältig auswählen, einen AVV abschließen und die Einhaltung kontrollieren." },
    { id: "q-dp-5", topic: "dsgvo-pflichten", type: "input",
      q: "Ab wie vielen Personen, die in der Regel ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt sind, muss ein Unternehmen nach § 38 BDSG einen Datenschutzbeauftragten benennen? (Zahl)",
      answer: ["20", "20 Personen", "ab 20"],
      explain: "Die Schwelle liegt bei mindestens 20 Personen. Unabhängig davon ist ein DSB z. B. Pflicht, wenn eine Datenschutz-Folgenabschätzung nötig ist oder besondere Kategorien umfangreich verarbeitet werden." },
    { id: "q-dp-6", topic: "dsgvo-pflichten", type: "single",
      q: "Ein Konzern mit 2 Mrd. € weltweitem Vorjahresumsatz verstößt gegen die Grundsätze des Art. 5 DSGVO. Wie hoch ist der maximale Bußgeldrahmen?",
      options: ["40 Mio. €", "20 Mio. €", "80 Mio. €", "10 Mio. €"], answer: 2,
      explain: "Verstöße gegen die Grundsätze fallen in die höhere Stufe: bis 20 Mio. € oder 4 % des weltweiten Jahresumsatzes, je nachdem, welcher Betrag höher ist. 4 % × 2.000.000.000 € = 80.000.000 € > 20 Mio. €. 40 Mio. € wären 2 % (niedrigere Stufe, bis 10 Mio. € oder 2 %)." },
    { id: "q-bsi-1", topic: "bsi-grundschutz", type: "single",
      q: "Welcher BSI-Standard beschreibt die IT-Grundschutz-Methodik mit Strukturanalyse, Schutzbedarfsfeststellung und Modellierung?",
      options: ["BSI-Standard 200-1", "BSI-Standard 200-3", "BSI-Standard 200-2", "BSI-Standard 200-4"], answer: 2,
      explain: "200-2 ist die Methodik (das „Wie“ Schritt für Schritt). 200-1 behandelt das ISMS, 200-3 die Risikoanalyse und 200-4 das Business Continuity Management." },
    { id: "q-bsi-2", topic: "bsi-grundschutz", type: "single",
      q: "Was geschieht beim IT-Grundschutz-Check?",
      options: ["Für jede Anforderung der modellierten Bausteine wird per Soll-Ist-Vergleich geprüft, ob sie umgesetzt ist.", "Die Geschäftsleitung unterschreibt die Sicherheitsleitlinie.", "Das BSI führt bei allen Unternehmen einen Penetrationstest durch.", "Der Schutzbedarf der Anwendungen wird in normal, hoch und sehr hoch eingeteilt."], answer: 0,
      explain: "Der Check folgt auf die Modellierung: Jede Anforderung wird als „ja“, „teilweise“, „nein“ oder „entbehrlich“ bewertet; die Lücken fließen in die Umsetzungsplanung. Die Einteilung des Schutzbedarfs ist ein früherer Schritt, die Leitlinie steht am Anfang, und das BSI testet nicht routinemäßig Unternehmen." },
    { id: "q-bsi-3", topic: "bsi-grundschutz", type: "single",
      q: "Welche Absicherungsvariante empfiehlt das BSI als vollständiges Vorgehen, das auch Grundlage einer ISO-27001-Zertifizierung auf Basis von IT-Grundschutz ist?",
      options: ["Notfall-Absicherung", "Kern-Absicherung", "Basis-Absicherung", "Standard-Absicherung"], answer: 3,
      explain: "Die Standard-Absicherung deckt den gesamten Informationsverbund umfassend ab. Die Basis-Absicherung ist ein schneller Einstieg mit Grundanforderungen, die Kern-Absicherung schützt zuerst nur die „Kronjuwelen“. Eine „Notfall-Absicherung“ gibt es als Variante nicht." },
    { id: "q-bsi-4", topic: "bsi-grundschutz", type: "multi",
      q: "Welche Aufgaben hat das BSI?",
      options: ["Softwarelizenzen für Unternehmen verkaufen", "jährlich einen Lagebericht zur IT-Sicherheit in Deutschland veröffentlichen", "Standards und Empfehlungen wie den IT-Grundschutz herausgeben", "Bußgelder für Verstöße gegen die DSGVO verhängen", "vor Sicherheitslücken und Angriffen warnen"], answer: [1, 2, 4],
      explain: "Das BSI warnt (u. a. über CERT-Bund), veröffentlicht den Lagebericht und entwickelt Standards; außerdem zertifiziert es und beaufsichtigt KRITIS- und NIS2-Einrichtungen. DSGVO-Bußgelder verhängen die Datenschutzaufsichtsbehörden (z. B. ULD), und Lizenzen verkauft das BSI nicht." },
    { id: "q-bsi-5", topic: "bsi-grundschutz", type: "input",
      q: "Welcher BSI-Standard beschreibt das Business Continuity Management (Notfallmanagement)? Gib die Nummer an.",
      answer: ["200-4", "BSI 200-4", "BSI-200-4", "BSI-Standard 200-4", "Standard 200-4"],
      explain: "BSI-Standard 200-4 (Business Continuity Management) hat den früheren Standard 100-4 (Notfallmanagement) abgelöst." },
    { id: "q-isms-1", topic: "isms-iso27001", type: "single",
      q: "Wer verabschiedet die Sicherheitsleitlinie eines Unternehmens?",
      options: ["der oder die Datenschutzbeauftragte", "die Geschäftsleitung", "der Betriebsrat", "der oder die Informationssicherheitsbeauftragte"], answer: 1,
      explain: "Die Leitlinie ist das Bekenntnis der Leitung zur Informationssicherheit; nur die Geschäftsleitung kann Ziele, Verantwortung und Ressourcen verbindlich festlegen. Der ISB erarbeitet sie häufig, der Betriebsrat kann mitbestimmen, verabschieden muss sie aber die Leitung." },
    { id: "q-isms-2", topic: "isms-iso27001", type: "single", exam: ["AP2"],
      q: "Welche Aussage zu ISO/IEC 27001 und ISO/IEC 27002 ist richtig?",
      options: ["ISO/IEC 27002 ist die zertifizierbare Norm, ISO/IEC 27001 nur ein unverbindlicher Leitfaden.", "ISO/IEC 27001 enthält zertifizierbare Anforderungen an ein ISMS, ISO/IEC 27002 gibt Umsetzungsempfehlungen für die Maßnahmen.", "Eine ISO/IEC-27001-Zertifizierung ersetzt die Pflichten aus der DSGVO.", "ISO/IEC 27001 und 27002 sind deutsche Gesetze, die jedes Unternehmen einhalten muss."], answer: 1,
      explain: "Zertifiziert wird nach 27001; 27002 erläutert die 93 Controls aus Anhang A. Normen sind keine Gesetze, sondern freiwillige Standards (außer ein Vertrag oder Gesetz verlangt sie). Die DSGVO gilt unabhängig von einer Zertifizierung." },
    { id: "q-isms-3", topic: "isms-iso27001", type: "multi",
      q: "Welche Tätigkeiten gehören in einem ISMS zur <strong>Check</strong>-Phase des PDCA-Zyklus?",
      options: ["ein internes Audit durchführen", "eine neue Firewall installieren", "Sicherheitsvorfälle auswerten", "die Wirksamkeit von Maßnahmen anhand von Kennzahlen prüfen", "Sicherheitsziele festlegen"], answer: [0, 2, 3],
      explain: "Check heißt überprüfen: Audits, Kennzahlen, Auswertung von Vorfällen. Das Installieren einer Firewall ist Umsetzung (Do), das Festlegen der Ziele gehört zu Plan." },
    { id: "q-isms-4", topic: "isms-iso27001", type: "tf", exam: ["AP2"],
      q: "Der RPO (Recovery Point Objective) gibt an, wie lange es höchstens dauern darf, bis ein ausgefallenes System wieder läuft.",
      answer: false,
      explain: "Falsch – das ist der RTO (Recovery Time Objective). Der RPO beschreibt den maximal tolerierbaren Datenverlust als Zeitraum und bestimmt damit, wie oft gesichert werden muss." },
    { id: "q-isms-5", topic: "isms-iso27001", type: "single", exam: ["AP2"],
      q: "Innerhalb welcher Frist muss eine Einrichtung, die unter die NIS2-Regeln fällt, einen erheblichen Sicherheitsvorfall zunächst als frühe Warnung an das BSI melden?",
      options: ["1 Monat", "7 Tage", "72 Stunden", "24 Stunden"], answer: 3,
      explain: "NIS2 sieht eine gestufte Meldung vor: frühe Warnung binnen 24 Stunden, ausführlichere Meldung binnen 72 Stunden, Abschlussbericht nach einem Monat. Die 72 Stunden kennst du auch aus Art. 33 DSGVO – dort geht es aber um Datenpannen an die Datenschutzaufsicht." },
    { id: "q-sb-1", topic: "schutzbedarf", type: "single",
      q: "Wie beschreibt das BSI die Schutzbedarfskategorie „hoch“?",
      options: ["Die Schadensauswirkungen können beträchtlich sein.", "Die Schadensauswirkungen sind begrenzt und überschaubar.", "Die Schadensauswirkungen können ein existenziell bedrohliches, katastrophales Ausmaß erreichen.", "Der Schaden liegt immer über 100.000 €."], answer: 0,
      explain: "normal = begrenzt und überschaubar, hoch = beträchtlich, sehr hoch = existenziell bedrohlich/katastrophal. Feste Euro-Beträge schreibt das BSI nicht vor – jedes Unternehmen legt eigene Grenzen fest." },
    { id: "q-sb-2", topic: "schutzbedarf", type: "single",
      q: "Auf einem Server laufen drei Anwendungen mit dem Schutzbedarf Vertraulichkeit „normal“, „hoch“ und „normal“. Welche Vertraulichkeit erhält der Server nach dem Maximumprinzip?",
      options: ["normal", "sehr hoch", "hoch", "Das lässt sich ohne Risikoanalyse nicht bestimmen."], answer: 2,
      explain: "Nach dem Maximumprinzip übernimmt das IT-System je Grundwert den höchsten Schutzbedarf der darauf laufenden Anwendungen – hier „hoch“. Es wird kein Durchschnitt gebildet; „sehr hoch“ wäre nur durch einen Kumulationseffekt begründbar." },
    { id: "q-sb-3", topic: "schutzbedarf", type: "single",
      q: "Ein Virtualisierungshost betreibt 20 virtuelle Server, die jeweils nur normale Verfügbarkeit benötigen. Warum kann der Host trotzdem einen hohen Schutzbedarf bei der Verfügbarkeit haben?",
      options: ["weil virtualisierte Systeme laut BSI grundsätzlich sehr hohen Schutzbedarf haben", "wegen des Maximumprinzips: Ein Host erhält immer eine Stufe mehr als seine Anwendungen", "wegen des Kumulationseffekts: Fällt er aus, sind alle 20 Server gleichzeitig weg und die Schäden summieren sich", "wegen des Verteilungseffekts: Die Last verteilt sich auf viele Server"], answer: 2,
      explain: "Viele einzeln unkritische Schäden können sich auf einem Objekt zu einem beträchtlichen Schaden addieren – das ist der Kumulationseffekt. Der Verteilungseffekt senkt den Schutzbedarf, und das Maximumprinzip erhöht nie automatisch um eine Stufe." },
    { id: "q-sb-4", topic: "schutzbedarf", type: "multi",
      q: "Welche gehören zu den Schadensszenarien, die das BSI für die Schutzbedarfsfeststellung vorschlägt?",
      options: ["finanzielle Auswirkungen", "Überschreitung des Hardware-Budgets der IT-Abteilung", "hohe Anzahl installierter Programme", "negative Innen- oder Außenwirkung", "Verstoß gegen Gesetze, Vorschriften oder Verträge", "Beeinträchtigung der persönlichen Unversehrtheit"], answer: [0, 3, 4, 5],
      explain: "Die sechs Szenarien lauten: Verstoß gegen Gesetze/Vorschriften/Verträge, Beeinträchtigung des informationellen Selbstbestimmungsrechts, der persönlichen Unversehrtheit und der Aufgabenerfüllung, negative Innen- oder Außenwirkung sowie finanzielle Auswirkungen. Budget oder Programmanzahl sind keine Schadensszenarien." },
    { id: "q-sb-5", topic: "schutzbedarf", type: "tf",
      q: "Der Verteilungseffekt kann den Schutzbedarf bei der Verfügbarkeit senken, wenn eine Anwendung auf mehrere redundante Systeme verteilt ist.",
      answer: true,
      explain: "Richtig. Fällt ein Knoten aus, übernehmen die anderen – das einzelne System ist weniger kritisch. Bei der Vertraulichkeit hilft das meist nicht, wenn auf jedem Knoten dieselben Daten liegen." },
    { id: "q-sp-1", topic: "schutzbedarf-praxis", type: "single",
      q: "In welcher Reihenfolge werden die Zielobjekte in der Strukturanalyse sinnvollerweise erfasst?",
      options: ["Geschäftsprozesse → Anwendungen → IT-Systeme → Räume → Kommunikationsverbindungen", "IT-Systeme → Räume → Anwendungen → Geschäftsprozesse → Kommunikationsverbindungen", "Räume → Kommunikationsverbindungen → IT-Systeme → Geschäftsprozesse → Anwendungen", "Anwendungen → Geschäftsprozesse → Räume → IT-Systeme → Kommunikationsverbindungen"], answer: 0,
      explain: "Man beginnt bei den Geschäftsprozessen und Informationen, weil von ihnen der Schutzbedarf ausgeht. Er wird dann über die Anwendungen auf die IT-Systeme und weiter auf Räume und Verbindungen vererbt." },
    { id: "q-sp-2", topic: "schutzbedarf-praxis", type: "single",
      q: "Wann dürfen Clients in der Strukturanalyse zu einer Gruppe zusammengefasst werden?",
      options: ["wenn sie vom selben Hersteller stammen", "wenn sie im selben Gebäude stehen", "immer, sobald es mehr als zehn Geräte sind", "wenn sie gleichen Typ, gleiche Konfiguration, gleiche Anwendungen, gleiches Einsatzumfeld und gleichen Schutzbedarf haben"], answer: 3,
      explain: "Gruppen sparen Aufwand, dürfen aber nichts verfälschen: Nur wirklich gleichartige Objekte mit gleichem Schutzbedarf werden zusammengefasst. Hersteller, Gebäude oder eine Mindestanzahl sind keine ausreichenden Kriterien – ein Chef-Notebook mit vertraulichen Unterlagen gehört z. B. nicht in die Gruppe der Standard-Clients." },
    { id: "q-sp-3", topic: "schutzbedarf-praxis", type: "multi",
      q: "Welche Sicherheitsaspekte gehören zum Umgang mit Standardsoftware über ihren Lebenszyklus?",
      options: ["Updates erst nach Ablauf der Gewährleistung installieren", "Endnutzern Adminrechte geben, damit sie Updates selbst installieren können", "bei der Deinstallation Restdaten entfernen und die Lizenz freigeben", "Makros aus dem Internet standardmäßig blockieren", "Installation nur aus vertrauenswürdigen Quellen mit geprüfter Prüfsumme oder Signatur"], answer: [2, 3, 4],
      explain: "Sichere Quellen, sichere Einstellungen (Makros blockieren) und eine saubere Deinstallation gehören dazu. Updates müssen zeitnah eingespielt werden, nicht erst nach Jahren, und Adminrechte für Endnutzer vergrößern die Angriffsfläche – Updates verteilt die IT zentral." },
    { id: "q-sp-4", topic: "schutzbedarf-praxis", type: "tf",
      q: "Eine Internetverbindung, über die vertrauliche Lohndaten an den Steuerberater übertragen werden, ist bei der Schutzbedarfsfeststellung als kritische Kommunikationsverbindung einzustufen.",
      answer: true,
      explain: "Richtig. Kritisch sind vor allem Außenverbindungen und Verbindungen, über die Daten mit hohem Schutzbedarf fließen. Folge: Die Daten dürfen nur verschlüsselt (z. B. TLS oder VPN) übertragen werden." },
    { id: "q-ra-1", topic: "risikoanalyse", type: "single",
      q: "Wie wird ein Risiko in der Risikoanalyse grundsätzlich bestimmt?",
      options: ["Schutzbedarf + Eintrittswahrscheinlichkeit", "Eintrittswahrscheinlichkeit × Schadenshöhe", "Anzahl der Schwachstellen ÷ Anzahl der Systeme", "Schadenshöhe − Kosten der Schutzmaßnahme"], answer: 1,
      explain: "Das Risiko kombiniert, wie oft etwas passiert und wie schlimm es dann ist. Qualitativ geschieht das über Skalen und eine Matrix, quantitativ über Häufigkeit pro Jahr × Schaden je Ereignis. Die anderen Formeln gibt es so nicht." },
    { id: "q-ra-2", topic: "risikoanalyse", type: "single",
      q: "Ein Unternehmen schließt eine Cyberversicherung ab. Welche Strategie der Risikobehandlung ist das?",
      options: ["Risikoakzeptanz", "Risikoübertragung (Transfer)", "Risikovermeidung", "Risikoreduktion durch technische Maßnahmen"], answer: 1,
      explain: "Die finanziellen Folgen werden auf einen Dritten (Versicherer) übertragen. Das Risiko selbst wird weder vermieden noch technisch verringert und auch nicht einfach hingenommen." },
    { id: "q-ra-3", topic: "risikoanalyse", type: "multi",
      q: "Welche Aussagen zum Restrisiko sind richtig?",
      options: ["Über die Akzeptanz des Restrisikos entscheidet die Person, die die Maßnahme technisch umsetzt.", "Trotz aller Maßnahmen bleibt immer ein Restrisiko bestehen.", "Eine Versicherung überträgt nur die finanziellen Folgen, nicht z. B. einen Imageschaden.", "Mit genügend Maßnahmen lässt sich jedes Risiko auf null senken.", "Die Geschäftsleitung muss das Restrisiko bewusst akzeptieren und dies dokumentieren."], answer: [1, 2, 4],
      explain: "Absolute Sicherheit gibt es nicht; das verbleibende Risiko muss die Leitung verantworten. Versicherungen ersetzen Geld, aber keinen Vertrauensverlust oder verlorene Daten. Techniker setzen um, entscheiden aber nicht über die Risikoakzeptanz." },
    { id: "q-ra-4", topic: "risikoanalyse", type: "input",
      q: "Auf Skalen von 1 bis 4 wird eine Gefährdung mit Eintrittswahrscheinlichkeit 3 (häufig) und Schadenshöhe 4 (existenzbedrohend) bewertet. Wie hoch ist der Risikowert?",
      answer: ["12"],
      explain: "Risikowert = 3 × 4 = 12. In einer Matrix mit den Klassen 1–3 gering, 4–6 mittel, 8–9 hoch und 12–16 sehr hoch wäre das ein sehr hohes Risiko." },
    { id: "q-ra-5", topic: "risikoanalyse", type: "input",
      q: "Ein Serverausfall tritt statistisch 0,25-mal pro Jahr auf und verursacht jeweils 80.000 € Schaden. Wie hoch ist die jährliche Schadenserwartung in Euro?",
      answer: ["20000", "20.000", "20000 €", "20.000 €", "20000 Euro", "20.000 Euro"],
      explain: "Schadenserwartung = Häufigkeit pro Jahr × Schaden je Ereignis = 0,25 × 80.000 € = 20.000 € pro Jahr. Eine Schutzmaßnahme lohnt sich, wenn sie diesen Wert um mehr senkt, als sie jährlich kostet." },
    { id: "q-mw-1", topic: "malware", type: "single",
      q: "Welches Merkmal unterscheidet einen Wurm von einem klassischen Computervirus?",
      options: ["Ein Wurm verschlüsselt stets Daten und fordert Lösegeld.", "Ein Wurm kann nur Linux-Systeme befallen.", "Ein Wurm tarnt sich immer als nützliches Programm.", "Ein Wurm verbreitet sich selbstständig über Netzwerke und braucht keine Wirtsdatei."], answer: 3,
      explain: "Viren hängen sich an Wirtsdateien und brauchen eine Nutzeraktion; Würmer sind eigenständig und verbreiten sich meist über Schwachstellen selbst. Die Tarnung als nützliches Programm kennzeichnet den Trojaner, und Verschlüsselung mit Lösegeld die Ransomware – ein Wurm kann sie transportieren (z. B. WannaCry), muss es aber nicht." },
    { id: "q-mw-2", topic: "malware", type: "single",
      q: "Eine Schadsoftware nistet sich tief im Betriebssystem ein und versteckt sich und andere Schadprogramme vor dem Virenscanner. Wie heißt sie?",
      options: ["Rootkit", "Keylogger", "Dropper", "Adware"], answer: 0,
      explain: "Rootkits dienen der Tarnung und sichern dauerhaften Zugriff mit höchsten Rechten, oft auf Kernel-Ebene. Keylogger zeichnen Tastatureingaben auf, Adware blendet Werbung ein und Dropper laden weitere Malware nach." },
    { id: "q-mw-3", topic: "malware", type: "single",
      q: "Was versteht man bei Ransomware unter „Double Extortion“?",
      options: ["Zwei verschiedene Tätergruppen greifen gleichzeitig an.", "Das Lösegeld wird in zwei Raten gefordert.", "Die Täter kopieren die Daten vor der Verschlüsselung und drohen zusätzlich mit ihrer Veröffentlichung.", "Die Daten werden zweimal hintereinander verschlüsselt."], answer: 2,
      explain: "Doppelte Erpressung: Selbst wer ein gutes Backup hat, wird mit der Veröffentlichung gestohlener Daten unter Druck gesetzt. Damit sind Verfügbarkeit und Vertraulichkeit betroffen – und meist greift die Meldepflicht nach Art. 33 DSGVO." },
    { id: "q-mw-4", topic: "malware", type: "multi",
      q: "Welche Maßnahmen schützen wirksam vor Ransomware bzw. begrenzen ihre Folgen?",
      options: ["Arbeiten ohne Administratorrechte", "regelmäßige Offline-Backups mit getesteter Wiederherstellung", "Virenschutz deaktivieren, um Fehlalarme zu vermeiden", "tägliche Synchronisation aller Daten auf ein ständig verbundenes NAS", "zeitnahes Einspielen von Sicherheitsupdates"], answer: [0, 1, 4],
      explain: "Offline-Backups ermöglichen die Wiederherstellung, Updates schließen Einfallstore, und ohne Adminrechte richtet Schadsoftware weniger Schaden an. Eine Synchronisation auf ein ständig verbundenes NAS kopiert verschlüsselte Dateien einfach mit, und ein abgeschalteter Virenschutz öffnet Tür und Tor." },
    { id: "q-mw-5", topic: "malware", type: "tf",
      q: "Ein Trojaner verbreitet sich wie ein Wurm selbstständig von Rechner zu Rechner.",
      answer: false,
      explain: "Falsch. Ein Trojaner tarnt sich als nützliches Programm und wird vom Opfer selbst installiert; er verbreitet sich nicht eigenständig. Er kann aber weitere Malware nachladen oder eine Hintertür öffnen." },
    { id: "q-an-1", topic: "angriffe", type: "single",
      q: "Eine Buchhalterin erhält eine Mail des angeblichen Geschäftsführers: Sie solle sofort und streng vertraulich 48.000 € an einen neuen Lieferanten überweisen. Wie heißt diese Angriffsform?",
      options: ["Credential Stuffing", "DDoS-Angriff", "CEO-Fraud", "Tailgating"], answer: 2,
      explain: "Beim CEO-Fraud geben sich Täter als Führungskraft aus und nutzen Autorität, Zeitdruck und Geheimhaltung aus – eine Form des Social Engineering. Schutz: Zahlungsanweisungen über einen bekannten Kanal rückbestätigen, Vier-Augen-Prinzip. DDoS überlastet Dienste, Credential Stuffing testet geleakte Passwörter, Tailgating ist das Mitgehen durch eine Tür." },
    { id: "q-an-2", topic: "angriffe", type: "single",
      q: "Was kennzeichnet einen DDoS-Angriff?",
      options: ["Viele verteilte Systeme überfluten einen Dienst mit Anfragen, bis er nicht mehr erreichbar ist.", "Ein Angreifer probiert gestohlene Zugangsdaten bei vielen Diensten aus.", "Ein Angreifer schaltet sich unbemerkt in eine Verbindung und liest mit.", "Eine Schadsoftware verschlüsselt die Daten eines Servers."], answer: 0,
      explain: "Distributed Denial of Service zielt auf die Verfügbarkeit; die Anfragen kommen oft aus einem Botnetz. Mitlesen ist ein Man-in-the-Middle-Angriff, das Durchprobieren geleakter Zugangsdaten Credential Stuffing und das Verschlüsseln Ransomware." },
    { id: "q-an-3", topic: "angriffe", type: "single",
      q: "Was ist typisch für einen APT (Advanced Persistent Threat)?",
      options: ["ein kurzer Überlastungsangriff auf eine Webseite", "ein Hardwaredefekt durch Überspannung", "ein ungezielter Massenversand von Spam-Mails", "ein zielgerichteter, technisch anspruchsvoller Angriff, der lange unentdeckt im Netzwerk bleibt"], answer: 3,
      explain: "„Advanced“ = anspruchsvoll, „Persistent“ = dauerhaft: APT-Gruppen, oft staatlich unterstützt, spähen gezielt aus, bewegen sich im Netz weiter und leiten Daten ab. Massen-Spam und DDoS sind ungezielt bzw. kurzzeitig, ein Hardwaredefekt ist gar kein Angriff." },
    { id: "q-an-4", topic: "angriffe", type: "multi",
      q: "Welche Merkmale deuten auf eine Phishing-Mail hin?",
      options: ["eine Signatur, die das Mailprogramm als gültig für den bekannten Absender anzeigt", "eine erwartete Terminbestätigung ohne Link von der korrekten Firmendomain", "Zeitdruck und Drohungen wie „Ihr Konto wird in 24 Stunden gesperrt“", "die Aufforderung, Passwort oder TAN einzugeben", "ein Link, dessen tatsächliches Ziel von der angezeigten Adresse abweicht"], answer: [2, 3, 4],
      explain: "Druck, abweichende Link-Ziele und die Abfrage von Zugangsdaten sind klassische Phishing-Merkmale. Eine erwartete Nachricht ohne Link von der echten Domain und eine gültige Signatur des bekannten Absenders sprechen dagegen eher für eine echte Mail." },
    { id: "q-an-5", topic: "angriffe", type: "tf",
      q: "Beim Credential Stuffing probieren Angreifer geleakte Kombinationen aus E-Mail-Adresse und Passwort automatisiert bei vielen anderen Diensten aus.",
      answer: true,
      explain: "Richtig. Der Angriff klappt, wenn Nutzer dasselbe Passwort mehrfach verwenden. Schutz: für jeden Dienst ein eigenes Passwort (Passwortmanager) und MFA." },
    { id: "q-ms-1", topic: "massnahmen", type: "single",
      q: "Zu welcher Kontrolle gehört eine automatische Bildschirmsperre, die sich nur mit Passwort aufheben lässt?",
      options: ["Zugriffskontrolle", "Zugangskontrolle", "Zutrittskontrolle", "Weitergabekontrolle"], answer: 1,
      explain: "Zugangskontrolle verhindert, dass Unbefugte ein IT-System nutzen (Login, Sperre). Zutritt betrifft Räume, Zugriff die Rechte auf bestimmte Daten, Weitergabe die sichere Übertragung." },
    { id: "q-ms-2", topic: "massnahmen", type: "single",
      q: "Was besagt die 3-2-1-Regel der Datensicherung?",
      options: ["3 Festplatten im Server, davon 2 gespiegelt und 1 als Reserve", "3 Kopien der Daten auf 2 verschiedenen Speichermedien, davon 1 außer Haus", "Sicherungen 3 Tage, 2 Wochen und 1 Monat aufbewahren", "3 Vollsicherungen pro Woche, 2 inkrementelle pro Tag, 1 Wiederherstellungstest pro Jahr"], answer: 1,
      explain: "Drei Kopien (inklusive Original), zwei unterschiedliche Medientypen und eine Kopie an einem anderen Ort schützen vor Hardwaredefekt, Brand und Diebstahl. Gegen Ransomware kommt heute eine Offline- oder unveränderbare Kopie hinzu. Gespiegelte Platten sind Redundanz, kein Backup." },
    { id: "q-ms-3", topic: "massnahmen", type: "multi",
      q: "Welche der folgenden Maßnahmen sind <strong>organisatorisch</strong>?",
      options: ["Clean-Desk-Regel", "Vier-Augen-Prinzip bei Zahlungsfreigaben", "Festplattenverschlüsselung mit BitLocker", "Brandmeldeanlage im Serverraum", "Passwortrichtlinie"], answer: [0, 1, 4],
      explain: "Organisatorische Maßnahmen sind Regeln und Abläufe. Die Festplattenverschlüsselung ist eine technische Maßnahme, die Brandmeldeanlage eine infrastrukturelle (bauliche)." },
    { id: "q-ms-4", topic: "massnahmen", type: "tf",
      q: "Container teilen sich den Kernel des Host-Betriebssystems und sind deshalb schwächer voneinander isoliert als virtuelle Maschinen.",
      answer: true,
      explain: "Richtig. Container isolieren über Kernel-Mechanismen und sind leichtgewichtig; eine VM bringt einen eigenen Kernel mit und ist stärker abgeschottet. Container sollten daher ohne root-Rechte, mit minimalen Rechten und aktuellen Images betrieben werden." },
    { id: "q-ms-5", topic: "massnahmen", type: "input",
      q: "Nach einer Vollsicherung ändern sich täglich 10 GiB Daten (jeden Tag andere Dateien). Wie groß ist die <strong>differenzielle</strong> Sicherung am dritten Tag nach der Vollsicherung (in GiB)?",
      answer: ["30", "30 GiB", "30GiB", "30 GB"],
      explain: "Eine differenzielle Sicherung enthält alle Änderungen seit der letzten Vollsicherung: 3 × 10 GiB = 30 GiB. Eine inkrementelle Sicherung am dritten Tag wäre nur 10 GiB groß (Änderungen seit der letzten Sicherung)." },
    { id: "q-pk-1", topic: "passwort-krypto", type: "single",
      q: "Welche Kombination ist eine echte Zwei-Faktor-Authentifizierung?",
      options: ["Benutzername und Passwort", "Passwort und Antwort auf eine Sicherheitsfrage", "PIN und Passwort", "Passwort und Einmalcode aus einer Authenticator-App auf dem Smartphone"], answer: 3,
      explain: "2FA verlangt zwei unterschiedliche Faktoren: hier Wissen (Passwort) und Besitz (Smartphone mit App). Sicherheitsfrage, PIN und Passwort sind alle „Wissen“, und der Benutzername ist gar kein Geheimnis." },
    { id: "q-pk-2", topic: "passwort-krypto", type: "single",
      q: "Anna möchte Ben eine Nachricht asymmetrisch verschlüsselt schicken, die nur Ben lesen kann. Mit welchem Schlüssel verschlüsselt sie?",
      options: ["mit Bens öffentlichem Schlüssel", "mit Bens privatem Schlüssel", "mit Annas privatem Schlüssel", "mit Annas öffentlichem Schlüssel"], answer: 0,
      explain: "Verschlüsselt wird mit dem öffentlichen Schlüssel des Empfängers – entschlüsseln kann nur er mit seinem privaten Schlüssel. Bens privaten Schlüssel kennt Anna gar nicht. Mit Annas privatem Schlüssel würde sie signieren, nicht vertraulich verschlüsseln." },
    { id: "q-pk-3", topic: "passwort-krypto", type: "multi",
      q: "Welche Schutzziele stellt eine digitale Signatur sicher?",
      options: ["Verbindlichkeit", "Verfügbarkeit", "Vertraulichkeit", "Authentizität", "Integrität"], answer: [0, 3, 4],
      explain: "Über den signierten Hashwert erkennt der Empfänger jede Änderung (Integrität) und sieht, wer signiert hat (Authentizität); der Absender kann die Signatur nicht abstreiten (Verbindlichkeit). Lesen kann die Nachricht trotzdem jeder – für Vertraulichkeit braucht man zusätzlich Verschlüsselung. Die Verfügbarkeit betrifft die Signatur nicht." },
    { id: "q-pk-4", topic: "passwort-krypto", type: "tf",
      q: "Ein Hashwert ist eine Verschlüsselung, die sich mit dem passenden Schlüssel wieder in die Originaldaten zurückrechnen lässt.",
      answer: false,
      explain: "Falsch. Eine Hashfunktion ist eine Einwegfunktion ohne Schlüssel: Aus dem Hashwert lassen sich die Daten nicht zurückberechnen. Deshalb eignen sich Hashwerte zur Integritätsprüfung und (gesalzen) zum Speichern von Passwörtern." },
    { id: "q-pk-5", topic: "passwort-krypto", type: "input",
      q: "Wie viele Schlüssel werden benötigt, wenn 10 Personen paarweise mit einem <strong>symmetrischen</strong> Verfahren vertraulich kommunizieren wollen?",
      answer: ["45", "45 Schlüssel"],
      explain: "Jedes Paar braucht einen eigenen Schlüssel: n × (n − 1) ÷ 2 = 10 × 9 ÷ 2 = 45. Asymmetrisch wären es nur 2 × 10 = 20 Schlüssel (je ein Paar pro Person)." },
    { id: "q-ur-1", topic: "urheberrecht-lizenzen", type: "single",
      q: "Wann entsteht in Deutschland das Urheberrecht an einem selbst geschriebenen Programm?",
      options: ["erst mit dem Anbringen eines ©-Vermerks", "erst mit der ersten Veröffentlichung im Internet", "automatisch mit der Schöpfung des Werks", "erst mit der Eintragung beim Deutschen Patent- und Markenamt"], answer: 2,
      explain: "Das Urheberrecht entsteht formlos mit der Schöpfung – ohne Anmeldung, Eintragung oder Vermerk. Beim DPMA werden Marken und Patente eingetragen, nicht Urheberrechte. Der ©-Vermerk hat in Deutschland nur Hinweisfunktion." },
    { id: "q-ur-2", topic: "urheberrecht-lizenzen", type: "single",
      q: "Wie lange besteht das Urheberrecht nach deutschem Recht?",
      options: ["10 Jahre ab Veröffentlichung, beliebig oft verlängerbar", "20 Jahre ab Anmeldung", "bis 70 Jahre nach dem Tod des Urhebers", "bis 50 Jahre nach der ersten Veröffentlichung"], answer: 2,
      explain: "§ 64 UrhG: Der Schutz erlischt 70 Jahre nach dem Tod des Urhebers; danach ist das Werk gemeinfrei. 10 Jahre mit Verlängerung gelten für Marken, 20 Jahre ab Anmeldung für Patente." },
    { id: "q-ur-3", topic: "urheberrecht-lizenzen", type: "single",
      q: "Welche Aussage zur GNU General Public License (GPL) ist richtig?",
      options: ["Wer ein abgeleitetes Programm weitergibt, muss es wieder unter der GPL mit Quellcode weitergeben.", "GPL-Code darf in proprietäre Programme eingebaut werden, ohne dass der Quellcode offengelegt wird.", "GPL-Software ist gemeinfrei und unterliegt keinen Lizenzbedingungen.", "GPL-Software darf grundsätzlich nicht verkauft werden."], answer: 0,
      explain: "Das ist das Copyleft-Prinzip. Verkaufen ist ausdrücklich erlaubt – nur Quellcode und Freiheiten müssen weitergegeben werden. Den Code ohne Offenlegung in proprietäre Software einzubauen, verletzt die Lizenz; und GPL-Software ist urheberrechtlich geschützt, also nicht gemeinfrei." },
    { id: "q-ur-4", topic: "urheberrecht-lizenzen", type: "multi",
      q: "Welche Lizenzen gelten als permissive (freizügige) Open-Source-Lizenzen?",
      options: ["EULA eines kommerziellen Office-Pakets", "GNU GPL", "Apache License 2.0", "MIT-Lizenz", "BSD-Lizenz"], answer: [2, 3, 4],
      explain: "MIT, Apache 2.0 und BSD erlauben den Einbau in proprietäre Software, solange Lizenz- und Urheberhinweise erhalten bleiben. Die GPL ist eine Copyleft-Lizenz, und eine EULA regelt die Nutzung proprietärer Software – sie ist keine Open-Source-Lizenz." },
    { id: "q-ur-5", topic: "urheberrecht-lizenzen", type: "tf",
      q: "Freeware ist immer Open-Source-Software, weil sie kostenlos weitergegeben wird.",
      answer: false,
      explain: "Falsch. Freeware ist nur kostenlos; der Quellcode ist meist nicht verfügbar, und die Nutzung ist oft eingeschränkt (z. B. nur privat). Open Source bedeutet offenen Quellcode und das Recht, ihn zu ändern und weiterzugeben – kostenlos muss Open Source dagegen nicht sein." },
    { id: "q-ur-6", topic: "urheberrecht-lizenzen", type: "single",
      q: "Wie lange ist eine beim DPMA eingetragene Marke geschützt?",
      options: ["20 Jahre, nicht verlängerbar", "unbegrenzt ab Eintragung, ohne dass eine Verlängerung nötig ist", "bis 70 Jahre nach dem Tod des Anmelders", "10 Jahre, beliebig oft um jeweils 10 Jahre verlängerbar"], answer: 3,
      explain: "Nach dem Markengesetz beträgt die Schutzdauer 10 Jahre und lässt sich gegen Gebühr immer wieder um 10 Jahre verlängern. 70 Jahre nach dem Tod gilt beim Urheberrecht; ohne Verlängerung erlischt eine Marke." },
    { id: "q-ki-1", topic: "ki-telemetrie", type: "single",
      q: "In welche Risikoklasse der EU-KI-Verordnung fällt ein KI-System, das Bewerbungen automatisch vorsortiert und aussortiert?",
      options: ["begrenztes Risiko (nur Transparenzpflichten)", "hohes Risiko", "unannehmbares Risiko (verboten)", "minimales Risiko"], answer: 1,
      explain: "KI im Bereich Beschäftigung und Personalauswahl zählt ausdrücklich zu den Hochrisiko-Anwendungen: Sie ist erlaubt, aber mit strengen Pflichten wie Risikomanagement, Dokumentation und menschlicher Aufsicht. Verboten sind z. B. Social Scoring oder Emotionserkennung am Arbeitsplatz." },
    { id: "q-ki-2", topic: "ki-telemetrie", type: "single",
      q: "Welche Pflicht gilt nach der KI-Verordnung für einen Chatbot im Kundenservice?",
      options: ["Er braucht eine Konformitätsbewertung wie ein Hochrisiko-System.", "Die Nutzer müssen erkennen können, dass sie mit einer KI kommunizieren.", "Für Chatbots gelten ausschließlich die Regeln der DSGVO, nicht die KI-Verordnung.", "Der Chatbot ist verboten."], answer: 1,
      explain: "Chatbots fallen unter das begrenzte Risiko (Transparenzrisiko): Es muss offengelegt werden, dass eine KI antwortet. Verboten ist ein Chatbot nicht, und eine Konformitätsbewertung braucht er nur, wenn er in einem Hochrisiko-Bereich eingesetzt wird. Die DSGVO gilt zusätzlich, ersetzt die KI-Verordnung aber nicht." },
    { id: "q-ki-3", topic: "ki-telemetrie", type: "multi",
      q: "Welche KI-Praktiken sind nach der EU-KI-Verordnung verboten?",
      options: ["Emotionserkennung am Arbeitsplatz zur Leistungskontrolle", "KI-basierte Spamfilter", "manipulative Techniken, die Menschen unbemerkt zu schädlichem Verhalten verleiten", "Social Scoring, also die Bewertung von Menschen nach ihrem sozialen Verhalten", "KI-gestützte Rechtschreibprüfung"], answer: [0, 2, 3],
      explain: "Diese Praktiken bergen ein unannehmbares Risiko und sind seit Februar 2025 verboten (Emotionserkennung am Arbeitsplatz mit engen Ausnahmen, z. B. aus medizinischen Gründen). Spamfilter und Rechtschreibprüfung haben nur ein minimales Risiko und keine besonderen Pflichten." },
    { id: "q-ki-4", topic: "ki-telemetrie", type: "tf",
      q: "Die Metadaten eines Smartphone-Fotos können die GPS-Koordinaten des Aufnahmeorts enthalten.",
      answer: true,
      explain: "Richtig. EXIF-Daten speichern oft Standort, Zeitpunkt und Gerätemodell. Vor einer Veröffentlichung sollten sie entfernt werden, z. B. mit „Eigenschaften und persönliche Informationen entfernen“ oder einem Tool wie exiftool." },
    { id: "q-ki-5", topic: "ki-telemetrie", type: "single",
      q: "Was versteht man unter Telemetrie bei Software?",
      options: ["die Messung der Signalstärke im WLAN", "die Verschlüsselung von Daten während der Übertragung", "die Fernwartung eines PCs durch den IT-Support", "die automatische Übertragung von Nutzungs-, Diagnose- und Fehlerdaten an den Hersteller"], answer: 3,
      explain: "Telemetriedaten helfen Herstellern bei Fehlersuche und Produktverbesserung, können aber personenbezogen sein (Geräte-ID, IP-Adresse, Nutzungsverhalten). Unternehmen begrenzen sie z. B. per Gruppenrichtlinie. Fernwartung, WLAN-Messung und Transportverschlüsselung sind andere Themen." },
    { id: "q-ms-6", topic: "massnahmen", type: "single",
      q: "Ein Mitarbeiter der Personalabteilung wünscht lokale Administratorrechte. Welches ist das stärkste Sicherheitsargument dagegen?",
      options: ["Schadsoftware, die er versehentlich startet, liefe mit vollen Rechten und könnte Schutzmechanismen abschalten.", "Mit Adminrechten kann er sich nicht mehr an der Domäne anmelden.", "Mit Adminrechten wird der Rechner spürbar langsamer.", "Adminrechte sind nach der DSGVO grundsätzlich verboten."], answer: 0,
      explain: "Das Prinzip der minimalen Rechte (Least Privilege) begrenzt den Schaden: Schadcode erhält nur die Rechte des angemeldeten Benutzers. Adminrechte bremsen den PC nicht, sind nicht per DSGVO verboten und verhindern auch keine Domänenanmeldung." },
    { id: "q-ms-7", topic: "massnahmen", type: "single",
      q: "Warum muss vor der Einführung einer Videoüberwachung im Lager der Betriebsrat beteiligt werden?",
      options: ["Weil der Betriebsrat die Aufnahmen täglich auswerten muss.", "Weil der Betriebsrat die Datenschutz-Aufsichtsbehörde im Unternehmen ist.", "Weil technische Einrichtungen, mit denen Verhalten oder Leistung der Beschäftigten überwacht werden können, mitbestimmungspflichtig sind (§ 87 BetrVG).", "Weil nur der Betriebsrat Kameras beschaffen darf."], answer: 2,
      explain: "Nach § 87 Abs. 1 Nr. 6 BetrVG hat der Betriebsrat ein Mitbestimmungsrecht bei Überwachungstechnik; üblich ist eine Betriebsvereinbarung. Aufsichtsbehörde ist z. B. das ULD, Beschaffung und Auswertung sind nicht Aufgabe des Betriebsrats." },
    { id: "q-pk-6", topic: "passwort-krypto", type: "single",
      q: "Eine Kanzlei verschickt Mandantendaten per E-Mail; ihr Mailserver nutzt TLS. Welche Aussage ist richtig?",
      options: ["Mit TLS liegt die Mail auch auf allen Mailservern verschlüsselt vor.", "TLS signiert jede Mail automatisch, sodass keine digitale Signatur mehr nötig ist.", "TLS schützt nur den Transportweg; für Vertraulichkeit bis zum Empfänger ist eine Ende-zu-Ende-Verschlüsselung (S/MIME oder PGP) nötig.", "Bei TLS werden keine Zertifikate verwendet."], answer: 2,
      explain: "TLS sichert die Verbindung zwischen Client und Server bzw. zwischen Servern; auf den Servern ist die Mail im Klartext lesbar. Nur Ende-zu-Ende-Verfahren verschlüsseln den Inhalt bis zum Empfänger. TLS signiert keine einzelnen Mails, nutzt aber sehr wohl Zertifikate." },
    { id: "q-dp-7", topic: "dsgvo-pflichten", type: "tf",
      q: "Eine Einladung an 60 externe Kunden sollte mit allen Adressen im Feld „CC“ verschickt werden, damit jeder sieht, wer eingeladen ist.",
      answer: false,
      explain: "Falsch. Im CC-Feld sehen alle Empfänger die Adressen der anderen – das legt personenbezogene Daten ohne Rechtsgrundlage offen und kann eine meldepflichtige Datenpanne sein. Richtig ist das Feld BCC." },
    { id: "q-ra-6", topic: "risikoanalyse", type: "input", exam: ["AP2"],
      q: "Ein Server fällt 4 Stunden aus. Pro Stunde entstehen 2.500 € Kosten, die Wiederherstellung kostet einmalig 1.200 €. Wie hoch sind die Ausfallkosten in Euro?",
      answer: ["11200", "11.200", "11200 €", "11.200 €", "11200 Euro", "11.200 Euro"],
      explain: "Ausfallkosten = Kosten je Stunde × Ausfalldauer + Wiederherstellungsaufwand = 2.500 € × 4 + 1.200 € = 10.000 € + 1.200 € = 11.200 €." },
    { id: "q-ki-6", topic: "ki-telemetrie", type: "multi",
      q: "Welche Regeln gehören in eine sinnvolle KI-Richtlinie eines Unternehmens?",
      options: ["nur vom Unternehmen freigegebene KI-Tools verwenden", "keine personenbezogenen oder vertraulichen Daten in öffentliche Chatbots eingeben", "KI-generierte Inhalte ohne Kennzeichnung als eigene Arbeit veröffentlichen", "Zugangsdaten für KI-Dienste im Team teilen, um Lizenzkosten zu sparen", "KI-Ergebnisse vor der Verwendung fachlich prüfen"], answer: [0, 1, 4],
      explain: "Freigegebene Tools (mit Vertrag/AVV), Datensparsamkeit und die Prüfung der Ergebnisse (Halluzinationen) sind Kern einer KI-Richtlinie. Künstlich erzeugte Inhalte wie Deepfakes müssen je nach Fall gekennzeichnet werden, und geteilte Zugangsdaten verstoßen gegen Lizenzbedingungen und die Nachvollziehbarkeit." },
    { id: "q-pk-7", topic: "passwort-krypto", type: "single",
      q: "Eine Mitarbeiterin will mit Notebook und Smartphone auf dasselbe Postfach zugreifen. Die Mails sollen auf dem Server bleiben, und die Verbindung soll von Anfang an per TLS verschlüsselt sein. Was passt?",
      options: ["IMAP über Port 993", "POP3 über Port 995", "IMAP über Port 143", "SMTP über Port 587"], answer: 0,
      explain: "IMAP lässt die Mails auf dem Server und synchronisiert alle Geräte; Port 993 ist IMAP mit TLS von Anfang an. Port 143 ist IMAP unverschlüsselt bzw. mit nachträglichem STARTTLS. POP3 lädt die Mails herunter und löscht sie meist auf dem Server, und SMTP (587) dient dem Versand, nicht dem Abruf." },
    { id: "q-pk-8", topic: "passwort-krypto", type: "tf",
      q: "Beim Abruf per POP3 bleiben die Mails standardmäßig auf dem Server und werden auf allen Geräten synchronisiert.",
      answer: false,
      explain: "Falsch – das beschreibt IMAP. POP3 lädt die Mails auf ein Gerät herunter und löscht sie in der Regel auf dem Server. Geht das Gerät verloren, sind die Mails weg bzw. in fremden Händen." },
    { id: "q-ms-8", topic: "massnahmen", type: "single",
      q: "Warum ist es unsicher, eine SSD vor der Weitergabe nur mit einem Überschreibprogramm zu löschen?",
      options: ["Eine SSD verteilt Schreibvorgänge intern auf wechselnde Speicherzellen (Wear-Leveling) und hat Reservebereiche, sodass nicht sicher alle alten Daten überschrieben werden.", "Eine SSD lässt sich nicht mehr beschreiben, sobald sie einmal voll war.", "Beim Überschreiben wird die SSD sofort physisch zerstört und kann nicht weitergegeben werden.", "Eine SSD speichert Daten nur flüchtig, deshalb gibt es nach dem Ausschalten nichts zu löschen."], answer: 0,
      explain: "Der Controller der SSD entscheidet selbst, in welche Zellen geschrieben wird; alte Daten können in Reservebereichen erhalten bleiben. Sicher sind Secure Erase, Crypto-Erase bei verschlüsselten Laufwerken oder die physische Vernichtung. SSDs speichern Daten dauerhaft (nicht flüchtig), sind nach dem Vollschreiben weiter nutzbar und werden durch Überschreiben nicht zerstört." },
    { id: "q-ms-9", topic: "massnahmen", type: "single", exam: ["AP1", "AP2"],
      q: "Personalakten mit hohem Schutzbedarf bei der Vertraulichkeit sollen nach DIN 66399 vernichtet werden. Welche Schutzklasse ist mindestens zu wählen?",
      options: ["Schutzklasse 1", "Schutzklasse 2", "Schutzklasse 3", "Schutzklasse 7"], answer: 1,
      explain: "Die drei Schutzklassen entsprechen den Schutzbedarfskategorien: 1 = normal, 2 = hoch, 3 = sehr hoch. Hoher Schutzbedarf → Schutzklasse 2 (z. B. Sicherheitsstufe 4, bei Papier P-4). Eine Schutzklasse 7 gibt es nicht – sieben Stufen gibt es nur bei den Sicherheitsstufen (1–7)." },
    { id: "q-ms-10", topic: "massnahmen", type: "tf",
      q: "Security by Default bedeutet, dass ein Produkt schon im Auslieferungszustand sicher eingestellt ist – z. B. mit individuellem Initialpasswort statt eines Standardpassworts für alle Geräte.",
      answer: true,
      explain: "Richtig. Security by Default betrifft die Voreinstellungen ab Werk. Security by Design meint dagegen, dass Sicherheit schon bei Planung und Entwicklung berücksichtigt wird." },
    { id: "q-ms-11", topic: "massnahmen", type: "multi",
      q: "Welche Aussagen zu einem NAS als Maßnahme für die Verfügbarkeit sind richtig?",
      options: ["Snapshots ermöglichen es, versehentlich gelöschte oder überschriebene Dateien schnell zurückzuholen.", "Die Daten liegen zentral und können dadurch zentral gesichert werden.", "Ein NAS mit mehreren Festplatten ersetzt das Offline-Backup.", "Ein NAS ist grundsätzlich vor Ransomware geschützt, weil es kein Windows-PC ist."], answer: [0, 1],
      explain: "Zentrale Ablage und Snapshots erhöhen die Verfügbarkeit. Ein NAS im selben Netz ist aber für Ransomware erreichbar und steht oft im selben Raum – mehrere Platten schützen nur vor Plattendefekten, nicht vor Löschen, Verschlüsselung oder Brand. Deshalb bleibt ein Offline- bzw. Offsite-Backup nach der 3-2-1-Regel nötig." },
  ],
  cards: [
    { topic: "grundlagen", f: "Datenschutz vs. Datensicherheit", b: "Datenschutz schützt den Menschen (informationelle Selbstbestimmung). Datensicherheit schützt Daten jeder Art vor Verlust, Manipulation und unbefugtem Zugriff." },
    { topic: "grundlagen", f: "Informationssicherheit", b: "Umfassendster Begriff: Schutz aller Informationen – digital und analog (Papier, Gespräche) – nicht nur der IT." },
    { topic: "grundlagen", f: "Die drei Grundwerte (CIA)", b: "Vertraulichkeit, Integrität, Verfügbarkeit – ergänzt um Authentizität und Verbindlichkeit." },
    { topic: "grundlagen", f: "Integrität", b: "Daten sind vollständig und unverändert bzw. Änderungen sind erkennbar; Systeme arbeiten korrekt." },
    { topic: "grundlagen", f: "Verbindlichkeit", b: "Nichtabstreitbarkeit: Eine Handlung ist dem Urheber nachweisbar zugeordnet (z. B. durch qualifizierte Signatur)." },
    { topic: "grundlagen", f: "Formel Verfügbarkeit", b: "(Gesamtzeit − Ausfallzeit) ÷ Gesamtzeit × 100 %. Beispiel: 99,9 % pro Jahr → 8,76 h Ausfall erlaubt." },
    { topic: "grundlagen", f: "ISB vs. DSB", b: "ISB: steuert die Informationssicherheit aller Informationen. DSB: gesetzlich, weisungsfrei, schützt die Rechte Betroffener bei personenbezogenen Daten." },
    { topic: "dsgvo-grundsaetze", f: "Personenbezogene Daten (Art. 4 Nr. 1)", b: "Alle Informationen über eine identifizierte oder identifizierbare natürliche Person – z. B. Name, E-Mail, IP-Adresse, Kfz-Kennzeichen." },
    { topic: "dsgvo-grundsaetze", f: "Besondere Kategorien (Art. 9)", b: "Gesundheit, Religion, ethnische Herkunft, politische Meinung, Gewerkschaft, Genetik, Biometrie, Sexualleben – nur ausnahmsweise verarbeitbar." },
    { topic: "dsgvo-grundsaetze", f: "Verbot mit Erlaubnisvorbehalt", b: "Verarbeitung ist verboten, außer eine Rechtsgrundlage nach Art. 6 greift (Einwilligung, Vertrag, rechtliche Pflicht, lebenswichtige Interessen, öffentliche Aufgabe, berechtigtes Interesse)." },
    { topic: "dsgvo-grundsaetze", f: "Grundsätze Art. 5 DSGVO", b: "Rechtmäßigkeit/Transparenz, Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung, Integrität und Vertraulichkeit + Rechenschaftspflicht." },
    { topic: "dsgvo-grundsaetze", f: "Frist für Auskunft (Art. 12)", b: "Unverzüglich, spätestens 1 Monat nach Eingang; bei komplexen Fällen um 2 Monate verlängerbar (mit Begründung)." },
    { topic: "dsgvo-grundsaetze", f: "Pseudonymisierung", b: "Namen durch Kennzeichen ersetzen, Zuordnung getrennt aufbewahren – umkehrbar, Daten bleiben personenbezogen." },
    { topic: "dsgvo-grundsaetze", f: "Widerruf der Einwilligung", b: "Jederzeit möglich, so einfach wie die Erteilung; wirkt nur für die Zukunft." },
    { topic: "dsgvo-pflichten", f: "Art. 32 DSGVO", b: "Sicherheit der Verarbeitung: geeignete TOM nach Stand der Technik, Kosten und Risiko – z. B. Verschlüsselung, Wiederherstellbarkeit, regelmäßige Überprüfung." },
    { topic: "dsgvo-pflichten", f: "Meldung Datenpanne (Art. 33)", b: "An die Aufsichtsbehörde unverzüglich, möglichst binnen 72 h nach Bekanntwerden – außer voraussichtlich kein Risiko." },
    { topic: "dsgvo-pflichten", f: "Benachrichtigung Betroffener (Art. 34)", b: "Unverzüglich, wenn voraussichtlich ein hohes Risiko besteht; entfällt z. B. bei sicher verschlüsselten Daten." },
    { topic: "dsgvo-pflichten", f: "Auftragsverarbeitung (Art. 28)", b: "Dienstleister verarbeitet nach Weisung (z. B. Cloud-Hoster) → AVV nötig; Verantwortung bleibt beim Auftraggeber." },
    { topic: "dsgvo-pflichten", f: "DSB-Pflicht nach § 38 BDSG", b: "Ab in der Regel 20 Personen, die ständig mit automatisierter Verarbeitung personenbezogener Daten beschäftigt sind." },
    { topic: "dsgvo-pflichten", f: "Bußgeldrahmen DSGVO", b: "Bis 10 Mio. € / 2 % bzw. bis 20 Mio. € / 4 % des weltweiten Vorjahresumsatzes – jeweils der höhere Betrag." },
    { topic: "dsgvo-pflichten", f: "Datenschutzaufsicht in SH", b: "Unabhängiges Landeszentrum für Datenschutz (ULD), Kiel – für Unternehmen und Landesbehörden. LDSG SH gilt für öffentliche Stellen des Landes." },
    { topic: "bsi-grundschutz", f: "BSI-Standards 200-1 bis 200-4", b: "200-1 ISMS · 200-2 IT-Grundschutz-Methodik · 200-3 Risikoanalyse · 200-4 Business Continuity Management." },
    { topic: "bsi-grundschutz", f: "Absicherungsvarianten nach 200-2", b: "Basis (schneller Einstieg), Kern (Kronjuwelen zuerst), Standard (vollständig, empfohlen)." },
    { topic: "bsi-grundschutz", f: "Ablauf Standard-Absicherung", b: "Strukturanalyse → Schutzbedarfsfeststellung → Modellierung → IT-Grundschutz-Check → ggf. Risikoanalyse → Umsetzung." },
    { topic: "bsi-grundschutz", f: "Anforderungsstufen im Kompendium", b: "Basis (MUSS), Standard (SOLLTE), erhöhter Schutzbedarf (zusätzliche Empfehlungen)." },
    { topic: "bsi-grundschutz", f: "Elementare Gefährdungen", b: "47 Grundgefährdungen des Kompendiums, z. B. G 0.1 Feuer, G 0.39 Schadprogramme, G 0.42 Social Engineering, G 0.45 Datenverlust." },
    { topic: "isms-iso27001", f: "ISMS", b: "Informationssicherheits-Managementsystem: Regeln, Verfahren, Rollen und Werkzeuge, um Sicherheit dauerhaft per PDCA zu steuern." },
    { topic: "isms-iso27001", f: "ISO/IEC 27001 vs. 27002", b: "27001: zertifizierbare Anforderungen an ein ISMS (Anhang A: 93 Controls). 27002: Leitfaden zur Umsetzung, nicht zertifizierbar." },
    { topic: "isms-iso27001", f: "RTO und RPO", b: "RTO: max. Zeit bis zur Wiederherstellung. RPO: max. tolerierbarer Datenverlust → bestimmt das Sicherungsintervall." },
    { topic: "isms-iso27001", f: "Inhalte Notfallhandbuch", b: "Sofortmaßnahmen, Alarmierungsplan, Kontaktlisten, Zuständigkeiten, Wiederanlaufpläne mit Prioritäten, Ablageort der Backups – auch ausgedruckt." },
    { topic: "schutzbedarf", f: "Schutzbedarfskategorien", b: "normal: begrenzt und überschaubar · hoch: beträchtlich · sehr hoch: existenziell bedrohlich, katastrophal." },
    { topic: "schutzbedarf", f: "Maximumprinzip", b: "Ein Zielobjekt erbt je Grundwert den höchsten Schutzbedarf der Anwendungen, die es nutzen." },
    { topic: "schutzbedarf", f: "Kumulationseffekt", b: "Viele kleinere Schäden auf einem Objekt addieren sich → Schutzbedarf steigt (z. B. Virtualisierungshost)." },
    { topic: "schutzbedarf", f: "Verteilungseffekt", b: "Anwendung liegt redundant auf mehreren Systemen → einzelnes System weniger kritisch, Schutzbedarf (meist Verfügbarkeit) sinkt." },
    { topic: "schutzbedarf-praxis", f: "Zielobjekte der Strukturanalyse", b: "Geschäftsprozesse → Anwendungen → IT-Systeme → Räume → Kommunikationsverbindungen." },
    { topic: "risikoanalyse", f: "Risiko (Formel)", b: "Eintrittswahrscheinlichkeit × Schadenshöhe; quantitativ: Häufigkeit pro Jahr × Schaden je Ereignis = Schadenserwartung/Jahr." },
    { topic: "risikoanalyse", f: "Strategien der Risikobehandlung", b: "Vermeiden, Reduzieren, Übertragen (z. B. Versicherung), Akzeptieren – Restrisiko akzeptiert die Geschäftsleitung." },
    { topic: "malware", f: "Virus vs. Wurm vs. Trojaner", b: "Virus: braucht Wirtsdatei. Wurm: verbreitet sich selbst übers Netz. Trojaner: getarnt als nützliches Programm, verbreitet sich nicht selbst." },
    { topic: "malware", f: "Rootkit", b: "Tarnt sich und andere Malware tief im System (bis Kernel) und sichert dauerhaften Admin-Zugriff." },
    { topic: "malware", f: "Ransomware / Double Extortion", b: "Verschlüsselt Daten und fordert Lösegeld; bei Double Extortion werden Daten zusätzlich gestohlen und mit Veröffentlichung gedroht." },
    { topic: "malware", f: "Sofortmaßnahmen bei Infektionsverdacht", b: "Vom Netz trennen, nicht weiterarbeiten, IT/Notfallnummer informieren, nichts löschen, Beobachtungen notieren." },
    { topic: "angriffe", f: "Social Engineering", b: "Manipulation von Menschen (Autorität, Zeitdruck, Hilfsbereitschaft), um Daten, Zahlungen oder Zugang zu erlangen – z. B. Phishing, CEO-Fraud." },
    { topic: "angriffe", f: "APT", b: "Advanced Persistent Threat: zielgerichteter, anspruchsvoller Angriff, lange unentdeckt, oft staatlich unterstützt." },
    { topic: "angriffe", f: "DDoS", b: "Distributed Denial of Service: viele Systeme (oft Botnetz) überlasten einen Dienst → Verfügbarkeit verletzt." },
    { topic: "angriffe", f: "Credential Stuffing", b: "Geleakte E-Mail-Passwort-Paare werden automatisiert bei anderen Diensten ausprobiert – Schutz: eigene Passwörter + MFA." },
    { topic: "massnahmen", f: "Zutritt – Zugang – Zugriff", b: "Zutritt: Räume betreten. Zugang: IT-System nutzen (Login). Zugriff: bestimmte Daten lesen/ändern (Rechte)." },
    { topic: "massnahmen", f: "Vier Maßnahmenarten", b: "technisch, organisatorisch, personell, infrastrukturell (baulich)." },
    { topic: "massnahmen", f: "3-2-1-Regel", b: "3 Kopien, 2 verschiedene Medien, 1 außer Haus – plus eine Offline-Kopie und Wiederherstellungstests." },
    { topic: "massnahmen", f: "Inkrementell vs. differenziell", b: "Inkrementell: Änderungen seit letzter Sicherung (Restore: Voll + alle). Differenziell: seit letzter Vollsicherung (Restore: Voll + letzte)." },
    { topic: "massnahmen", f: "Sandbox vs. Container", b: "Sandbox: Programm läuft abgeschottet mit minimalen Rechten. Container: isolierte App-Umgebung, teilt den Host-Kernel." },
    { topic: "passwort-krypto", f: "Authentifizierungsfaktoren", b: "Wissen (Passwort), Besitz (Token, Smartphone), Inhärenz (Fingerabdruck). MFA = mindestens zwei verschiedene Faktoren." },
    { topic: "passwort-krypto", f: "Passwort-Kombinationen", b: "Zeichenvorrat hoch Länge, z. B. 62⁸ ≈ 2,18 × 10¹⁴. Länge schlägt Komplexität." },
    { topic: "passwort-krypto", f: "Hybride Verschlüsselung", b: "Zufälliger Sitzungsschlüssel verschlüsselt die Daten symmetrisch; er selbst wird asymmetrisch mit dem öffentlichen Schlüssel des Empfängers verschlüsselt übertragen (z. B. S/MIME, PGP; auch TLS arbeitet hybrid)." },
    { topic: "passwort-krypto", f: "Digitale Signatur", b: "Hash mit privatem Schlüssel des Absenders signieren, mit dessen öffentlichem Schlüssel prüfen → Integrität, Authentizität, Verbindlichkeit." },
    { topic: "passwort-krypto", f: "Schlüsselanzahl", b: "Symmetrisch: n × (n − 1) ÷ 2; asymmetrisch: 2 × n. Beispiel 20 Personen: 190 bzw. 40." },
    { topic: "urheberrecht-lizenzen", f: "Urheberrecht – Entstehung und Dauer", b: "Automatisch mit der Schöpfung, ohne Anmeldung; bis 70 Jahre nach dem Tod des Urhebers." },
    { topic: "urheberrecht-lizenzen", f: "§ 69b UrhG", b: "Software, die Angestellte in Erfüllung ihrer Aufgaben schreiben: vermögensrechtliche Befugnisse liegen beim Arbeitgeber." },
    { topic: "urheberrecht-lizenzen", f: "Copyleft (GPL)", b: "Abgeleitete Werke müssen bei Weitergabe unter derselben Lizenz mit Quellcode weitergegeben werden." },
    { topic: "urheberrecht-lizenzen", f: "Freeware vs. Shareware vs. Open Source", b: "Freeware: kostenlos, meist ohne Quellcode. Shareware: testen, dann zahlen. Open Source: Quellcode offen, ändern/weitergeben nach Lizenz." },
    { topic: "urheberrecht-lizenzen", f: "Markenschutz", b: "Eintragung beim DPMA (oder EUIPO), 10 Jahre, beliebig oft um 10 Jahre verlängerbar; ® nur für eingetragene Marken." },
    { topic: "ki-telemetrie", f: "Risikoklassen der KI-Verordnung", b: "unannehmbar (verboten), hoch (strenge Pflichten), begrenzt (Transparenz), minimal (keine Pflichten)." },
    { topic: "ki-telemetrie", f: "Telemetrie", b: "Automatische Übertragung von Nutzungs-, Diagnose- und Fehlerdaten an den Hersteller – oft personenbezogen, per GPO begrenzbar." },
    { topic: "ki-telemetrie", f: "Metadaten", b: "„Daten über Daten“: EXIF (GPS, Zeit), Autor und Versionen in Dokumenten, E-Mail-Header – vor Weitergabe entfernen." },
    { topic: "massnahmen", f: "Videoüberwachung – Datenschutz", b: "Rechtsgrundlage + klarer Zweck, Hinweisschild, nur nötiger Bildausschnitt, kurze Löschfrist (i. d. R. 72 h), wenige Zugriffsberechtigte; Betriebsrat bestimmt mit (§ 87 BetrVG)." },
    { topic: "massnahmen", f: "Least Privilege", b: "Jeder erhält nur die Rechte, die er für seine Aufgabe braucht – z. B. keine Adminrechte für Endnutzer." },
    { topic: "passwort-krypto", f: "TLS vs. Ende-zu-Ende bei E-Mail", b: "TLS: nur Transportweg verschlüsselt, auf Servern Klartext. Ende-zu-Ende (S/MIME, PGP): nur der Empfänger kann lesen." },
    { topic: "passwort-krypto", f: "Rundmail an externe Kunden", b: "Adressen ins BCC-Feld – sonst werden alle Empfängeradressen offengelegt (Datenschutzverstoß)." },
    { topic: "risikoanalyse", f: "Ausfallkosten", b: "Kosten je Stunde × Ausfalldauer + Wiederherstellungsaufwand, z. B. 1.500 €/h × 6 h + 2.000 € = 11.000 €." },
    { topic: "risikoanalyse", f: "Bedrohung – Schwachstelle – Gefährdung", b: "Bedrohung: mögliches schädigendes Ereignis (z. B. Ransomware). Schwachstelle: Mangel (z. B. fehlendes Update). Gefährdung: Bedrohung trifft über eine Schwachstelle konkret auf ein Objekt." },
    { topic: "schutzbedarf-praxis", f: "Gruppenbildung in der Strukturanalyse", b: "Nur zusammenfassen bei gleichem Typ, gleicher Konfiguration, gleichen Anwendungen, gleichem Umfeld und gleichem Schutzbedarf." },
    { topic: "schutzbedarf-praxis", f: "Kritische Kommunikationsverbindungen", b: "Außenverbindungen (Internet, Standortkopplung), Verbindungen mit Daten hohen Schutzbedarfs und Verbindungen, über die bestimmte Daten nicht fließen dürfen." },
    { topic: "bsi-grundschutz", f: "Bausteine für einen Büroarbeitsplatz", b: "SYS.2.1 Allgemeiner Client, APP.1.1 Office, APP.1.2 Webbrowser, INF.7 Büroarbeitsplatz, CON.3 Datensicherung, ORP.3 Sensibilisierung, ORP.4 Identitäts- und Berechtigungsmanagement." },
    { topic: "passwort-krypto", f: "IMAP vs. POP3", b: "IMAP: Mails bleiben auf dem Server, alle Geräte synchron (143 / TLS 993). POP3: Download aufs Gerät, meist Löschen auf dem Server (110 / TLS 995)." },
    { topic: "passwort-krypto", f: "SMTP-Ports", b: "25: Server ↔ Server · 587: Einlieferung durch das Mailprogramm mit STARTTLS · 465: Einlieferung mit TLS von Anfang an." },
    { topic: "massnahmen", f: "Security by Design vs. by Default", b: "By Design: Sicherheit von Anfang an mitplanen. By Default: sichere Werkseinstellungen, z. B. individuelles Initialpasswort, Firewall aktiv." },
    { topic: "massnahmen", f: "NAS und Verfügbarkeit", b: "Zentrale Ablage + Snapshots + Plattenverbund erhöhen die Verfügbarkeit – ersetzen aber kein Offline-/Offsite-Backup (Ransomware, Brand)." },
    { topic: "massnahmen", f: "DIN 66399", b: "Norm zur Datenträgervernichtung: 3 Schutzklassen (normal/hoch/sehr hoch), 7 Sicherheitsstufen, Materialklassen P, F, O, T, H, E – z. B. P-4 für Personalakten." },
    { topic: "massnahmen", f: "SSD sicher löschen", b: "Secure Erase, Crypto-Erase (Schlüssel vernichten) oder physische Vernichtung – Überschreiben ist wegen Wear-Leveling unzuverlässig; Formatieren reicht nie." },
    { topic: "ki-telemetrie", f: "KI-Kompetenz (Art. 4 KI-VO)", b: "Seit 02.02.2025: Anbieter und Betreiber müssen Maßnahmen zur KI-Kompetenz ihrer Beschäftigten ergreifen, z. B. Schulungen (seit dem digitalen Omnibus 2026: Kompetenz fördern, kein festes Niveau)." },
  ],
  checklist: [
    { id: "c-gl-1", topic: "grundlagen", text: "Ich kann Informationssicherheit, IT-Sicherheit, Datensicherheit und Datenschutz voneinander abgrenzen und je ein Beispiel nennen.", exam: ["AP1", "AP2"] },
    { id: "c-gl-2", topic: "grundlagen", text: "Ich kann die Schutzziele Vertraulichkeit, Integrität, Verfügbarkeit, Authentizität und Verbindlichkeit erklären und Vorfälle begründet zuordnen.", exam: ["AP1", "AP2"] },
    { id: "c-gl-3", topic: "grundlagen", text: "Ich kann eine Verfügbarkeit in Prozent und die zulässige Ausfallzeit eines SLA berechnen.", exam: ["AP1", "AP2"] },
    { id: "c-gl-4", topic: "grundlagen", text: "Ich kann die Aufgaben von Informationssicherheitsbeauftragtem und Datenschutzbeauftragtem unterscheiden.", exam: ["AP1"] },
    { id: "c-dg-1", topic: "dsgvo-grundsaetze", text: "Ich kann prüfen, ob personenbezogene Daten oder besondere Kategorien nach Art. 9 DSGVO vorliegen.", exam: ["AP1", "AP2"] },
    { id: "c-dg-2", topic: "dsgvo-grundsaetze", text: "Ich kann die Grundsätze nach Art. 5 und die Rechtsgrundlagen nach Art. 6 DSGVO nennen und auf einen Fall anwenden.", exam: ["AP1", "AP2"] },
    { id: "c-dg-3", topic: "dsgvo-grundsaetze", text: "Ich kann die Betroffenenrechte (Auskunft, Berichtigung, Löschung, Einschränkung, Übertragbarkeit, Widerspruch) mit Frist erklären.", exam: ["AP1"] },
    { id: "c-dg-4", topic: "dsgvo-grundsaetze", text: "Ich kann Anonymisierung und Pseudonymisierung unterscheiden und die Folgen einer Einwilligung und ihres Widerrufs beschreiben.", exam: ["AP1"] },
    { id: "c-dp-1", topic: "dsgvo-pflichten", text: "Ich kann TOM nach Art. 32 DSGVO nennen und für einen Arbeitsplatz vorschlagen.", exam: ["AP1", "AP2"] },
    { id: "c-dp-2", topic: "dsgvo-pflichten", text: "Ich kann das Vorgehen bei einer Datenpanne mit Meldefrist (72 h), Empfänger und Benachrichtigungspflicht beschreiben.", exam: ["AP1", "AP2"] },
    { id: "c-dp-3", topic: "dsgvo-pflichten", text: "Ich kann erklären, wann ein Auftragsverarbeitungsvertrag und wann ein Datenschutzbeauftragter nötig ist.", exam: ["AP1", "AP2"] },
    { id: "c-dp-4", topic: "dsgvo-pflichten", text: "Ich kann den Bußgeldrahmen der DSGVO berechnen und DSGVO, BDSG und LDSG SH sowie die zuständigen Aufsichtsbehörden einordnen.", exam: ["AP1", "AP2"] },
    { id: "c-bsi-1", topic: "bsi-grundschutz", text: "Ich kann Aufgaben des BSI nennen und die BSI-Standards 200-1 bis 200-4 zuordnen.", exam: ["AP1", "AP2"] },
    { id: "c-bsi-2", topic: "bsi-grundschutz", text: "Ich kann den Aufbau des IT-Grundschutz-Kompendiums (Schichten, Bausteine, Anforderungsstufen, elementare Gefährdungen) erklären und einem Arbeitsplatz passende Bausteine zuordnen.", exam: ["AP1"] },
    { id: "c-bsi-3", topic: "bsi-grundschutz", text: "Ich kann die Schritte der Standard-Absicherung und die drei Absicherungsvarianten beschreiben.", exam: ["AP1", "AP2"] },
    { id: "c-isms-1", topic: "isms-iso27001", text: "Ich kann ein ISMS mit PDCA-Zyklus, Rollen und Sicherheitsleitlinie erklären.", exam: ["AP1", "AP2"] },
    { id: "c-isms-2", topic: "isms-iso27001", text: "Ich kann Inhalte eines Notfallhandbuchs nennen sowie RTO und RPO erklären und anwenden.", exam: ["AP2"] },
    { id: "c-isms-3", topic: "isms-iso27001", text: "Ich kann ISO/IEC 27001, ISO/IEC 27002 und den IT-Grundschutz unterscheiden und IT-Sicherheitsgesetz und NIS2 grob einordnen.", exam: ["AP2"] },
    { id: "c-sb-1", topic: "schutzbedarf", text: "Ich kann die sechs Schadensszenarien und die Schutzbedarfskategorien normal, hoch und sehr hoch erklären.", exam: ["AP1", "AP2"] },
    { id: "c-sb-2", topic: "schutzbedarf", text: "Ich kann Maximumprinzip, Kumulationseffekt und Verteilungseffekt an Beispielen erklären und anwenden.", exam: ["AP1", "AP2"] },
    { id: "c-sp-1", topic: "schutzbedarf-praxis", text: "Ich kann eine Strukturanalyse durchführen und gleichartige Objekte begründet zu Gruppen zusammenfassen.", exam: ["AP1"] },
    { id: "c-sp-2", topic: "schutzbedarf-praxis", text: "Ich kann für Anwendungen, IT-Systeme, Räume und Kommunikationsverbindungen den Schutzbedarf je Grundwert ableiten und schriftlich begründen.", exam: ["AP1", "AP2"] },
    { id: "c-ra-1", topic: "risikoanalyse", text: "Ich kann Risiken mit Eintrittswahrscheinlichkeit × Schadenshöhe bewerten und in eine Risikomatrix einordnen.", exam: ["AP1", "AP2"] },
    { id: "c-ra-2", topic: "risikoanalyse", text: "Ich kann die jährliche Schadenserwartung berechnen und beurteilen, ob sich eine Schutzmaßnahme wirtschaftlich lohnt.", exam: ["AP1", "AP2"] },
    { id: "c-ra-3", topic: "risikoanalyse", text: "Ich kann die Strategien Vermeiden, Reduzieren, Übertragen und Akzeptieren mit Beispielen erklären.", exam: ["AP1", "AP2"] },
    { id: "c-mw-1", topic: "malware", text: "Ich kann Virus, Wurm, Trojaner, Ransomware, Spyware, Keylogger, Rootkit und Bot unterscheiden.", exam: ["AP1", "AP2"] },
    { id: "c-mw-2", topic: "malware", text: "Ich kann Infektionswege, Schutzmaßnahmen und das richtige Verhalten bei einem Infektionsverdacht beschreiben.", exam: ["AP1"] },
    { id: "c-an-1", topic: "angriffe", text: "Ich kann Formen des Social Engineering erklären und eine Phishing-Mail an mindestens vier Merkmalen erkennen.", exam: ["AP1", "AP2"] },
    { id: "c-an-2", topic: "angriffe", text: "Ich kann APT, Botnetz, DDoS und Identitätsdiebstahl erklären und Gegenmaßnahmen nennen.", exam: ["AP1", "AP2"] },
    { id: "c-ms-1", topic: "massnahmen", text: "Ich kann Maßnahmen als technisch, organisatorisch, personell oder infrastrukturell einordnen.", exam: ["AP1", "AP2"] },
    { id: "c-ms-2", topic: "massnahmen", text: "Ich kann Zutritts-, Zugangs- und Zugriffskontrolle unterscheiden und je zwei Beispiele nennen.", exam: ["AP1", "AP2"] },
    { id: "c-ms-3", topic: "massnahmen", text: "Ich kann Maßnahmen zur Härtung eines Clients nennen und eine Firewall-Regel für ein Programm erläutern.", exam: ["AP1"] },
    { id: "c-ms-4", topic: "massnahmen", text: "Ich kann Sandbox und Container als Schutzmaßnahme erklären und ihre Grenzen nennen.", exam: ["AP1", "AP2"] },
    { id: "c-ms-5", topic: "massnahmen", text: "Ich kann die 3-2-1-Regel erklären sowie Voll-, differenzielle und inkrementelle Sicherung vergleichen und den Speicherbedarf berechnen.", exam: ["AP1", "AP2"] },
    { id: "c-pk-1", topic: "passwort-krypto", text: "Ich kann eine Passwort-Richtlinie bewerten und die Anzahl möglicher Passwörter sowie die Angriffsdauer berechnen.", exam: ["AP1"] },
    { id: "c-pk-2", topic: "passwort-krypto", text: "Ich kann die Authentifizierungsfaktoren nennen und erklären, wann eine echte MFA vorliegt.", exam: ["AP1", "AP2"] },
    { id: "c-pk-3", topic: "passwort-krypto", text: "Ich kann symmetrische, asymmetrische und hybride Verschlüsselung erklären und die Schlüsselanzahl berechnen.", exam: ["AP1", "AP2"] },
    { id: "c-pk-4", topic: "passwort-krypto", text: "Ich kann Hashwert, digitale Signatur und Zertifikat erklären und den Ablauf einer Signaturprüfung beschreiben.", exam: ["AP1", "AP2"] },
    { id: "c-ur-1", topic: "urheberrecht-lizenzen", text: "Ich kann Grundlagen des Urheberrechts (Entstehung, Dauer, Nutzungsrechte, § 69b UrhG) und des Markenrechts erklären.", exam: ["AP1"] },
    { id: "c-ur-2", topic: "urheberrecht-lizenzen", text: "Ich kann proprietäre Software, Freeware, Shareware und Open Source sowie GPL, MIT und Apache 2.0 unterscheiden und einen Lizenzfall beurteilen.", exam: ["AP1", "AP2"] },
    { id: "c-ki-1", topic: "ki-telemetrie", text: "Ich kann KI-Anwendungen den Risikoklassen der EU-KI-Verordnung zuordnen und Regeln für den sicheren KI-Einsatz im Betrieb nennen.", exam: ["AP1", "AP2"] },
    { id: "c-ki-2", topic: "ki-telemetrie", text: "Ich kann Datenschutzrisiken durch Telemetrie und Metadaten erklären und Gegenmaßnahmen nennen.", exam: ["AP1"] },
    { id: "c-ms-6", topic: "massnahmen", text: "Ich kann die datenschutzrechtlichen Anforderungen an eine Videoüberwachung (Rechtsgrundlage, Hinweis, Datenminimierung, Löschfrist, Betriebsrat) nennen.", exam: ["AP1", "AP2"] },
    { id: "c-ms-7", topic: "massnahmen", text: "Ich kann begründen, warum Endnutzer keine Administratorrechte erhalten, und eine Alternative vorschlagen.", exam: ["AP1"] },
    { id: "c-pk-5", topic: "passwort-krypto", text: "Ich kann Transportverschlüsselung (TLS) und Ende-zu-Ende-Verschlüsselung (S/MIME, PGP) bei E-Mails unterscheiden und erklären, wann BCC zu verwenden ist.", exam: ["AP1", "AP2"] },
    { id: "c-ra-4", topic: "risikoanalyse", text: "Ich kann Ausfallkosten aus Kosten je Stunde, Ausfalldauer und Wiederherstellungsaufwand berechnen.", exam: ["AP2"] },
    { id: "c-pk-6", topic: "passwort-krypto", text: "Ich kann IMAP und POP3 unterscheiden und die Ports von SMTP, IMAP und POP3 mit und ohne TLS nennen.", exam: ["AP1", "AP2"] },
    { id: "c-ms-8", topic: "massnahmen", text: "Ich kann Security by Design und Security by Default an je einem Beispiel erklären.", exam: ["AP1"] },
    { id: "c-ms-9", topic: "massnahmen", text: "Ich kann erklären, wie ein NAS die Verfügbarkeit erhöht, und begründen, warum es kein Offline-Backup ersetzt.", exam: ["AP1", "AP2"] },
    { id: "c-ms-10", topic: "massnahmen", text: "Ich kann begründen, warum Formatieren kein sicheres Löschen ist, geeignete Verfahren für HDD und SSD nennen und Datenträger einer Schutzklasse nach DIN 66399 zuordnen.", exam: ["AP1", "AP2"] },
  ],
  glossary: [
    { term: "Anonymisierung", def: "Veränderung personenbezogener Daten, sodass der Personenbezug nicht mehr oder nur mit unverhältnismäßigem Aufwand herstellbar ist; anonyme Daten fallen nicht unter die DSGVO." },
    { term: "APT (Advanced Persistent Threat)", def: "Zielgerichteter, technisch anspruchsvoller und lang andauernder Angriff, meist zur Spionage oder Sabotage, oft staatlich unterstützt." },
    { term: "Auftragsverarbeitung", def: "Verarbeitung personenbezogener Daten durch einen Dienstleister im Auftrag und nach Weisung des Verantwortlichen; erfordert einen Vertrag nach Art. 28 DSGVO." },
    { term: "Authentizität", def: "Schutzziel, das die Echtheit und Überprüfbarkeit eines Kommunikationspartners oder einer Information sicherstellt." },
    { term: "BDSG", def: "Bundesdatenschutzgesetz; ergänzt die DSGVO in Deutschland, z. B. mit der DSB-Pflicht ab 20 Personen (§ 38) und Regeln für Bundesbehörden." },
    { term: "Botnetz", def: "Netz aus vielen mit Schadsoftware infizierten Geräten, die über einen Command-and-Control-Server ferngesteuert werden, z. B. für DDoS oder Spam." },
    { term: "BSI", def: "Bundesamt für Sicherheit in der Informationstechnik in Bonn; nationale Cybersicherheitsbehörde, die warnt, Standards wie den IT-Grundschutz herausgibt und zertifiziert." },
    { term: "Business Continuity Management (BCM)", def: "Managementprozess, der sicherstellt, dass wichtige Geschäftsprozesse bei Notfällen und Krisen weiterlaufen oder schnell wiederhergestellt werden (BSI-Standard 200-4)." },
    { term: "Copyleft", def: "Lizenzprinzip (z. B. GPL), nach dem abgeleitete Werke bei Weitergabe unter denselben Bedingungen und mit Quellcode weitergegeben werden müssen." },
    { term: "DDoS", def: "Distributed Denial of Service: Überlastung eines Dienstes durch massenhafte Anfragen aus vielen Quellen, um seine Verfügbarkeit zu verhindern." },
    { term: "Digitale Signatur", def: "Mit dem privaten Schlüssel des Absenders erzeugter Nachweis über einen Hashwert; sichert Integrität, Authentizität und Verbindlichkeit." },
    { term: "DIN 66399", def: "Norm für die Vernichtung von Datenträgern mit drei Schutzklassen (normal, hoch, sehr hoch), sieben Sicherheitsstufen und Materialklassen wie P (Papier), H (Festplatten) oder E (elektronische Datenträger)." },
    { term: "DSGVO", def: "Datenschutz-Grundverordnung der EU, seit 25.05.2018 unmittelbar geltendes Recht für die Verarbeitung personenbezogener Daten." },
    { term: "Elementare Gefährdungen", def: "Die 47 grundlegenden Gefährdungen des IT-Grundschutz-Kompendiums (z. B. Feuer, Schadprogramme, Social Engineering), auf denen die Bausteine aufbauen." },
    { term: "Ende-zu-Ende-Verschlüsselung", def: "Verschlüsselung, bei der nur Absender und Empfänger die Inhalte lesen können – auch Server dazwischen nicht; bei E-Mails z. B. S/MIME oder OpenPGP." },
    { term: "EULA", def: "End User License Agreement: Lizenzvertrag zwischen Softwarehersteller und Endnutzer, der die erlaubte Nutzung regelt." },
    { term: "Härtung", def: "Reduzieren der Angriffsfläche eines Systems, z. B. durch Updates, Entfernen unnötiger Dienste, Ändern von Standardpasswörtern und minimale Rechte." },
    { term: "Hashwert", def: "Mit einer Einwegfunktion berechneter Prüfwert fester Länge (z. B. SHA-256); schon kleine Datenänderungen ergeben einen völlig anderen Hash." },
    { term: "Hybride Verschlüsselung", def: "Kombination aus asymmetrischem Austausch eines Sitzungsschlüssels und schneller symmetrischer Verschlüsselung der Daten, z. B. bei TLS." },
    { term: "IMAP", def: "Internet Message Access Protocol: Protokoll zum Abrufen von E-Mails, bei dem die Mails auf dem Server bleiben und auf allen Geräten synchron sind (Port 143, mit TLS 993)." },
    { term: "Informationssicherheit", def: "Schutz aller Informationen eines Unternehmens – digital und analog – hinsichtlich Vertraulichkeit, Integrität und Verfügbarkeit." },
    { term: "Integrität", def: "Schutzziel, nach dem Daten vollständig und unverfälscht sind bzw. Veränderungen erkennbar werden und Systeme korrekt arbeiten." },
    { term: "ISMS", def: "Informationssicherheits-Managementsystem: Gesamtheit von Regeln, Verfahren, Rollen und Werkzeugen, mit denen Informationssicherheit dauerhaft gesteuert und verbessert wird." },
    { term: "ISO/IEC 27001", def: "Internationale, zertifizierbare Norm mit Anforderungen an ein ISMS; Anhang A enthält 93 Maßnahmen (Controls)." },
    { term: "IT-Grundschutz-Kompendium", def: "Sammlung von BSI-Bausteinen mit Gefährdungslage und abgestuften Anforderungen für typische Prozesse und Systeme." },
    { term: "KI-Verordnung (AI Act)", def: "EU-Verordnung 2024/1689, die KI-Systeme nach Risiko einstuft – von verboten über hohes und begrenztes bis minimales Risiko." },
    { term: "Kumulationseffekt", def: "Erhöhung des Schutzbedarfs eines Objekts, weil sich viele einzelne, für sich unkritische Schäden darauf summieren." },
    { term: "Least Privilege", def: "Prinzip der minimalen Rechte: Benutzer und Programme erhalten nur die Berechtigungen, die sie für ihre Aufgabe unbedingt brauchen." },
    { term: "Maximumprinzip", def: "Regel der Schutzbedarfsvererbung: Ein Zielobjekt erhält je Grundwert den höchsten Schutzbedarf der Anwendungen, die es nutzen." },
    { term: "Metadaten", def: "Beschreibende Daten über Dateien oder Vorgänge, z. B. EXIF-Standortdaten in Fotos oder der Autor eines Dokuments." },
    { term: "Multi-Faktor-Authentifizierung (MFA)", def: "Anmeldung mit mindestens zwei Faktoren aus verschiedenen Kategorien: Wissen, Besitz, Inhärenz." },
    { term: "NAS (Network Attached Storage)", def: "Speichergerät im Netzwerk, das Dateien zentral bereitstellt; erhöht mit Snapshots und Plattenverbund die Verfügbarkeit, ersetzt aber kein Offline-Backup." },
    { term: "Notfallhandbuch", def: "Dokument mit Sofortmaßnahmen, Alarmierungswegen, Zuständigkeiten und Wiederanlaufplänen für Notfälle; muss auch ohne IT verfügbar sein." },
    { term: "Open Source", def: "Software, deren Quellcode offenliegt und nach den Bedingungen der jeweiligen Lizenz genutzt, verändert und weitergegeben werden darf." },
    { term: "Personenbezogene Daten", def: "Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen (Art. 4 Nr. 1 DSGVO)." },
    { term: "Phishing", def: "Betrugsversuch per gefälschter E-Mail, Webseite oder Nachricht, um Zugangsdaten oder Zahlungsinformationen zu erbeuten." },
    { term: "POP3", def: "Post Office Protocol 3: Protokoll zum Abrufen von E-Mails, das die Mails auf ein Gerät herunterlädt und meist auf dem Server löscht (Port 110, mit TLS 995)." },
    { term: "Pseudonymisierung", def: "Ersetzen identifizierender Merkmale durch Kennzeichen, wobei die Zuordnung getrennt aufbewahrt wird; die Daten bleiben personenbezogen." },
    { term: "Ransomware", def: "Erpressungssoftware, die Daten verschlüsselt oder Systeme sperrt und Lösegeld fordert; oft kombiniert mit Datendiebstahl (Double Extortion)." },
    { term: "Restrisiko", def: "Risiko, das nach Umsetzung aller Maßnahmen verbleibt und von der Geschäftsleitung bewusst akzeptiert werden muss." },
    { term: "Risiko", def: "Kombination aus der Häufigkeit (Eintrittswahrscheinlichkeit) eines Schadensereignisses und seiner Auswirkung (Schadenshöhe)." },
    { term: "Rootkit", def: "Schadsoftware, die sich und andere Malware tief im Betriebssystem versteckt und dauerhaften privilegierten Zugriff sichert." },
    { term: "Sandbox", def: "Abgeschottete Ausführungsumgebung mit minimalen Rechten, in der Programme das eigentliche System nicht verändern können." },
    { term: "Schutzbedarfsfeststellung", def: "Schritt der IT-Grundschutz-Methodik, in dem je Grundwert anhand von Schadensszenarien der Schutzbedarf (normal, hoch, sehr hoch) bestimmt wird." },
    { term: "Security by Default", def: "Grundsatz, ein Produkt bereits im Auslieferungszustand sicher zu konfigurieren, z. B. mit individuellem Initialpasswort und aktivierter Firewall." },
    { term: "Security by Design", def: "Grundsatz, Sicherheit schon bei Planung und Entwicklung eines Produkts zu berücksichtigen statt sie nachträglich hinzuzufügen." },
    { term: "Social Engineering", def: "Manipulation von Menschen, um sie zur Preisgabe von Informationen oder zu schädlichen Handlungen zu bewegen." },
    { term: "Software-Container", def: "Isolierte Laufzeitumgebung für eine Anwendung samt Abhängigkeiten, die sich den Kernel des Host-Systems teilt (z. B. Docker)." },
    { term: "Strukturanalyse", def: "Erster Schritt der IT-Grundschutz-Methodik: Erfassen von Geschäftsprozessen, Anwendungen, IT-Systemen, Räumen und Kommunikationsverbindungen." },
    { term: "Telemetrie", def: "Automatische Übertragung von Nutzungs-, Diagnose- und Fehlerdaten eines Produkts an den Hersteller." },
    { term: "TOM", def: "Technische und organisatorische Maßnahmen, mit denen nach Art. 32 DSGVO ein dem Risiko angemessenes Schutzniveau hergestellt wird." },
    { term: "Trojaner", def: "Schadprogramm, das sich als nützliche Software tarnt, eine versteckte Schadfunktion enthält und sich nicht selbstständig verbreitet." },
    { term: "Verbindlichkeit", def: "Schutzziel der Nichtabstreitbarkeit: Handlungen lassen sich ihrem Urheber eindeutig und beweisbar zuordnen." },
    { term: "Verfügbarkeit", def: "Schutzziel, nach dem Daten, Dienste und Systeme zur vereinbarten Zeit in der erforderlichen Qualität nutzbar sind." },
    { term: "Verteilungseffekt", def: "Senkung des Schutzbedarfs eines einzelnen Systems, wenn eine Anwendung redundant auf mehrere Systeme verteilt ist." },
    { term: "Vertraulichkeit", def: "Schutzziel, nach dem nur befugte Personen Informationen zur Kenntnis nehmen können." },
    { term: "Wurm", def: "Eigenständiges Schadprogramm, das sich ohne Wirtsdatei selbstständig über Netzwerke verbreitet, meist über Schwachstellen." },
    { term: "Zertifikat (X.509)", def: "Von einer Zertifizierungsstelle signierte Bestätigung, dass ein öffentlicher Schlüssel zu einer bestimmten Person, Organisation oder Domain gehört." },
    { term: "Zutritts-, Zugangs-, Zugriffskontrolle", def: "Schutz vor unbefugtem Betreten von Räumen (Zutritt), unbefugter Nutzung von IT-Systemen (Zugang) und unbefugtem Zugriff auf Daten (Zugriff)." },
  ],
  links: [
    { title: "BSI – IT-Grundschutz (Standards, Kompendium, Online-Kurs)", url: "https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/it-grundschutz_node.html", note: "BSI-Standards 200-1 bis 200-4, IT-Grundschutz-Kompendium und kostenloser Web-Kurs" },
    { title: "Bundesamt für Sicherheit in der Informationstechnik (BSI)", url: "https://www.bsi.bund.de/", note: "Warnungen, Lagebericht zur IT-Sicherheit, Tipps zu Passwörtern und Phishing" },
    { title: "Datenschutz-Grundverordnung (EUR-Lex, deutsch)", url: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679", note: "amtlicher Volltext der DSGVO" },
    { title: "Bundesdatenschutzgesetz (BDSG)", url: "https://www.gesetze-im-internet.de/bdsg_2018/", note: "u. a. § 38 – Datenschutzbeauftragte" },
    { title: "Urheberrechtsgesetz (UrhG)", url: "https://www.gesetze-im-internet.de/urhg/", note: "§§ 69a ff. – Schutz von Computerprogrammen" },
    { title: "Markengesetz (MarkenG)", url: "https://www.gesetze-im-internet.de/markeng/", note: "u. a. Entstehung und Schutzdauer von Marken" },
    { title: "Unabhängiges Landeszentrum für Datenschutz Schleswig-Holstein (ULD)", url: "https://www.datenschutzzentrum.de/", note: "Aufsichtsbehörde in SH, Infos zu DSGVO und LDSG SH" },
    { title: "KI-Verordnung (EU) 2024/1689 (EUR-Lex, deutsch)", url: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32024R1689", note: "amtlicher Volltext des AI Act" },
    { title: "Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)", url: "https://www.bfdi.bund.de/", note: "Informationsbroschüren zu DSGVO und BDSG" },
  ]
});
