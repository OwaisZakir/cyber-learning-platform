import { memo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, LogOut, LogIn, BookOpen, Lock, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const baseNavItems = [
  { path: '/', label: 'Home' },
  { path: '/modules', label: 'Modules' },
  { path: '/paths', label: 'Paths' },
  { path: '/courses', label: 'Courses' },
  { path: '/quiz', label: 'Quiz' },
  { path: '/certifications', label: 'Certs' },
  { path: '/trainer', label: 'Trainer' },
  { path: '/faq', label: 'FAQ' },
];

const Header = memo(() => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showAuthMenu, setShowAuthMenu] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'user' | 'teacher' | 'super_admin'>('user');
  const [loginEmail, setLoginEmail] = useState('');

  const { user, isAuthenticated, login, logout, hasRole } = useAuth();

  // Add role-based nav items
  const navItems = [
    ...baseNavItems,
    ...(hasRole(['teacher', 'super_admin']) ? [{ path: '/teacher-learning', label: 'Teaching' }] : []),
    ...(hasRole('super_admin') ? [{ path: '/admin', label: 'Admin' }] : []),
  ];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail.trim()) {
      await login(loginEmail, 'dummy-password', selectedRole);
      setLoginEmail('');
      setShowRoleModal(false);
      setShowAuthMenu(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:glow-cyber transition-all">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <span className="font-mono font-bold text-foreground hidden sm:block">
              CyberSec<span className="text-primary">Academy</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-mono transition-all duration-200",
                  location.pathname === item.path
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="flex items-center gap-3">
            {isAuthenticated && user ? (
              <div className="relative">
                <motion.button
                  onClick={() => setShowAuthMenu(!showAuthMenu)}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-border/30 hover:border-primary/30 transition-all font-mono text-sm"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="hidden sm:inline">{user.name}</span>
                  <span className={cn(
                    "inline-block px-2 py-0.5 rounded text-xs font-semibold",
                    user.role === 'super_admin'
                      ? 'bg-red-500/20 text-red-500 border border-red-500/30'
                      : user.role === 'teacher'
                      ? 'bg-primary/20 text-primary border border-primary/30'
                      : 'bg-muted/20 text-muted-foreground border border-muted/30'
                  )}>
                    {user.role === 'super_admin' ? 'ADMIN' : user.role === 'teacher' ? 'TEACHER' : 'USER'}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </motion.button>

                <AnimatePresence>
                  {showAuthMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      onClick={() => setShowAuthMenu(false)}
                      className="absolute top-full right-0 mt-2 w-48 rounded-lg glass border border-border/30 p-2 space-y-1"
                    >
                      <Link
                        to="#"
                        className="block px-4 py-2 rounded text-sm text-muted-foreground hover:bg-primary/10 transition-colors"
                      >
                        Profile: {user.name}
                      </Link>
                      {hasRole('teacher') && (
                        <Link
                          to="/teacher-learning"
                          className="block px-4 py-2 rounded text-sm text-muted-foreground hover:bg-primary/10 transition-colors flex items-center gap-2"
                        >
                          <BookOpen className="w-4 h-4" />
                          Teaching Module
                        </Link>
                      )}
                      {hasRole('super_admin') && (
                        <Link
                          to="/admin"
                          className="block px-4 py-2 rounded text-sm text-muted-foreground hover:bg-primary/10 transition-colors flex items-center gap-2"
                        >
                          <Lock className="w-4 h-4" />
                          Admin Dashboard
                        </Link>
                      )}
                      <button
                        onClick={() => {
                          logout();
                          setShowAuthMenu(false);
                        }}
                        className="w-full text-left px-4 py-2 rounded text-sm text-red-500 hover:bg-red-500/10 transition-colors flex items-center gap-2 font-semibold"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setShowRoleModal(true)}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-mono text-sm"
              >
                <LogIn className="w-4 h-4" />
                Login
              </motion.button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg glass border border-border/30"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden pb-4 pt-2 border-t border-border/20 mt-2">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-mono transition-all",
                    location.pathname === item.path
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              {!isAuthenticated && (
                <button
                  onClick={() => {
                    setShowRoleModal(true);
                    setMobileOpen(false);
                  }}
                  className="px-4 py-3 rounded-lg text-sm font-mono bg-primary/20 text-primary text-left"
                >
                  Login
                </button>
              )}
              {isAuthenticated && (
                <button
                  onClick={() => {
                    logout();
                    setMobileOpen(false);
                  }}
                  className="px-4 py-3 rounded-lg text-sm font-mono text-red-500 text-left flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              )}
            </div>
          </nav>
        )}
      </div>

      {/* Login Modal */}
      <AnimatePresence>
        {showRoleModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowRoleModal(false)}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-40"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md p-8 rounded-2xl glass border border-border/30 space-y-6"
            >
              <div>
                <h2 className="font-mono text-2xl font-bold text-foreground mb-2">Login to Academy</h2>
                <p className="text-sm text-muted-foreground">
                  Select your role and enter email to get started
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                {/* Email Input */}
                <div>
                  <label className="text-sm font-mono text-muted-foreground mb-2 block">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg glass border border-border/30 focus:border-primary/50 outline-none transition-all bg-background text-foreground"
                    required
                  />
                </div>

                {/* Role Selection */}
                <div>
                  <label className="text-sm font-mono text-muted-foreground mb-3 block">Select Role</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: 'user' as const, label: 'Student', desc: 'Learn courses' },
                      { value: 'teacher' as const, label: 'Teacher', desc: 'Create content' },
                      { value: 'super_admin' as const, label: 'Admin', desc: 'Manage system' },
                    ].map((role) => (
                      <motion.button
                        key={role.value}
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedRole(role.value)}
                        className={cn(
                          "p-3 rounded-lg text-center transition-all",
                          selectedRole === role.value
                            ? 'glass border border-primary bg-primary/20'
                            : 'glass border border-border/30 hover:border-primary/50'
                        )}
                      >
                        <p className="text-xs font-mono font-bold text-foreground">{role.label}</p>
                        <p className="text-xs text-muted-foreground">{role.desc}</p>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  type="submit"
                  className="w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-mono font-semibold"
                >
                  Login as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
                </motion.button>
              </form>

              <button
                onClick={() => setShowRoleModal(false)}
                className="w-full px-4 py-2 rounded-lg glass border border-border/30 hover:border-primary/50 transition-all font-mono text-sm"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});

Header.displayName = 'Header';
export default Header;
