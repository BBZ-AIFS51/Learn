/* KOM – Kommunikation */
LEARN.module({
  id: "kommunikation",
  type: "fach",
  title: "Kommunikation",
  exam: ["AP1", "AP2"],
  summary: "Kommunikationsmodelle (Sender-Empfänger, Vier-Seiten-Modell, Watzlawick) sicher anwenden, Kunden- und Konfliktgespräche im IT-Alltag professionell führen, schriftlich klar kommunizieren und überzeugend präsentieren – vom Kundengespräch in der AP1 bis zu Projektpräsentation und Fachgespräch in der AP2.",
  goals: [
    "Das Sender-Empfänger-Modell mit Kodierung, Kanal, Dekodierung, Feedback und Störquellen erklären und auf Tickets, Chats und Telefonate anwenden",
    "Aussagen mit dem Vier-Seiten-Modell nach Schulz von Thun zerlegen, Missverständnisse erklären und sachlich reagieren",
    "Die fünf Axiome nach Watzlawick nennen, Fallbeispielen begründet zuordnen und die Grenzen der Modelle beurteilen",
    "Ich-Botschaften formulieren, Feedback nach Regeln geben und annehmen sowie verbale, paraverbale und nonverbale Signale deuten",
    "Kundengespräche im IT-Support strukturiert führen: aktiv zuhören, mit passenden Fragetechniken den Bedarf ermitteln und adressatengerecht erklären",
    "Schwierige Gesprächssituationen deeskalieren, Beschwerden bearbeiten und Konflikte mit Glasl-Stufen und Harvard-Konzept analysieren und lösen",
    "Teamkommunikation gestalten: Teamphasen nach Tuckman erkennen, Besprechungen leiten, virtuell zusammenarbeiten und Veränderungen begleiten",
    "Geschäftliche E-Mails, Tickettexte und Protokolle korrekt, datenschutzgerecht und empfängerorientiert verfassen",
    "Präsentationen zielgruppengerecht planen, visualisieren und frei vortragen sowie Projektpräsentation und Fachgespräch der AP2 souverän bestreiten"
  ],
  school: {
    hinweise: "Im Moodle-Kurs der AIFS51 stehen vier Werkzeuge im Mittelpunkt: Sender-Empfänger-Modell, die fünf Axiome nach Watzlawick, das Vier-Seiten-/Vier-Ohren-Modell und die Ich-Botschaft (Zusammenfassung, Übungsblatt mit IT-Fällen, umfangreiche Übungsklausur). Die Klassenarbeit enthält voraussichtlich je eine größere Aufgabe aus den Anforderungsbereichen I (Wissen wiedergeben), II (Fall analysieren) und III (beurteilen und besser formulieren). Volle Punkte gibt es nur für Nennen + Erklären + Beleg am Text; bei Beurteilungsaufgaben immer auch eine Grenze des Modells nennen. Zum schnellen Wiederholen gibt es zusätzlich den Crashkurs KOM-Arbeit-1 (siehe Links). Die weiteren Themen dieses Moduls (Kundengespräch, Konflikte, Team, E-Mail, Präsentation, Fachgespräch) bereiten auf die Kundenkommunikation in der AP1 und auf Präsentation und Fachgespräch in der AP2 vor.",
    themen: [
      "Sender-Empfänger-Modell",
      "Die 5 Axiome nach Watzlawick",
      "Vier-Seiten-Modell / Vier-Ohren-Modell",
      "Ich-Botschaft statt Du-Botschaft",
      "Fallanalysen aus dem IT-Alltag (Chat, Ticket, Videokonferenz)",
      "Aktives Zuhören und Fragetechniken",
      "Kundengespräche und Deeskalation im Support",
      "Konflikte, Glasl-Stufen und Harvard-Konzept",
      "Feedback, Teamkommunikation und Besprechungen",
      "E-Mail, Protokoll und Netiquette",
      "Präsentationstechnik, Projektpräsentation und Fachgespräch"
    ]
  },
  topics: [
    {
      id: "grundlagen",
      title: "Sender-Empfänger-Modell und Kommunikationsebenen",
      exam: ["AP1"],
      summary: "Wie eine Nachricht vom Sender zum Empfänger kommt: Kodierung, Kanal, Dekodierung, Feedback und Störquellen – dazu verbale, paraverbale und nonverbale Kommunikation.",
      html: `
        <p>Kommunikation ist der Austausch von Informationen zwischen mindestens zwei Partnern – im IT-Alltag per Ticket, Chat, Hotline, Video oder E-Mail. Viele schlecht gelöste Störungen haben eine Kommunikationsursache: Jemand hat etwas anderes verstanden, als gemeint war.</p>
        <h5>Das Sender-Empfänger-Modell</h5>
        <p>Das Modell stammt aus der Nachrichtentechnik (Shannon und Weaver, 1949) und wurde auf Gespräche übertragen. An jeder Station kann etwas schiefgehen.</p>
        <pre class="ascii">  Gedanke          Zeichen                       Zeichen           Bedeutung
 [SENDER] --kodiert--> ~~~ Kanal / Medium ~~~ --dekodiert--> [EMPFÄNGER]
     ^                     ↯ Störungen ↯                          |
     +-------------------- Feedback (Rückmeldung) ----------------+</pre>
        <table><thead><tr><th>Element</th><th>Bedeutung</th><th>IT-Beispiel</th></tr></thead><tbody>
          <tr><td><strong>Sender</strong></td><td>hat eine Absicht, einen Gedanken, eine Information</td><td>Admin will, dass nur die hängende Druckwarteschlange (Spooler-Dienst) neu gestartet wird</td></tr>
          <tr><td><strong>Kodierung</strong></td><td>Sender übersetzt den Gedanken in Zeichen (Worte, Schrift, Gesten)</td><td>schreibt: „Starte bitte den Druckserver neu.“</td></tr>
          <tr><td><strong>Code / Zeichenvorrat</strong></td><td>gemeinsames Zeichensystem: Sprache, Fachbegriffe, Abkürzungen</td><td>„Druckserver“ = Dienst oder ganze Maschine?</td></tr>
          <tr><td><strong>Kanal / Medium</strong></td><td>Übertragungsweg der Nachricht</td><td>Chat, Telefon, Ticket, E-Mail, Videokonferenz</td></tr>
          <tr><td><strong>Dekodierung</strong></td><td>Empfänger übersetzt die Zeichen mit seinem Wissen, seinen Erfahrungen und Erwartungen zurück</td><td>Kollege versteht: „den ganzen Server neu starten“</td></tr>
          <tr><td><strong>Empfänger</strong></td><td>nimmt die Nachricht auf und handelt danach</td><td>startet den Server neu – die Dateifreigaben auf derselben Maschine sind fünf Minuten weg</td></tr>
          <tr><td><strong>Feedback</strong></td><td>Rückmeldung, ob die Nachricht so angekommen ist wie gemeint</td><td>„Nur den Spooler-Dienst oder den ganzen Server?“</td></tr>
        </tbody></table>
        <p>Verständigung klappt nur, wenn sich die <strong>Zeichenvorräte</strong> überschneiden: Unter Admins ist „Rollback“ eindeutig, für die Buchhalterin nicht.</p>
        <h5>Störquellen und Gegenmaßnahmen</h5>
        <table><thead><tr><th>Störung</th><th>Beispiele</th><th>Gegenmaßnahme</th></tr></thead><tbody>
          <tr><td>technisch / Umgebung</td><td>abgehackte VoIP-Verbindung, Mail im Spam, Lärm im Serverraum</td><td>Kanal wechseln, Empfang bestätigen lassen</td></tr>
          <tr><td>sprachlich</td><td>Fachjargon, Abkürzungen, mehrdeutige Begriffe, fehlende Angaben</td><td>konkret und vollständig formulieren, Begriffe erklären</td></tr>
          <tr><td>persönlich</td><td>Stress, Zeitdruck, Ärger, Vorurteile, belastete Beziehung</td><td>sachlich bleiben, passenden Zeitpunkt wählen, nachfragen</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>Merke:</strong> Gesendet ≠ angekommen ≠ verstanden ≠ umgesetzt. Der Sender ist für eine klare Nachricht verantwortlich, der Empfänger fürs Nachfragen. Das wichtigste Werkzeug gegen Missverständnisse ist <strong>Feedback</strong>.</div>
        <div class="callout beispiel"><strong>Beispiel – Fall in vier Schritten:</strong> Ein Autohaus in Heide schreibt der Nordlicht IT GmbH ins Ticket: „Internet geht nicht.“ Der Supporter startet den Router neu – ohne Erfolg. Tatsächlich war nur das Ersatzteilportal des Herstellers gestört.<br>
        1. <em>Gesendet:</em> „Internet geht nicht“ – ohne Seite, Gerät, Fehlermeldung.<br>
        2. <em>Ergänzte Annahme:</em> Die ganze Internetverbindung ist weg.<br>
        3. <em>Folge:</em> Der Neustart unterbricht alle Mitarbeitenden und löst nichts.<br>
        4. <em>Bessere Rückfrage:</em> „Gehen andere Webseiten? Welche Seite genau nicht, und welche Meldung erscheint?“</div>
        <h5>Verbal, paraverbal, nonverbal</h5>
        <table><thead><tr><th>Ebene</th><th>Was gehört dazu?</th><th>Bedeutung</th></tr></thead><tbody>
          <tr><td><strong>verbal</strong></td><td>Worte, Satzbau, Fachbegriffe – <em>was</em> gesagt wird</td><td>klare Formulierung in Ticket und Telefonat</td></tr>
          <tr><td><strong>paraverbal</strong></td><td>Tonfall, Lautstärke, Sprechtempo, Pausen – <em>wie</em> es gesagt wird</td><td>am Telefon die wichtigste Beziehungsebene</td></tr>
          <tr><td><strong>nonverbal</strong></td><td>Mimik, Gestik, Blickkontakt, Haltung, Abstand</td><td>Vor-Ort-Einsatz, Video, Präsentation</td></tr>
        </tbody></table>
        <p>Schriftlich übernehmen <strong>Emojis, Satzzeichen, GROSSBUCHSTABEN und Antwortzeit</strong> die Rolle von Tonfall und Mimik. Passen alle Ebenen zusammen, wirkt die Nachricht <strong>kongruent</strong> (stimmig). Widersprechen sie sich („Kein Problem!“ mit Seufzen), glaubt der Empfänger meist der nonverbalen Ebene.</p>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Die Regel „7 % Worte, 38 % Stimme, 55 % Körpersprache“ (Mehrabian) gilt nicht allgemein. Sie stammt aus Versuchen mit einzelnen Wörtern und widersprüchlichem Tonfall.</div>
        <p><strong>Nutzen des Modells:</strong> zeigt, dass Missverständnisse normal sind, und wo man ansetzt: genauer kodieren, Kanal wählen, Feedback einholen. <strong>Grenzen:</strong> technisch und linear; Gefühle und Beziehung erklärt es nicht, und im Gespräch sind beide gleichzeitig Sender und Empfänger.</p>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1: „<em>Beschreiben</em> Sie das Sender-Empfänger-Modell anhand der Situation“, „<em>Nennen</em> Sie zwei Störquellen“, „<em>Formulieren</em> Sie eine Rückfrage“. Antwortschema für Fallaufgaben: <strong>Modell nennen → zuordnen → am Text belegen → Wirkung erklären → (AFB III) bessere Formulierung + Grenze des Modells</strong>.</div>`
    },
    {
      id: "vier-seiten",
      title: "Vier-Seiten-Modell und Vier-Ohren-Modell (Schulz von Thun)",
      exam: ["AP1"],
      summary: "Jede Nachricht hat vier Seiten – Sachinhalt, Selbstkundgabe, Beziehung, Appell – und der Empfänger hört mit vier Ohren. So zerlegst du Aussagen und erklärst Missverständnisse.",
      html: `
        <p>Der Hamburger Kommunikationspsychologe <strong>Friedemann Schulz von Thun</strong> hat 1981 im Buch „Miteinander reden“ gezeigt: Eine Nachricht transportiert nie nur Fakten. Das Modell heißt auch <strong>Kommunikationsquadrat</strong> oder <strong>Nachrichtenquadrat</strong>. Aus Sicht des Empfängers spricht man vom <strong>Vier-Ohren-Modell</strong>.</p>
        <h5>Die vier Seiten einer Nachricht</h5>
        <table><thead><tr><th>Seite</th><th>Leitfrage des Senders („vier Schnäbel“)</th><th>Leitfrage des Empfängers („vier Ohren“)</th></tr></thead><tbody>
          <tr><td><strong>Sachinhalt</strong></td><td>Worüber informiere ich? (Daten, Fakten)</td><td>Wie ist der Sachverhalt zu verstehen? Stimmt das?</td></tr>
          <tr><td><strong>Selbstkundgabe</strong> (früher: Selbstoffenbarung)</td><td>Was gebe ich von mir preis (Gefühl, Zustand, Haltung)?</td><td>Was ist mit ihm/ihr los? Wie geht es ihm/ihr?</td></tr>
          <tr><td><strong>Beziehung</strong></td><td>Was halte ich von dir? Wie stehen wir zueinander?</td><td>Wie redet der mit mir? Wen glaubt er vor sich zu haben?</td></tr>
          <tr><td><strong>Appell</strong></td><td>Wozu möchte ich dich bringen?</td><td>Was soll ich jetzt tun, denken oder fühlen?</td></tr>
        </tbody></table>
        <div class="callout tipp"><strong>Eselsbrücke:</strong> S – S – B – A: <em>Sache, Selbst, Beziehung, Appell</em>. Die Selbstkundgabe sagt immer etwas über den <strong>Sender</strong>, die Beziehungsseite etwas über das <strong>Du/Wir</strong>.</div>
        <h5>Explizit und implizit</h5>
        <p>Botschaften können <strong>explizit</strong> (ausdrücklich gesagt) oder <strong>implizit</strong> (mitschwingend) sein. Die Beziehungs- und Appellseite steckt oft in kleinen Signalwörtern und im Tonfall: „<em>schon wieder</em>“, „<em>endlich</em>“, „<em>immer</em>“, „<em>mal eben</em>“, „<em>eigentlich</em>“, „<em>doch</em>“. Genau diese Wörter solltest du in Prüfungstexten markieren und in deiner Analyse zitieren.</p>
        <div class="callout beispiel"><strong>Beispiel – vollständige Analyse:</strong> Beim Notebook-Rollout in der Nordlicht IT GmbH (Heide) sagt die Abteilungsleiterin zum Azubi: „Die neuen Notebooks sind ja <em>immer noch</em> nicht eingerichtet.“
        <table><thead><tr><th>Seite</th><th>mögliche Botschaft</th></tr></thead><tbody>
          <tr><td>Sachinhalt</td><td>Die neuen Notebooks sind noch nicht fertig eingerichtet.</td></tr>
          <tr><td>Selbstkundgabe</td><td>Ich bin ungeduldig und stehe selbst unter Zeitdruck.</td></tr>
          <tr><td>Beziehung</td><td>„Immer noch“ kann heißen: Du arbeitest zu langsam, ich traue dir das nicht zu.</td></tr>
          <tr><td>Appell</td><td>Beeil dich, sag mir, wann die Geräte fertig sind.</td></tr>
        </tbody></table>
        <strong>Je nach Ohr reagiert der Azubi anders:</strong> Sach-Ohr: „Sechs von zehn sind fertig, der Rest bis 14 Uhr.“ – Selbstkundgabe-Ohr: „Sie brauchen die Geräte dringend für das Meeting, oder?“ – Beziehungs-Ohr: „Ich arbeite doch schon so schnell ich kann!“ – Appell-Ohr: lässt alles andere liegen und arbeitet hektisch, dabei entstehen Fehler.</div>
        <h5>Woran du erkennst, mit welchem Ohr jemand gehört hat</h5>
        <table><thead><tr><th>Reaktion des Empfängers</th><th>vorherrschendes Ohr</th></tr></thead><tbody>
          <tr><td>Rechtfertigung, Gegenangriff, gekränkter Ton („Mach es doch selbst!“)</td><td>Beziehungs-Ohr</td></tr>
          <tr><td>handelt sofort, ohne nachzufragen; will es allen recht machen</td><td>Appell-Ohr</td></tr>
          <tr><td>geht auf das Befinden ein, „psychologisiert“ („Du bist heute aber gestresst“)</td><td>Selbstkundgabe-Ohr</td></tr>
          <tr><td>antwortet nur mit Fakten und überhört Gefühle oder Wünsche</td><td>Sach-Ohr</td></tr>
        </tbody></table>
        <p><strong>Missverständnisse</strong> entstehen, wenn Sender und Empfänger verschiedene Seiten betonen: Der Sender meint die Sache, der Empfänger hört die Beziehung. Jeder hat ein „Lieblingsohr“, geprägt durch Erfahrung, Stimmung und die Beziehung zum Gegenüber.</p>
        <h5>Professionell reagieren – alle vier Ohren bedienen</h5>
        <p>Kunde: „Ihr Update hat schon wieder unseren Drucker lahmgelegt!“ – Selbstkundgabe anerkennen („Ich verstehe, dass Sie verärgert sind“), Beziehung stabilisieren statt zurückschlagen („Danke, dass Sie sich gleich melden“), Sache klären („Welcher Drucker, welche Meldung?“), Appell beantworten („Ich prüfe das sofort und melde mich in 20 Minuten“). Als <strong>Sender</strong> formulierst du den Appell ausdrücklich und lässt abwertende Signalwörter weg.</p>
        <div class="callout achtung"><strong>Typische Fehler:</strong> Selbstkundgabe („Ich bin genervt“) und Beziehung („Du bist unfähig“) verwechseln · Wertungen in den Sachinhalt schreiben · Deutungen als Tatsache formulieren (besser: „kann ankommen als …“) · nur Schlagwörter statt einer Botschaft je Seite.</div>
        <p><strong>Nutzen:</strong> macht versteckte Appelle und Beziehungsbotschaften sichtbar und hilft, auf die Sachebene zurückzukehren. <strong>Grenzen:</strong> nur Deutungen, nur eine einzelne Nachricht als Momentaufnahme; sich hochschaukelnde Verläufe erklärt Watzlawicks drittes Axiom besser.</p>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> In der AP1 bereits geprüft (Herbst 2023): „<em>Analysieren</em> Sie die Aussage nach dem Vier-Seiten-Modell“ (je Seite eine ausformulierte Botschaft), „<em>Erläutern</em> Sie, wie das Missverständnis entstand“ (Sender betont Seite X, Empfänger hört mit Ohr Y – am Text belegen), „<em>Formulieren</em> Sie eine angemessene Antwort“.</div>`
    },
    {
      id: "watzlawick",
      title: "Die fünf Axiome nach Watzlawick und das Eisbergmodell",
      exam: [],
      summary: "Fünf Grundregeln menschlicher Kommunikation, mit denen du Schweigen, Beziehungsprobleme, Teufelskreise, widersprüchliche Signale und Rollenverhältnisse erklärst – plus Eisbergmodell und Metakommunikation.",
      html: `
        <p>Paul Watzlawick formulierte mit Janet Beavin und Don Jackson 1967 („Pragmatics of Human Communication“, deutsch „Menschliche Kommunikation“) fünf <strong>Axiome</strong> – Grundsätze, die ohne Beweis als gültig angenommen werden. Sie erklären, <em>warum</em> Gespräche schwierig werden oder eskalieren.</p>
        <table><thead><tr><th>Nr.</th><th>Axiom</th><th>Bedeutung</th><th>Signal im Fall</th></tr></thead><tbody>
          <tr><td>1</td><td><strong>Man kann nicht nicht kommunizieren.</strong></td><td>Jedes Verhalten wird gedeutet, auch Schweigen oder Nichtstun.</td><td>keine Antwort, Kamera aus, „gelesen“ ohne Reaktion</td></tr>
          <tr><td>2</td><td><strong>Jede Kommunikation hat einen Inhalts- und einen Beziehungsaspekt</strong>, wobei der Beziehungsaspekt den Inhalt bestimmt.</td><td>Wie wir zueinander stehen, entscheidet, wie ein Satz ankommt.</td><td>sachliche Aussage wird als Angriff verstanden</td></tr>
          <tr><td>3</td><td><strong>Die Beziehung ist durch die Interpunktion der Abläufe bedingt</strong> (Ursache und Wirkung).</td><td>Jeder sieht sein Verhalten nur als Reaktion auf den anderen → Teufelskreis.</td><td>„weil du …“ – „nein, weil du …“</td></tr>
          <tr><td>4</td><td><strong>Menschen kommunizieren digital und analog.</strong></td><td>digital = Worte (Inhalt), analog = Tonfall, Mimik, Gestik, Emoji (Beziehung)</td><td>Worte und Ton/Emoji passen nicht zusammen</td></tr>
          <tr><td>5</td><td><strong>Kommunikation ist symmetrisch oder komplementär.</strong></td><td>symmetrisch = Augenhöhe, komplementär = ungleiche, sich ergänzende Rollen</td><td>Kollegen unter sich vs. Teamleitung – Azubi, Experte – Laie</td></tr>
        </tbody></table>
        <div class="callout tipp"><strong>Eselsbrücke N – I – I – D – S:</strong> „<em>Nie Ist Irgendwer Der Schuldige</em>“ – <strong>N</strong>icht-nicht, <strong>I</strong>nhalt/Beziehung, <strong>I</strong>nterpunktion, <strong>D</strong>igital/analog, <strong>S</strong>ymmetrisch/komplementär. Der Satz passt zu Axiom 3: Im Teufelskreis gibt es keinen einzelnen Schuldigen.</div>
        <div class="callout beispiel"><strong>Beispiel – zuordnen und begründen:</strong> Azubi Mia bittet im Chat der Nordlicht IT GmbH um Hilfe bei einer Gruppenrichtlinie. Ihr Ausbilder antwortet: „Klar, ich komme gleich 🙄.“<br>
        <em>Zuordnung:</em> Axiom 4 (digital und analog). <em>Beleg:</em> Die Worte „Klar, ich komme gleich“ sind freundlich (digital), das Augenrollen-Emoji signalisiert Genervtheit (analog). <em>Wirkung:</em> Mia glaubt eher dem Emoji, fühlt sich lästig und fragt künftig seltener nach – Fehler werden wahrscheinlicher. <em>Abgrenzung:</em> Axiom 2 wäre vertretbar, Axiom 4 trifft es aber genauer, weil ohne das Emoji keine Kränkung entstanden wäre.</div>
        <h5>Metakommunikation – der Ausweg</h5>
        <p><strong>Metakommunikation</strong> heißt, über die Kommunikation selbst zu sprechen: „Ich habe den Eindruck, wir reden gerade aneinander vorbei. Können wir kurz klären, was jeder erwartet?“ So lassen sich Beziehungsstörungen (Axiom 2) und Teufelskreise (Axiom 3) unterbrechen.</p>
        <h5>Das Eisbergmodell</h5>
        <pre class="ascii">          /\\        sichtbar: Sachebene
         /  \\       Fakten, Zahlen, Argumente
~~~~~~~~/~~~~\\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Wasseroberfläche
       /      \\     unsichtbar: Beziehungsebene
      /        \\    Gefühle, Erwartungen, Ängste,
     /__________\\   Werte, Erfahrungen, Motive</pre>
        <p>Wie bei einem Eisberg ist nur ein kleiner Teil der Kommunikation sichtbar (Faustbild: etwa 20 %), der größere Teil liegt unter der Oberfläche (etwa 80 %) und steuert das Gespräch. Ein Kunde, der sich über „das langsame Netz“ beschwert, hat vielleicht vor allem Angst, seine Frist nicht zu schaffen.</p>
        <div class="callout achtung"><strong>Prüfungsfallen:</strong> Axiom 2 und 4 nicht verwechseln – Axiom 2: die <em>Beziehung</em> färbt den Inhalt; Axiom 4: die <em>Form</em> (Worte vs. Ton/Emoji) widerspricht sich. „Symmetrisch“ heißt nicht „gut“ und „komplementär“ nicht „schlecht“ – problematisch wird es, wenn Rollen unklar sind oder nicht akzeptiert werden. Die 20/80-Aufteilung des Eisbergs ist ein Bild, kein Messwert.</div>
        <p><strong>Grenzen:</strong> Die Axiome beschreiben Muster, geben aber keine Handlungsanweisung. Viele Fälle passen zu mehreren Axiomen – entscheidend ist eine schlüssige Begründung.</p>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Klassenarbeit: AFB I „<em>Nennen</em> und <em>erläutern</em> Sie die fünf Axiome“; AFB II „<em>Ordnen</em> Sie jedem Fall das passende Axiom <em>zu</em> und <em>begründen</em> Sie“; AFB III „<em>Beurteilen</em> Sie, welches Modell den Fall besser erklärt, und nennen Sie eine Grenze“. Im AP1-Katalog stehen ausdrücklich nur Vier-Ohren- und Sender-Empfänger-Modell; die Axiome helfen dir aber bei jeder Fallanalyse und im Fachgespräch.</div>`
    },
    {
      id: "ich-botschaft-feedback",
      title: "Ich-Botschaften und Feedback",
      exam: ["AP1"],
      summary: "Kritik ohne Angriff: Ich-Botschaften nach dem Schema Wahrnehmung – Wirkung – Wunsch, verkleidete Du-Botschaften erkennen, Feedbackregeln, Johari-Fenster und Reflexionsmethoden.",
      html: `
        <p>Die <strong>Ich-Botschaft</strong> geht auf den Psychologen Thomas Gordon zurück. Sie beschreibt die eigene Wahrnehmung und die Wirkung auf einen selbst, statt den anderen zu bewerten. Eine <strong>Du-Botschaft</strong> („Du machst ständig …“) wirkt wie ein Angriff: Der andere verteidigt sich, statt das Problem zu lösen.</p>
        <div class="callout formel"><strong>Aufbau einer Ich-Botschaft:</strong><br>
        1. <strong>Wahrnehmung</strong> – konkret beschreiben, was passiert ist (ohne Wertung, ohne „immer/nie/ständig“)<br>
        2. <strong>Wirkung</strong> – eigenes Gefühl oder Problem + Begründung („…, weil …“)<br>
        3. <strong>Wunsch</strong> – konkrete Bitte oder Lösung für die Zukunft</div>
        <table><thead><tr><th>Du-Botschaft</th><th>Ich-Botschaft</th></tr></thead><tbody>
          <tr><td>„Deine Tickets sind total chaotisch.“</td><td>„In drei Tickets von heute fehlt die Fehlermeldung. Ich muss dann erst beim Kunden nachfragen und verliere Zeit. Bitte trag die Meldung künftig immer mit ein.“</td></tr>
          <tr><td>„Du hörst mir nie zu!“</td><td>„Du hast gerade zweimal aufs Handy geschaut, während ich den Ablauf erklärt habe. Das verunsichert mich, weil der Rollout morgen davon abhängt. Können wir fünf Minuten konzentriert draufschauen?“</td></tr>
        </tbody></table>
        <div class="callout achtung"><strong>Falle – die verkleidete Du-Botschaft:</strong> „Ich finde, du solltest endlich …“ oder „Ich habe das Gefühl, du bist unzuverlässig“ beginnen mit „Ich“, enthalten danach aber eine Bewertung des anderen. <strong>Test:</strong> Folgt auf das „Ich“ mein eigenes Gefühl oder Problem – oder ein Urteil über dich? Auch Ironie, Verallgemeinerungen und Unterstellungen („Du willst doch nur …“) machen jede Ich-Botschaft kaputt.</div>
        <div class="callout beispiel"><strong>Beispiel – Schritt für Schritt umformulieren:</strong> Du-Botschaft: „Du lässt mich ständig mit deinen halbfertigen Tickets allein.“<br>
        Fehler: Verallgemeinerung („ständig“), Wertung („halbfertig“), Unterstellung („allein lassen“), kein Wunsch.<br>
        1. Wahrnehmung: „Du hast mir heute zwei Tickets übergeben, in denen nicht steht, was du schon geprüft hast.“<br>
        2. Wirkung: „Ich muss dann von vorn anfangen, und der Kunde wartet länger.“<br>
        3. Wunsch: „Bitte notiere bei jeder Übergabe kurz die erledigten Schritte.“</div>
        <p><strong>Grenze:</strong> Ist die Beziehung schon stark belastet, wirkt auch eine gute Ich-Botschaft oft nicht – dann helfen Metakommunikation oder ein moderiertes Gespräch.</p>
        <h5>Feedback – das Johari-Fenster</h5>
        <table><thead><tr><th></th><th>mir bekannt</th><th>mir unbekannt</th></tr></thead><tbody>
          <tr><td><strong>anderen bekannt</strong></td><td>öffentliche Person (freier Bereich)</td><td><strong>blinder Fleck</strong></td></tr>
          <tr><td><strong>anderen unbekannt</strong></td><td>private Person (Geheimnis)</td><td>Unbekanntes</td></tr>
        </tbody></table>
        <p>Das Modell von Joseph Luft und Harry Ingham zeigt: <strong>Feedback</strong> verkleinert den blinden Fleck (andere zeigen mir, wie ich wirke), <strong>Selbstöffnung</strong> verkleinert den privaten Bereich. Beides vergrößert den freien Bereich und damit die Vertrauensbasis im Team.</p>
        <h5>Regeln für Feedback</h5>
        <div class="grid-2"><div><strong>Feedback geben</strong><ul><li>in Ich-Form sprechen</li><li>beschreiben statt bewerten</li><li>konkret statt verallgemeinernd</li><li>zeitnah und unter vier Augen bei Kritik</li><li>nur veränderbares Verhalten ansprechen</li><li>Positives und Verbesserungsvorschläge nennen</li></ul></div>
        <div><strong>Feedback nehmen</strong><ul><li>zuhören und ausreden lassen</li><li>nicht rechtfertigen oder verteidigen</li><li>bei Unklarheit nachfragen</li><li>sich bedanken</li><li>selbst entscheiden, was man umsetzt</li></ul></div></div>
        <p><strong>Reflexionsmethoden im Team:</strong> Blitzlicht (jeder sagt kurz seine Einschätzung), Retrospektive (Was lief gut? Was nicht? Was ändern wir?) und Lessons Learned am Projektende (Erfahrungen dokumentieren, damit Folgeprojekte davon profitieren).</p>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1 (Projektmanagement: „Reflexionsmethoden, z. B. Feedback-Kultur, Lessons Learned“): „<em>Nennen</em> Sie vier Feedbackregeln“, „<em>Beschreiben</em> Sie den Nutzen einer Retrospektive“. In der Klassenarbeit: „<em>Beurteilen</em> Sie, ob eine echte Ich-Botschaft vorliegt“ und „<em>Formulieren</em> Sie eine Ich-Botschaft“ – alle drei Bausteine müssen erkennbar sein.</div>`
    },
    {
      id: "zuhoeren-fragen",
      title: "Aktives Zuhören und Fragetechniken",
      exam: ["AP1"],
      summary: "Zuhören mit Rückmeldung (Paraphrasieren, Verbalisieren, Zusammenfassen) und die passenden Fragearten für Bedarfsanalyse und Fehlereingrenzung – vom offenen Einstieg bis zur Kontrollfrage.",
      html: `
        <h5>Aktives Zuhören</h5>
        <p>Aktives Zuhören geht auf den Psychologen Carl Rogers zurück. Du zeigst dem Gegenüber, dass du ihn verstehen willst, und prüfst gleichzeitig, ob du ihn richtig verstanden hast. Im Sender-Empfänger-Modell ist das gezieltes <strong>Feedback</strong>.</p>
        <table><thead><tr><th>Technik</th><th>Was du tust</th><th>Beispiel im Support</th></tr></thead><tbody>
          <tr><td>Aufmerksamkeit zeigen</td><td>Blickkontakt, Nicken, kurze Signale; am Telefon hörbar bestätigen</td><td>„Ja … verstehe … ich notiere mit.“</td></tr>
          <tr><td>Paraphrasieren</td><td>Inhalt mit eigenen Worten wiedergeben</td><td>„Sie können also Mails empfangen, aber nicht senden?“</td></tr>
          <tr><td>Verbalisieren</td><td>Gefühl des Gegenübers ansprechen</td><td>„Das ist ärgerlich, so kurz vor dem Monatsabschluss.“</td></tr>
          <tr><td>Nachfragen</td><td>Unklares präzisieren</td><td>„Was meinen Sie mit ‚langsam‘ – beim Start oder beim Speichern?“</td></tr>
          <tr><td>Zusammenfassen</td><td>Ergebnis bündeln und bestätigen lassen</td><td>„Zusammengefasst: nur Ihr PC, seit dem Update. Richtig?“</td></tr>
        </tbody></table>
        <div class="callout achtung"><strong>Achtung:</strong> Aktiv zuhören heißt nicht zustimmen. Paraphrasieren ist kein wörtliches Nachplappern. Nicht unterbrechen, keine vorschnellen Lösungen, keine Bewertungen („Das kann gar nicht sein“). Am Telefon fehlen Mimik und Gestik – deshalb verbale Signale geben und Pausen ankündigen („Ich schaue kurz nach, einen Moment“).</div>
        <h5>Fragetechniken</h5>
        <table><thead><tr><th>Frageart</th><th>Merkmal / Zweck</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td><strong>offene Frage</strong> (W-Frage)</td><td>beginnt mit Was, Wie, Welche, Wann, Wofür; der Kunde erzählt, liefert viele Informationen</td><td>„Wofür nutzen Ihre Mitarbeitenden die Geräte?“</td></tr>
          <tr><td><strong>geschlossene Frage</strong></td><td>Antwort Ja/Nein oder kurze Fakten; grenzt ein, prüft Details</td><td>„Leuchtet die LED am Netzwerkanschluss?“</td></tr>
          <tr><td><strong>Alternativfrage</strong></td><td>zwei oder drei Möglichkeiten vorgeben; führt zur Entscheidung</td><td>„Passt Ihnen Dienstag 9 Uhr oder Donnerstag 14 Uhr?“</td></tr>
          <tr><td><strong>Kontrollfrage</strong></td><td>Verständnis sichern</td><td>„Habe ich richtig verstanden, dass nur der Scanner betroffen ist?“</td></tr>
          <tr><td><strong>Suggestivfrage</strong></td><td>legt die Antwort in den Mund („doch“, „sicher“, „nicht auch“); manipulativ – vermeiden</td><td>„Sie haben das Update doch sicher schon installiert, oder?“</td></tr>
          <tr><td><strong>Rück- / Gegenfrage</strong></td><td>klärt eine Frage durch eine Frage</td><td>„Welche Leistung meinen Sie mit ‚schneller‘?“</td></tr>
          <tr><td><strong>rhetorische Frage</strong></td><td>keine Antwort erwartet; weckt Aufmerksamkeit in Präsentationen</td><td>„Was passiert, wenn morgen der Server ausfällt?“</td></tr>
        </tbody></table>
        <div class="callout tipp"><strong>Tipp:</strong> „Warum“-Fragen klingen schnell vorwurfsvoll („Warum haben Sie das gelöscht?“). Besser: „Wie kam es dazu?“ oder „Was war der Plan dahinter?“</div>
        <h5>Die Trichtertechnik</h5>
        <pre class="ascii">\\  offene Fragen: Überblick, Bedarf, Umfeld          /
 \\  geschlossene Fragen: Details eingrenzen           /
  \\  Alternativfragen: Entscheidung vorbereiten      /
   \\  Kontrollfrage / Zusammenfassung: bestätigen   /
    \\___________________ Ergebnis _______________/</pre>
        <p>Beginne weit mit offenen Fragen, damit du nichts übersiehst, und werde dann immer enger. Wer sofort geschlossen fragt, prüft nur die eigenen Vermutungen ab.</p>
        <div class="callout beispiel"><strong>Beispiel – Bedarfsanalyse:</strong> Eine Physiotherapiepraxis in Brunsbüttel möchte bei der Nordlicht IT GmbH einen neuen Empfangsarbeitsplatz.<br>
        1. „Welche Aufgaben erledigen Sie am Empfang?“ → offen (Überblick)<br>
        2. „Welche Programme nutzen Sie dafür?“ → offen (Softwarebedarf)<br>
        3. „Wird am Empfang auch gescannt oder Karten eingelesen?“ → geschlossen (Peripherie)<br>
        4. „Arbeiten dort gleichzeitig mehrere Personen?“ → geschlossen (Anzahl Arbeitsplätze)<br>
        5. „Bevorzugen Sie einen Mini-PC hinter dem Monitor oder ein All-in-One-Gerät?“ → Alternativfrage (Entscheidung)<br>
        6. „Ich fasse zusammen: ein Arbeitsplatz mit Kartenleser, Scanner und zwei Monitoren. Stimmt das?“ → Kontrollfrage</div>
        <h5>Fragen im Fragebogen</h5>
        <p>Bei einer schriftlichen Bedarfserhebung sind <strong>geschlossene Fragen</strong> (Ankreuzen, Skalen) schnell auszufüllen und leicht auszuwerten, liefern aber nur vorgegebene Antworten. <strong>Offene Fragen</strong> bringen unerwartete Hinweise und Details, sind aber aufwendig auszuwerten und werden oft übersprungen. Gute Fragebögen kombinieren beides.</p>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1 (zielgruppengerechte Bedarfsanalyse): „<em>Formulieren</em> Sie drei offene und drei geschlossene Fragen für das Gespräch mit dem Kunden“, „<em>Nennen</em> Sie je einen Vor- und Nachteil“. Achte darauf, dass jede Frage wirklich zur Frageart passt – „Haben Sie …?“ ist geschlossen, auch wenn sie lang ist. Aktives Zuhören und Fragetechnik als eigene Stichworte wurden im AP1-Katalog (2. Auflage) gestrichen; im Kundengespräch und im Fachgespräch der AP2 brauchst du sie trotzdem.</div>`
    },
    {
      id: "kundengespraech",
      title: "Kundengespräche im IT-Support und in der Beratung",
      exam: ["AP1"],
      summary: "Gesprächsphasen am Telefon und vor Ort, adressatengerecht erklären, vom Bedarf zum Angebot, Nutzenargumentation und Einwandbehandlung.",
      html: `
        <p>Kunden sind nicht nur externe Auftraggeber, sondern auch <strong>interne Kunden</strong> (Kolleginnen und Kollegen anderer Abteilungen). Der Service Desk ist ihre zentrale Anlaufstelle (SPOC). Ein strukturiertes Gespräch spart Zeit, verhindert Rückfragen und sorgt für zufriedene Kunden.</p>
        <h5>Die Phasen eines Supportgesprächs</h5>
        <table><thead><tr><th>Phase</th><th>Inhalt</th></tr></thead><tbody>
          <tr><td>1. Eröffnung</td><td>Begrüßung mit Firma, Vor- und Nachname, Hilfsangebot; Kunde identifizieren (Name, Kundennummer, Rückrufnummer)</td></tr>
          <tr><td>2. Anliegen klären</td><td>offene Fragen, aktiv zuhören, Fehlerbild und Auswirkung erfassen, Ticket anlegen</td></tr>
          <tr><td>3. Verständnis sichern</td><td>zusammenfassen, Kontrollfrage, Priorität festlegen</td></tr>
          <tr><td>4. Lösung / Angebot</td><td>Lösung adressatengerecht erklären oder mit dem Kunden umsetzen; falls nicht möglich: Weitergabe an den 2nd Level</td></tr>
          <tr><td>5. Vereinbarung</td><td>nächste Schritte, realistische Zeitangabe, Ticketnummer nennen</td></tr>
          <tr><td>6. Abschluss</td><td>offene Fragen klären, freundlich verabschieden, Ticket vollständig dokumentieren, ggf. Rückruf zur Kontrolle</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel – Anruf mit Phasen:</strong> „Nordlicht IT GmbH, Service Desk, Sie sprechen mit Jonas Petersen. Was kann ich für Sie tun?“ <em>(Eröffnung)</em> – Kundin einer Steuerkanzlei in Husum: „Unser Drucker druckt nicht.“ – „Was passiert, wenn Sie drucken?“ … „Erscheint eine Meldung am Gerät?“ <em>(Anliegen klären)</em> – „Ich fasse zusammen: Seit heute Morgen kommt bei allen Kolleginnen nichts an, am Display steht ‚Papierstau Fach 2‘. Richtig?“ <em>(Verständnis sichern)</em> – „Öffnen Sie bitte die Klappe an der rechten Seite, ich führe Sie Schritt für Schritt …“ <em>(Lösung)</em> – „Falls es wieder auftritt, melden Sie sich mit der Ticketnummer 4711. Ich rufe Sie um 11 Uhr zur Kontrolle an.“ <em>(Vereinbarung, Abschluss)</em></div>
        <h5>Regeln am Telefon</h5>
        <ul>
          <li>Lächeln hört man: Die Stimme (paraverbal) ersetzt Mimik und Gestik.</li>
          <li>Den Kunden mit Namen ansprechen, keine Stille – Arbeitsschritte ankündigen („Ich prüfe jetzt Ihr Postfach, das dauert etwa eine Minute“).</li>
          <li>Nur zusagen, was du halten kannst, und Rückrufe pünktlich einhalten.</li>
        </ul>
        <h5>Weitergeben und eskalieren – kommunikativ sauber</h5>
        <table><thead><tr><th></th><th>funktionale Eskalation</th><th>hierarchische Eskalation</th></tr></thead><tbody>
          <tr><td>Richtung</td><td>horizontal: an ein Team mit mehr Fachwissen (2nd/3rd Level, Hersteller)</td><td>vertikal: an Vorgesetzte mit mehr Entscheidungsbefugnis</td></tr>
          <tr><td>Anlass</td><td>Lösung übersteigt dein Wissen oder deine Rechte</td><td>SLA-Verletzung droht, Kosten oder Kulanz, Beschwerde, Beleidigung</td></tr>
          <tr><td>Beispiel</td><td>Datenbankfehler → Ticket an das Datenbankteam</td><td>Kunde verlangt Vor-Ort-Einsatz am Wochenende → Teamleitung entscheidet</td></tr>
        </tbody></table>
        <p>Für die Kommunikation heißt das: Sag dem Kunden, <strong>dass</strong> und <strong>warum</strong> du weitergibst, wer sich <strong>bis wann</strong> meldet, und übergib intern so vollständig (Fehlerbild, bisherige Schritte, Rückrufnummer), dass niemand den Kunden ein zweites Mal dasselbe fragen muss. „Dafür bin ich nicht zuständig“ ohne Weitergabe ist keine Eskalation, sondern ein Abwimmeln.</p>
        <h5>Adressatengerecht erklären</h5>
        <table><thead><tr><th>Fachsprache</th><th>kundengerecht</th></tr></thead><tbody>
          <tr><td>„Ihr DNS-Server löst nicht auf.“</td><td>„Ihr Rechner findet gerade das ‚Telefonbuch‘ des Internets nicht, deshalb öffnen sich keine Seiten.“</td></tr>
          <tr><td>„Wir richten Ihnen einen VPN-Tunnel ein.“</td><td>„Sie bekommen eine verschlüsselte Verbindung, mit der Sie von zu Hause sicher auf die Firmendaten zugreifen.“</td></tr>
        </tbody></table>
        <h5>Vom Bedarf zum Angebot</h5>
        <p>Ablauf im Verkaufsgespräch: <strong>Anfrage → Bedarfsanalyse → Angebot → Auftrag → Auftragsbestätigung</strong>. Ein Angebot enthält Leistungsbeschreibung, Mengen, Preise, Liefer- und Zahlungsbedingungen sowie die Gültigkeitsdauer. Überzeuge mit <strong>Nutzenargumentation</strong>: nicht nur das Merkmal nennen, sondern den Vorteil und den Nutzen für genau diesen Kunden – im „Sie-Stil“.</p>
        <div class="callout formel"><strong>Merkmal → Vorteil → Nutzen:</strong> „Das Notebook hat eine SSD mit 1 TB (Merkmal). Es startet in wenigen Sekunden und öffnet große Mandantenakten ohne Wartezeit (Vorteil). Dadurch schaffen Sie in der Beratung mehr Termine pro Tag (Nutzen).“</div>
        <h5>Einwände behandeln</h5>
        <p>Ein Einwand zeigt Interesse – er ist keine Absage. Bewährt: erst zuhören und Verständnis zeigen, dann nachfragen („Womit vergleichen Sie den Preis?“), Vorteile gegen Nachteile abwägen, Referenzen nennen. „Ja, aber …“ entwertet das Gesagte – besser „Ja, und gleichzeitig …“.</p>
        <p><strong>Englisch im Support:</strong> „Could you please describe the error message?“ · „Let me summarize: …“ · „I'm sorry for the inconvenience.“ · „I'll escalate this to our second-level team and call you back by 2 p.m.“ – dieselben Phasen, nur in der Fremdsprache.</p>
        <div class="callout merke"><strong>Merke:</strong> Erst verstehen, dann lösen. Offene Fragen am Anfang, eine Zusammenfassung vor der Lösung und eine klare Vereinbarung am Ende machen jedes Kundengespräch professionell.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1 (Methoden der Kundenberatung, Kundenkommunikation in Aufträgen): „<em>Beschreiben</em> Sie den Ablauf des Kundengesprächs“, „<em>Erklären</em> Sie dem Kunden (Laie) …“, „<em>Nennen</em> Sie Bestandteile eines Angebots“, „<em>Formulieren</em> Sie eine Antwort auf den Einwand“. Laienverständliche Erklärungen bringen nur Punkte, wenn sie fachlich korrekt bleiben.</div>`
    },
    {
      id: "deeskalation",
      title: "Schwierige Kunden, Beschwerden und Deeskalation",
      exam: ["AP1"],
      summary: "Warum Kunden sich ärgern, wie du mit typischen schwierigen Gesprächspartnern umgehst, ein Gespräch in wenigen Schritten beruhigst, Beschwerden als Chance nutzt und Grenzen setzt.",
      html: `
        <p>Ein Ausfall kostet den Kunden Geld und Nerven: Er kann nicht arbeiten, verliert die Kontrolle und fühlt sich oft nicht ernst genommen. Der Ärger richtet sich gegen dich als Person des Unternehmens, meint aber meist die Situation. Professionell heißt: <strong>nicht persönlich nehmen</strong> und das Gespräch aktiv beruhigen.</p>
        <h5>Typische schwierige Gesprächspartner</h5>
        <table><thead><tr><th>Typ</th><th>Erkennungsmerkmal</th><th>So gehst du vor</th></tr></thead><tbody>
          <tr><td>der Verärgerte</td><td>laut, Vorwürfe, „schon wieder“</td><td>ausreden lassen, Verständnis zeigen, dann auf die Sache lenken</td></tr>
          <tr><td>der Besserwisser</td><td>nutzt Fachbegriffe, zweifelt an deiner Kompetenz</td><td>Wissen anerkennen, sachlich mit Fakten und Messwerten argumentieren</td></tr>
          <tr><td>der Vielredner</td><td>schweift ab, erzählt Nebensächliches</td><td>freundlich unterbrechen, zusammenfassen, geschlossene Fragen</td></tr>
          <tr><td>der Unsichere</td><td>schweigt, entschuldigt sich, wenig Fachwissen</td><td>Geduld, offene Fragen, Schritt-für-Schritt-Anleitung, ermutigen</td></tr>
          <tr><td>der Drängler</td><td>„Ich brauche das sofort!“, beruft sich auf den Chef</td><td>Dringlichkeit ernst nehmen, Priorität und realistische Zeit transparent erklären</td></tr>
        </tbody></table>
        <h5>Deeskalation mit der RUHE-Formel</h5>
        <div class="callout formel"><strong>R</strong>uhe bewahren – langsam und leise sprechen, tief durchatmen, nicht zurückschlagen<br>
        <strong>U</strong>nterbrechen vermeiden – ausreden lassen, aktiv zuhören, der Ärger muss erst raus<br>
        <strong>H</strong>ineinversetzen – Verständnis zeigen, Gefühl benennen (Verbalisieren)<br>
        <strong>E</strong>rgebnis vereinbaren – auf die Sachebene lenken, Lösung oder nächsten Schritt verbindlich zusagen und nachfassen</div>
        <table><thead><tr><th>eskalierend</th><th>deeskalierend</th></tr></thead><tbody>
          <tr><td>„Beruhigen Sie sich erst mal!“</td><td>„Ich merke, dass Sie das sehr ärgert. Lassen Sie uns das jetzt gemeinsam lösen.“</td></tr>
          <tr><td>„Dafür bin ich nicht zuständig.“</td><td>„Ich verbinde Sie mit der Kollegin, die das entscheiden kann, und schildere ihr den Fall vorab.“</td></tr>
          <tr><td>„Das haben Sie falsch gemacht.“</td><td>„Das passiert leicht. Ich zeige Ihnen, wie es künftig klappt.“</td></tr>
          <tr><td>„Da kann ich nichts machen.“</td><td>„Das geht so leider nicht – ich kann Ihnen aber bis heute Mittag ein Ersatzgerät bringen.“</td></tr>
        </tbody></table>
        <div class="callout achtung"><strong>Verständnis ist kein Schuldeingeständnis:</strong> „Ich verstehe, dass Sie verärgert sind“ erkennt das Gefühl an, ohne Fehler zuzugeben. Vermeide Fachjargon, Rechtfertigungen, Ironie und Versprechen, die du nicht halten kannst – ein gebrochenes Versprechen eskaliert stärker als eine ehrliche, längere Zeitangabe.</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> Samstag, 8:15 Uhr. Die Inhaberin einer Bäckerei in Meldorf ruft an: „Ihr Kassensystem ist tot! Die Kunden stehen bis auf die Straße, das ist ja wohl das Letzte!“<br>
        <em>R:</em> ruhig atmen, nicht rechtfertigen. <em>U:</em> ausreden lassen, „Ja … verstehe“. <em>H:</em> „Das ist am Samstagmorgen natürlich das Schlimmste, was passieren kann.“ <em>E:</em> „Ich schalte mich jetzt per Fernwartung auf. Bis dahin können Sie mit der Notfallkasse und Quittungsblock weiterverkaufen. In zehn Minuten sage ich Ihnen, ob ich es aus der Ferne lösen kann oder ein Techniker kommt.“</div>
        <h5>Beschwerdemanagement</h5>
        <p>Eine Beschwerde ist eine kostenlose Rückmeldung: Der Kunde gibt dem Unternehmen die Chance, es besser zu machen – viele unzufriedene Kunden wechseln dagegen einfach wortlos. Ablauf: <strong>annehmen und bedanken → Sachverhalt klären → Lösung anbieten und umsetzen → nachfassen → auswerten</strong> (Ursache beseitigen, z. B. über das Problem Management). Gut gelöste Beschwerden können die Kundenbindung sogar stärken.</p>
        <h5>Grenzen setzen</h5>
        <p>Beleidigungen oder Drohungen musst du nicht hinnehmen. Setze eine klare Grenze mit Ich-Botschaft und Konsequenz: „Ich möchte Ihnen helfen. Wenn Sie mich weiter beleidigen, beende ich das Gespräch und rufe Sie in 15 Minuten zurück.“ Hilft das nicht, übergibst du an die Vorgesetzte (<strong>hierarchische Eskalation</strong>) und dokumentierst den Vorfall im Ticket – sachlich, ohne Wertungen.</p>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1 (situationsgerechte Kundenkommunikation): „<em>Beschreiben</em> Sie drei Maßnahmen zur Deeskalation“, „<em>Formulieren</em> Sie eine angemessene Reaktion auf die Beschwerde“, „<em>Erläutern</em> Sie, warum die Antwort des Mitarbeiters eskalierend wirkt“. Tipp: Verknüpfe deine Antwort mit einem Modell (z. B. Beziehungs-Ohr).</div>`
    },
    {
      id: "konflikte",
      title: "Konflikte: Ursachen, Eskalationsstufen nach Glasl und Harvard-Konzept",
      exam: [],
      summary: "Konfliktarten und -ursachen erkennen, die neun Eskalationsstufen nach Glasl einordnen, Lösungsstrategien bewerten und mit dem Harvard-Konzept sachgerecht verhandeln.",
      html: `
        <p>Ein <strong>Konflikt</strong> liegt vor, wenn mindestens zwei Parteien unvereinbare Ziele, Interessen, Werte oder Sichtweisen haben und sich dadurch beeinträchtigt fühlen. Konflikte sind normal und können Verbesserungen anstoßen – gefährlich werden sie, wenn niemand sie anspricht.</p>
        <h5>Konfliktarten</h5>
        <table><thead><tr><th>Art</th><th>Worum geht es?</th><th>IT-Beispiel</th></tr></thead><tbody>
          <tr><td>Sachkonflikt</td><td>unterschiedliche Meinung zur Lösung</td><td>Linux- oder Windows-Server für den Dateidienst?</td></tr>
          <tr><td>Zielkonflikt</td><td>Ziele schließen sich gegenseitig aus</td><td>schnell ausrollen vs. gründlich testen</td></tr>
          <tr><td>Verteilungskonflikt</td><td>Streit um knappe Ressourcen</td><td>zwei Projekte wollen denselben Netzwerktechniker</td></tr>
          <tr><td>Beziehungskonflikt</td><td>Antipathie, Kränkung, fehlende Wertschätzung</td><td>„Der Neue hält sich für was Besseres.“</td></tr>
          <tr><td>Rollenkonflikt</td><td>widersprüchliche Erwartungen an eine Rolle</td><td>Kunde will Sofortservice, Chef will Einhaltung der Ticketpriorität</td></tr>
        </tbody></table>
        <p><strong>Ursachen</strong> sind oft unklare Zuständigkeiten, Zeitdruck, knappe Budgets, Kommunikationsfehler und Veränderungen. <strong>Warnsignale:</strong> Rückzug, gereizter Ton, Mails nur noch mit dem Chef in CC, Gerüchte, „Dienst nach Vorschrift“.</p>
        <h5>Die neun Eskalationsstufen nach Friedrich Glasl</h5>
        <table><thead><tr><th>Ebene</th><th>Stufe</th><th>Kennzeichen</th></tr></thead><tbody>
          <tr><td rowspan="3">win-win</td><td>1 Verhärtung</td><td>Standpunkte verfestigen sich, Spannungen spürbar</td></tr>
          <tr><td>2 Debatte, Polemik</td><td>Wortgefechte, Schwarz-Weiß-Denken</td></tr>
          <tr><td>3 Taten statt Worte</td><td>Reden bringt nichts mehr, vollendete Tatsachen</td></tr>
          <tr><td rowspan="3">win-lose</td><td>4 Images und Koalitionen</td><td>Anhänger werben, Feindbilder aufbauen</td></tr>
          <tr><td>5 Gesichtsverlust</td><td>öffentliche Bloßstellung, moralischer Angriff</td></tr>
          <tr><td>6 Drohstrategien</td><td>Drohungen und Ultimaten</td></tr>
          <tr><td rowspan="3">lose-lose</td><td>7 begrenzte Vernichtungsschläge</td><td>Schaden des anderen wird zum Ziel</td></tr>
          <tr><td>8 Zersplitterung</td><td>Gegner soll zerstört werden</td></tr>
          <tr><td>9 Gemeinsam in den Abgrund</td><td>eigener Untergang wird in Kauf genommen</td></tr>
        </tbody></table>
        <p>Glasl stellt die Stufen als Treppe <em>abwärts</em> dar. Faustregel: Stufen 1–3 können die Beteiligten meist noch selbst lösen (ggf. mit Moderation). Ab Stufe 4 braucht es einen neutralen Dritten, ab Stufe 7 oft nur noch einen Machteingriff. Glasl ordnet den Stufen überlappende Hilfen zu:</p>
        <table><thead><tr><th>Stufen</th><th>passende Intervention</th><th>im Betrieb z. B.</th></tr></thead><tbody>
          <tr><td>1–3</td><td>Moderation</td><td>Teamleitung moderiert ein Klärungsgespräch</td></tr>
          <tr><td>3–5</td><td>Prozessbegleitung</td><td>interne oder externe Beratung begleitet das Team</td></tr>
          <tr><td>4–6</td><td>sozio-therapeutische Prozessbegleitung</td><td>Coaching bei verfestigten Kränkungen</td></tr>
          <tr><td>5–7</td><td>Vermittlung (Mediation)</td><td>neutrale Mediatorin, beide Seiten stimmen zu</td></tr>
          <tr><td>6–8</td><td>Schiedsverfahren, gerichtliches Verfahren</td><td>Schlichtung, Arbeitsgericht</td></tr>
          <tr><td>7–9</td><td>Machteingriff</td><td>Geschäftsführung entscheidet, Versetzung, Trennung</td></tr>
        </tbody></table>
        <h5>Grundmuster der Konfliktlösung</h5>
        <table><thead><tr><th>Strategie</th><th>Ergebnis</th></tr></thead><tbody>
          <tr><td>Flucht / Vermeiden</td><td>Konflikt schwelt weiter, kurzfristig Ruhe</td></tr>
          <tr><td>Kampf / Durchsetzen</td><td>Sieger und Verlierer, Beziehung leidet</td></tr>
          <tr><td>Nachgeben / Unterordnen</td><td>schnelle Einigung, Unzufriedenheit bleibt</td></tr>
          <tr><td>Delegation</td><td>ein Dritter entscheidet, Verantwortung wird abgegeben</td></tr>
          <tr><td>Kompromiss</td><td>beide geben etwas ab, beide „halb zufrieden“</td></tr>
          <tr><td>Konsens / Kooperation</td><td>gemeinsame Lösung, die beide Interessen erfüllt (win-win)</td></tr>
        </tbody></table>
        <h5>Das Harvard-Konzept</h5>
        <p>Das Harvard-Konzept (Roger Fisher und William Ury, 1981) ist eine Methode für sachgerechtes Verhandeln mit vier Grundsätzen:</p>
        <ol>
          <li><strong>Menschen und Probleme getrennt behandeln</strong> – hart in der Sache, freundlich zum Menschen.</li>
          <li><strong>Interessen statt Positionen</strong> – nicht „was“ jemand fordert, sondern „warum“.</li>
          <li><strong>Optionen zum beiderseitigen Vorteil entwickeln</strong> – erst sammeln, dann bewerten.</li>
          <li><strong>Neutrale Beurteilungskriterien</strong> nutzen – z. B. SLA, Gesetz, Herstellerangaben, Messwerte.</li>
        </ol>
        <p>Dazu gehört die <strong>BATNA</strong> (beste Alternative zur Verhandlungslösung): Wer seine Alternative kennt, weiß, wann er ein Angebot ablehnen kann.</p>
        <div class="callout beispiel"><strong>Beispiel:</strong> Der Vertrieb eines Landhandels in Albersdorf verlangt: „Keine Updates während der Geschäftszeit!“ (Position). Die IT fordert: „Kritische Patches sofort!“ (Position). <em>Interessen:</em> Vertrieb will ungestörte Kundentermine, IT will Sicherheitslücken schnell schließen. <em>Optionen:</em> Wartungsfenster Dienstag und Donnerstag ab 18 Uhr; Notfallpatches mit 30 Minuten Vorwarnung; gestaffelter Rollout. <em>Neutrales Kriterium:</em> CVSS-Bewertung der Lücke entscheidet, ob ein Notfallpatch nötig ist. Ergebnis: Konsens statt Machtkampf.</div>
        <div class="callout merke"><strong>Merke:</strong> Konflikte früh ansprechen – je tiefer die Glasl-Stufe, desto schwerer die Lösung. Im Konfliktgespräch helfen Ich-Botschaften, aktives Zuhören und die Frage nach den Interessen hinter den Positionen.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Klassenarbeit / LF 6: „<em>Ordnen</em> Sie den Konflikt einer Glasl-Stufe <em>zu</em> und begründen Sie“, „<em>Entwickeln</em> Sie mit dem Harvard-Konzept eine Lösung“. Als eigenes AP-Stichwort stehen Glasl und Harvard nicht im Katalog, Deeskalation und Teamkonflikte (Storming) aber indirekt schon.</div>`
    },
    {
      id: "team",
      title: "Kommunikation im Team: Teamphasen, Besprechungen, virtuelle Zusammenarbeit",
      exam: ["AP1", "AP2"],
      summary: "Teamentwicklung nach Tuckman, Kommunikationswege berechnen, Besprechungen leiten, den passenden Kanal wählen, virtuell und wertschätzend zusammenarbeiten und Veränderungen kommunikativ begleiten.",
      html: `
        <h5>Teamentwicklung nach Tuckman</h5>
        <p>Bruce Tuckman beschrieb 1965 vier Phasen, 1977 kam die fünfte hinzu. Jede Phase braucht eine andere Kommunikation.</p>
        <table><thead><tr><th>Phase</th><th>typisches Verhalten</th><th>Was hilft?</th></tr></thead><tbody>
          <tr><td><strong>Forming</strong> (Orientierung)</td><td>höflich, abwartend, unsicher; Rollen unklar</td><td>Ziele, Rollen und Regeln klären, Kennenlernen ermöglichen</td></tr>
          <tr><td><strong>Storming</strong> (Konflikt)</td><td>Machtkämpfe, Kritik, Cliquen, Widerstand</td><td>Konflikte offen ansprechen, moderieren, Feedbackregeln</td></tr>
          <tr><td><strong>Norming</strong> (Regeln)</td><td>gemeinsame Regeln, Wir-Gefühl, Zusammenarbeit wächst</td><td>Vereinbarungen festhalten, Verantwortung übertragen</td></tr>
          <tr><td><strong>Performing</strong> (Leistung)</td><td>selbstorganisiert, hohe Leistung, gegenseitige Unterstützung</td><td>Freiraum lassen, Ergebnisse anerkennen</td></tr>
          <tr><td><strong>Adjourning</strong> (Auflösung)</td><td>Projektende, Abschied, Unsicherheit</td><td>Erfolge würdigen, Lessons Learned dokumentieren</td></tr>
        </tbody></table>
        <h5>Kommunikationswege im Team</h5>
        <div class="callout formel"><strong>Anzahl der Kommunikationsbeziehungen:</strong> K = n × (n − 1) ÷ 2 &nbsp;(n = Anzahl der Personen)</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> Ein Rollout-Team der Nordlicht IT GmbH wächst von 5 auf 9 Personen.<br>
        vorher: K = 5 × 4 ÷ 2 = <strong>10</strong> Beziehungen · nachher: K = 9 × 8 ÷ 2 = <strong>36</strong> Beziehungen.<br>
        Die Personenzahl steigt um 80 %, die Zahl der Kommunikationswege um 26 auf das 3,6-Fache. Folge: Große Teams brauchen feste Kanäle (Daily, Ticketsystem, Wiki) und klare Zuständigkeiten. Scrum-Teams sind deshalb bewusst klein (in der Regel höchstens 10 Personen).</div>
        <h5>Besprechungen effizient führen</h5>
        <ul>
          <li><strong>Vorher:</strong> Ziel festlegen, Tagesordnung und Unterlagen rechtzeitig verschicken, nur Beteiligte einladen, Zeit begrenzen.</li>
          <li><strong>Während:</strong> Moderation, Zeitwächter und Protokollführung festlegen; Redeliste; beim Thema bleiben; Ergebnisse visualisieren.</li>
          <li><strong>Nachher:</strong> Protokoll mit Aufgaben (Wer – Was – Bis wann) verteilen und die Erledigung nachhalten.</li>
        </ul>
        <p>Kurzformate: <strong>Daily Stand-up</strong> (in Scrum: Daily Scrum, höchstens 15 Minuten, Fortschritt und Hindernisse) und <strong>Retrospektive</strong> am Ende eines Sprints oder Projektabschnitts.</p>
        <h5>Den passenden Kanal wählen</h5>
        <table><thead><tr><th>Situation</th><th>geeigneter Kanal</th></tr></thead><tbody>
          <tr><td>dringend und komplex, Rückfragen zu erwarten</td><td>Telefon, Videokonferenz, persönlich (<em>synchron</em>)</td></tr>
          <tr><td>kurze Abstimmung, nicht zeitkritisch</td><td>Chat (mit @-Erwähnung der zuständigen Person)</td></tr>
          <tr><td>verbindlich, nachweisbar, an viele</td><td>E-Mail, Ticket, Protokoll (<em>asynchron</em>)</td></tr>
          <tr><td>Wissen dauerhaft verfügbar machen</td><td>Wiki, Wissensdatenbank, Dokumentation</td></tr>
          <tr><td>Kritik, Konflikt, persönliche Themen</td><td>persönliches Gespräch oder Video – nie im Gruppenchat</td></tr>
        </tbody></table>
        <p><strong>Videokonferenz-Regeln:</strong> Kamera an, wenn möglich; Mikrofon stumm, wenn du nicht sprichst; vor dem Bildschirmteilen vertrauliche Fenster und Benachrichtigungen schließen; Aufzeichnung nur nach Information und Einwilligung aller.</p>
        <h5>Wertschätzend zusammenarbeiten</h5>
        <p>Teams in der IT sind oft <strong>interdisziplinär</strong> (Technik, Vertrieb, Fachabteilung) und <strong>interkulturell</strong>. Wertschätzung zeigt sich in Pünktlichkeit, ausreden lassen, anerkennen von Beiträgen, geschlechtergerechter und respektvoller Sprache sowie darin, Nachrichten auch aus Sicht der Empfänger zu lesen. Unterschiedliche Perspektiven (<strong>Diversity</strong>) verbessern Lösungen, wenn alle zu Wort kommen.</p>
        <p><strong>Interkulturell kommunizieren</strong> – z. B. mit dem Hersteller-Support in Polen oder dem Kollegen im Homeoffice in Indien: einfache, eindeutige Sätze statt Redewendungen und Ironie; Abkürzungen ausschreiben; Wichtiges schriftlich bestätigen; Zeitzonen und Feiertage bei Terminen beachten. Wie direkt Kritik geäußert wird oder wie verbindlich ein „Ja“ gemeint ist, unterscheidet sich zwischen Kulturen – im Zweifel freundlich nachfragen (Kontrollfrage), statt eine Annahme zu ergänzen.</p>
        <h5>Veränderungen kommunizieren</h5>
        <p>Bei Veränderungen (z. B. neues Ticketsystem, KI-Chatbot im 1st Level) gibt es <strong>Promotoren</strong> (Machtpromotor mit Entscheidungsbefugnis, Fachpromotor mit Know-how), Befürworter, Unentschlossene, Skeptiker und offene oder verdeckte <strong>Widerständler</strong>. Widerstand entsteht meist aus Angst (Jobverlust, Überforderung, Verlust von Expertenstatus), schlechten Erfahrungen mit früheren Umstellungen oder fehlender Information. Gegenmittel: früh und ehrlich informieren, Nutzen erklären, Betroffene beteiligen, schulen, Sorgen ernst nehmen.</p>
        <p>Das Drei-Phasen-Modell nach <strong>Kurt Lewin</strong> zeigt, welche Kommunikation wann nötig ist (ausführlich in LF 6):</p>
        <table><thead><tr><th>Phase</th><th>Ziel</th><th>kommunikative Maßnahmen</th></tr></thead><tbody>
          <tr><td>1. Auftauen (unfreeze)</td><td>Notwendigkeit verstehen, Bereitschaft schaffen</td><td>Gründe offen erklären („Das alte System wird nicht mehr mit Updates versorgt“), Betroffene früh einbinden, Sorgen anhören</td></tr>
          <tr><td>2. Verändern (move/change)</td><td>Neues einführen und ausprobieren</td><td>Schulungen, Key-User als Ansprechpartner in den Abteilungen, Pilotgruppe, kurze FAQ, erreichbarer Support</td></tr>
          <tr><td>3. Stabilisieren (refreeze)</td><td>Neues als Normalfall verankern</td><td>Erfolge sichtbar machen, Feedback einholen, Anleitungen ins Wiki, alte Wege abschalten</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel:</strong> Die Nordlicht IT GmbH führt für eine Spedition in Brunsbüttel ein Self-Service-Portal ein. <em>Auftauen:</em> In einer Mitarbeiterversammlung erklärt die Geschäftsführung (Machtpromotor), warum Störungen künftig über das Portal gemeldet werden: schnellere Bearbeitung, Status jederzeit sichtbar. <em>Verändern:</em> In jeder Abteilung wird eine Key-Userin geschult (Fachpromotor), die Kolleginnen und Kollegen erhalten eine einseitige Kurzanleitung. <em>Stabilisieren:</em> Nach vier Wochen zeigt die IT im Teammeeting, dass Tickets im Schnitt schneller gelöst werden; Telefonmeldungen werden freundlich auf das Portal umgeleitet.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1 (Projektmanagement): „<em>Ordnen</em> Sie das beschriebene Verhalten einer Teamphase nach Tuckman <em>zu</em>“, „<em>Nennen</em> Sie Maßnahmen gegen Widerstand bei der Einführung“, „<em>Ordnen</em> Sie die Maßnahmen den Phasen nach Lewin <em>zu</em>“ (Change Management ist seit dem Katalog 2025 ein häufiges AP1-Thema). AP2 WiSo (vernetztes Zusammenarbeiten): wertschätzende, interkulturelle Zusammenarbeit und Verhalten in Videokonferenzen und Chats.</div>`
    },
    {
      id: "schriftlich",
      title: "Schriftliche Kommunikation: E-Mail, Ticket, Chat und Protokoll",
      exam: ["AP1", "AP2"],
      summary: "Geschäftliche E-Mails aufbauen, An/CC/BCC datenschutzgerecht nutzen, Netiquette, sachliche Tickettexte und Chatnachrichten, Ergebnis- und Verlaufsprotokoll sowie Risiken durch Social Media und Social Engineering.",
      html: `
        <h5>Aufbau einer geschäftlichen E-Mail</h5>
        <ol>
          <li><strong>Betreff:</strong> aussagekräftig, mit Ticket- oder Auftragsnummer („Ticket 4711: Druckerausfall behoben“)</li>
          <li><strong>Anrede:</strong> passend zum Verhältnis („Sehr geehrte Frau Hansen,“ bzw. „Hallo Frau Hansen,“)</li>
          <li><strong>Kernaussage zuerst:</strong> das Wichtigste in den ersten zwei Sätzen, danach Details</li>
          <li><strong>Handlungsaufforderung:</strong> was der Empfänger tun soll – mit Frist</li>
          <li><strong>Gruß und Signatur:</strong> Name, Funktion, Kontakt; bei Firmen die Pflichtangaben (bei einer GmbH nach § 35a GmbHG u. a. Rechtsform, Sitz, Registergericht, Registernummer, Geschäftsführer)</li>
        </ol>
        <div class="callout beispiel"><strong>Beispiel – Kundeninformation:</strong>
        <pre><code>Betreff: Wartungsarbeiten am Mailserver am 06.10. von 18:00 bis 20:00 Uhr

Sehr geehrte Frau Hansen,

am Dienstag, 06.10., installieren wir zwischen 18:00 und 20:00 Uhr
Sicherheitsupdates auf Ihrem Mailserver. In dieser Zeit können Sie
keine E-Mails senden oder empfangen; eingehende Mails gehen nicht verloren.

Bitte speichern Sie bis 17:45 Uhr Ihre offenen Entwürfe.
Bei Fragen erreichen Sie mich unter 0481 123456-20.

Mit freundlichen Grüßen
Lena Carstens, IT-Service
Nordlicht IT GmbH, Heide</code></pre></div>
        <h5>An, CC und BCC</h5>
        <table><thead><tr><th>Feld</th><th>Bedeutung</th><th>Einsatz</th></tr></thead><tbody>
          <tr><td>An</td><td>Hauptempfänger – soll handeln oder antworten</td><td>zuständige Person</td></tr>
          <tr><td>CC</td><td>Kopie zur Kenntnis, für alle sichtbar</td><td>Vorgesetzte, Vertretung – sparsam</td></tr>
          <tr><td>BCC</td><td>Blindkopie, für andere Empfänger unsichtbar</td><td>Rundmail an externe Kunden: Adressen bleiben geschützt</td></tr>
        </tbody></table>
        <div class="callout achtung"><strong>Prüfungsfalle:</strong> Eine Rundmail an viele externe Kunden mit allen Adressen im An- oder CC-Feld legt personenbezogene Daten offen – das ist ein Datenschutzverstoß nach DSGVO. Richtig: eigene Adresse ins An-Feld, Kunden in BCC (oder Serienmail). „Allen antworten“ nur, wenn wirklich alle die Antwort brauchen.</div>
        <h5>Netiquette – Regeln für digitale Nachrichten</h5>
        <ul>
          <li>kurz, klar, höflich; ein Thema pro Mail; korrekte Rechtschreibung</li>
          <li>keine GROSSBUCHSTABEN (wirken wie Schreien), keine Ironie – sie kommt schriftlich selten an</li>
          <li>nicht im Ärger antworten: Entwurf schreiben, später lesen, dann senden</li>
          <li>große Dateien als Freigabelink statt Anhang, vertrauliche Inhalte nur verschlüsselt</li>
          <li>zeitnah reagieren (mindestens Eingangsbestätigung), bei Abwesenheit Abwesenheitsnotiz mit Vertretung</li>
        </ul>
        <h5>Tickets und Chat</h5>
        <p><strong>Tickettexte</strong> sind sachlich, vollständig und nachvollziehbar: Symptom, durchgeführte Schritte, Ergebnis, nächster Schritt. Keine Wertungen über Kunden – Betroffene können nach Art. 15 DSGVO Auskunft über ihre gespeicherten Daten verlangen. Im <strong>Chat</strong> brauchen Aufträge einen klaren Adressaten:</p>
        <div class="callout formel"><strong>Klare Arbeitsanweisung:</strong> Wer (@Name) + Was (konkrete Aufgabe) + Bis wann (Frist) + Rückmeldung (wie und wann melden?)</div>
        <h5>Protokolle</h5>
        <table><thead><tr><th>Art</th><th>Inhalt</th><th>Einsatz</th></tr></thead><tbody>
          <tr><td>Ergebnisprotokoll</td><td>nur Beschlüsse, Ergebnisse und Aufgaben</td><td>Teambesprechung, Kundentermin – der Normalfall</td></tr>
          <tr><td>Verlaufsprotokoll</td><td>zusätzlich der Diskussionsverlauf: wer hat was vorgebracht</td><td>strittige Entscheidungen, Abnahme, Gremien</td></tr>
        </tbody></table>
        <p><strong>Protokollkopf:</strong> Anlass, Datum, Uhrzeit, Ort, Teilnehmende und Abwesende, Protokollführung, Tagesordnung. <strong>Hauptteil:</strong> Tagesordnungspunkte mit Ergebnissen. <strong>Schluss:</strong> Aufgabenliste (Was – Wer – Bis wann), Verteiler, Freigabe. In der IT gehören Übergabe- und Abnahmeprotokolle zum Auftragsabschluss.</p>
        <h5>Social Media, Social Engineering und KI</h5>
        <p>Abwertende Äußerungen über den Arbeitgeber in sozialen Netzwerken können die Loyalitätspflicht verletzen und zu Abmahnung oder Kündigung führen. Social Engineering nutzt Hilfsbereitschaft und Zeitdruck aus („Hier ist der Microsoft-Support, geben Sie mir bitte Fernzugriff“): nie Zugangsdaten herausgeben, über eine bekannte Nummer zurückrufen, Vorfall melden. Beim <strong>CEO-Fraud</strong> kommt eine scheinbare Chef-Mail („Bitte sofort und vertraulich 38.000 € überweisen, ich bin gerade nicht erreichbar“) – Warnsignale sind Zeitdruck, Geheimhaltung und ein ungewöhnlicher Weg; Gegenmittel sind Rückruf über die bekannte Nummer und das Vier-Augen-Prinzip. KI-Assistenten dürfen Entwürfe liefern – du prüfst Inhalt und Ton, gibst keine personenbezogenen Daten in ungeprüfte Dienste ein und bleibst für die Nachricht verantwortlich.</p>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1 (Herbst 2023): „<em>Formulieren</em> Sie eine E-Mail an den Kunden“ – mit Betreff, Anrede, Kernaussage, Handlungsaufforderung, Gruß. AP2 WiSo: „Welches Adressfeld für eine Rundmail an externe Kunden?“ (BCC) und richtiges Verhalten bei Social-Engineering-Anrufen.</div>`
    },
    {
      id: "praesentation",
      title: "Präsentationstechnik, Visualisierung und Medienkompetenz",
      exam: ["AP1", "AP2"],
      summary: "Präsentationen zielgruppengerecht planen, gliedern und visualisieren, frei vortragen, Quellen kritisch prüfen und Anwender mit der Vier-Stufen-Methode einweisen.",
      html: `
        <h5>Vorbereitung: fünf Fragen vor der ersten Folie</h5>
        <ol>
          <li><strong>Ziel:</strong> informieren, überzeugen (Entscheidung herbeiführen) oder schulen?</li>
          <li><strong>Zielgruppe:</strong> Vorwissen, Erwartungen, Anzahl – Geschäftsführung, Fachabteilung oder Prüfungsausschuss?</li>
          <li><strong>Kernbotschaft:</strong> Was sollen die Zuhörer in einem Satz mitnehmen?</li>
          <li><strong>Rahmen:</strong> Zeit, Raum, Technik, Ablauf danach (Fragen, Diskussion)</li>
          <li><strong>Inhalt und Quellen:</strong> sammeln, auswählen, kürzen, Quellen prüfen</li>
        </ol>
        <h5>Aufbau: Einleitung – Hauptteil – Schluss</h5>
        <table><thead><tr><th>Teil</th><th>Inhalt</th><th>Zeitanteil (Faustwert)</th></tr></thead><tbody>
          <tr><td>Einleitung</td><td>Begrüßung, Vorstellung, Thema und Ziel, Gliederung, Einstieg (Frage, Zahl, kurzes Praxisproblem)</td><td>ca. 10–15 %</td></tr>
          <tr><td>Hauptteil</td><td>Ausgangslage, Lösungen und Argumente, logisch aufgebaut (z. B. Problem → Alternativen → Empfehlung)</td><td>ca. 75–80 %</td></tr>
          <tr><td>Schluss</td><td>Zusammenfassung, Kernbotschaft wiederholen, Empfehlung oder Ausblick, Dank, Fragen</td><td>ca. 10 %</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel:</strong> Die Nordlicht IT GmbH stellt der Geschäftsführung einer Tischlerei in Brunsbüttel in 10 Minuten ein neues Backup-Konzept vor. Zielgruppe: Laien, Ziel: Entscheidung. Zeitplan: Einleitung 15 % × 10 min = 1,5 min („Was würde ein Verschlüsselungstrojaner bei Ihnen kosten?“), Hauptteil 75 % × 10 min = 7,5 min (Risiken heute, zwei Lösungen mit Kosten im Vergleich, Empfehlung), Schluss 10 % × 10 min = 1 min (Empfehlung, nächster Schritt). Summe: 1,5 + 7,5 + 1 = 10 min. Fachbegriffe wie „3-2-1-Regel“ werden mit einem Bild erklärt, nicht vorausgesetzt.</div>
        <h5>Folien gestalten</h5>
        <ul>
          <li>eine Kernaussage pro Folie, aussagekräftige Überschrift; Stichworte statt ganzer Sätze (Faustregel: höchstens 6–7 Zeilen)</li>
          <li>gut lesbare, serifenlose Schrift, mindestens etwa 18–24 pt; starker Kontrast; einheitliches Layout nach Corporate Design</li>
          <li>Bilder und Diagramme statt Textwüsten; Folien nummerieren; Quellen angeben</li>
          <li>barrierearm: Farbe nie als einziges Unterscheidungsmerkmal, Animationen sparsam</li>
        </ul>
        <table><thead><tr><th>Datenlage</th><th>passende Darstellung</th></tr></thead><tbody>
          <tr><td>Werte vergleichen (Kosten zweier Angebote)</td><td>Säulen- oder Balkendiagramm</td></tr>
          <tr><td>Entwicklung über die Zeit (Tickets pro Monat)</td><td>Liniendiagramm</td></tr>
          <tr><td>Anteile an einem Ganzen (Störungen nach Ursache)</td><td>Kreisdiagramm (wenige Segmente)</td></tr>
          <tr><td>Zusammenhang zweier Größen (Auslastung und Antwortzeit)</td><td>Streudiagramm</td></tr>
          <tr><td>genaue Einzelwerte</td><td>Tabelle</td></tr>
        </tbody></table>
        <h5>Vortragen: Sprache, Stimme, Körper</h5>
        <p>Sprich frei mit Stichwortkarten statt abzulesen, halte Blickkontakt mit allen Zuhörern und wende dich nicht der Leinwand zu. Variiere Tempo und Lautstärke, setze bewusst Pausen, vermeide Füllwörter („äh“, „halt“). Stehe offen und ruhig, Hände unterstützen die Aussage. Gegen <strong>Lampenfieber</strong> helfen gute Vorbereitung, mehrfaches Proben mit Uhr, ruhiges Atmen und ein auswendig gelernter erster Satz. Bei Live-Demos immer Screenshots oder ein Video als Plan B bereithalten.</p>
        <h5>Medienkompetenz: Quellen und Urheberrecht</h5>
        <p>Prüfe Quellen auf <strong>Urheber</strong> (Wer schreibt? Fachkompetenz?), <strong>Aktualität</strong>, <strong>Belege</strong> und <strong>Interessen</strong> (Werbung, Herstellerseite?) und vergleiche mehrere Quellen. Fremde Bilder und Texte nur mit Nutzungsrecht verwenden (z. B. Creative-Commons-Lizenz mit Namensnennung). Zitieren ohne Erlaubnis ist nach § 51 UrhG nur mit einem Zitatzweck erlaubt (du setzt dich mit dem Zitat auseinander oder belegst damit eine Aussage), im gebotenen Umfang und mit Quellenangabe (§ 63 UrhG) – ein fremdes Foto „zur Deko“ ist kein Zitat. KI-generierte Inhalte kritisch prüfen und – wo verlangt – kennzeichnen.</p>
        <h5>Anwender schulen: Einweisung planen und Vier-Stufen-Methode</h5>
        <p>Eine Einweisung bei der Übergabe eines Arbeitsplatzes plant man wie eine kleine Präsentation: <strong>Zielgruppe</strong> (Vorwissen, Anzahl), <strong>Lernziel</strong> („kann sich per VPN anmelden und Dateien auf dem Server ablegen“), <strong>Inhalte</strong>, <strong>Methode</strong>, <strong>Dauer und Ort</strong>, <strong>Unterlagen</strong> (Kurzanleitung, Checkliste) und <strong>Erfolgskontrolle</strong> (Teilnehmer führt die Aufgabe selbst vor, Bestätigung im Übergabeprotokoll).</p>
        <table><thead><tr><th>Stufe</th><th>Was passiert?</th></tr></thead><tbody>
          <tr><td>1. Vorbereiten</td><td>Lernziel und Nutzen nennen, Vorwissen erfragen, Arbeitsplatz und Unterlagen bereitlegen</td></tr>
          <tr><td>2. Vormachen und erklären</td><td>jeden Schritt zeigen und sagen, was du tust und warum</td></tr>
          <tr><td>3. Nachmachen und erklären lassen</td><td>der Anwender führt die Schritte selbst aus und erklärt sie dabei; du korrigierst freundlich</td></tr>
          <tr><td>4. Üben und abschließen</td><td>selbstständig üben, Erfolg kontrollieren, Rückmeldung geben, Ansprechpartner für Fragen nennen</td></tr>
        </tbody></table>
        <p>Eine kurze Anleitung (Schritt für Schritt mit Screenshots) sichert das Gelernte. Wiederkehrende Fragen im Ticketsystem sind ein Hinweis, dass eine Schulung oder ein Wiki-Artikel fehlt.</p>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> AP1 (Informationen aufbereiten und präsentieren): „<em>Nennen</em> Sie vier Regeln für die Foliengestaltung“, „<em>Beschreiben</em> Sie den Aufbau einer Präsentation für die Geschäftsführung“, „<em>Nennen</em> Sie Kriterien zur Beurteilung einer Internetquelle“, „<em>Planen</em> Sie die Einweisung der Mitarbeiterin in den neuen Arbeitsplatz“ (Leistungsübergabe). AP2 (Kapitel 01): passende Diagrammart wählen und begründen, Präsentationsprogramme und Corporate Identity – und natürlich die Projektpräsentation.</div>`
    },
    {
      id: "fachgespraech",
      title: "Projektpräsentation und Fachgespräch in der AP2",
      exam: ["AP2"],
      summary: "Rahmen, Aufbau und Bewertung von Projektpräsentation (max. 15 min) und Fachgespräch (zusammen max. 30 min): überzeugend präsentieren, Entscheidungen begründen und souverän mit Fragen umgehen.",
      html: `
        <h5>Der Rahmen nach § 20 FIAusbV</h5>
        <table><thead><tr><th>Punkt</th><th>Regelung</th></tr></thead><tbody>
          <tr><td>Prüfungsbereich</td><td>„Planen und Umsetzen eines Projektes der Systemintegration“ – 50 % der Gesamtnote</td></tr>
          <tr><td>erster Teil</td><td>betriebliche Projektarbeit mit Dokumentation (höchstens 40 Stunden)</td></tr>
          <tr><td>zweiter Teil</td><td>Präsentation der Ergebnisse + Fachgespräch, zusammen höchstens 30 Minuten; die Präsentation soll höchstens 15 Minuten dauern</td></tr>
          <tr><td>Gewichtung</td><td>erster und zweiter Teil je 50 %</td></tr>
          <tr><td>Organisation</td><td>Technik meist selbst mitbringen, Rüstzeit einplanen; Details im Einladungsschreiben der IHK Flensburg prüfen</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>Merke – deine Zielgruppe:</strong> Du präsentierst vor dem <strong>fachkundigen Prüfungsausschuss</strong>, nicht vor dem Kunden. Fachbegriffe darfst und sollst du korrekt verwenden; im Mittelpunkt stehen dein Vorgehen und deine Entscheidungen, nicht Werbung für ein Produkt. Firmenvorgaben zum Folienlayout (Corporate Design) werden in der Regel nicht bewertet – lesbare, übersichtliche Folien aber schon. Eine etwas kürzere Präsentation (etwa 12–14 Minuten) schadet nicht; die übrige Zeit geht ins Fachgespräch.</div>
        <div class="callout formel"><strong>Anteil an der Gesamtnote:</strong> Präsentation + Fachgespräch = 50 % (Projekt) × 50 % (zweiter Teil) = <strong>25 %</strong> – genauso viel wie die Projektdokumentation und mehr als jede schriftliche AP2-Prüfung (je 10 %).</div>
        <h5>Aufbau der Projektpräsentation (Beispiel für 15 Minuten)</h5>
        <table><thead><tr><th>Abschnitt</th><th>Zeit</th></tr></thead><tbody>
          <tr><td>Einstieg, Vorstellung, Ausgangssituation und Projektziel</td><td>2,5 min</td></tr>
          <tr><td>Lösungsalternativen und Entscheidung (z. B. Nutzwertanalyse)</td><td>3 min</td></tr>
          <tr><td>Durchführung mit den wichtigsten Entscheidungen</td><td>4 min</td></tr>
          <tr><td>IT-Sicherheit und Qualitätssicherung (Tests, Abnahme)</td><td>2 min</td></tr>
          <tr><td>Ergebnis, Soll-Ist-Vergleich (Zeit, Kosten)</td><td>2 min</td></tr>
          <tr><td>Fazit und Ausblick</td><td>1,5 min</td></tr>
        </tbody></table>
        <p>Summe: 2,5 + 3 + 4 + 2 + 2 + 1,5 = 15 min. Plane lieber 13–14 Minuten Inhalt ein – der Ausschuss darf nach Ablauf der Zeit abbrechen, und der Schluss ist der wichtigste Teil.</p>
        <h5>Bewertungskriterien</h5>
        <div class="grid-2"><div><strong>Präsentation</strong><ul><li>Aufbau und inhaltliche Struktur</li><li>sprachliche Gestaltung (Fachsprache, Ausdruck, Körpersprache)</li><li>zielgruppen- und fachgerechte Darstellung, Medieneinsatz</li></ul></div>
        <div><strong>Fachgespräch</strong><ul><li>Fachhintergrund und Fachsprache</li><li>Problemlösungskompetenz</li><li>Argumentation und Begründung</li></ul></div></div>
        <h5>Überzeugend argumentieren</h5>
        <div class="callout formel"><strong>Argumentationskette:</strong> Behauptung (These) → Begründung → Beleg oder Beispiel → Schlussfolgerung</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> Frage des Ausschusses: „Warum haben Sie WPA3-Enterprise statt eines gemeinsamen WLAN-Schlüssels gewählt?“<br>
        <em>These:</em> „WPA3-Enterprise war für den Kunden die sicherere und besser verwaltbare Lösung.“ <em>Begründung:</em> „Jeder Mitarbeitende meldet sich mit eigenem Konto über RADIUS an; verlässt jemand das Unternehmen, sperre ich nur dieses Konto.“ <em>Beleg:</em> „Bei einem gemeinsamen Schlüssel hätten wir nach jedem Austritt 45 Geräte neu einrichten müssen.“ <em>Folgerung:</em> „Deshalb hatte Enterprise in meiner Nutzwertanalyse die höchste Punktzahl, trotz des Aufwands für den RADIUS-Server.“</div>
        <h5>Souverän mit Fragen umgehen</h5>
        <ul>
          <li>Frage ganz anhören, kurz nachdenken – eine Denkpause wirkt kompetent.</li>
          <li>Bei Unklarheit nachfragen („Meinen Sie die Ausfallsicherheit des Servers oder der Verbindung?“).</li>
          <li>Vollständig und strukturiert antworten, nicht einsilbig; Fachbegriffe korrekt verwenden.</li>
          <li>Wissenslücken ehrlich zugeben und einen Lösungsweg zeigen („Das habe ich nicht umgesetzt. Ich würde zuerst … prüfen.“).</li>
          <li>Nicht mit dem Ausschuss diskutieren oder sich rechtfertigen – Kritik als Frage nach der Begründung verstehen.</li>
        </ul>
        <p><strong>Typische Fragen:</strong> Warum diese Lösung und nicht die Alternative? Was passiert, wenn die zentrale Komponente ausfällt? Welche Schwachstellen und Schutzmaßnahmen gab es? Wie haben Sie getestet? Wo sind Sie vom Antrag abgewichen? Was würden Sie heute anders machen? Wie skaliert die Lösung bei doppelter Nutzerzahl?</p>
        <div class="callout achtung"><strong>Typische Fehler:</strong> Folien ablesen oder überladen, Zeit deutlich überziehen, eine „Verkaufsveranstaltung“ statt der eigenen Leistung und Entscheidungen, Begriffe auf den Folien, die man im Fachgespräch nicht erklären kann, keine Ersatzkopie der Präsentation (PDF auf USB-Stick, Ausdruck).</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Mündlich im zweiten Teil des Projekts. Der Ausschuss fragt zur Projektarbeit und ihrem fachlichen Umfeld – auch zu Themen, die weder in der Dokumentation noch in der Präsentation stehen. Übe deshalb „Was-wäre-wenn“-Fragen und erkläre jede Technik deines Projekts auch über das Projekt hinaus.</div>`
    },
  ],
  exercises: [
    {
      id: "e-sem-auftrag",
      topic: "grundlagen",
      title: "Sender-Empfänger-Modell: „mal eben den Drucker einrichten“",
      level: 1,
      exam: ["AP1"],
      task: `<p>Azubi Tim von der Nordlicht IT GmbH in Heide bekommt von seiner Ausbilderin im Teams-Chat die Nachricht: „Kannst du beim Kunden in Tellingstedt mal eben den Drucker einrichten?“ Tim fährt hin und installiert den Druckertreiber an <em>einem</em> PC. Gemeint war aber, den neuen Netzwerkdrucker an allen fünf Arbeitsplätzen einzurichten und die Scan-to-Mail-Funktion zu konfigurieren.</p>
        <p>a) Ordne der Situation die Elemente des Sender-Empfänger-Modells zu: Sender, Kodierung/Nachricht, Kanal, Empfänger/Dekodierung, Feedback. (5 P)</p>
        <p>b) Nenne zwei Störquellen, die hier gewirkt haben, und ordne sie jeweils einer Störungsart zu. (2 P)</p>
        <p>c) Formuliere eine Rückfrage, mit der Tim das Missverständnis hätte verhindern können. (2 P)</p>`,
      hints: ["Achte auf die Wörter „mal eben“ und „den Drucker“ – was sagen sie über den Umfang aus?", "Feedback ist die Rückmeldung vom Empfänger an den Sender."],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Element</th><th>in der Situation</th></tr></thead><tbody>
          <tr><td>Sender</td><td>die Ausbilderin, die den Auftrag vergibt</td></tr>
          <tr><td>Kodierung / Nachricht</td><td>Sie fasst ihren Gedanken (Drucker an fünf Plätzen + Scan-to-Mail) in den Satz „mal eben den Drucker einrichten“.</td></tr>
          <tr><td>Kanal</td><td>Teams-Chat (schriftlich und knapp, ohne Tonfall und Mimik; Rückfragen wären möglich, entstehen aber nur, wenn jemand aktiv nachfragt)</td></tr>
          <tr><td>Empfänger / Dekodierung</td><td>Tim versteht mit seinem Wissen: einen Drucker an einem PC installieren – eine kleine Aufgabe.</td></tr>
          <tr><td>Feedback</td><td>fehlt: Tim fragt nicht nach, die Ausbilderin fordert keine Bestätigung an.</td></tr>
        </tbody></table>
        <p><strong>b)</strong> (1) <em>Sprachliche Störung:</em> Die Nachricht ist unvollständig und mehrdeutig – Umfang (fünf Arbeitsplätze) und Zusatzfunktion (Scan-to-Mail) fehlen, „den Drucker einrichten“ lässt offen, an wie vielen PCs, und „mal eben“ lässt die Aufgabe klein erscheinen. (2) <em>Störung durch Kanal/Umgebung (technisch/Umgebung):</em> Im Chat werden Aufträge oft knapp und nebenbei geschrieben; ohne Tonfall und direkte Reaktion des Gegenübers fällt niemandem auf, dass Details fehlen – die kurze Nachricht wirkt vollständig, obwohl sie es nicht ist. (Auch vertretbar: <em>persönliche Störung</em>, z. B. Zeitdruck der Ausbilderin oder Tims Scheu, als Azubi nachzufragen.)</p>
        <p><strong>c)</strong> „Soll ich den Drucker nur an einem PC oder an allen Arbeitsplätzen einrichten, und gehört auch die Scanfunktion dazu?“ Mit dieser Rückfrage (Feedback) hätte Tim Umfang und Funktionen vor der Fahrt geklärt.</p>`
    },
    {
      id: "e-sem-faelle",
      topic: "grundlagen",
      title: "Drei unklare Nachrichten analysieren",
      level: 2,
      exam: ["AP1"],
      task: `<p>Analysiere die drei Situationen aus dem Alltag der Nordlicht IT GmbH. Kläre jeweils: (1) Was wurde tatsächlich gesendet? (2) Welche Annahme hat der Empfänger ergänzt? (3) Welche Folge hatte das? (4) Wie hätte eine eindeutige Nachricht oder Rückfrage gelautet? (je 4 P)</p>
        <p><strong>A:</strong> Der Teamleiter schreibt im Chat: „Bitte das Backup vom Fileserver prüfen.“ Die Kollegin schaut nur, ob der nächtliche Sicherungsjob grün ist. Gemeint war eine Test-Wiederherstellung einer Datei.</p>
        <p><strong>B:</strong> Ein Kunde ruft an: „Mein Outlook ist kaputt.“ Der Supporter setzt eine Stunde lang das Outlook-Profil neu auf. Tatsächlich sah der Kunde nur den Kalender seiner Kollegin nicht, weil die Freigabe fehlte.</p>
        <p><strong>C:</strong> Die Projektleiterin schreibt: „Die neuen Switches bitte bis Ende der Woche einbauen.“ Ein Techniker tauscht sie am Freitagvormittag während des laufenden Betriebs – das Netz steht 30 Minuten still. Vorgesehen war das Wartungsfenster am Samstag.</p>
        <p><strong>D:</strong> Entwickle für Störungsmeldungen per Ticket fünf Angaben, die nie fehlen sollten. (5 P)</p>`,
      solution: `<table><thead><tr><th></th><th>A</th><th>B</th><th>C</th></tr></thead><tbody>
          <tr><td>gesendet</td><td>„Backup prüfen“ – ohne zu sagen, wie geprüft werden soll</td><td>„Outlook ist kaputt“ – ohne Fehlerbild</td><td>„bis Ende der Woche“ – ohne Uhrzeit und ohne Hinweis auf das Wartungsfenster</td></tr>
          <tr><td>ergänzte Annahme</td><td>Prüfen heißt: Status des Jobs ansehen.</td><td>Das ganze Programm oder Profil ist defekt.</td><td>Irgendwann bis Freitag, also auch während der Arbeitszeit.</td></tr>
          <tr><td>Folge</td><td>Ob sich Daten wirklich wiederherstellen lassen, bleibt ungeprüft – ein falsches Sicherheitsgefühl entsteht.</td><td>Eine Stunde Arbeitszeit geht verloren, das eigentliche Problem bleibt.</td><td>30 Minuten Stillstand für alle Mitarbeitenden, Ärger beim Kunden.</td></tr>
          <tr><td>bessere Nachricht / Rückfrage</td><td>„Bitte stell heute testweise eine Datei aus der Sicherung von gestern wieder her und schreib mir das Ergebnis ins Ticket.“</td><td>„Was genau funktioniert nicht – Mails, Kalender, Start des Programms? Welche Meldung sehen Sie?“</td><td>„Bitte tausch die Switches im Wartungsfenster am Samstag ab 8 Uhr und melde dich, wenn alles läuft.“</td></tr>
        </tbody></table>
        <p><strong>D)</strong> 1. Name und Rückrufnummer des Meldenden, 2. betroffenes Gerät bzw. Anwendung (mit Inventarnummer), 3. genaue Fehlerbeschreibung und Fehlermeldung (Wortlaut oder Screenshot), 4. seit wann und bei welcher Aktion der Fehler auftritt, 5. wie viele Personen betroffen sind und was bereits versucht wurde. Diese Angaben verhindern, dass der Support – wie in B – eigene Annahmen ergänzen muss.</p>`
    },
    {
      id: "e-vs-rueckruf",
      topic: "vier-seiten",
      title: "Vier-Seiten-Modell: „Ich warte seit zwei Stunden auf Ihren Rückruf!“",
      level: 2,
      exam: ["AP1"],
      task: `<p>Frau Jensen, Büroleiterin einer Steuerkanzlei in Husum, ruft bei der Nordlicht IT GmbH an: „Ich warte jetzt schon seit zwei Stunden auf Ihren Rückruf!“ Azubi Lukas antwortet: „Wir haben halt noch andere Kunden.“</p>
        <p>a) Analysiere die Aussage von Frau Jensen mit dem Vier-Seiten-Modell. Formuliere für jede Seite eine plausible Botschaft. (4 P)</p>
        <p>b) Erläutere, mit welchem Ohr Lukas die Aussage vermutlich gehört hat. Belege deine Einschätzung an seiner Antwort. (2 P)</p>
        <p>c) Beschreibe die Wirkung seiner Antwort auf Frau Jensen. (2 P)</p>
        <p>d) Formuliere eine professionelle Antwort, die auf alle vier Seiten eingeht. (3 P)</p>`,
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Seite</th><th>Botschaft</th></tr></thead><tbody>
          <tr><td>Sachinhalt</td><td>Seit zwei Stunden ist der zugesagte Rückruf nicht erfolgt.</td></tr>
          <tr><td>Selbstkundgabe</td><td>Ich bin verärgert und stehe unter Druck, weil meine Arbeit stockt.</td></tr>
          <tr><td>Beziehung</td><td>Ihr nehmt mich als Kundin nicht ernst und haltet eure Zusagen nicht ein.</td></tr>
          <tr><td>Appell</td><td>Kümmern Sie sich jetzt sofort um mein Problem!</td></tr>
        </tbody></table>
        <p><strong>b)</strong> Lukas hört vor allem mit dem <strong>Beziehungs-Ohr</strong>. Er versteht die Aussage als Vorwurf („Ihr seid unzuverlässig“) und verteidigt sich mit „Wir haben halt noch andere Kunden“. Auf den Sachinhalt (fehlender Rückruf) und den Appell (jetzt helfen) geht er gar nicht ein.</p>
        <p><strong>c)</strong> Die Antwort wirkt auf Frau Jensen abwertend: Sie hört auf der Beziehungsseite „Sie sind nicht so wichtig“. Ihr Ärger steigt, das Gespräch eskaliert, und das Vertrauen in die Nordlicht IT GmbH sinkt – eventuell beschwert sie sich bei der Geschäftsführung.</p>
        <p><strong>d)</strong> „Das tut mir leid, Frau Jensen – zwei Stunden Warten sind ärgerlich, wenn Ihre Arbeit stillsteht (Selbstkundgabe anerkannt). Danke, dass Sie sich noch einmal melden (Beziehung). Ich übernehme Ihr Anliegen jetzt direkt: Worum geht es genau? (Sache) Ich bleibe dran, bis wir eine Lösung haben (Appell).“</p>`
    },
    {
      id: "e-vs-rollout",
      topic: "vier-seiten",
      title: "Prüfungsnah: Missverständnis beim Rollout erklären",
      level: 3,
      exam: ["AP1"],
      task: `<p>Die Nordlicht IT GmbH richtet für ein Ingenieurbüro in Büsum zwölf neue Arbeitsplätze ein. Azubi Emma behebt gerade eine dringende Störung: Der Plotter der Konstruktionsabteilung ist ausgefallen, drei Zeichner warten. Im Vorbeigehen sagt die Projektleiterin: „Die Dokumentation vom Switch-Tausch fehlt übrigens noch.“ Emma unterbricht sofort die Störung und schreibt die Dokumentation. Eine Stunde später beschwert sich der Kunde über den immer noch defekten Plotter. Die Projektleiterin ist verärgert – sie hatte die Dokumentation bis Freitag gemeint.</p>
        <p>a) Analysiere die Aussage der Projektleiterin mit dem Vier-Seiten-Modell. (4 P)</p>
        <p>b) Erläutere mit dem Vier-Ohren-Modell, wie das Missverständnis entstanden ist. (3 P)</p>
        <p>c) Beschreibe mit dem Sender-Empfänger-Modell zwei Stellen, an denen das Missverständnis hätte verhindert werden können – je eine auf Sender- und auf Empfängerseite. (4 P)</p>
        <p>d) Nenne eine Grenze des Vier-Seiten-Modells bei diesem Fall. (1 P)</p>`,
      hints: ["Welche Seite wollte die Projektleiterin vermutlich betonen – und welche hat Emma gehört?"],
      solution: `<p><strong>a)</strong> <em>Sachinhalt:</em> Die Dokumentation zum Switch-Tausch liegt noch nicht vor. <em>Selbstkundgabe:</em> Ich behalte den Überblick über offene Punkte im Projekt (ggf. auch: Ich mache mir Gedanken wegen der Abnahme). <em>Beziehung:</em> Ich erwarte, dass du auch an die Dokumentation denkst – ich vertraue darauf, dass du das erledigst. <em>Appell:</em> Denk an die Dokumentation und erstelle sie.</p>
        <p><strong>b)</strong> Die Projektleiterin meinte vor allem einen Sachhinweis mit einem zeitlich offenen Appell („bei Gelegenheit, bis Freitag“). Emma hat die Aussage vor allem mit dem <strong>Appell-Ohr</strong> gehört – wahrscheinlich verstärkt durch das komplementäre Verhältnis Projektleiterin – Azubi: Eine Aussage der Vorgesetzten versteht sie als sofort auszuführende Anweisung. Weil Sender und Empfänger unterschiedliche Seiten betonen, handelt Emma anders als gewünscht: Sie lässt die dringendere Störung liegen.</p>
        <p><strong>c)</strong> <em>Senderseite (Kodierung):</em> Die Projektleiterin hätte Frist und Priorität ausdrücklich nennen müssen, z. B. „Bitte schreib die Doku zum Switch-Tausch bis Freitag – erst nach der Plotter-Störung.“ <em>Empfängerseite (Dekodierung/Feedback):</em> Emma hätte mit einer Rückfrage Feedback einholen können: „Soll ich die Doku jetzt sofort schreiben oder erst die Plotter-Störung beheben?“ Damit wäre die ergänzte Annahme „sofort“ aufgefallen.</p>
        <p><strong>d)</strong> Das Modell liefert nur Deutungen: Welche Seite die Projektleiterin wirklich betonen wollte, lässt sich nicht sicher feststellen. Außerdem erklärt es nicht, warum Emma keine Prioritäten gesetzt hat (fehlende Priorisierungsregel im Team).</p>`
    },
    {
      id: "e-wz-nennen",
      topic: "watzlawick",
      title: "Die fünf Axiome nennen und erläutern (AFB I)",
      level: 1,
      task: `<p>Nenne die fünf Axiome nach Watzlawick. Erläutere jedes Axiom in eigenen Worten und gib jeweils ein Beispiel aus dem IT-Alltag an. (je 2 P, gesamt 10 P)</p>`,
      hints: ["Eselsbrücke: Nie Ist Irgendwer Der Schuldige."],
      solution: `<ol>
          <li><strong>Man kann nicht nicht kommunizieren.</strong> Jedes Verhalten hat eine Wirkung und wird gedeutet – auch Schweigen oder Nichtstun. <em>Beispiel:</em> Ein Kunde erhält drei Tage keine Antwort auf sein Ticket und schließt daraus, dass sich niemand kümmert.</li>
          <li><strong>Jede Kommunikation hat einen Inhalts- und einen Beziehungsaspekt; der Beziehungsaspekt bestimmt den Inhalt.</strong> Wie die Beteiligten zueinander stehen, entscheidet, wie eine Sachaussage verstanden wird. <em>Beispiel:</em> „Hast du das Backup geprüft?“ ist unter Kollegen mit gutem Verhältnis eine Frage, nach einem Streit ein Kontrollvorwurf.</li>
          <li><strong>Die Beziehung ist durch die Interpunktion der Abläufe bedingt.</strong> Jeder setzt den Anfang einer Abfolge anders und sieht sein Verhalten als Reaktion auf den anderen; so entsteht ein Teufelskreis. <em>Beispiel:</em> Der Support antwortet knapp, weil der Kunde unfreundlich ist – der Kunde ist unfreundlich, weil der Support so knapp antwortet.</li>
          <li><strong>Menschen kommunizieren digital und analog.</strong> Digital sind die Worte, analog sind Tonfall, Mimik, Gestik oder Emojis. Widersprechen sich beide, glaubt man meist der analogen Seite. <em>Beispiel:</em> „Gern erledigt“ mit genervtem Seufzer am Telefon.</li>
          <li><strong>Kommunikation ist symmetrisch oder komplementär.</strong> Symmetrisch heißt auf Augenhöhe, komplementär heißt ungleiche, sich ergänzende Rollen. <em>Beispiel:</em> Zwei Admins diskutieren gleichberechtigt über eine Firewall-Regel (symmetrisch); der Teamleiter gibt dem Azubi eine Anweisung (komplementär).</li>
        </ol>`
    },
    {
      id: "e-wz-zuordnen",
      topic: "watzlawick",
      title: "Axiome begründet zuordnen (AFB II)",
      level: 2,
      task: `<p>Ordne jedem Fall das am besten passende Axiom zu und begründe deine Wahl am Text. (je 3 P)</p>
        <p><strong>A:</strong> Ein Kunde beantwortet drei Rückfragen im Ticket nicht. Der Supporter schreibt in die Notiz: „Kunde hat offenbar kein Interesse mehr.“</p>
        <p><strong>B:</strong> Admin Kai: „Ich spiele Updates so spät ein, weil ihr eure Testfälle nie rechtzeitig liefert.“ Entwicklerin Sara: „Wir liefern spät, weil ihr ständig kurzfristig die Termine verschiebt.“</p>
        <p><strong>C:</strong> Der Teamleiter bittet Azubi Finn, die Präsentation für den Kunden vorzubereiten. Finn sagt „Ja, mach ich“, seufzt dabei hörbar und schaut zum Fenster.</p>
        <p><strong>D:</strong> Der Geschäftsführer eines Kunden erklärt dem Techniker genau, wie er das WLAN konfigurieren soll. Der Techniker widerspricht, weil die Einstellung unsicher wäre. Der Geschäftsführer reagiert gereizt: „Wer bezahlt hier wen?“</p>
        <p><strong>E:</strong> Nach einem heftigen Streit in der Vorwoche fragt die Teamleiterin: „Hast du den Patch schon eingespielt?“ Der Kollege antwortet: „Vertrau mir doch einfach mal!“</p>
        <p><strong>F:</strong> Wähle Fall B und beschreibe, wie sich die Kommunikation entwickelt, wenn niemand sein Verhalten ändert. Nenne einen Ausweg. (3 P)</p>`,
      solution: `<p><strong>A – Axiom 1 (Man kann nicht nicht kommunizieren):</strong> Obwohl der Kunde nichts schreibt, wird sein Schweigen als Botschaft gedeutet („kein Interesse“). Die Deutung kann falsch sein – vielleicht ist er im Urlaub. Das Verhalten wirkt trotzdem.</p>
        <p><strong>B – Axiom 3 (Interpunktion):</strong> Beide sehen ihr Verhalten als Reaktion auf den anderen („weil ihr …“ – „weil ihr …“). Jeder setzt den Beginn der Ursache-Wirkungs-Kette beim anderen, daraus entsteht ein Teufelskreis ohne erkennbaren Anfang.</p>
        <p><strong>C – Axiom 4 (digital und analog):</strong> Die Worte „Ja, mach ich“ (digital) sagen Zustimmung, Seufzer und abgewandter Blick (analog) signalisieren Unlust. Die Ebenen widersprechen sich; der Teamleiter wird eher der analogen Botschaft glauben.</p>
        <p><strong>D – Axiom 5 (symmetrisch/komplementär):</strong> Der Geschäftsführer beansprucht eine komplementäre, übergeordnete Rolle („Wer bezahlt hier wen?“), der Techniker handelt als Fachexperte auf Augenhöhe bzw. mit eigenem Expertenstatus. Die Rollen werden nicht gemeinsam akzeptiert – daraus entsteht der Konflikt.</p>
        <p><strong>E – Axiom 2 (Inhalts- und Beziehungsaspekt):</strong> Inhaltlich ist es eine einfache Statusfrage. Wegen der belasteten Beziehung hört der Kollege Misstrauen und antwortet nur auf der Beziehungsebene („Vertrau mir“). Die Beziehung bestimmt, wie der Inhalt ankommt.</p>
        <p><strong>F:</strong> Kai verschiebt Updates immer weiter, Sara liefert daraufhin noch später, weil Termine unsicher sind; jeder sieht sich bestätigt, die Vorwürfe werden schärfer, und am Ende bleiben Sicherheitsupdates liegen. Ausweg: Metakommunikation – beide sprechen über das Muster statt über Schuld („Wir blockieren uns gegenseitig. Lass uns feste Liefertermine und ein festes Wartungsfenster vereinbaren“).</p>`
    },
    {
      id: "e-ich-umformulieren",
      topic: "ich-botschaft-feedback",
      title: "Du-Botschaften in Ich-Botschaften umwandeln",
      level: 2,
      exam: ["AP1"],
      task: `<p>Formuliere die Aussagen in echte Ich-Botschaften um (Wahrnehmung → Wirkung mit Begründung → Wunsch). (je 3 P)</p>
        <ol>
          <li>„Du kommst ja nie pünktlich zum Daily.“</li>
          <li>„Ihr im Vertrieb verkauft den Kunden ständig Sachen, die technisch gar nicht gehen.“</li>
          <li>„Du hast das Passwort schon wieder im Klartext in den Chat gepostet – das ist total verantwortungslos.“</li>
        </ol>
        <p>4. Beurteile die Aussage „Ich finde, du bist beim Dokumentieren echt schlampig.“ Handelt es sich um eine Ich-Botschaft? (2 P)</p>`,
      solution: `<ol>
          <li>„Du bist heute und am Montag etwa zehn Minuten nach Beginn ins Daily gekommen (Wahrnehmung). Ich muss den Stand dann noch einmal erklären, und das Meeting wird länger, obwohl alle an ihre Tickets wollen (Wirkung). Bitte sei um 9 Uhr da oder schreib mir kurz, wenn es nicht klappt (Wunsch).“</li>
          <li>„Im letzten Monat wurden zwei Kunden Funktionen zugesagt, die unser VPN nicht unterstützt (Wahrnehmung). Wir müssen die Kunden dann enttäuschen, und das kostet uns viel Zeit und Vertrauen (Wirkung). Ich wünsche mir, dass ihr technische Zusagen vorher kurz mit uns abstimmt – wir antworten innerhalb eines Tages (Wunsch).“</li>
          <li>„Im Projektchat stand heute Morgen das Admin-Passwort im Klartext (Wahrnehmung). Das beunruhigt mich, weil jeder im Chat – auch Externe – es lesen kann und wir es jetzt ändern müssen (Wirkung). Bitte gib Passwörter nur über den Passwortmanager weiter (Wunsch).“</li>
        </ol>
        <p>4. Das ist <strong>keine</strong> echte Ich-Botschaft, sondern eine verkleidete Du-Botschaft: Nur „Ich finde“ bezieht sich auf den Sprecher, danach folgt eine abwertende Bewertung des anderen („schlampig“). Es fehlen eine konkrete Wahrnehmung, die eigene Wirkung mit Begründung und ein Wunsch. Der Kollege wird sich wahrscheinlich angegriffen fühlen und sich verteidigen.</p>`
    },
    {
      id: "e-feedback-praes",
      topic: "ich-botschaft-feedback",
      title: "Feedback nach einer Präsentation geben und nehmen",
      level: 2,
      exam: ["AP1"],
      task: `<p>Im Berufsschulunterricht hat Leonie eine Präsentation zum Thema „Backup-Strategien“ gehalten. Ein Mitschüler gibt ihr folgendes Feedback: „Das war langweilig. Du hast eh nur abgelesen, und deine Folien waren viel zu voll.“</p>
        <p>a) Nenne vier Regeln für das Geben von Feedback, gegen die hier verstoßen wurde. (4 P)</p>
        <p>b) Formuliere das Feedback so um, dass es die Regeln einhält. (4 P)</p>
        <p>c) Nenne drei Regeln, die Leonie beim Annehmen des Feedbacks beachten sollte. (3 P)</p>
        <p>d) Erkläre mit dem Johari-Fenster, welchen Nutzen gutes Feedback für Leonie hat. (2 P)</p>`,
      solution: `<p><strong>a)</strong> (1) Bewertend statt beschreibend („langweilig“). (2) Verallgemeinernd statt konkret („nur abgelesen“, „eh“). (3) Du-Form statt Ich-Form. (4) Nur Kritik, keine positiven Aspekte und keine Verbesserungsvorschläge (nicht konstruktiv).</p>
        <p><strong>b)</strong> „Mir hat gefallen, dass du die 3-2-1-Regel mit einem eigenen Beispiel aus deinem Betrieb erklärt hast. Bei den Folien zu inkrementeller und differenzieller Sicherung habe ich gesehen, dass du viel vom Bildschirm abgelesen hast; ich hatte dadurch Mühe, dir zu folgen, weil der Blickkontakt fehlte. Auf diesen Folien standen etwa zehn Zeilen Text – mit Stichworten und einer Grafik könnte ich die Unterschiede leichter erfassen.“</p>
        <p><strong>c)</strong> Zuhören und ausreden lassen; sich nicht rechtfertigen oder verteidigen; bei Unklarheiten nachfragen; sich für das Feedback bedanken; selbst entscheiden, was sie umsetzt. (drei davon)</p>
        <p><strong>d)</strong> Feedback verkleinert Leonies <strong>blinden Fleck</strong> – den Bereich ihres Verhaltens, den andere wahrnehmen, sie selbst aber nicht (z. B. dass sie viel abliest). Dadurch wächst der freie Bereich, und sie kann ihr Verhalten gezielt verbessern.</p>`
    },
    {
      id: "e-ich-klaerung",
      topic: "ich-botschaft-feedback",
      title: "Prüfungsnah (AFB III): Kritik unter Kollegen klären",
      level: 3,
      task: `<p>Im Service Desk der Nordlicht IT GmbH setzt Jana Tickets häufig auf „gelöst“, ohne beim Kunden nachzufragen, ob das Problem wirklich behoben ist. Diese Woche haben zwei Kunden verärgert erneut angerufen. In der Teeküche sagt Ole vor mehreren Kolleginnen und Kollegen: „Ich finde, du machst es dir mit deinen Tickets echt zu leicht.“ Jana antwortet: „Dann mach die Hotline doch allein, wenn du alles besser kannst.“</p>
        <p>a) Beurteile, ob Oles Aussage eine Ich-Botschaft ist. (3 P)</p>
        <p>b) Beurteile Ort und Rahmen des Gesprächs und schlage einen besseren vor. (2 P)</p>
        <p>c) Erkläre Janas Reaktion mit dem Vier-Ohren-Modell. (2 P)</p>
        <p>d) Formuliere für Ole eine echte Ich-Botschaft. (3 P)</p>
        <p>e) Entwickle einen Gesprächsverlauf aus vier Äußerungen (Ole – Jana – Ole – Jana), in dem Ole aktiv zuhört und beide eine konkrete Vereinbarung treffen. (4 P)</p>`,
      hints: ["Test für Ich-Botschaften: Folgt auf das „Ich“ ein eigenes Gefühl oder Problem – oder ein Urteil über den anderen?", "Aktives Zuhören: paraphrasieren (Inhalt) und verbalisieren (Gefühl)."],
      solution: `<p><strong>a)</strong> Es ist <strong>keine</strong> echte Ich-Botschaft, sondern eine verkleidete Du-Botschaft. Nur „Ich finde“ bezieht sich auf Ole, danach folgt eine Bewertung von Jana („machst es dir zu leicht“), die Bequemlichkeit unterstellt. Es fehlen eine konkrete Wahrnehmung (welche Tickets?), die Wirkung auf Ole mit Begründung und ein Wunsch für die Zukunft.</p>
        <p><strong>b)</strong> Kritik vor Publikum in der Teeküche stellt Jana bloß; sie muss ihr Gesicht wahren und verteidigt sich deshalb eher. Besser: zeitnah, aber unter vier Augen und zu einem ruhigen Zeitpunkt, z. B. nach Schichtende im Besprechungsraum mit kurzer Ankündigung („Hast du nachher zehn Minuten für mich?“).</p>
        <p><strong>c)</strong> Jana hört vor allem mit dem <strong>Beziehungs-Ohr</strong>: Sie versteht „Du arbeitest schlampig und bequem“ und reagiert mit Gegenangriff („Dann mach die Hotline doch allein“). Sachinhalt (zwei Kunden haben erneut angerufen) und Appell (vor dem Schließen nachfragen) kommen bei ihr gar nicht an – zumal Ole beides nicht ausgesprochen hat.</p>
        <p><strong>d)</strong> „Diese Woche haben mich zwei Kunden erneut angerufen, deren Tickets schon als gelöst geschlossen waren – bei beiden bestand das Problem weiterhin (Wahrnehmung). Das hat mich unter Druck gesetzt, weil die Kunden sehr verärgert waren und ich die Fälle ohne Vorgeschichte neu aufrollen musste (Wirkung). Ich wünsche mir, dass wir vor dem Schließen kurz beim Kunden nachfragen, ob alles funktioniert (Wunsch).“</p>
        <p><strong>e)</strong><br>
        <em>Ole:</em> „(Ich-Botschaft aus d) … Wie siehst du das?“<br>
        <em>Jana:</em> „Ich schließe die Tickets so schnell, weil kein Ticket länger als 24 Stunden offen bleiben soll. Wenn ich jeden Kunden anrufe, schaffe ich das nicht.“<br>
        <em>Ole:</em> „Du stehst also wegen der Vorgabe unter Zeitdruck und hast keine Zeit für Rückrufe (paraphrasieren). Das ist wirklich stressig, das geht mir oft genauso (verbalisieren). Was hältst du davon: Wir setzen solche Tickets auf ‚gelöst – wartet auf Bestätigung‘, schicken dem Kunden eine kurze Mail, und das Ticket schließt sich nach zwei Werktagen automatisch, wenn er sich nicht meldet?“<br>
        <em>Jana:</em> „Einverstanden. Ab heute schicke ich bei jedem gelösten Ticket die Bestätigungsmail, und morgen im Daily fragen wir die Teamleitung, ob der Status eingerichtet werden kann.“<br>
        Die Vereinbarung ist konkret (Was: Bestätigungsmail und neuer Status; Wer: Jana und beide gemeinsam; Wann: ab heute bzw. morgen im Daily).</p>`
    },
    {
      id: "e-fragen-bedarf",
      topic: "zuhoeren-fragen",
      title: "Bedarfsanalyse mit Fragetechniken",
      level: 2,
      exam: ["AP1"],
      task: `<p>Ein Pflegedienst in Wesselburen möchte seine zwölf Pflegekräfte mit mobilen Endgeräten für die Dokumentation beim Patienten ausstatten. Du bereitest das Erstgespräch mit der Pflegedienstleitung vor.</p>
        <p>a) Formuliere drei offene und drei geschlossene Fragen für die Bedarfsanalyse. (6 P)</p>
        <p>b) Bestimme die Frageart der folgenden Fragen. (5 P)<br>
        1. „Sie wollen doch sicher auch eine Hülle, die Stürze aushält?“<br>
        2. „Soll die Dokumentation offline oder nur mit Mobilfunkverbindung funktionieren?“<br>
        3. „Wie sieht ein typischer Arbeitstag einer Pflegekraft aus?“<br>
        4. „Habe ich richtig verstanden, dass die Daten täglich ins Büro übertragen werden sollen?“<br>
        5. „Nutzen Ihre Mitarbeitenden bereits Smartphones?“</p>
        <p>c) Die Leitung sagt: „Die Geräte müssen robust sein, meine Leute haben keine Zeit für Technikprobleme, und das Budget ist knapp.“ Formuliere eine Antwort, in der du aktiv zuhörst (paraphrasieren und verbalisieren). (2 P)</p>
        <p>d) Nenne je einen Vor- und einen Nachteil offener Fragen in einem schriftlichen Fragebogen. (2 P)</p>`,
      solution: `<p><strong>a)</strong> Offene Fragen: „Welche Daten erfassen Ihre Pflegekräfte beim Patienten?“ – „Welche Software nutzen Sie für die Pflegedokumentation?“ – „Wie werden die Daten heute ins Büro übertragen?“<br>
        Geschlossene Fragen: „Gibt es in allen Einsatzgebieten ausreichend Mobilfunkempfang?“ – „Sollen die Geräte auch privat genutzt werden dürfen?“ – „Ist ein Budget pro Gerät bereits festgelegt?“</p>
        <p><strong>b)</strong> 1. Suggestivfrage („doch sicher“ legt die Antwort nahe). 2. Alternativfrage (zwei Möglichkeiten zur Auswahl). 3. offene Frage (W-Frage, freie Antwort). 4. Kontrollfrage (sichert das Verständnis). 5. geschlossene Frage (Antwort Ja/Nein).</p>
        <p><strong>c)</strong> „Sie brauchen also Geräte, die im Alltag einfach funktionieren und einiges aushalten, ohne dass das Budget gesprengt wird (Paraphrasieren). Ich höre heraus, dass Ihnen vor allem wichtig ist, Ihre Mitarbeitenden nicht zusätzlich zu belasten (Verbalisieren). Stimmt das so?“</p>
        <p><strong>d)</strong> Vorteil: Die Befragten können eigene, auch unerwartete Anforderungen nennen. Nachteil: Die Antworten sind schwer auszuwerten und zu vergleichen; viele Befragte lassen offene Felder leer.</p>`
    },
    {
      id: "e-kunde-beratung",
      topic: "kundengespraech",
      title: "Prüfungsnah: Supportanruf und Beratung eines Laien",
      level: 3,
      exam: ["AP1"],
      task: `<p>Herr Thode, Inhaber einer Tischlerei in Brunsbüttel, ruft bei der Nordlicht IT GmbH an. Er möchte, dass seine Büroleiterin künftig zwei Tage pro Woche von zu Hause arbeitet und dabei auf die Auftragsdaten im Betrieb zugreift. Er selbst hat wenig IT-Kenntnisse.</p>
        <p>a) Beschreibe die sechs Phasen, nach denen du das Telefonat strukturierst, jeweils mit einem konkreten Satz oder einer Handlung aus diesem Gespräch. (6 P)</p>
        <p>b) Erkläre Herrn Thode laienverständlich und fachlich korrekt, was ein VPN ist und warum es hier nötig ist. (3 P)</p>
        <p>c) Du empfiehlst ein Notebook mit Dockingstation. Formuliere ein Argument nach dem Schema Merkmal – Vorteil – Nutzen. (3 P)</p>
        <p>d) Herr Thode sagt: „Das ist mir alles viel zu teuer.“ Beschreibe, wie du mit diesem Einwand umgehst, und formuliere eine Antwort. (3 P)</p>`,
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Phase</th><th>im Gespräch</th></tr></thead><tbody>
          <tr><td>1. Eröffnung</td><td>„Nordlicht IT GmbH, Sie sprechen mit … Was kann ich für Sie tun?“ – Name, Firma, Rückrufnummer notieren.</td></tr>
          <tr><td>2. Anliegen klären</td><td>offene Fragen: „Mit welchen Programmen arbeitet Ihre Büroleiterin?“, „Wo liegen die Auftragsdaten?“; aktiv zuhören.</td></tr>
          <tr><td>3. Verständnis sichern</td><td>„Ich fasse zusammen: Frau … soll zwei Tage pro Woche von zu Hause sicher auf Auftragsverwaltung und Dateiserver zugreifen. Richtig?“</td></tr>
          <tr><td>4. Lösung / Angebot</td><td>Lösung verständlich erklären (Notebook, VPN, Mehr-Faktor-Anmeldung), ggf. Alternativen nennen.</td></tr>
          <tr><td>5. Vereinbarung</td><td>„Ich schicke Ihnen bis Donnerstag ein Angebot; Ihre Anfrage hat die Nummer 5823.“</td></tr>
          <tr><td>6. Abschluss</td><td>offene Fragen klären, freundlich verabschieden, Gespräch im Ticket bzw. CRM dokumentieren.</td></tr>
        </tbody></table>
        <p><strong>b)</strong> „Ein VPN ist wie ein abgeschlossener, blickdichter Tunnel durch das Internet: Das Notebook Ihrer Büroleiterin baut von zu Hause eine verschlüsselte Verbindung zu Ihrem Betrieb auf. Für die Programme sieht es dann so aus, als säße sie im Büro. Ohne einen solchen geschützten Zugang wären die Auftragsdaten auf dem Weg durchs Internet ungeschützt – Fremde könnten mitlesen oder sich Zugang zu Ihrem Firmennetz verschaffen.“</p>
        <p><strong>c)</strong> „Das Notebook wird mit einer Dockingstation geliefert (Merkmal). Im Büro und zu Hause steckt Ihre Büroleiterin nur ein Kabel ein und hat sofort Monitor, Tastatur und Netzwerk (Vorteil). Dadurch kann sie an beiden Orten ohne Umbauen und ohne doppelte Geräte arbeiten, und Sie kaufen nur einen Rechner (Nutzen).“</p>
        <p><strong>d)</strong> Einwand ernst nehmen und nicht widersprechen, sondern nachfragen, womit er vergleicht, und den Nutzen dagegenstellen: „Ich verstehe, dass Sie auf die Kosten achten müssen. Darf ich fragen, mit welchem Betrag Sie gerechnet haben? Wenn Ihre Büroleiterin zwei Tage pro Woche nicht pendeln muss, gewinnt sie Arbeitszeit. Wir können auch mit einem Gerät aus Ihrem Bestand und nur dem VPN starten – das senkt die Kosten deutlich.“</p>`
    },
    {
      id: "e-kunde-eskalation",
      topic: "kundengespraech",
      title: "Funktional oder hierarchisch eskalieren – und es dem Kunden sagen",
      level: 1,
      exam: ["AP1"],
      task: `<p>Im Service Desk der Nordlicht IT GmbH gehen an einem Vormittag folgende Fälle ein:</p>
        <ol>
          <li>Eine Mitarbeiterin einer Steuerkanzlei in Meldorf kann seit heute keine Serienbriefe aus dem Mandantenprogramm drucken. Du findest die Ursache im 1st Level nicht.</li>
          <li>Ein Kunde möchte, dass am Sonntag ein Techniker kommt. Wochenendeinsätze muss die Teamleitung genehmigen.</li>
          <li>Der 2nd Level vermutet einen Firmwarefehler im Switch und eröffnet einen Supportfall beim Hersteller.</li>
          <li>Bei einem Ticket mit Priorität 1 läuft die vereinbarte Lösungszeit (SLA) in 30 Minuten ab. Die Teamleitung soll zusätzliches Personal einteilen.</li>
        </ol>
        <p>a) Entscheide für jeden Fall: funktionale oder hierarchische Eskalation? Begründe kurz. (4 P)</p>
        <p>b) Du gibst Fall 1 an den 2nd Level weiter. Formuliere, was du der Anruferin am Telefon sagst. (3 P)</p>
        <p>c) Nenne drei Angaben, die du bei der Übergabe ins Ticket schreibst, damit der 2nd Level die Kundin nicht noch einmal dasselbe fragen muss. (3 P)</p>`,
      hints: ["Frage dich: Fehlt Fachwissen – oder fehlt eine Entscheidungsbefugnis?"],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Fall</th><th>Eskalation</th><th>Begründung</th></tr></thead><tbody>
          <tr><td>1</td><td>funktional</td><td>Es fehlt Fachwissen zur Software; das Ticket geht horizontal an die Anwendungsspezialisten im 2nd Level.</td></tr>
          <tr><td>2</td><td>hierarchisch</td><td>Es fehlt die Befugnis, einen Wochenendeinsatz zu genehmigen; der Fall geht vertikal an die Teamleitung.</td></tr>
          <tr><td>3</td><td>funktional</td><td>Der Hersteller (3rd Level) hat das tiefste Fachwissen zur Firmware.</td></tr>
          <tr><td>4</td><td>hierarchisch</td><td>Die Teamleitung soll mit ihrer Weisungsbefugnis Personal umplanen, damit der SLA eingehalten wird.</td></tr>
        </tbody></table>
        <p><strong>b)</strong> „Frau Petersen, ich habe Ihr Problem mit dem Serienbriefdruck genau aufgenommen. Da die Ursache vermutlich im Mandantenprogramm selbst liegt, gebe ich Ihr Ticket jetzt an unsere Anwendungsspezialisten weiter – dort kennt man diese Software am besten. Herr Jensen meldet sich spätestens um 11:30 Uhr bei Ihnen. Ihre Ticketnummer ist 6051. Kann ich sonst noch etwas für Sie tun?“ Die Kundin erfährt, <em>dass</em> und <em>warum</em> weitergegeben wird, <em>wer</em> sich <em>bis wann</em> meldet und unter welcher Nummer der Vorgang läuft.</p>
        <p><strong>c)</strong> (1) Genaues Fehlerbild mit Wortlaut der Fehlermeldung bzw. Screenshot, (2) bereits durchgeführte Schritte und ihr Ergebnis, (3) betroffener Arbeitsplatz bzw. Nutzer und seit wann der Fehler auftritt; außerdem möglich: Rückrufnummer und Erreichbarkeit der Kundin, Priorität und zugesagter Rückrufzeitpunkt.</p>`
    },
    {
      id: "e-deesk-kasse",
      topic: "deeskalation",
      title: "Prüfungsnah: Aufgebrachte Kundin am Samstagmorgen",
      level: 3,
      exam: ["AP1"],
      task: `<p>Samstag, 7:50 Uhr. Die Inhaberin eines Hofladens in Meldorf ruft beim Bereitschaftsdienst der Nordlicht IT GmbH an: „Ihr Kassensystem ist schon wieder abgestürzt! Die Kunden stehen Schlange, und Sie sitzen gemütlich zu Hause. Das ist eine Frechheit!“ Der Techniker antwortet: „Jetzt beruhigen Sie sich erst mal. Am Wochenende kann ich da nicht viel machen. Haben Sie das Gerät überhaupt schon neu gestartet?“</p>
        <p>a) Nenne drei Fehler in der Reaktion des Technikers und erläutere ihre Wirkung. (6 P)</p>
        <p>b) Beschreibe ein Vorgehen zur Deeskalation in vier Schritten. (4 P)</p>
        <p>c) Formuliere eine vollständige deeskalierende Antwort des Technikers. (3 P)</p>
        <p>d) Die Kundin beleidigt den Techniker im weiteren Gespräch persönlich. Beschreibe, wie er professionell reagiert. (2 P)</p>`,
      solution: `<p><strong>a)</strong> (1) „Jetzt beruhigen Sie sich erst mal“ ist eine Aufforderung von oben herab; die Kundin fühlt sich nicht ernst genommen und wird eher lauter. (2) „Am Wochenende kann ich da nicht viel machen“ verweigert Hilfe und nennt keine Alternative – das verstärkt Hilflosigkeit und Ärger. (3) „Haben Sie das Gerät überhaupt schon neu gestartet?“ ist eine unterstellende, fast suggestive Frage; „überhaupt“ wirkt auf der Beziehungsseite wie „Sie haben bestimmt etwas falsch gemacht“. Insgesamt reagiert der Techniker mit dem Beziehungs-Ohr auf den Vorwurf „Sie sitzen gemütlich zu Hause“ und schlägt zurück.</p>
        <p><strong>b)</strong> 1. Ruhe bewahren und nicht persönlich nehmen, ruhig und langsam sprechen. 2. Ausreden lassen und aktiv zuhören. 3. Verständnis zeigen und das Gefühl benennen. 4. Auf die Sachebene lenken und ein konkretes Ergebnis vereinbaren (Lösung oder nächster Schritt mit Zeitangabe), danach nachfassen.</p>
        <p><strong>c)</strong> „Das ist am Samstagmorgen mit vollem Laden wirklich das Letzte, was Sie gebrauchen können – ich verstehe Ihren Ärger. Ich helfe Ihnen jetzt sofort. Damit Sie weiterverkaufen können: Nutzen Sie bitte vorübergehend die Notfallkasse und notieren Sie die Verkäufe. Ich verbinde mich in diesem Moment per Fernwartung mit dem Kassensystem. Welche Meldung sehen Sie gerade auf dem Bildschirm? In zehn Minuten sage ich Ihnen, ob ich es aus der Ferne lösen kann oder ob ich vorbeikomme.“</p>
        <p><strong>d)</strong> Er setzt eine klare Grenze mit Ich-Botschaft und Konsequenz: „Ich möchte Ihnen helfen. Wenn Sie mich weiter beleidigen, beende ich das Gespräch und rufe Sie in 15 Minuten zurück.“ Bei weiteren Beleidigungen beendet er das Gespräch, informiert die Vorgesetzte (hierarchische Eskalation) und dokumentiert den Vorfall sachlich im Ticket.</p>`
    },
    {
      id: "e-deesk-mail",
      topic: "deeskalation",
      title: "Schriftliche Beschwerde deeskalierend beantworten",
      level: 2,
      exam: ["AP1"],
      task: `<p>Mittwoch, 23.09.2026, 9:12 Uhr. Frau Albers, Inhaberin einer Ferienhausvermittlung in Büsum, schreibt an den Service der Nordlicht IT GmbH:</p>
        <p><em>„Seit Ihrem Update am Montag stürzt unser Buchungsprogramm ständig ab! Das ist schon das dritte Mal in diesem Jahr, dass Ihre Firma bei uns etwas kaputt macht. Wenn das bis Freitag nicht läuft, suchen wir uns einen anderen IT-Dienstleister.“</em></p>
        <p>Ein Kollege hat bereits eine Antwort entworfen:</p>
        <p><em>„Sehr geehrte Frau Albers, das Update wurde vom Hersteller Ihrer Buchungssoftware freigegeben, dafür können wir nichts. Außerdem hätten Sie den Fehler schon am Montag melden müssen. Wir schauen es uns an, sobald wir Zeit haben. MfG Service“</em></p>
        <p>a) Analysiere die Beschwerde von Frau Albers mit dem Vier-Seiten-Modell. (4 P)</p>
        <p>b) Nenne drei eskalierende Stellen im Entwurf und erläutere jeweils ihre Wirkung. (6 P)</p>
        <p>c) Formuliere eine vollständige, deeskalierende Antwort-E-Mail. Ein Techniker kann heute um 13:00 Uhr vor Ort sein. (6 P)</p>
        <p>d) Nenne zwei Maßnahmen, mit denen die Nordlicht IT GmbH die Beschwerde nach der Lösung auswertet. (2 P)</p>`,
      hints: ["Beschwerdemanagement: annehmen und bedanken → klären → lösen → nachfassen → auswerten.", "Eine Frist der Kundin („bis Freitag“) beantwortest du mit einem eigenen, früheren und verbindlichen Termin."],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Seite</th><th>Botschaft</th></tr></thead><tbody>
          <tr><td>Sachinhalt</td><td>Seit dem Update am Montag stürzt das Buchungsprogramm wiederholt ab; es ist der dritte Vorfall in diesem Jahr.</td></tr>
          <tr><td>Selbstkundgabe</td><td>Ich bin verärgert und besorgt, weil wir ohne Buchungsprogramm keine Buchungen annehmen können.</td></tr>
          <tr><td>Beziehung</td><td>Ihr arbeitet unzuverlässig, ich vertraue euch kaum noch („schon das dritte Mal“, „etwas kaputt macht“).</td></tr>
          <tr><td>Appell</td><td>Behebt den Fehler sofort, spätestens bis Freitag – sonst wechseln wir den Dienstleister.</td></tr>
        </tbody></table>
        <p><strong>b)</strong> (1) „dafür können wir nichts“ – eine Rechtfertigung, die jede Verantwortung zurückweist. Auf der Beziehungsseite kommt an: „Ihr Problem ist nicht unser Problem.“ Die Kundin fühlt sich allein gelassen, ihr Ärger steigt. (2) „hätten Sie … schon am Montag melden müssen“ – eine belehrende Schuldzuweisung (Du-Botschaft). Die Kundin hört mit dem Beziehungs-Ohr einen Vorwurf und wird sich verteidigen oder angreifen. (3) „sobald wir Zeit haben“ – keine verbindliche Zusage; die Kundin schließt daraus, dass ihr Ausfall unwichtig ist, und sieht ihre Wechselabsicht bestätigt. (Ebenfalls vertretbar: „MfG Service“ – Abkürzung und keine Ansprechperson wirken unpersönlich.)</p>
        <p><strong>c)</strong></p>
        <pre><code>Betreff: Ticket 6034 – Abstürze Ihres Buchungsprogramms: Techniker heute um 13:00 Uhr bei Ihnen

