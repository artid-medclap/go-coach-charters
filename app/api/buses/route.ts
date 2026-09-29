import { NextResponse } from "next/server";
import { buses } from "@/data/buses";

export async function GET() {
  return NextResponse.json({ buses });
}
