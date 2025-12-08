export interface WorkItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  location: string;
  services: string[];
  description: string;
  coverImage: string;
  gallery: string[];
  content: Array<{
    type: 'text' | 'image' | 'grid' | 'video';
    value: string | string[];
    caption?: string;
  }>;
}

export const works: WorkItem[] = [
  {
    id: 1,
    slug: 'urban-center',
    title: 'Urban Center',
    category: 'Commercial',
    year: '2024',
    client: 'Metropolis Group',
    location: 'Seoul, South Korea',
    services: ['Architecture', 'Interior Design', 'Branding'],
    description:
      'A landmark mixed-use development that redefines the city skyline. The Urban Center integrates commercial, residential, and cultural spaces into a cohesive vertical ecosystem.',
    coverImage:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop',
    ],
    content: [
      {
        type: 'text',
        value:
          'The concept was born from the intersection of nature and technology. We wanted to create a space that feels organic yet futuristic, a place where people can connect with both the environment and each other.',
      },
      {
        type: 'image',
        value:
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        caption: 'Exterior facade at dusk',
      },
      {
        type: 'text',
        value:
          "Sustainability was at the core of our design process. We utilized advanced materials and energy-efficient systems to minimize the building's carbon footprint while maximizing comfort for its occupants.",
      },
      {
        type: 'grid',
        value: [
          'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2070&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop',
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'forest-retreat',
    title: 'Forest Retreat',
    category: 'Individual',
    year: '2023',
    client: 'Private Client',
    location: 'Jeju, South Korea',
    services: ['Architecture', 'Landscape'],
    description:
      'A secluded sanctuary nestled in the heart of the forest. This residence is designed to blend seamlessly with its surroundings, offering a peaceful escape from the chaos of modern life.',
    coverImage:
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop',
    gallery: [],
    content: [
      {
        type: 'text',
        value:
          'Living in harmony with nature. The design prioritizes natural light and ventilation, blurring the boundaries between indoors and outdoors.',
      },
      {
        type: 'image',
        value:
          'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 3,
    slug: 'tech-hub',
    title: 'Tech Hub',
    category: 'Interior',
    year: '2024',
    client: 'Innovate Corp',
    location: 'Pangyo, South Korea',
    services: ['Interior Design', 'Space Planning'],
    description:
      'A dynamic workspace designed to foster collaboration and innovation. The Tech Hub features flexible workstations, breakout areas, and state-of-the-art meeting rooms.',
    coverImage:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    gallery: [],
    content: [
      {
        type: 'text',
        value:
          'Designed for the future of work. We created a variety of spaces to support different working styles, from focused individual work to collaborative team sessions.',
      },
      {
        type: 'image',
        value:
          'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 4,
    slug: 'art-gallery',
    title: 'Art Gallery',
    category: 'Interior',
    year: '2023',
    client: 'Modern Art Foundation',
    location: 'Seoul, South Korea',
    services: ['Interior Design', 'Lighting Design'],
    description:
      'A minimalist canvas for contemporary art. The gallery design emphasizes clean lines and neutral tones to let the artwork take center stage.',
    coverImage:
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1974&auto=format&fit=crop',
    gallery: [],
    content: [
      {
        type: 'text',
        value:
          'Light as a material. We used sophisticated lighting systems to enhance the viewing experience and create a dramatic atmosphere.',
      },
      {
        type: 'image',
        value:
          'https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1974&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 5,
    slug: 'skyline-tower',
    title: 'Skyline Tower',
    category: 'Commercial',
    year: '2024',
    client: 'Global Assets',
    location: 'Busan, South Korea',
    services: ['Architecture'],
    description:
      'A vertical city rising above the harbor. The Skyline Tower is a symbol of economic growth and architectural ambition.',
    coverImage:
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2010&auto=format&fit=crop',
    gallery: [],
    content: [
      {
        type: 'text',
        value:
          "Reaching for the sky. The tower's sleek profile and reflective glass facade mirror the changing colors of the sky and sea.",
      },
      {
        type: 'image',
        value:
          'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2010&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 6,
    slug: 'eco-villa',
    title: 'Eco Villa',
    category: 'Individual',
    year: '2023',
    client: 'Green Living',
    location: 'Yangpyeong, South Korea',
    services: ['Architecture', 'Sustainability Consulting'],
    description:
      'A sustainable home that generates its own energy. The Eco Villa demonstrates that luxury and environmental responsibility can go hand in hand.',
    coverImage:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    gallery: [],
    content: [
      {
        type: 'text',
        value:
          'Powered by nature. Solar panels, geothermal heating, and rainwater harvesting systems make this home a model of self-sufficiency.',
      },
      {
        type: 'image',
        value:
          'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 7,
    slug: 'brand-film',
    title: 'Brand Film',
    category: 'Video',
    year: '2024',
    client: 'Fashion Label X',
    location: 'Seoul, South Korea',
    services: ['Video Production', 'Art Direction'],
    description:
      'A cinematic journey into the world of high fashion. This brand film captures the essence of the new collection through evocative imagery and sound.',
    coverImage:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop',
    gallery: [],
    content: [
      {
        type: 'text',
        value:
          'Visual storytelling. We focused on creating a mood and an emotional connection with the audience, rather than just showcasing products.',
      },
      {
        type: 'image',
        value:
          'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 8,
    slug: 'glass-house',
    title: 'Glass House',
    category: 'Individual',
    year: '2023',
    client: 'Private Client',
    location: 'Gapyeong, South Korea',
    services: ['Architecture', 'Interior Design'],
    description:
      'A transparent dwelling that invites the outside in. The Glass House is an experiment in openness and connection with the landscape.',
    coverImage:
      'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2084&auto=format&fit=crop',
    gallery: [],
    content: [
      {
        type: 'text',
        value:
          'Living without walls. The extensive use of glass creates a sense of boundlessness, making the house feel like part of the garden.',
      },
      {
        type: 'image',
        value:
          'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2084&auto=format&fit=crop',
      },
    ],
  },
];
