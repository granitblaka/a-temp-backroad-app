import tour1 from './assets/images/tour-1.jpeg';
import tour2 from './assets/images/tour-2.jpeg';
import tour3 from './assets/images/tour-3.jpeg';
import tour4 from './assets/images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'www.twitter.com', icon: 'fab fa-twitter' },
  { id: 2, href: 'www.facebook.com', icon: 'fab fa-facebook' },
  { id: 3, href: 'www.instagram.com', icon: 'fab fa-instagram' },
];

export const servicesData = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elite Asperiores, official.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elite Asperiores, official.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elite Asperiores, official.',
  },
];

export const toursData = [
  {
    id: 1,
    img: tour1,
    tourdate: 'august 26th, 2020',
    tourtitle: 'Tibet Adventure',
    tourinfo:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'china',
    days: '6 days',
    price: 'from $2100',
  },
  {
    id: 2,
    img: tour2,
    tourdate: 'october 1th, 2020',
    tourtitle: 'best of java',
    tourinfo:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'indonesia',
    days: '11 days',
    price: 'from $1400',
  },
  {
    id: 3,
    img: tour3,
    tourdate: 'september 15th, 2020',
    tourtitle: 'explore hong kong',
    tourinfo:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'hong kong',
    days: '8 days',
    price: 'from $5000',
  },
  {
    id: 4,
    img: tour4,
    tourdate: 'december 5th, 2019',
    tourtitle: 'kenya highlights',
    tourinfo:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'kenya',
    days: '20 days',
    price: 'from $3300',
  },
];
