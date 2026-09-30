import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE } from "@/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) return NextResponse.next();

  // The default locale has no prefix: /ru/... would duplicate /..., so collapse it.
  if (pathname === `/${DEFAULT_LOCALE}` || pathname.startsWith(`/${DEFAULT_LOCALE}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(DEFAULT_LOCALE.length + 1) || "/";
    url.search = search;
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|images|models|favicon.ico|icon|apple-icon|manifest.webmanifest|robots.txt|sitemap.xml|og.jpg|.*\\..*).*)"],
};
