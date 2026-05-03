import { ChevronLeft, ChevronRight, Coffee, UtensilsCrossed, CakeSlice, CupSoda, Flame } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Button } from './Button';

export function FullMenu() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -390 : 390;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const menuFiles = [
    { 
      name: 'Food Menu', 
      file: 'Food Menu .pdf', 
      type: 'food',
      icon: <UtensilsCrossed size={36} />
    },
    { 
      name: 'Breakfast Menu', 
      file: 'Breakfast Menu.pdf', 
      type: 'breakfast',
      icon: <Coffee size={36} />
    },
    { 
      name: 'Dessert Menu', 
      file: 'Dessert Menu.pdf', 
      type: 'dessert',
      icon: <CakeSlice size={36} />
    },
    { 
      name: 'Juice Menu', 
      file: 'Juice Menu-2.pdf', 
      type: 'juice',
      icon: <CupSoda size={36} />
    },
    { 
      name: 'Barista Menu', 
      file: 'Barista Menu.pdf', 
      type: 'barista',
      icon: <Coffee size={36} />
    },
    { 
      name: 'Shisha Menu', 
      file: 'Shisha Menu.pdf', 
      type: 'shisha',
      icon: <Flame size={36} />
    }
  ];

  return (
    <div className="full-menu-page">
      <div className="site-container">
        <header className="full-menu-header">
          <Button href="/" variant="secondary" icon="none" className="back-btn">
            <span>Back to Home</span>
          </Button>
          <h1>Complete Space Restocafe Menu</h1>
          <p>Explore all our categories in detail. Click on any category to view the full PDF menu.</p>
        </header>

        <div className="full-menu-carousel">
          <button 
            className="carousel-edge carousel-edge--left" 
            type="button" 
            aria-label="Scroll left" 
            onClick={() => scroll('left')}
          >
            <ChevronLeft size={26} />
          </button>
          
          <div className="full-menu-grid" ref={scrollRef}>
            {menuFiles.map((menu) => (
              <a 
                key={menu.name} 
                href={`/assets/menu/${menu.file}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`menu-card menu-card--${menu.type}`}
              >
                <div className="menu-card__cover">
                  <div className="menu-card__cover-bg" />
                  <div className="menu-card__icon">
                    {menu.icon}
                  </div>
                  <h3 className="menu-card__title">{menu.name}</h3>
                  
                  <div className="menu-card__overlay">
                    <span>View PDF</span>
                  </div>
                </div>
                <div className="menu-card__content">
                  <p>Explore the {menu.name}</p>
                </div>
              </a>
            ))}
          </div>

          <button 
            className="carousel-edge carousel-edge--right" 
            type="button" 
            aria-label="Scroll right" 
            onClick={() => scroll('right')}
          >
            <ChevronRight size={26} />
          </button>
        </div>
      </div>
    </div>
  );
}
