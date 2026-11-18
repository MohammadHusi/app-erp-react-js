import React from "react";
import { useErp } from "../context/ErpContext";

export function AnalisisView() {
  const { cashSummary, setIsAddTransactionModalOpen } = useErp();

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Header Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-[#6354e8] text-[11px] font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Audit Active • FR-03 Operational
            </span>
            <span className="text-xs font-mono font-semibold text-slate-400">/ 2025.Q1-GEN</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Analisis Arus Kas &amp; Progres Iuran Mahasiswa
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Ringkasan Eksekutif Keuangan Angkatan, Progres Iuran Mingguan &amp; Pengadaan Terintegrasi. Seluruh pencatatan terkunci dalam sistem ledger desentral berstandar kepatuhan akademik.
          </p>
        </div>
        <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-xs hover:bg-slate-50 transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px] text-slate-500">download</span>
            <span>Download Laporan Kas (PDF/Excel)</span>
          </button>
          <button
            onClick={() => setIsAddTransactionModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#6354e8] hover:bg-[#5136d8] text-white text-xs font-bold shadow-md shadow-indigo-500/20 transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            <span>+ Catat Transaksi Baru</span>
          </button>
        </div>
      </div>

      {/* 4 KPI Gradient Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-[#6754e8] to-[#5136d8] text-white shadow-lg shadow-indigo-500/20 flex flex-col justify-between min-h-[140px]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white/80">Total Kas Terkumpul</span>
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-xs text-white">
              <span className="material-symbols-outlined text-[19px]">payments</span>
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl lg:text-[28px] font-extrabold tracking-tight text-white leading-none">
              Rp {cashSummary.totalBalance.toLocaleString("id-ID")}
            </div>
            <div className="flex items-center gap-1.5 mt-2.5 text-xs text-white/90">
              <span className="font-bold flex items-center gap-0.5">↑ 12.4%</span>
              <span className="text-white/70">vs bulan sebelumnya</span>
            </div>
          </div>
          <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/10 pointer-events-none blur-lg"></div>
        </div>

        <div className="relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-[#059669] to-[#047857] text-white shadow-lg shadow-emerald-500/20 flex flex-col justify-between min-h-[140px]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white/80">Pemasukan Iuran Bulan Ini</span>
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-xs text-white">
              <span className="material-symbols-outlined text-[19px]">account_balance_wallet</span>
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl lg:text-[28px] font-extrabold tracking-tight text-white leading-none">
              Rp {cashSummary.monthlyIncome.toLocaleString("id-ID")}
            </div>
            <div className="flex flex-col gap-1.5 mt-2">
              <div className="flex justify-between items-center text-[11px] text-white/90 font-medium">
                <span className="text-white/75">Target: Rp {cashSummary.monthlyIncomeTarget.toLocaleString("id-ID")}</span>
                <span className="font-bold">
                  {Math.round((cashSummary.monthlyIncome / cashSummary.monthlyIncomeTarget) * 100)}%
                </span>
              </div>
              <div className="w-full bg-white/25 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-white h-1.5 rounded-full"
                  style={{ width: `${Math.min(100, (cashSummary.monthlyIncome / cashSummary.monthlyIncomeTarget) * 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/10 pointer-events-none blur-lg"></div>
        </div>

        <div className="relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-[#0284c7] to-[#0369a1] text-white shadow-lg shadow-sky-500/20 flex flex-col justify-between min-h-[140px]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white/80">Pengeluaran Disetujui</span>
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-xs text-white">
              <span className="material-symbols-outlined text-[19px]">shopping_cart_checkout</span>
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl lg:text-[28px] font-extrabold tracking-tight text-white leading-none">
              Rp {cashSummary.approvedExpense.toLocaleString("id-ID")}
            </div>
            <div className="flex items-center gap-2 mt-2.5 text-xs text-white/90">
              <span className="inline-flex items-center gap-1 font-bold bg-white/20 px-2 py-0.5 rounded-md">
                <span className="material-symbols-outlined text-[13px]">task_alt</span>
                {cashSummary.approvedCount} Disetujui
              </span>
              <span className="text-white/75 font-medium">{cashSummary.pendingCount} Pending</span>
            </div>
          </div>
          <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/10 pointer-events-none blur-lg"></div>
        </div>

        <div className="relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-[#ea580c] to-[#c2410c] text-white shadow-lg shadow-orange-500/20 flex flex-col justify-between min-h-[140px]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white/80">Kepatuhan Iuran Mahasiswa</span>
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-xs text-white">
              <span className="material-symbols-outlined text-[19px]">verified</span>
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl lg:text-[28px] font-extrabold tracking-tight text-white leading-none">
              {cashSummary.complianceRate}%
            </div>
            <div className="flex items-center justify-between text-xs text-white/90 mt-2.5">
              <span className="font-bold flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-white"></span> {cashSummary.verifiedStudents} Lunas
              </span>
              <span className="text-white/80 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-red-300"></span> {cashSummary.totalStudents - cashSummary.verifiedStudents} Menunggak
              </span>
              <span className="text-white/60 font-medium">Total {cashSummary.totalStudents}</span>
            </div>
          </div>
          <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/10 pointer-events-none blur-lg"></div>
        </div>
      </div>

      {/* Visual Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Detail Rekap Iuran Mingguan */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Grafik Progres Arus Kas Angkatan Semester Ganjil
                </h3>
                <p className="text-xs text-slate-500">
                  Distribusi iuran reguler mingguan vs pengeluaran terotorisasi
                </p>
              </div>
              <span className="font-mono text-xs text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full font-bold">
                Q1 2025
              </span>
            </div>

            {/* Simulated Chart Container */}
            <div className="relative w-full h-[220px] bg-slate-50/50 rounded-xl p-4 border border-slate-100 flex items-end justify-between gap-3">
              {[
                { week: "M1 Jan", in: 1200000, out: 200000 },
                { week: "M2 Jan", in: 1800000, out: 450000 },
                { week: "M3 Jan", in: 950000, out: 300000 },
                { week: "M4 Jan", in: 1400000, out: 1250000 },
                { week: "M1 Feb", in: 1600000, out: 850000 },
                { week: "M2 Feb", in: 2100000, out: 320000 },
                { week: "M3 Feb", in: 1750000, out: 650000 },
                { week: "M4 Feb", in: 2300000, out: 1850000 },
              ].map((item, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                  <div className="w-full flex items-end justify-center gap-1 h-[170px]">
                    <div
                      className="w-1/2 max-w-[20px] bg-indigo-500 rounded-t-sm group-hover:bg-indigo-600 transition-all shadow-xs"
                      style={{ height: `${(item.in / 2500000) * 100}%` }}
                      title={`Masuk: Rp ${item.in.toLocaleString("id-ID")}`}
                    ></div>
                    <div
                      className="w-1/2 max-w-[20px] bg-rose-400 rounded-t-sm group-hover:bg-rose-500 transition-all shadow-xs"
                      style={{ height: `${(item.out / 2500000) * 100}%` }}
                      title={`Keluar: Rp ${item.out.toLocaleString("id-ID")}`}
                    ></div>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 group-hover:text-slate-700">
                    {item.week}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-100 text-xs">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                Pemasukan Iuran
              </span>
              <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                Pengadaan / Belanja
              </span>
            </div>
            <span className="font-mono text-slate-400 text-[11px]">Rata-rata surplus mingguan: +Rp 850.000</span>
          </div>
        </div>

        {/* Status Kepatuhan Pembayaran Per Kelas */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-900">Kepatuhan Per Kelas</h3>
              <span className="material-symbols-outlined text-slate-400">groups</span>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="font-bold text-slate-800">Kelas Sistem Informasi A (58 Mhs)</span>
                  <span className="font-mono font-bold text-emerald-600">96.5% (56 Lunas)</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "96.5%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="font-bold text-slate-800">Kelas Sistem Informasi B (62 Mhs)</span>
                  <span className="font-mono font-bold text-indigo-600">88.7% (55 Lunas)</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "88.7%" }}></div>
                </div>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed">
                <span className="font-bold block mb-1">Tenggat Waktu Iuran Bulan Ini:</span>
                Iuran periode berjalan berakhir tanggal 25 Mei 2025. Sistem broadcast WhatsApp siap mengirim pengingat otomatis.
              </div>
            </div>
          </div>

          <button
            onClick={() => alert("Broadcast pengingat WhatsApp berhasil dikirimkan ke 9 mahasiswa menunggak!")}
            className="w-full mt-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-200"
          >
            <span className="material-symbols-outlined text-[16px]">send</span>
            <span>Kirim Broadcast Reminder WA</span>
          </button>
        </div>
      </div>
    </div>
  );
}
