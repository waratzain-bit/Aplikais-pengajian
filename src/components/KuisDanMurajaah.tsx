import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { speakArabic } from '../utils/audio';
import { Award, CheckCircle2, XCircle, RotateCcw, Volume2, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

interface KuisDanMurajaahProps {
  onGainXp: (amount: number) => void;
  onIncrementQuizCount: () => void;
}

export const KuisDanMurajaah: React.FC<KuisDanMurajaahProps> = ({
  onGainXp,
  onIncrementQuizCount,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQ.correctAnswerIndex) {
      setScore((prev) => prev + 1);
      onGainXp(15);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
      onIncrementQuizCount();
      onGainXp(50); // Bonus completion XP
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 rounded-3xl p-6 text-white shadow-lg border border-emerald-800 text-center space-y-2">
        <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-400/30">
          <Award className="w-4 h-4 text-amber-400" />
          <span>Kuis Interaktif Tajwid & Sambung Ayat</span>
        </div>
        <h2 className="text-2xl font-extrabold text-white">Uji Pemahaman & Muraja'ah</h2>
        <p className="text-xs text-emerald-200">
          Uji tajwid, makhraj, dan hafalan surah pendek untuk menambah XP dan menguatkan hafalan.
        </p>
      </div>

      {!quizFinished ? (
        <div className="bg-white rounded-3xl p-6 shadow-md border border-emerald-100 space-y-6">
          {/* Progress & Score */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 text-xs font-bold">
            <span className="text-emerald-800">
              Pertanyaan {currentIndex + 1} dari {QUIZ_QUESTIONS.length}
            </span>
            <div className="flex items-center gap-1 text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Skor: {score} Benar</span>
            </div>
          </div>

          {/* Question Box */}
          <div className="space-y-3">
            <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-3 py-1 rounded-full uppercase">
              {currentQ.type.replace('-', ' ')}
            </span>
            <h3 className="text-base font-extrabold text-slate-800 leading-snug">{currentQ.question}</h3>

            {/* Arabic Text if any */}
            {currentQ.arabicText && (
              <div className="bg-emerald-950 p-4 rounded-2xl text-center my-3 border border-emerald-800 flex items-center justify-between">
                <span className="font-arabic text-3xl font-bold text-amber-300">{currentQ.arabicText}</span>
                <button

                  onClick={() => speakArabic(currentQ.arabicText || '')}
                  className="p-2 rounded-xl bg-amber-400 text-emerald-950 hover:bg-amber-300 transition-all"
                  title="Dengar Audio"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-3">
            {currentQ.options.map((opt, idx) => {
              let optStyle = 'border-slate-200 bg-slate-50 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50/50';

              if (isAnswered) {
                if (idx === currentQ.correctAnswerIndex) {
                  optStyle = 'border-emerald-500 bg-emerald-100/80 text-emerald-900 font-bold';
                } else if (idx === selectedOption) {
                  optStyle = 'border-rose-400 bg-rose-50 text-rose-900 font-bold';
                } else {
                  optStyle = 'border-slate-100 bg-slate-50 text-slate-400 opacity-60';
                }
              }

              return (
                <button

                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`p-4 rounded-2xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between gap-3 ${optStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-slate-200/80 text-slate-700 font-extrabold text-xs flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </div>

                  {isAnswered && idx === currentQ.correctAnswerIndex && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isAnswered && idx === selectedOption && idx !== currentQ.correctAnswerIndex && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {isAnswered && (
            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 space-y-2 animate-fadeIn">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs">
                <HelpCircle className="w-4 h-4 text-emerald-600" />
                <span>Penjelasan Ustadz:</span>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed">{currentQ.explanation}</p>

              <div className="pt-2 flex justify-end">
                <button

                  onClick={handleNextQuestion}
                  className="bg-emerald-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-emerald-800 shadow-md flex items-center gap-2 transition-all"
                >
                  <span>{currentIndex < QUIZ_QUESTIONS.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil Akhir'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Quiz Summary / Completion Card */
        <div className="bg-white rounded-3xl p-8 shadow-md border border-emerald-100 text-center space-y-6">
          <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <Award className="w-10 h-10" />
          </div>

          <div>
            <h3 className="text-2xl font-black text-slate-800">Alhamdulillah! Kuis Selesai</h3>
            <p className="text-xs text-slate-500 mt-1">Anda telah menyelesaikan sesi latihan kuis mengaji & tajwid.</p>
          </div>

          <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 grid grid-cols-2 gap-4">
            <div>
              <span className="text-2xl font-black text-emerald-800">{score} / {QUIZ_QUESTIONS.length}</span>
              <p className="text-xs text-emerald-600 font-semibold mt-1">Jawaban Benar</p>
            </div>
            <div>
              <span className="text-2xl font-black text-amber-600">+{score * 15 + 50} XP</span>
              <p className="text-xs text-amber-600 font-semibold mt-1">Bonus XP Diraih</p>
            </div>
          </div>

          <button

            onClick={handleRestartQuiz}
            className="bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-2xl hover:bg-emerald-800 shadow-md flex items-center justify-center gap-2 mx-auto transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Ulangi Kuis</span>
          </button>
        </div>
      )}
    </div>
  );
};
