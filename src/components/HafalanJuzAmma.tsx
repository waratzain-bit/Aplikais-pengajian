import React, { useState } from 'react';
import { JUZ_AMMA_SURAHS } from '../data/juzAmmaData';
import { Ayah, Surah, UserProgress } from '../types';
import { speakArabic, stopArabicSpeech } from '../utils/audio';
import { Search, Volume2, Eye, EyeOff, CheckCircle, Clock, BookOpen, ChevronLeft, RotateCcw, Award, Play, Pause } from 'lucide-react';

interface HafalanJuzAmmaProps {
  progress: UserProgress;
  onUpdateSurahStatus: (surahNumber: number, status: 'memorized' | 'in-progress' | 'none') => void;
  onGainXp: (amount: number) => void;
}

type MaskMode = 'normal' | 'hide-arabic' | 'hide-translation' | 'hide-all';

export const HafalanJuzAmma: React.FC<HafalanJuzAmmaProps> = ({
  progress,
  onUpdateSurahStatus,
  onGainXp,
}) => {
  const [selectedSurah, setSelectedSurah] = useState<Surah | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'memorized' | 'in-progress' | 'not-started'>('all');
  const [maskMode, setMaskMode] = useState<MaskMode>('normal');
  const [revealedAyahs, setRevealedAyahs] = useState<{ [key: number]: boolean }>({});
  const [playingAyah, setPlayingAyah] = useState<number | null>(null);
  const [loopCount, setLoopCount] = useState<number>(1);
  const [currentLooping, setCurrentLooping] = useState<boolean>(false);

  const getSurahStatus = (surahNumber: number) => {
    if (progress.memorizedSurahIds.includes(surahNumber)) return 'memorized';
    if (progress.inProgressSurahIds.includes(surahNumber)) return 'in-progress';
    return 'none';
  };

  const filteredSurahs = JUZ_AMMA_SURAHS.filter((surah) => {
    const matchesSearch =
      surah.nameLatin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      surah.translationName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      surah.number.toString().includes(searchQuery);

    const status = getSurahStatus(surah.number);
    if (statusFilter === 'memorized') return matchesSearch && status === 'memorized';
    if (statusFilter === 'in-progress') return matchesSearch && status === 'in-progress';
    if (statusFilter === 'not-started') return matchesSearch && status === 'none';

    return matchesSearch;
  });

  const handleToggleRevealAyah = (ayahNum: number) => {
    setRevealedAyahs((prev) => ({ ...prev, [ayahNum]: !prev[ayahNum] }));
  };

  const handlePlayAyahAudio = async (ayah: Ayah, repeats: number = 1) => {
    setPlayingAyah(ayah.number);
    setCurrentLooping(true);

    for (let i = 0; i < repeats; i++) {
      await speakArabic(ayah.arabic);
      // Small pause between loops
      if (i < repeats - 1) {
        await new Promise((res) => setTimeout(res, 600));
      }
    }

    setPlayingAyah(null);
    setCurrentLooping(false);
  };

  const handleStatusChange = (surahNumber: number, status: 'memorized' | 'in-progress' | 'none') => {
    const currentStatus = getSurahStatus(surahNumber);
    if (currentStatus !== status) {
      onUpdateSurahStatus(surahNumber, status);
      if (status === 'memorized') {
        onGainXp(100);
      } else if (status === 'in-progress') {
        onGainXp(20);
      }
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* ================= VIEW 1: SURAH LIST ================= */}
      {!selectedSurah ? (
        <div className="space-y-6">
          {/* Header & Stats Banner */}
          <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 rounded-3xl p-6 text-white shadow-lg border border-emerald-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-amber-300">
                Juz 'Amma (Juz 30)
              </span>
              <h2 className="text-2xl font-black text-white mt-1">Hafalan 37 Surah Pendek</h2>
              <p className="text-xs text-emerald-200 mt-1 max-w-xl">
                Gunakan mode tutup ayat, ulangi audio per ayat, dan lakukan uji setoran hafalan secara mandiri atau bersama AI.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-emerald-950/70 p-4 rounded-2xl border border-emerald-700/50">
              <div className="text-center">
                <span className="text-2xl font-black text-amber-400">{progress.memorizedSurahIds.length}</span>
                <p className="text-[10px] text-emerald-200 font-medium">Hafal (Lancar)</p>
              </div>
              <div className="w-px h-8 bg-emerald-700/60" />
              <div className="text-center">
                <span className="text-2xl font-black text-sky-400">{progress.inProgressSurahIds.length}</span>
                <p className="text-[10px] text-emerald-200 font-medium">Sedang Dihafal</p>
              </div>
              <div className="w-px h-8 bg-emerald-700/60" />
              <div className="text-center">
                <span className="text-2xl font-black text-slate-300">{37 - progress.memorizedSurahIds.length - progress.inProgressSurahIds.length}</span>
                <p className="text-[10px] text-emerald-200 font-medium">Belum</p>
              </div>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input

                type="text"
                placeholder="Cari Surah (contoh: Al-Ikhlas, 112)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs font-medium focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 no-scrollbar">
              <button

                onClick={() => setStatusFilter('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  statusFilter === 'all'
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Semua (37)
              </button>
              <button

                onClick={() => setStatusFilter('memorized')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  statusFilter === 'memorized'
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Lancar / Hafal ({progress.memorizedSurahIds.length})
              </button>
              <button

                onClick={() => setStatusFilter('in-progress')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  statusFilter === 'in-progress'
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Sedang Dihafal ({progress.inProgressSurahIds.length})
              </button>
              <button

                onClick={() => setStatusFilter('not-started')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  statusFilter === 'not-started'
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Belum
              </button>
            </div>
          </div>

          {/* Surah List Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSurahs.map((surah) => {
              const status = getSurahStatus(surah.number);
              return (
                <div

                  key={surah.number}
                  onClick={() => setSelectedSurah(surah)}
                  className={`bg-white rounded-2xl p-4 border transition-all cursor-pointer hover:shadow-md flex flex-col justify-between space-y-4 group relative ${
                    status === 'memorized'
                      ? 'border-emerald-300 bg-emerald-50/30'
                      : status === 'in-progress'
                      ? 'border-sky-200 bg-sky-50/20'
                      : 'border-slate-200 hover:border-emerald-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-900 font-extrabold flex items-center justify-center text-xs shrink-0">
                        {surah.number}
                      </div>
                      <div>
                        <h3 className="font-extrabold text-slate-800 text-sm group-hover:text-emerald-700 transition-colors">
                          {surah.nameLatin}
                        </h3>
                        <p className="text-[11px] text-slate-500">{surah.translationName} • {surah.numberOfAyahs} Ayat</p>
                      </div>
                    </div>
                    <span className="font-arabic text-2xl font-bold text-emerald-900">
                      {surah.nameArabic}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px]">
                    <span className="text-slate-400 font-medium">{surah.revelationType}</span>

                    {status === 'memorized' && (
                      <span className="bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-emerald-600" /> Hafal
                      </span>
                    )}
                    {status === 'in-progress' && (
                      <span className="bg-sky-100 text-sky-800 font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3 text-sky-600" /> Progres
                      </span>
                    )}
                    {status === 'none' && (
                      <span className="text-slate-400 group-hover:text-emerald-600 font-semibold flex items-center gap-1">
                        Mulai Hafal →
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* ================= VIEW 2: SURAH MEMORIZATION WORKSPACE ================= */
        <div className="space-y-6">
          {/* Top Control Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-emerald-100">
            <button

              onClick={() => {
                stopArabicSpeech();
                setSelectedSurah(null);
              }}
              className="flex items-center gap-2 text-slate-600 hover:text-emerald-800 font-bold text-xs"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Kembali ke Daftar Surah</span>
            </button>

            {/* Surah Status Modifier */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">Status Hafalan:</span>
              <button

                onClick={() => handleStatusChange(selectedSurah.number, 'none')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  getSurahStatus(selectedSurah.number) === 'none'
                    ? 'bg-slate-800 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Belum
              </button>
              <button

                onClick={() => handleStatusChange(selectedSurah.number, 'in-progress')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  getSurahStatus(selectedSurah.number) === 'in-progress'
                    ? 'bg-sky-600 text-white'
                    : 'bg-sky-50 text-sky-700 border border-sky-200 hover:bg-sky-100'
                }`}
              >
                Progres
              </button>
              <button

                onClick={() => handleStatusChange(selectedSurah.number, 'memorized')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  getSurahStatus(selectedSurah.number) === 'memorized'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                }`}
              >
                Lancar Hafal
              </button>
            </div>
          </div>

          {/* Surah Title Banner */}
          <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 rounded-3xl p-6 text-white text-center space-y-3 shadow-lg border border-emerald-800">
            <div className="flex items-center justify-center gap-2">
              <span className="bg-amber-400 text-emerald-950 text-xs font-black px-3 py-0.5 rounded-full">
                Surah Ke-{selectedSurah.number}
              </span>
              <span className="text-xs text-emerald-200">
                {selectedSurah.revelationType} • {selectedSurah.numberOfAyahs} Ayat
              </span>
            </div>
            <h2 className="font-arabic text-4xl font-bold text-amber-300">{selectedSurah.nameArabic}</h2>
            <h3 className="text-xl font-extrabold">{selectedSurah.nameLatin}</h3>
            <p className="text-xs text-emerald-200">"{selectedSurah.translationName}"</p>

            {selectedSurah.bismillah && (
              <div className="pt-4 border-t border-emerald-800/80">
                <p className="font-arabic text-2xl font-bold text-amber-200">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </p>
                <p className="text-[11px] text-emerald-300 mt-1">
                  "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang"
                </p>
              </div>
            )}
          </div>

          {/* Memorization Mode Toolbar */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-100 space-y-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-emerald-700" />
                <span className="text-xs font-bold text-slate-800">Fitur Mode Uji Hafalan (Tutup Ayat):</span>
              </div>

              {/* Loop Count Selector */}
              <div className="flex items-center gap-2 text-xs">
                <span className="font-semibold text-slate-500">Pengulangan Audio:</span>
                {[1, 3, 5].map((cnt) => (
                  <button

                    key={cnt}
                    onClick={() => setLoopCount(cnt)}
                    className={`px-2.5 py-1 rounded-lg font-bold border transition-all ${
                      loopCount === cnt
                        ? 'bg-amber-400 text-emerald-950 border-amber-400'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {cnt}x
                  </button>
                ))}
              </div>
            </div>

            {/* Mask Mode Options */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button

                onClick={() => setMaskMode('normal')}
                className={`py-2 px-3 rounded-xl font-bold text-xs transition-all ${
                  maskMode === 'normal'
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                Normal (Tampil Semua)
              </button>

              <button

                onClick={() => {
                  setMaskMode('hide-arabic');
                  setRevealedAyahs({});
                }}
                className={`py-2 px-3 rounded-xl font-bold text-xs transition-all ${
                  maskMode === 'hide-arabic'
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                Tutup Teks Arab
              </button>

              <button

                onClick={() => {
                  setMaskMode('hide-translation');
                  setRevealedAyahs({});
                }}
                className={`py-2 px-3 rounded-xl font-bold text-xs transition-all ${
                  maskMode === 'hide-translation'
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                Tutup Terjemahan
              </button>

              <button

                onClick={() => {
                  setMaskMode('hide-all');
                  setRevealedAyahs({});
                }}
                className={`py-2 px-3 rounded-xl font-bold text-xs transition-all ${
                  maskMode === 'hide-all'
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                Uji Setoran (Tutup Semua)
              </button>
            </div>
          </div>

          {/* Verses List */}
          <div className="space-y-4">
            {selectedSurah.ayahs.map((ayah) => {
              const isArabicHidden = (maskMode === 'hide-arabic' || maskMode === 'hide-all') && !revealedAyahs[ayah.number];
              const isTranslationHidden = (maskMode === 'hide-translation' || maskMode === 'hide-all') && !revealedAyahs[ayah.number];
              const isPlayingThis = playingAyah === ayah.number;

              return (
                <div

                  key={ayah.number}
                  className={`bg-white rounded-2xl p-5 shadow-sm border transition-all space-y-4 ${
                    isPlayingThis ? 'border-amber-400 bg-amber-50/20 ring-2 ring-amber-400/20' : 'border-emerald-100'
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-900 font-extrabold flex items-center justify-center text-xs">
                        {ayah.number}
                      </div>
                      <span className="text-xs text-slate-400 font-medium">Ayat {ayah.number}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Audio Play Button */}
                      <button

                        onClick={() => handlePlayAyahAudio(ayah, loopCount)}
                        disabled={currentLooping && isPlayingThis}
                        className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all ${
                          isPlayingThis
                            ? 'bg-amber-400 text-emerald-950'
                            : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
                        }`}
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>{isPlayingThis ? `Mengulang (${loopCount}x)...` : `Putar (${loopCount}x)`}</span>
                      </button>

                      {/* Reveal Toggle for Masked mode */}
                      {maskMode !== 'normal' && (
                        <button

                          onClick={() => handleToggleRevealAyah(ayah.number)}
                          className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1"
                        >
                          {revealedAyahs[ayah.number] ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                          <span>{revealedAyahs[ayah.number] ? 'Sembunyikan' : 'Buka Klik'}</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Arabic Text */}
                  <div className="py-2 text-right">
                    {isArabicHidden ? (
                      <div className="bg-slate-100 rounded-xl p-4 text-center text-xs text-slate-400 font-medium italic border border-dashed border-slate-300">
                        🔒 Teks Arab Ditutup (Uji Ingatan Hafalan Anda). Klik "Buka Klik" untuk mengecek.
                      </div>
                    ) : (
                      <p className="font-arabic text-3xl font-bold text-emerald-950 leading-loose">
                        {ayah.arabic}
                      </p>
                    )}
                  </div>

                  {/* Transliteration & Translation */}
                  <div className="space-y-1 pt-2 border-t border-slate-50">
                    <p className="text-xs font-bold text-emerald-800">{ayah.latin}</p>
                    {isTranslationHidden ? (
                      <p className="text-xs text-slate-400 italic">🔒 Terjemahan ditutup</p>
                    ) : (
                      <p className="text-xs text-slate-600 leading-relaxed">{ayah.translation}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
