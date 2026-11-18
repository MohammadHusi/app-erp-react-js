export interface Transaction {
  id: string;
  time: string;
  pic: string;
  nim?: string;
  category: string;
  categoryColor: string;
  nominal: number; // positif iuran, negatif pengeluaran
  status: "Lunas" | "Verifikasi" | "Disetujui" | "Ditolak";
  statusColor: string;
}

export interface ProcurementProposal {
  id: string;
  title: string;
  applicant: string;
  nim: string;
  division: string;
  category: "Aset Tetap Angkatan" | "Operasional Kuliah" | "Infrastruktur TI" | "Kegiatan Akademik";
  budgetPost: string;
  nominal: number;
  date: string;
  urgencyDescription: string;
  status: "Draft" | "Review Bendahara" | "Sign-Off Ketua" | "Dicairkan" | "Ditolak";
  statusBadge: {
    label: string;
    bg: string;
    text: string;
    border: string;
  };
  step: number; // 1 to 4
  rejectionNotes?: string[];
  reviewedBy?: string;
  hasHighGovernanceRule: boolean; // > 500.000
  attachments: {
    name: string;
    size: string;
    type: "pdf" | "zip" | "doc";
    verified: boolean;
  }[];
}

export interface InventoryItem {
  id: string;
  assetCode: string;
  name: string;
  category: string;
  location: string;
  acquisitionDate: string;
  price: number;
  condition: "Baik" | "Perlu Servis" | "Dipinjam";
  borrower?: string;
  pic: string;
}

export interface CashSummary {
  totalBalance: number;
  monthlyIncome: number;
  monthlyIncomeTarget: number;
  approvedExpense: number;
  approvedCount: number;
  pendingCount: number;
  verifiedStudents: number;
  totalStudents: number;
  complianceRate: number;
}
