import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export function usePremiumMotion(ready: boolean) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.18,
      smoothWheel: true,
      wheelMultiplier: 0.85,
    });

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (!ready) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 34, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 84%',
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('.stagger-group').forEach((group) => {
        gsap.fromTo(
          group.children,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: group,
              start: 'top 82%',
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('.media-reveal').forEach((element) => {
        gsap.fromTo(
          element,
          { clipPath: 'inset(12% 12% 12% 12% round 28px)', opacity: 0, y: 24 },
          {
            clipPath: 'inset(0% 0% 0% 0% round 28px)',
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 82%',
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('.parallax-media img').forEach((image) => {
        gsap.to(image, {
          yPercent: -7,
          ease: 'none',
          scrollTrigger: {
            trigger: image,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        });
      });

      gsap.utils.toArray<SVGPathElement>('.draw-path').forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: path,
            start: 'top 88%',
          },
        });
      });

      gsap.utils.toArray<SVGPathElement>('.route-path').forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.35,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: path,
            start: 'top 82%',
          },
        });
      });

      gsap.fromTo(
        '.map-preview__pin',
        { y: -40, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'bounce.out',
          scrollTrigger: {
            trigger: '.map-preview',
            start: 'top 72%',
          },
        },
      );

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, [ready]);
}
