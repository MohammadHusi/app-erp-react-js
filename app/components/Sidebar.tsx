import React from "react";
import { useErp } from "../context/ErpContext";

export function Sidebar() {
  const {
    activeTab,
    setActiveTab,
    userRole,
    setUserRole,
    isMobileSidebarOpen,
    setIsMobileSidebarOpen,
  } = useErp();

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileSidebarOpen(false);
  };

  const navItemsDashboard = [
    { id: "dashboard", label: "Default / Ikhtisar", icon: "grid_view" },
    { id: "analisis", label: "Arus Kas & Analisis", icon: "query_stats" },
    { id: "server", label: "Server & Tata Kelola", icon: "dns" },
  ];

  const navItemsOps = [
    { id: "iuran", label: "Kas & Iuran (FR-01/02)", icon: "payments" },
    { id: "pengadaan", label: "Pengadaan (FR-04/05)", icon: "fact_check" },
    { id: "inventaris", label: "Aset TI (Inventaris)", icon: "inventory_2" },
    { id: "audit", label: "Log Audit TI (FR-08/09)", icon: "verified_user" },
  ];

  const navItemsSystem = [
    { id: "laporan", label: "Ekspor & Laporan UAT", icon: "description" },
    { id: "database", label: "VPS & Database", icon: "database" },
  ];

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar with Responsive Slide (Hidden by default on mobile, fixed on desktop) */}
      <aside
        className={`fixed left-0 top-0 h-full w-[260px] bg-white border-r border-[#e2e8f0] shadow-[0_2px_12px_rgba(0,0,0,0.03)] z-50 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col">
          {/* Brand & Mobile Close Button */}
          <div className="h-[70px] px-6 flex items-center justify-between border-b border-[#f1f5f9]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6354e8] to-[#4338ca] flex items-center justify-center text-white shadow-md shadow-indigo-500/20 shrink-0">
                <span className="material-symbols-outlined text-[22px]">account_balance_wallet</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-bold text-[16px] tracking-tight text-slate-900 leading-tight truncate">
                  SI-KASANG ERP
                </span>
                <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase truncate">
                  Tata Kelola TI &amp; Kas
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsMobileSidebarOpen(false)}
              className="lg:hidden p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              title="Tutup Menu"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

        {/* Role Switcher */}
        <div className="p-4 border-b border-[#f1f5f9] bg-slate-50/60">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Akses Otoritas</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Aktif
            </span>
          </div>
          <div className="relative">
            <select
              aria-label="Pilih Peran Sistem"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-lg text-slate-800 text-xs font-semibold px-3 py-2 focus:outline-none focus:border-indigo-600 appearance-none cursor-pointer pr-8 shadow-xs"
            >
              <option value="Bendahara / System Admin">Bendahara / System Admin</option>
              <option value="System Administrator">System Administrator</option>
              <option value="Bendahara Angkatan">Bendahara Angkatan</option>
              <option value="Ketua Angkatan">Ketua Angkatan</option>
              <option value="Mahasiswa">Mahasiswa</option>
            </select>
            <span className="material-symbols-outlined absolute right-2.5 top-2.5 pointer-events-none text-slate-400 text-[18px]">
              unfold_more
            </span>
          </div>
        </div>

        {/* Navigation list */}
        <div className="px-4 py-3 overflow-y-auto max-h-[calc(100vh-230px)] space-y-4">
          <div>
            <div className="px-2 pt-1 pb-1.5">
              <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">DASHBOARD</span>
            </div>
            <nav className="flex flex-col gap-1">
              {navItemsDashboard.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all text-left ${
                      isActive
                        ? "bg-[#eeecfd] text-[#6354e8] shadow-xs"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[19px]">{item.icon}</span>
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div>
            <div className="px-2 pt-1 pb-1.5">
              <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">MODUL OPERASIONAL</span>
            </div>
            <nav className="flex flex-col gap-1">
              {navItemsOps.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all text-left ${
                      isActive
                        ? "bg-[#eeecfd] text-[#6354e8] shadow-xs"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[19px]">{item.icon}</span>
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div>
            <div className="px-2 pt-1 pb-1.5">
              <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">SISTEM &amp; LAPORAN</span>
            </div>
            <nav className="flex flex-col gap-1">
              {navItemsSystem.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all text-left ${
                      isActive
                        ? "bg-[#eeecfd] text-[#6354e8] shadow-xs"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[19px]">{item.icon}</span>
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Footer Coolify VPS Info */}
      <div className="p-3 m-3 rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-slate-700">Coolify VPS</span>
          </div>
          <span className="text-xs font-bold text-emerald-600">142ms</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-slate-500 text-[11px]">
          <span className="font-medium truncate">Mohammad Husi</span>
          <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold text-[10px]">ONLINE</span>
        </div>
      </div>
    </aside>
  </>
);
}
