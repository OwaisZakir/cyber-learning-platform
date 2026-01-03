import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card3D, GlowCard3D, FloatingCard } from '@/components/Card3D';
import { useAuth } from '@/context/AuthContext';
import {
  Users,
  Shield,
  BarChart3,
  Settings,
  Lock,
  Unlock,
  Trash2,
  Plus,
  Search,
  Filter,
  CheckCircle,
  AlertCircle,
  TrendingUp,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'teacher' | 'super_admin';
  status: 'active' | 'inactive' | 'pending';
  joinDate: string;
  lastActive: string;
  courses: number;
  students: number;
}

const mockUsers: AdminUser[] = [
  {
    id: '1',
    name: 'Ahmed Hassan',
    email: 'ahmed.hassan@example.com',
    role: 'teacher',
    status: 'active',
    joinDate: '2024-01-15',
    lastActive: '2 hours ago',
    courses: 3,
    students: 45,
  },
  {
    id: '2',
    name: 'Fatima Khan',
    email: 'fatima.khan@example.com',
    role: 'teacher',
    status: 'active',
    joinDate: '2024-02-10',
    lastActive: '30 mins ago',
    courses: 2,
    students: 32,
  },
  {
    id: '3',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'user',
    status: 'pending',
    joinDate: '2024-03-05',
    lastActive: '1 day ago',
    courses: 0,
    students: 0,
  },
  {
    id: '4',
    name: 'Zainab Ali',
    email: 'zainab.ali@example.com',
    role: 'user',
    status: 'active',
    joinDate: '2024-01-20',
    lastActive: '5 mins ago',
    courses: 0,
    students: 0,
  },
  {
    id: '5',
    name: 'Marcus Johnson',
    email: 'marcus.j@example.com',
    role: 'teacher',
    status: 'active',
    joinDate: '2024-02-28',
    lastActive: '45 mins ago',
    courses: 4,
    students: 58,
  },
];

const stats = [
  { label: 'Total Users', value: '1,245', icon: Users, color: 'hsl(180, 100%, 50%)' },
  { label: 'Active Teachers', value: '89', icon: Shield, color: 'hsl(45, 100%, 50%)' },
  { label: 'Total Students', value: '3,547', icon: TrendingUp, color: 'hsl(0, 70%, 50%)' },
  { label: 'Courses Running', value: '42', icon: BarChart3, color: 'hsl(120, 100%, 50%)' },
];

