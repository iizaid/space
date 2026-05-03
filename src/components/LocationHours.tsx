import { Clock, Map, MapPin, Phone } from 'lucide-react';
import { AnimatedHeading } from './AnimatedHeading';
import { Button } from './Button';
import { DecorativeCurl } from './DecorativeCurl';
import { MapPreview } from './MapPreview';
import { SectionLabel } from './SectionLabel';

export function LocationHours() {
  return (
    <section id="reservation" className="section location-section">
      <div className="site-container location-grid">
        <div className="location-copy">
          <SectionLabel>LOCATION & OPENING HOURS</SectionLabel>
          <AnimatedHeading>Visit Space Restocafe</AnimatedHeading>
          <DecorativeCurl className="location-copy__curl" />
          <p className="section-copy reveal">
            Find us easily and plan your visit. Explore the map, check our opening hours, and get
            directions in just a few taps.
          </p>

          <div className="info-card-grid stagger-group">
            <article className="info-card">
              <span className="info-card__icon" aria-hidden="true">
                <Clock size={25} />
              </span>
              <h3>Opening Hours</h3>
              <span className="info-card__line" />
              <p>Daily: <strong>9:00 AM – 12:30 AM</strong></p>
              <p>Thursday: <strong>9:00 AM – 1:30 AM</strong></p>
              <p>Friday: <strong>11:00 AM – 1:30 AM</strong></p>
            </article>
            <article className="info-card">
              <span className="info-card__icon" aria-hidden="true">
                <MapPin size={25} />
              </span>
              <h3>Our Location</h3>
              <span className="info-card__line" />
              <p>Space Restocafe</p>
              <strong>Aqaba, Jordan</strong>
            </article>
          </div>

          <div className="location-actions reveal">
            <Button href="https://maps.app.goo.gl/8ZoEj1BDMnXUYRuq6">
              Get Directions
            </Button>
            <Button
              href="tel:0792922333"
              variant="secondary"
              icon="none"
            >
              <Phone size={20} aria-hidden="true" />
              <span>0792922333</span>
            </Button>
          </div>
        </div>
        <MapPreview />
      </div>
    </section>
  );
}
