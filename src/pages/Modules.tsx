import { memo, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ChevronRight, Search, Filter } from 'lucide-react';
import { modulesData } from '@/data/modules';
import { Input } from '@/components/ui/input';

const levelColors = {
  beginner: 'hsl(180, 100%, 50%)',
  intermediate: 'hsl(45, 100%, 50%)',
  advanced: 'hsl(0, 70%, 50%)',
};

const getModuleLevel = (id: number): 'beginner' | 'intermediate' | 'advanced' => {
  if (id <= 4) return 'beginner';
  if (id <= 8) return 'intermediate';
  return 'advanced';
};

const Modules = memo(() => {
  const [search, setSearch] = useState('');
  const [levelFilter, setLevelFilter] = useState<string | null>(null);

  const filteredModules = useMemo(() => {
    return modulesData.filter((module) => {
      const matchesSearch = module.title.toLowerCase().includes(search.toLowerCase()) ||
        module.description.toLowerCase().includes(search.toLowerCase());
      const matchesLevel = !levelFilter || getModuleLevel(module.id) === levelFilter;
      return matchesSearch && matchesLevel;
    });
  }, [search, levelFilter]);

  return (
    <section className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full glass border border-primary/30 text-primary text-xs font-mono mb-4">
            COMPLETE CURRICULUM
          </span>
          <h1 className="font-mono text-3xl md:text-5xl font-bold text-foreground mb-4">
            13 Modules to <span className="text-gradient-matrix">Mastery</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each module includes theory, hands-on labs, tools, assessments, and instructor notes.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search modules..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 glass border-border/30 focus:border-primary/50"
            />
          </div>
          <div className="flex gap-2">
            {['beginner', 'intermediate', 'advanced'].map((level) => (
              <button
                key={level}
                onClick={() => setLevelFilter(levelFilter === level ? null : level)}
                className={`px-4 py-2 rounded-lg text-xs font-mono capitalize transition-all ${
                  levelFilter === level
                    ? 'bg-primary/20 text-primary border border-primary/40'
                    : 'glass border border-border/30 text-muted-foreground hover:border-primary/30'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module, index) => {
            const level = getModuleLevel(module.id);
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={`/modules/${module.id}`}
                  className="block h-full p-6 rounded-2xl glass border border-border/30 hover:border-primary/40 transition-all group relative overflow-hidden"
                >
                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${module.color}15 0%, transparent 60%)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Module number & Level */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-mono font-bold"
                        style={{
                          background: `${module.color}20`,
                          color: module.color,
                          border: `1px solid ${module.color}40`,
                        }}
                      >
                        MODULE {module.id.toString().padStart(2, '0')}
                      </span>
                      <span
                        className="px-2 py-0.5 rounded text-[10px] font-mono uppercase"
                        style={{
                          background: `${levelColors[level]}15`,
                          color: levelColors[level],
                        }}
                      >
                        {level}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-mono text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {module.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {module.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {module.duration}
                      </span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>

                    {/* Tools preview */}
                    <div className="flex flex-wrap gap-1 mt-4 pt-4 border-t border-border/20">
                      {module.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-muted/30 text-muted-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                      {module.tools.length > 3 && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-muted-foreground">
                          +{module.tools.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {filteredModules.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No modules found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
});

Modules.displayName = 'Modules';
export default Modules;
