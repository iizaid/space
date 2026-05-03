import { Clock, Facebook, Instagram, Map, MapPin, MessageCircle, Phone } from 'lucide-react';
import { navigationItems } from '../data/navigation';
import { BrandMark } from './BrandMark';
import { Button } from './Button';

export function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="site-container">
        <div className="footer-cta reveal">
          <div>
            <h2>Ready for your next visit?</h2>
            <p>
              Call us to reserve your table, explore the menu, or stop by for food, drinks, and a relaxed evening
              at Space Restocafe.
            </p>
          </div>
          <div className="footer-cta__actions">
            <Button href="tel:0792922333">Reserve Now</Button>
            <Button href="#menu" variant="dark">
              View Menu
            </Button>
          </div>
          <svg className="footer-cta__arcs" viewBox="0 0 300 300" aria-hidden="true">
            <path className="draw-path" d="M20 270A250 250 0 0 1 270 20" />
            <path className="draw-path" d="M65 270A205 205 0 0 1 270 65" />
            <path className="draw-path" d="M110 270A160 160 0 0 1 270 110" />
          </svg>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            <BrandMark variant="dark" />
            <p>
              Space Restocafe is a modern destination in Aqaba for food, drinks, desserts, and calm
              memorable moments.
            </p>
            <div className="social-links" aria-label="Social links">
              <a href="https://www.instagram.com/space_restocafe_jo" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/share/12HxQAUAP6q/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://wa.me/962792922333" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          <nav className="footer-links" aria-label="Footer quick links">
            <h3>Quick Links</h3>
            <span className="footer-title-line" />
            {navigationItems.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
                <span aria-hidden="true">›</span>
              </a>
            ))}
          </nav>

          <div className="footer-visit">
            <h3>Visit Us</h3>
            <span className="footer-title-line" />
            <div className="visit-card">
              <p>
                <MapPin size={22} />
                Aqaba, Jordan
              </p>
              <p>
                <Clock size={22} />
                Daily 9:00 AM – 12:30 AM
              </p>
              <p>
                <Phone size={22} />
                0792922333
              </p>
              <a href="https://maps.app.goo.gl/8ZoEj1BDMnXUYRuq6" target="_blank" rel="noopener noreferrer">
                <Map size={22} />
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
