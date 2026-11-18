<!DOCTYPE html>

<html lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<meta content="web_dashboard" name="shell-type"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;family=JetBrains+Mono:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<style>
    @layer base {
      html, body {
        margin: 0;
        padding: 0;
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      body {
        overscroll-behavior: none;
      }
      main > :first-child {
        margin-top: 0 !important;
      }
      main > :last-child {
        margin-bottom: 0 !important;
      }
    }
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f5f9;
    }
    ::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 9999px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #94a3b8;
    }
  </style>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "error": "#ef4444",
            "error-container": "#fee2e2",
            "surface": "#ffffff",
            "background": "#f8f9ff",
            "outline": "#94a3b8",
            "outline-variant": "#e2e8f0",
            "primary": "#4f46e5",
            "primary-container": "#6366f1",
            "on-primary": "#ffffff",
            "on-surface": "#0f172a",
            "on-surface-variant": "#64748b",
            "secondary": "#10b981",
            "secondary-container": "#d1fae5",
            "tertiary": "#f59e0b",
            "tertiary-container": "#fef3c7"
          },
          fontFamily: {
            sans: ['Plus Jakarta Sans', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace']
          }
        }
      }
    }
  </script>
</head>
<body class="bg-[#f8f9ff] text-slate-800 antialiased min-h-screen">
<!-- DropX Navigation Sidebar (Light Theme) -->
<aside class="fixed left-0 top-0 h-full w-64 bg-white z-40 flex flex-col justify-between border-r border-slate-200/80 shadow-sm">
<div class="flex flex-col">
<!-- App Brand Logo -->
<div class="h-16 px-5 flex items-center gap-3 border-b border-slate-100">
<div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center text-white shadow-md shadow-indigo-200">
<span class="material-symbols-outlined text-[22px]">widgets</span>
</div>
<div class="flex flex-col min-w-0">
<span class="text-[15px] font-bold text-slate-900 tracking-tight leading-tight">SI-KASANG ERP</span>
<span class="text-[10px] font-bold text-indigo-600 tracking-wider uppercase">DropX Admin IT-Gov</span>
</div>
</div>
<!-- Access Authority Role Selector -->
<div class="p-4 border-b border-slate-100 bg-slate-50/50">
<div class="flex items-center justify-between mb-1.5">
<span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Akses Otoritas</span>
<span class="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
<span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Online
          </span>
