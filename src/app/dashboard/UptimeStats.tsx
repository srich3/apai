'use client';
import { useEffect, useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaClock, FaBolt } from 'react-icons/fa';

interface UptimeStatsProps {
  monitorId: number;
}

interface Result {
  statusCode: number;
  checkedAt: string;
  responseTime: number;
  errorMessage?: string;
}

function calcUptime(results: Result[], periodMs: number) {
  const now = Date.now();
  const periodResults = results.filter(r => now - new Date(r.checkedAt).getTime() <= periodMs);
  if (periodResults.length === 0) return null;
  const upResults = periodResults.filter(r => r.statusCode >= 200 && r.statusCode < 400);
  const downResults = periodResults.filter(r => r.statusCode < 200 || r.statusCode >= 400);
  const uptimePct = (upResults.length / periodResults.length) * 100;
  const downtimeEvents = downResults.length;
  const lastDowntime = downResults.length ? downResults[0].checkedAt : null;
  const totalDowntime = downtimeEvents * 60; // assume 1 min interval per check
  const avgResponse = periodResults.reduce((a, b) => a + b.responseTime, 0) / periodResults.length;
  return {
    uptimePct,
    downtimeEvents,
    lastDowntime,
    totalDowntime,
    avgResponse,
  };
}

export default function UptimeStats({ monitorId }: UptimeStatsProps) {
  const [results, setResults] = useState<Result[]>([]);
  useEffect(() => {
    fetch(`/api/monitors/${monitorId}/results?limit=1000`)
      .then(res => res.json())
      .then(setResults);
  }, [monitorId]);

  const periods = [
    { label: '24h', ms: 24 * 60 * 60 * 1000 },
    { label: '7d', ms: 7 * 24 * 60 * 60 * 1000 },
    { label: '30d', ms: 30 * 24 * 60 * 60 * 1000 },
  ];

  return (
    <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-2">
      {periods.map(period => {
        const stats = calcUptime(results, period.ms);
        return (
          <div key={period.label} className="card">
            <div className="font-semibold mb-2">Uptime Stats</div>
            {(!stats || !stats.uptimePct) ? (
              <div className="no-data">No data</div>
            ) : (
              <>
                <div className="flex items-center gap-2 text-lg">
                  {stats.uptimePct > 99 ? <FaCheckCircle className="text-green-400" /> : <FaTimesCircle className="text-red-400" />}
                  <span className="font-mono text-2xl">{stats.uptimePct.toFixed(2)}%</span>
                </div>
                <div className="text-sm mt-1">
                  <span className="font-bold">Downtime Events:</span> {stats.downtimeEvents}<br />
                  <span className="font-bold">Last Downtime:</span> {stats.lastDowntime ? new Date(stats.lastDowntime).toLocaleString() : 'N/A'}<br />
                  <span className="font-bold">Total Downtime:</span> {stats.totalDowntime} min<br />
                  <span className="font-bold">Avg. Response:</span> {Math.round(stats.avgResponse)} ms
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
} 