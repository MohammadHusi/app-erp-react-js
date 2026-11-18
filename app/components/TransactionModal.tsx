import React, { useState } from "react";
import { useErp } from "../context/ErpContext";

export function TransactionModal() {
  const { isAddTransactionModalOpen, setIsAddTransactionModalOpen, addTransaction } = useErp();

  const [pic, setPic] = useState("");
  const [nim, setNim] = useState("");
  const [type, setType] = useState<"masuk" | "keluar">("masuk");
  const [category, setCategory] = useState("Iuran Bulanan");
  const [nominal, setNominal] = useState("50000");

  if (!isAddTransactionModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pic || !nominal) return;

    const num = parseInt(nominal.replace(/\D/g, "")) || 0;
    const finalNominal = type === "masuk" ? num : -num;

    addTransaction({
      pic,
      nim: nim ? `NIM: ${nim}` : undefined,
      category,
      nominal: finalNominal,
      status: "Lunas",
    });

    setIsAddTransactionModalOpen(false);
    setPic("");
    setNim("");
  };

  return (
    <div aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto" role="dialog">
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
        onClick={() => setIsAddTransactionModalOpen(false)}
      ></div>

      <div className="relative bg-white rounded-2xl max-w-lg w-full my-auto shadow-2xl z-10 flex flex-col overflow-hidden border border-slate-100">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">payments</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Catat Transaksi Kas Baru</h3>
              <p className="text-[11px] text-slate-500">Iuran Mahasiswa &amp; Pengeluaran Kas (FR-01/FR-02)</p>
            </div>
          </div>
          <button
            onClick={() => setIsAddTransactionModalOpen(false)}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">Jenis Transaksi</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setType("masuk");
                  setCategory("Iuran Bulanan");
                }}
                className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  type === "masuk"
                    ? "bg-emerald-50 border-emerald-300 text-emerald-700 shadow-xs"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                Kas Masuk (Iuran)
              </button>
              <button
                type="button"
                onClick={() => {
                  setType("keluar");
                  setCategory("Operasional Lab");
                }}
                className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  type === "keluar"
                    ? "bg-rose-50 border-rose-300 text-rose-700 shadow-xs"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
                Kas Keluar (Belanja)
              </button>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">
              Nama Mahasiswa / PIC
            </label>
            <input
              type="text"
              value={pic}
              onChange={(e) => setPic(e.target.value)}
              placeholder="Contoh: Ahmad Rizky"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">
              NIM (Opsional)
            </label>
            <input
              type="text"
              value={nim}
              onChange={(e) => setNim(e.target.value)}
              placeholder="20241230..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
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
                {type === "masuk" ? (
                  <>
                    <option>Iuran Bulanan</option>
                    <option>Iuran Khusus Proyek</option>
                    <option>Donasi Kas</option>
                  </>
                ) : (
                  <>
                    <option>Operasional Lab</option>
                    <option>Sewa Domain &amp; Server</option>
                    <option>Konsumsi &amp; Rapat</option>
                    <option>Aset Perlengkapan</option>
                  </>
                )}
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">Nominal (Rp)</label>
              <input
                type="text"
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 font-mono font-bold text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                required
              />
            </div>
          </div>

          <div className="pt-3 flex justify-end gap-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsAddTransactionModalOpen(false)}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-200"
            >
              Simpan Transaksi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