</div>
<div class="relative">
<select aria-label="Pilih Peran Sistem" class="w-full bg-white border border-slate-200 rounded-lg text-slate-800 text-xs px-3 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 appearance-none cursor-pointer pr-8 shadow-sm">
<option selected="">Bendahara / System Admin</option>
<option>System Administrator</option>
<option>Bendahara Angkatan</option>
<option>Ketua Angkatan</option>
<option>Mahasiswa</option>
</select>
<span class="material-symbols-outlined absolute right-2.5 top-2 pointer-events-none text-slate-400 text-[18px]">unfold_more</span>
</div>
</div>
<!-- Navigation Links -->
<div class="px-3 pt-4">
<span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-2 block">Modul Operasional</span>
<nav class="flex flex-col gap-1">
<a class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium text-xs transition-colors" href="#">
<span class="material-symbols-outlined text-[20px] text-slate-400">dashboard</span>
<span>Dashboard &amp; Ikhtisar</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium text-xs transition-colors" href="#">
<span class="material-symbols-outlined text-[20px] text-slate-400">account_balance_wallet</span>
<span>Kas &amp; Iuran Mahasiswa</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-50 text-indigo-600 font-bold text-xs shadow-xs transition-colors" href="#">
<span class="material-symbols-outlined text-[20px] text-indigo-600">fact_check</span>
<span>Pengadaan &amp; Approval</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium text-xs transition-colors" href="#">
<span class="material-symbols-outlined text-[20px] text-slate-400">verified_user</span>
<span>Aset &amp; Log Audit TI</span>
</a>
</nav>
</div>
</div>
<!-- User / Infra Footer -->
<div class="p-4 border-t border-slate-100 bg-slate-50/60 flex flex-col gap-3">
<div class="flex items-center justify-between px-3 py-2 rounded-lg bg-white border border-slate-200/80 shadow-xs">
<div class="flex items-center gap-2">
<span class="relative flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span class="font-mono text-[11px] font-medium text-slate-600">Coolify VPS</span>
</div>
<span class="font-mono text-[11px] font-bold text-emerald-600">142ms</span>
</div>
<div class="px-1 text-slate-500 text-[11px]">
<p class="font-semibold text-slate-700">Mohammad Husi</p>
<p class="font-mono text-slate-400 text-[10px]">NIM: 20241230012</p>
</div>
</div>
</aside>
<!-- Main Content Wrapper with DropX Clean Background -->
<div class="pl-64">
<!-- DropX Header Bar -->
<header class="fixed top-0 left-64 right-0 h-16 bg-white/80 backdrop-blur-md z-30 border-b border-slate-200/80 flex items-center justify-between px-8">
<div class="flex items-center gap-4 flex-1 max-w-xl">
<div class="flex items-center gap-2 text-slate-400 text-xs font-medium">
<span class="text-slate-700 font-semibold">SI-KASANG</span>
<span class="material-symbols-outlined text-[14px]">chevron_right</span>
<span class="text-indigo-600 font-semibold">Konsol Eksekutif</span>
</div>
<div class="relative flex-1 hidden md:block">
<span class="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-[18px]">search</span>
<input class="w-full bg-slate-100/70 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all" placeholder="Cari NIM, transaksi, atau tiket pengadaan... (Ctrl + K)" type="text"/>
</div>
</div>
<div class="flex items-center gap-4">
<div class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100/80 border border-slate-200 text-slate-700 text-xs font-semibold">
<span class="material-symbols-outlined text-amber-500 text-[16px]">calendar_today</span>
<span>Semester Ganjil 2024/2025</span>
</div>
<button aria-label="Notifikasi" class="relative p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors" type="button">
<span class="material-symbols-outlined text-[20px]">notifications</span>
<span class="absolute top-1.5 right-1.5 h-4 w-4 bg-red-500 text-white text-[9px] font-bold flex items-center justify-center rounded-full">2</span>
</button>
<div class="h-6 w-px bg-slate-200"></div>
<div class="flex items-center gap-3">
<img alt="Profile" class="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-500/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIndYa7kwIninv-cqFUdLBZU-N1R88Hbo55-OP5SM2D0KH8voflhn6_-uh5KU9pQKQ2CcWTu90I3xSbW9St1G96OcfXYW2lRlQnAGA9Ac8ctdg1oZqyuO5nQYv0haQv7GhCR7ZRlXos1FVPjZ6uU32gneAz3QMJBoHfIVQ_bm5xZT_1gbEjn_xeyCtQwuMeXSDXpM7qbvJpHNiSBmDHrue3sLUf2bQXWJaUZzHSmyi"/>
<div class="flex flex-col text-left">
<span class="text-xs font-bold text-slate-800 leading-tight">Mohammad Husi</span>
<span class="text-[10px] text-indigo-600 font-semibold">Lead Administrator</span>
</div>
</div>
</div>
</header>
<!-- Page Content (Light Admin DropX Theme) -->
<main class="relative pt-20 px-8 pb-12 bg-[#f8f9ff] min-h-screen">
<!-- Module Strategic Header -->
<div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
<div class="flex flex-col gap-1.5 max-w-3xl">
<div class="flex items-center gap-2">
<span class="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">FR-04 · FR-05 · UAT-02 COMPLIANT</span>
<span class="text-slate-300">•</span>
<span class="font-mono text-xs text-emerald-600 font-medium flex items-center gap-1.5">
<span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              Policy Rule: Sign-Off &gt; Rp 500.000 Aktif
            </span>
</div>
<h1 class="text-2xl font-extrabold text-slate-900 tracking-tight">Pengadaan &amp; Workflow Persetujuan Anggaran</h1>
<p class="text-slate-500 text-xs sm:text-sm leading-relaxed">
            Pengajuan proposal anggaran pengadaan barang/kegiatan angkatan dengan aturan persetujuan bertingkat IT Governance (&gt; Rp 500.000 butuh sign-off Ketua Angkatan).
          </p>