const SuperAdminDashboard = memo(() => {
  const { user, hasRole, grantTeacherAccess, revokeTeacherAccess } = useAuth();
  const [users, setUsers] = useState<AdminUser[]>(mockUsers);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState<'all' | 'user' | 'teacher' | 'super_admin'>('all');
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null);
  const [showUserModal, setShowUserModal] = useState(false);

  if (!hasRole('super_admin')) {
    return (
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-6">
              <Lock className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-mono font-bold text-foreground mb-4">Admin Only</h1>
            <p className="text-muted-foreground mb-6">
              You don't have permission to access the super admin dashboard.
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

  const filteredUsers = users.filter(u => {
    const matchesSearch =
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = filterRole === 'all' || u.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const handleGrantAccess = async (userId: string) => {
    await grantTeacherAccess(userId);
    setUsers(users.map(u => (u.id === userId ? { ...u, role: 'teacher' as const } : u)));
    setShowUserModal(false);
  };

  const handleRevokeAccess = async (userId: string) => {
    await revokeTeacherAccess(userId);
    setUsers(users.map(u => (u.id === userId ? { ...u, role: 'user' as const } : u)));
    setShowUserModal(false);
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(u => u.id !== userId));
    setShowUserModal(false);
  };

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
            SUPER ADMIN CONTROL
          </span>
          <h1 className="font-mono text-3xl md:text-5xl font-bold text-foreground mb-4">
            System <span className="text-gradient-cyber">Administration</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Manage users, grant/revoke access, and monitor platform activity from the central command center.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <FloatingCard key={stat.label} delay={index * 0.1}>
              <Card3D>
                <div className="p-6 rounded-2xl glass border border-border/30 hover:border-primary/30 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{
                        background: `${stat.color}20`,
                        border: `1px solid ${stat.color}40`,
                      }}
                    >
                      <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                    </div>
                  </div>
                  <h3 className="font-mono text-2xl font-bold text-foreground">{stat.value}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              </Card3D>
            </FloatingCard>
          ))}
        </div>

        {/* Main Content with Tabs */}
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="users" className="font-mono">
              <Users className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Users</span>
            </TabsTrigger>
            <TabsTrigger value="access-control" className="font-mono">
              <Shield className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Access</span>
            </TabsTrigger>
            <TabsTrigger value="activity" className="font-mono">
              <BarChart3 className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Activity</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="font-mono">
              <Settings className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg glass border border-border/30 focus:border-primary/50 outline-none transition-all bg-background"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={filterRole}
                  onChange={(e) => setFilterRole(e.target.value as any)}
                  className="px-4 py-2 rounded-lg glass border border-border/30 focus:border-primary/50 outline-none transition-all bg-background font-mono text-sm"
                >
                  <option value="all">All Roles</option>
                  <option value="user">Users</option>
                  <option value="teacher">Teachers</option>
                  <option value="super_admin">Super Admin</option>
                </select>
                <button className="px-4 py-2 rounded-lg glass border border-border/30 hover:border-primary/50 transition-all font-mono text-sm flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Users List */}
            <div className="space-y-4">
              {filteredUsers.map((u, index) => (
                <motion.div
                  key={u.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    setSelectedUser(u);
                    setShowUserModal(true);
                  }}
                  className="p-6 rounded-xl glass border border-border/30 hover:border-primary/30 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-mono font-semibold text-foreground group-hover:text-primary transition-colors">
                            {u.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">{u.email}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 ml-4">
                      <div className="text-center">
                        <p className="font-mono font-bold text-foreground">{u.courses}</p>
                        <p className="text-xs text-muted-foreground">Courses</p>
                      </div>
                      <div className="text-center">
                        <p className="font-mono font-bold text-foreground">{u.students}</p>
                        <p className="text-xs text-muted-foreground">Students</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                            u.role === 'teacher'
                              ? 'bg-primary/20 text-primary border border-primary/40'
                              : 'bg-muted/20 text-muted-foreground border border-muted/40'
                          }`}
                        >
                          {u.role.replace('_', ' ').toUpperCase()}
                        </span>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                            u.status === 'active'
                              ? 'bg-secondary/20 text-secondary border border-secondary/40'
                              : u.status === 'pending'
                              ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/40'
                              : 'bg-muted/20 text-muted-foreground border border-muted/40'
                          }`}
                        >
                          {u.status.toUpperCase()}
                        </span>
                      </div>

                      <motion.div whileHover={{ x: 5 }}>
                        <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Access Control Tab */}
          <TabsContent value="access-control" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Grant Access */}
              <FloatingCard>
                <GlowCard3D
                  title="Grant Teacher Access"
                  description="Promote users to teacher role with full teaching capabilities"
                  icon={<Unlock className="w-5 h-5 text-primary" />}
                >
                  <div className="mt-6 space-y-3">
                    {users
                      .filter(u => u.role === 'user' && u.status === 'active')
                      .slice(0, 3)
                      .map(u => (
                        <motion.button
                          key={u.id}
                          whileHover={{ x: 5 }}
                          onClick={() => handleGrantAccess(u.id)}
                          className="w-full text-left p-3 rounded-lg hover:bg-primary/10 transition-colors"
                        >
                          <p className="text-sm font-mono text-foreground">{u.name}</p>
                          <p className="text-xs text-muted-foreground">{u.email}</p>
                        </motion.button>
                      ))}
                  </div>
                </GlowCard3D>
              </FloatingCard>

              {/* Revoke Access */}
              <FloatingCard delay={0.1}>
                <GlowCard3D
                  title="Revoke Teacher Access"
                  description="Demote teachers back to user role if needed"
                  icon={<Lock className="w-5 h-5 text-primary" />}
                  gradient="from-secondary to-accent"
                >
                  <div className="mt-6 space-y-3">
                    {users
                      .filter(u => u.role === 'teacher')
                      .slice(0, 3)
                      .map(u => (
                        <motion.button
                          key={u.id}
                          whileHover={{ x: 5 }}
                          onClick={() => handleRevokeAccess(u.id)}
                          className="w-full text-left p-3 rounded-lg hover:bg-red-500/10 transition-colors"
                        >
                          <p className="text-sm font-mono text-foreground">{u.name}</p>
                          <p className="text-xs text-muted-foreground">{u.email}</p>
                        </motion.button>
                      ))}
                  </div>
                </GlowCard3D>
              </FloatingCard>
            </div>

            {/* Access Rules */}
            <div className="p-6 rounded-2xl glass border border-border/30">
              <h3 className="font-mono font-bold text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Access Control Rules
              </h3>
              <div className="space-y-3">
                {[
                  'Super Admin: Full platform access, can grant/revoke teacher access',
                  'Teacher: Can create courses, manage students, access teaching modules',
                  'User: Can enroll in courses, view content, submit assignments',
                  'Pending: Users awaiting verification before full access',
                ].map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <div className="p-6 rounded-2xl glass border border-border/30">
              <h3 className="font-mono font-bold text-foreground mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Platform Activity
              </h3>
              <div className="space-y-4">
                {[
                  { action: 'New teacher registered', time: '5 mins ago', count: 1 },
                  { action: 'Students enrolled', time: '12 mins ago', count: 8 },
                  { action: 'Course started', time: '1 hour ago', count: 2 },
                  { action: 'Assignments submitted', time: '2 hours ago', count: 15 },
                  { action: 'Users completed certificates', time: '3 hours ago', count: 4 },
                ].map((activity, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between p-4 rounded-lg border border-border/20 hover:border-primary/30 transition-all"
                  >
                    <div>
                      <p className="font-mono text-sm text-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40">
                      <span className="text-sm font-mono font-bold text-primary">+{activity.count}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Platform Settings',
                  options: ['Enable/Disable registrations', 'Maintenance mode', 'Email notifications', 'Backup schedule'],
                },
                {
                  title: 'Security Settings',
                  options: ['Two-factor authentication', 'IP whitelist', 'Session timeout', 'Password policy'],
                },
                {
                  title: 'Content Settings',
                  options: ['Course approval required', 'Content moderation', 'File upload limits', 'Rate limiting'],
                },
                {
                  title: 'Notification Settings',
                  options: ['Email alerts', 'SMS notifications', 'In-app messages', 'Digest frequency'],
                },
              ].map((setting, idx) => (
                <motion.div
                  key={setting.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-6 rounded-xl glass border border-border/30 hover:border-primary/30 transition-all"
                >
                  <h3 className="font-mono font-bold text-foreground mb-4 flex items-center gap-2">
                    <Settings className="w-4 h-4 text-primary" />
                    {setting.title}
                  </h3>
                  <div className="space-y-3">
                    {setting.options.map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer p-2 rounded hover:bg-primary/5 transition-colors">
                        <input type="checkbox" className="w-4 h-4" defaultChecked />
                        <span className="text-sm text-muted-foreground">{opt}</span>
                      </label>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* User Detail Modal */}
      <AnimatePresence>
        {showUserModal && selectedUser && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowUserModal(false)}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md p-8 rounded-2xl glass border border-border/30 space-y-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-mono text-2xl font-bold text-foreground">{selectedUser.name}</h2>
                  <p className="text-muted-foreground">{selectedUser.email}</p>
                </div>
                <button
                  onClick={() => setShowUserModal(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-muted/20 border border-muted/30">
                  <p className="text-xs text-muted-foreground mb-1">Role</p>
                  <p className="font-mono font-bold text-foreground">{selectedUser.role.replace('_', ' ')}</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/20 border border-muted/30">
                  <p className="text-xs text-muted-foreground mb-1">Status</p>
                  <p className="font-mono font-bold text-foreground">{selectedUser.status}</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/20 border border-muted/30">
                  <p className="text-xs text-muted-foreground mb-1">Joined</p>
                  <p className="font-mono font-bold text-foreground">{selectedUser.joinDate}</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/20 border border-muted/30">
                  <p className="text-xs text-muted-foreground mb-1">Last Active</p>
                  <p className="font-mono font-bold text-foreground">{selectedUser.lastActive}</p>
                </div>
              </div>

              <div className="space-y-2">
                {selectedUser.role === 'user' && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    onClick={() => handleGrantAccess(selectedUser.id)}
                    className="w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-mono font-semibold flex items-center justify-center gap-2"
                  >
                    <Unlock className="w-4 h-4" />
                    Grant Teacher Access
                  </motion.button>
                )}
                {selectedUser.role === 'teacher' && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    onClick={() => handleRevokeAccess(selectedUser.id)}
                    className="w-full px-4 py-3 rounded-lg bg-yellow-600/20 text-yellow-500 hover:bg-yellow-600/30 transition-all font-mono font-semibold flex items-center justify-center gap-2 border border-yellow-500/30"
                  >
                    <Lock className="w-4 h-4" />
                    Revoke Teacher Access
                  </motion.button>
                )}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleDeleteUser(selectedUser.id)}
                  className="w-full px-4 py-3 rounded-lg bg-red-600/20 text-red-500 hover:bg-red-600/30 transition-all font-mono font-semibold flex items-center justify-center gap-2 border border-red-500/30"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete User
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

SuperAdminDashboard.displayName = 'SuperAdminDashboard';
export default SuperAdminDashboard;
