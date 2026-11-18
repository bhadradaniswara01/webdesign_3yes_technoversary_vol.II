import { useEffect, useRef, useState } from 'react';

const PLANNER_TEXTS = {
  en: {
    eyebrow: 'BESPOKE NUSA PENIDA EXPEDITIONS',
    h1Line1: 'Days, maps, routes & changes —',
    h1Line2: 'handcrafted by our island team, live and customizable.',
    copySuccess: 'Private itinerary copied to clipboard!',
    cards: {
      safe: {
        eyebrow: 'UNCOMPROMISED SAFETY',
        title: "If ocean tides shift or schedules change, our private concierge is on the ground with you.",
        chip: '24/7 Island Concierge · Dedicated Rescue Speedboat · Comprehensive Marine Insurance',
      },
      phone: {
        eyebrow: 'TRAVELER FAVORITE',
        title: 'Your personalized route, synced live to your pocket.',
        destTitle: 'Nusa Penida · 3D2N Luxury Escape',
        weather: '29°C Clear Skies · Swell 0.8m (Calm Waters)',
        trending: 'Chosen by 3,840+ discerning travelers this season.',
        usedCount: '3.8k+ verified travelers',
        btnCopy: 'Copy Itinerary',
        day1: '07:30 · VIP Fast Boat from Sanur Lounge',
        day2: '09:00 · Private Speedboat Manta Ray Pelagic Safari',
        day3: '16:00 · Kelingking T-Rex Secret Clifftop Sunset',
      },
      road: {
        eyebrow: 'CURATED TRAILWAYS',
        title: 'From sunrise cliff treks to secret sunset tidal pools.',
        wp1Title: 'Sanur VIP Harbor Pier',
        wp1Sub: 'Expedited express boarding without harbor queues',
        wp2Title: 'Peguyangan Blue Staircase',
        wp2Sub: 'Sacred coastal waterfall cascading into the ocean',
        wp3Title: 'Kelingking T-Rex Ridge',
        wp3Sub: 'Exclusive crowd-free panoramic cliff viewpoints',
        wp4Title: 'Diamond Beach Lagoon',
        wp4Sub: 'Untouched white sands & turquoise karst amphitheater',
      },
      fleet: {
        eyebrow: 'PREMIUM GROUND & SEA FLEET',
        title: 'Traverse limestone ridges and open swells in absolute comfort.',
        tag: 'AIR-CONDITIONED 4X4 SUV & SPEEDBOAT',
        desc: 'Escape cramped public vans. Our private Toyota Fortuner 4WD fleet and licensed island chauffeurs navigate Penida’s winding roads with ease, stocked with chilled mineral water and cold scented towels.',
        spec1: 'Private Toyota 4WD SUV',
        spec2: 'Dedicated Charter Speedboat',
      },
      culinary: {
        eyebrow: 'CLIFFTOP ARTISAN DINING',
        title: 'Wild-caught ocean catches grilled over coconut embers under the stars.',
        tag: 'OCEANFRONT SUNSET FEASTS',
        desc: 'Dine privately on panoramic cliffs overlooking Broken Beach. Savor fresh snapper seasoned with authentic Balinese sea salt and hand-ground sambal matah, paired with organic tropical fruit platters.',
        spec1: 'Wild Red Snapper BBQ',
        spec2: 'Organic Clifftop Table',
      },
      cinema: {
        eyebrow: 'CINEMATIC TRAVEL ARCHIVE',
        title: 'Return home with color-graded 4K drone reels & underwater footage.',
        tag: 'DEDICATED VISUAL STORYTELLER',
        desc: 'A professional videographer accompanies your key excursions with a DJI 4K drone and GoPro underwater rig, delivering ready-to-share social reels directly to your phone every evening.',
        spec1: 'DJI 4K Aerial Coverage',
        spec2: 'RAW 4K Manta Footage',
      },
    },
  },
  id: {
    eyebrow: 'EKSPEDISI EKSKLUSIF NUSA PENIDA',
    h1Line1: 'Hari, peta, rute, dan fleksibilitas —',
    h1Line2: 'dirancang langsung oleh tim lokal kami, adaptif & real-time.',
    copySuccess: 'Rute perjalanan privat berhasil disalin!',
    cards: {
      safe: {
        eyebrow: 'KEAMANAN & KENYAMANAN TOTAL',
        title: 'Jika cuaca berubah atau Anda butuh penyesuaian rute, tim privat kami mendampingi langsung di lokasi.',
        chip: 'Pendamping Lokal 24 Jam · Speedboat Siaga Darurat · Asuransi Lengkap',
      },
      phone: {
        eyebrow: 'PILIHAN FAVORIT WISATAWAN',
        title: 'Itinerari personal Anda, tersinkronisasi langsung di genggaman.',
        destTitle: 'Nusa Penida · 3H2M Luxury Escape',
        weather: '29°C Cerah Berawan · Ombak 0.8m (Tenang)',
        trending: 'Dipilih lebih dari 3.840 wisatawan mancanegara musim ini.',
        usedCount: '3.8k+ wisatawan terverifikasi',
        btnCopy: 'Salin Itinerari',
        day1: '07:30 · Fast Boat VIP dari Lounge Khusus Sanur',
        day2: '09:00 · Safari Pari Manta dengan Speedboat Privat',
        day3: '16:00 · Sunset Spektakuler Tebing Rahasia Kelingking',
      },
      road: {
        eyebrow: 'RUTE PILIHAN TERBAIK',
        title: 'Menyusuri keindahan tebing terbit fajar hingga laguna senja.',
        wp1Title: 'Dermaga VIP Pelabuhan Sanur',
        wp1Sub: 'Akses jalur cepat tanpa antrean umum pelabuhan',
        wp2Title: 'Air Terjun Tangga Biru Peguyangan',
        wp2Sub: 'Mata air alami tebing karst yang bermuara ke laut lepas',
        wp3Title: 'Tanjung Karang T-Rex Kelingking',
        wp3Sub: 'Spot panorama eksklusif bebas kerumunan wisatawan umum',
        wp4Title: 'Laguna Karst Pantai Diamond',
        wp4Sub: 'Pasir putih bersih berpagar tebing kapur menjulang tinggi',
      },
      fleet: {
        eyebrow: 'ARMADA DARAT & LAUT KELAS UTAMA',
        title: 'Lintasi medan berbukit karst dan selat laut dalam kenyamanan prima.',
        tag: 'SUV 4X4 AC PRIVAT & SPEEDBOAT EKSKLUSIF',
        desc: 'Hindari minibus sempit. Armada Toyota Fortuner 4WD privat kami bersama pengemudi lokal berpengalaman melintasi jalanan pulau dengan tenang, dilengkapi air mineral dingin dan handuk beraroma segar.',
        spec1: 'Toyota 4WD SUV Privat',
        spec2: 'Charter Speedboat Khusus',
      },
      culinary: {
        eyebrow: 'KULINER PANORAMA TEBING LAUT',
        title: 'Ikan laut segar beraroma sabut kelapa di bawah bentangan langit senja.',
        tag: 'SANTAPAN SEAFOOD TEPI JURANG',
        desc: 'Makan malam privat di tebing karang berlatar pemandangan Broken Beach. Nikmati ikan kakap merah segar dengan garam laut Kusamba dan sambal matah otentik, disajikan bersama buah tropis organik.',
        spec1: 'Ikan Bakar Sambal Matah',
        spec2: 'Meja Privat Tepi Laut',
      },
      cinema: {
        eyebrow: 'DOKUMENTASI KELAS SINEMA',
        title: 'Abadikan petualangan Anda dalam rekaman drone 4K & video bawah laut.',
        tag: 'KREATOR KONTEN PRIBADI',
        desc: 'Videografer profesional menemani titik-titik terbaik perjalanan Anda dengan drone DJI 4K dan rig underwater GoPro, menghasilkan video reels siap tayang yang dikirim ke ponsel Anda setiap malam.',
        spec1: 'Video Udara Drone DJI 4K',
        spec2: 'Rekaman Manta Underwater',
      },
    },
  },
  zh: {
    eyebrow: '努沙佩尼达高定私享探险',
    h1Line1: '日程、全景航线、动态时刻 —',
    h1Line2: '在地专属团队量身精研，随行随需灵活调整。',
    copySuccess: '专属行程已成功复制至剪贴板！',
    cards: {
      safe: {
        eyebrow: '全程尊享安全保障',
        title: '无论潮汐变化或行程微调，在地管家团队始终在现场为您从容护航。',
        chip: '24小时在地私人管家 · 专属应急快艇备勤 · 全险覆盖',
      },
      phone: {
        eyebrow: '年度口碑之选',
        title: '您的专属海岛航线，实时同步于掌心。',
        destTitle: '努沙佩尼达 · 3天2晚奢享之旅',
        weather: '29°C 碧空如洗 · 海浪0.8米（水况平缓）',
        trending: '本季已有3840+位高端旅行者选择此路线。',
        usedCount: '3.8k+ 真实旅人见证',
        btnCopy: '复制行程',
        day1: '07:30 · 萨努尔贵宾休息室VIP通道快艇',
        day2: '09:00 · 独立包船蝠鲼海域深潜与浮潜',
        day3: '16:00 · 精灵坠崖私密观景台静候晚霞',
      },
      road: {
        eyebrow: '经典人文自然动线',
        title: '从晨曦微露的绝壁古径，漫步至落日余晖的翡翠浪湾。',
        wp1Title: '萨努尔港VIP专属泊位',
        wp1Sub: '免排队专属登船通道，从容启程',
        wp2Title: '佩古扬甘蓝梯绝壁瀑布',
        wp2Sub: '悬崖峭壁间的神圣天然淡水泉眼',
        wp3Title: '霸王龙海崖私享视角',
        wp3Sub: '避开拥挤人潮的绝佳悬崖全景机位',
        wp4Title: '钻石海滩纯白礁石湾',
        wp4Sub: '悬崖石梯与如水晶般透亮的碧蓝海水',
      },
      fleet: {
        eyebrow: '全地形四驱越野与私享快艇',
        title: '稳健穿行喀斯特山岭与蔚蓝海域，尽享从容舒适。',
        tag: '专属空调四驱越野SUV与包船快艇',
        desc: '拒绝拥挤颠簸的普通客货车。精选全空调丰田Fortuner四驱越野车队，由经验丰富的本地专职向导驾驶，车内常备冰镇依云矿泉水与精油冷毛巾。',
        spec1: '私享丰田四驱越野车',
        spec2: '包船独立游艇快艇',
      },
      culinary: {
        eyebrow: '崖畔私厨炭火晚宴',
        title: '星空之下，椰壳炭火慢烤当日现捞野生海鱼。',
        tag: '悬崖全海景日落烧烤',
        desc: '坐拥天仙裂痕海拱绝景。主厨选用巴厘岛库桑巴天然海盐与传统手工鲜石臼辣酱，佐以有机热带果盘与精选佳酿，尊享非凡味蕾盛宴。',
        spec1: '野生红鲷鱼椰壳炭烤',
        spec2: '私享崖畔日落观景席',
      },
      cinema: {
        eyebrow: '电影级旅途影像档案',
        title: '无人机高空俯瞰与水下生灵互动，悉数定格为4K传世影像。',
        tag: '专属影像创作者全程随行',
        desc: '专业摄影师配备大疆4K航拍无人机与GoPro水下设备，捕捉悬崖徒步与蝠鲼同游的震撼瞬间，当晚将电影级专业调色短视频直传至您的手机。',
        spec1: '大疆4K高空航拍视角',
        spec2: '水下蝠鲼原画质慢动作',
      },
    },
  },
  ja: {
    eyebrow: 'ヌサペニダ オーダーメイド探検',
    h1Line1: '日程、マップ、ルート、そして柔軟な変更 —',
    h1Line2: '島を知り尽くしたチームが紡ぐ、リアルタイムに調整可能な極上プラン。',
    copySuccess: 'プライベート旅程をコピーしました！',
    cards: {
      safe: {
        eyebrow: '万全のセーフティ＆エスコート',
        title: '潮の満ち引きや急なプラン変更にも、現地専属コンシェルジュが即座に対応します。',
        chip: '24時間現地エスコート · 緊急ボート常時待機 · 万全の保険付帯',
      },
      phone: {
        eyebrow: '旅行者が絶賛する人気ルート',
        title: 'あなただけのカスタム旅程を、常に手のひらの中に。',
        destTitle: 'ヌサペニダ · 2泊3日 ラグジュアリーエスケープ',
        weather: '29°C 快晴 · 波高0.8m（穏やかな海況）',
        trending: '今シーズン3,840名以上の旅人に選ばれた鉄板ルート。',
        usedCount: '3.8k+ 認定トラベラー',
        btnCopy: '旅程をコピー',
        day1: '07:30 · サヌール専用ラウンジからVIP高速船',
        day2: '09:00 · チャーターボートでマンタサファリ',
        day3: '16:00 · クリンキン秘境サンセット観賞',
      },
      road: {
        eyebrow: '厳選されたアイランドロード',
        title: '朝陽に染まる断崖トレイルから、夕暮れのシークレットタイダルプールまで。',
        wp1Title: 'サヌール港 VIP専用ピア',
        wp1Sub: '混雑する一般列を避けたスムーズな優先乗船',
        wp2Title: 'ペグヤンガン青い階段滝',
        wp2Sub: '断崖を流れ落ち海へと注ぐ神秘の天然湧水',
        wp3Title: 'クリンキン T-Rex 崖上展望台',
        wp3Sub: '一般客のいない特別なパノラマビューポイント',
        wp4Title: 'ダイヤモンドビーチの秘境ラグーン',
        wp4Sub: 'そびえ立つ石灰岩の絶壁に抱かれた白砂の渚',
      },
      fleet: {
        eyebrow: '最上級の陸上＆海上フリート',
        title: 'カルストの稜線と外洋のうねりを、極上の快適さで走破。',
        tag: '専用4WDエアコンSUV＆チャーター高速船',
        desc: '窮屈な乗合バンとは無縁。島の険しい道を知り尽くした専属ドライバーが運転するトヨタ フォーチュナー4WDで、冷たいお水とおしぼりを完備。',
        spec1: '専用トヨタ 4WD SUV',
        spec2: 'チャーター高速ボート',
      },
      culinary: {
        eyebrow: '絶景崖上のアルチザンディナー',
        title: '満天の星空の下、ヤシ殻の炭火で香ばしく焼き上げる極上シーフード。',
        tag: 'サンセット・シーフードバーベキュー',
        desc: 'ブロークンビーチを一望する崖上特等席。新鮮な真鯛をクサンバの天然海塩と手仕込みのサンバルマタで焼き上げ、南国オーガニックフルーツと共に。',
        spec1: '天然真鯛の炭火グリル',
        spec2: '海沿いプライベートテーブル',
      },
      cinema: {
        eyebrow: '映画のようなシネマティック記録',
        title: '4Kドローン空撮と水中マンタ動画で、一生色褪せない記憶を記録。',
        tag: '専属クリエイター同行撮影',
        desc: 'プロの映像作家がDJI 4Kドローンと水中GoProで同行。断崖の絶景とマンタとの遊泳を捉え、SNSにそのまま投稿できるカラーグレーディング済み動画を毎晩お届け。',
        spec1: 'DJI 4K 絶景ドローン空撮',
        spec2: '4K水中マンタ遊泳映像',
      },
    },
  },
  ko: {
    eyebrow: '누사 페니다 비스포크 익스페디션',
    h1Line1: '일정, 지도, 동선, 그리고 자유로운 맞춤 —',
    h1Line2: '섬 현지 전문가 팀이 설계한 실시간 맞춤형 럭셔리 투어.',
    copySuccess: '프라이빗 투어 일정이 복사되었습니다!',
    cards: {
      safe: {
        eyebrow: '완벽한 안전과 프라이빗 케어',
        title: '바다 조류가 바뀌거나 일정이 조정되어도, 전담 현지 팀이 현장에서 직접 동행합니다.',
        chip: '24시간 로컬 컨시어지 · 긴급 구조 보트 상시 대기 · 전액 종합보험',
      },
      phone: {
        eyebrow: '여행자 만족도 1위 코스',
        title: '나만을 위한 맞춤 일정이 주머니 속 스마트폰에 실시간 연동.',
        destTitle: '누사 페니다 · 2박3일 럭셔리 이스케이프',
        weather: '29°C 맑음 · 파고 0.8m (매우 잔잔함)',
        trending: '이번 시즌 3,840명 이상의 VIP 여행자가 선택했습니다.',
        usedCount: '3.8k+ 인증 여행자',
        btnCopy: '일정 복사하기',
        day1: '07:30 · 사누르 전용 라운지에서 VIP 패스트보트 탑승',
        day2: '09:00 · 단독 대절 보트로 야생 만타가오리 사파리',
        day3: '16:00 · 켈링킹 비밀 절벽에서 맞이하는 일몰 파노라마',
      },
      road: {
        eyebrow: '엄선된 시그니처 로드맵',
        title: '새벽빛 절벽 트레킹부터 비밀스러운 에메랄드 조수 웅덩이까지.',
        wp1Title: '사누르 항구 VIP 전용 부두',
        wp1Sub: '혼잡한 대기열 없는 프리미엄 익스프레스 승선',
        wp2Title: '페구양간 파란 계단 해안 폭포',
        wp2Sub: '수직 절벽을 타고 바다로 떨어지는 신비로운 천연 용천수',
        wp3Title: '켈링킹 티라노 능선 시크릿 뷰',
        wp3Sub: '일반 인파를 벗어난 프라이빗 절벽 파노라마 스팟',
        wp4Title: '다이아몬드 비치 카르스트 라군',
        wp4Sub: '순백의 백사장과 보석처럼 투명한 에메랄드빛 바다',
      },
      fleet: {
        eyebrow: '최고급 육상 & 해상 전용 이동',
        title: '험준한 석회암 능선과 푸른 해역을 최고의 안락함으로 주파.',
        tag: '프라이빗 4X4 SUV & 단독 대절 보트',
        desc: '비좁은 대중 밴을 피하세요. 섬의 절벽 도로를 완벽하게 숙지한 전문 운전기사가 전용 도요타 포추너 4WD SUV로 모시며, 시원한 생수와 향기로운 냉타월을 상시 제공합니다.',
        spec1: '프라이빗 도요타 4WD SUV',
        spec2: '단독 전용 차터 보트',
      },
      culinary: {
        eyebrow: '절벽 위 프라이빗 고메 다이닝',
        title: '쏟아지는 은하수 아래, 코코넛 숯불에 구워내는 자연산 해산물 만찬.',
        tag: '선셋 오션뷰 해산물 바비큐',
        desc: '브로큰 비치가 한눈에 내려다보이는 특등석 절벽 테이블. 쿠삼바 천연 바다 소금과 전통 삼발 마타 소스로 맛을 낸 신선한 붉은 돔 구이와 유기농 열대 과일 플래터를 즐겨보세요.',
        spec1: '자연산 붉은 돔 숯불구이',
        spec2: '단독 오션뷰 프라이빗 테이블',
      },
      cinema: {
        eyebrow: '시네마틱 여행 영상 아카이브',
        title: '4K 드론 항공뷰와 수중 만타 가오리와의 교감을 한 편의 영화처럼.',
        tag: '전담 영상 크리에이터 전일정 동행',
        desc: '전문 촬영 감독이 DJI 4K 드론과 수중 고프로 장비로 여정의 하이라이트를 기록하며, 색보정이 완료된 SNS용 고화질 릴스 영상을 매일 저녁 스마트폰으로 전송해 드립니다.',
        spec1: 'DJI 4K 항공 드론 촬영',
        spec2: '4K 수중 만타 가오리 원본',
      },
    },
  },
};

