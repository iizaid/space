export type Testimonial = {
  name: string;
  meta: string;
  review: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Lina Haddad',
    meta: 'Regular Guest · Aqaba',
    review:
      'Space Restocafe is my go-to spot in Aqaba. The shisha is smooth, the Spanish latte is always perfect, and the indoor seating is so cozy. I come here almost every weekend with friends.',
    initials: 'LH',
  },
  {
    name: 'Omar Al-Khatib',
    meta: 'First-time Visitor',
    review:
      'Tried the Space Burger and the Hibiscus Breeze on my first visit — both were incredible. The staff was friendly and the vibe was exactly what I needed after a long day.',
    initials: 'OA',
  },
  {
    name: 'Maya Samara',
    meta: 'Aqaba Local',
    review:
      'Best desserts in Aqaba, hands down. The Lotus Milk Cake is heavenly. The atmosphere is calm, modern, and perfect for a quiet evening or a catch-up with friends.',
    initials: 'MS',
  },
  {
    name: 'Ahmad Nasser',
    meta: 'Google Review',
    review:
      'Everything about this place is premium — from the food quality to the presentation. The grilled salmon was outstanding and the service was top-notch. Highly recommended.',
    initials: 'AN',
  },
  {
    name: 'Sara Khalil',
    meta: 'Regular Guest · Aqaba',
    review:
      'I love the Thursday night vibes here. Great shisha flavors, amazing drinks, and the music is always on point. Space Restocafe knows how to create an experience.',
    initials: 'SK',
  },
];
