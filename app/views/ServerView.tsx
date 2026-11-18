import React from "react";

export function ServerView() {
  return (
    <div className="flex flex-col w-full gap-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-bold text-cyan-600 bg-cyan-50 border border-cyan-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            COOLIFY VPS · POSTGRESQL · INFRASTRUCTURE
          </span>
          <span className="text-slate-300">•</span>
          <span className="font-mono text-xs text-emerald-600 font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Singapore Datacenter Online (142ms)
          </span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          Infrastruktur VPS, Node Coolify &amp; PostgreSQL Database
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Monitoring kesehatan infrastruktur hosting aplikasi SI-KASANG ERP, replikasi database PostgreSQL, dan backup ledger otomatis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Coolify Instance</span>
            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 text-[10px] font-bold">ONLINE</span>
          </div>
          <div className="my-3">
            <div className="text-2xl font-bold text-slate-900 font-mono">142 ms</div>
            <span className="text-xs text-slate-500">Latensi rata-rata dari Indonesia</span>
          </div>
          <div className="text-xs text-slate-400 pt-3 border-t border-slate-100">
            Node: sg-node-01 • Coolify v4.0.0-rc
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">PostgreSQL Primary</span>
            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 text-[10px] font-bold">HEALTHY</span>
          </div>
          <div className="my-3">
            <div className="text-2xl font-bold text-emerald-600 font-mono">100% Synced</div>
            <span className="text-xs text-slate-500">WAL Streaming Replication</span>
          </div>
          <div className="text-xs text-slate-400 pt-3 border-t border-slate-100">
            Version: PostgreSQL 16.2 • Port 5432
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pencadangan (Backup)</span>
            <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-[10px] font-bold">AUTOMATED</span>
          </div>
          <div className="my-3">
            <div className="text-2xl font-bold text-slate-900 font-mono">03:00 WIB</div>
            <span className="text-xs text-slate-500">Backup S3 Cloudflare R2 harian</span>
          </div>
          <div className="text-xs text-slate-400 pt-3 border-t border-slate-100">
            Ukuran DB: 48.6 MB • 0 data corrupt
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <h2 className="text-base font-bold text-slate-900 mb-2">Konfigurasi Runtime &amp; Keamanan Server</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-500">Reverse Proxy:</span>
              <span className="font-mono font-bold text-slate-800">Traefik v3 (Auto SSL Let's Encrypt)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Firewall UFW:</span>
              <span className="font-mono font-bold text-emerald-600">Active (SSH Key Only, Port 22 Protected)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">RAM Usage:</span>
              <span className="font-mono font-bold text-slate-800">1.4 GB / 4.0 GB (35%)</span>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-500">Storage SSD NVMe:</span>
              <span className="font-mono font-bold text-slate-800">14.2 GB / 80.0 GB (17%)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Docker Engine:</span>
              <span className="font-mono font-bold text-slate-800">v26.1.1</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Uptime:</span>
              <span className="font-mono font-bold text-emerald-600">48 Hari, 12 Jam (99.98%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
