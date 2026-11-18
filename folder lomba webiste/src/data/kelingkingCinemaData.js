export const TOTAL_KELINGKING_FRAMES = 425;

/**
 * Menghasilkan URL file gambar frame (1 sampai 425) dari folder public/images/kelingking beach-frames.
 * @param {number} frameNumber
 * @returns {string}
 */
export function getKelingkingFrameUrl(frameNumber) {
  const clamped = Math.max(1, Math.min(TOTAL_KELINGKING_FRAMES, Math.round(frameNumber)));
  const padded = String(clamped).padStart(4, '0');
  const base = import.meta.env.BASE_URL || '/';
  return `${base}images/kelingking beach-frames/frame-${padded}.png`;
}

export const KELINGKING_CHAPTERS = [
  {
    id: 'trex-viewpoint',
    shortLabel: 'T-Rex Ridge',
    tag: 'BABAK 01 · MAHA KARYA GEOLOGI PURBA',
    tagJa: '第1章 · 巨獣カルストの頂',
    tagKo: '제1막 · 고대 카르스트의 경이',
    title: 'Iconic T-Rex Karst Cliff',
    titleId: 'Kemegahan Tebing Tyrannosaurus',
    titleZh: '恐龙精灵断崖全景',
    titleJa: 'ティラノサウルス断崖の威容',
    titleKo: '아이코닉 T-Rex 카르스트 절벽',
    description:
      'Standing 200 meters above the azure Indian Ocean, Kelingking Cliff forms the dramatic silhouette of a Tyrannosaurus Rex, carved naturally over millions of years of oceanic waves.',
    descriptionId:
      'Menjulang 200 meter di atas Samudra Hindia yang membiru, Tebing Kelingking membentuk siluet Tyrannosaurus Rex yang dipahat alami oleh deburan ombak selama jutaan tahun.',
    descriptionZh:
      '矗立在蔚蓝印度洋上方200米处，努沙佩尼达标志性的恐龙精灵湾悬崖形如巨兽探海，由亿万年海浪雕琢而成。',
    descriptionJa:
      '碧青のインド洋から200m屹立するクリンキンビーチの絶壁。数百万年の波が刻んだティラノサウルスのシルエットが圧巻です。',
    descriptionKo:
      '푸른 인도양 위 200미터 높이로 솟아오른 켈링킹 비치의 시그니처 카르스트 절벽. 수억 년의 파도가 빚어낸 거대한 공룡 형상의 장관.',
    start: 0.0,
    end: 0.22,
    depth: '+200 M',
    frameRange: '001 – 095',
    arrowText: 'Gulir untuk menuruni tebing',
    arrowTextJa: 'スクロールして崖を下る',
    arrowTextKo: '스크롤하여 절벽을 따라 내려가기',
    cardPos: 'bottom-left',
  },
  {
    id: 'spine-trail',
    shortLabel: 'The Spine',
    tag: 'BABAK 02 · JALUR TANGGA BAMBU PELESAP',
    tagJa: '第2章 · 断崖の背骨トレイル',
    tagKo: '제2막 · 바위 능선 트레킹',
    title: 'The Sacred Spine Descent',
    titleId: 'Meniti Jalur Punggung Karst',
    titleZh: '天梯绝壁脊线探险',
    titleJa: '神聖なる尾根のトレッキング',
    titleKo: '스릴 넘치는 절벽 능선 하강',
    description:
      'Traverse the narrow limestone backbone guided by handcrafted bamboo rails. A thrilling cliffside descent with 360-degree vistas of turquoise swells crashing against limestone amphitheaters.',
    descriptionId:
      'Melintasi punggung tebing kapur yang sempit dengan pegangan bambu tradisional. Pengalaman mendebarkan dengan panorama 360 derajat samudra toska yang memukau.',
    descriptionZh:
      '踏上由手工竹木栈道引导的狭窄石灰岩脊梁，在悬崖两翼俯瞰翻滚的蔚蓝波涛，体验步步惊心而心旷神怡的徒步之旅。',
    descriptionJa:
      '伝統的な竹の手すりが導く険しい石灰岩の尾根を進む。足元に広がるターコイズブルーの波濤と360度の絶景パノラマ。',
    descriptionKo:
      '전통 대나무 난간을 따라 이어지는 좁은 석회암 척추 능선 트레일. 발아래 펼쳐지는 터콰이즈빛 파도와 360도 압도적 파노라마.',
    start: 0.22,
    end: 0.45,
    depth: '+120 M',
    frameRange: '096 – 190',
    arrowText: 'Lanjut mendekati bibir pantai',
    arrowTextJa: '白砂の入り江へ向かう',
    arrowTextKo: '백사장 해안으로 더 깊이 하강하기',
    cardPos: 'top-right',
  },
  {
    id: 'pristine-sand',
    shortLabel: 'White Shore',
    tag: 'BABAK 03 · KILAU PASIR PUTIH VIRGIN',
    tagJa: '第3章 · 手つかずの純白ビーチ',
    tagKo: '제3막 · 비밀스러운 순백의 백사장',
    title: 'Hidden White Sand Haven',
    titleId: 'Surga Pasir Putih Tersembunyi',
    titleZh: '隐秘纯白沙滩秘境',
    titleJa: 'エメラルドの孤高ビーチ',
    titleKo: '숨겨진 파라다이스 백사장',
    description:
      'Arrive at the untouched white sand cove at the base of the towering cliffs. Feel the immense power of rolling emerald waves meeting pure coastal serenity in complete isolation.',
    descriptionId:
      'Tiba di hamparan pasir putih bersih di dasar tebing karang raksasa. Rasakan kedamaian alami yang syahdu ditemani deburan ombak zamrud yang megah.',
    descriptionZh:
      '抵达悬崖脚下未受尘世打扰的纯白沙滩。巨大的翡翠色海浪在此拍击石壁，带来极致原始的大自然震撼与宁静。',
    descriptionJa:
      'そびえ立つ断崖の麓に広がる、手つかずの白砂のビーチ。エメラルド色の波が打ち寄せる、完全な静寂と自然の力強さ。',
    descriptionKo:
      '거대한 절벽 아래 숨겨진 순백의 모래사장. 에메랄드빛 파도가 부서지는 원초적 자연의 웅장함과 고요함을 온몸으로 느껴보세요.',
    start: 0.45,
    end: 0.68,
    depth: '+20 M',
    frameRange: '191 – 285',
    arrowText: 'Eksplorasi ekosistem tebing laut',
    arrowTextJa: '海洋断崖生態系を探索する',
    arrowTextKo: '해안 절벽 생태계 살펴보기',
    cardPos: 'bottom-left',
  },
  {
    id: 'karst-amphitheater',
    shortLabel: 'Amphitheater',
    tag: 'BABAK 04 · AMFITEATER TEBING LAUT',
    tagJa: '第4章 · 紺碧の岩壁円形劇場',
    tagKo: '제4막 · 대자연의 석회암 원형극장',
    title: 'Karst Geological Amphitheater',
    titleId: 'Amfiteater Batu Karst Megah',
    titleZh: '天然喀斯特岩壁剧场',
    titleJa: '自然が創り出した巨大岩壁',
    titleKo: '자연이 빚은 석회암 암벽 극장',
    description:
      'Towering vertical walls of ancient marine fossils and endemic flora stand resilient against the southern ocean. A protected sanctuary of untouched biodiversity and pristine geology.',
    descriptionId:
      'Dinding vertikal megah yang tersusun dari fosil purba dan flora endemik kokoh menghadapi samudra selatan. Suaka yang dilindungi untuk keanekaragaman hayati dan keasrian geologi.',
    descriptionZh:
      '高耸垂直的古老石灰岩壁蕴藏着海洋化石与特有植被，在南印度洋的狂浪前屹立不倒，构成珍贵的地质宝库。',
    descriptionJa:
      '古代の海洋化石と固有の植物が息づく垂直の石灰岩壁。南の海に面して悠久の時を刻み続ける、守られた自然のサンクチュアリ。',
    descriptionKo:
      '고대 해양 화석과 자생 식물이 어우러진 수직 석회암 암벽. 거친 남인도양의 파도에 맞서 태고의 생태를 보존해 온 자연 보호구역.',
    start: 0.68,
    end: 0.88,
    depth: '0 M',
    frameRange: '286 – 375',
    arrowText: 'Saksikan keajaiban senja samudra',
    arrowTextJa: '夕陽が染める壮大なフィナーレへ',
    arrowTextKo: '황금빛 노을 파노라마 감상하기',
    cardPos: 'top-right',
  },
  {
    id: 'golden-sunset',
    shortLabel: 'Golden Hour',
    tag: 'BABAK 05 · KEMEGAHAN SENJA SAMUDRA',
    tagJa: '第5章 · 黄金色に染まる水平線',
    tagKo: '제5막 · 황금빛 노을과 대서사시',
    title: 'Golden Sunset Horizon',
    titleId: 'Pesona Senja Keemasan',
    titleZh: '落日熔金悬崖晚霞',
    titleJa: 'インド洋に沈む黄金の夕日',
    titleKo: '인도양의 황금빛 석양과 지평선',
    description:
      'As dusk falls, golden rays bathe the T-Rex head and surrounding turquoise waters in breathtaking amber light, capping an unforgettable voyage to Nusa Penida’s most legendary icon.',
    descriptionId:
      'Kala senja tiba, sinar keemasan menyelimuti kepala T-Rex dan perairan toska di sekelilingnya dengan kilau jingga magis, menyempurnakan perjalanan legendaris di Nusa Penida.',
    descriptionZh:
      '日暮时分，金色余晖洒在神龙探海的崖头与浩瀚海面上，泛起层层琥珀色波光，为这段传奇的海岛探索画上完美的终章。',
    descriptionJa:
      '夕暮れ時、黄金の光がティラノサウルスの岩頭と波打ち際を琥珀色に染め上げる。ヌサペニダ最大の象徴が魅せる最高の黄昏。',
    descriptionKo:
      '해 질 녘, 황금빛 노을빛이 T-Rex 절벽과 에메랄드 바다를 영롱한 호박색으로 물들이며 누사 페니다 최고의 잊지 못할 여정을 완성합니다.',
    start: 0.88,
    end: 1.0,
    depth: '+200 M',
    frameRange: '376 – 425',
    arrowText: 'Jelajahi paket ekspedisi & photobooth',
    arrowTextJa: 'ツアーパッケージとフォトブースへ',
    arrowTextKo: '트레킹 패키지 & 포토부스 둘러보기',
    cardPos: 'bottom-left',
  },
];

export function getKelingkingChapterForProgress(progress) {
  const p = Math.max(0, Math.min(1, progress));
  const chapter = KELINGKING_CHAPTERS.find((ch) => p >= ch.start && p <= ch.end);
  return chapter || KELINGKING_CHAPTERS[KELINGKING_CHAPTERS.length - 1];
}
