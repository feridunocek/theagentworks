# theagent-works.com — GA4 Dashboard Uygulama Talimatları
## Google Antigravity için

Bu dosya, theagent-works.com sitesine entegre edilecek bir Google Analytics 4 dashboard'u inşa etmek için gereken tüm adımları içerir. Aşağıdaki adımları sırayla uygula. Bir adımda eksik bilgi varsa (örneğin Property ID, token değeri gibi), kullanıcıya sor.

---

## Proje Hedefi

- theagent-works.com sitesinde, URL'de gizli token bulunan kişilerin erişebildiği bir analytics dashboard'u
- Google Analytics 4 verilerini çekerek grafik ve istatistik olarak gösterir
- Önemli trafik örüntülerini ve anomalileri otomatik tespit eder
- E-mail veya zamanlı rapor gibi özellikler **dahil değil**

---

## Kullanıcıdan Önceden Alınması Gereken Bilgiler

Başlamadan önce kullanıcıya şunları sor (hepsi yoksa teker teker sor):

1. **GA4 Property ID** — GA4 Admin panelinde "Property Settings" altında yazar. Format: `123456789` (sadece rakam)
2. **Dashboard için gizli token** — Örn: `mySuperSecretToken2026` — ya kullanıcı verir ya da sen rastgele 32 karakterlik bir token üret ve ona göster
3. **Next.js projesi mevcut mu?** — theagent-works.com zaten Next.js üzerinde mi çalışıyor, yoksa dashboard ayrı bir proje mi olacak?
4. **Hosting:** Vercel mi kullanılıyor?

---

## Adım 1 — Google Cloud: Service Account Oluştur

Kullanıcıya şu adımları yaptır (ya da ekran görüntüsü/çıktısını senden iste):

1. https://console.cloud.google.com adresine git
2. Üst menüden mevcut projeyi seç ya da yeni proje oluştur
3. Sol menü → **APIs & Services** → **Enabled APIs & Services**
4. **+ ENABLE APIS AND SERVICES** → "Google Analytics Data API" ara → Etkinleştir
5. Sol menü → **IAM & Admin** → **Service Accounts**
6. **+ CREATE SERVICE ACCOUNT** → İsim ver (örn: `ga4-dashboard-reader`) → Create and Continue
7. Role seçme adımını atla (GA4 tarafında izin vereceğiz) → Done
8. Oluşturulan service account'a tıkla → **Keys** sekmesi → **Add Key** → **Create new key** → JSON → İndir

İndirilen JSON dosyasından şu iki değeri kopyala:
- `client_email` → bu `GOOGLE_SERVICE_ACCOUNT_EMAIL` olacak
- `private_key` → bu `GOOGLE_PRIVATE_KEY` olacak

---

## Adım 2 — GA4: Service Account'a Erişim Ver

1. https://analytics.google.com adresine git
2. Sol alt → **Admin** (dişli çark)
3. **Property** sütununda → **Property Access Management**
4. Sağ üst **+** butonu → **Add users**
5. E-mail alanına Adım 1'deki `client_email` değerini yapıştır
6. Rol: **Viewer** seç
7. **Add** ile kaydet

---

## Adım 3 — Next.js Projesi Kurulumu

Eğer dashboard mevcut siteye ekleniyorsa bu adımı atla, doğrudan Adım 4'e geç.

Eğer ayrı bir proje ise:

```bash
npx create-next-app@latest ga4-dashboard --typescript --tailwind --app --no-src-dir
cd ga4-dashboard
```

Gerekli paketleri yükle:

```bash
npm install googleapis
npm install recharts
npm install @upstash/redis
```

---

## Adım 4 — Çevre Değişkenleri

