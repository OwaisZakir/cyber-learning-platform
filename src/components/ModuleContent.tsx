import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Target, BookOpen, Wrench, CheckCircle, AlertCircle, Lightbulb, GraduationCap } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ModuleData {
  id: number;
  title: string;
  duration: string;
  prerequisites: string;
  description: string;
  objectives: string[];
  topics: string[];
  labs: string[];
  tools: string[];
  assessment: string;
  instructorNotes: string;
  color: string;
}

interface ModuleContentProps {
  module: ModuleData | null;
}

const ModuleContent = ({ module }: ModuleContentProps) => {
  if (!module) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl glass border border-border/30 flex items-center justify-center">
            <BookOpen className="w-10 h-10 text-muted-foreground" />
          </div>
          <h3 className="font-mono text-xl text-muted-foreground mb-2">Select a Module</h3>
          <p className="text-sm text-muted-foreground/60">Choose from the curriculum on the left</p>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={module.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="h-full overflow-y-auto custom-scrollbar"
      >
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
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
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              {module.duration}
            </span>
          </div>

          <h1 className="font-mono text-2xl md:text-3xl font-bold text-foreground mb-4 glow-text">
            {module.title}
          </h1>

          <p className="text-muted-foreground leading-relaxed">
            {module.description}
          </p>

          {module.prerequisites && module.prerequisites !== 'None' && (
            <div className="mt-4 p-3 rounded-lg glass border border-border/30 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono text-accent">Prerequisites:</span>
                <p className="text-sm text-muted-foreground">{module.prerequisites}</p>
              </div>
            </div>
          )}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="objectives" className="space-y-6">
          <TabsList className="glass border border-border/30 p-1 h-auto flex-wrap">
            <TabsTrigger value="objectives" className="font-mono text-xs data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <Target className="w-3 h-3 mr-1" />
              Objectives
            </TabsTrigger>
            <TabsTrigger value="topics" className="font-mono text-xs data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <BookOpen className="w-3 h-3 mr-1" />
              Topics
            </TabsTrigger>
            <TabsTrigger value="labs" className="font-mono text-xs data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <Wrench className="w-3 h-3 mr-1" />
              Labs
            </TabsTrigger>
            <TabsTrigger value="tools" className="font-mono text-xs data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <CheckCircle className="w-3 h-3 mr-1" />
              Tools
            </TabsTrigger>
            <TabsTrigger value="assessment" className="font-mono text-xs data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <GraduationCap className="w-3 h-3 mr-1" />
              Assessment
            </TabsTrigger>
          </TabsList>

          <TabsContent value="objectives" className="space-y-3">
            <h3 className="font-mono text-lg font-semibold text-foreground flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Learning Objectives
            </h3>
            <ul className="space-y-2">
              {module.objectives.map((objective, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg glass border border-border/20 hover:border-primary/30 transition-colors"
                >
                  <span 
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-mono font-bold"
                    style={{ 
                      background: `${module.color}20`,
                      color: module.color,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm text-muted-foreground">{objective}</span>
                </motion.li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="topics" className="space-y-3">
            <h3 className="font-mono text-lg font-semibold text-foreground flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-secondary" />
              Topics Covered
            </h3>
            <div className="grid gap-2">
              {module.topics.map((topic, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-3 rounded-lg glass border border-border/20 hover:border-secondary/30 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:scale-150 transition-transform" />
                    <span className="text-sm text-muted-foreground">{topic}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="labs" className="space-y-3">
            <h3 className="font-mono text-lg font-semibold text-foreground flex items-center gap-2">
              <Wrench className="w-5 h-5 text-accent" />
              Hands-on Labs & Exercises
            </h3>
            <div className="space-y-2">
              {module.labs.map((lab, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-lg glass border border-border/20 hover:border-accent/30 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-accent/10 text-accent font-mono text-xs shrink-0">
                      Lab {i + 1}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{lab}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-3">
            <h3 className="font-mono text-lg font-semibold text-foreground flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              Tools & Setup
            </h3>
            <div className="flex flex-wrap gap-2">
              {module.tools.map((tool, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-2 rounded-full glass border border-border/30 hover:border-primary/40 text-sm text-muted-foreground hover:text-primary transition-colors cursor-default font-mono"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="assessment" className="space-y-4">
            <h3 className="font-mono text-lg font-semibold text-foreground flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-secondary" />
              Assessment & Deliverables
            </h3>
            <div className="p-4 rounded-lg glass border border-border/20">
              <p className="text-sm text-muted-foreground leading-relaxed">{module.assessment}</p>
            </div>

            <div className="p-4 rounded-lg bg-muted/30 border border-border/20">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-sm font-semibold text-secondary mb-1">Instructor Notes</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{module.instructorNotes}</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModuleContent;
