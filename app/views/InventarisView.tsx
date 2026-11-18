import React, { useState } from "react";
import { useErp } from "../context/ErpContext";

export function InventarisView() {
  const { inventory, setIsAddInventoryModalOpen } = useErp();
  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState("all");

  const filtered = inventory.filter((item) => {
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.assetCode.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase());
    const matchCat = filterCat === "all" || item.category === filterCat;
    return matchSearch && matchCat;
  });

  const totalAssetValue = inventory.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Header Inventaris */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-col gap-1 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-sky-600 bg-sky-50 border border-sky-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              FR-06 · FR-07 · INVENTORY CATALOG
            </span>
            <span className="text-slate-300">•</span>
            <span className="font-mono text-xs text-emerald-600 font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Barcode &amp; QR Tracking Siap
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Inventaris &amp; Katalog Aset TI Angkatan
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            Daftar aset fisik &amp; digital hasil pengadaan kas angkatan. Terintegrasi langsung dengan nomor register otomatis saat proposal pengadaan disetujui.
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start lg:self-center shrink-0">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-4 py-2.5 rounded-xl font-semibold text-xs transition-all shadow-xs"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px] text-slate-500">print</span>
            <span>Cetak Label QR Aset</span>
          </button>
          <button
            onClick={() => setIsAddInventoryModalOpen(true)}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md shadow-indigo-200"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            <span>+ Registrasi Aset Baru</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Inventaris */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[24px]">inventory_2</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Unit Aset</span>
            <span className="text-2xl font-extrabold text-slate-900 font-mono">{inventory.length} Unit</span>
            <span className="text-[11px] text-emerald-600 font-medium">Tercatat di sistem</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[24px]">price_check</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Valuasi Aset</span>
            <span className="text-xl font-extrabold text-slate-900 font-mono">
              Rp {totalAssetValue.toLocaleString("id-ID")}
            </span>
            <span className="text-[11px] text-slate-400">Buku inventaris aktif</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[24px]">pan_tool</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Sedang Dipinjam</span>
            <span className="text-2xl font-extrabold text-amber-600 font-mono">
              {inventory.filter((i) => i.condition === "Dipinjam").length} Unit
            </span>
            <span className="text-[11px] text-amber-700 font-medium">Ada surat peminjaman</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[24px]">build</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Perlu Servis / Cek</span>
            <span className="text-2xl font-extrabold text-rose-600 font-mono">
              {inventory.filter((i) => i.condition === "Perlu Servis").length} Unit
            </span>
            <span className="text-[11px] text-slate-400">Segera tindak lanjut</span>
          </div>
        </div>
      </div>

      {/* Filter and Table Container */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-[18px]">
              search
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari nama barang, kode aset, lokasi..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <select
              value={filterCat}
              onChange={(e) => setFilterCat(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 cursor-pointer"
            >
              <option value="all">Semua Kategori</option>
              <option value="Elektronik & Display">Elektronik &amp; Display</option>
              <option value="Kabel & Aksesori">Kabel &amp; Aksesori</option>
              <option value="Infrastruktur Cloud">Infrastruktur Cloud</option>
              <option value="Kelistrikan">Kelistrikan</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-400 font-mono text-[11px] uppercase tracking-wider border-b border-slate-100">
              <tr>
                <th className="px-6 py-3 font-semibold">Kode Register</th>
                <th className="px-6 py-3 font-semibold">Nama Aset &amp; Kategori</th>
                <th className="px-6 py-3 font-semibold">Lokasi Penyimpanan</th>
                <th className="px-6 py-3 font-semibold">Tgl Perolehan</th>
                <th className="px-6 py-3 text-right font-semibold">Nilai Aset</th>
                <th className="px-6 py-3 text-center font-semibold">Kondisi / Status</th>
                <th className="px-6 py-3 font-semibold">PIC Bertanggung Jawab</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="px-6 py-3.5 font-mono font-bold text-indigo-600">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-slate-400">qr_code</span>
                      {item.assetCode}
                    </span>
                  </td>
                  <td className="px-6 py-3.5">
                    <div className="flex flex-col">
                      <span className="font-semibold text-slate-900">{item.name}</span>
                      <span className="text-[11px] text-slate-400">{item.category}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3.5">
                    <span className="flex items-center gap-1 text-slate-600">
                      <span className="material-symbols-outlined text-[15px] text-slate-400">place</span>
                      {item.location}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 font-mono text-slate-500">{item.acquisitionDate}</td>
                  <td className="px-6 py-3.5 font-mono text-right font-bold text-slate-900">
                    Rp {item.price.toLocaleString("id-ID")}
                  </td>
                  <td className="px-6 py-3.5 text-center">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                        item.condition === "Baik"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : item.condition === "Dipinjam"
                          ? "bg-amber-50 text-amber-800 border border-amber-200"
                          : "bg-rose-50 text-rose-700 border border-rose-200"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[13px]">
                        {item.condition === "Baik" ? "check_circle" : item.condition === "Dipinjam" ? "schedule" : "warning"}
                      </span>
                      {item.condition}
                    </span>
                    {item.borrower && (
                      <div className="text-[10px] text-amber-700 font-mono mt-0.5">{item.borrower}</div>
                    )}
                  </td>
                  <td className="px-6 py-3.5 font-medium text-slate-800">{item.pic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
