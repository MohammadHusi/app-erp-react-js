import React from "react";
import { useErp } from "../context/ErpContext";

export function IuranView() {
  const { transactions, cashSummary, setIsAddTransactionModalOpen } = useErp();

  const iuranList = transactions.filter((t) => t.category.includes("Iuran"));

  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Kas &amp; Rekonsiliasi Iuran Mahasiswa (FR-01/FR-02)
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Manajemen verifikasi pembayaran iuran kas angkatan per mahasiswa, integrasi bukti transfer, dan status kepatuhan.
          </p>
        </div>
        <button
          onClick={() => setIsAddTransactionModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-200 self-start"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          <span>+ Catat Pembayaran Iuran</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
            Total Iuran Terverifikasi
          </span>
          <div className="text-2xl font-bold text-emerald-600 mt-2 font-mono">
            {cashSummary.verifiedStudents} Mahasiswa
          </div>
          <span className="text-xs text-slate-500 mt-1 block">Dari total 120 mahasiswa aktif</span>
        </div>
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
            Nominal Masuk Bulan Ini
          </span>
          <div className="text-2xl font-bold text-indigo-600 mt-2 font-mono">
            Rp {cashSummary.monthlyIncome.toLocaleString("id-ID")}
          </div>
          <span className="text-xs text-slate-500 mt-1 block">Target: Rp 5.500.000</span>
        </div>
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
            Tingkat Kepatuhan
          </span>
          <div className="text-2xl font-bold text-slate-900 mt-2 font-mono">
            {cashSummary.complianceRate}%
          </div>
          <span className="text-xs text-emerald-600 font-medium mt-1 block">Target semester tercapai</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-900">Buku Besar Transaksi Iuran</h2>
          <span className="text-xs text-slate-400 font-mono">{iuranList.length} Transaksi Terdata</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
              <tr>
                <th className="px-6 py-3">ID &amp; Waktu</th>
                <th className="px-6 py-3">Mahasiswa</th>
                <th className="px-6 py-3">Kategori</th>
                <th className="px-6 py-3 text-right">Nominal</th>
                <th className="px-6 py-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
              {iuranList.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-3 font-mono">
                    <span className="font-bold text-indigo-600">{t.id}</span>
                    <div className="text-[10px] text-slate-400">{t.time}</div>
                  </td>
                  <td className="px-6 py-3">
                    <div className="font-semibold text-slate-800">{t.pic}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{t.nim}</div>
                  </td>
                  <td className="px-6 py-3">
                    <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-semibold text-[11px]">
                      {t.category}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-right font-mono font-bold text-emerald-600">
                    +Rp {t.nominal.toLocaleString("id-ID")}
                  </td>
                  <td className="px-6 py-3 text-center">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${t.statusColor}`}>
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
