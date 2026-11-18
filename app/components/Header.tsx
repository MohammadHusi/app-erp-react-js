import React, { useState } from "react";
import { useErp } from "../context/ErpContext";

export function Header() {
  const { userRole, setIsAddTransactionModalOpen, setIsProposalModalOpen, setIsMobileSidebarOpen } = useErp();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="fixed top-0 left-0 lg:left-[260px] right-0 h-[70px] bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] z-30 flex items-center justify-between px-4 sm:px-6 lg:px-8 shadow-xs">
      <div className="flex items-center gap-2 sm:gap-4 flex-1 max-w-xl">
        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileSidebarOpen(true)}
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors shrink-0"
          title="Buka Menu"
          type="button"
        >
          <span className="material-symbols-outlined text-[24px]">menu</span>
        </button>

        {/* Search Input with keyboard indicator */}
        <div className="relative flex items-center flex-1 max-w-xs sm:max-w-md">
          <span className="material-symbols-outlined absolute left-3 text-slate-400 text-[18px]">
            search
          </span>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 sm:pr-14 py-2 bg-slate-100/80 hover:bg-slate-100 rounded-full text-xs text-slate-800 placeholder:text-slate-400 border border-transparent focus:border-indigo-500 focus:bg-white focus:outline-none transition-all"
            placeholder="Cari transaksi, NIM, tiket..."
            type="text"
          />
          <div className="hidden sm:block absolute right-3 px-1.5 py-0.5 rounded bg-white text-slate-400 text-[10px] font-semibold border border-slate-200 select-none shadow-2xs">
            Ctrl K
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Academic Period Badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
          <span className="material-symbols-outlined text-[15px] text-amber-600">calendar_today</span>
          <span>Semester Ganjil 2024/2025</span>
        </div>

        {/* Quick actions buttons */}
        <button
          onClick={() => setIsAddTransactionModalOpen(true)}
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition-all"
          title="Catat Iuran / Transaksi"
        >
          <span className="material-symbols-outlined text-[16px]">payments</span>
          <span>+ Transaksi</span>
        </button>

        <button
          onClick={() => setIsProposalModalOpen(true)}
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 text-[#6354e8] hover:bg-indigo-100 border border-indigo-200 text-xs font-bold transition-all"
          title="Ajukan Proposal Pengadaan"
        >
          <span className="material-symbols-outlined text-[16px]">add_circle</span>
          <span>+ Pengadaan</span>
        </button>

        {/* Notification button */}
        <button
          className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
          title="Notifikasi Sistem"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
        </button>

        <div className="h-6 w-px bg-slate-200 mx-1"></div>

        {/* Profile Card */}
        <div className="flex items-center gap-2.5 pl-1 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#6354e8] to-[#0284c7] text-white flex items-center justify-center font-bold text-xs shadow-xs ring-2 ring-indigo-100">
            MH
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold text-slate-800 leading-tight">Mohammad Husi</span>
              <span className="material-symbols-outlined text-[14px] text-slate-400">expand_more</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold">
              <span className="material-symbols-outlined text-[12px]">verified</span>
              <span>NIM: 20241230012</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
