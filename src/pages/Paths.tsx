import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Eye, Cloud, Users, Crosshair, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { modulesData } from '@/data/modules';

const paths = [
  {
    id: 'red-team',
    title: 'Red Team',
    subtitle: 'Offensive Security',
    icon: Crosshair,
    description: 'Master offensive security, penetration testing, and ethical hacking techniques. Learn to think like an attacker to better defend systems.',
    modules: [5, 6, 7, 8],
    color: 'hsl(0, 70%, 50%)',
    roles: ['Penetration Tester', 'Bug Bounty Hunter', 'Red Team Operator', 'Security Researcher'],
    skills: ['Web Application Testing', 'Network Exploitation', 'Privilege Escalation', 'Post-Exploitation'],
    duration: '4-6 months',
    certifications: ['eJPT', 'PNPT', 'OSCP'],
  },
  {
    id: 'blue-team',
    title: 'Blue Team',
    subtitle: 'Defensive Security',
    icon: Shield,
    description: 'Build expertise in defense, monitoring, and incident response. Protect organizations from cyber threats and respond effectively to breaches.',
    modules: [2, 4, 9, 11],
    color: 'hsl(210, 100%, 50%)',
    roles: ['SOC Analyst', 'Incident Responder', 'Security Engineer', 'Threat Hunter'],
    skills: ['SIEM Operations', 'Log Analysis', 'Incident Response', 'Threat Detection'],
    duration: '4-6 months',
    certifications: ['CompTIA Security+', 'CySA+', 'GCIH'],
  },
  {
    id: 'purple-team',
    title: 'Purple Team',
    subtitle: 'Attack + Defense Bridge',
    icon: Users,
    description: 'Bridge offensive and defensive skills to create better security outcomes. Translate attack techniques into detections and improve overall security posture.',
    modules: [6, 9, 11],
    color: 'hsl(270, 100%, 65%)',
    roles: ['Detection Engineer', 'Security Architect', 'Purple Team Lead', 'Threat Intelligence'],
    skills: ['MITRE ATT&CK', 'Detection Engineering', 'Gap Analysis', 'Security Metrics'],
    duration: '3-4 months',
    certifications: ['GDAT', 'GCDA'],
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security',
    subtitle: 'AWS, Azure, GCP',
    icon: Cloud,
    description: 'Secure cloud resources and identities across major cloud platforms. Understand the shared responsibility model and cloud-specific attack vectors.',
    modules: [10],
    color: 'hsl(180, 100%, 50%)',
    roles: ['Cloud Security Engineer', 'DevSecOps Engineer', 'Cloud Architect'],
    skills: ['IAM Hardening', 'Cloud Misconfigurations', 'Container Security', 'IaC Security'],
    duration: '2-3 months',
    certifications: ['AWS Security Specialty', 'AZ-500', 'CCSP'],
  },
  {
    id: 'grc',
    title: 'GRC',
    subtitle: 'Governance, Risk & Compliance',
    icon: Eye,
    description: 'Master governance, risk management, and compliance frameworks. Help organizations meet regulatory requirements and manage security risks.',
    modules: [4, 10, 12],
    color: 'hsl(45, 100%, 50%)',
    roles: ['Compliance Analyst', 'Risk Manager', 'Security Auditor', 'CISO'],
    skills: ['Risk Assessment', 'Policy Development', 'Audit Preparation', 'Framework Implementation'],
    duration: '3-4 months',
    certifications: ['CISA', 'CRISC', 'CISSP'],
  },
];

const Paths = memo(() => {
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
            CAREER PATHS
          </span>
          <h1 className="font-mono text-3xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your <span className="text-gradient-cyber">Specialization</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The curriculum supports multiple career tracks. Each path focuses on specific modules while building on core fundamentals.
          </p>
        </motion.div>

        {/* Paths Grid */}
        <div className="space-y-8">
          {paths.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="p-6 md:p-8 rounded-2xl glass border border-border/30 hover:border-primary/30 transition-all relative overflow-hidden group">
                {/* Glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at 0% 50%, ${path.color}10 0%, transparent 50%)`,
                  }}
                />

                <div className="relative z-10 grid lg:grid-cols-3 gap-8">
                  {/* Main Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          background: `${path.color}20`,
                          border: `1px solid ${path.color}40`,
                        }}
                      >
                        <path.icon className="w-7 h-7" style={{ color: path.color }} />
                      </div>
                      <div>
                        <h2 className="font-mono text-2xl font-bold text-foreground">{path.title}</h2>
                        <p className="text-sm font-mono" style={{ color: path.color }}>{path.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {path.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-xs font-mono text-muted-foreground/60 mb-2">KEY SKILLS</h4>
                      <div className="flex flex-wrap gap-2">
                        {path.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full text-xs font-mono glass border border-border/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Modules */}
                    <div>
                      <h4 className="text-xs font-mono text-muted-foreground/60 mb-2">INCLUDED MODULES</h4>
                      <div className="flex flex-wrap gap-2">
                        {path.modules.map((modId) => {
                          const mod = modulesData.find((m) => m.id === modId);
                          return (
                            <Link
                              key={modId}
                              to={`/modules/${modId}`}
                              className="px-3 py-1.5 rounded-lg text-xs font-mono transition-all hover:scale-105"
                              style={{
                                background: `${path.color}15`,
                                color: path.color,
                                border: `1px solid ${path.color}30`,
                              }}
                            >
                              M{modId}: {mod?.title.split(' ').slice(0, 2).join(' ')}...
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Side Info */}
                  <div className="lg:border-l lg:border-border/20 lg:pl-8 space-y-6">
                    {/* Duration */}
                    <div>
                      <h4 className="text-xs font-mono text-muted-foreground/60 mb-2">ESTIMATED DURATION</h4>
                      <div className="flex items-center gap-2 text-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="font-mono">{path.duration}</span>
                      </div>
                    </div>

                    {/* Certifications */}
                    <div>
                      <h4 className="text-xs font-mono text-muted-foreground/60 mb-2">CERT PREPARATION</h4>
                      <div className="flex flex-wrap gap-2">
                        {path.certifications.map((cert) => (
                          <span
                            key={cert}
                            className="px-2 py-1 rounded text-xs font-mono bg-muted/30 text-muted-foreground"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Roles */}
                    <div>
                      <h4 className="text-xs font-mono text-muted-foreground/60 mb-2">CAREER ROLES</h4>
                      <ul className="space-y-1">
                        {path.roles.map((role) => (
                          <li key={role} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-3 h-3 text-secondary" />
                            {role}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link
                      to={`/modules/${path.modules[0]}`}
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-mono text-sm transition-all hover:scale-105"
                      style={{
                        background: `${path.color}20`,
                        color: path.color,
                        border: `1px solid ${path.color}40`,
                      }}
                    >
                      Start This Path
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Paths.displayName = 'Paths';
export default Paths;
