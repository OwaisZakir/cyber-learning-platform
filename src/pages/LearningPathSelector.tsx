import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle, Crosshair, Shield, Cloud, Eye, Users } from 'lucide-react';

interface QuestionProps {
  id: number;
  question: string;
  options: Array<{ text: string; nextQuestion?: number; result?: string }>;
}

const questions: Record<number, QuestionProps> = {
  1: {
    id: 1,
    question: 'What\'s your current experience level with cybersecurity?',
    options: [
      { text: 'Absolute Beginner - No technical background', nextQuestion: 2 },
      { text: 'Some IT knowledge - Non-security focused', nextQuestion: 2 },
      { text: 'Developer or IT Professional', nextQuestion: 3 },
      { text: 'Some security experience', nextQuestion: 4 },
    ],
  },
  2: {
    id: 2,
    question: 'What are your primary goals?',
    options: [
      { text: 'Understand cybersecurity basics & stay safe online', result: 'lite' },
      { text: 'Build a foundation for entry-level security role', result: 'pro' },
      { text: 'Prepare for advanced security career', result: 'practitioner' },
    ],
  },
  3: {
    id: 3,
    question: 'Which role interests you most?',
    options: [
      { text: 'Offensive Security (Hacking/Pentesting)', result: 'red-team' },
      { text: 'Defensive Security (Protection/Detection)', result: 'blue-team' },
      { text: 'Both + Bridge the gap', result: 'purple-team' },
      { text: 'Cloud Infrastructure Security', result: 'cloud-security' },
    ],
  },
  4: {
    id: 4,
    question: 'Where do you want to specialize?',
    options: [
      { text: 'Red Team - Offensive & Exploitation', result: 'red-team' },
      { text: 'Blue Team - Defense & Detection', result: 'blue-team' },
      { text: 'Purple Team - Both', result: 'purple-team' },
      { text: 'Cloud Security', result: 'cloud-security' },
      { text: 'GRC & Compliance', result: 'grc' },
    ],
  },
};

const pathResults = {
  'lite': {
    title: 'Cyber Literacy',
    subtitle: 'Awareness & Safety',
    description: 'Perfect for building foundational knowledge and staying safe online.',
    color: 'hsl(45, 100%, 50%)',
    icon: Crosshair,
  },
  'pro': {
    title: 'Cybersecurity Foundations',
    subtitle: 'Core Skills & Fundamentals',
    description: 'Build a solid foundation for entry-level security roles.',
    color: 'hsl(180, 100%, 50%)',
    icon: Shield,
  },
  'practitioner': {
    title: 'Practitioner Program',
    subtitle: 'Red + Blue Team Core',
    description: 'Master both offensive and defensive security techniques.',
    color: 'hsl(270, 100%, 65%)',
    icon: Users,
  },
  'red-team': {
    title: 'Red Team',
    subtitle: 'Offensive Security',
    description: 'Master offensive security and penetration testing techniques.',
    color: 'hsl(0, 70%, 50%)',
    icon: Crosshair,
  },
  'blue-team': {
    title: 'Blue Team',
    subtitle: 'Defensive Security',
    description: 'Build expertise in defense, monitoring, and incident response.',
    color: 'hsl(210, 100%, 50%)',
    icon: Shield,
  },
  'purple-team': {
    title: 'Purple Team',
    subtitle: 'Attack + Defense Bridge',
    description: 'Bridge offensive and defensive skills for comprehensive security.',
    color: 'hsl(270, 100%, 65%)',
    icon: Users,
  },
  'cloud-security': {
    title: 'Cloud Security',
    subtitle: 'AWS, Azure, GCP',
    description: 'Secure cloud resources and understand cloud-specific threats.',
    color: 'hsl(180, 100%, 50%)',
    icon: Cloud,
  },
  'grc': {
    title: 'GRC',
    subtitle: 'Governance, Risk & Compliance',
    description: 'Master governance frameworks and compliance requirements.',
    color: 'hsl(45, 100%, 50%)',
    icon: Eye,
  },
};

