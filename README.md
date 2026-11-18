# 🌊 Nusa Penida — Explore Beyond Limits

> *"Curated Journeys Designed To Be Felt, Not Rushed."*

Website pariwisata interaktif **Nusa Penida** yang menampilkan keindahan destinasi wisata ikonik Pulau Nusa Penida, Bali — dibangun dengan pengalaman sinematik berbasis scroll, animasi imersif, dan dukungan multibahasa.

---

## 📖 Deskripsi Karya

**Nusa Penida — Explore Beyond Limits** adalah sebuah website pariwisata premium yang dirancang untuk memperkenalkan dan mempromosikan destinasi wisata Nusa Penida, Bali kepada wisatawan mancanegara maupun domestik.

Website ini menampilkan pengalaman visual yang sinematik dan imersif dengan fitur-fitur unggulan:

- 🎬 **Scroll Cinema** — Animasi frame-by-frame yang diputar seiring scroll halaman, menghadirkan pengalaman sinematik untuk destinasi Manta Point dan Kelingking Beach
- 🗺️ **Island Map Interactive** — Peta pulau interaktif dengan zoom animation ke destinasi pilihan
- 📸 **Virtual Photobooth** — Fitur photo frame interaktif di setiap halaman destinasi
- 🌍 **Multibahasa** — Dukungan 5 bahasa: English 🇬🇧, Indonesia 🇮🇩, 中文 🇨🇳, 日本語 🇯🇵, 한국어 🇰🇷
- ✈️ **Trip Planner** — Itinerary perjalanan lengkap dengan paket wisata premium
- ⭐ **Traveler Reviews** — Ulasan dan testimoni wisatawan nyata

### 🏝️ Destinasi yang Ditampilkan

| Destinasi | Kategori | Deskripsi |
|-----------|----------|-----------|
| **Manta Point** | Marine Conservation | Suaka pari manta samudra, snorkeling & diving eksklusif |
| **Kelingking Beach** | Coastal Ecosystem | Tebing karst ikonik berbentuk T-Rex |
| **Broken Beach** | Natural Arch | Lengkungan karang alami yang menakjubkan |
| **Diamond Beach** | Cliffside Beach | Pantai pasir putih dengan tangga tebing dramatis |
| **Angel's Billabong** | Natural Pool | Kolam alami tepi tebing |
| **Crystal Bay** | Diving Spot | Spot snorkeling dan sunset terbaik |

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| **React** | ^19.2.8 | UI Library |
| **Vite** | ^8.3.0 | Build Tool & Dev Server |
| **JavaScript (ESM)** | ES Module | Bahasa pemrograman |
| **CSS3** | — | Styling & Animasi |
| **Google Fonts** | — | Tipografi (Inter & JetBrains Mono) |
| **Oxlint** | ^1.81.0 | Linting |

---

## 📁 Struktur Project

