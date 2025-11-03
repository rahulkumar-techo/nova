/**
 * ✅ NextAuth Middleware (Protect Routes)
 * Protects /dashboard and /profile routes from unauthenticated access.
 * Works with App Router (Next.js 13+)
 */

import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // Custom middleware logic
  function middleware(req) {
    // Optional: Add extra protection or logging
    return NextResponse.next();
  },
  {
    callbacks: {
      /**
       * Check if the user is authenticated.
       * Returning `true` allows the request; `false` redirects to sign-in page.
       */
      authorized: ({ token }) => !!token,
    },
  }
);

/**
 * ✅ Apply middleware only to protected routes
 */
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
};