const LearningPathSelector = memo(() => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [result, setResult] = useState<string | null>(null);
  const [history, setHistory] = useState<number[]>([1]);

  const handleAnswer = (option: (typeof questions[1]['options'])[0]) => {
    if (option.result) {
      setResult(option.result);
    } else if (option.nextQuestion) {
      setCurrentQuestion(option.nextQuestion);
      setHistory([...history, option.nextQuestion]);
    }
  };

  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setCurrentQuestion(newHistory[newHistory.length - 1]);
      setResult(null);
    }
  };

  const question = questions[currentQuestion];
  const resultData = result && pathResults[result as keyof typeof pathResults];

  return (
    <section className="py-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass border border-primary/30 text-primary text-xs font-mono mb-4">
            PERSONALIZED RECOMMENDATION
          </span>
          <h1 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Your Perfect <span className="text-gradient-cyber">Learning Path</span>
          </h1>
          <p className="text-muted-foreground">
            Answer a few quick questions to get personalized course recommendations
          </p>
        </motion.div>

        {/* Quiz Container */}
        <AnimatePresence mode="wait">
          {!result && (
            <motion.div
              key={`question-${currentQuestion}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-8"
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-muted-foreground">
                    Question {currentQuestion} of 4
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {Math.round((currentQuestion / 4) * 100)}%
                  </span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentQuestion / 4) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Question Card */}
              <div className="p-8 rounded-2xl glass border border-border/30 mb-8">
                <h2 className="font-mono text-2xl font-bold text-foreground mb-8">{question.question}</h2>

                <div className="space-y-3">
                  {question.options.map((option, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleAnswer(option)}
                      className="w-full p-4 rounded-xl glass border border-border/30 hover:border-primary/50 text-left transition-all group hover:bg-primary/5"
                    >
                      <span className="flex items-center justify-between">
                        <span className="text-foreground font-mono">{option.text}</span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Back Button */}
              {history.length > 1 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={handleBack}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Go Back
                </motion.button>
              )}
            </motion.div>
          )}

          {result && resultData && (
            <motion.div
              key={`result-${result}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mb-8"
            >
              {/* Result Card */}
              <div className="p-8 rounded-2xl glass border border-border/30 text-center relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${resultData.color} 0%, transparent 60%)`,
                  }}
                />

                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                    style={{
                      background: `${resultData.color}20`,
                      border: `2px solid ${resultData.color}`,
                    }}
                  >
                    <CheckCircle className="w-8 h-8" style={{ color: resultData.color }} />
                  </motion.div>

                  <h2
                    className="font-mono text-3xl font-bold mb-2"
                    style={{ color: resultData.color }}
                  >
                    {resultData.title}
                  </h2>
                  <p className="text-sm font-mono text-muted-foreground/60 mb-4">
                    {resultData.subtitle}
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
                    {resultData.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      to="/courses"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono font-semibold transition-all hover:scale-105"
                      style={{
                        background: `${resultData.color}20`,
                        color: resultData.color,
                        border: `1px solid ${resultData.color}40`,
                      }}
                    >
                      View Course Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => {
                        setResult(null);
                        setCurrentQuestion(1);
                        setHistory([1]);
                      }}
                      className="px-6 py-3 rounded-xl font-mono font-semibold glass border border-border/30 hover:border-primary/50 transition-all"
                    >
                      Start Over
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Path Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 p-6 rounded-xl glass border border-border/30"
              >
                <h3 className="font-mono font-bold text-foreground mb-4">What's Next?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">1</span>
                    <span className="text-muted-foreground">
                      Explore the detailed course curriculum and module breakdown
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">2</span>
                    <span className="text-muted-foreground">
                      Review the learning objectives and tools you'll master
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">3</span>
                    <span className="text-muted-foreground">
                      Choose your delivery format (classroom, online, or 1-on-1)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">4</span>
                    <span className="text-muted-foreground">
                      Enroll and begin your transformation
                    </span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
});

LearningPathSelector.displayName = 'LearningPathSelector';
export default LearningPathSelector;
