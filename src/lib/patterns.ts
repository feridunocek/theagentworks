export interface Insight {
  type: 'spike' | 'drop' | 'trend_up' | 'trend_down' | 'milestone';
  severity: 'positive' | 'warning' | 'info';
  message: string;
}

function average(nums: number[]) {
  if (nums.length === 0) return 0;
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
