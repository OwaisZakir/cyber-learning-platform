import { memo } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, BookOpen, Award, RotateCcw } from 'lucide-react';
import { modulesData } from '@/data/modules';
import { useProgress } from '@/hooks/useProgress';
import { Button } from '@/components/ui/button';

const ProgressTracker = memo(() => {
  const { progress, getOverallProgress, resetProgress, isLoaded } = useProgress();

  if (!isLoaded) return null;

  const totalModules = modulesData.length;
  const completedCount = progress.completedModules.length;
  const overallPercent = getOverallProgress(totalModules);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass border border-primary/30 rounded-2xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-mono text-lg font-bold text-foreground flex items-center gap-2">
          <Trophy className="w-5 h-5 text-primary" />
          Your Progress
        </h3>
        {completedCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={resetProgress}
            className="text-xs text-muted-foreground hover:text-destructive"
          >
            <RotateCcw className="w-3 h-3 mr-1" />
            Reset
          </Button>
        )}
      </div>

      {/* Overall Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Overall Completion</span>
          <span className="font-mono text-sm text-primary">{overallPercent}%</span>
        </div>
        <div className="h-3 rounded-full bg-muted/30 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${overallPercent}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 rounded-xl bg-primary/10 border border-primary/20">
          <Target className="w-5 h-5 text-primary mx-auto mb-1" />
          <div className="font-mono text-xl font-bold text-foreground">{completedCount}</div>
          <div className="text-[10px] text-muted-foreground">Completed</div>
        </div>
        <div className="text-center p-3 rounded-xl bg-secondary/10 border border-secondary/20">
          <BookOpen className="w-5 h-5 text-secondary mx-auto mb-1" />
          <div className="font-mono text-xl font-bold text-foreground">
            {totalModules - completedCount}
          </div>
          <div className="text-[10px] text-muted-foreground">Remaining</div>
        </div>
        <div className="text-center p-3 rounded-xl bg-accent/10 border border-accent/20">
          <Award className="w-5 h-5 text-accent mx-auto mb-1" />
          <div className="font-mono text-xl font-bold text-foreground">{totalModules}</div>
          <div className="text-[10px] text-muted-foreground">Total</div>
        </div>
      </div>

      {/* Module Progress List */}
      <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
        {modulesData.map((module) => {
          const isComplete = progress.completedModules.includes(module.id);
          return (
            <div
              key={module.id}
              className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
                isComplete ? 'bg-primary/10' : 'bg-muted/10'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono ${
                  isComplete
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted/30 text-muted-foreground'
                }`}
              >
                {isComplete ? '✓' : module.id}
              </div>
              <span
                className={`text-xs truncate flex-1 ${
                  isComplete ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {module.title}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
});

ProgressTracker.displayName = 'ProgressTracker';
export default ProgressTracker;
