import { Clock } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from './Button';
import { Navbar } from './Navbar';

type HeroSectionProps = {
  ready: boolean;
};

export function HeroSection({ ready }: HeroSectionProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const plateRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!ready || !rootRef.current) return undefined;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
      timeline
        .from('.navbar', { opacity: 0, y: -24, duration: 0.72 })
        .from('.hero__eyebrow', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
        .from('.hero__title span', { opacity: 0, yPercent: 36, duration: 0.82, stagger: 0.11 }, '-=0.22')
        .from('.hero__text', { opacity: 0, y: 26, duration: 0.62 }, '-=0.42')
        .from('.hero__buttons .ui-button', { opacity: 0, y: 22, duration: 0.58, stagger: 0.09 }, '-=0.36')
        .from(plateRef.current, { opacity: 0, scale: 0.96, y: 24, duration: 1.05 }, '-=0.78')
        .from('.opening-card', { opacity: 0, y: 36, duration: 0.72 }, '-=0.42');

      // 3D Tilt Effect
      const handleMouseMove = (e: MouseEvent) => {
        if (!plateRef.current) return;
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const xPos = (clientX / innerWidth - 0.5) * 2;
        const yPos = (clientY / innerHeight - 0.5) * 2;

        gsap.to(plateRef.current, {
          rotationY: xPos * 14,
          rotationX: -yPos * 14,
          ease: 'power2.out',
          duration: 1.2,
          transformPerspective: 900,
          transformOrigin: 'center'
        });
      };

      const handleMouseLeave = () => {
        if (!plateRef.current) return;
        gsap.to(plateRef.current, {
          rotationY: 0,
          rotationX: 0,
          ease: 'power3.out',
          duration: 1.5,
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, rootRef);

    return () => ctx.revert();
  }, [ready]);

  return (
    <section
      id="home"
      ref={rootRef}
      className={`hero ${ready ? 'hero--ready' : ''}`}
      aria-label="Space Restocafe hero"
    >
      <Navbar />
      <div className="site-container hero__grid">
        <div className="hero__copy">
          <p className="hero__eyebrow">GOOD FOOD. GOOD MOOD. GOOD TIMES.</p>
          <h1 className="hero__title" aria-label="Pause. Enjoy. Repeat.">
            <span>Pause.</span>
            <span>Enjoy.</span>
            <span className="accent">Repeat.</span>
          </h1>
          <p className="hero__text">
            A premium resto café experience with delicious food, signature drinks, and the finest
            shisha.
          </p>
          <div className="hero__buttons">
            <Button href="#menu">Explore Menu</Button>
          </div>
        </div>

        <div className="hero__media">
          <img
            ref={plateRef}
            src="/generated/hero-plate-transparent.png"
            alt="Grilled salmon plate with salad and lemon"
            className="hero__plate"
            width="1024"
            height="1024"
          />
          <div className="opening-card">
            <span className="opening-card__icon" aria-hidden="true">
              <Clock size={30} />
            </span>
            <div>
              <p>OPENING HOURS</p>
              <strong>9:00 AM – 12:30 AM</strong>
              <span>Daily</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
