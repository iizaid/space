import { CakeSlice, ChevronLeft, ChevronRight, Coffee, CupSoda, GlassWater, Soup } from 'lucide-react';
import gsap from 'gsap';
import type { ReactNode } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Button } from './Button';
import { DecorativeCurl } from './DecorativeCurl';
import { ProductCard } from './ProductCard';
import { SectionLabel } from './SectionLabel';
import { ShishaIcon } from './ShishaIcon';
import { menuCategories, menuItems, type MenuCategory } from '../data/menuItems';

const categoryIcons: Record<MenuCategory, ReactNode> = {
  Drinks: <CupSoda size={24} />,
  Shakes: <GlassWater size={24} />,
  'Hot Drinks': <Coffee size={25} />,
  Food: <Soup size={25} />,
  Desserts: <CakeSlice size={25} />,
  Shisha: <ShishaIcon size={25} />,
};

function getVisibleItems<T>(items: T[], start: number, count: number) {
  return Array.from({ length: count }, (_, index) => items[(start + index) % items.length]);
}

export function SignatureChoices() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Drinks');
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const tabRef = useRef<HTMLDivElement | null>(null);
  const items = menuItems[activeCategory];
  const visibleItems = useMemo(() => getVisibleItems(items, activeIndex, 5), [items, activeIndex]);
  const activeDot = activeIndex % items.length;

  useEffect(() => {
    if (!trackRef.current) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      trackRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', stagger: 0.06 },
    );
  }, [activeCategory, activeIndex]);

  useEffect(() => {
    if (!tabRef.current) return;
    const activeButton = tabRef.current.querySelector<HTMLButtonElement>('[aria-selected="true"]');
    const indicator = tabRef.current.querySelector<HTMLSpanElement>('.tabs__indicator');
    if (!activeButton || !indicator) return;

    gsap.to(indicator, {
      x: activeButton.offsetLeft,
      width: activeButton.offsetWidth,
      duration: 0.45,
      ease: 'power3.out',
    });
  }, [activeCategory]);

  const goNext = () => setActiveIndex((value) => (value + 1) % items.length);
  const goPrevious = () => setActiveIndex((value) => (value - 1 + items.length) % items.length);

  return (
    <section id="menu" className="section signature-section">
      <div className="site-container">
        <div className="section-header signature-header">
          <div>
            <SectionLabel>SIGNATURE FAVORITES</SectionLabel>
            <h2 className="section-heading reveal">Signature Choices</h2>
            <DecorativeCurl className="signature-header__curl" />
          </div>
          <div className="signature-header__side reveal">
            <p>
              Explore our most loved dishes, refreshing drinks, sweet desserts, and premium shisha
              selections — all crafted for a relaxed Space Restocafe experience.
            </p>
            <div className="signature-header__buttons">
              <Button href="?view=menu">View Full Menu</Button>
            </div>
          </div>
        </div>

        <div className="tabs reveal" ref={tabRef} role="tablist" aria-label="Signature categories">
          <span className="tabs__indicator" aria-hidden="true" />
          {menuCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={activeCategory === category ? 'active' : ''}
              onClick={() => {
                setActiveCategory(category);
                setActiveIndex(0);
              }}
            >
              <span aria-hidden="true">{categoryIcons[category]}</span>
              {category}
            </button>
          ))}
          <div className="tabs__arrows">
            <button type="button" aria-label="Previous product" onClick={goPrevious}>
              <ChevronLeft size={22} />
            </button>
            <button type="button" aria-label="Next product" onClick={goNext}>
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <div className="product-carousel">
          <button className="carousel-edge carousel-edge--left" type="button" aria-label="Previous product" onClick={goPrevious}>
            <ChevronLeft size={26} />
          </button>
          <div className="product-track" ref={trackRef}>
            {visibleItems.map((product, index) => (
              <ProductCard
                key={`${product.name}-${index}-${activeCategory}`}
                product={product}
              />
            ))}
          </div>
          <button className="carousel-edge carousel-edge--right" type="button" aria-label="Next product" onClick={goNext}>
            <ChevronRight size={26} />
          </button>
        </div>

        <div className="pagination-dots" aria-label={`${activeCategory} carousel pagination`}>
          {items.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show ${item.name}`}
              className={index === activeDot ? 'active' : ''}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
