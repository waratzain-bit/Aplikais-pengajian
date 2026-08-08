import React from 'react';
import { TabType, UserProgress } from '../types';
import { BookOpen, Award, Bot, Sparkles, Flame, CheckCircle, MoonStar } from 'lucide-react';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  progress: UserProgress;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, progress }) => {
  const memorizedCount = progress.memorizedSurahIds.length;

  return (
    <header className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white shadow-lg sticky top-0 z-50 border-b border-emerald-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with Branding & User Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-3 gap-3 border-b border-emerald-700/40">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('iqra-tajwid')}>
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-emerald-950 flex items-center justify-center font-bold shadow-md shadow-amber-400/20">
              <MoonStar className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-extrabold tracking-tight text-amber-300">NgajiYuk!</h1>
                <span className="bg-amber-400/20 text-amber-300 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-amber-400/30">
                  Iqra & Juz 'Amma
                </span>
              </div>
              <p className="text-xs text-emerald-200">Aplikasi Belajar Mengaji & Hafalan Interaktif</p>
            </div>
          </div>

          {/* User Gamification Stats */}
          <div className="flex items-center gap-3 bg-emerald-950/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-emerald-600/40 text-xs sm:text-sm">
            <div className="flex items-center gap-1 text-amber-400 font-bold" title="Total XP">
              <Sparkles className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{progress.xp} XP</span>
            </div>

            <div className="w-px h-4 bg-emerald-700/60" />

            <div className="flex items-center gap-1 text-orange-400 font-bold" title="Hari Mengaji Berturut-turut">
              <Flame className="w-4 h-4 fill-orange-500 text-orange-500" />
              <span>{progress.streak} Hari</span>
            </div>

            <div className="w-px h-4 bg-emerald-700/60" />

            <div className="flex items-center gap-1 text-emerald-300 font-bold" title="Surah Juz 'Amma Dihafal">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>{memorizedCount}/37 Hafal</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 py-2 overflow-x-auto no-scrollbar">
          <button

            onClick={() => setActiveTab('iqra-tajwid')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all whitespace-nowrap ${
              activeTab === 'iqra-tajwid'
                ? 'bg-amber-400 text-emerald-950 font-bold shadow-md shadow-amber-400/20'
                : 'text-emerald-100 hover:bg-emerald-800/60 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Belajar Mengaji & Tajwid</span>
          </button>

          <button

            onClick={() => setActiveTab('juz-amma')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all whitespace-nowrap ${
              activeTab === 'juz-amma'
                ? 'bg-amber-400 text-emerald-950 font-bold shadow-md shadow-amber-400/20'
                : 'text-emerald-100 hover:bg-emerald-800/60 hover:text-white'
            }`}
          >
            <MoonStar className="w-4 h-4" />
            <span>Hafalan Juz 'Amma</span>
          </button>

          <button

            onClick={() => setActiveTab('kuis')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all whitespace-nowrap ${
              activeTab === 'kuis'
                ? 'bg-amber-400 text-emerald-950 font-bold shadow-md shadow-amber-400/20'
                : 'text-emerald-100 hover:bg-emerald-800/60 hover:text-white'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Kuis & Muraja'ah</span>
          </button>

          <button

            onClick={() => setActiveTab('ai-tutor')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all whitespace-nowrap ${
              activeTab === 'ai-tutor'
                ? 'bg-amber-400 text-emerald-950 font-bold shadow-md shadow-amber-400/20'
                : 'text-emerald-100 hover:bg-emerald-800/60 hover:text-white'
            }`}
          >
            <Bot className="w-4 h-4 text-emerald-950" />
            <span>Tanya AI Mengaji</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
