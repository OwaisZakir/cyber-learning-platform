import { memo, Suspense, lazy } from 'react';
import Header from './Header';
import Footer from './Footer';

// Lazy load background for performance
const CyberBackground = lazy(() => import('@/components/CyberBackground'));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = memo(({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Optimized Background - lazy loaded */}
      <Suspense fallback={<div className="fixed inset-0 bg-background" />}>
        <CyberBackground />
      </Suspense>

      {/* Scanlines overlay */}
      <div className="fixed inset-0 pointer-events-none scanlines z-[1]" />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10 pt-16">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
});

Layout.displayName = 'Layout';
export default Layout;
