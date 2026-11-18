import React from "react";
import { useErp } from "../context/ErpContext";

export function LaporanView() {
  const { cashSummary, transactions, proposals, inventory } = useErp();

  const handleExportCSV = () => {
    let csv = "ID,Mahasiswa_PIC,Kategori,Nominal,Status,Waktu\n";
    transactions.forEach((t) => {
      csv += `"${t.id}","${t.pic}","${t.category}","${t.nominal}","${t.status}","${t.time}"\n`;
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Laporan_Buku_Kas_SI_KASANG.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold text-rose-600 bg-rose-50 border border-rose-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              UAT TESTING &amp; EXPORT SYSTEM
            </span>
            <span className="text-slate-300">•</span>
            <span className="font-mono text-xs text-emerald-600 font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Siap Cetak &amp; Audit LPJ
            </span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Pusat Ekspor Laporan &amp; Berkas UAT
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Unduh rekapitulasi data keuangan, pengadaan, dan inventaris dalam format Excel (CSV), PDF, atau cetak berkas verifikasi UAT Manpro.
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">print</span>
            <span>Cetak Halaman (Print)</span>
          </button>
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-md shadow-indigo-200"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Download Rekap Kas (CSV/Excel)</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-[22px]">table_view</span>
            </div>
            <h3 className="text-sm font-bold text-slate-900">Rekap Buku Besar Kas Angkatan</h3>
            <p className="text-xs text-slate-500 mt-1">
              Seluruh mutasi debit dan kredit iuran mahasiswa serta pengeluaran belanja berstempel digital.
            </p>
          </div>
          <button
            onClick={handleExportCSV}
            className="mt-4 w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl border border-slate-200 flex items-center justify-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">file_download</span>
            <span>Unduh File CSV ({transactions.length} baris)</span>
          </button>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-[22px]">fact_check</span>
            </div>
            <h3 className="text-sm font-bold text-slate-900">Rekap Proposal Pengadaan &amp; LPJ</h3>
            <p className="text-xs text-slate-500 mt-1">
              Daftar tiket usulan pengadaan, riwayat otorisasi bertingkat, dan catatan revisi temuan audit.
            </p>
          </div>
          <button
            onClick={() => alert("Ekspor Rekap Pengadaan PDF siap diunduh!")}
            className="mt-4 w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl border border-slate-200 flex items-center justify-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
            <span>Unduh Laporan Pengadaan ({proposals.length} proposal)</span>
          </button>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-[22px]">inventory_2</span>
            </div>
            <h3 className="text-sm font-bold text-slate-900">Buku Register Inventaris TI</h3>
            <p className="text-xs text-slate-500 mt-1">
              Katalog aset lengkap beserta nomor register unik, riwayat pinjam pakai, dan lokasi penyimpanan.
            </p>
          </div>
          <button
            onClick={() => alert("Ekspor Buku Register Inventaris siap diunduh!")}
            className="mt-4 w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl border border-slate-200 flex items-center justify-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">file_download</span>
            <span>Unduh Register Aset ({inventory.length} item)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
