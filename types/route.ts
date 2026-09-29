export interface BusRoute {
  id: string;
  slug: string;
  from: string;
  to: string;
  duration: string;
  priceFrom: number;
  departuresPerDay: number;
  rating: number;
}
