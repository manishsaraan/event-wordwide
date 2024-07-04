import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest, res: NextResponse) {
  return NextResponse.redirect(new URL("/events/all", request.url));
}

export const config = {
  matcher: ["/events"],
};
