'use client';
import { useState } from 'react';

interface Monitor {
  id?: string;
  name: string;
  url: string;
  method: string;
  interval: number;
  timeout: number;
}

const defaultMonitor: Monitor = {
  name: '',
  url: '',
  method: 'GET',
  interval: 1,
  timeout: 10000,
};

export default function MonitorForm({ onSave, initial }: { onSave: (m: Monitor) => Promise<void>; initial?: Monitor }) {
  const [monitor, setMonitor] = useState<Monitor>(initial || defaultMonitor);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setMonitor({ ...monitor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!monitor.name || !monitor.url) {
      setError('Name and URL are required');
      return;
    }
    setError('');
    onSave({ ...monitor, interval: Number(monitor.interval), timeout: Number(monitor.timeout) });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#181a1b] border border-neon-green rounded-lg p-4 flex flex-col gap-3 w-full max-w-md mx-auto">
      <div className="font-bold text-neon-green text-lg mb-2">{monitor.id ? 'Edit Monitor' : 'Add Monitor'}</div>
      {error && <div className="text-red-400 font-mono">{error}</div>}
      <input name="name" value={monitor.name} onChange={handleChange} placeholder="Name" className="input input-bordered" />
      <input name="url" value={monitor.url} onChange={handleChange} placeholder="URL (https://...)" className="input input-bordered" />
      <select name="method" value={monitor.method} onChange={handleChange} className="input input-bordered">
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>
      <div className="flex gap-2">
        <input name="interval" type="number" min={1} max={60} value={monitor.interval} onChange={handleChange} placeholder="Interval (min)" className="input input-bordered w-1/2" />
        <input name="timeout" type="number" min={1000} max={60000} step={1000} value={monitor.timeout} onChange={handleChange} placeholder="Timeout (ms)" className="input input-bordered w-1/2" />
      </div>
      <button type="submit" className="bg-neon-green text-black font-bold py-2 rounded mt-2">{monitor.id ? 'Update' : 'Create'} Monitor</button>
    </form>
  );
} 