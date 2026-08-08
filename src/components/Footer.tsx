import React from 'react';
import { Heart, MoonStar, BookOpen, ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-100 border-t border-emerald-800/60 mt-16 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-emerald-800/60 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-emerald-950 flex items-center justify-center font-bold shadow-md">
              <MoonStar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-amber-300">NgajiYuk!</h3>
              <p className="text-xs text-emerald-300">Belajar Mengaji Iqra, Tajwid & Hafalan Juz 'Amma Interaktif</p>
            </div>
          </div>

          <p className="text-xs text-emerald-200 max-w-md italic">
            "Sebaik-baik kalian adalah orang yang mempelajari Al-Qur'an dan mengajarkannya." <br />
            <span className="text-amber-300 font-bold font-sans font-semibold">— (HR. Bukhari)</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400 font-medium">
          <p>© {new Date().getFullYear()} NgajiYuk. Dikembangkan untuk membimbing mengaji Al-Qur'an.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> Dibuat dengan Kasih
            </span>
            <span className="text-emerald-600">•</span>
            <span>Versi 1.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
