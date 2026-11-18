export const TOTAL_MANTA_FRAMES = 273;

/**
 * Menghasilkan URL file gambar frame (1 sampai 273) dari folder public/images/frame underground nusa penida.
 * @param {number} frameNumber
 * @returns {string}
 */
export function getMantaFrameUrl(frameNumber) {
  const clamped = Math.max(1, Math.min(TOTAL_MANTA_FRAMES, Math.round(frameNumber)));
  const padded = String(clamped).padStart(4, '0');
  const base = import.meta.env.BASE_URL || '/';
  return `${base}images/frame underground nusa penida/frame-${padded}.jpg`;
}

export const MANTA_CHAPTERS = [
  {
    id: 'descent',
    shortLabel: 'Descent',
    tag: 'BABAK 01 · SURGA SAMUDRA BIRU',
    tagJa: '第1章 · ターコイズの青海',
    tagKo: '제1막 · 에메랄드 블루 오션',
    title: 'Crystal Turquoise Waters',
    titleId: 'Kejernihan Samudra Tropis',
    titleZh: '清澈蔚蓝之境',
    titleJa: '水晶のような透明度を誇る海',
    titleKo: '크리스탈 터콰이즈 바다의 경이로움',
    description:
      'Dive into the pristine turquoise waters of Nusa Penida with extraordinary 30-meter visibility, unlocking the gate to Bali’s most breathtaking underwater paradise.',
    descriptionId:
      'Menyelam menembus air laut toska sebening kristal dengan jarak pandang luar biasa, membuka gerbang menuju surga bahari paling menakjubkan di Bali.',
    descriptionZh:
      '潜入努沙佩尼达清澈如水晶般的蓝绿色海水，能见度高达30米，开启巴厘岛最令人叹为观止的海底仙境。',
    descriptionJa:
      '透明度30メートルを誇るヌサペニダのクリスタルブルーの海へダイブ。バリ島で最も息を呑む水中パラダイスへの扉が開きます。',
    descriptionKo:
      '30미터 이상의 압도적 시야를 자랑하는 투명한 터콰이즈 바닷속으로 다이빙하여 발리 최고의 해양 낙원을 맞이하세요.',
    start: 0.0,
    end: 0.22,
    depth: '-5.2 M',
    frameRange: '001 – 060',
    arrowText: 'Gulir untuk menyelam lebih dalam',
    arrowTextJa: 'スクロールして深く潜る',
    arrowTextKo: '스크롤하여 더 깊이 다이빙하기',
    cardPos: 'bottom-left',
  },
  {
    id: 'manta-encounter',
    shortLabel: 'Manta',
    tag: 'BABAK 02 · TARIAN SANG PARI MANTA',
    tagJa: '第2章 · 巨大マンタの優雅な舞',
    tagKo: '제2막 · 자이언트 만타가오리의 유영',
    title: 'Grace of the Giant Manta',
    titleId: 'Keanggunan Ratu Samudra',
    titleZh: '巨型蝠鲼的水下芭蕾',
    titleJa: '雄大なるマンタとの遭遇',
    titleKo: '바다의 여왕, 거대 만타가오리',
    description:
      'Giant reef manta rays with a five-meter wingspan soar weightlessly through warm currents. Manta Point is a world-renowned natural haven where these gentle giants dance alongside divers.',
    descriptionId:
      'Pari Manta karang raksasa dengan bentang sayap lebih dari lima meter melayang anggun di perairan hangat. Suaka alami dunia tempat mereka berenang bebas dan damai.',
    descriptionZh:
      '翼展超过五米的巨型珊瑚蝠鲼在温暖洋流中轻盈滑翔。蝠鲼点是闻名全球的天然乐园，温和的海中巨擘在此与潜水员共游。',
    descriptionJa:
      '翼幅5メートルを超える巨大マンタが暖流の中を優雅に飛翔。マンタポイントは世界中のダイバーが憧れる野生の聖地です。',
    descriptionKo:
      '날개 길이 5미터가 넘는 거대한 만타가오리가 따스한 해류 속을 유영합니다. 세계적인 자연 서식지에서 잊지 못할 조우를 경험하세요.',
    start: 0.22,
    end: 0.45,
    depth: '-12.8 M',
    frameRange: '061 – 122',
    arrowText: 'Lanjut menyusuri terumbu karang',
    arrowTextJa: 'サンゴ礁に沿って進む',
    arrowTextKo: '산호초 정원을 따라 탐험하기',
    cardPos: 'top-right',
  },
  {
    id: 'turtle-reef',
    shortLabel: 'Reef',
    tag: 'BABAK 03 · TAMAN KARANG ALAMI',
    tagJa: '第3章 · 生命息づくサンゴの庭園',
    tagKo: '제3막 · 생명력 넘치는 산호 정원',
    title: 'Vibrant Reef & Sea Turtles',
    titleId: 'Taman Terumbu & Penyu Laut',
    titleZh: '珊瑚花园与海龟奇遇',
    titleJa: '色鮮やかな珊瑚礁とウミガメ',
    titleKo: '살아 숨 쉬는 산호초 & 바다거북',
    description:
      'A pristine coral kingdom brimming with life. A majestic green sea turtle glides effortlessly above colorful soft corals and dancing schools of exotic tropical reef fish.',
    descriptionId:
      'Hamparan terumbu karang warna-warni yang asri dan terjaga murni. Seekor penyu hijau purba meluncur santai di antara ribuan ikan karang tropis beraneka warna yang memikat.',
    descriptionZh:
      '充满生机的原始珊瑚王国。一只优雅的绿海龟在色彩斑斓的软珊瑚和欢快游动的热带鱼群间自在穿梭，宛如水下童话。',
    descriptionJa:
      '命あふれる珊瑚の王国。優雅なアオウミガメが、鮮やかなソフトコーラルと熱帯魚の群れの上を滑るように泳ぎます。',
    descriptionKo:
      '다채로운 연산호와 열대어 떼 사이로 고대 푸른바다거북이 평화롭게 유영하는 환상적인 수중 동화 속 풍경.',
    start: 0.45,
    end: 0.68,
    depth: '-17.5 M',
    frameRange: '123 – 185',
    arrowText: 'Jelajahi dinding karang samudra',
    arrowTextJa: 'ドロップオフの絶壁へ',
    arrowTextKo: '수중 산호 절벽으로 이동하기',
    cardPos: 'bottom-left',
  },
  {
    id: 'deep-wall',
    shortLabel: 'Deep Wall',
    tag: 'BABAK 04 · DINDING KARANG SAMUDRA',
    tagJa: '第4章 · 紺碧のドロップオフ',
    tagKo: '제4막 · 심해 산호 절벽 파노라마',
    title: 'Teeming Coral Wall Panorama',
    titleId: 'Pesona Dinding Bahari Tropis',
    titleZh: '生机盎然的珊瑚峭壁',
    titleJa: '壮大な海底ウォールパノラマ',
    titleKo: '경이로운 해저 절벽 파노라마',
    description:
      'A magnificent underwater coral wall carpeted with sea fans and vibrant marine flora. Nutrient-rich oceanic currents nourish one of the richest biodiversity hotspots on Earth.',
    descriptionId:
      'Dinding karang bawah laut spektakuler yang diselimuti koral lunak dan bunga karang eksotis. Arus samudra yang kaya nutrisi menghidupkan ekosistem bahari kelas dunia.',
    descriptionZh:
      '壮观的海底珊瑚峭壁，长满海扇与绚丽的海洋生物。富含养分的洋流哺育着地球上生物多样性最丰富的海洋栖息地之一。',
    descriptionJa:
      'ウミウチワや極彩色の海洋生物に覆われた息を呑むドロップオフ。栄養豊かな深海海流が世界屈指の生態系を育んでいます。',
    descriptionKo:
      '해부채와 바다 생물로 뒤덮인 웅장한 수중 절벽. 영양분이 풍부한 해류가 만들어낸 지구상 가장 풍요로운 해양 생태계.',
    start: 0.68,
    end: 0.88,
    depth: '-24.0 M',
    frameRange: '186 – 240',
    arrowText: 'Menuju panorama permukaan laut',
    arrowTextJa: '海面パノラマへ浮上する',
    arrowTextKo: '해수면 파노라마로 부상하기',
    cardPos: 'center-right',
  },
  {
    id: 'surface-arch',
    shortLabel: 'Surface',
    tag: 'BABAK 05 · MAHA KARYA NUSA PENIDA',
    tagJa: '第5章 · ヌサペニダの最高傑作',
    tagKo: '제5막 · 누사 페니다의 불멸의 걸작',
    title: 'Bali’s Crown Marine Wonder',
    titleId: 'Mahakarya Samudra Abadi',
    titleZh: '巴厘岛终极海洋奇观',
    titleJa: 'バリ島が誇る海の至宝',
    titleKo: '발리 최고의 해양 불가사의',
    description:
      'World-class underwater wonder meets the iconic limestone cliffs of Nusa Penida, completing a mesmerizing journey through the island’s most legendary marine paradise.',
    descriptionId:
      'Keindahan bawah laut berkelas dunia berpadu sempurna dengan kemegahan tebing karst ikonik Nusa Penida, mengabadikan pesona suaka laut terbaik pulau dewata.',
    descriptionZh:
      '世界级的水下奇观与努沙佩尼达标志性的喀斯特悬崖完美呼应，为这段穿越传奇海洋乐园的探索画上惊艳句点。',
    descriptionJa:
      '世界クラスの水中美とヌサペニダの白亜の断崖が織りなす絶景。伝説の海を巡る至高の旅のフィナーレ。',
    descriptionKo:
      '세계적 수준의 수중 경이로움과 웅장한 석회암 절벽이 조화를 이루며 완성되는 전설적인 해양 사파리 여정.',
    start: 0.88,
    end: 1.0,
    depth: '0.0 M',
    frameRange: '241 – 273',
    arrowText: 'Ekspedisi selesai · Jelajahi spot lain',
    arrowTextJa: '探検完了 · 他のスポットを探索',
    arrowTextKo: '탐험 완료 · 다른 명소 둘러보기',
    cardPos: 'bottom-right',
  },
];

/**
 * Mendapatkan chapter aktif berdasarkan rasio progress scroll (0..1)
 */
export function getMantaChapterForProgress(progress) {
  return (
    MANTA_CHAPTERS.find((c, idx) =>
      idx === MANTA_CHAPTERS.length - 1
        ? progress >= c.start
        : progress >= c.start && progress < c.end
    ) || MANTA_CHAPTERS[0]
  );
}
