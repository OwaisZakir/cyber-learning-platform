import { useState, useEffect, useCallback } from 'react';

interface ProgressData {
  completedModules: number[];
  completedLessons: Record<number, number[]>;
  lastAccessed: number | null;
  totalTimeSpent: number;
}

const STORAGE_KEY = 'cybersecurity-course-progress';

const defaultProgress: ProgressData = {
  completedModules: [],
  completedLessons: {},
  lastAccessed: null,
  totalTimeSpent: 0,
};

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>(defaultProgress);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setProgress(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load progress:', error);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever progress changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      } catch (error) {
        console.error('Failed to save progress:', error);
      }
    }
  }, [progress, isLoaded]);

  const toggleModuleComplete = useCallback((moduleId: number) => {
    setProgress((prev) => {
      const isCompleted = prev.completedModules.includes(moduleId);
      return {
        ...prev,
        completedModules: isCompleted
          ? prev.completedModules.filter((id) => id !== moduleId)
          : [...prev.completedModules, moduleId],
        lastAccessed: moduleId,
      };
    });
  }, []);

  const toggleLessonComplete = useCallback((moduleId: number, lessonIndex: number) => {
    setProgress((prev) => {
      const moduleLessons = prev.completedLessons[moduleId] || [];
      const isCompleted = moduleLessons.includes(lessonIndex);
      return {
        ...prev,
        completedLessons: {
          ...prev.completedLessons,
          [moduleId]: isCompleted
            ? moduleLessons.filter((i) => i !== lessonIndex)
            : [...moduleLessons, lessonIndex],
        },
        lastAccessed: moduleId,
      };
    });
  }, []);

  const isModuleComplete = useCallback(
    (moduleId: number) => progress.completedModules.includes(moduleId),
    [progress.completedModules]
  );

  const isLessonComplete = useCallback(
    (moduleId: number, lessonIndex: number) =>
      (progress.completedLessons[moduleId] || []).includes(lessonIndex),
    [progress.completedLessons]
  );

  const getModuleProgress = useCallback(
    (moduleId: number, totalLessons: number) => {
      const completed = (progress.completedLessons[moduleId] || []).length;
      return totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
    },
    [progress.completedLessons]
  );

  const getOverallProgress = useCallback(
    (totalModules: number) => {
      return totalModules > 0
        ? Math.round((progress.completedModules.length / totalModules) * 100)
        : 0;
    },
    [progress.completedModules]
  );

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    progress,
    isLoaded,
    toggleModuleComplete,
    toggleLessonComplete,
    isModuleComplete,
    isLessonComplete,
    getModuleProgress,
    getOverallProgress,
    resetProgress,
  };
}