Proje kök dizininde `.env.local` dosyası oluştur:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=buraya_client_email_gelecek
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nBURAYA_PRIVATE_KEY_GELECEK\n-----END PRIVATE KEY-----\n"
GA4_PROPERTY_ID=properties/BURAYA_PROPERTY_ID_GELECEK
DASHBOARD_SECRET_TOKEN=BURAYA_32_KARAKTERLIK_TOKEN_GELECEK
```

> **Not:** `GOOGLE_PRIVATE_KEY` değerinde gerçek satır sonları `\n` olarak yazılmalı. JSON dosyasından kopyalarken bu otomatik gelir ama kontrol et.

Vercel kullanılıyorsa bu değerleri Vercel Dashboard → Project → Settings → Environment Variables'a da ekle.

---

## Adım 5 — Middleware (Gizli URL Koruması)

Proje kök dizininde `middleware.ts` dosyası oluştur:

```typescript
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
        maxAge: 60 * 60 * 24 * 30,
      });
    }

    return response;
  }
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
```

---

## Adım 6 — GA4 API Wrapper

`lib/analytics.ts` dosyası oluştur:

```typescript
import { BetaAnalyticsDataClient } from '@google-analytics/data';

const analyticsClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
});

const propertyId = process.env.GA4_PROPERTY_ID!;

export async function getOverview() {
  const [response] = await analyticsClient.runReport({
    property: propertyId,
    dateRanges: [
      { startDate: '30daysAgo', endDate: 'today' },
      { startDate: '60daysAgo', endDate: '31daysAgo' },
    ],
    metrics: [
      { name: 'sessions' },
      { name: 'totalUsers' },
      { name: 'screenPageViews' },
      { name: 'bounceRate' },
      { name: 'averageSessionDuration' },
    ],
  });
  return response;
}

export async function getTimeSeries(days = 30) {
  const [response] = await analyticsClient.runReport({
    property: propertyId,
    dateRanges: [{ startDate: `${days}daysAgo`, endDate: 'today' }],
    dimensions: [{ name: 'date' }],
    metrics: [{ name: 'sessions' }, { name: 'totalUsers' }],
    orderBys: [{ dimension: { dimensionName: 'date' } }],
  });
  return response;
}

export async function getTopPages() {
  const [response] = await analyticsClient.runReport({
    property: propertyId,
    dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
    dimensions: [{ name: 'pagePath' }, { name: 'pageTitle' }],
    metrics: [{ name: 'screenPageViews' }, { name: 'averageSessionDuration' }],
    orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
    limit: 10,
  });
  return response;
}

export async function getChannels() {
  const [response] = await analyticsClient.runReport({
    property: propertyId,
    dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
    dimensions: [{ name: 'sessionDefaultChannelGroup' }],
    metrics: [{ name: 'sessions' }, { name: 'totalUsers' }],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
  });
  return response;
}

export async function getDevices() {
  const [response] = await analyticsClient.runReport({
    property: propertyId,
    dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
    dimensions: [{ name: 'deviceCategory' }],
    metrics: [{ name: 'sessions' }, { name: 'totalUsers' }],
  });
  return response;
}

export async function getRealtime() {
  const [response] = await analyticsClient.runRealtimeReport({
    property: propertyId,
    metrics: [{ name: 'activeUsers' }],
  });
  return response;
}
```

---

## Adım 7 — API Routes

### `app/api/analytics/overview/route.ts`

```typescript
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
    return NextResponse.json({ error: 'GA4 bağlantı hatası' }, { status: 500 });
  }
}
```

### `app/api/analytics/timeseries/route.ts`

```typescript
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
    return NextResponse.json({ error: 'GA4 bağlantı hatası' }, { status: 500 });
  }
}
```

### `app/api/analytics/pages/route.ts`

```typescript
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
    return NextResponse.json({ error: 'GA4 bağlantı hatası' }, { status: 500 });
  }
}
```

### `app/api/analytics/channels/route.ts`

```typescript
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
    return NextResponse.json({ error: 'GA4 bağlantı hatası' }, { status: 500 });
  }
}
```

### `app/api/analytics/devices/route.ts`

```typescript
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
    return NextResponse.json({ error: 'GA4 bağlantı hatası' }, { status: 500 });
  }
}
```

### `app/api/analytics/realtime/route.ts`

```typescript
import { NextResponse } from 'next/server';
import { getRealtime } from '@/lib/analytics';

