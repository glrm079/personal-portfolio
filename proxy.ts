import { NextResponse, type NextRequest } from "next/server";

import { getDocumentLanguage } from "@/lib/document-language";

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(
    "x-portfolio-document-language",
    getDocumentLanguage(request.nextUrl.pathname),
  );

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
