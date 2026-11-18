import React from "react";
import type { Route } from "./+types/home";
import { ErpProvider, useErp } from "../context/ErpContext";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { ProposalModal } from "../components/ProposalModal";
import { ProposalDrawer } from "../components/ProposalDrawer";
import { TransactionModal } from "../components/TransactionModal";
import { InventoryModal } from "../components/InventoryModal";

import { DashboardView } from "../views/DashboardView";
import { AnalisisView } from "../views/AnalisisView";
import { PengadaanView } from "../views/PengadaanView";
import { InventarisView } from "../views/InventarisView";
import { IuranView } from "../views/IuranView";
import { AuditView } from "../views/AuditView";
import { ServerView } from "../views/ServerView";
import { LaporanView } from "../views/LaporanView";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SI-KASANG ERP - Tata Kelola Finansial & Pengadaan Kas Angkatan" },
    {
      name: "description",
      content:
        "Sistem Informasi ERP Tata Kelola Finansial, Iuran Mahasiswa, Workflow Pengadaan & Inventaris TI Angkatan.",
    },
  ];
}

function MainContent() {
  const { activeTab } = useErp();

  return (
    <div className="min-h-screen bg-[#f8f9ff]">
      <Sidebar />
      <div className="pl-0 lg:pl-[260px] transition-all duration-300">
        <Header />
        <main className="w-full pt-[85px] sm:pt-[90px] px-4 sm:px-6 lg:px-8 pb-16 min-h-screen">
          {activeTab === "dashboard" && <DashboardView />}
          {activeTab === "analisis" && <AnalisisView />}
          {activeTab === "pengadaan" && <PengadaanView />}
          {activeTab === "inventaris" && <InventarisView />}
          {activeTab === "iuran" && <IuranView />}
          {activeTab === "audit" && <AuditView />}
          {activeTab === "server" && <ServerView />}
          {activeTab === "laporan" && <LaporanView />}
          {activeTab === "database" && <ServerView />}
        </main>
      </div>

      {/* Global Interactive Modals and Drawers */}
      <ProposalModal />
      <ProposalDrawer />
      <TransactionModal />
      <InventoryModal />
    </div>
  );
}

export default function Home() {
  return (
    <ErpProvider>
      <MainContent />
    </ErpProvider>
  );
}
