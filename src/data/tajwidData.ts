import { TajwidRule } from '../types';

export const TAJWID_RULES: TajwidRule[] = [
  {
    id: 'idzhar-halqi',
    category: 'Nun Sukun & Tanwin',
    title: 'Idzhar Halqi (إِظْهَار حَلْقِي)',
    description: 'Membaca Nun sukun (نْ) atau Tanwin (ً ٍ ٌ) secara JELAS dan TERANG tanpa mendengung ketika bertemu salah satu dari 6 huruf Halqi (tenggorokan).',
    howToRead: 'Jelas, tegas, tanpa berdengung (0 harakat dengung).',
    letters: ['ء', 'هـ', 'ع', 'ح', 'غ', 'خ'],
    color: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    examples: [
      {
        arabic: 'مَنْ أَمَنَ',
        latin: 'Man Aamana',
        surahInfo: 'QS. Al-Baqarah: 62',
        explanation: 'Nun Sukun (نْ) bertemu Alif/Hamzah (أ). Dibaca jelas "Man Aamana".'
      },
      {
        arabic: 'سَلَامٌ هِيَ',
        latin: 'Salaamun Hiya',
        surahInfo: 'QS. Al-Qadr: 5',
        explanation: 'Tanwin (ٌ) bertemu Ha\' (هـ). Dibaca jelas "Salaamun Hiya".'
      },
      {
        arabic: 'عَذَابٌ عَالٍ',
        latin: '\'Adzaabun \'Aalin',
        surahInfo: 'QS. Hud: 73',
        explanation: 'Tanwin (ٌ) bertemu \'Ain (ع). Dibaca jelas "\'Adzaabun \'Aalin".'
      }
    ]
  },
  {
    id: 'idgham-bighunnah',
    category: 'Nun Sukun & Tanwin',
    title: 'Idgham Bighunnah (إِدْغَام بِغُنَّة)',
    description: 'Memasukkan bunyi Nun sukun (نْ) atau Tanwin ke dalam huruf berikutnya disertai DENGUNG yang ditahan selama 2 harakat.',
    howToRead: 'Melebur ke huruf berikutnya + Dengung ditahan 2 ketukan (Ya, Nun, Mim, Wawu = Ya-N-Ma-U / Yanmu).',
    letters: ['ي', 'ن', 'م', 'و'],
    color: 'bg-amber-100 text-amber-900 border-amber-300',
    examples: [
      {
        arabic: 'مَنْ يَقُولُ',
        latin: 'May-Yaqoolu',
        surahInfo: 'QS. Al-Baqarah: 8',
        explanation: 'Nun Sukun bertemu Ya (ي). Suara Nun melebur ke Ya menjadi "May-Yaqoolu" dengan dengung.'
      },
      {
        arabic: 'مِنْ مَاءٍ',
        latin: 'Mim-Maa-in',
        surahInfo: 'QS. An-Nur: 45',
        explanation: 'Nun Sukun bertemu Mim (م). Melebur menjadi "Mim-Maa-in".'
      },
      {
        arabic: 'حَبْلٌ مِنْ مَسَدٍ',
        latin: 'Hablum-mim-masad',
        surahInfo: 'QS. Al-Masad: 5',
        explanation: 'Tanwin bertemu Mim, lalu Nun sukun bertemu Mim. Dua kali Idgham Bighunnah.'
      }
    ]
  },
  {
    id: 'idgham-bilaghunnah',
    category: 'Nun Sukun & Tanwin',
    title: 'Idgham Bilaghunnah (إِدْغَام بِلا غُنَّة)',
    description: 'Memasukkan bunyi Nun sukun atau Tanwin ke dalam huruf Lam (ل) atau Ra (ر) TANPA MENDENGUNG.',
    howToRead: 'Melebur penuh ke Lam atau Ra secara langsung, tanpa ada dengung di hidung.',
    letters: ['ل', 'ر'],
    color: 'bg-blue-100 text-blue-900 border-blue-300',
    examples: [
      {
        arabic: 'مِنْ رَبِّهِمْ',
        latin: 'Mir-Rabbihim',
        surahInfo: 'QS. Al-Baqarah: 5',
        explanation: 'Nun Sukun bertemu Ra (ر). Bunyi Nun hilang penuh masuk ke Ra: "Mir-Rabbihim".'
      },
      {
        arabic: 'هُدًى لِلْمُتَّقِينَ',
        latin: 'Hudal-Lil-Muttaqiin',
        surahInfo: 'QS. Al-Baqarah: 2',
        explanation: 'Tanwin (ً) bertemu Lam (ل). Dibaca "Hudal-Lil-Muttaqiin".'
      }
    ]
  },
  {
    id: 'iqlab',
    category: 'Nun Sukun & Tanwin',
    title: 'Iqlab (إِقْلَاب)',
    description: 'Mengubah bunyi Nun sukun (نْ) atau Tanwin menjadi bunyi Mim (م) disertai dengung ketika bertemu huruf Ba (ب).',
    howToRead: 'Bunyi "N" berubah menjadi "M" dengan merapatkan bibir dan dengung 2 harakat.',
    letters: ['ب'],
    color: 'bg-purple-100 text-purple-900 border-purple-300',
    examples: [
      {
        arabic: 'مِنْ بَعْدِ',
        latin: 'Mim-Ba\'di',
        surahInfo: 'QS. Al-Baqarah: 27',
        explanation: 'Nun Sukun bertemu Ba (ب). Bunyi N berubah jadi M: "Mim-Ba\'di".'
      },
      {
        arabic: 'كِرَامٍ بَرَرَةٍ',
        latin: 'Kiraamim-Bararah',
        surahInfo: 'QS. \'Abasa: 16',
        explanation: 'Tanwin bertemu Ba (ب). Dibaca "Kiraamim-Bararah".'
      }
    ]
  },
  {
    id: 'ikhfa-haqiqi',
    category: 'Nun Sukun & Tanwin',
    title: 'Ikhfa Haqiqi (إِخْفَاء حَقِيقِي)',
    description: 'Membaca Nun sukun atau Tanwin secara SAMAR antara Idzhar dan Idgham disertai dengung ketika bertemu 15 huruf Ikhfa.',
    howToRead: 'Samar-samar (suara mendekati makhraj huruf berikutnya) + Dengung 2 harakat.',
    letters: ['ت', 'ث', 'ج', 'د', 'ذ', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ف', 'ق', 'ك'],
    color: 'bg-teal-100 text-teal-900 border-teal-300',
    examples: [
      {
        arabic: 'مِنْ قَبْلُ',
        latin: 'Min--Qablu',
        surahInfo: 'QS. Al-Baqarah: 25',
        explanation: 'Nun Sukun bertemu Qaf (ق). Dibaca samar dengan berdengung tebal.'
      },
      {
        arabic: 'أَنْزَلْنَا',
        latin: 'An--Zalnaa',
        surahInfo: 'QS. Al-Qadr: 1',
        explanation: 'Nun Sukun bertemu Zai (ز). Dibaca samar "An--Zalnaa".'
      },
      {
        arabic: 'كِتَابٌ كَرِيمٌ',
        latin: 'Kitaabun--Kariim',
        surahInfo: 'QS. An-Naml: 29',
        explanation: 'Tanwin bertemu Kaf (ك). Dibaca samar "Kitaabun--Kariim".'
      }
    ]
  },
  {
    id: 'ikhfa-syafawi',
    category: 'Mim Sukun',
    title: 'Ikhfa Syafawi (إِخْفَاء شَفَوِي)',
    description: 'Mim sukun (مْ) bertemu huruf Ba (ب). Dibaca samar pada bibir disertai dengung 2 harakat.',
    howToRead: 'Bibir dirapatkan samar + Dengung 2 harakat.',
    letters: ['ب'],
    color: 'bg-rose-100 text-rose-900 border-rose-300',
    examples: [
      {
        arabic: 'تَرْمِيهِمْ بِحِجَارَةٍ',
        latin: 'Tarmiihim--Bihijaarah',
        surahInfo: 'QS. Al-Fil: 4',
        explanation: 'Mim sukun bertemu Ba. Dibaca "Tarmiihim--Bihijaarah".'
      }
    ]
  },
  {
    id: 'idgham-mimi',
    category: 'Mim Sukun',
    title: 'Idgham Mutamatsilain / Idgham Mimi',
    description: 'Mim sukun (مْ) bertemu huruf Mim (م). Dibaca melebur sempurna ke Mim berikutnya disertai dengung 2 harakat.',
    howToRead: 'Dua Mim menyatu + Dengung ditahan 2 harakat.',
    letters: ['م'],
    color: 'bg-indigo-100 text-indigo-900 border-indigo-300',
    examples: [
      {
        arabic: 'الَّذِي أَطْعَمَهُمْ مِنْ جُوعٍ',
        latin: 'Alladzii ath\'amahum-mim-juu\'',
        surahInfo: 'QS. Quraysh: 4',
        explanation: 'Mim sukun bertemu Mim. Melebur "Ath\'amahum-mim".'
      }
    ]
  },
  {
    id: 'qalqalah',
    category: 'Gunnah & Lainnya',
    title: 'Qalqalah (قَلْقَلَة)',
    description: 'Memantulkan bunyi huruf Qalqalah yang sukun (mati) atau diwaqafkan. Huruf Qalqalah: B-J-D-Th-Q (Baju Di Toko / ب ج د ط ق).',
    howToRead: 'Suara memantul tajam. Qalqalah Sughra (di tengah kata) & Qalqalah Kubra (di akhir ayat/waqaf).',
    letters: ['ب', 'ج', 'د', 'ط', 'ق'],
    color: 'bg-cyan-100 text-cyan-900 border-cyan-300',
    examples: [
      {
        arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
        latin: 'Qul Huwal-laahu Ahad(u)',
        surahInfo: 'QS. Al-Ikhlas: 1',
        explanation: 'Dal mati di akhir ayat (Qalqalah Kubra) memantul "Ahad".'
      },
      {
        arabic: 'فِي جِيدِهَا حَبْلٌ',
        latin: 'Fii jiidihaa Hablun',
        surahInfo: 'QS. Al-Masad: 5',
        explanation: 'Ba sukun di tengah kata (Qalqalah Sughra) memantul "Hablun".'
      }
    ]
  },
  {
    id: 'mad-thabii',
    category: 'Hukum Mad',
    title: 'Mad Thabi\'i / Asli (مَدّ طَبِيعِي)',
    description: 'Membaca panjang 2 harakat apabila ada Fathah diikuti Alif, Kasrah diikuti Ya sukun, atau Dammah diikuti Wawu sukun.',
    howToRead: 'Dipanjangkan tepat 2 harakat (2 ketukan / 1 alif).',
    letters: ['ا', 'ي', 'و'],
    color: 'bg-sky-100 text-sky-900 border-sky-300',
    examples: [
      {
        arabic: 'قَالَ - قِيلَ - يَقُولُ',
        latin: 'Qaa-la | Qii-la | Ya-quu-lu',
        surahInfo: 'Contoh Asli',
        explanation: 'Panjang 2 ketukan stabil.'
      }
    ]
  },
  {
    id: 'mad-wajib-muttashil',
    category: 'Hukum Mad',
    title: 'Mad Wajib Muttashil (مَدّ وَاجِب مُتَّصِل)',
    description: 'Mad Thabi\'i bertemu Hamzah dalam SATU KATA yang sama. Dibaca panjang 4 sampai 5 harakat.',
    howToRead: 'Dipanjangkan 4 - 5 harakat (ada tanda bendera di atas huruf mad dalam satu kata).',
    letters: ['ء'],
    color: 'bg-orange-100 text-orange-900 border-orange-300',
    examples: [
      {
        arabic: 'إِذَا جَاءَ نَصْرُ اللَّهِ',
        latin: 'Idzaa Jaa--a nasrul-laah',
        surahInfo: 'QS. An-Nasr: 1',
        explanation: 'Jaa-a (جَاءَ) adalah satu kata. Dipanjangkan 4-5 harakat.'
      }
    ]
  }
];
