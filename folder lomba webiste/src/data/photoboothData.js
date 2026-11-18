/**
 * Data Konfigurasi dan Terjemahan Manta Point Virtual Photobooth
 * Mendukung 5 Bahasa: en, id, zh, ja, ko
 */

export const FRAME_CONFIG = {
  src: '/images/frame/frame manta point.PNG',
  width: 941,
  height: 1672,
  aspectRatio: 941 / 1672,
};

export const DEFAULT_SLOTS = [
  {
    id: 1,
    cx: 295,
    cy: 657,
    width: 360,
    height: 270,
    angle: -5.9,
    defaultImage: '/images/foto tambahan/manta point.jpeg',
    labels: {
      id: 'Stasiun Pembersih Pari Manta',
      en: 'Manta Cleaning Station',
      zh: '蝠鲼天然清洁站',
      ja: 'マンタクリーニングステーション',
      ko: '만타 가오리 클리닝 스테이션',
    },
  },
  {
    id: 2,
    cx: 662,
    cy: 694,
    width: 350,
    height: 260,
    angle: 2.8,
    defaultImage: '/images/foto tambahan/menyelam.jpeg',
    labels: {
      id: 'Penyelaman Bahari Bebas',
      en: 'Freediving Sanctuary',
      zh: '深海自由潜水',
      ja: 'フリーダイビング体験',
      ko: '프리다이빙 해양 탐험',
    },
  },
  {
    id: 3,
    cx: 266,
    cy: 987,
    width: 370,
    height: 275,
    angle: -5.9,
    defaultImage: '/images/foto tambahan/penyu.jpeg',
    labels: {
      id: 'Penyu Sisik & Satwa Karang',
      en: 'Hawksbill Turtle Sanctuary',
      zh: '玳瑁海龟与珊瑚生灵',
      ja: 'タイマイと海洋生物',
      ko: '대모거북 산호 서식지',
    },
  },
  {
    id: 4,
    cx: 648,
    cy: 1065,
    width: 360,
    height: 270,
    angle: 8.3,
    defaultImage: '/images/foto tambahan/terumbu karang.jpeg',
    labels: {
      id: 'Taman Karang Alami Manta Bay',
      en: 'Pristine Coral Gardens',
      zh: '蝠鲼湾原始珊瑚花园',
      ja: '手つかずの珊瑚礁ガーデン',
      ko: '만타 베이 원시 산호 정원',
    },
  },
  {
    id: 5,
    cx: 268,
    cy: 1325,
    width: 390,
    height: 280,
    angle: 6.5,
    defaultImage: '/images/foto tambahan/tebing bagus.jpeg',
    labels: {
      id: 'Tebing Karang Megah Penida',
      en: 'Majestic Ocean Cliffs',
      zh: '努沙佩尼达壮丽海崖',
      ja: 'ペニダの壮大な断崖',
      ko: '페니다의 웅장한 해안 절벽',
    },
  },
  {
    id: 6,
    cx: 699,
    cy: 1373,
    width: 360,
    height: 260,
    angle: -7.7,
    defaultImage: '/images/foto tambahan/terumbu karang1.jpeg',
    labels: {
      id: 'Ekosistem Karang Hidup',
      en: 'Living Reef Ecosystem',
      zh: '活体珊瑚礁微生态',
      ja: '生きた珊瑚礁エコシステム',
      ko: '살아 숨 쉬는 산호초 생태계',
    },
  },
];

