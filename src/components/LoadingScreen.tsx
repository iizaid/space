import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

type LoadingScreenProps = {
  onComplete: () => void;
};

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      onComplete();
      return undefined;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: 'power3.inOut' },
        onComplete,
      });

      // Animate progress text
      const progressObj = { val: 0 };
      gsap.to(progressObj, {
        val: 100,
        duration: 2.2,
        ease: 'power2.out',
        onUpdate: () => {
          setProgress(Math.round(progressObj.val));
        },
      });

      // Simple fade in of the elements and logo
      timeline
        .from('.loader__logo', { opacity: 0, y: 15, duration: 0.6 })
        .from('.loader__counter', { opacity: 0, y: 10, duration: 0.4 }, '-=0.3')
        // Progress bar fills up
        .to(progressRef.current, { scaleX: 1, duration: 2.2, ease: 'power2.out' }, 0)
        // Slide loading screen up
        .to(rootRef.current, { clipPath: 'inset(0 0 100% 0)', duration: 0.8, ease: 'power4.inOut' }, '+=0.2');
    }, rootRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="loader" ref={rootRef} role="status" aria-label="Loading Space Restocafe">
      <div className="loader__center">
        
        <img
          src="/generated/logo-hq.png"
          alt="Space Restocafe"
          className="loader__logo"
          width="400"
          height="76"
          style={{ width: 'min(320px, 70vw)', height: 'auto', marginBottom: '16px' }}
        />
        
        <div className="loader__counter" style={{ color: 'var(--color-orange)', fontSize: '1.4rem', fontFamily: "'Manrope', sans-serif", fontWeight: 600, letterSpacing: '0.05em' }}>
          {progress}%
        </div>

        <div className="loader__progress" aria-hidden="true">
          <div ref={progressRef} />
        </div>
      </div>
    </div>
  );
}
