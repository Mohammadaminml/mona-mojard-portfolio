export interface INavItem {
  label: string;
  href: string;
}

export interface IContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface IPersonalDetail {
  label: string;
  value: string | number;
}

export interface IAboutData {
  sectionTitle: string;
  headline: string;
  paragraphs: string[];
  details: IPersonalDetail[];
}

export interface IProject {
  id: number;
  title: string;
  imageUrl: string;
  prototypeUrl: string;
}

export interface IPortfolioData {
  brandName: string;
  navItems: INavItem[];
  hero: {
    greeting: string;
    role: string;
    tagline: string;
    avatarUrl: string;
    contact: IContactInfo;
  };
  about: IAboutData;
  projects: IProject[];
}