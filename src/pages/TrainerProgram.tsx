import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, BookOpen, TrendingUp, Award, ArrowRight, CheckCircle, Zap, Target, Shield, BarChart3 } from 'lucide-react';

const trainerLevels = [
  {
    level: 'Junior Trainer',
    duration: '2-3 months',
    color: 'hsl(180, 100%, 50%)',
    icon: BookOpen,
    description: 'Ready to assist experienced trainers and deliver structured content.',
    requirements: [
      'Complete Master/Elite program',
      'Pass trainer assessment',
      'Deliver 1 demo class',
      'Understand training methodology'
    ],
    responsibilities: [
      'Assist in classroom sessions',
      'Support student labs',
      'Grade assignments',
      'Answer student questions'
    ],
    earnings: '$30-50/hour',
  },
  {
    level: 'Lead Trainer',
    duration: '6-9 months',
    color: 'hsl(45, 100%, 50%)',
    icon: Users,
    description: 'Lead classes independently and mentor junior trainers.',
    requirements: [
      'Minimum 1-2 years training experience',
      'Deliver 10+ successful classes',
      'Mentor 2+ junior trainers',
      'Advanced trainer certification'
    ],
    responsibilities: [
      'Design & deliver curriculum',
      'Mentor junior trainers',
      'Manage student progress',
      'Continuous content improvement'
    ],
    earnings: '$75-125/hour',
  },
  {
    level: 'Master Trainer',
    duration: '1+ years',
    color: 'hsl(0, 70%, 50%)',
    icon: Award,
    description: 'Lead initiatives and shape the future of cybersecurity education.',
    requirements: [
      '5+ years industry experience',
      'Lead trainer status for 2+ years',
      'Published educational content',
      'Community leadership'
    ],
    responsibilities: [
      'Create new courses',
      'Build training programs',
      'Train other trainers',
      'Strategic planning'
    ],
    earnings: '$150-300+/hour',
  },
];

const benefits = [
  {
    icon: Zap,
    title: 'Be a Knowledge Multiplier',
    description: 'Transform dozens of students into security professionals. Your impact scales exponentially.',
  },
  {
    icon: Target,
    title: 'Shape the Industry',
    description: 'Influence how the next generation of cybersecurity professionals thinks and acts.',
  },
  {
    icon: TrendingUp,
    title: 'Grow Your Career',
    description: 'Leverage training experience to accelerate your own career growth and consulting opportunities.',
  },
  {
    icon: Shield,
    title: 'Community Impact',
    description: 'Make cybersecurity education accessible locally while building your reputation.',
  },
  {
    icon: BarChart3,
    title: 'Earn While Teaching',
    description: 'Flexible earning model with hourly rates, workshop fees, or revenue sharing.',
  },
  {
    icon: Users,
    title: 'Build a Network',
    description: 'Connect with fellow trainers, mentors, and professionals in the cybersecurity community.',
  },
];

const getStarted = [
  {
    step: 1,
    title: 'Complete the Master Program',
    description: 'Enroll in and complete the Elite/Master course covering all 13 modules plus trainer certification.',
  },
  {
    step: 2,
    title: 'Pass Trainer Assessment',
    description: 'Demonstrate teaching ability through written exam, teaching demo, and student feedback evaluation.',
  },
  {
    step: 3,
    title: 'Get Certified',
    description: 'Receive official trainer certification valid globally. Access trainer resources and materials.',
  },
  {
    step: 4,
    title: 'Choose Your Format',
    description: 'Select delivery format: classroom, online, hybrid, or 1-on-1. Work with us or independently.',
  },
  {
    step: 5,
    title: 'Start Teaching',
    description: 'Launch your first cohort. We provide curriculum, marketing support, and ongoing mentorship.',
  },
];

const TrainerProgram = memo(() => {
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
            BECOME AN INSTRUCTOR
          </span>
          <h1 className="font-mono text-3xl md:text-5xl font-bold text-foreground mb-4">
            Train the Next Generation of <span className="text-gradient-cyber">Cybersecurity Professionals</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Share your expertise, shape careers, and make a lasting impact on the cybersecurity industry.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-6 rounded-xl glass border border-border/30 hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center mb-4">
                <benefit.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-mono font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trainer Levels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="font-mono text-3xl font-bold text-foreground mb-4">
              Trainer <span className="text-gradient-cyber">Career Path</span>
            </h2>
            <p className="text-muted-foreground">
              Advance through structured levels with increasing responsibility and earning potential.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {trainerLevels.map((trainer, index) => (
              <motion.div
                key={trainer.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl glass border border-border/30 hover:border-primary/30 transition-all relative overflow-hidden group"
              >
                {/* Glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${trainer.color}10 0%, transparent 60%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-mono text-xl font-bold text-foreground">{trainer.level}</h3>
                      <p className="text-xs font-mono text-muted-foreground/60 mt-1">{trainer.duration}</p>
                    </div>
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: `${trainer.color}20`,
                        border: `1px solid ${trainer.color}40`,
                      }}
                    >
                      <trainer.icon className="w-5 h-5" style={{ color: trainer.color }} />
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">{trainer.description}</p>

                  {/* Requirements */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono font-bold text-foreground mb-2">REQUIREMENTS</h4>
                    <ul className="space-y-1">
                      {trainer.requirements.map((req) => (
                        <li key={req} className="text-xs text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono font-bold text-foreground mb-2">RESPONSIBILITIES</h4>
                    <ul className="space-y-1">
                      {trainer.responsibilities.map((resp) => (
                        <li key={resp} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5">→</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Earnings */}
                  <div
                    className="p-3 rounded-lg"
                    style={{
                      background: `${trainer.color}10`,
                      border: `1px solid ${trainer.color}20`,
                    }}
                  >
                    <span className="text-xs font-mono font-bold" style={{ color: trainer.color }}>
                      {trainer.earnings}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Getting Started */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="font-mono text-3xl font-bold text-foreground mb-4">
              Getting <span className="text-gradient-cyber">Started</span>
            </h2>
          </div>

          <div className="space-y-4">
            {getStarted.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl glass border border-border/30 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0">
                    <span className="font-mono font-bold text-primary">{item.step}</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-mono font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-2xl glass border border-primary/20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="relative z-10">
            <h2 className="font-mono text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our network of expert trainers transforming the cybersecurity industry, one student at a time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:trainers@cybersecurity.local"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-mono font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/courses"
                className="px-8 py-4 rounded-xl font-mono font-semibold glass border border-border/30 hover:border-primary/50 transition-all"
              >
                Explore Master Program
              </Link>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="font-mono text-3xl font-bold text-foreground">
              Trainer <span className="text-gradient-cyber">FAQ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: 'Do I need prior teaching experience?',
                a: 'No, but you need deep cybersecurity expertise and willingness to learn teaching methodology. We provide comprehensive trainer support.',
              },
              {
                q: 'Can I train part-time?',
                a: 'Yes! Many trainers start part-time. You choose your schedule and delivery format (classroom, online, or 1-on-1).',
              },
              {
                q: 'What support do you provide?',
                a: 'Curriculum, slides, lab guides, student materials, marketing support, student management platform, and ongoing mentorship.',
              },
              {
                q: 'How much can I earn?',
                a: 'Depends on your level and format. Junior trainers earn $30-50/hr, Lead trainers $75-125/hr, and Master trainers $150-300+/hr.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl glass border border-border/30"
              >
                <h4 className="font-mono font-bold text-foreground mb-2">{item.q}</h4>
                <p className="text-sm text-muted-foreground">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

TrainerProgram.displayName = 'TrainerProgram';
export default TrainerProgram;