export default function TripPlannerSection({ lang = 'en' }) {
  const t = PLANNER_TEXTS[lang] || PLANNER_TEXTS.en;
  const cardsTrackRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Continuous smooth auto-scroll: silky auto-glide that pauses on hover/touch
  useEffect(() => {
    let animId;
    let lastTime = performance.now();

    const step = (time) => {
      const dt = time - lastTime;
      lastTime = time;

      if (!isPaused && cardsTrackRef.current) {
        const track = cardsTrackRef.current;
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (maxScroll > 10) {
          // Speed: ~45px per second for smooth, readable auto-glide
          const delta = dt * 0.045;
          if (track.scrollLeft >= maxScroll - 1) {
            track.scrollLeft = 0;
          } else {
            track.scrollLeft += delta;
          }
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  const handleScrollLeft = () => {
    if (cardsTrackRef.current) {
      cardsTrackRef.current.scrollBy({ left: -390, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (cardsTrackRef.current) {
      cardsTrackRef.current.scrollBy({ left: 390, behavior: 'smooth' });
    }
  };

  const handleCopyTrip = () => {
    const textToCopy = `🏝️ NUSA PENIDA BESPOKE EXPEDITION ITINERARY:\n• Day 1: VIP Sanur Harbor Fast Boat & Crystal Bay Coral Reefs\n• Day 2: Private Speedboat Manta Ray Safari & Broken Beach Karst Arch\n• Day 3: Kelingking T-Rex Ridge & Diamond Beach Sunrise Staircase\nCurated by Nusa Penida Explorer.`;
    navigator.clipboard?.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2600);
  };

  return (
    <section className="planner-section" id="planner">
      <div className="planner-container">
        {/* Header Bar */}
        <div className="planner-header reveal-header">
          <div className="planner-header__left">
            <span className="planner-eyebrow">{t.eyebrow}</span>
            <h2 className="planner-title">
              <span className="planner-title__line1">{t.h1Line1}</span>
              <br />
              <span className="planner-title__line2">{t.h1Line2}</span>
            </h2>
          </div>

          <div className="planner-header__nav">
            <button
              type="button"
              className="planner-nav-btn"
              onClick={handleScrollLeft}
              aria-label="Previous card"
            >
              ‹
            </button>
            <button
              type="button"
              className="planner-nav-btn"
              onClick={handleScrollRight}
              aria-label="Next card"
            >
              ›
            </button>
          </div>
        </div>

        {/* 6 Cards Track / Auto-Scrolling Carousel */}
        <div
          className="planner-track reveal-stagger"
          ref={cardsTrackRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* CARD 1: Safe the whole way — Deep Coastal Gradient with Shield */}
          <div className="planner-card reveal-card planner-card--gradient">
            <div className="planner-card__header">
              <span className="planner-card__eyebrow planner-card__eyebrow--light">{t.cards.safe.eyebrow}</span>
              <h3 className="planner-card__headline planner-card__headline--light">{t.cards.safe.title}</h3>
            </div>

            <div className="planner-card__shield-center">
              <div className="planner-card__shield-icon-wrap">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div className="planner-card__shield-pill">
                <span>{t.cards.safe.chip}</span>
              </div>
            </div>
          </div>

          {/* CARD 2: Loved by travelers — Clean iPhone Mockup (No cheap emojis) */}
          <div className="planner-card reveal-card planner-card--phone">
            <div className="planner-card__header">
              <span className="planner-card__eyebrow">{t.cards.phone.eyebrow}</span>
              <h3 className="planner-card__headline">{t.cards.phone.title}</h3>
            </div>

            {/* iPhone Device Mockup */}
            <div className="planner-phone-frame">
              {/* Dynamic Island Notch */}
              <div className="planner-phone-island">
                <div className="planner-phone-camera" />
              </div>

              {/* Status Bar */}
              <div className="planner-phone-status">
                <span className="planner-phone-time">9:41</span>
                <div className="planner-phone-icons">
                  <span className="planner-phone-network">5G</span>
                  <div className="planner-phone-battery">
                    <div className="planner-phone-battery-fill" />
                  </div>
                </div>
              </div>

              {/* Phone App Content */}
              <div className="planner-phone-content">
                {/* App Screen Banner */}
                <div className="planner-phone-banner">
                  <img
                    src="/images/foto tambahan/kelingking.jpeg"
                    alt="Nusa Penida Kelingking App View"
                    className="planner-phone-banner-img"
                  />
                  <div className="planner-phone-nav-overlay">
                    <span className="planner-phone-nav-btn">‹</span>
                    <span className="planner-phone-nav-btn">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </span>
                  </div>
                </div>

                {/* App Info Body */}
                <div className="planner-phone-body">
                  <div className="planner-phone-dest-row">
                    <h4 className="planner-phone-dest-title">{t.cards.phone.destTitle}</h4>
                    <span className="planner-phone-weather">{t.cards.phone.weather}</span>
                  </div>

                  {/* Timeline Items */}
                  <div className="planner-phone-timeline">
                    <div className="planner-phone-timeline-item">
                      <span className="planner-phone-dot" />
                      <span className="planner-phone-schedule">{t.cards.phone.day1}</span>
                    </div>
                    <div className="planner-phone-timeline-item">
                      <span className="planner-phone-dot" />
                      <span className="planner-phone-schedule">{t.cards.phone.day2}</span>
                    </div>
                    <div className="planner-phone-timeline-item">
                      <span className="planner-phone-dot" />
                      <span className="planner-phone-schedule">{t.cards.phone.day3}</span>
                    </div>
                  </div>
                </div>

                {/* Floating Social Proof Card on Phone (Clean Minimalist UI) */}
                <div className="planner-phone-overlay-card">
                  <div className="planner-phone-overlay-top">
                    <div className="planner-phone-avatars">
                      <div className="planner-avatar-circle planner-avatar-circle--1">NP</div>
                      <div className="planner-avatar-circle planner-avatar-circle--2">EX</div>
                      <div className="planner-avatar-circle planner-avatar-circle--3">VIP</div>
                      <span className="planner-avatar--count">{t.cards.phone.usedCount}</span>
                    </div>
                  </div>
                  <p className="planner-phone-trending">{t.cards.phone.trending}</p>
                  <div className="planner-phone-actions">
                    <button
                      type="button"
                      className="planner-phone-btn-copy"
                      onClick={handleCopyTrip}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                      </svg>
                      <span>{copied ? '✓ Copied' : t.cards.phone.btnCopy}</span>
                    </button>
                    <a
                      href="https://wa.me/?text=Hello%20Nusa%20Penida%20Private%20Tour!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="planner-phone-icon-btn"
                      aria-label="Contact Concierge"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3: Curated Trailways — Road with Clean Numbered Milestones (No Neon Dots) */}
          <div className="planner-card reveal-card planner-card--road">
            <img
              src="/images/foto tambahan/diamond.jpeg"
              alt="Coastal road leading to Diamond Beach"
              className="planner-card__road-img"
            />
            <div className="planner-card__road-overlay" />

            <div className="planner-card__header planner-card__header--road">
              <span className="planner-card__eyebrow planner-card__eyebrow--light">{t.cards.road.eyebrow}</span>
              <h3 className="planner-card__headline planner-card__headline--light">{t.cards.road.title}</h3>
            </div>

            {/* Clean Numbered Milestones */}
            <div className="planner-card__waypoints">
              <div className="planner-waypoint">
                <span className="planner-waypoint__num">01</span>
                <div className="planner-waypoint__content">
                  <span className="planner-waypoint__title">{t.cards.road.wp1Title}</span>
                  <span className="planner-waypoint__sub">{t.cards.road.wp1Sub}</span>
                </div>
              </div>
              <div className="planner-waypoint">
                <span className="planner-waypoint__num">02</span>
                <div className="planner-waypoint__content">
                  <span className="planner-waypoint__title">{t.cards.road.wp2Title}</span>
                  <span className="planner-waypoint__sub">{t.cards.road.wp2Sub}</span>
                </div>
              </div>
              <div className="planner-waypoint">
                <span className="planner-waypoint__num">03</span>
                <div className="planner-waypoint__content">
                  <span className="planner-waypoint__title">{t.cards.road.wp3Title}</span>
                  <span className="planner-waypoint__sub">{t.cards.road.wp3Sub}</span>
                </div>
              </div>
              <div className="planner-waypoint">
                <span className="planner-waypoint__num">04</span>
                <div className="planner-waypoint__content">
                  <span className="planner-waypoint__title">{t.cards.road.wp4Title}</span>
                  <span className="planner-waypoint__sub">{t.cards.road.wp4Sub}</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 4: Premium Ground & Sea Fleet (Distinct Mobility Showcase) */}
          <div className="planner-card reveal-card planner-card--fleet">
            <div className="planner-fleet__header">
              <span className="planner-fleet__eyebrow">{t.cards.fleet.eyebrow}</span>
              <h3 className="planner-fleet__title">{t.cards.fleet.title}</h3>
            </div>

            <div className="planner-fleet__media">
              <img
                src="/images/foto tambahan/tebing bagus1.jpeg"
                alt="VIP Fleet across Nusa Penida"
                className="planner-fleet__img"
                loading="lazy"
              />
              <span className="planner-fleet__tag">{t.cards.fleet.tag}</span>
            </div>

            <p className="planner-fleet__desc">{t.cards.fleet.desc}</p>

            <div className="planner-fleet__specs">
              <div className="planner-fleet__spec-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>
                </svg>
                <span>{t.cards.fleet.spec1}</span>
              </div>
              <div className="planner-fleet__spec-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1"/><path d="M4 18 3 9l4-2 5 4h8l1 7H4z"/><path d="M12 7V3l4 3"/>
                </svg>
                <span>{t.cards.fleet.spec2}</span>
              </div>
            </div>
          </div>

          {/* CARD 5: Clifftop Artisan Dining (Distinct Dark Obsidian Clifftop Editorial) */}
          <div className="planner-card reveal-card planner-card--dining">
            <div className="planner-dining__media">
              <img
                src="/images/foto tambahan/tebing.jpeg"
                alt="Clifftop dining sunset glow"
                className="planner-dining__img"
                loading="lazy"
              />
              <div className="planner-dining__media-overlay" />
              <span className="planner-dining__eyebrow-badge">{t.cards.culinary.eyebrow}</span>
            </div>

            <div className="planner-dining__body">
              <h3 className="planner-dining__title">{t.cards.culinary.title}</h3>
              <p className="planner-dining__desc">{t.cards.culinary.desc}</p>
              <div className="planner-dining__tags">
                <span className="planner-dining__tag">{t.cards.culinary.spec1}</span>
                <span className="planner-dining__tag">{t.cards.culinary.spec2}</span>
              </div>
            </div>
          </div>

          {/* CARD 6: Cinematic Travel Archive (Distinct Technical Viewfinder Monitor) */}
          <div className="planner-card reveal-card planner-card--cinema-viewfinder">
            <div className="planner-cinema__screen">
              <img
                src="/images/foto tambahan/Nusa Penida Aerial Paradise.png"
                alt="Cinematic Nusa Penida Paradise"
                className="planner-cinema__img"
                loading="lazy"
              />
              <div className="planner-cinema__hud">
                <div className="planner-cinema__rec">
                  <span className="planner-cinema__rec-dot" />
                  <span>REC · 4K 60FPS</span>
                </div>
                <span className="planner-cinema__format">10-BIT RAW D-LOG</span>
              </div>
              <div className="planner-cinema__bracket planner-cinema__bracket--tl" />
              <div className="planner-cinema__bracket planner-cinema__bracket--tr" />
              <div className="planner-cinema__bracket planner-cinema__bracket--bl" />
              <div className="planner-cinema__bracket planner-cinema__bracket--br" />
            </div>

            <div className="planner-cinema__content">
              <span className="planner-cinema__eyebrow">{t.cards.cinema.eyebrow}</span>
              <h3 className="planner-cinema__title">{t.cards.cinema.title}</h3>
              <p className="planner-cinema__desc">{t.cards.cinema.desc}</p>
              <div className="planner-cinema__chips">
                <span className="planner-cinema__chip">{t.cards.cinema.spec1}</span>
                <span className="planner-cinema__chip">{t.cards.cinema.spec2}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
