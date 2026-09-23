/* LF 9 – Netzwerke und Dienste bereitstellen */
LEARN.module({
  id: "lf09",
  type: "lf",
  nr: 9,
  title: "Netzwerke und Dienste bereitstellen",
  year: 2,
  hours: 80,
  exam: ["AP1", "AP2"],
  summary: "Vom OSI-Modell über MAC-Adressen, Ports und IPv4-Subnetting bis zu Routing, VLANs, NAT, DHCP, DNS und IPv6: Du planst Netzwerke, konfigurierst Cisco-Geräte und findest Fehler systematisch. Grundlagen wie Subnetting, OSI und IPv6 kommen schon in der AP1 dran, Routing, VLAN und Dienste vor allem im Prüfungsbereich „Analyse und Entwicklung von Netzwerken“ der AP2.",
  goals: [
    "Netzwerkkommunikation mit dem OSI- und dem TCP/IP-Modell beschreiben, Protokolle, Geräte und PDUs den Schichten zuordnen und die Kapselung erklären",
    "Physikalische (MAC) und logische (IP) Adressierung unterscheiden, MAC-Adressen analysieren und die Arbeitsweise von ARP erklären",
    "Wichtige Portnummern mit Diensten verknüpfen, TCP und UDP vergleichen und den 3-Way-Handshake erläutern",
    "IPv4-Netze sicher berechnen: Netz-, Broadcast- und Host-Adressen, Subnetting im und innerhalb des Oktetts sowie VLSM-Adresskonzepte",
    "Routingtabellen lesen, statische und Default-Routen konfigurieren, RIP und OSPF vergleichen und die Ausfallsicherheit mit Gateway-Redundanz und Verfügbarkeitsberechnungen bewerten",
    "Netzkomponenten nach Datenblatt auswählen (PoE, SFP) sowie Switching, Spanning Tree und VLANs (IEEE 802.1Q, Access/Trunk, Inter-VLAN-Routing) planen und auf Cisco-Geräten einrichten",
    "NAT/PAT, DHCP (inkl. Relay) und DNS (Auflösung, Zonen, Resource Records) erklären und konfigurieren",
    "IPv6-Adressen kürzen, Adresstypen und Präfixe zuordnen und SLAAC, EUI-64, DHCPv6 und Dual Stack erklären",
    "Netzwerkdienste, WLAN-Absicherung, Firewall-Regeln, DMZ und VPN für Kundenanforderungen auswählen und begründen",
    "Netzwerkfehler mit ipconfig, ping, tracert, nslookup und Cisco-show-Befehlen systematisch eingrenzen und dokumentieren"
  ],
  school: {
    hinweise: "Leistungsnachweis 1 ist ein Test am 07.10.2026, Leistungsnachweis 2 eine Klausur am 16.12.2026. Schwerpunkte sind Subnetting sowie OSI-Modell und Ports – rechne die Subnetting-Übungen mehrfach, bis Netz-, Broadcast- und Host-Adressen sitzen. Im Unterricht wird viel mit Cisco Packet Tracer gearbeitet (Adressierungstabellen ausfüllen, Router und Switches konfigurieren, mit ping testen). Die Reihenfolge der Themen folgt dem Unterricht: Referenzmodelle → Adressierung → Subnetting → Routing → VLSM → VLAN.",
    themen: [
      "Referenzmodelle & Protokolle (Schichtenmodelle, OSI, TCP/IP/DoD, Protokollstack)",
      "Logische und physikalische Adressierung (MAC, Ports, IP)",
      "IPv4-Adressklassen, Netz- und Hostanteil, CIDR, mögliche Subnetzmasken",
      "Subnetze im Oktettbereich und innerhalb der Oktettgrenzen",
      "Packet-Tracer-Übungen: IPv4-Subnetze berechnen und konfigurieren",
      "Routing",
      "Subnetting: VLSM",
      "VLAN",
      "IPv6 (Handout und Kurzvortrag)"
    ]
  },
  topics: [
    {
      id: "schichtenmodelle",
      title: "Referenzmodelle: OSI, TCP/IP und Kapselung",
      exam: ["AP1", "AP2"],
      summary: "Warum Schichtenmodelle, die 7 OSI-Schichten mit Protokollen, Geräten und PDUs, das TCP/IP-(DoD-)Modell, Protokollstack und Kapselung.",
      html: `
        <p>Netzwerkkommunikation besteht aus vielen Teilaufgaben: Bits übertragen, Geräte adressieren, Wege finden, Daten vollständig ausliefern und für Programme aufbereiten. <strong>Schichtenmodelle</strong> zerlegen dieses Problem in übereinanderliegende Schichten. Jede Schicht erledigt eine klar umrissene Aufgabe, <strong>nutzt die Dienste der Schicht darunter</strong> und <strong>bietet der Schicht darüber Dienste an</strong>.</p>
        <ul>
          <li><strong>Austauschbarkeit:</strong> WLAN statt Kabel? Nur die unteren Schichten ändern sich.</li>
          <li><strong>Herstellerunabhängigkeit:</strong> Standards je Schicht sorgen für Zusammenarbeit.</li>
          <li><strong>Fehlersuche:</strong> Kabel defekt → Schicht 1, falsche IP → Schicht 3.</li>
        </ul>
        <h5>Vertikale und horizontale Kommunikation</h5>
        <p><strong>Vertikal</strong> kommunizieren benachbarte Schichten <em>innerhalb eines Systems</em> über Schnittstellen (Dienste). <strong>Horizontal</strong> kommunizieren die <em>gleichen Schichten zweier Systeme</em> logisch miteinander – über ein gemeinsames <strong>Protokoll</strong>. Physisch übertragen wird nur auf Schicht 1.</p>
        <p>Vergleich Paketversand: Die Einkäuferin übergibt ihre Bestellung der Poststelle (vertikal) und interessiert sich nicht für die LKW-Route. Die Poststellen beider Firmen verstehen sich, weil sie dasselbe Adressformat nutzen (horizontal).</p>
        <h5>Das ISO/OSI-Referenzmodell</h5>
        <table><thead><tr><th>Nr.</th><th>Schicht</th><th>Aufgabe</th><th>Beispiele Protokolle/Standards</th><th>Geräte</th><th>PDU</th></tr></thead><tbody>
          <tr><td>7</td><td>Anwendung (Application)</td><td>Schnittstelle zu den Anwendungen, Netzwerkdienste</td><td>HTTP(S), DNS, SMTP, IMAP, FTP, SSH, DHCP</td><td>Proxy</td><td>Daten</td></tr>
          <tr><td>6</td><td>Darstellung (Presentation)</td><td>Datenformat, Zeichenkodierung, Kompression, Verschlüsselung</td><td>UTF-8, ASCII, JPEG, MPEG</td><td>–</td><td>Daten</td></tr>
          <tr><td>5</td><td>Sitzung (Session)</td><td>Sitzungen aufbauen, steuern, beenden</td><td>RPC, NetBIOS</td><td>–</td><td>Daten</td></tr>
          <tr><td>4</td><td>Transport (Transport)</td><td>Ende-zu-Ende-Transport, Ports, Segmentierung, Flusskontrolle</td><td>TCP, UDP</td><td>–</td><td>Segment (TCP) / Datagramm (UDP)</td></tr>
          <tr><td>3</td><td>Vermittlung (Network)</td><td>logische Adressierung, Wegewahl (Routing)</td><td>IPv4, IPv6, ICMP, OSPF</td><td>Router, Layer-3-Switch</td><td>Paket</td></tr>
          <tr><td>2</td><td>Sicherung (Data Link)</td><td>physikalische Adressierung (MAC), Rahmenbildung, Fehlererkennung (FCS), Zugriff aufs Medium</td><td>Ethernet (IEEE 802.3), WLAN (802.11), 802.1Q</td><td>Switch, Bridge, Access Point, Netzwerkkarte</td><td>Rahmen (Frame)</td></tr>
          <tr><td>1</td><td>Bitübertragung (Physical)</td><td>Bits als elektrische, optische oder Funksignale übertragen; Kabel, Stecker</td><td>1000BASE-T, 10GBASE-SR, RJ45</td><td>Hub, Repeater, Medienkonverter</td><td>Bit</td></tr>
        </tbody></table>
        <div class="callout tipp"><strong>Eselsbrücken:</strong> von 7 nach 1 „<strong>A</strong>lle <strong>D</strong>eutschen <strong>S</strong>chüler <strong>T</strong>rinken <strong>V</strong>erschiedene <strong>S</strong>orten <strong>B</strong>ier“ (Anwendung, Darstellung, Sitzung, Transport, Vermittlung, Sicherung, Bitübertragung). Von 1 nach 7: „<strong>P</strong>lease <strong>D</strong>o <strong>N</strong>ot <strong>T</strong>hrow <strong>S</strong>alami <strong>P</strong>izza <strong>A</strong>way“.</div>
        <h5>Das TCP/IP-Modell (DoD-Modell)</h5>
        <p>Das TCP/IP-Modell stammt aus dem ARPANET-Projekt des US-Verteidigungsministeriums (<em>Department of Defense</em>) und beschreibt die Praxis im Internet. Das OSI-Modell (ISO) ist ein <strong>Referenzmodell</strong> zum Einordnen.</p>
        <table><thead><tr><th>TCP/IP-Schicht</th><th>entspricht OSI</th><th>Beispiele</th></tr></thead><tbody>
          <tr><td>Anwendung (Application)</td><td>5, 6, 7</td><td>HTTP, DNS, SMTP, SSH</td></tr>
          <tr><td>Transport (Host-to-Host)</td><td>4</td><td>TCP, UDP</td></tr>
          <tr><td>Internet</td><td>3</td><td>IPv4, IPv6, ICMP</td></tr>
          <tr><td>Netzzugang (Network Access/Link)</td><td>1, 2</td><td>Ethernet, WLAN</td></tr>
        </tbody></table>
        <h5>Protokollstack und Kapselung</h5>
        <p>Ein <strong>Protokollstack</strong> (Protokollstapel) ist die Kombination der Protokolle, die in einem System übereinander zusammenarbeiten, z. B. HTTPS → TCP → IPv4 → Ethernet. Beim Senden fügt jede Schicht ihre Steuerinformationen als <strong>Header</strong> vor die Daten (Ethernet zusätzlich einen <strong>Trailer</strong> mit Prüfsumme FCS) – das ist die <strong>Kapselung</strong> (Encapsulation). Der Empfänger entfernt die Header von unten nach oben wieder (Decapsulation).</p>
        <pre class="ascii">Schicht 5–7                        [ Daten ]
Schicht 4   Segment         [TCP-H][ Daten ]
Schicht 3   Paket      [IP-H][TCP-H][ Daten ]
Schicht 2   Frame [Eth-H][IP-H][TCP-H][ Daten ][FCS]
Schicht 1   Bits  0110100101110100101011 ...</pre>
        <p>Typische Protokollstacks im Überblick – so ordnest du einen Dienst schnell allen Schichten zu:</p>
        <table><thead><tr><th>Anwendungsfall</th><th>Anwendung (OSI 5–7)</th><th>Transport (OSI 4)</th><th>Vermittlung (OSI 3)</th><th>Netzzugang (OSI 1–2)</th></tr></thead><tbody>
          <tr><td>Webseite abrufen</td><td>HTTP über TLS (HTTPS)</td><td>TCP, Zielport 443</td><td>IPv4 bzw. IPv6</td><td>Ethernet oder WLAN</td></tr>
          <tr><td>E-Mail versenden</td><td>SMTP</td><td>TCP, Zielport 587 bzw. 25</td><td>IP</td><td>Ethernet</td></tr>
          <tr><td>Namen auflösen</td><td>DNS</td><td>UDP, Zielport 53</td><td>IP</td><td>Ethernet</td></tr>
          <tr><td>IP-Telefonie</td><td>SIP (Gesprächsaufbau), RTP (Sprache)</td><td>meist UDP</td><td>IP</td><td>Ethernet (Voice-VLAN)</td></tr>
          <tr><td>ping</td><td>–</td><td>– (ICMP nutzt keine Ports)</td><td>ICMP, in IP verpackt</td><td>Ethernet</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel – Webseite aufrufen:</strong> Ein PC (192.168.10.23) in Heide ruft eine Webseite auf dem Server 203.0.113.80 auf.<br>
          Schicht 7: Der Browser erzeugt eine HTTP-Anfrage (verschlüsselt über TLS).<br>
          Schicht 4: TCP setzt Zielport <code>443</code> und einen zufälligen Quellport (z. B. <code>51514</code>).<br>
          Schicht 3: IP setzt Quell-IP 192.168.10.23 und Ziel-IP 203.0.113.80.<br>
          Schicht 2: Das Ziel liegt in einem fremden Netz → Ziel-MAC ist die des <strong>Standardgateways</strong>, Quell-MAC die des PCs.<br>
          Schicht 1: Die Netzwerkkarte sendet die Bits zum Switch.</div>
        <div class="callout merke"><strong>Merke:</strong> Jeder Router entpackt den Frame bis Schicht 3, entscheidet anhand der Ziel-IP über den Weg und verpackt das Paket in einen <strong>neuen</strong> Frame. Die IP-Adressen bleiben auf dem ganzen Weg gleich (ohne NAT), die MAC-Adressen wechseln auf jeder Teilstrecke.</div>
        <div class="callout achtung"><strong>Prüfungsfallen:</strong> Ein Switch arbeitet klassisch auf Schicht 2, ein Hub nur auf Schicht 1, ein Router auf Schicht 3. Die PDU der Schicht 4 heißt Segment (nicht Paket), die der Schicht 2 Frame/Rahmen. Das TCP/IP-Modell hat 4 Schichten. Manche Lehrbücher zeigen ein 5-Schichten-„Hybridmodell“, das den Netzzugang in Bitübertragung und Sicherung teilt – gefragt ist in der Regel das 4-Schichten-Modell; im Zweifel die Zuordnung zu den OSI-Schichten mit angeben.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Ordnen Sie</em> die Protokolle/Geräte den OSI-Schichten zu“ (Tabelle ausfüllen), „<em>Nennen Sie</em> die Schichten des TCP/IP-Modells und die entsprechenden OSI-Schichten“, „<em>Erläutern Sie</em> den Begriff Kapselung“ oder „<em>Beschreiben Sie</em>, welche Adressen sich hinter einem Router ändern“. OSI-Zuordnungen kamen in der AP1 mehrfach vor.</div>
      `
    },
    {
      id: "mac-arp",
      title: "Adressierung: MAC-Adressen, Ethernet-Frame und ARP",
      exam: ["AP1", "AP2"],
      summary: "Logische vs. physikalische Adressierung, Aufbau der MAC-Adresse (OUI, I/G- und U/L-Bit), Unicast/Multicast/Broadcast, Ethernet-Frame und ARP.",
      html: `
        <p>Damit Daten ankommen, braucht es Adressen auf mehreren Ebenen. Die <strong>physikalische Adresse</strong> (MAC) identifiziert einen Netzwerkanschluss im lokalen Netzabschnitt, die <strong>logische Adresse</strong> (IP) identifiziert ein Gerät netzübergreifend, der <strong>Port</strong> das Programm auf dem Gerät.</p>
        <table><thead><tr><th>Merkmal</th><th>MAC-Adresse</th><th>IPv4-Adresse</th><th>Port</th></tr></thead><tbody>
          <tr><td>OSI-Schicht</td><td>2 (Sicherung)</td><td>3 (Vermittlung)</td><td>4 (Transport)</td></tr>
          <tr><td>Länge</td><td>48 Bit (6 Byte)</td><td>32 Bit (4 Byte)</td><td>16 Bit (0–65535)</td></tr>
          <tr><td>Schreibweise</td><td>hexadezimal, z. B. 00:1B:44:11:3A:B7</td><td>dezimal mit Punkten, z. B. 192.168.10.23</td><td>Dezimalzahl, z. B. 443</td></tr>
          <tr><td>Vergabe</td><td>Hersteller (ab Werk), per Software änderbar</td><td>Administrator (statisch) oder DHCP</td><td>Dienst (fest) bzw. Betriebssystem (dynamisch)</td></tr>
          <tr><td>Gültigkeit</td><td>nur im eigenen Netzabschnitt (Broadcast-Domäne)</td><td>netzübergreifend, routbar</td><td>auf dem jeweiligen Host</td></tr>
        </tbody></table>
        <h5>Aufbau einer MAC-Adresse</h5>
        <p>Eine MAC-Adresse besteht aus 12 Hexziffern. Übliche Schreibweisen: <code>00:1B:44:11:3A:B7</code> (Linux), <code>00-1B-44-11-3A-B7</code> (Windows), <code>001b.4411.3ab7</code> (Cisco).</p>
        <ul>
          <li><strong>OUI</strong> (Organizationally Unique Identifier): die ersten 24 Bit, von der IEEE dem Hersteller zugeteilt.</li>
          <li><strong>Gerätekennung</strong>: die letzten 24 Bit, vom Hersteller eindeutig vergeben.</li>
          <li><strong>I/G-Bit</strong> (niederwertigstes Bit des ersten Bytes): 0 = Unicast (Individual), 1 = Gruppenadresse (Multicast/Broadcast).</li>
          <li><strong>U/L-Bit</strong> (zweitniederwertigstes Bit des ersten Bytes): 0 = weltweit eindeutig (vom Hersteller), 1 = lokal verwaltet (z. B. zufällige „private“ WLAN-Adresse beim Smartphone).</li>
        </ul>
        <table><thead><tr><th>Typ</th><th>Kennzeichen</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td>Unicast</td><td>I/G-Bit = 0 → genau ein Empfänger</td><td>00:1B:44:11:3A:B7</td></tr>
          <tr><td>Multicast</td><td>I/G-Bit = 1 → Gruppe von Empfängern</td><td>01:00:5E:… (IPv4-Multicast), 33:33:… (IPv6-Multicast)</td></tr>
          <tr><td>Broadcast</td><td>alle 48 Bit = 1 → alle Geräte im Netzabschnitt</td><td>FF:FF:FF:FF:FF:FF</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel – MAC analysieren:</strong> <code>3A:7F:10:22:C4:05</code>. Erstes Byte hex 3A = 0011 1010 (binär). Letztes Bit (I/G) = 0 → <strong>Unicast</strong>. Vorletztes Bit (U/L) = 1 → <strong>lokal verwaltet</strong>, also keine Herstelleradresse.<br>
          Zum Vergleich <code>01:00:5E:00:00:FB</code>: 01 = 0000 0001 → I/G = 1 → <strong>Multicast</strong>.</div>
        <div class="callout tipp"><strong>Tipp:</strong> Lokal verwaltete Unicast-Adressen erkennst du an der zweiten Hexziffer <strong>2, 6, A oder E</strong>. Ungerade zweite Hexziffer (1, 3, 5 …) bedeutet Gruppenadresse.</div>
        <h5>Der Ethernet-Frame (IEEE 802.3)</h5>
        <table><thead><tr><th>Präambel + SFD</th><th>Ziel-MAC</th><th>Quell-MAC</th><th>(802.1Q-Tag)</th><th>Typ/Länge</th><th>Nutzdaten</th><th>FCS</th></tr></thead><tbody>
          <tr><td>8 Byte</td><td>6 Byte</td><td>6 Byte</td><td>optional 4 Byte</td><td>2 Byte</td><td>46–1500 Byte</td><td>4 Byte</td></tr>
        </tbody></table>
        <p>Die <strong>FCS</strong> (Frame Check Sequence, CRC-Prüfsumme) erkennt Übertragungsfehler; fehlerhafte Frames werden verworfen. Die maximale Nutzlast von 1500 Byte heißt <strong>MTU</strong>. Der Typ <code>0x0800</code> kennzeichnet IPv4, <code>0x86DD</code> IPv6, <code>0x0806</code> ARP.</p>
        <h5>ARP – Address Resolution Protocol</h5>
        <p>Ein PC kennt die Ziel-IP, braucht für den Frame aber die Ziel-MAC. ARP ermittelt zu einer IPv4-Adresse im <strong>eigenen Netz</strong> die MAC-Adresse:</p>
        <ol>
          <li>Der PC prüft mit seiner Subnetzmaske: Liegt das Ziel im eigenen Netz? Wenn nein, wird die MAC des <strong>Standardgateways</strong> gesucht.</li>
          <li>Er schaut in seinen <strong>ARP-Cache</strong>. Steht der Eintrag dort, entfällt die Anfrage.</li>
          <li>Sonst sendet er einen <strong>ARP-Request als Broadcast</strong> (Ziel-MAC FF:FF:FF:FF:FF:FF): „Wer hat 192.168.10.1? Bitte an 192.168.10.23 antworten.“</li>
          <li>Nur das Gerät mit dieser IP antwortet mit einem <strong>ARP-Reply als Unicast</strong> und nennt seine MAC.</li>
          <li>Das Ergebnis wird im ARP-Cache gespeichert (anzeigen mit <code>arp -a</code>) und läuft nach kurzer Zeit ab.</li>
        </ol>
        <p><strong>Gratuitous ARP:</strong> Ein Gerät kündigt unaufgefordert per Broadcast seine eigene Zuordnung IP → MAC an, z. B. beim Start (Test, ob die IP schon vergeben ist) oder wenn bei Gateway-Redundanz (HSRP/VRRP) ein anderer Router die virtuelle Adresse übernimmt. Genau diesen Mechanismus missbrauchen Angreifer beim ARP-Spoofing. ARP hat einen eigenen EtherType (0x0806) und keinen IP-Header; es verbindet Schicht 3 (IP-Adresse) mit Schicht 2 (MAC) und wird je nach Lehrbuch einer der beiden Schichten zugeordnet.</p>
        <div class="callout merke"><strong>Merke:</strong> ARP funktioniert nur innerhalb einer Broadcast-Domäne, weil Router keine Broadcasts weiterleiten. IPv6 nutzt statt ARP das <strong>Neighbor Discovery Protocol (NDP)</strong> mit ICMPv6-Nachrichten.</div>
        <div class="callout achtung"><strong>Prüfungsfallen:</strong> Eine MAC-Adresse hat 48 Bit, nicht 32 oder 64. Die MAC-Adresse wird nicht geroutet – hinter einem Router siehst du nur die MAC des Routers. <strong>ARP-Spoofing</strong> (unaufgeforderte, gefälschte ARP-Replies, z. B. „Gateway hat meine MAC“) ermöglicht Man-in-the-Middle-Angriffe. Gegenmaßnahmen: Dynamic ARP Inspection mit DHCP-Snooping am Switch, 802.1X, Segmentierung. MAC-Filter sind kein echter Schutz, weil MAC-Adressen gefälscht werden können.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Nennen Sie</em> drei Unterschiede zwischen MAC- und IP-Adresse“, „<em>Beschreiben Sie</em> den Ablauf von ARP“, „<em>Interpretieren Sie</em> die Ausgabe von <code>arp -a</code>“ oder „<em>Geben Sie</em> Quell- und Ziel-MAC des Frames auf Teilstrecke 1 an“.</div>
      `
    },
    {
      id: "ports-tcp-udp",
      title: "Ports, TCP und UDP (Transportschicht)",
      exam: ["AP1", "AP2"],
      summary: "Portbereiche, die wichtigsten Portnummern, Socket, TCP und UDP im Vergleich sowie 3-Way-Handshake und Verbindungsabbau.",
      html: `
        <p>Die IP-Adresse bringt ein Paket zum richtigen <strong>Gerät</strong>, die <strong>Portnummer</strong> zum richtigen <strong>Programm</strong> (Dienst, Prozess) auf diesem Gerät. Ports sind 16-Bit-Zahlen von 0 bis 65535 und gehören zur Transportschicht (OSI 4). IP-Adresse + Port (+ Protokoll) ergeben einen <strong>Socket</strong>, z. B. <code>203.0.113.80:443</code>. Eine Verbindung ist durch Quell-IP, Quell-Port, Ziel-IP, Ziel-Port und Protokoll eindeutig bestimmt.</p>
        <h5>Portbereiche (IANA)</h5>
        <table><thead><tr><th>Bereich</th><th>Name</th><th>Verwendung</th></tr></thead><tbody>
          <tr><td>0–1023</td><td>Well-known Ports (System Ports)</td><td>Standarddienste wie HTTP, SSH, DNS; unter Linux nur mit Root-Rechten belegbar</td></tr>
          <tr><td>1024–49151</td><td>Registered Ports</td><td>bei der IANA registrierte Anwendungen, z. B. RDP 3389, MySQL 3306</td></tr>
          <tr><td>49152–65535</td><td>Dynamic/Private Ports</td><td>werden dem Client vom Betriebssystem kurzzeitig als <strong>Quellport</strong> zugeteilt</td></tr>
        </tbody></table>
        <h5>Die wichtigsten Portnummern</h5>
        <table><thead><tr><th>Port</th><th>Transport</th><th>Dienst</th></tr></thead><tbody>
          <tr><td>20 / 21</td><td>TCP</td><td>FTP (Daten / Steuerung), unverschlüsselt</td></tr>
          <tr><td>22</td><td>TCP</td><td>SSH, auch SFTP und SCP</td></tr>
          <tr><td>23</td><td>TCP</td><td>Telnet (unverschlüsselt, veraltet)</td></tr>
          <tr><td>25</td><td>TCP</td><td>SMTP (Mailtransport zwischen Servern)</td></tr>
          <tr><td>53</td><td>UDP und TCP</td><td>DNS (Anfragen meist UDP, Zonentransfer und große Antworten TCP)</td></tr>
          <tr><td>67 / 68</td><td>UDP</td><td>DHCP (Server / Client)</td></tr>
          <tr><td>69</td><td>UDP</td><td>TFTP (einfache Dateiübertragung ohne Anmeldung, z. B. Konfigurations-Backups von Netzwerkgeräten)</td></tr>
          <tr><td>80</td><td>TCP</td><td>HTTP</td></tr>
          <tr><td>88</td><td>TCP und UDP</td><td>Kerberos (Anmeldung im Active Directory)</td></tr>
          <tr><td>110 / 995</td><td>TCP</td><td>POP3 / POP3S (mit TLS)</td></tr>
          <tr><td>123</td><td>UDP</td><td>NTP (Zeitsynchronisation)</td></tr>
          <tr><td>143 / 993</td><td>TCP</td><td>IMAP / IMAPS (mit TLS)</td></tr>
          <tr><td>161 / 162</td><td>UDP</td><td>SNMP (Abfrage / Traps)</td></tr>
          <tr><td>389 / 636</td><td>TCP</td><td>LDAP / LDAPS</td></tr>
          <tr><td>443</td><td>TCP (HTTP/3: UDP)</td><td>HTTPS</td></tr>
          <tr><td>445</td><td>TCP</td><td>SMB (Windows-Dateifreigaben)</td></tr>
          <tr><td>587 / 465</td><td>TCP</td><td>SMTP-Submission (Mailversand vom Client; 587 mit STARTTLS, 465 mit direktem TLS)</td></tr>
          <tr><td>514 / 1812, 1813</td><td>UDP</td><td>Syslog / RADIUS (Anmeldung, Accounting)</td></tr>
          <tr><td>3389</td><td>TCP</td><td>RDP (Remotedesktop)</td></tr>
          <tr><td>5060 / 5061</td><td>UDP oder TCP / TCP</td><td>SIP (Gesprächsaufbau bei VoIP; 5061 mit TLS)</td></tr>
        </tbody></table>
        <div class="callout tipp"><strong>Lerntipp – Ports in Paaren lernen:</strong> unverschlüsselt → verschlüsselt: HTTP 80 → HTTPS 443 · Telnet 23 → SSH 22 · POP3 110 → POP3S 995 · IMAP 143 → IMAPS 993 · LDAP 389 → LDAPS 636 · FTP 21 → SFTP 22 (über SSH). Mail-Gruppe: 25 (Server ↔ Server), 587/465 (Client sendet), 110/995 und 143/993 (Client holt ab).</div>
        <h5>TCP und UDP im Vergleich</h5>
        <table><thead><tr><th>Merkmal</th><th>TCP (Transmission Control Protocol)</th><th>UDP (User Datagram Protocol)</th></tr></thead><tbody>
          <tr><td>Verbindung</td><td>verbindungsorientiert (Handshake)</td><td>verbindungslos</td></tr>
          <tr><td>Zuverlässigkeit</td><td>Bestätigungen (ACK), Sequenznummern, Neuübertragung verlorener Segmente, richtige Reihenfolge</td><td>keine Bestätigung, keine Neuübertragung</td></tr>
          <tr><td>Flusskontrolle</td><td>ja (Window)</td><td>nein</td></tr>
          <tr><td>Header</td><td>mind. 20 Byte</td><td>8 Byte</td></tr>
          <tr><td>Einsatz</td><td>Web, E-Mail, Dateiübertragung, SSH</td><td>DNS-Anfragen, DHCP, VoIP, Videostreaming, Online-Spiele, NTP</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>Merke:</strong> TCP, wenn <strong>jedes Byte ankommen muss</strong>. UDP, wenn <strong>Geschwindigkeit und geringe Verzögerung</strong> wichtiger sind als vollständige Zustellung – bei einem Telefonat nützt ein verspätet nachgeliefertes Sprachpaket nichts mehr.</div>
        <h5>3-Way-Handshake und Verbindungsabbau</h5>
        <pre class="ascii">Client 192.168.10.23:51514             Server 203.0.113.80:443
   |--- SYN      (Seq=100) ------------------------>|
   |&lt;-- SYN-ACK  (Seq=300, Ack=101) ---------------|
   |--- ACK      (Seq=101, Ack=301) --------------->|
   |=========== Verbindung aufgebaut ==============|</pre>
        <ol>
          <li><strong>SYN:</strong> Der Client möchte eine Verbindung und sendet seine Start-Sequenznummer.</li>
          <li><strong>SYN-ACK:</strong> Der Server bestätigt (Ack = Seq des Clients + 1) und sendet seine eigene Sequenznummer.</li>
          <li><strong>ACK:</strong> Der Client bestätigt die Sequenznummer des Servers. Jetzt fließen Daten.</li>
        </ol>
        <p>Abgebaut wird die Verbindung mit <strong>FIN</strong> und <strong>ACK</strong> in beide Richtungen (meist 4 Schritte). Ein <strong>RST</strong> bricht eine Verbindung sofort ab, z. B. wenn auf dem Zielport kein Dienst lauscht.</p>
        <div class="callout beispiel"><strong>Beispiel:</strong> Du öffnest im Browser zwei Tabs zur selben Webseite. Beide Verbindungen gehen an <code>203.0.113.80:443</code>, das Betriebssystem vergibt aber unterschiedliche Quellports (z. B. 51514 und 51515). Dadurch kann der PC die Antworten den richtigen Tabs zuordnen.</div>
        <div class="callout achtung"><strong>Prüfungsfallen:</strong> DNS nutzt UDP <em>und</em> TCP auf Port 53. DHCP läuft über UDP (67/68), nicht TCP. Die Portnummer des Clients ist nicht fest, sondern dynamisch – fest ist nur der Port des Servers. Ports gehören zu Schicht 4, nicht zu Schicht 7.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Ordnen Sie</em> den Diensten die Standardports und TCP/UDP zu“, „<em>Erläutern Sie</em> zwei Unterschiede zwischen TCP und UDP“, „<em>Begründen Sie</em>, warum VoIP UDP verwendet“, „<em>Beschreiben Sie</em> den 3-Way-Handshake“. In der AP1 wurden z. B. IMAP und POP3 samt Ports verglichen; in der AP2 folgen Firewall-Regeln mit Ports.</div>
      `
    },
    {
      id: "ipv4",
      title: "IPv4: Adressklassen, private Adressen, Netz- und Hostanteil, CIDR",
      exam: ["AP1", "AP2"],
      summary: "Aufbau der IPv4-Adresse, Umrechnung binär/dezimal, Klassen A–E, private und besondere Adressen, Subnetzmaske, AND-Verknüpfung, CIDR und mögliche Masken.",
      html: `
        <p>Eine IPv4-Adresse ist <strong>32 Bit</strong> lang und wird in vier <strong>Oktetten</strong> (je 8 Bit) dezimal geschrieben, z. B. <code>192.168.10.23</code>. Jedes Oktett liegt zwischen 0 und 255. Insgesamt gibt es 2³² = 4.294.967.296 Adressen – viel zu wenig für alle Geräte weltweit, deshalb gibt es NAT und IPv6.</p>
        <h5>Binär und dezimal umrechnen</h5>
        <p>Stellenwerte eines Oktetts: <strong>128 · 64 · 32 · 16 · 8 · 4 · 2 · 1</strong>.</p>
        <div class="callout beispiel"><strong>Beispiel:</strong> 168 = 128 + 32 + 8 → <code>10101000</code>. Umgekehrt: <code>11001000</code> = 128 + 64 + 8 = 200.</div>
        <h5>Adressklassen (historisch, aber prüfungsrelevant)</h5>
        <table><thead><tr><th>Klasse</th><th>Erste Bits</th><th>1. Oktett</th><th>Standardmaske</th><th>Netze</th><th>Hosts je Netz</th></tr></thead><tbody>
          <tr><td>A</td><td>0</td><td>0–127 (nutzbar 1–126)</td><td>255.0.0.0 (/8)</td><td>2⁷ = 128 (126 nutzbar)</td><td>2²⁴ − 2 = 16.777.214</td></tr>
          <tr><td>B</td><td>10</td><td>128–191</td><td>255.255.0.0 (/16)</td><td>2¹⁴ = 16.384</td><td>2¹⁶ − 2 = 65.534</td></tr>
          <tr><td>C</td><td>110</td><td>192–223</td><td>255.255.255.0 (/24)</td><td>2²¹ = 2.097.152</td><td>2⁸ − 2 = 254</td></tr>
          <tr><td>D</td><td>1110</td><td>224–239</td><td>–</td><td>Multicast-Gruppen</td><td>–</td></tr>
          <tr><td>E</td><td>1111</td><td>240–255</td><td>–</td><td>reserviert (experimentell)</td><td>–</td></tr>
        </tbody></table>
        <p>Seit 1993 wird <strong>klassenlos</strong> (CIDR) gearbeitet: Die Maske bestimmt die Netzgröße, nicht die Klasse. Die Klassen helfen aber beim Einordnen und im Unterricht als „ursprüngliche Maske“ beim Subnetting.</p>
        <h5>Private und besondere Adressen</h5>
        <table><thead><tr><th>Bereich</th><th>Bedeutung</th></tr></thead><tbody>
          <tr><td>10.0.0.0/8</td><td>privat (10.0.0.0–10.255.255.255)</td></tr>
          <tr><td>172.16.0.0/12</td><td>privat (172.16.0.0–172.31.255.255)</td></tr>
          <tr><td>192.168.0.0/16</td><td>privat (192.168.0.0–192.168.255.255)</td></tr>
          <tr><td>127.0.0.0/8</td><td>Loopback, z. B. 127.0.0.1 = „ich selbst“</td></tr>
          <tr><td>169.254.0.0/16</td><td>APIPA/Link-Local: selbst vergeben, wenn kein DHCP-Server antwortet</td></tr>
          <tr><td>100.64.0.0/10</td><td>Shared Address Space für Carrier-Grade-NAT beim Provider</td></tr>
          <tr><td>255.255.255.255</td><td>Broadcast an alle im eigenen Netz</td></tr>
          <tr><td>0.0.0.0</td><td>„diese Adresse/unbekannt“: Quelladresse beim DHCP-Discover; als 0.0.0.0/0 die Default-Route</td></tr>
        </tbody></table>
        <p>Private Adressen (RFC 1918) werden im Internet nicht geroutet; für den Internetzugang übersetzt der Router sie per NAT in eine öffentliche Adresse.</p>
        <h5>Netzanteil, Hostanteil und Subnetzmaske</h5>
        <p>Die <strong>Subnetzmaske</strong> legt fest, welche Bits zum Netz (Einsen) und welche zum Host (Nullen) gehören. Die Einsen stehen immer <strong>lückenlos links</strong>. In der <strong>CIDR-Schreibweise</strong> wird nur die Anzahl der Einsen angegeben: 255.255.255.0 = <code>/24</code>.</p>
        <ul>
          <li><strong>Netzadresse:</strong> alle Hostbits 0 – bezeichnet das Netz, nicht an Geräte vergeben.</li>
          <li><strong>Broadcast-Adresse:</strong> alle Hostbits 1 – erreicht alle Geräte im Netz.</li>
          <li><strong>Hostadressen:</strong> alles dazwischen.</li>
        </ul>
        <div class="callout formel">Nutzbare Hosts = 2ʰ − 2 (h = Anzahl Hostbits = 32 − Präfix)<br>Netzadresse = IP-Adresse AND Subnetzmaske</div>
        <div class="callout beispiel"><strong>Beispiel – AND-Verknüpfung:</strong> 192.168.37.200 mit 255.255.255.192 (/26). Nur das 4. Oktett ist interessant:<br>
          200 = <code>11001000</code><br>192 = <code>11000000</code><br>AND = <code>11000000</code> = 192 → Netzadresse <strong>192.168.37.192</strong>.<br>
          Hostbits (die letzten 6) auf 1 → <code>11111111</code> = 255 → Broadcast <strong>192.168.37.255</strong>. Hosts: 2⁶ − 2 = <strong>62</strong> (192.168.37.193 bis .254).</div>
        <h5>Mögliche Maskenwerte in einem Oktett</h5>
        <p>Weil die Einsen lückenlos sind, gibt es pro Oktett nur neun Werte: <strong>0, 128, 192, 224, 240, 248, 252, 254, 255</strong>. Eine Maske wie 255.255.255.228 (<code>11100100</code>) ist deshalb ungültig.</p>
        <div class="callout merke"><strong>Merke:</strong> Netzadresse = alle Hostbits 0, Broadcast = alle Hostbits 1, dazwischen liegen die Hosts. Privat sind nur 10/8, 172.16/12 und 192.168/16.</div>
        <div class="callout achtung"><strong>Prüfungsfallen:</strong> 172.32.0.1 ist <em>öffentlich</em> (privat nur bis 172.31.255.255). Eine 169.254.x.x-Adresse bedeutet „kein DHCP-Server erreichbar“. Netz- und Broadcast-Adresse dürfen keinem Gerät zugewiesen werden – deshalb „− 2“.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Prüfen Sie</em>, ob die Adresse privat oder öffentlich ist“, „<em>Ermitteln Sie</em> Netzadresse, Broadcast und Anzahl der Hosts“, „<em>Geben Sie</em> die Maske in CIDR-Schreibweise an“, „<em>Tragen Sie</em> IP, Maske und Gateway in die Tabelle ein“ – in fast jeder AP1 mit 2–8 Punkten.</div>
      `
    },
    {
      id: "subnetting",
      title: "Subnetting: im Oktettbereich und innerhalb der Oktettgrenzen",
      exam: ["AP1", "AP2"],
      summary: "Hostbits ausleihen, die Subnetting-Formeln, Blockgrößen-Methode, binäre Sicht, Subnetze an Oktettgrenzen und über Oktettgrenzen hinweg sowie die Prüfung, ob zwei Adressen im selben Subnetz liegen – mit durchgerechneten Beispielen.",
      html: `
        <p>Beim <strong>Subnetting</strong> teilst du ein Netz in mehrere kleinere Netze. Dazu „leihst“ du dir Bits aus dem Hostanteil und machst sie zu <strong>Subnetzbits</strong> – die Maske wird länger. Gründe: kleinere Broadcast-Domänen (weniger Last), Trennung von Abteilungen (Sicherheit, Firewall-Regeln), bessere Übersicht und weniger Adressverschwendung. Je mehr Bits du leihst, desto <strong>mehr Subnetze</strong> und desto <strong>weniger Hosts</strong> pro Subnetz.</p>
        <div class="callout formel"><strong>Die Subnetting-Formeln</strong><br>
          Subnetzbits n = neues Präfix − ursprüngliches Präfix<br>
          Anzahl Subnetze = 2ⁿ<br>
          Hostbits h = 32 − neues Präfix<br>
          Nutzbare Hosts je Subnetz = 2ʰ − 2<br>
          Blockgröße (Schrittweite) = 256 − Maskenwert im interessanten Oktett</div>
        <h5>Subnetze innerhalb eines Oktetts (Beispiel /24)</h5>
        <table><thead><tr><th>Präfix</th><th>Maske</th><th>geliehene Bits</th><th>Subnetze</th><th>Hosts je Subnetz</th><th>Blockgröße</th></tr></thead><tbody>
          <tr><td>/25</td><td>255.255.255.128</td><td>1</td><td>2</td><td>126</td><td>128</td></tr>
          <tr><td>/26</td><td>255.255.255.192</td><td>2</td><td>4</td><td>62</td><td>64</td></tr>
          <tr><td>/27</td><td>255.255.255.224</td><td>3</td><td>8</td><td>30</td><td>32</td></tr>
          <tr><td>/28</td><td>255.255.255.240</td><td>4</td><td>16</td><td>14</td><td>16</td></tr>
          <tr><td>/29</td><td>255.255.255.248</td><td>5</td><td>32</td><td>6</td><td>8</td></tr>
          <tr><td>/30</td><td>255.255.255.252</td><td>6</td><td>64</td><td>2</td><td>4</td></tr>
        </tbody></table>
        <p>Im 3. Oktett gelten dieselben Maskenwerte für /17 bis /23, im 2. Oktett für /9 bis /15. Weil dann das komplette 4. Oktett zum Hostanteil gehört, sind die Netze viel größer:</p>
        <table><thead><tr><th>Präfix</th><th>Maske</th><th>Subnetze aus einem /16</th><th>Hosts je Subnetz</th><th>Blockgröße (3. Oktett)</th></tr></thead><tbody>
          <tr><td>/17</td><td>255.255.128.0</td><td>2</td><td>2¹⁵ − 2 = 32.766</td><td>128</td></tr>
          <tr><td>/18</td><td>255.255.192.0</td><td>4</td><td>2¹⁴ − 2 = 16.382</td><td>64</td></tr>
          <tr><td>/19</td><td>255.255.224.0</td><td>8</td><td>2¹³ − 2 = 8.190</td><td>32</td></tr>
          <tr><td>/20</td><td>255.255.240.0</td><td>16</td><td>2¹² − 2 = 4.094</td><td>16</td></tr>
          <tr><td>/21</td><td>255.255.248.0</td><td>32</td><td>2¹¹ − 2 = 2.046</td><td>8</td></tr>
          <tr><td>/22</td><td>255.255.252.0</td><td>64</td><td>2¹⁰ − 2 = 1.022</td><td>4</td></tr>
          <tr><td>/23</td><td>255.255.254.0</td><td>128</td><td>2⁹ − 2 = 510</td><td>2</td></tr>
        </tbody></table>
        <h5>Binär gedacht: Subnetzbits und Hostbits</h5>
        <p>Im interessanten Oktett stehen links die geliehenen <strong>Subnetzbits</strong>, rechts die <strong>Hostbits</strong>. Zählst du die Subnetzbits binär hoch (Hostbits bleiben 0), erhältst du nacheinander alle Netzadressen. Beispiel 192.168.40.0/24 → /27 (3 Subnetzbits | 5 Hostbits im 4. Oktett):</p>
        <table><thead><tr><th>Subnetz Nr.</th><th>4. Oktett binär (Subnetzbits | Hostbits)</th><th>Netzadresse</th><th>Broadcast (Hostbits = 1)</th></tr></thead><tbody>
          <tr><td>0</td><td>000 | 00000</td><td>192.168.40.0</td><td>000 | 11111 = .31</td></tr>
          <tr><td>1</td><td>001 | 00000</td><td>192.168.40.32</td><td>001 | 11111 = .63</td></tr>
          <tr><td>2</td><td>010 | 00000</td><td>192.168.40.64</td><td>010 | 11111 = .95</td></tr>
          <tr><td>3</td><td>011 | 00000</td><td>192.168.40.96</td><td>011 | 11111 = .127</td></tr>
          <tr><td>…</td><td>…</td><td>…</td><td>…</td></tr>
          <tr><td>7</td><td>111 | 00000</td><td>192.168.40.224</td><td>111 | 11111 = .255</td></tr>
        </tbody></table>
        <p>Der Abstand der Netzadressen ist der Stellenwert des letzten Subnetzbits – hier 32 = Blockgröße.</p>
        <h5>Subnetze im Oktettbereich (an Oktettgrenzen)</h5>
        <p>Am einfachsten ist Subnetting an den Grenzen /8, /16 und /24, weil ganze Oktette zum Netzanteil werden. Beispiel: Eine Firma nutzt intern 10.0.0.0/8 (16.777.214 Hosts in einer Broadcast-Domäne – viel zu groß).</p>
        <ul>
          <li>Aufteilung in <strong>/16</strong>: 16 − 8 = 8 Subnetzbits → 2⁸ = <strong>256 Subnetze</strong> (10.0.0.0/16 bis 10.255.0.0/16) mit je 2¹⁶ − 2 = <strong>65.534 Hosts</strong>.</li>
          <li>Aufteilung in <strong>/24</strong>: 24 − 8 = 16 Subnetzbits → 2¹⁶ = <strong>65.536 Subnetze</strong> mit je <strong>254 Hosts</strong> – sehr beliebt, weil gut lesbar.</li>
        </ul>
        <h5>Rezept: Netz, Hosts und Broadcast bestimmen</h5>
        <ol>
          <li><strong>Interessantes Oktett</strong> finden: das Oktett, in dem die Maske weder 255 noch 0 ist (bei /24, /16, /8 liegt die Grenze genau zwischen zwei Oktetten).</li>
          <li><strong>Blockgröße</strong> = 256 − Maskenwert in diesem Oktett.</li>
          <li>Vielfache der Blockgröße aufzählen und den Block suchen, in dem die IP liegt.</li>
          <li><strong>Netzadresse</strong> = Blockanfang, alle Oktette rechts davon = 0.</li>
          <li><strong>Broadcast</strong> = nächster Blockanfang − 1, alle Oktette rechts davon = 255.</li>
          <li><strong>Erster Host</strong> = Netzadresse + 1, <strong>letzter Host</strong> = Broadcast − 1.</li>
        </ol>
        <div class="callout beispiel"><strong>Beispiel 1 – im 4. Oktett:</strong> Host 192.168.40.77, ursprüngliche Maske /24, neue Maske 255.255.255.224 (/27).<br>
          Subnetzbits: 27 − 24 = 3 → 2³ = <strong>8 Subnetze</strong>. Hostbits: 32 − 27 = 5 → 2⁵ − 2 = <strong>30 Hosts</strong>.<br>
          Blockgröße: 256 − 224 = 32 → Blöcke 0, 32, <strong>64</strong>, 96 … → 77 liegt im Block 64–95.<br>
          Netz <strong>192.168.40.64</strong> · erster Host 192.168.40.65 · letzter Host 192.168.40.94 · Broadcast <strong>192.168.40.95</strong></div>
        <div class="callout beispiel"><strong>Beispiel 2 – über die Oktettgrenze (3. Oktett):</strong> Host 172.16.87.10, ursprüngliche Maske /16, neue Maske 255.255.240.0 (/20).<br>
          Subnetzbits: 20 − 16 = 4 → 2⁴ = <strong>16 Subnetze</strong>. Hostbits: 32 − 20 = 12 → 2¹² − 2 = <strong>4094 Hosts</strong>.<br>
          Interessantes Oktett: das 3. Blockgröße 256 − 240 = 16 → 0, 16, 32, 48, 64, <strong>80</strong>, 96 … → 87 liegt im Block 80–95.<br>
          Netz <strong>172.16.80.0</strong> · erster Host 172.16.80.1 · letzter Host 172.16.95.254 · Broadcast <strong>172.16.95.255</strong></div>
        <div class="callout beispiel"><strong>Beispiel 3 – Maske aus Anforderungen:</strong> 192.168.50.0/24 soll auf 6 Abteilungen mit je höchstens 25 Geräten aufgeteilt werden. 2² = 4 reicht nicht, 2³ = 8 ≥ 6 → 3 Bits leihen → /27. Kontrolle Hosts: 2⁵ − 2 = 30 ≥ 25 ✔. Ergebnis: Maske 255.255.255.224, 2 Subnetze bleiben als Reserve.</div>
        <div class="callout beispiel"><strong>Beispiel 4 – über mehrere Oktette:</strong> Host 10.77.200.5, ursprüngliche Maske /8, neue Maske 255.255.128.0 (/17).<br>
          Subnetzbits: 17 − 8 = 9 (8 Bits im 2. Oktett + 1 Bit im 3. Oktett) → 2⁹ = <strong>512 Subnetze</strong>. Hostbits: 32 − 17 = 15 → 2¹⁵ − 2 = <strong>32.766 Hosts</strong>.<br>
          Interessantes Oktett: das 3., Blockgröße 256 − 128 = 128 → Blöcke 0 und <strong>128</strong> → 200 liegt in 128–255.<br>
          Netz <strong>10.77.128.0</strong> · erster Host 10.77.128.1 · letzter Host 10.77.255.254 · Broadcast <strong>10.77.255.255</strong></div>
        <h5>Liegen zwei Adressen im selben Subnetz?</h5>
        <p>Eine der häufigsten Fragen bei der Fehlersuche: Können zwei Geräte direkt (ohne Router) miteinander sprechen? Rechne für <strong>beide</strong> Adressen die Netzadresse mit derselben Maske aus. Sind die Netzadressen gleich, liegen sie im selben Subnetz. Genauso prüfst du, ob das eingetragene Standardgateway im eigenen Subnetz liegt.</p>
        <div class="callout beispiel"><strong>Beispiel:</strong> PC1 192.168.40.77/27 und PC2 192.168.40.97/27. Blockgröße 32: 77 liegt im Block 64–95 → Netz .64; 97 liegt im Block 96–127 → Netz .96. <strong>Verschiedene Subnetze</strong> – obwohl die Adressen nur 20 auseinanderliegen. Die beiden PCs erreichen sich nur über einen Router. Umgekehrt liegen 192.168.10.20/23 und 192.168.11.200/23 im <strong>selben</strong> Netz 192.168.10.0/23 (Blockgröße 2 im 3. Oktett: 10 und 11 gehören zum Block 10–11).</div>
        <div class="callout merke"><strong>Merke:</strong> Bei den Subnetzen wird <strong>nicht</strong> „− 2“ gerechnet, bei den Hosts immer. Der Broadcast ist „nächstes Netz minus 1“, nicht „Netz plus Blockgröße“. (Sehr alte Lehrbücher schlossen das erste und letzte Subnetz aus und rechneten 2ⁿ − 2 – heute sind alle 2ⁿ Subnetze nutzbar.)</div>
        <div class="callout achtung"><strong>Typische Fehler:</strong> falsches Oktett (bei 255.255.128.0 rechnest du im 3. Oktett!), Subnetzbits von /24 statt von der ursprünglichen Maske gezählt, beim Broadcast über Oktettgrenze das 4. Oktett nicht auf 255 gesetzt (172.16.95.255, nicht 172.16.95.0), das Gateway nicht als Host mitgezählt.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Berechnen Sie</em> Netzadresse, Broadcast-Adresse und die Anzahl nutzbarer Hosts (Rechenweg angeben)“, „<em>Teilen Sie</em> das Netz in x gleich große Subnetze und <em>tragen Sie</em> die Werte in die Tabelle ein“, „<em>Geben Sie</em> die erste/letzte nutzbare Adresse an“. Schreibe immer den Rechenweg hin – es gibt Teilpunkte.</div>
      `
    },
    {
      id: "vlsm",
      title: "VLSM: Subnetze mit variabler Länge",
      exam: ["AP2"],
      summary: "Adresskonzepte mit unterschiedlich großen Subnetzen: Vorgehen, Präfix-Tabelle nach Hostbedarf, vollständiges Beispiel und Routen-Zusammenfassung.",
      html: `
        <p>Beim klassischen Subnetting (<strong>FLSM</strong>, Fixed Length Subnet Mask) sind alle Subnetze gleich groß. Das verschwendet Adressen: Eine Router-zu-Router-Verbindung braucht nur 2 Adressen, bekäme bei /27 aber 30. <strong>VLSM</strong> (Variable Length Subnet Mask) erlaubt für jedes Teilnetz eine <strong>eigene, passende Maske</strong>.</p>
        <h5>Vorgehen</h5>
        <ol>
          <li>Hostbedarf je Netz ermitteln – <strong>inklusive Router-Interface (Gateway)</strong>, Switch-Management und Reserve.</li>
          <li>Netze <strong>nach Größe absteigend sortieren</strong> (größtes zuerst!).</li>
          <li>Für jedes Netz das kleinste Präfix wählen, für das 2ʰ − 2 ≥ Bedarf gilt.</li>
          <li>Vom Anfang des Adressbereichs lückenlos vergeben: Das nächste Netz beginnt direkt nach dem Broadcast des vorherigen.</li>
          <li>Kontrolle: Jede Netzadresse muss ein Vielfaches ihrer eigenen Blockgröße sein, kein Bereich darf sich überschneiden.</li>
        </ol>
        <table><thead><tr><th>Bedarf bis … Hosts</th><th>2</th><th>6</th><th>14</th><th>30</th><th>62</th><th>126</th><th>254</th><th>510</th><th>1022</th></tr></thead><tbody>
          <tr><td>Präfix</td><td>/30</td><td>/29</td><td>/28</td><td>/27</td><td>/26</td><td>/25</td><td>/24</td><td>/23</td><td>/22</td></tr>
          <tr><td>Blockgröße (Adressen)</td><td>4</td><td>8</td><td>16</td><td>32</td><td>64</td><td>128</td><td>256</td><td>512</td><td>1024</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel – Nordlicht IT GmbH, Heide:</strong> Verfügbar ist 192.168.20.0/24. Bedarf: Vertrieb 60 Hosts, Technik 28 Hosts, Buchhaltung 12 Hosts, zwei WAN-Strecken zu Filialen mit je 2 Adressen.<br>
          Vertrieb 60 → 2⁶ − 2 = 62 ≥ 60 → /26 (64 Adressen)<br>
          Technik 28 → 2⁵ − 2 = 30 ≥ 28 → /27 (32 Adressen)<br>
          Buchhaltung 12 → 2⁴ − 2 = 14 ≥ 12 → /28 (16 Adressen)<br>
          WAN 1 und 2 → 2² − 2 = 2 → je /30 (4 Adressen)</div>
        <table><thead><tr><th>Netz</th><th>Netzadresse</th><th>Maske</th><th>erster Host</th><th>letzter Host</th><th>Broadcast</th></tr></thead><tbody>
          <tr><td>Vertrieb</td><td>192.168.20.0/26</td><td>255.255.255.192</td><td>.1</td><td>.62</td><td>.63</td></tr>
          <tr><td>Technik</td><td>192.168.20.64/27</td><td>255.255.255.224</td><td>.65</td><td>.94</td><td>.95</td></tr>
          <tr><td>Buchhaltung</td><td>192.168.20.96/28</td><td>255.255.255.240</td><td>.97</td><td>.110</td><td>.111</td></tr>
          <tr><td>WAN 1</td><td>192.168.20.112/30</td><td>255.255.255.252</td><td>.113</td><td>.114</td><td>.115</td></tr>
          <tr><td>WAN 2</td><td>192.168.20.116/30</td><td>255.255.255.252</td><td>.117</td><td>.118</td><td>.119</td></tr>
        </tbody></table>
        <p>Belegt sind 64 + 32 + 16 + 4 + 4 = 120 Adressen. Der Bereich 192.168.20.120 bis 192.168.20.255 (136 Adressen) bleibt für Erweiterungen frei. Mit FLSM und /26 hätte man nur 4 Subnetze gehabt – für 5 Netze zu wenig.</p>
        <h5>Routen zusammenfassen (Summarization)</h5>
        <p>Ein gutes VLSM-Konzept vergibt zusammenhängende Bereiche je Standort. Dann kann ein Router mehrere Netze mit <strong>einer</strong> Route ankündigen: 192.168.0.0/24, 192.168.1.0/24, 192.168.2.0/24 und 192.168.3.0/24 unterscheiden sich nur in den letzten 2 Bits des 3. Oktetts → gemeinsame Route <strong>192.168.0.0/22</strong>. Das verkleinert Routingtabellen.</p>
        <div class="callout merke"><strong>Merke:</strong> Größtes Netz zuerst! Wer mit dem kleinen Netz beginnt, erzeugt Lücken, und große Netze passen nicht mehr auf eine gültige Grenze.</div>
        <div class="callout achtung"><strong>Prüfungsfallen:</strong> Das Gateway (Router-Interface) braucht selbst eine Adresse – 30 PCs plus Router passen nicht in ein /27. Für Punkt-zu-Punkt-Verbindungen wird in Prüfungen /30 erwartet (/31 ist nach RFC 3021 möglich, aber selten gefragt). Überschneidende Bereiche sind ein grober Fehler. Prüfe jede Netzadresse: Sie muss ein Vielfaches ihrer Blockgröße sein – 172.16.8.106/30 ist ungültig, weil 106 ÷ 4 = 26,5.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Erstellen Sie</em> ein Adresskonzept mit möglichst wenig Adressverschwendung“ mit einer Tabelle aus Netz, Präfix, Maske, erstem/letztem Host und Broadcast; oft zusätzlich „<em>Begründen Sie</em> den Einsatz von VLSM“ oder „<em>Geben Sie</em> eine zusammengefasste Route an“.</div>
      `
    },
    {
      id: "routing",
      title: "Routing: Routingtabelle, statisch und dynamisch",
      exam: ["AP2"],
      summary: "Wie Router Wege wählen: Einträge der Routingtabelle, Longest Prefix Match, Default-Route, Metrik und administrative Distanz, RIP und OSPF, Gateway-Redundanz (HSRP/VRRP), Cisco-Befehle.",
      html: `
        <p>Ein <strong>Router</strong> verbindet unterschiedliche IP-Netze (OSI-Schicht 3). Für jedes eingehende Paket liest er die <strong>Ziel-IP</strong>, sucht in seiner <strong>Routingtabelle</strong> den passenden Eintrag und leitet das Paket über das richtige Interface an den nächsten Router (<strong>Next Hop</strong>) oder direkt ans Ziel weiter. Router leiten keine Broadcasts weiter – jedes Router-Interface bildet eine eigene Broadcast-Domäne. Endgeräte schicken alles, was nicht im eigenen Netz liegt, an ihr <strong>Standardgateway</strong>.</p>
        <h5>Aufbau einer Routingtabelle</h5>
        <p>Jeder Eintrag enthält: Zielnetz mit Präfix, Next Hop bzw. ausgehendes Interface, Herkunft des Eintrags, administrative Distanz und Metrik. Beispiel eines Cisco-Routers in Heide:</p>
        <pre><code>R-Heide# show ip route
Gateway of last resort is 203.0.113.1 to network 0.0.0.0
S*   0.0.0.0/0 [1/0] via 203.0.113.1
C    10.0.0.0/30 is directly connected, GigabitEthernet0/1
L    10.0.0.1/32 is directly connected, GigabitEthernet0/1
C    192.168.10.0/24 is directly connected, GigabitEthernet0/0
L    192.168.10.1/32 is directly connected, GigabitEthernet0/0
S    192.168.20.0/24 [1/0] via 10.0.0.2
C    203.0.113.0/30 is directly connected, GigabitEthernet0/2
L    203.0.113.2/32 is directly connected, GigabitEthernet0/2</code></pre>
        <p><strong>C</strong> = direkt verbunden, <strong>L</strong> = eigene Interface-Adresse, <strong>S</strong> = statisch, <strong>S*</strong> = statische Default-Route, <strong>O</strong> = OSPF, <strong>R</strong> = RIP. In <code>[1/0]</code> steht zuerst die administrative Distanz, dann die Metrik.</p>
        <h5>Longest Prefix Match</h5>
        <p>Passen mehrere Einträge, gewinnt der mit dem <strong>längsten Präfix</strong> (der spezifischste). Die <strong>Default-Route</strong> 0.0.0.0/0 passt auf jede Adresse und wird deshalb nur genommen, wenn nichts anderes passt.</p>
        <div class="callout beispiel"><strong>Beispiel:</strong> Tabelle: 10.1.0.0/16 → Router A, 10.1.5.0/24 → Router B, 0.0.0.0/0 → Router C.<br>
          Ziel 10.1.5.9 → passt auf alle drei, längstes Präfix /24 → <strong>B</strong>.<br>
          Ziel 10.1.9.9 → passt auf /16 und /0 → <strong>A</strong>.<br>
          Ziel 8.8.8.8 → passt nur auf die Default-Route → <strong>C</strong>.</div>
        <h5>Statisches und dynamisches Routing</h5>
        <table><thead><tr><th>Merkmal</th><th>statisch</th><th>dynamisch (RIP, OSPF …)</th></tr></thead><tbody>
          <tr><td>Pflege</td><td>Admin trägt jede Route von Hand ein</td><td>Router tauschen Routen automatisch aus</td></tr>
          <tr><td>Reaktion auf Ausfälle</td><td>keine – Route bleibt, bis der Admin ändert</td><td>automatische Umleitung (Konvergenz)</td></tr>
          <tr><td>Ressourcen</td><td>keine CPU-/Bandbreitenlast</td><td>Protokollverkehr, CPU, RAM</td></tr>
          <tr><td>Sicherheit</td><td>vorhersehbar, nichts wird angekündigt</td><td>Authentifizierung nötig</td></tr>
          <tr><td>Einsatz</td><td>kleine Netze, Stub-Netze, Default-Route zum Provider</td><td>größere, redundante Netze</td></tr>
        </tbody></table>
        <h5>Metrik und administrative Distanz</h5>
        <p>Die <strong>Metrik</strong> bewertet Wege <em>innerhalb</em> eines Protokolls (kleiner = besser). Die <strong>administrative Distanz</strong> (AD) entscheidet, welcher Quelle der Router mehr vertraut, wenn mehrere Protokolle dasselbe Ziel kennen: direkt verbunden 0, statisch 1, OSPF 110, RIP 120.</p>
        <table><thead><tr><th></th><th>RIP (v2)</th><th>OSPF</th></tr></thead><tbody>
          <tr><td>Verfahren</td><td>Distanzvektor („Routing by rumor“)</td><td>Link-State (jeder Router kennt die Topologie)</td></tr>
          <tr><td>Metrik</td><td>Hop-Anzahl, max. 15 (16 = unerreichbar)</td><td>Kosten = Referenzbandbreite (100 Mbit/s) ÷ Bandbreite</td></tr>
          <tr><td>Updates</td><td>ganze Tabelle alle 30 s an 224.0.0.9</td><td>nur bei Änderungen (LSAs), Hellos an 224.0.0.5</td></tr>
          <tr><td>Berechnung</td><td>Bellman-Ford</td><td>Dijkstra (SPF), Bereiche mit Backbone Area 0</td></tr>
          <tr><td>Konvergenz / Größe</td><td>langsam / kleine Netze</td><td>schnell / auch große Netze</td></tr>
        </tbody></table>
        <h5>Cisco-Konfiguration</h5>
        <pre><code>R-Heide(config)# ip route 192.168.20.0 255.255.255.0 10.0.0.2
R-Heide(config)# ip route 0.0.0.0 0.0.0.0 203.0.113.1
R-Heide(config)# router ospf 1
R-Heide(config-router)# network 192.168.10.0 0.0.0.255 area 0
R-Heide(config-router)# network 10.0.0.0 0.0.0.3 area 0</code></pre>
        <p>Beim OSPF-<code>network</code>-Befehl steht eine <strong>Wildcard-Maske</strong> (invertierte Maske: 255.255.255.0 → 0.0.0.255). Unter Windows zeigt <code>route print</code>, unter Linux <code>ip route</code> die Routingtabelle. RIP und OSPF sind <strong>Interior Gateway Protocols</strong> (innerhalb einer Organisation); zwischen den Netzen der Provider im Internet arbeitet das Exterior Gateway Protocol <strong>BGP</strong>.</p>
        <h5>So leitet ein Router ein Paket weiter</h5>
        <ol>
          <li>Frame empfangen, Prüfsumme (FCS) kontrollieren, Ethernet-Header entfernen.</li>
          <li>Ziel-IP lesen und die <strong>TTL um 1 verringern</strong>. Erreicht sie 0, verwirft der Router das Paket und meldet dem Absender ICMP <em>Time Exceeded</em> – so werden Routing-Schleifen begrenzt (und tracert nutzt genau das).</li>
          <li>In der Routingtabelle den passenden Eintrag nach Longest Prefix Match suchen. Passt nichts und gibt es keine Default-Route, wird das Paket verworfen (ICMP <em>Destination Unreachable</em>).</li>
          <li>MAC-Adresse des Next Hops (bzw. des Ziels im direkt verbundenen Netz) per ARP ermitteln und das Paket in einen <strong>neuen Frame</strong> packen. Weil sich die TTL geändert hat, berechnet er auch die IPv4-Header-Prüfsumme neu.</li>
        </ol>
        <h5>Gateway-Redundanz (First Hop Redundancy)</h5>
        <p>Fällt das Standardgateway aus, sind alle Clients des Netzes offline – ein <strong>Single Point of Failure</strong>. Mit <strong>HSRP</strong> (Cisco) oder <strong>VRRP</strong> (herstellerneutral) teilen sich zwei Router eine <strong>virtuelle IP- und MAC-Adresse</strong>, die die Clients als Gateway eintragen. Der Router mit der höchsten Priorität ist aktiv (HSRP: Active, VRRP: Master), der andere (Standby/Backup) überwacht ihn per Hello-Nachrichten und übernimmt bei einem Ausfall automatisch. Mit <strong>Preemption</strong> übernimmt der bevorzugte Router nach seiner Rückkehr wieder.</p>
        <div class="callout merke"><strong>Merke:</strong> Kommunikation braucht <strong>Hin- und Rückweg</strong>. Kennt R-Heide das Netz in Husum, R-Husum aber nicht das Netz in Heide, kommen Pings an, die Antworten jedoch nicht zurück.</div>
        <div class="callout achtung"><strong>Prüfungsfallen:</strong> Der Next Hop muss in einem direkt verbundenen Netz liegen. Bei OSPF haben 100-Mbit/s- und 1-Gbit/s-Links mit Standard-Referenzbandbreite beide Kosten 1. Die AD vergleicht Protokolle, die Metrik Wege innerhalb eines Protokolls.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Ergänzen Sie</em> die Routingtabelle von Router R2“, „<em>Geben Sie</em> den Befehl für eine Default-Route an“, „<em>Entscheiden Sie</em>, über welchen Eintrag ein Paket an 10.1.5.9 geleitet wird“, „<em>Vergleichen Sie</em> statisches und dynamisches Routing“.</div>
      `
    },
    {
      id: "switching-stp",
      title: "Netzkomponenten, Switching und Spanning Tree",
      exam: ["AP1", "AP2"],
      summary: "Komponenten nach Datenblatt auswählen (PoE-Klassen, Budget und Strom, SFP), Arbeitsweise eines Switches, Kollisions- und Broadcast-Domänen, STP-Grundidee, Link Aggregation, Port Security und Layer-2-Angriffe.",
      html: `
        <p>Ein <strong>Switch</strong> verbindet Endgeräte im selben Netz und arbeitet klassisch auf OSI-Schicht 2. Anders als ein Hub, der jedes Signal an alle Ports verteilt, leitet ein Switch Frames gezielt nur an den Port weiter, an dem der Empfänger hängt. Dazu führt er eine <strong>MAC-Adresstabelle</strong> (CAM-Table): MAC-Adresse → Port (→ VLAN).</p>
        <h5>So arbeitet ein Switch</h5>
        <ul>
          <li><strong>Learning:</strong> Aus jedem eingehenden Frame merkt er sich die <strong>Quell-MAC</strong> und den Eingangsport.</li>
          <li><strong>Forwarding/Filtering:</strong> Ist die <strong>Ziel-MAC</strong> bekannt, geht der Frame nur an diesen Port.</li>
          <li><strong>Flooding:</strong> Unbekannte Ziel-MAC, Broadcast (FF:FF:FF:FF:FF:FF) oder Multicast → an alle Ports außer dem Eingangsport.</li>
          <li><strong>Aging:</strong> Einträge verfallen nach einer Zeit ohne Verkehr (bei Cisco standardmäßig 300 s).</li>
        </ul>
        <div class="callout beispiel"><strong>Beispiel:</strong> Die MAC-Tabelle ist leer. PC A (Port 1) sendet an PC B (Port 3).<br>
          1. Switch lernt: A → Port 1. Ziel B unbekannt → <strong>Flooding</strong> an Port 2, 3, 4.<br>
          2. B antwortet an A. Switch lernt: B → Port 3. Ziel A bekannt → nur an Port 1.<br>
          3. Ab jetzt laufen alle Frames zwischen A und B nur noch über Port 1 und 3.</div>
        <h5>Kollisions- und Broadcast-Domänen</h5>
        <table><thead><tr><th>Gerät</th><th>OSI</th><th>Kollisionsdomäne</th><th>Broadcast-Domäne</th></tr></thead><tbody>
          <tr><td>Hub/Repeater</td><td>1</td><td>alle Ports gemeinsam</td><td>eine gemeinsame</td></tr>
          <tr><td>Switch/Bridge</td><td>2</td><td>jeder Port eine eigene</td><td>eine gemeinsame (je VLAN eine)</td></tr>
          <tr><td>Router</td><td>3</td><td>jedes Interface eine eigene</td><td>jedes Interface eine eigene</td></tr>
        </tbody></table>
        <p>Weitere Begriffe: <strong>Store-and-Forward</strong> (ganzen Frame lesen und FCS prüfen, Standard) vs. <strong>Cut-Through</strong> (nach der Ziel-MAC sofort weiterleiten, geringere Latenz). <strong>Managed Switches</strong> bieten VLANs, STP, Port Security, SNMP; ein <strong>Layer-3-Switch</strong> kann zusätzlich routen.</p>
        <h5>Komponenten nach Datenblatt auswählen</h5>
        <p>Wichtige Kriterien bei Switches: Portanzahl und -geschwindigkeit, Uplinks (SFP/SFP+), Layer 2 oder 3, VLAN-Fähigkeit, Stacking und das <strong>PoE-Budget</strong>. <strong>PoE</strong> (Power over Ethernet) versorgt Access Points, IP-Telefone und Kameras über das Datenkabel. Der Switch ist die Stromquelle (<strong>PSE</strong>, Power Sourcing Equipment), das Endgerät der Verbraucher (<strong>PD</strong>, Powered Device). Weil im bis zu 100 m langen Kabel Leistung verloren geht, kommt am Endgerät weniger an, als der Port liefert:</p>
        <table><thead><tr><th>Standard</th><th>Bezeichnung</th><th>max. am Switch-Port (PSE)</th><th>garantiert am Endgerät (PD)</th><th>Strom</th></tr></thead><tbody>
          <tr><td>IEEE 802.3af</td><td>PoE (Typ 1)</td><td>15,4 W</td><td>12,95 W</td><td>max. 350 mA</td></tr>
          <tr><td>IEEE 802.3at</td><td>PoE+ (Typ 2)</td><td>30 W</td><td>25,5 W</td><td>max. 600 mA</td></tr>
          <tr><td>IEEE 802.3bt</td><td>PoE++ Typ 3 / Typ 4</td><td>60 W / 90 W</td><td>51 W / 71,3 W</td><td>über alle 4 Adernpaare</td></tr>
        </tbody></table>
        <div class="callout formel">Leistung P = U × I → Strom I = P ÷ U (PoE rechnerisch meist mit 48 V)<br>PoE-Budget: Summe der Port-Leistungen (Klassen-Maximum am Switch) ≤ Budget des Switches</div>
        <div class="callout beispiel"><strong>Beispiel PoE-Budget:</strong> 8 Access Points (802.3at) und 6 IP-Telefone (802.3af) an einem Switch mit 370 W Budget: 8 × 30 W + 6 × 15,4 W = 240 W + 92,4 W = 332,4 W ≤ 370 W → reicht, Reserve 37,6 W.<br>
          <strong>Strom:</strong> Ein Access Point nimmt 20 W auf. Bei 48 V fließen I = 20 W ÷ 48 V ≈ 0,417 A ≈ <strong>417 mA</strong> – das liegt unter den 600 mA von PoE+, aber über den 350 mA von 802.3af.</div>
        <div class="callout achtung"><strong>Prüfungsfalle PoE:</strong> Steht im Datenblatt eines Geräts „max. 11 W, 802.3af“, rechnest du fürs Budget sicherheitshalber mit den 15,4 W je Port (Klassen-Maximum am Switch), nicht mit 11 W. 12,95 W bzw. 25,5 W sind die Werte am Endgerät, nicht am Switch.</div>
        <p><strong>Glasfaser-Uplinks</strong> laufen über steckbare SFP-Module: Multimode für kurze Strecken im Gebäude, Singlemode für Kilometer. Kommt ein Uplink nicht hoch, sind typische Ursachen: falscher Modul- oder Fasertyp, abweichende Geschwindigkeit, vertauschte Fasern (Rx/Tx) oder verschmutzte Stecker.</p>
        <h5>Spanning Tree Protocol (STP, ursprünglich IEEE 802.1D, heute Teil von IEEE 802.1Q)</h5>
        <p>Redundante Verbindungen zwischen Switches erhöhen die Ausfallsicherheit, erzeugen aber <strong>Schleifen</strong> (Loops). Weil Ethernet-Frames keine Lebensdauer (TTL) haben, kreisen Broadcasts endlos: <strong>Broadcast-Sturm</strong>, instabile MAC-Tabellen, doppelte Frames – das Netz steht. STP verhindert das, indem es redundante Ports <strong>logisch blockiert</strong> und erst bei einem Ausfall freigibt.</p>
        <ol>
          <li><strong>Root Bridge wählen:</strong> Der Switch mit der niedrigsten <strong>Bridge-ID</strong> (Priorität, Standard 32768, danach MAC-Adresse) wird Wurzel des Baums.</li>
          <li><strong>Root Ports:</strong> Jeder andere Switch wählt seinen Port mit den geringsten Pfadkosten zur Root Bridge.</li>
          <li><strong>Designated Ports:</strong> Pro Segment leitet genau ein Port weiter.</li>
          <li>Alle übrigen Ports werden <strong>blockiert</strong> (Alternate). Die Switches tauschen dazu <strong>BPDUs</strong> aus.</li>
        </ol>
        <p>Klassisches STP braucht beim Umschalten 30–50 Sekunden (Blocking → Listening → Learning → Forwarding). <strong>RSTP</strong> (Rapid STP, 802.1w) schafft das in wenigen Sekunden. Ports zu Endgeräten werden mit <strong>PortFast</strong> sofort aktiv.</p>
        <h5>Link Aggregation und Port Security</h5>
        <p><strong>Link Aggregation</strong> (LACP, IEEE 802.1AX, bei Cisco „EtherChannel“) bündelt mehrere physische Links zu einem logischen: mehr Bandbreite und Redundanz, STP sieht nur einen Link. Voraussetzung: gleiche Geschwindigkeit und Duplex, gleiche VLAN-/Trunk-Einstellungen, dieselbe Gegenstelle. <strong>Port Security</strong> begrenzt die erlaubten MAC-Adressen je Port und sperrt den Port bei Verstoß.</p>
        <pre><code>S1# show mac address-table
S1# show spanning-tree
S1(config)# spanning-tree vlan 1 priority 4096
S1(config)# interface fa0/5
S1(config-if)# spanning-tree portfast
S1(config-if)# switchport port-security maximum 2</code></pre>
        <h5>Angriffe auf Layer 2 und Gegenmaßnahmen am Switch</h5>
        <table><thead><tr><th>Angriff</th><th>Wirkung</th><th>Gegenmaßnahme</th></tr></thead><tbody>
          <tr><td>MAC-Flooding</td><td>Tausende gefälschte Quell-MACs füllen die MAC-Tabelle; der Switch flutet danach alle Frames wie ein Hub → Mitlesen möglich</td><td>Port Security (maximale Anzahl MAC-Adressen je Port)</td></tr>
          <tr><td>ARP-Spoofing</td><td>gefälschte ARP-Replies lenken Verkehr über den Angreifer (Man-in-the-Middle)</td><td>Dynamic ARP Inspection mit DHCP-Snooping</td></tr>
          <tr><td>Rogue-DHCP</td><td>fremder DHCP-Server verteilt falsches Gateway/DNS</td><td>DHCP-Snooping: nur „trusted“ Ports dürfen DHCP-Angebote senden</td></tr>
          <tr><td>VLAN-Hopping</td><td>Zugriff auf fremde VLANs (Trunk aushandeln oder doppelt getaggte Frames)</td><td>Endgeräte-Ports fest als Access-Port, automatische Trunk-Aushandlung aus, Native VLAN ungenutzt und nicht VLAN 1, ungenutzte Ports abschalten</td></tr>
          <tr><td>gefälschte BPDUs</td><td>Angreifer-Switch wird Root Bridge, Verkehr läuft über ihn</td><td>BPDU Guard an PortFast-Ports</td></tr>
        </tbody></table>
        <div class="callout merke"><strong>Merke:</strong> Der Switch lernt aus der <strong>Quell</strong>-MAC und entscheidet anhand der <strong>Ziel</strong>-MAC. STP schaltet Redundanz nicht ab, sondern hält sie als blockierten Reserveweg bereit.</div>
        <div class="callout achtung"><strong>Prüfungsfallen:</strong> Ein Switch trennt Kollisions-, aber keine Broadcast-Domänen (dafür braucht es VLANs oder Router). Root Bridge wird der Switch mit der <em>niedrigsten</em>, nicht der höchsten Bridge-ID.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Beschreiben Sie</em>, wie ein Switch seine MAC-Tabelle füllt“, „<em>Erläutern Sie</em> das Problem redundanter Switch-Verbindungen und die Lösung durch STP“, „<em>Bestimmen Sie</em> die Root Bridge“, „<em>Nennen Sie</em> Vorteile von Link Aggregation“. Schon in der AP1: „<em>Prüfen Sie</em>, ob das PoE-Budget reicht“ und „<em>Berechnen Sie</em> den Strom in mA bei 48 V“ – oft mit englischem Datenblatt.</div>
      `
    },
    {
      id: "vlan",
      title: "VLAN: IEEE 802.1Q, Access/Trunk und Inter-VLAN-Routing",
      exam: ["AP2"],
      summary: "Virtuelle LANs planen: Vorteile, Access- und Trunk-Ports, der 802.1Q-Tag, Native VLAN, Router-on-a-Stick und Layer-3-Switch mit Cisco-Konfiguration.",
      html: `
        <p>Ein <strong>VLAN</strong> (Virtual LAN) teilt ein physisches Switch-Netz in mehrere <strong>logische Netze</strong>. Jedes VLAN ist eine <strong>eigene Broadcast-Domäne</strong> und bekommt in der Regel ein eigenes IP-Subnetz. Geräte in verschiedenen VLANs können sich – auch am selben Switch – nur über einen <strong>Router oder Layer-3-Switch</strong> erreichen.</p>
        <ul>
          <li><strong>Sicherheit:</strong> Abteilungen, Gäste, Server und Management sind getrennt; Übergänge lassen sich per ACL/Firewall steuern.</li>
          <li><strong>Performance:</strong> kleinere Broadcast-Domänen.</li>
          <li><strong>Flexibilität:</strong> Zuordnung unabhängig vom Standort – ein Umzug ist nur eine Portänderung.</li>
          <li><strong>Kosten und QoS:</strong> weniger Hardware; ein eigenes Voice-VLAN lässt sich priorisieren.</li>
        </ul>
        <h5>Access- und Trunk-Ports</h5>
        <table><thead><tr><th></th><th>Access-Port</th><th>Trunk-Port</th></tr></thead><tbody>
          <tr><td>VLANs</td><td>genau ein VLAN</td><td>mehrere VLANs über eine Leitung</td></tr>
          <tr><td>Tagging</td><td>untagged – das Endgerät merkt nichts vom VLAN</td><td>tagged nach IEEE 802.1Q (außer Native VLAN)</td></tr>
          <tr><td>Einsatz</td><td>PC, Drucker, Kamera</td><td>Switch ↔ Switch, Switch ↔ Router, Switch ↔ Hypervisor/AP</td></tr>
        </tbody></table>
        <h5>Der 802.1Q-Tag</h5>
        <p>Auf Trunks fügt der Switch nach der Quell-MAC einen <strong>4 Byte</strong> langen Tag in den Ethernet-Frame ein (maximale Framegröße dadurch 1522 statt 1518 Byte):</p>
        <table><thead><tr><th>Feld</th><th>Länge</th><th>Inhalt</th></tr></thead><tbody>
          <tr><td>TPID</td><td>16 Bit</td><td>0x8100 = „hier folgt ein VLAN-Tag“</td></tr>
          <tr><td>PCP</td><td>3 Bit</td><td>Priorität 0–7 (IEEE 802.1p, QoS)</td></tr>
          <tr><td>DEI</td><td>1 Bit</td><td>Frame darf bei Überlast verworfen werden</td></tr>
          <tr><td>VID</td><td>12 Bit</td><td>VLAN-ID: 2¹² = 4096 Werte, nutzbar 1–4094</td></tr>
        </tbody></table>
        <p>Das <strong>Native VLAN</strong> wird auf dem Trunk ungetaggt übertragen (Standard: VLAN 1). Es muss auf beiden Seiten gleich sein; aus Sicherheitsgründen nimmt man ein ungenutztes VLAN (z. B. 99) statt VLAN 1.</p>
        <h5>Inter-VLAN-Routing</h5>
        <table><thead><tr><th>Variante</th><th>Prinzip</th><th>Bewertung</th></tr></thead><tbody>
          <tr><td>Router-on-a-Stick</td><td>ein Trunk zum Router, je VLAN ein Subinterface mit <code>encapsulation dot1Q</code></td><td>günstig, aber der eine Link ist Engpass</td></tr>
          <tr><td>Layer-3-Switch</td><td>je VLAN eine SVI (<code>interface vlan 10</code>), Routing in Hardware</td><td>schnell, Standard im Unternehmen</td></tr>
          <tr><td>Router mit je einem Port pro VLAN</td><td>ein Access-Link je VLAN</td><td>skaliert schlecht</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel – VLAN-Plan der Nordlicht IT GmbH:</strong> VLAN 10 Verwaltung 192.168.10.0/24 (Gateway .1) · VLAN 20 Werkstatt 192.168.20.0/24 (Gateway .1) · VLAN 30 Telefonie 192.168.30.0/24 · VLAN 99 Management/Native. Switch S1 (Ports Fa0/1–10 Verwaltung, Fa0/11–20 Werkstatt, Uplink G0/1 als Trunk zum Router R1):</div>
        <pre><code>S1(config)# vlan 10
S1(config-vlan)# name Verwaltung
S1(config-vlan)# vlan 20
S1(config-vlan)# name Werkstatt
S1(config-vlan)# vlan 30
S1(config-vlan)# name Telefonie
S1(config-vlan)# vlan 99
S1(config-vlan)# name Management
S1(config)# interface range fa0/1 - 10
S1(config-if-range)# switchport mode access
S1(config-if-range)# switchport access vlan 10
S1(config)# interface range fa0/11 - 20
S1(config-if-range)# switchport mode access
S1(config-if-range)# switchport access vlan 20
S1(config)# interface g0/1
S1(config-if)# switchport mode trunk
S1(config-if)# switchport trunk native vlan 99
S1(config-if)# switchport trunk allowed vlan 10,20,30,99

R1(config)# interface g0/0
R1(config-if)# no shutdown
R1(config)# interface g0/0.10
R1(config-subif)# encapsulation dot1Q 10
R1(config-subif)# ip address 192.168.10.1 255.255.255.0
R1(config)# interface g0/0.20
R1(config-subif)# encapsulation dot1Q 20
R1(config-subif)# ip address 192.168.20.1 255.255.255.0</code></pre>
        <p>Kontrolle mit <code>show vlan brief</code> (welcher Port in welchem VLAN) und <code>show interfaces trunk</code>. Beim <strong>Layer-3-Switch</strong> schaltest du das Routing ein und legst je VLAN ein virtuelles Interface (SVI) mit der Gateway-Adresse an:</p>
        <pre><code>L3SW(config)# ip routing
L3SW(config)# interface vlan 10
L3SW(config-if)# ip address 192.168.10.1 255.255.255.0
L3SW(config-if)# no shutdown
L3SW(config)# interface vlan 20
L3SW(config-if)# ip address 192.168.20.1 255.255.255.0
L3SW(config-if)# no shutdown</code></pre>
        <p>Auf manchen Multilayer-Switches (z. B. Catalyst 3560 in Packet Tracer) muss vor <code>switchport mode trunk</code> noch <code>switchport trunk encapsulation dot1q</code> eingegeben werden, weil sie zusätzlich das alte Cisco-Verfahren ISL kennen.</p>
        <div class="callout merke"><strong>Merke:</strong> 1 VLAN = 1 Broadcast-Domäne = 1 IP-Subnetz. Access = ein VLAN, untagged. Trunk = viele VLANs, tagged.</div>
        <div class="callout achtung"><strong>Prüfungsfallen:</strong> Zwei PCs am selben Switch, aber in verschiedenen VLANs, erreichen sich ohne Router nicht. Das Gateway der PCs ist die IP des jeweiligen Subinterfaces bzw. der SVI. Ein Native-VLAN-Mismatch führt zu Fehlern und ist ein Sicherheitsrisiko (VLAN-Hopping).</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Nennen Sie</em> drei Vorteile von VLANs“, „<em>Unterscheiden Sie</em> Access- und Trunk-Port“, „<em>Erläutern Sie</em> den Aufbau des 802.1Q-Tags“, „<em>Ergänzen Sie</em> die Switch-/Router-Konfiguration“ oder „<em>Erstellen Sie</em> einen VLAN- und IP-Plan“.</div>
      `
    },
    {
      id: "nat-pat",
      title: "NAT/PAT, WAN-Anbindung und Verfügbarkeit",
      exam: ["AP2"],
      summary: "Adressübersetzung (statisches NAT, PAT, Port-Forwarding), WAN-Anbindungen, SD-WAN und Cloud-Modelle sowie Verfügbarkeit und Übertragungsdauer berechnen.",
      html: `
        <p>Private IPv4-Adressen (10/8, 172.16/12, 192.168/16) werden im Internet nicht geroutet. <strong>NAT</strong> (Network Address Translation) ersetzt deshalb am Übergang ins Internet die private Quelladresse durch eine öffentliche und merkt sich die Zuordnung in einer <strong>Übersetzungstabelle</strong>, damit Antworten zurückfinden. NAT war die wichtigste Maßnahme gegen den IPv4-Adressmangel.</p>
        <h5>Begriffe (Cisco)</h5>
        <ul>
          <li><strong>Inside Local:</strong> private Adresse des internen Hosts, z. B. 192.168.10.11.</li>
          <li><strong>Inside Global:</strong> öffentliche Adresse, unter der der interne Host im Internet erscheint, z. B. 203.0.113.5.</li>
          <li><strong>Outside Global:</strong> öffentliche Adresse des externen Ziels, z. B. ein Webserver.</li>
        </ul>
        <h5>NAT-Varianten</h5>
        <table><thead><tr><th>Variante</th><th>Zuordnung</th><th>typischer Einsatz</th></tr></thead><tbody>
          <tr><td>Statisches NAT</td><td>1 : 1, fest</td><td>interner Server soll immer unter derselben öffentlichen IP erreichbar sein</td></tr>
          <tr><td>Dynamisches NAT</td><td>n : m aus einem Pool öffentlicher Adressen</td><td>selten; Pool muss groß genug sein</td></tr>
          <tr><td>PAT / NAT-Overload</td><td>n : 1 – viele interne Hosts teilen sich <strong>eine</strong> öffentliche IP, unterschieden über <strong>Portnummern</strong></td><td>Standard in jedem Firmen- und Heimrouter</td></tr>
          <tr><td>Port-Forwarding (Destination-NAT)</td><td>öffentliche IP:Port → interne IP:Port</td><td>Webserver oder VPN-Gateway hinter dem Router erreichbar machen</td></tr>
        </tbody></table>
        <div class="callout beispiel"><strong>Beispiel – PAT-Tabelle:</strong> Drei PCs der Nordlicht IT GmbH surfen gleichzeitig über die öffentliche Adresse 203.0.113.5.
          <table><thead><tr><th>Inside Local</th><th>Inside Global</th><th>Outside Global</th></tr></thead><tbody>
            <tr><td>192.168.10.11:50211</td><td>203.0.113.5:50211</td><td>198.51.100.20:443</td></tr>
            <tr><td>192.168.10.12:50211</td><td>203.0.113.5:50212</td><td>198.51.100.20:443</td></tr>
            <tr><td>192.168.10.13:61003</td><td>203.0.113.5:61003</td><td>198.51.100.30:443</td></tr>
          </tbody></table>
          PC .11 und PC .12 haben zufällig denselben Quellport gewählt. Der Router ändert deshalb beim zweiten den Port auf 50212. Kommt eine Antwort an 203.0.113.5:50212, schlägt er nach und leitet sie an 192.168.10.12:50211 weiter.</div>
        <h5>Vor- und Nachteile</h5>
        <div class="grid-2">
          <div class="callout merke"><strong>Vorteile:</strong><ul><li>spart öffentliche IPv4-Adressen</li><li>interne Struktur ist von außen nicht sichtbar</li><li>Providerwechsel ändert nur die öffentliche Adresse</li></ul></div>
          <div class="callout achtung"><strong>Nachteile:</strong><ul><li>bricht das Ende-zu-Ende-Prinzip; eingehende Verbindungen nur mit Port-Forwarding</li><li>Probleme mit IPsec und VoIP (Abhilfe: NAT-Traversal über UDP 4500, STUN)</li><li>Rückverfolgung schwieriger; bei Carrier-Grade-NAT des Providers kein Port-Forwarding möglich</li></ul></div>
        </div>
        <h5>Cisco-Konfiguration (PAT und Port-Forwarding)</h5>
        <pre><code>R1(config)# interface g0/0
R1(config-if)# ip nat inside
R1(config)# interface g0/1
R1(config-if)# ip nat outside
R1(config)# access-list 1 permit 192.168.10.0 0.0.0.255
R1(config)# ip nat inside source list 1 interface g0/1 overload
R1(config)# ip nat inside source static tcp 192.168.10.50 443 interface g0/1 443
R1# show ip nat translations</code></pre>
        <p>Die ACL legt fest, welche internen Adressen übersetzt werden; <code>overload</code> aktiviert PAT. Die letzte Zeile leitet HTTPS-Anfragen an die öffentliche Adresse auf den internen Webserver 192.168.10.50 weiter.</p>
        <div class="callout merke"><strong>Merke:</strong> NAT ist <strong>keine Firewall</strong> und ändert nur IP- und Port-Header – deshalb funktioniert es auch mit TLS-verschlüsselten Daten. Mit IPv6 ist NAT normalerweise überflüssig.</div>
        <h5>WAN-Anbindung und Cloud</h5>
        <p>Anschlussarten: <strong>DSL/VDSL</strong> (Kupfer, meist asymmetrisch), <strong>Kabel</strong> (Koax, geteiltes Medium), <strong>Glasfaser</strong> (FTTH, hohe und oft symmetrische Raten), <strong>5G</strong> (schnell verfügbar, gut als Backup), <strong>Standleitung/MPLS</strong> (garantierte Bandbreite mit SLA, teuer). <strong>SD-WAN</strong> steuert mehrere günstige Leitungen zentral per Software und verteilt den Verkehr nach Richtlinien. Dienste aus der Cloud: <strong>IaaS</strong> (virtuelle Server/Netze), <strong>PaaS</strong> (Plattform), <strong>SaaS</strong> (fertige Software) – als Public, Private oder Hybrid Cloud.</p>
        <h5>Verfügbarkeit und Übertragungsdauer berechnen</h5>
        <div class="callout formel">Verfügbarkeit A = MTBF ÷ (MTBF + MTTR)<br>in Reihe: A = A₁ × A₂ · parallel: A = 1 − (1 − A₁) × (1 − A₂)<br>Ausfallzeit pro Jahr = (1 − A) × 8760 h<br>Übertragungsdauer t = Datenmenge in Bit ÷ (Datenrate × (1 − Overhead))</div>
        <div class="callout beispiel"><strong>Beispiel:</strong> Zwei unabhängige Provider mit je 99 % parallel: 1 − 0,01 × 0,01 = <strong>99,99 %</strong> → 0,0001 × 8760 h ≈ 52,6 min Ausfall pro Jahr. Dahinter in Reihe eine Firewall mit 99,95 %: 0,9999 × 0,9995 ≈ 99,94 % → ca. 5,3 h pro Jahr – die einzelne Firewall ist jetzt der Single Point of Failure.<br>
          20 GB Backup über 250 Mbit/s mit 8 % Overhead: 20 × 10⁹ × 8 bit ÷ (250 × 10⁶ bit/s × 0,92) ≈ 696 s ≈ <strong>11,6 min</strong> (bei 20 GiB: 20 × 2³⁰ × 8 bit → ≈ 747 s ≈ 12,4 min).</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Vervollständigen Sie</em> die NAT-Tabelle“, „<em>Begründen Sie</em>, warum der Webserver von außen nicht erreichbar ist“, „<em>Berechnen Sie</em> die Verfügbarkeit bzw. jährliche Ausfallzeit“, „<em>Berechnen Sie</em> die Übertragungsdauer unter Berücksichtigung des Overheads“, „<em>Vergleichen Sie</em> zwei WAN-Anbindungen“.</div>
      `
    },
    {
      id: "dhcp-dns",
      title: "DHCP und DNS",
      exam: ["AP1", "AP2"],
      summary: "Automatische IP-Konfiguration mit DHCP (DORA, Lease, Reservierung, Relay, APIPA) und Namensauflösung mit DNS (Hierarchie, rekursiv/iterativ, Zonen, Resource Records).",
      html: `
        <h5>DHCP – Dynamic Host Configuration Protocol</h5>
        <p>DHCP verteilt automatisch <strong>IP-Adresse, Subnetzmaske, Standardgateway (Option 3), DNS-Server (Option 6)</strong>, Domänenname und <strong>Lease-Dauer</strong>. Das spart Arbeit und verhindert doppelt vergebene Adressen. DHCP nutzt <strong>UDP</strong>: Server Port 67, Client Port 68.</p>
        <table><thead><tr><th>Schritt</th><th>Richtung</th><th>Inhalt</th></tr></thead><tbody>
          <tr><td><strong>D</strong>iscover</td><td>Client → Broadcast (0.0.0.0 → 255.255.255.255)</td><td>„Gibt es hier einen DHCP-Server?“</td></tr>
          <tr><td><strong>O</strong>ffer</td><td>Server → Client</td><td>Angebot einer freien Adresse mit Optionen</td></tr>
          <tr><td><strong>R</strong>equest</td><td>Client → Broadcast</td><td>„Ich nehme das Angebot von Server X“ – andere Server ziehen ihr Angebot zurück</td></tr>
          <tr><td><strong>A</strong>cknowledge</td><td>Server → Client</td><td>Bestätigung, die Lease beginnt</td></tr>
        </tbody></table>
        <ul>
          <li><strong>Lease-Verlängerung:</strong> nach 50 % der Laufzeit per Unicast beim bekannten Server, ab 87,5 % per Broadcast bei jedem Server.</li>
          <li><strong>Reservierung:</strong> Ein Gerät erhält anhand seiner MAC-Adresse immer dieselbe IP (z. B. Drucker).</li>
          <li><strong>Ausschlussbereich:</strong> Adressen für Router, Server und Switches werden nicht verteilt.</li>
          <li><strong>DHCP-Relay:</strong> Broadcasts enden am Router. Ein Relay-Agent (Cisco: <code>ip helper-address</code>) leitet DHCP-Anfragen als Unicast an einen zentralen Server weiter und trägt die Gateway-Adresse ein, damit der Server den richtigen Bereich wählt.</li>
          <li><strong>APIPA:</strong> Antwortet kein Server, gibt sich Windows eine Adresse aus 169.254.0.0/16 – nur lokal nutzbar, kein Internet.</li>
          <li><strong>Sicherheit:</strong> Ein fremder („Rogue“) DHCP-Server kann falsche Gateways verteilen → Schutz durch <strong>DHCP Snooping</strong> am Switch.</li>
        </ul>
        <pre><code>R1(config)# ip dhcp excluded-address 192.168.10.1 192.168.10.20
R1(config)# ip dhcp pool VERWALTUNG
R1(dhcp-config)# network 192.168.10.0 255.255.255.0
R1(dhcp-config)# default-router 192.168.10.1
R1(dhcp-config)# dns-server 192.168.10.5
R1(config)# interface g0/1
R1(config-if)# ip helper-address 10.0.0.10</code></pre>
        <h5>DNS – Domain Name System</h5>
        <p>DNS übersetzt Namen in IP-Adressen (Forward Lookup) und umgekehrt (Reverse Lookup). Der Namensraum ist hierarchisch: <strong>Root (.)</strong> → <strong>Top-Level-Domain</strong> (de, com) → <strong>Second-Level-Domain</strong> (nordlicht-it.example) → Subdomain/Host (www). Der vollständige Name <code>www.nordlicht-it.example.</code> heißt <strong>FQDN</strong>. DNS nutzt Port 53 (UDP, bei großen Antworten und Zonentransfers TCP).</p>
        <ol>
          <li>Der Client prüft seinen Cache und die hosts-Datei.</li>
          <li>Er stellt eine <strong>rekursive Anfrage</strong> an seinen DNS-Server (Resolver): „Liefere mir die fertige Antwort.“</li>
          <li>Der Resolver fragt <strong>iterativ</strong>: Root-Server → verweist auf TLD-Server → verweist auf den <strong>autoritativen</strong> Server der Domain → dieser liefert die IP.</li>
          <li>Der Resolver gibt die Antwort zurück und speichert sie für die Dauer der <strong>TTL</strong> im Cache.</li>
        </ol>
        <table><thead><tr><th>Record</th><th>Bedeutung</th><th>Beispiel</th></tr></thead><tbody>
          <tr><td>A</td><td>Name → IPv4</td><td>www → 203.0.113.20</td></tr>
          <tr><td>AAAA</td><td>Name → IPv6</td><td>www → 2001:db8:20::20</td></tr>
          <tr><td>CNAME</td><td>Alias auf einen anderen Namen</td><td>intranet → www</td></tr>
          <tr><td>MX</td><td>Mailserver der Domain mit Priorität (kleiner = bevorzugt)</td><td>10 mail.nordlicht-it.example.</td></tr>
          <tr><td>NS</td><td>zuständiger (autoritativer) Nameserver</td><td>ns1.nordlicht-it.example.</td></tr>
          <tr><td>PTR</td><td>IP → Name (Reverse-Zone)</td><td>20.113.0.203.in-addr.arpa → www</td></tr>
          <tr><td>SOA</td><td>Start of Authority: Primärserver, Seriennummer, Zeiten der Zone</td><td>genau einer je Zone</td></tr>
          <tr><td>TXT</td><td>freier Text, z. B. SPF, DKIM, DMARC</td><td>„v=spf1 mx -all“</td></tr>
          <tr><td>SRV</td><td>Dienst mit Port, z. B. für Active Directory</td><td>_ldap._tcp</td></tr>
        </tbody></table>
        <p>Eine <strong>Zone</strong> ist der Teil des Namensraums, für den ein Server autoritativ ist. Es gibt Forward- und Reverse-Lookup-Zonen (für 192.168.10.0/24: <code>10.168.192.in-addr.arpa</code>). Der <strong>primäre</strong> Server hält die beschreibbare Zone, <strong>sekundäre</strong> Server erhalten Kopien per Zonentransfer. Testen mit <code>nslookup www.nordlicht-it.example</code>, <code>nslookup -type=mx nordlicht-it.example</code>, <code>ipconfig /flushdns</code>.</p>
        <p><strong>Split-Horizon-DNS:</strong> Interne und externe Clients bekommen für denselben Namen unterschiedliche Antworten – intern die private, extern die öffentliche Adresse des Servers. <strong>DNSSEC</strong> signiert Zonendaten, damit Resolver gefälschte Antworten (DNS-Spoofing, Cache Poisoning) erkennen; es verschlüsselt nicht. Verschlüsselt werden Anfragen mit DNS over TLS (Port 853) oder DNS over HTTPS (443).</p>
        <div class="callout merke"><strong>Merke:</strong> DHCP beantwortet „Welche Adresse habe ich?“ (IP, Maske, Gateway, DNS), DNS beantwortet „Welche Adresse hat dieser Name?“. Ohne DHCP entstehen 169.254er-Adressen; ohne DNS scheitern Namen, IP-Adressen funktionieren aber weiter.</div>
        <div class="callout achtung"><strong>Prüfungsfallen:</strong> DHCP ist UDP, nicht TCP. Discover und Request sind Broadcasts. Eine 169.254er-Adresse ist ein DHCP-Problem, kein DNS-Problem. Ein CNAME darf nicht auf eine IP zeigen, sondern nur auf einen Namen. Wenn <code>ping 8.8.8.8</code> geht, aber <code>ping www.…</code> nicht, liegt es am DNS.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Beschreiben Sie</em> den DHCP-Ablauf (DORA)“, „<em>Erläutern Sie</em> die Aufgabe eines DHCP-Relays“, „<em>Nennen Sie</em> vier DHCP-Optionen“, „<em>Ordnen Sie</em> Record-Typen zu“, „<em>Beschreiben Sie</em> die Namensauflösung von www.… Schritt für Schritt“.</div>
      `
    },
    {
      id: "ipv6",
      title: "IPv6: Aufbau, Kürzung, Adresstypen und Autokonfiguration",
      exam: ["AP1", "AP2"],
      summary: "128-Bit-Adressen, Kürzungsregeln, Präfix und Interface-ID, Adresstypen, SLAAC, EUI-64, DHCPv6, NDP und Dual Stack.",
      html: `
        <p>IPv4 bietet rund 4,3 Milliarden Adressen – die sind weltweit vergeben. <strong>IPv6</strong> nutzt <strong>128 Bit</strong>: 2¹²⁸ ≈ 3,4 × 10³⁸ Adressen. Geschrieben wird hexadezimal in <strong>8 Blöcken zu je 16 Bit</strong> (4 Hexziffern), getrennt durch Doppelpunkte.</p>
        <h5>Kürzungsregeln</h5>
        <ol>
          <li><strong>Führende Nullen</strong> in jedem Block dürfen entfallen: <code>0db8</code> → <code>db8</code>, <code>0000</code> → <code>0</code>.</li>
          <li><strong>Genau eine</strong> zusammenhängende Folge von Null-Blöcken darf durch <code>::</code> ersetzt werden – sonst wäre nicht eindeutig, wie viele Nullblöcke wo fehlen. Üblich: die längste Folge, bei Gleichstand die erste.</li>
        </ol>
        <div class="callout beispiel"><strong>Beispiele:</strong><br>
          <code>2001:0db8:00a0:0000:0000:0000:0000:0c01</code> → <code>2001:db8:a0::c01</code><br>
          <code>fe80:0000:0000:0000:0213:19ff:fe0a:0b01</code> → <code>fe80::213:19ff:fe0a:b01</code><br>
          <code>2001:0db8:0000:0000:0001:0000:0000:0001</code> → <code>2001:db8::1:0:0:1</code> (zwei gleich lange Nullfolgen → die erste wird gekürzt)<br>
          Ausschreiben: <code>2001:db8:5::a:1</code> hat 5 Blöcke, also fehlen 3 → <code>2001:0db8:0005:0000:0000:0000:000a:0001</code></div>
        <h5>Aufbau: Präfix und Interface-ID</h5>
        <pre class="ascii">|  48 Bit Global Routing Prefix | 16 Bit Subnet-ID |  64 Bit Interface-ID  |
|  vom Provider (z. B. /48)     | eigene Subnetze  |  Gerät im Subnetz     |</pre>
        <p>Ein LAN-Subnetz ist praktisch immer <strong>/64</strong>. Erhält eine Firma ein /48, bleiben 16 Bit für Subnetze: 2¹⁶ = <strong>65.536 Subnetze</strong> (bei /56 sind es 2⁸ = 256). Praktisch: die VLAN-ID hexadezimal als Subnet-ID nutzen – VLAN 20 = hex 14 → 2001:db8:ab00:14::/64.</p>
        <h5>Adresstypen</h5>
        <table><thead><tr><th>Präfix</th><th>Typ</th><th>Bedeutung</th></tr></thead><tbody>
          <tr><td>2000::/3</td><td>Global Unicast (GUA)</td><td>weltweit eindeutig und routbar (beginnt mit 2 oder 3)</td></tr>
          <tr><td>fe80::/10</td><td>Link-Local</td><td>automatisch auf jedem Interface, nur im eigenen Segment, nicht geroutet</td></tr>
          <tr><td>fc00::/7 (praktisch fd00::/8)</td><td>Unique Local (ULA)</td><td>intern, vergleichbar mit privaten IPv4-Adressen</td></tr>
          <tr><td>ff00::/8</td><td>Multicast</td><td>ff02::1 alle Knoten, ff02::2 alle Router im Segment</td></tr>
          <tr><td>::1/128</td><td>Loopback</td><td>entspricht 127.0.0.1</td></tr>
          <tr><td>::/128</td><td>unspezifiziert</td><td>„noch keine Adresse“</td></tr>
          <tr><td>2001:db8::/32</td><td>Dokumentation</td><td>nur für Beispiele</td></tr>
        </tbody></table>
        <p>IPv6 kennt <strong>keinen Broadcast</strong>; stattdessen Multicast und <strong>Anycast</strong> (dieselbe Adresse auf mehreren Geräten, der nächste antwortet).</p>
        <h5>Autokonfiguration: SLAAC, EUI-64, DHCPv6</h5>
        <ul>
          <li><strong>SLAAC</strong> (Stateless Address Autoconfiguration): Der Router sendet <strong>Router Advertisements</strong> (ICMPv6) mit dem /64-Präfix. Der Host bildet die Interface-ID selbst und prüft per <strong>DAD</strong> (Duplicate Address Detection), ob die Adresse frei ist.</li>
          <li><strong>EUI-64:</strong> Interface-ID aus der MAC-Adresse – heute oft durch zufällige IDs (Privacy Extensions) ersetzt.</li>
          <li><strong>DHCPv6:</strong> stateful (Server vergibt und dokumentiert Adressen) oder stateless (Adresse per SLAAC, nur DNS usw. per DHCPv6). Welche Variante gilt, zeigt der Router im Router Advertisement über das M-Flag (stateful) bzw. O-Flag (weitere Informationen).</li>
          <li><strong>NDP</strong> (Neighbor Discovery, ICMPv6) ersetzt ARP.</li>
        </ul>
        <div class="callout beispiel"><strong>Beispiel EUI-64:</strong> MAC <code>3C:52:82:1F:A7:09</code><br>
          1. In der Mitte teilen und <code>FF:FE</code> einfügen: 3C52:82<strong>FF:FE</strong>1F:A709<br>
          2. 7. Bit von links (U/L-Bit) umkehren: 3C = 0011 1100 → 0011 1110 = 3E<br>
          3. Interface-ID: <code>3e52:82ff:fe1f:a709</code> → mit Präfix 2001:db8:acad:10::/64: <code>2001:db8:acad:10:3e52:82ff:fe1f:a709</code>, Link-Local: <code>fe80::3e52:82ff:fe1f:a709</code></div>
        <h5>Header, Übergang und Cisco</h5>
        <p>Der IPv6-Basisheader ist fest <strong>40 Byte</strong> lang, hat keine Prüfsumme, <strong>Hop Limit</strong> ersetzt TTL, Router fragmentieren nicht. Übergang: <strong>Dual Stack</strong> (IPv4 und IPv6 parallel – heute Standard), Tunnel (6in4) oder NAT64/DNS64.</p>
        <pre><code>R1(config)# ipv6 unicast-routing
R1(config)# interface g0/0
R1(config-if)# ipv6 address 2001:db8:acad:10::1/64
R1(config-if)# ipv6 address fe80::1 link-local</code></pre>
        <div class="callout merke"><strong>Merke:</strong> Ein IPv6-LAN ist immer ein /64: Provider-Präfix + Subnet-ID + 64 Bit Interface-ID. Jede Schnittstelle hat automatisch eine Link-Local-Adresse (fe80::) und meist zusätzlich eine globale Adresse.</div>
        <div class="callout achtung"><strong>Prüfungsfallen:</strong> <code>::</code> nur einmal! Nur führende Nullen streichen, nie nachgestellte (<code>0c01</code> → <code>c01</code>, nicht <code>0c</code>). fe80:: ist Link-Local, fd00:: ist ULA. IPv6 ist nicht automatisch sicher – ohne NAT braucht es erst recht eine Firewall.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> In fast jeder AP1: „<em>Kürzen Sie</em> die IPv6-Adresse“ bzw. „<em>Schreiben Sie</em> sie vollständig aus“, „<em>Nennen Sie</em> zwei Unterschiede zwischen IPv4 und IPv6“, „<em>Erläutern Sie</em> SLAAC“; in der AP2 zusätzlich Adresstypen, Präfixplanung und EUI-64.</div>
      `
    },
    {
      id: "dienste-sicherheit",
      title: "Netzwerkdienste, WLAN und Netzsicherheit",
      exam: ["AP1", "AP2"],
      summary: "Web, E-Mail (SMTP, IMAP, POP3), NTP, Proxy und VoIP mit QoS; WLAN-Planung und WPA-Enterprise mit 802.1X/RADIUS; Firewall, ACL, DMZ und VPN.",
      html: `
        <h5>Wichtige Anwendungsdienste</h5>
        <table><thead><tr><th>Dienst</th><th>Aufgabe</th><th>Hinweise</th></tr></thead><tbody>
          <tr><td>HTTP/HTTPS</td><td>Webseiten, Web-APIs</td><td>HTTPS = HTTP über TLS (heute TLS 1.2/1.3), Port 443</td></tr>
          <tr><td>SMTP</td><td>E-Mails senden und zwischen Mailservern transportieren</td><td>25 (Server ↔ Server), 587 (Client → Server mit Anmeldung)</td></tr>
          <tr><td>IMAP</td><td>Postfach bleibt auf dem Server, Ordner werden synchronisiert</td><td>ideal für mehrere Geräte; 143/993</td></tr>
          <tr><td>POP3</td><td>Mails abholen, meist danach auf dem Server löschen</td><td>nur ein Gerät sinnvoll; 110/995</td></tr>
          <tr><td>NTP</td><td>Uhrzeit synchronisieren (UDP 123)</td><td>wichtig für Logs, Zertifikate, Kerberos-Anmeldung</td></tr>
          <tr><td>Proxy</td><td>Stellvertreter: Forward-Proxy für Clients (Caching, Filter, Protokoll), Reverse-Proxy vor Servern (Lastverteilung, TLS-Terminierung)</td><td>arbeitet auf Schicht 7</td></tr>
          <tr><td>VoIP</td><td>Telefonie über IP: SIP baut Gespräche auf (5060/5061), RTP überträgt die Sprache per UDP</td><td>braucht QoS</td></tr>
        </tbody></table>
        <p><strong>QoS</strong> (Quality of Service) priorisiert zeitkritischen Verkehr, z. B. per DSCP-Markierung „EF“ oder 802.1p im VLAN-Tag und mit einem eigenen Voice-VLAN. Richtwerte für gute Sprachqualität: Einweg-Latenz höchstens ca. 150 ms, Jitter unter ca. 30 ms, Paketverlust unter 1 %.</p>
        <h5>WLAN planen und absichern</h5>
        <p>Standards: Wi-Fi 4 = 802.11n (2,4/5 GHz), Wi-Fi 5 = 802.11ac (5 GHz), Wi-Fi 6/6E = 802.11ax (6E zusätzlich 6 GHz), Wi-Fi 7 = 802.11be (2,4/5/6 GHz).</p>
        <ul>
          <li><strong>Ausleuchtung</strong> (Site Survey, Heatmap): Wände, Metall und Wasser dämpfen; Funkzellen leicht überlappen lassen, damit Roaming funktioniert.</li>
          <li><strong>Kanäle:</strong> Im 2,4-GHz-Band überlappen sich Nachbarkanäle; überschneidungsfrei sind z. B. 1, 6 und 11. Benachbarte Access Points bekommen unterschiedliche Kanäle.</li>
          <li><strong>WLAN-Controller:</strong> verwaltet viele Access Points zentral (Konfiguration, Kanäle, Sendeleistung, Roaming).</li>
          <li><strong>WPA2/WPA3-Personal:</strong> ein gemeinsamer Schlüssel (PSK bzw. SAE) für alle – geeignet für kleine Netze und Gäste.</li>
          <li><strong>WPA2/WPA3-Enterprise (IEEE 802.1X):</strong> jeder Nutzer bzw. jedes Gerät meldet sich einzeln an (Benutzerkonto oder Zertifikat, EAP-TLS). Rollen: <strong>Supplicant</strong> (Client), <strong>Authenticator</strong> (Access Point/Switch), <strong>Authentication Server</strong> (<strong>RADIUS</strong>). Vorteil: Zugänge einzeln sperrbar, Protokollierung, VLAN-Zuweisung je Nutzer.</li>
          <li><strong>Gäste-WLAN:</strong> eigene SSID im eigenen VLAN, Client-Isolation, nur Internetzugang. Eine versteckte SSID ist <em>kein</em> Schutz – sie ist in den Anfragen der Clients sichtbar.</li>
        </ul>
        <p><strong>E-Mail-Absicherung per DNS:</strong> <strong>SPF</strong> (TXT-Record) listet, welche Server für die Domain senden dürfen; <strong>DKIM</strong> signiert ausgehende Mails, der öffentliche Schlüssel steht im DNS; <strong>DMARC</strong> legt fest, was mit Mails passiert, die SPF/DKIM nicht bestehen (none, quarantine, reject), und liefert Berichte. Zusammen erschweren sie das Fälschen von Absenderadressen.</p>
        <h5>Firewall, ACL und DMZ</h5>
        <table><thead><tr><th>Art</th><th>prüft</th></tr></thead><tbody>
          <tr><td>Paketfilter (stateless)</td><td>jedes Paket einzeln nach IP-Adressen, Protokoll, Ports (Schicht 3/4)</td></tr>
          <tr><td>Stateful Inspection</td><td>zusätzlich den Verbindungszustand – Antworten auf erlaubte Verbindungen passieren automatisch</td></tr>
          <tr><td>Application-Level-Gateway / Proxy</td><td>Inhalte auf Schicht 7 (z. B. HTTP)</td></tr>
          <tr><td>Next-Generation-Firewall</td><td>zusätzlich Anwendungserkennung, IPS, TLS-Inspektion</td></tr>
        </tbody></table>
        <p>Regeln werden von oben nach unten geprüft, <strong>die erste passende Regel gilt</strong>, am Ende steht ein implizites „alles verbieten“. Cisco-ACLs: <strong>Standard</strong> (1–99, nur Quell-IP, nah am Ziel platzieren) und <strong>erweitert</strong> (100–199, Quelle, Ziel, Protokoll, Port, nah an der Quelle platzieren).</p>
        <pre><code>R1(config)# access-list 110 permit tcp 192.168.10.0 0.0.0.255 any eq 443
R1(config)# access-list 110 permit udp 192.168.10.0 0.0.0.255 any eq 53
R1(config)# access-list 110 deny ip any any
R1(config)# interface g0/0
R1(config-if)# ip access-group 110 in</code></pre>
        <p>Eine <strong>DMZ</strong> (demilitarisierte Zone) ist ein eigenes Netzsegment für Server, die aus dem Internet erreichbar sein müssen (Webserver, Mail-Relay). Aus dem Internet ist nur der Zugriff auf die DMZ erlaubt; aus der DMZ darf keine Verbindung ins interne LAN aufgebaut werden. So bleibt das LAN geschützt, auch wenn ein DMZ-Server kompromittiert wird.</p>
        <h5>VPN</h5>
        <p>Ein <strong>VPN</strong> baut einen verschlüsselten Tunnel über ein unsicheres Netz. <strong>Site-to-Site</strong> verbindet Standorte (z. B. Heide ↔ Husum), <strong>Remote Access</strong> bindet einzelne Mitarbeitende im Homeoffice an. Techniken: <strong>IPsec</strong> (Schicht 3; IKE handelt Schlüssel aus über UDP 500/4500, ESP verschlüsselt und authentifiziert, im Tunnelmodus wird das ganze IP-Paket gekapselt; standardisiert, aber aufwendig), <strong>TLS-/SSL-VPN</strong> (z. B. OpenVPN, oft über 443 und damit firewallfreundlich), <strong>WireGuard</strong> (schlank, schnell, UDP, Standardport 51820). Anmeldung idealerweise mit Zertifikat und MFA.</p>
        <div class="callout merke"><strong>Merke:</strong> So wenig freigeben wie möglich (Least Privilege): Die Firewall erlaubt nur benötigte Dienste und Ports, alles andere verwirft die Standardregel. Klartext-Protokolle wie Telnet, FTP oder HTTP werden durch SSH, SFTP und HTTPS ersetzt.</div>
        <div class="callout achtung"><strong>Prüfungsfallen:</strong> IMAP lässt Mails auf dem Server, POP3 holt sie ab. WPA-Enterprise heißt nicht „stärkeres Passwort“, sondern individuelle Anmeldung über RADIUS. Bei „first match“ ist die Reihenfolge der Regeln entscheidend – eine zu frühe „deny any“-Regel sperrt alles.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Vergleichen Sie</em> IMAP und POP3“, „<em>Begründen Sie</em> den Einsatz von WPA3-Enterprise“, „<em>Erläutern Sie</em> den Ablauf der 802.1X-Anmeldung“, „<em>Erstellen Sie</em> Firewall-Regeln für die DMZ“, „<em>Empfehlen Sie</em> eine VPN-Lösung für die Filiale“.</div>
      `
    },
    {
      id: "cisco-fehlersuche",
      title: "Cisco-IOS-Konfiguration und Fehlersuche",
      exam: ["AP1", "AP2"],
      summary: "IOS-Modi und Grundkonfiguration (Packet Tracer), show-Befehle, ICMP, ping, tracert, ipconfig, nslookup und ein systematisches Vorgehen bei Netzwerkfehlern.",
      html: `
        <h5>IOS-Modi</h5>
        <table><thead><tr><th>Modus</th><th>Prompt</th><th>Wechsel</th></tr></thead><tbody>
          <tr><td>User EXEC</td><td><code>R1&gt;</code></td><td>nach dem Login, nur einfache Anzeigen</td></tr>
          <tr><td>Privileged EXEC</td><td><code>R1#</code></td><td><code>enable</code> – alle show-Befehle, speichern</td></tr>
          <tr><td>Globale Konfiguration</td><td><code>R1(config)#</code></td><td><code>configure terminal</code></td></tr>
          <tr><td>Interface-Konfiguration</td><td><code>R1(config-if)#</code></td><td><code>interface g0/0</code></td></tr>
          <tr><td>Line-Konfiguration</td><td><code>R1(config-line)#</code></td><td><code>line console 0</code> bzw. <code>line vty 0 4</code></td></tr>
        </tbody></table>
        <p><code>exit</code> geht eine Ebene zurück, <code>end</code> direkt in den Privileged-Modus, <code>?</code> zeigt Hilfe, <code>no</code> vor einem Befehl hebt ihn auf, <code>do</code> führt show-Befehle im Konfigurationsmodus aus.</p>
        <h5>Grundkonfiguration eines Routers</h5>
        <pre><code>Router&gt; enable
Router# configure terminal
Router(config)# hostname R1
R1(config)# enable secret Nordlicht!2026
R1(config)# service password-encryption
R1(config)# banner motd #Zugriff nur fuer Befugte#
R1(config)# ip domain-name nordlicht-it.example
R1(config)# username admin secret Adm1n!Heide
R1(config)# crypto key generate rsa general-keys modulus 2048
R1(config)# line vty 0 4
R1(config-line)# login local
R1(config-line)# transport input ssh
R1(config-line)# exit
R1(config)# interface g0/0
R1(config-if)# description LAN Verwaltung
R1(config-if)# ip address 192.168.10.1 255.255.255.0
R1(config-if)# no shutdown
R1(config-if)# end
R1# copy running-config startup-config</code></pre>
        <p>Die <strong>running-config</strong> liegt im RAM und ist nach einem Neustart weg, die <strong>startup-config</strong> liegt im NVRAM. Ein Switch bekommt seine Management-Adresse auf einem virtuellen Interface: <code>interface vlan 1</code>, <code>ip address …</code>, <code>no shutdown</code> und zusätzlich <code>ip default-gateway 192.168.10.1</code>.</p>
        <h5>Wichtige show-Befehle</h5>
        <table><thead><tr><th>Befehl</th><th>zeigt</th></tr></thead><tbody>
          <tr><td><code>show ip interface brief</code></td><td>Interfaces mit IP und Status (up/up, administratively down)</td></tr>
          <tr><td><code>show running-config</code></td><td>aktuelle Konfiguration</td></tr>
          <tr><td><code>show ip route</code></td><td>Routingtabelle</td></tr>
          <tr><td><code>show vlan brief</code> / <code>show interfaces trunk</code></td><td>VLAN-Zuordnung / Trunks</td></tr>
          <tr><td><code>show mac address-table</code> / <code>show arp</code></td><td>gelernte MAC-Adressen / ARP-Cache</td></tr>
          <tr><td><code>show cdp neighbors</code></td><td>direkt angeschlossene Cisco-Geräte</td></tr>
        </tbody></table>
        <h5>Werkzeuge am Client und ICMP</h5>
        <table><thead><tr><th>Windows</th><th>Linux</th><th>Zweck</th></tr></thead><tbody>
          <tr><td><code>ipconfig /all</code></td><td><code>ip a</code></td><td>IP, Maske, Gateway, DNS, MAC, DHCP-Status</td></tr>
          <tr><td><code>ipconfig /release</code>, <code>/renew</code>, <code>/flushdns</code></td><td><code>dhclient</code>, <code>resolvectl flush-caches</code></td><td>DHCP-Adresse neu holen, DNS-Cache leeren</td></tr>
          <tr><td><code>ping</code></td><td><code>ping</code></td><td>Erreichbarkeit und Antwortzeit (ICMP Echo Request Typ 8 / Echo Reply Typ 0)</td></tr>
          <tr><td><code>tracert</code></td><td><code>traceroute</code></td><td>Weg über die Router (Hops)</td></tr>
          <tr><td><code>nslookup</code></td><td><code>dig</code>, <code>nslookup</code></td><td>DNS-Auflösung prüfen</td></tr>
          <tr><td><code>arp -a</code></td><td><code>ip neigh</code></td><td>ARP-Cache</td></tr>
          <tr><td><code>netstat -ano</code>, <code>route print</code></td><td><code>ss -tulpn</code>, <code>ip route</code></td><td>offene Ports/Verbindungen, Routingtabelle</td></tr>
        </tbody></table>
        <h5>ICMP – Internet Control Message Protocol</h5>
        <p>ICMP transportiert Steuer- und Fehlermeldungen der Vermittlungsschicht. Es steckt direkt im IP-Paket (IP-Protokollnummer 1), nutzt also <strong>keine Ports</strong> und kein TCP/UDP. Wichtige Nachrichtentypen:</p>
        <table><thead><tr><th>Typ</th><th>Name</th><th>Bedeutung</th></tr></thead><tbody>
          <tr><td>8</td><td>Echo Request</td><td>Anfrage von ping</td></tr>
          <tr><td>0</td><td>Echo Reply</td><td>Antwort auf ping</td></tr>
          <tr><td>3</td><td>Destination Unreachable</td><td>Ziel nicht erreichbar – z. B. Code 0 Netz, Code 1 Host, Code 3 Port unerreichbar</td></tr>
          <tr><td>5</td><td>Redirect</td><td>Router teilt dem Host einen besseren Next Hop mit</td></tr>
          <tr><td>11</td><td>Time Exceeded</td><td>TTL ist abgelaufen (Grundlage von tracert)</td></tr>
        </tbody></table>
        <p>Bei IPv6 übernimmt <strong>ICMPv6</strong> zusätzlich die Aufgaben von ARP und Router-Erkennung (Neighbor Discovery, Router Advertisement) – ICMPv6 darf deshalb in IPv6-Netzen nicht pauschal gesperrt werden.</p>
        <p><strong>tracert</strong> sendet Pakete mit steigender TTL (1, 2, 3 …). Jeder Router, bei dem die TTL auf 0 fällt, meldet sich mit ICMP <strong>Time Exceeded</strong> (Typ 11) – so wird jeder Hop sichtbar. Windows-<code>tracert</code> nutzt dafür ICMP Echo Requests, Linux-<code>traceroute</code> standardmäßig UDP-Pakete. <strong>Destination Unreachable</strong> (Typ 3) meldet, dass Netz, Host oder Port nicht erreichbar sind. Durchsatz misst man z. B. mit <code>iperf3 -s</code> (Server) und <code>iperf3 -c 192.168.10.50</code> (Client).</p>
        <h5>Systematisch vorgehen (Bottom-up nach OSI)</h5>
        <ol>
          <li><strong>Schicht 1/2:</strong> Link-LED, Kabel, Port-Status (<code>show ip interface brief</code>).</li>
          <li><code>ipconfig /all</code>: Adresse plausibel? 169.254.x.x → DHCP-Problem. Maske und Gateway korrekt?</li>
          <li><code>ping 127.0.0.1</code> → TCP/IP-Stack in Ordnung.</li>
          <li><code>ping</code> Standardgateway → lokales Netz in Ordnung.</li>
          <li><code>ping</code> einer entfernten IP → Routing in Ordnung.</li>
          <li><code>ping</code> eines Namens bzw. <code>nslookup</code> → DNS in Ordnung.</li>
          <li><code>tracert</code> → zeigt, an welchem Hop es hängt. Ergebnis und Lösung dokumentieren.</li>
        </ol>
        <div class="callout merke"><strong>Merke:</strong> Erst testen, dann ändern – und immer nur eine Änderung auf einmal. Nach jeder Konfigurationsänderung speichern und Ursache, Lösung und Test dokumentieren.</div>
        <div class="callout tipp"><strong>Tipp:</strong> In der Cisco-Ausgabe von <code>ping</code> bedeutet <code>!</code> Antwort, <code>.</code> Zeitüberschreitung und <code>U</code> unerreichbar. <code>.!!!!</code> beim ersten Versuch ist normal – das erste Paket geht verloren, während ARP die MAC ermittelt.</div>
        <div class="callout achtung"><strong>Prüfungsfallen:</strong> „administratively down“ heißt: <code>no shutdown</code> fehlt. Eine Zeitüberschreitung beim ping muss kein Netzfehler sein – die Windows-Firewall blockiert eingehende Echo Requests oft. Sehr hohe Antwortzeiten im LAN (100 ms statt 1 ms) deuten auf Überlast oder ein fehlerhaftes Gerät hin.</div>
        <div class="callout pruefung"><strong>So kommt es in der Prüfung dran:</strong> „<em>Interpretieren Sie</em> die Ausgabe von ipconfig/ping/tracert“, „<em>Nennen Sie</em> den Befehl, mit dem …“, „<em>Beschreiben Sie</em> ein systematisches Vorgehen zur Fehlersuche“, „<em>Ergänzen Sie</em> die fehlenden Konfigurationsbefehle“ – in der AP1 wurden ping-Ausgaben und <code>arp -a</code> mehrfach abgefragt.</div>
      `
    },
  ],
  exercises: [
    {
      id: "e-sub-4gleich",
      topic: "subnetting",
      title: "Netz in vier gleich große Subnetze teilen",
      level: 1,
      exam: ["AP1", "AP2"],
      task: `<p>Die <strong>Nordlicht IT GmbH</strong> in Heide nutzt das Netz <code>192.168.10.0/24</code>. Es soll für die vier Abteilungen Geschäftsleitung, Vertrieb, Technik und Buchhaltung in <strong>vier gleich große Subnetze</strong> aufgeteilt werden.</p>
        <p>a) Wie viele Bits musst du leihen? Gib das neue Präfix und die Subnetzmaske an.<br>
        b) Wie viele Hosts sind je Subnetz nutzbar?<br>
        c) Erstelle eine Tabelle mit Netzadresse, erstem und letztem Host sowie Broadcast-Adresse aller vier Subnetze.</p>`,
      hints: ["2 hoch wie viel ergibt mindestens 4?", "Blockgröße = 256 − Maskenwert im 4. Oktett"],
      solution: `<p><strong>a)</strong> Benötigt werden 4 Subnetze: 2ⁿ ≥ 4 → n = 2 (2² = 4). Neues Präfix: 24 + 2 = <strong>/26</strong>. Das 4. Oktett der Maske lautet <code>11000000</code> = 128 + 64 = 192 → <strong>255.255.255.192</strong>.</p>
        <p><strong>b)</strong> Hostbits: 32 − 26 = 6 → 2⁶ − 2 = 64 − 2 = <strong>62 Hosts</strong> je Subnetz.</p>
        <p><strong>c)</strong> Blockgröße: 256 − 192 = 64 → Subnetze beginnen bei 0, 64, 128, 192.</p>
        <table><thead><tr><th>Subnetz</th><th>Netzadresse</th><th>erster Host</th><th>letzter Host</th><th>Broadcast</th></tr></thead><tbody>
          <tr><td>1</td><td>192.168.10.0</td><td>192.168.10.1</td><td>192.168.10.62</td><td>192.168.10.63</td></tr>
          <tr><td>2</td><td>192.168.10.64</td><td>192.168.10.65</td><td>192.168.10.126</td><td>192.168.10.127</td></tr>
          <tr><td>3</td><td>192.168.10.128</td><td>192.168.10.129</td><td>192.168.10.190</td><td>192.168.10.191</td></tr>
          <tr><td>4</td><td>192.168.10.192</td><td>192.168.10.193</td><td>192.168.10.254</td><td>192.168.10.255</td></tr>
        </tbody></table>
        <p>Kontrolle: Der Broadcast eines Subnetzes liegt immer direkt vor der nächsten Netzadresse (63 → 64, 127 → 128 …), der letzte Broadcast ist .255.</p>`
    },
    {
      id: "e-sub-masken",
      topic: "ipv4",
      title: "Subnetzmasken umrechnen und prüfen",
      level: 1,
      exam: ["AP1", "AP2"],
      task: `<p>Ein Kollege der <strong>Westküsten-Werft GmbH</strong> in Büsum hat eine Liste mit Masken erstellt. Ergänze jeweils die fehlende Schreibweise (dezimal bzw. CIDR) und die Anzahl nutzbarer Hosts.</p>
        <table><thead><tr><th>Nr.</th><th>Angabe</th></tr></thead><tbody>
          <tr><td>1</td><td>/20</td></tr><tr><td>2</td><td>/27</td></tr><tr><td>3</td><td>/29</td></tr>
          <tr><td>4</td><td>255.255.252.0</td></tr><tr><td>5</td><td>255.255.255.240</td></tr><tr><td>6</td><td>255.255.255.228</td></tr>
        </tbody></table>`,
      hints: ["Mögliche Maskenwerte in einem Oktett: 0, 128, 192, 224, 240, 248, 252, 254, 255", "Hosts = 2 hoch (32 − Präfix) − 2"],
      solution: `<table><thead><tr><th>Nr.</th><th>Dezimal</th><th>CIDR</th><th>Rechnung Hosts</th><th>Hosts</th></tr></thead><tbody>
          <tr><td>1</td><td>255.255.240.0</td><td>/20</td><td>32 − 20 = 12 Hostbits → 2¹² − 2</td><td>4094</td></tr>
          <tr><td>2</td><td>255.255.255.224</td><td>/27</td><td>32 − 27 = 5 → 2⁵ − 2</td><td>30</td></tr>
          <tr><td>3</td><td>255.255.255.248</td><td>/29</td><td>32 − 29 = 3 → 2³ − 2</td><td>6</td></tr>
          <tr><td>4</td><td>255.255.252.0</td><td>/22</td><td>32 − 22 = 10 → 2¹⁰ − 2</td><td>1022</td></tr>
          <tr><td>5</td><td>255.255.255.240</td><td>/28</td><td>32 − 28 = 4 → 2⁴ − 2</td><td>14</td></tr>
          <tr><td>6</td><td>ungültig</td><td>–</td><td>–</td><td>–</td></tr>
        </tbody></table>
        <p>Begründungen: /20 = 8 + 8 + 4 Einsen → im 3. Oktett <code>11110000</code> = 240. 252 = <code>11111100</code> (6 Einsen) → 16 + 6 = 22. Die Maske Nr. 6 ist <strong>ungültig</strong>, weil 228 = <code>11100100</code> ist: Nach der ersten Null folgt wieder eine Eins – die Einsen einer Subnetzmaske müssen lückenlos von links stehen.</p>`
    },
    {
      id: "e-ipv4-einordnen",
      topic: "ipv4",
      title: "IPv4-Adressen einordnen und umrechnen",
      level: 1,
      exam: ["AP1", "AP2"],
      task: `<p>In der Inventarliste der <strong>Dithmarscher Landmaschinen GmbH</strong> in Albersdorf stehen folgende Adressen. Ein Mitarbeiter bittet dich um eine Einordnung.</p>
        <table><thead><tr><th>Nr.</th><th>Adresse</th></tr></thead><tbody>
          <tr><td>1</td><td>10.200.1.5</td></tr><tr><td>2</td><td>172.31.255.1</td></tr><tr><td>3</td><td>172.32.0.1</td></tr>
          <tr><td>4</td><td>169.254.10.20</td></tr><tr><td>5</td><td>127.0.0.1</td></tr><tr><td>6</td><td>224.0.0.5</td></tr>
          <tr><td>7</td><td>192.168.300.1</td></tr><tr><td>8</td><td>100.64.3.4</td></tr>
        </tbody></table>
        <p>a) Gib für jede Adresse die (historische) Klasse an und ob sie privat, öffentlich oder besonders ist – oder ob sie ungültig ist.<br>
        b) Rechne 172.20.14.3 in die Binärschreibweise um.<br>
        c) Rechne <code>11000000.10101000.00001010.00010111</code> in die Dezimalschreibweise um.</p>`,
      hints: ["Privat: 10/8, 172.16/12 (bis 172.31.255.255), 192.168/16", "Stellenwerte: 128 · 64 · 32 · 16 · 8 · 4 · 2 · 1"],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Nr.</th><th>Klasse</th><th>Einordnung</th></tr></thead><tbody>
          <tr><td>1</td><td>A</td><td>privat (10.0.0.0/8)</td></tr>
          <tr><td>2</td><td>B</td><td>privat – letzter Bereich von 172.16.0.0/12 (endet bei 172.31.255.255)</td></tr>
          <tr><td>3</td><td>B</td><td><strong>öffentlich</strong> – 172.32.x.x liegt knapp außerhalb von 172.16.0.0/12</td></tr>
          <tr><td>4</td><td>B</td><td>besonders: APIPA/Link-Local – Gerät hat keinen DHCP-Server erreicht</td></tr>
          <tr><td>5</td><td>A (Bereich 127)</td><td>besonders: Loopback – der eigene Rechner</td></tr>
          <tr><td>6</td><td>D</td><td>besonders: Multicast (224.0.0.5 nutzt OSPF)</td></tr>
          <tr><td>7</td><td>–</td><td><strong>ungültig</strong>, weil ein Oktett höchstens 255 sein darf</td></tr>
          <tr><td>8</td><td>A</td><td>besonders: Shared Address Space 100.64.0.0/10 für Carrier-Grade-NAT beim Provider (weder RFC-1918-privat noch im Internet geroutet)</td></tr>
        </tbody></table>
        <p><strong>b)</strong> 172 = 128 + 32 + 8 + 4 → <code>10101100</code>; 20 = 16 + 4 → <code>00010100</code>; 14 = 8 + 4 + 2 → <code>00001110</code>; 3 = 2 + 1 → <code>00000011</code>. Ergebnis: <code>10101100.00010100.00001110.00000011</code>.</p>
        <p><strong>c)</strong> <code>11000000</code> = 128 + 64 = 192; <code>10101000</code> = 128 + 32 + 8 = 168; <code>00001010</code> = 8 + 2 = 10; <code>00010111</code> = 16 + 4 + 2 + 1 = 23 → <strong>192.168.10.23</strong>.</p>`
    },
    {
      id: "e-sub-analyse4",
      topic: "subnetting",
      title: "Subnetz einer Adresse bestimmen (4. Oktett)",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Im Netz der <strong>Stadtwerke Meldorf</strong> meldet ein Messgerät die Adresse <code>192.168.77.181</code>. Ursprünglich war das Netz ein /24 (255.255.255.0), jetzt wird mit der Maske <code>255.255.255.240</code> gearbeitet.</p>
        <p>Ermittle mit Rechenweg:<br>a) Anzahl der Subnetzbits und der entstandenen Subnetze<br>b) Anzahl der Hostbits und der nutzbaren Hosts je Subnetz<br>c) Netzadresse, erste und letzte Host-Adresse sowie Broadcast-Adresse des Subnetzes, in dem das Messgerät liegt.</p>`,
      hints: ["240 = 11110000 → wie viele Einsen?", "Blockgröße 256 − 240"],
      solution: `<p><strong>a)</strong> 240 = <code>11110000</code> → 4 Einsen im 4. Oktett → neues Präfix /28. Subnetzbits: 28 − 24 = <strong>4</strong> → 2⁴ = <strong>16 Subnetze</strong>.</p>
        <p><strong>b)</strong> Hostbits: 32 − 28 = <strong>4</strong> → 2⁴ − 2 = <strong>14 Hosts</strong>.</p>
        <p><strong>c)</strong> Blockgröße: 256 − 240 = 16. Vielfache: 0, 16, 32 … 160, <strong>176</strong>, 192 … → 181 liegt im Block 176–191.<br>
        Kontrolle binär: 181 = <code>10110101</code>, AND 240 = <code>11110000</code> → <code>10110000</code> = 176 ✔</p>
        <table><thead><tr><th>Wert</th><th>Ergebnis</th></tr></thead><tbody>
          <tr><td>Netzadresse</td><td>192.168.77.176</td></tr>
          <tr><td>erster Host</td><td>192.168.77.177</td></tr>
          <tr><td>letzter Host</td><td>192.168.77.190</td></tr>
          <tr><td>Broadcast</td><td>192.168.77.191 (= nächstes Netz 192 − 1)</td></tr>
        </tbody></table>`
    },
    {
      id: "e-sub-analyse3",
      topic: "subnetting",
      title: "Subnetz über die Oktettgrenze bestimmen (3. Oktett)",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die <strong>Holstein Logistik AG</strong> in Neumünster verwendet das Klasse-B-Netz <code>172.18.0.0/16</code> und hat es mit der Maske <code>255.255.248.0</code> unterteilt. Ein Scanner hat die Adresse <code>172.18.93.40</code>.</p>
        <p>a) Gib die neue Maske in CIDR-Schreibweise an und bestimme die Anzahl der Subnetze.<br>
        b) Wie viele Hosts sind je Subnetz nutzbar?<br>
        c) Bestimme Netzadresse, ersten und letzten Host sowie Broadcast des Subnetzes des Scanners.<br>
        d) Ein Techniker trägt als Broadcast „172.18.95.0“ ein. Erkläre den Fehler.</p>`,
      hints: ["Das interessante Oktett ist das 3.", "Beim Broadcast wird das 4. Oktett zu 255."],
      solution: `<p><strong>a)</strong> 248 = <code>11111000</code> → 5 Einsen im 3. Oktett → 16 + 5 = <strong>/21</strong>. Subnetzbits: 21 − 16 = 5 → 2⁵ = <strong>32 Subnetze</strong>.</p>
        <p><strong>b)</strong> Hostbits: 32 − 21 = 11 → 2¹¹ − 2 = 2048 − 2 = <strong>2046 Hosts</strong>.</p>
        <p><strong>c)</strong> Interessantes Oktett: das 3. (93). Blockgröße: 256 − 248 = 8 → 0, 8, 16 … 80, <strong>88</strong>, 96 … → 93 liegt im Block 88–95.<br>
        Kontrolle binär: 93 = <code>01011101</code>, AND 248 = <code>11111000</code> → <code>01011000</code> = 88 ✔</p>
        <table><thead><tr><th>Wert</th><th>Ergebnis</th></tr></thead><tbody>
          <tr><td>Netzadresse</td><td>172.18.88.0</td></tr>
          <tr><td>erster Host</td><td>172.18.88.1</td></tr>
          <tr><td>letzter Host</td><td>172.18.95.254</td></tr>
          <tr><td>Broadcast</td><td>172.18.95.255</td></tr>
        </tbody></table>
        <p><strong>d)</strong> Beim Broadcast werden <em>alle</em> Hostbits auf 1 gesetzt. Zum Hostanteil gehören die letzten 3 Bits des 3. Oktetts <em>und</em> das komplette 4. Oktett. Das 4. Oktett muss daher 255 sein: <strong>172.18.95.255</strong>. Die Adresse 172.18.95.0 ist eine ganz normale Hostadresse mitten im Subnetz.</p>`
    },
    {
      id: "e-sub-oktettgrenze",
      topic: "subnetting",
      title: "Subnetze im Oktettbereich: Klasse-A-Netz aufteilen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die <strong>Nordsee Wind GmbH</strong> mit Sitz in Husum betreibt Windparks an mehreren Standorten und nutzt intern das private Netz <code>10.0.0.0/8</code>.</p>
        <p>a) Das Netz soll an der Oktettgrenze in /16-Netze geteilt werden. Wie viele Subnetze entstehen, wie viele Hosts hat jedes?<br>
        b) Der Standort Husum erhält <code>10.42.0.0/16</code> und teilt es in /24-Netze. Wie viele Subnetze stehen Husum zur Verfügung, wie viele Hosts je Subnetz?<br>
        c) In welchem Husumer Subnetz liegt die Windkraftsteuerung <code>10.42.130.77</code>? Gib Netzadresse, Host-Bereich und Broadcast an.<br>
        d) Wie viele /24-Netze ließen sich insgesamt aus 10.0.0.0/8 bilden?</p>`,
      hints: ["An Oktettgrenzen werden ganze Oktette zum Netzanteil.", "Subnetzbits = neues Präfix − altes Präfix"],
      solution: `<p><strong>a)</strong> Subnetzbits: 16 − 8 = 8 → 2⁸ = <strong>256 Subnetze</strong> (10.0.0.0/16 bis 10.255.0.0/16). Hostbits: 32 − 16 = 16 → 2¹⁶ − 2 = <strong>65.534 Hosts</strong> je Subnetz.</p>
        <p><strong>b)</strong> Subnetzbits: 24 − 16 = 8 → 2⁸ = <strong>256 Subnetze</strong> (10.42.0.0/24 bis 10.42.255.0/24). Hostbits: 32 − 24 = 8 → 2⁸ − 2 = <strong>254 Hosts</strong>.</p>
        <p><strong>c)</strong> Bei /24 bilden die ersten drei Oktette das Netz → Netzadresse <strong>10.42.130.0/24</strong>, Hosts <strong>10.42.130.1 bis 10.42.130.254</strong>, Broadcast <strong>10.42.130.255</strong>.</p>
        <p><strong>d)</strong> Subnetzbits: 24 − 8 = 16 → 2¹⁶ = <strong>65.536</strong> /24-Netze.</p>
        <p>Fazit: Subnetting an Oktettgrenzen ist gut lesbar (ein Oktett = eine Ebene, z. B. 2. Oktett = Standort, 3. Oktett = Abteilung), verschenkt aber oft Adressen.</p>`
    },
    {
      id: "e-sub-anzahlnetze",
      topic: "subnetting",
      title: "Maske aus der Anzahl benötigter Subnetze ableiten",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die <strong>Kanal-Werft Rendsburg GmbH</strong> erhält für ihr Standortnetz den Bereich <code>172.20.0.0/16</code>. Benötigt werden <strong>40 gleich große Subnetze</strong> (Hallen, Büros, Maschinen), jedes Subnetz soll dabei so viele Hosts wie möglich aufnehmen.</p>
        <p>a) Bestimme die Anzahl der zu leihenden Bits, das neue Präfix und die Subnetzmaske.<br>
        b) Wie viele Subnetze entstehen tatsächlich, wie viele Hosts sind je Subnetz nutzbar?<br>
        c) Gib die ersten drei Subnetze und das letzte Subnetz an.<br>
        d) Bestimme Netzadresse, ersten und letzten Host sowie Broadcast des <strong>40. Subnetzes</strong> (Zählung beginnt beim Subnetz 172.20.0.0 als Nr. 1).</p>`,
      hints: ["Suche das kleinste n mit 2ⁿ ≥ 40.", "Das n-te Subnetz beginnt bei (n − 1) × Blockgröße."],
      solution: `<p><strong>a)</strong> 2⁵ = 32 reicht nicht, 2⁶ = 64 ≥ 40 → <strong>6 Bits</strong> leihen. Neues Präfix: 16 + 6 = <strong>/22</strong>. 3. Oktett der Maske: <code>11111100</code> = 252 → <strong>255.255.252.0</strong>.</p>
        <p><strong>b)</strong> 2⁶ = <strong>64 Subnetze</strong> (24 Reserve). Hostbits: 32 − 22 = 10 → 2¹⁰ − 2 = <strong>1022 Hosts</strong>.</p>
        <p><strong>c)</strong> Blockgröße im 3. Oktett: 256 − 252 = 4.</p>
        <table><thead><tr><th>Nr.</th><th>Netzadresse</th><th>erster Host</th><th>letzter Host</th><th>Broadcast</th></tr></thead><tbody>
          <tr><td>1</td><td>172.20.0.0</td><td>172.20.0.1</td><td>172.20.3.254</td><td>172.20.3.255</td></tr>
          <tr><td>2</td><td>172.20.4.0</td><td>172.20.4.1</td><td>172.20.7.254</td><td>172.20.7.255</td></tr>
          <tr><td>3</td><td>172.20.8.0</td><td>172.20.8.1</td><td>172.20.11.254</td><td>172.20.11.255</td></tr>
          <tr><td>64</td><td>172.20.252.0</td><td>172.20.252.1</td><td>172.20.255.254</td><td>172.20.255.255</td></tr>
        </tbody></table>
        <p><strong>d)</strong> 40. Subnetz: (40 − 1) × 4 = 156 → Netzadresse <strong>172.20.156.0/22</strong>. Der Block umfasst 156 bis 159 im 3. Oktett → erster Host <strong>172.20.156.1</strong>, letzter Host <strong>172.20.159.254</strong>, Broadcast <strong>172.20.159.255</strong>.</p>`
    },
    {
      id: "e-sub-hostbedarf",
      topic: "subnetting",
      title: "Maske aus dem Hostbedarf ableiten",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Ein <strong>Praxisverbund in Itzehoe</strong> hat das Netz <code>192.168.150.0/24</code>. Der Dienstleister prüft zwei Varianten mit gleich großen Subnetzen.</p>
        <p>a) Variante 1: Jedes Subnetz muss <strong>50 Geräte</strong> (inklusive Router) aufnehmen. Bestimme Präfix, Maske und die Anzahl möglicher Subnetze.<br>
        b) Variante 2: Jedes Subnetz muss nur <strong>12 Geräte</strong> aufnehmen. Bestimme Präfix, Maske und die Anzahl möglicher Subnetze.<br>
        c) Das Anmeldeterminal hat die Adresse <code>192.168.150.200</code>. Gib für beide Varianten Netzadresse und Broadcast seines Subnetzes an.</p>`,
      hints: ["Suche das kleinste h mit 2ʰ − 2 ≥ Bedarf.", "Präfix = 32 − h"],
      solution: `<p><strong>a)</strong> 2⁵ − 2 = 30 &lt; 50, 2⁶ − 2 = 62 ≥ 50 → 6 Hostbits → Präfix 32 − 6 = <strong>/26</strong>, Maske <strong>255.255.255.192</strong>. Subnetzbits 26 − 24 = 2 → 2² = <strong>4 Subnetze</strong>.</p>
        <p><strong>b)</strong> 2³ − 2 = 6 &lt; 12, 2⁴ − 2 = 14 ≥ 12 → 4 Hostbits → <strong>/28</strong>, Maske <strong>255.255.255.240</strong>. Subnetzbits 28 − 24 = 4 → 2⁴ = <strong>16 Subnetze</strong>.</p>
        <p><strong>c)</strong><br>
        Variante 1 (/26, Blockgröße 64): Blöcke 0, 64, 128, <strong>192</strong> → 200 liegt in 192–255 → Netz <strong>192.168.150.192</strong>, Broadcast <strong>192.168.150.255</strong>.<br>
        Variante 2 (/28, Blockgröße 16): 12 × 16 = 192, 13 × 16 = 208 → 200 liegt in 192–207 → Netz <strong>192.168.150.192</strong>, Broadcast <strong>192.168.150.207</strong>.</p>
        <p>Merke: Viele Hosts je Netz → wenige Subnetze und umgekehrt. Plane immer etwas Reserve ein.</p>`
    },
    {
      id: "e-vlsm-stadtwerke",
      topic: "vlsm",
      title: "VLSM-Adresskonzept für die Stadtwerke Brunsbüttel",
      level: 3,
      exam: ["AP2"],
      task: `<p>Die <strong>Stadtwerke Brunsbüttel</strong> bekommen ein neues Netz. Verfügbar ist <code>192.168.80.0/24</code>. Die IT-Abteilung möchte möglichst wenig Adressen verschwenden. Bedarf (inklusive Router-Interface):</p>
        <ul><li>Verwaltung: 100 Hosts</li><li>Netzleitstelle: 50 Hosts</li><li>Lager: 20 Hosts</li><li>Server: 10 Hosts</li><li>zwei Router-zu-Router-Verbindungen (WAN 1, WAN 2) mit je 2 Adressen</li></ul>
        <p>a) Begründe, warum hier gleich große Subnetze (FLSM) nicht ausreichen.<br>
        b) Erstelle ein VLSM-Adresskonzept (Netzadresse/Präfix, Maske, erster und letzter Host, Broadcast).<br>
        c) Welcher Adressbereich bleibt frei?</p>`,
      hints: ["Sortiere absteigend nach Größe.", "100 Hosts brauchen 7 Hostbits."],
      solution: `<p><strong>a)</strong> Das größte Netz (100 Hosts) braucht 7 Hostbits (2⁷ − 2 = 126) → /25. Mit gleich großen /25-Netzen gäbe es nur 2¹ = 2 Subnetze (25 − 24 = 1 Subnetzbit), benötigt werden aber 6. Nur mit variablen Masken passen alle Netze in das /24.</p>
        <p><strong>b)</strong> Präfixe (absteigend sortiert):<br>
        Verwaltung 100 → 2⁷ − 2 = 126 → /25 (128 Adressen)<br>
        Netzleitstelle 50 → 2⁶ − 2 = 62 → /26 (64)<br>
        Lager 20 → 2⁵ − 2 = 30 → /27 (32)<br>
        Server 10 → 2⁴ − 2 = 14 → /28 (16)<br>
        WAN 1 und 2 → 2² − 2 = 2 → je /30 (4)</p>
        <table><thead><tr><th>Netz</th><th>Netzadresse</th><th>Maske</th><th>erster Host</th><th>letzter Host</th><th>Broadcast</th></tr></thead><tbody>
          <tr><td>Verwaltung</td><td>192.168.80.0/25</td><td>255.255.255.128</td><td>192.168.80.1</td><td>192.168.80.126</td><td>192.168.80.127</td></tr>
          <tr><td>Netzleitstelle</td><td>192.168.80.128/26</td><td>255.255.255.192</td><td>192.168.80.129</td><td>192.168.80.190</td><td>192.168.80.191</td></tr>
          <tr><td>Lager</td><td>192.168.80.192/27</td><td>255.255.255.224</td><td>192.168.80.193</td><td>192.168.80.222</td><td>192.168.80.223</td></tr>
          <tr><td>Server</td><td>192.168.80.224/28</td><td>255.255.255.240</td><td>192.168.80.225</td><td>192.168.80.238</td><td>192.168.80.239</td></tr>
          <tr><td>WAN 1</td><td>192.168.80.240/30</td><td>255.255.255.252</td><td>192.168.80.241</td><td>192.168.80.242</td><td>192.168.80.243</td></tr>
          <tr><td>WAN 2</td><td>192.168.80.244/30</td><td>255.255.255.252</td><td>192.168.80.245</td><td>192.168.80.246</td><td>192.168.80.247</td></tr>
        </tbody></table>
        <p>Kontrolle: Jede Netzadresse ist ein Vielfaches ihrer Blockgröße (0 : 128, 128 : 64, 192 : 32, 224 : 16, 240 : 4, 244 : 4) und jedes Netz beginnt direkt nach dem Broadcast des vorherigen.</p>
        <p><strong>c)</strong> Belegt: 128 + 64 + 32 + 16 + 4 + 4 = 248 Adressen. Frei bleibt <strong>192.168.80.248 bis 192.168.80.255</strong> (8 Adressen, z. B. ein /29 oder zwei weitere /30 für WAN-Strecken).</p>`
    },
    {
      id: "e-vlsm-oktett",
      topic: "vlsm",
      title: "VLSM über Oktettgrenzen hinweg",
      level: 3,
      exam: ["AP2"],
      task: `<p>Die <strong>Fördeland Lebensmittel GmbH</strong> in Kiel erhält für ihren neuen Standort den Bereich <code>10.8.0.0/22</code>. Bedarf (inklusive Gateway):</p>
        <ul><li>Lager und Scanner: 500 Hosts</li><li>Büro: 200 Hosts</li><li>Produktion: 100 Hosts</li><li>Gäste-WLAN: 50 Hosts</li><li>Verbindung zum Zentralrouter: 2 Adressen</li></ul>
        <p>a) Wie viele Adressen umfasst 10.8.0.0/22, und reicht der Bereich überhaupt aus?<br>
        b) Erstelle das VLSM-Adresskonzept (Netz/Präfix, Maske, erster und letzter Host, Broadcast).<br>
        c) Welcher Bereich bleibt frei?<br>
        d) Mit welcher einzigen Route kann der Zentralrouter den gesamten Standort erreichen?</p>`,
      hints: ["500 Hosts brauchen 9 Hostbits.", "Ein /23 erstreckt sich über zwei Werte im 3. Oktett."],
      solution: `<p><strong>a)</strong> /22 → 32 − 22 = 10 Hostbits → 2¹⁰ = <strong>1024 Adressen</strong> (10.8.0.0 bis 10.8.3.255). Benötigte Blöcke: 500 → 512, 200 → 256, 100 → 128, 50 → 64, WAN → 4. Summe 512 + 256 + 128 + 64 + 4 = 964 ≤ 1024 → reicht.</p>
        <p><strong>b)</strong> Präfixe: 500 → 2⁹ − 2 = 510 → /23 · 200 → 2⁸ − 2 = 254 → /24 · 100 → 2⁷ − 2 = 126 → /25 · 50 → 2⁶ − 2 = 62 → /26 · WAN → /30.</p>
        <table><thead><tr><th>Netz</th><th>Netzadresse</th><th>Maske</th><th>erster Host</th><th>letzter Host</th><th>Broadcast</th></tr></thead><tbody>
          <tr><td>Lager</td><td>10.8.0.0/23</td><td>255.255.254.0</td><td>10.8.0.1</td><td>10.8.1.254</td><td>10.8.1.255</td></tr>
          <tr><td>Büro</td><td>10.8.2.0/24</td><td>255.255.255.0</td><td>10.8.2.1</td><td>10.8.2.254</td><td>10.8.2.255</td></tr>
          <tr><td>Produktion</td><td>10.8.3.0/25</td><td>255.255.255.128</td><td>10.8.3.1</td><td>10.8.3.126</td><td>10.8.3.127</td></tr>
          <tr><td>Gäste-WLAN</td><td>10.8.3.128/26</td><td>255.255.255.192</td><td>10.8.3.129</td><td>10.8.3.190</td><td>10.8.3.191</td></tr>
          <tr><td>WAN</td><td>10.8.3.192/30</td><td>255.255.255.252</td><td>10.8.3.193</td><td>10.8.3.194</td><td>10.8.3.195</td></tr>
        </tbody></table>
        <p>Erläuterung Lager: Beim /23 liegt die Grenze im 3. Oktett (254 = <code>11111110</code>, Blockgröße 2). Das Netz umfasst 10.8.0.0 bis 10.8.1.255 – die Adresse 10.8.0.255 ist hier eine ganz normale Hostadresse!</p>
        <p><strong>c)</strong> Frei: <strong>10.8.3.196 bis 10.8.3.255</strong> = 1024 − 964 = 60 Adressen.</p>
        <p><strong>d)</strong> Alle Netze liegen in 10.8.0.0/22 → eine zusammengefasste Route genügt, z. B. <code>ip route 10.8.0.0 255.255.252.0 10.8.3.194</code> (Next Hop = WAN-Adresse des Standortrouters, sofern der Zentralrouter .193 hat).</p>`
    },
    {
      id: "e-vlsm-pruefen",
      topic: "vlsm",
      title: "Fehlerhaften VLSM-Plan prüfen und korrigieren",
      level: 2,
      exam: ["AP2"],
      task: `<p>Ein Praktikant der <strong>Nordlicht IT GmbH</strong> hat für eine Filiale in Brunsbüttel aus <code>172.16.8.0/24</code> folgenden Plan erstellt. Der Bedarf enthält jeweils schon das Router-Interface.</p>
        <table><thead><tr><th>Netz</th><th>Bedarf</th><th>geplantes Netz</th></tr></thead><tbody>
          <tr><td>Lager</td><td>60</td><td>172.16.8.0/26</td></tr>
          <tr><td>Büro</td><td>25</td><td>172.16.8.64/27</td></tr>
          <tr><td>Werkstatt</td><td>12</td><td>172.16.8.80/28</td></tr>
          <tr><td>Server</td><td>8</td><td>172.16.8.96/29</td></tr>
          <tr><td>WAN zur Zentrale</td><td>2</td><td>172.16.8.106/30</td></tr>
        </tbody></table>
        <p>a) Prüfe jede Zeile und benenne alle Fehler.<br>
        b) Erstelle einen korrigierten Plan (Netz/Präfix, erster und letzter Host, Broadcast), der lückenlos ab 172.16.8.0 vergibt.<br>
        c) Wie viele Adressen bleiben frei?</p>`,
      hints: ["Prüfe: Reicht 2ʰ − 2? Ist die Netzadresse ein Vielfaches der Blockgröße? Überschneiden sich Bereiche?"],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Netz</th><th>Prüfung</th><th>Ergebnis</th></tr></thead><tbody>
          <tr><td>Lager /26</td><td>2⁶ − 2 = 62 ≥ 60; Bereich .0–.63</td><td>korrekt</td></tr>
          <tr><td>Büro /27</td><td>2⁵ − 2 = 30 ≥ 25; Bereich .64–.95</td><td>korrekt</td></tr>
          <tr><td>Werkstatt /28</td><td>2⁴ − 2 = 14 ≥ 12, 80 ist ein Vielfaches von 16 – aber .80–.95 liegt <strong>innerhalb des Büronetzes</strong> .64–.95</td><td>Fehler: Überschneidung</td></tr>
          <tr><td>Server /29</td><td>2³ − 2 = 6 &lt; 8</td><td>Fehler: Netz zu klein, /28 nötig</td></tr>
          <tr><td>WAN /30</td><td>106 ÷ 4 = 26,5 – kein Vielfaches der Blockgröße 4</td><td>Fehler: keine gültige Netzadresse (106 wäre ein Host in 172.16.8.104/30)</td></tr>
        </tbody></table>
        <p><strong>b)</strong> Absteigend sortiert: Lager /26, Büro /27, Werkstatt /28, Server /28 (14 Hosts), WAN /30.</p>
        <table><thead><tr><th>Netz</th><th>Netz/Präfix</th><th>erster Host</th><th>letzter Host</th><th>Broadcast</th></tr></thead><tbody>
          <tr><td>Lager</td><td>172.16.8.0/26</td><td>172.16.8.1</td><td>172.16.8.62</td><td>172.16.8.63</td></tr>
          <tr><td>Büro</td><td>172.16.8.64/27</td><td>172.16.8.65</td><td>172.16.8.94</td><td>172.16.8.95</td></tr>
          <tr><td>Werkstatt</td><td>172.16.8.96/28</td><td>172.16.8.97</td><td>172.16.8.110</td><td>172.16.8.111</td></tr>
          <tr><td>Server</td><td>172.16.8.112/28</td><td>172.16.8.113</td><td>172.16.8.126</td><td>172.16.8.127</td></tr>
          <tr><td>WAN</td><td>172.16.8.128/30</td><td>172.16.8.129</td><td>172.16.8.130</td><td>172.16.8.131</td></tr>
        </tbody></table>
        <p>Kontrolle: 0, 64, 96, 112 und 128 sind Vielfache der jeweiligen Blockgröße (64, 32, 16, 16, 4); jedes Netz beginnt direkt nach dem Broadcast des vorherigen.</p>
        <p><strong>c)</strong> Belegt: 64 + 32 + 16 + 16 + 4 = 132 Adressen → frei bleiben 256 − 132 = <strong>124 Adressen</strong> (172.16.8.132 bis 172.16.8.255).</p>`
    },
    {
      id: "e-sub-fehler",
      topic: "subnetting",
      title: "Fehlerhafte IP-Konfigurationen finden",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Bei der <strong>Dachdeckerei Friesenhof GmbH</strong> in Wesselburen gibt es zwei Subnetze: Büro <code>192.168.30.0/26</code> (Gateway 192.168.30.1) und Werkstatt <code>192.168.30.64/26</code> (Gateway 192.168.30.65). Mehrere Mitarbeitende melden „kein Netzwerk“. Du findest folgende Einstellungen:</p>
        <table><thead><tr><th>PC</th><th>Standort</th><th>IP-Adresse</th><th>Maske</th><th>Gateway</th></tr></thead><tbody>
          <tr><td>PC1</td><td>Büro</td><td>192.168.30.20</td><td>255.255.255.192</td><td>192.168.30.1</td></tr>
          <tr><td>PC2</td><td>Büro</td><td>192.168.30.63</td><td>255.255.255.192</td><td>192.168.30.1</td></tr>
          <tr><td>PC3</td><td>Werkstatt</td><td>192.168.30.70</td><td>255.255.255.192</td><td>192.168.30.1</td></tr>
          <tr><td>PC4</td><td>Werkstatt</td><td>192.168.30.100</td><td>255.255.255.224</td><td>192.168.30.65</td></tr>
          <tr><td>PC5</td><td>Werkstatt</td><td>192.168.30.64</td><td>255.255.255.192</td><td>192.168.30.65</td></tr>
          <tr><td>PC6</td><td>Werkstatt</td><td>192.168.30.126</td><td>255.255.255.192</td><td>192.168.30.65</td></tr>
        </tbody></table>
        <p>a) Bestimme für beide Subnetze Host-Bereich und Broadcast.<br>b) Prüfe jede Konfiguration, benenne Fehler und schlage eine Korrektur vor.<br>c) Mit welchem Befehl kontrollierst du die Einstellungen am Windows-PC?</p>`,
      hints: ["/26 → Blockgröße 64", "Netzadresse und Broadcast dürfen nicht vergeben werden; das Gateway muss im eigenen Subnetz liegen."],
      solution: `<p><strong>a)</strong> /26 = 255.255.255.192 → Blockgröße 64.<br>
        Büro: Netz 192.168.30.0, Hosts .1 bis .62, Broadcast <strong>.63</strong>.<br>
        Werkstatt: Netz 192.168.30.64, Hosts .65 bis .126, Broadcast <strong>.127</strong>.</p>
        <p><strong>b)</strong></p>
        <table><thead><tr><th>PC</th><th>Bewertung</th><th>Korrektur</th></tr></thead><tbody>
          <tr><td>PC1</td><td>korrekt – .20 liegt im Büro-Bereich, Gateway passt.</td><td>–</td></tr>
          <tr><td>PC2</td><td>Fehler: .63 ist die Broadcast-Adresse des Büronetzes.</td><td>freie Adresse aus .2–.62, z. B. .21</td></tr>
          <tr><td>PC3</td><td>Fehler: .70 gehört zur Werkstatt, das Gateway .1 liegt aber im Büronetz und ist nicht direkt erreichbar.</td><td>Gateway 192.168.30.65</td></tr>
          <tr><td>PC4</td><td>Fehler: Mit /27 hält sich PC4 für ein Mitglied von .96–.127 (Blockgröße 32). Das Gateway .65 liegt aus seiner Sicht außerhalb → keine Kommunikation mit anderen Netzen.</td><td>Maske 255.255.255.192</td></tr>
          <tr><td>PC5</td><td>Fehler: .64 ist die Netzadresse der Werkstatt.</td><td>freie Adresse aus .66–.126</td></tr>
          <tr><td>PC6</td><td>korrekt – .126 ist der letzte nutzbare Host der Werkstatt.</td><td>–</td></tr>
        </tbody></table>
        <p><strong>c)</strong> <code>ipconfig /all</code> zeigt IP-Adresse, Maske, Gateway, DNS-Server, MAC-Adresse und ob DHCP aktiv ist. Danach mit <code>ping 192.168.30.65</code> (bzw. .1) die Erreichbarkeit des Gateways testen.</p>`
    },
    {
      id: "e-sub-pt-szenario",
      topic: "subnetting",
      title: "Adressierungsschema für ein Packet-Tracer-Netz",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>Die <strong>Deichblick Spedition GmbH</strong> in Glückstadt baut ein Netz mit zwei Routern auf. R1 hat zwei LANs (G0/0, G0/1), R2 hat drei LANs (G0/0, G0/1, G0/2). R1 und R2 sind über eine serielle WAN-Strecke (S0/0/0) verbunden. In jedem LAN arbeiten bis zu <strong>25 Geräte</strong> inklusive Router und Switch. Verfügbar ist <code>192.168.60.0/24</code>. Alle Subnetze sollen <strong>gleich groß</strong> sein.</p>
        <p>a) Wie viele Subnetze werden benötigt? Wie viele Bits leihst du, welche Maske ergibt sich? Prüfe, ob die Hostanzahl reicht.<br>
        b) Erstelle die Subnetz-Tabelle (alle entstehenden Subnetze).<br>
        c) Vergib die Adressen nach der Regel: Subnetz 0 → R1 G0/0, Subnetz 1 → R1 G0/1, Subnetz 2–4 → R2 G0/0 bis G0/2, Subnetz 5 → WAN. Router-LAN-Interfaces erhalten den ersten, Switches den zweiten, PCs den letzten nutzbaren Host; auf der WAN-Strecke bekommt R1 den ersten, R2 den letzten Host. Gib die Adressen für das Subnetz 0 und die WAN-Strecke an.<br>
        d) Schreibe die Befehle, mit denen du R1 G0/0 konfigurierst und aktivierst.<br>
        e) Beurteile die Adressnutzung auf der WAN-Strecke.</p>`,
      hints: ["5 LANs + 1 WAN = 6 Subnetze", "Blockgröße bei /27: 32"],
      solution: `<p><strong>a)</strong> 5 LANs + 1 WAN = <strong>6 Subnetze</strong>. 2² = 4 &lt; 6, 2³ = 8 ≥ 6 → <strong>3 Bits</strong> leihen → /24 + 3 = <strong>/27</strong> → Maske <code>11100000</code> = <strong>255.255.255.224</strong>. Hosts: 32 − 27 = 5 Hostbits → 2⁵ − 2 = 30 ≥ 25 ✔.</p>
        <p><strong>b)</strong> Blockgröße 256 − 224 = 32:</p>
        <table><thead><tr><th>Nr.</th><th>Netz</th><th>erster Host</th><th>letzter Host</th><th>Broadcast</th></tr></thead><tbody>
          <tr><td>0</td><td>192.168.60.0</td><td>.1</td><td>.30</td><td>.31</td></tr>
          <tr><td>1</td><td>192.168.60.32</td><td>.33</td><td>.62</td><td>.63</td></tr>
          <tr><td>2</td><td>192.168.60.64</td><td>.65</td><td>.94</td><td>.95</td></tr>
          <tr><td>3</td><td>192.168.60.96</td><td>.97</td><td>.126</td><td>.127</td></tr>
          <tr><td>4</td><td>192.168.60.128</td><td>.129</td><td>.158</td><td>.159</td></tr>
          <tr><td>5</td><td>192.168.60.160</td><td>.161</td><td>.190</td><td>.191</td></tr>
          <tr><td>6</td><td>192.168.60.192</td><td>.193</td><td>.222</td><td>.223</td></tr>
          <tr><td>7</td><td>192.168.60.224</td><td>.225</td><td>.254</td><td>.255</td></tr>
        </tbody></table>
        <p><strong>c)</strong></p>
        <table><thead><tr><th>Gerät</th><th>Interface</th><th>IP-Adresse</th><th>Maske</th><th>Gateway</th></tr></thead><tbody>
          <tr><td>R1</td><td>G0/0</td><td>192.168.60.1</td><td>255.255.255.224</td><td>–</td></tr>
          <tr><td>S1</td><td>VLAN 1</td><td>192.168.60.2</td><td>255.255.255.224</td><td>192.168.60.1</td></tr>
          <tr><td>PC1</td><td>NIC</td><td>192.168.60.30</td><td>255.255.255.224</td><td>192.168.60.1</td></tr>
          <tr><td>R1</td><td>S0/0/0</td><td>192.168.60.161</td><td>255.255.255.224</td><td>–</td></tr>
          <tr><td>R2</td><td>S0/0/0</td><td>192.168.60.190</td><td>255.255.255.224</td><td>–</td></tr>
        </tbody></table>
        <p>Subnetze 6 und 7 bleiben als Reserve.</p>
        <p><strong>d)</strong></p>
        <pre><code>R1&gt; enable
R1# configure terminal
R1(config)# interface g0/0
R1(config-if)# ip address 192.168.60.1 255.255.255.224
R1(config-if)# no shutdown
R1(config-if)# end
R1# copy running-config startup-config</code></pre>
        <p><strong>e)</strong> Auf der WAN-Strecke werden nur 2 von 30 nutzbaren Adressen gebraucht – <strong>28 Adressen bleiben ungenutzt</strong>. Mit VLSM würde man dafür ein /30 (2 Hosts) verwenden und den Rest für weitere Netze frei halten.</p>`
    },
    {
      id: "e-sub-binaer",
      topic: "subnetting",
      title: "Subnetzmaske und Subnetzadressen binär herleiten",
      level: 1,
      exam: ["AP1", "AP2"],
      task: `<p>Der <strong>Deich- und Sielverband</strong> in Meldorf nutzt das Netz <code>192.168.44.0/24</code> und braucht <strong>10 gleich große Subnetze</strong> (Schöpfwerke, Verwaltung, Kameras …).</p>
        <p>a) Wie viele Bits musst du leihen? Gib das neue Präfix an.<br>
        b) Schreibe die neue Subnetzmaske binär und dezimal.<br>
        c) Stelle das 4. Oktett der Netzadressen der Subnetze 0 bis 4 binär dar (Subnetzbits | Hostbits) und rechne sie in Dezimal um.<br>
        d) Wie viele Subnetze entstehen insgesamt, wie viele Hosts hat jedes?<br>
        e) Bestimme Netzadresse, ersten und letzten Host sowie Broadcast des Subnetzes Nr. 9 (Zählung ab 0) – auch binär.</p>`,
      hints: ["Kleinstes n mit 2ⁿ ≥ 10", "Die Subnetzbits stehen links im 4. Oktett, die Hostbits rechts."],
      solution: `<p><strong>a)</strong> 2³ = 8 &lt; 10, 2⁴ = 16 ≥ 10 → <strong>4 Bits</strong> leihen → 24 + 4 = <strong>/28</strong>.</p>
        <p><strong>b)</strong> <code>11111111.11111111.11111111.11110000</code> → 4. Oktett 128 + 64 + 32 + 16 = 240 → <strong>255.255.255.240</strong>.</p>
        <p><strong>c)</strong> Die 4 linken Bits des 4. Oktetts sind Subnetzbits, die 4 rechten Hostbits (bleiben bei der Netzadresse 0):</p>
        <table><thead><tr><th>Subnetz</th><th>4. Oktett binär</th><th>dezimal</th><th>Netzadresse</th></tr></thead><tbody>
          <tr><td>0</td><td>0000 | 0000</td><td>0</td><td>192.168.44.0</td></tr>
          <tr><td>1</td><td>0001 | 0000</td><td>16</td><td>192.168.44.16</td></tr>
          <tr><td>2</td><td>0010 | 0000</td><td>32</td><td>192.168.44.32</td></tr>
          <tr><td>3</td><td>0011 | 0000</td><td>48</td><td>192.168.44.48</td></tr>
          <tr><td>4</td><td>0100 | 0000</td><td>64</td><td>192.168.44.64</td></tr>
        </tbody></table>
        <p>Der Abstand ist immer 16 – der Stellenwert des letzten Subnetzbits und zugleich die Blockgröße 256 − 240.</p>
        <p><strong>d)</strong> 2⁴ = <strong>16 Subnetze</strong> (6 bleiben als Reserve). Hostbits: 32 − 28 = 4 → 2⁴ − 2 = <strong>14 Hosts</strong> je Subnetz.</p>
        <p><strong>e)</strong> Subnetz 9: Subnetzbits 9 = <code>1001</code> → 4. Oktett <code>1001 0000</code> = 128 + 16 = 144 (Kontrolle: 9 × 16 = 144).<br>
        Broadcast: alle Hostbits 1 → <code>1001 1111</code> = 128 + 16 + 8 + 4 + 2 + 1 = 159.</p>
        <table><thead><tr><th>Wert</th><th>Ergebnis</th></tr></thead><tbody>
          <tr><td>Netzadresse</td><td>192.168.44.144</td></tr>
          <tr><td>erster Host</td><td>192.168.44.145</td></tr>
          <tr><td>letzter Host</td><td>192.168.44.158</td></tr>
          <tr><td>Broadcast</td><td>192.168.44.159</td></tr>
        </tbody></table>`
    },
    {
      id: "e-sub-mehroktett",
      topic: "subnetting",
      title: "Subnetting über mehrere Oktette (/8 → /18)",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die <strong>Westholstein Energie AG</strong> in Itzehoe nutzt intern <code>10.0.0.0/8</code>. Für die Standorte wird mit der Maske <code>255.255.192.0</code> unterteilt. Ein Zählerauslesegerät hat die Adresse <code>10.150.77.9</code>.</p>
        <p>a) Gib die neue Maske in CIDR-Schreibweise an und bestimme Subnetzbits und Anzahl der Subnetze.<br>
        b) Wie viele Hostbits und nutzbare Hosts hat jedes Subnetz?<br>
        c) Bestimme Netzadresse, ersten und letzten Host sowie Broadcast des Subnetzes, in dem das Gerät liegt – mit binärer Kontrolle.<br>
        d) Nenne alle Subnetze, deren Adresse mit 10.150. beginnt.<br>
        e) Ein Kollege möchte 10.150.100.0/18 als Netzadresse in die Dokumentation schreiben. Nimm Stellung.</p>`,
      hints: ["Die geliehenen Bits verteilen sich auf das 2. und das 3. Oktett.", "Interessantes Oktett ist das 3. (Maskenwert 192)."],
      solution: `<p><strong>a)</strong> 255.255.192.0 = 8 + 8 + 2 Einsen = <strong>/18</strong>. Subnetzbits: 18 − 8 = <strong>10</strong> (8 Bits im 2. Oktett + 2 Bits im 3. Oktett) → 2¹⁰ = <strong>1024 Subnetze</strong>.</p>
        <p><strong>b)</strong> Hostbits: 32 − 18 = <strong>14</strong> (6 Bits im 3. Oktett + 8 Bits im 4. Oktett) → 2¹⁴ − 2 = 16.384 − 2 = <strong>16.382 Hosts</strong>.</p>
        <p><strong>c)</strong> Interessantes Oktett: das 3. (77). Blockgröße 256 − 192 = 64 → Blöcke 0, <strong>64</strong>, 128, 192 → 77 liegt im Block 64–127.<br>
        Kontrolle binär: 77 = <code>01001101</code>, AND 192 = <code>11000000</code> → <code>01000000</code> = 64 ✔</p>
        <table><thead><tr><th>Wert</th><th>Ergebnis</th></tr></thead><tbody>
          <tr><td>Netzadresse</td><td>10.150.64.0</td></tr>
          <tr><td>erster Host</td><td>10.150.64.1</td></tr>
          <tr><td>letzter Host</td><td>10.150.127.254</td></tr>
          <tr><td>Broadcast</td><td>10.150.127.255</td></tr>
        </tbody></table>
        <p><strong>d)</strong> Im 3. Oktett gibt es 4 Blöcke → <strong>10.150.0.0/18, 10.150.64.0/18, 10.150.128.0/18, 10.150.192.0/18</strong>. (Kontrolle: 256 Werte im 2. Oktett × 4 = 1024 Subnetze.)</p>
        <p><strong>e)</strong> Falsch. Eine Netzadresse muss im 3. Oktett ein Vielfaches der Blockgröße 64 sein und im 4. Oktett 0 haben. 100 ist kein Vielfaches von 64 – 10.150.100.0 ist eine gewöhnliche Hostadresse im Subnetz 10.150.64.0/18.</p>`
    },
    {
      id: "e-sub-gleichesnetz",
      topic: "subnetting",
      title: "Gleiches Subnetz? Kommunikation ohne Router prüfen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Bei den <strong>Hafenbetrieben Brunsbüttel</strong> sollen Geräte direkt miteinander kommunizieren. Prüfe für jedes Paar, ob beide im selben Subnetz liegen.</p>
        <table><thead><tr><th>Nr.</th><th>Gerät A</th><th>Gerät B</th></tr></thead><tbody>
          <tr><td>1</td><td>192.168.5.62/26</td><td>192.168.5.66/26</td></tr>
          <tr><td>2</td><td>172.16.45.200/20</td><td>172.16.40.3/20</td></tr>
          <tr><td>3</td><td>10.1.1.130/25</td><td>10.1.1.250/25</td></tr>
          <tr><td>4</td><td>192.168.10.20/23</td><td>192.168.11.200/23</td></tr>
        </tbody></table>
        <p>a) Bestimme jeweils die Netzadressen beider Geräte und entscheide.<br>
        b) Weise das Ergebnis von Nr. 4 binär nach.<br>
        c) Ein Terminal hat 192.168.100.33/27 und das Standardgateway 192.168.100.30. Beurteile die Konfiguration und schlage eine Korrektur vor, wenn das Router-Interface wirklich 192.168.100.30 hat.</p>`,
      hints: ["Netzadresse beider Geräte mit derselben Maske bestimmen und vergleichen.", "Bei /20 und /23 liegt das interessante Oktett im 3. Oktett."],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Nr.</th><th>Rechnung</th><th>Netz A</th><th>Netz B</th><th>Ergebnis</th></tr></thead><tbody>
          <tr><td>1</td><td>/26 → Blockgröße 64: 62 liegt in 0–63, 66 in 64–127</td><td>192.168.5.0</td><td>192.168.5.64</td><td><strong>verschieden</strong> – nur über einen Router</td></tr>
          <tr><td>2</td><td>/20 → Blockgröße 16 im 3. Oktett: 45 und 40 liegen beide in 32–47</td><td>172.16.32.0</td><td>172.16.32.0</td><td><strong>gleich</strong> (Broadcast 172.16.47.255)</td></tr>
          <tr><td>3</td><td>/25 → Blockgröße 128: 130 und 250 liegen beide in 128–255</td><td>10.1.1.128</td><td>10.1.1.128</td><td><strong>gleich</strong></td></tr>
          <tr><td>4</td><td>/23 → Blockgröße 2 im 3. Oktett: 10 und 11 liegen beide im Block 10–11</td><td>192.168.10.0</td><td>192.168.10.0</td><td><strong>gleich</strong> (Broadcast 192.168.11.255)</td></tr>
        </tbody></table>
        <p><strong>b)</strong> Maske /23 → 3. Oktett <code>11111110</code> = 254. 10 = <code>00001010</code> AND <code>11111110</code> = <code>00001010</code> = 10. 11 = <code>00001011</code> AND <code>11111110</code> = <code>00001010</code> = 10. Das 4. Oktett wird durch die 0-Bits der Maske komplett zu 0 → beide Netzadressen 192.168.10.0 ✔. Das unterschiedliche 3. Oktett täuscht: Das letzte Bit des 3. Oktetts gehört bei /23 schon zum Hostanteil.</p>
        <p><strong>c)</strong> /27 → Blockgröße 32. Das Terminal (.33) liegt im Netz 192.168.100.32 (Hosts .33–.62), das Gateway (.30) im Netz 192.168.100.0 (Hosts .1–.30). Das Gateway liegt also <strong>nicht im eigenen Subnetz</strong> – das Terminal kann es nicht per ARP erreichen und kommt nicht aus seinem Netz heraus. Korrektur: Das Terminal bekommt eine freie Adresse aus 192.168.100.1–.29, z. B. 192.168.100.25/27, Gateway bleibt 192.168.100.30.</p>`
    },
    {
      id: "e-osi-zuordnen",
      topic: "schichtenmodelle",
      title: "Protokolle und Geräte den Schichten zuordnen",
      level: 1,
      exam: ["AP1", "AP2"],
      task: `<p>Für eine Schulung neuer Auszubildender der <strong>Nordlicht IT GmbH</strong> sollst du eine Übersicht erstellen.</p>
        <p>a) Ordne folgende Begriffe der OSI-Schicht (Nummer und Name) und der Schicht des TCP/IP-Modells zu: HTTP, TCP, IPv4, Switch, Router, Hub, UDP, ICMP, DNS, Access Point, Glasfaserkabel.<br>
        b) Nenne die Bezeichnung der Dateneinheit (PDU) auf den OSI-Schichten 1 bis 4.<br>
        c) Erkläre den Unterschied zwischen vertikaler und horizontaler Kommunikation.</p>`,
      hints: ["Eselsbrücke 7 → 1: Alle Deutschen Schüler Trinken Verschiedene Sorten Bier"],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Begriff</th><th>OSI-Schicht</th><th>TCP/IP-Schicht</th></tr></thead><tbody>
          <tr><td>HTTP, DNS</td><td>7 Anwendung</td><td>Anwendung</td></tr>
          <tr><td>TCP, UDP</td><td>4 Transport</td><td>Transport</td></tr>
          <tr><td>IPv4, ICMP, Router</td><td>3 Vermittlung</td><td>Internet</td></tr>
          <tr><td>Switch, Access Point</td><td>2 Sicherung</td><td>Netzzugang</td></tr>
          <tr><td>Hub, Glasfaserkabel</td><td>1 Bitübertragung</td><td>Netzzugang</td></tr>
        </tbody></table>
        <p><strong>b)</strong> Schicht 1: Bit · Schicht 2: Frame (Rahmen) · Schicht 3: Paket · Schicht 4: Segment (TCP) bzw. Datagramm (UDP).</p>
        <p><strong>c)</strong> Bei der <strong>vertikalen Kommunikation</strong> tauschen benachbarte Schichten innerhalb desselben Systems über Schnittstellen Daten aus – jede Schicht nutzt die Dienste der darunterliegenden. Bei der <strong>horizontalen Kommunikation</strong> kommunizieren gleiche Schichten zweier Systeme logisch miteinander, indem sie dasselbe Protokoll verwenden (z. B. TCP beim Client mit TCP beim Server). Physisch übertragen werden die Daten dabei nur auf Schicht 1.</p>`
    },
    {
      id: "e-kapselung-router",
      topic: "mac-arp",
      title: "Adressen und Kapselung auf dem Weg über einen Router",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>PC-A der <strong>Nordlicht IT GmbH</strong> (IP 192.168.10.23/24, MAC 00:1B:44:11:3A:B7, Gateway 192.168.10.1) ruft eine HTTPS-Seite auf dem Server 192.168.20.50 (MAC 00:50:56:20:00:50) auf. Dazwischen liegt Router R1 mit G0/0 (192.168.10.1, MAC 00:0C:29:10:00:01) und G0/1 (192.168.20.1, MAC 00:0C:29:10:00:02).</p>
        <p>a) Wie erkennt PC-A, dass er das Paket an das Gateway schicken muss?<br>
        b) Mit welchem Protokoll ermittelt PC-A die MAC-Adresse des Gateways? Beschreibe den Ablauf kurz.<br>
        c) Gib für die Teilstrecke PC-A → R1 und für R1 → Server jeweils Quell-/Ziel-IP und Quell-/Ziel-MAC an.<br>
        d) Welche Portnummern stehen im TCP-Header der Anfrage?<br>
        e) Beschreibe die Kapselung beim Sender mit den Namen der PDUs.</p>`,
      hints: ["Vergleiche die Netzanteile von Quelle und Ziel.", "IP-Adressen bleiben gleich, MAC-Adressen wechseln je Teilstrecke."],
      solution: `<p><strong>a)</strong> PC-A verknüpft seine eigene IP und die Ziel-IP jeweils mit der Maske 255.255.255.0 (AND). Ergebnis: 192.168.10.0 ≠ 192.168.20.0 → das Ziel liegt in einem fremden Netz, also geht das Paket an das Standardgateway.</p>
        <p><strong>b)</strong> Mit <strong>ARP</strong>: PC-A schaut zuerst in seinen ARP-Cache. Fehlt der Eintrag, sendet er einen ARP-Request als Broadcast („Wer hat 192.168.10.1?“). R1 antwortet per Unicast mit seiner MAC 00:0C:29:10:00:01, die PC-A im Cache speichert.</p>
        <p><strong>c)</strong></p>
        <table><thead><tr><th>Teilstrecke</th><th>Quell-IP</th><th>Ziel-IP</th><th>Quell-MAC</th><th>Ziel-MAC</th></tr></thead><tbody>
          <tr><td>PC-A → R1</td><td>192.168.10.23</td><td>192.168.20.50</td><td>00:1B:44:11:3A:B7</td><td>00:0C:29:10:00:01</td></tr>
          <tr><td>R1 → Server</td><td>192.168.10.23</td><td>192.168.20.50</td><td>00:0C:29:10:00:02</td><td>00:50:56:20:00:50</td></tr>
        </tbody></table>
        <p>Die IP-Adressen bleiben unverändert, die MAC-Adressen werden von R1 neu gesetzt.</p>
        <p><strong>d)</strong> Zielport <strong>443</strong> (HTTPS), Quellport ein dynamischer Port aus 49152–65535, den das Betriebssystem vergibt.</p>
        <p><strong>e)</strong> Der Browser erzeugt die Anwendungsdaten (HTTP über TLS). TCP ergänzt einen Header mit Ports und Sequenznummern → <strong>Segment</strong>. IP ergänzt Quell- und Ziel-IP → <strong>Paket</strong>. Ethernet ergänzt Header mit Ziel- und Quell-MAC sowie am Ende die Prüfsumme FCS → <strong>Frame</strong>. Die Netzwerkkarte überträgt den Frame als <strong>Bits</strong>. Beim Empfänger wird in umgekehrter Reihenfolge entkapselt.</p>`
    },
    {
      id: "e-ports-firewall",
      topic: "ports-tcp-udp",
      title: "Ports für die Firewall-Freigaben bestimmen",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die <strong>Nordlicht IT GmbH</strong> betreibt eigene Dienste. Der Firewall-Administrator braucht eine Liste der Ports.</p>
        <ul><li>Webserver mit verschlüsselter Webseite</li><li>Mailserver: Empfang von anderen Mailservern, Versand durch die Mail-Clients der Mitarbeitenden, Abruf verschlüsselt per IMAP</li><li>interner DNS-Server</li><li>verschlüsselter Admin-Zugang auf Linux-Server</li><li>Remotedesktop auf einen Windows-Terminalserver</li></ul>
        <p>a) Gib für jeden Dienst Portnummer(n) und Transportprotokoll an.<br>
        b) Im alten Konzept stehen noch Telnet (23) und FTP (21). Begründe, warum sie ersetzt werden sollten, und nenne je eine Alternative.<br>
        c) Ein Client (Start-Sequenznummer 5000) baut eine TCP-Verbindung zum Server (Start-Sequenznummer 9000) auf. Gib die drei Nachrichten des Handshakes mit Flags, Seq- und Ack-Nummern an.<br>
        d) Begründe, warum die IP-Telefonie der Firma UDP statt TCP nutzt.</p>`,
      hints: ["IMAPS 993, Submission 587", "Ack = empfangene Seq + 1"],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Dienst</th><th>Port</th><th>Protokoll</th></tr></thead><tbody>
          <tr><td>HTTPS</td><td>443</td><td>TCP (bei HTTP/3 zusätzlich UDP 443)</td></tr>
          <tr><td>SMTP zwischen Mailservern</td><td>25</td><td>TCP</td></tr>
          <tr><td>SMTP-Submission (Versand vom Client)</td><td>587</td><td>TCP</td></tr>
          <tr><td>IMAPS</td><td>993</td><td>TCP</td></tr>
          <tr><td>DNS</td><td>53</td><td>UDP und TCP</td></tr>
          <tr><td>SSH</td><td>22</td><td>TCP</td></tr>
          <tr><td>RDP</td><td>3389</td><td>TCP (zusätzlich UDP 3389 möglich)</td></tr>
        </tbody></table>
        <p><strong>b)</strong> Telnet und FTP übertragen Benutzernamen, Passwörter und Daten im <strong>Klartext</strong> – jeder, der den Verkehr mitschneidet, kann sie lesen. Alternativen: <strong>SSH</strong> statt Telnet, <strong>SFTP</strong> (über SSH) oder FTPS statt FTP.</p>
        <p><strong>c)</strong></p>
        <ol><li>Client → Server: <strong>SYN</strong>, Seq = 5000</li><li>Server → Client: <strong>SYN-ACK</strong>, Seq = 9000, Ack = 5001</li><li>Client → Server: <strong>ACK</strong>, Seq = 5001, Ack = 9001</li></ol>
        <p><strong>d)</strong> Bei Sprache zählt eine geringe, gleichmäßige Verzögerung. TCP würde verlorene Pakete neu anfordern; bis sie ankommen, ist der Moment im Gespräch vorbei, und die Wartezeit erzeugt Aussetzer. UDP verzichtet auf Verbindungsaufbau, Bestätigungen und Neuübertragungen und hat mit 8 Byte einen kleineren Header. Einzelne verlorene Pakete fallen beim Hören kaum auf.</p>`
    },
    {
      id: "e-ports-zuordnen",
      topic: "ports-tcp-udp",
      title: "Portnummern, Transportprotokolle und Portbereiche zuordnen",
      level: 1,
      exam: ["AP1", "AP2"],
      task: `<p>Für die Netzdokumentation der <strong>Nordlicht IT GmbH</strong> in Heide sollst du eine Portliste erstellen.</p>
        <p>a) Gib zu jedem Dienst den Standardport und das Transportprotokoll (TCP/UDP) an: (1) Webseite unverschlüsselt, (2) Webseite verschlüsselt, (3) Fernwartung eines Linux-Servers verschlüsselt, (4) Namensauflösung, (5) automatische IP-Konfiguration (Server/Client), (6) Zeitsynchronisation, (7) Mailabruf per IMAP mit TLS, (8) Mailversand vom Mail-Client, (9) Windows-Dateifreigabe, (10) Remotedesktop, (11) Netzwerküberwachung von Switches, (12) Mailtransport zwischen Mailservern.<br>
        b) Ordne die Portnummern 22, 1023, 3389, 49152 und 50412 den IANA-Portbereichen zu.<br>
        c) Nenne zu vier unverschlüsselten Diensten die verschlüsselte Alternative mit Port.</p>`,
      hints: ["Well-known 0–1023, Registered 1024–49151, Dynamic 49152–65535"],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Nr.</th><th>Dienst</th><th>Port</th><th>Transport</th></tr></thead><tbody>
          <tr><td>1</td><td>HTTP</td><td>80</td><td>TCP</td></tr>
          <tr><td>2</td><td>HTTPS</td><td>443</td><td>TCP (HTTP/3 zusätzlich UDP)</td></tr>
          <tr><td>3</td><td>SSH</td><td>22</td><td>TCP</td></tr>
          <tr><td>4</td><td>DNS</td><td>53</td><td>UDP (große Antworten, Zonentransfer TCP)</td></tr>
          <tr><td>5</td><td>DHCP</td><td>67 (Server) / 68 (Client)</td><td>UDP</td></tr>
          <tr><td>6</td><td>NTP</td><td>123</td><td>UDP</td></tr>
          <tr><td>7</td><td>IMAPS</td><td>993</td><td>TCP</td></tr>
          <tr><td>8</td><td>SMTP-Submission</td><td>587 (STARTTLS) bzw. 465 (TLS)</td><td>TCP</td></tr>
          <tr><td>9</td><td>SMB</td><td>445</td><td>TCP</td></tr>
          <tr><td>10</td><td>RDP</td><td>3389</td><td>TCP (optional zusätzlich UDP)</td></tr>
          <tr><td>11</td><td>SNMP</td><td>161 (Abfrage), 162 (Traps)</td><td>UDP</td></tr>
          <tr><td>12</td><td>SMTP</td><td>25</td><td>TCP</td></tr>
        </tbody></table>
        <p><strong>b)</strong> 22 → Well-known (0–1023) · 1023 → Well-known (letzter Port dieses Bereichs) · 3389 → Registered (1024–49151) · 49152 → Dynamic/Private (erster Port dieses Bereichs) · 50412 → Dynamic/Private (typischer Quellport eines Clients).</p>
        <p><strong>c)</strong> Telnet 23 → SSH 22 · HTTP 80 → HTTPS 443 · POP3 110 → POP3S 995 · IMAP 143 → IMAPS 993 · LDAP 389 → LDAPS 636 · FTP 21 → SFTP 22 (über SSH) bzw. FTPS. (Vier davon genügen.)</p>`
    },
    {
      id: "e-osi-mitschnitt",
      topic: "schichtenmodelle",
      title: "Paketmitschnitt nach Schichten auswerten",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Ein Azubi der <strong>Nordlicht IT GmbH</strong> hat mit Wireshark folgenden Frame aufgezeichnet (gekürzt):</p>
        <pre><code>Frame 17: 74 bytes on wire
Ethernet II, Src: 3c:52:82:1f:a7:09, Dst: 00:0c:29:10:00:01
    Type: IPv4 (0x0800)
Internet Protocol Version 4, Src: 192.168.10.23, Dst: 198.51.100.25
    Time to Live: 128, Protocol: TCP (6)
Transmission Control Protocol, Src Port: 50412, Dst Port: 587
    Seq: 0 (relative), Len: 0, Flags: 0x002 (SYN)</code></pre>
        <p>a) Ordne die Abschnitte „Ethernet II“, „Internet Protocol Version 4“ und „Transmission Control Protocol“ je einer OSI-Schicht, einer TCP/IP-Schicht und einer PDU zu.<br>
        b) Welcher Dienst wird angesprochen? Ordne beide Ports einem IANA-Portbereich zu.<br>
        c) Was bedeutet das Flag SYN? Welche zwei Segmente folgen, bis die Verbindung steht?<br>
        d) Die Ziel-MAC 00:0c:29:10:00:01 gehört nicht zum Server 198.51.100.25. Erkläre.<br>
        e) Warum enthält dieser Frame keine Anwendungsdaten (Len: 0)?<br>
        f) Welche TTL hat das Paket, wenn es beim Server ankommt und unterwegs drei Router passiert hat?</p>`,
      hints: ["Type 0x0800 kennzeichnet den Inhalt des Frames.", "Jeder Router verringert die TTL um 1."],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Abschnitt</th><th>OSI-Schicht</th><th>TCP/IP-Schicht</th><th>PDU</th></tr></thead><tbody>
          <tr><td>Ethernet II (MAC-Adressen, Type)</td><td>2 – Sicherung</td><td>Netzzugang</td><td>Frame (Rahmen)</td></tr>
          <tr><td>IPv4 (IP-Adressen, TTL)</td><td>3 – Vermittlung</td><td>Internet</td><td>Paket</td></tr>
          <tr><td>TCP (Ports, Seq, Flags)</td><td>4 – Transport</td><td>Transport</td><td>Segment</td></tr>
        </tbody></table>
        <p>Der Type 0x0800 im Ethernet-Header zeigt, dass im Frame ein IPv4-Paket steckt; „Protocol: TCP (6)“ im IP-Header zeigt, dass darin ein TCP-Segment steckt – das ist die Kapselung.</p>
        <p><strong>b)</strong> Zielport 587 = <strong>SMTP-Submission</strong>: Ein Mail-Client möchte eine E-Mail beim Mailserver einliefern. 587 liegt im Bereich der Well-known Ports (0–1023), der Quellport 50412 ist ein dynamischer Port (49152–65535), den das Betriebssystem des Clients vergeben hat.</p>
        <p><strong>c)</strong> SYN ist der erste Schritt des 3-Way-Handshakes: Der Client möchte eine TCP-Verbindung aufbauen und teilt seine Start-Sequenznummer mit (Wireshark zeigt sie relativ als 0 an). Es folgen ein <strong>SYN-ACK</strong> des Servers (eigene Seq, Ack = Seq des Clients + 1) und ein <strong>ACK</strong> des Clients. Erst danach fließen Daten.</p>
        <p><strong>d)</strong> Der Server liegt in einem fremden Netz. Der PC schickt den Frame deshalb an sein <strong>Standardgateway</strong>; die Ziel-MAC ist die MAC des Router-Interfaces, die er per ARP ermittelt hat. Die Ziel-IP bleibt die des Servers.</p>
        <p><strong>e)</strong> Während des Verbindungsaufbaus werden nur Steuerinformationen ausgetauscht. Anwendungsdaten (hier die SMTP-Kommunikation) fließen erst nach dem abgeschlossenen Handshake.</p>
        <p><strong>f)</strong> Jeder Router verringert die TTL um 1: 128 − 3 = <strong>125</strong>.</p>`
    },
    {
      id: "e-mac-analyse",
      topic: "mac-arp",
      title: "MAC-Adressen und ARP-Cache auswerten",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Bei der Fehlersuche im Netz der <strong>Husumer Hafenbetriebe</strong> findest du folgende MAC-Adressen in einem Mitschnitt:</p>
        <ol><li>00:1B:44:11:3A:B7</li><li>FF:FF:FF:FF:FF:FF</li><li>01:00:5E:7F:00:01</li><li>02:42:AC:11:00:02</li></ol>
        <p>a) Bestimme jeweils, ob es sich um Unicast, Multicast oder Broadcast handelt und ob die Adresse global (Hersteller) oder lokal verwaltet ist. Begründe mit den Bits des ersten Bytes.<br>
        b) Was gibt der OUI der ersten Adresse an?<br>
        c) Auf dem PC 192.168.10.23 zeigt <code>arp -a</code>:</p>
        <pre><code>Schnittstelle: 192.168.10.23 --- 0xb
  Internetadresse       Physische Adresse     Typ
  192.168.10.1          00-0c-29-10-00-01     dynamisch
  192.168.10.255        ff-ff-ff-ff-ff-ff     statisch</code></pre>
        <p>Erkläre die beiden Einträge. Warum taucht der Server 192.168.20.50 nicht auf, obwohl der PC ihn gerade erfolgreich angepingt hat?</p>`,
      hints: ["I/G-Bit = niederwertigstes Bit des ersten Bytes, U/L-Bit = das Bit links daneben"],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Nr.</th><th>1. Byte binär</th><th>I/G</th><th>U/L</th><th>Ergebnis</th></tr></thead><tbody>
          <tr><td>1</td><td>00 = 0000 0000</td><td>0</td><td>0</td><td>Unicast, global (Herstelleradresse)</td></tr>
          <tr><td>2</td><td>FF = 1111 1111</td><td>1</td><td>1</td><td>Broadcast (alle 48 Bit = 1)</td></tr>
          <tr><td>3</td><td>01 = 0000 0001</td><td>1</td><td>0</td><td>Multicast (Bereich 01:00:5E für IPv4-Multicast)</td></tr>
          <tr><td>4</td><td>02 = 0000 0010</td><td>0</td><td>1</td><td>Unicast, lokal verwaltet (z. B. von einer Container-Software vergeben)</td></tr>
        </tbody></table>
        <p><strong>b)</strong> Der OUI 00:1B:44 sind die ersten 24 Bit. Die IEEE hat ihn einem Hersteller zugeteilt; er verrät also, von welchem Hersteller die Netzwerkkarte stammt.</p>
        <p><strong>c)</strong> Eintrag 1: Die IP des Standardgateways 192.168.10.1 wurde per ARP aufgelöst („dynamisch“, verfällt nach kurzer Zeit). Eintrag 2: Die Broadcast-Adresse des Netzes ist fest der MAC FF:FF:FF:FF:FF:FF zugeordnet („statisch“).<br>
        Der Server 192.168.20.50 liegt in einem anderen Netz. Pakete an ihn schickt der PC an das Gateway; im Frame steht daher die MAC des Routers. Für fremde Netze wird nie die Ziel-MAC ermittelt – ARP funktioniert nur im eigenen Netzabschnitt.</p>`
    },
    {
      id: "e-routing-statisch",
      topic: "routing",
      title: "Statische Routen für drei Standorte",
      level: 3,
      exam: ["AP2"],
      task: `<p>Die <strong>Nordlicht IT GmbH</strong> verbindet drei Standorte:</p>
        <table><thead><tr><th>Router</th><th>Interface</th><th>Adresse</th><th>verbunden mit</th></tr></thead><tbody>
          <tr><td>R-Heide</td><td>G0/0</td><td>192.168.10.1/24</td><td>LAN Heide</td></tr>
          <tr><td>R-Heide</td><td>G0/1</td><td>10.0.0.1/30</td><td>R-Husum</td></tr>
          <tr><td>R-Heide</td><td>G0/2</td><td>203.0.113.2/30</td><td>Provider (203.0.113.1)</td></tr>
          <tr><td>R-Husum</td><td>G0/0</td><td>192.168.20.1/24</td><td>LAN Husum</td></tr>
          <tr><td>R-Husum</td><td>G0/1</td><td>10.0.0.2/30</td><td>R-Heide</td></tr>
          <tr><td>R-Husum</td><td>G0/2</td><td>10.0.0.5/30</td><td>R-Itzehoe</td></tr>
          <tr><td>R-Itzehoe</td><td>G0/0</td><td>192.168.30.1/24</td><td>LAN Itzehoe</td></tr>
          <tr><td>R-Itzehoe</td><td>G0/1</td><td>10.0.0.6/30</td><td>R-Husum</td></tr>
        </tbody></table>
        <p>a) Welche Netze stehen ohne weitere Konfiguration als „C“ in der Routingtabelle von R-Husum?<br>
        b) Konfiguriere R-Heide so, dass es beide anderen LANs und das Internet erreicht.<br>
        c) Konfiguriere R-Husum (alle LANs erreichbar, Internet über R-Heide) und R-Itzehoe (so kurz wie möglich).<br>
        d) Über welchen Eintrag leitet R-Heide Pakete an 192.168.30.77 und an 9.9.9.9 weiter?<br>
        e) Vor deiner Konfiguration hatte ein Kollege nur R-Heide eingerichtet. Ein ping von einem PC in Heide zu einem PC in Husum scheiterte trotzdem. Erkläre.<br>
        f) Die Firma plant zehn weitere Filialen. Empfiehl ein Verfahren und gib die OSPF-Konfiguration für R-Husum an.</p>`,
      hints: ["Direkt verbundene Netze kennt ein Router automatisch.", "Denk an den Rückweg der Antworten."],
      solution: `<p><strong>a)</strong> 192.168.20.0/24 (G0/0), 10.0.0.0/30 (G0/1) und 10.0.0.4/30 (G0/2) – zusätzlich je ein „L“-Eintrag für die eigenen Interface-Adressen.</p>
        <p><strong>b)</strong></p>
        <pre><code>R-Heide(config)# ip route 192.168.20.0 255.255.255.0 10.0.0.2
R-Heide(config)# ip route 192.168.30.0 255.255.255.0 10.0.0.2
R-Heide(config)# ip route 0.0.0.0 0.0.0.0 203.0.113.1</code></pre>
        <p>Beide LANs liegen hinter R-Husum, deshalb ist der Next Hop jeweils 10.0.0.2. Alles Unbekannte geht per Default-Route zum Provider.</p>
        <p><strong>c)</strong></p>
        <pre><code>R-Husum(config)# ip route 192.168.30.0 255.255.255.0 10.0.0.6
R-Husum(config)# ip route 0.0.0.0 0.0.0.0 10.0.0.1

R-Itzehoe(config)# ip route 0.0.0.0 0.0.0.0 10.0.0.5</code></pre>
        <p>R-Husum braucht keine eigene Route für 192.168.10.0/24 – die Default-Route zu R-Heide deckt Heide und das Internet ab. R-Itzehoe ist ein Stub-Netz mit nur einem Ausgang: Eine Default-Route genügt.</p>
        <p><strong>d)</strong> 192.168.30.77 passt auf 192.168.30.0/24 und auf 0.0.0.0/0 – nach dem <strong>Longest Prefix Match</strong> gewinnt /24 → Next Hop 10.0.0.2. Für 9.9.9.9 passt nur die Default-Route → 203.0.113.1.</p>
        <p><strong>e)</strong> Die Echo Requests kamen in Husum an, weil R-Heide eine Route kannte. R-Husum kannte aber keinen Weg zurück nach 192.168.10.0/24 (nur direkt verbundene Netze, keine Default-Route) und verwarf die Echo Replies. Routing muss immer für <strong>Hin- und Rückweg</strong> funktionieren.</p>
        <p><strong>f)</strong> Bei vielen Standorten ist statisches Routing fehleranfällig und reagiert nicht auf Ausfälle. Empfehlung: <strong>OSPF</strong> (Link-State, schnelle Konvergenz, skaliert gut, Metrik nach Bandbreite).</p>
        <pre><code>R-Husum(config)# router ospf 1
R-Husum(config-router)# network 192.168.20.0 0.0.0.255 area 0
R-Husum(config-router)# network 10.0.0.0 0.0.0.3 area 0
R-Husum(config-router)# network 10.0.0.4 0.0.0.3 area 0</code></pre>
        <p>Die Wildcard 0.0.0.3 ist die invertierte Maske von 255.255.255.252.</p>`
    },
    {
      id: "e-routing-tabelle",
      topic: "routing",
      title: "Routingtabelle lesen und Longest Prefix Match anwenden",
      level: 2,
      exam: ["AP2"],
      task: `<p>Auf dem Router der <strong>Marschbahn Logistik GmbH</strong> in Meldorf zeigt <code>show ip route</code> (gekürzt):</p>
        <pre><code>Gateway of last resort is 10.10.0.1 to network 0.0.0.0
S*   0.0.0.0/0 [1/0] via 10.10.0.1
C    10.10.0.0/30 is directly connected, GigabitEthernet0/1
L    10.10.0.2/32 is directly connected, GigabitEthernet0/1
C    10.10.0.4/30 is directly connected, GigabitEthernet0/2
L    10.10.0.5/32 is directly connected, GigabitEthernet0/2
C    172.16.0.0/24 is directly connected, GigabitEthernet0/0
L    172.16.0.1/32 is directly connected, GigabitEthernet0/0
O    172.16.8.0/22 [110/2] via 10.10.0.6, GigabitEthernet0/2
S    172.16.10.0/24 [1/0] via 10.10.0.1</code></pre>
        <p>a) Erkläre die Kennbuchstaben C, L, S, O und S* sowie die Angabe [110/2].<br>
        b) Über welchen Eintrag und welchen Next Hop bzw. welches Interface werden Pakete an folgende Ziele geleitet: 172.16.0.50, 172.16.9.20, 172.16.10.7, 172.16.12.1?<br>
        c) Hinter 10.10.0.6 kommt das neue Netz 192.168.50.0/24 hinzu. Gib den Befehl für eine statische Route an.<br>
        d) Das Netz 192.168.50.0/24 wird später zusätzlich per OSPF gelernt. Welche Route nutzt der Router? Begründe.</p>`,
      hints: ["172.16.8.0/22 umfasst im 3. Oktett die Werte 8 bis 11.", "Bei mehreren Treffern gewinnt das längste Präfix."],
      solution: `<p><strong>a)</strong> <strong>C</strong> = direkt verbundenes Netz, <strong>L</strong> = eigene Interface-Adresse (/32), <strong>S</strong> = statische Route, <strong>O</strong> = per OSPF gelernte Route, <strong>S*</strong> = statische Default-Route (Gateway of last resort). In [110/2] ist 110 die administrative Distanz (OSPF) und 2 die Metrik (OSPF-Kosten).</p>
        <p><strong>b)</strong></p>
        <table><thead><tr><th>Ziel</th><th>passende Einträge</th><th>gewählter Eintrag (Longest Prefix Match)</th><th>Weiterleitung</th></tr></thead><tbody>
          <tr><td>172.16.0.50</td><td>172.16.0.0/24, 0.0.0.0/0</td><td>C 172.16.0.0/24</td><td>direkt über G0/0 (ARP nach dem Ziel)</td></tr>
          <tr><td>172.16.9.20</td><td>172.16.8.0/22 (8–11), 0.0.0.0/0</td><td>O 172.16.8.0/22</td><td>Next Hop 10.10.0.6 über G0/2</td></tr>
          <tr><td>172.16.10.7</td><td>172.16.10.0/24, 172.16.8.0/22, 0.0.0.0/0</td><td>S 172.16.10.0/24 (/24 länger als /22)</td><td>Next Hop 10.10.0.1 über G0/1</td></tr>
          <tr><td>172.16.12.1</td><td>nur 0.0.0.0/0 (12 liegt nicht mehr in 8–11)</td><td>S* Default-Route</td><td>Next Hop 10.10.0.1 über G0/1</td></tr>
        </tbody></table>
        <p><strong>c)</strong> <code>ip route 192.168.50.0 255.255.255.0 10.10.0.6</code></p>
        <p><strong>d)</strong> Die <strong>statische Route</strong>. Beide Einträge haben dasselbe Präfix (/24), also entscheidet die administrative Distanz: statisch 1 &lt; OSPF 110. Die OSPF-Route wird erst genutzt, wenn die statische Route aus der Tabelle verschwindet – z. B. weil der Admin sie löscht oder der Next Hop 10.10.0.6 nicht mehr erreichbar ist (fällt G0/2 aus, hilft OSPF allerdings nur, wenn es das Netz über einen anderen Weg gelernt hat). (Eine statische Route mit höherer AD als 110 hieße „Floating Static Route“ und diente als Reserve.)</p>`
    },
    {
      id: "e-vlan-autohaus",
      topic: "vlan",
      title: "VLANs und Router-on-a-Stick im Autohaus",
      level: 3,
      exam: ["AP2"],
      task: `<p>Das <strong>Autohaus Marschland GmbH</strong> in Heide möchte Verkauf, Werkstatt, Gäste-WLAN und Geräteverwaltung trennen. Es gibt zwei Switches: SW1 (Verkaufsraum) und SW2 (Werkstatt), verbunden über G0/1. SW1 ist über G0/2 mit Router R1 (G0/0) verbunden.</p>
        <table><thead><tr><th>VLAN</th><th>Name</th><th>Netz</th></tr></thead><tbody>
          <tr><td>10</td><td>Verkauf</td><td>192.168.10.0/24</td></tr>
          <tr><td>20</td><td>Werkstatt</td><td>192.168.20.0/24</td></tr>
          <tr><td>30</td><td>Gaeste</td><td>192.168.30.0/24</td></tr>
          <tr><td>99</td><td>Management</td><td>192.168.99.0/24</td></tr>
        </tbody></table>
        <p>a) Nenne drei Vorteile der VLAN-Lösung für das Autohaus.<br>
        b) Welche Ports von SW1 sind Access-, welche Trunk-Ports?<br>
        c) Konfiguriere SW1: VLANs anlegen, Fa0/1–12 in VLAN 10, Fa0/13 (Access Point für Gäste) in VLAN 30, G0/1 und G0/2 als Trunk mit Native VLAN 99.<br>
        d) Konfiguriere R1 als Router-on-a-Stick für die VLANs 10, 20 und 30 (Gateway jeweils .1).<br>
        e) Ein PC an SW1 Fa0/5 erhält keine Verbindung ins Verkaufsnetz. <code>show vlan brief</code> zeigt Fa0/5 in VLAN 1. Ursache und Lösung?<br>
        f) Welche Werte stehen im 802.1Q-Tag, wenn ein Frame aus VLAN 20 über den Trunk läuft?</p>`,
      hints: ["Subinterface: interface g0/0.10 + encapsulation dot1Q 10", "VID hat 12 Bit."],
      solution: `<p><strong>a)</strong> (1) <strong>Sicherheit:</strong> Gäste im WLAN kommen nicht an Werkstatt- und Verkaufsrechner, Übergänge regelt der Router bzw. eine ACL. (2) <strong>Performance:</strong> kleinere Broadcast-Domänen. (3) <strong>Flexibilität und Kosten:</strong> Beide Abteilungen nutzen dieselben Switches; ein Arbeitsplatzwechsel ist nur eine Portänderung.</p>
        <p><strong>b)</strong> Access-Ports: Fa0/1–12 (VLAN 10) und Fa0/13 (VLAN 30) – dort hängt jeweils ein Endgerät eines VLANs. Trunk-Ports: G0/1 (zu SW2) und G0/2 (zu R1), weil darüber mehrere VLANs laufen.</p>
        <p><strong>c)</strong></p>
        <pre><code>SW1(config)# vlan 10
SW1(config-vlan)# name Verkauf
SW1(config-vlan)# vlan 20
SW1(config-vlan)# name Werkstatt
SW1(config-vlan)# vlan 30
SW1(config-vlan)# name Gaeste
SW1(config-vlan)# vlan 99
SW1(config-vlan)# name Management
SW1(config)# interface range fa0/1 - 12
SW1(config-if-range)# switchport mode access
SW1(config-if-range)# switchport access vlan 10
SW1(config)# interface fa0/13
SW1(config-if)# switchport mode access
SW1(config-if)# switchport access vlan 30
SW1(config)# interface range g0/1 - 2
SW1(config-if-range)# switchport mode trunk
SW1(config-if-range)# switchport trunk native vlan 99
SW1(config-if-range)# switchport trunk allowed vlan 10,20,30,99</code></pre>
        <p><strong>d)</strong></p>
        <pre><code>R1(config)# interface g0/0
R1(config-if)# no shutdown
R1(config)# interface g0/0.10
R1(config-subif)# encapsulation dot1Q 10
R1(config-subif)# ip address 192.168.10.1 255.255.255.0
R1(config)# interface g0/0.20
R1(config-subif)# encapsulation dot1Q 20
R1(config-subif)# ip address 192.168.20.1 255.255.255.0
R1(config)# interface g0/0.30
R1(config-subif)# encapsulation dot1Q 30
R1(config-subif)# ip address 192.168.30.1 255.255.255.0</code></pre>
        <p><strong>e)</strong> Fa0/5 wurde nicht (oder falsch) zugeordnet und liegt im Standard-VLAN 1. Der PC ist damit in einer anderen Broadcast-Domäne als das Verkaufsnetz. Lösung: <code>interface fa0/5</code>, <code>switchport mode access</code>, <code>switchport access vlan 10</code>, danach mit <code>show vlan brief</code> kontrollieren.</p>
        <p><strong>f)</strong> TPID = 0x8100 (kennzeichnet den Tag), PCP = Priorität (Standard 0), DEI = 0, <strong>VID = 20</strong> (12 Bit: 0000 0001 0100). Der Tag ist 4 Byte lang und steht hinter der Quell-MAC.</p>`
    },
    {
      id: "e-vlan-fehler",
      topic: "vlan",
      title: "Inter-VLAN-Routing: Konfigurationsfehler finden",
      level: 2,
      exam: ["AP2"],
      task: `<p>Bei der <strong>Tischlerei Holm GmbH</strong> in Wesselburen sind VLAN 10 (Verwaltung, 192.168.10.0/24) und VLAN 20 (Produktion, 192.168.20.0/24) per Router-on-a-Stick verbunden. Der Produktions-PC an Switchport Fa0/12 (IP 192.168.20.25/24, Gateway 192.168.20.254) erreicht die Verwaltung nicht; innerhalb der Verwaltung funktioniert alles. Auszüge der Konfiguration:</p>
        <pre><code>SW1: interface fa0/12
       switchport mode access
       switchport access vlan 20
SW1: interface g0/1
       switchport mode trunk
       switchport trunk allowed vlan 10

R1:  interface g0/0
       no shutdown
R1:  interface g0/0.10
       encapsulation dot1Q 10
       ip address 192.168.10.1 255.255.255.0
R1:  interface g0/0.20
       encapsulation dot1Q 30
       ip address 192.168.20.1 255.255.255.0</code></pre>
        <p>a) Finde alle drei Fehler und begründe, warum sie die Kommunikation verhindern.<br>
        b) Gib die korrigierten Befehle an.<br>
        c) Mit welchen show-Befehlen prüfst du auf dem Switch die VLAN-Zuordnung der Ports und die Trunks?</p>`,
      hints: ["Verfolge den Frame vom PC über den Trunk bis zum Subinterface.", "Das Gateway des PCs muss die Adresse des passenden Subinterfaces sein."],
      solution: `<p><strong>a)</strong></p>
        <ol>
          <li><strong>Trunk erlaubt nur VLAN 10:</strong> <code>switchport trunk allowed vlan 10</code> blockiert alle Frames aus VLAN 20 auf dem Uplink zum Router – die Produktion kommt gar nicht beim Router an.</li>
          <li><strong>Falsche VLAN-ID am Subinterface:</strong> g0/0.20 erwartet mit <code>encapsulation dot1Q 30</code> Frames mit Tag 30. Frames aus VLAN 20 (Tag 20) werden keinem Subinterface zugeordnet. (Die Nummer hinter dem Punkt ist nur ein Name – entscheidend ist die dot1Q-ID.)</li>
          <li><strong>Falsches Gateway am PC:</strong> 192.168.20.254 ist nicht die Router-Adresse. Das Gateway muss die IP des Subinterfaces g0/0.20 sein: 192.168.20.1.</li>
        </ol>
        <p><strong>b)</strong></p>
        <pre><code>SW1(config)# interface g0/1
SW1(config-if)# switchport trunk allowed vlan 10,20
R1(config)# interface g0/0.20
R1(config-subif)# encapsulation dot1Q 20
PC: Standardgateway 192.168.20.1</code></pre>
        <p>(Alternativ auf dem Switch <code>switchport trunk allowed vlan add 20</code>.)</p>
        <p><strong>c)</strong> <code>show vlan brief</code> zeigt, welcher Access-Port in welchem VLAN liegt; <code>show interfaces trunk</code> zeigt die Trunk-Ports, das Native VLAN und die erlaubten und aktiven VLANs. Auf dem Router prüft man mit <code>show ip interface brief</code>, ob die Subinterfaces „up/up“ sind.</p>`
    },
    {
      id: "e-nat-pat",
      topic: "nat-pat",
      title: "PAT-Tabelle und Port-Forwarding",
      level: 2,
      exam: ["AP2"],
      task: `<p>Die <strong>Friesenkrabben GmbH</strong> in Büsum nutzt intern 192.168.1.0/24. Der Router hat die öffentliche Adresse 198.51.100.7 und arbeitet mit PAT. Gleichzeitig bestehen diese Verbindungen:</p>
        <table><thead><tr><th>Inside Local</th><th>Inside Global</th><th>Outside Global</th></tr></thead><tbody>
          <tr><td>192.168.1.21:52000</td><td>?</td><td>203.0.113.10:443</td></tr>
          <tr><td>192.168.1.22:52000</td><td>?</td><td>203.0.113.10:443</td></tr>
          <tr><td>192.168.1.23:49999</td><td>?</td><td>203.0.113.99:993</td></tr>
        </tbody></table>
        <p>a) Vervollständige die Spalte „Inside Global“ und begründe deine Einträge.<br>
        b) Eine Antwort kommt an 198.51.100.7 mit dem Zielport, den du beim zweiten PC eingetragen hast. Was macht der Router?<br>
        c) Der neue Webshop-Server 192.168.1.80 soll aus dem Internet per HTTPS erreichbar sein. Welche Technik brauchst du? Gib den Cisco-Befehl an (Außen-Interface G0/1).<br>
        d) Nenne je zwei Vor- und Nachteile von NAT.<br>
        e) Nach einem Tarifwechsel hat der Router auf der WAN-Seite eine Adresse aus 100.64.0.0/10. Welche Folge hat das für den Webshop?</p>`,
      hints: ["Bei PAT teilen sich alle Hosts die öffentliche IP; unterschieden wird über Ports."],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Inside Local</th><th>Inside Global</th><th>Outside Global</th></tr></thead><tbody>
          <tr><td>192.168.1.21:52000</td><td>198.51.100.7:52000</td><td>203.0.113.10:443</td></tr>
          <tr><td>192.168.1.22:52000</td><td>198.51.100.7:52001 (z. B.)</td><td>203.0.113.10:443</td></tr>
          <tr><td>192.168.1.23:49999</td><td>198.51.100.7:49999</td><td>203.0.113.99:993</td></tr>
        </tbody></table>
        <p>Alle internen Hosts erscheinen unter der einen öffentlichen Adresse 198.51.100.7. Der Router übernimmt den Quellport, solange er frei ist. PC .21 und PC .22 nutzen aber denselben Quellport zum selben Ziel – würde der Router beide auf 52000 abbilden, könnte er Antworten nicht mehr zuordnen. Deshalb vergibt er für den zweiten PC einen anderen freien Port (z. B. 52001).</p>
        <p><strong>b)</strong> Der Router sucht in der NAT-Tabelle den Eintrag 198.51.100.7:52001, ersetzt Zieladresse und Zielport durch 192.168.1.22:52000 und leitet das Paket ins LAN weiter.</p>
        <p><strong>c)</strong> <strong>Port-Forwarding</strong> (statisches NAT mit Port, Destination-NAT):</p>
        <pre><code>R1(config)# ip nat inside source static tcp 192.168.1.80 443 interface g0/1 443</code></pre>
        <p>Zusätzlich muss die Firewall eingehend TCP 443 zum Server erlauben; besser steht der Webshop in einer DMZ.</p>
        <p><strong>d)</strong> Vorteile: spart öffentliche IPv4-Adressen; interne Adressstruktur ist von außen nicht sichtbar. Nachteile: Ende-zu-Ende-Verbindungen gehen verloren (eingehende Verbindungen nur mit Port-Forwarding); Protokolle wie IPsec oder SIP brauchen Zusatzlösungen (NAT-Traversal).</p>
        <p><strong>e)</strong> 100.64.0.0/10 ist der Adressbereich für <strong>Carrier-Grade-NAT</strong>: Der Provider übersetzt noch einmal auf seine öffentliche Adresse, die sich viele Kunden teilen. Eingehende Verbindungen erreichen den Router der Firma nicht mehr – Port-Forwarding funktioniert nicht. Lösung: Tarif mit eigener öffentlicher IPv4-Adresse, Nutzung von IPv6 oder Hosting des Webshops beim Dienstleister.</p>`
    },
    {
      id: "e-dhcp-dns",
      topic: "dhcp-dns",
      title: "DHCP-Relay, Reservierung und DNS-Einträge",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Bei der <strong>Nordlicht IT GmbH</strong> steht der zentrale DHCP- und DNS-Server mit der Adresse 10.0.0.10 im Servernetz. Router R1 verbindet das Servernetz (G0/0), das Verwaltungsnetz 192.168.10.0/24 (G0/1) und das Werkstattnetz 192.168.20.0/24 (G0/2).</p>
        <p>a) Beschreibe den DHCP-Ablauf eines neuen Clients mit den vier Nachrichten, ihren Absender- und Empfängeradressen und Ports.<br>
        b) Clients im Werkstattnetz erhalten nur 169.254.x.x-Adressen. Erkläre die Ursache und gib den Befehl zur Lösung an.<br>
        c) Für das Werkstattnetz soll ein Bereich eingerichtet werden: Router .1, Adressen .1–.20 nicht verteilen, DNS 10.0.0.10. Welche Angaben braucht der Bereich?<br>
        d) Der Etikettendrucker soll immer 192.168.20.25 erhalten, aber trotzdem per DHCP konfiguriert werden. Wie?<br>
        e) Lege für die Domain nordlicht-it.example DNS-Einträge an: Webserver www (203.0.113.20, IPv6 2001:db8:20::20), Mailserver mail (203.0.113.25), der die Mails der Domain annimmt, und den Alias intranet für www.<br>
        f) Eine Nutzerin meldet: <code>ping 203.0.113.20</code> funktioniert, <code>ping www.nordlicht-it.example</code> nicht. Wo liegt der Fehler, wie prüfst du das?</p>`,
      hints: ["Router leiten keine Broadcasts weiter.", "MX zeigt auf einen Namen, nicht auf eine IP."],
      solution: `<p><strong>a)</strong></p>
        <table><thead><tr><th>Nachricht</th><th>Absender → Empfänger</th><th>Ports (UDP)</th></tr></thead><tbody>
          <tr><td>DHCPDISCOVER</td><td>0.0.0.0 → 255.255.255.255 (Broadcast)</td><td>68 → 67</td></tr>
          <tr><td>DHCPOFFER</td><td>Server → Client (angebotene Adresse)</td><td>67 → 68</td></tr>
          <tr><td>DHCPREQUEST</td><td>0.0.0.0 → 255.255.255.255 (Broadcast, nennt den gewählten Server)</td><td>68 → 67</td></tr>
          <tr><td>DHCPACK</td><td>Server → Client (Bestätigung, Lease beginnt)</td><td>67 → 68</td></tr>
        </tbody></table>
        <p><strong>b)</strong> Discover und Request sind Broadcasts, die R1 nicht in andere Netze weiterleitet. Der Server im Servernetz hört die Werkstatt-Clients also nicht; diese vergeben sich eine APIPA-Adresse. Lösung: DHCP-Relay auf dem Interface zur Werkstatt:</p>
        <pre><code>R1(config)# interface g0/2
R1(config-if)# ip helper-address 10.0.0.10</code></pre>
        <p>Das Relay leitet die Anfragen als Unicast an 10.0.0.10 weiter und trägt 192.168.20.1 als Gateway-Adresse ein – daran erkennt der Server, aus welchem Bereich er vergeben muss. (Gleiches gilt für G0/1.)</p>
        <p><strong>c)</strong> Netz 192.168.20.0, Maske 255.255.255.0, Adressbereich 192.168.20.21–192.168.20.254 (Ausschluss .1–.20), Option Router (3) = 192.168.20.1, Option DNS-Server (6) = 10.0.0.10, Domänenname nordlicht-it.example, Lease-Dauer (z. B. 8 Tage).</p>
        <p><strong>d)</strong> Mit einer <strong>DHCP-Reservierung</strong>: Die MAC-Adresse des Druckers wird fest mit 192.168.20.25 verknüpft. Der Drucker bekommt so immer dieselbe Adresse, Optionen wie DNS-Server ändern sich aber zentral mit.</p>
        <p><strong>e)</strong></p>
        <table><thead><tr><th>Name</th><th>Typ</th><th>Wert</th></tr></thead><tbody>
          <tr><td>www</td><td>A</td><td>203.0.113.20</td></tr>
          <tr><td>www</td><td>AAAA</td><td>2001:db8:20::20</td></tr>
          <tr><td>mail</td><td>A</td><td>203.0.113.25</td></tr>
          <tr><td>nordlicht-it.example. (@)</td><td>MX</td><td>10 mail.nordlicht-it.example.</td></tr>
          <tr><td>intranet</td><td>CNAME</td><td>www.nordlicht-it.example.</td></tr>
        </tbody></table>
        <p><strong>f)</strong> Die IP-Verbindung funktioniert (Schicht 1–3 in Ordnung), nur die <strong>Namensauflösung</strong> schlägt fehl. Prüfen mit <code>ipconfig /all</code> (richtiger DNS-Server eingetragen?) und <code>nslookup www.nordlicht-it.example</code>; ggf. <code>ipconfig /flushdns</code> gegen einen veralteten Cache-Eintrag.</p>`
    },
    {
      id: "e-ipv6-praxis",
      topic: "ipv6",
      title: "IPv6-Adressen kürzen, planen und bilden",
      level: 2,
      exam: ["AP1", "AP2"],
      task: `<p>Die <strong>Nordsee Wind GmbH</strong> in Husum erhält von ihrem Provider das Präfix <code>2001:db8:4a2c::/48</code>.</p>
        <p>a) Kürze so weit wie möglich: (1) 2001:0db8:4a2c:0010:0000:0000:0000:0001 (2) fe80:0000:0000:0000:0000:0000:0000:0001 (3) 2001:0db8:0000:0042:0000:0000:0000:0100<br>
        b) Schreibe vollständig aus: 2001:db8:0:1::20<br>
        c) Welche Schreibweisen sind ungültig? Begründe. (1) 2001:db8::10::1 (2) fe80::a1b2:3ff:fe4c:5d6e (3) 2001:db8:12345::1<br>
        d) Wie viele /64-Subnetze kann die Firma bilden? Gib die ersten drei und das 256. Subnetz an.<br>
        e) Bilde nach EUI-64 die Adresse eines Sensors mit der MAC A4:BB:6D:12:34:56 im Subnetz 2001:db8:4a2c:10::/64.<br>
        f) Ordne den Adresstyp zu: fe80::1, fd00:1:2::5, ff02::2, ::1, 2001:db8:4a2c:10::1.</p>`,
      hints: ["Pro Block nur führende Nullen streichen, :: nur einmal.", "/48 bis /64 = 16 Bit"],
      solution: `<p><strong>a)</strong> (1) <code>2001:db8:4a2c:10::1</code> (2) <code>fe80::1</code> (3) <code>2001:db8:0:42::100</code> – in (3) gibt es einen einzelnen Nullblock (Block 3) und eine Folge von drei Nullblöcken (Blöcke 5–7); gekürzt wird die längere Folge, der einzelne Block wird zu 0.</p>
        <p><strong>b)</strong> Vorhanden sind 5 Blöcke (2001, db8, 0, 1, 20) → <code>::</code> ersetzt 8 − 5 = 3 Blöcke: <code>2001:0db8:0000:0001:0000:0000:0000:0020</code>.</p>
        <p><strong>c)</strong> (1) <strong>ungültig</strong>, weil <code>::</code> zweimal vorkommt – man könnte nicht bestimmen, wie viele Nullblöcke an welcher Stelle fehlen. (2) gültig (Link-Local mit EUI-64-Muster ff:fe). (3) <strong>ungültig</strong>, weil ein Block höchstens 4 Hexziffern (16 Bit) haben darf.</p>
        <p><strong>d)</strong> Von /48 bis /64 bleiben 64 − 48 = 16 Bit → 2¹⁶ = <strong>65.536 Subnetze</strong>. Die Subnet-ID ist der 4. Block: 2001:db8:4a2c:0::/64 (= 2001:db8:4a2c::/64), 2001:db8:4a2c:1::/64, 2001:db8:4a2c:2::/64. Das 256. Subnetz hat die ID 255 = hex ff → <strong>2001:db8:4a2c:ff::/64</strong>.</p>
        <p><strong>e)</strong> 1. MAC teilen und FF:FE einfügen: A4BB:6DFF:FE12:3456. 2. U/L-Bit (7. Bit von links) im ersten Byte umkehren: A4 = 1010 0100 → 1010 0110 = A6. 3. Interface-ID a6bb:6dff:fe12:3456 → Adresse <strong>2001:db8:4a2c:10:a6bb:6dff:fe12:3456</strong>.</p>
        <p><strong>f)</strong> fe80::1 → Link-Local · fd00:1:2::5 → Unique Local (ULA, intern) · ff02::2 → Multicast an alle Router im Segment · ::1 → Loopback · 2001:db8:4a2c:10::1 → Global Unicast (2000::/3; der Bereich 2001:db8::/32 ist eigentlich für Dokumentation reserviert und wird hier nur als Beispiel genutzt).</p>`
    },
    {
      id: "e-fehlersuche",
      topic: "cisco-fehlersuche",
      title: "Systematische Fehlersuche in der Steuerkanzlei",
      level: 3,
      exam: ["AP1", "AP2"],
      task: `<p>In der <strong>Steuerkanzlei Watt &amp; Partner</strong> in Heide meldet eine Mitarbeiterin: „Kein Internet.“ <code>ipconfig /all</code> zeigt an ihrem PC (Auszug):</p>
        <pre><code>Physische Adresse . . . . . . . . : 3C-52-82-1F-A7-09
DHCP aktiviert. . . . . . . . . . : Ja
Autokonfiguration IPv4-Adresse  . : 169.254.23.117(Bevorzugt)
Subnetzmaske  . . . . . . . . . . : 255.255.0.0
Standardgateway . . . . . . . . . :</code></pre>
        <p>a) Interpretiere die Ausgabe und nenne drei mögliche Ursachen.<br>
        b) Nach Behebung des ersten Fehlers hat der PC 192.168.40.37/24, Gateway und DNS 192.168.40.1. Ergebnisse: <code>ping 127.0.0.1</code> erfolgreich, <code>ping 192.168.40.1</code> erfolgreich (&lt; 1 ms), <code>ping 9.9.9.9</code> viermal „Zeitüberschreitung der Anforderung“, <code>tracert 9.9.9.9</code> zeigt Hop 1 = 192.168.40.1, danach nur Sternchen. Grenze den Fehler ein.<br>
        c) Auf dem Router zeigt <code>show ip interface brief</code>:</p>
        <pre><code>Interface            IP-Address      OK? Method Status                Protocol
GigabitEthernet0/0   192.168.40.1    YES manual up                    up
GigabitEthernet0/1   198.51.100.14   YES manual administratively down down</code></pre>
        <p>Was ist die Ursache, wie behebst du sie dauerhaft?<br>
        d) Beschreibe allgemein ein systematisches Vorgehen bei „kein Netzwerk“ in sinnvoller Reihenfolge.<br>
        e) Später misst du im LAN Antwortzeiten von 120–180 ms zum Gateway. Nenne zwei mögliche Ursachen.</p>`,
      hints: ["169.254 = APIPA", "„administratively down“ = per Konfiguration abgeschaltet"],
      solution: `<p><strong>a)</strong> DHCP ist aktiv, aber der PC hat sich eine <strong>APIPA-Adresse</strong> (169.254.0.0/16) selbst gegeben, und es gibt kein Gateway. Er hat also <strong>keine Antwort von einem DHCP-Server</strong> erhalten. Mögliche Ursachen: DHCP-Server bzw. -Dienst ausgefallen oder Adresspool erschöpft; Kabel/Netzwerkdose defekt oder Switchport deaktiviert; Switchport im falschen VLAN; fehlendes DHCP-Relay, wenn der Server in einem anderen Netz steht.</p>
        <p><strong>b)</strong> Loopback ok → TCP/IP-Stack funktioniert. Gateway erreichbar → Kabel, Switch, IP-Konfiguration im LAN in Ordnung. Hinter dem Gateway ist Schluss: tracert endet nach Hop 1. Der Fehler liegt also <strong>am Router bzw. dessen Internetanbindung</strong> (WAN-Interface, Default-Route, NAT oder Provider).</p>
        <p><strong>c)</strong> Das WAN-Interface G0/1 wurde nie aktiviert bzw. abgeschaltet („administratively down“). Lösung:</p>
        <pre><code>R1# configure terminal
R1(config)# interface g0/1
R1(config-if)# no shutdown
R1(config-if)# end
R1# copy running-config startup-config</code></pre>
        <p>Danach mit <code>show ip interface brief</code> prüfen (up/up), mit <code>show ip route</code> die Default-Route kontrollieren und vom PC erneut <code>ping 9.9.9.9</code> testen.</p>
        <p><strong>d)</strong> Bottom-up nach OSI: (1) Schicht 1/2 prüfen: Link-LED, Kabel, Switchport. (2) <code>ipconfig /all</code>: plausible IP, Maske, Gateway, DNS? (3) <code>ping 127.0.0.1</code>. (4) Gateway anpingen. (5) Entfernte IP anpingen (Routing). (6) Namen anpingen bzw. <code>nslookup</code> (DNS). (7) <code>tracert</code>, um die Stelle zu finden. (8) Ursache beheben, Test wiederholen, Lösung im Ticket dokumentieren.</p>
        <p><strong>e)</strong> Im LAN sind Werte unter 1–2 ms normal. Ursachen für 120–180 ms: überlastetes Netz (z. B. großer Datentransfer, Broadcast-Sturm durch eine Schleife), überlastetes oder defektes Gerät (Switch/Router mit hoher CPU-Last), Duplex-Mismatch, fehlerhaftes Kabel mit vielen Neuübertragungen oder eine schwache WLAN-Verbindung.</p>`
    },
    {
      id: "e-switching-stp",
      topic: "switching-stp",
      title: "MAC-Tabelle füllen und Root Bridge bestimmen",
      level: 2,
      exam: ["AP2"],
      task: `<p>Bei der <strong>Husumer Hafenbetriebe GmbH</strong> hängen an Switch SW1 PC-A (Fa0/1), PC-B (Fa0/2) und PC-C (Fa0/3). Über Fa0/24 ist SW2 angeschlossen, an dem PC-D hängt. Die MAC-Tabelle von SW1 ist nach einem Neustart leer.</p>
        <p>a) Beschreibe für jeden Schritt, was SW1 lernt und wohin er den Frame weiterleitet: (1) A sendet an B. (2) B antwortet A. (3) A sendet einen ARP-Request. (4) D sendet an A.<br>
        b) Wie sieht die MAC-Tabelle von SW1 danach aus?<br>
        c) Drei Switches sind im Dreieck verbunden (alle Links 1 Gbit/s). Bridge-IDs: SW1 = 32768 / 00:1A:2B:00:00:01, SW2 = 4096 / 00:2C:3D:00:00:02, SW3 = 32768 / 00:0B:1C:00:00:03. Welcher Switch wird Root Bridge? Welcher Port wird blockiert?<br>
        d) Warum ist die Schleife ohne STP gefährlich?</p>`,
      hints: ["Gelernt wird aus der Quell-MAC.", "Niedrigste Bridge-ID gewinnt: zuerst Priorität, dann MAC."],
      solution: `<p><strong>a)</strong> (1) SW1 lernt A → Fa0/1. Ziel B ist unbekannt → <strong>Flooding</strong> an Fa0/2, Fa0/3 und Fa0/24. (2) SW1 lernt B → Fa0/2. Ziel A ist bekannt → nur an Fa0/1 (<strong>Forwarding</strong>). (3) Quelle A ist schon bekannt (Eintrag wird aufgefrischt). Ziel ist der Broadcast FF:FF:FF:FF:FF:FF → Flooding an alle Ports außer Fa0/1. (4) SW1 lernt D → Fa0/24. Ziel A bekannt → nur an Fa0/1.</p>
        <p><strong>b)</strong></p>
        <table><thead><tr><th>MAC-Adresse</th><th>Port</th></tr></thead><tbody>
          <tr><td>MAC von PC-A</td><td>Fa0/1</td></tr><tr><td>MAC von PC-B</td><td>Fa0/2</td></tr><tr><td>MAC von PC-D</td><td>Fa0/24</td></tr>
        </tbody></table>
        <p>PC-C fehlt, weil er noch nichts gesendet hat. Hinter Fa0/24 können mehrere MAC-Adressen stehen – das ist bei Uplinks normal.</p>
        <p><strong>c)</strong> Root Bridge wird der Switch mit der niedrigsten Bridge-ID. Zuerst zählt die Priorität: SW2 hat 4096 &lt; 32768 → <strong>SW2 ist Root Bridge</strong>. SW1 und SW3 wählen als Root Port jeweils ihren direkten Link zu SW2 (geringste Kosten). Auf dem Link SW1–SW3 haben beide die gleichen Kosten zur Root; dann entscheidet die niedrigere Bridge-ID: Prioritäten gleich (32768), MAC 00:0B:… (SW3) ist kleiner als 00:1A:… (SW1). SW3 stellt den Designated Port, <strong>der Port von SW1 Richtung SW3 wird blockiert</strong>.</p>
        <p><strong>d)</strong> Ethernet-Frames haben keine TTL. Ein Broadcast würde im Dreieck endlos kreisen und sich vervielfachen (<strong>Broadcast-Sturm</strong>), die MAC-Tabellen würden ständig umlernen, Endgeräte erhielten Frames doppelt. Nach kurzer Zeit wäre das Netz komplett überlastet.</p>`
    },
    {
      id: "e-dienste-hotel",
      topic: "dienste-sicherheit",
      title: "WLAN, E-Mail und DMZ für ein Strandhotel",
      level: 2,
      exam: ["AP2"],
      task: `<p>Das <strong>Strandhotel Sankt Peter-Ording</strong> modernisiert sein Netz. Es gibt ein Gäste-WLAN und ein Mitarbeiter-WLAN, einen Buchungs-Webserver und E-Mail für das Personal.</p>
        <p>a) Die Rezeption liest Mails am PC und auf dem Diensthandy. Empfiehl IMAP oder POP3 und begründe.<br>
        b) Für das Mitarbeiter-WLAN soll WPA3-Enterprise statt WPA3-Personal eingesetzt werden. Nenne zwei Vorteile und die drei Rollen bei IEEE 802.1X.<br>
        c) Im Erdgeschoss hängen drei Access Points nebeneinander im 2,4-GHz-Band. Welche Kanäle wählst du und warum?<br>
        d) Der Buchungs-Webserver soll in eine DMZ. Erstelle eine einfache Regeltabelle (Quelle, Ziel, Dienst/Port, Aktion) für: Internet → Webserver, Admin-PC im LAN → Webserver (Wartung), LAN → Internet (Surfen und DNS), DMZ → LAN.<br>
        e) Die neuen IP-Telefone klingen abgehackt, wenn Gäste Videos streamen. Was schlägst du vor?</p>`,
      hints: ["Enterprise = individuelle Anmeldung über RADIUS", "2,4 GHz: überlappungsfreie Kanäle"],
      solution: `<p><strong>a)</strong> <strong>IMAP</strong>: Die Mails bleiben auf dem Server, Ordner und Gelesen-Status werden zwischen PC und Handy synchronisiert. Bei POP3 werden Mails meist heruntergeladen und auf dem Server gelöscht – dann fehlen sie auf dem zweiten Gerät. Verschlüsselt über IMAPS (Port 993).</p>
        <p><strong>b)</strong> Vorteile: Jede Person meldet sich mit eigenem Konto oder Zertifikat an – bei Kündigung wird nur dieser Zugang gesperrt, statt ein gemeinsames Passwort überall zu ändern; Anmeldungen sind protokollierbar und Nutzer können automatisch einem VLAN zugewiesen werden. Rollen: <strong>Supplicant</strong> (Endgerät), <strong>Authenticator</strong> (Access Point bzw. WLAN-Controller), <strong>Authentication Server</strong> (RADIUS-Server).</p>
        <p><strong>c)</strong> Kanäle <strong>1, 6 und 11</strong>. Im 2,4-GHz-Band überlappen sich benachbarte 20-MHz-Kanäle; nur so weit auseinanderliegende Kanäle stören sich nicht gegenseitig. Besser noch: zusätzlich das 5-GHz-Band mit vielen überlappungsfreien Kanälen nutzen.</p>
        <p><strong>d)</strong></p>
        <table><thead><tr><th>Nr.</th><th>Quelle</th><th>Ziel</th><th>Dienst/Port</th><th>Aktion</th></tr></thead><tbody>
          <tr><td>1</td><td>Internet</td><td>Webserver (DMZ)</td><td>HTTPS, TCP 443</td><td>erlauben</td></tr>
          <tr><td>2</td><td>Admin-PC (LAN)</td><td>Webserver (DMZ)</td><td>SSH, TCP 22</td><td>erlauben</td></tr>
          <tr><td>3</td><td>LAN</td><td>Internet</td><td>HTTP/HTTPS TCP 80/443, DNS UDP/TCP 53</td><td>erlauben</td></tr>
          <tr><td>4</td><td>DMZ</td><td>LAN</td><td>alle</td><td>verbieten</td></tr>
          <tr><td>5</td><td>beliebig</td><td>beliebig</td><td>alle</td><td>verbieten (Standardregel)</td></tr>
        </tbody></table>
        <p>Antworten auf erlaubte Verbindungen lässt eine Stateful-Firewall automatisch zurück. Regel 4 sorgt dafür, dass ein gehackter Webserver das LAN nicht angreifen kann.</p>
        <p><strong>e)</strong> <strong>QoS</strong> einführen: Telefone in ein eigenes Voice-VLAN legen, Sprachpakete markieren (z. B. DSCP EF bzw. 802.1p) und auf Switches und Router bevorzugt weiterleiten; Gäste-WLAN in der Bandbreite begrenzen. Ziel: Latenz, Jitter und Paketverlust für Sprache niedrig halten.</p>`
    },
    {
      id: "e-verfuegbarkeit",
      topic: "nat-pat",
      title: "Verfügbarkeit der Internetanbindung und Backup-Dauer",
      level: 3,
      exam: ["AP2"],
      task: `<p>Die <strong>Nordlicht IT GmbH</strong> bindet ihren Standort Heide über zwei unabhängige Leitungen an: Glasfaser mit 99,5 % und 5G mit 98 % Verfügbarkeit (parallel). Dahinter folgen in Reihe ein Router (99,9 %) und eine Firewall (99,95 %).</p>
        <p>a) Berechne die Verfügbarkeit der parallelen Provider-Anbindung.<br>
        b) Berechne die Gesamtverfügbarkeit und die zu erwartende Ausfallzeit pro Jahr (8760 h).<br>
        c) Benenne den Single Point of Failure mit dem größten Einfluss und schlage eine Lösung vor. Wie ändert sich die Gesamtverfügbarkeit, wenn ein zweiter, gleichwertiger Router per VRRP parallel geschaltet wird?<br>
        d) Jede Nacht sollen 120 GB Sicherungsdaten über die Glasfaser (Upload 200 Mbit/s, 10 % Protokoll-Overhead) in ein Cloud-Rechenzentrum übertragen werden. Das Zeitfenster beträgt 3 Stunden. Reicht es? Wie lange dauert es bei 120 GiB?</p>`,
      hints: ["parallel: 1 − (1 − A₁) × (1 − A₂)", "in Reihe: Verfügbarkeiten multiplizieren", "1 GB = 10⁹ Byte, 1 GiB = 2³⁰ Byte, 1 Byte = 8 Bit"],
      solution: `<p><strong>a)</strong> Ausfallwahrscheinlichkeiten: 1 − 0,995 = 0,005 und 1 − 0,98 = 0,02. Beide fallen nur gleichzeitig aus mit 0,005 × 0,02 = 0,0001.<br>A(parallel) = 1 − 0,0001 = <strong>0,9999 = 99,99 %</strong>.</p>
        <p><strong>b)</strong> In Reihe: A = 0,9999 × 0,999 × 0,9995 ≈ <strong>0,9984 = 99,84 %</strong>.<br>Ausfallzeit: (1 − 0,9984) × 8760 h ≈ 0,0016 × 8760 h ≈ <strong>14 h pro Jahr</strong> (genau 14,01 h).</p>
        <p><strong>c)</strong> Der einzelne <strong>Router</strong> (99,9 % → allein ca. 8,8 h Ausfall pro Jahr) ist der größte Single Point of Failure, danach die Firewall (ca. 4,4 h). Lösung: zweiter Router mit Gateway-Redundanz (VRRP/HSRP, virtuelle Gateway-Adresse), zusätzlich ein Firewall-Cluster.<br>
        Router-Paar parallel: 1 − 0,001 × 0,001 = 0,999999. Gesamt: 0,9999 × 0,999999 × 0,9995 ≈ <strong>99,94 %</strong> → ca. <strong>5,3 h</strong> Ausfall pro Jahr. Jetzt begrenzt die Firewall.</p>
        <p><strong>d)</strong> Nutzbare Rate: 200 Mbit/s × (1 − 0,10) = 180 Mbit/s = 180 × 10⁶ bit/s.<br>
        Datenmenge: 120 GB = 120 × 10⁹ Byte × 8 = 960 × 10⁹ bit.<br>
        t = 960 × 10⁹ bit ÷ 180 × 10⁶ bit/s ≈ 5333 s ≈ <strong>88,9 min ≈ 1,5 h</strong> → passt in das 3-Stunden-Fenster.<br>
        Bei 120 GiB: 120 × 2³⁰ × 8 bit ≈ 1,031 × 10¹² bit → t ≈ 5727 s ≈ <strong>95,4 min</strong> – ebenfalls ausreichend.</p>`
    },
    {
      id: "e-poe-uplink",
      topic: "switching-stp",
      title: "Access-Switch mit PoE auswählen und Uplink planen",
      level: 2,
      exam: ["AP2"],
      task: `<p>Die <strong>Förde-Klinik Eckernförde</strong> erneuert den Access-Switch im Neubau. Angeschlossen werden sollen 10 WLAN-Access-Points (IEEE 802.3at) und 6 IP-Kameras (IEEE 802.3af). Zwei Angebote liegen vor:</p>
        <table><thead><tr><th>Angebot</th><th>Ports</th><th>Uplinks</th><th>PoE-Budget</th></tr></thead><tbody>
          <tr><td>A</td><td>24 × 1 Gbit/s PoE+</td><td>2 × SFP (1 Gbit/s)</td><td>370 W</td></tr>
          <tr><td>B</td><td>24 × 1 Gbit/s PoE+</td><td>4 × SFP+ (10 Gbit/s)</td><td>480 W</td></tr>
        </tbody></table>
        <p>a) Berechne den maximalen PoE-Bedarf und entscheide, welches Angebot geeignet ist.<br>
        b) Der Switch soll über zwei gebündelte 10-Gbit/s-Glasfaserlinks an den Core-Switch angebunden werden. Nenne das Verfahren und drei Voraussetzungen.<br>
        c) Nach dem Einbau bleibt ein Uplink dunkel. Nenne drei mögliche Ursachen.<br>
        d) Die Access Points strahlen die SSIDs „Personal“ (VLAN 10) und „Gaeste“ (VLAN 30) aus. Wie muss der Switchport zum Access Point konfiguriert werden?</p>`,
      hints: ["802.3at: bis 30 W je Port, 802.3af: bis 15,4 W je Port"],
      solution: `<p><strong>a)</strong> 10 × 30 W + 6 × 15,4 W = 300 W + 92,4 W = <strong>392,4 W</strong>. Angebot A (370 W) reicht nicht – es fehlen 22,4 W. Angebot B (480 W) reicht mit 87,6 W Reserve und bietet zusätzlich 10-Gbit/s-Uplinks → <strong>Angebot B</strong>.</p>
        <p><strong>b)</strong> <strong>Link Aggregation</strong> mit LACP (IEEE 802.1AX, Cisco EtherChannel). Voraussetzungen: gleiche Geschwindigkeit und Duplex aller Links, gleiche VLAN-/Trunk-Konfiguration, beide Links enden auf derselben Gegenstelle (bzw. demselben Switch-Stack), LACP auf beiden Seiten aktiv.</p>
        <p><strong>c)</strong> Falsches SFP-Modul (Multimode statt Singlemode bzw. falsche Wellenlänge), abweichende Geschwindigkeit (1G-Modul an 10G-Gegenstelle), vertauschte Fasern (Rx/Tx), verschmutzte oder beschädigte Stecker, Port administrativ deaktiviert.</p>
        <p><strong>d)</strong> Als <strong>Trunk-Port</strong> mit erlaubten VLANs 10 und 30 (plus Management-VLAN), weil der Access Point Frames beider SSIDs getaggt an den Switch übergibt. Ein Access-Port könnte nur ein VLAN transportieren.</p>`
    },
    {
      id: "e-poe-kameras",
      topic: "switching-stp",
      title: "PoE-Kameras: Klasse, Strom und Budget prüfen",
      level: 1,
      exam: ["AP1", "AP2"],
      task: `<p>Die <strong>Hafenbetriebe Glückstadt</strong> wollen am Kai 6 IP-Kameras installieren. Im englischen Datenblatt steht: „PoE IEEE 802.3af, max. power consumption 11 W“. Vorhanden ist ein 8-Port-Switch mit einem PoE-Budget von 120 W.</p>
        <p>a) Reicht 802.3af für die Kamera? Begründe mit der Leistung am Endgerät.<br>
        b) Welcher Strom fließt bei maximaler Leistungsaufnahme, wenn mit 48 V gerechnet wird? Gib das Ergebnis in mA an.<br>
        c) Reicht das PoE-Budget für die 6 Kameras? Rechne mit dem Klassen-Maximum am Switch-Port.<br>
        d) Später sollen 8 Kameras angeschlossen werden. Beurteile das Budget und schlage eine Lösung vor.<br>
        e) Erkläre, warum der Switch-Port bis zu 15,4 W liefert, am Gerät aber nur 12,95 W garantiert sind.</p>`,
      hints: ["I = P ÷ U", "802.3af: 15,4 W am Switch-Port, 12,95 W am Endgerät"],
      solution: `<p><strong>a)</strong> Ja. 802.3af garantiert am Endgerät mindestens <strong>12,95 W</strong>; die Kamera braucht höchstens 11 W → 11 W ≤ 12,95 W ✔.</p>
        <p><strong>b)</strong> I = P ÷ U = 11 W ÷ 48 V ≈ 0,229 A ≈ <strong>229 mA</strong> (unter dem Maximum von 350 mA bei 802.3af).</p>
        <p><strong>c)</strong> 6 × 15,4 W = <strong>92,4 W</strong> ≤ 120 W → reicht, Reserve 120 W − 92,4 W = <strong>27,6 W</strong>.</p>
        <p><strong>d)</strong> 8 × 15,4 W = <strong>123,2 W</strong> &gt; 120 W → nach Klassen-Maximum reicht das Budget nicht; ein Switch, der je Port die volle Klassenleistung reserviert, würde die achte Kamera nicht versorgen. Manche Switches verteilen das Budget nach dem tatsächlichen Verbrauch (8 × 11 W = 88 W zuzüglich Leitungsverluste), darauf sollte man sich bei der Planung aber nicht verlassen. Lösung: Switch mit größerem PoE-Budget (z. B. 240 W), zweites Netzteil bzw. zweiter PoE-Switch oder PoE-Injektoren für einzelne Kameras.</p>
        <p><strong>e)</strong> Im Kupferkabel (bis 100 m) geht durch den Leitungswiderstand Leistung als Wärme verloren. Der Standard rechnet diese Verluste ein: Der Switch (PSE) liefert bis 15,4 W, damit beim Endgerät (PD) auch bei maximaler Kabellänge noch 12,95 W ankommen.</p>`
    },
    {
      id: "e-vpn-mail",
      topic: "dienste-sicherheit",
      title: "VPN-Konzept und E-Mail-Sicherheit per DNS",
      level: 2,
      exam: ["AP2"],
      task: `<p>Die <strong>Nordsee Wind GmbH</strong> verbindet ihre Standorte Husum und Heide. Zusätzlich sollen 15 Beschäftigte aus dem Homeoffice arbeiten. Außerdem werden Mails mit gefälschter Absenderadresse @nordsee-wind.example verschickt.</p>
        <p>a) Welche VPN-Arten setzt du für die Standorte und für das Homeoffice ein?<br>
        b) Erkläre die Aufgaben von IKE und ESP bei IPsec und den Tunnelmodus.<br>
        c) Vergleiche IPsec, TLS-VPN und WireGuard mit je einem Vor- oder Nachteil.<br>
        d) Erkläre, wie SPF, DKIM und DMARC gegen die gefälschten Mails helfen, und wo sie eingetragen werden.<br>
        e) Intern soll www.nordsee-wind.example auf die private Adresse 192.168.10.80 auflösen, von außen auf 203.0.113.80. Wie heißt das Verfahren?</p>`,
      hints: ["Standorte dauerhaft = Site-to-Site", "SPF, DKIM, DMARC stehen als TXT-Records in der Zone."],
      solution: `<p><strong>a)</strong> Standorte: <strong>Site-to-Site-VPN</strong> zwischen den Firewalls/Routern – dauerhaft, für die Nutzer unsichtbar. Homeoffice: <strong>Remote-Access-VPN</strong> (End-to-Site) mit VPN-Client auf dem Notebook, Anmeldung mit Zertifikat und MFA.</p>
        <p><strong>b)</strong> <strong>IKE</strong> (Internet Key Exchange, UDP 500 bzw. 4500 bei NAT) authentifiziert die Gegenstellen (Pre-Shared Key oder Zertifikat) und handelt Verfahren und Schlüssel aus. <strong>ESP</strong> verschlüsselt die Nutzdaten und sichert ihre Integrität. Im <strong>Tunnelmodus</strong> wird das komplette ursprüngliche IP-Paket verschlüsselt und in ein neues IP-Paket zwischen den VPN-Gateways verpackt – so bleiben auch die internen Adressen verborgen.</p>
        <p><strong>c)</strong> IPsec: standardisiert und herstellerübergreifend, aber komplex und empfindlich bei NAT. TLS-VPN: läuft über TCP/UDP 443 und kommt daher durch fast jede Firewall. WireGuard: sehr schlanker Code, schnell und einfach zu konfigurieren, braucht aber eine eigene Schlüsselverwaltung und UDP.</p>
        <p><strong>d)</strong> Alle drei stehen als <strong>TXT-Records im DNS</strong> der Domain. <strong>SPF</strong> legt fest, welche Server Mails der Domain senden dürfen (z. B. <code>v=spf1 mx -all</code>). <strong>DKIM</strong>: Der Mailserver signiert ausgehende Mails, Empfänger prüfen die Signatur mit dem öffentlichen Schlüssel aus dem DNS. <strong>DMARC</strong> (<code>_dmarc</code>-Eintrag) sagt Empfängern, was sie mit Mails tun sollen, die die Prüfungen nicht bestehen (none, quarantine, reject), und fordert Berichte an. Gefälschte Mails werden dadurch abgelehnt oder in Quarantäne verschoben.</p>
        <p><strong>e)</strong> <strong>Split-Horizon-DNS</strong>: Der interne DNS-Server beantwortet die Anfrage mit 192.168.10.80, der öffentliche mit 203.0.113.80.</p>`
    },
  ],
  quiz: [
    { id: "q-osi-1", topic: "schichtenmodelle", type: "single", exam: ["AP1", "AP2"],
      q: "Auf welcher OSI-Schicht arbeitet ein Router?",
      options: ["Schicht 3 – Vermittlungsschicht", "Schicht 2 – Sicherungsschicht", "Schicht 4 – Transportschicht", "Schicht 1 – Bitübertragungsschicht"],
      answer: 0,
      explain: "Ein Router wertet IP-Adressen aus und wählt den Weg (Routing) – das ist die Aufgabe der Vermittlungsschicht (3). Schicht 2 wäre ein Switch (MAC-Adressen), Schicht 4 betrifft Ports und TCP/UDP, Schicht 1 nur Signale und Kabel." },
    { id: "q-osi-2", topic: "schichtenmodelle", type: "single", exam: ["AP1", "AP2"],
      q: "Wie heißt die Dateneinheit (PDU) der Transportschicht bei TCP?",
      options: ["Segment", "Paket", "Frame", "Bit"],
      answer: 0,
      explain: "TCP erzeugt Segmente (bei UDP spricht man von Datagrammen). Paket ist die PDU der Schicht 3, Frame die der Schicht 2, Bit die der Schicht 1 – diese Verwechslung ist eine typische Prüfungsfalle." },
    { id: "q-osi-3", topic: "schichtenmodelle", type: "single",
      q: "Welche OSI-Schicht ist laut Modell für Datenformat, Zeichenkodierung und Kompression zuständig?",
      options: ["Darstellungsschicht (6)", "Sitzungsschicht (5)", "Anwendungsschicht (7)", "Transportschicht (4)"],
      answer: 0,
      explain: "Die Darstellungsschicht sorgt dafür, dass beide Seiten die Daten im gleichen Format verstehen (Kodierung, Kompression, Verschlüsselung). Die Sitzungsschicht steuert Sitzungen, die Anwendungsschicht bietet Dienste für Programme, die Transportschicht sorgt für Ende-zu-Ende-Transport." },
    { id: "q-osi-4", topic: "schichtenmodelle", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Geräte arbeiten klassisch auf OSI-Schicht 2?",
      options: ["Switch", "Bridge", "Access Point", "Hub", "Router"],
      answer: [0, 1, 2],
      explain: "Switch, Bridge und Access Point leiten Frames anhand von MAC-Adressen weiter (Schicht 2). Ein Hub verstärkt und verteilt nur Signale (Schicht 1), ein Router arbeitet mit IP-Adressen (Schicht 3)." },
    { id: "q-osi-5", topic: "schichtenmodelle", type: "single", exam: ["AP1", "AP2"],
      q: "Welche OSI-Schichten fasst die Anwendungsschicht des TCP/IP-Modells zusammen?",
      options: ["Schichten 5, 6 und 7", "nur Schicht 7", "Schichten 6 und 7", "Schichten 4 bis 7"],
      answer: 0,
      explain: "Das TCP/IP-Modell hat 4 Schichten: Anwendung (OSI 5–7), Transport (4), Internet (3), Netzzugang (1–2). Schicht 4 ist im TCP/IP-Modell eine eigene Transportschicht." },
    { id: "q-osi-6", topic: "schichtenmodelle", type: "tf", exam: ["AP1", "AP2"],
      q: "Leitet ein Router ein Paket weiter (ohne NAT), ändern sich dabei Quell- und Ziel-IP-Adresse.",
      answer: false,
      explain: "Falsch. Die IP-Adressen bleiben auf dem gesamten Weg gleich. Der Router erzeugt aber einen neuen Frame, deshalb ändern sich Quell- und Ziel-MAC-Adresse auf jeder Teilstrecke. Nur NAT verändert IP-Adressen." },
    { id: "q-osi-7", topic: "schichtenmodelle", type: "single", exam: ["AP1", "AP2"],
      q: "Was versteht man unter Kapselung (Encapsulation)?",
      options: ["Jede Schicht fügt beim Senden den Daten ihre Steuerinformationen als Header (bei Ethernet zusätzlich einen Trailer) hinzu.", "Daten werden vor dem Senden immer verschlüsselt.", "Ein Router fasst mehrere Pakete zu einem großen Frame zusammen.", "Ein Switch entfernt beim Weiterleiten den IP-Header."],
      answer: 0,
      explain: "Kapselung bedeutet: Daten → Segment (TCP-Header) → Paket (IP-Header) → Frame (Ethernet-Header + FCS) → Bits. Verschlüsselung ist etwas anderes. Router und Switches fassen keine Pakete zusammen, und ein Switch schaut sich den IP-Header gar nicht an." },
    { id: "q-osi-8", topic: "schichtenmodelle", type: "single",
      q: "Was beschreibt die horizontale Kommunikation im Schichtenmodell?",
      options: ["Gleiche Schichten zweier Systeme kommunizieren logisch über ein gemeinsames Protokoll.", "Benachbarte Schichten innerhalb eines Systems tauschen Daten über Schnittstellen aus.", "Daten werden über ein waagerecht verlegtes Kabel übertragen.", "Nur die Bitübertragungsschichten zweier Systeme tauschen Signale aus."],
      answer: 0,
      explain: "Horizontal = gleiche Schicht, verschiedene Systeme, gemeinsames Protokoll (z. B. TCP auf Client und Server). Der Austausch zwischen benachbarten Schichten eines Systems ist die vertikale Kommunikation. Physisch übertragen wird zwar nur auf Schicht 1, horizontal kommunizieren aber alle Schichten logisch." },
    { id: "q-osi-9", topic: "schichtenmodelle", type: "input", exam: ["AP1", "AP2"],
      q: "Aus wie vielen Schichten besteht das TCP/IP-Modell (DoD-Modell)?",
      answer: ["4", "vier", "4 Schichten", "vier Schichten"],
      explain: "4 Schichten: Anwendung, Transport, Internet, Netzzugang. Das OSI-Modell hat 7 Schichten." },
    { id: "q-mac-1", topic: "mac-arp", type: "single", exam: ["AP1", "AP2"],
      q: "Wie lang ist eine MAC-Adresse?",
      options: ["48 Bit", "32 Bit", "64 Bit", "128 Bit"],
      answer: 0,
      explain: "Eine MAC-Adresse hat 48 Bit = 6 Byte = 12 Hexziffern. 32 Bit hat eine IPv4-Adresse, 128 Bit eine IPv6-Adresse, 64 Bit ist die Interface-ID bei IPv6." },
    { id: "q-mac-2", topic: "mac-arp", type: "single", exam: ["AP1", "AP2"],
      q: "Was ist die MAC-Adresse <code>FF:FF:FF:FF:FF:FF</code>?",
      options: ["Broadcast-Adresse – erreicht alle Geräte im Netzabschnitt", "Multicast-Adresse für IPv6", "lokal verwaltete Unicast-Adresse", "Adresse des Standardgateways"],
      answer: 0,
      explain: "Sind alle 48 Bit 1, ist es die Broadcast-Adresse. ARP-Requests und DHCP-Discover nutzen sie. IPv6-Multicast-MACs beginnen mit 33:33, eine Unicast-Adresse hat im ersten Byte das I/G-Bit 0." },
    { id: "q-mac-3", topic: "mac-arp", type: "single", exam: ["AP1", "AP2"],
      q: "Wie ist die MAC-Adresse <code>02:1A:2B:3C:4D:5E</code> einzuordnen?",
      options: ["Unicast, lokal verwaltet", "Unicast, vom Hersteller vergeben (global)", "Multicast, vom Hersteller vergeben", "Broadcast"],
      answer: 0,
      explain: "Erstes Byte 02 = 0000 0010: Das letzte Bit (I/G) ist 0 → Unicast, das vorletzte Bit (U/L) ist 1 → lokal verwaltet. Herstelleradressen haben U/L = 0, Multicast-Adressen I/G = 1." },
    { id: "q-mac-4", topic: "mac-arp", type: "single", exam: ["AP1", "AP2"],
      q: "Wie wird ein ARP-Request verschickt?",
      options: ["als Broadcast an alle Geräte im eigenen Netzabschnitt", "als Unicast an das Standardgateway", "als Unicast an den DNS-Server", "als Multicast an alle Router im Internet"],
      answer: 0,
      explain: "Der Absender kennt die Ziel-MAC ja gerade nicht, deshalb fragt er alle (Ziel-MAC FF:FF:FF:FF:FF:FF): „Wer hat IP x?“. Nur das gesuchte Gerät antwortet – per Unicast. ARP bleibt immer im eigenen Netzabschnitt." },
    { id: "q-mac-5", topic: "mac-arp", type: "tf", exam: ["AP1", "AP2"],
      q: "Um ein Paket an einen Server in einem anderen Subnetz zu senden, ermittelt der PC per ARP die MAC-Adresse dieses Servers.",
      answer: false,
      explain: "Falsch. Liegt das Ziel in einem fremden Netz, ermittelt der PC per ARP die MAC-Adresse seines Standardgateways. ARP-Broadcasts werden von Routern nicht weitergeleitet." },
    { id: "q-mac-6", topic: "mac-arp", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Aussagen zur MAC-Adresse sind richtig?",
      options: ["Die ersten 24 Bit bilden die Herstellerkennung (OUI).", "Sie lässt sich per Software ändern.", "Sie wird der OSI-Schicht 2 zugeordnet.", "Router geben sie unverändert bis zum Ziel weiter.", "Sie wird vom DHCP-Server vergeben."],
      answer: [0, 1, 2],
      explain: "OUI = 24 Bit Herstellerkennung, Schicht 2 und per Software änderbar (MAC-Spoofing, zufällige WLAN-Adressen) sind richtig. Router setzen die MAC-Adressen je Teilstrecke neu. DHCP vergibt IP-Adressen, keine MAC-Adressen – es nutzt die MAC nur zur Identifikation (z. B. Reservierung)." },
    { id: "q-mac-7", topic: "mac-arp", type: "single", exam: ["AP1", "AP2"],
      q: "Mit welchem Windows-Befehl zeigst du die aktuell gespeicherten Zuordnungen von IP- zu MAC-Adressen an?",
      options: ["arp -a", "tracert", "nslookup", "route print"],
      answer: 0,
      explain: "arp -a zeigt den ARP-Cache (IP-Adresse ↔ physische Adresse). tracert zeigt den Weg über Router, nslookup fragt DNS ab, route print zeigt die Routingtabelle." },
    { id: "q-port-1", topic: "ports-tcp-udp", type: "single", exam: ["AP1", "AP2"],
      q: "Welchen Standardport verwendet HTTPS?",
      options: ["443", "80", "22", "8080"],
      answer: 0,
      explain: "HTTPS = HTTP über TLS auf Port 443. Port 80 ist unverschlüsseltes HTTP, 22 ist SSH, 8080 ein häufig genutzter alternativer HTTP-Port (z. B. für Proxys), aber kein Standard für HTTPS." },
    { id: "q-port-2", topic: "ports-tcp-udp", type: "single", exam: ["AP1", "AP2"],
      q: "Welcher Bereich umfasst laut IANA die dynamischen (privaten) Ports, die Clients als Quellport zugeteilt bekommen?",
      options: ["49152–65535", "0–1023", "1024–49151", "65536–131071"],
      answer: 0,
      explain: "0–1023 sind Well-known Ports (Standarddienste), 1024–49151 Registered Ports, 49152–65535 Dynamic/Private Ports. Werte über 65535 gibt es nicht, weil Ports 16 Bit lang sind." },
    { id: "q-port-3", topic: "ports-tcp-udp", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Dienste nutzen im Standardfall UDP als Transportprotokoll?",
      options: ["DHCP", "NTP", "SNMP", "SSH", "SMTP"],
      answer: [0, 1, 2],
      explain: "DHCP (67/68), NTP (123) und SNMP (161/162) arbeiten mit kurzen Nachrichten über UDP. SSH (22) und SMTP (25/587) brauchen eine zuverlässige Verbindung und nutzen TCP." },
    { id: "q-port-4", topic: "ports-tcp-udp", type: "single", exam: ["AP1", "AP2"],
      q: "Welcher Dienst verwendet standardmäßig TCP-Port 22?",
      options: ["SSH", "Telnet", "FTP-Steuerverbindung", "SMTP"],
      answer: 0,
      explain: "Port 22 = SSH (auch SFTP/SCP). Telnet nutzt 23, FTP-Steuerung 21, SMTP 25." },
    { id: "q-port-5", topic: "ports-tcp-udp", type: "input", exam: ["AP1", "AP2"],
      q: "Welchen Standardport (TCP) verwendet das Remote Desktop Protocol (RDP)?",
      answer: ["3389", "TCP 3389", "Port 3389", "3389/TCP", "TCP/3389"],
      explain: "RDP lauscht standardmäßig auf 3389 (Registered Port). Aus Sicherheitsgründen sollte RDP nie direkt ins Internet freigegeben werden, sondern z. B. über VPN erreichbar sein." },
    { id: "q-port-6", topic: "ports-tcp-udp", type: "single", exam: ["AP1", "AP2"],
      q: "Welche Nachricht sendet der Server im zweiten Schritt des TCP-3-Way-Handshakes?",
      options: ["SYN-ACK", "SYN", "ACK", "FIN"],
      answer: 0,
      explain: "Ablauf: Client SYN → Server SYN-ACK → Client ACK. FIN wird beim Verbindungsabbau verwendet." },
    { id: "q-port-7", topic: "ports-tcp-udp", type: "tf", exam: ["AP1", "AP2"],
      q: "UDP bestätigt empfangene Datagramme und fordert verlorene Datagramme erneut an.",
      answer: false,
      explain: "Falsch – das macht TCP. UDP ist verbindungslos, hat keine Bestätigungen, keine Sequenznummern und keine Neuübertragung. Braucht eine Anwendung Zuverlässigkeit über UDP, muss sie sich selbst darum kümmern." },
    { id: "q-port-8", topic: "ports-tcp-udp", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Merkmale treffen auf TCP zu?",
      options: ["verbindungsorientiert mit Verbindungsaufbau", "Sequenznummern und Bestätigungen (ACK)", "Flusskontrolle über ein Window", "fester Header von nur 8 Byte", "bevorzugt für Echtzeit-Sprachübertragung"],
      answer: [0, 1, 2],
      explain: "TCP baut Verbindungen auf, nummeriert und bestätigt Segmente und steuert den Datenfluss. Der 8-Byte-Header gehört zu UDP (TCP mind. 20 Byte). Für Echtzeit-Sprache wird UDP bevorzugt, weil Neuübertragungen zu spät kämen." },
    { id: "q-port-9", topic: "ports-tcp-udp", type: "single", exam: ["AP1", "AP2"],
      q: "Über welchen Port rufen Mail-Clients ihr Postfach standardmäßig per IMAP mit TLS-Verschlüsselung (IMAPS) ab?",
      options: ["993", "143", "995", "587"],
      answer: 0,
      explain: "IMAPS = 993. 143 ist IMAP ohne TLS bzw. mit STARTTLS, 995 ist POP3S, 587 ist SMTP-Submission zum Versenden." },
    { id: "q-port-10", topic: "ports-tcp-udp", type: "input", exam: ["AP2"],
      q: "Ein Client sendet ein SYN mit der Sequenznummer 700. Welche Acknowledgement-Nummer steht im SYN-ACK des Servers?",
      answer: ["701", "Ack=701", "Ack 701"],
      explain: "Der Server bestätigt mit Ack = empfangene Seq + 1 = 701. Damit signalisiert er: „Als Nächstes erwarte ich Byte 701.“" },
    { id: "q-ip-1", topic: "ipv4", type: "single", exam: ["AP1", "AP2"],
      q: "Welche IPv4-Adresse gehört zu einem privaten Adressbereich nach RFC 1918?",
      options: ["172.20.14.3", "172.32.1.1", "192.169.0.1", "11.0.0.1"],
      answer: 0,
      explain: "Privat sind 10.0.0.0/8, 172.16.0.0–172.31.255.255 und 192.168.0.0/16. 172.20.14.3 liegt im zweiten Bereich. 172.32.1.1 liegt knapp außerhalb (Falle!), 192.169.x.x und 11.x.x.x sind öffentlich." },
    { id: "q-ip-2", topic: "ipv4", type: "single", exam: ["AP1", "AP2"],
      q: "Zu welcher (historischen) Adressklasse gehört 150.10.1.1?",
      options: ["Klasse B", "Klasse A", "Klasse C", "Klasse D"],
      answer: 0,
      explain: "Das erste Oktett 150 liegt im Bereich 128–191 → Klasse B (Standardmaske /16). Klasse A: 0–127, Klasse C: 192–223, Klasse D (Multicast): 224–239." },
    { id: "q-ip-3", topic: "ipv4", type: "single", exam: ["AP1", "AP2"],
      q: "Ein Windows-PC zeigt die Adresse 169.254.12.7 mit der Maske 255.255.0.0. Was bedeutet das?",
      options: ["Der PC hat keine Antwort von einem DHCP-Server erhalten und sich selbst eine APIPA-Adresse gegeben.", "Der PC hat vom Provider eine öffentliche Adresse erhalten.", "Es handelt sich um die Loopback-Adresse des PCs.", "Der Administrator hat die Adresse statisch eingetragen."],
      answer: 0,
      explain: "169.254.0.0/16 ist der APIPA-/Link-Local-Bereich. Windows nutzt ihn automatisch, wenn DHCP aktiviert ist, aber kein Server antwortet. Loopback ist 127.0.0.1, öffentliche Adressen liegen nicht in diesem Bereich." },
    { id: "q-ip-4", topic: "ipv4", type: "tf", exam: ["AP1", "AP2"],
      q: "255.255.255.228 ist eine gültige Subnetzmaske.",
      answer: false,
      explain: "Falsch. 228 = 11100100 – nach der ersten Null folgt wieder eine Eins. Die Einsen einer Maske müssen lückenlos links stehen. Gültige Oktettwerte sind nur 0, 128, 192, 224, 240, 248, 252, 254 und 255." },
    { id: "q-ip-5", topic: "ipv4", type: "input", exam: ["AP1", "AP2"],
      q: "Wie lautet die Subnetzmaske /26 in Dezimalschreibweise?",
      answer: ["255.255.255.192"],
      explain: "/26 = 24 Einsen in den ersten drei Oktetten + 2 Einsen im 4. Oktett: 11000000 = 128 + 64 = 192 → 255.255.255.192." },
    { id: "q-ip-6", topic: "ipv4", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche der folgenden Werte sind gültige Subnetzmasken?",
      options: ["255.255.255.248", "255.255.254.0", "255.255.192.0", "255.255.255.100", "255.0.255.0"],
      answer: [0, 1, 2],
      explain: "248 (11111000), 254 (11111110) und 192 (11000000) sind lückenlose Einsen von links. 100 = 01100100 ist kein gültiger Maskenwert, und bei 255.0.255.0 folgen nach Nullen wieder Einsen." },
    { id: "q-ip-7", topic: "ipv4", type: "single", exam: ["AP1", "AP2"],
      q: "Wie viele Hosts lassen sich in einem Netz mit der Standardmaske der Klasse B (/16) adressieren?",
      options: ["65.534", "65.536", "16.777.214", "254"],
      answer: 0,
      explain: "16 Hostbits → 2¹⁶ − 2 = 65.536 − 2 = 65.534 (Netz- und Broadcast-Adresse abziehen). 65.536 vergisst das „− 2“, 16.777.214 gilt für Klasse A (/8), 254 für Klasse C (/24)." },
    { id: "q-sub-1", topic: "subnetting", type: "input", exam: ["AP1", "AP2"],
      q: "Wie viele nutzbare Hostadressen hat ein Subnetz mit dem Präfix /28?",
      answer: ["14", "14 Hosts"],
      explain: "32 − 28 = 4 Hostbits → 2⁴ − 2 = 16 − 2 = 14. Abgezogen werden Netz- und Broadcast-Adresse." },
    { id: "q-sub-2", topic: "subnetting", type: "single", exam: ["AP1", "AP2"],
      q: "Wie lautet die Netzadresse zu 192.168.5.130/26?",
      options: ["192.168.5.128", "192.168.5.64", "192.168.5.130", "192.168.5.192"],
      answer: 0,
      explain: "/26 → Blockgröße 256 − 192 = 64 → Blöcke 0, 64, 128, 192. 130 liegt im Block 128–191 → Netz 192.168.5.128. 192.168.5.192 wäre das nächste Netz, .64 das vorherige." },
    { id: "q-sub-3", topic: "subnetting", type: "single", exam: ["AP1", "AP2"],
      q: "Wie lautet die Broadcast-Adresse des Netzes, in dem 10.10.10.10/29 liegt?",
      options: ["10.10.10.15", "10.10.10.16", "10.10.10.7", "10.10.10.255"],
      answer: 0,
      explain: "/29 → Blockgröße 8 → Blöcke 0, 8, 16 … 10 liegt in 8–15 → Broadcast = nächstes Netz (16) − 1 = 10.10.10.15. .16 ist schon das nächste Netz, .7 der Broadcast des vorherigen, .255 würde bei /24 gelten." },
    { id: "q-sub-4", topic: "subnetting", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Adressen darfst du im Netz 192.168.1.64/27 an Geräte vergeben?",
      options: ["192.168.1.64", "192.168.1.65", "192.168.1.94", "192.168.1.95", "192.168.1.96"],
      answer: [1, 2],
      explain: "/27 → Blockgröße 32 → Netz 192.168.1.64 bis Broadcast 192.168.1.95. Nutzbar sind .65 bis .94. .64 ist die Netzadresse, .95 der Broadcast, .96 gehört schon zum nächsten Subnetz." },
    { id: "q-sub-5", topic: "subnetting", type: "single", exam: ["AP1", "AP2"],
      q: "Ein /16-Netz wird in /20-Subnetze aufgeteilt. Wie viele Subnetze entstehen?",
      options: ["16", "14", "4", "4096"],
      answer: 0,
      explain: "Subnetzbits = 20 − 16 = 4 → 2⁴ = 16 Subnetze. Bei Subnetzen wird nicht − 2 gerechnet (14 wäre falsch). 4 ist nur die Anzahl der Bits, 4096 wäre 2¹² (die Hostbits)." },
    { id: "q-sub-6", topic: "subnetting", type: "single", exam: ["AP1", "AP2"],
      q: "Jedes Subnetz muss mindestens 100 Hosts aufnehmen, es sollen aber möglichst viele Subnetze entstehen. Welches Präfix wählst du?",
      options: ["/25", "/24", "/26", "/23"],
      answer: 0,
      explain: "/25 → 7 Hostbits → 2⁷ − 2 = 126 ≥ 100. /26 bietet nur 62 Hosts (zu wenig). /24 und /23 würden reichen, verschwenden aber Adressen und ergeben weniger Subnetze." },
    { id: "q-sub-7", topic: "subnetting", type: "tf", exam: ["AP1", "AP2"],
      q: "Bei der Anzahl der Subnetze zieht man – wie bei der Anzahl der Hosts – 2 ab.",
      answer: false,
      explain: "Falsch. Anzahl Subnetze = 2ⁿ (heute sind alle Subnetze nutzbar). Nur bei den Hosts wird − 2 gerechnet, weil Netz- und Broadcast-Adresse wegfallen." },
    { id: "q-sub-8", topic: "subnetting", type: "input", exam: ["AP1", "AP2"],
      q: "Wie lautet die Broadcast-Adresse des Subnetzes, in dem 172.16.203.9/21 liegt?",
      answer: ["172.16.207.255"],
      explain: "/21 → Maske 255.255.248.0, interessantes Oktett ist das 3., Blockgröße 256 − 248 = 8. 203 liegt im Block 200–207 → Broadcast = 172.16.207.255 (4. Oktett wird 255). Netzadresse wäre 172.16.200.0." },
    { id: "q-sub-9", topic: "subnetting", type: "single", exam: ["AP1", "AP2"],
      q: "Wie groß ist die Blockgröße (Schrittweite der Netzadressen) bei der Maske 255.255.255.240?",
      options: ["16", "14", "240", "32"],
      answer: 0,
      explain: "Blockgröße = 256 − 240 = 16. Die Netze beginnen bei 0, 16, 32, 48 … 14 ist die Zahl der nutzbaren Hosts (16 − 2), 32 wäre die Blockgröße bei /27." },
    { id: "q-sub-10", topic: "subnetting", type: "single", exam: ["AP1", "AP2"],
      q: "Das Netz 192.168.8.0/24 soll in mindestens 6 gleich große Subnetze mit möglichst vielen Hosts geteilt werden. Welche Maske passt?",
      options: ["255.255.255.224", "255.255.255.192", "255.255.255.240", "255.255.255.248"],
      answer: 0,
      explain: "2³ = 8 ≥ 6 → 3 Subnetzbits → /27 = 255.255.255.224 mit 30 Hosts. .192 (/26) ergibt nur 4 Subnetze, .240 und .248 ergeben zwar genug Subnetze, aber unnötig wenige Hosts (14 bzw. 6)." },
    { id: "q-sub-11", topic: "subnetting", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Aussagen zu einem /30-Netz sind richtig?",
      options: ["Es hat 2 nutzbare Hostadressen.", "Es wird typischerweise für Punkt-zu-Punkt-Verbindungen zwischen Routern genutzt.", "Die Maske lautet 255.255.255.252.", "Die Blockgröße beträgt 8.", "Es eignet sich für ein Büro-LAN mit 5 PCs und Router."],
      answer: [0, 1, 2],
      explain: "/30 → 2 Hostbits → 2² − 2 = 2 Hosts, Maske 255.255.255.252, Blockgröße 4 – ideal für Router-zu-Router-Links. Für 5 PCs + Router (6 Adressen) braucht man mindestens /29." },
    { id: "q-vlsm-1", topic: "vlsm", type: "single", exam: ["AP2"],
      q: "Womit beginnst du bei der Vergabe von Adressbereichen nach VLSM?",
      options: ["mit dem Netz, das die meisten Hosts benötigt", "mit dem Netz, das die wenigsten Hosts benötigt", "mit den Router-zu-Router-Verbindungen", "in alphabetischer Reihenfolge der Abteilungen"],
      answer: 0,
      explain: "Größtes Netz zuerst: Große Blöcke müssen auf Vielfachen ihrer Blockgröße beginnen. Werden kleine Netze zuerst vergeben, entstehen Lücken, und große Netze finden keinen gültigen Startpunkt mehr." },
    { id: "q-vlsm-2", topic: "vlsm", type: "single", exam: ["AP2"],
      q: "Eine Abteilung hat 28 PCs und einen Netzwerkdrucker; zusätzlich braucht das Router-Interface eine Adresse. Welches ist das kleinste passende Präfix?",
      options: ["/27", "/28", "/26", "/29"],
      answer: 0,
      explain: "Bedarf: 28 + 1 + 1 = 30 Adressen. /27 bietet 2⁵ − 2 = 30 → passt genau. /28 bietet nur 14. /26 (62) würde passen, verschwendet aber Adressen – gefragt war das kleinste passende Netz." },
    { id: "q-vlsm-3", topic: "vlsm", type: "tf", exam: ["AP2"],
      q: "192.168.20.72/29 ist eine gültige Netzadresse.",
      answer: true,
      explain: "Richtig. /29 hat die Blockgröße 8, und 72 = 9 × 8 ist ein Vielfaches davon. Das Netz reicht von .72 (Netz) bis .79 (Broadcast), nutzbar sind .73–.78." },
    { id: "q-vlsm-4", topic: "vlsm", type: "input", exam: ["AP2"],
      q: "Ein Router soll die Netze 10.1.4.0/24, 10.1.5.0/24, 10.1.6.0/24 und 10.1.7.0/24 mit einer einzigen Route zusammenfassen. Wie lautet sie (Netz/Präfix)?",
      answer: ["10.1.4.0/22", "10.1.4.0 255.255.252.0", "10.1.4.0/255.255.252.0"],
      explain: "4 = 000001|00, 7 = 000001|11 im 3. Oktett – die ersten 6 Bits sind gleich. 16 + 6 = 22 → 10.1.4.0/22 (Bereich 10.1.4.0 bis 10.1.7.255)." },
    { id: "q-rt-1", topic: "routing", type: "single", exam: ["AP2"],
      q: "Routingtabelle: 172.16.0.0/16 → Router A, 172.16.8.0/21 → Router B, 0.0.0.0/0 → Router C. Wohin wird ein Paket an 172.16.12.5 weitergeleitet?",
      options: ["Router B", "Router A", "Router C", "Es wird verworfen."],
      answer: 0,
      explain: "172.16.8.0/21 umfasst im 3. Oktett 8–15, also auch 12. Das Ziel passt auf alle drei Einträge; nach dem Longest Prefix Match gewinnt der spezifischste Eintrag /21 → Router B." },
    { id: "q-rt-2", topic: "routing", type: "single", exam: ["AP2"],
      q: "Ein Cisco-Router kennt das Netz 10.5.0.0/16 sowohl über OSPF als auch über eine statische Route. Welche Route trägt er in die Routingtabelle ein?",
      options: ["die statische Route, weil ihre administrative Distanz (1) kleiner ist als die von OSPF (110)", "die OSPF-Route, weil dynamische Routen immer Vorrang haben", "OSPF- und statische Route gleichzeitig mit Lastverteilung", "die Route, die zuerst gelernt wurde"],
      answer: 0,
      explain: "Zwischen verschiedenen Quellen entscheidet die administrative Distanz: je kleiner, desto vertrauenswürdiger (direkt verbunden 0, statisch 1, OSPF 110, RIP 120). Lastverteilung gibt es nur bei gleichwertigen Routen derselben Quelle." },
    { id: "q-rt-3", topic: "routing", type: "multi", exam: ["AP2"],
      q: "Welche Aussagen treffen auf OSPF zu?",
      options: ["Es ist ein Link-State-Protokoll.", "Die Metrik (Kosten) richtet sich nach der Bandbreite.", "Die Routen werden mit dem Dijkstra-Algorithmus (SPF) berechnet.", "Es sendet alle 30 Sekunden die komplette Routingtabelle.", "Ein Ziel darf höchstens 15 Hops entfernt sein."],
      answer: [0, 1, 2],
      explain: "OSPF kennt die Topologie (Link-State), berechnet mit SPF/Dijkstra und nutzt Kosten = Referenzbandbreite ÷ Bandbreite. Periodische Komplett-Updates alle 30 s und das Limit von 15 Hops gehören zu RIP." },
    { id: "q-rt-4", topic: "routing", type: "tf", exam: ["AP2"],
      q: "Eine Default-Route (0.0.0.0/0) wird nur verwendet, wenn kein spezifischerer Eintrag in der Routingtabelle passt.",
      answer: true,
      explain: "Richtig. 0.0.0.0/0 passt zwar auf jede Adresse, hat aber das kürzestmögliche Präfix und verliert deshalb beim Longest Prefix Match gegen jeden anderen passenden Eintrag." },
    { id: "q-rt-5", topic: "routing", type: "single", exam: ["AP2"],
      q: "Mit welchem Befehl richtest du auf einem Cisco-Router eine Default-Route zum Provider-Router 203.0.113.1 ein?",
      options: ["ip route 0.0.0.0 0.0.0.0 203.0.113.1", "ip default-gateway 203.0.113.1", "route add 0.0.0.0 mask 0.0.0.0 203.0.113.1", "ip route 203.0.113.1 255.255.255.255 0.0.0.0"],
      answer: 0,
      explain: "Syntax: ip route Zielnetz Maske Next-Hop. Für „alle Ziele“ steht 0.0.0.0 0.0.0.0. ip default-gateway nutzt man auf Layer-2-Switches ohne Routing, route add ist der Windows-Befehl, die letzte Option vertauscht Ziel und Next Hop." },
    { id: "q-sw-1", topic: "switching-stp", type: "single", exam: ["AP1", "AP2"],
      q: "Anhand welcher Information füllt ein Switch seine MAC-Adresstabelle?",
      options: ["Quell-MAC-Adresse und Eingangsport eingehender Frames", "Ziel-MAC-Adresse eingehender Frames", "Quell-IP-Adresse der Pakete", "Antworten des DHCP-Servers"],
      answer: 0,
      explain: "Learning: Der Switch merkt sich, von welchem Port eine Quell-MAC kam. Die Ziel-MAC nutzt er nur für die Weiterleitungsentscheidung. IP-Adressen wertet ein Layer-2-Switch nicht aus." },
    { id: "q-sw-2", topic: "switching-stp", type: "single", exam: ["AP2"],
      q: "Was ist die Hauptaufgabe des Spanning Tree Protocol (STP)?",
      options: ["Schleifen in redundanten Layer-2-Netzen verhindern, indem redundante Ports logisch blockiert werden", "Datenverkehr zwischen Switches verschlüsseln", "mehrere VLANs über eine Leitung übertragen", "mehrere Leitungen zu einem logischen Link bündeln"],
      answer: 0,
      explain: "STP baut aus einem vermaschten Switch-Netz einen schleifenfreien Baum und aktiviert blockierte Ports erst bei Ausfällen. VLANs über eine Leitung = Trunk (802.1Q), Leitungsbündelung = Link Aggregation (LACP)." },
    { id: "q-sw-3", topic: "switching-stp", type: "tf", exam: ["AP1", "AP2"],
      q: "Ein Layer-2-Switch (ohne VLANs) teilt ein Netz in mehrere Broadcast-Domänen.",
      answer: false,
      explain: "Falsch. Ein Switch trennt Kollisionsdomänen (jeder Port eine eigene), leitet Broadcasts aber an alle Ports weiter. Broadcast-Domänen trennen erst Router bzw. VLANs." },
    { id: "q-sw-4", topic: "switching-stp", type: "multi", exam: ["AP2"],
      q: "In welchen Fällen leitet ein Switch einen Frame an alle Ports außer dem Eingangsport weiter (Flooding)?",
      options: ["Die Ziel-MAC steht noch nicht in der MAC-Adresstabelle.", "Die Ziel-MAC ist FF:FF:FF:FF:FF:FF.", "Die Ziel-MAC ist in der Tabelle einem bestimmten anderen Port zugeordnet.", "Die Quell-MAC ist für den Switch neu, die Ziel-MAC aber bekannt.", "Der Frame hat eine korrekte Prüfsumme (FCS)."],
      answer: [0, 1],
      explain: "Geflutet werden Frames an unbekannte Ziele und Broadcasts. Ist die Ziel-MAC bekannt, geht der Frame gezielt an diesen Port – auch wenn die Quell-MAC neu ist (sie wird nur gelernt). Eine korrekte FCS ist Voraussetzung für die Weiterleitung, aber kein Grund zum Fluten." },
    { id: "q-vlan-1", topic: "vlan", type: "single", exam: ["AP2"],
      q: "Wie lang ist der VLAN-Tag nach IEEE 802.1Q, der auf Trunks in den Ethernet-Frame eingefügt wird?",
      options: ["4 Byte", "2 Byte", "12 Bit", "8 Byte"],
      answer: 0,
      explain: "Der Tag ist 4 Byte (32 Bit) lang: TPID 16 Bit, PCP 3 Bit, DEI 1 Bit, VID 12 Bit. 12 Bit ist nur das Feld für die VLAN-ID." },
    { id: "q-vlan-2", topic: "vlan", type: "multi", exam: ["AP2"],
      q: "Welche Aussagen treffen auf einen Trunk-Port zu?",
      options: ["Er überträgt Frames mehrerer VLANs über eine Leitung.", "Frames werden – außer im Native VLAN – mit einem 802.1Q-Tag versehen.", "Er verbindet typischerweise Switch mit Switch oder Switch mit Router.", "An ihm hängt normalerweise ein einzelner Büro-PC.", "Er gehört genau einem VLAN an."],
      answer: [0, 1, 2],
      explain: "Trunks transportieren viele VLANs tagged zwischen Netzwerkgeräten. Ein einzelner PC hängt an einem Access-Port, und nur der gehört genau einem VLAN an." },
    { id: "q-vlan-3", topic: "vlan", type: "tf", exam: ["AP2"],
      q: "Zwei PCs am selben Switch, aber in unterschiedlichen VLANs, können ohne Router oder Layer-3-Switch direkt miteinander kommunizieren.",
      answer: false,
      explain: "Falsch. Jedes VLAN ist eine eigene Broadcast-Domäne mit eigenem IP-Subnetz. Für Verkehr zwischen VLANs braucht es Inter-VLAN-Routing (Router-on-a-Stick oder Layer-3-Switch)." },
    { id: "q-vlan-4", topic: "vlan", type: "input", exam: ["AP2"],
      q: "Welches ist die höchste nutzbare VLAN-ID nach IEEE 802.1Q?",
      answer: ["4094"],
      explain: "Die VID hat 12 Bit → 2¹² = 4096 Werte (0–4095). 0 und 4095 sind reserviert, nutzbar sind 1 bis 4094." },
    { id: "q-vlan-5", topic: "vlan", type: "single", exam: ["AP2"],
      q: "Welcher Befehl ordnet beim Router-on-a-Stick das Subinterface <code>g0/0.20</code> dem VLAN 20 zu?",
      options: ["encapsulation dot1Q 20", "switchport access vlan 20", "switchport trunk native vlan 20", "vlan 20"],
      answer: 0,
      explain: "Auf dem Router-Subinterface legt encapsulation dot1Q 20 fest, welche getaggten Frames es verarbeitet. switchport-Befehle gibt es nur auf Switch-Ports, vlan 20 legt auf einem Switch ein VLAN an." },
    { id: "q-nat-1", topic: "nat-pat", type: "single", exam: ["AP2"],
      q: "Wie unterscheidet ein Router mit PAT (NAT-Overload) die Verbindungen vieler interner Hosts, die sich eine öffentliche IP-Adresse teilen?",
      options: ["anhand der Portnummern in der Übersetzungstabelle", "anhand der MAC-Adressen der internen Hosts", "indem er jedem Host eine eigene öffentliche IP aus einem Pool zuteilt", "anhand der TTL der Pakete"],
      answer: 0,
      explain: "PAT ordnet jeder Verbindung einen (möglichst gleichen, sonst freien) Quellport auf der öffentlichen Adresse zu und merkt sich die Zuordnung. MAC-Adressen enden am Router; ein Pool mit mehreren öffentlichen Adressen wäre dynamisches NAT." },
    { id: "q-nat-2", topic: "nat-pat", type: "multi", exam: ["AP2"],
      q: "Welche Nachteile hat NAT?",
      options: ["Das Ende-zu-Ende-Prinzip geht verloren.", "Eingehende Verbindungen zu internen Servern erfordern Port-Forwarding.", "Protokolle wie IPsec oder SIP benötigen Zusatzlösungen (z. B. NAT-Traversal).", "Es erhöht den Bedarf an öffentlichen IPv4-Adressen.", "Es macht die internen Adressen im Internet sichtbar."],
      answer: [0, 1, 2],
      explain: "NAT verändert Adressen unterwegs – das stört Ende-zu-Ende-Verbindungen, eingehende Verbindungen und manche Protokolle. Es spart aber gerade öffentliche Adressen und verbirgt die interne Struktur." },
    { id: "q-nat-3", topic: "nat-pat", type: "tf", exam: ["AP2"],
      q: "NAT ersetzt eine Firewall, weil interne Adressen von außen nicht direkt erreichbar sind.",
      answer: false,
      explain: "Falsch. NAT ist eine Adressübersetzung und keine Sicherheitsfunktion. Es filtert keine Inhalte und keine ausgehenden Verbindungen; Port-Forwardings öffnen Zugänge ungeprüft. Eine Firewall mit Regeln bleibt nötig." },
    { id: "q-dhcp-1", topic: "dhcp-dns", type: "single", exam: ["AP1", "AP2"],
      q: "In welcher Reihenfolge laufen die Nachrichten bei der DHCP-Adressvergabe ab?",
      options: ["Discover → Offer → Request → Acknowledge", "Request → Offer → Discover → Acknowledge", "Discover → Request → Offer → Acknowledge", "Offer → Discover → Acknowledge → Request"],
      answer: 0,
      explain: "Merkwort DORA: Der Client sucht (Discover), Server bieten an (Offer), der Client wählt ein Angebot (Request), der Server bestätigt (Acknowledge)." },
    { id: "q-dhcp-2", topic: "dhcp-dns", type: "single", exam: ["AP2"],
      q: "Welche Aufgabe hat ein DHCP-Relay-Agent (Cisco: <code>ip helper-address</code>)?",
      options: ["Er leitet DHCP-Broadcasts aus einem Subnetz als Unicast an einen DHCP-Server in einem anderen Subnetz weiter.", "Er vergibt selbst Adressen, wenn der DHCP-Server ausfällt.", "Er übersetzt private in öffentliche Adressen.", "Er löst Rechnernamen in IP-Adressen auf."],
      answer: 0,
      explain: "Router leiten keine Broadcasts weiter. Das Relay nimmt Discover/Request entgegen, schickt sie gezielt an den zentralen Server und trägt die eigene Interface-Adresse ein, damit der Server den richtigen Bereich wählt. Adressübersetzung wäre NAT, Namensauflösung DNS." },
    { id: "q-dhcp-3", topic: "dhcp-dns", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Parameter verteilt ein DHCP-Server typischerweise an Clients?",
      options: ["IP-Adresse und Subnetzmaske", "Standardgateway", "DNS-Server", "MAC-Adresse der Netzwerkkarte", "Portnummer des Webservers"],
      answer: [0, 1, 2],
      explain: "DHCP liefert IP-Adresse, Maske, Gateway (Option 3), DNS-Server (Option 6), Domänenname und Lease-Dauer. Die MAC-Adresse bringt die Netzwerkkarte selbst mit; Portnummern sind Sache der Dienste." },
    { id: "q-dns-1", topic: "dhcp-dns", type: "single", exam: ["AP2"],
      q: "Welcher DNS-Record gibt an, welcher Server die E-Mails einer Domain annimmt?",
      options: ["MX", "A", "PTR", "CNAME"],
      answer: 0,
      explain: "MX (Mail Exchanger) nennt den Mailserver mit Priorität. A ordnet einem Namen eine IPv4-Adresse zu, PTR dient der Rückwärtsauflösung (IP → Name), CNAME ist ein Alias." },
    { id: "q-dns-2", topic: "dhcp-dns", type: "multi", exam: ["AP2"],
      q: "Welche DNS-Records ordnen einem Namen direkt eine IP-Adresse zu?",
      options: ["A", "AAAA", "CNAME", "PTR", "MX"],
      answer: [0, 1],
      explain: "A liefert eine IPv4-, AAAA eine IPv6-Adresse. CNAME verweist auf einen anderen Namen, PTR arbeitet umgekehrt (IP → Name), MX nennt den Namen des Mailservers." },
    { id: "q-v6-1", topic: "ipv6", type: "single", exam: ["AP1", "AP2"],
      q: "Wie lautet die kürzestmögliche korrekte Schreibweise von <code>2001:0db8:0000:0000:0000:0000:0b00:0020</code>?",
      options: ["2001:db8::b00:20", "2001:db8::b:2", "2001:db8:0::b00:20", "2001:db8::b00::20"],
      answer: 0,
      explain: "Führende Nullen je Block streichen (0db8 → db8, 0b00 → b00, 0020 → 20) und die Nullblock-Folge einmal durch :: ersetzen. „b:2“ streicht verbotenerweise nachgestellte Nullen, „0::“ ist gültig, aber nicht kürzestmöglich, und :: darf nur einmal vorkommen." },
    { id: "q-v6-2", topic: "ipv6", type: "single", exam: ["AP1", "AP2"],
      q: "Welches Präfix kennzeichnet IPv6-Link-Local-Adressen?",
      options: ["fe80::/10", "fc00::/7", "ff00::/8", "2000::/3"],
      answer: 0,
      explain: "Link-Local-Adressen (fe80::/10) hat jedes IPv6-Interface automatisch; sie werden nicht geroutet. fc00::/7 sind Unique-Local-Adressen, ff00::/8 Multicast, 2000::/3 Global Unicast." },
    { id: "q-v6-3", topic: "ipv6", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Aussagen beschreiben Unterschiede von IPv6 gegenüber IPv4 richtig?",
      options: ["Adressen sind 128 statt 32 Bit lang.", "Es gibt keinen Broadcast, stattdessen Multicast.", "Die Adressauflösung erfolgt über NDP (ICMPv6) statt ARP.", "Der Basisheader ist fest 20 Byte lang.", "NAT ist zwingend erforderlich."],
      answer: [0, 1, 2],
      explain: "128 Bit, kein Broadcast und NDP statt ARP sind richtig. Der IPv6-Basisheader ist fest 40 Byte lang (IPv4: 20–60 Byte). NAT ist bei IPv6 wegen des riesigen Adressraums normalerweise nicht nötig." },
    { id: "q-v6-4", topic: "ipv6", type: "tf", exam: ["AP1", "AP2"],
      q: "Enthält eine IPv6-Adresse mehrere getrennte Nullfolgen, darf jede davon durch :: abgekürzt werden.",
      answer: false,
      explain: "Falsch. :: darf nur einmal pro Adresse vorkommen, sonst wäre nicht eindeutig, wie viele Nullblöcke an welcher Stelle fehlen. Weitere Nullblöcke werden als einzelne 0 geschrieben." },
    { id: "q-v6-5", topic: "ipv6", type: "single", exam: ["AP1", "AP2"],
      q: "Wie erfährt ein Host bei SLAAC das Präfix seines Netzes?",
      options: ["über ein Router Advertisement (ICMPv6) des Routers", "über einen DHCP-Discover", "über eine ARP-Antwort des Gateways", "über einen AAAA-Record im DNS"],
      answer: 0,
      explain: "Router senden Router Advertisements mit dem /64-Präfix (auf Anfrage per Router Solicitation oder regelmäßig). Die Interface-ID bildet der Host selbst (EUI-64 oder zufällig). DHCP-Discover und ARP gibt es bei IPv6 so nicht; DNS liefert keine Präfixe." },
    { id: "q-svc-1", topic: "dienste-sicherheit", type: "single", exam: ["AP1", "AP2"],
      q: "Eine Mitarbeiterin liest ihre E-Mails am PC und auf dem Smartphone. Beide Geräte sollen immer denselben Stand (gelesen, Ordner) zeigen. Welches Protokoll ist für den Abruf geeignet?",
      options: ["IMAP", "POP3", "SMTP", "SNMP"],
      answer: 0,
      explain: "IMAP lässt die Mails auf dem Server und synchronisiert Ordner und Status. POP3 lädt Mails meist herunter und löscht sie auf dem Server. SMTP dient dem Versand, SNMP der Netzwerküberwachung." },
    { id: "q-svc-2", topic: "dienste-sicherheit", type: "single", exam: ["AP1", "AP2"],
      q: "Welcher Server prüft bei WPA2/WPA3-Enterprise (IEEE 802.1X) die Anmeldedaten der Nutzer?",
      options: ["RADIUS-Server", "DHCP-Server", "DNS-Server", "NTP-Server"],
      answer: 0,
      explain: "Bei 802.1X leitet der Access Point (Authenticator) die Anmeldung an den Authentication Server weiter – in der Regel einen RADIUS-Server, der z. B. gegen Active Directory oder Zertifikate prüft. DHCP vergibt erst danach Adressen." },
    { id: "q-svc-3", topic: "dienste-sicherheit", type: "multi", exam: ["AP2"],
      q: "Welche Aussagen zu einer DMZ sind richtig?",
      options: ["In ihr stehen Server, die aus dem Internet erreichbar sein müssen, z. B. ein Webserver.", "Aus der DMZ sollen keine Verbindungen ins interne LAN aufgebaut werden dürfen.", "Sie ist ein eigenes Netzsegment, das per Firewall von Internet und LAN getrennt ist.", "Interne Dateiserver mit Personaldaten gehören in die DMZ.", "Server in der DMZ benötigen keine Sicherheitsupdates."],
      answer: [0, 1, 2],
      explain: "Die DMZ ist eine Pufferzone für öffentlich erreichbare Dienste. Wird ein DMZ-Server kompromittiert, schützt die Firewall das LAN. Sensible interne Server gehören ins LAN, und gerade exponierte Server müssen besonders gut gepatcht werden." },
    { id: "q-svc-4", topic: "dienste-sicherheit", type: "tf", exam: ["AP1", "AP2"],
      q: "Bei WPA3-Enterprise meldet sich jede Person bzw. jedes Gerät mit eigenen Zugangsdaten oder einem eigenen Zertifikat am WLAN an.",
      answer: true,
      explain: "Richtig. Das ist der Kern von Enterprise (802.1X): individuelle Anmeldung über RADIUS statt eines gemeinsamen Schlüssels wie bei WPA3-Personal. Einzelne Zugänge lassen sich so gezielt sperren." },
    { id: "q-fs-1", topic: "cisco-fehlersuche", type: "single", exam: ["AP1", "AP2"],
      q: "Wie ermittelt <code>tracert</code> die Router auf dem Weg zum Ziel?",
      options: ["Es sendet Pakete mit steigender TTL; jeder Router, bei dem die TTL 0 erreicht, antwortet mit ICMP „Time Exceeded“.", "Es liest die Routingtabellen der Router per SNMP aus.", "Es sendet ARP-Anfragen an jeden Router im Internet.", "Es fragt beim DNS-Server die Liste der Router ab."],
      answer: 0,
      explain: "TTL 1 → erster Router verwirft und meldet sich, TTL 2 → zweiter Router usw., bis das Ziel antwortet. ARP funktioniert nur im eigenen Netz, und weder SNMP noch DNS liefern den Pfad." },
    { id: "q-fs-2", topic: "cisco-fehlersuche", type: "single", exam: ["AP2"],
      q: "<code>show ip interface brief</code> zeigt für G0/1 den Status „administratively down“. Wie behebst du das?",
      options: ["im Interface-Modus von G0/1 den Befehl no shutdown eingeben", "das Netzwerkkabel tauschen", "dem Interface eine andere IP-Adresse geben", "den Router mit reload neu starten"],
      answer: 0,
      explain: "„administratively down“ bedeutet: Das Interface ist per Konfiguration abgeschaltet (Cisco-Router-Interfaces sind standardmäßig shutdown). Ein Kabelproblem zeigt sich als „down/down“ ohne „administratively“. Danach die Konfiguration speichern." },
    { id: "q-fs-3", topic: "cisco-fehlersuche", type: "single", exam: ["AP1", "AP2"],
      q: "<code>ping 9.9.9.9</code> funktioniert, <code>ping www.example.com</code> meldet „Host nicht gefunden“. Wo liegt das Problem am wahrscheinlichsten?",
      options: ["bei der Namensauflösung (DNS)", "beim Standardgateway", "am Netzwerkkabel", "bei der DHCP-Vergabe der IP-Adresse"],
      answer: 0,
      explain: "Da eine öffentliche IP erreichbar ist, funktionieren Kabel, IP-Konfiguration, Gateway und Routing. Scheitert nur der Name, klemmt die DNS-Auflösung – prüfen mit ipconfig /all (DNS-Server) und nslookup." },
    { id: "q-fs-4", topic: "cisco-fehlersuche", type: "multi", exam: ["AP2"],
      q: "Welche Aussagen zur Konfiguration von Cisco-Geräten sind richtig?",
      options: ["Die running-config liegt im RAM.", "Die startup-config liegt im NVRAM und wird beim Start geladen.", "copy running-config startup-config speichert die aktuelle Konfiguration dauerhaft.", "Ohne Speichern bleibt die running-config nach einem Neustart erhalten.", "show ip route zeigt die startup-config an."],
      answer: [0, 1, 2],
      explain: "Änderungen wirken sofort in der running-config (RAM), gehen aber beim Neustart verloren, wenn sie nicht mit copy running-config startup-config ins NVRAM geschrieben werden. show ip route zeigt die Routingtabelle, die Konfiguration zeigt show startup-config." },
    { id: "q-fs-5", topic: "cisco-fehlersuche", type: "tf", exam: ["AP1", "AP2"],
      q: "Bleibt ein ping unbeantwortet, ist das Zielgerät auf jeden Fall ausgeschaltet.",
      answer: false,
      explain: "Falsch. Auch eine Firewall (z. B. die Windows-Firewall blockiert eingehende Echo Requests oft), eine fehlende Route (Hin- oder Rückweg), ein falsches Gateway oder ein falsches VLAN können die Ursache sein." },
    { id: "q-fhrp-1", topic: "routing", type: "single", exam: ["AP2"],
      q: "Was stellen zwei Router bei Gateway-Redundanz mit VRRP oder HSRP gemeinsam bereit?",
      options: ["eine virtuelle IP- und MAC-Adresse, die die Clients als Standardgateway nutzen", "eine gemeinsame öffentliche IP-Adresse per NAT", "einen gemeinsamen Trunk-Port für alle VLANs", "eine gemeinsame DHCP-Reservierung für jeden Client"],
      answer: 0,
      explain: "Clients tragen die virtuelle Gateway-Adresse ein. Der aktive Router (Active/Master) beantwortet sie, der Standby/Backup übernimmt bei Ausfall automatisch. Mit NAT, Trunks oder DHCP hat FHRP nichts zu tun." },
    { id: "q-poe-1", topic: "switching-stp", type: "single", exam: ["AP1", "AP2"],
      q: "Reicht ein PoE-Budget von 370 W für 12 Access Points nach IEEE 802.3at (bis 30 W je Port)?",
      options: ["Ja: 12 × 30 W = 360 W ≤ 370 W", "Nein: 12 × 30 W = 390 W", "Nein: 802.3at benötigt 60 W je Port", "Ja, weil PoE das Budget des Switches nicht belastet"],
      answer: 0,
      explain: "12 × 30 W = 360 W, das passt knapp in 370 W (10 W Reserve). 60 W je Port wären 802.3bt Typ 3. Die PoE-Leistung aller Ports zusammen darf das Budget des Switch-Netzteils nicht überschreiten." },
    { id: "q-avail-1", topic: "nat-pat", type: "input", exam: ["AP2"],
      q: "Zwei unabhängige Internetleitungen mit je 99 % Verfügbarkeit werden parallel betrieben. Wie hoch ist die Gesamtverfügbarkeit in Prozent?",
      answer: ["99,99", "99,99 %", "99,99%", "99,99 Prozent"],
      explain: "Parallel fällt die Anbindung nur aus, wenn beide Leitungen gleichzeitig ausfallen: 0,01 × 0,01 = 0,0001. A = 1 − 0,0001 = 0,9999 = 99,99 %." },
    { id: "q-avail-2", topic: "nat-pat", type: "single", exam: ["AP2"],
      q: "Ein Dienst hat eine Verfügbarkeit von 99,9 %. Mit wie viel Ausfallzeit pro Jahr (8760 h) musst du rechnen?",
      options: ["ca. 8,76 Stunden", "ca. 52,6 Minuten", "ca. 87,6 Stunden", "ca. 4,38 Stunden"],
      answer: 0,
      explain: "(1 − 0,999) × 8760 h = 0,001 × 8760 h = 8,76 h. 52,6 min gelten für 99,99 %, 87,6 h für 99 % und 4,38 h für 99,95 %." },
    { id: "q-ovh-1", topic: "nat-pat", type: "single", exam: ["AP2"],
      q: "10 GB sollen über eine 100-Mbit/s-Leitung übertragen werden; der Protokoll-Overhead belegt 20 % der Leitungsrate. Wie lange dauert die Übertragung?",
      options: ["1000 s (ca. 16,7 min)", "800 s (ca. 13,3 min)", "960 s (16 min)", "100 s"],
      answer: 0,
      explain: "Nutzbare Rate: 100 Mbit/s × 0,8 = 80 Mbit/s. Datenmenge: 10 × 10⁹ Byte × 8 = 8 × 10¹⁰ bit. t = 8 × 10¹⁰ ÷ 8 × 10⁷ = 1000 s. 800 s ignoriert den Overhead, 960 s schlägt ihn fälschlich auf die Zeit auf, 100 s vergisst die Umrechnung Byte → Bit." },
    { id: "q-spf-1", topic: "dienste-sicherheit", type: "single", exam: ["AP2"],
      q: "Welcher DNS-basierte Mechanismus legt fest, welche Mailserver E-Mails für eine Domain versenden dürfen?",
      options: ["SPF", "DKIM", "DMARC", "DNSSEC"],
      answer: 0,
      explain: "SPF listet die berechtigten Absenderserver (TXT-Record). DKIM signiert Mails kryptografisch, DMARC legt die Richtlinie bei fehlgeschlagener Prüfung fest, DNSSEC sichert DNS-Antworten selbst ab." },
    { id: "q-cloud-1", topic: "nat-pat", type: "single", exam: ["AP2"],
      q: "Eine Firma nutzt eine fertige Office- und Mail-Anwendung, die der Anbieter komplett betreibt; die Mitarbeitenden arbeiten im Browser. Welches Cloud-Servicemodell ist das?",
      options: ["SaaS", "IaaS", "PaaS", "On-Premises"],
      answer: 0,
      explain: "Software as a Service: Der Kunde nutzt nur die Anwendung. Bei IaaS mietet er virtuelle Server/Netze und betreibt alles darauf selbst, bei PaaS eine Plattform zum Entwickeln/Betreiben eigener Anwendungen. On-Premises bedeutet Betrieb im eigenen Haus." },
    { id: "q-ipsec-1", topic: "dienste-sicherheit", type: "multi", exam: ["AP2"],
      q: "Welche Aussagen zu IPsec sind richtig?",
      options: ["IPsec arbeitet auf der Vermittlungsschicht (Schicht 3).", "IKE authentifiziert die Gegenstellen und handelt die Schlüssel aus.", "ESP verschlüsselt die Nutzdaten und sichert ihre Integrität.", "IPsec verwendet ausschließlich TCP-Port 443.", "IPsec eignet sich nur für Remote-Access, nicht für Site-to-Site."],
      answer: [0, 1, 2],
      explain: "IPsec sichert IP-Pakete (Schicht 3), IKE nutzt UDP 500/4500, ESP verschlüsselt. TCP 443 ist typisch für TLS-VPNs. IPsec wird sowohl für Site-to-Site als auch für Remote-Access eingesetzt." },
    { id: "q-lacp-1", topic: "switching-stp", type: "multi", exam: ["AP2"],
      q: "Welche Voraussetzungen müssen erfüllt sein, damit mehrere Links per LACP gebündelt werden können?",
      options: ["gleiche Geschwindigkeit und gleicher Duplex-Modus", "gleiche VLAN- bzw. Trunk-Konfiguration", "alle Links enden auf derselben Gegenstelle (bzw. demselben Stack)", "mindestens vier physische Links", "unterschiedliche Kabeltypen je Link"],
      answer: [0, 1, 2],
      explain: "Die Ports eines Bündels müssen gleich konfiguriert sein und zur selben Gegenstelle führen. Schon zwei Links lassen sich bündeln; unterschiedliche Kabeltypen sind keine Voraussetzung, sondern eher eine Fehlerquelle." },
    { id: "q-arpspoof-1", topic: "mac-arp", type: "multi", exam: ["AP2"],
      q: "Welche Maßnahmen am Switch helfen gegen ARP-Spoofing?",
      options: ["Dynamic ARP Inspection", "DHCP-Snooping als Grundlage für die ARP-Prüfung", "eine größere Subnetzmaske wählen", "den ARP-Cache-Timeout auf 0 setzen", "die SSID des WLANs verstecken"],
      answer: [0, 1],
      explain: "DAI vergleicht ARP-Pakete mit der Bindungstabelle aus DHCP-Snooping (IP ↔ MAC ↔ Port) und verwirft gefälschte Antworten. Eine größere Maske vergrößert eher die Angriffsfläche, ein Cache-Timeout von 0 erzeugt nur mehr ARP-Verkehr, und die SSID hat mit ARP nichts zu tun." },
    { id: "q-dnssec-1", topic: "dhcp-dns", type: "tf", exam: ["AP2"],
      q: "DNSSEC verschlüsselt DNS-Anfragen, sodass Dritte nicht mitlesen können, welche Namen aufgelöst werden.",
      answer: false,
      explain: "Falsch. DNSSEC signiert DNS-Daten und schützt so vor gefälschten Antworten (Integrität, Authentizität), verschlüsselt aber nichts. Vertraulichkeit bieten DNS over TLS (Port 853) oder DNS over HTTPS (443)." },
    { id: "q-wlan-2", topic: "dienste-sicherheit", type: "tf", exam: ["AP1", "AP2"],
      q: "Eine versteckte SSID schützt ein WLAN wirksam vor unbefugtem Zugriff.",
      answer: false,
      explain: "Falsch. Der Netzname taucht trotzdem in den Anfragen verbundener Clients auf und lässt sich mitschneiden. Schutz bieten starke Verschlüsselung und Authentifizierung (WPA3, idealerweise Enterprise mit 802.1X) sowie ein getrenntes Gäste-VLAN." },
    { id: "q-osi-10", topic: "schichtenmodelle", type: "single", exam: ["AP1", "AP2"],
      q: "Welche OSI-Schicht ergänzt beim Senden neben einem Header auch einen Trailer mit Prüfsumme (FCS)?",
      options: ["Sicherungsschicht (2)", "Vermittlungsschicht (3)", "Transportschicht (4)", "Anwendungsschicht (7)"],
      answer: 0,
      explain: "Nur die Sicherungsschicht (z. B. Ethernet) hängt zusätzlich die Frame Check Sequence an, mit der der Empfänger Übertragungsfehler erkennt. IP (Schicht 3) und TCP (Schicht 4) fügen nur Header hinzu; ihre Prüfsummen stehen im Header, nicht am Ende." },
    { id: "q-osi-11", topic: "schichtenmodelle", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Protokolle werden der Anwendungsschicht (OSI 7) zugeordnet?",
      options: ["DNS", "SMTP", "DHCP", "TCP", "ICMP"],
      answer: [0, 1, 2],
      explain: "DNS, SMTP und DHCP sind Anwendungsprotokolle, die Dienste für Programme bzw. das Betriebssystem bereitstellen. TCP gehört zur Transportschicht (4), ICMP zur Vermittlungsschicht (3)." },
    { id: "q-osi-12", topic: "schichtenmodelle", type: "single", exam: ["AP1", "AP2"],
      q: "Welcher Schicht des TCP/IP-Modells gehört ICMP (genutzt von ping) an?",
      options: ["Internetschicht", "Transportschicht", "Anwendungsschicht", "Netzzugangsschicht"],
      answer: 0,
      explain: "ICMP transportiert Steuer- und Fehlermeldungen von IP und steckt direkt im IP-Paket – daher Internetschicht (OSI 3). Es nutzt weder TCP noch UDP und hat keine Ports; deshalb ist es keine Transport- oder Anwendungsschicht-Funktion." },
    { id: "q-port-11", topic: "ports-tcp-udp", type: "input", exam: ["AP1", "AP2"],
      q: "Über welchen TCP-Port greifen Windows-Clients standardmäßig auf Dateifreigaben (SMB) zu?",
      answer: ["445", "TCP 445", "Port 445", "445/TCP", "TCP/445"],
      explain: "SMB läuft heute direkt über TCP 445. Die alten NetBIOS-Ports 137–139 werden nur noch für Altsysteme gebraucht. SMB-Freigaben dürfen nie direkt ins Internet geöffnet werden." },
    { id: "q-port-12", topic: "ports-tcp-udp", type: "single", exam: ["AP1", "AP2"],
      q: "Ein PC ruft eine HTTPS-Seite auf. Welche Portkombination steht typischerweise im ersten TCP-Segment des PCs?",
      options: ["Quellport 51234, Zielport 443", "Quellport 443, Zielport 51234", "Quellport 443, Zielport 443", "Quellport 80, Zielport 443"],
      answer: 0,
      explain: "Der Server lauscht auf dem festen Port 443 (Ziel). Der Client bekommt vom Betriebssystem einen dynamischen Quellport (49152–65535). In der Antwort des Servers sind Quell- und Zielport vertauscht. Feste Quellports wie 443 oder 80 nutzt ein Client nicht." },
    { id: "q-port-13", topic: "ports-tcp-udp", type: "multi", exam: ["AP1", "AP2"],
      q: "Welche Standardports gehören zu TLS-verschlüsselten Varianten eines Dienstes?",
      options: ["993", "995", "636", "110", "23"],
      answer: [0, 1, 2],
      explain: "993 = IMAPS, 995 = POP3S, 636 = LDAPS – jeweils mit TLS. 110 ist POP3 ohne Verschlüsselung, 23 ist Telnet (Klartext; Ersatz ist SSH auf Port 22)." },
    { id: "q-port-14", topic: "ports-tcp-udp", type: "tf", exam: ["AP1", "AP2"],
      q: "Port 3389 (RDP) ist ein Well-known Port.",
      answer: false,
      explain: "Falsch. Well-known Ports reichen von 0 bis 1023. 3389 liegt im Bereich der Registered Ports (1024–49151)." },
    { id: "q-sub-12", topic: "subnetting", type: "input", exam: ["AP1", "AP2"],
      q: "Wie viele Adressen umfasst ein /23-Netz insgesamt (einschließlich Netz- und Broadcast-Adresse)?",
      answer: ["512", "512 Adressen"],
      explain: "32 − 23 = 9 Hostbits → 2⁹ = 512 Adressen. Nutzbar für Hosts sind davon 512 − 2 = 510." },
    { id: "q-sub-13", topic: "subnetting", type: "single", exam: ["AP1", "AP2"],
      q: "Welche Adresse ist der letzte nutzbare Host im Netz 10.0.64.0/18?",
      options: ["10.0.127.254", "10.0.127.255", "10.0.64.254", "10.0.128.254"],
      answer: 0,
      explain: "/18 → Maske 255.255.192.0, Blockgröße 64 im 3. Oktett → das Netz reicht von 10.0.64.0 bis 10.0.127.255 (Broadcast). Letzter Host = Broadcast − 1 = 10.0.127.254. 10.0.64.254 wäre nur bei /24 der letzte Host, 10.0.128.254 liegt schon im nächsten Netz." },
    { id: "q-sub-14", topic: "subnetting", type: "tf", exam: ["AP1", "AP2"],
      q: "192.168.1.60/26 und 192.168.1.70/26 liegen im selben Subnetz.",
      answer: false,
      explain: "Falsch. /26 → Blockgröße 64: .60 liegt im Netz 192.168.1.0 (bis .63), .70 im Netz 192.168.1.64 (bis .127). Die Geräte brauchen einen Router, um sich zu erreichen." },
    { id: "q-sub-15", topic: "subnetting", type: "input", exam: ["AP1", "AP2"],
      q: "Ein /8-Netz wird mit der Maske 255.255.128.0 unterteilt. Wie viele Subnetze entstehen?",
      answer: ["512", "512 Subnetze"],
      explain: "255.255.128.0 = /17. Subnetzbits = 17 − 8 = 9 → 2⁹ = 512 Subnetze (256 Werte im 2. Oktett × 2 Blöcke im 3. Oktett)." },
    { id: "q-sub-16", topic: "subnetting", type: "single", exam: ["AP1", "AP2"],
      q: "Welche Subnetzmaske entspricht dem Präfix /19?",
      options: ["255.255.224.0", "255.255.192.0", "255.255.240.0", "255.255.255.224"],
      answer: 0,
      explain: "/19 = 16 Einsen in den ersten beiden Oktetten + 3 Einsen im 3. Oktett: 11100000 = 224 → 255.255.224.0. 192.0 wäre /18, 240.0 wäre /20, 255.255.255.224 wäre /27." },
    { id: "q-icmp-1", topic: "cisco-fehlersuche", type: "single", exam: ["AP1", "AP2"],
      q: "Welche ICMP-Nachricht schickt ein Router an den Absender, wenn er ein Paket verwirft, weil die TTL 0 erreicht hat?",
      options: ["Time Exceeded (Typ 11)", "Echo Reply (Typ 0)", "Destination Unreachable (Typ 3)", "Echo Request (Typ 8)"],
      answer: 0,
      explain: "Bei abgelaufener TTL meldet der Router Time Exceeded – genau das nutzt tracert, um die Router eines Weges sichtbar zu machen. Destination Unreachable kommt, wenn Netz, Host oder Port nicht erreichbar sind; Echo Request/Reply sind Anfrage und Antwort von ping." },
    { id: "q-rt-6", topic: "routing", type: "tf", exam: ["AP2"],
      q: "Ein Router verringert beim Weiterleiten eines IPv4-Pakets die TTL um 1 und verpackt das Paket in einen neuen Frame.",
      answer: true,
      explain: "Richtig. Die TTL verhindert endlos kreisende Pakete; erreicht sie 0, wird das Paket verworfen. Die IP-Adressen bleiben (ohne NAT) gleich, der Frame mit neuen MAC-Adressen wird für jede Teilstrecke neu gebildet." },
    { id: "q-poe-2", topic: "switching-stp", type: "input", exam: ["AP1", "AP2"],
      q: "Eine IP-Kamera nimmt über PoE 12 W auf. Wie groß ist der Strom bei 48 V in mA?",
      answer: ["250", "250 mA", "250mA", "0,25 A"],
      explain: "I = P ÷ U = 12 W ÷ 48 V = 0,25 A = 250 mA. Das liegt unter dem Maximum von 350 mA bei IEEE 802.3af." },
    { id: "q-poe-3", topic: "switching-stp", type: "single", exam: ["AP1", "AP2"],
      q: "Welche Leistung ist bei IEEE 802.3af am Endgerät garantiert verfügbar?",
      options: ["12,95 W", "15,4 W", "25,5 W", "30 W"],
      answer: 0,
      explain: "Der Switch-Port liefert bis 15,4 W; wegen der Leitungsverluste im bis zu 100 m langen Kabel sind am Endgerät 12,95 W garantiert. 25,5 W (am Gerät) und 30 W (am Port) gelten für 802.3at (PoE+)." },
    { id: "q-l2sec-1", topic: "switching-stp", type: "single", exam: ["AP2"],
      q: "Ein Angreifer überflutet einen Switch mit Frames tausender gefälschter Quell-MAC-Adressen, bis die MAC-Tabelle voll ist. Welche Gegenmaßnahme ist am wirksamsten?",
      options: ["Port Security mit einer maximalen Anzahl MAC-Adressen je Port", "DHCP-Snooping", "Native VLAN auf VLAN 99 ändern", "DNSSEC aktivieren"],
      answer: 0,
      explain: "Beim MAC-Flooding flutet der Switch mit voller Tabelle alle Frames an alle Ports – der Angreifer kann mitlesen. Port Security begrenzt die gelernten MAC-Adressen je Port und sperrt ihn bei Verstoß. DHCP-Snooping hilft gegen Rogue-DHCP, das Native VLAN betrifft VLAN-Hopping, DNSSEC gefälschte DNS-Antworten." },
    { id: "q-vlsm-5", topic: "vlsm", type: "tf", exam: ["AP2"],
      q: "172.16.8.106/30 ist eine gültige Netzadresse.",
      answer: false,
      explain: "Falsch. /30 hat die Blockgröße 4; Netzadressen müssen Vielfache von 4 sein (… 100, 104, 108 …). 106 ÷ 4 = 26,5 → 172.16.8.106 ist ein Host im Netz 172.16.8.104/30 (Hosts .105 und .106, Broadcast .107)." },
    { id: "q-v6-6", topic: "ipv6", type: "input", exam: ["AP2"],
      q: "Eine Firma hat das Präfix 2001:db8:ab00::/48 und nutzt die VLAN-ID hexadezimal als Subnet-ID im 4. Block. Wie lautet das /64-Präfix für VLAN 30?",
      answer: ["2001:db8:ab00:1e::/64", "2001:db8:ab00:1e::", "2001:0db8:ab00:001e::/64", "2001:0db8:ab00:001e::", "2001:db8:ab00:001e::/64", "2001:db8:ab00:001e::", "2001:0db8:ab00:1e::/64", "2001:0db8:ab00:1e::"],
      explain: "30 dezimal = 1 × 16 + 14 = hex 1e. Die Subnet-ID steht im 4. Block → 2001:db8:ab00:1e::/64. Typischer Fehler: die Dezimalzahl 30 direkt eintragen (2001:db8:ab00:30:: wäre VLAN 48)." },
    { id: "q-v6-7", topic: "ipv6", type: "input", exam: ["AP1", "AP2"],
      q: "Ein Kunde erhält vom Provider ein /56-Präfix. Wie viele /64-Subnetze kann er daraus bilden?",
      answer: ["256", "256 Subnetze"],
      explain: "64 − 56 = 8 Bit für Subnetze → 2⁸ = 256 /64-Netze. Bei einem /48 wären es 2¹⁶ = 65.536." },
  ],
  cards: [
    { topic: "schichtenmodelle", f: "OSI-Schichten von 7 nach 1", b: "Anwendung – Darstellung – Sitzung – Transport – Vermittlung – Sicherung – Bitübertragung („Alle Deutschen Schüler Trinken Verschiedene Sorten Bier“)" },
    { topic: "schichtenmodelle", f: "PDUs der OSI-Schichten 1 bis 4", b: "1 Bit · 2 Frame (Rahmen) · 3 Paket · 4 Segment (TCP) bzw. Datagramm (UDP)" },
    { topic: "schichtenmodelle", f: "Schichten des TCP/IP-Modells", b: "Anwendung (OSI 5–7), Transport (4), Internet (3), Netzzugang (1–2)" },
    { topic: "schichtenmodelle", f: "Kapselung", b: "Beim Senden fügt jede Schicht ihren Header (Ethernet zusätzlich den Trailer FCS) hinzu; der Empfänger entfernt sie wieder (Entkapselung)." },
    { topic: "schichtenmodelle", f: "Vertikale vs. horizontale Kommunikation", b: "Vertikal: benachbarte Schichten eines Systems über Schnittstellen. Horizontal: gleiche Schichten zweier Systeme über ein gemeinsames Protokoll." },
    { topic: "schichtenmodelle", f: "Geräte je OSI-Schicht", b: "Hub/Repeater: 1 · Switch/Bridge/Access Point: 2 · Router/Layer-3-Switch: 3" },
    { topic: "mac-arp", f: "Aufbau einer MAC-Adresse", b: "48 Bit = 12 Hexziffern: 24 Bit OUI (Hersteller, von der IEEE vergeben) + 24 Bit Gerätekennung" },
    { topic: "mac-arp", f: "I/G-Bit und U/L-Bit", b: "Im ersten Byte: letztes Bit I/G (0 = Unicast, 1 = Gruppe), vorletztes Bit U/L (0 = Hersteller, 1 = lokal verwaltet)" },
    { topic: "mac-arp", f: "Ablauf ARP", b: "ARP-Request als Broadcast „Wer hat IP x?“ → ARP-Reply als Unicast mit der MAC → Eintrag im ARP-Cache (arp -a)" },
    { topic: "mac-arp", f: "Was ändert sich hinter einem Router?", b: "Die MAC-Adressen (neuer Frame je Teilstrecke). Die IP-Adressen bleiben gleich (ohne NAT)." },
    { topic: "mac-arp", f: "Ethernet-Frame (Felder)", b: "Präambel/SFD · Ziel-MAC · Quell-MAC · (802.1Q-Tag) · Typ · Nutzdaten 46–1500 Byte · FCS" },
    { topic: "ports-tcp-udp", f: "Portbereiche", b: "0–1023 Well-known · 1024–49151 Registered · 49152–65535 Dynamic/Private" },
    { topic: "ports-tcp-udp", f: "Port 20/21, 22, 23", b: "FTP (Daten/Steuerung) · SSH/SFTP · Telnet – alle TCP" },
    { topic: "ports-tcp-udp", f: "Port 25, 587", b: "SMTP zwischen Mailservern · SMTP-Submission (Client versendet mit Anmeldung) – TCP" },
    { topic: "ports-tcp-udp", f: "Port 53", b: "DNS – UDP (Anfragen) und TCP (Zonentransfer, große Antworten)" },
    { topic: "ports-tcp-udp", f: "Port 67/68", b: "DHCP – Server 67, Client 68, UDP" },
    { topic: "ports-tcp-udp", f: "Port 80, 443", b: "HTTP · HTTPS (TCP; HTTP/3 nutzt UDP 443)" },
    { topic: "ports-tcp-udp", f: "Port 110/995, 143/993", b: "POP3/POP3S · IMAP/IMAPS – TCP" },
    { topic: "ports-tcp-udp", f: "Port 123, 161/162, 3389", b: "NTP (UDP) · SNMP/Traps (UDP) · RDP (TCP)" },
    { topic: "ports-tcp-udp", f: "3-Way-Handshake", b: "SYN (Seq x) → SYN-ACK (Seq y, Ack x+1) → ACK (Ack y+1)" },
    { topic: "ports-tcp-udp", f: "TCP vs. UDP in einem Satz", b: "TCP: verbindungsorientiert, zuverlässig, Header ≥ 20 Byte. UDP: verbindungslos, schnell, ohne Bestätigung, Header 8 Byte." },
    { topic: "ports-tcp-udp", f: "Socket", b: "Kombination aus IP-Adresse und Port (+ Protokoll), z. B. 203.0.113.80:443" },
    { topic: "ipv4", f: "Private IPv4-Bereiche (RFC 1918)", b: "10.0.0.0/8 · 172.16.0.0/12 (bis 172.31.255.255) · 192.168.0.0/16" },
    { topic: "ipv4", f: "Klassen A, B, C (1. Oktett, Standardmaske)", b: "A: 1–126, /8 · B: 128–191, /16 · C: 192–223, /24 (D: 224–239 Multicast, E: 240–255 reserviert)" },
    { topic: "ipv4", f: "169.254.x.x", b: "APIPA/Link-Local: Windows vergibt sie selbst, wenn kein DHCP-Server antwortet." },
    { topic: "ipv4", f: "127.0.0.1", b: "Loopback – der eigene Rechner; ping 127.0.0.1 testet den TCP/IP-Stack." },
    { topic: "ipv4", f: "Gültige Maskenwerte in einem Oktett", b: "0, 128, 192, 224, 240, 248, 252, 254, 255" },
    { topic: "subnetting", f: "Subnetting-Formeln", b: "Subnetze = 2ⁿ (n = neues − altes Präfix) · Hosts = 2ʰ − 2 (h = 32 − Präfix)" },
    { topic: "subnetting", f: "Blockgröße", b: "256 − Maskenwert im interessanten Oktett; Netze beginnen bei Vielfachen davon." },
    { topic: "subnetting", f: "Hosts bei /25, /26, /27, /28, /29, /30", b: "126 · 62 · 30 · 14 · 6 · 2" },
    { topic: "subnetting", f: "Broadcast-Adresse bestimmen", b: "Nächste Netzadresse − 1 (alle Hostbits 1); Oktette rechts vom interessanten Oktett werden 255." },
    { topic: "subnetting", f: "Netzadresse bestimmen", b: "IP-Adresse AND Subnetzmaske (alle Hostbits 0)" },
    { topic: "vlsm", f: "VLSM – Vorgehen", b: "Bedarf inkl. Gateway ermitteln → absteigend sortieren → kleinstes passendes Präfix → lückenlos vergeben → Überschneidungen prüfen" },
    { topic: "vlsm", f: "Routenzusammenfassung (Summarization)", b: "Mehrere zusammenhängende Netze mit gemeinsamem Präfix als eine Route ankündigen, z. B. 192.168.0.0/24–192.168.3.0/24 → 192.168.0.0/22" },
    { topic: "routing", f: "Administrative Distanz (Cisco)", b: "direkt verbunden 0 · statisch 1 · OSPF 110 · RIP 120 – kleiner = vertrauenswürdiger" },
    { topic: "routing", f: "Longest Prefix Match", b: "Passen mehrere Routen, gewinnt die mit dem längsten Präfix; 0.0.0.0/0 nur, wenn nichts anderes passt." },
    { topic: "routing", f: "RIP vs. OSPF", b: "RIP: Distanzvektor, Hops (max. 15), Updates alle 30 s. OSPF: Link-State, Kosten nach Bandbreite, Dijkstra, schnelle Konvergenz." },
    { topic: "routing", f: "Default-Route auf Cisco", b: "ip route 0.0.0.0 0.0.0.0 &lt;Next-Hop-IP&gt;" },
    { topic: "switching-stp", f: "Arbeitsweise eines Switches", b: "Learning (Quell-MAC) · Forwarding/Filtering (Ziel bekannt) · Flooding (Ziel unbekannt/Broadcast) · Aging (Cisco 300 s)" },
    { topic: "switching-stp", f: "STP – Root Bridge", b: "Switch mit der niedrigsten Bridge-ID (zuerst Priorität, Standard 32768, dann MAC-Adresse)" },
    { topic: "switching-stp", f: "Link Aggregation", b: "LACP (IEEE 802.1AX), Cisco EtherChannel: mehrere Links bündeln → mehr Bandbreite und Redundanz" },
    { topic: "vlan", f: "Access- vs. Trunk-Port", b: "Access: ein VLAN, untagged, Endgerät. Trunk: mehrere VLANs, getaggt nach 802.1Q, zwischen Netzgeräten." },
    { topic: "vlan", f: "802.1Q-Tag", b: "4 Byte: TPID 0x8100 (16 Bit), PCP (3 Bit), DEI (1 Bit), VID (12 Bit, VLAN 1–4094)" },
    { topic: "vlan", f: "Native VLAN", b: "VLAN, dessen Frames auf dem Trunk ungetaggt laufen (Standard VLAN 1); muss beidseitig gleich sein." },
    { topic: "vlan", f: "Router-on-a-Stick (Befehle)", b: "interface g0/0.10 → encapsulation dot1Q 10 → ip address 192.168.10.1 255.255.255.0" },
    { topic: "nat-pat", f: "PAT (NAT-Overload)", b: "Viele interne Hosts teilen sich eine öffentliche IP; unterschieden wird über Portnummern in der NAT-Tabelle." },
    { topic: "nat-pat", f: "Inside Local / Inside Global", b: "Inside Local: private IP des internen Hosts. Inside Global: öffentliche IP, unter der er im Internet erscheint." },
    { topic: "dhcp-dns", f: "DORA", b: "Discover (Broadcast) → Offer → Request (Broadcast) → Acknowledge; UDP 67/68" },
    { topic: "dhcp-dns", f: "DHCP-Relay", b: "Leitet DHCP-Broadcasts als Unicast an einen Server in einem anderen Netz weiter (Cisco: ip helper-address)." },
    { topic: "dhcp-dns", f: "DNS-Records A, AAAA, CNAME, MX, PTR", b: "Name→IPv4 · Name→IPv6 · Alias · Mailserver · IP→Name (Reverse)" },
    { topic: "dhcp-dns", f: "Rekursive vs. iterative DNS-Anfrage", b: "Rekursiv: Client will die fertige Antwort vom Resolver. Iterativ: Resolver fragt Root → TLD → autoritativen Server nacheinander." },
    { topic: "ipv6", f: "IPv6 kürzen", b: "Führende Nullen je Block weglassen; genau eine Nullblock-Folge durch :: ersetzen." },
    { topic: "ipv6", f: "IPv6-Präfixe", b: "2000::/3 Global Unicast · fe80::/10 Link-Local · fc00::/7 ULA · ff00::/8 Multicast · ::1 Loopback" },
    { topic: "ipv6", f: "SLAAC", b: "Router Advertisement liefert /64-Präfix, Host bildet Interface-ID selbst (EUI-64 oder zufällig), DAD prüft Eindeutigkeit." },
    { topic: "ipv6", f: "EUI-64", b: "MAC teilen, FF:FE einfügen, 7. Bit (U/L) des ersten Bytes umkehren → 64-Bit-Interface-ID" },
    { topic: "ipv6", f: "Dual Stack", b: "IPv4 und IPv6 laufen parallel auf denselben Geräten – der übliche Übergangsweg." },
    { topic: "dienste-sicherheit", f: "IMAP vs. POP3", b: "IMAP: Mails bleiben auf dem Server, Synchronisation mehrerer Geräte. POP3: Mails abholen, meist vom Server löschen." },
    { topic: "dienste-sicherheit", f: "IEEE 802.1X – Rollen", b: "Supplicant (Client) · Authenticator (Switch/Access Point) · Authentication Server (RADIUS)" },
    { topic: "dienste-sicherheit", f: "DMZ", b: "Eigenes Segment für öffentlich erreichbare Server; Internet → DMZ erlaubt (nur nötige Ports), DMZ → LAN verboten." },
    { topic: "cisco-fehlersuche", f: "Cisco-IOS-Modi", b: "R1&gt; User EXEC · R1# Privileged (enable) · R1(config)# global (configure terminal) · R1(config-if)# Interface" },
    { topic: "cisco-fehlersuche", f: "running-config vs. startup-config", b: "running: aktuell im RAM, weg nach Neustart. startup: im NVRAM. Speichern: copy running-config startup-config" },
    { topic: "cisco-fehlersuche", f: "Fehlersuche bottom-up", b: "Kabel/Link → ipconfig → ping 127.0.0.1 → ping Gateway → ping entfernte IP → ping Name/nslookup → tracert" },
    { topic: "routing", f: "HSRP / VRRP", b: "Gateway-Redundanz: zwei Router teilen sich virtuelle IP und MAC; Active/Master arbeitet, Standby/Backup übernimmt bei Ausfall (Priorität, Preemption)." },
    { topic: "switching-stp", f: "PoE-Leistung je Port", b: "802.3af: 15,4 W · 802.3at (PoE+): 30 W · 802.3bt: 60 W (Typ 3) bzw. 90 W (Typ 4)" },
    { topic: "switching-stp", f: "Glasfaser-Uplink kommt nicht hoch – Ursachen", b: "falsches SFP-Modul/Fasertyp, falsche Geschwindigkeit, Rx/Tx vertauscht, verschmutzte Stecker, Port deaktiviert" },
    { topic: "nat-pat", f: "Verfügbarkeit parallel / in Reihe", b: "parallel: 1 − (1 − A₁)(1 − A₂) · in Reihe: A₁ × A₂ · Ausfall/Jahr = (1 − A) × 8760 h" },
    { topic: "nat-pat", f: "99 % / 99,9 % / 99,99 % Verfügbarkeit", b: "ca. 87,6 h / 8,76 h / 52,6 min Ausfallzeit pro Jahr" },
    { topic: "nat-pat", f: "Übertragungsdauer mit Overhead", b: "t = Datenmenge in Bit ÷ (Datenrate × (1 − Overhead)); GB = 10⁹, GiB = 2³⁰ Byte" },
    { topic: "nat-pat", f: "IaaS, PaaS, SaaS", b: "Infrastruktur (VMs, Netze) · Plattform (Laufzeitumgebung) · fertige Software – jeweils vom Anbieter bereitgestellt" },
    { topic: "dhcp-dns", f: "Split-Horizon-DNS und DNSSEC", b: "Split-Horizon: intern andere Antwort als extern. DNSSEC: signiert DNS-Daten gegen Fälschung, verschlüsselt nicht." },
    { topic: "dienste-sicherheit", f: "SPF, DKIM, DMARC", b: "SPF: erlaubte Absenderserver · DKIM: Signatur der Mail · DMARC: Richtlinie bei Fehlschlag (none/quarantine/reject) – alle als TXT im DNS" },
    { topic: "dienste-sicherheit", f: "IPsec: IKE und ESP", b: "IKE (UDP 500/4500) authentifiziert und handelt Schlüssel aus; ESP verschlüsselt; Tunnelmodus kapselt das ganze IP-Paket." },
    { topic: "subnetting", f: "Masken im 3. Oktett: /17 bis /23", b: "/17 .128.0 · /18 .192.0 · /19 .224.0 · /20 .240.0 · /21 .248.0 · /22 .252.0 · /23 .254.0 (jeweils 255.255.x.0)" },
    { topic: "subnetting", f: "Liegen zwei Adressen im selben Subnetz?", b: "Beide Adressen mit derselben Maske AND-verknüpfen (bzw. Block bestimmen). Gleiche Netzadresse → direkt erreichbar, sonst nur über einen Router." },
    { topic: "subnetting", f: "Subnetzadressen binär", b: "Subnetzbits hochzählen, Hostbits = 0 → Netzadresse; Hostbits = 1 → Broadcast. Abstand = Stellenwert des letzten Subnetzbits." },
    { topic: "cisco-fehlersuche", f: "ICMP-Typen 0, 3, 8, 11", b: "0 Echo Reply · 3 Destination Unreachable · 8 Echo Request · 11 Time Exceeded (TTL abgelaufen, tracert)" },
    { topic: "routing", f: "Was macht ein Router mit der TTL?", b: "Er verringert sie je Weiterleitung um 1; bei 0 wird das Paket verworfen und ICMP Time Exceeded an den Absender gesendet." },
    { topic: "switching-stp", f: "PoE: Leistung am Port vs. am Gerät", b: "802.3af: 15,4 W / 12,95 W · 802.3at: 30 W / 25,5 W · Strom I = P ÷ U (z. B. 12 W ÷ 48 V = 250 mA)" },
    { topic: "switching-stp", f: "MAC-Flooding, Rogue-DHCP, VLAN-Hopping – Gegenmaßnahmen", b: "Port Security · DHCP-Snooping · Access-Ports fest konfigurieren, Trunk-Aushandlung aus, Native VLAN ungenutzt" },
    { topic: "mac-arp", f: "Gratuitous ARP", b: "Unaufgeforderte ARP-Ankündigung der eigenen IP-MAC-Zuordnung (z. B. beim Start oder bei HSRP/VRRP-Umschaltung); wird beim ARP-Spoofing missbraucht." },
    { topic: "ports-tcp-udp", f: "Port 69, 88, 445, 5060", b: "TFTP (UDP) · Kerberos (TCP/UDP) · SMB (TCP) · SIP (UDP/TCP; 5061 mit TLS)" },
  ],
  checklist: [
    { id: "c-osi-1", topic: "schichtenmodelle", text: "Ich kann die 7 OSI-Schichten mit deutschem und englischem Namen in der richtigen Reihenfolge nennen und ihre Aufgaben beschreiben.", exam: ["AP1", "AP2"] },
    { id: "c-osi-2", topic: "schichtenmodelle", text: "Ich kann Protokolle (z. B. HTTP, DNS, TCP, UDP, IP, ICMP, Ethernet) und Geräte (Hub, Switch, Router, Access Point) den OSI- und TCP/IP-Schichten zuordnen.", exam: ["AP1", "AP2"] },
    { id: "c-osi-3", topic: "schichtenmodelle", text: "Ich kann die PDUs der Schichten 1–4 benennen und die Kapselung beim Senden und Empfangen erklären.", exam: ["AP1", "AP2"] },
    { id: "c-osi-4", topic: "schichtenmodelle", text: "Ich kann vertikale und horizontale Kommunikation unterscheiden und den Begriff Protokollstack erklären." },
    { id: "c-mac-1", topic: "mac-arp", text: "Ich kann logische und physikalische Adressierung vergleichen und drei Unterschiede zwischen MAC- und IP-Adresse nennen.", exam: ["AP1", "AP2"] },
    { id: "c-mac-2", topic: "mac-arp", text: "Ich kann an einer MAC-Adresse OUI, Unicast/Multicast/Broadcast sowie global/lokal verwaltet erkennen.", exam: ["AP1", "AP2"] },
    { id: "c-mac-3", topic: "mac-arp", text: "Ich kann den Ablauf von ARP beschreiben und angeben, welche MAC- und IP-Adressen auf jeder Teilstrecke im Frame stehen.", exam: ["AP1", "AP2"] },
    { id: "c-port-1", topic: "ports-tcp-udp", text: "Ich kann die Portbereiche (well-known, registered, dynamic) nennen und mindestens 15 wichtige Ports mit Dienst und TCP/UDP zuordnen.", exam: ["AP1", "AP2"] },
    { id: "c-port-2", topic: "ports-tcp-udp", text: "Ich kann TCP und UDP vergleichen und für einen Dienst begründen, welches Protokoll passt.", exam: ["AP1", "AP2"] },
    { id: "c-port-3", topic: "ports-tcp-udp", text: "Ich kann den 3-Way-Handshake mit Flags, Sequenz- und Acknowledgement-Nummern darstellen.", exam: ["AP2"] },
    { id: "c-ip-1", topic: "ipv4", text: "Ich kann IPv4-Adressen binär/dezimal umrechnen, Klassen A–E zuordnen und private, öffentliche und besondere Adressen (Loopback, APIPA) erkennen.", exam: ["AP1", "AP2"] },
    { id: "c-ip-2", topic: "ipv4", text: "Ich kann Subnetzmasken zwischen Dezimal- und CIDR-Schreibweise umrechnen und ungültige Masken erkennen.", exam: ["AP1", "AP2"] },
    { id: "c-sub-1", topic: "subnetting", text: "Ich kann zu einer IP-Adresse mit Maske Netzadresse, ersten und letzten Host, Broadcast und Hostanzahl berechnen – auch über Oktettgrenzen.", exam: ["AP1", "AP2"] },
    { id: "c-sub-2", topic: "subnetting", text: "Ich kann ein Netz nach vorgegebener Subnetz- oder Hostanzahl in gleich große Subnetze teilen und die Subnetz-Tabelle vollständig ausfüllen.", exam: ["AP1", "AP2"] },
    { id: "c-sub-3", topic: "subnetting", text: "Ich kann Subnetting an Oktettgrenzen (/8, /16, /24) erklären und die Anzahl der Subnetze und Hosts angeben.", exam: ["AP1", "AP2"] },
    { id: "c-sub-4", topic: "subnetting", text: "Ich kann fehlerhafte IP-Konfigurationen (Netz-/Broadcast-Adresse vergeben, falsche Maske, Gateway im falschen Subnetz) finden und korrigieren.", exam: ["AP1", "AP2"] },
    { id: "c-vlsm-1", topic: "vlsm", text: "Ich kann ein VLSM-Adresskonzept mit minimaler Adressverschwendung erstellen und Routen zusammenfassen.", exam: ["AP2"] },
    { id: "c-rt-1", topic: "routing", text: "Ich kann eine Routingtabelle lesen (C, L, S, O, Default-Route) und nach dem Longest Prefix Match entscheiden, wohin ein Paket geht.", exam: ["AP2"] },
    { id: "c-rt-2", topic: "routing", text: "Ich kann statische Routen und Default-Routen auf Cisco-Routern konfigurieren und dabei an den Rückweg denken.", exam: ["AP2"] },
    { id: "c-rt-3", topic: "routing", text: "Ich kann statisches und dynamisches Routing sowie RIP und OSPF (Metrik, Verfahren, administrative Distanz) vergleichen.", exam: ["AP2"] },
    { id: "c-sw-1", topic: "switching-stp", text: "Ich kann erklären, wie ein Switch seine MAC-Tabelle füllt, und Kollisions- und Broadcast-Domänen bestimmen.", exam: ["AP1", "AP2"] },
    { id: "c-sw-2", topic: "switching-stp", text: "Ich kann das Problem von Schleifen erklären, die Root Bridge bestimmen und die Grundidee von STP und Link Aggregation beschreiben.", exam: ["AP2"] },
    { id: "c-vlan-1", topic: "vlan", text: "Ich kann Vorteile von VLANs nennen, Access- und Trunk-Ports unterscheiden und den 802.1Q-Tag erklären.", exam: ["AP2"] },
    { id: "c-vlan-2", topic: "vlan", text: "Ich kann VLANs, Access- und Trunk-Ports sowie Router-on-a-Stick auf Cisco-Geräten konfigurieren und mit show vlan brief prüfen.", exam: ["AP2"] },
    { id: "c-nat-1", topic: "nat-pat", text: "Ich kann statisches NAT, dynamisches NAT, PAT und Port-Forwarding unterscheiden und eine PAT-Tabelle ausfüllen.", exam: ["AP2"] },
    { id: "c-dhcp-1", topic: "dhcp-dns", text: "Ich kann den DHCP-Ablauf (DORA) mit Adressen und Ports beschreiben und Relay, Reservierung und APIPA erklären.", exam: ["AP1", "AP2"] },
    { id: "c-dns-1", topic: "dhcp-dns", text: "Ich kann die DNS-Namensauflösung Schritt für Schritt beschreiben und die Record-Typen A, AAAA, CNAME, MX, NS, PTR, SOA und TXT zuordnen.", exam: ["AP2"] },
    { id: "c-v6-1", topic: "ipv6", text: "Ich kann IPv6-Adressen korrekt kürzen und vollständig ausschreiben.", exam: ["AP1", "AP2"] },
    { id: "c-v6-2", topic: "ipv6", text: "Ich kann IPv6-Adresstypen an ihrem Präfix erkennen und SLAAC, EUI-64, DHCPv6 und Dual Stack erklären.", exam: ["AP1", "AP2"] },
    { id: "c-svc-1", topic: "dienste-sicherheit", text: "Ich kann Netzwerkdienste (HTTP/S, SMTP, IMAP, POP3, NTP, Proxy, VoIP mit QoS) erklären und für Kundenanforderungen auswählen.", exam: ["AP1", "AP2"] },
    { id: "c-svc-2", topic: "dienste-sicherheit", text: "Ich kann ein WLAN planen (Kanäle, Ausleuchtung) und WPA-Personal mit WPA-Enterprise (802.1X, RADIUS) vergleichen.", exam: ["AP1", "AP2"] },
    { id: "c-svc-3", topic: "dienste-sicherheit", text: "Ich kann Firewall-Regeln bzw. ACLs für eine DMZ formulieren und VPN-Varianten (Site-to-Site, Remote Access, IPsec, WireGuard) unterscheiden.", exam: ["AP2"] },
    { id: "c-fs-1", topic: "cisco-fehlersuche", text: "Ich kann einen Cisco-Router bzw. -Switch grundkonfigurieren (Hostname, Passwörter, SSH, Interface-IP, no shutdown, speichern).", exam: ["AP2"] },
    { id: "c-fs-2", topic: "cisco-fehlersuche", text: "Ich kann Ausgaben von ipconfig, ping, tracert, nslookup, arp -a und show ip interface brief interpretieren und Netzwerkfehler systematisch eingrenzen.", exam: ["AP1", "AP2"] },
    { id: "c-rt-4", topic: "routing", text: "Ich kann Gateway-Redundanz mit HSRP/VRRP (virtuelle IP und MAC, Priorität, Preemption) erklären.", exam: ["AP2"] },
    { id: "c-sw-3", topic: "switching-stp", text: "Ich kann einen Switch nach Datenblatt auswählen, ein PoE-Budget berechnen und Fehlerursachen bei Glasfaser-Uplinks nennen.", exam: ["AP2"] },
    { id: "c-nat-2", topic: "nat-pat", text: "Ich kann WAN-Anbindungen (DSL, Kabel, Glasfaser, 5G, MPLS, SD-WAN) und Cloud-Modelle (IaaS, PaaS, SaaS) vergleichen.", exam: ["AP2"] },
    { id: "c-nat-3", topic: "nat-pat", text: "Ich kann Verfügbarkeiten (parallel, in Reihe, Ausfallzeit pro Jahr) und Übertragungszeiten mit Overhead berechnen.", exam: ["AP2"] },
    { id: "c-dns-2", topic: "dhcp-dns", text: "Ich kann Split-Horizon-DNS und DNSSEC erklären und von DNS over TLS/HTTPS abgrenzen.", exam: ["AP2"] },
    { id: "c-svc-4", topic: "dienste-sicherheit", text: "Ich kann SPF, DKIM und DMARC erklären und die nötigen DNS-Einträge für einen Mailserver angeben.", exam: ["AP2"] },
    { id: "c-sub-5", topic: "subnetting", text: "Ich kann prüfen, ob zwei IP-Adressen im selben Subnetz liegen und ob das eingetragene Standardgateway zum Subnetz passt.", exam: ["AP1", "AP2"] },
    { id: "c-sub-6", topic: "subnetting", text: "Ich kann über mehrere Oktette hinweg subnetten (z. B. /8 → /18) und Subnetzmasken sowie Subnetzadressen binär herleiten.", exam: ["AP1", "AP2"] },
    { id: "c-fs-3", topic: "cisco-fehlersuche", text: "Ich kann die ICMP-Nachrichten Echo Request/Reply, Destination Unreachable und Time Exceeded erklären und beschreiben, wie ping und tracert sie nutzen.", exam: ["AP1", "AP2"] },
    { id: "c-sw-4", topic: "switching-stp", text: "Ich kann PoE-Klassen (802.3af/at/bt) mit Leistung am Port und am Gerät zuordnen, ein PoE-Budget prüfen und den Strom mit I = P ÷ U berechnen.", exam: ["AP1", "AP2"] },
    { id: "c-sw-5", topic: "switching-stp", text: "Ich kann Layer-2-Angriffe (MAC-Flooding, ARP-Spoofing, Rogue-DHCP, VLAN-Hopping) erklären und passende Switch-Schutzmaßnahmen zuordnen.", exam: ["AP2"] },
    { id: "c-rt-5", topic: "routing", text: "Ich kann beschreiben, wie ein Router ein Paket weiterleitet (TTL, Longest Prefix Match, ARP, neuer Frame).", exam: ["AP2"] },
  ],
  glossary: [
    { term: "OSI-Modell", def: "Referenzmodell der ISO mit 7 Schichten, das Netzwerkkommunikation in Teilaufgaben gliedert und Protokolle einordnet." },
    { term: "TCP/IP-Modell (DoD-Modell)", def: "Praxisnahes 4-Schichten-Modell des Internets: Anwendung, Transport, Internet, Netzzugang." },
    { term: "PDU", def: "Protocol Data Unit – Dateneinheit einer Schicht: Bit, Frame, Paket, Segment/Datagramm, Daten." },
    { term: "Kapselung", def: "Hinzufügen der Steuerinformationen (Header, ggf. Trailer) jeder Schicht beim Senden; der Empfänger entfernt sie in umgekehrter Reihenfolge." },
    { term: "MAC-Adresse", def: "48 Bit lange physikalische Adresse eines Netzwerkanschlusses (Schicht 2), bestehend aus OUI und Gerätekennung." },
    { term: "OUI", def: "Organizationally Unique Identifier – die ersten 24 Bit einer MAC-Adresse, von der IEEE einem Hersteller zugeteilt." },
    { term: "ARP", def: "Address Resolution Protocol – ermittelt im eigenen Netz zu einer IPv4-Adresse die zugehörige MAC-Adresse." },
    { term: "Port", def: "16-Bit-Nummer (0–65535) der Transportschicht, die einen Dienst bzw. Prozess auf einem Host adressiert." },
    { term: "Socket", def: "Kombination aus IP-Adresse, Portnummer und Transportprotokoll als Endpunkt einer Verbindung." },
    { term: "TCP", def: "Transmission Control Protocol – verbindungsorientiertes, zuverlässiges Transportprotokoll mit Handshake, Bestätigungen und Flusskontrolle." },
    { term: "UDP", def: "User Datagram Protocol – verbindungsloses Transportprotokoll ohne Bestätigungen mit 8-Byte-Header, geeignet für Echtzeitdaten." },
    { term: "Subnetzmaske", def: "32-Bit-Wert, der festlegt, welche Bits einer IPv4-Adresse zum Netzanteil (1) und welche zum Hostanteil (0) gehören." },
    { term: "CIDR", def: "Classless Inter-Domain Routing – klassenlose Adressierung; die Maske wird als Präfixlänge angegeben, z. B. /24." },
    { term: "Broadcast-Adresse", def: "Adresse, deren Hostbits alle 1 sind; ein Paket an sie erreicht alle Geräte im Subnetz." },
    { term: "Subnetting", def: "Aufteilen eines Netzes in kleinere Netze durch Verlängern der Subnetzmaske (Ausleihen von Hostbits)." },
    { term: "VLSM", def: "Variable Length Subnet Mask – Subnetting mit unterschiedlich langen Masken, um Adressen bedarfsgerecht zu vergeben." },
    { term: "APIPA", def: "Automatic Private IP Addressing – selbst vergebene Adresse aus 169.254.0.0/16, wenn kein DHCP-Server antwortet." },
    { term: "Routingtabelle", def: "Tabelle eines Routers mit Zielnetzen, Next Hop bzw. Ausgangs-Interface, Metrik und Herkunft der Einträge." },
    { term: "Default-Route", def: "Route 0.0.0.0/0, die genutzt wird, wenn kein spezifischerer Eintrag passt – meist Richtung Internet." },
    { term: "Administrative Distanz", def: "Vertrauenswert einer Routenquelle bei Cisco (z. B. statisch 1, OSPF 110, RIP 120); die kleinere gewinnt." },
    { term: "OSPF", def: "Open Shortest Path First – Link-State-Routingprotokoll, berechnet mit Dijkstra die kostengünstigsten Wege auf Basis der Bandbreite." },
    { term: "RIP", def: "Routing Information Protocol – Distanzvektor-Protokoll mit der Hop-Anzahl als Metrik (maximal 15 Hops)." },
    { term: "Spanning Tree Protocol (STP)", def: "Protokoll nach IEEE 802.1D, das in redundanten Switch-Netzen Schleifen verhindert, indem es Ports logisch blockiert." },
    { term: "VLAN", def: "Virtuelles LAN – logisch getrennte Broadcast-Domäne innerhalb einer physischen Switch-Infrastruktur." },
    { term: "Trunk", def: "Switch-Port bzw. Verbindung, die Frames mehrerer VLANs mit 802.1Q-Tags über eine Leitung überträgt." },
    { term: "IEEE 802.1Q", def: "Standard für VLAN-Tagging: 4-Byte-Tag im Ethernet-Frame mit 12-Bit-VLAN-ID und 3-Bit-Priorität." },
    { term: "NAT / PAT", def: "Network Address Translation übersetzt private in öffentliche Adressen; PAT unterscheidet zusätzlich über Ports, sodass viele Hosts eine öffentliche IP teilen." },
    { term: "DHCP", def: "Dynamic Host Configuration Protocol – verteilt automatisch IP-Adresse, Maske, Gateway, DNS-Server und weitere Optionen (UDP 67/68)." },
    { term: "DNS", def: "Domain Name System – hierarchischer, verteilter Dienst, der Namen in IP-Adressen auflöst und umgekehrt (Port 53)." },
    { term: "Resource Record", def: "Eintrag in einer DNS-Zone, z. B. A, AAAA, CNAME, MX, NS, PTR, SOA oder TXT." },
    { term: "SLAAC", def: "Stateless Address Autoconfiguration – IPv6-Host bildet seine Adresse aus dem Präfix im Router Advertisement und einer selbst erzeugten Interface-ID." },
    { term: "EUI-64", def: "Verfahren, aus einer 48-Bit-MAC-Adresse eine 64-Bit-Interface-ID zu bilden (FF:FE einfügen, U/L-Bit umkehren)." },
    { term: "NDP", def: "Neighbor Discovery Protocol – IPv6-Protokoll auf Basis von ICMPv6 für Adressauflösung, Router-Erkennung und Duplikatprüfung; ersetzt ARP." },
    { term: "Dual Stack", def: "Paralleler Betrieb von IPv4 und IPv6 auf denselben Geräten und Netzen." },
    { term: "ICMP", def: "Internet Control Message Protocol – Schicht-3-Protokoll für Steuer- und Fehlermeldungen, genutzt von ping (Echo) und tracert (Time Exceeded)." },
    { term: "IEEE 802.1X", def: "Standard für portbasierte Netzwerkzugangskontrolle: Anmeldung jedes Geräts/Nutzers über einen Authentication Server (meist RADIUS)." },
    { term: "RADIUS", def: "Protokoll und Server für zentrale Authentifizierung, Autorisierung und Protokollierung von Netzzugängen (z. B. WLAN-Enterprise, VPN)." },
    { term: "DMZ", def: "Demilitarisierte Zone – durch Firewalls abgetrenntes Netzsegment für Server, die aus dem Internet erreichbar sein müssen." },
    { term: "ACL", def: "Access Control List – geordnete Liste von Erlauben-/Verbieten-Regeln auf Routern oder Firewalls; die erste passende Regel gilt." },
    { term: "VPN", def: "Virtual Private Network – verschlüsselter Tunnel über ein unsicheres Netz, z. B. mit IPsec, TLS oder WireGuard." },
    { term: "QoS", def: "Quality of Service – Priorisierung zeitkritischen Verkehrs (z. B. Sprache), um Latenz, Jitter und Paketverlust gering zu halten." },
    { term: "FHRP (HSRP/VRRP)", def: "First Hop Redundancy Protocols – zwei oder mehr Router stellen gemeinsam eine virtuelle Gateway-Adresse bereit, damit das Standardgateway kein Single Point of Failure ist." },
    { term: "PoE", def: "Power over Ethernet – Stromversorgung von Endgeräten über das Netzwerkkabel nach IEEE 802.3af/at/bt; die Summe darf das PoE-Budget des Switches nicht überschreiten." },
    { term: "SFP", def: "Small Form-factor Pluggable – steckbares Transceiver-Modul für Kupfer- oder Glasfaser-Uplinks (SFP bis 1 Gbit/s, SFP+ bis 10 Gbit/s)." },
    { term: "Link Aggregation (LACP)", def: "Bündelung mehrerer physischer Links zu einem logischen Link nach IEEE 802.1AX für mehr Bandbreite und Redundanz." },
    { term: "SD-WAN", def: "Software-Defined WAN – zentral per Software gesteuerte Vernetzung von Standorten über mehrere, oft günstige Leitungen mit richtlinienbasierter Verteilung des Verkehrs." },
    { term: "Verfügbarkeit", def: "Anteil der Zeit, in der ein System funktioniert: A = MTBF ÷ (MTBF + MTTR), meist in Prozent pro Jahr angegeben." },
    { term: "Split-Horizon-DNS", def: "DNS-Konfiguration, bei der interne und externe Clients für denselben Namen unterschiedliche Antworten erhalten." },
    { term: "DNSSEC", def: "Erweiterung von DNS, die Zonendaten kryptografisch signiert, damit gefälschte Antworten erkannt werden; sie verschlüsselt nicht." },
    { term: "SPF / DKIM / DMARC", def: "DNS-basierte Verfahren gegen gefälschte Absender: erlaubte Mailserver (SPF), Mail-Signatur (DKIM) und Richtlinie mit Berichten (DMARC)." },
    { term: "IPsec", def: "Protokollfamilie zur Absicherung von IP-Paketen auf Schicht 3; IKE handelt Schlüssel aus, ESP verschlüsselt, oft im Tunnelmodus für VPNs." },
    { term: "TTL (Time to Live)", def: "Feld im IPv4-Header, das jeder Router um 1 verringert; bei 0 wird das Paket verworfen (bei IPv6 heißt das Feld Hop Limit)." },
    { term: "Blockgröße", def: "Abstand zwischen zwei Netzadressen im interessanten Oktett: 256 − Maskenwert, z. B. 32 bei 255.255.255.224." },
    { term: "Wildcard-Maske", def: "Invertierte Subnetzmaske (z. B. 0.0.0.255 zu 255.255.255.0), die Cisco in ACLs und im OSPF-network-Befehl verwendet." },
    { term: "Gratuitous ARP", def: "Unaufgeforderte ARP-Nachricht, mit der ein Gerät seine eigene IP-MAC-Zuordnung bekannt gibt, z. B. beim Start oder nach einer Gateway-Umschaltung." },
    { term: "Port Security", def: "Switch-Funktion, die die Zahl bzw. die Werte der MAC-Adressen je Port begrenzt und den Port bei Verstoß sperrt – Schutz u. a. gegen MAC-Flooding." },
    { term: "PSE / PD", def: "Power Sourcing Equipment (liefert PoE, z. B. Switch) und Powered Device (wird per PoE versorgt, z. B. Access Point, Kamera)." },
  ],
  links: [
    { title: "Cisco Networking Academy (Packet Tracer, Netzwerkkurse)", url: "https://www.netacad.com/", note: "Download von Packet Tracer nach kostenloser Anmeldung, Einstiegskurse zu Netzwerken" },
    { title: "IANA – Service Name and Transport Protocol Port Number Registry", url: "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml", note: "offizielle Liste aller registrierten Portnummern" },
    { title: "RFC 1918 – Address Allocation for Private Internets", url: "https://www.rfc-editor.org/rfc/rfc1918", note: "Definition der privaten IPv4-Bereiche (englisch)" },
    { title: "RFC 5952 – Empfehlung zur Textdarstellung von IPv6-Adressen", url: "https://www.rfc-editor.org/rfc/rfc5952", note: "Regeln zum Kürzen von IPv6-Adressen (englisch)" },
    { title: "Microsoft Learn – ipconfig", url: "https://learn.microsoft.com/de-de/windows-server/administration/windows-commands/ipconfig", note: "Parameter von ipconfig; über die Navigation auch ping, tracert, nslookup, arp" },
    { title: "BSI – Bundesamt für Sicherheit in der Informationstechnik", url: "https://www.bsi.bund.de/", note: "IT-Grundschutz-Kompendium, u. a. Bausteine zu Netzarchitektur, Router/Switches und WLAN" },
    { title: "Wikipedia – OSI-Modell", url: "https://de.wikipedia.org/wiki/OSI-Modell", note: "ergänzende Übersicht" }
  ]
});
