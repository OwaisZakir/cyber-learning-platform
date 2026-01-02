import { motion } from 'framer-motion';
import { Shield, Eye, Cloud, Users, Crosshair } from 'lucide-react';

const paths = [
  {
    title: 'Red Team',
    icon: Crosshair,
    description: 'Offensive security, penetration testing, ethical hacking',
    modules: [5, 6, 7, 8],
    color: 'hsl(0, 70%, 50%)',
    roles: ['Pentester', 'Bug Bounty Hunter', 'Red Team Operator'],
  },
  {
    title: 'Blue Team',
    icon: Shield,
    description: 'Defense, monitoring, incident response',
    modules: [2, 4, 9, 11],
    color: 'hsl(210, 100%, 50%)',
    roles: ['SOC Analyst', 'Incident Responder', 'Security Engineer'],
  },
  {
    title: 'Purple Team',
    icon: Users,
    description: 'Bridge attack & defense, detection engineering',
    modules: [6, 9, 11],
    color: 'hsl(270, 100%, 65%)',
    roles: ['Detection Engineer', 'Security Architect'],
  },
  {
    title: 'Cloud Security',
    icon: Cloud,
    description: 'AWS, Azure, cloud architecture security',
    modules: [10],
    color: 'hsl(180, 100%, 50%)',
    roles: ['Cloud Security Engineer', 'DevSecOps'],
  },
  {
    title: 'GRC',
    icon: Eye,
    description: 'Governance, risk management, compliance',
    modules: [4, 10, 12],
    color: 'hsl(45, 100%, 50%)',
    roles: ['Compliance Analyst', 'Risk Manager', 'Auditor'],
  },
];

const RoadmapPath = () => {
  return (
    <section id="overview" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass border border-secondary/30 text-secondary text-xs font-mono mb-4">
            CAREER PATHS
          </span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your <span className="text-gradient-cyber">Specialization</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The curriculum supports multiple career tracks. Each path focuses on specific modules while building on core fundamentals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paths.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="p-6 rounded-2xl glass border border-border/30 hover:border-primary/30 transition-all duration-300 h-full relative overflow-hidden">
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${path.color}15 0%, transparent 60%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ 
                      background: `${path.color}20`,
                      border: `1px solid ${path.color}40`,
                    }}
                  >
                    <path.icon className="w-6 h-6" style={{ color: path.color }} />
                  </div>

                  {/* Title */}
                  <h3 className="font-mono text-xl font-bold text-foreground mb-2 group-hover:text-gradient-cyber transition-colors">
                    {path.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {path.description}
                  </p>

                  {/* Modules */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {path.modules.map((mod) => (
                      <span 
                        key={mod}
                        className="px-2 py-1 rounded text-xs font-mono"
                        style={{ 
                          background: `${path.color}15`,
                          color: path.color,
                        }}
                      >
                        M{mod}
                      </span>
                    ))}
                  </div>

                  {/* Roles */}
                  <div className="pt-4 border-t border-border/20">
                    <span className="text-xs text-muted-foreground/60 font-mono">Career Roles:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {path.roles.map((role) => (
                        <span 
                          key={role}
                          className="text-xs text-muted-foreground"
                        >
                          • {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapPath;
