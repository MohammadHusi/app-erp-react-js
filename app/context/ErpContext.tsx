import React, { createContext, useContext, useState } from "react";
import type {
  Transaction,
  ProcurementProposal,
  InventoryItem,
  CashSummary,
} from "../types/erp";
import {
  initialCashSummary,
  initialTransactions,
  initialProposals,
  initialInventory,
} from "../data/mockData";

interface ErpContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userRole: string;
  setUserRole: (role: string) => void;
  cashSummary: CashSummary;
  transactions: Transaction[];
  proposals: ProcurementProposal[];
  inventory: InventoryItem[];
  selectedProposal: ProcurementProposal | null;
  setSelectedProposal: (proposal: ProcurementProposal | null) => void;
  isProposalModalOpen: boolean;
  setIsProposalModalOpen: (open: boolean) => void;
  isProposalDrawerOpen: boolean;
  setIsProposalDrawerOpen: (open: boolean) => void;
  drawerMode: "approval" | "rejection";
  setDrawerMode: (mode: "approval" | "rejection") => void;
  isAddTransactionModalOpen: boolean;
  setIsAddTransactionModalOpen: (open: boolean) => void;
  isAddInventoryModalOpen: boolean;
  setIsAddInventoryModalOpen: (open: boolean) => void;
  // Actions
  addTransaction: (tx: Omit<Transaction, "id" | "time" | "categoryColor" | "statusColor">) => void;
  addProposal: (proposal: Omit<ProcurementProposal, "id" | "date" | "statusBadge" | "step">) => void;
  approveProposal: (proposalId: string) => void;
  rejectProposal: (proposalId: string, notes: string[]) => void;
  addInventoryItem: (item: Omit<InventoryItem, "id" | "assetCode">) => void;
}

const ErpContext = createContext<ErpContextType | undefined>(undefined);

