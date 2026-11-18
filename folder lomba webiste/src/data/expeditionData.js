export const TOTAL_FRAMES = 192;

/**
 * Menghasilkan URL file gambar frame (1 sampai 192) dari folder public/frames.
 * @param {number} frameNumber
 * @returns {string}
 */
export function getFrameUrl(frameNumber) {
  const clamped = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(frameNumber)));
  const padded = String(clamped).padStart(4, '0');
  const base = import.meta.env.BASE_URL || '/';
  return `${base}frames/frame-${padded}.jpg`;
}

export const CHAPTERS = [
  {
    id: 'udara',
    shortLabel: 'Udara',
    eyebrow: 'BABAK 01 · PANORAMA UDARA',
    title: 'Dari Puncak Karang Menuju Biru Tak Bertepi',
    description:
      'Menyusuri tebing ikonik Pantai Kelingking dari ketinggian—di mana hijaunya perbukitan kapur bertemu gradasi pirus Samudra Hindia.',
    start: 0.0,
    end: 0.19,
    altitude: '+142 M',
    zone: 'KELINGKING RIDGE',
    accent: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.28)',
    align: 'left',
  },
  {
    id: 'samudra',
    shortLabel: 'Samudra',
    eyebrow: 'BABAK 02 · MELINTASI OMBAK',
    title: 'Menembus Batas Permukaan Air',
    description:
      'Kapal pesiar putih membelah teluk tenang di antara gugusan pulau karang, sebelum sudut pandang menyelam tepat di garis ombak.',
    start: 0.19,
    end: 0.42,
    altitude: '0.0 M',
    zone: 'CRYSTAL BAY',
    accent: '#22d3ee',
    glow: 'rgba(34, 211, 238, 0.30)',
    align: 'right',
  },
  {
    id: 'terumbu',
    shortLabel: 'Terumbu',
    eyebrow: 'BABAK 03 · DUNIA BAWAH LAUT',
    title: 'Harmoni Anemon & Penyu Hijau',
    description:
      'Menyelam lebih dalam menuju taman karang alami—rumah bagi ikan badut di balik tentakel anemon dan penyu laut purba yang berenang tenang.',
    start: 0.42,
    end: 0.69,
    altitude: '-14.8 M',
    zone: 'CORAL SANCTUARY',
    accent: '#2dd4bf',
    glow: 'rgba(45, 212, 191, 0.28)',
    align: 'left',
  },
  {
    id: 'transisi',
    shortLabel: 'Perspektif',
    eyebrow: 'BABAK 04 · SINKRONISASI 3D',
    title: 'Satu Cakrawala, Dua Semesta',
    description:
      'Transisi atmosferik menyatukan keheningan bawah laut dengan panorama tebing Nusantara dalam satu sapuan guliran sinematik.',
    start: 0.69,
    end: 0.85,
    altitude: '+64 M',
    zone: 'HORIZON MORPH',
    accent: '#818cf8',
    glow: 'rgba(129, 140, 248, 0.26)',
    align: 'center',
  },
  {
    id: 'finale',
    shortLabel: 'Finale',
    eyebrow: 'BABAK 05 · NUSA PENIDA, BALI',
    title: 'Keajaiban Bahari yang Abadi',
    description:
      'Bermandikan cahaya keemasan dari cakrawala barat, seluruh bentang teluk dan tebing terbentang utuh—menanti untuk dijelajahi.',
    start: 0.85,
    end: 1.0,
    altitude: '+185 M',
    zone: 'GOLDEN PANORAMA',
    accent: '#fbbf24',
    glow: 'rgba(251, 191, 36, 0.28)',
    align: 'left',
  },
];

/**
 * Menentukan babak aktif berdasarkan rasio progres scroll (0..1).
 * @param {number} progress
 */
export function getChapterForProgress(progress) {
  return (
    CHAPTERS.find((c, idx) =>
      idx === CHAPTERS.length - 1
        ? progress >= c.start
        : progress >= c.start && progress < c.end
    ) || CHAPTERS[0]
  );
}

