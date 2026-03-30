import { NextResponse } from 'next/server';
import { getTimeSeries } from '@/lib/analytics';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const days = parseInt(searchParams.get('days') || '30');

  try {
    const data = await getTimeSeries(days);
    const rows = data.rows?.map((row) => ({
      date: row.dimensionValues?.[0]?.value,
      sessions: parseInt(row.metricValues?.[0]?.value || '0'),
      users: parseInt(row.metricValues?.[1]?.value || '0'),
    }));
    return NextResponse.json(rows);
  } catch (error) {
    console.error('GA4 TimeSeries Error:', error);
    return NextResponse.json({ error: 'GA4 bağlantı hatası' }, { status: 500 });
  }
}
