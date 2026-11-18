import React, { useState } from "react";
import { useErp } from "../context/ErpContext";

export function ProposalModal() {
  const { isProposalModalOpen, setIsProposalModalOpen, addProposal } = useErp();

  const [applicant, setApplicant] = useState("Rayhan Pratama");
  const [nim, setNim] = useState("20241230045");
  const [division, setDivision] = useState("Divisi Perlengkapan & Logistik");
  const [category, setCategory] = useState<"Aset Tetap Angkatan" | "Operasional Kuliah" | "Infrastruktur TI" | "Kegiatan Akademik">("Aset Tetap Angkatan");
  const [title, setTitle] = useState("Pengadaan Proyektor Portable EPSON EB-E01 untuk Presentasi Manpro");
  const [urgency, setUrgency] = useState(
    "Dibutuhkan untuk penunjang presentasi proyek gabungan kelas A & B di Auditorium Lab TI serta inventaris angkatan jangka panjang untuk mata kuliah Manajemen Proyek SI."
  );
  const [nominal, setNominal] = useState("1850000");
  const [budgetPost, setBudgetPost] = useState("Pos Aset Tetap & TI (Sisa: Rp 28.450.000)");

  if (!isProposalModalOpen) return null;

  const numNominal = parseInt(nominal.replace(/\D/g, "")) || 0;
  const isHighGovernance = numNominal > 500000;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !nominal) return;

    addProposal({
      title,
      applicant,
      nim,
      division,
      category,
      budgetPost,
      nominal: numNominal,
      urgencyDescription: urgency,
      status: "Review Bendahara",
      hasHighGovernanceRule: isHighGovernance,
      attachments: [
        {
          name: "RAB_" + title.slice(0, 15).replace(/\s+/g, "_") + ".pdf",
          size: "450 KB",
          type: "pdf",
          verified: true,
        },
      ],
    });

    setIsProposalModalOpen(false);
  };

  return (
    <div aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto" role="dialog">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
        onClick={() => setIsProposalModalOpen(false)}
      ></div>

      {/* Main Dialog */}
      <div className="relative bg-white rounded-2xl max-w-3xl w-full my-auto shadow-2xl z-10 flex flex-col overflow-hidden border border-slate-100">
        {/* Header */}
        <div className="px-6 py-5 bg-white border-b border-slate-100 flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                FR-04 • IT GOVERNANCE COMPLIANT
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-mono text-xs text-emerald-600 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                SOP Persetujuan Bertingkat
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              Formulir Pengajuan Proposal Pengadaan &amp; Belanja
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
              Pastikan kelengkapan berkas &amp; rincian estimasi biaya. Proposal &gt; Rp 500.000 wajib melalui otorisasi berjenjang (Bendahara &amp; Ketua Angkatan).
            </p>
          </div>
          <button
            aria-label="Tutup Modal"
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-all shrink-0"
            onClick={() => setIsProposalModalOpen(false)}
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Form Content */}
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto bg-white">
            {/* SECTION 1: Informasi Pemohon */}
            <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-200/80 space-y-4">
              <div className="flex items-center gap-2 pb-2.5 border-b border-slate-200/80">
                <span className="material-symbols-outlined text-indigo-600 text-[20px]">badge</span>
                <h3 className="text-sm font-bold text-slate-800">1. Informasi Pemohon &amp; Divisi</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                    Nama Pemohon
                  </label>
                  <div className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-xl px-3.5 py-2 shadow-xs">
                    <span className="material-symbols-outlined text-slate-400 text-[18px]">person</span>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs text-slate-900 font-bold truncate">{applicant}</span>
                      <span className="font-mono text-[10px] text-slate-500">NIM: {nim}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                    Divisi / Komisi
                  </label>
                  <div className="relative">
                    <select
                      value={division}
                      onChange={(e) => setDivision(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 pr-8 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 appearance-none cursor-pointer shadow-xs"
                    >
                      <option>Divisi Perlengkapan &amp; Logistik</option>
                      <option>Divisi Acara &amp; Pelaksanaan</option>
                      <option>Komisi Akademik &amp; Riset</option>
                      <option>Humas &amp; Publikasi</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-slate-400 text-[18px]">
                      unfold_more
                    </span>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                    Kategori Belanja
                  </label>
                  <div className="relative">
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as any)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 pr-8 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 appearance-none cursor-pointer shadow-xs"
                    >
                      <option value="Aset Tetap Angkatan">Aset Tetap Angkatan</option>
                      <option value="Operasional Kuliah">Operasional Kuliah</option>
                      <option value="Infrastruktur TI">Infrastruktur TI / Cloud</option>
                      <option value="Kegiatan Akademik">Kegiatan Akademik</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-slate-400 text-[18px]">
                      unfold_more
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 2: Detail Kebutuhan & Spesifikasi */}
            <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-200/80 space-y-4">
              <div className="flex items-center gap-2 pb-2.5 border-b border-slate-200/80">
                <span className="material-symbols-outlined text-indigo-600 text-[20px]">description</span>
                <h3 className="text-sm font-bold text-slate-800">2. Detail Kebutuhan &amp; Spesifikasi</h3>
              </div>
              <div className="space-y-3.5 pt-1">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                    Judul / Nama Pengadaan
                  </label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-xs"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                    Deskripsi Urgensi &amp; Keperluan Pengadaan
                  </label>
                  <textarea
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-xs leading-relaxed"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* SECTION 3: Rincian Anggaran & Governance Gate */}
            <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-200/80 space-y-4">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-200/80">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-indigo-600 text-[20px]">payments</span>
                  <h3 className="text-sm font-bold text-slate-800">
                    3. Rincian Anggaran &amp; Aturan Kebijakan (Governance Gate)
                  </h3>
                </div>
                <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-100/70 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  Kas Sehat 84.2%
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                    Estimasi Total Nominal (IDR)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-2.5 font-mono text-xs font-bold text-slate-400">Rp</span>
                    <input
                      value={nominal}
                      onChange={(e) => setNominal(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-3.5 py-2 font-mono text-lg font-extrabold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-xs"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                    Pos Anggaran / Beban Kas
                  </label>
                  <div className="relative">
                    <select
                      value={budgetPost}
                      onChange={(e) => setBudgetPost(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 pr-8 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 appearance-none cursor-pointer shadow-xs"
                    >
                      <option>Pos Aset Tetap &amp; TI (Sisa: Rp 28.450.000)</option>
                      <option>Pos Operasional Acara (Sisa: Rp 8.200.000)</option>
                      <option>Pos Akademik &amp; Ujian (Sisa: Rp 4.500.000)</option>
                      <option>Pos Cadangan Kas Kecil (Sisa: Rp 1.500.000)</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-slate-400 text-[18px]">
                      unfold_more
                    </span>
                  </div>
                </div>
              </div>

              {isHighGovernance && (
                <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3.5 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center shrink-0 text-amber-700">
                    <span className="material-symbols-outlined text-[18px]">gavel</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wide text-amber-900">
                        Gate Level 2 Aktif: Sign-Off Digital Ketua Angkatan Diperlukan
                      </span>
                      <span className="font-mono text-[10px] font-bold bg-amber-200/60 text-amber-800 px-1.5 py-0.2 rounded">
                        &gt; Rp 500.000
                      </span>
                    </div>
                    <p className="text-xs text-amber-800/90 leading-relaxed">
                      Nominal usulan sebesar <strong>Rp {numNominal.toLocaleString("id-ID")}</strong> melampaui batas otorisasi tunggal. Pengajuan akan melewati: <em>Review Saldo Bendahara → Verifikasi Fisik Dokumen → Tanda Tangan Digital Ketua Angkatan</em>.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* SECTION 4: Lampiran Berkas */}
            <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-200/80 space-y-4">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-200/80">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-indigo-600 text-[20px]">attachment</span>
                  <h3 className="text-sm font-bold text-slate-800">
                    4. Lampiran Berkas &amp; Bukti Dukung (RAB / Quotation)
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-slate-400 font-medium">Format: PDF / ZIP (Maks 5 MB)</span>
              </div>
              <div className="border-2 border-dashed border-indigo-200 hover:border-indigo-500 rounded-xl p-5 flex flex-col items-center justify-center text-center cursor-pointer transition-all bg-white hover:bg-indigo-50/30 group">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 group-hover:bg-indigo-100/70 flex items-center justify-center text-indigo-600 mb-2 transition-colors">
                  <span className="material-symbols-outlined text-[22px]">cloud_upload</span>
                </div>
                <span className="text-xs font-bold text-slate-800">Tarik file RAB atau Penawaran Vendor ke sini</span>
                <span className="font-mono text-[10px] text-slate-400 mt-0.5">Dokumen otomatis diberi hash SHA-256</span>
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Status Draft tersimpan otomatis • Enkripsi SHA-256</span>
            </div>
            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={() => setIsProposalModalOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-slate-200/70 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
              >
                Batal / Tutup
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md shadow-indigo-200"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>Kirim Pengajuan Proposal (Submit FR-04)</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
