'use client';
import React from 'react';
import MonitorList from './MonitorList';

export default function DashboardPage() {
  return (
    <div className="main-container">
      <h1 className="section-title">API Monitors</h1>
      <MonitorList />
    </div>
  );
} 