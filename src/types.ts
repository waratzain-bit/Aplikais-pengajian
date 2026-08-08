export type TabType = 'iqra-tajwid' | 'juz-amma' | 'kuis' | 'ai-tutor';

export interface HijaiyahLetter {
  id: string;
  arabic: string;
  name: string;
  latin: string;
  fathah: string;
  kasrah: string;
  dammah: string;
  fathahLatin: string;
  kasrahLatin: string;
  dammahLatin: string;
  makhraj: string;
  examples: Array<{
    arabic: string;
    latin: string;
  }>;
}

export interface IqraItem {
  arabic: string;
  latin: string;
  note?: string;
}

export interface IqraPage {
  pageNumber: number;
  title: string;
  description?: string;
  items: IqraItem[];
}

export interface IqraLevel {
  jilid: number;
  title: string;
  description: string;
  topics: string[];
  pages: IqraPage[];
  lettersOrItems?: IqraItem[];
}

export interface TajwidRule {
  id: string;
  category: 'Nun Sukun & Tanwin' | 'Mim Sukun' | 'Hukum Mad' | 'Qalqalah' | 'Gunnah & Lainnya';
  title: string;
  description: string;
  howToRead: string;
  letters: string[];
  color: string; // Tailwind color class for highlighting
  examples: Array<{
    arabic: string;
    latin: string;
    surahInfo?: string;
    explanation: string;
  }>;
}

export interface Ayah {
  number: number;
  arabic: string;
  latin: string;
  translation: string;
  audioUrl?: string;
  tajwidHighlights?: Array<{
    text: string;
    rule: string;
    color: string;
  }>;
}

export interface Surah {
  number: number;
  nameArabic: string;
  nameLatin: string;
  translationName: string;
  numberOfAyahs: number;
  revelationType: 'Makkiyah' | 'Madaniyah';
  bismillah: boolean;
  ayahs: Ayah[];
}

export interface UserProgress {
  xp: number;
  streak: number;
  lastActiveDate: string;
  memorizedSurahIds: number[]; // surah numbers fully memorized
  inProgressSurahIds: number[]; // surah numbers currently learning
  completedIqraJilid: number[];
  completedQuizzesCount: number;
}

export interface QuizQuestion {
  id: string;
  type: 'tebak-tajwid' | 'sambung-ayat' | 'makhraj';
  question: string;
  arabicText?: string;
  audioPromptText?: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface AIMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  audioText?: string;
}
