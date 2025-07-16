'use client';
import { useEffect, useState } from 'react';
import { FaExclamationTriangle, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

interface Alert {
  id: string;
  alertType: string;
  message: string;
  sentAt: string;
  resolvedAt?: string;
}

export default function AlertHistory({ monitorId }: { monitorId: number }) {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  useEffect(() => {
    fetch(`/api/monitors/${monitorId}/alerts`)
      .then(res => res.json())
      .then(setAlerts);
  }, [monitorId]);

  const resolveAlert = async (id: string) => {
    await fetch(`/api/alerts/${id}/resolve`, { method: 'POST' });
    setAlerts(alerts => alerts.map(a => a.id === id ? { ...a, resolvedAt: new Date().toISOString() } : a));
  };

  return (
    <div className="card">
      <div className="font-semibold mb-2">Alert History</div>
      {alerts.length === 0 ? (
        <div className="no-data">No alerts</div>
      ) : (
        <table className="table">
          <thead>
            <tr className="text-neon-green">
              <th>Type</th>
              <th>Message</th>
              <th>Sent</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map(alert => (
              <tr key={alert.id} className={alert.resolvedAt ? 'opacity-60' : ''}>
                <td>{alert.alertType}</td>
                <td>{alert.message}</td>
                <td>{new Date(alert.sentAt).toLocaleString()}</td>
                <td className="flex items-center gap-1">
                  {alert.resolvedAt ? <><FaCheckCircle className="text-green-400" /> Resolved</> : <><FaTimesCircle className="text-red-400" /> Active</>}
                </td>
                <td>
                  {!alert.resolvedAt && (
                    <button className="px-2 py-1 bg-neon-green text-black rounded font-bold" onClick={() => resolveAlert(alert.id)}>
                      Resolve
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
} 