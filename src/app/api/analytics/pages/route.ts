import { NextResponse } from 'next/server';
import { getTopPages } from '@/lib/analytics';

export async function GET() {
  try {
    const data = await getTopPages();
    const rows = data.rows?.map((row) => ({
      path: row.dimensionValues?.[0]?.value,
      title: row.dimensionValues?.[1]?.value,
      views: parseInt(row.metricValues?.[0]?.value || '0'),
      avgDuration: parseFloat(row.metricValues?.[1]?.value || '0'),
    }));
    return NextResponse.json(rows);
  } catch (error) {
    console.error('GA4 Pages Error:', error);
    return NextResponse.json({ error: 'GA4 bağlantı hatası' }, { status: 500 });
  }
}
