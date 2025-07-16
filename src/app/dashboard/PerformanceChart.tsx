'use client';
import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface MonitorResult {
  id: number;
  responseTime: number;
  checkedAt: string;
}

export default function PerformanceChart({ monitorId }: { monitorId: number }) {
  const [data, setData] = useState<MonitorResult[]>([]);
  useEffect(() => {
    fetch(`/api/monitors/${monitorId}/results`)
      .then(async res => {
        if (!res.ok) return [];
        const text = await res.text();
        if (!text) return [];
        try {
          return JSON.parse(text);
        } catch {
          return [];
        }
      })
      .then(setData);
  }, [monitorId]);
  return (
    <div className="card">
      {data.length === 0 ? (
        <div className="no-data">No data</div>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <XAxis dataKey="checkedAt" tickFormatter={v => new Date(v).toLocaleTimeString()} stroke="#fbbf24" fontSize={12} />
            <YAxis stroke="#fbbf24" fontSize={12} />
            <Tooltip contentStyle={{ background: '#18181b', color: '#fbbf24', border: '1px solid #fbbf24' }} labelFormatter={v => new Date(v).toLocaleString()} />
            <Line type="monotone" dataKey="responseTime" stroke="#fbbf24" dot={false} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
} 