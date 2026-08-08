import React, { useState, useEffect } from 'react';
import { TabType, UserProgress } from './types';
import { Header } from './components/Header';
import { BelajarMengaji } from './components/BelajarMengaji';
import { HafalanJuzAmma } from './components/HafalanJuzAmma';
import { KuisDanMurajaah } from './components/KuisDanMurajaah';
import { AsistenAIMengaji } from './components/AsistenAIMengaji';
import { Footer } from './components/Footer';

const INITIAL_PROGRESS: UserProgress = {
  xp: 120,
  streak: 3,
  lastActiveDate: new Date().toISOString().split('T')[0],
  memorizedSurahIds: [112, 113, 114], // Al-Ikhlas, Al-Falaq, An-Naas pre-loaded as examples
  inProgressSurahIds: [108, 110], // Al-Kautsar, An-Nasr
  completedIqraJilid: [1],
  completedQuizzesCount: 2,
};

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('iqra-tajwid');
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem('ngajiyuk_progress');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to load progress from localStorage:', e);
    }
    return INITIAL_PROGRESS;
  });

  // Save progress to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ngajiyuk_progress', JSON.stringify(progress));
    } catch (e) {
      console.warn('Failed to save progress to localStorage:', e);
    }
  }, [progress]);

  // Update streak on mount if today is consecutive
  useEffect(() => {
    const todayStr = new Date().toISOString().split('T')[0];
    if (progress.lastActiveDate !== todayStr) {
      const last = new Date(progress.lastActiveDate);
      const today = new Date(todayStr);
      const diffTime = Math.abs(today.getTime() - last.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        // Consecutive day!
        setProgress((prev) => ({
          ...prev,
          streak: prev.streak + 1,
          lastActiveDate: todayStr,
        }));
      } else if (diffDays > 1) {
        // Streak reset
        setProgress((prev) => ({
          ...prev,
          streak: 1,
          lastActiveDate: todayStr,
        }));
      }
    }
  }, []);

  const handleGainXp = (amount: number) => {
    setProgress((prev) => ({ ...prev, xp: prev.xp + amount }));
  };

  const handleCompleteJilid = (jilidNum: number) => {
    setProgress((prev) => {
      if (prev.completedIqraJilid.includes(jilidNum)) return prev;
      return {
        ...prev,
        completedIqraJilid: [...prev.completedIqraJilid, jilidNum],
      };
    });
  };

  const handleUpdateSurahStatus = (
    surahNumber: number,
    status: 'memorized' | 'in-progress' | 'none'
  ) => {
    setProgress((prev) => {
      let memorized = prev.memorizedSurahIds.filter((id) => id !== surahNumber);
      let inProgress = prev.inProgressSurahIds.filter((id) => id !== surahNumber);

      if (status === 'memorized') {
        memorized.push(surahNumber);
      } else if (status === 'in-progress') {
        inProgress.push(surahNumber);
      }

      return {
        ...prev,
        memorizedSurahIds: memorized,
        inProgressSurahIds: inProgress,
      };
    });
  };

  const handleIncrementQuizCount = () => {
    setProgress((prev) => ({
      ...prev,
      completedQuizzesCount: prev.completedQuizzesCount + 1,
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between selection:bg-emerald-200 selection:text-emerald-950">
      <div>
        <Header activeTab={activeTab} setActiveTab={setActiveTab} progress={progress} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          {activeTab === 'iqra-tajwid' && (
            <BelajarMengaji
              onGainXp={handleGainXp}
              completedJilid={progress.completedIqraJilid}
              onCompleteJilid={handleCompleteJilid}
            />
          )}

          {activeTab === 'juz-amma' && (
            <HafalanJuzAmma
              progress={progress}
              onUpdateSurahStatus={handleUpdateSurahStatus}
              onGainXp={handleGainXp}
            />
          )}

          {activeTab === 'kuis' && (
            <KuisDanMurajaah
              onGainXp={handleGainXp}
              onIncrementQuizCount={handleIncrementQuizCount}
            />
          )}

          {activeTab === 'ai-tutor' && <AsistenAIMengaji />}
        </main>
      </div>

      <Footer />
    </div>
  );
}