Sehr geehrte Frau Albers,

vielen Dank für Ihre schnelle Nachricht. Es tut mir leid, dass Ihr
Buchungsprogramm seit Montag immer wieder abstürzt – ich verstehe, wie
ärgerlich das ist, wenn Sie dadurch keine Buchungen annehmen können.

Wir haben Ihren Fall mit höchster Priorität aufgenommen. Unser Techniker
Herr Kröger ist heute um 13:00 Uhr bei Ihnen. Er prüft, ob das Update vom
Montag die Ursache ist, und setzt es bei Bedarf zurück, damit Sie so
schnell wie möglich wieder arbeiten können.

Bitte notieren Sie bis dahin, wann die Abstürze auftreten und welche
Meldung erscheint. Das hilft uns bei der Ursachensuche.

Bis morgen, Donnerstag, 24.09., 12:00 Uhr, melde ich mich persönlich mit
dem Ergebnis und den nächsten Schritten bei Ihnen. Sie erreichen mich
direkt unter 0481 123456-14.

Mit freundlichen Grüßen
Tim Lorenzen
IT-Service, Nordlicht IT GmbH, Heide</code></pre>
        <p>Die Antwort bedankt sich, zeigt Verständnis ohne Rechtfertigung, nennt einen konkreten, früheren Termin als die Frist der Kundin, bittet um sachliche Mitwirkung und sagt ein verbindliches Nachfassen zu. Sie verspricht keine Lösung, die noch niemand garantieren kann.</p>
        <p><strong>d)</strong> (1) Ursache mit dem Softwarehersteller klären und im Problem Management festhalten, z. B. künftig Updates zuerst auf einem Testrechner oder in einer Pilotgruppe einspielen. (2) Beschwerde im CRM bzw. Ticketsystem dokumentieren und in der Teambesprechung auswerten; nach etwa einer Woche bei Frau Albers nachfassen, ob alles stabil läuft. (Auch möglich: Kunden künftig vor Updates informieren.)</p>`
    },
    {
      id: "e-glasl",
      topic: "konflikte",
      title: "Konflikt im Team: Glasl-Stufe bestimmen",
      level: 2,
      task: `<p>Im Service-Team der Nordlicht IT GmbH gibt es seit Wochen Spannungen zwischen dem 1st-Level-Team und dem 2nd-Level-Team. Der 2nd Level wirft dem 1st Level vor, Tickets ohne Analyse weiterzuleiten. Der 1st Level fühlt sich von oben herab behandelt. Inzwischen sprechen die Teams kaum noch miteinander. Der 2nd Level hat ohne Absprache beschlossen, unvollständige Tickets kommentarlos zurückzuschicken. Im 1st Level wird in der Kaffeeküche über „die Arroganten da oben“ gelästert, und zwei Kollegen versuchen, die neue Azubine auf ihre Seite zu ziehen.</p>
        <p>a) Bestimme die Konfliktart(en). (2 P)</p>
        <p>b) Ordne den Konflikt einer Eskalationsstufe nach Glasl zu und begründe am Text. (3 P)</p>
        <p>c) Nenne die Ebene nach Glasl und erkläre, was sie für die Lösung bedeutet. (2 P)</p>
        <p>d) Schlage zwei konkrete Maßnahmen zur Lösung vor. (2 P)</p>`,
      solution: `<p><strong>a)</strong> Es liegt ein <strong>Sachkonflikt</strong> vor (Wie vollständig muss ein Ticket vor der Weiterleitung sein?), der in einen <strong>Beziehungskonflikt</strong> übergegangen ist (Abwertung, „die Arroganten da oben“). Vertretbar ist auch ein Rollenkonflikt, weil die Zuständigkeiten zwischen den Levels unklar sind.</p>
        <p><strong>b)</strong> <strong>Stufe 4 – Images und Koalitionen.</strong> Die Stufe 3 (Taten statt Worte) ist bereits erreicht: Der 2nd Level schickt Tickets ohne Absprache zurück, statt zu reden. Darüber hinaus bauen beide Seiten Feindbilder auf („die Arroganten da oben“) und suchen Verbündete (die Azubine soll auf eine Seite gezogen werden). Das sind die Kennzeichen von Stufe 4.</p>
        <p><strong>c)</strong> Stufe 4 gehört zur Ebene <strong>win-lose</strong>: Jede Seite will gewinnen, eine gemeinsame Lösung aus eigener Kraft ist kaum noch möglich. Ein neutraler Dritter (Teamleitung als Moderatorin oder externe Prozessbegleitung) muss eingreifen.</p>
        <p><strong>d)</strong> (1) Moderiertes Klärungsgespräch mit beiden Teams: Jede Seite schildert ihre Sicht in Ich-Botschaften, die Moderation fragt nach den Interessen. (2) Gemeinsame, schriftliche Übergaberegel festlegen, z. B. eine Ticketvorlage mit Pflichtfeldern (Fehlerbild, durchgeführte Schritte) als neutrales Kriterium, und nach vier Wochen in einer Retrospektive überprüfen.</p>`
    },
    {
      id: "e-harvard",
      topic: "konflikte",
      title: "Harvard-Konzept: Streit um USB-Sticks",
      level: 3,
      task: `<p>Nach einem Virenfund will die IT-Leitung eines Landmaschinenhändlers in Heide alle USB-Anschlüsse für Speichermedien sperren. Der Vertriebsleiter protestiert: „Ausgeschlossen! Meine Außendienstler brauchen USB-Sticks, um Kunden Prospekte und Preislisten mitzugeben.“ Die IT-Leiterin antwortet: „Sicherheit geht vor. Die Sperre kommt am Montag.“</p>
        <p>a) Stelle die Positionen und die dahinterliegenden Interessen beider Seiten gegenüber. (4 P)</p>
        <p>b) Erläutere die vier Grundsätze des Harvard-Konzepts und wende jeden auf den Fall an. (8 P)</p>
        <p>c) Entwickle eine Lösung, die beide Interessen erfüllt. (2 P)</p>
        <p>d) Erkläre den Begriff BATNA am Beispiel des Vertriebsleiters. (2 P)</p>`,
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th></th><th>Vertriebsleiter</th><th>IT-Leiterin</th></tr></thead><tbody>
          <tr><td>Position</td><td>USB-Sticks müssen erlaubt bleiben.</td><td>Alle USB-Speicher werden gesperrt.</td></tr>
          <tr><td>Interessen</td><td>Kunden schnell und bequem mit Unterlagen versorgen, Verkaufschancen nicht gefährden</td><td>Schadsoftware und Datenabfluss verhindern, Netz und Kundendaten schützen</td></tr>
        </tbody></table>
        <p><strong>b)</strong> <em>1. Menschen und Probleme getrennt behandeln:</em> Nicht „die IT blockiert alles“ oder „der Vertrieb ist leichtsinnig“, sondern das gemeinsame Problem „sicherer Datenaustausch mit Kunden“ in den Mittelpunkt stellen. <em>2. Interessen statt Positionen:</em> Beide fragen nach dem Warum – schnelle Kundeninformation und Schutz vor Schadsoftware schließen sich nicht aus. <em>3. Optionen zum beiderseitigen Vorteil entwickeln:</em> erst sammeln, dann bewerten, z. B. Download-Links bzw. QR-Code auf der Website, verschlüsselte Firmen-Sticks mit Freigabeliste, nur Lesen erlaubt, Sticks werden vorab geprüft. <em>4. Neutrale Kriterien:</em> Entscheidung anhand objektiver Maßstäbe, z. B. BSI-Empfehlungen zum Umgang mit Wechseldatenträgern, Aufwand pro Kundenbesuch, Kosten.</p>
        <p><strong>c)</strong> Private und fremde USB-Speicher werden gesperrt; der Außendienst erhält Prospekte und Preislisten über einen QR-Code auf der Visitenkarte, der auf einen Download-Bereich führt. Wer Kunden trotzdem Dateien übergeben muss, nutzt freigegebene, verschlüsselte Firmen-Sticks, die nur vom zentralen Rechner befüllt werden. So bleibt der Vertrieb handlungsfähig, und das Sicherheitsrisiko sinkt deutlich.</p>
        <p><strong>d)</strong> BATNA („Best Alternative to a Negotiated Agreement“) ist die beste Alternative, falls keine Einigung zustande kommt. Für den Vertriebsleiter wäre das z. B., Unterlagen künftig nur per E-Mail nach dem Kundenbesuch zu versenden. Kennt er diese Alternative, kann er realistisch einschätzen, welche Lösung für ihn besser ist, und muss keinem schlechteren Vorschlag zustimmen.</p>`
    },
    {
      id: "e-team-tuckman",
      topic: "team",
      title: "Teamphasen erkennen und Kommunikationswege berechnen",
      level: 2,
      exam: ["AP1"],
      task: `<p>Die Nordlicht IT GmbH führt ein neues Ticketsystem ein. Das Projektteam startet mit 4 Personen und wird später auf 10 Personen erweitert.</p>
        <p>a) Ordne die Beobachtungen einer Teamphase nach Tuckman zu. (5 P)<br>
        1. Nach zwei Wochen streiten sich die Teammitglieder heftig über die Ticketkategorien; zwei Kollegen bleiben den Meetings fern.<br>
        2. Beim ersten Treffen sind alle höflich, fragen nach ihren Aufgaben und halten sich mit Meinungen zurück.<br>
        3. Das Team arbeitet selbstständig, hilft sich gegenseitig und hält alle Meilensteine ein.<br>
        4. Nach dem Go-live feiert das Team den Abschluss und dokumentiert Lessons Learned.<br>
        5. Das Team vereinbart schriftlich Regeln für Meetings und die Ticketvergabe; ein Wir-Gefühl entsteht.</p>
        <p>b) Berechne die Anzahl der Kommunikationsbeziehungen vor und nach der Erweiterung und den Faktor, um den sie gestiegen ist. (3 P)</p>
        <p>c) Nenne zwei Maßnahmen, mit denen die Kommunikation im größeren Team funktioniert. (2 P)</p>
        <p>d) Zwei erfahrene Kollegen lehnen das neue Ticketsystem ab („Das alte lief doch“). Nenne zwei mögliche Ursachen und zwei Maßnahmen. (4 P)</p>`,
      solution: `<p><strong>a)</strong> 1. Storming · 2. Forming · 3. Performing · 4. Adjourning · 5. Norming</p>
        <p><strong>b)</strong> Formel: K = n × (n − 1) ÷ 2<br>
        vorher: K = 4 × 3 ÷ 2 = <strong>6</strong><br>
        nachher: K = 10 × 9 ÷ 2 = <strong>45</strong><br>
        Faktor: 45 ÷ 6 = <strong>7,5</strong> – die Personenzahl steigt auf das 2,5-Fache (10 ÷ 4), die Zahl der Kommunikationswege aber auf das 7,5-Fache (45 − 6 = 39 zusätzliche Beziehungen).</p>
        <p><strong>c)</strong> Feste Kommunikationsstrukturen: z. B. ein kurzes tägliches Stand-up (höchstens 15 Minuten), ein gemeinsamer Kanal bzw. ein Wiki für Entscheidungen, Protokolle mit Aufgabenliste; außerdem klare Zuständigkeiten und Ansprechpartner je Teilbereich, eventuell Aufteilung in kleinere Teilteams.</p>
        <p><strong>d)</strong> Ursachen: Angst vor Mehraufwand oder Überforderung mit dem neuen System; fehlende Information über den Nutzen; Verlust von Routine und Expertenstatus. Maßnahmen: früh und ehrlich über Gründe und Nutzen informieren; die beiden Kollegen beteiligen (z. B. als Key-User bei der Konfiguration der Kategorien); Schulungen anbieten; Sorgen in einem Gespräch ernst nehmen.</p>`
    },
    {
      id: "e-team-lewin",
      topic: "team",
      title: "Change begleiten: Ticketportal statt Admin-Handy",
      level: 2,
      exam: ["AP1"],
      task: `<p>Die Nordlicht IT GmbH betreut eine Kfz-Werkstattkette mit drei Standorten in Dithmarschen und 40 Mitarbeitenden. Bisher rufen alle bei IT-Problemen direkt auf dem Diensthandy des Administrators an. Ab Montag, 02.11.2026, sollen Störungen über ein Ticketportal gemeldet werden. Die Reaktionen:</p>
        <ul>
          <li>Geschäftsführerin Frau Brandt: „Die Umstellung kommt. Ich stelle für Schulungen Arbeitszeit zur Verfügung.“</li>
          <li>Werkstattmeister Herr Voss: „Ich hab keine Zeit, Formulare auszufüllen. Ich ruf wie immer an.“</li>
          <li>Buchhalterin Frau Mahler: „Endlich sehe ich, wo mein Auftrag steht.“</li>
          <li>Serviceberater Herr Tietjen sagt in Besprechungen nichts, erzählt in der Pause aber, das Portal werde „eh bald wieder abgeschafft“.</li>
        </ul>
        <p>a) Ordne jede Person einer Rolle im Veränderungsprozess zu und begründe kurz. (4 P)</p>
        <p>b) Nenne zwei mögliche Ursachen für den Widerstand von Herrn Voss und je eine passende Maßnahme. (4 P)</p>
        <p>c) Ordne die Maßnahmen den Phasen nach Lewin zu. (6 P)<br>
        (1) Pilotbetrieb am Standort Heide · (2) Infoveranstaltung „Warum das Portal kommt“ am Dienstag, 13.10. · (3) Auswertung nach sechs Wochen, danach gilt die Handynummer nur noch für Notfälle · (4) Schulung einer Key-Userin je Standort · (5) Kurzumfrage zu Sorgen und Wünschen vor dem Start · (6) im Intranet zeigen, wie viel schneller Störungen seit der Umstellung gelöst werden</p>
        <p>d) Formuliere eine kurze Ankündigung an alle Mitarbeitenden und begründe, welchen Kanal du wählst. (4 P)</p>`,
      solution: `<p><strong>a)</strong> Frau Brandt: <strong>Machtpromotorin</strong> – sie entscheidet und stellt Ressourcen bereit. Herr Voss: <strong>offener Widerständler</strong> – er lehnt die Neuerung ausdrücklich ab. Frau Mahler: <strong>Befürworterin</strong> – sie sieht einen persönlichen Nutzen. Herr Tietjen: <strong>verdeckter Widerständler</strong> – er schweigt offiziell, macht aber hinter den Kulissen Stimmung gegen das Portal.</p>
        <p><strong>b)</strong> Ursache 1: Angst vor Mehraufwand und Zeitverlust in der Werkstatt → Maßnahme: Meldung in unter einer Minute per Smartphone oder QR-Code an der Werkbank, Formular mit wenigen Pflichtfeldern. Ursache 2: Gewohnheit und Verlust des direkten Drahts zum Administrator → Maßnahme: Herrn Voss als Key-User für die Werkstatt gewinnen und zusichern, dass es für echte Notfälle weiterhin eine Telefonnummer gibt. (Auch möglich: fehlende Information über den Nutzen → Vorteile zeigen, z. B. Status jederzeit sichtbar, keine vergessenen Anrufe; Unsicherheit am PC → kurze Einweisung am Arbeitsplatz.)</p>
        <p><strong>c)</strong> <em>Auftauen:</em> (2) Infoveranstaltung, (5) Kurzumfrage – Notwendigkeit erklären, Sorgen anhören. <em>Verändern:</em> (1) Pilotbetrieb, (4) Key-User-Schulung – Neues einführen und ausprobieren. <em>Stabilisieren:</em> (3) Auswertung und Abschalten des alten Wegs, (6) Erfolge sichtbar machen – Neues als Normalfall verankern.</p>
        <p><strong>d)</strong> <em>Kanal:</em> E-Mail an alle bzw. Beitrag im Intranet, weil die Information verbindlich, nachlesbar und an allen drei Standorten gleichzeitig ankommen soll; zusätzlich ein Aushang mit QR-Code in den Werkstätten, weil Mechaniker selten am PC sitzen. Die persönliche Erklärung folgt in der Infoveranstaltung.</p>
        <pre><code>Betreff: Ab 02.11.: IT-Störungen einfach über das neue Ticketportal melden

Liebe Kolleginnen und Kollegen,

ab Montag, 02.11.2026, meldet ihr IT-Probleme über unser neues
Ticketportal – am PC oder per QR-Code mit dem Smartphone. So geht keine
Meldung mehr verloren, und ihr seht jederzeit, wie weit euer Anliegen ist.

Am Dienstag, 13.10., um 14:00 Uhr stellen wir das Portal im Pausenraum
Heide vor und beantworten eure Fragen. An jedem Standort hilft euch
außerdem eine geschulte Ansprechpartnerin.

Bei echten Notfällen (z. B. alle Kassen fallen aus) ist das Diensthandy
weiterhin erreichbar.

Viele Grüße
Frau Brandt, Geschäftsführung</code></pre>`
    },
    {
      id: "e-email-lieferung",
      topic: "schriftlich",
      title: "Prüfungsnah: Kunden-E-Mail zu einer Lieferverzögerung",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die Nordlicht IT GmbH hat einer Zahnarztpraxis in Heide drei neue Notebooks für Montag, 12.10., zugesagt. Der Distributor meldet einen Lieferengpass; die Geräte kommen voraussichtlich erst am Donnerstag, 22.10. Du sollst die Praxismanagerin Frau Brodersen informieren. Als Übergangslösung könnt ihr zwei Leihgeräte bereitstellen.</p>
        <p>a) Nenne fünf Bestandteile einer geschäftlichen E-Mail. (5 P)</p>
        <p>b) Formuliere die E-Mail an Frau Brodersen. (6 P)</p>
        <p>c) Dieselbe Information zu einem anderen Produkt soll an 25 weitere Kunden gehen. Welches Adressfeld verwendest du? Begründe. (2 P)</p>
        <p>d) Ein Kollege schlägt vor, die E-Mails von einem öffentlichen KI-Chatbot schreiben zu lassen und dafür die Kundenliste hineinzukopieren. Nenne zwei Punkte, die du dabei beachten musst. (2 P)</p>`,
      solution: `<p><strong>a)</strong> aussagekräftiger Betreff, passende Anrede, Kernaussage am Anfang, Handlungsaufforderung bzw. Angebot mit Frist, Grußformel mit Signatur (Name, Funktion, Kontakt, Pflichtangaben des Unternehmens).</p>
        <p><strong>b)</strong></p>
        <pre><code>Betreff: Ihre Notebook-Bestellung: neuer Liefertermin 22.10. und Leihgeräte

