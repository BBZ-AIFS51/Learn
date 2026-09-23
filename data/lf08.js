/* LF 8 – Daten systemübergreifend bereitstellen */
LEARN.module({
  id: "lf08",
  type: "lf",
  nr: 8,
  title: "Daten systemübergreifend bereitstellen",
  year: 2,
  hours: 80,
  exam: ["AP1", "AP2"],
  summary: "Datenbanken verstehen, modellieren und abfragen: vom DBMS über ER-Modell, Relationenmodell und Normalisierung bis zu SQL, Transaktionen, Datenaustauschformaten (CSV, JSON, XML), REST-Schnittstellen, Datenschutz und Datenqualität. ER-Modelle sind schon AP1-Thema, SQL und Normalisierung prüft die IHK in der AP2.",
  goals: [
    "Die Begriffe Datenbank, DBMS und Datenbanksystem abgrenzen und die Aufgaben eines DBMS (nach Codd) erklären",
    "Die Drei-Ebenen-Architektur (ANSI-SPARC) und die physische bzw. logische Datenunabhängigkeit beschreiben",
    "Datenbankmodelle (hierarchisch, Netzwerk, relational, objektorientiert, NoSQL) vergleichen und für einen Einsatzzweck begründet auswählen",
    "Ein ER-Modell mit Kardinalitäten erstellen und in ein Relationenmodell mit Primär- und Fremdschlüsseln überführen",
    "Anomalien erkennen und Tabellen schrittweise bis zur 3. Normalform normalisieren",
    "SQL-Anweisungen (DDL, DML, Abfragen, DCL) schreiben, lesen und ihr Ergebnis bestimmen – inklusive JOIN, GROUP BY/HAVING, Unterabfragen und Views",
    "Transaktionen nach dem ACID-Prinzip erläutern, Mehrbenutzerprobleme erkennen und Sperren, Deadlocks und Datenbank-Backups erklären",
    "Daten in CSV, JSON und XML austauschen und über REST-Schnittstellen bereitstellen",
    "Datenschutz, Rechtekonzepte, Datenqualität und Data Governance bei der Bereitstellung von Daten berücksichtigen",
    "Datenzugriffe per Skript umsetzen, testen, im Team mit Git versionieren und das Ergebnis dokumentiert übergeben"
  ],
  school: {
    hinweise: "In der AIFS51 startete LF 8 mit den Grundbegriffen (DB, DBMS, DBS), den Problemen dateibasierter Datenhaltung, den Aufgaben eines DBMS, dem Data Dictionary und der Drei-Ebenen-Architektur. Danach habt ihr die Datenbankmodelle in Gruppenreferaten erarbeitet (relational, netzwerkartig, hierarchisch, objektorientiert, NoSQL). Leistungsnachweis 1 ist die Klausur am 28.10.2026 – die genauen Inhalte gibt die Lehrkraft noch bekannt. Für die IHK gilt: ER-Modelle kommen schon in der AP1 vor, SQL, Normalisierung und Transaktionen erst in der AP2.",
    themen: [
      "Datenbanken und Datenbanksysteme (DB, DBMS, DBS)",
      "Einsatzbeispiele für Datenbanken",
      "Probleme dateibasierter Datenhaltung: Redundanz, Inkonsistenz, Datenschutz, Datenunabhängigkeit",
      "Aufgaben eines DBMS",
      "Data Dictionary",
      "Drei-Ebenen-Architektur eines DBMS",
      "Referate: Datenbankmodelle (relational, Netzwerk, hierarchisch, objektorientiert, NoSQL)",
      "Klausur (Leistungsnachweis 1) am 28.10.2026"
    ]
  },
  topics: [
    {
      id: "db-grundlagen",
      title: "Datenbanken, DBMS und Datenbanksysteme",
      exam: ["AP1", "AP2"],
      summary: "DB, DBMS und DBS abgrenzen, Probleme dateibasierter Datenhaltung, die neun Aufgaben eines DBMS nach Codd und das Data Dictionary.",
      html: `
        <p>Fast jede betriebliche Anwendung speichert ihre Daten in einer Datenbank: Warenwirtschaft, Ticketsystem, Personalverwaltung, Online-Shop. Bevor du Daten systemübergreifend bereitstellen kannst, musst du drei Grundbegriffe sauber auseinanderhalten.</p>
        <h5>DB, DBMS und DBS</h5>
        <table><thead><tr><th>Begriff</th><th>Bedeutung</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td><strong>Datenbank (DB)</strong></td><td>strukturierter, zusammengehörender Datenbestand (Tabellen und weitere Objekte eines Schemas)</td><td>Kunden-, Auftrags- und Artikeltabellen eines Shops</td></tr>
          <tr><td><strong>Datenbankmanagementsystem (DBMS)</strong></td><td>Verwaltungssoftware, die jeden Zugriff auf die Daten regelt: speichern, ändern, löschen, abfragen</td><td>MariaDB/MySQL, PostgreSQL, Microsoft SQL Server, Oracle Database, SQLite; als Desktop-Datenbank auch Microsoft Access oder LibreOffice Base</td></tr>
          <tr><td><strong>Datenbanksystem (DBS)</strong></td><td>Gesamtsystem aus DBMS und Datenbank(en); im weiteren Sinn inklusive Hardware, Anwendungen und Benutzern</td><td>das komplette Warenwirtschaftssystem der Firma</td></tr>
        </tbody></table>
        <div class="callout formel"><strong>Formel:</strong> DBS = DBMS + DB</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> DBMS und DBS sind nicht dasselbe. Das DBMS ist nur die Software-Komponente – erst zusammen mit dem Datenbestand entsteht das Datenbanksystem.</div>
        <h5>Einsatzbeispiele</h5>
        <ul>
          <li>Lagerhaltung und Warenwirtschaft (ERP), Kundenverwaltung (CRM), Personalverwaltung</li>
          <li>Kontoführung bei Banken, Buchungssysteme für Fähren, Flüge oder Hotels</li>
          <li>Ticketsysteme im IT-Support, Stundenpläne, Patientenverwaltung, Bibliotheken</li>
          <li>Messwerte von Sensoren und Maschinen, Logdaten von Servern</li>
        </ul>
        <h5>Warum nicht einfach Dateien?</h5>
        <p>Speichert jede Abteilung ihre Daten in eigenen Dateien (z. B. Tabellenkalkulation in Personalabteilung und Lager), entstehen typische Probleme:</p>
        <table><thead><tr><th>Problem</th><th>Erklärung</th></tr></thead><tbody>
          <tr><td>Redundanz</td><td>Dieselben Daten liegen mehrfach vor (Adresse eines Mitarbeiters in Personal- und Lagerdatei) → Speicherverschwendung, hoher Pflegeaufwand.</td></tr>
          <tr><td>Inkonsistenz</td><td>Folge der Redundanz: Eine Kopie wird geändert, die andere nicht → widersprüchliche Daten, niemand weiß, welcher Wert stimmt.</td></tr>
          <tr><td>Datenschutz</td><td>Keine zentrale Zugriffskontrolle → Unbefugte können sensible Daten wie Gehälter lesen.</td></tr>
          <tr><td>Fehlende Datenunabhängigkeit</td><td>Programme hängen direkt am Dateiformat. Kommt ein Feld hinzu, müssen alle Programme angepasst werden.</td></tr>
          <tr><td>Mehrbenutzerprobleme</td><td>Gleichzeitige Änderungen überschreiben sich gegenseitig (Lost Update).</td></tr>
        </tbody></table>
        <h5>Aufgaben eines DBMS (Anforderungen nach Codd)</h5>
        <p>Edgar F. Codd, der Begründer des Relationenmodells, hat 1982 neun Anforderungen an ein DBMS formuliert:</p>
        <ol>
          <li><strong>Integration</strong> – alle Daten werden einheitlich und zentral verwaltet.</li>
          <li><strong>Operationen</strong> – Speichern, Suchen, Ändern und Löschen über eine Abfragesprache wie SQL.</li>
          <li><strong>Katalog</strong> – ein Data Dictionary beschreibt alle gespeicherten Daten.</li>
          <li><strong>Benutzersichten</strong> – verschiedene Anwendergruppen erhalten eigene Sichten (Views).</li>
          <li><strong>Konsistenzüberwachung</strong> – Integritätsregeln sichern die Korrektheit der Daten.</li>
          <li><strong>Zugriffskontrolle</strong> – nur berechtigte Benutzer dürfen lesen oder ändern.</li>
          <li><strong>Transaktionen</strong> – zusammengehörige Änderungen werden ganz oder gar nicht ausgeführt.</li>
          <li><strong>Synchronisation</strong> – gleichzeitige Zugriffe mehrerer Benutzer werden koordiniert (Sperren).</li>
          <li><strong>Datensicherung</strong> – nach Fehlern oder Abstürzen lässt sich der Datenbestand wiederherstellen (Backup und Recovery).</li>
        </ol>
        <div class="callout achtung"><strong>Nicht verwechseln:</strong> Die neun Anforderungen an ein DBMS (1982) sind etwas anderes als Codds zwölf Regeln (1985). Mit den zwölf Regeln prüft man, ob ein DBMS „wirklich relational“ arbeitet.</div>
        <h5>Data Dictionary (Systemkatalog)</h5>
        <p>Das Data Dictionary enthält <em>Daten über die Daten</em> (Metadaten): Tabellen, Spalten, Datentypen, Schlüssel, Constraints, Indizes, Views und Benutzerrechte. Das DBMS pflegt es automatisch und nutzt es bei jeder Anweisung – etwa um zu prüfen, ob eine Spalte existiert und ob der Benutzer sie lesen darf. In vielen Systemen fragst du es über das Schema <code>INFORMATION_SCHEMA</code> ab:</p>
        <pre><code>SELECT TABLE_NAME, COLUMN_NAME, DATA_TYPE
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = 'warenwirtschaft';</code></pre>
        <div class="callout merke"><strong>Merke:</strong> Kein Anwendungsprogramm greift direkt auf die Datendateien zu – jeder Zugriff läuft über das DBMS. Nur so kann es Redundanz kontrollieren, Integrität prüfen, Rechte durchsetzen und den Mehrbenutzerbetrieb steuern.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Erläutern</em> Sie den Unterschied zwischen DBMS und Datenbanksystem.“ · „<em>Nennen</em> Sie vier Aufgaben eines DBMS.“ · „<em>Beschreiben</em> Sie zwei Probleme, die entstehen, wenn Abteilungen ihre Daten in eigenen Dateien speichern.“ Bei „erläutern“ gehören immer Begriff, Begründung und ein Beispiel in die Antwort.</div>
      `
    },
    {
      id: "drei-ebenen",
      title: "Drei-Ebenen-Architektur & Datenunabhängigkeit",
      exam: ["AP2"],
      summary: "Externe, konzeptionelle und interne Ebene nach ANSI-SPARC, physische und logische Datenunabhängigkeit sowie 2-Tier- und 3-Tier-Architekturen.",
      html: `
        <p>Die Drei-Ebenen-Architektur wurde in den 1970er-Jahren vom ANSI/SPARC-Komitee vorgeschlagen. Sie trennt, <em>wie</em> Benutzer die Daten sehen, <em>was</em> logisch gespeichert ist und <em>wie</em> die Daten physisch abgelegt werden. Ziel ist die <strong>Datenunabhängigkeit</strong>: Änderungen auf einer Ebene sollen die darüberliegende Ebene nicht betreffen.</p>
        <pre class="ascii">
 EXTERNE EBENE        [Sicht Vertrieb]   [Sicht Personal]   [Sicht Web-Shop]
                              \\                 |                 /
                               +---- Abbildung (Mapping) --------+
                                                |
 KONZEPTIONELLE EBENE     [ Gesamtschema: Tabellen, Attribute, Beziehungen ]
                                                |
                               +---- Abbildung (Mapping) --------+
                                                |
 INTERNE EBENE            [ Dateien, Speicherblöcke, Indizes, Partitionen ]
</pre>
        <table><thead><tr><th>Ebene</th><th>beschreibt</th><th>wer arbeitet damit?</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td><strong>Extern</strong></td><td>Sichten einzelner Benutzergruppen – nur die jeweils benötigten Ausschnitte</td><td>Anwender, Anwendungsprogramme</td><td>View „Mitarbeiterliste“ ohne Gehaltsspalte</td></tr>
          <tr><td><strong>Konzeptionell</strong> (logisch)</td><td>das gesamte logische Schema: alle Tabellen, Attribute, Beziehungen und Integritätsregeln, unabhängig von der Hardware</td><td>Datenbankentwickler, Datenbankadministrator</td><td>Tabellen <code>Mitarbeiter</code> und <code>Abteilung</code> mit Primär- und Fremdschlüsseln</td></tr>
          <tr><td><strong>Intern</strong> (physisch)</td><td>physische Speicherung: Dateien, Blöcke, Zugriffspfade, Indizes, Komprimierung</td><td>DBMS, Datenbankadministrator</td><td>Datendatei auf SSD, B-Baum-Index auf <code>Nachname</code></td></tr>
        </tbody></table>
        <h5>Datenunabhängigkeit</h5>
        <ul>
          <li><strong>Physische Datenunabhängigkeit:</strong> Änderungen der internen Ebene (neuer Index, anderes Speichermedium, andere Dateiorganisation) wirken sich weder auf das konzeptionelle Schema noch auf die Anwendungen aus.</li>
          <li><strong>Logische Datenunabhängigkeit:</strong> Änderungen am konzeptionellen Schema (neue Spalte, neue Tabelle) erfordern keine Änderung der externen Sichten und Programme, solange diese ihre Daten weiterhin erhalten.</li>
        </ul>
        <div class="callout beispiel"><strong>Beispiel:</strong> Die Nordlicht IT GmbH in Heide zieht ihre Datenbank auf ein neues SSD-Storage um und legt einen Index auf die Kundennamen. Betroffen ist nur die interne Ebene – alle Programme laufen unverändert weiter (physische Datenunabhängigkeit). Später kommt in der Kundentabelle die Spalte <code>E_Mail</code> hinzu. Die View der Buchhaltung bleibt gleich, das Buchhaltungsprogramm muss nicht angepasst werden (logische Datenunabhängigkeit).</div>
        <div class="callout achtung"><strong>Achtung:</strong> Logische Datenunabhängigkeit ist schwerer zu erreichen als physische. Wird eine Spalte gelöscht oder umbenannt, die eine View benötigt, muss die View angepasst werden.</div>
        <h5>Zuordnung zu SQL</h5>
        <ul>
          <li>Externe Ebene → <code>CREATE VIEW</code>, Rechte mit <code>GRANT</code></li>
          <li>Konzeptionelle Ebene → <code>CREATE TABLE</code>, <code>ALTER TABLE</code>, Constraints</li>
          <li>Interne Ebene → <code>CREATE INDEX</code>, Speicher-Engine, Tablespaces, Partitionierung</li>
        </ul>
        <h5>Schichtenarchitektur von Datenbankanwendungen</h5>
        <table><thead><tr><th>Architektur</th><th>Aufbau</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td>2-Tier (Client-Server)</td><td>Client mit Oberfläche und Logik (Fat Client) greift direkt auf den Datenbankserver zu</td><td>Desktop-Frontend verbindet sich per ODBC mit dem SQL-Server</td></tr>
          <tr><td>3-Tier</td><td>Präsentation (Browser, App) → Anwendungslogik (Web- bzw. Applikationsserver, REST-API) → Datenhaltung (DB-Server)</td><td>Online-Shop: Browser → Webserver mit PHP/Python → MariaDB</td></tr>
          <tr><td>Multi-Tier</td><td>weitere Schichten wie Load Balancer, Cache, Microservices</td><td>große Webplattformen</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>Merke:</strong> In der 3-Tier-Architektur spricht der Client nie direkt mit der Datenbank. Der DB-Server kann im internen Netz bleiben, nur der Applikationsserver darf zugreifen – ein klarer Sicherheitsvorteil.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Beschreiben</em> Sie die drei Ebenen der ANSI-SPARC-Architektur.“ · „<em>Erläutern</em> Sie physische Datenunabhängigkeit an einem Beispiel.“ · „<em>Ordnen</em> Sie folgende Änderungen einer Ebene zu.“ · „<em>Vergleichen</em> Sie 2-Tier- und 3-Tier-Architektur.“</div>
      `
    },
    {
      id: "db-modelle",
      title: "Datenbankmodelle: hierarchisch, Netzwerk, relational, objektorientiert",
      exam: ["AP2"],
      summary: "Aufbau, Zugriff, Vor- und Nachteile sowie Einsatzgebiete der klassischen Datenbankmodelle im Vergleich.",
      html: `
        <p>Ein <strong>Datenbankmodell</strong> legt fest, wie Daten strukturiert und verknüpft werden und wie man auf sie zugreift. Historisch folgten aufeinander: das hierarchische Modell (1960er), das Netzwerkmodell (CODASYL, ab Ende der 1960er), das relationale Modell (Codd, 1970), objektorientierte Datenbanken (1980er/90er) und NoSQL-Systeme (ab den 2000ern).</p>
        <h5>Hierarchisches Modell</h5>
        <p>Die Daten bilden einen <strong>Baum</strong>: Jeder Datensatz hat genau einen Vorgänger (Elternsatz), ein Elternsatz kann mehrere Nachfolger haben. Es lassen sich also nur 1:n-Beziehungen direkt abbilden. Der Zugriff erfolgt <em>navigierend</em> von der Wurzel entlang eines Pfads.</p>
        <pre class="ascii">
Firma
 ├── Abteilung IT
 │    ├── Mitarbeiter Jensen
 │    └── Mitarbeiter Petersen
 └── Abteilung Vertrieb
      └── Mitarbeiter Hansen
</pre>
        <ul>
          <li><strong>Beispiele:</strong> IBM IMS auf Großrechnern, Verzeichnisdienste (LDAP, Active Directory), Windows-Registry, Verzeichnisbaum eines Dateisystems</li>
          <li><strong>Vorteile:</strong> einfach verständlich, sehr schnell bei festen Zugriffspfaden von oben nach unten</li>
          <li><strong>Nachteile:</strong> n:m-Beziehungen nur mit Redundanz abbildbar, unflexibel bei neuen Abfragen, ein Kindsatz kann nicht ohne Elternsatz existieren</li>
        </ul>
        <h5>Netzwerkmodell</h5>
        <p>Das Netzwerkmodell erweitert den Baum: Ein Datensatz darf <strong>mehrere Vorgänger und Nachfolger</strong> haben, es entsteht ein Netz. Vorbild war der <em>Integrated Data Store</em> (IDS) von Charles Bachman aus den 1960er-Jahren, standardisiert wurde das Modell von der CODASYL-Gruppe (Data Base Task Group, ab 1969). Ein Datensatz heißt <em>Record</em>, sein Aufbau <em>Record Type</em>. Beziehungen heißen <em>Sets</em>: Jedes Set ist eine 1:n-Beziehung aus einem <em>Owner</em>- und mehreren <em>Member</em>-Records; technisch sind sie über Zeiger (Pointer) verknüpft. Weil ein Record Member in mehreren Sets sein darf, entsteht das Netz. Eine n:m-Beziehung wird über einen Verbindungsdatensatz gelöst, z. B. <em>Teilnahme</em> zwischen Schüler und Kurs.</p>
        <ul>
          <li><strong>Beispiele:</strong> IDMS und andere CODASYL-Systeme in älteren Großrechneranwendungen (Banken, Produktion, Reservierung)</li>
          <li><strong>Vorteile:</strong> mehrere Beziehungen möglich, weniger Redundanz als im Baum, sehr schnell bei bekannten Zugriffspfaden</li>
          <li><strong>Nachteile:</strong> komplex und bei Wachstum unübersichtlich, Programmierer müssen die Zugriffspfade kennen, Strukturänderungen sind aufwendig</li>
        </ul>
        <div class="callout achtung"><strong>Achtung:</strong> „Netzwerk“ meint hier kein LAN, sondern die netzartige Verknüpfung der Datensätze. Und das alte Netzwerkmodell ist nicht dasselbe wie eine moderne Graphdatenbank.</div>
        <h5>Relationales Modell</h5>
        <p>Edgar F. Codd stellte es 1970 vor. Daten liegen in <strong>Tabellen</strong> (Relationen) aus Zeilen (Tupel, Datensätze) und Spalten (Attribute). Beziehungen entstehen nicht über Zeiger, sondern über <strong>Werte</strong>: Ein Fremdschlüssel verweist auf den Primärschlüssel einer anderen Tabelle. Abgefragt wird <em>deklarativ</em> mit SQL – du beschreibst, <em>was</em> du willst, nicht <em>wie</em> das DBMS es findet.</p>
        <ul>
          <li><strong>Beispiele:</strong> MariaDB/MySQL, PostgreSQL, Microsoft SQL Server, Oracle Database, SQLite</li>
          <li><strong>Vorteile:</strong> flexibel für spontane Abfragen, mathematisch fundiert, Normalisierung vermeidet Redundanz, ACID-Transaktionen, standardisierte Sprache SQL</li>
          <li><strong>Nachteile:</strong> Schema muss vorab geplant werden, Joins über viele Tabellen sind bei sehr großen Datenmengen teuer, horizontale Skalierung ist schwieriger, komplexe Objekte müssen auf Tabellen zerlegt werden</li>
        </ul>
        <h5>Objektorientiertes Modell</h5>
        <p>Objektorientierte Datenbanken speichern Objekte so, wie sie in der objektorientierten Programmierung vorkommen: mit Attributen, Methoden, Vererbung und einer eindeutigen Objektidentität (OID). Verschachtelte Objekte müssen nicht auf Tabellen verteilt werden. Reine OODBMS sind Nischenprodukte (z. B. ObjectDB). Verbreiteter sind <strong>objektrelationale</strong> Systeme wie PostgreSQL mit eigenen Datentypen sowie ORM-Frameworks (z. B. Hibernate, Entity Framework), die Objekte auf relationale Tabellen abbilden.</p>
        <ul>
          <li><strong>Einsatz:</strong> CAD, Multimedia, technische und wissenschaftliche Anwendungen mit komplexen Strukturen</li>
          <li><strong>Vorteile:</strong> keine Zerlegung komplexer Objekte, passt direkt zur OOP, Vererbung möglich</li>
          <li><strong>Nachteile:</strong> kaum Standardisierung, geringe Verbreitung, wenig Werkzeuge und Fachkräfte, Ad-hoc-Abfragen schwieriger</li>
        </ul>
        <h5>Vergleich</h5>
        <table><thead><tr><th>Modell</th><th>Struktur</th><th>Beziehungen</th><th>Zugriff</th></tr></thead><tbody>
          <tr><td>hierarchisch</td><td>Baum</td><td>1:n (Eltern–Kind)</td><td>navigierend ab der Wurzel</td></tr>
          <tr><td>Netzwerk</td><td>Netz aus Datensätzen</td><td>auch n:m (Sets, Zeiger)</td><td>navigierend über Zeiger</td></tr>
          <tr><td>relational</td><td>Tabellen</td><td>über Schlüsselwerte</td><td>deklarativ mit SQL</td></tr>
          <tr><td>objektorientiert</td><td>Objekte mit Methoden</td><td>Objektreferenzen (OID)</td><td>über Objektbeziehungen</td></tr>
          <tr><td>NoSQL</td><td>Key-Value, Dokument, Spalten, Graph</td><td>je nach Typ</td><td>eigene APIs und Abfragesprachen</td></tr>
        </tbody></table>
        <div class="callout tipp"><strong>Merkhilfe:</strong> hierarchisch = Baum · Netzwerk = Spinnennetz · relational = Tabellen · objektorientiert = Objekte wie im Programmcode.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Nennen</em> Sie zwei Datenbankmodelle und je ein Einsatzgebiet.“ · „<em>Beschreiben</em> Sie den Aufbau des hierarchischen Modells.“ · „<em>Begründen</em> Sie, warum sich das relationale Modell durchgesetzt hat.“ Antworte mit Struktur, Beziehungsart und je einem Vor- und Nachteil.</div>
      `
    },
    {
      id: "nosql",
      title: "NoSQL-Datenbanken, CAP und BASE",
      exam: ["AP2"],
      summary: "Key-Value-, Dokument-, Spalten- und Graphdatenbanken, CAP-Theorem, BASE vs. ACID und die begründete Wahl zwischen relational und NoSQL.",
      html: `
        <p><strong>NoSQL</strong> steht heute meist für „Not only SQL“: Datenbanken, die nicht (nur) auf dem relationalen Tabellenmodell beruhen. Sie entstanden, als Webfirmen riesige, schnell wachsende und oft unstrukturierte Datenmengen auf viele günstige Server verteilen wollten.</p>
        <ul>
          <li><strong>schemafrei bzw. schemaflexibel:</strong> Datensätze müssen nicht alle dieselben Felder haben.</li>
          <li><strong>horizontal skalierbar:</strong> mehr Server statt größerer Server (Sharding, Replikation).</li>
          <li>häufig <strong>BASE</strong> statt strenger ACID-Konsistenz, eigene Abfrage-APIs statt Standard-SQL.</li>
        </ul>
        <h5>Die vier Haupttypen</h5>
        <table><thead><tr><th>Typ</th><th>Prinzip</th><th>Beispiele</th><th>typischer Einsatz</th></tr></thead><tbody>
          <tr><td><strong>Key-Value-Store</strong></td><td>eindeutiger Schlüssel → beliebiger Wert; die DB interpretiert den Wert nicht</td><td>Redis, Amazon DynamoDB</td><td>Caching, Sitzungsdaten, Warenkorb</td></tr>
          <tr><td><strong>Dokumentenorientiert</strong></td><td>Dokumente (meist JSON bzw. BSON) mit flexibler, verschachtelter Struktur; über ID und Felder abfragbar</td><td>MongoDB, CouchDB</td><td>Produktkataloge, Content-Management, App-Backends</td></tr>
          <tr><td><strong>Spaltenorientiert</strong> (Wide Column)</td><td>Zeilen mit Spaltenfamilien, jede Zeile darf andere Spalten haben; auf viele Knoten verteilt</td><td>Apache Cassandra, HBase</td><td>Sensor- und Logdaten, Zeitreihen, sehr hohe Schreiblast</td></tr>
          <tr><td><strong>Graphdatenbank</strong></td><td>Knoten und Kanten mit Eigenschaften; Beziehungen stehen im Mittelpunkt</td><td>Neo4j</td><td>soziale Netzwerke, Empfehlungen, Betrugserkennung, Netztopologien</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel Dokumentenspeicher:</strong> Ein Kundendokument enthält eine Liste von Ansprechpartnern. Der zweite Ansprechpartner hat keine Rolle eingetragen – für die Dokumentendatenbank kein Problem. Relational bräuchtest du dafür eine eigene Tabelle <code>Ansprechpartner</code> mit Fremdschlüssel.
<pre><code>{
  "_id": "K-1001",
  "firma": "Deichbau Meyer KG",
  "ort": "Heide",
  "ansprechpartner": [
    { "name": "Jensen", "rolle": "Einkauf" },
    { "name": "Hansen" }
  ]
}</code></pre></div>
        <h5>CAP-Theorem</h5>
        <p>Nach Eric Brewer (2000) kann ein <strong>verteiltes</strong> Datenbanksystem von drei Eigenschaften höchstens zwei gleichzeitig garantieren:</p>
        <ul>
          <li><strong>C – Consistency (Konsistenz):</strong> Alle Knoten liefern zum selben Zeitpunkt dieselben Daten.</li>
          <li><strong>A – Availability (Verfügbarkeit):</strong> Jede Anfrage erhält eine Antwort.</li>
          <li><strong>P – Partition Tolerance (Partitionstoleranz):</strong> Das System arbeitet weiter, auch wenn die Verbindung zwischen Knoten unterbrochen ist.</li>
        </ul>
        <p>Da Netzwerkstörungen in verteilten Systemen nie auszuschließen sind, ist P praktisch Pflicht. Im Störungsfall entscheidet man sich also zwischen <strong>CP</strong> (lieber keine Antwort als eine veraltete – z. B. Kontostand) und <strong>AP</strong> (immer antworten, notfalls mit leicht veralteten Daten – z. B. Like-Zähler).</p>
        <h5>ACID vs. BASE</h5>
        <table><thead><tr><th>ACID</th><th>BASE</th></tr></thead><tbody>
          <tr><td>Atomicity, Consistency, Isolation, Durability</td><td>Basically Available, Soft State, Eventually Consistent</td></tr>
          <tr><td>nach jeder Transaktion sofort konsistent</td><td>Konsistenz stellt sich nach kurzer Zeit ein (eventual consistency)</td></tr>
          <tr><td>Priorität: Korrektheit</td><td>Priorität: Verfügbarkeit und Skalierbarkeit</td></tr>
          <tr><td>typisch für relationale DBMS</td><td>typisch für verteilte NoSQL-Systeme</td></tr>
          <tr><td>Beispiel: Banküberweisung, Lagerbuchung</td><td>Beispiel: Follower-Zahl, Produktbewertungen</td></tr>
        </tbody></table>
        <div class="callout achtung"><strong>Achtung:</strong> Die Grenzen verschwimmen. MongoDB unterstützt z. B. ACID-Transaktionen, PostgreSQL speichert JSON-Dokumente (<code>jsonb</code>). „NoSQL“ bedeutet nicht „SQL verboten“, sondern „nicht nur SQL“.</div>
        <h5>Relational oder NoSQL?</h5>
        <table><thead><tr><th>relational wählen, wenn …</th><th>NoSQL wählen, wenn …</th></tr></thead><tbody>
          <tr><td>die Struktur fest und bekannt ist</td><td>sich die Struktur häufig ändert oder unstrukturiert ist</td></tr>
          <tr><td>viele Beziehungen und Joins nötig sind</td><td>einfache Zugriffe über Schlüssel dominieren</td></tr>
          <tr><td>strenge Konsistenz Pflicht ist (Buchhaltung, Warenwirtschaft)</td><td>riesige Datenmengen und hohe Schreiblast horizontal skaliert werden müssen</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>Merke:</strong> NoSQL-Vorteile sind Skalierbarkeit, Flexibilität und Geschwindigkeit bei einfachen Zugriffen. Die Nachteile sind oft schwächere Konsistenz, keine einheitliche Abfragesprache und bewusst in Kauf genommene Redundanz.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Nennen</em> Sie drei Arten von NoSQL-Datenbanken mit je einem Einsatzbeispiel.“ · „<em>Erläutern</em> Sie das CAP-Theorem.“ · „<em>Beurteilen</em> Sie, ob für die Sensordaten eine relationale oder eine NoSQL-Datenbank besser geeignet ist.“ Bei „beurteilen“ zählt die begründete Entscheidung.</div>
      `
    },
    {
      id: "erm",
      title: "ER-Modellierung (Chen- und Min-Max-Notation)",
      exam: ["AP1", "AP2"],
      summary: "Entitäten, Attribute, Schlüssel und Beziehungen modellieren, Kardinalitäten 1:1, 1:n, n:m in Chen-Notation und (min,max)-Notation lesen und eintragen.",
      html: `
        <p>Das <strong>Entity-Relationship-Modell (ERM)</strong> nach Peter Chen (1976) beschreibt einen Ausschnitt der realen Welt grafisch und unabhängig vom späteren DBMS. Es ist der Bauplan für die Datenbank und gehört schon in der <strong>AP1</strong> zu den punktstarken Themen.</p>
        <h5>Grundbegriffe und Symbole</h5>
        <table><thead><tr><th>Begriff</th><th>Bedeutung</th><th>Symbol (Chen)</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td>Entität</td><td>einzelnes, eindeutig unterscheidbares Objekt</td><td>–</td><td>der Kunde „Deichbau Meyer KG“</td></tr>
          <tr><td>Entitätstyp</td><td>Menge gleichartiger Entitäten</td><td>Rechteck</td><td>Kunde, Auftrag, Artikel</td></tr>
          <tr><td>Attribut</td><td>Eigenschaft eines Entitätstyps (oder einer Beziehung)</td><td>Ellipse</td><td>Name, Ort, Datum</td></tr>
          <tr><td>Schlüsselattribut</td><td>identifiziert jede Entität eindeutig</td><td>Ellipse, Name unterstrichen</td><td>KundenNr</td></tr>
          <tr><td>Beziehungstyp</td><td>Zusammenhang zwischen Entitätstypen</td><td>Raute</td><td>Kunde <em>erteilt</em> Auftrag</td></tr>
          <tr><td>Kardinalität</td><td>wie viele Entitäten an einer Beziehung beteiligt sein können</td><td>1, n, m an den Linien</td><td>1:n</td></tr>
        </tbody></table>
        <pre class="ascii">
 (KundenNr) (Name) (Ort)              (AuftragsNr) (Datum) (Betrag)
      │        │     │                      │         │        │
   ┌──────────────────┐ 1              n ┌──────────────────────┐
   │      Kunde       │───&lt; erteilt &gt;────│       Auftrag        │
   └──────────────────┘                  └──────────────────────┘
</pre>
        <p>Gelesen: <em>Ein Kunde erteilt n (beliebig viele) Aufträge – ein Auftrag wird von genau einem Kunden erteilt.</em> Schlüsselattribute (hier KundenNr und AuftragsNr) werden im Diagramm unterstrichen.</p>
        <h5>Beziehungsarten</h5>
        <table><thead><tr><th>Kardinalität</th><th>Bedeutung</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td>1:1</td><td>jeder A-Entität ist höchstens eine B-Entität zugeordnet und umgekehrt</td><td>Mitarbeiter – Dienstwagen</td></tr>
          <tr><td>1:n</td><td>eine A-Entität hat viele B-Entitäten, jede B-Entität gehört zu genau einer A-Entität</td><td>Abteilung – Mitarbeiter</td></tr>
          <tr><td>n:m</td><td>viele A-Entitäten stehen mit vielen B-Entitäten in Beziehung</td><td>Mitarbeiter – Projekt, Schüler – Kurs</td></tr>
        </tbody></table>
        <p>Weitere Elemente: <strong>Beziehungsattribute</strong> hängen an der Raute (z. B. <em>Stunden</em> bei „Mitarbeiter arbeitet in Projekt“). Eine <strong>rekursive Beziehung</strong> verbindet einen Entitätstyp mit sich selbst (z. B. „Mitarbeiter ist Vorgesetzter von Mitarbeiter“, 1:n).</p>
        <h5>(min,max)-Notation</h5>
        <p>Die Min-Max-Notation gibt für jeden Entitätstyp an, an wie vielen Beziehungen <strong>eine einzelne Entität mindestens und höchstens</strong> teilnimmt. <code>min = 0</code> heißt „kann“ (optional), <code>min = 1</code> heißt „muss“ (Pflicht).</p>
        <pre class="ascii">
   ┌───────┐ (0,n)                (1,1) ┌─────────┐
   │ Kunde │────────&lt; erteilt &gt;─────────│ Auftrag │
   └───────┘                            └─────────┘
</pre>
        <p>Gelesen: <em>Ein Kunde erteilt 0 bis n Aufträge (ein Neukunde hat noch keinen). Ein Auftrag wird von mindestens einem und höchstens einem – also genau einem – Kunden erteilt.</em></p>
        <div class="callout achtung"><strong>Prüfungsfalle Leserichtung:</strong> In der Chen-Notation steht die „1“ beim Kunden, in der Min-Max-Notation steht beim Kunden „(0,n)“. Die Angaben sitzen also auf der jeweils anderen Seite. Krähenfuß- und UML-Notation (z. B. <code>1</code> und <code>0..*</code>) lesen sich wie Chen. Prüfe immer, welche Notation die Aufgabe verlangt.</div>
        <h5>Krähenfuß-Notation</h5>
        <p>Datenbank-Werkzeuge wie die MySQL Workbench zeichnen Beziehungen oft in der <strong>Krähenfuß-Notation</strong> (Crow's Foot). Am Linienende stehen zwei Zeichen: Das Zeichen direkt an der Entität ist das <strong>Maximum</strong>, das Zeichen davor das <strong>Minimum</strong>.</p>
        <table><thead><tr><th>Zeichen am Linienende</th><th>Bedeutung</th></tr></thead><tbody>
          <tr><td><code>||</code> (zwei Striche)</td><td>genau eins (1,1)</td></tr>
          <tr><td><code>○|</code> (Kreis, Strich)</td><td>null oder eins (0,1)</td></tr>
          <tr><td><code>|&lt;</code> (Strich, Krähenfuß)</td><td>eins bis viele (1,n)</td></tr>
          <tr><td><code>○&lt;</code> (Kreis, Krähenfuß)</td><td>null bis viele (0,n)</td></tr>
        </tbody></table>
        <pre class="ascii">
   ┌───────┐                        ┌─────────┐
   │ Kunde │─||──────────────────○&lt;─│ Auftrag │
   └───────┘                        └─────────┘
</pre>
        <p>Gelesen: <em>Ein Kunde hat null bis viele Aufträge (○&lt; beim Auftrag). Ein Auftrag gehört zu genau einem Kunden (|| beim Kunden).</em> Die Zeichen stehen also auf derselben Seite wie in der Chen-Notation.</p>
        <h5>Besondere Attributarten</h5>
        <table><thead><tr><th>Attributart</th><th>Beispiel</th><th>Umsetzung in Tabellen</th></tr></thead><tbody>
          <tr><td>zusammengesetzt</td><td>Adresse = Straße, PLZ, Ort</td><td>in einzelne Spalten zerlegen</td></tr>
          <tr><td>mehrwertig (Chen: doppelte Ellipse)</td><td>mehrere Telefonnummern je Kunde</td><td>eigene Tabelle mit Fremdschlüssel – ein Feld mit mehreren Werten verletzt die 1NF</td></tr>
          <tr><td>abgeleitet (Chen: gestrichelte Ellipse)</td><td>Alter aus dem Geburtsdatum</td><td>meist nicht speichern, sondern bei Bedarf berechnen</td></tr>
        </tbody></table>
        <h5>Vorgehen beim Modellieren</h5>
        <ol>
          <li>Substantive im Aufgabentext markieren → Kandidaten für Entitätstypen.</li>
          <li>Eigenschaften zuordnen → Attribute; für jeden Entitätstyp einen Schlüssel festlegen.</li>
          <li>Verben suchen → Beziehungstypen („bestellt“, „leiht“, „arbeitet in“).</li>
          <li>Für jede Beziehung in <strong>beide Richtungen</strong> fragen: „Wie viele B gehören zu einem A?“ → Kardinalität.</li>
          <li>Attribute, die erst durch die Beziehung entstehen (Menge, Datum, Note), an die Raute hängen.</li>
        </ol>
        <div class="callout beispiel"><strong>Beispiel:</strong> Ein Fahrradverleih in St. Peter-Ording möchte speichern, welcher Kunde wann welches Fahrrad geliehen hat. Entitätstypen: <em>Kunde</em> (KundenNr, Name, Telefon) und <em>Fahrrad</em> (RadNr, Typ, Tagespreis). Beziehung: Kunde <em>leiht</em> Fahrrad. Ein Kunde leiht im Laufe der Zeit viele Räder, ein Rad wird von vielen Kunden geliehen → <strong>n:m</strong>. Die Attribute <em>Ausleihdatum</em> und <em>Rückgabedatum</em> gehören zur Beziehung, nicht zu Kunde oder Fahrrad.</div>
        <div class="callout merke"><strong>Merke:</strong> Entitätstyp = Rechteck, Attribut = Ellipse, Beziehung = Raute. Kardinalitäten immer in beide Richtungen prüfen – der häufigste Fehler ist eine 1:n-Beziehung, die in Wahrheit n:m ist.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> In AP1 und AP2 sollst du ein ER-Modell zu einer Situationsbeschreibung <em>erstellen</em> oder <em>ergänzen</em>, fehlende Kardinalitäten <em>eintragen</em> oder ein gegebenes Modell <em>erläutern</em>. Achte auf die geforderte Notation, beschrifte Beziehungen mit Verben und unterstreiche die Schlüssel.</div>
      `
    },
    {
      id: "relationenmodell",
      title: "Relationenmodell, Schlüssel & Überführung",
      exam: ["AP1", "AP2"],
      summary: "Relation, Tupel, Attribut, Primär-, Fremd- und zusammengesetzte Schlüssel, Überführung von 1:1-, 1:n- und n:m-Beziehungen, referenzielle Integrität und Lösch-/Aktualisierungsweitergabe.",
      html: `
        <p>Im <strong>Relationenmodell</strong> wird aus dem ER-Modell eine Menge von Tabellen. Diese logische Struktur setzt du später mit SQL um.</p>
        <h5>Begriffe</h5>
        <table><thead><tr><th>Fachbegriff</th><th>umgangssprachlich</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td>Relation</td><td>Tabelle</td><td>Kunde</td></tr>
          <tr><td>Tupel</td><td>Zeile, Datensatz</td><td>1 | Deichbau Meyer KG | Heide</td></tr>
          <tr><td>Attribut</td><td>Spalte, Feldname</td><td>Ort</td></tr>
          <tr><td>Domäne</td><td>Wertebereich eines Attributs</td><td>PLZ: fünfstellige Zeichenkette</td></tr>
          <tr><td>Relationenschema</td><td>Tabellenname mit Attributen</td><td>Kunde (KundenNr, Firma, Ort)</td></tr>
        </tbody></table>
        <h5>Schlüssel</h5>
        <ul>
          <li><strong>Schlüsselkandidat:</strong> minimale Attributkombination, die jedes Tupel eindeutig identifiziert.</li>
          <li><strong>Primärschlüssel (PK):</strong> der ausgewählte Kandidat – eindeutig, nie NULL, möglichst unveränderlich.</li>
          <li><strong>Zusammengesetzter Schlüssel:</strong> PK aus mehreren Attributen, z. B. (BestellNr, ArtikelNr).</li>
          <li><strong>Natürlicher Schlüssel</strong> hat fachliche Bedeutung (ISBN, Kfz-Kennzeichen); <strong>künstlicher Schlüssel</strong> (Surrogatschlüssel) ist eine fortlaufende ID ohne Bedeutung (<code>AUTO_INCREMENT</code>).</li>
          <li><strong>Fremdschlüssel (FK):</strong> Attribut, das auf den Primärschlüssel einer anderen (oder derselben) Tabelle verweist und so die Beziehung herstellt.</li>
        </ul>
        <p>Schreibweise in Prüfungen: Primärschlüssel werden unterstrichen, Fremdschlüssel oft mit ↑ oder # markiert. Hier schreiben wir <code>[PK]</code> und <code>[FK]</code>: Kunde (KundenNr [PK], Firma, Ort) – Auftrag (AuftragsNr [PK], Datum, KundenNr [FK]).</p>
        <h5>Überführung ERM → Tabellen</h5>
        <table><thead><tr><th>Beziehung</th><th>Regel</th><th>Ergebnis</th></tr></thead><tbody>
          <tr><td>1:1</td><td>PK einer Seite wird FK der anderen Seite (mit <code>UNIQUE</code>), meist in der Tabelle, deren Datensätze immer einen Partner haben – so entstehen keine NULL-Werte (jeder Dienstwagen gehört zu einem Mitarbeiter, aber nicht jeder Mitarbeiter hat einen Dienstwagen); alternativ beide Tabellen zusammenlegen</td><td>Dienstwagen (Kennzeichen [PK], Modell, PersNr [FK, UNIQUE])</td></tr>
          <tr><td>1:n</td><td>PK der 1-Seite wird FK in der Tabelle der n-Seite</td><td>Auftrag (AuftragsNr [PK], Datum, KundenNr [FK])</td></tr>
          <tr><td>n:m</td><td>eigene <strong>Zwischentabelle</strong> (Verbindungs-, Koppeltabelle) mit den PKs beider Seiten als FKs; zusammen bilden sie den PK; Beziehungsattribute kommen dazu</td><td>Projektmitarbeit (PersNr [PK, FK], ProjektNr [PK, FK], Stunden)</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel n:m:</strong> Mitarbeiter arbeiten in Projekten mit einer bestimmten Stundenzahl. Aus zwei Entitätstypen und einer n:m-Beziehung werden <strong>drei Tabellen</strong>:<br>
        Mitarbeiter: (1, Jensen), (2, Petersen)<br>
        Projekt: (P1, Umzug Rechenzentrum), (P2, WLAN Berufsschule)<br>
        Projektmitarbeit (PersNr, ProjektNr, Stunden): (1, P1, 40), (1, P2, 12), (2, P1, 25)<br>
        Jensen arbeitet in zwei Projekten, an P1 arbeiten zwei Mitarbeiter – ohne ein einziges mehrwertiges Feld.</div>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Eine n:m-Beziehung lässt sich nie mit nur einem Fremdschlüssel lösen. Eine Spalte „Projekte = P1, P2“ verletzt die 1. Normalform.</div>
        <h5>Referenzielle Integrität</h5>
        <p>Jeder Fremdschlüsselwert muss als Primärschlüsselwert in der referenzierten Tabelle existieren (oder NULL sein, wenn das erlaubt ist). Das DBMS verhindert z. B. einen Auftrag für Kunde 99, den es nicht gibt. Was beim Löschen oder Ändern eines referenzierten Datensatzes passiert, legst du fest:</p>
        <table><thead><tr><th>Regel</th><th>Wirkung</th></tr></thead><tbody>
          <tr><td><code>RESTRICT</code> / <code>NO ACTION</code></td><td>Löschen bzw. Ändern wird abgewiesen, solange abhängige Datensätze existieren (Standardverhalten).</td></tr>
          <tr><td><code>CASCADE</code></td><td><strong>Löschweitergabe</strong>: abhängige Datensätze werden mitgelöscht; <strong>Aktualisierungsweitergabe</strong>: geänderte Schlüsselwerte werden in die FKs übernommen.</td></tr>
          <tr><td><code>SET NULL</code></td><td>Der Fremdschlüssel der abhängigen Datensätze wird auf NULL gesetzt.</td></tr>
        </tbody></table>
        <pre><code>CREATE TABLE Auftrag (
  AuftragsNr INT PRIMARY KEY,
  Datum      DATE NOT NULL,
  KundenNr   INT NOT NULL,
  FOREIGN KEY (KundenNr) REFERENCES Kunde(KundenNr)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);</code></pre>
        <h5>Integritätsarten im Überblick</h5>
        <ul>
          <li><strong>Entitätsintegrität:</strong> Jeder Datensatz hat einen eindeutigen PK, der nicht NULL ist.</li>
          <li><strong>Referenzielle Integrität:</strong> Fremdschlüssel verweisen nur auf existierende Datensätze.</li>
          <li><strong>Domänenintegrität:</strong> Werte liegen im erlaubten Wertebereich (Datentyp, <code>NOT NULL</code>, <code>CHECK</code>).</li>
          <li><strong>Semantische Integrität:</strong> fachliche Regeln, z. B. Rückgabedatum ≥ Ausleihdatum.</li>
        </ul>
        <div class="callout merke"><strong>Merke:</strong> 1:n → FK auf die n-Seite. n:m → Zwischentabelle mit zusammengesetztem PK. 1:1 → FK mit UNIQUE auf eine Seite.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Überführen</em> Sie das ER-Modell in ein Relationenmodell und <em>kennzeichnen</em> Sie Primär- und Fremdschlüssel.“ · „<em>Erläutern</em> Sie den Begriff referenzielle Integrität.“ · „<em>Beschreiben</em> Sie die Auswirkung von ON DELETE CASCADE.“</div>
      `
    },
    {
      id: "normalisierung",
      title: "Anomalien & Normalisierung (1NF bis 3NF)",
      exam: ["AP2"],
      summary: "Einfüge-, Änderungs- und Löschanomalien erkennen, funktionale Abhängigkeiten bestimmen und eine Tabelle Schritt für Schritt in die 1., 2. und 3. Normalform überführen.",
      html: `
        <p><strong>Normalisierung</strong> zerlegt Tabellen so, dass Redundanz verschwindet und keine Anomalien mehr auftreten. Ausgangspunkt ist eine „gewachsene“ Liste der Nordlicht IT GmbH:</p>
        <table><thead><tr><th>BestellNr</th><th>Datum</th><th>KundenNr</th><th>Kunde</th><th>Ort</th><th>Artikel</th></tr></thead><tbody>
          <tr><td>5001</td><td>02.09.2026</td><td>K10</td><td>Deichbau Meyer KG</td><td>Heide</td><td>2 × A1 Notebook NB-14 (1.249 €), 1 × A7 Dockingstation (189 €)</td></tr>
          <tr><td>5002</td><td>03.09.2026</td><td>K11</td><td>Kanzlei Petersen</td><td>Meldorf</td><td>3 × A7 Dockingstation (189 €)</td></tr>
          <tr><td>5003</td><td>05.09.2026</td><td>K10</td><td>Deichbau Meyer KG</td><td>Heide</td><td>1 × A3 Monitor 24 (329 €)</td></tr>
        </tbody></table>
        <h5>Anomalien</h5>
        <ul>
          <li><strong>Einfügeanomalie:</strong> Ein neuer Artikel (z. B. Headset) oder ein Neukunde lässt sich erst speichern, wenn eine Bestellung existiert.</li>
          <li><strong>Änderungsanomalie:</strong> Zieht Deichbau Meyer um, muss der Ort in allen Bestellungen geändert werden. Wird eine Zeile vergessen, ist die Datenbank inkonsistent.</li>
          <li><strong>Löschanomalie:</strong> Wird Bestellung 5002 gelöscht, verschwinden auch alle Informationen über die Kanzlei Petersen.</li>
        </ul>
        <h5>Funktionale Abhängigkeit</h5>
        <p>B ist <strong>funktional abhängig</strong> von A (A → B), wenn zu jedem Wert von A genau ein Wert von B gehört: KundenNr → Kunde, Ort. <strong>Voll funktional abhängig</strong> heißt: abhängig vom gesamten zusammengesetzten Schlüssel, nicht nur von einem Teil. <strong>Transitiv abhängig</strong> heißt: A → B → C, wobei B kein Schlüssel ist.</p>
        <h5>1. Normalform – alle Werte atomar</h5>
        <p>Jedes Feld enthält genau einen, nicht weiter zerlegbaren Wert; es gibt keine Wiederholungsgruppen. Die Artikelliste wird auf Zeilen verteilt und in ArtNr, Bezeichnung, Einzelpreis und Menge zerlegt. Primärschlüssel: (BestellNr, ArtNr).</p>
        <table><thead><tr><th>BestellNr</th><th>ArtNr</th><th>Datum</th><th>KundenNr</th><th>Kunde</th><th>Ort</th><th>Bezeichnung</th><th>Preis</th><th>Menge</th></tr></thead><tbody>
          <tr><td>5001</td><td>A1</td><td>02.09.2026</td><td>K10</td><td>Deichbau Meyer KG</td><td>Heide</td><td>Notebook NB-14</td><td>1249</td><td>2</td></tr>
          <tr><td>5001</td><td>A7</td><td>02.09.2026</td><td>K10</td><td>Deichbau Meyer KG</td><td>Heide</td><td>Dockingstation</td><td>189</td><td>1</td></tr>
          <tr><td>5002</td><td>A7</td><td>03.09.2026</td><td>K11</td><td>Kanzlei Petersen</td><td>Meldorf</td><td>Dockingstation</td><td>189</td><td>3</td></tr>
          <tr><td>5003</td><td>A3</td><td>05.09.2026</td><td>K10</td><td>Deichbau Meyer KG</td><td>Heide</td><td>Monitor 24</td><td>329</td><td>1</td></tr>
        </tbody></table>
        <h5>2. Normalform – voll vom ganzen Schlüssel abhängig</h5>
        <p>1NF und jedes Nichtschlüsselattribut hängt vom <em>gesamten</em> Primärschlüssel ab. Prüfung je Attribut: Datum, KundenNr, Kunde, Ort hängen nur von BestellNr ab; Bezeichnung und Preis nur von ArtNr; nur Menge braucht beide Teile. Zerlegung:</p>
        <ul>
          <li>Bestellung (BestellNr [PK], Datum, KundenNr, Kunde, Ort)</li>
          <li>Artikel (ArtNr [PK], Bezeichnung, Preis)</li>
          <li>Bestellposition (BestellNr [PK, FK], ArtNr [PK, FK], Menge)</li>
        </ul>
        <h5>3. Normalform – keine transitiven Abhängigkeiten</h5>
        <p>2NF und kein Nichtschlüsselattribut hängt von einem anderen Nichtschlüsselattribut ab. In <em>Bestellung</em> gilt BestellNr → KundenNr → Kunde, Ort – das ist transitiv. Also wird der Kunde ausgelagert:</p>
        <ul>
          <li>Kunde (KundenNr [PK], Kunde, Ort)</li>
          <li>Bestellung (BestellNr [PK], Datum, KundenNr [FK])</li>
          <li>Artikel (ArtNr [PK], Bezeichnung, Preis)</li>
          <li>Bestellposition (BestellNr [PK, FK], ArtNr [PK, FK], Menge)</li>
        </ul>
        <p>Ergebnis: vier Tabellen. Jede Information steht genau einmal; alle drei Anomalien sind beseitigt.</p>
        <div class="callout tipp"><strong>Merksatz:</strong> „Der Schlüssel (1NF), der ganze Schlüssel (2NF) und nichts als der Schlüssel (3NF).“</div>
        <div class="callout achtung"><strong>Prüfungsfallen:</strong> Eine Tabelle in 1NF mit <em>einspaltigem</em> Primärschlüssel ist automatisch in 2NF – Teilabhängigkeiten gibt es nur bei zusammengesetzten Schlüsseln (streng genommen gilt das, wenn es auch keinen weiteren, zusammengesetzten Schlüsselkandidaten gibt). Klassische transitive Abhängigkeit: PLZ → Ort. Und: Wer in der Prüfung nur das Endergebnis hinschreibt, verschenkt Punkte – zeige die Zwischenschritte.</div>
        <div class="callout merke"><strong>Merke:</strong> In der Praxis speichert man den Preis zum Bestellzeitpunkt oft zusätzlich in der Bestellposition, weil sich Artikelpreise ändern. Das ist eine bewusste fachliche Entscheidung. Auch gezielte <strong>Denormalisierung</strong> für schnellere Auswertungen (z. B. im Data Warehouse) ist erlaubt – aber nur begründet.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Nennen</em> und <em>erläutern</em> Sie drei Anomalien anhand der Tabelle.“ · „<em>Überführen</em> Sie die Tabelle in die 3. Normalform und <em>kennzeichnen</em> Sie PK und FK.“ · „<em>Begründen</em> Sie, warum die Tabelle nicht in der 2. Normalform ist.“</div>
      `
    },
    {
      id: "sql-ddl",
      title: "SQL-DDL: Tabellen, Datentypen, Constraints, Index",
      exam: ["AP2"],
      summary: "SQL-Sprachbereiche, CREATE/ALTER/DROP, passende Datentypen, Constraints (PK, FK, NOT NULL, UNIQUE, DEFAULT, CHECK) und Indizes mit Vor- und Nachteilen.",
      html: `
        <p>SQL (Structured Query Language) ist die Standardsprache relationaler Datenbanken. In der AP2 bekommst du einen Auszug der SQL-Syntax als Beleg – schreiben und lesen musst du die Anweisungen trotzdem selbst.</p>
        <h5>Sprachbereiche von SQL</h5>
        <table><thead><tr><th>Bereich</th><th>Zweck</th><th>Befehle</th></tr></thead><tbody>
          <tr><td>DDL – Data Definition Language</td><td>Strukturen anlegen, ändern, löschen</td><td><code>CREATE</code>, <code>ALTER</code>, <code>DROP</code> (meist auch <code>TRUNCATE</code>)</td></tr>
          <tr><td>DML – Data Manipulation Language</td><td>Datensätze einfügen, ändern, löschen</td><td><code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code></td></tr>
          <tr><td>DQL – Data Query Language</td><td>Daten abfragen (oft zur DML gezählt)</td><td><code>SELECT</code></td></tr>
          <tr><td>DCL – Data Control Language</td><td>Rechte vergeben und entziehen</td><td><code>GRANT</code>, <code>REVOKE</code></td></tr>
          <tr><td>TCL – Transaction Control Language</td><td>Transaktionen steuern</td><td><code>COMMIT</code>, <code>ROLLBACK</code>, <code>SAVEPOINT</code></td></tr>
        </tbody></table>
        <h5>Wichtige Datentypen</h5>
        <table><thead><tr><th>Datentyp</th><th>Bedeutung</th><th>Einsatz</th></tr></thead><tbody>
          <tr><td><code>INTEGER</code> / <code>INT</code></td><td>Ganzzahl</td><td>IDs, Mengen</td></tr>
          <tr><td><code>DECIMAL(p,s)</code></td><td>Festkommazahl, exakt; p Stellen gesamt, davon s Nachkommastellen</td><td>Geldbeträge: <code>DECIMAL(10,2)</code> reicht bis 99.999.999,99</td></tr>
          <tr><td><code>FLOAT</code> / <code>DOUBLE</code></td><td>Gleitkommazahl, kann Rundungsfehler haben</td><td>Messwerte, Koordinaten</td></tr>
          <tr><td><code>CHAR(n)</code></td><td>Zeichenkette fester Länge</td><td>PLZ <code>CHAR(5)</code>, Ländercode <code>CHAR(2)</code></td></tr>
          <tr><td><code>VARCHAR(n)</code></td><td>Zeichenkette variabler Länge, höchstens n Zeichen</td><td>Namen, E-Mail-Adressen</td></tr>
          <tr><td><code>DATE</code>, <code>TIME</code>, <code>DATETIME</code></td><td>Datum, Uhrzeit, Zeitpunkt</td><td>Bestelldatum, Zeitstempel</td></tr>
          <tr><td><code>BOOLEAN</code></td><td>wahr/falsch (in MySQL intern <code>TINYINT(1)</code>)</td><td>aktiv, bezahlt</td></tr>
          <tr><td><code>BLOB</code></td><td>Binary Large Object – Binärdaten</td><td>Bilder, PDF-Dateien</td></tr>
          <tr><td>räumliche Typen, z. B. <code>POINT</code></td><td>Geokoordinaten</td><td>Standorte, Lieferadressen</td></tr>
        </tbody></table>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Geldbeträge nie als <code>FLOAT</code>/<code>DOUBLE</code> speichern – binäre Gleitkommazahlen runden (0,1 + 0,2 ergibt nicht exakt 0,3). Postleitzahlen und Telefonnummern sind Zeichenketten, keine Zahlen: Mit ihnen wird nicht gerechnet, und führende Nullen (PLZ 01067) gingen verloren.</div>
        <div class="callout tipp"><strong>Tipp für die AP2:</strong> Der IHK-Syntaxbeleg nennt nur <code>CHARACTER</code>/<code>CHAR</code>, <code>VARCHAR</code>, <code>INTEGER</code>, <code>DECIMAL</code>, <code>DOUBLE</code> und <code>DATE</code>. Der Katalog verlangt aber, dass du auch Wahrheitswerte, BLOB und Geokoordinaten als Datentypen kennst. Schreibst du SQL, nimm bevorzugt die Typen aus dem Beleg; wählst du einen anderen Typ, begründe ihn kurz.</div>
        <h5>Tabellen anlegen mit Constraints</h5>
        <pre><code>CREATE TABLE Kunde (
  KundenNr  INT AUTO_INCREMENT PRIMARY KEY,
  Firma     VARCHAR(100) NOT NULL,
  PLZ       CHAR(5)      NOT NULL,
  Ort       VARCHAR(50)  NOT NULL,
  E_Mail    VARCHAR(120) UNIQUE,
  Aktiv     BOOLEAN      DEFAULT TRUE
);

CREATE TABLE Bestellposition (
  BestellNr INT,
  ArtNr     VARCHAR(10),
  Menge     INT NOT NULL CHECK (Menge &gt; 0),
  PRIMARY KEY (BestellNr, ArtNr),
  FOREIGN KEY (BestellNr) REFERENCES Bestellung(BestellNr),
  FOREIGN KEY (ArtNr) REFERENCES Artikel(ArtNr)
);</code></pre>
        <ul>
          <li><code>PRIMARY KEY</code> – eindeutig und nicht NULL; zusammengesetzt als eigene Zeile <code>PRIMARY KEY (A, B)</code></li>
          <li><code>FOREIGN KEY … REFERENCES</code> – sichert die referenzielle Integrität</li>
          <li><code>NOT NULL</code> – Pflichtfeld · <code>UNIQUE</code> – keine Duplikate · <code>DEFAULT</code> – Standardwert · <code>CHECK</code> – Bedingung</li>
          <li><code>AUTO_INCREMENT</code> (MySQL/MariaDB) – fortlaufende Nummer; in anderen DBMS <code>IDENTITY</code> oder <code>SERIAL</code></li>
        </ul>
        <h5>Struktur ändern und löschen</h5>
        <pre><code>ALTER TABLE Kunde ADD COLUMN Telefon VARCHAR(30);
ALTER TABLE Kunde MODIFY COLUMN Firma VARCHAR(150) NOT NULL;
ALTER TABLE Kunde DROP COLUMN Telefon;
ALTER TABLE Auftrag ADD FOREIGN KEY (KundenNr) REFERENCES Kunde(KundenNr);
DROP TABLE Bestellposition;</code></pre>
        <div class="callout merke"><strong>Merke:</strong> Beim Anlegen zuerst die referenzierten Tabellen (Kunde, Artikel), dann die abhängigen (Bestellung, Bestellposition). Beim Löschen genau umgekehrt – sonst verweigert das DBMS wegen der Fremdschlüssel.</div>
        <h5>Index</h5>
        <p>Ein <strong>Index</strong> ist eine zusätzliche, sortierte Zugriffsstruktur (meist ein B-Baum) – wie das Stichwortverzeichnis eines Buches.</p>
        <pre><code>CREATE INDEX idx_kunde_ort ON Kunde(Ort);</code></pre>
        <div class="callout beispiel"><strong>Beispiel:</strong> Ohne Index muss das DBMS bei 1.000.000 Kunden im schlimmsten Fall alle 1.000.000 Zeilen prüfen (Full Table Scan). Über eine sortierte Struktur genügen ähnlich wie bei der binären Suche etwa log₂(1.000.000) ≈ 20 Vergleiche; ein B-Baum kommt wegen vieler Einträge pro Knoten meist sogar mit 3 bis 4 Ebenen aus.</div>
        <ul>
          <li><strong>Vorteile:</strong> schnelleres Suchen (<code>WHERE</code>), Verknüpfen (<code>JOIN</code>) und Sortieren (<code>ORDER BY</code>)</li>
          <li><strong>Nachteile:</strong> zusätzlicher Speicherplatz; <code>INSERT</code>, <code>UPDATE</code> und <code>DELETE</code> werden langsamer, weil jeder Index mitgepflegt werden muss</li>
          <li>Primärschlüssel und <code>UNIQUE</code>-Spalten erhalten automatisch einen Index. Sinnvoll für häufig gesuchte Spalten mit vielen verschiedenen Werten, wenig sinnvoll für kleine Tabellen oder Spalten mit nur zwei Werten.</li>
        </ul>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Erstellen</em> Sie die SQL-Anweisung zum Anlegen der Tabelle mit Primär- und Fremdschlüssel.“ · „<em>Wählen</em> Sie geeignete Datentypen und <em>begründen</em> Sie.“ · „<em>Erläutern</em> Sie Vor- und Nachteile eines Index.“ (Laut Berichten von Prüflingen war Indexierung Thema der AP2 im Winter 2025/26.)</div>
      `
    },
    {
      id: "sql-dml-dcl",
      title: "SQL-DML & DCL: Daten ändern, Rechte vergeben, Injection verhindern",
      exam: ["AP2"],
      summary: "INSERT, UPDATE und DELETE sicher einsetzen, DELETE/TRUNCATE/DROP unterscheiden, Benutzer und Rechte mit GRANT/REVOKE verwalten und SQL-Injection mit Prepared Statements verhindern.",
      html: `
        <h5>INSERT – Datensätze einfügen</h5>
        <pre><code>INSERT INTO Kunde (Firma, PLZ, Ort, E_Mail)
VALUES ('Westküsten Werft GmbH', '25746', 'Heide', 'info@werft.example');

-- mehrere Zeilen auf einmal
INSERT INTO Artikel (ArtNr, Bezeichnung, Preis)
VALUES ('A9', 'Headset', 79.90), ('A10', 'Webcam', 64.50);

-- Daten aus einer Abfrage übernehmen
INSERT INTO Kunde_Archiv (KundenNr, Firma, Ort)
SELECT KundenNr, Firma, Ort FROM Kunde WHERE Aktiv = FALSE;</code></pre>
        <p>Zeichenketten und Datumswerte stehen in einfachen Anführungszeichen, Zahlen nicht. Spalten mit <code>AUTO_INCREMENT</code> oder <code>DEFAULT</code> darfst du weglassen. Echte DBMS erwarten Datumswerte im ISO-Format <code>'2026-09-23'</code>; der IHK-Syntaxbeleg nennt für <code>DATE</code> das Format TT.MM.JJJJ – halte dich in der Prüfung an die Vorgabe.</p>
        <h5>UPDATE – Werte ändern</h5>
        <pre><code>UPDATE Kunde SET Ort = 'Husum', PLZ = '25813' WHERE KundenNr = 11;
UPDATE Artikel SET Preis = Preis * 1.05 WHERE Kategorie = 'Zubehör';</code></pre>
        <div class="callout beispiel"><strong>Beispiel:</strong> Die Dockingstation kostet 189,00 €. Nach <code>SET Preis = Preis * 1.05</code> steht in der Spalte 189,00 × 1,05 = <strong>198,45 €</strong>.</div>
        <h5>DELETE – Datensätze löschen</h5>
        <pre><code>DELETE FROM Auftrag WHERE Status = 'storniert';</code></pre>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> <code>UPDATE</code> oder <code>DELETE</code> <em>ohne</em> <code>WHERE</code> betrifft <strong>alle</strong> Zeilen der Tabelle. Profi-Tipp: Die Bedingung zuerst mit <code>SELECT … WHERE …</code> testen und die Änderung in einer Transaktion ausführen, damit ein <code>ROLLBACK</code> möglich bleibt.</div>
        <table><thead><tr><th>Befehl</th><th>Wirkung</th><th>Struktur bleibt?</th></tr></thead><tbody>
          <tr><td><code>DELETE FROM t [WHERE …]</code></td><td>DML: löscht (ausgewählte) Zeilen, einzeln protokolliert; innerhalb einer Transaktion per ROLLBACK rückgängig zu machen</td><td>ja</td></tr>
          <tr><td><code>TRUNCATE TABLE t</code></td><td>meist DDL: leert die komplette Tabelle sehr schnell, kein WHERE, Zähler von AUTO_INCREMENT beginnt neu; in MySQL/MariaDB nicht per ROLLBACK umkehrbar</td><td>ja</td></tr>
          <tr><td><code>DROP TABLE t</code></td><td>DDL: entfernt Tabelle samt Struktur, Daten und Indizes</td><td>nein</td></tr>
        </tbody></table>
        <h5>DCL – Benutzer und Rechte</h5>
        <pre><code>CREATE USER 'buchhaltung'@'%' IDENTIFIED BY 'Langes-Sicheres-Passwort!';
GRANT SELECT ON nordlicht.Kunde TO 'buchhaltung'@'%';
GRANT SELECT, INSERT, UPDATE ON nordlicht.* TO 'vertrieb'@'%';
GRANT ALL PRIVILEGES ON nordlicht.* TO 'dbadmin'@'localhost' WITH GRANT OPTION;
REVOKE INSERT, UPDATE ON nordlicht.* FROM 'vertrieb'@'%';

-- Rollen bündeln Rechte
CREATE ROLE leser;
GRANT SELECT ON nordlicht.* TO leser;
GRANT leser TO 'praktikant'@'%';</code></pre>
        <ul>
          <li><code>ON *.*</code> = alle Datenbanken, <code>ON db.*</code> = alle Objekte einer Datenbank, <code>ON db.Tabelle</code> = ein Objekt.</li>
          <li><code>WITH GRANT OPTION</code> erlaubt dem Empfänger, das Recht weiterzugeben – nur sehr gezielt einsetzen.</li>
          <li><strong>Prinzip der minimalen Rechte (Least Privilege):</strong> Jede Anwendung erhält einen eigenen DB-Benutzer mit genau den nötigen Rechten. Eine Webanwendung arbeitet nie mit dem Administratorkonto.</li>
          <li>Mit einer <strong>View</strong> plus <code>GRANT SELECT</code> auf die View gibst du nur bestimmte Spalten frei (z. B. Mitarbeiterliste ohne Gehalt).</li>
        </ul>
        <h5>SQL-Injection und Prepared Statements</h5>
        <p>Baut ein Programm SQL durch <em>Zusammenkleben</em> von Text und Benutzereingabe, kann ein Angreifer eigenen SQL-Code einschleusen:</p>
        <pre><code>sql = "SELECT * FROM Benutzer WHERE Name = '" + eingabe + "'"
-- Eingabe:  ' OR '1'='1
-- ergibt:   SELECT * FROM Benutzer WHERE Name = '' OR '1'='1'
-- '1'='1' ist immer wahr → alle Benutzer werden geliefert</code></pre>
        <p>Schutz bieten <strong>Prepared Statements</strong> (parametrisierte Abfragen): Die SQL-Anweisung wird mit Platzhaltern vorbereitet, die Eingabe wird getrennt als reiner Wert übergeben und nie als SQL-Code interpretiert.</p>
        <pre><code># Python mit einem MySQL-Treiber
cursor.execute("SELECT * FROM Benutzer WHERE Name = %s", (eingabe,))</code></pre>
        <div class="callout merke"><strong>Merke:</strong> Gegen SQL-Injection helfen Prepared Statements, Eingabevalidierung (Whitelist), minimale DB-Rechte für die Anwendung und Fehlermeldungen ohne interne Details. Verschlüsselte Verbindungen (TLS) schützen die Übertragung, verhindern aber keine Injection.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Formulieren</em> Sie die SQL-Anweisung, die den Preis aller Artikel der Kategorie X um 5 % erhöht.“ · „<em>Geben</em> Sie dem Benutzer Y Leserechte auf Tabelle Z.“ · „<em>Erläutern</em> Sie, wie SQL-Injection funktioniert und wie man sie verhindert.“</div>
      `
    },
    {
      id: "sql-select",
      title: "SQL-Abfragen: Filtern, Sortieren, Aggregieren, Gruppieren",
      exam: ["AP2"],
      summary: "SELECT mit Projektion und Selektion, Operatoren (LIKE, BETWEEN, IN, IS NULL), ORDER BY, Aggregatfunktionen, GROUP BY und HAVING – mit Ergebnissen an einer Beispieltabelle.",
      html: `
        <p>Alle Beispiele beziehen sich auf die Inventartabelle <code>Geraet</code> der Nordlicht IT GmbH:</p>
        <table><thead><tr><th>InvNr</th><th>Bezeichnung</th><th>Typ</th><th>Standort</th><th>Preis</th><th>Kaufdatum</th><th>MitarbeiterID</th></tr></thead><tbody>
          <tr><td>1001</td><td>NB-14 Pro</td><td>Notebook</td><td>Heide</td><td>1249.00</td><td>2024-03-12</td><td>7</td></tr>
          <tr><td>1002</td><td>NB-14 Pro</td><td>Notebook</td><td>Husum</td><td>1249.00</td><td>2024-03-12</td><td>12</td></tr>
          <tr><td>1003</td><td>NB-15 Business</td><td>Notebook</td><td>Heide</td><td>1189.00</td><td>2025-06-02</td><td>NULL</td></tr>
          <tr><td>1004</td><td>LJ-430</td><td>Drucker</td><td>Heide</td><td>529.00</td><td>2023-11-20</td><td>NULL</td></tr>
          <tr><td>1005</td><td>LJ-610</td><td>Drucker</td><td>Husum</td><td>389.00</td><td>2025-01-15</td><td>NULL</td></tr>
          <tr><td>1006</td><td>Tower 7020</td><td>PC</td><td>Heide</td><td>899.00</td><td>2025-06-02</td><td>3</td></tr>
          <tr><td>1007</td><td>Tower 7020</td><td>PC</td><td>Meldorf</td><td>899.00</td><td>2025-06-02</td><td>15</td></tr>
          <tr><td>1008</td><td>Monitor 24</td><td>Monitor</td><td>Heide</td><td>329.00</td><td>2025-06-02</td><td>3</td></tr>
        </tbody></table>
        <h5>Grundaufbau</h5>
        <pre><code>SELECT [DISTINCT] Spalten      -- Projektion: welche Spalten?
FROM Tabelle
WHERE Bedingung                -- Selektion: welche Zeilen?
GROUP BY Spalten
HAVING Gruppenbedingung
ORDER BY Spalte [ASC | DESC];</code></pre>
        <h5>Filtern mit Operatoren</h5>
        <table><thead><tr><th>Abfrage (Auszug)</th><th>Ergebnis</th></tr></thead><tbody>
          <tr><td><code>WHERE Typ = 'Notebook' AND Preis &lt; 1200</code></td><td>nur 1003 (1189.00)</td></tr>
          <tr><td><code>WHERE Preis BETWEEN 389 AND 899</code></td><td>1004, 1005, 1006, 1007 – beide Grenzen gehören dazu</td></tr>
          <tr><td><code>WHERE Bezeichnung LIKE 'NB%'</code></td><td>1001, 1002, 1003 (<code>%</code> = beliebig viele Zeichen, <code>_</code> = genau ein Zeichen)</td></tr>
          <tr><td><code>WHERE Standort IN ('Husum', 'Meldorf')</code></td><td>1002, 1005, 1007</td></tr>
          <tr><td><code>WHERE MitarbeiterID IS NULL</code></td><td>1003, 1004, 1005</td></tr>
          <tr><td><code>SELECT DISTINCT Standort</code></td><td>Heide, Husum, Meldorf</td></tr>
        </tbody></table>
        <p>Weitere Operatoren: <code>&lt;&gt;</code> (ungleich), <code>&gt;=</code>, <code>&lt;=</code>, <code>OR</code>, <code>NOT</code>. Rechnen und umbenennen: <code>SELECT Bezeichnung, Preis * 1.19 AS Brutto</code> liefert für 1001 den Wert 1486.31. Sortieren: <code>ORDER BY Preis DESC, Bezeichnung ASC</code> (ASC ist Standard).</p>
        <div class="callout tipp"><strong>Tipp zum Syntaxbeleg:</strong> <code>BETWEEN</code> und <code>IN</code> mit fester Werteliste sind Standard-SQL, stehen aber nicht im IHK-Syntaxbeleg (dort nur <code>IN</code> mit Unterabfrage). Immer richtig ist die Schreibweise mit Vergleichsoperatoren: <code>Preis BETWEEN 389 AND 899</code> entspricht <code>Preis &gt;= 389 AND Preis &lt;= 899</code>, <code>Standort IN ('Husum', 'Meldorf')</code> entspricht <code>Standort = 'Husum' OR Standort = 'Meldorf'</code>.</div>
        <div class="callout achtung"><strong>Prüfungsfalle NULL:</strong> <code>WHERE MitarbeiterID = NULL</code> liefert <em>keine</em> Zeile, denn ein Vergleich mit NULL ergibt „unbekannt“. Richtig ist <code>IS NULL</code> bzw. <code>IS NOT NULL</code>. Und: <code>AND</code> bindet stärker als <code>OR</code> – setze Klammern.</div>
        <h5>Aggregatfunktionen</h5>
        <pre><code>SELECT COUNT(*), COUNT(MitarbeiterID), SUM(Preis), AVG(Preis), MIN(Preis), MAX(Preis)
FROM Geraet;
-- Ergebnis: 8 | 5 | 6732.00 | 841.50 | 329.00 | 1249.00</code></pre>
        <p><code>COUNT(*)</code> zählt alle Zeilen, <code>COUNT(Spalte)</code> nur die Werte ungleich NULL. <code>AVG</code>, <code>SUM</code>, <code>MIN</code> und <code>MAX</code> ignorieren NULL-Werte.</p>
        <h5>GROUP BY und HAVING</h5>
        <pre><code>SELECT Typ, COUNT(*) AS Anzahl, SUM(Preis) AS Summe, AVG(Preis) AS Schnitt
FROM Geraet
GROUP BY Typ
HAVING COUNT(*) &gt;= 2
ORDER BY Anzahl DESC;</code></pre>
        <table><thead><tr><th>Typ</th><th>Anzahl</th><th>Summe</th><th>Schnitt</th></tr></thead><tbody>
          <tr><td>Notebook</td><td>3</td><td>3687.00</td><td>1229.00</td></tr>
          <tr><td>Drucker</td><td>2</td><td>918.00</td><td>459.00</td></tr>
          <tr><td>PC</td><td>2</td><td>1798.00</td><td>899.00</td></tr>
        </tbody></table>
        <p>Die Gruppe „Monitor“ (1 Gerät) fällt durch <code>HAVING</code> heraus. Drucker und PC haben dieselbe Anzahl; ihre Reihenfolge ist ohne weiteres Sortierkriterium nicht festgelegt.</p>
        <div class="callout beispiel"><strong>WHERE und HAVING kombiniert:</strong> Welche Standorte haben seit 2025 mehr als ein Gerät gekauft?<br><code>SELECT Standort, COUNT(*) FROM Geraet WHERE Kaufdatum &gt;= '2025-01-01' GROUP BY Standort HAVING COUNT(*) &gt; 1;</code><br>WHERE lässt 1003, 1005, 1006, 1007, 1008 übrig. Gruppiert: Heide 3, Husum 1, Meldorf 1 → Ergebnis: <strong>Heide | 3</strong>.</div>
        <h5>Funktionen aus dem IHK-Syntaxbeleg</h5>
        <table><thead><tr><th>Funktion</th><th>Beispiel</th><th>Ergebnis</th></tr></thead><tbody>
          <tr><td><code>LEFT</code> / <code>RIGHT</code></td><td><code>LEFT('Heide', 2)</code></td><td>'He'</td></tr>
          <tr><td><code>YEAR</code>, <code>MONTH</code>, <code>DAY</code> (auch <code>HOUR</code>, <code>MINUTE</code>)</td><td><code>YEAR('2025-06-02')</code></td><td>2025</td></tr>
          <tr><td><code>WEEKDAY</code> (Montag = 0)</td><td><code>WEEKDAY('2026-09-23')</code></td><td>2 (Mittwoch)</td></tr>
          <tr><td><code>NOW()</code></td><td>aktuelles Datum mit Uhrzeit</td><td>–</td></tr>
          <tr><td><code>DATEADD(Teil, Intervall, Datum)</code></td><td><code>DATEADD(MONTH, 3, '2026-09-23')</code></td><td>2026-12-23</td></tr>
          <tr><td><code>DATEDIFF(Teil, Start, Ende)</code></td><td><code>DATEDIFF(DAY, '2026-09-01', '2026-09-23')</code></td><td>22</td></tr>
        </tbody></table>
        <p>Typische Prüfungsbedingung: Geräte, die älter als fünf Jahre sind → <code>WHERE DATEDIFF(YEAR, Kaufdatum, NOW()) &gt; 5</code>. Die Schreibweise von DATEADD/DATEDIFF entspricht SQL Server; MySQL verwendet andere Parameter – in der Prüfung gilt der Beleg.</p>
        <div class="callout achtung"><strong>Genau hingeschaut:</strong> In SQL Server zählt <code>DATEDIFF(YEAR, …)</code> nur die überschrittenen Jahreswechsel: vom 31.12.2025 bis zum 01.01.2026 ergibt das bereits 1. Tagesgenau „älter als fünf Jahre“ prüfst du mit <code>WHERE Kaufdatum &lt; DATEADD(YEAR, -5, NOW())</code>. Beide Lösungen sind in der Prüfung vertretbar, wenn sie zur Aufgabe passen.</div>
        <p>Der Beleg nennt außerdem die statistischen Aggregatfunktionen <code>STDDEV</code> (Standardabweichung), <code>VARIANCE</code> (Varianz) und <code>CORR</code> (Korrelation zweier Spalten). Der Korrelationskoeffizient liegt zwischen −1 und +1: nahe +1 heißt starker gleichläufiger Zusammenhang („je wärmer, desto mehr Verbrauch“), nahe −1 gegenläufiger Zusammenhang, nahe 0 kein linearer Zusammenhang. Vorsicht: <code>STDDEV</code> rechnet je nach DBMS mit der Grundgesamtheit (MySQL) oder mit der Stichprobe (PostgreSQL, Oracle).</p>
        <div class="callout formel"><strong>Ausführungsreihenfolge:</strong> FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY</div>
        <div class="callout merke"><strong>Merke:</strong> WHERE filtert <em>Zeilen vor</em> dem Gruppieren, HAVING filtert <em>Gruppen danach</em>. Aggregatfunktionen gehören deshalb nie in WHERE. Jede Spalte im SELECT, die nicht aggregiert wird, muss im GROUP BY stehen.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Erstellen</em> Sie eine SQL-Abfrage, die je Standort die Anzahl der Geräte ausgibt, absteigend sortiert.“ · „<em>Geben</em> Sie das Ergebnis der folgenden Abfrage an.“ · „<em>Erläutern</em> Sie den Unterschied zwischen WHERE und HAVING.“</div>
      `
    },
    {
      id: "sql-join",
      title: "SQL: Joins, Unterabfragen und Views",
      exam: ["AP2"],
      summary: "Abfragen über mehrere Tabellen mit INNER, LEFT und RIGHT JOIN, das kartesische Produkt, Unterabfragen mit IN, EXISTS und im FROM sowie Views als gespeicherte Abfragen.",
      html: `
        <p>Beispieldaten: <code>Kunde</code> (KundeID, Firma, Ort) und <code>Auftrag</code> (AuftragID, KundeID, Datum, Betrag, Status); die Spalte Datum ist in der Tabelle unten ausgeblendet.</p>
        <div class="grid-2">
          <table><thead><tr><th>KundeID</th><th>Firma</th><th>Ort</th></tr></thead><tbody>
            <tr><td>1</td><td>Deichbau Meyer KG</td><td>Heide</td></tr>
            <tr><td>2</td><td>Hafenlogistik Husum GmbH</td><td>Husum</td></tr>
            <tr><td>3</td><td>Kanzlei Petersen</td><td>Meldorf</td></tr>
            <tr><td>4</td><td>Elbe Chemie Service GmbH</td><td>Brunsbüttel</td></tr>
            <tr><td>5</td><td>Friesen Pflegedienst e. K.</td><td>Husum</td></tr>
          </tbody></table>
          <table><thead><tr><th>AuftragID</th><th>KundeID</th><th>Betrag</th><th>Status</th></tr></thead><tbody>
            <tr><td>101</td><td>1</td><td>1200.00</td><td>bezahlt</td></tr>
            <tr><td>102</td><td>2</td><td>4800.00</td><td>offen</td></tr>
            <tr><td>103</td><td>1</td><td>350.00</td><td>bezahlt</td></tr>
            <tr><td>104</td><td>3</td><td>2150.00</td><td>offen</td></tr>
            <tr><td>105</td><td>2</td><td>990.00</td><td>bezahlt</td></tr>
            <tr><td>106</td><td>1</td><td>2600.00</td><td>offen</td></tr>
          </tbody></table>
        </div>
        <h5>INNER JOIN – nur passende Paare</h5>
        <pre><code>SELECT k.Firma, a.AuftragID, a.Betrag
FROM Kunde k
INNER JOIN Auftrag a ON k.KundeID = a.KundeID;</code></pre>
        <p>Ergebnis: 6 Zeilen (je Auftrag eine). Kunden 4 und 5 haben keinen Auftrag und erscheinen <em>nicht</em>. <code>JOIN</code> ohne Zusatz bedeutet <code>INNER JOIN</code>.</p>
        <h5>LEFT JOIN – alle Zeilen der linken Tabelle</h5>
        <pre><code>SELECT k.Firma, a.AuftragID
FROM Kunde k
LEFT JOIN Auftrag a ON k.KundeID = a.KundeID;</code></pre>
        <p>Ergebnis: 8 Zeilen – die 6 Paare plus „Elbe Chemie Service GmbH | NULL“ und „Friesen Pflegedienst e. K. | NULL“. <code>RIGHT JOIN</code> funktioniert spiegelbildlich (alle Zeilen der rechten Tabelle).</p>
        <div class="callout beispiel"><strong>Kunden ohne Auftrag finden:</strong> <code>… LEFT JOIN Auftrag a ON k.KundeID = a.KundeID WHERE a.AuftragID IS NULL;</code> → Elbe Chemie Service GmbH, Friesen Pflegedienst e. K.</div>
        <h5>Join mit Gruppierung</h5>
        <pre><code>SELECT k.Firma, COUNT(a.AuftragID) AS Anzahl, SUM(a.Betrag) AS Umsatz
FROM Kunde k
LEFT JOIN Auftrag a ON k.KundeID = a.KundeID
GROUP BY k.KundeID, k.Firma;</code></pre>
        <p>Ergebnis: Deichbau Meyer 3 | 4150.00 · Hafenlogistik 2 | 5790.00 · Petersen 1 | 2150.00 · Elbe Chemie 0 | NULL · Friesen 0 | NULL.</p>
        <div class="callout achtung"><strong>Prüfungsfallen:</strong> Mit <code>COUNT(*)</code> statt <code>COUNT(a.AuftragID)</code> bekämen Kunden ohne Auftrag eine 1, weil die NULL-Zeile mitgezählt wird. Fehlt die Join-Bedingung (<code>FROM Kunde, Auftrag</code> ohne WHERE), entsteht das <strong>kartesische Produkt</strong>: 5 × 6 = 30 Zeilen. Gleichnamige Spalten wie <code>KundeID</code> immer mit Tabellenname oder Alias angeben.</div>
        <p>Mehr als zwei Tabellen verknüpfst du nacheinander: Für <em>n</em> Tabellen brauchst du mindestens <em>n − 1</em> Join-Bedingungen, z. B. Kunde → Bestellung → Bestellposition → Artikel.</p>
        <h5>Unterabfragen (Subqueries)</h5>
        <table><thead><tr><th>Art</th><th>Beispiel</th><th>Ergebnis</th></tr></thead><tbody>
          <tr><td>Einzelwert</td><td><code>SELECT AuftragID FROM Auftrag WHERE Betrag &gt; (SELECT AVG(Betrag) FROM Auftrag);</code></td><td>Durchschnitt 2015.00 → 102, 104, 106</td></tr>
          <tr><td>IN</td><td><code>SELECT Firma FROM Kunde WHERE KundeID IN (SELECT KundeID FROM Auftrag WHERE Status = 'offen');</code></td><td>Deichbau Meyer, Hafenlogistik, Petersen</td></tr>
          <tr><td>NOT EXISTS</td><td><code>SELECT Firma FROM Kunde k WHERE NOT EXISTS (SELECT * FROM Auftrag a WHERE a.KundeID = k.KundeID);</code></td><td>Elbe Chemie, Friesen Pflegedienst</td></tr>
          <tr><td>im FROM</td><td><code>SELECT AVG(Umsatz) FROM (SELECT KundeID, SUM(Betrag) AS Umsatz FROM Auftrag GROUP BY KundeID) AS tbl;</code></td><td>(4150 + 5790 + 2150) ÷ 3 = 4030.00</td></tr>
        </tbody></table>
        <p><code>UNION</code> hängt die Ergebnisse zweier Abfragen mit gleicher Spaltenzahl untereinander und entfernt Duplikate; <code>UNION ALL</code> behält sie.</p>
        <h5>Views – gespeicherte Abfragen</h5>
        <pre><code>CREATE VIEW v_offene_posten AS
SELECT k.Firma, a.AuftragID, a.Betrag
FROM Kunde k JOIN Auftrag a ON k.KundeID = a.KundeID
WHERE a.Status = 'offen';

SELECT SUM(Betrag) FROM v_offene_posten;   -- 9550.00</code></pre>
        <p>Eine <strong>View</strong> ist eine virtuelle Tabelle: Gespeichert wird nur die Abfrage, die Daten werden bei jedem Zugriff frisch aus den Basistabellen gelesen. Einsatz: komplexe Abfragen vereinfachen, nur bestimmte Spalten oder Zeilen freigeben (Datenschutz, externe Ebene), stabile Schnittstelle für Anwendungen.</p>
        <div class="callout merke"><strong>Merke:</strong> INNER JOIN = nur Treffer auf beiden Seiten. LEFT JOIN = alles von links, rechts mit NULL aufgefüllt. View = gespeicherte SELECT-Abfrage ohne eigene Daten.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Erstellen</em> Sie eine Abfrage, die alle Kunden mit der Summe ihrer offenen Aufträge ausgibt.“ · „<em>Ermitteln</em> Sie das Ergebnis der folgenden Abfrage.“ · „<em>Erläutern</em> Sie den Unterschied zwischen INNER JOIN und LEFT JOIN.“ · „<em>Nennen</em> Sie zwei Vorteile von Views.“</div>
      `
    },
    {
      id: "transaktionen",
      title: "Transaktionen, ACID, Sperren & Datenbank-Backup",
      exam: ["AP2"],
      summary: "Transaktionen mit COMMIT und ROLLBACK, die ACID-Eigenschaften, Mehrbenutzerprobleme wie Lost Update, Isolationsstufen, Sperren, Deadlocks sowie Sicherung und Wiederherstellung von Datenbanken.",
      html: `
        <p>Eine <strong>Transaktion</strong> ist eine Folge von Datenbankoperationen, die als logische Einheit <em>ganz oder gar nicht</em> ausgeführt wird.</p>
        <pre><code>START TRANSACTION;
UPDATE Konto SET Saldo = Saldo - 500 WHERE KontoNr = 'A';
UPDATE Konto SET Saldo = Saldo + 500 WHERE KontoNr = 'B';
COMMIT;        -- dauerhaft übernehmen
-- tritt ein Fehler auf: ROLLBACK;  (alles zurücknehmen)</code></pre>
        <p>Mit <code>SAVEPOINT sp1</code> und <code>ROLLBACK TO sp1</code> lassen sich Teile zurücknehmen. Viele DBMS arbeiten im <strong>Autocommit</strong>-Modus: Ohne expliziten Transaktionsstart wird jede einzelne Anweisung sofort bestätigt.</p>
        <h5>ACID</h5>
        <table><thead><tr><th>Eigenschaft</th><th>Bedeutung</th><th>bei der Überweisung</th></tr></thead><tbody>
          <tr><td><strong>A</strong>tomicity (Atomarität)</td><td>alles oder nichts</td><td>nie nur Abbuchung ohne Gutschrift</td></tr>
          <tr><td><strong>C</strong>onsistency (Konsistenz)</td><td>von einem gültigen Zustand in einen gültigen Zustand; alle Integritätsregeln erfüllt</td><td>Gesamtsumme der Konten bleibt gleich</td></tr>
          <tr><td><strong>I</strong>solation</td><td>parallele Transaktionen beeinflussen sich nicht</td><td>eine gleichzeitige Abfrage sieht keinen halben Zustand</td></tr>
          <tr><td><strong>D</strong>urability (Dauerhaftigkeit)</td><td>nach COMMIT bleiben Änderungen erhalten, auch bei Absturz (Transaktionslog)</td><td>Stromausfall nach COMMIT → Buchung bleibt</td></tr>
        </tbody></table>
        <h5>Probleme im Mehrbenutzerbetrieb</h5>
        <div class="callout beispiel"><strong>Lost Update am Geldautomaten:</strong> Kontostand 1.000 €. Automat A liest 1.000 €, Automat B liest 1.000 €. A zahlt 500 € aus und schreibt 500 €. B zahlt 300 € aus und schreibt 1.000 − 300 = 700 €. Ergebnis: 800 € ausgezahlt, Kontostand 700 € – richtig wären 1.000 − 500 − 300 = <strong>200 €</strong>. Die Änderung von A ging verloren. Lösung: Lesen und Schreiben in einer Transaktion mit Sperre.</div>
        <table><thead><tr><th>Anomalie</th><th>Beschreibung</th></tr></thead><tbody>
          <tr><td>Lost Update</td><td>eine Änderung überschreibt eine andere, gleichzeitige Änderung</td></tr>
          <tr><td>Dirty Read</td><td>eine Transaktion liest Daten, die noch nicht bestätigt sind und später zurückgerollt werden</td></tr>
          <tr><td>Non-Repeatable Read</td><td>dieselbe Zeile liefert beim zweiten Lesen einen anderen Wert</td></tr>
          <tr><td>Phantom Read</td><td>eine wiederholte Abfrage liefert plötzlich zusätzliche oder fehlende Zeilen</td></tr>
        </tbody></table>
        <p>Die <strong>Isolationsstufen</strong> legen fest, welche Anomalien verhindert werden: <code>READ UNCOMMITTED</code> (fast nichts) → <code>READ COMMITTED</code> (kein Dirty Read; Standard z. B. bei PostgreSQL und SQL Server) → <code>REPEATABLE READ</code> (zusätzlich kein Non-Repeatable Read; Standard bei MySQL/InnoDB) → <code>SERIALIZABLE</code> (alle verhindert, aber am langsamsten).</p>
        <h5>Sperren (Locks) und Deadlocks</h5>
        <ul>
          <li><strong>Lesesperre (Shared Lock):</strong> mehrere dürfen gleichzeitig lesen, niemand darf schreiben.</li>
          <li><strong>Schreibsperre (Exclusive Lock):</strong> nur die sperrende Transaktion darf auf das Objekt zugreifen.</li>
          <li>Sperren gibt es für Zeilen, Seiten oder ganze Tabellen – je feiner, desto mehr Parallelität. <code>SELECT … FOR UPDATE</code> sperrt gelesene Zeilen für eine anschließende Änderung.</li>
        </ul>
        <p>Ein <strong>Deadlock</strong> entsteht, wenn sich Transaktionen gegenseitig blockieren: T1 sperrt Zeile X und wartet auf Y, T2 sperrt Y und wartet auf X. Das DBMS erkennt den Zyklus, bricht eine Transaktion als „Opfer“ ab (ROLLBACK) und die Anwendung muss sie wiederholen. Vorbeugen: Objekte immer in derselben Reihenfolge sperren, Transaktionen kurz halten, Timeouts setzen.</p>
        <h5>Datenbanken sichern und wiederherstellen</h5>
        <ul>
          <li><strong>Logisches Backup (Dump):</strong> Export als SQL-Anweisungen, z. B. mit <code>mysqldump</code> oder <code>pg_dump</code> – portabel, aber langsam bei großen Datenbanken.</li>
          <li><strong>Physisches Backup:</strong> Kopie der Datendateien bzw. Snapshot – schnell, aber an DBMS-Version und Plattform gebunden.</li>
          <li><strong>Transaktionslog</strong> (MySQL: Binlog, PostgreSQL: WAL) protokolliert jede Änderung. Vollsicherung + Log ermöglichen eine <strong>Point-in-Time-Recovery</strong> bis kurz vor den Fehler.</li>
        </ul>
        <pre><code>mysqldump --single-transaction -u backup -p nordlicht &gt; nordlicht_2026-09-23.sql
mysql -u root -p nordlicht &lt; nordlicht_2026-09-23.sql</code></pre>
        <div class="callout achtung"><strong>Achtung:</strong> Einfach die Dateien einer laufenden Datenbank zu kopieren, ergibt oft ein inkonsistentes Backup. Nutze die Werkzeuge des DBMS (hot backup mit konsistentem Snapshot) oder stoppe den Dienst (cold backup). Ein Backup gilt erst als gut, wenn die Wiederherstellung getestet wurde.</div>
        <div class="callout merke"><strong>Merke:</strong> COMMIT bestätigt, ROLLBACK verwirft. ACID sichert Korrektheit; Sperren verhindern Lost Updates, können aber Deadlocks auslösen.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Erläutern</em> Sie die ACID-Eigenschaften am Beispiel einer Überweisung.“ · „<em>Beschreiben</em> Sie das Lost-Update-Problem und eine Lösung.“ · „<em>Erklären</em> Sie, wie ein Deadlock entsteht und wie das DBMS reagiert.“ · „<em>Beschreiben</em> Sie ein Sicherungskonzept für die Datenbank.“ Laut Berichten von Prüflingen fragte die AP2 im Winter 2025/26 nach Funktionsweise, Indexierung und Sperren (Locking) von Datenbanken.</div>
      `
    },
    {
      id: "datenaustausch",
      title: "Datenaustauschformate & Schnittstellen (CSV, JSON, XML, REST)",
      exam: ["AP2"],
      summary: "Dieselben Daten als CSV, JSON und XML, Vor- und Nachteile der Formate, typische Kompatibilitätsprobleme sowie Datenbereitstellung über ODBC und REST-APIs mit HTTP-Methoden, Statuscodes und Authentifizierung.",
      html: `
        <p>Daten liegen im Betrieb in vielen Systemen: ERP, Webshop, Tabellen, Sensoren, Logdateien. Damit sie systemübergreifend fließen können, brauchst du gemeinsame <strong>Formate</strong> und definierte <strong>Schnittstellen</strong>.</p>
        <h5>Ein Datensatz – drei Formate</h5>
        <p><strong>CSV</strong> (Comma-Separated Values):</p>
        <pre><code>KundenNr;Firma;Ort;Umsatz
1;Deichbau Meyer KG;Heide;4150,00
2;"Hafenlogistik Husum; Nord GmbH";Husum;5790,00</code></pre>
        <p>Eine Kopfzeile, ein Datensatz pro Zeile, Felder durch Trennzeichen getrennt. Die Spezifikation RFC 4180 nutzt das Komma; in Deutschland ist wegen des Dezimalkommas das Semikolon üblich. Enthält ein Feld das Trennzeichen, steht es in Anführungszeichen. CSV kennt weder Datentypen noch Verschachtelung.</p>
        <p><strong>JSON</strong> (JavaScript Object Notation):</p>
        <pre><code>[
  { "kundenNr": 1, "firma": "Deichbau Meyer KG", "ort": "Heide", "umsatz": 4150.00, "aktiv": true },
  { "kundenNr": 2, "firma": "Hafenlogistik Husum; Nord GmbH", "ort": "Husum", "umsatz": 5790.00, "aktiv": true }
]</code></pre>
        <p>Objekte <code>{ }</code> mit Schlüssel-Wert-Paaren, Arrays <code>[ ]</code>, Datentypen string, number, boolean (<code>true</code>/<code>false</code>) und <code>null</code>. Schlüssel und Texte stehen in doppelten Anführungszeichen, Zahlen haben einen Dezimalpunkt, Kommentare sind nicht erlaubt.</p>
        <p><strong>XML</strong> (Extensible Markup Language):</p>
        <pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;kunden&gt;
  &lt;kunde nr="1"&gt;
    &lt;firma&gt;Deichbau Meyer KG&lt;/firma&gt;
    &lt;ort&gt;Heide&lt;/ort&gt;
    &lt;umsatz waehrung="EUR"&gt;4150.00&lt;/umsatz&gt;
  &lt;/kunde&gt;
&lt;/kunden&gt;</code></pre>
        <p><strong>Wohlgeformt</strong> ist ein XML-Dokument, wenn es genau ein Wurzelelement hat, jedes Start-Tag ein passendes End-Tag besitzt, Elemente korrekt verschachtelt sind und Attributwerte in Anführungszeichen stehen (Groß-/Kleinschreibung zählt). <strong>Gültig</strong> (valide) ist es, wenn es zusätzlich einem Schema (XSD) oder einer DTD entspricht. Für JSON gibt es mit <strong>JSON Schema</strong> ein vergleichbares Prüfverfahren.</p>
        <table><thead><tr><th>Kriterium</th><th>CSV</th><th>JSON</th><th>XML</th></tr></thead><tbody>
          <tr><td>Struktur</td><td>flach (Tabelle)</td><td>hierarchisch</td><td>hierarchisch</td></tr>
          <tr><td>Datentypen</td><td>keine</td><td>wenige eingebaute</td><td>über Schema (XSD)</td></tr>
          <tr><td>Overhead</td><td>sehr gering</td><td>gering</td><td>hoch (Start- und End-Tags)</td></tr>
          <tr><td>typischer Einsatz</td><td>Tabellenexport, Massenimport</td><td>Web-APIs, Konfiguration, Dokumentdatenbanken</td><td>E-Rechnung (XRechnung), Office-Dateien, Behördendaten</td></tr>
        </tbody></table>
        <h5>Typische Kompatibilitätsprobleme</h5>
        <ul>
          <li><strong>Zeichensatz:</strong> ASCII kennt nur 128 Zeichen ohne Umlaute, ISO-8859-1 bzw. Windows-1252 speichern westeuropäische Zeichen in je einem Byte, UTF-8 kann alle Unicode-Zeichen mit 1 bis 4 Byte darstellen. Eine UTF-8-Datei, die als Windows-1252 gelesen wird, zeigt „MÃ¼ller“ statt „Müller“. Kodierung immer vereinbaren – Standard ist UTF-8.</li>
          <li><strong>Byte Order Mark (BOM):</strong> Manche Programme schreiben an den Anfang einer UTF-8-Datei die Bytes <code>EF BB BF</code>. Excel erkennt daran UTF-8; ein Programm, das die Datei als Windows-1252 liest, zeigt dagegen „ï»¿“ vor dem ersten Spaltennamen.</li>
          <li><strong>Dezimal- und Tausendertrennzeichen:</strong> 4150,00 vs. 4150.00 vs. 4.150,00</li>
          <li><strong>Datumsformate:</strong> 23.09.2026 vs. 09/23/2026 – eindeutig ist ISO 8601: 2026-09-23</li>
          <li><strong>Zeilenenden</strong> (Windows CRLF, Linux LF)</li>
          <li><strong>Datentypen und Längen:</strong> Ein Text mit 300 Zeichen passt nicht in <code>VARCHAR(255)</code>, eine Artikelnummer 00123 verliert als Zahl ihre führenden Nullen, ein zu großer Wert verursacht einen Überlauf.</li>
        </ul>
        <h5>Schnittstellen</h5>
        <p>Eine <strong>API</strong> (Application Programming Interface) ist eine definierte Schnittstelle, über die Programme miteinander kommunizieren. Datenbanknahe Schnittstellen sind <strong>ODBC</strong> (herstellerunabhängig) und <strong>JDBC</strong> (Java): Ein Treiber übersetzt zwischen Anwendung und DBMS. Unter Windows richtest du im ODBC-Datenquellen-Administrator einen <strong>DSN</strong> (Data Source Name) ein: Unter diesem Namen sind Treiber, Server, Datenbank und ggf. Benutzer hinterlegt, sodass z. B. Excel oder Access die Datenbank ohne eigene Verbindungsdetails ansprechen kann. Für Web- und Cloud-Dienste ist <strong>REST</strong> Standard: Ressourcen werden über URLs angesprochen, Aktionen über HTTP-Methoden ausgedrückt, jede Anfrage ist <em>zustandslos</em> (enthält alle nötigen Informationen), Daten meist als JSON.</p>
        <table><thead><tr><th>HTTP-Methode</th><th>Aktion (CRUD)</th><th>SQL-Pendant</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td><code>GET</code></td><td>lesen</td><td>SELECT</td><td><code>GET /api/v1/kunden/17</code></td></tr>
          <tr><td><code>POST</code></td><td>neu anlegen</td><td>INSERT</td><td><code>POST /api/v1/kunden</code></td></tr>
          <tr><td><code>PUT</code> / <code>PATCH</code></td><td>ersetzen / teilweise ändern</td><td>UPDATE</td><td><code>PATCH /api/v1/kunden/17</code></td></tr>
          <tr><td><code>DELETE</code></td><td>löschen</td><td>DELETE</td><td><code>DELETE /api/v1/kunden/17</code></td></tr>
        </tbody></table>
        <pre><code>GET /api/v1/kunden/1 HTTP/1.1
Host: api.nordlicht-it.example
Accept: application/json
Authorization: Bearer eyJhbGciOi...

HTTP/1.1 200 OK
Content-Type: application/json

{ "kundenNr": 1, "firma": "Deichbau Meyer KG", "ort": "Heide" }</code></pre>
        <p>Wichtige Statuscodes: <code>200</code> OK · <code>201</code> Created · <code>204</code> No Content · <code>400</code> Bad Request · <code>401</code> Unauthorized (nicht angemeldet) · <code>403</code> Forbidden (angemeldet, aber keine Berechtigung) · <code>404</code> Not Found · <code>429</code> Too Many Requests (Abfragelimit überschritten) · <code>500</code> Internal Server Error.</p>
        <p><strong>Zugriffsschutz:</strong> API-Key oder Token (z. B. als Bearer-Token im Header), bei Zugriffen im Namen eines Nutzers <strong>OAuth 2.0</strong>: Der Nutzer erlaubt einer Anwendung einen begrenzten Zugriff, ohne ihr sein Passwort zu geben; ein Autorisierungsserver stellt dafür ein zeitlich begrenztes Access Token aus. Übertragung immer per HTTPS (TLS).</p>
        <h5>Open Data als Datenquelle</h5>
        <p><strong>Open Data</strong> sind Daten, die jeder frei nutzen, weiterverarbeiten und weitergeben darf – meist von Behörden, Kommunen oder Forschungseinrichtungen, z. B. Wetter-, Verkehrs-, Umwelt- oder Haushaltsdaten. In Deutschland bündelt das Portal GovData viele Angebote. Frei heißt aber nicht bedingungslos:</p>
        <table><thead><tr><th>Lizenz (Beispiele)</th><th>Was du beachten musst</th></tr></thead><tbody>
          <tr><td>CC BY 4.0, Datenlizenz Deutschland – Namensnennung 2.0</td><td>Quelle bzw. Urheber nennen, auf die Lizenz verweisen, Änderungen kenntlich machen</td></tr>
          <tr><td>CC0, Datenlizenz Deutschland – Zero 2.0</td><td>keine Auflagen, Quellenangabe trotzdem guter Stil</td></tr>
        </tbody></table>
        <ul>
          <li><strong>Zugriff:</strong> Download als Datei (CSV, JSON, XML) oder Abruf über eine REST-API, oft mit kostenlosem API-Key.</li>
          <li><strong>Nutzungsgrenzen (Rate Limits):</strong> z. B. höchstens 1.000 Anfragen pro Tag. Wer mehr sendet, erhält <code>429 Too Many Requests</code>. Abhilfe: seltener abfragen, Ergebnisse zwischenspeichern (Cache), den Header <code>Retry-After</code> beachten.</li>
          <li><strong>Qualität prüfen:</strong> Aktualität, Einheiten, fehlende Werte (<code>null</code>) und Beschreibung der Felder (Metadaten) vor der Verwendung kontrollieren.</li>
        </ul>
        <div class="callout merke"><strong>Merke – Vorteile standardisierter Schnittstellen:</strong> Systeme verschiedener Hersteller lassen sich ohne Sonderlösungen verbinden, Komponenten bleiben austauschbar (weniger Herstellerabhängigkeit), Entwicklungs- und Wartungsaufwand sinken und Dokumentation sowie Werkzeuge sind allgemein verfügbar.</div>
        <div class="callout achtung"><strong>Prüfungsfallen:</strong> 401 heißt „nicht authentifiziert“, 403 heißt „authentifiziert, aber nicht berechtigt“. <code>GET</code>, <code>PUT</code> und <code>DELETE</code> sind idempotent (mehrfaches Senden ändert das Ergebnis nicht), <code>POST</code> nicht – zweimal gesendet entstehen zwei Datensätze.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Stellen</em> Sie die Daten im JSON-Format <em>dar</em>.“ · „<em>Vergleichen</em> Sie CSV und XML.“ · „<em>Ordnen</em> Sie den Aktionen die HTTP-Methoden <em>zu</em>.“ · „<em>Erläutern</em> Sie die Ursache der fehlerhaften Umlaute nach dem Import.“ · „<em>Nennen</em> Sie zwei Bedingungen, die bei der Nutzung der Open-Data-Schnittstelle zu beachten sind.“</div>
      `
    },
    {
      id: "daten-governance",
      title: "Datenintegration, Datenqualität, Datenschutz & Data Governance",
      exam: ["AP2"],
      summary: "ETL-Prozess, Data Warehouse und Data Lake, Big Data (5 V), Kriterien der Datenqualität, Rollen der Data Governance und Datenschutzregeln der DSGVO bei der Bereitstellung von Daten.",
      html: `
        <h5>Datenintegration mit ETL</h5>
        <p>Um Daten aus verschiedenen (heterogenen) Quellen gemeinsam auszuwerten, nutzt man den <strong>ETL-Prozess</strong>:</p>
        <ol>
          <li><strong>Extract:</strong> Daten aus den Quellen lesen – Datenbanken, CSV-Exporte, REST-APIs, Sensor- und Logdaten.</li>
          <li><strong>Transform:</strong> bereinigen und vereinheitlichen – Dubletten entfernen, Formate konvertieren (Datum, Zeichensatz, Einheiten), fehlende Werte behandeln, unterschiedliche Schlüssel abgleichen (derselbe Kunde heißt im ERP „K-1001“, im Webshop „58812“ → Zuordnungstabelle), Daten verknüpfen und verdichten.</li>
          <li><strong>Load:</strong> in das Zielsystem laden, z. B. ein Data Warehouse.</li>
        </ol>
        <p>Bei <strong>ELT</strong> werden die Rohdaten zuerst geladen und erst im Zielsystem transformiert – typisch für Data Lakes und Cloud-Plattformen.</p>
        <table><thead><tr><th></th><th>Data Warehouse</th><th>Data Lake</th></tr></thead><tbody>
          <tr><td>Daten</td><td>strukturiert, bereinigt, integriert</td><td>Rohdaten in allen Formaten (Tabellen, JSON, Logs, Bilder)</td></tr>
          <tr><td>Schema</td><td>Schema-on-Write (Struktur vor dem Laden)</td><td>Schema-on-Read (Struktur erst bei der Auswertung)</td></tr>
          <tr><td>Nutzung</td><td>Berichte, Kennzahlen, Business Intelligence</td><td>Data Science, maschinelles Lernen, explorative Analysen</td></tr>
        </tbody></table>
        <p>Operative Datenbanken fürs Tagesgeschäft heißen <strong>OLTP</strong> (viele kleine Transaktionen, normalisiert). Analysesysteme heißen <strong>OLAP</strong> (große Lesezugriffe, oft bewusst denormalisiert).</p>
        <h5>Big Data – die 5 V</h5>
        <p><strong>Volume</strong> (riesige Menge), <strong>Velocity</strong> (hohe Geschwindigkeit, oft in Echtzeit), <strong>Variety</strong> (viele Formate), <strong>Veracity</strong> (Glaubwürdigkeit, Datenqualität), <strong>Value</strong> (wirtschaftlicher Nutzen). Beispiel: Tausende Sensoren eines Offshore-Windparks vor der Westküste senden jede Sekunde Messwerte.</p>
        <h5>Datenqualität</h5>
        <table><thead><tr><th>Kriterium</th><th>Frage</th><th>Maßnahme</th></tr></thead><tbody>
          <tr><td>Korrektheit</td><td>Stimmen die Werte mit der Realität überein?</td><td>Plausibilitätsprüfungen, <code>CHECK</code></td></tr>
          <tr><td>Vollständigkeit</td><td>Sind alle Pflichtfelder gefüllt?</td><td><code>NOT NULL</code>, Pflichtfelder in Formularen</td></tr>
          <tr><td>Konsistenz</td><td>Widersprechen sich Daten?</td><td>Normalisierung, Fremdschlüssel</td></tr>
          <tr><td>Aktualität</td><td>Sind die Daten auf dem neuesten Stand?</td><td>regelmäßige Synchronisation, Zeitstempel</td></tr>
          <tr><td>Eindeutigkeit</td><td>Gibt es Dubletten?</td><td><code>UNIQUE</code>, Dublettenabgleich im ETL</td></tr>
          <tr><td>Einheitlichkeit</td><td>Sind Formate gleich?</td><td>Formatvorgaben, Konvertierung</td></tr>
        </tbody></table>
        <div class="callout formel"><strong>Kennzahl:</strong> Vollständigkeitsquote = gefüllte Werte ÷ erwartete Werte × 100 %</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> Von 2.000 Kundendatensätzen haben 1.840 eine E-Mail-Adresse. Vollständigkeit = 1.840 ÷ 2.000 × 100 % = <strong>92 %</strong>. Liegt das Ziel bei 95 %, fehlen noch 0,95 × 2.000 − 1.840 = 60 Adressen.</div>
        <h5>Data Governance</h5>
        <p>Data Governance ist der Ordnungsrahmen aus Rollen, Regeln und Prozessen für den Umgang mit Daten im Unternehmen – damit Daten korrekt, sicher, rechtskonform und nutzbar bleiben.</p>
        <ul>
          <li><strong>Data Owner:</strong> fachlich verantwortlich (meist Leitung der Fachabteilung), entscheidet über Zugriff und Verwendung.</li>
          <li><strong>Data Steward:</strong> kümmert sich im Alltag um Datenqualität, Begriffsdefinitionen und Metadaten.</li>
          <li><strong>Data Custodian</strong> (IT-Betrieb): technische Umsetzung – Speicherung, Rechte, Backup.</li>
          <li>Werkzeuge: Datenrichtlinien, Datenkatalog, Klassifizierung (öffentlich, intern, vertraulich, streng vertraulich), Lösch- und Archivierungskonzept.</li>
        </ul>
        <h5>Datenschutz bei der Bereitstellung</h5>
        <ul>
          <li><strong>Grundsätze nach Art. 5 DSGVO:</strong> Rechtmäßigkeit und Transparenz, Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung, Integrität und Vertraulichkeit, Rechenschaftspflicht. Jede Verarbeitung braucht eine Rechtsgrundlage (Art. 6).</li>
          <li><strong>Pseudonymisierung:</strong> Namen werden durch Kennungen ersetzt; mit getrennt aufbewahrten Zusatzinformationen ist der Personenbezug wiederherstellbar → weiterhin personenbezogene Daten.</li>
          <li><strong>Anonymisierung:</strong> Personenbezug ist nicht mehr herstellbar → die DSGVO gilt für diese Daten nicht mehr.</li>
          <li>Verarbeitet ein Dienstleister (z. B. Cloud-Anbieter) Daten im Auftrag, ist ein <strong>Vertrag zur Auftragsverarbeitung</strong> nötig (Art. 28). Übermittlungen in Drittländer außerhalb von EU und EWR sind nur zulässig mit einem Angemessenheitsbeschluss der EU-Kommission (Art. 45) oder mit geeigneten Garantien wie Standardvertragsklauseln (Art. 46).</li>
          <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20): Betroffene erhalten ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format – z. B. CSV, JSON oder XML.</li>
          <li>Technisch absichern (Art. 32): Rechtekonzept mit Views und <code>GRANT</code>, Verschlüsselung bei Übertragung (TLS) und Speicherung, Protokollierung.</li>
        </ul>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Pseudonymisierte Daten sind <em>nicht</em> anonym. Nur wenn niemand den Personenbezug mit vertretbarem Aufwand wiederherstellen kann, sind Daten anonym.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Beschreiben</em> Sie die drei Phasen des ETL-Prozesses.“ · „<em>Nennen</em> Sie vier Kriterien der Datenqualität.“ · „<em>Unterscheiden</em> Sie Pseudonymisierung und Anonymisierung.“ · „<em>Erläutern</em> Sie den Unterschied zwischen Data Warehouse und Data Lake.“</div>
      `
    },
    {
      id: "umsetzung",
      title: "Umsetzung im Team: Skriptzugriff, Tests, Git, Scrum/Kanban & Übergabe",
      exam: ["AP2"],
      summary: "Datenbankzugriff aus einem Python-Skript mit Platzhaltern und JSON-Ausgabe, Teststufen, Testverfahren und Testdaten, Versionsverwaltung mit Git, Scrum und Kanban sowie Dokumentation und Übergabe.",
      html: `
        <p>In LF 8 setzt ihr ein Konzept zur Datenbereitstellung arbeitsteilig und oft ortsunabhängig um. Dazu gehören ein Programm mit Datenbankzugriff, Tests, eine gemeinsame Versionsverwaltung, eine agile Arbeitsorganisation und eine Übergabe mit Dokumentation.</p>
        <h5>Datenbankzugriff aus einem Skript</h5>
        <pre><code>import sqlite3, json

con = sqlite3.connect("akademie.db")                  # 1. Verbindung öffnen
cur = con.cursor()
sem = "S12"
cur.execute("SELECT TeilnNr, Bezahlt FROM Anmeldung WHERE SemNr = ? ORDER BY TeilnNr", (sem,))  # 2. Abfrage mit Platzhalter
daten = [{"teilnNr": t, "bezahlt": bool(b)} for t, b in cur.fetchall()]       # 3. Ergebnis verarbeiten
print(json.dumps(daten, ensure_ascii=False))          # 4. als JSON ausgeben
con.close()                                           # 5. Verbindung schließen</code></pre>
        <p>Ausgabe mit den Anmeldedaten der Westküsten-Akademie aus den Übungen (Tabelle Anmeldung, Seminar S12): <code>[{"teilnNr": "T1", "bezahlt": false}, {"teilnNr": "T2", "bezahlt": true}, {"teilnNr": "T4", "bezahlt": false}]</code>. Das Fragezeichen ist der Platzhalter des Prepared Statements (bei MySQL-Treibern meist <code>%s</code>). Ändernde Anweisungen werden erst mit <code>con.commit()</code> dauerhaft. <strong>Serialisierung</strong> heißt: Objekte aus dem Arbeitsspeicher werden in ein übertragbares Format wie JSON umgewandelt.</p>
        <h5>Testen</h5>
        <table><thead><tr><th>Teststufe</th><th>Was wird geprüft?</th></tr></thead><tbody>
          <tr><td>Komponententest (Unit-Test)</td><td>eine einzelne Funktion, z. B. die Umrechnung von Datumsformaten</td></tr>
          <tr><td>Integrationstest</td><td>das Zusammenspiel von Komponenten, z. B. Skript ↔ Datenbank ↔ REST-API</td></tr>
          <tr><td>Systemtest</td><td>das Gesamtsystem gegen die Anforderungen in einer Testumgebung</td></tr>
          <tr><td>Abnahmetest</td><td>durch den Kunden; das Ergebnis steht im Abnahmeprotokoll</td></tr>
        </tbody></table>
        <ul>
          <li><strong>Statisch</strong> (Code wird nicht ausgeführt: Review, Code-Analyse) vs. <strong>dynamisch</strong> (Programm läuft mit Testdaten).</li>
          <li><strong>Black-Box-Test:</strong> Testfälle aus der Anforderung, ohne den Code zu kennen (Äquivalenzklassen, Grenzwerte). <strong>White-Box-Test:</strong> Testfälle aus dem Code, sodass jede Anweisung bzw. jeder Zweig mindestens einmal durchlaufen wird.</li>
          <li><strong>Testdaten:</strong> gültige, ungültige, Grenz- und Extremwerte, leere Eingaben. <strong>Testdatengeneratoren</strong> erzeugen große, realistische Datenmengen – ohne echte personenbezogene Daten.</li>
          <li><strong>Testprotokoll:</strong> Testfall, Eingabe, erwartetes und tatsächliches Ergebnis, Status, Datum, Tester.</li>
        </ul>
        <div class="callout beispiel"><strong>Beispiel Grenzwerte:</strong> Ein Seminar darf 0 bis 12 Teilnehmer haben. Äquivalenzklassen: unter 0 (ungültig), 0 bis 12 (gültig), über 12 (ungültig). Testwerte: −1, 0, 12 und 13 an den Grenzen plus ein Normalwert wie 6.</div>
        <h5>Versionsverwaltung mit Git</h5>
        <pre><code>git clone https://gitlab.example/nordlicht/datenexport.git
git switch -c feature/json-export        # Branch anlegen und wechseln
git add export.py
git commit -m "JSON-Export der Anmeldungen ergänzt"
git push -u origin feature/json-export   # danach Pull Request stellen</code></pre>
        <p>Ein <strong>Commit</strong> speichert einen Versionsstand mit Nachricht, ein <strong>Branch</strong> ist ein paralleler Entwicklungszweig, ein <strong>Merge</strong> führt Zweige zusammen. Über einen <strong>Pull Request</strong> (GitLab: Merge Request) prüft das Team Änderungen per Code-Review, bevor sie in den Hauptzweig kommen. Ein <strong>Tag</strong> markiert eine Version wie v1.0. GitHub und GitLab stellen gemeinsame Repositories bereit.</p>
        <div class="callout achtung"><strong>Achtung:</strong> Niemals Passwörter, API-Keys oder echte Kundendaten committen – die Versionsgeschichte vergisst nichts.</div>
        <h5>Scrum und Kanban</h5>
        <table><thead><tr><th>Merkmal</th><th>Scrum</th><th>Kanban</th></tr></thead><tbody>
          <tr><td>Takt</td><td>feste Sprints (höchstens ein Monat, oft 2 Wochen)</td><td>kontinuierlicher Fluss ohne Sprints</td></tr>
          <tr><td>Rollen</td><td>Product Owner, Scrum Master, Developers</td><td>keine festen Rollen vorgeschrieben</td></tr>
          <tr><td>Werkzeuge</td><td>Product und Sprint Backlog; Sprint Planning, Daily Scrum, Review, Retrospektive</td><td>Board (z. B. Offen – In Arbeit – Test – Fertig) mit WIP-Limits</td></tr>
          <tr><td>Stärke</td><td>planbare, lieferfähige Inkremente</td><td>flexibel, gut für laufende Aufgaben wie Support</td></tr>
        </tbody></table>
        <h5>Dokumentation und Übergabe</h5>
        <ul>
          <li><strong>Benutzerdokumentation:</strong> Bedienung, Schritt-für-Schritt-Anleitungen, FAQ – zielgruppengerecht, bei Bedarf auf Englisch.</li>
          <li><strong>Technische Dokumentation:</strong> Datenmodell, Schnittstellen und Datenformate, Rechtekonzept, Sicherung, Installation.</li>
          <li><strong>Übergabe:</strong> Einweisung, Abnahmeprotokoll, danach Reflexion: Waren Werkzeuge und Dokumentation geeignet?</li>
        </ul>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Erstellen</em> Sie Testfälle mit Grenzwerten.“ · „<em>Erläutern</em> Sie Branch und Merge.“ · „<em>Vergleichen</em> Sie Scrum und Kanban.“ · „<em>Ergänzen</em> Sie das Skript so, dass die Abfrage mit einem Platzhalter arbeitet.“</div>
      `
    }
  ],
  exercises: [
    {
      id: "e-grundlagen-1",
      topic: "db-grundlagen",
      title: "Von Excel-Listen zur Datenbank",
      level: 1,
      exam: ["AP1", "AP2"],
      task: `
        <p>Die Nordlicht IT GmbH in Heide berät die Dithmarscher Landhandel eG in Meldorf. Dort führen Einkauf, Vertrieb und Buchhaltung jeweils eigene Tabellenkalkulationsdateien mit Kundenadressen. Neulich wurde eine Rechnung an eine alte Adresse geschickt, obwohl der Vertrieb die neue Adresse längst kannte.</p>
        <p>a) Nenne und erläutere drei Probleme der bisherigen Datenhaltung.</p>
        <p>b) Die Nordlicht IT schlägt MariaDB vor. Unterscheide an diesem Beispiel die Begriffe Datenbank, DBMS und Datenbanksystem.</p>
        <p>c) Nenne vier Aufgaben eines DBMS, die die Probleme aus a) lösen.</p>`,
      hints: ["Denk an Mehrfachspeicherung, widersprüchliche Daten, Zugriffsrechte und die Kopplung von Programm und Dateiformat."],
      solution: `
        <p><strong>a)</strong></p>
        <ul>
          <li><strong>Redundanz:</strong> Die Kundenadresse ist dreimal gespeichert. Das kostet Speicherplatz, vor allem aber Pflegeaufwand, weil jede Änderung in drei Dateien erfolgen muss.</li>
          <li><strong>Inkonsistenz:</strong> Der Vertrieb hat die Adresse geändert, die Buchhaltung nicht. Jetzt existieren zwei widersprüchliche Adressen – genau so kam die falsch adressierte Rechnung zustande.</li>
          <li><strong>Datenschutz/Zugriffskontrolle:</strong> Wer eine Datei öffnen kann, sieht alle Inhalte. Es lässt sich nicht regeln, dass z. B. nur die Buchhaltung Bankverbindungen sieht.</li>
          <li>(auch möglich) <strong>Mehrbenutzerprobleme:</strong> Öffnen zwei Personen dieselbe Datei gleichzeitig, kann eine Änderung die andere überschreiben.</li>
        </ul>
        <p><strong>b)</strong> Die <strong>Datenbank</strong> ist der strukturierte Datenbestand, also die Tabellen mit Kunden, Artikeln und Aufträgen. <strong>MariaDB</strong> ist das <strong>DBMS</strong>, die Software, die alle Zugriffe auf diese Daten verwaltet. Beides zusammen bildet das <strong>Datenbanksystem</strong> (DBS = DBMS + DB), auf das Einkauf, Vertrieb und Buchhaltung gemeinsam zugreifen. Im weiteren Sinn gehören zum Datenbanksystem auch der Server (Hardware), die Anwendungsprogramme und die Benutzer.</p>
        <p><strong>c)</strong> Zentrale, einheitliche Datenhaltung (Integration) gegen Redundanz · Konsistenzüberwachung durch Integritätsregeln · Zugriffskontrolle mit Benutzerrechten · Synchronisation des Mehrbenutzerbetriebs durch Transaktionen und Sperren (außerdem: Datensicherung/Recovery, Benutzersichten).</p>`
    },
    {
      id: "e-grundlagen-2",
      topic: "db-grundlagen",
      title: "Anforderungen nach Codd zuordnen",
      level: 2,
      exam: ["AP2"],
      task: `
        <p>Du betreust bei der Nordlicht IT GmbH die Warenwirtschaftsdatenbank eines Kunden.</p>
        <p>a) Ordne jede Situation der passenden Anforderung an ein DBMS nach Codd zu.</p>
        <ol>
          <li>Nach einem Serverabsturz wird der Datenbestand inklusive aller bestätigten Buchungen wiederhergestellt.</li>
          <li>Der Vertrieb sieht Kundendaten ohne Bankverbindung, die Buchhaltung sieht auch die Bankverbindung.</li>
          <li>Zwei Mitarbeiter wollen gleichzeitig den letzten Artikel im Lager verkaufen – nur einer erhält ihn.</li>
          <li>Ein Auftrag mit einer nicht existierenden Kundennummer wird abgewiesen.</li>
          <li>Ein Praktikant erhält beim Versuch, die Gehaltstabelle zu lesen, eine Fehlermeldung.</li>
          <li>Der Administrator lässt sich anzeigen, welche Spalten und Datentypen die Tabelle <code>Kunde</code> hat.</li>
        </ol>
        <p>b) Beschreibe, welche Informationen das Data Dictionary enthält (vier Beispiele), und erläutere, wer es pflegt.</p>`,
      solution: `
        <p><strong>a)</strong></p>
        <table><thead><tr><th>Nr.</th><th>Anforderung</th></tr></thead><tbody>
          <tr><td>1</td><td>Datensicherung (Recovery)</td></tr>
          <tr><td>2</td><td>Benutzersichten (Views)</td></tr>
          <tr><td>3</td><td>Synchronisation (Mehrbenutzerbetrieb, Sperren) bzw. Transaktionen</td></tr>
          <tr><td>4</td><td>Konsistenzüberwachung (Integritätssicherung, hier referenzielle Integrität)</td></tr>
          <tr><td>5</td><td>Zugriffskontrolle (Datenschutz)</td></tr>
          <tr><td>6</td><td>Katalog (Data Dictionary)</td></tr>
        </tbody></table>
        <p><strong>b)</strong> Das Data Dictionary enthält Metadaten, also Daten über die gespeicherten Daten: Namen der Tabellen und Spalten, Datentypen und Längen, Primär- und Fremdschlüssel, Constraints wie <code>NOT NULL</code> oder <code>UNIQUE</code>, Indizes, Views sowie Benutzer und Rechte. Es wird vom DBMS selbst automatisch gepflegt: Jede DDL-Anweisung wie <code>CREATE TABLE</code> oder <code>GRANT</code> aktualisiert den Katalog. Benutzer können es lesen (z. B. über <code>INFORMATION_SCHEMA</code>), ändern es aber nicht direkt.</p>`
    },
    {
      id: "e-ebenen-1",
      topic: "drei-ebenen",
      title: "Änderungen den drei Ebenen zuordnen",
      level: 2,
      exam: ["AP2"],
      task: `
        <p>Bei der Hafenlogistik Husum GmbH stehen an der Personaldatenbank folgende Änderungen an:</p>
        <ol>
          <li>Die Datenbankdateien werden von lokalen Festplatten auf ein SAN verschoben.</li>
          <li>Auf die Spalte <code>Nachname</code> wird ein Index gelegt.</li>
          <li>Die Tabelle <code>Mitarbeiter</code> erhält die neue Spalte <code>Mobilnummer</code>.</li>
          <li>Für die Ausbildungsleitung wird eine View angelegt, die nur Name, Abteilung und Ausbildungsjahr der Azubis zeigt.</li>
        </ol>
        <p>a) Ordne jede Änderung der externen, konzeptionellen oder internen Ebene zu.</p>
        <p>b) Erläutere für die Änderungen 1 und 3, welche Art der Datenunabhängigkeit dafür sorgt, dass die Personalsoftware nicht angepasst werden muss.</p>
        <p>c) Bisher greift ein Desktop-Programm direkt auf den Datenbankserver zu. Begründe einen Sicherheitsvorteil einer 3-Tier-Architektur.</p>`,
      solution: `
        <p><strong>a)</strong> 1 → interne Ebene · 2 → interne Ebene · 3 → konzeptionelle Ebene · 4 → externe Ebene.</p>
        <p><strong>b)</strong> Änderung 1 betrifft nur die physische Speicherung. Dank <strong>physischer Datenunabhängigkeit</strong> bleiben das konzeptionelle Schema und damit alle Programme unverändert. Änderung 3 erweitert das konzeptionelle Schema. Dank <strong>logischer Datenunabhängigkeit</strong> sehen die Programme weiterhin ihre bisherigen Sichten bzw. Spalten und müssen nicht angepasst werden – die neue Spalte stört sie nicht.</p>
        <p><strong>c)</strong> In der 3-Tier-Architektur spricht der Client nur mit dem Applikationsserver (z. B. über eine REST-API). Nur dieser Server hat Zugriff auf den Datenbankserver. Die Datenbank kann deshalb in einem abgeschotteten Netzsegment stehen, und auf den Clients müssen keine Datenbank-Zugangsdaten gespeichert werden. Ein kompromittierter Client kann so nicht direkt beliebige SQL-Befehle an die Datenbank senden.</p>`
    },
    {
      id: "e-modelle-1",
      topic: "db-modelle",
      title: "Das passende Datenbankmodell wählen",
      level: 2,
      exam: ["AP2"],
      task: `
        <p>Die Nordlicht IT GmbH erhält vier Anfragen. Wähle jeweils ein geeignetes Datenbankmodell und begründe deine Wahl in einem Satz.</p>
        <ol>
          <li>Ein Landkreis möchte seine Organisationsstruktur (Amt → Fachdienst → Sachgebiet → Mitarbeiter) für die Benutzerverwaltung abbilden.</li>
          <li>Ein Großhändler braucht eine Warenwirtschaft mit Kunden, Aufträgen, Artikeln und Rechnungen und vielen Auswertungen.</li>
          <li>Ein Ingenieurbüro speichert CAD-Konstruktionen aus verschachtelten Bauteilen mit eigenen Methoden.</li>
          <li>Ein Onlineshop möchte Empfehlungen der Art „Kunden, die X kauften, kauften auch Y“ über viele Beziehungsebenen berechnen.</li>
        </ol>
        <p>b) Erläutere den wesentlichen Unterschied zwischen dem hierarchischen Modell und dem Netzwerkmodell.</p>`,
      solution: `
        <p><strong>a)</strong></p>
        <ol>
          <li><strong>Hierarchisches Modell</strong> (z. B. Verzeichnisdienst wie LDAP/Active Directory): Die Organisation ist ein Baum, jedes Element hat genau ein übergeordnetes Element.</li>
          <li><strong>Relationales Modell</strong>: Die Daten sind klar strukturiert, über Schlüssel verknüpft und müssen konsistent sein; SQL erlaubt flexible Auswertungen.</li>
          <li><strong>Objektorientiertes bzw. objektrelationales Modell</strong>: Verschachtelte Objekte mit Methoden können ohne Zerlegung in viele Tabellen gespeichert werden.</li>
          <li><strong>Graphdatenbank</strong> (NoSQL): Beziehungen stehen im Mittelpunkt; Pfade über viele Ebenen lassen sich schneller verfolgen als mit vielen Joins.</li>
        </ol>
        <p><strong>b)</strong> Im hierarchischen Modell hat jeder Datensatz genau einen Vorgänger, die Struktur ist ein Baum und kann nur 1:n-Beziehungen direkt abbilden. Im Netzwerkmodell darf ein Datensatz mehrere Vorgänger und Nachfolger haben. Dadurch lassen sich auch n:m-Beziehungen (über Verbindungsdatensätze) ohne Redundanz darstellen – die Struktur wird dafür komplexer.</p>`
    },
    {
      id: "e-nosql-1",
      topic: "nosql",
      title: "NoSQL für einen Windpark-Dienstleister",
      level: 2,
      exam: ["AP2"],
      task: `
        <p>Die Windpark Service Nordsee GmbH in Husum überwacht Offshore-Anlagen. Die Nordlicht IT GmbH soll die Datenhaltung planen.</p>
        <p>a) Ordne jedem Anwendungsfall einen NoSQL-Datenbanktyp zu und begründe kurz:</p>
        <ol>
          <li>Sitzungsdaten der Techniker im Webportal sollen extrem schnell abrufbar sein.</li>
          <li>5.000 Sensoren liefern pausenlos Messwerte (Zeitreihen).</li>
          <li>Wartungsberichte sind je nach Anlagentyp unterschiedlich aufgebaut.</li>
          <li>Es soll analysiert werden, welche Anlagen über Umspannwerke und Kabeltrassen voneinander abhängen.</li>
        </ol>
        <p>b) Jeder der 5.000 Sensoren liefert pro Sekunde einen Messwert mit 32 Byte. Berechne die Datenmenge pro Tag in GiB und pro Jahr (365 Tage) in TiB.</p>
        <p>c) Bei einer Netzstörung zwischen zwei Rechenzentren muss sich das System nach dem CAP-Theorem entscheiden. Begründe, welche Eigenschaft du für das Monitoring-Dashboard und welche für die Abrechnung der Wartungsverträge bevorzugst.</p>`,
      hints: ["1 Tag = 86.400 Sekunden; 1 GiB = 2³⁰ Byte = 1.073.741.824 Byte; 1 TiB = 2⁴⁰ Byte."],
      solution: `
        <p><strong>a)</strong></p>
        <ol>
          <li><strong>Key-Value-Store</strong> (z. B. Redis): Zugriff nur über die Sitzungs-ID, sehr schnell, meist im Arbeitsspeicher.</li>
          <li><strong>Spaltenorientierte Datenbank</strong> (z. B. Cassandra): für sehr hohe Schreiblast und große Zeitreihen ausgelegt, horizontal auf viele Knoten verteilbar.</li>
          <li><strong>Dokumentenorientierte Datenbank</strong> (z. B. MongoDB): Jeder Bericht ist ein JSON-Dokument mit eigenem Aufbau, kein starres Schema nötig.</li>
          <li><strong>Graphdatenbank</strong> (z. B. Neo4j): Anlagen, Umspannwerke und Trassen sind Knoten und Kanten; Abhängigkeiten über mehrere Ebenen lassen sich effizient abfragen.</li>
        </ol>
        <p><strong>b)</strong></p>
        <ul>
          <li>Werte pro Tag: 5.000 × 86.400 = 432.000.000</li>
          <li>Datenmenge: 432.000.000 × 32 Byte = 13.824.000.000 Byte</li>
          <li>In GiB: 13.824.000.000 ÷ 2³⁰ ≈ <strong>12,87 GiB pro Tag</strong></li>
          <li>Pro Jahr: 13.824.000.000 Byte × 365 = 5.045.760.000.000 Byte; ÷ 2⁴⁰ ≈ <strong>4,59 TiB</strong> (ohne Indizes, Replikation und Komprimierung)</li>
          <li>Hinweis: Nach der Präfix-Regel des IHK-Prüfungskatalogs werden Datenmengen mit Binärpräfixen (KiB, MiB, GiB, TiB) angegeben; Angaben wie „13,8 GB“ gelten dort als falsch.</li>
        </ul>
        <p><strong>c)</strong> Da Partitionstoleranz (P) in verteilten Systemen Pflicht ist, wählt man zwischen Konsistenz (C) und Verfügbarkeit (A). Für das <strong>Monitoring-Dashboard</strong> ist <strong>Verfügbarkeit (AP)</strong> wichtiger: Leicht veraltete Messwerte sind besser als ein leerer Bildschirm, die Daten gleichen sich nach der Störung wieder an (eventual consistency). Für die <strong>Abrechnung</strong> ist <strong>Konsistenz (CP)</strong> wichtiger: Eine Rechnung darf nicht auf veralteten oder widersprüchlichen Daten beruhen; lieber wird die Anfrage kurz abgewiesen. Hier passt eine ACID-fähige, meist relationale Datenbank.</p>`
    },
    {
      id: "e-erm-1",
      topic: "erm",
      title: "ER-Modell für einen Fahrradverleih",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `
        <p>Der Fahrradverleih „Deichrad“ in Büsum beauftragt die Nordlicht IT GmbH mit einer Datenbank. Aus dem Kundengespräch:</p>
        <p><em>„Wir haben mehrere Stationen, jede mit Stationsnummer und Ort. Jedes Fahrrad hat eine Radnummer, einen Typ und einen Tagespreis und gehört zu genau einer Heimatstation; an einer Station stehen viele Räder. Kunden mit Kundennummer, Name und Telefonnummer leihen Räder aus. Wir müssen wissen, wer welches Rad wann ausgeliehen und wann zurückgegeben hat. Ein Kunde leiht natürlich im Lauf der Zeit viele Räder, und jedes Rad wird von vielen Kunden genutzt.“</em></p>
        <p>a) Bestimme die Entitätstypen mit ihren Attributen und kennzeichne die Schlüsselattribute.</p>
        <p>b) Bestimme die Beziehungstypen mit Kardinalitäten in Chen-Notation.</p>
        <p>c) Skizziere das ER-Modell.</p>`,
      solution: `
        <p><strong>a)</strong> Station (<strong>StationsNr</strong>, Ort) · Fahrrad (<strong>RadNr</strong>, Typ, Tagespreis) · Kunde (<strong>KundenNr</strong>, Name, Telefon). Schlüsselattribute sind fett markiert (im Diagramm unterstrichen).</p>
        <p><strong>b)</strong></p>
        <ul>
          <li>Station <em>hat</em> Fahrrad: <strong>1:n</strong> – eine Station hat viele Räder, ein Rad gehört zu genau einer Heimatstation.</li>
          <li>Kunde <em>leiht</em> Fahrrad: <strong>n:m</strong> – ein Kunde leiht viele Räder, ein Rad wird von vielen Kunden geliehen. Die Beziehung trägt die Attribute Ausleihdatum und Rückgabedatum.</li>
        </ul>
        <p><strong>c)</strong></p>
        <pre class="ascii">
             (Ausleihdatum) (Rückgabedatum)
                     │           │
┌─────────┐ n              m ┌──────────┐ n            1 ┌─────────┐
│  Kunde  │────&lt; leiht &gt;─────│ Fahrrad  │────&lt; hat &gt;─────│ Station │
└─────────┘                  └──────────┘                └─────────┘
     │                             │                           │
(KundenNr) (Name) (Telefon)  (RadNr) (Typ) (Tagespreis)  (StationsNr) (Ort)
</pre>
        <p>Hinweis für die spätere Umsetzung: Da derselbe Kunde dasselbe Rad mehrmals leihen kann, braucht die Tabelle für die Ausleihe einen eigenen Schlüssel (z. B. AusleihNr) oder das Ausleihdatum als Teil des Primärschlüssels.</p>`
    },
    {
      id: "e-erm-2",
      topic: "erm",
      title: "Min-Max-Notation und Überführung: Seminarverwaltung",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `
        <p>Die Westküsten-Akademie in Husum lässt von der Nordlicht IT GmbH eine Seminarverwaltung entwickeln. Folgende Regeln gelten:</p>
        <ul>
          <li>Jedes Seminar (SemNr, Titel, Termin, Preis) wird von genau einem Dozenten (DozentNr, Name, Fachgebiet) geleitet. Ein Dozent leitet beliebig viele Seminare, neue Dozenten auch noch gar keins.</li>
          <li>Teilnehmer (TeilnNr, Name, E-Mail) werden erst gespeichert, wenn sie mindestens ein Seminar gebucht haben. Ein Seminar hat 0 bis höchstens 12 Teilnehmer. Zu jeder Buchung wird das Buchungsdatum gespeichert.</li>
          <li>Jedes Seminar findet in genau einem Raum (RaumNr, Plätze) statt; ein Raum wird für beliebig viele Seminare genutzt, kann aber auch leer stehen.</li>
        </ul>
        <p>a) Gib für alle drei Beziehungen die Kardinalitäten in (min,max)-Notation an.</p>
        <p>b) Gib dieselben Beziehungen in Chen-Notation (1:1, 1:n, n:m) an.</p>
        <p>c) Überführe das Modell in ein Relationenmodell. Kennzeichne Primär- und Fremdschlüssel.</p>
        <p>d) Welche Regeln lassen sich allein durch die Tabellenstruktur (Schlüssel, NOT NULL) durchsetzen, welche nicht? Schlage für eine nicht durchsetzbare Regel eine Lösung vor.</p>`,
      hints: ["Bei (min,max) steht die Angabe beim Entitätstyp, dessen einzelne Entität du betrachtest.", "Eine n:m-Beziehung wird immer zu einer eigenen Tabelle."],
      solution: `
        <p><strong>a)</strong></p>
        <ul>
          <li>Dozent <strong>(0,n)</strong> — leitet — <strong>(1,1)</strong> Seminar</li>
          <li>Teilnehmer <strong>(1,n)</strong> — bucht — <strong>(0,12)</strong> Seminar</li>
          <li>Raum <strong>(0,n)</strong> — findet statt in — <strong>(1,1)</strong> Seminar</li>
        </ul>
        <p>Gelesen z. B.: Ein Dozent leitet 0 bis n Seminare; ein Seminar wird von genau einem Dozenten geleitet.</p>
        <p><strong>b)</strong> Dozent 1 : n Seminar · Teilnehmer n : m Seminar · Raum 1 : n Seminar. In Chen-Notation steht die „1“ beim Dozenten bzw. Raum – also auf der jeweils anderen Seite als die (1,1) der Min-Max-Notation.</p>
        <p><strong>c)</strong></p>
        <ul>
          <li>Dozent (DozentNr [PK], Name, Fachgebiet)</li>
          <li>Raum (RaumNr [PK], Plaetze)</li>
          <li>Seminar (SemNr [PK], Titel, Termin, Preis, DozentNr [FK → Dozent], RaumNr [FK → Raum])</li>
          <li>Teilnehmer (TeilnNr [PK], Name, E_Mail)</li>
          <li>Buchung (TeilnNr [PK, FK → Teilnehmer], SemNr [PK, FK → Seminar], Buchungsdatum)</li>
        </ul>
        <p>Die beiden 1:n-Beziehungen werden durch Fremdschlüssel in <em>Seminar</em> gelöst, die n:m-Beziehung durch die Zwischentabelle <em>Buchung</em> mit zusammengesetztem Primärschlüssel.</p>
        <p><strong>d)</strong> Durch die Struktur durchsetzbar: „genau ein Dozent“ und „genau ein Raum“ je Seminar (FK-Spalten mit <code>NOT NULL</code>, pro Zeile nur ein Wert) und „ein Teilnehmer bucht dasselbe Seminar nur einmal“ (zusammengesetzter PK). Nicht allein durch die Struktur durchsetzbar sind die Obergrenze von 12 Teilnehmern je Seminar und die Regel, dass jeder Teilnehmer mindestens eine Buchung hat. Lösung für die Obergrenze: Vor jedem Einfügen in <em>Buchung</em> zählt die Anwendung – oder ein Trigger in der Datenbank – mit <code>SELECT COUNT(*) FROM Buchung WHERE SemNr = …</code> die vorhandenen Buchungen und lehnt die 13. Buchung ab. Das Anlegen des Teilnehmers und seiner ersten Buchung erfolgt in einer gemeinsamen Transaktion.</p>`
    },
    {
      id: "e-erm-3",
      topic: "erm",
      title: "Fehlerhaftes ER-Modell eines Ticketsystems korrigieren",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `
        <p>Die Nordlicht IT GmbH in Heide führt für ihren Service-Desk ein eigenes Ticketsystem ein. Aus dem Anforderungsgespräch:</p>
        <p><em>„Jedes Ticket hat eine Ticketnummer, einen Titel, ein Erstelldatum und eine Priorität. Es wird von genau einem Benutzer gemeldet; ein Benutzer kann viele Tickets melden. Bearbeitet wird ein Ticket von genau einem Techniker, ein Techniker hat natürlich viele Tickets gleichzeitig. Ein Ticket kann mehrere Geräte betreffen (Inventarnummer, Bezeichnung, Typ), und ein Gerät taucht im Lauf der Zeit in vielen Tickets auf. Für jedes betroffene Gerät eines Tickets halten wir fest, welche Maßnahme durchgeführt wurde.“</em></p>
        <p>Ein Auszubildender hat daraus folgendes ER-Modell (Chen-Notation) entworfen; Schlüsselattribute sind fett gedruckt (im Diagramm unterstrichen):</p>
        <ul>
          <li>Benutzer (<strong>BenutzerNr</strong>, Name, Abteilung) <strong>1 : n</strong> <em>meldet</em> Ticket</li>
          <li>Ticket (<strong>TicketNr</strong>, Titel, Erstellt, Prioritaet, InvNr) – im Attribut InvNr stehen alle betroffenen Geräte, z. B. „G-117, G-204“</li>
          <li>Techniker (<strong>TechNr</strong>, Name, Supportlevel, Massnahme) <strong>1 : 1</strong> <em>bearbeitet</em> Ticket</li>
        </ul>
        <p>a) Nenne drei fachliche Fehler im Modell und begründe sie mit dem Anforderungstext.</p>
        <p>b) Gib das korrigierte ER-Modell an: alle Entitätstypen mit Attributen und Schlüsseln sowie alle Beziehungen mit Kardinalitäten in Chen-Notation.</p>
        <p>c) Überführe das korrigierte Modell in ein Relationenmodell und kennzeichne Primär- und Fremdschlüssel. Wie viele Tabellen entstehen?</p>
        <p>d) Ordne die folgenden Datensätze der richtigen Tabelle zu: (1) G-117 | Notebook NB-14 | Notebook · (2) T-5001 | G-117 | Treiber neu installiert · (3) T-5001 | VPN bricht ab | 2026-09-21 | hoch | B-12 | TEC-3</p>`,
      hints: ["Prüfe jede Beziehung in beide Richtungen.", "Ein Attribut, das von der Kombination zweier Entitäten abhängt, gehört an die Beziehung."],
      solution: `
        <p><strong>a)</strong></p>
        <ol>
          <li><strong>Falsche Kardinalität bei „bearbeitet“:</strong> Ein Techniker bearbeitet viele Tickets, jedes Ticket hat genau einen Techniker. Richtig ist <strong>1:n</strong> statt 1:1.</li>
          <li><strong>Entitätstyp Gerät fehlt:</strong> Geräte haben eigene Attribute (Inventarnummer, Bezeichnung, Typ) und stehen mit vielen Tickets in Beziehung. Das mehrwertige Attribut InvNr im Ticket („G-117, G-204“) ist falsch und würde später die 1. Normalform verletzen. Richtig: eigener Entitätstyp Gerät mit einer <strong>n:m</strong>-Beziehung <em>betrifft</em> zum Ticket.</li>
          <li><strong>Maßnahme falsch zugeordnet:</strong> Die Maßnahme hängt nicht vom Techniker allein ab, sondern von der Kombination aus Ticket und Gerät. Sie ist ein <strong>Beziehungsattribut</strong> von <em>betrifft</em>.</li>
        </ol>
        <p><strong>b)</strong> Entitätstypen (Schlüssel fett): Benutzer (<strong>BenutzerNr</strong>, Name, Abteilung) · Techniker (<strong>TechNr</strong>, Name, Supportlevel) · Ticket (<strong>TicketNr</strong>, Titel, Erstellt, Prioritaet) · Geraet (<strong>InvNr</strong>, Bezeichnung, Typ). Beziehungen: Benutzer <strong>1 : n</strong> <em>meldet</em> Ticket · Techniker <strong>1 : n</strong> <em>bearbeitet</em> Ticket · Ticket <strong>n : m</strong> <em>betrifft</em> Geraet mit dem Beziehungsattribut Massnahme.</p>
        <p><strong>c)</strong></p>
        <ul>
          <li>Benutzer (BenutzerNr [PK], Name, Abteilung)</li>
          <li>Techniker (TechNr [PK], Name, Supportlevel)</li>
          <li>Geraet (InvNr [PK], Bezeichnung, Typ)</li>
          <li>Ticket (TicketNr [PK], Titel, Erstellt, Prioritaet, BenutzerNr [FK → Benutzer], TechNr [FK → Techniker])</li>
          <li>Ticket_Geraet (TicketNr [PK, FK → Ticket], InvNr [PK, FK → Geraet], Massnahme)</li>
        </ul>
        <p>Es entstehen <strong>5 Tabellen</strong>: vier für die Entitätstypen und eine Zwischentabelle für die n:m-Beziehung. Die beiden 1:n-Beziehungen werden über Fremdschlüssel in <em>Ticket</em> abgebildet.</p>
        <p><strong>d)</strong> (1) gehört in <strong>Geraet</strong> (Inventarnummer, Bezeichnung, Typ). (2) gehört in <strong>Ticket_Geraet</strong> (Ticket, Gerät und Maßnahme). (3) gehört in <strong>Ticket</strong> (TicketNr, Titel, Erstellt, Priorität sowie die Fremdschlüssel BenutzerNr B-12 und TechNr TEC-3).</p>`
    },
    {
      id: "e-relation-1",
      topic: "relationenmodell",
      title: "ER-Modell in Tabellen überführen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `
        <p>Für die Personalverwaltung der Hafenlogistik Husum GmbH liegt folgendes ER-Modell vor:</p>
        <ul>
          <li>Abteilung (AbtNr, Bezeichnung) <strong>1 : n</strong> Mitarbeiter (PersNr, Name, Eintritt)</li>
          <li>Mitarbeiter <strong>1 : 1</strong> Dienstwagen (Kennzeichen, Modell) – nicht jeder Mitarbeiter hat einen Dienstwagen.</li>
          <li>Mitarbeiter <strong>n : m</strong> Projekt (ProjektNr, Titel, Budget) mit dem Beziehungsattribut Rolle</li>
        </ul>
        <p>a) Überführe das Modell in ein Relationenmodell und kennzeichne alle Primär- und Fremdschlüssel.</p>
        <p>b) Wie viele Tabellen entstehen? Begründe.</p>
        <p>c) Die Abteilung „Vertrieb“ mit 14 Mitarbeitern soll gelöscht werden. Beschreibe, was bei <code>ON DELETE RESTRICT</code>, <code>ON DELETE CASCADE</code> und <code>ON DELETE SET NULL</code> für den Fremdschlüssel in der Mitarbeitertabelle passiert, und empfiehl eine Variante.</p>
        <p>d) Ein Sachbearbeiter legt einen Mitarbeiter mit der Abteilungsnummer 99 an, die es nicht gibt. Welche Integritätsregel greift?</p>`,
      solution: `
        <p><strong>a)</strong></p>
        <ul>
          <li>Abteilung (AbtNr [PK], Bezeichnung)</li>
          <li>Mitarbeiter (PersNr [PK], Name, Eintritt, AbtNr [FK → Abteilung])</li>
          <li>Dienstwagen (Kennzeichen [PK], Modell, PersNr [FK → Mitarbeiter, UNIQUE])</li>
          <li>Projekt (ProjektNr [PK], Titel, Budget)</li>
          <li>Projektmitarbeit (PersNr [PK, FK → Mitarbeiter], ProjektNr [PK, FK → Projekt], Rolle)</li>
        </ul>
        <p>Der FK der 1:1-Beziehung steht beim Dienstwagen, weil nicht jeder Mitarbeiter einen Wagen hat – so entstehen keine leeren Felder in der Mitarbeitertabelle. <code>UNIQUE</code> stellt sicher, dass ein Mitarbeiter höchstens einen Dienstwagen hat.</p>
        <p><strong>b)</strong> Es entstehen <strong>5 Tabellen</strong>: je eine für die vier Entitätstypen und eine Zwischentabelle für die n:m-Beziehung. Die 1:n- und die 1:1-Beziehung brauchen keine eigene Tabelle, sie werden über Fremdschlüssel abgebildet.</p>
        <p><strong>c)</strong></p>
        <ul>
          <li><code>RESTRICT</code>: Das Löschen wird abgewiesen, solange noch Mitarbeiter der Abteilung zugeordnet sind.</li>
          <li><code>CASCADE</code>: Mit der Abteilung werden alle 14 Mitarbeiterdatensätze gelöscht (Löschweitergabe) – und je nach Regel auch deren Projektmitarbeit und Dienstwagenzuordnung.</li>
          <li><code>SET NULL</code>: Die Abteilung wird gelöscht, bei den 14 Mitarbeitern steht danach <code>NULL</code> als Abteilung (nur möglich, wenn die Spalte NULL erlaubt).</li>
        </ul>
        <p>Empfehlung: <strong>RESTRICT</strong>. Personaldaten dürfen nicht versehentlich verloren gehen. Die Mitarbeiter werden zuerst bewusst einer anderen Abteilung zugeordnet, danach kann die leere Abteilung gelöscht werden.</p>
        <p><strong>d)</strong> Die <strong>referenzielle Integrität</strong>: Ein Fremdschlüsselwert muss als Primärschlüssel in der referenzierten Tabelle existieren. Das DBMS weist den Datensatz mit einer Fehlermeldung ab.</p>`
    },
    {
      id: "e-normal-1",
      topic: "normalisierung",
      title: "Anomalien in der Reparaturliste",
      level: 1,
      exam: ["AP2"],
      task: `
        <p>Die Nordlicht IT GmbH erfasst Reparaturaufträge bisher in einer einzigen Tabelle (Primärschlüssel: AuftragNr):</p>
        <table><thead><tr><th>AuftragNr</th><th>Datum</th><th>KundenNr</th><th>Kunde</th><th>PLZ</th><th>Ort</th><th>Techniker</th></tr></thead><tbody>
          <tr><td>R-201</td><td>01.09.2026</td><td>K10</td><td>Deichbau Meyer KG</td><td>25746</td><td>Heide</td><td>Jensen</td></tr>
          <tr><td>R-202</td><td>04.09.2026</td><td>K11</td><td>Kanzlei Petersen</td><td>25704</td><td>Meldorf</td><td>Hansen</td></tr>
          <tr><td>R-203</td><td>10.09.2026</td><td>K10</td><td>Deichbau Meyer KG</td><td>25746</td><td>Heide</td><td>Hansen</td></tr>
        </tbody></table>
        <p>a) Erläutere an dieser Tabelle je ein Beispiel für eine Einfüge-, eine Änderungs- und eine Löschanomalie.</p>
        <p>b) In welcher Normalform befindet sich die Tabelle? Begründe.</p>
        <p>c) Zerlege die Tabelle in die 3. Normalform.</p>`,
      solution: `
        <p><strong>a)</strong></p>
        <ul>
          <li><strong>Einfügeanomalie:</strong> Ein Neukunde ohne Reparaturauftrag kann nicht gespeichert werden, weil ohne Auftrag keine AuftragNr (Primärschlüssel) existiert.</li>
          <li><strong>Änderungsanomalie:</strong> Ändert sich der Firmenname der Deichbau Meyer KG, muss er in R-201 und R-203 geändert werden. Wird eine Zeile vergessen, sind die Daten widersprüchlich.</li>
          <li><strong>Löschanomalie:</strong> Wird Auftrag R-202 gelöscht, gehen alle Informationen über die Kanzlei Petersen verloren.</li>
        </ul>
        <p><strong>b)</strong> Die Tabelle ist in der <strong>2. Normalform</strong>: Alle Werte sind atomar (1NF), und weil der Primärschlüssel nur aus einer Spalte besteht, kann es keine Teilabhängigkeiten geben (2NF). Sie ist aber <strong>nicht in der 3NF</strong>, denn es gibt transitive Abhängigkeiten: AuftragNr → KundenNr → Kunde, PLZ und PLZ → Ort.</p>
        <p><strong>c)</strong></p>
        <ul>
          <li>Auftrag (AuftragNr [PK], Datum, KundenNr [FK], Techniker)</li>
          <li>Kunde (KundenNr [PK], Kunde, PLZ [FK])</li>
          <li>Ort (PLZ [PK], Ort)</li>
        </ul>
        <p>Hinweis: In Prüfungen gilt PLZ → Ort als funktionale Abhängigkeit, obwohl es in der Realität Postleitzahlen mit mehreren Orten gibt. Die Techniker könnten zusätzlich in eine eigene Tabelle ausgelagert werden – für die 3NF ist das hier nicht zwingend, weil zu ihnen keine weiteren Attribute gespeichert sind.</p>`
    },
    {
      id: "e-normal-2",
      topic: "normalisierung",
      title: "Seminaranmeldungen bis zur 3. Normalform",
      level: 3,
      exam: ["AP2"],
      task: `
        <p>Die Westküsten-Akademie in Husum verwaltet ihre Seminaranmeldungen bisher in einer Liste:</p>
        <table><thead><tr><th>TeilnNr</th><th>Name</th><th>FirmaNr</th><th>Firma</th><th>FirmaOrt</th><th>Seminare</th></tr></thead><tbody>
          <tr><td>T1</td><td>Jana Voss</td><td>F1</td><td>Deichbau Meyer KG</td><td>Heide</td><td>S10 Linux-Grundlagen, 12.10.2026, 690 €, bezahlt; S12 SQL kompakt, 19.10.2026, 490 €, offen</td></tr>
          <tr><td>T2</td><td>Ole Brandt</td><td>F2</td><td>Hafenlogistik Husum GmbH</td><td>Husum</td><td>S12 SQL kompakt, 19.10.2026, 490 €, bezahlt</td></tr>
          <tr><td>T3</td><td>Mia Karstens</td><td>F1</td><td>Deichbau Meyer KG</td><td>Heide</td><td>S10 Linux-Grundlagen, 12.10.2026, 690 €, bezahlt</td></tr>
          <tr><td>T4</td><td>Finn Lorenzen</td><td>F3</td><td>Kanzlei Petersen</td><td>Meldorf</td><td>S12 SQL kompakt, 19.10.2026, 490 €, offen</td></tr>
        </tbody></table>
        <p>a) Nenne für jede der drei Anomaliearten ein konkretes Beispiel aus dieser Liste.</p>
        <p>b) Überführe die Liste in die 1. Normalform. Gib die Tabelle mit allen Zeilen und den Primärschlüssel an.</p>
        <p>c) Überführe das Ergebnis in die 2. Normalform. Begründe jede Zerlegung mit den funktionalen Abhängigkeiten.</p>
        <p>d) Überführe das Ergebnis in die 3. Normalform und kennzeichne alle Primär- und Fremdschlüssel.</p>`,
      hints: ["Der Status „bezahlt/offen“ gehört weder allein zum Teilnehmer noch allein zum Seminar.", "Prüfe in der 2NF jede Spalte: Hängt sie von TeilnNr, von SemNr oder von beiden ab?"],
      solution: `
        <p><strong>a)</strong> <strong>Einfügen:</strong> Das neue Seminar „Netzwerksicherheit“ kann erst gespeichert werden, wenn sich jemand anmeldet. <strong>Ändern:</strong> Wird der Termin von „SQL kompakt“ verschoben, muss er in drei Zeilen (T1, T2, T4) geändert werden. <strong>Löschen:</strong> Wird Finn Lorenzen gelöscht, verschwindet auch die einzige Information über die Kanzlei Petersen in Meldorf.</p>
        <p><strong>b) 1NF</strong> – jede Anmeldung eine Zeile, alle Werte atomar. Primärschlüssel: (TeilnNr, SemNr).</p>
        <table><thead><tr><th>TeilnNr</th><th>SemNr</th><th>Name</th><th>FirmaNr</th><th>Firma</th><th>FirmaOrt</th><th>Titel</th><th>Termin</th><th>Preis</th><th>Bezahlt</th></tr></thead><tbody>
          <tr><td>T1</td><td>S10</td><td>Jana Voss</td><td>F1</td><td>Deichbau Meyer KG</td><td>Heide</td><td>Linux-Grundlagen</td><td>12.10.2026</td><td>690</td><td>ja</td></tr>
          <tr><td>T1</td><td>S12</td><td>Jana Voss</td><td>F1</td><td>Deichbau Meyer KG</td><td>Heide</td><td>SQL kompakt</td><td>19.10.2026</td><td>490</td><td>nein</td></tr>
          <tr><td>T2</td><td>S12</td><td>Ole Brandt</td><td>F2</td><td>Hafenlogistik Husum GmbH</td><td>Husum</td><td>SQL kompakt</td><td>19.10.2026</td><td>490</td><td>ja</td></tr>
          <tr><td>T3</td><td>S10</td><td>Mia Karstens</td><td>F1</td><td>Deichbau Meyer KG</td><td>Heide</td><td>Linux-Grundlagen</td><td>12.10.2026</td><td>690</td><td>ja</td></tr>
          <tr><td>T4</td><td>S12</td><td>Finn Lorenzen</td><td>F3</td><td>Kanzlei Petersen</td><td>Meldorf</td><td>SQL kompakt</td><td>19.10.2026</td><td>490</td><td>nein</td></tr>
        </tbody></table>
        <p><strong>c) 2NF</strong> – Abhängigkeiten: TeilnNr → Name, FirmaNr, Firma, FirmaOrt; SemNr → Titel, Termin, Preis; (TeilnNr, SemNr) → Bezahlt. Die ersten beiden sind Teilabhängigkeiten vom zusammengesetzten Schlüssel, deshalb wird zerlegt:</p>
        <ul>
          <li>Teilnehmer (TeilnNr [PK], Name, FirmaNr, Firma, FirmaOrt)</li>
          <li>Seminar (SemNr [PK], Titel, Termin, Preis)</li>
          <li>Anmeldung (TeilnNr [PK, FK], SemNr [PK, FK], Bezahlt)</li>
        </ul>
        <p><strong>d) 3NF</strong> – In <em>Teilnehmer</em> gilt TeilnNr → FirmaNr → Firma, FirmaOrt (transitive Abhängigkeit). Die Firma wird ausgelagert:</p>
        <ul>
          <li>Firma (FirmaNr [PK], Firma, Ort)</li>
          <li>Teilnehmer (TeilnNr [PK], Name, FirmaNr [FK → Firma])</li>
          <li>Seminar (SemNr [PK], Titel, Termin, Preis)</li>
          <li>Anmeldung (TeilnNr [PK, FK → Teilnehmer], SemNr [PK, FK → Seminar], Bezahlt)</li>
        </ul>
        <p>Ergebnis: 4 Tabellen; <em>Firma</em> hat 3 Zeilen, <em>Teilnehmer</em> 4, <em>Seminar</em> 2 und <em>Anmeldung</em> 5 Zeilen. Jede Information ist nur noch einmal gespeichert.</p>`
    },
    {
      id: "e-sql-bereiche-1",
      topic: "sql-ddl",
      title: "SQL-Anweisungen den Sprachbereichen zuordnen",
      level: 1,
      exam: ["AP2"],
      task: `
        <p>Im Wartungsskript einer Kundendatenbank der Nordlicht IT GmbH stehen folgende Anweisungen:</p>
        <pre><code>1  CREATE TABLE Standort (StandortID INTEGER PRIMARY KEY, Ort VARCHAR(50) NOT NULL);
2  INSERT INTO Standort (StandortID, Ort) VALUES (1, 'Heide');
3  SELECT Ort FROM Standort ORDER BY Ort;
4  ALTER TABLE Standort ADD COLUMN PLZ CHAR(5);
5  GRANT SELECT ON nordlicht.Standort TO 'praktikant'@'%';
6  DELETE FROM Standort WHERE StandortID = 1;
7  ROLLBACK;
8  REVOKE SELECT ON nordlicht.Standort FROM 'praktikant'@'%';</code></pre>
        <p>a) Ordne jede Anweisung einem Sprachbereich zu (DDL, DML, DQL, DCL, TCL).</p>
        <p>b) Beschreibe die Wirkung der Anweisungen 4, 6 und 7 in je einem Satz.</p>
        <p>c) Erläutere den Unterschied zwischen <code>DELETE FROM Standort;</code> und <code>DROP TABLE Standort;</code>.</p>`,
      solution: `
        <p><strong>a)</strong></p>
        <table><thead><tr><th>Nr.</th><th>Sprachbereich</th></tr></thead><tbody>
          <tr><td>1, 4</td><td>DDL (Struktur anlegen bzw. ändern)</td></tr>
          <tr><td>2, 6</td><td>DML (Datensätze einfügen bzw. löschen)</td></tr>
          <tr><td>3</td><td>DQL (Abfrage; oft auch zur DML gezählt)</td></tr>
          <tr><td>5, 8</td><td>DCL (Recht vergeben bzw. entziehen)</td></tr>
          <tr><td>7</td><td>TCL (Transaktion steuern)</td></tr>
        </tbody></table>
        <p><strong>b)</strong> Anweisung 4 ergänzt die Tabelle Standort um die neue Spalte PLZ (Zeichenkette mit fester Länge 5); bestehende Zeilen erhalten dort NULL. Anweisung 6 löscht den Datensatz mit der StandortID 1, also den Standort Heide. Anweisung 7 nimmt alle noch nicht bestätigten Änderungen der laufenden Transaktion zurück – im Autocommit-Modus ist das DELETE allerdings schon endgültig und kann nicht mehr zurückgenommen werden.</p>
        <p><strong>c)</strong> <code>DELETE FROM Standort;</code> ist eine DML-Anweisung und löscht alle Zeilen; die leere Tabelle mit Spalten, Schlüsseln und Rechten bleibt bestehen, neue Daten können sofort eingefügt werden. <code>DROP TABLE Standort;</code> ist eine DDL-Anweisung und entfernt die Tabelle vollständig mit Struktur, Daten und Indizes; wer sie wieder braucht, muss sie neu anlegen.</p>`
    },
    {
      id: "e-ddl-1",
      topic: "sql-ddl",
      title: "Tabellen für die Seminarverwaltung anlegen",
      level: 2,
      exam: ["AP2"],
      task: `
        <p>Setze das Ergebnis der Normalisierung für die Westküsten-Akademie mit SQL um: Firma (FirmaNr, Firma, Ort), Teilnehmer (TeilnNr, Name, FirmaNr), Seminar (SemNr, Titel, Termin, Preis), Anmeldung (TeilnNr, SemNr, Bezahlt).</p>
        <p>a) Erstelle die <code>CREATE TABLE</code>-Anweisungen mit geeigneten Datentypen, Primär- und Fremdschlüsseln. Pflichtfelder sollen nicht leer sein dürfen, <code>Bezahlt</code> soll standardmäßig „nein“ sein, der Preis darf nicht negativ sein.</p>
        <p>b) Begründe die Datentypen für Termin und Preis.</p>
        <p>c) Nenne die Reihenfolge, in der die Tabellen angelegt werden müssen, und begründe sie.</p>
        <p>d) Die Tabelle Teilnehmer soll eine eindeutige E-Mail-Adresse erhalten. Formuliere die Anweisung.</p>
        <p>e) Im Webportal wird häufig nach Seminaren in einem Zeitraum gesucht. Formuliere eine passende Index-Anweisung und nenne je einen Vor- und Nachteil.</p>`,
      solution: `
        <p><strong>a)</strong></p>
        <pre><code>CREATE TABLE Firma (
  FirmaNr  VARCHAR(5)   PRIMARY KEY,
  Firma    VARCHAR(100) NOT NULL,
  Ort      VARCHAR(50)  NOT NULL
);

CREATE TABLE Teilnehmer (
  TeilnNr  VARCHAR(5)   PRIMARY KEY,
  Name     VARCHAR(80)  NOT NULL,
  FirmaNr  VARCHAR(5)   NOT NULL,
  FOREIGN KEY (FirmaNr) REFERENCES Firma(FirmaNr)
);

CREATE TABLE Seminar (
  SemNr   VARCHAR(5)    PRIMARY KEY,
  Titel   VARCHAR(100)  NOT NULL,
  Termin  DATE          NOT NULL,
  Preis   DECIMAL(7,2)  NOT NULL CHECK (Preis &gt;= 0)
);

CREATE TABLE Anmeldung (
  TeilnNr  VARCHAR(5),
  SemNr    VARCHAR(5),
  Bezahlt  BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (TeilnNr, SemNr),
  FOREIGN KEY (TeilnNr) REFERENCES Teilnehmer(TeilnNr),
  FOREIGN KEY (SemNr)   REFERENCES Seminar(SemNr)
);</code></pre>
        <p><strong>b)</strong> <code>DATE</code> für den Termin, weil das DBMS dann Datumsvergleiche, Sortierung und Datumsfunktionen (z. B. <code>YEAR()</code>, <code>DATEDIFF</code>) korrekt ausführen kann – als Text würde „12.10.2026“ falsch sortiert. <code>DECIMAL(7,2)</code> für den Preis, weil Geldbeträge exakt mit zwei Nachkommastellen gespeichert werden müssen; Gleitkommatypen können Rundungsfehler verursachen. Maximal sind 99.999,99 € möglich.</p>
        <p><strong>c)</strong> Firma → Teilnehmer → Seminar → Anmeldung (Seminar kann auch vor Firma oder Teilnehmer stehen). Eine Tabelle mit Fremdschlüssel kann erst angelegt werden, wenn die referenzierte Tabelle existiert: Teilnehmer verweist auf Firma, Anmeldung auf Teilnehmer und Seminar.</p>
        <p><strong>d)</strong> <code>ALTER TABLE Teilnehmer ADD COLUMN E_Mail VARCHAR(120) UNIQUE;</code></p>
        <p><strong>e)</strong> <code>CREATE INDEX idx_seminar_termin ON Seminar(Termin);</code> Vorteil: Suchen und Sortieren nach Termin werden schneller, weil nicht alle Zeilen durchsucht werden müssen. Nachteil: zusätzlicher Speicherplatz und langsameres Einfügen/Ändern, da der Index bei jeder Änderung mitgepflegt wird.</p>`
    },
    {
      id: "e-dml-1",
      topic: "sql-dml-dcl",
      title: "Daten pflegen und Rechte vergeben",
      level: 2,
      exam: ["AP2"],
      task: `
        <p>Arbeite mit den Tabellen der Westküsten-Akademie (Datenbank <code>akademie</code>, Tabellen wie in der vorherigen Aufgabe). Formuliere die SQL-Anweisungen:</p>
        <p>a) Neues Seminar S16 „Cloud-Grundlagen“ am 16.11.2026 für 590 € anlegen.</p>
        <p>b) Den Preis des Seminars S12 um 10 % erhöhen. Welcher Preis steht danach in der Tabelle, wenn er vorher 490 € war?</p>
        <p>c) Mia Karstens (T3) storniert ihre Anmeldung zu S10.</p>
        <p>d) Der Zahlungseingang für Finn Lorenzen (T4) zu S12 wird verbucht.</p>
        <p>e) Lege den Datenbankbenutzer <code>webportal</code> an. Er darf nur Seminare lesen und Anmeldungen einfügen.</p>
        <p>f) Nach Ende der Anmeldephase soll das Portal keine Anmeldungen mehr einfügen dürfen.</p>
        <p>g) Erkläre, was passiert, wenn bei c) die WHERE-Klausel vergessen wird, und wie du dich davor schützen kannst.</p>`,
      solution: `
        <pre><code>-- a)
INSERT INTO Seminar (SemNr, Titel, Termin, Preis)
VALUES ('S16', 'Cloud-Grundlagen', '2026-11-16', 590.00);

-- b)
UPDATE Seminar SET Preis = Preis * 1.10 WHERE SemNr = 'S12';

-- c)
DELETE FROM Anmeldung WHERE TeilnNr = 'T3' AND SemNr = 'S10';

-- d)
UPDATE Anmeldung SET Bezahlt = TRUE WHERE TeilnNr = 'T4' AND SemNr = 'S12';

-- e)
CREATE USER 'webportal'@'%' IDENTIFIED BY 'Langes-Zufalls-Passwort';
GRANT SELECT ON akademie.Seminar TO 'webportal'@'%';
GRANT INSERT ON akademie.Anmeldung TO 'webportal'@'%';

-- f)
REVOKE INSERT ON akademie.Anmeldung FROM 'webportal'@'%';</code></pre>
        <p><strong>b)</strong> 490 € × 1,10 = <strong>539,00 €</strong>.</p>
        <p><strong>g)</strong> Ohne WHERE löscht <code>DELETE FROM Anmeldung;</code> <strong>alle</strong> Anmeldungen der Tabelle, nicht nur die von T3. Schutz: die Bedingung zuerst mit <code>SELECT * FROM Anmeldung WHERE …</code> prüfen, die Änderung in einer Transaktion ausführen (bei Fehler <code>ROLLBACK</code>), mit einem Benutzer ohne unnötige Löschrechte arbeiten und vorher ein Backup haben. Einige Clients bieten zusätzlich einen „Safe-Update“-Modus, der UPDATE/DELETE ohne Schlüsselbedingung blockiert.</p>`
    },
    {
      id: "e-select-1",
      topic: "sql-select",
      title: "Abfragen auf die Inventartabelle",
      level: 2,
      exam: ["AP2"],
      task: `
        <p>Die Nordlicht IT GmbH verwaltet ihr Inventar in der Tabelle <code>Geraet</code>:</p>
        <table><thead><tr><th>InvNr</th><th>Bezeichnung</th><th>Typ</th><th>Standort</th><th>Preis</th><th>Kaufdatum</th><th>MitarbeiterID</th></tr></thead><tbody>
          <tr><td>1001</td><td>NB-14 Pro</td><td>Notebook</td><td>Heide</td><td>1249.00</td><td>2024-03-12</td><td>7</td></tr>
          <tr><td>1002</td><td>NB-14 Pro</td><td>Notebook</td><td>Husum</td><td>1249.00</td><td>2024-03-12</td><td>12</td></tr>
          <tr><td>1003</td><td>NB-15 Business</td><td>Notebook</td><td>Heide</td><td>1189.00</td><td>2025-06-02</td><td>NULL</td></tr>
          <tr><td>1004</td><td>LJ-430</td><td>Drucker</td><td>Heide</td><td>529.00</td><td>2023-11-20</td><td>NULL</td></tr>
          <tr><td>1005</td><td>LJ-610</td><td>Drucker</td><td>Husum</td><td>389.00</td><td>2025-01-15</td><td>NULL</td></tr>
          <tr><td>1006</td><td>Tower 7020</td><td>PC</td><td>Heide</td><td>899.00</td><td>2025-06-02</td><td>3</td></tr>
          <tr><td>1007</td><td>Tower 7020</td><td>PC</td><td>Meldorf</td><td>899.00</td><td>2025-06-02</td><td>15</td></tr>
          <tr><td>1008</td><td>Monitor 24</td><td>Monitor</td><td>Heide</td><td>329.00</td><td>2025-06-02</td><td>3</td></tr>
        </tbody></table>
        <p>Formuliere die SQL-Abfragen und gib jeweils das Ergebnis an.</p>
        <p>a) Inventarnummer, Bezeichnung und Preis aller Notebooks am Standort Heide, das teuerste zuerst.</p>
        <p>b) Inventarnummer und Bezeichnung aller Geräte, die im Jahr 2025 gekauft wurden (mit BETWEEN).</p>
        <p>c) Alle Geräte, die keinem Mitarbeiter zugeordnet sind.</p>
        <p>d) Anzahl der Geräte und Gesamtwert je Standort, absteigend nach Gesamtwert.</p>
        <p>e) Die Anzahl der verschiedenen Gerätetypen.</p>`,
      solution: `
        <pre><code>-- a)
SELECT InvNr, Bezeichnung, Preis
FROM Geraet
WHERE Typ = 'Notebook' AND Standort = 'Heide'
ORDER BY Preis DESC;</code></pre>
        <p>Ergebnis: 1001 | NB-14 Pro | 1249.00 und 1003 | NB-15 Business | 1189.00</p>
        <pre><code>-- b)
SELECT InvNr, Bezeichnung
FROM Geraet
WHERE Kaufdatum BETWEEN '2025-01-01' AND '2025-12-31';</code></pre>
        <p>Ergebnis: 1003, 1005, 1006, 1007, 1008 (5 Zeilen). Alternative: <code>WHERE YEAR(Kaufdatum) = 2025</code>.</p>
        <pre><code>-- c)
SELECT * FROM Geraet WHERE MitarbeiterID IS NULL;</code></pre>
        <p>Ergebnis: 1003, 1004, 1005. Mit <code>= NULL</code> käme keine Zeile heraus.</p>
        <pre><code>-- d)
SELECT Standort, COUNT(*) AS Anzahl, SUM(Preis) AS Gesamtwert
FROM Geraet
GROUP BY Standort
ORDER BY Gesamtwert DESC;</code></pre>
        <table><thead><tr><th>Standort</th><th>Anzahl</th><th>Gesamtwert</th></tr></thead><tbody>
          <tr><td>Heide</td><td>5</td><td>4195.00</td></tr>
          <tr><td>Husum</td><td>2</td><td>1638.00</td></tr>
          <tr><td>Meldorf</td><td>1</td><td>899.00</td></tr>
        </tbody></table>
        <p>Rechenweg Heide: 1249 + 1189 + 529 + 899 + 329 = 4195; Husum: 1249 + 389 = 1638.</p>
        <pre><code>-- e)
SELECT COUNT(DISTINCT Typ) AS Typen FROM Geraet;</code></pre>
        <p>Ergebnis: 4 (Notebook, Drucker, PC, Monitor).</p>`
    },
    {
      id: "e-select-2",
      topic: "sql-select",
      title: "Service-Desk-Auswertung mit GROUP BY und HAVING",
      level: 3,
      exam: ["AP2"],
      task: `
        <p>Der Service-Desk der Nordlicht IT GmbH speichert Tickets in der Tabelle <code>Ticket</code>:</p>
        <table><thead><tr><th>TicketID</th><th>Kategorie</th><th>Bearbeiter</th><th>Dauer_min</th><th>Status</th></tr></thead><tbody>
          <tr><td>1</td><td>Netzwerk</td><td>Jensen</td><td>45</td><td>geschlossen</td></tr>
          <tr><td>2</td><td>Drucker</td><td>Petersen</td><td>20</td><td>geschlossen</td></tr>
          <tr><td>3</td><td>Netzwerk</td><td>Jensen</td><td>30</td><td>offen</td></tr>
          <tr><td>4</td><td>Software</td><td>Hansen</td><td>60</td><td>geschlossen</td></tr>
          <tr><td>5</td><td>Drucker</td><td>NULL</td><td>15</td><td>offen</td></tr>
          <tr><td>6</td><td>Netzwerk</td><td>Hansen</td><td>90</td><td>geschlossen</td></tr>
          <tr><td>7</td><td>Software</td><td>Petersen</td><td>25</td><td>geschlossen</td></tr>
          <tr><td>8</td><td>Drucker</td><td>Petersen</td><td>40</td><td>geschlossen</td></tr>
          <tr><td>9</td><td>Software</td><td>Jensen</td><td>80</td><td>offen</td></tr>
          <tr><td>10</td><td>Netzwerk</td><td>NULL</td><td>15</td><td>offen</td></tr>
          <tr><td>11</td><td>Hardware</td><td>Hansen</td><td>50</td><td>geschlossen</td></tr>
          <tr><td>12</td><td>Hardware</td><td>Hansen</td><td>70</td><td>offen</td></tr>
        </tbody></table>
        <p>a) Die Teamleitung möchte je Kategorie die Anzahl der Tickets und die durchschnittliche Dauer sehen – aber nur für Kategorien mit mindestens 3 Tickets, sortiert nach Durchschnitt absteigend. Formuliere die Abfrage und gib das Ergebnis an.</p>
        <p>b) Bestimme das Ergebnis dieser Abfrage und zeige den Zwischenschritt:</p>
        <pre><code>SELECT Bearbeiter, SUM(Dauer_min) AS Gesamt
FROM Ticket
WHERE Status = 'geschlossen'
GROUP BY Bearbeiter
HAVING SUM(Dauer_min) &gt; 100;</code></pre>
        <p>c) Welche Werte liefert <code>SELECT COUNT(*), COUNT(Bearbeiter), AVG(Dauer_min) FROM Ticket;</code>?</p>
        <p>d) Ein Kollege schreibt <code>SELECT Kategorie, Bearbeiter, COUNT(*) FROM Ticket WHERE COUNT(*) &gt; 2 GROUP BY Kategorie;</code>. Nenne die zwei Fehler und korrigiere die Abfrage so, dass sie die Kategorien mit mehr als zwei Tickets liefert.</p>
        <p>e) Formuliere eine Abfrage, die zählt, wie viele offene Tickets noch keinem Bearbeiter zugeordnet sind, und gib das Ergebnis an.</p>`,
      hints: ["Berechne zuerst für jede Kategorie Anzahl und Summe, dann filtere mit HAVING.", "WHERE wirkt vor dem Gruppieren, HAVING danach."],
      solution: `
        <p><strong>a)</strong></p>
        <pre><code>SELECT Kategorie, COUNT(*) AS Anzahl, AVG(Dauer_min) AS Schnitt
FROM Ticket
GROUP BY Kategorie
HAVING COUNT(*) &gt;= 3
ORDER BY Schnitt DESC;</code></pre>
        <p>Zwischenschritt je Kategorie: Netzwerk 4 Tickets, 45 + 30 + 90 + 15 = 180 → 180 ÷ 4 = 45 · Software 3 Tickets, 60 + 25 + 80 = 165 → 55 · Drucker 3 Tickets, 20 + 15 + 40 = 75 → 25 · Hardware 2 Tickets, 50 + 70 = 120 → 60.</p>
        <table><thead><tr><th>Kategorie</th><th>Anzahl</th><th>Schnitt</th></tr></thead><tbody>
          <tr><td>Software</td><td>3</td><td>55</td></tr>
          <tr><td>Netzwerk</td><td>4</td><td>45</td></tr>
          <tr><td>Drucker</td><td>3</td><td>25</td></tr>
        </tbody></table>
        <p>Hardware hat zwar den höchsten Durchschnitt (60), fällt aber wegen <code>HAVING COUNT(*) &gt;= 3</code> heraus.</p>
        <p><strong>b)</strong> WHERE lässt nur die geschlossenen Tickets 1, 2, 4, 6, 7, 8, 11 übrig. Summen je Bearbeiter: Jensen 45 · Petersen 20 + 25 + 40 = 85 · Hansen 60 + 90 + 50 = 200. HAVING &gt; 100 erfüllt nur Hansen → Ergebnis: <strong>Hansen | 200</strong>.</p>
        <p><strong>c)</strong> <code>COUNT(*)</code> = 12 (alle Zeilen), <code>COUNT(Bearbeiter)</code> = 10 (zwei NULL-Werte werden nicht gezählt), <code>AVG(Dauer_min)</code> = 540 ÷ 12 = 45.</p>
        <p><strong>d)</strong> Fehler 1: Eine Aggregatfunktion darf nicht in WHERE stehen, weil WHERE vor dem Gruppieren ausgewertet wird – Gruppenbedingungen gehören in HAVING. Fehler 2: <code>Bearbeiter</code> steht im SELECT, ist aber weder gruppiert noch aggregiert. Korrektur:</p>
        <pre><code>SELECT Kategorie, COUNT(*) AS Anzahl
FROM Ticket
GROUP BY Kategorie
HAVING COUNT(*) &gt; 2;</code></pre>
        <p>Ergebnis: Netzwerk 4, Software 3, Drucker 3.</p>
        <p><strong>e)</strong></p>
        <pre><code>SELECT COUNT(*) AS Unzugeordnet
FROM Ticket
WHERE Status = 'offen' AND Bearbeiter IS NULL;</code></pre>
        <p>Ergebnis: <strong>2</strong> (Tickets 5 und 10).</p>`
    },
    {
      id: "e-join-1",
      topic: "sql-join",
      title: "Seminarauswertung über vier Tabellen",
      level: 3,
      exam: ["AP2"],
      task: `
        <p>Die Datenbank der Westküsten-Akademie enthält:</p>
        <ul>
          <li><strong>Firma</strong>: (F1, Deichbau Meyer KG, Heide), (F2, Hafenlogistik Husum GmbH, Husum), (F3, Kanzlei Petersen, Meldorf)</li>
          <li><strong>Teilnehmer</strong> (TeilnNr, Name, FirmaNr): (T1, Jana Voss, F1), (T2, Ole Brandt, F2), (T3, Mia Karstens, F1), (T4, Finn Lorenzen, F3)</li>
          <li><strong>Seminar</strong> (SemNr, Titel, Termin, Preis): (S10, Linux-Grundlagen, 2026-10-12, 690.00), (S12, SQL kompakt, 2026-10-19, 490.00), (S14, Netzwerksicherheit, 2026-11-02, 790.00)</li>
          <li><strong>Anmeldung</strong> (TeilnNr, SemNr, Bezahlt): (T1, S10, TRUE), (T1, S12, FALSE), (T2, S12, TRUE), (T3, S10, TRUE), (T4, S12, FALSE)</li>
        </ul>
        <p>a) Liste alle Teilnehmer mit dem Namen ihrer Firma, alphabetisch nach Name.</p>
        <p>b) Gib für <em>jedes</em> Seminar – auch ohne Anmeldungen – SemNr, Titel und Anzahl der Anmeldungen aus. Gib das Ergebnis an.</p>
        <p>c) Ein Kollege berechnet den Umsatz so: <code>SELECT s.SemNr, SUM(s.Preis) FROM Seminar s LEFT JOIN Anmeldung a ON s.SemNr = a.SemNr GROUP BY s.SemNr;</code> Bestimme das Ergebnis, erkläre den Fehler und korrigiere die Abfrage.</p>
        <p>d) Die Buchhaltung braucht die Summe der noch nicht bezahlten Seminargebühren je Firma. Formuliere die Abfrage und gib das Ergebnis an.</p>
        <p>e) Ermittle mit einer Unterabfrage (NOT EXISTS) alle Seminare ohne Anmeldung.</p>`,
      hints: ["Für n Tabellen brauchst du n − 1 Join-Bedingungen.", "Bei einem LEFT JOIN stammen die Werte der linken Tabelle auch in den Zeilen ohne Treffer."],
      solution: `
        <pre><code>-- a)
SELECT t.Name, f.Firma
FROM Teilnehmer t
JOIN Firma f ON t.FirmaNr = f.FirmaNr
ORDER BY t.Name;</code></pre>
        <p>Ergebnis: Finn Lorenzen – Kanzlei Petersen · Jana Voss – Deichbau Meyer KG · Mia Karstens – Deichbau Meyer KG · Ole Brandt – Hafenlogistik Husum GmbH</p>
        <pre><code>-- b)
SELECT s.SemNr, s.Titel, COUNT(a.TeilnNr) AS Anmeldungen
FROM Seminar s
LEFT JOIN Anmeldung a ON s.SemNr = a.SemNr
GROUP BY s.SemNr, s.Titel;</code></pre>
        <p>Ergebnis: S10 Linux-Grundlagen 2 · S12 SQL kompakt 3 · S14 Netzwerksicherheit 0. Wichtig: <code>COUNT(a.TeilnNr)</code> statt <code>COUNT(*)</code>, sonst stünde bei S14 eine 1.</p>
        <p><strong>c)</strong> Ergebnis des Kollegen: S10 = 2 × 690 = 1380.00 · S12 = 3 × 490 = 1470.00 · <strong>S14 = 790.00</strong>. Fehler: Beim LEFT JOIN entsteht für S14 eine Zeile mit NULL auf der Anmeldungsseite, der Preis stammt aber aus der linken Tabelle und wird mitsummiert – obwohl niemand angemeldet ist. Korrektur, z. B.:</p>
        <pre><code>SELECT s.SemNr, COUNT(a.TeilnNr) * s.Preis AS Umsatz
FROM Seminar s
LEFT JOIN Anmeldung a ON s.SemNr = a.SemNr
GROUP BY s.SemNr, s.Preis;</code></pre>
        <p>Ergebnis: S10 1380.00 · S12 1470.00 · S14 0.00. (Alternativ ein INNER JOIN, dann fehlt S14 ganz.)</p>
        <pre><code>-- d)
SELECT f.Firma, SUM(s.Preis) AS Offen
FROM Firma f
JOIN Teilnehmer t ON f.FirmaNr = t.FirmaNr
JOIN Anmeldung a  ON t.TeilnNr = a.TeilnNr
JOIN Seminar s    ON a.SemNr   = s.SemNr
WHERE a.Bezahlt = FALSE
GROUP BY f.Firma;</code></pre>
        <p>Unbezahlt sind (T1, S12) und (T4, S12). Ergebnis: Deichbau Meyer KG 490.00 · Kanzlei Petersen 490.00. Die Hafenlogistik erscheint nicht, weil alle ihre Anmeldungen bezahlt sind.</p>
        <pre><code>-- e)
SELECT Titel
FROM Seminar s
WHERE NOT EXISTS (SELECT * FROM Anmeldung a WHERE a.SemNr = s.SemNr);</code></pre>
        <p>Ergebnis: Netzwerksicherheit.</p>`
    },
    {
      id: "e-join-2",
      topic: "sql-join",
      title: "Views und Unterabfragen für die Buchhaltung",
      level: 3,
      exam: ["AP2"],
      task: `
        <p>Die Nordlicht IT GmbH speichert <strong>Kunde</strong> (KundeID, Firma, Ort) und <strong>Auftrag</strong> (AuftragID, KundeID, Datum, Betrag, Status):</p>
        <ul>
          <li>Kunde: (1, Deichbau Meyer KG, Heide), (2, Hafenlogistik Husum GmbH, Husum), (3, Kanzlei Petersen, Meldorf), (4, Elbe Chemie Service GmbH, Brunsbüttel), (5, Friesen Pflegedienst e. K., Husum)</li>
          <li>Auftrag: (101, 1, 1200.00, bezahlt), (102, 2, 4800.00, offen), (103, 1, 350.00, bezahlt), (104, 3, 2150.00, offen), (105, 2, 990.00, bezahlt), (106, 1, 2600.00, offen) – Datum hier weggelassen</li>
        </ul>
        <p>a) Erstelle eine View <code>v_offene_auftraege</code> mit Firma, Ort, AuftragID und Betrag aller offenen Aufträge.</p>
        <p>b) Ermittle über die View die Summe der offenen Beträge.</p>
        <p>c) Bestimme das Ergebnis:</p>
        <pre><code>SELECT k.Ort, SUM(a.Betrag) AS Summe
FROM Kunde k JOIN Auftrag a ON k.KundeID = a.KundeID
WHERE a.Status = 'offen'
GROUP BY k.Ort
HAVING SUM(a.Betrag) &gt; 2500;</code></pre>
        <p>d) Liste alle Aufträge mit Firmenname, deren Betrag über dem Durchschnitt aller Aufträge liegt. Gib den Durchschnitt und das Ergebnis an.</p>
        <p>e) Ermittle die Kunden, die noch nie einen Auftrag erteilt haben – in zwei verschiedenen Varianten.</p>
        <p>f) Der Benutzer <code>buchhaltung</code> soll nur die View lesen dürfen. Formuliere die Anweisung und erläutere den Vorteil für den Datenschutz.</p>`,
      solution: `
        <pre><code>-- a)
CREATE VIEW v_offene_auftraege AS
SELECT k.Firma, k.Ort, a.AuftragID, a.Betrag
FROM Kunde k
JOIN Auftrag a ON k.KundeID = a.KundeID
WHERE a.Status = 'offen';

-- b)
SELECT SUM(Betrag) AS Offen FROM v_offene_auftraege;</code></pre>
        <p><strong>b)</strong> 4800 + 2150 + 2600 = <strong>9550.00</strong></p>
        <p><strong>c)</strong> Offene Aufträge: 102 (Husum, 4800), 104 (Meldorf, 2150), 106 (Heide, 2600). Summen je Ort: Husum 4800 · Meldorf 2150 · Heide 2600. HAVING &gt; 2500 → Ergebnis: <strong>Heide 2600.00</strong> und <strong>Husum 4800.00</strong> (Meldorf fällt heraus).</p>
        <pre><code>-- d)
SELECT a.AuftragID, k.Firma, a.Betrag
FROM Auftrag a
JOIN Kunde k ON a.KundeID = k.KundeID
WHERE a.Betrag &gt; (SELECT AVG(Betrag) FROM Auftrag);</code></pre>
        <p>Durchschnitt: (1200 + 4800 + 350 + 2150 + 990 + 2600) ÷ 6 = 12090 ÷ 6 = 2015.00. Ergebnis: 102 Hafenlogistik Husum GmbH 4800.00 · 104 Kanzlei Petersen 2150.00 · 106 Deichbau Meyer KG 2600.00.</p>
        <pre><code>-- e) Variante 1: LEFT JOIN
SELECT k.Firma
FROM Kunde k
LEFT JOIN Auftrag a ON k.KundeID = a.KundeID
WHERE a.AuftragID IS NULL;

-- e) Variante 2: Unterabfrage
SELECT Firma FROM Kunde
WHERE KundeID NOT IN (SELECT KundeID FROM Auftrag);</code></pre>
        <p>Ergebnis beider Varianten: Elbe Chemie Service GmbH, Friesen Pflegedienst e. K. (Vorsicht bei <code>NOT IN</code>: Enthält die Unterabfrage NULL-Werte, liefert sie keine Zeile – <code>NOT EXISTS</code> ist robuster.)</p>
        <pre><code>-- f)
GRANT SELECT ON nordlicht.v_offene_auftraege TO 'buchhaltung'@'%';</code></pre>
        <p>Die Buchhaltung sieht nur die Spalten und Zeilen, die sie für ihre Aufgabe braucht (offene Aufträge mit Firma und Betrag), aber nicht die übrigen Kunden- und Auftragsdaten. Das setzt den Grundsatz der Datenminimierung und das Prinzip der minimalen Rechte um. Ändert sich die Tabellenstruktur, bleibt die View als stabile Schnittstelle erhalten.</p>`
    },
    {
      id: "e-trans-1",
      topic: "transaktionen",
      title: "Umlagerung als Transaktion, Lost Update und Deadlock",
      level: 3,
      exam: ["AP2"],
      task: `
        <p>Die Warenwirtschaft der Nordlicht IT GmbH speichert Bestände in der Tabelle <code>Lagerbestand</code> (LagerID, ArtNr, Bestand). 20 Notebooks (ArtNr A1) sollen vom Lager Heide (<code>HEI</code>) ins Lager Husum (<code>HUS</code>) umgelagert werden.</p>
        <p>a) Formuliere die Umlagerung als SQL-Transaktion.</p>
        <p>b) Erläutere die vier ACID-Eigenschaften an diesem Beispiel.</p>
        <p>c) Der Server stürzt nach dem ersten UPDATE, aber vor dem COMMIT ab. Beschreibe, was beim Neustart passiert.</p>
        <p>d) Zwei Vertriebsmitarbeiter buchen gleichzeitig Entnahmen für Artikel A1 in Heide (Bestand 120): A entnimmt 30, B entnimmt 50. Beide Programme lesen zuerst den Bestand, rechnen im Programm und schreiben dann den neuen Wert. Zeige den Ablauf, der zu einem falschen Bestand führt, gib den falschen und den richtigen Bestand an und nenne zwei Lösungen.</p>
        <p>e) Gleichzeitig mit der Umlagerung Heide → Husum startet eine Umlagerung Husum → Heide. Beide Transaktionen sperren zuerst ihr Quelllager. Erkläre, wie ein Deadlock entsteht, wie das DBMS reagiert und wie man ihn vermeidet.</p>`,
      hints: ["Lost Update: Beide lesen denselben Ausgangswert.", "Deadlock: Jede Transaktion hält eine Sperre, die die andere braucht."],
      solution: `
        <p><strong>a)</strong></p>
        <pre><code>START TRANSACTION;
UPDATE Lagerbestand SET Bestand = Bestand - 20 WHERE LagerID = 'HEI' AND ArtNr = 'A1';
UPDATE Lagerbestand SET Bestand = Bestand + 20 WHERE LagerID = 'HUS' AND ArtNr = 'A1';
COMMIT;
-- bei einem Fehler stattdessen: ROLLBACK;</code></pre>
        <p><strong>b)</strong> <strong>Atomarität:</strong> Entweder werden beide Buchungen ausgeführt oder keine – es verschwinden nie 20 Notebooks, ohne in Husum anzukommen. <strong>Konsistenz:</strong> Vorher und nachher ist die Datenbank gültig, die Gesamtzahl der Notebooks bleibt gleich und kein Bestand wird negativ (falls ein CHECK das verbietet). <strong>Isolation:</strong> Eine gleichzeitige Inventurabfrage sieht entweder den Zustand vor oder nach der Umlagerung, nie den Zwischenstand. <strong>Dauerhaftigkeit:</strong> Nach dem COMMIT bleibt die Umlagerung auch bei einem Stromausfall erhalten, weil sie im Transaktionslog gesichert ist.</p>
        <p><strong>c)</strong> Die Transaktion wurde nicht bestätigt. Beim Neustart erkennt das DBMS anhand des Transaktionslogs die unvollständige Transaktion und macht die bereits ausgeführte Abbuchung rückgängig (Rollback bzw. Undo). Der Bestand ist wieder wie vor der Umlagerung – das ist die Atomarität.</p>
        <p><strong>d)</strong></p>
        <table><thead><tr><th>Schritt</th><th>Mitarbeiter A</th><th>Mitarbeiter B</th><th>Bestand in der DB</th></tr></thead><tbody>
          <tr><td>1</td><td>liest 120</td><td></td><td>120</td></tr>
          <tr><td>2</td><td></td><td>liest 120</td><td>120</td></tr>
          <tr><td>3</td><td>schreibt 120 − 30 = 90</td><td></td><td>90</td></tr>
          <tr><td>4</td><td></td><td>schreibt 120 − 50 = 70</td><td>70</td></tr>
        </tbody></table>
        <p>Falscher Bestand: <strong>70</strong>. Richtig wäre 120 − 30 − 50 = <strong>40</strong>. Die Entnahme von A ist verloren gegangen (Lost Update). Lösungen: (1) Lesen und Schreiben in einer Transaktion mit Schreibsperre, z. B. <code>SELECT Bestand … FOR UPDATE</code>, sodass B warten muss, bis A fertig ist. (2) Relativ in der Datenbank rechnen: <code>UPDATE Lagerbestand SET Bestand = Bestand - 30 WHERE …</code> – das DBMS sperrt die Zeile während der Änderung, beide Entnahmen werden nacheinander korrekt verbucht.</p>
        <p><strong>e)</strong> Transaktion T1 sperrt die Zeile HEI und will danach HUS sperren. Transaktion T2 sperrt HUS und will danach HEI sperren. Jede wartet auf eine Sperre, die die andere hält – keine kann weiterarbeiten: ein <strong>Deadlock</strong>. Das DBMS erkennt den Zyklus im Wartegraphen, wählt eine Transaktion als Opfer, bricht sie mit ROLLBACK ab und gibt ihre Sperren frei. Die andere läuft weiter; die abgebrochene muss von der Anwendung wiederholt werden. Vermeidung: Zeilen immer in derselben festen Reihenfolge sperren (z. B. alphabetisch nach LagerID: erst HEI, dann HUS), Transaktionen kurz halten und Wiederholungslogik einbauen.</p>`
    },
    {
      id: "e-backup-1",
      topic: "transaktionen",
      title: "Sicherungskonzept für eine Kanzleidatenbank",
      level: 2,
      exam: ["AP2"],
      task: `
        <p>Die Kanzlei Petersen in Meldorf betreibt eine MariaDB-Datenbank mit 120 GiB. Die Nordlicht IT GmbH plant die Sicherung: Sonntag 23:00 Uhr Vollsicherung, Montag bis Samstag jeweils 23:00 Uhr eine weitere Sicherung. Pro Tag ändern sich ca. 4 GiB Daten (jeden Tag andere Daten).</p>
        <p>a) Berechne die Größe der täglichen Sicherungen und den Speicherbedarf einer Woche für eine <strong>differenzielle</strong> Sicherung.</p>
        <p>b) Berechne den Wochenbedarf bei <strong>inkrementeller</strong> Sicherung.</p>
        <p>c) Am Donnerstag um 14:00 Uhr fällt der Server aus. Welche Sicherungen musst du bei beiden Verfahren einspielen? Wie viele Stunden an Änderungen gehen verloren, und wie lässt sich das verhindern?</p>
        <p>d) Die Vollsicherung wird über eine 1-Gbit/s-Verbindung mit 80 % nutzbarem Durchsatz zurückgespielt. Berechne die Übertragungsdauer in Minuten.</p>
        <p>e) Ein Kollege möchte einfach die Datendateien der laufenden Datenbank kopieren. Beurteile den Vorschlag.</p>`,
      hints: ["Differenziell = alle Änderungen seit der letzten Vollsicherung; inkrementell = seit der letzten Sicherung.", "1 GiB = 2³⁰ Byte, 1 Byte = 8 Bit, 1 Gbit/s = 10⁹ Bit/s."],
      solution: `
        <p><strong>a)</strong> Differenzielle Sicherungen wachsen täglich um 4 GiB: Mo 4 · Di 8 · Mi 12 · Do 16 · Fr 20 · Sa 24 GiB. Summe: 4 + 8 + 12 + 16 + 20 + 24 = 84 GiB. Wochenbedarf: 120 + 84 = <strong>204 GiB</strong>.</p>
        <p><strong>b)</strong> Inkrementelle Sicherungen sind jeden Tag 4 GiB groß: 6 × 4 = 24 GiB. Wochenbedarf: 120 + 24 = <strong>144 GiB</strong>.</p>
        <p><strong>c)</strong> Die letzte Sicherung stammt von Mittwoch 23:00 Uhr. <strong>Differenziell:</strong> Vollsicherung vom Sonntag + differenzielle Sicherung vom Mittwoch (2 Sicherungen). <strong>Inkrementell:</strong> Vollsicherung vom Sonntag + Inkremente von Montag, Dienstag und Mittwoch in dieser Reihenfolge (4 Sicherungen). Verloren sind die Änderungen von Mittwoch 23:00 bis Donnerstag 14:00, also <strong>15 Stunden</strong>. Abhilfe: Das Transaktionslog (Binlog) laufend auf ein anderes System sichern. Dann lassen sich nach dem Einspielen der Sicherungen alle protokollierten Änderungen bis kurz vor den Ausfall nachfahren (Point-in-Time-Recovery).</p>
        <p><strong>d)</strong></p>
        <ul>
          <li>Datenmenge: 120 GiB = 120 × 2³⁰ Byte × 8 = 1.030.792.151.040 Bit</li>
          <li>Durchsatz: 1.000.000.000 Bit/s × 0,8 = 800.000.000 Bit/s</li>
          <li>Dauer: 1.030.792.151.040 ÷ 800.000.000 ≈ 1.288,5 s ≈ <strong>21,5 Minuten</strong></li>
        </ul>
        <p><strong>e)</strong> Der Vorschlag ist ungeeignet. Während des Kopierens schreibt die Datenbank weiter in ihre Dateien und hält Änderungen teilweise noch im Arbeitsspeicher. Die Kopie ist deshalb wahrscheinlich inkonsistent und lässt sich eventuell nicht starten. Besser: ein logisches Backup mit <code>mysqldump --single-transaction</code> bzw. ein physisches Online-Backup mit dem Werkzeug des DBMS (z. B. mariabackup) oder ein Snapshot bei kurz angehaltenem Dienst. Zusätzlich muss die Wiederherstellung regelmäßig getestet werden.</p>`
    },
    {
      id: "e-austausch-1",
      topic: "datenaustausch",
      title: "CSV, JSON, XML und eine REST-API",
      level: 2,
      exam: ["AP2"],
      task: `
        <p>Der Onlineshop eines Kunden der Nordlicht IT GmbH erhält Artikeldaten aus der Warenwirtschaft als CSV-Datei:</p>
        <pre><code>ArtNr;Bezeichnung;Preis;Lagernd
A1;Notebook NB-14;1249,00;ja
A7;Dockingstation;189,00;nein</code></pre>
        <p>a) Stelle die Daten im JSON-Format dar. Verwende passende JSON-Datentypen.</p>
        <p>b) Stelle den ersten Artikel als wohlgeformtes XML-Dokument dar.</p>
        <p>c) Finde alle Fehler in diesem JSON-Ausschnitt: <code>{ 'artNr': "A9", "preis": 79,90, "lagernd": ja, }</code></p>
        <p>d) Der Shop spricht die Warenwirtschaft künftig über eine REST-API an. Nenne jeweils die HTTP-Methode und den zu erwartenden Statuscode: Artikel A1 abrufen · neuen Artikel anlegen · Artikel A7 löschen (ohne Antwortinhalt) · Anfrage ohne gültiges Token · Abruf des nicht existierenden Artikels A99.</p>
        <p>e) Nach dem Import erscheinen Orte wie „BÃ¼sum“. Erkläre die Ursache und die Lösung.</p>`,
      solution: `
        <p><strong>a)</strong></p>
        <pre><code>[
  { "artNr": "A1", "bezeichnung": "Notebook NB-14", "preis": 1249.00, "lagernd": true },
  { "artNr": "A7", "bezeichnung": "Dockingstation", "preis": 189.00, "lagernd": false }
]</code></pre>
        <p>Der Preis wird zur Zahl mit Dezimalpunkt, „ja/nein“ zum booleschen Wert <code>true</code>/<code>false</code>.</p>
        <p><strong>b)</strong></p>
        <pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;artikelliste&gt;
  &lt;artikel artNr="A1"&gt;
    &lt;bezeichnung&gt;Notebook NB-14&lt;/bezeichnung&gt;
    &lt;preis waehrung="EUR"&gt;1249.00&lt;/preis&gt;
    &lt;lagernd&gt;true&lt;/lagernd&gt;
  &lt;/artikel&gt;
&lt;/artikelliste&gt;</code></pre>
        <p><strong>c)</strong> (1) Schlüssel in einfachen statt doppelten Anführungszeichen (<code>'artNr'</code>). (2) Dezimalkomma statt Dezimalpunkt: In JSON trennt das Komma die Einträge, nach <code>79,</code> erwartet der Parser einen neuen Schlüssel in doppelten Anführungszeichen – <code>90</code> führt zu einem Syntaxfehler. (3) <code>ja</code> ist kein gültiger Wert – richtig wäre <code>true</code> oder der Text <code>"ja"</code>. (4) Nach dem letzten Paar steht ein überflüssiges Komma. Korrekt: <code>{ "artNr": "A9", "preis": 79.90, "lagernd": true }</code></p>
        <p><strong>d)</strong></p>
        <table><thead><tr><th>Aktion</th><th>Methode</th><th>Statuscode</th></tr></thead><tbody>
          <tr><td>A1 abrufen</td><td>GET /artikel/A1</td><td>200 OK</td></tr>
          <tr><td>neuen Artikel anlegen</td><td>POST /artikel</td><td>201 Created</td></tr>
          <tr><td>A7 löschen</td><td>DELETE /artikel/A7</td><td>204 No Content</td></tr>
          <tr><td>ohne gültiges Token</td><td>beliebig</td><td>401 Unauthorized</td></tr>
          <tr><td>A99 abrufen</td><td>GET /artikel/A99</td><td>404 Not Found</td></tr>
        </tbody></table>
        <p><strong>e)</strong> Die Datei ist in UTF-8 kodiert, wurde aber als Windows-1252 (ANSI) eingelesen. Das „ü“ besteht in UTF-8 aus zwei Bytes, die im anderen Zeichensatz als „Ã¼“ dargestellt werden. Lösung: Beim Import die Kodierung UTF-8 angeben bzw. die Kodierung zwischen den Systemen verbindlich vereinbaren und in der Schnittstellendokumentation festhalten.</p>`
    },
    {
      id: "e-opendata-1",
      topic: "datenaustausch",
      title: "Niederschlagsdaten über eine Open-Data-API nutzen",
      level: 3,
      exam: ["AP2"],
      task: `
        <p>Die Marschwasser GmbH in Meldorf will den Wasserverbrauch mit Wetterdaten vergleichen. Die Nordlicht IT GmbH bindet dafür die REST-API eines (fiktiven) Open-Data-Angebots „Wetterdaten Nord“ an. Die Daten stehen unter der Lizenz CC BY 4.0. Ein Aufruf von <code>GET /api/v2/niederschlag?station=meldorf</code> mit gültigem API-Key liefert:</p>
        <pre><code>{
  "station": "Meldorf",
  "einheit": "mm",
  "werte": [
    { "datum": "2026-09-14", "niederschlag": 4.2 },
    { "datum": "2026-09-15", "niederschlag": 0.0 },
    { "datum": "2026-09-16", "niederschlag": null },
    { "datum": "2026-09-17", "niederschlag": 11.6 },
    { "datum": "2026-09-18", "niederschlag": 2.8 }
  ]
}</code></pre>
        <p>a) Beschreibe den Aufbau der Antwort und nenne die JSON-Datentypen der Felder <code>station</code>, <code>werte</code> und <code>niederschlag</code>.</p>
        <p>b) Berechne die Niederschlagssumme, den Durchschnitt der vorhandenen Werte und die Vollständigkeitsquote. Erkläre, warum <code>0.0</code> und <code>null</code> unterschiedlich behandelt werden müssen.</p>
        <p>c) Die Werte sollen als CSV-Datei an die Fachabteilung gehen, die sie mit einem deutschen Excel öffnet. Gib Kopfzeile und die ersten beiden Datenzeilen an und nenne zwei Festlegungen, die du dafür triffst.</p>
        <p>d) Die API erlaubt 1.000 Anfragen pro Tag. Ein Kollege lässt das Skript alle 60 Sekunden abfragen. Berechne die Anfragen pro Tag, nenne den zu erwartenden Statuscode und schlage eine bessere Lösung vor.</p>
        <p>e) Welche Pflichten ergeben sich aus der Lizenz CC BY 4.0, wenn die aufbereiteten Daten in einem Bericht veröffentlicht werden?</p>
        <p>f) Wo speicherst du den API-Key, und welchen Statuscode erwartest du, wenn er fehlt oder ungültig ist?</p>`,
      hints: ["null bedeutet „kein Messwert“, 0.0 bedeutet „gemessen, aber kein Regen“.", "1 Tag = 86.400 Sekunden."],
      solution: `
        <p><strong>a)</strong> Die Antwort ist ein JSON-<strong>Objekt</strong> mit drei Schlüssel-Wert-Paaren. <code>station</code> und <code>einheit</code> sind <strong>Strings</strong>. <code>werte</code> ist ein <strong>Array</strong> aus fünf Objekten mit je einem Datum (String im ISO-Format) und dem Wert <code>niederschlag</code>. Dieser ist eine <strong>Number</strong> oder – am 16.09. – <code>null</code>.</p>
        <p><strong>b)</strong></p>
        <ul>
          <li>Summe: 4,2 + 0,0 + 11,6 + 2,8 = <strong>18,6 mm</strong> (der null-Wert fließt nicht ein)</li>
          <li>Durchschnitt der 4 vorhandenen Werte: 18,6 mm ÷ 4 = <strong>4,65 mm</strong></li>
          <li>Vollständigkeit: 4 ÷ 5 × 100 % = <strong>80 %</strong></li>
        </ul>
        <p><code>0.0</code> ist ein gültiger Messwert: An diesem Tag hat es nachweislich nicht geregnet, der Wert zählt bei Summe, Durchschnitt und Vollständigkeit mit. <code>null</code> bedeutet, dass kein Messwert vorliegt (z. B. Sensorausfall). Würde man null als 0 werten, sänke der Durchschnitt fälschlich auf 18,6 ÷ 5 = 3,72 mm, und die Datenlücke bliebe unbemerkt. SQL verhält sich genauso: <code>AVG</code> ignoriert NULL-Werte.</p>
        <p><strong>c)</strong></p>
        <pre><code>Datum;Niederschlag_mm
14.09.2026;4,2
15.09.2026;0,0</code></pre>
        <p>Festlegungen: Semikolon als Trennzeichen und Dezimalkomma, weil deutsches Excel das Komma als Dezimaltrennzeichen erwartet; Datumsformat TT.MM.JJJJ (oder bewusst ISO 8601); Kodierung UTF-8 mit BOM, damit Excel Umlaute richtig erkennt; fehlende Werte als leeres Feld statt als 0.</p>
        <p><strong>d)</strong> 1 Tag = 86.400 s; 86.400 s ÷ 60 s = <strong>1.440 Anfragen</strong> pro Tag – das Limit von 1.000 wird überschritten. Ab der 1.001. Anfrage antwortet die API mit <strong>429 Too Many Requests</strong>. Rechnerisch dürfte man höchstens alle 86.400 ÷ 1.000 = 86,4 s abfragen. Da es sich um Tageswerte handelt, ist ohnehin <strong>eine Abfrage pro Tag</strong> (z. B. nachts per Zeitplan) ausreichend; das Ergebnis wird lokal zwischengespeichert, und bei 429 wartet das Skript die im Header <code>Retry-After</code> genannte Zeit ab.</p>
        <p><strong>e)</strong> CC BY 4.0 erlaubt die Nutzung und Weitergabe, auch kommerziell, verlangt aber: die Quelle bzw. den Urheber nennen („Wetterdaten Nord“), einen Hinweis auf die Lizenz CC BY 4.0 mit Link geben und kenntlich machen, dass die Daten verändert wurden (hier: aggregiert und ins CSV-Format umgewandelt).</p>
        <p><strong>f)</strong> Der API-Key gehört nicht in den Quellcode und nicht ins Git-Repository, sondern in eine Umgebungsvariable oder eine geschützte Konfigurationsdatei, die per <code>.gitignore</code> ausgeschlossen ist. Übertragen wird er nur über HTTPS im Header. Fehlt der Key oder ist er ungültig, antwortet die API mit <strong>401 Unauthorized</strong>.</p>`
    },
    {
      id: "e-governance-1",
      topic: "daten-governance",
      title: "Verbrauchsdaten für eine Studie bereitstellen",
      level: 3,
      exam: ["AP2"],
      task: `
        <p>Die Marschwasser GmbH in Meldorf (Wasserversorger) ist Kunde der Nordlicht IT GmbH. 8.000 digitale Wasserzähler senden täglich einen Verbrauchswert über eine REST-API (JSON). Die Kundenstammdaten kommen als CSV-Export aus dem ERP-System (Semikolon, Windows-1252, Datum TT.MM.JJJJ), Wetterdaten als Open-Data-CSV. Eine Hochschule in Kiel möchte für eine Studie „Wasserverbrauch und Wetter“ die Daten vom September 2026 erhalten.</p>
        <p>a) Beschreibe die drei Phasen des ETL-Prozesses konkret für dieses Projekt.</p>
        <p>b) Beurteile die Weitergabe aus Sicht des Datenschutzes und schlage mindestens vier Maßnahmen vor.</p>
        <p>c) Für September (30 Tage) sind 235.200 Zählerwerte eingegangen. Berechne die Vollständigkeitsquote und die Anzahl fehlender Werte. Nenne zwei weitere Kriterien der Datenqualität, die du vor der Weitergabe prüfst.</p>
        <p>d) Ordne die Rollen Data Owner, Data Steward und Data Custodian passenden Beteiligten zu. Welcher Vertrag ist zwischen Marschwasser und der Nordlicht IT nötig?</p>`,
      hints: ["Verbrauchswerte einzelner Haushalte lassen Rückschlüsse auf Lebensgewohnheiten zu.", "Erwartete Werte = Zähler × Tage."],
      solution: `
        <p><strong>a)</strong> <strong>Extract:</strong> Zählerwerte über die REST-API abrufen (JSON), Kundenstammdaten aus dem ERP als CSV exportieren, Wetterdaten als Open-Data-CSV herunterladen (Lizenz und Namensnennung beachten). <strong>Transform:</strong> Zeichensatz einheitlich nach UTF-8 konvertieren, Datumswerte in ISO 8601 (2026-09-01) umwandeln, Einheiten vereinheitlichen (Liter bzw. m³), Dubletten und unplausible Werte (z. B. negative Verbräuche) kennzeichnen oder entfernen, Zählerwerte über die Zählernummer mit Stammdaten und über Datum und Region mit Wetterdaten verknüpfen, personenbezogene Merkmale entfernen und die Werte z. B. je Tag und PLZ-Gebiet aggregieren. <strong>Load:</strong> Das bereinigte Ergebnis in ein Data Warehouse bzw. eine Auswertungsdatenbank laden und daraus den Export für die Hochschule erzeugen (z. B. CSV oder JSON).</p>
        <p><strong>b)</strong> Tägliche Verbrauchswerte eines Haushalts sind personenbezogene Daten, weil sie einer Person zugeordnet werden können und Rückschlüsse auf Anwesenheit und Gewohnheiten erlauben. Eine Weitergabe braucht eine Rechtsgrundlage und muss dem Grundsatz der Datenminimierung folgen. Maßnahmen:</p>
        <ul>
          <li>Nur die nötigen Felder weitergeben – keine Namen, Adressen oder Kundennummern.</li>
          <li>Daten <strong>anonymisieren</strong>, z. B. durch Aggregation auf PLZ-Gebiete mit genügend vielen Haushalten; dann greift die DSGVO für die übermittelten Daten nicht mehr.</li>
          <li>Wenn Einzelzeitreihen nötig sind: <strong>pseudonymisieren</strong> (Zählernummer durch Zufallskennung ersetzen, Zuordnungstabelle bleibt bei Marschwasser) – das bleiben personenbezogene Daten.</li>
          <li>Vereinbarung mit der Hochschule über Zweckbindung, Weitergabeverbot und Löschfrist; betriebliche Datenschutzbeauftragte einbinden.</li>
          <li>Verschlüsselte Übertragung (z. B. SFTP oder HTTPS) und Zugriff nur für berechtigte Personen.</li>
        </ul>
        <p><strong>c)</strong> Erwartet: 8.000 × 30 = 240.000 Werte. Vollständigkeit = 235.200 ÷ 240.000 × 100 % = <strong>98 %</strong>. Es fehlen 240.000 − 235.200 = <strong>4.800 Werte</strong>. Weitere Kriterien: Korrektheit bzw. Plausibilität (keine negativen oder extrem hohen Verbräuche), Eindeutigkeit (keine doppelten Werte je Zähler und Tag), Einheitlichkeit (gleiche Einheit und Datumsformate), Aktualität.</p>
        <p><strong>d)</strong> <strong>Data Owner:</strong> die Leitung des Kundenservice bzw. Netzbetriebs der Marschwasser GmbH – sie entscheidet, ob und welche Daten weitergegeben werden. <strong>Data Steward:</strong> die Fachkraft, die die Zählerdaten pflegt, Plausibilitätsregeln definiert und die Datenqualität überwacht. <strong>Data Custodian:</strong> die Nordlicht IT GmbH als technischer Dienstleister (Betrieb, Backup, Rechtevergabe). Da die Nordlicht IT personenbezogene Daten im Auftrag verarbeitet, ist ein <strong>Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO</strong> nötig.</p>`
    },
    {
      id: "e-umsetzung-1",
      topic: "umsetzung",
      title: "Export-Skript testen, versionieren und übergeben",
      level: 2,
      exam: ["AP2"],
      task: `
        <p>Drei Auszubildende der Nordlicht IT GmbH – zwei in Heide, eine im Homeoffice in Husum – entwickeln für die Marschwasser GmbH ein Python-Skript, das Zählerwerte aus der Datenbank liest, prüft und als JSON exportiert. Die Funktion <code>pruefe_verbrauch(liter)</code> soll Tageswerte von 0 bis 5.000 Litern als gültig akzeptieren.</p>
        <p>a) Bilde Äquivalenzklassen und nenne mindestens fünf Testwerte inklusive der Grenzwerte mit erwartetem Ergebnis.</p>
        <p>b) Ordne den Teststufen Komponenten-, Integrations- und Systemtest je einen konkreten Test aus diesem Projekt zu.</p>
        <p>c) Im Code steht: <code>cur.execute("SELECT * FROM Zaehler WHERE Nr = '" + nr + "'")</code>. Beurteile die Zeile und korrigiere sie.</p>
        <p>d) Beschreibe mit Git-Begriffen, wie die drei gleichzeitig arbeiten können, ohne sich gegenseitig Änderungen zu überschreiben. Worauf müssen sie beim API-Key achten?</p>
        <p>e) Das Projekt soll in vier Wochen in zwei festen Etappen geliefert werden. Empfiehl Scrum oder Kanban und begründe.</p>
        <p>f) Nenne vier Inhalte der technischen Dokumentation für den Administrator der Marschwasser GmbH.</p>`,
      solution: `
        <p><strong>a)</strong> Äquivalenzklassen: K1 Werte unter 0 (ungültig) · K2 Werte von 0 bis 5.000 (gültig) · K3 Werte über 5.000 (ungültig) · K4 keine Zahl bzw. leer (ungültig).</p>
        <table><thead><tr><th>Testwert</th><th>Klasse</th><th>erwartetes Ergebnis</th></tr></thead><tbody>
          <tr><td>−1</td><td>K1, Grenze</td><td>ungültig</td></tr>
          <tr><td>0</td><td>K2, Grenze</td><td>gültig</td></tr>
          <tr><td>150</td><td>K2, Normalwert</td><td>gültig</td></tr>
          <tr><td>5000</td><td>K2, Grenze</td><td>gültig</td></tr>
          <tr><td>5001</td><td>K3, Grenze</td><td>ungültig</td></tr>
          <tr><td>"abc" bzw. leer</td><td>K4</td><td>ungültig, Fehlermeldung statt Absturz</td></tr>
        </tbody></table>
        <p><strong>b)</strong> <strong>Komponententest:</strong> <code>pruefe_verbrauch()</code> wird allein mit den Werten aus a) aufgerufen. <strong>Integrationstest:</strong> Das Skript liest echte Testdaten aus der Testdatenbank und schreibt eine JSON-Datei; geprüft wird, ob Abfrage, Verarbeitung und Export zusammenpassen. <strong>Systemtest:</strong> Der komplette Ablauf vom Abruf bis zur übertragenen Datei wird in einer Testumgebung gegen die Anforderungen des Kunden geprüft (Inhalt, Format, Laufzeit, Rechte).</p>
        <p><strong>c)</strong> Die Abfrage wird per Textverkettung gebaut und ist anfällig für <strong>SQL-Injection</strong>: Eine manipulierte Eingabe wie <code>' OR '1'='1</code> würde alle Zähler liefern. Korrektur mit Platzhalter (Prepared Statement): <code>cur.execute("SELECT * FROM Zaehler WHERE Nr = ?", (nr,))</code></p>
        <p><strong>d)</strong> Alle klonen das gemeinsame Repository (z. B. auf GitLab). Jede Person arbeitet in einem eigenen <strong>Branch</strong> (z. B. <code>feature/pruefung</code>, <code>feature/export</code>), speichert Zwischenstände als <strong>Commits</strong> mit aussagekräftigen Nachrichten und lädt sie mit <strong>push</strong> hoch. Fertige Arbeit wird per <strong>Pull Request</strong> (Merge Request) eingereicht, von einer anderen Person geprüft (Code-Review) und dann in den Hauptzweig <strong>gemergt</strong>; Konflikte werden dabei bewusst aufgelöst. Der API-Key darf nie im Repository landen: Er gehört in eine Umgebungsvariable oder eine lokale Konfigurationsdatei, die per <code>.gitignore</code> ausgeschlossen ist.</p>
        <p><strong>e)</strong> <strong>Scrum</strong> passt: Zwei Sprints à zwei Wochen liefern je ein fertiges Inkrement. Sprint Planning, Daily Scrum (auch per Videokonferenz für die Kollegin im Homeoffice), Review mit dem Kunden und Retrospektive geben Struktur. Kanban eignet sich eher für den späteren laufenden Betrieb mit einzelnen Supportaufgaben.</p>
        <p><strong>f)</strong> Zum Beispiel: Systemvoraussetzungen und Installation · Konfiguration (Datenbankverbindung, Speicherort des API-Keys) · Datenmodell und Beschreibung des JSON-Formats · Rechtekonzept (welcher DB-Benutzer welche Rechte hat) · Zeitplanung/Automatisierung des Exports · Fehlermeldungen und Logdateien · Sicherung und Wiederherstellung · Ansprechpartner. Auf Wunsch des Kunden kann die Dokumentation auch auf Englisch erstellt werden.</p>`
    }
  ],
  quiz: [
    { id: "q-grund-1", topic: "db-grundlagen", type: "single", exam: ["AP1", "AP2"],
      q: "Was bezeichnet man als Datenbanksystem (DBS)?",
      options: ["Die Kombination aus Datenbankmanagementsystem und Datenbank", "Nur die Verwaltungssoftware, z. B. MariaDB", "Nur den gespeicherten Datenbestand", "Die Abfragesprache SQL"],
      answer: 0,
      explain: "DBS = DBMS + DB; im weiteren Sinn zählen auch Hardware, Anwendungsprogramme und Benutzer dazu. MariaDB allein ist nur das DBMS (die Software), der Datenbestand allein ist die Datenbank. SQL ist die Sprache, mit der man mit dem DBMS spricht – kein System." },
    { id: "q-grund-2", topic: "db-grundlagen", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Probleme entstehen typischerweise, wenn mehrere Abteilungen dieselben Daten in eigenen Dateien speichern?",
      options: ["Redundanz", "Inkonsistenz", "Fehlende Datenunabhängigkeit", "Referenzielle Integrität", "Normalisierung"],
      answer: [0, 1, 2],
      explain: "Mehrfachspeicherung (Redundanz) führt zu widersprüchlichen Daten (Inkonsistenz), und die Programme hängen direkt am Dateiformat (fehlende Datenunabhängigkeit). Referenzielle Integrität und Normalisierung sind keine Probleme, sondern Konzepte, mit denen ein Datenbanksystem genau diese Probleme löst." },
    { id: "q-grund-3", topic: "db-grundlagen", type: "single", exam: ["AP2"],
      q: "Was enthält das Data Dictionary eines DBMS?",
      options: ["Metadaten wie Tabellen, Spalten, Datentypen, Schlüssel und Rechte", "Die eigentlichen Kundendaten in komprimierter Form", "Ein Wörterbuch, das SQL-Befehle in andere Sprachen übersetzt", "Die Sicherungskopien der letzten Woche"],
      answer: 0,
      explain: "Das Data Dictionary (Systemkatalog) speichert Daten über die Daten: Strukturen, Datentypen, Schlüssel, Constraints, Indizes, Views und Benutzerrechte. Die Nutzdaten selbst und Backups liegen woanders; mit Übersetzung hat der Begriff nichts zu tun." },
    { id: "q-grund-4", topic: "db-grundlagen", type: "tf",
      q: "In einem Datenbanksystem greifen Anwendungsprogramme direkt auf die Datendateien zu, um schneller zu sein.",
      answer: false,
      explain: "Falsch. Jeder Zugriff läuft über das DBMS. Nur so kann es Rechte prüfen, Integrität sichern, Transaktionen und Sperren verwalten und die Programme von der physischen Speicherung entkoppeln (Datenunabhängigkeit)." },
    { id: "q-grund-5", topic: "db-grundlagen", type: "single", exam: ["AP2"],
      q: "Welche Aufgabe gehört <strong>nicht</strong> zu den Anforderungen an ein DBMS nach Codd?",
      options: ["Grafische Gestaltung von Benutzeroberflächen", "Synchronisation des Mehrbenutzerbetriebs", "Zugriffskontrolle", "Datensicherung und Wiederherstellung"],
      answer: 0,
      explain: "Codds neun Anforderungen sind Integration, Operationen, Katalog, Benutzersichten, Konsistenzüberwachung, Zugriffskontrolle, Transaktionen, Synchronisation und Datensicherung. Die Oberflächengestaltung ist Aufgabe der Anwendung, nicht des DBMS." },
    { id: "q-ebenen-1", topic: "drei-ebenen", type: "single",
      q: "Auf welcher Ebene der ANSI-SPARC-Architektur ist das Anlegen eines neuen Index einzuordnen?",
      options: ["Interne Ebene", "Externe Ebene", "Konzeptionelle Ebene", "Präsentationsebene"],
      answer: 0,
      explain: "Ein Index ist eine physische Zugriffsstruktur und gehört zur internen Ebene. Die konzeptionelle Ebene beschreibt Tabellen und Beziehungen, die externe Ebene die Benutzersichten. Eine „Präsentationsebene“ gibt es in der 3-Tier-Architektur, nicht im ANSI-SPARC-Modell." },
    { id: "q-ebenen-2", topic: "drei-ebenen", type: "single",
      q: "In eine Tabelle wird eine neue Spalte eingefügt, ohne dass bestehende Anwendungen geändert werden müssen. Welche Eigenschaft zeigt sich hier?",
      options: ["Logische Datenunabhängigkeit", "Physische Datenunabhängigkeit", "Referenzielle Integrität", "Atomarität"],
      answer: 0,
      explain: "Die Änderung betrifft das konzeptionelle Schema; dass externe Sichten und Programme davon unberührt bleiben, heißt logische Datenunabhängigkeit. Physische Datenunabhängigkeit betrifft Änderungen der internen Ebene (Speicher, Indizes). Integrität und Atomarität haben mit Schemaänderungen nichts zu tun." },
    { id: "q-ebenen-3", topic: "drei-ebenen", type: "tf",
      q: "Die externe Ebene beschreibt die Sichten einzelner Benutzergruppen auf die Daten, zum Beispiel über Views.",
      answer: true,
      explain: "Richtig. Jede Benutzergruppe sieht nur den Ausschnitt, den sie braucht – umgesetzt z. B. mit CREATE VIEW. Das gesamte logische Schema ist die konzeptionelle Ebene." },
    { id: "q-ebenen-4", topic: "drei-ebenen", type: "single",
      q: "Welche Komponente greift in einer 3-Tier-Architektur direkt auf den Datenbankserver zu?",
      options: ["Der Applikations- bzw. Webserver (Anwendungsschicht)", "Der Browser des Benutzers", "Jeder Client im Firmennetz", "Der DNS-Server"],
      answer: 0,
      explain: "In der 3-Tier-Architektur spricht der Client nur mit der Anwendungsschicht; diese allein greift auf die Datenbank zu. Direkter Client-Zugriff wäre eine 2-Tier-Architektur. Der DNS-Server löst nur Namen auf." },
    { id: "q-modelle-1", topic: "db-modelle", type: "single",
      q: "Welches Datenbankmodell bildet die Daten als Baum ab, in dem jeder Datensatz genau einen Vorgänger hat?",
      options: ["Hierarchisches Modell", "Netzwerkmodell", "Relationales Modell", "Graphmodell"],
      answer: 0,
      explain: "Das hierarchische Modell ist eine Baumstruktur mit Eltern-Kind-Beziehungen (1:n). Im Netzwerkmodell und in Graphdatenbanken darf ein Datensatz mehrere Vorgänger haben; das relationale Modell arbeitet mit Tabellen." },
    { id: "q-modelle-2", topic: "db-modelle", type: "single",
      q: "Wodurch werden Beziehungen im relationalen Modell hergestellt?",
      options: ["Über gemeinsame Schlüsselwerte (Primär- und Fremdschlüssel)", "Über physische Zeiger zwischen Datensätzen", "Über die Reihenfolge der Zeilen in der Tabelle", "Über Eltern-Kind-Pfade ab einer Wurzel"],
      answer: 0,
      explain: "Im Relationenmodell verweist ein Fremdschlüsselwert auf einen Primärschlüsselwert – Beziehungen entstehen über Werte. Zeiger sind typisch für das Netzwerkmodell, Pfade ab der Wurzel für das hierarchische Modell. Die Zeilenreihenfolge ist in einer Relation bedeutungslos." },
    { id: "q-modelle-3", topic: "db-modelle", type: "multi",
      q: "Welche Aussagen zum Netzwerkmodell (CODASYL) treffen zu?",
      options: ["Ein Datensatz kann mehrere Vorgänger haben", "Beziehungen werden technisch meist über Zeiger umgesetzt", "Der Zugriff erfolgt navigierend entlang der Verbindungen", "Es ist heute das am weitesten verbreitete Datenbankmodell", "„Netzwerk“ bedeutet, dass die Datenbank über ein LAN verteilt ist"],
      answer: [0, 1, 2],
      explain: "Das Netzwerkmodell erlaubt mehrere Vorgänger und Nachfolger, nutzt Zeiger (Sets aus Owner und Member) und wird navigierend abgefragt. Am weitesten verbreitet ist heute das relationale Modell. „Netzwerk“ meint die netzartige Verknüpfung der Datensätze, kein Computernetz." },
    { id: "q-nosql-1", topic: "nosql", type: "single",
      q: "Welcher NoSQL-Typ eignet sich am besten, um Freundschaftsbeziehungen in einem sozialen Netzwerk über mehrere Ebenen auszuwerten („Freunde von Freunden“)?",
      options: ["Graphdatenbank", "Key-Value-Store", "Spaltenorientierte Datenbank", "Hierarchische Datenbank"],
      answer: 0,
      explain: "Graphdatenbanken speichern Knoten und Kanten und können Beziehungspfade sehr effizient verfolgen. Ein Key-Value-Store kennt nur Schlüssel → Wert, eine spaltenorientierte DB ist für große Schreiblasten und Zeitreihen optimiert. Hierarchische Datenbanken erlauben keine mehrfachen Beziehungen." },
    { id: "q-nosql-2", topic: "nosql", type: "single",
      q: "Was besagt das CAP-Theorem?",
      options: ["Ein verteiltes System kann Konsistenz, Verfügbarkeit und Partitionstoleranz nicht alle gleichzeitig garantieren", "Jede Datenbank muss die vier ACID-Eigenschaften erfüllen", "Relationale Datenbanken lassen sich beliebig horizontal skalieren", "NoSQL-Datenbanken verzichten grundsätzlich auf Schlüssel"],
      answer: 0,
      explain: "Nach Brewer sind höchstens zwei der drei Eigenschaften C, A und P gleichzeitig garantierbar; da Partitionen in verteilten Systemen vorkommen, wählt man im Störungsfall zwischen C und A. ACID ist ein anderes Konzept. Relationale Systeme skalieren horizontal eher schwer, und NoSQL-Datenbanken nutzen sehr wohl Schlüssel." },
    { id: "q-nosql-3", topic: "nosql", type: "input",
      q: "Wofür steht das „E“ in BASE? Gib den englischen Begriff an.",
      answer: ["Eventually Consistent", "Eventual Consistency", "Eventually-Consistent", "Eventual-Consistency"],
      explain: "BASE = Basically Available, Soft State, Eventually Consistent: Nach einer Änderung sind nicht sofort alle Knoten gleich, die Daten gleichen sich aber nach kurzer Zeit an. Gegenstück ist die sofortige Konsistenz nach ACID." },
    { id: "q-nosql-4", topic: "nosql", type: "tf",
      q: "MongoDB ist eine dokumentenorientierte Datenbank, die Daten in einem JSON-ähnlichen Format speichert.",
      answer: true,
      explain: "Richtig. MongoDB speichert Dokumente im JSON-ähnlichen Binärformat BSON. Jedes Dokument kann einen eigenen, auch verschachtelten Aufbau haben." },
    { id: "q-nosql-5", topic: "nosql", type: "multi",
      q: "Welche Eigenschaften sind typisch für NoSQL-Datenbanken?",
      options: ["Horizontale Skalierung über viele Server", "Flexibles oder fehlendes Schema", "Häufig Eventual Consistency statt sofortiger Konsistenz", "Pflicht zur Normalisierung bis zur 3. Normalform", "Eine einheitliche, standardisierte Abfragesprache für alle Systeme"],
      answer: [0, 1, 2],
      explain: "NoSQL-Systeme skalieren horizontal, sind schemaflexibel und setzen oft auf BASE mit Eventual Consistency. Normalisierung ist ein Konzept relationaler Datenbanken – NoSQL speichert bewusst oft redundant. Eine gemeinsame Standardsprache gibt es gerade nicht; jedes System hat eigene APIs." },
    { id: "q-erm-1", topic: "erm", type: "single", exam: ["AP1", "AP2"],
      q: "Welches Symbol steht in der Chen-Notation für einen Beziehungstyp?",
      options: ["Raute", "Rechteck", "Ellipse", "Doppelpfeil"],
      answer: 0,
      explain: "Beziehungstypen werden als Raute gezeichnet und mit einem Verb beschriftet. Rechtecke stehen für Entitätstypen, Ellipsen für Attribute. Pfeile gehören nicht zur Chen-Notation." },
    { id: "q-erm-2", topic: "erm", type: "single", exam: ["AP1", "AP2"],
      q: "Ein Mitarbeiter kann in mehreren Projekten arbeiten, und in einem Projekt arbeiten mehrere Mitarbeiter. Welche Kardinalität liegt vor?",
      options: ["n:m", "1:n", "1:1", "n:1"],
      answer: 0,
      explain: "In beide Richtungen gilt „viele“: ein Mitarbeiter – viele Projekte, ein Projekt – viele Mitarbeiter. Das ist n:m. Bei 1:n bzw. n:1 wäre eine Seite auf genau ein Element begrenzt." },
    { id: "q-erm-3", topic: "erm", type: "single", exam: ["AP1", "AP2"],
      q: "Gegeben ist: Kunde <strong>(0,n)</strong> — erteilt — <strong>(1,1)</strong> Auftrag. Welche Aussage ist richtig?",
      options: ["Ein Kunde erteilt null bis beliebig viele Aufträge, jeder Auftrag gehört zu genau einem Kunden", "Jeder Kunde muss genau einen Auftrag erteilen", "Ein Auftrag kann zu mehreren Kunden gehören", "Ein Kunde kann höchstens einen Auftrag erteilen"],
      answer: 0,
      explain: "In der (min,max)-Notation beschreibt die Angabe am Entitätstyp, wie oft eine einzelne Entität teilnimmt: Ein Kunde 0 bis n-mal, ein Auftrag genau einmal (min 1, max 1). Wer die Angaben wie in der Chen-Notation liest, kommt fälschlich auf „ein Kunde – höchstens ein Auftrag“." },
    { id: "q-erm-4", topic: "erm", type: "tf", exam: ["AP1", "AP2"],
      q: "Bei der n:m-Beziehung „Bestellung enthält Artikel“ gehört das Attribut „Menge“ zur Beziehung und nicht zu einem der beiden Entitätstypen.",
      answer: true,
      explain: "Richtig. Die Menge hängt von der Kombination aus Bestellung und Artikel ab: Derselbe Artikel wird in verschiedenen Bestellungen in unterschiedlicher Menge bestellt. Solche Beziehungsattribute landen später in der Zwischentabelle." },
    { id: "q-erm-5", topic: "erm", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Elemente gehören zu einem ER-Modell nach Chen?",
      options: ["Entitätstypen", "Attribute", "Beziehungstypen mit Kardinalitäten", "SQL-Datentypen wie VARCHAR(50)", "Indizes"],
      answer: [0, 1, 2],
      explain: "Das ERM ist ein konzeptionelles Modell aus Entitätstypen, Attributen und Beziehungen mit Kardinalitäten. Datentypen und Indizes sind Details der technischen Umsetzung im DBMS und gehören nicht ins ER-Modell." },
    { id: "q-rel-1", topic: "relationenmodell", type: "input", exam: ["AP1", "AP2"],
      q: "Zwei Entitätstypen stehen in einer n:m-Beziehung. Wie viele Tabellen entstehen bei der Überführung ins Relationenmodell mindestens?",
      answer: ["3", "drei", "3 Tabellen", "drei Tabellen"],
      explain: "Je eine Tabelle für die beiden Entitätstypen plus eine Zwischentabelle, die die Primärschlüssel beider Seiten als Fremdschlüssel enthält: 2 + 1 = 3." },
    { id: "q-rel-2", topic: "relationenmodell", type: "single", exam: ["AP1", "AP2"],
      q: "Zwischen Abteilung (1) und Mitarbeiter (n) besteht eine 1:n-Beziehung. Wo wird der Fremdschlüssel angelegt?",
      options: ["In der Tabelle Mitarbeiter", "In der Tabelle Abteilung", "In einer eigenen Zwischentabelle", "Sowohl in Mitarbeiter als auch in Abteilung"],
      answer: 0,
      explain: "Der Primärschlüssel der 1-Seite (AbtNr) wird Fremdschlüssel auf der n-Seite (Mitarbeiter). In der Abteilungstabelle müsste man sonst viele PersNr in ein Feld schreiben (Verstoß gegen 1NF). Eine Zwischentabelle braucht man nur bei n:m." },
    { id: "q-rel-3", topic: "relationenmodell", type: "single", exam: ["AP2"],
      q: "Was bewirkt <code>ON DELETE CASCADE</code> bei einem Fremdschlüssel?",
      options: ["Beim Löschen des referenzierten Datensatzes werden die abhängigen Datensätze mitgelöscht", "Das Löschen des referenzierten Datensatzes wird verhindert", "Der Fremdschlüssel der abhängigen Datensätze wird auf NULL gesetzt", "Die gesamte Tabelle wird geleert"],
      answer: 0,
      explain: "CASCADE ist die Löschweitergabe: Wird z. B. ein Kunde gelöscht, verschwinden auch seine Aufträge. Das Verhindern entspricht RESTRICT/NO ACTION, das Setzen auf NULL entspricht SET NULL." },
    { id: "q-rel-4", topic: "relationenmodell", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Aussagen gelten für einen Primärschlüssel?",
      options: ["Er ist eindeutig", "Er darf nicht NULL sein", "Er identifiziert jeden Datensatz", "Er muss aus genau einer Spalte bestehen", "Er muss eine fortlaufende Zahl sein"],
      answer: [0, 1, 2],
      explain: "Ein Primärschlüssel identifiziert jeden Datensatz eindeutig und ist nie NULL. Er kann aber aus mehreren Spalten zusammengesetzt sein (z. B. BestellNr + ArtNr) und muss keine fortlaufende Zahl sein – auch natürliche Schlüssel wie eine ISBN sind möglich." },
    { id: "q-rel-5", topic: "relationenmodell", type: "tf", exam: ["AP2"],
      q: "Ein Fremdschlüssel darf auf einen Wert verweisen, der in der referenzierten Tabelle nicht existiert, solange er nicht NULL ist.",
      answer: false,
      explain: "Falsch. Das verletzt die referenzielle Integrität: Jeder Fremdschlüsselwert muss als Primärschlüsselwert in der referenzierten Tabelle vorhanden sein. Erlaubt ist höchstens NULL (wenn die Spalte das zulässt) für „keine Zuordnung“." },
    { id: "q-norm-1", topic: "normalisierung", type: "single",
      q: "Eine Tabelle enthält die Spalte „E-Mail-Adressen“ mit dem Wert „info@example.org, service@example.org“. Welche Normalform wird verletzt?",
      options: ["1. Normalform", "2. Normalform", "3. Normalform", "Keine – mehrere Werte in einem Feld sind zulässig"],
      answer: 0,
      explain: "Die 1. Normalform verlangt atomare Werte ohne Wiederholungsgruppen. Zwei Adressen in einem Feld verletzen das. Die 2NF (Teilabhängigkeiten) und 3NF (transitive Abhängigkeiten) bauen erst auf einer Tabelle in 1NF auf." },
    { id: "q-norm-2", topic: "normalisierung", type: "single",
      q: "In der Tabelle Bestellposition (BestellNr, ArtNr, Menge, Artikelbezeichnung) mit dem Primärschlüssel (BestellNr, ArtNr) hängt die Artikelbezeichnung nur von ArtNr ab. Gegen welche Normalform wird verstoßen?",
      options: ["2. Normalform", "1. Normalform", "Nur gegen die 3. Normalform", "Gegen keine – die Tabelle ist normalisiert"],
      answer: 0,
      explain: "Die Bezeichnung hängt nur von einem Teil des zusammengesetzten Schlüssels ab – eine Teilabhängigkeit, die die 2NF verletzt. Die Werte sind atomar (1NF erfüllt). Eine transitive Abhängigkeit (3NF) liegt hier nicht vor, und die Tabelle ist damit auch nicht in 3NF." },
    { id: "q-norm-3", topic: "normalisierung", type: "single",
      q: "Beim Löschen der letzten Bestellung eines Kunden geht auch seine Adresse verloren. Welche Anomalie liegt vor?",
      options: ["Löschanomalie", "Einfügeanomalie", "Änderungsanomalie", "Lost Update"],
      answer: 0,
      explain: "Durch das Löschen eines Datensatzes gehen ungewollt andere Informationen verloren – das ist eine Löschanomalie. Die Einfügeanomalie betrifft das Anlegen, die Änderungsanomalie das mehrfache Ändern. Lost Update ist ein Mehrbenutzerproblem, keine Normalisierungsanomalie." },
    { id: "q-norm-4", topic: "normalisierung", type: "tf",
      q: "Eine Tabelle in 1. Normalform mit einem einspaltigen Primärschlüssel befindet sich automatisch in der 2. Normalform.",
      answer: true,
      explain: "Richtig. Die 2NF verbietet Abhängigkeiten von einem <em>Teil</em> des Schlüssels. Besteht der Schlüssel nur aus einer Spalte, gibt es keine Teile – Teilabhängigkeiten sind unmöglich. Transitive Abhängigkeiten (3NF) können aber trotzdem vorhanden sein. (Streng genommen gilt die Aussage, wenn es keinen weiteren, zusammengesetzten Schlüsselkandidaten gibt – in Prüfungen argumentierst du mit dem Primärschlüssel.)" },
    { id: "q-norm-5", topic: "normalisierung", type: "multi",
      q: "Die Tabelle Kunde (KundenNr, Name, PLZ, Ort) soll in die 3. Normalform gebracht werden (PLZ → Ort). Welche Tabellen entstehen?",
      options: ["Kunde (KundenNr, Name, PLZ)", "Ort (PLZ, Ort)", "Kunde (KundenNr, Name, PLZ, Ort)", "Ort (KundenNr, Ort)", "PLZ (Ort, Name)"],
      answer: [0, 1],
      explain: "Ort hängt transitiv über die PLZ vom Schlüssel ab (KundenNr → PLZ → Ort). Deshalb wird Ort mit der PLZ als Schlüssel ausgelagert, und in Kunde bleibt die PLZ als Fremdschlüssel. Die unveränderte Tabelle verletzt die 3NF; die anderen Varianten verknüpfen falsche Attribute." },
    { id: "q-ddl-1", topic: "sql-ddl", type: "single", exam: ["AP1", "AP2"],
      q: "Welcher Datentyp eignet sich am besten für Geldbeträge wie 1249,90 €?",
      options: ["DECIMAL(10,2)", "DOUBLE", "VARCHAR(10)", "INTEGER"],
      answer: 0,
      explain: "DECIMAL speichert Festkommazahlen exakt – ideal für Geld. DOUBLE ist eine binäre Gleitkommazahl mit möglichen Rundungsfehlern. Mit VARCHAR kann man nicht rechnen, INTEGER kennt keine Nachkommastellen." },
    { id: "q-ddl-2", topic: "sql-ddl", type: "single",
      q: "Zu welchem SQL-Sprachbereich gehört <code>ALTER TABLE</code>?",
      options: ["DDL (Data Definition Language)", "DML (Data Manipulation Language)", "DCL (Data Control Language)", "TCL (Transaction Control Language)"],
      answer: 0,
      explain: "ALTER TABLE ändert die Struktur einer Tabelle und gehört wie CREATE und DROP zur DDL. DML ändert Datensätze (INSERT, UPDATE, DELETE), DCL vergibt Rechte (GRANT, REVOKE), TCL steuert Transaktionen (COMMIT, ROLLBACK)." },
    { id: "q-ddl-3", topic: "sql-ddl", type: "multi",
      q: "Welche Aussagen zu einem (normalen) Index treffen zu?",
      options: ["Er beschleunigt Suchen mit WHERE und Verknüpfungen mit JOIN", "Er benötigt zusätzlichen Speicherplatz", "Er verlangsamt INSERT, UPDATE und DELETE", "Er verhindert automatisch doppelte Werte in der Spalte", "Er ersetzt eine Datensicherung"],
      answer: [0, 1, 2],
      explain: "Ein Index ist eine zusätzliche sortierte Struktur: schnelleres Lesen, aber mehr Speicher und langsamere Schreibzugriffe, weil er mitgepflegt werden muss. Doppelte Werte verhindert nur ein UNIQUE-Index bzw. UNIQUE-Constraint. Mit Datensicherung hat ein Index nichts zu tun." },
    { id: "q-ddl-4", topic: "sql-ddl", type: "single", exam: ["AP1", "AP2"],
      q: "Warum speichert man eine Postleitzahl besser als <code>CHAR(5)</code> statt als <code>INTEGER</code>?",
      options: ["Weil führende Nullen erhalten bleiben und mit Postleitzahlen nicht gerechnet wird", "Weil INTEGER keine fünfstelligen Zahlen speichern kann", "Weil CHAR grundsätzlich weniger Speicher braucht als jeder Zahlentyp", "Weil SQL bei Zahlen keine Vergleiche erlaubt"],
      answer: 0,
      explain: "Eine PLZ wie 01067 würde als Zahl zu 1067. Postleitzahlen sind Kennungen, keine Rechengrößen – deshalb Zeichenkette fester Länge. INTEGER kann sehr wohl fünfstellige Zahlen speichern, und Zahlenvergleiche sind in SQL selbstverständlich möglich." },
    { id: "q-ddl-5", topic: "sql-ddl", type: "input",
      q: "Welcher Constraint (zwei Wörter) legt fest, dass eine Spalte nicht leer bleiben darf?",
      answer: ["NOT NULL"],
      explain: "NOT NULL macht eine Spalte zum Pflichtfeld. UNIQUE verhindert dagegen Duplikate, DEFAULT setzt einen Standardwert, CHECK prüft eine Bedingung." },
    { id: "q-dml-1", topic: "sql-dml-dcl", type: "single",
      q: "Was bewirkt <code>UPDATE Artikel SET Preis = Preis * 1.1;</code> ohne WHERE-Klausel?",
      options: ["Der Preis aller Artikel wird um 10 % erhöht", "Das DBMS lehnt die Anweisung grundsätzlich ab", "Nur der erste Artikel der Tabelle wird geändert", "Es wird eine neue Spalte mit dem erhöhten Preis angelegt"],
      answer: 0,
      explain: "Ohne WHERE gilt ein UPDATE für alle Zeilen. Standardmäßig lehnt das DBMS das nicht ab (nur spezielle Sicherheitsmodi einiger Clients tun das), und es gibt keine „erste Zeile“. Neue Spalten entstehen nur mit ALTER TABLE." },
    { id: "q-dml-2", topic: "sql-dml-dcl", type: "single",
      q: "Welcher Befehl entfernt eine Tabelle samt Struktur, Daten und Indizes aus der Datenbank?",
      options: ["DROP TABLE", "DELETE FROM", "TRUNCATE TABLE", "REVOKE"],
      answer: 0,
      explain: "DROP TABLE löscht die Tabelle vollständig. DELETE FROM und TRUNCATE TABLE entfernen nur die Zeilen, die Tabellenstruktur bleibt erhalten. REVOKE entzieht Rechte und löscht keine Daten." },
    { id: "q-dml-3", topic: "sql-dml-dcl", type: "input",
      q: "Mit welchem SQL-Befehl entziehst du einem Benutzer ein zuvor vergebenes Recht?",
      answer: ["REVOKE"],
      explain: "REVOKE … ON … FROM … entzieht Rechte; das Gegenstück GRANT … ON … TO … vergibt sie. Beide gehören zur DCL." },
    { id: "q-dml-4", topic: "sql-dml-dcl", type: "single",
      q: "Welche Maßnahme schützt am wirksamsten gegen SQL-Injection?",
      options: ["Prepared Statements (parametrisierte Abfragen)", "Verschlüsselte Übertragung mit TLS", "Ein Index auf der Benutzertabelle", "Das Speichern der Datenbank auf einer SSD"],
      answer: 0,
      explain: "Bei Prepared Statements werden Eingaben getrennt als Werte übergeben und nie als SQL-Code ausgeführt. TLS schützt nur die Übertragung – die eingeschleuste Anweisung käme verschlüsselt, aber trotzdem an. Index und SSD betreffen die Geschwindigkeit, nicht die Sicherheit." },
    { id: "q-sel-1", topic: "sql-select", type: "single",
      q: "Die Spalte Preis enthält die Werte 399, 400, 650, 900 und 901. Welche Werte erfüllen <code>WHERE Preis BETWEEN 400 AND 900</code>?",
      options: ["400, 650 und 900", "nur 650", "650 und 900", "400 und 650"],
      answer: 0,
      explain: "BETWEEN schließt beide Grenzen ein: 400 ≤ Preis ≤ 900. Also 400, 650 und 900. 399 und 901 liegen außerhalb. Wer die Grenzen ausschließt, landet fälschlich bei „nur 650“." },
    { id: "q-sel-2", topic: "sql-select", type: "single",
      q: "Welche Bedingung findet alle Nachnamen, die mit „Ha“ beginnen (z. B. Hansen, Hamann)?",
      options: ["WHERE Nachname LIKE 'Ha%'", "WHERE Nachname LIKE '%Ha'", "WHERE Nachname = 'Ha*'", "WHERE Nachname LIKE 'Ha_'"],
      answer: 0,
      explain: "% steht für beliebig viele (auch null) Zeichen, also „Ha“ gefolgt von irgendetwas. '%Ha' findet Namen, die auf „Ha“ enden. * ist in SQL kein Platzhalter, und mit = gibt es gar keinen Mustervergleich. 'Ha_' findet nur Namen mit genau drei Zeichen." },
    { id: "q-sel-3", topic: "sql-select", type: "input",
      q: "Eine Tabelle hat 8 Zeilen. In der Spalte MitarbeiterID steht dreimal NULL. Welchen Wert liefert <code>SELECT COUNT(MitarbeiterID) FROM Geraet;</code>?",
      answer: ["5", "fünf"],
      explain: "COUNT(Spalte) zählt nur Werte ungleich NULL: 8 − 3 = 5. COUNT(*) würde dagegen alle 8 Zeilen zählen." },
    { id: "q-sel-4", topic: "sql-select", type: "tf",
      q: "<code>WHERE MitarbeiterID = NULL</code> liefert alle Zeilen, in denen keine MitarbeiterID eingetragen ist.",
      answer: false,
      explain: "Falsch. Ein Vergleich mit NULL ergibt „unbekannt“ und nie „wahr“ – die Abfrage liefert keine Zeile. Richtig ist <code>WHERE MitarbeiterID IS NULL</code>." },
    { id: "q-sel-5", topic: "sql-select", type: "single",
      q: "In welcher logischen Reihenfolge wertet das DBMS die Klauseln einer SELECT-Abfrage aus?",
      options: ["FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY", "SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY", "FROM → GROUP BY → WHERE → HAVING → SELECT → ORDER BY", "WHERE → FROM → SELECT → GROUP BY → ORDER BY → HAVING"],
      answer: 0,
      explain: "Zuerst werden die Tabellen bestimmt (FROM), dann Zeilen gefiltert (WHERE), gruppiert (GROUP BY), Gruppen gefiltert (HAVING), die Ausgabespalten berechnet (SELECT) und zuletzt sortiert (ORDER BY). Deshalb dürfen Aggregatfunktionen nicht in WHERE stehen – dort gibt es noch keine Gruppen." },
    { id: "q-sel-6", topic: "sql-select", type: "multi",
      q: "Welche Aussagen zu WHERE und HAVING sind richtig?",
      options: ["WHERE filtert einzelne Zeilen vor dem Gruppieren", "HAVING filtert Gruppen nach dem Gruppieren", "Aggregatfunktionen wie COUNT(*) dürfen in HAVING stehen", "Aggregatfunktionen dürfen direkt in WHERE stehen", "HAVING darf nur ohne GROUP BY verwendet werden"],
      answer: [0, 1, 2],
      explain: "WHERE wirkt auf Zeilen vor der Gruppierung, HAVING auf die gebildeten Gruppen – deshalb gehören Bedingungen mit COUNT, SUM usw. in HAVING. In WHERE sind Aggregatfunktionen nicht erlaubt, und HAVING wird gerade zusammen mit GROUP BY eingesetzt." },
    { id: "q-join-1", topic: "sql-join", type: "input",
      q: "Die Tabelle Kunde hat 5 Zeilen, die Tabelle Auftrag 6 Zeilen. Wie viele Zeilen liefert <code>SELECT * FROM Kunde, Auftrag;</code> ohne WHERE-Bedingung?",
      answer: ["30", "30 Zeilen", "dreißig"],
      explain: "Ohne Join-Bedingung entsteht das kartesische Produkt: Jede Zeile der einen Tabelle wird mit jeder Zeile der anderen kombiniert, 5 × 6 = 30. Ein typischer Fehler, wenn die ON- bzw. WHERE-Bedingung vergessen wird." },
    { id: "q-join-2", topic: "sql-join", type: "single",
      q: "Welcher Join liefert alle Kunden – auch diejenigen ohne Auftrag – zusammen mit ihren Aufträgen?",
      options: ["Kunde LEFT JOIN Auftrag", "Kunde INNER JOIN Auftrag", "Kunde RIGHT JOIN Auftrag", "Kunde CROSS JOIN Auftrag"],
      answer: 0,
      explain: "Der LEFT JOIN behält alle Zeilen der linken Tabelle (Kunde) und füllt fehlende Aufträge mit NULL. Der INNER JOIN liefert nur Kunden mit Auftrag, der RIGHT JOIN alle Aufträge, und der CROSS JOIN bildet das kartesische Produkt." },
    { id: "q-join-3", topic: "sql-join", type: "multi",
      q: "Welche Aussagen zu (normalen) Views treffen zu?",
      options: ["Eine View ist eine gespeicherte SELECT-Abfrage", "Über eine View kann man Benutzern nur bestimmte Spalten oder Zeilen freigeben", "Eine View liefert bei jedem Zugriff die aktuellen Daten der Basistabellen", "Eine View speichert eine vollständige Kopie der Daten, die man manuell aktualisieren muss", "Eine View ersetzt den Primärschlüssel einer Tabelle"],
      answer: [0, 1, 2],
      explain: "Eine View ist eine virtuelle Tabelle: Gespeichert wird nur die Abfrage, die Daten kommen bei jedem Zugriff frisch aus den Basistabellen. Das eignet sich für Datenschutz und Vereinfachung. Eine gespeicherte Kopie wäre eine materialisierte View – ein Sonderfall. Mit Primärschlüsseln hat eine View nichts zu tun." },
    { id: "q-join-4", topic: "sql-join", type: "tf",
      q: "Ein INNER JOIN zwischen Kunde und Auftrag liefert auch die Kunden, die noch keinen Auftrag erteilt haben.",
      answer: false,
      explain: "Falsch. Der INNER JOIN liefert nur Paare, bei denen die Join-Bedingung erfüllt ist. Kunden ohne Auftrag fallen heraus. Dafür brauchst du einen LEFT JOIN (Kunde links)." },
    { id: "q-trans-1", topic: "transaktionen", type: "single",
      q: "Wofür steht das „I“ in ACID?",
      options: ["Isolation – parallele Transaktionen beeinflussen sich nicht", "Integrität – alle Fremdschlüssel sind gültig", "Index – Suchzugriffe sind schnell", "Identität – jeder Datensatz hat einen Primärschlüssel"],
      answer: 0,
      explain: "ACID = Atomicity, Consistency, Isolation, Durability. Isolation bedeutet, dass gleichzeitig laufende Transaktionen keine halbfertigen Zwischenstände der anderen sehen. Integrität gehört eher zu Consistency; Index und Identität sind keine ACID-Eigenschaften." },
    { id: "q-trans-2", topic: "transaktionen", type: "multi",
      q: "Welche Befehle dienen der Transaktionssteuerung?",
      options: ["COMMIT", "ROLLBACK", "SAVEPOINT", "GRANT", "TRUNCATE"],
      answer: [0, 1, 2],
      explain: "COMMIT bestätigt, ROLLBACK verwirft, SAVEPOINT setzt einen Zwischenpunkt, zu dem man zurückrollen kann. GRANT gehört zur DCL (Rechte), TRUNCATE leert eine Tabelle und zählt meist zur DDL." },
    { id: "q-trans-3", topic: "transaktionen", type: "single",
      q: "Ein Kontostand von 1.000 € wird gleichzeitig von zwei Automaten gelesen. A bucht 500 € ab und schreibt den neuen Stand, danach bucht B 300 € ab und überschreibt den Wert von A. Welcher Kontostand steht am Ende in der Datenbank?",
      options: ["700 €", "200 €", "500 €", "1.000 €"],
      answer: 0,
      explain: "B rechnet mit dem zuvor gelesenen Wert: 1.000 − 300 = 700 € und überschreibt die 500 € von A – ein Lost Update. Richtig wären 1.000 − 500 − 300 = 200 €, ausgezahlt wurden aber 800 €. Verhindern lässt sich das durch Transaktionen mit Sperren." },
    { id: "q-trans-4", topic: "transaktionen", type: "single",
      q: "Wie reagiert ein DBMS typischerweise auf einen erkannten Deadlock?",
      options: ["Es bricht eine der beteiligten Transaktionen ab und setzt sie zurück", "Es wartet unbegrenzt, bis ein Administrator eingreift", "Es bestätigt alle beteiligten Transaktionen gleichzeitig mit COMMIT", "Es löscht die gesperrten Datensätze"],
      answer: 0,
      explain: "Das DBMS erkennt den Zyklus gegenseitigen Wartens, wählt ein „Opfer“, rollt es zurück und gibt dessen Sperren frei; die andere Transaktion läuft weiter. Unbegrenztes Warten wäre ja gerade der Deadlock. Gleichzeitiges COMMIT oder Löschen würde die Datenintegrität zerstören." },
    { id: "q-trans-5", topic: "transaktionen", type: "tf",
      q: "Nach einem COMMIT bleiben die Änderungen auch bei einem anschließenden Stromausfall erhalten.",
      answer: true,
      explain: "Richtig – das ist die Dauerhaftigkeit (Durability). Das DBMS schreibt bestätigte Änderungen ins Transaktionslog, bevor es den COMMIT meldet, und kann sie nach einem Neustart wiederherstellen." },
    { id: "q-aus-1", topic: "datenaustausch", type: "input",
      q: "Welchen HTTP-Statuscode liefert eine REST-API üblicherweise, wenn eine neue Ressource erfolgreich angelegt wurde?",
      answer: ["201", "201 Created"],
      explain: "201 Created bestätigt das Anlegen, oft mit der Adresse der neuen Ressource im Location-Header. 200 OK steht für eine erfolgreiche Anfrage allgemein, 204 No Content für Erfolg ohne Antwortinhalt." },
    { id: "q-aus-2", topic: "datenaustausch", type: "single",
      q: "Welche HTTP-Methode wird in einer REST-API üblicherweise verwendet, um einen neuen Datensatz anzulegen?",
      options: ["POST", "GET", "DELETE", "HEAD"],
      answer: 0,
      explain: "POST legt eine neue Ressource an (entspricht INSERT). GET liest, DELETE löscht, HEAD fragt nur die Header ohne Inhalt ab." },
    { id: "q-aus-3", topic: "datenaustausch", type: "multi",
      q: "Welche der folgenden Angaben sind gültige JSON-Werte?",
      options: ["true", "null", "\"Heide\"", "'Heide'", "undefined"],
      answer: [0, 1, 2],
      explain: "JSON kennt Strings in doppelten Anführungszeichen, Zahlen, true/false, null, Objekte und Arrays. Einfache Anführungszeichen sind in JSON nicht erlaubt, und undefined gibt es nur in JavaScript, nicht in JSON." },
    { id: "q-aus-4", topic: "datenaustausch", type: "single",
      q: "Wann ist ein XML-Dokument gültig (valide)?",
      options: ["Wenn es wohlgeformt ist und zusätzlich einem Schema (XSD) oder einer DTD entspricht", "Sobald es eine XML-Deklaration in der ersten Zeile enthält", "Wenn alle Elementnamen kleingeschrieben sind", "Wenn es keine Attribute enthält"],
      answer: 0,
      explain: "Wohlgeformt heißt: syntaktisch korrekt (ein Wurzelelement, alle Tags geschlossen und richtig verschachtelt). Gültig ist es erst, wenn es zusätzlich die Regeln eines Schemas oder einer DTD erfüllt. Deklaration, Kleinschreibung oder fehlende Attribute sagen darüber nichts aus." },
    { id: "q-aus-5", topic: "datenaustausch", type: "tf",
      q: "In Deutschland wird in CSV-Dateien häufig das Semikolon als Trennzeichen verwendet, weil das Komma als Dezimaltrennzeichen dient.",
      answer: true,
      explain: "Richtig. Die Spezifikation RFC 4180 sieht das Komma vor, aber bei Zahlen wie 4150,00 würde es mit dem Dezimalkomma kollidieren. Deutsche Programme exportieren deshalb meist mit Semikolon – ein häufiger Grund für Importfehler zwischen Systemen." },
    { id: "q-gov-1", topic: "daten-governance", type: "single",
      q: "Was geschieht in der Phase „Transform“ des ETL-Prozesses?",
      options: ["Daten werden bereinigt, vereinheitlicht und verknüpft", "Daten werden aus den Quellsystemen gelesen", "Daten werden in das Data Warehouse geschrieben", "Daten werden endgültig gelöscht"],
      answer: 0,
      explain: "Transform bereitet die Daten auf: Dubletten entfernen, Formate und Zeichensätze vereinheitlichen, Werte prüfen, verknüpfen und verdichten. Lesen ist Extract, Schreiben ins Ziel ist Load. Löschen gehört nicht zum ETL-Prozess." },
    { id: "q-gov-2", topic: "daten-governance", type: "single",
      q: "Welche Aussage zur Pseudonymisierung ist richtig?",
      options: ["Pseudonymisierte Daten bleiben personenbezogen, weil der Personenbezug mit Zusatzinformationen wiederhergestellt werden kann", "Pseudonymisierte Daten fallen nicht mehr unter die DSGVO", "Pseudonymisierung bedeutet, dass die Daten vollständig gelöscht werden", "Pseudonymisierung und Anonymisierung sind dasselbe"],
      answer: 0,
      explain: "Bei der Pseudonymisierung werden Namen durch Kennungen ersetzt; die Zuordnungstabelle existiert aber noch (getrennt aufbewahrt). Deshalb gilt die DSGVO weiter. Nur anonymisierte Daten, bei denen der Personenbezug nicht mehr herstellbar ist, fallen nicht mehr darunter." },
    { id: "q-gov-3", topic: "daten-governance", type: "multi",
      q: "Welche Begriffe gehören zu den „V“, mit denen Big Data beschrieben wird?",
      options: ["Volume", "Velocity", "Variety", "Veracity", "VLAN", "Virtualisierung"],
      answer: [0, 1, 2, 3],
      explain: "Big Data wird meist mit Volume (Menge), Velocity (Geschwindigkeit), Variety (Vielfalt der Formate), Veracity (Glaubwürdigkeit) und Value (Nutzen) beschrieben. VLAN und Virtualisierung sind Begriffe aus Netzwerk- und Servertechnik." },
    { id: "q-gov-4", topic: "daten-governance", type: "input",
      q: "Von 2.000 Kundendatensätzen haben 1.840 eine E-Mail-Adresse. Wie hoch ist die Vollständigkeitsquote in Prozent?",
      answer: ["92", "92%", "92 Prozent", "92,0", "92,0 %", "92,0 Prozent"],
      explain: "Vollständigkeit = 1.840 ÷ 2.000 × 100 % = 92 %. Es fehlen also 160 E-Mail-Adressen." },
    { id: "q-sel-7", topic: "sql-select", type: "single",
      q: "Welche Bedingung findet – in der Schreibweise des IHK-Syntaxbelegs – alle Geräte, die älter als fünf Jahre sind?",
      options: ["WHERE DATEDIFF(YEAR, Kaufdatum, NOW()) &gt; 5", "WHERE YEAR(Kaufdatum) &gt; 5", "WHERE DATEDIFF(YEAR, NOW(), Kaufdatum) &gt; 5", "WHERE DATEADD(YEAR, 5, Kaufdatum) &gt; 5"],
      answer: 0,
      explain: "DATEDIFF(Teil, Start, Ende) rechnet Ende minus Start: vom Kaufdatum bis heute in Jahren. Mit vertauschten Argumenten wird die Differenz negativ und nie größer als 5. YEAR(Kaufdatum) liefert eine Jahreszahl wie 2025, keinen Abstand, und DATEADD liefert ein Datum, das man nicht mit der Zahl 5 vergleichen kann. Hinweis: DATEDIFF(YEAR, …) zählt Jahreswechsel; tagesgenau prüft man mit Kaufdatum &lt; DATEADD(YEAR, -5, NOW())." },
    { id: "q-ums-1", topic: "umsetzung", type: "single",
      q: "Welche Teststufe prüft das Zusammenspiel von Export-Skript, Datenbank und REST-API?",
      options: ["Integrationstest", "Komponententest", "Abnahmetest", "Statischer Code-Review"],
      answer: 0,
      explain: "Der Integrationstest prüft Schnittstellen und Zusammenspiel mehrerer Komponenten. Der Komponententest prüft eine einzelne Funktion isoliert, der Abnahmetest erfolgt durch den Kunden gegen die Anforderungen. Ein Review ist ein statischer Test, bei dem gar nichts ausgeführt wird." },
    { id: "q-ums-2", topic: "umsetzung", type: "single",
      q: "Gültig sind ganzzahlige Eingaben von 1 bis 100. Welche Testwerte prüfen beide Grenzen vollständig?",
      options: ["0, 1, 100 und 101", "1 und 100", "50", "−100, 0 und 200"],
      answer: 0,
      explain: "Bei der Grenzwertanalyse testet man jeweils den letzten gültigen und den ersten ungültigen Wert auf beiden Seiten: 0 | 1 und 100 | 101. Nur 1 und 100 prüfen nicht, ob ungültige Werte abgewiesen werden; 50 ist ein Normalwert, und −100 bzw. 200 liegen weit weg von den Grenzen." },
    { id: "q-ums-3", topic: "umsetzung", type: "multi",
      q: "Welche Aussagen zu Git treffen zu?",
      options: ["Ein Commit speichert einen Versionsstand mit einer Nachricht", "Ein Branch ist ein paralleler Entwicklungszweig", "Ein Merge führt die Änderungen zweier Zweige zusammen", "Ein Pull Request löscht den Hauptzweig und ersetzt ihn", "Git funktioniert nur mit ständiger Internetverbindung"],
      answer: [0, 1, 2],
      explain: "Commit, Branch und Merge sind Grundbegriffe von Git. Ein Pull Request schlägt Änderungen zur Prüfung und zum Merge vor – er löscht nichts. Git ist verteilt: Jede Kopie enthält die ganze Versionsgeschichte, lokal geht alles auch offline; nur push und pull brauchen eine Verbindung." },
    { id: "q-ums-4", topic: "umsetzung", type: "tf",
      q: "In Scrum dauert ein Sprint höchstens einen Monat.",
      answer: true,
      explain: "Richtig. Laut Scrum Guide sind Sprints feste Zeitabschnitte von höchstens einem Monat, in der Praxis oft zwei Wochen. Kanban kennt dagegen keine Sprints, sondern einen kontinuierlichen Arbeitsfluss." },
    { id: "q-ums-5", topic: "umsetzung", type: "single",
      q: "Was versteht man unter Serialisierung?",
      options: ["Die Umwandlung von Objekten aus dem Arbeitsspeicher in ein übertragbares Format wie JSON", "Das fortlaufende Nummerieren von Datensätzen mit AUTO_INCREMENT", "Das Sortieren einer Tabelle nach dem Primärschlüssel", "Das Hintereinanderausführen mehrerer Transaktionen"],
      answer: 0,
      explain: "Serialisieren heißt, Datenstrukturen eines Programms in einen Byte- oder Textstrom (z. B. JSON, XML) zu überführen, damit man sie speichern oder übertragen kann; das Gegenstück ist die Deserialisierung. Die anderen Antworten beschreiben Nummerierung, Sortierung bzw. serielle Ausführung von Transaktionen." },
    { id: "q-erm-6", topic: "erm", type: "single", exam: ["AP1", "AP2"],
      q: "Zwischen Kunde und Auftrag ist eine Linie in Krähenfuß-Notation gezeichnet. Am Ende bei „Auftrag“ stehen ein Kreis und ein Krähenfuß. Was bedeutet das?",
      options: ["Einem Kunden sind null bis viele Aufträge zugeordnet", "Einem Kunden ist genau ein Auftrag zugeordnet", "Einem Kunden sind mindestens ein und höchstens zwei Aufträge zugeordnet", "Ein Auftrag gehört zu beliebig vielen Kunden"],
      answer: 0,
      explain: "Der Kreis steht für das Minimum 0, der Krähenfuß für das Maximum „viele“. Die Zeichen am Auftrag-Ende beschreiben – wie in der Chen- und UML-Notation –, wie viele Aufträge zu einem Kunden gehören. Genau ein Auftrag wäre ||, und wie viele Kunden zu einem Auftrag gehören, steht am anderen Linienende." },
    { id: "q-erm-7", topic: "erm", type: "tf", exam: ["AP1", "AP2"],
      q: "Ein mehrwertiges Attribut wie „Telefonnummern eines Kunden“ wird bei der Überführung ins Relationenmodell zu einer eigenen Tabelle mit Fremdschlüssel.",
      answer: true,
      explain: "Richtig. Mehrere Werte in einem Feld würden die 1. Normalform verletzen, feste Spalten wie Telefon1, Telefon2 begrenzen die Anzahl künstlich. Deshalb entsteht z. B. Telefon (TelNr, Art, KundenNr [FK])." },
    { id: "q-sel-8", topic: "sql-select", type: "single",
      q: "Welche Bedingung liefert genau dieselben Zeilen wie <code>WHERE Preis BETWEEN 400 AND 900</code>?",
      options: ["WHERE Preis &gt;= 400 AND Preis &lt;= 900", "WHERE Preis &gt; 400 AND Preis &lt; 900", "WHERE Preis &gt;= 400 OR Preis &lt;= 900", "WHERE Preis IN (400, 900)"],
      answer: 0,
      explain: "BETWEEN schließt beide Grenzen ein und verlangt, dass beide Bedingungen gleichzeitig gelten – also &gt;= und &lt;= mit AND. Mit &gt; und &lt; fielen 400 und 900 heraus, mit OR wäre jeder Preis ein Treffer, und IN prüft nur die zwei einzelnen Werte 400 und 900." },
    { id: "q-sel-9", topic: "sql-select", type: "single",
      q: "<code>SELECT CORR(Temperatur, Verbrauch) FROM Tageswerte;</code> liefert 0,92. Wie ist das Ergebnis zu deuten?",
      options: ["Es gibt einen starken gleichläufigen Zusammenhang: An wärmeren Tagen ist der Verbrauch meist höher", "An wärmeren Tagen ist der Verbrauch meist deutlich niedriger", "Zwischen Temperatur und Verbrauch besteht kein Zusammenhang", "92 % aller Tage hatten einen überdurchschnittlichen Verbrauch"],
      answer: 0,
      explain: "Der Korrelationskoeffizient liegt zwischen −1 und +1. Ein Wert nahe +1 zeigt einen starken gleichläufigen linearen Zusammenhang. Ein gegenläufiger Zusammenhang hätte ein negatives Vorzeichen, „kein Zusammenhang“ läge nahe 0. Ein Prozentanteil von Tagen ist der Wert nicht." },
    { id: "q-trans-6", topic: "transaktionen", type: "single",
      q: "Welche Isolationsstufe verhindert Dirty Reads, lässt aber Non-Repeatable Reads noch zu?",
      options: ["READ COMMITTED", "READ UNCOMMITTED", "REPEATABLE READ", "SERIALIZABLE"],
      answer: 0,
      explain: "READ COMMITTED liest nur bestätigte Daten, verhindert also Dirty Reads. Liest dieselbe Transaktion eine Zeile später erneut, kann sich der Wert inzwischen geändert haben (Non-Repeatable Read). READ UNCOMMITTED erlaubt sogar Dirty Reads, REPEATABLE READ und SERIALIZABLE verhindern zusätzlich Non-Repeatable Reads." },
    { id: "q-aus-6", topic: "datenaustausch", type: "single",
      q: "Ein Skript ruft eine Open-Data-API sehr oft ab und erhält plötzlich den Statuscode 429. Was ist die Ursache?",
      options: ["Das Abfragelimit (Rate Limit) der API wurde überschritten", "Die angefragte Ressource existiert nicht", "Der API-Key fehlt oder ist ungültig", "Auf dem Server ist ein interner Fehler aufgetreten"],
      answer: 0,
      explain: "429 Too Many Requests heißt: zu viele Anfragen in einem Zeitraum. Abhilfe: seltener abfragen, Ergebnisse zwischenspeichern, den Header Retry-After beachten. Eine fehlende Ressource meldet 404, ein fehlender oder ungültiger Key 401, ein Serverfehler 500." },
    { id: "q-aus-7", topic: "datenaustausch", type: "single",
      q: "Nach dem Import einer CSV-Datei steht vor dem ersten Spaltennamen „ï»¿“. Was ist die wahrscheinlichste Ursache?",
      options: ["Die Datei beginnt mit einem UTF-8-BOM und wurde als Windows-1252 gelesen", "Die Datei nutzt das Semikolon statt des Kommas als Trennzeichen", "Die Datei hat Windows-Zeilenenden (CRLF)", "Die Textfelder stehen nicht in Anführungszeichen"],
      answer: 0,
      explain: "Das Byte Order Mark einer UTF-8-Datei besteht aus den Bytes EF BB BF. Im Zeichensatz Windows-1252 werden diese drei Bytes als „ï»¿“ angezeigt. Lösung: beim Import UTF-8 angeben. Falsche Trennzeichen verschieben Spalten, Zeilenenden und fehlende Anführungszeichen erzeugen keine Sonderzeichen am Dateianfang." },
    { id: "q-aus-8", topic: "datenaustausch", type: "single",
      q: "Was wird bei ODBC in einem DSN (Data Source Name) hinterlegt?",
      options: ["Treiber und Verbindungsdaten einer Datenquelle, z. B. Server und Datenbank, unter einem Namen", "Die vollständige Tabellenstruktur der Datenbank", "Eine Sicherungskopie der Datenbank", "Die SQL-Befehle zum Anlegen aller Tabellen"],
      answer: 0,
      explain: "Ein DSN bündelt die Verbindungsinformationen: welcher ODBC-Treiber, welcher Server, welche Datenbank und ggf. welcher Benutzer. Anwendungen wie Excel sprechen die Datenquelle dann nur noch über diesen Namen an. Struktur, Sicherungen und Skripte liegen in der Datenbank bzw. im Backup." },
    { id: "q-aus-9", topic: "datenaustausch", type: "single",
      q: "Du nutzt Open-Data-Daten, die unter der Lizenz CC BY 4.0 stehen, für einen veröffentlichten Bericht. Was musst du beachten?",
      options: ["Die Quelle nennen, auf die Lizenz verweisen und Änderungen an den Daten kenntlich machen", "Die Daten dürfen nur für private, nicht kommerzielle Zwecke genutzt werden", "Veränderte oder aufbereitete Daten dürfen nicht weitergegeben werden", "Es gibt keinerlei Auflagen, auch eine Quellenangabe ist nicht nötig"],
      answer: 0,
      explain: "BY steht für Namensnennung: Urheber bzw. Quelle, Lizenzhinweis und Hinweis auf Änderungen sind Pflicht, sonst ist die Nutzung frei – auch kommerziell. Ein Verbot kommerzieller Nutzung wäre der Zusatz NC, ein Bearbeitungsverbot ND, völlige Freiheit ohne Auflagen bietet CC0." },
    { id: "q-gov-5", topic: "daten-governance", type: "single",
      q: "Ein Cloud-Dienst soll Kundendaten in einem Rechenzentrum außerhalb von EU und EWR speichern. Was ist nach der DSGVO zusätzlich erforderlich?",
      options: ["Ein Angemessenheitsbeschluss der EU-Kommission oder geeignete Garantien wie Standardvertragsklauseln", "Nichts, solange die Übertragung per TLS verschlüsselt ist", "Nur eine schriftliche Bestätigung des Cloud-Anbieters, dass er die Daten sicher speichert", "Eine Genehmigung durch das BSI"],
      answer: 0,
      explain: "Übermittlungen in Drittländer sind nach Art. 44 ff. DSGVO nur zulässig, wenn die EU-Kommission ein angemessenes Schutzniveau festgestellt hat (Art. 45) oder geeignete Garantien bestehen, z. B. Standardvertragsklauseln (Art. 46). Verschlüsselung ist eine technische Maßnahme, ersetzt aber keine Rechtsgrundlage für die Übermittlung. Das BSI erteilt dafür keine Genehmigungen." },
    { id: "q-modelle-4", topic: "db-modelle", type: "single",
      q: "Welcher Vorteil kennzeichnet objektorientierte Datenbanken?",
      options: ["Komplexe, verschachtelte Objekte lassen sich ohne Zerlegung in viele Tabellen speichern", "Sie sind am weitesten verbreitet und nutzen eine einheitliche Standardsprache", "Sie bilden ausschließlich 1:n-Beziehungen in Baumform ab", "Sie kommen ohne eindeutige Identität der gespeicherten Objekte aus"],
      answer: 0,
      explain: "Objektorientierte Datenbanken speichern Objekte samt Attributen, Methoden und Vererbung direkt – passend zur objektorientierten Programmierung. Sie sind aber wenig verbreitet und kaum standardisiert; der Marktführer ist das relationale Modell mit SQL. Die Baumform beschreibt das hierarchische Modell, und jedes Objekt hat eine eindeutige Objektidentität (OID)." },
    { id: "q-dml-5", topic: "sql-dml-dcl", type: "single",
      q: "Was bewirkt der Zusatz <code>WITH GRANT OPTION</code> bei einer GRANT-Anweisung?",
      options: ["Der Empfänger darf das erhaltene Recht an andere Benutzer weitergeben", "Der Empfänger erhält automatisch alle Rechte auf die gesamte Datenbank", "Das Recht gilt nur bis zum nächsten Neustart des Datenbankservers", "Das Recht wird zusätzlich allen vorhandenen Rollen zugewiesen"],
      answer: 0,
      explain: "WITH GRANT OPTION erlaubt dem Empfänger, genau dieses Recht selbst weiterzuvergeben. Deshalb setzt man es nur sehr gezielt ein (Prinzip der minimalen Rechte). Der Umfang des Rechts selbst ändert sich nicht, es ist nicht zeitlich begrenzt und betrifft keine Rollen." },
    { id: "q-join-5", topic: "sql-join", type: "input",
      q: "Abfrage A liefert die Orte Heide und Husum, Abfrage B liefert Husum und Meldorf (je eine Spalte Ort). Wie viele Zeilen liefert <code>A UNION B</code>?",
      answer: ["3", "drei", "3 Zeilen", "drei Zeilen"],
      explain: "UNION hängt die Ergebnisse untereinander und entfernt Duplikate: Heide, Husum, Meldorf = 3 Zeilen. UNION ALL würde das doppelte Husum behalten und 4 Zeilen liefern." }
  ],
  cards: [
    { topic: "db-grundlagen", f: "DBMS", b: "Datenbankmanagementsystem: Software, die alle Zugriffe auf die Daten verwaltet (z. B. MariaDB, PostgreSQL, SQL Server)." },
    { topic: "db-grundlagen", f: "Datenbanksystem (DBS)", b: "DBMS + Datenbank(en), also Verwaltungssoftware plus Datenbestand; im weiteren Sinn auch Hardware, Anwendungsprogramme und Benutzer." },
    { topic: "db-grundlagen", f: "Redundanz vs. Inkonsistenz", b: "Redundanz = dieselben Daten mehrfach gespeichert. Inkonsistenz = widersprüchliche Daten, oft Folge von Redundanz." },
    { topic: "db-grundlagen", f: "Data Dictionary", b: "Systemkatalog mit Metadaten: Tabellen, Spalten, Datentypen, Schlüssel, Indizes, Views, Rechte. Wird vom DBMS gepflegt." },
    { topic: "db-grundlagen", f: "Neun Anforderungen an ein DBMS (Codd)", b: "Integration, Operationen, Katalog, Benutzersichten, Konsistenzüberwachung, Zugriffskontrolle, Transaktionen, Synchronisation, Datensicherung." },
    { topic: "drei-ebenen", f: "Drei Ebenen nach ANSI-SPARC", b: "Extern (Benutzersichten), konzeptionell (logisches Gesamtschema), intern (physische Speicherung)." },
    { topic: "drei-ebenen", f: "Physische Datenunabhängigkeit", b: "Änderungen an der Speicherung (Index, Speichermedium, Dateiorganisation) wirken sich nicht auf Schema und Programme aus." },
    { topic: "drei-ebenen", f: "Logische Datenunabhängigkeit", b: "Änderungen am konzeptionellen Schema (z. B. neue Spalte) erfordern keine Änderung der externen Sichten und Programme." },
    { topic: "drei-ebenen", f: "3-Tier-Architektur", b: "Präsentation → Anwendungslogik → Datenhaltung. Der Client greift nie direkt auf die Datenbank zu." },
    { topic: "db-modelle", f: "Hierarchisches Modell", b: "Baumstruktur, jeder Datensatz hat genau einen Vorgänger (1:n). Beispiele: IMS, LDAP, Windows-Registry." },
    { topic: "db-modelle", f: "Netzwerkmodell", b: "Netzstruktur mit mehreren Vorgängern und Nachfolgern, Verknüpfung über Zeiger (CODASYL), navigierender Zugriff." },
    { topic: "db-modelle", f: "Relationales Modell", b: "Tabellen; Beziehungen über Primär- und Fremdschlüsselwerte; deklarative Abfrage mit SQL (Codd, 1970)." },
    { topic: "db-modelle", f: "Objektorientierte Datenbank", b: "Speichert Objekte mit Attributen, Methoden, Vererbung und Objektidentität (OID) – ohne Zerlegung in Tabellen." },
    { topic: "nosql", f: "Vier NoSQL-Typen", b: "Key-Value-Store, dokumentenorientiert, spaltenorientiert (Wide Column), Graphdatenbank." },
    { topic: "nosql", f: "CAP-Theorem", b: "Consistency, Availability, Partition Tolerance – ein verteiltes System garantiert höchstens zwei davon gleichzeitig." },
    { topic: "nosql", f: "BASE", b: "Basically Available, Soft State, Eventually Consistent – Gegenmodell zu ACID." },
    { topic: "nosql", f: "Beispiele: Key-Value, Dokument, Spalten, Graph", b: "Redis · MongoDB · Apache Cassandra · Neo4j" },
    { topic: "erm", f: "Chen-Symbole", b: "Rechteck = Entitätstyp, Ellipse = Attribut (Schlüssel unterstrichen), Raute = Beziehungstyp." },
    { topic: "erm", f: "Entität vs. Entitätstyp", b: "Entität = einzelnes Objekt (Kunde „Deichbau Meyer“). Entitätstyp = Menge gleichartiger Objekte (Kunde)." },
    { topic: "erm", f: "(min,max) = (0,n)", b: "Eine Entität nimmt an keiner bis beliebig vielen Beziehungen teil – optional („kann“)." },
    { topic: "erm", f: "(min,max) = (1,1)", b: "Eine Entität nimmt an genau einer Beziehung teil – Pflicht („muss genau einmal“)." },
    { topic: "erm", f: "Beziehungsattribut", b: "Attribut, das erst durch die Beziehung entsteht, z. B. Menge, Note, Ausleihdatum. Landet später in der Zwischentabelle." },
    { topic: "relationenmodell", f: "Relation · Tupel · Attribut", b: "Tabelle · Zeile (Datensatz) · Spalte" },
    { topic: "relationenmodell", f: "Fremdschlüssel", b: "Spalte, die auf den Primärschlüssel einer anderen (oder derselben) Tabelle verweist und so die Beziehung herstellt." },
    { topic: "relationenmodell", f: "1:n ins Relationenmodell", b: "Primärschlüssel der 1-Seite wird Fremdschlüssel in der Tabelle der n-Seite." },
    { topic: "relationenmodell", f: "n:m ins Relationenmodell", b: "Eigene Zwischentabelle mit den Primärschlüsseln beider Seiten als Fremdschlüssel (zusammen der Primärschlüssel)." },
    { topic: "relationenmodell", f: "ON DELETE CASCADE", b: "Löschweitergabe: Wird der referenzierte Datensatz gelöscht, werden die abhängigen Datensätze mitgelöscht." },
    { topic: "relationenmodell", f: "Referenzielle Integrität", b: "Jeder Fremdschlüsselwert existiert als Primärschlüsselwert in der referenzierten Tabelle (oder ist NULL, falls erlaubt)." },
    { topic: "normalisierung", f: "1. Normalform", b: "Alle Attributwerte sind atomar, es gibt keine Wiederholungsgruppen." },
    { topic: "normalisierung", f: "2. Normalform", b: "1NF + jedes Nichtschlüsselattribut ist voll funktional vom gesamten Primärschlüssel abhängig (keine Teilabhängigkeit)." },
    { topic: "normalisierung", f: "3. Normalform", b: "2NF + keine transitiven Abhängigkeiten: Nichtschlüsselattribute hängen nicht von anderen Nichtschlüsselattributen ab." },
    { topic: "normalisierung", f: "Drei Anomalien", b: "Einfügeanomalie, Änderungsanomalie, Löschanomalie – Folgen von Redundanz in nicht normalisierten Tabellen." },
    { topic: "sql-ddl", f: "DDL · DML · DCL · TCL", b: "CREATE/ALTER/DROP · INSERT/UPDATE/DELETE · GRANT/REVOKE · COMMIT/ROLLBACK/SAVEPOINT" },
    { topic: "sql-ddl", f: "DECIMAL(10,2)", b: "Exakte Festkommazahl mit 10 Stellen, davon 2 Nachkommastellen – ideal für Geldbeträge (max. 99.999.999,99)." },
    { topic: "sql-ddl", f: "CHAR(n) vs. VARCHAR(n)", b: "CHAR = feste Länge (z. B. PLZ), VARCHAR = variable Länge bis höchstens n Zeichen (z. B. Namen)." },
    { topic: "sql-ddl", f: "Index: Vor- und Nachteil", b: "Schneller suchen, verknüpfen und sortieren – aber mehr Speicher und langsamere INSERT/UPDATE/DELETE." },
    { topic: "sql-dml-dcl", f: "DELETE vs. TRUNCATE vs. DROP", b: "DELETE: (ausgewählte) Zeilen löschen · TRUNCATE: alle Zeilen schnell entfernen · DROP: Tabelle samt Struktur löschen." },
    { topic: "sql-dml-dcl", f: "Leserecht vergeben (Syntax)", b: "GRANT SELECT ON datenbank.tabelle TO 'benutzer'@'host';" },
    { topic: "sql-dml-dcl", f: "SQL-Injection", b: "Einschleusen von SQL-Code über Benutzereingaben. Schutz: Prepared Statements, Eingabeprüfung, minimale DB-Rechte." },
    { topic: "sql-select", f: "Projektion vs. Selektion", b: "Projektion = Auswahl von Spalten (SELECT-Liste). Selektion = Auswahl von Zeilen (WHERE)." },
    { topic: "sql-select", f: "LIKE-Platzhalter", b: "% = beliebig viele Zeichen (auch keins), _ = genau ein Zeichen." },
    { topic: "sql-select", f: "COUNT(*) vs. COUNT(Spalte)", b: "COUNT(*) zählt alle Zeilen, COUNT(Spalte) nur die Werte ungleich NULL." },
    { topic: "sql-select", f: "WHERE vs. HAVING", b: "WHERE filtert Zeilen vor dem Gruppieren, HAVING filtert Gruppen danach (mit Aggregatfunktionen)." },
    { topic: "sql-select", f: "Logische Ausführungsreihenfolge", b: "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY" },
    { topic: "sql-join", f: "INNER JOIN", b: "Liefert nur Zeilen, die in beiden Tabellen einen passenden Partner haben." },
    { topic: "sql-join", f: "LEFT JOIN", b: "Liefert alle Zeilen der linken Tabelle; fehlende Werte der rechten Tabelle werden mit NULL aufgefüllt." },
    { topic: "sql-join", f: "Kartesisches Produkt", b: "Verknüpfung ohne Join-Bedingung: jede Zeile mit jeder – Zeilen A × Zeilen B." },
    { topic: "sql-join", f: "View", b: "Gespeicherte SELECT-Abfrage (virtuelle Tabelle) ohne eigene Daten; gut für Vereinfachung und Datenschutz." },
    { topic: "transaktionen", f: "ACID", b: "Atomicity (alles oder nichts), Consistency, Isolation, Durability (dauerhaft nach COMMIT)." },
    { topic: "transaktionen", f: "Lost Update", b: "Eine gleichzeitige Änderung überschreibt eine andere. Lösung: Transaktion mit Sperre oder relatives UPDATE." },
    { topic: "transaktionen", f: "Deadlock", b: "Transaktionen warten gegenseitig auf Sperren. Das DBMS bricht eine davon ab (ROLLBACK)." },
    { topic: "transaktionen", f: "Point-in-Time-Recovery", b: "Letzte Vollsicherung einspielen und das Transaktionslog bis kurz vor den Fehler nachfahren." },
    { topic: "datenaustausch", f: "JSON-Datentypen", b: "String, Number, Boolean (true/false), null, Object { }, Array [ ]" },
    { topic: "datenaustausch", f: "XML: wohlgeformt vs. gültig", b: "Wohlgeformt = syntaktisch korrekt. Gültig = zusätzlich konform zu Schema (XSD) oder DTD." },
    { topic: "datenaustausch", f: "REST: GET · POST · PUT · DELETE", b: "lesen · anlegen · ersetzen/ändern · löschen (≈ SELECT · INSERT · UPDATE · DELETE)" },
    { topic: "datenaustausch", f: "HTTP 401 vs. 403", b: "401 Unauthorized = nicht (gültig) angemeldet. 403 Forbidden = angemeldet, aber keine Berechtigung." },
    { topic: "daten-governance", f: "ETL", b: "Extract (aus Quellen lesen), Transform (bereinigen, vereinheitlichen, verknüpfen), Load (ins Ziel laden)." },
    { topic: "daten-governance", f: "Data Warehouse vs. Data Lake", b: "DWH: bereinigte, strukturierte Daten, Schema-on-Write. Data Lake: Rohdaten aller Formate, Schema-on-Read." },
    { topic: "daten-governance", f: "Die 5 V von Big Data", b: "Volume, Velocity, Variety, Veracity, Value" },
    { topic: "daten-governance", f: "Data Owner vs. Data Steward", b: "Owner: fachlich verantwortlich, entscheidet über Nutzung und Zugriff. Steward: pflegt Qualität und Definitionen im Alltag." },
    { topic: "daten-governance", f: "Pseudonymisiert vs. anonymisiert", b: "Pseudonymisiert: Personenbezug mit Zusatzwissen herstellbar – DSGVO gilt. Anonymisiert: nicht mehr herstellbar – DSGVO gilt nicht." },
    { topic: "umsetzung", f: "Teststufen", b: "Komponententest → Integrationstest → Systemtest → Abnahmetest (durch den Kunden)" },
    { topic: "umsetzung", f: "Black-Box- vs. White-Box-Test", b: "Black-Box: Testfälle aus der Anforderung, Code unbekannt (Äquivalenzklassen, Grenzwerte). White-Box: Testfälle aus dem Code (Anweisungen, Zweige)." },
    { topic: "umsetzung", f: "Git: Commit · Branch · Merge", b: "Versionsstand speichern · parallelen Entwicklungszweig anlegen · Zweige zusammenführen" },
    { topic: "umsetzung", f: "Scrum vs. Kanban", b: "Scrum: feste Sprints, Rollen, Events. Kanban: kontinuierlicher Fluss auf einem Board mit WIP-Limits." },
    { topic: "sql-select", f: "DATEDIFF laut IHK-Beleg", b: "DATEDIFF(Teil, Start, Ende) = Ende − Start, z. B. DATEDIFF(YEAR, Kaufdatum, NOW()) &gt; 5" },
    { topic: "sql-select", f: "BETWEEN ohne BETWEEN", b: "x BETWEEN a AND b entspricht x &gt;= a AND x &lt;= b – beide Grenzen gehören dazu." },
    { topic: "sql-select", f: "CORR(a, b)", b: "Korrelation zwischen −1 und +1: nahe +1 gleichläufig, nahe −1 gegenläufig, nahe 0 kein linearer Zusammenhang." },
    { topic: "erm", f: "Krähenfuß-Notation", b: "Kreis = 0, Strich = 1, Krähenfuß = viele. Das Zeichen direkt an der Entität ist das Maximum, das innere das Minimum." },
    { topic: "erm", f: "Mehrwertiges Attribut", b: "Mehrere Werte je Entität (z. B. Telefonnummern) → eigene Tabelle mit Fremdschlüssel, sonst 1NF-Verstoß." },
    { topic: "transaktionen", f: "Isolationsstufen (aufsteigend)", b: "READ UNCOMMITTED → READ COMMITTED (kein Dirty Read) → REPEATABLE READ → SERIALIZABLE (voll isoliert, am langsamsten)" },
    { topic: "datenaustausch", f: "HTTP 429", b: "Too Many Requests – Rate Limit überschritten. Seltener abfragen, zwischenspeichern, Retry-After beachten." },
    { topic: "datenaustausch", f: "ODBC und DSN", b: "ODBC = herstellerunabhängige DB-Schnittstelle mit Treiber. DSN = benannte Datenquelle mit Treiber, Server und Datenbank." },
    { topic: "datenaustausch", f: "Byte Order Mark (BOM)", b: "Bytes EF BB BF am Anfang einer UTF-8-Datei; als Windows-1252 gelesen erscheint „ï»¿“." },
    { topic: "datenaustausch", f: "Open Data unter CC BY 4.0", b: "Freie Nutzung, auch kommerziell – aber Quelle nennen, Lizenz angeben, Änderungen kennzeichnen." }
  ],
  checklist: [
    { id: "c-grund-1", topic: "db-grundlagen", text: "Ich kann die Begriffe Datenbank, DBMS und Datenbanksystem voneinander abgrenzen und je ein Beispiel nennen.", exam: ["AP1", "AP2"] },
    { id: "c-grund-2", topic: "db-grundlagen", text: "Ich kann Redundanz, Inkonsistenz, fehlenden Datenschutz und fehlende Datenunabhängigkeit als Probleme dateibasierter Datenhaltung an einem Beispiel erklären.", exam: ["AP1", "AP2"] },
    { id: "c-grund-3", topic: "db-grundlagen", text: "Ich kann mindestens sechs der neun Anforderungen an ein DBMS nach Codd nennen und erläutern.", exam: ["AP2"] },
    { id: "c-grund-4", topic: "db-grundlagen", text: "Ich kann erklären, welche Informationen das Data Dictionary enthält und wofür das DBMS es nutzt.", exam: ["AP2"] },
    { id: "c-ebenen-1", topic: "drei-ebenen", text: "Ich kann die externe, konzeptionelle und interne Ebene beschreiben und konkrete Änderungen der richtigen Ebene zuordnen.", exam: ["AP2"] },
    { id: "c-ebenen-2", topic: "drei-ebenen", text: "Ich kann physische und logische Datenunabhängigkeit an je einem Beispiel erläutern.", exam: ["AP2"] },
    { id: "c-ebenen-3", topic: "drei-ebenen", text: "Ich kann 2-Tier- und 3-Tier-Architektur vergleichen und den Sicherheitsvorteil der 3-Tier-Architektur begründen.", exam: ["AP2"] },
    { id: "c-modelle-1", topic: "db-modelle", text: "Ich kann das hierarchische, das Netzwerk-, das relationale und das objektorientierte Modell nach Struktur, Zugriff sowie Vor- und Nachteilen vergleichen.", exam: ["AP2"] },
    { id: "c-modelle-2", topic: "db-modelle", text: "Ich kann für einen Anwendungsfall ein passendes Datenbankmodell auswählen und meine Wahl begründen.", exam: ["AP2"] },
    { id: "c-nosql-1", topic: "nosql", text: "Ich kann die vier NoSQL-Typen mit je einem Beispielsystem und einem typischen Einsatzgebiet nennen.", exam: ["AP2"] },
    { id: "c-nosql-2", topic: "nosql", text: "Ich kann das CAP-Theorem erklären und ACID mit BASE vergleichen.", exam: ["AP2"] },
    { id: "c-nosql-3", topic: "nosql", text: "Ich kann begründet entscheiden, ob für eine Aufgabe eine relationale oder eine NoSQL-Datenbank besser passt.", exam: ["AP2"] },
    { id: "c-erm-1", topic: "erm", text: "Ich kann aus einem Aufgabentext Entitätstypen, Attribute, Schlüssel und Beziehungen ableiten und ein ER-Modell in Chen-Notation zeichnen.", exam: ["AP1", "AP2"] },
    { id: "c-erm-2", topic: "erm", text: "Ich kann Kardinalitäten (1:1, 1:n, n:m) bestimmen und in beide Leserichtungen begründen.", exam: ["AP1", "AP2"] },
    { id: "c-erm-3", topic: "erm", text: "Ich kann die (min,max)-Notation lesen, eintragen und in die Chen-Notation übersetzen.", exam: ["AP1", "AP2"] },
    { id: "c-rel-1", topic: "relationenmodell", text: "Ich kann ein ER-Modell in ein Relationenmodell überführen und Primär- und Fremdschlüssel kennzeichnen.", exam: ["AP1", "AP2"] },
    { id: "c-rel-2", topic: "relationenmodell", text: "Ich kann eine n:m-Beziehung mit einer Zwischentabelle und zusammengesetztem Primärschlüssel auflösen.", exam: ["AP1", "AP2"] },
    { id: "c-rel-3", topic: "relationenmodell", text: "Ich kann referenzielle Integrität erklären und die Wirkung von CASCADE, RESTRICT und SET NULL beschreiben.", exam: ["AP2"] },
    { id: "c-norm-1", topic: "normalisierung", text: "Ich kann Einfüge-, Änderungs- und Löschanomalien an einer Tabelle konkret zeigen.", exam: ["AP2"] },
    { id: "c-norm-2", topic: "normalisierung", text: "Ich kann eine Tabelle schrittweise in die 1., 2. und 3. Normalform überführen und jede Zerlegung mit funktionalen Abhängigkeiten begründen.", exam: ["AP2"] },
    { id: "c-ddl-1", topic: "sql-ddl", text: "Ich kann Tabellen mit CREATE TABLE inklusive PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE, DEFAULT und CHECK anlegen und mit ALTER TABLE ändern.", exam: ["AP2"] },
    { id: "c-ddl-2", topic: "sql-ddl", text: "Ich kann passende Datentypen (z. B. DECIMAL für Geld, CHAR für die PLZ, DATE für Termine) auswählen und begründen.", exam: ["AP1", "AP2"] },
    { id: "c-ddl-3", topic: "sql-ddl", text: "Ich kann einen Index anlegen und seine Vor- und Nachteile erklären.", exam: ["AP2"] },
    { id: "c-dml-1", topic: "sql-dml-dcl", text: "Ich kann Datensätze mit INSERT, UPDATE und DELETE einfügen, ändern und löschen und kenne die Gefahr einer fehlenden WHERE-Klausel.", exam: ["AP2"] },
    { id: "c-dml-2", topic: "sql-dml-dcl", text: "Ich kann Benutzer anlegen, Rechte mit GRANT vergeben und mit REVOKE entziehen.", exam: ["AP2"] },
    { id: "c-dml-3", topic: "sql-dml-dcl", text: "Ich kann erklären, wie SQL-Injection funktioniert und wie Prepared Statements davor schützen.", exam: ["AP2"] },
    { id: "c-sel-1", topic: "sql-select", text: "Ich kann SELECT-Abfragen mit WHERE, AND/OR, LIKE, BETWEEN, IN, IS NULL und ORDER BY formulieren.", exam: ["AP2"] },
    { id: "c-sel-2", topic: "sql-select", text: "Ich kann Aggregatfunktionen mit GROUP BY und HAVING einsetzen und das Ergebnis einer Abfrage von Hand bestimmen.", exam: ["AP2"] },
    { id: "c-join-1", topic: "sql-join", text: "Ich kann Abfragen über mehrere Tabellen mit INNER JOIN und LEFT JOIN formulieren und die Ergebnisse unterscheiden.", exam: ["AP2"] },
    { id: "c-join-2", topic: "sql-join", text: "Ich kann Unterabfragen (IN, EXISTS, im FROM) schreiben und Views anlegen und nutzen.", exam: ["AP2"] },
    { id: "c-trans-1", topic: "transaktionen", text: "Ich kann eine Transaktion mit START TRANSACTION, COMMIT und ROLLBACK formulieren und die ACID-Eigenschaften an einem Beispiel erläutern.", exam: ["AP2"] },
    { id: "c-trans-2", topic: "transaktionen", text: "Ich kann Lost Update, Dirty Read und Deadlock erklären und Gegenmaßnahmen nennen.", exam: ["AP2"] },
    { id: "c-trans-3", topic: "transaktionen", text: "Ich kann ein Sicherungskonzept für eine Datenbank beschreiben und den Speicherbedarf voller, differenzieller und inkrementeller Sicherungen berechnen.", exam: ["AP2"] },
    { id: "c-aus-1", topic: "datenaustausch", text: "Ich kann Daten zwischen CSV, JSON und XML umwandeln und Syntaxfehler in JSON und XML finden.", exam: ["AP2"] },
    { id: "c-aus-2", topic: "datenaustausch", text: "Ich kann Kompatibilitätsprobleme wie Zeichensatz, Dezimaltrennzeichen und Datumsformat erkennen und lösen.", exam: ["AP2"] },
    { id: "c-aus-3", topic: "datenaustausch", text: "Ich kann REST-Aktionen den HTTP-Methoden und Statuscodes zuordnen und den Zugriffsschutz mit Token bzw. OAuth erklären.", exam: ["AP2"] },
    { id: "c-gov-1", topic: "daten-governance", text: "Ich kann den ETL-Prozess beschreiben und Data Warehouse und Data Lake unterscheiden.", exam: ["AP2"] },
    { id: "c-gov-2", topic: "daten-governance", text: "Ich kann Kriterien der Datenqualität nennen und eine Vollständigkeitsquote berechnen.", exam: ["AP2"] },
    { id: "c-gov-3", topic: "daten-governance", text: "Ich kann Pseudonymisierung und Anonymisierung unterscheiden und Datenschutzmaßnahmen für eine Datenweitergabe vorschlagen.", exam: ["AP1", "AP2"] },
    { id: "c-gov-4", topic: "daten-governance", text: "Ich kann die Rollen Data Owner, Data Steward und Data Custodian erklären.", exam: ["AP2"] },
    { id: "c-sel-3", topic: "sql-select", text: "Ich kann die Funktionen des IHK-Syntaxbelegs (LEFT, RIGHT, YEAR, NOW, WEEKDAY, DATEADD, DATEDIFF) in Abfragen einsetzen.", exam: ["AP2"] },
    { id: "c-ums-1", topic: "umsetzung", text: "Ich kann mit einem Skript per Prepared Statement auf eine Datenbank zugreifen und das Ergebnis als JSON ausgeben.", exam: ["AP2"] },
    { id: "c-ums-2", topic: "umsetzung", text: "Ich kann Teststufen unterscheiden und Testfälle mit Äquivalenzklassen und Grenzwerten erstellen und protokollieren.", exam: ["AP2"] },
    { id: "c-ums-3", topic: "umsetzung", text: "Ich kann mit Git im Team arbeiten (Commit, Branch, Merge, Pull Request) und Scrum mit Kanban vergleichen.", exam: ["AP2"] },
    { id: "c-ums-4", topic: "umsetzung", text: "Ich kann Inhalte einer Benutzer- und einer technischen Dokumentation für die Übergabe nennen.", exam: ["AP2"] },
    { id: "c-erm-4", topic: "erm", text: "Ich kann ein vorgegebenes ER-Modell mit dem Anforderungstext abgleichen und Fehler korrigieren (fehlende Entität, falsche Kardinalität, falsch zugeordnetes Attribut).", exam: ["AP1", "AP2"] },
    { id: "c-erm-5", topic: "erm", text: "Ich kann die Krähenfuß-Notation lesen und mehrwertige, zusammengesetzte und abgeleitete Attribute richtig umsetzen.", exam: ["AP1", "AP2"] },
    { id: "c-ddl-4", topic: "sql-ddl", text: "Ich kann SQL-Anweisungen den Sprachbereichen DDL, DML, DQL, DCL und TCL zuordnen und ihre Wirkung beschreiben.", exam: ["AP2"] },
    { id: "c-aus-4", topic: "datenaustausch", text: "Ich kann Open-Data- und API-Quellen nutzen und dabei Lizenz, API-Key, Abfragelimits (HTTP 429) und fehlende Werte beachten.", exam: ["AP2"] },
    { id: "c-aus-5", topic: "datenaustausch", text: "Ich kann ODBC mit Treiber und DSN beschreiben und Vorteile standardisierter Schnittstellen nennen.", exam: ["AP2"] },
    { id: "c-gov-5", topic: "daten-governance", text: "Ich kann erklären, unter welchen Voraussetzungen personenbezogene Daten in ein Drittland außerhalb von EU/EWR übermittelt werden dürfen.", exam: ["AP2"] }
  ],
  glossary: [
    { term: "ACID", def: "Eigenschaften zuverlässiger Transaktionen: Atomicity (alles oder nichts), Consistency (gültiger Zustand), Isolation (keine gegenseitige Beeinflussung) und Durability (Dauerhaftigkeit nach COMMIT)." },
    { term: "Aggregatfunktion", def: "SQL-Funktion, die aus mehreren Zeilen einen einzigen Wert berechnet, z. B. COUNT, SUM, AVG, MIN oder MAX." },
    { term: "Anomalie", def: "Unerwünschter Effekt beim Einfügen, Ändern oder Löschen in nicht normalisierten Tabellen, der zu Datenverlust oder Inkonsistenz führt." },
    { term: "Anonymisierung", def: "Veränderung personenbezogener Daten, sodass der Personenbezug nicht mehr hergestellt werden kann. Anonyme Daten fallen nicht unter die DSGVO." },
    { term: "ANSI-SPARC-Architektur", def: "Drei-Ebenen-Modell eines DBMS mit externer, konzeptioneller und interner Ebene, das Datenunabhängigkeit sicherstellen soll." },
    { term: "API", def: "Application Programming Interface – definierte Schnittstelle, über die Programme Daten und Funktionen austauschen." },
    { term: "BASE", def: "Konsistenzmodell verteilter NoSQL-Systeme: Basically Available, Soft State, Eventually Consistent." },
    { term: "Big Data", def: "Datenbestände, die wegen ihrer Menge, Entstehungsgeschwindigkeit und Vielfalt (Volume, Velocity, Variety) mit klassischen Methoden kaum zu verarbeiten sind." },
    { term: "Black-Box-Test", def: "Testverfahren, bei dem Testfälle aus der Anforderung abgeleitet werden, ohne den Programmcode zu kennen, z. B. mit Äquivalenzklassen und Grenzwerten." },
    { term: "BLOB", def: "Binary Large Object – Datentyp für große Binärdaten wie Bilder oder PDF-Dateien." },
    { term: "Byte Order Mark (BOM)", def: "Unsichtbare Bytefolge am Anfang einer Textdatei, die die Kodierung kennzeichnet (bei UTF-8: EF BB BF); falsch gelesen erscheint sie als „ï»¿“." },
    { term: "CAP-Theorem", def: "Aussage, dass ein verteiltes System Konsistenz, Verfügbarkeit und Partitionstoleranz nicht gleichzeitig vollständig garantieren kann." },
    { term: "CRUD", def: "Create, Read, Update, Delete – die vier Grundoperationen auf Daten; in SQL INSERT, SELECT, UPDATE, DELETE, in REST POST, GET, PUT/PATCH, DELETE." },
    { term: "CSV", def: "Comma-Separated Values – Textformat für Tabellendaten mit einem Datensatz pro Zeile und Feldern, die durch Komma oder Semikolon getrennt sind." },
    { term: "Data Dictionary", def: "Systemkatalog des DBMS mit Metadaten über Tabellen, Spalten, Datentypen, Schlüssel, Indizes, Views und Rechte." },
    { term: "Data Governance", def: "Ordnungsrahmen aus Rollen, Regeln und Prozessen für einen korrekten, sicheren und rechtskonformen Umgang mit Unternehmensdaten." },
    { term: "Data Lake", def: "Zentraler Speicher für Rohdaten in beliebigen Formaten; die Struktur wird erst bei der Auswertung festgelegt (Schema-on-Read)." },
    { term: "Data Warehouse", def: "Zentrale Datenbank mit bereinigten, integrierten Daten aus verschiedenen Quellen, optimiert für Auswertungen und Berichte." },
    { term: "Datenbank (DB)", def: "Strukturierter, zusammengehörender Datenbestand, der von einem DBMS verwaltet wird." },
    { term: "Datenbankmanagementsystem (DBMS)", def: "Software, die Datenbanken verwaltet und alle Zugriffe auf die Daten steuert, z. B. MariaDB, PostgreSQL oder Microsoft SQL Server." },
    { term: "Datenbanksystem (DBS)", def: "Gesamtheit aus DBMS und den von ihm verwalteten Datenbanken; im weiteren Sinn einschließlich Hardware, Anwendungsprogrammen und Benutzern." },
    { term: "Datenunabhängigkeit", def: "Trennung von Anwendungen und Datenspeicherung: Änderungen an der Speicherung (physisch) oder am Schema (logisch) erfordern keine Programmänderung." },
    { term: "DCL", def: "Data Control Language – SQL-Befehle zur Rechteverwaltung, vor allem GRANT und REVOKE." },
    { term: "DDL", def: "Data Definition Language – SQL-Befehle zum Anlegen, Ändern und Löschen von Datenbankstrukturen (CREATE, ALTER, DROP)." },
    { term: "Deadlock", def: "Verklemmung, bei der Transaktionen gegenseitig auf Sperren der jeweils anderen warten; das DBMS löst sie durch Abbruch einer Transaktion." },
    { term: "Denormalisierung", def: "Bewusstes Zulassen von Redundanz, z. B. im Data Warehouse, um Auswertungen ohne viele Joins zu beschleunigen." },
    { term: "DML", def: "Data Manipulation Language – SQL-Befehle zum Einfügen, Ändern und Löschen von Datensätzen (INSERT, UPDATE, DELETE)." },
    { term: "DSN", def: "Data Source Name – unter einem Namen gespeicherte ODBC-Verbindung mit Treiber, Server, Datenbank und ggf. Benutzer." },
    { term: "Entitätstyp", def: "Menge gleichartiger Objekte der realen Welt mit gemeinsamen Attributen; im ER-Modell als Rechteck dargestellt." },
    { term: "ER-Modell", def: "Grafisches, konzeptionelles Datenmodell aus Entitätstypen, Attributen und Beziehungen mit Kardinalitäten (nach Peter Chen)." },
    { term: "ETL", def: "Extract, Transform, Load – Prozess, der Daten aus Quellen liest, bereinigt und vereinheitlicht und in ein Zielsystem lädt." },
    { term: "Fremdschlüssel", def: "Attribut, das auf den Primärschlüssel einer anderen (oder derselben) Tabelle verweist und so eine Beziehung herstellt." },
    { term: "Funktionale Abhängigkeit", def: "B ist funktional abhängig von A (A → B), wenn zu jedem Wert von A genau ein Wert von B gehört." },
    { term: "Git", def: "Verteiltes Versionsverwaltungssystem, das Änderungen als Commits speichert und paralleles Arbeiten in Branches mit anschließendem Merge ermöglicht." },
    { term: "Index", def: "Zusätzliche sortierte Zugriffsstruktur (meist ein B-Baum), die Suchen beschleunigt, aber Speicher kostet und Schreibzugriffe verlangsamt." },
    { term: "JSON", def: "JavaScript Object Notation – textbasiertes Datenformat aus Objekten, Arrays und Schlüssel-Wert-Paaren; Standard bei Web-APIs." },
    { term: "Kanban", def: "Agile Methode, die Aufgaben auf einem Board in einem kontinuierlichen Fluss steuert und die gleichzeitig laufende Arbeit mit WIP-Limits begrenzt." },
    { term: "Kardinalität", def: "Angabe, mit wie vielen Entitäten des anderen Typs eine Entität in Beziehung stehen kann, z. B. 1:1, 1:n oder n:m." },
    { term: "Krähenfuß-Notation", def: "ER-Notation, bei der Kreis (0), Strich (1) und Krähenfuß (viele) am Linienende Minimum und Maximum einer Beziehung angeben." },
    { term: "Lost Update", def: "Mehrbenutzerproblem, bei dem eine Änderung durch eine gleichzeitig ausgeführte andere Änderung überschrieben wird." },
    { term: "Normalisierung", def: "Schrittweise Zerlegung von Tabellen nach Normalformen, um Redundanz und Anomalien zu vermeiden." },
    { term: "NoSQL", def: "„Not only SQL“ – Sammelbegriff für nicht-relationale Datenbanken wie Key-Value-, Dokument-, Spalten- und Graphdatenbanken." },
    { term: "OAuth 2.0", def: "Autorisierungsverfahren, mit dem ein Nutzer einer Anwendung über ein Access Token begrenzten Zugriff auf eine API gewährt, ohne sein Passwort weiterzugeben." },
    { term: "ODBC", def: "Open Database Connectivity – herstellerunabhängige Datenbankschnittstelle, bei der ein Treiber zwischen Anwendung und DBMS vermittelt." },
    { term: "OLAP / OLTP", def: "OLTP (Online Transaction Processing) bezeichnet operative Systeme mit vielen kleinen Transaktionen; OLAP (Online Analytical Processing) bezeichnet Analysesysteme mit großen Lesezugriffen." },
    { term: "Open Data", def: "Daten, die jeder frei nutzen, weiterverarbeiten und weitergeben darf; die jeweilige Lizenz (z. B. CC BY 4.0) regelt Auflagen wie die Namensnennung." },
    { term: "Prepared Statement", def: "Vorbereitete SQL-Anweisung mit Platzhaltern, der Eingaben getrennt als Werte übergeben werden – wirksamer Schutz gegen SQL-Injection." },
    { term: "Primärschlüssel", def: "Attribut oder Attributkombination, die jeden Datensatz einer Tabelle eindeutig identifiziert und nie NULL ist." },
    { term: "Pseudonymisierung", def: "Ersetzen identifizierender Merkmale durch Kennungen; mit getrennt aufbewahrten Zusatzinformationen bleibt der Personenbezug herstellbar." },
    { term: "Rate Limiting", def: "Begrenzung der Anfragen pro Zeitraum an eine API; bei Überschreitung antwortet der Server mit HTTP 429 Too Many Requests." },
    { term: "Redundanz", def: "Mehrfache Speicherung derselben Information; unkontrollierte Redundanz führt zu Pflegeaufwand und Inkonsistenzen." },
    { term: "Referenzielle Integrität", def: "Regel, dass jeder Fremdschlüsselwert als Primärschlüsselwert in der referenzierten Tabelle existieren muss (oder NULL ist, falls erlaubt)." },
    { term: "REST", def: "Architekturstil für Web-APIs: Ressourcen werden über URLs adressiert, Aktionen über HTTP-Methoden ausgedrückt, Anfragen sind zustandslos." },
    { term: "Scrum", def: "Agiles Vorgehensmodell mit festen Sprints von höchstens einem Monat, den Verantwortlichkeiten Product Owner, Scrum Master und Developers sowie festen Events." },
    { term: "Serialisierung", def: "Umwandlung von Objekten aus dem Arbeitsspeicher in ein speicherbares oder übertragbares Format wie JSON oder XML." },
    { term: "SQL", def: "Structured Query Language – standardisierte Sprache zum Definieren, Abfragen, Ändern und Schützen von Daten in relationalen Datenbanken." },
    { term: "SQL-Injection", def: "Angriff, bei dem über ungeprüfte Eingaben eigener SQL-Code in eine Datenbankabfrage eingeschleust wird." },
    { term: "Testdatengenerator", def: "Werkzeug, das große Mengen realistischer, aber künstlicher Testdaten erzeugt, sodass keine echten personenbezogenen Daten zum Testen nötig sind." },
    { term: "Transaktion", def: "Folge von Datenbankoperationen, die als logische Einheit ganz (COMMIT) oder gar nicht (ROLLBACK) ausgeführt wird." },
    { term: "View", def: "Gespeicherte SELECT-Abfrage, die wie eine virtuelle Tabelle genutzt wird und keine eigenen Daten speichert." },
    { term: "XML", def: "Extensible Markup Language – textbasiertes, hierarchisches Auszeichnungsformat mit Start- und End-Tags, prüfbar gegen ein Schema (XSD)." },
    { term: "Zwischentabelle", def: "Tabelle zur Auflösung einer n:m-Beziehung, die die Primärschlüssel beider beteiligten Tabellen als Fremdschlüssel enthält." }
  ],
  links: [
    { title: "PostgreSQL-Dokumentation", url: "https://www.postgresql.org/docs/current/", note: "Offizielles Handbuch mit SQL-Tutorial (englisch)" },
    { title: "MySQL-Dokumentation", url: "https://dev.mysql.com/doc/", note: "Offizielle Referenz zu MySQL, weitgehend auch für MariaDB nutzbar (englisch)" },
    { title: "Microsoft Learn – SQL-Dokumentation", url: "https://learn.microsoft.com/de-de/sql/", note: "Dokumentation zu SQL Server und T-SQL" },
    { title: "DSGVO im Volltext (EUR-Lex)", url: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679", note: "Amtlicher Text, u. a. Art. 4, 5, 20, 28 und 32" },
    { title: "BfDI – Bundesbeauftragte für den Datenschutz und die Informationsfreiheit", url: "https://www.bfdi.bund.de/", note: "Informationen zu Datenschutz, Anonymisierung und Pseudonymisierung" },
    { title: "BSI – Bundesamt für Sicherheit in der Informationstechnik", url: "https://www.bsi.bund.de/", note: "IT-Grundschutz-Kompendium, u. a. Baustein APP.4.3 Relationale Datenbanken" },
    { title: "JSON – Einführung (json.org)", url: "https://www.json.org/json-de.html", note: "Syntax und Datentypen von JSON" },
    { title: "RFC 4180 – CSV-Format", url: "https://www.rfc-editor.org/rfc/rfc4180", note: "Beschreibung des CSV-Formats (englisch)" },
    { title: "RFC 9110 – HTTP Semantics", url: "https://www.rfc-editor.org/rfc/rfc9110", note: "Offizielle Definition der HTTP-Methoden und Statuscodes (englisch)" },
    { title: "Python-Dokumentation: sqlite3", url: "https://docs.python.org/3/library/sqlite3.html", note: "Datenbankzugriff aus Python mit Platzhaltern (englisch)" },
    { title: "GovData – Datenportal für Deutschland", url: "https://www.govdata.de/", note: "Offene Verwaltungsdaten mit Lizenzangaben" }
  ]
});