export async function GET() {
  try {
    const data = await getRealtime();
    const activeUsers = parseInt(data.rows?.[0]?.metricValues?.[0]?.value || '0');
    return NextResponse.json({ activeUsers });
  } catch (error) {
    return NextResponse.json({ error: 'GA4 bağlantı hatası' }, { status: 500 });
  }
}
```

---

## Adım 8 — Pattern Engine

`lib/patterns.ts` dosyası oluştur:

```typescript
export interface Insight {
  type: 'spike' | 'drop' | 'trend_up' | 'trend_down' | 'milestone';
  severity: 'positive' | 'warning' | 'info';
  message: string;
}

function average(nums: number[]) {
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

export function detectPatterns(
  timeseries: { date: string; sessions: number }[]
): Insight[] {
  const insights: Insight[] = [];
  if (timeseries.length < 14) return insights;

  const prev7 = timeseries.slice(-14, -7).map((d) => d.sessions);
  const last7 = timeseries.slice(-7).map((d) => d.sessions);
  const prevAvg = average(prev7);
  const lastAvg = average(last7);

  if (prevAvg === 0) return insights;
  const change = ((lastAvg - prevAvg) / prevAvg) * 100;

  if (change > 30) {
    insights.push({
      type: 'spike',
      severity: 'positive',
      message: `Son 7 günde trafik bir önceki haftaya göre %${Math.round(change)} arttı.`,
    });
  } else if (change < -20) {
    insights.push({
      type: 'drop',
      severity: 'warning',
      message: `Son 7 günde trafik bir önceki haftaya göre %${Math.abs(Math.round(change))} düştü.`,
    });
  } else if (change > 10) {
    insights.push({
      type: 'trend_up',
      severity: 'positive',
      message: `Trafik yavaş yavaş artıyor (%${Math.round(change)} haftalık büyüme).`,
    });
  } else if (change < -10) {
    insights.push({
      type: 'trend_down',
      severity: 'warning',
      message: `Trafik hafif düşüş eğiliminde (%${Math.abs(Math.round(change))} haftalık).`,
    });
  }

  const maxDay = timeseries.slice(-30).reduce((a, b) =>
    a.sessions > b.sessions ? a : b
  );
  const recentMax = timeseries.slice(-7).find((d) => d.date === maxDay.date);
  if (recentMax) {
    insights.push({
      type: 'milestone',
      severity: 'positive',
      message: `Son 30 günün en yüksek trafik günü: ${maxDay.date} (${maxDay.sessions} session).`,
    });
  }

  return insights;
}
```

`app/api/analytics/patterns/route.ts` oluştur:

```typescript
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
    return NextResponse.json({ error: 'Pattern analizi hatası' }, { status: 500 });
  }
}
```

---

## Adım 9 — Dashboard Sayfası

`app/dashboard/page.tsx` oluştur:

```typescript
'use client';

import { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from 'recharts';

const COLORS = ['#6366f1', '#22d3ee', '#f59e0b', '#10b981', '#f43f5e'];

function StatCard({ label, value, prev, unit = '' }: any) {
  const change = prev > 0 ? ((value - prev) / prev) * 100 : 0;
  const up = change >= 0;
  return (
    <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '20px 24px' }}>
      <div style={{ fontSize: 13, color: '#888', marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 600 }}>
        {typeof value === 'number' ? value.toLocaleString('tr-TR') : value}{unit}
      </div>
      {prev > 0 && (
        <div style={{ fontSize: 12, color: up ? '#10b981' : '#f43f5e', marginTop: 4 }}>
          {up ? '▲' : '▼'} %{Math.abs(change).toFixed(1)} önceki döneme göre
        </div>
      )}
    </div>
  );
}

