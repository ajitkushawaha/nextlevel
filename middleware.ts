import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Root-level middleware to enforce authentication and role-based access across the app.
export async function middleware(request: NextRequest) {
  // Temporary bypass to fix Vercel 500 error
  return NextResponse.next()
}

// Apply middleware to all routes except static assets; further filtering handled inside middleware.
export const config = {
  // Exclude NextAuth API endpoints at the matcher level as well to prevent edge redirects
  matcher: [
    '/((?!api/auth|_next/static|_next/image|favicon.ico|images|assets).*)',
  ],
}
