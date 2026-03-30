import { NextResponse } from 'next/server';
import { getOverview } from '@/lib/analytics';

export async function GET() {
  try {
    const data = await getOverview();
    const current = data.rows?.[0];
    const previous = data.rows?.[1];

    const format = (row: any, i: number) =>
      parseFloat(row?.metricValues?.[i]?.value || '0');

    return NextResponse.json({
      sessions: { current: format(current, 0), previous: format(previous, 0) },
      users: { current: format(current, 1), previous: format(previous, 1) },
      pageviews: { current: format(current, 2), previous: format(previous, 2) },
      bounceRate: { current: format(current, 3), previous: format(previous, 3) },
      avgDuration: { current: format(current, 4), previous: format(previous, 4) },
    });
  } catch (error) {
    console.error('GA4 Overview Error:', error);
    return NextResponse.json({ error: 'GA4 bağlantı hatası' }, { status: 500 });
  }
}
