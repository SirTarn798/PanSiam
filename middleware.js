import { NextResponse } from "next/server";

export function middleware(request) {
    // return NextResponse.redirect(new URL("/", request.url))
    const res = NextResponse.next();
    let expires = new Date(Date.now() + 10 * 1000);
    res.cookies.set({
        name: "session",
        value: "xdd",
        httpOnly: true,
        expires: expires,
      });
    return res;
}

export const config = {
    matcher: "/login(.*)"
}