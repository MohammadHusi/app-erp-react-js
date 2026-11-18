import React from "react";

export function AuditView() {
  const auditLogs = [
    {
      id: "AUD-2025-099",
      timestamp: "14 Mei 2025 • 11:30:15 WIB",
      actor: "Ahmad Fadhil & Mohammad Husi",
      role: "Ketua & Bendahara",
      event: "Penolakan Berkas Usulan PGD-2025-008",
      details: "Pengembalian proposal proyektor untuk penyesuaian batas plafon dan penambahan 3 surat penawaran per SOP.",
      sha256: "9f4ae71cb46b9d8819df0e561129b05c56a8775f0a827bd4083a37e96b823b12",
      status: "COMPLIANT",
    },
    {
      id: "AUD-2025-098",
      timestamp: "12 Mei 2025 • 14:10:02 WIB",
      actor: "Mohammad Husi",
      role: "Bendahara",
      event: "Pencairan Kas & Registrasi AST-2025-002 (Kabel HDMI)",
      details: "Pencairan dana sebesar Rp 320.000 dan penerbitan nomor inventaris AST-TI/2025/002.",
      sha256: "b10a56fe87930da01783cfb2e6730a9e223b5c77e8a91200df341bcdae890c21",
      status: "COMPLIANT",
    },
    {
      id: "AUD-2025-097",
      timestamp: "10 Mei 2025 • 16:45:20 WIB",
      actor: "Mohammad Husi",
      role: "Bendahara & SysAdmin",
      event: "Otorisasi Biaya Sewa VPS Coolify PGD-2025-006",
      details: "Verifikasi faktur proforma domain dan server cloud hosting cluster Singapore.",
      sha256: "c56e01a8849b23fae44019a82bb192e44d098e21a8123bf018a44cdba9830214",
      status: "COMPLIANT",
    },
    {
      id: "AUD-2025-096",
      timestamp: "08 Mei 2025 • 09:15:40 WIB",
      actor: "System Audit Cron",
      role: "Automated Governance",
      event: "Rekonsiliasi Integritas Saldo Buku Kas Harian",
      details: "Pengecekan mutasi SHA-256 vs total kas di rekening bank & dompet tunai: Selisih 0 IDR (Sinkron 100%).",
      sha256: "a0984ef2399120bcd782410a82bbef3410a9082bc3410982eb410a834190ba33",
      status: "VERIFIED",
    },
  ];

  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              FR-08 · FR-09 · IMMUTABLE AUDIT TRAIL
            </span>
            <span className="text-slate-300">•</span>
            <span className="font-mono text-xs text-emerald-600 font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              ISO/IEC 27001 Security Standard
            </span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Log Audit Keamanan TI &amp; Jejak Tata Kelola
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Setiap aksi otorisasi, perubahan status anggaran, pencairan kas, dan registrasi aset dicatat secara permanen dengan hash SHA-256 yang tidak dapat dimanipulasi.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-indigo-600">verified_user</span>
            <span className="text-sm font-bold text-slate-900">Jejak Transaksi &amp; Perubahan Terakhir</span>
          </div>
          <span className="text-xs text-slate-400 font-mono">Real-time sync to Coolify DB</span>
        </div>
        <div className="divide-y divide-slate-100">
          {auditLogs.map((log) => (
            <div key={log.id} className="p-4 sm:p-5 hover:bg-slate-50/80 transition-colors flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                    {log.id}
                  </span>
                  <span className="text-xs font-bold text-slate-900">{log.event}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded">
                    {log.status}
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">{log.timestamp}</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pl-1">{log.details}</p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-slate-100/70 text-[11px] text-slate-400 font-mono">
                <span>Pelaksana: <strong className="text-slate-700">{log.actor}</strong> ({log.role})</span>
                <span className="truncate max-w-md" title={log.sha256}>
                  Hash: <span className="text-slate-600">{log.sha256}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