export const HIGHLIGHT_REALMS = [
  {
    id: 'aerial',
    tag: 'ZONA UDARA · +142M',
    title: 'Tebing Kapur Kelingking',
    subtitle: 'Perspektif Drone 180°',
    description:
      'Formasi karst ikonik menyerupai punggung naga yang menjulang di atas pasir putih dan gradasi laut toska sebening kristal.',
    frame: 1,
    accent: '#38bdf8',
    metrics: [
      { label: 'Ketinggian', value: '142 mdpl' },
      { label: 'Visibilitas', value: '35 km' },
    ],
  },
  {
    id: 'surface',
    tag: 'GARIS AIR · 0.0M',
    title: 'Pelayaran Teluk Kristal',
    subtitle: 'Yacht & Freediving Split-View',
    description:
      'Berlayar membelah selat tenang di balik tebing karang tersembunyi, sempurna untuk berlabuh dan menyelam langsung ke arus jernih.',
    frame: 64,
    accent: '#22d3ee',
    metrics: [
      { label: 'Suhu Air', value: '27.5 °C' },
      { label: 'Kejernihan', value: '25 m+' },
    ],
  },
  {
    id: 'reef',
    tag: 'BAWAH LAUT · -14.8M',
    title: 'Suaka Penyu & Karang',
    subtitle: 'Konservasi Segitiga Terumbu',
    description:
      'Ekosistem terumbu hidup tempat penyu hijau, kawanan ikan badut, dan penyelam berbagi ketenangan samudra tropis.',
    frame: 128,
    accent: '#2dd4bf',
    metrics: [
      { label: 'Kedalaman', value: '12–18 m' },
      { label: 'Biodiversitas', value: '450+ spesies' },
    ],
  },
];

export const FRAME_MILESTONES = [
  { frame: 1, label: 'Kelingking Cliff', elevation: '+142m' },
  { frame: 32, label: 'Yacht Approach', elevation: '+8m' },
  { frame: 64, label: 'Waterline Split', elevation: '0.0m' },
  { frame: 96, label: 'Reef Descent', elevation: '-9.2m' },
  { frame: 128, label: 'Turtle & Reef', elevation: '-14.8m' },
  { frame: 160, label: 'Dual Horizon', elevation: '+64m' },
  { frame: 192, label: 'Golden Finale', elevation: '+185m' },
];

export const EXPEDITION_PACKAGES = [
  {
    id: 'explorer',
    name: 'Ekspedisi 1 Hari',
    badge: 'Populer',
    duration: '08.00 – 17.30 WITA',
    price: 'Rp 1.450.000',
    unit: '/ peserta',
    summary:
      'Kombinasi rute darat tebing Kelingking dan sesi snorkeling sore di teluk kristal dengan dokumentasi sinematik.',
    highlights: [
      'Akses spot panorama tebing barat & Broken Beach',
      'Perahu cepat pulang-pergi dari Pelabuhan Sanur',
      'Peralatan snorkeling & pemandu konservasi bersertifikat',
      'Dokumentasi foto split-waterline & drone highlight',
    ],
  },
  {
    id: 'dive',
    name: 'Marine Dive & Freedive',
    badge: 'Konservasi',
    duration: '2 Hari 1 Malam',
    price: 'Rp 3.850.000',
    unit: '/ peserta',
    summary:
      'Program khusus penyelam bersertifikat dan freediver untuk menjelajahi taman karang, arus lembut, dan habitat penyu hijau.',
    highlights: [
      '3 sesi penyelaman di Crystal Bay, Toyapakeh & Manta Point',
      'Instruktur PADI / AIDA berpengalaman rasio kecil (1:3)',
      'Sesi edukasi ekosistem anemon & identifikasi penyu laut',
      'Penginapan eco-resort menghadap tebing & sarapan lokal',
    ],
  },
  {
    id: 'yacht',
    name: 'Private Yacht Charter',
    badge: 'Eksklusif',
    duration: 'Full-Day Privat',
    price: 'Rp 18.500.000',
    unit: '/ kapal (maks. 8 orang)',
    summary:
      'Pelayaran privat menggunakan kapal pesiar modern mengelilingi gugusan pulau kapur Nusa Penida dan Lembongan.',
    highlights: [
      'Kapal pesiar privat dengan kabin AC & sun-deck luas',
      'Rute fleksibel: Kelingking Cove, Manta Bay & lagoon rahasia',
      'Chef on-board dengan hidangan laut segar Nusantara',
      'Kru dokumentasi FPV & kamera bawah air selama perjalanan',
    ],
  },
];
