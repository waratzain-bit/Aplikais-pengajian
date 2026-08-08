import React, { useState } from 'react';
import { HIJAIYAH_LETTERS, IQRA_LEVELS } from '../data/iqraData';
import { TAJWID_RULES } from '../data/tajwidData';
import { HijaiyahLetter } from '../types';
import { speakArabic, stopArabicSpeech } from '../utils/audio';
import { Volume2, CheckCircle2, Award, Info, BookOpen, Layers, Play, Square, Sparkles, FastForward, Bookmark } from 'lucide-react';

interface BelajarMengajiProps {
  onGainXp: (amount: number) => void;
  completedJilid: number[];
  onCompleteJilid: (jilidNumber: number) => void;
}

export const BelajarMengaji: React.FC<BelajarMengajiProps> = ({
  onGainXp,
  completedJilid,
  onCompleteJilid,
}) => {
  const [subTab, setSubTab] = useState<'hijaiyah' | 'iqra' | 'tajwid'>('hijaiyah');
  const [selectedLetter, setSelectedLetter] = useState<HijaiyahLetter | null>(HIJAIYAH_LETTERS[0]);
  const [currentJilidIndex, setCurrentJilidIndex] = useState<number>(0);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [speechSpeed, setSpeechSpeed] = useState<number>(0.85); // 0.85x normal, 0.5x slow, 0.35x very slow
  const [playingItem, setPlayingItem] = useState<string | null>(null);
  const [isPlayingSequence, setIsPlayingSequence] = useState<boolean>(false);
  const [completedPages, setCompletedPages] = useState<string[]>([]); // e.g. "jilid1-page1"
  const [selectedTajwidCategory, setSelectedTajwidCategory] = useState<string>('Semua');

  const activeIqra = IQRA_LEVELS[currentJilidIndex];
  const activePage = activeIqra.pages ? activeIqra.pages[currentPageIndex] : null;

  const handlePlayAudio = async (text: string, id: string, customSpeed?: number) => {
    setPlayingItem(id);
    await speakArabic(text, customSpeed || speechSpeed);
    setPlayingItem(null);
  };

  const handlePlayPageSequence = async () => {
    if (!activePage) return;
    setIsPlayingSequence(true);

    for (let i = 0; i < activePage.items.length; i++) {
      const item = activePage.items[i];
      const itemId = `iqra-seq-${currentPageIndex}-${i}`;
      setPlayingItem(itemId);
      await speakArabic(item.arabic, speechSpeed);
      await new Promise((res) => setTimeout(res, 500));
    }

    setPlayingItem(null);
    setIsPlayingSequence(false);
  };

  const handleStopAudio = () => {
    stopArabicSpeech();
    setIsPlayingSequence(false);
    setPlayingItem(null);
  };

  const handleFinishPage = (pageKey: string) => {
    if (!completedPages.includes(pageKey)) {
      setCompletedPages((prev) => [...prev, pageKey]);
      onGainXp(15);
    }
  };

  const handleFinishJilid = (jilidNum: number) => {
    if (!completedJilid.includes(jilidNum)) {
      onCompleteJilid(jilidNum);
      onGainXp(50);
    }
  };

  const tajwidCategories = ['Semua', 'Nun Sukun & Tanwin', 'Mim Sukun', 'Hukum Mad', 'Qalqalah', 'Gunnah & Lainnya'];

  const filteredTajwidRules = selectedTajwidCategory === 'Semua'
    ? TAJWID_RULES
    : TAJWID_RULES.filter((r) => r.category === selectedTajwidCategory);

  return (
    <div className="space-y-6 pb-12">
      {/* Sub Tab Switcher - Vibrant Palette */}
      <div className="bg-white rounded-[24px] p-2 shadow-sm border-2 border-emerald-100 flex flex-wrap gap-2">
        <button
          onClick={() => setSubTab('hijaiyah')}
          className={`flex-1 min-w-[140px] py-3 px-4 rounded-[18px] font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
            subTab === 'hijaiyah'
              ? 'bg-emerald-800 text-amber-300 shadow-md border-b-4 border-emerald-950'
              : 'text-slate-600 hover:bg-emerald-50'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>1. Huruf Hijaiyah & Makhraj</span>
        </button>

        <button
          onClick={() => setSubTab('iqra')}
          className={`flex-1 min-w-[140px] py-3 px-4 rounded-[18px] font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
            subTab === 'iqra'
              ? 'bg-emerald-800 text-amber-300 shadow-md border-b-4 border-emerald-950'
              : 'text-slate-600 hover:bg-emerald-50'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>2. Iqra' Jilid 1 - 6 (Lengkap)</span>
        </button>

        <button
          onClick={() => setSubTab('tajwid')}
          className={`flex-1 min-w-[140px] py-3 px-4 rounded-[18px] font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
            subTab === 'tajwid'
              ? 'bg-emerald-800 text-amber-300 shadow-md border-b-4 border-emerald-950'
              : 'text-slate-600 hover:bg-emerald-50'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>3. Panduan Hukum Tajwid</span>
        </button>
      </div>

      {/* ================= SUB TAB 1: HIJAIYAH & MAKHRAJ ================= */}
      {subTab === 'hijaiyah' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Grid of 29 Hijaiyah Letters */}
          <div className="lg:col-span-2 bg-white rounded-[32px] p-6 shadow-sm border-2 border-emerald-100 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-100 pb-3">
              <div>
                <span className="bg-emerald-100 text-emerald-900 text-[11px] font-black px-3 py-1 rounded-full uppercase border border-emerald-200">
                  DASAR MENGAJI
                </span>
                <h2 className="text-xl font-black text-slate-800 mt-1">29 Huruf Hijaiyah Utama</h2>
                <p className="text-xs text-slate-500">Klik huruf untuk mendengar bunyi & membaca Makhrajnya</p>
              </div>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
              {HIJAIYAH_LETTERS.map((item) => {
                const isSelected = selectedLetter?.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedLetter(item);
                      handlePlayAudio(item.fathah, item.id);
                    }}
                    className={`p-3 rounded-[20px] border-2 flex flex-col items-center justify-center transition-all group relative ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/90 shadow-md ring-2 ring-emerald-500/20'
                        : 'border-slate-200 bg-slate-50/60 hover:border-emerald-400 hover:bg-emerald-50/40'
                    }`}
                  >
                    <span className="font-arabic text-3xl font-black text-emerald-950 mb-1">
                      {item.fathah}
                    </span>
                    <span className="text-[11px] font-extrabold text-slate-800">{item.name}</span>
                    <span className="text-[10px] text-slate-400 font-bold">({item.latin})</span>

                    {playingItem === item.id && (
                      <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Letter Detail Card & Makhraj */}
          {selectedLetter && (
            <div className="bg-gradient-to-br from-emerald-900 via-emerald-850 to-teal-950 rounded-[32px] p-6 text-white shadow-xl border-2 border-emerald-800 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between border-b border-emerald-800/80 pb-4">
                  <div>
                    <span className="bg-amber-400/20 text-amber-300 text-[10px] font-black px-3 py-1 rounded-full uppercase border border-amber-400/30">
                      Makhraj Huruf
                    </span>
                    <h3 className="text-2xl font-black text-amber-300 mt-1">{selectedLetter.name} ({selectedLetter.latin})</h3>
                  </div>
                  <button
                    onClick={() => handlePlayAudio(selectedLetter.fathah, selectedLetter.id)}
                    className="w-12 h-12 rounded-[18px] bg-amber-400 text-emerald-950 flex items-center justify-center font-black shadow-md border-b-4 border-amber-600 hover:bg-amber-300 transition-all active:translate-y-0.5"
                    title="Dengar Bunyi"
                  >
                    <Volume2 className="w-6 h-6" />
                  </button>
                </div>

                {/* Harakat Variations */}
                <div className="grid grid-cols-3 gap-2 my-5 text-center">
                  <div className="bg-emerald-900/80 p-3 rounded-[18px] border border-emerald-700/60">
                    <span className="font-arabic text-3xl font-black text-amber-300">{selectedLetter.fathah}</span>
                    <p className="text-[11px] text-emerald-200 mt-1 font-bold">Fathah ({selectedLetter.fathahLatin})</p>
                  </div>
                  <div className="bg-emerald-900/80 p-3 rounded-[18px] border border-emerald-700/60">
                    <span className="font-arabic text-3xl font-black text-amber-300">{selectedLetter.kasrah}</span>
                    <p className="text-[11px] text-emerald-200 mt-1 font-bold">Kasrah ({selectedLetter.kasrahLatin})</p>
                  </div>
                  <div className="bg-emerald-900/80 p-3 rounded-[18px] border border-emerald-700/60">
                    <span className="font-arabic text-3xl font-bold text-amber-300">{selectedLetter.dammah}</span>
                    <p className="text-[11px] text-emerald-200 mt-1 font-bold">Dammah ({selectedLetter.dammahLatin})</p>
                  </div>
                </div>

                {/* Makhraj Explanation */}
                <div className="bg-emerald-950/60 p-4 rounded-[20px] border border-emerald-800/80 space-y-2">
                  <div className="flex items-center gap-2 text-amber-300 text-xs font-black uppercase">
                    <Info className="w-4 h-4" />
                    <span>Tempat Keluar Suara (Makhraj):</span>
                  </div>
                  <p className="text-xs text-emerald-100 leading-relaxed font-medium">{selectedLetter.makhraj}</p>
                </div>

                {/* Word Examples */}
                <div className="mt-5 space-y-2">
                  <span className="text-xs font-extrabold text-amber-300">Contoh Kata (Klik Suara):</span>
                  <div className="space-y-2">
                    {selectedLetter.examples.map((ex, idx) => (
                      <div
                        key={idx}
                        onClick={() => handlePlayAudio(ex.arabic, `ex-${idx}`)}
                        className="flex items-center justify-between bg-emerald-900/70 hover:bg-emerald-800/80 p-3 rounded-[16px] border border-emerald-700/50 cursor-pointer transition-all active:scale-[0.98]"
                      >
                        <span className="text-xs font-bold text-emerald-200">{ex.latin}</span>
                        <span className="font-arabic text-2xl font-black text-amber-300">{ex.arabic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center pt-2 border-t border-emerald-800/60">
                <p className="text-[11px] text-emerald-300 font-medium">💡 Dengarkan artikulasi makhraj secara teliti sebelum beralih ke Iqra!</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= SUB TAB 2: IQRA 1 - 6 LENGKAP ================= */}
      {subTab === 'iqra' && (
        <div className="space-y-6">
          {/* Jilid Selector Buttons - Chunky Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
            {IQRA_LEVELS.map((level, idx) => {
              const isCurrent = currentJilidIndex === idx;
              const isDone = completedJilid.includes(level.jilid);

              return (
                <button
                  key={level.jilid}
                  onClick={() => {
                    setCurrentJilidIndex(idx);
                    setCurrentPageIndex(0); // Reset page on jilid change
                  }}
                  className={`p-3.5 rounded-[22px] border-2 text-left transition-all relative ${
                    isCurrent
                      ? 'bg-emerald-800 text-white border-emerald-900 shadow-md border-b-4'
                      : isDone
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-black">Jilid {level.jilid}</span>
                    {isDone && <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100 shrink-0" />}
                  </div>
                  <p className="text-[11px] font-bold opacity-80 truncate">{level.title.split(':')[1]}</p>
                  <span className="text-[9px] font-bold text-amber-600 block mt-0.5">{level.pages.length} Halaman</span>
                </button>
              );
            })}
          </div>

          {/* Active Iqra Jilid Card */}
          <div className="bg-white rounded-[32px] p-6 shadow-md border-2 border-emerald-100 space-y-6">
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-amber-400 text-emerald-950 text-xs font-black px-3.5 py-1 rounded-full border-b-2 border-amber-600">
                    IQRA JILID {activeIqra.jilid}
                  </span>
                  <span className="bg-sky-100 text-sky-800 text-xs font-bold px-3 py-1 rounded-full border border-sky-200">
                    {activeIqra.pages.length} Halaman Praktik
                  </span>
                  {completedJilid.includes(activeIqra.jilid) && (
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Jilid Selesai
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-black text-slate-800 mt-2">{activeIqra.title}</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">{activeIqra.description}</p>
              </div>

              <button
                onClick={() => handleFinishJilid(activeIqra.jilid)}
                className={`px-5 py-3 rounded-[18px] font-black text-xs sm:text-sm flex items-center gap-2 transition-all shrink-0 ${
                  completedJilid.includes(activeIqra.jilid)
                    ? 'bg-slate-100 text-slate-500 cursor-default border border-slate-200'
                    : 'bg-amber-400 text-emerald-950 hover:bg-amber-300 border-b-4 border-amber-600 shadow-md active:translate-y-0.5'
                }`}
              >
                <Award className="w-4 h-4 text-emerald-950" />
                <span>{completedJilid.includes(activeIqra.jilid) ? 'Jilid Selesai' : 'Tandai Selesai Jilid (+50 XP)'}</span>
              </button>
            </div>

            {/* Key Topics Badges */}
            <div className="bg-emerald-50/80 p-4 rounded-[22px] border border-emerald-200 space-y-2">
              <span className="text-xs font-black text-emerald-950 uppercase tracking-wide">Pokok Bahasan Jilid {activeIqra.jilid}:</span>
              <div className="flex flex-wrap gap-2">
                {activeIqra.topics.map((tp, i) => (
                  <span key={i} className="text-xs font-bold text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200">
                    ✓ {tp}
                  </span>
                ))}
              </div>
            </div>

            {/* Page Navigation Tabs */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-700 uppercase tracking-wide">Pilih Halaman Pembelajaran:</span>
                <span className="text-xs font-bold text-emerald-700">Halaman {currentPageIndex + 1} dari {activeIqra.pages.length}</span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                {activeIqra.pages.map((p, pIdx) => {
                  const pKey = `jilid${activeIqra.jilid}-page${p.pageNumber}`;
                  const isDone = completedPages.includes(pKey);
                  const isCurrent = currentPageIndex === pIdx;

                  return (
                    <button
                      key={p.pageNumber}
                      onClick={() => {
                        handleStopAudio();
                        setCurrentPageIndex(pIdx);
                      }}
                      className={`px-4 py-2.5 rounded-[16px] font-bold text-xs whitespace-nowrap transition-all flex items-center gap-2 border-2 ${
                        isCurrent
                          ? 'bg-emerald-800 text-amber-300 border-emerald-950 shadow-md'
                          : isDone
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isCurrent ? 'text-amber-300' : 'text-slate-400'}`} />
                      <span>Hal {p.pageNumber}</span>
                      {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Current Page Workspace */}
            {activePage && (
              <div className="bg-slate-50/70 p-5 rounded-[28px] border-2 border-emerald-100 space-y-6">
                {/* Page Title & Controls */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase">
                      HALAMAN {activePage.pageNumber}
                    </span>
                    <h4 className="text-lg font-black text-slate-800 mt-1">{activePage.title}</h4>
                    {activePage.description && (
                      <p className="text-xs text-slate-600 mt-0.5">{activePage.description}</p>
                    )}
                  </div>

                  {/* Audio Controls Bar */}
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Speed Selector */}
                    <div className="flex items-center gap-1 bg-white p-1 rounded-[14px] border border-slate-200 text-[11px] font-bold">
                      <span className="px-2 text-slate-400">Kecepatan:</span>
                      <button
                        onClick={() => setSpeechSpeed(0.85)}
                        className={`px-2.5 py-1 rounded-[10px] ${speechSpeed === 0.85 ? 'bg-emerald-700 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                      >
                        Normal
                      </button>
                      <button
                        onClick={() => setSpeechSpeed(0.5)}
                        className={`px-2.5 py-1 rounded-[10px] ${speechSpeed === 0.5 ? 'bg-amber-500 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                      >
                        Pelan
                      </button>
                      <button
                        onClick={() => setSpeechSpeed(0.35)}
                        className={`px-2.5 py-1 rounded-[10px] ${speechSpeed === 0.35 ? 'bg-amber-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                      >
                        Sangat Pelan
                      </button>
                    </div>

                    {/* Auto Play Page button */}
                    {!isPlayingSequence ? (
                      <button
                        onClick={handlePlayPageSequence}
                        className="bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xs px-4 py-2 rounded-[14px] shadow-sm flex items-center gap-1.5 transition-all"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Putar 1 Hal</span>
                      </button>
                    ) : (
                      <button
                        onClick={handleStopAudio}
                        className="bg-rose-600 hover:bg-rose-700 text-white font-black text-xs px-4 py-2 rounded-[14px] shadow-sm flex items-center gap-1.5 transition-all animate-pulse"
                      >
                        <Square className="w-3.5 h-3.5 fill-white" />
                        <span>Hentikan</span>
                      </button>
                    )}

                    {/* Mark Page Complete */}
                    <button
                      onClick={() => handleFinishPage(`jilid${activeIqra.jilid}-page${activePage.pageNumber}`)}
                      className={`px-3.5 py-2 rounded-[14px] font-bold text-xs flex items-center gap-1.5 ${
                        completedPages.includes(`jilid${activeIqra.jilid}-page${activePage.pageNumber}`)
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-emerald-50'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{completedPages.includes(`jilid${activeIqra.jilid}-page${activePage.pageNumber}`) ? 'Selesai' : '+15 XP'}</span>
                    </button>
                  </div>
                </div>

                {/* Items Grid for Current Page */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {activePage.items.map((item, idx) => {
                    const itemId = `iqra-${currentPageIndex}-${idx}`;
                    const isPlayingThis = playingItem === itemId || playingItem === `iqra-seq-${currentPageIndex}-${idx}`;

                    return (
                      <div
                        key={idx}
                        onClick={() => handlePlayAudio(item.arabic, itemId)}
                        className={`p-5 rounded-[24px] border-2 transition-all cursor-pointer flex flex-col items-center justify-between space-y-3 text-center group relative ${
                          isPlayingThis
                            ? 'bg-amber-100/90 border-amber-400 shadow-md ring-2 ring-amber-400/30 scale-[1.02]'
                            : 'bg-white border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/60'
                        }`}
                      >
                        <span className="font-arabic text-4xl font-black text-emerald-950 group-hover:scale-105 transition-transform leading-relaxed">
                          {item.arabic}
                        </span>

                        <div>
                          <span className="text-sm font-black text-slate-800 block">{item.latin}</span>
                          {item.note && (
                            <span className="text-[11px] font-extrabold text-amber-900 bg-amber-100/80 px-2.5 py-0.5 rounded-full mt-1.5 inline-block border border-amber-300">
                              {item.note}
                            </span>
                          )}
                        </div>

                        <div className={`flex items-center gap-1 text-[11px] font-bold ${isPlayingThis ? 'text-amber-800' : 'text-slate-400 group-hover:text-emerald-700'}`}>
                          <Volume2 className={`w-3.5 h-3.5 ${isPlayingThis ? 'animate-bounce text-amber-700' : ''}`} />
                          <span>{isPlayingThis ? 'Sedang Membaca...' : 'Dengar Suara'}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Page Pagination Bar */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <button
                    disabled={currentPageIndex === 0}
                    onClick={() => {
                      handleStopAudio();
                      setCurrentPageIndex((prev) => Math.max(0, prev - 1));
                    }}
                    className={`px-4 py-2 rounded-[14px] font-bold text-xs transition-all ${
                      currentPageIndex === 0
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    ← Halaman Sebelumnya
                  </button>

                  <span className="text-xs font-bold text-slate-500">
                    Halaman {currentPageIndex + 1} dari {activeIqra.pages.length}
                  </span>

                  <button
                    disabled={currentPageIndex === activeIqra.pages.length - 1}
                    onClick={() => {
                      handleStopAudio();
                      setCurrentPageIndex((prev) => Math.min(activeIqra.pages.length - 1, prev + 1));
                    }}
                    className={`px-4 py-2 rounded-[14px] font-bold text-xs transition-all ${
                      currentPageIndex === activeIqra.pages.length - 1
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        : 'bg-emerald-700 text-white hover:bg-emerald-800 shadow-sm'
                    }`}
                  >
                    Halaman Berikutnya →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= SUB TAB 3: TAJWID GUIDE ================= */}
      {subTab === 'tajwid' && (
        <div className="space-y-6">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {tajwidCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTajwidCategory(cat)}
                className={`px-4 py-2.5 rounded-[16px] text-xs font-black transition-all whitespace-nowrap border-2 ${
                  selectedTajwidCategory === cat
                    ? 'bg-emerald-800 text-amber-300 border-emerald-950 shadow-sm'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tajwid Rules Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTajwidRules.map((rule) => (
              <div key={rule.id} className="bg-white rounded-[32px] p-6 shadow-sm border-2 border-emerald-100 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-black px-3 py-1 rounded-full border ${rule.color}`}>
                      {rule.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-slate-800">{rule.title}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">{rule.description}</p>

                  {/* How to Read */}
                  <div className="bg-slate-50 p-3.5 rounded-[18px] border border-slate-200 mt-3 space-y-1">
                    <span className="text-[11px] font-black text-emerald-800 uppercase">Cara Membaca:</span>
                    <p className="text-xs font-bold text-slate-800">{rule.howToRead}</p>
                  </div>

                  {/* Huruf */}
                  <div className="mt-3">
                    <span className="text-[11px] font-black text-slate-400 uppercase">Huruf Tajwid:</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {rule.letters.map((ltr, i) => (
                        <span key={i} className="font-arabic text-xl font-black bg-emerald-50 text-emerald-950 border border-emerald-200 px-3 py-0.5 rounded-[12px]">
                          {ltr}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Examples */}
                  <div className="mt-4 space-y-2">
                    <span className="text-[11px] font-black text-slate-500 uppercase">Contoh Ayat Al-Qur'an (Klik Suara):</span>
                    {rule.examples.map((ex, exIdx) => (
                      <div
                        key={exIdx}
                        onClick={() => handlePlayAudio(ex.arabic, `tj-${rule.id}-${exIdx}`)}
                        className="bg-emerald-950 text-white p-3.5 rounded-[20px] cursor-pointer hover:bg-emerald-900 transition-all flex items-center justify-between border border-emerald-800"
                      >
                        <div>
                          <p className="font-arabic text-2xl font-black text-amber-300">{ex.arabic}</p>
                          <p className="text-[11px] font-bold text-emerald-200">{ex.latin} <span className="text-emerald-400">({ex.surahInfo})</span></p>
                          <p className="text-[10px] text-slate-300 mt-1 font-medium">{ex.explanation}</p>
                        </div>
                        <Volume2 className="w-5 h-5 text-amber-400 shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
