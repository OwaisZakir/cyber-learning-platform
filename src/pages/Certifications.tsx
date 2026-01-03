import { memo } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Award, Zap, Target, Shield, BookOpen, BarChart3 } from 'lucide-react';

const assessmentTypes = [
  {
    icon: BookOpen,
    title: 'Practical Labs',
    description: 'Hands-on exercises using real tools and environments. Build muscle memory and practical expertise.',
    color: 'hsl(180, 100%, 50%)',
    examples: ['Port scanning with Nmap', 'Web testing with Burp Suite', 'Network analysis with Wireshark'],
  },
  {
    icon: Target,
    title: 'CTF Challenges',
    description: 'Capture-The-Flag competitions. Solve security puzzles and compete with peers.',
    color: 'hsl(45, 100%, 50%)',
    examples: ['Exploit vulnerable apps', 'Crack password hashes', 'Find hidden flags'],
  },
  {
    icon: Shield,
    title: 'Written Assessments',
    description: 'Quizzes and exams covering concepts, tools, and methodologies.',
    color: 'hsl(270, 100%, 65%)',
    examples: ['Multiple choice quizzes', 'Short answer questions', 'Case study analysis'],
  },
  {
    icon: BarChart3,
    title: 'Capstone Projects',
    description: 'Comprehensive projects demonstrating mastery across multiple modules.',
    color: 'hsl(0, 70%, 50%)',
    examples: ['Full penetration test report', 'SOC incident response simulation', 'Cloud security audit'],
  },
];

const certificationLevels = [
  {
    level: 'Beginner',
    color: 'hsl(180, 100%, 50%)',
    icon: TrendingUp,
    duration: '2-3 months',
    description: 'Foundation for digital safety and cyber awareness',
    certs: [
      { name: 'CyberSec Academy Cyber Literacy', issuer: 'CyberSecAcademy', difficulty: 'Beginner' },
      { name: 'Google Cybersecurity Certificate', issuer: 'Google / Coursera', difficulty: 'Beginner' },
      { name: 'CompTIA IT Fundamentals', issuer: 'CompTIA', difficulty: 'Beginner' },
    ],
    skills: ['Digital Safety', 'Phishing Recognition', 'Password Management', 'Basic Networking'],
  },
  {
    level: 'Intermediate',
    color: 'hsl(45, 100%, 50%)',
    icon: Award,
    duration: '4-6 months',
    description: 'Entry-level security professional ready for junior roles',
    certs: [
      { name: 'CyberSec Academy Foundations', issuer: 'CyberSecAcademy', difficulty: 'Intermediate' },
      { name: 'CompTIA Security+', issuer: 'CompTIA', difficulty: 'Intermediate' },
      { name: 'eJPT (Junior Penetration Tester)', issuer: 'eLearnSecurity', difficulty: 'Intermediate' },
      { name: 'CySA+ (Cybersecurity Analyst)', issuer: 'CompTIA', difficulty: 'Intermediate' },
    ],
    skills: ['Linux Administration', 'Networking', 'Web Security Basics', 'SIEM Concepts', 'Incident Response Intro'],
  },
  {
    level: 'Advanced',
    color: 'hsl(0, 70%, 50%)',
    icon: Zap,
    duration: '8-10 months',
    description: 'Professional security expert ready for specialized roles',
    certs: [
      { name: 'CyberSec Academy Practitioner', issuer: 'CyberSecAcademy', difficulty: 'Advanced' },
      { name: 'PNPT (Practical Network Penetration Tester)', issuer: 'TCM Security', difficulty: 'Advanced' },
      { name: 'GCIH (Global Certified Incident Handler)', issuer: 'EC-Council', difficulty: 'Advanced' },
      { name: 'GPEN (GIAC Penetration Tester)', issuer: 'GIAC', difficulty: 'Advanced' },
    ],
    skills: ['Web Exploitation', 'Network Exploitation', 'Threat Hunting', 'Incident Response', 'Report Writing'],
  },
  {
    level: 'Expert',
    color: 'hsl(270, 100%, 65%)',
    icon: Shield,
    duration: '12+ months',
    description: 'Elite professional with leadership capability',
    certs: [
      { name: 'CyberSec Academy Elite/Master', issuer: 'CyberSecAcademy', difficulty: 'Expert' },
      { name: 'OSCP (Offensive Security Certified Professional)', issuer: 'Offensive Security', difficulty: 'Expert' },
      { name: 'CISSP (Certified Information Systems Security Professional)', issuer: 'ISC²', difficulty: 'Expert' },
      { name: 'CISM (Certified Information Security Manager)', issuer: 'ISACA', difficulty: 'Expert' },
    ],
    skills: ['Advanced Exploitation', 'Security Architecture', 'Risk Management', 'Leadership', 'Teaching'],
  },
];

const pathCertifications = [
  {
    path: 'Red Team',
    color: 'hsl(0, 70%, 50%)',
    certs: ['eJPT', 'PNPT', 'GPEN', 'OSCP', 'OSWP'],
    companies: ['HackerOne', 'Bugcrowd', 'Offensive Security', 'Offsec'],
  },
  {
    path: 'Blue Team',
    color: 'hsl(210, 100%, 50%)',
    certs: ['CompTIA Security+', 'CySA+', 'GCIH', 'GCIA', 'CEH (Defensive)'],
    companies: ['Microsoft', 'Cisco', 'Splunk', 'CrowdStrike'],
  },
  {
    path: 'Purple Team',
    color: 'hsl(270, 100%, 65%)',
    certs: ['MITRE ATT&CK', 'GDAT', 'GCDA', 'OSCP', 'GIAC Courses'],
    companies: ['MITRE', 'Red Teaming Firms', 'Consulting Firms'],
  },
  {
    path: 'Cloud Security',
    color: 'hsl(180, 100%, 50%)',
    certs: ['AWS Security Specialty', 'AZ-500 (Azure)', 'GCP Professional', 'CCSK'],
    companies: ['Amazon AWS', 'Microsoft Azure', 'Google Cloud', 'IBM'],
  },
  {
    path: 'GRC',
    color: 'hsl(45, 100%, 50%)',
    certs: ['CISA', 'CRISC', 'CISSP', 'CCSK', 'ISO 27001 Auditor'],
    companies: ['Deloitte', 'EY', 'PwC', 'Accenture'],
  },
];

