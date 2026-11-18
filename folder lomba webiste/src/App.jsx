import { useCallback, useState, useEffect } from 'react';
import CraftJourneysSection from './components/CraftJourneysSection';
import HeroSection from './components/HeroSection';
import IslandMapSection from './components/IslandMapSection';
import IncludedExperienceSection from './components/IncludedExperienceSection';
import MantaScrollCinema from './components/MantaScrollCinema';
import KelingkingScrollCinema from './components/KelingkingScrollCinema';
import Navbar from './components/Navbar';
import TopDestinationsSection from './components/TopDestinationsSection';
import TripPlannerSection from './components/TripPlannerSection';
import IslandArchivesSection from './components/IslandArchivesSection';
import TravelerReviewsSection from './components/TravelerReviewsSection';
import FooterSection from './components/FooterSection';
import DestinationsPage from './components/DestinationsPage';
import BookPage from './components/BookPage';
import AboutPage from './components/AboutPage';
import { useMantaFrameSequence } from './hooks/useMantaFrameSequence';
import { useKelingkingFrameSequence } from './hooks/useKelingkingFrameSequence';

export default function App() {
  const { getBestFrame: getMantaBestFrame } = useMantaFrameSequence();
  const { getBestFrame: getKelingkingBestFrame } = useKelingkingFrameSequence();

  // 'hero' | 'manta' | 'kelingking' | 'destinations' | 'book' | 'about'
  const [page, setPage] = useState('hero');
  const [isZooming, setIsZooming] = useState(false);
  const [zoomTarget, setZoomTarget] = useState('manta');
  const [lang, setLang] = useState('en');

  const handleScrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleBackToHero = useCallback(() => {
    setPage('hero');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleSelectLocation = useCallback(
    (pin) => {
      if (pin.id === 'manta') {
        setZoomTarget('manta');
        setIsZooming(true);

        setTimeout(() => {
          setPage('manta');
          window.scrollTo({ top: 0, behavior: 'instant' });

          setTimeout(() => {
            setIsZooming(false);
          }, 100);
        }, 950);
      } else if (pin.id === 'kelingking') {
        setZoomTarget('kelingking');
        setIsZooming(true);

        setTimeout(() => {
          setPage('kelingking');
          window.scrollTo({ top: 0, behavior: 'instant' });

          setTimeout(() => {
            setIsZooming(false);
          }, 100);
        }, 950);
      } else {
        handleScrollToSection('destinations');
      }
    },
    [handleScrollToSection]
  );

  // Global 3D Scroll Reveal — uses data-revealed attribute
  // (avoids React className override bug that caused cards to disappear on hover)
  useEffect(() => {
    if (!['hero', 'book', 'about'].includes(page)) return;

    let observer;
    const timer = setTimeout(() => {
      const targets = document.querySelectorAll('.reveal-header, .reveal-card');
      if (!targets.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.dataset.revealed = 'true';
              observer.unobserve(entry.target); // stop watching once revealed
            }
          });
        },
        {
          threshold: 0.06,
          rootMargin: '0px 0px -60px 0px',
        }
      );

      targets.forEach((el) => observer.observe(el));
    }, 50);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [page]);

  return (
    <div className="app-shell">
      <Navbar
        onScrollToSection={handleScrollToSection}
        isZooming={isZooming}
        page={page}
        onBackToHero={handleBackToHero}
        onNavigateToPage={setPage}
        lang={lang}
        onLangChange={setLang}
      />

      <main>
        {page === 'hero' ? (
          <>
            {/* Stage Hero Video Terkunci & Peta Meluncur di Atasnya (Curtain Transition) */}
            <div className="hero-map-wrapper">
              <div className="hero-sticky-stage">
                <HeroSection
                  onScrollToSection={handleScrollToSection}
                  onSelectLocation={handleSelectLocation}
                  isZooming={isZooming}
                  lang={lang}
                />
              </div>

              <div className="island-map-curtain">
                <IslandMapSection
                  onScrollToSection={handleScrollToSection}
                  onSelectLocation={handleSelectLocation}
                  isZooming={isZooming}
                  zoomTarget={zoomTarget}
                  lang={lang}
                />
              </div>
            </div>

            {/* Bagian Perjalanan / Filosofi — Kartu Dinamis Bergaya Framer */}
            <CraftJourneysSection
              lang={lang}
              onExploreManta={() => handleSelectLocation({ id: 'manta' })}
              onSelectLocation={handleSelectLocation}
            />

            {/* Top Destinations Traveler Love — 6 Destinasi Ikonik */}
            <TopDestinationsSection
              lang={lang}
              onSelectManta={() => handleSelectLocation({ id: 'manta' })}
              onSelectLocation={handleSelectLocation}
              onNavigateToDestinations={() => {
                setPage('destinations');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* All-Inclusive Perks — Clean Luxury Bento Grid */}
            <IncludedExperienceSection lang={lang} />

            {/* Days, Maps, Tables & Changes — Live Trip Planner & Concierge */}
            <TripPlannerSection lang={lang} />

            {/* Trips Worth Taking — Polaroid Archival Collage (FarAway Inspired) */}
            <IslandArchivesSection lang={lang} />

            {/* Loved by Travelers — Clean Photo Testimonials Carousel */}
            <TravelerReviewsSection lang={lang} />

            {/* Footer */}
            <FooterSection lang={lang} />
          </>
        ) : page === 'destinations' ? (
          /* Halaman Khusus Destinasi Wisata Berkelanjutan */
          <DestinationsPage
            lang={lang}
            onBackToHero={handleBackToHero}
            onSelectLocation={handleSelectLocation}
          />
        ) : page === 'book' ? (
          /* Halaman Pemesanan (Book) */
          <BookPage lang={lang} />
        ) : page === 'about' ? (
          /* Halaman Tentang Kami (About) */
          <AboutPage lang={lang} onSelectLocation={handleSelectLocation} onNavigateToPage={setPage} />
        ) : page === 'kelingking' ? (
          /* Halaman Scroll Cinema & Virtual Photobooth Kelingking Beach */
          <KelingkingScrollCinema
            getBestFrame={getKelingkingBestFrame}
            onBackToHero={handleBackToHero}
            lang={lang}
          />
        ) : (
          /* Halaman Scroll Cinema Manta Point */
          <MantaScrollCinema
            getBestFrame={getMantaBestFrame}
            onBackToHero={handleBackToHero}
            lang={lang}
          />
        )}
      </main>
    </div>
  );
}
