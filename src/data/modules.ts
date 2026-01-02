export const modulesData = [
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
