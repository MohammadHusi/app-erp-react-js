import React, { useState } from "react";
import { useErp } from "../context/ErpContext";

export function InventoryModal() {
  const { isAddInventoryModalOpen, setIsAddInventoryModalOpen, addInventoryItem } = useErp();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Elektronik & Display");
  const [location, setLocation] = useState("Auditorium Lab TI (Lemari Aset 1)");
  const [price, setPrice] = useState("1500000");
  const [condition, setCondition] = useState<"Baik" | "Perlu Servis" | "Dipinjam">("Baik");
  const [pic, setPic] = useState("Mohammad Husi");

  if (!isAddInventoryModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    addInventoryItem({
      name,
      category,
      location,
      acquisitionDate: "Hari ini",
      price: parseInt(price.replace(/\D/g, "")) || 0,
      condition,
      pic,
    });

    setIsAddInventoryModalOpen(false);
    setName("");
  };

  return (
    <div aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto" role="dialog">
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
        onClick={() => setIsAddInventoryModalOpen(false)}
      ></div>

      <div className="relative bg-white rounded-2xl max-w-lg w-full my-auto shadow-2xl z-10 flex flex-col overflow-hidden border border-slate-100">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">inventory_2</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Registrasi Aset TI Baru</h3>
              <p className="text-[11px] text-slate-500">Katalogisasi Inventaris &amp; Penomoran Otomatis (FR-06/07)</p>
            </div>
          </div>
          <button
            onClick={() => setIsAddInventoryModalOpen(false)}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">Nama Barang / Aset</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Router WiFi Gigabit TP-Link Archer"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">Kategori</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              >
                <option>Elektronik &amp; Display</option>
                <option>Kabel &amp; Aksesori</option>
                <option>Infrastruktur Cloud</option>
                <option>Kelistrikan</option>
                <option>Perlengkapan Ruang</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">Nilai Perolehan (Rp)</label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 font-mono font-bold text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">Lokasi Penyimpanan</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Auditorium Lab TI / Lemari Aset"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">Kondisi</label>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              >
                <option value="Baik">Baik</option>
                <option value="Perlu Servis">Perlu Servis</option>
                <option value="Dipinjam">Dipinjam</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">Penanggung Jawab (PIC)</label>
              <input
                type="text"
                value={pic}
                onChange={(e) => setPic(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                required
              />
            </div>
          </div>

          <div className="pt-3 flex justify-end gap-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsAddInventoryModalOpen(false)}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-200"
            >
              Registrasi Aset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
