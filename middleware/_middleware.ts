import { NextResponse } from "next/server";

//if not verified, and user tries to access these pages, it will re-route to signin
const signInPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (signInPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.PH_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}
