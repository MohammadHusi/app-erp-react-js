import React from "react";
import { useErp } from "../context/ErpContext";

export function DashboardView() {
  const {
    cashSummary,
    transactions,
    setActiveTab,
    setIsAddTransactionModalOpen,
    setIsProposalModalOpen,
  } = useErp();

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Header Welcome Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-[#6354e8] text-[11px] font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Sistem Aktif • FR-01 s/d FR-09 Operasional
            </span>
            <span className="text-xs font-mono font-semibold text-slate-400">
              / 2025.Q1-GEN
            </span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Selamat Datang, Mohammad Husi!{" "}
            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200/80 px-2.5 py-0.5 rounded-full ml-1 font-mono">
              NIM: 20241230012
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Berikut adalah ikhtisar lengkap tata kelola finansial, iuran mahasiswa, dan pengadaan kas angkatan.
          </p>
        </div>
        <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
          <button
            onClick={() => setActiveTab("analisis")}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-xs hover:bg-slate-50 transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px] text-slate-500">query_stats</span>
            <span>Arus Kas &amp; Analisis</span>
          </button>
          <button
            onClick={() => setIsAddTransactionModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-500/20 transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            <span>+ Catat Transaksi Baru</span>
          </button>
        </div>
      </div>

      {/* Top Row: 4 Vivid Gradient Stat KPI Cards (DropX Design Aesthetic) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Card 1: Purple Gradient */}
        <div className="relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-[#6754e8] to-[#5136d8] text-white shadow-[0_8px_20px_-4px_rgba(99,84,232,0.3)] flex flex-col justify-between min-h-[140px]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white/80">Total Saldo Kas Angkatan</span>
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-xs text-white">
              <span className="material-symbols-outlined text-[19px]">payments</span>
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl lg:text-[28px] font-bold tracking-tight text-white leading-none">
              Rp {cashSummary.totalBalance.toLocaleString("id-ID")}
            </div>
            <div className="flex items-center gap-1.5 mt-2.5 text-xs text-white/90">
              <span className="font-bold">↑ 18.2%</span>
              <span className="text-white/70">vs bulan lalu</span>
            </div>
          </div>
          <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/10 pointer-events-none blur-lg"></div>
        </div>

        {/* Card 2: Emerald Green Gradient */}
        <div className="relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-[#059669] to-[#047857] text-white shadow-[0_8px_20px_-4px_rgba(5,150,105,0.3)] flex flex-col justify-between min-h-[140px]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white/80">Mahasiswa Terverifikasi (Lunas)</span>
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-xs text-white">
              <span className="material-symbols-outlined text-[19px]">group</span>
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl lg:text-[28px] font-bold tracking-tight text-white leading-none">
              {cashSummary.verifiedStudents} / {cashSummary.totalStudents}
            </div>
            <div className="flex items-center gap-1.5 mt-2.5 text-xs text-white/90">
              <span className="font-bold">↑ 12.5%</span>
              <span className="text-white/70">kepatuhan iuran minggu ini</span>
            </div>
          </div>
          <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/10 pointer-events-none blur-lg"></div>
        </div>

        {/* Card 3: Cyan Ocean Gradient */}
        <div className="relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-[#0284c7] to-[#0369a1] text-white shadow-[0_8px_20px_-4px_rgba(2,132,199,0.3)] flex flex-col justify-between min-h-[140px]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white/80">Pengadaan Disetujui</span>
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-xs text-white">
              <span className="material-symbols-outlined text-[19px]">shopping_bag</span>
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl lg:text-[28px] font-bold tracking-tight text-white leading-none">
              Rp {cashSummary.approvedExpense.toLocaleString("id-ID")}
            </div>
            <div className="flex items-center gap-1.5 mt-2.5 text-xs text-white/90">
              <span className="font-bold">↑ 8.7%</span>
              <span className="text-white/70">{cashSummary.approvedCount} Proposal • Selesai Audit</span>
            </div>
          </div>
          <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/10 pointer-events-none blur-lg"></div>
        </div>

        {/* Card 4: Orange Gradient */}
        <div className="relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-[#ea580c] to-[#c2410c] text-white shadow-[0_8px_20px_-4px_rgba(234,88,12,0.3)] flex flex-col justify-between min-h-[140px]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white/80">Rasio Kepatuhan Iuran</span>
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-xs text-white">
              <span className="material-symbols-outlined text-[19px]">trending_up</span>
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl lg:text-[28px] font-bold tracking-tight text-white leading-none">
              {cashSummary.complianceRate}%
            </div>
            <div className="flex items-center gap-1.5 mt-2.5 text-xs text-white/90">
              <span className="font-bold">↑ 2.1%</span>
              <span className="text-white/70">target semester tercapai</span>
            </div>
          </div>
          <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/10 pointer-events-none blur-lg"></div>
        </div>
      </div>

      {/* Second Row: Quick Feature Navigation Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
        <button
          onClick={() => setActiveTab("iuran")}
          className="bg-white rounded-xl p-4 flex flex-col items-center text-center border border-slate-200/80 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6754e8] flex items-center justify-center mb-2.5">
            <span className="material-symbols-outlined text-[22px]">payments</span>
          </div>
          <span className="text-xs font-bold text-slate-800">Iuran Kas</span>
          <span className="text-[11px] text-slate-400 truncate w-full mt-0.5">Buku besar &amp; cek iuran</span>
        </button>

        <button
          onClick={() => setActiveTab("pengadaan")}
          className="bg-white rounded-xl p-4 flex flex-col items-center text-center border border-slate-200/80 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center mb-2.5">
            <span className="material-symbols-outlined text-[22px]">assignment_turned_in</span>
          </div>
          <span className="text-xs font-bold text-slate-800">Pengadaan</span>
          <span className="text-[11px] text-slate-400 truncate w-full mt-0.5">Usulan &amp; approval</span>
        </button>

        <button
          onClick={() => setActiveTab("inventaris")}
          className="bg-white rounded-xl p-4 flex flex-col items-center text-center border border-slate-200/80 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center mb-2.5">
            <span className="material-symbols-outlined text-[22px]">devices</span>
          </div>
          <span className="text-xs font-bold text-slate-800">Inventaris Aset</span>
          <span className="text-[11px] text-slate-400 truncate w-full mt-0.5">Katalog lab &amp; pinjam</span>
        </button>

        <button
          onClick={() => setActiveTab("audit")}
          className="bg-white rounded-xl p-4 flex flex-col items-center text-center border border-slate-200/80 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#4648d4] flex items-center justify-center mb-2.5">
            <span className="material-symbols-outlined text-[22px]">shield_person</span>
          </div>
          <span className="text-xs font-bold text-slate-800">Log Audit TI</span>
          <span className="text-[11px] text-slate-400 truncate w-full mt-0.5">Jejak ISO 27001</span>
        </button>

        <button
          onClick={() => setActiveTab("server")}
          className="bg-white rounded-xl p-4 flex flex-col items-center text-center border border-slate-200/80 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#008096] flex items-center justify-center mb-2.5">
            <span className="material-symbols-outlined text-[22px]">cloud_done</span>
          </div>
          <span className="text-xs font-bold text-slate-800">Server &amp; DB</span>
          <span className="text-[11px] text-slate-400 truncate w-full mt-0.5">Coolify 142ms</span>
        </button>

        <button
          onClick={() => setActiveTab("laporan")}
          className="bg-white rounded-xl p-4 flex flex-col items-center text-center border border-slate-200/80 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#e11d48] flex items-center justify-center mb-2.5">
            <span className="material-symbols-outlined text-[22px]">description</span>
          </div>
          <span className="text-xs font-bold text-slate-800">Laporan &amp; UAT</span>
          <span className="text-[11px] text-slate-400 truncate w-full mt-0.5">Ekspor Excel &amp; PDF</span>
        </button>
      </div>

      {/* Third Row: Main Visual Analytics Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left: Arus Kas Masuk & Pengeluaran */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6354e8] text-[20px]">account_balance</span>
                <h2 className="text-sm font-bold text-slate-900">Arus Kas Masuk &amp; Pengeluaran</h2>
              </div>
              <button
                onClick={() => setActiveTab("analisis")}
                className="text-xs text-indigo-600 font-semibold hover:underline flex items-center gap-1"
              >
                <span>Lihat rincian</span>
                <span className="material-symbols-outlined text-[15px]">arrow_outward</span>
              </button>
            </div>
            <div className="flex items-center gap-4 text-slate-400 text-xs mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6354e8]"></span>
                <span className="text-slate-600 font-medium">Kas Masuk (Iuran)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                <span className="text-slate-600 font-medium">Kas Keluar (Pengadaan)</span>
              </div>
            </div>
            {/* SVG Line Chart */}
            <div className="relative w-full h-[200px]">
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 540 200">
                <defs>
                  <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#6354e8" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#6354e8" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <line stroke="#f1f5f9" strokeWidth="1" x1="40" x2="540" y1="20" y2="20" />
                <line stroke="#f1f5f9" strokeWidth="1" x1="40" x2="540" y1="65" y2="65" />
                <line stroke="#f1f5f9" strokeWidth="1" x1="40" x2="540" y1="110" y2="110" />
                <line stroke="#f1f5f9" strokeDasharray="3 3" strokeWidth="1" x1="40" x2="540" y1="155" y2="155" />
                <text fill="#94a3b8" fontSize="10" textAnchor="end" x="32" y="24">60jt</text>
                <text fill="#94a3b8" fontSize="10" textAnchor="end" x="32" y="69">45jt</text>
                <text fill="#94a3b8" fontSize="10" textAnchor="end" x="32" y="114">30jt</text>
                <text fill="#94a3b8" fontSize="10" textAnchor="end" x="32" y="159">15jt</text>
                <path d="M 45 145 C 110 135, 150 100, 210 115 C 270 130, 310 90, 370 85 C 430 80, 480 35, 535 25 L 535 170 L 45 170 Z" fill="url(#areaGradient)" />
                <path d="M 45 145 C 110 135, 150 100, 210 115 C 270 130, 310 90, 370 85 C 430 80, 480 35, 535 25" fill="none" stroke="#6354e8" strokeLinecap="round" strokeWidth="3" />
                <circle cx="370" cy="85" fill="#ffffff" r="4" stroke="#6354e8" strokeWidth="3" />
                <circle cx="535" cy="25" fill="#6354e8" r="5" />
              </svg>
            </div>
          </div>
          <div className="flex justify-between pl-10 pr-2 pt-2 text-slate-400 font-mono text-[11px]">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Mei</span><span>Jun</span><span>Jul</span><span>Agu</span>
          </div>
        </div>

        {/* Right: Site Traffic Bar Chart */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6754e8] text-[20px]">calendar_month</span>
                <h2 className="text-sm font-bold text-slate-900">Aktivitas Iuran per Hari / Minggu</h2>
              </div>
              <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                Puncak: Kamis
              </span>
            </div>
            <div className="relative w-full h-[200px] flex items-end">
              <div className="h-full flex flex-col justify-between text-slate-400 font-mono text-[10px] pr-3 pb-6 select-none">
                <span>6000</span><span>4500</span><span>3000</span><span>1500</span><span>0</span>
              </div>
              <div className="flex-1 h-full flex items-end justify-between gap-2 sm:gap-4 pb-6 relative">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6">
                  <div className="w-full h-px bg-slate-100"></div>
                  <div className="w-full h-px bg-slate-100"></div>
                  <div className="w-full h-px bg-slate-100"></div>
                  <div className="w-full h-px bg-slate-100"></div>
                  <div className="w-full h-px bg-slate-100"></div>
                </div>
                {[
                  { day: "Sen", h: "52%" },
                  { day: "Sel", h: "68%" },
                  { day: "Rab", h: "64%" },
                  { day: "Kam", h: "94%", peak: true },
                  { day: "Jum", h: "78%" },
                  { day: "Sab", h: "50%" },
                  { day: "Min", h: "44%" },
                ].map((col) => (
                  <div key={col.day} className="flex-1 flex flex-col items-center h-full justify-end z-10 group cursor-pointer">
                    <div
                      className={`w-full max-w-[32px] rounded-md transition-all ${
                        col.peak
                          ? "bg-[#6754e8] group-hover:bg-[#5136d8] shadow-sm"
                          : "bg-[#7c69ef]/80 group-hover:bg-[#6754e8]"
                      }`}
                      style={{ height: col.h }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between pl-10 pr-2 text-slate-400 font-mono text-[11px]">
            <span className="flex-1 text-center">Sen</span>
            <span className="flex-1 text-center">Sel</span>
            <span className="flex-1 text-center">Rab</span>
            <span className="flex-1 text-center font-bold text-indigo-600">Kam</span>
            <span className="flex-1 text-center">Jum</span>
            <span className="flex-1 text-center">Sab</span>
            <span className="flex-1 text-center">Min</span>
          </div>
        </div>
      </div>

      {/* Fourth Row: Recent Transactions Table & Governance Widget */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left 2/3: Mutasi Kas Terkini */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-bold text-slate-900">
                Mutasi Kas Terkini (Ledger Audit Real-Time)
              </h2>
              <p className="text-xs text-slate-500">
                Log transaksi terverifikasi dengan tanda tangan digital SHA-256
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-mono text-[11px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Sync Otomatis
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-400 font-mono text-[11px] uppercase tracking-wider border-b border-slate-100">
                  <th className="py-2.5 px-3 rounded-l-lg">ID &amp; Waktu</th>
                  <th className="py-2.5 px-3">Mahasiswa / PIC</th>
                  <th className="py-2.5 px-3">Kategori</th>
                  <th className="py-2.5 px-3 text-right">Nominal</th>
                  <th className="py-2.5 px-3 rounded-r-lg text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                {transactions.slice(0, 5).map((trx) => (
                  <tr key={trx.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-3">
                      <div className="font-semibold text-indigo-600 font-mono">{trx.id}</div>
                      <div className="text-[11px] text-slate-400 font-mono">{trx.time}</div>
                    </td>
                    <td className="py-3 px-3">
                      <div className="font-semibold text-slate-900">{trx.pic}</div>
                      {trx.nim && <div className="text-[10px] text-slate-400 font-mono">{trx.nim}</div>}
                    </td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded-md text-[11px] font-semibold ${trx.categoryColor}`}>
                        {trx.category}
                      </span>
                    </td>
                    <td className={`py-3 px-3 text-right font-mono font-bold ${
                      trx.nominal > 0 ? "text-emerald-600" : "text-rose-600"
                    }`}>
                      {trx.nominal > 0 ? `+Rp ${trx.nominal.toLocaleString("id-ID")}` : `-Rp ${Math.abs(trx.nominal).toLocaleString("id-ID")}`}
                    </td>
                    <td className="py-3 px-3 text-center">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${trx.statusColor}`}>
                        <span className="material-symbols-outlined text-[13px]">
                          {trx.status === "Lunas" || trx.status === "Disetujui" ? "check_circle" : "hourglass_top"}
                        </span>
                        {trx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right 1/3: Server & Governance Widget */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-indigo-600 text-[20px]">security</span>
                <h2 className="text-sm font-bold text-slate-900">Tata Kelola &amp; Node VPS</h2>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-indigo-600 shadow-2xs">
                    <span className="material-symbols-outlined text-[18px]">dns</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-800">Coolify Deployment</span>
                    <span className="text-[11px] text-slate-400 font-mono">Latensi: 142ms • Singapore</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                  ONLINE
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-emerald-600 shadow-2xs">
                    <span className="material-symbols-outlined text-[18px]">database</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-800">PostgreSQL Cluster</span>
                    <span className="text-[11px] text-slate-400 font-mono">WAL 100% Synced</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                  HEALTHY
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-indigo-600 shadow-2xs">
                    <span className="material-symbols-outlined text-[18px]">lock</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-800">Audit Ledger SHA-256</span>
                    <span className="text-[11px] text-slate-400 font-mono">Immutable Merkle Root</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
                  PASS
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-slate-400 text-xs">
            <span>Prinsip SOD (Segregation of Duties)</span>
            <span className="font-semibold text-slate-700">Aktif • ISO/IEC 27001</span>
          </div>
        </div>
      </div>
    </div>
  );
}
