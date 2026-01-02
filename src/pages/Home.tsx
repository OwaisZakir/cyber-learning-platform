import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ChevronDown, Terminal, Lock, Wifi, Database, ArrowRight, BookOpen, Users, Zap } from 'lucide-react';

const stats = [
  { value: '13', label: 'Modules' },
  { value: '100+', label: 'Lab Hours' },
  { value: '5', label: 'Career Paths' },
  { value: '∞', label: 'Skills Gained' },
];

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'From digital basics to advanced exploitation and defense techniques',
    color: 'primary',
  },
  {
    icon: Zap,
    title: 'Hands-on Labs',
    description: 'Real-world practice with industry-standard tools and environments',
    color: 'secondary',
  },
  {
    icon: Users,
    title: 'Multiple Career Paths',
    description: 'Red Team, Blue Team, Purple Team, Cloud Security, and GRC tracks',
    color: 'accent',
  },
];

const Home = memo(() => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Floating icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-32 left-[10%] text-primary/20"
          >
            <Shield className="w-16 h-16" />
          </motion.div>
          <motion.div
            animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-40 right-[15%] text-secondary/20"
          >
            <Terminal className="w-12 h-12" />
          </motion.div>
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-32 left-[20%] text-accent/20"
          >
            <Lock className="w-14 h-14" />
          </motion.div>
          <motion.div
            animate={{ y: [10, -25, 10], rotate: [0, -5, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-48 right-[25%] text-primary/15"
          >
            <Wifi className="w-10 h-10" />
          </motion.div>
          <motion.div
            animate={{ y: [-10, 20, -10], rotate: [0, 8, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-48 left-[40%] text-secondary/15"
          >
            <Database className="w-8 h-8" />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-mono text-primary">12-18 Month Comprehensive Program</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-foreground">Zero → Hero</span>
              <br />
              <span className="text-gradient-cyber">Cybersecurity</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto"
            >
              Complete, teachable, deliverable curriculum from absolute beginner to security professional
            </motion.p>

            {/* Terminal-style text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/30 border border-border/30 font-mono text-sm text-muted-foreground mb-12"
            >
              <span className="text-secondary">$</span>
              <span>13 Modules</span>
              <span className="text-muted-foreground/40">|</span>
              <span>Red + Blue + Purple Teams</span>
              <span className="text-muted-foreground/40">|</span>
              <span>Hands-on Labs</span>
              <span className="cursor-blink"></span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/modules"
                className="group relative px-8 py-4 rounded-xl font-mono font-semibold text-primary-foreground overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Explore Curriculum
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                to="/paths"
                className="px-8 py-4 rounded-xl font-mono font-semibold text-foreground glass border border-border/30 hover:border-primary/50 transition-all duration-300 hover:glow-cyber"
              >
                View Career Paths
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className="p-4 rounded-xl glass border border-border/20 hover:border-primary/30 transition-colors"
                >
                  <div className="font-mono text-2xl md:text-3xl font-bold text-gradient-cyber">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full glass border border-border/30"
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full glass border border-primary/30 text-primary text-xs font-mono mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete <span className="text-gradient-cyber">Learning Experience</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl glass border border-border/30 hover:border-primary/30 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-${feature.color}/20 border border-${feature.color}/40 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                <h3 className="font-mono text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center p-8 md:p-12 rounded-3xl glass border border-primary/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <div className="relative z-10">
              <h2 className="font-mono text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-muted-foreground mb-8">
                Explore our comprehensive 13-module curriculum designed to take you from zero to hero in cybersecurity.
              </p>
              <Link
                to="/modules"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-mono font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
              >
                View All Modules
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
});

Home.displayName = 'Home';
export default Home;
