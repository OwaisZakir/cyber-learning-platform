export interface Lesson {
  title: string;
  content: string;
  keyPoints: string[];
  ethicalNote?: string;
  blackHatWarning?: string;
  protectionTips?: string[];
}

export interface ModuleData {
  id: number;
  title: string;
  duration: string;
  prerequisites: string;
  description: string;
  objectives: string[];
  topics: string[];
  lessons: Lesson[];
  labs: string[];
  tools: string[];
  assessment: string;
  instructorNotes: string;
  color: string;
}

export const modulesData: ModuleData[] = [
  {
    id: 0,
    title: "Digital Literacy & Computer Basics",
    duration: "1-2 Weeks",
    prerequisites: "None",
    description: "Build a strong foundation in computer basics. This module removes tech fear and introduces fundamental concepts essential for any cybersecurity journey.",
    objectives: [
      "Understand computer components and OS basics",
      "Master file/folder management and productivity apps",
      "Learn internet browsing safety and email best practices",
      "Recognize phishing attempts and common online threats"
    ],
    topics: [
      "Hardware vs Software, Storage, RAM, CPU fundamentals",
      "How Operating Systems work at a high level",
      "Browser basics, extensions, cookies, and privacy",
      "Safe email usage and phishing recognition",
      "Digital hygiene and password management"
    ],
    lessons: [
      {
        title: "Understanding Computer Hardware",
        content: "A computer consists of physical components (hardware) that work together. The CPU (Central Processing Unit) is the 'brain' that processes instructions. RAM (Random Access Memory) is temporary fast memory for running programs. Storage (HDD/SSD) keeps your files permanently. Understanding these helps you identify security implications - malware can hide in memory, attackers can target storage for data theft.",
        keyPoints: [
          "CPU executes all instructions - can be exploited via malicious code",
          "RAM is volatile - forensics can extract sensitive data before shutdown",
          "Storage persistence means deleted files can often be recovered",
          "BIOS/UEFI is the first code that runs - rootkits target this layer"
        ],
        ethicalNote: "Always get written permission before examining someone else's hardware or extracting data from storage devices. Unauthorized access to computer systems is illegal under most cyber laws.",
        blackHatWarning: "Black hats use hardware attacks like 'evil maid attacks' (physical access to install keyloggers), BadUSB devices that impersonate keyboards, and cold boot attacks to extract encryption keys from RAM.",
        protectionTips: [
          "Enable full disk encryption (BitLocker, LUKS)",
          "Set BIOS/UEFI passwords",
          "Use physical security locks",
          "Never leave devices unattended"
        ]
      },
      {
        title: "Operating Systems Overview",
        content: "An Operating System (OS) manages hardware resources and provides services for applications. Windows, Linux, and macOS are the main desktop OS types. The OS controls user permissions, file access, and network communication - all critical security boundaries. Attackers target OS vulnerabilities to gain control over systems.",
        keyPoints: [
          "Kernel is the core - kernel exploits give complete system control",
          "User accounts and permissions limit damage from breaches",
          "System services run in background - can be hijacked by malware",
          "Updates patch security vulnerabilities - delays increase risk"
        ],
        ethicalNote: "Learning about OS internals should be for defensive purposes. Never exploit vulnerabilities on systems you don't own or have explicit permission to test.",
        blackHatWarning: "Attackers exploit unpatched OS vulnerabilities (zero-days), create fake update notifications to trick users, and use privilege escalation to move from limited user to admin access.",
        protectionTips: [
          "Enable automatic security updates",
          "Use standard user accounts for daily work, not admin",
          "Disable unnecessary services",
          "Monitor running processes regularly"
        ]
      },
      {
        title: "Browser Security & Privacy",
        content: "Web browsers are the gateway to the internet and a major attack surface. Cookies track your activity, JavaScript can execute code, and browser extensions have deep access. Understanding browser security helps prevent drive-by downloads, credential theft, and tracking.",
        keyPoints: [
          "HTTPS encrypts traffic - look for the padlock icon",
          "Cookies can track you across sites - attackers steal session cookies",
          "Extensions can read/modify all page content",
          "Browser exploits can escape sandbox and compromise system"
        ],
        ethicalNote: "Respecting user privacy is essential. Never attempt to steal cookies, inject scripts into others' browsers, or create tracking mechanisms without explicit consent.",
        blackHatWarning: "Criminals use browser exploits to install malware, create fake login pages (phishing), hijack sessions via cookie theft, and distribute malicious browser extensions that steal data.",
        protectionTips: [
          "Keep browser updated",
          "Use reputable extensions only",
          "Enable 'Do Not Track' and privacy settings",
          "Use ad blockers to prevent malvertising"
        ]
      },
      {
        title: "Email Security & Phishing Recognition",
        content: "Email remains the #1 attack vector for cybercriminals. Phishing emails impersonate trusted entities to steal credentials or deliver malware. Spear phishing targets specific individuals with researched, personalized attacks. Business Email Compromise (BEC) costs organizations billions annually.",
        keyPoints: [
          "Check sender address carefully - look for subtle misspellings",
          "Hover over links before clicking to see true destination",
          "Attachments can contain malware - be cautious with unexpected files",
          "Urgency and fear tactics are red flags"
        ],
        ethicalNote: "Creating phishing emails or impersonating others via email is illegal and unethical. Security awareness testing should only be done with proper authorization and employee notification.",
        blackHatWarning: "Attackers use email spoofing to fake sender addresses, create convincing fake login portals, embed malware in Office documents, and use social engineering to manipulate victims emotionally.",
        protectionTips: [
          "Enable multi-factor authentication on all accounts",
          "Verify unexpected requests through a separate channel",
          "Report suspicious emails to IT/security team",
          "Use email filtering and anti-phishing tools"
        ]
      },
      {
        title: "Password Security & Digital Hygiene",
        content: "Passwords are the primary authentication mechanism, yet weak and reused passwords enable most breaches. Password managers, MFA, and good hygiene practices significantly reduce risk. Understanding how passwords are attacked helps create better defenses.",
        keyPoints: [
          "Password length matters more than complexity",
          "Password reuse means one breach compromises all accounts",
          "MFA adds critical second layer of protection",
          "Password managers generate and store unique passwords"
        ],
        ethicalNote: "Never attempt to crack, guess, or bypass passwords on accounts you don't own. Password testing should only be performed on your own accounts or with explicit written permission.",
        blackHatWarning: "Criminals use credential stuffing (trying leaked passwords), brute force attacks, keyloggers, and social engineering to obtain passwords. Massive password databases are sold on dark web markets.",
        protectionTips: [
          "Use a password manager (Bitwarden, 1Password)",
          "Enable MFA everywhere possible",
          "Use passphrases - 4+ random words",
          "Check haveibeenpwned.com for leaked credentials"
        ]
      }
    ],
    labs: [
      "Create user accounts in Windows with proper permissions",
      "Install and navigate a Linux VM (Ubuntu) from scratch",
      "Perform basic file operations via CLI and GUI",
      "Identify phishing emails in a simulated inbox"
    ],
    tools: ["VirtualBox", "Ubuntu ISO", "Windows VM"],
    assessment: "Short quiz covering core concepts + 3 CLI tasks submission demonstrating file management skills",
    instructorNotes: "Use very basic analogies; aim to remove tech fear. Focus on building confidence before technical skills.",
    color: "hsl(180, 100%, 50%)"
  },
  {
    id: 1,
    title: "Operating Systems Deep-Dive (Linux + Windows)",
    duration: "4-6 Weeks",
    prerequisites: "Module 0",
    description: "Master command-line fluency across Linux and Windows. Understand system internals, services, users, and permissions that form the backbone of security operations.",
    objectives: [
      "Achieve command-line fluency in Linux and Windows PowerShell",
      "Understand system internals, services, and permissions",
      "Master file systems and process management",
      "Configure virtualization and snapshot management"
    ],
    topics: [
      "Linux: file permissions (chmod, chown), process tools (ps, top, htop)",
      "Package managers: apt, yum, pacman",
      "Bash: pipes, redirection, grep, awk, sed scripting",
      "Windows: Registry, Services, Task Scheduler, Event Viewer",
      "Virtualization concepts and snapshot management"
    ],
    lessons: [
      {
        title: "Linux File System & Permissions",
        content: "Linux uses a hierarchical file system starting from root (/). Everything in Linux is a file - devices, processes, and directories. File permissions (read, write, execute) control access for owner, group, and others. SUID/SGID bits allow privilege escalation - a common attack vector when misconfigured.",
        keyPoints: [
          "/etc contains system configuration - attackers target /etc/passwd, /etc/shadow",
          "/var/log holds logs - attackers try to cover tracks here",
          "SUID binaries run as file owner - misconfigured ones enable privilege escalation",
          "Symbolic links can be exploited for race conditions"
        ],
        ethicalNote: "Modifying system files without authorization is illegal. Always work in lab environments when practicing. Permission escalation techniques should only be used in authorized penetration tests.",
        blackHatWarning: "Attackers look for world-writable directories, misconfigured SUID binaries, and weak file permissions. They plant backdoors in startup scripts and modify system configurations for persistence.",
        protectionTips: [
          "Audit SUID/SGID files regularly: find / -perm /4000 2>/dev/null",
          "Use principle of least privilege for all accounts",
          "Implement file integrity monitoring (AIDE, Tripwire)",
          "Restrict access to sensitive directories"
        ]
      },
      {
        title: "Linux Process Management & Monitoring",
        content: "Processes are running instances of programs. Each has a PID, owner, and resource allocation. Understanding processes helps identify malicious activity - unauthorized processes, unusual resource usage, or suspicious parent-child relationships indicate compromise.",
        keyPoints: [
          "ps aux shows all processes - look for unusual entries",
          "top/htop shows real-time resource usage",
          "/proc filesystem contains process information",
          "Zombie and orphan processes can indicate issues"
        ],
        ethicalNote: "Process monitoring should be for system administration and security purposes. Never monitor or manipulate processes on systems you don't own.",
        blackHatWarning: "Malware hides as legitimate processes, uses process injection to run inside trusted programs, and manipulates /proc to hide from monitoring. Rootkits modify kernel to hide processes completely.",
        protectionTips: [
          "Use process whitelisting where possible",
          "Monitor for unusual process trees",
          "Implement endpoint detection and response (EDR)",
          "Check for hidden processes using multiple tools"
        ]
      },
      {
        title: "Bash Scripting for Security",
        content: "Bash scripting automates repetitive tasks and enables powerful security operations. From log analysis to system hardening, scripts multiply effectiveness. Understanding bash also helps recognize malicious scripts used in attacks.",
        keyPoints: [
          "Variables, loops, and conditionals enable complex logic",
          "Pipes (|) and redirection connect commands",
          "grep, awk, sed for text processing and log analysis",
          "Cron jobs automate scheduled tasks"
        ],
        ethicalNote: "Only run scripts on systems you have permission to access. Never execute untrusted scripts from the internet without reviewing them first. Malicious scripts can destroy data or compromise systems.",
        blackHatWarning: "Attackers use bash scripts for initial access (dropper scripts), lateral movement, data exfiltration, and persistence. Obfuscated scripts hide malicious intent.",
        protectionTips: [
          "Review all scripts before execution",
          "Use restricted shells where appropriate",
          "Monitor command history and audit logs",
          "Implement script signing and verification"
        ]
      },
      {
        title: "Windows Registry & Services",
        content: "The Windows Registry is a hierarchical database storing system and application settings. Services run in the background providing functionality. Both are critical attack surfaces - malware achieves persistence through registry keys and malicious services.",
        keyPoints: [
          "HKEY_LOCAL_MACHINE contains system-wide settings",
          "Run/RunOnce keys execute programs at startup",
          "Services can run with SYSTEM privileges",
          "Scheduled Tasks provide another persistence mechanism"
        ],
        ethicalNote: "Registry and service modifications can destabilize systems. Only make changes in authorized lab environments. Unauthorized modification of Windows systems is illegal.",
        blackHatWarning: "Malware adds registry keys for persistence, creates malicious services running as SYSTEM, hijacks legitimate service DLLs, and schedules tasks for periodic execution.",
        protectionTips: [
          "Monitor registry changes with Sysmon",
          "Audit startup locations regularly",
          "Use Windows Defender Application Control",
          "Implement service account restrictions"
        ]
      },
      {
        title: "Windows PowerShell Security",
        content: "PowerShell is a powerful administration tool that's also heavily abused by attackers. Living-off-the-land attacks use built-in tools like PowerShell to avoid detection. Understanding PowerShell security helps both offense and defense.",
        keyPoints: [
          "Execution policies can be bypassed easily",
          "PowerShell remoting enables lateral movement",
          "Constrained Language Mode limits capabilities",
          "Script block logging captures executed code"
        ],
        ethicalNote: "PowerShell capabilities should be used responsibly for administration and authorized testing only. Remote PowerShell execution without permission is unauthorized access.",
        blackHatWarning: "Attackers use PowerShell for fileless malware, download and execute payloads in memory, bypass AV with obfuscation, and leverage remoting for lateral movement.",
        protectionTips: [
          "Enable PowerShell logging (Script Block, Module, Transcription)",
          "Use Constrained Language Mode",
          "Implement Just Enough Administration (JEA)",
          "Monitor for encoded commands"
        ]
      },
      {
        title: "Virtualization for Security Labs",
        content: "Virtual machines provide isolated environments for security testing. Understanding virtualization helps build safe lab environments and also reveals attack surfaces - VM escapes can compromise host systems.",
        keyPoints: [
          "VMs provide isolation but aren't perfect security boundaries",
          "Snapshots enable quick recovery and testing",
          "Network isolation prevents lab attacks from escaping",
          "Shared folders can bridge host and guest"
        ],
        ethicalNote: "Lab environments should be completely isolated from production networks. Never allow lab traffic to reach the internet or corporate systems. Maintain clear boundaries.",
        blackHatWarning: "Advanced attackers attempt VM escape exploits, target hypervisors directly, and use detection techniques to avoid analysis in sandboxes. They also target cloud virtualization infrastructure.",
        protectionTips: [
          "Use NAT or host-only networking for labs",
          "Keep hypervisor software updated",
          "Don't use shared folders with sensitive data",
          "Assume labs may be compromised"
        ]
      }
    ],
    labs: [
      "Build Kali + target VMs with proper networking",
      "Write bash scripts to parse and analyze log files",
      "Use PowerShell to enumerate services and scheduled tasks",
      "Configure user permissions and audit policies"
    ],
    tools: ["Kali Linux", "Ubuntu", "Windows 10/Server", "VirtualBox", "VMware"],
    assessment: "Timed CLI practical exam covering 40 essential commands across Linux and Windows",
    instructorNotes: "Create a checklist of 40 CLI commands students must master. Practice daily.",
    color: "hsl(140, 100%, 45%)"
  },
  {
    id: 2,
    title: "Networking Fundamentals",
    duration: "3-5 Weeks",
    prerequisites: "Module 1",
    description: "Understand the language of the internet. From TCP/IP to DNS, master the networking concepts that every security professional must know.",
    objectives: [
      "Understand TCP/IP model, routing, and switching",
      "Master DNS, DHCP, NAT, and HTTP/HTTPS internals",
      "Perform network troubleshooting and analysis",
      "Capture and analyze network traffic"
    ],
    topics: [
      "OSI & TCP/IP protocol stacks in depth",
      "IP addressing, subnetting, CIDR, and gateways",
      "TCP 3-way handshake, ports, and protocol behavior",
      "DNS resolution flow and record types",
      "HTTPS/TLS handshake and certificate validation"
    ],
    lessons: [
      {
        title: "OSI Model & TCP/IP Stack",
        content: "The OSI model provides a conceptual framework for understanding network communication in 7 layers. The TCP/IP model is the practical implementation used on the internet. Each layer has specific functions and attack surfaces - understanding these layers helps identify where attacks occur.",
        keyPoints: [
          "Layer 2 (Data Link) - MAC addresses, ARP poisoning attacks",
          "Layer 3 (Network) - IP addressing, routing attacks",
          "Layer 4 (Transport) - TCP/UDP, port scanning, SYN floods",
          "Layer 7 (Application) - HTTP, DNS, application-level attacks"
        ],
        ethicalNote: "Network analysis should only be performed on networks you own or have explicit written permission to test. Capturing traffic on unauthorized networks is illegal wiretapping.",
        blackHatWarning: "Attackers exploit each layer: ARP spoofing for man-in-the-middle at Layer 2, IP spoofing at Layer 3, port scanning and DoS at Layer 4, and application exploits at Layer 7.",
        protectionTips: [
          "Implement network segmentation",
          "Use encryption at multiple layers",
          "Enable port security on switches",
          "Monitor for unusual traffic patterns"
        ]
      },
      {
        title: "IP Addressing & Subnetting",
        content: "IP addresses identify devices on networks. IPv4 uses 32-bit addresses, IPv6 uses 128-bit. Subnetting divides networks into smaller segments for security and efficiency. CIDR notation represents address ranges. Understanding addressing helps with network reconnaissance and defense.",
        keyPoints: [
          "Private IP ranges: 10.x.x.x, 172.16-31.x.x, 192.168.x.x",
          "Subnet masks define network boundaries",
          "CIDR /24 = 256 addresses, /16 = 65,536 addresses",
          "NAT translates between private and public addresses"
        ],
        ethicalNote: "IP scanning and enumeration should only target your own networks or authorized test environments. Scanning internet-facing IPs without permission can be considered an attack.",
        blackHatWarning: "Attackers scan IP ranges to find targets, identify network topology through reconnaissance, and exploit misconfigured NAT or routing to reach internal systems.",
        protectionTips: [
          "Use proper network segmentation",
          "Implement firewall rules between segments",
          "Monitor for unauthorized scanning",
          "Use intrusion detection systems"
        ]
      },
      {
        title: "TCP/UDP & Port Communication",
        content: "TCP provides reliable, ordered delivery with the 3-way handshake (SYN, SYN-ACK, ACK). UDP is faster but unreliable. Ports identify applications - understanding port behavior is essential for identifying services and attacks.",
        keyPoints: [
          "Well-known ports: 22 (SSH), 80 (HTTP), 443 (HTTPS), 3389 (RDP)",
          "TCP handshake can be exploited for SYN flood DoS",
          "Port scanning reveals running services",
          "Unusual port usage may indicate backdoors"
        ],
        ethicalNote: "Port scanning is often the first step in authorized penetration testing but can be illegal without permission. Always have written authorization before scanning.",
        blackHatWarning: "Attackers use port scanning (Nmap) to find open services, exploit known vulnerabilities in services, use non-standard ports to hide C2 communication, and perform SYN floods for DoS.",
        protectionTips: [
          "Close unnecessary ports",
          "Use firewalls to filter traffic",
          "Implement rate limiting",
          "Monitor for port scanning activity"
        ]
      },
      {
        title: "DNS Deep Dive",
        content: "DNS translates domain names to IP addresses. The resolution process involves recursive queries through multiple servers. DNS is critical infrastructure and a major attack surface - DNS attacks can redirect users to malicious sites or exfiltrate data.",
        keyPoints: [
          "DNS record types: A, AAAA, CNAME, MX, TXT, NS",
          "DNS resolution: stub resolver → recursive → authoritative",
          "DNS cache poisoning redirects users",
          "DNS tunneling hides data in DNS queries"
        ],
        ethicalNote: "DNS manipulation can cause widespread disruption. Only perform DNS testing in isolated lab environments. Production DNS changes require careful planning and authorization.",
        blackHatWarning: "Attackers use DNS for C2 communication (tunneling), cache poisoning to redirect users, domain hijacking, and reconnaissance to map target infrastructure. DNS is often allowed through firewalls.",
        protectionTips: [
          "Implement DNSSEC where possible",
          "Use reputable DNS resolvers",
          "Monitor for DNS tunneling",
          "Enable DNS query logging"
        ]
      },
      {
        title: "HTTPS & TLS Security",
        content: "TLS encrypts communication between clients and servers. The TLS handshake establishes a secure channel using certificates and key exchange. Understanding TLS helps identify misconfigurations and attack opportunities.",
        keyPoints: [
          "TLS 1.3 is the current secure standard",
          "Certificates verify server identity",
          "Certificate chain leads to trusted root CAs",
          "Weak configurations enable downgrade attacks"
        ],
        ethicalNote: "Intercepting HTTPS traffic (even for analysis) requires proper authorization. TLS interception in corporate environments should be disclosed to users.",
        blackHatWarning: "Attackers use SSL stripping to downgrade connections, create fake certificates, exploit weak cipher suites, and perform man-in-the-middle attacks with rogue certificates.",
        protectionTips: [
          "Use TLS 1.3 or 1.2 only",
          "Implement HSTS (HTTP Strict Transport Security)",
          "Use certificate transparency monitoring",
          "Disable weak cipher suites"
        ]
      },
      {
        title: "Packet Analysis with Wireshark",
        content: "Wireshark captures and analyzes network packets in real-time. It's essential for troubleshooting, security analysis, and understanding protocols. Packet analysis reveals exactly what's happening on the network - including attacks in progress.",
        keyPoints: [
          "Capture filters reduce noise during collection",
          "Display filters help analyze specific traffic",
          "Follow TCP streams to see full conversations",
          "Export objects to extract files from traffic"
        ],
        ethicalNote: "Packet capture on networks you don't own or manage is illegal. Even on your own network, be careful about capturing others' traffic. Always inform users in corporate environments.",
        blackHatWarning: "Attackers use packet capture to steal credentials (unencrypted protocols), analyze victim traffic patterns, and intercept sensitive data. They may compromise network devices to enable capture.",
        protectionTips: [
          "Encrypt all sensitive traffic",
          "Use network segmentation",
          "Monitor for promiscuous mode NICs",
          "Implement detection for ARP spoofing"
        ]
      }
    ],
    labs: [
      "Packet capture with Wireshark: analyze HTTP, DNS, TLS traffic",
      "Build a small network in VMs with static IP configuration",
      "Use traceroute, ping, netstat, ss for diagnostics",
      "Configure basic iptables firewall rules"
    ],
    tools: ["Wireshark", "tcpdump", "GNS3", "Netcat"],
    assessment: "Packet analysis assignment identifying security issues + subnetting calculation test",
    instructorNotes: "Use visual diagrams and packet walkthroughs. Draw everything!",
    color: "hsl(200, 100%, 50%)"
  },
  {
    id: 3,
    title: "Programming for Security",
    duration: "4-6 Weeks",
    prerequisites: "Module 1",
    description: "Learn to automate security tasks with Python and Bash. Understand just enough JavaScript to grasp web security concepts.",
    objectives: [
      "Automate security tasks with Python and Bash",
      "Build simple network scanners and parsers",
      "Understand JavaScript for web security context",
      "Write clean, maintainable security scripts"
    ],
    topics: [
      "Python basics: requests, sockets, file I/O, parsing",
      "Building port scanners and vulnerability checkers",
      "Bash scripting for security operations",
      "JavaScript fundamentals for XSS understanding",
      "Regular expressions for log analysis"
    ],
    lessons: [
      {
        title: "Python for Security Automation",
        content: "Python is the go-to language for security professionals due to its simplicity and powerful libraries. From network scripts to exploit development, Python enables rapid tool creation. Understanding Python also helps analyze malware written in Python.",
        keyPoints: [
          "requests library for HTTP interaction",
          "socket library for network programming",
          "subprocess for system command execution",
          "argparse for building proper CLI tools"
        ],
        ethicalNote: "Security tools should only be used against authorized targets. Creating tools that could be misused carries ethical responsibility. Always include usage warnings in your scripts.",
        blackHatWarning: "Attackers write Python exploits, create custom malware, automate attacks, and build C2 infrastructure. Python's popularity means many attack tools are Python-based.",
        protectionTips: [
          "Analyze suspicious Python scripts before running",
          "Use virtual environments to isolate tools",
          "Review dependencies for supply chain attacks",
          "Implement code signing for scripts"
        ]
      },
      {
        title: "Building a Port Scanner",
        content: "Port scanners identify open ports and running services on target systems. Building one teaches socket programming, concurrency, and network fundamentals. Understanding how scanners work helps both offense and defense.",
        keyPoints: [
          "TCP connect scan - full handshake",
          "SYN scan requires raw sockets and root privileges",
          "Threading/asyncio for speed",
          "Banner grabbing for service identification"
        ],
        ethicalNote: "Port scanning without permission is often illegal. Only scan your own systems or authorized test targets. Many organizations monitor for and block scanning activity.",
        blackHatWarning: "Attackers scan for vulnerable services, identify attack surfaces, and use distributed scanning to avoid detection. They scan the entire internet for specific vulnerabilities.",
        protectionTips: [
          "Close unnecessary ports",
          "Use firewall rules to limit exposure",
          "Implement port scan detection",
          "Change default ports for sensitive services"
        ]
      },
      {
        title: "Web Scraping & Automation",
        content: "Web scraping extracts data from websites programmatically. For security, it's used in reconnaissance, vulnerability scanning, and data collection. Understanding scraping also helps defend against automated attacks.",
        keyPoints: [
          "requests + BeautifulSoup for static content",
          "Selenium for JavaScript-rendered pages",
          "Rate limiting and delays to avoid detection",
          "Handling authentication and sessions"
        ],
        ethicalNote: "Respect robots.txt and terms of service. Aggressive scraping can be seen as a denial of service attack. Only scrape public data or data you're authorized to access.",
        blackHatWarning: "Attackers scrape for email addresses, personal data, and credentials. They automate account enumeration, content theft, and price manipulation attacks.",
        protectionTips: [
          "Implement rate limiting",
          "Use CAPTCHAs for sensitive functions",
          "Monitor for unusual access patterns",
          "Block known scraper user agents"
        ]
      },
      {
        title: "JavaScript for Web Security",
        content: "JavaScript runs in browsers and enables dynamic web applications. Understanding JavaScript is essential for web security - XSS attacks inject malicious JavaScript, and many vulnerabilities involve client-side code.",
        keyPoints: [
          "DOM manipulation can be exploited for XSS",
          "Event handlers can execute arbitrary code",
          "Cookies and localStorage store sensitive data",
          "fetch/XMLHttpRequest enable cross-origin attacks"
        ],
        ethicalNote: "Writing malicious JavaScript to attack users is illegal. XSS testing should only occur on applications you own or have explicit permission to test.",
        blackHatWarning: "Attackers inject JavaScript to steal cookies, redirect users, keylog input, mine cryptocurrency, and create self-propagating worms. Drive-by downloads exploit browser JS engines.",
        protectionTips: [
          "Implement Content Security Policy (CSP)",
          "Use HttpOnly and Secure cookie flags",
          "Sanitize all user input",
          "Keep browsers and frameworks updated"
        ]
      },
      {
        title: "Log Analysis & Regex",
        content: "Security logs contain evidence of attacks and system activity. Regular expressions enable powerful pattern matching for analysis. Parsing logs is essential for incident response and threat hunting.",
        keyPoints: [
          "Common log formats: Apache, Windows Events, Syslog",
          "Regex patterns for IPs, timestamps, errors",
          "Grep for quick searches, Python for complex analysis",
          "Correlation across multiple log sources"
        ],
        ethicalNote: "Log data often contains sensitive information. Handle logs according to privacy policies and regulations. Unauthorized access to logs is a security violation.",
        blackHatWarning: "Attackers try to delete or modify logs to cover tracks. They target logging infrastructure to disable monitoring and may inject false entries to confuse analysts.",
        protectionTips: [
          "Send logs to remote, secure SIEM",
          "Implement log integrity verification",
          "Alert on log deletion attempts",
          "Use multiple log sources for correlation"
        ]
      },
      {
        title: "Building Security Tools",
        content: "Creating custom tools teaches deep understanding and provides tailored solutions. From simple scripts to complex frameworks, building tools is a core security skill. Good tools are reliable, documented, and ethically designed.",
        keyPoints: [
          "Start simple, iterate based on needs",
          "Error handling prevents crashes",
          "Documentation enables sharing",
          "CLI interfaces make tools usable"
        ],
        ethicalNote: "Tools you create may be used by others. Include clear usage guidelines, authorized-use warnings, and consider potential for misuse. Don't publish tools that only serve malicious purposes.",
        blackHatWarning: "Criminals create and sell hacking tools, exploit kits, and malware. They contribute to open-source security tools to find vulnerabilities or add backdoors.",
        protectionTips: [
          "Review tools before use",
          "Download from trusted sources",
          "Check code signatures",
          "Monitor tool behavior"
        ]
      }
    ],
    labs: [
      "Write a simple port scanner in Python from scratch",
      "Create a script to parse access logs and extract suspicious IPs",
      "Build a basic web scraper for reconnaissance",
      "Demonstrate DOM manipulation for XSS understanding"
    ],
    tools: ["Python 3", "pip", "Virtualenv", "VS Code", "Bash"],
    assessment: "Submit 2 working security scripts with code review and documentation",
    instructorNotes: "Emphasize secure coding habits. Developers should focus on input validation.",
    color: "hsl(45, 100%, 50%)"
  },
  {
    id: 4,
    title: "Cybersecurity Fundamentals & Ethics",
    duration: "2-3 Weeks",
    prerequisites: "Module 0",
    description: "Understand the threat landscape, CIA triad, and legal boundaries. This module establishes the ethical foundation for all security work.",
    objectives: [
      "Understand threat categories and the CIA triad",
      "Learn legal boundaries (PECA and international laws)",
      "Master responsible disclosure processes",
      "Develop professional ethics and code of conduct"
    ],
    topics: [
      "Types of threats: malware, social engineering, APTs",
      "Attack surface analysis and risk assessment",
      "Encryption vs hashing: when to use each",
      "National & international cyber law (PECA overview)",
      "Responsible disclosure and bug bounty ethics"
    ],
    lessons: [
      {
        title: "The CIA Triad & Security Principles",
        content: "Confidentiality, Integrity, and Availability form the foundation of information security. Every security decision balances these three principles. Understanding CIA helps evaluate threats and design defenses.",
        keyPoints: [
          "Confidentiality - only authorized access to data",
          "Integrity - data is accurate and unmodified",
          "Availability - systems are accessible when needed",
          "Additional: Non-repudiation, Authentication, Authorization"
        ],
        ethicalNote: "Security professionals are trusted with confidential data. Maintaining confidentiality is both an ethical and legal obligation. Violating trust destroys careers.",
        blackHatWarning: "Attackers target all three: stealing data (confidentiality), modifying records (integrity), and causing outages (availability). Ransomware attacks all three simultaneously.",
        protectionTips: [
          "Classify data by sensitivity",
          "Implement access controls based on need-to-know",
          "Use cryptographic integrity verification",
          "Build redundancy for availability"
        ]
      },
      {
        title: "Threat Landscape & Attack Vectors",
        content: "The threat landscape includes nation-states, cybercriminals, hacktivists, and insiders. Each has different motivations and capabilities. Understanding threats helps prioritize defenses.",
        keyPoints: [
          "APTs (Advanced Persistent Threats) - sophisticated, long-term",
          "Cybercriminals - financially motivated",
          "Hacktivists - ideologically motivated",
          "Insiders - have authorized access"
        ],
        ethicalNote: "Understanding attacks is for defense. Using this knowledge to attack is criminal. The line between research and crime is clear - permission.",
        blackHatWarning: "Criminal groups operate like businesses with customer support. Nation-states have virtually unlimited resources. Insider threats are hardest to detect. The ecosystem is interconnected.",
        protectionTips: [
          "Know your adversaries (threat modeling)",
          "Prioritize defenses based on likelihood and impact",
          "Don't ignore insider threat",
          "Stay informed about emerging threats"
        ]
      },
      {
        title: "Cryptography Fundamentals",
        content: "Cryptography protects data confidentiality and integrity. Encryption makes data unreadable without the key. Hashing creates one-way fingerprints. Understanding crypto is essential for secure system design.",
        keyPoints: [
          "Symmetric encryption - same key encrypts and decrypts (AES)",
          "Asymmetric encryption - public/private key pairs (RSA)",
          "Hashing - one-way function for passwords (bcrypt)",
          "Digital signatures verify authenticity"
        ],
        ethicalNote: "Strong encryption protects privacy and security. Breaking encryption of systems you don't own is illegal. Cryptographic research should follow responsible disclosure.",
        blackHatWarning: "Attackers exploit weak encryption, steal keys, use rainbow tables for passwords, and implement ransomware using strong encryption against victims. Quantum computing threatens current crypto.",
        protectionTips: [
          "Use modern, proven algorithms (AES-256, RSA-2048+)",
          "Never implement your own crypto",
          "Protect encryption keys carefully",
          "Use salted, slow hashing for passwords"
        ]
      },
      {
        title: "Cyber Law & Legal Boundaries",
        content: "Cybersecurity operates within legal frameworks. Laws vary by country but generally prohibit unauthorized access. Understanding legal boundaries is essential - even well-intentioned testing without permission is criminal.",
        keyPoints: [
          "CFAA (US), PECA (Pakistan), Computer Misuse Act (UK)",
          "Authorization is the key distinction",
          "Evidence handling affects legal cases",
          "International jurisdiction is complex"
        ],
        ethicalNote: "Ignorance of law is no excuse. Get written permission before any testing. Consult legal counsel when in doubt. Document your authorization.",
        blackHatWarning: "Criminals operate from jurisdictions with weak enforcement. They use anonymization to avoid prosecution. Attribution is difficult. But eventually, many are caught.",
        protectionTips: [
          "Always have written authorization",
          "Define scope clearly",
          "Understand reporting requirements",
          "Work with legal team"
        ]
      },
      {
        title: "Responsible Disclosure & Bug Bounties",
        content: "When vulnerabilities are discovered, responsible disclosure balances public safety with giving vendors time to fix issues. Bug bounty programs formalize this relationship with legal protection and rewards.",
        keyPoints: [
          "Report to vendor first, not public",
          "Give reasonable time to fix (typically 90 days)",
          "Bug bounty programs provide legal safe harbor",
          "Full disclosure is controversial but sometimes necessary"
        ],
        ethicalNote: "Responsible disclosure protects users while allowing fixes. Dropping zero-days publicly endangers everyone. Fame and money are never worth public harm.",
        blackHatWarning: "Criminals sell zero-days to brokers and governments. They exploit vulnerabilities before patches are available. Disclosure debates are exploited for attack windows.",
        protectionTips: [
          "Have a vulnerability disclosure policy",
          "Run a bug bounty program",
          "Respond promptly to reports",
          "Don't punish researchers"
        ]
      },
      {
        title: "Professional Ethics & Code of Conduct",
        content: "Security professionals have access to sensitive systems and data. Professional ethics guide behavior when no one is watching. Trust is the foundation of the profession - once lost, it's nearly impossible to regain.",
        keyPoints: [
          "Respect privacy and confidentiality",
          "Only access what you're authorized to access",
          "Report discovered vulnerabilities appropriately",
          "Continuous learning is an ethical obligation"
        ],
        ethicalNote: "Your actions define the profession's reputation. Every ethical violation makes it harder for legitimate security work. Be the professional you'd want to hire.",
        blackHatWarning: "Insiders with security knowledge cause devastating breaches. Ex-employees may sell access. Career criminals sometimes have security backgrounds. Your choices define who you are.",
        protectionTips: [
          "Background checks for security roles",
          "Separation of duties",
          "Monitor privileged access",
          "Create ethical culture"
        ]
      }
    ],
    labs: [
      "Case study analysis of major security breaches",
      "Draft a responsible disclosure template",
      "Risk assessment exercise for a sample organization",
      "Ethics scenario discussions and role-playing"
    ],
    tools: ["Documentation tools", "Case study materials"],
    assessment: "Written assignment on ethics + group discussion participation + signed code of conduct",
    instructorNotes: "Mandatory module. Require signed code-of-conduct before any offensive labs.",
    color: "hsl(270, 100%, 65%)"
  },
  {
    id: 5,
    title: "Reconnaissance & OSINT",
    duration: "3-4 Weeks",
    prerequisites: "Modules 1-3",
    description: "Learn to map targets using passive and active techniques. Master the art of information gathering that precedes any security assessment.",
    objectives: [
      "Map targets using passive & active reconnaissance",
      "Use OSINT tools to build comprehensive attack surface",
      "Understand social engineering vectors",
      "Document findings professionally"
    ],
    topics: [
      "Google dorking and advanced search operators",
      "Shodan, Censys, and internet-wide scanning",
      "Subdomain enumeration techniques",
      "DNS tools: dig, nslookup, whois",
      "Social media OSINT and metadata extraction"
    ],
    lessons: [
      {
        title: "Passive Reconnaissance Techniques",
        content: "Passive recon gathers information without directly interacting with the target. Using public sources, cached data, and third-party services reveals significant details without alerting the target. This is often the first phase of any assessment.",
        keyPoints: [
          "WHOIS reveals domain ownership and contact info",
          "DNS records expose infrastructure (MX, TXT, NS)",
          "Certificate transparency logs list subdomains",
          "Archive.org shows historical versions of sites"
        ],
        ethicalNote: "Even passive recon should have authorization. While technically legal for public data, reconnaissance without intent to help is suspicious. Document your purpose.",
        blackHatWarning: "Attackers build detailed profiles before attacking. They find employee names, technologies used, and infrastructure details. Recon reduces attack noise and increases success.",
        protectionTips: [
          "Use privacy protection on domains",
          "Monitor for reconnaissance activity",
          "Minimize public exposure of infrastructure",
          "Regular OSINT assessments on yourself"
        ]
      },
      {
        title: "Google Dorking & Advanced Search",
        content: "Search engines index vast amounts of information, including sensitive data. Google dorks use advanced operators to find specific content. Security teams use dorks to find exposed data before attackers do.",
        keyPoints: [
          "site: limits to specific domain",
          "filetype: finds specific documents (pdf, xlsx)",
          "intitle: and inurl: for precise targeting",
          "cache: shows cached versions"
        ],
        ethicalNote: "Finding exposed data doesn't authorize accessing it. Report findings responsibly. Using dorks to find and exploit vulnerabilities without permission is illegal.",
        blackHatWarning: "Criminals use dorks to find exposed passwords, admin panels, database dumps, and vulnerable servers. Automated dork scanning covers massive scope.",
        protectionTips: [
          "Regularly dork your own organization",
          "Use robots.txt appropriately",
          "Remove sensitive data from public sites",
          "Monitor for leaked credentials"
        ]
      },
      {
        title: "Subdomain Enumeration",
        content: "Subdomains often host development, staging, or forgotten systems with weaker security. Comprehensive subdomain enumeration reveals the full attack surface. Tools and techniques range from DNS brute-forcing to certificate analysis.",
        keyPoints: [
          "Certificate Transparency (crt.sh) reveals issued certs",
          "DNS brute forcing tries common subdomain names",
          "amass, subfinder aggregate multiple sources",
          "Historical DNS shows removed subdomains"
        ],
        ethicalNote: "Active subdomain brute-forcing generates traffic to target infrastructure. Ensure authorization covers enumeration activities.",
        blackHatWarning: "Forgotten subdomains are prime targets - dev.company.com often has weaker controls. Attackers find staging sites with default credentials, unpatched software, and exposed admin interfaces.",
        protectionTips: [
          "Maintain subdomain inventory",
          "Apply same security to all subdomains",
          "Remove unused subdomains",
          "Monitor certificate transparency"
        ]
      },
      {
        title: "Shodan & Internet-Wide Scanning",
        content: "Shodan, Censys, and similar services continuously scan the internet and index devices. They reveal exposed servers, IoT devices, and misconfigurations. Security teams use these to find their own exposure.",
        keyPoints: [
          "Shodan searches by port, service, banner",
          "Industrial control systems often exposed",
          "Webcams, databases, printers indexed",
          "BinaryEdge, Censys provide alternatives"
        ],
        ethicalNote: "Shodan reveals but doesn't authorize access. Finding an exposed database doesn't mean you can connect. Report findings through proper channels.",
        blackHatWarning: "Attackers search Shodan for vulnerable versions, exposed admin panels, and IoT devices. Mass exploitation follows vulnerability disclosures using internet-wide scanning.",
        protectionTips: [
          "Regularly check Shodan for your IPs",
          "Remove unnecessary internet exposure",
          "Use firewalls to limit access",
          "Monitor for new exposure"
        ]
      },
      {
        title: "Social Media & People OSINT",
        content: "People are often the weakest link. Social media reveals personal details useful for social engineering. Professional networks expose organizational structure. Understanding people OSINT helps both attackers and defenders.",
        keyPoints: [
          "LinkedIn reveals org structure and technologies",
          "Facebook/Instagram show personal interests",
          "Metadata in photos reveals locations and devices",
          "Social connections map relationships"
        ],
        ethicalNote: "People OSINT feels invasive even when using public data. Consider privacy implications. Social engineering crosses ethical lines quickly.",
        blackHatWarning: "Spear phishing uses personal details to appear legitimate. CEO fraud targets finance with 'urgent' requests. Personal details enable password guessing and security question bypass.",
        protectionTips: [
          "Train employees on social media risks",
          "Limit public information sharing",
          "Verify requests through separate channels",
          "Use different emails for different purposes"
        ]
      },
      {
        title: "OSINT Documentation & Reporting",
        content: "Professional OSINT produces actionable intelligence, not just data. Documenting methodology, sources, and confidence levels enables informed decisions. Reports should be clear, accurate, and appropriately classified.",
        keyPoints: [
          "Document sources and methodology",
          "Assess confidence levels",
          "Organize by priority/impact",
          "Include remediation recommendations"
        ],
        ethicalNote: "OSINT reports may contain sensitive information. Handle according to classification. Share only with authorized parties.",
        blackHatWarning: "Criminal reconnaissance is methodical and documented. Threat actors maintain detailed target files. Your organization may already be profiled.",
        protectionTips: [
          "Conduct regular OSINT assessments",
          "Create threat intelligence program",
          "Share indicators with trusted peers",
          "Use findings to prioritize defenses"
        ]
      }
    ],
    labs: [
      "OSINT report on a fictitious company (lab-approved)",
      "Use subfinder, amass, crt.sh for subdomain enum",
      "Perform passive DNS reconnaissance",
      "Metadata extraction from public documents"
    ],
    tools: ["Amass", "Subfinder", "theHarvester", "Maltego", "Shodan"],
    assessment: "Complete OSINT report following professional template + methodology checklist",
    instructorNotes: "Stress legality constantly. Use only lab-approved targets. Document everything.",
    color: "hsl(0, 70%, 50%)"
  },
  {
    id: 6,
    title: "Web Application Security (OWASP Deep)",
    duration: "6-8 Weeks",
    prerequisites: "Modules 2-5",
    description: "Master the OWASP Top 10 and modern web attack vectors. Learn manual testing workflows that automation can't replace.",
    objectives: [
      "Master OWASP Top 10 vulnerabilities in depth",
      "Perform manual web application testing",
      "Understand API security and modern frameworks",
      "Write professional penetration test reports"
    ],
    topics: [
      "Web architecture, authentication, session management",
      "SQL Injection: blind, error-based, time-based",
      "XSS: reflected, stored, DOM-based attacks",
      "CSRF, Insecure Deserialization, XXE",
      "File upload vulnerabilities, SSRF, IDOR",
      "API security: JWT weaknesses, OAuth flaws"
    ],
    lessons: [
      {
        title: "Web Application Architecture",
        content: "Understanding web architecture is prerequisite to testing. Client-server communication, request/response cycles, and state management all present attack surfaces. Modern apps add complexity with APIs, microservices, and client-side rendering.",
        keyPoints: [
          "HTTP methods: GET, POST, PUT, DELETE have different security implications",
          "Cookies, tokens, and sessions manage state",
          "Same-origin policy and CORS control cross-domain access",
          "Client-side vs server-side rendering affects vulnerability types"
        ],
        ethicalNote: "Web application testing requires explicit authorization. Scope should define allowed targets, methods, and timing. Never test production without approval.",
        blackHatWarning: "Attackers probe web apps continuously. Automated scanners find easy vulnerabilities. Manual testing reveals complex issues. Web apps are the most common entry point.",
        protectionTips: [
          "Implement defense in depth",
          "Use secure frameworks with built-in protections",
          "Conduct regular security testing",
          "Monitor for attacks in real-time"
        ]
      },
      {
        title: "SQL Injection Deep Dive",
        content: "SQL injection occurs when user input is incorporated into SQL queries without proper handling. Despite being well-known, SQLi remains common and devastating. Attackers extract, modify, or delete database contents and may escalate to full system compromise.",
        keyPoints: [
          "Classic SQLi: ' OR '1'='1 type attacks",
          "Blind SQLi: inferring data from yes/no responses",
          "Time-based: using SLEEP() to detect vulnerabilities",
          "Second-order SQLi: payload stored, executed later"
        ],
        ethicalNote: "SQL injection can cause massive data breaches. Testing should use safe payloads that prove vulnerability without causing harm. Never extract real user data.",
        blackHatWarning: "Criminals use SQLMap for automated exploitation. They dump entire databases, extract credentials, and sell stolen data. Some SQLi leads to remote code execution.",
        protectionTips: [
          "Use parameterized queries / prepared statements",
          "Implement input validation (whitelist approach)",
          "Apply least privilege to database accounts",
          "Use WAF as additional layer"
        ]
      },
      {
        title: "Cross-Site Scripting (XSS) Mastery",
        content: "XSS injects malicious scripts into web pages viewed by other users. Reflected XSS requires victim to click a link. Stored XSS persists and attacks all visitors. DOM-based XSS manipulates client-side code. XSS can steal sessions, redirect users, and deface sites.",
        keyPoints: [
          "Reflected: payload in URL, rendered in response",
          "Stored: payload saved in database, served to others",
          "DOM-based: client-side JavaScript vulnerability",
          "Polyglot payloads work in multiple contexts"
        ],
        ethicalNote: "XSS testing should use harmless proof-of-concept (alert boxes). Never deploy payloads that affect other users. Stored XSS tests require extra caution.",
        blackHatWarning: "Attackers use XSS for session hijacking, credential theft, keylogging, drive-by downloads, and worm propagation. BeEF framework turns browsers into attack platforms.",
        protectionTips: [
          "Encode output based on context",
          "Implement Content Security Policy (CSP)",
          "Use HttpOnly cookies",
          "Validate and sanitize input"
        ]
      },
      {
        title: "Authentication & Session Attacks",
        content: "Authentication verifies identity. Session management maintains state. Weaknesses here enable account takeover and impersonation. Testing focuses on credential handling, session tokens, and authentication logic.",
        keyPoints: [
          "Credential stuffing uses leaked password databases",
          "Session fixation forces known session ID",
          "Session hijacking steals active sessions",
          "Password reset flaws enable account takeover"
        ],
        ethicalNote: "Authentication testing risks account lockouts and user impact. Coordinate with client. Never test credential stuffing against real user accounts.",
        blackHatWarning: "Attackers use stolen credentials from other breaches (credential stuffing). They phish for passwords, intercept sessions, and exploit weak reset flows. Account takeover is a primary goal.",
        protectionTips: [
          "Implement MFA for all users",
          "Use secure session management",
          "Implement account lockout carefully",
          "Protect password reset flows"
        ]
      },
      {
        title: "Server-Side Request Forgery (SSRF)",
        content: "SSRF tricks servers into making requests to unintended destinations. Attackers access internal resources, cloud metadata, and bypass firewalls. Cloud environments are particularly vulnerable due to metadata services.",
        keyPoints: [
          "URL parameters that trigger server requests",
          "Cloud metadata endpoints (169.254.169.254)",
          "Internal network scanning via SSRF",
          "Protocol handlers (file://, gopher://)"
        ],
        ethicalNote: "SSRF can access internal systems beyond authorized scope. Be careful not to accidentally access systems you shouldn't. Limit exploitation to proving vulnerability.",
        blackHatWarning: "Attackers use SSRF to steal cloud credentials from metadata, scan internal networks, access internal services, and chain with other vulnerabilities for full compromise.",
        protectionTips: [
          "Validate and whitelist URLs",
          "Block internal IP ranges",
          "Use network segmentation",
          "Monitor for unusual internal requests"
        ]
      },
      {
        title: "API Security Testing",
        content: "Modern applications rely heavily on APIs. REST, GraphQL, and other API patterns have distinct security considerations. API testing requires understanding authentication schemes (JWT, OAuth), authorization logic, and data exposure risks.",
        keyPoints: [
          "JWT attacks: none algorithm, weak secrets, confusion",
          "OAuth flows: redirect hijacking, token leakage",
          "BOLA: Broken Object Level Authorization",
          "Mass assignment and excessive data exposure"
        ],
        ethicalNote: "API testing may affect multiple clients or systems. Understand scope carefully. Rate limiting may cause service disruption.",
        blackHatWarning: "APIs are increasingly targeted as mobile and SPA usage grows. Attackers exploit authorization flaws to access other users' data. API endpoints often lack rate limiting.",
        protectionTips: [
          "Implement proper authentication and authorization",
          "Validate JWT signatures properly",
          "Use rate limiting",
          "Document and secure all endpoints"
        ]
      }
    ],
    labs: [
      "Complete DVWA all levels with detailed writeups",
      "Exploit Juice Shop vulnerabilities systematically",
      "Manual Burp Suite testing on WebGoat",
      "PortSwigger Academy challenges completion"
    ],
    tools: ["Burp Suite Community/Pro", "OWASP ZAP", "Postman", "SQLMap"],
    assessment: "Full penetration test report on lab application + 2 CTF challenge writeups",
    instructorNotes: "Provide structured attack templates. Emphasize manual over automated testing.",
    color: "hsl(15, 100%, 50%)"
  },
  {
    id: 7,
    title: "System & Network Exploitation",
    duration: "6-8 Weeks",
    prerequisites: "Modules 1-6",
    description: "Execute privilege escalation chains and understand Active Directory attacks. Learn the techniques that separate beginners from professionals.",
    objectives: [
      "Execute Linux and Windows privilege escalation",
      "Understand Active Directory concepts and weaknesses",
      "Perform lateral movement techniques",
      "Master password cracking methodologies"
    ],
    topics: [
      "Linux priv-esc: SUID, misconfigs, kernel exploits",
      "Windows priv-esc: ACLs, services, token manipulation",
      "Active Directory: Kerberos, LDAP, GPOs",
      "Lateral movement: Pass-the-Hash, Golden Ticket",
      "Password hash types and cracking strategies"
    ],
    lessons: [
      {
        title: "Linux Privilege Escalation",
        content: "Linux privilege escalation moves from limited user to root. Techniques exploit misconfigurations, SUID binaries, sudo rules, and kernel vulnerabilities. Understanding these helps both attack during pentests and defend by hardening systems.",
        keyPoints: [
          "SUID binaries with known exploits (GTFOBins)",
          "Writable /etc/passwd allows adding root user",
          "Sudo misconfigurations enable command execution",
          "Kernel exploits (DirtyC0w, DirtyPipe) for root"
        ],
        ethicalNote: "Privilege escalation in pentests requires explicit scope authorization. Document all escalation attempts. Don't use kernel exploits that may crash systems without approval.",
        blackHatWarning: "Attackers chain initial access with privilege escalation for complete control. They deploy rootkits for persistence. Compromised root access is catastrophic.",
        protectionTips: [
          "Audit SUID binaries: find / -perm -4000 2>/dev/null",
          "Restrict sudo carefully",
          "Keep kernel patched",
          "Use SELinux/AppArmor"
        ]
      },
      {
        title: "Windows Privilege Escalation",
        content: "Windows privilege escalation targets local admin or SYSTEM. Techniques abuse services, scheduled tasks, unquoted paths, and token privileges. Windows has many complex security features - misconfigurations are common.",
        keyPoints: [
          "Unquoted service paths allow DLL hijacking",
          "Weak service permissions enable binary replacement",
          "AlwaysInstallElevated runs MSI as SYSTEM",
          "Token impersonation (Potato attacks) abuses service accounts"
        ],
        ethicalNote: "Windows privilege escalation can affect domain security. Understand scope carefully. Service modifications may cause instability.",
        blackHatWarning: "Attackers use automated tools like WinPEAS, BeRoot to find paths. They combine multiple misconfigurations. SYSTEM access enables credential theft for lateral movement.",
        protectionTips: [
          "Review service configurations",
          "Use Windows Defender Credential Guard",
          "Implement LAPS for local admin passwords",
          "Monitor for privilege escalation attempts"
        ]
      },
      {
        title: "Active Directory Fundamentals",
        content: "Active Directory is the authentication backbone of most enterprises. Understanding AD structure - domains, forests, trusts, GPOs - is essential for security. AD centralization means compromise spreads quickly.",
        keyPoints: [
          "Domain Controllers hold all the keys",
          "Kerberos provides authentication via tickets",
          "GPOs push policies and potentially malicious code",
          "Trust relationships enable cross-domain attacks"
        ],
        ethicalNote: "AD testing has broad impact. Attacks can affect all domain users. Require explicit authorization and defined scope. Test in isolated lab environments first.",
        blackHatWarning: "Domain admin is the ultimate goal for attackers. Once achieved, they can access all systems, read all mail, and deploy ransomware everywhere. AD attacks are highly structured.",
        protectionTips: [
          "Implement tiered administration model",
          "Protect Domain Controllers especially",
          "Monitor for Kerberos anomalies",
          "Use PAM/PIM solutions"
        ]
      },
      {
        title: "Kerberos Attacks",
        content: "Kerberos is Windows' authentication protocol. Attack techniques target ticket generation and validation. Kerberoasting, AS-REP roasting, and Golden Tickets exploit Kerberos weaknesses.",
        keyPoints: [
          "Kerberoasting cracks service account passwords offline",
          "AS-REP roasting targets accounts without pre-auth",
          "Golden Ticket forges TGTs with KRBTGT hash",
          "Silver Ticket forges service tickets"
        ],
        ethicalNote: "Kerberos attacks can enable complete domain compromise. Understand the full impact. Obtained credentials should be reported, not used beyond scope.",
        blackHatWarning: "Sophisticated attackers use Kerberos for stealthy persistence. Golden Tickets survive password resets. KRBTGT compromise is catastrophic and requires full domain rebuild.",
        protectionTips: [
          "Use strong, unique service account passwords",
          "Require Kerberos pre-authentication",
          "Rotate KRBTGT password regularly",
          "Monitor for unusual Kerberos activity"
        ]
      },
      {
        title: "Lateral Movement Techniques",
        content: "After initial compromise, attackers move laterally to reach high-value targets. Techniques use legitimate protocols and stolen credentials. Understanding lateral movement helps both attack during assessments and detect during defense.",
        keyPoints: [
          "Pass-the-Hash uses NTLM hashes without cracking",
          "Pass-the-Ticket uses Kerberos tickets",
          "WMI, PSRemoting, SMB for remote execution",
          "Pivoting through compromised hosts"
        ],
        ethicalNote: "Lateral movement expands attack scope. Ensure authorization covers target systems. Credential use should be documented and controlled.",
        blackHatWarning: "Attackers blend with normal admin traffic. They live off the land using built-in tools. Detection requires understanding normal vs anomalous patterns.",
        protectionTips: [
          "Implement network segmentation",
          "Use Windows Defender Credential Guard",
          "Monitor for lateral movement indicators",
          "Limit admin tool availability"
        ]
      },
      {
        title: "Password Cracking Methodologies",
        content: "Passwords protect access but can be cracked. Understanding hash types, cracking tools, and optimization techniques helps both assess password strength and recommend improvements.",
        keyPoints: [
          "NTLM, MD5, SHA family, bcrypt - different speeds",
          "Hashcat GPU acceleration",
          "Rainbow tables vs brute force vs dictionary",
          "Rule-based attacks for password patterns"
        ],
        ethicalNote: "Only crack passwords you're authorized to test. Cracked passwords should be reported securely. Never use cracked passwords beyond the authorized scope.",
        blackHatWarning: "Massive leaked databases provide cracking material. Cloud GPU services enable fast cracking. Password reuse means one crack compromises multiple accounts.",
        protectionTips: [
          "Use slow algorithms (bcrypt, argon2)",
          "Implement password policies wisely",
          "Use passphrases over complexity",
          "Monitor for credential leaks"
        ]
      }
    ],
    labs: [
      "Build AD lab with Windows Server + domain clients",
      "Linux privilege escalation on HackTheBox machines",
      "Windows local privilege escalation techniques",
      "Password hash cracking with Hashcat and John"
    ],
    tools: ["BloodHound", "PowerView", "Mimikatz", "Hashcat", "John"],
    assessment: "Capture domain foothold in controlled lab + write remediation plan document",
    instructorNotes: "Strictly enforce lab rules. Sensitive tools restricted to isolated lab network only.",
    color: "hsl(330, 70%, 50%)"
  },
  {
    id: 8,
    title: "Offensive Tooling & Methodology",
    duration: "4-6 Weeks",
    prerequisites: "Modules 6-7",
    description: "Learn to use both manual techniques and tool-assisted exploitation. Understand when tools help and when they hurt.",
    objectives: [
      "Use Metasploit effectively (and know when not to)",
      "Customize and write exploitation scripts",
      "Master post-exploitation techniques",
      "Understand basic exploit development concepts"
    ],
    topics: [
      "Metasploit workflow and module understanding",
      "When NOT to use automated exploitation",
      "Writing custom exploitation scripts",
      "Post-exploitation: persistence, pivoting, exfiltration",
      "Buffer overflow concepts (theory + basics)"
    ],
    lessons: [
      {
        title: "Metasploit Framework Deep Dive",
        content: "Metasploit is the most widely used exploitation framework. It provides exploits, payloads, and post-exploitation modules. Understanding Metasploit's architecture enables effective use and customization.",
        keyPoints: [
          "Modules: exploits, payloads, auxiliary, post",
          "Meterpreter provides advanced post-exploitation",
          "Database tracking for large assessments",
          "Resource scripts for automation"
        ],
        ethicalNote: "Metasploit is a powerful tool that can cause damage. Only use against authorized targets. Exploits may crash services - test carefully.",
        blackHatWarning: "Criminals use Metasploit for initial access and post-exploitation. Script kiddies rely on it without understanding. Defenders must know what to detect.",
        protectionTips: [
          "Detect Meterpreter traffic patterns",
          "Block common exploit ports",
          "Keep systems patched",
          "Use EDR solutions"
        ]
      },
      {
        title: "Manual Exploitation Techniques",
        content: "While frameworks are useful, manual exploitation demonstrates understanding and works when tools fail. Writing custom exploits and payloads develops deep skills and evades signature-based detection.",
        keyPoints: [
          "Understand the vulnerability before exploiting",
          "Custom payloads bypass detection",
          "Debugging failed exploits reveals issues",
          "Documentation of manual process is essential"
        ],
        ethicalNote: "Custom exploit development requires responsible handling. Don't publish weaponized exploits. Proof-of-concept should demonstrate without weaponization.",
        blackHatWarning: "Advanced attackers develop custom exploits and implants. They understand target environments deeply. Custom tools evade signature-based detection.",
        protectionTips: [
          "Implement behavior-based detection",
          "Use network traffic analysis",
          "Monitor for exploitation indicators",
          "Patch aggressively"
        ]
      },
      {
        title: "Post-Exploitation Fundamentals",
        content: "After initial access, post-exploitation extracts value - credentials, data, persistence. Understanding these techniques helps assess true impact and prioritize defenses.",
        keyPoints: [
          "Credential harvesting from memory and disk",
          "Network reconnaissance from inside",
          "Privilege escalation as covered before",
          "Data identification and staging"
        ],
        ethicalNote: "Post-exploitation can access sensitive data. Define what can be accessed. Don't exfiltrate real data - proof of access is sufficient.",
        blackHatWarning: "Attackers spend significant time in post-exploitation. They move slowly to avoid detection. Data theft and ransomware deployment happen here.",
        protectionTips: [
          "Implement EDR with behavioral detection",
          "Use data loss prevention (DLP)",
          "Segment sensitive systems",
          "Monitor for credential theft tools"
        ]
      },
      {
        title: "Persistence Mechanisms",
        content: "Persistence ensures continued access after reboots or remediation. Understanding persistence helps both plant during assessments and detect during incident response.",
        keyPoints: [
          "Startup locations (registry, folders, services)",
          "Scheduled tasks and cron jobs",
          "Backdoor accounts and SSH keys",
          "Application-specific persistence"
        ],
        ethicalNote: "Persistence during tests should be documented and removable. Ensure all planted persistence is cleaned up. Leave no unauthorized access.",
        blackHatWarning: "APTs establish multiple persistence mechanisms. They survive remediation attempts. Thorough cleaning requires understanding all methods used.",
        protectionTips: [
          "Monitor startup locations",
          "Audit scheduled tasks",
          "Review user accounts regularly",
          "Use integrity monitoring"
        ]
      },
      {
        title: "Pivoting & Network Attacks",
        content: "Pivoting uses compromised hosts to access otherwise unreachable networks. Tunneling and port forwarding extend attack reach. Understanding pivoting reveals how attackers traverse networks.",
        keyPoints: [
          "SSH tunnels for port forwarding",
          "SOCKS proxies for network access",
          "Meterpreter autoroute and portfwd",
          "Proxychains for tool routing"
        ],
        ethicalNote: "Pivoting expands scope significantly. Ensure authorization covers reached networks. Traffic through compromised hosts may be logged.",
        blackHatWarning: "Attackers pivot through DMZ systems into internal networks. They reach air-gapped systems via stepping stones. Multi-hop paths complicate forensics.",
        protectionTips: [
          "Segment networks properly",
          "Monitor east-west traffic",
          "Limit protocol tunneling",
          "Detect unusual connections between zones"
        ]
      },
      {
        title: "Buffer Overflow Concepts",
        content: "Buffer overflows corrupt memory to gain code execution. While modern protections reduce success, understanding buffers helps with exploit development and why protections matter.",
        keyPoints: [
          "Stack vs heap overflows",
          "EIP/RIP control enables code execution",
          "Modern protections: ASLR, DEP, Stack Canaries",
          "Return-oriented programming (ROP) bypasses"
        ],
        ethicalNote: "Exploit development has high impact. Responsible disclosure is essential. Don't weaponize exploits for sale or malicious use.",
        blackHatWarning: "Zero-day exploits sell for high prices. Exploit developers are highly valued in criminal markets. Nation-states stockpile exploits.",
        protectionTips: [
          "Enable all available protections",
          "Use memory-safe languages where possible",
          "Fuzz applications for vulnerabilities",
          "Patch promptly when vulnerabilities disclosed"
        ]
      }
    ],
    labs: [
      "Execute exploitation chains using Metasploit in lab",
      "Develop custom post-exploit scripts in Python",
      "Practice pivoting between network segments",
      "Basic buffer overflow on vulnerable application"
    ],
    tools: ["Metasploit Framework", "msfvenom", "Netcat", "Socat", "Cobalt Strike (demo)"],
    assessment: "Complete exploitation chain + post-exploit documentation journal",
    instructorNotes: "Emphasize manual understanding over tool abuse. Tools assist, they don't replace skill.",
    color: "hsl(280, 70%, 50%)"
  },
  {
    id: 9,
    title: "Defensive Security (Blue Team, SIEM, IR)",
    duration: "6-8 Weeks",
    prerequisites: "Modules 2-4",
    description: "Learn to monitor, detect, and respond to incidents. Build the defensive skills that protect organizations from attacks.",
    objectives: [
      "Monitor and detect security incidents effectively",
      "Build detection rules and security alerts",
      "Execute incident response playbooks",
      "Perform basic digital forensics"
    ],
    topics: [
      "SIEM concepts and search query languages",
      "Splunk/ELK fundamentals and log analysis",
      "Incident response process and playbooks",
      "Endpoint Detection & Response (EDR) basics",
      "Digital forensics: disk and memory analysis"
    ],
    lessons: [
      {
        title: "Security Operations Center (SOC) Fundamentals",
        content: "SOCs are the nerve center of organizational security. They monitor, detect, and respond to threats 24/7. Understanding SOC structure, roles, and processes prepares analysts for operational reality.",
        keyPoints: [
          "Tier 1: Triage and initial analysis",
          "Tier 2: Deeper investigation",
          "Tier 3: Advanced response and hunting",
          "SOC metrics: MTTD, MTTR, false positive rates"
        ],
        ethicalNote: "SOC analysts handle sensitive data and investigations. Maintain confidentiality. Never leak investigation details or accessed data.",
        blackHatWarning: "Attackers study SOC capabilities to evade detection. They time attacks for nights/weekends. Understanding adversary awareness improves defenses.",
        protectionTips: [
          "Build 24/7 coverage capability",
          "Create and refine playbooks",
          "Track and reduce false positives",
          "Continuous analyst training"
        ]
      },
      {
        title: "SIEM Implementation & Log Analysis",
        content: "SIEMs aggregate logs from across the environment, enable correlation, and trigger alerts. Understanding SIEM architecture, log sources, and query languages enables effective threat detection.",
        keyPoints: [
          "Splunk SPL, ELK KQL query languages",
          "Important log sources: Windows Events, firewall, proxy",
          "Correlation rules link related events",
          "Dashboard design for visibility"
        ],
        ethicalNote: "SIEM data often contains sensitive information. Access should be restricted. Investigations should be documented and authorized.",
        blackHatWarning: "Attackers try to avoid logging - use alternate protocols, delete logs, or flood with noise. Understanding evasion helps build better detection.",
        protectionTips: [
          "Centralize all security-relevant logs",
          "Protect log integrity",
          "Build detection for common techniques",
          "Regularly review and tune rules"
        ]
      },
      {
        title: "Incident Response Process",
        content: "Incident response follows structured phases: Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned. Effective IR minimizes damage and enables organizational learning.",
        keyPoints: [
          "Preparation: plans, tools, training before incidents",
          "Identification: detecting and validating incidents",
          "Containment: limiting damage spread",
          "Recovery: returning to normal operations"
        ],
        ethicalNote: "IR often involves sensitive situations and potential legal action. Maintain chain of custody. Document everything. Don't discuss cases outside authorized channels.",
        blackHatWarning: "Attackers anticipate response and prepare counter-measures. They may accelerate destructive actions when detected. Fast, coordinated response is essential.",
        protectionTips: [
          "Have tested IR plans",
          "Define communication channels",
          "Establish relationships with law enforcement",
          "Conduct regular tabletop exercises"
        ]
      },
      {
        title: "Threat Hunting Fundamentals",
        content: "Threat hunting proactively searches for threats that evade automated detection. Hunters form hypotheses, collect data, and analyze for indicators of compromise. It's a skilled, creative discipline.",
        keyPoints: [
          "Hypothesis-driven hunting",
          "Use of threat intelligence",
          "Known attack patterns as starting points",
          "Building new detections from findings"
        ],
        ethicalNote: "Hunting accesses broad data. Maintain scope and privacy requirements. Document and report findings appropriately.",
        blackHatWarning: "Advanced threats evade detection for months or years. Hunting finds what automated tools miss. It's essential for APT defense.",
        protectionTips: [
          "Allocate time for proactive hunting",
          "Use threat intelligence to guide priorities",
          "Convert findings into automated detections",
          "Track hunting metrics"
        ]
      },
      {
        title: "Digital Forensics Basics",
        content: "Forensics examines digital evidence to understand incidents. Disk forensics analyzes storage; memory forensics captures volatile data. Proper forensic technique preserves evidence integrity for potential legal action.",
        keyPoints: [
          "Imaging vs live analysis tradeoffs",
          "Chain of custody documentation",
          "Timeline analysis reconstructs events",
          "Memory captures running processes and keys"
        ],
        ethicalNote: "Forensics requires careful evidence handling. Improper technique ruins legal cases. Only examine systems you're authorized to investigate.",
        blackHatWarning: "Sophisticated attackers use anti-forensic techniques: memory-only malware, log wiping, timestomping. Understanding these helps overcome them.",
        protectionTips: [
          "Prepare forensic toolkit in advance",
          "Train on evidence handling",
          "Preserve volatile data quickly",
          "Document all analysis steps"
        ]
      },
      {
        title: "Endpoint Detection & Response (EDR)",
        content: "EDR solutions monitor endpoints for suspicious behavior, enable investigation, and provide response capabilities. They're essential for detecting sophisticated threats that signature-based AV misses.",
        keyPoints: [
          "Behavior-based detection catches unknown malware",
          "Process trees reveal attack chains",
          "Memory inspection catches fileless attacks",
          "Remote response enables quick containment"
        ],
        ethicalNote: "EDR data is highly sensitive - system activity, potentially including personal. Handle according to privacy policies.",
        blackHatWarning: "Attackers specifically evade EDR products. They test payloads against common solutions. Understanding EDR blind spots helps both sides.",
        protectionTips: [
          "Deploy EDR broadly, not just high-value systems",
          "Tune for environment to reduce false positives",
          "Integrate EDR with SIEM",
          "Train analysts on product capabilities"
        ]
      }
    ],
    labs: [
      "Ingest lab logs into ELK/Splunk and create alerts",
      "Run incident simulation following IR playbook",
      "Basic forensic capture and analysis exercise",
      "Build detection rules for common attack patterns"
    ],
    tools: ["ELK Stack", "Splunk Free", "Autopsy", "Volatility", "YARA"],
    assessment: "Complete incident response report + detection rule submission with testing",
    instructorNotes: "Pair students in red/blue teams for live attack/defend drills. Very effective.",
    color: "hsl(210, 100%, 50%)"
  },
  {
    id: 10,
    title: "Cloud Security & Architecture",
    duration: "4-6 Weeks",
    prerequisites: "Modules 2-3, 9",
    description: "Secure cloud resources and identities. Understand the shared responsibility model and common cloud misconfigurations.",
    objectives: [
      "Secure cloud resources and manage identities",
      "Understand AWS and Azure security services",
      "Identify and fix cloud misconfigurations",
      "Review Infrastructure as Code for security"
    ],
    topics: [
      "AWS basics: IAM, S3, VPC, Security Groups",
      "Azure basics: RBAC, managed identities, NSGs",
      "Cloud misconfiguration patterns and testing",
      "Infrastructure as Code security (Terraform)",
      "Container and Kubernetes security basics"
    ],
    lessons: [
      {
        title: "Cloud Security Fundamentals",
        content: "Cloud computing shifts responsibility models. Providers secure the infrastructure; customers secure their data and configurations. Understanding this shared responsibility is foundational to cloud security.",
        keyPoints: [
          "IaaS vs PaaS vs SaaS responsibility differences",
          "Provider secures OF the cloud, customer IN the cloud",
          "Cloud expands attack surface in new ways",
          "Speed of cloud enables fast mistakes"
        ],
        ethicalNote: "Cloud pentesting requires explicit provider approval in addition to customer authorization. Cloud account access is highly sensitive.",
        blackHatWarning: "Attackers target cloud misconfigurations - exposed S3 buckets, weak IAM, public snapshots. Speed of compromise in cloud is extremely fast.",
        protectionTips: [
          "Understand your responsibility clearly",
          "Use cloud security posture management",
          "Enable logging and monitoring",
          "Implement least privilege rigorously"
        ]
      },
      {
        title: "AWS Security Deep Dive",
        content: "AWS is the leading cloud provider. Understanding IAM, S3, VPC, and security services is essential. AWS-specific vulnerabilities and misconfigurations are common targets.",
        keyPoints: [
          "IAM policies, roles, and trust relationships",
          "S3 bucket policies and ACLs",
          "VPC security groups vs NACLs",
          "CloudTrail for audit logging"
        ],
        ethicalNote: "AWS testing requires authorization. Cloud costs can escalate quickly. Be careful with resource creation. Never access other tenants' resources.",
        blackHatWarning: "Attackers enumerate S3 buckets, exploit SSRF for metadata, abuse overly permissive IAM, and pivot between services. AWS-specific techniques are well-documented.",
        protectionTips: [
          "Use AWS Config for compliance",
          "Enable GuardDuty for threat detection",
          "Implement SCPs for organization-wide controls",
          "Regularly review IAM permissions"
        ]
      },
      {
        title: "Identity & Access Management",
        content: "Cloud IAM is complex and crucial. Over-privileged accounts enable attacks. Understanding identity federation, roles, and policies helps secure cloud environments.",
        keyPoints: [
          "Principle of least privilege is essential",
          "Temporary credentials via roles are preferred",
          "Federation with identity providers",
          "Multi-factor authentication everywhere"
        ],
        ethicalNote: "IAM changes have broad impact. Test in non-production first. Overly restrictive policies can break applications.",
        blackHatWarning: "Attackers target credentials through phishing, code repositories, and metadata services. Once obtained, they enumerate permissions and escalate.",
        protectionTips: [
          "Audit IAM permissions regularly",
          "Use roles instead of long-term keys",
          "Implement MFA for all users",
          "Monitor for unusual IAM activity"
        ]
      },
      {
        title: "Container Security",
        content: "Containers add another layer of complexity. Docker and Kubernetes have specific security considerations. Misconfigurations can expose entire clusters or enable container escapes.",
        keyPoints: [
          "Container images may contain vulnerabilities",
          "Kubernetes RBAC for access control",
          "Network policies for pod isolation",
          "Secrets management is critical"
        ],
        ethicalNote: "Container testing affects shared infrastructure. Scope carefully. Escape testing should be in isolated environments only.",
        blackHatWarning: "Attackers target exposed Docker APIs, vulnerable images, and Kubernetes misconfigurations. Cryptomining in hijacked containers is common.",
        protectionTips: [
          "Scan images for vulnerabilities",
          "Use read-only containers where possible",
          "Implement network policies",
          "Don't expose Docker daemon"
        ]
      },
      {
        title: "Infrastructure as Code Security",
        content: "IaC (Terraform, CloudFormation) enables repeatable infrastructure. But code can contain misconfigurations that deploy vulnerable resources. Scanning IaC before deployment prevents issues.",
        keyPoints: [
          "Static analysis catches issues before deployment",
          "Secrets in code are a major risk",
          "Drift detection for unauthorized changes",
          "Policy as code enforces standards"
        ],
        ethicalNote: "IaC access often means infrastructure access. Treat code repositories as sensitive. Review changes carefully.",
        blackHatWarning: "Attackers target code repositories for IaC secrets. Compromised CI/CD can deploy backdoored infrastructure. Supply chain attacks are rising.",
        protectionTips: [
          "Scan IaC in CI/CD pipelines",
          "Use secrets management, not hardcoded",
          "Review IaC changes like code",
          "Implement drift detection"
        ]
      },
      {
        title: "Cloud Penetration Testing",
        content: "Cloud pentesting requires understanding cloud-specific attack vectors. Traditional techniques combine with cloud enumeration, privilege escalation, and lateral movement between services.",
        keyPoints: [
          "Enumerate cloud resources systematically",
          "Metadata services reveal credentials",
          "Cross-service attacks chain vulnerabilities",
          "Reporting must consider cloud context"
        ],
        ethicalNote: "Cloud pentesting requires provider approval (AWS has specific policies). Test only authorized accounts. Document findings carefully.",
        blackHatWarning: "Attackers have industrialized cloud attacks. Tools like Pacu automate AWS exploitation. Cloud breaches are increasingly common and impactful.",
        protectionTips: [
          "Regular cloud security assessments",
          "Use cloud security tools",
          "Monitor for suspicious activity",
          "Keep security teams cloud-trained"
        ]
      }
    ],
    labs: [
      "Create secure S3 buckets and test for misconfigs",
      "AWS IAM policy review and hardening exercise",
      "Deploy and secure a basic cloud application",
      "CloudGoat vulnerable AWS environment testing"
    ],
    tools: ["AWS Free Tier", "Azure Free", "CloudGoat", "ScoutSuite", "Prowler"],
    assessment: "Cloud security hardening checklist + practical misconfiguration demo with fixes",
    instructorNotes: "Use cost-free resources only. Sandbox accounts required. Watch for billing!",
    color: "hsl(180, 100%, 50%)"
  },
  {
    id: 11,
    title: "Purple Teaming & Detection Engineering",
    duration: "3-4 Weeks",
    prerequisites: "Modules 6-9",
    description: "Bridge offense and defense. Translate attack techniques into detections and measure security coverage objectively.",
    objectives: [
      "Translate attack techniques into detections",
      "Build end-to-end test scenarios",
      "Measure and improve detection coverage",
      "Map techniques to MITRE ATT&CK framework"
    ],
    topics: [
      "MITRE ATT&CK framework deep dive",
      "Detection engineering lifecycle",
      "Creating telemetry and analytics use-cases",
      "Purple team exercise methodology",
      "Coverage scoring and gap analysis"
    ],
    lessons: [
      {
        title: "MITRE ATT&CK Framework",
        content: "ATT&CK catalogs adversary tactics and techniques based on real-world observations. It provides a common language for offense and defense. Understanding ATT&CK enables structured security improvement.",
        keyPoints: [
          "Tactics are the 'why' - adversary goals",
          "Techniques are the 'how' - specific methods",
          "Procedures are specific implementations",
          "Coverage mapping shows gaps"
        ],
        ethicalNote: "ATT&CK is used by both attackers and defenders. Using it to improve defenses is its intended purpose. Offensive use requires authorization.",
        blackHatWarning: "Sophisticated attackers know ATT&CK and use it for planning. They identify defensive gaps through the framework. It cuts both ways.",
        protectionTips: [
          "Map your detections to ATT&CK",
          "Prioritize coverage of common techniques",
          "Use ATT&CK for threat intelligence",
          "Track coverage over time"
        ]
      },
      {
        title: "Detection Engineering Fundamentals",
        content: "Detection engineering creates reliable, tuned alerts for threats. It combines understanding of attacks, log sources, and query languages. Good detection engineering reduces noise and catches real threats.",
        keyPoints: [
          "Start with threat understanding",
          "Identify required data sources",
          "Write and tune detection logic",
          "Document and maintain detections"
        ],
        ethicalNote: "Detection engineering accesses sensitive log data. Handle appropriately. False positives can disrupt operations - tune carefully.",
        blackHatWarning: "Attackers test against detection tools. They develop evasion techniques for specific products. Detection must evolve continuously.",
        protectionTips: [
          "Build detection-as-code pipelines",
          "Version control detections",
          "Regularly test detection efficacy",
          "Share detections with community"
        ]
      },
      {
        title: "Purple Team Exercises",
        content: "Purple teaming combines red and blue in collaborative exercises. Attackers execute techniques while defenders observe and detect. It's highly effective for improving both sides.",
        keyPoints: [
          "Defined scope and objectives",
          "Red executes, blue observes",
          "Real-time communication and learning",
          "Improvement actions documented"
        ],
        ethicalNote: "Purple teams require coordination and authorization. Everyone must understand roles. Document for learning, not blame.",
        blackHatWarning: "Real attackers don't coordinate. Purple team findings need validation against realistic, uncoordinated attacks. Balance is important.",
        protectionTips: [
          "Run regular purple team exercises",
          "Include variety of techniques",
          "Act on findings quickly",
          "Measure improvement over time"
        ]
      },
      {
        title: "Threat Simulation & Automation",
        content: "Automated threat simulation (Atomic Red Team, Caldera) enables repeatable testing. It validates detections continuously. Understanding simulation helps maintain effective defenses.",
        keyPoints: [
          "Atomic tests are discrete technique executions",
          "Full attack simulations chain techniques",
          "Safe simulation in production requires care",
          "Integration with CI/CD for continuous validation"
        ],
        ethicalNote: "Simulation in production can trigger alerts and concerns. Coordinate with SOC. Use safe payloads that don't cause harm.",
        blackHatWarning: "Attackers test their tools extensively. They simulate defensive responses. Security must be similarly rigorous.",
        protectionTips: [
          "Implement continuous security validation",
          "Automate detection testing",
          "Monitor for simulation detection gaps",
          "Update simulations with new techniques"
        ]
      },
      {
        title: "Coverage Analysis & Gap Remediation",
        content: "Coverage analysis maps detection capabilities to the threat landscape. Gaps are prioritized by risk. Systematic improvement closes gaps while maintaining existing coverage.",
        keyPoints: [
          "Inventory existing detections",
          "Map to ATT&CK techniques",
          "Identify gaps in coverage",
          "Prioritize by threat relevance"
        ],
        ethicalNote: "Coverage analysis reveals security gaps. Treat as sensitive information. Remediation should be tracked and verified.",
        blackHatWarning: "Attackers exploit gaps. Knowing your gaps is essential - but so is protecting that knowledge. Treat gap analysis as confidential.",
        protectionTips: [
          "Regular coverage reviews",
          "Prioritize based on threat intelligence",
          "Track closure of gaps",
          "Validate new detections work"
        ]
      },
      {
        title: "Building a Detection Program",
        content: "A mature detection program has process, people, and technology working together. It continuously improves based on threats and incidents. Building program maturity takes time and investment.",
        keyPoints: [
          "Define program goals and metrics",
          "Build detection development workflow",
          "Establish feedback loops from incidents",
          "Invest in analyst skills"
        ],
        ethicalNote: "Detection programs handle sensitive data and may impact operations. Governance and oversight are important.",
        blackHatWarning: "Attackers adapt to defenses. Static detection programs become ineffective. Continuous improvement is essential for security.",
        protectionTips: [
          "Treat detection as ongoing program",
          "Resource appropriately",
          "Measure and report on coverage",
          "Learn from incidents and exercises"
        ]
      }
    ],
    labs: [
      "Run attack simulation and implement detection rules",
      "Create detection coverage scoreboard vs techniques",
      "Build automated attack simulation playbooks",
      "Gap analysis and improvement recommendations"
    ],
    tools: ["Atomic Red Team", "MITRE ATT&CK Navigator", "Sigma", "Elastic SIEM"],
    assessment: "Purple team report: attack → detection → improvement cycle documented",
    instructorNotes: "Excellent preparation before final capstone. Students see both sides clearly.",
    color: "hsl(270, 100%, 65%)"
  },
  {
    id: 12,
    title: "Capstone, Teaching & Delivery",
    duration: "4-8 Weeks",
    prerequisites: "Modules 6-11 recommended",
    description: "Deliver a full security assessment or defensive program. Learn to teach, build curriculum, and launch your own training locally.",
    objectives: [
      "Execute a complete security assessment project",
      "Build teaching curriculum and lab materials",
      "Design assessments and student workbooks",
      "Plan and market local training delivery"
    ],
    topics: [
      "Full pentest methodology and reporting",
      "SOC build and incident response simulation",
      "Cloud security hardening project",
      "Curriculum development and slide creation",
      "Pricing, marketing, and local workshop planning"
    ],
    lessons: [
      {
        title: "Professional Penetration Testing",
        content: "Professional pentesting follows methodology, maintains documentation, and delivers actionable reports. It's a business service that requires professionalism beyond technical skills.",
        keyPoints: [
          "Scoping and rules of engagement",
          "Methodology: recon → attack → post → report",
          "Communication during engagements",
          "Report writing that drives action"
        ],
        ethicalNote: "Professional pentesting represents your reputation. Quality and ethics define long-term success. Never cut corners on authorization or reporting.",
        blackHatWarning: "Criminal hackers don't follow rules of engagement. Understanding the difference is fundamental to professional identity.",
        protectionTips: [
          "Develop consistent methodology",
          "Use report templates",
          "Maintain professional liability insurance",
          "Build reputation through quality"
        ]
      },
      {
        title: "Building Security Programs",
        content: "Beyond testing, security professionals build programs - SOCs, vulnerability management, incident response. Understanding program building enables leadership and consulting.",
        keyPoints: [
          "Start with risk assessment",
          "Build appropriate controls",
          "Measure and improve continuously",
          "Align with business objectives"
        ],
        ethicalNote: "Program building affects organizations deeply. Recommend appropriate controls, not excessive. Balance security with usability.",
        blackHatWarning: "Weak programs are easily breached. Understanding attacker capabilities helps build effective defenses.",
        protectionTips: [
          "Start with fundamentals",
          "Build on frameworks (NIST, ISO)",
          "Measure what matters",
          "Evolve with threats"
        ]
      },
      {
        title: "Technical Writing & Documentation",
        content: "Security professionals write constantly - reports, policies, procedures, training materials. Clear writing multiplies impact. Technical writing is a learnable skill.",
        keyPoints: [
          "Know your audience",
          "Lead with impact and recommendations",
          "Use clear, simple language",
          "Structure for skimming"
        ],
        ethicalNote: "Documentation may be used legally. Be accurate and factual. Don't exaggerate findings. Maintain objectivity.",
        blackHatWarning: "Poor documentation enables attackers by leaving gaps in procedures and understanding.",
        protectionTips: [
          "Template common documents",
          "Review and iterate",
          "Get feedback from audience",
          "Keep documentation current"
        ]
      },
      {
        title: "Curriculum Development",
        content: "Teaching security requires curriculum that builds skills progressively. Effective curriculum combines theory, practice, and assessment. This module's structure is itself a curriculum example.",
        keyPoints: [
          "Define learning objectives clearly",
          "Build complexity progressively",
          "Include hands-on practice",
          "Assess understanding not just completion"
        ],
        ethicalNote: "Teaching carries responsibility. Ensure students understand ethics before tools. Your students' actions reflect on you.",
        blackHatWarning: "Criminal training exists. Ethical teaching builds defenders and responsible testers. The choice is fundamental.",
        protectionTips: [
          "Screen students appropriately",
          "Emphasize ethics throughout",
          "Require signed conduct agreements",
          "Maintain lab safety"
        ]
      },
      {
        title: "Training Delivery Skills",
        content: "Delivering training effectively requires presentation skills, lab facilitation, and student engagement. Technical knowledge alone isn't enough - teaching is a separate skill.",
        keyPoints: [
          "Prepare thoroughly",
          "Engage students actively",
          "Handle questions effectively",
          "Adapt to audience needs"
        ],
        ethicalNote: "Training is a position of trust. Handle student struggles professionally. Create safe learning environments.",
        blackHatWarning: "Social engineering exploits trust relationships. Awareness of manipulation helps trainers recognize and prevent it.",
        protectionTips: [
          "Practice presentations",
          "Build lab fallbacks",
          "Collect and use feedback",
          "Continuously improve delivery"
        ]
      },
      {
        title: "Business & Career Development",
        content: "Cybersecurity careers require business understanding. Whether employee or consultant, understanding value creation, marketing, and professional development enables success.",
        keyPoints: [
          "Build visible portfolio and reputation",
          "Network actively in community",
          "Continuous learning is mandatory",
          "Business skills complement technical"
        ],
        ethicalNote: "Professional reputation is everything. Build it through quality work and ethical behavior. Short-term gains from unethical behavior destroy careers.",
        blackHatWarning: "Criminal careers end badly. Legal consequences are severe. Ethical paths offer better long-term outcomes.",
        protectionTips: [
          "Document your work (with permission)",
          "Contribute to community",
          "Obtain relevant certifications",
          "Build diverse skills"
        ]
      }
    ],
    labs: [
      "Complete capstone: full pentest OR SOC simulation",
      "Build step-by-step lab guides with screenshots",
      "Create student workbook and assessments",
      "Develop marketing materials for local delivery"
    ],
    tools: ["Documentation suite", "Video recording", "Lab environment", "GitHub"],
    assessment: "Capstone deliverable (pentest report OR SOC report) + recorded teaching demonstration",
    instructorNotes: "Help students build GitHub portfolios. This is career-launching material.",
    color: "hsl(140, 100%, 45%)"
  }
];
