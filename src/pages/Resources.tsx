import { memo } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Shield, Clock, Target, FileText, ExternalLink, Download, Video, Globe } from 'lucide-react';

const deliveryFormats = [
  { icon: Users, title: 'Instructor-led Classroom', description: 'Weekend or evening sessions with hands-on guidance' },
  { icon: Video, title: 'Online Cohort', description: 'Live virtual classes with peer collaboration' },
  { icon: Clock, title: 'Self-paced Learning', description: 'Learn at your own pace with weekly mentor calls' },
  { icon: Target, title: 'VIP 1-on-1', description: 'Personalized training tailored to your goals' },
];

const certifications = [
  { level: 'Beginner', certs: ['Google Cybersecurity', 'CompTIA IT Fundamentals', 'Security+'], color: 'hsl(180, 100%, 50%)' },
  { level: 'Intermediate', certs: ['eJPT', 'PNPT', 'CySA+'], color: 'hsl(45, 100%, 50%)' },
  { level: 'Advanced', certs: ['OSCP Prep', 'GPEN', 'GCIH'], color: 'hsl(0, 70%, 50%)' },
  { level: 'Expert', certs: ['CISSP Foundations', 'CISM', 'OSEP'], color: 'hsl(270, 100%, 65%)' },
];

const tools = [
  { category: 'Virtualization', items: ['VirtualBox', 'VMware Player'] },
  { category: 'Operating Systems', items: ['Kali Linux', 'Ubuntu', 'Windows Server'] },
  { category: 'Practice Platforms', items: ['TryHackMe', 'HackTheBox', 'PortSwigger Academy'] },
  { category: 'Web Testing', items: ['Burp Suite', 'OWASP ZAP', 'Postman'] },
  { category: 'Network Tools', items: ['Nmap', 'Wireshark', 'Netcat'] },
  { category: 'SIEM & Logging', items: ['ELK Stack', 'Splunk Free'] },
  { category: 'Cloud', items: ['AWS Free Tier', 'Azure Free', 'CloudGoat'] },
  { category: 'Exploitation', items: ['Metasploit', 'Hashcat', 'BloodHound'] },
];

const Resources = memo(() => {
  return (
    <section className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass border border-accent/30 text-accent text-xs font-mono mb-4">
            RESOURCES
          </span>
          <h1 className="font-mono text-3xl md:text-5xl font-bold text-foreground mb-4">
            Learning <span className="text-gradient-cyber">Resources</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed in your cybersecurity journey.
          </p>
        </motion.div>

        {/* Delivery Formats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="font-mono text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-primary" />
            Delivery Formats
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliveryFormats.map((format, index) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="p-5 rounded-xl glass border border-border/30 hover:border-primary/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center mb-4">
                  <format.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-mono font-semibold text-foreground mb-2">{format.title}</h3>
                <p className="text-sm text-muted-foreground">{format.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="font-mono text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Shield className="w-6 h-6 text-secondary" />
            Certification Mapping
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="p-5 rounded-xl glass border border-border/30"
              >
                <div
                  className="px-3 py-1 rounded-full text-xs font-mono font-bold inline-block mb-4"
                  style={{
                    background: `${level.color}20`,
                    color: level.color,
                    border: `1px solid ${level.color}40`,
                  }}
                >
                  {level.level}
                </div>
                <ul className="space-y-2">
                  {level.certs.map((cert) => (
                    <li key={cert} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: level.color }} />
                      {cert}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="font-mono text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Globe className="w-6 h-6 text-accent" />
            Tools & Platforms
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.03 }}
                className="p-5 rounded-xl glass border border-border/30"
              >
                <h3 className="font-mono font-semibold text-foreground mb-3 text-sm">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 rounded text-xs font-mono bg-muted/30 text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Program Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="p-6 rounded-2xl glass border border-border/30">
            <h3 className="font-mono text-lg font-bold text-foreground mb-4">Assessment Types</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                Practical Labs & CTF Challenges
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                Recorded Lab Submissions
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                Written Quizzes
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                Final Capstone Project
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl glass border border-border/30">
            <h3 className="font-mono text-lg font-bold text-foreground mb-4">Program Duration</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary" />
                <span><strong>Intensive:</strong> 3 months</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary" />
                <span><strong>Part-time:</strong> 6 months</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary" />
                <span><strong>Full Mastery:</strong> 12-18 months</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl glass border border-border/30">
            <h3 className="font-mono text-lg font-bold text-foreground mb-4">Target Audience</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                Absolute Beginners
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                Developers (MERN Stack)
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                IT Professionals
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                Aspiring Trainers
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Ethics Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-6 rounded-2xl bg-destructive/5 border border-destructive/20 text-center"
        >
          <Shield className="w-8 h-8 text-destructive mx-auto mb-4" />
          <h3 className="font-mono text-lg font-bold text-foreground mb-2">Ethics & Legal Notice</h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            All lab exercises use only authorized targets. Never scan or attack external systems without written permission. 
            Keep sensitive tools offline or in isolated labs. This curriculum teaches legal boundaries and encourages responsible disclosure.
          </p>
        </motion.div>
      </div>
    </section>
  );
});

Resources.displayName = 'Resources';
export default Resources;
