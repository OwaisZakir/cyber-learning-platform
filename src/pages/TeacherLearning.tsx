import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card3D, GlowCard3D, FloatingCard } from '@/components/Card3D';
import { useAuth } from '@/context/AuthContext';
import { BookOpen, Zap, Users, Target, Award, ArrowRight, CheckCircle, Play, FileText, Video, Code, Lightbulb } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const teachingModules = [
  {
    title: 'Curriculum Design',
    description: 'Learn to structure and design effective cybersecurity curricula',
    icon: BookOpen,
    color: 'hsl(180, 100%, 50%)',
    lessons: [
      { title: 'Learning Objectives Framework', duration: '15 min', type: 'video' },
      { title: 'Module Structure Best Practices', duration: '20 min', type: 'text' },
      { title: 'Assessment Design', duration: '25 min', type: 'interactive' },
      { title: 'Content Creation Workflow', duration: '30 min', type: 'video' },
    ],
  },
  {
    title: 'Student Engagement',
    description: 'Techniques to keep students motivated and engaged',
    icon: Users,
    color: 'hsl(45, 100%, 50%)',
    lessons: [
      { title: 'Active Learning Strategies', duration: '20 min', type: 'video' },
      { title: 'Interactive Lab Design', duration: '25 min', type: 'interactive' },
      { title: 'Q&A Session Management', duration: '15 min', type: 'text' },
      { title: 'Feedback Techniques', duration: '20 min', type: 'video' },
    ],
  },
  {
    title: 'Lab Creation & Management',
    description: 'Build and manage hands-on cybersecurity labs',
    icon: Code,
    color: 'hsl(0, 70%, 50%)',
    lessons: [
      { title: 'Lab Environment Setup', duration: '30 min', type: 'video' },
      { title: 'Virtual Machine Configuration', duration: '25 min', type: 'interactive' },
      { title: 'Lab Documentation', duration: '20 min', type: 'text' },
      { title: 'Troubleshooting Guide', duration: '25 min', type: 'video' },
    ],
  },
  {
    title: 'Assessment & Grading',
    description: 'Evaluate student performance fairly and effectively',
    icon: Target,
    color: 'hsl(120, 100%, 50%)',
    lessons: [
      { title: 'Rubric Development', duration: '20 min', type: 'text' },
      { title: 'Project Evaluation', duration: '25 min', type: 'interactive' },
      { title: 'Grading Standards', duration: '15 min', type: 'video' },
      { title: 'Feedback Writing', duration: '20 min', type: 'text' },
    ],
  },
  {
    title: 'Advanced Teaching',
    description: 'Master advanced teaching methodologies and techniques',
    icon: Lightbulb,
    color: 'hsl(270, 100%, 50%)',
    lessons: [
      { title: 'Adaptive Learning', duration: '25 min', type: 'video' },
      { title: 'Mentoring Strategies', duration: '30 min', type: 'interactive' },
      { title: 'Industry Integration', duration: '20 min', type: 'text' },
      { title: 'Research Opportunities', duration: '25 min', type: 'video' },
    ],
  },
  {
    title: 'Professional Development',
    description: 'Grow your skills and career as an educator',
    icon: Award,
    color: 'hsl(300, 100%, 50%)',
    lessons: [
      { title: 'Certification Paths', duration: '15 min', type: 'text' },
      { title: 'Public Speaking Skills', duration: '30 min', type: 'video' },
      { title: 'Networking Strategies', duration: '20 min', type: 'interactive' },
      { title: 'Career Advancement', duration: '25 min', type: 'video' },
    ],
  },
];

const skillTracks = [
  {
    name: 'Beginner Educator',
    skills: ['Lesson Planning', 'Basic Teaching', 'Student Management'],
    duration: '4 weeks',
    progress: 100,
  },
  {
    name: 'Intermediate Trainer',
    skills: ['Lab Design', 'Assessment', 'Advanced Engagement'],
    duration: '8 weeks',
    progress: 65,
  },
  {
    name: 'Expert Instructor',
    skills: ['Curriculum Design', 'Program Leadership', 'Innovation'],
    duration: '12 weeks',
    progress: 30,
  },
];

