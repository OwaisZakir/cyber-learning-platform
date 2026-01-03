import React, { createContext, useContext, useState, useCallback } from 'react';

export type UserRole = 'user' | 'teacher' | 'super_admin';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  joinDate: Date;
}

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  switchRole: (role: UserRole) => void;
  hasRole: (requiredRole: UserRole | UserRole[]) => boolean;
  grantTeacherAccess: (userId: string) => Promise<void>;
  revokeTeacherAccess: (userId: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(false);

  // Simulate login with dummy data
  const login = useCallback(async (email: string, password: string, role: UserRole) => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const newUser: AuthUser = {
      id: `user_${Math.random().toString(36).substr(2, 9)}`,
      name: email.split('@')[0],
      email,
      role,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      joinDate: new Date(),
    };
    
    setUser(newUser);
    localStorage.setItem('authUser', JSON.stringify(newUser));
    setLoading(false);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('authUser');
  }, []);

  const switchRole = useCallback((role: UserRole) => {
    if (user) {
      const updatedUser = { ...user, role };
      setUser(updatedUser);
      localStorage.setItem('authUser', JSON.stringify(updatedUser));
    }
  }, [user]);

  const hasRole = useCallback((requiredRole: UserRole | UserRole[]): boolean => {
    if (!user) return false;
    
    const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
    
    // Super admin has access to everything
    if (user.role === 'super_admin') return true;
    
    return roles.includes(user.role);
  }, [user]);

  const grantTeacherAccess = useCallback(async (userId: string) => {
    // Simulate API call to grant teacher access
    await new Promise(resolve => setTimeout(resolve, 500));
    // In a real app, this would update the database
  }, []);

  const revokeTeacherAccess = useCallback(async (userId: string) => {
    // Simulate API call to revoke teacher access
    await new Promise(resolve => setTimeout(resolve, 500));
    // In a real app, this would update the database
  }, []);

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    logout,
    switchRole,
    hasRole,
    grantTeacherAccess,
    revokeTeacherAccess,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
