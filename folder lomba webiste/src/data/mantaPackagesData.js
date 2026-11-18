/**
 * Data Paket Wisata, Edukasi Bahari, dan 6 Aturan Konservasi Manta Point
 * Mendukung 5 Bahasa: en, id, zh, ja, ko
 */

export const MANTA_PACKAGES_DATA = {
  en: {
    sectionTitle: 'How to get there',
    sectionEyebrow: 'PENIDA OCEAN EXPEDITIONS',
    fleetLink: 'Full fleet & private charters →',
    badge: 'ECO-CERTIFIED SAFARI',
    bookCta: 'Book Expedition',
    packages: [
      {
        id: 'fastboat-safari',
        category: 'Shared Eco-Fastboat',
        title: 'Manta Point Snorkeling Safari',
        image: '/images/foto tambahan/manta point.jpeg',
        specs: [
          { label: 'Guests', value: 'Max 12 Pax' },
          { label: 'Duration', value: '5 Hours (08:00 - 13:00)' },
          { label: 'Gear & Guide', value: 'Full Snorkel + GoPro' },
        ],
        price: 'From IDR 650,000',
        priceUnit: 'per guest',
      },
      {
        id: 'private-speedboat',
        category: 'Exclusive Speedboat Charter',
        title: 'Private Speedboat Charter & Discovery Dive',
        image: '/images/foto tambahan/menyelam.jpeg',
        specs: [
          { label: 'Guests', value: 'Up to 8 Guests' },
          { label: 'Vessel', value: 'Twin 250HP Fastboat' },
          { label: 'Staff', value: 'PADI Master + Ranger' },
        ],
        price: 'From IDR 3,200,000',
        priceUnit: 'per boat',
      },
      {
        id: 'luxury-catamaran',
        category: 'VIP Catamaran Cruise',
        title: 'Luxury Catamaran & Sunset Clifftop BBQ',
        image: '/images/foto tambahan/tebing bagus.jpeg',
        specs: [
          { label: 'Guests', value: 'Up to 16 Guests' },
          { label: 'Vessel', value: '18m Twin-Hull Deck' },
          { label: 'Inclusions', value: 'Chef BBQ + Drone 4K' },
        ],
        price: 'From IDR 6,800,000',
        priceUnit: 'per group',
      },
    ],
    education: {
      sectionEyebrow: 'MARINE BIOLOGY & CONSERVATION',
      sectionTitle: 'The Living Sanctuary of Manta Point',
      sectionSubtitle:
        'Discover the geological wonder, biological symbiosis, and zero-trace diving code of conduct in Nusa Penida’s most iconic marine sanctuary.',
      cards: [
        {
          id: 'cleaning-station',
          layout: 'text-left',
          badge: 'MARINE BIOLOGY · 8 – 12 METERS',
          title: 'The Natural Cleaning Station: Oceanic Spa of the Giants',
          desc: 'Manta Point is not merely a swimming route—it is an underwater biological sanctuary. On massive limestone boulders known as Cleaning Rock at 8 to 12 meters depth, giant reef manta rays (Mobula alfredi) hover peacefully as schools of cleaner wrasse remove skin parasites, dead tissue, and bacteria in a delicate, life-sustaining symbiosis.',
          highlights: [
            {
              title: '5.5-Meter Wingspan',
              detail: 'Gentle filter-feeders reaching 1.4 tons without poisonous stingers, gliding gracefully alongside divers.',
            },
            {
              title: 'High Spatial Intelligence',
              detail: 'Possessing the largest brain-to-body ratio among all fish, capable of recognizing divers and memorizing ocean routes.',
            },
            {
              title: 'Lombok Strait Upwelling',
              detail: 'Deep oceanic currents channel nutrient-rich zooplankton into the bay every morning, sustaining the giant mantas.',
            },
          ],
          image: '/images/foto tambahan/manta.jpeg',
          caption: 'Giant Reef Manta hovering over natural cleaning coral formation',
        },
        {
          id: 'ethical-code',
          layout: 'text-right',
          badge: 'GREEN FINS CODE OF CONDUCT · ZERO TRACE',
          title: 'Ethical Swimming Code: Diving with No Human Footprint',
          desc: 'Located inside the Nusa Penida Marine Protected Area (MPA), strict ecological protocols are enforced by local marine rangers. Respecting these boundaries ensures mantas remain calm, healthy, and continue breeding in their ancestral habitat.',
          highlights: [
            {
              title: 'Strict 3-Meter Buffer Zone',
              detail: 'Never chase, touch, or block a swimming manta. Touching damages their protective mucus coat, exposing them to lethal infections.',
            },
            {
              title: 'Zero Flash or Strobe Lighting',
              detail: 'Underwater camera flash can startle and temporarily blind mantas, triggering panic and driving them away from cleaning stations.',
            },
            {
              title: '100% Reef-Safe Sunscreen Required',
              detail: 'Chemical sunscreens containing oxybenzone or octinoxate are strictly prohibited to prevent coral bleaching and water toxicity.',
            },
          ],
          image: '/images/foto tambahan/terumbu karang.jpeg',
          caption: 'Zero-touch ethical observation in clear turquoise waters',
        },
        {
          id: 'oceanography',
          layout: 'text-left',
          badge: 'OCEANOGRAPHY & SEASONAL WINDOWS',
          title: 'Ocean Currents, Swells & the Golden Hours of Observation',
          desc: 'Facing the open Southern Indian Ocean, Manta Point’s water conditions are sculpted by the Indonesian Throughflow (Arlindo). Synchronizing your excursion with these tidal and seasonal rhythms unlocks unmatched underwater clarity and encounters.',
          highlights: [
            {
              title: 'Golden Morning Window (07:00 – 10:30)',
              detail: 'Calm morning seas and gentle swell before coastal winds rise, providing optimal snorkeling safety.',
            },
            {
              title: 'Crystal Visibility (May – November)',
              detail: 'Dry season yields visibility up to 25–30 meters with invigorating water temperatures around 22–26°C.',
            },
            {
              title: 'Mola-Mola Winter Sightings (July – October)',
              detail: 'Deep cold thermoclines bring the prehistoric Giant Sunfish (Mola Mola) up to the outer drop-off reef walls.',
            },
          ],
          image: '/images/foto tambahan/tebing bagus1.jpeg',
          caption: 'Sunlight rays penetrating the oceanic drop-off wall at Manta Point',
        },
      ],
    },
    rules: {
      sectionEyebrow: 'SANCTUARY PRESERVATION & CODE OF CONDUCT',
      sectionTitle: '6 Principles to Protect Manta Point Sanctuary',
      sectionSubtitle:
        'Giant mantas and living coral reefs are ancient oceanic treasures. Follow these 6 ecotourism conservation rules to ensure our marine ecosystem thrives.',
      items: [
        {
          id: 'zero-waste',
          iconType: 'trash',
          title: 'Zero Plastic & Marine Litter',
          desc: 'Pack out all garbage back to the mainland. Toxic microplastics can be ingested by filter-feeding mantas.',
        },
        {
          id: 'reef-safe',
          iconType: 'shield',
          title: '100% Reef-Safe Sunscreen Only',
          desc: 'Use non-nano mineral sunscreen free of oxybenzone & octinoxate to protect coral polyps from chemical bleaching.',
        },
        {
          id: 'no-touch',
          iconType: 'hand',
          title: 'Strict No-Touch Policy',
          desc: 'Never touch or ride a manta. Human skin oils erode their protective mucus coat, causing severe bacterial infections.',
        },
        {
          id: 'distance',
          iconType: 'distance',
          title: 'Keep a 3-Meter Safe Buffer',
          desc: 'Give mantas ample maneuvering space. Never block their swim path or circle them while they are on cleaning stations.',
        },
        {
          id: 'no-flash',
          iconType: 'flash',
          title: 'No Camera Flash or Strobes',
          desc: 'Underwater flashes can blind and disorient mantas, causing them acute stress and forcing them to abandon the bay.',
        },
        {
          id: 'fin-control',
          iconType: 'coral',
          title: 'Mind Your Fins & Living Coral',
          desc: 'Maintain neutral buoyancy at all times. Accidental fin kicks can fracture limestone corals that took decades to form.',
        },
      ],
    },
    backToMap: '← Back to Island Map',
    bookConcierge: 'Inquire via Concierge WhatsApp',
  },

  id: {
    sectionTitle: 'Cara Menuju ke Sana & Paket Wisata',
    sectionEyebrow: 'EKSPEDISI BAHARI NUSA PENIDA',
    fleetLink: 'Semua armada & sewa privat →',
    badge: 'BERSERTIFIKASI ETIK & KONSERVASI',
    bookCta: 'Pesan Ekspedisi',
    packages: [
      {
        id: 'fastboat-safari',
        category: 'Shared Eco-Fastboat',
        title: 'Manta Point Snorkeling Safari',
        image: '/images/foto tambahan/manta point.jpeg',
        specs: [
          { label: 'Kapasitas', value: 'Maks. 12 Tamu' },
          { label: 'Durasi', value: '5 Jam (08:00 - 13:00)' },
          { label: 'Peralatan', value: 'Snorkel Lengkap + GoPro' },
        ],
        price: 'Mulai Rp 650.000',
        priceUnit: 'per orang',
      },
      {
        id: 'private-speedboat',
        category: 'Charter Speedboat Eksklusif',
        title: 'Private Speedboat Charter & Discovery Dive',
        image: '/images/foto tambahan/menyelam.jpeg',
        specs: [
          { label: 'Kapasitas', value: 'Hingga 8 Tamu' },
          { label: 'Armada', value: 'Twin 250HP Fastboat' },
          { label: 'Pendamping', value: 'PADI Master + Ranger' },
        ],
        price: 'Mulai Rp 3.200.000',
        priceUnit: 'per kapal',
      },
      {
        id: 'luxury-catamaran',
        category: 'VIP Catamaran Cruise',
        title: 'Luxury Catamaran & Sunset Clifftop BBQ',
        image: '/images/foto tambahan/tebing bagus.jpeg',
        specs: [
          { label: 'Kapasitas', value: 'Hingga 16 Tamu' },
          { label: 'Armada', value: '18m Dek Ganda Luas' },
          { label: 'Layanan', value: 'Chef BBQ + Drone 4K' },
        ],
        price: 'Mulai Rp 6.800.000',
        priceUnit: 'per grup',
      },
    ],
    education: {
      sectionEyebrow: 'BIOLOGI BAHARI & PELESTARIAN ALAM',
      sectionTitle: 'Mengenal Lebih Dekat Suaka Alami Pari Manta',
      sectionSubtitle:
        'Pelajari keajaiban biologis stasiun pembersih karang, ekosistem terumbu karang, serta kode etik menyelam ramah lingkungan di perairan Manta Point.',
      cards: [
        {
          id: 'cleaning-station',
          layout: 'text-left',
          badge: 'BIOLOGI BAHARI · KEDALAMAN 8 – 12 M',
          title: 'Stasiun Pembersih Karang: Spa Alami Para Raksasa Laut',
          desc: 'Manta Point bukan sekadar jalur renang, melainkan stasiun spa alami samudra. Di atas batuan karang karst raksasa (Cleaning Station Rock) di kedalaman 8 hingga 12 meter, kawanan pari manta karang (*Mobula alfredi*) melayang perlahan sementara ratusan ikan pembersih (*cleaner wrasse*) memakan parasit, jamur, dan kulit mati dari tubuh mereka secara simbiotik.',
          highlights: [
            {
              title: 'Bentang Sayap Hingga 5,5 Meter',
              detail: 'Satwa pemakan plankton yang jinak dengan bobot hingga 1,4 ton tanpa duri atau sengat beracun.',
            },
            {
              title: 'Kecerdasan Otak Luar Biasa',
              detail: 'Rasio otak terbesar di antara seluruh ikan bertulang rawan, memiliki memori navigasi dan kesadaran spasial tinggi.',
            },
            {
              title: 'Arus Upwelling Selat Lombok',
              detail: 'Arus laut dalam mengalirkan jutaan zooplankton bergizi tinggi ke perairan Manta Point setiap pagi.',
            },
          ],
          image: '/images/foto tambahan/manta.jpeg',
          caption: 'Pari Manta melayang di atas batu karang pembersih alami',
        },
        {
          id: 'ethical-code',
          layout: 'text-right',
          badge: 'KODE ETIK PENYELAMAN · ZERO TRACE',
          title: 'Protokol Berenang Etis: Menyelam Tanpa Meninggalkan Jejak',
          desc: 'Kawasan Manta Point berada di dalam Kawasan Konservasi Perairan (KKP) Nusa Penida. Mematuhi panduan Green Fins sangat krusial untuk mencegah stres pada manta dan menjaga kelestarian terumbu karang.',
          highlights: [
            {
              title: 'Jarak Aman Minimal 3 Meter',
              detail: 'Dilarang mengejar, memblokir jalur renang, atau menyentuh manta. Sentuhan tangan dapat merusak lapisan lendir pelindung alami kulit mereka.',
            },
            {
              title: 'Dilarang Menggunakan Lampu Kilat (Flash)',
              detail: 'Blitz kamera bawah air dapat mengejutkan dan membutakan sementara satwa, memicu kepanikan dan mengusir mereka dari teluk.',
            },
            {
              title: 'Wajib Tabir Surya Ramah Karang (Reef-Safe)',
              detail: 'Hanya tabir surya bebas oxybenzone dan octinoxate yang diizinkan untuk menghindari pemutihan karang dan racun air laut.',
            },
          ],
          image: '/images/foto tambahan/terumbu karang.jpeg',
          caption: 'Berenang etis menjaga jarak aman di perairan toska jernih',
        },
        {
          id: 'oceanography',
          layout: 'text-left',
          badge: 'OSEANOGRAFI & MUSIM TERBAIK',
          title: 'Dinamika Arus Samudra & Waktu Pengamatan Terbaik',
          desc: 'Menghadap langsung ke Samudra Hindia bagian selatan, Manta Point dipengaruhi oleh Arus Lintas Indonesia (Arlindo). Menyelaraskan waktu keberangkatan dengan siklus pasang surut memberikan keamanan dan kejernihan pemandangan maksimal.',
          highlights: [
            {
              title: 'Waktu Puncak Pagi Hari (07:00 – 10:30)',
              detail: 'Permukaan laut cenderung tenang dan ombak bersahabat sebelum angin pesisir selatan bertiup kencang.',
            },
            {
              title: 'Visibilitas Kejernihan Kristal (Mei – November)',
              detail: 'Musim kemarau menawarkan jarak pandang 20 hingga 30 meter dengan suhu air menyegarkan 22–26°C.',
            },
            {
              title: 'Pertemuan Langka Ikan Mola-Mola (Juli – Oktober)',
              detail: 'Arus dingin dari palung dalam sering membawa Ikan Matahari Raksasa (Mola-Mola) naik ke dinding karang Manta Point.',
            },
          ],
          image: '/images/foto tambahan/tebing bagus1.jpeg',
          caption: 'Sinar mentari menembus dinding tebing bawah laut Manta Point',
        },
      ],
    },
    rules: {
      sectionEyebrow: 'PANDUAN ETIKA & PELESTARIAN BAHARI',
      sectionTitle: '6 Prinsip Menjaga Kelestarian Suaka Manta Point',
      sectionSubtitle:
        'Pari manta dan terumbu karang adalah warisan purba yang tak ternilai. Patuhi 6 aturan ekowisata ini demi menjaga kelestarian ekosistem bahari Nusa Penida.',
      items: [
        {
          id: 'zero-waste',
          iconType: 'trash',
          title: 'Bebas Sampah Plastik (Zero Waste)',
          desc: 'Bawa kembali seluruh sampah ke daratan. Partikel mikroplastik di air laut dapat tertelan oleh manta saat menyaring plankton.',
        },
        {
          id: 'reef-safe',
          iconType: 'shield',
          title: 'Wajib Tabir Surya Reef-Safe',
          desc: 'Gunakan tabir surya mineral non-nano bebas oxybenzone & octinoxate demi mencegah pemutihan terumbu karang.',
        },
        {
          id: 'no-touch',
          iconType: 'hand',
          title: 'Dilarang Menyentuh Manta (No-Touch)',
          desc: 'Jangan pernah menyentuh atau menaiki manta. Minyak dan bakteri kulit manusia merusak lapisan lendir pelindung alami mereka.',
        },
        {
          id: 'distance',
          iconType: 'distance',
          title: 'Jaga Jarak Minimal 3 Meter',
          desc: 'Beri ruang bebas bagi manta untuk bermanuver. Jangan memotong jalur renang atau mengepung satwa di stasiun pembersih.',
        },
        {
          id: 'no-flash',
          iconType: 'flash',
          title: 'Dilarang Menggunakan Flash / Blitz',
          desc: 'Kilatan cahaya kamera bawah air dapat membutakan sementara dan memicu stres akut, membuat manta meninggalkan teluk.',
        },
        {
          id: 'fin-control',
          iconType: 'coral',
          title: 'Jaga Ayunan Fin & Karang Hidup',
          desc: 'Pertahankan daya apung netral saat berenang. Ayunan fin yang menyentuh dasar laut dapat mematahkan karang yang tumbuh puluhan tahun.',
        },
      ],
    },
    backToMap: '← Kembali ke Peta Pulau',
    bookConcierge: 'Konsultasi via WhatsApp Concierge',
  },

  zh: {
    sectionTitle: '如何前往与精选航线',
    sectionEyebrow: '努沙佩尼达海洋探索',
    fleetLink: '查看全部船队与独立包船 →',
    badge: '生态认证探险',
    bookCta: '预订探索航线',
    packages: [
      {
        id: 'fastboat-safari',
        category: '拼船生态快艇巡航',
        title: '蝠鲼点浮潜生态之旅',
        image: '/images/foto tambahan/manta point.jpeg',
        specs: [
          { label: '载客量', value: '限12位贵宾' },
          { label: '行程时长', value: '5小时 (08:00 - 13:00)' },
          { label: '装备保障', value: '专业浮潜装备+GoPro' },
        ],
        price: '起价 IDR 650,000',
        priceUnit: '每位旅客',
      },
      {
        id: 'private-speedboat',
        category: '私享双发快艇独立包船',
        title: '私享快艇巡航与专属潜水向导',
        image: '/images/foto tambahan/menyelam.jpeg',
        specs: [
          { label: '载客量', value: '至多8位贵宾' },
          { label: '巡航配置', value: '双250匹马力快艇' },
          { label: '专业团队', value: 'PADI潜水长+当地向导' },
        ],
        price: '起价 IDR 3,200,000',
        priceUnit: '每艘快艇',
      },
      {
        id: 'luxury-catamaran',
        category: 'VIP双体帆船游艇',
        title: '奢华双体游艇日落巡航与崖畔晚宴',
        image: '/images/foto tambahan/tebing bagus.jpeg',
        specs: [
          { label: '载客量', value: '至多16位贵宾' },
          { label: '游艇尺寸', value: '18米宽阔双体甲板' },
          { label: '尊享礼遇', value: '私厨BBQ+4K无人机航拍' },
        ],
        price: '起价 IDR 6,800,000',
        priceUnit: '整团包船',
      },
    ],
    education: {
      sectionEyebrow: '海洋生物与生态保护',
      sectionTitle: '蝠鲼点：生机盎然的深蓝庇护所',
      sectionSubtitle: '探索天然清洁站的生物奇迹，珊瑚礁生态系统的运转法则，以及绿色潜水守则。',
      cards: [
        {
          id: 'cleaning-station',
          layout: 'text-left',
          badge: '海洋生物学 · 8 – 12 米深度',
          title: '天然珊瑚清洁站：深海巨擘的自然水疗中心',
          desc: '蝠鲼点不仅是一条游动航道，更是珍贵的海洋生物庇护所。在水深8至12米的巨大珊瑚岩礁（Cleaning Rock）周围，成群的礁蝠鲼优雅盘旋，成百上千只裂唇鱼（Cleaner Wrasse）为它们清理寄生虫与坏死表皮，构成大自然最和谐的互利共生。',
          highlights: [
            {
              title: '5.5米翼展水下芭蕾',
              detail: '温顺的滤食性海洋生灵，体重可达1.4吨，尾部没有毒刺，与潜水员和平共游。',
            },
            {
              title: '极高的空间记忆与感知',
              detail: '在软骨鱼类中拥有最大脑体比，能记住迁徙路线并对周围环境具备敏锐感知。',
            },
            {
              title: '龙目海峡深层上升流',
              detail: '深海洋流每日清晨将富含营养的浮游动物带入海湾，为蝠鲼提供丰盛的自然滋养。',
            },
          ],
          image: '/images/foto tambahan/manta.jpeg',
          caption: '巨型珊瑚蝠鲼在天然清洁岩上方轻盈滑翔',
        },
        {
          id: 'ethical-code',
          layout: 'text-right',
          badge: 'GREEN FINS 潜水守则 · 无痕海洋',
          title: '道德互动准则：不留痕迹的深海探索',
          desc: '蝠鲼点位于努沙佩尼达海洋保护区（MPA）内。严格遵守绿色鳍标准则，有助于保障野生蝠鲼不受人类过度干扰，在天然家园中繁衍生息。',
          highlights: [
            {
              title: '严格保持3米安全距离',
              detail: '严禁追逐、拦阻或伸手触摸蝠鲼。人类皮肤油脂会破坏其体表粘液保护层，导致致命细菌感染。',
            },
            {
              title: '严禁使用水下闪光灯',
              detail: '强烈的强光瞬间会导致蝠鲼暂时失明并产生恐慌，迫使其永远离开清洁站区域。',
            },
            {
              title: '必须使用珊瑚友好型防晒霜',
              detail: '严禁使用含有氧苯酮等化学成分的普通防晒霜，以防引发珊瑚白化与海洋微毒素积累。',
            },
          ],
          image: '/images/foto tambahan/terumbu karang.jpeg',
          caption: '在清澈碧蓝海水中保持安全距离的道德共游',
        },
        {
          id: 'oceanography',
          layout: 'text-left',
          badge: '海洋气象学与最佳出海季',
          title: '洋流潮汐规律与黄金探索时刻',
          desc: '蝠鲼点直指南印度洋浩瀚海域，受印尼贯穿流（Arlindo）深远影响。顺应海洋潮汐周期启航，方能享受风平浪静与极致水下能见度。',
          highlights: [
            {
              title: '清晨黄金出海窗口 (07:00 – 10:30)',
              detail: '清晨海面平静温和，涌浪较小，是在海湾内浮潜与观察的最佳时刻。',
            },
            {
              title: '水晶般通透能见度 (5月 – 11月)',
              detail: '旱季海水水温清爽舒适（22–26°C），水下能见度高达25至30米。',
            },
            {
              title: '翻车鱼（Mola Mola）冬季奇遇 (7月 – 10月)',
              detail: '深层冷水涌升吸引罕见的史前巨兽翻车鱼浮上断崖外侧，为潜水者带来绝无仅有的震撼。',
            },
          ],
          image: '/images/foto tambahan/tebing bagus1.jpeg',
          caption: '晨光穿透蝠鲼点深邃的海底绝壁',
        },
      ],
    },
    rules: {
      sectionEyebrow: '生态守则与海洋保护',
      sectionTitle: '保护蝠鲼圣域的6大环保原则',
      sectionSubtitle:
        '巨型蝠鲼与珊瑚礁是珍贵的远古自然遗产。请严格遵守以下6条生态旅游准则，共同守护努沙佩尼达海洋家园。',
      items: [
        {
          id: 'zero-waste',
          iconType: 'trash',
          title: '严禁丢弃塑料与垃圾',
          desc: '随身带走所有生活垃圾返岸。微塑料颗粒极易在蝠鲼滤食浮游生物时被误食中毒。',
        },
        {
          id: 'reef-safe',
          iconType: 'shield',
          title: '仅限使用珊瑚友好型防晒霜',
          desc: '使用不含氧苯酮与辛诺酯的非纳米矿物防晒霜，防止珊瑚虫遭受化学性白化死亡。',
        },
        {
          id: 'no-touch',
          iconType: 'hand',
          title: '严格禁止触摸海洋生物',
          desc: '切勿触摸或骑乘蝠鲼。人类体表的细菌会严重损伤其天然粘液保护层并引发致命溃烂。',
        },
        {
          id: 'distance',
          iconType: 'distance',
          title: '保持3米以上安全观察距离',
          desc: '给蝠鲼留出自由游动的空间，切勿阻挡游动路线，切勿在清洁站四周合围包抄。',
        },
        {
          id: 'no-flash',
          iconType: 'flash',
          title: '严禁使用相机闪光灯',
          desc: '强烈的人工频闪会导致蝠鲼短时间失明与剧烈应激反应，迫使其弃巢远离海湾。',
        },
        {
          id: 'fin-control',
          iconType: 'coral',
          title: '控制脚蹼防踩踏活体珊瑚',
          desc: '随时保持中性浮力。不经意的脚蹼踢踏会踢断需要数十年方能长成的珍贵喀斯特珊瑚。',
        },
      ],
    },
    backToMap: '← 返回全岛互动地图',
    bookConcierge: '咨询 WhatsApp 私享管家',
  },

  ja: {
    sectionTitle: 'アクセス方法＆ツアーパッケージ',
    sectionEyebrow: 'ヌサペニダ オーシャンエクスペディション',
    fleetLink: '全フリート＆専用チャーター一覧 →',
    badge: 'エコ認定ツアー',
    bookCta: 'ツアーを予約する',
    packages: [
      {
        id: 'fastboat-safari',
        category: '乗り合いエコ高速ボート',
        title: 'マンタポイント シュノーケリングサファリ',
        image: '/images/foto tambahan/manta point.jpeg',
        specs: [
          { label: '定員', value: '最大12名様' },
          { label: '所要時間', value: '5時間 (08:00 - 13:00)' },
          { label: '装備・ガイド', value: 'フルシュノーケル+GoPro' },
        ],
        price: 'IDR 650,000〜',
        priceUnit: '1名様あたり',
      },
      {
        id: 'private-speedboat',
        category: '専用スピードボートチャーター',
        title: 'プライベートボート＆公認ガイドダイブ',
        image: '/images/foto tambahan/menyelam.jpeg',
        specs: [
          { label: '定員', value: '最大8名様' },
          { label: '船舶性能', value: 'ツイン250HP 高速艇' },
          { label: '同行スタッフ', value: 'PADIマスター+島公認レンジャー' },
        ],
        price: 'IDR 3,200,000〜',
        priceUnit: '1隻あたり',
      },
      {
        id: 'luxury-catamaran',
        category: 'VIPカタマランクルーズ',
        title: 'ラグジュアリー双胴船サンセット＆BBQ',
        image: '/images/foto tambahan/tebing bagus.jpeg',
        specs: [
          { label: '定員', value: '最大16名様' },
          { label: '船体規模', value: '18m 広々ダブルデッキ' },
          { label: '特別付帯', value: 'シェフBBQ+4Kドローン空撮' },
        ],
        price: 'IDR 6,800,000〜',
        priceUnit: '1グループあたり',
      },
    ],
    education: {
      sectionEyebrow: '海洋生物学＆環境保全',
      sectionTitle: 'マンタポイント：深海巨峰の聖域',
      sectionSubtitle: 'クリーニングステーションの生命共生、豊かな珊瑚礁生態系、そして海洋保護ルールを深く学ぶ。',
      cards: [
        {
          id: 'cleaning-station',
          layout: 'text-left',
          badge: '海洋生物学 · 水深 8 – 12 メートル',
          title: '天然クリーニングステーション：マンタのオアシス',
          desc: 'マンタポイントは単なる遊泳路ではなく、神秘的な深海スパです。水深8〜12メートルに位置する巨岩礁では、リーフマンタがゆっくりと滞空し、無数のホンソメワケベラが寄生虫や古い角質を綺麗に取り除き共生しています。',
          highlights: [
            {
              title: '最大5.5メートルの翼幅',
              detail: '毒針を持たない温厚な濾過摂食動物で、ダイバーの隣を静かに滑空します。',
            },
            {
              title: '魚類最高峰の空間知能',
              detail: '軟骨魚類最大の脳体比を誇り、回遊ルートやダイバーの動きを繊細に認識します。',
            },
            {
              title: 'ロンボク海峡の深層湧昇流',
              detail: '深海から湧き上がる栄養豊富なプランクトンが、毎朝マンタたちに豊かな食糧をもたらします。',
            },
          ],
          image: '/images/foto tambahan/manta.jpeg',
          caption: '天然クリーニング岩の上を滑空する巨大マンタ',
        },
        {
          id: 'ethical-code',
          layout: 'text-right',
          badge: 'GREEN FINS 潜水基準 · ノートレース',
          title: 'エシカルダイビング行動基準：傷つけず見守る旅',
          desc: 'マンタポイントはヌサペニダ海洋保護区（MPA）に指定されています。国際基準Green Finsを順守し、マンタにストレスを与えない持続可能なエコツーリズムを徹底しています。',
          highlights: [
            {
              title: '最低3メートルの安全距離を保持',
              detail: '追跡や接触は厳禁。人の手の油分がマンタの保護粘膜を傷つけ、感染症を引き起こす恐れがあります。',
            },
            {
              title: '水中ストロボ・フラッシュ撮影の禁止',
              detail: '強い光はマンタを驚かせ一時的に視力を奪うため、海湾から去ってしまう原因になります。',
            },
            {
              title: 'リーフセーフ日焼け止めの着用義務',
              detail: 'オキシベンゾンなど珊瑚を白化させる化学物質を含まない環境配慮型サンスクリーンのみ使用可能です。',
            },
          ],
          image: '/images/foto tambahan/terumbu karang.jpeg',
          caption: '安全距離を保ちながら青く澄んだ海を共遊するエシカル潜水',
        },
        {
          id: 'oceanography',
          layout: 'text-left',
          badge: '海洋気象＆ベストシーズン',
          title: '海流のダイナミクスと最高の一瞬に出会う好機',
          desc: '南インド洋の外洋に面するマンタポイントは、インドネシア通過流（Arlindo）の恩恵を受けます。潮汐の満ち引きと季節を合わせることで、驚異的な透明度を体験できます。',
          highlights: [
            {
              title: '朝のゴールデンタイム (07:00 – 10:30)',
              detail: '風が吹き始める前の朝の海は波が穏やかで、初心者でも安全にシュノーケリングを楽しめます。',
            },
            {
              title: 'クリスタルな透明度 (5月 – 11月)',
              detail: '乾季は水深25〜30メートルまで見渡せる驚異的な視界が広がり、水温も22〜26°Cと快適です。',
            },
            {
              title: '冬のマンボウ（モラモラ）遭遇 (7月 – 10月)',
              detail: '冷水湧昇流に伴い、深海に生息する巨大魚モラモラがドロップオフの浅瀬へと姿を現します。',
            },
          ],
          image: '/images/foto tambahan/tebing bagus1.jpeg',
          caption: 'マンタポイントの深海ドロップオフに差し込む光の筋',
        },
      ],
    },
    rules: {
      sectionEyebrow: '環境保護＆マナー基準',
      sectionTitle: 'マンタの聖域を守る6つのエコツーリズム原則',
      sectionSubtitle:
        '雄大なマンタと生きたサンゴ礁はかけがえのない宝です。ヌサペニダの海を守るため、以下の6つのルールを遵守してください。',
      items: [
        {
          id: 'zero-waste',
          iconType: 'trash',
          title: '海洋ゴミ・プラゼロの徹底',
          desc: 'ゴミはすべて島外へ持ち帰りましょう。マイクロプラスチックはプランクトンと共にマンタの体内に蓄積されます。',
        },
        {
          id: 'reef-safe',
          iconType: 'shield',
          title: 'サンゴに優しい日焼け止め限定',
          desc: 'オキシベンゾン不使用のノンナノ天然ミネラルサンスクリーンを使用し、サンゴの白化を防ぎましょう。',
        },
        {
          id: 'no-touch',
          iconType: 'hand',
          title: '生物への接触は一切厳禁',
          desc: 'マンタに触れたり乗ったりしてはいけません。人間の皮脂や菌がマンタの保護粘膜を破壊し重篤な感染症を招きます。',
        },
        {
          id: 'distance',
          iconType: 'distance',
          title: '3メートル以上の距離を維持',
          desc: 'マンタの遊泳進路を遮ったり、クリーニング中の個体を取り囲んだりせず、自由なスペースを確保してください。',
        },
        {
          id: 'no-flash',
          iconType: 'flash',
          title: 'フラッシュ・ストロボ撮影禁止',
          desc: '強い光はマンタを驚かせ一時的な視覚障害をもたらし、ストレスから海湾を放棄する原因になります。',
        },
        {
          id: 'fin-control',
          iconType: 'coral',
          title: 'フィンによるサンゴの破損防止',
          desc: '常に中性浮力を維持しましょう。何十年もかけて成長した繊細なサンゴをフィンのキックで折らないようご注意ください。',
        },
      ],
    },
    backToMap: '← アイランドマップに戻る',
    bookConcierge: 'WhatsApp専属コンシェルジュに相談',
  },

  ko: {
    sectionTitle: '가는 방법 & 추천 투어 패키지',
    sectionEyebrow: '누사 페니다 오션 익스페디션',
    fleetLink: '전체 선박 및 프라이빗 차터 보기 →',
    badge: '에코 서티파이드 투어',
    bookCta: '투어 예약하기',
    packages: [
      {
        id: 'fastboat-safari',
        category: '공유 에코 패스트보트',
        title: '만타 포인트 스노클링 사파리',
        image: '/images/foto tambahan/manta point.jpeg',
        specs: [
          { label: '탑승 정원', value: '최대 12인' },
          { label: '소요 시간', value: '5시간 (08:00 - 13:00)' },
          { label: '장비 및 가이드', value: '풀 스노클 세트 + 고프로' },
        ],
        price: 'IDR 650,000부터',
        priceUnit: '1인 기준',
      },
      {
        id: 'private-speedboat',
        category: '단독 대절 프라이빗 스피드보트',
        title: '프라이빗 보트 차터 & 디스커버리 다이빙',
        image: '/images/foto tambahan/menyelam.jpeg',
        specs: [
          { label: '탑승 정원', value: '최대 8인' },
          { label: '선박 스펙', value: '트윈 250마력 쾌속선' },
          { label: '전담 팀', value: 'PADI 마스터 + 섬 레인저' },
        ],
        price: 'IDR 3,200,000부터',
        priceUnit: '보트 1척 기준',
      },
      {
        id: 'luxury-catamaran',
        category: 'VIP 카타마란 크루즈',
        title: '럭셔리 쌍동선 선셋 다이빙 & 절벽 바비큐',
        image: '/images/foto tambahan/tebing bagus.jpeg',
        specs: [
          { label: '탑승 정원', value: '최대 16인' },
          { label: '선박 규모', value: '18m 듀얼 헐 와이드 데크' },
          { label: '포함 내역', value: '셰프 BBQ + 4K 드론 촬영' },
        ],
        price: 'IDR 6,800,000부터',
        priceUnit: '그룹 단독 기준',
      },
    ],
    education: {
      sectionEyebrow: '해양 생물학 & 환경 보전',
      sectionTitle: '만타 포인트: 살아 숨 쉬는 심해의 안식처',
      sectionSubtitle: '거대 만타가오리의 클리닝 스테이션과 산호초 생태계, 그리고 지속 가능한 친환경 다이빙 수칙을 만나보세요.',
      cards: [
        {
          id: 'cleaning-station',
          layout: 'text-left',
          badge: '해양 생물학 · 수심 8 – 12 미터',
          title: '천연 클리닝 스테이션: 거대 해양 생물의 스파',
          desc: '만타 포인트는 단순한 이동 경로가 아닌 자연이 빚어낸 천연 수중 스파입니다. 8~12m 수심의 거대한 카르스트 암초 위에서 자이언트 리프 만타가오리가 천천히 부유하면, 수많은 청줄청소놀래기가 기생충과 각질을 먹어 치우며 평화로운 공생 관계를 이룹니다.',
          highlights: [
            {
              title: '최대 5.5미터의 압도적 날개폭',
              detail: '독침이 없는 온순한 성격으로 최대 1.4톤에 달하며 다이버 곁을 평화롭게 활공합니다.',
            },
            {
              title: '뛰어난 지능과 공간 기억력',
              detail: '연골어류 중 가장 큰 뇌-체중 비율을 자랑하며 이동 경로와 다이버를 민감하게 인지합니다.',
            },
            {
              title: '롬복 해협 심층 용승류',
              detail: '심해에서 솟구치는 플랑크톤 풍부 해류가 매일 아침 만타가오리에게 풍성한 먹이를 공급합니다.',
            },
          ],
          image: '/images/foto tambahan/manta.jpeg',
          caption: '천연 산호 바위 위를 유영하는 거대 리프 만타가오리',
        },
        {
          id: 'ethical-code',
          layout: 'text-right',
          badge: '그린핀스 규정 · 흔적 없는 다이빙',
          title: '윤리적 다이빙 수칙: 자연 그대로를 지키는 관찰',
          desc: '만타 포인트는 누사 페니다 해양보호구역(MPA) 내에 위치해 있습니다. 현지 레인저의 감독하에 국제 그린핀스 규정을 준수하여 만타의 서식지를 지킵니다.',
          highlights: [
            {
              title: '최소 3미터 안전 거리 준수',
              detail: '만타를 쫓거나 만지는 행위는 금지됩니다. 사람 손의 유분이 점막을 손상시켜 치명적인 감염을 유발할 수 있습니다.',
            },
            {
              title: '수중 스트로보 및 플래시 촬영 금지',
              detail: '강한 불빛은 만타의 시력을 일시적으로 마비시키고 공포를 유발해 만을 떠나게 만듭니다.',
            },
            {
              title: '리프 세이프 선크림 사용 의무화',
              detail: '산호 백화 현상을 유발하는 옥시벤존 성분이 없는 친환경 자외선 차단제만 허용됩니다.',
            },
          ],
          image: '/images/foto tambahan/terumbu karang.jpeg',
          caption: '투명한 바다에서 안전 거리를 유지하며 유영하는 윤리적 다이빙',
        },
        {
          id: 'oceanography',
          layout: 'text-left',
          badge: '해양 물리학 & 최적의 시즌',
          title: '해류의 주기와 최고의 만남을 위한 타이밍',
          desc: '남인도양을 마주하는 만타 포인트는 인도네시아 통과류(Arlindo)의 영향을 직접 받습니다. 조수간만의 차와 계절을 맞추는 것이 안전하고 환상적인 탐험의 핵심입니다.',
          highlights: [
            {
              title: '아침 황금 시간대 (07:00 – 10:30)',
              detail: '남쪽 해안풍이 거세지기 전 잔잔한 물결 속에서 안전하게 스노클링을 즐길 수 있습니다.',
            },
            {
              title: '크리스탈 청정 시야 (5월 – 11월)',
              detail: '건기 시즌에는 25~30m에 달하는 맑은 수중 시야와 22~26°C의 상쾌한 수온을 선사합니다.',
            },
            {
              title: '겨울철 개복치(몰라몰라) 조우 (7월 – 10월)',
              detail: '심해에서 솟아오르는 찬 해류를 타고 신비로운 심해어 몰라몰라가 수중 절벽 지대로 올라옵니다.',
            },
          ],
          image: '/images/foto tambahan/tebing bagus1.jpeg',
          caption: '만타 포인트 해저 절벽을 비추는 영롱한 아침 햇살',
        },
      ],
    },
    rules: {
      sectionEyebrow: '환경 보전 및 다이빙 에티켓',
      sectionTitle: '만타 서식지를 지키는 6대 친환경 행동 수칙',
      sectionSubtitle:
        '거대한 만타와 살아있는 산호초는 소중한 원시 해양 유산입니다. 6가지 보전 수칙을 준수하여 지속 가능한 누사 페니다 바다를 함께 지켜주세요.',
      items: [
        {
          id: 'zero-waste',
          iconType: 'trash',
          title: '해양 쓰레기 & 플라스틱 제로',
          desc: '발생한 모든 쓰레기는 본섬으로 수거해 오세요. 미세 플라스틱은 만타의 호흡 및 먹이 활동에 치명적입니다.',
        },
        {
          id: 'reef-safe',
          iconType: 'shield',
          title: '친환경 리프 세이프 자외선 차단제',
          desc: '옥시벤존 성분이 없는 논나노 미네랄 선크림을 사용하여 산호초 백화 현상을 예방해 주세요.',
        },
        {
          id: 'no-touch',
          iconType: 'hand',
          title: '해양 생물 접촉 절대 금지 (No-Touch)',
          desc: '만타를 만지거나 올라타지 마세요. 사람 피부의 유분과 세균이 만타의 천연 점막을 파괴하여 치명상을 입힙니다.',
        },
        {
          id: 'distance',
          iconType: 'distance',
          title: '최소 3미터 안전 거리 준수',
          desc: '만타가 자유롭게 헤엄칠 공간을 확보하세요. 이동 경로를 가로막거나 클리닝 바위 주변을 포위하지 마세요.',
        },
        {
          id: 'no-flash',
          iconType: 'flash',
          title: '수중 카메라 스트로보/플래시 금지',
          desc: '강한 인공 불빛은 만타의 시력을 일시 마비시키고 극심한 스트레스를 유발하여 만을 영구 이탈하게 만듭니다.',
        },
        {
          id: 'fin-control',
          iconType: 'coral',
          title: '핀 킥 산호 파손 방지',
          desc: '항상 중성 부력을 유지하세요. 무심코 휘두른 핀 킥이 수십 년 동안 자란 귀중한 산호초를 부러뜨릴 수 있습니다.',
        },
      ],
    },
    backToMap: '← 섬 전체 지도 보기',
    bookConcierge: 'WhatsApp 전담 컨시어지 문의',
  },
};