</div>
<!-- Action Group -->
<div class="flex items-center gap-3 self-start lg:self-center shrink-0">
<button class="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-4 py-2.5 rounded-xl font-semibold text-xs transition-all shadow-xs" type="button">
<span class="material-symbols-outlined text-[18px] text-amber-500">download</span>
<span>Download Rekap XLSX</span>
</button>
<button class="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md shadow-indigo-200" onclick="document.getElementById('modal-pengajuan-baru').classList.remove('hidden')" type="button">
<span class="material-symbols-outlined text-[18px]">add_circle</span>
<span>+ Ajukan Proposal Baru</span>
</button>
</div>
</div>
<!-- Realtime KPI Cards -->
<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
<div class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs relative overflow-hidden flex flex-col justify-between">
<div class="flex items-center justify-between mb-2">
<span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Tahap 1 · Entri</span>
<div class="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
<span class="material-symbols-outlined text-[18px]">edit_document</span>
</div>
</div>
<div>
<div class="text-2xl font-extrabold text-slate-900">3 Proposal</div>
<p class="text-xs text-slate-500 mt-1">Draft &amp; Pengajuan Baru diverifikasi kelengkapannya</p>
</div>
<div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between font-mono text-xs">
<span class="text-slate-400">Estimasi Beban</span>
<span class="text-slate-800 font-bold">Rp 1.150.000</span>
</div>
</div>
<div class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs relative overflow-hidden flex flex-col justify-between">
<div class="flex items-center justify-between mb-2">
<span class="text-[11px] font-bold text-amber-600 uppercase tracking-wider">Tahap 2 · Verifikasi Kas</span>
<div class="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
<span class="material-symbols-outlined text-[18px]">account_balance</span>
</div>
</div>
<div>
<div class="text-2xl font-extrabold text-amber-600">2 Proposal</div>
<p class="text-xs text-slate-500 mt-1">Menunggu verifikasi kelayakan saldo &amp; alokasi pos</p>
</div>
<div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between font-mono text-xs">
<span class="text-slate-400">Perlu Aksi</span>
<span class="text-[10px] font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded-md">Bendahara Review</span>
</div>
</div>
<div class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs relative overflow-hidden flex flex-col justify-between">
<div class="flex items-center justify-between mb-2">
<span class="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">Tahap 3 · Otoritas Tinggi</span>
<div class="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
<span class="material-symbols-outlined text-[18px]">gavel</span>
</div>
</div>
<div>
<div class="text-2xl font-extrabold text-indigo-600">1 Proposal</div>
<p class="text-xs text-slate-500 mt-1">Proposal bernilai &gt; Rp 500k menunggu tanda tangan Ketua</p>
</div>
<div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between font-mono text-xs">
<span class="text-slate-400">Priority Queue</span>
<span class="text-[10px] font-bold text-indigo-700 bg-indigo-100/70 px-2 py-0.5 rounded-md">PGD-2025-008</span>
</div>
</div>
<div class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs relative overflow-hidden flex flex-col justify-between">
<div class="flex items-center justify-between mb-2">
<span class="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Final · Selesai Dicairkan</span>
<div class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
<span class="material-symbols-outlined text-[18px]">verified</span>
</div>
</div>
<div>
<div class="text-2xl font-extrabold text-emerald-600">8 Proposal</div>
<p class="text-xs text-slate-500 mt-1">Terealisasi &amp; tercatat otomatis di Buku Kas Angkatan</p>
</div>
<div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between font-mono text-xs">
<span class="text-slate-400">Total Cair</span>
<span class="text-emerald-700 font-bold">Rp 4.250.000</span>
</div>
</div>
</div>
<!-- IT Governance Threshold Notice Banner -->
<div class="bg-white border border-indigo-100 rounded-2xl p-5 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-indigo-600 text-[24px]">policy</span>
</div>
<div>
<div class="flex items-center gap-2">
<span class="text-sm font-bold text-slate-900">Protokol Pemisahan Tugas (Segregation of Duties)</span>
<span class="text-[10px] font-bold bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-md">Standard ISO 27001 / IT-Gov</span>
</div>
<p class="text-xs text-slate-500 mt-0.5 max-w-2xl">
              Semua pembelanjaan dengan nominal diatas <strong>Rp 500.000</strong> mengaktifkan <em>Gate Multi-Level Approval</em>: Pemohon → Review Kelayakan Bendahara → Validasi Otoritas Ketua Angkatan dengan Token Tanda Tangan Digital.
            </p>
