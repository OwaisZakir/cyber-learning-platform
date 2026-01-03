import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { AuthProvider } from "@/context/AuthContext";

// Lazy load pages for performance
const Home = lazy(() => import("./pages/Home"));
const Modules = lazy(() => import("./pages/Modules"));
const ModuleDetail = lazy(() => import("./pages/ModuleDetail"));
const Paths = lazy(() => import("./pages/Paths"));
const Resources = lazy(() => import("./pages/Resources"));
const CourseVersions = lazy(() => import("./pages/CourseVersions"));
const LearningPathSelector = lazy(() => import("./pages/LearningPathSelector"));
const TrainerProgram = lazy(() => import("./pages/TrainerProgram"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Certifications = lazy(() => import("./pages/Certifications"));
const TeacherLearning = lazy(() => import("./pages/TeacherLearning"));
const SuperAdminDashboard = lazy(() => import("./pages/SuperAdminDashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/modules" element={<Modules />} />
                <Route path="/modules/:id" element={<ModuleDetail />} />
                <Route path="/paths" element={<Paths />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/courses" element={<CourseVersions />} />
                <Route path="/quiz" element={<LearningPathSelector />} />
                <Route path="/trainer" element={<TrainerProgram />} />
                <Route path="/teacher-learning" element={<TeacherLearning />} />
                <Route path="/admin" element={<SuperAdminDashboard />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
