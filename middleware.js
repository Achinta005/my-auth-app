import { NextResponse } from 'next/server';

export function middleware(request) {
  // Since we can't access localStorage in middleware, 
  // we'll handle auth checks in the components
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
};