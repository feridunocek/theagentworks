import { NextResponse } from 'next/server';
import { getTimeSeries } from '@/lib/analytics';
import { detectPatterns } from '@/lib/patterns';

export async function GET() {
  try {
    const data = await getTimeSeries(30);
    const timeseries = data.rows?.map((row) => ({
      date: row.dimensionValues?.[0]?.value!,
      sessions: parseInt(row.metricValues?.[0]?.value || '0'),
    })) || [];

    const insights = detectPatterns(timeseries);
    return NextResponse.json(insights);
  } catch (error) {
    console.error('GA4 Patterns Error:', error);
    return NextResponse.json({ error: 'Pattern analizi hatası' }, { status: 500 });
  }
}