export default function Dashboard() {
  const [overview, setOverview] = useState<any>(null);
  const [timeseries, setTimeseries] = useState<any[]>([]);
  const [pages, setPages] = useState<any[]>([]);
  const [channels, setChannels] = useState<any[]>([]);
  const [devices, setDevices] = useState<any[]>([]);
  const [realtime, setRealtime] = useState<number>(0);
  const [insights, setInsights] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      const [ov, ts, pg, ch, dv, rt, ins] = await Promise.all([
        fetch('/api/analytics/overview').then((r) => r.json()),
        fetch('/api/analytics/timeseries?days=30').then((r) => r.json()),
        fetch('/api/analytics/pages').then((r) => r.json()),
        fetch('/api/analytics/channels').then((r) => r.json()),
        fetch('/api/analytics/devices').then((r) => r.json()),
        fetch('/api/analytics/realtime').then((r) => r.json()),
        fetch('/api/analytics/patterns').then((r) => r.json()),
      ]);
      setOverview(ov);
      setTimeseries(ts || []);
      setPages(pg || []);
      setChannels(ch || []);
      setDevices(dv || []);
      setRealtime(rt.activeUsers || 0);
      setInsights(ins || []);
      setLoading(false);
    };

    fetchAll();
    const interval = setInterval(() => {
      fetch('/api/analytics/realtime').then((r) => r.json()).then((d) => setRealtime(d.activeUsers || 0));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontSize: 16, color: '#888' }}>
      Veriler yükleniyor...
    </div>
  );

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Başlık */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
        <h1 style={{ fontSize: 24, fontWeight: 600, margin: 0 }}>theagent-works.com Analytics</h1>
        <div style={{ background: '#10b981', color: '#fff', borderRadius: 20, padding: '6px 14px', fontSize: 13, fontWeight: 500 }}>
          🟢 {realtime} aktif kullanıcı
        </div>
      </div>

      {/* Insights */}
      {insights.length > 0 && (
        <div style={{ marginBottom: 32 }}>
          {insights.map((ins: any, i: number) => (
            <div key={i} style={{
              background: ins.severity === 'positive' ? '#d1fae5' : ins.severity === 'warning' ? '#fef3c7' : '#e0e7ff',
              border: `1px solid ${ins.severity === 'positive' ? '#6ee7b7' : ins.severity === 'warning' ? '#fcd34d' : '#a5b4fc'}`,
              borderRadius: 10, padding: '12px 16px', marginBottom: 8, fontSize: 14,
              color: ins.severity === 'positive' ? '#065f46' : ins.severity === 'warning' ? '#92400e' : '#3730a3',
            }}>
              {ins.severity === 'positive' ? '✦' : ins.severity === 'warning' ? '⚠' : 'ℹ'} {ins.message}
            </div>
          ))}
        </div>
      )}

      {/* Özet Kartlar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 32 }}>
        <StatCard label="Session (30 gün)" value={overview?.sessions?.current} prev={overview?.sessions?.previous} />
        <StatCard label="Kullanıcı (30 gün)" value={overview?.users?.current} prev={overview?.users?.previous} />
        <StatCard label="Sayfa Görüntüleme" value={overview?.pageviews?.current} prev={overview?.pageviews?.previous} />
        <StatCard label="Bounce Rate" value={(overview?.bounceRate?.current * 100).toFixed(1)} unit="%" />
      </div>

      {/* Zaman Serisi */}
      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 24, marginBottom: 32 }}>
        <h2 style={{ fontSize: 16, fontWeight: 600, marginTop: 0, marginBottom: 20 }}>Son 30 Gün — Oturumlar</h2>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={timeseries}>
            <XAxis dataKey="date" tick={{ fontSize: 11 }} tickFormatter={(v) => v?.slice(4)} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Line type="monotone" dataKey="sessions" stroke="#6366f1" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Alt Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
        
        {/* Kanallar */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 24 }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, marginTop: 0, marginBottom: 20 }}>Trafik Kaynakları</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={channels} dataKey="sessions" nameKey="channel" cx="50%" cy="50%" outerRadius={70} label={({ channel, percent }: any) => `${channel} %${(percent * 100).toFixed(0)}`}>
                {channels.map((_: any, i: number) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Cihazlar */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 24 }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, marginTop: 0, marginBottom: 20 }}>Cihaz Dağılımı</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={devices} dataKey="sessions" nameKey="device" cx="50%" cy="50%" outerRadius={70} label={({ device, percent }: any) => `${device} %${(percent * 100).toFixed(0)}`}>
                {devices.map((_: any, i: number) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Sayfalar */}
      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 24 }}>
        <h2 style={{ fontSize: 16, fontWeight: 600, marginTop: 0, marginBottom: 16 }}>En Çok Görüntülenen Sayfalar</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)', textAlign: 'left' }}>
              <th style={{ padding: '8px 0', fontWeight: 500, color: '#888' }}>Sayfa</th>
              <th style={{ padding: '8px 0', fontWeight: 500, color: '#888', textAlign: 'right' }}>Görüntüleme</th>
              <th style={{ padding: '8px 0', fontWeight: 500, color: '#888', textAlign: 'right' }}>Ort. Süre</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((p: any, i: number) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '10px 0', maxWidth: 320, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.path}</td>
                <td style={{ padding: '10px 0', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{p.views.toLocaleString('tr-TR')}</td>
                <td style={{ padding: '10px 0', textAlign: 'right', color: '#888' }}>{Math.round(p.avgDuration)}s</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: 40, fontSize: 12, color: '#aaa', textAlign: 'center' }}>
        Son 30 günlük veriler · GA4 Data API · {new Date().toLocaleDateString('tr-TR')}
      </div>
    </div>
  );
}
```

---

## Adım 10 — Test

Geliştirme sunucusunu başlat:

```bash
npm run dev
```

Dashboard'u test et:

```
http://localhost:3000/dashboard?access=SENIN_TOKENIN
```

Her API route'u ayrı ayrı test et:

```
http://localhost:3000/api/analytics/overview
http://localhost:3000/api/analytics/timeseries?days=30
http://localhost:3000/api/analytics/pages
http://localhost:3000/api/analytics/channels
http://localhost:3000/api/analytics/devices
http://localhost:3000/api/analytics/realtime
http://localhost:3000/api/analytics/patterns
```

---

## Adım 11 — Vercel Deployment

```bash
vercel
```

Vercel dashboard'dan şu environment variable'ları ekle:

| Key | Value |
|-----|-------|
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | service account e-mail |
| `GOOGLE_PRIVATE_KEY` | private key (tırnak içinde, `\n` ile) |
| `GA4_PROPERTY_ID` | `properties/XXXXXXXXX` |
| `DASHBOARD_SECRET_TOKEN` | gizli token |

Deploy sonrası dashboard erişim URL'si:

```
https://theagent-works.com/dashboard?access=SENIN_TOKENIN
```

---

## Olası Hatalar ve Çözümleri

| Hata | Çözüm |
|------|-------|
| `403 PERMISSION_DENIED` | Service account'u GA4 property'e Viewer olarak ekle (Adım 2) |
| `404 Not Found` (dashboard'da) | Token yanlış ya da `DASHBOARD_SECRET_TOKEN` env var eksik |
| `private_key` formatı hatası | `.env.local` dosyasında key değerini çift tırnakla sar, `\n` karakterlerinin doğru olduğunu kontrol et |
| API'den boş veri geliyor | GA4 property ID'nin başında `properties/` olduğundan emin ol |
| Build hatası `recharts` | `npm install recharts` ve `@google-analytics/data` yüklü olduğunu kontrol et |

---

*Bu dosya theagent-works.com GA4 Dashboard projesi için hazırlanmıştır.*
