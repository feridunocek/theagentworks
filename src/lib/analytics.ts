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
