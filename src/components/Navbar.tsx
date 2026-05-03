import { Menu, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { navigationItems } from '../data/navigation';
import { BrandMark } from './BrandMark';
import { Button } from './Button';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const sectionIds = navigationItems.map((item) => item.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      event.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 92;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      setOpen(false);
    },
    [],
  );

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a className="navbar__brand" href="#home" aria-label="Space Restocafe home"
        onClick={(e) => handleNavClick(e, '#home')}>
        <BrandMark />
      </a>

      <nav className="navbar__links" aria-label="Primary navigation">
        {navigationItems.map((item) => (
          <a
            key={item.label}
            className={activeSection === item.href.replace('#', '') ? 'active' : ''}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="navbar__actions">
        <Button href="tel:0792922333" variant="secondary" className="navbar__cta">
          Reserve Now
        </Button>
        <button
          className="navbar__menu-button"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`}>
        {navigationItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
        <Button href="tel:0792922333" className="mobile-menu__cta">
          Reserve Now
        </Button>
      </div>
    </header>
  );
}
