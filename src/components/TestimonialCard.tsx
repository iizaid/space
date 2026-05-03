import { Star } from 'lucide-react';
import type { Testimonial } from '../data/testimonials';

export function TestimonialCard({
  testimonial,
  active = false,
}: {
  testimonial: Testimonial;
  active?: boolean;
}) {
  return (
    <article className={`testimonial-card ${active ? 'testimonial-card--active' : ''}`}>
      <div className="testimonial-card__avatar" aria-hidden="true">
        {testimonial.initials}
      </div>
      <h3>{testimonial.name}</h3>
      <p className="testimonial-card__meta">{testimonial.meta}</p>
      <div className="testimonial-card__stars" aria-label="5 star rating">
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} size={18} fill="currentColor" />
        ))}
      </div>
      <span className="testimonial-card__line" />
      <p className="testimonial-card__review">{testimonial.review}</p>
      {active && <span className="testimonial-card__quote" aria-hidden="true">”</span>}
    </article>
  );
}
