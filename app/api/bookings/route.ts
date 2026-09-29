import { NextResponse } from "next/server";
import type { BookingRequest } from "@/types/booking";

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<BookingRequest>;

  if (!body.busId || !body.contactEmail) {
    return NextResponse.json({ error: "busId and contactEmail are required." }, { status: 400 });
  }

  return NextResponse.json(
    {
      bookingId: `GC-${Date.now()}`,
      status: "confirmed",
      ...body,
    },
    { status: 201 }
  );
}