</div>
</div>
<div class="flex items-center gap-4 shrink-0">
<div class="flex flex-col text-right">
<span class="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Cadangan Kas Tersedia</span>
<span class="font-mono text-lg text-emerald-600 font-extrabold">Rp 28.450.000</span>
</div>
</div>
</div>
<!-- Proposal Interactive Table Container -->
<div class="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden mb-6">
<div class="p-4 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<div class="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
<button class="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-indigo-50 text-indigo-600 flex items-center gap-1.5">
              Semua Proposal <span class="bg-indigo-600 text-white text-[10px] px-1.5 py-0.2 rounded-full">14</span>
</button>
<button class="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors">
              Menunggu Persetujuan
            </button>
<button class="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors">
              Disetujui
            </button>
</div>
<button class="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1" onclick="document.getElementById('modal-pengajuan-baru').classList.remove('hidden')">
<span class="material-symbols-outlined text-[16px]">add</span> Buka Form FR-04
          </button>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-slate-50/80 text-slate-400 text-[11px] font-bold uppercase tracking-wider border-b border-slate-100">
<th class="py-3 px-5">No. Tiket &amp; Pengaju</th>
<th class="py-3 px-5">Rincian Pengadaan</th>
<th class="py-3 px-5">Nilai &amp; Governance Gate</th>
<th class="py-3 px-5">Workflow Progress Stepper</th>
<th class="py-3 px-5 text-right">Tindakan Otoritas</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100 text-xs text-slate-700">
<tr class="hover:bg-slate-50/60 transition-colors">
<td class="py-4 px-5 align-top">
<div class="flex flex-col">
<span class="font-mono text-xs font-bold text-indigo-600">PGD-2025-008</span>
<span class="font-semibold text-slate-900 mt-1">Rayhan Pratama</span>
<span class="font-mono text-slate-400 text-[11px]">NIM: 20241230045</span>
<span class="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md w-fit mt-1">Div. Perlengkapan Manpro</span>
</div>
</td>
<td class="py-4 px-5 align-top max-w-xs">
<span class="font-bold text-slate-900 block leading-snug">Pengadaan Proyektor Portable EPSON EB-E01 untuk Presentasi Manpro</span>
<div class="flex items-center gap-2 mt-1">
<span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Aset Tetap</span>
<span class="text-[10px] text-slate-400">Batch 1 - 2025</span>
</div>
</td>
<td class="py-4 px-5 align-top">
<div class="font-mono text-base font-extrabold text-slate-900">Rp 1.850.000</div>
<div class="mt-1 flex items-center gap-1 text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded text-[10px] font-bold w-fit">
<span class="material-symbols-outlined text-[13px]">shield</span>
<span>Approval L2: Sign-Off Ketua (&gt;500k)</span>
</div>
</td>
<td class="py-4 px-5 align-top min-w-[200px]">
<div class="flex flex-col gap-1.5">
<div class="flex items-center justify-between text-[10px] font-bold">
<span class="text-emerald-600">1. Pemohon</span>
<span class="text-emerald-600">2. Bendahara</span>
<span class="text-indigo-600">3. Ketua</span>
</div>
<div class="grid grid-cols-3 gap-1 h-1.5 rounded-full overflow-hidden bg-slate-100">
<div class="bg-emerald-500 h-full"></div>
<div class="bg-emerald-500 h-full"></div>
<div class="bg-indigo-600 h-full"></div>
</div>
<span class="text-[11px] text-slate-500">Menunggu Tanda Tangan Ketua Angkatan</span>
</div>
</td>
<td class="py-4 px-5 align-top text-right">
<button class="bg-indigo-600 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold hover:bg-indigo-700 transition-colors shadow-xs" onclick="document.getElementById('modal-pengajuan-baru').classList.remove('hidden')" type="button">
                    Review &amp; Edit
                  </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
