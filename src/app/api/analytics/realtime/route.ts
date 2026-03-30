import { NextResponse } from 'next/server';
import { getRealtime } from '@/lib/analytics';

export async function GET() {
  try {
    const data = await getRealtime();
    const activeUsers = parseInt(data.rows?.[0]?.metricValues?.[0]?.value || '0');
    return NextResponse.json({ activeUsers });
  } catch (error) {
    console.error('GA4 Realtime Error:', error);
    return NextResponse.json({ error: 'GA4 bağlantı hatası' }, { status: 500 });
  }
}
