import { HijaiyahLetter, IqraLevel } from '../types';

export const HIJAIYAH_LETTERS: HijaiyahLetter[] = [
  {
    id: 'alif',
    arabic: 'ا',
    name: 'Alif',
    latin: 'A',
    fathah: 'أَ',
    kasrah: 'إِ',
    dammah: 'أُ',
    fathahLatin: 'A',
    kasrahLatin: 'I',
    dammahLatin: 'U',
    makhraj: 'Tenggorokan bagian bawah (Jauf / Rongga mulut)',
    examples: [
      { arabic: 'أَكَلَ', latin: 'A-Ka-La' },
      { arabic: 'إِبِلٌ', latin: 'I-Bi-Lun' },
      { arabic: 'أُذُنٌ', latin: 'U-Dhu-Nun' }
    ]
  },
  {
    id: 'ba',
    arabic: 'ب',
    name: 'Ba\'',
    latin: 'B',
    fathah: 'بَ',
    kasrah: 'بِ',
    dammah: 'بُ',
    fathahLatin: 'Ba',
    kasrahLatin: 'Bi',
    dammahLatin: 'Bu',
    makhraj: 'Kedua bibir dirapatkan (Syafatain)',
    examples: [
      { arabic: 'بَابٌ', latin: 'Ba-Bun' },
      { arabic: 'بَرَكَةٌ', latin: 'Ba-Ra-Ka-Tun' },
      { arabic: 'بُرْهَانٌ', latin: 'Bur-Ha-Nun' }
    ]
  },
  {
    id: 'ta',
    arabic: 'ت',
    name: 'Ta\'',
    latin: 'T',
    fathah: 'تَ',
    kasrah: 'تِ',
    dammah: 'تُ',
    fathahLatin: 'Ta',
    kasrahLatin: 'Ti',
    dammahLatin: 'Tu',
    makhraj: 'Ujung lidah menempel pada pangkal gigi seri atas',
    examples: [
      { arabic: 'تينٌ', latin: 'Ti-Nun' },
      { arabic: 'تَبَّتْ', latin: 'Tab-Bat' },
      { arabic: 'تُوبُوا', latin: 'Tu-Bu' }
    ]
  },
  {
    id: 'tsa',
    arabic: 'ث',
    name: 'Tsa\'',
    latin: 'Ts',
    fathah: 'ثَ',
    kasrah: 'ثِ',
    dammah: 'ثُ',
    fathahLatin: 'Tsa',
    kasrahLatin: 'Tsi',
    dammahLatin: 'Tsu',
    makhraj: 'Ujung lidah keluar sedikit mengenai ujung gigi seri atas',
    examples: [
      { arabic: 'ثَمَرَةٌ', latin: 'Tsa-Ma-Ra-Tun' },
      { arabic: 'ثُبُورًا', latin: 'Tsu-Bu-Ran' },
      { arabic: 'ثَبَاتًا', latin: 'Tsa-Ba-Tan' }
    ]
  },
  {
    id: 'jim',
    arabic: 'ج',
    name: 'Jim',
    latin: 'J',
    fathah: 'جَ',
    kasrah: 'جِ',
    dammah: 'جُ',
    fathahLatin: 'Ja',
    kasrahLatin: 'Ji',
    dammahLatin: 'Ju',
    makhraj: 'Tengah-tengah lidah menempel pada langit-langit mulut',
    examples: [
      { arabic: 'جَمَلٌ', latin: 'Ja-Ma-Lun' },
      { arabic: 'جِبَالٌ', latin: 'Ji-Ba-Lun' },
      { arabic: 'جُنَّةٌ', latin: 'Jun-Na-Tun' }
    ]
  },
  {
    id: 'ha_kecil',
    arabic: 'ح',
    name: 'Ha\' (Pedas)',
    latin: 'H',
    fathah: 'حَ',
    kasrah: 'حِ',
    dammah: 'حُ',
    fathahLatin: 'Ha',
    kasrahLatin: 'Hi',
    dammahLatin: 'Hu',
    makhraj: 'Tengah tenggorokan (Halq), bersuara bersih dan lembut',
    examples: [
      { arabic: 'حَمْدٌ', latin: 'Ham-Dun' },
      { arabic: 'حِكْمَةٌ', latin: 'Hik-Ma-Tun' },
      { arabic: 'حُسْنٌ', latin: 'Hus-Nun' }
    ]
  },
  {
    id: 'kho',
    arabic: 'خ',
    name: 'Kha\'',
    latin: 'Kh',
    fathah: 'خَ',
    kasrah: 'خِ',
    dammah: 'خُ',
    fathahLatin: 'Kha',
    kasrahLatin: 'Khi',
    dammahLatin: 'Khu',
    makhraj: 'Ujung tenggorokan paling atas mendekati mulut',
    examples: [
      { arabic: 'خَيْرٌ', latin: 'Khay-Run' },
      { arabic: 'خِتَامٌ', latin: 'Khi-Ta-Mun' },
      { arabic: 'خُسْرٍ', latin: 'Khus-Rin' }
    ]
  },
  {
    id: 'dal',
    arabic: 'د',
    name: 'Dal',
    latin: 'D',
    fathah: 'دَ',
    kasrah: 'دِ',
    dammah: 'دُ',
    fathahLatin: 'Da',
    kasrahLatin: 'Di',
    dammahLatin: 'Du',
    makhraj: 'Ujung lidah menempel pada pangkal gigi seri atas',
    examples: [
      { arabic: 'دَرَسَ', latin: 'Da-Ra-Sa' },
      { arabic: 'دِينٌ', latin: 'Di-Nun' },
      { arabic: 'دُعَاءٌ', latin: 'Du-\'A-Un' }
    ]
  },
  {
    id: 'dzal',
    arabic: 'ذ',
    name: 'Dzal',
    latin: 'Dz',
    fathah: 'ذَ',
    kasrah: 'ذِ',
    dammah: 'ذُ',
    fathahLatin: 'Dza',
    kasrahLatin: 'Dzi',
    dammahLatin: 'Dzu',
    makhraj: 'Ujung lidah disentuhkan pada ujung gigi seri atas',
    examples: [
      { arabic: 'ذَكَرَ', latin: 'Dza-Ka-Ra' },
      { arabic: 'ذِكْرٌ', latin: 'Dzik-Run' },
      { arabic: 'ذُبَابٌ', latin: 'Dzu-Ba-Bun' }
    ]
  },
  {
    id: 'ra',
    arabic: 'ر',
    name: 'Ra\'',
    latin: 'R',
    fathah: 'رَ',
    kasrah: 'رِ',
    dammah: 'رُ',
    fathahLatin: 'Ra',
    kasrahLatin: 'Ri',
    dammahLatin: 'Ru',
    makhraj: 'Ujung lidah bagian punggung ditempelkan ke langit-langit depan',
    examples: [
      { arabic: 'رَحْمَةٌ', latin: 'Rah-Ma-Tun' },
      { arabic: 'رِزْقٌ', latin: 'Riz-Qun' },
      { arabic: 'رُوحٌ', latin: 'Ru-Hun' }
    ]
  },
  {
    id: 'zai',
    arabic: 'ز',
    name: 'Zai',
    latin: 'Z',
    fathah: 'زَ',
    kasrah: 'زِ',
    dammah: 'زُ',
    fathahLatin: 'Za',
    kasrahLatin: 'Zi',
    dammahLatin: 'Zu',
    makhraj: 'Ujung lidah didekatkan ke belakang gigi seri bawah',
    examples: [
      { arabic: 'زَيْتٌ', latin: 'Zay-Tun' },
      { arabic: 'زِينَةٌ', latin: 'Zi-Na-Tun' },
      { arabic: 'زُمَرٌ', latin: 'Zu-Ma-Run' }
    ]
  },
  {
    id: 'sin',
    arabic: 'س',
    name: 'Sin',
    latin: 'S',
    fathah: 'سَ',
    kasrah: 'سِ',
    dammah: 'سُ',
    fathahLatin: 'Sa',
    kasrahLatin: 'Si',
    dammahLatin: 'Su',
    makhraj: 'Ujung lidah didekatkan ke gigi seri bawah dengan hembusan desis',
    examples: [
      { arabic: 'سَلَامٌ', latin: 'Sa-La-Mun' },
      { arabic: 'سِرٌّ', latin: 'Sir-Run' },
      { arabic: 'سُوقٌ', latin: 'Su-Qun' }
    ]
  },
  {
    id: 'syin',
    arabic: 'ش',
    name: 'Syin',
    latin: 'Sy',
    fathah: 'شَ',
    kasrah: 'شِ',
    dammah: 'شُ',
    fathahLatin: 'Sya',
    kasrahLatin: 'Syi',
    dammahLatin: 'Syu',
    makhraj: 'Tengah lidah diangkat mendekati langit-langit, angin menyebar',
    examples: [
      { arabic: 'شَمْسٌ', latin: 'Syam-Sun' },
      { arabic: 'شِفَاءٌ', latin: 'Syi-Fa-Un' },
      { arabic: 'شُكْرٌ', latin: 'Syu-Krun' }
    ]
  },
  {
    id: 'shad',
    arabic: 'ص',
    name: 'Shad',
    latin: 'Sh',
    fathah: 'صَ',
    kasrah: 'صِ',
    dammah: 'صُ',
    fathahLatin: 'Sha',
    kasrahLatin: 'Shi',
    dammahLatin: 'Shu',
    makhraj: 'Ujung lidah didekatkan ke gigi seri bawah dengan pangkal lidah terangkat (Tafkhim)',
    examples: [
      { arabic: 'صَبْرٌ', latin: 'Shab-Run' },
      { arabic: 'صِرَاطٌ', latin: 'Shi-Ra-Thun' },
      { arabic: 'صُبْحٌ', latin: 'Shub-Hun' }
    ]
  },
  {
    id: 'dhad',
    arabic: 'ض',
    name: 'Dhad',
    latin: 'Dh',
    fathah: 'ضَ',
    kasrah: 'ضِ',
    dammah: 'ضُ',
    fathahLatin: 'Dha',
    kasrahLatin: 'Dhi',
    dammahLatin: 'Dhu',
    makhraj: 'Tepi lidah menempel pada geraham atas kanan atau kiri',
    examples: [
      { arabic: 'ضَوْءٌ', latin: 'Dhaw-Un' },
      { arabic: 'ضِيَاءٌ', latin: 'Dhi-Ya-Un' },
      { arabic: 'ضُحَى', latin: 'Dhu-Ha' }
    ]
  },
  {
    id: 'tha',
    arabic: 'ط',
    name: 'Tha\'',
    latin: 'Th',
    fathah: 'طَ',
    kasrah: 'طِ',
    dammah: 'طُ',
    fathahLatin: 'Tha',
    kasrahLatin: 'Thi',
    dammahLatin: 'Thu',
    makhraj: 'Ujung lidah menempel pangkal gigi seri atas dengan suara tebal',
    examples: [
      { arabic: 'طَيِّبٌ', latin: 'Thay-Yi-Bun' },
      { arabic: 'طِينٌ', latin: 'Thi-Nun' },
      { arabic: 'طُهْرٌ', latin: 'Thuh-Run' }
    ]
  },
  {
    id: 'zha',
    arabic: 'ظ',
    name: 'Zha\'',
    latin: 'Zh',
    fathah: 'ظَ',
    kasrah: 'ظِ',
    dammah: 'ظُ',
    fathahLatin: 'Zha',
    kasrahLatin: 'Zhi',
    dammahLatin: 'Zhu',
    makhraj: 'Ujung lidah menempel ujung gigi seri atas dengan pangkal lidah terangkat',
    examples: [
      { arabic: 'ظَلَامٌ', latin: 'Zha-La-Mun' },
      { arabic: 'ظِلٌّ', latin: 'Zhil-Lun' },
      { arabic: 'ظُلْمَةٌ', latin: 'Zhul-Ma-Tun' }
    ]
  },
  {
    id: 'ain',
    arabic: 'ع',
    name: '\'Ain',
    latin: '\'',
    fathah: 'عَ',
    kasrah: 'عِ',
    dammah: 'عُ',
    fathahLatin: '\'A',
    kasrahLatin: '\'I',
    dammahLatin: '\'U',
    makhraj: 'Tengah tenggorokan (bersama huruf Ha\' pedas)',
    examples: [
      { arabic: 'عَلَمٌ', latin: '\'A-La-Mun' },
      { arabic: 'عِلْمٌ', latin: '\'Il-Mun' },
      { arabic: 'عُمُرٌ', latin: '\'U-Mu-Run' }
    ]
  },
  {
    id: 'ghain',
    arabic: 'غ',
    name: 'Ghain',
    latin: 'Gh',
    fathah: 'غَ',
    kasrah: 'غِ',
    dammah: 'غُ',
    fathahLatin: 'Gha',
    kasrahLatin: 'Ghi',
    dammahLatin: 'Ghu',
    makhraj: 'Ujung tenggorokan teratas (bersama Kha\')',
    examples: [
      { arabic: 'غَفُورٌ', latin: 'Gha-Fu-Run' },
      { arabic: 'غِنًى', latin: 'Ghi-Nan' },
      { arabic: 'غُرُوبٌ', latin: 'Ghu-Ru-Bun' }
    ]
  },
  {
    id: 'fa',
    arabic: 'ف',
    name: 'Fa\'',
    latin: 'F',
    fathah: 'فَ',
    kasrah: 'فِ',
    dammah: 'فُ',
    fathahLatin: 'Fa',
    kasrahLatin: 'Fi',
    dammahLatin: 'Fu',
    makhraj: 'Ujung gigi seri atas menempel bibir bawah bagian dalam',
    examples: [
      { arabic: 'فَجْرٌ', latin: 'Faj-Run' },
      { arabic: 'فِكْرٌ', latin: 'Fik-Run' },
      { arabic: 'فُرْقَانٌ', latin: 'Fur-Qa-Nun' }
    ]
  },
  {
    id: 'qaf',
    arabic: 'ق',
    name: 'Qaf',
    latin: 'Q',
    fathah: 'قَ',
    kasrah: 'قِ',
    dammah: 'قُ',
    fathahLatin: 'Qa',
    kasrahLatin: 'Qi',
    dammahLatin: 'Qu',
    makhraj: 'Pangkal lidah paling belakang menempel langit-langit lunak',
    examples: [
      { arabic: 'قَلَمٌ', latin: 'Qa-La-Mun' },
      { arabic: 'قِرَاءَةٌ', latin: 'Qi-Ra-A-Tun' },
      { arabic: 'قُرْآنٌ', latin: 'Qur-A-Nun' }
    ]
  },
  {
    id: 'kaf',
    arabic: 'ك',
    name: 'Kaf',
    latin: 'K',
    fathah: 'كَ',
    kasrah: 'كِ',
    dammah: 'كُ',
    fathahLatin: 'Ka',
    kasrahLatin: 'Ki',
    dammahLatin: 'Ku',
    makhraj: 'Pangkal lidah sedikit ke depan dari makhraj Qaf',
    examples: [
      { arabic: 'كِتَابٌ', latin: 'Ki-Ta-Bun' },
      { arabic: 'كَرِيمٌ', latin: 'Ka-Ri-Mun' },
      { arabic: 'كُوبٌ', latin: 'Ku-Bun' }
    ]
  },
  {
    id: 'lam',
    arabic: 'ل',
    name: 'Lam',
    latin: 'L',
    fathah: 'لَ',
    kasrah: 'لِ',
    dammah: 'لُ',
    fathahLatin: 'La',
    kasrahLatin: 'Li',
    dammahLatin: 'Lu',
    makhraj: 'Ujung tepi lidah menempel gusi gigi seri atas',
    examples: [
      { arabic: 'لَبَنٌ', latin: 'La-Ba-Nun' },
      { arabic: 'لِسَانٌ', latin: 'Li-Sa-Nun' },
      { arabic: 'لُؤْلُؤٌ', latin: 'Lu\'-Lu\'-Un' }
    ]
  },
  {
    id: 'mim',
    arabic: 'م',
    name: 'Mim',
    latin: 'M',
    fathah: 'مَ',
    kasrah: 'مِ',
    dammah: 'مُ',
    fathahLatin: 'Ma',
    kasrahLatin: 'Mi',
    dammahLatin: 'Mu',
    makhraj: 'Rapatnya kedua bibir disertai dengung dari hidung (Ghunnah)',
    examples: [
      { arabic: 'مَاءٌ', latin: 'Ma-Un' },
      { arabic: 'مِلْكٌ', latin: 'Mil-Kun' },
      { arabic: 'مُلْكٌ', latin: 'Mul-Kun' }
    ]
  },
  {
    id: 'nun',
    arabic: 'ن',
    name: 'Nun',
    latin: 'N',
    fathah: 'نَ',
    kasrah: 'نِ',
    dammah: 'نُ',
    fathahLatin: 'Na',
    kasrahLatin: 'Ni',
    dammahLatin: 'Nu',
    makhraj: 'Ujung lidah menempel gusi atas dengan dengung hidung',
    examples: [
      { arabic: 'نُورٌ', latin: 'Nu-Run' },
      { arabic: 'نِعْمَةٌ', latin: 'Ni\'-Ma-Tun' },
      { arabic: 'نَارٌ', latin: 'Na-Run' }
    ]
  },
  {
    id: 'wawu',
    arabic: 'و',
    name: 'Wawu',
    latin: 'W',
    fathah: 'وَ',
    kasrah: 'وِ',
    dammah: 'وُ',
    fathahLatin: 'Wa',
    kasrahLatin: 'Wi',
    dammahLatin: 'Wu',
    makhraj: 'Membulatkan kedua bibir dengan sedikit celah udara',
    examples: [
      { arabic: 'وَرْدٌ', latin: 'War-Dun' },
      { arabic: 'وِلَايَةٌ', latin: 'Wi-La-Ya-Tun' },
      { arabic: 'وُضُوءٌ', latin: 'Wu-Dhu-Un' }
    ]
  },
  {
    id: 'ha_besar',
    arabic: 'هـ',
    name: 'Ha\' (Besar)',
    latin: 'H',
    fathah: 'هَ',
    kasrah: 'هِ',
    dammah: 'هُ',
    fathahLatin: 'Ha',
    kasrahLatin: 'Hi',
    dammahLatin: 'Hu',
    makhraj: 'Pangkal tenggorokan paling dalam (Aqshal Halq)',
    examples: [
      { arabic: 'هَدِيَّةٌ', latin: 'Ha-Di-Ya-Tun' },
      { arabic: 'هِدَايَةٌ', latin: 'Hi-Da-Ya-Tun' },
      { arabic: 'هُدًى', latin: 'Hu-Dan' }
    ]
  },
  {
    id: 'ya',
    arabic: 'ي',
    name: 'Ya\'',
    latin: 'Y',
    fathah: 'يَ',
    kasrah: 'يِ',
    dammah: 'يُ',
    fathahLatin: 'Ya',
    kasrahLatin: 'Yi',
    dammahLatin: 'Yu',
    makhraj: 'Tengah lidah diangkat mendekati langit-langit tanpa rapat',
    examples: [
      { arabic: 'يَوْمٌ', latin: 'Yaw-Mun' },
      { arabic: 'يَسِيرٌ', latin: 'Ya-Si-Run' },
      { arabic: 'يُنَابُ', latin: 'Yu-Na-Bu' }
    ]
  }
];

