import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const dashboardSecret = process.env.DASHBOARD_SECRET_TOKEN;
  const isDashboard = pathname.startsWith('/dashboard');
  const isAnalyticsApi = pathname.startsWith('/api/analytics');

  if (!isDashboard && !isAnalyticsApi) {
    return NextResponse.next();
  }

  const cookieToken = request.cookies.get('dashboard-token')?.value;
  const queryToken = isDashboard
    ? request.nextUrl.searchParams.get('access')
    : null;

  // Fail closed when the secret is unavailable. API requests never accept
  // credentials from the URL; they require the protected session cookie.
  if (!dashboardSecret) {
    return new NextResponse('Not Found', { status: 404 });
  }

  // A valid one-time dashboard link must replace a stale cookie after secret
  // rotation. Remove the credential from the URL immediately after use.
  if (isDashboard && queryToken === dashboardSecret) {
    const cleanUrl = request.nextUrl.clone();
    cleanUrl.searchParams.delete('access');

    const response = NextResponse.redirect(cleanUrl);
    response.cookies.set('dashboard-token', dashboardSecret, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    });
    return response;
  }

  if (!cookieToken || cookieToken !== dashboardSecret) {
    return new NextResponse('Not Found', { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/analytics/:path*'],
};
