'use client';
import { useEffect, useState } from 'react';
import MonitorForm from './MonitorForm';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

interface Monitor {
  id?: string;
  name: string;
  url: string;
  method: string;
  interval: number;
  timeout: number;
}

export default function MonitorList() {
  const [monitors, setMonitors] = useState<Monitor[]>([]);
  const [editing, setEditing] = useState<Monitor | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('/api/monitors')
      .then(res => res.json())
      .then(setMonitors);
  }, []);

  const handleSave = async (monitor: Monitor) => {
    const method = monitor.id ? 'PUT' : 'POST';
    const res = await fetch('/api/monitors', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(monitor),
    });
    const saved = await res.json();
    setMonitors(monitors => {
      if (monitor.id) {
        return monitors.map(m => m.id === saved.id ? saved : m);
      } else {
        return [...monitors, saved];
      }
    });
    setEditing(null);
    setShowForm(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this monitor?')) return;
    await fetch('/api/monitors', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setMonitors(monitors => monitors.filter(m => m.id !== id));
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-title">Your Monitors</h2>
        <button onClick={() => { setEditing(null); setShowForm(true); }}>
          + Add Monitor
        </button>
      </div>
      {showForm && (
        <MonitorForm onSave={handleSave} initial={editing || undefined} />
      )}
      {monitors.length === 0 ? (
        <div className="no-data">No monitors found.</div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {monitors.map(monitor => (
            <div key={monitor.id} className="card">
              <div className="flex items-center gap-2 mb-2 flex-col-mobile">
                <button onClick={() => { setEditing(monitor); setShowForm(true); }} title="Edit">
                  Edit
                </button>
                <button onClick={() => handleDelete(monitor.id)} title="Delete">
                  Delete
                </button>
              </div>
              <div className="mb-2 font-semibold">{monitor.name}</div>
              <div className="mb-1 text-sm text-muted">{monitor.url}</div>
              <div className="mb-1 text-sm text-muted">Method: {monitor.method}</div>
              <div className="mb-1 text-sm text-muted">Interval: {monitor.interval} min</div>
              <div className="mb-1 text-sm text-muted">Timeout: {monitor.timeout} ms</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 