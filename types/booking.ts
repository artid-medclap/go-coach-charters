export interface BookingRequest {
  busId: string;
  passengers: number;
  seats: string[];
  contactEmail: string;
}

export interface BookingConfirmation extends BookingRequest {
  bookingId: string;
  status: "confirmed" | "pending" | "cancelled";
}
