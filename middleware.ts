import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/auth";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/login") {
    if (getSession(request)) {
      return NextResponse.redirect(new URL("/", request.url));
    } else {
      return NextResponse.next();
    }
  } else if (request.nextUrl.pathname === "/register") {
    return NextResponse.next();
  } else {
    if (getSession(request)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  

  // return NextResponse.redirect(new URL("/", request.url))
  //   const res = NextResponse.next();
  //   let expires = new Date(Date.now() + 10 * 1000);
  //   const session = request.cookies.get("session")?.value;
  //   if (!session) {
  //     console.log("no session")
  //   }
  //   res.cookies.set({
  //     name: "session",
  //     value: "session",
  //     httpOnly: true,
  //     expires: expires,
  //   });
  //   return res;
  // }

  // export const config = {
  //   matcher: "",
}

export const config = {
  matcher: ['/login', '/register', "/"],
}
