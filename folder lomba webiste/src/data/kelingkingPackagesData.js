/**
 * Data Paket Ekspedisi, Edukasi Karst, dan 6 Prinsip Konservasi Kelingking Beach
 * Mendukung 5 Bahasa: en, id, zh, ja, ko
 */

export const KELINGKING_PACKAGES_DATA = {
  id: {
    backToHome: 'Kembali ke Beranda',
    scrollHint: 'Gulir ke Bawah untuk Menuruni Tebing',
    viewPackagesBtn: 'Lihat Paket Trekking',
    bookConcierge: 'Konsultasi Perjalanan Kelingking via WhatsApp',
    pricingNote: 'Semua ekspedisi mencakup donasi konservasi alam & asuransi keselamatan resmi',

    packages: {
      sectionEyebrow: 'EKSPEDISI PILIHAN RESMI',
      sectionTitle: 'Paket Eksplorasi Kelingking Beach',
      sectionSubtitle: 'Dipandu pemandu lokal bersertifikasi keselamatan tebing kapur dan komitmen zero-trace.',
      items: [
        {
          id: 'sunrise-walk',
          badge: 'POPULER & RAMAH PEMULA',
          title: 'Sunrise Ridge Photowalk & Panorama Kelingking',
          duration: '3.5 Jam',
          depth: 'Puncak Tebing (+200m)',
          price: 'Rp 380.000',
          perPerson: '/ orang',
          image: '/images/foto tambahan/kelingking.jpeg',
          highlights: [
            'Menikmati matahari terbit keemasan tanpa kerumunan wisatawan',
            'Sesi foto dokumentasi beresolusi tinggi di titik pandang rahasia',
            'Pemandu lokal bersertifikat pertolongan pertama & hidrasi segar',
            'Donasi reboisasi tanaman endemik tebing karst Nusa Penida',
          ],
        },
        {
          id: 'guided-descent',
          badge: 'PETUALANGAN UTAMA',
          title: 'Guided Spine Descent & Secluded Beach Expedition',
          duration: '5 - 6 Jam',
          depth: 'Dasar Pantai (0m)',
          price: 'Rp 650.000',
          perPerson: '/ orang',
          image: '/images/foto tambahan/tebing bagus1.jpeg',
          highlights: [
            'Pendampingan penuh menuruni 400 meter jalur punggung tangga bambu',
            'Eksplorasi pasir putih murni dan gua karst tersembunyi di tepi pantai',
            'Peralatan keselamatan, helm trekking ringan & ransel air minum',
            'Termasuk makan siang kelapa muda organik & snack energi lokal',
          ],
        },
        {
          id: 'sunset-conservation',
          badge: 'EKSKLUSIF & PRIVATE',
          title: 'Sunset Karst Horizon & Private Coastal Safari',
          duration: '4 Jam',
          depth: 'Tebing Barat (+180m)',
          price: 'Rp 520.000',
          perPerson: '/ orang',
          image: '/images/foto tambahan/tebing bagus.jpeg',
          highlights: [
            'Menyaksikan senja spektakuler di atas Samudra Hindia bagian selatan',
            'Edukasi geologi karst Nusa Penida bersama pegiat konservasi alam',
            'Akses viewing platform eksklusif ramah lingkungan',
            'Termasuk sertifikat kontributor pelestarian alam Nusa Penida',
          ],
        },
      ],
    },

    education: {
      sectionEyebrow: 'EDUKASI & PELESTARIAN ALAM',
      sectionTitle: 'Mengenal Keajaiban Tebing Kelingking',
      sectionSubtitle: 'Kisah geologi purba jutaan tahun dan komitmen menjaga keasrian bentang alam Nusa Penida.',
      cards: [
        {
          badge: 'GEOLOGI PURBA',
          title: 'Mahakarya Karst Terbentuk Jutaan Tahun',
          desc: 'Formasi tebing menyerupai T-Rex terbentuk dari batuan kapur murni yang terangkat dari dasar laut purba melalui proses tektonik jutaan tahun lalu. Terpaan ombak Samudra Hindia secara konsisten memahat tebing ini menjadi keajaiban alam terindah di Asia Tenggara.',
          layout: 'right',
          image: '/images/foto tambahan/kelingking.jpeg',
          caption: 'Formasi batuan kapur purba Kelingking yang menjulang 200 meter di atas laut lepas.',
          highlights: [
            {
              title: 'Batuan Kapur Karst Murni',
              detail: 'Mengandung fosil terumbu karang laut dalam zaman purba yang terlindungi secara geologis.',
            },
            {
              title: 'Struktur Penahan Gelombang Alami',
              detail: 'Bentuk semenanjung tebing berfungsi sebagai pemecah ombak alami samudra selatan.',
            },
          ],
        },
        {
          badge: 'KESELAMATAN & ETIKA',
          title: 'Panduan Menuruni Jalur Punggung Tebing',
          desc: 'Trek menuruni punggung bukit Kelingking membutuhkan kehati-hatian tinggi. Tangga bambu tradisional dibangun secara gotong royong oleh masyarakat lokal Nusa Penida untuk memudahkan mobilitas nelayan dan wisatawan.',
          layout: 'left',
          image: '/images/foto tambahan/tebing bagus1.jpeg',
          caption: 'Jalur punggung tebing dengan pemandangan 360 derajat perairan toska Nusa Penida.',
          highlights: [
            {
              title: 'Gunakan Sepatu Tertutup & Anti-Slip',
              detail: 'Batuan karst kering memiliki tekstur tajam dan licin pada bagian berpasir.',
            },
            {
              title: 'Patuhi Batas Pegangan Pengaman',
              detail: 'Jangan pernah melompati atau duduk di luar batas tali bambu pengaman tebing.',
            },
          ],
        },
        {
          badge: 'BIODIVERSITAS PESISIR',
          title: 'Ekosistem Laut & Burung Pemangsa Langka',
          desc: 'Tebing Kelingking merupakan rumah bagi burung Elang Laut Dada Putih (Haliaeetus leucogaster) dan kawanan lumba-lumba yang kerap melintas di bawah tebing saat pagi hari. Airnya yang bersih merupakan koridor migrasi satwa laut penting.',
          layout: 'right',
          image: '/images/foto tambahan/tebing bagus.jpeg',
          caption: 'Perairan tenang di kaki tebing menjadi koridor transit lumba-lumba dan penyu laut.',
          highlights: [
            {
              title: 'Koridor Migrasi Lumba-Lumba',
              detail: 'Sering terlihat melompat bebas di perairan tenang Kelingking saat fajar merekah.',
            },
            {
              title: 'Zona Bersih Sampah Plastik',
              detail: 'Komunitas lokal rutin mengadakan aksi bersih pantai di dasar teluk Kelingking.',
            },
          ],
        },
      ],
    },

    rules: {
      sectionEyebrow: 'ETIKA TREKKING & KONSERVASI',
      sectionTitle: '6 Prinsip Menjaga Keasrian Kelingking Beach',
      sectionSubtitle: 'Demi keselamatan Anda dan kelestarian ekosistem tebing karst yang tak ternilai harganya.',
      items: [
        {
          id: 'rule-path',
          iconType: 'distance',
          title: 'Tetap di Jalur Resmi',
          desc: 'Jangan pernah keluar dari jalur tangga atau melintasi pembatas bambu tebing.',
        },
        {
          id: 'rule-trash',
          iconType: 'trash',
          title: 'Bawa Pulang Sampah Anda',
          desc: 'Terapkan prinsip Zero-Trace: bawa kembali botol plastik dan kemasan apa pun.',
        },
        {
          id: 'rule-shoes',
          iconType: 'shield',
          title: 'Sepatu Trekking Wajib',
          desc: 'Gunakan sepatu bertapak karet anti-slip, hindari memakai sandal jepit saat menuruni tebing.',
        },
        {
          id: 'rule-sacred',
          iconType: 'coral',
          title: 'Hormati Tempat Suci',
          desc: 'Terdapat palinggih (tempat persembahyangan) sakral warga lokal di sepanjang punggung bukit.',
        },
        {
          id: 'rule-water',
          iconType: 'sun',
          title: 'Cukup Air & Hindari Dehidrasi',
          desc: 'Suhu siang hari di tebing terbuka sangat terik; bawa minimal 1.5 liter air per orang.',
        },
        {
          id: 'rule-wildlife',
          iconType: 'hand',
          title: 'Lindungi Satwa & Tumbuhan',
          desc: 'Dilarang memetik tanaman liar atau mengganggu sarang burung elang di dinding tebing.',
        },
      ],
    },
  },

  en: {
    backToHome: 'Back to Homepage',
    scrollHint: 'Scroll Down to Descend the Cliff',
    viewPackagesBtn: 'View Trekking Packages',
    bookConcierge: 'Consult Kelingking Expedition via WhatsApp',
    pricingNote: 'All expeditions include environmental conservation donations & certified safety coverage',

    packages: {
      sectionEyebrow: 'CURATED CLIFFSIDE EXPEDITIONS',
      sectionTitle: 'Kelingking Beach Exploration Packages',
      sectionSubtitle: 'Guided by certified local karst mountaineering experts with a zero-trace commitment.',
      items: [
        {
          id: 'sunrise-walk',
          badge: 'POPULAR & BEGINNER FRIENDLY',
          title: 'Sunrise Ridge Photowalk & Kelingking Panorama',
          duration: '3.5 Hours',
          depth: 'Cliff Summit (+200m)',
          price: 'IDR 380,000',
          perPerson: '/ person',
          image: '/images/foto tambahan/kelingking.jpeg',
          highlights: [
            'Witness majestic golden sunrise before tourist crowds arrive',
            'High-resolution professional photo capture at secret panoramic spots',
            'Certified first-aid local guide with chilled isotonic refreshments',
            'Includes native karst flora reforestation contribution',
          ],
        },
        {
          id: 'guided-descent',
          badge: 'SIGNATURE ADVENTURE',
          title: 'Guided Spine Descent & Secluded Beach Expedition',
          duration: '5 - 6 Hours',
          depth: 'Beach Cove (0m)',
          price: 'IDR 650,000',
          perPerson: '/ person',
          image: '/images/foto tambahan/tebing bagus1.jpeg',
          highlights: [
            'Full guidance down the 400-meter vertical bamboo ridge staircase',
            'Explore untouched white sand shores & hidden limestone coves',
            'Provided trekking helmets, safety harnesses & hydration backpacks',
            'Includes fresh organic young coconut & local energy snacks',
          ],
        },
        {
          id: 'sunset-conservation',
          badge: 'EXCLUSIVE & PRIVATE',
          title: 'Sunset Karst Horizon & Private Coastal Safari',
          duration: '4 Hours',
          depth: 'West Cliffs (+180m)',
          price: 'IDR 520,000',
          perPerson: '/ person',
          image: '/images/foto tambahan/tebing bagus.jpeg',
          highlights: [
            'Spectacular golden sunset over the vast southern Indian Ocean',
            'In-depth geological education with Nusa Penida conservation stewards',
            'Access to exclusive eco-friendly cliffside viewing decks',
            'Official Nusa Penida Nature Guardian contributor certificate',
          ],
        },
      ],
    },

    education: {
      sectionEyebrow: 'GEOLOGY & CONSERVATION',
      sectionTitle: 'Unveiling the Wonder of Kelingking',
      sectionSubtitle: 'A million-year geological chronicle and our collective pledge to preserve pristine Nusa Penida.',
      cards: [
        {
          badge: 'ANCIENT GEOLOGY',
          title: 'A Million-Year Limestone Masterpiece',
          desc: 'The iconic T-Rex silhouette was formed by tectonic uplift raising ancient deep-sea coral reefs. Millennia of fierce Indian Ocean waves relentlessly carved the vertical limestone into one of the most awe-inspiring natural landmarks on Earth.',
          layout: 'right',
          image: '/images/foto tambahan/kelingking.jpeg',
          caption: 'Ancient limestone strata soaring 200 meters above the open ocean.',
          highlights: [
            {
              title: 'Pure Karst Limestone Strata',
              detail: 'Contains prehistoric marine microfossils protected in pristine rock faces.',
            },
            {
              title: 'Natural Ocean Breakwater',
              detail: 'The curved peninsula serves as an immense natural bastion against giant swells.',
            },
          ],
        },
        {
          badge: 'SAFETY & ETHICS',
          title: 'Navigating the Cliffside Spine Trail',
          desc: 'Trekking down the sheer spine of Kelingking demands complete focus and respect. Traditional bamboo and rope stairs were hand-built by local villagers to facilitate coastal access.',
          layout: 'left',
          image: '/images/foto tambahan/tebing bagus1.jpeg',
          caption: 'The knife-edge ridge trail offering 360-degree panoramic ocean views.',
          highlights: [
            {
              title: 'Wear Closed-Toe Grippy Shoes',
              detail: 'Karst limestone is sharp and gravel sections can be slippery.',
            },
            {
              title: 'Never Cross Safety Railings',
              detail: 'Always stay within the marked bamboo barriers and maintain three points of contact.',
            },
          ],
        },
        {
          badge: 'COASTAL BIODIVERSITY',
          title: 'Marine Corridor & Cliff Raptors',
          desc: 'Kelingking Cliff provides sanctuary for rare White-bellied Sea Eagles and pods of spinner dolphins that frequent the calm morning waters below the cliffs.',
          layout: 'right',
          image: '/images/foto tambahan/tebing bagus.jpeg',
          caption: 'Pristine emerald waters at the cliff base serving as a turtle and dolphin transit zone.',
          highlights: [
            {
              title: 'Dolphin Transit Zone',
              detail: 'Pods frequently surface in the secluded cove during peaceful early dawn hours.',
            },
            {
              title: 'Plastic-Free Protected Bay',
              detail: 'Local rangers conduct weekly cleanups to keep the cove 100% pristine.',
            },
          ],
        },
      ],
    },

    rules: {
      sectionEyebrow: 'TREKKING & CONSERVATION CODE',
      sectionTitle: '6 Principles to Protect Kelingking Beach',
      sectionSubtitle: 'Ensuring your personal safety and the timeless preservation of this sacred geological icon.',
      items: [
        {
          id: 'rule-path',
          iconType: 'distance',
          title: 'Stay on Marked Trails',
          desc: 'Never bypass safety fences or attempt unauthorized cliff shortcuts.',
        },
        {
          id: 'rule-trash',
          iconType: 'trash',
          title: 'Pack Out All Trash',
          desc: 'Practice Leave-No-Trace: carry back all water bottles and food wrappers.',
        },
        {
          id: 'rule-shoes',
          iconType: 'shield',
          title: 'Wear Proper Footwear',
          desc: 'Closed-toe hiking shoes are required; flip-flops are strictly discouraged.',
        },
        {
          id: 'rule-sacred',
          iconType: 'coral',
          title: 'Respect Sacred Shrines',
          desc: 'Local Balinese shrines are situated along the ridge; maintain peaceful reverence.',
        },
        {
          id: 'rule-water',
          iconType: 'sun',
          title: 'Carry Ample Water',
          desc: 'Midday heat on the exposed ridge is intense; carry at least 1.5L of water.',
        },
        {
          id: 'rule-wildlife',
          iconType: 'hand',
          title: 'Protect Flora & Fauna',
          desc: 'Never harvest cliffside succulents or disturb nesting seabirds.',
        },
      ],
    },
  },
};
