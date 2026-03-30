'use client';

import { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts';
import { TrendingUp, TrendingDown, Users, Eye, Clock, Activity, AlertCircle, ArrowUpRight, ArrowDownRight, ServerCrash } from 'lucide-react';

const COLORS = ['#00f3ff', '#bc13fe', '#f59e0b', '#10b981', '#f43f5e'];

function StatCard({ label, value, prev, unit = '', icon: Icon }: any) {
  const change = prev && prev > 0 ? ((value - prev) / prev) * 100 : 0;
  const up = change >= 0;
  return (
    <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex justify-between items-start mb-4">
        <div className="text-sm text-gray-400 font-medium">{label}</div>
        {Icon && <Icon className="w-5 h-5 text-cyan-400 opacity-50" />}
      </div>
      <div className="text-3xl font-semibold text-white mb-2">
        {typeof value === 'number' ? value.toLocaleString('tr-TR') : value || 0}{unit}
      </div>
      {prev > 0 && (
        <div className={`text-xs font-medium flex items-center gap-1 ${up ? 'text-emerald-400' : 'text-rose-400'}`}>
          {up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          <span>%{Math.abs(change).toFixed(1)} önceki döneme göre</span>
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
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [ov, ts, pg, ch, dv, rt, ins] = await Promise.all([
          fetch('/api/analytics/overview').then((r) => r.json()),
          fetch('/api/analytics/timeseries?days=30').then((r) => r.json()),
          fetch('/api/analytics/pages').then((r) => r.json()),
          fetch('/api/analytics/channels').then((r) => r.json()),
          fetch('/api/analytics/devices').then((r) => r.json()),
          fetch('/api/analytics/realtime').then((r) => r.json()),
          fetch('/api/analytics/patterns').then((r) => r.json()),
        ]);
        
        if (ov.error) throw new Error(ov.error);

        setOverview(ov);
        setTimeseries(ts || []);
        setPages(pg || []);
        setChannels(ch || []);
        setDevices(dv || []);
        setRealtime(rt?.activeUsers || 0);
        setInsights(ins || []);
      } catch (err: any) {
        console.error(err);
        setErrorStatus('Analytics verileri çekilemedi: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
    const interval = setInterval(() => {
      fetch('/api/analytics/realtime').then((r) => r.ok && r.json()).then((d) => d && setRealtime(d.activeUsers || 0));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-[#0F1117] text-cyan-400">
      <div className="w-12 h-12 border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin"></div>
      <div className="text-glow font-medium text-lg">Veriler yükleniyor...</div>
    </div>
  );

  if (errorStatus) return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-[#0F1117] text-white">
      <ServerCrash className="w-16 h-16 text-rose-500 mb-4" />
      <h2 className="text-2xl font-semibold">Sistem Hatası</h2>
      <div className="text-gray-400">{errorStatus}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0F1117] text-[#ededed] font-sans pb-24 px-6" style={{ paddingTop: '160px' }}>
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-semibold m-0 text-white tracking-tight flex items-center gap-3">
              theagent-works.com <span className="text-glow text-cyan-400">Analytics</span>
            </h1>
            <p className="text-gray-400 text-sm mt-2">Canlı ziyaretçi trafik ve dönüşüm istatistikleri</p>
          </div>
          <div className="glass-panel px-5 py-3 rounded-full flex items-center gap-3 border border-emerald-500/30">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-white">{realtime} Aktif Kullanıcı</span>
          </div>
        </div>

        {/* Insights */}
        {insights.length > 0 && (
          <div className="mb-10 space-y-3">
            {insights.map((ins: any, i: number) => {
              const Icon = ins.severity === 'positive' ? TrendingUp : ins.severity === 'warning' ? TrendingDown : AlertCircle;
              const colorClass = ins.severity === 'positive' ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300' :
                ins.severity === 'warning' ? 'border-amber-500/30 bg-amber-500/10 text-amber-300' :
                  'border-cyan-500/30 bg-cyan-500/10 text-cyan-300';
              
              return (
                <div key={i} className={`flex items-start gap-3 rounded-xl p-4 border ${colorClass} backdrop-blur-md`}>
                  <Icon className="w-5 h-5 shrink-0 mt-0.5" />
                  <span className="font-medium text-sm leading-relaxed">{ins.message}</span>
                </div>
              );
            })}
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard label="Ziyaret (30 gün)" value={overview?.sessions?.current} prev={overview?.sessions?.previous} icon={Activity} />
          <StatCard label="Kullanıcı (30 gün)" value={overview?.users?.current} prev={overview?.users?.previous} icon={Users} />
          <StatCard label="Sayfa Görüntüleme" value={overview?.pageviews?.current} prev={overview?.pageviews?.previous} icon={Eye} />
          <StatCard label="Hemen Çıkma Oranı" value={overview?.bounceRate?.current ? (overview.bounceRate.current * 100).toFixed(1) : 0} unit="%" icon={Clock} />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Timeseries */}
          <div className="lg:col-span-2 glass-panel rounded-2xl p-6">
            <h2 className="text-xl font-medium text-white mb-6">Son 30 Gün Ziyaret Trafiği</h2>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={timeseries} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="date" stroke="#666" fontSize={11} tickFormatter={(v) => v?.slice(4) || ''} axisLine={false} tickLine={false} />
                  <YAxis stroke="#666" fontSize={11} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(15, 17, 23, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }}
                    itemStyle={{ color: '#00f3ff' }}
                  />
                  <Line type="monotone" dataKey="sessions" stroke="#00f3ff" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: '#00f3ff', stroke: '#fff', strokeWidth: 2 }} className="drop-shadow-[0_0_8px_rgba(0,243,255,0.8)]" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Channels */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col">
            <h2 className="text-xl font-medium text-white mb-2">Trafik Kaynakları</h2>
            <div className="flex-1 h-[250px] mt-4 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={channels} dataKey="sessions" nameKey="channel" cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={2} stroke="none">
                    {channels.map((_: any, i: number) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                  </Pie>
                  <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(15, 17, 23, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                <span className="text-2xl font-bold text-white">{channels.reduce((sum, item) => sum + item.sessions, 0).toLocaleString('tr-TR')}</span>
                <span className="text-xs text-gray-400">Toplam</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Top Pages */}
          <div className="lg:col-span-2 glass-panel rounded-2xl p-6">
            <h2 className="text-xl font-medium text-white mb-6">En Çok Görüntülenen Sayfalar</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase border-b border-white/10">
                  <tr>
                    <th className="py-3 px-4 font-medium">Sayfa</th>
                    <th className="py-3 px-4 font-medium text-right">Görüntüleme</th>
                    <th className="py-3 px-4 font-medium text-right">Ort. Süre</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {pages.map((p: any, i: number) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 px-4 text-gray-300 max-w-[200px] sm:max-w-md truncate" title={p.title}>
                        <div className="font-medium text-white truncate">{p.title}</div>
                        <div className="text-xs text-cyan-400/70 truncate">{p.path}</div>
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-white/90">
                        {p.views.toLocaleString('tr-TR')}
                      </td>
                      <td className="py-3 px-4 text-right text-gray-400">
                        {Math.round(p.avgDuration)}s
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Devices */}
          <div className="glass-panel rounded-2xl p-6">
            <h2 className="text-xl font-medium text-white mb-6">Cihaz Türleri</h2>
            <div className="space-y-4">
              {devices.map((device, i) => {
                const total = devices.reduce((sum, item) => sum + item.sessions, 0);
                const percent = total > 0 ? (device.sessions / total) * 100 : 0;
                return (
                  <div key={i}>
                    <div className="flex justify-between items-end mb-1">
                      <span className="text-sm font-medium text-gray-300 capitalize">{device.device}</span>
                      <span className="text-xs font-mono text-gray-400">%{percent.toFixed(1)}</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden border border-white/5">
                      <div className="h-2.5 rounded-full" style={{ width: `${percent}%`, backgroundColor: COLORS[i % COLORS.length] }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        <div className="mt-12 text-center text-xs text-gray-600 font-mono">
          Veriler Google Analytics Data API üzerinden çekilmektedir · {new Date().toLocaleDateString('tr-TR')}
        </div>
      </div>
    </div>
  );
}
