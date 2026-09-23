/* LF 10b – Serverdienste bereitstellen und Administrationsaufgaben automatisieren */
LEARN.module({
  id: "lf10",
  type: "lf",
  nr: 10,
  title: "Serverdienste bereitstellen und Administrationsaufgaben automatisieren",
  year: 3,
  hours: 80,
  exam: ["AP2"],
  summary: "Serverdienste wie DHCP, DNS, Web, Mail und Active Directory unter Windows Server und Linux planen, einrichten, absichern, sichern und überwachen – und wiederkehrende Administrationsaufgaben mit PowerShell- und Bash-Skripten automatisieren.",
  goals: [
    "Serverdienste und Plattformen (On-Premises, Virtualisierung, Cloud) nach Verfügbarkeit, Skalierbarkeit, Administrierbarkeit, Kosten, Lizenz und Sicherheit vergleichen und begründet auswählen",
    "DHCP, DNS sowie Web-, Mail-, Zeit-, Datei- und Druckdienste konfigurieren, testen und Fehler systematisch eingrenzen",
    "Berechtigungskonzepte mit Active Directory (AGDLP, Gruppenrichtlinien), NTFS-/Freigaberechten und Linux-Rechten entwerfen und effektive Rechte berechnen",
    "Linux-Server über die Shell administrieren: Verzeichnisstruktur, Pakete, Dienste, Logs, Benutzer und SSH",
    "Virtualisierungs- und Speicherlösungen (Hypervisor, Container, RAID, DAS/NAS/SAN) planen und Kapazitäten berechnen",
    "Datensicherungskonzepte mit Sicherungsarten, Generationenprinzip, 3-2-1-Regel sowie RPO/RTO erstellen und Backup- und Restore-Dauer berechnen",
    "Server und Dienste mit SNMP, Syslog, Ereignisanzeige und Monitoring-Werkzeugen überwachen, Schwellwerte festlegen und Maßnahmen bei kritischen Zuständen ableiten",
    "Administrationsaufgaben mit PowerShell, Bash und cron automatisieren sowie vorgegebene Skripte lesen, ergänzen und korrigieren"
  ],
  school: {
    hinweise: "Aktueller Unterrichtsschwerpunkt (Stand September 2026): Serverdienste – DHCP und DNS mit Übungsaufgaben sowie eine Packet-Tracer-Übung, in der DHCP-, DNS-, Web-, Mail- und Zeitserver (NTP) in einem gemeinsamen Netz eingerichtet und mit ping, Browser und E-Mail-Client getestet werden. Weitere Themenblöcke laut Übersicht der Lehrkraft: Betriebssysteme, Rechte im Dateisystem, Active Directory, Linux (begleitend Cisco NDG Linux Essentials), Virtualisierung, Speicher und RAID, Datensicherung sowie Werkzeuge zur Server- und Dienstüberwachung.",
    themen: [
      "Serverdienste & Plattformen (DHCP, DNS, Web, Mail, NTP)",
      "Eigenschaften von Betriebssystemen",
      "Rechte im Dateisystem (NTFS, Freigaben, Linux)",
      "Active Directory",
      "Linux (Cisco NDG Linux Essentials)",
      "Virtualisierung",
      "Speicher und RAID",
      "Datensicherung",
      "Tools zur Server- und Dienstüberwachung",
      "Automatisierung mit PowerShell und Bash"
    ]
  },
  topics: [
    {
      id: "serverdienste",
      title: "Serverdienste: Web, Mail, Zeit, Datei & Druck",
      exam: ["AP1", "AP2"],
      summary: "Welche Dienste ein Server bereitstellt, über welche Ports sie laufen und wie Web-, Mail-, NTP-, Datei- und Druckserver zusammenspielen.",
      html: `
        <p>Ein <strong>Serverdienst</strong> nimmt Anfragen von Clients über einen <strong>Port</strong> entgegen und erbringt eine Leistung (Client-Server-Prinzip). Unter Windows heißt er <em>Dienst</em> und wird als <strong>Rolle</strong> installiert (Server-Manager, Windows Admin Center oder <code>Install-WindowsFeature</code>). Unter Linux heißt er <strong>Daemon</strong>, kommt als Paket und wird mit <code>systemctl</code> gesteuert.</p>
        <h5>Dienste, Ports und typische Produkte</h5>
        <table><thead><tr><th>Dienst</th><th>Protokoll / Port</th><th>Windows</th><th>Linux</th></tr></thead><tbody>
        <tr><td>Adressvergabe</td><td>DHCP, UDP 67 (Server) / 68 (Client)</td><td>DHCP-Server-Rolle</td><td>Kea, dnsmasq</td></tr>
        <tr><td>Namensauflösung</td><td>DNS, UDP/TCP 53</td><td>DNS-Server-Rolle</td><td>BIND, Unbound</td></tr>
        <tr><td>Web</td><td>HTTP TCP 80, HTTPS TCP 443 (HTTP/3: UDP 443)</td><td>IIS</td><td>Apache, nginx</td></tr>
        <tr><td>Mail senden</td><td>SMTP TCP 25, Submission 587 / 465</td><td>Exchange Server</td><td>Postfix</td></tr>
        <tr><td>Mail abrufen</td><td>IMAP 143 / 993, POP3 110 / 995</td><td>Exchange Server</td><td>Dovecot</td></tr>
        <tr><td>Zeit</td><td>NTP, UDP 123</td><td>W32Time</td><td>chrony</td></tr>
        <tr><td>Dateien</td><td>SMB TCP 445, NFS TCP 2049</td><td>Datei- und Speicherdienste</td><td>Samba, NFS-Server</td></tr>
        <tr><td>Drucken</td><td>IPP TCP 631, RAW TCP 9100</td><td>Druck- und Dokumentdienste</td><td>CUPS</td></tr>
        <tr><td>Fernwartung</td><td>SSH TCP 22, RDP TCP 3389</td><td>RDP, OpenSSH</td><td>OpenSSH</td></tr>
        </tbody></table>
        <h5>Webserver</h5>
        <ul>
          <li><strong>Apache</strong>: modular, sehr verbreitet, Konfiguration auch pro Verzeichnis (<code>.htaccess</code>).</li>
          <li><strong>nginx</strong>: ereignisgesteuert und ressourcenschonend, oft als <strong>Reverse Proxy</strong> oder Load Balancer vor anderen Servern.</li>
          <li><strong>IIS</strong>: Webserver von Windows Server mit grafischer Verwaltung und Anwendungspools für ASP.NET.</li>
        </ul>
        <p>Mehrere Websites auf einer IP-Adresse trennst du über <strong>virtuelle Hosts</strong> (Auswertung des Host-Headers, bei HTTPS über SNI). Für HTTPS brauchst du ein <strong>Zertifikat</strong> (z. B. automatisch per ACME/Let's Encrypt) und aktivierst nur TLS 1.2 und 1.3. HTTP leitest du per Statuscode 301 auf HTTPS um.</p>
        <pre><code>server {
    listen 443 ssl;
    server_name www.nordlicht-it.de;
    ssl_certificate     /etc/ssl/certs/nordlicht.crt;
    ssl_certificate_key /etc/ssl/private/nordlicht.key;
    root /var/www/nordlicht;
}</code></pre>
        <p>Ob ein Webdienst richtig antwortet, erkennst du am <strong>HTTP-Statuscode</strong> – im Browser, mit <code>curl -I</code> oder im Monitoring:</p>
        <table><thead><tr><th>Klasse</th><th>Bedeutung</th><th>typische Codes</th></tr></thead><tbody>
        <tr><td>2xx</td><td>Erfolg</td><td>200 OK</td></tr>
        <tr><td>3xx</td><td>Umleitung</td><td>301 dauerhaft verschoben (z. B. HTTP → HTTPS), 302 vorübergehend</td></tr>
        <tr><td>4xx</td><td>Fehler auf Client-Seite</td><td>401 Anmeldung nötig, 403 verboten, 404 nicht gefunden</td></tr>
        <tr><td>5xx</td><td>Fehler auf Server-Seite</td><td>500 interner Fehler, 502 Bad Gateway (Reverse Proxy erreicht das Backend nicht), 503 Dienst nicht verfügbar</td></tr>
        </tbody></table>
        <h5>Mailserver: Wer macht was?</h5>
        <pre class="ascii">MUA --SMTP 587--&gt; MSA/MTA (Absender) --DNS: MX?--&gt; MTA (Empfänger) --&gt; MDA --&gt; Postfach
                                    SMTP 25                         MUA &lt;--IMAP 993 / POP3 995--</pre>
        <ul>
          <li><strong>MUA</strong> (Mail User Agent): Mailprogramm, z. B. Outlook, Thunderbird.</li>
          <li><strong>MTA</strong> (Mail Transfer Agent): transportiert Mails per SMTP zwischen Servern, z. B. Postfix. Den Zielserver findet er über den <strong>MX-Record</strong> der Empfängerdomain (kleinere Priorität wird bevorzugt).</li>
          <li><strong>MDA</strong> (Mail Delivery Agent): legt die Mail ins Postfach, z. B. Dovecot.</li>
        </ul>
        <table><thead><tr><th></th><th>POP3</th><th>IMAP</th></tr></thead><tbody>
        <tr><td>Prinzip</td><td>Mails herunterladen, meist auf dem Server löschen</td><td>Mails bleiben auf dem Server, Ordner werden synchronisiert</td></tr>
        <tr><td>Mehrere Geräte</td><td>ungeeignet</td><td>ideal (PC, Notebook, Smartphone)</td></tr>
        <tr><td>Ports (unverschlüsselt / TLS)</td><td>110 / 995</td><td>143 / 993</td></tr>
        </tbody></table>
        <p>Gegen Spoofing veröffentlichst du im DNS <strong>SPF</strong> (erlaubte Absenderserver), <strong>DKIM</strong> (öffentlicher Schlüssel für die Signatur) und <strong>DMARC</strong> (Richtlinie bei Fehlschlag) als TXT-Records.</p>
        <h5>Zeitserver (NTP)</h5>
        <p>NTP synchronisiert Uhren hierarchisch über <strong>Stratum</strong>-Ebenen: Stratum 0 ist die Referenzuhr (Atomuhr, GPS), Stratum 1 ein direkt angebundener Server, jede weitere Ebene zählt +1. Exakte Zeit brauchst du für Kerberos (Standardtoleranz 5 Minuten), Zertifikate und zeitlich vergleichbare Logs. In einer AD-Domäne holt der <strong>PDC-Emulator</strong> die Zeit von extern, alle anderen synchronisieren sich über die Domänenhierarchie.</p>
        <pre><code>w32tm /query /status        (Windows)
chronyc sources             (Linux)
ntp server 192.168.50.14    (Cisco-Router, globaler Konfigurationsmodus)
show ntp associations       (Cisco: Zeitquellen und Synchronisation prüfen)
show clock                  (Cisco: aktuelle Uhrzeit anzeigen)</code></pre>
        <h5>Datei- und Druckdienste</h5>
        <p><strong>SMB</strong> ist das Freigabeprotokoll von Windows (unter Linux: Samba). SMB 3 kann verschlüsseln, das unsichere SMB 1 schaltest du ab. <strong>NFS</strong> ist der Standard unter Unix/Linux. Ein <strong>Druckserver</strong> verwaltet Treiber und Warteschlangen zentral, verteilt Drucker (z. B. per Gruppenrichtlinie) und kann mehrere gleiche Geräte zu einem <strong>Druckerpool</strong> bündeln.</p>
        <div class="callout merke"><strong>Merke:</strong> Senden immer per SMTP, Abholen per IMAP oder POP3. Den Mailserver einer Domain findet man über den MX-Record, den Namen dahinter über einen A- bzw. AAAA-Record.</div>
        <div class="callout pruefung"><strong>In der Prüfung:</strong> Ports und Protokolle <em>zuordnen</em>, die Stationen einer E-Mail <em>beschreiben</em>, POP3 und IMAP <em>vergleichen</em> und für ein Szenario einen Webserver oder Reverse Proxy <em>begründet auswählen</em>.</div>`
    },
    {
      id: "dhcp-dns",
      title: "DHCP und DNS",
      exam: ["AP1", "AP2"],
      summary: "Automatische Adressvergabe mit Bereichen, Reservierungen und Relay sowie Namensauflösung mit Zonen, Records, Forward- und Reverse-Lookup.",
      html: `
        <h5>DHCP – Ablauf (DORA)</h5>
        <table><thead><tr><th>Schritt</th><th>Richtung</th><th>Inhalt</th></tr></thead><tbody>
        <tr><td><strong>D</strong>iscover</td><td>Client → Broadcast</td><td>„Gibt es einen DHCP-Server?“ (Quelle 0.0.0.0:68, Ziel 255.255.255.255:67)</td></tr>
        <tr><td><strong>O</strong>ffer</td><td>Server → Client</td><td>Angebot: IP-Adresse, Maske, Leasedauer, Optionen</td></tr>
        <tr><td><strong>R</strong>equest</td><td>Client → Broadcast</td><td>„Ich nehme das Angebot von Server X“ – andere Server ziehen ihr Angebot zurück</td></tr>
        <tr><td><strong>A</strong>cknowledge</td><td>Server → Client</td><td>Bestätigung, ab jetzt gilt die Lease</td></tr>
        </tbody></table>
        <p>Nach 50 % der Leasedauer (T1) verlängert der Client direkt beim Server, nach 87,5 % (T2) fragt er per Broadcast jeden Server. Findet ein Windows-Client keinen Server, gibt er sich eine <strong>APIPA</strong>-Adresse aus 169.254.0.0/16.</p>
        <h5>Begriffe am DHCP-Server</h5>
        <ul>
          <li><strong>Bereich (Scope)</strong>: zusammenhängender Adresspool eines Subnetzes, z. B. 192.168.50.100–192.168.50.149.</li>
          <li><strong>Ausschluss</strong>: Adressen im Bereich, die nie vergeben werden (z. B. für Drucker mit fester IP).</li>
          <li><strong>Reservierung</strong>: feste Zuordnung MAC-Adresse → IP-Adresse. Das Gerät bekommt immer dieselbe Adresse, bleibt aber zentral verwaltet.</li>
          <li><strong>Optionen</strong>: 003 Router (Gateway), 006 DNS-Server, 015 DNS-Domänenname, 066/067 PXE-Boot.</li>
          <li><strong>DHCP-Relay</strong>: Broadcasts enden am Router. Ein Relay-Agent (Cisco: <code>ip helper-address</code>) leitet sie als Unicast an den DHCP-Server weiter und trägt seine Schnittstellen-IP (giaddr) ein. Daran erkennt der Server, aus welchem Bereich er vergeben muss.</li>
        </ul>
        <p>Ist ein Windows-DHCP-Server Mitglied einer AD-Domäne, muss er im Active Directory <strong>autorisiert</strong> werden, bevor er Adressen vergibt (Schutz vor fremden „Rogue“-DHCP-Servern). Ausfallsicherheit erreichst du mit <strong>DHCP-Failover</strong> (Lastverteilung oder Hot Standby) zwischen zwei Servern.</p>
        <div class="callout beispiel"><strong>Beispiel:</strong> Bereich 192.168.50.100–192.168.50.149 → 149 − 100 + 1 = <strong>50</strong> Adressen. Ausschluss .100–.109 → 50 − 10 = 40. Fünf Reservierungen → 40 − 5 = <strong>35</strong> Adressen für beliebige Clients. Leasedauer 8 Tage → T1 nach 4 Tagen, T2 nach 8 × 0,875 = 7 Tagen.</div>
        <h5>DNS – Grundlagen</h5>
        <p>DNS übersetzt Namen in IP-Adressen und ist hierarchisch aufgebaut: Root (.) → Top-Level-Domain (de) → Second-Level-Domain (nordlicht-it) → Host (www). Der vollständige Name heißt <strong>FQDN</strong>: <code>www.nordlicht-it.de.</code></p>
        <ul>
          <li><strong>Rekursive Anfrage</strong>: Der Client fragt seinen DNS-Server und will eine fertige Antwort.</li>
          <li><strong>Iterative Anfrage</strong>: Der DNS-Server fragt sich selbst durch (Root → TLD → autoritativer Server) und speichert Antworten für die Dauer der <strong>TTL</strong> im Cache.</li>
          <li><strong>Weiterleitung (Forwarder)</strong>: Unbekannte Anfragen gehen an einen festgelegten Server, z. B. den des Providers. Eine bedingte Weiterleitung gilt nur für eine bestimmte Domain.</li>
        </ul>
        <h5>Zonen und Records</h5>
        <p>Eine <strong>Forward-Lookup-Zone</strong> löst Name → IP auf, eine <strong>Reverse-Lookup-Zone</strong> IP → Name. Den Reverse-Namen bildest du aus den Netz-Oktetten in umgekehrter Reihenfolge: Netz 192.168.50.0/24 → <code>50.168.192.in-addr.arpa</code>. Die <strong>primäre</strong> Zone ist beschreibbar, eine <strong>sekundäre</strong> Zone ist eine schreibgeschützte Kopie (Zonentransfer über TCP 53). Im Active Directory speicherst du Zonen <strong>AD-integriert</strong> – sie werden dann mit dem AD repliziert.</p>
        <table><thead><tr><th>Record</th><th>Bedeutung</th></tr></thead><tbody>
        <tr><td>A / AAAA</td><td>Name → IPv4 / IPv6</td></tr>
        <tr><td>CNAME</td><td>Aliasname → anderer Name</td></tr>
        <tr><td>MX</td><td>Mailserver der Domain mit Priorität</td></tr>
        <tr><td>NS</td><td>zuständiger (autoritativer) Nameserver</td></tr>
        <tr><td>SOA</td><td>Verwaltungsdaten der Zone: primärer Server, Seriennummer, Zeiten</td></tr>
        <tr><td>PTR</td><td>IP → Name (Reverse-Zone)</td></tr>
        <tr><td>SRV</td><td>Dienst mit Port, z. B. <code>_ldap._tcp</code> zum Finden der Domänencontroller</td></tr>
        <tr><td>TXT</td><td>freier Text, z. B. SPF, DKIM, DMARC</td></tr>
        </tbody></table>
        <pre><code>; Forward-Zone nordlicht-it.de (Auszug)
@        IN NS    ns1.nordlicht-it.de.
@        IN MX 10 mail.nordlicht-it.de.
ns1      IN A     192.168.50.11
www      IN A     192.168.50.12
mail     IN A     192.168.50.13
intranet IN CNAME www
; Reverse-Zone 50.168.192.in-addr.arpa
12       IN PTR   www.nordlicht-it.de.</code></pre>
        <h5>Testen</h5>
        <pre><code>ipconfig /all | ipconfig /release | ipconfig /renew | ipconfig /flushdns
nslookup www.nordlicht-it.de          (Name → IP)
nslookup 192.168.50.12                (Reverse-Lookup)
nslookup -type=MX nordlicht-it.de
dig www.nordlicht-it.de A             (Linux)</code></pre>
        <h5>Fehler systematisch eingrenzen</h5>
        <table><thead><tr><th>Beobachtung</th><th>wahrscheinliche Ursache</th><th>nächster Schritt</th></tr></thead><tbody>
        <tr><td>Client hat 169.254.x.x</td><td>keine Antwort vom DHCP-Server (Server aus, Bereich voll, Relay fehlt)</td><td>DHCP-Dienst, freie Adressen und <code>ip helper-address</code> prüfen</td></tr>
        <tr><td><code>ping 192.168.50.12</code> klappt, <code>ping www…</code> nicht</td><td>Namensauflösung gestört</td><td>DNS-Server in <code>ipconfig /all</code> prüfen, <code>nslookup</code>, Record vorhanden?</td></tr>
        <tr><td>nslookup liefert alte IP-Adresse</td><td>veralteter Eintrag im Cache (TTL noch nicht abgelaufen)</td><td><code>ipconfig /flushdns</code>, auf dem Server Cache leeren</td></tr>
        <tr><td>Internet geht, interne Namen nicht</td><td>Client nutzt einen externen DNS-Server (Option 006 falsch)</td><td>internen DNS-Server per DHCP verteilen</td></tr>
        <tr><td>Adresskonflikt-Meldung</td><td>feste IP liegt im DHCP-Bereich</td><td>Adresse ausschließen oder Reservierung nutzen</td></tr>
        </tbody></table>
        <div class="callout tipp"><strong>Tipp zur Domänenendung:</strong> Übungsnetze (z. B. in Packet Tracer) nutzen oft <code>.local</code>. Im echten Netz ist <code>.local</code> für Multicast-DNS (mDNS, z. B. Bonjour) reserviert und kann zu Konflikten führen. Besser ist eine Subdomain der eigenen, registrierten Domain (z. B. <code>ad.nordlicht-it.de</code>) oder die für private Netze reservierte Endung <code>.internal</code>.</div>
        <div class="callout achtung"><strong>Achtung:</strong> Ein CNAME darf nicht neben anderen Records mit demselben Namen stehen und nicht an der Zonenspitze (@). Ein MX-Record muss auf einen Namen mit A/AAAA-Record zeigen, nie auf einen CNAME oder eine IP.</div>
        <div class="callout pruefung"><strong>In der Prüfung:</strong> DORA <em>beschreiben</em>, Bereiche und nutzbare Adressen <em>berechnen</em>, das DHCP-Relay über VLAN-Grenzen <em>erläutern</em>, für ein Szenario die nötigen DNS-Records <em>angeben</em> und eine nslookup-Ausgabe <em>interpretieren</em>.</div>`
    },
    {
      id: "betriebssysteme",
      title: "Betriebssysteme, Dateisysteme & Lizenzen",
      exam: ["AP1", "AP2"],
      summary: "Kernel, Prozesse und Dienste, Windows Server und Linux im Vergleich, Dateisysteme sowie Core- und CAL-Lizenzierung.",
      html: `
        <p>Ein Betriebssystem verwaltet die Hardware (CPU, RAM, Datenträger, Geräte) und bietet Anwendungen eine einheitliche Schnittstelle. Server-Betriebssysteme sind für Dauerbetrieb, viele gleichzeitige Benutzer und Netzwerkdienste ausgelegt.</p>
        <h5>Kernel, Prozesse und Dienste</h5>
        <ul>
          <li><strong>Kernel</strong>: Kern des Systems, läuft im privilegierten Kernel-Modus. Er übernimmt Prozess-, Speicher- und Geräteverwaltung (Treiber) sowie die Dateisysteme. Anwendungen laufen im Benutzermodus und nutzen den Kernel über Systemaufrufe.</li>
          <li><strong>Kernel-Arten</strong>: monolithisch (Linux, mit nachladbaren Modulen), Mikrokernel (z. B. QNX), Hybridkernel (Windows NT-Kernel, macOS).</li>
          <li><strong>Prozess</strong>: laufendes Programm mit eigenem Adressraum und Prozess-ID (PID). <strong>Threads</strong> sind Ausführungsstränge innerhalb eines Prozesses und teilen sich dessen Speicher. Der Scheduler verteilt die CPU-Zeit (präemptives Multitasking).</li>
          <li><strong>Dienst / Daemon</strong>: Hintergrundprozess, der ohne angemeldeten Benutzer läuft. Starttypen unter Windows: Automatisch, Automatisch (verzögerter Start), Manuell, Deaktiviert. Unter Linux startet <code>systemd</code> (PID 1) die Dienste.</li>
        </ul>
        <h5>Windows Server und Linux</h5>
        <table><thead><tr><th>Kriterium</th><th>Windows Server 2025</th><th>Linux (Debian/Ubuntu, RHEL-Familie)</th></tr></thead><tbody>
        <tr><td>Lizenz</td><td>kommerziell: Kernlizenzen + CALs</td><td>Open Source (GPL), Support per Abo (z. B. RHEL, Ubuntu Pro)</td></tr>
        <tr><td>Verwaltung</td><td>Desktopdarstellung oder Server Core, PowerShell, Windows Admin Center</td><td>Shell über SSH, Konfigurationsdateien, Ansible</td></tr>
        <tr><td>Stärken</td><td>Active Directory, Microsoft-Anwendungen</td><td>Web-, Mail-, Datenbankserver, Container, ressourcenschonend</td></tr>
        <tr><td>Updates</td><td>Windows Update, monatlicher Patchday (2. Dienstag)</td><td>Paketverwaltung <code>apt</code> / <code>dnf</code> aus Repositories</td></tr>
        </tbody></table>
        <p><strong>Server Core</strong> hat keine grafische Oberfläche: weniger Angriffsfläche, weniger Updates, weniger Ressourcenbedarf. Editionen: <strong>Standard</strong> (bis zu zwei VMs je vollständiger Lizenzierung), <strong>Datacenter</strong> (beliebig viele VMs), <strong>Essentials</strong> (kleine Firmen, begrenzt auf 25 Benutzer und 50 Geräte).</p>
        <h5>Dateisysteme</h5>
        <table><thead><tr><th>Dateisystem</th><th>Einsatz</th><th>Rechte</th><th>Besonderheit</th></tr></thead><tbody>
        <tr><td>FAT32</td><td>kleine USB-Sticks, EFI-Systempartition</td><td>keine</td><td>max. Dateigröße 4 GiB − 1 Byte, kein Journal</td></tr>
        <tr><td>exFAT</td><td>SD-Karten, große USB-Sticks, Austausch Windows/macOS/Linux</td><td>keine</td><td>sehr große Dateien, kein Journal</td></tr>
        <tr><td>NTFS</td><td>Windows-System- und Datenlaufwerke</td><td>ACLs</td><td>Journal, EFS-Verschlüsselung, Kontingente, Komprimierung, Schattenkopien</td></tr>
        <tr><td>ReFS</td><td>Windows-Server-Daten, Hyper-V, Storage Spaces</td><td>ACLs</td><td>Prüfsummen gegen Datenkorruption, nicht als Startlaufwerk</td></tr>
        <tr><td>ext4</td><td>Linux-Standard (Debian/Ubuntu)</td><td>rwx, ACLs</td><td>Journal, max. Dateigröße 16 TiB</td></tr>
        <tr><td>XFS</td><td>Standard bei RHEL</td><td>rwx, ACLs</td><td>Journal, stark bei großen Dateien, nicht verkleinerbar</td></tr>
        <tr><td>APFS</td><td>macOS, iOS</td><td>ACLs</td><td>Copy-on-Write, Snapshots, integrierte Verschlüsselung</td></tr>
        </tbody></table>
        <p>Ein <strong>Journal</strong> protokolliert Änderungen vor dem Schreiben. Nach einem Absturz ist das Dateisystem dadurch schnell wieder konsistent.</p>
        <h5>Lizenzierung Windows Server</h5>
        <ul>
          <li><strong>Kernlizenzen</strong>: Alle physischen Kerne sind zu lizenzieren, mindestens 8 pro Prozessor und 16 pro Server. Verkauft werden 2-Kern-Pakete (auch 16er-Pakete).</li>
          <li><strong>Standard</strong>: Sind alle Kerne lizenziert, darfst du 2 VMs betreiben. Für je 2 weitere VMs lizenzierst du alle Kerne erneut. <strong>Datacenter</strong> erlaubt beliebig viele VMs.</li>
          <li><strong>CAL</strong> (Client Access License): Jeder Zugriff braucht zusätzlich eine CAL – als <strong>User-CAL</strong> (pro Person, beliebig viele Geräte) oder <strong>Device-CAL</strong> (pro Gerät, beliebig viele Personen). Für Remotedesktopdienste brauchst du zusätzlich RDS-CALs. Die CAL-Version muss mindestens der Serverversion entsprechen.</li>
          <li><strong>Open Source</strong>: Die GPL erlaubt Nutzung, Änderung und Weitergabe. Wer veränderte Software weitergibt, muss sie wieder unter der GPL und mit Quellcode weitergeben (Copyleft).</li>
        </ul>
        <div class="callout beispiel"><strong>Beispiel:</strong> Server A: 2 CPUs × 16 Kerne = 32 Kerne → 32 Kernlizenzen = 32 ÷ 2 = <strong>16 Zwei-Kern-Pakete</strong>. Sollen darauf mit Standard 4 VMs laufen: 2 × 32 = 64 Kernlizenzen (32 Pakete). Server B: 1 CPU × 6 Kerne → Mindestmenge 16 Kernlizenzen = <strong>8 Pakete</strong>.<br>CALs: 30 Außendienstler mit Notebook und Smartphone → 30 User-CALs statt 60 Device-CALs. 60 Schichtkräfte teilen sich 20 PCs → 20 Device-CALs statt 60 User-CALs.</div>
        <div class="callout achtung"><strong>Achtung:</strong> Mit einer Standard-Lizenz darfst du nicht „2 VMs pro 16 Kerne“ rechnen. Es müssen immer <em>alle</em> physischen Kerne lizenziert sein – für jedes weitere VM-Paar erneut.</div>
        <h5>Lizenzmodelle und Lizenzmanagement</h5>
        <table><thead><tr><th>Modell</th><th>Prinzip</th><th>passt, wenn …</th></tr></thead><tbody>
        <tr><td>Kauf (Dauerlizenz)</td><td>einmalige Zahlung, optional Wartung/Software Assurance für neue Versionen</td><td>die Software lange unverändert genutzt wird</td></tr>
        <tr><td>Abonnement</td><td>monatliche oder jährliche Gebühr pro Benutzer, Gerät oder Kern, Updates inklusive</td><td>planbare Kosten und immer aktuelle Versionen gewünscht sind</td></tr>
        <tr><td>Pay-per-Use</td><td>Abrechnung nach tatsächlicher Nutzung (Stunden, Transaktionen), typisch in der Cloud</td><td>die Last stark schwankt</td></tr>
        <tr><td>Volumen-/Rahmenvertrag</td><td>Staffelpreise für viele Lizenzen, feste Laufzeit</td><td>ein Unternehmen viele Lizenzen gleichzeitig braucht</td></tr>
        <tr><td>OEM</td><td>an ein bestimmtes Gerät gebunden, nicht übertragbar</td><td>Software mit neuer Hardware gekauft wird</td></tr>
        <tr><td>Floating (Concurrent)</td><td>Ein Lizenzserver verwaltet einen Pool; gezählt werden gleichzeitige Nutzer</td><td>viele Personen eine teure Software nur zeitweise nutzen</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel Kauf oder Abo (4 Jahre = 48 Monate):</strong><br>
        Kauf: 3.600 € + 15 % Wartung pro Jahr → 3.600 € + 4 × 540 € = <strong>5.760 €</strong><br>
        Abo: 110 € pro Monat → 110 € × 48 = <strong>5.280 €</strong> → das Abo ist 480 € günstiger.<br>
        Break-even: Wartung = 540 € ÷ 12 = 45 € pro Monat → 3.600 € ÷ (110 € − 45 €) ≈ 55,4 → erst ab dem 56. Monat wäre der Kauf günstiger.</div>
        <p><strong>Lizenzmanagement</strong> ist ein Kreislauf: Bestand inventarisieren (Software-Inventar, License Monitoring), Soll und Ist abgleichen (Unter- bzw. Überlizenzierung erkennen), bedarfsgerecht beschaffen, Nachweise (Rechnungen, Verträge) zentral ablegen und für ein <strong>Lizenz-Audit</strong> des Herstellers bereithalten. Unterlizenzierung ist eine Urheberrechtsverletzung und führt zu Nachlizenzierung, Nachzahlungen und Schadensersatzforderungen.</p>
        <h5>Patch-Management und Lebenszyklus</h5>
        <ol>
          <li><strong>Inventar</strong>: Welche Systeme, Versionen und Firmwarestände gibt es?</li>
          <li><strong>Bewerten</strong>: Sicherheitsmeldungen auswerten und nach Kritikalität priorisieren (aktiv ausgenutzte Lücken zuerst).</li>
          <li><strong>Testen</strong>: in einer Testumgebung bzw. an Pilotsystemen (Staging: Test → Pilot → Produktion).</li>
          <li><strong>Verteilen</strong>: gestaffelt im abgestimmten Wartungsfenster, vorher Backup oder Snapshot als Rückfallebene.</li>
          <li><strong>Kontrollieren und dokumentieren</strong>: Erfolg prüfen, Fehlschläge nacharbeiten, Stand festhalten.</li>
        </ol>
        <p>Zentrale Werkzeuge sind z. B. WSUS (seit 2024 abgekündigt, aber noch enthalten), Configuration Manager (SCCM/MECM), Intune bzw. Azure Update Manager oder <code>apt</code> mit eigenen Repository-Spiegeln unter Linux. <strong>Firmware- und BIOS/UEFI-Updates</strong> planst du besonders sorgfältig: Stromversorgung sichern (USV), Versionshinweise lesen, Rückfallmöglichkeit prüfen.</p>
        <p>Jedes Produkt hat einen <strong>Lebenszyklus</strong>: Nach dem Ende des Supports (End of Life) gibt es keine Sicherheitsupdates mehr. Beispiele: Windows 10 ist seit dem 14.10.2025 aus dem regulären Support, für <strong>Windows Server 2016</strong> endet der erweiterte Support am <strong>12.01.2027</strong>. Solche Systeme musst du rechtzeitig migrieren oder – als Übergang – über kostenpflichtige Extended Security Updates absichern.</p>
        <div class="callout pruefung"><strong>In der Prüfung:</strong> ein Dateisystem für ein Szenario <em>auswählen und begründen</em>, Kernlizenzen und CALs <em>berechnen</em>, Server Core und Desktopdarstellung <em>vergleichen</em>, Lizenzmodelle (Kauf, Abo, Open Source) <em>unterscheiden</em> und über eine Laufzeit <em>berechnen</em> sowie einen Patch-Management-Prozess <em>beschreiben</em>.</div>`
    },
    {
      id: "ntfs-rechte",
      title: "NTFS- und Freigaberechte",
      exam: ["AP2"],
      summary: "Freigabe- und NTFS-Berechtigungen, Kumulation, Verweigern, Vererbung und die Berechnung effektiver Rechte.",
      html: `
        <p>Auf einen Windows-Dateiserver wirken zwei Schutzschichten: <strong>Freigaberechte</strong> gelten nur beim Zugriff über das Netzwerk (SMB). <strong>NTFS-Rechte</strong> gelten immer – lokal und über das Netzwerk.</p>
        <div class="grid-2">
        <div><table><thead><tr><th>Freigaberecht</th><th>erlaubt</th></tr></thead><tbody>
        <tr><td>Lesen</td><td>Dateien öffnen, Ordner anzeigen</td></tr>
        <tr><td>Ändern</td><td>+ anlegen, ändern, löschen</td></tr>
        <tr><td>Vollzugriff</td><td>+ Freigaberechte ändern</td></tr>
        </tbody></table></div>
        <div><table><thead><tr><th>NTFS-Recht</th><th>erlaubt</th></tr></thead><tbody>
        <tr><td>Lesen</td><td>Inhalte und Attribute lesen</td></tr>
        <tr><td>Ordnerinhalt anzeigen</td><td>nur bei Ordnern: auflisten</td></tr>
        <tr><td>Lesen, Ausführen</td><td>+ Programme starten</td></tr>
        <tr><td>Schreiben</td><td>anlegen und ändern, nicht löschen</td></tr>
        <tr><td>Ändern</td><td>lesen, schreiben, ausführen, löschen</td></tr>
        <tr><td>Vollzugriff</td><td>+ Rechte ändern, Besitz übernehmen</td></tr>
        </tbody></table></div>
        </div>
        <h5>Die vier Regeln</h5>
        <ol>
          <li><strong>Kumulation</strong>: Rechte aus dem Benutzerkonto und allen Gruppen addieren sich – getrennt für die Freigabe- und die NTFS-Ebene.</li>
          <li><strong>Verweigern</strong> hat Vorrang vor Zulassen. Genauer gilt: explizites Verweigern → explizites Zulassen → vererbtes Verweigern → vererbtes Zulassen. Ein explizites Zulassen schlägt also ein vererbtes Verweigern.</li>
          <li><strong>Netzwerkzugriff</strong>: Effektiv gilt das <strong>restriktivere</strong> Ergebnis aus Freigabe- und NTFS-Ebene.</li>
          <li><strong>Lokaler Zugriff</strong> (auch per RDP auf dem Server): Es gelten nur die NTFS-Rechte.</li>
        </ol>
        <div class="callout formel">Effektives Recht (Netzwerk) = Minimum( Σ Freigaberechte , Σ NTFS-Rechte ) – ein Verweigern entfernt das betroffene Recht vorher.</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> Freigabe <code>\\\\SRV01\\Vertrieb</code><br>
        Freigabe: Jeder = Lesen, G_Vertrieb = Ändern · NTFS: DL_Vertrieb_RW = Ändern, DL_Vertrieb_R = Lesen/Ausführen, DL_Gesperrt = Verweigern Vollzugriff
        <table><thead><tr><th>Person</th><th>Freigabe (Σ)</th><th>NTFS (Σ)</th><th>effektiv</th></tr></thead><tbody>
        <tr><td>Anna (Vertrieb, in DL_Vertrieb_RW)</td><td>Lesen + Ändern = Ändern</td><td>Ändern</td><td><strong>Ändern</strong></td></tr>
        <tr><td>Ben (Einkauf, nur „Jeder“, in DL_Vertrieb_R)</td><td>Lesen</td><td>Lesen/Ausführen</td><td><strong>Lesen</strong></td></tr>
        <tr><td>Carla (Vertrieb, zusätzlich in DL_Gesperrt)</td><td>Ändern</td><td>Ändern, aber Verweigern Vollzugriff</td><td><strong>kein Zugriff</strong></td></tr>
        <tr><td>Dirk (nur „Jeder“, kein NTFS-Eintrag)</td><td>Lesen</td><td>nichts</td><td><strong>kein Zugriff</strong></td></tr>
        </tbody></table></div>
        <h5>Vererbung, Kopieren und Verschieben</h5>
        <p>Unterordner und Dateien <strong>erben</strong> die Rechte des übergeordneten Ordners (grau dargestellte Häkchen). Deaktivierst du die Vererbung, wählst du: vererbte Rechte in explizite umwandeln oder entfernen.</p>
        <table><thead><tr><th>Aktion</th><th>Rechte danach</th></tr></thead><tbody>
        <tr><td>Kopieren (egal wohin)</td><td>Die Kopie erbt die Rechte des Zielordners.</td></tr>
        <tr><td>Verschieben innerhalb desselben Volumes</td><td>Die bisherigen Rechte bleiben erhalten.</td></tr>
        <tr><td>Verschieben auf ein anderes Volume</td><td>wie Kopieren: Rechte des Zielordners</td></tr>
        </tbody></table>
        <h5>Bewährtes Vorgehen</h5>
        <ul>
          <li>Freigabe großzügig setzen (z. B. Authentifizierte Benutzer = Ändern) und fein über NTFS steuern.</li>
          <li>Rechte nur an Gruppen vergeben (AGDLP), nie an einzelne Benutzer.</li>
          <li>Minimalprinzip (Least Privilege) und Verweigern nur sparsam einsetzen.</li>
          <li>Mit zugriffsbasierter Aufzählung (ABE) sehen Benutzer nur die Ordner, auf die sie Zugriff haben.</li>
          <li>Kontrolle: Registerkarte „Effektiver Zugriff“, <code>icacls D:\\Daten\\Vertrieb</code> oder <code>Get-Acl</code>.</li>
        </ul>
        <div class="callout achtung"><strong>Achtung:</strong> Häufiger Fehler: Freigabe „Vollzugriff“ bedeutet nicht, dass jemand alles darf – NTFS kann weiter einschränken. Und wer lokal am Server arbeitet, umgeht die Freigaberechte komplett.</div>
        <div class="callout pruefung"><strong>In der Prüfung:</strong> Für mehrere Personen die effektiven Rechte in einer Tabelle <em>ermitteln</em>, die Wirkung von Verweigern und Vererbung <em>erläutern</em> und ein Berechtigungskonzept für Abteilungsordner <em>entwerfen</em>.</div>`
    },
    {
      id: "linux-rechte",
      title: "Linux-Rechte: rwx, chmod, umask & Sonderrechte",
      exam: ["AP1", "AP2"],
      summary: "Rechte für Besitzer, Gruppe und andere lesen und setzen – oktal und symbolisch – sowie umask, SUID, SGID, Sticky Bit und ACLs.",
      html: `
        <p>Jede Datei hat unter Linux einen <strong>Besitzer</strong> (user, u), eine <strong>Gruppe</strong> (group, g) und Rechte für <strong>alle anderen</strong> (others, o). Pro Klasse gibt es die Rechte <strong>r</strong> (read), <strong>w</strong> (write) und <strong>x</strong> (execute). Der Benutzer <code>root</code> (UID 0) darf alles.</p>
        <pre><code>$ ls -l /opt/skripte/backup.sh
-rwxr-x--- 1 root verwaltung 2048 Sep 23 10:15 backup.sh</code></pre>
        <table><thead><tr><th>Stelle</th><th>Wert</th><th>Bedeutung</th></tr></thead><tbody>
        <tr><td>1</td><td><code>-</code></td><td>Typ: <code>-</code> Datei, <code>d</code> Verzeichnis, <code>l</code> symbolischer Link</td></tr>
        <tr><td>2–4</td><td><code>rwx</code></td><td>Besitzer root: lesen, schreiben, ausführen → 4 + 2 + 1 = 7</td></tr>
        <tr><td>5–7</td><td><code>r-x</code></td><td>Gruppe verwaltung: lesen, ausführen → 4 + 1 = 5</td></tr>
        <tr><td>8–10</td><td><code>---</code></td><td>andere: nichts → 0</td></tr>
        </tbody></table>
        <div class="callout formel">r = 4 · w = 2 · x = 1 → Summe je Klasse: rwxr-x--- = 750 · rw-r--r-- = 644 · rw------- = 600</div>
        <h5>Bedeutung bei Dateien und Verzeichnissen</h5>
        <table><thead><tr><th>Recht</th><th>Datei</th><th>Verzeichnis</th></tr></thead><tbody>
        <tr><td>r</td><td>Inhalt lesen</td><td>Dateinamen auflisten</td></tr>
        <tr><td>w</td><td>Inhalt ändern</td><td>Dateien anlegen, umbenennen, löschen (zusammen mit x)</td></tr>
        <tr><td>x</td><td>als Programm/Skript ausführen</td><td>betreten (<code>cd</code>) und auf Einträge zugreifen</td></tr>
        </tbody></table>
        <h5>Rechte und Besitz ändern</h5>
        <pre><code>chmod 750 backup.sh             # oktal: rwxr-x---
chmod u+x,g-w,o= bericht.txt    # symbolisch: u/g/o/a, + - =, r w x
chmod -R 770 /srv/projekt       # rekursiv
chown anna:vertrieb angebot.odt # Besitzer und Gruppe
chgrp vertrieb angebot.odt      # nur Gruppe</code></pre>
        <h5>umask – Standardrechte für neue Dateien</h5>
        <p>Neue Dateien starten mit 666 (rw-rw-rw-), neue Verzeichnisse mit 777. Die <strong>umask</strong> gibt an, welche Rechte davon <em>entfernt</em> werden.</p>
        <table><thead><tr><th>umask</th><th>neue Datei</th><th>neues Verzeichnis</th></tr></thead><tbody>
        <tr><td>022 (Standard)</td><td>644 rw-r--r--</td><td>755 rwxr-xr-x</td></tr>
        <tr><td>027</td><td>640 rw-r-----</td><td>750 rwxr-x---</td></tr>
        <tr><td>077</td><td>600 rw-------</td><td>700 rwx------</td></tr>
        </tbody></table>
        <div class="callout achtung"><strong>Achtung:</strong> Die umask wird nicht einfach subtrahiert, sondern entfernt Bits. Beispiel umask 033 bei einer Datei: 666 − 033 wäre 633, richtig ist aber 644. Aus rw-rw-rw- werden nur die gesetzten w- und x-Bits von Gruppe und anderen gestrichen: rw-r--r--.</div>
        <h5>Sonderrechte</h5>
        <table><thead><tr><th>Bit</th><th>Oktal</th><th>Wirkung</th><th>Anzeige / Beispiel</th></tr></thead><tbody>
        <tr><td>SUID</td><td>4</td><td>Programm läuft mit den Rechten des Besitzers</td><td><code>-rwsr-xr-x</code> = 4755, z. B. <code>/usr/bin/passwd</code></td></tr>
        <tr><td>SGID</td><td>2</td><td>Bei Verzeichnissen: neue Dateien erhalten die Gruppe des Verzeichnisses</td><td><code>drwxrws---</code> = 2770</td></tr>
        <tr><td>Sticky Bit</td><td>1</td><td>Im Verzeichnis darf nur der Besitzer einer Datei (oder root) sie löschen</td><td><code>drwxrwxrwt</code> = 1777, z. B. <code>/tmp</code></td></tr>
        </tbody></table>
        <p>Ein großes <code>S</code> oder <code>T</code> bedeutet: Sonderrecht gesetzt, aber das x-Recht an dieser Stelle fehlt.</p>
        <div class="callout beispiel"><strong>Beispiel:</strong> Die Gruppe <em>projekt</em> soll im Ordner <code>/srv/projekt</code> gemeinsam arbeiten, alle anderen haben keinen Zugriff, neue Dateien gehören automatisch der Gruppe:<pre><code>chown root:projekt /srv/projekt
chmod 2770 /srv/projekt      # SGID (2) + rwx rwx ---
ls -ld /srv/projekt  →  drwxrws--- 2 root projekt 4096 ... /srv/projekt</code></pre></div>
        <h5>ACLs und sudo</h5>
        <p>Reichen Besitzer, Gruppe und andere nicht aus, vergibst du mit <strong>ACLs</strong> Rechte an weitere Benutzer: <code>setfacl -m u:ben:rx bericht.txt</code>, anzeigen mit <code>getfacl</code>. Ein <code>+</code> am Ende der Rechte in <code>ls -l</code> zeigt eine ACL an. Administrative Befehle führst du nicht dauerhaft als root aus, sondern gezielt mit <code>sudo</code>.</p>
        <div class="callout pruefung"><strong>In der Prüfung:</strong> Rechte zwischen symbolischer und oktaler Schreibweise <em>umrechnen</em>, eine <code>ls -l</code>-Zeile <em>interpretieren</em>, den passenden <code>chmod</code>-/<code>chown</code>-Befehl <em>angeben</em> und die Wirkung von umask und Sonderrechten <em>erklären</em>.</div>`
    },
    {
      id: "active-directory",
      title: "Active Directory, Gruppenrichtlinien & Kerberos",
      exam: ["AP1", "AP2"],
      summary: "Aufbau von AD DS (Domäne, Baum, Gesamtstruktur, OU, DC), Gruppenbereiche und AGDLP, GPO-Verarbeitung nach LSDOU sowie Kerberos und LDAP.",
      html: `
        <p><strong>Active Directory Domain Services (AD DS)</strong> ist der Verzeichnisdienst von Windows Server. Er speichert Benutzer, Gruppen, Computer und Richtlinien zentral und ermöglicht eine einmalige Anmeldung für alle Ressourcen der Domäne.</p>
        <h5>Aufbau</h5>
        <table><thead><tr><th>Begriff</th><th>Bedeutung</th></tr></thead><tbody>
        <tr><td>Domäne</td><td>Verwaltungseinheit mit gemeinsamer Datenbank und Richtlinien, z. B. <code>nordlicht.de</code></td></tr>
        <tr><td>Domänencontroller (DC)</td><td>Server mit einer Kopie der AD-Datenbank. Alle DCs replizieren untereinander (Multi-Master) – mindestens zwei für Ausfallsicherheit.</td></tr>
        <tr><td>Baum (Tree)</td><td>Domänen mit zusammenhängendem Namensraum, z. B. <code>nordlicht.de</code> und <code>heide.nordlicht.de</code></td></tr>
        <tr><td>Gesamtstruktur (Forest)</td><td>ein oder mehrere Bäume mit gemeinsamem Schema und globalem Katalog. Sie ist die eigentliche Sicherheitsgrenze.</td></tr>
        <tr><td>Organisationseinheit (OU)</td><td>Container zum Strukturieren von Objekten, zum Delegieren von Verwaltung und zum Verknüpfen von GPOs</td></tr>
        <tr><td>Standort (Site)</td><td>bildet die physische Struktur (IP-Subnetze) ab und steuert Replikation und Anmelde-DC</td></tr>
        <tr><td>Globaler Katalog</td><td>DC mit einer Teilkopie aller Objekte der Gesamtstruktur für forestweite Suchen</td></tr>
        </tbody></table>
        <p>Zwischen den Domänen einer Gesamtstruktur bestehen automatisch <strong>transitive, bidirektionale Vertrauensstellungen</strong>. AD braucht <strong>DNS</strong>: Clients finden DCs über SRV-Records. Deshalb tragen Clients nur interne DNS-Server ein.</p>
        <h5>Client in die Domäne aufnehmen (auch AP1)</h5>
        <table><thead><tr><th></th><th>Arbeitsgruppe</th><th>Domäne</th></tr></thead><tbody>
        <tr><td>Benutzerkonten</td><td>auf jedem PC einzeln (lokal)</td><td>zentral im AD, Anmeldung an jedem Domänen-PC</td></tr>
        <tr><td>Verwaltung</td><td>jedes Gerät separat</td><td>zentral über Gruppenrichtlinien</td></tr>
        <tr><td>Rechte</td><td>lokale Konten je Freigabe</td><td>zentrale Gruppen (AGDLP)</td></tr>
        <tr><td>geeignet für</td><td>sehr kleine Netze mit wenigen PCs</td><td>Unternehmen jeder Größe</td></tr>
        </tbody></table>
        <p>Voraussetzungen für den Beitritt: Der Client nutzt den <strong>internen DNS-Server</strong> (mit den SRV-Records der Domäne), hat eine Netzwerkverbindung zum DC, eine Windows-Edition mit Domänenfunktion (Pro, Enterprise, Education – nicht Home) und du kennst ein <strong>Konto mit Beitrittsrecht</strong>. Beitritt über die Systemeinstellungen oder <code>Add-Computer -DomainName nordlicht.de -Restart</code>. Danach liegt das Computerkonto im AD (Standard: Container <code>Computers</code> – für GPOs in die passende OU verschieben).</p>
        <p><strong>Microsoft Entra ID</strong> (früher Azure AD) ist der Cloud-Identitätsdienst für Microsoft 365 und andere SaaS-Dienste. Er ersetzt AD DS nicht (keine OUs und keine klassischen GPOs), wird aber oft per <strong>Entra Connect</strong> mit dem lokalen AD synchronisiert (hybride Identität), damit Benutzer lokal und in der Cloud dasselbe Konto nutzen.</p>
        <h5>Gruppen und AGDLP</h5>
        <p><strong>Sicherheitsgruppen</strong> kannst du für Berechtigungen nutzen, <strong>Verteilergruppen</strong> nur als E-Mail-Verteiler.</p>
        <table><thead><tr><th>Bereich</th><th>Mitglieder aus</th><th>Berechtigungen auf Ressourcen in</th></tr></thead><tbody>
        <tr><td>Global (G)</td><td>nur der eigenen Domäne</td><td>der ganzen Gesamtstruktur</td></tr>
        <tr><td>Domänenlokal (DL)</td><td>der ganzen Gesamtstruktur</td><td>nur der eigenen Domäne</td></tr>
        <tr><td>Universal (U)</td><td>der ganzen Gesamtstruktur</td><td>der ganzen Gesamtstruktur</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>AGDLP:</strong> <strong>A</strong>ccounts → <strong>G</strong>lobale Gruppen (nach Rolle/Abteilung) → <strong>D</strong>omänen<strong>L</strong>okale Gruppen (nach Ressource und Recht) → <strong>P</strong>ermissions. Bei mehreren Domänen: AGUDLP mit Universalgruppen dazwischen.</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> Anna und Ben → <code>G_Vertrieb</code> → Mitglied in <code>DL_Angebote_Ändern</code> → diese Gruppe erhält NTFS „Ändern“ auf <code>D:\\Daten\\Angebote</code>. Kommt eine neue Mitarbeiterin in den Vertrieb, nimmst du sie nur in <code>G_Vertrieb</code> auf – alle Rechte folgen automatisch.</div>
        <h5>Gruppenrichtlinien (GPO)</h5>
        <p>Eine GPO enthält eine <strong>Computerkonfiguration</strong> (wirkt beim Start) und eine <strong>Benutzerkonfiguration</strong> (wirkt bei der Anmeldung). Danach aktualisieren Clients im Hintergrund etwa alle 90 Minuten (plus zufälliger Versatz von bis zu 30 Minuten), Domänencontroller alle 5 Minuten. Die Verarbeitung folgt <strong>LSDOU</strong>:</p>
        <pre class="ascii">Lokal → Standort (Site) → Domäne → OU → Unter-OU
Bei widersprüchlichen Einstellungen gewinnt die zuletzt verarbeitete (die nächste am Objekt).</pre>
        <ul>
          <li><strong>Vererbung deaktivieren</strong> (an einer OU): höhere GPOs wirken dort nicht mehr.</li>
          <li><strong>Erzwungen</strong> (an einer Verknüpfung): Die GPO kann weiter unten nicht überschrieben werden und wirkt auch trotz deaktivierter Vererbung.</li>
          <li><strong>Sicherheitsfilterung</strong>: GPO gilt nur für bestimmte Gruppen. Mit WMI-Filtern schränkst du z. B. auf ein Betriebssystem ein.</li>
          <li>Die Standardcontainer <code>Users</code> und <code>Computers</code> sind keine OUs – dort kannst du keine GPO verknüpfen.</li>
        </ul>
        <pre><code>gpupdate /force     Richtlinien sofort neu anwenden
gpresult /r         wirksame GPOs für Benutzer und Computer anzeigen</code></pre>
        <h5>Kerberos und LDAP</h5>
        <ol>
          <li>Anmeldung: Der Client weist sich beim <strong>KDC</strong> (auf jedem DC) aus und erhält ein <strong>Ticket Granting Ticket (TGT)</strong>.</li>
          <li>Mit dem TGT fordert er beim KDC ein <strong>Dienstticket</strong> für einen bestimmten Server an.</li>
          <li>Das Dienstticket legt er dem Server vor. Das Passwort wird nie über das Netz übertragen.</li>
        </ol>
        <p>Kerberos nutzt Port 88. Weichen die Uhren um mehr als 5 Minuten ab, schlägt die Anmeldung fehl – daher ist NTP Pflicht. <strong>LDAP</strong> (TCP/UDP 389, LDAPS 636, globaler Katalog 3268) ist das Protokoll zum Abfragen des Verzeichnisses. Objekte haben einen Distinguished Name: <code>CN=Anna Meier,OU=Vertrieb,OU=Heide,DC=nordlicht,DC=de</code>.</p>
        <div class="callout pruefung"><strong>In der Prüfung:</strong> Domäne, Baum, Gesamtstruktur und OU <em>unterscheiden</em>, ein Berechtigungskonzept nach AGDLP <em>entwerfen</em>, die wirksame GPO-Einstellung nach LSDOU <em>bestimmen</em> und den Kerberos-Ablauf <em>beschreiben</em>.</div>`
    },
    {
      id: "linux",
      title: "Linux-Administration: Verzeichnisse, Befehle, Pakete, Dienste",
      exam: ["AP1", "AP2"],
      summary: "Verzeichnisstruktur nach FHS, wichtige Shell-Befehle, Pipes, Paketverwaltung mit apt/dnf, systemd, Logs, Benutzerverwaltung und SSH.",
      html: `
        <p>Linux-Server verwaltest du meist ohne grafische Oberfläche über die <strong>Shell</strong> (meist Bash), oft per SSH. Wichtige Distributionsfamilien: <strong>Debian/Ubuntu</strong> (Pakete <code>.deb</code>, <code>apt</code>) und <strong>RHEL/Rocky/Alma/Fedora</strong> (Pakete <code>.rpm</code>, <code>dnf</code>). Linux unterscheidet Groß- und Kleinschreibung.</p>
        <h5>Verzeichnisstruktur (FHS)</h5>
        <table><thead><tr><th>Pfad</th><th>Inhalt</th></tr></thead><tbody>
        <tr><td><code>/</code></td><td>Wurzel des gesamten Dateisystems (es gibt keine Laufwerksbuchstaben)</td></tr>
        <tr><td><code>/bin</code>, <code>/usr/bin</code>, <code>/sbin</code></td><td>Programme; <code>sbin</code> für Systemverwaltung</td></tr>
        <tr><td><code>/boot</code></td><td>Kernel, initramfs, Bootloader</td></tr>
        <tr><td><code>/dev</code></td><td>Gerätedateien, z. B. <code>/dev/sda</code>, <code>/dev/nvme0n1</code></td></tr>
        <tr><td><code>/etc</code></td><td>Konfigurationsdateien, z. B. <code>/etc/ssh/sshd_config</code></td></tr>
        <tr><td><code>/home</code>, <code>/root</code></td><td>Heimatverzeichnisse der Benutzer bzw. von root</td></tr>
        <tr><td><code>/var</code></td><td>veränderliche Daten: <code>/var/log</code> (Logs), <code>/var/spool</code>, <code>/var/lib</code></td></tr>
        <tr><td><code>/tmp</code></td><td>temporäre Dateien (Sticky Bit)</td></tr>
        <tr><td><code>/opt</code>, <code>/srv</code></td><td>Zusatzsoftware bzw. Daten von Diensten</td></tr>
        <tr><td><code>/proc</code>, <code>/sys</code></td><td>virtuelle Dateisysteme mit Kernel- und Prozessinfos</td></tr>
        <tr><td><code>/mnt</code>, <code>/media</code></td><td>Einhängepunkte für Datenträger</td></tr>
        </tbody></table>
        <h5>Wichtige Befehle</h5>
        <table><thead><tr><th>Zweck</th><th>Befehle</th></tr></thead><tbody>
        <tr><td>Navigieren, Dateien</td><td><code>pwd</code>, <code>ls -la</code>, <code>cd</code>, <code>mkdir -p</code>, <code>cp -r</code>, <code>mv</code>, <code>rm -r</code>, <code>touch</code>, <code>ln -s</code></td></tr>
        <tr><td>Inhalte, Suche</td><td><code>cat</code>, <code>less</code>, <code>head</code>, <code>tail -f</code>, <code>grep -ri</code>, <code>find</code>, <code>wc -l</code>, <code>sort</code></td></tr>
        <tr><td>Archive</td><td><code>tar -czf archiv.tar.gz ordner/</code>, entpacken mit <code>tar -xzf</code></td></tr>
        <tr><td>System</td><td><code>df -h</code>, <code>du -sh</code>, <code>free -h</code>, <code>top</code>, <code>ps aux</code>, <code>kill</code>, <code>uname -a</code></td></tr>
        <tr><td>Netzwerk</td><td><code>ip a</code>, <code>ip route</code>, <code>ss -tulpn</code>, <code>ping</code>, <code>dig</code></td></tr>
        <tr><td>Hilfe</td><td><code>man befehl</code>, <code>befehl --help</code></td></tr>
        </tbody></table>
        <h5>Pipes und Umleitungen</h5>
        <pre><code>ps aux | grep nginx                  # Ausgabe als Eingabe weiterreichen
ls /etc &gt; liste.txt                  # Ausgabe in Datei (überschreiben)
echo "Backup ok" &gt;&gt; /var/log/bk.log  # anhängen
find / -name "*.conf" 2&gt;/dev/null    # Fehlermeldungen verwerfen
./backup.sh &gt;&gt; bk.log 2&gt;&amp;1           # Ausgabe und Fehler ins Log</code></pre>
        <h5>Platzhalter, Quoting, Links und Benutzerwechsel</h5>
        <p>Die Shell ersetzt <strong>Platzhalter</strong> (Globbing), bevor der Befehl startet: <code>*</code> steht für beliebig viele Zeichen, <code>?</code> für genau ein Zeichen, <code>[0-9]</code> für ein Zeichen aus der Menge. <code>ls *.log</code> listet alle Logdateien, <code>ls bericht_202?.txt</code> z. B. bericht_2025.txt und bericht_2026.txt.</p>
        <pre><code>echo "Heimat: $HOME"     # doppelte Anführungszeichen: Variable wird ersetzt → Heimat: /home/anna
echo 'Heimat: $HOME'     # einfache Anführungszeichen: Text bleibt wörtlich → Heimat: $HOME
echo Preis: \\$5         # Backslash maskiert ein Zeichen → Preis: $5 (ohne \\ wäre $5 der 5. Parameter)</code></pre>
        <table><thead><tr><th></th><th>Hardlink (<code>ln datei link</code>)</th><th>Symbolischer Link (<code>ln -s ziel link</code>)</th></tr></thead><tbody>
        <tr><td>Prinzip</td><td>zweiter Name für dieselben Daten (dieselbe Inode)</td><td>eigene kleine Datei, die auf einen Pfad verweist</td></tr>
        <tr><td>Grenzen</td><td>nur im selben Dateisystem, nicht für Verzeichnisse</td><td>über Dateisysteme hinweg, auch für Verzeichnisse</td></tr>
        <tr><td>Ziel gelöscht</td><td>Daten bleiben erhalten, bis der letzte Link entfernt ist</td><td>Link zeigt ins Leere („broken link“)</td></tr>
        <tr><td>Anzeige in <code>ls -l</code></td><td>normale Datei, Linkzähler ≥ 2</td><td><code>l</code> am Anfang, <code>link -&gt; ziel</code></td></tr>
        </tbody></table>
        <p><code>su -</code> wechselt dauerhaft zum Benutzer root und verlangt dessen Passwort. <code>sudo befehl</code> führt nur einen Befehl mit root-Rechten aus, fragt nach dem <em>eigenen</em> Passwort und protokolliert den Aufruf. Wer <code>sudo</code> nutzen darf, steht in <code>/etc/sudoers</code> (bearbeiten nur mit <code>visudo</code>) bzw. ergibt sich aus der Gruppe <code>sudo</code> (Debian/Ubuntu) oder <code>wheel</code> (RHEL-Familie). Wer gerade angemeldet ist, zeigen <code>who</code> und <code>w</code>.</p>
        <h5>Paketverwaltung</h5>
        <table><thead><tr><th>Aufgabe</th><th>Debian/Ubuntu</th><th>RHEL-Familie</th></tr></thead><tbody>
        <tr><td>Paketlisten aktualisieren</td><td><code>apt update</code></td><td>(automatisch)</td></tr>
        <tr><td>alle Pakete aktualisieren</td><td><code>apt upgrade</code></td><td><code>dnf upgrade</code></td></tr>
        <tr><td>installieren / entfernen</td><td><code>apt install nginx</code> / <code>apt remove</code></td><td><code>dnf install nginx</code> / <code>dnf remove</code></td></tr>
        <tr><td>suchen</td><td><code>apt search</code></td><td><code>dnf search</code></td></tr>
        </tbody></table>
        <h5>Dienste und Logs mit systemd</h5>
        <pre><code>systemctl status nginx          # Zustand anzeigen
systemctl restart nginx         # neu starten (reload: nur Konfiguration neu lesen)
systemctl enable --now nginx    # beim Booten starten und sofort starten
journalctl -u nginx -f          # Log eines Dienstes live verfolgen
journalctl -p err -b            # Fehler seit dem letzten Start</code></pre>
        <p>Klassische Logdateien liegen in <code>/var/log</code>, z. B. <code>syslog</code> bzw. <code>messages</code> und <code>auth.log</code> bzw. <code>secure</code> (je nach Distribution).</p>
        <h5>Benutzer und Gruppen</h5>
        <pre><code>useradd -m -s /bin/bash anna    # Benutzer mit Heimatverzeichnis anlegen
passwd anna                     # Passwort setzen
usermod -aG sudo anna           # zur Gruppe hinzufügen (-a nicht vergessen!)
id anna                         # UID, GID, Gruppen anzeigen
userdel -r anna                 # Benutzer samt Home löschen</code></pre>
        <p><code>/etc/passwd</code> enthält Kontodaten (Name:x:UID:GID:Beschreibung:Home:Shell), <code>/etc/shadow</code> die Passwort-Hashes (nur für root lesbar), <code>/etc/group</code> die Gruppen.</p>
        <h5>SSH sicher nutzen</h5>
        <pre><code>ssh-keygen -t ed25519           # Schlüsselpaar erzeugen
ssh-copy-id admin@srv-web01     # öffentlichen Schlüssel auf den Server kopieren
# /etc/ssh/sshd_config
PermitRootLogin no
PasswordAuthentication no</code></pre>
        <div class="callout achtung"><strong>Achtung:</strong> <code>usermod -G</code> ohne <code>-a</code> ersetzt alle Zusatzgruppen. Und <code>&gt;</code> überschreibt eine Datei ohne Rückfrage – für Logs nimmst du <code>&gt;&gt;</code>.</div>
        <div class="callout pruefung"><strong>In der Prüfung:</strong> Zu einer Aufgabe den passenden Befehl <em>nennen</em>, Verzeichnisse der FHS <em>zuordnen</em>, eine Befehlskette mit Pipe <em>erklären</em> und Maßnahmen zur SSH-Härtung <em>beschreiben</em>.</div>`
    },
    {
      id: "virtualisierung",
      title: "Virtualisierung, Container & VDI",
      exam: ["AP1", "AP2"],
      summary: "Hypervisor Typ 1 und 2, VM und Container im Vergleich, Snapshots, Live-Migration, Hochverfügbarkeit, Ressourcenplanung und virtuelle Desktops.",
      html: `
        <p>Bei der <strong>Virtualisierung</strong> teilt ein <strong>Hypervisor</strong> die Hardware eines Hosts auf mehrere <strong>virtuelle Maschinen (VMs)</strong> auf. Jede VM hat virtuelle CPU, RAM, Festplatten und Netzwerkkarten und ein eigenes Betriebssystem.</p>
        <p><strong>Vorteile:</strong> bessere Auslastung, weniger Hardware und Energie (Konsolidierung), schnelle Bereitstellung, Snapshots, Live-Migration, einfache Testumgebungen. <strong>Nachteile:</strong> Fällt der Host aus, fallen alle VMs aus (ohne Cluster). Dazu kommen Lizenzkosten und Ressourcenkonkurrenz.</p>
        <h5>Hypervisor-Typen</h5>
        <pre class="ascii">Typ 1 (bare metal)            Typ 2 (hosted)
[VM][VM][VM]                  [VM][VM]
[  Hypervisor  ]              [Hypervisor-Anwendung]
[  Hardware    ]              [Host-Betriebssystem ]
                              [  Hardware          ]</pre>
        <table><thead><tr><th></th><th>Typ 1</th><th>Typ 2</th></tr></thead><tbody>
        <tr><td>läuft auf</td><td>direkt auf der Hardware</td><td>als Programm auf einem Betriebssystem</td></tr>
        <tr><td>Beispiele</td><td>VMware ESXi, Microsoft Hyper-V, Proxmox VE (KVM), Xen</td><td>VirtualBox, VMware Workstation</td></tr>
        <tr><td>Einsatz</td><td>Rechenzentrum, Produktivserver</td><td>Test, Schulung, Entwicklung am Arbeitsplatz</td></tr>
        <tr><td>Leistung</td><td>hoch, wenig Overhead</td><td>geringer, Host-OS verbraucht Ressourcen</td></tr>
        </tbody></table>
        <h5>VM oder Container?</h5>
        <table><thead><tr><th>Merkmal</th><th>Virtuelle Maschine</th><th>Container (Docker, Podman)</th></tr></thead><tbody>
        <tr><td>Isolation</td><td>eigenes Betriebssystem mit eigenem Kernel</td><td>teilt den Kernel des Hosts, isoliert nur Prozesse</td></tr>
        <tr><td>Größe</td><td>Gigabyte</td><td>Megabyte</td></tr>
        <tr><td>Startzeit</td><td>Sekunden bis Minuten</td><td>Sekunden oder weniger</td></tr>
        <tr><td>Gastsysteme</td><td>beliebig (Windows auf Linux-Host möglich)</td><td>nur passend zum Host-Kernel</td></tr>
        <tr><td>typisch</td><td>komplette Server, unterschiedliche OS</td><td>Microservices, Webanwendungen, CI/CD</td></tr>
        </tbody></table>
        <p>Container entstehen aus <strong>Images</strong>, die in einer Registry liegen. Viele Container verwaltest du mit einer Orchestrierung wie <strong>Kubernetes</strong> (Verteilung, Neustart, Skalierung).</p>
        <pre><code>docker run -d --name web -p 8080:80 nginx   # Container im Hintergrund, Port 8080 → 80</code></pre>
        <h5>Snapshots, Live-Migration, Hochverfügbarkeit</h5>
        <ul>
          <li><strong>Snapshot</strong>: Zustand einer VM zu einem Zeitpunkt. Änderungen landen danach in Delta-Dateien, die wachsen und die Leistung senken. Ein Snapshot liegt auf demselben Speicher und ist <strong>kein Backup</strong>. Nutze ihn nur kurz, z. B. vor einem Update.</li>
          <li><strong>Live-Migration</strong> (vMotion, Hyper-V-Livemigration): verschiebt eine laufende VM ohne Unterbrechung auf einen anderen Host. Voraussetzungen: gemeinsamer Speicher (oder Speichermigration), kompatible CPUs, schnelles Migrationsnetz.</li>
          <li><strong>HA-Cluster</strong>: Fällt ein Host aus, starten seine VMs automatisch auf den übrigen Hosts neu (kurze Unterbrechung). Die Kapazität planst du nach <strong>N+1</strong>: Ein Host darf ausfallen, ohne dass Ressourcen fehlen.</li>
        </ul>
        <div class="callout beispiel"><strong>Beispiel Ressourcenplanung:</strong> 24 VMs mit je 16 GiB RAM und 4 vCPUs, 10 % RAM-Reserve für den Hypervisor, Hosts mit 256 GiB RAM.<br>
        RAM: 24 × 16 GiB = 384 GiB × 1,1 = 422,4 GiB → 422,4 ÷ 256 = 1,65 → <strong>2 Hosts</strong> nötig, mit N+1 → <strong>3 Hosts</strong>.<br>
        CPU: 24 × 4 = 96 vCPUs, Überbuchung 3 : 1 → 96 ÷ 3 = 32 physische Kerne. Diese müssen auch nach einem Hostausfall auf 2 Hosts passen → mindestens 16 Kerne pro Host.</div>
        <h5>Virtuelle Desktops (VDI)</h5>
        <p>Bei <strong>VDI</strong> laufen die Desktops als VMs im Rechenzentrum, Benutzer greifen per Thin Client oder Notebook darauf zu. <strong>Persistente</strong> Desktops behalten Änderungen, <strong>nicht persistente</strong> werden nach der Abmeldung zurückgesetzt. Als Cloud-Dienst heißt das <strong>DaaS</strong> (Desktop as a Service). Vorteile: zentrale Verwaltung, Daten bleiben im Rechenzentrum, Arbeiten von überall. Nachteile: abhängig vom Netz, hohe Serverlast bei vielen gleichzeitigen Anmeldungen, Lizenzkosten.</p>
        <h5>Migration planen</h5>
        <p>Beim Umzug physischer Server in VMs (<strong>P2V</strong>) oder auf eine neue Plattform wählst du eine Methode: <strong>Stichtag (Big Bang)</strong> – alles auf einmal, schnell, aber riskant. <strong>Parallelbetrieb</strong> – alt und neu laufen eine Zeit lang nebeneinander, sicher, aber aufwendig. <strong>Stufenweise</strong> – Dienst für Dienst, beginnend mit einem Pilot. Vorher prüfst du die Kompatibilität (Treiber, Lizenzen, Anwendungen) und planst Wartungsfenster und Rollback. Bei Datenmigrationen achtest du besonders auf die <strong>Dateisysteme</strong>: maximale Dateigröße (FAT32: 4 GiB − 1 Byte), Pfadlängen, Groß-/Kleinschreibung (Linux unterscheidet sie, Windows nicht) und Rechte (NTFS-ACLs lassen sich nicht 1 : 1 auf rwx abbilden) sowie auf Zeichensätze (UTF-8). Nach der Übernahme prüfst du die Vollständigkeit per Datei- und Größenvergleich, <strong>Prüfsummen</strong> (z. B. SHA-256) und Stichproben der Rechte.</p>
        <div class="callout beispiel"><strong>Beispiel Übertragungsdauer:</strong> 3 TiB über 10 Gbit/s bei 70 % Nutzlast: 1.250 MB/s × 0,7 = 875 MB/s → 3 × 2⁴⁰ Byte ÷ 875.000.000 Byte/s ≈ 3.770 s ≈ <strong>1 h 3 min</strong>.</div>
        <div class="callout achtung"><strong>Achtung:</strong> Nach der Übernahme von VMware durch Broadcom wurden die Lizenzmodelle auf Abonnements umgestellt. Viele Unternehmen prüfen deshalb Alternativen wie Proxmox VE oder Hyper-V – Kosten und Lizenz sind heute ein zentrales Auswahlkriterium.</div>
        <div class="callout pruefung"><strong>In der Prüfung:</strong> Hypervisor-Typen und VM/Container <em>vergleichen</em>, erklären, warum ein Snapshot kein Backup ersetzt, Voraussetzungen der Live-Migration <em>nennen</em> und die Anzahl der Hosts inklusive N+1 <em>berechnen</em>. In der AP1 kommen vor allem VDI und DaaS dran: lokale und Cloud-Desktops <em>unterscheiden</em> und <em>begründen</em>, warum dafür Thin Clients genügen.</div>`
    },
    {
      id: "cloud",
      title: "Plattformen, Cloud & Skalierung",
      exam: ["AP1", "AP2"],
      summary: "Betriebsmodelle von On-Premises bis Public Cloud, Dienstmodelle mit geteilter Verantwortung, Bereitstellungsmodelle, Datenschutz, Kostenvergleich sowie Skalierung, Load Balancing und Blue-Green.",
      html: `
        <p>Für jeden Serverdienst entscheidest du, <strong>wo</strong> er läuft. Kriterien laut Rahmenlehrplan: <strong>Verfügbarkeit, Skalierbarkeit, Administrierbarkeit, Wirtschaftlichkeit und Sicherheit</strong> – dazu Datenschutz und Lizenzen.</p>
        <table><thead><tr><th>Betriebsmodell</th><th>Hardware gehört …</th><th>steht …</th><th>betreut …</th></tr></thead><tbody>
        <tr><td>On-Premises</td><td>dem Unternehmen</td><td>im eigenen Serverraum</td><td>eigene IT</td></tr>
        <tr><td>Housing / Colocation</td><td>dem Unternehmen</td><td>im Rechenzentrum eines Dienstleisters (Strom, Klima, Anbindung)</td><td>eigene IT</td></tr>
        <tr><td>Hosting</td><td>dem Dienstleister</td><td>beim Dienstleister</td><td>Dienstleister (Hardware), Kunde (je nach Vertrag)</td></tr>
        <tr><td>Cloud</td><td>dem Anbieter</td><td>in Rechenzentren des Anbieters</td><td>geteilte Verantwortung, Abrechnung nach Nutzung</td></tr>
        </tbody></table>
        <p>Typische Cloud-Merkmale: Selbstbedienung auf Abruf, Zugriff über das Netz, gemeinsam genutzte Ressourcen (Pooling), schnelle Elastizität und nutzungsabhängige Abrechnung.</p>
        <h5>Dienstmodelle und geteilte Verantwortung</h5>
        <table><thead><tr><th>Schicht</th><th>On-Prem</th><th>IaaS</th><th>PaaS</th><th>SaaS</th></tr></thead><tbody>
        <tr><td>Daten, Benutzer, Zugriffe</td><td>K</td><td>K</td><td>K</td><td>K</td></tr>
        <tr><td>Anwendung</td><td>K</td><td>K</td><td>K</td><td>A</td></tr>
        <tr><td>Laufzeit, Middleware, Datenbank</td><td>K</td><td>K</td><td>A</td><td>A</td></tr>
        <tr><td>Betriebssystem</td><td>K</td><td>K</td><td>A</td><td>A</td></tr>
        <tr><td>Virtualisierung, Server, Speicher, Netz</td><td>K</td><td>A</td><td>A</td><td>A</td></tr>
        </tbody></table>
        <p>K = Kunde, A = Anbieter. Beispiele: <strong>IaaS</strong> – virtuelle Server und Speicher (Azure VMs, AWS EC2, Hetzner Cloud). <strong>PaaS</strong> – Laufzeitumgebung oder verwaltete Datenbank, du lieferst nur Code und Daten (Azure App Service, Google App Engine). <strong>SaaS</strong> – fertige Anwendung im Browser (Microsoft 365, Salesforce). Sonderformen: <strong>DaaS</strong> (virtuelle Desktops) und <strong>FaaS/Serverless</strong> (einzelne Funktionen).</p>
        <div class="callout merke"><strong>Merke:</strong> Je weiter rechts (IaaS → PaaS → SaaS), desto weniger Verwaltungsaufwand, aber auch weniger Kontrolle. Für die <strong>Daten</strong> und die <strong>Zugriffsrechte</strong> bleibt immer der Kunde verantwortlich – auch bei SaaS.</div>
        <h5>Bereitstellungsmodelle</h5>
        <ul>
          <li><strong>Public Cloud</strong>: Ressourcen eines Anbieters, von vielen Kunden gemeinsam genutzt, logisch getrennt.</li>
          <li><strong>Private Cloud</strong>: nur für ein Unternehmen, im eigenen oder in einem fremden Rechenzentrum.</li>
          <li><strong>Hybrid Cloud</strong>: Kombination aus Private/On-Premises und Public Cloud, z. B. sensible Daten lokal, Lastspitzen in der Public Cloud.</li>
          <li><strong>Community Cloud</strong>: gemeinsam von Organisationen mit gleichen Anforderungen, z. B. Kommunen.</li>
          <li><strong>Multi-Cloud</strong>: Dienste mehrerer Anbieter, um Abhängigkeit (Vendor Lock-in) zu verringern.</li>
        </ul>
        <h5>Vor- und Nachteile</h5>
        <div class="grid-2">
        <div class="callout tipp"><strong>Pro Cloud:</strong> keine Anschaffungskosten (OpEx statt CapEx), schnelle Skalierung, hohe Verfügbarkeit durch mehrere Rechenzentren, Anbieter übernimmt Hardware und Patches der unteren Schichten.</div>
        <div class="callout achtung"><strong>Contra Cloud:</strong> abhängig von Internetanbindung und Anbieter, laufende Kosten (auch für ausgehenden Datenverkehr), Datenschutz bei Drittland-Anbietern, eingeschränkte Kontrolle, Migrationsaufwand.</div>
        </div>
        <h5>Datenschutz und Recht</h5>
        <p>Verarbeitet ein Cloud-Anbieter personenbezogene Daten, brauchst du einen <strong>Auftragsverarbeitungsvertrag</strong> nach Art. 28 DSGVO. Achte auf den <strong>Serverstandort</strong> (EU bevorzugt), auf Regeln für Übermittlungen in Drittländer (Art. 44 ff. DSGVO, z. B. EU-US Data Privacy Framework), auf Zugriffsmöglichkeiten ausländischer Behörden (US CLOUD Act), auf Nachweise wie das <strong>BSI-C5-Testat</strong> oder ISO 27001 und auf eine <strong>Exit-Strategie</strong>.</p>
        <h5>Skalierung und Hochverfügbarkeit</h5>
        <p><strong>Vertikal (scale up)</strong>: eine Maschine bekommt mehr CPU oder RAM – einfach, aber begrenzt und oft mit Neustart. <strong>Horizontal (scale out)</strong>: weitere Instanzen hinter einem Load Balancer – nahezu unbegrenzt und ausfallsicherer, die Anwendung muss das aber unterstützen.</p>
        <ul>
          <li><strong>Load Balancer</strong>: verteilt Anfragen auf mehrere Server, z. B. <strong>Round Robin</strong> (der Reihe nach) oder <strong>Least Connections</strong> (an den Server mit den wenigsten offenen Verbindungen). Per <strong>Health Check</strong> erkennt er ausgefallene Server und nimmt sie aus der Verteilung.</li>
          <li><strong>Cluster</strong>: <strong>Aktiv/Aktiv</strong> – alle Knoten arbeiten und teilen sich die Last. <strong>Aktiv/Passiv</strong> – ein Standby-Knoten übernimmt erst beim Ausfall (Failover).</li>
          <li><strong>Blue-Green-Deployment</strong>: Die neue Version läuft parallel in einer zweiten Umgebung (Green). Nach erfolgreichem Test wird der Verkehr umgeschaltet, bei Problemen sofort zurück auf Blue.</li>
        </ul>
        <div class="callout beispiel"><strong>Beispiel Kostenvergleich über 5 Jahre (60 Monate):</strong><br>
        On-Premises: 14.000 € Anschaffung + 180 €/Monat Betrieb → 14.000 € + 180 € × 60 = <strong>24.800 €</strong><br>
        IaaS-VM: 390 €/Monat → 390 € × 60 = <strong>23.400 €</strong><br>
        Die Cloud ist hier 1.400 € günstiger. Zu prüfen sind aber Zusatzkosten (Datenverkehr, Backup-Speicher), Preissteigerungen und der Datenschutz.</div>
        <div class="callout pruefung"><strong>In der Prüfung:</strong> Für ein Szenario ein Dienst- und Bereitstellungsmodell <em>auswählen und begründen</em>, die Verantwortung zwischen Kunde und Anbieter <em>abgrenzen</em>, Datenschutzaspekte <em>erläutern</em>, Kosten <em>vergleichen</em> sowie Skalierung und Load Balancing <em>erklären</em>.</div>`
    },
    {
      id: "raid-speicher",
      title: "RAID & Speicherlösungen (DAS, NAS, SAN)",
      exam: ["AP2"],
      summary: "RAID 0, 1, 5, 6 und 10 mit Nutzkapazität und Ausfallsicherheit, Hot Spare, DAS/NAS/SAN, iSCSI und Fibre Channel sowie Speicherbedarfsplanung.",
      html: `
        <p>Ein <strong>RAID</strong> (Redundant Array of Independent Disks) fasst mehrere Laufwerke zu einem logischen Laufwerk zusammen – für <strong>Leistung</strong> (Striping), <strong>Ausfallsicherheit</strong> (Spiegelung oder Parität) oder beides.</p>
        <table><thead><tr><th>Level</th><th>Prinzip</th><th>min. Platten</th><th>Nutzkapazität</th><th>verkraftet</th><th>Einsatz</th></tr></thead><tbody>
        <tr><td>RAID 0</td><td>Striping, keine Redundanz</td><td>2</td><td>n × C</td><td>0 Ausfälle</td><td>temporäre Daten, Videoschnitt</td></tr>
        <tr><td>RAID 1</td><td>Spiegelung</td><td>2</td><td>C</td><td>1 von 2</td><td>Systemlaufwerk</td></tr>
        <tr><td>RAID 5</td><td>Striping + verteilte Parität</td><td>3</td><td>(n − 1) × C</td><td>1 beliebige</td><td>Dateiserver, leselastig</td></tr>
        <tr><td>RAID 6</td><td>Striping + doppelte Parität</td><td>4</td><td>(n − 2) × C</td><td>2 beliebige</td><td>große Platten, Archiv, Backup-Ziel</td></tr>
        <tr><td>RAID 10</td><td>Stripe über Spiegelpaare</td><td>4 (gerade)</td><td>n ÷ 2 × C</td><td>1 sicher, bis n ÷ 2 (je Paar eine)</td><td>Datenbanken, VMs</td></tr>
        </tbody></table>
        <div class="callout formel">n = Anzahl Platten im Verbund, C = Kapazität der kleinsten Platte<br>RAID 0: n × C · RAID 1: C · RAID 5: (n − 1) × C · RAID 6: (n − 2) × C · RAID 10: (n ÷ 2) × C<br>Effizienz = Nutzkapazität ÷ Bruttokapazität</div>
        <p>Die <strong>Parität</strong> wird per XOR berechnet. Fällt eine Platte aus, rekonstruiert der Controller ihre Daten aus den übrigen (<strong>Rebuild</strong>). Ein <strong>Hot Spare</strong> ist eine eingebaute Reserveplatte, die den Rebuild automatisch übernimmt. Sie zählt <strong>nicht</strong> zur Nutzkapazität. Eine <strong>Cold Spare</strong> liegt im Schrank und wird von Hand eingebaut.</p>
        <div class="callout beispiel"><strong>Beispiel:</strong> Ein Server hat 8 Platten zu je 4 TiB (brutto 32 TiB).<br>
        RAID 5: (8 − 1) × 4 TiB = <strong>28 TiB</strong> (Effizienz 7 ÷ 8 = 87,5 %), verkraftet 1 Ausfall.<br>
        RAID 6: (8 − 2) × 4 TiB = <strong>24 TiB</strong> (75 %), verkraftet 2 beliebige Ausfälle.<br>
        RAID 10: 8 ÷ 2 × 4 TiB = <strong>16 TiB</strong> (50 %), verkraftet sicher 1, im besten Fall 4 Ausfälle.<br>
        Mit einer Platte als Hot Spare bleiben 7 im Verbund: RAID 5 → 6 × 4 TiB = 24 TiB, RAID 6 → 5 × 4 TiB = 20 TiB.</div>
        <div class="callout achtung"><strong>Achtung:</strong> RAID ersetzt <strong>kein Backup</strong> – versehentliches Löschen, Ransomware oder ein Brand treffen alle Platten gleichzeitig. Bei RAID 5 mit großen Platten dauert der Rebuild lange und belastet die übrigen Platten. Fällt dabei eine zweite aus, sind die Daten weg – deshalb bei großen Platten eher RAID 6. Und: Hersteller geben Kapazitäten dezimal an (4 TB = 4 × 10¹² Byte ≈ 3,64 TiB). Datenmengen gibst du nach ZPA-Regel binär an (GiB, TiB).</div>
        <p><strong>Hardware-RAID</strong> (Controller mit eigenem Cache und Akku/Flash-Schutz) entlastet die CPU. <strong>Software-RAID</strong> (Linux <code>mdadm</code>, Windows Storage Spaces) ist günstig und flexibel. Mit <strong>LVM</strong> bzw. Storage Spaces fasst du Datenträger zu Pools zusammen und vergrößerst Volumes im laufenden Betrieb.</p>
        <h5>DAS, NAS und SAN</h5>
        <table><thead><tr><th></th><th>DAS</th><th>NAS</th><th>SAN</th></tr></thead><tbody>
        <tr><td>Anbindung</td><td>direkt am Server (SAS, SATA, NVMe, USB)</td><td>über das LAN</td><td>eigenes Speichernetz</td></tr>
        <tr><td>Zugriff</td><td>blockbasiert</td><td><strong>dateibasiert</strong> (SMB, NFS)</td><td><strong>blockbasiert</strong> (iSCSI, Fibre Channel)</td></tr>
        <tr><td>Stärken</td><td>einfach, günstig, schnell</td><td>gemeinsame Dateiablage, einfache Verwaltung</td><td>hohe Leistung, zentral für Virtualisierungs-Cluster</td></tr>
        <tr><td>Schwächen</td><td>nur ein Server, schlecht teilbar</td><td>LAN-Last, weniger geeignet für Datenbanken und VMs</td><td>teuer, Fachwissen nötig</td></tr>
        </tbody></table>
        <p><strong>iSCSI</strong> überträgt SCSI-Befehle über TCP/IP (Port 3260): Der Server (<strong>Initiator</strong>) bindet ein Laufwerk (<strong>LUN</strong>) des Speichersystems (<strong>Target</strong>) ein, als wäre es lokal. <strong>Fibre Channel</strong> nutzt ein eigenes Netz mit eigenen Switches (heute 32 oder 64 Gbit/s). Redundante Pfade (Multipathing) verhindern einen Single Point of Failure.</p>
        <div class="callout beispiel"><strong>Speicherbedarf planen:</strong> Heute belegt: 6 TiB, Wachstum 25 % pro Jahr, Planung für 3 Jahre, 20 % Reserve.<br>6 TiB × 1,25³ = 6 × 1,953125 = 11,72 TiB → × 1,2 = <strong>14,06 TiB</strong> Nutzkapazität. Mit RAID 6 aus 4-TiB-Platten: 14,06 ÷ 4 = 3,5 → 4 Datenplatten + 2 für Parität = <strong>6 Platten</strong> (Nutzkapazität 16 TiB).</div>
        <div class="callout pruefung"><strong>In der Prüfung:</strong> Nutzkapazität und Ausfalltoleranz <em>berechnen</em>, ein RAID-Level <em>begründet empfehlen</em>, NAS und SAN <em>vergleichen</em> sowie block- und dateibasierten Zugriff <em>unterscheiden</em>.</div>`
    },
    {
      id: "datensicherung",
      title: "Datensicherung: Sicherungsarten, GFS, 3-2-1, RPO/RTO",
      exam: ["AP1", "AP2"],
      summary: "Voll-, inkrementelle und differenzielle Sicherung, Wiederherstellung, Generationenprinzip, 3-2-1-Regel, RPO/RTO, Archivierung und Berechnung der Backup-Dauer.",
      html: `
        <p>Eine <strong>Datensicherung</strong> (Backup) ist eine Kopie von Daten, mit der du nach Hardwaredefekt, versehentlichem Löschen, Ransomware, Brand oder Diebstahl den alten Stand wiederherstellst. Ein Backup ist erst dann etwas wert, wenn die <strong>Wiederherstellung</strong> nachweislich funktioniert.</p>
        <h5>Sicherungsarten</h5>
        <table><thead><tr><th></th><th>Vollsicherung</th><th>Inkrementell</th><th>Differenziell</th></tr></thead><tbody>
        <tr><td>sichert</td><td>alle ausgewählten Daten</td><td>Änderungen seit der <strong>letzten Sicherung</strong> (egal welcher Art)</td><td>Änderungen seit der <strong>letzten Vollsicherung</strong></td></tr>
        <tr><td>Archivbit</td><td>wird zurückgesetzt</td><td>wird zurückgesetzt</td><td>bleibt gesetzt</td></tr>
        <tr><td>Speicher / Dauer</td><td>hoch / lang</td><td>gering / kurz</td><td>wächst täglich bis zur nächsten Vollsicherung</td></tr>
        <tr><td>Wiederherstellung</td><td>1 Sicherung</td><td>Vollsicherung + <strong>alle</strong> Inkremente danach, in Reihenfolge</td><td>Vollsicherung + <strong>letzte</strong> differenzielle Sicherung</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel:</strong> Vollsicherung am Sonntag, danach täglich um 22 Uhr. Am Donnerstag um 10 Uhr fällt der Server aus.<br>
        Inkrementell: Voll (So) + Mo + Di + Mi = <strong>4 Sicherungen</strong> einspielen.<br>
        Differenziell: Voll (So) + Mi = <strong>2 Sicherungen</strong>.<br>
        In beiden Fällen gehen die Änderungen seit Mittwoch 22 Uhr verloren.<br>
        Speicherbedarf bei 800 GiB Vollsicherung und täglich 40 GiB neuen Änderungen (Mo–Fr): inkrementell 800 + 5 × 40 = <strong>1.000 GiB</strong>, differenziell 800 + 40 + 80 + 120 + 160 + 200 = <strong>1.400 GiB</strong>.</div>
        <p>Weitere Begriffe: <strong>Image-Sicherung</strong> (ganzes System oder ganze VM) und <strong>dateibasierte Sicherung</strong>. <strong>Anwendungskonsistent</strong> heißt: Datenbanken werden vorher in einen sauberen Zustand gebracht (Windows: VSS). Bei der <strong>synthetischen Vollsicherung</strong> baut die Backup-Software aus Voll- und Inkrementsicherungen eine neue Vollsicherung zusammen, ohne den Server erneut zu belasten.</p>
        <h5>Generationenprinzip (Großvater – Vater – Sohn)</h5>
        <ul>
          <li><strong>Söhne</strong>: Tagessicherungen Mo–Do, 4 Medien, jede Woche überschrieben.</li>
          <li><strong>Väter</strong>: Wochensicherungen am Freitag, 4 Medien, jeden Monat überschrieben.</li>
          <li><strong>Großväter</strong>: Monatssicherungen, 12 Medien, nach einem Jahr überschrieben.</li>
        </ul>
        <p>Das ergibt 4 + 4 + 12 = <strong>20 Medien</strong>, und du kommst bis zu ein Jahr zurück. (Varianten mit anderen Anzahlen sind üblich – rechne immer mit den Angaben der Aufgabe.)</p>
        <h5>3-2-1-Regel</h5>
        <div class="callout merke"><strong>3-2-1:</strong> <strong>3</strong> Kopien der Daten (Original + 2 Sicherungen) auf <strong>2</strong> verschiedenen Medientypen, davon <strong>1</strong> Kopie außer Haus. Erweiterung <strong>3-2-1-1-0</strong>: zusätzlich 1 Kopie offline oder unveränderbar (gegen Ransomware) und 0 Fehler bei der Prüfung der Wiederherstellung.</div>
        <h5>RPO und RTO</h5>
        <ul>
          <li><strong>RPO</strong> (Recovery Point Objective): maximal tolerierbarer <strong>Datenverlust</strong>, gemessen als Zeitraum. RPO 4 h bedeutet: mindestens alle 4 Stunden sichern.</li>
          <li><strong>RTO</strong> (Recovery Time Objective): maximal tolerierbare <strong>Ausfallzeit</strong> bis zum Wiederanlauf. Daraus folgen Medium, Bandbreite und Ersatzhardware.</li>
        </ul>
        <h5>Backup-Dauer berechnen</h5>
        <div class="callout formel">Dauer t = Datenmenge ÷ effektive Datenrate · 1 GiB = 2³⁰ Byte, 1 TiB = 2⁴⁰ Byte · 1 MB/s = 10⁶ Byte/s · 1 Gbit/s = 125 MB/s · Komprimierung 2 : 1 halbiert die zu schreibende Datenmenge</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> 2 TiB auf ein Bandlaufwerk mit 200 MB/s:<br>
        2 × 2⁴⁰ Byte = 2.199.023.255.552 Byte ÷ 200.000.000 Byte/s ≈ 10.995 s ≈ <strong>3 h 3 min</strong>.<br>
        Wiederherstellung von 500 GiB über 1 Gbit/s bei 80 % Nutzlast: 125 MB/s × 0,8 = 100 MB/s → 500 × 2³⁰ Byte ÷ 100.000.000 Byte/s ≈ 5.369 s ≈ <strong>1 h 29 min</strong>.</div>
        <h5>Medien, Archivierung und Tests</h5>
        <p>Übliche Ziele sind Band (LTO: günstig pro TiB, offline lagerbar), NAS/Festplatten (schneller Restore), Cloud-Speicher (automatisch außer Haus) und <strong>unveränderbarer Speicher</strong> (Immutable, WORM). Oft wird gestaffelt gesichert: erst schnell auf Platte, dann auf Band (Disk-to-Disk-to-Tape). Sicherungsmedien lagerst du <strong>verschlüsselt</strong>, in einem <strong>anderen Brandabschnitt</strong> oder Gebäude (z. B. Datensicherungstresor) und unter geeigneten Klimabedingungen. Eine Löschrichtlinie legt fest, wann alte Sicherungen vernichtet werden – auch personenbezogene Daten in Backups unterliegen der DSGVO.</p>
        <table><thead><tr><th></th><th>Backup</th><th>Archivierung</th></tr></thead><tbody>
        <tr><td>Zweck</td><td>Wiederherstellung nach Datenverlust</td><td>langfristige, revisionssichere Aufbewahrung</td></tr>
        <tr><td>Daten</td><td>Kopie aktueller Daten, rotierend überschrieben</td><td>abgeschlossene Originale, oft aus dem Produktivsystem ausgelagert</td></tr>
        <tr><td>Dauer</td><td>Tage bis Monate</td><td>Jahre nach HGB § 257 / AO § 147, z. B. Geschäftsbriefe 6, Buchungsbelege 8, Bücher und Jahresabschlüsse 10 Jahre</td></tr>
        </tbody></table>
        <p><strong>Wiederherstellungstests</strong> führst du regelmäßig und dokumentiert durch – am besten in einer isolierten Testumgebung, inklusive Messung der tatsächlichen Restore-Dauer im Vergleich zum RTO. Lege auch die Reihenfolge fest: zuerst AD und DNS, dann Datenbanken, dann Anwendungen. Diese Schritte gehören in einen dokumentierten <strong>Wiederanlaufplan</strong> bzw. ein Notfallhandbuch (Orientierung: BSI-Standard 200-4 zum Business Continuity Management), das auch auf Papier bzw. offline verfügbar ist.</p>
        <div class="callout achtung"><strong>Achtung:</strong> Snapshots, RAID und Synchronisation (z. B. Cloud-Ordner) sind <strong>keine Backups</strong>: Ein gelöschter oder verschlüsselter Stand wird sofort mit übernommen bzw. liegt auf demselben System.</div>
        <div class="callout pruefung"><strong>In der Prüfung:</strong> Die für eine Wiederherstellung nötigen Sicherungen <em>bestimmen</em>, Sicherungsarten <em>vergleichen</em>, eine Strategie nach 3-2-1 und GFS <em>entwerfen</em>, RPO/RTO <em>erklären</em> und Backup- oder Restore-Dauer <em>berechnen</em>.</div>`
    },
    {
      id: "monitoring",
      title: "Überwachung & Verfügbarkeit: Monitoring, SNMP, Syslog, USV",
      exam: ["AP2"],
      summary: "Was du überwachst, wie SNMP und Syslog funktionieren, Ereignisanzeige, Monitoring-Werkzeuge, Schwellwerte und Alarmierung sowie Verfügbarkeit, AFR, USV und Netzteil berechnen.",
      html: `
        <p>Monitoring erkennt Störungen, bevor Benutzer sie melden, zeigt Engpässe, liefert Daten für die Kapazitätsplanung und belegt die Einhaltung von SLAs.</p>
        <h5>Was wird überwacht?</h5>
        <ul>
          <li><strong>Hardware</strong>: Temperatur, Lüfter, Netzteile, RAID-Status, S.M.A.R.T.-Werte der Laufwerke, USV-Akku</li>
          <li><strong>System</strong>: CPU-Last, RAM und Auslagerung, freier Speicherplatz, Datenträger-I/O (Latenz, Warteschlange)</li>
          <li><strong>Dienste</strong>: Port erreichbar, HTTP-Statuscode, DNS-Antwort, Dienst läuft, Antwortzeiten</li>
          <li><strong>Betrieb</strong>: Backup-Jobs, Ablaufdatum von Zertifikaten, Updates, fehlgeschlagene Anmeldungen</li>
        </ul>
        <h5>SNMP</h5>
        <p>Beim <strong>Simple Network Management Protocol</strong> fragt ein <strong>Manager</strong> (Monitoring-Server) die <strong>Agents</strong> auf Geräten ab (GET, per UDP 161) oder ändert Werte (SET). Agents melden Ereignisse selbstständig als <strong>Trap</strong> (UDP 162). Die Werte stehen in der <strong>MIB</strong> und sind über eine <strong>OID</strong> adressiert, z. B. <code>1.3.6.1.2.1.1.3.0</code> = sysUpTime.</p>
        <table><thead><tr><th>Version</th><th>Sicherheit</th></tr></thead><tbody>
        <tr><td>SNMPv1 / v2c</td><td>nur Community-String im Klartext (oft „public“) – unsicher</td></tr>
        <tr><td>SNMPv3</td><td>Benutzer mit Authentifizierung (z. B. SHA) und Verschlüsselung (z. B. AES) – empfohlen</td></tr>
        </tbody></table>
        <h5>Syslog und Ereignisanzeige</h5>
        <p><strong>Syslog</strong> sendet Meldungen an einen zentralen Logserver (UDP 514, verschlüsselt über TLS auf TCP 6514). Jede Meldung hat eine Quelle (Facility) und einen Schweregrad:</p>
        <table><thead><tr><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th></tr></thead><tbody>
        <tr><td>Emergency</td><td>Alert</td><td>Critical</td><td>Error</td><td>Warning</td><td>Notice</td><td>Informational</td><td>Debug</td></tr>
        </tbody></table>
        <p>Unter Windows sammelt die <strong>Ereignisanzeige</strong> (<code>eventvwr.msc</code>) Meldungen in den Protokollen Anwendung, Sicherheit und System, jeweils mit Ebene (Kritisch, Fehler, Warnung, Informationen) und Ereignis-ID. Beispiele: 4624 = erfolgreiche Anmeldung, 4625 = fehlgeschlagene Anmeldung, 4740 = Konto gesperrt, 6008 = unerwartetes Herunterfahren.</p>
        <pre><code>Get-WinEvent -LogName Security -MaxEvents 50 | Where-Object Id -eq 4625</code></pre>
        <h5>Monitoring-Werkzeuge</h5>
        <table><thead><tr><th>Werkzeug</th><th>Merkmale</th></tr></thead><tbody>
        <tr><td>Nagios / Icinga</td><td>Open Source, Prüfungen über Plugins. Rückgabewerte: 0 OK, 1 WARNING, 2 CRITICAL, 3 UNKNOWN</td></tr>
        <tr><td>Checkmk</td><td>ursprünglich aus dem Nagios-Umfeld, automatische Erkennung der Prüfpunkte, Agent pro Host</td></tr>
        <tr><td>Zabbix</td><td>Open Source, Agent oder SNMP, Vorlagen und Trigger, Diagramme</td></tr>
        <tr><td>PRTG</td><td>kommerziell, Windows-basiert, Lizenz nach Anzahl der Sensoren</td></tr>
        <tr><td>Prometheus + Grafana</td><td>Zeitreihen-Metriken (Pull-Prinzip) und Dashboards, stark bei Containern</td></tr>
        </tbody></table>
        <p><strong>Agentenbasiert</strong> heißt: Auf dem überwachten System läuft ein kleines Programm, das viele Details liefert (Dienste, Logs, Prozesse). <strong>Agentenlos</strong> fragt der Monitoring-Server über Standardprotokolle ab (SNMP, WMI, SSH, HTTP, Ping) – ideal für Switches, Drucker und USVs, auf denen man nichts installieren kann.</p>
        <h5>Schwellwerte und Alarmierung</h5>
        <p>Für jede Messgröße legst du einen <strong>Warn-</strong> und einen <strong>kritischen Schwellwert</strong> fest, z. B. freier Speicher &lt; 20 % = Warnung, &lt; 10 % = kritisch. Damit kurze Spitzen keinen Fehlalarm auslösen, gilt oft eine Dauer (z. B. CPU &gt; 90 % länger als 10 Minuten). Alarme gehen nach einem <strong>Eskalationsplan</strong> per E-Mail, SMS oder Ticket an die zuständige Stelle. Zu viele unwichtige Alarme führen dazu, dass wichtige übersehen werden.</p>
        <div class="callout achtung"><strong>Datenschutz und Mitbestimmung:</strong> Logs und Monitoringdaten enthalten oft personenbezogene Daten (Benutzernamen, IP-Adressen, Anmeldezeiten). Erhebe nur, was du für den Betrieb brauchst, lege Löschfristen fest und beschränke den Zugriff. Technische Einrichtungen, die Verhalten oder Leistung von Beschäftigten überwachen <em>können</em>, sind nach § 87 Abs. 1 Nr. 6 BetrVG mitbestimmungspflichtig – mit dem Betriebsrat wird dann eine Betriebsvereinbarung geschlossen.</div>
        <h5>Verfügbarkeit berechnen</h5>
        <div class="callout formel">Verfügbarkeit A = MTBF ÷ (MTBF + MTTR) · Ausfallzeit pro Jahr = (1 − A) × 8.760 h<br>Reihe (alle nötig): A = A₁ × A₂ · parallel (einer genügt): A = 1 − (1 − A₁) × (1 − A₂)</div>
        <table><thead><tr><th>Verfügbarkeit</th><th>99 %</th><th>99,9 %</th><th>99,99 %</th></tr></thead><tbody>
        <tr><td>max. Ausfall pro Jahr</td><td>87,6 h</td><td>8,76 h</td><td>52,56 min</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel:</strong> MTBF 50.000 h, MTTR 8 h → A = 50.000 ÷ 50.008 ≈ 0,99984 = <strong>99,984 %</strong>. Zwei parallele Internetleitungen mit je 99 %: 1 − 0,01 × 0,01 = <strong>99,99 %</strong>. Firewall (99,9 %) und Server (99,5 %) in Reihe: 0,999 × 0,995 ≈ <strong>99,40 %</strong>.</div>
        <p>Die <strong>AFR</strong> (jährliche Ausfallrate) schätzt du mit AFR ≈ 8.760 h ÷ MTBF: Bei MTBF 1.000.000 h sind das 0,876 %, bei 200 Platten also etwa 1,75 Ausfälle pro Jahr. Die <strong>Badewannenkurve</strong> zeigt die Ausfallrate über die Lebensdauer: erst Frühausfälle, dann lange wenige Zufallsausfälle, am Ende steigende Verschleißausfälle. Deshalb testest du neue Hardware vor dem Einsatz und tauschst alte rechtzeitig.</p>
        <h5>USV und Netzteil</h5>
        <table><thead><tr><th>USV-Klasse</th><th>Bauart</th><th>Schutz</th></tr></thead><tbody>
        <tr><td>VFD</td><td>Offline / Standby</td><td>schaltet erst bei Netzausfall um (Millisekunden), Schwankungen gehen durch – für Arbeitsplätze</td></tr>
        <tr><td>VI</td><td>Line-Interactive</td><td>regelt zusätzlich Unter- und Überspannung – kleine Server, Netzwerktechnik</td></tr>
        <tr><td>VFI</td><td>Online / Doppelwandler</td><td>Last hängt dauerhaft am Wechselrichter, ohne Umschaltzeit – Server, Rechenzentrum</td></tr>
        </tbody></table>
        <div class="callout formel">Scheinleistung S [VA] = Wirkleistung P [W] ÷ cos φ · Netzteil-Nennleistung ≥ Σ Komponenten × 1,2 (Reserve) · Aufnahme aus dem Netz P_in = P_out ÷ η</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> 3 Server à 400 W + Switch 120 W + Firewall 80 W = 1.400 W. Bei cos φ = 0,9: S = 1.400 ÷ 0,9 ≈ 1.556 VA, mit 20 % Reserve ≈ 1.867 VA (1.680 W) → USV mit mindestens <strong>2.000 VA</strong>, deren W-Angabe ebenfalls reicht. Netzteil: Komponenten 480 W × 1,2 = 576 W → <strong>600-W-Netzteil</strong>. Bei η = 0,92 nimmt es 480 ÷ 0,92 ≈ 522 W aus dem Netz auf.</div>
        <div class="callout pruefung"><strong>In der Prüfung:</strong> Messgrößen und Schwellwerte für einen Server <em>festlegen</em>, SNMP-Versionen <em>vergleichen</em>, Monitoring-Werte <em>interpretieren</em> und Maßnahmen <em>ableiten</em>, Verfügbarkeiten <em>berechnen</em>, USV-Klassen <em>unterscheiden</em> sowie USV und Netzteil <em>dimensionieren</em>.</div>`
    },
    {
      id: "powershell",
      title: "PowerShell: Cmdlets, Pipeline & Skripte",
      exam: ["AP2"],
      summary: "Cmdlets nach dem Verb-Nomen-Schema, objektorientierte Pipeline, Variablen, Vergleichsoperatoren, Verzweigungen, Schleifen, Funktionen und Fehlerbehandlung sowie typische Admin-Skripte.",
      html: `
        <p>Die <strong>PowerShell</strong> ist Shell und Skriptsprache für die Windows-Administration. Windows PowerShell 5.1 ist in Windows enthalten, <strong>PowerShell 7</strong> (<code>pwsh</code>) läuft auch unter Linux und macOS. Befehle heißen <strong>Cmdlets</strong> und folgen dem Schema <strong>Verb-Nomen</strong>.</p>
        <table><thead><tr><th>Cmdlet</th><th>Zweck</th></tr></thead><tbody>
        <tr><td><code>Get-Help</code>, <code>Get-Command</code>, <code>Get-Member</code></td><td>Hilfe, Befehle finden, Eigenschaften eines Objekts anzeigen</td></tr>
        <tr><td><code>Get-Service</code>, <code>Restart-Service</code></td><td>Dienste anzeigen, neu starten</td></tr>
        <tr><td><code>Get-Process</code>, <code>Stop-Process</code></td><td>Prozesse anzeigen, beenden</td></tr>
        <tr><td><code>Get-ChildItem</code>, <code>Copy-Item</code>, <code>Remove-Item</code>, <code>New-Item</code></td><td>Dateien und Ordner</td></tr>
        <tr><td><code>Import-Csv</code>, <code>Export-Csv</code>, <code>Out-File</code></td><td>Daten einlesen und ausgeben</td></tr>
        <tr><td><code>Get-ADUser</code>, <code>New-ADUser</code>, <code>Add-ADGroupMember</code></td><td>Active-Directory-Verwaltung (Modul ActiveDirectory)</td></tr>
        <tr><td><code>Test-Connection</code>, <code>Get-NetIPAddress</code></td><td>Netzwerk prüfen</td></tr>
        </tbody></table>
        <h5>Die Pipeline überträgt Objekte</h5>
        <p>Anders als in der Bash wird kein Text weitergereicht, sondern <strong>Objekte</strong> mit Eigenschaften. Das aktuelle Objekt in der Pipeline heißt <code>$_</code> (oder <code>$PSItem</code>).</p>
        <pre><code>Get-Service | Where-Object { $_.Status -eq "Stopped" } | Sort-Object Name | Select-Object Name, StartType</code></pre>
        <h5>Variablen und Operatoren</h5>
        <pre><code>$server = "SRV01"                  # Zeichenkette
$grenze = 80                       # Zahl
$liste  = @("SRV01", "SRV02")      # Array, $liste[0] ist "SRV01"
"Server: $server"                  # doppelte Anführungszeichen: Variable wird eingesetzt
'Server: $server'                  # einfache: Text bleibt wörtlich</code></pre>
        <table><thead><tr><th>Operator</th><th>Bedeutung</th><th>Operator</th><th>Bedeutung</th></tr></thead><tbody>
        <tr><td><code>-eq</code> / <code>-ne</code></td><td>gleich / ungleich</td><td><code>-like</code></td><td>Platzhaltervergleich, z. B. <code>"*.log"</code></td></tr>
        <tr><td><code>-gt</code> / <code>-ge</code></td><td>größer / größer gleich</td><td><code>-match</code></td><td>regulärer Ausdruck</td></tr>
        <tr><td><code>-lt</code> / <code>-le</code></td><td>kleiner / kleiner gleich</td><td><code>-and</code>, <code>-or</code>, <code>-not</code></td><td>logische Verknüpfung</td></tr>
        </tbody></table>
        <h5>Verzweigungen und Schleifen</h5>
        <pre><code>$frei = (Get-PSDrive C).Free / 1GB
if ($frei -lt 10) {
    Write-Warning "Nur noch $frei GiB frei!"
} elseif ($frei -lt 50) {
    Write-Host "Speicher wird knapp"
} else {
    Write-Host "Alles in Ordnung"
}

foreach ($s in $liste) {
    if (Test-Connection -ComputerName $s -Count 1 -Quiet) { "$s erreichbar" } else { "$s NICHT erreichbar" }
}

for ($i = 1; $i -le 3; $i++) { "Durchlauf $i" }</code></pre>
        <p>In PowerShell steht <code>1GB</code> für 2³⁰ Byte, also eigentlich 1 GiB.</p>
        <h5>ForEach-Object, Funktionen und Fehlerbehandlung</h5>
        <p><code>foreach (… in …)</code> durchläuft eine Sammlung, die schon in einer Variablen steht. <code>ForEach-Object</code> arbeitet dagegen <em>in der Pipeline</em> jedes ankommende Objekt einzeln ab (aktuelles Objekt: <code>$_</code>). Wiederkehrende Abläufe packst du in eine <strong>Funktion</strong> mit Parametern und Rückgabewert. Mit <code>try</code>/<code>catch</code> fängst du Fehler ab – damit auch „nicht abbrechende“ Fehler im <code>catch</code> landen, setzt du <code>-ErrorAction Stop</code>.</p>
        <pre><code>Get-Service -Name "Spooler", "W32Time" | ForEach-Object { "$($_.Name): $($_.Status)" }

function Test-Speicher {
    param([string]$Laufwerk = "C", [int]$Grenze = 10)
    $frei = (Get-PSDrive $Laufwerk).Free / 1GB
    return ($frei -lt $Grenze)            # $true, wenn zu wenig frei
}
if (Test-Speicher -Laufwerk "D" -Grenze 20) { Write-Warning "Laufwerk D: fast voll" }

try {
    Copy-Item -Path "D:\\Daten\\*" -Destination "\\\\NAS01\\Backup\\" -Recurse -ErrorAction Stop
    Add-Content -Path "C:\\Logs\\backup.log" -Value "$(Get-Date -Format s) Sicherung OK"
} catch {
    Add-Content -Path "C:\\Logs\\backup.log" -Value "$(Get-Date -Format s) FEHLER: $($_.Exception.Message)"
    exit 1                                 # Exit-Code ungleich 0 → Aufgabenplanung/Monitoring erkennt den Fehler
}</code></pre>
        <h5>Beispiel 1: alte Logdateien löschen</h5>
        <pre><code>$stichtag = (Get-Date).AddDays(-30)
Get-ChildItem -Path "D:\\Logs" -Filter "*.log" -File |
    Where-Object { $_.LastWriteTime -lt $stichtag } |
    Remove-Item -WhatIf        # -WhatIf zeigt nur an; zum Löschen entfernen</code></pre>
        <h5>Beispiel 2: Benutzer aus CSV anlegen</h5>
        <pre><code># neue_mitarbeiter.csv:  Vorname;Nachname;Abteilung
$startPw = Read-Host "Startpasswort" -AsSecureString
$liste = Import-Csv -Path "C:\\Skripte\\neue_mitarbeiter.csv" -Delimiter ";"
foreach ($m in $liste) {
    $login = ($m.Vorname.Substring(0,1) + $m.Nachname).ToLower()   # z. B. ameier
    New-ADUser -Name "$($m.Vorname) $($m.Nachname)" -SamAccountName $login -Path "OU=$($m.Abteilung),OU=Benutzer,DC=nordlicht,DC=de" -AccountPassword $startPw -ChangePasswordAtLogon $true -Enabled $true
    Add-ADGroupMember -Identity "G_$($m.Abteilung)" -Members $login
}</code></pre>
        <h5>Skripte ausführen und planen</h5>
        <p>Skripte speicherst du als <code>.ps1</code>. Die <strong>Ausführungsrichtlinie</strong> legt fest, ob sie laufen dürfen: Auf Windows-Clients ist <code>Restricted</code> Standard, auf Windows Server <code>RemoteSigned</code> (lokale Skripte erlaubt, heruntergeladene nur signiert). Regelmäßig startest du Skripte über die <strong>Aufgabenplanung</strong> (<code>Register-ScheduledTask</code> oder <code>schtasks</code>), auf entfernten Rechnern mit <code>Invoke-Command</code> (WinRM).</p>
        <div class="callout achtung"><strong>Achtung:</strong> <code>=</code> ist eine Zuweisung, <code>&gt;</code> eine Umleitung in eine Datei. Vergleiche schreibst du immer mit <code>-eq</code>, <code>-gt</code> usw. Ein <code>if ($a &gt; 5)</code> vergleicht nicht, sondern erzeugt eine Datei namens „5“.</div>
        <div class="callout pruefung"><strong>In der Prüfung:</strong> Ein Skript <em>lesen</em> und seine Ausgabe <em>angeben</em>, Lücken <em>ergänzen</em>, Syntax- und Logikfehler <em>finden und korrigieren</em> oder einen Ablauf in PowerShell bzw. Pseudocode <em>formulieren</em>.</div>`
    },
    {
      id: "bash",
      title: "Bash-Skripte, cron & Automatisierung",
      exam: ["AP2"],
      summary: "Shebang, Variablen, Parameter, if, for, while und Funktionen in Bash, ein vollständiges Backup-Skript, zeitgesteuerte Ausführung mit cron, die Wahl der Skriptsprache (auch Python) und ein Ausblick auf Ansible.",
      html: `
        <p>Ein <strong>Bash-Skript</strong> ist eine Textdatei mit Shell-Befehlen. Die erste Zeile, der <strong>Shebang</strong> <code>#!/bin/bash</code>, legt den Interpreter fest. Ausführbar machst du es mit <code>chmod +x skript.sh</code>, starten mit <code>./skript.sh</code>.</p>
        <h5>Variablen und Parameter</h5>
        <pre><code>NAME="SRV01"              # keine Leerzeichen um das =
echo "Server: $NAME"      # Variable immer in Anführungszeichen verwenden
HEUTE=$(date +%F)         # Befehlsersetzung, z. B. 2026-09-23
SUMME=$((3 + 4))          # Rechnen mit ganzen Zahlen
read -p "Benutzer: " USER_IN</code></pre>
        <table><thead><tr><th>Variable</th><th>Bedeutung</th></tr></thead><tbody>
        <tr><td><code>$0</code></td><td>Name des Skripts</td></tr>
        <tr><td><code>$1</code>, <code>$2</code> …</td><td>erster, zweiter … Parameter</td></tr>
        <tr><td><code>$#</code></td><td>Anzahl der Parameter</td></tr>
        <tr><td><code>$@</code></td><td>alle Parameter</td></tr>
        <tr><td><code>$?</code></td><td>Rückgabewert des letzten Befehls (0 = Erfolg)</td></tr>
        </tbody></table>
        <h5>Bedingungen und Schleifen</h5>
        <table><thead><tr><th>Test</th><th>wahr, wenn …</th></tr></thead><tbody>
        <tr><td><code>[ "$a" -eq "$b" ]</code>, <code>-ne -lt -le -gt -ge</code></td><td>Zahlenvergleich</td></tr>
        <tr><td><code>[ "$s" = "ja" ]</code>, <code>!=</code>, <code>-z "$s"</code></td><td>Textvergleich, Text leer</td></tr>
        <tr><td><code>[ -f datei ]</code>, <code>[ -d ordner ]</code>, <code>[ -e pfad ]</code></td><td>Datei / Verzeichnis / irgendetwas existiert</td></tr>
        </tbody></table>
        <pre><code>for DIENST in nginx ssh cron; do
    if systemctl is-active --quiet "$DIENST"; then
        echo "$DIENST läuft"
    else
        echo "$DIENST gestoppt – Neustart"
        systemctl restart "$DIENST"
    fi
done</code></pre>
        <p>Die <strong>while</strong>-Schleife läuft, solange die Bedingung wahr ist – z. B. mit Zähler oder um eine Datei zeilenweise zu lesen. Mit einer <strong>Funktion</strong> fasst du Befehle unter einem Namen zusammen. Ihre Parameter heißen wie beim Skript <code>$1</code>, <code>$2</code> …, ihr Ergebnis ist der Exit-Code des letzten Befehls (oder <code>return n</code>).</p>
        <pre><code>ZAEHLER=1
while [ "$ZAEHLER" -le 3 ]; do        # gibt Versuch 1, Versuch 2, Versuch 3 aus
    echo "Versuch $ZAEHLER"
    ZAEHLER=$((ZAEHLER + 1))
done

while read -r NAME; do                # jede Zeile der Datei ist ein Benutzername
    useradd -m -s /bin/bash "$NAME"
done &lt; neue_benutzer.txt

pruefe_dienst() {
    systemctl is-active --quiet "$1"  # Exit-Code 0 = Dienst läuft
}
if ! pruefe_dienst nginx; then
    logger -p user.err "nginx auf $(hostname) gestoppt"   # Meldung ins Syslog → Monitoring alarmiert
fi</code></pre>
        <h5>Beispiel: Sicherungsskript</h5>
        <pre><code>#!/bin/bash
# sichert /srv/daten und löscht Sicherungen, die älter als 7 Tage sind
QUELLE="/srv/daten"
ZIEL="/backup"
DATUM=$(date +%F)
LOG="/var/log/backup.log"

if [ ! -d "$ZIEL" ]; then
    echo "$DATUM FEHLER: $ZIEL fehlt" &gt;&gt; "$LOG"
    exit 1
fi

tar -czf "$ZIEL/daten-$DATUM.tar.gz" "$QUELLE"
if [ $? -eq 0 ]; then
    echo "$DATUM Sicherung erfolgreich" &gt;&gt; "$LOG"
else
    echo "$DATUM Sicherung FEHLGESCHLAGEN" &gt;&gt; "$LOG"
    exit 2
fi

find "$ZIEL" -name "daten-*.tar.gz" -mtime +7 -delete</code></pre>
        <h5>Zeitgesteuert mit cron</h5>
        <pre class="ascii">Minute  Stunde  Tag  Monat  Wochentag   Befehl
  30      2      *     *      1-5      /usr/local/bin/backup.sh &gt;&gt; /var/log/backup.log 2&gt;&amp;1
(0–59)  (0–23) (1–31) (1–12) (0–7, 0 und 7 = Sonntag)</pre>
        <table><thead><tr><th>Eintrag</th><th>Bedeutung</th></tr></thead><tbody>
        <tr><td><code>*/15 * * * *</code></td><td>alle 15 Minuten</td></tr>
        <tr><td><code>0 * * * *</code></td><td>jede volle Stunde</td></tr>
        <tr><td><code>30 2 * * 1-5</code></td><td>Montag bis Freitag um 02:30 Uhr</td></tr>
        <tr><td><code>0 22 * * 5</code></td><td>freitags um 22:00 Uhr</td></tr>
        <tr><td><code>0 3 1 * *</code></td><td>am 1. jedes Monats um 03:00 Uhr</td></tr>
        </tbody></table>
        <p>Bearbeiten mit <code>crontab -e</code>, anzeigen mit <code>crontab -l</code>. In <code>/etc/crontab</code> und <code>/etc/cron.d/</code> steht zusätzlich eine Spalte mit dem Benutzer. Moderne Alternative: <strong>systemd-Timer</strong>. Unter Windows übernimmt das die Aufgabenplanung.</p>
        <div class="callout achtung"><strong>Achtung:</strong> Leerzeichen in <code>[ ]</code> sind Pflicht (<code>[ "$a" -gt 5 ]</code>). cron startet mit minimaler Umgebung – nutze absolute Pfade. Das Zeichen <code>%</code> hat in der crontab eine Sonderbedeutung und muss dort als <code>\\%</code> geschrieben werden.</div>
        <h5>Welche Skriptsprache?</h5>
        <p><strong>PowerShell</strong> ist unter Windows zu Hause (Objekte, AD-Module), die <strong>Bash</strong> unter Linux (Textverarbeitung mit Pipes). <strong>Python</strong> läuft auf allen Plattformen, bringt viele Bibliotheken mit (z. B. für CSV, JSON und REST-APIs) und eignet sich für umfangreichere Automatisierungen. Entscheidend sind auch das Know-how im Team und die Wartbarkeit.</p>
        <pre><code>import shutil
platte = shutil.disk_usage("/")
prozent = platte.used / platte.total * 100
if prozent &gt;= 90:
    print(f"Warnung: {prozent:.0f} % belegt")</code></pre>
        <h5>Ausblick: Automatisierung im großen Stil</h5>
        <p>Für viele Server nutzt man <strong>Infrastructure as Code</strong>: Der Soll-Zustand steht in versionierten Dateien. <strong>Ansible</strong> arbeitet ohne Agent über SSH mit YAML-Playbooks und ist <strong>idempotent</strong> – mehrfaches Ausführen führt immer zum selben Ergebnis. Terraform legt Cloud-Ressourcen deklarativ an.</p>
        <pre><code>- hosts: webserver
  become: true
  tasks:
    - name: nginx installieren
      ansible.builtin.apt: { name: nginx, state: present }</code></pre>
        <div class="callout pruefung"><strong>In der Prüfung:</strong> Ein Skript <em>erklären</em> oder <em>vervollständigen</em>, einen cron-Eintrag <em>interpretieren</em> oder <em>erstellen</em> und Vorteile der Automatisierung (Zeit, Fehlervermeidung, Nachvollziehbarkeit) <em>nennen</em>.</div>`
    },
    {
      id: "skripte-analyse",
      title: "Skripte analysieren, testen & sicher automatisieren",
      exam: ["AP2"],
      summary: "Code und Pseudocode lesen, Ausgaben per Schreibtischtest bestimmen, Syntax-, Laufzeit- und Logikfehler finden, Skripte testen, die Sprache begründet wählen und Automatisierung sicher betreiben.",
      html: `
        <p>In der KAIS-Prüfung bekommst du häufig ein kurzes Skript (PowerShell, Bash, Python) oder <strong>Pseudocode</strong> und sollst die Ausgabe angeben, Lücken füllen oder Fehler korrigieren. Sollst du selbst einen Ablauf formulieren, reicht laut Prüfungskatalog allgemein verständlicher Programm- oder Pseudocode: Er muss nicht lauffähig sein, kleine Syntaxfehler werden toleriert – die Kontrollstrukturen (Verzweigung, Schleife) müssen aber z. B. durch Einrückung klar erkennbar sein.</p>
        <h5>Pseudocode – ein Beispiel</h5>
        <pre><code>funktion zaehleVolleLaufwerke(belegung, grenze)
    anzahl = 0
    für i = 0 bis laenge(belegung) − 1
        wenn belegung[i] &gt;= grenze dann
            anzahl = anzahl + 1
        ende wenn
    ende für
    rückgabe anzahl
ende funktion</code></pre>
        <h5>Schreibtischtest (Trace-Tabelle)</h5>
        <p>Beim Schreibtischtest führst du den Code auf Papier Schritt für Schritt aus und notierst nach jedem Durchlauf die Werte der Variablen. So bestimmst du Ausgaben sicher und entdeckst Logikfehler.</p>
        <div class="callout beispiel"><strong>Beispiel:</strong> Aufruf <code>zaehleVolleLaufwerke([72, 91, 90, 45], 90)</code>
        <table><thead><tr><th>i</th><th>belegung[i]</th><th>≥ 90?</th><th>anzahl</th></tr></thead><tbody>
        <tr><td>–</td><td>–</td><td>–</td><td>0</td></tr>
        <tr><td>0</td><td>72</td><td>nein</td><td>0</td></tr>
        <tr><td>1</td><td>91</td><td>ja</td><td>1</td></tr>
        <tr><td>2</td><td>90</td><td>ja</td><td>2</td></tr>
        <tr><td>3</td><td>45</td><td>nein</td><td>2</td></tr>
        </tbody></table>
        Rückgabe: <strong>2</strong>. Stünde dort <code>&gt;</code> statt <code>&gt;=</code>, wäre das Ergebnis 1 – das Laufwerk mit genau 90 % würde übersehen.</div>
        <h5>Fehlerarten</h5>
        <table><thead><tr><th>Fehlerart</th><th>Merkmal</th><th>Beispiele</th></tr></thead><tbody>
        <tr><td>Syntaxfehler</td><td>Der Code verstößt gegen die Regeln der Sprache und startet gar nicht.</td><td>fehlende schließende Klammer, <code>fi</code> vergessen, <code>NAME = "x"</code> in Bash</td></tr>
        <tr><td>Laufzeitfehler</td><td>Der Code startet, bricht aber bei bestimmten Daten ab.</td><td>Division durch 0, Zugriff auf <code>liste[laenge(liste)]</code> (Index außerhalb), Datei nicht vorhanden</td></tr>
        <tr><td>Logischer (semantischer) Fehler</td><td>Der Code läuft durch, liefert aber ein falsches Ergebnis.</td><td>Off-by-one, <code>-gt</code> statt <code>-lt</code>, Zähler nicht mit 0 initialisiert, Division statt Modulo</td></tr>
        </tbody></table>
        <h5>Typische Fallen im Code</h5>
        <ul>
          <li><strong>Off-by-one</strong>: Indizes beginnen meist bei 0. Bei n Elementen läuft die Schleife von 0 bis n − 1.</li>
          <li><strong>Modulo</strong> (<code>mod</code>, in vielen Sprachen <code>%</code>) liefert den Rest der ganzzahligen Division: 17 mod 5 = 2, 17 div 5 = 3. Gerade Zahl: x mod 2 = 0. Zeitumrechnung: 200 min = 200 div 60 = 3 h und 200 mod 60 = 20 min.</li>
          <li><strong>Vergleich oder Zuweisung</strong>: In vielen Sprachen vergleicht <code>==</code>, <code>=</code> weist zu. PowerShell und Bash (bei Zahlen) vergleichen mit <code>-eq</code>.</li>
          <li><strong>Initialisierung</strong>: Summen und Zähler vor der Schleife auf 0 setzen – nicht in der Schleife, sonst beginnen sie bei jedem Durchlauf neu.</li>
          <li><strong>Richtung des Vergleichs</strong>: „älter als 30 Tage“ heißt <code>$_.LastWriteTime -lt (Get-Date).AddDays(-30)</code> bzw. <code>find … -mtime +30</code>.</li>
        </ul>
        <h5>Skripte testen</h5>
        <table><thead><tr><th>Verfahren</th><th>Idee</th><th>Beispiel: Skript warnt ab 90 % Belegung</th></tr></thead><tbody>
        <tr><td>Black-Box-Test</td><td>nur Ein- und Ausgaben betrachten; Äquivalenzklassen und Grenzwerte bilden</td><td>89 und 90 (Grenze), 0 und 100 (Extremwerte), „abc“ (ungültige Eingabe)</td></tr>
        <tr><td>White-Box-Test</td><td>Code ist bekannt; jede Anweisung bzw. jeder Zweig wird mindestens einmal durchlaufen</td><td>je ein Testfall für den if-Zweig (Warnung) und den else-Zweig</td></tr>
        <tr><td>Schreibtischtest</td><td>Code gedanklich Zeile für Zeile ausführen</td><td>Trace-Tabelle wie oben</td></tr>
        </tbody></table>
        <p>Teste Skripte zuerst in einer <strong>Testumgebung</strong>, mit <code>-WhatIf</code> und mit wenigen Testobjekten. Einfaches <strong>print-Debugging</strong> (Zwischenwerte mit <code>echo</code> oder <code>Write-Host</code> ausgeben) hilft beim Eingrenzen; die zusätzlichen Ausgaben entfernst du danach wieder.</p>
        <h5>Welche Sprache passt?</h5>
        <table><thead><tr><th>Kriterium</th><th>PowerShell</th><th>Bash</th><th>Python</th></tr></thead><tbody>
        <tr><td>Plattform</td><td>Windows (PowerShell 7 auch Linux/macOS)</td><td>Linux/Unix</td><td>plattformübergreifend</td></tr>
        <tr><td>Stärke</td><td>Objekte, Module für AD, Hyper-V, Microsoft 365</td><td>Befehle verketten, Textverarbeitung</td><td>große Bibliothek (CSV, JSON, REST-APIs), gut lesbar</td></tr>
        <tr><td>Grenzen</td><td>unter Linux weniger verbreitet</td><td>umständlich bei komplexen Datenstrukturen</td><td>muss auf Windows meist erst installiert werden</td></tr>
        </tbody></table>
        <p>Alle drei sind <strong>interpretierte</strong> Sprachen: Du änderst ein Skript und startest es sofort, ohne es vorher zu kompilieren. Kompilierte Sprachen wie C, C++, Go oder Rust laufen schneller und brauchen weniger Speicher, eignen sich aber eher für Programme als für kleine Admin-Aufgaben. Entscheidend sind außerdem das <strong>Know-how im Team</strong> und die <strong>Wartbarkeit</strong>.</p>
        <h5>Automatisierung sicher betreiben</h5>
        <ul>
          <li><strong>Protokollieren</strong>: Datum, Aktion und Ergebnis in eine Logdatei, ins Syslog oder ins Ereignisprotokoll schreiben.</li>
          <li><strong>Exit-Codes auswerten</strong>: 0 = Erfolg. Bei Fehlern einen Wert ungleich 0 zurückgeben, damit Aufgabenplanung, cron oder das Monitoring reagieren (z. B. Mail an die Administration).</li>
          <li><strong>Rechte begrenzen</strong>: Skripte unter einem eigenen Dienstkonto mit minimalen Rechten ausführen. Keine Passwörter im Klartext ins Skript schreiben – besser verwaltete Dienstkonten (gMSA) oder SSH-Schlüssel nutzen.</li>
          <li><strong>Massenfehler vermeiden</strong>: Ein fehlerhaftes Skript trifft alle Objekte auf einmal. Deshalb vorher sichern, testen und zuerst eine kleine Pilotgruppe bearbeiten.</li>
          <li><strong>Versionieren und dokumentieren</strong>: Skripte mit Kommentaren versehen und in Git verwalten (Commit, Änderungshistorie, Rückkehr zu einer alten Version).</li>
        </ul>
        <div class="callout merke"><strong>Merke:</strong> Erst den Code mit einer Trace-Tabelle durchgehen, dann den Fehler einordnen: startet nicht → Syntaxfehler, bricht ab → Laufzeitfehler, falsches Ergebnis → Logikfehler.</div>
        <div class="callout achtung"><strong>Achtung:</strong> Ein Schreibtischtest nur mit „bequemen“ Werten findet Grenzfehler nicht. Prüfe immer auch den Grenzwert selbst (z. B. genau 90 %), eine leere Liste und das erste und letzte Element.</div>
        <div class="callout pruefung"><strong>In der Prüfung:</strong> Die Ausgabe eines Skripts für gegebene Werte <em>bestimmen</em>, Fehler <em>finden</em>, als Syntax-, Laufzeit- oder Logikfehler <em>einordnen</em> und <em>korrigieren</em>, einen Ablauf in Pseudocode <em>formulieren</em>, Testfälle mit Grenzwerten <em>angeben</em> und die Wahl der Skriptsprache <em>begründen</em>.</div>`
    },
  ],
  exercises: [
    {
      id: "e-dhcp-bereich",
      topic: "dhcp-dns",
      title: "DHCP-Bereich für ein Vereinsnetz planen",
      level: 1,
      exam: ["AP1", "AP2"],
      task: `<p>Die <strong>Nordlicht IT GmbH</strong> in Heide richtet für den Seglerverein Meldorfer Bucht e. V. ein Netz ein: <code>192.168.50.0/24</code>, Router <code>192.168.50.1</code>, DNS-Server <code>192.168.50.11</code>, DNS-Domäne <code>seglerverein.internal</code>. Der DHCP-Bereich soll von <code>192.168.50.100</code> bis <code>192.168.50.149</code> reichen.</p>
        <p>a) Wie viele Adressen umfasst der Bereich?</p>
        <p>b) Die Adressen <code>.100</code> bis <code>.104</code> werden ausgeschlossen. Zusätzlich legst du im übrigen Bereich 6 Reservierungen für Drucker und Access Points an. Wie viele Adressen bleiben für beliebige Clients?</p>
        <p>c) Nenne die drei DHCP-Optionen (Nummer und Wert), die du mindestens setzen musst.</p>
        <p>d) Die Leasedauer beträgt 8 Stunden. Wann versucht ein Client erstmals, seine Lease zu verlängern, und wann fragt er alle DHCP-Server per Broadcast?</p>
        <p>e) Erkläre den Unterschied zwischen einer Reservierung und einer fest am Gerät eingetragenen IP-Adresse.</p>`,
      hints: ["Anzahl = letzte − erste + 1", "T1 = 50 %, T2 = 87,5 % der Leasedauer"],
      solution: `<p>a) 149 − 100 + 1 = <strong>50 Adressen</strong>.</p>
        <p>b) Ausschluss .100–.104 = 5 Adressen → 50 − 5 = 45. Die 6 Reservierungen sind fest vergeben → 45 − 6 = <strong>39 Adressen</strong> für beliebige Clients.</p>
        <p>c) Option <strong>003</strong> Router = 192.168.50.1, Option <strong>006</strong> DNS-Server = 192.168.50.11, Option <strong>015</strong> DNS-Domänenname = seglerverein.internal.</p>
        <p>d) T1 = 8 h × 0,5 = <strong>nach 4 Stunden</strong> (Verlängerung direkt beim bekannten Server). T2 = 8 h × 0,875 = <strong>nach 7 Stunden</strong> (Broadcast an alle Server).</p>
        <p>e) Bei einer <strong>Reservierung</strong> ordnet der DHCP-Server der MAC-Adresse des Geräts immer dieselbe IP zu. Das Gerät bleibt auf DHCP eingestellt und erhält Gateway, DNS-Server usw. zentral. Ändert sich z. B. der DNS-Server, muss nur der DHCP-Server angepasst werden. Eine <strong>statische IP</strong> wird am Gerät selbst eingetragen – jede Änderung erfordert Handarbeit am Gerät, und die Adresse muss aus dem DHCP-Bereich ausgeschlossen werden, sonst drohen Adresskonflikte.</p>`
    },
    {
      id: "e-dns-zone",
      topic: "dhcp-dns",
      title: "DNS-Zonen für einen Logistiker anlegen",
      level: 2,
      exam: ["AP2"],
      task: `<p>Die <strong>Küstenwerk Logistik GmbH</strong> in Brunsbüttel betreibt die Domäne <code>kuestenwerk.de</code> im Netz <code>10.20.0.0/24</code>. Es gibt einen Nameserver <code>ns1</code> (10.20.0.11), einen Webserver (10.20.0.12) und einen Mailserver (10.20.0.13). Das Intranet soll zusätzlich unter <code>intranet.kuestenwerk.de</code> erreichbar sein und läuft auf dem Webserver.</p>
        <p>a) Lege die nötigen Einträge der Forward-Lookup-Zone an (Name, Typ, Wert).</p>
        <p>b) Gib den Namen der Reverse-Lookup-Zone und den PTR-Eintrag für den Mailserver an.</p>
        <p>c) Ein Mitarbeiter ruft <code>www.bsi.bund.de</code> auf. Beschreibe, wie der interne DNS-Server die Anfrage auflöst, wenn keine Weiterleitung eingerichtet ist und nichts im Cache liegt.</p>
        <p>d) <code>nslookup www.kuestenwerk.de</code> liefert auf einem Client „Nicht autorisierende Antwort“. Was bedeutet das?</p>`,
      solution: `<p>a) Forward-Zone <code>kuestenwerk.de</code>:</p>
        <table><thead><tr><th>Name</th><th>Typ</th><th>Wert</th></tr></thead><tbody>
        <tr><td>@</td><td>NS</td><td>ns1.kuestenwerk.de.</td></tr>
        <tr><td>ns1</td><td>A</td><td>10.20.0.11</td></tr>
        <tr><td>www</td><td>A</td><td>10.20.0.12</td></tr>
        <tr><td>mail</td><td>A</td><td>10.20.0.13</td></tr>
        <tr><td>@</td><td>MX</td><td>10 mail.kuestenwerk.de.</td></tr>
        <tr><td>intranet</td><td>CNAME</td><td>www.kuestenwerk.de.</td></tr>
        </tbody></table>
        <p>Den SOA-Eintrag legt der DNS-Server beim Anlegen der Zone automatisch an. Alternativ zum CNAME ist ein zweiter A-Record <code>intranet → 10.20.0.12</code> möglich.</p>
        <p>b) Reverse-Zone: <code>0.20.10.in-addr.arpa</code>. PTR-Eintrag: <code>13 IN PTR mail.kuestenwerk.de.</code> (vollständig: 13.0.20.10.in-addr.arpa → mail.kuestenwerk.de).</p>
        <p>c) Der Client stellt eine <strong>rekursive</strong> Anfrage an den internen DNS-Server und erwartet eine fertige Antwort. Der DNS-Server fragt <strong>iterativ</strong>: Zuerst fragt er einen Root-Server, der auf die Nameserver von <code>.de</code> verweist. Diese verweisen auf die Nameserver von <code>bund.de</code> und diese weiter auf die für <code>bsi.bund.de</code> zuständigen Server. Der autoritative Server liefert den A-Record. Der interne DNS-Server gibt die Antwort an den Client weiter und speichert sie für die Dauer der TTL im Cache.</p>
        <p>d) Die Antwort stammt nicht direkt vom für die Zone zuständigen (autoritativen) Server, sondern aus dem Cache eines anderen DNS-Servers. Die Antwort ist trotzdem gültig, könnte aber bis zum Ablauf der TTL veraltet sein.</p>`
    },
    {
      id: "e-dhcp-relay-fehler",
      topic: "dhcp-dns",
      title: "Fehlersuche: Neues VLAN bekommt keine Adressen",
      level: 3,
      exam: ["AP2"],
      task: `<p>Die <strong>Watt &amp; Wind Energie GmbH</strong> in Husum hat ihren DHCP- und DNS-Server <code>SRV-DC01</code> (10.10.10.5) im Server-VLAN 10. Für die neue Werkstatt wurde VLAN 30 mit dem Netz <code>10.10.30.0/24</code> eingerichtet. Der Router routet zwischen den VLANs über Subinterfaces (Werkstatt: <code>G0/0.30</code>, IP 10.10.30.1). Die PCs in der Werkstatt zeigen bei <code>ipconfig</code> die Adresse <code>169.254.23.117</code>.</p>
        <p>a) Erkläre die Ursache des Fehlers. (4 Punkte)</p>
        <p>b) Beschreibe zwei Maßnahmen, mit denen du den Fehler behebst, und gib den nötigen Router-Befehl an. (4 Punkte)</p>
        <p>c) Erläutere, woran der DHCP-Server erkennt, aus welchem Bereich er eine Adresse vergeben muss. (2 Punkte)</p>
        <p>d) Nach der Korrektur erhalten die PCs Adressen. Die Intranet-Seite ist per IP erreichbar, aber nicht über <code>intranet.wattwind.de</code>. <code>ipconfig /all</code> zeigt als DNS-Server <code>8.8.8.8</code>. Erkläre den Fehler und die Lösung. (4 Punkte)</p>
        <p>e) Nenne die Befehle, mit denen du am Client die Lösung überprüfst. (2 Punkte)</p>`,
      hints: ["Wohin gelangt ein Broadcast?", "Relay-Agent", "Welche DHCP-Option liefert den DNS-Server?"],
      solution: `<p>a) Die Adresse aus 169.254.0.0/16 ist eine <strong>APIPA</strong>-Adresse: Der Client hat keine Antwort von einem DHCP-Server erhalten. Der DHCP-Discover ist ein <strong>Broadcast</strong>, und Router leiten Broadcasts nicht in andere Netze weiter. Der DHCP-Server im VLAN 10 erhält die Anfrage aus VLAN 30 deshalb nie.</p>
        <p>b) 1. Auf dem Router-Subinterface des VLAN 30 einen <strong>DHCP-Relay-Agent</strong> einrichten, der die Broadcasts als Unicast an den DHCP-Server weiterleitet:</p>
        <pre><code>interface g0/0.30
 ip helper-address 10.10.10.5</code></pre>
        <p>2. Auf dem DHCP-Server einen <strong>Bereich für 10.10.30.0/24</strong> anlegen (z. B. 10.10.30.100–10.10.30.200) mit Option 003 Router = 10.10.30.1 und aktivieren. Ohne passenden Bereich kann der Server trotz Relay keine Adresse vergeben.</p>
        <p>c) Der Relay-Agent trägt die IP-Adresse seiner empfangenden Schnittstelle (10.10.30.1) in das Feld <strong>giaddr</strong> (Gateway IP Address) des DHCP-Pakets ein. Der Server wählt den Bereich, zu dessen Subnetz diese Adresse gehört.</p>
        <p>d) Im neuen Bereich wurde bei Option 006 ein <strong>öffentlicher DNS-Server</strong> eingetragen. Dieser kennt die internen Namen nicht. Außerdem finden Clients mit einem externen DNS-Server keine Domänencontroller (SRV-Records), sodass auch die Domänenanmeldung scheitert. Lösung: Option 006 im Bereich auf den internen DNS-Server <strong>10.10.10.5</strong> ändern. Externe Namen löst dieser über eine Weiterleitung (Forwarder) oder die Root-Server auf.</p>
        <p>e) <code>ipconfig /release</code> und <code>ipconfig /renew</code> (neue Lease mit korrekten Optionen), <code>ipconfig /all</code> (DNS-Server prüfen), <code>ipconfig /flushdns</code> und <code>nslookup intranet.wattwind.de</code> (Namensauflösung testen), <code>ping 10.10.30.1</code> (Gateway).</p>`
    },
    {
      id: "e-mailserver",
      topic: "serverdienste",
      title: "Mailserver für eine Agentur planen",
      level: 2,
      exam: ["AP2"],
      task: `<p>Die <strong>Möwe Medien KG</strong> in Meldorf (15 Mitarbeitende, alle mit Notebook und Smartphone) betreibt künftig einen eigenen Mailserver für die Domain <code>moewe-medien.de</code>. Eingesetzt werden Postfix, Dovecot und Outlook bzw. die Mail-App auf dem Smartphone.</p>
        <p>a) Ordne Postfix, Dovecot und Outlook den Rollen MTA, MDA und MUA zu und beschreibe jeweils die Aufgabe.</p>
        <p>b) Nenne Protokoll und Port für: (1) Versand vom Notebook an den eigenen Server, (2) Übertragung an den Mailserver eines Kunden, (3) Abruf der Mails auf dem Smartphone – jeweils verschlüsselt.</p>
        <p>c) Welche DNS-Einträge sind für den Empfang und für die Zustellbarkeit der Mails nötig? Nenne mindestens vier.</p>
        <p>d) Empfiehl POP3 oder IMAP und begründe.</p>`,
      solution: `<p>a) <strong>Outlook = MUA</strong> (Mail User Agent): Programm des Benutzers zum Schreiben, Lesen und Verwalten von Mails. <strong>Postfix = MTA</strong> (Mail Transfer Agent): nimmt Mails per SMTP an und transportiert sie zum zuständigen Mailserver der Empfängerdomain. <strong>Dovecot = MDA</strong> (Mail Delivery Agent) bzw. IMAP/POP3-Server: legt die Mails im Postfach ab und stellt sie zum Abruf bereit.</p>
        <p>b) (1) SMTP-Submission über <strong>Port 587</strong> mit STARTTLS (alternativ 465 mit direktem TLS), mit Anmeldung. (2) <strong>SMTP über Port 25</strong> von Server zu Server (verschlüsselt per STARTTLS, wenn die Gegenseite es unterstützt). (3) <strong>IMAP über Port 993</strong> (IMAPS).</p>
        <p>c) <strong>MX-Record</strong> für <code>moewe-medien.de</code> → <code>mail.moewe-medien.de</code> (Priorität z. B. 10). <strong>A-/AAAA-Record</strong> für <code>mail.moewe-medien.de</code> → öffentliche IP. <strong>PTR-Record</strong> für die öffentliche IP → <code>mail.moewe-medien.de</code> (beim Provider eintragen lassen, viele Empfänger prüfen das). <strong>TXT-Record SPF</strong>, z. B. <code>v=spf1 mx -all</code>. <strong>TXT-Record DKIM</strong> mit dem öffentlichen Schlüssel. <strong>TXT-Record DMARC</strong> unter <code>_dmarc.moewe-medien.de</code>.</p>
        <p>d) <strong>IMAP</strong>, weil alle Mitarbeitenden mehrere Geräte nutzen. Bei IMAP bleiben die Mails auf dem Server, Ordner und Gelesen-Status werden auf Notebook und Smartphone synchronisiert. Außerdem werden die Mails zentral gesichert. POP3 lädt die Mails herunter und löscht sie meist auf dem Server – auf dem zweiten Gerät würden sie dann fehlen.</p>`
    },
    {
      id: "e-web-ntp",
      topic: "serverdienste",
      title: "Intranet-Webserver bereitstellen und Zeitprobleme lösen",
      level: 2,
      exam: ["AP2"],
      task: `<p>Die <strong>Holstein Care gGmbH</strong> in Itzehoe möchte ihr Intranet auf einer Linux-VM (Debian) betreiben. Vor die neue Dienstplan-Anwendung (läuft intern auf Port 3000) soll ein Server geschaltet werden, der die Anfragen per HTTPS entgegennimmt und weiterleitet.</p>
        <p>a) Wähle zwischen Apache, nginx und IIS und begründe deine Wahl.</p>
        <p>b) Beschreibe vier Schritte, damit das Intranet ausschließlich verschlüsselt erreichbar ist.</p>
        <p>c) Einige Wochen später können sich Benutzer mit ihrer Domänenanmeldung (Kerberos) nicht mehr an der Anwendung anmelden. Die Uhr der VM geht 7 Minuten nach. Erkläre den Zusammenhang und die Lösung.</p>
        <p>d) Was bedeutet es, wenn ein Zeitserver als „Stratum 2“ angezeigt wird?</p>`,
      solution: `<p>a) <strong>nginx</strong>: Er läuft auf Linux, ist ressourcenschonend und eignet sich besonders als <strong>Reverse Proxy</strong>, der HTTPS-Anfragen annimmt, die TLS-Verschlüsselung übernimmt und an die Anwendung auf Port 3000 weiterreicht. Apache wäre auch möglich (mit Proxy-Modul), IIS scheidet aus, weil er nur unter Windows läuft.</p>
        <p>b) 1. Ein <strong>Zertifikat</strong> für den Servernamen beschaffen (interne CA oder Let's Encrypt) und samt privatem Schlüssel einbinden. 2. Den Server auf <strong>Port 443</strong> mit TLS lauschen lassen und nur <strong>TLS 1.2 und 1.3</strong> zulassen. 3. Anfragen auf Port 80 per <strong>301-Weiterleitung</strong> auf HTTPS umleiten (optional HSTS). 4. In der <strong>Firewall</strong> nur 443 (und ggf. 80 für die Weiterleitung) freigeben – Port 3000 bleibt von außen gesperrt. Anschließend mit dem Browser und <code>curl -I https://intranet…</code> testen.</p>
        <p>c) Kerberos-Tickets enthalten Zeitstempel. Weicht die Uhr um mehr als die erlaubte Toleranz (Standard <strong>5 Minuten</strong>) von der des Domänencontrollers ab, werden die Tickets als ungültig abgelehnt – die Anmeldung scheitert. Lösung: Die VM per <strong>NTP</strong> synchronisieren, z. B. mit chrony und den Domänencontrollern als Zeitquelle (in <code>/etc/chrony/chrony.conf</code> eintragen, Dienst neu starten, mit <code>chronyc sources</code> prüfen). Außerdem sollte die Zeitsynchronisation des Hypervisors mit der des Gastes abgestimmt sein.</p>
        <p>d) Der Server bezieht seine Zeit von einem Stratum-1-Server, der direkt an einer Referenzuhr (Stratum 0, z. B. Atomuhr oder GPS) hängt. Er ist also zwei Ebenen von der Referenzuhr entfernt.</p>`
    },
    {
      id: "e-lizenzen",
      topic: "betriebssysteme",
      title: "Windows-Server-Lizenzen und CALs berechnen",
      level: 2,
      exam: ["AP2"],
      task: `<p>Die <strong>Dithmarscher Kohl AG</strong> in Wesselburen virtualisiert ihre Server mit Hyper-V. Host 1 hat 2 Prozessoren mit je 12 Kernen und soll 6 Windows-Server-VMs tragen. Host 2 hat 1 Prozessor mit 8 Kernen und trägt 2 VMs. Preise (fiktiv): Standard 140 € je 2-Kern-Paket, Datacenter 800 € je 2-Kern-Paket.</p>
        <p>a) Berechne für Host 2 die Anzahl der Kernlizenzen und die Kosten mit der Standard-Edition.</p>
        <p>b) Berechne für Host 1 die Kosten mit Standard und mit Datacenter und empfiehl eine Edition.</p>
        <p>c) Auf die Server greifen zu: 45 Büroangestellte mit je einem festen PC, 12 Außendienstler mit Notebook und Tablet sowie 30 Produktionsmitarbeitende in drei Schichten, die sich 10 Terminals teilen. Ermittle die günstigste Anzahl an CALs.</p>
        <p>d) Nenne zwei Vorteile einer Installation als Server Core.</p>`,
      solution: `<p>a) Host 2 hat 1 × 8 = 8 Kerne. Mindestens 8 pro Prozessor sind erfüllt, aber pro Server sind mindestens <strong>16 Kernlizenzen</strong> nötig → 16 ÷ 2 = 8 Pakete × 140 € = <strong>1.120 €</strong>. Das deckt 2 VMs ab.</p>
        <p>b) Host 1 hat 2 × 12 = 24 Kerne.<br>
        Standard: je 2 VMs müssen alle 24 Kerne lizenziert werden. 6 VMs → 6 ÷ 2 = 3 × 24 = 72 Kernlizenzen = 36 Pakete × 140 € = <strong>5.040 €</strong>.<br>
        Datacenter: 24 Kernlizenzen = 12 Pakete × 800 € = <strong>9.600 €</strong> für beliebig viele VMs.<br>
        Empfehlung: <strong>Standard</strong>, weil 4.560 € günstiger. Break-even: Ein VM-Paar kostet mit Standard 12 Pakete × 140 € = 1.680 €, Datacenter kostet 9.600 € → 9.600 ÷ 1.680 ≈ 5,7 VM-Paare. Ab 6 VM-Paaren (6 × 1.680 € = 10.080 € &gt; 9.600 €), also ab <strong>11 VMs</strong>, ist Datacenter günstiger – oder früher, wenn schnelles Wachstum geplant ist.</p>
        <p>c) Büro: 45 Personen = 45 Geräte → 45 CALs (User oder Device gleich). Außendienst: 12 Personen mit 24 Geräten → <strong>12 User-CALs</strong>. Produktion: 30 Personen an 10 Geräten → <strong>10 Device-CALs</strong>. Gesamt: 45 + 12 + 10 = <strong>67 CALs</strong> (User- und Device-CALs dürfen gemischt werden).</p>
        <p>d) Server Core hat keine grafische Oberfläche. Dadurch ist die <strong>Angriffsfläche kleiner</strong>, es fallen <strong>weniger Updates und Neustarts</strong> an und er braucht <strong>weniger RAM und Speicherplatz</strong>. Verwaltet wird er per PowerShell, Windows Admin Center oder RSAT.</p>`
    },
    {
      id: "e-dateisysteme",
      topic: "betriebssysteme",
      title: "Dateisysteme und Betriebssystembegriffe zuordnen",
      level: 1,
      exam: ["AP1", "AP2"],
      task: `<p>Du unterstützt die Administratorin der <strong>Nordlicht IT GmbH</strong> in Heide.</p>
        <p>a) Wähle für jede Situation ein passendes Dateisystem und begründe kurz:</p>
        <ol>
          <li>USB-Stick (128 GB), mit dem 6-GiB-Videodateien zwischen Windows-PCs und Macs ausgetauscht werden</li>
          <li>Datenlaufwerk eines Windows-Dateiservers mit Abteilungsordnern und Kontingenten</li>
          <li>Systempartition eines Debian-Webservers</li>
          <li>Datenlaufwerk eines RHEL-Datenbankservers mit sehr großen Dateien</li>
          <li>EFI-Systempartition eines neuen Servers</li>
        </ol>
        <p>b) Erkläre, wozu ein Journal im Dateisystem dient.</p>
        <p>c) Grenze die Begriffe Prozess, Thread und Dienst voneinander ab.</p>`,
      solution: `<p>a) 1. <strong>exFAT</strong>: FAT32 erlaubt nur Dateien bis 4 GiB − 1 Byte, NTFS kann macOS ohne Zusatzsoftware nur lesen. exFAT wird von beiden Systemen gelesen und geschrieben und erlaubt große Dateien.<br>
        2. <strong>NTFS</strong>: unterstützt Zugriffsrechte (ACLs), Kontingente, Schattenkopien und ein Journal.<br>
        3. <strong>ext4</strong>: Standard-Dateisystem von Debian, bewährt, mit Journal und Linux-Rechten.<br>
        4. <strong>XFS</strong>: Standard bei RHEL und besonders leistungsfähig bei großen Dateien.<br>
        5. <strong>FAT32</strong>: Die UEFI-Firmware erwartet für die EFI-Systempartition ein FAT-Dateisystem.</p>
        <p>b) Das Journal protokolliert geplante Änderungen, bevor sie geschrieben werden. Stürzt das System mitten im Schreiben ab (z. B. Stromausfall), kann das Dateisystem die unvollständigen Vorgänge anhand des Journals abschließen oder zurückrollen. Es ist dadurch schnell wieder konsistent, ohne dass der ganze Datenträger geprüft werden muss.</p>
        <p>c) Ein <strong>Prozess</strong> ist ein laufendes Programm mit eigenem Adressraum und eigener Prozess-ID. Ein <strong>Thread</strong> ist ein Ausführungsstrang innerhalb eines Prozesses. Mehrere Threads eines Prozesses teilen sich dessen Speicher und können parallel arbeiten. Ein <strong>Dienst</strong> (Linux: Daemon) ist ein Prozess, der im Hintergrund ohne angemeldeten Benutzer läuft und meist beim Systemstart automatisch gestartet wird, z. B. der DNS-Server.</p>`
    },
    {
      id: "e-ntfs-effektiv",
      topic: "ntfs-rechte",
      title: "Effektive Rechte auf einem Projektordner ermitteln",
      level: 3,
      exam: ["AP2"],
      task: `<p>Auf dem Dateiserver <code>FS01</code> der <strong>Nordlicht IT GmbH</strong> ist der Ordner <code>D:\\Projekte</code> als <code>\\\\FS01\\Projekte</code> freigegeben.</p>
        <p><strong>Freigaberechte:</strong> Authentifizierte Benutzer = Ändern · G_Praktikanten = Lesen</p>
        <p><strong>NTFS-Rechte auf D:\\Projekte</strong> (werden vererbt): DL_Projekte_Ändern = Ändern (Mitglieder: G_Entwicklung, G_Projektleitung) · DL_Projekte_Lesen = Lesen, Ausführen (Mitglieder: G_Vertrieb, G_Praktikanten)</p>
        <p><strong>Zusätzlich auf D:\\Projekte\\Vertraulich</strong> (explizit): DL_Vertraulich_Sperre = Verweigern Vollzugriff (Mitglied: G_Praktikanten)</p>
        <p>a) Ermittle die effektiven Rechte beim Zugriff über das Netzwerk auf <code>\\\\FS01\\Projekte</code> für: Jana (G_Entwicklung), Tim (G_Vertrieb), Lea (G_Entwicklung und G_Praktikanten). Gib jeweils Freigabe-, NTFS- und effektives Recht an. (6 Punkte)</p>
        <p>b) Welche Rechte hat Lea im Unterordner <code>Vertraulich</code>? Begründe. (2 Punkte)</p>
        <p>c) Olaf (nur G_Vertrieb) meldet sich per RDP direkt an FS01 an und öffnet <code>D:\\Projekte</code>. Welche Rechte hat er? (2 Punkte)</p>
        <p>d) Jana kopiert eine Datei aus <code>Vertraulich</code> nach <code>D:\\Projekte\\Allgemein</code>. Welche Rechte hat die Kopie? Was wäre beim Verschieben innerhalb von Laufwerk D: anders? (3 Punkte)</p>
        <p>e) Warum vergibt man die NTFS-Rechte an domänenlokale Gruppen statt direkt an Benutzer? (2 Punkte)</p>`,
      hints: ["Pro Ebene erst addieren, dann das Minimum beider Ebenen nehmen.", "Verweigern hat Vorrang.", "Lokal zählt nur NTFS."],
      solution: `<p>a)</p>
        <table><thead><tr><th>Person</th><th>Freigabe (Σ)</th><th>NTFS (Σ)</th><th>effektiv (Minimum)</th></tr></thead><tbody>
        <tr><td>Jana</td><td>Ändern (Authentifizierte Benutzer)</td><td>Ändern</td><td><strong>Ändern</strong></td></tr>
        <tr><td>Tim</td><td>Ändern</td><td>Lesen, Ausführen</td><td><strong>Lesen, Ausführen</strong></td></tr>
        <tr><td>Lea</td><td>Ändern + Lesen = Ändern</td><td>Ändern + Lesen = Ändern</td><td><strong>Ändern</strong></td></tr>
        </tbody></table>
        <p>Bei Lea addieren sich die Rechte beider Gruppen. „Lesen“ für die Praktikanten ist eine Erlaubnis und keine Verweigerung – es schränkt das „Ändern“ aus der anderen Gruppe nicht ein.</p>
        <p>b) <strong>Kein Zugriff.</strong> Lea erbt zwar „Ändern“ aus <code>D:\\Projekte</code>, ist über G_Praktikanten aber Mitglied von DL_Vertraulich_Sperre. Ein explizites Verweigern hat Vorrang vor jeder Erlaubnis – egal, was die Freigabe erlaubt.</p>
        <p>c) Bei einer lokalen Anmeldung wirken die Freigaberechte nicht, nur NTFS. Olaf hat über G_Vertrieb → DL_Projekte_Lesen das Recht <strong>Lesen, Ausführen</strong>.</p>
        <p>d) Eine <strong>Kopie</strong> ist ein neues Objekt und <strong>erbt die Rechte des Zielordners</strong> <code>Allgemein</code>. Die Sperre für Praktikanten gilt für die Kopie also nicht mehr – ein Risiko für vertrauliche Daten. Beim <strong>Verschieben innerhalb desselben Volumes</strong> behält die Datei ihre bisherigen Rechte. Beim Verschieben auf ein anderes Volume verhält sie sich wie eine Kopie.</p>
        <p>e) Nach AGDLP stehen Benutzer in globalen Gruppen (Rolle/Abteilung), diese in domänenlokalen Gruppen (Ressource + Recht), und nur diese erhalten Rechte. Bei Personalwechseln änderst du nur Gruppenmitgliedschaften und nicht die ACLs vieler Ordner. Das ist übersichtlicher, weniger fehleranfällig und gut dokumentierbar, und die Rechte lassen sich leichter prüfen.</p>`
    },
    {
      id: "e-ad-begriffe",
      topic: "active-directory",
      title: "Active-Directory-Begriffe zuordnen",
      level: 1,
      exam: ["AP2"],
      task: `<p>Die <strong>Nordlicht IT GmbH</strong> betreibt die Domäne <code>nordlicht.de</code> mit der Unterdomäne <code>husum.nordlicht.de</code>.</p>
        <p>a) Bilden die beiden Domänen einen Baum, eine Gesamtstruktur oder beides? Begründe.</p>
        <p>b) Erkläre den Unterschied zwischen einer Organisationseinheit (OU) und einer Sicherheitsgruppe.</p>
        <p>c) Zerlege den Namen <code>CN=Jana Petersen,OU=Technik,OU=Heide,DC=nordlicht,DC=de</code> in seine Bestandteile.</p>
        <p>d) Warum sollte eine Domäne mindestens zwei Domänencontroller haben?</p>
        <p>e) Welche Gruppenart und welchen Gruppenbereich wählst du für „alle Mitarbeitenden der Technik“, die du anschließend für Rechte verwenden willst?</p>`,
      solution: `<p>a) <strong>Beides.</strong> Die Domänen haben einen zusammenhängenden Namensraum (<code>husum.nordlicht.de</code> liegt unterhalb von <code>nordlicht.de</code>) und bilden damit einen <strong>Baum</strong>. Jeder Baum gehört zu einer <strong>Gesamtstruktur</strong> – hier besteht die Gesamtstruktur aus genau diesem einen Baum.</p>
        <p>b) Eine <strong>OU</strong> ist ein Container zur Strukturierung von Objekten (Benutzer, Computer, Gruppen). An ihr verknüpfst du Gruppenrichtlinien und delegierst Verwaltungsrechte. Rechte auf Dateien kannst du einer OU nicht geben. Eine <strong>Sicherheitsgruppe</strong> fasst Konten zusammen und hat eine SID. Sie kann in Zugriffslisten (ACLs) berechtigt werden.</p>
        <p>c) <code>CN=Jana Petersen</code>: Common Name des Objekts (Benutzer). <code>OU=Technik</code>: OU Technik, die in der <code>OU=Heide</code> liegt. <code>DC=nordlicht,DC=de</code>: Domänenbestandteile der Domäne <code>nordlicht.de</code>. Gelesen wird von rechts (Domäne) nach links (Objekt).</p>
        <p>d) Fällt der einzige DC aus, können sich Benutzer nicht mehr anmelden, Gruppenrichtlinien und oft auch DNS funktionieren nicht mehr. Mit zwei DCs repliziert die Datenbank (Multi-Master), der zweite übernimmt Anmeldungen und DNS, und die Datenbank ist doppelt vorhanden.</p>
        <p>e) Eine <strong>Sicherheitsgruppe</strong> mit dem Bereich <strong>global</strong> (z. B. <code>G_Technik</code>), denn globale Gruppen fassen Konten der eigenen Domäne nach Rolle zusammen (A → G in AGDLP). Rechte erhält anschließend eine domänenlokale Gruppe, in die <code>G_Technik</code> aufgenommen wird.</p>`
    },
    {
      id: "e-agdlp-gpo",
      topic: "active-directory",
      title: "Berechtigungskonzept nach AGDLP und GPO-Auswertung",
      level: 3,
      exam: ["AP2"],
      task: `<p>Die <strong>Nordlicht IT GmbH</strong> (Domäne <code>nordlicht.de</code>) hat die OU-Struktur <code>Heide</code> mit den Unter-OUs <code>Vertrieb</code> und <code>Technik</code> sowie die OU <code>Husum</code> mit der Unter-OU <code>Vertrieb</code>.</p>
        <p>a) Auf den Ordner <code>D:\\Daten\\Angebote</code> sollen die Vertriebe beider Standorte ändernd und die Technik lesend zugreifen. Entwirf das Konzept nach AGDLP mit Gruppennamen, Gruppenbereichen und Mitgliedschaften. (6 Punkte)</p>
        <p>b) Folgende GPOs sind verknüpft:</p>
        <table><thead><tr><th>GPO</th><th>verknüpft mit</th><th>Einstellungen</th></tr></thead><tbody>
        <tr><td>Basis</td><td>Domäne</td><td>Bildschirmsperre nach 15 min</td></tr>
        <tr><td>Sicherheit</td><td>Domäne, <strong>erzwungen</strong></td><td>USB-Speicher gesperrt</td></tr>
        <tr><td>Heide-Standard</td><td>OU Heide</td><td>Bildschirmsperre nach 10 min, Hintergrundbild „Heide“</td></tr>
        <tr><td>Technik</td><td>OU Heide/Technik</td><td>Bildschirmsperre nach 30 min</td></tr>
        </tbody></table>
        <p>Die OU <code>Technik</code> hat die <strong>Vererbung deaktiviert</strong>. Bestimme für einen Benutzer aus Heide/Vertrieb und einen aus Heide/Technik die wirksamen Einstellungen und begründe. (6 Punkte)</p>
        <p>c) Mit welchen Befehlen prüft ein Benutzer, welche GPOs wirken, und wie erzwingt er eine sofortige Aktualisierung? (2 Punkte)</p>
        <p>d) Ein neuer Techniker wurde versehentlich im Standardcontainer <code>Users</code> angelegt. Warum wirkt die GPO „Technik“ nicht für ihn? (2 Punkte)</p>`,
      solution: `<p>a) <strong>A</strong>: Benutzerkonten der Mitarbeitenden.<br>
        <strong>G</strong> (global, nach Abteilung): <code>G_Vertrieb_Heide</code>, <code>G_Vertrieb_Husum</code>, <code>G_Technik_Heide</code>.<br>
        <strong>DL</strong> (domänenlokal, nach Ressource und Recht): <code>DL_Angebote_Ändern</code> mit den Mitgliedern G_Vertrieb_Heide und G_Vertrieb_Husum. <code>DL_Angebote_Lesen</code> mit dem Mitglied G_Technik_Heide.<br>
        <strong>P</strong>: NTFS-Rechte auf <code>D:\\Daten\\Angebote</code>: DL_Angebote_Ändern = Ändern, DL_Angebote_Lesen = Lesen, Ausführen. Die Freigabe erhält z. B. „Authentifizierte Benutzer = Ändern“, gesteuert wird über NTFS.</p>
        <p>b) Reihenfolge LSDOU: Domäne → OU Heide → Unter-OU. Die zuletzt angewandte Einstellung gewinnt.<br>
        <strong>Heide/Vertrieb:</strong> Basis (15 min) wird von Heide-Standard (10 min) überschrieben → <strong>Bildschirmsperre 10 min</strong>, <strong>Hintergrundbild „Heide“</strong>, <strong>USB gesperrt</strong> (Sicherheit).<br>
        <strong>Heide/Technik:</strong> Die deaktivierte Vererbung blockiert Basis und Heide-Standard. Von den nicht erzwungenen GPOs wirkt nur „Technik“ → <strong>Bildschirmsperre 30 min</strong>, <strong>kein Hintergrundbild „Heide“</strong>. Die GPO „Sicherheit“ ist erzwungen und wirkt trotz blockierter Vererbung → <strong>USB gesperrt</strong>.</p>
        <p>c) <code>gpresult /r</code> zeigt die angewandten GPOs für Computer und Benutzer (ausführlich als Bericht mit <code>gpresult /h bericht.html</code>). <code>gpupdate /force</code> wendet alle Richtlinien sofort neu an.</p>
        <p>d) <code>Users</code> ist ein Standard<strong>container</strong> und keine OU. Mit Containern lassen sich keine GPOs verknüpfen, und das Konto liegt außerhalb der OU Heide/Technik. Für ihn wirken nur die Domänen-GPOs. Lösung: Konto in die OU <code>Heide/Technik</code> verschieben.</p>`
    },
    {
      id: "e-linux-rechte",
      topic: "linux-rechte",
      title: "Linux-Rechte lesen und setzen",
      level: 2,
      exam: ["AP2"],
      task: `<p>Auf dem Linux-Server der <strong>Küstenwerk Logistik GmbH</strong> sollst du Rechte prüfen und setzen.</p>
        <p>a) Rechne um: <code>rwxr-x---</code>, <code>rw-rw-r--</code> in oktal sowie <code>640</code> und <code>755</code> in symbolische Schreibweise.</p>
        <p>b) Erkläre die Ausgabe <code>-rwsr-xr-x 1 root root 59976 … /usr/bin/passwd</code>. Warum ist das Sonderrecht hier nötig?</p>
        <p>c) Das Skript <code>/opt/skripte/sicherung.sh</code> soll root gehören und der Gruppe <code>admins</code> zugeordnet sein. Der Besitzer darf alles, die Gruppe lesen und ausführen, andere nichts. Gib die Befehle an (Rechte oktal und symbolisch).</p>
        <p>d) Welche Rechte erhalten neue Dateien und Verzeichnisse bei <code>umask 027</code>?</p>
        <p>e) Im Ordner <code>/srv/marketing</code> (Gruppe <code>marketing</code>) sollen alle Gruppenmitglieder Dateien anlegen können. Neue Dateien sollen automatisch der Gruppe gehören, jede Person soll nur ihre eigenen Dateien löschen dürfen, andere haben keinen Zugriff. Gib den <code>chmod</code>-Befehl oktal an und die Anzeige in <code>ls -ld</code>.</p>`,
      solution: `<p>a) <code>rwxr-x---</code> = 4+2+1 | 4+0+1 | 0 = <strong>750</strong>. <code>rw-rw-r--</code> = 6 | 6 | 4 = <strong>664</strong>. <code>640</code> = <strong>rw-r-----</strong>. <code>755</code> = <strong>rwxr-xr-x</strong>.</p>
        <p>b) Es ist eine Datei (<code>-</code>), Besitzer root darf lesen, schreiben und ausführen, das <code>s</code> an der x-Stelle des Besitzers zeigt das <strong>SUID-Bit</strong> (oktal 4755). Gruppe und andere dürfen lesen und ausführen. Durch SUID läuft <code>passwd</code> mit den Rechten des Besitzers root. Das ist nötig, weil normale Benutzer ihr Passwort ändern sollen, der Hash aber in <code>/etc/shadow</code> steht, die nur root schreiben darf.</p>
        <p>c)</p>
        <pre><code>chown root:admins /opt/skripte/sicherung.sh
chmod 750 /opt/skripte/sicherung.sh
# symbolisch:
chmod u=rwx,g=rx,o= /opt/skripte/sicherung.sh</code></pre>
        <p>d) Die umask 027 entfernt bei der Gruppe das w-Recht und bei anderen alle Rechte. Neue Dateien: 666 → <strong>640 (rw-r-----)</strong>. Neue Verzeichnisse: 777 → <strong>750 (rwxr-x---)</strong>.</p>
        <p>e) Gruppenrechte rwx (7), andere nichts (0), dazu <strong>SGID</strong> (2, neue Dateien erhalten die Gruppe des Ordners) und <strong>Sticky Bit</strong> (1, nur Besitzer dürfen ihre Dateien löschen) → Sonderrechte 2 + 1 = 3:</p>
        <pre><code>chown root:marketing /srv/marketing
chmod 3770 /srv/marketing
ls -ld /srv/marketing  →  drwxrws--T … root marketing … /srv/marketing</code></pre>
        <p>Das große <code>T</code> erscheint, weil das Sticky Bit gesetzt ist, andere aber kein x-Recht haben.</p>`
    },
    {
      id: "e-linux-befehle",
      topic: "linux",
      title: "Einen Debian-Webserver per Shell verwalten",
      level: 2,
      exam: ["AP2"],
      task: `<p>Du administrierst den Debian-Server <code>srv-web01</code> der <strong>Möwe Medien KG</strong> per SSH. Gib für jede Aufgabe den passenden Befehl an.</p>
        <p>a) Paketlisten aktualisieren und anschließend alle installierten Pakete aktualisieren.</p>
        <p>b) Den Webserver nginx installieren, sofort starten und beim Booten automatisch starten.</p>
        <p>c) Prüfen, ob ein Prozess auf Port 80 lauscht.</p>
        <p>d) Die letzten 50 Logeinträge des Dienstes nginx anzeigen.</p>
        <p>e) Alle Dateien mit der Endung <code>.log</code> unter <code>/var/log</code> finden, die älter als 30 Tage sind.</p>
        <p>f) Den Benutzer <code>ben</code> mit Heimatverzeichnis und Bash anlegen, ihm ein Passwort geben und ihn in die Gruppe <code>sudo</code> aufnehmen.</p>
        <p>g) Den Ordner <code>/srv/daten</code> als komprimiertes Archiv nach <code>/backup/daten.tar.gz</code> sichern.</p>
        <p>h) Nenne zwei Einstellungen in <code>/etc/ssh/sshd_config</code>, die den Server sicherer machen, und erkläre sie.</p>
        <p>i) In welchen Dateien stehen die Benutzerkonten und die Passwort-Hashes?</p>`,
      solution: `<pre><code>a) sudo apt update &amp;&amp; sudo apt upgrade
b) sudo apt install nginx
   sudo systemctl enable --now nginx
c) sudo ss -tulpn | grep ':80'
d) sudo journalctl -u nginx -n 50
e) find /var/log -name "*.log" -mtime +30
f) sudo useradd -m -s /bin/bash ben
   sudo passwd ben
   sudo usermod -aG sudo ben
g) sudo tar -czf /backup/daten.tar.gz /srv/daten</code></pre>
        <p>Bei a) sorgt <code>&amp;&amp;</code> dafür, dass <code>apt upgrade</code> nur läuft, wenn <code>apt update</code> erfolgreich war.</p>
        <p>h) <code>PermitRootLogin no</code>: root darf sich nicht direkt per SSH anmelden. Angreifer müssen zusätzlich einen Benutzernamen erraten, und Admin-Aktionen laufen nachvollziehbar über <code>sudo</code>. <code>PasswordAuthentication no</code>: Anmeldung nur noch mit SSH-Schlüssel, damit laufen Passwort-Rateangriffe ins Leere. (Weitere Möglichkeiten: <code>AllowUsers</code>/<code>AllowGroups</code> und Fail2ban.) Danach mit <code>sudo systemctl reload ssh</code> übernehmen, vorher unbedingt die Schlüsselanmeldung testen.</p>
        <p>i) Benutzerkonten: <code>/etc/passwd</code> (für alle lesbar). Passwort-Hashes: <code>/etc/shadow</code> (nur für root lesbar). Gruppen: <code>/etc/group</code>.</p>`
    },
    {
      id: "e-virtualisierung",
      topic: "virtualisierung",
      title: "Serverkonsolidierung mit Virtualisierungs-Cluster",
      level: 3,
      exam: ["AP2"],
      task: `<p>Die <strong>Holstein Care gGmbH</strong> in Itzehoe betreibt 14 ältere physische Server und will sie virtualisieren. Geplant sind 10 VMs mit je 8 GiB RAM und 2 vCPUs sowie 4 VMs mit je 32 GiB RAM und 8 vCPUs. Für den Hypervisor werden 10 % RAM zusätzlich eingeplant. Die neuen Hosts haben je 128 GiB RAM.</p>
        <p>a) Welchen Hypervisor-Typ empfiehlst du? Begründe und nenne zwei Produkte. (3 Punkte)</p>
        <p>b) Berechne den RAM-Bedarf und die Anzahl der Hosts nach dem N+1-Prinzip. (4 Punkte)</p>
        <p>c) Es soll eine vCPU-Überbuchung von 4 : 1 gelten. Wie viele physische Kerne braucht jeder Host mindestens, damit bei Ausfall eines Hosts alles weiterläuft? (3 Punkte)</p>
        <p>d) Welche Speicherlösung brauchen Live-Migration und HA? Begründe. (3 Punkte)</p>
        <p>e) Ein Kollege möchte statt Backups nur tägliche Snapshots anlegen. Nimm Stellung. (3 Punkte)</p>
        <p>f) Die alten Server verbrauchen im Mittel je 250 W, die drei neuen Hosts je 450 W. Berechne die jährliche Ersparnis bei Dauerbetrieb und 0,30 €/kWh. (4 Punkte)</p>`,
      solution: `<p>a) Einen <strong>Typ-1-Hypervisor</strong> (bare metal), z. B. <strong>Microsoft Hyper-V</strong>, <strong>Proxmox VE</strong> oder VMware ESXi. Er läuft direkt auf der Hardware, hat wenig Overhead, ist für den Dauerbetrieb im Rechenzentrum gebaut und bietet Cluster-Funktionen wie Live-Migration und HA. Ein Typ-2-Hypervisor braucht ein Host-Betriebssystem und eignet sich nur für Tests.</p>
        <p>b) RAM: 10 × 8 GiB + 4 × 32 GiB = 80 + 128 = 208 GiB. Mit 10 % Reserve: 208 × 1,1 = <strong>228,8 GiB</strong>.<br>
        228,8 ÷ 128 = 1,79 → <strong>2 Hosts</strong> nötig. N+1 → <strong>3 Hosts</strong>.<br>
        Probe: Fällt ein Host aus, bleiben 2 × 128 GiB = 256 GiB ≥ 228,8 GiB.</p>
        <p>c) vCPUs: 10 × 2 + 4 × 8 = 20 + 32 = 52 vCPUs. Bei 4 : 1 → 52 ÷ 4 = 13 physische Kerne. Diese müssen auf 2 Hosts passen → 13 ÷ 2 = 6,5 → mindestens <strong>7 Kerne pro Host</strong> (in der Praxis z. B. 8 oder mehr).</p>
        <p>d) Ein <strong>gemeinsamer Speicher</strong> (Shared Storage), z. B. ein <strong>SAN</strong> über iSCSI oder Fibre Channel, auf das alle Hosts zugreifen. Bei der Live-Migration wird dann nur der Arbeitsspeicher der VM übertragen, nicht die virtuellen Festplatten. Bei einem Hostausfall können die anderen Hosts die VMs sofort neu starten, weil die Festplattendateien für sie erreichbar sind. Das SAN selbst muss redundant sein (RAID, zwei Controller, Multipathing).</p>
        <p>e) Das ist <strong>nicht ausreichend</strong>. Ein Snapshot liegt auf demselben Speicher wie die VM – fällt das Speichersystem aus oder verschlüsselt Ransomware den Datastore, sind VM und Snapshot verloren. Snapshots hängen als Delta-Kette von der Basisdatei ab, wachsen stetig und verschlechtern die Leistung. Sie eignen sich nur kurzfristig, z. B. vor einem Update. Nötig ist ein echtes Backup auf ein getrenntes System nach der 3-2-1-Regel.</p>
        <p>f) Alt: 14 × 250 W = 3.500 W. Neu: 3 × 450 W = 1.350 W. Differenz: 2.150 W = 2,15 kW.<br>
        Energie pro Jahr: 2,15 kW × 8.760 h = <strong>18.834 kWh</strong>.<br>
        Ersparnis: 18.834 kWh × 0,30 €/kWh = <strong>5.650,20 €</strong> pro Jahr (ohne Klimatisierung, die zusätzlich sinkt).</p>`
    },
    {
      id: "e-cloud-auswahl",
      topic: "cloud",
      title: "Cloud-Modelle für eine Agentur auswählen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die <strong>Möwe Medien KG</strong> in Meldorf (20 Mitarbeitende) prüft Cloud-Angebote.</p>
        <p>a) Ordne jedem Vorhaben ein Dienstmodell (IaaS, PaaS, SaaS) zu und begründe: (1) E-Mail, Kalender und Office für alle, (2) eine selbst entwickelte PHP-Webanwendung, ohne sich um Betriebssystem und Webserver zu kümmern, (3) eine ältere Branchensoftware, die einen speziell konfigurierten Windows Server braucht.</p>
        <p>b) Wer ist im Fall (3) für das Einspielen von Sicherheitsupdates des Betriebssystems verantwortlich?</p>
        <p>c) Die Kundendaten sollen im eigenen Serverraum bleiben, der Webshop bei Lastspitzen aber in der Public Cloud skalieren. Wie heißt dieses Bereitstellungsmodell?</p>
        <p>d) Nenne drei Punkte, die du aus Datenschutzsicht vor Vertragsabschluss prüfst.</p>
        <p>e) Vergleiche über 4 Jahre: eigener Server für 9.600 € plus 120 €/Monat Betrieb gegenüber einem SaaS-Angebot für 22 € pro Benutzer und Monat.</p>`,
      solution: `<p>a) (1) <strong>SaaS</strong>: Die fertige Anwendung wird komplett vom Anbieter betrieben und nur genutzt (z. B. Microsoft 365). (2) <strong>PaaS</strong>: Der Anbieter stellt Laufzeitumgebung, Webserver und Datenbank bereit, die Agentur liefert nur Code und Daten. (3) <strong>IaaS</strong>: Nur eine virtuelle Maschine mit Windows Server erlaubt die spezielle Konfiguration, die Agentur verwaltet das Betriebssystem selbst.</p>
        <p>b) Bei IaaS ist der <strong>Kunde</strong> (also die Möwe Medien KG bzw. ihr IT-Dienstleister) für Betriebssystem, Updates, Anwendungen und Daten verantwortlich. Der Anbieter kümmert sich um Hardware, Netz und Virtualisierung.</p>
        <p>c) <strong>Hybrid Cloud</strong> – Kombination aus eigener (privater) Infrastruktur und Public Cloud. Das Auslagern von Lastspitzen heißt auch „Cloud Bursting“.</p>
        <p>d) (1) Abschluss eines <strong>Auftragsverarbeitungsvertrags</strong> nach Art. 28 DSGVO. (2) <strong>Serverstandort</strong> und Übermittlungen in Drittländer (Rechtsgrundlage nach Art. 44 ff. DSGVO, Zugriffsmöglichkeiten ausländischer Behörden). (3) <strong>Technische und organisatorische Maßnahmen</strong> und Nachweise wie BSI-C5-Testat oder ISO-27001-Zertifikat. Außerdem: Löschung und Rückgabe der Daten bei Vertragsende (Exit-Strategie).</p>
        <p>e) 4 Jahre = 48 Monate.<br>
        Eigener Server: 9.600 € + 120 € × 48 = 9.600 € + 5.760 € = <strong>15.360 €</strong>.<br>
        SaaS: 22 € × 20 × 48 = <strong>21.120 €</strong>.<br>
        Rein rechnerisch ist der eigene Server 5.760 € günstiger. Beim SaaS-Angebot entfallen aber Administration, Updates, Backup-Aufwand und Hardwarerisiko, und die Kosten skalieren mit der Mitarbeiterzahl. Die Entscheidung hängt deshalb auch vom internen Personalaufwand ab.</p>`
    },
    {
      id: "e-raid-planung",
      topic: "raid-speicher",
      title: "RAID-Level für einen Dateiserver auswählen",
      level: 3,
      exam: ["AP2"],
      task: `<p>Die <strong>Küstenwerk Logistik GmbH</strong> in Brunsbüttel beschafft einen Dateiserver mit 8 Laufwerksschächten und Platten zu je 6 TiB.</p>
        <p>a) Berechne für alle 8 Platten die Nutzkapazität und die Ausfalltoleranz bei RAID 5, RAID 6 und RAID 10. (6 Punkte)</p>
        <p>b) Heute sind 16 TiB belegt. Die Datenmenge wächst um 15 % pro Jahr. Geplant wird für 3 Jahre plus 20 % Reserve. Berechne die benötigte Nutzkapazität. (3 Punkte)</p>
        <p>c) Die Geschäftsführung wünscht höchste Ausfallsicherheit und eine Hot-Spare-Platte. Prüfe, ob RAID 6 mit Hot Spare ausreicht, und begründe, warum RAID 6 hier besser ist als RAID 5. (4 Punkte)</p>
        <p>d) Der Händler bietet stattdessen Platten mit der Herstellerangabe „6 TB“ an. Reicht die Lösung aus c) dann noch? (3 Punkte)</p>
        <p>e) Welches RAID-Level empfiehlst du für einen Datenbankserver mit vielen Schreibzugriffen? (2 Punkte)</p>
        <p>f) Später sollen Hyper-V-Hosts zentral auf Speicher zugreifen. Erkläre, warum dafür ein SAN mit iSCSI besser geeignet ist als ein NAS, und erläutere die Begriffe Initiator, Target und LUN. (4 Punkte)</p>`,
      hints: ["Hot Spare zählt nicht zur Nutzkapazität.", "Wachstum: × 1,15³", "1 TB = 10¹² Byte, 1 TiB = 2⁴⁰ Byte"],
      solution: `<p>a)</p>
        <table><thead><tr><th>Level</th><th>Rechnung</th><th>Nutzkapazität</th><th>verkraftet</th></tr></thead><tbody>
        <tr><td>RAID 5</td><td>(8 − 1) × 6 TiB</td><td><strong>42 TiB</strong></td><td>1 beliebige Platte</td></tr>
        <tr><td>RAID 6</td><td>(8 − 2) × 6 TiB</td><td><strong>36 TiB</strong></td><td>2 beliebige Platten</td></tr>
        <tr><td>RAID 10</td><td>8 ÷ 2 × 6 TiB</td><td><strong>24 TiB</strong></td><td>sicher 1, maximal 4 (je Spiegelpaar eine)</td></tr>
        </tbody></table>
        <p>b) 16 TiB × 1,15³ = 16 × 1,520875 = 24,33 TiB. Mit 20 % Reserve: 24,33 × 1,2 = <strong>29,20 TiB</strong>.</p>
        <p>c) Mit einer Hot Spare bleiben 7 Platten im Verbund: RAID 6 → (7 − 2) × 6 TiB = <strong>30 TiB ≥ 29,20 TiB</strong> → reicht aus. RAID 6 verkraftet zwei gleichzeitige Ausfälle. Das ist wichtig, weil der Rebuild großer Platten viele Stunden dauert und die übrigen Platten dabei stark belastet werden. Fällt bei RAID 5 während des Rebuilds eine zweite Platte aus oder tritt ein Lesefehler auf, gehen Daten verloren.</p>
        <p>d) 6 TB = 6 × 10¹² Byte ÷ 2⁴⁰ Byte/TiB ≈ 5,457 TiB. RAID 6 mit Hot Spare: 5 × 5,457 TiB ≈ <strong>27,28 TiB &lt; 29,20 TiB</strong> → reicht <strong>nicht</strong> aus. Man bräuchte größere Platten oder müsste auf die Hot Spare verzichten (6 × 5,457 ≈ 32,74 TiB).</p>
        <p>e) <strong>RAID 10</strong>: Es hat keine Paritätsberechnung (geringe Schreibstrafe), bietet hohe Lese- und Schreibleistung und einen schnellen Rebuild durch einfaches Kopieren des Spiegels.</p>
        <p>f) Ein <strong>SAN</strong> stellt <strong>blockbasierten</strong> Speicher bereit, den die Hosts wie eine lokale Platte formatieren und für VM-Dateien nutzen (z. B. als Cluster Shared Volume). Ein <strong>NAS</strong> liefert <strong>dateibasierten</strong> Zugriff über SMB/NFS. Das ist für Datenbanken und VMs meist weniger performant, und das LAN wird zusätzlich belastet. Bei iSCSI ist der <strong>Initiator</strong> der zugreifende Server (Client), das <strong>Target</strong> das Speichersystem, und die <strong>LUN</strong> (Logical Unit Number) ist das bereitgestellte logische Laufwerk. iSCSI läuft über TCP/IP (Port 3260) in einem möglichst getrennten Speichernetz.</p>`
    },
    {
      id: "e-backup-konzept",
      topic: "datensicherung",
      title: "Sicherungskonzept mit RPO/RTO bewerten",
      level: 3,
      exam: ["AP2"],
      task: `<p>Die <strong>Dithmarscher Kohl AG</strong> sichert ihren Dateiserver (1,2 TiB) jeden Freitag voll und Montag bis Donnerstag jeweils um 22 Uhr inkrementell. Die Sicherung läuft über das LAN mit 1 Gbit/s, effektiv nutzbar sind 80 %. Täglich ändern sich etwa 3 % der Daten.</p>
        <p>a) Am Donnerstag um 14 Uhr fällt der Server aus. Welche Sicherungen musst du einspielen? Welche Daten sind verloren? Wie sähe es bei differenzieller Sicherung aus? (4 Punkte)</p>
        <p>b) Berechne die Dauer der Vollsicherung. Passt sie in das Sicherungsfenster von 22 bis 6 Uhr? (4 Punkte)</p>
        <p>c) Die Geschäftsführung fordert ein <strong>RPO von 4 Stunden</strong>. Wird es erreicht? Schlage eine Lösung vor. (3 Punkte)</p>
        <p>d) Gefordert ist außerdem ein <strong>RTO von 4 Stunden</strong>. Schätze die Wiederherstellungsdauer für den Fall aus a) ab (Voll + 3 Inkremente, gleiche Datenrate) und bewerte. (4 Punkte)</p>
        <p>e) Beschreibe, wie die Firma die 3-2-1-Regel umsetzen kann. (3 Punkte)</p>
        <p>f) Wie viele Medien braucht ein GFS-Schema mit 4 Söhnen, 4 Vätern und 12 Großvätern, und wie weit reicht es zurück? (2 Punkte)</p>`,
      solution: `<p>a) Inkrementell: <strong>Vollsicherung vom Freitag + Inkremente Montag, Dienstag und Mittwoch</strong> in dieser Reihenfolge. Verloren sind alle Änderungen seit Mittwoch 22 Uhr (Mittwochabend und Donnerstagvormittag). Differenziell: <strong>Vollsicherung + nur die Mittwochssicherung</strong>. Der Datenverlust ist derselbe.</p>
        <p>b) Datenrate: 1 Gbit/s = 125 MB/s × 0,8 = 100 MB/s = 10⁸ Byte/s.<br>
        Datenmenge: 1,2 TiB = 1,2 × 2⁴⁰ Byte ≈ 1,319 × 10¹² Byte.<br>
        Dauer: 1,319 × 10¹² ÷ 10⁸ ≈ 13.194 s ≈ <strong>3 h 40 min</strong>. Das Fenster hat 8 Stunden → <strong>passt</strong>.</p>
        <p>c) <strong>Nein</strong>: Bei einer Sicherung pro Tag können bis zu 24 Stunden (am Wochenende mehr) verloren gehen. Lösung: tagsüber zusätzliche inkrementelle Sicherungen, z. B. um 10, 14 und 18 Uhr, oder eine laufende Replikation auf einen Backup-Server mit Versionierung. Ergänzend helfen Schattenkopien, die aber kein Backup ersetzen.</p>
        <p>d) Tägliche Änderung: 3 % von 1,2 TiB ≈ 36,86 GiB. Zu übertragen: 1,2 TiB + 3 × 36,86 GiB ≈ 1,44 × 10¹² Byte ÷ 10⁸ Byte/s ≈ 14.382 s ≈ <strong>4,0 Stunden</strong> – nur für die Datenübertragung. Dazu kommen Fehlersuche, Bereitstellung von Ersatzhardware und Tests. Das <strong>RTO wird nicht erreicht</strong>. Mögliche Maßnahmen: Ersatzhardware oder eine VM bereithalten, Sicherung zusätzlich auf ein schnelles lokales NAS (10 Gbit/s), Instant Recovery (VM direkt aus dem Backup starten) oder Replikation auf einen Standby-Server.</p>
        <p>e) <strong>3 Kopien</strong>: Originaldaten auf dem Server, Sicherung 1 auf einem NAS im Haus (schneller Restore), Sicherung 2 auf LTO-Band oder in einem Cloud-Speicher. <strong>2 Medientypen</strong>: Festplatten (NAS) und Band bzw. Cloud-Objektspeicher. <strong>1 Kopie außer Haus</strong>: Bänder wöchentlich in einen Tresor an einem anderen Standort bringen oder die Cloud-Kopie in einem EU-Rechenzentrum nutzen – am besten unveränderbar (Immutable) gegen Ransomware.</p>
        <p>f) 4 + 4 + 12 = <strong>20 Medien</strong>. Tagesstände reichen etwa eine Woche zurück, Wochenstände etwa einen Monat, Monatsstände <strong>bis zu ein Jahr</strong>.</p>`
    },
    {
      id: "e-monitoring",
      topic: "monitoring",
      title: "Monitoring für einen Dateiserver einrichten und auswerten",
      level: 2,
      exam: ["AP2"],
      task: `<p>Die <strong>Watt &amp; Wind Energie GmbH</strong> in Husum führt Checkmk ein. Zuerst wird der Dateiserver <code>FS01</code> überwacht.</p>
        <p>a) Nenne fünf sinnvolle Messgrößen für FS01 mit je einem Warn- und einem kritischen Schwellwert.</p>
        <p>b) Die Switches sollen per SNMP abgefragt werden. Empfiehl eine SNMP-Version und begründe. Welche Ports müssen in der Firewall für Abfragen und Traps offen sein?</p>
        <p>c) Das Monitoring zeigt: CPU 25 %, RAM 97 % belegt, hohe Auslagerungsaktivität, Latenz der Systemplatte 45 ms, Netzwerkauslastung 5 %. Wo liegt der Engpass? Schlage eine Maßnahme vor.</p>
        <p>d) Mit dem Dienstleister ist eine Verfügbarkeit von 99,5 % pro Monat (30 Tage) vereinbart. Im September gab es Ausfälle von 2 h, 1,5 h und 45 min. Wurde das SLA eingehalten?</p>
        <p>e) Ab welchem Syslog-Schweregrad sollte eine sofortige Alarmierung erfolgen? Begründe.</p>`,
      solution: `<p>a) Beispiele:</p>
        <table><thead><tr><th>Messgröße</th><th>Warnung</th><th>kritisch</th></tr></thead><tbody>
        <tr><td>freier Speicher Datenlaufwerk</td><td>&lt; 20 %</td><td>&lt; 10 %</td></tr>
        <tr><td>CPU-Last (über 10 min)</td><td>&gt; 80 %</td><td>&gt; 95 %</td></tr>
        <tr><td>RAM-Auslastung</td><td>&gt; 85 %</td><td>&gt; 95 %</td></tr>
        <tr><td>Datenträger-Latenz</td><td>&gt; 20 ms</td><td>&gt; 50 ms</td></tr>
        <tr><td>Dienst „Server“ (SMB) / RAID-Status / letztes Backup</td><td>–</td><td>gestoppt / degraded / älter als 24 h</td></tr>
        </tbody></table>
        <p>b) <strong>SNMPv3</strong>, weil es Benutzer authentifiziert (z. B. SHA) und die Daten verschlüsselt (z. B. AES). v1/v2c übertragen den Community-String im Klartext und sind leicht abzuhören. Ports: <strong>UDP 161</strong> für Abfragen (Manager → Agent) und <strong>UDP 162</strong> für Traps (Agent → Manager).</p>
        <p>c) Der Engpass ist der <strong>Arbeitsspeicher</strong>: Weil der RAM voll ist, lagert das System aus. Das erzeugt viele Zugriffe auf die Systemplatte und erklärt deren hohe Latenz. CPU und Netzwerk sind unauffällig. Maßnahme: RAM erweitern (bei einer VM: mehr RAM zuweisen) und prüfen, welcher Prozess so viel Speicher belegt (z. B. Speicherleck, unnötige Dienste).</p>
        <p>d) Monat: 30 × 24 h = 720 h. Erlaubte Ausfallzeit: 720 h × (1 − 0,995) = <strong>3,6 h</strong>.<br>
        Tatsächlich: 2 h + 1,5 h + 0,75 h = <strong>4,25 h</strong> → Verfügbarkeit = (720 − 4,25) ÷ 720 ≈ <strong>99,41 %</strong>.<br>
        Das SLA wurde <strong>nicht eingehalten</strong> (4,25 h &gt; 3,6 h).</p>
        <p>e) Ab Schweregrad <strong>2 (Critical)</strong>, also auch bei 1 (Alert) und 0 (Emergency), sollte sofort alarmiert werden, weil dann Dienste ausgefallen sind oder unmittelbar Ausfälle drohen. Stufe 3 (Error) und 4 (Warning) sammelt man und wertet sie regelmäßig bzw. über Tickets aus. So bleibt die Zahl der Alarme beherrschbar, und wichtige Meldungen gehen nicht unter.</p>`
    },
    {
      id: "e-powershell",
      topic: "powershell",
      title: "PowerShell-Skripte lesen, korrigieren und ergänzen",
      level: 3,
      exam: ["AP2"],
      task: `<p>Bei der <strong>Nordlicht IT GmbH</strong> sollen Administrationsaufgaben mit PowerShell automatisiert werden.</p>
        <p><strong>Skript A</strong></p>
        <pre><code>$dienste = @("Spooler", "W32Time", "DNS")
foreach ($d in $dienste) {
    $s = Get-Service -Name $d
    if ($s.Status -eq "Running") {
        Write-Host "$d läuft"
    } else {
        Write-Host "$d gestoppt – starte neu"
        Start-Service -Name $d
    }
}</code></pre>
        <p>a) Beschreibe, was Skript A macht, und gib die Ausgabe an, wenn Spooler und DNS laufen und W32Time gestoppt ist. (4 Punkte)</p>
        <p><strong>Skript B</strong> soll Laufwerke mit weniger als 20 GiB freiem Speicher melden, enthält aber Fehler:</p>
        <pre><code>$grenze = 20
$laufwerke = Get-PSDrive -PSProvider FileSystem
foreach ($lw in $laufwerke) {
    $frei = $lw.Free / 1GB
    if ($frei &lt; $grenze) {
        Write-Host "Laufwerk $lw.Name: nur $frei GiB frei"
    }</code></pre>
        <p>b) Finde drei Fehler und korrigiere sie. (6 Punkte)</p>
        <p><strong>Skript C</strong> soll alle AD-Benutzer, die sich seit mehr als 90 Tagen nicht angemeldet haben, in eine CSV-Datei schreiben:</p>
        <pre><code>$stichtag = (Get-Date).AddDays( (1) )
Get-ADUser -Filter * -Properties LastLogonDate |
    Where-Object { $_.LastLogonDate (2) $stichtag } |
    Select-Object Name, SamAccountName, LastLogonDate |
    (3) -Path "C:\\Berichte\\inaktiv.csv" -NoTypeInformation -Delimiter ";"</code></pre>
        <p>c) Ergänze die Lücken (1) bis (3). (3 Punkte)</p>
        <p>d) Skript C soll jeden Montag um 6:00 Uhr automatisch laufen. Wie setzt du das um, und was musst du bei der Ausführungsrichtlinie beachten? (3 Punkte)</p>`,
      hints: ["Vergleichsoperatoren in PowerShell beginnen mit einem Bindestrich.", "Zählt die geschweiften Klammern.", "Eigenschaften im Text brauchen den Unterausdruck $( … )."],
      solution: `<p>a) Das Skript legt ein Array mit drei Dienstnamen an und durchläuft es mit <code>foreach</code>. Für jeden Dienst liest es mit <code>Get-Service</code> das Dienstobjekt. Läuft der Dienst (<code>Status -eq "Running"</code>), gibt es eine Meldung aus, sonst meldet es den gestoppten Dienst und startet ihn. Ausgabe:</p>
        <pre><code>Spooler läuft
W32Time gestoppt – starte neu
DNS läuft</code></pre>
        <p>b) 1. <code>$frei &lt; $grenze</code>: <code>&lt;</code> ist in PowerShell kein Vergleichsoperator → <code>$frei -lt $grenze</code>.<br>
        2. Die schließende Klammer der <code>foreach</code>-Schleife fehlt → am Ende eine weitere <code>}</code> ergänzen.<br>
        3. <code>"Laufwerk $lw.Name: …"</code>: In doppelten Anführungszeichen wird nur <code>$lw</code> ersetzt, nicht die Eigenschaft. Richtig ist <code>"Laufwerk $($lw.Name): nur $frei GiB frei"</code>.<br>
        Korrigiert:</p>
        <pre><code>$grenze = 20
$laufwerke = Get-PSDrive -PSProvider FileSystem
foreach ($lw in $laufwerke) {
    $frei = $lw.Free / 1GB
    if ($frei -lt $grenze) {
        Write-Host "Laufwerk $($lw.Name): nur $([math]::Round($frei, 1)) GiB frei"
    }
}</code></pre>
        <p>c) (1) <code>-90</code> (Datum vor 90 Tagen), (2) <code>-lt</code> (letzte Anmeldung liegt vor dem Stichtag), (3) <code>Export-Csv</code>.</p>
        <p>d) Das Skript als <code>.ps1</code>-Datei speichern und in der <strong>Aufgabenplanung</strong> eine Aufgabe mit dem Trigger „wöchentlich, montags 06:00“ anlegen, z. B. mit <code>Register-ScheduledTask</code> oder <code>schtasks</code>. Die Aufgabe startet <code>powershell.exe -File C:\\Skripte\\inaktiv.ps1</code> unter einem Dienstkonto mit Leserechten im AD. Die <strong>Ausführungsrichtlinie</strong> muss lokale Skripte erlauben (z. B. <code>RemoteSigned</code>, Standard auf Windows Server), oder das Skript wird signiert. <code>Unrestricted</code> oder <code>Bypass</code> dauerhaft zu setzen, ist aus Sicherheitsgründen nicht zu empfehlen.</p>`
    },
    {
      id: "e-bash-cron",
      topic: "bash",
      title: "Bash-Skript vervollständigen und mit cron planen",
      level: 2,
      exam: ["AP2"],
      task: `<p>Auf dem Linux-Server der <strong>Holstein Care gGmbH</strong> soll ein Skript warnen, wenn das Wurzeldateisystem zu voll wird.</p>
        <pre><code>#!/bin/bash
GRENZE=90
BELEGT=$(df --output=pcent / | tail -1 | tr -d ' %')
if [ ___(1)___ -ge ___(2)___ ]; then
    echo "$(date +%F) Warnung: / zu $BELEGT % belegt" &gt;&gt; /var/log/plattenplatz.log
fi</code></pre>
        <p>a) Ergänze die Lücken (1) und (2).</p>
        <p>b) Erkläre die Zeile <code>BELEGT=$(…)</code>.</p>
        <p>c) Was bewirkt die erste Zeile, und wie machst du das Skript <code>/usr/local/bin/plattenplatz.sh</code> ausführbar?</p>
        <p>d) Erstelle einen crontab-Eintrag, der das Skript alle 30 Minuten ausführt.</p>
        <p>e) Erkläre die Einträge <code>0 23 * * 1-5</code>, <code>15 6 1 * *</code> und <code>*/10 8-17 * * 1-5</code>.</p>
        <p>f) Ein anderes Skript wird mit <code>./benutzer.sh anna</code> aufgerufen. Wie greift es auf „anna“ zu, und wie prüft es, dass genau ein Parameter übergeben wurde?</p>`,
      solution: `<p>a) (1) <code>"$BELEGT"</code>, (2) <code>"$GRENZE"</code> → <code>if [ "$BELEGT" -ge "$GRENZE" ]; then</code>. <code>-ge</code> ist der Zahlenvergleich „größer oder gleich“.</p>
        <p>b) <code>df --output=pcent /</code> gibt die prozentuale Belegung des Wurzeldateisystems aus (Überschrift und Wert). <code>tail -1</code> behält nur die letzte Zeile mit dem Wert, <code>tr -d ' %'</code> entfernt Leerzeichen und das Prozentzeichen. Die Befehlsersetzung <code>$( … )</code> speichert das Ergebnis, z. B. <code>93</code>, in der Variablen <code>BELEGT</code>.</p>
        <p>c) <code>#!/bin/bash</code> (Shebang) legt fest, dass die Bash das Skript ausführt. Ausführbar machen: <code>chmod +x /usr/local/bin/plattenplatz.sh</code> (oder <code>chmod 755</code>).</p>
        <p>d) Mit <code>crontab -e</code> (als root) eintragen:</p>
        <pre><code>*/30 * * * * /usr/local/bin/plattenplatz.sh</code></pre>
        <p>e) <code>0 23 * * 1-5</code>: Montag bis Freitag um 23:00 Uhr. <code>15 6 1 * *</code>: am 1. jedes Monats um 06:15 Uhr. <code>*/10 8-17 * * 1-5</code>: Montag bis Freitag zwischen 8:00 und 17:50 Uhr alle 10 Minuten.</p>
        <p>f) Der erste Parameter steht in <code>$1</code>, die Anzahl der Parameter in <code>$#</code>:</p>
        <pre><code>if [ $# -ne 1 ]; then
    echo "Aufruf: $0 benutzername"
    exit 1
fi
echo "Lege Benutzer $1 an"</code></pre>`
    },
    {
      id: "e-usv-netzteil",
      topic: "monitoring",
      title: "USV und Netzteil für den Serverraum dimensionieren",
      level: 3,
      exam: ["AP2"],
      task: `<p>Im Serverraum der <strong>Watt &amp; Wind Energie GmbH</strong> in Husum stehen 2 Server mit je 450 W, ein NAS mit 180 W, 2 Switches mit je 90 W und eine Firewall mit 60 W. Der Leistungsfaktor beträgt cos φ = 0,9.</p>
        <p>a) Welche USV-Klasse empfiehlst du für den Serverraum? Begründe und grenze sie von den anderen Klassen ab. (4 Punkte)</p>
        <p>b) Berechne Wirk- und Scheinleistung mit 20 % Reserve und wähle eine der folgenden USVs: A = 1.500 VA / 1.350 W, B = 2.200 VA / 1.980 W, C = 3.000 VA / 2.700 W. (5 Punkte)</p>
        <p>c) Die gewählte USV hat eine nutzbare Akkuenergie von 720 Wh, der Wechselrichter einen Wirkungsgrad von 90 %. Reicht die Überbrückungszeit für ein geordnetes Herunterfahren, das 20 Minuten dauert? (3 Punkte)</p>
        <p>d) Ein neuer Server enthält: 2 CPUs à 165 W, 12 RAM-Module à 5 W, 4 SSDs à 8 W, Mainboard und Lüfter 60 W, RAID-Controller 20 W. Wähle mit 20 % Reserve ein Netzteil aus 550 W, 650 W, 750 W und 1.000 W. Wie viel Leistung nimmt der Server bei η = 0,94 aus dem Netz auf? (5 Punkte)</p>
        <p>e) Berechne die jährlichen Stromkosten dieses Servers bei Dauerbetrieb und 0,30 €/kWh. (2 Punkte)</p>
        <p>f) Wie sorgst du dafür, dass die Server bei längerem Stromausfall automatisch herunterfahren? (2 Punkte)</p>`,
      hints: ["S = P ÷ cos φ", "Überbrückungszeit = nutzbare Energie × η ÷ Last", "Netzteil nach Ausgangsleistung wählen, Aufnahme = P_out ÷ η"],
      solution: `<p>a) <strong>VFI (Online-/Doppelwandler-USV)</strong>: Die Server hängen dauerhaft am Wechselrichter, sind vollständig von Spannungs- und Frequenzschwankungen entkoppelt, und beim Netzausfall gibt es keine Umschaltzeit. Eine <strong>VFD</strong> (Offline) schaltet erst bei Ausfall um und lässt Schwankungen durch, eine <strong>VI</strong> (Line-Interactive) regelt nur die Spannung. Beide sind für Server mit hohem Verfügbarkeitsbedarf zu schwach.</p>
        <p>b) Wirkleistung: 2 × 450 + 180 + 2 × 90 + 60 = <strong>1.320 W</strong>.<br>
        Scheinleistung: 1.320 W ÷ 0,9 ≈ <strong>1.467 VA</strong>.<br>
        Mit 20 % Reserve: 1.320 W × 1,2 = 1.584 W und 1.467 VA × 1,2 = 1.760 VA.<br>
        USV A reicht nicht (1.500 VA &lt; 1.760 VA). <strong>USV B</strong> reicht (2.200 VA ≥ 1.760 VA und 1.980 W ≥ 1.584 W) und ist günstiger dimensioniert als C → <strong>USV B</strong>.</p>
        <p>c) t = 720 Wh × 0,9 ÷ 1.320 W ≈ 0,49 h ≈ <strong>29 Minuten</strong> &gt; 20 Minuten → <strong>reicht</strong> (solange die Akkus nicht gealtert sind – Akkus regelmäßig testen).</p>
        <p>d) Summe: 2 × 165 + 12 × 5 + 4 × 8 + 60 + 20 = 330 + 60 + 32 + 60 + 20 = <strong>502 W</strong>. Mit Reserve: 502 W × 1,2 = 602,4 W → <strong>650-W-Netzteil</strong> (550 W wären zu klein).<br>
        Aufnahme aus dem Netz: P_in = 502 W ÷ 0,94 ≈ <strong>534 W</strong>. Bei redundanten Netzteilen muss jedes allein die volle Last tragen können.</p>
        <p>e) 0,534 kW × 8.760 h ≈ 4.678 kWh × 0,30 €/kWh ≈ <strong>1.403 €</strong> pro Jahr.</p>
        <p>f) Die USV wird per <strong>Netzwerkkarte (SNMP)</strong> oder USB mit einer <strong>Shutdown-Software</strong> verbunden. Sinkt die Restlaufzeit unter einen Schwellwert, fahren die Server (bzw. die VMs und danach die Hosts) automatisch geordnet herunter. Die USV-Meldungen fließen zusätzlich ins Monitoring.</p>`
    },
    {
      id: "e-skalierung",
      topic: "cloud",
      title: "Webshop skalieren und hochverfügbar machen",
      level: 2,
      exam: ["AP2"],
      task: `<p>Die <strong>Nordlicht IT GmbH</strong> betreibt für die <strong>Dithmarscher Kohl AG</strong> einen Webshop. In Aktionswochen verzehnfacht sich die Zahl der Besucher, und der einzelne Webserver bricht zusammen.</p>
        <p>a) Unterscheide vertikale und horizontale Skalierung und empfiehl eine Variante.</p>
        <p>b) Vor mehrere Webserver soll ein Load Balancer. Erkläre Round Robin und Least Connections und begründe, welches Verfahren bei sehr unterschiedlich langen Sitzungen besser ist. Wozu dient ein Health Check?</p>
        <p>c) Die Datenbank läuft als Cluster. Erkläre den Unterschied zwischen Aktiv/Aktiv und Aktiv/Passiv.</p>
        <p>d) Eine neue Shop-Version soll ohne Ausfall eingeführt werden. Beschreibe das Blue-Green-Deployment.</p>
        <p>e) Drei Webserver (je 99 %) arbeiten parallel hinter einem Load Balancer (99,9 %), dahinter der Datenbank-Cluster (99,95 %). Berechne die Gesamtverfügbarkeit.</p>`,
      solution: `<p>a) <strong>Vertikal</strong> (scale up): Der vorhandene Server erhält mehr CPU und RAM – einfach, aber nach oben begrenzt, oft mit Neustart, und es bleibt ein Single Point of Failure. <strong>Horizontal</strong> (scale out): zusätzliche Webserver hinter einem Load Balancer – lässt sich bei Bedarf automatisch erweitern und wieder verkleinern und erhöht die Ausfallsicherheit. Empfehlung: <strong>horizontal</strong>, weil die Last stark schwankt und die Verfügbarkeit steigt.</p>
        <p>b) <strong>Round Robin</strong> verteilt die Anfragen der Reihe nach auf die Server, ohne deren Auslastung zu beachten. <strong>Least Connections</strong> schickt jede neue Anfrage an den Server mit den wenigsten aktiven Verbindungen. Bei unterschiedlich langen Sitzungen ist <strong>Least Connections</strong> besser, weil sich sonst lange Sitzungen auf einzelnen Servern stauen können. Der <strong>Health Check</strong> prüft regelmäßig (z. B. per HTTP-Abruf), ob ein Server antwortet, und nimmt ausgefallene Server automatisch aus der Verteilung.</p>
        <p>c) <strong>Aktiv/Aktiv</strong>: Alle Knoten verarbeiten gleichzeitig Anfragen und teilen sich die Last. Fällt einer aus, übernehmen die anderen. <strong>Aktiv/Passiv</strong>: Nur ein Knoten arbeitet, der zweite steht bereit und übernimmt erst beim Ausfall (Failover). Das ist einfacher, die Reserve bleibt aber ungenutzt.</p>
        <p>d) Die laufende Version („Blue“) bleibt online. Die neue Version wird in einer zweiten, gleichartigen Umgebung („Green“) aufgebaut und getestet. Dann schaltet der Load Balancer den Verkehr auf Green um. Treten Fehler auf, wird sofort auf Blue zurückgeschaltet. Vorteil: kein Ausfall beim Update und ein schneller Rollback. Nachteil: Die Infrastruktur wird zeitweise doppelt benötigt.</p>
        <p>e) Webserver parallel: 1 − 0,01³ = 1 − 0,000001 = 0,999999.<br>
        Gesamt (in Reihe): 0,999999 × 0,999 × 0,9995 ≈ <strong>0,9985 = 99,85 %</strong>.<br>
        Das entspricht etwa (1 − 0,9985) × 8.760 h ≈ 13 h Ausfall pro Jahr. Die Schwachstelle ist nun der einzelne Load Balancer – er sollte ebenfalls redundant ausgelegt werden.</p>`
    },
    {
      id: "e-skript-fehler",
      topic: "skripte-analyse",
      title: "Pseudocode prüfen, korrigieren und testen",
      level: 3,
      exam: ["AP2"],
      task: `<p>Die <strong>Nordlicht IT GmbH</strong> in Heide möchte für ihre Server die durchschnittliche Belegung der Laufwerke (in %) ermitteln und zählen, wie viele Laufwerke <strong>mindestens</strong> zu 85 % belegt sind. Ein Auszubildender hat diesen Pseudocode geschrieben (Indizes beginnen bei 0):</p>
        <pre><code>funktion auswerten(werte)
    für i = 0 bis laenge(werte)
        summe = summe + werte[i]
        wenn werte[i] &gt; 85 dann
            kritisch = kritisch + 1
        ende wenn
    ende für
    schnitt = summe / laenge(werte)
    rückgabe schnitt, kritisch
ende funktion</code></pre>
        <p>a) Finde vier Fehler bzw. Schwachstellen, ordne sie als Syntax-, Laufzeit- oder Logikfehler ein und korrigiere sie. (8 Punkte)</p>
        <p>b) Führe mit dem korrigierten Code einen Schreibtischtest für <code>auswerten([80, 85, 92, 63])</code> durch. Gib die Trace-Tabelle und die Rückgabewerte an. (4 Punkte)</p>
        <p>c) Setze die korrigierte Funktion in Python oder PowerShell um. (4 Punkte)</p>
        <p>d) Gib vier Black-Box-Testfälle mit erwartetem Ergebnis an, darunter einen Grenzwert. (4 Punkte)</p>
        <p>e) Begründe, warum Python hier eine gute Wahl ist, wenn das Skript auf Windows- und Linux-Servern laufen soll. (2 Punkte)</p>`,
      hints: ["Wie viele Durchläufe hat eine Schleife von 0 bis laenge(werte)?", "Welchen Wert haben summe und kritisch beim ersten Durchlauf?", "„mindestens 85 %“ – welcher Vergleichsoperator passt?", "Was passiert bei einer leeren Liste?"],
      solution: `<p>a)</p>
        <table><thead><tr><th>Fehler</th><th>Art</th><th>Korrektur</th></tr></thead><tbody>
        <tr><td>Schleife läuft bis <code>laenge(werte)</code> – ein Durchlauf zu viel, Zugriff auf einen Index außerhalb der Liste</td><td>Laufzeitfehler (Off-by-one)</td><td><code>für i = 0 bis laenge(werte) − 1</code></td></tr>
        <tr><td><code>summe</code> und <code>kritisch</code> werden nicht initialisiert</td><td>je nach Sprache Laufzeitfehler (Variable unbekannt) oder falsches Ergebnis (Logikfehler)</td><td>vor der Schleife <code>summe = 0</code> und <code>kritisch = 0</code></td></tr>
        <tr><td><code>werte[i] &gt; 85</code> zählt Laufwerke mit genau 85 % nicht mit</td><td>Logikfehler</td><td><code>wenn werte[i] &gt;= 85 dann</code></td></tr>
        <tr><td>Bei einer leeren Liste wird durch 0 geteilt</td><td>Laufzeitfehler</td><td>vorher prüfen: <code>wenn laenge(werte) = 0 dann rückgabe 0, 0</code></td></tr>
        </tbody></table>
        <pre><code>funktion auswerten(werte)
    wenn laenge(werte) = 0 dann
        rückgabe 0, 0
    ende wenn
    summe = 0
    kritisch = 0
    für i = 0 bis laenge(werte) − 1
        summe = summe + werte[i]
        wenn werte[i] &gt;= 85 dann
            kritisch = kritisch + 1
        ende wenn
    ende für
    schnitt = summe / laenge(werte)
    rückgabe schnitt, kritisch
ende funktion</code></pre>
        <p>b)</p>
        <table><thead><tr><th>i</th><th>werte[i]</th><th>summe</th><th>≥ 85?</th><th>kritisch</th></tr></thead><tbody>
        <tr><td>–</td><td>–</td><td>0</td><td>–</td><td>0</td></tr>
        <tr><td>0</td><td>80</td><td>80</td><td>nein</td><td>0</td></tr>
        <tr><td>1</td><td>85</td><td>165</td><td>ja</td><td>1</td></tr>
        <tr><td>2</td><td>92</td><td>257</td><td>ja</td><td>2</td></tr>
        <tr><td>3</td><td>63</td><td>320</td><td>nein</td><td>2</td></tr>
        </tbody></table>
        <p>schnitt = 320 ÷ 4 = <strong>80</strong>, kritisch = <strong>2</strong>. Rückgabe: 80 und 2.</p>
        <p>c) Python:</p>
        <pre><code>def auswerten(werte):
    if len(werte) == 0:
        return 0, 0
    summe = 0
    kritisch = 0
    for wert in werte:
        summe = summe + wert
        if wert &gt;= 85:
            kritisch = kritisch + 1
    return summe / len(werte), kritisch

print(auswerten([80, 85, 92, 63]))   # Ausgabe: (80.0, 2)</code></pre>
        <p>Alternativ PowerShell:</p>
        <pre><code>function Auswerten([int[]]$werte) {
    if ($werte.Count -eq 0) { return 0, 0 }
    $summe = 0; $kritisch = 0
    foreach ($w in $werte) {
        $summe += $w
        if ($w -ge 85) { $kritisch++ }
    }
    return ($summe / $werte.Count), $kritisch
}</code></pre>
        <p>d) Beispiele:</p>
        <table><thead><tr><th>Eingabe</th><th>erwartet (schnitt, kritisch)</th><th>Zweck</th></tr></thead><tbody>
        <tr><td>[84]</td><td>84, 0</td><td>knapp unter der Grenze</td></tr>
        <tr><td>[85]</td><td>85, 1</td><td>Grenzwert genau</td></tr>
        <tr><td>[86, 100]</td><td>93, 2</td><td>über der Grenze, Maximalwert 100</td></tr>
        <tr><td>[ ] (leere Liste)</td><td>0, 0 ohne Absturz</td><td>Sonderfall, Division durch 0</td></tr>
        </tbody></table>
        <p>e) Python läuft auf Windows, Linux und macOS mit demselben Code (plattformübergreifend). Es ist gut lesbar, bringt viele Bibliotheken mit (z. B. <code>shutil.disk_usage</code> für Speicherplatz, CSV und JSON für Berichte) und ist leicht wartbar. PowerShell wäre unter Linux, Bash unter Windows nur mit Zusatzaufwand nutzbar.</p>`
    },
    {
      id: "e-patch-lizenz",
      topic: "betriebssysteme",
      title: "Patch- und Lizenzmanagement für einen Pflegedienst",
      level: 2,
      exam: ["AP2"],
      task: `<p>Die <strong>Holstein Care gGmbH</strong> in Itzehoe lässt ihre IT von der Nordlicht IT GmbH betreuen. Bei einer Inventur fallen zwei Server mit <strong>Windows Server 2016</strong> auf (Datei- und Druckserver).</p>
        <p>a) Welches Problem entsteht ab dem 12.01.2027? Nenne zwei Handlungsoptionen. (3 Punkte)</p>
        <p>b) Beschreibe einen Patch-Management-Prozess in fünf Schritten für die monatlichen Windows-Updates. (5 Punkte)</p>
        <p>c) Microsoft veröffentlicht ein Update für eine Lücke, die bereits aktiv ausgenutzt wird. Warum wartest du nicht bis zum regulären Wartungsfenster? (2 Punkte)</p>
        <p>d) Für eine Pflegedokumentation gibt es zwei Angebote für 25 Benutzer: <strong>Kauf</strong> für 9.000 € einmalig plus 20 % Wartung pro Jahr oder ein <strong>Abo</strong> für 12 € pro Benutzer und Monat. Vergleiche die Kosten über 3 und über 5 Jahre und bestimme den Break-even. (6 Punkte)</p>
        <p>e) Nenne drei Maßnahmen, mit denen du ein Lizenz-Audit des Herstellers vorbereitest. (3 Punkte)</p>`,
      hints: ["End of Life = keine Sicherheitsupdates mehr", "Staging: Test → Pilot → Produktion", "Wartung pro Jahr = 20 % des Kaufpreises"],
      solution: `<p>a) Am 12.01.2027 endet der erweiterte Support für Windows Server 2016. Danach gibt es <strong>keine Sicherheitsupdates</strong> mehr – neue Lücken bleiben offen, und bei personenbezogenen Gesundheitsdaten ist das mit Art. 32 DSGVO (Sicherheit der Verarbeitung) kaum vereinbar. Optionen: (1) rechtzeitig auf eine aktuelle Version (z. B. Windows Server 2025) <strong>migrieren</strong> bzw. die Dienste auf neue VMs umziehen, (2) als Übergang kostenpflichtige <strong>Extended Security Updates</strong> nutzen, sofern angeboten, oder (3) die Dienste in einen Cloud- bzw. SaaS-Dienst verlagern.</p>
        <p>b) 1. <strong>Inventar</strong> pflegen: Welche Server und Clients mit welchem Patchstand gibt es? 2. <strong>Bewerten</strong>: Updates und Sicherheitsmeldungen nach Kritikalität priorisieren. 3. <strong>Testen</strong>: Updates zuerst auf Testsystemen, dann auf einer Pilotgruppe installieren. 4. <strong>Verteilen</strong>: im abgestimmten Wartungsfenster gestaffelt ausrollen (z. B. per WSUS, Intune oder Configuration Manager), vorher Backup bzw. Snapshot. 5. <strong>Kontrollieren und dokumentieren</strong>: Installationsstatus prüfen, Fehlschläge nacharbeiten, Stand festhalten.</p>
        <p>c) Bei einer aktiv ausgenutzten Lücke (Zero-Day bzw. „exploited in the wild“) ist das Risiko eines Angriffs sehr hoch. Bis zum nächsten regulären Fenster könnten Wochen vergehen. Deshalb wird das Update als <strong>Notfall-Change</strong> nach verkürztem Test sofort eingespielt – oder es werden bis dahin Workarounds umgesetzt (z. B. Dienst abschalten, Port sperren).</p>
        <p>d) Kauf: Wartung = 9.000 € × 0,2 = 1.800 € pro Jahr.<br>
        3 Jahre: 9.000 € + 3 × 1.800 € = <strong>14.400 €</strong> · 5 Jahre: 9.000 € + 5 × 1.800 € = <strong>18.000 €</strong><br>
        Abo: 25 × 12 € = 300 € pro Monat = 3.600 € pro Jahr.<br>
        3 Jahre: 36 × 300 € = <strong>10.800 €</strong> · 5 Jahre: 60 × 300 € = <strong>18.000 €</strong><br>
        Break-even: Wartung pro Monat = 1.800 € ÷ 12 = 150 € → 9.000 € ÷ (300 € − 150 €) = <strong>60 Monate</strong>. Bis 5 Jahre ist das Abo günstiger bzw. gleich teuer, erst bei längerer Nutzung lohnt sich der Kauf. Für das Abo sprechen außerdem planbare Kosten, immer aktuelle Versionen und die einfache Anpassung der Benutzerzahl.</p>
        <p>e) (1) Vollständiges <strong>Software-Inventar</strong> erstellen (installierte Produkte, Versionen, Benutzer bzw. Geräte, Kerne). (2) <strong>Soll-Ist-Abgleich</strong> mit den gekauften Lizenzen, Unterlizenzierung vorab nachkaufen. (3) <strong>Nachweise</strong> zentral bereithalten (Rechnungen, Verträge, Lizenzschlüssel, Volumenlizenzportal) und eine verantwortliche Person benennen.</p>`
    },
    {
      id: "e-domaene",
      topic: "active-directory",
      title: "Von der Arbeitsgruppe zur Domäne",
      level: 1,
      exam: ["AP1", "AP2"],
      task: `<p>Die <strong>Physiotherapie Deichblick</strong> in Büsum betreibt 8 PCs in einer Arbeitsgruppe. Nach der Erweiterung auf 20 Arbeitsplätze richtet die Nordlicht IT GmbH einen Windows Server als Domänencontroller für die Domäne <code>deichblick.internal</code> ein.</p>
        <p>a) Nenne drei Nachteile einer Arbeitsgruppe bei 20 Arbeitsplätzen.</p>
        <p>b) Nenne vier Voraussetzungen, damit ein PC der Domäne beitreten kann.</p>
        <p>c) Ein Notebook mit Windows 11 Home soll ebenfalls beitreten. Was stellst du fest?</p>
        <p>d) Beschreibe zwei Vorteile, die der Domänenbetrieb für die Administration bringt.</p>
        <p>e) Der Beitritt eines PCs scheitert mit der Meldung, dass kein Domänencontroller kontaktiert werden konnte. <code>ipconfig /all</code> zeigt als DNS-Server den Internetrouter 192.168.178.1. Erkläre Ursache und Lösung.</p>`,
      solution: `<p>a) Jede Person braucht auf jedem PC, den sie nutzt, ein eigenes lokales Konto. Passwortänderungen und Rechte müssen auf jedem Gerät einzeln gepflegt werden. Es gibt keine zentralen Richtlinien (z. B. Bildschirmsperre, Softwareverteilung), und die Übersicht über Konten und Rechte geht schnell verloren.</p>
        <p>b) (1) Netzwerkverbindung zum Domänencontroller. (2) Der PC nutzt den <strong>internen DNS-Server</strong> (meist auf dem DC), der die SRV-Records der Domäne kennt. (3) Eine Windows-Edition mit Domänenfunktion (Pro, Enterprise oder Education). (4) Ein Konto mit dem Recht, Computer in die Domäne aufzunehmen. Außerdem muss die Uhrzeit ungefähr stimmen (Kerberos).</p>
        <p>c) Die Home-Edition kann <strong>keiner Domäne beitreten</strong>. Das Notebook muss auf Windows 11 Pro aktualisiert (Upgrade-Lizenz) oder ersetzt werden.</p>
        <p>d) <strong>Zentrale Benutzerverwaltung</strong>: Ein Konto pro Person gilt an allen PCs, Sperren oder Passwortrücksetzen erfolgt an einer Stelle. <strong>Gruppenrichtlinien</strong>: Einstellungen wie Bildschirmsperre, Laufwerkszuordnungen oder Drucker werden automatisch auf alle PCs verteilt. Außerdem lassen sich Rechte auf Freigaben zentral über Gruppen vergeben.</p>
        <p>e) Der PC fragt den Router nach dem Namen <code>deichblick.internal</code>. Der Router kennt die internen SRV-Records der Domäne nicht, deshalb findet der PC keinen DC. Lösung: Als DNS-Server die IP-Adresse des Domänencontrollers eintragen – am besten zentral über die DHCP-Option 006. Den Router trägt man auf dem DC als <strong>Weiterleitung</strong> für Internetnamen ein.</p>`
    },
  ],
  quiz: [
    { id: "q-sd-1", topic: "serverdienste", type: "single", exam: ["AP1", "AP2"],
      q: "Über welchen Port ruft ein Mailprogramm E-Mails verschlüsselt per IMAP ab?",
      options: ["TCP 993", "TCP 995", "TCP 587", "TCP 143"], answer: 0,
      explain: "IMAPS nutzt TCP 993. 995 ist POP3 über TLS, 587 ist SMTP-Submission zum Versenden, 143 ist IMAP ohne direktes TLS (höchstens mit STARTTLS)." },
    { id: "q-sd-2", topic: "serverdienste", type: "single", exam: ["AP2"],
      q: "Welche Komponente legt eine eingehende E-Mail im Postfach des Empfängers ab?",
      options: ["MDA (Mail Delivery Agent)", "MUA (Mail User Agent)", "MTA (Mail Transfer Agent)", "MSA (Mail Submission Agent)"], answer: 0,
      explain: "Der MDA (z. B. Dovecot) stellt die Mail ins Postfach zu. Der MTA transportiert Mails zwischen Servern, der MSA nimmt Mails vom Client zum Versand an, der MUA ist das Mailprogramm des Benutzers." },
    { id: "q-sd-3", topic: "serverdienste", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Aussagen zu IMAP treffen zu?",
      options: ["Die Mails bleiben auf dem Server.", "Ordner und Gelesen-Status werden zwischen mehreren Geräten synchronisiert.", "IMAP überträgt Mails zwischen den Mailservern verschiedener Domains.", "Der Standardport für IMAP über TLS ist 995."], answer: [0, 1],
      explain: "IMAP hält die Mails zentral auf dem Server und synchronisiert Geräte. Zwischen Servern wird per SMTP übertragen. Port 995 gehört zu POP3S, IMAPS nutzt 993." },
    { id: "q-sd-4", topic: "serverdienste", type: "tf", exam: ["AP2"],
      q: "Ein Reverse Proxy nimmt Anfragen von Clients entgegen und leitet sie an einen oder mehrere interne Server weiter.",
      answer: true,
      explain: "Richtig. Ein Reverse Proxy (z. B. nginx) steht vor den eigentlichen Servern, übernimmt oft TLS und Lastverteilung und verbirgt die interne Struktur. Ein normaler (Forward-)Proxy arbeitet dagegen im Auftrag der Clients." },
    { id: "q-sd-5", topic: "serverdienste", type: "single", exam: ["AP2"],
      q: "Warum ist eine exakte Zeitsynchronisation in einer Active-Directory-Domäne besonders wichtig?",
      options: ["Kerberos lehnt Tickets ab, wenn die Uhren zu stark voneinander abweichen.", "Der DHCP-Server vergibt sonst doppelte IP-Adressen.", "Gruppenrichtlinien werden nur zur vollen Stunde angewendet.", "SMB-Freigaben sind ohne NTP nur lesend verfügbar."], answer: 0,
      explain: "Kerberos-Tickets enthalten Zeitstempel. Standardmäßig dürfen die Uhren höchstens 5 Minuten abweichen, sonst scheitert die Anmeldung. DHCP, GPO-Intervalle und SMB-Schreibrechte hängen nicht von NTP ab." },
    { id: "q-sd-6", topic: "serverdienste", type: "input", exam: ["AP2"],
      q: "Welchen UDP-Port nutzt NTP?",
      answer: ["123", "UDP 123", "Port 123", "UDP/123"],
      explain: "NTP (Network Time Protocol) arbeitet über UDP-Port 123." },
    { id: "q-dd-1", topic: "dhcp-dns", type: "single", exam: ["AP1", "AP2"],
      q: "In welcher Reihenfolge laufen die DHCP-Nachrichten bei der ersten Adressvergabe ab?",
      options: ["Discover – Offer – Request – Acknowledge", "Request – Offer – Discover – Acknowledge", "Discover – Request – Offer – Acknowledge", "Offer – Discover – Acknowledge – Request"], answer: 0,
      explain: "DORA: Der Client sucht per Broadcast (Discover), der Server bietet an (Offer), der Client fordert das Angebot an (Request), der Server bestätigt (Acknowledge)." },
    { id: "q-dd-2", topic: "dhcp-dns", type: "single", exam: ["AP1", "AP2"],
      q: "PCs in einem neuen VLAN erhalten Adressen aus 169.254.0.0/16. Der DHCP-Server steht in einem anderen VLAN, der Bereich ist angelegt. Was fehlt am wahrscheinlichsten?",
      options: ["ein DHCP-Relay-Agent (z. B. <code>ip helper-address</code>) am Router-Interface des neuen VLANs", "ein PTR-Record in der Reverse-Lookup-Zone", "eine Reservierung für jeden PC", "ein zweiter DNS-Server"], answer: 0,
      explain: "DHCP-Discover ist ein Broadcast und wird vom Router nicht weitergeleitet. Der Relay-Agent schickt ihn als Unicast an den DHCP-Server. DNS-Einträge oder Reservierungen lösen das Problem nicht." },
    { id: "q-dd-3", topic: "dhcp-dns", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Informationen kann ein DHCP-Server einem Client zusätzlich zur IP-Adresse und Subnetzmaske mitgeben?",
      options: ["Standardgateway (Option 003)", "DNS-Server (Option 006)", "DNS-Domänenname (Option 015)", "die MAC-Adresse des Clients", "das Kennwort für die Domänenanmeldung"], answer: [0, 1, 2],
      explain: "Gateway, DNS-Server und Domänenname sind typische DHCP-Optionen. Die MAC-Adresse bringt der Client selbst mit, Kennwörter werden nie per DHCP verteilt." },
    { id: "q-dd-4", topic: "dhcp-dns", type: "single", exam: ["AP2"],
      q: "Welcher DNS-Record gibt an, welcher Server E-Mails für eine Domain annimmt?",
      options: ["MX", "PTR", "CNAME", "SOA"], answer: 0,
      explain: "Der MX-Record (Mail Exchanger) nennt den Mailserver mit Priorität. PTR löst IP → Name auf, CNAME ist ein Alias, SOA enthält die Verwaltungsdaten der Zone." },
    { id: "q-dd-5", topic: "dhcp-dns", type: "input", exam: ["AP2"],
      q: "Wie heißt die Reverse-Lookup-Zone für das Netz 172.16.8.0/24?",
      answer: ["8.16.172.in-addr.arpa", "8.16.172.in-addr.arpa."],
      explain: "Die Netz-Oktette werden umgekehrt und um in-addr.arpa ergänzt: 172.16.8 → 8.16.172.in-addr.arpa." },
    { id: "q-dd-6", topic: "dhcp-dns", type: "tf", exam: ["AP2"],
      q: "Bei einer iterativen DNS-Anfrage liefert jeder befragte Server entweder die Antwort oder einen Verweis auf einen näher zuständigen Server.",
      answer: true,
      explain: "Richtig. Der auflösende DNS-Server arbeitet sich iterativ von Root über TLD bis zum autoritativen Server durch. Die rekursive Anfrage stellt dagegen der Client an seinen DNS-Server und erwartet eine fertige Antwort." },
    { id: "q-dd-7", topic: "dhcp-dns", type: "single", exam: ["AP2"],
      q: "Du willst prüfen, welcher Hostname zur IP-Adresse 192.168.50.12 gehört. Welcher Befehl ist geeignet?",
      options: ["<code>nslookup 192.168.50.12</code>", "<code>ipconfig /flushdns</code>", "<code>arp -a</code>", "<code>ipconfig /renew</code>"], answer: 0,
      explain: "nslookup mit einer IP-Adresse führt einen Reverse-Lookup (PTR) aus. flushdns leert nur den Cache, arp -a zeigt MAC-Adressen, ipconfig /renew erneuert die DHCP-Lease." },
    { id: "q-dd-8", topic: "dhcp-dns", type: "input", exam: ["AP1", "AP2"],
      q: "Ein DHCP-Bereich reicht von 10.0.0.50 bis 10.0.0.199. Wie viele Adressen umfasst er?",
      answer: ["150", "150 Adressen"],
      explain: "199 − 50 + 1 = 150. Das „+ 1“ nicht vergessen, weil Start- und Endadresse beide zum Bereich gehören." },
    { id: "q-bs-1", topic: "betriebssysteme", type: "single", exam: ["AP1", "AP2"],
      q: "Welches Dateisystem wählst du für einen USB-Stick, auf dem 8-GB-Videodateien zwischen Windows und macOS ausgetauscht werden?",
      options: ["exFAT", "FAT32", "NTFS", "ext4"], answer: 0,
      explain: "exFAT erlaubt sehr große Dateien und wird von Windows und macOS gelesen und geschrieben. FAT32 begrenzt Dateien auf 4 GiB − 1 Byte, NTFS kann macOS ohne Zusatzsoftware nur lesen, ext4 kennen beide Systeme nicht von Haus aus." },
    { id: "q-bs-2", topic: "betriebssysteme", type: "single", exam: ["AP2"],
      q: "Ein Server hat einen Prozessor mit 4 Kernen. Wie viele Kernlizenzen brauchst du für Windows Server Standard mindestens?",
      options: ["16", "4", "8", "2"], answer: 0,
      explain: "Es gilt ein Minimum von 8 Kernlizenzen pro Prozessor und 16 pro Server. Auch bei nur 4 Kernen sind also 16 Kernlizenzen (8 Zwei-Kern-Pakete) nötig." },
    { id: "q-bs-3", topic: "betriebssysteme", type: "multi", exam: ["AP2"],
      q: "Welche Vorteile bietet eine Installation von Windows Server als Server Core?",
      options: ["kleinere Angriffsfläche", "weniger Updates und Neustarts", "geringerer Ressourcenbedarf", "keine Lizenzkosten", "grafische Oberfläche des Server-Managers direkt am Server"], answer: [0, 1, 2],
      explain: "Ohne grafische Oberfläche gibt es weniger Komponenten, die angegriffen oder gepatcht werden müssen, und der Server braucht weniger Ressourcen. Die Lizenzkosten sind dieselben, und eine lokale grafische Oberfläche fehlt gerade." },
    { id: "q-bs-4", topic: "betriebssysteme", type: "tf", exam: ["AP2"],
      q: "Eine Device-CAL erlaubt beliebig vielen Personen den Zugriff auf den Server über genau dieses eine Gerät.",
      answer: true,
      explain: "Richtig. Eine Device-CAL ist an das Gerät gebunden (ideal für Schichtbetrieb an gemeinsamen PCs). Eine User-CAL ist an eine Person gebunden, die beliebig viele Geräte nutzen darf." },
    { id: "q-bs-5", topic: "betriebssysteme", type: "single", exam: ["AP1", "AP2"],
      q: "Was unterscheidet einen Thread von einem Prozess?",
      options: ["Die Threads eines Prozesses teilen sich dessen Adressraum.", "Ein Thread hat immer einen eigenen Kernel.", "Threads laufen ausschließlich im Kernel-Modus.", "Ein Thread ist ein Dienst, der ohne Benutzeranmeldung läuft."], answer: 0,
      explain: "Ein Prozess hat einen eigenen Adressraum und eine PID. Threads sind Ausführungsstränge innerhalb eines Prozesses und nutzen denselben Speicher. Einen eigenen Kernel hat ein Thread nicht, und ein Hintergrundprogramm ohne Anmeldung ist ein Dienst." },
    { id: "q-bs-6", topic: "betriebssysteme", type: "single", exam: ["AP1", "AP2"],
      q: "Welche Aussage zur GNU General Public License (GPL) trifft zu?",
      options: ["Wer veränderte GPL-Software weitergibt, muss sie wieder unter der GPL mit Quellcode weitergeben.", "GPL-Software darf nicht kommerziell eingesetzt werden.", "Die GPL verbietet das Verändern des Quellcodes.", "GPL-Software wird grundsätzlich ohne Quellcode ausgeliefert."], answer: 0,
      explain: "Die GPL ist eine Copyleft-Lizenz: Nutzung, Änderung und Weitergabe (auch kommerziell) sind erlaubt. Bei der Weitergabe veränderter Versionen müssen aber dieselben Freiheiten samt Quellcode gewährt werden." },
    { id: "q-nt-1", topic: "ntfs-rechte", type: "single", exam: ["AP2"],
      q: "Ein Benutzer hat auf einer Freigabe das Recht „Ändern“ und auf dem Ordner das NTFS-Recht „Lesen“. Welches Recht hat er beim Zugriff über das Netzwerk?",
      options: ["Lesen", "Ändern", "Vollzugriff", "kein Zugriff"], answer: 0,
      explain: "Beim Netzwerkzugriff gilt das restriktivere Ergebnis aus Freigabe- und NTFS-Ebene – hier Lesen. Die beiden Ebenen werden nicht addiert." },
    { id: "q-nt-2", topic: "ntfs-rechte", type: "single", exam: ["AP2"],
      q: "Anna ist Mitglied in G_A (NTFS: Lesen) und G_B (NTFS: Ändern). Es gibt keine Verweigerung. Welches NTFS-Recht hat sie effektiv?",
      options: ["Ändern", "Lesen", "kein Zugriff", "Vollzugriff"], answer: 0,
      explain: "Innerhalb einer Ebene addieren sich die Rechte aller Gruppen (Kumulation): Lesen + Ändern = Ändern. Vollzugriff hat niemand vergeben." },
    { id: "q-nt-3", topic: "ntfs-rechte", type: "tf", exam: ["AP2"],
      q: "Meldet sich ein Benutzer lokal am Dateiserver an und öffnet einen freigegebenen Ordner direkt über seinen lokalen Pfad (z. B. D:\\Daten), gelten sowohl die Freigabe- als auch die NTFS-Rechte.",
      answer: false,
      explain: "Falsch. Freigaberechte wirken nur beim Zugriff über das Netzwerk (SMB, also über \\\\Server\\Freigabe). Beim lokalen Zugriff – auch in einer RDP-Sitzung auf dem Server – gelten nur die NTFS-Rechte." },
    { id: "q-nt-4", topic: "ntfs-rechte", type: "multi", exam: ["AP2"],
      q: "Welche Aussagen zu NTFS-Vererbung, Kopieren und Verschieben treffen zu?",
      options: ["Eine kopierte Datei erbt die Rechte des Zielordners.", "Beim Verschieben innerhalb desselben Volumes behält eine Datei ihre Rechte.", "Ein explizites Zulassen hat Vorrang vor einem vererbten Verweigern.", "Vererbte Rechte haben immer Vorrang vor expliziten Rechten."], answer: [0, 1, 2],
      explain: "Kopien sind neue Objekte und erben vom Ziel. Beim Verschieben auf demselben Volume bleiben die Rechte erhalten. Die Rangfolge lautet: explizit verweigert → explizit zugelassen → vererbt verweigert → vererbt zugelassen. Explizite Rechte gehen also vererbten vor." },
    { id: "q-nt-5", topic: "ntfs-rechte", type: "single", exam: ["AP2"],
      q: "Welches NTFS-Standardrecht erlaubt über „Ändern“ hinaus, Berechtigungen zu bearbeiten und den Besitz zu übernehmen?",
      options: ["Vollzugriff", "Schreiben", "Lesen, Ausführen", "Ordnerinhalt anzeigen"], answer: 0,
      explain: "Nur Vollzugriff enthält „Berechtigungen ändern“ und „Besitz übernehmen“. Schreiben erlaubt Anlegen und Ändern ohne Löschen, die beiden anderen sind reine Leserechte." },
    { id: "q-nt-6", topic: "ntfs-rechte", type: "single", exam: ["AP2"],
      q: "Carla hat über ihre Abteilungsgruppe NTFS „Ändern“ auf einem Ordner. Eine weitere Gruppe, in der sie Mitglied ist, hat dort explizit „Verweigern: Vollzugriff“. Was gilt?",
      options: ["Carla hat keinen Zugriff.", "Carla hat Ändern.", "Carla hat Lesen.", "Es gilt die Gruppe, in die Carla zuerst aufgenommen wurde."], answer: 0,
      explain: "Ein Verweigern hat Vorrang vor einem Zulassen auf gleicher Ebene – hier sperrt das explizite Verweigern alle Rechte. Die Reihenfolge der Gruppenaufnahme spielt keine Rolle." },
    { id: "q-lr-1", topic: "linux-rechte", type: "input", exam: ["AP1", "AP2"],
      q: "Wie lautet die oktale Schreibweise für die Rechte <code>rwxr-x---</code>?",
      answer: ["750", "0750"],
      explain: "Besitzer rwx = 4 + 2 + 1 = 7, Gruppe r-x = 4 + 1 = 5, andere --- = 0 → 750." },
    { id: "q-lr-2", topic: "linux-rechte", type: "single", exam: ["AP2"],
      q: "Welche Rechte erhält eine neu angelegte Datei bei <code>umask 022</code>?",
      options: ["rw-r--r-- (644)", "rwxr-xr-x (755)", "rw-rw-rw- (666)", "r--r--r-- (444)"], answer: 0,
      explain: "Neue Dateien starten mit 666. Die umask 022 entfernt das w-Recht bei Gruppe und anderen → 644. 755 erhalten neue Verzeichnisse (Start 777)." },
    { id: "q-lr-3", topic: "linux-rechte", type: "single", exam: ["AP2"],
      q: "Was bewirkt das Sticky Bit auf dem Verzeichnis <code>/tmp</code>?",
      options: ["Dateien dürfen nur von ihrem Besitzer (oder root) gelöscht oder umbenannt werden.", "Programme im Verzeichnis laufen mit den Rechten ihres Besitzers.", "Neue Dateien erhalten automatisch die Gruppe des Verzeichnisses.", "Das Verzeichnis kann nicht gelöscht werden, solange es Dateien enthält."], answer: 0,
      explain: "Das Sticky Bit (oktal 1, Anzeige t) verhindert, dass Benutzer in einem für alle beschreibbaren Verzeichnis fremde Dateien löschen. Die Rechte des Besitzers beim Ausführen bewirkt SUID, die Gruppenvererbung SGID." },
    { id: "q-lr-4", topic: "linux-rechte", type: "multi", exam: ["AP1", "AP2"],
      q: "Die Datei <code>bericht.txt</code> hat die Rechte 640. Mit welchen Befehlen erhält die Gruppe zusätzlich Schreibrecht, ohne dass sich sonst etwas ändert?",
      options: ["<code>chmod g+w bericht.txt</code>", "<code>chmod 660 bericht.txt</code>", "<code>chmod 664 bericht.txt</code>", "<code>chmod o+w bericht.txt</code>"], answer: [0, 1],
      explain: "640 = rw-r-----. Mit g+w oder oktal 660 wird daraus rw-rw----. 664 gäbe zusätzlich allen anderen Leserecht, o+w gäbe den anderen Schreibrecht." },
    { id: "q-lr-5", topic: "linux-rechte", type: "tf", exam: ["AP1", "AP2"],
      q: "Um ein Verzeichnis mit <code>cd</code> betreten zu dürfen, braucht man darauf das x-Recht.",
      answer: true,
      explain: "Richtig. Bei Verzeichnissen bedeutet x „betreten und auf Einträge zugreifen“. r erlaubt nur das Auflisten der Namen, w das Anlegen und Löschen von Einträgen (zusammen mit x)." },
    { id: "q-lr-6", topic: "linux-rechte", type: "single", exam: ["AP2"],
      q: "<code>ls -l</code> zeigt für eine Datei <code>-rwsr-xr-x</code>. Welcher oktale Wert entspricht dem?",
      options: ["4755", "2755", "1755", "755"], answer: 0,
      explain: "Das s an der x-Stelle des Besitzers steht für SUID (4). Die normalen Rechte sind rwx r-x r-x = 755 → 4755. SGID wäre 2 (s bei der Gruppe), Sticky 1 (t bei anderen)." },
    { id: "q-ad-1", topic: "active-directory", type: "single", exam: ["AP2"],
      q: "Was beschreibt das AGDLP-Prinzip?",
      options: ["Benutzerkonten kommen in globale Gruppen, diese in domänenlokale Gruppen, und nur diese erhalten die Berechtigungen.", "Administratoren vergeben Gruppenrichtlinien direkt an Domänen, Lizenzen und Policies.", "Globale Gruppen erhalten die Rechte direkt, Benutzer werden in domänenlokale Gruppen aufgenommen.", "Benutzerkonten werden direkt auf Dateien berechtigt, Gruppen dienen nur als E-Mail-Verteiler."], answer: 0,
      explain: "A → G → DL → P: Accounts in globale Gruppen (nach Rolle), diese in domänenlokale Gruppen (nach Ressource und Recht), die die Permissions erhalten. So ändert man bei Personalwechseln nur Mitgliedschaften." },
    { id: "q-ad-2", topic: "active-directory", type: "single", exam: ["AP2"],
      q: "In welcher Reihenfolge werden Gruppenrichtlinien verarbeitet?",
      options: ["Lokal → Standort → Domäne → OU", "Domäne → Lokal → OU → Standort", "OU → Domäne → Standort → Lokal", "Standort → Lokal → Domäne → OU"], answer: 0,
      explain: "LSDOU: lokal, Standort (Site), Domäne, Organisationseinheit (von oben nach unten). Bei Konflikten gewinnt die zuletzt verarbeitete GPO, also die, die dem Objekt am nächsten ist – außer bei erzwungenen GPOs." },
    { id: "q-ad-3", topic: "active-directory", type: "multi", exam: ["AP2"],
      q: "Welche Aussagen zu Gruppen im Active Directory treffen zu?",
      options: ["Globale Gruppen enthalten nur Mitglieder aus der eigenen Domäne.", "Domänenlokale Gruppen werden nur für Ressourcen der eigenen Domäne berechtigt.", "Universelle Gruppen können Mitglieder aus allen Domänen der Gesamtstruktur enthalten.", "Verteilergruppen eignen sich für NTFS-Berechtigungen."], answer: [0, 1, 2],
      explain: "Die ersten drei Aussagen beschreiben die Gruppenbereiche korrekt. Verteilergruppen haben keine SID für Zugriffslisten und dienen nur als E-Mail-Verteiler – für Rechte braucht man Sicherheitsgruppen." },
    { id: "q-ad-4", topic: "active-directory", type: "tf", exam: ["AP2"],
      q: "Eine als „Erzwungen“ markierte GPO-Verknüpfung wirkt auch in einer OU, bei der die Vererbung deaktiviert ist.",
      answer: true,
      explain: "Richtig. „Erzwungen“ (Enforced) setzt sich gegen „Vererbung deaktivieren“ durch, und ihre Einstellungen können weiter unten nicht überschrieben werden." },
    { id: "q-ad-5", topic: "active-directory", type: "single", exam: ["AP2"],
      q: "Was erhält ein Client bei der Kerberos-Anmeldung zuerst vom Key Distribution Center (KDC)?",
      options: ["ein Ticket Granting Ticket (TGT)", "ein Dienstticket für den Dateiserver", "eine DHCP-Lease", "ein Computerzertifikat der Zertifizierungsstelle"], answer: 0,
      explain: "Zuerst gibt es das TGT. Mit ihm fordert der Client beim KDC Diensttickets für einzelne Server an und legt diese dem jeweiligen Dienst vor. DHCP und Zertifikate gehören nicht zum Kerberos-Ablauf." },
    { id: "q-ad-6", topic: "active-directory", type: "single", exam: ["AP2"],
      q: "Welche Aussage zu Organisationseinheiten (OUs) ist richtig?",
      options: ["Mit OUs verknüpft man Gruppenrichtlinien und delegiert Verwaltungsaufgaben.", "Einer OU kann man NTFS-Rechte auf Ordner erteilen.", "Die OU ist die Sicherheitsgrenze des Active Directory.", "Jede OU braucht einen eigenen Domänencontroller."], answer: 0,
      explain: "OUs strukturieren Objekte, dienen als Ziel für GPO-Verknüpfungen und für delegierte Verwaltung. Sie haben keine SID, deshalb gibt es keine Dateirechte für OUs. Die Sicherheitsgrenze ist die Gesamtstruktur, und DCs gehören zur Domäne, nicht zu einer OU." },
    { id: "q-ad-7", topic: "active-directory", type: "input", exam: ["AP2"],
      q: "Welchen Port nutzt LDAP standardmäßig ohne TLS?",
      answer: ["389", "TCP 389", "Port 389", "TCP/389"],
      explain: "LDAP nutzt Port 389, LDAPS (LDAP über TLS) Port 636, der globale Katalog 3268." },
    { id: "q-lx-1", topic: "linux", type: "single", exam: ["AP1", "AP2"],
      q: "In welchem Verzeichnis liegen unter Linux typischerweise die systemweiten Konfigurationsdateien?",
      options: ["<code>/etc</code>", "<code>/var</code>", "<code>/usr</code>", "<code>/home</code>"], answer: 0,
      explain: "Nach dem Filesystem Hierarchy Standard gehört die Konfiguration nach /etc. /var enthält veränderliche Daten wie Logs, /usr Programme und Bibliotheken, /home die Benutzerverzeichnisse." },
    { id: "q-lx-2", topic: "linux", type: "single", exam: ["AP2"],
      q: "Mit welchem Befehl startest du den Dienst nginx sofort und sorgst dafür, dass er auch nach jedem Neustart läuft?",
      options: ["<code>systemctl enable --now nginx</code>", "<code>systemctl status nginx</code>", "<code>journalctl -u nginx</code>", "<code>systemctl reload nginx</code>"], answer: 0,
      explain: "enable aktiviert den Autostart, --now startet den Dienst zusätzlich sofort. status zeigt nur den Zustand, journalctl die Logs, reload liest die Konfiguration neu ein." },
    { id: "q-lx-3", topic: "linux", type: "multi", exam: ["AP2"],
      q: "Mit welchen Befehlen installierst du das Paket nginx?",
      options: ["<code>apt install nginx</code> (Debian/Ubuntu)", "<code>dnf install nginx</code> (RHEL-Familie)", "<code>systemctl install nginx</code>", "<code>chmod +x nginx</code>"], answer: [0, 1],
      explain: "apt und dnf sind die Paketmanager der beiden großen Distributionsfamilien. systemctl steuert Dienste, installiert aber nichts. chmod ändert nur Rechte." },
    { id: "q-lx-4", topic: "linux", type: "tf", exam: ["AP2"],
      q: "Der Befehl <code>usermod -G sudo anna</code> nimmt anna in die Gruppe sudo auf, ohne ihre bisherigen Zusatzgruppen zu verändern.",
      answer: false,
      explain: "Falsch. Ohne -a ersetzt -G die Liste der Zusatzgruppen, anna verliert also alle anderen. Richtig ist <code>usermod -aG sudo anna</code> (a = append)." },
    { id: "q-lx-5", topic: "linux", type: "single", exam: ["AP1", "AP2"],
      q: "Was bewirkt die Befehlskette <code>ps aux | grep sshd</code>?",
      options: ["Die Prozessliste wird an grep übergeben, das nur Zeilen mit „sshd“ ausgibt.", "Der SSH-Dienst wird neu gestartet.", "Die Prozessliste wird in eine Datei namens grep geschrieben.", "Alle Prozesse außer sshd werden beendet."], answer: 0,
      explain: "Die Pipe | leitet die Ausgabe des ersten Befehls als Eingabe an den zweiten weiter. grep filtert die Zeilen. In eine Datei schreibt nur die Umleitung mit &gt;." },
    { id: "q-lx-6", topic: "linux", type: "single", exam: ["AP2"],
      q: "In welcher Datei speichert Linux die Passwort-Hashes der lokalen Benutzer?",
      options: ["<code>/etc/shadow</code>", "<code>/etc/passwd</code>", "<code>/etc/group</code>", "<code>/var/log/auth.log</code>"], answer: 0,
      explain: "Die Hashes liegen in /etc/shadow, die nur root lesen darf. /etc/passwd enthält die Kontodaten und ist für alle lesbar (dort steht nur ein x als Platzhalter). /etc/group enthält Gruppen, auth.log Anmeldeereignisse." },
    { id: "q-vi-1", topic: "virtualisierung", type: "single", exam: ["AP2"],
      q: "Welches Produkt ist ein Typ-2-Hypervisor?",
      options: ["Oracle VirtualBox", "VMware ESXi", "Microsoft Hyper-V", "Proxmox VE"], answer: 0,
      explain: "VirtualBox läuft als Anwendung auf einem Host-Betriebssystem (Typ 2). ESXi, Hyper-V und Proxmox VE (KVM) laufen direkt auf der Hardware und zählen zu Typ 1." },
    { id: "q-vi-2", topic: "virtualisierung", type: "multi", exam: ["AP2"],
      q: "Welche Aussagen zu Containern im Vergleich zu virtuellen Maschinen treffen zu?",
      options: ["Container teilen sich den Kernel des Host-Betriebssystems.", "Container starten in der Regel deutlich schneller als VMs.", "Jeder Container enthält ein vollständiges Betriebssystem mit eigenem Kernel.", "Container sind stärker voneinander isoliert als VMs."], answer: [0, 1],
      explain: "Container isolieren nur Prozesse und nutzen den Kernel des Hosts. Deshalb sind sie klein und starten schnell. Einen eigenen Kernel und damit eine stärkere Isolation haben VMs." },
    { id: "q-vi-3", topic: "virtualisierung", type: "tf", exam: ["AP2"],
      q: "Ein Snapshot einer VM ersetzt eine Datensicherung, weil man jederzeit zum gespeicherten Zustand zurückkehren kann.",
      answer: false,
      explain: "Falsch. Der Snapshot liegt auf demselben Speicher wie die VM und hängt von ihren Dateien ab. Ein Speicherausfall oder Ransomware trifft beide. Snapshots sind nur kurzfristige Rücksprungpunkte, z. B. vor Updates." },
    { id: "q-vi-4", topic: "virtualisierung", type: "single", exam: ["AP2"],
      q: "Was ermöglicht die Live-Migration einer VM?",
      options: ["eine laufende VM ohne Unterbrechung auf einen anderen Host verschieben", "eine VM nach einem Hostausfall automatisch auf einem anderen Host neu starten", "eine VM in einen Container umwandeln", "Snapshots automatisch auf Band sichern"], answer: 0,
      explain: "Bei der Live-Migration (z. B. vMotion) wird der Arbeitsspeicher im laufenden Betrieb übertragen. Der automatische Neustart nach einem Hostausfall ist die HA-Funktion eines Clusters – dabei gibt es eine kurze Unterbrechung." },
    { id: "q-vi-5", topic: "virtualisierung", type: "input", exam: ["AP2"],
      q: "20 VMs benötigen zusammen 300 GiB RAM (inklusive Reserve). Jeder Host hat 128 GiB RAM. Wie viele Hosts brauchst du nach dem N+1-Prinzip?",
      answer: ["4", "4 Hosts"],
      explain: "300 ÷ 128 = 2,34 → 3 Hosts tragen die Last. N+1 → 4 Hosts. Probe: Fällt einer aus, bleiben 3 × 128 GiB = 384 GiB ≥ 300 GiB." },
    { id: "q-vi-6", topic: "virtualisierung", type: "single", exam: ["AP1", "AP2"],
      q: "Was kennzeichnet einen nicht persistenten virtuellen Desktop (VDI)?",
      options: ["Änderungen werden nach der Abmeldung verworfen, der Desktop startet wieder aus dem Basis-Image.", "Jeder Benutzer behält dauerhaft seinen eigenen Desktop mit allen Änderungen.", "Der Desktop läuft vollständig lokal auf dem Thin Client.", "Der Desktop funktioniert auch ohne Netzwerkverbindung."], answer: 0,
      explain: "Nicht persistente Desktops werden zurückgesetzt – das spart Speicher und hält die Desktops sauber. Benutzerdaten liegen deshalb in Profil- oder Netzwerkspeichern. VDI-Desktops laufen immer im Rechenzentrum und brauchen eine Netzverbindung." },
    { id: "q-cl-1", topic: "cloud", type: "single", exam: ["AP1", "AP2"],
      q: "Ein Unternehmen mietet virtuelle Server in der Cloud, installiert und patcht das Betriebssystem aber selbst. Welches Dienstmodell liegt vor?",
      options: ["IaaS", "PaaS", "SaaS", "DaaS"], answer: 0,
      explain: "Bei Infrastructure as a Service stellt der Anbieter Hardware, Netz und Virtualisierung. Betriebssystem, Anwendungen und Daten verwaltet der Kunde. Bei PaaS und SaaS kümmert sich der Anbieter auch um das Betriebssystem." },
    { id: "q-cl-2", topic: "cloud", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Beispiele gehören zu Software as a Service (SaaS)?",
      options: ["eine im Browser genutzte Office- und E-Mail-Lösung", "ein per Abo genutztes Online-CRM", "eine gemietete VM mit Administratorzugang", "eine verwaltete Laufzeitumgebung, in die Entwickler ihren Code hochladen"], answer: [0, 1],
      explain: "SaaS sind fertige Anwendungen, die nur genutzt werden. Eine VM mit Adminzugang ist IaaS, eine Laufzeitumgebung für eigenen Code ist PaaS." },
    { id: "q-cl-3", topic: "cloud", type: "multi", exam: ["AP2"],
      q: "Wofür bleibt der Kunde auch bei SaaS verantwortlich?",
      options: ["für seine Daten", "für die Vergabe von Benutzerkonten und Zugriffsrechten", "für das Patchen des Server-Betriebssystems", "für den Austausch defekter Festplatten im Rechenzentrum"], answer: [0, 1],
      explain: "Nach dem Modell der geteilten Verantwortung bleiben Daten sowie Identitäten und Zugriffe immer beim Kunden. Betriebssystem und Hardware betreibt bei SaaS der Anbieter." },
    { id: "q-cl-4", topic: "cloud", type: "tf", exam: ["AP2"],
      q: "Bei horizontaler Skalierung (scale out) erhält ein einzelner Server mehr CPU und RAM.",
      answer: false,
      explain: "Falsch. Das ist vertikale Skalierung (scale up). Horizontal werden weitere Instanzen hinzugefügt und z. B. per Load Balancer verteilt." },
    { id: "q-cl-5", topic: "cloud", type: "single", exam: ["AP1", "AP2"],
      q: "Welchen Vertrag muss ein Unternehmen nach DSGVO mit einem Cloud-Anbieter schließen, der in seinem Auftrag personenbezogene Daten verarbeitet?",
      options: ["einen Auftragsverarbeitungsvertrag (Art. 28 DSGVO)", "ein Service Level Agreement", "einen Endbenutzer-Lizenzvertrag (EULA)", "eine Geheimhaltungsvereinbarung (NDA)"], answer: 0,
      explain: "Art. 28 DSGVO verlangt für die Auftragsverarbeitung einen Vertrag mit festgelegten Pflichten (Weisungsbindung, TOM, Unterauftragnehmer usw.). Ein SLA regelt die Dienstqualität, EULA und NDA ersetzen den AV-Vertrag nicht." },
    { id: "q-cl-6", topic: "cloud", type: "single", exam: ["AP1", "AP2"],
      q: "Sensible Daten bleiben im eigenen Rechenzentrum, Lastspitzen des Webshops werden in die Public Cloud ausgelagert. Welches Bereitstellungsmodell ist das?",
      options: ["Hybrid Cloud", "Community Cloud", "Private Cloud", "Public Cloud"], answer: 0,
      explain: "Die Kombination aus eigener (privater) Infrastruktur und Public Cloud ist eine Hybrid Cloud. Eine Community Cloud teilen sich mehrere Organisationen mit gleichen Anforderungen." },
    { id: "q-rd-1", topic: "raid-speicher", type: "input", exam: ["AP2"],
      q: "Wie groß ist die Nutzkapazität eines RAID 5 aus 5 Platten zu je 4 TiB? (Angabe in TiB)",
      answer: ["16", "16 TiB", "16TiB"],
      explain: "RAID 5: (n − 1) × C = (5 − 1) × 4 TiB = 16 TiB. Die Kapazität einer Platte geht für die verteilte Parität verloren." },
    { id: "q-rd-2", topic: "raid-speicher", type: "single", exam: ["AP2"],
      q: "Wie viele beliebige Plattenausfälle verkraftet ein RAID 6 garantiert?",
      options: ["2", "1", "3", "0"], answer: 0,
      explain: "RAID 6 speichert doppelte Parität und verkraftet deshalb zwei beliebige Ausfälle. RAID 5 verkraftet einen, RAID 0 keinen." },
    { id: "q-rd-3", topic: "raid-speicher", type: "multi", exam: ["AP2"],
      q: "Welche Aussagen zu RAID 10 treffen zu?",
      options: ["Die Nutzkapazität beträgt die Hälfte der Bruttokapazität.", "Es werden mindestens 4 Platten benötigt.", "Es verkraftet garantiert zwei beliebige Plattenausfälle.", "Es arbeitet mit verteilter Parität."], answer: [0, 1],
      explain: "RAID 10 spiegelt Plattenpaare und verteilt die Daten per Striping darüber: 50 % Nutzkapazität, mindestens 4 Platten. Garantiert ist nur ein Ausfall – fallen beide Platten eines Spiegelpaares aus, sind die Daten verloren. Parität nutzen RAID 5 und 6." },
    { id: "q-rd-4", topic: "raid-speicher", type: "tf", exam: ["AP2"],
      q: "Eine Hot-Spare-Platte zählt zur Nutzkapazität des RAID-Verbunds.",
      answer: false,
      explain: "Falsch. Die Hot Spare wartet ungenutzt auf einen Ausfall und springt dann für den Rebuild ein. Sie wird bei der Nutzkapazität nicht mitgerechnet." },
    { id: "q-rd-5", topic: "raid-speicher", type: "single", exam: ["AP2"],
      q: "Was kennzeichnet ein SAN im Unterschied zu einem NAS?",
      options: ["blockbasierter Zugriff, z. B. über iSCSI oder Fibre Channel", "dateibasierter Zugriff über SMB oder NFS", "Anschluss ausschließlich über USB an einen einzelnen Server", "Zugriff nur über einen Webbrowser"], answer: 0,
      explain: "Ein SAN stellt Blockspeicher (LUNs) bereit, den Server wie lokale Platten nutzen. Ein NAS stellt Dateien über SMB/NFS bereit. Der direkte Anschluss an einen Server ist DAS." },
    { id: "q-rd-6", topic: "raid-speicher", type: "single", exam: ["AP2"],
      q: "Warum ersetzt ein RAID 1 keine Datensicherung?",
      options: ["Versehentliches Löschen oder eine Verschlüsselung durch Ransomware wird sofort auch auf die Spiegelplatte übernommen.", "RAID 1 speichert nur die Hälfte der Daten.", "RAID 1 verkraftet keinen Plattenausfall.", "RAID 1 funktioniert nur mit SSDs."], answer: 0,
      explain: "RAID schützt nur vor dem Ausfall einzelner Laufwerke. Logische Fehler, Schadsoftware, Diebstahl oder Brand treffen alle Platten des Verbunds gleichzeitig – dagegen hilft nur ein getrenntes Backup." },
    { id: "q-rd-7", topic: "raid-speicher", type: "multi", exam: ["AP2"],
      q: "Welche Aussagen zu iSCSI treffen zu?",
      options: ["iSCSI überträgt SCSI-Befehle über TCP/IP.", "Der zugreifende Server heißt Initiator.", "Das bereitgestellte logische Laufwerk wird als LUN bezeichnet.", "iSCSI stellt Dateien über SMB-Freigaben bereit."], answer: [0, 1, 2],
      explain: "iSCSI ist ein blockbasiertes SAN-Protokoll über Ethernet (TCP-Port 3260) mit Initiator (Server), Target (Speichersystem) und LUN. SMB ist ein dateibasiertes Protokoll." },
    { id: "q-ds-1", topic: "datensicherung", type: "single", exam: ["AP1", "AP2"],
      q: "Vollsicherung am Sonntag, Montag bis Freitag abends inkrementell. Am Freitagmittag fällt der Server aus. Welche Sicherungen spielst du ein?",
      options: ["Voll (So) + Mo + Di + Mi + Do", "Voll (So) + Do", "nur die Sicherung vom Donnerstag", "Voll (So) + Mo"], answer: 0,
      explain: "Jedes Inkrement enthält nur die Änderungen seit der letzten Sicherung. Deshalb brauchst du die Vollsicherung und alle Inkremente danach in der richtigen Reihenfolge." },
    { id: "q-ds-2", topic: "datensicherung", type: "single", exam: ["AP1", "AP2"],
      q: "Gleiche Situation, aber Montag bis Freitag wird differenziell gesichert. Welche Sicherungen spielst du ein?",
      options: ["Voll (So) + Do", "Voll (So) + Mo + Di + Mi + Do", "nur die Sicherung vom Donnerstag", "Voll (So) + Mo"], answer: 0,
      explain: "Eine differenzielle Sicherung enthält alle Änderungen seit der letzten Vollsicherung. Die letzte differenzielle Sicherung (Do) plus die Vollsicherung reichen aus." },
    { id: "q-ds-3", topic: "datensicherung", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Aussagen zur 3-2-1-Regel treffen zu?",
      options: ["Es gibt insgesamt drei Kopien der Daten.", "Die Kopien liegen auf mindestens zwei verschiedenen Medientypen.", "Eine Kopie wird außer Haus aufbewahrt.", "Es werden drei Vollsicherungen pro Woche erstellt."], answer: [0, 1, 2],
      explain: "3 Kopien (Original + 2 Sicherungen), 2 Medientypen, 1 Kopie extern. Über die Häufigkeit von Vollsicherungen sagt die Regel nichts." },
    { id: "q-ds-4", topic: "datensicherung", type: "single", exam: ["AP2"],
      q: "Was beschreibt das Recovery Point Objective (RPO)?",
      options: ["den maximal tolerierbaren Datenverlust, gemessen als Zeitraum", "die maximal tolerierbare Ausfallzeit bis zur Wiederherstellung", "die mittlere Betriebszeit zwischen zwei Ausfällen", "die gesetzliche Aufbewahrungsdauer archivierter Daten"], answer: 0,
      explain: "Das RPO legt fest, wie viel Datenverlust höchstens akzeptabel ist – daraus folgt das Sicherungsintervall. Die tolerierbare Ausfallzeit ist das RTO, die mittlere Betriebszeit die MTBF." },
    { id: "q-ds-5", topic: "datensicherung", type: "tf", exam: ["AP1", "AP2"],
      q: "Bei einer differenziellen Sicherung wird das Archivbit der gesicherten Dateien zurückgesetzt.",
      answer: false,
      explain: "Falsch. Die differenzielle Sicherung lässt das Archivbit stehen – deshalb enthält jede weitere differenzielle Sicherung wieder alle Änderungen seit der Vollsicherung. Voll- und inkrementelle Sicherung setzen das Bit zurück." },
    { id: "q-ds-6", topic: "datensicherung", type: "input", exam: ["AP2"],
      q: "Ein Generationenschema nutzt 5 Söhne, 4 Väter und 12 Großväter. Wie viele Sicherungsmedien werden benötigt?",
      answer: ["21", "21 Medien"],
      explain: "5 + 4 + 12 = 21 Medien. Jede Generation wird zyklisch überschrieben – Söhne wöchentlich, Väter monatlich, Großväter jährlich." },
    { id: "q-ds-7", topic: "datensicherung", type: "single", exam: ["AP2"],
      q: "Was unterscheidet eine Archivierung von einer Datensicherung?",
      options: ["Die Archivierung bewahrt abgeschlossene Daten langfristig und unveränderbar auf, die Sicherung dient der Wiederherstellung und wird rotierend überschrieben.", "Archivierung ist nur ein anderes Wort für eine Vollsicherung.", "Archivierte Daten werden täglich überschrieben.", "Datensicherungen müssen gesetzlich zehn Jahre aufbewahrt werden."], answer: 0,
      explain: "Ein Backup ist eine Kopie für den Notfall mit kurzer Aufbewahrung. Ein Archiv erfüllt rechtliche Aufbewahrungspflichten (z. B. nach HGB und AO) revisionssicher über Jahre." },
    { id: "q-mo-1", topic: "monitoring", type: "single", exam: ["AP2"],
      q: "Über welchen Port sendet ein SNMP-Agent Traps an den Monitoring-Server?",
      options: ["UDP 162", "UDP 161", "UDP 514", "TCP 443"], answer: 0,
      explain: "Traps gehen an UDP 162 des Managers. Auf UDP 161 nimmt der Agent Abfragen (GET/SET) entgegen. 514 ist Syslog, 443 HTTPS." },
    { id: "q-mo-2", topic: "monitoring", type: "single", exam: ["AP2"],
      q: "Welche SNMP-Version bietet Authentifizierung von Benutzern und Verschlüsselung der Daten?",
      options: ["SNMPv3", "SNMPv1", "SNMPv2c", "SNMPv2c mit der Community „private“"], answer: 0,
      explain: "Erst SNMPv3 bietet Benutzer mit Authentifizierung und Verschlüsselung (authPriv). v1 und v2c übertragen nur einen Community-String im Klartext – egal, wie er heißt." },
    { id: "q-mo-3", topic: "monitoring", type: "multi", exam: ["AP2"],
      q: "Welche der folgenden Programme sind Werkzeuge zur Server- und Dienstüberwachung?",
      options: ["Zabbix", "Checkmk", "PRTG", "Nagios", "Samba", "Postfix"], answer: [0, 1, 2, 3],
      explain: "Zabbix, Checkmk, PRTG und Nagios (bzw. Icinga) sind Monitoring-Systeme. Samba stellt SMB-Dateidienste unter Linux bereit, Postfix ist ein Mailserver (MTA)." },
    { id: "q-mo-4", topic: "monitoring", type: "input", exam: ["AP2"],
      q: "Wie viele Stunden darf ein Dienst bei 99,9 % Verfügbarkeit pro Jahr (8.760 h) höchstens ausfallen?",
      answer: ["8,76", "8,76 h", "8,76 Stunden", "8.76"],
      explain: "(1 − 0,999) × 8.760 h = 0,001 × 8.760 h = 8,76 h (etwa 8 h 46 min)." },
    { id: "q-mo-5", topic: "monitoring", type: "single", exam: ["AP2"],
      q: "Welcher Syslog-Schweregrad ist der kritischste?",
      options: ["0 – Emergency", "7 – Debug", "3 – Error", "4 – Warning"], answer: 0,
      explain: "Die Schweregrade reichen von 0 (Emergency, System unbenutzbar) bis 7 (Debug). Je kleiner die Zahl, desto dringender die Meldung." },
    { id: "q-mo-6", topic: "monitoring", type: "tf", exam: ["AP2"],
      q: "Zwei parallel betriebene Internetleitungen mit je 99 % Verfügbarkeit erreichen zusammen 99,99 %, wenn eine Leitung für den Betrieb genügt.",
      answer: true,
      explain: "Richtig. Parallel gilt A = 1 − (1 − 0,99) × (1 − 0,99) = 1 − 0,0001 = 0,9999 = 99,99 %. Voraussetzung: Die Ausfälle sind unabhängig voneinander." },
    { id: "q-mo-7", topic: "monitoring", type: "single", exam: ["AP2"],
      q: "Ein Server zeigt CPU 20 %, RAM 98 % und hohe Auslagerungsaktivität. Welche Maßnahme ist am sinnvollsten?",
      options: ["Arbeitsspeicher erweitern und speicherhungrige Prozesse prüfen", "eine schnellere CPU einbauen", "die Netzwerkkarte auf 10 Gbit/s aufrüsten", "den RAM-Schwellwert auf 100 % setzen"], answer: 0,
      explain: "Der Engpass ist der RAM: Weil er voll ist, lagert das System auf die Platte aus, was alles verlangsamt. Die CPU ist kaum ausgelastet, das Netz nicht betroffen. Einen Schwellwert hochzusetzen, verschleiert nur das Problem." },
    { id: "q-ps-1", topic: "powershell", type: "single", exam: ["AP2"],
      q: "Mit welchem Ausdruck prüfst du in PowerShell, ob <code>$a</code> größer als 10 ist?",
      options: ["<code>$a -gt 10</code>", "<code>$a &gt; 10</code>", "<code>$a -ge 10</code>", "<code>$a =&gt; 10</code>"], answer: 0,
      explain: "PowerShell nutzt Vergleichsoperatoren mit Bindestrich: -gt = greater than. -ge bedeutet „größer oder gleich“. &gt; ist eine Umleitung in eine Datei, =&gt; gibt es nicht." },
    { id: "q-ps-2", topic: "powershell", type: "multi", exam: ["AP2"],
      q: "Welche Aussagen zur PowerShell-Pipeline treffen zu?",
      options: ["Zwischen den Cmdlets werden Objekte mit Eigenschaften übergeben.", "Das aktuelle Objekt ist in <code>$_</code> erreichbar.", "Die Pipeline überträgt ausschließlich Text, wie in der Bash.", "<code>Where-Object</code> sortiert Objekte nach einer Eigenschaft."], answer: [0, 1],
      explain: "PowerShell reicht .NET-Objekte weiter, auf deren Eigenschaften man direkt zugreift (z. B. <code>$_.Status</code>). Where-Object filtert, sortiert wird mit Sort-Object." },
    { id: "q-ps-3", topic: "powershell", type: "input", exam: ["AP2"],
      q: "Welche Zahl gibt dieses Skript aus?<br><code>$summe = 0</code><br><code>foreach ($i in 1..4) { $summe = $summe + $i }</code><br><code>Write-Host $summe</code>",
      answer: ["10"],
      explain: "1..4 erzeugt die Zahlen 1, 2, 3, 4. Die Schleife addiert sie: 0 + 1 + 2 + 3 + 4 = 10." },
    { id: "q-ps-4", topic: "powershell", type: "single", exam: ["AP2"],
      q: "Welches Cmdlet liest eine CSV-Datei so ein, dass jede Zeile als Objekt mit den Spaltennamen als Eigenschaften vorliegt?",
      options: ["<code>Import-Csv</code>", "<code>Export-Csv</code>", "<code>Get-Content</code>", "<code>Out-File</code>"], answer: 0,
      explain: "Import-Csv erzeugt Objekte, z. B. mit $_.Vorname. Export-Csv schreibt Objekte in eine CSV-Datei, Get-Content liest nur Textzeilen, Out-File schreibt Text in eine Datei." },
    { id: "q-ps-5", topic: "powershell", type: "tf", exam: ["AP2"],
      q: "Der Parameter <code>-WhatIf</code> zeigt an, was ein Cmdlet wie <code>Remove-Item</code> tun würde, ohne es tatsächlich auszuführen.",
      answer: true,
      explain: "Richtig. -WhatIf ist ideal, um gefährliche Befehle wie Löschvorgänge vorher gefahrlos zu testen. -Confirm fragt stattdessen vor jeder Aktion nach." },
    { id: "q-ps-6", topic: "powershell", type: "single", exam: ["AP2"],
      q: "Welche Ausführungsrichtlinie ist auf Windows Server standardmäßig gesetzt?",
      options: ["RemoteSigned", "Restricted", "Unrestricted", "AllSigned"], answer: 0,
      explain: "Auf Windows Server ist RemoteSigned Standard: Lokale Skripte laufen, aus dem Internet geladene nur mit Signatur. Auf Windows-Clients ist Restricted Standard." },
    { id: "q-bh-1", topic: "bash", type: "single", exam: ["AP2"],
      q: "Was enthält die Variable <code>$#</code> in einem Bash-Skript?",
      options: ["die Anzahl der übergebenen Parameter", "den Rückgabewert des letzten Befehls", "den Namen des Skripts", "den ersten Parameter"], answer: 0,
      explain: "$# = Anzahl der Parameter, $? = Rückgabewert des letzten Befehls, $0 = Skriptname, $1 = erster Parameter." },
    { id: "q-bh-2", topic: "bash", type: "single", exam: ["AP2"],
      q: "Wann läuft der cron-Eintrag <code>30 2 * * 1-5 /usr/local/bin/backup.sh</code>?",
      options: ["Montag bis Freitag um 02:30 Uhr", "täglich um 00:30 Uhr am 2. des Monats", "vom 1. bis 5. jedes Monats um 02:30 Uhr", "jeden Monat von Januar bis Mai um 02:30 Uhr"], answer: 0,
      explain: "Reihenfolge der Felder: Minute (30), Stunde (2), Tag im Monat (*), Monat (*), Wochentag (1–5 = Montag bis Freitag)." },
    { id: "q-bh-3", topic: "bash", type: "multi", exam: ["AP2"],
      q: "Welche Zeilen sind in der Bash syntaktisch korrekt?",
      options: ['<code>NAME="srv01"</code>', '<code>if [ "$A" -gt 5 ]; then</code>', '<code>NAME = "srv01"</code>', '<code>if ["$A" -gt 5]; then</code>'], answer: [0, 1],
      explain: "Bei Zuweisungen darf um das = kein Leerzeichen stehen, sonst hält die Bash NAME für einen Befehl. Innerhalb von [ ] sind Leerzeichen nach [ und vor ] Pflicht, weil [ selbst ein Befehl ist." },
    { id: "q-bh-4", topic: "bash", type: "input", exam: ["AP2"],
      q: "Wie lauten die fünf Zeitfelder eines cron-Eintrags für „jeden Sonntag um 04:00 Uhr“?",
      answer: ["0 4 * * 0", "0 4 * * 7", "00 04 * * 0", "00 04 * * 7", "0 04 * * 0", "0 04 * * 7", "00 4 * * 0", "00 4 * * 7", "0 4 * * sun"],
      explain: "Minute 0, Stunde 4, jeder Tag im Monat (*), jeder Monat (*), Wochentag 0 (oder 7) = Sonntag → <code>0 4 * * 0</code>." },
    { id: "q-bh-5", topic: "bash", type: "tf", exam: ["AP2"],
      q: "Der Rückgabewert (Exit-Code) 0 bedeutet in der Bash, dass der letzte Befehl erfolgreich war.",
      answer: true,
      explain: "Richtig. 0 steht für Erfolg, jeder andere Wert (1–255) für einen Fehler. Abfragen kannst du ihn mit <code>$?</code>." },
    { id: "q-bh-6", topic: "bash", type: "single", exam: ["AP2"],
      q: "Was bedeutet „idempotent“ bei Automatisierungswerkzeugen wie Ansible?",
      options: ["Mehrfaches Ausführen führt immer zum selben Zielzustand, ohne unnötige Änderungen.", "Auf jedem Zielsystem muss ein eigener Agent installiert sein.", "Bei jeder Ausführung werden alle Pakete neu installiert.", "Ein Playbook kann nur ein einziges Mal ausgeführt werden."], answer: 0,
      explain: "Idempotente Aufgaben prüfen zuerst den Ist-Zustand und ändern nur, was vom Soll abweicht. Ansible arbeitet zudem agentenlos über SSH." },
    { id: "q-bh-7", topic: "bash", type: "single", exam: ["AP2"],
      q: "Was bewirkt <code>./backup.sh &gt;&gt; /var/log/backup.log 2&gt;&amp;1</code>?",
      options: ["Normale Ausgaben und Fehlermeldungen werden an die Logdatei angehängt.", "Die Logdatei wird bei jedem Lauf überschrieben, Fehler erscheinen am Bildschirm.", "Nur Fehlermeldungen werden in die Logdatei geschrieben.", "Das Skript wird zweimal hintereinander ausgeführt."], answer: 0,
      explain: "&gt;&gt; hängt die Standardausgabe an die Datei an, 2&gt;&amp;1 leitet die Fehlerausgabe (Kanal 2) an dasselbe Ziel wie die Standardausgabe (Kanal 1) um. Ein einfaches &gt; würde überschreiben." },
    { id: "q-mo-8", topic: "monitoring", type: "single", exam: ["AP2"],
      q: "Welche USV-Klasse versorgt die Last dauerhaft über den Wechselrichter und arbeitet ohne Umschaltzeit?",
      options: ["VFI (Online/Doppelwandler)", "VFD (Offline/Standby)", "VI (Line-Interactive)"], answer: 0,
      explain: "Bei VFI wird die Netzspannung ständig gleichgerichtet und neu erzeugt – die Last ist unabhängig von Spannung und Frequenz des Netzes. VFD schaltet erst bei Netzausfall um, VI regelt zusätzlich nur die Spannung." },
    { id: "q-mo-9", topic: "monitoring", type: "input", exam: ["AP2"],
      q: "Die angeschlossenen Geräte haben zusammen 1.800 W Wirkleistung, cos φ = 0,9. Wie groß ist die Scheinleistung in VA (ohne Reserve)?",
      answer: ["2000", "2.000", "2000 VA", "2.000 VA"],
      explain: "S = P ÷ cos φ = 1.800 W ÷ 0,9 = 2.000 VA. Für die Auswahl der USV kommt meist noch eine Reserve (z. B. 20 %) hinzu." },
    { id: "q-mo-10", topic: "monitoring", type: "single", exam: ["AP2"],
      q: "In welcher Phase der Badewannenkurve ist die Ausfallrate niedrig und annähernd konstant?",
      options: ["in der mittleren Nutzungsphase mit Zufallsausfällen", "in der Phase der Frühausfälle", "in der Phase der Verschleißausfälle"], answer: 0,
      explain: "Am Anfang fallen fehlerhafte Geräte früh aus (hohe, sinkende Rate), am Ende steigt die Rate durch Verschleiß. Dazwischen liegt die lange Phase mit niedriger, zufälliger Ausfallrate." },
    { id: "q-mo-11", topic: "monitoring", type: "tf", exam: ["AP2"],
      q: "Die jährliche Ausfallrate (AFR) lässt sich näherungsweise mit 8.760 h ÷ MTBF abschätzen.",
      answer: true,
      explain: "Richtig. Beispiel: MTBF 1.000.000 h → AFR ≈ 8.760 ÷ 1.000.000 = 0,876 % – von 1.000 Platten fallen also rund 9 pro Jahr aus. Die Näherung gilt für kleine Ausfallraten." },
    { id: "q-mo-12", topic: "monitoring", type: "input", exam: ["AP2"],
      q: "Die Komponenten eines Servers benötigen zusammen 500 W. Mit 20 % Reserve: Welche Nennleistung muss das Netzteil mindestens haben (in W)?",
      answer: ["600", "600 W", "600W"],
      explain: "500 W × 1,2 = 600 W. Die Nennleistung eines Netzteils bezieht sich auf die Ausgangsleistung. Wie viel es aus dem Netz aufnimmt, berechnest du mit P_in = P_out ÷ η." },
    { id: "q-cl-7", topic: "cloud", type: "single", exam: ["AP2"],
      q: "Ein Load Balancer schickt neue Anfragen immer an den Server mit den wenigsten aktiven Verbindungen. Wie heißt dieses Verfahren?",
      options: ["Least Connections", "Round Robin", "Blue-Green", "Failover"], answer: 0,
      explain: "Least Connections berücksichtigt die aktuelle Last. Round Robin verteilt stur der Reihe nach. Blue-Green ist eine Deployment-Strategie, Failover die Übernahme durch einen Reserveknoten." },
    { id: "q-cl-8", topic: "cloud", type: "multi", exam: ["AP2"],
      q: "Welche Aussagen zum Blue-Green-Deployment treffen zu?",
      options: ["Die neue Version wird parallel in einer zweiten Umgebung bereitgestellt.", "Bei Fehlern kann schnell auf die bisherige Umgebung zurückgeschaltet werden.", "Die alte Version wird vor dem Test der neuen gelöscht.", "Es wird nur eine einzige Umgebung benötigt."], answer: [0, 1],
      explain: "Blue (alt) läuft weiter, Green (neu) wird aufgebaut und getestet, dann wird der Verkehr umgeschaltet. Die alte Umgebung bleibt als Rückfallebene erhalten – dafür braucht man zeitweise doppelte Ressourcen." },
    { id: "q-cl-9", topic: "cloud", type: "tf", exam: ["AP2"],
      q: "In einem Aktiv/Passiv-Cluster verarbeiten alle Knoten gleichzeitig Anfragen.",
      answer: false,
      explain: "Falsch. Das beschreibt Aktiv/Aktiv. Bei Aktiv/Passiv arbeitet nur ein Knoten, der passive übernimmt erst beim Ausfall (Failover)." },
    { id: "q-bs-7", topic: "betriebssysteme", type: "single", exam: ["AP2"],
      q: "Ein Lizenz-Audit des Herstellers stellt fest, dass mehr Installationen als Lizenzen vorhanden sind. Was ist die typische Folge?",
      options: ["Nachlizenzierung und gegebenenfalls Nachzahlungs- oder Schadensersatzforderungen", "Die überzähligen Installationen gelten nachträglich als Freeware.", "Die Software wird automatisch unter eine Open-Source-Lizenz gestellt.", "Der Hersteller muss bereits gezahlte Lizenzkosten erstatten."], answer: 0,
      explain: "Unterlizenzierung ist eine Urheberrechtsverletzung. Das Unternehmen muss nachlizenzieren und oft zusätzlich zahlen. Deshalb gehören Inventarisierung und Soll-Ist-Abgleich zum Lizenzmanagement." },
    { id: "q-ad-8", topic: "active-directory", type: "single", exam: ["AP1", "AP2"],
      q: "Welche Voraussetzung muss ein Windows-Client für den Beitritt zu einer AD-Domäne erfüllen?",
      options: ["Er muss einen DNS-Server nutzen, der die SRV-Records der Domäne kennt – in der Regel den internen DNS-Server auf dem DC.", "Er muss eine feste IP-Adresse haben.", "Er muss sich im selben Subnetz wie der Domänencontroller befinden.", "Auf ihm muss Windows Server Core installiert sein."], answer: 0,
      explain: "Der Client findet den DC über SRV-Records im DNS. Eine DHCP-Adresse ist kein Problem, und über Router hinweg funktioniert der Beitritt ebenfalls. Außerdem braucht man ein Konto mit Beitrittsrecht." },
    { id: "q-vi-7", topic: "virtualisierung", type: "single", exam: ["AP2"],
      q: "Bei welcher Migrationsmethode laufen das alte und das neue System eine Zeit lang gleichzeitig produktiv?",
      options: ["Parallelbetrieb", "Stichtagsumstellung (Big Bang)", "Live-Migration", "Snapshot-Rücksprung"], answer: 0,
      explain: "Beim Parallelbetrieb kann man Ergebnisse vergleichen und notfalls zurück – dafür doppelter Aufwand. Beim Stichtag wird auf einmal umgestellt. Live-Migration verschiebt nur eine laufende VM zwischen Hosts." },
    { id: "q-sa-1", topic: "skripte-analyse", type: "single", exam: ["AP2"],
      q: "Ein Skript startet ohne Fehlermeldung und läuft vollständig durch, liefert aber eine falsche Summe. Um welche Fehlerart handelt es sich?",
      options: ["Logischer (semantischer) Fehler", "Syntaxfehler", "Laufzeitfehler", "Hardwarefehler"], answer: 0,
      explain: "Ein Logikfehler lässt das Programm normal laufen, das Ergebnis ist aber falsch (z. B. Off-by-one oder falscher Vergleich). Ein Syntaxfehler verhindert schon den Start, ein Laufzeitfehler führt zum Abbruch während der Ausführung." },
    { id: "q-sa-2", topic: "skripte-analyse", type: "input", exam: ["AP2"],
      q: "Welchen Wert liefert der Ausdruck <code>23 mod 4</code>?",
      answer: ["3"],
      explain: "23 ÷ 4 = 5 Rest 3. Modulo liefert den Rest der ganzzahligen Division, also 3. Die ganzzahlige Division (23 div 4) ergäbe 5." },
    { id: "q-sa-3", topic: "skripte-analyse", type: "input", exam: ["AP2"],
      q: "Welche Zahl gibt dieses PowerShell-Skript aus?<br><code>$z = 0</code><br><code>foreach ($i in 1..6) { if ($i % 2 -eq 0) { $z = $z + $i } }</code><br><code>Write-Host $z</code>",
      answer: ["12"],
      explain: "Die Bedingung $i % 2 -eq 0 ist nur für gerade Zahlen wahr. Addiert werden also 2 + 4 + 6 = 12. Die ungeraden Zahlen 1, 3 und 5 werden übersprungen." },
    { id: "q-sa-4", topic: "skripte-analyse", type: "single", exam: ["AP2"],
      q: "Ein Skript soll ab einer Belegung von 90 % (also bei 90 % und mehr) warnen. Welches Paar von Testwerten prüft die Grenze am genauesten?",
      options: ["89 und 90", "50 und 100", "0 und 45", "95 und 99"], answer: 0,
      explain: "Grenzwerttests prüfen den Wert direkt an und unmittelbar vor der Grenze: 89 darf keine Warnung auslösen, 90 muss eine auslösen. So fällt z. B. ein falsches &gt; statt &gt;= sofort auf. Die anderen Paare liegen weit von der Grenze entfernt." },
    { id: "q-sa-5", topic: "skripte-analyse", type: "single", exam: ["AP2"],
      q: "Ein Array hat 5 Elemente, die Indizes beginnen bei 0. Welche Schleife verarbeitet jedes Element genau einmal?",
      options: ["für i = 0 bis 4", "für i = 0 bis 5", "für i = 1 bis 5", "für i = 1 bis 4"], answer: 0,
      explain: "Die gültigen Indizes sind 0, 1, 2, 3 und 4. „0 bis 5“ greift auf einen nicht vorhandenen Index zu (Off-by-one, Laufzeitfehler), „1 bis 5“ überspringt das erste Element und greift ebenfalls zu weit, „1 bis 4“ lässt das erste Element aus." },
    { id: "q-sa-6", topic: "skripte-analyse", type: "single", exam: ["AP2"],
      q: "Warum sollte ein automatisiert laufendes Skript bei einem Fehler einen Exit-Code ungleich 0 zurückgeben?",
      options: ["Damit Aufgabenplanung, cron-Auswertung oder Monitoring den Fehlschlag erkennen und melden können.", "Damit das Skript schneller ausgeführt wird.", "Damit das Skript automatisch mit Administratorrechten neu startet.", "Weil sonst die Logdatei gelöscht wird."], answer: 0,
      explain: "Der Exit-Code ist die standardisierte Rückmeldung an den Aufrufer: 0 = Erfolg, alles andere = Fehler. Nur so können Planungsdienste und Monitoring automatisch alarmieren. Auf Geschwindigkeit, Rechte oder Logdateien hat er keinen Einfluss." },
    { id: "q-sa-7", topic: "skripte-analyse", type: "tf", exam: ["AP2"],
      q: "PowerShell, Bash und Python sind interpretierte Sprachen: Ein geändertes Skript kann ohne vorheriges Kompilieren durch den Entwickler sofort ausgeführt werden.",
      answer: true,
      explain: "Richtig. Ein Interpreter führt den Quelltext direkt aus. Das macht Skripte schnell änderbar, sie laufen aber meist langsamer als kompilierte Programme (z. B. C oder Go)." },
    { id: "q-lx-7", topic: "linux", type: "single", exam: ["AP2"],
      q: "Was passiert mit einem symbolischen Link, wenn seine Zieldatei gelöscht wird?",
      options: ["Er zeigt ins Leere und ist nicht mehr nutzbar (broken link).", "Er enthält weiterhin die Daten der gelöschten Datei.", "Er wird vom System automatisch mitgelöscht.", "Die Zieldatei wird aus dem Link wiederhergestellt."], answer: 0,
      explain: "Ein symbolischer Link speichert nur den Pfad zum Ziel. Fehlt das Ziel, verweist er ins Leere. Dass die Daten erhalten bleiben, gilt für einen Hardlink – er ist ein weiterer Name für dieselben Daten (Inode)." },
    { id: "q-lx-8", topic: "linux", type: "single", exam: ["AP2"],
      q: "Benutzerin anna hat das Heimatverzeichnis /home/anna. Was gibt <code>echo 'Pfad: $HOME'</code> aus?",
      options: ["Pfad: $HOME", "Pfad: /home/anna", "Pfad: HOME", "eine Fehlermeldung"], answer: 0,
      explain: "In einfachen Anführungszeichen ersetzt die Bash keine Variablen, der Text bleibt wörtlich. Mit doppelten Anführungszeichen (\"Pfad: $HOME\") würde /home/anna eingesetzt." },
    { id: "q-dd-9", topic: "dhcp-dns", type: "single", exam: ["AP1", "AP2"],
      q: "<code>ping 192.168.50.12</code> ist erfolgreich, <code>ping www.nordlicht-it.de</code> meldet dagegen, der Host sei unbekannt. Wo liegt der Fehler am wahrscheinlichsten?",
      options: ["bei der Namensauflösung (DNS)", "an der Netzwerkkarte des Clients", "am Standardgateway", "an der DHCP-Leasedauer"], answer: 0,
      explain: "Da die IP-Adresse erreichbar ist, funktionieren Netzwerkkarte, Verkabelung und Routing. Nur die Übersetzung Name → IP klappt nicht. Prüfe den DNS-Server in ipconfig /all und teste mit nslookup, ob der A-Record existiert." },
    { id: "q-sd-7", topic: "serverdienste", type: "single", exam: ["AP2"],
      q: "Ein Reverse Proxy antwortet mit dem HTTP-Statuscode 502 (Bad Gateway). Was bedeutet das?",
      options: ["Der Proxy erreicht den dahinterliegenden Anwendungsserver nicht oder erhält von ihm keine gültige Antwort.", "Der Client hat keine Berechtigung für die Seite.", "Die Seite wurde dauerhaft an eine neue Adresse verschoben.", "Die Anfrage wurde erfolgreich bearbeitet."], answer: 0,
      explain: "5xx-Codes sind Serverfehler. 502 entsteht typischerweise, wenn das Backend hinter dem Proxy gestoppt ist oder falsch antwortet. 403 wäre „verboten“, 301 eine dauerhafte Umleitung, 200 Erfolg." },
    { id: "q-ad-9", topic: "active-directory", type: "tf", exam: ["AP1", "AP2"],
      q: "In einer Arbeitsgruppe werden die Benutzerkonten zentral auf einem Server verwaltet.",
      answer: false,
      explain: "Falsch. In einer Arbeitsgruppe hat jeder PC seine eigenen lokalen Konten. Zentral verwaltete Konten, Gruppenrichtlinien und eine einmalige Anmeldung an allen Geräten bietet erst eine Domäne mit Domänencontroller." },
    { id: "q-bs-8", topic: "betriebssysteme", type: "single", exam: ["AP2"],
      q: "Bei welchem Lizenzmodell zählt ein Lizenzserver die gleichzeitig aktiven Nutzer einer Software?",
      options: ["Floating- bzw. Concurrent-Lizenz", "OEM-Lizenz", "Device-CAL", "GPL"], answer: 0,
      explain: "Bei Floating-Lizenzen verwaltet ein Lizenzserver einen Pool. Es dürfen so viele Personen gleichzeitig arbeiten, wie Lizenzen im Pool sind. Eine OEM-Lizenz ist an ein Gerät gebunden, eine Device-CAL erlaubt einem Gerät den Serverzugriff, die GPL ist eine Open-Source-Lizenz." },
    { id: "q-bs-9", topic: "betriebssysteme", type: "input", exam: ["AP2"],
      q: "Eine Software kostet im Abo 15 € pro Benutzer und Monat. Wie viel Euro kostet sie für 10 Benutzer über 3 Jahre?",
      answer: ["5400", "5.400", "5400 €", "5.400 €", "5400 Euro", "5.400 Euro"],
      explain: "3 Jahre = 36 Monate → 15 € × 10 × 36 = 5.400 €." },
    { id: "q-bs-10", topic: "betriebssysteme", type: "single", exam: ["AP2"],
      q: "In welcher Reihenfolge verteilst du Updates beim Staging?",
      options: ["Testumgebung → Pilotgruppe → Produktion", "Produktion → Pilotgruppe → Testumgebung", "Pilotgruppe → Produktion → Testumgebung", "alle Systeme gleichzeitig, danach Test"], answer: 0,
      explain: "Erst in einer Testumgebung prüfen, dann auf wenigen Pilotsystemen im Echtbetrieb beobachten und erst danach breit ausrollen. So treffen Fehler nicht sofort alle Systeme." },
    { id: "q-mo-13", topic: "monitoring", type: "single", exam: ["AP2"],
      q: "Welche Geräte überwachst du typischerweise agentenlos, z. B. per SNMP?",
      options: ["Switches und USVs, auf denen man keine Zusatzsoftware installieren kann", "Windows-Server, auf denen detaillierte Prozessdaten gebraucht werden", "nur virtuelle Maschinen", "ausschließlich Cloud-Dienste"], answer: 0,
      explain: "Netzwerkgeräte, Drucker und USVs bringen SNMP mit, eigene Agents lassen sich dort nicht installieren. Für Server mit vielen Details (Dienste, Logs, Prozesse) nutzt man oft einen Agent." },
    { id: "q-ps-7", topic: "powershell", type: "single", exam: ["AP2"],
      q: "Was gibt <code>1..3 | ForEach-Object { $_ * 2 }</code> aus?",
      options: ["die Zahlen 2, 4 und 6 (je eine pro Zeile)", "die Zahlen 1, 2 und 3", "nur die Zahl 6", "die Zahlen 2, 3 und 4"], answer: 0,
      explain: "1..3 erzeugt 1, 2, 3. ForEach-Object verarbeitet jedes Objekt der Pipeline einzeln, $_ ist das aktuelle Objekt. Jede Zahl wird verdoppelt: 2, 4, 6." },
    { id: "q-bh-8", topic: "bash", type: "input", exam: ["AP2"],
      q: "Welche Zahl gibt dieses Bash-Skript aus?<br><code>Z=1; S=0</code><br><code>while [ $Z -lt 4 ]; do S=$((S + Z)); Z=$((Z + 1)); done</code><br><code>echo $S</code>",
      answer: ["6"],
      explain: "Die Schleife läuft, solange Z kleiner als 4 ist, also für Z = 1, 2 und 3: S = 1 + 2 + 3 = 6. Bei Z = 4 ist -lt 4 falsch, die Schleife endet. Mit -le wäre das Ergebnis 10." },
  ],
  cards: [
    { topic: "serverdienste", f: "SMTP-Ports 25 / 587 / 465", b: "25: Mailtransport zwischen Servern · 587: Einlieferung vom Client mit STARTTLS · 465: Einlieferung mit direktem TLS" },
    { topic: "serverdienste", f: "IMAP vs. POP3", b: "IMAP: Mails bleiben auf dem Server, Geräte werden synchronisiert (143/993).<br>POP3: Mails herunterladen, meist auf dem Server löschen (110/995)." },
    { topic: "serverdienste", f: "MUA – MTA – MDA", b: "Mailprogramm – Transport zwischen Servern per SMTP – Zustellung ins Postfach" },
    { topic: "serverdienste", f: "Reverse Proxy", b: "nimmt Anfragen stellvertretend für interne Server an, übernimmt oft TLS und Lastverteilung (z. B. nginx)" },
    { topic: "serverdienste", f: "NTP", b: "Zeitsynchronisation über UDP 123, hierarchisch in Stratum-Ebenen (Stratum 0 = Referenzuhr)" },
    { topic: "serverdienste", f: "SPF, DKIM, DMARC", b: "TXT-Records gegen Mail-Spoofing: erlaubte Absenderserver – Signaturschlüssel – Richtlinie bei Fehlschlag" },
    { topic: "dhcp-dns", f: "DORA", b: "Discover – Offer – Request – Acknowledge (DHCP, Server UDP 67, Client UDP 68)" },
    { topic: "dhcp-dns", f: "DHCP-Reservierung", b: "feste Zuordnung MAC-Adresse → IP-Adresse auf dem DHCP-Server. Das Gerät bleibt auf DHCP eingestellt." },
    { topic: "dhcp-dns", f: "<code>ip helper-address</code>", b: "richtet auf einem Cisco-Router-Interface einen DHCP-Relay-Agent ein: Broadcast → Unicast an den DHCP-Server" },
    { topic: "dhcp-dns", f: "APIPA", b: "Adresse aus 169.254.0.0/16, die sich ein Client selbst gibt, wenn kein DHCP-Server antwortet" },
    { topic: "dhcp-dns", f: "A / AAAA / PTR", b: "Name → IPv4 / Name → IPv6 / IP → Name (Reverse-Zone)" },
    { topic: "dhcp-dns", f: "Reverse-Zone für 192.168.50.0/24", b: "<code>50.168.192.in-addr.arpa</code>" },
    { topic: "dhcp-dns", f: "DNS: rekursiv vs. iterativ", b: "Rekursiv: Client will vom Resolver eine fertige Antwort.<br>Iterativ: Resolver fragt Root → TLD → autoritativen Server." },
    { topic: "dhcp-dns", f: "SOA-Record", b: "Start of Authority: primärer Nameserver, Seriennummer und Zeitwerte der Zone" },
    { topic: "betriebssysteme", f: "Kernlizenzen Windows Server", b: "alle physischen Kerne, mind. 8 pro CPU und 16 pro Server. Standard: 2 VMs, Datacenter: beliebig viele" },
    { topic: "betriebssysteme", f: "User-CAL vs. Device-CAL", b: "User-CAL: pro Person, beliebig viele Geräte.<br>Device-CAL: pro Gerät, beliebig viele Personen." },
    { topic: "betriebssysteme", f: "FAT32-Grenze", b: "max. Dateigröße 4 GiB − 1 Byte, keine Rechte, kein Journal" },
    { topic: "betriebssysteme", f: "Server Core", b: "Windows Server ohne GUI: kleinere Angriffsfläche, weniger Updates, weniger Ressourcen" },
    { topic: "betriebssysteme", f: "Daemon", b: "Linux-Hintergrunddienst ohne Benutzeranmeldung, z. B. sshd. Gestartet von systemd (PID 1)." },
    { topic: "ntfs-rechte", f: "Effektive Rechte bei Netzwerkzugriff", b: "das restriktivere Ergebnis aus der Summe der Freigaberechte und der Summe der NTFS-Rechte" },
    { topic: "ntfs-rechte", f: "Rangfolge bei NTFS", b: "explizit verweigert → explizit zugelassen → vererbt verweigert → vererbt zugelassen" },
    { topic: "ntfs-rechte", f: "NTFS: Kopieren vs. Verschieben", b: "Kopie erbt die Rechte des Ziels. Verschieben im selben Volume behält die Rechte." },
    { topic: "linux-rechte", f: "rwx oktal", b: "r = 4, w = 2, x = 1 → <code>rwxr-x---</code> = 750" },
    { topic: "linux-rechte", f: "umask 022", b: "neue Dateien 644 (rw-r--r--), neue Verzeichnisse 755 (rwxr-xr-x)" },
    { topic: "linux-rechte", f: "SUID / SGID / Sticky Bit", b: "4 / 2 / 1 – mit Besitzerrechten ausführen / Gruppe im Verzeichnis erben / nur Besitzer darf löschen" },
    { topic: "linux-rechte", f: "<code>chown anna:vertrieb datei</code>", b: "setzt Besitzer anna und Gruppe vertrieb" },
    { topic: "active-directory", f: "AGDLP", b: "Accounts → Globale Gruppen → Domänenlokale Gruppen → Permissions" },
    { topic: "active-directory", f: "LSDOU", b: "GPO-Reihenfolge: Lokal → Standort → Domäne → OU. Die zuletzt angewandte GPO gewinnt (außer „Erzwungen“)." },
    { topic: "active-directory", f: "Gesamtstruktur (Forest)", b: "ein oder mehrere Domänenbäume mit gemeinsamem Schema und globalem Katalog – die Sicherheitsgrenze des AD" },
    { topic: "active-directory", f: "Kerberos: Port und Zeittoleranz", b: "Port 88. Die Uhren dürfen standardmäßig höchstens 5 Minuten abweichen." },
    { topic: "active-directory", f: "<code>gpresult /r</code>", b: "zeigt die wirksamen Gruppenrichtlinien für Benutzer und Computer" },
    { topic: "linux", f: "<code>/var/log</code>", b: "Logdateien, z. B. syslog bzw. messages, auth.log bzw. secure" },
    { topic: "linux", f: "<code>systemctl enable --now dienst</code>", b: "Autostart aktivieren und den Dienst sofort starten" },
    { topic: "linux", f: "<code>journalctl -u nginx -f</code>", b: "Log des Dienstes nginx live verfolgen" },
    { topic: "linux", f: "<code>usermod -aG gruppe benutzer</code>", b: "Benutzer zusätzlich in eine Gruppe aufnehmen (-a = anhängen, ohne -a werden Gruppen ersetzt)" },
    { topic: "linux", f: "<code>/etc/passwd</code> vs. <code>/etc/shadow</code>", b: "Kontodaten (für alle lesbar) vs. Passwort-Hashes (nur root)" },
    { topic: "virtualisierung", f: "Hypervisor Typ 1 vs. Typ 2", b: "Typ 1 direkt auf der Hardware (ESXi, Hyper-V, Proxmox VE).<br>Typ 2 auf einem Host-OS (VirtualBox, VMware Workstation)." },
    { topic: "virtualisierung", f: "Container vs. VM", b: "Container teilen den Host-Kernel (klein, schnell). VMs haben ein eigenes OS mit Kernel (stärkere Isolation)." },
    { topic: "virtualisierung", f: "N+1", b: "so viele Hosts, dass einer ausfallen kann und die übrigen die gesamte Last tragen" },
    { topic: "virtualisierung", f: "Live-Migration", b: "laufende VM ohne Unterbrechung auf einen anderen Host verschieben. Voraussetzungen: gemeinsamer Speicher (oder zusätzliche Speichermigration), kompatible CPUs, schnelles Migrationsnetz." },
    { topic: "cloud", f: "IaaS / PaaS / SaaS", b: "Infrastruktur (VM, Speicher) / Plattform (Laufzeit, Datenbank) / fertige Software" },
    { topic: "cloud", f: "Hybrid Cloud", b: "Kombination aus eigener (privater) Infrastruktur und Public Cloud" },
    { topic: "cloud", f: "Art. 28 DSGVO", b: "Auftragsverarbeitungsvertrag – Pflicht, wenn ein Dienstleister personenbezogene Daten im Auftrag verarbeitet" },
    { topic: "cloud", f: "Scale up vs. scale out", b: "vertikal: größere Maschine · horizontal: zusätzliche Instanzen hinter einem Load Balancer" },
    { topic: "raid-speicher", f: "RAID 5", b: "(n − 1) × C, mind. 3 Platten, verkraftet 1 Ausfall" },
    { topic: "raid-speicher", f: "RAID 6", b: "(n − 2) × C, mind. 4 Platten, verkraftet 2 beliebige Ausfälle" },
    { topic: "raid-speicher", f: "RAID 10", b: "n ÷ 2 × C, mind. 4 Platten, verkraftet sicher 1 Ausfall (bis zu einer Platte je Spiegelpaar)" },
    { topic: "raid-speicher", f: "NAS vs. SAN", b: "NAS: dateibasiert (SMB/NFS) über das LAN.<br>SAN: blockbasiert (iSCSI/Fibre Channel) im eigenen Speichernetz." },
    { topic: "raid-speicher", f: "Hot Spare", b: "Reserveplatte im System, die den Rebuild automatisch übernimmt. Zählt nicht zur Nutzkapazität." },
    { topic: "datensicherung", f: "Wiederherstellung bei inkrementeller Sicherung", b: "Vollsicherung + alle Inkremente danach (in Reihenfolge)" },
    { topic: "datensicherung", f: "Wiederherstellung bei differenzieller Sicherung", b: "Vollsicherung + letzte differenzielle Sicherung" },
    { topic: "datensicherung", f: "3-2-1-Regel", b: "3 Kopien, 2 verschiedene Medientypen, 1 Kopie außer Haus" },
    { topic: "datensicherung", f: "RPO / RTO", b: "maximal tolerierbarer Datenverlust (→ Sicherungsintervall) / maximal tolerierbare Ausfallzeit (→ Wiederanlauf)" },
    { topic: "datensicherung", f: "Generationenprinzip (GFS)", b: "Großvater – Vater – Sohn: Monats-, Wochen- und Tagessicherungen, die zyklisch überschrieben werden" },
    { topic: "monitoring", f: "SNMP-Ports", b: "UDP 161: Abfragen (GET/SET) am Agent · UDP 162: Traps an den Manager" },
    { topic: "monitoring", f: "Syslog-Schweregrade", b: "0 Emergency, 1 Alert, 2 Critical, 3 Error, 4 Warning, 5 Notice, 6 Informational, 7 Debug (UDP 514)" },
    { topic: "monitoring", f: "Verfügbarkeit", b: "A = MTBF ÷ (MTBF + MTTR). 99,9 % bedeuten max. 8,76 h Ausfall pro Jahr." },
    { topic: "monitoring", f: "Nagios-Rückgabewerte", b: "0 OK, 1 WARNING, 2 CRITICAL, 3 UNKNOWN" },
    { topic: "monitoring", f: "Ereignis-ID 4625", b: "fehlgeschlagene Anmeldung (Sicherheitsprotokoll der Ereignisanzeige)" },
    { topic: "powershell", f: "Cmdlet-Schema", b: "Verb-Nomen, z. B. <code>Get-Service</code>, <code>Restart-Service</code>" },
    { topic: "powershell", f: "<code>$_</code>", b: "das aktuelle Objekt in der PowerShell-Pipeline (auch <code>$PSItem</code>)" },
    { topic: "powershell", f: "<code>-eq -ne -gt -lt -like</code>", b: "PowerShell-Vergleiche: gleich, ungleich, größer, kleiner, Platzhaltervergleich" },
    { topic: "powershell", f: "<code>-WhatIf</code>", b: "zeigt, was ein Cmdlet tun würde, ohne es auszuführen" },
    { topic: "bash", f: "Shebang", b: "<code>#!/bin/bash</code> – erste Zeile eines Skripts, legt den Interpreter fest" },
    { topic: "bash", f: "<code>$?</code> in der Bash", b: "Rückgabewert des letzten Befehls, 0 = Erfolg" },
    { topic: "bash", f: "cron-Felder", b: "Minute, Stunde, Tag im Monat, Monat, Wochentag – z. B. <code>*/15 * * * *</code> = alle 15 Minuten" },
    { topic: "bash", f: "<code>2&gt;&amp;1</code>", b: "leitet die Fehlerausgabe auf dasselbe Ziel wie die Standardausgabe um" },
    { topic: "monitoring", f: "USV-Klassen VFD / VI / VFI", b: "Offline (schaltet bei Ausfall um) / Line-Interactive (regelt zusätzlich die Spannung) / Online-Doppelwandler (dauerhaft über Wechselrichter, keine Umschaltzeit)" },
    { topic: "monitoring", f: "Scheinleistung einer USV", b: "S [VA] = P [W] ÷ cos φ – plus Reserve. VA- und W-Angabe der USV müssen beide reichen." },
    { topic: "monitoring", f: "Netzteil dimensionieren", b: "Nennleistung ≥ Summe der Komponenten × 1,2 · Aufnahme aus dem Netz: P_in = P_out ÷ η" },
    { topic: "monitoring", f: "AFR und Badewannenkurve", b: "AFR ≈ 8.760 h ÷ MTBF · Frühausfälle → Zufallsausfälle (niedrig, konstant) → Verschleißausfälle" },
    { topic: "cloud", f: "Round Robin vs. Least Connections", b: "der Reihe nach verteilen vs. an den Server mit den wenigsten aktiven Verbindungen" },
    { topic: "cloud", f: "Blue-Green-Deployment", b: "neue Version parallel aufbauen und testen, Verkehr umschalten, bei Fehlern sofort zurück" },
    { topic: "cloud", f: "Aktiv/Aktiv vs. Aktiv/Passiv", b: "alle Knoten teilen sich die Last vs. Reserveknoten übernimmt erst beim Ausfall (Failover)" },
    { topic: "virtualisierung", f: "Migrationsmethoden", b: "Stichtag (Big Bang), Parallelbetrieb, stufenweise mit Pilot" },
    { topic: "bash", f: "PowerShell, Bash oder Python?", b: "PowerShell: Windows/AD · Bash: Linux-Shell · Python: plattformübergreifend, viele Bibliotheken" },
    { topic: "skripte-analyse", f: "Syntax- vs. Laufzeit- vs. Logikfehler", b: "startet nicht (Regelverstoß) / bricht bei bestimmten Daten ab (z. B. Division durch 0) / läuft, liefert aber falsches Ergebnis" },
    { topic: "skripte-analyse", f: "Off-by-one-Fehler", b: "Schleife läuft einmal zu oft oder zu wenig, z. B. 0 bis n statt 0 bis n − 1" },
    { topic: "skripte-analyse", f: "Modulo", b: "Rest der ganzzahligen Division: 17 mod 5 = 2 · gerade Zahl: x mod 2 = 0" },
    { topic: "skripte-analyse", f: "Schreibtischtest", b: "Code auf Papier Schritt für Schritt ausführen und die Variablenwerte in einer Trace-Tabelle notieren" },
    { topic: "skripte-analyse", f: "Black-Box- vs. White-Box-Test", b: "nur Ein-/Ausgaben mit Äquivalenzklassen und Grenzwerten vs. Code bekannt, jeder Zweig wird durchlaufen" },
    { topic: "skripte-analyse", f: "Automatisierung absichern", b: "loggen, Exit-Codes auswerten, Dienstkonto mit minimalen Rechten, vorher testen (-WhatIf, Pilot), in Git versionieren" },
    { topic: "linux", f: "Hardlink vs. symbolischer Link", b: "zweiter Name für dieselbe Inode (nur im selben Dateisystem) vs. Verweis auf einen Pfad (bricht, wenn das Ziel gelöscht wird)" },
    { topic: "linux", f: "<code>su -</code> vs. <code>sudo</code>", b: "dauerhaft root werden (root-Passwort) vs. einzelnen Befehl mit root-Rechten (eigenes Passwort, protokolliert)" },
    { topic: "serverdienste", f: "HTTP 301 / 404 / 502 / 503", b: "dauerhaft umgeleitet / nicht gefunden / Proxy erreicht Backend nicht / Dienst nicht verfügbar" },
    { topic: "active-directory", f: "Arbeitsgruppe vs. Domäne", b: "lokale Konten auf jedem PC vs. zentrale Konten, GPOs und Rechte über den Domänencontroller" },
    { topic: "betriebssysteme", f: "Floating-Lizenz", b: "Lizenzserver verwaltet einen Pool; gezählt werden gleichzeitig aktive Nutzer" },
    { topic: "betriebssysteme", f: "Patch-Staging", b: "Testumgebung → Pilotgruppe → Produktion, vorher Backup, danach kontrollieren und dokumentieren" },
    { topic: "betriebssysteme", f: "Windows Server 2016 – Supportende", b: "erweiterter Support endet am 12.01.2027 → danach keine Sicherheitsupdates, rechtzeitig migrieren" },
    { topic: "monitoring", f: "agentenbasiert vs. agentenlos", b: "Programm auf dem Zielsystem liefert Details vs. Abfrage über Standardprotokolle wie SNMP, WMI, SSH (z. B. Switches, USVs)" },
  ],
  checklist: [
    { id: "c-sd-1", topic: "serverdienste", text: "Ich kann den gängigen Serverdiensten (DHCP, DNS, HTTP/HTTPS, SMTP, IMAP, POP3, NTP, SMB, SSH, RDP) ihre Ports und typische Produkte zuordnen.", exam: ["AP2"] },
    { id: "c-sd-2", topic: "serverdienste", text: "Ich kann den Weg einer E-Mail über MUA, MTA und MDA beschreiben und POP3 mit IMAP vergleichen.", exam: ["AP1", "AP2"] },
    { id: "c-sd-3", topic: "serverdienste", text: "Ich kann Apache, nginx und IIS vergleichen und die Schritte zur Absicherung eines Webservers mit HTTPS nennen.", exam: ["AP2"] },
    { id: "c-sd-4", topic: "serverdienste", text: "Ich kann erklären, warum NTP für Kerberos, Zertifikate und Logs wichtig ist, und das Stratum-Prinzip beschreiben.", exam: ["AP2"] },
    { id: "c-dd-1", topic: "dhcp-dns", text: "Ich kann den DHCP-Ablauf (DORA) beschreiben und Bereiche, Ausschlüsse, Reservierungen und Optionen planen.", exam: ["AP1", "AP2"] },
    { id: "c-dd-2", topic: "dhcp-dns", text: "Ich kann erklären, warum über VLAN-Grenzen ein DHCP-Relay nötig ist, und es mit ip helper-address einrichten.", exam: ["AP2"] },
    { id: "c-dd-3", topic: "dhcp-dns", text: "Ich kann für ein Szenario die nötigen DNS-Records (A, AAAA, CNAME, MX, NS, PTR, TXT) angeben und den Namen einer Reverse-Zone bilden.", exam: ["AP2"] },
    { id: "c-dd-4", topic: "dhcp-dns", text: "Ich kann rekursive und iterative Namensauflösung unterscheiden und Fehler mit ipconfig und nslookup eingrenzen.", exam: ["AP2"] },
    { id: "c-bs-1", topic: "betriebssysteme", text: "Ich kann Kernel, Prozess, Thread und Dienst erklären und Windows Server mit Linux-Distributionen vergleichen.", exam: ["AP1", "AP2"] },
    { id: "c-bs-2", topic: "betriebssysteme", text: "Ich kann FAT32, exFAT, NTFS, ReFS, ext4 und XFS vergleichen und für ein Szenario begründet auswählen.", exam: ["AP1", "AP2"] },
    { id: "c-bs-3", topic: "betriebssysteme", text: "Ich kann die Anzahl der Kernlizenzen und CALs für Windows Server berechnen und Standard mit Datacenter vergleichen.", exam: ["AP2"] },
    { id: "c-nt-1", topic: "ntfs-rechte", text: "Ich kann für mehrere Benutzer die effektiven Rechte aus Freigabe- und NTFS-Rechten berechnen, auch mit Verweigern.", exam: ["AP2"] },
    { id: "c-nt-2", topic: "ntfs-rechte", text: "Ich kann Vererbung sowie das Verhalten von Rechten beim Kopieren und Verschieben erklären.", exam: ["AP2"] },
    { id: "c-lr-1", topic: "linux-rechte", text: "Ich kann Linux-Rechte zwischen symbolischer und oktaler Schreibweise umrechnen und eine ls -l-Zeile deuten.", exam: ["AP1", "AP2"] },
    { id: "c-lr-2", topic: "linux-rechte", text: "Ich kann mit chmod, chown und umask Rechte setzen und die Wirkung von SUID, SGID und Sticky Bit erklären.", exam: ["AP2"] },
    { id: "c-ad-1", topic: "active-directory", text: "Ich kann Domäne, Domänencontroller, Baum, Gesamtstruktur, OU und Standort unterscheiden.", exam: ["AP2"] },
    { id: "c-ad-2", topic: "active-directory", text: "Ich kann Gruppenbereiche (global, domänenlokal, universal) erklären und ein Berechtigungskonzept nach AGDLP entwerfen.", exam: ["AP2"] },
    { id: "c-ad-3", topic: "active-directory", text: "Ich kann die wirksame GPO-Einstellung nach LSDOU bestimmen – auch mit „Erzwungen“ und deaktivierter Vererbung.", exam: ["AP2"] },
    { id: "c-ad-4", topic: "active-directory", text: "Ich kann den Kerberos-Ablauf mit TGT und Dienstticket beschreiben und die Rolle von LDAP und DNS im AD erklären.", exam: ["AP2"] },
    { id: "c-lx-1", topic: "linux", text: "Ich kann die wichtigsten Verzeichnisse der FHS (/etc, /var, /home, /boot, /dev, /tmp …) und ihren Inhalt nennen.", exam: ["AP1", "AP2"] },
    { id: "c-lx-2", topic: "linux", text: "Ich kann Pakete mit apt bzw. dnf verwalten, Dienste mit systemctl steuern und Logs mit journalctl auswerten.", exam: ["AP2"] },
    { id: "c-lx-3", topic: "linux", text: "Ich kann Benutzer und Gruppen anlegen und SSH mit Schlüsseln sowie gehärteter sshd_config einrichten.", exam: ["AP2"] },
    { id: "c-vi-1", topic: "virtualisierung", text: "Ich kann Hypervisor Typ 1 und Typ 2 sowie VM und Container vergleichen und Produkte zuordnen.", exam: ["AP2"] },
    { id: "c-vi-2", topic: "virtualisierung", text: "Ich kann Snapshots, Live-Migration und HA-Cluster erklären und begründen, warum ein Snapshot kein Backup ist.", exam: ["AP2"] },
    { id: "c-vi-3", topic: "virtualisierung", text: "Ich kann RAM, vCPUs und die Anzahl der Hosts für eine Virtualisierungsumgebung inklusive N+1 berechnen.", exam: ["AP2"] },
    { id: "c-cl-1", topic: "cloud", text: "Ich kann IaaS, PaaS und SaaS mit Beispielen unterscheiden und die geteilte Verantwortung abgrenzen.", exam: ["AP1", "AP2"] },
    { id: "c-cl-2", topic: "cloud", text: "Ich kann Public, Private, Hybrid und Community Cloud unterscheiden und Datenschutzaspekte (AVV, Serverstandort) erläutern.", exam: ["AP1", "AP2"] },
    { id: "c-rd-1", topic: "raid-speicher", text: "Ich kann Nutzkapazität und Ausfalltoleranz von RAID 0, 1, 5, 6 und 10 berechnen – auch mit Hot Spare.", exam: ["AP2"] },
    { id: "c-rd-2", topic: "raid-speicher", text: "Ich kann DAS, NAS und SAN vergleichen und block- und dateibasierten Zugriff sowie iSCSI erklären.", exam: ["AP2"] },
    { id: "c-rd-3", topic: "raid-speicher", text: "Ich kann den künftigen Speicherbedarf mit Wachstum und Reserve berechnen und dabei TB in TiB umrechnen.", exam: ["AP2"] },
    { id: "c-ds-1", topic: "datensicherung", text: "Ich kann Voll-, inkrementelle und differenzielle Sicherung vergleichen und bestimmen, welche Sicherungen für eine Wiederherstellung nötig sind.", exam: ["AP1", "AP2"] },
    { id: "c-ds-2", topic: "datensicherung", text: "Ich kann ein Sicherungskonzept mit 3-2-1-Regel, Generationenprinzip und RPO/RTO entwerfen.", exam: ["AP2"] },
    { id: "c-ds-3", topic: "datensicherung", text: "Ich kann Backup- und Wiederherstellungsdauer aus Datenmenge und Datenrate berechnen.", exam: ["AP2"] },
    { id: "c-mo-1", topic: "monitoring", text: "Ich kann Messgrößen und Schwellwerte für Server festlegen und aus Monitoring-Werten Engpässe und Maßnahmen ableiten.", exam: ["AP2"] },
    { id: "c-mo-2", topic: "monitoring", text: "Ich kann SNMP (Manager, Agent, MIB, OID, Trap, Versionen), Syslog und die Ereignisanzeige erklären.", exam: ["AP2"] },
    { id: "c-mo-3", topic: "monitoring", text: "Ich kann Verfügbarkeiten mit MTBF/MTTR sowie für Reihen- und Parallelschaltung berechnen.", exam: ["AP2"] },
    { id: "c-ps-1", topic: "powershell", text: "Ich kann PowerShell-Skripte mit Variablen, Pipeline, if und foreach lesen, ihre Ausgabe angeben und Fehler korrigieren.", exam: ["AP2"] },
    { id: "c-ps-2", topic: "powershell", text: "Ich kann ein einfaches Admin-Skript (z. B. alte Logs löschen, Benutzer aus CSV anlegen) schreiben und zeitgesteuert ausführen.", exam: ["AP2"] },
    { id: "c-bh-1", topic: "bash", text: "Ich kann Bash-Skripte mit Shebang, Variablen, Parametern, if und for lesen und vervollständigen.", exam: ["AP2"] },
    { id: "c-bh-2", topic: "bash", text: "Ich kann cron-Einträge lesen und erstellen sowie Ausgaben und Fehler in Logdateien umleiten.", exam: ["AP2"] },
    { id: "c-mo-4", topic: "monitoring", text: "Ich kann die USV-Klassen VFD, VI und VFI unterscheiden und eine USV sowie ein Netzteil mit Leistungsfaktor, Wirkungsgrad und Reserve dimensionieren.", exam: ["AP2"] },
    { id: "c-mo-5", topic: "monitoring", text: "Ich kann MTBF, MTTR und AFR erklären und die Badewannenkurve deuten.", exam: ["AP2"] },
    { id: "c-cl-3", topic: "cloud", text: "Ich kann horizontale und vertikale Skalierung, Load Balancing (Round Robin, Least Connections, Health Check), Aktiv/Aktiv- und Aktiv/Passiv-Cluster sowie Blue-Green-Deployment erklären.", exam: ["AP2"] },
    { id: "c-bs-4", topic: "betriebssysteme", text: "Ich kann einen Patch-Management-Prozess beschreiben und Aufgaben des Lizenzmanagements bis zum Lizenz-Audit nennen.", exam: ["AP2"] },
    { id: "c-vi-4", topic: "virtualisierung", text: "Ich kann Migrationsmethoden (Stichtag, Parallelbetrieb, stufenweise) vergleichen und die Dauer einer Datenübernahme berechnen.", exam: ["AP2"] },
    { id: "c-bh-3", topic: "bash", text: "Ich kann begründen, wann ich PowerShell, Bash oder Python für eine Automatisierung einsetze.", exam: ["AP2"] },
    { id: "c-sa-1", topic: "skripte-analyse", text: "Ich kann die Ausgabe eines Skripts oder Pseudocodes mit einer Trace-Tabelle (Schreibtischtest) bestimmen.", exam: ["AP2"] },
    { id: "c-sa-2", topic: "skripte-analyse", text: "Ich kann Syntax-, Laufzeit- und Logikfehler (z. B. Off-by-one, falscher Vergleich, fehlende Initialisierung, Modulo statt Division) unterscheiden und korrigieren.", exam: ["AP2"] },
    { id: "c-sa-3", topic: "skripte-analyse", text: "Ich kann Testfälle mit Äquivalenzklassen und Grenzwerten für ein Skript angeben und Maßnahmen für eine sichere Automatisierung (Logging, Exit-Codes, Rechte, Pilot, Versionierung) nennen.", exam: ["AP2"] },
    { id: "c-sa-4", topic: "skripte-analyse", text: "Ich kann einen Administrationsablauf mit Schleife und Verzweigung in Pseudocode formulieren.", exam: ["AP2"] },
    { id: "c-ad-5", topic: "active-directory", text: "Ich kann Arbeitsgruppe und Domäne vergleichen und die Voraussetzungen für einen Domänenbeitritt nennen.", exam: ["AP1", "AP2"] },
    { id: "c-lx-4", topic: "linux", text: "Ich kann Platzhalter und Anführungszeichen in der Shell richtig einsetzen, Hardlinks von symbolischen Links unterscheiden und su von sudo abgrenzen.", exam: ["AP2"] },
    { id: "c-bs-5", topic: "betriebssysteme", text: "Ich kann Lizenzmodelle (Kauf, Abo, Pay-per-Use, Volumen, OEM, Floating) unterscheiden und Kauf und Abo über eine Laufzeit inklusive Break-even vergleichen.", exam: ["AP2"] },
    { id: "c-bs-6", topic: "betriebssysteme", text: "Ich kann den Lebenszyklus (Supportende) von Betriebssystemen bewerten und Handlungsoptionen wie Migration oder Extended Security Updates ableiten.", exam: ["AP2"] },
    { id: "c-dd-5", topic: "dhcp-dns", text: "Ich kann typische DHCP- und DNS-Fehlerbilder (APIPA-Adresse, Name nicht auflösbar, veralteter Cache, falscher DNS-Server) einer Ursache zuordnen.", exam: ["AP1", "AP2"] },
    { id: "c-mo-6", topic: "monitoring", text: "Ich kann agentenbasiertes und agentenloses Monitoring unterscheiden und Datenschutz sowie die Mitbestimmung des Betriebsrats beim Monitoring berücksichtigen.", exam: ["AP2"] },
    { id: "c-vi-5", topic: "virtualisierung", text: "Ich kann VDI im eigenen Rechenzentrum und DaaS aus der Cloud unterscheiden und persistente von nicht persistenten Desktops abgrenzen.", exam: ["AP1", "AP2"] },
  ],
  glossary: [
    { term: "Active Directory (AD DS)", def: "Verzeichnisdienst von Windows Server, der Benutzer, Gruppen, Computer und Richtlinien einer Domäne zentral speichert und die Anmeldung steuert." },
    { term: "AGDLP", def: "Prinzip für Berechtigungen im AD: Accounts kommen in globale Gruppen, diese in domänenlokale Gruppen, und nur diese erhalten die Permissions." },
    { term: "APIPA", def: "Automatic Private IP Addressing – ein Client ohne DHCP-Antwort gibt sich selbst eine Adresse aus 169.254.0.0/16." },
    { term: "CAL", def: "Client Access License – Zugriffslizenz für Windows Server, als User-CAL (pro Person) oder Device-CAL (pro Gerät)." },
    { term: "Container", def: "Isolierte Laufzeitumgebung für eine Anwendung, die sich den Kernel des Hosts teilt und aus einem Image gestartet wird, z. B. mit Docker." },
    { term: "cron", def: "Linux-Dienst, der Befehle zeitgesteuert nach einer Tabelle (crontab) mit den Feldern Minute, Stunde, Tag, Monat und Wochentag ausführt." },
    { term: "DHCP-Relay-Agent", def: "Funktion eines Routers oder Servers, die DHCP-Broadcasts eines Subnetzes als Unicast an einen DHCP-Server in einem anderen Netz weiterleitet." },
    { term: "Differenzielle Sicherung", def: "Sicherung aller Änderungen seit der letzten Vollsicherung. Zur Wiederherstellung braucht man die Vollsicherung und die letzte differenzielle Sicherung." },
    { term: "Domänencontroller (DC)", def: "Server, der eine Kopie der AD-Datenbank hält, Anmeldungen prüft und mit den anderen DCs repliziert." },
    { term: "Gesamtstruktur (Forest)", def: "Oberste Einheit im Active Directory aus einer oder mehreren Domänenbäumen mit gemeinsamem Schema. Sie bildet die Sicherheitsgrenze." },
    { term: "GPO", def: "Group Policy Object – Sammlung von Computer- und Benutzereinstellungen, die mit Standorten, Domänen oder OUs verknüpft und nach LSDOU angewendet wird." },
    { term: "Hot Spare", def: "Eingebaute Reserveplatte, die bei einem Plattenausfall automatisch den Rebuild eines RAID-Verbunds übernimmt." },
    { term: "Hypervisor", def: "Software, die Hardware-Ressourcen auf virtuelle Maschinen verteilt. Typ 1 läuft direkt auf der Hardware, Typ 2 auf einem Host-Betriebssystem." },
    { term: "IaaS / PaaS / SaaS", def: "Cloud-Dienstmodelle: gemietete Infrastruktur, bereitgestellte Plattform bzw. Laufzeitumgebung und fertige Software als Dienst." },
    { term: "Idempotenz", def: "Eigenschaft einer Automatisierung, bei mehrfacher Ausführung immer denselben Zielzustand herzustellen, ohne unnötige Änderungen." },
    { term: "Inkrementelle Sicherung", def: "Sicherung aller Änderungen seit der letzten Sicherung beliebiger Art. Zur Wiederherstellung braucht man die Vollsicherung und alle Inkremente danach." },
    { term: "iSCSI", def: "Protokoll, das SCSI-Befehle über TCP/IP überträgt und so blockbasierten Speicher (LUNs) im Netzwerk bereitstellt." },
    { term: "Kerberos", def: "Authentifizierungsprotokoll im Active Directory, das mit Tickets (TGT und Diensttickets) arbeitet und Port 88 nutzt." },
    { term: "LDAP", def: "Lightweight Directory Access Protocol – Protokoll zum Abfragen und Ändern von Verzeichnisdiensten (Port 389, verschlüsselt 636)." },
    { term: "Live-Migration", def: "Verschieben einer laufenden virtuellen Maschine auf einen anderen Host ohne Unterbrechung des Betriebs." },
    { term: "LSDOU", def: "Verarbeitungsreihenfolge von Gruppenrichtlinien: Lokal, Standort, Domäne, Organisationseinheit. Die zuletzt angewandte Einstellung gewinnt." },
    { term: "MIB / OID", def: "Management Information Base: Struktur der per SNMP abrufbaren Werte. Jeder Wert wird über eine Object ID (OID) adressiert." },
    { term: "MX-Record", def: "DNS-Eintrag, der den Mailserver einer Domain mit einer Priorität angibt. Ein kleinerer Wert wird bevorzugt." },
    { term: "NAS", def: "Network Attached Storage – Speichersystem, das Dateien über das LAN per SMB oder NFS bereitstellt (dateibasierter Zugriff)." },
    { term: "NTP", def: "Network Time Protocol – synchronisiert Uhren hierarchisch über Stratum-Ebenen und nutzt UDP-Port 123." },
    { term: "Organisationseinheit (OU)", def: "Container im Active Directory, der Objekte strukturiert und an dem Gruppenrichtlinien verknüpft und Verwaltungsrechte delegiert werden." },
    { term: "PTR-Record", def: "DNS-Eintrag in einer Reverse-Lookup-Zone, der eine IP-Adresse einem Namen zuordnet." },
    { term: "RAID", def: "Redundant Array of Independent Disks – Verbund mehrerer Laufwerke für höhere Leistung und/oder Ausfallsicherheit. Ersetzt kein Backup." },
    { term: "RPO", def: "Recovery Point Objective – maximal tolerierbarer Datenverlust, gemessen als Zeitraum. Aus ihm folgt das Sicherungsintervall." },
    { term: "RTO", def: "Recovery Time Objective – maximal tolerierbare Zeit, bis ein System nach einem Ausfall wieder läuft." },
    { term: "SAN", def: "Storage Area Network – eigenes Speichernetz, das Servern blockbasierten Speicher über iSCSI oder Fibre Channel bereitstellt." },
    { term: "Server Core", def: "Installationsoption von Windows Server ohne grafische Oberfläche mit kleinerer Angriffsfläche und geringerem Ressourcenbedarf." },
    { term: "Snapshot", def: "Gespeicherter Zustand einer VM oder eines Volumes zu einem Zeitpunkt. Er liegt auf demselben Speicher und ist kein Backup." },
    { term: "SNMP", def: "Simple Network Management Protocol – Manager fragen Agents auf Geräten ab (UDP 161), Agents melden Ereignisse als Traps (UDP 162). Nur SNMPv3 ist verschlüsselt." },
    { term: "Sticky Bit", def: "Linux-Sonderrecht für Verzeichnisse: Dateien darin dürfen nur von ihrem Besitzer oder root gelöscht werden, z. B. in /tmp." },
    { term: "Syslog", def: "Standard zum Übertragen von Log-Meldungen an einen zentralen Server (UDP 514) mit den Schweregraden 0 (Emergency) bis 7 (Debug)." },
    { term: "umask", def: "Maske, die festlegt, welche Rechte bei neu angelegten Dateien und Verzeichnissen unter Linux entfernt werden, z. B. 022 → 644 bzw. 755." },
    { term: "VDI", def: "Virtual Desktop Infrastructure – Desktops laufen als VMs im Rechenzentrum und werden per Thin Client oder Notebook genutzt." },
    { term: "AFR", def: "Annualized Failure Rate – erwarteter Anteil der Geräte, die pro Jahr ausfallen, näherungsweise 8.760 h geteilt durch die MTBF." },
    { term: "Blue-Green-Deployment", def: "Einführungsstrategie, bei der die neue Version parallel zur alten aufgebaut und getestet und dann per Umschaltung ohne Ausfall in Betrieb genommen wird." },
    { term: "Load Balancer", def: "Komponente, die eingehende Anfragen nach einem Verfahren wie Round Robin oder Least Connections auf mehrere Server verteilt und ausgefallene Server per Health Check erkennt." },
    { term: "MTBF / MTTR", def: "Mean Time Between Failures (mittlere Betriebszeit zwischen Ausfällen) und Mean Time To Repair (mittlere Reparaturdauer). Daraus folgt die Verfügbarkeit A = MTBF ÷ (MTBF + MTTR)." },
    { term: "Reverse Proxy", def: "Server, der Anfragen von Clients stellvertretend für dahinterliegende Server entgegennimmt, oft mit TLS-Terminierung, Caching und Lastverteilung." },
    { term: "USV", def: "Unterbrechungsfreie Stromversorgung – überbrückt Netzausfälle mit Akkus. Nach EN IEC 62040-3 unterscheidet man die Klassen VFD, VI und VFI." },
    { term: "Pseudocode", def: "Allgemein verständliche, nicht lauffähige Beschreibung eines Algorithmus, bei der die Kontrollstrukturen durch Schlüsselwörter und Einrückung erkennbar sind." },
    { term: "Schreibtischtest", def: "Manuelles, schrittweises Durchgehen von Code mit Testwerten, bei dem die Variablenwerte in einer Trace-Tabelle notiert werden." },
    { term: "Off-by-one-Fehler", def: "Logik- oder Laufzeitfehler, bei dem eine Schleife oder ein Index um genau eins daneben liegt, z. B. Durchlauf bis n statt bis n − 1." },
    { term: "Symbolischer Link", def: "Verweis auf den Pfad einer Datei oder eines Verzeichnisses (ln -s). Wird das Ziel gelöscht, zeigt der Link ins Leere." },
    { term: "Hardlink", def: "Zusätzlicher Verzeichniseintrag für dieselben Daten (Inode) im selben Dateisystem. Die Daten bleiben erhalten, bis der letzte Link gelöscht ist." },
    { term: "Floating-Lizenz", def: "Lizenzmodell, bei dem ein Lizenzserver einen Pool verwaltet und die Zahl der gleichzeitig aktiven Nutzer begrenzt." },
    { term: "End of Life (EoL)", def: "Ende des Herstellersupports für ein Produkt. Danach gibt es keine Sicherheitsupdates mehr, das Produkt muss ersetzt oder gesondert abgesichert werden." },
    { term: "Microsoft Entra ID", def: "Cloud-Identitätsdienst von Microsoft (früher Azure AD) für Microsoft 365 und SaaS-Anwendungen, oft mit dem lokalen Active Directory synchronisiert." },
  ],
  links: [
    { title: "Microsoft Learn – Windows Server-Dokumentation", url: "https://learn.microsoft.com/de-de/windows-server/", note: "Rollen, Active Directory, DHCP, DNS, Hyper-V, Speicher" },
    { title: "Microsoft Learn – PowerShell-Dokumentation", url: "https://learn.microsoft.com/de-de/powershell/", note: "Cmdlets, Skripting, Ausführungsrichtlinien" },
    { title: "BSI – IT-Grundschutz-Kompendium", url: "https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/IT-Grundschutz-Kompendium/it-grundschutz-kompendium_node.html", note: "Bausteine u. a. zu Servern, Active Directory, Datensicherung und Virtualisierung" },
    { title: "Cisco Networking Academy", url: "https://www.netacad.com/", note: "Kurs „Linux Essentials“ (NDG) zur Vertiefung der Linux-Grundlagen" },
    { title: "Ubuntu Server – Dokumentation", url: "https://ubuntu.com/server/docs", note: "Paketverwaltung, systemd, Netzwerkdienste, Webserver" },
    { title: "Filesystem Hierarchy Standard (Linux Foundation)", url: "https://refspecs.linuxfoundation.org/fhs.shtml", note: "offizielle Beschreibung der Linux-Verzeichnisstruktur" },
    { title: "Microsoft Learn – Produktlebenszyklus", url: "https://learn.microsoft.com/de-de/lifecycle/", note: "Supportenden von Windows und Windows Server nachschlagen" },
    { title: "Python-Dokumentation", url: "https://docs.python.org/3/", note: "offizielle Referenz und Tutorial für Automatisierungsskripte" },
    { title: "Wikipedia – RAID", url: "https://de.wikipedia.org/wiki/RAID", note: "ergänzend: Übersicht der RAID-Level" }
  ]
});
