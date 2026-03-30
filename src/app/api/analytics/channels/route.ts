import { NextResponse } from 'next/server';
import { getChannels } from '@/lib/analytics';

export async function GET() {
  try {
    const data = await getChannels();
    const rows = data.rows?.map((row) => ({
      channel: row.dimensionValues?.[0]?.value,
      sessions: parseInt(row.metricValues?.[0]?.value || '0'),
      users: parseInt(row.metricValues?.[1]?.value || '0'),
    }));
    return NextResponse.json(rows);
  } catch (error) {
    console.error('GA4 Channels Error:', error);
    return NextResponse.json({ error: 'GA4 bağlantı hatası' }, { status: 500 });
  }
}
