import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    type: 'tebak-tajwid',
    question: 'Hukum bacaan apakah yang terjadi apabila Nun Sukun (نْ) bertemu huruf Ra (ر)?',
    arabicText: 'مِنْ رَبِّهِمْ',
    options: [
      'Idzhar Halqi (Jelas)',
      'Idgham Bighunnah (Dengung)',
      'Idgham Bilaghunnah (Lebur Tanpa Dengung)',
      'Iqlab (Ubah ke M)'
    ],
    correctAnswerIndex: 2,
    explanation: 'Nun sukun (نْ) bertemu Ra (ر) adalah Idgham Bilaghunnah. Suara Nun melebur sepenuhnya ke huruf Ra tanpa mendengung.'
  },
  {
    id: 'q2',
    type: 'tebak-tajwid',
    question: 'Berapakah jumlah harakat untuk Mad Thabi\'i (Mad Asli)?',
    options: ['1 Harakat', '2 Harakat', '4 Harakat', '6 Harakat'],
    correctAnswerIndex: 1,
    explanation: 'Mad Thabi\'i dibaca panjang 2 harakat (2 ketukan / 1 alif).'
  },
  {
    id: 'q3',
    type: 'sambung-ayat',
    question: 'Lanjutkan ayat berikutnya dari Surah Al-Ikhlas ayat 1: "قُلْ هُوَ اللَّهُ أَحَدٌ"',
    arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ ...',
    options: [
      'اللَّهُ الصَّمَدُ',
      'لَمْ يَلِدْ وَلَمْ يُولَدْ',
      'وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ',
      'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ'
    ],
    correctAnswerIndex: 0,
    explanation: 'Ayat kedua Surah Al-Ikhlas adalah "Allahu-Shamad" (اللَّهُ الصَّمَدُ).'
  },
  {
    id: 'q4',
    type: 'makhraj',
    question: 'Di manakah makhraj (tempat keluar) untuk huruf Ba (ب) dan Mim (م)?',
    options: [
      'Tenggorokan (Halq)',
      'Kedua Bibir (Syafatain)',
      'Pangkal Lidah (Lisan)',
      'Rongga Hidung (Khaisyum)'
    ],
    correctAnswerIndex: 1,
    explanation: 'Huruf Ba dan Mim keluar dari kedua bibir (Syafatain) yang merapat.'
  },
  {
    id: 'q5',
    type: 'tebak-tajwid',
    question: 'Manakah di bawah ini yang merupakan huruf Qalqalah (pantulan)?',
    options: [
      'ت - ث - ج - ح - خ',
      'ب - ج - د - ط - ق',
      'ي - ن - م - و',
      'ل - ر'
    ],
    correctAnswerIndex: 1,
    explanation: 'Huruf Qalqalah ada 5: Baju Di Toko (ب ج د ط ق).'
  },
  {
    id: 'q6',
    type: 'sambung-ayat',
    question: 'Lanjutkan ayat berikutnya dari Surah An-Naas ayat 1: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ"',
    arabicText: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ ...',
    options: [
      'إِلَٰهِ النَّاسِ',
      'مَلِكِ النَّاسِ',
      'مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ',
      'مِنَ الْجِنَّةِ وَالنَّاسِ'
    ],
    correctAnswerIndex: 1,
    explanation: 'Ayat ke-2 Surah An-Naas adalah "Malikin-naas" (مَلِكِ النَّاسِ).'
  },
  {
    id: 'q7',
    type: 'tebak-tajwid',
    question: 'Hukum apakah yang terdapat pada ayat ini: "إِنَّا أَنْزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ" pada Nun sukun bertemu Zai?',
    arabicText: 'أَنْزَلْنَاهُ',
    options: [
      'Idzhar Halqi',
      'Ikhfa Haqiqi (Samar & Dengung)',
      'Iqlab',
      'Idgham Bighunnah'
    ],
    correctAnswerIndex: 1,
    explanation: 'Nun sukun bertemu Zai (ز) adalah Ikhfa Haqiqi. Dibaca samar dan berdengung.'
  },
  {
    id: 'q8',
    type: 'sambung-ayat',
    question: 'Surah Al-Kautsar ayat 2: "فَصَلِّ لِرَبِّكَ وَانْحَرْ", apakah ayat berikutnya?',
    arabicText: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ ...',
    options: [
      'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ',
      'إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ',
      'قُلْ يَا أَيُّهَا الْكَافِرُونَ',
      'وَالْعَصْرِ إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ'
    ],
    correctAnswerIndex: 1,
    explanation: 'Ayat ke-3 Surah Al-Kautsar adalah "Inna syaani-aka huwal-abtar" (إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ).'
  }
];
