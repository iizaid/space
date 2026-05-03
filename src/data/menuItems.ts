export type MenuCategory = 'Drinks' | 'Shakes' | 'Hot Drinks' | 'Food' | 'Desserts' | 'Shisha';

export type Product = {
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
};

export const menuCategories: MenuCategory[] = [
  'Drinks',
  'Shakes',
  'Hot Drinks',
  'Food',
  'Desserts',
  'Shisha',
];

export const menuItems: Record<MenuCategory, Product[]> = {
  Drinks: [
    {
      name: 'Hibiscus Breeze',
      description: 'Refreshing hibiscus with a hint of lime and mint.',
      price: '$4.50',
      image: '/generated/drink-hibiscus.webp',
    },
    {
      name: 'Iced Spanish Latte',
      description: 'Smooth espresso with milk and a touch of caramel.',
      price: '$4.75',
      image: '/generated/drink-latte.webp',
    },
    {
      name: 'Space Special',
      description: 'A signature mix of berries, citrus, and freshness.',
      price: '$5.25',
      image: '/generated/drink-space-special.webp',
      badge: 'Best Seller',
    },
    {
      name: 'Mango Smoothie',
      description: 'Creamy mango blended to tropical perfection.',
      price: '$5.00',
      image: '/generated/drink-mango.webp',
    },
    {
      name: 'Strawberry Blast',
      description: 'Sweet, icy, and bursting with real strawberry flavor.',
      price: '$4.75',
      image: '/generated/drink-strawberry.webp',
    },
  ],
  Shakes: [
    {
      name: 'Mango Smoothie',
      description: 'Creamy mango blended to tropical perfection.',
      price: '$5.00',
      image: '/generated/drink-mango.webp',
      badge: 'Creamy',
    },
    {
      name: 'Strawberry Blast',
      description: 'Sweet, icy, and bursting with real strawberry flavor.',
      price: '$4.75',
      image: '/generated/drink-strawberry.webp',
    },
    {
      name: 'Berry Cream Shake',
      description: 'A chilled berry blend with a soft café finish.',
      price: '$5.10',
      image: '/generated/drink-hibiscus.webp',
    },
    {
      name: 'Caramel Milkshake',
      description: 'Velvety milkshake layered with caramel richness.',
      price: '$4.95',
      image: '/generated/drink-latte.webp',
    },
    {
      name: 'Space Shake',
      description: 'Fresh fruit, ice, and a smooth signature mix.',
      price: '$5.25',
      image: '/generated/drink-space-special.webp',
    },
  ],
  'Hot Drinks': [
    {
      name: 'Spanish Latte',
      description: 'Espresso, steamed milk, and a smooth caramel note.',
      price: '$3.75',
      image: '/generated/drink-latte.webp',
    },
    {
      name: 'Cappuccino',
      description: 'Classic espresso with soft foam and warm balance.',
      price: '$3.25',
      image: '/generated/drink-space-special.webp',
    },
    {
      name: 'Turkish Coffee',
      description: 'Rich, aromatic, and served with a traditional finish.',
      price: '$2.00',
      image: '/generated/experience-dessert.webp',
    },
    {
      name: 'Hot Chocolate',
      description: 'Creamy cocoa with a comforting dessert-like depth.',
      price: '$3.00',
      image: '/generated/drink-mango.webp',
    },
    {
      name: 'Toffee Latte',
      description: 'A warm latte lifted with sweet toffee flavor.',
      price: '$3.50',
      image: '/generated/drink-latte.webp',
    },
  ],
  Food: [
    {
      name: 'Space Burger',
      description: 'Juicy burger, crisp sides, and Space Restocafe flavor.',
      price: '$7.50',
      image: '/generated/experience-food.webp',
      badge: 'Favorite',
    },
    {
      name: 'Grilled Salmon',
      description: 'Tender salmon with lemon, herbs, and fresh greens.',
      price: '$12.00',
      image: '/generated/hero-plate.png',
    },
    {
      name: 'Loaded Fries',
      description: 'Golden fries served with rich sauces and toppings.',
      price: '$4.50',
      image: '/generated/experience-food.webp',
    },
    {
      name: 'Chicken Quesadilla',
      description: 'Warm tortilla, melted cheese, and seasoned chicken.',
      price: '$4.00',
      image: '/generated/experience-main.webp',
    },
    {
      name: 'Space Platter',
      description: 'A generous table favorite made for sharing.',
      price: '$15.00',
      image: '/generated/experience-food.webp',
    },
  ],
  Desserts: [
    {
      name: 'Space Dessert',
      description: 'A sweet house favorite with a creamy finish.',
      price: '$4.50',
      image: '/generated/experience-dessert.webp',
      badge: 'Sweet',
    },
    {
      name: 'Strawberry Cup',
      description: 'Fresh strawberry flavor with a chilled café texture.',
      price: '$4.75',
      image: '/generated/drink-strawberry.webp',
    },
    {
      name: 'Mango Cream',
      description: 'Tropical mango sweetness served soft and smooth.',
      price: '$5.00',
      image: '/generated/drink-mango.webp',
    },
    {
      name: 'Lotus Milk Cake',
      description: 'Soft cake layers with a warm caramel finish.',
      price: '$4.90',
      image: '/generated/experience-dessert.webp',
    },
    {
      name: 'Chocolate Dream',
      description: 'Deep cocoa richness with a relaxed café sweetness.',
      price: '$4.65',
      image: '/generated/drink-latte.webp',
    },
  ],
  Shisha: [
    {
      name: 'Double Apple',
      description: 'A classic shisha flavor for slow evenings.',
      price: '$4.50',
      image: '/generated/experience-main.webp',
      badge: 'Classic',
    },
    {
      name: 'Lemon and Mint',
      description: 'Bright lemon freshness balanced with cool mint.',
      price: '$4.50',
      image: '/generated/experience-sign.webp',
    },
    {
      name: 'Grape and Berry',
      description: 'Smooth grape flavor with a berry finish.',
      price: '$4.50',
      image: '/generated/drink-hibiscus.webp',
    },
    {
      name: 'Blueberry',
      description: 'Soft blueberry flavor for a calm lounge mood.',
      price: '$4.50',
      image: '/generated/drink-space-special.webp',
    },
    {
      name: 'Orange and Mint',
      description: 'Citrus freshness with a cool mint close.',
      price: '$4.50',
      image: '/generated/hero-plate.png',
    },
  ],
};
