import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import gsap from 'gsap';
import { useEffect, useMemo, useRef, useState } from 'react';
import { DecorativeCurl } from './DecorativeCurl';
import { SectionLabel } from './SectionLabel';
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from '../data/testimonials';

function visibleTestimonials(start: number) {
  return Array.from({ length: 3 }, (_, index) => testimonials[(start + index) % testimonials.length]);
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const visible = useMemo(() => visibleTestimonials(activeIndex), [activeIndex]);

  useEffect(() => {
    if (!trackRef.current) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      trackRef.current.children,
      { opacity: 0, x: 44, scale: 0.96 },
      { opacity: 1, x: 0, scale: 1, duration: 0.55, ease: 'power3.out', stagger: 0.08 },
    );
  }, [activeIndex]);

  const goNext = () => setActiveIndex((value) => (value + 1) % testimonials.length);
  const goPrevious = () => setActiveIndex((value) => (value - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section testimonials-section">
      <div className="site-container testimonials-grid">
        <div className="testimonials-copy">
          <SectionLabel>TESTIMONIALS</SectionLabel>
          <h2 className="section-heading reveal">What Our Guests Say</h2>
          <DecorativeCurl className="testimonials-copy__curl" />
          <p className="section-copy reveal">
            We’re grateful for every visit and even more thankful for the kind words. Here’s what
            our guests love most about Space Restocafe.
          </p>
          <article className="rating-card reveal">
            <span className="rating-card__icon" aria-hidden="true">
              <Star size={40} fill="currentColor" />
            </span>
            <div>
              <strong>
                4.9 <span>/ 5</span>
              </strong>
              <p>average rating</p>
              <small>Loved by our guests</small>
            </div>
          </article>
        </div>

        <div className="testimonial-carousel">
          <button className="testimonial-arrow testimonial-arrow--left" type="button" aria-label="Previous testimonial" onClick={goPrevious}>
            <ChevronLeft size={27} />
          </button>
          <div className="testimonial-track" ref={trackRef}>
            {visible.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${index}`}
                testimonial={testimonial}
                active={index === 1}
              />
            ))}
          </div>
          <button className="testimonial-arrow testimonial-arrow--right" type="button" aria-label="Next testimonial" onClick={goNext}>
            <ChevronRight size={27} />
          </button>
          <div className="pagination-dots testimonial-dots">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`Show ${testimonial.name} review`}
                className={index === activeIndex ? 'active' : ''}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
