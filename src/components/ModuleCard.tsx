import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, Target, BookOpen, Wrench, CheckCircle } from 'lucide-react';

interface ModuleData {
  id: number;
  title: string;
  duration: string;
  prerequisites: string;
  description: string;
  objectives: string[];
  topics: string[];
  tools: string[];
  color: string;
}

interface ModuleCardProps {
  module: ModuleData;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const ModuleCard = ({ module, index, isActive, onClick }: ModuleCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative"
    >
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          w-full text-left p-4 rounded-xl transition-all duration-300
          glass border group relative overflow-hidden
          ${isActive 
            ? 'border-primary/50 glow-cyber' 
            : 'border-border/30 hover:border-primary/30'
          }
        `}
      >
        {/* Background glow effect */}
        <div 
          className={`
            absolute inset-0 opacity-0 transition-opacity duration-300
            ${isHovered || isActive ? 'opacity-100' : ''}
          `}
          style={{
            background: `radial-gradient(circle at 50% 50%, ${module.color}15 0%, transparent 70%)`,
          }}
        />

        {/* Module number badge */}
        <div 
          className="absolute -top-1 -right-1 w-8 h-8 rounded-bl-xl flex items-center justify-center font-mono text-xs font-bold"
          style={{ 
            background: `linear-gradient(135deg, ${module.color}40, ${module.color}20)`,
            color: module.color,
          }}
        >
          {module.id.toString().padStart(2, '0')}
        </div>

        <div className="relative z-10">
          <h3 className={`
            font-mono font-semibold text-sm mb-2 pr-8 transition-colors duration-300
            ${isActive ? 'text-primary' : 'text-foreground group-hover:text-primary'}
          `}>
            {module.title}
          </h3>

          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {module.duration}
            </span>
            <ChevronRight className={`
              w-4 h-4 transition-transform duration-300
              ${isActive ? 'text-primary rotate-90' : 'group-hover:translate-x-1'}
            `} />
          </div>
        </div>

        {/* Active indicator line */}
        <motion.div 
          className="absolute bottom-0 left-0 h-0.5 bg-primary"
          initial={{ width: 0 }}
          animate={{ width: isActive ? '100%' : 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>
    </motion.div>
  );
};

export default ModuleCard;