export function ErpProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [userRole, setUserRole] = useState<string>("Bendahara / System Admin");
  const [cashSummary, setCashSummary] = useState<CashSummary>(initialCashSummary);
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [proposals, setProposals] = useState<ProcurementProposal[]>(initialProposals);
  const [inventory, setInventory] = useState<InventoryItem[]>(initialInventory);

  const [selectedProposal, setSelectedProposal] = useState<ProcurementProposal | null>(initialProposals[0]);
  const [isProposalModalOpen, setIsProposalModalOpen] = useState<boolean>(false);
  const [isProposalDrawerOpen, setIsProposalDrawerOpen] = useState<boolean>(false);
  const [drawerMode, setDrawerMode] = useState<"approval" | "rejection">("approval");
  const [isAddTransactionModalOpen, setIsAddTransactionModalOpen] = useState<boolean>(false);
  const [isAddInventoryModalOpen, setIsAddInventoryModalOpen] = useState<boolean>(false);

  const addTransaction = (tx: Omit<Transaction, "id" | "time" | "categoryColor" | "statusColor">) => {
    const newTx: Transaction = {
      ...tx,
      id: `#TRX-2025-${String(transactions.length + 90).padStart(3, "0")}`,
      time: "Hari ini, baru saja",
      categoryColor:
        tx.category === "Iuran Bulanan"
          ? "bg-purple-100 text-purple-700"
          : "bg-teal-100 text-teal-700",
      statusColor:
        tx.status === "Lunas"
          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
          : "bg-amber-100 text-amber-800 border border-amber-200",
    };

    setTransactions([newTx, ...transactions]);

    // Update cash summary
    setCashSummary((prev) => ({
      ...prev,
      totalBalance: prev.totalBalance + tx.nominal,
      monthlyIncome: tx.nominal > 0 ? prev.monthlyIncome + tx.nominal : prev.monthlyIncome,
    }));
  };

  const addProposal = (
    prop: Omit<ProcurementProposal, "id" | "date" | "statusBadge" | "step">
  ) => {
    const isHigh = prop.nominal > 500000;
    const newId = `PGD-2025-${String(proposals.length + 9).padStart(3, "0")}`;
    const newProp: ProcurementProposal = {
      ...prop,
      id: newId,
      date: "Hari ini • " + new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }) + " WIB",
      status: "Review Bendahara",
      statusBadge: {
        label: isHigh ? "Tahap 2: Verifikasi Kas" : "Menunggu Approval",
        bg: "bg-amber-50",
        text: "text-amber-700",
        border: "border-amber-200",
      },
      step: 2,
      hasHighGovernanceRule: isHigh,
    };

    setProposals([newProp, ...proposals]);
  };

  const approveProposal = (proposalId: string) => {
    setProposals((prev) =>
      prev.map((item) => {
        if (item.id === proposalId) {
          const updated: ProcurementProposal = {
            ...item,
            status: "Dicairkan",
            step: 4,
            statusBadge: {
              label: "Telah Dicairkan (FR-06)",
              bg: "bg-emerald-50",
              text: "text-emerald-700",
              border: "border-emerald-200",
            },
          };
          if (selectedProposal?.id === proposalId) {
            setSelectedProposal(updated);
          }
          return updated;
        }
        return item;
      })
    );

    // Otomatis kurangi saldo kas dan tambah transaksi audit
    const approvedItem = proposals.find((p) => p.id === proposalId);
    if (approvedItem) {
      addTransaction({
        pic: approvedItem.applicant,
        nim: approvedItem.nim,
        category: approvedItem.category,
        nominal: -approvedItem.nominal,
        status: "Lunas",
      });

      // Jika kategori Aset Tetap, otomatis tambahkan ke inventaris!
      if (approvedItem.category === "Aset Tetap Angkatan") {
        addInventoryItem({
          name: approvedItem.title.replace(/^Pengadaan\s+/i, ""),
          category: "Aset TI & Elektronik",
          location: "Lab Komputer / Auditorium",
          acquisitionDate: "Hari ini",
          price: approvedItem.nominal,
          condition: "Baik",
          pic: approvedItem.applicant,
        });
      }
    }
  };

  const rejectProposal = (proposalId: string, notes: string[]) => {
    setProposals((prev) =>
      prev.map((item) => {
        if (item.id === proposalId) {
          const updated: ProcurementProposal = {
            ...item,
            status: "Ditolak",
            rejectionNotes: notes,
            statusBadge: {
              label: "Ditolak (Perlu Revisi)",
              bg: "bg-rose-50",
              text: "text-rose-700",
              border: "border-rose-200",
            },
          };
          if (selectedProposal?.id === proposalId) {
            setSelectedProposal(updated);
          }
          return updated;
        }
        return item;
      })
    );
  };

  const addInventoryItem = (item: Omit<InventoryItem, "id" | "assetCode">) => {
    const nextNum = inventory.length + 1;
    const newAsset: InventoryItem = {
      ...item,
      id: `AST-2025-${String(nextNum).padStart(3, "0")}`,
      assetCode: `AST-TI/2025/${String(nextNum).padStart(3, "0")}`,
    };
    setInventory([newAsset, ...inventory]);
  };

  return (
    <ErpContext.Provider
      value={{
        activeTab,
        setActiveTab,
        userRole,
        setUserRole,
        cashSummary,
        transactions,
        proposals,
        inventory,
        selectedProposal,
        setSelectedProposal,
        isProposalModalOpen,
        setIsProposalModalOpen,
        isProposalDrawerOpen,
        setIsProposalDrawerOpen,
        drawerMode,
        setDrawerMode,
        isAddTransactionModalOpen,
        setIsAddTransactionModalOpen,
        isAddInventoryModalOpen,
        setIsAddInventoryModalOpen,
        addTransaction,
        addProposal,
        approveProposal,
        rejectProposal,
        addInventoryItem,
      }}
    >
      {children}
    </ErpContext.Provider>
  );
}

export function useErp() {
  const context = useContext(ErpContext);
  if (!context) {
    throw new Error("useErp must be used within an ErpProvider");
  }
  return context;
}
