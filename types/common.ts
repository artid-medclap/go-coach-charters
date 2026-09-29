export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  initials: string;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  code: string;
  validTill: string;
}
