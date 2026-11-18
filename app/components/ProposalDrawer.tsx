import React, { useState } from "react";
import { useErp } from "../context/ErpContext";

export function ProposalDrawer() {
  const {
    isProposalDrawerOpen,
    setIsProposalDrawerOpen,
    selectedProposal,
    drawerMode,
    approveProposal,
    rejectProposal,
  } = useErp();

  const [isApproving, setIsApproving] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showRejectBox, setShowRejectBox] = useState(false);
  const [rejectNote, setRejectNote] = useState("");

  if (!isProposalDrawerOpen || !selectedProposal) return null;

  const handleCopyTicket = () => {
    navigator.clipboard.writeText(selectedProposal.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleApprove = () => {
    setIsApproving(true);
    setTimeout(() => {
      approveProposal(selectedProposal.id);
      setIsApproving(false);
    }, 900);
  };

  const handleReject = () => {
    if (!rejectNote) return;
    rejectProposal(selectedProposal.id, [
      rejectNote,
      "Perlu penyesuaian plafon anggaran dengan ketersediaan kas angkatan saat ini.",
    ]);
    setShowRejectBox(false);
    setRejectNote("");
  };

  const isRejected = selectedProposal.status === "Ditolak";
  const isApproved = selectedProposal.status === "Dicairkan";

  return (
    <>
      {/* Drawer Backdrop */}
      <div
        className="fixed inset-0 bg-[#0f172a]/30 backdrop-blur-xs z-40 transition-opacity"
        onClick={() => setIsProposalDrawerOpen(false)}
      ></div>

      {/* Modern Slide-Over Drawer */}
      <aside
        aria-label="Rincian Tiket Pengadaan"
        className="fixed top-0 right-0 w-full sm:w-[540px] max-w-full h-full bg-white z-50 shadow-2xl border-l border-[#e2e8f0] flex flex-col overflow-hidden transition-transform duration-300 ease-out"
      >
        {/* Top Utility Bar */}
        <div
          className={`px-6 py-3.5 border-b flex items-center justify-between gap-3 shrink-0 ${
            isRejected
              ? "bg-rose-50 border-rose-200/90"
              : isApproved
              ? "bg-emerald-50 border-emerald-200/90"
              : "bg-[#f8fafc] border-[#e2e8f0]"
          }`}
        >
          <div className="flex items-center gap-2">
            {isRejected ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-rose-600 text-white shadow-xs">
                <span className="material-symbols-outlined text-[14px]">cancel</span>
                STATUS: DITOLAK DENGAN CATATAN REVISI
              </span>
            ) : isApproved ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-emerald-600 text-white shadow-xs">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                STATUS: TELAH DISETUJUI &amp; DICAIRKAN
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-amber-100/80 text-amber-800 border border-amber-300 shadow-xs">
                <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
                LEVEL 2: PENDING SIGN-OFF KETUA
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <kbd className="font-mono text-[11px] text-[#64748b] bg-white border border-[#cbd5e1] px-2 py-0.5 rounded shadow-xs">
              Esc
            </kbd>
            <button
              onClick={() => setIsProposalDrawerOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-[#64748b] hover:text-[#0f172a] hover:bg-slate-100 rounded-lg transition-all"
              type="button"
            >
              <span className="material-symbols-outlined text-[19px]">close</span>
            </button>
          </div>
        </div>

        {/* Drawer Header Title Section */}
        <div className="px-6 pt-5 pb-4 bg-white border-b border-[#f1f5f9] shrink-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[13px] font-bold text-[#4648d4] bg-[#eff4ff] border border-[#d3e4fe] px-2.5 py-0.5 rounded-lg">
                {selectedProposal.id}
              </span>
              <button
                onClick={handleCopyTicket}
                className="text-[#94a3b8] hover:text-[#4648d4] p-1 rounded transition-colors"
                title="Salin ID Tiket"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">
                  {copied ? "check" : "content_copy"}
                </span>
              </button>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono text-[#64748b]">
              <span className="material-symbols-outlined text-[14px]">schedule</span>
              <span>{selectedProposal.date}</span>
            </div>
          </div>
          <h2 className="text-lg font-bold text-[#0f172a] leading-snug tracking-tight mb-2.5">
            {selectedProposal.title}
          </h2>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-semibold text-[#475569] bg-[#f1f5f9] border border-[#e2e8f0] px-2.5 py-0.5 rounded-md uppercase">
              {selectedProposal.category}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md uppercase">
              <span className="material-symbols-outlined text-[13px]">verified</span>
              PLAFON TI LOLOS UJI
            </span>
          </div>
        </div>

        {/* Scrollable Drawer Body Content */}
        <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-5 bg-white">
          {/* Rejection Finding Box if rejected */}
          {isRejected && selectedProposal.rejectionNotes && (
            <section className="bg-[#fff1f2] border border-[#fecdd3] p-4 rounded-xl flex flex-col gap-3 shadow-xs">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2.5">
                  <div className="p-2 bg-rose-100 text-rose-600 rounded-lg shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[20px]">report_problem</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-rose-900 leading-snug">
                      Proposal Dikembalikan / Ditolak oleh Otoritas Finansial
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Penelaah: <strong className="text-slate-900 font-semibold">{selectedProposal.reviewedBy || "Ahmad Fadhil & Mohammad Husi"}</strong>
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-rose-700 bg-white border border-rose-200 px-2 py-0.5 rounded-md uppercase font-mono shrink-0 shadow-2xs">
                  FR-05
                </span>
              </div>
              <div className="bg-white border border-rose-200/80 p-3.5 rounded-lg flex flex-col gap-2 shadow-2xs">
                <span className="text-xs text-rose-800 uppercase font-bold flex items-center gap-1.5 tracking-wide">
                  <span className="material-symbols-outlined text-[15px] text-rose-600">assignment_late</span>
                  Catatan Revisi &amp; Temuan Audit:
                </span>
                <ul className="text-xs text-slate-700 space-y-2 pl-1 leading-relaxed">
                  {selectedProposal.rejectionNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Section 1: Ringkasan Finansial Card */}
          <section className="bg-gradient-to-br from-[#f8f9ff] to-[#f1f5f9] p-4 rounded-xl border border-[#e2e8f0] flex flex-col gap-3.5 shadow-xs">
            <div className="flex items-baseline justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748b]">
                  Total Nominal Usulan
                </span>
                <span className="font-mono text-2xl font-extrabold text-[#4648d4] tracking-tight">
                  Rp {selectedProposal.nominal.toLocaleString("id-ID")}
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748b]">
                  Beban Anggaran
                </span>
                <span className="font-mono text-[13px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                  6.5% Kas Angkatan
                </span>
              </div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-[#e2e8f0] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#4648d4]/10 text-[#4648d4] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[15px]">folder_special</span>
                </div>
                <span className="font-semibold text-[#0f172a]">{selectedProposal.budgetPost}</span>
              </div>
              <span className="font-mono font-medium text-[#64748b]">
                Sisa Plafon: <strong className="text-[#0f172a]">Rp 28.450.000</strong>
              </span>
            </div>

            {selectedProposal.hasHighGovernanceRule && (
              <div className="bg-amber-50/70 border border-amber-200/90 p-3 rounded-lg flex items-start gap-2.5">
                <span className="material-symbols-outlined text-amber-600 text-[18px] shrink-0 mt-0.5">
                  policy
                </span>
                <div className="flex flex-col gap-0.5 text-xs">
                  <span className="font-bold text-amber-800 uppercase tracking-wide text-[11px]">
                    SOP FR-05 Triggered (&gt; Rp 500.000)
                  </span>
                  <p className="text-[#475569] leading-relaxed">
                    Wajib otorisasi digital ganda (<strong>Segregation of Duties</strong>). Bendahara terverifikasi ➔ Menunggu Sign-off digital Ketua Angkatan sebelum pencairan kas.
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* Section 2: Informasi Pemohon */}
          <section className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">
                Informasi Pemohon &amp; Justifikasi
              </span>
              <span className="font-mono text-[11px] font-medium text-[#4648d4] bg-[#eff4ff] px-2 py-0.5 rounded">
                NIM: {selectedProposal.nim}
              </span>
            </div>
            <div className="bg-white border border-[#e2e8f0] p-4 rounded-xl flex flex-col gap-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-indigo-700 text-white flex items-center justify-center font-bold text-xs ring-2 ring-[#4648d4]/30 shrink-0">
                  {selectedProposal.applicant.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[14px] text-[#0f172a]">{selectedProposal.applicant}</span>
                  <span className="text-xs text-[#64748b]">{selectedProposal.division}</span>
                </div>
              </div>
              <div className="bg-[#f8fafc] border border-[#f1f5f9] p-3 rounded-lg">
                <span className="text-[10px] font-bold text-[#64748b] uppercase block mb-1">
                  Tujuan &amp; Urgensi Operasional:
                </span>
                <p className="text-xs text-[#334155] leading-relaxed">
                  {selectedProposal.urgencyDescription}
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Multi-Level Approval Stepper */}
          <section className="flex flex-col gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">
              Multi-Level Approval Stepper
            </span>
            <div className="bg-white border border-[#e2e8f0] p-4 rounded-xl flex flex-col gap-4 shadow-xs">
              {/* Step 1 */}
              <div className="flex gap-3 items-start relative">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shadow-xs ring-4 ring-emerald-50">
                    <span className="material-symbols-outlined text-[15px]">done</span>
                  </div>
                  <div className="w-0.5 h-12 bg-emerald-300 my-1"></div>
                </div>
                <div className="flex-1 pb-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[13px] text-[#0f172a]">Tahap 1: Pengajuan Usulan</span>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      Selesai
                    </span>
                  </div>
                  <p className="text-xs text-[#64748b] mt-0.5">Dibuat oleh <strong>{selectedProposal.applicant}</strong></p>
                  <span className="font-mono text-[11px] text-[#94a3b8]">{selectedProposal.date}</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-3 items-start relative -mt-2">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shadow-xs ring-4 ring-emerald-50">
                    <span className="material-symbols-outlined text-[15px]">verified</span>
                  </div>
                  <div className={`w-0.5 h-14 my-1 ${selectedProposal.step >= 3 ? "bg-emerald-300" : "bg-slate-200"}`}></div>
                </div>
                <div className="flex-1 pb-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[13px] text-[#0f172a]">Tahap 2: Verifikasi Bendahara</span>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      Lolos Verifikasi
                    </span>
                  </div>
                  <p className="text-xs text-[#64748b] mt-0.5">Divalidasi oleh <strong>Mohammad Husi</strong> (NIM: 20241230012)</p>
                  <div className="mt-1 p-2 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] text-xs text-[#475569]">
                    <span className="font-mono text-[11px] font-bold text-[#4648d4] block mb-0.5">Catatan Verifikasi Kas:</span>
                    “Saldo kas mencukupi di {selectedProposal.budgetPost}, spesifikasi usulan valid.”
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-3 items-start relative -mt-2">
                <div className="flex flex-col items-center">
                  <div className={`w-6 h-6 rounded-full text-white flex items-center justify-center font-bold text-xs ring-4 shadow-xs ${
                    selectedProposal.step >= 4
                      ? "bg-emerald-500 ring-emerald-50"
                      : isRejected
                      ? "bg-rose-500 ring-rose-50"
                      : "bg-amber-500 ring-amber-100"
                  }`}>
                    <span className="material-symbols-outlined text-[14px]">
                      {selectedProposal.step >= 4 ? "done" : isRejected ? "close" : "draw"}
                    </span>
                  </div>
                  <div className={`w-0.5 h-12 my-1 ${selectedProposal.step >= 4 ? "bg-emerald-300" : "bg-slate-200"}`}></div>
                </div>
                <div className="flex-1 pb-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[13px] text-slate-800">
                      Tahap 3: Otorisasi Ketua Angkatan
                    </span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                      selectedProposal.step >= 4
                        ? "text-emerald-700 bg-emerald-50"
                        : isRejected
                        ? "text-rose-700 bg-rose-50"
                        : "text-amber-700 bg-amber-50 border border-amber-200 animate-pulse"
                    }`}>
                      {selectedProposal.step >= 4 ? "Disetujui" : isRejected ? "Ditolak" : "Sedang Aktif"}
                    </span>
                  </div>
                  <p className="text-xs text-[#475569] mt-0.5">Oleh <strong>Ahmad Fadhil</strong> (NIM: 20241230005)</p>
                  <span className="font-mono text-[11px] text-[#94a3b8]">
                    {selectedProposal.step >= 4 ? "Tanda Tangan Digital Kunci RSA-4096 Terverifikasi" : "Menunggu Tanda Tangan Kunci Digital"}
                  </span>
                </div>
              </div>

              {/* Step 4 */}
              <div className={`flex gap-3 items-start relative -mt-2 ${selectedProposal.step >= 4 ? "opacity-100" : "opacity-60"}`}>
                <div className="flex flex-col items-center">
                  <div className={`w-6 h-6 rounded-full text-white flex items-center justify-center font-bold text-xs ${
                    selectedProposal.step >= 4 ? "bg-emerald-500" : "bg-slate-300 text-slate-600"
                  }`}>
                    {selectedProposal.step >= 4 ? <span className="material-symbols-outlined text-[14px]">done</span> : "4"}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[13px] text-[#0f172a]">
                      Tahap 4: Pencairan Kas &amp; Registrasi Inventaris
                    </span>
                    <span className="text-xs font-mono text-[#64748b]">
                      {selectedProposal.step >= 4 ? "Selesai (FR-06)" : "Mendatang"}
                    </span>
                  </div>
                  <p className="text-xs text-[#64748b] mt-0.5">
                    Auto-generate nomor register aset &amp; mutasi buku kas besar (FR-06)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Lampiran Berkas */}
          <section className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">
                Lampiran Berkas Pendukung
              </span>
              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                {selectedProposal.attachments?.length || 1} Berkas Tervalidasi
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {selectedProposal.attachments?.map((att, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white border border-[#e2e8f0] rounded-xl flex items-center justify-between hover:border-[#cbd5e1] hover:bg-[#f8fafc] transition-all"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 bg-red-50 text-red-600 rounded-lg flex items-center justify-center shrink-0 border border-red-100">
                      <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-bold text-[#0f172a] truncate">{att.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-[#94a3b8]">{att.size}</span>
                        <span className="font-mono text-[9px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.2 rounded">
                          SHA-256 Verified
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      className="p-1.5 text-[#64748b] hover:text-[#4648d4] hover:bg-white rounded-lg transition-colors"
                      title="Lihat Berkas"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">visibility</span>
                    </button>
                    <button
                      className="p-1.5 text-[#64748b] hover:text-[#4648d4] hover:bg-white rounded-lg transition-colors"
                      title="Unduh Berkas"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">download</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Audit Sync Notification */}
          <section className="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#4648d4] text-[18px] shrink-0">
              verified_user
            </span>
            <p className="font-mono text-[11px] text-[#64748b] leading-tight">
              Audit hash: <span className="font-bold text-[#0f172a]">0x9f4a...e71c</span> tersinkronisasi otomatis dengan Modul Aset &amp; Log Audit TI Coolify VPS.
            </p>
          </section>
        </div>

        {/* Drawer Action Footer */}
        <footer className="p-5 bg-white border-t border-[#e2e8f0] flex flex-col gap-2.5 shrink-0 shadow-lg">
          {showRejectBox && (
            <div className="mb-2 p-3 bg-rose-50 border border-rose-200 rounded-xl space-y-2">
              <label className="text-xs font-bold text-rose-800 block">
                Alasan Penolakan / Catatan Revisi SOP:
              </label>
              <textarea
                value={rejectNote}
                onChange={(e) => setRejectNote(e.target.value)}
                placeholder="Contoh: Lampirkan surat pembanding penawaran harga vendor..."
                className="w-full p-2 bg-white border border-rose-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-rose-500"
                rows={2}
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowRejectBox(false)}
                  className="px-3 py-1 bg-slate-200 text-slate-700 text-xs rounded-lg font-medium"
                >
                  Batal
                </button>
                <button
                  onClick={handleReject}
                  className="px-3 py-1 bg-rose-600 text-white text-xs rounded-lg font-bold"
                >
                  Kirim Penolakan
                </button>
              </div>
            </div>
          )}

          <div className="flex items-center gap-2">
            {!isApproved ? (
              <>
                <button
                  onClick={handleApprove}
                  disabled={isApproving}
                  className="flex-1 bg-[#4648d4] hover:bg-[#3b3dbf] active:scale-[0.99] text-white font-bold text-[13px] py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-[#4648d4]/20"
                  type="button"
                >
                  {isApproving ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-[18px]">sync</span>
                      <span>Menyimpan Digital Signature...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[18px]">verified_user</span>
                      <span>Setujui &amp; Tanda Tangan Digital</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => setShowRejectBox(!showRejectBox)}
                  className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 p-2.5 rounded-xl transition-colors"
                  title="Tolak Usulan & Catat Revisi"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[19px]">cancel</span>
                </button>
              </>
            ) : (
              <div className="w-full py-2.5 bg-emerald-50 text-emerald-700 font-bold text-center rounded-xl border border-emerald-200 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                <span>Proposal Berhasil Dicairkan &amp; Tercatat di Buku Kas</span>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between text-[#94a3b8] font-mono text-[10px] pt-1">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px] text-emerald-600">security</span>
              Immutable Audit Trail Active (FR-08)
            </span>
            <span>Otoritas: Ketua / Bendahara</span>
          </div>
        </footer>
      </aside>
    </>
  );
}
