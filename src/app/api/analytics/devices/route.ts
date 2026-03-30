import { NextResponse } from 'next/server';
import { getDevices } from '@/lib/analytics';

export async function GET() {
  try {
    const data = await getDevices();
    const rows = data.rows?.map((row) => ({
      device: row.dimensionValues?.[0]?.value,
      sessions: parseInt(row.metricValues?.[0]?.value || '0'),
    }));
    return NextResponse.json(rows);
  } catch (error) {
    console.error('GA4 Devices Error:', error);
    return NextResponse.json({ error: 'GA4 bağlantı hatası' }, { status: 500 });
  }
}
