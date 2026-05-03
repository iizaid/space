import { Armchair, UtensilsCrossed } from 'lucide-react';
import { AnimatedHeading } from './AnimatedHeading';
import { Button } from './Button';
import { DecorativeCurl } from './DecorativeCurl';
import { SectionLabel } from './SectionLabel';
import { ShishaIcon } from './ShishaIcon';

const features = [
  {
    title: 'Cozy Atmosphere',
    text: 'Warm lighting, comfortable seating, and a calm modern vibe.',
    icon: Armchair,
  },
  {
    title: 'Signature Dining',
    text: 'Burgers, desserts, drinks, and café favorites served with style.',
    icon: UtensilsCrossed,
  },
];

export function ExperienceSection() {
  return (
    <section id="about" className="section experience-section">
      <div className="site-container experience">
        <div className="experience__copy">
          <SectionLabel>THE SPACE EXPERIENCE</SectionLabel>
          <AnimatedHeading className="experience__heading">
            A Place to Pause, <span>Taste</span>, and <span>Enjoy</span>
          </AnimatedHeading>
          <p className="section-copy reveal">
            From cozy indoor seating to signature drinks and a relaxed shisha atmosphere, Space
            Restocafe brings food, comfort, and conversation together in one modern destination.
          </p>

          <div className="feature-stack stagger-group">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article className="feature-card" key={feature.title}>
                  <span className="feature-card__icon" aria-hidden="true">
                    <Icon size={26} />
                  </span>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </article>
              );
            })}
            <article className="feature-card">
              <span className="feature-card__icon" aria-hidden="true">
                <ShishaIcon size={28} />
              </span>
              <div>
                <h3>Shisha Lounge</h3>
                <p>A relaxed setting designed for slow evenings and good company.</p>
              </div>
            </article>
          </div>

          <Button href="#menu" variant="secondary" className="experience__button">
            Explore the Experience
          </Button>
        </div>

        <div className="experience__collage">
          <DecorativeCurl className="experience__curl" />
          <div className="collage-card collage-card--main media-reveal parallax-media">
            <img src="/generated/experience-main.webp" alt="Space Restocafe interior with shisha lounge seating" loading="lazy" />
          </div>
          <div className="collage-card collage-card--sign media-reveal parallax-media">
            <img src="/generated/experience-sign.webp" alt="Space Restocafe illuminated exterior sign" loading="lazy" />
          </div>
          <div className="collage-card collage-card--dessert media-reveal parallax-media">
            <img src="/generated/experience-dessert.webp" alt="Signature dessert presentation at Space Restocafe" loading="lazy" />
          </div>
          <div className="collage-card collage-card--food media-reveal parallax-media">
            <img src="/generated/experience-food.webp" alt="Space Restocafe food and drinks table spread" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
