/* LF 5 – Software zur Verwaltung von Daten anpassen */
LEARN.module({
  id: "lf05",
  type: "lf",
  nr: 5,
  title: "Software zur Verwaltung von Daten anpassen",
  year: 1,
  hours: 80,
  exam: ["AP1", "AP2"],
  summary: "Du lernst, wie Informationen als Daten abgebildet, gespeichert und mit selbst geschriebener Software (Python) verarbeitet werden – von Variablen und Kontrollstrukturen über Dateien, JSON, Webdaten und OOP bis zu Pseudocode, Schreibtischtest, UML, Softwaretests und einfachen ER-Modellen.",
  goals: [
    "Programmiersprachen einordnen (Compiler, Interpreter, prozedural, objektorientiert, Skriptsprachen) und eine Sprache – auch für statische oder dynamische Webseiten – begründet auswählen",
    "Python-Programme mit Variablen, Datentypen, Operatoren, Verzweigungen, Schleifen und Funktionen schreiben und lesen",
    "Daten in Listen, Tupeln, Dictionaries und Mengen verwalten und in Dateien (Text, CSV, JSON) dauerhaft speichern",
    "Algorithmen in Pseudocode darstellen, einen Schreibtischtest durchführen und Such- und Sortierverfahren nachvollziehen",
    "Fehler in Quellcode finden, Fehlerarten unterscheiden und Ausnahmen mit try/except behandeln",
    "Testfälle mit Äquivalenzklassen und Grenzwerten entwickeln sowie Black-Box- und White-Box-Tests unterscheiden",
    "Klassen mit Attributen und Methoden entwerfen, Kapselung, Vererbung und Polymorphie erklären und als UML-Klassendiagramm darstellen",
    "Abläufe und Anforderungen mit UML-Aktivitäts-, Anwendungsfall- und Sequenzdiagrammen modellieren",
    "Daten nach Art, Format, Schutzbedarf und Speicherbedarf analysieren und ein einfaches ER-Modell mit Kardinalitäten erstellen",
    "Anforderungen in Lasten- und Pflichtenheft erfassen, ein Vorgehensmodell wählen und Software dokumentieren"
  ],
  school: {
    hinweise: "In der AIFS51 wird LF 5 mit Python unterrichtet. Zu fast jedem Kapitel gibt es kleine Programmieraufgaben mit automatischer Prüfung (VPL), dazu einen Leistungsnachweis als Test und Projektarbeiten in Gruppen (z. B. Datenextraktion, QR-Code-Generator). Für die AP1 zählen vor allem Pseudocode, Schreibtischtest, Fehler finden, UML (Anwendungsfall-, Klassen-, Aktivitätsdiagramm) und einfache ER-Modelle – übe deshalb auch ohne Rechner auf Papier.",
    themen: [
      "Einführung in Python & Operatoren",
      "Datentypen",
      "Interaktive Programme (Ein-/Ausgabe)",
      "Kontrollstrukturen",
      "Funktionen",
      "Module (math, random, datetime, time, collections, eigene Module)",
      "Kollektionen (Liste, Tupel, Dictionary, Menge)",
      "Datenspeicherung (Dateien, JSON, Webdaten)",
      "Textverarbeitung & reguläre Ausdrücke",
      "Zugriff auf die Systemumgebung (venv, pip)",
      "Grafische Benutzeroberflächen",
      "Fehlersuche und Fehlervermeidung",
      "Objektorientierte Programmierung (Kapselung, Vererbung, Polymorphie, abstrakte Methoden)",
      "Projektarbeit"
    ]
  },
  topics: [
    {
      id: "sprachen",
      title: "Programmiersprachen, Übersetzer & Werkzeuge",
      exam: ["AP1", "AP2"],
      summary: "Compiler, Linker und Interpreter unterscheiden, prozedurale und objektorientierte Sprachen sowie Skriptsprachen einordnen, Standard- und Individualsoftware abwägen, IDE, Bibliotheken, Frameworks, Git und KI-Assistenten kennen.",
      html: `
        <p>Ein Prozessor versteht nur <strong>Maschinencode</strong> – Binärbefehle seines Befehlssatzes. Programme schreibst du aber in einer <strong>Hochsprache</strong> wie Python, Java oder C#. Damit daraus ausführbare Befehle werden, braucht es ein <strong>Übersetzungsprogramm</strong>.</p>
        <h5>Compiler, Linker, Interpreter</h5>
        <ul>
          <li><strong>Compiler:</strong> übersetzt den <em>gesamten</em> Quellcode vor dem Start in Maschinen- bzw. Objektcode. Syntaxfehler meldet er schon beim Übersetzen. Ergebnis ist eine eigenständig ausführbare Datei (z. B. <code>.exe</code>), die schnell läuft – aber nur auf der Zielplattform.</li>
          <li><strong>Linker (Binder):</strong> verbindet die vom Compiler erzeugten Objektdateien mit den benutzten Bibliotheken zu einem lauffähigen Programm.</li>
          <li><strong>Interpreter:</strong> liest den Quellcode zur Laufzeit und führt ihn Anweisung für Anweisung aus. Es entsteht keine eigene Programmdatei; derselbe Code läuft auf jedem Rechner, auf dem der Interpreter installiert ist.</li>
          <li><strong>Mischform (Bytecode):</strong> Java und C# werden in plattformunabhängigen Zwischencode übersetzt, den eine virtuelle Maschine (JVM bzw. .NET) ausführt. Auch Python erzeugt intern Bytecode, gilt aber als interpretierte Sprache.</li>
        </ul>
        <table><thead><tr><th>Kriterium</th><th>Compiler</th><th>Interpreter</th></tr></thead><tbody>
          <tr><td>Übersetzung</td><td>einmal vollständig vor der Ausführung</td><td>bei jeder Ausführung schrittweise zur Laufzeit</td></tr>
          <tr><td>Ergebnis</td><td>ausführbare Datei</td><td>keine – Quellcode + Interpreter nötig</td></tr>
          <tr><td>Geschwindigkeit</td><td>hoch</td><td>geringer</td></tr>
          <tr><td>Portabilität</td><td>für jede Plattform neu übersetzen</td><td>läuft überall, wo der Interpreter vorhanden ist</td></tr>
          <tr><td>Fehlererkennung</td><td>Syntaxfehler vor dem Start</td><td>viele Fehler erst, wenn die Zeile erreicht wird (Python prüft immerhin die Syntax der ganzen Datei vorab)</td></tr>
          <tr><td>Beispiele</td><td>C, C++, Rust, Go</td><td>Python, PHP, JavaScript, Bash, PowerShell</td></tr>
        </tbody></table>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Auch ein Interpreter übersetzt – nur eben zur Laufzeit und Stück für Stück. „Ein Interpreter übersetzt nicht“ ist falsch. Java ist weder rein kompiliert noch rein interpretiert (Bytecode + JVM).</div>
        <h5>Paradigmen: prozedural und objektorientiert</h5>
        <div class="grid-2">
          <div class="callout merke"><strong>Prozedural:</strong> Das Programm ist eine Folge von Anweisungen, gegliedert in Prozeduren und Funktionen. Daten und Funktionen sind getrennt; Funktionen bekommen die Daten als Parameter. Beispiele: C, Pascal, Shell-Skripte.</div>
          <div class="callout merke"><strong>Objektorientiert (OOP):</strong> Objekte bündeln Daten (Attribute) und Verhalten (Methoden); ihr Bauplan ist die Klasse. Vorteile: Kapselung, Wiederverwendung, gute Wartbarkeit großer Projekte. Beispiele: Java, C#, C++, Python.</div>
        </div>
        <p>Python ist eine <strong>Multiparadigmen-Sprache</strong>: Du kannst rein prozedural (nur Funktionen) oder objektorientiert (mit Klassen) programmieren. <strong>Skriptsprachen</strong> wie Bash, PowerShell oder Python werden interpretiert und eignen sich besonders, um wiederkehrende Administrationsaufgaben zu automatisieren – ein Skript ist schnell geändert, weil kein Übersetzungsschritt nötig ist.</p>
        <h5>Skriptsprachen im Vergleich</h5>
        <table><thead><tr><th>Sprache</th><th>typische Plattform</th><th>Besonderheit</th></tr></thead><tbody>
          <tr><td>Bash (Shell-Skript)</td><td>Linux, macOS</td><td>verknüpft Systembefehle über Pipes (<code>|</code>), ideal für Server-Administration</td></tr>
          <tr><td>PowerShell</td><td>Windows (PowerShell 7 auch Linux/macOS)</td><td>Cmdlets nach dem Muster Verb-Nomen; die Pipeline gibt Objekte statt Text weiter</td></tr>
          <tr><td>Python</td><td>plattformübergreifend</td><td>sehr viele Bibliotheken (CSV, JSON, Web, Datenbanken), gut lesbar</td></tr>
        </tbody></table>
        <pre><code># Aufgabe: Anzahl der .log-Dateien in einem Ordner ausgeben
ls /var/log/*.log | wc -l                          # Bash
(Get-ChildItem C:\\Logs -Filter *.log).Count        # PowerShell
python -c "import glob; print(len(glob.glob('C:/Logs/*.log')))"   # Python</code></pre>
        <h5>Werkzeuge der Softwareentwicklung</h5>
        <table><thead><tr><th>Werkzeug</th><th>Aufgabe</th></tr></thead><tbody>
          <tr><td>IDE (integrierte Entwicklungsumgebung)</td><td>bündelt Editor mit Syntaxhervorhebung, Autovervollständigung, Debugger, Ausführen/Build und Versionsverwaltung – z. B. VS Code, PyCharm, Visual Studio</td></tr>
          <tr><td>Debugger</td><td>Programm schrittweise ausführen, Haltepunkte setzen, Variablen beobachten</td></tr>
          <tr><td>Bibliothek</td><td>Sammlung fertiger Funktionen/Klassen, die <em>dein</em> Code aufruft (z. B. <code>math</code>, <code>requests</code>)</td></tr>
          <tr><td>Framework</td><td>Programmgerüst, das den Ablauf vorgibt und <em>deinen</em> Code an festgelegten Stellen aufruft (z. B. Django oder Flask für Webanwendungen)</td></tr>
          <tr><td>Paketverwaltung</td><td>externe Bibliotheken installieren, z. B. <code>pip install qrcode</code></td></tr>
          <tr><td>Versionsverwaltung (Git)</td><td>Änderungen am Quellcode nachvollziehbar speichern, im Team zusammenführen, alte Stände wiederherstellen</td></tr>
        </tbody></table>
        <pre><code>git init                     # neues Repository anlegen
git add main.py              # Änderung vormerken (Staging)
git commit -m "CSV-Import"   # Stand mit Nachricht speichern
git switch -c export         # neuen Zweig (Branch) anlegen und wechseln
git switch main              # zurück auf den Hauptzweig
git merge export             # Änderungen des Zweigs übernehmen
git tag v1.0                 # Version markieren
git log --oneline            # Versionsgeschichte anzeigen
git revert a1b2c3d           # fehlerhaften Commit durch Gegen-Commit rückgängig machen
git push                     # Commits ins entfernte Repository übertragen</code></pre>
        <h5>Standard- oder Individualsoftware?</h5>
        <p><strong>Standardsoftware</strong> (Office-Paket, ERP-System, Ticketsystem) ist sofort verfügbar, erprobt und günstig, passt aber nicht immer genau. Sie wird durch <em>Customizing</em> angepasst: Einstellungen, Makros, Skripte, Erweiterungen und Schnittstellen (APIs). <strong>Individualsoftware</strong> wird genau nach den Anforderungen entwickelt – passgenau, aber teurer, langsamer verfügbar und abhängig vom Entwickler. Kriterien für die Auswahl: Anpassbarkeit, Wartbarkeit, Schnittstellen, Kosten, Lizenzmodell (Open Source oder proprietär).</p>
        <h5>Programmiersprache begründet auswählen</h5>
        <ul>
          <li><strong>Einsatzzweck:</strong> Automatisierung (Python, PowerShell), Web (JavaScript, PHP), hardwarenah/Mikrocontroller (C), Unternehmensanwendung (Java, C#)</li>
          <li><strong>Performance und Speicherverbrauch</strong> – kompilierte Sprachen sind meist schneller</li>
          <li><strong>Portabilität</strong> auf die Zielsysteme, verfügbare <strong>Bibliotheken/Frameworks</strong>, IDE-Unterstützung</li>
          <li><strong>Know-how im Team</strong>, Community und Dokumentation, Lizenzkosten, Wartbarkeit</li>
        </ul>
        <h5>KI-Assistenten in der Softwareentwicklung</h5>
        <p>Generative KI – als Code-Assistent in der IDE oder als Chatbot – schlägt Code vor, erklärt fremden Code, schreibt Kommentare und Docstrings, erzeugt Testfälle und deutet Fehlermeldungen. Das beschleunigt Routinearbeit, ersetzt aber nicht dein eigenes Verständnis: Verantwortlich für den Code bleibst du.</p>
        <table><thead><tr><th>Chancen</th><th>Risiken</th></tr></thead><tbody>
          <tr><td>schneller zu Grundgerüsten, regulären Ausdrücken, Skripten</td><td>plausibel wirkender, aber falscher Code (logische Fehler)</td></tr>
          <tr><td>Erklärung von unbekanntem Code und Fehlermeldungen</td><td>unsicherer Code, z. B. anfällig für Injection-Angriffe</td></tr>
          <tr><td>Vorschläge für Testfälle und Dokumentation</td><td>veraltete oder gar nicht existierende Funktionen und Pakete</td></tr>
          <tr><td>Lernhilfe beim Einstieg in eine neue Sprache</td><td>Datenschutz und Geschäftsgeheimnisse: Quellcode, Kundendaten oder Passwörter landen beim Anbieter; dazu Lizenzfragen, Kosten und Anbieterabhängigkeit</td></tr>
        </tbody></table>
        <div class="callout achtung"><strong>Regel für KI-Code:</strong> Behandle ihn wie Code eines unbekannten Kollegen – lesen, verstehen, testen, reviewen. Keine personenbezogenen Daten, Zugangsdaten oder vertraulichen Quelltexte in öffentliche KI-Dienste eingeben; nur vom Betrieb freigegebene Werkzeuge nutzen (z. B. Unternehmenslizenz, Verarbeitung in der EU, Eingaben werden nicht zum Training verwendet). Seit Februar 2025 verlangt die EU-KI-Verordnung außerdem, dass Unternehmen, die KI-Systeme einsetzen, Maßnahmen zur KI-Kompetenz ihrer Beschäftigten ergreifen, z. B. Schulungen (Art. 4, Stand 2026).</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Nennen Sie zwei Unterschiede zwischen Compiler und Interpreter.“ – „Erläutern Sie den Unterschied zwischen prozeduraler und objektorientierter Programmierung.“ – „Begründen Sie die Wahl einer Programmiersprache für das Skript.“ Beim Operator <em>begründen</em> immer mit Bezug zur Situation antworten: „… eignet sich, weil das Team bereits Python beherrscht und eine fertige Bibliothek für CSV-Dateien vorhanden ist.“ Seit 2025 kommt außerdem regelmäßig KI vor: „Nennen Sie je zwei Vor- und Nachteile …“ oder „Beschreiben Sie Maßnahmen für einen datenschutzkonformen Einsatz.“</div>
      `
    },
    {
      id: "python-basics",
      title: "Python-Grundlagen: Variablen, Datentypen & Operatoren",
      exam: ["AP1", "AP2"],
      summary: "Variablen, die Datentypen int, float, str und bool, Typumwandlung, arithmetische und logische Operatoren inklusive // und %, Ein- und Ausgabe mit input(), print() und f-Strings.",
      html: `
        <p>Ein Python-Programm ist eine Textdatei (<code>.py</code>), die der Interpreter von oben nach unten abarbeitet (<strong>Sequenz</strong>). Blöcke entstehen durch <strong>Einrückung</strong> (üblich: 4 Leerzeichen), Kommentare beginnen mit <code>#</code>.</p>
        <h5>Variablen</h5>
        <p>Eine Variable ist ein <strong>Name, der auf einen Wert im Speicher verweist</strong>. Sie entsteht bei der ersten Zuweisung mit <code>=</code>. Python ist <strong>dynamisch typisiert</strong>: Der Datentyp gehört zum Wert, nicht zur Variablen – dieselbe Variable kann später einen Wert anderen Typs erhalten. Namensregeln: Buchstaben, Ziffern und <code>_</code>, nicht mit einer Ziffer beginnen, keine Schlüsselwörter (<code>if</code>, <code>for</code> …), Groß-/Kleinschreibung zählt. Konvention nach PEP 8: <code>snake_case</code>, z. B. <code>netto_preis</code>.</p>
        <h5>Die vier Grunddatentypen</h5>
        <table><thead><tr><th>Typ</th><th>Bedeutung</th><th>Beispiele</th></tr></thead><tbody>
          <tr><td><code>int</code></td><td>ganze Zahl (beliebig groß)</td><td><code>42</code>, <code>-7</code>, <code>0</code></td></tr>
          <tr><td><code>float</code></td><td>Gleitkommazahl – Punkt statt Komma!</td><td><code>3.14</code>, <code>-0.5</code>, <code>1e3</code></td></tr>
          <tr><td><code>str</code></td><td>Zeichenkette, unveränderlich</td><td><code>"Heide"</code>, <code>'25746'</code></td></tr>
          <tr><td><code>bool</code></td><td>Wahrheitswert</td><td><code>True</code>, <code>False</code></td></tr>
        </tbody></table>
        <p>Mit <code>type(x)</code> fragst du den Typ ab; <code>None</code> steht für „kein Wert“. Konstanten kennt Python nicht wirklich – per Konvention schreibt man sie groß: <code>MWST_SATZ = 0.19</code>.</p>
        <h5>Datentypen in Pseudocode, UML und anderen Sprachen</h5>
        <table><thead><tr><th>Pseudocode / UML</th><th>Java / C#</th><th>Python</th><th>typische Verwendung</th></tr></thead><tbody>
          <tr><td>Integer (Ganzzahl)</td><td><code>int</code>, <code>long</code></td><td><code>int</code></td><td>Menge, Anzahl, Personalnummer</td></tr>
          <tr><td>Float / Double (Gleitkomma)</td><td><code>float</code>, <code>double</code></td><td><code>float</code> (intern 64 Bit wie double)</td><td>Messwert, Temperatur</td></tr>
          <tr><td>Boolean (Wahrheitswert)</td><td><code>boolean</code> / <code>bool</code></td><td><code>bool</code></td><td>aktiv, bezahlt, defekt</td></tr>
          <tr><td>Char (ein Zeichen)</td><td><code>char</code></td><td>kein eigener Typ – <code>str</code> der Länge 1</td><td>Kennbuchstabe, z. B. Laufwerk „C“ oder Prioritätsklasse „A“</td></tr>
          <tr><td>String (Zeichenkette)</td><td><code>String</code> / <code>string</code></td><td><code>str</code></td><td>Name, E-Mail, Postleitzahl</td></tr>
        </tbody></table>
        <p>Java und C# sind <strong>statisch typisiert</strong>: Der Typ steht bei der Deklaration fest (<code>int menge = 5;</code>) und wird vom Compiler geprüft. In Python ergibt sich der Typ zur Laufzeit aus dem Wert.</p>
        <div class="callout tipp"><strong>Datentyp begründet wählen:</strong> Postleitzahlen, Telefon- und Artikelnummern speicherst du als <strong>String</strong> – mit ihnen wird nicht gerechnet, und führende Nullen (PLZ 01067) gingen als Zahl verloren. Geldbeträge brauchen exakte Nachkommastellen (Festkomma, z. B. <code>decimal</code> bzw. <code>DECIMAL</code> in der Datenbank), Mengen sind Ganzzahlen, Ja/Nein-Angaben Wahrheitswerte.</div>
        <h5>Typumwandlung (Casting)</h5>
        <pre><code>int("42")         # 42
float("3.5")      # 3.5
str(7) + "7"      # '77'  – Texte werden verkettet
int(3.9)          # 3     – Nachkommastellen werden abgeschnitten, nicht gerundet
int("3.5")        # ValueError – der Text muss eine ganze Zahl darstellen
bool(0), bool("") # (False, False)
bool("0")         # True  – jeder nicht leere Text ist wahr</code></pre>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> <code>input()</code> liefert <em>immer</em> einen <code>str</code>. <code>"5" + 3</code> erzeugt einen <code>TypeError</code>, <code>"5" * 3</code> ergibt <code>"555"</code>. Deshalb vor dem Rechnen umwandeln: <code>menge = int(input("Menge: "))</code>.</div>
        <h5>Operatoren</h5>
        <table><thead><tr><th>Operator</th><th>Bedeutung</th><th>Beispiel → Ergebnis</th></tr></thead><tbody>
          <tr><td><code>+ - *</code></td><td>Addition, Subtraktion, Multiplikation</td><td><code>3 + 4 * 2</code> → <code>11</code></td></tr>
          <tr><td><code>/</code></td><td>Division, Ergebnis immer <code>float</code></td><td><code>10 / 2</code> → <code>5.0</code></td></tr>
          <tr><td><code>//</code></td><td>ganzzahlige Division (rundet ab)</td><td><code>17 // 5</code> → <code>3</code></td></tr>
          <tr><td><code>%</code></td><td>Modulo = Rest der ganzzahligen Division</td><td><code>17 % 5</code> → <code>2</code></td></tr>
          <tr><td><code>**</code></td><td>Potenz</td><td><code>2 ** 10</code> → <code>1024</code></td></tr>
          <tr><td><code>== != &lt; &lt;= &gt; &gt;=</code></td><td>Vergleich, Ergebnis <code>bool</code></td><td><code>7 != 7</code> → <code>False</code></td></tr>
          <tr><td><code>and or not</code></td><td>logische Verknüpfung</td><td><code>5 &gt; 3 and 2 &gt; 4</code> → <code>False</code></td></tr>
          <tr><td><code>+= -= *=</code></td><td>verkürzte Zuweisung</td><td><code>x += 1</code> wie <code>x = x + 1</code></td></tr>
        </tbody></table>
        <p>Rangfolge von hoch nach niedrig: <code>**</code> → <code>* / // %</code> → <code>+ -</code> → Vergleiche → <code>not</code> → <code>and</code> → <code>or</code>. Klammern haben immer Vorrang.</p>
        <div class="callout beispiel"><strong>Beispiel – Einsatzzeit umrechnen:</strong> Ein Servicetechniker war 137 Minuten beim Kunden.<br><code>stunden = 137 // 60</code> → <code>2</code><br><code>minuten = 137 % 60</code> → <code>17</code><br>Probe: 2 × 60 + 17 = 137 ✓ – Ausgabe „2 h 17 min“. Mit <code>zahl % 2 == 0</code> prüfst du, ob eine Zahl gerade ist.</div>
        <h5>Ein- und Ausgabe, f-Strings</h5>
        <pre><code>name = input("Wie heißt du? ")            # Eingabe ist immer str
laenge = float(input("Länge in m: "))
breite = float(input("Breite in m: "))
flaeche = laenge * breite
print("Hallo", name)                      # Werte mit Leerzeichen getrennt
print(f"Fläche: {flaeche:.2f} m²")        # f-String mit 2 Nachkommastellen
print(f"{flaeche:.2f}".replace(".", ",")) # deutsches Dezimalkomma
print("A", "B", sep=";")                  # eigenes Trennzeichen → A;B</code></pre>
        <p>Formatangaben im f-String: <code>{x:.2f}</code> zwei Nachkommastellen, <code>{x:8.2f}</code> Breite 8, <code>{x:.1%}</code> als Prozent, <code>{n:03d}</code> mit führenden Nullen (7 → <code>007</code>).</p>
        <div class="callout achtung"><strong>Achtung Gleitkomma:</strong> Dezimalbrüche sind binär nicht exakt darstellbar. <code>0.1 + 0.2 == 0.3</code> ergibt <code>False</code> (Ergebnis 0.30000000000000004). Geldbeträge deshalb runden (<code>round(x, 2)</code>) oder mit dem Modul <code>decimal</code> rechnen.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Geben Sie die Ausgabe des Programmausschnitts an“ – mit <code>//</code>, <code>%</code>, Typumwandlung oder Verkettung von Texten. Rechne jede Zeile einzeln und notiere dir, welchen Typ (int, float, str) das Zwischenergebnis hat.</div>
      `
    },
    {
      id: "kontrollstrukturen",
      title: "Kontrollstrukturen & Schreibtischtest",
      exam: ["AP1", "AP2"],
      summary: "Verzweigungen mit if/elif/else, Schleifen mit for, while und range(), break und continue – und wie du Programmabläufe mit einer Trace-Tabelle von Hand nachvollziehst.",
      html: `
        <p>Jeder Algorithmus lässt sich aus drei Grundbausteinen zusammensetzen: <strong>Sequenz</strong> (Anweisungen nacheinander), <strong>Verzweigung</strong> (Auswahl) und <strong>Wiederholung</strong> (Schleife). In Python zeigt die <strong>Einrückung</strong>, welche Anweisungen zu einem Block gehören.</p>
        <h5>Verzweigung: if – elif – else</h5>
        <pre><code>bestellwert = float(input("Bestellwert in €: "))
if bestellwert &gt;= 250:
    versand = 0.0
elif bestellwert &gt;= 100:
    versand = 4.90
else:
    versand = 6.90
print(f"Versandkosten: {versand:.2f} €")</code></pre>
        <p>Die Bedingungen werden von oben nach unten geprüft; nur der <strong>erste</strong> zutreffende Zweig wird ausgeführt. Bereichsprüfungen lassen sich verketten (<code>if 18.5 &lt;= bmi &lt; 25:</code>), Bedingungen verknüpfst du mit <code>and</code>, <code>or</code> und <code>not</code>.</p>
        <div class="callout beispiel"><strong>Beispiel Schaltjahr:</strong> Ein Jahr ist ein Schaltjahr, wenn es durch 4, aber nicht durch 100 teilbar ist – außer es ist durch 400 teilbar.<br><code>schaltjahr = (jahr % 4 == 0 and jahr % 100 != 0) or jahr % 400 == 0</code><br>2024 → True · 2026 → False · 1900 → False (durch 100, aber nicht durch 400 teilbar) · 2000 → True</div>
        <h5>Schleifen</h5>
        <table><thead><tr><th>Art</th><th>Python</th><th>Einsatz</th></tr></thead><tbody>
          <tr><td>Zählschleife</td><td><code>for i in range(1, 11):</code></td><td>Anzahl der Durchläufe steht vorher fest</td></tr>
          <tr><td>Sammlung durchlaufen</td><td><code>for name in namen:</code></td><td>jedes Element einer Liste oder eines Strings bearbeiten</td></tr>
          <tr><td>kopfgesteuert</td><td><code>while bedingung:</code></td><td>Prüfung <em>vor</em> jedem Durchlauf – eventuell kein Durchlauf</td></tr>
          <tr><td>fußgesteuert (nachgebildet)</td><td><code>while True:</code> … <code>if …: break</code></td><td>mindestens ein Durchlauf, z. B. Eingabe wiederholen, bis sie gültig ist</td></tr>
        </tbody></table>
        <p><code>range(start, stop, schritt)</code> liefert Zahlen von <code>start</code> bis <strong>ausschließlich</strong> <code>stop</code>: <code>range(1, 6)</code> → 1, 2, 3, 4, 5 · <code>range(5)</code> → 0 bis 4 · <code>range(10, 0, -2)</code> → 10, 8, 6, 4, 2. <code>break</code> beendet die Schleife sofort, <code>continue</code> springt zum nächsten Durchlauf.</p>
        <pre><code># Eingabe wiederholen, bis eine Zahl von 1 bis 10 kommt
while True:
    eingabe = input("Priorität (1–10): ")
    if eingabe.isdigit() and 1 &lt;= int(eingabe) &lt;= 10:
        break
    print("Ungültig, bitte erneut.")

# Summe aller durch 3 teilbaren Zahlen von 1 bis 20
summe = 0
for z in range(1, 21):
    if z % 3 != 0:
        continue
    summe += z
print(summe)   # 63</code></pre>
        <div class="callout achtung"><strong>Typische Fehler:</strong> <code>=</code> (Zuweisung) statt <code>==</code> (Vergleich), falsche Einrückung, Obergrenze von <code>range</code> übersehen (Off-by-one-Fehler), in einer <code>while</code>-Schleife den Zähler nicht verändern → <strong>Endlosschleife</strong>.</div>
        <h5>Schreibtischtest (Trace-Tabelle)</h5>
        <p>Beim Schreibtischtest führst du ein Programm <strong>von Hand</strong> aus – ohne Rechner. Das ist ein statisches Prüfverfahren, mit dem du Ausgaben vorhersagst und logische Fehler findest. Vorgehen:</p>
        <ol>
          <li>Für jede Variable (bei Bedarf auch für Bedingungen und Ausgaben) eine Spalte anlegen.</li>
          <li>Startwerte eintragen.</li>
          <li>Anweisung für Anweisung abarbeiten; jede Wertänderung in einer neuen Zeile notieren.</li>
          <li>Bedingungen exakt prüfen (<code>&lt;</code> oder <code>&lt;=</code>?) und die Einrückung beachten.</li>
        </ol>
        <pre><code>zahl = 1234
quersumme = 0
while zahl &gt; 0:
    quersumme = quersumme + zahl % 10
    zahl = zahl // 10
print(quersumme)</code></pre>
        <table><thead><tr><th>Durchlauf</th><th>zahl &gt; 0?</th><th>zahl % 10</th><th>quersumme</th><th>zahl</th></tr></thead><tbody>
          <tr><td>Start</td><td>–</td><td>–</td><td>0</td><td>1234</td></tr>
          <tr><td>1</td><td>ja</td><td>4</td><td>4</td><td>123</td></tr>
          <tr><td>2</td><td>ja</td><td>3</td><td>7</td><td>12</td></tr>
          <tr><td>3</td><td>ja</td><td>2</td><td>9</td><td>1</td></tr>
          <tr><td>4</td><td>ja</td><td>1</td><td>10</td><td>0</td></tr>
          <tr><td>Ende</td><td>nein</td><td>–</td><td><strong>10</strong></td><td>0</td></tr>
        </tbody></table>
        <p>Ausgabe: <code>10</code> (= 1 + 2 + 3 + 4). Der Algorithmus zerlegt die Zahl mit <code>% 10</code> (letzte Ziffer) und <code>// 10</code> (letzte Ziffer abschneiden).</p>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Schreibtischtests kamen seit Herbst 2024 in jeder AP1 vor (bis zu 14 Punkte). Gegeben ist Pseudocode oder Programmcode mit Schleife und verschachtelten Verzweigungen; du füllst eine vorgegebene Tabelle aus oder gibst den Rückgabewert an. Arbeite Zeile für Zeile – ein früher Fehler zieht sich sonst durch die ganze Tabelle.</div>
      `
    },
    {
      id: "funktionen-module",
      title: "Funktionen & Module",
      exam: ["AP1", "AP2"],
      summary: "Funktionen mit Parametern, Default-Werten und Rückgabewerten schreiben, lokale und globale Variablen unterscheiden und Module wie math, random, datetime und os importieren.",
      html: `
        <p>Eine <strong>Funktion</strong> ist ein benannter, wiederverwendbarer Codeblock. Funktionen vermeiden doppelten Code, machen Programme übersichtlich und lassen sich einzeln testen.</p>
        <h5>Aufbau einer Funktion</h5>
        <pre><code>def brutto(netto, mwst=19):
    """Berechnet den Bruttopreis aus Nettopreis und Steuersatz in %."""
    betrag = netto * (1 + mwst / 100)
    return round(betrag, 2)

print(brutto(100))               # 119.0 – Standardwert mwst=19
print(brutto(100, 7))            # 107.0 – Positionsargumente
print(brutto(mwst=7, netto=50))  # 53.5  – Schlüsselwortargumente</code></pre>
        <ul>
          <li><strong>Parameter</strong> sind die Platzhalter in der Definition (<code>netto</code>, <code>mwst</code>), <strong>Argumente</strong> die konkreten Werte beim Aufruf (<code>100</code>).</li>
          <li><strong>Default-Parameter</strong> (<code>mwst=19</code>) sind beim Aufruf optional und stehen <em>hinter</em> den Pflichtparametern.</li>
          <li><code>return</code> beendet die Funktion und gibt einen Wert zurück. Ohne <code>return</code> liefert sie <code>None</code>. Mehrere Werte kommen als Tupel zurück: <code>return minimum, maximum</code>.</li>
          <li>Der <strong>Docstring</strong> in dreifachen Anführungszeichen dokumentiert die Funktion (abrufbar mit <code>help(brutto)</code>).</li>
        </ul>
        <div class="callout merke"><strong>Merke:</strong> <code>print()</code> <em>zeigt</em> einen Wert an, <code>return</code> <em>gibt ihn zurück</em>, damit der Aufrufer weiterrechnen kann. In Pseudocode unterscheidet man oft <strong>Prozedur</strong> (ohne Rückgabewert) und <strong>Funktion</strong> (mit Rückgabewert).</div>
        <h5>Gültigkeitsbereich (Scope)</h5>
        <p>Variablen, denen innerhalb einer Funktion ein Wert zugewiesen wird, sind <strong>lokal</strong>: Sie existieren nur während des Aufrufs. Variablen auf oberster Ebene sind <strong>global</strong>. Eine gleichnamige lokale Variable verdeckt die globale, verändert sie aber nicht.</p>
        <pre><code>zaehler = 10
def erhoehen():
    zaehler = 1          # neue lokale Variable
    zaehler += 5
    return zaehler

print(erhoehen(), zaehler)   # 6 10</code></pre>
        <p>Mit <code>global zaehler</code> könnte die Funktion die globale Variable ändern – das gilt als schlechter Stil. Besser: Werte als Parameter übergeben und per <code>return</code> zurückgeben.</p>
        <div class="callout achtung"><strong>Falle:</strong> Ein veränderlicher Standardwert wie <code>def f(liste=[])</code> wird nur einmal erzeugt und bei jedem Aufruf weiterbenutzt. Richtig ist <code>def f(liste=None)</code> und in der Funktion <code>if liste is None: liste = []</code>.</div>
        <h5>Module importieren</h5>
        <p>Ein <strong>Modul</strong> ist eine Python-Datei mit Funktionen, Klassen und Konstanten. Die <strong>Standardbibliothek</strong> gehört zu jeder Python-Installation; externe Pakete installierst du mit <code>pip</code>.</p>
        <pre><code>import math                          # Aufruf mit Modulname: math.sqrt()
from random import randint, choice   # Namen direkt übernehmen
import datetime as dt                # Modul unter Kurzname

print(math.sqrt(16), math.ceil(2.1), math.floor(2.9))   # 4.0 3 2
wurf = randint(1, 6)                 # 1 bis 6 – beide Grenzen inklusive!
gewinner = choice(["Ada", "Linus", "Grace"])
tage = (dt.date(2026, 9, 23) - dt.date(2026, 8, 1)).days
print(tage)                          # 53
datum = dt.datetime.strptime("24.12.2026", "%d.%m.%Y")   # Text → Datum</code></pre>
        <table><thead><tr><th>Modul</th><th>Wichtige Inhalte</th></tr></thead><tbody>
          <tr><td><code>math</code></td><td><code>sqrt</code>, <code>pi</code>, <code>ceil</code>, <code>floor</code></td></tr>
          <tr><td><code>random</code></td><td><code>randint(a, b)</code>, <code>random()</code>, <code>choice</code>, <code>shuffle</code>, <code>sample</code></td></tr>
          <tr><td><code>datetime</code></td><td><code>date</code>, <code>datetime</code>, <code>timedelta</code>, <code>strptime</code> / <code>strftime</code></td></tr>
          <tr><td><code>time</code></td><td><code>sleep(sekunden)</code>, <code>time()</code></td></tr>
          <tr><td><code>os</code></td><td>Dateien, Verzeichnisse, Umgebungsvariablen</td></tr>
          <tr><td><code>collections</code></td><td><code>Counter</code> (Häufigkeiten zählen), <code>deque</code> (Warteschlange)</td></tr>
        </tbody></table>
        <h5>Eigenes Modul</h5>
        <p>Speicherst du Funktionen in <code>geometrie.py</code>, nutzt du sie in <code>main.py</code> mit <code>import geometrie</code> und <code>geometrie.kreisflaeche(2)</code>. Code, der nur beim direkten Start der Datei laufen soll (z. B. Tests), gehört unter <code>if __name__ == "__main__":</code>. <code>from modul import *</code> holt alle Namen und kann eigene Namen unbemerkt überschreiben – besser gezielt importieren.</p>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Funktionskopf mit Parametern und Rückgabewert ergänzen, den Rückgabewert eines Aufrufs bestimmen, lokale und globale Variablen unterscheiden oder eine passende Bibliotheksfunktion nennen und ihren Nutzen beschreiben.</div>
      `
    },
    {
      id: "kollektionen",
      title: "Kollektionen & Datenstrukturen",
      exam: ["AP1", "AP2"],
      summary: "Listen, Tupel, Dictionaries und Mengen mit ihren Methoden, Indizes und Slicing, List Comprehensions sowie die Datenstrukturen Array, Stack und Queue.",
      html: `
        <p>Einzelne Variablen reichen nicht, wenn du 500 Inventarnummern oder alle Tickets eines Tages verwalten willst. Dafür gibt es <strong>Kollektionen</strong> (Sammlungen), in der Informatik allgemein <strong>Datenstrukturen</strong> genannt.</p>
        <h5>Die vier Kollektionen im Vergleich</h5>
        <table><thead><tr><th>Typ</th><th>Schreibweise</th><th>geordnet</th><th>veränderbar</th><th>Duplikate</th><th>Zugriff</th></tr></thead><tbody>
          <tr><td><code>list</code></td><td><code>[3, 1, 3]</code></td><td>ja</td><td>ja</td><td>ja</td><td>Index</td></tr>
          <tr><td><code>tuple</code></td><td><code>(3, 1, 3)</code></td><td>ja</td><td>nein</td><td>ja</td><td>Index</td></tr>
          <tr><td><code>dict</code></td><td><code>{"SSD": 12}</code></td><td>ja (Einfügereihenfolge)</td><td>ja</td><td>Schlüssel eindeutig</td><td>Schlüssel</td></tr>
          <tr><td><code>set</code></td><td><code>{3, 1}</code></td><td>nein</td><td>ja</td><td>nein</td><td>nur Prüfung mit <code>in</code></td></tr>
        </tbody></table>
        <p>Auch ein <code>str</code> ist eine geordnete, unveränderliche Folge (Sequenz) von Zeichen. Achtung: <code>{}</code> ist ein leeres <em>Dictionary</em>, eine leere Menge erzeugst du mit <code>set()</code>.</p>
        <h5>Listen</h5>
        <pre><code>teile = ["SSD", "RAM", "Netzteil"]
teile.append("Lüfter")    # hinten anhängen
teile.insert(0, "CPU")    # an Position 0 einfügen
teile.remove("RAM")       # ersten Treffer entfernen
letztes = teile.pop()     # letztes Element entfernen und liefern → 'Lüfter'
print(teile, len(teile))  # ['CPU', 'SSD', 'Netzteil'] 3
print(teile[0], teile[-1])  # CPU Netzteil
print("SSD" in teile)     # True</code></pre>
        <p>Der Index beginnt bei <strong>0</strong>; negative Indizes zählen von hinten (<code>-1</code> = letztes Element). Ein Zugriff außerhalb der Liste löst einen <code>IndexError</code> aus.</p>
        <h5>Slicing: [start:stop:schritt]</h5>
        <pre><code>z = [10, 20, 30, 40, 50, 60]
z[1:4]    # [20, 30, 40]  – stop gehört nicht dazu
z[:2]     # [10, 20]
z[-2:]    # [50, 60]
z[::2]    # [10, 30, 50]
z[::-1]   # [60, 50, 40, 30, 20, 10] – umgedreht</code></pre>
        <h5>Dictionaries und Mengen</h5>
        <pre><code>lager = {"SSD": 12, "RAM": 30}
lager["Maus"] = 45               # neuer Eintrag
lager["SSD"] -= 2                # Wert ändern → 10
print(lager.get("Monitor", 0))   # 0 statt KeyError
for artikel, menge in lager.items():
    print(f"{artikel}: {menge}")

gruppe_a = {"alice", "bob", "carol"}
gruppe_b = {"bob", "dave"}
gruppe_a &amp; gruppe_b    # Schnittmenge  {'bob'}
gruppe_a | gruppe_b    # Vereinigung   (alle vier Namen)
gruppe_a - gruppe_b    # Differenz     {'alice', 'carol'}</code></pre>
        <p>Weitere Methoden: <code>keys()</code>, <code>values()</code>, <code>del lager["RAM"]</code>, <code>update()</code>. Duplikate aus einer Liste entfernen: <code>list(set(liste))</code> – die Reihenfolge geht dabei verloren.</p>
        <h5>List Comprehensions</h5>
        <pre><code>quadrate = [x ** 2 for x in range(1, 6)]          # [1, 4, 9, 16, 25]
gerade   = [x for x in range(10) if x % 2 == 0]   # [0, 2, 4, 6, 8]
netto    = {"SSD": 50, "RAM": 30}
brutto   = {k: round(v * 1.19, 2) for k, v in netto.items()}   # {'SSD': 59.5, 'RAM': 35.7}</code></pre>
        <div class="callout achtung"><strong>Prüfungsfallen:</strong> <code>liste.sort()</code> sortiert die Liste selbst und gibt <code>None</code> zurück – <code>sorted(liste)</code> liefert eine neue, sortierte Liste. <code>b = a</code> kopiert eine Liste nicht, sondern erzeugt einen zweiten Namen für dieselbe Liste; Änderungen über <code>b</code> sieht man auch in <code>a</code>. Eine echte Kopie liefert <code>a.copy()</code>.</div>
        <h5>Klassische Datenstrukturen</h5>
        <table><thead><tr><th>Struktur</th><th>Prinzip</th><th>in Python</th></tr></thead><tbody>
          <tr><td>Array (Feld)</td><td>Elemente gleichen Typs, fester Index, schneller Zugriff über die Position</td><td><code>list</code> (dynamisch wachsend)</td></tr>
          <tr><td>zweidimensionales Array</td><td>Tabelle aus Zeilen und Spalten</td><td><code>m[zeile][spalte]</code>, z. B. <code>m = [[1, 2, 3], [4, 5, 6]]</code> → <code>m[1][2]</code> = 6</td></tr>
          <tr><td>Stack (Stapel)</td><td>LIFO – last in, first out</td><td><code>append()</code> und <code>pop()</code></td></tr>
          <tr><td>Queue (Warteschlange)</td><td>FIFO – first in, first out</td><td><code>collections.deque</code> mit <code>append()</code> und <code>popleft()</code></td></tr>
          <tr><td>Datensatz</td><td>zusammengehörige Werte</td><td>Tupel, Dictionary oder eigene Klasse</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>Merke:</strong> Liste = geordnete, veränderbare Folge · Tupel = unveränderbar (z. B. Koordinaten, feste Datensätze, mehrere Rückgabewerte) · Dictionary = Nachschlagen über Schlüssel · Menge = keine Duplikate, schnelle Prüfung „enthalten?“.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> In Pseudocode heißen Listen meist <em>Array</em> oder <em>Feld</em>, z. B. <code>preise[i]</code>. Achte darauf, ob die Aufgabe bei Index 0 oder 1 beginnt – das steht im Aufgabentext oder im Belegsatz.</div>
      `
    },
    {
      id: "dateien-formate",
      title: "Dateien & Datenformate (CSV, JSON, XML)",
      exam: ["AP2"],
      summary: "Dateien mit open() und with lesen und schreiben, CSV- und JSON-Dateien verarbeiten, XML lesen und die Austauschformate CSV, JSON und XML vergleichen.",
      html: `
        <p>Variablen liegen im Arbeitsspeicher (RAM) und sind nach dem Programmende weg. Sollen Daten erhalten bleiben, speicherst du sie <strong>persistent</strong> in einer Datei auf SSD/HDD oder in einer Datenbank.</p>
        <h5>Textdateien lesen und schreiben</h5>
        <pre><code># Schreiben – Modus "w" legt die Datei an oder LEERT sie!
with open("log.txt", "w", encoding="utf-8") as f:
    f.write("Backup gestartet\\n")
    f.write("Backup ok\\n")

# Anhängen
with open("log.txt", "a", encoding="utf-8") as f:
    f.write("Ende\\n")

# Zeilenweise lesen
with open("log.txt", encoding="utf-8") as f:
    for zeile in f:
        print(zeile.strip())    # strip() entfernt den Zeilenumbruch</code></pre>
        <table><thead><tr><th>Modus</th><th>Bedeutung</th></tr></thead><tbody>
          <tr><td><code>"r"</code></td><td>lesen (Standard); fehlt die Datei → <code>FileNotFoundError</code></td></tr>
          <tr><td><code>"w"</code></td><td>schreiben; Datei wird neu angelegt bzw. vorhandener Inhalt gelöscht</td></tr>
          <tr><td><code>"a"</code></td><td>anhängen (append) ans Dateiende</td></tr>
          <tr><td><code>"x"</code></td><td>nur neu anlegen; Fehler, wenn die Datei schon existiert</td></tr>
          <tr><td><code>"b"</code></td><td>Zusatz für Binärdateien, z. B. <code>"rb"</code> für Bilder</td></tr>
        </tbody></table>
        <p>Der <code>with</code>-Block (Kontextmanager) schließt die Datei automatisch – auch wenn ein Fehler auftritt. Weitere Lesemethoden: <code>read()</code> (alles als ein String), <code>readlines()</code> (Liste von Zeilen). <code>write()</code> fügt <em>keinen</em> Zeilenumbruch an. Gib immer <code>encoding="utf-8"</code> an, sonst werden Umlaute je nach Betriebssystem falsch gelesen.</p>
        <h5>CSV – Comma-Separated Values</h5>
        <pre><code>Inventarnr;Typ;Standort;Preis
INV-1001;Notebook;Heide;899,00
INV-1002;Monitor;Husum;189,50</code></pre>
        <pre><code>import csv
summe = 0.0
with open("geraete.csv", encoding="utf-8", newline="") as f:
    for zeile in csv.DictReader(f, delimiter=";"):
        summe += float(zeile["Preis"].replace(",", "."))
print(f"{summe:.2f}")   # 1088.50</code></pre>
        <p>In deutschen Exporten ist das Trennzeichen oft ein <strong>Semikolon</strong>, weil das Komma als Dezimalzeichen dient. Die erste Zeile enthält meist die Spaltennamen (Header). Schreiben geht mit <code>csv.writer(f, delimiter=";").writerow([...])</code>.</p>
        <h5>JSON – JavaScript Object Notation</h5>
        <pre><code>import json
kunde = {"id": 17, "name": "Wattblick GmbH", "ort": "Büsum",
         "aktiv": True, "tickets": [4711, 4712], "ust_id": None}
with open("kunde.json", "w", encoding="utf-8") as f:
    json.dump(kunde, f, indent=2, ensure_ascii=False)   # dict → Datei
with open("kunde.json", encoding="utf-8") as f:
    daten = json.load(f)                                # Datei → dict
print(daten["tickets"][0])     # 4711</code></pre>
        <p><code>json.dumps()</code>/<code>json.loads()</code> wandeln zwischen Python-Objekt und JSON-<em>String</em> um (z. B. für Web-APIs). Zuordnung: dict ↔ Objekt <code>{}</code>, list ↔ Array <code>[]</code>, <code>True</code> ↔ <code>true</code>, <code>None</code> ↔ <code>null</code>.</p>
        <h5>XML – Extensible Markup Language</h5>
        <pre><code>&lt;kunde id="17"&gt;
  &lt;name&gt;Wattblick GmbH&lt;/name&gt;
  &lt;ort&gt;Büsum&lt;/ort&gt;
  &lt;tickets&gt;
    &lt;ticket&gt;4711&lt;/ticket&gt;
    &lt;ticket&gt;4712&lt;/ticket&gt;
  &lt;/tickets&gt;
&lt;/kunde&gt;</code></pre>
        <p>XML ist <strong>wohlgeformt</strong>, wenn es genau ein Wurzelelement gibt, jedes Element geschlossen und korrekt verschachtelt ist und Attributwerte in Anführungszeichen stehen. <strong>Gültig (valide)</strong> ist es zusätzlich, wenn es einem Schema (XSD oder DTD) entspricht. In Python liest du XML z. B. mit <code>xml.etree.ElementTree</code>.</p>
        <h5>Vergleich der Austauschformate</h5>
        <table><thead><tr><th>Kriterium</th><th>CSV</th><th>JSON</th><th>XML</th></tr></thead><tbody>
          <tr><td>Struktur</td><td>flache Tabelle</td><td>verschachtelte Objekte und Arrays</td><td>Baum aus Elementen mit Attributen</td></tr>
          <tr><td>Datentypen</td><td>keine – alles Text</td><td>string, number, boolean, null, object, array</td><td>Text; Typen erst über ein Schema</td></tr>
          <tr><td>Overhead</td><td>sehr gering</td><td>gering</td><td>hoch (Start- und End-Tags)</td></tr>
          <tr><td>Validierung</td><td>kaum möglich</td><td>JSON Schema</td><td>DTD/XSD, sehr ausgereift</td></tr>
          <tr><td>typischer Einsatz</td><td>Export/Import aus Tabellenkalkulation und Datenbank</td><td>Web-APIs (REST), Konfigurationsdateien</td><td>Dokumente, Branchenstandards (z. B. E-Rechnung), Konfigurationen</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>Datenarten:</strong> <strong>strukturiert</strong> = festes Schema (Datenbanktabelle, CSV) · <strong>semistrukturiert</strong> = Struktur steckt in den Daten selbst (JSON, XML) · <strong>unstrukturiert</strong> = kein festes Schema (Freitext, Bilder, Videos, Scans).</div>
        <div class="callout achtung"><strong>Typische Fehler:</strong> JSON verlangt doppelte Anführungszeichen um Schlüssel und Strings, erlaubt kein Komma nach dem letzten Element und keine Kommentare. Bei CSV führen Trennzeichen im Feldinhalt zu verschobenen Spalten – solche Felder müssen in Anführungszeichen stehen.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Stellen Sie den Datensatz im JSON-Format dar.“ – „Nennen Sie je einen Vor- und Nachteil von XML gegenüber CSV.“ – In der AP2 geht es zusätzlich darum, Daten aus verschiedenen Quellen (CSV-Export, JSON-API, XML-Datei) zusammenzuführen.</div>
      `
    },
    {
      id: "web",
      title: "Webseiten & Webdaten: statisch, dynamisch, APIs",
      exam: ["AP1", "AP2"],
      summary: "Statische und dynamische Webseiten unterscheiden, client- und serverseitige Techniken (HTML, CSS, JavaScript, PHP, Python) einordnen und mit Python Daten aus dem Web abrufen – per JSON-Schnittstelle oder Web-Scraping.",
      html: `
        <p>Das Web arbeitet nach dem <strong>Client-Server-Prinzip</strong>: Der Browser (Client) schickt eine <strong>HTTP-Anfrage</strong> (Request, z. B. <code>GET /index.html</code>) an einen Webserver. Der antwortet mit einem <strong>Statuscode</strong> und dem Inhalt (Response), meist HTML. HTTPS verschlüsselt diese Verbindung zusätzlich mit TLS.</p>
        <h5>Bausteine einer Webanwendung</h5>
        <table><thead><tr><th>Technik</th><th>Aufgabe</th><th>läuft auf</th></tr></thead><tbody>
          <tr><td>HTML</td><td>Struktur und Inhalt (Überschriften, Absätze, Formulare) – Auszeichnungssprache, keine Programmiersprache</td><td>Browser</td></tr>
          <tr><td>CSS</td><td>Gestaltung: Farben, Schriften, Layout, Anpassung an Bildschirmgrößen</td><td>Browser</td></tr>
          <tr><td>JavaScript</td><td>Verhalten im Browser: Eingaben prüfen, Inhalte nachladen, Menüs – <strong>clientseitig</strong></td><td>Browser (mit Node.js auch Server)</td></tr>
          <tr><td>PHP, Python (Django, Flask), Java, C# (ASP.NET)</td><td>Seiten bei jeder Anfrage erzeugen, Formulare verarbeiten, Anmeldung – <strong>serverseitig</strong></td><td>Webserver</td></tr>
          <tr><td>Datenbank (MariaDB, PostgreSQL)</td><td>Inhalte dauerhaft speichern (Artikel, Kunden, Buchungen)</td><td>Datenbankserver</td></tr>
        </tbody></table>
        <h5>Statische und dynamische Webseiten</h5>
        <table><thead><tr><th>Kriterium</th><th>statische Webseite</th><th>dynamische Webseite</th></tr></thead><tbody>
          <tr><td>Entstehung</td><td>fertige HTML-Dateien liegen auf dem Server; jeder Besucher erhält dieselbe Datei</td><td>ein Programm auf dem Server erzeugt die Seite bei jedem Aufruf, oft mit Daten aus einer Datenbank</td></tr>
          <tr><td>Technik</td><td>HTML, CSS, ggf. JavaScript; ein einfacher Webserver genügt</td><td>zusätzlich serverseitige Sprache (z. B. PHP, Python) und meist eine Datenbank</td></tr>
          <tr><td>Inhalte ändern</td><td>Datei bearbeiten und neu hochladen</td><td>über Formulare oder ein Content-Management-System (CMS) direkt im Browser</td></tr>
          <tr><td>Vorteile</td><td>schnell, günstiges Hosting, kleine Angriffsfläche, leicht zu sichern</td><td>aktuelle und personalisierte Inhalte, Interaktion (Suche, Login, Bestellung), Pflege ohne HTML-Kenntnisse</td></tr>
          <tr><td>Nachteile</td><td>keine Personalisierung, Pflege bei vielen Seiten aufwendig</td><td>mehr Serverlast, regelmäßige Updates nötig, Angriffe wie SQL-Injection möglich, Datenbank muss gesichert werden</td></tr>
          <tr><td>Beispiele</td><td>Visitenkarten-Seite, Impressum, Anfahrt, Online-Dokumentation</td><td>Webshop, Ticketsystem, Buchungskalender, Kundenportal</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>Merke:</strong> Entscheidend ist, <em>wo</em> der Inhalt entsteht. Liefert der Server nur vorhandene Dateien aus, ist die Seite statisch – auch wenn JavaScript ein Menü animiert. Erzeugt ein serverseitiges Programm den Inhalt pro Anfrage (z. B. „Ihre Bestellungen“ nach dem Login), ist sie dynamisch.</div>
        <div class="callout beispiel"><strong>Beispiel Sprachwahl:</strong> Die Deichgraf IT-Service GmbH möchte eine Seite mit Leistungen und Anfahrt sowie ein Kundenportal, in dem Kunden ihre Tickets sehen. Für die Info-Seiten genügen HTML und CSS (statisch). Das Kundenportal braucht eine Anmeldung und Daten aus dem Ticketsystem – also eine serverseitige Sprache wie PHP oder Python mit Datenbankanbindung (dynamisch).</div>
        <h5>Webdaten mit Python abrufen</h5>
        <p>Bietet ein Dienst eine <strong>API</strong> (Programmierschnittstelle) an, liefert er strukturierte Daten, meist als <strong>JSON</strong>. Mit dem externen Paket <code>requests</code> (<code>pip install requests</code>) geht das in wenigen Zeilen:</p>
        <pre><code>import requests

url = "https://api.example.com/v1/geraete?standort=Heide"   # Beispieladresse
antwort = requests.get(url, timeout=10)
if antwort.status_code == 200:          # 200 = OK
    geraete = antwort.json()            # JSON-Text → Liste/Dictionary
    for g in geraete:
        print(g["inventarnr"], g["typ"])
else:
    print("Fehler:", antwort.status_code)   # z. B. 404 = nicht gefunden</code></pre>
        <table><thead><tr><th>Statuscode</th><th>Bedeutung</th></tr></thead><tbody>
          <tr><td>200</td><td>OK – Anfrage erfolgreich</td></tr>
          <tr><td>301 / 302</td><td>Weiterleitung auf eine andere Adresse</td></tr>
          <tr><td>401 / 403</td><td>nicht angemeldet / keine Berechtigung</td></tr>
          <tr><td>404</td><td>Ressource nicht gefunden</td></tr>
          <tr><td>500</td><td>Fehler auf dem Server</td></tr>
        </tbody></table>
        <p>Gibt es keine API, kann man den HTML-Text einer Seite auswerten (<strong>Web-Scraping</strong>), z. B. mit dem Paket <code>beautifulsoup4</code>:</p>
        <pre><code>import requests
from bs4 import BeautifulSoup

html = requests.get("https://www.example.com", timeout=10).text
seite = BeautifulSoup(html, "html.parser")
print(seite.title.string)                            # Titel der Seite
links = [a.get("href") for a in seite.find_all("a")] # alle Links
print("Domain" in seite.get_text())                  # kommt das Wort vor?</code></pre>
        <div class="callout achtung"><strong>Recht und Technik:</strong> Beim Scraping Nutzungsbedingungen und die Datei <code>robots.txt</code> beachten, den Server nicht mit Anfragen überlasten, Urheberrecht und – bei personenbezogenen Daten – die DSGVO einhalten. Eine offizielle API ist vorzuziehen: Sie ist erlaubt, stabil und liefert saubere Daten, während sich HTML-Seiten jederzeit ändern können. API-Schlüssel gehören nicht in den Quellcode, sondern z. B. in eine Umgebungsvariable (<code>os.environ</code>).</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1 – „Erläutern Sie den Unterschied zwischen einer statischen und einer dynamischen Webseite“ oder „Begründen Sie, ob für den Internetauftritt eine statische Seite genügt“ (Frühjahr 2025); bei der Sprachwahl zwischen client- und serverseitigen Techniken unterscheiden. AP2 – Daten über eine Schnittstelle (REST, JSON) abrufen und weiterverarbeiten; HTTP-Methoden und Authentifizierung vertiefst du in LF 8.</div>
      `
    },
    {
      id: "text-system-gui",
      title: "Textverarbeitung, Systemzugriff & GUI",
      exam: ["AP1", "AP2"],
      summary: "Strings mit Methoden und regulären Ausdrücken auswerten, mit os, sys und subprocess auf das Betriebssystem zugreifen, Pakete per pip installieren und Bildschirmmasken mit tkinter ergonomisch gestalten.",
      html: `
        <h5>String-Methoden</h5>
        <p>Strings sind unveränderlich – jede Methode liefert einen <em>neuen</em> String: <code>upper()</code>, <code>lower()</code>, <code>title()</code>, <code>strip()</code> (Leerraum an den Rändern entfernen), <code>replace(alt, neu)</code>, <code>split(";")</code> (String → Liste), <code>";".join(liste)</code> (Liste → String), <code>find(x)</code> (Position oder <code>-1</code>), <code>count(x)</code>, <code>startswith()</code>, <code>isdigit()</code>. Beispiel: <code>"Server01;Heide;aktiv".split(";")</code> → <code>['Server01', 'Heide', 'aktiv']</code>.</p>
        <h5>Reguläre Ausdrücke (Modul re)</h5>
        <p>Ein regulärer Ausdruck (Regex) beschreibt ein <strong>Suchmuster</strong> für Text – ideal, um Postleitzahlen, IP-Adressen oder E-Mail-Adressen aus Logdateien und Dokumenten zu ziehen oder Eingaben zu prüfen. Schreibe Muster als <strong>Raw-String</strong> <code>r"…"</code>, damit Python die Backslashes nicht selbst auswertet.</p>
        <table><thead><tr><th>Zeichen</th><th>Bedeutung</th><th>Zeichen</th><th>Bedeutung</th></tr></thead><tbody>
          <tr><td><code>\\d</code></td><td>Ziffer 0–9</td><td><code>+</code></td><td>1-mal oder öfter</td></tr>
          <tr><td><code>\\w</code></td><td>Buchstabe, Ziffer oder _</td><td><code>*</code></td><td>0-mal oder öfter</td></tr>
          <tr><td><code>\\s</code></td><td>Leerraum (Leerzeichen, Tab …)</td><td><code>?</code></td><td>0- oder 1-mal</td></tr>
          <tr><td><code>.</code></td><td>beliebiges Zeichen (<code>\\.</code> = echter Punkt)</td><td><code>{n}</code> / <code>{n,m}</code></td><td>genau n-mal / n- bis m-mal</td></tr>
          <tr><td><code>[A-Z]</code></td><td>ein Zeichen aus der Klasse</td><td><code>^</code> / <code>$</code></td><td>Anfang / Ende des Textes</td></tr>
          <tr><td><code>[^0-9]</code></td><td>jedes Zeichen außer 0–9</td><td><code>\\b</code></td><td>Wortgrenze</td></tr>
        </tbody></table>
        <pre><code>import re
text = "Kunden: 25746 Heide, 25704 Meldorf, Tel. 0481 123456"
re.findall(r"\\b\\d{5}\\b", text)    # ['25746', '25704']
re.findall(r"\\d{5}", text)          # ['25746', '25704', '12345'] – ohne \\b falsch!
log = "Zugriff von 192.168.10.25 abgelehnt, 10.0.0.1 ok"
re.findall(r"\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b", log)   # ['192.168.10.25', '10.0.0.1']
re.sub(r"\\d", "#", "PIN 1234")      # 'PIN ####'
re.fullmatch(r"INV-\\d{4}", "INV-1001")   # Treffer → Eingabe gültig</code></pre>
        <p><code>findall()</code> liefert eine Liste aller Treffer, <code>search()</code> den ersten Treffer (oder <code>None</code>), <code>fullmatch()</code> prüft, ob der <em>ganze</em> String passt, <code>sub()</code> ersetzt.</p>
        <h5>Zugriff auf die Systemumgebung</h5>
        <pre><code>import os, sys, subprocess
os.getcwd()                              # aktuelles Arbeitsverzeichnis
os.listdir(".")                          # Inhalt eines Ordners
os.makedirs("export/2026", exist_ok=True)
pfad = os.path.join("export", "geraete.csv")   # richtiger Trenner je Betriebssystem
os.path.exists(pfad)                     # True/False
os.environ.get("USERNAME")               # Umgebungsvariable (Windows)
sys.argv                                 # Liste der Kommandozeilenargumente
sys.platform                             # z. B. 'win32' oder 'linux'
erg = subprocess.run(["ping", "-n", "1", "192.168.10.1"],   # Linux: -c statt -n
                     capture_output=True, text=True)
print(erg.returncode, erg.stdout)        # 0 = Befehl erfolgreich
sys.exit(1)                              # Skript mit Fehlercode beenden</code></pre>
        <div class="callout achtung"><strong>Sicherheit:</strong> Übergib Befehle an <code>subprocess.run()</code> als Liste und verzichte auf <code>shell=True</code>, wenn Benutzereingaben im Befehl landen – sonst droht <strong>Command Injection</strong> (z. B. Eingabe <code>8.8.8.8 &amp;&amp; del *.*</code>).</div>
        <p><strong>Externe Pakete</strong> (z. B. <code>requests</code> für Webseiten und APIs, <code>qrcode</code>) installierst du am besten in einer <strong>virtuellen Umgebung</strong>, damit sich Projekte nicht gegenseitig stören:</p>
        <pre><code>python -m venv venv              # virtuelle Umgebung anlegen
venv\\Scripts\\activate            # aktivieren (Linux/macOS: source venv/bin/activate)
pip install requests qrcode      # Pakete aus dem Python Package Index (PyPI)
pip freeze &gt; requirements.txt    # Abhängigkeiten festhalten</code></pre>
        <h5>Grafische Oberfläche mit tkinter</h5>
        <pre><code>import tkinter as tk

def berechnen():                       # Callback: läuft beim Klick
    netto = float(eingabe.get().replace(",", "."))
    ausgabe.config(text=f"Brutto: {netto * 1.19:.2f} €")

fenster = tk.Tk()
fenster.title("Bruttorechner")
tk.Label(fenster, text="Nettobetrag:").grid(row=0, column=0)
eingabe = tk.Entry(fenster)
eingabe.grid(row=0, column=1)
tk.Button(fenster, text="Berechnen", command=berechnen).grid(row=1, column=1)
ausgabe = tk.Label(fenster, text="")
ausgabe.grid(row=2, column=0, columnspan=2)
fenster.mainloop()                     # Ereignisschleife startet</code></pre>
        <p>GUI-Programme sind <strong>ereignisgesteuert</strong>: <code>mainloop()</code> wartet auf Ereignisse (Klick, Tastendruck) und ruft dann die zugeordnete Funktion auf. Bausteine (Widgets) sind z. B. <code>Label</code>, <code>Entry</code>, <code>Button</code>, <code>Listbox</code>; <code>grid()</code> oder <code>pack()</code> ordnen sie an.</p>
        <h5>Bildschirmmasken ergonomisch gestalten</h5>
        <p>Die Norm <strong>DIN EN ISO 9241-110</strong> nennt sieben Interaktionsprinzipien: Aufgabenangemessenheit, Selbstbeschreibungsfähigkeit, Erwartungskonformität, Erlernbarkeit, Steuerbarkeit, Robustheit gegen Benutzungsfehler und Benutzerbindung. Dazu kommen <strong>Barrierefreiheit</strong> (ausreichender Kontrast, skalierbare Schrift, komplette Bedienung per Tastatur, Beschriftungen für Screenreader, Information nicht nur über Farbe) und das <strong>Corporate Design</strong> des Unternehmens (Farben, Logo, Schriften laut Styleguide).</p>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1 – eine Eingabemaske beurteilen und Verbesserungen zu Ergonomie, Barrierefreiheit oder Corporate Identity vorschlagen. AP2 – wiederkehrende Abläufe per Skript automatisieren (z. B. Logdateien mit regulären Ausdrücken auswerten, Befehle ausführen).</div>
      `
    },
    {
      id: "fehler-debugging",
      title: "Fehlersuche, Exceptions & Debugging",
      exam: ["AP1", "AP2"],
      summary: "Syntax-, Laufzeit- und logische Fehler unterscheiden, Ausnahmen mit try/except/else/finally behandeln, Fehler im Quellcode finden und mit Debugger, Breakpoints und Ausgaben systematisch eingrenzen.",
      html: `
        <p>Ein großer Teil der Softwareentwicklung ist <strong>Debugging</strong> – das Finden und Beheben von Fehlern („Bugs“). Zuerst musst du erkennen, <em>welche Art</em> von Fehler vorliegt.</p>
        <h5>Drei Fehlerarten</h5>
        <table><thead><tr><th>Fehlerart</th><th>Wann erkannt?</th><th>Beispiele</th><th>Folge</th></tr></thead><tbody>
          <tr><td><strong>Syntaxfehler</strong> (formaler Fehler)</td><td>vor der Ausführung, beim Einlesen/Übersetzen</td><td>fehlender Doppelpunkt nach <code>if</code>, Klammer nicht geschlossen, falsche Einrückung (<code>SyntaxError</code>, <code>IndentationError</code>)</td><td>Programm startet nicht</td></tr>
          <tr><td><strong>Laufzeitfehler</strong> (Exception)</td><td>während der Ausführung, wenn die Zeile erreicht wird</td><td>Division durch 0, <code>int("abc")</code>, Index außerhalb der Liste, Datei fehlt</td><td>Abbruch mit Fehlermeldung, falls nicht abgefangen</td></tr>
          <tr><td><strong>Logischer Fehler</strong> (semantisch, inhaltlich)</td><td>nicht automatisch – nur durch Tests oder Schreibtischtest</td><td><code>&lt;</code> statt <code>&lt;=</code>, falscher Startwert, falsche Formel</td><td>Programm läuft, liefert aber falsche Ergebnisse</td></tr>
        </tbody></table>
        <table><thead><tr><th>Exception</th><th>typische Ursache</th></tr></thead><tbody>
          <tr><td><code>ZeroDivisionError</code></td><td>Division durch 0</td></tr>
          <tr><td><code>ValueError</code></td><td>richtiger Typ, ungültiger Wert: <code>int("12a")</code></td></tr>
          <tr><td><code>TypeError</code></td><td>unpassende Typen: <code>"5" + 3</code></td></tr>
          <tr><td><code>IndexError</code> / <code>KeyError</code></td><td>Index außerhalb der Liste / Schlüssel fehlt im Dictionary</td></tr>
          <tr><td><code>NameError</code></td><td>Variable oder Funktion nicht definiert (oft Tippfehler)</td></tr>
          <tr><td><code>FileNotFoundError</code></td><td>Datei existiert nicht</td></tr>
        </tbody></table>
        <p>Die Fehlermeldung (<strong>Traceback</strong>) liest du von unten: Die letzte Zeile nennt Fehlertyp und Ursache, darüber stehen Datei und Zeilennummer.</p>
        <h5>Ausnahmen behandeln</h5>
        <pre><code>def durchschnitt(dateiname):
    try:
        with open(dateiname, encoding="utf-8") as f:
            werte = [float(zeile) for zeile in f]
        ergebnis = sum(werte) / len(werte)
    except FileNotFoundError:
        print("Datei fehlt:", dateiname)
    except ZeroDivisionError:
        print("Die Datei ist leer.")
    except ValueError as fehler:
        print("Ungültiger Wert:", fehler)
    else:
        return ergebnis                 # nur, wenn kein Fehler auftrat
    finally:
        print("Auswertung beendet")     # läuft in jedem Fall</code></pre>
        <ul>
          <li><code>try</code> – Code, in dem ein Fehler auftreten kann</li>
          <li><code>except Typ</code> – Reaktion auf genau diesen Fehler; mehrere Blöcke sind möglich</li>
          <li><code>else</code> – läuft nur ohne Fehler · <code>finally</code> – läuft immer (z. B. Aufräumen)</li>
          <li><code>raise ValueError("Menge muss positiv sein")</code> – selbst eine Ausnahme auslösen</li>
          <li><code>assert rabatt &gt;= 0, "Rabatt negativ"</code> – Zusicherung während der Entwicklung; ist sie falsch, gibt es einen <code>AssertionError</code></li>
        </ul>
        <div class="callout achtung"><strong>Schlechter Stil:</strong> <code>except: pass</code> fängt <em>jeden</em> Fehler ab und verschweigt ihn – die eigentliche Ursache bleibt unentdeckt. Fange gezielt die Fehler ab, die du sinnvoll behandeln kannst.</div>
        <h5>Fehler im Quellcode finden</h5>
        <pre><code>def mittelwert(werte):
    summe = 1                          # Fehler 1: Startwert muss 0 sein
    for i in range(1, len(werte)):     # Fehler 2: Index 0 wird übersprungen
        summe += werte[i]
    return summe / len(werte)

print(mittelwert([2, 4, 6]))           # liefert 3.666…, erwartet 4.0</code></pre>
        <p>Beide Fehler sind <strong>logische Fehler</strong>: Das Programm läuft, rechnet aber (1 + 4 + 6) ÷ 3 ≈ 3,67 statt (2 + 4 + 6) ÷ 3 = 4. Korrektur: <code>summe = 0</code> und <code>for i in range(len(werte)):</code>. Zusätzlich fehlt eine Behandlung der leeren Liste (sonst <code>ZeroDivisionError</code>).</p>
        <h5>Debugging-Techniken</h5>
        <table><thead><tr><th>Technik</th><th>Vorgehen</th></tr></thead><tbody>
          <tr><td>print-Debugging / Tracing</td><td>Zwischenwerte ausgeben, um den Ablauf zu verfolgen</td></tr>
          <tr><td>Debugger (IDE)</td><td><strong>Breakpoint</strong> (Haltepunkt) setzen, dann <em>Step Over</em> (Zeile ausführen), <em>Step Into</em> (in Funktion springen), <em>Step Out</em>, <em>Continue</em>; Variablen und Aufrufliste (Call Stack) beobachten</td></tr>
          <tr><td>Logging</td><td>Meldungen mit Stufen (DEBUG, INFO, WARNING, ERROR) in eine Datei schreiben – auch im laufenden Betrieb</td></tr>
          <tr><td>Schreibtischtest, Code-Review</td><td>Code von Hand bzw. durch eine zweite Person prüfen</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>Systematisch vorgehen:</strong> Fehler reproduzieren → eingrenzen (Breakpoints, Ausgaben) → Ursache verstehen → beheben → erneut testen (auch alte Testfälle = Regressionstest) → dokumentieren. Fehler vermeidest du durch sprechende Namen, kleine Funktionen, Eingabeprüfung, Linter und automatische Tests.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „Im folgenden Quellcode sind drei Fehler. Markieren und korrigieren Sie diese.“ – „Unterscheiden Sie Syntax- und Laufzeitfehler an je einem Beispiel.“ – „Erläutern Sie, wie ein Breakpoint bei der Fehlersuche hilft.“</div>
      `
    },
    {
      id: "testen",
      title: "Softwaretests & Testfälle",
      exam: ["AP1", "AP2"],
      summary: "Statische und dynamische Tests, Black-Box- und White-Box-Verfahren, Äquivalenzklassen und Grenzwertanalyse, Teststufen vom Komponenten- bis zum Abnahmetest sowie Testprotokolle.",
      html: `
        <p>Testen heißt, ein Programm gezielt mit dem Ziel auszuführen oder zu prüfen, <strong>Fehler zu finden</strong>. Ein Test kann Fehler nachweisen, aber nie beweisen, dass keine Fehler mehr vorhanden sind. Deshalb kommt es auf <strong>gut gewählte Testfälle</strong> an.</p>
        <h5>Statisch oder dynamisch?</h5>
        <div class="grid-2">
          <div class="callout merke"><strong>Statische Tests</strong> – Code wird <em>nicht</em> ausgeführt: Review, Code-Inspektion, Walkthrough, Schreibtischtest, statische Codeanalyse (Linter).</div>
          <div class="callout merke"><strong>Dynamische Tests</strong> – Programm wird mit Testdaten <em>ausgeführt</em> und das tatsächliche mit dem erwarteten Ergebnis verglichen: Black-Box- und White-Box-Tests.</div>
        </div>
        <h5>Black-Box und White-Box</h5>
        <table><thead><tr><th></th><th>Black-Box-Test</th><th>White-Box-Test</th></tr></thead><tbody>
          <tr><td>Grundlage</td><td>Spezifikation (Anforderungen, Pflichtenheft) – Code unbekannt</td><td>Quellcode und Programmstruktur sind bekannt</td></tr>
          <tr><td>Frage</td><td>Tut das Programm, was es soll?</td><td>Wurden alle Anweisungen/Zweige durchlaufen?</td></tr>
          <tr><td>Verfahren</td><td>Äquivalenzklassen, Grenzwertanalyse</td><td>Anweisungsüberdeckung (C0), Zweigüberdeckung (C1), Pfadüberdeckung</td></tr>
          <tr><td>Durchführung</td><td>oft Tester, Fachabteilung, Kunde</td><td>meist Entwickler</td></tr>
        </tbody></table>
        <h5>Äquivalenzklassen und Grenzwerte</h5>
        <p>Eine <strong>Äquivalenzklasse</strong> fasst Eingaben zusammen, bei denen sich das Programm gleich verhalten soll. Aus jeder Klasse – gültig <em>und</em> ungültig – genügt ein Repräsentant. Die <strong>Grenzwertanalyse</strong> ergänzt Werte direkt an den Klassengrenzen, weil dort die meisten Fehler (<code>&lt;</code> statt <code>&lt;=</code>) stecken. Denk bei den Testdaten zusätzlich an Sonderfälle: leere Eingabe, 0, negative Werte, extrem große Werte und einen falschen Datentyp (Text statt Zahl).</p>
        <div class="callout beispiel"><strong>Beispiel Mengenrabatt:</strong> Die Nordlicht IT GmbH erlaubt Bestellmengen von 1 bis 1000 Stück. 1–49 Stück: 0 % Rabatt, 50–199: 5 %, ab 200: 10 %.
          <table><thead><tr><th>Klasse</th><th>Bereich</th><th>Repräsentant</th><th>Grenzwerte</th><th>erwartet</th></tr></thead><tbody>
            <tr><td>ungültig 1</td><td>≤ 0</td><td>−5</td><td>0</td><td>Fehlermeldung</td></tr>
            <tr><td>gültig 1</td><td>1–49</td><td>20</td><td>1, 49</td><td>0 %</td></tr>
            <tr><td>gültig 2</td><td>50–199</td><td>120</td><td>50, 199</td><td>5 %</td></tr>
            <tr><td>gültig 3</td><td>200–1000</td><td>500</td><td>200, 1000</td><td>10 %</td></tr>
            <tr><td>ungültig 2</td><td>&gt; 1000</td><td>2000</td><td>1001</td><td>Fehlermeldung</td></tr>
            <tr><td>ungültig 3</td><td>keine ganze Zahl</td><td>„abc“, 2,5</td><td>–</td><td>Fehlermeldung</td></tr>
          </tbody></table>
        </div>
        <pre><code>def rabatt(menge):
    if not 1 &lt;= menge &lt;= 1000:
        raise ValueError("Menge außerhalb von 1 bis 1000")
    if menge &gt;= 200:
        return 10
    if menge &gt;= 50:
        return 5
    return 0

def test_grenzwerte():            # Unit-Test, z. B. mit pytest ausführbar
    assert rabatt(1) == 0
    assert rabatt(49) == 0
    assert rabatt(50) == 5
    assert rabatt(199) == 5
    assert rabatt(200) == 10
    assert rabatt(1000) == 10</code></pre>
        <h5>Überdeckung beim White-Box-Test</h5>
        <p>Bei <code>if wert &gt;= 100: kosten = 0</code> ohne <code>else</code> reicht für die <strong>Anweisungsüberdeckung</strong> ein Testfall mit <code>wert = 150</code> (alle Anweisungen laufen). Für die <strong>Zweigüberdeckung</strong> brauchst du zusätzlich einen Fall mit <code>wert = 50</code>, damit auch der „leere“ Nein-Zweig durchlaufen wird.</p>
        <h5>Teststufen</h5>
        <table><thead><tr><th>Stufe</th><th>Was wird geprüft?</th><th>Wer / wogegen?</th></tr></thead><tbody>
          <tr><td>Komponententest (Unit-Test)</td><td>einzelne Funktion, Klasse, Modul</td><td>Entwickler, gegen den Feinentwurf</td></tr>
          <tr><td>Integrationstest</td><td>Zusammenspiel und Schnittstellen der Komponenten</td><td>Entwickler/Tester, gegen den Architekturentwurf</td></tr>
          <tr><td>Systemtest</td><td>gesamtes System in einer Testumgebung</td><td>Tester, gegen das Pflichtenheft</td></tr>
          <tr><td>Abnahmetest</td><td>Eignung für den Kunden, oft in der Zielumgebung</td><td>Auftraggeber, gegen das Lastenheft → Abnahmeprotokoll</td></tr>
        </tbody></table>
        <p>Weitere Begriffe: <strong>Regressionstest</strong> (nach jeder Änderung alte Tests wiederholen), <strong>Last- und Performancetest</strong> (Verhalten unter vielen Zugriffen), <strong>End-to-End-Test</strong> (kompletter Ablauf aus Nutzersicht), <strong>testgetriebene Entwicklung (TDD)</strong> – erst den Test schreiben, dann den Code (Red → Green → Refactor).</p>
        <h5>Testfall und Testprotokoll</h5>
        <p>Ein Testfall enthält mindestens: ID, Beschreibung, Vorbedingung, Eingabedaten, <strong>erwartetes Ergebnis</strong>, tatsächliches Ergebnis und Status (bestanden/nicht bestanden). Im <strong>Testprotokoll</strong> kommen Datum, Tester, Testumgebung und Version hinzu – so ist später nachvollziehbar, was mit welchem Ergebnis geprüft wurde.</p>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Ohne erwartetes Ergebnis ist ein Testfall wertlos. Und: Vergiss die <em>ungültigen</em> Äquivalenzklassen nicht – sie bringen in der Prüfung regelmäßig Punkte.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1 – ein Testprotokoll (z. B. für einen neu eingerichteten Arbeitsplatz) mit Testfällen, erwartetem und tatsächlichem Ergebnis anlegen. AP2 – „Bilden Sie Äquivalenzklassen und geben Sie je einen Testwert an.“, „Nennen Sie die Grenzwerte.“, „Unterscheiden Sie Black-Box- und White-Box-Test.“, Teststufen abgrenzen, TDD und Unit-Tests erklären.</div>
      `
    },
    {
      id: "algorithmen",
      title: "Algorithmen, Pseudocode, Sortieren & Suchen",
      exam: ["AP1", "AP2"],
      summary: "Eigenschaften von Algorithmen, Pseudocode lesen und schreiben, Grundmuster Summe/Zählen/Maximum, Bubble Sort Schritt für Schritt, lineare und binäre Suche und ihr Aufwand.",
      html: `
        <p>Ein <strong>Algorithmus</strong> ist eine eindeutige, endliche Folge ausführbarer Anweisungen, die ein Problem löst. Wichtige Eigenschaften: <strong>Finitheit</strong> (endlich lange Beschreibung), <strong>Terminierung</strong> (endet nach endlich vielen Schritten), <strong>Determiniertheit</strong> (gleiche Eingabe → gleiches Ergebnis), <strong>Eindeutigkeit</strong> (der nächste Schritt ist klar festgelegt), <strong>Ausführbarkeit</strong> und <strong>Allgemeingültigkeit</strong> (löst eine ganze Klasse von Problemen, nicht nur einen Einzelfall).</p>
        <h5>Pseudocode</h5>
        <p>Pseudocode beschreibt einen Algorithmus sprachunabhängig. In der IHK-Prüfung muss er nicht kompilierbar sein, Syntaxfehler werden toleriert – aber die <strong>Kontrollstrukturen müssen durch Einrückung erkennbar</strong> sein. Übliche Schreibweisen:</p>
        <table><thead><tr><th>Konstrukt</th><th>Pseudocode</th><th>Python</th></tr></thead><tbody>
          <tr><td>Zuweisung</td><td><code>summe ← 0</code> oder <code>summe = 0</code></td><td><code>summe = 0</code></td></tr>
          <tr><td>Verzweigung</td><td><code>WENN … DANN … SONST … ENDE WENN</code></td><td><code>if … else …</code></td></tr>
          <tr><td>kopfgesteuerte Schleife</td><td><code>SOLANGE bedingung … ENDE SOLANGE</code></td><td><code>while bedingung:</code></td></tr>
          <tr><td>fußgesteuerte Schleife</td><td><code>WIEDERHOLE … BIS bedingung</code></td><td><code>while True:</code> … <code>break</code></td></tr>
          <tr><td>Zählschleife</td><td><code>FÜR i VON 1 BIS n … ENDE FÜR</code></td><td><code>for i in range(1, n + 1):</code></td></tr>
          <tr><td>Funktion</td><td><code>FUNKTION name(p) … RÜCKGABE wert</code></td><td><code>def name(p): … return wert</code></td></tr>
          <tr><td>Array</td><td><code>preise[i]</code>, <code>LÄNGE(preise)</code></td><td><code>preise[i]</code>, <code>len(preise)</code></td></tr>
        </tbody></table>
        <div class="callout achtung"><strong>Prüfungsfallen:</strong> <code>FÜR i VON 1 BIS n</code> schließt n <em>ein</em> – in Python also <code>range(1, n + 1)</code>. <code>SOLANGE</code> läuft, <em>solange</em> die Bedingung wahr ist; <code>WIEDERHOLE … BIS</code> läuft, <em>bis</em> sie wahr wird (Abbruchbedingung). Prüfe außerdem, ob Arrays bei 0 oder bei 1 beginnen.</div>
        <h5>Grundmuster: Summe, Zählen, Maximum</h5>
        <p>Fast jede Pseudocode-Aufgabe ist eine Variation dieser drei Muster. Merke dir jeweils den <strong>Startwert</strong> – dort passieren die meisten Fehler.</p>
        <pre><code>// Summe und Durchschnitt – Startwert 0
summe ← 0
FÜR i VON 0 BIS LÄNGE(werte) − 1
    summe ← summe + werte[i]
ENDE FÜR
durchschnitt ← summe / LÄNGE(werte)        // vorher prüfen: LÄNGE(werte) &gt; 0

// Zählen mit Bedingung – Startwert 0
anzahl ← 0
FÜR i VON 0 BIS LÄNGE(werte) − 1
    WENN werte[i] MOD 2 = 0 DANN           // Bedingung, hier: gerade Zahl
        anzahl ← anzahl + 1
    ENDE WENN
ENDE FÜR

// Maximum – Startwert ist das ERSTE Element, nicht 0
maximum ← werte[0]
FÜR i VON 1 BIS LÄNGE(werte) − 1
    WENN werte[i] &gt; maximum DANN
        maximum ← werte[i]
    ENDE WENN
ENDE FÜR</code></pre>
        <div class="callout achtung"><strong>Startwert-Falle:</strong> Wird das Maximum mit 0 initialisiert, liefert der Algorithmus bei lauter negativen Werten (z. B. Temperaturen im Winter) fälschlich 0. Das Minimum mit 0 zu starten ist bei positiven Werten genauso falsch.</div>
        <div class="callout tipp"><strong>Struktogramm und PAP:</strong> Nassi-Shneiderman-Struktogramme und Programmablaufpläne (PAP) begegnen dir vielleicht noch im Unterricht oder in älteren Prüfungen. Seit der 2. Auflage des Prüfungskatalogs (ab 2025) werden sie nicht mehr geprüft – Abläufe stellst du in der Prüfung als Pseudocode oder UML-Aktivitätsdiagramm dar.</div>
        <h5>Bubble Sort</h5>
        <p>Benachbarte Elemente werden verglichen und getauscht, wenn sie in falscher Reihenfolge stehen. Nach jedem Durchlauf ist das größte verbleibende Element ans Ende „aufgestiegen“ – wie eine Blase.</p>
        <pre><code>PROZEDUR bubbleSort(a[])
    n ← LÄNGE(a)
    FÜR durchlauf VON 1 BIS n − 1
        FÜR i VON 0 BIS n − 1 − durchlauf
            WENN a[i] &gt; a[i + 1] DANN
                tmp ← a[i]
                a[i] ← a[i + 1]
                a[i + 1] ← tmp
            ENDE WENN
        ENDE FÜR
    ENDE FÜR
ENDE PROZEDUR</code></pre>
        <div class="callout beispiel"><strong>Beispiel:</strong> a = [5, 3, 8, 1, 4], n = 5
          <table><thead><tr><th>nach Durchlauf</th><th>Array</th><th>Vergleiche</th><th>Tausche</th></tr></thead><tbody>
            <tr><td>1</td><td>[3, 5, 1, 4, <strong>8</strong>]</td><td>4</td><td>3</td></tr>
            <tr><td>2</td><td>[3, 1, 4, <strong>5, 8</strong>]</td><td>3</td><td>2</td></tr>
            <tr><td>3</td><td>[1, 3, <strong>4, 5, 8</strong>]</td><td>2</td><td>1</td></tr>
            <tr><td>4</td><td>[<strong>1, 3, 4, 5, 8</strong>]</td><td>1</td><td>0</td></tr>
          </tbody></table>
          Insgesamt 4 + 3 + 2 + 1 = 10 Vergleiche = n × (n − 1) ÷ 2 = 5 × 4 ÷ 2 und 6 Tausche. Mit einer Variablen <code>getauscht</code> lässt sich abbrechen, sobald ein Durchlauf ohne Tausch bleibt.</div>
        <h5>Lineare und binäre Suche</h5>
        <p>Die <strong>lineare Suche</strong> prüft ein Element nach dem anderen – funktioniert mit jeder Liste. Die <strong>binäre Suche</strong> setzt eine <strong>sortierte</strong> Liste voraus: Sie vergleicht mit dem mittleren Element und halbiert danach den Suchbereich.</p>
        <pre><code>def binaere_suche(a, gesucht):          # a muss aufsteigend sortiert sein
    links, rechts = 0, len(a) - 1
    while links &lt;= rechts:
        mitte = (links + rechts) // 2
        if a[mitte] == gesucht:
            return mitte                 # Index des Treffers
        elif a[mitte] &lt; gesucht:
            links = mitte + 1            # rechts weitersuchen
        else:
            rechts = mitte - 1           # links weitersuchen
    return -1                            # nicht gefunden</code></pre>
        <div class="callout beispiel"><strong>Suche nach 42</strong> in a = [3, 8, 12, 17, 23, 31, 42, 56]:<br>1. links 0, rechts 7 → mitte 3, a[3] = 17 &lt; 42 → links = 4<br>2. links 4, rechts 7 → mitte 5, a[5] = 31 &lt; 42 → links = 6<br>3. links 6, rechts 7 → mitte 6, a[6] = 42 → Treffer, Rückgabe 6<br>Die lineare Suche bräuchte 7 Vergleiche, die binäre nur 3.</div>
        <table><thead><tr><th>Verfahren</th><th>Voraussetzung</th><th>Aufwand</th><th>max. Vergleiche bei 1.000.000 Elementen</th></tr></thead><tbody>
          <tr><td>lineare Suche</td><td>keine</td><td>O(n)</td><td>1.000.000</td></tr>
          <tr><td>binäre Suche</td><td>sortiert</td><td>O(log n)</td><td>20 (2²⁰ ≈ 1,05 Mio.)</td></tr>
          <tr><td>Bubble Sort</td><td>–</td><td>O(n²)</td><td>ca. 5 × 10¹¹ Vergleiche</td></tr>
          <tr><td>Quicksort, Mergesort, <code>sorted()</code></td><td>–</td><td>O(n log n) im Mittel</td><td>deutlich schneller als Bubble Sort</td></tr>
        </tbody></table>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Pseudocode ergänzen (fehlende Bedingung oder Zuweisung), einen Algorithmus in Pseudocode formulieren („Ermitteln Sie den höchsten Wert im Array“) oder die Zwischenstände eines Sortier- bzw. Suchlaufs in eine Tabelle eintragen.</div>
      `
    },
    {
      id: "oop",
      title: "Objektorientierte Programmierung",
      exam: ["AP1", "AP2"],
      summary: "Klassen, Objekte, Attribute, Methoden und Konstruktor in Python, Kapselung mit Sichtbarkeiten, Vererbung, Polymorphie, abstrakte Methoden und Operatorüberladung.",
      html: `
        <p>In der <strong>objektorientierten Programmierung (OOP)</strong> bildest du Dinge aus der Wirklichkeit – Geräte, Kunden, Tickets – als <strong>Objekte</strong> ab, die ihre Daten und ihr Verhalten bündeln.</p>
        <table><thead><tr><th>Begriff</th><th>Bedeutung</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td>Klasse</td><td>Bauplan, der Attribute und Methoden festlegt</td><td><code>Geraet</code></td></tr>
          <tr><td>Objekt (Instanz)</td><td>konkretes Exemplar einer Klasse mit eigenen Attributwerten</td><td>Notebook „INV-1001“</td></tr>
          <tr><td>Attribut</td><td>Eigenschaft, Daten des Objekts</td><td><code>inventarnr</code>, <code>preis</code></td></tr>
          <tr><td>Methode</td><td>Funktion innerhalb der Klasse, Verhalten des Objekts</td><td><code>set_preis()</code></td></tr>
          <tr><td>Konstruktor</td><td>spezielle Methode, die beim Erzeugen die Attribute setzt</td><td><code>__init__()</code></td></tr>
          <tr><td><code>self</code></td><td>Verweis auf das aktuelle Objekt; erster Parameter jeder Methode</td><td><code>self.typ = typ</code></td></tr>
        </tbody></table>
        <pre><code>class Geraet:
    anzahl = 0                               # Klassenattribut (für alle Objekte)

    def __init__(self, inventarnr, typ, preis):   # Konstruktor
        self.inventarnr = inventarnr         # öffentliches Attribut
        self.typ = typ
        self.__preis = preis                 # privates Attribut
        Geraet.anzahl += 1

    def get_preis(self):                     # Getter
        return self.__preis

    def set_preis(self, preis):              # Setter mit Prüfung
        if preis &lt; 0:
            raise ValueError("Preis darf nicht negativ sein")
        self.__preis = preis

    def __str__(self):                       # Textdarstellung für print()
        return f"{self.inventarnr} ({self.typ})"

nb = Geraet("INV-1001", "Notebook", 899.0)   # Objekt erzeugen
print(nb)                 # INV-1001 (Notebook)
nb.set_preis(849.0)
print(nb.get_preis())     # 849.0
print(Geraet.anzahl)      # 1</code></pre>
        <h5>Kapselung</h5>
        <p><strong>Kapselung</strong> (Datenkapselung, Geheimnisprinzip) bedeutet: Attribute werden vor direktem Zugriff geschützt und nur über Methoden gelesen oder geändert. So kann der Setter ungültige Werte abweisen, und die interne Umsetzung lässt sich ändern, ohne dass anderer Code angepasst werden muss.</p>
        <table><thead><tr><th>Sichtbarkeit</th><th>UML</th><th>Python (Konvention)</th><th>Zugriff</th></tr></thead><tbody>
          <tr><td>public</td><td><code>+</code></td><td><code>preis</code></td><td>von überall</td></tr>
          <tr><td>protected</td><td><code>#</code></td><td><code>_preis</code></td><td>Klasse und Unterklassen (in Python nur Absprache)</td></tr>
          <tr><td>private</td><td><code>-</code></td><td><code>__preis</code></td><td>nur innerhalb der Klasse</td></tr>
        </tbody></table>
        <p>Python erzwingt Sichtbarkeiten nicht streng: <code>nb.__preis</code> führt zwar zu einem <code>AttributeError</code>, über den umbenannten Namen <code>nb._Geraet__preis</code> käme man aber noch heran (Name Mangling). Elegant sind Properties mit <code>@property</code>.</p>
        <h5>Vererbung</h5>
        <pre><code>class Notebook(Geraet):                      # Notebook erbt von Geraet
    def __init__(self, inventarnr, preis, akku_wh):
        super().__init__(inventarnr, "Notebook", preis)   # Konstruktor der Oberklasse
        self.akku_wh = akku_wh               # zusätzliches Attribut

    def __str__(self):                       # Methode überschreiben
        return super().__str__() + f", Akku {self.akku_wh} Wh"

print(Notebook("INV-1002", 1099.0, 56))      # INV-1002 (Notebook), Akku 56 Wh</code></pre>
        <p>Die <strong>Unterklasse</strong> (abgeleitete Klasse) übernimmt alle Attribute und Methoden der <strong>Oberklasse</strong> (Basisklasse), kann neue ergänzen und geerbte <strong>überschreiben</strong>. Vererbung passt nur bei einer „ist ein“-Beziehung: Ein Notebook <em>ist ein</em> Gerät.</p>
        <h5>Polymorphie und abstrakte Methoden</h5>
        <pre><code>import math
from abc import ABC, abstractmethod

class Form(ABC):                     # abstrakte Klasse
    @abstractmethod
    def flaeche(self):               # abstrakte Methode ohne Umsetzung
        pass

class Rechteck(Form):
    def __init__(self, a, b):
        self.a = a
        self.b = b
    def flaeche(self):
        return self.a * self.b

class Kreis(Form):
    def __init__(self, r):
        self.r = r
    def flaeche(self):
        return round(math.pi * self.r ** 2, 2)

for f in [Rechteck(3, 4), Kreis(1)]:
    print(f.flaeche())               # 12, dann 3.14</code></pre>
        <p><strong>Polymorphie</strong> (Vielgestaltigkeit): Derselbe Methodenaufruf <code>f.flaeche()</code> bewirkt je nach Klasse des Objekts etwas anderes. Eine <strong>abstrakte Klasse</strong> kann nicht instanziiert werden (<code>Form()</code> → <code>TypeError</code>); jede Unterklasse <em>muss</em> die abstrakten Methoden implementieren. Auch <strong>Operatorüberladung</strong> ist Polymorphie: Mit „magischen Methoden“ wie <code>__add__</code> (+), <code>__lt__</code> (&lt;), <code>__eq__</code> (==) oder <code>__str__</code> legst du fest, wie sich eigene Objekte bei Operatoren und <code>print()</code> verhalten.</p>
        <pre><code>class Datenmenge:
    def __init__(self, mib):
        self.mib = mib
    def __add__(self, other):        # a + b
        return Datenmenge(self.mib + other.mib)
    def __lt__(self, other):         # a &lt; b
        return self.mib &lt; other.mib
    def __str__(self):               # print(a)
        return f"{self.mib} MiB"

a = Datenmenge(512)
b = Datenmenge(1536)
print(a + b)     # 2048 MiB – Python ruft a.__add__(b) auf
print(a &lt; b)     # True</code></pre>
        <div class="callout merke"><strong>Merke – vier Grundprinzipien der OOP:</strong> Abstraktion (nur das Wesentliche modellieren), Kapselung (Daten schützen), Vererbung (Wiederverwendung über „ist ein“), Polymorphie (gleiche Schnittstelle, unterschiedliches Verhalten).</div>
        <div class="callout achtung"><strong>Typische Fehler:</strong> <code>self</code> als ersten Parameter vergessen; Attribute ohne <code>self.</code> anlegen (dann sind es nur lokale Variablen im Konstruktor); Klassenattribut und Objektattribut verwechseln. Klassennamen schreibt man in <code>PascalCase</code>.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> In der AP1 stehen Klassen, Attribute, Objekte, Methoden und Sichtbarkeit im Prüfungskatalog („Erläutern Sie den Unterschied zwischen Klasse und Objekt“, „OOP vs. prozedural“). Vererbung wurde mit der 2. Auflage aus dem AP1-Teil gestrichen, ist aber über das UML-Klassendiagramm in der AP2 weiter relevant.</div>
      `
    },
    {
      id: "uml",
      title: "UML: Klassen-, Aktivitäts-, Sequenz- & Zustandsdiagramm",
      exam: ["AP1", "AP2"],
      summary: "Die Notation des UML-Klassendiagramms mit Sichtbarkeiten, Beziehungen und Multiplizitäten, Aktivitätsdiagramme für Abläufe sowie die Grundzüge von Sequenz- und Zustandsdiagramm.",
      html: `
        <p>Die <strong>UML</strong> (Unified Modeling Language, standardisiert von der OMG) ist eine grafische Sprache, um Software zu planen und zu dokumentieren. <strong>Strukturdiagramme</strong> zeigen den Aufbau (z. B. Klassendiagramm), <strong>Verhaltensdiagramme</strong> den Ablauf (Anwendungsfall-, Aktivitäts-, Sequenz-, Zustandsdiagramm). Das Anwendungsfalldiagramm findest du beim Thema Anforderungen.</p>
        <h5>Klassendiagramm</h5>
        <pre class="ascii">+---------------------------------+
|             Geraet              |   Klassenname
+---------------------------------+
| - inventarnr : String           |   Attribute
| - preis : Double                |
| # standort : String             |
+---------------------------------+
| + Geraet(nr : String)           |   Methoden
| + getPreis() : Double           |
| + setPreis(preis : Double)      |
+---------------------------------+</pre>
        <p>Schreibweise: <code>Sichtbarkeit name : Typ</code> für Attribute und <code>Sichtbarkeit name(parameter : Typ) : Rückgabetyp</code> für Methoden. Sichtbarkeit: <code>+</code> public, <code>-</code> private, <code>#</code> protected, <code>~</code> package. Statische Elemente werden unterstrichen, abstrakte Klassen und Methoden kursiv bzw. mit <code>{abstract}</code> gekennzeichnet, Schnittstellen mit <code>«interface»</code>.</p>
        <table><thead><tr><th>Beziehung</th><th>Darstellung</th><th>Bedeutung / Beispiel</th></tr></thead><tbody>
          <tr><td>Assoziation</td><td>durchgezogene Linie</td><td>Klassen kennen sich: Kunde – Auftrag</td></tr>
          <tr><td>gerichtete Assoziation</td><td>Linie mit offener Pfeilspitze</td><td>nur eine Seite kennt die andere</td></tr>
          <tr><td>Aggregation</td><td>leere Raute am Ganzen</td><td>„hat“ – Teil kann allein existieren: Abteilung ◇— Mitarbeiter</td></tr>
          <tr><td>Komposition</td><td>gefüllte Raute am Ganzen</td><td>Teil ist existenzabhängig: Rechnung ◆— Rechnungsposition</td></tr>
          <tr><td>Vererbung (Generalisierung)</td><td>Linie mit leerem Dreieck zur Oberklasse</td><td>„ist ein“: Notebook —▷ Geraet</td></tr>
          <tr><td>Realisierung</td><td>gestrichelte Linie mit leerem Dreieck</td><td>Klasse implementiert eine Schnittstelle</td></tr>
        </tbody></table>
        <p><strong>Multiplizitäten</strong> stehen an den Linienenden: <code>1</code> (genau eins), <code>0..1</code> (höchstens eins), <code>*</code> bzw. <code>0..*</code> (beliebig viele), <code>1..*</code> (mindestens eins).</p>
        <div class="callout beispiel"><strong>Lesen einer Beziehung:</strong> <code>Kunde 1 ———— 0..* Auftrag</code><br>Ein Kunde erteilt keinen, einen oder beliebig viele Aufträge; jeder Auftrag gehört zu genau einem Kunden. Die Multiplizität steht immer an der Seite der Klasse, deren Anzahl sie angibt.</div>
        <h5>Aktivitätsdiagramm</h5>
        <table><thead><tr><th>Element</th><th>Symbol</th><th>Bedeutung</th></tr></thead><tbody>
          <tr><td>Startknoten</td><td>gefüllter Kreis ●</td><td>Beginn des Ablaufs</td></tr>
          <tr><td>Aktion</td><td>Rechteck mit abgerundeten Ecken</td><td>ein Arbeitsschritt</td></tr>
          <tr><td>Kontrollfluss</td><td>Pfeil</td><td>Reihenfolge</td></tr>
          <tr><td>Verzweigung / Zusammenführung</td><td>Raute ◇</td><td>Bedingungen (Guards) in eckigen Klammern, z. B. <code>[Betrag &gt; 500 €]</code> / <code>[sonst]</code></td></tr>
          <tr><td>Gabelung / Synchronisation</td><td>dicker Balken</td><td>parallele Abläufe starten bzw. zusammenführen (UND)</td></tr>
          <tr><td>Endknoten / Ablaufende</td><td>Kreis mit Punkt ◉ / Kreis mit X</td><td>beendet die ganze Aktivität / nur diesen einen Fluss</td></tr>
          <tr><td>Schwimmbahn (Partition)</td><td>senkrechte Bahnen</td><td>zeigt, wer (Rolle, Abteilung) die Aktion ausführt</td></tr>
        </tbody></table>
        <pre class="ascii">        ●
        |
 ( Ticket erfassen )
        |
        ◇ ---[Priorität = hoch]---&gt; ( 2nd-Level informieren )
        | [sonst]                               |
 ( In Warteschlange einreihen )                 |
        |                                       |
        ◇ &lt;-------------------------------------+
        |
 ( Kunde per E-Mail informieren )
        |
        ◉</pre>
        <h5>Sequenzdiagramm (Grundzüge)</h5>
        <p>Das Sequenzdiagramm zeigt den <strong>zeitlichen Nachrichtenaustausch</strong> zwischen Objekten. Jedes Objekt hat eine gestrichelte <strong>Lebenslinie</strong>; die Zeit läuft von oben nach unten. Eine <strong>synchrone Nachricht</strong> (durchgezogene Linie, gefüllte Pfeilspitze) wartet auf die Antwort, die <strong>Antwort</strong> ist gestrichelt, eine <strong>asynchrone Nachricht</strong> hat eine offene Pfeilspitze. Rahmen wie <code>alt</code> (Alternative), <code>opt</code> (optional) und <code>loop</code> (Schleife) bilden Kontrollstrukturen ab.</p>
        <pre class="ascii">:Benutzer          :Loginmaske           :AuthDienst
    |                   |                      |
    |--anmelden(u, p)--&gt;|                      |
    |                   |---pruefe(u, p)------&gt;|
    |                   |&lt;- - - - true - - - - |
    |&lt;- - Startseite - -|                      |</pre>
        <h5>Zustandsdiagramm (Grundzüge)</h5>
        <p>Das Zustandsdiagramm zeigt den <strong>Lebenszyklus eines einzelnen Objekts</strong>: in welchen Zuständen es sich befinden kann und welche Ereignisse einen Wechsel auslösen. Ein <strong>Zustand</strong> ist ein Rechteck mit abgerundeten Ecken, ein <strong>Übergang (Transition)</strong> ein Pfeil mit der Beschriftung <code>Ereignis [Bedingung] / Aktion</code>. Startzustand ●, Endzustand ◉. Im Zustand kann stehen, was beim Betreten (<code>entry /</code>), währenddessen (<code>do /</code>) und beim Verlassen (<code>exit /</code>) passiert. Zeitereignisse schreibt man mit <code>after(…)</code>, z. B. <code>after(90 Tage)</code>.</p>
        <pre class="ascii">              ●
              |
              v
   +---------------------+
   |        offen        |
   +---------------------+
              |  bearbeiten()
              v
   +---------------------------+
   |      in Bearbeitung       |
   | entry / Kunde informieren |
   +---------------------------+
              |  schliessen(loesung) [Lösung eingetragen] / Zeit buchen
              v
   +---------------------+
   |     geschlossen     |
   +---------------------+
              |  after(90 Tage) / archivieren
              v
              ◉</pre>
        <table><thead><tr><th></th><th>Aktivitätsdiagramm</th><th>Zustandsdiagramm</th></tr></thead><tbody>
          <tr><td>Frage</td><td>Welche Aktionen laufen in welcher Reihenfolge ab?</td><td>In welchem Zustand ist ein Objekt, und was löst den Wechsel aus?</td></tr>
          <tr><td>Knoten</td><td>Aktionen (Tätigkeiten)</td><td>Zustände (Situationen, in denen das Objekt verweilt)</td></tr>
          <tr><td>Beispiel</td><td>Ablauf „Passwort zurücksetzen“</td><td>Status eines Tickets oder eines Leihgeräts</td></tr>
        </tbody></table>
        <p>Laut Prüfungskatalog gehört das Zustandsdiagramm vor allem zur Anwendungsentwicklung; für die Systemintegration genügt es, ein einfaches Diagramm lesen und ergänzen zu können. In Python bildest du es z. B. mit einem Attribut <code>status</code> und Methoden ab, die nur erlaubte Übergänge zulassen – wie in der Übung zur Klasse <code>Ticket</code>.</p>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Aggregation (leere Raute) und Komposition (gefüllte Raute) nicht verwechseln – die Raute sitzt immer am <em>Ganzen</em>. Beim Vererbungspfeil zeigt das Dreieck zur <em>Oberklasse</em>.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1 – Klassendiagramm aus einem Text ableiten oder ergänzen (Attribute mit Sichtbarkeit und Datentyp, Methoden, Multiplizitäten), Aktivitätsdiagramm zu einem beschriebenen Ablauf zeichnen (Herbst 2025), UML-Klassendiagramm (Frühjahr 2026). AP2 – zusätzlich Sequenzdiagramme lesen und ergänzen sowie Zustandsdiagramme in den Grundzügen lesen. Die Notation liegt im Belegsatz bei; halte dich genau daran.</div>
      `
    },
    {
      id: "daten-codierung",
      title: "Daten analysieren, codieren & speichern",
      exam: ["AP1", "AP2"],
      summary: "Daten, Information und Wissen unterscheiden, Daten nach Herkunft, Art, Schutzbedarf und Speicherbedarf analysieren, Zahlensysteme und Zeichencodierung (ASCII, UTF-8) verstehen und eine passende Speicherlösung wählen.",
      html: `
        <p>Bevor du Software zur Datenverwaltung anpasst, klärst du, <strong>welche Daten</strong> anfallen, wie sie im Rechner dargestellt werden und <strong>wo</strong> sie gespeichert werden sollen.</p>
        <h5>Zeichen – Daten – Information – Wissen</h5>
        <table><thead><tr><th>Stufe</th><th>Erklärung</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td>Zeichen</td><td>einzelne Symbole aus einem Zeichenvorrat</td><td>2 · 1 · , · 5</td></tr>
          <tr><td>Daten</td><td>Zeichen nach Syntaxregeln zusammengesetzt, noch ohne Bedeutung</td><td>21,5</td></tr>
          <tr><td>Information</td><td>Daten mit Bedeutung in einem Zusammenhang</td><td>Temperatur im Serverraum: 21,5 °C</td></tr>
          <tr><td>Wissen</td><td>vernetzte Informationen, die Handeln ermöglichen</td><td>Ab 27 °C droht Überhitzung – Klimaanlage prüfen</td></tr>
        </tbody></table>
        <h5>Daten analysieren</h5>
        <ul>
          <li><strong>Herkunft:</strong> intern (Warenwirtschaft, Ticketsystem) oder extern (Lieferanten-API, Open Data); manuell erfasst oder automatisch (Sensor, Logdatei)</li>
          <li><strong>Art:</strong> Stammdaten (selten geändert: Kunden, Artikel) oder Bewegungsdaten (laufend neu: Aufträge, Messwerte); strukturiert, semistrukturiert oder unstrukturiert</li>
          <li><strong>Verfügbarkeit:</strong> Wer braucht die Daten wann, wie oft und von wo?</li>
          <li><strong>Datenschutz:</strong> Sind personenbezogene Daten dabei? → DSGVO: Zweckbindung, Datenminimierung, Löschfristen, ggf. Pseudonymisierung</li>
          <li><strong>Datensicherheit:</strong> Schutzbedarf für Vertraulichkeit, Integrität, Verfügbarkeit → Zugriffsrechte, Backup, Verschlüsselung</li>
          <li><strong>Speicherbedarf:</strong> Anzahl Datensätze × Größe je Datensatz, dazu das Wachstum pro Jahr</li>
        </ul>
        <h5>Zahlensysteme und Zeichencodierung</h5>
        <p>Der Rechner speichert alles binär. Ein <strong>Byte</strong> hat 8 Bit und kann 2⁸ = 256 Werte darstellen (0–255). Eine Hexadezimalziffer steht für genau 4 Bit: 1010 1111₂ = AF₁₆ = 175₁₀. In Python: <code>bin(175)</code> → <code>'0b10101111'</code>, <code>hex(175)</code> → <code>'0xaf'</code>, <code>int("AF", 16)</code> → <code>175</code>.</p>
        <p><strong>ASCII</strong> codiert 128 Zeichen mit 7 Bit, z. B. „A“ = 65 = 41₁₆. <strong>Unicode</strong> umfasst die Zeichen aller Schriften; die Codierung <strong>UTF-8</strong> braucht 1 bis 4 Byte je Zeichen: ASCII-Zeichen 1 Byte, Umlaute und ß 2 Byte, € 3 Byte, die meisten Emojis 4 Byte. „Straße“ hat 6 Zeichen, belegt aber 7 Byte (<code>len("Straße".encode("utf-8"))</code> → 7). Werden Daten mit falscher Codierung gelesen, erscheinen Umlaute als Zeichensalat.</p>
        <div class="callout formel"><strong>Speicherbedarf</strong> = Anzahl Datensätze × Byte je Datensatz<br>1 KiB = 1024 Byte · 1 MiB = 1024 KiB = 1.048.576 Byte · 1 GiB = 1024 MiB<br>(dezimal: 1 kB = 1000 Byte, 1 MB = 1.000.000 Byte)</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> Eine Kundendatei hat 12.000 Datensätze zu je 250 Byte.<br>12.000 × 250 Byte = 3.000.000 Byte<br>3.000.000 Byte ÷ 1024 = 2.929,69 KiB<br>2.929,69 KiB ÷ 1024 ≈ <strong>2,86 MiB</strong> (mit Dezimalpräfix wären es 3,0 MB). Laut Prüfungskatalog werden Datenmengen mit Binärpräfixen (KiB, MiB, GiB) angegeben, Datenraten dagegen dezimal (kbit/s, Mbit/s). Gibt die Aufgabe eine Einheit vor, rechnest du genau in dieser.</div>
        <p><strong>Paritätsbit</strong> (einfaches Prüfverfahren): Ein zusätzliches Bit ergänzt die Anzahl der Einsen auf eine gerade (gerade Parität) bzw. ungerade Zahl (ungerade Parität). „C“ = 100 0011₂ hat drei Einsen → bei gerader Parität ist das Paritätsbit 1. Kippt bei der Übertragung ein Bit, stimmt die Parität nicht mehr – zwei gekippte Bits bleiben allerdings unentdeckt.</p>
        <h5>Speicherlösungen</h5>
        <table><thead><tr><th>Lösung</th><th>Stärken</th><th>Schwächen</th></tr></thead><tbody>
          <tr><td>Datei (CSV, JSON)</td><td>einfach, kein Server nötig, ideal zum Austausch</td><td>kein sicherer Mehrbenutzerzugriff, keine Abfragesprache, Konsistenz nicht gesichert</td></tr>
          <tr><td>relationale Datenbank (MariaDB, PostgreSQL, SQL Server)</td><td>Tabellen mit festem Schema, Abfragen per SQL, Transaktionen, Schlüssel sichern die Konsistenz</td><td>Schema muss vorab geplant werden</td></tr>
          <tr><td>NoSQL-Datenbank (z. B. MongoDB, Redis)</td><td>flexibles Schema als Dokument-, Schlüssel-Wert-, Spalten- oder Graphdatenbank; gut skalierbar</td><td>oft schwächere Konsistenzgarantien, keine einheitliche Abfragesprache</td></tr>
          <tr><td>Cloud-Speicher / Datenbank als Dienst</td><td>skalierbar, kein eigener Betrieb, Abrechnung nach Nutzung</td><td>Anbieterabhängigkeit, Datenschutz (Serverstandort, Auftragsverarbeitung)</td></tr>
        </tbody></table>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1 – Speicherbedarf und Dateigrößen in KiB/MiB/GiB berechnen (Einheit genau beachten), Daten als personenbezogen einordnen und Schutzmaßnahmen nennen. AP2 – Speicherlösungen und relationale gegenüber NoSQL-Datenbanken begründet auswählen, Prüfverfahren wie Parität erklären, Codierungsprobleme (Umlaute) beim Datenaustausch lösen.</div>
      `
    },
    {
      id: "daten-db",
      title: "Relationale Datenbanken: ER-Modell, Normalisierung & SQL-Überblick",
      exam: ["AP1", "AP2"],
      summary: "Tabellen, Primär- und Fremdschlüssel, Datentypen und referenzielle Integrität, ER-Modell mit Kardinalitäten und Überführung in Tabellen, Anomalien und Normalisierung bis zur 3. NF sowie ein erster Blick auf SQL.",
      html: `
        <p>In einer <strong>relationalen Datenbank</strong> stehen Daten in <strong>Tabellen</strong> (Relationen): jede Zeile ein <strong>Datensatz</strong>, jede Spalte ein <strong>Attribut</strong>. Ein Datenbankmanagementsystem (DBMS) wie MariaDB oder PostgreSQL verwaltet die Tabellen, regelt den gleichzeitigen Zugriff mehrerer Benutzer und sichert die Konsistenz.</p>
        <h5>Schlüssel, Integrität, Datentypen</h5>
        <ul>
          <li><strong>Primärschlüssel</strong> (PK): identifiziert jeden Datensatz eindeutig und darf nicht leer sein, z. B. KundenNr.</li>
          <li><strong>Fremdschlüssel</strong> (FK): verweist auf den Primärschlüssel einer anderen Tabelle und verknüpft so die Tabellen.</li>
          <li><strong>Referenzielle Integrität:</strong> Ein Fremdschlüssel darf nur auf vorhandene Datensätze zeigen. Beim Löschen oder Ändern eines Kunden wird z. B. blockiert oder per Lösch- bzw. Aktualisierungsweitergabe (<code>ON DELETE CASCADE</code>, <code>ON UPDATE CASCADE</code>) mitgelöscht bzw. mitgeändert.</li>
          <li><strong>Datentypen:</strong> Ganzzahl (<code>INT</code>), Festkomma für Geldbeträge (<code>DECIMAL(10,2)</code>), Gleitkomma (<code>DOUBLE</code>), Wahrheitswert (<code>BOOLEAN</code>), Datum/Zeit (<code>DATE</code>, <code>DATETIME</code>), Text fester Länge (<code>CHAR(5)</code> für eine PLZ) oder variabler Länge (<code>VARCHAR(80)</code>), Binärdaten (<code>BLOB</code>).</li>
        </ul>
        <h5>Entity-Relationship-Modell (ERM)</h5>
        <p>Das ERM plant die Datenbank vor der Umsetzung. Ein <strong>Entitätstyp</strong> (Rechteck, z. B. Kunde) fasst gleichartige <strong>Entitäten</strong> zusammen (der einzelne Kunde „Wattblick GmbH“). Dazu kommen <strong>Attribute</strong> (Ellipse, Schlüssel unterstrichen), <strong>Beziehungen</strong> (Raute) und <strong>Kardinalitäten</strong>.</p>
        <pre class="ascii">[Kunde] 1 ---- ◇ erteilt ◇ ---- n [Auftrag] n ---- ◇ enthält ◇ ---- m [Artikel]</pre>
        <table><thead><tr><th>Kardinalität</th><th>Beispiel</th><th>Umsetzung in Tabellen</th></tr></thead><tbody>
          <tr><td>1:1</td><td>Mitarbeiter – Dienstwagen</td><td>Fremdschlüssel in einer der beiden Tabellen (eindeutig)</td></tr>
          <tr><td>1:n</td><td>Kunde – Auftrag</td><td>Fremdschlüssel auf der n-Seite: Auftrag erhält die KundenNr</td></tr>
          <tr><td>n:m</td><td>Auftrag – Artikel</td><td>eigene Zwischentabelle mit beiden Fremdschlüsseln (zusammen Primärschlüssel), ggf. mit Attributen wie Menge</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Relationenmodell</strong> (Primärschlüssel fett, Fremdschlüssel mit ↑):<br>Kunde(<strong>KundenNr</strong>, Name, PLZ, Ort)<br>Auftrag(<strong>AuftragsNr</strong>, Datum, KundenNr↑)<br>Artikel(<strong>ArtikelNr</strong>, Bezeichnung, Preis)<br>Auftragsposition(<strong>AuftragsNr↑, ArtikelNr↑</strong>, Menge)</div>
        <h5>Anomalien und Normalisierung</h5>
        <p>Stehen alle Daten in einer großen Tabelle, wiederholen sich z. B. die Kundendaten in jedem Auftrag (<strong>Redundanz</strong>). Das führt zu <strong>Anomalien</strong>: Ein Kunde ohne Auftrag lässt sich nicht speichern (Einfügeanomalie), eine neue Adresse muss in vielen Zeilen geändert werden (Änderungsanomalie), mit dem letzten Auftrag verschwindet auch der Kunde (Löschanomalie). Die <strong>Normalisierung</strong> zerlegt Tabellen schrittweise:</p>
        <ul>
          <li><strong>1. Normalform:</strong> Jedes Attribut enthält nur atomare (unteilbare) Werte – keine Listen wie „SSD, RAM“ in einer Zelle.</li>
          <li><strong>2. Normalform:</strong> 1. NF, und jedes Nicht-Schlüsselattribut hängt vom <em>gesamten</em> Primärschlüssel ab – wichtig bei zusammengesetzten Schlüsseln (die Artikelbezeichnung hängt nur von der ArtikelNr ab, nicht von der AuftragsNr).</li>
          <li><strong>3. Normalform:</strong> 2. NF, und kein Nicht-Schlüsselattribut hängt von einem anderen Nicht-Schlüsselattribut ab (keine transitive Abhängigkeit) – z. B. Ort hängt von der PLZ ab → eigene Tabelle.</li>
        </ul>
        <h5>SQL im Überblick</h5>
        <pre><code>SELECT k.Name, COUNT(*) AS Auftraege           -- Projektion, Aggregat
FROM Kunde k
JOIN Auftrag a ON a.KundenNr = k.KundenNr      -- Tabellen verknüpfen
WHERE a.Datum &gt;= '2026-01-01'                  -- Selektion
GROUP BY k.Name                                -- gruppieren
ORDER BY Auftraege DESC;                       -- sortieren

UPDATE Kunde SET Ort = 'Heide' WHERE KundenNr = 17;   -- ohne WHERE: alle Zeilen!</code></pre>
        <div class="callout achtung"><strong>Prüfungsrelevanz:</strong> In der AP1 wird seit der 2. Auflage des Prüfungskatalogs (gültig ab Frühjahr 2025) nur noch das <strong>ER-Modell</strong> geprüft (Entitäten, Kardinalitäten, Überführung in Tabellen, einfache Datentypen) – ohne SQL. Normalisierung, referenzielle Integrität und SQL (CREATE TABLE, INSERT, UPDATE, DELETE, SELECT mit JOIN und GROUP BY) gehören zur AP2 und werden in LF 8 vertieft.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1 – ERM aus einem Text erstellen oder ergänzen (Entitätstypen, Beziehungen, Kardinalitäten), n:m-Beziehungen auflösen, Primär- und Fremdschlüssel benennen, Datensätze Tabellen zuordnen. AP2 – Anomalien erkennen, Tabellen bis zur 3. NF normalisieren, Datentypen wählen und SQL-Abfragen schreiben.</div>
      `
    },
    {
      id: "anforderungen",
      title: "Anforderungen, Vorgehensmodelle & Dokumentation",
      exam: ["AP1", "AP2"],
      summary: "Bedarfsanalyse, Lasten- und Pflichtenheft, funktionale und nicht-funktionale Anforderungen, Anwendungsfalldiagramm, Wasserfall, V-Modell, Scrum und Kanban sowie Software dokumentieren.",
      html: `
        <p>Bevor programmiert wird, muss klar sein, <strong>was</strong> die Software leisten soll. Fehler in den Anforderungen sind am teuersten, weil sie sich durch alle späteren Phasen ziehen.</p>
        <h5>Bedarfsanalyse</h5>
        <p>Die <strong>Ist-Analyse</strong> erfasst den aktuellen Zustand und seine Schwachstellen (z. B. Geräteliste als Tabellenkalkulation, die nur eine Person gleichzeitig bearbeiten kann). Das <strong>Soll-Konzept</strong> beschreibt den gewünschten Zustand. Methoden: Interview, Fragebogen, Beobachtung, Dokumentenanalyse, Workshop.</p>
        <h5>Lastenheft und Pflichtenheft</h5>
        <table><thead><tr><th></th><th>Lastenheft</th><th>Pflichtenheft</th></tr></thead><tbody>
          <tr><td>Urheber</td><td>Auftraggeber (Kunde)</td><td>Auftragnehmer (Dienstleister, Entwicklung)</td></tr>
          <tr><td>Leitfrage</td><td><strong>Was</strong> soll erreicht werden und <strong>wofür</strong>?</td><td><strong>Wie</strong> und <strong>womit</strong> wird es umgesetzt?</td></tr>
          <tr><td>Inhalt</td><td>Ausgangssituation, Ziele, funktionale und nicht-funktionale Anforderungen, Rahmenbedingungen (Budget, Termine), Abnahmekriterien</td><td>technische Lösung zu jeder Anforderung: Architektur, Plattform, Schnittstellen, Datenmodell, Zeit- und Testplan</td></tr>
          <tr><td>Zweck</td><td>Grundlage für Angebote</td><td>nach Freigabe durch den Kunden verbindliche Grundlage für Umsetzung und Abnahme</td></tr>
        </tbody></table>
        <div class="callout tipp"><strong>Eselsbrücke:</strong> Lastenheft = die Wünsche, die der <strong>Kunde</strong> „auf-lastet“ (Was?) · Pflichtenheft = die <strong>Pflichten</strong>, die der Auftragnehmer übernimmt (Wie?).</div>
        <h5>Anforderungsarten und Qualitätsmerkmale</h5>
        <p><strong>Funktionale Anforderungen</strong> beschreiben, <em>was</em> das System tun soll („Das System muss Geräte nach Standort filtern können“). <strong>Nicht-funktionale Anforderungen</strong> beschreiben, <em>wie gut</em> es das tut („Die Suche liefert Ergebnisse in unter 2 Sekunden“, „Nur angemeldete Nutzer dürfen Daten ändern“). Gute Anforderungen sind eindeutig, prüfbar (messbar) und vollständig.</p>
        <table><thead><tr><th>Qualitätsmerkmal (ISO/IEC 9126 bzw. 25010)</th><th>Frage</th><th>Beispiel-Anforderung</th></tr></thead><tbody>
          <tr><td>Funktionalität (funktionale Eignung)</td><td>Tut die Software das Geforderte korrekt?</td><td>Berichte enthalten alle Geräte mit abgelaufener Garantie.</td></tr>
          <tr><td>Zuverlässigkeit</td><td>Läuft sie stabil und verfügbar?</td><td>Verfügbarkeit 99,5 % in der Arbeitszeit</td></tr>
          <tr><td>Benutzbarkeit</td><td>Ist sie leicht erlernbar und bedienbar?</td><td>vollständig per Tastatur bedienbar</td></tr>
          <tr><td>Effizienz</td><td>Wie ist das Zeit- und Ressourcenverhalten?</td><td>Suche in unter 2 Sekunden</td></tr>
          <tr><td>Wartbarkeit (Änderbarkeit, Erweiterbarkeit)</td><td>Lässt sie sich leicht ändern und erweitern?</td><td>neuer Standort ohne Codeänderung konfigurierbar</td></tr>
          <tr><td>Übertragbarkeit (Portabilität)</td><td>Läuft sie in anderen Umgebungen?</td><td>läuft unter Windows und Linux</td></tr>
        </tbody></table>
        <p>ISO/IEC 25010, der Nachfolger von ISO/IEC 9126, führt zusätzlich Kompatibilität und Informationssicherheit als eigene Merkmale. Die Neufassung von 2023 benennt einige Merkmale um (z. B. Benutzbarkeit → Interaktionsfähigkeit, Übertragbarkeit → Flexibilität) und ergänzt die Betriebssicherheit (Safety). Der Prüfungskatalog verwendet die klassischen Begriffe aus der Tabelle.</p>
        <h5>Anwendungsfalldiagramm (Use Case)</h5>
        <pre class="ascii">               +------------------- Ticketsystem -------------------+
   O           |                                                    |
  /|\\ ---------|--- ( Ticket erstellen ) - - «include» - -+         |
  / \\          |              ^                           |         |
Mitarbeiter    |              : «extend»                  v         |
               |   ( Screenshot anhängen )           ( Anmelden )   |
   O           |                                          ^         |
  /|\\ ---------|--- ( Ticket bearbeiten ) - - «include» - +         |
  / \\          |                                                    |
Supporter      +----------------------------------------------------+</pre>
        <ul>
          <li><strong>Akteur</strong> (Strichmännchen) außerhalb der <strong>Systemgrenze</strong>: Rolle eines Benutzers oder ein externes System</li>
          <li><strong>Anwendungsfall</strong> (Ellipse): Funktion mit Nutzen für den Akteur, benannt mit Objekt + Verb</li>
          <li><strong>Assoziation</strong> (Linie): Akteur ist am Anwendungsfall beteiligt</li>
          <li><strong>«include»</strong>: gestrichelter Pfeil vom Basisfall zum eingebundenen Fall – wird <em>immer</em> mit ausgeführt</li>
          <li><strong>«extend»</strong>: gestrichelter Pfeil vom erweiternden Fall zum Basisfall – nur <em>unter einer Bedingung</em>. Im Basisfall kann ein <strong>Erweiterungspunkt</strong> (extension point) angegeben werden, an dem die Erweiterung einsetzt, z. B. „Ticket erstellen – extension points: Anhang“ mit der Bedingung <code>{Nutzer wählt „Datei anhängen“}</code>.</li>
          <li><strong>Generalisierung</strong>: Linie mit leerem Dreieck, z. B. Administrator ist ein spezieller Supporter</li>
        </ul>
        <h5>Vorgehensmodelle</h5>
        <table><thead><tr><th>Modell</th><th>Prinzip</th><th>Vorteile</th><th>Nachteile</th></tr></thead><tbody>
          <tr><td>Wasserfall</td><td>Phasen nacheinander: Analyse → Entwurf → Implementierung → Test → Einführung; jede Phase endet mit einem Ergebnisdokument</td><td>gut planbar, klare Dokumentation</td><td>späte Änderungen teuer, Kunde sieht das Ergebnis erst am Ende</td></tr>
          <tr><td>V-Modell</td><td>jeder Entwurfsphase steht eine Teststufe gegenüber (Anforderungen ↔ Abnahmetest, Systementwurf ↔ Systemtest, Architektur ↔ Integrationstest, Modulentwurf ↔ Komponententest)</td><td>Qualitätssicherung von Anfang an</td><td>schwerfällig bei sich ändernden Anforderungen</td></tr>
          <tr><td>Scrum</td><td>agil in Sprints fester Länge (höchstens ein Monat, oft 2 Wochen); Rollen Product Owner, Scrum Master, Developers; Artefakte Product Backlog, Sprint Backlog, Inkrement; Events Sprint Planning, Daily Scrum, Sprint Review, Sprint-Retrospektive</td><td>früh lauffähige Ergebnisse, flexibel, enger Kundenkontakt</td><td>Gesamtaufwand schwer vorhersagbar, viel Abstimmung nötig</td></tr>
          <tr><td>Kanban</td><td>Board mit Spalten (Zu tun – In Arbeit – Erledigt), Begrenzung der gleichzeitig laufenden Aufgaben (WIP-Limit), kontinuierlicher Fluss</td><td>einfach, Engpässe werden sichtbar</td><td>wenig Planungsstruktur für große Projekte</td></tr>
        </tbody></table>
        <h5>Dokumentation</h5>
        <p><strong>Benutzerdokumentation</strong> (Handbuch, Online-Hilfe, Kurzanleitung) richtet sich an Anwender, <strong>Entwickler- bzw. Systemdokumentation</strong> (Kommentare, Docstrings, README, Installations- und Schnittstellenbeschreibung, Datenmodell) an Entwickler und Administratoren. Kommentare erklären das <em>Warum</em>, nicht das Offensichtliche. Test- und Abnahmeprotokolle belegen die Qualitätssicherung. <strong>Mock-ups</strong> (Entwürfe von Bildschirmmasken) helfen, Missverständnisse mit dem Kunden früh zu erkennen.</p>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1 – Zweck, Urheber und Inhalt von Lasten- und Pflichtenheft nennen, Wasserfall und Scrum beschreiben und begründet auswählen, ein Anwendungsfalldiagramm ergänzen oder zeichnen. AP2 – Softwareanforderungen messbar formulieren und Qualitätsmerkmalen zuordnen, Mock-ups skizzieren. V-Modell und Kanban nennt der Prüfungskatalog nicht ausdrücklich; sie sind Unterrichtsstoff und helfen, die Teststufen zu verstehen.</div>
      `
    },
  ],
  exercises: [
    {
      id: "e-sprache-waehlen",
      topic: "sprachen",
      title: "Programmiersprache für ein Auswertungsskript wählen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die <strong>Nordlicht IT GmbH in Heide</strong> exportiert jede Woche die Inventarliste ihres Warenwirtschaftssystems als CSV-Datei. Daraus soll automatisch ein Bericht entstehen. Zur Wahl stehen C++ und Python. Im Team haben zwei Azubis bereits Python-Kenntnisse, das Skript soll auf Windows- und Linux-Servern laufen.</p>
        <p>a) Nennen Sie zwei Unterschiede zwischen einem Compiler und einem Interpreter.</p>
        <p>b) Begründen Sie, welche der beiden Sprachen Sie für das Skript empfehlen.</p>
        <p>c) Erläutern Sie den Unterschied zwischen einer Bibliothek und einem Framework.</p>
        <p>d) Nennen Sie zwei Vorteile, wenn das Team den Quellcode mit Git verwaltet.</p>`,
      hints: ["Denk an Zeitpunkt der Übersetzung, Ergebnis und Portabilität.", "Beim Begründen immer auf die Situation (Team, Plattformen, CSV) eingehen."],
      solution: `<p><strong>a)</strong> (zwei genügen)</p>
        <ul>
          <li>Ein Compiler übersetzt den gesamten Quellcode <em>vor</em> der Ausführung; ein Interpreter übersetzt und führt den Code Anweisung für Anweisung <em>zur Laufzeit</em> aus.</li>
          <li>Der Compiler erzeugt eine eigenständig ausführbare Datei; beim Interpreter wird der Quellcode zusammen mit dem Interpreter benötigt.</li>
          <li>Kompilierte Programme laufen meist schneller; interpretierte Programme sind dafür ohne erneutes Übersetzen auf jeder Plattform mit Interpreter lauffähig.</li>
          <li>Der Compiler meldet Syntaxfehler vor dem Start; beim Interpreter treten Laufzeitfehler erst auf, wenn die betroffene Zeile erreicht wird.</li>
        </ul>
        <p><strong>b)</strong> Empfehlung: <strong>Python</strong>. Das Team hat bereits Python-Kenntnisse, sodass keine Einarbeitung nötig ist. Python wird interpretiert und läuft ohne Neuübersetzung auf Windows und Linux. Die Standardbibliothek enthält mit dem Modul <code>csv</code> bereits alles zum Einlesen der Exportdatei, und Änderungen am Skript sind ohne Übersetzungsschritt schnell möglich. Die höhere Ausführungsgeschwindigkeit von C++ spielt bei einem wöchentlichen Bericht keine Rolle.</p>
        <p><strong>c)</strong> Eine <strong>Bibliothek</strong> ist eine Sammlung fertiger Funktionen oder Klassen, die das eigene Programm bei Bedarf aufruft – der eigene Code behält die Kontrolle über den Ablauf (z. B. <code>csv</code>, <code>math</code>). Ein <strong>Framework</strong> gibt dagegen ein Programmgerüst und den Ablauf vor und ruft den eigenen Code an festgelegten Stellen auf (z. B. Django für Webanwendungen).</p>
        <p><strong>d)</strong> (zwei genügen) Jede Änderung ist mit Autor, Zeitpunkt und Kommentar nachvollziehbar · frühere, funktionierende Stände lassen sich wiederherstellen · mehrere Personen können parallel in Branches arbeiten und ihre Änderungen zusammenführen · das entfernte Repository dient zusätzlich als Sicherung.</p>`
    },
    {
      id: "e-operatoren",
      topic: "python-basics",
      title: "Ausgabe bestimmen: Operatoren und Typen",
      level: 1,
      exam: ["AP1"],
      task: `<p>Geben Sie für jede <code>print</code>-Anweisung die Bildschirmausgabe an.</p>
        <pre><code>a = 17
b = 5
print(a // b, a % b)      # 1
print(a / b)              # 2
print(str(a) + str(b))    # 3
print(a + b * 2 ** 2)     # 4
c = int("8") + int(3.7)
print(c)                  # 5
print(a &gt; b and b &gt; 10)   # 6</code></pre>`,
      hints: ["// schneidet ab, % liefert den Rest.", "Potenz vor Punkt vor Strich."],
      solution: `<table><thead><tr><th>Nr.</th><th>Ausgabe</th><th>Begründung</th></tr></thead><tbody>
          <tr><td>1</td><td><code>3 2</code></td><td>17 ÷ 5 = 3 Rest 2</td></tr>
          <tr><td>2</td><td><code>3.4</code></td><td><code>/</code> liefert immer eine Gleitkommazahl</td></tr>
          <tr><td>3</td><td><code>175</code></td><td>zwei Strings werden verkettet: "17" + "5"</td></tr>
          <tr><td>4</td><td><code>37</code></td><td>2 ** 2 = 4 → 5 × 4 = 20 → 17 + 20 = 37</td></tr>
          <tr><td>5</td><td><code>11</code></td><td><code>int("8")</code> = 8, <code>int(3.7)</code> = 3 (abgeschnitten) → 11</td></tr>
          <tr><td>6</td><td><code>False</code></td><td>17 &gt; 5 ist True, 5 &gt; 10 ist False → True and False = False</td></tr>
        </tbody></table>`
    },
    {
      id: "e-typfehler",
      topic: "python-basics",
      title: "Lizenzrechner reparieren",
      level: 2,
      exam: ["AP1"],
      task: `<p>Die <strong>Wattblick GmbH in Büsum</strong> möchte mit einem kleinen Skript den Gesamtpreis für Softwarelizenzen berechnen. Das Skript bricht mit einer Fehlermeldung ab:</p>
        <pre><code>anzahl = input("Anzahl Lizenzen: ")
preis = 49.90
gesamt = anzahl * preis
print("Gesamtpreis: " + gesamt + " €")</code></pre>
        <p>a) Erklären Sie, warum Zeile 3 einen Fehler auslöst, und benennen Sie die Fehlerart.</p>
        <p>b) Korrigieren Sie das Skript so, dass der Preis mit zwei Nachkommastellen und deutschem Dezimalkomma ausgegeben wird.</p>
        <p>c) Geben Sie die Ausgabe für die Eingabe <code>12</code> an.</p>`,
      solution: `<p><strong>a)</strong> <code>input()</code> liefert immer einen String. In Zeile 3 wird der String <code>"12"</code> mit der Gleitkommazahl 49.90 multipliziert – das ist nicht definiert, Python meldet einen <code>TypeError</code> (<em>can't multiply sequence by non-int of type 'float'</em>). Es ist ein <strong>Laufzeitfehler</strong>: Die Syntax stimmt, der Fehler tritt erst bei der Ausführung auf. Zeile 4 hätte denselben Fehler, weil ein String nicht mit einer Zahl verkettet werden kann.</p>
        <p><strong>b)</strong></p>
        <pre><code>anzahl = int(input("Anzahl Lizenzen: "))    # Text → ganze Zahl
preis = 49.90
gesamt = anzahl * preis
ausgabe = f"{gesamt:.2f}".replace(".", ",")
print(f"Gesamtpreis: {ausgabe} €")</code></pre>
        <p><strong>c)</strong> 12 × 49,90 € = 598,80 € → Ausgabe: <code>Gesamtpreis: 598,80 €</code></p>
        <p>Hinweis: Ohne Formatierung würde Python <code>598.8</code> ausgeben – deshalb die Formatangabe <code>:.2f</code>.</p>`
    },
    {
      id: "e-anfahrt",
      topic: "kontrollstrukturen",
      title: "Anfahrtspauschale mit if/elif/else",
      level: 2,
      exam: ["AP1"],
      task: `<p>Die <strong>Deichgraf IT-Service GmbH in Husum</strong> berechnet für Vor-Ort-Einsätze eine Anfahrtspauschale:</p>
        <ul><li>bis einschließlich 10 km: 0 €</li><li>über 10 km bis einschließlich 30 km: 25,00 €</li><li>über 30 km: 25,00 € plus 0,80 € für jeden Kilometer über 30</li><li>negative Entfernungen sind ungültig</li></ul>
        <p>a) Schreiben Sie ein Python-Programm, das die Entfernung einliest und die Pauschale ausgibt.</p>
        <p>b) Berechnen Sie die Pauschale für 45 km.</p>
        <p>c) Nennen Sie vier sinnvolle Testwerte an den Grenzen und die erwarteten Ergebnisse.</p>`,
      solution: `<p><strong>a)</strong></p>
        <pre><code>km = float(input("Entfernung in km: "))
if km &lt; 0:
    print("Ungültige Entfernung")
else:
    if km &lt;= 10:
        pauschale = 0.0
    elif km &lt;= 30:
        pauschale = 25.0
    else:
        pauschale = 25.0 + (km - 30) * 0.80
    print(f"Anfahrtspauschale: {pauschale:.2f} €")</code></pre>
        <p>Die Reihenfolge der Bedingungen ist wichtig: Weil nur der erste zutreffende Zweig ausgeführt wird, reicht bei <code>elif</code> die Obergrenze <code>km &lt;= 30</code>.</p>
        <p><strong>b)</strong> 45 km liegen über 30 km: 45 − 30 = 15 km × 0,80 € = 12,00 €; 25,00 € + 12,00 € = <strong>37,00 €</strong>.</p>
        <p><strong>c)</strong> 10 km → 0,00 € · 11 km → 25,00 € · 30 km → 25,00 € · 31 km → 25,80 € (zusätzlich sinnvoll: 0 km → 0,00 €, −1 km → „Ungültige Entfernung“).</p>`
    },
    {
      id: "e-schreibtisch-pseudo",
      topic: "kontrollstrukturen",
      title: "Schreibtischtest mit verschachtelter Verzweigung",
      level: 3,
      exam: ["AP1"],
      task: `<p>Ein Kollege der Nordlicht IT GmbH hat den folgenden Pseudocode entworfen. Führen Sie einen Schreibtischtest durch.</p>
        <pre><code>x ← 0
y ← 1
FÜR i VON 1 BIS 6
    WENN i MOD 2 = 0 DANN
        x ← x + i
    SONST
        WENN i &gt; 3 DANN
            y ← y * 2
        SONST
            y ← y + i
        ENDE WENN
    ENDE WENN
ENDE FÜR
AUSGABE x, y</code></pre>
        <p>a) Tragen Sie die Werte von <code>i</code>, <code>x</code> und <code>y</code> nach jedem Schleifendurchlauf in eine Tabelle ein.</p>
        <p>b) Geben Sie die Ausgabe an.</p>
        <p>c) Beschreiben Sie in einem Satz, was in <code>x</code> berechnet wird.</p>
        <p>d) Setzen Sie den Pseudocode in Python um.</p>`,
      hints: ["MOD liefert den Rest: i MOD 2 = 0 heißt „i ist gerade“.", "FÜR i VON 1 BIS 6 schließt die 6 ein."],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>i</th><th>i gerade?</th><th>i &gt; 3?</th><th>x</th><th>y</th></tr></thead><tbody>
          <tr><td>Start</td><td>–</td><td>–</td><td>0</td><td>1</td></tr>
          <tr><td>1</td><td>nein</td><td>nein</td><td>0</td><td>1 + 1 = 2</td></tr>
          <tr><td>2</td><td>ja</td><td>–</td><td>0 + 2 = 2</td><td>2</td></tr>
          <tr><td>3</td><td>nein</td><td>nein</td><td>2</td><td>2 + 3 = 5</td></tr>
          <tr><td>4</td><td>ja</td><td>–</td><td>2 + 4 = 6</td><td>5</td></tr>
          <tr><td>5</td><td>nein</td><td>ja</td><td>6</td><td>5 × 2 = 10</td></tr>
          <tr><td>6</td><td>ja</td><td>–</td><td>6 + 6 = 12</td><td>10</td></tr>
        </tbody></table>
        <p><strong>b)</strong> Ausgabe: <code>12, 10</code></p>
        <p><strong>c)</strong> In <code>x</code> wird die Summe aller geraden Zahlen von 1 bis 6 gebildet (2 + 4 + 6 = 12).</p>
        <p><strong>d)</strong></p>
        <pre><code>x = 0
y = 1
for i in range(1, 7):        # BIS 6 inklusive → range(1, 7)
    if i % 2 == 0:
        x = x + i
    else:
        if i &gt; 3:
            y = y * 2
        else:
            y = y + i
print(x, y)                  # 12 10</code></pre>`
    },
    {
      id: "e-schreibtisch-python",
      topic: "kontrollstrukturen",
      title: "Trace-Tabelle zu einer while-Schleife",
      level: 3,
      exam: ["AP1"],
      task: `<p>Ein Monitoring-Skript wertet die CPU-Auslastung (in %) von fünf Messungen aus:</p>
        <pre><code>werte = [4, 7, 2, 9, 5]
i = 0
maximum = werte[0]
zaehler = 0
while i &lt; len(werte):
    if werte[i] &gt; maximum:
        maximum = werte[i]
        zaehler += 1
    i += 1
print(maximum, zaehler)</code></pre>
        <p>a) Führen Sie einen Schreibtischtest durch (Spalten: i, werte[i], Bedingung, maximum, zaehler).</p>
        <p>b) Geben Sie die Ausgabe an und erklären Sie, was <code>zaehler</code> zählt.</p>
        <p>c) Beschreiben Sie, was passiert, wenn <code>werte</code> eine leere Liste ist, und schlagen Sie eine Lösung vor.</p>
        <p>d) Welche Änderung ist nötig, damit das Programm das Minimum ermittelt?</p>`,
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>i</th><th>werte[i]</th><th>werte[i] &gt; maximum?</th><th>maximum</th><th>zaehler</th></tr></thead><tbody>
          <tr><td>Start</td><td>–</td><td>–</td><td>4</td><td>0</td></tr>
          <tr><td>0</td><td>4</td><td>4 &gt; 4 → nein</td><td>4</td><td>0</td></tr>
          <tr><td>1</td><td>7</td><td>7 &gt; 4 → ja</td><td>7</td><td>1</td></tr>
          <tr><td>2</td><td>2</td><td>2 &gt; 7 → nein</td><td>7</td><td>1</td></tr>
          <tr><td>3</td><td>9</td><td>9 &gt; 7 → ja</td><td>9</td><td>2</td></tr>
          <tr><td>4</td><td>5</td><td>5 &gt; 9 → nein</td><td>9</td><td>2</td></tr>
          <tr><td>5</td><td>–</td><td>Schleife endet (5 &lt; 5 falsch)</td><td>9</td><td>2</td></tr>
        </tbody></table>
        <p><strong>b)</strong> Ausgabe: <code>9 2</code>. <code>zaehler</code> gibt an, wie oft während des Durchlaufs ein neuer Höchstwert gefunden wurde (der Startwert zählt nicht mit).</p>
        <p><strong>c)</strong> Bei einer leeren Liste löst schon <code>maximum = werte[0]</code> einen <code>IndexError</code> aus, weil es kein Element mit Index 0 gibt – ein Laufzeitfehler. Lösung: vorher prüfen, z. B. <code>if not werte: print("Keine Messwerte")</code>, oder den Fehler mit <code>try/except IndexError</code> abfangen.</p>
        <p><strong>d)</strong> Den Vergleich umdrehen: <code>if werte[i] &lt; minimum:</code> (und die Variable sinnvollerweise in <code>minimum</code> umbenennen).</p>`
    },
    {
      id: "e-funktion-abrechnung",
      topic: "funktionen-module",
      title: "Funktion für die Einsatzabrechnung",
      level: 2,
      exam: ["AP1"],
      task: `<p>Die Deichgraf IT-Service GmbH rechnet Arbeitszeit in angefangenen 15-Minuten-Takten ab. Der Standard-Stundensatz beträgt 85,00 €.</p>
        <p>a) Schreiben Sie eine Funktion <code>abrechnung(minuten, satz=85.0)</code>, die die Minuten auf volle 15-Minuten-Takte aufrundet und den Betrag gerundet auf Cent zurückgibt. Nutzen Sie das Modul <code>math</code>.</p>
        <p>b) Berechnen Sie die Rückgabewerte für <code>abrechnung(50)</code>, <code>abrechnung(137)</code> und <code>abrechnung(137, 95)</code>.</p>
        <p>c) Ein Azubi ergänzt nach dem Funktionsaufruf die Zeile <code>print(einheiten)</code> im Hauptprogramm und erhält einen <code>NameError</code>. Erklären Sie die Ursache.</p>`,
      solution: `<p><strong>a)</strong></p>
        <pre><code>import math

def abrechnung(minuten, satz=85.0):
    """Betrag für angefangene 15-Minuten-Takte."""
    einheiten = math.ceil(minuten / 15)       # aufrunden
    stunden = einheiten * 15 / 60
    return round(stunden * satz, 2)</code></pre>
        <p><strong>b)</strong></p>
        <ul>
          <li><code>abrechnung(50)</code>: 50 ÷ 15 = 3,33 → aufgerundet 4 Takte = 60 min = 1 h → 1 × 85 € = <strong>85.0</strong></li>
          <li><code>abrechnung(137)</code>: 137 ÷ 15 = 9,13 → 10 Takte = 150 min = 2,5 h → 2,5 × 85 € = <strong>212.5</strong></li>
          <li><code>abrechnung(137, 95)</code>: 2,5 h × 95 € = <strong>237.5</strong></li>
        </ul>
        <p><strong>c)</strong> <code>einheiten</code> ist eine <strong>lokale Variable</strong> der Funktion. Sie existiert nur während des Funktionsaufrufs und ist im Hauptprogramm (globaler Gültigkeitsbereich) unbekannt – deshalb der <code>NameError</code>. Wird der Wert außerhalb gebraucht, muss die Funktion ihn per <code>return</code> zurückgeben (z. B. als Tupel <code>return einheiten, betrag</code>).</p>`
    },
    {
      id: "e-kollektionen",
      topic: "kollektionen",
      title: "Lagerbestand mit Dictionary und Liste",
      level: 2,
      exam: ["AP1"],
      task: `<p>Im Lager der Nordlicht IT GmbH wird der Bestand so verwaltet:</p>
        <pre><code>lager = {"SSD": 12, "RAM": 30, "Maus": 5}
lager["SSD"] -= 4
lager["Headset"] = 10
knapp = [a for a, m in lager.items() if m &lt; 10]
print(knapp)                              # 1
print(len(lager), sum(lager.values()))    # 2
teile = ["RAM", "SSD", "RAM", "CPU"]
print(sorted(set(teile)))                 # 3
print(teile[1:3], teile[-1])              # 4</code></pre>
        <p>a) Geben Sie die vier Ausgaben an.</p>
        <p>b) Welche Kollektion eignet sich für eine Sammlung von Seriennummern, in der keine Nummer doppelt vorkommen darf? Begründen Sie.</p>
        <p>c) Warum wird für die GPS-Koordinaten eines Standorts eher ein Tupel als eine Liste verwendet?</p>`,
      solution: `<p><strong>a)</strong></p>
        <ol>
          <li><code>['SSD', 'Maus']</code> – nach den Änderungen: SSD 8, RAM 30, Maus 5, Headset 10; kleiner als 10 sind nur SSD und Maus (10 &lt; 10 ist falsch).</li>
          <li><code>4 53</code> – vier Schlüssel; 8 + 30 + 5 + 10 = 53</li>
          <li><code>['CPU', 'RAM', 'SSD']</code> – <code>set</code> entfernt das doppelte „RAM“, <code>sorted</code> sortiert alphabetisch</li>
          <li><code>['SSD', 'RAM'] CPU</code> – Slice von Index 1 bis ausschließlich 3; Index −1 ist das letzte Element</li>
        </ol>
        <p><strong>b)</strong> Eine <strong>Menge (<code>set</code>)</strong>: Sie speichert jedes Element nur einmal, doppelte Einträge werden automatisch ignoriert, und die Prüfung <code>nummer in seriennummern</code> ist sehr schnell.</p>
        <p><strong>c)</strong> Koordinaten bilden einen festen Datensatz (Breite, Länge), der sich nicht ändern soll. Ein Tupel ist <strong>unveränderlich</strong> – versehentliche Änderungen sind ausgeschlossen – und kann z. B. auch als Schlüssel in einem Dictionary dienen.</p>`
    },
    {
      id: "e-csv-json",
      topic: "dateien-formate",
      title: "Inventarliste von CSV nach JSON überführen",
      level: 3,
      exam: ["AP2"],
      task: `<p>Die Nordlicht IT GmbH exportiert ihre Geräteliste als <code>geraete.csv</code>:</p>
        <pre><code>Inventarnr;Typ;Standort;Preis
INV-1001;Notebook;Heide;899,00
INV-1002;Monitor;Husum;189,50
INV-1003;Notebook;Heide;949,00
INV-1004;Drucker;Meldorf;329,00
INV-1005;Monitor;Heide;189,50</code></pre>
        <p>Für ein Dashboard wird eine Datei <code>standorte.json</code> benötigt, die je Standort die Anzahl der Geräte und ihren Gesamtwert enthält.</p>
        <p>a) Schreiben Sie ein Python-Programm, das die CSV-Datei einliest, die Werte je Standort ermittelt und als JSON speichert.</p>
        <p>b) Geben Sie den Inhalt der erzeugten JSON-Datei an.</p>
        <p>c) Stellen Sie den Datensatz INV-1004 im XML-Format dar.</p>
        <p>d) Nennen Sie je einen Vorteil von JSON gegenüber CSV und von CSV gegenüber JSON.</p>`,
      hints: ["Semikolon als Trennzeichen, Komma als Dezimalzeichen.", "Ein Dictionary mit dem Standort als Schlüssel sammelt die Werte."],
      solution: `<p><strong>a)</strong></p>
        <pre><code>import csv, json

standorte = {}
with open("geraete.csv", encoding="utf-8", newline="") as f:
    for zeile in csv.DictReader(f, delimiter=";"):
        ort = zeile["Standort"]
        preis = float(zeile["Preis"].replace(",", "."))   # 899,00 → 899.0
        if ort not in standorte:
            standorte[ort] = {"anzahl": 0, "wert": 0.0}
        standorte[ort]["anzahl"] += 1
        standorte[ort]["wert"] += preis

with open("standorte.json", "w", encoding="utf-8") as f:
    json.dump(standorte, f, indent=2, ensure_ascii=False)</code></pre>
        <p><strong>b)</strong> Heide: 899,00 + 949,00 + 189,50 = 2.037,50 € bei 3 Geräten; Husum: 1 Gerät, 189,50 €; Meldorf: 1 Gerät, 329,00 €.</p>
        <pre><code>{
  "Heide": { "anzahl": 3, "wert": 2037.5 },
  "Husum": { "anzahl": 1, "wert": 189.5 },
  "Meldorf": { "anzahl": 1, "wert": 329.0 }
}</code></pre>
        <p>(Mit <code>indent=2</code> schreibt Python jedes Schlüssel-Wert-Paar in eine eigene Zeile; der Inhalt ist derselbe.)</p>
        <p><strong>c)</strong></p>
        <pre><code>&lt;geraet inventarnr="INV-1004"&gt;
  &lt;typ&gt;Drucker&lt;/typ&gt;
  &lt;standort&gt;Meldorf&lt;/standort&gt;
  &lt;preis waehrung="EUR"&gt;329.00&lt;/preis&gt;
&lt;/geraet&gt;</code></pre>
        <p><strong>d)</strong> JSON gegenüber CSV: kann verschachtelte Strukturen (Objekte in Objekten, Listen) und Datentypen wie Zahl, Wahrheitswert und <code>null</code> abbilden – ideal für Web-APIs. CSV gegenüber JSON: sehr kompakt (kaum Overhead) und direkt in Tabellenkalkulationen zu öffnen.</p>`
    },
    {
      id: "e-dateimodi",
      topic: "dateien-formate",
      title: "Den richtigen Dateimodus wählen",
      level: 1,
      exam: ["AP2"],
      task: `<p>a) Welchen Modus von <code>open()</code> verwenden Sie in folgenden Fällen?</p>
        <ol><li>Ein Backup-Skript soll jeden Abend eine Zeile an <code>backup.log</code> anfügen.</li><li>Eine Konfigurationsdatei soll nur gelesen werden.</li><li>Ein Tagesbericht soll jedes Mal komplett neu geschrieben werden.</li><li>Ein Firmenlogo (PNG) soll eingelesen werden.</li></ol>
        <p>b) Nennen Sie den Vorteil der Schreibweise <code>with open(...) as f:</code>.</p>
        <p>c) Welche Ausnahme tritt auf, wenn eine zu lesende Datei nicht existiert?</p>`,
      solution: `<p><strong>a)</strong> 1. <code>"a"</code> (anhängen) · 2. <code>"r"</code> (lesen, Standard) · 3. <code>"w"</code> (schreiben – vorhandener Inhalt wird gelöscht) · 4. <code>"rb"</code> (lesen, binär)</p>
        <p><strong>b)</strong> Der <code>with</code>-Block schließt die Datei automatisch, sobald er verlassen wird – auch dann, wenn innerhalb des Blocks ein Fehler auftritt. Ein vergessenes <code>close()</code> und damit gesperrte oder unvollständig geschriebene Dateien werden so vermieden.</p>
        <p><strong>c)</strong> <code>FileNotFoundError</code> – sie lässt sich mit <code>try/except FileNotFoundError</code> abfangen.</p>`
    },
    {
      id: "e-regex-log",
      topic: "text-system-gui",
      title: "Fehlgeschlagene Anmeldungen aus einer Logdatei zählen",
      level: 2,
      exam: ["AP2"],
      task: `<p>Der Server der Nordlicht IT GmbH protokolliert Anmeldungen so:</p>
        <pre><code>2026-09-21 08:14:03 LOGIN FAILED user=admin ip=192.168.10.44
2026-09-21 08:14:09 LOGIN OK user=m.jensen ip=192.168.10.12
2026-09-21 08:15:30 LOGIN FAILED user=root ip=203.0.113.7
2026-09-21 08:15:31 LOGIN FAILED user=root ip=203.0.113.7</code></pre>
        <p>a) Formulieren Sie einen regulären Ausdruck, der die IPv4-Adresse hinter <code>ip=</code> erfasst.</p>
        <p>b) Schreiben Sie ein Python-Programm, das für alle Zeilen mit <code>FAILED</code> zählt, wie oft jede IP-Adresse vorkommt, und das Ergebnis absteigend ausgibt.</p>
        <p>c) Geben Sie die Ausgabe für die obigen vier Zeilen an.</p>
        <p>d) Erklären Sie, warum man Regex-Muster in Python als Raw-String schreibt.</p>`,
      solution: `<p><strong>a)</strong> <code>r"ip=(\\d{1,3}(?:\\.\\d{1,3}){3})"</code> – <code>\\d{1,3}</code> steht für ein bis drei Ziffern, <code>\\.</code> für einen echten Punkt, <code>{3}</code> wiederholt „Punkt + Ziffern“ dreimal. Die runde Klammer ist eine Gruppe: <code>findall()</code> liefert dann nur die Adresse ohne „ip=“.</p>
        <p><strong>b)</strong></p>
        <pre><code>import re
from collections import Counter

fehlversuche = Counter()
with open("auth.log", encoding="utf-8") as f:
    for zeile in f:
        if "FAILED" in zeile:
            fehlversuche.update(re.findall(r"ip=(\\d{1,3}(?:\\.\\d{1,3}){3})", zeile))

for ip, anzahl in fehlversuche.most_common():
    print(ip, anzahl)</code></pre>
        <p><strong>c)</strong></p>
        <pre><code>203.0.113.7 2
192.168.10.44 1</code></pre>
        <p><strong>d)</strong> In normalen Strings wertet Python Backslash-Folgen wie <code>\\n</code> oder <code>\\t</code> selbst aus. Im Raw-String <code>r"…"</code> bleibt jeder Backslash erhalten und gelangt unverändert zum Modul <code>re</code> – so bedeutet <code>\\d</code> sicher „Ziffer“ und <code>\\b</code> sicher „Wortgrenze“.</p>`
    },
    {
      id: "e-maske",
      topic: "text-system-gui",
      title: "Eingabemaske ergonomisch verbessern",
      level: 2,
      exam: ["AP1"],
      task: `<p>Für die Geräteverwaltung der Nordlicht IT GmbH wurde eine erste Eingabemaske programmiert. Bei einem Test fällt auf:</p>
        <ul>
          <li>Pflichtfelder sind nur durch rote Schrift gekennzeichnet.</li>
          <li>Die Schrift ist sehr klein und lässt sich nicht vergrößern.</li>
          <li>Mit der Tabulatortaste springt der Cursor kreuz und quer durch die Felder.</li>
          <li>Bei einer falschen Eingabe erscheint nur „Error 17“.</li>
          <li>Farben und Logo entsprechen nicht dem Erscheinungsbild der Firma.</li>
        </ul>
        <p>a) Schlagen Sie für jeden Punkt eine Verbesserung vor.</p>
        <p>b) Ordnen Sie drei Ihrer Vorschläge je einem Interaktionsprinzip der DIN EN ISO 9241-110 zu.</p>
        <p>c) Nennen Sie drei tkinter-Widgets, die Sie für die Maske benötigen.</p>`,
      solution: `<p><strong>a)</strong></p>
        <ul>
          <li>Pflichtfelder zusätzlich mit Symbol (z. B. *) und Text „Pflichtfeld“ kennzeichnen – Information nie nur über Farbe (Barrierefreiheit, Farbsehschwäche).</li>
          <li>Ausreichend große, skalierbare Schrift und guter Kontrast.</li>
          <li>Logische Tab-Reihenfolge von oben nach unten und links nach rechts; alle Funktionen auch per Tastatur bedienbar.</li>
          <li>Verständliche Fehlermeldung mit Lösungshinweis, z. B. „Die Inventarnummer muss das Format INV-1234 haben.“, und das fehlerhafte Feld markieren.</li>
          <li>Farben, Schriften und Logo nach dem Styleguide des Unternehmens (Corporate Design) gestalten.</li>
        </ul>
        <p><strong>b)</strong> (Beispiele) verständliche Fehlermeldung → <em>Robustheit gegen Benutzungsfehler</em> bzw. <em>Selbstbeschreibungsfähigkeit</em> · logische Tab-Reihenfolge → <em>Erwartungskonformität</em> und <em>Steuerbarkeit</em> · klare Kennzeichnung der Pflichtfelder → <em>Selbstbeschreibungsfähigkeit</em>.</p>
        <p><strong>c)</strong> <code>Label</code> (Beschriftungen), <code>Entry</code> (Eingabefelder), <code>Button</code> (Speichern/Abbrechen); ggf. <code>Listbox</code> oder <code>OptionMenu</code> für die Auswahl des Standorts.</p>`
    },
    {
      id: "e-fehler-finden",
      topic: "fehler-debugging",
      title: "Drei Fehler in einer Summenfunktion",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Die folgende Funktion soll die Nettosumme einer Bestellung berechnen. Jede Position ist ein Dictionary mit Preis und Menge.</p>
        <pre><code>def netto_summe(positionen)
    summe = 0
    for i in range(len(positionen) + 1):
        summe = positionen[i]["preis"] * positionen[i]["menge"]
    return summe

bestellung = [{"preis": 19.90, "menge": 3}, {"preis": 4.50, "menge": 10}]
print(netto_summe(bestellung))</code></pre>
        <p>a) Finden Sie die drei Fehler, ordnen Sie jeden einer Fehlerart zu und korrigieren Sie ihn.</p>
        <p>b) Berechnen Sie das korrekte Ergebnis.</p>
        <p>c) Erläutern Sie, wie Sie den logischen Fehler mit einem Debugger gefunden hätten.</p>`,
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Zeile</th><th>Fehler</th><th>Fehlerart</th><th>Korrektur</th></tr></thead><tbody>
          <tr><td>1</td><td>Doppelpunkt nach dem Funktionskopf fehlt</td><td>Syntaxfehler – das Programm startet nicht</td><td><code>def netto_summe(positionen):</code></td></tr>
          <tr><td>3</td><td><code>range(len(positionen) + 1)</code> läuft einen Index zu weit</td><td>Laufzeitfehler (<code>IndexError</code> beim Zugriff auf <code>positionen[2]</code>)</td><td><code>for i in range(len(positionen)):</code> oder direkt <code>for pos in positionen:</code></td></tr>
          <tr><td>4</td><td><code>summe = …</code> überschreibt die Summe in jedem Durchlauf</td><td>logischer Fehler – falsches Ergebnis ohne Fehlermeldung</td><td><code>summe += …</code></td></tr>
        </tbody></table>
        <pre><code>def netto_summe(positionen):
    summe = 0
    for pos in positionen:
        summe += pos["preis"] * pos["menge"]
    return round(summe, 2)</code></pre>
        <p><strong>b)</strong> 19,90 € × 3 = 59,70 € · 4,50 € × 10 = 45,00 € · Summe = <strong>104,70 €</strong> (ohne <code>round</code> würde Python wegen der Gleitkommadarstellung 104.69999999999999 ausgeben).</p>
        <p><strong>c)</strong> Man setzt einen <strong>Breakpoint</strong> in die Zeile mit der Summenbildung und startet das Programm im Debug-Modus. Mit <em>Step Over</em> führt man die Schleife Durchlauf für Durchlauf aus und beobachtet im Variablenfenster den Wert von <code>summe</code>. Man erkennt, dass <code>summe</code> im zweiten Durchlauf nicht von 59,70 auf 104,70 steigt, sondern durch 45,00 ersetzt wird – die Zuweisung ist also die Fehlerursache.</p>`
    },
    {
      id: "e-exceptions",
      topic: "fehler-debugging",
      title: "Robuste Eingabe mit try/except",
      level: 2,
      exam: ["AP2"],
      task: `<p>a) Schreiben Sie eine Funktion <code>lies_ganzzahl(text, minimum, maximum)</code>, die so lange nach einer Eingabe fragt, bis eine ganze Zahl im erlaubten Bereich eingegeben wurde, und diese zurückgibt. Das Programm darf bei Texteingaben wie „zwölf“ nicht abstürzen.</p>
        <p>b) Welche Ausnahme löst jede Anweisung aus?</p>
        <ol><li><code>int("zwölf")</code></li><li><code>10 / 0</code></li><li><code>[1, 2, 3][5]</code></li><li><code>{"SSD": 8}["Monitor"]</code></li><li><code>open("gibtsnicht.txt")</code></li></ol>
        <p>c) Erklären Sie den Unterschied zwischen einem <code>else</code>- und einem <code>finally</code>-Block.</p>`,
      solution: `<p><strong>a)</strong></p>
        <pre><code>def lies_ganzzahl(text, minimum, maximum):
    while True:
        try:
            wert = int(input(text))
        except ValueError:
            print("Bitte eine ganze Zahl eingeben.")
            continue                     # nächster Versuch
        if minimum &lt;= wert &lt;= maximum:
            return wert
        print(f"Bitte einen Wert von {minimum} bis {maximum} eingeben.")

prioritaet = lies_ganzzahl("Priorität (1–5): ", 1, 5)</code></pre>
        <p><strong>b)</strong> 1. <code>ValueError</code> · 2. <code>ZeroDivisionError</code> · 3. <code>IndexError</code> · 4. <code>KeyError</code> · 5. <code>FileNotFoundError</code></p>
        <p><strong>c)</strong> Der <code>else</code>-Block wird nur ausgeführt, wenn im <code>try</code>-Block <em>keine</em> Ausnahme aufgetreten ist. Der <code>finally</code>-Block wird <em>immer</em> ausgeführt – mit und ohne Fehler – und eignet sich deshalb zum Aufräumen, z. B. um Verbindungen zu schließen oder eine Abschlussmeldung zu protokollieren.</p>`
    },
    {
      id: "e-testfaelle",
      topic: "testen",
      title: "Testfälle für die Ticket-Priorität",
      level: 3,
      exam: ["AP2"],
      task: `<p>Im Ticketsystem der Nordlicht IT GmbH berechnet eine Funktion die Priorität aus der Anzahl der betroffenen Nutzer:</p>
        <ul><li>1 bis 9 Nutzer → „niedrig“</li><li>10 bis 49 Nutzer → „mittel“</li><li>50 bis 500 Nutzer → „hoch“</li><li>Werte außerhalb von 1 bis 500 oder keine ganze Zahl → Fehlermeldung</li></ul>
        <p>a) Bilden Sie alle gültigen und ungültigen Äquivalenzklassen und geben Sie je einen Repräsentanten an.</p>
        <p>b) Nennen Sie alle Grenzwerte, die getestet werden sollten.</p>
        <p>c) Erstellen Sie eine Testfalltabelle mit mindestens sechs Testfällen (ID, Eingabe, erwartetes Ergebnis).</p>
        <p>d) Handelt es sich um ein Black-Box- oder ein White-Box-Verfahren? Auf welcher Teststufe wird die einzelne Funktion geprüft?</p>`,
      hints: ["Ungültige Klassen gibt es unterhalb, oberhalb und beim Datentyp.", "Grenzwerte liegen direkt auf und direkt neben jeder Klassengrenze."],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Klasse</th><th>Bereich</th><th>Repräsentant</th><th>erwartet</th></tr></thead><tbody>
          <tr><td>ÄK1 ungültig</td><td>&lt; 1</td><td>−3</td><td>Fehlermeldung</td></tr>
          <tr><td>ÄK2 gültig</td><td>1–9</td><td>5</td><td>niedrig</td></tr>
          <tr><td>ÄK3 gültig</td><td>10–49</td><td>25</td><td>mittel</td></tr>
          <tr><td>ÄK4 gültig</td><td>50–500</td><td>200</td><td>hoch</td></tr>
          <tr><td>ÄK5 ungültig</td><td>&gt; 500</td><td>800</td><td>Fehlermeldung</td></tr>
          <tr><td>ÄK6 ungültig</td><td>keine ganze Zahl</td><td>„zehn“ oder 7,5</td><td>Fehlermeldung</td></tr>
        </tbody></table>
        <p><strong>b)</strong> 0 und 1 · 9 und 10 · 49 und 50 · 500 und 501</p>
        <p><strong>c)</strong></p>
        <table><thead><tr><th>ID</th><th>Eingabe</th><th>erwartetes Ergebnis</th></tr></thead><tbody>
          <tr><td>T1</td><td>0</td><td>Fehlermeldung</td></tr>
          <tr><td>T2</td><td>1</td><td>niedrig</td></tr>
          <tr><td>T3</td><td>9</td><td>niedrig</td></tr>
          <tr><td>T4</td><td>10</td><td>mittel</td></tr>
          <tr><td>T5</td><td>49</td><td>mittel</td></tr>
          <tr><td>T6</td><td>50</td><td>hoch</td></tr>
          <tr><td>T7</td><td>500</td><td>hoch</td></tr>
          <tr><td>T8</td><td>501</td><td>Fehlermeldung</td></tr>
          <tr><td>T9</td><td>„zehn“</td><td>Fehlermeldung</td></tr>
        </tbody></table>
        <p>Die Grenzwert-Testfälle decken gleichzeitig alle Äquivalenzklassen ab; nur die Klasse „keine ganze Zahl“ braucht einen eigenen Fall (T9). Im Testprotokoll werden später noch das tatsächliche Ergebnis und der Status ergänzt.</p>
        <p><strong>d)</strong> Äquivalenzklassen und Grenzwertanalyse sind <strong>Black-Box-Verfahren</strong>: Die Testfälle werden allein aus der Spezifikation abgeleitet, der Quellcode wird nicht betrachtet. Die einzelne Funktion wird im <strong>Komponententest (Unit-Test)</strong> geprüft.</p>`
    },
    {
      id: "e-pseudocode-ergaenzen",
      topic: "algorithmen",
      title: "Pseudocode ergänzen: Stromverbrauch auswerten",
      level: 3,
      exam: ["AP1"],
      task: `<p>Die <strong>Wattblick GmbH in Büsum</strong> erfasst den täglichen Stromverbrauch ihres Serverraums in kWh. Ein Algorithmus soll den Durchschnitt berechnen und zählen, an wie vielen Tagen der Grenzwert <em>überschritten</em> wurde. Das Array beginnt bei Index 0.</p>
        <pre><code>verbrauch ← [12, 15, 9, 20, 11, 18, 14]
grenzwert ← 14
summe ← (1)
anzahlUeber ← 0
FÜR i VON 0 BIS (2)
    summe ← (3)
    WENN (4) DANN
        anzahlUeber ← anzahlUeber + 1
    ENDE WENN
ENDE FÜR
durchschnitt ← (5)
AUSGABE durchschnitt, anzahlUeber</code></pre>
        <p>a) Ergänzen Sie die Lücken (1) bis (5).</p>
        <p>b) Geben Sie die Ausgabe an (Durchschnitt auf zwei Nachkommastellen).</p>
        <p>c) Erweitern Sie den Algorithmus so, dass zusätzlich der Index des Tages mit dem höchsten Verbrauch ausgegeben wird.</p>`,
      solution: `<p><strong>a)</strong></p>
        <ol>
          <li><code>0</code></li>
          <li><code>LÄNGE(verbrauch) − 1</code> (bei 7 Werten also 6)</li>
          <li><code>summe + verbrauch[i]</code></li>
          <li><code>verbrauch[i] &gt; grenzwert</code></li>
          <li><code>summe / LÄNGE(verbrauch)</code></li>
        </ol>
        <p><strong>b)</strong> Summe: 12 + 15 + 9 + 20 + 11 + 18 + 14 = 99 kWh; Durchschnitt: 99 ÷ 7 ≈ <strong>14,14 kWh</strong>. Über 14 kWh liegen 15, 20 und 18 → <strong>3 Tage</strong> (14 ist nicht größer als 14). Ausgabe: <code>14.14, 3</code></p>
        <p><strong>c)</strong></p>
        <pre><code>maxIndex ← 0
FÜR i VON 1 BIS LÄNGE(verbrauch) − 1
    WENN verbrauch[i] &gt; verbrauch[maxIndex] DANN
        maxIndex ← i
    ENDE WENN
ENDE FÜR
AUSGABE maxIndex        // Ergebnis: 3 (Verbrauch 20 kWh)</code></pre>
        <p>Man kann den Vergleich auch in die bestehende Schleife einbauen; dann genügt ein einziger Durchlauf durch das Array.</p>`
    },
    {
      id: "e-bubblesort",
      topic: "algorithmen",
      title: "Bubble Sort von Hand",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Sortieren Sie das Array <code>[7, 2, 9, 4, 1]</code> aufsteigend mit Bubble Sort (Pseudocode siehe Lernzettel).</p>
        <p>a) Geben Sie das Array nach jedem der vier Durchläufe an.</p>
        <p>b) Wie viele Vergleiche und wie viele Vertauschungen werden insgesamt durchgeführt?</p>
        <p>c) Wie viele Vergleiche braucht die einfache Variante bei 100 Elementen?</p>
        <p>d) Warum ist Bubble Sort für große Datenmengen ungeeignet? Nennen Sie ein schnelleres Verfahren.</p>`,
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Durchlauf</th><th>Vergleiche (Tausch?)</th><th>Array danach</th></tr></thead><tbody>
          <tr><td>1</td><td>7/2 ja · 7/9 nein · 9/4 ja · 9/1 ja</td><td>[2, 7, 4, 1, <strong>9</strong>]</td></tr>
          <tr><td>2</td><td>2/7 nein · 7/4 ja · 7/1 ja</td><td>[2, 4, 1, <strong>7, 9</strong>]</td></tr>
          <tr><td>3</td><td>2/4 nein · 4/1 ja</td><td>[2, 1, <strong>4, 7, 9</strong>]</td></tr>
          <tr><td>4</td><td>2/1 ja</td><td>[<strong>1, 2, 4, 7, 9</strong>]</td></tr>
        </tbody></table>
        <p><strong>b)</strong> Vergleiche: 4 + 3 + 2 + 1 = <strong>10</strong>; Vertauschungen: 3 + 2 + 1 + 1 = <strong>7</strong>.</p>
        <p><strong>c)</strong> n × (n − 1) ÷ 2 = 100 × 99 ÷ 2 = <strong>4.950 Vergleiche</strong>.</p>
        <p><strong>d)</strong> Der Aufwand wächst quadratisch (O(n²)): Doppelt so viele Elemente bedeuten etwa viermal so viele Vergleiche. Schneller sind Verfahren mit O(n log n) wie Quicksort oder Mergesort; in Python nutzt man <code>sorted()</code> bzw. <code>liste.sort()</code>.</p>`
    },
    {
      id: "e-binaersuche",
      topic: "algorithmen",
      title: "Binäre Suche in Inventarnummern",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die aufsteigend sortierten Inventarnummern eines Standorts lauten (Index 0 bis 8):</p>
        <pre><code>[1003, 1011, 1019, 1024, 1037, 1042, 1058, 1063, 1071]</code></pre>
        <p>a) Führen Sie die binäre Suche nach <code>1058</code> durch. Geben Sie in jedem Schritt links, rechts, mitte und den verglichenen Wert an.</p>
        <p>b) Führen Sie die Suche nach <code>1020</code> durch. Welches Ergebnis liefert die Funktion?</p>
        <p>c) Welche Voraussetzung muss für die binäre Suche erfüllt sein, und wie viele Vergleiche braucht sie höchstens bei 1.000 Einträgen?</p>`,
      solution: `<p><strong>a)</strong> Suche nach 1058:</p>
        <table><thead><tr><th>Schritt</th><th>links</th><th>rechts</th><th>mitte</th><th>a[mitte]</th><th>Entscheidung</th></tr></thead><tbody>
          <tr><td>1</td><td>0</td><td>8</td><td>4</td><td>1037</td><td>1037 &lt; 1058 → links = 5</td></tr>
          <tr><td>2</td><td>5</td><td>8</td><td>6</td><td>1058</td><td>Treffer → Rückgabe 6</td></tr>
        </tbody></table>
        <p><strong>b)</strong> Suche nach 1020:</p>
        <table><thead><tr><th>Schritt</th><th>links</th><th>rechts</th><th>mitte</th><th>a[mitte]</th><th>Entscheidung</th></tr></thead><tbody>
          <tr><td>1</td><td>0</td><td>8</td><td>4</td><td>1037</td><td>1037 &gt; 1020 → rechts = 3</td></tr>
          <tr><td>2</td><td>0</td><td>3</td><td>1</td><td>1011</td><td>1011 &lt; 1020 → links = 2</td></tr>
          <tr><td>3</td><td>2</td><td>3</td><td>2</td><td>1019</td><td>1019 &lt; 1020 → links = 3</td></tr>
          <tr><td>4</td><td>3</td><td>3</td><td>3</td><td>1024</td><td>1024 &gt; 1020 → rechts = 2</td></tr>
        </tbody></table>
        <p>Jetzt ist links (3) &gt; rechts (2), die Schleife endet: Rückgabe <strong>−1</strong> (nicht gefunden).</p>
        <p><strong>c)</strong> Die Liste muss <strong>sortiert</strong> sein. Da sich der Suchbereich mit jedem Schritt halbiert, genügen bei 1.000 Einträgen höchstens <strong>10 Vergleiche</strong> (2¹⁰ = 1024 ≥ 1000).</p>`
    },
    {
      id: "e-klasse-ticket",
      topic: "oop",
      title: "Klasse Ticket mit Kapselung",
      level: 2,
      exam: ["AP1"],
      task: `<p>Für ein kleines Ticketsystem soll eine Klasse <code>Ticket</code> entstehen:</p>
        <ul>
          <li>Attribute: <code>nummer</code>, <code>titel</code> (öffentlich) und <code>status</code> (privat, Startwert „offen“)</li>
          <li><code>bearbeiten()</code> setzt den Status von „offen“ auf „in Bearbeitung“</li>
          <li><code>schliessen(loesung)</code> setzt den Status auf „geschlossen“ – aber nur, wenn eine Lösungsbeschreibung übergeben wurde</li>
          <li><code>get_status()</code> liefert den Status; <code>print(ticket)</code> soll z. B. <code>#4711 Drucker offline [offen]</code> ausgeben</li>
        </ul>
        <p>a) Implementieren Sie die Klasse in Python.</p>
        <p>b) Erzeugen Sie zwei Tickets und geben Sie die Ausgabe an, nachdem das erste bearbeitet und geschlossen wurde.</p>
        <p>c) Erläutern Sie am Beispiel des Status, welchen Vorteil die Kapselung bietet.</p>
        <p>d) Erklären Sie den Unterschied zwischen Klasse und Objekt an diesem Beispiel.</p>`,
      solution: `<p><strong>a)</strong></p>
        <pre><code>class Ticket:
    def __init__(self, nummer, titel):
        self.nummer = nummer
        self.titel = titel
        self.__status = "offen"             # privat

    def bearbeiten(self):
        if self.__status == "offen":
            self.__status = "in Bearbeitung"

    def schliessen(self, loesung):
        if not loesung:
            raise ValueError("Ohne Lösungsbeschreibung kein Abschluss")
        self.__status = "geschlossen"
        self.loesung = loesung

    def get_status(self):
        return self.__status

    def __str__(self):
        return f"#{self.nummer} {self.titel} [{self.__status}]"</code></pre>
        <p><strong>b)</strong></p>
        <pre><code>t1 = Ticket(4711, "Drucker offline")
t2 = Ticket(4712, "VPN langsam")
t1.bearbeiten()
t1.schliessen("Treiber neu installiert")
print(t1)     # #4711 Drucker offline [geschlossen]
print(t2)     # #4712 VPN langsam [offen]</code></pre>
        <p><strong>c)</strong> Der Status kann von außen nicht direkt überschrieben werden, sondern nur über die Methoden. Dadurch sind nur erlaubte Zustandswechsel möglich – ein Ticket lässt sich z. B. nicht ohne Lösungsbeschreibung schließen, und Tippfehler wie „geschlosen“ können nicht entstehen. Ändert man später die interne Speicherung des Status, bleibt der übrige Code unverändert, solange die Methoden gleich bleiben.</p>
        <p><strong>d)</strong> <code>Ticket</code> ist die <strong>Klasse</strong> – der Bauplan, der festlegt, welche Attribute und Methoden jedes Ticket hat. <code>t1</code> und <code>t2</code> sind <strong>Objekte</strong> (Instanzen) dieser Klasse mit eigenen Attributwerten: Nummer 4711 „geschlossen“ bzw. Nummer 4712 „offen“.</p>`
    },
    {
      id: "e-lizenzen-oop",
      topic: "oop",
      title: "Lizenzkosten mit Vererbung und Polymorphie",
      level: 3,
      exam: ["AP2"],
      task: `<p>Die Nordlicht IT GmbH verwaltet Softwarelizenzen. Es gibt Abo-Lizenzen (monatlicher Preis) und Kauflizenzen (einmaliger Preis).</p>
        <pre><code>from abc import ABC, abstractmethod

class Lizenz(ABC):
    def __init__(self, produkt):
        self.produkt = produkt

    @abstractmethod
    def kosten(self, monate):
        pass

class AboLizenz(Lizenz):
    def __init__(self, produkt, preis_monat):
        super().__init__(produkt)
        self.preis_monat = preis_monat

    def kosten(self, monate):
        return round(self.preis_monat * monate, 2)

class Kauflizenz(Lizenz):
    def __init__(self, produkt, preis):
        super().__init__(produkt)
        self.preis = preis

    def kosten(self, monate):
        return self.preis

lizenzen = [AboLizenz("Office-Paket", 12.50), Kauflizenz("PDF-Editor", 199.00),
            AboLizenz("Backup-Cloud", 4.90)]
gesamt = 0
for l in lizenzen:
    print(l.produkt, l.kosten(24))
    gesamt += l.kosten(24)
print(round(gesamt, 2))</code></pre>
        <p>a) Geben Sie die Ausgabe des Programms an.</p>
        <p>b) Erläutern Sie, wo in diesem Programm Vererbung und Polymorphie vorkommen.</p>
        <p>c) Was passiert bei <code>Lizenz("Test")</code>? Begründen Sie.</p>
        <p>d) Stellen Sie die drei Klassen als UML-Klassendiagramm dar (Attribute privat).</p>
        <p>e) Ab welchem Monat ist eine Kauflizenz für 199,00 € günstiger als ein Abo für 12,50 € im Monat?</p>`,
      solution: `<p><strong>a)</strong></p>
        <pre><code>Office-Paket 300.0
PDF-Editor 199.0
Backup-Cloud 117.6
616.6</code></pre>
        <p>Rechnung: 24 × 12,50 € = 300,00 € · Kauflizenz einmalig 199,00 € · 24 × 4,90 € = 117,60 € · Summe 616,60 €.</p>
        <p><strong>b)</strong> <strong>Vererbung:</strong> <code>AboLizenz</code> und <code>Kauflizenz</code> erben von <code>Lizenz</code> das Attribut <code>produkt</code> und rufen mit <code>super().__init__()</code> den Konstruktor der Oberklasse auf. <strong>Polymorphie:</strong> In der Schleife wird für jedes Objekt dieselbe Methode <code>kosten(24)</code> aufgerufen; welche Umsetzung läuft, hängt von der Klasse des Objekts ab (Monatspreis × Monate oder Einmalpreis). Die Schleife muss die konkreten Klassen nicht kennen.</p>
        <p><strong>c)</strong> Es entsteht ein <code>TypeError</code>. <code>Lizenz</code> ist eine abstrakte Klasse (erbt von <code>ABC</code>) mit der abstrakten Methode <code>kosten()</code> und kann deshalb nicht instanziiert werden. Sie dient nur als gemeinsame Oberklasse, die jeder Unterklasse die Methode <code>kosten()</code> vorschreibt.</p>
        <p><strong>d)</strong></p>
        <pre class="ascii">               +-----------------------------------+
               |        Lizenz {abstract}          |
               +-----------------------------------+
               | - produkt : String                |
               +-----------------------------------+
               | + kosten(monate : Int) : Double   |
               +-----------------------------------+
                                /_\\
                                 |
                +----------------+-----------------+
                |                                  |
+-------------------------------+  +-------------------------------+
|           AboLizenz           |  |          Kauflizenz           |
+-------------------------------+  +-------------------------------+
| - preisMonat : Double         |  | - preis : Double              |
+-------------------------------+  +-------------------------------+
| + kosten(monate : Int)        |  | + kosten(monate : Int)        |
|     : Double                  |  |     : Double                  |
+-------------------------------+  +-------------------------------+</pre>
        <p>Das leere Dreieck (Vererbungspfeil) zeigt zur Oberklasse. Die abstrakte Klasse und ihre abstrakte Methode <code>kosten()</code> werden kursiv oder mit <code>{abstract}</code> gekennzeichnet; die Unterklassen überschreiben <code>kosten()</code>.</p>
        <p><strong>e)</strong> 199,00 € ÷ 12,50 €/Monat = 15,92 Monate. Nach 15 Monaten kostet das Abo 187,50 €, nach 16 Monaten 200,00 €. Ab dem <strong>16. Monat</strong> ist die Kauflizenz günstiger.</p>`
    },
    {
      id: "e-klassendiagramm",
      topic: "uml",
      title: "Klassendiagramm für Serviceverträge",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH möchte ihre Serviceverträge in einer eigenen Anwendung verwalten. Aus dem Gespräch mit der Vertriebsleitung stammen folgende Angaben:</p>
        <ul>
          <li>Ein <strong>Kunde</strong> hat eine Kundennummer, einen Namen und eine E-Mail-Adresse. Über die Methode <code>vertragHinzufuegen</code> wird ihm ein Vertrag zugeordnet.</li>
          <li>Ein Kunde kann beliebig viele <strong>Serviceverträge</strong> haben, jeder Vertrag gehört zu genau einem Kunden.</li>
          <li>Ein Servicevertrag hat eine Vertragsnummer, ein Startdatum und eine monatliche Gebühr. Die Methode <code>gesamtGebuehr</code> berechnet die Gebühr für eine Anzahl Monate.</li>
          <li>Ein Vertrag umfasst mindestens ein <strong>Gerät</strong> (Seriennummer, Typ). Ein Gerät ist höchstens einem Vertrag zugeordnet und existiert auch ohne Vertrag.</li>
          <li>Alle Attribute sind privat, alle Methoden öffentlich.</li>
        </ul>
        <p>a) Erstellen Sie das UML-Klassendiagramm mit Attributen, Datentypen, Methoden und Sichtbarkeiten.</p>
        <p>b) Tragen Sie die Multiplizitäten ein und lesen Sie die Beziehung Vertrag – Gerät in einem Satz vor.</p>
        <p>c) Begründen Sie, ob zwischen Vertrag und Gerät eine Aggregation oder eine Komposition vorliegt.</p>`,
      solution: `<p><strong>a) und b)</strong></p>
        <pre class="ascii">+-----------------------------------+
|               Kunde               |
+-----------------------------------+
| - kundenNr : Integer              |
| - name : String                   |
| - email : String                  |
+-----------------------------------+
| + vertragHinzufuegen(             |
|     v : Servicevertrag)           |
+-----------------------------------+
                  | 1
                  |
                  | 0..*
+-----------------------------------+
|          Servicevertrag           |
+-----------------------------------+
| - vertragsNr : Integer            |
| - startdatum : Date               |
| - gebuehrMonat : Double           |
+-----------------------------------+
| + gesamtGebuehr(monate : Integer) |
|     : Double                      |
+-----------------------------------+
                  ◇ 0..1
                  |
                  | 1..*
+-----------------------------------+
|              Geraet               |
+-----------------------------------+
| - seriennummer : String           |
| - typ : String                    |
+-----------------------------------+</pre>
        <p>Lesart: Ein Servicevertrag umfasst mindestens ein, aber beliebig viele Geräte (1..* am Gerät); ein Gerät ist keinem oder genau einem Vertrag zugeordnet (0..1 am Vertrag). Zwischen Kunde und Vertrag gilt: Ein Kunde hat keinen bis beliebig viele Verträge (0..*), jeder Vertrag gehört zu genau einem Kunden (1).</p>
        <p><strong>c)</strong> Es ist eine <strong>Aggregation</strong> (leere Raute am Vertrag als „Ganzem“): Das Gerät ist zwar Teil des Vertrags, existiert aber unabhängig davon weiter – es kann ohne Vertrag im Lager stehen oder einem neuen Vertrag zugeordnet werden. Bei einer Komposition (gefüllte Raute) würde das Teil mit dem Ganzen gelöscht, z. B. eine Rechnungsposition mit ihrer Rechnung.</p>`
    },
    {
      id: "e-aktivitaet",
      topic: "uml",
      title: "Aktivitätsdiagramm: Passwort zurücksetzen",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Das Self-Service-Portal der Nordlicht IT GmbH soll folgenden Ablauf erhalten:</p>
        <ol>
          <li>Der Nutzer fordert einen Passwort-Reset an.</li>
          <li>Das System prüft, ob die E-Mail-Adresse registriert ist. Falls nicht, zeigt es einen Hinweis an und der Ablauf endet.</li>
          <li>Andernfalls erzeugt das System ein Reset-Token. Anschließend werden <em>gleichzeitig</em> die E-Mail versendet und die Anfrage protokolliert.</li>
          <li>Der Nutzer gibt ein neues Passwort ein. Das System prüft die Richtlinie (mindestens 12 Zeichen). Ist sie nicht erfüllt, muss der Nutzer erneut eingeben.</li>
          <li>Ist die Richtlinie erfüllt, speichert das System das Passwort und der Ablauf endet.</li>
        </ol>
        <p>a) Zeichnen Sie ein UML-Aktivitätsdiagramm. Ordnen Sie die Aktionen den Rollen Nutzer und System zu.</p>
        <p>b) Erklären Sie den Unterschied zwischen einer Verzweigung (Raute) und einer Gabelung (Balken).</p>`,
      hints: ["Die Wiederholung der Passworteingabe ist eine Schleife: Der Rückweg führt über eine Zusammenführung (Raute) vor die Eingabe.", "Gleichzeitig ablaufende Aktionen werden mit Gabelung und Synchronisation dargestellt."],
      solution: `<p><strong>a)</strong> Mögliche Lösung (auf Papier werden Nutzer und System als zwei Schwimmbahnen gezeichnet; hier steht die Bahn rechts neben der Aktion):</p>
        <pre class="ascii">                  ●
                  |
    ( Passwort-Reset anfordern )                          [Nutzer]
                  |
    ( E-Mail-Adresse prüfen )                             [System]
                  |
                  ◇ --[nicht registriert]--&gt; ( Hinweis anzeigen ) --&gt; ◉
                  | [registriert]
    ( Reset-Token erzeugen )                              [System]
                  |
       ===========+===========                            Gabelung
       |                     |
 ( E-Mail senden )   ( Anfrage protokollieren )           [System]
       |                     |
       ===========+===========                            Synchronisation
                  |
                  ◇ &lt;--------------------------+          Zusammenführung
                  |                            |
    ( neues Passwort eingeben )                |          [Nutzer]
                  |                            |
    ( Richtlinie prüfen )                      |          [System]
                  |                            |
                  ◇ --[unter 12 Zeichen]-------+
                  | [Richtlinie erfüllt]
    ( Passwort speichern )                                [System]
                  |
                  ◉</pre>
        <p>Bewertungsrelevant sind: Startknoten, Aktionen als abgerundete Rechtecke, zwei Entscheidungen mit Bedingungen in eckigen Klammern, Gabelung und Synchronisation für die parallelen Aktionen, die Schleife zurück vor die Passworteingabe (über eine Zusammenführung) sowie Endknoten.</p>
        <p><strong>b)</strong> An einer <strong>Verzweigung</strong> (Raute) wird genau <em>ein</em> ausgehender Weg gewählt – abhängig von der Bedingung (Guard). An einer <strong>Gabelung</strong> (Balken) werden <em>alle</em> ausgehenden Wege gleichzeitig (parallel) gestartet; an der <strong>Synchronisation</strong> geht es erst weiter, wenn alle parallelen Wege abgeschlossen sind.</p>`
    },
    {
      id: "e-erm",
      topic: "daten-db",
      title: "ER-Modell für Serviceeinsätze",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Die <strong>Deichgraf IT-Service GmbH in Husum</strong> möchte ihre Einsätze in einer Datenbank statt in Tabellenkalkulationen verwalten:</p>
        <ul>
          <li>Kunden (Kundennummer, Firma, Ort) beauftragen Einsätze (Einsatznummer, Datum, Dauer).</li>
          <li>Jeder Einsatz gehört zu genau einem Kunden und wird von genau einem Techniker (Personalnummer, Name) durchgeführt; ein Techniker führt viele Einsätze durch.</li>
          <li>Bei einem Einsatz können mehrere Ersatzteile (Teilenummer, Bezeichnung, Preis) verbaut werden, jedes Ersatzteil kann bei vielen Einsätzen verbaut werden. Die verbaute Menge soll gespeichert werden.</li>
        </ul>
        <p>a) Erstellen Sie ein ER-Modell mit Entitätstypen, Beziehungen und Kardinalitäten.</p>
        <p>b) Überführen Sie das Modell in Tabellen und kennzeichnen Sie Primär- und Fremdschlüssel.</p>
        <p>c) Pro Jahr fallen etwa 40.000 Einsätze an, ein Datensatz belegt 180 Byte. Berechnen Sie den Speicherbedarf der Einsatztabelle für ein Jahr und für fünf Jahre in MiB.</p>
        <p>d) Beschreiben Sie, welches Problem entsteht, wenn Kundendaten in jeder Einsatzzeile mitgespeichert werden.</p>`,
      solution: `<p><strong>a)</strong></p>
        <pre class="ascii">[Kunde] 1 ---◇ beauftragt ◇--- n [Einsatz] n ---◇ führt durch ◇--- 1 [Techniker]
                                     n
                                     |
                              ◇ verbaut ◇   (Attribut: Menge)
                                     |
                                     m
                               [Ersatzteil]</pre>
        <p>Kunde–Einsatz 1:n, Techniker–Einsatz 1:n, Einsatz–Ersatzteil n:m.</p>
        <p><strong>b)</strong> (Primärschlüssel fett, Fremdschlüssel mit ↑)</p>
        <ul>
          <li>Kunde(<strong>KundenNr</strong>, Firma, Ort)</li>
          <li>Techniker(<strong>PersonalNr</strong>, Name)</li>
          <li>Einsatz(<strong>EinsatzNr</strong>, Datum, Dauer, KundenNr↑, PersonalNr↑)</li>
          <li>Ersatzteil(<strong>TeileNr</strong>, Bezeichnung, Preis)</li>
          <li>Einsatz_Ersatzteil(<strong>EinsatzNr↑, TeileNr↑</strong>, Menge)</li>
        </ul>
        <p>Bei 1:n-Beziehungen wandert der Fremdschlüssel in die Tabelle auf der n-Seite (Einsatz). Die n:m-Beziehung wird zu einer eigenen Tabelle, deren Primärschlüssel aus beiden Fremdschlüsseln besteht; das Beziehungsattribut Menge gehört dorthin.</p>
        <p><strong>c)</strong> 1 Jahr: 40.000 × 180 Byte = 7.200.000 Byte ÷ 1024 = 7.031,25 KiB ÷ 1024 ≈ <strong>6,87 MiB</strong>.<br>5 Jahre: 7.200.000 Byte × 5 = 36.000.000 Byte ÷ 1.048.576 ≈ <strong>34,33 MiB</strong>.</p>
        <p><strong>d)</strong> Die Kundendaten stünden redundant in vielen Zeilen. Ändert sich z. B. der Ort eines Kunden, muss er in allen Zeilen geändert werden – wird eine vergessen, sind die Daten widersprüchlich (Änderungsanomalie). Außerdem kann ein Kunde erst gespeichert werden, wenn es einen Einsatz gibt (Einfügeanomalie), und mit dem letzten Einsatz gingen auch die Kundendaten verloren (Löschanomalie).</p>`
    },
    {
      id: "e-speicherbedarf",
      topic: "daten-codierung",
      title: "Zeichencodierung und Dateigröße",
      level: 2,
      exam: ["AP1"],
      task: `<p>a) Wie viele Zeichen hat der Text <code>Straße 5, Büsum</code>, und wie viele Byte belegt er in UTF-8? Begründen Sie.</p>
        <p>b) Ein CSV-Export enthält 5.000 Zeilen mit je 80 ASCII-Zeichen. Jede Zeile endet mit einem Windows-Zeilenumbruch (CR LF, 2 Byte). Berechnen Sie die Dateigröße in KiB.</p>
        <p>c) Ordnen Sie zu: Kundenadresse, Bestellung vom 23.09.2026, Artikelstammsatz, Zählerstand eines Sensors – Stammdaten oder Bewegungsdaten?</p>
        <p>d) Mehrere Mitarbeitende sollen gleichzeitig Kundendaten bearbeiten. Begründen Sie, warum eine relationale Datenbank hier besser geeignet ist als eine CSV-Datei.</p>`,
      solution: `<p><strong>a)</strong> 15 Zeichen (Leerzeichen und Komma zählen mit). In UTF-8 belegen ASCII-Zeichen 1 Byte, „ß“ und „ü“ je 2 Byte: 13 × 1 Byte + 2 × 2 Byte = <strong>17 Byte</strong>.</p>
        <p><strong>b)</strong> je Zeile 80 + 2 = 82 Byte → 5.000 × 82 Byte = 410.000 Byte → 410.000 ÷ 1024 ≈ <strong>400,39 KiB</strong>.</p>
        <p><strong>c)</strong> Stammdaten: Kundenadresse, Artikelstammsatz (ändern sich selten). Bewegungsdaten: Bestellung, Zählerstand (entstehen laufend neu).</p>
        <p><strong>d)</strong> Eine relationale Datenbank regelt den gleichzeitigen Zugriff mehrerer Benutzer (Sperren, Transaktionen), sodass keine Änderungen verloren gehen. Primär- und Fremdschlüssel sichern die Konsistenz, Zugriffsrechte lassen sich je Benutzer vergeben, und Abfragen per SQL sind schnell. Eine CSV-Datei kann dagegen immer nur von einem Programm sicher geschrieben werden und bietet weder Rechte noch Integritätsprüfung.</p>`
    },
    {
      id: "e-lastenheft",
      topic: "anforderungen",
      title: "Anforderungen zuordnen und Vorgehen wählen",
      level: 2,
      exam: ["AP1"],
      task: `<p>Die <strong>Wattblick GmbH in Büsum</strong> beauftragt die Nordlicht IT GmbH mit einer Geräteverwaltung. Folgende Aussagen liegen vor:</p>
        <ol>
          <li>Die Anwendung muss Geräte nach Standort filtern können.</li>
          <li>Die Umsetzung erfolgt in Python mit einer MariaDB-Datenbank auf einem Linux-Server.</li>
          <li>Suchergebnisse sollen in weniger als zwei Sekunden angezeigt werden.</li>
          <li>Der CSV-Import nutzt das Modul <code>csv</code>; fehlerhafte Zeilen werden in einer Logdatei protokolliert.</li>
          <li>Die Oberfläche muss vollständig per Tastatur und mit Screenreader bedienbar sein.</li>
          <li>Die Anwendung muss einen Bericht aller Geräte mit abgelaufener Garantie erzeugen.</li>
        </ol>
        <p>a) Ordnen Sie jede Aussage dem Lastenheft oder dem Pflichtenheft zu.</p>
        <p>b) Unterscheiden Sie die Aussagen des Lastenhefts in funktionale und nicht-funktionale Anforderungen.</p>
        <p>c) Die Wattblick GmbH kann ihre Wünsche noch nicht genau beschreiben und möchte früh erste Ergebnisse sehen. Empfehlen und begründen Sie ein Vorgehensmodell.</p>
        <p>d) Im Anwendungsfalldiagramm bindet „Gerät erfassen“ immer „Anmelden“ ein, „Foto hochladen“ erweitert „Gerät erfassen“ optional. Welche Beziehungen verwenden Sie, und in welche Richtung zeigen die Pfeile?</p>`,
      solution: `<p><strong>a)</strong> Lastenheft (Was?): 1, 3, 5, 6 · Pflichtenheft (Wie/Womit?): 2, 4.</p>
        <p><strong>b)</strong> Funktional: 1 (Filtern), 6 (Bericht erzeugen). Nicht-funktional: 3 (Effizienz/Antwortzeit), 5 (Benutzbarkeit/Barrierefreiheit).</p>
        <p><strong>c)</strong> Empfehlung: <strong>Scrum</strong>. Weil die Anforderungen noch unklar sind, werden sie im Product Backlog gesammelt und laufend priorisiert. In kurzen Sprints (z. B. zwei Wochen) entsteht jeweils ein lauffähiges Inkrement, das der Kunde im Sprint Review begutachtet – Änderungswünsche fließen sofort in die nächsten Sprints ein. Beim Wasserfallmodell müssten die Anforderungen dagegen zu Beginn vollständig feststehen, und der Kunde sähe das Ergebnis erst am Ende.</p>
        <p><strong>d)</strong> „Gerät erfassen“ → «include» → „Anmelden“: gestrichelter Pfeil vom Basisfall zum eingebundenen Fall, weil die Anmeldung immer ausgeführt wird. „Foto hochladen“ → «extend» → „Gerät erfassen“: gestrichelter Pfeil vom erweiternden Fall zum Basisfall, weil das Hochladen nur optional (unter einer Bedingung) stattfindet.</p>`
    },
    {
      id: "e-zahlensysteme",
      topic: "daten-codierung",
      title: "Zahlensysteme und Paritätsbit",
      level: 1,
      exam: ["AP1", "AP2"],
      task: `<p>a) Wandeln Sie <code>1101 0110₂</code> in eine Dezimal- und eine Hexadezimalzahl um.</p>
        <p>b) Wandeln Sie die Dezimalzahl 200 in eine Dual- und eine Hexadezimalzahl um.</p>
        <p>c) Wie viele verschiedene Werte lassen sich mit 12 Bit darstellen?</p>
        <p>d) Ein 7-Bit-Zeichen lautet <code>101 1001</code>. Bestimmen Sie das Paritätsbit für gerade und für ungerade Parität.</p>`,
      solution: `<p><strong>a)</strong> 1101 0110₂ = 128 + 64 + 16 + 4 + 2 = <strong>214</strong>. Hexadezimal in Vierergruppen: 1101 = D, 0110 = 6 → <strong>D6₁₆</strong>.</p>
        <p><strong>b)</strong> 200 = 128 + 64 + 8 → <strong>1100 1000₂</strong>. Vierergruppen: 1100 = C, 1000 = 8 → <strong>C8₁₆</strong> (Probe: 12 × 16 + 8 = 200).</p>
        <p><strong>c)</strong> 2¹² = <strong>4.096</strong> Werte (0 bis 4.095).</p>
        <p><strong>d)</strong> Das Zeichen enthält 4 Einsen. Gerade Parität: Die Anzahl ist bereits gerade → Paritätsbit <strong>0</strong>. Ungerade Parität: Es muss eine Eins ergänzt werden → Paritätsbit <strong>1</strong>.</p>`
    },
    {
      id: "e-normalisierung",
      topic: "daten-db",
      title: "Einsatzliste normalisieren",
      level: 3,
      exam: ["AP2"],
      task: `<p>Die Deichgraf IT-Service GmbH führt ihre Einsätze bisher in einer einzigen Tabelle:</p>
        <table><thead><tr><th>EinsatzNr</th><th>Datum</th><th>KundenNr</th><th>Firma</th><th>PLZ</th><th>Ort</th><th>Ersatzteile</th></tr></thead><tbody>
          <tr><td>501</td><td>02.09.2026</td><td>K17</td><td>Wattblick GmbH</td><td>25761</td><td>Büsum</td><td>T1 SSD, T2 RAM-Modul</td></tr>
          <tr><td>502</td><td>03.09.2026</td><td>K23</td><td>Marschland Agrar KG</td><td>25746</td><td>Heide</td><td>T3 Netzteil</td></tr>
          <tr><td>503</td><td>08.09.2026</td><td>K17</td><td>Wattblick GmbH</td><td>25761</td><td>Büsum</td><td>T2 RAM-Modul</td></tr>
        </tbody></table>
        <p>a) Erläutern Sie anhand der Tabelle je ein Beispiel für eine Einfüge-, eine Änderungs- und eine Löschanomalie.</p>
        <p>b) Begründen Sie, warum die Tabelle nicht in der 1. Normalform ist, und beschreiben Sie den Schritt zur 1. NF.</p>
        <p>c) Überführen Sie die Daten in die 3. Normalform. Geben Sie alle Tabellen mit Primär- und Fremdschlüsseln an. Pro Einsatz soll zusätzlich die verbaute Menge je Ersatzteil gespeichert werden. Gehen Sie vereinfachend davon aus, dass eine PLZ genau einen Ort bestimmt.</p>`,
      hints: ["2. NF: Welche Attribute hängen nur von einem Teil des zusammengesetzten Schlüssels ab?", "3. NF: Firma hängt von der KundenNr ab, Ort von der PLZ – beides sind keine Schlüssel der Einsatztabelle."],
      solution: `<p><strong>a)</strong></p>
        <ul>
          <li><strong>Einfügeanomalie:</strong> Ein neuer Kunde, für den noch kein Einsatz stattgefunden hat, kann nicht gespeichert werden, weil jede Zeile eine EinsatzNr braucht.</li>
          <li><strong>Änderungsanomalie:</strong> Zieht die Wattblick GmbH um, müssen PLZ und Ort in den Zeilen 501 und 503 geändert werden. Wird eine Zeile vergessen, sind die Daten widersprüchlich.</li>
          <li><strong>Löschanomalie:</strong> Wird Einsatz 502 gelöscht, gehen auch alle Daten der Marschland Agrar KG und das Ersatzteil T3 verloren.</li>
        </ul>
        <p><strong>b)</strong> Die Spalte „Ersatzteile“ enthält mehrere Werte in einer Zelle (z. B. „T1 SSD, T2 RAM-Modul“) – die Werte sind nicht atomar. Zur 1. NF wird für jedes verbaute Ersatzteil eine eigene Zeile angelegt und TeileNr und Bezeichnung werden in getrennte Spalten aufgeteilt. Primärschlüssel ist dann die Kombination aus EinsatzNr und TeileNr.</p>
        <p><strong>c)</strong> 2. NF: Datum und Kundendaten hängen nur von der EinsatzNr ab, die Bezeichnung nur von der TeileNr → eigene Tabellen. 3. NF: Firma und PLZ hängen transitiv über die KundenNr ab, der Ort über die PLZ → weitere Tabellen.</p>
        <ul>
          <li>Ort(<strong>PLZ</strong>, Ort)</li>
          <li>Kunde(<strong>KundenNr</strong>, Firma, PLZ↑)</li>
          <li>Einsatz(<strong>EinsatzNr</strong>, Datum, KundenNr↑)</li>
          <li>Ersatzteil(<strong>TeileNr</strong>, Bezeichnung)</li>
          <li>Einsatz_Ersatzteil(<strong>EinsatzNr↑, TeileNr↑</strong>, Menge)</li>
        </ul>
        <p>Jede Information steht jetzt nur noch einmal in der Datenbank; die Verknüpfung erfolgt über die Fremdschlüssel (↑).</p>`
    },
    {
      id: "e-verschachtelt",
      topic: "kontrollstrukturen",
      title: "Rückgabewerte bei vierfach verschachtelter Verzweigung",
      level: 3,
      exam: ["AP1"],
      task: `<p>Der Onlineshop der <strong>Marschland Technik GmbH in Meldorf</strong> ordnet jedem Paket eine Versandklasse zu. Gewicht in kg, Länge in cm:</p>
        <pre><code>FUNKTION versandklasse(gewicht, laenge, express, inland)
    WENN inland = WAHR DANN
        WENN gewicht &lt;= 2 DANN
            WENN laenge &lt;= 60 DANN
                WENN express = WAHR DANN
                    klasse ← "P1-EXPRESS"
                SONST
                    klasse ← "P1"
                ENDE WENN
            SONST
                klasse ← "P2"
            ENDE WENN
        SONST
            klasse ← "P3"
        ENDE WENN
    SONST
        klasse ← "INT"
    ENDE WENN
    RÜCKGABE klasse
ENDE FUNKTION</code></pre>
        <p>a) Bestimmen Sie die Rückgabewerte:</p>
        <table><thead><tr><th>Nr.</th><th>gewicht</th><th>laenge</th><th>express</th><th>inland</th></tr></thead><tbody>
          <tr><td>1</td><td>1,5</td><td>40</td><td>FALSCH</td><td>WAHR</td></tr>
          <tr><td>2</td><td>1,5</td><td>40</td><td>WAHR</td><td>WAHR</td></tr>
          <tr><td>3</td><td>2,0</td><td>75</td><td>FALSCH</td><td>WAHR</td></tr>
          <tr><td>4</td><td>2,5</td><td>30</td><td>WAHR</td><td>WAHR</td></tr>
          <tr><td>5</td><td>0,8</td><td>20</td><td>WAHR</td><td>FALSCH</td></tr>
          <tr><td>6</td><td>2,0</td><td>60</td><td>WAHR</td><td>WAHR</td></tr>
        </tbody></table>
        <p>b) Beschreiben Sie in eigenen Worten, nach welchen Regeln die Funktion die Versandklasse festlegt.</p>
        <p>c) Wie viele Testfälle sind mindestens nötig, damit jede Zuweisung an <code>klasse</code> einmal ausgeführt wird? Begründen Sie.</p>
        <p>d) Künftig sollen auch Inlandspakete über 2 kg mit Express verschickt werden können und dann die Klasse „P3-EXPRESS“ erhalten. Ergänzen Sie den Pseudocode.</p>`,
      hints: ["Lies die Verschachtelung über die Einrückung: Jedes SONST gehört zum WENN in derselben Spalte.", "Grenzwerte: 2,0 kg ist „&lt;= 2“, 60 cm ist „&lt;= 60“."],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Nr.</th><th>Weg durch die Bedingungen</th><th>Rückgabe</th></tr></thead><tbody>
          <tr><td>1</td><td>inland ja → 1,5 ≤ 2 ja → 40 ≤ 60 ja → express nein</td><td><code>"P1"</code></td></tr>
          <tr><td>2</td><td>inland ja → 1,5 ≤ 2 ja → 40 ≤ 60 ja → express ja</td><td><code>"P1-EXPRESS"</code></td></tr>
          <tr><td>3</td><td>inland ja → 2,0 ≤ 2 ja → 75 ≤ 60 nein</td><td><code>"P2"</code></td></tr>
          <tr><td>4</td><td>inland ja → 2,5 ≤ 2 nein (express spielt keine Rolle)</td><td><code>"P3"</code></td></tr>
          <tr><td>5</td><td>inland nein</td><td><code>"INT"</code></td></tr>
          <tr><td>6</td><td>inland ja → 2,0 ≤ 2 ja → 60 ≤ 60 ja → express ja</td><td><code>"P1-EXPRESS"</code></td></tr>
        </tbody></table>
        <p><strong>b)</strong> Auslandspakete erhalten immer die Klasse „INT“. Inlandspakete über 2 kg erhalten „P3“. Inlandspakete bis einschließlich 2 kg, die länger als 60 cm sind, erhalten „P2“. Kleine Inlandspakete (bis 2 kg und bis 60 cm) erhalten „P1“ bzw. mit Express „P1-EXPRESS“.</p>
        <p><strong>c)</strong> Mindestens <strong>5 Testfälle</strong>: Es gibt fünf verschiedene Zuweisungen („P1-EXPRESS“, „P1“, „P2“, „P3“, „INT“), und jeder Aufruf durchläuft genau einen Weg bis zu genau einer Zuweisung. Damit ist gleichzeitig jeder Zweig jeder Verzweigung einmal durchlaufen (Zweigüberdeckung); die Aufrufe 1 bis 5 aus a) erfüllen das bereits.</p>
        <p><strong>d)</strong> Der SONST-Zweig der Gewichtsprüfung wird um eine Verzweigung ergänzt:</p>
        <pre><code>        SONST
            WENN express = WAHR DANN
                klasse ← "P3-EXPRESS"
            SONST
                klasse ← "P3"
            ENDE WENN
        ENDE WENN</code></pre>`
    },
    {
      id: "e-pseudo-fehler",
      topic: "algorithmen",
      title: "Fehler in Array-Pseudocode finden (Syntax und Semantik)",
      level: 3,
      exam: ["AP2"],
      task: `<p>Die Nordlicht IT GmbH wertet die Anzahl neuer Tickets pro Tag aus. Die Funktion soll den Durchschnitt und die Anzahl der Tage mit einer <em>geraden</em> Ticketanzahl zurückgeben. Das Array beginnt bei Index 0.</p>
        <pre><code>FUNKTION auswerten(werte[])
    anzahlGerade ← 0
    summe ← 0
    FÜR i VON 1 BIS LÄNGE(werte)
        summe ← summe + werte[i]
        WENN werte[i] / 2 = 0 DANN
            anzahlGerade ← anzahlGerade + 1
        ENDE WENN
    ENDE FÜR
    durchschnitt ← summe / LÄNGE(werte
    RÜCKGABE durchschnitt, anzahlGerade
ENDE FUNKTION</code></pre>
        <p>a) Finden Sie drei Fehler und ordnen Sie jeden als Syntaxfehler oder als semantischen (logischen) Fehler ein.</p>
        <p>b) Die Funktion wird auch mit einem leeren Array aufgerufen. Beschreiben Sie das Problem und ergänzen Sie eine Lösung.</p>
        <p>c) Geben Sie den korrigierten Pseudocode an und bestimmen Sie die Rückgabe für <code>werte = [4, 7, 10, 3, 6]</code>.</p>
        <p>d) Nennen Sie zwei weitere sinnvolle Testfälle mit erwartetem Ergebnis.</p>`,
      hints: ["Achte auf die Schleifengrenzen bei einem Array, das bei 0 beginnt.", "„Ist gerade“ prüft man mit dem Rest der Division."],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Zeile</th><th>Fehler</th><th>Art</th><th>Korrektur</th></tr></thead><tbody>
          <tr><td>4</td><td>Schleife läuft von 1 bis LÄNGE(werte): Index 0 wird übersprungen, zuletzt wird auf ein nicht vorhandenes Element zugegriffen (Off-by-one)</td><td>semantisch (führt zur Laufzeit zu einem Indexfehler)</td><td><code>FÜR i VON 0 BIS LÄNGE(werte) − 1</code></td></tr>
          <tr><td>6</td><td>Division statt Modulo: <code>werte[i] / 2 = 0</code> ist nur für den Wert 0 wahr</td><td>semantisch</td><td><code>WENN werte[i] MOD 2 = 0 DANN</code></td></tr>
          <tr><td>10</td><td>schließende Klammer fehlt</td><td>Syntaxfehler</td><td><code>summe / LÄNGE(werte)</code></td></tr>
        </tbody></table>
        <p><strong>b)</strong> Bei einem leeren Array ist LÄNGE(werte) = 0, die Berechnung des Durchschnitts wäre eine Division durch 0 – ein Laufzeitfehler. Lösung: vor der Berechnung prüfen und einen definierten Wert zurückgeben (oder eine Fehlermeldung ausgeben).</p>
        <p><strong>c)</strong></p>
        <pre><code>FUNKTION auswerten(werte[])
    WENN LÄNGE(werte) = 0 DANN
        RÜCKGABE 0, 0
    ENDE WENN
    anzahlGerade ← 0
    summe ← 0
    FÜR i VON 0 BIS LÄNGE(werte) − 1
        summe ← summe + werte[i]
        WENN werte[i] MOD 2 = 0 DANN
            anzahlGerade ← anzahlGerade + 1
        ENDE WENN
    ENDE FÜR
    durchschnitt ← summe / LÄNGE(werte)
    RÜCKGABE durchschnitt, anzahlGerade
ENDE FUNKTION</code></pre>
        <table><thead><tr><th>i</th><th>werte[i]</th><th>gerade?</th><th>summe</th><th>anzahlGerade</th></tr></thead><tbody>
          <tr><td>Start</td><td>–</td><td>–</td><td>0</td><td>0</td></tr>
          <tr><td>0</td><td>4</td><td>ja</td><td>4</td><td>1</td></tr>
          <tr><td>1</td><td>7</td><td>nein</td><td>11</td><td>1</td></tr>
          <tr><td>2</td><td>10</td><td>ja</td><td>21</td><td>2</td></tr>
          <tr><td>3</td><td>3</td><td>nein</td><td>24</td><td>2</td></tr>
          <tr><td>4</td><td>6</td><td>ja</td><td>30</td><td>3</td></tr>
        </tbody></table>
        <p>Durchschnitt = 30 ÷ 5 = 6 → Rückgabe <strong>6, 3</strong>.</p>
        <p><strong>d)</strong> (Beispiele) <code>[]</code> → 0, 0 (Sonderfall leeres Array) · <code>[1, 3]</code> → 2, 0 (keine gerade Zahl) · <code>[5]</code> → 5, 0 (genau ein Element, prüft die Schleifengrenzen).</p>`
    },
    {
      id: "e-web-statisch",
      topic: "web",
      title: "Internetauftritt: statisch oder dynamisch?",
      level: 2,
      exam: ["AP1"],
      task: `<p>Die <strong>Friesenhof Ferienwohnungen KG in Büsum</strong> vermietet zwölf Ferienwohnungen und wirbt bisher nur mit Flyern. Die Nordlicht IT GmbH soll einen Internetauftritt planen: eine Startseite mit Fotos, eine Seite mit Anfahrt und Impressum sowie einen Belegungskalender, in dem Gäste freie Termine sehen und online buchen können.</p>
        <p>a) Erläutern Sie den Unterschied zwischen einer statischen und einer dynamischen Webseite.</p>
        <p>b) Begründen Sie jeweils, ob die Seiten „Startseite/Anfahrt/Impressum“ und „Belegungskalender mit Buchung“ statisch oder dynamisch umgesetzt werden sollten.</p>
        <p>c) Nennen Sie für den Belegungskalender je eine geeignete client- und serverseitige Technik und beschreiben Sie die Aufgabe der Datenbank.</p>
        <p>d) Nennen Sie zwei Maßnahmen, die den Betrieb des dynamischen Teils sicherer machen.</p>`,
      solution: `<p><strong>a)</strong> Eine <strong>statische</strong> Webseite besteht aus fertigen HTML-Dateien, die der Webserver unverändert ausliefert – jeder Besucher sieht denselben Inhalt, Änderungen erfordern das Bearbeiten und Hochladen der Datei. Eine <strong>dynamische</strong> Webseite wird bei jedem Aufruf von einem Programm auf dem Server erzeugt, meist mit Daten aus einer Datenbank. Dadurch kann sie aktuelle, personalisierte Inhalte anzeigen und Eingaben wie Buchungen verarbeiten.</p>
        <p><strong>b)</strong> <strong>Startseite, Anfahrt, Impressum: statisch</strong> – die Inhalte ändern sich selten und sind für alle Besucher gleich. Statische Seiten laden schnell, sind günstig zu hosten und bieten kaum Angriffsfläche. <strong>Belegungskalender mit Buchung: dynamisch</strong> – die freien Termine ändern sich mit jeder Buchung, Eingaben der Gäste müssen gespeichert und geprüft werden, und Doppelbuchungen müssen verhindert werden. Das ist nur mit einem serverseitigen Programm und einer Datenbank möglich.</p>
        <p><strong>c)</strong> Clientseitig: HTML/CSS für die Darstellung und JavaScript, z. B. um ein Datum im Kalender auszuwählen oder Eingaben vorab zu prüfen. Serverseitig: z. B. PHP oder Python (Flask, Django), um Verfügbarkeiten abzufragen und Buchungen zu speichern. Die <strong>Datenbank</strong> speichert Wohnungen, Buchungen und Gästedaten dauerhaft und sorgt dafür, dass mehrere gleichzeitige Zugriffe konsistent bleiben (keine zwei Buchungen für denselben Zeitraum).</p>
        <p><strong>d)</strong> (zwei genügen) Webserver, CMS und Erweiterungen regelmäßig aktualisieren · alle Eingaben serverseitig prüfen und Datenbankabfragen mit Prepared Statements ausführen (Schutz vor SQL-Injection) · nur HTTPS verwenden · Administrationszugang mit starkem Passwort und Zwei-Faktor-Authentifizierung schützen · Datenbank regelmäßig sichern.</p>`
    },
    {
      id: "e-api-json",
      topic: "web",
      title: "Gerätedaten aus einer JSON-Schnittstelle auswerten",
      level: 2,
      exam: ["AP2"],
      task: `<p>Die Inventar-API der Nordlicht IT GmbH liefert für einen Standort folgende Antwort. Zum Testen wird sie als String im Programm hinterlegt:</p>
        <pre><code>import json

antwort = '''{"standort": "Heide",
 "geraete": [
  {"nr": "INV-1001", "typ": "Notebook", "defekt": false, "alter": 2},
  {"nr": "INV-1002", "typ": "Drucker",  "defekt": true,  "alter": 6},
  {"nr": "INV-1003", "typ": "Monitor",  "defekt": true,  "alter": 1},
  {"nr": "INV-1004", "typ": "Notebook", "defekt": false, "alter": 5}
 ]}'''
daten = json.loads(antwort)
defekt = [g["nr"] for g in daten["geraete"] if g["defekt"]]
alt = [g["nr"] for g in daten["geraete"] if g["alter"] &gt;= 5]
print(daten["standort"], len(daten["geraete"]))   # 1
print(defekt)                                    # 2
print(alt)                                       # 3</code></pre>
        <p>a) Geben Sie die drei Ausgaben an.</p>
        <p>b) In welche Python-Datentypen wandelt <code>json.loads()</code> den JSON-Wert <code>false</code> und das JSON-Array unter „geraete“ um?</p>
        <p>c) Im Betrieb kommen die Daten per <code>requests.get(url, timeout=10)</code>. Erklären Sie die Statuscodes 200, 401 und 404 und ergänzen Sie eine sinnvolle Reaktion des Programms.</p>
        <p>d) Nennen Sie zwei Gründe, warum die API dem Auslesen der HTML-Inventarseite (Web-Scraping) vorzuziehen ist.</p>`,
      solution: `<p><strong>a)</strong></p>
        <pre><code>Heide 4
['INV-1002', 'INV-1003']
['INV-1002', 'INV-1004']</code></pre>
        <p>Ausgabe 1: Standort und Anzahl der Einträge im Array. Ausgabe 2: alle Geräte mit <code>defekt</code> = true. Ausgabe 3: alle Geräte mit einem Alter von mindestens 5 Jahren – INV-1004 ist genau 5 und wird wegen <code>&gt;=</code> mitgezählt.</p>
        <p><strong>b)</strong> <code>false</code> wird zu <code>False</code> (Typ <code>bool</code>), das JSON-Array wird zu einer <code>list</code>, deren Elemente (JSON-Objekte) zu <code>dict</code>.</p>
        <p><strong>c)</strong> 200 = OK, die Daten wurden geliefert. 401 = nicht authentifiziert, z. B. fehlender oder falscher API-Schlüssel. 404 = die angefragte Ressource existiert nicht, z. B. falscher Standort in der Adresse.</p>
        <pre><code>antwort = requests.get(url, timeout=10)
if antwort.status_code == 200:
    daten = antwort.json()
elif antwort.status_code == 401:
    print("Anmeldung fehlgeschlagen – API-Schlüssel prüfen")
elif antwort.status_code == 404:
    print("Standort nicht gefunden")
else:
    print("Unerwarteter Fehler:", antwort.status_code)</code></pre>
        <p><strong>d)</strong> (zwei genügen) Die API liefert strukturierte, maschinenlesbare Daten (JSON) und muss nicht aus HTML herausgeschnitten werden · sie bleibt stabil, während sich das Layout einer Webseite jederzeit ändern und das Skript unbrauchbar machen kann · ihre Nutzung ist ausdrücklich erlaubt und über Schlüssel und Rechte geregelt · sie belastet den Server weniger.</p>`
    },
    {
      id: "e-zustand",
      topic: "uml",
      title: "Zustandsdiagramm für ein Leihgerät",
      level: 2,
      exam: ["AP2"],
      task: `<p>Die <strong>Wattblick GmbH in Büsum</strong> verleiht Notebooks an ihre Mitarbeitenden. Ein neues Leihgerät ist zunächst <em>verfügbar</em>. Wird es ausgeliehen, ist es <em>ausgeliehen</em>. Bei der Rückgabe wird es geprüft: Ohne Schaden ist es wieder verfügbar, mit Schaden kommt es <em>in Reparatur</em>. Nach der Reparatur ist es wieder verfügbar; ist die Reparatur unwirtschaftlich, wird es ausgemustert. Ein verfügbares Gerät, das älter als fünf Jahre ist, wird ebenfalls ausgemustert.</p>
        <p>a) Zeichnen Sie ein UML-Zustandsdiagramm mit Start- und Endzustand, allen Zuständen und beschrifteten Übergängen (Ereignis [Bedingung]).</p>
        <p>b) Erklären Sie an diesem Beispiel den Unterschied zwischen einem Zustands- und einem Aktivitätsdiagramm.</p>
        <p>c) Beschreiben Sie, wie Sie den Zustand in einer Python-Klasse <code>Leihgeraet</code> abbilden und unerlaubte Übergänge verhindern (z. B. ein bereits ausgeliehenes Gerät erneut ausleihen).</p>`,
      solution: `<p><strong>a)</strong></p>
        <pre class="ascii">              ●
              |
              v
   +------------------+   ausleihen()       +------------------+
   |    verfügbar     | ------------------&gt; |   ausgeliehen    |
   |                  | &lt;------------------ |                  |
   +------------------+   zurückgeben()     +------------------+
      |          ^        [ohne Schaden]              |
      |          |                                    | zurückgeben()
      |          | repariert()                        | [mit Schaden]
      |          |                                    v
      |       +------------------------------------------------+
      |       |                  in Reparatur                  |
      |       +------------------------------------------------+
      |                           |
      | ausmustern()              | ausmustern()
      | [älter als 5 Jahre]       | [Reparatur unwirtschaftlich]
      v                           v
      ◉                           ◉</pre>
        <table><thead><tr><th>von</th><th>Ereignis [Bedingung]</th><th>nach</th></tr></thead><tbody>
          <tr><td>Start</td><td>–</td><td>verfügbar</td></tr>
          <tr><td>verfügbar</td><td>ausleihen()</td><td>ausgeliehen</td></tr>
          <tr><td>ausgeliehen</td><td>zurückgeben() [ohne Schaden]</td><td>verfügbar</td></tr>
          <tr><td>ausgeliehen</td><td>zurückgeben() [mit Schaden]</td><td>in Reparatur</td></tr>
          <tr><td>in Reparatur</td><td>repariert()</td><td>verfügbar</td></tr>
          <tr><td>in Reparatur</td><td>ausmustern() [Reparatur unwirtschaftlich]</td><td>Ende</td></tr>
          <tr><td>verfügbar</td><td>ausmustern() [älter als 5 Jahre]</td><td>Ende</td></tr>
        </tbody></table>
        <p><strong>b)</strong> Das <strong>Zustandsdiagramm</strong> zeigt den Lebenszyklus <em>eines</em> Objekts – hier eines Leihgeräts: in welchem Zustand es sich befindet und welches Ereignis den Wechsel auslöst. Ein <strong>Aktivitätsdiagramm</strong> zeigt dagegen einen Ablauf von Tätigkeiten, z. B. die Schritte „Gerät annehmen → auf Schäden prüfen → Rückgabe buchen → Mitarbeitenden informieren“, ggf. verteilt auf Rollen.</p>
        <p><strong>c)</strong> Der Zustand wird in einem privaten Attribut gespeichert. Jede Methode, die ein Ereignis darstellt, prüft zuerst, ob der Übergang im aktuellen Zustand erlaubt ist, und löst sonst eine Ausnahme aus:</p>
        <pre><code>class Leihgeraet:
    def __init__(self, inventarnr):
        self.inventarnr = inventarnr
        self.__status = "verfügbar"

    def ausleihen(self):
        if self.__status != "verfügbar":
            raise ValueError(f"Ausleihen nicht möglich, Status: {self.__status}")
        self.__status = "ausgeliehen"

    def zurueckgeben(self, schaden):
        if self.__status != "ausgeliehen":
            raise ValueError("Gerät ist nicht ausgeliehen")
        self.__status = "in Reparatur" if schaden else "verfügbar"</code></pre>
        <p>Durch die Kapselung kann der Status nicht von außen beliebig gesetzt werden – nur die im Diagramm erlaubten Übergänge sind möglich.</p>`
    },
    {
      id: "e-operator",
      topic: "oop",
      title: "Operatorüberladung mit magischen Methoden",
      level: 2,
      exam: [],
      task: `<p>Für eine Kapazitätsplanung modelliert ein Azubi Speichermedien als Objekte:</p>
        <pre><code>class Speicher:
    def __init__(self, gib):
        self.gib = gib
    def __add__(self, other):
        return Speicher(self.gib + other.gib)
    def __gt__(self, other):
        return self.gib &gt; other.gib
    def __str__(self):
        return f"{self.gib} GiB"

ssd = Speicher(512)
hdd = Speicher(2048)
nas = Speicher(4096)
print(ssd + hdd)          # 1
print(nas &gt; ssd + hdd)    # 2
print(ssd &gt; hdd)          # 3
gesamt = Speicher(0)
for s in [ssd, hdd, nas]:
    gesamt = gesamt + s
print(gesamt)             # 4</code></pre>
        <p>a) Geben Sie die vier Ausgaben an.</p>
        <p>b) Welche Methode ruft Python bei <code>ssd + hdd</code> auf? Erklären Sie, warum das ein Beispiel für Polymorphie ist.</p>
        <p>c) Ergänzen Sie eine Methode, damit <code>Speicher(512) == Speicher(512)</code> den Wert <code>True</code> liefert.</p>
        <p>d) Was würde <code>print(ssd)</code> ohne die Methode <code>__str__</code> ausgeben?</p>`,
      solution: `<p><strong>a)</strong></p>
        <ol>
          <li><code>2560 GiB</code> – 512 + 2048 = 2560; das Ergebnis ist ein neues Speicher-Objekt, <code>print</code> nutzt <code>__str__</code>.</li>
          <li><code>True</code> – <code>+</code> bindet stärker als <code>&gt;</code>: 4096 &gt; 2560.</li>
          <li><code>False</code> – 512 &gt; 2048 ist falsch.</li>
          <li><code>6656 GiB</code> – 0 + 512 + 2048 + 4096 = 6656.</li>
        </ol>
        <p><strong>b)</strong> Python ruft <code>ssd.__add__(hdd)</code> auf. Der Operator <code>+</code> verhält sich je nach Typ der Operanden unterschiedlich: Bei Zahlen addiert er, bei Strings verkettet er, bei Speicher-Objekten führt er die selbst definierte Methode aus. Dieselbe Schnittstelle mit unterschiedlichem Verhalten ist Polymorphie (hier: Operatorüberladung).</p>
        <p><strong>c)</strong></p>
        <pre><code>    def __eq__(self, other):
        return self.gib == other.gib</code></pre>
        <p><strong>d)</strong> Die Standarddarstellung des Objekts mit Klassenname und Speicheradresse, z. B. <code>&lt;__main__.Speicher object at 0x7f3a…&gt;</code> – für Anwender nicht aussagekräftig.</p>`
    },
    {
      id: "e-ki-code",
      topic: "sprachen",
      title: "KI-generierten Code prüfen und datenschutzkonform einsetzen",
      level: 2,
      exam: ["AP1"],
      task: `<p>Ein Azubi der Nordlicht IT GmbH lässt sich von einem kostenlosen KI-Chatbot eine Funktion schreiben, die aus einem Bruttopreis den Nettopreis berechnet. Damit die KI „den Zusammenhang versteht“, kopiert er die Kundenliste mit Namen, E-Mail-Adressen und Umsätzen in den Chat. Die KI liefert:</p>
        <pre><code>def netto(brutto, mwst=19):
    return round(brutto - brutto * mwst / 100, 2)</code></pre>
        <p>a) Nennen Sie zwei Vorteile von KI-Assistenten in der Softwareentwicklung.</p>
        <p>b) Beurteilen Sie das Vorgehen des Azubis aus Sicht des Datenschutzes.</p>
        <p>c) Testen Sie die Funktion mit brutto = 119,00 €. Welches Ergebnis liefert sie, welches wäre richtig? Korrigieren Sie die Funktion.</p>
        <p>d) Nennen Sie drei Regeln für den Einsatz von KI-generiertem Code im Betrieb.</p>`,
      solution: `<p><strong>a)</strong> (zwei genügen) Routinecode und Grundgerüste entstehen schneller · unbekannter Code und Fehlermeldungen werden verständlich erklärt · Vorschläge für Testfälle, Kommentare und Dokumentation · Unterstützung beim Einarbeiten in eine neue Sprache oder Bibliothek.</p>
        <p><strong>b)</strong> Das Vorgehen ist unzulässig. Namen und E-Mail-Adressen sind personenbezogene Daten. Sie wurden ohne Rechtsgrundlage und ohne Auftragsverarbeitungsvertrag an einen externen Anbieter übermittelt, eventuell auf Server außerhalb der EU, und können dort gespeichert oder zum Training verwendet werden. Außerdem verstößt es gegen die Datenminimierung – für eine Rechenfunktion braucht die KI überhaupt keine Kundendaten. Der Azubi sollte den Vorfall sofort seiner Ausbilderin bzw. seinem Ausbilder und dem Datenschutzbeauftragten melden, damit geprüft wird, ob eine Meldung an die Aufsichtsbehörde nötig ist.</p>
        <p><strong>c)</strong> Die Funktion zieht 19 % vom <em>Bruttopreis</em> ab: 119,00 − 119,00 × 0,19 = 119,00 − 22,61 = <strong>96,39 €</strong>. Richtig sind <strong>100,00 €</strong>, denn der Bruttopreis entspricht 119 % des Nettopreises: 119,00 ÷ 1,19 = 100,00 €. Es ist ein logischer Fehler – das Programm läuft, rechnet aber falsch.</p>
        <pre><code>def netto(brutto, mwst=19):
    return round(brutto / (1 + mwst / 100), 2)</code></pre>
        <p><strong>d)</strong> (drei genügen) Nur vom Betrieb freigegebene KI-Werkzeuge nutzen · keine personenbezogenen Daten, Zugangsdaten oder vertraulichen Quelltexte eingeben · jeden Vorschlag lesen und verstehen, bevor er übernommen wird · mit eigenen Testfällen (auch Grenzwerten) prüfen · Code-Review durch eine zweite Person · Lizenz- und Sicherheitsfragen (z. B. übernommene Pakete) klären.</p>`
    },
  ],
  quiz: [
    { id: "q-spr-1", topic: "sprachen", type: "single", exam: ["AP1"],
      q: "Welche Aussage beschreibt einen Interpreter zutreffend?",
      options: ["Er führt den Quellcode zur Laufzeit Anweisung für Anweisung aus.", "Er übersetzt den gesamten Quellcode vorab in eine eigenständige ausführbare Datei.", "Er verbindet Objektdateien und Bibliotheken zu einem lauffähigen Programm.", "Er entfernt vor der Ausführung alle Kommentare und speichert den Code verschlüsselt."],
      answer: 0,
      explain: "Ein Interpreter übersetzt und führt den Code schrittweise zur Laufzeit aus – es entsteht keine eigene Programmdatei. Die vorab erzeugte ausführbare Datei ist typisch für einen Compiler, das Zusammenfügen von Objektdateien ist die Aufgabe des Linkers." },
    { id: "q-spr-2", topic: "sprachen", type: "single", exam: ["AP1"],
      q: "Welches Werkzeug fügt die vom Compiler erzeugten Objektdateien und die benutzten Bibliotheken zu einem ausführbaren Programm zusammen?",
      options: ["Linker", "Interpreter", "Debugger", "Editor"],
      answer: 0,
      explain: "Der Linker (Binder) verbindet Objektcode und Bibliotheken zu einer ausführbaren Datei. Der Debugger dient der Fehlersuche, der Editor dem Schreiben des Codes, der Interpreter führt Code direkt aus." },
    { id: "q-spr-3", topic: "sprachen", type: "multi", exam: ["AP1"],
      q: "Welche Aussagen treffen auf die objektorientierte Programmierung zu?",
      options: ["Objekte bündeln Attribute und Methoden.", "Klassen dienen als Bauplan für Objekte.", "Daten und Funktionen werden grundsätzlich strikt voneinander getrennt.", "Kapselung schützt Attribute vor direktem Zugriff von außen.", "Sie ist nur mit kompilierten Sprachen möglich."],
      answer: [0, 1, 3],
      explain: "OOP bündelt Daten (Attribute) und Verhalten (Methoden) in Objekten, die nach dem Bauplan einer Klasse entstehen; Kapselung schützt die Attribute. Die strikte Trennung von Daten und Funktionen kennzeichnet dagegen die prozedurale Programmierung. OOP ist auch in interpretierten Sprachen wie Python möglich." },
    { id: "q-spr-4", topic: "sprachen", type: "tf", exam: ["AP1"],
      q: "Ein Framework ruft den eigenen Programmcode an festgelegten Stellen auf, während eine Bibliothek vom eigenen Code aufgerufen wird.",
      answer: true,
      explain: "Richtig. Bei einer Bibliothek behält dein Programm die Kontrolle und ruft die Funktionen bei Bedarf auf. Ein Framework gibt den Ablauf vor und ruft deinen Code an definierten Stellen auf (z. B. eine Funktion, die bei einer bestimmten Webadresse ausgeführt wird)." },
    { id: "q-spr-5", topic: "sprachen", type: "single", exam: ["AP1", "AP2"],
      q: "Ein Administrator möchte wiederkehrende Aufgaben auf Windows-Servern automatisieren, z. B. Benutzer anlegen und Logdateien auswerten. Welche Wahl ist am naheliegendsten?",
      options: ["eine Skriptsprache wie PowerShell oder Python", "Assembler", "die Auszeichnungssprache HTML", "C++, weil kompilierte Programme für jede Aufgabe die beste Wahl sind"],
      answer: 0,
      explain: "Skriptsprachen werden interpretiert, sind schnell angepasst und bringen fertige Befehle für Systemverwaltung mit – ideal für Automatisierung. Assembler ist viel zu aufwendig, HTML ist keine Programmiersprache, und C++ bietet hier keinen Vorteil, der den höheren Aufwand rechtfertigt." },
    { id: "q-spr-6", topic: "sprachen", type: "single", exam: ["AP1"],
      q: "Welche Aussage zu Java trifft zu?",
      options: ["Java-Quellcode wird in Bytecode übersetzt, den die Java Virtual Machine ausführt.", "Java wird ausschließlich interpretiert, ohne jeden Übersetzungsschritt.", "Java erzeugt direkt Maschinencode für genau einen Prozessortyp.", "Java-Programme benötigen zur Ausführung keine Laufzeitumgebung."],
      answer: 0,
      explain: "Java ist eine Mischform: Der Compiler erzeugt plattformunabhängigen Bytecode, die JVM führt ihn aus (meist mit JIT-Compiler). Deshalb ist Java weder rein kompiliert noch rein interpretiert und braucht eine Laufzeitumgebung." },
    { id: "q-spr-7", topic: "sprachen", type: "multi", exam: ["AP1"],
      q: "Welche Vorteile hat Standardsoftware typischerweise gegenüber Individualsoftware?",
      options: ["Sie ist sofort verfügbar.", "Sie ist durch viele Anwender erprobt.", "Sie ist meist günstiger, weil sich die Entwicklungskosten auf viele Kunden verteilen.", "Sie passt ohne Anpassung exakt auf jeden Geschäftsprozess.", "Der Quellcode geht automatisch in das Eigentum des Kunden über."],
      answer: [0, 1, 2],
      explain: "Standardsoftware ist sofort einsetzbar, erprobt und durch viele Käufer günstiger. Sie passt aber gerade nicht immer exakt – deshalb wird sie per Customizing angepasst. Den Quellcode erhält der Kunde in der Regel nicht; er erwirbt nur eine Lizenz." },
    { id: "q-py-1", topic: "python-basics", type: "input", exam: ["AP1"],
      q: "Welchen Wert liefert der Ausdruck <code>17 % 5</code>?",
      answer: ["2"],
      explain: "% (Modulo) liefert den Rest der ganzzahligen Division: 17 = 3 × 5 + 2, also Rest 2. Die ganzzahlige Division 17 // 5 ergäbe 3." },
    { id: "q-py-2", topic: "python-basics", type: "single", exam: ["AP1"],
      q: "Welchen Datentyp hat das Ergebnis von <code>10 / 2</code> in Python 3?",
      options: ["float", "int", "str", "bool"],
      answer: 0,
      explain: "Der Operator / liefert in Python 3 immer eine Gleitkommazahl – hier 5.0. Wer ein ganzzahliges Ergebnis braucht, verwendet // (10 // 2 = 5)." },
    { id: "q-py-3", topic: "python-basics", type: "single", exam: ["AP1"],
      q: "Was gibt <code>print('5' * 3)</code> aus?",
      options: ["555", "15", "eine Fehlermeldung (TypeError)", "5 5 5"],
      answer: 0,
      explain: "Ein String multipliziert mit einer ganzen Zahl wird entsprechend oft wiederholt: '5' * 3 = '555'. Eine Rechnung (15) entsteht nur mit int('5') * 3. Einen TypeError gäbe es erst bei '5' + 3." },
    { id: "q-py-4", topic: "python-basics", type: "multi", exam: ["AP1"],
      q: "Welche Variablennamen sind in Python gültig?",
      options: ["netto_preis", "_zaehler", "2te_zahl", "for", "preisNeu"],
      answer: [0, 1, 4],
      explain: "Namen dürfen aus Buchstaben, Ziffern und _ bestehen, aber nicht mit einer Ziffer beginnen (2te_zahl ist ungültig) und keine Schlüsselwörter sein (for ist reserviert). preisNeu ist gültig, entspricht aber nicht der PEP-8-Konvention snake_case." },
    { id: "q-py-5", topic: "python-basics", type: "tf", exam: ["AP1"],
      q: "<code>int(3.9)</code> ergibt 4, weil Python beim Umwandeln kaufmännisch rundet.",
      answer: false,
      explain: "Falsch. int() schneidet die Nachkommastellen ab: int(3.9) = 3. Zum Runden gibt es round() – round(3.9) ergibt 4." },
    { id: "q-py-6", topic: "python-basics", type: "single", exam: ["AP1"],
      q: "Welche Ausgabe erzeugt <code>print(3 + 4 * 2 ** 2)</code>?",
      options: ["19", "121", "28", "14"],
      answer: 0,
      explain: "Die Potenz wird zuerst berechnet: 2 ** 2 = 4. Dann Punkt vor Strich: 4 × 4 = 16, zuletzt 3 + 16 = 19. 28 entstünde bei (3 + 4) × 2², 121 bei (3 + 4 × 2)²." },
    { id: "q-py-7", topic: "python-basics", type: "input", exam: ["AP1"],
      q: "Ein Techniker war 137 Minuten im Einsatz. Welchen Wert liefert <code>137 // 60</code>?",
      answer: ["2", "2 h", "2 Stunden"],
      explain: "// ist die ganzzahlige Division: 137 ÷ 60 = 2,28… → 2 volle Stunden. Die restlichen Minuten liefert 137 % 60 = 17." },
    { id: "q-py-8", topic: "python-basics", type: "single", exam: ["AP1"],
      q: "Was liefert die Funktion <code>input()</code> zurück?",
      options: ["immer einen String", "je nach Eingabe einen int oder float", "immer eine ganze Zahl", "einen Wahrheitswert"],
      answer: 0,
      explain: "input() gibt die Eingabe immer als Text (str) zurück – auch wenn Ziffern eingegeben werden. Zum Rechnen musst du mit int() oder float() umwandeln." },
    { id: "q-py-9", topic: "python-basics", type: "tf", exam: ["AP1"],
      q: "Der Vergleich <code>0.1 + 0.2 == 0.3</code> ergibt in Python <code>True</code>.",
      answer: false,
      explain: "Falsch. Dezimalbrüche wie 0,1 sind im Binärsystem nicht exakt darstellbar; 0.1 + 0.2 ergibt 0.30000000000000004. Deshalb Geldbeträge runden oder das Modul decimal verwenden." },
    { id: "q-ks-1", topic: "kontrollstrukturen", type: "single", exam: ["AP1"],
      q: "Welche Zahlen erzeugt <code>range(2, 11, 3)</code>?",
      options: ["2, 5, 8", "2, 5, 8, 11", "3, 6, 9", "2, 4, 6, 8, 10"],
      answer: 0,
      explain: "range beginnt bei 2 und zählt in Dreierschritten, solange der Wert kleiner als 11 ist: 2, 5, 8. Die Obergrenze 11 gehört nie dazu." },
    { id: "q-ks-2", topic: "kontrollstrukturen", type: "input", exam: ["AP1"],
      q: `Welche Ausgabe erzeugt der folgende Code?<pre><code>s = 0
for i in range(1, 5):
    s += i
print(s)</code></pre>`,
      answer: ["10"],
      explain: "range(1, 5) liefert 1, 2, 3, 4 (ohne 5). s = 1 + 2 + 3 + 4 = 10." },
    { id: "q-ks-3", topic: "kontrollstrukturen", type: "single", exam: ["AP1"],
      q: "Welche Schleifenart prüft ihre Bedingung erst nach dem ersten Durchlauf und wird deshalb mindestens einmal ausgeführt?",
      options: ["fußgesteuerte Schleife", "kopfgesteuerte Schleife", "Zählschleife mit range()", "for-Schleife über eine leere Liste"],
      answer: 0,
      explain: "Die fußgesteuerte Schleife (z. B. WIEDERHOLE … BIS) prüft am Ende und läuft daher mindestens einmal. Die kopfgesteuerte Schleife (while) prüft vorher und kann auch keinmal durchlaufen werden. In Python bildet man die fußgesteuerte Schleife mit while True und break nach." },
    { id: "q-ks-4", topic: "kontrollstrukturen", type: "single", exam: ["AP1"],
      q: "Was bewirkt die Anweisung <code>continue</code> in einer Schleife?",
      options: ["Sie springt sofort zum nächsten Schleifendurchlauf.", "Sie beendet die Schleife vollständig.", "Sie beendet das gesamte Programm.", "Sie wiederholt den aktuellen Durchlauf mit denselben Werten."],
      answer: 0,
      explain: "continue überspringt den Rest des aktuellen Durchlaufs und macht mit dem nächsten weiter. Die Schleife ganz verlassen würde break; das Programm beenden würde z. B. sys.exit()." },
    { id: "q-ks-5", topic: "kontrollstrukturen", type: "single", exam: ["AP1"],
      q: `Welche Ausgabe erzeugt der Code?<pre><code>x = 10
while x &gt; 1:
    x = x // 2
    print(x, end=" ")</code></pre>`,
      options: ["5 2 1", "5 2 1 0", "10 5 2 1", "5 2"],
      answer: 0,
      explain: "Schreibtischtest: 10 → 5 (Ausgabe 5), 5 &gt; 1 → 2 (Ausgabe 2), 2 &gt; 1 → 1 (Ausgabe 1), dann ist 1 &gt; 1 falsch und die Schleife endet. Die 10 wird nie ausgegeben, weil vor der Ausgabe halbiert wird." },
    { id: "q-ks-6", topic: "kontrollstrukturen", type: "tf", exam: ["AP1"],
      q: "Bei <code>if … elif … else</code> werden alle Zweige ausgeführt, deren Bedingung wahr ist.",
      answer: false,
      explain: "Falsch. Die Bedingungen werden von oben nach unten geprüft, und nur der erste zutreffende Zweig wird ausgeführt. Alle weiteren werden übersprungen – deshalb ist die Reihenfolge der Bedingungen wichtig." },
    { id: "q-ks-7", topic: "kontrollstrukturen", type: "multi", exam: ["AP1"],
      q: "Welche Jahre sind nach der Regel <code>(j % 4 == 0 and j % 100 != 0) or j % 400 == 0</code> Schaltjahre?",
      options: ["2000", "1900", "2024", "2026", "2400"],
      answer: [0, 2, 4],
      explain: "2024 ist durch 4, aber nicht durch 100 teilbar → Schaltjahr. 2000 und 2400 sind durch 400 teilbar → Schaltjahr. 1900 ist durch 100, aber nicht durch 400 teilbar → kein Schaltjahr. 2026 ist nicht durch 4 teilbar." },
    { id: "q-ks-8", topic: "kontrollstrukturen", type: "single", exam: ["AP1"],
      q: `Welche Ausgabe erzeugt der Code?<pre><code>a = 3
b = 7
if a &gt; b:
    print("A")
elif b % a == 1:
    print("B")
else:
    print("C")</code></pre>`,
      options: ["B", "A", "C", "keine Ausgabe"],
      answer: 0,
      explain: "3 &gt; 7 ist falsch. 7 % 3 = 1 (7 = 2 × 3 + 1), die elif-Bedingung ist also wahr und es wird B ausgegeben. Der else-Zweig wird danach nicht mehr geprüft." },
    { id: "q-fm-1", topic: "funktionen-module", type: "single", exam: ["AP1"],
      q: "Was gibt eine Python-Funktion zurück, die keine <code>return</code>-Anweisung enthält?",
      options: ["None", "0", "einen leeren String", "den Wert der zuletzt berechneten Variable"],
      answer: 0,
      explain: "Ohne return liefert jede Funktion automatisch None („kein Wert“). Werte, die nur mit print() ausgegeben werden, stehen dem Aufrufer nicht zur Verfügung." },
    { id: "q-fm-2", topic: "funktionen-module", type: "input", exam: ["AP1"],
      q: `Welche Ausgabe erzeugt der Code?<pre><code>def f(x, y=3):
    return x * y

print(f(4) + f(2, 5))</code></pre>`,
      answer: ["22"],
      explain: "f(4) nutzt den Standardwert y = 3 → 12. f(2, 5) überschreibt ihn → 10. Summe: 12 + 10 = 22." },
    { id: "q-fm-3", topic: "funktionen-module", type: "single", exam: ["AP2"],
      q: "Welche Werte kann <code>random.randint(1, 6)</code> liefern?",
      options: ["die ganzen Zahlen von 1 bis einschließlich 6", "die ganzen Zahlen 1 bis 5", "die ganzen Zahlen 0 bis 6", "beliebige Gleitkommazahlen zwischen 1 und 6"],
      answer: 0,
      explain: "randint(a, b) liefert eine ganze Zahl mit a ≤ N ≤ b – anders als range(), bei dem die Obergrenze nicht dazugehört. Gleitkommazahlen liefert random.random() bzw. random.uniform()." },
    { id: "q-fm-4", topic: "funktionen-module", type: "tf", exam: ["AP1"],
      q: "Eine Variable, der innerhalb einer Funktion ein Wert zugewiesen wird, ist ohne weitere Angabe lokal und nach dem Funktionsaufruf nicht mehr verfügbar.",
      answer: true,
      explain: "Richtig. Solche Variablen existieren nur während des Aufrufs. Soll ein Wert außerhalb genutzt werden, gibt die Funktion ihn mit return zurück. Mit global ließe sich eine globale Variable ändern, das gilt aber als schlechter Stil." },
    { id: "q-fm-5", topic: "funktionen-module", type: "single", exam: ["AP2"],
      q: "Welche Anweisung erlaubt anschließend den Aufruf <code>sqrt(16)</code> ohne vorangestellten Modulnamen?",
      options: ["from math import sqrt", "import math", "import sqrt from math", "include math.sqrt"],
      answer: 0,
      explain: "from math import sqrt übernimmt den Namen sqrt direkt. Nach import math müsste man math.sqrt(16) schreiben. „import sqrt from math“ und „include“ sind keine gültige Python-Syntax." },
    { id: "q-fm-6", topic: "funktionen-module", type: "multi", exam: ["AP1"],
      q: "Welche Aussagen zu Parametern und Rückgabewerten treffen zu?",
      options: ["Default-Parameter stehen hinter den Pflichtparametern.", "Argumente können beim Aufruf auch über den Parameternamen übergeben werden.", "Eine Funktion darf höchstens einen Parameter haben.", "Mit return lassen sich mehrere Werte als Tupel zurückgeben."],
      answer: [0, 1, 3],
      explain: "Parameter mit Standardwert müssen nach den Pflichtparametern stehen; Schlüsselwortargumente wie f(mwst=7, netto=50) sind erlaubt; return a, b liefert ein Tupel. Die Zahl der Parameter ist nicht auf einen begrenzt." },
    { id: "q-fm-7", topic: "funktionen-module", type: "single", exam: ["AP2"],
      q: "Mit welchem Modul der Standardbibliothek berechnest du am einfachsten die Anzahl der Tage zwischen zwei Datumsangaben?",
      options: ["datetime", "random", "math", "sys"],
      answer: 0,
      explain: "datetime stellt date-Objekte bereit; die Differenz zweier Daten ist ein timedelta-Objekt, dessen Attribut .days die Tage liefert. random erzeugt Zufallszahlen, math bietet mathematische Funktionen, sys Informationen über den Interpreter." },
    { id: "q-ko-1", topic: "kollektionen", type: "single", exam: ["AP1"],
      q: "Welche Kollektion ist unveränderlich (immutable)?",
      options: ["tuple", "list", "dict", "set"],
      answer: 0,
      explain: "Ein Tupel kann nach dem Erzeugen nicht mehr verändert werden – eine Zuweisung wie t[0] = 1 löst einen TypeError aus. Listen, Dictionaries und Mengen lassen sich dagegen ändern." },
    { id: "q-ko-2", topic: "kollektionen", type: "input", exam: ["AP1"],
      q: "Was gibt <code>print([10, 20, 30, 40, 50][1:3])</code> aus?",
      answer: ["[20, 30]", "20, 30"],
      explain: "Slicing [1:3] beginnt bei Index 1 (Wert 20) und endet vor Index 3 – also die Elemente mit Index 1 und 2: [20, 30]." },
    { id: "q-ko-3", topic: "kollektionen", type: "single", exam: ["AP2"],
      q: "Welchen Wert hat <code>x</code> nach der Anweisung <code>x = [3, 1, 2].sort()</code>?",
      options: ["None", "[1, 2, 3]", "[3, 1, 2]", "3"],
      answer: 0,
      explain: "sort() sortiert die Liste an Ort und Stelle und gibt None zurück. Die sortierte Liste als Rückgabewert liefert sorted([3, 1, 2]) → [1, 2, 3]." },
    { id: "q-ko-4", topic: "kollektionen", type: "multi", exam: ["AP1"],
      q: "Welche Aussagen über Dictionaries treffen zu?",
      options: ["Jeder Schlüssel kommt höchstens einmal vor.", "Mit get() lässt sich ein Standardwert angeben, falls der Schlüssel fehlt.", "Auf einen Wert greift man über seinen Schlüssel zu.", "Der Zugriff auf einen fehlenden Schlüssel mit eckigen Klammern liefert None."],
      answer: [0, 1, 2],
      explain: "Schlüssel sind eindeutig, der Zugriff erfolgt über den Schlüssel, und get(schluessel, standard) verhindert Fehler. Ein Zugriff wie lager['Monitor'] auf einen fehlenden Schlüssel löst dagegen einen KeyError aus – None liefert nur get() ohne Standardwert." },
    { id: "q-ko-5", topic: "kollektionen", type: "single", exam: ["AP1"],
      q: "Welche Datenstruktur arbeitet nach dem LIFO-Prinzip (last in, first out)?",
      options: ["Stack (Stapel)", "Queue (Warteschlange)", "Menge (set)", "Dictionary"],
      answer: 0,
      explain: "Beim Stack wird das zuletzt abgelegte Element zuerst entnommen (in Python: append() und pop()). Die Queue arbeitet nach FIFO – wer zuerst kommt, wird zuerst bedient." },
    { id: "q-ko-6", topic: "kollektionen", type: "tf", exam: ["AP1"],
      q: "Nach <code>a = [1, 2]</code>, <code>b = a</code> und <code>b.append(5)</code> enthält auch die Liste <code>a</code> das Element 5.",
      answer: true,
      explain: "Richtig. b = a kopiert die Liste nicht, sondern gibt derselben Liste einen zweiten Namen. Eine unabhängige Kopie erzeugt a.copy() oder a[:]." },
    { id: "q-ko-7", topic: "kollektionen", type: "input", exam: ["AP1"],
      q: "Wie viele Elemente hat <code>set([1, 2, 2, 3, 3, 3])</code>?",
      answer: ["3", "drei", "3 Elemente"],
      explain: "Eine Menge speichert jeden Wert nur einmal. Übrig bleiben {1, 2, 3} – also 3 Elemente." },
    { id: "q-df-1", topic: "dateien-formate", type: "single", exam: ["AP2"],
      q: "Mit welchem Modus von <code>open()</code> hängst du Daten an eine bestehende Datei an, ohne ihren Inhalt zu löschen?",
      options: ["<code>a</code>", "<code>w</code>", "<code>r</code>", "<code>x</code>"],
      answer: 0,
      explain: "„a“ (append) schreibt ans Dateiende. „w“ leert eine vorhandene Datei, „r“ öffnet nur zum Lesen, „x“ legt nur eine neue Datei an und scheitert, wenn sie schon existiert." },
    { id: "q-df-2", topic: "dateien-formate", type: "multi", exam: ["AP2"],
      q: "Welche Datentypen sind in JSON definiert?",
      options: ["string", "number", "boolean", "null", "date", "tuple"],
      answer: [0, 1, 2, 3],
      explain: "JSON kennt string, number, boolean (true/false), null sowie object und array. Einen eigenen Datumstyp gibt es nicht – Datumswerte werden als String gespeichert, z. B. \"2026-09-23\". Tupel sind ein Python-Typ und werden beim Speichern zu Arrays." },
    { id: "q-df-3", topic: "dateien-formate", type: "single", exam: ["AP2"],
      q: "Welches Format eignet sich am besten, um eine flache Tabelle mit möglichst wenig Overhead zwischen Tabellenkalkulation und Datenbank auszutauschen?",
      options: ["CSV", "XML", "JSON", "PDF"],
      answer: 0,
      explain: "CSV bildet Zeilen und Spalten mit einem Trennzeichen ab und hat fast keinen Overhead. XML und JSON können verschachtelte Strukturen darstellen, sind für eine flache Tabelle aber aufwendiger. PDF ist ein Ausgabeformat und für den Datenaustausch ungeeignet." },
    { id: "q-df-4", topic: "dateien-formate", type: "single", exam: ["AP2"],
      q: "Welches Merkmal gehört zu einem wohlgeformten XML-Dokument?",
      options: ["genau ein Wurzelelement und korrekt geschlossene, sauber verschachtelte Elemente", "Attributwerte stehen ohne Anführungszeichen", "Groß- und Kleinschreibung der Tags ist beliebig", "Es muss immer ein XSD-Schema eingebunden sein"],
      answer: 0,
      explain: "Wohlgeformt heißt: ein Wurzelelement, jedes Element geschlossen und korrekt verschachtelt, Attributwerte in Anführungszeichen, Groß-/Kleinschreibung beachtet. Ein Schema (XSD/DTD) braucht man erst für die Gültigkeit (Validität)." },
    { id: "q-df-5", topic: "dateien-formate", type: "tf", exam: ["AP2"],
      q: "Ein <code>with</code>-Block schließt die geöffnete Datei automatisch – auch dann, wenn im Block ein Fehler auftritt.",
      answer: true,
      explain: "Richtig. Der Kontextmanager ruft beim Verlassen des Blocks immer close() auf. So bleiben keine Dateien offen oder gesperrt." },
    { id: "q-df-6", topic: "dateien-formate", type: "single", exam: ["AP2"],
      q: "Welche Funktion wandelt einen JSON-<em>String</em> in ein Python-Dictionary um?",
      options: ["json.loads()", "json.dumps()", "json.dump()", "json.write()"],
      answer: 0,
      explain: "loads = „load string“: JSON-Text → Python-Objekt. dumps macht das Umgekehrte (Objekt → String), dump schreibt ein Objekt direkt in eine Datei. json.write() gibt es nicht." },
    { id: "q-df-7", topic: "dateien-formate", type: "single", exam: ["AP2"],
      q: "Wie werden Fotos, frei formulierte Beschwerdetexte von Kunden und eingescannte Lieferscheine eingeordnet?",
      options: ["unstrukturierte Daten", "strukturierte Daten", "semistrukturierte Daten", "Stammdaten"],
      answer: 0,
      explain: "Sie folgen keinem festen Schema, das man direkt auswerten könnte – also unstrukturiert. Strukturiert sind z. B. Datenbanktabellen und CSV, semistrukturiert JSON und XML. Stammdaten beschreiben die Art der Nutzung, nicht die Struktur." },
    { id: "q-ts-1", topic: "text-system-gui", type: "input", exam: ["AP2"],
      q: "Wie viele Treffer liefert <code>re.findall(r'\\d{3}', 'Raum 204, Etage 2, Tel. 12345')</code>?",
      answer: ["2", "zwei", "2 Treffer"],
      explain: "Gesucht werden je drei aufeinanderfolgende Ziffern, ohne Überlappung: „204“ und aus „12345“ nur „123“ (die restlichen zwei Ziffern „45“ reichen nicht). Die einzelne „2“ passt nicht. Ergebnis: ['204', '123'] – also 2 Treffer." },
    { id: "q-ts-2", topic: "text-system-gui", type: "single", exam: ["AP2"],
      q: "Welches Muster findet in einem Text genau fünfstellige Zahlen, die als eigenes Wort stehen (z. B. Postleitzahlen)?",
      options: ["<code>\\b\\d{5}\\b</code>", "<code>\\d+</code>", "<code>[0-9]*</code>", "<code>\\w{5}</code>"],
      answer: 0,
      explain: "\\d{5} verlangt genau fünf Ziffern, \\b sorgt für Wortgrenzen, damit nicht fünf Ziffern aus einer längeren Zahl herausgeschnitten werden. \\d+ findet Zahlen beliebiger Länge, [0-9]* passt sogar auf leere Stellen, \\w{5} würde auch Buchstaben akzeptieren." },
    { id: "q-ts-3", topic: "text-system-gui", type: "single", exam: ["AP2"],
      q: "Was liefert <code>'Server01;Heide;aktiv'.split(';')</code>?",
      options: ["['Server01', 'Heide', 'aktiv']", "'Server01 Heide aktiv'", "('Server01', 'Heide', 'aktiv')", "3"],
      answer: 0,
      explain: "split() zerlegt einen String am Trennzeichen und liefert eine Liste der Teile. Den umgekehrten Weg geht ';'.join(liste). Ein Tupel oder die Anzahl der Teile wird nicht zurückgegeben." },
    { id: "q-ts-4", topic: "text-system-gui", type: "multi", exam: ["AP2"],
      q: "Welche Module der Standardbibliothek dienen dem Zugriff auf Betriebssystem und Systemumgebung?",
      options: ["os", "sys", "subprocess", "random", "math"],
      answer: [0, 1, 2],
      explain: "os arbeitet mit Dateien, Verzeichnissen und Umgebungsvariablen, sys liefert z. B. Kommandozeilenargumente und Plattform, subprocess startet externe Programme wie ping. random und math sind reine Rechen- bzw. Zufallsmodule." },
    { id: "q-ts-5", topic: "text-system-gui", type: "multi", exam: ["AP1"],
      q: "Welche Maßnahmen verbessern die Barrierefreiheit einer Eingabemaske?",
      options: ["vollständige Bedienbarkeit per Tastatur", "ausreichender Kontrast und skalierbare Schrift", "Pflichtfelder ausschließlich durch rote Farbe kennzeichnen", "Beschriftungen, die ein Screenreader vorlesen kann", "Fehlermeldungen nur als Fehlercode anzeigen"],
      answer: [0, 1, 3],
      explain: "Tastaturbedienung, Kontrast/Schriftgröße und screenreadertaugliche Beschriftungen machen die Maske für mehr Menschen nutzbar. Information nur über Farbe schließt Menschen mit Farbsehschwäche aus, und reine Fehlercodes sind nicht selbstbeschreibend." },
    { id: "q-ts-6", topic: "text-system-gui", type: "tf", exam: [],
      q: "Ein tkinter-Programm ist ereignisgesteuert: <code>mainloop()</code> wartet auf Ereignisse wie Klicks und ruft dann die zugeordneten Funktionen auf.",
      answer: true,
      explain: "Richtig. Anders als ein Skript, das von oben nach unten durchläuft, reagiert eine GUI auf Ereignisse. Die Funktion, die bei einem Klick laufen soll, wird z. B. über command=berechnen an den Button gebunden (Callback)." },
    { id: "q-fd-1", topic: "fehler-debugging", type: "single", exam: ["AP1", "AP2"],
      q: "Ein Programm läuft ohne Fehlermeldung durch, berechnet den Durchschnitt aber falsch. Welche Fehlerart liegt vor?",
      options: ["logischer (inhaltlicher) Fehler", "Syntaxfehler", "Laufzeitfehler", "Fehler des Linkers"],
      answer: 0,
      explain: "Das Programm ist formal korrekt und stürzt nicht ab, liefert aber falsche Ergebnisse – typisch für einen logischen Fehler (z. B. falscher Startwert oder &lt; statt &lt;=). Ein Syntaxfehler verhindert den Start, ein Laufzeitfehler führt zum Abbruch." },
    { id: "q-fd-2", topic: "fehler-debugging", type: "single", exam: ["AP2"],
      q: "Welche Ausnahme löst <code>int('12a')</code> aus?",
      options: ["ValueError", "TypeError", "SyntaxError", "IndexError"],
      answer: 0,
      explain: "Der Typ (String) ist für int() grundsätzlich erlaubt, aber der Wert '12a' stellt keine ganze Zahl dar → ValueError. Ein TypeError entstünde bei unpassenden Typen, etwa '5' + 3." },
    { id: "q-fd-3", topic: "fehler-debugging", type: "multi", exam: ["AP2"],
      q: "Welche Aussagen zu <code>try</code>/<code>except</code>/<code>else</code>/<code>finally</code> treffen zu?",
      options: ["Der finally-Block wird in jedem Fall ausgeführt.", "Der else-Block läuft nur, wenn im try-Block keine Ausnahme aufgetreten ist.", "Ein except-Block kann gezielt einen bestimmten Fehlertyp abfangen.", "Ein Syntaxfehler lässt sich mit try/except in derselben Datei abfangen."],
      answer: [0, 1, 2],
      explain: "finally läuft immer, else nur ohne Fehler, except kann gezielt z. B. ValueError abfangen. Syntaxfehler werden dagegen schon beim Einlesen der Datei erkannt – das Programm startet gar nicht, der try-Block wird also nie erreicht." },
    { id: "q-fd-4", topic: "fehler-debugging", type: "single", exam: ["AP1", "AP2"],
      q: "Was ist ein Breakpoint?",
      options: ["eine markierte Stelle, an der der Debugger die Ausführung anhält, damit Variablen untersucht werden können", "ein Befehl, der das Programm sofort endgültig beendet", "eine Fehlermeldung des Interpreters bei einem Absturz", "ein Kommentar, den der Interpreter überspringt"],
      answer: 0,
      explain: "Am Haltepunkt stoppt das Programm im Debug-Modus. Dann kannst du Variablenwerte ansehen und mit Step Over/Step Into Zeile für Zeile weitergehen. So lässt sich die Stelle eines logischen Fehlers eingrenzen." },
    { id: "q-fd-5", topic: "fehler-debugging", type: "tf", exam: ["AP1"],
      q: "Ein fehlender Doppelpunkt nach <code>if x &gt; 5</code> ist ein Syntaxfehler – das Programm startet dann gar nicht erst.",
      answer: true,
      explain: "Richtig. Python prüft die Syntax der ganzen Datei vor der Ausführung und meldet einen SyntaxError. Laufzeitfehler treten dagegen erst auf, wenn die betroffene Zeile ausgeführt wird." },
    { id: "q-fd-6", topic: "fehler-debugging", type: "single", exam: ["AP1", "AP2"],
      q: "Mit welcher Debugger-Funktion springst du in eine aufgerufene Funktion hinein, um sie Zeile für Zeile zu verfolgen?",
      options: ["Step Into", "Step Over", "Continue", "Step Out"],
      answer: 0,
      explain: "Step Into folgt dem Aufruf in die Funktion hinein. Step Over führt die Zeile samt Funktionsaufruf als Ganzes aus, Step Out läuft bis zum Ende der aktuellen Funktion, Continue bis zum nächsten Breakpoint." },
    { id: "q-te-1", topic: "testen", type: "single", exam: ["AP2"],
      q: "Welches Testverfahren leitet Testfälle aus der Spezifikation ab, ohne den Quellcode zu betrachten?",
      options: ["Black-Box-Test", "White-Box-Test", "Zweigüberdeckungstest", "Code-Inspektion"],
      answer: 0,
      explain: "Beim Black-Box-Test ist das Programm eine „schwarze Kiste“: Man prüft Eingaben und erwartete Ausgaben laut Anforderungen. Zweigüberdeckung ist ein White-Box-Kriterium, die Code-Inspektion ein statisches Verfahren, das den Code gerade liest." },
    { id: "q-te-2", topic: "testen", type: "multi", exam: ["AP2"],
      q: "Ein Eingabefeld akzeptiert ganze Zahlen von 18 bis 67. Welche Werte gehören zu einer Grenzwertanalyse?",
      options: ["17", "18", "67", "68", "40"],
      answer: [0, 1, 2, 3],
      explain: "Getestet werden die Grenzen selbst (18, 67) und die direkt benachbarten ungültigen Werte (17, 68). 40 ist ein typischer Repräsentant der gültigen Äquivalenzklasse, aber kein Grenzwert." },
    { id: "q-te-3", topic: "testen", type: "single", exam: ["AP2"],
      q: "Welche Teststufe prüft das Zusammenspiel mehrerer Komponenten über ihre Schnittstellen?",
      options: ["Integrationstest", "Komponententest", "Abnahmetest", "Schreibtischtest"],
      answer: 0,
      explain: "Der Integrationstest prüft, ob bereits getestete Komponenten korrekt zusammenarbeiten. Der Komponententest prüft einzelne Bausteine, der Abnahmetest das Gesamtsystem aus Kundensicht; der Schreibtischtest ist ein manuelles, statisches Verfahren." },
    { id: "q-te-4", topic: "testen", type: "tf", exam: ["AP2"],
      q: "Ein Code-Review ist ein dynamisches Testverfahren, weil das Programm dabei ausgeführt wird.",
      answer: false,
      explain: "Falsch. Beim Review wird der Quellcode gelesen und besprochen, aber nicht ausgeführt – es ist ein statisches Verfahren. Dynamisch sind Tests, bei denen das Programm mit Testdaten läuft." },
    { id: "q-te-5", topic: "testen", type: "input", exam: ["AP2"],
      q: "Für den Code <code>if wert &gt;= 100: kosten = 0</code> (ohne else-Zweig) soll eine vollständige Zweigüberdeckung erreicht werden. Wie viele Testfälle sind mindestens nötig?",
      answer: ["2", "zwei", "2 Testfälle"],
      explain: "Für die Zweigüberdeckung müssen beide Ausgänge der Bedingung durchlaufen werden: einmal wahr (z. B. wert = 150) und einmal falsch (z. B. wert = 50). Für die reine Anweisungsüberdeckung hätte ein Testfall mit wert = 150 gereicht." },
    { id: "q-te-6", topic: "testen", type: "single", exam: ["AP1", "AP2"],
      q: "Wogegen wird beim Abnahmetest geprüft?",
      options: ["gegen die Anforderungen des Auftraggebers, z. B. aus dem Lastenheft", "gegen den Feinentwurf einzelner Funktionen", "gegen die Syntaxregeln der Programmiersprache", "gegen die Leistungsdaten von Konkurrenzprodukten"],
      answer: 0,
      explain: "Beim Abnahmetest prüft der Auftraggeber, ob das System seine Anforderungen erfüllt; das Ergebnis wird im Abnahmeprotokoll festgehalten. Der Feinentwurf ist Grundlage des Komponententests." },
    { id: "q-te-7", topic: "testen", type: "single", exam: ["AP2"],
      q: "Was versteht man unter einem Regressionstest?",
      options: ["die Wiederholung bereits bestandener Tests nach einer Änderung am Programm", "einen Test unter sehr hoher Last", "den ersten Test einer neuen Funktion durch den Kunden", "die Prüfung des Quellcodes ohne Ausführung"],
      answer: 0,
      explain: "Nach Fehlerbehebungen oder Erweiterungen prüft der Regressionstest, ob bisher funktionierende Teile weiterhin korrekt arbeiten. Automatisierte Unit-Tests machen solche Wiederholungen einfach. Hohe Last prüft der Lasttest, Code ohne Ausführung ein statischer Test." },
    { id: "q-al-1", topic: "algorithmen", type: "single", exam: ["AP1", "AP2"],
      q: "Welche Voraussetzung muss für die binäre Suche erfüllt sein?",
      options: ["Die Daten müssen sortiert vorliegen.", "Die Liste muss eine gerade Anzahl von Elementen haben.", "Die Werte müssen ganze Zahlen sein.", "Die Liste darf höchstens 1000 Elemente enthalten."],
      answer: 0,
      explain: "Die binäre Suche entscheidet anhand des mittleren Elements, ob links oder rechts weitergesucht wird – das funktioniert nur bei sortierten Daten. Anzahl und Datentyp spielen keine Rolle, solange sich die Werte vergleichen lassen." },
    { id: "q-al-2", topic: "algorithmen", type: "input", exam: ["AP1", "AP2"],
      q: "Wie viele Vergleiche führt die einfache Bubble-Sort-Variante (ohne vorzeitigen Abbruch) bei 6 Elementen durch?",
      answer: ["15", "15 Vergleiche"],
      explain: "Die Durchläufe vergleichen 5 + 4 + 3 + 2 + 1 Paare = 15. Allgemein: n × (n − 1) ÷ 2 = 6 × 5 ÷ 2 = 15." },
    { id: "q-al-3", topic: "algorithmen", type: "single", exam: ["AP1", "AP2"],
      q: "Welche Python-Schleife entspricht dem Pseudocode <code>FÜR i VON 1 BIS 10</code>?",
      options: ["<code>for i in range(1, 11):</code>", "<code>for i in range(1, 10):</code>", "<code>for i in range(10):</code>", "<code>for i in range(0, 10, 1):</code>"],
      answer: 0,
      explain: "Im Pseudocode ist die 10 eingeschlossen, bei range() gehört die Obergrenze nicht dazu – deshalb range(1, 11). range(1, 10) endet bei 9, range(10) und range(0, 10, 1) laufen von 0 bis 9." },
    { id: "q-al-4", topic: "algorithmen", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Eigenschaften muss ein Algorithmus besitzen?",
      options: ["Er endet nach endlich vielen Schritten.", "Jeder Schritt ist eindeutig und ausführbar.", "Er ist in einer bestimmten Programmiersprache geschrieben.", "Seine Beschreibung ist endlich.", "Er benötigt eine grafische Benutzeroberfläche."],
      answer: [0, 1, 3],
      explain: "Terminierung, Eindeutigkeit/Ausführbarkeit und Finitheit gehören zur Definition. Ein Algorithmus ist unabhängig von der Programmiersprache – er kann auch in Pseudocode oder als Aktivitätsdiagramm beschrieben werden – und braucht keine Oberfläche." },
    { id: "q-al-5", topic: "algorithmen", type: "single", exam: ["AP1", "AP2"],
      q: "Wie viele Vergleiche benötigt die binäre Suche höchstens, um in 1.000.000 sortierten Einträgen einen Wert zu finden oder sein Fehlen festzustellen?",
      options: ["20", "1.000", "500.000", "1.000.000"],
      answer: 0,
      explain: "Jeder Vergleich halbiert den Suchbereich: 2²⁰ = 1.048.576 ≥ 1.000.000, also genügen höchstens 20 Vergleiche. 1.000.000 Vergleiche bräuchte die lineare Suche im ungünstigsten Fall." },
    { id: "q-al-6", topic: "algorithmen", type: "tf", exam: ["AP1", "AP2"],
      q: "Die Pseudocode-Schleife <code>WIEDERHOLE … BIS bedingung</code> läuft so lange, wie die Bedingung wahr ist.",
      answer: false,
      explain: "Falsch. WIEDERHOLE … BIS ist fußgesteuert und läuft, bis die Bedingung wahr wird – es ist eine Abbruchbedingung. SOLANGE … dagegen läuft, solange die Bedingung wahr ist (Laufbedingung)." },
    { id: "q-al-7", topic: "algorithmen", type: "single", exam: ["AP1", "AP2"],
      q: "Das Array [4, 2, 5, 1] wird mit Bubble Sort aufsteigend sortiert. Wie sieht es nach dem ersten Durchlauf aus?",
      options: ["[2, 4, 1, 5]", "[1, 2, 4, 5]", "[2, 1, 4, 5]", "[4, 2, 1, 5]"],
      answer: 0,
      explain: "4/2 tauschen → [2, 4, 5, 1]; 4/5 bleibt; 5/1 tauschen → [2, 4, 1, 5]. Nach dem ersten Durchlauf steht nur das größte Element (5) sicher am Ende; vollständig sortiert ist das Array erst nach weiteren Durchläufen." },
    { id: "q-oo-1", topic: "oop", type: "single", exam: ["AP1"],
      q: "Was ist ein Objekt im Sinne der objektorientierten Programmierung?",
      options: ["ein konkretes Exemplar (Instanz) einer Klasse mit eigenen Attributwerten", "der Bauplan, der Attribute und Methoden festlegt", "eine Funktion, die außerhalb jeder Klasse steht", "ein anderes Wort für ein importiertes Modul"],
      answer: 0,
      explain: "Die Klasse ist der Bauplan, das Objekt das danach erzeugte Exemplar – z. B. ist nb = Geraet(\"INV-1001\", …) ein Objekt der Klasse Geraet mit eigener Inventarnummer." },
    { id: "q-oo-2", topic: "oop", type: "single", exam: ["AP1"],
      q: "Welche Methode wird in Python beim Erzeugen eines Objekts automatisch aufgerufen, um die Attribute zu setzen?",
      options: ["<code>__init__()</code>", "<code>__str__()</code>", "<code>start()</code>", "<code>main()</code>"],
      answer: 0,
      explain: "__init__() ist der Konstruktor (genauer: Initialisierer) und setzt die Startwerte der Attribute. __str__() liefert die Textdarstellung für print(); start() und main() haben in Python keine besondere Bedeutung." },
    { id: "q-oo-3", topic: "oop", type: "multi", exam: ["AP1"],
      q: "Welche Aussagen zur Kapselung treffen zu?",
      options: ["Attribute werden vor direktem Zugriff von außen geschützt.", "Der Zugriff erfolgt über Methoden wie Getter und Setter.", "Ein Setter kann ungültige Werte abweisen.", "Kapselung bedeutet, dass eine Klasse von einer anderen erbt."],
      answer: [0, 1, 2],
      explain: "Kapselung verbirgt die internen Daten und erlaubt Zugriffe nur über definierte Methoden, die Werte prüfen können. Das Erben von einer anderen Klasse ist Vererbung – ein eigenes OOP-Prinzip." },
    { id: "q-oo-4", topic: "oop", type: "single", exam: ["AP1"],
      q: "Welches Zeichen kennzeichnet im UML-Klassendiagramm die Sichtbarkeit <em>private</em>?",
      options: ["<code>-</code>", "<code>+</code>", "<code>#</code>", "<code>~</code>"],
      answer: 0,
      explain: "- steht für private (nur innerhalb der Klasse), + für public, # für protected (Klasse und Unterklassen), ~ für package. In Python entspricht private der Schreibweise mit zwei Unterstrichen, z. B. __preis." },
    { id: "q-oo-5", topic: "oop", type: "tf", exam: ["AP2"],
      q: "Eine abstrakte Klasse kann direkt instanziiert werden, solange sie mindestens eine konkrete Methode besitzt.",
      answer: false,
      explain: "Falsch. Eine Klasse mit mindestens einer abstrakten Methode kann nicht instanziiert werden (in Python: TypeError), egal wie viele konkrete Methoden sie zusätzlich hat. Erst eine Unterklasse, die alle abstrakten Methoden implementiert, lässt sich instanziieren." },
    { id: "q-oo-6", topic: "oop", type: "single", exam: ["AP2"],
      q: "Was versteht man unter Polymorphie?",
      options: ["Derselbe Methodenaufruf bewirkt je nach Klasse des Objekts unterschiedliches Verhalten.", "Eine Klasse besitzt mehrere private Attribute.", "Ein Objekt wird mehrfach im Speicher abgelegt.", "Eine Methode ruft sich selbst auf."],
      answer: 0,
      explain: "Beispiel: f.flaeche() berechnet bei einem Rechteck a × b und bei einem Kreis π × r². Der Aufrufer muss die konkrete Klasse nicht kennen. Eine Methode, die sich selbst aufruft, ist dagegen rekursiv." },
    { id: "q-oo-7", topic: "oop", type: "input", exam: ["AP1"],
      q: `Welche Ausgabe erzeugt der Code?<pre><code>class Zaehler:
    def __init__(self):
        self.wert = 0
    def plus(self, n=1):
        self.wert += n

z = Zaehler()
z.plus()
z.plus(5)
print(z.wert)</code></pre>`,
      answer: ["6"],
      explain: "Der Konstruktor setzt wert auf 0. plus() ohne Argument nutzt den Standardwert 1 → 1, plus(5) → 6." },
    { id: "q-oo-8", topic: "oop", type: "single", exam: ["AP2"],
      q: "Wann ist Vererbung zwischen zwei Klassen angebracht?",
      options: ["wenn eine „ist ein“-Beziehung besteht, z. B. ein Notebook ist ein Gerät", "wenn eine „hat ein“-Beziehung besteht, z. B. ein Auftrag hat Positionen", "immer dann, wenn zwei Klassen in derselben Datei stehen", "wenn eine Klasse nur eine Methode der anderen aufruft"],
      answer: 0,
      explain: "Vererbung bildet Spezialisierung ab: Die Unterklasse ist eine speziellere Form der Oberklasse. „Hat ein“-Beziehungen werden mit Assoziation, Aggregation oder Komposition modelliert; der bloße Aufruf einer Methode ist eine Benutzung." },
    { id: "q-um-1", topic: "uml", type: "single", exam: ["AP1", "AP2"],
      q: "Wie wird im UML-Klassendiagramm eine Komposition dargestellt?",
      options: ["Linie mit gefüllter Raute am Ganzen", "Linie mit leerer Raute am Ganzen", "Linie mit leerem Dreieck zur Oberklasse", "gestrichelte Linie mit offener Pfeilspitze"],
      answer: 0,
      explain: "Die gefüllte Raute steht für die Komposition: Das Teil ist existenzabhängig (Rechnungsposition gehört zur Rechnung). Die leere Raute ist die Aggregation, das leere Dreieck die Vererbung." },
    { id: "q-um-2", topic: "uml", type: "single", exam: ["AP1", "AP2"],
      q: "Was bedeutet die Multiplizität <code>1..*</code> an einem Ende einer Assoziation?",
      options: ["mindestens eins, nach oben unbegrenzt", "genau eins", "keins oder eins", "keins bis beliebig viele"],
      answer: 0,
      explain: "Die Zahl vor den Punkten ist die Untergrenze (1), der Stern steht für „beliebig viele“. Genau eins wäre 1, keins oder eins 0..1, keins bis beliebig viele * bzw. 0..*." },
    { id: "q-um-3", topic: "uml", type: "single", exam: ["AP1"],
      q: "Mit welchem Element des Aktivitätsdiagramms startest du mehrere Aktionen, die gleichzeitig ablaufen sollen?",
      options: ["Gabelung (Balken)", "Verzweigung (Raute)", "Endknoten", "Schwimmbahn"],
      answer: 0,
      explain: "Die Gabelung (Fork) teilt den Fluss in parallele Abläufe, die Synchronisation (Join, ebenfalls ein Balken) führt sie wieder zusammen. An einer Raute wird dagegen genau ein Weg abhängig von einer Bedingung gewählt." },
    { id: "q-um-4", topic: "uml", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Diagramme gehören zu den Verhaltensdiagrammen der UML?",
      options: ["Aktivitätsdiagramm", "Sequenzdiagramm", "Anwendungsfalldiagramm", "Klassendiagramm"],
      answer: [0, 1, 2],
      explain: "Aktivitäts-, Sequenz- und Anwendungsfalldiagramm beschreiben Abläufe bzw. Verhalten. Das Klassendiagramm ist ein Strukturdiagramm – es zeigt den statischen Aufbau aus Klassen und Beziehungen." },
    { id: "q-um-5", topic: "uml", type: "tf", exam: ["AP2"],
      q: "Im Sequenzdiagramm verläuft die Zeitachse von oben nach unten.",
      answer: true,
      explain: "Richtig. Die beteiligten Objekte stehen oben nebeneinander, ihre Lebenslinien verlaufen senkrecht nach unten; Nachrichten weiter unten finden später statt." },
    { id: "q-um-6", topic: "uml", type: "single", exam: ["AP1"],
      q: "Wie lautet die korrekte UML-Schreibweise für ein privates Attribut <em>preis</em> vom Typ Double?",
      options: ["<code>- preis : Double</code>", "<code>+ Double preis</code>", "<code>private preis = Double</code>", "<code># preis() : Double</code>"],
      answer: 0,
      explain: "Schema: Sichtbarkeit Name : Typ. Das Minuszeichen steht für private. „+ Double preis“ ist öffentlich und hat die Java-Reihenfolge, „# preis() : Double“ wäre eine geschützte Methode." },
    { id: "q-um-7", topic: "uml", type: "single", exam: ["AP2"],
      q: "Wie wird im Sequenzdiagramm eine synchrone Nachricht dargestellt?",
      options: ["durchgezogene Linie mit gefüllter Pfeilspitze", "gestrichelte Linie mit offener Pfeilspitze", "Raute auf der Lebenslinie", "Kreis mit X am Ende der Lebenslinie"],
      answer: 0,
      explain: "Bei der synchronen Nachricht wartet der Sender auf das Ende des Aufrufs – durchgezogene Linie, gefüllte Spitze. Die gestrichelte Linie mit offener Spitze ist die Antwort (Rückgabe), das X markiert die Zerstörung eines Objekts." },
    { id: "q-db-1", topic: "daten-codierung", type: "input", exam: ["AP1", "AP2"],
      q: "Wie viele Byte belegt das Eurozeichen „€“ in der Codierung UTF-8?",
      answer: ["3", "3 Byte", "3 Bytes", "drei"],
      explain: "UTF-8 nutzt 1 bis 4 Byte: ASCII-Zeichen 1 Byte, Umlaute und ß 2 Byte, das €-Zeichen (Unicode U+20AC) 3 Byte, die meisten Emojis 4 Byte." },
    { id: "q-db-2", topic: "daten-db", type: "single", exam: ["AP1"],
      q: "Wie wird eine n:m-Beziehung (z. B. Auftrag – Artikel) im Relationenmodell umgesetzt?",
      options: ["durch eine eigene Zwischentabelle mit den Fremdschlüsseln von Auftrag und Artikel", "durch einen einzelnen Fremdschlüssel in der Tabelle Auftrag", "durch Zusammenlegen der zwei Tabellen zu einer einzigen", "gar nicht, n:m-Beziehungen sind in relationalen Datenbanken verboten"],
      answer: 0,
      explain: "Die Zwischentabelle (z. B. Auftragsposition) enthält beide Fremdschlüssel, die zusammen ihren Primärschlüssel bilden, und nimmt Beziehungsattribute wie die Menge auf. Ein einzelner Fremdschlüssel reicht nur bei 1:n oder 1:1." },
    { id: "q-db-3", topic: "daten-db", type: "multi", exam: ["AP1"],
      q: "Welche Aussagen zu Schlüsseln in relationalen Datenbanken treffen zu?",
      options: ["Ein Primärschlüssel identifiziert jeden Datensatz einer Tabelle eindeutig.", "Ein Primärschlüssel darf nicht leer sein.", "Ein Fremdschlüssel verweist auf den Primärschlüssel einer anderen Tabelle.", "Ein Fremdschlüssel muss innerhalb seiner Tabelle eindeutig sein."],
      answer: [0, 1, 2],
      explain: "Primärschlüssel sind eindeutig und nie leer; Fremdschlüssel stellen die Verbindung zur anderen Tabelle her. Fremdschlüssel dürfen sich wiederholen: Viele Aufträge können dieselbe KundenNr enthalten – genau so entsteht die 1:n-Beziehung." },
    { id: "q-db-4", topic: "daten-codierung", type: "input", exam: ["AP1"],
      q: "Eine Datei ist 3.145.728 Byte groß. Wie viele MiB sind das?",
      answer: ["3", "3 MiB", "3,0", "3,0 MiB"],
      explain: "1 MiB = 1024 × 1024 Byte = 1.048.576 Byte. 3.145.728 ÷ 1.048.576 = 3 MiB. (In Dezimalpräfixen wären es rund 3,15 MB.)" },
    { id: "q-db-5", topic: "daten-codierung", type: "multi", exam: [],
      q: "Welche der folgenden Daten sind Bewegungsdaten?",
      options: ["Bestellungen", "Lagerbuchungen", "Kundenstammsatz mit Anschrift", "Artikelbezeichnung", "Messwerte eines Temperatursensors"],
      answer: [0, 1, 4],
      explain: "Bewegungsdaten entstehen laufend neu und beziehen sich auf Vorgänge oder Zeitpunkte (Bestellungen, Buchungen, Messwerte). Stammdaten wie Kundenanschrift oder Artikelbezeichnung ändern sich selten und werden immer wieder verwendet." },
    { id: "q-db-6", topic: "daten-db", type: "single", exam: ["AP1"],
      q: "Kunde und Auftrag stehen in einer 1:n-Beziehung. In welcher Tabelle wird der Fremdschlüssel angelegt?",
      options: ["in der Tabelle Auftrag", "in der Tabelle Kunde", "in einer zusätzlichen Zwischentabelle", "sowohl in Kunde als auch in Auftrag"],
      answer: 0,
      explain: "Der Fremdschlüssel kommt auf die n-Seite: Jeder Auftrag speichert die KundenNr seines Kunden. In der Kundentabelle bräuchte man sonst beliebig viele Spalten für Aufträge. Eine Zwischentabelle ist nur bei n:m nötig." },
    { id: "q-db-7", topic: "daten-codierung", type: "tf", exam: [],
      q: "„Temperatur im Serverraum: 21,5 °C“ ist eine Information, weil die Daten eine Bedeutung in einem Zusammenhang erhalten.",
      answer: true,
      explain: "Richtig. „21,5“ allein sind Daten. Erst mit Bedeutung und Kontext (Temperatur, Serverraum, Einheit) wird daraus Information. Wissen entsteht, wenn man sie mit Erfahrung verknüpft (ab 27 °C droht Überhitzung)." },
    { id: "q-db-8", topic: "daten-codierung", type: "input", exam: ["AP1"],
      q: "Wie viele verschiedene Werte lassen sich mit einem Byte darstellen?",
      answer: ["256", "256 Werte"],
      explain: "Ein Byte hat 8 Bit, jedes Bit zwei Zustände: 2⁸ = 256 Werte (0 bis 255, hexadezimal 00 bis FF)." },
    { id: "q-an-1", topic: "anforderungen", type: "single", exam: ["AP1"],
      q: "Wer erstellt das Pflichtenheft?",
      options: ["der Auftragnehmer", "der Auftraggeber", "die IHK", "ausschließlich die späteren Endanwender"],
      answer: 0,
      explain: "Der Auftragnehmer beschreibt im Pflichtenheft, wie und womit er die Anforderungen aus dem Lastenheft umsetzt. Das Lastenheft stammt vom Auftraggeber." },
    { id: "q-an-2", topic: "anforderungen", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Anforderungen sind nicht-funktional?",
      options: ["Die Suche liefert Ergebnisse in unter zwei Sekunden.", "Die Anwendung ist zu 99,5 % der Arbeitszeit verfügbar.", "Die Anwendung erzeugt einen Bericht aller Geräte mit abgelaufener Garantie.", "Die Anwendung importiert Gerätedaten aus CSV-Dateien.", "Die Oberfläche ist vollständig per Tastatur bedienbar."],
      answer: [0, 1, 4],
      explain: "Nicht-funktionale Anforderungen beschreiben Qualitätseigenschaften – hier Effizienz (Antwortzeit), Zuverlässigkeit (Verfügbarkeit) und Benutzbarkeit (Tastaturbedienung). Bericht erzeugen und CSV importieren sind Funktionen, also funktionale Anforderungen." },
    { id: "q-an-3", topic: "anforderungen", type: "single", exam: ["AP1"],
      q: "Welche Scrum-Rolle ist für die Pflege und Priorisierung des Product Backlogs verantwortlich?",
      options: ["Product Owner", "Scrum Master", "Developers", "Stakeholder"],
      answer: 0,
      explain: "Der Product Owner verantwortet den Wert des Produkts und damit Inhalt und Reihenfolge des Product Backlogs. Der Scrum Master unterstützt den Prozess, die Developers setzen die Einträge im Sprint um." },
    { id: "q-an-4", topic: "anforderungen", type: "single", exam: ["AP1"],
      q: "Was kennzeichnet eine «include»-Beziehung im Anwendungsfalldiagramm?",
      options: ["Der eingebundene Anwendungsfall wird immer mit ausgeführt.", "Der erweiternde Anwendungsfall wird nur unter einer Bedingung ausgeführt.", "Ein Akteur übernimmt alle Rechte eines anderen Akteurs.", "Der Anwendungsfall liegt außerhalb der Systemgrenze."],
      answer: 0,
      explain: "«include» bindet einen Anwendungsfall fest ein (z. B. „Anmelden“ bei „Ticket erstellen“). Die bedingte, optionale Erweiterung ist «extend». Die Übernahme von Eigenschaften zwischen Akteuren ist eine Generalisierung." },
    { id: "q-an-5", topic: "anforderungen", type: "multi", exam: ["AP1"],
      q: "Welche Aussagen treffen auf das Wasserfallmodell zu?",
      options: ["Die Phasen werden nacheinander durchlaufen.", "Jede Phase endet mit einem Ergebnisdokument.", "Späte Änderungen der Anforderungen lassen sich besonders günstig umsetzen.", "Der Kunde sieht das fertige Ergebnis erst gegen Ende des Projekts."],
      answer: [0, 1, 3],
      explain: "Das Wasserfallmodell ist sequenziell und dokumentgetrieben; der Kunde sieht das Produkt erst spät. Gerade deshalb sind späte Änderungen teuer – flexibel darauf reagieren können agile Verfahren wie Scrum." },
    { id: "q-an-6", topic: "anforderungen", type: "tf", exam: ["AP1"],
      q: "Das Lastenheft beschreibt, wie und womit die Anforderungen technisch umgesetzt werden.",
      answer: false,
      explain: "Falsch. Das Lastenheft des Auftraggebers beschreibt, was erreicht werden soll und wofür. Das Wie und Womit beschreibt der Auftragnehmer im Pflichtenheft." },
    { id: "q-an-7", topic: "anforderungen", type: "single", exam: [],
      q: "Welche Teststufe steht im V-Modell der Anforderungsdefinition gegenüber?",
      options: ["Abnahmetest", "Komponententest", "Integrationstest", "Code-Review"],
      answer: 0,
      explain: "Im V-Modell wird jede Entwurfsebene durch eine Teststufe geprüft: Anforderungen ↔ Abnahmetest, Systementwurf ↔ Systemtest, Architektur ↔ Integrationstest, Modulentwurf ↔ Komponententest." },
    { id: "q-dc-1", topic: "daten-codierung", type: "single", exam: ["AP1", "AP2"],
      q: "Welche Hexadezimalzahl entspricht der Dualzahl <code>1010 1111</code>?",
      options: ["AF", "FA", "175", "B7"],
      answer: 0,
      explain: "Jede Hex-Ziffer steht für 4 Bit: 1010 = A (10), 1111 = F (15) → AF. Dezimal ist das 10 × 16 + 15 = 175 – die 175 ist also der Dezimalwert, nicht die Hex-Darstellung. FA entstünde bei vertauschten Vierergruppen." },
    { id: "q-dc-2", topic: "daten-codierung", type: "tf", exam: ["AP2"],
      q: "Mit einem einzelnen Paritätsbit lassen sich auch zwei gleichzeitig gekippte Bits sicher erkennen.",
      answer: false,
      explain: "Falsch. Kippen zwei Bits, ändert sich die Anzahl der Einsen um 0 oder 2 – die Parität stimmt wieder, der Fehler bleibt unentdeckt. Ein Paritätsbit erkennt nur eine ungerade Anzahl von Bitfehlern; für mehr Sicherheit nutzt man Prüfsummen wie CRC." },
    { id: "q-dc-3", topic: "daten-codierung", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Aussagen zur Zeichencodierung UTF-8 treffen zu?",
      options: ["Ein Zeichen belegt 1 bis 4 Byte.", "ASCII-Zeichen werden mit genau 1 Byte gespeichert.", "Jedes Zeichen belegt immer genau 2 Byte.", "Umlaute wie „ä“ benötigen 2 Byte."],
      answer: [0, 1, 3],
      explain: "UTF-8 hat eine variable Länge: ASCII-Zeichen 1 Byte (daher ASCII-kompatibel), Umlaute 2 Byte, das €-Zeichen 3 Byte, die meisten Emojis 4 Byte. Eine feste Länge von 2 Byte gibt es in UTF-8 nicht." },
    { id: "q-db-9", topic: "daten-db", type: "single", exam: ["AP2"],
      q: "In einer Kundentabelle stehen in der Spalte „Telefon“ mehrere Nummern, durch Kommas getrennt. Gegen welche Normalform verstößt die Tabelle damit unmittelbar?",
      options: ["1. Normalform", "2. Normalform", "3. Normalform", "gegen keine, weil Kommas als Trennzeichen erlaubt sind"],
      answer: 0,
      explain: "Die 1. NF verlangt atomare Werte – eine Zelle darf nur einen Wert enthalten. Mehrere Telefonnummern gehören in eine eigene Tabelle (Kunde 1:n Telefonnummer). Die 2. und 3. NF setzen die 1. NF voraus – solange die 1. NF verletzt ist, sind sie also automatisch auch nicht erfüllt; der eigentliche Verstoß liegt aber bei der 1. NF." },
    { id: "q-db-10", topic: "daten-db", type: "single", exam: ["AP2"],
      q: "In der Tabelle Kunde(<strong>KundenNr</strong>, Name, PLZ, Ort) hängt der Ort von der PLZ ab. Welche Normalform ist verletzt?",
      options: ["3. Normalform", "1. Normalform", "2. Normalform", "keine – die Tabelle ist vollständig normalisiert"],
      answer: 0,
      explain: "Ort hängt über die PLZ nur transitiv vom Schlüssel KundenNr ab – das verletzt die 3. NF. Die Werte sind atomar (1. NF), und bei einem einfachen Primärschlüssel ist die 2. NF automatisch erfüllt. Lösung: eigene Tabelle Ort(PLZ, Ort)." },
    { id: "q-db-11", topic: "daten-db", type: "multi", exam: ["AP2"],
      q: "Welche Anomalien können in nicht normalisierten Tabellen auftreten?",
      options: ["Einfügeanomalie", "Änderungsanomalie", "Löschanomalie", "Sortieranomalie", "Übersetzungsanomalie"],
      answer: [0, 1, 2],
      explain: "Redundante Daten führen zu Einfüge-, Änderungs- und Löschanomalien: Daten lassen sich nicht unabhängig speichern, müssen mehrfach geändert werden oder gehen beim Löschen ungewollt verloren. Sortier- oder Übersetzungsanomalien gibt es als Fachbegriff nicht." },
    { id: "q-db-12", topic: "daten-db", type: "single", exam: ["AP2"],
      q: "Welcher Datentyp eignet sich in einer Datenbank am besten für Geldbeträge?",
      options: ["DECIMAL(10,2)", "DOUBLE", "VARCHAR(10)", "BOOLEAN"],
      answer: 0,
      explain: "DECIMAL speichert Festkommazahlen exakt – hier bis zu 10 Stellen, davon 2 Nachkommastellen. DOUBLE ist eine Gleitkommazahl mit Rundungsfehlern, VARCHAR speichert Text (Rechnen wäre umständlich), BOOLEAN nur wahr/falsch." },
    { id: "q-db-13", topic: "daten-db", type: "single", exam: ["AP2"],
      q: "Was bewirkt <code>ON DELETE CASCADE</code> bei einer Fremdschlüsselbeziehung?",
      options: ["Beim Löschen eines Datensatzes werden alle abhängigen Datensätze automatisch mitgelöscht.", "Das Löschen eines referenzierten Datensatzes wird immer verhindert.", "Der Fremdschlüssel wird beim Löschen auf 0 gesetzt.", "Die Tabelle wird nach jedem Löschvorgang neu sortiert."],
      answer: 0,
      explain: "Die Löschweitergabe hält die referenzielle Integrität ein, indem sie abhängige Datensätze (z. B. die Aufträge eines gelöschten Kunden) mitlöscht. Das Verhindern des Löschens entspricht RESTRICT bzw. NO ACTION; auf NULL setzen wäre SET NULL." },
    { id: "q-db-14", topic: "daten-db", type: "tf", exam: ["AP2"],
      q: "Eine UPDATE-Anweisung ohne WHERE-Klausel ändert alle Datensätze der Tabelle.",
      answer: true,
      explain: "Richtig. WHERE schränkt die betroffenen Zeilen ein; ohne WHERE gilt die Änderung für jede Zeile. Deshalb vor UPDATE und DELETE die Bedingung sorgfältig prüfen, am besten zuerst mit einem SELECT." },
    { id: "q-spr-8", topic: "sprachen", type: "single", exam: ["AP2"],
      q: "Welcher Git-Befehl speichert die vorgemerkten Änderungen als neuen Stand mit Beschreibung im lokalen Repository?",
      options: ["<code>git commit -m \"Beschreibung\"</code>", "<code>git push</code>", "<code>git init</code>", "<code>git switch main</code>"],
      answer: 0,
      explain: "commit legt einen neuen Versionsstand im lokalen Repository an. push überträgt vorhandene Commits erst ins entfernte Repository, init legt ein neues Repository an, switch wechselt den Branch." },
    { id: "q-an-8", topic: "anforderungen", type: "single", exam: ["AP2"],
      q: "Wozu dient ein Mock-up in der Softwareentwicklung?",
      options: ["Es zeigt als Entwurf, wie eine Bildschirmmaske aussehen soll, und hilft bei der Abstimmung mit dem Kunden.", "Es ist ein automatisierter Test für die Datenbank.", "Es ersetzt das Pflichtenheft.", "Es beschreibt die Hardwareausstattung des Servers."],
      answer: 0,
      explain: "Ein Mock-up ist ein früher, meist nicht funktionsfähiger Entwurf einer Oberfläche. Der Kunde sieht früh, wie die Anwendung aussehen wird, und Missverständnisse fallen auf, bevor programmiert wird." },
    { id: "q-web-1", topic: "web", type: "single", exam: ["AP1"],
      q: "Welche Aussage beschreibt eine dynamische Webseite zutreffend?",
      options: ["Ein Programm auf dem Server erzeugt den Inhalt bei jedem Aufruf, oft mit Daten aus einer Datenbank.", "Der Webserver liefert eine fertige HTML-Datei aus, die für alle Besucher gleich ist.", "Die Seite enthält Animationen, die mit CSS erzeugt werden.", "Die Seite kann ohne Webserver direkt vom USB-Stick geöffnet werden."],
      answer: 0,
      explain: "Dynamisch heißt: Der Inhalt entsteht pro Anfrage durch ein serverseitiges Programm (z. B. PHP, Python) – etwa die eigenen Bestellungen nach dem Login. Eine fertig ausgelieferte HTML-Datei ist statisch, auch wenn sie mit CSS oder JavaScript animiert ist." },
    { id: "q-web-2", topic: "web", type: "multi", exam: ["AP1"],
      q: "Welche Techniken werden typischerweise <strong>serverseitig</strong> eingesetzt, um Webseiten zu erzeugen?",
      options: ["PHP", "Python mit Flask oder Django", "CSS", "HTML"],
      answer: [0, 1],
      explain: "PHP und Python-Frameworks laufen auf dem Webserver und erzeugen dort die Seiten. HTML beschreibt Struktur und Inhalt, CSS die Gestaltung – beides wertet der Browser aus; es sind keine Programmiersprachen." },
    { id: "q-web-3", topic: "web", type: "tf", exam: ["AP1"],
      q: "Eine statische Webseite benötigt zwingend eine Datenbank.",
      answer: false,
      explain: "Falsch. Statische Seiten bestehen aus fertigen Dateien (HTML, CSS, Bilder), die ein einfacher Webserver ausliefert. Eine Datenbank braucht man erst, wenn Inhalte pro Anfrage aus gespeicherten Daten erzeugt werden – also bei dynamischen Seiten." },
    { id: "q-web-4", topic: "web", type: "single", exam: ["AP2"],
      q: "Ein Skript ruft eine API ab und erhält den HTTP-Statuscode 404. Was bedeutet das?",
      options: ["Die angefragte Ressource wurde nicht gefunden.", "Die Anfrage war erfolgreich.", "Auf dem Server ist ein interner Fehler aufgetreten.", "Die Anfrage wurde dauerhaft auf eine andere Adresse umgeleitet."],
      answer: 0,
      explain: "404 = Not Found, z. B. wegen eines Tippfehlers in der Adresse. Erfolgreich wäre 200, ein Serverfehler 500, eine dauerhafte Weiterleitung 301." },
    { id: "q-web-5", topic: "web", type: "single", exam: [],
      q: "Was liefert <code>requests.get(url).json()</code>, wenn die API ein JSON-Objekt zurückgibt?",
      options: ["ein Python-Dictionary", "einen String mit dem JSON-Text", "eine CSV-Datei", "den HTTP-Statuscode"],
      answer: 0,
      explain: "json() wandelt den JSON-Text der Antwort in Python-Objekte um: Ein JSON-Objekt wird zum dict, ein Array zur list. Den reinen Text liefert antwort.text, den Statuscode antwort.status_code." },
    { id: "q-spr-9", topic: "sprachen", type: "multi", exam: ["AP1"],
      q: "Welche Risiken bestehen beim Einsatz eines KI-Assistenten, der Programmcode vorschlägt?",
      options: ["Der vorgeschlagene Code kann fehlerhaft oder unsicher sein.", "Eingegebener Quellcode oder Kundendaten können beim Anbieter gespeichert werden.", "Es können veraltete oder nicht existierende Funktionen vorgeschlagen werden.", "KI-generierter Code muss nicht mehr getestet werden, weil die KI ihn automatisch prüft."],
      answer: [0, 1, 2],
      explain: "KI-Code wirkt oft plausibel, kann aber logische Fehler, Sicherheitslücken oder erfundene Funktionen enthalten; Eingaben landen beim Anbieter (Datenschutz). Deshalb muss KI-Code genauso gelesen, getestet und reviewt werden wie jeder andere Code." },
    { id: "q-spr-10", topic: "sprachen", type: "single", exam: ["AP1", "AP2"],
      q: "Welche Skriptsprache liegt nahe, wenn dasselbe Automatisierungsskript ohne Anpassung auf Windows- und Linux-Servern laufen soll und viele Bibliotheken (CSV, JSON, Web) gebraucht werden?",
      options: ["Python", "Windows-Batch (.bat)", "HTML", "Assembler"],
      answer: 0,
      explain: "Python läuft plattformübergreifend und bringt umfangreiche Bibliotheken mit. Batch-Dateien laufen nur unter Windows, HTML ist eine Auszeichnungssprache und Assembler ist maschinennah und prozessorabhängig." },
    { id: "q-py-10", topic: "python-basics", type: "single", exam: ["AP1"],
      q: "Welcher Datentyp eignet sich für eine Postleitzahl wie 01067 am besten?",
      options: ["String (Zeichenkette)", "Integer (Ganzzahl)", "Float (Gleitkommazahl)", "Boolean (Wahrheitswert)"],
      answer: 0,
      explain: "Mit Postleitzahlen wird nicht gerechnet, und als Zahl ginge die führende Null verloren (01067 → 1067). Deshalb speichert man sie – wie Telefon- und Artikelnummern – als String." },
    { id: "q-py-11", topic: "python-basics", type: "single", exam: ["AP1"],
      q: "Welcher Datentyp speichert in Java oder im Pseudocode genau <em>ein</em> Zeichen?",
      options: ["char", "String", "boolean", "double"],
      answer: 0,
      explain: "char steht für ein einzelnes Zeichen, String für eine Zeichenkette beliebiger Länge. Python kennt keinen eigenen char-Typ – dort ist ein einzelnes Zeichen ein str der Länge 1." },
    { id: "q-al-8", topic: "algorithmen", type: "input", exam: ["AP1", "AP2"],
      q: `Welchen Wert hat <code>anzahl</code> nach dem Durchlauf?<pre><code>anzahl ← 0
FÜR i VON 1 BIS 20
    WENN i MOD 3 = 0 UND i MOD 2 ≠ 0 DANN
        anzahl ← anzahl + 1
    ENDE WENN
ENDE FÜR</code></pre>`,
      answer: ["3", "drei"],
      explain: "Durch 3 teilbar sind 3, 6, 9, 12, 15 und 18. Davon ungerade (Rest bei Division durch 2 ungleich 0) sind nur 3, 9 und 15 – also 3 Treffer." },
    { id: "q-al-9", topic: "algorithmen", type: "single", exam: ["AP1", "AP2"],
      q: "Ein Algorithmus soll die niedrigste Temperatur eines Wintermonats ermitteln (Werte zwischen −12 und +6 °C). Womit wird die Variable <code>minimum</code> sinnvoll initialisiert?",
      options: ["mit dem ersten Element des Arrays", "mit 0", "mit −12", "mit der Länge des Arrays"],
      answer: 0,
      explain: "Der erste Messwert ist sicher ein echter Kandidat. Mit 0 würde der Algorithmus falsch arbeiten, falls alle Werte positiv sind (Ergebnis 0 statt z. B. 1). −12 setzt voraus, dass man das Ergebnis schon kennt, und die Länge hat mit den Messwerten nichts zu tun." },
    { id: "q-um-8", topic: "uml", type: "single", exam: ["AP2"],
      q: "Was stellt ein UML-Zustandsdiagramm dar?",
      options: ["die Zustände eines Objekts und die Ereignisse, die Übergänge zwischen ihnen auslösen", "die zeitliche Reihenfolge von Nachrichten zwischen mehreren Objekten", "die Klassen eines Systems mit Attributen und Beziehungen", "die Funktionen eines Systems aus Sicht der Akteure"],
      answer: 0,
      explain: "Das Zustandsdiagramm beschreibt den Lebenszyklus eines Objekts (z. B. Ticket: offen → in Bearbeitung → geschlossen). Nachrichten zwischen Objekten zeigt das Sequenzdiagramm, Klassen das Klassendiagramm, Funktionen aus Akteurssicht das Anwendungsfalldiagramm." },
    { id: "q-um-9", topic: "uml", type: "single", exam: ["AP2"],
      q: "Wie wird ein Übergang (Transition) im Zustandsdiagramm beschriftet?",
      options: ["<code>Ereignis [Bedingung] / Aktion</code>", "<code>Sichtbarkeit Name : Typ</code>", "<code>«include»</code>", "<code>1..*</code>"],
      answer: 0,
      explain: "Das Ereignis löst den Übergang aus, die Bedingung in eckigen Klammern (Guard) muss erfüllt sein, die Aktion nach dem Schrägstrich wird dabei ausgeführt. „Sichtbarkeit Name : Typ“ ist die Schreibweise für Attribute im Klassendiagramm, «include» gehört zum Anwendungsfalldiagramm, 1..* ist eine Multiplizität." },
    { id: "q-an-9", topic: "anforderungen", type: "single", exam: ["AP1"],
      q: "„Foto hochladen“ erweitert den Anwendungsfall „Gerät erfassen“ optional per «extend». Wohin zeigt der gestrichelte Pfeil?",
      options: ["vom erweiternden Fall „Foto hochladen“ zum Basisfall „Gerät erfassen“", "vom Basisfall „Gerät erfassen“ zum erweiternden Fall „Foto hochladen“", "vom Akteur zum erweiternden Fall", "Bei «extend» wird eine durchgezogene Linie ohne Pfeil verwendet."],
      answer: 0,
      explain: "Bei «extend» zeigt der Pfeil vom erweiternden Fall zum Basisfall (dort kann ein Erweiterungspunkt stehen). Bei «include» ist es umgekehrt: vom Basisfall zum eingebundenen Fall." },
    { id: "q-an-10", topic: "anforderungen", type: "single", exam: ["AP2"],
      q: "Welchem Qualitätsmerkmal ordnest du die Anforderung „Das Skript läuft ohne Änderungen unter Windows und Linux“ zu?",
      options: ["Übertragbarkeit (Portabilität)", "Effizienz", "Zuverlässigkeit", "Funktionalität"],
      answer: 0,
      explain: "Übertragbarkeit beschreibt, wie leicht sich Software in einer anderen Umgebung betreiben lässt. Effizienz betrifft Zeit- und Ressourcenverbrauch, Zuverlässigkeit die Stabilität, Funktionalität, ob die geforderten Funktionen korrekt erfüllt werden." },
    { id: "q-te-8", topic: "testen", type: "single", exam: ["AP2"],
      q: "Womit beginnt ein Arbeitszyklus bei der testgetriebenen Entwicklung (TDD)?",
      options: ["mit einem Test, der zunächst fehlschlägt", "mit dem vollständigen Programmcode", "mit dem Abnahmetest durch den Kunden", "mit dem Refactoring des bestehenden Codes"],
      answer: 0,
      explain: "TDD folgt Red → Green → Refactor: Erst wird ein Test geschrieben, der fehlschlägt (rot), dann nur so viel Code, bis er besteht (grün), danach wird der Code aufgeräumt. Der Abnahmetest gehört zu den Teststufen, nicht zum TDD-Zyklus." },
    { id: "q-oo-9", topic: "oop", type: "single", exam: [],
      q: "Welchen Operator überlädt die magische Methode <code>__add__</code>?",
      options: ["<code>+</code>", "<code>==</code>", "<code>&lt;</code>", "<code>*</code>"],
      answer: 0,
      explain: "__add__ wird bei a + b aufgerufen. Für == ist __eq__ zuständig, für &lt; __lt__ und für * __mul__. So legst du fest, wie sich eigene Objekte bei Operatoren verhalten (Polymorphie)." },
  ],
  cards: [
    { topic: "sprachen", f: "Compiler", b: "Übersetzt den gesamten Quellcode vor der Ausführung in Maschinencode; Ergebnis ist eine ausführbare Datei." },
    { topic: "sprachen", f: "Interpreter", b: "Führt den Quellcode zur Laufzeit Anweisung für Anweisung aus; es entsteht keine eigene Programmdatei." },
    { topic: "sprachen", f: "Linker", b: "Verbindet Objektdateien und Bibliotheken zu einem ausführbaren Programm." },
    { topic: "sprachen", f: "Bytecode", b: "Plattformunabhängiger Zwischencode (Java, C#, Python), den eine virtuelle Maschine ausführt." },
    { topic: "sprachen", f: "Bibliothek vs. Framework", b: "Bibliothek: dein Code ruft sie auf.<br>Framework: gibt den Ablauf vor und ruft deinen Code auf." },
    { topic: "sprachen", f: "IDE", b: "Integrierte Entwicklungsumgebung: Editor, Debugger, Ausführen/Build und Versionsverwaltung in einem Werkzeug (z. B. VS Code, PyCharm)." },
    { topic: "python-basics", f: "Die vier Grunddatentypen in Python", b: "<code>int</code>, <code>float</code>, <code>str</code>, <code>bool</code>" },
    { topic: "python-basics", f: "<code>17 // 5</code> und <code>17 % 5</code>", b: "3 (ganzzahlige Division) und 2 (Rest)" },
    { topic: "python-basics", f: "Rückgabetyp von <code>input()</code>", b: "Immer <code>str</code> – vor dem Rechnen mit <code>int()</code> oder <code>float()</code> umwandeln." },
    { topic: "python-basics", f: "<code>int(3.9)</code>", b: "3 – die Nachkommastellen werden abgeschnitten, nicht gerundet." },
    { topic: "python-basics", f: "f-String mit zwei Nachkommastellen", b: "<code>f\"{wert:.2f}\"</code> – z. B. 598.8 → 598.80" },
    { topic: "kontrollstrukturen", f: "Die drei Grundstrukturen von Algorithmen", b: "Sequenz, Verzweigung (Auswahl), Wiederholung (Schleife)" },
    { topic: "kontrollstrukturen", f: "<code>range(1, 6)</code>", b: "1, 2, 3, 4, 5 – die Obergrenze gehört nicht dazu." },
    { topic: "kontrollstrukturen", f: "<code>break</code> vs. <code>continue</code>", b: "break beendet die Schleife, continue springt zum nächsten Durchlauf." },
    { topic: "kontrollstrukturen", f: "kopf- vs. fußgesteuerte Schleife", b: "Kopfgesteuert: Prüfung vor dem Durchlauf (evtl. 0 Durchläufe).<br>Fußgesteuert: Prüfung danach (mindestens 1 Durchlauf)." },
    { topic: "kontrollstrukturen", f: "Schreibtischtest", b: "Programm von Hand ausführen und alle Variablenwerte Schritt für Schritt in einer Trace-Tabelle notieren." },
    { topic: "funktionen-module", f: "Parameter vs. Argument", b: "Parameter: Platzhalter in der Funktionsdefinition.<br>Argument: konkreter Wert beim Aufruf." },
    { topic: "funktionen-module", f: "Rückgabewert einer Funktion ohne <code>return</code>", b: "<code>None</code>" },
    { topic: "funktionen-module", f: "lokale Variable", b: "Wird in einer Funktion zugewiesen und existiert nur während des Funktionsaufrufs." },
    { topic: "funktionen-module", f: "<code>random.randint(1, 6)</code>", b: "Zufällige ganze Zahl von 1 bis einschließlich 6." },
    { topic: "kollektionen", f: "list vs. tuple", b: "list <code>[ ]</code>: veränderbar.<br>tuple <code>( )</code>: unveränderbar." },
    { topic: "kollektionen", f: "dict", b: "Schlüssel-Wert-Paare; Schlüssel eindeutig; Zugriff über den Schlüssel, sicher mit <code>get()</code>." },
    { topic: "kollektionen", f: "set", b: "Ungeordnete Menge ohne Duplikate; Operationen <code>|</code> (Vereinigung), <code>&amp;</code> (Schnitt), <code>-</code> (Differenz)." },
    { topic: "kollektionen", f: "Stack und Queue", b: "Stack: LIFO (<code>append</code>/<code>pop</code>).<br>Queue: FIFO (<code>deque.append</code>/<code>popleft</code>)." },
    { topic: "kollektionen", f: "<code>sort()</code> vs. <code>sorted()</code>", b: "sort() sortiert die Liste selbst und liefert None; sorted() liefert eine neue sortierte Liste." },
    { topic: "dateien-formate", f: "Dateimodi <code>r</code>, <code>w</code>, <code>a</code>", b: "lesen · schreiben (vorhandener Inhalt wird gelöscht) · anhängen" },
    { topic: "dateien-formate", f: "Vorteil von <code>with open(…)</code>", b: "Die Datei wird automatisch geschlossen – auch wenn ein Fehler auftritt." },
    { topic: "dateien-formate", f: "Datentypen in JSON", b: "string, number, boolean, null, object, array" },
    { topic: "dateien-formate", f: "wohlgeformtes XML", b: "Ein Wurzelelement, alle Elemente geschlossen und korrekt verschachtelt, Attributwerte in Anführungszeichen." },
    { topic: "dateien-formate", f: "strukturiert / semistrukturiert / unstrukturiert", b: "Datenbanktabelle, CSV · JSON, XML · Freitext, Bilder, Videos" },
    { topic: "text-system-gui", f: "Regex: <code>\\d</code>, <code>\\w</code>, <code>\\s</code>", b: "Ziffer · Wortzeichen (Buchstabe, Ziffer, _) · Leerraum" },
    { topic: "text-system-gui", f: "<code>re.findall(muster, text)</code>", b: "Liefert eine Liste aller Treffer des Musters im Text." },
    { topic: "text-system-gui", f: "Modul <code>subprocess</code>", b: "Startet externe Programme (z. B. ping) und liefert Rückgabecode und Ausgabe." },
    { topic: "text-system-gui", f: "DIN EN ISO 9241-110", b: "Norm mit sieben Interaktionsprinzipien für ergonomische Dialoge, z. B. Aufgabenangemessenheit, Erwartungskonformität, Steuerbarkeit." },
    { topic: "fehler-debugging", f: "Syntaxfehler", b: "Verstoß gegen die Regeln der Sprache (z. B. fehlender Doppelpunkt) – das Programm startet nicht." },
    { topic: "fehler-debugging", f: "Laufzeitfehler", b: "Tritt während der Ausführung auf (Exception), z. B. <code>ZeroDivisionError</code>, <code>IndexError</code>." },
    { topic: "fehler-debugging", f: "logischer Fehler", b: "Das Programm läuft ohne Fehlermeldung, liefert aber falsche Ergebnisse." },
    { topic: "fehler-debugging", f: "<code>finally</code>-Block", b: "Wird nach try/except in jedem Fall ausgeführt – ideal zum Aufräumen." },
    { topic: "fehler-debugging", f: "Breakpoint", b: "Haltepunkt, an dem der Debugger die Ausführung stoppt, damit du Variablen untersuchen kannst." },
    { topic: "testen", f: "Black-Box-Test", b: "Testfälle aus der Spezifikation, ohne Kenntnis des Quellcodes (Äquivalenzklassen, Grenzwerte)." },
    { topic: "testen", f: "White-Box-Test", b: "Testfälle aus dem Quellcode; Ziel z. B. Anweisungs- oder Zweigüberdeckung." },
    { topic: "testen", f: "Äquivalenzklasse", b: "Menge von Eingaben, bei denen sich das Programm gleich verhalten soll – ein Repräsentant genügt." },
    { topic: "testen", f: "Grenzwertanalyse", b: "Testwerte direkt auf und neben den Klassengrenzen, z. B. 17, 18, 67, 68 bei 18–67." },
    { topic: "testen", f: "Teststufen (aufsteigend)", b: "Komponententest → Integrationstest → Systemtest → Abnahmetest" },
    { topic: "algorithmen", f: "Voraussetzung der binären Suche", b: "Die Daten müssen sortiert sein." },
    { topic: "algorithmen", f: "Vergleiche bei Bubble Sort", b: "n × (n − 1) ÷ 2 – Aufwand O(n²)" },
    { topic: "algorithmen", f: "<code>FÜR i VON 1 BIS n</code> in Python", b: "<code>for i in range(1, n + 1):</code>" },
    { topic: "algorithmen", f: "<code>SOLANGE</code> vs. <code>WIEDERHOLE … BIS</code>", b: "SOLANGE: läuft, solange die Bedingung wahr ist (kopfgesteuert).<br>WIEDERHOLE … BIS: läuft, bis sie wahr wird (fußgesteuert)." },
    { topic: "oop", f: "Klasse vs. Objekt", b: "Klasse = Bauplan.<br>Objekt = konkretes Exemplar (Instanz) mit eigenen Attributwerten." },
    { topic: "oop", f: "Kapselung", b: "Attribute verbergen und nur über Methoden (Getter/Setter) zugänglich machen." },
    { topic: "oop", f: "Polymorphie", b: "Gleicher Methodenaufruf, unterschiedliches Verhalten je nach Klasse des Objekts." },
    { topic: "oop", f: "abstrakte Klasse", b: "Nicht instanziierbar; schreibt Unterklassen vor, welche Methoden sie implementieren müssen." },
    { topic: "oop", f: "<code>self</code>", b: "Verweis auf das aktuelle Objekt; erster Parameter jeder Methode." },
    { topic: "uml", f: "UML-Sichtbarkeiten", b: "<code>+</code> public · <code>-</code> private · <code>#</code> protected · <code>~</code> package" },
    { topic: "uml", f: "Aggregation vs. Komposition", b: "Leere Raute: Teil kann allein existieren.<br>Gefüllte Raute: Teil ist existenzabhängig." },
    { topic: "uml", f: "Multiplizität <code>0..*</code>", b: "keins bis beliebig viele (auch nur <code>*</code>)" },
    { topic: "uml", f: "Aktivitätsdiagramm: Raute vs. Balken", b: "Raute: Verzweigung/Zusammenführung (ein Weg).<br>Balken: Gabelung/Synchronisation (parallele Wege)." },
    { topic: "daten-db", f: "Primärschlüssel", b: "Identifiziert jeden Datensatz einer Tabelle eindeutig; darf nicht leer sein." },
    { topic: "daten-db", f: "Fremdschlüssel", b: "Verweist auf den Primärschlüssel einer anderen Tabelle und verknüpft die Tabellen." },
    { topic: "daten-db", f: "n:m-Beziehung in Tabellen", b: "Eigene Zwischentabelle mit beiden Fremdschlüsseln (zusammen Primärschlüssel)." },
    { topic: "daten-codierung", f: "1 MiB", b: "1024 KiB = 1.048.576 Byte" },
    { topic: "daten-codierung", f: "Speicherbedarf in UTF-8", b: "1–4 Byte je Zeichen: ASCII 1, Umlaute 2, € 3, die meisten Emojis 4" },
    { topic: "anforderungen", f: "Lastenheft", b: "Vom Auftraggeber: <strong>Was</strong> soll erreicht werden und wofür?" },
    { topic: "anforderungen", f: "Pflichtenheft", b: "Vom Auftragnehmer: <strong>Wie</strong> und womit wird es umgesetzt?" },
    { topic: "anforderungen", f: "«include» vs. «extend»", b: "include: wird immer mit ausgeführt.<br>extend: nur unter einer Bedingung." },
    { topic: "anforderungen", f: "Scrum-Rollen", b: "Product Owner, Scrum Master, Developers" },
    { topic: "anforderungen", f: "funktional vs. nicht-funktional", b: "Funktional: was das System tut.<br>Nicht-funktional: wie gut (Leistung, Sicherheit, Benutzbarkeit …)." },
    { topic: "sprachen", f: "<code>git commit</code> vs. <code>git push</code>", b: "commit: Stand im lokalen Repository speichern.<br>push: Commits ins entfernte Repository übertragen." },
    { topic: "daten-codierung", f: "Hexadezimalziffer", b: "Steht für genau 4 Bit, z. B. 1010 1111₂ = AF₁₆ = 175₁₀." },
    { topic: "daten-codierung", f: "ASCII", b: "128 Zeichen, 7 Bit; z. B. „A“ = 65 = 41₁₆." },
    { topic: "daten-codierung", f: "Paritätsbit", b: "Ergänzt die Anzahl der Einsen auf gerade bzw. ungerade; erkennt einzelne Bitfehler, aber nicht zwei gleichzeitig." },
    { topic: "daten-db", f: "1. / 2. / 3. Normalform", b: "1. NF: atomare Werte.<br>2. NF: volle Abhängigkeit vom ganzen Schlüssel.<br>3. NF: keine transitiven Abhängigkeiten." },
    { topic: "daten-db", f: "Anomalien", b: "Einfüge-, Änderungs- und Löschanomalie – Folgen von Redundanz in nicht normalisierten Tabellen." },
    { topic: "daten-db", f: "referenzielle Integrität", b: "Fremdschlüssel dürfen nur auf vorhandene Datensätze verweisen (z. B. gesichert durch ON DELETE CASCADE oder RESTRICT)." },
    { topic: "daten-db", f: "Datentyp für Geldbeträge", b: "<code>DECIMAL(10,2)</code> – Festkomma, exakt ohne Rundungsfehler" },
    { topic: "web", f: "statische vs. dynamische Webseite", b: "Statisch: fertige HTML-Datei, für alle gleich.<br>Dynamisch: Server erzeugt die Seite pro Aufruf, meist mit Datenbank." },
    { topic: "web", f: "clientseitig vs. serverseitig", b: "Client (Browser): HTML, CSS, JavaScript.<br>Server: PHP, Python (Flask/Django), Java, C#, Node.js." },
    { topic: "web", f: "HTTP-Statuscodes 200 / 404 / 500", b: "OK · nicht gefunden · Fehler auf dem Server" },
    { topic: "web", f: "<code>requests.get(url).json()</code>", b: "Ruft eine Webadresse ab und wandelt die JSON-Antwort in dict/list um." },
    { topic: "web", f: "Web-Scraping", b: "Daten aus dem HTML einer Webseite auslesen (z. B. BeautifulSoup) – Nutzungsbedingungen, robots.txt und DSGVO beachten; eine API ist vorzuziehen." },
    { topic: "sprachen", f: "Regel für KI-generierten Code", b: "Lesen, verstehen, testen, reviewen – und keine personenbezogenen oder vertraulichen Daten in öffentliche KI-Dienste eingeben." },
    { topic: "sprachen", f: "Bash, PowerShell, Python", b: "Bash: Linux-Shell.<br>PowerShell: Windows, Cmdlets Verb-Nomen, Objekt-Pipeline.<br>Python: plattformübergreifend, viele Bibliotheken." },
    { topic: "python-basics", f: "Datentyp für PLZ und Telefonnummern", b: "String – es wird nicht gerechnet, und führende Nullen bleiben erhalten." },
    { topic: "python-basics", f: "char", b: "Datentyp für genau ein Zeichen (Java, C#, Pseudocode); in Python ein str der Länge 1." },
    { topic: "algorithmen", f: "Startwerte der Grundmuster", b: "Summe und Zähler: 0.<br>Maximum/Minimum: erstes Element des Arrays." },
    { topic: "algorithmen", f: "Struktogramm und PAP", b: "Seit dem Prüfungskatalog 2025 nicht mehr prüfungsrelevant – stattdessen Pseudocode und UML-Aktivitätsdiagramm." },
    { topic: "uml", f: "Zustandsdiagramm", b: "Lebenszyklus eines Objekts: Zustände und Übergänge <code>Ereignis [Bedingung] / Aktion</code>." },
    { topic: "uml", f: "Zustands- vs. Aktivitätsdiagramm", b: "Zustand: In welchem Zustand ist ein Objekt?<br>Aktivität: Welche Aktionen laufen nacheinander ab?" },
    { topic: "oop", f: "Operatorüberladung", b: "Magische Methoden wie <code>__add__</code> (+), <code>__lt__</code> (&lt;), <code>__eq__</code> (==) legen fest, wie eigene Objekte auf Operatoren reagieren." },
    { topic: "anforderungen", f: "Erweiterungspunkt (extension point)", b: "Stelle im Basis-Anwendungsfall, an der ein «extend»-Fall unter einer Bedingung einsetzt." },
    { topic: "anforderungen", f: "Qualitätsmerkmale (ISO/IEC 9126/25010)", b: "Funktionalität, Zuverlässigkeit, Benutzbarkeit, Effizienz, Wartbarkeit, Übertragbarkeit" },
  ],
  checklist: [
    { id: "c-spr-1", topic: "sprachen", text: "Ich kann zwei Unterschiede zwischen Compiler und Interpreter nennen und die Aufgabe des Linkers erklären.", exam: ["AP1"] },
    { id: "c-spr-2", topic: "sprachen", text: "Ich kann prozedurale und objektorientierte Programmierung gegenüberstellen.", exam: ["AP1"] },
    { id: "c-spr-3", topic: "sprachen", text: "Ich kann die Wahl einer Programmiersprache mit Einsatzzweck, Portabilität, Bibliotheken und Know-how im Team begründen.", exam: ["AP1", "AP2"] },
    { id: "c-spr-4", topic: "sprachen", text: "Ich kann Bibliothek, Framework und IDE unterscheiden und Vorteile einer Versionsverwaltung mit Git nennen.", exam: ["AP1"] },
    { id: "c-py-1", topic: "python-basics", text: "Ich kann die Datentypen int, float, str und bool unterscheiden und Werte mit int(), float() und str() umwandeln.", exam: ["AP1"] },
    { id: "c-py-2", topic: "python-basics", text: "Ich kann Ausdrücke mit //, %, ** und der richtigen Operatorrangfolge auswerten.", exam: ["AP1"] },
    { id: "c-py-3", topic: "python-basics", text: "Ich kann Eingaben mit input() einlesen, umwandeln und Ergebnisse mit f-Strings formatiert ausgeben.", exam: ["AP1"] },
    { id: "c-ks-1", topic: "kontrollstrukturen", text: "Ich kann Verzweigungen mit if, elif und else schreiben und verschachtelte Bedingungen lesen.", exam: ["AP1"] },
    { id: "c-ks-2", topic: "kontrollstrukturen", text: "Ich kann for- und while-Schleifen einsetzen und sicher angeben, welche Zahlen range() erzeugt.", exam: ["AP1"] },
    { id: "c-ks-3", topic: "kontrollstrukturen", text: "Ich kann einen Schreibtischtest mit Trace-Tabelle für Code oder Pseudocode mit Schleifen fehlerfrei durchführen.", exam: ["AP1"] },
    { id: "c-fm-1", topic: "funktionen-module", text: "Ich kann Funktionen mit Parametern, Default-Werten und Rückgabewerten schreiben und aufrufen.", exam: ["AP1"] },
    { id: "c-fm-2", topic: "funktionen-module", text: "Ich kann lokale und globale Variablen unterscheiden und erklären, warum eine lokale Variable außerhalb der Funktion unbekannt ist.", exam: ["AP1"] },
    { id: "c-fm-3", topic: "funktionen-module", text: "Ich kann Module wie math, random, datetime und os importieren und typische Funktionen daraus nutzen." },
    { id: "c-ko-1", topic: "kollektionen", text: "Ich kann Listen, Tupel, Dictionaries und Mengen anhand ihrer Eigenschaften unterscheiden und passend auswählen.", exam: ["AP1"] },
    { id: "c-ko-2", topic: "kollektionen", text: "Ich kann mit Indizes, Slicing und List Comprehensions arbeiten.", exam: ["AP1"] },
    { id: "c-ko-3", topic: "kollektionen", text: "Ich kann die Datenstrukturen Array, Stack und Queue erklären." },
    { id: "c-df-1", topic: "dateien-formate", text: "Ich kann Textdateien mit open() und with im passenden Modus lesen und schreiben." },
    { id: "c-df-2", topic: "dateien-formate", text: "Ich kann CSV- und JSON-Dateien mit den Modulen csv und json einlesen und schreiben.", exam: ["AP2"] },
    { id: "c-df-3", topic: "dateien-formate", text: "Ich kann CSV, JSON und XML vergleichen und einen Datensatz in jedem der drei Formate darstellen.", exam: ["AP2"] },
    { id: "c-ts-1", topic: "text-system-gui", text: "Ich kann einfache reguläre Ausdrücke formulieren und mit re.findall() Texte und Logdateien auswerten.", exam: ["AP2"] },
    { id: "c-ts-2", topic: "text-system-gui", text: "Ich kann mit os, sys und subprocess auf das Betriebssystem zugreifen und Pakete in einer virtuellen Umgebung installieren.", exam: ["AP2"] },
    { id: "c-ts-3", topic: "text-system-gui", text: "Ich kann eine Bildschirmmaske nach Softwareergonomie, Barrierefreiheit und Corporate Design beurteilen und Verbesserungen vorschlagen.", exam: ["AP1"] },
    { id: "c-fd-1", topic: "fehler-debugging", text: "Ich kann Syntax-, Laufzeit- und logische Fehler unterscheiden und in gegebenem Quellcode finden und korrigieren.", exam: ["AP1", "AP2"] },
    { id: "c-fd-2", topic: "fehler-debugging", text: "Ich kann Ausnahmen mit try, except, else und finally gezielt behandeln.", exam: ["AP2"] },
    { id: "c-fd-3", topic: "fehler-debugging", text: "Ich kann erklären, wie Breakpoints, Step Over und Step Into bei der Fehlersuche helfen.", exam: ["AP1", "AP2"] },
    { id: "c-te-1", topic: "testen", text: "Ich kann Black-Box- und White-Box-Tests sowie statische und dynamische Testverfahren unterscheiden.", exam: ["AP2"] },
    { id: "c-te-2", topic: "testen", text: "Ich kann zu einer Vorgabe Äquivalenzklassen und Grenzwerte bilden und daraus Testfälle mit erwartetem Ergebnis ableiten.", exam: ["AP2"] },
    { id: "c-te-3", topic: "testen", text: "Ich kann die Teststufen vom Komponententest bis zum Abnahmetest beschreiben und ein Testprotokoll anlegen.", exam: ["AP1", "AP2"] },
    { id: "c-al-1", topic: "algorithmen", text: "Ich kann Algorithmen in Pseudocode mit Verzweigungen und Schleifen formulieren und lückenhaften Pseudocode ergänzen.", exam: ["AP1", "AP2"] },
    { id: "c-al-2", topic: "algorithmen", text: "Ich kann Bubble Sort Durchlauf für Durchlauf nachvollziehen und die Anzahl der Vergleiche berechnen.", exam: ["AP1"] },
    { id: "c-al-3", topic: "algorithmen", text: "Ich kann lineare und binäre Suche erklären und die binäre Suche Schritt für Schritt durchführen.", exam: ["AP1"] },
    { id: "c-oo-1", topic: "oop", text: "Ich kann die Begriffe Klasse, Objekt, Attribut, Methode, Konstruktor und Sichtbarkeit erklären.", exam: ["AP1"] },
    { id: "c-oo-2", topic: "oop", text: "Ich kann eine Klasse mit Konstruktor, privaten Attributen, Getter und Setter in Python programmieren.", exam: ["AP1"] },
    { id: "c-oo-3", topic: "oop", text: "Ich kann Vererbung, Polymorphie und abstrakte Methoden an einem Beispiel erklären.", exam: ["AP2"] },
    { id: "c-um-1", topic: "uml", text: "Ich kann aus einem Text ein UML-Klassendiagramm mit Sichtbarkeiten, Datentypen, Beziehungen und Multiplizitäten erstellen.", exam: ["AP1", "AP2"] },
    { id: "c-um-2", topic: "uml", text: "Ich kann einen beschriebenen Ablauf als UML-Aktivitätsdiagramm mit Verzweigung, Schleife und paralleler Ausführung zeichnen.", exam: ["AP1", "AP2"] },
    { id: "c-um-3", topic: "uml", text: "Ich kann ein einfaches Sequenzdiagramm lesen und synchrone Nachrichten von Antworten unterscheiden.", exam: ["AP2"] },
    { id: "c-db-1", topic: "daten-codierung", text: "Ich kann Daten nach Herkunft, Art, Verfügbarkeit, Datenschutz, Datensicherheit und Speicherbedarf analysieren." },
    { id: "c-db-2", topic: "daten-codierung", text: "Ich kann Speicherbedarf mit KiB, MiB und GiB berechnen und den Platzbedarf von Zeichen in UTF-8 bestimmen.", exam: ["AP1"] },
    { id: "c-db-3", topic: "daten-db", text: "Ich kann ein ER-Modell mit Kardinalitäten erstellen und es mit Primär- und Fremdschlüsseln in Tabellen überführen.", exam: ["AP1", "AP2"] },
    { id: "c-an-1", topic: "anforderungen", text: "Ich kann Zweck, Urheber und Inhalt von Lasten- und Pflichtenheft nennen.", exam: ["AP1"] },
    { id: "c-an-2", topic: "anforderungen", text: "Ich kann funktionale und nicht-funktionale Anforderungen unterscheiden und an Beispielen zuordnen.", exam: ["AP1", "AP2"] },
    { id: "c-an-3", topic: "anforderungen", text: "Ich kann ein Anwendungsfalldiagramm mit Akteuren, Systemgrenze, «include» und «extend» (mit Erweiterungspunkt und richtiger Pfeilrichtung) zeichnen.", exam: ["AP1", "AP2"] },
    { id: "c-an-4", topic: "anforderungen", text: "Ich kann Wasserfallmodell und Scrum (Rollen, Artefakte, Events) beschreiben und für eine Situation begründet eines davon auswählen.", exam: ["AP1", "AP2"] },
    { id: "c-an-5", topic: "anforderungen", text: "Ich kann Qualitätsmerkmale von Software nach ISO/IEC 9126 bzw. 25010 nennen und Anforderungen messbar formulieren und zuordnen.", exam: ["AP2"] },
    { id: "c-an-6", topic: "anforderungen", text: "Ich kann das V-Modell (Entwurfsphasen und Teststufen) und Kanban (Board, WIP-Limit) erklären." },
    { id: "c-web-1", topic: "web", text: "Ich kann den Unterschied zwischen statischen und dynamischen Webseiten erläutern und für einen Internetauftritt begründet entscheiden.", exam: ["AP1"] },
    { id: "c-web-2", topic: "web", text: "Ich kann HTML, CSS, JavaScript und serverseitige Sprachen wie PHP oder Python ihrer Aufgabe zuordnen (client- oder serverseitig).", exam: ["AP1"] },
    { id: "c-web-3", topic: "web", text: "Ich kann mit Python Daten von einer JSON-Schnittstelle abrufen, den Statuscode auswerten und die Daten weiterverarbeiten.", exam: ["AP2"] },
    { id: "c-web-4", topic: "web", text: "Ich kann Chancen und rechtliche Grenzen von Web-Scraping beschreiben und begründen, warum eine offizielle API vorzuziehen ist." },
    { id: "c-spr-5", topic: "sprachen", text: "Ich kann Chancen und Risiken von KI-Assistenten in der Softwareentwicklung nennen und Regeln für einen datenschutzkonformen Einsatz beschreiben.", exam: ["AP1"] },
    { id: "c-spr-6", topic: "sprachen", text: "Ich kann Bash, PowerShell und Python als Skriptsprachen einordnen und typische Automatisierungsaufgaben nennen.", exam: ["AP1", "AP2"] },
    { id: "c-py-4", topic: "python-basics", text: "Ich kann für Daten einen passenden Datentyp wählen (Integer, Float/Double, Boolean, Char, String) und begründen, z. B. PLZ als String.", exam: ["AP1"] },
    { id: "c-al-4", topic: "algorithmen", text: "Ich kann die Grundmuster Summe, Zählen mit Bedingung und Maximum/Minimum in Pseudocode schreiben und die richtigen Startwerte wählen.", exam: ["AP1", "AP2"] },
    { id: "c-al-5", topic: "algorithmen", text: "Ich kann in Pseudocode Syntaxfehler von semantischen Fehlern (Off-by-one, Division statt MOD, fehlende Initialisierung) unterscheiden und korrigieren.", exam: ["AP1", "AP2"] },
    { id: "c-um-4", topic: "uml", text: "Ich kann ein einfaches UML-Zustandsdiagramm lesen und ergänzen (Zustand, Übergang mit Ereignis [Bedingung] / Aktion, Start- und Endzustand).", exam: ["AP2"] },
    { id: "c-oo-4", topic: "oop", text: "Ich kann Operatoren mit magischen Methoden wie __add__, __lt__ und __str__ für eigene Klassen überladen." },
    { id: "c-dc-3", topic: "daten-codierung", text: "Ich kann Dual-, Dezimal- und Hexadezimalzahlen ineinander umrechnen und ein Paritätsbit bestimmen.", exam: ["AP1", "AP2"] },
    { id: "c-db-4", topic: "daten-db", text: "Ich kann Einfüge-, Änderungs- und Löschanomalien erkennen und eine Tabelle bis zur 3. Normalform zerlegen.", exam: ["AP2"] },
    { id: "c-db-5", topic: "daten-db", text: "Ich kann für Attribute passende Datentypen wählen und referenzielle Integrität mit Lösch- und Aktualisierungsweitergabe erklären.", exam: ["AP2"] },
    { id: "c-db-6", topic: "daten-db", text: "Ich kann eine einfache SQL-Abfrage mit SELECT, WHERE, JOIN, GROUP BY und ORDER BY lesen und ihr Ergebnis beschreiben.", exam: ["AP2"] },
  ],
  glossary: [
    { term: "Abstrakte Klasse", def: "Klasse, von der keine Objekte erzeugt werden können; sie dient als Oberklasse und schreibt ihren Unterklassen abstrakte Methoden vor, die diese implementieren müssen." },
    { term: "Aggregation", def: "UML-Beziehung „Teil von“, bei der das Teil auch ohne das Ganze existieren kann; dargestellt durch eine leere Raute am Ganzen." },
    { term: "Algorithmus", def: "Eindeutige, endliche Folge ausführbarer Anweisungen zur Lösung eines Problems, die nach endlich vielen Schritten endet." },
    { term: "Äquivalenzklasse", def: "Menge von Eingabewerten, für die ein Programm das gleiche Verhalten zeigen soll; beim Testen genügt ein Repräsentant je Klasse." },
    { term: "Attribut", def: "Eigenschaft eines Objekts bzw. Spalte einer Tabelle, die einen Datenwert speichert, z. B. Inventarnummer oder Preis." },
    { term: "Black-Box-Test", def: "Testverfahren, das Testfälle allein aus der Spezifikation ableitet, ohne den Quellcode zu betrachten." },
    { term: "Breakpoint", def: "Haltepunkt im Quellcode, an dem der Debugger die Ausführung unterbricht, damit Variablen und Ablauf untersucht werden können." },
    { term: "Bytecode", def: "Plattformunabhängiger Zwischencode, den eine virtuelle Maschine ausführt, z. B. bei Java, C# und Python." },
    { term: "Compiler", def: "Programm, das Quellcode vor der Ausführung vollständig in Maschinen- oder Zwischencode übersetzt." },
    { term: "CSV", def: "Comma-Separated Values – einfaches Textformat für Tabellen, bei dem die Werte einer Zeile durch ein Trennzeichen (Komma oder Semikolon) getrennt sind." },
    { term: "Debugger", def: "Werkzeug, mit dem ein Programm schrittweise ausgeführt, an Haltepunkten angehalten und in seinen Variablenwerten beobachtet werden kann." },
    { term: "Dictionary", def: "Python-Kollektion aus Schlüssel-Wert-Paaren mit eindeutigen Schlüsseln, z. B. {\"SSD\": 12}." },
    { term: "Entity-Relationship-Modell (ERM)", def: "Grafisches Modell zur Planung einer Datenbank mit Entitätstypen, Attributen, Beziehungen und Kardinalitäten (1:1, 1:n, n:m)." },
    { term: "Exception", def: "Ausnahme, die während der Programmausführung bei einem Laufzeitfehler ausgelöst wird und mit try/except behandelt werden kann." },
    { term: "Fremdschlüssel", def: "Attribut einer Tabelle, das auf den Primärschlüssel einer anderen Tabelle verweist und so eine Beziehung herstellt." },
    { term: "Framework", def: "Programmgerüst, das den Ablauf einer Anwendung vorgibt und den eigenen Code an festgelegten Stellen aufruft, z. B. Django." },
    { term: "Grenzwertanalyse", def: "Testmethode, die Werte direkt auf und neben den Grenzen von Äquivalenzklassen prüft, weil dort besonders häufig Fehler auftreten." },
    { term: "IDE", def: "Integrierte Entwicklungsumgebung – bündelt Editor, Debugger, Ausführen/Build und oft Versionsverwaltung in einem Programm." },
    { term: "Interpreter", def: "Programm, das Quellcode zur Laufzeit schrittweise übersetzt und sofort ausführt, ohne eine eigene ausführbare Datei zu erzeugen." },
    { term: "JSON", def: "JavaScript Object Notation – textbasiertes, semistrukturiertes Datenformat aus Objekten und Arrays, verbreitet bei Web-APIs und Konfigurationen." },
    { term: "Kapselung", def: "OOP-Prinzip, nach dem Attribute vor direktem Zugriff geschützt und nur über Methoden gelesen oder geändert werden." },
    { term: "Kardinalität", def: "Angabe, mit wie vielen Datensätzen bzw. Objekten ein Element in Beziehung stehen kann, z. B. 1:n." },
    { term: "Klasse", def: "Bauplan in der OOP, der festlegt, welche Attribute und Methoden die daraus erzeugten Objekte besitzen." },
    { term: "Komposition", def: "UML-Beziehung, bei der das Teil existenzabhängig vom Ganzen ist; dargestellt durch eine gefüllte Raute am Ganzen." },
    { term: "Konstruktor", def: "Spezielle Methode, die beim Erzeugen eines Objekts aufgerufen wird und seine Attribute initialisiert; in Python __init__()." },
    { term: "Lastenheft", def: "Vom Auftraggeber erstelltes Dokument, das beschreibt, was ein System leisten soll und wofür (Anforderungen, Rahmenbedingungen)." },
    { term: "Linker", def: "Programm, das vom Compiler erzeugte Objektdateien und Bibliotheken zu einem ausführbaren Programm verbindet." },
    { term: "Methode", def: "Funktion, die zu einer Klasse gehört und das Verhalten ihrer Objekte beschreibt." },
    { term: "Modul", def: "Python-Datei mit Funktionen, Klassen und Konstanten, die mit import in anderen Programmen genutzt werden kann." },
    { term: "Multiplizität", def: "Angabe an einer UML-Assoziation, wie viele Objekte beteiligt sein können, z. B. 1, 0..1, 0..* oder 1..*." },
    { term: "Objekt", def: "Konkretes Exemplar (Instanz) einer Klasse mit eigenen Attributwerten." },
    { term: "Pflichtenheft", def: "Vom Auftragnehmer erstelltes Dokument, das beschreibt, wie und womit die Anforderungen des Lastenhefts umgesetzt werden." },
    { term: "Polymorphie", def: "OOP-Prinzip, nach dem derselbe Methodenaufruf je nach Klasse des Objekts unterschiedliches Verhalten auslöst." },
    { term: "Primärschlüssel", def: "Attribut oder Attributkombination, die jeden Datensatz einer Tabelle eindeutig identifiziert und nicht leer sein darf." },
    { term: "Pseudocode", def: "Sprachunabhängige, strukturierte Beschreibung eines Algorithmus in natürlich-sprachlicher Form mit erkennbaren Kontrollstrukturen." },
    { term: "Regulärer Ausdruck", def: "Suchmuster zur Beschreibung von Zeichenfolgen, z. B. \\d{5} für fünf Ziffern; in Python über das Modul re nutzbar." },
    { term: "Schreibtischtest", def: "Manuelles Durchspielen eines Programms oder Pseudocodes, bei dem alle Variablenwerte schrittweise in einer Tabelle notiert werden." },
    { term: "Scrum", def: "Agiles Vorgehensmodell mit kurzen Sprints, den Rollen Product Owner, Scrum Master und Developers sowie festen Events wie dem Daily Scrum." },
    { term: "Slicing", def: "Ausschneiden eines Teilbereichs aus einer Sequenz mit [start:stop:schritt], wobei stop nicht mehr dazugehört." },
    { term: "Tupel", def: "Unveränderliche, geordnete Python-Kollektion, z. B. (54.18, 9.10) für Koordinaten." },
    { term: "UML", def: "Unified Modeling Language – standardisierte grafische Sprache zur Modellierung von Software, z. B. mit Klassen-, Aktivitäts- und Anwendungsfalldiagrammen." },
    { term: "UTF-8", def: "Zeichencodierung für Unicode, die jedes Zeichen mit 1 bis 4 Byte speichert und für ASCII-Zeichen kompatibel zu ASCII ist." },
    { term: "Vererbung", def: "OOP-Prinzip, bei dem eine Unterklasse Attribute und Methoden einer Oberklasse übernimmt und erweitern oder überschreiben kann („ist ein“-Beziehung)." },
    { term: "Versionsverwaltung", def: "System wie Git, das Änderungen am Quellcode mit Autor, Zeitpunkt und Kommentar speichert und Zusammenarbeit im Team ermöglicht." },
    { term: "White-Box-Test", def: "Testverfahren, das Testfälle aus dem Quellcode ableitet, um z. B. alle Anweisungen oder Zweige mindestens einmal zu durchlaufen." },
    { term: "XML", def: "Extensible Markup Language – textbasiertes Auszeichnungsformat, das Daten als Baum aus Elementen mit Start- und End-Tags speichert." },
    { term: "Anomalie (Datenbank)", def: "Unerwünschter Effekt redundanter Datenhaltung beim Einfügen, Ändern oder Löschen, der zu fehlenden oder widersprüchlichen Daten führt." },
    { term: "Datenbankmanagementsystem (DBMS)", def: "Software, die Datenbanken verwaltet, Abfragen ausführt, den Mehrbenutzerbetrieb regelt und Konsistenz sowie Zugriffsrechte sichert, z. B. MariaDB oder PostgreSQL." },
    { term: "Hexadezimalsystem", def: "Stellenwertsystem zur Basis 16 mit den Ziffern 0–9 und A–F; eine Hexadezimalziffer entspricht genau 4 Bit." },
    { term: "Mock-up", def: "Früher, meist nicht funktionsfähiger Entwurf einer Benutzeroberfläche zur Abstimmung mit dem Kunden." },
    { term: "Normalisierung", def: "Schrittweises Zerlegen von Tabellen (1. bis 3. Normalform), um Redundanzen und Anomalien in relationalen Datenbanken zu vermeiden." },
    { term: "Paritätsbit", def: "Zusätzliches Prüfbit, das die Anzahl der Einsen auf eine gerade oder ungerade Zahl ergänzt und so einzelne Übertragungsfehler erkennbar macht." },
    { term: "Referenzielle Integrität", def: "Regel, nach der ein Fremdschlüssel nur auf tatsächlich vorhandene Datensätze der referenzierten Tabelle verweisen darf." },
    { term: "SQL", def: "Structured Query Language – standardisierte Sprache, um in relationalen Datenbanken Tabellen anzulegen sowie Daten abzufragen und zu ändern." },
    { term: "Statische Webseite", def: "Webseite aus fertigen Dateien (HTML, CSS, Bilder), die der Webserver unverändert an jeden Besucher ausliefert." },
    { term: "Dynamische Webseite", def: "Webseite, die ein serverseitiges Programm (z. B. PHP, Python) bei jedem Aufruf erzeugt, meist mit Daten aus einer Datenbank." },
    { term: "API", def: "Application Programming Interface – festgelegte Programmierschnittstelle, über die Programme Daten und Funktionen eines anderen Systems nutzen, z. B. per HTTP und JSON." },
    { term: "Web-Scraping", def: "Automatisches Auslesen von Daten aus dem HTML-Code von Webseiten; rechtlich durch Nutzungsbedingungen, Urheberrecht und DSGVO begrenzt." },
    { term: "Zustandsdiagramm", def: "UML-Verhaltensdiagramm, das die Zustände eines Objekts und die durch Ereignisse ausgelösten Übergänge zwischen ihnen darstellt." },
    { term: "Operatorüberladung", def: "Festlegen, wie sich Objekte einer eigenen Klasse bei Operatoren wie + oder < verhalten; in Python über magische Methoden wie __add__ oder __lt__." },
    { term: "Skriptsprache", def: "Meist interpretierte Programmiersprache für kleinere Programme und Automatisierung, z. B. Bash, PowerShell oder Python." },
  ],
  links: [
    { title: "Das offizielle Python-Tutorial", url: "https://docs.python.org/3/tutorial/index.html", note: "Englisch – Grundlagen von Datentypen bis Klassen, gut zum Nachschlagen" },
    { title: "Python-Dokumentation: Modul re (reguläre Ausdrücke)", url: "https://docs.python.org/3/library/re.html", note: "Alle Sonderzeichen und Funktionen wie findall(), search(), sub()" },
    { title: "Python-Dokumentation: tkinter", url: "https://docs.python.org/3/library/tkinter.html", note: "Grafische Oberflächen mit der Standardbibliothek" },
    { title: "PEP 8 – Style Guide for Python Code", url: "https://peps.python.org/pep-0008/", note: "Konventionen für Namen, Einrückung und Kommentare" },
    { title: "Pro Git – das Git-Buch (deutsch)", url: "https://git-scm.com/book/de/v2", note: "Versionsverwaltung von den Grundlagen bis zu Branches" },
    { title: "JSON – Einführung auf json.org", url: "https://www.json.org/json-de.html", note: "Kompakte Syntaxbeschreibung des JSON-Formats" },
    { title: "UML-Spezifikation der Object Management Group", url: "https://www.omg.org/spec/UML/", note: "Offizielle Norm – zum Nachschlagen der Notation" },
    { title: "Python-Dokumentation: Modul json", url: "https://docs.python.org/3/library/json.html", note: "dump/dumps, load/loads und die Zuordnung der Datentypen" },
    { title: "Python-Dokumentation: Modul csv", url: "https://docs.python.org/3/library/csv.html", note: "reader, DictReader, writer und Trennzeichen" },
    { title: "Requests – Dokumentation", url: "https://requests.readthedocs.io/", note: "Englisch – HTTP-Anfragen und JSON-Antworten mit Python" },
    { title: "MDN Web Docs (deutsch)", url: "https://developer.mozilla.org/de/", note: "Nachschlagewerk zu HTML, CSS, JavaScript und HTTP" },
  ]
});
