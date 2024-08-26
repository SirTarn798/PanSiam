import { NextResponse } from "next/server";

export function middleware(request) {
  // return NextResponse.redirect(new URL("/", request.url))
  const res = NextResponse.next();
  let expires = new Date(Date.now() + 10 * 60480000);
  const session = request.cookies.get("session")?.value;
  if (!session) {
    console.log("no session")
  }
  res.cookies.set({
    name: "session",
    value: "session",
    httpOnly: true,
    expires: expires,
  });
  return res;
}

export const config = {
  matcher: "",
};
