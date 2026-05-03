import { useCallback, useEffect, useState } from 'react';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { LoadingScreen } from './components/LoadingScreen';
import { LocationHours } from './components/LocationHours';
import { SignatureChoices } from './components/SignatureChoices';
import { Testimonials } from './components/Testimonials';
import { FullMenu } from './components/FullMenu';
import { usePremiumMotion } from './hooks/usePremiumMotion';

export default function App() {
  const [ready, setReady] = useState(false);
  const [view, setView] = useState<'home' | 'menu'>('home');
  const handleReady = useCallback(() => setReady(true), []);

  usePremiumMotion(ready && view === 'home');

  useEffect(() => {
    const handleLocationChange = () => {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get('view') === 'menu') {
        setView('menu');
      } else {
        setView('home');
      }
    };

    // Check on mount
    handleLocationChange();

    // Listen to history changes if user uses back/forward buttons
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  useEffect(() => {
    if (!ready || view !== 'home') return undefined;

    const scrollTarget =
      window.location.hash ||
      (new URLSearchParams(window.location.search).get('scroll')
        ? `#${new URLSearchParams(window.location.search).get('scroll')}`
        : '');

    if (!scrollTarget) return undefined;

    const timeout = window.setTimeout(() => {
      const target = document.querySelector(scrollTarget);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 92;
        window.scrollTo({ top, behavior: 'auto' });
      }
    }, 80);

    return () => window.clearTimeout(timeout);
  }, [ready, view]);

  if (view === 'menu') {
    return <FullMenu />;
  }

  return (
    <>
      {!ready && <LoadingScreen onComplete={handleReady} />}
      <main className="page-shell">
        <HeroSection ready={ready} />
        <ExperienceSection />
        <SignatureChoices />
        <LocationHours />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
