import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";
import { routes } from "@/config/routes";

export const proxy = async (request: NextRequest) => {
  const sessionCookie = getSessionCookie(request);
  const { pathname } = request.nextUrl;
  console.log({ pathname });
  if (sessionCookie && ["/auth/login", "/auth/register"].includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  if (!sessionCookie && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL(routes.login, request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard", "/auth/login", "/auth/register"],
};