export const IQRA_LEVELS: IqraLevel[] = [
  {
    jilid: 1,
    title: 'Iqra 1: Huruf Hijaiyah Berharakat Fathah',
    description: 'Mengenal huruf Hijaiyah tunggal dari Alif sampai Ya dengan harakat Fathah (bunyi "A") secara langsung, tegas, dan pendek tanpa diseret.',
    topics: ['Mengenal bentuk huruf tunggal (Alif - Ya)', 'Harakat Fathah (bunyi A)', 'Membaca secara langsung tanpa dieja'],
    pages: [
      {
        pageNumber: 1,
        title: 'Halaman 1: Huruf Alif (أَ) & Ba (بَ)',
        description: 'Bandingkan bunyi A dan Ba. Bacalah pendek dan jelas!',
        items: [
          { arabic: 'أَ - بَ', latin: 'A - Ba', note: 'Alif & Ba' },
          { arabic: 'أَ - بَ - أَ', latin: 'A - Ba - A', note: 'Variasi 3 huruf' },
          { arabic: 'بَ - أَ - بَ', latin: 'Ba - A - Ba', note: 'Latihan reflek' },
          { arabic: 'أَ - أَ - بَ', latin: 'A - A - Ba', note: 'Pendek tegas' },
          { arabic: 'بَ - بَ - أَ', latin: 'Ba - Ba - A', note: 'Latihan artikulasi' },
          { arabic: 'أَ - بَ - أ - بَ', latin: 'A - Ba - A - Ba', note: 'Pengulangan lancar' }
        ]
      },
      {
        pageNumber: 2,
        title: 'Halaman 2: Huruf Ta (تَ) & Tsa (ثَ)',
        description: 'Ta dibaca dengan ujung lidah di gigi atas. Tsa dikeluarkan sedikit ujung lidah.',
        items: [
          { arabic: 'تَ - ثَ', latin: 'Ta - Tsa', note: 'Makhraj gigi & bibir' },
          { arabic: 'أَ - بَ - تَ', latin: 'A - Ba - Ta', note: 'A - Ba - Ta' },
          { arabic: 'بَ - تَ - ثَ', latin: 'Ba - Ta - Tsa', note: 'Latihan Tsa' },
          { arabic: 'ثَ - أ - تَ', latin: 'Tsa - A - Ta', note: 'Kombinasi acak' },
          { arabic: 'تَ - ثَ - بَ', latin: 'Ta - Tsa - Ba', note: 'Membedakan titik 2 dan 3' },
          { arabic: 'أَ - تَ - ثَ', latin: 'A - Ta - Tsa', note: 'Pelafalan bersih' }
        ]
      },
      {
        pageNumber: 3,
        title: 'Halaman 3: Huruf Jim (جَ), Ha (حَ), & Kha (خَ)',
        description: 'Perhatikan titik Jim di dalam, Ha bersih tanpa titik, Kha titik di atas.',
        items: [
          { arabic: 'جَ - حَ - خَ', latin: 'Ja - Ha - Kha', note: 'Jim, Ha pedas, Kha' },
          { arabic: 'أَ - بَ - جَ', latin: 'A - Ba - Ja', note: 'Latihan Jim' },
          { arabic: 'تَ - ثَ - حَ', latin: 'Ta - Tsa - Ha', note: 'Ha di tengah tenggorokan' },
          { arabic: 'جَ - حَ - خَ', latin: 'Ja - Ha - Kha', note: 'Tiga huruf sekerabat' },
          { arabic: 'خَ - جَ - حَ', latin: 'Kha - Ja - Ha', note: 'Kha ujung tenggorokan' },
          { arabic: 'بَ - حَ - خَ', latin: 'Ba - Ha - Kha', note: 'Pembedaan cepat' }
        ]
      },
      {
        pageNumber: 4,
        title: 'Halaman 4: Huruf Dal (دَ), Dzal (ذَ), Ra (رَ), & Zai (زَ)',
        description: 'Dal dan Dzal mirip bentuknya. Ra dan Zai tajam bergetar.',
        items: [
          { arabic: 'دَ - ذَ - رَ - زَ', latin: 'Da - Dza - Ra - Za', note: 'Dal, Dzal, Ra, Zai' },
          { arabic: 'دَ - ذَ - دَ', latin: 'Da - Dza - Da', note: 'Ujung lidah disentuhkan' },
          { arabic: 'رَ - زَ - رَ', latin: 'Ra - Za - Ra', note: 'Ra tebal, Zai desis' },
          { arabic: 'جَ - دَ - ذَ', latin: 'Ja - Da - Dza', note: 'Latihan gabungan' },
          { arabic: 'حَ - رَ - زَ', latin: 'Ha - Ra - Za', note: 'Penguatan artikulasi' },
          { arabic: 'خَ - دَ - زَ', latin: 'Kha - Da - Za', note: 'Pembedaan bentuk' }
        ]
      },
      {
        pageNumber: 5,
        title: 'Halaman 5: Sin (سَ), Syin (شَ), Shad (صَ), & Dhad (ضَ)',
        description: 'Sin berdesis lembut, Syin angin menyebar, Shad & Dhad tebal (Tafkhim).',
        items: [
          { arabic: 'سَ - شَ - صَ - ضَ', latin: 'Sa - Sya - Sha - Dha', note: 'Grup huruf S' },
          { arabic: 'سَ - شَ - سَ', latin: 'Sa - Sya - Sa', note: 'Sin vs Syin' },
          { arabic: 'صَ - ضَ - صَ', latin: 'Sha - Dha - Sha', note: 'Shad & Dhad tebal' },
          { arabic: 'دَ - سَ - شَ', latin: 'Da - Sa - Sya', note: 'Kombinasi bacaan' },
          { arabic: 'رَ - صَ - ضَ', latin: 'Ra - Sha - Dha', note: 'Latihan suara tebal' },
          { arabic: 'سَ - صَ - ضَ', latin: 'Sa - Sha - Dha', note: 'Beda desis biasa dan tebal' }
        ]
      },
      {
        pageNumber: 6,
        title: 'Halaman 6: Tha (طَ), Zha (ظَ), \'Ain (عَ), & Ghain (غَ)',
        description: 'Tha & Zha lidah terangkat tebal. \'Ain dari tengah tenggorokan, Ghain berbunyi gho.',
        items: [
          { arabic: 'طَ - ظَ - عَ - غَ', latin: 'Tha - Zha - \'A - Gha', note: 'Tha, Zha, \'Ain, Ghain' },
          { arabic: 'طَ - ظَ - طَ', latin: 'Tha - Zha - Tha', note: 'Suara tebal bulat' },
          { arabic: 'عَ - غَ - عَ', latin: '\'A - Gha - \'A', note: '\'Ain vs Ghain' },
          { arabic: 'صَ - طَ - ظَ', latin: 'Sha - Tha - Zha', note: 'Tiga huruf tebal' },
          { arabic: 'حَ - عَ - غَ', latin: 'Ha - \'A - Gha', note: 'Makhraj tenggorokan' },
          { arabic: 'طَ - عَ - غَ', latin: 'Tha - \'A - Gha', note: 'Kelancaran bacaan' }
        ]
      },
      {
        pageNumber: 7,
        title: 'Halaman 7: Fa (فَ), Qaf (قَ), Kaf (كَ), & Lam (لَ)',
        description: 'Fa gigit bibir bawah. Qaf di pangkal lidah dalam, Kaf di depan Qaf.',
        items: [
          { arabic: 'فَ - قَ - كَ - لَ', latin: 'Fa - Qa - Ka - La', note: 'Fa, Qaf, Kaf, Lam' },
          { arabic: 'فَ - قَ - فَ', latin: 'Fa - Qa - Fa', note: 'Fa vs Qaf' },
          { arabic: 'قَ - كَ - لَ', latin: 'Qa - Ka - La', note: 'Qaf tebal, Kaf halus' },
          { arabic: 'طَ - فَ - قَ', latin: 'Tha - Fa - Qa', note: 'Latihan pengucapan' },
          { arabic: 'كَ - لَ - مَ', latin: 'Ka - La - Ma', note: 'Persiapan kata bersambung' },
          { arabic: 'فَ - كَ - لَ', latin: 'Fa - Ka - La', note: 'Melatih kelincahan bibir' }
        ]
      },
      {
        pageNumber: 8,
        title: 'Halaman 8: Mim (مَ), Nun (نَ), Wawu (وَ), Ha (هَـ), & Ya (يَ)',
        description: 'Huruf-huruf penutup Hijaiyah. Perhatikan beda Ha kecil (حَ) dan Ha besar (هَـ).',
        items: [
          { arabic: 'مَ - نَ - وَ - هَـ - يَ', latin: 'Ma - Na - Wa - Ha - Ya', note: 'Mim, Nun, Wawu, Ha, Ya' },
          { arabic: 'مَ - نَ - مَ', latin: 'Ma - Na - Ma', note: 'Dua bibir & hidung' },
          { arabic: 'وَ - هَـ - يَ', latin: 'Wa - Ha - Ya', note: 'Wawu bulatkan bibir' },
          { arabic: 'حَ - هَـ - حَ', latin: 'Ha - Ha - Ha', note: 'Beda Ha pedas & Ha besar' },
          { arabic: 'نَ - وَ - يَ', latin: 'Na - Wa - Ya', note: 'Latihan huruf akhir' },
          { arabic: 'مَ - هَـ - يَ', latin: 'Ma - Ha - Ya', note: 'Artikulasi sempurna' }
        ]
      },
      {
        pageNumber: 9,
        title: 'Halaman 9: Evaluasi Gabungan Iqra 1 (Alif - Ya)',
        description: 'Uji kemampuan membaca seluruh 29 huruf Hijaiyah secara acak dan langsung.',
        items: [
          { arabic: 'أَ بَ تَ ثَ جَ حَ خَ', latin: 'A Ba Ta Tsa Ja Ha Kha', note: 'Baris 1' },
          { arabic: 'دَ ذَ رَ زَ سَ شَ صَ', latin: 'Da Dza Ra Za Sa Sya Sha', note: 'Baris 2' },
          { arabic: 'ضَ طَ ظَ عَ غَ فَ قَ', latin: 'Dha Tha Zha \'A Gha Fa Qa', note: 'Baris 3' },
          { arabic: 'كَ لَ مَ نَ وَ هَـ يَ', latin: 'Ka La Ma Na Wa Ha Ya', note: 'Baris 4' },
          { arabic: 'قَ كَ لَ مَ نَ وَ هَـ', latin: 'Qa Ka La Ma Na Wa Ha', note: 'Baris 5' },
          { arabic: 'أَ جَ خَ زَ صَ ظَ يَ', latin: 'A Ja Kha Za Sha Zha Ya', note: 'Uji Acak Lengkap' }
        ]
      }
    ]
  },
  {
    jilid: 2,
    title: 'Iqra 2: Huruf Sambung & Harakat Kasrah/Dammah',
    description: 'Mengenal perubahan bentuk huruf saat disambung (awal, tengah, akhir) dan membaca harakat Kasrah (I) & Dammah (U).',
    topics: ['Bentuk huruf awal, tengah, dan akhir', 'Harakat Kasrah (I) dan Dammah (U)', 'Membaca kata 3 huruf bersambung'],
    pages: [
      {
        pageNumber: 1,
        title: 'Halaman 1: Bentuk Huruf Sambung Awal & Akhir',
        description: 'Perhatikan bagaimana huruf Ba, Ta, Tsa, Jim, Kha memotong ekornya saat berada di awal kata.',
        items: [
          { arabic: 'بَتَكَ', latin: 'Ba-Ta-Ka', note: 'Ba & Ta di awal/tengah' },
          { arabic: 'كَتَبَ', latin: 'Ka-Ta-Ba', note: 'Ba di akhir kata' },
          { arabic: 'جَلَسَ', latin: 'Ja-La-Sa', note: 'Jim di awal kata' },
          { arabic: 'خَلَقَ', latin: 'Kha-La-Qa', note: 'Kha di awal kata' },
          { arabic: 'نَصَرَ', latin: 'Na-Sha-Ra', note: 'Nun & Shad di awal/tengah' },
          { arabic: 'بَعَثَ', latin: 'Ba-\'A-Tsa', note: '\'Ain di tengah kata' }
        ]
      },
      {
        pageNumber: 2,
        title: 'Halaman 2: Harakat Kasrah (Bunyi "I")',
        description: 'Garis di bawah huruf dibaca "I". Bacalah dengan bibir ditarik ke bawah sedikit.',
        items: [
          { arabic: 'إِ - بِ - تِ - ثِ', latin: 'I - Bi - Ti - Tsi', note: 'Alif, Ba, Ta, Tsa Kasrah' },
          { arabic: 'جِ - حِ - خِ - دِ', latin: 'Ji - Hi - Khi - Di', note: 'Jim, Ha, Kha, Dal Kasrah' },
          { arabic: 'شَهِدَ', latin: 'Sya-Hi-Da', note: 'Contoh A - I - A' },
          { arabic: 'عَلِمَ', latin: '\'A-Li-Ma', note: 'Contoh \'Ain - Lam - Mim' },
          { arabic: 'رَحِمَ', latin: 'Ra-Hi-Ma', note: 'Contoh Ra - Ha - Mim' },
          { arabic: 'فَهِمَ', latin: 'Fa-Hi-Ma', note: 'Contoh Fa - Ha - Mim' }
        ]
      },
      {
        pageNumber: 3,
        title: 'Halaman 3: Harakat Dammah (Bunyi "U")',
        description: 'Tanda wau kecil di atas huruf dibaca "U". Monyongkan kedua bibir!',
        items: [
          { arabic: 'أُ - بُ - تُ - ثُ', latin: 'U - Bu - Tu - Tsu', note: 'Alif, Ba, Ta, Tsa Dammah' },
          { arabic: 'جُ - حُ - خُ - دُ', latin: 'Ju - Hu - Khu - Du', note: 'Jim, Ha, Kha, Dal Dammah' },
          { arabic: 'كُتِبَ', latin: 'Ku-Ti-Ba', note: 'Contoh U - I - A' },
          { arabic: 'رُزِقَ', latin: 'Ru-Zi-Qa', note: 'Contoh Ra - Zai - Qaf' },
          { arabic: 'حُمِدَ', latin: 'Hu-Mi-Da', note: 'Contoh Ha - Mim - Dal' },
          { arabic: 'قُرِئَ', latin: 'Qu-Ri-A', note: 'Contoh Qaf - Ra - Alif' }
        ]
      },
      {
        pageNumber: 4,
        title: 'Halaman 4: Kombinasi A - I - U dalam Kata',
        description: 'Latihan berpindah cepat antar vokal A, I, dan U dalam satu kata.',
        items: [
          { arabic: 'سُئِلَ', latin: 'Su-I-La', note: 'Su - I - La' },
          { arabic: 'فُتِحَ', latin: 'Fu-Ti-Ha', note: 'Fu - Ti - Ha' },
          { arabic: 'وُجِدَ', latin: 'Wu-Ji-Da', note: 'Wu - Ji - Da' },
          { arabic: 'عُصِرَ', latin: '\'U-Shi-Ra', note: '\'U - Shi - Ra' },
          { arabic: 'طُبِعَ', latin: 'Thu-Bi-\'A', note: 'Thu - Bi - \'A' },
          { arabic: 'نُصِرَ', latin: 'Nu-Shi-Ra', note: 'Nu - Shi - Ra' }
        ]
      },
      {
        pageNumber: 5,
        title: 'Halaman 5: Kata 3 Huruf Bersambung & Kelancaran',
        description: 'Membaca secara langsung tanpa mengulang-ulang.',
        items: [
          { arabic: 'سَجَدَ', latin: 'Sa-Ja-Da', note: 'Sa - Ja - Da' },
          { arabic: 'ظَلَمَ', latin: 'Zha-La-Ma', note: 'Zha - La - Ma' },
          { arabic: 'غَفَرَ', latin: 'Gha-Fa-Ra', note: 'Gha - Fa - Ra' },
          { arabic: 'قَرَأَ', latin: 'Qa-Ra-A', note: 'Qa - Ra - A' },
          { arabic: 'كَبُرَ', latin: 'Ka-Bu-Ra', note: 'Ka - Bu - Ra' },
          { arabic: 'لَعِبَ', latin: 'La-\'I-Ba', note: 'La - \'I - Ba' }
        ]
      },
      {
        pageNumber: 6,
        title: 'Halaman 6: Evaluasi Kelancaran Iqra 2',
        description: 'Membaca baris kata bersambung variasi harakat dengan tempo stabil.',
        items: [
          { arabic: 'كَتَبَ - عَمِلَ - حَسُنَ', latin: 'Ka-Ta-Ba | \'A-Mi-La | Ha-Su-Na', note: 'Baris 1' },
          { arabic: 'ذَكَرَ - شَكَرَ - نَظَرَ', latin: 'Dza-Ka-Ra | Sya-Ka-Ra | Na-Zha-Ra', note: 'Baris 2' },
          { arabic: 'بَلَغَ - صَبَرَ - طَبَعَ', latin: 'Ba-La-Gha | Sha-Ba-Ra | Thu-Bi-\'A', note: 'Baris 3' },
          { arabic: 'مَلَكِ - كَسَبَ - عَدَلَ', latin: 'Ma-La-Ki | Ka-Sa-Ba | \'A-Da-La', note: 'Baris 4' },
          { arabic: 'جُعِلَ - خُلِقَ - رُفِعَ', latin: 'Ju-\'I-La | Khu-Li-Qa | Ru-Fi-\'A', note: 'Baris 5' }
        ]
      }
    ]
  },
  {
    jilid: 3,
    title: 'Iqra 3: Mad Thabi\'i & Harakat Tanwin',
    description: 'Mempelajari bacaan panjang (Mad Thabi\'i 2 harakat) dan bunyi Tanwin (An, In, Un).',
    topics: ['Mad Thabi\'i Alif, Ya Sukun, & Wawu Sukun (2 Harakat)', 'Tanwin (Fathatain, Kasratain, Dammatain)', 'Membedakan bacaan pendek vs panjang'],
    pages: [
      {
        pageNumber: 1,
        title: 'Halaman 1: Mad Thabi\'i Alif (Panjang 2 Harakat)',
        description: 'Fathah diiringi Alif dibaca panjang 2 harakat (2 ketukan/ayunan).',
        items: [
          { arabic: 'بَا - تَا - ثَا - جَا', latin: 'Baa - Taa - Tsaa - Jaa', note: 'Panjang 2 ketukan' },
          { arabic: 'قَالَ - كَانَ - طَالَ', latin: 'Qaa-La | Kaa-Na | Thaa-La', note: 'Huruf pertama panjang' },
          { arabic: 'ذَهَبَا - سَجَدَا - عَمِلَا', latin: 'Dza-ha-baa | Sa-ja-daa | \'A-mi-laa', note: 'Huruf akhir panjang' },
          { arabic: 'جَاهَدَ - قَاتَلَ - صَابَرَ', latin: 'Jaa-ha-da | Qaa-ta-la | Shaa-ba-ra', note: 'Awal panjang, akhir pendek' },
          { arabic: 'سَلَامٌ - كَلَامٌ - جَلَالٌ', latin: 'Sa-laa-mun | Ka-laa-mun | Ja-laa-lun', note: 'Tengah panjang' }
        ]
      },
      {
        pageNumber: 2,
        title: 'Halaman 2: Mad Thabi\'i Ya Sukun (Panjang 2 Harakat)',
        description: 'Kasrah diiringi Ya sukun (يْ) dibaca panjang "II" 2 harakat.',
        items: [
          { arabic: 'بِي - تِي - ثِي - جِي', latin: 'Bii - Tii - Tsii - Jii', note: 'Bunyi panjang II' },
          { arabic: 'قِيلَ - دِينِي - فِيهَا', latin: 'Qii-La | Dii-Nii | Fii-Haa', note: 'Panjang 2 harakat' },
          { arabic: 'يَمِينِي - كِتَابِي - حِسَابِي', latin: 'Ya-mii-nii | Ki-taa-bii | Hi-saa-bii', note: 'Kombinasi Alif & Ya' },
          { arabic: 'سَمِيعٌ - بَصِيرٌ - عَلِيمٌ', latin: 'Sa-mii-\'un | Ba-shii-run | \'A-lii-mun', note: 'Pola nama-nama Allah' },
          { arabic: 'قَرِيبٌ - مُجِيبٌ - حَفِيظٌ', latin: 'Qa-rii-bun | Mu-jii-bun | Ha-fii-zhun', note: 'Latihan Mad Ya' }
        ]
      },
      {
        pageNumber: 3,
        title: 'Halaman 3: Mad Thabi\'i Wawu Sukun (Panjang 2 Harakat)',
        description: 'Dammah diiringi Wawu sukun (وْ) dibaca panjang "UU" 2 harakat.',
        items: [
          { arabic: 'بُو - تُو - ثُو - جُو', latin: 'Buu - Tuu - Tsuu - Juu', note: 'Bunyi panjang UU' },
          { arabic: 'يَقُولُ - تُوبُوا - يَعْلَمُونَ', latin: 'Ya-quu-lu | Tuu-buu | Ya-\'la-muu-na', note: 'Panjang 2 harakat' },
          { arabic: 'يَعْبُدُونَ - يَسْجُدُونَ - يَنصُرُونَ', latin: 'Ya-\'bu-duu-na | Yas-ju-duu-na | Yan-shu-ruu-na', note: 'Bentuk kata kerja' },
          { arabic: 'غَفُورٌ - شَكُورٌ - صَبُورٌ', latin: 'Gha-fuu-run | Sya-kuu-run | Sha-buu-run', note: 'Mad Wawu pada kata sifat' },
          { arabic: 'مَلَكُوتُ - سَلَامُونَ - قَالُوا', latin: 'Ma-la-kuu-tu | Sa-laa-muu-na | Qaa-luu', note: 'Variasi gabungan' }
        ]
      },
      {
        pageNumber: 4,
        title: 'Halaman 4: Harakat Tanwin Fathah (Fathatain - "AN")',
        description: 'Dua garis di atas dibaca bunyi "AN". Biasanya disertai Alif bantu.',
        items: [
          { arabic: 'بًا - تً - ثً - جً', latin: 'Ban - Tan - Tsan - Jan', note: 'Bunyi AN' },
          { arabic: 'كِتَابًا - سَلَامًا - رَحْمَةً', latin: 'Ki-taa-ban | Sa-laa-man | Rah-ma-tan', note: 'Tanwin AN di akhir kata' },
          { arabic: 'عَلِيمًا - حَكِيمًا - غَفُورًا', latin: '\'A-lii-man | Ha-kii-man | Gha-fuu-ran', note: 'Mad + Tanwin AN' },
          { arabic: 'صِرَاطًا - مُسْتَقِيمًا - حَسَنًا', latin: 'Shi-raa-than | Mus-ta-qii-man | Ha-sa-nan', note: 'Latihan kelancaran' },
          { arabic: 'عَذَابًا - أَلِيمًا - شَدِيدًا', latin: '\'A-dzaa-ban | A-lii-man | Sya-dii-dan', note: 'Pengulangan Tanwin AN' }
        ]
      },
      {
        pageNumber: 5,
        title: 'Halaman 5: Tanwin Kasrah ("IN") & Dammah ("UN")',
        description: 'Kasratain dibaca "IN", Dammatain dibaca "UN".',
        items: [
          { arabic: 'بٍ - بٌ | تٍ - تٌ', latin: 'Bin - Bun | Tin - Tun', note: 'Tanwin IN & UN' },
          { arabic: 'كِتَابٍ - كِتَابٌ', latin: 'Ki-taa-bin | Ki-taa-bun', note: 'Perbandingan IN & UN' },
          { arabic: 'عُمُرٍ - نُورٌ - حَكِيمٌ', latin: '\'U-mu-rin | Nuu-run | Ha-kii-mun', note: 'Latihan Tanwin' },
          { arabic: 'جَنَّاتٍ - عُيُونٍ - سُرُرٍ', latin: 'Jan-naa-tin | \'U-yuu-nin | Su-ru-rin', note: 'Kasratain IN' },
          { arabic: 'فَوْزٌ - عَظِيمٌ - قَرِيبٌ', latin: 'Faw-zun | \'A-zhii-mun | Qa-rii-bun', note: 'Dammatain UN' }
        ]
      },
      {
        pageNumber: 6,
        title: 'Halaman 6: Evaluasi Panjang-Pendek & Tanwin',
        description: 'Disiplin membedakan mana yang 1 harakat (pendek) dan mana yang 2 harakat (panjang).',
        items: [
          { arabic: 'قَالَ لِي - كَانَ لَهُ', latin: 'Qaa-la lii | Kaa-na la-hu', note: 'Awas jangan tertukar!' },
          { arabic: 'عَلِيمٌ حَكِيمٌ', latin: '\'A-lii-mun Ha-kii-mun', note: 'Dua kata bersambung' },
          { arabic: 'غَفُورٌ رَحِيمٌ', latin: 'Gha-fuu-run Ra-hii-mun', note: 'Penggabungan Mad + Tanwin' },
          { arabic: 'فِي جَنَّاتٍ وَعُيُونٍ', latin: 'Fii jan-naa-tin wa \'u-yuu-nin', note: 'Frasa pendek Al-Qur\'an' },
          { arabic: 'صِرَاطًا مُسْتَقِيمًا', latin: 'Shi-raa-than Mus-ta-qii-man', note: 'Membaca secara fasih' }
        ]
      }
    ]
  },
  {
    jilid: 4,
    title: 'Iqra 4: Sukun (Mati) & Qalqalah',
    description: 'Mengenal huruf mati (Sukun), cara mematikan bunyi huruf, dan hukum pantulan Qalqalah.',
    topics: ['Harakat Sukun (Huruf Mati)', 'Huruf Qalqalah (ب, ج, د, ط, ق)', 'Alif Lam Qamariyah & Bunyi Lin'],
    pages: [
      {
        pageNumber: 1,
        title: 'Halaman 1: Harakat Sukun (Huruf Mati)',
        description: 'Sukun (ْ) mematikan huruf. Contoh: Alif Fathah + Ba Sukun = AB.',
        items: [
          { arabic: 'أَبْ - أَتْ - أَثْ - أَجْ', latin: 'Ab - At - Ats - Aj', note: 'Sukun pada Alif' },
          { arabic: 'أَحْ - أَخْ - أَدْ - أَذْ', latin: 'Ah - Akh - Ad - Adz', note: 'Mati di tenggorokan' },
          { arabic: 'أَرْ - أَزْ - أَسْ - أَشْ', latin: 'Ar - Az - As - Asy', note: 'Mati berdesis' },
          { arabic: 'أَلَمْ - أَنْعَمْتَ - كَيْدَهُمْ', latin: 'A-lam | An-\'am-ta | Kay-da-hum', note: 'Kata dengan Sukun' },
          { arabic: 'يَكْتُبُونَ - يَعْلَمُونَ', latin: 'Yak-tu-buu-na | Ya-\'la-muu-na', note: 'Sukun di tengah kata' }
        ]
      },
      {
        pageNumber: 2,
        title: 'Halaman 2: Hukum Qalqalah (Pantulan Bunyi)',
        description: 'Lima huruf Qalqalah (ب, ج, د, ط, ق) dipantulkan suaranya saat mati/sukun.',
        items: [
          { arabic: 'أَبْ - أَجْ - أَدْ - أَطْ - أَقْ', latin: 'Ab - Aj - Ad - Ath - Aq', note: 'Pantulan Qalqalah' },
          { arabic: 'أَقْسَمَ - يَجْعَلُونَ - يَدْخُلُونَ', latin: 'Aq-sa-ma | Yaj-\'a-luu-na | Yad-khu-luu-na', note: 'Contoh Qalqalah Sugra' },
          { arabic: 'أَطْعَمَهُمْ - إِبْرَاهِيمُ', latin: 'Ath-\'a-ma-hum | Ib-raa-hii-mu', note: 'Pantulan Thah & Ba' },
          { arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ (أَحَدْ)', latin: 'Qul hu-wal-laa-hu a-had', note: 'Qalqalah Kubra di akhir' },
          { arabic: 'مِنْ شَرِّ مَا خَلَقَ (خَلَقْ)', latin: 'Min syar-ri maa kha-laq', note: 'Qalqalah Kubra Qaf' }
        ]
      },
      {
        pageNumber: 3,
        title: 'Halaman 3: Sukun Mim & Nun (Suara Jelas / Izhar)',
        description: 'Mim sukun dan Nun sukun tanpa dengung dibaca jelas dan tegas.',
        items: [
          { arabic: 'أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ', latin: 'A-lam nasy-rah la-ka shad-rak', note: 'Izhar Syafawi' },
          { arabic: 'أَنْعَمْتَ عَلَيْهِمْ', latin: 'An-\'am-ta \'a-lay-him', note: 'Nun & Mim Sukun jelas' },
          { arabic: 'تَرْمِيهِمْ بِحِجَارَةٍ', latin: 'Tar-mii-him bi-hi-jaa-ra-tin', note: 'Latihan Mim Sukun' },
          { arabic: 'فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ', latin: 'Fa-la-hum aj-run ghay-ru mam-nuun', note: 'Latihan Sukun gabungan' }
        ]
      },
      {
        pageNumber: 4,
        title: 'Halaman 4: Sukun Lam & Alif Lam Qamariyah',
        description: 'Alif Lam Qamariyah dibaca jelas bunyi "AL-".',
        items: [
          { arabic: 'الْحَمْدُ - الْفَلَقِ - الْبَلَدِ', latin: 'Al-ham-du | Al-fa-laq | Al-ba-lad', note: 'Alif Lam Qamariyah' },
          { arabic: 'الْقَارِعَةُ - الْوَسْوَاسِ - الْجَنَّةِ', latin: 'Al-qaa-ri-\'a-tu | Al-was-waa-si | Al-jan-nah', note: 'Jelas bunyi L' },
          { arabic: 'وَالْفَجْرِ - وَلَيَالٍ عَشْرٍ', latin: 'Wal-fajr | Wa-la-yaa-lin \'asyr', note: 'Wawu + Alif Lam' },
          { arabic: 'فِي الْأَرْضِ - مِنَ الْجِنَّةِ', latin: 'Fil-ar-dhi | Mi-nal-jin-nah', note: 'Kata depan + Al' }
        ]
      },
      {
        pageNumber: 5,
        title: 'Halaman 5: Huruf Lin / Levis (Ayn & Awn)',
        description: 'Fathah bertemu Ya sukun (AY) atau Wawu sukun (AW) dibaca lunak/lembut.',
        items: [
          { arabic: 'خَوْفٍ - صَيْفٍ - غَيْبٌ', latin: 'Khawf - Shayf - Ghayb', note: 'Bunyi AW & AY' },
          { arabic: 'يَوْمِ - بَيْتٍ - كَيْفَ - لَيْلٍ', latin: 'Yawm | Bayt | Kay-fa | Layl', note: 'Lunak lembut' },
          { arabic: 'أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ', latin: 'A-ra-\'ay-tal-la-dzii yu-ka-dzi-bu bid-diin', note: 'Contoh dalam ayat' },
          { arabic: 'فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ', latin: 'Fal-ya-\'bu-duu rab-ba haa-dzal-bayt', note: 'Sukun di akhir kata' }
        ]
      },
      {
        pageNumber: 6,
        title: 'Halaman 6: Evaluasi Membaca Sukun & Qalqalah',
        description: 'Praktik membaca potongan ayat Al-Qur\'an berharakat sukun dengan fasih.',
        items: [
          { arabic: 'وَالْعَادِيَاتِ ضَبْحًا', latin: 'Wal-\'aa-di-yaa-ti dhab-han', note: 'Qalqalah Ba' },
          { arabic: 'فَالْمُورِيَاتِ قَدْحًا', latin: 'Fal-muu-ri-yaa-ti qad-han', note: 'Qalqalah Dal' },
          { arabic: 'فَالْمُغِيرَاتِ صُبْحًا', latin: 'Fal-mu-ghii-raa-ti shub-han', note: 'Qalqalah Ba' },
          { arabic: 'كَلَّا سَوْفَ تَعْلَمُونَ', latin: 'Kal-laa saw-fa ta-\'la-muu-na', note: 'Ayat lengkap' },
          { arabic: 'ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ', latin: 'Tsum-ma kal-laa saw-fa ta-\'la-muu-na', note: 'Kelancaran makhraj' }
        ]
      }
    ]
  },
  {
    jilid: 5,
    title: 'Iqra 5: Tasydid (Sabdu), Alif Lam, & Idgham',
    description: 'Mempelajari penekanan huruf (Tasydid), Ghunnah wajib, Alif Lam Syamsiyah, dan hukum Idgham.',
    topics: ['Tasydid / Sabdu (تَشْدِيد)', 'Ghunnah Wajib (Nun & Mim Tasydid)', 'Alif Lam Syamsiyah & Hukum Idgham'],
    pages: [
      {
        pageNumber: 1,
        title: 'Halaman 1: Mengenal Tasydid / Sabdu',
        description: 'Tasydid (ّ) menekan dan menahan ucapan huruf seolah-olah ganda.',
        items: [
          { arabic: 'رَبَّ - عَبَّ - صَدَّ - حَقَّ', latin: 'Rab-ba | \'Ab-ba | Shad-da | Haq-qa', note: 'Penekanan ganda' },
          { arabic: 'كَلَّا - عِلِّيِّينَ - قَدَّرَ', latin: 'Kal-laa | \'Il-liy-yii-na | Qad-da-ra', note: 'Tasydid di tengah' },
          { arabic: 'عَلَّمَ - سَبَّحَ - كَذَّبَ', latin: '\'Al-la-ma | Sab-ba-ha | Kadz-dza-ba', note: 'Penekanan mantap' },
          { arabic: 'يَدُعُّ الْيَتِيمَ', latin: 'Ya-du\'-\'ul-ya-tiim', note: 'Tasydid \'Ain' },
          { arabic: 'فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ', latin: 'Fa-dzaa-li-kal-la-dzii ya-du\'-\'ul-ya-tiim', note: 'Ayat pendek' }
        ]
      },
      {
        pageNumber: 2,
        title: 'Halaman 2: Ghunnah Wajib (Nun & Mim Tasydid)',
        description: 'Nun (نَّ) atau Mim (مَّ) bertasydid WAJIB didengungkan selama 2 harakat.',
        items: [
          { arabic: 'إِنَّ - أَنَّ - ثُمَّ - لَمَّا', latin: 'In-na | An-na | Tsum-ma | Lam-maa', note: 'Dengung 2 harakat' },
          { arabic: 'عَمَّ يَتَسَاءَلُونَ', latin: '\'Am-ma ya-ta-saa-a-luun', note: 'Mim bertasydid' },
          { arabic: 'مِمَّا خُلِقَ', latin: 'Mim-ma khu-liq', note: 'Dengung masuk hidung' },
          { arabic: 'إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ', latin: 'In-nal-in-saa-na la-fii khusr', note: 'Ghunnah di awal ayat' },
          { arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ', latin: 'Qul a-\'uu-dzu bi-rab-bin-naas', note: 'Ghunnah Nun akhir' }
        ]
      },
      {
        pageNumber: 3,
        title: 'Halaman 3: Alif Lam Syamsiyah (Peleburan)',
        description: 'Huruf Lam pada Alif Lam tidak dibaca, melainkan dileburkan ke huruf Syamsiyah berikutnya.',
        items: [
          { arabic: 'الشَّمْسُ - الرَّحْمَٰنُ - الصَّلَاةُ', latin: 'Asy-syam-su | Ar-rah-maa-nu | Ash-sha-laah', note: 'Alif Lam Syamsiyah' },
          { arabic: 'النَّاسُ - التَّوَّابُ - الذِّكْرُ', latin: 'An-naa-su | At-taw-waa-bu | Adz-dzikr', note: 'Masuk ke huruf berikutnya' },
          { arabic: 'وَالسَّمَاءِ وَالطَّارِقِ', latin: 'Was-sa-maa-i wat-thaa-riq', note: 'Peleburan sempurna' },
          { arabic: 'مَالِكِ يَوْمِ الدِّينِ', latin: 'Maa-li-ki yaw-mid-diin', note: 'Banyak terdapat di Surah Al-Fatihah' }
        ]
      },
      {
        pageNumber: 4,
        title: 'Halaman 4: Idgham Bighunnah (Dengung)',
        description: 'Nun sukun / Tanwin bertemu (ي, ن, م, و) melebur disertai dengung 2 harakat.',
        items: [
          { arabic: 'مَنْ يَقُولُ', latin: 'May ya-quu-lu', note: 'Nun sukun + Ya' },
          { arabic: 'مِنْ نِعْمَةٍ', latin: 'Min ni\'--ma-tin', note: 'Nun sukun + Nun' },
          { arabic: 'مَالًا لُبَدًا', latin: 'Maa-lal lu-ba-daa', note: 'Tanwin + Lam' },
          { arabic: 'حَبْلٌ مِنْ مَسَدٍ', latin: 'Hab-lum mim ma-sad', note: 'Tanwin + Mim' },
          { arabic: 'مِنْ وَلِيٍّ وَلَا نَصِيرٍ', latin: 'Mim wa-liy-yiw wa-laa na-shiir', note: 'Latihan Idgham berturut-turut' }
        ]
      },
      {
        pageNumber: 5,
        title: 'Halaman 5: Idgham Bilaghunnah (Tanpa Dengung)',
        description: 'Nun sukun / Tanwin bertemu (ل, ر) melebur langsung TANPA dengung.',
        items: [
          { arabic: 'مِنْ رَبِّهِمْ', latin: 'Mir rab-bi-him', note: 'Langsung masuk huruf R' },
          { arabic: 'غَفُورٌ رَحِيمٌ', latin: 'Gha-fuu-rur ra-hiim', note: 'Tanwin + Ra' },
          { arabic: 'هُدًى لِلْمُتَّقِينَ', latin: 'Hu-dal lil-mut-ta-qiin', note: 'Tanwin + Lam' },
          { arabic: 'أَنْ رَآهُ اسْتَغْنَىٰ', latin: 'Ar ra-aa-hus-tagh-naa', note: 'Lebur tanpa sisa' },
          { arabic: 'فَوَيْلٌ لِلْمُصَلِّينَ', latin: 'Fa-way-lul lil-mu-shal-liin', note: 'Langsung sambung ke L' }
        ]
      },
      {
        pageNumber: 6,
        title: 'Halaman 6: Evaluasi Hukum Iqlab, Ikhfa, & Tasydid',
        description: 'Uji variasi hukum tajwid lanjutan dalam bacaan sehari-hari.',
        items: [
          { arabic: 'مِنْ بَعْدِ مَا جَاءَتْهُمُ الْبَيِّنَةُ', latin: 'Mim ba\'-di maa jaa-at-hu-mul-bay-yi-nah', note: 'Iqlab (Nun sukun + Ba)' },
          { arabic: 'أَنْبِئْهُمْ بِأَسْمَائِهِمْ', latin: 'Am-bi\'-hum bi-as-maa-i-him', note: 'Iqlab & Ikhfa Syafawi' },
          { arabic: 'مَنْ صَبَرَ وَغَفَرَ', latin: 'Man sha-ba-ra wa gha-far', note: 'Ikhfa Hakiki' },
          { arabic: 'كِتَابٌ كَرِيمٌ', latin: 'Ki-taa-bun ka-riim', note: 'Ikhfa Tanwin' },
          { arabic: 'جَنَّاتٍ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ', latin: 'Jan-naa-tin taj-rii min tah-ti-hal-an-haar', note: 'Kelancaran tajwid Iqra 5' }
        ]
      }
    ]
  },
  {
    jilid: 6,
    title: 'Iqra 6: Hukum Tajwid Lengkap & Waqaf',
    description: 'Latihan membaca ayat-ayat Al-Qur\'an dengan penerapan seluruh hukum Tajwid, Lafzhul Jalalah, dan tanda Waqaf.',
    topics: ['Lafzhul Jalalah (Tafkhim / Tarqiq)', 'Mad Wajib Muttashil & Mad Jaiz Munfashil', 'Tanda Waqaf & Praktik Ayat Al-Qur\'an'],
    pages: [
      {
        pageNumber: 1,
        title: 'Halaman 1: Bacaan Lafzhul Jalalah (Lafaz ALLAH)',
        description: 'Lafaz Allah dibaca tebal (Tafkhim) jika diawali Fathah/Dammah, dan tipis (Tarqiq) jika diawali Kasrah.',
        items: [
          { arabic: 'اللَّهُ - بِسْمِ اللَّهِ', latin: 'Al-Laah | Bis-mil-Laah', note: 'Tafkhim (Tebal) vs Tarqiq (Tipis)' },
          { arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ', latin: 'Qul hu-wal-laa-hu a-had', note: 'Didahului Fathah -> Tebal' },
          { arabic: 'نَصْرُ اللَّهِ وَالْفَتْحُ', latin: 'Nas-rul-laa-hi wal-fath', note: 'Didahului Dammah -> Tebal' },
          { arabic: 'فِي دِينِ اللَّهِ أَفْوَاجًا', latin: 'Fii dii-nil-laa-hi af-waa-jaa', note: 'Didahului Kasrah -> Tipis' },
          { arabic: 'شَهِدَ اللَّهُ أَنَّهُ لَا إِلَٰهَ إِلَّا هُوَ', latin: 'Sya-hi-dal-laa-hu an-na-huu laa i-laa-ha il-laa huu', note: 'Tebal sempurna' }
        ]
      },
      {
        pageNumber: 2,
        title: 'Halaman 2: Mad Wajib Muttashil & Mad Jaiz Munfashil',
        description: 'Mad bertemu Hamzah dalam satu kata (Wajib - 5/6 harakat) atau beda kata (Jaiz - 2/4/5 harakat). Ditandai bendera (~).',
        items: [
          { arabic: 'إِذَا جَاءَ نَصْرُ اللَّهِ', latin: 'I-dzaa jaa-a nas-rul-laah', note: 'Mad Wajib Muttashil (5 harakat)' },
          { arabic: 'سُوءَ الْعَذَابِ', latin: 'Suu-al-\'a-dzaab', note: 'Mad Wajib (Wawu + Hamzah)' },
          { arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا', latin: 'Yaa ay-yu-hal-la-dziina aa-ma-nuu', note: 'Mad Jaiz Munfashil' },
          { arabic: 'فِي أَيِّ صُورَةٍ مَا شَاءَ رَكَّبَكَ', latin: 'Fii ay-yi shuu-ra-tin maa syaa-a rak-ka-bak', note: 'Gabungan Mad Jaiz & Wajib' },
          { arabic: 'بِمَا أُنْزِلَ إِلَيْكَ', latin: 'Bi-maa un-zi-la i-layk', note: 'Mad Jaiz bendera' }
        ]
      },
      {
        pageNumber: 3,
        title: 'Halaman 3: Mad \'Aridh Lissukun (Panjang Saat Berhenti)',
        description: 'Mad Thabi\'i di akhir kata yang dihentikan (waqaf) dibaca panjang 2, 4, atau 6 harakat.',
        items: [
          { arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', latin: 'Al-ham-du lil-laa-hi rab-bil-\'aa-la-miin', note: 'Berhenti pada Miin' },
          { arabic: 'الرَّحْمَٰنِ الرَّحِيمِ', latin: 'Ar-rah-maa-nir-ra-hiim', note: 'Berhenti pada Hiim' },
          { arabic: 'مَالِكِ يَوْمِ الدِّينِ', latin: 'Maa-li-ki yaw-mid-diin', note: 'Berhenti pada Diin' },
          { arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', latin: 'Iy-yaa-ka na-\'bu-du wa iy-yaa-ka nas-ta-\'iin', note: 'Berhenti pada \'Iin' },
          { arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', latin: 'Ih-di-nas-shi-raa-thal-mus-ta-qiim', note: 'Mad \'Aridh Lissukun' }
        ]
      },
      {
        pageNumber: 4,
        title: 'Halaman 4: Tanda-Tanda Waqaf (Tempat Berhenti)',
        description: 'Memahami arti simbol waqaf dalam Al-Qur\'an untuk berhenti dan mengambil napas secara benar.',
        items: [
          { arabic: 'مـ (وَقَفَ لَازِمٌ)', latin: 'Waqaf Lazim: WAJIB Berhenti', note: 'Simbol Mim kecil' },
          { arabic: 'قلى (الْوَقْفُ أَوْلَىٰ)', latin: 'Waqaf Qala: LEBIH UTAMA Berhenti', note: 'Simbol Qala' },
          { arabic: 'صلى (الْوَصْلُ أَوْلَىٰ)', latin: 'Waqaf Shala: LEBIH UTAMA Lanjut', note: 'Simbol Shala' },
          { arabic: 'ج (جَائِزٌ)', latin: 'Waqaf Jaiz: BOLEH Berhenti / Lanjut', note: 'Simbol Jim' },
          { arabic: 'لا (لَا تَقِفْ)', latin: 'Waqaf Laa: DILARANG Berhenti', note: 'Simbol Laa' }
        ]
      },
      {
        pageNumber: 5,
        title: 'Halaman 5: Praktik Membaca Surah Al-Fatihah',
        description: 'Penerapan seluruh hukum tajwid Iqra 1 - 6 pada Surah Al-Fatihah secara fasih dan benar.',
        items: [
          { arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', latin: 'Bis-mil-laa-hir-rah-maa-nir-ra-hiim', note: 'Ayat 1' },
          { arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', latin: 'Al-ham-du lil-laa-hi rab-bil-\'aa-la-miin', note: 'Ayat 2' },
          { arabic: 'الرَّحْمَٰنِ الرَّحِيمِ', latin: 'Ar-rah-maa-nir-ra-hiim', note: 'Ayat 3' },
          { arabic: 'مَالِكِ يَوْمِ الدِّينِ', latin: 'Maa-li-ki yaw-mid-diin', note: 'Ayat 4' },
          { arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', latin: 'Iy-yaa-ka na-\'bu-du wa iy-yaa-ka nas-ta-\'iin', note: 'Ayat 5' },
          { arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', latin: 'Ih-di-nas-shi-raa-thal-mus-ta-qiim', note: 'Ayat 6' },
          { arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ', latin: 'Shi-raa-thal-la-dziina an-\'am-ta \'a-lay-him ghay-ril-magh-dhuu-bi \'a-lay-him wa lad-dhaal-liin', note: 'Ayat 7 (Mad Lazim)' }
        ]
      },
      {
        pageNumber: 6,
        title: 'Halaman 6: Evaluasi Khir Iqra 6 (Kelancaran Membaca Ayat)',
        description: 'Selamat! Anda telah siap membaca Mushaf Al-Qur\'an secara mendiri.',
        items: [
          { arabic: 'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ', latin: 'I-dzaa jaa-a nas-rul-laa-hi wal-fath', note: 'An-Nasr Ayat 1' },
          { arabic: 'وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا', latin: 'Wa ra-\'ay-tan-naa-sa yad-khu-luu-na fii dii-nil-laa-hi af-waa-jaa', note: 'An-Nasr Ayat 2' },
          { arabic: 'فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ إِنَّهُ كَانَ تَوَّابًا', latin: 'Fa-sab-bih bi-ham-di rab-bi-ka was-tagh-fir-hu in-na-huu kaa-na taw-waa-baa', note: 'An-Nasr Ayat 3' },
          { arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ ۚ اللَّهُ الصَّمَدُ ۚ لَمْ يَلِدْ وَلَمْ يُولَدْ ۚ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ', latin: 'Qul hu-wal-laa-hu a-had. Al-laa-hus-sha-mad. Lam ya-lid wa lam yuu-lad. Wa lam ya-kul la-huu ku-fu-wan a-had.', note: 'Surah Al-Ikhlas Lengkap' }
        ]
      }
    ]
  }
];