</div>
<!-- ========================================================================= -->
<!-- MODAL: AJUKAN PROPOSAL PENGADAAN BARU (FR-04) - THEME: DROPX ADMIN LIGHT -->
<!-- ========================================================================= -->
<div aria-modal="true" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto" id="modal-pengajuan-baru" role="dialog">
<!-- Backdrop Blur with Soft Semi-Transparent Dark Overlay -->
<div class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onclick="document.getElementById('modal-pengajuan-baru').classList.add('hidden')"></div>
<!-- Modal Dialog Main Card (DropX Admin Clean White Aesthetic) -->
<div class="relative bg-white rounded-2xl max-w-3xl w-full my-auto shadow-2xl z-10 flex flex-col overflow-hidden border border-slate-100">
<!-- Modal Header (DropX Clean Header with Indigo Accent) -->
<div class="px-6 py-5 bg-white border-b border-slate-100 flex items-start justify-between gap-4">
<div class="flex flex-col gap-1">
<div class="flex items-center gap-2">
<span class="text-[11px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
              FR-04 • IT GOVERNANCE COMPLIANT
            </span>
<span class="text-slate-300">•</span>
<span class="font-mono text-xs text-emerald-600 font-semibold flex items-center gap-1.5">
<span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              SOP Persetujuan Bertingkat
            </span>
</div>
<h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            Formulir Pengajuan Proposal Pengadaan &amp; Belanja
          </h2>
<p class="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
            Pastikan kelengkapan berkas &amp; rincian estimasi biaya. Proposal &gt; Rp 500.000 wajib melalui otorisasi berjenjang (Bendahara &amp; Ketua Angkatan).
          </p>
</div>
<!-- Close Button -->
<button aria-label="Tutup Modal" class="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-all shrink-0" onclick="document.getElementById('modal-pengajuan-baru').classList.add('hidden')" type="button">
<span class="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
<!-- Modal Body Content -->
<div class="p-6 space-y-6 max-h-[74vh] overflow-y-auto bg-white">
<!-- SECTION 1: Informasi Pemohon & Divisi -->
<div class="bg-slate-50/70 p-5 rounded-xl border border-slate-200/80 space-y-4">
<div class="flex items-center gap-2 pb-2.5 border-b border-slate-200/80">
<span class="material-symbols-outlined text-indigo-600 text-[20px]">badge</span>
<h3 class="text-sm font-bold text-slate-800">1. Informasi Pemohon &amp; Divisi</h3>
</div>
<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
<!-- Nama Pemohon -->
<div>
<label class="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nama Pemohon</label>
<div class="flex items-center gap-2.5 bg-white border border-slate-200 rounded-xl px-3.5 py-2 shadow-xs">
<span class="material-symbols-outlined text-slate-400 text-[18px]">person</span>
<div class="flex flex-col min-w-0">
<span class="text-xs text-slate-900 font-bold truncate">Rayhan Pratama</span>
<span class="font-mono text-[10px] text-slate-500">NIM: 20241230045</span>
</div>
</div>
</div>
<!-- Divisi / Komisi -->
<div>
<label class="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Divisi / Komisi</label>
<div class="relative">
<select class="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 pr-8 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 appearance-none cursor-pointer shadow-xs">
<option selected="">Divisi Perlengkapan &amp; Logistik</option>
<option>Divisi Acara &amp; Pelaksanaan</option>
<option>Komisi Akademik &amp; Riset</option>
<option>Humas &amp; Publikasi</option>
</select>
<span class="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-slate-400 text-[18px]">unfold_more</span>
</div>
</div>
<!-- Kategori Belanja -->
<div>
<label class="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Kategori Belanja</label>
<div class="relative">
<select class="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 pr-8 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 appearance-none cursor-pointer shadow-xs">
<option selected="">Aset Tetap Angkatan</option>
<option>Bahan Habis Pakai</option>
<option>Konsumsi &amp; Acara</option>
<option>Infrastruktur TI / Cloud</option>
</select>
<span class="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-slate-400 text-[18px]">unfold_more</span>
</div>
</div>
</div>
</div>
<!-- SECTION 2: Detail Kebutuhan & Spesifikasi -->
<div class="bg-slate-50/70 p-5 rounded-xl border border-slate-200/80 space-y-4">
<div class="flex items-center gap-2 pb-2.5 border-b border-slate-200/80">
<span class="material-symbols-outlined text-indigo-600 text-[20px]">description</span>
<h3 class="text-sm font-bold text-slate-800">2. Detail Kebutuhan &amp; Spesifikasi</h3>
</div>
<div class="space-y-3.5 pt-1">
<div>
<label class="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Judul / Nama Pengadaan</label>
<input class="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-xs" type="text" value="Pengadaan Proyektor Portable EPSON EB-E01 untuk Presentasi Manpro"/>
</div>
<div>
<label class="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Deskripsi Urgensi &amp; Keperluan Pengadaan</label>
<textarea class="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-xs leading-relaxed" rows="3">Dibutuhkan untuk penunjang presentasi proyek gabungan kelas A &amp; B di Auditorium Lab TI serta inventaris angkatan jangka panjang untuk mata kuliah Manajemen Proyek SI.</textarea>
</div>
</div>
</div>
<!-- SECTION 3: Rincian Anggaran & Aturan Kebijakan (Governance Gate) -->
<div class="bg-slate-50/70 p-5 rounded-xl border border-slate-200/80 space-y-4">
<div class="flex items-center justify-between pb-2.5 border-b border-slate-200/80">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-indigo-600 text-[20px]">payments</span>
<h3 class="text-sm font-bold text-slate-800">3. Rincian Anggaran &amp; Aturan Kebijakan (Governance Gate)</h3>
</div>
<span class="font-mono text-xs font-bold text-emerald-700 bg-emerald-100/70 border border-emerald-200 px-2.5 py-0.5 rounded-full">
              Kas Sehat 84.2%
            </span>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
