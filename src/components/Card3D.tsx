import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card3D: React.FC<Card3DProps> = ({ children, className = '', onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotationX = ((y - centerY) / centerY) * -25;
    const rotationY = ((x - centerX) / centerX) * 25;

    setRotateX(rotationX);
    setRotateY(rotationY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        perspective: '1000px',
      }}
      className={`cursor-pointer ${className}`}
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{
          duration: 0.2,
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

interface GlowCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  gradient?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const GlowCard3D: React.FC<GlowCardProps> = ({
  title,
  description,
  icon,
  gradient = 'from-primary to-accent',
  className = '',
  onClick,
  children,
}) => {
  return (
    <Card3D onClick={onClick} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`relative p-6 rounded-2xl glass border border-border/30 hover:border-primary/50 transition-all overflow-hidden group`}
      >
        {/* Animated gradient background */}
        <motion.div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${gradient}`}
          style={{ filter: 'blur(80px)', zIndex: 0 }}
        />

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 0%, currentColor 0%, transparent 60%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {icon && (
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center mb-4"
            >
              {icon}
            </motion.div>
          )}
          <h3 className="font-mono font-bold text-foreground text-lg mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          {children}
        </div>
      </motion.div>
    </Card3D>
  );
};

interface FloatingCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const FloatingCard: React.FC<FloatingCardProps> = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{
        y: -10,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
