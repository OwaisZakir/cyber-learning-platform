import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star, Users, Clock, TrendingUp, Zap, Award } from 'lucide-react';

const versions = [
  {
    id: 'lite',
    name: 'Cyber Literacy',
    subtitle: 'Awareness & Safety',
    price: '$99',
    duration: '2-3 months',
    badge: 'For Everyone',
    description: 'Perfect for non-technical users who want to understand cybersecurity basics and digital safety.',
    icon: Zap,
    color: 'hsl(45, 100%, 50%)',
    features: [
      'Digital Safety Essentials',
      'Phishing & Scam Recognition',
      'Password Management',
      'Social Media Privacy',
      'Safe Email Practices',
      'Certificate of Completion'
    ],
    audience: ['Absolute Beginners', 'Non-Technical Users', 'General Awareness'],
    outcomes: ['Become a secure digital citizen', 'Recognize common threats', 'Implement basic security hygiene'],
    modules: [1, 2, 3, 4],
    moduleCount: 4,
  },
  {
    id: 'pro',
    name: 'Cybersecurity Foundations',
    subtitle: 'Core Skills & Fundamentals',
    price: '$299',
    duration: '4-6 months',
    badge: 'Most Popular',
    description: 'Comprehensive foundation course ideal for students and IT beginners starting their cybersecurity journey.',
    icon: TrendingUp,
    color: 'hsl(180, 100%, 50%)',
    features: [
      'Computer & OS Basics',
      'Networking Fundamentals',
      'Linux & CLI Mastery',
      'Security Fundamentals',
      'Intro to Web Security',
      'Hands-on Labs',
      'SOC/Junior Security Readiness',
      'Industry Recognized Certificate'
    ],
    audience: ['Students', 'IT Professionals', 'Career Switchers', 'Developers'],
    outcomes: ['Entry-level security job readiness', 'Solid technical foundation', 'Lab environment expertise'],
    modules: [0, 1, 2, 3, 4, 5, 6],
    moduleCount: 7,
  },
  {
    id: 'practitioner',
    name: 'Practitioner Program',
    subtitle: 'Red + Blue Team Core',
    price: '$599',
    duration: '8-10 months',
    badge: 'Career Focused',
    description: 'Advanced program for serious learners ready to master both offensive and defensive security.',
    icon: Award,
    color: 'hsl(270, 100%, 65%)',
    features: [
      'Web Application Security (OWASP)',
      'Network Security & Exploitation',
      'System Exploitation Basics',
      'Blue Team Monitoring',
      'Incident Response Intro',
      'Advanced Labs & Challenges',
      'CTF Competitions',
      'Professional Certifications Prep',
      'Portfolio Building'
    ],
    audience: ['IT Professionals', 'Serious Learners', 'Career Switchers'],
    outcomes: ['Junior Pentester ready', 'SOC Analyst competent', 'Ready for advanced roles'],
    modules: [2, 4, 5, 6, 7, 8, 9],
    moduleCount: 7,
  },
  {
    id: 'specialist',
    name: 'Specialist Tracks',
    subtitle: 'Role-Based Deep Dive',
    price: '$799',
    duration: '10-14 months',
    badge: 'Role Specific',
    description: 'Choose your specialization: Red Team, Blue Team, Cloud Security, or Purple Teaming.',
    icon: Star,
    color: 'hsl(0, 70%, 50%)',
    features: [
      'Choose Your Track',
      'Red Team: Advanced Exploitation',
      'Blue Team: Threat Detection',
      'Cloud Security: AWS/Azure Focus',
      'Purple Team: Detection Engineering',
      'Specialized Tools Training',
      'Role-Specific Certifications',
      'Interview Preparation',
      'Job Placement Assistance'
    ],
    audience: ['Career-Focused Professionals', 'Specialists', 'Advanced Learners'],
    outcomes: ['Role-ready professional', 'Specialized expertise', 'Job market competitive'],
    modules: [6, 7, 8, 9, 10, 11],
    moduleCount: 6,
  },
  {
    id: 'elite',
    name: 'Master/Elite Program',
    subtitle: 'Leadership & Teaching',
    price: '$1,299',
    duration: '12+ months',
    badge: 'Exclusive',
    description: 'The complete program for future security leaders, architects, and trainers.',
    icon: Users,
    color: 'hsl(210, 100%, 50%)',
    features: [
      'All 13 Modules Coverage',
      'Advanced Strategy & Architecture',
      'Security Leadership',
      'GRC & Compliance Deep Dive',
      'Trainer Certification Program',
      'Build Your Own Curriculum',
      'Marketing & Business Training',
      'NDA & Confidential Content',
      'Lifetime Community Access',
      'Executive Mentorship'
    ],
    audience: ['Future Leaders', 'Trainers & Consultants', 'Architects', 'CTOs'],
    outcomes: ['Security architect ready', 'Can train others', 'Consulting competent', 'Leadership role ready'],
    modules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    moduleCount: 13,
  },
];