const Certifications = memo(() => {
  return (
    <section className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass border border-secondary/30 text-secondary text-xs font-mono mb-4">
            ASSESSMENTS & CERTIFICATIONS
          </span>
          <h1 className="font-mono text-3xl md:text-5xl font-bold text-foreground mb-4">
            Build Your <span className="text-gradient-cyber">Professional Credentials</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications and assessments that validate your expertise and advance your career.
          </p>
        </motion.div>

        {/* Assessment Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="font-mono text-3xl font-bold text-foreground mb-4">
              How We <span className="text-gradient-cyber">Assess</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {assessmentTypes.map((assessment, index) => (
              <motion.div
                key={assessment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl glass border border-border/30 hover:border-primary/30 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: `${assessment.color}20`,
                    border: `1px solid ${assessment.color}40`,
                  }}
                >
                  <assessment.icon className="w-6 h-6" style={{ color: assessment.color }} />
                </div>
                <h3 className="font-mono text-xl font-bold text-foreground mb-2">{assessment.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{assessment.description}</p>
                <div>
                  <span className="text-xs font-mono text-muted-foreground/60">Examples:</span>
                  <ul className="mt-2 space-y-1">
                    {assessment.examples.map((example) => (
                      <li key={example} className="text-xs text-muted-foreground flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-primary" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certification Levels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="font-mono text-3xl font-bold text-foreground mb-4">
              Certification <span className="text-gradient-cyber">Levels</span>
            </h2>
            <p className="text-muted-foreground">
              Progress through recognized certifications at each level of expertise
            </p>
          </div>

          <div className="space-y-6">
            {certificationLevels.map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 md:p-8 rounded-2xl glass border border-border/30 hover:border-primary/30 transition-all relative overflow-hidden group"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at 100% 0%, ${level.color}10 0%, transparent 50%)`,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: `${level.color}20`,
                        border: `1px solid ${level.color}40`,
                      }}
                    >
                      <level.icon className="w-7 h-7" style={{ color: level.color }} />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="font-mono text-2xl font-bold mb-1"
                        style={{ color: level.color }}
                      >
                        {level.level} Level
                      </h3>
                      <p className="text-sm text-muted-foreground">{level.description}</p>
                      <p className="text-xs font-mono text-muted-foreground/60 mt-1">Duration: {level.duration}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs font-mono font-bold text-foreground mb-3">Certifications</h4>
                      <div className="space-y-2">
                        {level.certs.map((cert) => (
                          <div key={cert.name} className="text-sm text-muted-foreground flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <div>
                              <div className="font-mono text-xs font-semibold text-foreground">{cert.name}</div>
                              <div className="text-xs text-muted-foreground/60">{cert.issuer}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono font-bold text-foreground mb-3">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {level.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full text-xs font-mono glass border border-border/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Path-Specific Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="font-mono text-3xl font-bold text-foreground mb-4">
              Path-Specific <span className="text-gradient-cyber">Certifications</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {pathCertifications.map((path, index) => (
              <motion.div
                key={path.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-xl glass border border-border/30 hover:border-primary/30 transition-all"
              >
                <h3 className="font-mono font-bold text-foreground mb-4" style={{ color: path.color }}>
                  {path.path}
                </h3>

                <div className="mb-6">
                  <h4 className="text-xs font-mono font-bold text-muted-foreground/60 mb-2">CERTIFICATIONS</h4>
                  <div className="space-y-1">
                    {path.certs.map((cert) => (
                      <div key={cert} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: path.color }}
                        />
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold text-muted-foreground/60 mb-2">TOP EMPLOYERS</h4>
                  <div className="space-y-1">
                    {path.companies.map((company) => (
                      <div key={company} className="text-xs text-muted-foreground">{company}</div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {[
            {
              stat: '95%',
              label: 'Student Pass Rate',
              description: 'Our students achieve high pass rates on industry certifications',
            },
            {
              stat: '12+',
              label: 'Certifications Covered',
              description: 'Prepare for multiple industry-recognized certifications',
            },
            {
              stat: '$75K+',
              label: 'Avg. Salary Increase',
              description: 'Students report significant career growth and salary improvements',
            },
          ].map((metric, index) => (
            <motion.div
              key={metric.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl glass border border-border/30 text-center"
            >
              <div className="text-3xl md:text-4xl font-mono font-bold text-gradient-cyber mb-2">
                {metric.stat}
              </div>
              <h3 className="font-mono font-bold text-foreground mb-2">{metric.label}</h3>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-2xl glass border border-primary/20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="relative z-10">
            <h2 className="font-mono text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Earn Your Credentials?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Choose the certification path that matches your career goals and let us guide you to success.
            </p>
            <a
              href="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-mono font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
            >
              Start Your Journey
              <CheckCircle className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Certifications.displayName = 'Certifications';
export default Certifications;
