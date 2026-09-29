export interface Bus {
  id: string;
  operator: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  seatsAvailable: number;
  amenities: string[];
  rating: number;
}