const CourseVersions = memo(() => {
  return (
    <section className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass border border-primary/30 text-primary text-xs font-mono mb-4">
            COURSE PACKAGES
          </span>
          <h1 className="font-mono text-3xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your <span className="text-gradient-cyber">Learning Path</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Five carefully designed packages to match your goals, experience level, and timeline.
          </p>
        </motion.div>

        {/* Versions Grid */}
        <div className="space-y-6">
          {versions.map((version, index) => (
            <motion.div
              key={version.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Popular badge */}
              {version.badge === 'Most Popular' && (
                <div className="absolute -top-4 left-8 z-20">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-primary text-primary-foreground">
                    ⭐ {version.badge}
                  </span>
                </div>
              )}

              <div className="p-6 md:p-8 rounded-2xl glass border border-border/30 hover:border-primary/50 transition-all relative overflow-hidden">
                {/* Glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at 0% 50%, ${version.color}10 0%, transparent 50%)`,
                  }}
                />

                <div className="relative z-10 grid lg:grid-cols-4 gap-8">
                  {/* Main Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          background: `${version.color}20`,
                          border: `1px solid ${version.color}40`,
                        }}
                      >
                        <version.icon className="w-7 h-7" style={{ color: version.color }} />
                      </div>
                      <div>
                        <h2 className="font-mono text-2xl font-bold text-foreground">{version.name}</h2>
                        <p className="text-sm font-mono" style={{ color: version.color }}>
                          {version.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {version.description}
                    </p>

                    {/* Target Audience */}
                    <div className="mb-6">
                      <h4 className="text-xs font-mono text-muted-foreground/60 mb-2">IDEAL FOR</h4>
                      <div className="flex flex-wrap gap-2">
                        {version.audience.map((aud) => (
                          <span
                            key={aud}
                            className="px-3 py-1 rounded-full text-xs font-mono glass border border-border/30"
                          >
                            {aud}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="lg:col-span-1">
                    <h4 className="text-xs font-mono text-muted-foreground/60 mb-4">INCLUDES</h4>
                    <ul className="space-y-2">
                      {version.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="lg:col-span-1 lg:border-l lg:border-border/20 lg:pl-8 flex flex-col justify-between">
                    <div>
                      <div className="mb-6">
                        <h4 className="text-xs font-mono text-muted-foreground/60 mb-2">INVESTMENT</h4>
                        <div className="text-3xl font-mono font-bold text-foreground mb-1">
                          {version.price}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {version.duration}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-xs font-mono text-muted-foreground/60 mb-2">MODULES</h4>
                        <div className="text-lg font-mono font-bold text-foreground">
                          {version.moduleCount} Modules
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs font-mono text-muted-foreground/60 mb-2">YOU'LL BE ABLE TO</h4>
                        <ul className="space-y-1">
                          {version.outcomes.map((outcome) => (
                            <li
                              key={outcome}
                              className="flex items-start gap-2 text-xs text-muted-foreground"
                            >
                              <span className="text-primary mt-0.5">→</span>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to="/modules"
                      className="mt-6 flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-mono text-sm transition-all hover:scale-105"
                      style={{
                        background: `${version.color}20`,
                        color: version.color,
                        border: `1px solid ${version.color}40`,
                      }}
                    >
                      Explore Modules
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-2xl glass border border-border/30"
        >
          <h3 className="font-mono text-2xl font-bold text-foreground mb-6">Why Multiple Versions?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Not everyone needs or wants the full program. Our tiered approach ensures you get exactly the training
                you need without paying for unnecessary content. Whether you're a curious beginner or an aspiring
                security architect, we have the perfect package for your journey.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each version builds on the previous one, so you can always upgrade as your skills and ambitions grow.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Start with any version that matches your current level</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Upgrade anytime as you progress through your career</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Get certified at your chosen level</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Access lifetime updates and community support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

CourseVersions.displayName = 'CourseVersions';
export default CourseVersions;
