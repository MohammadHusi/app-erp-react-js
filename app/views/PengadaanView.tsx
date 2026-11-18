import React, { useState } from "react";
import { useErp } from "../context/ErpContext";
import type { ProcurementProposal } from "../types/erp";

export function PengadaanView() {
  const {
    cashSummary,
    proposals,
    setSelectedProposal,
    setIsProposalModalOpen,
    setIsProposalDrawerOpen,
    setDrawerMode,
  } = useErp();

  const [filterStatus, setFilterStatus] = useState<string>("all");

  const filtered = proposals.filter((p) => {
    if (filterStatus === "need_action") {
      return p.status === "Review Bendahara" || p.status === "Sign-Off Ketua";
    }
    if (filterStatus === "approved") {
      return p.status === "Dicairkan";
    }
    return true;
  });

  const handleOpenDetail = (proposal: ProcurementProposal) => {
    setSelectedProposal(proposal);
    setDrawerMode(proposal.status === "Ditolak" ? "rejection" : "approval");
    setIsProposalDrawerOpen(true);
  };

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Header Pengadaan */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-col gap-1 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              FR-04 · FR-05 · UAT-02 COMPLIANT
            </span>
            <span className="text-slate-300">•</span>
            <span className="font-mono text-xs text-emerald-600 font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Policy Rule: Sign-Off &gt; Rp 500.000 Aktif
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Pengadaan &amp; Workflow Persetujuan Anggaran
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            Pengajuan proposal anggaran pengadaan barang/kegiatan angkatan dengan aturan persetujuan bertingkat IT Governance (&gt; Rp 500.000 butuh sign-off Ketua Angkatan).
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start lg:self-center shrink-0">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-4 py-2.5 rounded-xl font-semibold text-xs transition-all shadow-xs"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px] text-amber-500">download</span>
            <span>Download Rekap XLSX</span>
          </button>
          <button
            onClick={() => setIsProposalModalOpen(true)}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md shadow-indigo-200"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            <span>+ Ajukan Proposal Baru</span>
          </button>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-5 rounded-2xl text-white shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-indigo-100 uppercase tracking-wider">
              Plafon Tersedia
            </span>
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[18px]">account_balance</span>
            </div>
          </div>
          <div className="my-3">
            <span className="text-2xl font-bold font-mono tracking-tight text-white">
              Rp {cashSummary.totalBalance.toLocaleString("id-ID")}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-indigo-100 font-medium">
            <span className="material-symbols-outlined text-[15px]">arrow_upward</span>
            <span>87.5% Alokasi Aman</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-5 rounded-2xl text-white shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-emerald-100 uppercase tracking-wider">
              Disetujui Bulan Ini
            </span>
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[18px]">task_alt</span>
            </div>
          </div>
          <div className="my-3">
            <span className="text-2xl font-bold font-mono tracking-tight text-white">
              Rp {cashSummary.approvedExpense.toLocaleString("id-ID")}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-100 font-medium">
            <span className="material-symbols-outlined text-[15px]">done_all</span>
            <span>{cashSummary.approvedCount} Tiket Selesai Otorisasi</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-sky-500 to-cyan-600 p-5 rounded-2xl text-white shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-sky-100 uppercase tracking-wider">
              Menunggu Otorisasi
            </span>
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[18px]">pending_actions</span>
            </div>
          </div>
          <div className="my-3">
            <span className="text-2xl font-bold font-mono tracking-tight text-white">
              {proposals.filter((p) => p.status === "Review Bendahara" || p.status === "Sign-Off Ketua").length} Berkas
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-sky-100 font-medium">
            <span className="material-symbols-outlined text-[15px]">hourglass_top</span>
            <span>Butuh Review SOD</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-5 rounded-2xl text-white shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-amber-100 uppercase tracking-wider">
              Integritas Audit Log
            </span>
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[18px]">verified</span>
            </div>
          </div>
          <div className="my-3">
            <span className="text-2xl font-bold font-mono tracking-tight text-white">
              100% Synced
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-amber-100 font-medium">
            <span className="material-symbols-outlined text-[15px]">lock</span>
            <span>SHA-256 Hash Valid</span>
          </div>
        </div>
      </div>

      {/* IT Governance Notice Banner */}
      <div className="bg-white border border-indigo-100 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-indigo-600 text-[24px]">policy</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-900">
                Protokol Pemisahan Tugas (Segregation of Duties)
              </span>
              <span className="text-[10px] font-bold bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-md">
                Standard ISO 27001 / IT-Gov
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5 max-w-2xl">
              Semua pembelanjaan dengan nominal diatas <strong>Rp 500.000</strong> mengaktifkan <em>Gate Multi-Level Approval</em>: Pemohon → Review Kelayakan Bendahara → Validasi Otoritas Ketua Angkatan dengan Token Tanda Tangan Digital.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <div className="flex flex-col text-right">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
              Cadangan Kas Tersedia
            </span>
            <span className="font-mono text-lg text-emerald-600 font-extrabold">
              Rp {cashSummary.totalBalance.toLocaleString("id-ID")}
            </span>
          </div>
        </div>
      </div>

      {/* Proposal Table Container */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
        <div className="px-6 py-4 bg-white border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-base font-bold text-slate-800">Daftar Tiket Pengadaan Angkatan</span>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
              {filtered.length} Tiket
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setFilterStatus("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterStatus === "all"
                  ? "text-white bg-indigo-600 shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              Semua Status
            </button>
            <button
              onClick={() => setFilterStatus("need_action")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterStatus === "need_action"
                  ? "text-white bg-indigo-600 shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              Butuh Tindakan ({proposals.filter((p) => p.status === "Review Bendahara" || p.status === "Sign-Off Ketua").length})
            </button>
            <button
              onClick={() => setFilterStatus("approved")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterStatus === "approved"
                  ? "text-white bg-indigo-600 shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              Teregistrasi Aset ({proposals.filter((p) => p.status === "Dicairkan").length})
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 font-mono text-[11px] uppercase tracking-wider border-b border-slate-100">
              <tr>
                <th className="px-6 py-3 font-semibold">ID Tiket</th>
                <th className="px-6 py-3 font-semibold">Rincian Pengadaan</th>
                <th className="px-6 py-3 font-semibold">Pemohon</th>
                <th className="px-6 py-3 font-semibold">Pos Anggaran</th>
                <th className="px-6 py-3 text-right font-semibold">Nominal</th>
                <th className="px-6 py-3 font-semibold">Status Persetujuan</th>
                <th className="px-6 py-3 text-center font-semibold">Tindakan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
              {filtered.map((item) => {
                const isSelected = item.id === "PGD-2025-008";
                return (
                  <tr
                    key={item.id}
                    className={`transition-colors hover:bg-slate-50/80 ${
                      item.status === "Ditolak"
                        ? "bg-rose-50/40 ring-1 ring-inset ring-rose-200"
                        : isSelected
                        ? "bg-indigo-50/40"
                        : ""
                    }`}
                  >
                    <td className="px-6 py-3.5 font-mono font-bold">
                      <span className="flex items-center gap-1.5 text-indigo-600">
                        {item.status === "Review Bendahara" || item.status === "Sign-Off Ketua" ? (
                          <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
                        ) : null}
                        {item.id}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 max-w-sm">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">{item.title}</span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {item.category} • {item.date}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-3.5">
                      <div className="flex flex-col">
                        <span className="font-medium text-slate-800">{item.applicant}</span>
                        <span className="text-[11px] text-slate-400 font-mono">NIM: {item.nim}</span>
                      </div>
                    </td>
                    <td className="px-6 py-3.5 font-mono text-slate-500">{item.budgetPost}</td>
                    <td className="px-6 py-3.5 font-mono text-slate-900 text-right font-bold">
                      Rp {item.nominal.toLocaleString("id-ID")}
                    </td>
                    <td className="px-6 py-3.5">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${item.statusBadge.bg} ${item.statusBadge.text} border ${item.statusBadge.border}`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
                        {item.statusBadge.label}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <button
                        onClick={() => handleOpenDetail(item)}
                        className="text-xs font-bold text-indigo-600 hover:text-indigo-800 underline underline-offset-2"
                        type="button"
                      >
                        Buka Detail
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
