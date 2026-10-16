import { IPortfolioData } from '../interfaces/portfolio.interface';

export const portfolioData: IPortfolioData = {
  brandName: 'Mona',
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    greeting: 'Hi There!',
    role: 'UI/UX designer',
    tagline: 'I turn complex problems into simple, beautiful solutions.',
    avatarUrl: '/images/mona-profile.png',
    contact: {
      email: 'mona.h.mojarrad@gmail.com',
      phone: '+98 9119502316',
      location: 'tehran',
    },
  },
  about: {
    sectionTitle: 'Who am I?',
    headline:
      "I'm Mona Haffar Mojarrad, a UX/UI Designer focused on crafting clean, functional, and user-centered experiences for mobile apps and websites.",
    paragraphs: [
      'With hands-on experience in turning feature lists into structured user flows, wireframes, and high-fidelity prototypes, I make sure each design speaks clearly and works seamlessly.',
      'I regularly collaborate with developers to ensure accurate implementation and also conduct interface testing to refine usability and catch edge-case issues before launch.',
      'I enjoy simplifying complex problems through design — balancing aesthetics with functionality every step of the way.',
    ],
    details: [
      { label: 'Name', value: 'Mona Haffar Mojarrad' },
      { label: 'Age', value: 24 },
      { label: 'From', value: 'Tehran' },
      { label: 'Email', value: 'mona.h.mojarrad@gmail.com' },
    ],
  },
  projects: [
    {
      id: 1,
      title: 'Business Website - Team Work',
      imageUrl: '/images/project-1.png',
      prototypeUrl: 'https://www.figma.com/proto/kANS00ndKSfJr8MIXoz0sj/business?page-id=10008%3A17395&node-id=10108-5382&p=f&viewport=-1092%2C320%2C0.02&t=nCxG7uz8A0sKSr55-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10108%3A5382&show-proto-sidebar=1',
    },
    {
      id: 2,
      title: 'Dentist Project - Team Work',
      imageUrl: '/images/project-2.png',
      prototypeUrl: 'https://www.figma.com/proto/LchGZdvTWHQZ0LxZfyuamx/dentist?page-id=8001%3A17302&node-id=10615-68024&p=f&viewport=1708%2C730%2C0.03&t=fitxjdnTOc76Rduk-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=10615%3A68120&show-proto-sidebar=1',
    },
    {
      id: 3,
      title: 'Multi Service - Team Work',
      imageUrl: '/images/project-3.png',
      prototypeUrl: 'https://www.figma.com/proto/9Q6Oq7eUKTpQdZcj3Al6dD/Multi-services?page-id=11124%3A8693&node-id=11281-17943&p=f&viewport=-193%2C442%2C0.02&t=4nAay2oePB5EoyE6-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=11583%3A10913&show-proto-sidebar=1',
    },
    {
      id: 4,
      title: 'Shop Website - Team Work',
      imageUrl: '/images/project-4.png',
      prototypeUrl: 'https://www.figma.com/proto/joI9QGywJW3EK6jFFp1FDl/shop?page-id=10%3A36&node-id=13275-29835&p=f&viewport=585%2C270%2C0.02&t=gncenPIdgZoSCpCA-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=13275%3A29835&show-proto-sidebar=1',
    },
    {
      id: 5,
      title: 'Exchange Website - Team Work',
      imageUrl: '/images/project-5.png',
      prototypeUrl: 'https://www.figma.com/proto/6rLeyTxVeYhoGEJQSVhW0c/persian-exchange?page-id=9001%3A28092&node-id=9005-8713&p=f&viewport=-213%2C291%2C0.03&t=IVCNvWnqsyChuack-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=9005%3A8713',
    },
    {
      id: 6,
      title: 'Faculty Connect - Solo Project',
      imageUrl: '/images/project-6.png',
      prototypeUrl: 'https://www.figma.com/proto/uSNjE4BF1n7ZEpxZUEdNfd/didar?node-id=68-1577&t=b2HkCNlX2R6DIRR5-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=258%3A3287&show-proto-sidebar=1',
    },
    {
      id: 7,
      title: 'Styling App - Team Work',
      imageUrl: '/images/project-7.png',
      prototypeUrl: 'https://www.figma.com/proto/jxHQ57hoFrzeGYxz7Iq1nz/styling?node-id=18080-3531&t=hv9Xh913HUeC7IbO-1&scaling=scale-down&content-scaling=fixed&page-id=14040%3A227&starting-point-node-id=18091%3A3549&show-proto-sidebar=1',
    },
    {
      id: 8,
      title: 'Exchange Website - Team Work',
      imageUrl: '/images/project-8.png',
      prototypeUrl: 'https://www.figma.com/proto/i3eVpQoipT4KxzLsWqSQ0E/exchange-3?node-id=18189-6469&p=f&t=p3abvF2Q4VuMXTG7-1&scaling=min-zoom&content-scaling=fixed&page-id=11124%3A8693&starting-point-node-id=18189%3A6469',
    },
    {
      id: 9,
      title: 'Exchange App - Team Work',
      imageUrl: '/images/project-9.png',
      prototypeUrl: 'https://www.figma.com/proto/ov7EiKtz8HRNM6RRRA4NOl/exchange-1---2?node-id=15382-19203&p=f&t=0T2k1fs0SqArmOGi-1&scaling=scale-down&content-scaling=fixed&page-id=15008%3A2&starting-point-node-id=15382%3A19203',
    },
    {
      id: 10,
      title: 'Exchange Website - Team Work',
      imageUrl: '/images/project-10.png',
      prototypeUrl: 'https://www.figma.com/proto/ov7EiKtz8HRNM6RRRA4NOl/exchange-1---2?node-id=15039-23405&p=f&t=JBQiYuqHKcgtN2ec-1&scaling=min-zoom&content-scaling=fixed&page-id=13022%3A5250&starting-point-node-id=15039%3A23405',
    },
    {
      id: 11,
      title: 'Restuarant Website - Team Work',
      imageUrl: '/images/project-11.png',
      prototypeUrl: 'https://www.figma.com/proto/pA76LN6w6fg1OFfM1C66Lz/restuarant?node-id=8130-29875&p=f&t=208lEwHDrDzFPwct-1&scaling=min-zoom&content-scaling=fixed&page-id=8108%3A42874&starting-point-node-id=8130%3A29875',
    },
    {
      id: 12,
      title: 'Bakery Shop App - Team Work',
      imageUrl: '/images/project-12.png',
      prototypeUrl: 'https://www.figma.com/proto/MOSPLqPAbdBOOpKzi0Ulkv/bread?node-id=14138-5519&p=f&t=EiQyTuU4vyldP4C6-1&scaling=scale-down&content-scaling=fixed&page-id=14138%3A4705&starting-point-node-id=14138%3A5514&show-proto-sidebar=1',
    },
  ],
};