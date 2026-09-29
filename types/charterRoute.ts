export interface CharterRoute {
  id: string;
  slug: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  priceFrom: number;
  description: string;
  image:string;
  tag:string;
  tripsCount:string;
  passengerCount:string;
  featured:boolean;
}
