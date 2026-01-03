import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = memo(() => {
  return (
    <footer className="py-12 border-t border-border/20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="font-mono font-bold text-foreground">
                CyberSec<span className="text-primary">Academy</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              Complete, teachable, deliverable curriculum from absolute beginner to security professional. 
              12-18 month comprehensive program covering Red, Blue, and Purple team skills.
            </p>
          </div>

          <div>
            <h4 className="font-mono font-semibold text-foreground mb-4">Learning</h4>
            <div className="flex flex-col gap-2">
              <Link to="/modules" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                All Modules
              </Link>
              <Link to="/paths" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Career Paths
              </Link>
              <Link to="/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Course Versions
              </Link>
              <Link to="/quiz" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Path Quiz
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-mono font-semibold text-foreground mb-4">Community</h4>
            <div className="flex flex-col gap-2">
              <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Resources
              </Link>
              <Link to="/trainer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Become Trainer
              </Link>
              <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-mono font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg glass border border-border/30 hover:border-primary/50 transition-colors">
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg glass border border-border/30 hover:border-primary/50 transition-colors">
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg glass border border-border/30 hover:border-primary/50 transition-colors">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 CyberSec Academy. Zero → Hero Cybersecurity Roadmap.
          </p>
          <p className="text-xs text-muted-foreground">
            For educational purposes only. Always practice ethically.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;
