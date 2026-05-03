import { useEffect, useRef } from 'react';
import gsap from 'gsap';

type LoadingScreenProps = {
  onComplete: () => void;
};

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const fillRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete();
      return undefined;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete,
      });

      tl
        // Ghost logo fades in
        .from('.loader__ghost', {
          opacity: 0,
          scale: 0.92,
          duration: 0.7,
          ease: 'power4.out',
        })
        // Coffee fill: clip-path reveals from bottom to top
        .to(fillRef.current, {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.6,
          ease: 'power2.inOut',
        }, 0.3)
        // Subtitle appears
        .from('.loader__sub', {
          opacity: 0,
          y: 10,
          letterSpacing: '0.6em',
          duration: 0.7,
          ease: 'power2.out',
        }, 1.0)
        // Dots appear
        .from('.loader__dot', {
          scale: 0,
          duration: 0.3,
          stagger: 0.1,
          ease: 'back.out(2)',
        }, 1.3)
        // Hold to appreciate
        .to({}, { duration: 0.5 })
        // Exit: content scales down and fades
        .to('.loader__inner', {
          opacity: 0,
          scale: 0.92,
          duration: 0.45,
          ease: 'power3.in',
        })
        // Screen slides up
        .to(rootRef.current, {
          yPercent: -100,
          duration: 0.6,
          ease: 'power4.inOut',
        }, '-=0.15');
    }, rootRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="loader" ref={rootRef} role="status" aria-label="Loading">
      <div className="loader__inner">
        {/* Logo with fill animation */}
        <div className="loader__logo-wrap">
          {/* Ghost: low opacity version (always visible) */}
          <img
            src="/generated/logo-hq.png"
            alt=""
            className="loader__ghost"
            width="420"
            height="80"
            draggable="false"
          />
          {/* Fill: full opacity, clipped from bottom → top */}
          <img
            ref={fillRef}
            src="/generated/logo-hq.png"
            alt="Space Restocafe"
            className="loader__fill"
            width="420"
            height="80"
            draggable="false"
          />
        </div>

        <p className="loader__sub">Good Food · Good Mood · Good Times</p>

        <div className="loader__dots" aria-hidden="true">
          <span className="loader__dot" />
          <span className="loader__dot" />
          <span className="loader__dot" />
        </div>
      </div>
    </div>
  );
}