export const PHOTOBOOTH_TEXTS = {
  id: {
    eyebrow: 'STUDIO BOOTH FOTO VIRTUAL',
    title: 'Bingkai Kenangan Bawah Air Manta Point',
    subtitle:
      'Abadikan petualangan menyelam Anda bersama pari manta. Unggah minimal 6 foto momen terbaik ke dalam bingkai resmi Manta Point beresolusi tinggi, lalu unduh secara gratis.',
    uploadBatchBtn: 'Unggah Sekaligus (6 Foto)',
    useDummyBtn: 'Pakai Foto Contoh (Demo)',
    resetBtn: 'Kosongkan Foto',
    progressText: (count, total) => `${count} dari ${total} Slot Terisi`,
    requirementNote: (remaining) =>
      `Unggah minimal 6 foto untuk mengaktifkan tombol download (${remaining} foto lagi tersisa)`,
    readyNote:
      'Semua 6 slot foto terpasang lengkap. Bingkai resmi siap diunduh dalam kualitas cetak HD.',
    downloadBtnLocked: 'Unggah 6 Foto untuk Mengunduh',
    downloadBtnReady: 'Unduh Foto Bingkai HD (PNG)',
    downloading: 'Menyiapkan Cetakan HD (941 × 1672)...',
    downloadSuccess: 'Foto kenangan berhasil diunduh. Cek folder Unduhan Anda.',
    slotChange: 'Ganti',
    slotUpload: 'Pilih',
    slotRemove: 'Hapus',
    frameBadge: 'RESOLUSI CETAK 941 × 1672 PX',
    livePreviewBadge: 'Live Preview',
    tipBox:
      'Tips: Gunakan foto berorientasi landscape atau portrait cerah. Sistem otomatis menyesuaikan dan memposisikan foto agar pas dengan sudut polaroid.',
  },
  en: {
    eyebrow: 'VIRTUAL PHOTOBOOTH STUDIO',
    title: 'Manta Point Underwater Souvenir Frame',
    subtitle:
      'Immortalize your underwater adventure with giant mantas. Upload at least 6 favorite photos into the official Manta Point high-resolution frame, then download your keepsake.',
    uploadBatchBtn: 'Batch Upload (6 Photos)',
    useDummyBtn: 'Use Demo Photos (Preset)',
    resetBtn: 'Clear All',
    progressText: (count, total) => `${count} of ${total} Slots Filled`,
    requirementNote: (remaining) =>
      `Upload at least 6 photos to unlock download (${remaining} more needed)`,
    readyNote:
      'All 6 photo slots are filled. Your official souvenir frame is ready for HD download.',
    downloadBtnLocked: 'Upload 6 Photos to Download',
    downloadBtnReady: 'Download HD Souvenir Frame (PNG)',
    downloading: 'Preparing HD Print (941 × 1672)...',
    downloadSuccess: 'Souvenir downloaded successfully. Check your Downloads folder.',
    slotChange: 'Replace',
    slotUpload: 'Choose',
    slotRemove: 'Remove',
    frameBadge: 'PRINT QUALITY 941 × 1672 PX',
    livePreviewBadge: 'Live Preview',
    tipBox:
      'Tip: Landscape or vibrant marine photos look best. The system auto-centers and crops each image to fit the angled polaroid windows.',
  },
  zh: {
    eyebrow: '虚拟拍照互动馆',
    title: '蝠鲼点水下专属纪念相框',
    subtitle:
      '定格您与巨型蝠鲼共游的高光时刻。上传至少6张精彩照片填满官方定制相框，即可免费下载超高清数字纪念照。',
    uploadBatchBtn: '批量上传 (6张照片)',
    useDummyBtn: '使用范例照片 (预设)',
    resetBtn: '清空所有照片',
    progressText: (count, total) => `已填满 ${count} / ${total} 个相框`,
    requirementNote: (remaining) =>
      `需上传满 6 张照片方可解锁下载 (还需 ${remaining} 张)`,
    readyNote: '6张相框已全部就绪。即刻下载超高清无水印纪念大图。',
    downloadBtnLocked: '上传满6张照片以解锁下载',
    downloadBtnReady: '下载高清纪念相框 (PNG)',
    downloading: '正在生成高清画质 (941 × 1672)...',
    downloadSuccess: '下载成功。请查看您的下载文件夹。',
    slotChange: '更换',
    slotUpload: '选择',
    slotRemove: '移除',
    frameBadge: '高清打印画质 941 × 1672 PX',
    livePreviewBadge: '实时预览',
    tipBox: '建议：选用明亮的水下或海岛风景照片，系统将自动校准裁剪并完美贴合拍立得微倾角。',
  },
  ja: {
    eyebrow: 'バーチャルフォトブース',
    title: 'マンタポイント海中メモリアルフレーム',
    subtitle:
      'マンタとの神秘的な出会いを一生の記念に。お気に入りの写真を6枚以上アップロードして公式フレームを完成させ、高画質画像をダウンロードしましょう。',
    uploadBatchBtn: 'まとめてアップロード (6枚)',
    useDummyBtn: 'サンプル写真を使用 (デモ)',
    resetBtn: 'すべてクリア',
    progressText: (count, total) => `${count} / ${total} スロット完了`,
    requirementNote: (remaining) =>
      `ダウンロードするには写真を6枚以上アップロードしてください (残り ${remaining} 枚)`,
    readyNote:
      '6枚すべてセットされました。高解像度フレームをダウンロードできます。',
    downloadBtnLocked: '6枚アップロードでダウンロード可能',
    downloadBtnReady: 'HDフレーム画像をダウンロード (PNG)',
    downloading: 'HD印刷画質を生成中 (941 × 1672)...',
    downloadSuccess: 'ダウンロード完了。ダウンロードフォルダをご確認ください。',
    slotChange: '変更',
    slotUpload: '選択',
    slotRemove: '削除',
    frameBadge: '印刷品質 941 × 1672 PX',
    livePreviewBadge: 'ライブプレビュー',
    tipBox:
      'ヒント：色彩豊かな水中写真が映えます。ポラロイドの傾きに合わせて自動でクロップ配置されます。',
  },
  ko: {
    eyebrow: '가상 포토부스 스튜디오',
    title: '만타 포인트 수중 기념 포토 프레임',
    subtitle:
      '만타 가오리와의 경이로운 모험을 영원히 간직하세요. 최소 6장의 사진을 업로드하여 공식 프레임을 완성하고 고해상도 기념 사진을 다운로드하세요.',
    uploadBatchBtn: '한 번에 업로드 (6장)',
    useDummyBtn: '샘플 사진 불러오기 (데모)',
    resetBtn: '모두 지우기',
    progressText: (count, total) => `${count} / ${total} 슬롯 완료`,
    requirementNote: (remaining) =>
      `다운로드를 활성화하려면 최소 6장을 업로드해야 합니다 (${remaining}장 남음)`,
    readyNote:
      '6장의 사진이 모두 준비되었습니다. 고해상도 기념 프레임을 다운로드하세요.',
    downloadBtnLocked: '6장을 업로드하면 다운로드 가능',
    downloadBtnReady: 'HD 프레임 사진 다운로드 (PNG)',
    downloading: 'HD 인쇄용 사진 생성 중 (941 × 1672)...',
    downloadSuccess: '다운로드 완료. 다운로드 폴더를 확인하세요.',
    slotChange: '변경',
    slotUpload: '선택',
    slotRemove: '삭제',
    frameBadge: '인쇄 해상도 941 × 1672 PX',
    livePreviewBadge: '실시간 미리보기',
    tipBox:
      '팁: 생생한 바다 사진이나 인물 사진을 사용해 보세요. 폴라로이드 각도에 맞춰 자동으로 중앙 정렬 및 크롭됩니다.',
  },
};
