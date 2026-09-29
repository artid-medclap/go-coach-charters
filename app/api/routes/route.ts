import { NextResponse } from "next/server";
import { popularRoutes } from "@/data/routes";

export async function GET() {
  return NextResponse.json({ routes: popularRoutes });
}