Sehr geehrte Frau Brodersen,

leider können wir die drei bestellten Notebooks nicht wie vereinbart am
Montag, 12.10., liefern. Unser Lieferant hat einen Engpass gemeldet; der
neue Liefertermin ist voraussichtlich Donnerstag, 22.10.

Damit Ihre Praxis ohne Einschränkung weiterarbeiten kann, stellen wir
Ihnen ab Montag kostenlos zwei vorkonfigurierte Leihgeräte zur Verfügung.
Bitte teilen Sie mir bis Freitag, 09.10., mit, ob wir die Leihgeräte am
Montag um 8:00 Uhr bringen dürfen.

Wir bitten die Verzögerung zu entschuldigen. Für Fragen erreichen Sie mich
unter 0481 123456-14.

Mit freundlichen Grüßen
Tim Lorenzen, Auszubildender IT-Service
Nordlicht IT GmbH, Heide</code></pre>
        <p><strong>c)</strong> Das <strong>BCC</strong>-Feld (oder eine Serienmail mit Einzelversand). E-Mail-Adressen sind personenbezogene Daten; im An- oder CC-Feld würden alle Empfänger die Adressen der anderen Kunden sehen – ein Datenschutzverstoß nach DSGVO und ein Vertrauensverlust.</p>
        <p><strong>d)</strong> (1) Keine personenbezogenen Kundendaten in einen öffentlichen, nicht freigegebenen KI-Dienst eingeben (Datenschutz, fehlender Auftragsverarbeitungsvertrag). (2) Den Entwurf vor dem Versand inhaltlich und im Ton prüfen – die KI kann falsche Angaben erfinden, verantwortlich bleibt der Absender.</p>`
    },
    {
      id: "e-protokoll",
      topic: "schriftlich",
      title: "Ergebnisprotokoll einer Besprechung erstellen",
      level: 1,
      exam: ["AP1"],
      task: `<p>Tim hat bei einer Besprechung der Nordlicht IT GmbH folgende Notizen gemacht:</p>
        <p><em>Besprechung „Umzug Serverraum“, Mi 30.09.2026, 10:00–10:45 Uhr, Besprechungsraum 2, Heide. Da: Frau Sievers (Leitung IT), Herr Kröger (Netzwerk), Tim Lorenzen (Azubi, schreibt Protokoll). Entschuldigt: Frau Paulsen (Haustechnik). Umzug am Sa 17.10. – Herr Kröger war zuerst für den 10.10., wegen Lieferzeit der Racks aber 17.10. Verkabelungsplan macht Kröger bis Fr 09.10. Sievers informiert alle Mitarbeitenden bis Mo 12.10. per Mail über Ausfall 8–16 Uhr. Tim beschriftet bis Fr 16.10. alle Kabel. USV-Wartung → November. Nächstes Treffen Mi 14.10., 10 Uhr.</em></p>
        <p>a) Erkläre den Unterschied zwischen Ergebnis- und Verlaufsprotokoll. (2 P)</p>
        <p>b) Erstelle aus den Notizen ein Ergebnisprotokoll mit Protokollkopf, Ergebnissen und Aufgabenliste. (6 P)</p>`,
      solution: `<p><strong>a)</strong> Ein <strong>Ergebnisprotokoll</strong> hält nur die Ergebnisse, Beschlüsse und Aufgaben fest. Ein <strong>Verlaufsprotokoll</strong> gibt zusätzlich den Diskussionsverlauf wieder (wer hat welche Meinung vertreten). Hier genügt ein Ergebnisprotokoll – die Diskussion über den 10.10. muss nicht festgehalten werden, nur der Beschluss.</p>
        <p><strong>b)</strong></p>
        <pre><code>Ergebnisprotokoll – Besprechung „Umzug Serverraum“
