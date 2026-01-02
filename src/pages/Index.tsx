import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import CyberBackground from '@/components/CyberBackground';
import HeroSection from '@/components/HeroSection';
import ModuleCard from '@/components/ModuleCard';
import ModuleContent from '@/components/ModuleContent';
import RoadmapPath from '@/components/RoadmapPath';
import { modulesData } from '@/data/modules';
import { Shield, Github, BookOpen, Users } from 'lucide-react';

const Index = () => {
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const modulesRef = useRef<HTMLDivElement>(null);

  const scrollToModules = () => {
    modulesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const selectedModule = activeModule !== null 
    ? modulesData.find(m => m.id === activeModule) || null
    : null;

  return (
    <div className="min-h-screen bg-background relative">
      {/* 3D Animated Background */}
      <CyberBackground />

      {/* Scanlines overlay */}
      <div className="fixed inset-0 pointer-events-none scanlines z-[1]" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="font-mono font-bold text-foreground hidden sm:block">
                CyberSec<span className="text-primary">Academy</span>
              </span>
            </div>

            <nav className="flex items-center gap-4">
              <a 
                href="#modules" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                onClick={(e) => { e.preventDefault(); scrollToModules(); }}
              >
                Modules
              </a>
              <a 
                href="#overview" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
              >
                Paths
              </a>
              <a 
                href="#" 
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg glass border border-border/30 hover:border-primary/50 text-sm font-mono text-foreground transition-all"
              >
                <Github className="w-4 h-4" />
                Resources
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection onScrollToModules={scrollToModules} />

        {/* Career Paths */}
        <RoadmapPath />

        {/* Modules Section */}
        <section ref={modulesRef} id="modules" className="py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1 rounded-full glass border border-primary/30 text-primary text-xs font-mono mb-4">
                COMPLETE CURRICULUM
              </span>
              <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-4">
                13 Modules to <span className="text-gradient-matrix">Mastery</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each module includes theory, hands-on labs, tools, assessments, and instructor notes. 
                Select a module to explore its content.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-6">
              {/* Module List */}
              <div className="lg:col-span-4 space-y-3">
                <div className="sticky top-24">
                  <div className="grid gap-2 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
                    {modulesData.map((module, index) => (
                      <ModuleCard
                        key={module.id}
                        module={module}
                        index={index}
                        isActive={activeModule === module.id}
                        onClick={() => setActiveModule(module.id)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Module Content */}
              <div className="lg:col-span-8">
                <div className="glass rounded-2xl border border-border/30 p-6 md:p-8 min-h-[600px] sticky top-24">
                  <ModuleContent module={selectedModule} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Info Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl glass border border-border/30 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-mono text-xl font-bold text-foreground mb-2">Delivery Formats</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Instructor-led classroom</li>
                  <li>• Online cohort learning</li>
                  <li>• Self-paced with mentor calls</li>
                  <li>• VIP 1-on-1 training</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-2xl glass border border-border/30 hover:border-secondary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 border border-secondary/40 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-mono text-xl font-bold text-foreground mb-2">Certifications</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Beginner → CompTIA/Google</li>
                  <li>• Intermediate → eJPT/PNPT</li>
                  <li>• Advanced → OSCP prep</li>
                  <li>• Expert → CISSP foundations</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-2xl glass border border-border/30 hover:border-accent/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-mono text-xl font-bold text-foreground mb-2">Who's This For</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Absolute beginners</li>
                  <li>• Developers (MERN stack)</li>
                  <li>• IT professionals</li>
                  <li>• Aspiring trainers</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-border/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <span className="font-mono text-sm text-muted-foreground">
                  Zero → Hero Cybersecurity Roadmap
                </span>
              </div>
              <p className="text-xs text-muted-foreground text-center md:text-right">
                Complete, teachable, deliverable curriculum for security professionals.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