<!-- Estimasi Total Nominal -->
<div>
<label class="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Estimasi Total Nominal (IDR)</label>
<div class="relative">
<span class="absolute left-3.5 top-2.5 font-mono text-xs font-bold text-slate-400">Rp</span>
<input class="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-3.5 py-2 font-mono text-lg font-extrabold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-xs" type="text" value="1.850.000"/>
</div>
</div>
<!-- Pos Anggaran / Beban Kas -->
<div>
<label class="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Pos Anggaran / Beban Kas</label>
<div class="relative">
<select class="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 pr-8 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 appearance-none cursor-pointer shadow-xs">
<option selected="">Pos Aset Tetap &amp; TI (Sisa: Rp 28.450.000)</option>
<option>Pos Operasional Acara (Sisa: Rp 8.200.000)</option>
<option>Pos Akademik &amp; Ujian (Sisa: Rp 4.500.000)</option>
<option>Pos Cadangan Kas Kecil (Sisa: Rp 1.500.000)</option>
</select>
<span class="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-slate-400 text-[18px]">unfold_more</span>
</div>
</div>
</div>
<!-- Amber Warning Box: Gate Level 2 Policy -->
<div class="bg-amber-50 border border-amber-200/80 rounded-xl p-3.5 flex items-start gap-3">
<div class="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center shrink-0 text-amber-700">
<span class="material-symbols-outlined text-[18px]">gavel</span>
</div>
<div class="flex flex-col gap-0.5">
<div class="flex items-center gap-2">
<span class="text-xs font-bold uppercase tracking-wide text-amber-900">
                  Gate Level 2 Aktif: Sign-Off Digital Ketua Angkatan Diperlukan
                </span>
<span class="font-mono text-[10px] font-bold bg-amber-200/60 text-amber-800 px-1.5 py-0.2 rounded">&gt; Rp 500.000</span>
</div>
<p class="text-xs text-amber-800/90 leading-relaxed">
                Nominal usulan sebesar <strong>Rp 1.850.000</strong> melampaui batas otorisasi tunggal. Pengajuan akan melewati: <em>Review Saldo Bendahara → Verifikasi Fisik Dokumen → Tanda Tangan Digital Ketua Angkatan</em>.
              </p>
