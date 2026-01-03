import { memo, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Target, BookOpen, Wrench, CheckCircle, AlertCircle, Lightbulb, GraduationCap, ArrowLeft, ChevronRight, Shield, Skull, CheckCircle2 } from 'lucide-react';
import { modulesData } from '@/data/modules';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useProgress } from '@/hooks/useProgress';
import { Button } from '@/components/ui/button';
const ModuleDetail = memo(() => {
  const { id } = useParams();
  const moduleId = parseInt(id || '0', 10);

  const module = useMemo(() => modulesData.find((m) => m.id === moduleId), [moduleId]);
  const prevModule = useMemo(() => modulesData.find((m) => m.id === moduleId - 1), [moduleId]);
  const nextModule = useMemo(() => modulesData.find((m) => m.id === moduleId + 1), [moduleId]);

  if (!module) {
    return <Navigate to="/modules" replace />;
  }

  return (
    <section className="py-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/modules"
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Modules
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
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

          <h1 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 glow-text">
            {module.title}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {module.description}
          </p>

          {module.prerequisites && module.prerequisites !== 'None' && (
            <div className="mt-6 p-4 rounded-xl glass border border-accent/30 flex items-start gap-3 max-w-2xl">
              <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono text-accent">Prerequisites:</span>
                <p className="text-sm text-muted-foreground">{module.prerequisites}</p>
              </div>
            </div>
          )}

          {/* Complete Module Button */}
          <div className="mt-6">
            <Button
              onClick={() => toggleModuleComplete(moduleId)}
              variant={completed ? "default" : "outline"}
              className={completed ? "bg-primary hover:bg-primary/90" : ""}
            >
              <CheckCircle2 className="w-4 h-4 mr-2" />
              {completed ? "Completed!" : "Mark as Complete"}
            </Button>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Tabs defaultValue="objectives" className="space-y-8">
            <TabsList className="glass border border-border/30 p-1.5 h-auto flex-wrap gap-1">
              <TabsTrigger value="objectives" className="font-mono text-xs px-4 py-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                <Target className="w-4 h-4 mr-2" />
                Objectives
              </TabsTrigger>
              <TabsTrigger value="lessons" className="font-mono text-xs px-4 py-2 data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary">
                <BookOpen className="w-4 h-4 mr-2" />
                Lessons
              </TabsTrigger>
              <TabsTrigger value="labs" className="font-mono text-xs px-4 py-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                <Wrench className="w-4 h-4 mr-2" />
                Labs
              </TabsTrigger>
              <TabsTrigger value="tools" className="font-mono text-xs px-4 py-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                <CheckCircle className="w-4 h-4 mr-2" />
                Tools
              </TabsTrigger>
              <TabsTrigger value="assessment" className="font-mono text-xs px-4 py-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                <GraduationCap className="w-4 h-4 mr-2" />
                Assessment
              </TabsTrigger>
            </TabsList>

            <TabsContent value="objectives" className="space-y-4">
              <h3 className="font-mono text-xl font-semibold text-foreground flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Learning Objectives
              </h3>
              <div className="grid gap-3">
                {module.objectives.map((objective, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl glass border border-border/20 hover:border-primary/30 transition-colors"
                  >
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm font-mono font-bold"
                      style={{
                        background: `${module.color}20`,
                        color: module.color,
                      }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground">{objective}</span>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="lessons" className="space-y-6">
              <h3 className="font-mono text-xl font-semibold text-foreground flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-secondary" />
                Detailed Lessons
              </h3>
              <div className="space-y-6">
                {module.lessons?.map((lesson, i) => {
                  const lessonComplete = isLessonComplete(moduleId, i);
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`p-6 rounded-2xl glass border transition-all ${
                        lessonComplete ? 'border-primary/50 bg-primary/5' : 'border-border/20'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h4 className="font-mono text-lg font-bold text-foreground">
                          Lesson {i + 1}: {lesson.title}
                        </h4>
                        <button
                          onClick={() => toggleLessonComplete(moduleId, i)}
                          className={`p-2 rounded-lg transition-colors ${
                            lessonComplete ? 'bg-primary/20 text-primary' : 'bg-muted/20 text-muted-foreground hover:text-primary'
                          }`}
                        >
                          <CheckCircle2 className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">{lesson.content}</p>
                      
                      {/* Key Points */}
                      <div className="mb-4">
                        <h5 className="text-sm font-mono font-semibold text-foreground mb-2">Key Points:</h5>
                        <ul className="space-y-1">
                          {lesson.keyPoints.map((point, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Ethical Note */}
                      {lesson.ethicalNote && (
                        <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/30 mb-4">
                          <div className="flex items-start gap-3">
                            <Shield className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                            <div>
                              <span className="text-xs font-mono font-bold text-secondary">ETHICAL NOTE:</span>
                              <p className="text-sm text-muted-foreground mt-1">{lesson.ethicalNote}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Black Hat Warning */}
                      {lesson.blackHatWarning && (
                        <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 mb-4">
                          <div className="flex items-start gap-3">
                            <Skull className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                            <div>
                              <span className="text-xs font-mono font-bold text-destructive">BLACK HAT AWARENESS:</span>
                              <p className="text-sm text-muted-foreground mt-1">{lesson.blackHatWarning}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Protection Tips */}
                      {lesson.protectionTips && (
                        <div className="p-4 rounded-xl bg-primary/10 border border-primary/30">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <div>
                              <span className="text-xs font-mono font-bold text-primary">PROTECTION TIPS:</span>
                              <ul className="mt-2 space-y-1">
                                {lesson.protectionTips.map((tip, j) => (
                                  <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                                    <span className="text-primary">✓</span>
                                    {tip}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="labs" className="space-y-4">
              <h3 className="font-mono text-xl font-semibold text-foreground flex items-center gap-2">
                <Wrench className="w-5 h-5 text-accent" />
                Hands-on Labs & Exercises
              </h3>
              <div className="grid gap-4">
                {module.labs.map((lab, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-5 rounded-xl glass border border-border/20 hover:border-accent/30 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <span className="px-3 py-1.5 rounded-lg flex items-center justify-center bg-accent/10 text-accent font-mono text-sm shrink-0">
                        Lab {i + 1}
                      </span>
                      <p className="text-muted-foreground leading-relaxed">{lab}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tools" className="space-y-4">
              <h3 className="font-mono text-xl font-semibold text-foreground flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Tools & Setup
              </h3>
              <div className="flex flex-wrap gap-3">
                {module.tools.map((tool, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-5 py-3 rounded-xl glass border border-border/30 hover:border-primary/40 text-muted-foreground hover:text-primary transition-colors cursor-default font-mono"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="assessment" className="space-y-6">
              <h3 className="font-mono text-xl font-semibold text-foreground flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-secondary" />
                Assessment & Deliverables
              </h3>
              <div className="p-6 rounded-xl glass border border-border/20">
                <p className="text-muted-foreground leading-relaxed">{module.assessment}</p>
              </div>

              <div className="p-6 rounded-xl bg-secondary/5 border border-secondary/20">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-mono font-semibold text-secondary mb-2">Instructor Notes</h4>
                    <p className="text-muted-foreground leading-relaxed">{module.instructorNotes}</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 pt-8 border-t border-border/20 grid md:grid-cols-2 gap-4"
        >
          {prevModule ? (
            <Link
              to={`/modules/${prevModule.id}`}
              className="p-4 rounded-xl glass border border-border/30 hover:border-primary/40 transition-all group"
            >
              <span className="text-xs font-mono text-muted-foreground">Previous Module</span>
              <div className="flex items-center gap-2 mt-1">
                <ArrowLeft className="w-4 h-4 text-primary group-hover:-translate-x-1 transition-transform" />
                <span className="font-mono font-semibold text-foreground">{prevModule.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextModule && (
            <Link
              to={`/modules/${nextModule.id}`}
              className="p-4 rounded-xl glass border border-border/30 hover:border-primary/40 transition-all group text-right"
            >
              <span className="text-xs font-mono text-muted-foreground">Next Module</span>
              <div className="flex items-center justify-end gap-2 mt-1">
                <span className="font-mono font-semibold text-foreground">{nextModule.title}</span>
                <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
});

ModuleDetail.displayName = 'ModuleDetail';
export default ModuleDetail;
