import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10 px-4"
      >
        {/* Icon */}
        <motion.div
          animate={{ 
            y: [-5, 5, -5],
          }}
          transition={{ 
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          className="w-24 h-24 mx-auto mb-8 rounded-2xl glass border border-primary/30 flex items-center justify-center glow-cyber"
        >
          <Shield className="w-12 h-12 text-primary" />
        </motion.div>

        {/* 404 Text */}
        <h1 className="font-mono text-8xl md:text-9xl font-bold text-gradient-cyber mb-4">
          404
        </h1>

        <p className="font-mono text-xl text-foreground mb-2">
          Access Denied
        </p>

        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for has been classified or doesn't exist in our system.
        </p>

        {/* Terminal-style hint */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-terminal border border-border/30 font-mono text-sm text-muted-foreground mb-8">
          <span className="text-secondary">$</span>
          <span>ERROR: Resource not found</span>
          <span className="cursor-blink"></span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl font-mono font-semibold text-primary-foreground bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300"
          >
            <Home className="w-4 h-4" />
            Return to Base
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-mono font-semibold text-foreground glass border border-border/30 hover:border-primary/50 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