</div>
</div>
</div>
<!-- SECTION 4: Lampiran Berkas & Bukti Dukung (RAB / Quotation) -->
<div class="bg-slate-50/70 p-5 rounded-xl border border-slate-200/80 space-y-4">
<div class="flex items-center justify-between pb-2.5 border-b border-slate-200/80">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-indigo-600 text-[20px]">attachment</span>
<h3 class="text-sm font-bold text-slate-800">4. Lampiran Berkas &amp; Bukti Dukung (RAB / Quotation)</h3>
</div>
<span class="font-mono text-[11px] text-slate-400 font-medium">Format: PDF / ZIP (Maks 5 MB)</span>
</div>
<!-- Drag and Drop Area -->
<div class="border-2 border-dashed border-indigo-200 hover:border-indigo-500 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all bg-white hover:bg-indigo-50/30 group">
<div class="w-12 h-12 rounded-xl bg-indigo-50 group-hover:bg-indigo-100/70 flex items-center justify-center text-indigo-600 mb-2 transition-colors">
<span class="material-symbols-outlined text-[24px]">cloud_upload</span>
</div>
<span class="text-xs font-bold text-slate-800">Tarik file RAB atau Penawaran Vendor ke sini</span>
<span class="font-mono text-[11px] text-slate-400 mt-0.5">Atau klik untuk menjelajah dokumen perangkat lokal</span>
</div>
<!-- Uploaded Items List -->
<div class="space-y-2 pt-1">
<div class="p-2.5 px-3.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between shadow-xs">
<div class="flex items-center gap-3 min-w-0">
<div class="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-500 shrink-0">
<span class="material-symbols-outlined text-[18px]">picture_as_pdf</span>
</div>
<div class="flex flex-col min-w-0">
<span class="text-xs font-bold text-slate-900 truncate">RAB_Pengadaan_Proyektor_v1.pdf</span>
<span class="font-mono text-[10px] text-slate-400">245 KB · Terlampir</span>
</div>
</div>
<div class="flex items-center gap-3">
<span class="font-mono text-[11px] text-emerald-600 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full">
<span class="material-symbols-outlined text-[14px]">verified</span>Valid
                </span>
<button aria-label="Hapus Lampiran" class="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" type="button">
<span class="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</div>
<div class="p-2.5 px-3.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between shadow-xs">
<div class="flex items-center gap-3 min-w-0">
<div class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
<span class="material-symbols-outlined text-[18px]">description</span>
</div>
<div class="flex flex-col min-w-0">
<span class="text-xs font-bold text-slate-900 truncate">Quotation_Vendor_Bhinneka.pdf</span>
<span class="font-mono text-[10px] text-slate-400">1.2 MB · PT Bhinneka Mentari</span>
</div>
</div>
<div class="flex items-center gap-3">
<span class="font-mono text-[11px] text-emerald-600 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full">
<span class="material-symbols-outlined text-[14px]">verified</span>Valid
                </span>
<button aria-label="Hapus Lampiran" class="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" type="button">
<span class="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</div>
</div>
<div class="pt-1 flex items-center gap-2 text-slate-400 font-mono text-[11px]">
<span class="material-symbols-outlined text-[15px] text-indigo-500">lock</span>
<span>Hash SHA-256 dibuat otomatis saat dokumen berhasil diunggah ke sistem.</span>
</div>
</div>
</div>
<!-- Modal Footer (DropX Buttons Layout) -->
<div class="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
<div class="flex items-center gap-2 text-slate-500 font-mono text-[11px]">
<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span>Status Draft tersimpan otomatis • Enkripsi SHA-256</span>
</div>
<div class="flex items-center gap-2.5 w-full sm:w-auto justify-end">
<!-- Batal / Tutup Button (Abu-abu lembut) -->
<button class="px-4 py-2.5 rounded-xl bg-slate-200/70 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all" onclick="document.getElementById('modal-pengajuan-baru').classList.add('hidden')" type="button">
            Batal / Tutup
          </button>
<!-- Simpan Sebagai Draft (Putih border halus) -->
<button class="px-4 py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all shadow-xs" onclick="alert('Draft proposal FR-04 berhasil disimpan.'); document.getElementById('modal-pengajuan-baru').classList.add('hidden');" type="button">
            Simpan Sebagai Draft
          </button>
<!-- Kirim Pengajuan Proposal (Submit FR-04) - Primary Indigo DropX -->
<button class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md shadow-indigo-200" onclick="alert('Proposal FR-04 berhasil diajukan! Notifikasi dikirimkan ke Bendahara &amp; Ketua Angkatan.'); document.getElementById('modal-pengajuan-baru').classList.add('hidden');" type="button">
<span class="material-symbols-outlined text-[18px]">send</span>
<span>Kirim Pengajuan Proposal (Submit FR-04)</span>
</button>
</div>
</div>
</div>
</div>
</body></html>