```
folder-lomba-website/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── images/
│       ├── foto tambahan/          # Foto destinasi & aset tambahan
│       ├── frame/                  # Frame sequence Manta Point (scroll cinema)
│       ├── frame underground nusa penida/  # Frame sequence underwater
│       ├── kelingking beach-frames/        # Frame sequence Kelingking (scroll cinema)
│       ├── video-awal.mp4          # Video hero background
│       └── destinations-banner.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                      # Navigasi & language switcher
│   │   ├── HeroSection.jsx                 # Hero dengan video background & floating cards
│   │   ├── IslandMapSection.jsx            # Peta interaktif Nusa Penida
│   │   ├── CraftJourneysSection.jsx        # Filosofi & keunggulan perjalanan
│   │   ├── TopDestinationsSection.jsx      # 6 destinasi unggulan
│   │   ├── IncludedExperienceSection.jsx   # Paket all-inclusive
│   │   ├── TripPlannerSection.jsx          # Planner & itinerary perjalanan
│   │   ├── IslandArchivesSection.jsx       # Galeri polaroid arsip foto
│   │   ├── TravelerReviewsSection.jsx      # Testimoni wisatawan
│   │   ├── DestinationsPage.jsx            # Halaman daftar destinasi lengkap
│   │   ├── MantaScrollCinema.jsx           # Halaman sinematik Manta Point
│   │   ├── KelingkingScrollCinema.jsx      # Halaman sinematik Kelingking Beach
│   │   ├── MantaPhotoboothSection.jsx      # Virtual photobooth Manta Point
│   │   ├── KelingkingPhotoboothSection.jsx # Virtual photobooth Kelingking
│   │   ├── DestinationShowcase.jsx         # Showcase destinasi
│   │   ├── DepthTiltCard.jsx               # Kartu 3D tilt interaktif
│   │   ├── ScrollCinema.jsx                # Komponen scroll cinema dasar
│   │   ├── LoadingScreen.jsx               # Loading screen
│   │   └── FooterSection.jsx               # Footer
│   ├── data/
│   │   ├── expeditionData.js               # Data paket ekspedisi
│   │   ├── mantaCinemaData.js              # Data frame sequence Manta
│   │   ├── mantaPackagesData.js            # Data paket wisata Manta
│   │   ├── kelingkingCinemaData.js         # Data frame sequence Kelingking
│   │   ├── kelingkingPackagesData.js       # Data paket wisata Kelingking
│   │   ├── kelingkingPhotoboothData.js     # Data frame photobooth Kelingking
│   │   └── photoboothData.js              # Data frame photobooth umum
│   ├── hooks/
│   │   ├── useFrameSequence.js             # Hook animasi frame sequence
│   │   ├── useMantaFrameSequence.js        # Hook frame sequence Manta
│   │   └── useKelingkingFrameSequence.js   # Hook frame sequence Kelingking
│   ├── App.jsx                             # Root component & routing halaman
│   ├── index.css                           # Global styles
│   └── main.jsx                            # Entry point aplikasi
├── index.html                              # Template HTML utama
├── vite.config.js                          # Konfigurasi Vite
├── package.json                            # Dependensi & scripts
└── README.md
```

---

## ⚙️ Prasyarat

Pastikan perangkat kamu telah menginstal:

- **[Node.js](https://nodejs.org/)** versi **18** atau lebih baru
- **npm** (sudah termasuk dengan Node.js) atau **pnpm** / **yarn**

Cek versi Node.js yang terinstal:

```bash
node --version
```

---

## 🚀 Instalasi

### 1. Clone atau Download Repository

```bash
# Jika menggunakan Git
git clone <url-repository>
cd "folder lomba webiste"

# Atau ekstrak ZIP yang diunduh ke folder tujuan
```

### 2. Masuk ke Direktori Project

```bash
cd "folder lomba webiste"
```

### 3. Install Dependensi

```bash
npm install
```

---

## ▶️ Cara Menjalankan Project

### Mode Development (dengan Hot Reload)

```bash
npm run dev
```

Setelah berhasil, buka browser dan akses:

```
http://localhost:5173
```

> Server akan berjalan dengan fitur **Hot Module Replacement (HMR)** — setiap perubahan kode akan langsung terlihat di browser tanpa perlu refresh manual.

### Mode Production Build

```bash
# Build untuk produksi
npm run build

# Preview hasil build
npm run preview
```

Hasil build akan tersimpan di folder `dist/`.

### Linting (Opsional)

```bash
npm run lint
```

---

## 📌 Halaman & Navigasi

Website memiliki 4 halaman utama yang dikelola secara client-side:

| Halaman | Deskripsi |
|---------|-----------|
| **Home (`hero`)** | Landing page dengan video background, peta interaktif, dan semua section utama |
| **Destinations** | Daftar lengkap destinasi wisata Nusa Penida dengan detail dan paket |
| **Manta Point Cinema** | Pengalaman scroll-cinema sinematik khusus Manta Point |
| **Kelingking Beach Cinema** | Pengalaman scroll-cinema sinematik khusus Kelingking Beach |

---

## 🌐 Dukungan Bahasa

Pilih bahasa melalui menu di navbar kanan atas:

| Kode | Bahasa |
|------|--------|
| 🇬🇧 `EN` | English |
| 🇮🇩 `ID` | Bahasa Indonesia |
| 🇨🇳 `中` | 中文 (Chinese) |
| 🇯🇵 `日` | 日本語 (Japanese) |
| 🇰🇷 `한` | 한국어 (Korean) |

---

## 📄 Lisensi

Project ini dibuat untuk keperluan **lomba website**. Seluruh konten, foto, dan video merupakan aset milik tim pembuat.

---

<div align="center">
  <strong>🌊 Nusa Penida — Explore Beyond Limits</strong><br>
  <em>Discover breathtaking cliffs, hidden beaches, and unforgettable adventures in Nusa Penida, Bali's crown jewel.</em>
</div>