Datum/Zeit:   Mittwoch, 30.09.2026, 10:00–10:45 Uhr
Ort:          Nordlicht IT GmbH, Besprechungsraum 2, Heide
Teilnehmende: Frau Sievers (Leitung IT), Herr Kröger (Netzwerk),
              Tim Lorenzen (Auszubildender)
Entschuldigt: Frau Paulsen (Haustechnik)
Protokoll:    Tim Lorenzen

Ergebnisse
1. Der Umzug des Serverraums findet am Samstag, 17.10.2026, statt.
   (Grund für den späteren Termin: Lieferzeit der Racks.)
2. Die Wartung der USV wird auf November verschoben.

Aufgaben
Was                                        Wer          Bis wann
Verkabelungsplan erstellen                 Hr. Kröger   Fr, 09.10.
Mitarbeitende per E-Mail über den          Fr. Sievers  Mo, 12.10.
Ausfall (8–16 Uhr) informieren
Alle Kabel beschriften                     T. Lorenzen  Fr, 16.10.

Nächste Besprechung: Mittwoch, 14.10.2026, 10:00 Uhr
Verteiler: alle Teilnehmenden, Frau Paulsen</code></pre>`
    },
    {
      id: "e-praes-planung",
      topic: "praesentation",
      title: "Präsentation für die Geschäftsführung planen",
      level: 2,
      exam: ["AP1"],
      task: `<p>Die Nordlicht IT GmbH soll der Geschäftsführung eines Autohauses in Heide in 12 Minuten die Einführung einer Mehr-Faktor-Authentifizierung (MFA) vorstellen. Die Geschäftsführung hat wenig IT-Wissen und soll am Ende entscheiden.</p>
        <p>a) Nenne vier Fragen, die du dir bei der Vorbereitung stellst. (4 P)</p>
        <p>b) Erstelle eine Gliederung mit Zeitangaben nach den Faustwerten Einleitung 15 %, Hauptteil 75 %, Schluss 10 %. (4 P)</p>
        <p>c) Eine Folie deines Kollegen enthält 14 Zeilen Fließtext in 12-pt-Schrift, rote Schrift auf grünem Hintergrund und keine Überschrift. Nenne vier Verbesserungen. (4 P)</p>
        <p>d) Wähle jeweils eine passende Diagrammart: (1) Anzahl der Phishing-Mails pro Monat im letzten Jahr, (2) Anteile der Anmeldeverfahren App, SMS und Hardware-Token, (3) Kostenvergleich dreier MFA-Lösungen. (3 P)</p>
        <p>e) Nenne zwei Kriterien, mit denen du eine Internetquelle zum Thema MFA beurteilst. (2 P)</p>`,
      solution: `<p><strong>a)</strong> Welches Ziel hat die Präsentation (Entscheidung herbeiführen)? Wer ist die Zielgruppe und was weiß sie schon? Was ist meine Kernbotschaft in einem Satz? Welcher Rahmen gilt (Zeit, Raum, Technik, Fragen im Anschluss)? Welche Quellen und Zahlen nutze ich?</p>
        <p><strong>b)</strong> Einleitung: 15 % × 12 min = 1,8 min ≈ 2 min (Begrüßung, Einstieg mit einem Beispiel eines gestohlenen Passworts, Ziel und Ablauf). Hauptteil: 75 % × 12 min = 9 min (Risiko heute, Funktionsweise von MFA mit einem Alltagsvergleich, zwei Lösungen mit Kosten und Aufwand, Empfehlung). Schluss: 10 % × 12 min = 1,2 min ≈ 1 min (Zusammenfassung, Empfehlung, Bitte um Entscheidung). Kontrolle: 2 + 9 + 1 = 12 min.</p>
        <p><strong>c)</strong> (1) Aussagekräftige Überschrift mit der Kernaussage ergänzen. (2) Text auf wenige Stichworte kürzen (höchstens etwa 6–7 Zeilen), besser eine Grafik. (3) Schrift auf mindestens etwa 18–24 pt vergrößern, serifenlose Schrift. (4) Kontrastreiche Farben nach Corporate Design wählen, z. B. dunkle Schrift auf hellem Grund – Rot auf Grün ist schlecht lesbar und für Menschen mit Rot-Grün-Sehschwäche kaum unterscheidbar.</p>
        <p><strong>d)</strong> (1) Liniendiagramm – Entwicklung über die Zeit. (2) Kreisdiagramm – Anteile an einem Ganzen mit wenigen Segmenten. (3) Säulen- oder Balkendiagramm – Vergleich von Werten.</p>
        <p><strong>e)</strong> Urheber und Fachkompetenz (z. B. BSI statt anonymer Forenbeitrag), Aktualität (Datum), nachvollziehbare Belege, Interessen des Anbieters (Werbung eines Herstellers?), Vergleich mit weiteren Quellen – zwei davon.</p>`
    },
    {
      id: "e-fachgespraech",
      topic: "fachgespraech",
      title: "Prüfungsnah: Projektpräsentation und Fachgespräch vorbereiten",
      level: 3,
      exam: ["AP2"],
      task: `<p>Jonas hat als Abschlussprojekt bei einem Energieversorger in Husum ein zentrales Monitoring für 40 Server und Netzwerkkomponenten eingeführt. In seiner Nutzwertanalyse erreichte Zabbix 4,1 von 5 Punkten, die kommerzielle Alternative 3,6 Punkte.</p>
        <p>a) Nenne die zeitlichen Vorgaben für Präsentation und Fachgespräch und berechne deren Anteil an der Gesamtnote der Abschlussprüfung. (3 P)</p>
        <p>b) Erstelle einen Zeitplan für eine 15-minütige Präsentation mit sechs Abschnitten. (4 P)</p>
        <p>c) Der Ausschuss fragt: „Warum haben Sie sich für Zabbix entschieden?“ Formuliere eine Antwort nach der Argumentationskette. (4 P)</p>
        <p>d) Der Ausschuss fragt: „Was passiert, wenn Ihr Monitoring-Server selbst ausfällt?“ Jonas hat dazu keine fertige Lösung umgesetzt. Beschreibe, wie er professionell reagiert, und formuliere eine Antwort. (3 P)</p>
        <p>e) Nenne vier typische Fehler in Projektpräsentationen. (2 P)</p>`,
      solution: `<p><strong>a)</strong> Präsentation und Fachgespräch dauern zusammen höchstens 30 Minuten; die Präsentation soll höchstens 15 Minuten dauern (§ 20 FIAusbV). Anteil: Der Prüfungsbereich Projekt zählt 50 % der Gesamtnote, der zweite Teil (Präsentation + Fachgespräch) davon 50 % → 0,5 × 0,5 = 0,25 = <strong>25 %</strong> der Gesamtnote.</p>
        <p><strong>b)</strong> Einstieg, Ausgangssituation und Ziel 2,5 min · Alternativen und Entscheidung (Nutzwertanalyse) 3 min · Durchführung mit wichtigsten Entscheidungen 4 min · IT-Sicherheit und Tests 2 min · Ergebnis und Soll-Ist-Vergleich 2 min · Fazit und Ausblick 1,5 min. Summe: 2,5 + 3 + 4 + 2 + 2 + 1,5 = 15 min.</p>
        <p><strong>c)</strong> <em>These:</em> „Zabbix war für den Kunden die wirtschaftlichere Lösung bei gleichem Funktionsumfang.“ <em>Begründung:</em> „Es ist Open Source, verursacht keine Lizenzkosten und deckt alle Muss-Kriterien ab – Überwachung per Agent und SNMP sowie Alarmierung per E-Mail.“ <em>Beleg:</em> „In meiner Nutzwertanalyse erreichte Zabbix 4,1 von 5 Punkten, die kommerzielle Alternative 3,6; den höheren Einarbeitungsaufwand habe ich dabei berücksichtigt.“ <em>Folgerung:</em> „Deshalb habe ich Zabbix empfohlen, und der Auftraggeber hat zugestimmt.“</p>
        <p><strong>d)</strong> Er hört die Frage vollständig an, nimmt sich einen Moment zum Nachdenken, gibt offen zu, dass die Absicherung nicht Teil des Projekts war, und zeigt einen fachlich sinnvollen Lösungsweg, statt zu raten oder auszuweichen: „Das habe ich im Projekt nicht umgesetzt, weil es nicht im Auftrag lag. Ohne Absicherung würde ein Ausfall zunächst unbemerkt bleiben. Ich würde deshalb einen externen Check einrichten, der den Monitoring-Server selbst überwacht und per SMS alarmiert, und mittelfristig eine zweite Instanz oder regelmäßige Sicherungen der Konfiguration vorsehen.“</p>
        <p><strong>e)</strong> Folien ablesen oder überladen; Zeit deutlich überschreiten; Verkaufsveranstaltung statt eigener Leistung und Entscheidungen; Fachbegriffe auf den Folien, die man nicht erklären kann; keine Ersatzkopie bei Technikproblemen; kein Blickkontakt zum Ausschuss.</p>`
    },
    {
      id: "e-transfer-hotline",
      topic: "watzlawick",
      title: "Transferfall (AFB III): Die Hotline ist nicht erreichbar",
      level: 3,
      task: `<p>Mittwoch, 11:30 Uhr: Die Telefonanlage der Nordlicht IT GmbH fällt aus, Kunden erreichen die Hotline nicht. Die Teamleiterin schreibt in den Gruppenchat: „Wieso merkt das eigentlich keiner??? Macht mal was!“ Admin A antwortet nicht, weil er glaubt, die Telefonanlage gehöre zum Netzwerkteam. Admin B schreibt: „Ich bin nicht für alles zuständig. Ich hab heute schon drei Stunden Druckerprobleme gelöst.“ Die Teamleiterin antwortet: „Typisch. Immer dieselben Ausreden.“ Die Hotline bleibt 40 Minuten nicht erreichbar.</p>
        <p>a) Analysiere zwei zentrale Kommunikationsprobleme mit zwei verschiedenen Modellen. Erkläre jeweils, was das Modell sichtbar macht. (6 P)</p>
        <p>b) Beurteile die erste Nachricht der Teamleiterin. (2 P)</p>
        <p>c) Formuliere eine deutlich bessere Nachricht. (2 P)</p>
        <p>d) Beurteile, welches deiner Modelle den Fall besser erklärt, und nenne eine Grenze dieses Modells. (2 P)</p>
        <p>e) Formuliere eine Ich-Botschaft, mit der Admin B der Teamleiterin am nächsten Tag seine Sicht schildert. (3 P)</p>`,
      solution: `<p><strong>a)</strong> <em>Problem 1 – unklarer Appell (Vier-Seiten-Modell):</em> Der Appell „Macht mal was!“ richtet sich an alle und damit an niemanden; A fühlt sich nicht zuständig. Auf der Beziehungsseite wirken „Wieso merkt das eigentlich keiner???“ und die drei Fragezeichen wie ein Vorwurf („Ihr passt nicht auf“), die Selbstkundgabe zeigt Ärger und Stress. B hört mit dem Beziehungs-Ohr und rechtfertigt sich, statt zu handeln. Das Modell macht sichtbar, dass die Nachricht sachlich dünn (kein Dienst, keine Zuständigkeit, keine Frist), aber beziehungsseitig stark aufgeladen ist.<br>
        <em>Problem 2 – Teufelskreis (Watzlawick, Axiom 3):</em> Die Teamleiterin wirft vor → B verteidigt sich → die Teamleiterin sieht sich bestätigt („Typisch. Immer dieselben Ausreden“) und verschärft. Jeder erlebt sein Verhalten als Reaktion auf den anderen. Das Axiom macht sichtbar, dass es keinen einzelnen Schuldigen gibt, sondern ein sich selbst verstärkendes Muster – während die Hotline ausfällt. (Auch vertretbar: Sender-Empfänger-Modell – A dekodiert die Nachricht mit der Annahme „nicht mein Bereich“, Feedback fehlt.)</p>
        <p><strong>b)</strong> Die Dringlichkeit ist berechtigt, weil Kunden die Hotline nicht erreichen. Kommunikativ ist die Nachricht aber ungeeignet: kein Adressat, keine Beschreibung des Problems, keine Frist und keine Rückmeldung; stattdessen ein Vorwurf mit Verallgemeinerung („keiner“). Ergebnis: Schulddebatte statt Störungsbehebung.</p>
        <p><strong>c)</strong> „@Admin B: Die Telefonanlage ist seit 11:30 Uhr ausgefallen, Kunden erreichen die Hotline nicht – höchste Priorität. Bitte übernimm jetzt die Fehlersuche, @Admin A unterstützt dich beim Netzwerk. Gebt mir bitte bis 11:50 Uhr einen Zwischenstand. Falls du gerade nicht kannst, sag sofort Bescheid.“</p>
        <p><strong>d)</strong> Axiom 3 erklärt den Fall besser, weil das Problem im <em>Verlauf</em> liegt: drei Nachrichten schaukeln sich hoch, das Vier-Seiten-Modell erklärt nur jeweils eine Nachricht. Grenze: Axiom 3 beschreibt den Teufelskreis, sagt aber nicht, wie man aus ihm herauskommt, und blendet die eigentliche Ursache aus – die fehlende Zuständigkeitsregelung für die Telefonanlage.</p>
        <p><strong>e)</strong> „Gestern bei dem Ausfall kam im Chat ‚Typisch. Immer dieselben Ausreden.‘ (Wahrnehmung). Das hat mich getroffen, weil ich vorher drei Stunden an den Druckern gearbeitet habe und nicht wusste, dass die Telefonanlage jetzt Vorrang hat (Wirkung). Ich wünsche mir, dass du mich bei Störungen direkt ansprichst und wir festlegen, wer für die Telefonanlage zuständig ist (Wunsch).“</p>`
    },
  ],
  quiz: [
    { id: "q-g1", topic: "grundlagen", type: "single",
      q: "Wie heißt im Sender-Empfänger-Modell der Vorgang, bei dem der Sender seine Gedanken in Zeichen (Worte, Schrift, Gesten) übersetzt?",
      options: ["Kodierung", "Dekodierung", "Feedback", "Interpunktion"], answer: 0,
      explain: "Der Sender kodiert: Er verpackt seinen Gedanken in Zeichen. Die Dekodierung ist der umgekehrte Vorgang beim Empfänger, Feedback die Rückmeldung an den Sender. Interpunktion ist ein Begriff aus Watzlawicks drittem Axiom und gehört nicht zum Sender-Empfänger-Modell." },
    { id: "q-g2", topic: "grundlagen", type: "single",
      q: "Eine Nutzerin schreibt ins Ticket nur „Teams geht nicht“. Der Support installiert die App sofort neu, ohne nachzufragen – tatsächlich funktionierte nur ihr Headset in Besprechungen nicht. Welches Element des Sender-Empfänger-Modells hat der Support ausgelassen?",
      options: ["das Feedback (Rückfrage an den Sender)", "den Kanal", "die Kodierung", "den Sender"], answer: 0,
      explain: "Mit einer Rückfrage (Feedback) hätte der Support geprüft, ob seine Deutung stimmt („Was genau geht nicht – Chat, Anmeldung, Ton?“). Kanal (Ticket), Kodierung (der Satz der Nutzerin) und Sender (die Nutzerin) waren vorhanden – die Kodierung war nur unvollständig. Ausgelassen hat der Support selbst die Rückmeldung." },
    { id: "q-g3", topic: "grundlagen", type: "multi",
      q: "Welche Merkmale gehören zur <strong>paraverbalen</strong> Kommunikation?",
      options: ["Sprechtempo", "Tonfall", "Lautstärke", "Gestik", "Wortwahl", "Blickkontakt"], answer: [0, 1, 2],
      explain: "Paraverbal ist alles, was die Stimme betrifft: Tempo, Tonfall, Lautstärke, Pausen, Betonung. Gestik und Blickkontakt sind nonverbal (Körpersprache), die Wortwahl ist verbal (der Inhalt der Worte)." },
    { id: "q-g4", topic: "grundlagen", type: "tf",
      q: "Nach dem Sender-Empfänger-Modell ist eine Nachricht verstanden, sobald sie beim Empfänger angekommen ist.",
      answer: false,
      explain: "Falsch. Angekommen heißt noch nicht verstanden: Der Empfänger dekodiert die Zeichen mit eigenem Wissen und eigenen Erwartungen und kann dabei etwas anderes verstehen, als gemeint war. Erst Feedback zeigt, ob die Nachricht richtig verstanden wurde." },
    { id: "q-g5", topic: "grundlagen", type: "single",
      q: "Ein Supporter sagt am Telefon „Kein Problem, mache ich gern“ und seufzt dabei hörbar. Wie nennt man es, wenn Worte und Stimme einander widersprechen?",
      options: ["inkongruent", "kongruent", "symmetrisch", "explizit"], answer: 0,
      explain: "Widersprechen sich die Ebenen, ist die Botschaft inkongruent (nicht stimmig); der Empfänger glaubt dann meist eher dem Seufzer. Kongruent wäre das Gegenteil. „Symmetrisch“ beschreibt eine Beziehung auf Augenhöhe (Watzlawick), „explizit“ eine ausdrücklich formulierte Botschaft." },
    { id: "q-g6", topic: "grundlagen", type: "single", exam: [],
      q: "Welche Aussage zur oft zitierten „7-38-55-Regel“ (Worte – Stimme – Körpersprache) ist fachlich korrekt?",
      options: ["Sie stammt aus Versuchen mit einzelnen Wörtern und widersprüchlichen Signalen und lässt sich nicht auf jede Kommunikation übertragen.", "Sie beweist, dass der Inhalt einer Präsentation nur 7 % ihrer Wirkung ausmacht.", "Sie gilt ausschließlich für schriftliche Kommunikation wie E-Mails.", "Sie wurde von Schulz von Thun als Teil des Vier-Seiten-Modells aufgestellt."], answer: 0,
      explain: "Die Zahlen gehen auf Experimente von Albert Mehrabian zurück, bei denen einzelne Wörter mit widersprüchlichem Tonfall oder Gesichtsausdruck bewertet wurden. Für Präsentationen oder Fachgespräche gilt die Verteilung nicht – dort zählt der Inhalt sehr wohl. Mit schriftlicher Kommunikation und mit Schulz von Thun hat die Regel nichts zu tun." },
    { id: "q-v1", topic: "vier-seiten", type: "single",
      q: "Ein Kunde sagt am Telefon: „Ich bin total im Stress, ich komme mit nichts hinterher.“ Welche Seite der Nachricht steht hier ausdrücklich im Vordergrund?",
      options: ["Selbstkundgabe", "Beziehung", "Appell", "Sachinhalt"], answer: 0,
      explain: "Der Kunde sagt ausdrücklich etwas über sich selbst (seinen Zustand) – das ist die Selbstkundgabe. Ein Appell (z. B. „Helfen Sie mir schnell“) und eine Beziehungsbotschaft schwingen höchstens mit, ein Sachverhalt über das IT-Problem wird gar nicht genannt." },
    { id: "q-v2", topic: "vier-seiten", type: "single",
      q: "Die Kollegin sagt: „Die Dokumentation zum Server fehlt noch.“ Der Azubi antwortet gereizt: „Ich hab ja wohl auch noch andere Sachen zu tun!“ Mit welchem Ohr hat der Azubi vor allem gehört?",
      options: ["Beziehungs-Ohr", "Sach-Ohr", "Selbstkundgabe-Ohr", "Appell-Ohr"], answer: 0,
      explain: "Rechtfertigung und gereizter Gegenangriff zeigen, dass der Azubi einen Vorwurf („Du arbeitest nicht ordentlich“) gehört hat – das ist das Beziehungs-Ohr. Mit dem Sach-Ohr hätte er sachlich geantwortet („Stimmt, die schreibe ich bis Freitag“), mit dem Appell-Ohr hätte er sofort losgelegt, mit dem Selbstkundgabe-Ohr hätte er nach dem Befinden der Kollegin gefragt." },
    { id: "q-v3", topic: "vier-seiten", type: "multi",
      q: "Welche Bezeichnungen werden für das Modell von Friedemann Schulz von Thun verwendet?",
      options: ["Kommunikationsquadrat", "Vier-Ohren-Modell", "Nachrichtenquadrat", "Eisbergmodell", "Johari-Fenster"], answer: [0, 1, 2],
      explain: "Das Vier-Seiten-Modell heißt auch Kommunikationsquadrat oder Nachrichtenquadrat; aus Empfängersicht spricht man vom Vier-Ohren-Modell. Das Eisbergmodell (sichtbare Sach- und unsichtbare Beziehungsebene) und das Johari-Fenster (Selbst- und Fremdwahrnehmung, Luft und Ingham) sind eigenständige Modelle." },
    { id: "q-v4", topic: "vier-seiten", type: "single",
      q: "Welche Leitfrage gehört zur <strong>Beziehungsseite</strong> einer Nachricht?",
      options: ["Was halte ich von dir, und wie stehen wir zueinander?", "Worüber informiere ich?", "Was gebe ich von mir selbst preis?", "Wozu möchte ich dich veranlassen?"], answer: 0,
      explain: "Die Beziehungsseite zeigt, was der Sender vom Empfänger hält und wie er die Beziehung sieht. „Worüber informiere ich?“ gehört zum Sachinhalt, „Was gebe ich von mir preis?“ zur Selbstkundgabe und „Wozu möchte ich dich veranlassen?“ zum Appell." },
    { id: "q-v5", topic: "vier-seiten", type: "tf",
      q: "Die Selbstkundgabe einer Nachricht sagt etwas über den Empfänger aus.",
      answer: false,
      explain: "Falsch. Die Selbstkundgabe (Selbstoffenbarung) verrät etwas über den <em>Sender</em> – seine Gefühle, seinen Zustand, seine Haltung. Aussagen darüber, was der Sender vom Empfänger hält, gehören zur Beziehungsseite. Diese Verwechslung ist ein häufiger Fehler in Klassenarbeiten." },
    { id: "q-v6", topic: "vier-seiten", type: "input",
      q: "Wie lautet der Nachname des Kommunikationspsychologen, der das Vier-Seiten-Modell (1981, „Miteinander reden“) entwickelt hat?",
      answer: ["Schulz von Thun", "Friedemann Schulz von Thun", "Schulz v. Thun"],
      explain: "Friedemann Schulz von Thun, Hamburger Kommunikationspsychologe, veröffentlichte das Modell 1981 in „Miteinander reden 1“." },
    { id: "q-w1", topic: "watzlawick", type: "single",
      q: "In einer Videokonferenz schaltet ein Kollege nach einer Frage die Kamera aus und schweigt. Die anderen deuten das als Ablehnung. Welches Axiom nach Watzlawick passt am besten?",
      options: ["Man kann nicht nicht kommunizieren.", "Kommunikation ist symmetrisch oder komplementär.", "Die Beziehung ist durch die Interpunktion der Abläufe bedingt.", "Menschen kommunizieren digital und analog."], answer: 0,
      explain: "Auch Schweigen und Kamera-aus sind Verhalten, das gedeutet wird – das ist Axiom 1. Um Rollenverhältnisse (Axiom 5) oder einen Ursache-Wirkungs-Kreislauf (Axiom 3) geht es nicht. Axiom 4 würde passen, wenn Worte und Tonfall/Mimik sich widersprächen; hier gibt es aber gar keine Worte." },
    { id: "q-w2", topic: "watzlawick", type: "single",
      q: "Admin A: „Ich kontrolliere dich nur, weil du Fehler machst.“ – Admin B: „Ich mache nur Fehler, weil du mich ständig kontrollierst.“ Welches Axiom beschreibt dieses Muster?",
      options: ["Die Beziehung ist durch die Interpunktion der Abläufe bedingt.", "Man kann nicht nicht kommunizieren.", "Menschen kommunizieren digital und analog.", "Kommunikation ist symmetrisch oder komplementär."], answer: 0,
      explain: "Beide sehen ihr Verhalten nur als Reaktion auf den anderen und setzen den „Anfang“ unterschiedlich – das ist die Interpunktion (Axiom 3), die zu einem Teufelskreis führt. Typisches Signal im Aufgabentext: „weil du …“ – „nein, weil du …“." },
    { id: "q-w3", topic: "watzlawick", type: "single",
      q: "Was bedeutet „digital“ im vierten Axiom nach Watzlawick?",
      options: ["die Worte bzw. der eindeutige Inhalt einer Nachricht", "die Übertragung über ein Computernetz", "Tonfall, Mimik und Gestik", "die schriftliche Kommunikation per E-Mail"], answer: 0,
      explain: "„Digital“ meint bei Watzlawick die Wortsprache mit ihrer eindeutigen Bedeutung, „analog“ die Körpersprache und den Tonfall (in Chats auch Emojis). Mit Computertechnik oder E-Mail hat der Begriff hier nichts zu tun – eine typische Verwechslung für IT-Azubis." },
    { id: "q-w4", topic: "watzlawick", type: "tf",
      q: "Komplementäre Kommunikation ist nach Watzlawick grundsätzlich schlecht und sollte vermieden werden.",
      answer: false,
      explain: "Falsch. Komplementär heißt nur, dass sich ungleiche Rollen ergänzen (Ausbilder – Azubi, Experte – Laie). Das ist im Berufsleben normal und oft sinnvoll. Probleme entstehen erst, wenn die Rollen unklar sind oder nicht akzeptiert werden – genauso kann auch symmetrische Kommunikation in Konkurrenz kippen." },
    { id: "q-w5", topic: "watzlawick", type: "input",
      q: "Wie viele Axiome der Kommunikation hat Paul Watzlawick formuliert? (Zahl)",
      answer: ["5", "fünf", "fuenf"],
      explain: "Fünf: nicht nicht kommunizieren · Inhalts- und Beziehungsaspekt · Interpunktion · digital und analog · symmetrisch oder komplementär (Eselsbrücke N-I-I-D-S)." },
    { id: "q-w6", topic: "watzlawick", type: "multi",
      q: "Welche Aussagen zum Eisbergmodell der Kommunikation sind richtig?",
      options: ["Der sichtbare Teil steht für die Sachebene mit Fakten und Argumenten.", "Gefühle, Erwartungen und Ängste liegen unter der Wasseroberfläche.", "Der unsichtbare Teil beeinflusst den Gesprächsverlauf stark.", "Die Aufteilung 20 % zu 80 % ist ein exakt gemessener Wert.", "Das Modell beschreibt die Schichten eines Netzwerkprotokolls."], answer: [0, 1, 2],
      explain: "Das Eisbergmodell zeigt: Sichtbar ist nur die Sachebene, der größere Teil (Gefühle, Erwartungen, Werte, Ängste) liegt verborgen und steuert das Gespräch. Die 20/80-Aufteilung ist nur ein anschauliches Bild, kein Messwert. Mit Netzwerkprotokollen hat das Modell nichts zu tun." },
    { id: "q-w7", topic: "watzlawick", type: "single",
      q: "Was versteht man unter Metakommunikation?",
      options: ["das Sprechen darüber, wie man miteinander kommuniziert", "Kommunikation über mehrere Kanäle gleichzeitig", "das Weiterleiten einer Nachricht an Dritte", "Kommunikation ausschließlich durch Körpersprache"], answer: 0,
      explain: "Metakommunikation ist Kommunikation über die Kommunikation („Ich habe den Eindruck, wir reden aneinander vorbei“). Sie hilft, Beziehungsstörungen und Teufelskreise zu unterbrechen. Mehrkanal-Kommunikation, Weiterleiten oder reine Körpersprache sind etwas anderes." },
    { id: "q-i1", topic: "ich-botschaft-feedback", type: "single",
      q: "Welche Aussage ist eine echte Ich-Botschaft?",
      options: ["„Im Ticket von heute fehlt die Fehlermeldung. Ich muss deshalb beim Kunden nachfragen. Bitte trag sie künftig mit ein.“", "„Ich finde, du bist beim Dokumentieren ziemlich schlampig.“", "„Du vergisst immer die Fehlermeldung.“", "„Ich frage mich, warum du nie richtig zuhörst.“"], answer: 0,
      explain: "Nur die erste Aussage enthält alle drei Bausteine: konkrete Wahrnehmung, Wirkung auf den Sprecher, Wunsch. „Ich finde, du bist schlampig“ und „Ich frage mich, warum du nie …“ sind verkleidete Du-Botschaften (Bewertung bzw. Verallgemeinerung nach dem „Ich“), „Du vergisst immer …“ ist eine offene Du-Botschaft." },
    { id: "q-i2", topic: "ich-botschaft-feedback", type: "multi",
      q: "Welche Bausteine gehören zu einer Ich-Botschaft?",
      options: ["konkrete Wahrnehmung ohne Wertung", "Wirkung auf mich mit Begründung", "Wunsch oder Bitte für die Zukunft", "Hinweis auf frühere Fehler des anderen", "Verallgemeinerung wie „immer“ oder „nie“"], answer: [0, 1, 2],
      explain: "Aufbau: Wahrnehmung → Wirkung (Gefühl/Problem + weil) → Wunsch. Das Aufzählen alter Fehler und Verallgemeinerungen wie „immer“ oder „nie“ machen daraus einen Vorwurf und führen zur Verteidigung des Gegenübers." },
    { id: "q-i3", topic: "ich-botschaft-feedback", type: "single", exam: [],
      q: "Welcher Bereich des Johari-Fensters wird durch Feedback verkleinert?",
      options: ["der blinde Fleck", "der private Bereich", "der freie (öffentliche) Bereich", "der unbekannte Bereich"], answer: 0,
      explain: "Feedback zeigt mir, wie andere mein Verhalten wahrnehmen – es verkleinert den blinden Fleck (anderen bekannt, mir unbekannt). Den privaten Bereich verkleinert man durch Selbstöffnung; der freie Bereich wird durch Feedback größer, nicht kleiner." },
    { id: "q-i4", topic: "ich-botschaft-feedback", type: "multi",
      q: "Welche Regeln gelten für das <strong>Annehmen</strong> von Feedback?",
      options: ["zuhören und ausreden lassen", "bei Unklarheiten nachfragen", "sich für das Feedback bedanken", "sich sofort rechtfertigen", "jede Kritik vollständig umsetzen müssen"], answer: [0, 1, 2],
      explain: "Wer Feedback nimmt, hört zu, fragt nach und bedankt sich. Rechtfertigen blockiert das Gespräch. Man muss auch nicht jede Rückmeldung umsetzen – man entscheidet selbst, was man annimmt." },
    { id: "q-i5", topic: "ich-botschaft-feedback", type: "tf",
      q: "„Ich habe das Gefühl, dass du total unzuverlässig bist“ ist eine gelungene Ich-Botschaft, weil sie mit „Ich“ beginnt.",
      answer: false,
      explain: "Falsch. Entscheidend ist, was nach dem „Ich“ kommt: Hier folgt eine abwertende Bewertung des anderen („unzuverlässig“) – eine verkleidete Du-Botschaft. Es fehlen die konkrete Wahrnehmung, die eigene Wirkung mit Begründung und ein Wunsch." },
    { id: "q-i6", topic: "ich-botschaft-feedback", type: "single",
      q: "Welche Leitfragen stehen im Mittelpunkt einer Retrospektive?",
      options: ["Was lief gut? Was lief nicht gut? Was ändern wir?", "Wer ist schuld am Fehler, und welche Konsequenzen folgen?", "Welche Kosten sind entstanden, und wie hoch ist der Gewinn?", "Welche Kunden sollen als Nächstes angerufen werden?"], answer: 0,
      explain: "Die Retrospektive ist eine Reflexionsmethode: Das Team schaut auf den letzten Abschnitt zurück und vereinbart Verbesserungen. Schuldsuche widerspricht ihrem Zweck; Kosten gehören zur Nachkalkulation, Kundenanrufe zur Vertriebsplanung." },
    { id: "q-z1", topic: "zuhoeren-fragen", type: "single",
      q: "„Sie haben den Rechner doch sicher schon neu gestartet, oder?“ Um welche Frageart handelt es sich?",
      options: ["Suggestivfrage", "Alternativfrage", "offene Frage", "Kontrollfrage"], answer: 0,
      explain: "Die Wörter „doch sicher … oder?“ legen dem Kunden die Antwort in den Mund – typisch für eine Suggestivfrage. Viele Kunden sagen dann „Ja“, obwohl es nicht stimmt. Eine Alternativfrage bietet zwei Möglichkeiten, eine offene Frage lässt freie Antworten zu, eine Kontrollfrage prüft das Verständnis." },
    { id: "q-z2", topic: "zuhoeren-fragen", type: "single",
      q: "Welche Frage eignet sich am besten als Einstieg in eine Bedarfsanalyse?",
      options: ["„Wofür nutzen Ihre Mitarbeitenden die neuen Geräte im Arbeitsalltag?“", "„Möchten Sie ein 14-Zoll-Notebook?“", "„Sie brauchen doch bestimmt auch eine Dockingstation, oder?“", "„Soll es Windows oder macOS sein?“"], answer: 0,
      explain: "Zu Beginn sammelt man mit offenen Fragen möglichst viele Informationen (Trichtertechnik). Die geschlossene Frage und die Alternativfrage legen sich zu früh auf Details fest, die Suggestivfrage manipuliert den Kunden." },
    { id: "q-z3", topic: "zuhoeren-fragen", type: "single", exam: [],
      q: "Ein Kunde schildert ausführlich sein Problem. Du antwortest: „Sie können also Mails empfangen, aber nicht versenden – richtig?“ Welche Technik des aktiven Zuhörens wendest du an?",
      options: ["Paraphrasieren", "Verbalisieren", "Aufmerksamkeit zeigen", "Metakommunikation"], answer: 0,
      explain: "Beim Paraphrasieren gibst du den Inhalt mit eigenen Worten wieder und lässt ihn bestätigen. Verbalisieren würde das Gefühl ansprechen („Das ist ärgerlich“), Aufmerksamkeit zeigen sind kurze Signale wie „mhm“, Metakommunikation ist das Gespräch über die Kommunikation selbst." },
    { id: "q-z4", topic: "zuhoeren-fragen", type: "multi",
      q: "Welche Fragen sind <strong>geschlossene</strong> Fragen?",
      options: ["„Leuchtet die LED am Netzwerkanschluss?“", "„Tritt der Fehler auch an anderen PCs auf?“", "„Haben Sie seit dem Update neu gestartet?“", "„Was passiert genau, wenn Sie drucken?“", "„Wie sieht Ihr typischer Arbeitsablauf aus?“"], answer: [0, 1, 2],
      explain: "Geschlossene Fragen lassen sich mit Ja oder Nein beantworten (Verb am Satzanfang). Die W-Fragen „Was passiert …?“ und „Wie sieht … aus?“ sind offen und fordern eine ausführliche Antwort." },
    { id: "q-z5", topic: "zuhoeren-fragen", type: "tf",
      q: "Bei der Trichtertechnik beginnt man mit geschlossenen Fragen und öffnet das Gespräch anschließend mit offenen Fragen.",
      answer: false,
      explain: "Falsch – umgekehrt. Man beginnt weit mit offenen Fragen (Überblick, Bedarf), grenzt dann mit geschlossenen Fragen und Alternativfragen ein und sichert das Ergebnis mit einer Kontrollfrage bzw. Zusammenfassung." },
    { id: "q-z6", topic: "zuhoeren-fragen", type: "single",
      q: "Was ist ein Nachteil geschlossener Fragen in einem Fragebogen zur Bedarfserhebung?",
      options: ["Sie liefern nur vorgegebene Antworten, unerwartete Anforderungen gehen verloren.", "Sie sind besonders schwer auszuwerten.", "Sie kosten die Befragten besonders viel Zeit.", "Sie sind nach der DSGVO grundsätzlich unzulässig."], answer: 0,
      explain: "Geschlossene Fragen sind schnell beantwortet und leicht auszuwerten – genau darin liegt ihr Vorteil. Ihr Nachteil: Was nicht als Antwort vorgesehen ist, erfährt man nicht. Mit der DSGVO haben Frageformen nichts zu tun." },
    { id: "q-k1", topic: "kundengespraech", type: "single",
      q: "In welcher Phase eines Supportgesprächs fasst du das Anliegen zusammen und lässt es dir vom Kunden bestätigen, bevor du mit der Lösung beginnst?",
      options: ["Verständnis sichern", "Eröffnung", "Abschluss", "Vereinbarung"], answer: 0,
      explain: "Nach dem Klären des Anliegens sicherst du das Verständnis mit einer Zusammenfassung und einer Kontrollfrage – erst dann folgt die Lösung. In der Eröffnung begrüßt und identifizierst du den Kunden, in der Vereinbarung legst du nächste Schritte fest, im Abschluss verabschiedest du dich und dokumentierst." },
    { id: "q-k2", topic: "kundengespraech", type: "single",
      q: "Welche Aussage beschreibt einen <strong>Nutzen</strong> im Sinne der Nutzenargumentation (Merkmal – Vorteil – Nutzen)?",
      options: ["„Dadurch schaffen Sie in der Beratung mehr Termine pro Tag.“", "„Das Notebook hat eine SSD mit 1 TB.“", "„Das Gerät wiegt nur 1,3 kg.“", "„Der Prozessor hat zwölf Kerne.“"], answer: 0,
      explain: "SSD, Gewicht und Prozessorkerne sind technische Merkmale. Der Nutzen übersetzt ein Merkmal in einen konkreten Gewinn für genau diesen Kunden – formuliert im „Sie-Stil“." },
    { id: "q-k3", topic: "kundengespraech", type: "multi",
      q: "Welche Angaben gehören in ein Angebot an einen Kunden?",
      options: ["Leistungsbeschreibung und Mengen", "Preise", "Liefer- und Zahlungsbedingungen", "Gültigkeitsdauer des Angebots", "private Handynummer des Verkäufers", "Kontostand des Kunden"], answer: [0, 1, 2, 3],
      explain: "Ein Angebot beschreibt, was zu welchem Preis und zu welchen Bedingungen geliefert wird und wie lange das Angebot gilt. Private Daten des Verkäufers oder Finanzdaten des Kunden gehören nicht hinein." },
    { id: "q-k4", topic: "kundengespraech", type: "tf",
      q: "Ein Einwand wie „Das ist mir zu teuer“ bedeutet, dass der Kunde kein Interesse hat; man sollte ihn deshalb übergehen.",
      answer: false,
      explain: "Falsch. Ein Einwand zeigt meist Interesse – der Kunde wägt ab. Richtig ist, ihn ernst zu nehmen, nachzufragen (z. B. womit er vergleicht) und den Nutzen oder günstigere Alternativen aufzuzeigen." },
    { id: "q-k5", topic: "kundengespraech", type: "single",
      q: "Ein Kunde ohne IT-Kenntnisse fragt, was DNS ist. Welche Erklärung ist kundengerecht <em>und</em> fachlich korrekt?",
      options: ["„Das ist wie ein Telefonbuch des Internets: Es übersetzt Namen wie www.beispiel.de in die Adresse des Servers.“", "„DNS ist das Kabel, über das das Internet ins Haus kommt.“", "„DNS verschlüsselt Ihre Verbindung, damit niemand mitlesen kann.“", "„DNS ist ein Protokoll der Anwendungsschicht, das über Port 53 Resource Records auflöst.“"], answer: 0,
      explain: "Der Telefonbuch-Vergleich ist verständlich und stimmt fachlich (Namensauflösung). Die Kabel- und die Verschlüsselungserklärung sind falsch. Die letzte Antwort ist zwar korrekt, für einen Laien aber unverständlich – also nicht adressatengerecht." },
    { id: "q-k6", topic: "kundengespraech", type: "single",
      q: "Ein Kunde verlangt wegen eines Ausfalls eine Gutschrift. Über Gutschriften darf nur die Teamleitung entscheiden. Wie nennt man die Weitergabe des Falls an die Teamleitung?",
      options: ["hierarchische Eskalation", "funktionale Eskalation", "Deeskalation", "Delegation an den 3rd Level"], answer: 0,
      explain: "Hier fehlt nicht Fachwissen, sondern Entscheidungsbefugnis – deshalb geht der Fall vertikal an die Vorgesetzte (hierarchische Eskalation). Funktional (horizontal) wäre die Weitergabe an ein Team mit mehr Fachwissen, z. B. den 2nd oder 3rd Level. Deeskalation bedeutet, ein emotionales Gespräch zu beruhigen." },
    { id: "q-k7", topic: "kundengespraech", type: "single",
      q: "Du gibst ein Ticket an den 2nd Level weiter. Welcher Satz an den Kunden ist am professionellsten?",
      options: ["„Ich gebe Ihr Anliegen mit allen Details an unsere Netzwerkspezialisten weiter. Frau Lorenzen meldet sich bis 14 Uhr bei Ihnen, Ihre Ticketnummer ist 5120.“", "„Dafür bin ich nicht zuständig, rufen Sie bitte eine andere Nummer an.“", "„Das kann dauern, die Kollegen haben viel zu tun.“", "„Ich leite das weiter, Sie hören dann irgendwann von uns.“"], answer: 0,
      explain: "Der Kunde erfährt, dass und warum weitergegeben wird, wer sich bis wann meldet, und erhält eine Ticketnummer – so bleibt die Vereinbarungsphase verbindlich. Die anderen Sätze wimmeln ab, machen keine Zusage oder wirken gleichgültig und eskalieren eher." },
    { id: "q-d1", topic: "deeskalation", type: "single",
      q: "Welche Reaktion wirkt bei einem verärgerten Kunden am ehesten deeskalierend?",
      options: ["„Ich verstehe, dass Sie das ärgert. Ich kümmere mich jetzt sofort darum.“", "„Beruhigen Sie sich bitte erst einmal.“", "„Da sind Sie nicht der Einzige, heute haben viele Probleme.“", "„Dafür bin ich nicht zuständig.“"], answer: 0,
      explain: "Verständnis zeigen und einen konkreten nächsten Schritt zusagen nimmt dem Ärger die Energie. „Beruhigen Sie sich“ wirkt belehrend, „Sie sind nicht der Einzige“ spielt das Problem herunter, und „nicht zuständig“ lässt den Kunden allein – alle drei heizen den Konflikt an." },
    { id: "q-d2", topic: "deeskalation", type: "tf",
      q: "Wer Verständnis für den Ärger eines Kunden zeigt, gibt damit automatisch zu, dass das Unternehmen einen Fehler gemacht hat.",
      answer: false,
      explain: "Falsch. „Ich verstehe, dass Sie verärgert sind“ erkennt das Gefühl an (Verbalisieren), ohne eine Schuld einzugestehen. Genau deshalb ist dieser Satz ein wichtiges Werkzeug der Deeskalation." },
    { id: "q-d3", topic: "deeskalation", type: "multi",
      q: "Welche Schritte gehören zu einem professionellen Beschwerdemanagement?",
      options: ["Beschwerde annehmen und sich bedanken", "Sachverhalt klären", "Lösung anbieten und nachfassen", "Beschwerden auswerten, um Ursachen zu beseitigen", "Beschwerde möglichst schnell ohne Rückmeldung an den Kunden schließen"], answer: [0, 1, 2, 3],
      explain: "Ablauf: annehmen und bedanken → klären → lösen → nachfassen → auswerten. Ein Schließen ohne Rückmeldung verärgert den Kunden erneut und verschenkt die Chance, Ursachen zu erkennen." },
    { id: "q-d4", topic: "deeskalation", type: "single",
      q: "Ein Anrufer beleidigt dich mehrfach persönlich. Was ist die professionellste Reaktion?",
      options: ["Grenze mit Ich-Botschaft setzen, Konsequenz ankündigen und bei Fortsetzung das Gespräch beenden und an die Vorgesetzte eskalieren", "zurückbeleidigen, damit der Anrufer merkt, dass es so nicht geht", "wortlos auflegen und das Ticket schließen", "alles schweigend ertragen, weil der Kunde immer recht hat"], answer: 0,
      explain: "Beleidigungen muss niemand hinnehmen. Eine klare, ruhige Grenze mit angekündigter Konsequenz bleibt professionell; danach folgt ggf. die hierarchische Eskalation und eine sachliche Dokumentation. Zurückbeleidigen eskaliert, wortloses Auflegen lässt das Problem ungelöst, schweigendes Ertragen schadet dir." },
    { id: "q-d5", topic: "deeskalation", type: "single",
      q: "Ein Kunde erzählt ausschweifend von seinem Wochenende, statt das Problem zu schildern. Wie gehst du vor?",
      options: ["freundlich unterbrechen, kurz zusammenfassen und mit geschlossenen Fragen zum Problem führen", "ihn beliebig lange reden lassen, damit er zufrieden ist", "das Gespräch sofort beenden", "ihm deutlich sagen, dass er zu viel redet"], answer: 0,
      explain: "Beim Vielredner lenkst du höflich, aber bestimmt zurück zum Thema; geschlossene Fragen begrenzen die Antworten. Endloses Zuhören blockiert andere Kunden, Abbruch oder Kritik an seiner Person verletzt ihn." },
    { id: "q-ko1", topic: "konflikte", type: "single",
      q: "Auf welcher Eskalationsstufe nach Glasl suchen die Konfliktparteien gezielt Verbündete und bauen Feindbilder auf?",
      options: ["Stufe 4: Images und Koalitionen", "Stufe 1: Verhärtung", "Stufe 6: Drohstrategien", "Stufe 9: Gemeinsam in den Abgrund"], answer: 0,
      explain: "Auf Stufe 4 werben die Parteien Anhänger und pflegen Feindbilder – damit beginnt die win-lose-Ebene. Stufe 1 ist nur eine Verhärtung der Standpunkte, auf Stufe 6 wird gedroht, Stufe 9 ist die totale gegenseitige Zerstörung." },
    { id: "q-ko2", topic: "konflikte", type: "input",
      q: "Wie viele Eskalationsstufen umfasst das Konfliktmodell nach Friedrich Glasl? (Zahl)",
      answer: ["9", "neun"],
      explain: "Neun Stufen in drei Ebenen: 1–3 win-win, 4–6 win-lose, 7–9 lose-lose." },
    { id: "q-ko3", topic: "konflikte", type: "multi",
      q: "Welche Grundsätze gehören zum Harvard-Konzept?",
      options: ["Menschen und Probleme getrennt behandeln", "Interessen statt Positionen in den Mittelpunkt stellen", "Optionen zum gegenseitigen Vorteil entwickeln", "neutrale Beurteilungskriterien anwenden", "die eigene Position früh festlegen und hart verteidigen", "Zugeständnisse nur unter Zeitdruck machen"], answer: [0, 1, 2, 3],
      explain: "Die vier Grundsätze von Fisher und Ury sind: Mensch und Problem trennen, Interessen statt Positionen, Optionen entwickeln, neutrale Kriterien. Das starre Verteidigen von Positionen ist genau das „Positionsfeilschen“, das das Konzept überwinden will." },
    { id: "q-ko4", topic: "konflikte", type: "single",
      q: "Zwei Projekte beanspruchen gleichzeitig denselben Netzwerktechniker. Um welche Konfliktart handelt es sich?",
      options: ["Verteilungskonflikt", "Wertekonflikt", "Beziehungskonflikt", "Rollenkonflikt"], answer: 0,
      explain: "Streit um knappe Ressourcen (Personal, Budget, Zeit) ist ein Verteilungskonflikt. Ein Wertekonflikt betrifft Grundüberzeugungen, ein Beziehungskonflikt Antipathie und Kränkungen, ein Rollenkonflikt widersprüchliche Erwartungen an eine Person in ihrer Rolle." },
    { id: "q-ko5", topic: "konflikte", type: "tf",
      q: "Auf den Glasl-Stufen 1 bis 3 ist grundsätzlich noch eine Lösung möglich, bei der beide Seiten gewinnen.",
      answer: true,
      explain: "Richtig. Die Stufen 1–3 (Verhärtung, Debatte, Taten statt Worte) bilden die win-win-Ebene; die Parteien können den Konflikt oft noch selbst oder mit Moderation lösen. Ab Stufe 4 geht es um Sieg und Niederlage, ab Stufe 7 verlieren beide." },
    { id: "q-ko6", topic: "konflikte", type: "single",
      q: "Welche Konfliktlösungsstrategie führt zu einer gemeinsamen Lösung, die die Interessen beider Seiten erfüllt?",
      options: ["Konsens (Kooperation)", "Kompromiss", "Delegation", "Flucht (Vermeiden)"], answer: 0,
      explain: "Beim Konsens wird eine neue Lösung gefunden, die beide Interessen erfüllt (win-win). Beim Kompromiss geben beide etwas auf und sind nur teilweise zufrieden, bei der Delegation entscheidet ein Dritter, bei der Flucht bleibt der Konflikt ungelöst." },
    { id: "q-ko7", topic: "konflikte", type: "single",
      q: "Welche Intervention ordnet Glasl den höchsten Eskalationsstufen 7 bis 9 zu?",
      options: ["Machteingriff", "Moderation", "Prozessbegleitung", "Feedbackrunde im Team"], answer: 0,
      explain: "Auf den Stufen 7–9 (lose-lose) wollen die Parteien einander nur noch schaden; helfen kann meist nur ein Machteingriff, z. B. eine Entscheidung der Geschäftsführung. Moderation passt zu den Stufen 1–3, Prozessbegleitung etwa zu 3–5. Eine Feedbackrunde setzt voraus, dass beide noch sachlich miteinander reden." },
    { id: "q-t1", topic: "team", type: "single",
      q: "Im Projektteam wird heftig über Zuständigkeiten gestritten, zwei Mitglieder verbünden sich gegen die Projektleitung. In welcher Teamphase nach Tuckman befindet sich das Team?",
      options: ["Storming", "Forming", "Norming", "Performing"], answer: 0,
      explain: "Machtkämpfe, Kritik und Grüppchenbildung kennzeichnen die Storming-Phase. Im Forming ist man noch höflich und abwartend, im Norming entstehen gemeinsame Regeln, im Performing arbeitet das Team selbstorganisiert und leistungsstark." },
    { id: "q-t2", topic: "team", type: "input",
      q: "Wie viele Kommunikationsbeziehungen bestehen in einem Team mit 6 Personen? (Zahl)",
      answer: ["15", "15 Beziehungen", "15 Kommunikationsbeziehungen"],
      explain: "K = n × (n − 1) ÷ 2 = 6 × 5 ÷ 2 = 15. Jede Person kann mit jeder anderen kommunizieren; geteilt durch 2, weil jede Beziehung sonst doppelt gezählt würde." },
    { id: "q-t3", topic: "team", type: "single",
      q: "Du willst einem Kollegen eine persönliche Kritik zu seinem Umgang mit Kunden mitteilen. Welcher Kanal ist am besten geeignet?",
      options: ["persönliches Gespräch unter vier Augen oder ein Videotelefonat", "eine Nachricht im Team-Gruppenchat", "eine E-Mail mit dem Teamleiter in CC", "ein Eintrag im Ticketsystem"], answer: 0,
      explain: "Kritik gehört unter vier Augen und in einen Kanal mit Stimme und Mimik, damit Missverständnisse sofort geklärt werden können. Im Gruppenchat stellt man den Kollegen bloß, CC an den Chef wirkt wie eine Drohung, und das Ticketsystem ist für Kundenvorgänge da." },
    { id: "q-t4", topic: "team", type: "multi", exam: ["AP2"],
      q: "Welche Regeln sind in beruflichen Videokonferenzen sinnvoll?",
      options: ["Mikrofon stummschalten, wenn man nicht spricht", "vor dem Bildschirmteilen vertrauliche Fenster und Benachrichtigungen schließen", "Aufzeichnung nur nach Information und Einwilligung der Teilnehmenden", "die Kamera grundsätzlich immer ausgeschaltet lassen", "nebenbei E-Mails beantworten, um Zeit zu sparen"], answer: [0, 1, 2],
      explain: "Stummschalten verhindert Störgeräusche, das Schließen vertraulicher Fenster schützt Daten beim Teilen, und Aufzeichnungen betreffen personenbezogene Daten (Bild und Stimme). Eine dauerhaft ausgeschaltete Kamera nimmt die nonverbale Ebene weg, Nebenbeschäftigung wird bemerkt und wirkt respektlos (Axiom 1)." },
    { id: "q-t5", topic: "team", type: "tf",
      q: "Ein Machtpromotor unterstützt eine Veränderung vor allem durch seine Entscheidungsbefugnis.",
      answer: true,
      explain: "Richtig. Der Machtpromotor (z. B. Geschäftsführung) treibt die Veränderung mit seiner hierarchischen Macht voran und stellt Ressourcen bereit; der Fachpromotor unterstützt mit Fachwissen." },
    { id: "q-t6", topic: "team", type: "single",
      q: "Wie lange dauert das Daily Scrum laut Scrum Guide höchstens?",
      options: ["15 Minuten", "5 Minuten", "30 Minuten", "60 Minuten"], answer: 0,
      explain: "Das Daily Scrum ist auf 15 Minuten begrenzt (Timebox). Es dient der Abstimmung des Fortschritts und dem Erkennen von Hindernissen – Detaildiskussionen finden danach in kleiner Runde statt." },
    { id: "q-t7", topic: "team", type: "single",
      q: "Bei der Einführung eines Ticketportals werden Key-User geschult und ein Standort startet im Pilotbetrieb. Zu welcher Phase nach Lewin gehören diese Maßnahmen?",
      options: ["Verändern (move)", "Auftauen (unfreeze)", "Stabilisieren (refreeze)", "Storming"], answer: 0,
      explain: "Schulung und Pilotbetrieb führen das Neue ein und lassen es ausprobieren – das ist die Phase Verändern. Beim Auftauen wird erst die Notwendigkeit erklärt und Bereitschaft geschaffen, beim Stabilisieren wird das Neue als Normalfall verankert. Storming ist eine Teamphase nach Tuckman, keine Phase nach Lewin." },
    { id: "q-t8", topic: "team", type: "tf",
      q: "In der Phase „Auftauen“ nach Lewin geht es vor allem darum, den Betroffenen die Notwendigkeit der Veränderung verständlich zu machen und ihre Sorgen anzuhören.",
      answer: true,
      explain: "Richtig. Ohne Einsicht in das Warum entsteht Widerstand. Deshalb wird in der ersten Phase offen informiert und beteiligt; Schulungen folgen in der Phase Verändern, das Verankern im Alltag in der Phase Stabilisieren." },
    { id: "q-s1", topic: "schriftlich", type: "single",
      q: "Du verschickst eine Information an 40 externe Kunden. In welches Adressfeld trägst du die Kundenadressen ein?",
      options: ["BCC", "CC", "An", "Antwort an"], answer: 0,
      explain: "Im BCC-Feld (Blindkopie) sieht kein Empfänger die Adressen der anderen. In An oder CC würden alle 40 Adressen offengelegt – ein Datenschutzverstoß, weil E-Mail-Adressen personenbezogene Daten sind. „Antwort an“ legt nur fest, wohin Antworten gehen." },
    { id: "q-s2", topic: "schriftlich", type: "multi",
      q: "Welche Angaben gehören in den Kopf eines Protokolls?",
      options: ["Datum und Uhrzeit", "Teilnehmende und Abwesende", "Protokollführung", "Anlass bzw. Tagesordnung", "persönliche Einschätzung der Protokollführung zu den Teilnehmenden"], answer: [0, 1, 2, 3],
      explain: "Der Protokollkopf enthält Anlass, Datum, Zeit, Ort, Teilnehmende, Abwesende, Protokollführung und Tagesordnung. Persönliche Wertungen haben in einem sachlichen Protokoll nichts zu suchen." },
    { id: "q-s3", topic: "schriftlich", type: "single",
      q: "Welches Protokoll gibt zusätzlich zu den Ergebnissen auch den Diskussionsverlauf wieder?",
      options: ["Verlaufsprotokoll", "Ergebnisprotokoll", "Abnahmeprotokoll", "Übergabeprotokoll"], answer: 0,
      explain: "Das Verlaufsprotokoll hält fest, wer was vorgebracht hat. Das Ergebnisprotokoll enthält nur Beschlüsse und Aufgaben. Abnahme- und Übergabeprotokolle dokumentieren die Abnahme bzw. Übergabe einer Leistung." },
    { id: "q-s4", topic: "schriftlich", type: "tf",
      q: "Durchgehende GROSSBUCHSTABEN werden in E-Mails und Chats als Schreien empfunden und sollten vermieden werden.",
      answer: true,
      explain: "Richtig. Das ist eine Grundregel der Netiquette. Großschreibung wirkt schriftlich wie eine laute, aggressive Stimme – die „analoge“ Ebene der Nachricht." },
    { id: "q-s5", topic: "schriftlich", type: "single",
      q: "Ein Anrufer gibt sich als Microsoft-Support aus und verlangt sofort Fernzugriff auf deinen PC. Wie verhältst du dich richtig?",
      options: ["keinen Zugriff gewähren, Gespräch beenden, über eine bekannte Nummer rückfragen und den Vorfall melden", "Zugriff gewähren, weil Hersteller ihre Kunden bei Problemen aktiv anrufen", "Zugriff gewähren, aber vorher das eigene Passwort ändern", "dem Anrufer das Passwort nennen, damit er ohne Fernzugriff arbeiten kann"], answer: 0,
      explain: "Das ist eine typische Social-Engineering-Masche, die Hilfsbereitschaft und Zeitdruck ausnutzt. Hersteller rufen nicht unaufgefordert an. Richtig ist: nichts herausgeben, Identität über einen bekannten, offiziellen Kanal prüfen und den Vorfall der IT-Sicherheit melden." },
    { id: "q-s6", topic: "schriftlich", type: "input",
      q: "Nach welchem Artikel der DSGVO können Betroffene Auskunft über die zu ihnen gespeicherten Daten verlangen – z. B. über Notizen in einem Ticket? (Zahl)",
      answer: ["15", "Art. 15", "Art 15", "Artikel 15", "Art. 15 DSGVO", "Art 15 DSGVO", "Artikel 15 DSGVO"],
      explain: "Art. 15 DSGVO regelt das Auskunftsrecht der betroffenen Person. Deshalb gehören in Tickets nur sachliche, nachvollziehbare Angaben – keine abwertenden Bemerkungen über Kunden." },
    { id: "q-s7", topic: "schriftlich", type: "multi",
      q: "Was gehört zu einer klaren Arbeitsanweisung im Team-Chat?",
      options: ["die zuständige Person (Wer, z. B. per @-Erwähnung)", "die konkrete Aufgabe (Was)", "eine Frist (Bis wann)", "die gewünschte Rückmeldung", "möglichst viele Emojis zur Auflockerung"], answer: [0, 1, 2, 3],
      explain: "Wer + Was + Bis wann + Rückmeldung – dann fühlt sich niemand übergangen oder unzuständig. Emojis ersetzen keine Klarheit und können als „analoge“ Signale zusätzlich missverstanden werden." },
    { id: "q-s8", topic: "schriftlich", type: "single",
      q: "Die Buchhaltung erhält eine E-Mail, scheinbar vom Geschäftsführer: „Bitte überweisen Sie heute noch vertraulich 38.000 € an einen neuen Lieferanten. Ich bin im Termin und nicht erreichbar.“ Wie reagiert die Mitarbeiterin richtig?",
      options: ["Sie überweist nicht, ruft den Geschäftsführer über die bekannte Nummer an und meldet den Vorfall der IT-Sicherheit.", "Sie antwortet auf die E-Mail und bittet um eine kurze Bestätigung.", "Sie überweist sofort, weil die Anweisung vom Geschäftsführer kommt.", "Sie leitet die E-Mail an alle Kolleginnen und Kollegen weiter und überweist danach."], answer: 0,
      explain: "Zeitdruck, Geheimhaltung und ein ungewöhnlicher Weg sind typische Zeichen für CEO-Fraud. Prüfen muss man über einen unabhängigen, bekannten Kanal – eine Antwort auf die E-Mail landet beim Täter, der die „Bestätigung“ gern gibt. Sofort überweisen ist genau das Ziel des Angriffs, und eine Rundmail an alle löst das Problem nicht." },
    { id: "q-p1", topic: "praesentation", type: "single",
      q: "Welche Darstellung eignet sich am besten, um die Entwicklung der monatlichen Ticketanzahl über zwölf Monate zu zeigen?",
      options: ["Liniendiagramm", "Kreisdiagramm", "Streudiagramm", "Tabelle mit allen Einzelwerten"], answer: 0,
      explain: "Verläufe über die Zeit zeigt man mit einem Liniendiagramm. Ein Kreisdiagramm zeigt Anteile an einem Ganzen, ein Streudiagramm den Zusammenhang zweier Größen; eine Tabelle liefert genaue Werte, macht den Trend aber nicht auf einen Blick sichtbar." },
    { id: "q-p2", topic: "praesentation", type: "multi",
      q: "Welche Regeln gelten für gut lesbare Präsentationsfolien?",
      options: ["eine Kernaussage pro Folie", "Stichworte statt ganzer Sätze", "ausreichend große, serifenlose Schrift", "hoher Kontrast zwischen Schrift und Hintergrund", "möglichst viele Animationen pro Folie", "den vollständigen Vortragstext auf die Folie schreiben"], answer: [0, 1, 2, 3],
      explain: "Folien unterstützen den Vortrag, sie ersetzen ihn nicht: eine Kernaussage, Stichworte, große Schrift, starker Kontrast. Viele Animationen lenken ab, und ein ausgeschriebener Vortragstext verleitet zum Ablesen." },
    { id: "q-p3", topic: "praesentation", type: "single",
      q: "Welche Stufe folgt bei der Vier-Stufen-Methode zur Anwenderschulung direkt auf „Vormachen und erklären“?",
      options: ["Nachmachen und erklären lassen", "Vorbereiten", "Üben und abschließen", "eine schriftliche Prüfung ablegen"], answer: 0,
      explain: "Reihenfolge: 1. Vorbereiten, 2. Vormachen und erklären, 3. Nachmachen und erklären lassen, 4. Üben und abschließen (mit Erfolgskontrolle und Rückmeldung). Das Vorbereiten kommt zuerst, das selbstständige Üben erst nach dem Nachmachen. Eine schriftliche Prüfung gehört nicht zur Methode." },
    { id: "q-p6", topic: "praesentation", type: "single",
      q: "Du planst die Einweisung einer Mitarbeiterin in ihren neuen Homeoffice-Arbeitsplatz. Was ist eine geeignete <strong>Erfolgskontrolle</strong>?",
      options: ["Die Mitarbeiterin baut selbst die VPN-Verbindung auf und legt eine Datei auf dem Server ab; das Ergebnis wird im Übergabeprotokoll bestätigt.", "Du zeigst alle Funktionen des Notebooks möglichst schnell hintereinander.", "Du schickst ihr nach der Übergabe die Herstelleranleitung per E-Mail.", "Die Mitarbeiterin unterschreibt die Rechnung für das Notebook."], answer: 0,
      explain: "Ob die Einweisung gewirkt hat, zeigt sich erst, wenn die Anwenderin die Aufgabe selbst ausführt – das entspricht der vierten Stufe (üben und abschließen). Schnelles Vorführen ist nur Stufe 2 ohne Kontrolle, eine nachgeschickte Anleitung ist eine Unterlage, keine Kontrolle, und eine Rechnung hat mit dem Lernerfolg nichts zu tun." },
    { id: "q-p4", topic: "praesentation", type: "tf",
      q: "Eine Internetquelle ist allein deshalb zuverlässig, weil sie in der Suchmaschine ganz oben steht.",
      answer: false,
      explain: "Falsch. Die Platzierung hängt von Suchalgorithmen und oft von Werbung ab. Beurteilen musst du Urheber, Aktualität, Belege und Interessen der Quelle und sie mit weiteren Quellen vergleichen." },
    { id: "q-p5", topic: "praesentation", type: "single",
      q: "Welche Aufgabe hat der Schluss einer Präsentation?",
      options: ["Kernbotschaft zusammenfassen, Empfehlung oder Ausblick geben und Raum für Fragen lassen", "neue Themen einführen, die im Hauptteil keinen Platz hatten", "die Gliederung des Vortrags vorstellen", "sich ausführlich für mögliche Fehler entschuldigen"], answer: 0,
      explain: "Der Schluss bleibt am stärksten im Gedächtnis: Zusammenfassung, Kernbotschaft, Empfehlung oder Ausblick, Dank und Fragen. Neue Themen verwirren, die Gliederung gehört in die Einleitung, Entschuldigungen schwächen die Wirkung." },
    { id: "q-f1", topic: "fachgespraech", type: "input",
      q: "Wie viele Minuten soll die Projektpräsentation in der AP2 (Fachinformatiker/-in Systemintegration) höchstens dauern? (Zahl)",
      answer: ["15", "15 Minuten", "15 min"],
      explain: "Nach § 20 FIAusbV soll die Präsentation höchstens 15 Minuten dauern; Präsentation und Fachgespräch zusammen höchstens 30 Minuten." },
    { id: "q-f2", topic: "fachgespraech", type: "input",
      q: "Wie viel Prozent der Gesamtnote machen Präsentation und Fachgespräch zusammen aus? (Zahl in %)",
      answer: ["25", "25 %", "25 Prozent"],
      explain: "Der Prüfungsbereich Projekt zählt 50 % der Gesamtnote; davon entfallen 50 % auf den zweiten Teil (Präsentation + Fachgespräch): 0,5 × 0,5 = 0,25 = 25 %." },
    { id: "q-f3", topic: "fachgespraech", type: "multi",
      q: "Welche Kriterien bewertet der Prüfungsausschuss typischerweise im Fachgespräch?",
      options: ["Fachhintergrund und Fachsprache", "Problemlösungskompetenz", "Argumentation und Begründung", "Corporate Design der Folien", "Anzahl der gezeigten Folien"], answer: [0, 1, 2],
      explain: "Im Fachgespräch zählen Fachwissen (auch über das Projekt hinaus), die Fähigkeit, Probleme zu lösen, und die Begründung von Entscheidungen. Das Firmen-Design der Folien und ihre Anzahl sind hier kein Kriterium." },
    { id: "q-f4", topic: "fachgespraech", type: "single",
      q: "Du kennst im Fachgespräch die Antwort auf eine Frage nicht. Wie reagierst du am besten?",
      options: ["ehrlich zugeben und einen fachlich sinnvollen Lösungsweg beschreiben", "schnell irgendeine Antwort geben, damit keine Pause entsteht", "die Frage als nicht projektrelevant zurückweisen", "mit dem Ausschuss über die Fairness der Frage diskutieren"], answer: 0,
      explain: "Ehrlichkeit plus Lösungsweg zeigt Problemlösungskompetenz – ein Bewertungskriterium. Geratene Antworten führen oft zu Nachfragen und zeigen Fehler, Zurückweisen oder Diskutieren wirkt unprofessionell." },
    { id: "q-f5", topic: "fachgespraech", type: "tf",
      q: "Im Fachgespräch darf der Prüfungsausschuss auch Fragen zum fachlichen Umfeld stellen, die weder in der Dokumentation noch in der Präsentation vorkommen.",
      answer: true,
      explain: "Richtig. Das Fachgespräch bezieht sich auf die Projektarbeit und ihr fachliches Umfeld. Deshalb solltest du die eingesetzten Techniken auch über dein Projekt hinaus erklären können." },
    { id: "q-f6", topic: "fachgespraech", type: "single",
      q: "In welcher Reihenfolge ist eine überzeugende Argumentationskette aufgebaut?",
      options: ["These → Begründung → Beleg/Beispiel → Schlussfolgerung", "Beleg → These → Schlussfolgerung → Begründung", "Schlussfolgerung → Beispiel → These → Begründung", "Begründung → Schlussfolgerung → These → Beleg"], answer: 0,
      explain: "Erst die Behauptung, dann das Warum, dann ein konkreter Beleg (Zahl, Messwert, Beispiel aus dem Projekt) und zum Schluss die Folgerung. So kann der Ausschuss deinem Gedankengang folgen." },
    { id: "q-f7", topic: "fachgespraech", type: "single",
      q: "Wer ist die Zielgruppe deiner Projektpräsentation in der AP2?",
      options: ["der fachkundige Prüfungsausschuss", "der Auftraggeber des Projekts als IT-Laie", "die Geschäftsführung deines Ausbildungsbetriebs", "die späteren Anwender der Lösung"], answer: 0,
      explain: "Du präsentierst vor dem Prüfungsausschuss, also vor Fachleuten. Deshalb verwendest du Fachbegriffe korrekt und stellst dein Vorgehen und deine Entscheidungen in den Mittelpunkt – keine Laien-Erklärung und keine Verkaufsveranstaltung für Kunde, Geschäftsführung oder Anwender." },
  ],
  cards: [
    { topic: "grundlagen", f: "Sender-Empfänger-Modell – die Stationen", b: "Sender kodiert → Nachricht über einen Kanal → Empfänger dekodiert → Feedback. An jeder Station sind Störungen möglich." },
    { topic: "grundlagen", f: "Kodierung vs. Dekodierung", b: "Kodierung: Der Sender übersetzt seinen Gedanken in Zeichen. Dekodierung: Der Empfänger übersetzt die Zeichen mit eigenem Wissen und eigenen Erwartungen zurück." },
    { topic: "grundlagen", f: "Drei Arten von Störquellen", b: "technisch/Umgebung (Verbindung, Lärm) · sprachlich (Jargon, unvollständige Angaben) · persönlich (Stress, Vorurteile, Beziehung)" },
    { topic: "grundlagen", f: "verbal – paraverbal – nonverbal", b: "Worte – Stimme (Tonfall, Tempo, Lautstärke, Pausen) – Körpersprache (Mimik, Gestik, Blickkontakt, Haltung)" },
    { topic: "grundlagen", f: "Kongruenz", b: "Alle Ebenen einer Nachricht passen zusammen. Bei Inkongruenz glaubt der Empfänger meist der nonverbalen bzw. paraverbalen Ebene." },
    { topic: "vier-seiten", f: "Die vier Seiten einer Nachricht", b: "Sachinhalt · Selbstkundgabe · Beziehung · Appell (Eselsbrücke S-S-B-A)" },
    { topic: "vier-seiten", f: "Selbstkundgabe (Selbstoffenbarung)", b: "Was der Sender über sich selbst preisgibt: Gefühle, Zustand, Haltung – z. B. „Ich bin gestresst.“" },
    { topic: "vier-seiten", f: "Appell", b: "Wozu der Sender den Empfänger bringen will – ausdrücklich („Bitte starte neu“) oder versteckt („Der Dienst läuft schon wieder nicht“)." },
    { topic: "vier-seiten", f: "Antwort „Mach es doch selbst!“ – welches Ohr?", b: "Beziehungs-Ohr: Der Empfänger hört einen Vorwurf und reagiert mit Rechtfertigung oder Gegenangriff." },
    { topic: "vier-seiten", f: "Grenze des Vier-Seiten-Modells", b: "Es liefert nur Deutungen einer einzelnen Nachricht; sich hochschaukelnde Gesprächsverläufe erklärt es nicht." },
    { topic: "watzlawick", f: "Die 5 Axiome (N-I-I-D-S)", b: "nicht nicht kommunizieren · Inhalt/Beziehung · Interpunktion · digital/analog · symmetrisch/komplementär" },
    { topic: "watzlawick", f: "Axiom 3 – Signal im Aufgabentext", b: "„weil du …“ – „nein, weil du …“: Jeder sieht sich nur als Reagierenden → Teufelskreis ohne klaren Anfang." },
    { topic: "watzlawick", f: "digital vs. analog (Axiom 4)", b: "digital = Worte (Inhalt) · analog = Tonfall, Mimik, Gestik, Emoji (Beziehung)" },
    { topic: "watzlawick", f: "symmetrisch vs. komplementär (Axiom 5)", b: "symmetrisch = Augenhöhe (Kollegen) · komplementär = ungleiche, sich ergänzende Rollen (Ausbilder – Azubi, Experte – Laie)" },
    { topic: "watzlawick", f: "Metakommunikation", b: "Sprechen über die Kommunikation selbst („Wir reden aneinander vorbei“) – Ausweg aus Beziehungsstörungen und Teufelskreisen." },
    { topic: "watzlawick", f: "Eisbergmodell", b: "Sichtbar: Sachebene (Fakten, Argumente). Unsichtbar und größer: Beziehungsebene (Gefühle, Erwartungen, Ängste), die das Gespräch steuert." },
    { topic: "ich-botschaft-feedback", f: "Aufbau einer Ich-Botschaft", b: "Wahrnehmung (ohne Wertung) → Wirkung auf mich mit „weil“ → Wunsch für die Zukunft" },
    { topic: "ich-botschaft-feedback", f: "verkleidete Du-Botschaft", b: "Beginnt mit „Ich finde …“ oder „Ich habe das Gefühl …“, enthält danach aber eine Bewertung des anderen." },
    { topic: "ich-botschaft-feedback", f: "Johari-Fenster: blinder Fleck", b: "Anderen bekannt, mir selbst unbekannt – wird durch Feedback kleiner." },
    { topic: "ich-botschaft-feedback", f: "Regeln für Feedback geben", b: "Ich-Form · beschreiben statt bewerten · konkret · zeitnah · veränderbares Verhalten · konstruktiv mit Vorschlag" },
    { topic: "ich-botschaft-feedback", f: "Lessons Learned", b: "Am Projektende dokumentierte Erfahrungen (was lief gut, was nicht), damit Folgeprojekte davon profitieren." },
    { topic: "zuhoeren-fragen", f: "Paraphrasieren", b: "Den Inhalt mit eigenen Worten wiedergeben und bestätigen lassen: „Sie meinen also …?“" },
    { topic: "zuhoeren-fragen", f: "Verbalisieren", b: "Das Gefühl des Gegenübers ansprechen: „Das ist ärgerlich, so kurz vor dem Abschluss.“" },
    { topic: "zuhoeren-fragen", f: "offene Frage", b: "W-Frage (Was, Wie, Welche …), der Kunde erzählt frei – ideal als Einstieg in die Bedarfsanalyse." },
    { topic: "zuhoeren-fragen", f: "Suggestivfrage", b: "Legt die Antwort nahe („Sie haben doch sicher …, oder?“) – manipulativ, im Support vermeiden." },
    { topic: "zuhoeren-fragen", f: "Trichtertechnik", b: "offene Fragen → geschlossene Fragen → Alternativfrage → Kontrollfrage/Zusammenfassung" },
    { topic: "kundengespraech", f: "Phasen eines Supportgesprächs", b: "Eröffnung · Anliegen klären · Verständnis sichern · Lösung · Vereinbarung · Abschluss und Dokumentation" },
    { topic: "kundengespraech", f: "Merkmal – Vorteil – Nutzen", b: "Technisches Merkmal → was es bewirkt → konkreter Gewinn für genau diesen Kunden, formuliert im Sie-Stil." },
    { topic: "kundengespraech", f: "Bestandteile eines Angebots", b: "Leistungsbeschreibung, Mengen, Preise, Liefer- und Zahlungsbedingungen, Gültigkeitsdauer" },
    { topic: "kundengespraech", f: "Einwand „Das ist zu teuer“", b: "Ernst nehmen, nachfragen (womit verglichen?), Nutzen oder günstigere Variante zeigen – „Ja, und …“ statt „Ja, aber …“." },
    { topic: "kundengespraech", f: "funktionale vs. hierarchische Eskalation", b: "funktional (horizontal): an mehr Fachwissen (2nd/3rd Level, Hersteller) · hierarchisch (vertikal): an mehr Entscheidungsbefugnis (Teamleitung)" },
    { topic: "deeskalation", f: "RUHE-Formel", b: "Ruhe bewahren · Unterbrechen vermeiden · Hineinversetzen (Verständnis zeigen) · Ergebnis vereinbaren" },
    { topic: "deeskalation", f: "Verständnis zeigen = Schuld zugeben?", b: "Nein. „Ich verstehe Ihren Ärger“ erkennt das Gefühl an, ohne einen Fehler einzugestehen." },
    { topic: "deeskalation", f: "Ablauf Beschwerdemanagement", b: "annehmen und bedanken → klären → lösen → nachfassen → auswerten (Ursachen beseitigen)" },
    { topic: "deeskalation", f: "Grenze setzen bei Beleidigungen", b: "Ich-Botschaft + Konsequenz ankündigen; bei Fortsetzung beenden, hierarchisch eskalieren, sachlich dokumentieren." },
    { topic: "konflikte", f: "Glasl – die drei Ebenen", b: "Stufen 1–3 win-win · Stufen 4–6 win-lose · Stufen 7–9 lose-lose" },
    { topic: "konflikte", f: "Glasl-Stufe 4", b: "Images und Koalitionen: Die Parteien suchen Verbündete und bauen Feindbilder auf – ab hier ist ein neutraler Dritter nötig." },
    { topic: "konflikte", f: "Harvard-Konzept – 4 Grundsätze", b: "Mensch und Problem trennen · Interessen statt Positionen · Optionen zum beiderseitigen Vorteil · neutrale Kriterien" },
    { topic: "konflikte", f: "BATNA", b: "Best Alternative to a Negotiated Agreement – die beste Alternative, falls keine Einigung zustande kommt." },
    { topic: "konflikte", f: "Kompromiss vs. Konsens", b: "Kompromiss: Beide geben etwas auf. Konsens: gemeinsame Lösung, die die Interessen beider erfüllt (win-win)." },
    { topic: "konflikte", f: "Glasl – Interventionen", b: "Moderation (1–3) · Prozessbegleitung (3–5) · sozio-therapeutische Prozessbegleitung (4–6) · Mediation (5–7) · Schiedsverfahren/Gericht (6–8) · Machteingriff (7–9)" },
    { topic: "team", f: "Teamphasen nach Tuckman", b: "Forming · Storming · Norming · Performing · Adjourning" },
    { topic: "team", f: "Kommunikationsbeziehungen im Team", b: "K = n × (n − 1) ÷ 2 – z. B. 8 Personen: 8 × 7 ÷ 2 = 28 Beziehungen" },
    { topic: "team", f: "Macht- und Fachpromotor", b: "Machtpromotor treibt Veränderungen mit Entscheidungsbefugnis voran, Fachpromotor mit Fachwissen." },
    { topic: "team", f: "Welcher Kanal für Kritik?", b: "Persönlich oder per Video unter vier Augen – nie im Gruppenchat und nicht per E-Mail mit dem Chef in CC." },
    { topic: "team", f: "Drei-Phasen-Modell nach Lewin", b: "Auftauen (Notwendigkeit erklären, beteiligen) → Verändern (schulen, Key-User, Pilot) → Stabilisieren (verankern, Erfolge zeigen)" },
    { topic: "schriftlich", f: "An / CC / BCC", b: "An: soll handeln · CC: zur Kenntnis, für alle sichtbar · BCC: unsichtbare Kopie, z. B. für Rundmails an externe Kunden" },
    { topic: "schriftlich", f: "Aufbau einer geschäftlichen E-Mail", b: "Betreff · Anrede · Kernaussage zuerst · Handlungsaufforderung mit Frist · Gruß und Signatur" },
    { topic: "schriftlich", f: "Ergebnis- vs. Verlaufsprotokoll", b: "Ergebnisprotokoll: nur Beschlüsse und Aufgaben. Verlaufsprotokoll: zusätzlich der Diskussionsverlauf." },
    { topic: "schriftlich", f: "Klare Arbeitsanweisung im Chat", b: "Wer (@Name) + Was + Bis wann + Rückmeldung" },
    { topic: "schriftlich", f: "CEO-Fraud erkennen", b: "Angebliche Chef-Mail mit Zeitdruck, Geheimhaltung und Zahlungsauftrag → nicht antworten, über bekannte Nummer rückfragen, Vier-Augen-Prinzip, melden." },
    { topic: "praesentation", f: "Zeitanteile einer Präsentation", b: "Einleitung ca. 10–15 % · Hauptteil ca. 75–80 % · Schluss ca. 10 % (Faustwerte, zusammen 100 %)" },
    { topic: "praesentation", f: "Vier-Stufen-Methode", b: "1. Vorbereiten → 2. Vormachen und erklären → 3. Nachmachen und erklären lassen → 4. Üben und abschließen (Erfolgskontrolle)" },
    { topic: "praesentation", f: "Einweisung planen – woran denken?", b: "Zielgruppe · Lernziel · Inhalte · Methode · Dauer/Ort · Unterlagen · Erfolgskontrolle (Anwender führt selbst vor)" },
    { topic: "praesentation", f: "Zitat nach § 51 UrhG", b: "Nur mit Zitatzweck (Beleg, Auseinandersetzung), im gebotenen Umfang und mit Quellenangabe – Deko-Bilder sind kein Zitat." },
    { topic: "praesentation", f: "Internetquellen prüfen", b: "Urheber · Aktualität · Belege · Interessen (Werbung?) – und mit weiteren Quellen vergleichen" },
    { topic: "praesentation", f: "Welches Diagramm wofür?", b: "Vergleich: Säule/Balken · Verlauf: Linie · Anteile: Kreis · Zusammenhang: Streudiagramm" },
    { topic: "fachgespraech", f: "AP2-Projekt: Zeitvorgaben", b: "Präsentation höchstens 15 min, zusammen mit dem Fachgespräch höchstens 30 min (§ 20 FIAusbV)" },
    { topic: "fachgespraech", f: "Gewicht von Präsentation + Fachgespräch", b: "50 % (Projekt) × 50 % (zweiter Teil) = 25 % der Gesamtnote" },
    { topic: "fachgespraech", f: "Argumentationskette", b: "These → Begründung → Beleg/Beispiel → Schlussfolgerung" },
    { topic: "fachgespraech", f: "Bewertungskriterien im Fachgespräch", b: "Fachhintergrund und Fachsprache · Problemlösungskompetenz · Argumentation und Begründung" },
    { topic: "fachgespraech", f: "Wissenslücke im Fachgespräch", b: "Ehrlich zugeben und einen fachlich sinnvollen Lösungsweg zeigen – nicht raten, nicht diskutieren." },
    { topic: "fachgespraech", f: "Zielgruppe der Projektpräsentation", b: "Der fachkundige Prüfungsausschuss – Fachsprache korrekt nutzen, Vorgehen und Entscheidungen zeigen, keine Verkaufsveranstaltung." }
  ],
  checklist: [
    { id: "c-g-1", topic: "grundlagen", text: "Ich kann das Sender-Empfänger-Modell mit Kodierung, Kanal, Dekodierung und Feedback an einem IT-Fall beschreiben.", exam: ["AP1"] },
    { id: "c-g-2", topic: "grundlagen", text: "Ich kann in einer Fallbeschreibung Störquellen erkennen, einer Störungsart zuordnen und eine eindeutige Rückfrage formulieren.", exam: ["AP1"] },
    { id: "c-g-3", topic: "grundlagen", text: "Ich kann verbale, paraverbale und nonverbale Signale unterscheiden und erklären, was sie im Chat ersetzt (Emojis, Schreibweise, Antwortzeit)." },
    { id: "c-v-1", topic: "vier-seiten", text: "Ich kann eine Aussage nach dem Vier-Seiten-Modell in Sachinhalt, Selbstkundgabe, Beziehung und Appell zerlegen und je Seite eine ausformulierte Botschaft angeben.", exam: ["AP1"] },
    { id: "c-v-2", topic: "vier-seiten", text: "Ich kann an der Reaktion eines Empfängers erkennen, mit welchem Ohr er gehört hat, und das Missverständnis am Text belegen.", exam: ["AP1"] },
    { id: "c-v-3", topic: "vier-seiten", text: "Ich kann eine Antwort auf eine Kundenbeschwerde formulieren, die auf alle vier Seiten der Nachricht eingeht.", exam: ["AP1"] },
    { id: "c-w-1", topic: "watzlawick", text: "Ich kann die fünf Axiome nach Watzlawick nennen und jeweils mit einem Beispiel aus dem IT-Alltag erläutern." },
    { id: "c-w-2", topic: "watzlawick", text: "Ich kann Fallbeispiele begründet einem Axiom zuordnen und Axiom 2 (Beziehung färbt Inhalt) sicher von Axiom 4 (Worte vs. Ton/Emoji) abgrenzen." },
    { id: "c-w-3", topic: "watzlawick", text: "Ich kann beurteilen, welches Modell einen Fall besser erklärt, und je Modell eine Grenze nennen." },
    { id: "c-i-1", topic: "ich-botschaft-feedback", text: "Ich kann eine Du-Botschaft in eine Ich-Botschaft aus Wahrnehmung, Wirkung mit Begründung und Wunsch umformulieren.", exam: ["AP1"] },
    { id: "c-i-2", topic: "ich-botschaft-feedback", text: "Ich kann verkleidete Du-Botschaften („Ich finde, du …“) erkennen und begründen, warum sie wie ein Angriff wirken." },
    { id: "c-i-3", topic: "ich-botschaft-feedback", text: "Ich kann Regeln für das Geben und Nehmen von Feedback nennen und Retrospektive und Lessons Learned als Reflexionsmethoden beschreiben.", exam: ["AP1"] },
    { id: "c-z-1", topic: "zuhoeren-fragen", text: "Ich kann für eine Bedarfsanalyse passende offene, geschlossene und Alternativfragen formulieren und Suggestivfragen vermeiden.", exam: ["AP1"] },
    { id: "c-z-2", topic: "zuhoeren-fragen", text: "Ich kann aktiv zuhören: Aufmerksamkeit zeigen, paraphrasieren, verbalisieren, nachfragen und zusammenfassen." },
    { id: "c-z-3", topic: "zuhoeren-fragen", text: "Ich kann Vor- und Nachteile offener und geschlossener Fragen in einem Fragebogen nennen.", exam: ["AP1"] },
    { id: "c-k-1", topic: "kundengespraech", text: "Ich kann ein Supportgespräch in sechs Phasen strukturiert führen und das Ergebnis im Ticket dokumentieren.", exam: ["AP1"] },
    { id: "c-k-2", topic: "kundengespraech", text: "Ich kann einem IT-Laien einen Fachbegriff (z. B. VPN, DNS) verständlich und trotzdem fachlich korrekt erklären.", exam: ["AP1"] },
    { id: "c-k-3", topic: "kundengespraech", text: "Ich kann aus dem Kundenbedarf ein Angebot ableiten, mit Merkmal – Vorteil – Nutzen argumentieren und auf Einwände reagieren.", exam: ["AP1"] },
    { id: "c-k-4", topic: "kundengespraech", text: "Ich kann funktionale und hierarchische Eskalation unterscheiden und einem Kunden die Weitergabe seines Anliegens verbindlich (wer, bis wann, Ticketnummer) ankündigen.", exam: ["AP1"] },
    { id: "c-d-1", topic: "deeskalation", text: "Ich kann ein Gespräch mit einem verärgerten Kunden in klaren Schritten deeskalieren und eskalierende Formulierungen vermeiden.", exam: ["AP1"] },
    { id: "c-d-2", topic: "deeskalation", text: "Ich kann Beschwerden nach einem festen Ablauf bearbeiten und bei Beleidigungen professionell Grenzen setzen.", exam: ["AP1"] },
    { id: "c-d-3", topic: "deeskalation", text: "Ich kann eskalierende Formulierungen in einer Antwort-E-Mail erkennen und eine schriftliche Beschwerde deeskalierend beantworten.", exam: ["AP1"] },
    { id: "c-ko-1", topic: "konflikte", text: "Ich kann Konfliktarten unterscheiden und einen Konflikt anhand von Signalen einer Glasl-Stufe und -Ebene zuordnen." },
    { id: "c-ko-2", topic: "konflikte", text: "Ich kann mit den vier Grundsätzen des Harvard-Konzepts Positionen und Interessen trennen und eine win-win-Lösung entwickeln." },
    { id: "c-ko-3", topic: "konflikte", text: "Ich kann den Glasl-Stufen passende Interventionen von der Moderation bis zum Machteingriff zuordnen." },
    { id: "c-t-1", topic: "team", text: "Ich kann die Teamphasen nach Tuckman an Verhaltensbeispielen erkennen und passende Maßnahmen nennen.", exam: ["AP1"] },
    { id: "c-t-2", topic: "team", text: "Ich kann die Zahl der Kommunikationsbeziehungen mit K = n × (n − 1) ÷ 2 berechnen und Folgen für große Teams ableiten." },
    { id: "c-t-3", topic: "team", text: "Ich kann für eine Situation den passenden Kommunikationskanal wählen und Regeln für Videokonferenzen und Chats einhalten.", exam: ["AP2"] },
    { id: "c-t-4", topic: "team", text: "Ich kann Ursachen für Widerstand bei Veränderungen nennen und kommunikative Gegenmaßnahmen vorschlagen.", exam: ["AP1"] },
    { id: "c-t-5", topic: "team", text: "Ich kann das Drei-Phasen-Modell nach Lewin (Auftauen – Verändern – Stabilisieren) beschreiben und Kommunikationsmaßnahmen einer IT-Einführung den Phasen zuordnen.", exam: ["AP1"] },
    { id: "c-s-1", topic: "schriftlich", text: "Ich kann eine sachliche Kunden-E-Mail mit Betreff, Anrede, Kernaussage, Handlungsaufforderung und Signatur formulieren.", exam: ["AP1"] },
    { id: "c-s-2", topic: "schriftlich", text: "Ich kann An, CC und BCC datenschutzgerecht einsetzen und die Regeln der Netiquette anwenden.", exam: ["AP1", "AP2"] },
    { id: "c-s-3", topic: "schriftlich", text: "Ich kann aus Besprechungsnotizen ein Ergebnisprotokoll mit Protokollkopf und Aufgabenliste (Was – Wer – Bis wann) erstellen.", exam: ["AP1"] },
    { id: "c-s-4", topic: "schriftlich", text: "Ich kann Social-Engineering-Versuche per Telefon oder E-Mail erkennen und richtig reagieren.", exam: ["AP2"] },
    { id: "c-p-1", topic: "praesentation", text: "Ich kann eine Präsentation zielgruppengerecht vorbereiten und mit Einleitung, Hauptteil und Schluss samt Zeitplanung gliedern.", exam: ["AP1", "AP2"] },
    { id: "c-p-2", topic: "praesentation", text: "Ich kann Folien nach Gestaltungsregeln verbessern und für eine Datenlage die passende Diagrammart begründen.", exam: ["AP1", "AP2"] },
    { id: "c-p-3", topic: "praesentation", text: "Ich kann Internetquellen nach Urheber, Aktualität, Belegen und Interessen beurteilen und Urheberrechte bei Bildern und Texten beachten.", exam: ["AP1"] },
    { id: "c-p-4", topic: "praesentation", text: "Ich kann eine Einweisung planen (Zielgruppe, Lernziel, Methode, Unterlagen, Erfolgskontrolle) und Anwender mit der Vier-Stufen-Methode in einen neuen Arbeitsplatz einweisen.", exam: ["AP1"] },
    { id: "c-f-1", topic: "fachgespraech", text: "Ich kenne Zeitvorgaben und Gewichtung von Projektpräsentation und Fachgespräch und kann eine 15-Minuten-Präsentation zeitlich planen.", exam: ["AP2"] },
    { id: "c-f-2", topic: "fachgespraech", text: "Ich kann Projektentscheidungen mit der Argumentationskette These – Begründung – Beleg – Folgerung begründen.", exam: ["AP2"] },
    { id: "c-f-3", topic: "fachgespraech", text: "Ich kann im Fachgespräch mit „Was-wäre-wenn“-Fragen und eigenen Wissenslücken souverän umgehen.", exam: ["AP2"] },
    { id: "c-f-4", topic: "fachgespraech", text: "Ich richte meine Projektpräsentation auf den fachkundigen Prüfungsausschuss aus und kenne die Bewertungskriterien für Präsentation und Fachgespräch.", exam: ["AP2"] }
  ],
  glossary: [
    { term: "Aktives Zuhören", def: "Zuhörtechnik nach Carl Rogers: Aufmerksamkeit zeigen, Inhalte paraphrasieren, Gefühle verbalisieren, nachfragen und zusammenfassen, um Verständnis zu sichern." },
    { term: "Appell", def: "Seite einer Nachricht nach Schulz von Thun, die ausdrückt, wozu der Sender den Empfänger veranlassen möchte – ausdrücklich oder versteckt." },
    { term: "Axiom", def: "Grundsatz, der ohne Beweis als gültig angenommen wird; bei Watzlawick fünf Grundregeln menschlicher Kommunikation." },
    { term: "BATNA", def: "Best Alternative to a Negotiated Agreement – beste Alternative, falls eine Verhandlung scheitert; Maßstab dafür, ob man ein Angebot annimmt (Harvard-Konzept)." },
    { term: "BCC", def: "Blind Carbon Copy – E-Mail-Adressfeld, dessen Empfänger für alle anderen unsichtbar bleiben; bei Rundmails an externe Empfänger aus Datenschutzgründen das Mittel der Wahl (alternativ Serienmail mit Einzelversand)." },
    { term: "Beschwerdemanagement", def: "Systematischer Umgang mit Kundenbeschwerden: annehmen, klären, lösen, nachfassen und auswerten, um Kunden zu halten und Ursachen zu beseitigen." },
    { term: "CEO-Fraud", def: "Social-Engineering-Betrug, bei dem sich Täter per E-Mail oder Telefon als Führungskraft ausgeben und unter Zeitdruck und Geheimhaltung eine Zahlung oder Datenherausgabe verlangen." },
    { term: "Deeskalation", def: "Maßnahmen, die einen aufgeheizten Konflikt oder ein emotionales Gespräch beruhigen und auf die Sachebene zurückführen." },
    { term: "Dekodierung", def: "Übersetzung empfangener Zeichen in eine Bedeutung durch den Empfänger – geprägt von dessen Wissen, Erfahrungen und Erwartungen." },
    { term: "Drei-Phasen-Modell nach Lewin", def: "Modell für Veränderungsprozesse von Kurt Lewin: Auftauen (Notwendigkeit vermitteln), Verändern (Neues einführen und üben), Stabilisieren (Neues im Alltag verankern)." },
    { term: "Du-Botschaft", def: "Aussage, die das Gegenüber bewertet oder ihm etwas vorwirft („Du machst immer …“); sie löst meist Verteidigung oder Gegenangriff aus." },
    { term: "Eisbergmodell", def: "Bild der Kommunikation: Nur die Sachebene ist sichtbar, der größere Teil (Gefühle, Erwartungen, Werte) liegt verborgen und steuert das Gespräch." },
    { term: "Ergebnisprotokoll", def: "Protokollform, die nur Beschlüsse, Ergebnisse und Aufgaben festhält, nicht den Diskussionsverlauf." },
    { term: "Eskalation (funktional/hierarchisch)", def: "Weitergabe eines Anliegens: funktional (horizontal) an Stellen mit mehr Fachwissen, hierarchisch (vertikal) an Vorgesetzte mit mehr Entscheidungsbefugnis." },
    { term: "Eskalationsstufen nach Glasl", def: "Modell von Friedrich Glasl mit neun Stufen der Konflikteskalation in drei Ebenen: win-win (1–3), win-lose (4–6) und lose-lose (7–9)." },
    { term: "Fachgespräch", def: "Mündlicher Teil der AP2-Projektprüfung im Anschluss an die Präsentation, in dem der Prüfling Projekt und fachliches Umfeld erläutert und Entscheidungen begründet." },
    { term: "Feedback", def: "Rückmeldung an eine Person, wie ihre Nachricht oder ihr Verhalten angekommen ist; im Sender-Empfänger-Modell die Rückmeldung vom Empfänger an den Sender." },
    { term: "Harvard-Konzept", def: "Verhandlungsmethode von Fisher und Ury (1981): Mensch und Problem trennen, Interessen statt Positionen, Optionen zum beiderseitigen Vorteil, neutrale Kriterien." },
    { term: "Ich-Botschaft", def: "Aussage über die eigene Wahrnehmung, deren Wirkung auf einen selbst und einen Wunsch – Kritik ohne Angriff (nach Thomas Gordon)." },
    { term: "Interpunktion", def: "Watzlawicks drittes Axiom: Jeder gliedert den Ablauf anders und sieht sein Verhalten als Reaktion auf den anderen – Ursache eines Teufelskreises." },
    { term: "Johari-Fenster", def: "Modell von Luft und Ingham mit vier Bereichen der Selbst- und Fremdwahrnehmung; Feedback verkleinert den blinden Fleck, Selbstöffnung den privaten Bereich." },
    { term: "Kodierung", def: "Übersetzung eines Gedankens in Zeichen (Worte, Schrift, Gesten) durch den Sender." },
    { term: "Kongruenz", def: "Übereinstimmung von verbaler, paraverbaler und nonverbaler Botschaft; bei Inkongruenz wirkt die Nachricht unglaubwürdig." },
    { term: "Konflikt", def: "Spannungssituation, in der mindestens zwei Parteien unvereinbare Ziele, Interessen, Werte oder Sichtweisen haben und sich dadurch beeinträchtigt fühlen." },
    { term: "Lessons Learned", def: "Dokumentierte Erfahrungen am Ende eines Projekts oder Projektabschnitts, die Fehler vermeiden und Folgeprojekte verbessern sollen." },
    { term: "Mediation", def: "Freiwilliges Verfahren, in dem eine neutrale, allparteiliche Person Konfliktparteien hilft, selbst eine gemeinsame Lösung zu erarbeiten; bei Glasl etwa für die Stufen 5–7 vorgesehen." },
    { term: "Metakommunikation", def: "Kommunikation über die Kommunikation, z. B. „Wir reden gerade aneinander vorbei“; hilft, Beziehungsstörungen und Teufelskreise aufzulösen." },
    { term: "Netiquette", def: "Verhaltensregeln für digitale Kommunikation, z. B. höflich und knapp schreiben, keine Großbuchstaben, sensibler Umgang mit Adressatenlisten." },
    { term: "Nonverbale Kommunikation", def: "Kommunikation ohne Worte über Mimik, Gestik, Blickkontakt, Körperhaltung und Abstand." },
    { term: "Nutzenargumentation", def: "Verkaufstechnik, die ein Produktmerkmal über den Vorteil in einen konkreten Nutzen für den Kunden übersetzt (Merkmal – Vorteil – Nutzen)." },
    { term: "Paraphrasieren", def: "Wiedergabe des Gehörten mit eigenen Worten, um das Verständnis zu prüfen („Sie meinen also …?“)." },
    { term: "Paraverbale Kommunikation", def: "Die Art, wie etwas gesagt wird: Tonfall, Lautstärke, Sprechtempo, Pausen und Betonung." },
    { term: "Promotor", def: "Person, die eine Veränderung aktiv vorantreibt – als Machtpromotor durch Entscheidungsbefugnis, als Fachpromotor durch Fachwissen." },
    { term: "Retrospektive", def: "Regelmäßiges Reflexionstreffen eines Teams (z. B. am Sprintende) mit den Leitfragen: Was lief gut, was nicht, was ändern wir?" },
    { term: "Selbstkundgabe", def: "Seite einer Nachricht (früher Selbstoffenbarung), die etwas über den Sender verrät – seine Gefühle, seinen Zustand oder seine Haltung." },
    { term: "Social Engineering", def: "Manipulation von Menschen, um an Zugangsdaten, Informationen oder Zugriff zu gelangen, z. B. durch gefälschte Support-Anrufe oder Phishing-Mails." },
    { term: "Suggestivfrage", def: "Frage, die dem Gefragten die gewünschte Antwort nahelegt („Sie haben doch sicher …, oder?“); im Kundengespräch zu vermeiden." },
    { term: "Teamphasen nach Tuckman", def: "Modell der Teamentwicklung mit den Phasen Forming, Storming, Norming, Performing und Adjourning." },
    { term: "Trichtertechnik", def: "Fragestrategie, die mit offenen Fragen beginnt und über geschlossene und Alternativfragen zur bestätigenden Kontrollfrage führt." },
    { term: "Vier-Seiten-Modell", def: "Kommunikationsmodell von Friedemann Schulz von Thun: Jede Nachricht hat Sachinhalt, Selbstkundgabe, Beziehung und Appell; der Empfänger hört mit vier Ohren." },
    { term: "Vier-Stufen-Methode", def: "Unterweisungsmethode in vier Schritten: vorbereiten, vormachen und erklären, nachmachen und erklären lassen, üben und abschließen." }
  ],
  links: [
    { title: "Kommunikation Crashkurs (KOM-Arbeit-1)", url: "https://bbz-aifs51.github.io/KOM-Arbeit-1/", note: "Spickzettel, Quiz und Probeklausur der Klasse zu Sender-Empfänger, Watzlawick, Vier-Seiten-Modell und Ich-Botschaft" },
    { title: "Schulz von Thun Institut für Kommunikation", url: "https://www.schulz-von-thun.de/", note: "Originalquelle zum Kommunikationsquadrat (Vier-Seiten-Modell) und weiteren Modellen von Schulz von Thun" },
    { title: "FIAusbV § 20 – Planen und Umsetzen eines Projektes der Systemintegration", url: "https://www.gesetze-im-internet.de/fiausbv/__20.html", note: "Rechtsgrundlage für Projektarbeit, Präsentation und Fachgespräch in der AP2" },
    { title: "IHK Flensburg", url: "https://www.ihk.de/flensburg", note: "Startseite der zuständigen Kammer: Prüfungstermine und Hinweise zu Projektantrag, Dokumentation und Präsentation" },
    { title: "Paul Watzlawick (Wikipedia)", url: "https://de.wikipedia.org/wiki/Paul_Watzlawick", note: "ergänzend: Leben, Werk und die fünf Axiome" },
    { title: "Harvard-Konzept (Wikipedia)", url: "https://de.wikipedia.org/wiki/Harvard-Konzept", note: "ergänzend: Grundsätze des sachgerechten Verhandelns" },
    { title: "Friedrich Glasl (Wikipedia)", url: "https://de.wikipedia.org/wiki/Friedrich_Glasl", note: "ergänzend: Konfliktforscher, Eskalationsstufenmodell" },
    { title: "The Scrum Guide", url: "https://scrumguides.org/", note: "offizieller Scrum Guide (auch auf Deutsch): Daily Scrum, Retrospektive, Teamgröße" }
  ]
});
