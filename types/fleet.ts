export interface FleetVehicle {
  id: string;
  slug: string;
  name: string;
  capacityMin: number;
  capacityMax: number;
  idealFor: string;
  features: string[];
}