const TeacherLearning = memo(() => {
  const { user, hasRole } = useAuth();
  const [activeModule, setActiveModule] = useState(0);
  const [selectedLesson, setSelectedLesson] = useState<{ moduleIdx: number; lessonIdx: number } | null>(null);

  if (!hasRole(['teacher', 'super_admin'])) {
    return (
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-mono font-bold text-foreground mb-4">
              Access Denied
            </h1>
            <p className="text-muted-foreground mb-6">
              You need teacher or admin access to view this content.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              Back to Home
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

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
            TEACHER DEVELOPMENT ACADEMY
          </span>
          <h1 className="font-mono text-3xl md:text-5xl font-bold text-foreground mb-4">
            Master the Art of <span className="text-gradient-cyber">Teaching</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive learning modules designed to make you an exceptional educator. Learn from industry experts and grow your teaching career.
          </p>
        </motion.div>

        {/* Main Content with Tabs */}
        <Tabs defaultValue="modules" className="w-full mb-20">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-4 gap-2 mb-8">
            <TabsTrigger value="modules" className="font-mono">
              <BookOpen className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Modules</span>
            </TabsTrigger>
            <TabsTrigger value="tracks" className="font-mono">
              <Target className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Tracks</span>
            </TabsTrigger>
            <TabsTrigger value="resources" className="font-mono">
              <FileText className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Resources</span>
            </TabsTrigger>
            <TabsTrigger value="community" className="font-mono">
              <Users className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Community</span>
            </TabsTrigger>
          </TabsList>

          {/* Modules Tab */}
          <TabsContent value="modules" className="space-y-8">
            {/* Module Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {teachingModules.map((module, index) => (
                <FloatingCard key={module.title} delay={index * 0.1}>
                  <Card3D
                    onClick={() => setActiveModule(index)}
                    className={`transition-all ${activeModule === index ? 'ring-2 ring-primary' : ''}`}
                  >
                    <GlowCard3D
                      title={module.title}
                      description={module.description}
                      icon={<module.icon className="w-5 h-5 text-primary" />}
                      gradient={`from-[${module.color}] to-secondary`}
                    >
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xs font-mono text-muted-foreground">
                          {module.lessons.length} Lessons
                        </span>
                        <motion.div whileHover={{ x: 5 }}>
                          <ArrowRight className="w-4 h-4 text-primary" />
                        </motion.div>
                      </div>
                    </GlowCard3D>
                  </Card3D>
                </FloatingCard>
              ))}
            </div>

            {/* Module Details */}
            <AnimatePresence mode="wait">
              {activeModule !== null && (
                <motion.div
                  key={activeModule}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-8 rounded-2xl glass border border-border/30 mt-12"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <h2 className="font-mono text-2xl font-bold text-foreground mb-2">
                        {teachingModules[activeModule].title}
                      </h2>
                      <p className="text-muted-foreground">{teachingModules[activeModule].description}</p>
                    </div>
                    <button
                      onClick={() => setActiveModule(-1)}
                      className="px-4 py-2 rounded-lg glass border border-border/30 hover:border-primary/30 transition-all text-sm font-mono"
                    >
                      Close
                    </button>
                  </div>

                  {/* Lessons List */}
                  <div className="space-y-3">
                    {teachingModules[activeModule].lessons.map((lesson, lessonIdx) => (
                      <motion.div
                        key={lesson.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: lessonIdx * 0.05 }}
                        onClick={() => setSelectedLesson({ moduleIdx: activeModule, lessonIdx })}
                        className="p-4 rounded-xl glass border border-border/30 hover:border-primary/50 transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0">
                            {lesson.type === 'video' && <Video className="w-5 h-5 text-primary" />}
                            {lesson.type === 'text' && <FileText className="w-5 h-5 text-accent" />}
                            {lesson.type === 'interactive' && <Play className="w-5 h-5 text-secondary" />}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-mono font-semibold text-foreground group-hover:text-primary transition-colors">
                              {lesson.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              {lesson.duration} • {lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1)}
                            </p>
                          </div>
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="flex-shrink-0 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </TabsContent>

          {/* Skill Tracks Tab */}
          <TabsContent value="tracks" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {skillTracks.map((track, index) => (
                <FloatingCard key={track.name} delay={index * 0.1}>
                  <Card3D>
                    <div className="p-6 rounded-2xl glass border border-border/30 hover:border-primary/30 transition-all h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
                          <Award className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-mono font-bold text-foreground">{track.name}</h3>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-mono text-muted-foreground">Progress</span>
                          <span className="text-sm font-mono font-bold text-primary">{track.progress}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-border/30 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${track.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-primary to-secondary"
                          />
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="space-y-2 mb-6">
                        {track.skills.map((skill) => (
                          <div key={skill} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            <span className="text-sm text-muted-foreground">{skill}</span>
                          </div>
                        ))}
                      </div>

                      {/* Duration */}
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                        <p className="text-xs font-mono text-primary font-semibold">{track.duration}</p>
                      </div>
                    </div>
                  </Card3D>
                </FloatingCard>
              ))}
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Teaching Templates',
                  icon: FileText,
                  items: ['Syllabus Template', 'Lesson Plan Guide', 'Assessment Rubric', 'Student Feedback Form'],
                },
                {
                  title: 'Video Tutorials',
                  icon: Video,
                  items: ['Recording Best Practices', 'Live Teaching Tips', 'Lab Setup Guide', 'Student Support'],
                },
                {
                  title: 'Tools & Software',
                  icon: Code,
                  items: ['Virtual Machine Setup', 'Lab Automation', 'Student Tracking', 'Content Management'],
                },
                {
                  title: 'Documentation',
                  icon: BookOpen,
                  items: ['Best Practices Guide', 'FAQ Database', 'Style Guide', 'Tools Reference'],
                },
              ].map((resource, index) => (
                <FloatingCard key={resource.title} delay={index * 0.1}>
                  <Card3D>
                    <GlowCard3D
                      title={resource.title}
                      description="Access helpful resources to enhance your teaching"
                      icon={<resource.icon className="w-5 h-5 text-primary" />}
                    >
                      <div className="space-y-2 mt-4">
                        {resource.items.map((item) => (
                          <div key={item} className="flex items-center gap-2 p-2 rounded hover:bg-primary/10 transition-colors cursor-pointer">
                            <span className="text-primary">▸</span>
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </GlowCard3D>
                  </Card3D>
                </FloatingCard>
              ))}
            </div>
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Discussion Forum',
                  description: 'Share ideas, ask questions, and learn from peer teachers',
                  members: 234,
                  icon: Users,
                },
                {
                  title: 'Mentorship Program',
                  description: 'Get paired with experienced educators for guidance',
                  members: 89,
                  icon: Award,
                },
                {
                  title: 'Live Workshops',
                  description: 'Join weekly sessions on teaching techniques and tools',
                  members: 156,
                  icon: Zap,
                },
                {
                  title: 'Resource Library',
                  description: 'Access shared materials and lesson plans from the community',
                  members: 412,
                  icon: FileText,
                },
              ].map((community, index) => (
                <FloatingCard key={community.title} delay={index * 0.1}>
                  <Card3D>
                    <GlowCard3D
                      title={community.title}
                      description={community.description}
                      icon={<community.icon className="w-5 h-5 text-primary" />}
                    >
                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/30">
                        <span className="text-xs font-mono text-muted-foreground">{community.members} members</span>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 text-xs font-mono rounded bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                        >
                          Join
                        </motion.button>
                      </div>
                    </GlowCard3D>
                  </Card3D>
                </FloatingCard>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Welcome Message */}
        {user && hasRole(['teacher', 'super_admin']) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 rounded-2xl glass border border-border/30 text-center bg-gradient-to-br from-primary/10 to-accent/10"
          >
            <h3 className="font-mono text-xl font-bold text-foreground mb-2">
              Welcome, {user.name}!
            </h3>
            <p className="text-muted-foreground">
              You're now a {user.role === 'teacher' ? 'certified teacher' : 'super administrator'} in our platform.
              Start exploring the modules to enhance your teaching skills today.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
});

TeacherLearning.displayName = 'TeacherLearning';
export default TeacherLearning;
