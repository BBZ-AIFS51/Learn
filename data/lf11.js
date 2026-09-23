/* LF 11b – Betrieb und Sicherheit vernetzter Systeme gewährleisten */
LEARN.module({
  id: "lf11",
  type: "lf",
  nr: 11,
  title: "Betrieb und Sicherheit vernetzter Systeme gewährleisten",
  year: 3,
  hours: 80,
  exam: ["AP2"],
  summary: "Vernetzte Systeme sicher und verfügbar betreiben: Risiken analysieren, Netze segmentieren, Firewalls, IDS/IPS, VPN, Kryptografie, PKI und starke Authentifizierung einsetzen, Hochverfügbarkeit berechnen, Schwachstellen managen, Endgeräte per MDM absichern und Notfälle nach BSI 200-4 vorbereiten – mit Blick auf DSGVO, NIS2 und die AP2-Bereiche AEN und KAIS.",
  goals: [
    "Ein Informationssicherheitsmanagement (ISMS nach ISO 27001 bzw. BSI 200-1 bis 200-3) beschreiben, Risiken bewerten, Maßnahmen nach Kosten und Nutzen auswählen und das Restrisiko begründen",
    "Rechtliche Vorgaben (DSGVO, BDSG, BSIG mit NIS2-Umsetzung, KRITIS) auf den IT-Betrieb anwenden und Meldepflichten mit Fristen nennen",
    "Angriffe auf Netze und Dienste erkennen (z. B. ARP-Poisoning im Paketmitschnitt) und passende Gegenmaßnahmen wie Port Security, DHCP-Snooping und DAI zuordnen",
    "Netze in Sicherheitszonen mit DMZ segmentieren sowie Firewall-Regelwerke lesen, erstellen und auf Fehler prüfen",
    "Kryptografische Verfahren, Zertifikate, PKI und den TLS-Handshake erklären und für VPN (IPsec, TLS-VPN, WireGuard) und E-Mail (S/MIME, PGP, SPF/DKIM/DMARC) einsetzen",
    "Authentifizierung und Zugriffskontrolle mit MFA, 802.1X/RADIUS, Kerberos, SSO, NAC und Zero Trust planen und WLANs mit WPA3 absichern",
    "Hochverfügbarkeit mit Redundanz, Clustern und Load Balancing planen und Verfügbarkeiten von Serien- und Parallelschaltungen sowie Ausfallzeiten berechnen",
    "Monitoring, Logging, SIEM und IDS/IPS betreiben, Schwachstellen mit CVE/CVSS priorisieren, Systeme härten und Penetrationstests einordnen",
    "Endgeräte und Mobilgeräte mit MDM, EDR und DLP absichern und Betriebsmodelle wie BYOD und COPE rechtlich und technisch bewerten",
    "Notfallvorsorge nach BSI 200-4 (BIA, RTO, RPO, MTPD, Notfallhandbuch) sowie SLAs, Wartungsfenster, Changes und Dokumentation im Betrieb umsetzen"
  ],
  school: {
    hinweise: "Für LF 11b gibt es (Stand September 2026) noch keinen Moodle-Kurs der Klasse. Dieses Modul folgt dem KMK-Rahmenlehrplan und dem Prüfungskatalog (AP2, Bereiche AEN und KAIS). Es baut auf LF 4 (Schutzbedarf, DSGVO, Grundlagen der Kryptografie), LF 9 (VLAN, Routing, NAT) und LF 10b (Backup, Monitoring, Serverdienste) auf – wiederhole diese Grundlagen bei Bedarf dort.",
    themen: [
      "ISMS, ISO 27001, BSI-Standards und Risikoanalyse",
      "Recht und Compliance: DSGVO, NIS2, KRITIS",
      "Bedrohungen und Angriffsszenarien",
      "Netzsegmentierung, DMZ und Firewalls",
      "IDS/IPS, Logging und SIEM",
      "Kryptografie, PKI und TLS",
      "VPN: IPsec, TLS-VPN, WireGuard",
      "Authentifizierung, 802.1X/RADIUS, Zero Trust",
      "WLAN- und E-Mail-Sicherheit",
      "Hochverfügbarkeit und Verfügbarkeitsberechnung",
      "Schwachstellenmanagement, Härtung, Penetrationstest",
      "Endgeräte und Mobilgeräte: MDM, BYOD, EDR, DLP",
      "Notfallmanagement nach BSI 200-4 und IT-Betrieb (SLA, Wartung)"
    ]
  },
  topics: [
    {
      id: "isms-risiko",
      title: "ISMS, Risikoanalyse und Wirtschaftlichkeit von Maßnahmen",
      exam: ["AP2"],
      summary: "Wie ein ISMS nach ISO 27001 bzw. BSI 200-x arbeitet, wie du Risiken bewertest und behandelst und wie du mit SLE, ARO und ALE entscheidest, ob sich eine Maßnahme lohnt.",
      html: `
        <p>Informationssicherheit schützt die <strong>Schutzziele</strong> Vertraulichkeit, Integrität und Verfügbarkeit (ergänzt um Authentizität und Verbindlichkeit). Vollständige Sicherheit gibt es nicht. Du erreichst immer nur <strong>relative Sicherheit</strong>: ein Niveau, das dem Schutzbedarf und dem Budget angemessen ist. Das verbleibende <strong>Restrisiko</strong> muss die Leitung bewusst tragen.</p>
        <h5>ISMS – Sicherheit als Managementprozess</h5>
        <p>Ein <strong>Informationssicherheits-Managementsystem (ISMS)</strong> legt Regeln, Rollen und Abläufe fest, mit denen ein Unternehmen seine Sicherheit dauerhaft steuert. Dazu gehören eine <strong>Sicherheitsleitlinie</strong> (von der Geschäftsleitung verabschiedet), ein <strong>Informationssicherheitsbeauftragter</strong> (ISB/CISO), ein Sicherheitskonzept und regelmäßige Audits. Das ISMS läuft im <strong>PDCA-Zyklus</strong>: Plan (Risiken analysieren, Maßnahmen planen) → Do (umsetzen) → Check (Wirksamkeit prüfen, Audit) → Act (verbessern).</p>
        <table><thead><tr><th>Standard</th><th>Inhalt</th></tr></thead><tbody>
        <tr><td>ISO/IEC 27001:2022</td><td>internationale Anforderungen an ein ISMS, zertifizierbar; Anhang A mit 93 Controls in 4 Themen (organisatorisch 37, personenbezogen 8, physisch 14, technologisch 34)</td></tr>
        <tr><td>ISO/IEC 27002</td><td>Leitfaden zur Umsetzung der Controls (nicht zertifizierbar)</td></tr>
        <tr><td>BSI-Standard 200-1</td><td>Anforderungen an ein ISMS (kompatibel zu ISO 27001)</td></tr>
        <tr><td>BSI-Standard 200-2</td><td>IT-Grundschutz-Methodik: Basis-, Standard- oder Kern-Absicherung</td></tr>
        <tr><td>BSI-Standard 200-3</td><td>Risikoanalyse bei hohem oder sehr hohem Schutzbedarf</td></tr>
        <tr><td>BSI-Standard 200-4</td><td>Business Continuity Management (Notfallmanagement)</td></tr>
        <tr><td>IT-Grundschutz-Kompendium</td><td>Bausteine (z. B. NET.1.1 Netzarchitektur) mit Gefährdungen und Anforderungen</td></tr>
        </tbody></table>
        <h5>Risikoanalyse nach BSI 200-3</h5>
        <ol>
          <li><strong>Gefährdungsübersicht</strong> erstellen (Grundlage: 47 elementare Gefährdungen G 0.1 bis G 0.47, z. B. Feuer, Schadprogramme, Social Engineering).</li>
          <li><strong>Risiko einstufen</strong>: Eintrittshäufigkeit (selten, mittel, häufig, sehr häufig) × Schadensauswirkung (vernachlässigbar, begrenzt, beträchtlich, existenzbedrohend) → Risikomatrix mit den Kategorien gering, mittel, hoch, sehr hoch.</li>
          <li><strong>Risiko behandeln</strong> und das Restrisiko dokumentieren.</li>
          <li><strong>Konsolidieren</strong>: Maßnahmen ins Sicherheitskonzept übernehmen und ihre Wirksamkeit prüfen.</li>
        </ol>
        <table><thead><tr><th>Risikobehandlung</th><th>Bedeutung</th><th>Beispiel</th></tr></thead><tbody>
        <tr><td>vermeiden</td><td>riskante Tätigkeit aufgeben</td><td>kein Fernzugriff per RDP aus dem Internet</td></tr>
        <tr><td>reduzieren</td><td>Wahrscheinlichkeit oder Schaden senken</td><td>MFA, Patches, Segmentierung, Backup</td></tr>
        <tr><td>übertragen</td><td>finanzielle Folgen auf Dritte verlagern</td><td>Cyberversicherung, Dienstleister mit SLA</td></tr>
        <tr><td>akzeptieren</td><td>Risiko bewusst tragen</td><td>geringes Risiko, Maßnahme wäre teurer als der Schaden</td></tr>
        </tbody></table>
        <div class="callout achtung"><strong>Achtung:</strong> Beim <em>Übertragen</em> wandert nur der finanzielle Schaden. Die Verantwortung (z. B. nach DSGVO) bleibt beim Unternehmen. Ein akzeptiertes Risiko muss die <strong>Geschäftsleitung</strong> schriftlich freigeben – nicht die IT-Abteilung.</div>
        <h5>Lohnt sich die Maßnahme? SLE, ARO, ALE</h5>
        <div class="callout formel"><strong>Formeln:</strong><br>SLE (Single Loss Expectancy) = Schaden je Vorfall<br>ARO (Annual Rate of Occurrence) = erwartete Vorfälle pro Jahr<br>ALE (Annual Loss Expectancy) = SLE × ARO<br>Nutzen der Maßnahme = ALE vorher − ALE nachher → lohnt sich, wenn Nutzen &gt; jährliche Kosten der Maßnahme</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> Ein DDoS-Angriff legt den Webshop der Nordlicht IT GmbH für 8 h lahm, jede Stunde kostet 2.500 €. SLE = 8 × 2.500 € = 20.000 €. Erwartet wird ein Angriff alle zwei Jahre: ARO = 0,5 → ALE = 20.000 € × 0,5 = <strong>10.000 €/Jahr</strong>.<br>Ein DDoS-Schutzdienst kostet 4.800 €/Jahr und verkürzt den Ausfall auf 1 h: SLE = 2.500 €, ALE = 2.500 € × 0,5 = 1.250 €/Jahr.<br>Nutzen = 10.000 € − 1.250 € = 8.750 €/Jahr &gt; 4.800 € Kosten → die Maßnahme lohnt sich (Vorteil 3.950 €/Jahr).</div>
        <h5>Schadenspotenziale einschätzen</h5>
        <p>Bevor du Maßnahmen auswählst, beschreibst du für jedes Schutzziel, welcher Schaden bei einer Verletzung entstehen kann. Der Schaden ist selten nur technisch:</p>
        <table><thead><tr><th>Schutzziel verletzt</th><th>Beispiel</th><th>mögliche Schäden</th></tr></thead><tbody>
        <tr><td>Vertraulichkeit</td><td>Kundendaten werden abgezogen und veröffentlicht</td><td>Bußgeld und Schadensersatz (DSGVO), Imageschaden, Verlust von Aufträgen, Erpressung</td></tr>
        <tr><td>Integrität</td><td>Bankverbindung in Rechnungen wird manipuliert</td><td>Fehlzahlungen, falsche Entscheidungen, Vertragsstrafen, Vertrauensverlust</td></tr>
        <tr><td>Verfügbarkeit</td><td>Warenwirtschaft fällt einen Tag aus</td><td>Umsatzausfall, Lieferverzug, Überstunden, Wiederherstellungskosten</td></tr>
        </tbody></table>
        <p>Die direkten Kosten schätzt du mit <strong>Kosten je Stunde × Ausfalldauer + Wiederherstellungsaufwand</strong>. Imageschäden und rechtliche Folgen lassen sich schwer beziffern und werden deshalb zusätzlich qualitativ bewertet.</p>
        <table><thead><tr><th>Maßnahmenart</th><th>Ziel</th><th>Beispiele</th></tr></thead><tbody>
        <tr><td>präventiv (vorbeugend)</td><td>Vorfall verhindern</td><td>Patches, MFA, Firewall, Schulung, Segmentierung</td></tr>
        <tr><td>detektiv (erkennend)</td><td>Vorfall schnell bemerken</td><td>IDS, SIEM, Virenscanner, Protokollauswertung, Rauchmelder</td></tr>
        <tr><td>reaktiv (begrenzend)</td><td>Schaden eindämmen</td><td>Notfallplan, Isolieren befallener Systeme, IPS blockiert Angreifer, Löschanlage</td></tr>
        <tr><td>korrektiv (wiederherstellend)</td><td>Normalbetrieb herstellen</td><td>Restore aus dem Backup, Ersatzhardware, Wiederanlaufplan, Lessons Learned</td></tr>
        </tbody></table>
        <div class="callout tipp"><strong>Tipp:</strong> Ein gutes Sicherheitskonzept kombiniert alle vier Arten (<strong>Defense in Depth</strong>). Wer nur vorbeugt, merkt einen erfolgreichen Angriff zu spät. Wer nur wiederherstellt, wird immer wieder getroffen.</div>
        <h5>Sicherheitskriterien, Zertifikate, Beratung</h5>
        <ul>
          <li><strong>IT-Sicherheitskriterien</strong> dienen als Richtschnur für Entwickler, zur objektiven Bewertung von Systemen und als Auswahlhilfe für Kunden. Beispiele: <strong>Common Criteria</strong> (ISO/IEC 15408, Prüfstufen EAL 1–7), <strong>BSI C5</strong> für Cloud-Dienste, ISO-27001-Zertifikat, IT-Sicherheitskennzeichen des BSI.</li>
          <li><strong>IT-Grundschutz-Modellierung</strong> als objektive Bewertungsgrundlage: Jedem Zielobjekt (Server, Client, Netz, Raum, Anwendung) werden die passenden Bausteine des Kompendiums zugeordnet. Im <strong>IT-Grundschutz-Check</strong> prüfst du dann Anforderung für Anforderung, ob sie „ja“, „teilweise“, „nein“ oder „entbehrlich“ umgesetzt ist. So wird der Sicherheitsstand nachvollziehbar und vergleichbar.</li>
          <li><strong>Security by Design</strong>: Sicherheit wird von Anfang an mitentwickelt. <strong>Security by Default</strong>: Die Werkseinstellung ist bereits sicher (z. B. kein Standardpasswort).</li>
          <li><strong>Beratung</strong> je Zielgruppe: Privathaushalte (Updates, Passwortmanager, Backup), Unternehmen (ISMS, TOM, Verträge), öffentliche Hand (IT-Grundschutz, Vergaberecht). Trenne <em>funktionale</em> Anforderungen (was geschützt wird) von <em>Qualitätsanforderungen</em> (wie verfügbar, wie schnell, wie gut). Bewerte die Rahmenbedingungen technologisch, organisatorisch, rechtlich und ethisch (z. B. Verhältnismäßigkeit einer Mitarbeiterüberwachung).</li>
        </ul>
        <div class="callout merke"><strong>Merke:</strong> Risiko = Eintrittswahrscheinlichkeit × Schadensausmaß. Maßnahmen wählst du so, dass die Kosten zum Risiko passen. Ein Restrisiko bleibt immer.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Risiken in eine Matrix <em>einordnen</em>, vier Strategien der Risikobehandlung <em>nennen</em> und je ein Beispiel <em>zuordnen</em>, mögliche Schäden eines Vorfalls je Schutzziel <em>beschreiben</em>, ALE vor und nach einer Maßnahme <em>berechnen</em> und die Wirtschaftlichkeit <em>beurteilen</em>, den PDCA-Zyklus im ISMS <em>erläutern</em>.</div>`
    },
    {
      id: "recht-compliance",
      title: "Recht, Compliance und TOM: DSGVO, NIS2, KRITIS und Datenschutz im Betrieb",
      exam: ["AP2"],
      summary: "Welche Gesetze den sicheren IT-Betrieb vorschreiben, welche Meldefristen gelten, wie du Logs und Monitoring datenschutzkonform einsetzt und die Wirksamkeit der TOM prüfst.",
      html: `
        <p><strong>Compliance</strong> heißt: Das Unternehmen hält Gesetze, Verträge, Normen und eigene Richtlinien nachweisbar ein. Im IT-Betrieb sind vor allem Datenschutzrecht und IT-Sicherheitsrecht wichtig.</p>
        <h5>DSGVO und BDSG – was der Betrieb liefern muss</h5>
        <table><thead><tr><th>Artikel</th><th>Inhalt</th><th>Bedeutung für die IT</th></tr></thead><tbody>
        <tr><td>Art. 25</td><td>Datenschutz durch Technikgestaltung und Voreinstellungen</td><td>Privacy by Design/Default: nur nötige Daten, sichere Standardeinstellungen</td></tr>
        <tr><td>Art. 28</td><td>Auftragsverarbeitung</td><td>AV-Vertrag mit Cloud-, Hosting- und Fernwartungsdienstleistern</td></tr>
        <tr><td>Art. 30</td><td>Verzeichnis von Verarbeitungstätigkeiten</td><td>auch Logging, Videoüberwachung und Monitoring eintragen</td></tr>
        <tr><td>Art. 32</td><td>Sicherheit der Verarbeitung</td><td>TOM: Pseudonymisierung, Verschlüsselung, Vertraulichkeit, Integrität, Verfügbarkeit und Belastbarkeit, schnelle Wiederherstellung, regelmäßige Überprüfung</td></tr>
        <tr><td>Art. 33</td><td>Meldung an die Aufsichtsbehörde</td><td>binnen <strong>72 Stunden</strong> nach Bekanntwerden einer Datenpanne (außer bei voraussichtlich keinem Risiko)</td></tr>
        <tr><td>Art. 34</td><td>Benachrichtigung der Betroffenen</td><td>unverzüglich bei <strong>hohem Risiko</strong> für die Betroffenen</td></tr>
        </tbody></table>
        <p>Bußgelder: bis 10 Mio. € oder 2 % des weltweiten Jahresumsatzes (z. B. Verstoß gegen Art. 32/33), bis 20 Mio. € oder 4 % bei Verstößen gegen die Grundsätze. Zuständig in Schleswig-Holstein ist das <strong>ULD</strong> (Unabhängiges Landeszentrum für Datenschutz).</p>
        <h5>IT-Sicherheitsrecht: BSIG, NIS2, KRITIS</h5>
        <p>Die EU-Richtlinie <strong>NIS2</strong> wurde in Deutschland durch das <strong>NIS2-Umsetzungs- und Cybersicherheitsstärkungsgesetz</strong> umgesetzt, das im Dezember 2025 in Kraft trat. Es fasst das <strong>BSI-Gesetz (BSIG)</strong> neu, das zuvor schon das IT-Sicherheitsgesetz 2.0 (2021) erweitert hatte. Statt vor allem KRITIS-Betreibern sind nun nach Schätzungen knapp 30.000 Einrichtungen erfasst. Ob ein Unternehmen betroffen ist, hängt von zwei Fragen ab: <strong>In welchem Sektor</strong> ist es tätig (Anlage 1 „Sektoren mit hoher Kritikalität“ oder Anlage 2 „sonstige kritische Sektoren“ des BSIG)? Und <strong>wie groß</strong> ist es (Beschäftigte, Umsatz, Bilanzsumme)?</p>
        <table><thead><tr><th>Kategorie</th><th>wer typischerweise darunter fällt</th><th>Bußgeld bis</th></tr></thead><tbody>
        <tr><td>besonders wichtige Einrichtung</td><td>Betreiber kritischer Anlagen (KRITIS) sowie <strong>Großunternehmen</strong> (ab 250 Beschäftigte oder über 50 Mio. € Umsatz und über 43 Mio. € Bilanzsumme) in Sektoren der <strong>Anlage 1</strong>, z. B. Energie, Gesundheit, Transport, digitale Infrastruktur; einige Anbieter auch unabhängig von der Größe (z. B. DNS-Dienste, qualifizierte Vertrauensdienste)</td><td>10 Mio. € oder 2 % des weltweiten Umsatzes</td></tr>
        <tr><td>wichtige Einrichtung</td><td><strong>mittlere Unternehmen</strong> (ab 50 Beschäftigte oder über 10 Mio. € Umsatz und über 10 Mio. € Bilanzsumme) in Sektoren der Anlage 1 sowie mittlere <em>und</em> große Unternehmen in Sektoren der <strong>Anlage 2</strong>, z. B. Post, Abfall, Chemie, Lebensmittel, verarbeitendes Gewerbe (Maschinenbau, Elektronik), Anbieter digitaler Dienste</td><td>7 Mio. € oder 1,4 % des weltweiten Umsatzes</td></tr>
        </tbody></table>
        <div class="callout achtung"><strong>Achtung:</strong> Die Größe allein entscheidet nicht. Ein Maschinenbauer mit 400 Beschäftigten (Anlage 2) ist „nur“ eine <em>wichtige</em> Einrichtung, ein Energieversorger gleicher Größe (Anlage 1) eine <em>besonders wichtige</em>. Kleinunternehmen unter 50 Beschäftigten und 10 Mio. € sind in der Regel nicht erfasst.</div>
        <p>Pflichten der Einrichtungen:</p>
        <ul>
          <li><strong>Registrierung</strong> beim BSI (spätestens drei Monate, nachdem die Einrichtung unter das Gesetz fällt).</li>
          <li><strong>Risikomanagementmaßnahmen</strong>, z. B. Konzepte zur Risikoanalyse, Bewältigung von Sicherheitsvorfällen, Backup und Notfallmanagement, Sicherheit der Lieferkette, Kryptografie, Zugriffskontrolle, MFA, Schulungen.</li>
          <li><strong>Meldepflicht</strong> bei erheblichen Sicherheitsvorfällen an das BSI: <strong>Frühwarnung binnen 24 h</strong>, Meldung binnen <strong>72 h</strong>, Abschlussbericht nach <strong>einem Monat</strong>.</li>
          <li><strong>Geschäftsleitung</strong>: muss die Maßnahmen billigen, ihre Umsetzung überwachen, regelmäßig an Schulungen teilnehmen und haftet bei Pflichtverletzung.</li>
        </ul>
        <p><strong>KRITIS</strong> (Kritische Infrastrukturen wie Energie, Wasser, Gesundheit, Telekommunikation) unterliegen zusätzlich strengeren Nachweispflichten. Die physische Widerstandsfähigkeit regelt das KRITIS-Dachgesetz. Für Hersteller vernetzter Produkte gilt der EU <strong>Cyber Resilience Act</strong>: Seit 11.09.2026 müssen sie aktiv ausgenutzte Schwachstellen melden, ab Dezember 2027 gelten alle Anforderungen (z. B. Sicherheitsupdates über den Supportzeitraum).</p>
        <div class="callout achtung"><strong>Achtung:</strong> DSGVO und NIS2 laufen parallel. Ein Ransomware-Angriff auf Kundendaten kann eine Meldung an das ULD (72 h, DSGVO) <em>und</em> an das BSI (24 h Frühwarnung, NIS2) auslösen. Die Fristen beginnen mit Kenntnis des Vorfalls, nicht mit dem Abschluss der Analyse.</div>
        <h5>Datenschutz im laufenden Betrieb</h5>
        <ul>
          <li><strong>Logs</strong> mit IP-Adressen und Benutzernamen sind personenbezogene Daten: Zweck festlegen (Sicherheit, Fehleranalyse), Zugriff beschränken, Speicherdauer im <strong>Löschkonzept</strong> regeln und automatisch löschen.</li>
          <li><strong>Monitoring und Überwachung</strong>: Systeme, die Verhalten oder Leistung von Beschäftigten überwachen können, sind nach § 87 Abs. 1 Nr. 6 BetrVG mitbestimmungspflichtig → <strong>Betriebsvereinbarung</strong> mit dem Betriebsrat.</li>
          <li><strong>Fernwartung</strong> durch Externe: AV-Vertrag, Freigabe im Einzelfall, Protokollierung, Sitzung sichtbar.</li>
          <li><strong>Nutzungsrichtlinie</strong>: private Nutzung von Mail und Internet klar regeln.</li>
        </ul>
        <h5>Wirksamkeit und Effizienz der TOM prüfen</h5>
        <table><thead><tr><th>Kontrolle</th><th>Beispiele</th><th>Prüfung</th></tr></thead><tbody>
        <tr><td>Zutritt (Räume)</td><td>Chipkarten-Schließsystem, Alarmanlage, Videoüberwachung (Hinweisschild, kurze Speicherdauer), Besucherausweise</td><td>Zutrittsprotokolle, Begehung, Alarmtest</td></tr>
        <tr><td>Zugang (Systeme)</td><td>Bildschirmsperre mit Passwort, MFA, Chipkarte, Biometrie</td><td>Stichproben, Richtlinienberichte; bei Biometrie Fehlerraten FAR (Unberechtigte akzeptiert) und FRR (Berechtigte abgewiesen)</td></tr>
        <tr><td>Zugriff (Daten)</td><td>Rollenkonzept, Datenträgerverschlüsselung, Löschung/Vernichtung nach DIN 66399</td><td>Rezertifizierung der Rechte, Compliance-Berichte, Löschprotokolle</td></tr>
        </tbody></table>
        <p><strong>Wirksam</strong> ist eine Maßnahme, wenn sie das Risiko tatsächlich senkt, <strong>effizient</strong>, wenn Kosten und Aufwand zum Nutzen passen.</p>
        <h6>Compliance-Berichte lesen</h6>
        <p>Werkzeuge wie Intune, MECM, der Schwachstellenscanner oder das SIEM erzeugen <strong>Compliance-Berichte</strong>: Sie vergleichen den Ist-Zustand der Geräte mit den Vorgaben (Richtlinien) und listen Abweichungen auf. Deine Aufgabe ist, die Abweichungen zu bewerten und in Maßnahmen umzusetzen.</p>
        <div class="callout beispiel"><strong>Beispiel:</strong> Der Monatsbericht zeigt 240 verwaltete Notebooks. Abweichungen (je Gerät höchstens eine): 14 Geräte ohne aktuellen Patchstand, 7 ohne aktive BitLocker-Verschlüsselung, 3 mit abgeschaltetem Virenschutz → 14 + 7 + 3 = 24 nicht konforme Geräte.<br>Compliance-Quote = (240 − 24) ÷ 240 = 216 ÷ 240 = 0,9 = <strong>90 %</strong>. Vorgabe laut Richtlinie: mindestens 98 % → verfehlt.<br>Maßnahmen nach Risiko: (1) die 7 unverschlüsselten Geräte sofort verschlüsseln oder sperren (Datenverlust bei Diebstahl), (2) Virenschutz auf den 3 Geräten per Richtlinie erzwingen und Ursache klären, (3) Patches für die 14 Geräte nachverteilen, Geräte, die lange offline waren, gezielt ansprechen. Nicht konforme Geräte per <strong>Conditional Access</strong> vom Zugriff auf Firmendaten ausschließen, bis sie wieder konform sind.</div>
        <div class="callout merke"><strong>Merke:</strong> DSGVO → Aufsichtsbehörde binnen 72 h, Betroffene bei hohem Risiko. NIS2 → BSI: 24 h – 72 h – 1 Monat. Verantwortlich bleibt immer die Geschäftsleitung.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> In einem Vorfall die Meldepflichten mit Frist und Empfänger <em>nennen</em>, Art. 32 DSGVO mit konkreten TOM <em>erläutern</em>, <em>begründen</em>, warum ein Monitoring-System eine Betriebsvereinbarung braucht, und <em>beurteilen</em>, ob ein Unternehmen unter NIS2 fällt.</div>`
    },
    {
      id: "bedrohungen",
      title: "Bedrohungsanalyse: Angriffe im Netz und Gegenmaßnahmen",
      exam: ["AP2"],
      summary: "Angreifer, Angriffswege und die wichtigsten Angriffe von MAC-Flooding über ARP-Poisoning bis Ransomware – jeweils mit passender Gegenmaßnahme und Switch-Konfiguration.",
      html: `
        <p>Eine <strong>Bedrohungsanalyse</strong> fragt: Was ist wertvoll (Assets)? Wer könnte angreifen? Auf welchem Weg? Was passiert dann? Erst danach wählst du Maßnahmen aus.</p>
        <ul>
          <li><strong>Angreifer</strong>: Innentäter, organisierte Kriminalität (Ransomware-Gruppen), staatliche Akteure mit lang andauernden, gezielten Angriffen (<strong>APT</strong>), Hacktivisten, Gelegenheitstäter.</li>
          <li><strong>Angriffswege</strong>: E-Mail, ungepatchte Dienste mit Internetzugang, gestohlene Zugangsdaten, VPN- und Fernwartungszugänge, Lieferkette (manipulierte Updates), physischer Zugang zum Netz.</li>
          <li><strong>Methode STRIDE</strong> zur Bedrohungsmodellierung: Spoofing (Identität fälschen), Tampering (manipulieren), Repudiation (abstreiten), Information Disclosure (ausspähen), Denial of Service, Elevation of Privilege (Rechte ausweiten).</li>
        </ul>
        <h5>Angriffe im lokalen Netz (Schicht 2/3)</h5>
        <table><thead><tr><th>Angriff</th><th>Ablauf</th><th>Gegenmaßnahme</th></tr></thead><tbody>
        <tr><td>MAC-Flooding</td><td>Tausende gefälschte MAC-Adressen füllen die MAC-Tabelle, der Switch flutet alle Frames an alle Ports</td><td>Port Security (maximale MAC-Anzahl)</td></tr>
        <tr><td>ARP-Spoofing / -Poisoning</td><td>unaufgeforderte ARP-Antworten: „Gateway-IP hat meine MAC“ → Verkehr läuft über den Angreifer (MITM)</td><td>Dynamic ARP Inspection (DAI) mit DHCP-Snooping, 802.1X, TLS</td></tr>
        <tr><td>Rogue-DHCP</td><td>fremder DHCP-Server verteilt falsches Gateway oder DNS</td><td>DHCP-Snooping (nur Uplink ist „trusted“)</td></tr>
        <tr><td>VLAN-Hopping</td><td>Switch Spoofing per DTP oder Double Tagging über das native VLAN</td><td>Ports fest auf Access, DTP aus, natives VLAN auf ungenutzte ID, VLAN 1 nicht nutzen</td></tr>
        <tr><td>STP-Manipulation</td><td>Angreifer sendet BPDUs mit Priorität 0 und wird Root Bridge</td><td>BPDU Guard an Endgeräteports, Root Guard</td></tr>
        <tr><td>DNS-Spoofing</td><td>gefälschte DNS-Antworten leiten auf falsche Server um</td><td>DNSSEC, interne Resolver, DNS over TLS/HTTPS</td></tr>
        </tbody></table>
        <h5>Angriffe auf Dienste und Menschen</h5>
        <table><thead><tr><th>Angriff</th><th>Kurz erklärt</th><th>Gegenmaßnahme</th></tr></thead><tbody>
        <tr><td>Man-in-the-Middle</td><td>Angreifer sitzt unbemerkt zwischen zwei Partnern, liest oder ändert Daten</td><td>TLS mit Zertifikatsprüfung, HSTS, VPN, DAI</td></tr>
        <tr><td>DDoS</td><td>viele Systeme (Botnetz) überlasten Leitung oder Dienst, z. B. SYN-Flood</td><td>Scrubbing-Dienst des Providers, CDN, Rate Limiting, SYN-Cookies</td></tr>
        <tr><td>SQL-Injection</td><td>Eingabe wird als SQL-Code ausgeführt, z. B. <code>' OR '1'='1</code></td><td>Prepared Statements, Eingabevalidierung, WAF, minimale DB-Rechte</td></tr>
        <tr><td>Cross-Site-Scripting (XSS)</td><td>eingeschleustes JavaScript läuft im Browser anderer Nutzer</td><td>Ausgaben kodieren, Content Security Policy, WAF</td></tr>
        <tr><td>Phishing, CEO-Fraud</td><td>gefälschte Mails stehlen Zugangsdaten oder veranlassen Zahlungen</td><td>Awareness, phishing-resistente MFA (FIDO2), SPF/DKIM/DMARC, Rückruf-Regel</td></tr>
        <tr><td>Ransomware</td><td>Daten werden verschlüsselt und oft vorher kopiert (Double Extortion)</td><td>Offline-/Immutable-Backups, Patches, Segmentierung, EDR, Makros sperren</td></tr>
        <tr><td>Brute Force, Password Spraying, Credential Stuffing</td><td>Passwörter raten bzw. geleakte Kombinationen durchprobieren</td><td>MFA, Kontosperre, Rate Limiting, Passwortfilter gegen geleakte Passwörter</td></tr>
        <tr><td>Zero-Day-Exploit</td><td>Lücke, für die es noch keinen Patch gibt</td><td>Härtung, Segmentierung, IPS/EDR, schnelle Notfallpatches</td></tr>
        <tr><td>Datendiebstahl</td><td>Innentäter oder Angreifer kopieren Daten (USB, Cloud, Mail)</td><td>Rechtekonzept, Verschlüsselung, Data Loss Prevention (DLP), USB-Kontrolle, Protokollierung</td></tr>
        </tbody></table>
        <h5>Switch absichern (Cisco-Beispiel)</h5>
        <pre><code>ip dhcp snooping
ip dhcp snooping vlan 10,20
ip arp inspection vlan 10,20
!
interface range fa0/1 - 22
 switchport mode access
 switchport nonegotiate
 switchport port-security
 switchport port-security maximum 2
 switchport port-security mac-address sticky
 switchport port-security violation restrict
 spanning-tree portfast
 spanning-tree bpduguard enable
!
interface gi0/1
 description Uplink zum Core
 ip dhcp snooping trust
 ip arp inspection trust</code></pre>
        <p>Verletzungsmodi bei Port Security: <strong>shutdown</strong> (Standard, Port geht in err-disabled), <strong>restrict</strong> (verwirft, zählt und meldet per Syslog/SNMP), <strong>protect</strong> (verwirft still). <strong>Sticky</strong> übernimmt die gelernte MAC-Adresse in die laufende Konfiguration.</p>
        <div class="callout tipp"><strong>Tipp:</strong> DAI prüft ARP-Pakete gegen die <strong>DHCP-Snooping-Bindungstabelle</strong> (IP ↔ MAC ↔ Port). Deshalb funktioniert DAI nur zusammen mit DHCP-Snooping – oder mit statischen ARP-ACLs für Geräte mit fester IP.</div>
        <div class="callout achtung"><strong>Achtung:</strong> Eine <strong>versteckte SSID</strong> und ein <strong>MAC-Filter</strong> sind keine Sicherheitsmaßnahmen, weil sich SSID und MAC-Adressen leicht mitlesen und fälschen lassen.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Angriffe und Gegenmaßnahmen <em>zuordnen</em>, den Ablauf von ARP-Poisoning <em>beschreiben</em>, eine Port-Security-Konfiguration <em>ergänzen</em> oder <em>erläutern</em>, was bei einer Verletzung passiert.</div>`
    },
    {
      id: "segmentierung-dmz",
      title: "Netzsegmentierung, Sicherheitszonen und DMZ",
      exam: ["AP2"],
      summary: "Warum flache Netze gefährlich sind, wie du Zonen bildest, ein- und zweistufige DMZ planst und Forward- und Reverse-Proxy richtig platzierst.",
      html: `
        <p>In einem <strong>flachen Netz</strong> kann jedes Gerät jedes andere erreichen. Hat ein Angreifer einen Client übernommen, bewegt er sich ungehindert weiter (<strong>laterale Bewegung</strong>). <strong>Segmentierung</strong> teilt das Netz in Zonen mit unterschiedlichem Schutzbedarf. Zwischen den Zonen kontrolliert eine Firewall jeden Übergang.</p>
        <h5>Typische Sicherheitszonen</h5>
        <table><thead><tr><th>Zone</th><th>Inhalt</th><th>Grundregel</th></tr></thead><tbody>
        <tr><td>Internet (untrusted)</td><td>alles außerhalb</td><td>eingehend nur zur DMZ</td></tr>
        <tr><td>DMZ</td><td>öffentlich erreichbare Dienste: Webserver, Reverse Proxy, Mail-Relay, VPN-Gateway</td><td>kein direkter Zugriff ins LAN</td></tr>
        <tr><td>Server</td><td>AD, Datei-, Datenbank-, Anwendungsserver</td><td>nur benötigte Ports von den Clients</td></tr>
        <tr><td>Clients</td><td>Arbeitsplätze, Notebooks</td><td>Internet nur über Proxy/Firewall</td></tr>
        <tr><td>Management</td><td>Verwaltungsschnittstellen von Switches, Firewalls, Hypervisoren, iLO/iDRAC</td><td>nur von Admin-Jump-Host</td></tr>
        <tr><td>Gäste, IoT, VoIP, OT</td><td>Gäste-WLAN, Kameras, Telefone, Produktionsanlagen</td><td>streng isoliert, nur benötigte Verbindungen</td></tr>
        </tbody></table>
        <h5>Techniken der Segmentierung</h5>
        <ul>
          <li><strong>VLANs</strong> (IEEE 802.1Q) trennen logisch auf Schicht 2. Routing zwischen den VLANs übernimmt die <strong>Firewall</strong>. Ein Layer-3-Switch routet ohne ACLs alles durch.</li>
          <li><strong>ACLs</strong> auf Routern und Layer-3-Switches: zustandslose Filter für einfache Regeln.</li>
          <li><strong>Mikrosegmentierung</strong>: Regeln bis auf einzelne VMs oder Workloads (z. B. verteilte Firewall im Hypervisor), wichtig für Zero Trust.</li>
          <li><strong>Physische Trennung</strong> (Air Gap) für sehr hohen Schutzbedarf, z. B. Steuerungsnetze.</li>
        </ul>
        <h5>DMZ-Architekturen</h5>
        <div class="grid-2">
        <div><p><strong>Einstufig (Dreibein, Three-Legged)</strong>: eine Firewall mit drei Schnittstellen (WAN, DMZ, LAN). Günstig und einfach, aber ein <strong>Single Point of Failure</strong>: Wer die Firewall überwindet, steht in allen Zonen.</p>
        <pre class="ascii">Internet
   |
[Firewall]---DMZ (Web, Mail-Relay)
   |
  LAN</pre></div>
        <div><p><strong>Zweistufig (Screened Subnet)</strong>: äußere Firewall zwischen Internet und DMZ, innere Firewall zwischen DMZ und LAN, oft von <strong>verschiedenen Herstellern</strong>. Eine Lücke in einem Produkt reicht dann nicht aus.</p>
        <pre class="ascii">Internet
   |
[Firewall außen]
   |
  DMZ (Reverse Proxy, Mail-Relay)
   |
[Firewall innen]
   |
  LAN</pre></div>
        </div>
        <p>Grundregeln für die DMZ:</p>
        <ul>
          <li>Aus dem Internet nur die veröffentlichten Dienste erlauben (z. B. TCP 443 zum Reverse Proxy, TCP 25 zum Mail-Relay).</li>
          <li>Aus der DMZ ins LAN grundsätzlich nichts, nur eng begrenzte Ausnahmen (Reverse Proxy → interner Anwendungsserver auf einem Port).</li>
          <li>Vom LAN in die DMZ nur Administration über den Jump-Host und die nötigen Dienste.</li>
          <li>DMZ-Server sind gehärtet, minimal installiert und protokollieren zentral.</li>
        </ul>
        <h5>Forward-Proxy und Reverse-Proxy</h5>
        <table><thead><tr><th></th><th>Forward-Proxy</th><th>Reverse-Proxy</th></tr></thead><tbody>
        <tr><td>Richtung</td><td>interne Clients → Internet</td><td>Internet → interne Server</td></tr>
        <tr><td>Aufgaben</td><td>URL- und Inhaltsfilter, Malware-Scan, Authentifizierung, Cache, Protokollierung</td><td>TLS-Terminierung, Lastverteilung, Caching, WAF, verbirgt die Backends</td></tr>
        <tr><td>Standort</td><td>internes Netz oder DMZ, Clients per PAC-Datei oder transparent</td><td>DMZ vor den Webservern</td></tr>
        <tr><td>Beispiele</td><td>Squid (Port 3128), Web-Gateway der NGFW</td><td>nginx, HAProxy, Traefik</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>Merke:</strong> Jeder Zonenübergang läuft über eine Firewall, und die DMZ darf nie direkt ins LAN. Für Server im Internet gilt: in die DMZ, nie ins LAN mit Portweiterleitung.</div>
        <div class="callout achtung"><strong>Achtung:</strong> Die „Exposed Host“-Funktion vieler Router ist keine echte DMZ. Sie leitet alle Ports an einen Rechner im LAN weiter und öffnet das interne Netz.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> In einem Netzplan Server den richtigen Zonen <em>zuordnen</em>, die Vorteile einer zweistufigen DMZ <em>erläutern</em>, Forward- und Reverse-Proxy <em>unterscheiden</em>, ein Segmentierungskonzept mit VLAN-IDs <em>entwerfen</em>.</div>`
    },
    {
      id: "firewalls",
      title: "Firewall-Arten und Firewall-Regelwerke",
      exam: ["AP2"],
      summary: "Paketfilter, Stateful Inspection, Application Level Gateway, NGFW und WAF vergleichen sowie Regelwerke nach first match und implicit deny lesen, erstellen und korrigieren.",
      html: `
        <p>Eine <strong>Firewall</strong> kontrolliert den Verkehr zwischen Netzen oder Zonen nach einem <strong>Regelwerk</strong>. Sie ist so gut wie ihre Regeln und ihre Position im Netz.</p>
        <h5>Firewall-Arten im Vergleich</h5>
        <table><thead><tr><th>Art</th><th>OSI-Schicht</th><th>Arbeitsweise</th><th>Stärken / Schwächen</th></tr></thead><tbody>
        <tr><td>Paketfilter (zustandslos)</td><td>3–4</td><td>prüft jedes Paket einzeln nach IP, Protokoll, Port</td><td>schnell, einfach; Rückrichtung braucht eigene Regel, erkennt keine Verbindungen</td></tr>
        <tr><td>Stateful Inspection (SPI)</td><td>3–4</td><td>führt eine <strong>Verbindungstabelle</strong>; Antwortpakete einer erlaubten Verbindung passieren automatisch</td><td>sicherer und übersichtlicher; sieht keine Inhalte</td></tr>
        <tr><td>Application Level Gateway (Proxy)</td><td>7</td><td>baut zwei getrennte Verbindungen auf und versteht das Protokoll (z. B. HTTP, SMTP)</td><td>Inhaltsfilter, Authentifizierung; langsamer, je Protokoll ein Proxy</td></tr>
        <tr><td>Next Generation Firewall (NGFW)</td><td>3–7</td><td>SPI + <strong>Deep Packet Inspection</strong>, Anwendungserkennung, Benutzerbezug, IPS, TLS-Inspektion, Threat Intelligence</td><td>feine Regeln („Teams ja, Filesharing nein“); teuer, TLS-Inspektion rechtlich heikel</td></tr>
        <tr><td>Web Application Firewall (WAF)</td><td>7</td><td>prüft HTTP(S)-Anfragen vor einer Webanwendung</td><td>schützt vor SQL-Injection, XSS (OWASP Top 10); nur für Webdienste</td></tr>
        <tr><td>Host-/Personal Firewall</td><td>3–7</td><td>läuft auf dem Endgerät, Regeln je Programm</td><td>schützt auch im fremden Netz; zentral verwalten (GPO/Intune)</td></tr>
        </tbody></table>
        <h5>Aufbau eines Regelwerks</h5>
        <ul>
          <li>Jede Regel enthält <strong>Quelle, Ziel, Protokoll, Zielport, Aktion</strong> (allow/deny bzw. drop/reject), dazu Schnittstelle bzw. Richtung, Logging und Kommentar.</li>
          <li><strong>First Match</strong>: Die Regeln werden von oben nach unten geprüft, die <strong>erste passende</strong> entscheidet. Spezielle Regeln gehören nach oben, allgemeine nach unten.</li>
          <li><strong>Implicit Deny</strong>: Was keine Regel erlaubt, wird verworfen. Besser ist eine explizite letzte Regel „any → any deny“ mit Logging.</li>
          <li><strong>Whitelist-Prinzip</strong>: nur erlauben, was nötig ist (Least Privilege).</li>
          <li><strong>Stateful</strong>: Du schreibst nur die Hinrichtung. Der Rückverkehr gehört zur Verbindung („established, related“).</li>
          <li>Der <strong>Quellport</strong> eines Clients ist zufällig (ephemeral, meist 49152–65535). In Regeln steht deshalb meist nur der <strong>Zielport</strong>.</li>
        </ul>
        <div class="callout beispiel"><strong>Beispiel – Regelwerk der Nordlicht IT GmbH:</strong> Webserver in der DMZ 203.0.113.10, Client-LAN 192.168.10.0/24, Server-Netz 192.168.20.0/24 mit Proxy 192.168.20.5 und internem DNS 192.168.20.53. Client-LAN und Server-Netz sind getrennte Zonen, ihr Verkehr läuft also über die Firewall.
        <table><thead><tr><th>Nr.</th><th>Quelle</th><th>Ziel</th><th>Protokoll/Port</th><th>Aktion</th></tr></thead><tbody>
        <tr><td>1</td><td>any</td><td>203.0.113.10</td><td>TCP 443</td><td>allow</td></tr>
        <tr><td>2</td><td>192.168.10.0/24</td><td>192.168.20.53</td><td>UDP/TCP 53</td><td>allow</td></tr>
        <tr><td>3</td><td>192.168.10.0/24</td><td>192.168.20.5</td><td>TCP 3128</td><td>allow</td></tr>
        <tr><td>4</td><td>192.168.20.5</td><td>any</td><td>TCP 80, 443</td><td>allow</td></tr>
        <tr><td>5</td><td>192.168.20.53</td><td>any</td><td>UDP/TCP 53</td><td>allow</td></tr>
        <tr><td>6</td><td>any</td><td>any</td><td>any</td><td>deny + log</td></tr>
        </tbody></table>
        Clients surfen nur über den Proxy (Regel 3 + 4), fragen nur den internen DNS (Regel 2), der selbst nach außen auflöst (Regel 5). Alles andere verwirft Regel 6.</div>
        <div class="callout achtung"><strong>Achtung:</strong> Eine Firewall sieht nur Verkehr, der <strong>durch sie hindurch</strong> läuft. Liegen Client und Server im selben Subnetz, sprechen sie direkt über den Switch miteinander – eine Regel dafür wäre wirkungslos. Prüfe deshalb immer, ob Quelle und Ziel wirklich in verschiedenen Zonen liegen.</div>
        <p>Ein Auszug derselben Logik als Linux-Firewall (iptables, stateful; Regeln 1, 4 und 6):</p>
        <pre><code>iptables -P FORWARD DROP
iptables -A FORWARD -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
iptables -A FORWARD -p tcp -d 203.0.113.10 --dport 443 -j ACCEPT
iptables -A FORWARD -s 192.168.20.5 -p tcp -m multiport --dports 80,443 -j ACCEPT
iptables -A FORWARD -j LOG --log-prefix "FW-DENY "</code></pre>
        <p>Die Standard-Policy <code>DROP</code> ersetzt die Deny-Regel, die LOG-Regel davor protokolliert alles, was keine Erlaubnis gefunden hat.</p>
        <h5>Typische Fehler im Regelwerk</h5>
        <ul>
          <li><strong>Shadowing</strong>: Eine allgemeine Regel oben (z. B. LAN → any allow) verdeckt spätere Verbote. Diese werden nie erreicht.</li>
          <li>Falsches Protokoll: DNS braucht UDP <em>und</em> TCP 53, NTP UDP 123, IPsec UDP 500/4500 und ESP.</li>
          <li>Quell- und Zielport vertauscht, Richtung falsch, zu große Netze („any“ statt Einzel-IP).</li>
          <li>Verwaiste Regeln für alte Server. Deshalb das Regelwerk regelmäßig <strong>rezertifizieren</strong> und jede Regel mit Ticketnummer dokumentieren.</li>
        </ul>
        <div class="callout achtung"><strong>Achtung:</strong> <em>drop</em> verwirft still, <em>reject</em> sendet eine Ablehnung (TCP-RST oder ICMP). Nach außen ist drop üblich, weil es Angreifern weniger verrät. Intern erleichtert reject die Fehlersuche.</div>
        <div class="callout merke"><strong>Merke:</strong> Von oben nach unten, erste passende Regel gewinnt, am Ende „deny all“. Spezielle Regeln zuerst.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Ein Regelwerk für ein Szenario <em>erstellen</em> (Quelle, Ziel, Protokoll, Port, Aktion), ein vorhandenes <em>prüfen</em> und Fehler in der Reihenfolge <em>finden</em>, Paketfilter, Stateful Inspection und NGFW <em>vergleichen</em>, den Vorteil einer WAF <em>erläutern</em>.</div>`
    },
    {
      id: "ids-siem",
      title: "IDS/IPS, Logging, SIEM und Paketanalyse",
      exam: ["AP2"],
      summary: "Angriffe erkennen statt nur blockieren: IDS und IPS platzieren, Logs zentral sammeln, mit einem SIEM korrelieren und Auffälligkeiten im Wireshark-Mitschnitt finden.",
      html: `
        <p>Eine Firewall entscheidet nach Regeln. <strong>Erkennungssysteme</strong> suchen zusätzlich nach Angriffsmustern und Auffälligkeiten – im Netzverkehr, auf Hosts und in Protokolldateien.</p>
        <h5>IDS und IPS</h5>
        <table><thead><tr><th></th><th>IDS (Intrusion Detection System)</th><th>IPS (Intrusion Prevention System)</th></tr></thead><tbody>
        <tr><td>Aufgabe</td><td>erkennt und <strong>alarmiert</strong></td><td>erkennt und <strong>blockiert</strong> aktiv</td></tr>
        <tr><td>Einbindung</td><td>passiv über Mirror-/SPAN-Port oder TAP</td><td><strong>inline</strong> im Datenweg (meist hinter der Firewall)</td></tr>
        <tr><td>Risiko</td><td>Angriff läuft weiter, bis jemand reagiert</td><td>Fehlalarm blockiert legitimen Verkehr; Ausfall unterbricht das Netz</td></tr>
        </tbody></table>
        <ul>
          <li><strong>NIDS/NIPS</strong> überwachen Netzsegmente, <strong>HIDS</strong> ein einzelnes System (Dateiintegrität, Logs, Prozesse).</li>
          <li><strong>Signaturbasiert</strong>: erkennt bekannte Muster sehr zuverlässig, aber keine neuen Angriffe. <strong>Anomaliebasiert</strong>: lernt den Normalzustand und meldet Abweichungen, erkennt auch Unbekanntes, erzeugt aber mehr Fehlalarme.</li>
          <li><strong>False Positive</strong> = Alarm ohne Angriff; <strong>False Negative</strong> = Angriff ohne Alarm (gefährlicher).</li>
          <li><strong>Honeypot</strong>: bewusst angreifbar wirkendes Ködersystem ohne echte Daten. Jeder Zugriff ist verdächtig und liefert Informationen über Angreifer.</li>
          <li><strong>EDR</strong> (Endpoint Detection and Response) überwacht Endgeräte verhaltensbasiert und kann sie isolieren. <strong>XDR</strong> verknüpft Endgerät, Netz, Mail und Cloud.</li>
        </ul>
        <pre><code>alert tcp any any -&gt; $HOME_NET 22 (msg:"SSH Brute Force"; flags:S; threshold:type both, track by_src, count 5, seconds 60; sid:1000001; rev:1;)</code></pre>
        <p>Diese Suricata-Regel meldet eine Quelle, die innerhalb von 60 s mindestens 5 neue SSH-Verbindungen (SYN) aufbaut.</p>
        <h5>Zentrales Logging</h5>
        <table><thead><tr><th>Syslog-Schweregrad</th><th>Name</th><th>Beispiel</th></tr></thead><tbody>
        <tr><td>0 / 1 / 2</td><td>Emergency / Alert / Critical</td><td>System unbenutzbar, sofort handeln, Hardwarefehler</td></tr>
        <tr><td>3 / 4</td><td>Error / Warning</td><td>Dienst gestoppt, Datenträger fast voll</td></tr>
        <tr><td>5 / 6 / 7</td><td>Notice / Informational / Debug</td><td>Interface up, Anmeldung, Fehlersuche</td></tr>
        </tbody></table>
        <ul>
          <li>Alle Systeme senden an einen <strong>zentralen Logserver</strong> (Syslog UDP 514, besser TCP mit TLS 6514; Windows-Ereignisweiterleitung). Ein Angreifer kann lokale Logs löschen, die zentrale Kopie aber nicht.</li>
          <li><strong>Zeitsynchronisation per NTP</strong> ist Pflicht, sonst lassen sich Ereignisse nicht korrelieren.</li>
          <li>Wichtige Windows-Ereignis-IDs: <strong>4624</strong> Anmeldung erfolgreich, <strong>4625</strong> fehlgeschlagen, <strong>4740</strong> Konto gesperrt, <strong>4720</strong> Konto angelegt, <strong>1102</strong> Sicherheitsprotokoll gelöscht.</li>
          <li>Logs schützen (Schreibrechte, Hashes, WORM) und nach Löschkonzept aufbewahren – Logs sind personenbezogen.</li>
        </ul>
        <h5>SIEM</h5>
        <p>Ein <strong>SIEM</strong> (Security Information and Event Management, z. B. Wazuh, Splunk, Microsoft Sentinel) <strong>sammelt</strong> Logs aus allen Quellen, <strong>normalisiert</strong> sie in ein einheitliches Format, <strong>korreliert</strong> Ereignisse über Systeme hinweg, <strong>alarmiert</strong> und erstellt Compliance-Berichte. Betreut wird es oft von einem <strong>SOC</strong> (Security Operations Center).</p>
        <div class="callout beispiel"><strong>Beispiel-Korrelationsregel:</strong> Mindestens 10 × Ereignis 4625 für ein Konto in 5 Minuten, danach 4624 für dasselbe Konto von einer neuen IP → Alarm „möglicher erfolgreicher Brute-Force-Angriff“. Einzeln wäre jedes Ereignis unauffällig.</div>
        <h5>Paketanalyse mit Wireshark</h5>
        <table><thead><tr><th>Anzeigefilter</th><th>zeigt</th></tr></thead><tbody>
        <tr><td><code>arp</code></td><td>alle ARP-Pakete</td></tr>
        <tr><td><code>arp.duplicate-address-detected</code></td><td>eine IP mit mehreren MAC-Adressen (Hinweis auf ARP-Spoofing)</td></tr>
        <tr><td><code>tcp.flags.syn==1 &amp;&amp; tcp.flags.ack==0</code></td><td>Verbindungsaufbauten (SYN); viele SYN an viele Ports = Portscan</td></tr>
        <tr><td><code>ip.addr==192.168.10.20</code></td><td>Verkehr von/zu einer IP</td></tr>
        <tr><td><code>dns</code> / <code>tcp.port==443</code></td><td>Namensauflösung / HTTPS</td></tr>
        </tbody></table>
        <p>Typische Befunde: dieselbe Gateway-IP mit wechselnder MAC (ARP-Poisoning), SYN ohne abschließendes ACK in großer Zahl (SYN-Flood), viele RST-Antworten auf SYN (Portscan auf geschlossene Ports), Klartext-Passwörter bei FTP, Telnet oder HTTP.</p>
        <div class="callout merke"><strong>Merke:</strong> IDS = Alarmanlage, IPS = Türsteher. Ohne synchrone Zeit und zentrale Logs keine Aufklärung.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> IDS und IPS <em>unterscheiden</em> und im Netzplan <em>platzieren</em>, einen Mitschnitt <em>analysieren</em> (Handshake, ARP, Ports), einen Wireshark-Filter <em>angeben</em>, Aufgaben eines SIEM <em>beschreiben</em>.</div>`
    },
    {
      id: "kryptografie",
      title: "Kryptografie: symmetrisch, asymmetrisch, hybrid, Hash und Signatur",
      exam: ["AP1", "AP2"],
      summary: "Wie AES, RSA/ECC und Diffie-Hellman zusammenarbeiten, warum in der Praxis hybrid verschlüsselt wird und wie Hashfunktionen und digitale Signaturen Integrität und Authentizität sichern.",
      html: `
        <p>Kryptografie wandelt <strong>Klartext</strong> mit einem <strong>Schlüssel</strong> in <strong>Chiffretext</strong> um. Nach dem <strong>Kerckhoffs-Prinzip</strong> darf das Verfahren öffentlich bekannt sein. Die Sicherheit hängt allein am geheimen Schlüssel.</p>
        <h5>Symmetrische Verschlüsselung</h5>
        <p>Sender und Empfänger nutzen <strong>denselben geheimen Schlüssel</strong>. Standard ist <strong>AES</strong> (Blockgröße 128 Bit, Schlüssel 128, 192 oder 256 Bit), meist im Modus <strong>GCM</strong>, der zugleich die Integrität sichert. Alternative: <strong>ChaCha20-Poly1305</strong> (schnell auf Geräten ohne AES-Hardware). DES und 3DES sind veraltet, der ECB-Modus ist unsicher.</p>
        <ul><li>Vorteil: sehr schnell, auch für große Datenmengen.</li><li>Problem: Wie kommt der Schlüssel sicher zum Partner? Und jedes Paar braucht einen eigenen Schlüssel.</li></ul>
        <h5>Asymmetrische Verschlüsselung</h5>
        <p>Jeder Teilnehmer hat ein <strong>Schlüsselpaar</strong>: Den <strong>öffentlichen Schlüssel</strong> darf jeder kennen, den <strong>privaten Schlüssel</strong> nur der Besitzer.</p>
        <ul>
          <li><strong>Vertraulichkeit</strong>: mit dem öffentlichen Schlüssel des <em>Empfängers</em> verschlüsseln → nur dessen privater Schlüssel entschlüsselt.</li>
          <li><strong>Signatur</strong>: mit dem eigenen <em>privaten</em> Schlüssel signieren → jeder prüft mit dem öffentlichen Schlüssel.</li>
          <li>Verfahren: <strong>RSA</strong> (Faktorisierung großer Zahlen; das BSI empfiehlt mindestens 3000 Bit), <strong>ECC</strong> (elliptische Kurven; 256 Bit sind etwa so stark wie RSA mit 3072 Bit), <strong>Diffie-Hellman/ECDHE</strong> zur Schlüsselvereinbarung.</li>
          <li>Nachteil: um ein Vielfaches (Größenordnung 100- bis 1.000-fach) langsamer als symmetrische Verfahren.</li>
        </ul>
        <div class="callout formel"><strong>Anzahl Schlüssel bei n Teilnehmern:</strong><br>symmetrisch: n × (n − 1) ÷ 2 gemeinsame Schlüssel<br>asymmetrisch: 2 × n Schlüssel (n Schlüsselpaare)</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> 50 Beschäftigte sollen paarweise vertraulich kommunizieren.<br>Symmetrisch: 50 × 49 ÷ 2 = <strong>1.225</strong> Schlüssel, die alle sicher verteilt werden müssen.<br>Asymmetrisch: 2 × 50 = <strong>100</strong> Schlüssel (50 Paare), die öffentlichen Schlüssel dürfen frei verteilt werden.</div>
        <h5>Hybride Verschlüsselung</h5>
        <p>In der Praxis werden beide Verfahren kombiniert. Ein zufälliger <strong>Sitzungsschlüssel</strong> verschlüsselt die Daten symmetrisch (schnell). Den Sitzungsschlüssel übermittelt man asymmetrisch (mit dem öffentlichen Schlüssel des Empfängers) oder vereinbart ihn per ECDHE. So arbeiten TLS, IPsec, S/MIME und PGP.</p>
        <table><thead><tr><th></th><th>symmetrisch</th><th>asymmetrisch</th><th>hybrid</th></tr></thead><tbody>
        <tr><td>Schlüssel</td><td>ein gemeinsamer</td><td>Paar: öffentlich + privat</td><td>Sitzungsschlüssel + Schlüsselpaar</td></tr>
        <tr><td>Tempo</td><td>schnell</td><td>langsam</td><td>schnell (Daten symmetrisch)</td></tr>
        <tr><td>Schlüsselaustausch</td><td>schwierig</td><td>einfach</td><td>einfach</td></tr>
        <tr><td>Beispiele</td><td>AES, ChaCha20</td><td>RSA, ECC</td><td>TLS, S/MIME, PGP</td></tr>
        </tbody></table>
        <h5>Hashfunktionen</h5>
        <p>Eine <strong>Hashfunktion</strong> berechnet aus beliebig langen Daten einen Wert fester Länge (SHA-256: 256 Bit). Sie ist eine <strong>Einwegfunktion</strong>, <strong>kollisionsresistent</strong> und zeigt den <strong>Lawineneffekt</strong> (ein geändertes Bit ändert etwa die Hälfte des Hashes). Aktuell: <strong>SHA-2</strong> (SHA-256/384/512) und <strong>SHA-3</strong>. MD5 und SHA-1 gelten als gebrochen.</p>
        <ul>
          <li><strong>Integrität</strong>: Prüfsumme eines Downloads vergleichen (<code>Get-FileHash datei.iso</code>, <code>sha256sum datei.iso</code>).</li>
          <li><strong>Passwörter</strong>: nie im Klartext speichern, sondern mit <strong>Salt</strong> und bewusst langsamen Verfahren (Argon2, bcrypt, PBKDF2) → Schutz vor Rainbow Tables.</li>
          <li><strong>HMAC</strong>: Hash über Daten + geheimen Schlüssel → Integrität und Authentizität, z. B. in IPsec und TLS.</li>
        </ul>
        <h5>Digitale Signatur</h5>
        <ol><li>Der Absender bildet den Hashwert des Dokuments.</li><li>Er signiert den Hash mit seinem <strong>privaten</strong> Schlüssel.</li><li>Der Empfänger bildet selbst den Hash, prüft die Signatur mit dem <strong>öffentlichen</strong> Schlüssel des Absenders und vergleicht.</li></ol>
        <p>Ergebnis: <strong>Integrität</strong>, <strong>Authentizität</strong> und <strong>Nichtabstreitbarkeit</strong> – aber keine Vertraulichkeit. Dafür muss zusätzlich verschlüsselt werden.</p>
        <div class="callout achtung"><strong>Achtung:</strong> Häufiger Fehler: „Zum Verschlüsseln nimmt man den eigenen privaten Schlüssel.“ Falsch – verschlüsselt wird mit dem <strong>öffentlichen Schlüssel des Empfängers</strong>, signiert mit dem <strong>eigenen privaten Schlüssel</strong>. Ein Hash ist keine Verschlüsselung, denn er lässt sich nicht zurückrechnen.</div>
        <div class="callout tipp"><strong>Ausblick:</strong> Quantencomputer könnten RSA und ECC künftig brechen. Deshalb werden <strong>Post-Quanten-Verfahren</strong> (z. B. ML-KEM, ML-DSA) eingeführt, in TLS bereits hybrid mit ECDHE kombiniert. AES-256 gilt weiter als sicher.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Verfahren <em>vergleichen</em>, die Schlüsselanzahl <em>berechnen</em>, hybride Verschlüsselung am Beispiel TLS <em>erläutern</em>, den Ablauf einer digitalen Signatur <em>beschreiben</em>, Hash-Eigenschaften <em>nennen</em>.</div>`
    },
    {
      id: "pki-tls",
      title: "Zertifikate, PKI und TLS",
      exam: ["AP2"],
      summary: "Aufbau eines X.509-Zertifikats, Vertrauenskette von der Root-CA bis zum Server, Sperrung per CRL/OCSP, kürzere Laufzeiten ab 2026 und der Ablauf des TLS-1.3-Handshakes.",
      html: `
        <p>Asymmetrische Verfahren haben ein Problem: Woher weißt du, dass ein öffentlicher Schlüssel wirklich zu <em>www.nordlicht-it.de</em> gehört? Ein <strong>Zertifikat</strong> bindet einen öffentlichen Schlüssel an eine Identität und ist von einer <strong>Zertifizierungsstelle (CA)</strong> signiert.</p>
        <h5>Inhalt eines X.509-Zertifikats</h5>
        <table><thead><tr><th>Feld</th><th>Bedeutung</th></tr></thead><tbody>
        <tr><td>Version, Seriennummer</td><td>X.509v3, eindeutige Nummer bei der CA (wichtig für Sperrungen)</td></tr>
        <tr><td>Aussteller (Issuer)</td><td>CA, die das Zertifikat signiert hat</td></tr>
        <tr><td>Gültigkeit</td><td>gültig ab / gültig bis</td></tr>
        <tr><td>Inhaber (Subject), SAN</td><td>Name bzw. alle abgedeckten DNS-Namen (Subject Alternative Name), z. B. *.nordlicht-it.de</td></tr>
        <tr><td>öffentlicher Schlüssel</td><td>Schlüssel des Inhabers mit Algorithmus (RSA, ECC)</td></tr>
        <tr><td>Erweiterungen</td><td>Key Usage, Extended Key Usage (Serverauthentifizierung, Clientauthentifizierung, E-Mail-Schutz), Basic Constraints (CA ja/nein), CRL- und OCSP-Adresse</td></tr>
        <tr><td>Signatur</td><td>digitale Signatur der CA über alle Felder</td></tr>
        </tbody></table>
        <h5>Aufbau einer PKI und Vertrauenskette</h5>
        <pre class="ascii">Root-CA (selbstsigniert, offline, im Trust Store des Systems)
   └─ signiert → Intermediate-CA (Sub-CA, stellt aus)
                   └─ signiert → Serverzertifikat www.nordlicht-it.de</pre>
        <ul>
          <li><strong>Root-CA</strong>: Vertrauensanker. Ihr Zertifikat ist im Betriebssystem oder Browser vorinstalliert oder wird per GPO verteilt.</li>
          <li><strong>Intermediate-CA</strong>: stellt die Zertifikate im Alltag aus. Wird sie kompromittiert, sperrt man nur sie, nicht die Root.</li>
          <li><strong>Registrierungsstelle (RA)</strong>: prüft die Identität des Antragstellers.</li>
          <li><strong>Sperrdienste</strong>: <strong>CRL</strong> (Sperrliste, regelmäßig veröffentlicht) oder <strong>OCSP</strong> (Online-Abfrage einzelner Zertifikate; mit <em>OCSP Stapling</em> liefert der Server die Antwort gleich mit). Einige öffentliche CAs wie Let's Encrypt haben OCSP 2025 eingestellt und setzen nur noch auf CRLs.</li>
        </ul>
        <p>Der Client prüft: Kette bis zu einer vertrauenswürdigen Root, jede Signatur, Gültigkeitszeitraum, Hostname im SAN, Sperrstatus, Verwendungszweck. Fehlt die Intermediate-CA auf dem Server, scheitert die Prüfung auf manchen Clients.</p>
        <h5>Lebenszyklus eines Zertifikats</h5>
        <ol><li>Schlüsselpaar erzeugen (der private Schlüssel verlässt den Server nie).</li><li><strong>CSR</strong> (Certificate Signing Request) mit öffentlichem Schlüssel und Namen an die CA senden.</li><li>CA prüft: <strong>DV</strong> (Domain Validation), <strong>OV</strong> (Organisation) oder <strong>EV</strong> (Extended Validation).</li><li>Zertifikat installieren (mit Intermediate-Kette), überwachen, rechtzeitig erneuern.</li><li>Bei Schlüsselverlust sofort <strong>sperren</strong> (revoke).</li></ol>
        <pre><code>openssl req -new -newkey rsa:3072 -nodes -keyout web.key -out web.csr -subj "/CN=www.nordlicht-it.de"
openssl x509 -in web.crt -noout -subject -issuer -dates
openssl s_client -connect www.nordlicht-it.de:443 -servername www.nordlicht-it.de</code></pre>
        <div class="callout achtung"><strong>Achtung – kürzere Laufzeiten:</strong> Öffentliche TLS-Zertifikate dürfen seit dem 15.03.2026 höchstens <strong>200 Tage</strong> gelten, ab 15.03.2027 höchstens 100 Tage und ab 15.03.2029 nur noch 47 Tage (Beschluss des CA/Browser Forums). Manuelles Erneuern skaliert nicht mehr → automatisieren mit <strong>ACME</strong> (z. B. Let's Encrypt, certbot) und Ablaufdaten im Monitoring überwachen.</div>
        <p>Für interne Zwecke (802.1X mit EAP-TLS, VPN, S/MIME, interne Webserver) betreiben Firmen eine <strong>eigene PKI</strong>, z. B. Active Directory Certificate Services mit automatischer Registrierung (Autoenrollment).</p>
        <h5>TLS-1.3-Handshake (vereinfacht)</h5>
        <ol>
          <li><strong>ClientHello</strong>: unterstützte Cipher Suites, ECDHE-Schlüsselanteil (Key Share), Servername (SNI).</li>
          <li><strong>ServerHello</strong>: gewählte Cipher Suite und eigener Key Share. Ab jetzt ist alles verschlüsselt: <strong>Zertifikat</strong>, <strong>CertificateVerify</strong> (Signatur mit dem privaten Serverschlüssel), <strong>Finished</strong>.</li>
          <li>Der Client prüft Zertifikatskette und Hostnamen, berechnet per ECDHE denselben Sitzungsschlüssel und sendet <strong>Finished</strong>.</li>
          <li>Die Nutzdaten laufen symmetrisch verschlüsselt (AES-GCM oder ChaCha20-Poly1305).</li>
        </ol>
        <p>TLS 1.3 braucht nur <strong>eine Round-Trip-Zeit</strong> und erzwingt <strong>Forward Secrecy</strong>: Wird der private Serverschlüssel später gestohlen, bleiben alte Sitzungen geschützt. SSL 2/3 sowie TLS 1.0/1.1 sind veraltet und abzuschalten. TLS 1.2 ist weiterhin zulässig, sollte aber nur mit Forward Secrecy (ECDHE) und AEAD-Verfahren wie AES-GCM konfiguriert werden. <strong>HSTS</strong> zwingt Browser dauerhaft auf HTTPS.</p>
        <div class="callout merke"><strong>Merke:</strong> Die CA bestätigt mit ihrer Signatur: „Dieser öffentliche Schlüssel gehört zu diesem Namen.“ TLS nutzt das Zertifikat zur Authentifizierung und ECDHE für den Sitzungsschlüssel → hybride Verschlüsselung.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Inhalte eines Zertifikats <em>nennen</em>, die Zertifikatskette <em>erläutern</em>, Ursachen einer Browser-Warnung <em>bestimmen</em> (abgelaufen, falscher Name, fehlende Intermediate-CA, selbstsigniert), den TLS-Handshake <em>beschreiben</em>, CRL und OCSP <em>vergleichen</em>.</div>`
    },
    {
      id: "vpn",
      title: "VPN: Site-to-Site, Remote Access, IPsec, TLS-VPN und WireGuard",
      exam: ["AP2"],
      summary: "VPN-Modelle für Standorte und Homeoffice, IPsec mit IKE, AH und ESP im Tunnel- und Transportmodus, TLS-VPN und WireGuard vergleichen und Fehler im Tunnel finden.",
      html: `
        <p>Ein <strong>VPN</strong> (Virtual Private Network) baut über ein unsicheres Netz (Internet) einen <strong>verschlüsselten Tunnel</strong>. Dabei werden Pakete in andere Pakete eingepackt (<strong>Tunneling</strong>). Ziele: Vertraulichkeit, Integrität und Authentizität der Gegenstelle.</p>
        <h5>VPN-Modelle</h5>
        <table><thead><tr><th>Modell</th><th>verbindet</th><th>typischer Einsatz</th></tr></thead><tbody>
        <tr><td>Site-to-Site</td><td>Gateway ↔ Gateway (Firewall/Router)</td><td>Filialen dauerhaft ans Hauptnetz; Clients merken nichts vom Tunnel</td></tr>
        <tr><td>End-to-Site (Remote Access)</td><td>Client mit VPN-Software ↔ Gateway</td><td>Homeoffice, Außendienst, Fernwartung</td></tr>
        <tr><td>End-to-End</td><td>Host ↔ Host</td><td>Verschlüsselung direkt zwischen zwei Servern (z. B. IPsec-Transportmodus)</td></tr>
        </tbody></table>
        <h5>IPsec</h5>
        <p><strong>IPsec</strong> sichert auf der Vermittlungsschicht (OSI 3) und schützt damit alle darüberliegenden Protokolle.</p>
        <table><thead><tr><th>Baustein</th><th>Aufgabe</th><th>Kennung</th></tr></thead><tbody>
        <tr><td>IKE (IKEv2)</td><td>handelt Algorithmen aus, authentifiziert die Partner (Pre-Shared Key oder Zertifikate), erzeugt per Diffie-Hellman die Schlüssel</td><td>UDP 500, bei NAT UDP 4500 (NAT-Traversal)</td></tr>
        <tr><td>ESP</td><td><strong>verschlüsselt</strong> und sichert Integrität/Authentizität der Nutzdaten</td><td>IP-Protokoll 50</td></tr>
        <tr><td>AH</td><td>nur Integrität und Authentizität, auch über Teile des IP-Headers, <strong>keine Verschlüsselung</strong>, nicht NAT-tauglich</td><td>IP-Protokoll 51</td></tr>
        </tbody></table>
        <p>Die ausgehandelten Parameter heißen <strong>Security Association (SA)</strong>. IKEv1 arbeitet in zwei Phasen: Phase 1 baut einen sicheren Verwaltungskanal (IKE-SA, Main oder Aggressive Mode), Phase 2 (Quick Mode) die SAs für die Nutzdaten. IKEv2 erledigt das mit weniger Nachrichten (IKE_SA_INIT, IKE_AUTH) und unterstützt MOBIKE und EAP.</p>
        <pre class="ascii">Transportmodus: [IP-Header original][ESP][TCP | Daten][ESP-Trailer, ICV]
Tunnelmodus:    [neuer IP-Header][ESP][IP-Header original | TCP | Daten][ESP-Trailer, ICV]
                                        └──────── verschlüsselt ────────┘</pre>
        <ul>
          <li><strong>Transportmodus</strong>: Der Original-IP-Header bleibt sichtbar, geschützt werden nur die Nutzdaten → End-to-End.</li>
          <li><strong>Tunnelmodus</strong>: Das gesamte Originalpaket wird verschlüsselt und bekommt einen neuen IP-Header mit den Gateway-Adressen → Site-to-Site und Remote Access. Interne Adressen bleiben verborgen.</li>
        </ul>
        <h5>TLS-VPN und WireGuard</h5>
        <p>Ein <strong>SSL/TLS-VPN</strong> sichert den Tunnel mit TLS ab, bei vielen Produkten über TCP 443 (teils zusätzlich DTLS über UDP für bessere Leistung; OpenVPN nutzt standardmäßig UDP 1194). Port 443 ist firewallfreundlich, weil er fast überall offen ist. Es gibt Varianten ohne Client (Webportal, das nur einzelne Webanwendungen freigibt) und mit Client, der ganze IP-Netze tunnelt. Zugriffe lassen sich pro Anwendung oder Benutzergruppe freigeben.</p>
        <p><strong>WireGuard</strong> ist ein schlankes VPN-Protokoll über UDP (häufig Port 51820) mit festen, modernen Algorithmen: Curve25519, ChaCha20-Poly1305, BLAKE2s. Jeder Peer wird über seinen öffentlichen Schlüssel identifiziert. <code>AllowedIPs</code> legt fest, welche Netze durch den Tunnel gehen (Cryptokey Routing).</p>
        <pre><code>[Interface]
PrivateKey = &lt;privater Schlüssel des Notebooks&gt;
Address    = 10.99.0.12/32
DNS        = 10.10.0.53

[Peer]
PublicKey  = &lt;öffentlicher Schlüssel des Gateways&gt;
Endpoint   = vpn.nordlicht-it.de:51820
AllowedIPs = 10.10.0.0/16
PersistentKeepalive = 25</code></pre>
        <p>Hier wird nur das Firmennetz 10.10.0.0/16 getunnelt (<strong>Split Tunneling</strong>). Mit <code>AllowedIPs = 0.0.0.0/0</code> liefe der gesamte Verkehr durch den Tunnel (<strong>Full Tunnel</strong>): besser kontrollierbar, aber mehr Last auf der Firmenleitung.</p>
        <table><thead><tr><th></th><th>IPsec</th><th>TLS-VPN</th><th>WireGuard</th></tr></thead><tbody>
        <tr><td>Schicht</td><td>3</td><td>Schutz durch TLS oberhalb von TCP/UDP; getunnelt werden IP-Pakete oder einzelne Anwendungen</td><td>3 (IP-Pakete in UDP)</td></tr>
        <tr><td>Stärken</td><td>Standard, herstellerübergreifend, ideal Site-to-Site</td><td>läuft über 443 durch fast jede Firewall, feine App-Freigaben</td><td>sehr schnell, wenig Code, einfache Konfiguration, Roaming</td></tr>
        <tr><td>Schwächen</td><td>komplex, Parameter müssen exakt passen, NAT-Probleme ohne NAT-T</td><td>meist herstellerspezifische Clients, TCP-über-TCP kann bremsen</td><td>keine eingebaute Benutzeranmeldung oder MFA, feste Algorithmen</td></tr>
        </tbody></table>
        <h5>Verschlüsselung auf welcher Schicht?</h5>
        <table><thead><tr><th>Verfahren</th><th>OSI-Schicht</th><th>schützt</th><th>typischer Einsatz</th></tr></thead><tbody>
        <tr><td>MACsec (IEEE 802.1AE)</td><td>2</td><td>Ethernet-Frames auf <strong>einer Leitung</strong> (Hop-by-Hop), z. B. zwischen zwei Switches oder Client und Switch; in jedem Gerät wird ent- und neu verschlüsselt</td><td>Verbindungen zwischen Gebäuden oder Rechenzentren über angemietete Glasfaser, mit 802.1X kombinierbar</td></tr>
        <tr><td>IPsec</td><td>3</td><td>IP-Pakete zwischen Gateways oder Hosts, unabhängig von der Anwendung</td><td>Site-to-Site, Remote Access</td></tr>
        <tr><td>TLS</td><td>zwischen 4 und 7</td><td>eine einzelne Anwendungsverbindung (Ende zu Ende)</td><td>HTTPS, IMAPS, TLS-VPN</td></tr>
        </tbody></table>
        <p>MACsec arbeitet mit AES-GCM direkt in der Switch-Hardware und bremst deshalb kaum. Es schützt aber nur die Leitung: Auf dem Switch selbst liegen die Daten wieder im Klartext vor. Für Ende-zu-Ende-Schutz brauchst du zusätzlich TLS oder IPsec.</p>
        <div class="callout beispiel"><strong>Beispiel – MTU im Tunnel:</strong> WireGuard fügt bei IPv4 20 Byte IP-Header + 8 Byte UDP + 32 Byte WireGuard-Daten = 60 Byte hinzu, bei IPv6 40 + 8 + 32 = 80 Byte. Bei einer Leitungs-MTU von 1.500 Byte bleiben 1.500 − 80 = <strong>1.420 Byte</strong>. Das ist die Standard-MTU von WireGuard. Ist die MTU zu groß, werden Pakete fragmentiert oder verworfen: Ping geht, große Downloads hängen.</div>
        <h5>Typische Fehler beim Tunnelaufbau</h5>
        <ul>
          <li>Phase-1/2-Parameter passen nicht (Verschlüsselung, Hash, DH-Gruppe, Lebensdauer) oder der Pre-Shared Key ist falsch.</li>
          <li>Die lokalen und entfernten Netze (Traffic Selectors) sind vertauscht oder falsch eingetragen.</li>
          <li>Beide Standorte nutzen dasselbe Netz (z. B. 192.168.1.0/24) → umnummerieren oder NAT im Tunnel.</li>
          <li>Die Firewall blockiert UDP 500/4500 bzw. ESP. Das Zertifikat ist abgelaufen oder die Uhrzeit falsch.</li>
        </ul>
        <div class="callout merke"><strong>Merke:</strong> Standorte → Site-to-Site mit IPsec im Tunnelmodus. Homeoffice → Remote Access mit IPsec-Client, TLS-VPN oder WireGuard, immer mit MFA. ESP verschlüsselt, AH nicht.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Für Standorte und Homeoffice das passende VPN-Modell <em>auswählen</em> und <em>begründen</em>, Tunnel- und Transportmodus <em>unterscheiden</em>, ESP und AH <em>vergleichen</em>, IPsec, TLS-VPN und WireGuard <em>bewerten</em>, MACsec, IPsec und TLS einer OSI-Schicht <em>zuordnen</em>, Ursachen für einen fehlenden Tunnel <em>nennen</em>.</div>`
    },
    {
      id: "authentifizierung",
      title: "Authentifizierung und Zugriffskontrolle: MFA, 802.1X/RADIUS, Kerberos, SSO, Zero Trust",
      exam: ["AP2"],
      summary: "Wer darf wann ins Netz und an welche Daten? AAA, MFA-Verfahren, portbasierte Anmeldung mit 802.1X und RADIUS, Kerberos, SSO, IAM, NAC und das Zero-Trust-Prinzip.",
      html: `
        <p><strong>AAA</strong> steht für <strong>Authentifizierung</strong> (Wer bist du? Nachweis der Identität), <strong>Autorisierung</strong> (Was darfst du?) und <strong>Accounting</strong> (Was hast du wann getan? Protokollierung).</p>
        <h5>Faktoren und MFA</h5>
        <p>Faktoren: <strong>Wissen</strong> (Passwort, PIN), <strong>Besitz</strong> (Smartphone, Token, Smartcard), <strong>Sein/Inhärenz</strong> (Fingerabdruck, Gesicht). <strong>MFA</strong> verlangt mindestens zwei Faktoren aus <em>verschiedenen</em> Kategorien.</p>
        <table><thead><tr><th>Verfahren</th><th>Funktionsweise</th><th>Bewertung</th></tr></thead><tbody>
        <tr><td>SMS-Code</td><td>Einmalcode per SMS</td><td>schwach: SIM-Swapping, Phishing</td></tr>
        <tr><td>TOTP-App</td><td>zeitbasierter 6-stelliger Code, wechselt alle 30 s</td><td>gut, aber auf Phishing-Seiten eingebbar</td></tr>
        <tr><td>Push-Bestätigung</td><td>App fragt „Anmeldung erlauben?“</td><td>Gefahr MFA-Fatigue → Number Matching aktivieren</td></tr>
        <tr><td>Smartcard / Zertifikat</td><td>privater Schlüssel auf der Karte, PIN entsperrt</td><td>stark, braucht PKI</td></tr>
        <tr><td>FIDO2 / Passkey</td><td>Schlüsselpaar je Website, Anmeldung per Signatur, Schlüssel an die Domain gebunden</td><td><strong>phishing-resistent</strong>, Empfehlung für Admins</td></tr>
        </tbody></table>
        <h5>IEEE 802.1X mit RADIUS</h5>
        <p>802.1X steuert den Zugang <strong>pro Port</strong> (LAN) bzw. pro WLAN-Verbindung. Vor der Anmeldung lässt der Port nur EAP-Pakete (EAPoL) durch.</p>
        <pre class="ascii">Supplicant (Client) --EAPoL--&gt; Authenticator (Switch/AP) --RADIUS UDP 1812--&gt; Authentication Server (RADIUS) --&gt; AD/LDAP</pre>
        <ul>
          <li><strong>Supplicant</strong>: Software auf dem Endgerät. <strong>Authenticator</strong>: Switch oder Access Point, reicht die Anmeldung weiter. <strong>Authentication Server</strong>: RADIUS-Server (z. B. Microsoft NPS, FreeRADIUS) entscheidet.</li>
          <li>Nach Erfolg öffnet der Switch den Port. Der RADIUS-Server kann dabei ein <strong>VLAN dynamisch zuweisen</strong> (z. B. Buchhaltung → VLAN 20).</li>
          <li><strong>EAP-TLS</strong>: Zertifikat auf Client und Server → am sichersten. <strong>PEAP</strong>/<strong>EAP-TTLS</strong>: Server-Zertifikat, Benutzer meldet sich mit Passwort im TLS-Tunnel an.</li>
          <li>Geräte ohne Supplicant (Drucker, Kameras): <strong>MAB</strong> (MAC Authentication Bypass) als Ausnahme, in ein eigenes, eingeschränktes VLAN.</li>
        </ul>
        <table><thead><tr><th></th><th>RADIUS</th><th>TACACS+</th></tr></thead><tbody>
        <tr><td>Transport</td><td>UDP 1812 (Auth), 1813 (Accounting)</td><td>TCP 49</td></tr>
        <tr><td>Verschlüsselung</td><td>nur das Passwortattribut</td><td>gesamter Inhalt</td></tr>
        <tr><td>Einsatz</td><td>Netzzugang: WLAN, 802.1X, VPN</td><td>Admin-Zugriff auf Netzgeräte, Autorisierung einzelner Befehle</td></tr>
        </tbody></table>
        <h5>Kerberos und Single Sign-On</h5>
        <p><strong>Kerberos</strong> (TCP/UDP 88) ist das Anmeldeverfahren im Active Directory. Der <strong>KDC</strong> auf dem Domänencontroller besteht aus Authentication Service und Ticket Granting Service.</p>
        <ol><li>Anmeldung → der Client erhält ein <strong>Ticket Granting Ticket (TGT)</strong>.</li><li>Mit dem TGT fordert er für jeden Dienst ein <strong>Service-Ticket</strong> an.</li><li>Das Service-Ticket legt er dem Dateiserver vor – ohne erneute Passworteingabe (SSO).</li></ol>
        <p>Die Uhren dürfen höchstens <strong>5 Minuten</strong> abweichen, sonst scheitert die Anmeldung (NTP!). Passwörter werden nie übers Netz gesendet.</p>
        <p><strong>SSO im Web</strong>: <strong>SAML 2.0</strong> (XML, Identity Provider bestätigt dem Service Provider die Anmeldung) und <strong>OpenID Connect</strong> (auf OAuth 2.0 aufgebaut, Token im JSON-Format). OAuth 2.0 allein regelt nur die <em>Autorisierung</em> (Zugriff im Auftrag), nicht die Anmeldung. Vorteil von SSO: ein starkes Konto mit MFA statt vieler Passwörter. Nachteil: Das Identitätssystem wird zum lohnenden Ziel.</p>
        <h5>IAM, NAC und Zero Trust</h5>
        <ul>
          <li><strong>Identity &amp; Access Management</strong>: Lebenszyklus Joiner – Mover – Leaver (Konto anlegen, Rechte bei Wechsel anpassen, beim Austritt sofort sperren), rollenbasierte Rechte (RBAC), regelmäßige <strong>Rezertifizierung</strong>, Least Privilege und Need-to-know.</li>
          <li><strong>Privilegierte Konten</strong>: getrennte Admin-Konten ohne Mail und Internet, Rechte nur bei Bedarf (Just-in-Time), Sitzungen protokollieren (PAM).</li>
          <li><strong>NAC</strong> (Network Access Control): prüft vor dem Netzzugang Identität <em>und</em> Zustand des Geräts (Patchstand, Virenschutz, Verschlüsselung). Nicht konforme Geräte kommen ins Quarantäne-VLAN.</li>
          <li><strong>Zero Trust</strong>: „Never trust, always verify.“ Kein Vertrauen allein aufgrund des Netzstandorts, jeder Zugriff wird anhand von Identität, Gerät und Kontext geprüft, minimale Rechte, Mikrosegmentierung, „Assume Breach“. <strong>ZTNA</strong> gibt statt eines ganzen Netzes nur einzelne Anwendungen frei und ersetzt so zunehmend das klassische VPN.</li>
        </ul>
        <div class="callout achtung"><strong>Achtung:</strong> Passwort + Sicherheitsfrage ist <strong>keine</strong> MFA (beides Wissen). Ebenso: Authentifizierung ≠ Autorisierung. Ein erfolgreich angemeldeter Benutzer darf noch lange nicht alles.</div>
        <div class="callout merke"><strong>Merke:</strong> 802.1X = Supplicant → Authenticator → RADIUS. Kerberos = TGT → Service-Ticket, Zeit synchron halten. Zero Trust = jeden Zugriff prüfen, nie dem Netz vertrauen.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Die drei Rollen bei 802.1X <em>nennen</em> und den Ablauf <em>beschreiben</em>, MFA-Verfahren <em>bewerten</em>, EAP-TLS und PEAP <em>vergleichen</em>, den Kerberos-Ablauf <em>erläutern</em>, Zero Trust vom Perimeter-Modell <em>abgrenzen</em>.</div>`
    },
    {
      id: "wlan-email",
      title: "WLAN-Sicherheit und E-Mail-Sicherheit",
      exam: ["AP2"],
      summary: "WEP bis WPA3, Personal vs. Enterprise, Gäste-WLAN, typische WLAN- und Bluetooth-Angriffe sowie E-Mail-Schutz mit TLS, S/MIME, PGP und den DNS-Einträgen SPF, DKIM und DMARC.",
      html: `
        <h5>WLAN-Verschlüsselung im Überblick</h5>
        <table><thead><tr><th>Standard</th><th>Technik</th><th>Bewertung</th></tr></thead><tbody>
        <tr><td>WEP</td><td>RC4, statischer Schlüssel</td><td>in Minuten gebrochen – nicht verwenden</td></tr>
        <tr><td>WPA</td><td>TKIP</td><td>veraltet – nicht verwenden</td></tr>
        <tr><td>WPA2</td><td>AES-CCMP, 4-Wege-Handshake</td><td>noch verbreitet; bei Personal kann ein mitgeschnittener Handshake offline per Wörterbuch angegriffen werden</td></tr>
        <tr><td>WPA3</td><td>Personal mit <strong>SAE</strong>, <strong>PMF</strong> Pflicht, Enterprise optional mit 192-Bit-Modus</td><td>aktueller Standard; Pflicht im 6-GHz-Band (Wi-Fi 6E/7)</td></tr>
        </tbody></table>
        <ul>
          <li><strong>SAE</strong> (Simultaneous Authentication of Equals) verhindert Offline-Wörterbuchangriffe und bietet Forward Secrecy.</li>
          <li><strong>PMF</strong> (Protected Management Frames, 802.11w) schützt Verwaltungsrahmen und verhindert gefälschte Deauthentication-Angriffe.</li>
          <li><strong>OWE</strong> (Enhanced Open) verschlüsselt offene Hotspots ohne Passwort.</li>
          <li>Der <strong>WPA2/WPA3-Übergangsmodus</strong> erlaubt alte Clients, ermöglicht aber Downgrade-Angriffe. Nur übergangsweise nutzen.</li>
        </ul>
        <table><thead><tr><th></th><th>Personal (PSK/SAE)</th><th>Enterprise (802.1X)</th></tr></thead><tbody>
        <tr><td>Anmeldung</td><td>ein gemeinsames Passwort für alle</td><td>persönlich per Benutzerkonto oder Zertifikat über RADIUS</td></tr>
        <tr><td>Schlüssel</td><td>aus dem gemeinsamen Passwort abgeleitet</td><td>individueller Sitzungsschlüssel je Benutzer</td></tr>
        <tr><td>Mitarbeiter verlässt Firma</td><td>Passwort auf allen Geräten ändern</td><td>nur sein Konto sperren</td></tr>
        <tr><td>Einsatz</td><td>Privathaushalt, sehr kleine Büros</td><td>Unternehmen, Behörden, Schulen</td></tr>
        </tbody></table>
        <h5>WLAN-Angriffe und Schutz</h5>
        <ul>
          <li><strong>Evil Twin / Rogue AP</strong>: gefälschter oder nicht genehmigter Access Point mit bekannter SSID → WLAN-Controller mit WIDS/WIPS, bei Enterprise prüft der Client das Serverzertifikat.</li>
          <li><strong>WPS-PIN</strong> lässt sich per Brute Force knacken → WPS abschalten.</li>
          <li><strong>Gäste-WLAN</strong>: eigene SSID in eigenem VLAN, <strong>Client Isolation</strong>, nur Internet, Captive Portal mit Nutzungsbedingungen, Bandbreitenlimit.</li>
          <li>Versteckte SSID und MAC-Filter bieten keinen Schutz.</li>
        </ul>
        <h5>Bluetooth absichern</h5>
        <p>Bluetooth verbindet Headsets, Tastaturen, Smartphones und IoT-Geräte im 2,4-GHz-Band (Personal Area Network). Die Reichweite hängt von der Leistungsklasse ab: Klasse 1 (100 mW) etwa 100 m, Klasse 2 (2,5 mW) etwa 10 m, Klasse 3 (1 mW) etwa 1 m. Mit Richtantennen kommen Angreifer deutlich weiter.</p>
        <table><thead><tr><th>Angriff</th><th>Kurz erklärt</th></tr></thead><tbody>
        <tr><td>Bluejacking</td><td>unerwünschte Nachrichten oder Kopplungsanfragen an sichtbare Geräte, oft als Vorstufe für Social Engineering</td></tr>
        <tr><td>Bluesnarfing</td><td>unbemerktes Auslesen von Daten (Kontakte, Kalender, Dateien) über eine Schwachstelle</td></tr>
        <tr><td>Bluebugging</td><td>Übernahme von Gerätefunktionen, z. B. Anrufe starten oder Nachrichten senden</td></tr>
        <tr><td>Angriffe auf das Pairing</td><td>Mitlesen oder Manipulieren des Kopplungsvorgangs (MITM), Erzwingen schwacher Schlüssel bei alten Implementierungen</td></tr>
        </tbody></table>
        <p>Schutz: Bluetooth abschalten, wenn es nicht gebraucht wird, Geräte nicht dauerhaft sichtbar lassen, nur in sicherer Umgebung koppeln und den angezeigten Zahlencode vergleichen (<strong>Secure Simple Pairing</strong> bzw. <strong>LE Secure Connections</strong>), unbekannte Kopplungsanfragen ablehnen, Firmware und Betriebssystem aktuell halten, alte Kopplungen löschen und Bluetooth-Regeln zentral per <strong>MDM</strong> vorgeben (z. B. Dateiübertragung sperren).</p>
        <h5>E-Mail: Transport vs. Ende-zu-Ende</h5>
        <p><strong>Transportverschlüsselung</strong> (TLS: STARTTLS auf Port 25/587, implizites TLS auf 465, 993, 995) schützt jede Teilstrecke. Auf den Servern liegt die Mail aber im Klartext. <strong>MTA-STS</strong> oder <strong>DANE</strong> erzwingen TLS zwischen Mailservern. <strong>Ende-zu-Ende-Verschlüsselung</strong> schützt den Inhalt vom Absender bis zum Empfänger:</p>
        <table><thead><tr><th></th><th>S/MIME</th><th>OpenPGP</th></tr></thead><tbody>
        <tr><td>Schlüssel</td><td>X.509-Zertifikat einer CA</td><td>selbst erzeugte Schlüssel</td></tr>
        <tr><td>Vertrauen</td><td>hierarchisch (PKI)</td><td>Web of Trust, Fingerprint-Abgleich</td></tr>
        <tr><td>Einsatz</td><td>Unternehmen, in Outlook/Apple Mail integriert</td><td>Privatnutzer, Entwickler, Thunderbird</td></tr>
        </tbody></table>
        <p>In beiden Fällen gilt: Verschlüsseln mit dem öffentlichen Schlüssel des Empfängers, signieren mit dem eigenen privaten Schlüssel.</p>
        <h5>Absender fälschen verhindern: SPF, DKIM, DMARC</h5>
        <ul>
          <li><strong>SPF</strong>: TXT-Eintrag mit den Servern, die für die Domain senden dürfen. Geprüft wird der Absender im SMTP-Umschlag (MAIL FROM). <code>-all</code> = alle anderen ablehnen, <code>~all</code> = nur markieren.</li>
          <li><strong>DKIM</strong>: Der sendende Server signiert Header und Inhalt. Der öffentliche Schlüssel steht im DNS unter <code>selector._domainkey.domain</code>. So wird Manipulation erkennbar.</li>
          <li><strong>DMARC</strong>: legt fest, was bei Fehlschlag passiert (<code>p=none</code>, <code>quarantine</code>, <code>reject</code>) und verlangt, dass SPF- oder DKIM-Domain zur sichtbaren From-Adresse passt (Alignment). Berichte gehen an die Adresse unter <code>rua</code>.</li>
        </ul>
        <pre><code>nordlicht-it.de.                  TXT "v=spf1 mx ip4:203.0.113.25 -all"
mail2026._domainkey.nordlicht-it.de. TXT "v=DKIM1; k=rsa; p=MIIBIjANBgkq..."
_dmarc.nordlicht-it.de.           TXT "v=DMARC1; p=quarantine; rua=mailto:dmarc@nordlicht-it.de"</code></pre>
        <p>Zusätzlich braucht der sendende Mailserver einen passenden <strong>PTR-Eintrag</strong> (Reverse DNS: 203.0.113.25 → mail.nordlicht-it.de), den meist der Provider einträgt. Fehlt er oder passt er nicht zum Namen im HELO, lehnen viele Empfänger die Mails ab oder stufen sie als Spam ein.</p>
        <p>Ergänzend filtert ein <strong>Mail-Gateway</strong> Spam und Schadcode: Virenscanner und Sandbox für Anhänge, Reputationslisten (DNSBL) und <strong>Greylisting</strong> (unbekannte Absender werden zunächst vorübergehend abgewiesen; echte Mailserver stellen später erneut zu, viele Spam-Programme nicht).</p>
        <div class="callout tipp"><strong>Tipp:</strong> DMARC schrittweise einführen: erst <code>p=none</code> mit Berichten, dann alle legitimen Absender (Newsletter-Dienst, Ticketsystem) in SPF/DKIM aufnehmen, dann <code>quarantine</code> und schließlich <code>reject</code>.</div>
        <div class="callout achtung"><strong>Achtung:</strong> SPF, DKIM und DMARC <strong>verschlüsseln nichts</strong>. Sie schützen vor gefälschten Absendern (Authentizität der Domain). Für Vertraulichkeit brauchst du TLS bzw. S/MIME oder PGP.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> WPA2 und WPA3 <em>vergleichen</em>, Personal und Enterprise für ein Szenario <em>auswählen</em>, ein Gäste-WLAN <em>planen</em>, Risiken von Bluetooth <em>beschreiben</em> und Schutzmaßnahmen <em>nennen</em>, Transport- und Ende-zu-Ende-Verschlüsselung <em>unterscheiden</em>, SPF, DKIM und DMARC <em>erklären</em> und passende DNS-Einträge <em>angeben</em>.</div>`
    },
    {
      id: "hochverfuegbarkeit",
      title: "Hochverfügbarkeit: Redundanz, Cluster, Load Balancing und Verfügbarkeit berechnen",
      exam: ["AP2"],
      summary: "Single Points of Failure beseitigen, Cluster und Load Balancer einsetzen und Verfügbarkeit von Serien- und Parallelschaltungen sowie zulässige Ausfallzeiten berechnen.",
      html: `
        <p><strong>Verfügbarkeit</strong> ist der Anteil der Zeit, in der ein System seine Aufgabe erfüllt. <strong>Hochverfügbarkeit</strong> erreichst du durch <strong>Redundanz</strong>: Jede Komponente, deren Ausfall das Gesamtsystem stoppt (<strong>Single Point of Failure, SPOF</strong>), wird doppelt oder mehrfach ausgelegt.</p>
        <h5>Redundanz auf allen Ebenen</h5>
        <table><thead><tr><th>Ebene</th><th>Maßnahmen</th></tr></thead><tbody>
        <tr><td>Strom</td><td>redundante Netzteile an getrennten Stromkreisen (A/B-Einspeisung), USV, Netzersatzanlage</td></tr>
        <tr><td>Netz</td><td>zwei Provider, Link Aggregation (LACP), redundante Core-Switches, FHRP (VRRP/HSRP) für das Gateway, Spanning Tree</td></tr>
        <tr><td>Server und Speicher</td><td>Cluster, Virtualisierung mit HA und Live-Migration, RAID, replizierter Speicher</td></tr>
        <tr><td>Standort</td><td>zweites Rechenzentrum oder Cloud-Region (Georedundanz)</td></tr>
        </tbody></table>
        <h5>Cluster und Load Balancing</h5>
        <ul>
          <li><strong>Aktiv/Passiv</strong> (Failover-Cluster): Ein Knoten arbeitet, der zweite wartet. Über den <strong>Heartbeat</strong> erkennt er einen Ausfall und übernimmt IP, Dienst und Daten. Einfach, aber der Standby-Knoten liegt brach.</li>
          <li><strong>Aktiv/Aktiv</strong>: Alle Knoten arbeiten und teilen sich die Last. Fällt einer aus, müssen die übrigen die gesamte Last tragen → nach <strong>N+1</strong> dimensionieren.</li>
          <li><strong>Split Brain</strong>: Beide Knoten halten sich für aktiv, wenn nur der Heartbeat ausfällt → <strong>Quorum</strong> bzw. Zeugen-Instanz (Witness) und redundante Heartbeat-Leitungen.</li>
          <li><strong>Load Balancer</strong> verteilt Anfragen auf mehrere Server: <strong>Round Robin</strong> (der Reihe nach), <strong>Weighted Round Robin</strong> (nach Leistung), <strong>Least Connections</strong> (an den Server mit den wenigsten aktiven Verbindungen), <strong>IP-Hash</strong> (Client bleibt beim selben Server, Session-Persistenz). <strong>Health Checks</strong> nehmen defekte Server automatisch aus dem Pool. Der Load Balancer selbst muss redundant sein.</li>
          <li><strong>Horizontale Skalierung</strong> (mehr Server) erhöht Leistung <em>und</em> Verfügbarkeit, <strong>vertikale</strong> (stärkerer Server) nur die Leistung.</li>
        </ul>
        <h5>Verfügbarkeit berechnen</h5>
        <div class="callout formel"><strong>Formeln:</strong><br>Verfügbarkeit A = MTBF ÷ (MTBF + MTTR)<br>Serienschaltung (alle nötig): A(gesamt) = A₁ × A₂ × … × Aₙ<br>Parallelschaltung (einer genügt): A(gesamt) = 1 − (1 − A₁) × (1 − A₂) × … × (1 − Aₙ)<br>Ausfallzeit pro Jahr = (1 − A) × 8.760 h</div>
        <table><thead><tr><th>Verfügbarkeit</th><th>Ausfallzeit pro Jahr</th><th>pro Monat (30 Tage)</th></tr></thead><tbody>
        <tr><td>99 %</td><td>87,6 h</td><td>7,2 h</td></tr>
        <tr><td>99,5 %</td><td>43,8 h</td><td>3,6 h</td></tr>
        <tr><td>99,9 %</td><td>8,76 h</td><td>43,2 min</td></tr>
        <tr><td>99,95 %</td><td>4,38 h</td><td>21,6 min</td></tr>
        <tr><td>99,99 %</td><td>52,56 min</td><td>4,32 min</td></tr>
        <tr><td>99,999 %</td><td>5,26 min</td><td>0,43 min ≈ 26 s</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel 1 – MTBF/MTTR:</strong> Ein Switch hat eine MTBF von 50.000 h, die Reparatur dauert im Mittel 8 h. A = 50.000 ÷ 50.008 ≈ 0,99984 = <strong>99,984 %</strong> → (1 − 0,99984) × 8.760 h ≈ 1,4 h Ausfall pro Jahr.<br><br><strong>Beispiel 2 – Serie:</strong> Router 99,9 %, Firewall 99,95 %, Core-Switch 99,99 % hintereinander: 0,999 × 0,9995 × 0,9999 ≈ 0,99840 = <strong>99,84 %</strong> → (1 − 0,9984) × 8.760 h ≈ <strong>14 h</strong> pro Jahr. Die Serie ist immer schlechter als ihr schwächstes Glied.<br><br><strong>Beispiel 3 – Parallel:</strong> Zwei unabhängige Internetanschlüsse mit 99 % und 99,5 %: 1 − 0,01 × 0,005 = 0,99995 = <strong>99,995 %</strong> → nur noch ≈ 26 min Ausfall pro Jahr statt 87,6 h (nur der 99-%-Anschluss) bzw. 43,8 h (nur der 99,5-%-Anschluss).</div>
        <div class="callout achtung"><strong>Achtung:</strong> Die Parallelformel gilt nur für <strong>unabhängige</strong> Komponenten. Zwei Leitungen im selben Kabelschacht oder zwei Firewalls am selben Stromkreis fallen gemeinsam aus. Prozentwerte vor dem Rechnen in Dezimalzahlen umwandeln (99,9 % = 0,999), erst am Ende zurück.</div>
        <p>SLA-Verfügbarkeiten beziehen sich oft nur auf die vereinbarte <strong>Servicezeit</strong>, geplante Wartungsfenster zählen meist nicht als Ausfall. Lies deshalb immer, worauf sich die Prozentzahl bezieht.</p>
        <div class="callout merke"><strong>Merke:</strong> Serie → multiplizieren (wird schlechter). Parallel → Ausfallwahrscheinlichkeiten multiplizieren und von 1 abziehen (wird besser). 99,9 % ≈ 8,76 h, 99,99 % ≈ 52,6 min pro Jahr.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Die Gesamtverfügbarkeit einer Kette mit redundanten Teilen <em>berechnen</em>, die Ausfallzeit pro Jahr <em>bestimmen</em>, SPOFs im Netzplan <em>identifizieren</em>, Aktiv/Passiv und Aktiv/Aktiv <em>vergleichen</em>, Verfahren eines Load Balancers <em>erläutern</em>.</div>`
    },
    {
      id: "schwachstellen-haertung",
      title: "Schwachstellen- und Patchmanagement, Härtung und Penetrationstest",
      exam: ["AP2"],
      summary: "Schwachstellen mit CVE und CVSS bewerten und priorisieren, Patches geordnet ausrollen, Systeme härten und die Sicherheit mit Scannern und Penetrationstests prüfen.",
      html: `
        <p>Jede Software hat Fehler. <strong>Schwachstellenmanagement</strong> sorgt dafür, dass bekannte Lücken schnell gefunden, bewertet und geschlossen werden: Inventar → Informationen sammeln → scannen → bewerten und priorisieren → beheben → Erfolg prüfen → dokumentieren.</p>
        <h5>CVE und CVSS</h5>
        <ul>
          <li><strong>CVE</strong> (Common Vulnerabilities and Exposures): eindeutige Kennung einer öffentlich bekannten Schwachstelle im Format CVE-Jahr-Nummer, z. B. <strong>CVE-2021-44228</strong> (Log4Shell). Quellen: Herstellerhinweise, BSI/CERT-Bund, EU-Schwachstellendatenbank (EUVD).</li>
          <li><strong>CVSS</strong> (Common Vulnerability Scoring System, aktuell Version 4.0, verbreitet auch 3.1): Schweregrad von 0,0 bis 10,0. Der Basiswert bewertet Angriffsweg (Netzwerk, benachbart, lokal, physisch), Komplexität, nötige Rechte, Benutzerinteraktion und Auswirkung auf Vertraulichkeit, Integrität und Verfügbarkeit.</li>
        </ul>
        <table><thead><tr><th>CVSS-Wert</th><th>0,1–3,9</th><th>4,0–6,9</th><th>7,0–8,9</th><th>9,0–10,0</th></tr></thead><tbody>
        <tr><td>Einstufung</td><td>Low (niedrig)</td><td>Medium (mittel)</td><td>High (hoch)</td><td>Critical (kritisch)</td></tr>
        </tbody></table>
        <p>Der CVSS-Basiswert allein reicht zum Priorisieren nicht. Berücksichtige auch: Ist das System aus dem Internet erreichbar? Wird die Lücke bereits aktiv ausgenutzt (z. B. CISA-KEV-Liste, EPSS-Wahrscheinlichkeit)? Wie kritisch ist das System für das Geschäft? Gibt es eine Gegenmaßnahme (Workaround, Dienst abschalten, IPS-Signatur)?</p>
        <div class="callout beispiel"><strong>Beispiel – Priorisierung:</strong> (1) VPN-Gateway, CVSS 9,8, aus dem Internet erreichbar, Exploit im Umlauf → <strong>sofort</strong> patchen, notfalls Dienst abschalten. (2) Interner Webserver, CVSS 8,1, nur aus dem LAN erreichbar → im nächsten Wartungsfenster. (3) Druckertreiber, CVSS 5,5, lokaler Angriff nötig → regulärer Patchzyklus.</div>
        <h5>Patchmanagement-Prozess</h5>
        <ol>
          <li><strong>Inventarisieren</strong>: Welche Systeme, Versionen und Firmwarestände gibt es?</li>
          <li><strong>Informieren und bewerten</strong>: Herstellerhinweise, Microsoft-Patchday (zweiter Dienstag im Monat), Kritikalität bestimmen.</li>
          <li><strong>Testen</strong> in einer Testumgebung oder Pilotgruppe, Rückfallplan (Snapshot, Backup) vorbereiten.</li>
          <li><strong>Freigeben</strong> über das Change Management und im <strong>Wartungsfenster</strong> in Wellen ausrollen (Pilot → Abteilungen → Server).</li>
          <li><strong>Kontrollieren</strong> mit Compliance-Berichten (Welche Geräte fehlen noch?) und <strong>dokumentieren</strong>.</li>
        </ol>
        <p>Werkzeuge: Intune/Windows Autopatch, MECM oder WSUS unter Windows, <code>apt</code> bzw. <code>unattended-upgrades</code> unter Linux. Firmware von Switches, Firewalls, Access Points und BIOS/UEFI nicht vergessen. Für kritische Lücken gibt es einen verkürzten <strong>Notfallpatch-Prozess</strong> (Emergency Change).</p>
        <h5>Systemhärtung</h5>
        <ul>
          <li><strong>Angriffsfläche verkleinern</strong>: nicht benötigte Dienste, Programme, Ports, Protokolle und Konten entfernen (SMBv1, Telnet, TLS 1.0/1.1, LLMNR).</li>
          <li><strong>Standardpasswörter</strong> ändern, lokale Admin-Passwörter je Gerät verschieden verwalten (Windows LAPS), getrennte Admin-Konten, Least Privilege.</li>
          <li>Secure Boot, TPM, Festplattenverschlüsselung (BitLocker, LUKS), Application Allowlisting (AppLocker, WDAC), Makros aus dem Internet blockieren, Host-Firewall, EDR, zentrale Logs.</li>
          <li>Netzgeräte: SSH statt Telnet, SNMPv3 statt v2c, Management nur aus dem Management-VLAN, ungenutzte Ports abschalten.</li>
          <li>Mobile Geräte über <strong>MDM</strong> verwalten (Richtlinien, Verschlüsselung, Fernlöschung, App-Kontrolle, Container für BYOD) – ausführlich im Lernzettel „Endgeräte und Mobilgeräte absichern“.</li>
          <li>Vorlagen: <strong>CIS Benchmarks</strong>, Microsoft Security Baselines, BSI-Empfehlungen (SiSyPHuS, IT-Grundschutz-Bausteine).</li>
        </ul>
        <pre><code># /etc/ssh/sshd_config (Auszug)
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
AllowGroups ssh-admins
MaxAuthTries 3</code></pre>
        <h5>Sicherheit prüfen: Scanner, Pentest, Audit</h5>
        <table><thead><tr><th>Werkzeug</th><th>Zweck</th></tr></thead><tbody>
        <tr><td>Nmap</td><td>Portscanner: offene Ports, Dienste und Versionen finden (<code>nmap -sS -sV 192.168.10.0/24</code>)</td></tr>
        <tr><td>Greenbone/OpenVAS, Nessus</td><td>Schwachstellenscanner: vergleicht gefundene Versionen mit CVE-Datenbanken, besser mit Anmeldedaten (authentifizierter Scan)</td></tr>
        <tr><td>Device Security Check</td><td>prüft Endgeräte auf Patchstand, Verschlüsselung, Virenschutz, Konfiguration</td></tr>
        <tr><td>Penetrationstest</td><td>Fachleute greifen kontrolliert an und zeigen, was tatsächlich ausnutzbar ist</td></tr>
        </tbody></table>
        <p>Ein <strong>Penetrationstest</strong> läuft nach dem BSI-Modell in fünf Phasen ab: Vorbereitung (Auftrag, Ziele, Umfang) → Informationsbeschaffung → Bewertung der Informationen → aktive Eindringversuche → Abschlussanalyse mit Bericht. Nach dem Vorwissen der Tester unterscheidet man <strong>Black Box</strong> (kein Wissen, wie ein externer Angreifer), <strong>Grey Box</strong> (Teilwissen) und <strong>White Box</strong> (volle Informationen, gründlichste Prüfung). Ein <strong>Audit</strong> prüft dagegen die Einhaltung von Vorgaben (z. B. ISO 27001, IT-Grundschutz-Check).</p>
        <div class="callout achtung"><strong>Achtung:</strong> Scans und Pentests nur mit <strong>schriftlicher Genehmigung</strong> des Systemverantwortlichen, festgelegtem Umfang und Zeitfenster. Ohne Auftrag drohen Strafen (§§ 202a–202c, 303a/b StGB). Auch im eigenen Firmennetz brauchst du die Freigabe.</div>
        <div class="callout merke"><strong>Merke:</strong> CVE = Name der Lücke, CVSS = Schweregrad. Priorisiere nach Schweregrad, Erreichbarkeit, aktiver Ausnutzung und Kritikalität des Systems. Scanner finden bekannte Lücken, ein Pentest zeigt, was wirklich ausnutzbar ist.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Schwachstellen nach CVSS und Kontext <em>priorisieren</em>, einen Patchmanagement-Prozess <em>beschreiben</em>, Härtungsmaßnahmen für Server oder Switch <em>nennen</em> und <em>begründen</em>, Black-, Grey- und White-Box-Test <em>unterscheiden</em>, Voraussetzungen eines Pentests <em>nennen</em>.</div>`
    },
    {
      id: "endgeraete-mdm",
      title: "Endgeräte und Mobilgeräte absichern: MDM, BYOD, EDR und DLP",
      exam: ["AP2"],
      summary: "Smartphones, Tablets und Notebooks zentral verwalten: MDM-Funktionen, Container und selektive Löschung, Betriebsmodelle von COBO bis BYOD, EDR, Data Loss Prevention, IT-Nutzungsrichtlinie und Lizenzkosten.",
      html: `
        <p>Notebooks, Smartphones und Tablets arbeiten im Homeoffice, beim Kunden oder im Hotel-WLAN – also außerhalb von Firewall und IDS. Ihre Sicherheit muss deshalb <strong>auf dem Gerät selbst</strong> sitzen und <strong>zentral verwaltet</strong> werden. Außerdem gehen mobile Geräte leicht verloren.</p>
        <h5>Mobile Device Management (MDM)</h5>
        <p>Ein <strong>MDM</strong> verwaltet mobile Geräte zentral über Richtlinien. Moderne Lösungen verwalten auch Notebooks und heißen dann <strong>Unified Endpoint Management (UEM)</strong>, z. B. Microsoft Intune, Jamf oder Ivanti.</p>
        <table><thead><tr><th>Funktion</th><th>Beispiele</th></tr></thead><tbody>
        <tr><td>Registrierung (Enrollment)</td><td>Geräte werden bei der Ersteinrichtung automatisch in die Verwaltung aufgenommen (Zero-Touch, z. B. Windows Autopilot, Apple Business Manager, Android Zero-Touch)</td></tr>
        <tr><td>Richtlinien</td><td>Geräte-PIN, Bildschirmsperre, Verschlüsselung, Mindestversion des Betriebssystems, Kamera, Bluetooth oder USB einschränken</td></tr>
        <tr><td>Konfiguration</td><td>WLAN-Profil mit Zertifikat (802.1X), VPN und E-Mail-Konto automatisch einrichten</td></tr>
        <tr><td>App-Verwaltung</td><td>Firmen-Apps verteilen und aktualisieren, unerwünschte Apps sperren (Allow- und Blocklist)</td></tr>
        <tr><td>Updates</td><td>Betriebssystem- und App-Updates erzwingen und zeitlich steuern</td></tr>
        <tr><td>Compliance</td><td>erkennt Jailbreak bzw. Root, veraltete Versionen und fehlende Verschlüsselung; <strong>Conditional Access</strong> sperrt dann den Zugriff auf Mail und Firmendaten</td></tr>
        <tr><td>Verlust und Diebstahl</td><td>Fernsperre, Fernlöschung (Remote Wipe), ggf. Ortung</td></tr>
        <tr><td>Inventar und Berichte</td><td>Übersicht über Geräte, Besitzer, Versionen, Compliance-Status</td></tr>
        </tbody></table>
        <h5>Container: Full Wipe und Selective Wipe</h5>
        <p>Auf Geräten, die auch privat genutzt werden, trennt ein <strong>Container</strong> die Firmendaten von den privaten Daten, z. B. das <strong>Arbeitsprofil</strong> unter Android oder verwaltete Apps mit Benutzerregistrierung unter iOS. Firmen-Apps speichern nur im Container, das Kopieren von Firmendaten in private Apps lässt sich sperren.</p>
        <div class="grid-2">
        <div><p><strong>Full Wipe</strong>: setzt das ganze Gerät auf Werkseinstellungen zurück. Alle Daten sind weg – auch private. Nur bei <strong>Firmengeräten</strong> angemessen.</p></div>
        <div><p><strong>Selective Wipe</strong> (Enterprise Wipe): löscht nur den Container mit Firmendaten und Firmen-Apps. Private Fotos und Apps bleiben. Das Mittel der Wahl bei <strong>BYOD</strong>.</p></div>
        </div>
        <h5>Betriebsmodelle für Mobilgeräte</h5>
        <table><thead><tr><th>Modell</th><th>Eigentum</th><th>private Nutzung</th><th>Kontrolle der Firma</th></tr></thead><tbody>
        <tr><td>COBO (Corporate Owned, Business Only)</td><td>Firma</td><td>nicht erlaubt</td><td>vollständig</td></tr>
        <tr><td>COPE (Corporate Owned, Personally Enabled)</td><td>Firma</td><td>erlaubt, getrennter Bereich</td><td>hoch</td></tr>
        <tr><td>CYOD (Choose Your Own Device)</td><td>Firma; Beschäftigte wählen aus einer Geräteliste</td><td>nach Regelung</td><td>hoch</td></tr>
        <tr><td>BYOD (Bring Your Own Device)</td><td>Beschäftigte</td><td>ja, es ist ihr Gerät</td><td>nur im Container</td></tr>
        </tbody></table>
        <p><strong>BYOD</strong> spart Anschaffungskosten, und die Beschäftigten tragen nur ein Gerät. Dagegen stehen: viele verschiedene, teils veraltete Geräte, der Schutz der privaten Daten (die Firma darf nicht hineinsehen), nur selektive Löschung, Haftungsfragen bei Verlust oder Schaden, Lizenzfragen und die Rückgabe der Firmendaten beim Austritt. BYOD braucht deshalb eine <strong>schriftliche Vereinbarung</strong>, Mindestanforderungen an die Geräte und ein MDM mit Container. Bei hohem Schutzbedarf ist <strong>COPE</strong> meist die bessere Wahl.</p>
        <h5>Rechtliche Rahmenbedingungen</h5>
        <ul>
          <li>Ein MDM kann Standort, installierte Apps und Nutzungszeiten erfassen. Damit ist es geeignet, Verhalten oder Leistung zu überwachen → Mitbestimmung nach <strong>§ 87 Abs. 1 Nr. 6 BetrVG</strong>, Regelung in einer <strong>Betriebsvereinbarung</strong> (z. B. Ortung nur bei gemeldetem Verlust).</li>
          <li>DSGVO: nur nötige Daten erheben (Datenminimierung), bei BYOD keine Einsicht in private Inhalte, AV-Vertrag nach Art. 28 mit dem Anbieter eines Cloud-MDM, Eintrag im Verarbeitungsverzeichnis.</li>
        </ul>
        <h5>EDR statt nur Virenschutz</h5>
        <p>Ein klassischer Virenscanner vergleicht Dateien mit <strong>Signaturen</strong> bekannter Schadsoftware. <strong>EDR</strong> (Endpoint Detection and Response) zeichnet zusätzlich Prozesse, Netzverbindungen und Dateiänderungen auf und erkennt <strong>verdächtiges Verhalten</strong>, z. B. wenn ein Office-Dokument PowerShell startet oder ein Prozess in Minuten Tausende Dateien umbenennt (typisch für Ransomware). EDR kann Prozesse beenden, ein Gerät vom Netz isolieren und liefert Daten für die Forensik. Wird die Überwachung rund um die Uhr an einen Dienstleister vergeben, spricht man von <strong>MDR</strong> (Managed Detection and Response).</p>
        <h5>Data Loss Prevention (DLP)</h5>
        <p><strong>DLP</strong> verhindert, dass vertrauliche Daten unerlaubt das Unternehmen verlassen. Grundlage ist eine <strong>Datenklassifizierung</strong> (öffentlich, intern, vertraulich, streng vertraulich). Regeln erkennen sensible Inhalte, z. B. IBAN-Nummern, Gesundheitsdaten oder eine Vertraulichkeitskennzeichnung, beim Versand per Mail, beim Kopieren auf USB-Sticks, beim Upload in private Cloud-Speicher oder beim Drucken. Mögliche Aktionen: protokollieren, warnen, Begründung verlangen, blockieren.</p>
        <h5>IT-Nutzungsrichtlinie</h5>
        <p>Technik allein reicht nicht. Eine <strong>IT-Nutzungsrichtlinie</strong> regelt: erlaubte Nutzung von Geräten, Mail und Internet, private Nutzung, Passwort- und MFA-Regeln, Datenablage (keine Firmendaten in privaten Cloud-Speichern), Umgang mit mobilen Geräten und Datenträgern, Meldepflicht bei Verlust oder Verdacht auf einen Vorfall und Konsequenzen bei Verstößen. Die Beschäftigten bestätigen die Kenntnisnahme. Kontrollen, die Verhalten oder Leistung erfassen können, regelt eine Betriebsvereinbarung.</p>
        <h5>Lizenzmodelle für MDM</h5>
        <div class="callout formel"><strong>Formeln:</strong><br>Kosten Gerätelizenz pro Jahr = Anzahl Geräte × Preis je Gerät und Monat × 12<br>Kosten Benutzerlizenz pro Jahr = Anzahl Benutzer × Preis je Benutzer und Monat × 12<br>Gleichstand bei: Anzahl Geräte = Anzahl Benutzer × Benutzerpreis ÷ Gerätepreis</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> 45 Außendienstler haben je ein Smartphone, 25 davon zusätzlich ein Tablet → 70 Geräte. Angebot: Gerätelizenz 3,50 € pro Monat oder Benutzerlizenz 6,00 € pro Monat (bis zu 5 Geräte je Benutzer).<br>Gerätelizenz: 70 × 3,50 € × 12 = <strong>2.940 €/Jahr</strong>. Benutzerlizenz: 45 × 6,00 € × 12 = <strong>3.240 €/Jahr</strong> → die Gerätelizenz ist um 300 € günstiger.<br>Sollen später auch die Notebooks aller 45 Personen verwaltet werden (115 Geräte): 115 × 3,50 € × 12 = 4.830 € gegenüber unveränderten 3.240 € → jetzt ist die Benutzerlizenz um 1.590 € günstiger. Gleichstand: 45 × 6,00 € ÷ 3,50 € ≈ 77,1 → ab <strong>78 Geräten</strong> lohnt sich die Benutzerlizenz.</div>
        <div class="callout achtung"><strong>Achtung:</strong> Ein <strong>Full Wipe</strong> auf einem privaten Gerät löscht auch Urlaubsfotos und private Chats. Das ist unverhältnismäßig und rechtlich heikel. Bei BYOD nur den Container löschen und zusätzlich die Zugänge sperren (Passwort ändern, Anmelde-Token widerrufen).</div>
        <div class="callout merke"><strong>Merke:</strong> MDM = Richtlinien, Apps, Updates, Compliance, Fernsperre und Fernlöschung zentral steuern. Firmengerät → Full Wipe möglich, BYOD → Container und Selective Wipe. Ohne Betriebsvereinbarung kein MDM mit Ortung.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> Funktionen eines MDM <em>nennen</em> und für ein Szenario <em>begründen</em>, BYOD und COPE <em>vergleichen</em> und eine Empfehlung <em>geben</em>, Full und Selective Wipe <em>unterscheiden</em>, rechtliche Anforderungen <em>erläutern</em>, EDR vom Virenscanner <em>abgrenzen</em>, Lizenzkosten <em>berechnen</em>.</div>`
    },
    {
      id: "notfall-betrieb",
      title: "Notfallmanagement nach BSI 200-4 und sicherer IT-Betrieb",
      exam: ["AP2"],
      summary: "Business Impact Analyse mit MTPD, RTO und RPO, Notfallhandbuch, Incident Response bei Ransomware sowie SLAs, Wartungsfenster, Change Management und Betriebsdokumentation.",
      html: `
        <p>Nicht jede Störung ist ein Notfall. <strong>Störung</strong>: kleiner Ausfall, im Normalbetrieb lösbar. <strong>Notfall</strong>: zeitkritische Prozesse fallen länger aus als tolerierbar, eine besondere Organisation ist nötig. <strong>Krise</strong>: ein Notfall, für den es keine vorbereiteten Pläne gibt oder der die Existenz bedroht.</p>
        <h5>BCM nach BSI-Standard 200-4</h5>
        <p><strong>Business Continuity Management (BCM)</strong> sorgt dafür, dass wichtige Geschäftsprozesse auch bei Notfällen weiterlaufen oder schnell wieder anlaufen. Der BSI-Standard 200-4 bietet drei Stufen: <strong>Reaktiv-BCMS</strong> (schneller Einstieg für die wichtigsten Prozesse), <strong>Aufbau-BCMS</strong> und <strong>Standard-BCMS</strong> (vollständig, kompatibel zu ISO 22301).</p>
        <p>Kern ist die <strong>Business Impact Analyse (BIA)</strong>: Für jeden Geschäftsprozess wird ermittelt, welcher Schaden mit zunehmender Ausfalldauer entsteht und welche Ressourcen (IT-Systeme, Personal, Räume, Dienstleister) er braucht.</p>
        <table><thead><tr><th>Kennzahl</th><th>Bedeutung</th><th>Konsequenz für die IT</th></tr></thead><tbody>
        <tr><td><strong>MTPD</strong> (Maximum Tolerable Period of Disruption, maximal tolerierbare Ausfallzeit)</td><td>Ab hier wird der Schaden für das Unternehmen nicht mehr tragbar</td><td>harte Obergrenze</td></tr>
        <tr><td><strong>RTO</strong> (Recovery Time Objective, Wiederanlaufzeit)</td><td>Zeit, bis der Prozess wieder mindestens im Notbetrieb läuft</td><td>muss kleiner als die MTPD sein; bestimmt Redundanz, Restore-Geschwindigkeit</td></tr>
        <tr><td><strong>RPO</strong> (Recovery Point Objective, maximal tolerierbarer Datenverlust)</td><td>Zeitspanne der Daten, die höchstens verloren gehen darf</td><td>bestimmt das Sicherungs- bzw. Replikationsintervall</td></tr>
        </tbody></table>
        <p>Der BSI-Standard 200-4 verwendet dafür auch deutsche Begriffe, z. B. <strong>maximal tolerierbare Ausfallzeit (MTA)</strong> für die MTPD und <strong>Wiederanlaufzeit (WAZ)</strong> für das RTO. In Prüfungen und Praxis sind die englischen Kürzel üblich – gemeint ist dasselbe.</p>
        <pre class="ascii">letzte Sicherung        Ausfall                Notbetrieb     Schaden untragbar
      |&lt;----- RPO -----&gt;|&lt;-------- RTO --------&gt;|
                        |&lt;---------------- MTPD -----------------&gt;|</pre>
        <div class="callout beispiel"><strong>Beispiel:</strong> Die Auftragsdatenbank (800 GiB) hat eine MTPD von 8 h, gefordert sind RTO = 4 h und RPO = 1 h. Gesichert wird nachts um 22 Uhr → im schlimmsten Fall fehlen fast 24 h Daten → RPO verfehlt. Lösung: stündliche Transaktionslog-Sicherung oder Replikation.<br>Restore über 1 Gbit/s mit 80 % Effizienz: 800 × 2³⁰ × 8 bit ÷ 800.000.000 bit/s ≈ 8.590 s ≈ <strong>2,4 h</strong>. Mit 1 h für Bereitstellung und Tests ergeben sich ≈ 3,4 h &lt; 4 h → RTO eingehalten.</div>
        <h5>Notfallhandbuch und Übungen</h5>
        <ul>
          <li>Inhalt: Geltungsbereich, <strong>Alarmierungs- und Eskalationsplan</strong>, Kontaktlisten (intern, Dienstleister, Behörden), Sofortmaßnahmen, Rollen des <strong>Notfall- bzw. Krisenstabs</strong>, Geschäftsfortführungspläne (Notbetrieb, z. B. manuelle Auftragserfassung), <strong>Wiederanlauf- und Wiederherstellungspläne</strong> mit Reihenfolge (Strom → Netz → AD/DNS → Datenbank → Anwendungen), Kommunikationsplan.</li>
          <li>Das Handbuch muss auch <strong>ohne IT</strong> verfügbar sein (gedruckt, offline) und regelmäßig aktualisiert werden.</li>
          <li>Übungen von einfach bis aufwendig: Planbesprechung am Tisch, Alarmierungsübung, Wiederherstellungstest, Stabsübung, Vollübung. Nur geübte Pläne funktionieren.</li>
        </ul>
        <h5>Incident Response am Beispiel Ransomware</h5>
        <ol>
          <li><strong>Erkennen und melden</strong>: interner Meldeweg, IT-Notfallkarte („Ruhe bewahren, Netzwerkkabel ziehen, melden“).</li>
          <li><strong>Eindämmen</strong>: betroffene Systeme vom Netz trennen, aber nicht ausschalten (Arbeitsspeicher für Forensik), Konten sperren, VPN-Zugänge prüfen.</li>
          <li><strong>Beweise sichern</strong>, Meldepflichten prüfen (ULD binnen 72 h, wenn personenbezogene Daten betroffen sind; BSI bei NIS2-Pflicht; Anzeige bei der Polizei).</li>
          <li><strong>Beseitigen und wiederherstellen</strong>: Einfallstor schließen, Systeme neu aufsetzen, aus sauberem, unveränderlichem Backup zurücksichern, alle Passwörter ändern.</li>
          <li><strong>Nachbereiten</strong>: Lessons Learned, Maßnahmen und Notfallhandbuch anpassen.</li>
        </ol>
        <h5>Betrieb: SLA, Wartungsfenster, Change, Dokumentation</h5>
        <ul>
          <li>Ein <strong>SLA</strong> (Service Level Agreement) regelt Servicezeit, Verfügbarkeit, Reaktionszeit, Lösungszeit, Wartungsfenster, Messung, Berichte und Vertragsstrafen. Intern heißt die Vereinbarung <strong>OLA</strong>, mit Zulieferern <strong>Underpinning Contract</strong>.</li>
          <li><strong>Wartungsfenster</strong>: feste, lastarme Zeiten (z. B. Di 20–23 Uhr), angekündigt, mit genehmigtem Change, vorherigem Backup/Snapshot, Testplan und Rückfallplan.</li>
          <li><strong>Change Management</strong> (in ITIL 4 „Change Enablement“): Änderungen per Änderungsantrag (RFC) bewerten und von der zuständigen Stelle genehmigen lassen (Change Authority, z. B. Change Advisory Board); Standard-Change (vorab genehmigt), Normal-Change, Emergency-Change.</li>
          <li><strong>Dokumentation</strong>: Netzplan, IP- und VLAN-Plan, Firewall-Regeln mit Begründung, Konfigurationsbackups, Betriebshandbuch, SOPs, CMDB, Passwörter im Tresor mit Notfallzugriff.</li>
        </ul>
        <div class="callout beispiel"><strong>SLA-Beispiel:</strong> Servicezeit Mo–Fr 7–19 Uhr, 21 Arbeitstage → 12 h × 21 = 252 h. Zugesagt sind 99,5 %: erlaubter Ausfall = 252 h × 0,005 = 1,26 h = <strong>75,6 min</strong> im Monat. Ein Ausfall am Samstag zählt hier nicht.</div>
        <div class="callout merke"><strong>Merke:</strong> RPO → Wie viele Daten dürfen fehlen? RTO → Wie schnell wieder da? MTPD → Wie lange hält die Firma durch? Es gilt RTO &lt; MTPD.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> RTO, RPO und MTPD <em>erklären</em> und an Zahlen <em>prüfen</em>, Inhalte eines Notfallhandbuchs <em>nennen</em>, Sofortmaßnahmen bei Ransomware in die richtige Reihenfolge <em>bringen</em>, erlaubte Ausfallzeit aus einem SLA <em>berechnen</em>.</div>`
    },
  ],
  exercises: [
    {
      id: "e-risiko-matrix",
      topic: "isms-risiko",
      title: "Risiken einstufen und behandeln",
      level: 2,
      task: `<p>Die <strong>Nordlicht IT GmbH in Heide</strong> (60 Beschäftigte) lässt dich eine erste Risikoanalyse vorbereiten. Die Firma nutzt diese Skala: Eintrittswahrscheinlichkeit W von 1 (selten) bis 4 (sehr häufig), Schadenshöhe S von 1 (vernachlässigbar) bis 4 (existenzbedrohend). Risikowert R = W × S; 1–3 gering, 4–8 mittel, 9–16 hoch.</p>
        <table><thead><tr><th>Nr.</th><th>Gefährdung</th><th>W</th><th>S</th></tr></thead><tbody>
        <tr><td>1</td><td>Ransomware verschlüsselt den Dateiserver</td><td>3</td><td>4</td></tr>
        <tr><td>2</td><td>Notebook eines Vertriebsmitarbeiters wird im Zug gestohlen (Festplatte unverschlüsselt)</td><td>3</td><td>2</td></tr>
        <tr><td>3</td><td>Klimaanlage im Serverraum fällt im Sommer aus</td><td>2</td><td>3</td></tr>
        <tr><td>4</td><td>Sturmflut überflutet das Erdgeschoss mit dem Serverraum</td><td>1</td><td>4</td></tr>
        </tbody></table>
        <p>a) Berechne die Risikowerte und ordne die Kategorien zu.</p>
        <p>b) Nenne die vier Strategien der Risikobehandlung und ordne jedem Risiko eine sinnvolle Strategie mit konkreter Maßnahme zu.</p>
        <p>c) Erläutere, wer ein verbleibendes Restrisiko akzeptieren muss und warum.</p>`,
      hints: ["Ein Risiko kann durch mehrere Maßnahmen behandelt werden – nenne die wichtigste.", "Beim Übertragen bleibt die Verantwortung im Unternehmen."],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Nr.</th><th>Rechnung</th><th>R</th><th>Kategorie</th></tr></thead><tbody>
        <tr><td>1</td><td>3 × 4</td><td>12</td><td>hoch</td></tr>
        <tr><td>2</td><td>3 × 2</td><td>6</td><td>mittel</td></tr>
        <tr><td>3</td><td>2 × 3</td><td>6</td><td>mittel</td></tr>
        <tr><td>4</td><td>1 × 4</td><td>4</td><td>mittel</td></tr>
        </tbody></table>
        <p><strong>b)</strong> Strategien: vermeiden, reduzieren (vermindern), übertragen, akzeptieren.</p>
        <ul>
          <li>Risiko 1 – <strong>reduzieren</strong>: unveränderliche Offline-Backups nach 3-2-1-Regel, Patchmanagement, EDR, MFA, Segmentierung; zusätzlich kann eine Cyberversicherung den finanziellen Schaden <strong>übertragen</strong>.</li>
          <li>Risiko 2 – <strong>reduzieren</strong>: Festplattenverschlüsselung (BitLocker mit TPM und PIN), MDM mit Fernlöschung. Dann entsteht kein Datenschutzschaden mehr, nur der Hardwareverlust.</li>
          <li>Risiko 3 – <strong>reduzieren</strong>: redundante Klimatisierung (n+1), Temperaturüberwachung mit Alarm, automatisches Herunterfahren.</li>
          <li>Risiko 4 – <strong>vermeiden</strong>: Serverraum ins Obergeschoss verlegen oder Server in ein Rechenzentrum auslagern. Alternativ <strong>übertragen</strong> per Elementarschadenversicherung.</li>
        </ul>
        <p><strong>c)</strong> Das Restrisiko muss die <strong>Geschäftsleitung</strong> schriftlich akzeptieren. Sie trägt die Gesamtverantwortung für die Informationssicherheit: Bußgelder und Schadensersatz (z. B. nach DSGVO) treffen das Unternehmen, bei NIS2-Pflicht haften die Geschäftsleiter zusätzlich persönlich für die Umsetzung der Risikomanagementmaßnahmen. Die IT-Abteilung kann Risiken bewerten und Maßnahmen vorschlagen, aber nicht über die Risikobereitschaft des Unternehmens entscheiden.</p>`
    },
    {
      id: "e-ale-ransomware",
      topic: "isms-risiko",
      title: "Wirtschaftlichkeit eines Ransomware-Schutzpakets",
      level: 3,
      task: `<p>Die <strong>Westküsten Elektro GmbH in Husum</strong> überlegt, ein Schutzpaket gegen Ransomware einzuführen. Du erhältst folgende Schätzungen:</p>
        <ul>
          <li>Ein erfolgreicher Angriff legt den Betrieb für 20 Arbeitsstunden lahm. Jede Stunde Stillstand kostet 3.500 €. Wiederherstellung und Forensik kosten zusätzlich 30.000 €.</li>
          <li>Ohne Schutzpaket rechnet man mit einem erfolgreichen Angriff alle 5 Jahre.</li>
          <li>Schutzpaket pro Jahr: Immutable-Backup-Appliance 4.000 €, EDR für 120 Geräte zu je 30 €, Awareness-Schulungen 1.400 €.</li>
          <li>Mit Schutzpaket sinkt die Wahrscheinlichkeit auf einen Angriff in 20 Jahren. Kommt es doch dazu, sinkt der Schaden je Vorfall auf 40.000 €.</li>
        </ul>
        <p>a) Berechne SLE, ARO und ALE ohne Schutzpaket.</p>
        <p>b) Berechne die jährlichen Kosten des Schutzpakets und die ALE mit Schutzpaket.</p>
        <p>c) Beurteile, ob sich das Schutzpaket lohnt.</p>
        <p>d) Nenne zwei Gründe, warum die Geschäftsleitung das Schutzpaket auch einführen sollte, wenn die Rechnung knapp negativ wäre.</p>`,
      solution: `<p><strong>a)</strong> SLE = 20 h × 3.500 €/h + 30.000 € = 70.000 € + 30.000 € = <strong>100.000 €</strong>. ARO = 1 ÷ 5 = <strong>0,2</strong> pro Jahr. ALE = 100.000 € × 0,2 = <strong>20.000 €/Jahr</strong>.</p>
        <p><strong>b)</strong> Kosten = 4.000 € + 120 × 30 € + 1.400 € = 4.000 € + 3.600 € + 1.400 € = <strong>9.000 €/Jahr</strong>. ARO neu = 1 ÷ 20 = 0,05; ALE neu = 40.000 € × 0,05 = <strong>2.000 €/Jahr</strong>.</p>
        <p><strong>c)</strong> Nutzen = ALE vorher − ALE nachher = 20.000 € − 2.000 € = 18.000 €/Jahr. Dem stehen 9.000 € Kosten gegenüber. Das Unternehmen spart rechnerisch 18.000 € − 9.000 € = <strong>9.000 € pro Jahr</strong>. Das Schutzpaket lohnt sich.</p>
        <p><strong>d)</strong> Die ALE-Rechnung erfasst nicht alle Schäden. Beispiele: (1) <strong>Imageschaden</strong> und Kundenverlust nach einem öffentlich bekannten Angriff lassen sich kaum beziffern. (2) <strong>Rechtliche Pflichten</strong>: Art. 32 DSGVO verlangt Maßnahmen nach dem Stand der Technik, bei Datenabfluss drohen Bußgelder und Schadensersatz. (3) Die Schätzwerte sind unsicher – ein einzelner Angriff kann existenzbedrohend sein. Deshalb wird Sicherheit nicht nur nach dem Erwartungswert entschieden.</p>`
    },
    {
      id: "e-meldepflichten",
      topic: "recht-compliance",
      title: "NIS2-Betroffenheit und Meldepflichten nach einem Angriff",
      level: 2,
      task: `<p>Die <strong>Dithmarscher Maschinenbau GmbH in Meldorf</strong> stellt Landmaschinen her (180 Beschäftigte, 32 Mio. € Jahresumsatz, 28 Mio. € Bilanzsumme). Am Montag um 07:30 Uhr stellt die IT fest, dass Angreifer den Dateiserver verschlüsselt und zuvor Kundendaten (Namen, Adressen, Bankverbindungen) abgezogen haben. Die Produktion steht still.</p>
        <p>a) Prüfe, ob das Unternehmen unter die NIS2-Regeln des BSIG fällt und in welche Kategorie. Maschinenbau gehört zu den in der Richtlinie genannten „sonstigen kritischen Sektoren“.</p>
        <p>b) Nenne alle Meldungen mit Empfänger und spätester Frist.</p>
        <p>c) Nenne vier technisch-organisatorische Maßnahmen nach Art. 32 DSGVO, die solche Vorfälle künftig erschweren.</p>
        <p>d) Nach dem Vorfall soll ein SIEM alle Anmeldungen der Beschäftigten auswerten. Erläutere, was vor der Einführung arbeitsrechtlich zu beachten ist.</p>`,
      solution: `<p><strong>a)</strong> Das Unternehmen hat mindestens 50 Beschäftigte, ist also mindestens ein mittleres Unternehmen. Ein Großunternehmen ist es nicht: Es hat weniger als 250 Beschäftigte, und Umsatz (32 Mio. €) und Bilanzsumme (28 Mio. €) liegen unter 50 Mio. € bzw. 43 Mio. €. Da es in einem erfassten Sektor tätig ist, ist es eine <strong>wichtige Einrichtung</strong>. Hinweis: Maschinenbau gehört zu den Sektoren der Anlage 2 – selbst mit mehr als 250 Beschäftigten wäre das Unternehmen deshalb nur eine wichtige, keine besonders wichtige Einrichtung. Es muss sich beim BSI registrieren, Risikomanagementmaßnahmen umsetzen und erhebliche Sicherheitsvorfälle melden.</p>
        <p><strong>b)</strong></p>
        <ul>
          <li><strong>BSI</strong> (NIS2): Frühwarnung spätestens 24 h nach Kenntnis (Dienstag 07:30 Uhr), Meldung mit erster Bewertung nach 72 h (Donnerstag 07:30 Uhr), Abschlussbericht spätestens einen Monat nach der Meldung.</li>
          <li><strong>Datenschutzaufsicht</strong> (in Schleswig-Holstein das ULD) nach Art. 33 DSGVO: binnen 72 h nach Bekanntwerden (Donnerstag 07:30 Uhr), da personenbezogene Daten abgeflossen sind.</li>
          <li><strong>Betroffene Kunden</strong> nach Art. 34 DSGVO: unverzüglich, weil Bankverbindungen in fremden Händen ein hohes Risiko (z. B. Betrug) darstellen.</li>
          <li>Empfehlenswert zusätzlich: Strafanzeige bei der Polizei (Zentrale Ansprechstelle Cybercrime) und Information der Cyberversicherung.</li>
        </ul>
        <p><strong>c)</strong> Zum Beispiel: Verschlüsselung der Datenbestände mit Kundendaten, unveränderliche und getrennt aufbewahrte Backups mit regelmäßigen Wiederherstellungstests, MFA für alle Fernzugänge und Admin-Konten, zeitnahes Patchmanagement, Netzsegmentierung, rollenbasiertes Rechtekonzept nach Least Privilege, regelmäßige Überprüfung der Maßnahmen (Audits, Schwachstellenscans).</p>
        <p><strong>d)</strong> Ein SIEM, das Anmeldungen auswertet, ist eine technische Einrichtung, die Verhalten und Leistung der Beschäftigten überwachen kann. Nach § 87 Abs. 1 Nr. 6 BetrVG hat der <strong>Betriebsrat ein Mitbestimmungsrecht</strong>. Vor der Einführung ist deshalb eine <strong>Betriebsvereinbarung</strong> abzuschließen (Zweck nur IT-Sicherheit, keine Leistungskontrolle, Zugriffsberechtigte, Speicherdauer, Auswertungsregeln). Datenschutzrechtlich sind der Zweck, die Rechtsgrundlage, der Eintrag im Verarbeitungsverzeichnis und ein Löschkonzept festzulegen.</p>`
    },
    {
      id: "e-wireshark-arp",
      topic: "bedrohungen",
      title: "Paketmitschnitt: Angriff erkennen",
      level: 3,
      task: `<p>Bei der <strong>Nordlicht IT GmbH</strong> melden Beschäftigte im VLAN 20 (192.168.20.0/24, Gateway 192.168.20.1) langsame Verbindungen und Zertifikatswarnungen im Browser. Du schneidest mit Wireshark an einem Mirror-Port mit:</p>
        <table><thead><tr><th>Nr.</th><th>Zeit</th><th>Quelle (MAC)</th><th>Ziel</th><th>Protokoll</th><th>Info</th></tr></thead><tbody>
        <tr><td>1</td><td>0,000</td><td>00:1a:2b:3c:4d:01</td><td>Broadcast</td><td>ARP</td><td>Who has 192.168.20.1? Tell 192.168.20.34</td></tr>
        <tr><td>2</td><td>0,001</td><td>00:1a:2b:3c:4d:fe</td><td>00:1a:2b:3c:4d:01</td><td>ARP</td><td>192.168.20.1 is at 00:1a:2b:3c:4d:fe</td></tr>
        <tr><td>3</td><td>2,113</td><td>08:00:27:9c:11:5a</td><td>00:1a:2b:3c:4d:01</td><td>ARP</td><td>192.168.20.1 is at 08:00:27:9c:11:5a</td></tr>
        <tr><td>4</td><td>4,115</td><td>08:00:27:9c:11:5a</td><td>00:1a:2b:3c:4d:01</td><td>ARP</td><td>192.168.20.1 is at 08:00:27:9c:11:5a</td></tr>
        <tr><td>5</td><td>6,117</td><td>08:00:27:9c:11:5a</td><td>00:1a:2b:3c:4d:fe</td><td>ARP</td><td>192.168.20.34 is at 08:00:27:9c:11:5a</td></tr>
        </tbody></table>
        <p>a) Benenne den Angriff und begründe anhand der Paketnummern.</p>
        <p>b) Beschreibe, wie der Datenverkehr zwischen Client 192.168.20.34 und Gateway nach dem Angriff fließt, und nenne drei mögliche Auswirkungen.</p>
        <p>c) Erkläre, warum die Beschäftigten Zertifikatswarnungen sehen.</p>
        <p>d) Nenne zwei Gegenmaßnahmen auf dem Switch und erkläre die wichtigste genauer.</p>
        <p>e) Gib einen Wireshark-Anzeigefilter an, mit dem du nur ARP-Antworten siehst.</p>`,
      hints: ["Vergleiche die MAC-Adressen, die für 192.168.20.1 gemeldet werden.", "ARP-Antworten haben den Opcode 2."],
      solution: `<p><strong>a)</strong> <strong>ARP-Spoofing (ARP-Poisoning)</strong> als Grundlage für einen <strong>Man-in-the-Middle-Angriff</strong>. In Paket 2 antwortet das echte Gateway (MAC …:fe). In Paket 3 und 4 sendet ein anderes Gerät (08:00:27:9c:11:5a) <strong>unaufgefordert</strong> und wiederholt die Antwort, die Gateway-IP gehöre zu seiner MAC. In Paket 5 gibt es sich gegenüber dem Gateway zusätzlich als Client aus. Dieselbe IP mit wechselnder MAC ist das typische Kennzeichen.</p>
        <p><strong>b)</strong> Der Client trägt die falsche MAC in seinen ARP-Cache ein und schickt alle Frames für das Gateway an den Angreifer. Das Gateway schickt Antworten für den Client ebenfalls an den Angreifer. Der Angreifer leitet den Verkehr weiter, damit niemand etwas merkt. Er sitzt also in beiden Richtungen dazwischen. Auswirkungen: <strong>Mitlesen</strong> unverschlüsselter Daten (Passwörter bei HTTP, FTP), <strong>Manipulieren</strong> von Daten, <strong>Umleiten</strong> auf gefälschte Seiten (z. B. durch DNS-Manipulation), <strong>Denial of Service</strong>, wenn der Angreifer nicht weiterleitet. Die Weiterleitung über einen zusätzlichen Rechner erklärt auch die langsamen Verbindungen.</p>
        <p><strong>c)</strong> Der Angreifer versucht, HTTPS-Verbindungen aufzubrechen. Dafür präsentiert er dem Browser ein eigenes Zertifikat. Es ist nicht von einer vertrauenswürdigen CA für den angefragten Namen signiert, deshalb schlägt die Zertifikatsprüfung fehl und der Browser warnt. TLS mit Zertifikatsprüfung schützt also die Inhalte – vorausgesetzt, die Benutzer klicken die Warnung nicht weg.</p>
        <p><strong>d)</strong> <strong>Dynamic ARP Inspection (DAI)</strong> zusammen mit <strong>DHCP-Snooping</strong>, außerdem 802.1X, Port Security, statische ARP-Einträge für kritische Systeme. DAI im Detail: DHCP-Snooping protokolliert bei jeder DHCP-Vergabe, welche IP an welche MAC an welchem Port vergeben wurde (Binding-Tabelle). DAI prüft jedes ARP-Paket an nicht vertrauenswürdigen Ports gegen diese Tabelle. Passt die Zuordnung IP ↔ MAC nicht, wird das Paket verworfen und protokolliert. Nur der Uplink wird als <em>trusted</em> konfiguriert.</p>
        <p><strong>e)</strong> <code>arp.opcode == 2</code></p>`
    },
    {
      id: "e-portsecurity",
      topic: "bedrohungen",
      title: "Layer-2-Angriffe abwehren und Port Security deuten",
      level: 2,
      task: `<p>Die <strong>Stadtwerke Brunsbüttel</strong> wollen ihre Access-Switches absichern.</p>
        <p>a) Ordne jedem Angriff die wirksamste Gegenmaßnahme zu: Angriffe – MAC-Flooding, Rogue-DHCP-Server, ARP-Poisoning, VLAN-Hopping per Double Tagging, Übernahme der Root Bridge. Maßnahmen – BPDU Guard, DHCP-Snooping, Port Security, Dynamic ARP Inspection, natives VLAN auf eine ungenutzte ID legen.</p>
        <p>b) Am Port Fa0/5 ist Folgendes konfiguriert:</p>
        <pre><code>interface fa0/5
 switchport mode access
 switchport access vlan 10
 switchport port-security
 switchport port-security maximum 1
 switchport port-security mac-address sticky
 switchport port-security violation shutdown</code></pre>
        <p>Am Port hängt der PC eines Sachbearbeiters. Ein Kollege steckt einen kleinen Switch dazwischen und schließt zusätzlich sein Notebook an. Beschreibe, was passiert, und wie ein Administrator den Port wieder in Betrieb nimmt.</p>
        <p>c) Unterscheide die Verletzungsmodi <em>restrict</em> und <em>protect</em>.</p>
        <p>d) Erkläre, was <code>mac-address sticky</code> bewirkt.</p>`,
      solution: `<p><strong>a)</strong> MAC-Flooding → <strong>Port Security</strong> (begrenzt die Zahl der MAC-Adressen pro Port). Rogue-DHCP → <strong>DHCP-Snooping</strong> (DHCP-Angebote nur über vertrauenswürdige Ports). ARP-Poisoning → <strong>Dynamic ARP Inspection</strong>. Double Tagging → <strong>natives VLAN auf ungenutzte ID</strong> (und Trunks nur mit benötigten VLANs). Root-Bridge-Übernahme → <strong>BPDU Guard</strong> an Endgeräteports.</p>
        <p><strong>b)</strong> Sobald das Notebook Frames sendet, sieht der Switch an Fa0/5 eine zweite MAC-Adresse. Erlaubt ist nur eine (die gelernte des PCs). Im Modus <strong>shutdown</strong> geht der Port sofort in den Zustand <strong>err-disabled</strong>. PC und Notebook sind offline, ein Syslog-/SNMP-Ereignis wird erzeugt und der Verletzungszähler erhöht. Wiederinbetriebnahme: Ursache beseitigen (fremden Switch entfernen), dann im Interface-Modus <code>shutdown</code> und anschließend <code>no shutdown</code> eingeben. Alternativ kann eine automatische Errdisable-Recovery nach einer festgelegten Zeit konfiguriert sein.</p>
        <p><strong>c)</strong> <strong>restrict</strong>: Frames unbekannter MAC-Adressen werden verworfen, der Port bleibt für die erlaubte MAC aktiv, der Verstoß wird gezählt und per Syslog/SNMP gemeldet. <strong>protect</strong>: Frames werden ebenfalls verworfen, aber ohne Meldung und ohne Zähler – der Administrator erfährt nichts vom Verstoß.</p>
        <p><strong>d)</strong> Der Switch lernt die MAC-Adresse des ersten Geräts dynamisch und trägt sie als statische, „klebende“ Adresse in die laufende Konfiguration ein. Nach dem Speichern (<code>copy running-config startup-config</code>) bleibt sie auch nach einem Neustart erhalten. So muss man die MAC-Adressen nicht einzeln eintippen.</p>`
    },
    {
      id: "e-dmz-planung",
      topic: "segmentierung-dmz",
      title: "Sicherheitszonen und DMZ für einen Reiseveranstalter",
      level: 2,
      task: `<p>Die <strong>Nordsee Reisen GmbH in Büsum</strong> betreibt bisher alles in einem flachen Netz 192.168.0.0/24. Der Webserver mit der Buchungsseite ist über eine Portweiterleitung am Router aus dem Internet erreichbar. Vorhanden sind: Buchungs-Webanwendung, Buchungsdatenbank, Mailserver, Active-Directory-Server, Dateiserver, 40 Clients, WLAN-Access-Points für Gäste im Reisebüro, VPN-Zugang für den Außendienst.</p>
        <p>a) Erläutere zwei Risiken der bisherigen Lösung.</p>
        <p>b) Entwirf ein Zonenkonzept: Ordne alle Systeme Zonen zu und ergänze einen Reverse Proxy und ein Mail-Relay.</p>
        <p>c) Vergleiche eine einstufige und eine zweistufige DMZ und gib eine begründete Empfehlung.</p>
        <p>d) Begründe, warum die Buchungsdatenbank nicht in die DMZ gehört, und beschreibe den Datenfluss einer Buchung.</p>`,
      solution: `<p><strong>a)</strong> (1) Wird der Webserver über eine Lücke übernommen, steht der Angreifer <strong>direkt im internen Netz</strong> und erreicht AD, Dateiserver und alle Clients (laterale Bewegung). (2) Gäste-WLAN, Clients und Server liegen im selben Netz: Ein infiziertes Gästegerät kann interne Systeme angreifen, und Broadcasts betreffen alle.</p>
        <p><strong>b)</strong></p>
        <table><thead><tr><th>Zone</th><th>Systeme</th></tr></thead><tbody>
        <tr><td>DMZ</td><td>Reverse Proxy (nimmt HTTPS aus dem Internet an), Mail-Relay mit Spam- und Virenfilter, VPN-Gateway</td></tr>
        <tr><td>Server (intern)</td><td>Buchungs-Webanwendung, Buchungsdatenbank, Mailserver, AD, Dateiserver</td></tr>
        <tr><td>Clients</td><td>40 Arbeitsplätze</td></tr>
        <tr><td>Gäste</td><td>Gäste-WLAN, nur Internetzugang, Client Isolation</td></tr>
        <tr><td>Management</td><td>Verwaltungszugänge von Firewall, Switches, Access Points</td></tr>
        </tbody></table>
        <p>Jede Zone erhält ein eigenes VLAN und Subnetz. Die Übergänge laufen über die Firewall.</p>
        <p><strong>c)</strong> <strong>Einstufig</strong> (eine Firewall mit drei Schnittstellen): günstiger, einfacher zu verwalten, aber die Firewall ist ein Single Point of Failure – ein Konfigurationsfehler oder eine Lücke betrifft alle Zonen. <strong>Zweistufig</strong> (äußere und innere Firewall, möglichst verschiedene Hersteller): Ein Angreifer muss zwei unabhängige Systeme überwinden, höhere Sicherheit, aber höhere Kosten und mehr Verwaltungsaufwand. Empfehlung: Da Kundendaten und Zahlungsinformationen verarbeitet werden (hoher Schutzbedarf), ist eine <strong>zweistufige DMZ</strong> angemessen. Bei kleinem Budget ist eine einstufige DMZ mit NGFW-Cluster ein akzeptabler Kompromiss.</p>
        <p><strong>d)</strong> Die Datenbank enthält die wertvollsten Daten und muss aus dem Internet nicht direkt erreichbar sein. In der DMZ wäre sie nach einem erfolgreichen Angriff auf ein DMZ-System sofort erreichbar. Datenfluss: Kunde → HTTPS (443) → Reverse Proxy in der DMZ (TLS-Terminierung, WAF-Prüfung) → einzelner freigegebener Port → Buchungs-Webanwendung im Serversegment → Datenbankport → Buchungsdatenbank. Die Firewall erlaubt jeweils nur genau diese Verbindungen.</p>`
    },
    {
      id: "e-regelwerk-erstellen",
      topic: "firewalls",
      title: "Firewall-Regelwerk für DMZ und internes Netz erstellen",
      level: 3,
      task: `<p>Die <strong>Nordlicht IT GmbH</strong> setzt eine Stateful-Firewall mit den Zonen Internet, DMZ und LAN ein.</p>
        <table><thead><tr><th>System</th><th>Adresse</th></tr></thead><tbody>
        <tr><td>Reverse Proxy (DMZ)</td><td>172.16.1.10</td></tr>
        <tr><td>Mail-Relay (DMZ)</td><td>172.16.1.25</td></tr>
        <tr><td>Clients</td><td>10.0.10.0/24</td></tr>
        <tr><td>Mailserver intern</td><td>10.0.20.25</td></tr>
        <tr><td>Webanwendung intern</td><td>10.0.20.80, Port 8443</td></tr>
        <tr><td>DNS-Server intern</td><td>10.0.20.53</td></tr>
        <tr><td>Admin-Jump-Host</td><td>10.0.30.5</td></tr>
        </tbody></table>
        <p>Anforderungen: Aus dem Internet sind nur HTTPS zum Reverse Proxy und SMTP zum Mail-Relay erlaubt. Das Mail-Relay stellt Mails an den internen Mailserver zu. Der Reverse Proxy darf nur die Webanwendung erreichen. Clients nutzen ausschließlich den internen DNS-Server, der selbst ins Internet auflöst. Clients dürfen ins Internet surfen (HTTP/HTTPS). Die DMZ-Server werden nur vom Jump-Host per SSH verwaltet. Alles andere wird verworfen und protokolliert.</p>
        <p>a) Erstelle das Regelwerk (Nr., Quelle, Ziel, Protokoll/Port, Aktion).</p>
        <p>b) Erkläre, warum du keine Regeln für die Antwortpakete brauchst.</p>
        <p>c) Ein Kollege möchte als Regel 1 „10.0.10.0/24 → any, any, allow“ einfügen, „damit die Clients keine Probleme haben“. Beurteile den Vorschlag.</p>
        <p>d) Die Geschäftsleitung will verhindern, dass Clients Filesharing-Dienste nutzen, die ebenfalls über Port 443 laufen. Welche Firewall-Funktion brauchst du?</p>`,
      hints: ["DNS nutzt UDP und TCP 53.", "Denke an first match: Die Deny-Regel steht ganz unten."],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Nr.</th><th>Quelle</th><th>Ziel</th><th>Protokoll/Port</th><th>Aktion</th></tr></thead><tbody>
        <tr><td>1</td><td>any (Internet)</td><td>172.16.1.10</td><td>TCP 443</td><td>allow</td></tr>
        <tr><td>2</td><td>any (Internet)</td><td>172.16.1.25</td><td>TCP 25</td><td>allow</td></tr>
        <tr><td>3</td><td>172.16.1.25</td><td>10.0.20.25</td><td>TCP 25</td><td>allow</td></tr>
        <tr><td>4</td><td>172.16.1.10</td><td>10.0.20.80</td><td>TCP 8443</td><td>allow</td></tr>
        <tr><td>5</td><td>10.0.10.0/24</td><td>10.0.20.53</td><td>UDP 53, TCP 53</td><td>allow</td></tr>
        <tr><td>6</td><td>10.0.20.53</td><td>any (Internet)</td><td>UDP 53, TCP 53</td><td>allow</td></tr>
        <tr><td>7</td><td>10.0.10.0/24</td><td>any (Internet)</td><td>TCP 80, TCP 443</td><td>allow</td></tr>
        <tr><td>8</td><td>10.0.30.5</td><td>172.16.1.0/24</td><td>TCP 22</td><td>allow</td></tr>
        <tr><td>9</td><td>any</td><td>any</td><td>any</td><td>deny + log</td></tr>
        </tbody></table>
        <p>Bei Regel 7 muss „any (Internet)“ in der Praxis als Schnittstelle bzw. Zone „WAN“ definiert sein, damit Clients nicht über diese Regel in die DMZ gelangen. Das Mail-Relay benötigt für ausgehende Mails zusätzlich eine Regel 172.16.1.25 → Internet TCP 25 (oben einzufügen, falls gewünscht).</p>
        <p><strong>b)</strong> Eine Stateful-Inspection-Firewall trägt jede erlaubte Verbindung in ihre <strong>Verbindungstabelle</strong> ein (Quell-/Ziel-IP, Ports, Zustand). Antwortpakete, die zu einer bestehenden Verbindung gehören (Zustand „established/related“), lässt sie automatisch passieren. Deshalb genügt eine Regel für die Richtung, in der die Verbindung aufgebaut wird.</p>
        <p><strong>c)</strong> Der Vorschlag ist abzulehnen. Wegen <strong>first match</strong> würde Regel 1 jeden Verkehr der Clients erlauben – auch in die DMZ, zu allen Servern und über beliebige Ports ins Internet (z. B. direkte DNS-Anfragen, Tunnelprotokolle, Schadsoftware-Kommunikation). Alle späteren einschränkenden Regeln für Clients wären wirkungslos (Shadowing). Das widerspricht dem Whitelist-Prinzip. Probleme löst man durch gezielte zusätzliche Regeln nach Analyse der Firewall-Logs.</p>
        <p><strong>d)</strong> Eine <strong>Next Generation Firewall</strong> mit <strong>Anwendungserkennung</strong> (Deep Packet Inspection, ggf. TLS-Inspektion). Sie erkennt Anwendungen unabhängig vom Port und kann Regeln wie „Filesharing-Kategorie blockieren“ umsetzen. Ein reiner Paketfilter oder eine Stateful-Firewall sieht nur Port 443 und kann nicht unterscheiden. Für die TLS-Inspektion sind Datenschutz und Mitbestimmung des Betriebsrats zu beachten.</p>`
    },
    {
      id: "e-regelwerk-fehler",
      topic: "firewalls",
      title: "Fehler in einem Firewall-Regelwerk finden",
      level: 2,
      task: `<p>Ein Praktikant hat für die <strong>Holstein Logistik KG in Itzehoe</strong> folgendes Regelwerk erstellt (LAN 192.168.1.0/24, Webserver in der DMZ 172.16.0.10, interner DNS-Server 192.168.1.53). Die Firewall arbeitet nach first match.</p>
        <table><thead><tr><th>Nr.</th><th>Quelle</th><th>Ziel</th><th>Protokoll/Port</th><th>Aktion</th></tr></thead><tbody>
        <tr><td>1</td><td>192.168.1.0/24</td><td>any</td><td>any</td><td>allow</td></tr>
        <tr><td>2</td><td>any</td><td>172.16.0.10</td><td>TCP 443</td><td>allow</td></tr>
        <tr><td>3</td><td>192.168.1.0/24</td><td>any</td><td>TCP 23</td><td>deny</td></tr>
        <tr><td>4</td><td>192.168.1.53</td><td>any</td><td>TCP 53</td><td>allow</td></tr>
        <tr><td>5</td><td>any</td><td>192.168.1.0/24</td><td>TCP 3389</td><td>allow</td></tr>
        <tr><td>6</td><td>any</td><td>any</td><td>any</td><td>deny</td></tr>
        </tbody></table>
        <p>a) Finde vier Fehler oder Schwachstellen und begründe sie.</p>
        <p>b) Gib ein korrigiertes Regelwerk an (Clients dürfen HTTP/HTTPS ins Internet und den internen DNS nutzen).</p>`,
      solution: `<p><strong>a)</strong></p>
        <ol>
          <li><strong>Regel 1 ist zu weit</strong>: Sie erlaubt dem LAN jeden Verkehr zu jedem Ziel. Das widerspricht dem Least-Privilege-Prinzip.</li>
          <li><strong>Regel 3 wird nie wirksam (Shadowing)</strong>: Telnet aus dem LAN passt schon auf Regel 1 und wird erlaubt, bevor Regel 3 geprüft wird. Das Verbot muss vor der Erlaubnis stehen oder die Erlaubnis muss eng gefasst sein.</li>
          <li><strong>Regel 4 ist unvollständig</strong>: DNS nutzt hauptsächlich <strong>UDP 53</strong>, TCP 53 nur für große Antworten und Zonentransfers. Mit nur TCP scheitern die meisten Anfragen des DNS-Servers.</li>
          <li><strong>Regel 5 ist gefährlich</strong>: RDP (TCP 3389) aus dem gesamten Internet auf alle Clients ist ein beliebtes Einfallstor für Brute-Force- und Ransomware-Angriffe. Fernzugriff gehört hinter ein VPN mit MFA.</li>
          <li>Regel 6 verwirft ohne <strong>Logging</strong> – Angriffe und Fehlkonfigurationen bleiben unsichtbar.</li>
        </ol>
        <p><strong>b)</strong></p>
        <table><thead><tr><th>Nr.</th><th>Quelle</th><th>Ziel</th><th>Protokoll/Port</th><th>Aktion</th></tr></thead><tbody>
        <tr><td>1</td><td>any</td><td>172.16.0.10</td><td>TCP 443</td><td>allow</td></tr>
        <tr><td>2</td><td>192.168.1.53</td><td>any (WAN)</td><td>UDP/TCP 53</td><td>allow</td></tr>
        <tr><td>3</td><td>192.168.1.0/24</td><td>any (WAN)</td><td>TCP 80, 443</td><td>allow</td></tr>
        <tr><td>4</td><td>any</td><td>any</td><td>any</td><td>deny + log</td></tr>
        </tbody></table>
        <p>Eine Regel „Clients → DNS-Server“ ist hier nicht nötig: Clients und DNS-Server liegen im selben Subnetz, ihr Verkehr läuft nicht über die Firewall. Telnet braucht keine eigene Verbotsregel mehr, weil es von keiner Regel erlaubt und daher von Regel 4 verworfen wird. Fernzugriff läuft über ein VPN-Gateway mit eigener, eng gefasster Regel.</p>`
    },
    {
      id: "e-ids-logs",
      topic: "ids-siem",
      title: "IDS/IPS platzieren, Logspeicher berechnen, Ereignisse auswerten",
      level: 2,
      task: `<p>Die <strong>Nordlicht IT GmbH</strong> führt ein SIEM ein. 150 Systeme liefern im Mittel je 20.000 Ereignisse pro Tag, ein Ereignis belegt durchschnittlich 400 Byte. Die Logs sollen 180 Tage aufbewahrt werden. Das SIEM komprimiert im Verhältnis 8 : 1.</p>
        <p>a) Unterscheide IDS und IPS und gib für beide eine sinnvolle Position im Netz an.</p>
        <p>b) Berechne den Speicherbedarf pro Tag und für 180 Tage (unkomprimiert und komprimiert) in GiB.</p>
        <p>c) Werte folgenden Auszug aus dem Sicherheitsprotokoll eines Servers aus und nenne drei Sofortmaßnahmen:</p>
        <table><thead><tr><th>Zeit</th><th>Ereignis-ID</th><th>Details</th></tr></thead><tbody>
        <tr><td>02:14:05–02:15:40</td><td>4625 (12 ×)</td><td>Konto m.jensen, Quelle 10.0.10.77</td></tr>
        <tr><td>02:15:52</td><td>4624</td><td>Konto m.jensen, Quelle 10.0.10.77</td></tr>
        <tr><td>02:17:10</td><td>4720</td><td>neues Konto svc_backup2 angelegt von m.jensen</td></tr>
        <tr><td>02:20:00</td><td>1102</td><td>Sicherheitsprotokoll gelöscht</td></tr>
        </tbody></table>
        <p>d) Begründe, warum alle Systeme per NTP synchronisiert sein müssen.</p>`,
      solution: `<p><strong>a)</strong> Ein <strong>IDS</strong> erkennt Angriffe und alarmiert, greift aber nicht ein. Es hängt passiv an einem <strong>Mirror-/SPAN-Port</strong> oder TAP, z. B. am Core-Switch, und sieht dort den internen Verkehr. Ein <strong>IPS</strong> erkennt und blockiert und sitzt deshalb <strong>inline</strong> im Datenweg, z. B. zwischen Firewall und DMZ oder als Funktion der NGFW. So kann es Angriffe auf die öffentlich erreichbaren Server stoppen. Nachteil des IPS: Fehlalarme blockieren legitimen Verkehr.</p>
        <p><strong>b)</strong> Pro Tag: 150 × 20.000 × 400 Byte = 1.200.000.000 Byte. In GiB: 1.200.000.000 ÷ 2³⁰ = 1.200.000.000 ÷ 1.073.741.824 ≈ <strong>1,12 GiB/Tag</strong>.<br>180 Tage: 1.200.000.000 Byte × 180 = 216.000.000.000 Byte ÷ 2³⁰ ≈ <strong>201,17 GiB</strong> unkomprimiert.<br>Komprimiert: pro Tag 1,12 GiB ÷ 8 ≈ <strong>0,14 GiB</strong>, für 180 Tage 201,17 GiB ÷ 8 ≈ <strong>25,15 GiB</strong>. Zusätzlich Reserve für Wachstum und Indizes einplanen.</p>
        <p><strong>c)</strong> Innerhalb von gut 1,5 Minuten scheitern 12 Anmeldungen, danach gelingt eine Anmeldung von derselben Quelle – ein <strong>erfolgreicher Brute-Force- oder Passwort-Rate-Angriff</strong> ist wahrscheinlich. Danach legt das Konto ein neues, unauffällig benanntes Konto an (<strong>Persistenz</strong>, Hintertür) und löscht das Sicherheitsprotokoll (<strong>Spuren verwischen</strong>). Uhrzeit (nachts) und Ablauf sprechen für einen Angriff. Sofortmaßnahmen: Konten m.jensen und svc_backup2 sperren, Client 10.0.10.77 vom Netz isolieren (nicht ausschalten), Incident-Response nach Notfallplan starten, Beweise sichern (zentrale Logkopie), Passwörter zurücksetzen, prüfen, welche Rechte m.jensen hat. Langfristig: MFA, Kontosperre nach Fehlversuchen, SIEM-Regel für genau dieses Muster.</p>
        <p><strong>d)</strong> Ein SIEM korreliert Ereignisse verschiedener Systeme über ihre <strong>Zeitstempel</strong>. Gehen Uhren unterschiedlich, stimmt die Reihenfolge nicht, Korrelationsregeln schlagen nicht an und Beweise sind vor Gericht angreifbar. Außerdem scheitert die Kerberos-Anmeldung bei mehr als 5 Minuten Abweichung, und Zertifikate werden falsch als abgelaufen oder noch nicht gültig bewertet.</p>`
    },
    {
      id: "e-krypto-grundlagen",
      topic: "kryptografie",
      title: "Schlüsselanzahl, Signatur und hybride Verschlüsselung",
      level: 1,
      exam: ["AP1", "AP2"],
      task: `<p>Im Team der <strong>Nordlicht IT GmbH</strong> arbeiten 12 Personen, die sich gegenseitig vertrauliche Dateien schicken.</p>
        <p>a) Berechne, wie viele Schlüssel bei rein symmetrischer und bei asymmetrischer Verschlüsselung nötig sind.</p>
        <p>b) Anna schickt Bernd eine vertrauliche <strong>und</strong> signierte E-Mail. Gib an, welchen Schlüssel wer wofür verwendet.</p>
        <p>c) Erkläre, warum in der Praxis hybrid verschlüsselt wird.</p>
        <p>d) Auf einer Downloadseite steht ein SHA-256-Wert zur ISO-Datei. Beschreibe, wie du ihn nutzt, und warum ein MD5-Wert nicht mehr genügt.</p>`,
      solution: `<p><strong>a)</strong> Symmetrisch: n × (n − 1) ÷ 2 = 12 × 11 ÷ 2 = <strong>66 Schlüssel</strong>. Asymmetrisch: 2 × n = 2 × 12 = <strong>24 Schlüssel</strong> (12 Schlüsselpaare).</p>
        <p><strong>b)</strong> Signieren: Anna bildet den Hashwert der Mail und signiert ihn mit <strong>ihrem privaten Schlüssel</strong>. Verschlüsseln: Anna verschlüsselt mit <strong>Bernds öffentlichem Schlüssel</strong>. Bernd entschlüsselt mit <strong>seinem privaten Schlüssel</strong> und prüft die Signatur mit <strong>Annas öffentlichem Schlüssel</strong>.</p>
        <p><strong>c)</strong> Asymmetrische Verfahren lösen das Problem der Schlüsselverteilung, sind aber sehr langsam. Symmetrische Verfahren sind schnell, aber der Schlüssel muss sicher zum Partner kommen. Hybrid kombiniert die Vorteile: Die Daten werden mit einem zufälligen Sitzungsschlüssel symmetrisch (z. B. AES) verschlüsselt, nur dieser kurze Schlüssel wird asymmetrisch übertragen bzw. per Diffie-Hellman vereinbart.</p>
        <p><strong>d)</strong> Nach dem Download berechnest du selbst den SHA-256-Wert (<code>Get-FileHash datei.iso</code> bzw. <code>sha256sum datei.iso</code>) und vergleichst ihn mit dem veröffentlichten Wert. Stimmen sie überein, wurde die Datei nicht verändert (Integrität). MD5 ist gebrochen: Man kann gezielt zwei verschiedene Dateien mit gleichem Hash erzeugen (Kollisionen). Eine manipulierte Datei könnte also denselben MD5-Wert haben. Hinweis: Der Hash muss aus einer vertrauenswürdigen Quelle stammen (HTTPS, am besten signiert), sonst kann ein Angreifer ihn mit austauschen.</p>`
    },
    {
      id: "e-zertifikat-fehler",
      topic: "pki-tls",
      title: "Zertifikatsfehler analysieren und Erneuerung planen",
      level: 2,
      task: `<p>Der Helpdesk der <strong>Nordlicht IT GmbH</strong> erhält im September 2026 vier Meldungen:</p>
        <ol>
          <li>Der Browser meldet beim Kundenportal „Zertifikat abgelaufen“.</li>
          <li>Das Zertifikat ist für <code>www.nordlicht-it.de</code> ausgestellt. Wer <code>nordlicht-it.de</code> aufruft, erhält eine Warnung.</li>
          <li>Im Desktop-Browser funktioniert die Seite, eine Smartphone-App meldet aber „Zertifikatskette kann nicht überprüft werden“.</li>
          <li>Das neue Intranet nutzt ein selbst erstelltes Zertifikat, alle Browser warnen.</li>
        </ol>
        <p>a) Nenne jeweils die Ursache und die Lösung.</p>
        <p>b) Wie lange dürfen öffentliche TLS-Zertifikate derzeit höchstens gültig sein und wie entwickelt sich das? Berechne, wie viele Erneuerungen bei einer Laufzeit von 47 Tagen für 30 Server pro Jahr mindestens anfallen, und ziehe eine Schlussfolgerung.</p>
        <p>c) Vergleiche CRL und OCSP.</p>`,
      solution: `<p><strong>a)</strong></p>
        <ol>
          <li>Das Gültigkeitsdatum ist überschritten → Zertifikat erneuern, Ablaufdaten künftig im Monitoring überwachen, Erneuerung automatisieren.</li>
          <li>Der aufgerufene Name steht nicht im Zertifikat (Namensabweichung) → neues Zertifikat mit beiden Namen im <strong>Subject Alternative Name</strong> (nordlicht-it.de und www.nordlicht-it.de) oder Weiterleitung per 301 auf www.</li>
          <li>Der Server liefert nur sein eigenes Zertifikat, aber nicht das der <strong>Intermediate-CA</strong>. Desktop-Browser laden sie teils selbst nach oder haben sie im Cache, die App nicht → vollständige Kette (Serverzertifikat + Intermediate) auf dem Server hinterlegen.</li>
          <li>Ein selbstsigniertes Zertifikat stammt von keiner vertrauenswürdigen CA → Zertifikat von der internen Unternehmens-CA ausstellen lassen und deren Root-Zertifikat per Gruppenrichtlinie in die Trust Stores aller Firmengeräte verteilen.</li>
        </ol>
        <p><strong>b)</strong> Seit dem 15.03.2026 höchstens <strong>200 Tage</strong>, ab 15.03.2027 höchstens 100 Tage, ab 15.03.2029 höchstens 47 Tage. Bei 47 Tagen: 365 ÷ 47 ≈ 7,8 → mindestens <strong>8 Erneuerungen pro Server und Jahr</strong>; 30 Server × 8 = <strong>240 Erneuerungen pro Jahr</strong>. Manuell ist das fehleranfällig und kaum leistbar. Schlussfolgerung: Erneuerung per <strong>ACME</strong> (z. B. certbot, Zertifikatsmanager der Firewall) automatisieren und Ablaufdaten überwachen.</p>
        <p><strong>c)</strong> <strong>CRL</strong>: Die CA veröffentlicht regelmäßig eine Liste aller gesperrten Seriennummern. Der Client lädt die ganze Liste herunter; sie kann groß und bis zur nächsten Veröffentlichung veraltet sein. <strong>OCSP</strong>: Der Client fragt beim OCSP-Responder den Status eines einzelnen Zertifikats in Echtzeit ab (gültig, gesperrt, unbekannt). Das ist aktueller und schlanker, verrät aber dem Responder, welche Seiten besucht werden. Mit <strong>OCSP Stapling</strong> liefert der Server die signierte Antwort gleich im Handshake mit.</p>`
    },
    {
      id: "e-vpn-konzept",
      topic: "vpn",
      title: "VPN-Konzept für Filiale und Homeoffice",
      level: 3,
      task: `<p>Die <strong>Nordlicht IT GmbH</strong> hat ihre Zentrale in Heide (LAN 192.168.10.0/24, Internetanschluss 250 Mbit/s Download / 50 Mbit/s Upload) und übernimmt eine Filiale in Husum (LAN ebenfalls 192.168.10.0/24). Die Filiale soll dauerhaft auf die Server der Zentrale zugreifen. Außerdem arbeiten 25 Beschäftigte regelmäßig im Homeoffice.</p>
        <p>a) Wähle für die Filiale und für das Homeoffice je ein VPN-Modell und begründe.</p>
        <p>b) Die Filiale wird per IPsec angebunden. Erkläre die Aufgaben von IKE und ESP und begründe, welcher Modus verwendet wird. Warum wird AH hier nicht eingesetzt?</p>
        <p>c) Der Tunnel steht laut Firewall, aber kein Server der Zentrale ist aus Husum erreichbar. Nenne die wahrscheinlichste Ursache und zwei Lösungen.</p>
        <p>d) Für das Homeoffice wird ein Full Tunnel geplant. In Spitzenzeiten nutzen alle 25 Personen gleichzeitig Videokonferenzen im Internet und empfangen dabei je 6 Mbit/s (den eigenen Sendestrom vernachlässigst du zunächst). Prüfe rechnerisch, ob der Anschluss der Zentrale reicht, und schlage eine Lösung vor.</p>
        <p>e) Vergleiche WireGuard und ein TLS-VPN für das Homeoffice und erläutere, wie du MFA einbindest.</p>`,
      solution: `<p><strong>a)</strong> Filiale: <strong>Site-to-Site-VPN</strong> zwischen den Firewalls beider Standorte. Der Tunnel steht dauerhaft, die Clients brauchen keine VPN-Software. Homeoffice: <strong>Remote-Access-VPN (End-to-Site)</strong>. Jedes Notebook baut mit einem VPN-Client einen Tunnel zum Gateway der Zentrale auf, jeder Benutzer wird einzeln authentifiziert.</p>
        <p><strong>b)</strong> <strong>IKE</strong> (UDP 500, bei NAT UDP 4500) handelt die Verfahren aus (Verschlüsselung, Hash, DH-Gruppe, Lebensdauer), authentifiziert die Gateways per Pre-Shared Key oder Zertifikat und erzeugt per Diffie-Hellman die Schlüssel für die Security Associations. <strong>ESP</strong> (IP-Protokoll 50) verschlüsselt die Nutzdaten und sichert ihre Integrität und Authentizität. Verwendet wird der <strong>Tunnelmodus</strong>: Das komplette Originalpaket mit den internen Adressen wird verschlüsselt und bekommt einen neuen IP-Header mit den öffentlichen Adressen der Gateways. Das ist bei Gateway-zu-Gateway-Verbindungen nötig und verbirgt die interne Adressierung. <strong>AH</strong> verschlüsselt nicht (keine Vertraulichkeit) und sichert Teile des äußeren IP-Headers. Da NAT diese Felder ändert, ist AH nicht NAT-tauglich.</p>
        <p><strong>c)</strong> Beide Standorte nutzen <strong>dasselbe Netz 192.168.10.0/24</strong>. Ein Client in Husum hält 192.168.10.x für lokal, sucht die Ziel-MAC per ARP im eigenen Netz und schickt nichts an das Gateway bzw. in den Tunnel. Lösungen: (1) Filiale <strong>umnummerieren</strong> (z. B. 192.168.20.0/24) – sauberste Lösung, (2) <strong>NAT im Tunnel</strong> (die Netze werden gegenseitig auf ein anderes Netz abgebildet) als Übergang.</p>
        <p><strong>d)</strong> Bedarf: 25 × 6 Mbit/s = <strong>150 Mbit/s</strong>. Im Full Tunnel läuft der Internetverkehr der Homeoffice-Nutzer über die Zentrale: Die Daten kommen aus dem Internet herein (Download 250 Mbit/s, reicht) und müssen durch den Tunnel wieder hinaus zu den Nutzern (Upload nur 50 Mbit/s). 150 Mbit/s &gt; 50 Mbit/s → der <strong>Upload ist der Engpass</strong>. Kommt der eigene Sendestrom der Teilnehmer (ebenfalls einige Mbit/s) hinzu, läuft er vom Homeoffice in die Zentrale (Download) und weiter ins Internet (Upload) – bei 6 Mbit/s wären es je Richtung bis zu 300 Mbit/s, dann reicht auch der Download nicht mehr. Lösung: <strong>Split Tunneling</strong> für vertrauenswürdige Cloud- und Konferenzdienste (nur Firmennetze durch den Tunnel), abgesichert durch Endpoint-Schutz auf den Notebooks, oder symmetrischen Anschluss mit höherem Upload (z. B. Glasfaser 500/500) buchen.</p>
        <p><strong>e)</strong> <strong>WireGuard</strong>: sehr schnell, schlanker Code, einfache Konfiguration, stabil bei Netzwechsel. Nachteile: keine eingebaute Benutzeranmeldung, Schlüsselverwaltung für viele Geräte nötig. <strong>TLS-VPN</strong>: läuft über Port 443 auch aus Hotel- und Gäste-WLANs, bindet Benutzer über RADIUS/AD an, Zugriffe lassen sich pro Anwendung steuern. Nachteil: meist herstellerspezifischer Client, etwas mehr Overhead. MFA: Das VPN-Gateway fragt über <strong>RADIUS</strong> bzw. SAML den Identitätsdienst ab, der neben dem Passwort einen zweiten Faktor verlangt (TOTP-App, Push mit Number Matching, FIDO2) oder man nutzt Maschinenzertifikate plus Benutzeranmeldung mit MFA. Bei WireGuard wird MFA über eine vorgeschaltete Verwaltungslösung ergänzt.</p>`
    },
    {
      id: "e-8021x-wlan",
      topic: "authentifizierung",
      title: "Mitarbeiter-WLAN mit 802.1X und RADIUS",
      level: 2,
      task: `<p>Der <strong>Förde Pflegedienst in Rendsburg</strong> (80 Beschäftigte) nutzt bisher ein WLAN mit WPA2-Personal und einem Passwort, das alle kennen. Künftig soll sich jede Person einzeln anmelden. Pflegekräfte sollen in VLAN 30, die Verwaltung in VLAN 20 landen.</p>
        <p>a) Nenne die drei Rollen bei IEEE 802.1X, ordne ihnen konkrete Geräte zu und beschreibe den Ablauf einer Anmeldung.</p>
        <p>b) Vergleiche EAP-TLS und PEAP und gib eine Empfehlung.</p>
        <p>c) Erkläre, wie die beiden Gruppen automatisch im richtigen VLAN landen.</p>
        <p>d) Die Netzwerkdrucker beherrschen kein 802.1X. Schlage eine Lösung vor und nenne deren Schwäche.</p>
        <p>e) Begründe zwei Vorteile von WPA3-Enterprise gegenüber dem bisherigen WPA2-Personal.</p>
        <p>f) Ein Notebook mit defekter Uhr (12 Minuten Abweichung) kann sich nicht mehr an der Domäne anmelden. Erkläre die Ursache.</p>`,
      solution: `<p><strong>a)</strong> <strong>Supplicant</strong> = 802.1X-Client auf Notebook bzw. Tablet; <strong>Authenticator</strong> = Access Point bzw. WLAN-Controller; <strong>Authentication Server</strong> = RADIUS-Server (z. B. Microsoft NPS), der gegen das Active Directory prüft. Ablauf: Das Gerät verbindet sich mit der SSID, zunächst ist nur EAP-Verkehr erlaubt. Der AP fordert die Identität an und leitet die EAP-Nachrichten per RADIUS (UDP 1812) an den Server weiter. Nach erfolgreicher Prüfung sendet der RADIUS-Server „Access-Accept“ mit Schlüsselmaterial, der AP gibt den Zugang frei, und es wird ein individueller Sitzungsschlüssel verwendet.</p>
        <p><strong>b)</strong> <strong>EAP-TLS</strong>: Client und Server weisen sich mit Zertifikaten aus. Es gibt keine Passwörter, die abgefangen werden können, damit ist es am sichersten. Nachteil: Jedes Gerät braucht ein Zertifikat (PKI, automatische Verteilung per GPO/MDM). <strong>PEAP</strong>: Nur der Server hat ein Zertifikat, der Benutzer meldet sich im TLS-Tunnel mit Benutzername und Passwort an. Einfacher einzuführen, aber anfällig, wenn Clients das Serverzertifikat nicht prüfen (gefälschter AP sammelt Anmeldedaten). Empfehlung: <strong>EAP-TLS</strong> für verwaltete Firmengeräte; PEAP höchstens übergangsweise mit strikter Zertifikatsprüfung.</p>
        <p><strong>c)</strong> Durch <strong>dynamische VLAN-Zuweisung</strong>: Der RADIUS-Server prüft die AD-Gruppenmitgliedschaft (z. B. „Pflege“ oder „Verwaltung“) und sendet im Access-Accept die VLAN-ID als RADIUS-Attribut (30 bzw. 20). Der Access Point ordnet die Verbindung diesem VLAN zu. Alle nutzen dieselbe SSID.</p>
        <p><strong>d)</strong> Die Drucker werden per <strong>MAC Authentication Bypass (MAB)</strong> zugelassen: Der Switch meldet die MAC-Adresse an den RADIUS-Server, der sie mit einer Liste abgleicht und den Port in ein eigenes, eingeschränktes Drucker-VLAN legt. Schwäche: MAC-Adressen lassen sich fälschen. Deshalb bekommt das Drucker-VLAN per Firewall nur die nötigen Verbindungen (Druckserver → Drucker auf Port 9100/631).</p>
        <p><strong>e)</strong> (1) <strong>Persönliche Anmeldung</strong>: Verlässt jemand das Unternehmen oder geht ein Gerät verloren, wird nur dieses Konto bzw. Zertifikat gesperrt. Bisher müsste das gemeinsame Passwort auf allen Geräten geändert werden. (2) <strong>Individuelle Sitzungsschlüssel</strong> und Nachvollziehbarkeit: Wer das gemeinsame Passwort kennt, kann den Verkehr anderer nicht mehr entschlüsseln; jede Anmeldung ist einer Person zugeordnet (Accounting). Außerdem schreibt WPA3 PMF vor und schützt so vor gefälschten Deauthentication-Frames.</p>
        <p><strong>f)</strong> Die Domänenanmeldung nutzt <strong>Kerberos</strong>. Tickets enthalten Zeitstempel. Standardmäßig darf die Uhr des Clients höchstens <strong>5 Minuten</strong> von der des Domänencontrollers abweichen, sonst lehnt der KDC die Anfrage ab (Schutz vor Replay-Angriffen). Bei 12 Minuten Abweichung scheitert die Anmeldung. Lösung: Uhrzeit per NTP bzw. Domänenhierarchie synchronisieren, CMOS-Batterie tauschen.</p>`
    },
    {
      id: "e-mail-dns",
      topic: "wlan-email",
      title: "E-Mail-Spoofing mit SPF, DKIM und DMARC verhindern",
      level: 2,
      task: `<p>Kunden der <strong>Nordlicht IT GmbH</strong> erhalten gefälschte Mails von <code>rechnung@nordlicht-it.de</code> mit Schadsoftware im Anhang. Die Firma verschickt ihre Mails ausschließlich über <code>mail.nordlicht-it.de</code> (203.0.113.25) und Newsletter über einen Dienstleister, der den SPF-Baustein <code>include:_spf.newsletter.example</code> vorgibt.</p>
        <p>a) Erstelle einen passenden SPF-Eintrag und erkläre den Unterschied zwischen <code>-all</code> und <code>~all</code>.</p>
        <p>b) Erkläre die Funktionsweise von DKIM und wo der öffentliche Schlüssel veröffentlicht wird.</p>
        <p>c) Gib einen DMARC-Eintrag an, der nicht bestandene Mails in Quarantäne schickt und Berichte an <code>dmarc@nordlicht-it.de</code> sendet. Beschreibe eine sinnvolle Einführung in Schritten.</p>
        <p>d) Eine Anwaltskanzlei verlangt, dass Vertragsentwürfe nur Ende-zu-Ende-verschlüsselt verschickt werden. Begründe, warum SPF, DKIM und DMARC dafür nicht reichen, und schlage ein Verfahren vor.</p>`,
      solution: `<p><strong>a)</strong> <code>nordlicht-it.de. TXT "v=spf1 ip4:203.0.113.25 include:_spf.newsletter.example -all"</code> (statt der IP ginge auch <code>a:mail.nordlicht-it.de</code> oder <code>mx</code>, falls der MX-Server auch sendet). <code>-all</code> (Fail): Mails von allen anderen Servern sollen abgelehnt werden. <code>~all</code> (Softfail): Sie werden angenommen, aber als verdächtig markiert – sinnvoll während der Einführung.</p>
        <p><strong>b)</strong> Der sendende Mailserver bildet einen Hash über ausgewählte Header (z. B. From, Subject, Date) und den Inhalt und signiert ihn mit dem <strong>privaten DKIM-Schlüssel</strong>. Die Signatur steht im Header <code>DKIM-Signature</code> mit Domain (d=) und Selektor (s=). Der empfangende Server holt den <strong>öffentlichen Schlüssel</strong> aus dem DNS unter <code>selektor._domainkey.nordlicht-it.de</code> (TXT) und prüft die Signatur. So erkennt er, ob die Mail tatsächlich von einem berechtigten Server der Domain stammt und unterwegs nicht verändert wurde.</p>
        <p><strong>c)</strong> <code>_dmarc.nordlicht-it.de. TXT "v=DMARC1; p=quarantine; rua=mailto:dmarc@nordlicht-it.de"</code>. DMARC wertet SPF und DKIM aus und verlangt, dass die geprüfte Domain zur sichtbaren From-Adresse passt. Einführung: (1) SPF und DKIM für alle legitimen Versender einrichten, (2) DMARC mit <code>p=none</code> und Berichten starten und einige Wochen auswerten, (3) vergessene Versender (Ticketsystem, Buchhaltungssoftware) ergänzen, (4) auf <code>p=quarantine</code>, später auf <code>p=reject</code> verschärfen.</p>
        <p><strong>d)</strong> SPF, DKIM und DMARC schützen nur vor <strong>gefälschten Absendern</strong> (Authentizität der Domain), sie verschlüsseln keinen Inhalt. TLS zwischen Mailservern verschlüsselt nur die Transportstrecken, auf den Servern liegt die Mail im Klartext. Für Ende-zu-Ende-Verschlüsselung eignet sich im Geschäftsumfeld <strong>S/MIME</strong>: Beide Seiten besitzen X.509-Zertifikate einer vertrauenswürdigen CA. Die Kanzlei verschlüsselt mit dem öffentlichen Schlüssel aus dem Zertifikat des Empfängers und signiert mit ihrem privaten Schlüssel. Alternativ OpenPGP mit Fingerprint-Abgleich.</p>`
    },
    {
      id: "e-verfuegbarkeit",
      topic: "hochverfuegbarkeit",
      title: "Verfügbarkeit eines Webshops berechnen und verbessern",
      level: 3,
      task: `<p>Der Webshop der <strong>Nordlicht IT GmbH</strong> ist so aufgebaut (alle Komponenten sind für den Betrieb nötig, redundante Teile arbeiten unabhängig):</p>
        <table><thead><tr><th>Stufe</th><th>Komponenten</th><th>Verfügbarkeit je Komponente</th></tr></thead><tbody>
        <tr><td>1</td><td>2 Internetanschlüsse verschiedener Provider (einer genügt)</td><td>99,5 %</td></tr>
        <tr><td>2</td><td>Firewall-Cluster aus 2 Firewalls (eine genügt)</td><td>99,9 %</td></tr>
        <tr><td>3</td><td>1 Load Balancer</td><td>99,95 %</td></tr>
        <tr><td>4</td><td>2 Webserver (einer trägt die Last allein)</td><td>99 %</td></tr>
        <tr><td>5</td><td>1 Datenbankserver</td><td>99,9 %</td></tr>
        </tbody></table>
        <p>a) Berechne die Verfügbarkeit jeder Stufe.</p>
        <p>b) Berechne die Gesamtverfügbarkeit und die erwartete Ausfallzeit pro Jahr.</p>
        <p>c) Der Kunde verlangt im SLA 99,9 %. Prüfe, ob die Anforderung erfüllt ist.</p>
        <p>d) Nenne die Single Points of Failure. Die Datenbank wird durch einen Cluster aus 2 Servern mit je 99,9 % ersetzt. Berechne die neue Gesamtverfügbarkeit und Ausfallzeit.</p>
        <p>e) Berechne zusätzlich das Ergebnis, wenn auch der Load Balancer als Paar (je 99,95 %) ausgelegt wird.</p>
        <p>f) Erläutere, warum die Annahme „unabhängige Komponenten“ in der Praxis überprüft werden muss.</p>`,
      hints: ["Parallel: A = 1 − (1 − A₁) × (1 − A₂)", "Serie: alle Stufen multiplizieren", "Ausfallzeit = (1 − A) × 8.760 h"],
      solution: `<p><strong>a)</strong></p>
        <ul>
          <li>Stufe 1: 1 − (1 − 0,995)² = 1 − 0,005² = 1 − 0,000025 = <strong>0,999975</strong> (99,9975 %)</li>
          <li>Stufe 2: 1 − 0,001² = 1 − 0,000001 = <strong>0,999999</strong> (99,9999 %)</li>
          <li>Stufe 3: <strong>0,9995</strong></li>
          <li>Stufe 4: 1 − 0,01² = 1 − 0,0001 = <strong>0,9999</strong> (99,99 %)</li>
          <li>Stufe 5: <strong>0,999</strong></li>
        </ul>
        <p><strong>b)</strong> A = 0,999975 × 0,999999 × 0,9995 × 0,9999 × 0,999 ≈ <strong>0,998375 = 99,84 %</strong>.<br>Ausfallzeit = (1 − 0,998375) × 8.760 h ≈ 0,001625 × 8.760 h ≈ <strong>14,24 h pro Jahr</strong> (etwa 14 h 14 min).</p>
        <p><strong>c)</strong> 99,84 % &lt; 99,9 %. Erlaubt wären (1 − 0,999) × 8.760 h = 8,76 h pro Jahr, erwartet werden 14,24 h → <strong>SLA nicht erfüllt</strong>.</p>
        <p><strong>d)</strong> SPOFs: <strong>Load Balancer</strong> und <strong>Datenbankserver</strong> (jeweils nur einmal vorhanden). Datenbank-Cluster: 1 − 0,001² = 0,999999.<br>A = 0,999975 × 0,999999 × 0,9995 × 0,9999 × 0,999999 ≈ <strong>0,999373 = 99,94 %</strong>.<br>Ausfallzeit ≈ (1 − 0,999373) × 8.760 h ≈ <strong>5,49 h pro Jahr</strong> → SLA 99,9 % jetzt erfüllt.</p>
        <p><strong>e)</strong> Load-Balancer-Paar: 1 − 0,0005² = 0,99999975.<br>A = 0,999975 × 0,999999 × 0,99999975 × 0,9999 × 0,999999 ≈ <strong>0,999873 = 99,987 %</strong>.<br>Ausfallzeit ≈ (1 − 0,999873) × 8.760 h ≈ 1,11 h ≈ <strong>67 min pro Jahr</strong>. Jetzt begrenzen die Webserver-Stufe (99,99 %) und die Provider die Verfügbarkeit.</p>
        <p><strong>f)</strong> Die Parallelformel setzt voraus, dass die redundanten Komponenten <strong>nicht gleichzeitig</strong> aus derselben Ursache ausfallen. In der Praxis gibt es gemeinsame Ursachen: beide Internetleitungen im selben Kabelschacht (Bagger), beide Firewalls am selben Stromkreis oder mit demselben fehlerhaften Update, beide Webserver auf demselben Virtualisierungshost oder im selben Brandabschnitt. Dann ist die tatsächliche Verfügbarkeit deutlich schlechter als berechnet. Deshalb getrennte Trassen, A/B-Stromversorgung, gestaffelte Updates und Verteilung auf verschiedene Hosts bzw. Räume einplanen.</p>`
    },
    {
      id: "e-cluster-lb",
      topic: "hochverfuegbarkeit",
      title: "Cluster und Load Balancer richtig einsetzen",
      level: 1,
      task: `<p>Die <strong>Nordlicht IT GmbH</strong> plant ihre Serverlandschaft neu.</p>
        <p>a) Unterscheide einen Aktiv/Passiv- von einem Aktiv/Aktiv-Cluster und nenne je einen Vor- und Nachteil.</p>
        <p>b) Drei Webserver im Aktiv/Aktiv-Betrieb sind in der Spitzenlast je zu 70 % ausgelastet. Prüfe rechnerisch, ob der Betrieb beim Ausfall eines Servers weiterläuft, und ermittle, wie viele Server für N+1 nötig sind.</p>
        <p>c) Wähle jeweils ein Verteilverfahren für den Load Balancer: (1) Server mit unterschiedlicher Leistung, (2) Anfragen mit sehr unterschiedlich langer Dauer, (3) ein alter Webshop speichert den Warenkorb nur lokal auf dem jeweiligen Server.</p>
        <p>d) Erkläre die Aufgabe von Health Checks und das Problem „Split Brain“.</p>`,
      solution: `<p><strong>a)</strong> <strong>Aktiv/Passiv</strong>: Ein Knoten arbeitet, der zweite übernimmt erst bei einem Ausfall (Failover). Vorteil: einfach, der Standby-Knoten hat sicher genug Reserven. Nachteil: Die Hardware des passiven Knotens bleibt ungenutzt, beim Umschalten gibt es eine kurze Unterbrechung. <strong>Aktiv/Aktiv</strong>: Alle Knoten arbeiten und teilen sich die Last. Vorteil: Ressourcen werden voll genutzt, mehr Gesamtleistung. Nachteil: Beim Ausfall müssen die übrigen Knoten die gesamte Last tragen, dafür muss man Reserve einplanen; die Datenhaltung ist komplexer.</p>
        <p><strong>b)</strong> Gesamtlast: 3 × 70 % = 210 % einer Serverkapazität. Beim Ausfall eines Servers: 210 % ÷ 2 = <strong>105 %</strong> je verbleibendem Server → Überlast, der Dienst wird langsam oder fällt aus. Mit 4 Servern (N+1): Bei Ausfall eines Servers tragen 3 Server die Last: 210 % ÷ 3 = <strong>70 %</strong> → ausreichend. Es werden also <strong>4 Server</strong> benötigt.</p>
        <p><strong>c)</strong> (1) <strong>Weighted Round Robin</strong> – stärkere Server erhalten entsprechend ihrer Gewichtung mehr Anfragen. (2) <strong>Least Connections</strong> – neue Anfragen gehen an den Server mit den wenigsten aktiven Verbindungen. (3) <strong>Session-Persistenz</strong> („Sticky Sessions“, z. B. per IP-Hash oder Cookie), damit ein Kunde immer beim selben Server landet. Besser wäre langfristig ein gemeinsamer Session-Speicher.</p>
        <p><strong>d)</strong> <strong>Health Checks</strong>: Der Load Balancer prüft regelmäßig (z. B. HTTP-Abfrage einer Statusseite), ob jeder Server korrekt antwortet. Ein fehlerhafter Server wird automatisch aus dem Pool genommen und nach Erholung wieder aufgenommen. <strong>Split Brain</strong>: Fällt nur die Heartbeat-Verbindung zwischen zwei Clusterknoten aus, hält sich jeder für den einzig aktiven und greift z. B. gleichzeitig schreibend auf die Daten zu → Datenkorruption. Gegenmaßnahmen: redundante Heartbeat-Leitungen und ein <strong>Quorum</strong> mit Zeugen-Instanz (Witness), das entscheidet, welcher Knoten aktiv bleiben darf.</p>`
    },
    {
      id: "e-cvss-patch",
      topic: "schwachstellen-haertung",
      title: "Scan-Ergebnisse priorisieren und Pentest vorbereiten",
      level: 2,
      task: `<p>Ein authentifizierter Schwachstellenscan bei der <strong>Nordlicht IT GmbH</strong> liefert:</p>
        <table><thead><tr><th>Nr.</th><th>System</th><th>CVSS</th><th>Kontext</th></tr></thead><tbody>
        <tr><td>1</td><td>VPN-Gateway der Firewall</td><td>9,8</td><td>aus dem Internet erreichbar, Lücke wird laut BSI aktiv ausgenutzt</td></tr>
        <tr><td>2</td><td>Intranet-Webserver</td><td>7,5</td><td>nur aus dem LAN erreichbar, kein Exploit bekannt</td></tr>
        <tr><td>3</td><td>Webmail auf dem Mail-Relay (DMZ)</td><td>6,1</td><td>aus dem Internet erreichbar, Proof of Concept veröffentlicht</td></tr>
        <tr><td>4</td><td>PDF-Reader auf 240 Clients</td><td>8,8</td><td>Ausnutzung durch präparierte PDF-Anhänge in Phishing-Mails beobachtet</td></tr>
        <tr><td>5</td><td>Testserver im Labor</td><td>9,1</td><td>vom Firmennetz physisch getrennt</td></tr>
        </tbody></table>
        <p>a) Ordne jedem Befund die CVSS-Einstufung zu.</p>
        <p>b) Lege eine begründete Reihenfolge der Behebung fest.</p>
        <p>c) Beschreibe den Patchprozess für Befund 4.</p>
        <p>d) Für Befund 1 gibt es noch keinen Patch. Nenne drei Sofortmaßnahmen.</p>
        <p>e) Die Geschäftsleitung beauftragt einen externen Penetrationstest. Nenne drei Punkte, die vorher schriftlich festgelegt werden müssen, und unterscheide Black-Box- und White-Box-Test.</p>`,
      solution: `<p><strong>a)</strong> 1: 9,8 → Critical; 2: 7,5 → High; 3: 6,1 → Medium; 4: 8,8 → High; 5: 9,1 → Critical.</p>
        <p><strong>b)</strong> (1) <strong>VPN-Gateway</strong> sofort (Notfall-Change, noch am selben Tag): kritisch, aus dem Internet erreichbar, aktiv ausgenutzt. (2) <strong>PDF-Reader</strong> innerhalb weniger Tage: hoch, wird bereits ausgenutzt und betrifft viele Geräte. (3) <strong>Webmail</strong> im nächsten kurzfristigen Wartungsfenster: zwar nur mittel, aber öffentlich erreichbar und ein Proof of Concept existiert. (4) <strong>Intranet-Webserver</strong> im regulären Patchzyklus: hoch, aber nur intern erreichbar und ohne bekannten Exploit. (5) <strong>Testserver</strong> zuletzt: trotz 9,1 kaum Risiko, da isoliert; vor einer erneuten Netzanbindung patchen. Begründung: Neben dem CVSS-Wert zählen Erreichbarkeit, aktive Ausnutzung und Anzahl bzw. Wichtigkeit der Systeme.</p>
        <p><strong>c)</strong> Update beim Hersteller beziehen und die Beschreibung prüfen → auf Testgeräten bzw. in einer Pilotgruppe (z. B. IT-Abteilung) installieren und die Funktion wichtiger Anwendungen testen → Change freigeben → Verteilung über die Softwareverteilung (z. B. Intune) in Wellen an alle 240 Clients → Compliance-Bericht prüfen, fehlende Geräte nacharbeiten → dokumentieren. Zusätzlich die Beschäftigten vor den Phishing-Mails warnen.</p>
        <p><strong>d)</strong> Betroffene Funktion (z. B. das Webportal des VPN) abschalten oder den Zugriff auf bekannte IP-Bereiche beschränken, vom Hersteller empfohlene Workarounds umsetzen, IPS-Signaturen aktivieren, Logs rückwirkend auf Kompromittierung prüfen (Indicators of Compromise), Zugangsdaten der VPN-Nutzer zurücksetzen, MFA erzwingen, Überwachung verstärken.</p>
        <p><strong>e)</strong> Schriftlich festzulegen: <strong>Auftrag und Genehmigung</strong> durch die berechtigte Stelle (Geschäftsleitung), <strong>Umfang</strong> (welche Systeme, IP-Bereiche, welche Methoden, z. B. kein DoS, kein Social Engineering), <strong>Zeitfenster</strong>, <strong>Ansprechpartner und Notfallabbruch</strong>, Vertraulichkeit und Umgang mit gefundenen Daten, Form des Berichts. Black Box: Die Tester erhalten keine Informationen und gehen vor wie ein externer Angreifer – realistisch, aber weniger gründlich. White Box: Die Tester erhalten volle Informationen (Netzpläne, Konfigurationen, Zugänge) – die Prüfung ist gründlicher und effizienter.</p>`
    },
    {
      id: "e-mdm-byod",
      topic: "endgeraete-mdm",
      title: "Smartphones der Servicetechniker mit MDM absichern",
      level: 3,
      task: `<p>Die <strong>Husumer Windpark Service GmbH</strong> (150 Beschäftigte) wartet Windkraftanlagen an der Westküste. 60 Servicetechniker sollen unterwegs auf Aufträge, E-Mails und Anlagendokumentationen zugreifen. Die Geschäftsleitung schlägt vor, dass die Techniker dafür ihre privaten Smartphones nutzen (BYOD). Die Nordlicht IT GmbH soll ein Konzept mit Mobile Device Management erstellen.</p>
        <p>a) Nenne fünf Funktionen eines MDM, die für dieses Szenario wichtig sind, und begründe jede kurz.</p>
        <p>b) Vergleiche BYOD und COPE anhand von vier Kriterien und gib eine begründete Empfehlung.</p>
        <p>c) Ein Techniker meldet am Abend, dass sein Smartphone im Zug liegen geblieben ist. Beschreibe die nötigen Schritte. Unterscheide dabei Full Wipe und Selective Wipe und begründe, welches Verfahren bei BYOD zulässig ist.</p>
        <p>d) Das MDM kann den Standort der Geräte erfassen. Erläutere, was vor der Einführung arbeits- und datenschutzrechtlich zu beachten ist.</p>
        <p>e) Jeder Techniker erhält zusätzlich ein Tablet. Angebot: Gerätelizenz 4,00 € pro Gerät und Monat oder Benutzerlizenz 7,00 € pro Benutzer und Monat (bis zu 5 Geräte). Berechne die Jahreskosten beider Modelle für 60 Techniker mit je Smartphone und Tablet und bestimme, ab wie vielen Geräten die Benutzerlizenz günstiger ist.</p>`,
      hints: ["Denke an Verlust, veraltete Geräte, Zugang zu Mail und WLAN, private Daten.", "Gleichstand: Anzahl Geräte × Gerätepreis = Anzahl Benutzer × Benutzerpreis."],
      solution: `<p><strong>a)</strong> Zum Beispiel:</p>
        <ul>
          <li><strong>Richtlinien erzwingen</strong> (Geräte-PIN, Bildschirmsperre, Verschlüsselung): Auf den Geräten liegen Kundendaten und Anlagendokumentationen, bei Verlust darf niemand darauf zugreifen.</li>
          <li><strong>Container bzw. Arbeitsprofil</strong>: trennt Firmendaten von privaten Daten, verhindert das Kopieren in private Apps und ermöglicht eine selektive Löschung.</li>
          <li><strong>App-Verwaltung</strong>: Auftrags- und Dokumentations-App automatisch verteilen und aktualisieren, riskante Apps im Container sperren.</li>
          <li><strong>Compliance-Prüfung mit Conditional Access</strong>: Geräte mit Jailbreak/Root oder veraltetem Betriebssystem erhalten keinen Zugriff auf Mail und Firmendaten.</li>
          <li><strong>Fernsperre und Fernlöschung</strong>: Techniker sind viel unterwegs, Verluste sind wahrscheinlich.</li>
          <li>Außerdem sinnvoll: automatische Einrichtung von E-Mail- und VPN-Profilen, Update-Vorgaben, Inventar.</li>
        </ul>
        <p><strong>b)</strong></p>
        <table><thead><tr><th>Kriterium</th><th>BYOD</th><th>COPE</th></tr></thead><tbody>
        <tr><td>Kosten</td><td>keine Anschaffung, evtl. Zuschuss an die Beschäftigten</td><td>Anschaffung und Tarife trägt die Firma</td></tr>
        <tr><td>Kontrolle und Sicherheit</td><td>nur im Container, viele verschiedene, teils veraltete Geräte</td><td>volle Kontrolle, einheitliche Modelle, Mindeststandard sicher</td></tr>
        <tr><td>Datenschutz</td><td>private Daten müssen geschützt bleiben, nur selektive Löschung</td><td>klare Trennung per Arbeitsprofil, Full Wipe bei Verlust möglich</td></tr>
        <tr><td>Verlust, Haftung, Austritt</td><td>Haftung und Rückgabe der Firmendaten ungeklärt, Regelung nötig</td><td>Gerät wird zurückgegeben und zurückgesetzt</td></tr>
        </tbody></table>
        <p>Empfehlung: <strong>COPE</strong>. Die Techniker arbeiten mit Kundendaten und sicherheitsrelevanten Anlagendaten (Energieversorgung, hoher Schutzbedarf). Einheitliche Firmengeräte lassen sich vollständig verwalten, bei Verlust komplett löschen, und die Haftungsfragen entfallen. Die erlaubte private Nutzung im getrennten Bereich erhöht die Akzeptanz.</p>
        <p><strong>c)</strong> (1) Techniker meldet den Verlust sofort über die Notfallnummer bzw. den Service Desk. (2) Gerät per MDM <strong>sperren</strong> und, falls in der Betriebsvereinbarung erlaubt, orten. (3) Zugänge sichern: Passwort zurücksetzen, Anmelde-Token und Zertifikate widerrufen. (4) Wird das Gerät nicht gefunden: löschen. (5) Vorfall dokumentieren und prüfen, ob eine Datenschutzverletzung vorliegt (bei verschlüsseltem, gesperrtem Gerät meist kein Risiko → keine Meldung an das ULD nötig, aber interne Dokumentation nach Art. 33 Abs. 5 DSGVO).<br><strong>Full Wipe</strong> setzt das gesamte Gerät auf Werkseinstellungen zurück, alle privaten Daten gehen verloren. <strong>Selective Wipe</strong> löscht nur den Container mit Firmendaten und Firmen-Apps. Bei BYOD ist nur der <strong>Selective Wipe</strong> angemessen: Das Gerät gehört dem Beschäftigten, die Firma darf nicht in seine privaten Daten eingreifen.</p>
        <p><strong>d)</strong> Arbeitsrechtlich: Das MDM mit Ortungsfunktion ist eine technische Einrichtung, die geeignet ist, Verhalten oder Leistung zu überwachen. Der <strong>Betriebsrat</strong> hat nach § 87 Abs. 1 Nr. 6 BetrVG ein Mitbestimmungsrecht, also ist eine <strong>Betriebsvereinbarung</strong> nötig (Zweck, erfasste Daten, Ortung nur bei gemeldetem Verlust, keine Leistungskontrolle, Zugriffsberechtigte, Speicherdauer). Datenschutzrechtlich: Zweck und Rechtsgrundlage festlegen, nur erforderliche Daten erheben (Datenminimierung), Beschäftigte informieren (Art. 13 DSGVO), Eintrag im Verzeichnis der Verarbeitungstätigkeiten, bei einem Cloud-MDM einen <strong>AV-Vertrag</strong> nach Art. 28 DSGVO abschließen, Löschfristen festlegen.</p>
        <p><strong>e)</strong> 60 Techniker × 2 Geräte = 120 Geräte.<br>Gerätelizenz: 120 × 4,00 € × 12 = <strong>5.760 €/Jahr</strong>.<br>Benutzerlizenz: 60 × 7,00 € × 12 = <strong>5.040 €/Jahr</strong> → die Benutzerlizenz ist um 720 € pro Jahr günstiger.<br>Gleichstand: Geräte × 4,00 € = 60 × 7,00 € = 420 € → Geräte = 420 € ÷ 4,00 € = 105. Bei genau 105 Geräten kosten beide Modelle gleich viel, ab <strong>106 Geräten</strong> ist die Benutzerlizenz günstiger. (Nur Smartphones, also 60 Geräte: 60 × 4,00 € × 12 = 2.880 € → dann wäre die Gerätelizenz günstiger.)</p>`
    },
    {
      id: "e-bia-rto",
      topic: "notfall-betrieb",
      title: "Business Impact Analyse auswerten",
      level: 3,
      task: `<p>Die Business Impact Analyse der <strong>Nordlicht IT GmbH</strong> ergab:</p>
        <table><thead><tr><th>Prozess</th><th>MTPD</th><th>RTO</th><th>RPO</th><th>Sicherung heute</th><th>Wiederherstellung heute</th></tr></thead><tbody>
        <tr><td>Webshop/Auftragsannahme</td><td>8 h</td><td>4 h</td><td>15 min</td><td>Vollsicherung täglich 22 Uhr auf LTO-Band</td><td>Ersatzhardware laut Wartungsvertrag in 8 h, danach Restore von 1,5 TiB vom Band mit 300 MB/s</td></tr>
        <tr><td>Lohnabrechnung</td><td>5 Tage</td><td>3 Tage</td><td>24 h</td><td>täglich 23 Uhr auf NAS</td><td>6 h</td></tr>
        <tr><td>E-Mail</td><td>24 h</td><td>8 h</td><td>4 h</td><td>Snapshots alle 4 h</td><td>3 h</td></tr>
        </tbody></table>
        <p>a) Erkläre MTPD, RTO und RPO und ihren Zusammenhang.</p>
        <p>b) Berechne die Wiederherstellungszeit des Webshops und prüfe für alle Prozesse, ob RTO und RPO eingehalten werden.</p>
        <p>c) Schlage Maßnahmen vor, damit der Webshop die Anforderungen erfüllt.</p>
        <p>d) Nach einem Brand müssen alle Systeme neu aufgebaut werden. Lege eine Wiederherstellungsreihenfolge fest und begründe sie.</p>
        <p>e) Nenne fünf Inhalte des Notfallhandbuchs und begründe, warum es auch gedruckt vorliegen muss.</p>`,
      hints: ["1,5 TiB = 1,5 × 2⁴⁰ Byte; 300 MB/s = 300 × 10⁶ Byte/s", "Bei täglicher Sicherung können im schlimmsten Fall fast 24 h Daten fehlen."],
      solution: `<p><strong>a)</strong> <strong>MTPD</strong> (maximal tolerierbare Ausfallzeit): Nach dieser Zeit wird der Schaden für das Unternehmen untragbar. <strong>RTO</strong> (Wiederanlaufzeit): Zeit, bis der Prozess wieder mindestens im Notbetrieb läuft. <strong>RPO</strong>: maximal tolerierbarer Datenverlust als Zeitspanne vor dem Ausfall. Zusammenhang: RTO muss kleiner als MTPD sein (Puffer für Unvorhergesehenes). Das RPO bestimmt, wie oft gesichert oder repliziert werden muss.</p>
        <p><strong>b)</strong> Restore Webshop: 1,5 × 2⁴⁰ Byte = 1.649.267.441.664 Byte; ÷ 300.000.000 Byte/s ≈ 5.498 s ≈ 91,6 min ≈ <strong>1,53 h</strong>. Gesamt: 8 h (Hardware) + 1,53 h ≈ <strong>9,53 h</strong>.</p>
        <table><thead><tr><th>Prozess</th><th>RTO-Prüfung</th><th>RPO-Prüfung</th></tr></thead><tbody>
        <tr><td>Webshop</td><td>9,53 h &gt; 4 h → <strong>nicht erfüllt</strong>, sogar MTPD 8 h überschritten</td><td>bis fast 24 h Verlust &gt; 15 min → <strong>nicht erfüllt</strong></td></tr>
        <tr><td>Lohnabrechnung</td><td>6 h &lt; 3 Tage → erfüllt</td><td>tägliche Sicherung → max. 24 h → erfüllt (ohne Puffer)</td></tr>
        <tr><td>E-Mail</td><td>3 h &lt; 8 h → erfüllt</td><td>Snapshots alle 4 h → max. 4 h → erfüllt (ohne Puffer)</td></tr>
        </tbody></table>
        <p><strong>c)</strong> Für das RPO: Datenbank <strong>replizieren</strong> auf einen Standby-Server (möglichst an einem zweiten Standort) oder Transaktionsprotokolle mindestens alle 15 min sichern. Für das RTO: Webshop <strong>virtualisieren</strong> und im HA-Cluster betreiben, Replikat der VM auf zweitem Host bzw. zweitem Standort vorhalten, Ersatzhardware vor Ort statt 8-h-Wartungsvertrag, Wiederherstellung von Festplatte statt Band, regelmäßige Wiederherstellungstests. Das Band bleibt als Offline-Kopie für die 3-2-1-Regel und gegen Ransomware.</p>
        <p><strong>d)</strong> (1) Strom, Klima, Netzwerk und Firewall – ohne sie läuft nichts. (2) Active Directory mit DNS und Zeitdienst – Anmeldung und Namensauflösung werden von allen Diensten benötigt. (3) Datenbankserver des Webshops, (4) Webshop-Anwendung – kürzeste MTPD (8 h). (5) E-Mail (MTPD 24 h). (6) Lohnabrechnung (MTPD 5 Tage). Die Reihenfolge ergibt sich aus technischen Abhängigkeiten und der Priorität laut BIA.</p>
        <p><strong>e)</strong> Zum Beispiel: Alarmierungs- und Eskalationsplan, Kontaktliste (Notfallstab, Dienstleister, Versicherung, Behörden), Sofortmaßnahmen je Szenario, Geschäftsfortführungspläne für den Notbetrieb, Wiederanlauf- und Wiederherstellungspläne mit Reihenfolge, Netzpläne und Zugangsdaten-Verweise, Kommunikationsplan für Kunden und Presse. Gedruckt bzw. offline, weil bei einem IT-Ausfall (Ransomware, Brand, Stromausfall) die digitalen Ablagen selbst nicht erreichbar sein können.</p>`
    },
    {
      id: "e-sla-change",
      topic: "notfall-betrieb",
      title: "SLA auswerten, Changes einordnen, Ransomware-Ablauf ordnen",
      level: 2,
      task: `<p>Die <strong>Nordlicht IT GmbH</strong> betreut das Warenwirtschaftssystem der <strong>Friesenhof Agrar eG in Niebüll</strong>. Laut SLA gilt: Servicezeit Mo–Fr 6–20 Uhr, Verfügbarkeit 99,8 % pro Monat, Wartungsfenster donnerstags 20–22 Uhr. Im September (22 Arbeitstage) gab es drei Ausfälle: Dienstag 10:15–11:00 Uhr, Samstag 3 h, Donnerstag 20:30–21:30 Uhr (geplantes Update).</p>
        <p>a) Berechne die Servicezeit des Monats, die zulässige Ausfallzeit und die tatsächliche Verfügbarkeit. Wurde das SLA eingehalten?</p>
        <p>b) Nenne vier Punkte, die vor Arbeiten im Wartungsfenster erledigt sein müssen.</p>
        <p>c) Ordne als Standard-, Normal- oder Emergency-Change ein: (1) monatliches Client-Update nach eingespieltem, freigegebenem Verfahren, (2) neue Firewall-Regel für eine neue Branchensoftware, (3) Notfall-Patch für eine aktiv ausgenutzte Lücke im VPN-Gateway.</p>
        <p>d) Bringe die Schritte bei einem Ransomware-Befall in eine sinnvolle Reihenfolge: Lessons Learned durchführen · betroffene Systeme vom Netz trennen · Vorfall erkennen und über die Notfallnummer melden · Systeme aus unveränderlichem Backup wiederherstellen · Beweise sichern und Meldepflichten prüfen · Einfallstor schließen und Passwörter ändern.</p>`,
      solution: `<p><strong>a)</strong> Servicezeit: 14 h × 22 Tage = <strong>308 h</strong> = 18.480 min. Zulässiger Ausfall: 308 h × (1 − 0,998) = 308 h × 0,002 = 0,616 h ≈ <strong>36,96 min</strong>. Angerechnet wird nur der Ausfall am Dienstag (45 min), denn Samstag liegt außerhalb der Servicezeit und das Update am Donnerstag im vereinbarten Wartungsfenster. Tatsächliche Verfügbarkeit: (18.480 − 45) ÷ 18.480 ≈ 0,99756 = <strong>99,76 %</strong> &lt; 99,8 % → <strong>SLA verletzt</strong> (45 min &gt; 36,96 min). Mögliche Folge: Vertragsstrafe bzw. Gutschrift laut SLA.</p>
        <p><strong>b)</strong> Change beantragt und genehmigt; Kunde und Anwender rechtzeitig informiert; aktuelles Backup bzw. Snapshot erstellt und Wiederherstellbarkeit geprüft; Durchführungs- und Testplan sowie <strong>Rückfallplan</strong> (Rollback) mit Abbruchkriterium liegen vor; Zuständige und Erreichbarkeit (auch des Herstellers) geklärt; Dokumentation vorbereitet.</p>
        <p><strong>c)</strong> (1) <strong>Standard-Change</strong>: wiederkehrend, risikoarm, vorab genehmigtes Verfahren. (2) <strong>Normal-Change</strong>: muss einzeln bewertet und vom Change Advisory Board bzw. Verantwortlichen genehmigt werden. (3) <strong>Emergency-Change</strong>: sofort nötig, verkürzte Genehmigung durch ein Notfallgremium, Dokumentation wird nachgeholt.</p>
        <p><strong>d)</strong> 1. Vorfall erkennen und über die Notfallnummer melden → 2. betroffene Systeme vom Netz trennen (nicht ausschalten) → 3. Beweise sichern und Meldepflichten prüfen (bei personenbezogenen Daten ULD binnen 72 h, bei NIS2-Pflicht BSI-Frühwarnung binnen 24 h) → 4. Einfallstor schließen und Passwörter ändern → 5. Systeme aus unveränderlichem Backup wiederherstellen → 6. Lessons Learned durchführen. Das Einfallstor muss vor der Wiederherstellung geschlossen sein, sonst verschlüsseln die Angreifer die frisch wiederhergestellten Systeme erneut.</p>`
    },
  ],
  quiz: [
    { id: "q-isms-1", topic: "isms-risiko", type: "single", exam: ["AP1", "AP2"],
      q: "Welche Beschreibung trifft auf ein ISMS zu?",
      options: ["Ein Managementsystem aus Regeln, Rollen und Prozessen, mit dem Informationssicherheit dauerhaft geplant, umgesetzt, geprüft und verbessert wird", "Eine Software, die Angriffe im Netzwerk automatisch erkennt und blockiert", "Ein Verzeichnis aller Verarbeitungstätigkeiten mit personenbezogenen Daten", "Ein einmaliges Audit, nach dem ein Unternehmen dauerhaft als sicher gilt"],
      answer: 0,
      explain: "Ein ISMS (z. B. nach ISO 27001 oder BSI 200-1) ist ein Managementsystem, das im PDCA-Zyklus läuft. Eine Software, die Angriffe blockiert, ist ein IPS. Das Verzeichnis der Verarbeitungstätigkeiten fordert die DSGVO (Art. 30). Ein einmaliges Audit reicht nie, denn Sicherheit ist ein fortlaufender Prozess." },
    { id: "q-isms-2", topic: "isms-risiko", type: "single",
      q: "Ein Unternehmen schließt eine Cyberversicherung ab, um die finanziellen Folgen eines Ransomware-Angriffs abzufedern. Welche Strategie der Risikobehandlung ist das?",
      options: ["Risiko vermeiden", "Risiko reduzieren", "Risiko übertragen", "Risiko akzeptieren"],
      answer: 2,
      explain: "Mit einer Versicherung werden die finanziellen Folgen auf einen Dritten übertragen. Vermeiden hieße, die riskante Tätigkeit aufzugeben. Reduzieren senkt Wahrscheinlichkeit oder Schaden (z. B. Backups, EDR). Akzeptieren heißt, das Risiko bewusst selbst zu tragen." },
    { id: "q-isms-3", topic: "isms-risiko", type: "input",
      q: "Ein Vorfall verursacht einen Schaden von 15.000 € (SLE). Er tritt erwartungsgemäß 0,4-mal pro Jahr auf (ARO). Wie hoch ist die ALE in Euro pro Jahr?",
      answer: ["6000", "6.000", "6000 €", "6.000 €", "6000 Euro", "6.000 Euro"],
      explain: "ALE = SLE × ARO = 15.000 € × 0,4 = 6.000 € pro Jahr. Eine Schutzmaßnahme lohnt sich rechnerisch, wenn sie die ALE um mehr senkt, als sie jährlich kostet." },
    { id: "q-isms-4", topic: "isms-risiko", type: "multi",
      q: "Welche Aussagen zu Standards der Informationssicherheit sind richtig?",
      options: ["BSI-Standard 200-3 beschreibt die Risikoanalyse", "BSI-Standard 200-4 behandelt das Business Continuity Management", "BSI-Standard 200-2 beschreibt die IT-Grundschutz-Methodik", "ISO/IEC 27002 ist die zertifizierbare Anforderungsnorm für ein ISMS", "BSI-Standard 200-1 ist ein Prüfkatalog speziell für Cloud-Anbieter"],
      answer: [0, 1, 2],
      explain: "200-1 = ISMS-Anforderungen, 200-2 = Grundschutz-Methodik, 200-3 = Risikoanalyse, 200-4 = BCM. Zertifizierbar ist ISO/IEC 27001; ISO 27002 ist nur der Umsetzungsleitfaden. Der Cloud-Kriterienkatalog des BSI heißt C5." },
    { id: "q-isms-5", topic: "isms-risiko", type: "tf",
      q: "Überträgt ein Unternehmen ein Risiko auf eine Versicherung, trägt es für einen Datenschutzverstoß keine rechtliche Verantwortung mehr.",
      answer: false,
      explain: "Übertragen wird nur der finanzielle Schaden. Die Verantwortung nach DSGVO bzw. BSIG bleibt beim Unternehmen und seiner Geschäftsleitung, ebenso wie Meldepflichten und mögliche Bußgelder." },
    { id: "q-isms-6", topic: "isms-risiko", type: "single",
      q: "Was ist mit dem Begriff „relative Sicherheit“ im Rahmenlehrplan gemeint?",
      options: ["Vollständige Sicherheit ist nicht erreichbar; angestrebt wird ein dem Schutzbedarf und den Kosten angemessenes Niveau mit bewusst getragenem Restrisiko", "Ein System ist nur sicher, wenn es im Vergleich zu den Mitbewerbern die meisten Sicherheitsprodukte einsetzt", "Sicherheit wird ausschließlich relativ zur Verfügbarkeit gemessen", "Sicherheitsmaßnahmen gelten nur für einen festgelegten Zeitraum und müssen dann entfernt werden"],
      answer: 0,
      explain: "Kein System ist absolut sicher. Maßnahmen werden so gewählt, dass ihre Kosten zum Risiko passen, und das verbleibende Restrisiko wird dokumentiert und von der Leitung akzeptiert. Viele Produkte bedeuten nicht automatisch Sicherheit." },
    { id: "q-isms-7", topic: "isms-risiko", type: "single",
      q: "Ein SIEM wertet Protokolle aus und alarmiert das Admin-Team bei einem verdächtigen Anmeldemuster. Zu welcher Maßnahmenart gehört diese Funktion?",
      options: ["detektiv (erkennend)", "präventiv (vorbeugend)", "korrektiv (wiederherstellend)", "Risikoübertragung"],
      answer: 0,
      explain: "Das SIEM verhindert den Angriff nicht, sondern macht ihn sichtbar – also eine erkennende (detektive) Maßnahme. Präventiv wären z. B. MFA oder Patches, korrektiv ein Restore aus dem Backup. Risikoübertragung ist eine Strategie der Risikobehandlung (z. B. Versicherung), keine Maßnahmenart." },
    { id: "q-recht-1", topic: "recht-compliance", type: "single",
      q: "Innerhalb welcher Frist muss eine Datenschutzverletzung nach Art. 33 DSGVO der Aufsichtsbehörde gemeldet werden?",
      options: ["24 Stunden", "48 Stunden", "72 Stunden", "7 Tage"],
      answer: 2,
      explain: "Art. 33 DSGVO verlangt die Meldung möglichst binnen 72 Stunden nach Bekanntwerden. Die 24 Stunden gehören zur Frühwarnung an das BSI nach NIS2 – eine häufige Verwechslung." },
    { id: "q-recht-2", topic: "recht-compliance", type: "single",
      q: "Eine NIS2-pflichtige Einrichtung bemerkt einen erheblichen Sicherheitsvorfall. Was ist der erste Meldeschritt?",
      options: ["Frühwarnung an das BSI binnen 24 Stunden", "Meldung an die Datenschutzaufsicht binnen 72 Stunden", "Information der IHK binnen einer Woche", "Meldung an das BSI erst nach Abschluss der forensischen Analyse"],
      answer: 0,
      explain: "Nach dem neuen BSIG gilt die Stufenfolge 24 h Frühwarnung – 72 h Meldung – Abschlussbericht nach einem Monat, jeweils an das BSI. Die Datenschutzaufsicht ist nur zuständig, wenn personenbezogene Daten betroffen sind (DSGVO). Man wartet nicht auf das Ende der Analyse." },
    { id: "q-recht-3", topic: "recht-compliance", type: "multi",
      q: "Welche Maßnahmen nennt Art. 32 DSGVO ausdrücklich als Beispiele für die Sicherheit der Verarbeitung?",
      options: ["Pseudonymisierung und Verschlüsselung", "Fähigkeit, Verfügbarkeit und Zugang bei einem Zwischenfall rasch wiederherzustellen", "Verfahren zur regelmäßigen Überprüfung der Wirksamkeit der Maßnahmen", "Einholen einer Einwilligung aller Beschäftigten", "Veröffentlichung der Firewall-Regeln auf der Firmenwebsite"],
      answer: [0, 1, 2],
      explain: "Art. 32 nennt u. a. Pseudonymisierung, Verschlüsselung, Vertraulichkeit, Integrität, Verfügbarkeit und Belastbarkeit, rasche Wiederherstellung sowie regelmäßige Überprüfung. Eine Einwilligung ist eine Rechtsgrundlage (Art. 6), keine Sicherheitsmaßnahme. Firewall-Regeln zu veröffentlichen schadet der Sicherheit." },
    { id: "q-recht-4", topic: "recht-compliance", type: "tf",
      q: "Die Einführung eines SIEM, das Anmeldungen der Beschäftigten auswertet, unterliegt der Mitbestimmung des Betriebsrats.",
      answer: true,
      explain: "Nach § 87 Abs. 1 Nr. 6 BetrVG bestimmt der Betriebsrat bei technischen Einrichtungen mit, die geeignet sind, Verhalten oder Leistung zu überwachen. Es kommt auf die Eignung an, nicht auf die Absicht. Üblich ist eine Betriebsvereinbarung." },
    { id: "q-recht-5", topic: "recht-compliance", type: "single",
      q: "Ab welcher Größe gilt ein Unternehmen aus einem von NIS2 erfassten Sektor in der Regel mindestens als „wichtige Einrichtung“?",
      options: ["ab 10 Beschäftigten", "ab 50 Beschäftigten oder mehr als 10 Mio. € Jahresumsatz und Bilanzsumme", "erst ab 250 Beschäftigten", "nur wenn es als KRITIS-Betreiber eingestuft ist"],
      answer: 1,
      explain: "NIS2 knüpft an die EU-Definition mittlerer Unternehmen an: ab 50 Beschäftigten oder über 10 Mio. € Umsatz und Bilanzsumme. Ab 250 Beschäftigten (bzw. über 50 Mio. € Umsatz und 43 Mio. € Bilanz) sind Einrichtungen in den Sektoren mit hoher Kritikalität „besonders wichtig“. KRITIS-Betreiber sind nur ein Teil der Betroffenen." },
    { id: "q-recht-6", topic: "recht-compliance", type: "single",
      q: "Ein Fingerabdruckleser am Serverraum lässt gelegentlich Unberechtigte hinein. Welche Kennzahl ist zu hoch?",
      options: ["FAR (False Acceptance Rate)", "FRR (False Rejection Rate)", "MTTR (Mean Time to Repair)", "RPO (Recovery Point Objective)"],
      answer: 0,
      explain: "Die FAR gibt an, wie oft Unberechtigte fälschlich akzeptiert werden – das ist das Sicherheitsproblem. Die FRR misst, wie oft Berechtigte abgewiesen werden (Komfortproblem). Beide Raten hängen über die Empfindlichkeit zusammen: Senkt man die eine, steigt meist die andere. MTTR und RPO gehören zur Verfügbarkeit bzw. Datensicherung." },
    { id: "q-recht-7", topic: "recht-compliance", type: "input",
      q: "Ein Compliance-Bericht zeigt 400 verwaltete Geräte, davon 36 nicht konform. Wie hoch ist die Compliance-Quote in Prozent?",
      answer: ["91", "91 %", "91%", "91 Prozent"],
      explain: "Konforme Geräte: 400 − 36 = 364. Quote = 364 ÷ 400 = 0,91 = 91 %. Liegt die Vorgabe z. B. bei 98 %, müssen die Abweichungen nach Risiko priorisiert behoben werden." },
    { id: "q-recht-8", topic: "recht-compliance", type: "single",
      q: "Ein Maschinenbauunternehmen (Sektor der Anlage 2 des BSIG) hat 400 Beschäftigte und 90 Mio. € Umsatz. Wie ist es nach den NIS2-Regeln einzustufen?",
      options: ["Als wichtige Einrichtung", "Als besonders wichtige Einrichtung", "Gar nicht, weil Maschinenbau nicht erfasst ist", "Automatisch als Betreiber einer kritischen Anlage (KRITIS)"],
      answer: 0,
      explain: "Für Sektoren der Anlage 2 („sonstige kritische Sektoren“, z. B. verarbeitendes Gewerbe) gibt es nur die Kategorie „wichtige Einrichtung“ – auch bei großen Unternehmen. Besonders wichtig sind vor allem große Unternehmen in Sektoren der Anlage 1 (z. B. Energie, Gesundheit) sowie KRITIS-Betreiber. Maschinenbau ist als Teil des verarbeitenden Gewerbes erfasst." },
    { id: "q-bed-1", topic: "bedrohungen", type: "single",
      q: "Welche Switch-Funktion schützt am direktesten vor ARP-Poisoning?",
      options: ["Dynamic ARP Inspection", "BPDU Guard", "Link Aggregation (LACP)", "Spanning Tree PortFast"],
      answer: 0,
      explain: "DAI prüft ARP-Pakete an nicht vertrauenswürdigen Ports gegen die DHCP-Snooping-Bindungstabelle und verwirft gefälschte Zuordnungen. BPDU Guard schützt Spanning Tree, LACP bündelt Leitungen, PortFast beschleunigt nur den Portstart." },
    { id: "q-bed-2", topic: "bedrohungen", type: "single",
      q: "Was bewirkt ein erfolgreicher MAC-Flooding-Angriff auf einen Switch?",
      options: ["Die MAC-Tabelle läuft über, der Switch flutet Frames an alle Ports und der Angreifer kann fremden Verkehr mitlesen", "Der Switch vergibt falsche IP-Adressen an alle Clients", "Der Angreifer wird zur Root Bridge im Spanning Tree", "Die VLAN-Tags aller Frames werden gelöscht"],
      answer: 0,
      explain: "Bei voller MAC-Tabelle kann der Switch unbekannte Ziele nicht zuordnen und flutet sie wie ein Hub. Falsche IP-Adressen verteilt ein Rogue-DHCP-Server, die Root-Bridge-Übernahme ist ein STP-Angriff. Gegenmaßnahme gegen MAC-Flooding: Port Security." },
    { id: "q-bed-3", topic: "bedrohungen", type: "multi",
      q: "Welche Maßnahmen helfen gegen VLAN-Hopping?",
      options: ["Endgeräteports fest als Access-Port konfigurieren und DTP abschalten", "Das native VLAN auf eine ungenutzte VLAN-ID legen", "VLAN 1 nicht für Benutzer oder Verwaltung verwenden", "Alle Ports auf „dynamic desirable“ stellen", "Die SSID des WLANs verstecken"],
      answer: [0, 1, 2],
      explain: "Switch Spoofing nutzt die automatische Trunk-Aushandlung (DTP) – deshalb Ports fest auf Access. Double Tagging nutzt das native VLAN – deshalb eine ungenutzte ID als natives VLAN und VLAN 1 meiden. „dynamic desirable“ fördert gerade die Trunk-Bildung, eine versteckte SSID hat mit VLANs nichts zu tun." },
    { id: "q-bed-4", topic: "bedrohungen", type: "single",
      q: "Welche Maßnahme verhindert SQL-Injection in einer Webanwendung an der Ursache?",
      options: ["Prepared Statements (parametrisierte Abfragen)", "Ein größerer Datenbankserver", "Die Datenbank auf einen anderen Port verlegen", "Ein RAID 1 für die Datenbankdateien"],
      answer: 0,
      explain: "Bei Prepared Statements werden Benutzereingaben immer als Daten und nie als SQL-Code behandelt. Ergänzend helfen Eingabevalidierung, minimale Datenbankrechte und eine WAF. Mehr Leistung, ein anderer Port oder RAID ändern nichts an der Lücke." },
    { id: "q-bed-5", topic: "bedrohungen", type: "tf",
      q: "Im Port-Security-Verletzungsmodus „protect“ wird jeder Verstoß per Syslog gemeldet und gezählt.",
      answer: false,
      explain: "„protect“ verwirft Frames unbekannter MAC-Adressen still, ohne Meldung und ohne Zähler. Melden und zählen tut „restrict“, „shutdown“ legt den Port zusätzlich lahm (err-disabled)." },
    { id: "q-bed-6", topic: "bedrohungen", type: "single",
      q: "Mit DHCP-Snooping soll ein Rogue-DHCP-Server verhindert werden. Welcher Port wird als „trusted“ konfiguriert?",
      options: ["Der Uplink in Richtung des legitimen DHCP-Servers", "Alle Ports mit Endgeräten", "Nur der Port, an dem der Drucker hängt", "Kein Port – DHCP-Snooping arbeitet ohne vertrauenswürdige Ports"],
      answer: 0,
      explain: "DHCP-Angebote (Offer/Ack) sind nur über vertrauenswürdige Ports erlaubt – das ist der Weg zum echten DHCP-Server bzw. der Uplink. An Endgeräteports werden sie verworfen. Ohne einen trusted Port käme gar keine DHCP-Antwort mehr an." },
    { id: "q-seg-1", topic: "segmentierung-dmz", type: "single",
      q: "Wo platzierst du einen Webserver, der aus dem Internet erreichbar sein muss?",
      options: ["In der DMZ", "Im Client-VLAN", "Im Management-Netz", "Im Server-VLAN mit Portweiterleitung vom Router"],
      answer: 0,
      explain: "Öffentlich erreichbare Dienste gehören in die DMZ. Wird der Server übernommen, trennt die Firewall ihn weiterhin vom internen Netz. Eine Portweiterleitung ins interne Server-VLAN würde Angreifern nach einer Übernahme direkten Zugriff auf interne Systeme geben." },
    { id: "q-seg-2", topic: "segmentierung-dmz", type: "single",
      q: "Welcher Vorteil spricht für eine zweistufige DMZ mit Firewalls verschiedener Hersteller?",
      options: ["Ein Angreifer muss zwei unabhängige Systeme überwinden; eine Herstellerlücke allein reicht nicht", "Sie ist günstiger als eine einstufige DMZ", "Sie macht Updates der Firewalls überflüssig", "Sie verdoppelt automatisch die Internetbandbreite"],
      answer: 0,
      explain: "Zwei Firewalls verschiedener Hersteller bedeuten zwei unabhängige Hürden (Defense in Depth). Die Lösung ist teurer und aufwendiger als eine einstufige DMZ, Updates bleiben nötig, und die Bandbreite hängt vom Internetanschluss ab." },
    { id: "q-seg-3", topic: "segmentierung-dmz", type: "single",
      q: "Welche Aufgabe gehört typischerweise zu einem Reverse Proxy?",
      options: ["TLS-Terminierung und Lastverteilung vor internen Webservern", "URL-Filterung für das Surfen der Beschäftigten", "Vergabe von IP-Adressen an Clients", "Zwischenspeichern von Internetseiten für die Clients im LAN"],
      answer: 0,
      explain: "Ein Reverse Proxy steht vor den eigenen Servern und nimmt Anfragen aus dem Internet an: TLS-Terminierung, Lastverteilung, Caching, WAF, Verbergen der Backends. URL-Filter und Zwischenspeichern für die Clients sind Aufgaben eines Forward-Proxys, IP-Vergabe macht DHCP." },
    { id: "q-seg-4", topic: "segmentierung-dmz", type: "tf",
      q: "Aus der DMZ sollten beliebige Verbindungen ins LAN erlaubt sein, damit die Webserver problemlos auf interne Datenbanken zugreifen können.",
      answer: false,
      explain: "Die DMZ ist die Zone mit dem höchsten Angriffsrisiko. Verbindungen von dort ins LAN werden grundsätzlich verboten und nur als eng begrenzte Ausnahmen erlaubt (bestimmter Server, bestimmter Port). Sonst wäre die DMZ wirkungslos." },
    { id: "q-seg-5", topic: "segmentierung-dmz", type: "multi",
      q: "Welche Vorteile bietet die Segmentierung eines Firmennetzes in Zonen?",
      options: ["Sie erschwert die laterale Bewegung von Angreifern", "Sie verkleinert Broadcast-Domänen", "Sie ermöglicht fein abgestufte Zugriffsregeln zwischen den Zonen", "Sie ersetzt das Patchmanagement", "Sie macht Verschlüsselung überflüssig"],
      answer: [0, 1, 2],
      explain: "Segmentierung begrenzt Schäden, reduziert Broadcasts und erlaubt Regeln je Zonenübergang. Sie ist aber nur eine Schicht der Verteidigung: Patches und Verschlüsselung bleiben notwendig." },
    { id: "q-fw-1", topic: "firewalls", type: "single",
      q: "Was unterscheidet eine Stateful-Inspection-Firewall von einem einfachen Paketfilter?",
      options: ["Sie führt eine Verbindungstabelle und lässt Antwortpakete bestehender Verbindungen automatisch passieren", "Sie prüft zusätzlich den Inhalt jeder Webseite auf Schadcode", "Sie arbeitet ausschließlich mit MAC-Adressen", "Sie benötigt für jede Richtung einer Verbindung eine eigene Regel"],
      answer: 0,
      explain: "Stateful Inspection merkt sich den Zustand jeder Verbindung. Deshalb genügt eine Regel für die Aufbaurichtung. Eine eigene Regel je Richtung braucht gerade der zustandslose Paketfilter. Inhalte prüfen Proxy/ALG, NGFW oder WAF." },
    { id: "q-fw-2", topic: "firewalls", type: "single",
      q: "Regelwerk (first match):<br>1: any → 10.0.0.5, TCP 22, deny<br>2: 10.0.1.0/24 → 10.0.0.5, TCP 22, allow<br>3: any → any, any, deny<br>Was passiert mit einer SSH-Verbindung von 10.0.1.20 zu 10.0.0.5?",
      options: ["Sie wird durch Regel 1 verworfen", "Sie wird durch Regel 2 erlaubt", "Sie wird durch Regel 3 verworfen", "Sie wird erlaubt, weil die spezifischere Regel gewinnt"],
      answer: 0,
      explain: "Bei first match entscheidet die erste passende Regel. Regel 1 passt (Quelle any, Ziel 10.0.0.5, TCP 22) und verwirft die Verbindung, Regel 2 wird nie erreicht (Shadowing). Die spezifischere Regel gewinnt nur, wenn sie weiter oben steht – das ist beim Routing (Longest Prefix Match) anders." },
    { id: "q-fw-3", topic: "firewalls", type: "multi",
      q: "Welche Funktionen kennzeichnen eine Next Generation Firewall (NGFW)?",
      options: ["Anwendungserkennung unabhängig vom verwendeten Port", "Regeln mit Bezug auf Benutzer und Gruppen", "Integriertes Intrusion Prevention System", "Arbeitet ausschließlich auf OSI-Schicht 2", "Ersetzt die Datensicherung"],
      answer: [0, 1, 2],
      explain: "Eine NGFW kombiniert Stateful Inspection mit Deep Packet Inspection, Anwendungs- und Benutzererkennung, IPS und oft TLS-Inspektion. Sie arbeitet über mehrere Schichten (3–7), und mit Datensicherung hat sie nichts zu tun." },
    { id: "q-fw-4", topic: "firewalls", type: "single",
      q: "Wovor schützt eine Web Application Firewall (WAF) vor allem?",
      options: ["Vor Angriffen auf Webanwendungen wie SQL-Injection und Cross-Site-Scripting", "Vor Stromausfällen im Rechenzentrum", "Vor ARP-Spoofing im lokalen Netz", "Vor dem Mitlesen von WLAN-Verkehr"],
      answer: 0,
      explain: "Eine WAF prüft HTTP(S)-Anfragen auf Schicht 7 vor einer Webanwendung und erkennt typische Angriffe (OWASP Top 10). Gegen Stromausfall hilft eine USV, gegen ARP-Spoofing DAI, gegen Mitlesen im WLAN WPA3." },
    { id: "q-fw-5", topic: "firewalls", type: "tf",
      q: "Bei einer Stateful-Inspection-Firewall braucht eine erlaubte ausgehende HTTPS-Verbindung zusätzlich eine eingehende Regel für die Antwortpakete.",
      answer: false,
      explain: "Die Antwortpakete gehören zur bestehenden Verbindung (Zustand „established“) und werden über die Verbindungstabelle automatisch zugelassen. Eine zusätzliche eingehende Regel wäre unnötig und würde die Angriffsfläche vergrößern." },
    { id: "q-fw-6", topic: "firewalls", type: "tf",
      q: "Eine Regel auf der zentralen Netzwerk-Firewall kontrolliert auch den Verkehr zwischen zwei Clients im selben Subnetz, die am selben Switch angeschlossen sind.",
      answer: false,
      explain: "Geräte im selben Subnetz kommunizieren direkt über den Switch, ihre Pakete erreichen die Firewall nie. Wer diesen Verkehr kontrollieren will, braucht getrennte Zonen (VLANs mit Routing über die Firewall), Host-Firewalls oder Mikrosegmentierung." },
    { id: "q-ids-1", topic: "ids-siem", type: "single",
      q: "Worin unterscheidet sich ein IPS von einem IDS?",
      options: ["Das IPS sitzt inline im Datenweg und kann Angriffe aktiv blockieren, das IDS alarmiert nur", "Das IPS arbeitet nur signaturbasiert, das IDS nur anomaliebasiert", "Das IPS schützt nur Hosts, das IDS nur Netzwerke", "Das IPS ist eine Personal Firewall ohne Regelwerk"],
      answer: 0,
      explain: "IDS = Erkennen und Alarmieren (passiv, z. B. am Mirror-Port), IPS = Erkennen und Verhindern (inline). Beide gibt es signatur- und anomaliebasiert sowie als Host- oder Netzvariante." },
    { id: "q-ids-2", topic: "ids-siem", type: "single",
      q: "Was ist ein „False Negative“ bei einem Erkennungssystem?",
      options: ["Ein tatsächlicher Angriff, der nicht erkannt wird", "Ein Alarm, obwohl kein Angriff stattfindet", "Ein Angriff, der korrekt erkannt und blockiert wird", "Ein Logeintrag mit falschem Zeitstempel"],
      answer: 0,
      explain: "False Negative = Angriff ohne Alarm – das gefährlichste Ergebnis, weil niemand reagiert. Ein Alarm ohne Angriff ist ein False Positive. Zu viele False Positives führen dazu, dass Alarme ignoriert werden." },
    { id: "q-ids-3", topic: "ids-siem", type: "input",
      q: "Welche Zahl hat der Syslog-Schweregrad „Warning“?",
      answer: ["4"],
      explain: "Syslog-Schweregrade: 0 Emergency, 1 Alert, 2 Critical, 3 Error, 4 Warning, 5 Notice, 6 Informational, 7 Debug. Je kleiner die Zahl, desto dringender." },
    { id: "q-ids-4", topic: "ids-siem", type: "single",
      q: "Mit welchem Wireshark-Anzeigefilter siehst du nur SYN-Pakete, die eine TCP-Verbindung eröffnen?",
      options: ["tcp.flags.syn==1 &amp;&amp; tcp.flags.ack==0", "tcp.flags.syn==1 &amp;&amp; tcp.flags.ack==1", "arp.opcode==1", "udp.port==53"],
      answer: 0,
      explain: "Das erste Paket des 3-Way-Handshakes hat nur das SYN-Flag gesetzt. SYN + ACK ist die Antwort des Servers. arp.opcode==1 zeigt ARP-Anfragen, udp.port==53 DNS über UDP. Viele SYN an viele Ports deuten auf einen Portscan hin." },
    { id: "q-ids-5", topic: "ids-siem", type: "multi",
      q: "Welche Aufgaben übernimmt ein SIEM?",
      options: ["Logs aus vielen Quellen zentral sammeln", "Ereignisse normalisieren und systemübergreifend korrelieren", "Alarme und Compliance-Berichte erzeugen", "Festplatten der Clients verschlüsseln", "IP-Adressen an Clients vergeben"],
      answer: [0, 1, 2],
      explain: "Ein SIEM sammelt, normalisiert, korreliert, alarmiert und berichtet. Festplattenverschlüsselung ist Aufgabe von BitLocker/LUKS, IP-Vergabe von DHCP." },
    { id: "q-ids-6", topic: "ids-siem", type: "single",
      q: "Welche Aussage zu anomaliebasierter Erkennung ist richtig?",
      options: ["Sie kann auch unbekannte Angriffe erkennen, erzeugt aber tendenziell mehr Fehlalarme", "Sie erkennt nur Angriffe, für die bereits eine Signatur existiert", "Sie benötigt keine Lernphase und keinen Normalzustand", "Sie ist nur für WLANs geeignet"],
      answer: 0,
      explain: "Anomalieerkennung vergleicht mit einem gelernten Normalzustand und meldet Abweichungen – dadurch auch Zero-Day-Angriffe, aber auch ungewöhnliches legitimes Verhalten. Nur bekannte Muster erkennt die signaturbasierte Erkennung." },
    { id: "q-kry-1", topic: "kryptografie", type: "input",
      q: "20 Personen wollen paarweise rein symmetrisch verschlüsselt kommunizieren. Wie viele Schlüssel werden benötigt?",
      answer: ["190", "190 Schlüssel"],
      explain: "n × (n − 1) ÷ 2 = 20 × 19 ÷ 2 = 190. Asymmetrisch wären es nur 2 × 20 = 40 Schlüssel (20 Paare)." },
    { id: "q-kry-2", topic: "kryptografie", type: "single",
      q: "Anna will Bernd eine vertrauliche Datei asymmetrisch verschlüsselt senden. Welchen Schlüssel verwendet sie zum Verschlüsseln?",
      options: ["Bernds öffentlichen Schlüssel", "Bernds privaten Schlüssel", "Annas privaten Schlüssel", "Annas öffentlichen Schlüssel"],
      answer: 0,
      explain: "Für Vertraulichkeit verschlüsselt man mit dem öffentlichen Schlüssel des Empfängers; nur dessen privater Schlüssel kann entschlüsseln. Bernds privaten Schlüssel kennt Anna nicht. Mit dem eigenen privaten Schlüssel wird signiert, nicht verschlüsselt." },
    { id: "q-kry-3", topic: "kryptografie", type: "single",
      q: "Warum arbeiten TLS, S/MIME und PGP hybrid?",
      options: ["Die Daten werden schnell symmetrisch verschlüsselt, der Sitzungsschlüssel wird sicher asymmetrisch übertragen bzw. vereinbart", "Weil asymmetrische Verfahren schneller sind als symmetrische", "Weil symmetrische Verfahren keine Schlüssel benötigen", "Damit die Daten doppelt mit demselben Schlüssel verschlüsselt werden"],
      answer: 0,
      explain: "Hybrid verbindet die Geschwindigkeit symmetrischer Verfahren mit dem einfachen Schlüsselaustausch asymmetrischer Verfahren. Asymmetrische Verfahren sind deutlich langsamer, und auch symmetrische Verfahren brauchen einen Schlüssel." },
    { id: "q-kry-4", topic: "kryptografie", type: "multi",
      q: "Welche Eigenschaften hat eine kryptografische Hashfunktion wie SHA-256?",
      options: ["Aus dem Hashwert lässt sich die Eingabe praktisch nicht zurückberechnen", "Der Hashwert hat immer dieselbe Länge", "Es ist praktisch unmöglich, zwei Eingaben mit gleichem Hashwert zu finden", "Mit dem richtigen Schlüssel lässt sich der Hash wieder entschlüsseln", "Der Hashwert wird länger, je größer die Eingabe ist"],
      answer: [0, 1, 2],
      explain: "Einwegfunktion, feste Ausgabelänge (bei SHA-256 256 Bit) und Kollisionsresistenz sind die Kerneigenschaften. Ein Hash ist keine Verschlüsselung und hat keinen Schlüssel zum Zurückrechnen; die Länge hängt nicht von der Eingabe ab." },
    { id: "q-kry-5", topic: "kryptografie", type: "tf",
      q: "Eine digitale Signatur sorgt dafür, dass der Inhalt einer Nachricht vertraulich bleibt.",
      answer: false,
      explain: "Eine Signatur sichert Integrität, Authentizität und Nichtabstreitbarkeit. Der Inhalt bleibt lesbar. Für Vertraulichkeit muss zusätzlich verschlüsselt werden." },
    { id: "q-kry-6", topic: "kryptografie", type: "single",
      q: "Welches Hashverfahren gilt als gebrochen und sollte nicht mehr für Sicherheitszwecke eingesetzt werden?",
      options: ["MD5", "SHA-256", "SHA3-256", "SHA-512"],
      answer: 0,
      explain: "Für MD5 (und SHA-1) lassen sich gezielt Kollisionen erzeugen. SHA-2 (SHA-256, SHA-512) und SHA-3 gelten als sicher." },
    { id: "q-kry-7", topic: "kryptografie", type: "single", exam: ["AP2"],
      q: "Was leistet ein HMAC, wie er in IPsec und TLS verwendet wird?",
      options: ["Er sichert mit einem gemeinsamen geheimen Schlüssel Integrität und Authentizität einer Nachricht", "Er verschlüsselt die Nachricht asymmetrisch", "Er ersetzt die Zertifikatsprüfung", "Er komprimiert die Nachricht vor dem Versand"],
      answer: 0,
      explain: "Ein HMAC ist ein Hash über Nachricht und geheimen Schlüssel. Nur wer den Schlüssel kennt, kann einen passenden Wert erzeugen – so werden Veränderungen und fremde Absender erkannt. Er verschlüsselt nicht und ersetzt keine Zertifikate." },
    { id: "q-pki-1", topic: "pki-tls", type: "single", exam: ["AP1", "AP2"],
      q: "Was bestätigt eine Zertifizierungsstelle (CA) mit ihrer Signatur auf einem Serverzertifikat?",
      options: ["Dass der enthaltene öffentliche Schlüssel zu dem genannten Namen (z. B. Domain) gehört", "Dass der Server frei von Schwachstellen ist", "Dass der Webseitenbetreiber vertrauenswürdig handelt und keine Schadsoftware verteilt", "Dass die Verbindung eine bestimmte Bandbreite erreicht"],
      answer: 0,
      explain: "Ein Zertifikat bindet einen öffentlichen Schlüssel an eine Identität. Über die Sicherheit des Servers oder die Seriosität des Betreibers sagt es nichts aus – auch Phishing-Seiten haben gültige DV-Zertifikate." },
    { id: "q-pki-2", topic: "pki-tls", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Angaben enthält ein X.509-Serverzertifikat?",
      options: ["Den öffentlichen Schlüssel des Inhabers", "Den Aussteller (Issuer)", "Den Gültigkeitszeitraum", "Die abgedeckten DNS-Namen (Subject Alternative Name)", "Den privaten Schlüssel des Inhabers"],
      answer: [0, 1, 2, 3],
      explain: "Ein Zertifikat enthält u. a. Seriennummer, Aussteller, Gültigkeit, Inhaber bzw. SAN, öffentlichen Schlüssel, Erweiterungen und die Signatur der CA. Der private Schlüssel gehört nie ins Zertifikat – er verlässt den Server nicht." },
    { id: "q-pki-3", topic: "pki-tls", type: "single",
      q: "Eine Website funktioniert im Desktop-Browser, eine Smartphone-App meldet aber „Zertifikatskette unvollständig“. Was ist die wahrscheinlichste Ursache?",
      options: ["Der Server liefert das Zertifikat der Intermediate-CA nicht mit", "Das Zertifikat ist für die falsche IP-Adresse ausgestellt", "Die Root-CA ist abgelaufen", "Die App unterstützt kein IPv6"],
      answer: 0,
      explain: "Desktop-Browser ergänzen fehlende Zwischenzertifikate oft selbst (Cache, Nachladen). Apps und andere Clients prüfen streng. Lösung: Serverzertifikat zusammen mit der Intermediate-Kette hinterlegen. Eine abgelaufene Root-CA würde alle Clients betreffen." },
    { id: "q-pki-4", topic: "pki-tls", type: "single",
      q: "Wie lange darf ein öffentliches TLS-Serverzertifikat nach den Regeln des CA/Browser Forums seit dem 15.03.2026 höchstens gültig sein?",
      options: ["398 Tage", "200 Tage", "90 Tage", "47 Tage"],
      answer: 1,
      explain: "Die Höchstlaufzeit sinkt stufenweise: seit 15.03.2026 200 Tage, ab 15.03.2027 100 Tage, ab 15.03.2029 47 Tage. 398 Tage galten bis März 2026. Deshalb sollte die Erneuerung per ACME automatisiert werden." },
    { id: "q-pki-5", topic: "pki-tls", type: "tf",
      q: "Forward Secrecy bedeutet, dass mitgeschnittene TLS-Sitzungen geschützt bleiben, auch wenn später der private Schlüssel des Servers gestohlen wird.",
      answer: true,
      explain: "Bei ECDHE wird für jede Sitzung ein neuer, flüchtiger Schlüssel vereinbart. Der private Serverschlüssel dient nur zur Authentifizierung (Signatur). TLS 1.3 erzwingt Forward Secrecy." },
    { id: "q-pki-6", topic: "pki-tls", type: "multi",
      q: "Welche Aussagen zur Sperrprüfung von Zertifikaten sind richtig?",
      options: ["Eine CRL ist eine von der CA veröffentlichte Liste gesperrter Zertifikate", "Mit OCSP fragt der Client den Status eines einzelnen Zertifikats online ab", "Beim OCSP Stapling liefert der Server die signierte OCSP-Antwort im Handshake mit", "Eine CRL enthält alle gültigen Zertifikate einer CA", "OCSP erneuert abgelaufene Zertifikate automatisch"],
      answer: [0, 1, 2],
      explain: "CRL = Sperrliste (nur gesperrte Seriennummern), OCSP = Online-Abfrage je Zertifikat, Stapling = Server liefert die Antwort gleich mit. Erneuern übernimmt z. B. ACME, nicht OCSP." },
    { id: "q-vpn-1", topic: "vpn", type: "single",
      q: "Eine Filiale soll dauerhaft und für die Clients unsichtbar mit der Zentrale verbunden werden. Welches VPN-Modell passt?",
      options: ["Site-to-Site", "End-to-Site (Remote Access)", "End-to-End", "Clientloses Webportal-VPN"],
      answer: 0,
      explain: "Beim Site-to-Site-VPN bauen die Gateways beider Standorte den Tunnel auf; Clients brauchen keine VPN-Software. Remote Access ist für einzelne mobile Nutzer gedacht, End-to-End verbindet zwei einzelne Hosts." },
    { id: "q-vpn-2", topic: "vpn", type: "single",
      q: "Welches IPsec-Protokoll verschlüsselt die Nutzdaten?",
      options: ["ESP", "AH", "IKE", "GRE"],
      answer: 0,
      explain: "ESP (Encapsulating Security Payload) verschlüsselt und sichert die Integrität. AH sichert nur Integrität und Authentizität ohne Verschlüsselung. IKE handelt Schlüssel und Parameter aus. GRE ist ein Tunnelprotokoll ohne eigene Verschlüsselung." },
    { id: "q-vpn-3", topic: "vpn", type: "input",
      q: "Welche IP-Protokollnummer hat ESP? (Wichtig für Firewall-Regeln bei IPsec ohne NAT-Traversal)",
      answer: ["50"],
      explain: "ESP ist IP-Protokoll 50, AH ist 51. IKE nutzt UDP 500, mit NAT-Traversal wird ESP in UDP 4500 gekapselt." },
    { id: "q-vpn-4", topic: "vpn", type: "single",
      q: "Was kennzeichnet den IPsec-Tunnelmodus?",
      options: ["Das gesamte Originalpaket wird verschlüsselt und erhält einen neuen IP-Header mit den Gateway-Adressen", "Nur die Nutzdaten werden geschützt, der Original-IP-Header bleibt außen sichtbar", "Es wird nur authentifiziert, aber nie verschlüsselt", "Er funktioniert ausschließlich mit IPv6"],
      answer: 0,
      explain: "Im Tunnelmodus wird das komplette Paket samt internen Adressen eingepackt – typisch für Site-to-Site und Remote Access. Der Transportmodus schützt nur die Nutzdaten und behält den Original-Header (End-to-End). Ob verschlüsselt wird, hängt von ESP/AH ab, nicht vom Modus." },
    { id: "q-vpn-5", topic: "vpn", type: "multi",
      q: "Welche Aussagen zu WireGuard treffen zu?",
      options: ["WireGuard arbeitet über UDP", "Gegenstellen werden über ihre öffentlichen Schlüssel identifiziert", "AllowedIPs legt fest, welche Netze durch den Tunnel geleitet werden", "WireGuard läuft ausschließlich über TCP 443", "WireGuard bringt eine eingebaute Benutzerverwaltung mit MFA mit"],
      answer: [0, 1, 2],
      explain: "WireGuard ist ein schlankes UDP-Protokoll mit festen modernen Algorithmen; Peers sind durch Schlüssel definiert, AllowedIPs steuert das Cryptokey Routing. TCP 443 ist typisch für TLS-VPNs. Benutzeranmeldung und MFA müssen über zusätzliche Verwaltungslösungen ergänzt werden." },
    { id: "q-vpn-6", topic: "vpn", type: "tf",
      q: "Beim Split Tunneling läuft der gesamte Internetverkehr des Clients durch den VPN-Tunnel zur Zentrale.",
      answer: false,
      explain: "Beim Split Tunneling geht nur der Verkehr zu den Firmennetzen durch den Tunnel, der übrige Verkehr direkt ins Internet. Läuft alles durch den Tunnel, spricht man vom Full Tunnel." },
    { id: "q-vpn-7", topic: "vpn", type: "single",
      q: "Auf welcher OSI-Schicht verschlüsselt MACsec (IEEE 802.1AE)?",
      options: ["Schicht 2 (Sicherungsschicht)", "Schicht 3 (Vermittlungsschicht)", "Schicht 4 (Transportschicht)", "Schicht 7 (Anwendungsschicht)"],
      answer: 0,
      explain: "MACsec verschlüsselt Ethernet-Frames auf einer einzelnen Leitung, z. B. zwischen zwei Switches (Hop-by-Hop). IPsec arbeitet auf Schicht 3, TLS oberhalb der Transportschicht. Weil jedes Gerät auf dem Weg entschlüsselt, ersetzt MACsec keine Ende-zu-Ende-Verschlüsselung." },
    { id: "q-auth-1", topic: "authentifizierung", type: "single",
      q: "Welche Rolle übernimmt bei IEEE 802.1X der Switch, an dem das Endgerät angeschlossen ist?",
      options: ["Authenticator", "Supplicant", "Authentication Server", "Certificate Authority"],
      answer: 0,
      explain: "Der Switch bzw. Access Point ist der Authenticator: Er reicht die EAP-Anmeldung an den RADIUS-Server (Authentication Server) weiter und öffnet danach den Port. Der Supplicant ist die Software auf dem Endgerät." },
    { id: "q-auth-2", topic: "authentifizierung", type: "single", exam: ["AP1", "AP2"],
      q: "Welche Kombination ist eine echte Mehr-Faktor-Authentifizierung?",
      options: ["Passwort und Hardware-Sicherheitsschlüssel (FIDO2)", "Passwort und PIN", "Passwort und Sicherheitsfrage", "Zwei verschiedene Passwörter"],
      answer: 0,
      explain: "MFA braucht Faktoren aus verschiedenen Kategorien: Wissen (Passwort) + Besitz (Sicherheitsschlüssel). Passwort, PIN und Sicherheitsfrage gehören alle zur Kategorie Wissen." },
    { id: "q-auth-3", topic: "authentifizierung", type: "single",
      q: "Um wie viel darf die Uhrzeit eines Clients standardmäßig höchstens von der des Domänencontrollers abweichen, damit die Kerberos-Anmeldung funktioniert?",
      options: ["30 Sekunden", "5 Minuten", "15 Minuten", "1 Stunde"],
      answer: 1,
      explain: "Kerberos-Tickets enthalten Zeitstempel zum Schutz vor Replay-Angriffen. Die Standardtoleranz beträgt 5 Minuten. Deshalb müssen alle Systeme per NTP bzw. Domänenhierarchie synchronisiert werden." },
    { id: "q-auth-4", topic: "authentifizierung", type: "multi",
      q: "Welche Anmeldeverfahren gelten als phishing-resistent?",
      options: ["FIDO2-Hardware-Sicherheitsschlüssel", "Passkeys", "Zertifikatsbasierte Smartcard-Anmeldung", "Einmalcode per SMS", "Zeitbasierter Code aus einer Authenticator-App (TOTP)"],
      answer: [0, 1, 2],
      explain: "FIDO2/Passkeys binden die Anmeldung kryptografisch an die echte Domain, Smartcards nutzen einen privaten Schlüssel auf der Karte. Einen SMS- oder TOTP-Code kann ein Opfer dagegen auf einer gefälschten Seite eintippen, die ihn sofort weiterverwendet." },
    { id: "q-auth-5", topic: "authentifizierung", type: "tf",
      q: "Nach dem Zero-Trust-Prinzip gelten Geräte im internen Firmennetz grundsätzlich als vertrauenswürdig.",
      answer: false,
      explain: "Zero Trust heißt „Never trust, always verify“: Der Netzstandort allein begründet kein Vertrauen. Jeder Zugriff wird anhand von Identität, Gerätezustand und Kontext geprüft, und man geht davon aus, dass Angreifer bereits im Netz sein könnten (Assume Breach)." },
    { id: "q-auth-6", topic: "authentifizierung", type: "multi",
      q: "Welche Aussagen zu RADIUS und TACACS+ sind richtig?",
      options: ["RADIUS nutzt UDP 1812 für die Authentifizierung und 1813 für Accounting", "TACACS+ verschlüsselt den gesamten Paketinhalt", "TACACS+ nutzt TCP Port 49", "RADIUS verschlüsselt das gesamte Paket", "TACACS+ ist nur für die Anmeldung von WLAN-Clients vorgesehen"],
      answer: [0, 1, 2],
      explain: "RADIUS (UDP 1812/1813) verschlüsselt nur das Passwortattribut und wird vor allem für den Netzzugang (802.1X, VPN, WLAN) genutzt. TACACS+ (TCP 49) verschlüsselt alles, trennt AAA und dient vor allem der Administratoranmeldung an Netzgeräten mit Befehlsautorisierung." },
    { id: "q-auth-7", topic: "authentifizierung", type: "single",
      q: "Was leistet eine Network Access Control (NAC) über eine reine 802.1X-Anmeldung hinaus?",
      options: ["Sie prüft zusätzlich den Zustand des Geräts (z. B. Patchstand, Virenschutz) und verschiebt nicht konforme Geräte in ein Quarantäne-VLAN", "Sie verschlüsselt den gesamten Datenverkehr im LAN", "Sie ersetzt den DHCP-Server", "Sie beschleunigt die Anmeldung, indem sie auf Passwörter verzichtet"],
      answer: 0,
      explain: "NAC kombiniert Identitätsprüfung mit einer Prüfung des Gerätezustands (Posture). Nicht konforme Geräte erhalten nur eingeschränkten Zugang zur Nachbesserung. Verschlüsselung im LAN leistet z. B. MACsec, Adressvergabe DHCP." },
    { id: "q-wlan-1", topic: "wlan-email", type: "single",
      q: "Welche Neuerung von WPA3-Personal verhindert, dass ein mitgeschnittener Handshake offline per Wörterbuch angegriffen werden kann?",
      options: ["SAE (Simultaneous Authentication of Equals)", "TKIP", "WPS", "Versteckte SSID"],
      answer: 0,
      explain: "SAE ersetzt den Pre-Shared-Key-Handshake von WPA2 und liefert zudem Forward Secrecy. TKIP ist das veraltete Verfahren von WPA, WPS ist selbst eine Schwachstelle, und eine versteckte SSID schützt nicht." },
    { id: "q-wlan-2", topic: "wlan-email", type: "single",
      q: "Was ist ein wesentlicher Vorteil von WPA3-Enterprise gegenüber WPA3-Personal in einem Unternehmen?",
      options: ["Jede Person meldet sich einzeln an; verlässt jemand die Firma, wird nur sein Konto gesperrt", "Es benötigt keinen RADIUS-Server", "Alle nutzen dasselbe Passwort, das leicht zu verteilen ist", "Es funktioniert nur im 2,4-GHz-Band"],
      answer: 0,
      explain: "Enterprise nutzt 802.1X mit RADIUS: persönliche Anmeldung, individuelle Schlüssel, Nachvollziehbarkeit, gezieltes Sperren. Ein gemeinsames Passwort ist gerade das Merkmal von Personal. Enterprise braucht einen RADIUS-Server und funktioniert in allen Bändern." },
    { id: "q-wlan-3", topic: "wlan-email", type: "tf",
      q: "Eine versteckte SSID schützt ein WLAN wirksam vor Angreifern.",
      answer: false,
      explain: "Die SSID steht weiterhin in den Probe-Anfragen der Clients und lässt sich leicht mitlesen. Wirksam sind WPA3 bzw. WPA2 mit starker Authentifizierung, am besten Enterprise mit 802.1X." },
    { id: "q-wlan-4", topic: "wlan-email", type: "single",
      q: "Wie heißt der Angriff, bei dem ein Angreifer über eine Bluetooth-Schwachstelle unbemerkt Kontakte, Kalender oder Dateien eines Geräts ausliest?",
      options: ["Bluesnarfing", "Bluejacking", "Evil Twin", "MAC-Flooding"],
      answer: 0,
      explain: "Bluesnarfing ist das unbemerkte Auslesen von Daten. Bluejacking verschickt nur unerwünschte Nachrichten oder Kopplungsanfragen. Ein Evil Twin ist ein gefälschter WLAN-Access-Point, MAC-Flooding ein Angriff auf die MAC-Tabelle eines Switches." },
    { id: "q-wlan-5", topic: "wlan-email", type: "tf",
      q: "Beim Koppeln zweier Bluetooth-Geräte per Secure Simple Pairing sollte man den auf beiden Geräten angezeigten Zahlencode vergleichen, um einen Man-in-the-Middle-Angriff zu erkennen.",
      answer: true,
      explain: "Beim Nummernvergleich (Numeric Comparison) zeigen beide Geräte denselben Code an. Hat sich ein Angreifer dazwischengeschaltet, stimmen die Codes nicht überein. Wer die Anfrage ungeprüft bestätigt, verschenkt diesen Schutz." },
    { id: "q-mail-1", topic: "wlan-email", type: "single",
      q: "Welche Aufgabe hat ein SPF-Eintrag im DNS?",
      options: ["Er legt fest, welche Mailserver E-Mails für die Domain versenden dürfen", "Er verschlüsselt E-Mails zwischen den Servern", "Er enthält den öffentlichen Schlüssel für die DKIM-Signatur", "Er gibt an, welcher Server E-Mails für die Domain empfängt"],
      answer: 0,
      explain: "SPF (TXT-Eintrag) listet die berechtigten Absenderserver. Verschlüsselung leistet TLS, den DKIM-Schlüssel enthält ein eigener TXT-Eintrag unter selector._domainkey, und den Empfangsserver nennt der MX-Eintrag." },
    { id: "q-mail-2", topic: "wlan-email", type: "single",
      q: "Wo veröffentlicht eine Domain den öffentlichen Schlüssel für DKIM?",
      options: ["Als TXT-Eintrag unter selektor._domainkey.domain", "Im MX-Eintrag der Domain", "Im Zertifikat des Webservers", "Im PTR-Eintrag des Mailservers"],
      answer: 0,
      explain: "Der empfangende Server liest Domain (d=) und Selektor (s=) aus der DKIM-Signatur und fragt den TXT-Eintrag selektor._domainkey.domain ab. MX nennt den Empfangsserver, PTR dient der Rückwärtsauflösung." },
    { id: "q-mail-3", topic: "wlan-email", type: "multi",
      q: "Welche Aussagen zu DMARC sind richtig?",
      options: ["DMARC legt fest, was mit Mails passiert, die SPF bzw. DKIM nicht bestehen", "DMARC verlangt, dass die geprüfte Domain zur sichtbaren From-Adresse passt", "DMARC verschlüsselt den Inhalt der E-Mail", "DMARC ersetzt SPF und DKIM vollständig"],
      answer: [0, 1],
      explain: "DMARC baut auf SPF und DKIM auf, prüft das Alignment mit der From-Adresse und legt die Richtlinie fest (none, quarantine, reject); Berichte gehen an die rua-Adresse. Es verschlüsselt nichts und funktioniert nicht ohne SPF oder DKIM." },
    { id: "q-mail-4", topic: "wlan-email", type: "single", exam: ["AP1", "AP2"],
      q: "Worin unterscheidet sich Ende-zu-Ende-Verschlüsselung (S/MIME, PGP) von reiner Transportverschlüsselung (TLS) bei E-Mails?",
      options: ["Nur Absender und Empfänger können den Inhalt lesen, auch auf den Mailservern bleibt er verschlüsselt", "Nur die Verbindung zwischen Mailprogramm und Server ist geschützt", "Sie verhindert ausschließlich gefälschte Absenderadressen", "Sie funktioniert nur, wenn Absender und Empfänger denselben Mailanbieter nutzen"],
      answer: 0,
      explain: "TLS schützt jede Teilstrecke, auf den Servern liegt die Mail aber im Klartext. S/MIME und PGP verschlüsseln den Inhalt selbst mit dem öffentlichen Schlüssel des Empfängers – unabhängig vom Anbieter." },
    { id: "q-mail-5", topic: "wlan-email", type: "tf",
      q: "Beim Greylisting weist der Empfangsserver Mails unbekannter Absender zunächst vorübergehend ab, weil echte Mailserver die Zustellung später wiederholen.",
      answer: true,
      explain: "Greylisting nutzt aus, dass regelkonforme Mailserver nach einer temporären Ablehnung erneut zustellen, viele Spam-Programme aber nicht. Nachteil: Die erste Mail eines neuen Absenders kommt verzögert an." },
    { id: "q-mail-6", topic: "wlan-email", type: "single",
      q: "Welcher DNS-Eintrag ordnet der öffentlichen IP-Adresse eines Mailservers seinen Namen zu und wird von vielen Empfängern bei der Spamprüfung abgefragt?",
      options: ["PTR (Reverse DNS)", "MX", "CNAME", "AAAA"],
      answer: 0,
      explain: "Der PTR-Eintrag löst eine IP-Adresse rückwärts in einen Namen auf; meist trägt ihn der Provider ein. MX nennt den Empfangsserver einer Domain, CNAME ist ein Alias, AAAA ordnet einem Namen eine IPv6-Adresse zu." },
    { id: "q-hv-1", topic: "hochverfuegbarkeit", type: "input",
      q: "Zwei unabhängige Internetanschlüsse haben je 99 % Verfügbarkeit, einer genügt für den Betrieb. Wie hoch ist die Gesamtverfügbarkeit in Prozent?",
      answer: ["99,99", "99.99", "99,99 %", "99,99%", "99.99 %"],
      explain: "Parallelschaltung: A = 1 − (1 − 0,99) × (1 − 0,99) = 1 − 0,01 × 0,01 = 1 − 0,0001 = 0,9999 = 99,99 %." },
    { id: "q-hv-2", topic: "hochverfuegbarkeit", type: "input",
      q: "Wie viele Stunden Ausfall pro Jahr sind bei einer Verfügbarkeit von 99,9 % zulässig (Jahr = 8.760 h)?",
      answer: ["8,76", "8.76", "8,76 h", "8,76 Stunden", "8.76 h"],
      explain: "(1 − 0,999) × 8.760 h = 0,001 × 8.760 h = 8,76 h. Zum Vergleich: 99,99 % erlauben nur 52,56 Minuten pro Jahr." },
    { id: "q-hv-3", topic: "hochverfuegbarkeit", type: "single",
      q: "Drei Komponenten mit je 99 % Verfügbarkeit sind in Serie geschaltet (alle werden benötigt). Wie hoch ist die Gesamtverfügbarkeit?",
      options: ["ca. 97,03 %", "99 %", "ca. 99,9999 %", "ca. 99,97 %"],
      answer: 0,
      explain: "Serie: 0,99 × 0,99 × 0,99 = 0,970299 ≈ 97,03 %. Eine Serienschaltung ist immer schlechter als ihr schwächstes Glied. 99,9999 % wäre das Ergebnis dreier paralleler Komponenten." },
    { id: "q-hv-4", topic: "hochverfuegbarkeit", type: "multi",
      q: "Welche Aussagen treffen auf einen Aktiv/Aktiv-Cluster zu?",
      options: ["Alle Knoten verarbeiten gleichzeitig Anfragen", "Fällt ein Knoten aus, müssen die übrigen die gesamte Last tragen", "Die Hardware wird im Normalbetrieb besser genutzt als bei Aktiv/Passiv", "Ein Knoten wartet im Normalbetrieb ungenutzt auf einen Ausfall"],
      answer: [0, 1, 2],
      explain: "Bei Aktiv/Aktiv teilen sich alle Knoten die Last; deshalb nach N+1 dimensionieren. Ein wartender, ungenutzter Knoten kennzeichnet dagegen den Aktiv/Passiv-Cluster." },
    { id: "q-hv-5", topic: "hochverfuegbarkeit", type: "single",
      q: "Ein Load Balancer soll neue Anfragen immer an den Server mit den wenigsten aktiven Verbindungen senden. Welches Verfahren ist das?",
      options: ["Least Connections", "Round Robin", "IP-Hash", "Weighted Round Robin"],
      answer: 0,
      explain: "Least Connections berücksichtigt die aktuelle Auslastung und eignet sich bei unterschiedlich langen Anfragen. Round Robin verteilt stur der Reihe nach, Weighted Round Robin nach Gewichtung, IP-Hash hält einen Client beim selben Server." },
    { id: "q-hv-6", topic: "hochverfuegbarkeit", type: "tf",
      q: "Die Formel für Parallelschaltungen gilt auch dann, wenn beide Internetleitungen im selben Kabelschacht verlaufen.",
      answer: false,
      explain: "Die Parallelformel setzt unabhängige Ausfälle voraus. Leitungen im selben Schacht fallen z. B. bei Bauarbeiten gemeinsam aus. Deshalb getrennte Trassen und möglichst verschiedene Provider und Techniken (z. B. Glasfaser + Mobilfunk) wählen." },
    { id: "q-hv-7", topic: "hochverfuegbarkeit", type: "multi",
      q: "Welche Maßnahmen beseitigen einen Single Point of Failure?",
      options: ["Redundante Netzteile an getrennten Stromkreisen", "Gateway-Redundanz mit VRRP oder HSRP", "Link Aggregation (LACP) über zwei Leitungen", "Eine schnellere CPU im einzigen Datenbankserver", "Eine größere Festplatte im einzigen Dateiserver"],
      answer: [0, 1, 2],
      explain: "Ein SPOF wird nur durch Redundanz beseitigt: doppelte Netzteile, virtuelles Gateway aus zwei Routern, gebündelte Leitungen. Mehr Leistung oder Kapazität eines einzelnen Systems ändert nichts daran, dass sein Ausfall alles stoppt." },
    { id: "q-sch-1", topic: "schwachstellen-haertung", type: "single",
      q: "Eine Schwachstelle hat den CVSS-Basiswert 7,5. Wie wird sie eingestuft?",
      options: ["High", "Medium", "Critical", "Low"],
      answer: 0,
      explain: "CVSS-Einstufung: 0,1–3,9 Low, 4,0–6,9 Medium, 7,0–8,9 High, 9,0–10,0 Critical. 7,5 liegt im Bereich High." },
    { id: "q-sch-2", topic: "schwachstellen-haertung", type: "single",
      q: "Was ist eine CVE-Nummer?",
      options: ["Eine eindeutige Kennung für eine öffentlich bekannte Schwachstelle", "Ein Wert zwischen 0 und 10 für den Schweregrad einer Lücke", "Die Versionsnummer eines Sicherheitsupdates", "Ein Zertifikat für geprüfte Sicherheitsprodukte"],
      answer: 0,
      explain: "CVE (Common Vulnerabilities and Exposures) benennt Schwachstellen eindeutig, z. B. CVE-2021-44228. Den Schweregrad liefert CVSS. Ein Prüfzeichen für Produkte wäre z. B. Common Criteria." },
    { id: "q-sch-3", topic: "schwachstellen-haertung", type: "single",
      q: "Was kennzeichnet einen Black-Box-Penetrationstest?",
      options: ["Die Tester erhalten vorab keine Informationen über die Zielsysteme", "Die Tester erhalten Quellcode, Netzpläne und Zugangsdaten", "Es werden nur Dokumente geprüft, keine Systeme angegriffen", "Er wird ohne Wissen und Auftrag der Geschäftsleitung durchgeführt"],
      answer: 0,
      explain: "Black Box simuliert einen externen Angreifer ohne Vorwissen. Volle Informationen erhalten die Tester beim White-Box-Test, Teilwissen beim Grey-Box-Test. Eine reine Dokumentenprüfung ist ein Audit. Ohne Auftrag ist kein Pentest zulässig." },
    { id: "q-sch-4", topic: "schwachstellen-haertung", type: "multi",
      q: "Welche Maßnahmen gehören zur Härtung eines Servers?",
      options: ["Nicht benötigte Dienste und Programme entfernen", "Standardpasswörter und -konten ändern bzw. deaktivieren", "Fernverwaltung per SSH statt Telnet", "Alle Benutzer zu lokalen Administratoren machen", "Die Host-Firewall abschalten, damit Anwendungen störungsfrei laufen"],
      answer: [0, 1, 2],
      explain: "Härtung verkleinert die Angriffsfläche: weniger Dienste, keine Standardzugänge, verschlüsselte Verwaltung, Least Privilege. Admin-Rechte für alle und eine abgeschaltete Firewall vergrößern die Angriffsfläche." },
    { id: "q-sch-5", topic: "schwachstellen-haertung", type: "tf",
      q: "Ein Schwachstellenscan im eigenen Firmennetz braucht keine Genehmigung, wenn ihn ein Mitarbeiter der IT-Abteilung durchführt.",
      answer: false,
      explain: "Auch intern sind Scans und Pentests nur mit Auftrag bzw. Freigabe des Verantwortlichen, festgelegtem Umfang und Zeitfenster zulässig. Scans können Systeme stören, Daten berühren und rechtliche Folgen haben." },
    { id: "q-sch-6", topic: "schwachstellen-haertung", type: "single",
      q: "Warum wird ein Update zuerst an eine Pilotgruppe verteilt, bevor es alle Clients erhalten?",
      options: ["Um Inkompatibilitäten und Fehler zu erkennen, bevor sie alle Arbeitsplätze betreffen", "Weil der Hersteller sonst keine Lizenz erteilt", "Um die Internetleitung dauerhaft zu entlasten", "Weil Updates nur einmal pro Jahr installiert werden dürfen"],
      answer: 0,
      explain: "Ein fehlerhaftes Update kann Anwendungen oder ganze Systeme lahmlegen. Die Verteilung in Wellen (Pilot → Abteilungen → alle) begrenzt den Schaden und ermöglicht einen Rückfallplan. Bei aktiv ausgenutzten Lücken wird der Zeitraum stark verkürzt." },
    { id: "q-sch-7", topic: "schwachstellen-haertung", type: "input",
      q: "Mit welcher Einstufung (englischer oder deutscher Begriff) bewertet CVSS eine Schwachstelle mit dem Basiswert 9,3?",
      answer: ["Critical", "kritisch"],
      explain: "9,0–10,0 = Critical (kritisch). Solche Lücken, besonders bei Systemen mit Internetzugang, werden sofort über einen Notfall-Change behoben." },
    { id: "q-mdm-1", topic: "endgeraete-mdm", type: "single",
      q: "Ein Außendienstmitarbeiter nutzt sein privates Smartphone mit Firmencontainer (BYOD) und hat es verloren. Welche Löschmaßnahme ist angemessen?",
      options: ["Selective Wipe: nur den Container mit Firmendaten und Firmen-Apps löschen", "Full Wipe: das ganze Gerät auf Werkseinstellungen zurücksetzen", "Keine Löschung, weil es sich um ein Privatgerät handelt", "Den privaten Mobilfunkvertrag des Mitarbeiters kündigen"],
      answer: 0,
      explain: "Bei BYOD gehört das Gerät dem Beschäftigten. Ein Full Wipe würde auch private Daten vernichten und ist unverhältnismäßig. Nichts zu tun, gefährdet die Firmendaten. Zusätzlich werden Passwort und Anmelde-Token zurückgesetzt. Den privaten Vertrag darf die Firma nicht kündigen." },
    { id: "q-mdm-2", topic: "endgeraete-mdm", type: "single",
      q: "Was bedeutet das Betriebsmodell COPE?",
      options: ["Das Gerät gehört der Firma, private Nutzung ist in einem getrennten Bereich erlaubt", "Beschäftigte nutzen ihr eigenes Gerät dienstlich", "Das Gerät gehört der Firma und darf ausschließlich dienstlich genutzt werden", "Beschäftigte kaufen ein Gerät ihrer Wahl und erhalten dafür eine Pauschale"],
      answer: 0,
      explain: "COPE = Corporate Owned, Personally Enabled. Das eigene Gerät dienstlich zu nutzen ist BYOD, reine Dienstnutzung eines Firmengeräts heißt COBO (Business Only). Bei CYOD wählen Beschäftigte aus einer Liste der Firma." },
    { id: "q-mdm-3", topic: "endgeraete-mdm", type: "multi",
      q: "Welche Funktionen bietet ein Mobile Device Management typischerweise?",
      options: ["Richtlinien wie Geräte-PIN und Verschlüsselung erzwingen", "Firmen-Apps zentral verteilen und unerwünschte Apps sperren", "Verlorene Geräte sperren oder löschen", "Private Fotos der Beschäftigten zur Kontrolle auswerten", "Die Akkukapazität der Geräte erhöhen"],
      answer: [0, 1, 2],
      explain: "MDM steuert Richtlinien, Apps, Updates, Compliance, Fernsperre und Fernlöschung. Private Inhalte auszuwerten wäre datenschutzwidrig und ist nicht Aufgabe eines MDM, die Akkukapazität ist eine Hardwareeigenschaft." },
    { id: "q-mdm-4", topic: "endgeraete-mdm", type: "tf",
      q: "Die Einführung eines MDM, das den Standort der Diensthandys erfassen kann, unterliegt der Mitbestimmung des Betriebsrats.",
      answer: true,
      explain: "Das MDM ist eine technische Einrichtung, die geeignet ist, Verhalten oder Leistung zu überwachen (§ 87 Abs. 1 Nr. 6 BetrVG). Entscheidend ist die Eignung, nicht die Absicht. Üblich ist eine Betriebsvereinbarung, die z. B. die Ortung auf gemeldete Verluste beschränkt." },
    { id: "q-mdm-5", topic: "endgeraete-mdm", type: "single",
      q: "Wodurch unterscheidet sich EDR (Endpoint Detection and Response) von einem klassischen, signaturbasierten Virenscanner?",
      options: ["EDR erkennt verdächtiges Verhalten, zeichnet Aktivitäten für die Analyse auf und kann Geräte isolieren", "EDR erkennt ausschließlich Schadsoftware, für die bereits eine Signatur existiert", "EDR ersetzt die Datensicherung", "EDR prüft nur HTTP-Anfragen vor Webanwendungen"],
      answer: 0,
      explain: "EDR arbeitet verhaltensbasiert (z. B. massenhaftes Umbenennen von Dateien), speichert Telemetrie für die Forensik und kann aktiv reagieren. Nur Signaturen nutzt der klassische Virenscanner, HTTP-Anfragen prüft eine WAF, und ein Backup bleibt trotz EDR nötig." },
    { id: "q-mdm-6", topic: "endgeraete-mdm", type: "single",
      q: "Eine Mitarbeiterin will eine Kundenliste mit IBAN-Nummern an ihre private Mailadresse senden. Das System blockiert den Versand und protokolliert ihn. Welche Technik greift hier?",
      options: ["Data Loss Prevention (DLP)", "Intrusion Detection System (IDS)", "Web Application Firewall (WAF)", "Network Access Control (NAC)"],
      answer: 0,
      explain: "DLP erkennt vertrauliche Inhalte (hier IBAN-Nummern) und verhindert ihren unerlaubten Abfluss per Mail, USB oder Cloud. Ein IDS erkennt Angriffe im Netz, eine WAF schützt Webanwendungen, NAC prüft Geräte beim Netzzugang." },
    { id: "q-mdm-7", topic: "endgeraete-mdm", type: "input",
      q: "Eine MDM-Gerätelizenz kostet 4 € pro Gerät und Monat. Wie hoch sind die Jahreskosten für 30 Geräte in Euro?",
      answer: ["1440", "1.440", "1440 €", "1.440 €", "1440 Euro", "1.440 Euro"],
      explain: "30 Geräte × 4 € × 12 Monate = 1.440 € pro Jahr. Für den Vergleich mit einer Benutzerlizenz rechnest du ebenso: Anzahl Benutzer × Preis × 12." },
    { id: "q-nf-1", topic: "notfall-betrieb", type: "single",
      q: "Was beschreibt das Recovery Point Objective (RPO)?",
      options: ["Den maximal tolerierbaren Datenverlust als Zeitspanne vor dem Ausfall", "Die Zeit bis zum Wiederanlauf eines Prozesses", "Die Zeit, nach der ein Ausfall für das Unternehmen untragbar wird", "Den Zeitpunkt, an dem die nächste Vollsicherung beginnt"],
      answer: 0,
      explain: "RPO = Wie viele Daten dürfen höchstens fehlen? Es bestimmt das Sicherungs- bzw. Replikationsintervall. Die Wiederanlaufzeit ist das RTO, die Grenze der Tragbarkeit die MTPD." },
    { id: "q-nf-2", topic: "notfall-betrieb", type: "single",
      q: "Welche Beziehung muss zwischen RTO und MTPD eines Geschäftsprozesses gelten?",
      options: ["Das RTO muss kleiner als die MTPD sein", "Das RTO muss größer als die MTPD sein", "RTO und MTPD müssen immer genau gleich sein", "Zwischen RTO und MTPD besteht kein Zusammenhang"],
      answer: 0,
      explain: "Der Prozess muss wieder laufen, bevor der Schaden untragbar wird. Deshalb liegt das RTO mit Puffer unter der maximal tolerierbaren Ausfallzeit (MTPD)." },
    { id: "q-nf-3", topic: "notfall-betrieb", type: "single",
      q: "Ein Mitarbeiter bemerkt, dass Dateien auf seinem Rechner verschlüsselt werden. Was ist nach der Meldung über die Notfallnummer die richtige Sofortmaßnahme am Gerät?",
      options: ["Den Rechner vom Netz trennen, aber eingeschaltet lassen", "Den Rechner sofort am Netzschalter ausschalten und neu installieren", "Das Lösegeld zahlen, um die Daten schnell zurückzubekommen", "Weiterarbeiten und am Monatsende die IT informieren"],
      answer: 0,
      explain: "Vom Netz trennen stoppt die Ausbreitung. Eingeschaltet lassen erhält flüchtige Spuren im Arbeitsspeicher für die Forensik. Sofortiges Neuinstallieren vernichtet Beweise, Zahlen garantiert nichts und finanziert weitere Angriffe, Abwarten verschlimmert den Schaden und verletzt Meldefristen." },
    { id: "q-nf-4", topic: "notfall-betrieb", type: "tf",
      q: "Das Notfallhandbuch sollte ausschließlich im Intranet abgelegt werden, damit immer die aktuelle Version genutzt wird.",
      answer: false,
      explain: "Bei einem IT-Ausfall (Ransomware, Stromausfall, Brand) ist das Intranet womöglich nicht erreichbar. Das Handbuch muss zusätzlich gedruckt bzw. offline an bekannten Orten vorliegen und regelmäßig aktualisiert werden." },
    { id: "q-nf-5", topic: "notfall-betrieb", type: "input",
      q: "Ein SLA sichert 99,5 % Verfügbarkeit bezogen auf 200 Stunden Servicezeit im Monat zu. Wie viele Minuten Ausfall sind in diesem Monat zulässig?",
      answer: ["60", "60 min", "60 Minuten"],
      explain: "200 h × (1 − 0,995) = 200 h × 0,005 = 1 h = 60 Minuten. Ausfälle außerhalb der Servicezeit und in vereinbarten Wartungsfenstern zählen in der Regel nicht." },
    { id: "q-nf-6", topic: "notfall-betrieb", type: "single",
      q: "Welche Änderung ist typischerweise ein Emergency Change?",
      options: ["Einspielen eines Notfall-Patches für eine aktiv ausgenutzte Lücke im VPN-Gateway", "Monatliche Client-Updates nach einem vorab genehmigten Standardverfahren", "Einrichten einer neuen Firewall-Regel für eine geplante Softwareeinführung im nächsten Quartal", "Anlegen eines neuen Benutzerkontos für eine Auszubildende"],
      answer: 0,
      explain: "Ein Emergency Change ist dringend und wird mit verkürzter Genehmigung umgesetzt, die Dokumentation wird nachgeholt. Routinetätigkeiten mit vorab genehmigtem Ablauf sind Standard-Changes bzw. Service Requests, geplante Änderungen Normal-Changes." },
    { id: "q-nf-7", topic: "notfall-betrieb", type: "multi",
      q: "Welche Inhalte gehören typischerweise in ein Service Level Agreement?",
      options: ["Servicezeit und zugesicherte Verfügbarkeit", "Reaktions- und Lösungszeiten je Priorität", "Wartungsfenster und Regeln für Vertragsstrafen", "Passwörter der Administratorkonten", "Lizenzschlüssel aller Client-Betriebssysteme"],
      answer: [0, 1, 2],
      explain: "Ein SLA beschreibt messbare Leistungen: Servicezeit, Verfügbarkeit, Reaktions- und Lösungszeiten, Wartungsfenster, Messung, Berichte, Strafen bzw. Gutschriften. Zugangsdaten und Lizenzschlüssel gehören in einen Passwort-Tresor bzw. die Lizenzverwaltung, nicht in einen Vertrag." },
  ],
  cards: [
    { topic: "isms-risiko", f: "ISMS", b: "Informationssicherheits-Managementsystem: Leitlinie, Rollen und Prozesse, die Sicherheit dauerhaft im PDCA-Zyklus steuern (ISO 27001, BSI 200-1)." },
    { topic: "isms-risiko", f: "PDCA im ISMS", b: "Plan (Risiken analysieren, Maßnahmen planen) → Do (umsetzen) → Check (Wirksamkeit prüfen, Audit) → Act (verbessern)." },
    { topic: "isms-risiko", f: "4 Strategien der Risikobehandlung", b: "vermeiden, reduzieren, übertragen, akzeptieren. Das Restrisiko akzeptiert die Geschäftsleitung schriftlich." },
    { topic: "isms-risiko", f: "ALE", b: "Annual Loss Expectancy = SLE × ARO. Eine Maßnahme lohnt sich, wenn sie die ALE stärker senkt, als sie pro Jahr kostet." },
    { topic: "isms-risiko", f: "BSI-Standards 200-1 bis 200-4", b: "200-1 ISMS · 200-2 IT-Grundschutz-Methodik · 200-3 Risikoanalyse · 200-4 Business Continuity Management" },
    { topic: "isms-risiko", f: "Maßnahmenarten", b: "präventiv (MFA, Patches) · detektiv (IDS, SIEM) · reaktiv/begrenzend (Isolieren, Notfallplan) · korrektiv (Restore, Wiederanlauf)" },
    { topic: "recht-compliance", f: "NIS2: besonders wichtig oder wichtig?", b: "Besonders wichtig: KRITIS-Betreiber und Großunternehmen in Anlage-1-Sektoren. Wichtig: mittlere Unternehmen in Anlage 1 sowie mittlere und große in Anlage 2." },
    { topic: "recht-compliance", f: "Art. 33 DSGVO", b: "Datenpanne an die Aufsichtsbehörde (in SH: ULD) binnen 72 h nach Bekanntwerden melden." },
    { topic: "recht-compliance", f: "NIS2-Meldefristen (BSIG)", b: "an das BSI: Frühwarnung 24 h → Meldung 72 h → Abschlussbericht nach 1 Monat" },
    { topic: "recht-compliance", f: "§ 87 Abs. 1 Nr. 6 BetrVG", b: "Mitbestimmung des Betriebsrats bei technischen Einrichtungen, die Verhalten oder Leistung überwachen können → Betriebsvereinbarung (z. B. SIEM, Monitoring)." },
    { topic: "recht-compliance", f: "Art. 32 DSGVO", b: "Sicherheit der Verarbeitung: TOM wie Pseudonymisierung, Verschlüsselung, Verfügbarkeit, rasche Wiederherstellung, regelmäßige Überprüfung." },
    { topic: "recht-compliance", f: "Zutritt – Zugang – Zugriff", b: "Zutritt: Räume (Schließsystem, Alarmanlage) · Zugang: Systeme (Anmeldung, MFA, Bildschirmsperre) · Zugriff: Daten (Rechte, Verschlüsselung)" },
    { topic: "recht-compliance", f: "FAR und FRR bei Biometrie", b: "FAR: Anteil fälschlich akzeptierter Unberechtigter (Sicherheit) · FRR: Anteil fälschlich abgewiesener Berechtigter (Komfort)" },
    { topic: "bedrohungen", f: "ARP-Poisoning – Gegenmaßnahme", b: "Dynamic ARP Inspection (mit DHCP-Snooping-Bindungstabelle), dazu 802.1X und TLS." },
    { topic: "bedrohungen", f: "MAC-Flooding", b: "MAC-Tabelle wird mit gefälschten Adressen gefüllt, der Switch flutet alle Frames. Schutz: Port Security." },
    { topic: "bedrohungen", f: "VLAN-Hopping – Schutz", b: "Ports fest auf Access, DTP aus (nonegotiate), natives VLAN auf ungenutzte ID, VLAN 1 meiden." },
    { topic: "bedrohungen", f: "Port-Security-Verletzungsmodi", b: "shutdown: Port err-disabled · restrict: verwerfen + melden + zählen · protect: still verwerfen" },
    { topic: "bedrohungen", f: "STRIDE", b: "Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege" },
    { topic: "segmentierung-dmz", f: "DMZ", b: "Eigene Zone für öffentlich erreichbare Dienste (Reverse Proxy, Mail-Relay). Aus der DMZ gibt es keinen direkten Zugriff ins LAN." },
    { topic: "segmentierung-dmz", f: "Zweistufige DMZ", b: "Äußere und innere Firewall, möglichst verschiedener Hersteller. Angreifer müssen zwei unabhängige Hürden überwinden." },
    { topic: "segmentierung-dmz", f: "Forward- vs. Reverse-Proxy", b: "Forward: Clients → Internet (Filter, Cache, Auth). Reverse: Internet → eigene Server (TLS-Terminierung, Lastverteilung, WAF)." },
    { topic: "firewalls", f: "First Match", b: "Regeln von oben nach unten, die erste passende entscheidet. Spezielle Regeln nach oben." },
    { topic: "firewalls", f: "Implicit Deny", b: "Was nicht ausdrücklich erlaubt ist, wird verworfen. Besser: letzte Regel „any → any deny“ mit Logging." },
    { topic: "firewalls", f: "Stateful Inspection", b: "Firewall führt eine Verbindungstabelle; Antwortpakete bestehender Verbindungen passieren automatisch." },
    { topic: "firewalls", f: "NGFW", b: "Stateful Inspection + Deep Packet Inspection, Anwendungs- und Benutzererkennung, IPS, TLS-Inspektion." },
    { topic: "firewalls", f: "WAF", b: "Web Application Firewall: prüft HTTP(S) auf Schicht 7 vor Webanwendungen, schützt vor SQL-Injection und XSS." },
    { topic: "ids-siem", f: "IDS vs. IPS", b: "IDS erkennt und alarmiert (passiv am Mirror-Port). IPS erkennt und blockiert (inline im Datenweg)." },
    { topic: "ids-siem", f: "SIEM", b: "Security Information and Event Management: Logs sammeln, normalisieren, korrelieren, alarmieren, Compliance-Berichte." },
    { topic: "ids-siem", f: "Syslog-Schweregrade", b: "0 Emergency · 1 Alert · 2 Critical · 3 Error · 4 Warning · 5 Notice · 6 Informational · 7 Debug" },
    { topic: "ids-siem", f: "Windows-Ereignis-IDs 4624 / 4625 / 4740 / 1102", b: "Anmeldung erfolgreich / fehlgeschlagen / Konto gesperrt / Sicherheitsprotokoll gelöscht" },
    { topic: "kryptografie", f: "Schlüsselanzahl bei n Teilnehmern", b: "symmetrisch: n × (n − 1) ÷ 2 · asymmetrisch: 2 × n" },
    { topic: "kryptografie", f: "Verschlüsseln vs. Signieren (asymmetrisch)", b: "Verschlüsseln: öffentlicher Schlüssel des Empfängers. Signieren: eigener privater Schlüssel." },
    { topic: "kryptografie", f: "Hybride Verschlüsselung", b: "Daten symmetrisch mit zufälligem Sitzungsschlüssel (schnell), Sitzungsschlüssel asymmetrisch bzw. per ECDHE (sicherer Austausch). Beispiel: TLS." },
    { topic: "kryptografie", f: "Eigenschaften einer Hashfunktion", b: "Einwegfunktion, feste Länge, kollisionsresistent, Lawineneffekt. Aktuell SHA-2/SHA-3; MD5 und SHA-1 gebrochen." },
    { topic: "kryptografie", f: "HMAC", b: "Hash über Nachricht + geheimen Schlüssel → Integrität und Authentizität (z. B. in IPsec, TLS)." },
    { topic: "pki-tls", f: "Zertifikatskette", b: "Root-CA (selbstsigniert, im Trust Store) → Intermediate-CA → Serverzertifikat. Jede Stufe signiert die nächste." },
    { topic: "pki-tls", f: "CRL vs. OCSP", b: "CRL: veröffentlichte Sperrliste. OCSP: Online-Statusabfrage eines einzelnen Zertifikats (mit Stapling liefert der Server sie mit)." },
    { topic: "pki-tls", f: "CSR", b: "Certificate Signing Request: öffentlicher Schlüssel + Name, wird an die CA zur Signatur geschickt. Der private Schlüssel bleibt beim Antragsteller." },
    { topic: "pki-tls", f: "Max. Laufzeit öffentlicher TLS-Zertifikate", b: "seit 15.03.2026: 200 Tage · ab 15.03.2027: 100 Tage · ab 15.03.2029: 47 Tage → mit ACME automatisieren" },
    { topic: "pki-tls", f: "Forward Secrecy", b: "Jede Sitzung erhält einen eigenen ECDHE-Schlüssel. Ein später gestohlener Serverschlüssel entschlüsselt alte Mitschnitte nicht." },
    { topic: "vpn", f: "ESP vs. AH", b: "ESP (IP-Protokoll 50): verschlüsselt + Integrität. AH (IP 51): nur Integrität/Authentizität, nicht NAT-tauglich." },
    { topic: "vpn", f: "IKE-Ports", b: "UDP 500; mit NAT-Traversal UDP 4500" },
    { topic: "vpn", f: "IPsec Tunnel- vs. Transportmodus", b: "Tunnel: ganzes Paket verschlüsselt + neuer IP-Header (Gateways). Transport: nur Nutzdaten, Original-Header bleibt (Host-zu-Host)." },
    { topic: "vpn", f: "WireGuard", b: "Schlankes VPN über UDP (oft 51820), Curve25519 + ChaCha20-Poly1305, Peers über öffentliche Schlüssel, AllowedIPs steuert das Routing." },
    { topic: "vpn", f: "Split Tunnel vs. Full Tunnel", b: "Split: nur Firmennetze durch den Tunnel. Full: gesamter Verkehr durch den Tunnel (kontrollierbarer, belastet die Zentrale)." },
    { topic: "vpn", f: "MACsec", b: "IEEE 802.1AE: verschlüsselt Ethernet-Frames auf Schicht 2 von Leitung zu Leitung (Hop-by-Hop) mit AES-GCM; kein Ende-zu-Ende-Schutz." },
    { topic: "authentifizierung", f: "AAA", b: "Authentifizierung (Wer?), Autorisierung (Was darf er?), Accounting (Was hat er getan?)" },
    { topic: "authentifizierung", f: "802.1X-Rollen", b: "Supplicant (Client) → Authenticator (Switch/AP) → Authentication Server (RADIUS)" },
    { topic: "authentifizierung", f: "RADIUS / TACACS+ Ports", b: "RADIUS: UDP 1812 (Auth), 1813 (Accounting) · TACACS+: TCP 49" },
    { topic: "authentifizierung", f: "Kerberos", b: "KDC auf dem DC stellt ein TGT aus, damit holt der Client Service-Tickets. Port 88, max. 5 min Zeitabweichung." },
    { topic: "authentifizierung", f: "Zero Trust", b: "„Never trust, always verify“: jeder Zugriff wird nach Identität, Gerät und Kontext geprüft; Least Privilege, Mikrosegmentierung, Assume Breach." },
    { topic: "wlan-email", f: "WPA3-Neuerungen", b: "SAE statt PSK-Handshake (kein Offline-Wörterbuchangriff), PMF Pflicht, Forward Secrecy, 192-Bit-Modus für Enterprise." },
    { topic: "wlan-email", f: "SPF · DKIM · DMARC", b: "SPF: erlaubte Absenderserver · DKIM: Signatur, Schlüssel im DNS · DMARC: Richtlinie (none/quarantine/reject), Alignment, Berichte" },
    { topic: "wlan-email", f: "S/MIME vs. PGP", b: "S/MIME: X.509-Zertifikate einer CA (hierarchisch). PGP: selbst erzeugte Schlüssel, Web of Trust." },
    { topic: "wlan-email", f: "Bluejacking · Bluesnarfing · Bluebugging", b: "unerwünschte Nachrichten · unbemerktes Auslesen von Daten · Übernahme von Gerätefunktionen. Schutz: Bluetooth aus, nicht sichtbar, Code beim Pairing vergleichen, Updates." },
    { topic: "wlan-email", f: "PTR-Eintrag beim Mailserver", b: "Reverse DNS: IP → Name des Mailservers. Fehlt er oder passt er nicht, lehnen viele Empfänger Mails ab." },
    { topic: "endgeraete-mdm", f: "MDM-Kernfunktionen", b: "Enrollment, Richtlinien (PIN, Verschlüsselung), App-Verwaltung, Updates, Compliance mit Conditional Access, Fernsperre und Fernlöschung, Inventar" },
    { topic: "endgeraete-mdm", f: "COBO · COPE · CYOD · BYOD", b: "Firmengerät nur dienstlich · Firmengerät, privat erlaubt · Firmengerät aus Auswahlliste · Privatgerät dienstlich genutzt" },
    { topic: "endgeraete-mdm", f: "Full Wipe vs. Selective Wipe", b: "Full: ganzes Gerät zurücksetzen (nur Firmengeräte). Selective: nur den Firmencontainer löschen (BYOD)." },
    { topic: "endgeraete-mdm", f: "EDR vs. Virenscanner", b: "Virenscanner: Signaturen bekannter Schadsoftware. EDR: verhaltensbasiert, zeichnet Aktivitäten auf, kann Prozesse stoppen und Geräte isolieren." },
    { topic: "endgeraete-mdm", f: "DLP", b: "Data Loss Prevention: erkennt vertrauliche Inhalte und verhindert ihren Abfluss per Mail, USB, Cloud oder Druck (protokollieren, warnen, blockieren)." },
    { topic: "hochverfuegbarkeit", f: "Verfügbarkeit aus MTBF und MTTR", b: "A = MTBF ÷ (MTBF + MTTR)" },
    { topic: "hochverfuegbarkeit", f: "Serie vs. parallel", b: "Serie: A = A₁ × A₂ (schlechter). Parallel: A = 1 − (1 − A₁) × (1 − A₂) (besser)." },
    { topic: "hochverfuegbarkeit", f: "Ausfall pro Jahr bei 99,9 % / 99,99 %", b: "8,76 h / 52,56 min (Ausfallzeit = (1 − A) × 8.760 h)" },
    { topic: "hochverfuegbarkeit", f: "Split Brain", b: "Nach Ausfall des Heartbeats halten sich beide Clusterknoten für aktiv → Datenkorruption. Schutz: Quorum/Witness, redundanter Heartbeat." },
    { topic: "schwachstellen-haertung", f: "CVSS-Einstufung", b: "Low 0,1–3,9 · Medium 4,0–6,9 · High 7,0–8,9 · Critical 9,0–10,0" },
    { topic: "schwachstellen-haertung", f: "Pentest-Phasen (BSI)", b: "Vorbereitung → Informationsbeschaffung → Bewertung → aktive Eindringversuche → Abschlussanalyse/Bericht" },
    { topic: "schwachstellen-haertung", f: "Black / Grey / White Box", b: "kein Vorwissen (externer Angreifer) / Teilwissen / volle Informationen (gründlichste Prüfung)" },
    { topic: "notfall-betrieb", f: "MTPD · RTO · RPO", b: "MTPD: ab wann untragbar · RTO: bis wann wieder in Betrieb (kleiner als MTPD) · RPO: wie viel Datenverlust höchstens" },
    { topic: "notfall-betrieb", f: "Business Impact Analyse (BIA)", b: "Ermittelt je Prozess den Schaden über die Ausfalldauer, die benötigten Ressourcen sowie MTPD, RTO und RPO." },
    { topic: "notfall-betrieb", f: "Change-Arten", b: "Standard: vorab genehmigt, Routine · Normal: einzeln bewertet (CAB) · Emergency: dringend, verkürzte Genehmigung" },
    { topic: "notfall-betrieb", f: "Störung – Notfall – Krise", b: "Störung: im Normalbetrieb lösbar · Notfall: kritische Prozesse länger als tolerierbar gestört · Krise: ohne vorbereitete Pläne, existenzbedrohend" },
  ],
  checklist: [
    { id: "c-isms-1", topic: "isms-risiko", text: "Ich kann Aufbau und Ziel eines ISMS nach ISO 27001 bzw. BSI 200-1 erklären und den PDCA-Zyklus darauf anwenden.", exam: ["AP2"] },
    { id: "c-isms-2", topic: "isms-risiko", text: "Ich kann Risiken mit einer Matrix aus Eintrittswahrscheinlichkeit und Schadenshöhe einstufen und jedem Risiko eine Behandlungsstrategie begründet zuordnen.", exam: ["AP2"] },
    { id: "c-isms-3", topic: "isms-risiko", text: "Ich kann SLE, ARO und ALE berechnen und damit die Wirtschaftlichkeit einer Schutzmaßnahme beurteilen.", exam: ["AP2"] },
    { id: "c-isms-4", topic: "isms-risiko", text: "Ich kann IT-Sicherheitskriterien und Prüfsiegel (Common Criteria, BSI C5, ISO-27001-Zertifikat) als Auswahlhilfe einordnen und Security by Design bzw. by Default erklären.", exam: ["AP2"] },
    { id: "c-isms-5", topic: "isms-risiko", text: "Ich kann mögliche Schäden eines Sicherheitsvorfalls je Schutzziel beschreiben, Ausfallkosten grob berechnen und Maßnahmen als präventiv, detektiv, reaktiv oder korrektiv einordnen.", exam: ["AP2"] },
    { id: "c-recht-1", topic: "recht-compliance", text: "Ich kann die Meldepflichten nach DSGVO (Art. 33/34) und NIS2 mit Frist und Empfänger nennen.", exam: ["AP2"] },
    { id: "c-recht-2", topic: "recht-compliance", text: "Ich kann beurteilen, ob ein Unternehmen als wichtige oder besonders wichtige Einrichtung unter NIS2 fällt, und seine wichtigsten Pflichten nennen.", exam: ["AP2"] },
    { id: "c-recht-3", topic: "recht-compliance", text: "Ich kann erklären, wie Logging, Monitoring und Fernwartung datenschutzkonform betrieben werden (Zweck, Löschkonzept, AV-Vertrag, Betriebsvereinbarung).", exam: ["AP2"] },
    { id: "c-recht-4", topic: "recht-compliance", text: "Ich kann Zutritts-, Zugangs- und Zugriffskontrollmaßnahmen nennen und ihre Wirksamkeit und Effizienz prüfen (z. B. Zutrittsprotokolle, FAR/FRR, Rezertifizierung, Löschung nach DIN 66399).", exam: ["AP2"] },
    { id: "c-recht-5", topic: "recht-compliance", text: "Ich kann einen Compliance-Bericht auswerten, die Compliance-Quote berechnen und Abweichungen in priorisierte Maßnahmen umsetzen.", exam: ["AP2"] },
    { id: "c-bed-1", topic: "bedrohungen", text: "Ich kann Angriffe wie MAC-Flooding, ARP-Poisoning, Rogue-DHCP, VLAN-Hopping, DDoS, SQL-Injection und Phishing erklären und passende Gegenmaßnahmen zuordnen.", exam: ["AP2"] },
    { id: "c-bed-2", topic: "bedrohungen", text: "Ich kann eine Switch-Konfiguration mit Port Security, DHCP-Snooping, DAI und BPDU Guard lesen, ergänzen und ihre Wirkung erläutern.", exam: ["AP2"] },
    { id: "c-seg-1", topic: "segmentierung-dmz", text: "Ich kann ein Netz in Sicherheitszonen (DMZ, Server, Clients, Management, Gäste) aufteilen und Systeme begründet zuordnen.", exam: ["AP2"] },
    { id: "c-seg-2", topic: "segmentierung-dmz", text: "Ich kann ein- und zweistufige DMZ vergleichen sowie Forward- und Reverse-Proxy unterscheiden und richtig platzieren.", exam: ["AP2"] },
    { id: "c-fw-1", topic: "firewalls", text: "Ich kann Paketfilter, Stateful Inspection, Application Level Gateway, NGFW und WAF nach Arbeitsweise, Schicht und Einsatz vergleichen.", exam: ["AP2"] },
    { id: "c-fw-2", topic: "firewalls", text: "Ich kann für ein Szenario ein Firewall-Regelwerk (Quelle, Ziel, Protokoll, Port, Aktion) nach first match und implicit deny erstellen.", exam: ["AP2"] },
    { id: "c-fw-3", topic: "firewalls", text: "Ich kann Fehler in einem Regelwerk (Shadowing, falsches Protokoll, zu weite Regeln, fehlendes Logging) finden und korrigieren.", exam: ["AP2"] },
    { id: "c-ids-1", topic: "ids-siem", text: "Ich kann IDS und IPS sowie signatur- und anomaliebasierte Erkennung unterscheiden und die Systeme im Netzplan platzieren.", exam: ["AP2"] },
    { id: "c-ids-2", topic: "ids-siem", text: "Ich kann zentrales Logging mit NTP und SIEM beschreiben, Syslog-Schweregrade zuordnen und den Speicherbedarf für Logs berechnen.", exam: ["AP2"] },
    { id: "c-ids-3", topic: "ids-siem", text: "Ich kann einen Wireshark-Mitschnitt auswerten (TCP-Handshake, ARP, DNS, Portscan) und passende Anzeigefilter angeben.", exam: ["AP2"] },
    { id: "c-kry-1", topic: "kryptografie", text: "Ich kann symmetrische, asymmetrische und hybride Verschlüsselung vergleichen und die benötigte Schlüsselanzahl berechnen.", exam: ["AP1", "AP2"] },
    { id: "c-kry-2", topic: "kryptografie", text: "Ich kann Eigenschaften und Einsatz von Hashfunktionen sowie den Ablauf einer digitalen Signatur erklären.", exam: ["AP1", "AP2"] },
    { id: "c-pki-1", topic: "pki-tls", text: "Ich kann die Inhalte eines X.509-Zertifikats, die Zertifikatskette und die Sperrverfahren CRL und OCSP erklären.", exam: ["AP2"] },
    { id: "c-pki-2", topic: "pki-tls", text: "Ich kann den TLS-1.3-Handshake beschreiben und Ursachen von Zertifikatswarnungen bestimmen und beheben.", exam: ["AP2"] },
    { id: "c-vpn-1", topic: "vpn", text: "Ich kann Site-to-Site-, Remote-Access- und End-to-End-VPN für ein Szenario auswählen und begründen.", exam: ["AP2"] },
    { id: "c-vpn-2", topic: "vpn", text: "Ich kann IPsec (IKE, ESP, AH, Tunnel- und Transportmodus) erklären und mit TLS-VPN und WireGuard vergleichen.", exam: ["AP2"] },
    { id: "c-vpn-3", topic: "vpn", text: "Ich kann Ursachen für einen fehlerhaften Tunnel nennen (Parameter, überlappende Netze, blockierte Ports, MTU) und Lösungen vorschlagen.", exam: ["AP2"] },
    { id: "c-vpn-4", topic: "vpn", text: "Ich kann MACsec, IPsec und TLS nach OSI-Schicht und Schutzumfang (Hop-by-Hop oder Ende zu Ende) einordnen.", exam: ["AP2"] },
    { id: "c-auth-1", topic: "authentifizierung", text: "Ich kann den Ablauf von 802.1X mit RADIUS beschreiben und EAP-TLS mit PEAP vergleichen.", exam: ["AP2"] },
    { id: "c-auth-2", topic: "authentifizierung", text: "Ich kann MFA-Verfahren nach Sicherheit bewerten und Kerberos, SSO, NAC und Zero Trust erklären.", exam: ["AP2"] },
    { id: "c-wlan-1", topic: "wlan-email", text: "Ich kann WPA2 und WPA3 sowie Personal und Enterprise vergleichen und ein getrenntes Gäste-WLAN planen.", exam: ["AP2"] },
    { id: "c-wlan-2", topic: "wlan-email", text: "Ich kann Risiken von Bluetooth (Bluejacking, Bluesnarfing, unsicheres Pairing) beschreiben und Schutzmaßnahmen nennen.", exam: ["AP2"] },
    { id: "c-mail-1", topic: "wlan-email", text: "Ich kann SPF-, DKIM- und DMARC-Einträge erstellen und Transport- von Ende-zu-Ende-Verschlüsselung (S/MIME, PGP) abgrenzen.", exam: ["AP2"] },
    { id: "c-hv-1", topic: "hochverfuegbarkeit", text: "Ich kann Verfügbarkeiten von Serien- und Parallelschaltungen sowie Ausfallzeiten pro Jahr berechnen.", exam: ["AP2"] },
    { id: "c-hv-2", topic: "hochverfuegbarkeit", text: "Ich kann Single Points of Failure finden und Redundanz mit Cluster, Load Balancer, FHRP und LACP planen.", exam: ["AP2"] },
    { id: "c-sch-1", topic: "schwachstellen-haertung", text: "Ich kann Schwachstellen mit CVE und CVSS bewerten und nach Erreichbarkeit, aktiver Ausnutzung und Kritikalität priorisieren.", exam: ["AP2"] },
    { id: "c-sch-2", topic: "schwachstellen-haertung", text: "Ich kann einen Patchmanagement-Prozess beschreiben und Härtungsmaßnahmen für Server und Netzgeräte begründen.", exam: ["AP2"] },
    { id: "c-sch-3", topic: "schwachstellen-haertung", text: "Ich kann Ziel, Phasen, Varianten (Black/Grey/White Box) und rechtliche Voraussetzungen eines Penetrationstests erklären.", exam: ["AP2"] },
    { id: "c-mdm-1", topic: "endgeraete-mdm", text: "Ich kann Funktionen eines MDM nennen und für ein Szenario begründen (Richtlinien, Container, App-Verwaltung, Compliance, Fernsperre und Fernlöschung).", exam: ["AP2"] },
    { id: "c-mdm-2", topic: "endgeraete-mdm", text: "Ich kann COBO, COPE, CYOD und BYOD vergleichen, Full und Selective Wipe unterscheiden und die rechtlichen Anforderungen (Betriebsrat, DSGVO) erläutern.", exam: ["AP2"] },
    { id: "c-mdm-3", topic: "endgeraete-mdm", text: "Ich kann EDR, DLP und eine IT-Nutzungsrichtlinie erklären und Geräte- mit Benutzerlizenzen rechnerisch vergleichen.", exam: ["AP2"] },
    { id: "c-nf-1", topic: "notfall-betrieb", text: "Ich kann MTPD, RTO und RPO erklären und an einer BIA prüfen, ob Sicherungs- und Wiederherstellungskonzept ausreichen.", exam: ["AP2"] },
    { id: "c-nf-2", topic: "notfall-betrieb", text: "Ich kann Inhalte eines Notfallhandbuchs nennen und die Schritte der Incident Response bei Ransomware in die richtige Reihenfolge bringen.", exam: ["AP2"] },
    { id: "c-nf-3", topic: "notfall-betrieb", text: "Ich kann die zulässige Ausfallzeit aus einem SLA berechnen und Wartungsfenster sowie Changes korrekt planen.", exam: ["AP2"] },
  ],
  glossary: [
    { term: "AES", def: "Advanced Encryption Standard – symmetrisches Blockverschlüsselungsverfahren mit 128 Bit Blockgröße und 128, 192 oder 256 Bit Schlüssellänge; heutiger Standard." },
    { term: "ALE", def: "Annual Loss Expectancy – erwarteter jährlicher Schaden durch ein Risiko, berechnet als SLE × ARO." },
    { term: "APT", def: "Advanced Persistent Threat – gezielter, lang andauernder und gut ausgestatteter Angriff, oft durch staatliche Akteure." },
    { term: "ARP-Spoofing", def: "Angriff, bei dem gefälschte ARP-Antworten eine fremde IP-Adresse (meist das Gateway) mit der MAC des Angreifers verknüpfen, um Verkehr umzuleiten (Man-in-the-Middle)." },
    { term: "BIA", def: "Business Impact Analyse – ermittelt je Geschäftsprozess, welcher Schaden mit der Ausfalldauer entsteht, und legt MTPD, RTO und RPO fest." },
    { term: "BCM", def: "Business Continuity Management – Managementprozess, der die Fortführung wichtiger Geschäftsprozesse bei Notfällen sicherstellt (BSI 200-4, ISO 22301)." },
    { term: "BYOD", def: "Bring Your Own Device – Beschäftigte nutzen private Geräte dienstlich; Firmendaten werden per MDM in einem getrennten Container verwaltet." },
    { term: "Conditional Access", def: "Bedingter Zugriff – Zugriff auf Firmendienste wird nur gewährt, wenn Bedingungen wie MFA, konformes Gerät oder vertrauenswürdiger Standort erfüllt sind." },
    { term: "COPE", def: "Corporate Owned, Personally Enabled – Firmengerät, dessen private Nutzung in einem getrennten Bereich erlaubt ist." },
    { term: "CVE", def: "Common Vulnerabilities and Exposures – eindeutige Kennung öffentlich bekannter Schwachstellen im Format CVE-Jahr-Nummer." },
    { term: "CVSS", def: "Common Vulnerability Scoring System – bewertet den Schweregrad einer Schwachstelle von 0,0 bis 10,0 (Low, Medium, High, Critical)." },
    { term: "DAI", def: "Dynamic ARP Inspection – Switch-Funktion, die ARP-Pakete gegen die DHCP-Snooping-Bindungstabelle prüft und gefälschte verwirft." },
    { term: "DHCP-Snooping", def: "Switch-Funktion, die DHCP-Antworten nur über vertrauenswürdige Ports zulässt und eine Tabelle aus IP, MAC und Port führt." },
    { term: "DKIM", def: "DomainKeys Identified Mail – der sendende Server signiert Mails; der öffentliche Schlüssel steht im DNS unter selektor._domainkey." },
    { term: "DMARC", def: "Richtlinie im DNS (_dmarc), die festlegt, wie Empfänger mit Mails umgehen, die SPF/DKIM nicht bestehen oder nicht zur From-Domain passen." },
    { term: "DLP", def: "Data Loss Prevention – erkennt und verhindert den unerlaubten Abfluss vertraulicher Daten, z. B. per E-Mail, USB-Stick oder Cloud-Upload." },
    { term: "Greylisting", def: "Spamschutz am Mailserver: Mails unbekannter Absender werden zunächst vorübergehend abgewiesen; regelkonforme Server stellen später erneut zu." },
    { term: "DMZ", def: "Demilitarisierte Zone – durch Firewalls abgetrenntes Netzsegment für öffentlich erreichbare Dienste zwischen Internet und internem Netz." },
    { term: "EDR", def: "Endpoint Detection and Response – überwacht Endgeräte verhaltensbasiert, erkennt Angriffe und kann Geräte isolieren." },
    { term: "ESP", def: "Encapsulating Security Payload – IPsec-Protokoll (IP-Protokoll 50), das Nutzdaten verschlüsselt und ihre Integrität sichert." },
    { term: "Forward Secrecy", def: "Eigenschaft eines Schlüsselaustauschs (z. B. ECDHE), bei der ein späterer Diebstahl des langfristigen privaten Schlüssels alte Sitzungen nicht offenlegt." },
    { term: "HMAC", def: "Keyed-Hash Message Authentication Code – Prüfwert aus Hashfunktion und geheimem Schlüssel für Integrität und Authentizität." },
    { term: "Honeypot", def: "Absichtlich angreifbar wirkendes System ohne echte Daten, das Angriffe anlockt, erkennt und Informationen über Angreifer liefert." },
    { term: "IDS / IPS", def: "Intrusion Detection System erkennt und meldet Angriffe; Intrusion Prevention System sitzt inline und blockiert sie zusätzlich." },
    { term: "IKE", def: "Internet Key Exchange – IPsec-Protokoll (UDP 500/4500), das Partner authentifiziert, Verfahren aushandelt und Schlüssel erzeugt." },
    { term: "ISMS", def: "Informationssicherheits-Managementsystem – Regeln, Rollen und Prozesse zur dauerhaften Steuerung der Informationssicherheit, z. B. nach ISO/IEC 27001." },
    { term: "Kerberos", def: "Ticketbasiertes Authentifizierungsprotokoll (Port 88) im Active Directory; der KDC stellt TGT und Service-Tickets aus und ermöglicht Single Sign-On." },
    { term: "MACsec", def: "IEEE 802.1AE – Verschlüsselung und Integritätsschutz von Ethernet-Frames auf Schicht 2 zwischen direkt verbundenen Geräten (Hop-by-Hop)." },
    { term: "MDM", def: "Mobile Device Management – zentrale Verwaltung mobiler Geräte: Registrierung, Richtlinien, App-Verteilung, Compliance-Prüfung, Fernsperre und Fernlöschung." },
    { term: "MFA", def: "Mehr-Faktor-Authentifizierung – Anmeldung mit mindestens zwei Faktoren aus verschiedenen Kategorien (Wissen, Besitz, Inhärenz)." },
    { term: "MTPD", def: "Maximum Tolerable Period of Disruption – maximal tolerierbare Ausfallzeit, nach der der Schaden eines Prozessausfalls untragbar wird." },
    { term: "NAC", def: "Network Access Control – prüft vor dem Netzzugang Identität und Gerätezustand und weist nicht konforme Geräte einem Quarantänenetz zu." },
    { term: "NGFW", def: "Next Generation Firewall – Firewall mit Stateful Inspection, Deep Packet Inspection, Anwendungs- und Benutzererkennung sowie IPS." },
    { term: "NIS2", def: "EU-Richtlinie für ein hohes Cybersicherheitsniveau; in Deutschland durch das NIS2-Umsetzungsgesetz im BSIG umgesetzt (Registrierung, Risikomanagement, Meldepflichten)." },
    { term: "OCSP", def: "Online Certificate Status Protocol – Online-Abfrage, ob ein einzelnes Zertifikat gültig oder gesperrt ist." },
    { term: "Penetrationstest", def: "Autorisierter, kontrollierter Angriff auf IT-Systeme, um ausnutzbare Schwachstellen zu finden und zu dokumentieren." },
    { term: "PKI", def: "Public-Key-Infrastruktur – System aus CAs, Registrierungsstellen, Verzeichnissen und Sperrdiensten zum Ausstellen und Verwalten von Zertifikaten." },
    { term: "RADIUS", def: "Protokoll für zentrale Authentifizierung, Autorisierung und Accounting (UDP 1812/1813), z. B. für 802.1X, WLAN und VPN." },
    { term: "RPO", def: "Recovery Point Objective – maximal tolerierbarer Datenverlust als Zeitspanne vor einem Ausfall; bestimmt das Sicherungsintervall." },
    { term: "RTO", def: "Recovery Time Objective – Zeit, innerhalb der ein Prozess oder System nach einem Ausfall wieder laufen muss; muss kleiner als die MTPD sein." },
    { term: "Selective Wipe", def: "Gezielte Fernlöschung nur der Firmendaten und Firmen-Apps (Container) auf einem Mobilgerät; private Daten bleiben erhalten." },
    { term: "SIEM", def: "Security Information and Event Management – zentrales System, das Logs sammelt, normalisiert, korreliert und bei Auffälligkeiten alarmiert." },
    { term: "SLA", def: "Service Level Agreement – Vereinbarung über messbare Leistungen wie Servicezeit, Verfügbarkeit, Reaktions- und Lösungszeiten." },
    { term: "SPF", def: "Sender Policy Framework – DNS-TXT-Eintrag, der festlegt, welche Server E-Mails für eine Domain versenden dürfen." },
    { term: "SPOF", def: "Single Point of Failure – Komponente, deren Ausfall das gesamte System stoppt, weil sie nicht redundant ausgelegt ist." },
    { term: "WAF", def: "Web Application Firewall – prüft HTTP(S)-Anfragen auf Anwendungsebene und schützt Webanwendungen vor Angriffen wie SQL-Injection und XSS." },
    { term: "WireGuard", def: "Schlankes, modernes VPN-Protokoll über UDP mit festen Kryptoverfahren; Gegenstellen werden über öffentliche Schlüssel identifiziert." },
    { term: "Zero Trust", def: "Sicherheitsmodell ohne implizites Vertrauen ins Netz: Jeder Zugriff wird anhand von Identität, Gerät und Kontext geprüft und minimal berechtigt." },
  ],
  links: [
    { title: "Bundesamt für Sicherheit in der Informationstechnik (BSI)", url: "https://www.bsi.bund.de/", note: "IT-Grundschutz-Kompendium, BSI-Standards 200-1 bis 200-4, Informationen zu NIS2 und aktuellen Warnungen" },
    { title: "DSGVO im Volltext (EUR-Lex)", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj", note: "Art. 25, 28, 32, 33 und 34 für den IT-Betrieb" },
    { title: "Bundesdatenschutzgesetz (BDSG)", url: "https://www.gesetze-im-internet.de/bdsg_2018/", note: "gesetze-im-internet.de" },
    { title: "Betriebsverfassungsgesetz (BetrVG)", url: "https://www.gesetze-im-internet.de/betrvg/", note: "§ 87 Abs. 1 Nr. 6: Mitbestimmung bei SIEM, Monitoring und MDM" },
    { title: "CISA – Known Exploited Vulnerabilities Catalog", url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog", note: "Liste aktiv ausgenutzter Schwachstellen zur Priorisierung" },
    { title: "FIRST – Common Vulnerability Scoring System (CVSS)", url: "https://www.first.org/cvss/", note: "Spezifikation und Rechner für CVSS 4.0 und 3.1" },
    { title: "CVE-Programm", url: "https://www.cve.org/", note: "Suche nach Schwachstellen-Kennungen" },
    { title: "WireGuard – offizielle Projektseite", url: "https://www.wireguard.com/", note: "Funktionsweise, Schnellstart und Konfiguration" },
    { title: "Wireshark-Dokumentation", url: "https://www.wireshark.org/docs/", note: "Benutzerhandbuch und Anzeigefilter" },
    { title: "DMARC.org", url: "https://dmarc.org/", note: "Hintergründe zu SPF, DKIM und DMARC" },
  ]
});
