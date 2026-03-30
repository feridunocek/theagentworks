import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/dashboard')) {
    const cookieToken = request.cookies.get('dashboard-token')?.value;
    const queryToken = request.nextUrl.searchParams.get('access');
    const token = cookieToken || queryToken;

    if (token !== process.env.DASHBOARD_SECRET_TOKEN) {
      return new NextResponse('Not Found', { status: 404 });
    }

    const response = NextResponse.next();

    if (!cookieToken && queryToken) {
      response.cookies.set('dashboard-token', queryToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 30, // 30 days
      });
    }

    return response;
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/analytics/:path*'], // Secure API routes as well
};
