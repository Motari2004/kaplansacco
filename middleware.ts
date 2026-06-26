import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const path = req.nextUrl.pathname

    // Allow public routes
    const publicRoutes = ['/', '/login', '/register']
    if (publicRoutes.includes(path)) {
      return NextResponse.next()
    }

    // If no token, redirect to login
    if (!token) {
      const loginUrl = new URL('/login', req.url)
      loginUrl.searchParams.set('callbackUrl', path)
      return NextResponse.redirect(loginUrl)
    }

    // Check if user is admin
    const isAdmin = token.role === 'ADMIN'

    // Redirect admin to admin dashboard if trying to access regular dashboard
    if (path.startsWith('/dashboard') && isAdmin) {
      return NextResponse.redirect(new URL('/admin', req.url))
    }

    // Redirect non-admin away from admin pages
    if (path.startsWith('/admin') && !isAdmin) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // Allow access to public routes
        return true
      },
    },
  }
)

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*',
    '/login',
    '/register',
  ],
}