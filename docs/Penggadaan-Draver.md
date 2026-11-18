<!DOCTYPE html>

<html lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<meta content="web_dashboard" name="shell-type"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;family=JetBrains+Mono:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<style>
    @layer base {
      html, body { margin:0; padding:0; font-family: 'Plus Jakarta Sans', sans-serif; }
      body { overscroll-behavior: none; }
      main > :first-child { margin-top: 0 !important; }
      main > :last-child { margin-bottom: 0 !important; }
    }
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
    ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
  </style>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "error": "#ba1a1a",
            "on-tertiary": "#ffffff",
            "outline-variant": "#c7c4d7",
            "on-background": "#0b1c30",
            "surface": "#f8f9ff",
            "outline": "#767586",
            "on-secondary-container": "#00714d",
            "on-primary": "#ffffff",
            "on-secondary": "#ffffff",
            "on-error-container": "#93000a",
            "secondary": "#006c49",
            "surface-container-highest": "#d3e4fe",
            "surface-tint": "#494bd6",
            "surface-container-low": "#eff4ff",
            "inverse-on-surface": "#eaf1ff",
            "primary": "#4648d4",
            "surface-variant": "#d3e4fe",
            "surface-bright": "#f8f9ff",
            "surface-container-lowest": "#ffffff",
            "on-tertiary-container": "#f9fdff",
            "error-container": "#ffdad6",
            "on-secondary-fixed": "#002113",
            "surface-container": "#e5eeff",
            "on-surface": "#0b1c30",
            "tertiary": "#006577",
            "on-primary-fixed": "#07006c",
            "tertiary-fixed": "#acedff",
            "on-error": "#ffffff",
            "primary-fixed-dim": "#c0c1ff",
            "on-primary-fixed-variant": "#2f2ebe",
            "inverse-primary": "#c0c1ff",
            "tertiary-container": "#008096",
            "on-surface-variant": "#464554",
            "inverse-surface": "#213145",
            "background": "#f8f9ff",
            "primary-container": "#6063ee",
            "tertiary-fixed-dim": "#4cd7f6",
            "on-tertiary-fixed-variant": "#004e5c",
            "primary-fixed": "#e1e0ff",
            "secondary-container": "#6cf8bb",
            "on-primary-container": "#fffbff",
            "secondary-fixed-dim": "#4edea3",
            "on-tertiary-fixed": "#001f26",
            "secondary-fixed": "#6ffbbe",
            "on-secondary-fixed-variant": "#005236",
            "surface-dim": "#cbdbf5",
            "surface-container-high": "#dce9ff"
          },
          fontFamily: {
            sans: ["Plus Jakarta Sans", "sans-serif"],
            mono: ["JetBrains Mono", "monospace"]
          }
        }
      }
    }
  </script>
</head>
<body class="bg-[#f8f9ff] text-[#0b1c30] min-h-screen antialiased selection:bg-[#4648d4] selection:text-white">
<!-- DropX Light Sidebar -->
<aside class="fixed left-0 top-0 h-full w-64 bg-white z-30 flex flex-col justify-between border-r border-[#e2e8f0] shadow-sm">
<div class="flex flex-col">
<!-- App Header / Logo -->
<div class="h-16 px-5 flex items-center gap-3 border-b border-[#f1f5f9]">
<div class="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4648d4] to-[#6063ee] flex items-center justify-center text-white shadow-md shadow-[#4648d4]/20">
<span class="material-symbols-outlined text-[20px]">layers</span>
</div>
<div class="flex flex-col min-w-0">
<span class="font-bold text-[15px] text-[#0f172a] tracking-tight leading-tight flex items-center gap-1.5">
            DropX Admin
            <span class="text-[10px] font-semibold bg-[#4648d4]/10 text-[#4648d4] px-1.5 py-0.2 rounded">ERP</span>
</span>
<span class="text-[11px] font-medium text-[#64748b] truncate">SI-KASANG Angkatan</span>
</div>
</div>
<!-- Role Selector -->
<div class="p-4 border-b border-[#f1f5f9] bg-[#f8fafc]">
<div class="flex items-center justify-between mb-1.5">
<span class="text-[10px] font-bold text-[#64748b] uppercase tracking-wider">Akses Otoritas</span>
<span class="inline-flex items-center gap-1 text-[11px] text-[#059669] font-medium">
<span class="h-2 w-2 rounded-full bg-[#10b981] ring-2 ring-[#10b981]/20"></span>
            Aktif
          </span>
</div>
<div class="relative">
<select aria-label="Pilih Peran Sistem" class="w-full bg-white border border-[#cbd5e1] rounded-lg text-[#0f172a] text-[13px] font-medium px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#4648d4]/30 focus:border-[#4648d4] appearance-none cursor-pointer pr-8 shadow-sm">
<option selected="">Bendahara / System Admin</option>
<option>System Administrator</option>
<option>Bendahara</option>
<option>Ketua Angkatan</option>
<option>Mahasiswa</option>
</select>
<span class="material-symbols-outlined absolute right-2.5 top-2 pointer-events-none text-[#64748b] text-[18px]">unfold_more</span>
</div>
</div>
<!-- Navigation -->
<div class="px-3 pt-4">
<span class="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8] px-3 mb-2 block">Modul Operasional</span>
<nav class="flex flex-col gap-1">
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#0f172a] font-medium text-[13px] transition-colors" href="#">
<span class="material-symbols-outlined text-[19px]">pie_chart</span>
<span>Dashboard &amp; Ikhtisar</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#0f172a] font-medium text-[13px] transition-colors" href="#">
<span class="material-symbols-outlined text-[19px]">account_balance_wallet</span>
<span>Kas &amp; Iuran Mahasiswa</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#4648d4]/10 text-[#4648d4] font-semibold text-[13px] transition-colors shadow-sm" href="#">
<span class="material-symbols-outlined text-[19px]">fact_check</span>
<span>Pengadaan &amp; Approval</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#0f172a] font-medium text-[13px] transition-colors" href="#">
<span class="material-symbols-outlined text-[19px]">verified_user</span>
<span>Aset &amp; Log Audit TI</span>
</a>
</nav>
</div>
</div>
<!-- Sidebar Footer -->
<div class="p-4 border-t border-[#f1f5f9] bg-white flex flex-col gap-2.5">
<div class="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[#f8fafc] border border-[#e2e8f0]">
<div class="flex items-center gap-2">
<span class="relative flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span class="font-mono text-[11px] font-medium text-[#475569]">Coolify VPS</span>
</div>
<span class="font-mono text-[11px] font-semibold text-emerald-600">142ms</span>
</div>
<div class="px-1">
<p class="text-[10px] font-semibold text-[#94a3b8] uppercase tracking-wide">Proyek Manpro SI</p>
<p class="font-mono text-[12px] font-medium text-[#0f172a] truncate">Mohammad Husi</p>
<p class="font-mono text-[11px] text-[#64748b]">NIM: 20241230012</p>
</div>
</div>
</aside>
<!-- Main Content Wrapper -->
<div class="pl-64">
<!-- DropX Light Top Header -->
<header class="fixed top-0 left-64 right-0 h-16 bg-white/95 backdrop-blur-md z-20 border-b border-[#e2e8f0] flex items-center justify-between px-8 shadow-sm">
<div class="flex items-center gap-4 flex-1 max-w-xl">
<div class="flex items-center gap-1.5 text-[#64748b] text-[13px]">
<span class="material-symbols-outlined text-[17px]">domain</span>
<span>SI-KASANG</span>
<span class="material-symbols-outlined text-[14px]">chevron_right</span>
<span class="text-[#4648d4] font-semibold">Pengadaan &amp; Anggaran</span>
</div>
<div class="relative flex-1 hidden xl:block">
<span class="material-symbols-outlined absolute left-3 top-2.5 text-[#94a3b8] text-[18px]">search</span>
<input class="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-lg pl-9 pr-14 py-1.5 text-[13px] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#4648d4]/20 focus:border-[#4648d4] transition-all" placeholder="Cari tiket, NIM, barang..." type="text"/>
<kbd class="absolute right-2.5 top-2 text-[10px] font-mono text-[#94a3b8] bg-white border border-[#cbd5e1] px-1.5 py-0.5 rounded shadow-xs">Ctrl K</kbd>
</div>
</div>
<div class="flex items-center gap-4">
<div class="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff4ff] border border-[#d3e4fe] text-[#4648d4]">
<span class="material-symbols-outlined text-[16px]">calendar_today</span>
<span class="text-[11px] font-bold uppercase tracking-wider">Semester Ganjil 2024/2025</span>
</div>
<button aria-label="Notifikasi" class="relative p-2 text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9] rounded-lg transition-colors" type="button">
<span class="material-symbols-outlined text-[21px]">notifications</span>
<span class="absolute top-1.5 right-1.5 h-4 w-4 bg-[#ef4444] border-2 border-white text-white text-[9px] font-mono flex items-center justify-center rounded-full font-bold">2</span>
</button>
<div class="h-6 w-px bg-[#e2e8f0]"></div>
<div class="flex items-center gap-3">
<div class="w-9 h-9 rounded-full bg-[#4648d4] text-white flex items-center justify-center font-bold text-xs shadow-sm ring-2 ring-[#4648d4]/20">
            MH
          </div>
<div class="flex flex-col text-left">
<div class="flex items-center gap-1.5">
<span class="text-[13px] font-semibold text-[#0f172a] leading-tight">Mohammad Husi</span>
<span class="text-[10px] font-mono text-[#64748b]">(20241230012)</span>
</div>
<span class="text-[11px] font-medium text-[#4648d4] leading-tight">Lead Admin &amp; Bendahara</span>
</div>
</div>
</div>
</header>
<!-- Main Background (Light DropX Theme) -->
<main class="relative pt-20 pb-16 w-full px-8 min-h-screen bg-[#f8f9ff]">
<div class="flex flex-col w-full relative">
<!-- Page Header -->
<div class="flex items-center justify-between mb-6">
<div class="flex flex-col gap-1">
<div class="flex items-center gap-2">
<span class="text-[11px] font-bold text-[#4648d4] bg-[#eff4ff] border border-[#d3e4fe] px-2 py-0.5 rounded uppercase tracking-wider">
                Governance FR-05/FR-08
              </span>
<span class="font-mono text-[11px] text-[#64748b]">• Segregation of Duties Enforced</span>
</div>
<h1 class="text-2xl font-bold text-[#0f172a] tracking-tight">Pengadaan &amp; Workflow Persetujuan Anggaran</h1>
<p class="text-[13px] text-[#64748b]">Otorisasi bertingkat belanja kas angkatan, validasi ketersediaan plafon, dan penerbitan nomor register inventaris otomatis.</p>
</div>
<div class="flex items-center gap-2.5">
<button class="flex items-center gap-2 bg-white border border-[#e2e8f0] text-[#334155] hover:bg-[#f8fafc] text-[13px] font-semibold px-4 py-2 rounded-xl transition-all shadow-xs" type="button">
<span class="material-symbols-outlined text-[18px]">tune</span>
<span>Filter Lanjutan</span>
</button>
<button class="flex items-center gap-2 bg-[#4648d4] hover:bg-[#3b3dbf] text-white text-[13px] font-semibold px-4 py-2 rounded-xl shadow-md shadow-[#4648d4]/20 transition-all" type="button">
<span class="material-symbols-outlined text-[18px]">add_circle</span>
<span>Buat Usulan Pengadaan</span>
</button>
</div>
</div>
<!-- 4 Stat Cards in DropX Style -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
<div class="bg-gradient-to-br from-[#4648d4] to-[#6063ee] p-5 rounded-2xl text-white shadow-lg shadow-[#4648d4]/15 flex flex-col justify-between">
<div class="flex items-center justify-between mb-3">
<span class="text-[12px] font-semibold uppercase tracking-wider text-white/80">Plafon Belanja Tersedia</span>
<div class="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center backdrop-blur-xs">
<span class="material-symbols-outlined text-[18px] text-white">account_balance</span>
</div>
</div>
<div class="text-2xl font-extrabold tracking-tight mb-2">Rp 28.450.000</div>
<div class="flex items-center gap-1.5 text-xs text-white/90">
<span class="material-symbols-outlined text-[15px]">arrow_upward</span>
<span class="font-mono font-medium">87.5% Alokasi Aman</span>
</div>
</div>
<div class="bg-gradient-to-br from-[#059669] to-[#10b981] p-5 rounded-2xl text-white shadow-lg shadow-[#059669]/15 flex flex-col justify-between">
<div class="flex items-center justify-between mb-3">
<span class="text-[12px] font-semibold uppercase tracking-wider text-white/80">Disetujui Bulan Ini</span>
<div class="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center backdrop-blur-xs">
<span class="material-symbols-outlined text-[18px] text-white">task_alt</span>
</div>
</div>
<div class="text-2xl font-extrabold tracking-tight mb-2">Rp 6.120.000</div>
<div class="flex items-center gap-1.5 text-xs text-white/90">
<span class="material-symbols-outlined text-[15px]">check_circle</span>
<span class="font-mono font-medium">8 Tiket Selesai Otorisasi</span>
</div>
</div>
<div class="bg-gradient-to-br from-[#0284c7] to-[#0ea5e9] p-5 rounded-2xl text-white shadow-lg shadow-[#0284c7]/15 flex flex-col justify-between">
<div class="flex items-center justify-between mb-3">
<span class="text-[12px] font-semibold uppercase tracking-wider text-white/80">Menunggu Otorisasi</span>
<div class="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center backdrop-blur-xs">
<span class="material-symbols-outlined text-[18px] text-white">pending_actions</span>
</div>
</div>
<div class="text-2xl font-extrabold tracking-tight mb-2">3 Berkas</div>
<div class="flex items-center gap-1.5 text-xs text-white/90">
<span class="material-symbols-outlined text-[15px]">hourglass_top</span>
<span class="font-mono font-medium">Total Rp 3.420.000</span>
</div>
</div>
<div class="bg-gradient-to-br from-[#ea580c] to-[#f97316] p-5 rounded-2xl text-white shadow-lg shadow-[#ea580c]/15 flex flex-col justify-between">
<div class="flex items-center justify-between mb-3">
<span class="text-[12px] font-semibold uppercase tracking-wider text-white/80">Integritas Audit Log</span>
<div class="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center backdrop-blur-xs">
<span class="material-symbols-outlined text-[18px] text-white">verified</span>
</div>
</div>
<div class="text-2xl font-extrabold tracking-tight mb-2">100% Synced</div>
<div class="flex items-center gap-1.5 text-xs text-white/90">
<span class="material-symbols-outlined text-[15px]">lock</span>
<span class="font-mono font-medium">SHA-256 Hash Valid</span>
</div>
</div>
</div>
<!-- Table Card in DropX Light Style -->
<div class="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm overflow-hidden">
<div class="px-6 py-4 bg-white border-b border-[#f1f5f9] flex items-center justify-between">
<div class="flex items-center gap-3">
<h2 class="font-bold text-[15px] text-[#0f172a]">Daftar Tiket Pengadaan Angkatan</h2>
<span class="text-[11px] font-semibold text-[#4648d4] bg-[#eff4ff] px-2.5 py-0.5 rounded-full">14 Total</span>
</div>
<div class="flex items-center gap-1.5">
<button class="px-3 py-1.5 text-white bg-[#4648d4] rounded-lg text-xs font-semibold shadow-xs" type="button">Semua Status</button>
<button class="px-3 py-1.5 text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9] rounded-lg text-xs font-medium transition-colors" type="button">Butuh Tindakan (3)</button>
<button class="px-3 py-1.5 text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9] rounded-lg text-xs font-medium transition-colors" type="button">Teregistrasi Aset (8)</button>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left">
<thead class="bg-[#f8fafc] text-[#64748b] text-[11px] font-semibold uppercase tracking-wider border-b border-[#e2e8f0]">
<tr>
<th class="px-6 py-3.5">ID Tiket</th>
<th class="px-6 py-3.5">Rincian Pengadaan</th>
<th class="px-6 py-3.5">Pemohon</th>
<th class="px-6 py-3.5">Pos Anggaran</th>
<th class="px-6 py-3.5 text-right">Nominal</th>
<th class="px-6 py-3.5">Status Persetujuan</th>
<th class="px-6 py-3.5 text-center">Tindakan</th>
</tr>
</thead>
<tbody class="divide-y divide-[#f1f5f9] text-[13px] text-[#334155]">
<!-- Active highlighted row -->
<tr class="bg-[#eff4ff]/60 border-l-4 border-l-[#4648d4]">
<td class="px-6 py-4 font-mono text-[#4648d4] font-bold flex items-center gap-2">
<span class="h-2 w-2 rounded-full bg-[#4648d4] animate-ping"></span>
                    PGD-2025-008
                  </td>
<td class="px-6 py-4">
<div class="flex flex-col">
<span class="font-semibold text-[#0f172a]">Pengadaan Proyektor Portable EPSON EB-E01 untuk Presentasi Manpro</span>
<span class="text-xs text-[#64748b]">Kategori: Aset Tetap Angkatan • Batch 1 - 2025</span>
</div>
</td>
<td class="px-6 py-4">
<div class="flex flex-col">
<span class="font-medium text-[#0f172a]">Rayhan Pratama</span>
<span class="text-xs text-[#64748b]">Div. Perlengkapan</span>
</div>
</td>
<td class="px-6 py-4 font-mono text-xs text-[#475569]">Aset Tetap &amp; TI</td>
<td class="px-6 py-4 font-mono text-[#0f172a] text-right font-bold">Rp 1.850.000</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
<span class="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                      Level 2: Sign-Off Ketua
                    </span>
</td>
<td class="px-6 py-4 text-center">
<button class="text-xs font-semibold text-[#4648d4] hover:underline" id="reopen-drawer-btn" type="button">Buka Detail</button>
</td>
</tr>
<tr class="hover:bg-[#f8fafc] transition-colors">
<td class="px-6 py-4 font-mono text-[#64748b] font-medium">PGD-2025-007</td>
<td class="px-6 py-4">
<div class="flex flex-col">
<span class="font-medium text-[#0f172a]">Kabel HDMI 15M High Speed &amp; Converter USB-C DisplayPort</span>
<span class="text-xs text-[#64748b]">Kategori: Perlengkapan Operasional</span>
</div>
</td>
<td class="px-6 py-4">
<div class="flex flex-col">
<span class="font-medium text-[#0f172a]">Siti Aisyah</span>
<span class="text-xs text-[#64748b]">Div. Acara</span>
</div>
</td>
<td class="px-6 py-4 font-mono text-xs text-[#64748b]">Operasional Kuliah</td>
<td class="px-6 py-4 font-mono text-[#0f172a] text-right">Rp 320.000</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
<span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      Telah Dicairkan (FR-06)
                    </span>
</td>
<td class="px-6 py-4 text-center">
<button class="text-xs text-[#64748b] hover:text-[#0f172a]" type="button">Lihat</button>
</td>
</tr>
<tr class="hover:bg-[#f8fafc] transition-colors">
<td class="px-6 py-4 font-mono text-[#64748b] font-medium">PGD-2025-006</td>
<td class="px-6 py-4">
<div class="flex flex-col">
<span class="font-medium text-[#0f172a]">Perpanjangan Domain &amp; Server Hosting VPS Coolify SI-KASANG</span>
<span class="text-xs text-[#64748b]">Kategori: Infrastruktur TI</span>
</div>
</td>
<td class="px-6 py-4">
<div class="flex flex-col">
<span class="font-medium text-[#0f172a]">Mohammad Husi</span>
<span class="text-xs text-[#64748b]">Dept. Sistem Informasi</span>
</div>
</td>
<td class="px-6 py-4 font-mono text-xs text-[#64748b]">Infrastruktur Server</td>
<td class="px-6 py-4 font-mono text-[#0f172a] text-right">Rp 1.250.000</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
<span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      Tervalidasi &amp; Terarsip
                    </span>
</td>
<td class="px-6 py-4 text-center">
<button class="text-xs text-[#64748b] hover:text-[#0f172a]" type="button">Lihat</button>
</td>
</tr>
<tr class="hover:bg-[#f8fafc] transition-colors">
<td class="px-6 py-4 font-mono text-[#64748b] font-medium">PGD-2025-005</td>
<td class="px-6 py-4">
<div class="flex flex-col">
<span class="font-medium text-[#0f172a]">Konsumsi Workshop Metodologi Agile Scrum Kelas A &amp; B</span>
<span class="text-xs text-[#64748b]">Kategori: Kegiatan Akademik</span>
</div>
</td>
<td class="px-6 py-4">
<div class="flex flex-col">
<span class="font-medium text-[#0f172a]">Dimas Kurniawan</span>
<span class="text-xs text-[#64748b]">Div. Akademik</span>
</div>
</td>
<td class="px-6 py-4 font-mono text-xs text-[#64748b]">Konsumsi &amp; Workshop</td>
<td class="px-6 py-4 font-mono text-[#0f172a] text-right">Rp 850.000</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
<span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      Selesai LPJ
                    </span>
</td>
<td class="px-6 py-4 text-center">
<button class="text-xs text-[#64748b] hover:text-[#0f172a]" type="button">Lihat</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>
<!-- Elegant Backdrop for Drawer -->
<div class="fixed inset-0 bg-[#0f172a]/30 backdrop-blur-xs z-40 transition-opacity" id="drawer-backdrop"></div>
<!-- DropX Modern Light Theme Slide-Over Drawer -->
<aside aria-label="Rincian Tiket Pengadaan" class="fixed top-0 right-0 w-[540px] max-w-full h-full bg-white z-50 shadow-2xl border-l border-[#e2e8f0] flex flex-col overflow-hidden transition-transform duration-300 ease-out" id="proposal-drawer">
<!-- Top Utility Bar (Status + Close) -->
<div class="px-6 py-3.5 bg-[#f8fafc] border-b border-[#e2e8f0] flex items-center justify-between gap-3 shrink-0">
<div class="flex items-center gap-2">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-amber-100/80 text-amber-800 border border-amber-300 shadow-xs">
<span class="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
          LEVEL 2: PENDING SIGN-OFF
        </span>
</div>
<div class="flex items-center gap-2">
<kbd class="font-mono text-[11px] text-[#64748b] bg-white border border-[#cbd5e1] px-2 py-0.5 rounded shadow-xs">Esc</kbd>
<button aria-label="Tutup Rincian" class="w-8 h-8 flex items-center justify-center text-[#64748b] hover:text-[#0f172a] hover:bg-white rounded-lg border border-transparent hover:border-[#e2e8f0] transition-all" id="close-drawer-btn" type="button">
<span class="material-symbols-outlined text-[19px]">close</span>
</button>
</div>
</div>
<!-- Drawer Header Title Section -->
<div class="px-6 pt-5 pb-4 bg-white border-b border-[#f1f5f9] shrink-0">
<div class="flex items-center justify-between mb-2">
<div class="flex items-center gap-2">
<span class="font-mono text-[13px] font-bold text-[#4648d4] bg-[#eff4ff] border border-[#d3e4fe] px-2.5 py-0.5 rounded-lg">
            PGD-2025-008
          </span>
<button class="text-[#94a3b8] hover:text-[#4648d4] p-1 rounded transition-colors" id="copy-ticket-btn" title="Salin ID Tiket" type="button">
<span class="material-symbols-outlined text-[16px]">content_copy</span>
</button>
</div>
<div class="flex items-center gap-1 text-[11px] font-mono text-[#64748b]">
<span class="material-symbols-outlined text-[14px]">schedule</span>
<span>14 Mei 2025 • 09:12 WIB</span>
</div>
</div>
<h2 class="text-lg font-bold text-[#0f172a] leading-snug tracking-tight mb-2.5">
        Pengadaan Proyektor Portable EPSON EB-E01 untuk Presentasi Manpro
      </h2>
<div class="flex flex-wrap items-center gap-2">
<span class="text-[11px] font-semibold text-[#475569] bg-[#f1f5f9] border border-[#e2e8f0] px-2.5 py-0.5 rounded-md uppercase">
          Aset Tetap Angkatan (Batch 1 - 2025)
        </span>
<span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md uppercase">
<span class="material-symbols-outlined text-[13px]">verified</span>
          PLAFON TI LOLOS UJI
        </span>
</div>
</div>
<!-- Scrollable Drawer Body Content -->
<div class="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-5 bg-white">
<!-- Section 1: Ringkasan Finansial Card -->
<section class="bg-gradient-to-br from-[#f8f9ff] to-[#f1f5f9] p-4 rounded-xl border border-[#e2e8f0] flex flex-col gap-3.5 shadow-xs">
<div class="flex items-baseline justify-between">
<div class="flex flex-col">
<span class="text-[10px] font-bold uppercase tracking-wider text-[#64748b]">Total Nominal Usulan</span>
<span class="font-mono text-2xl font-extrabold text-[#4648d4] tracking-tight">Rp 1.850.000</span>
</div>
<div class="flex flex-col items-end">
<span class="text-[10px] font-bold uppercase tracking-wider text-[#64748b]">Beban Anggaran</span>
<span class="font-mono text-[13px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">6.5% Kas Angkatan</span>
</div>
</div>
<div class="bg-white p-3 rounded-lg border border-[#e2e8f0] flex items-center justify-between text-xs">
<div class="flex items-center gap-2">
<div class="w-6 h-6 rounded bg-[#4648d4]/10 text-[#4648d4] flex items-center justify-center">
<span class="material-symbols-outlined text-[15px]">folder_special</span>
</div>
<span class="font-semibold text-[#0f172a]">Pos: Aset Tetap &amp; TI</span>
</div>
<span class="font-mono font-medium text-[#64748b]">Sisa Plafon: <strong class="text-[#0f172a]">Rp 28.450.000</strong></span>
</div>
<!-- SOP FR-05 Notice Box -->
<div class="bg-amber-50/70 border border-amber-200/90 p-3 rounded-lg flex items-start gap-2.5">
<span class="material-symbols-outlined text-amber-600 text-[18px] shrink-0 mt-0.5">policy</span>
<div class="flex flex-col gap-0.5 text-xs">
<span class="font-bold text-amber-800 uppercase tracking-wide text-[11px]">SOP FR-05 Triggered (&gt; Rp 500.000)</span>
<p class="text-[#475569] leading-relaxed">
              Wajib otorisasi digital ganda (<strong class="text-[#0f172a]">Segregation of Duties</strong>). Bendahara terverifikasi ➔ Menunggu Sign-off digital Ketua Angkatan sebelum pencairan kas.
            </p>
</div>
</div>
</section>
<!-- Section 2: Informasi Pemohon & Urgensi -->
<section class="flex flex-col gap-2">
<div class="flex items-center justify-between">
<span class="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">Informasi Pemohon &amp; Justifikasi</span>
<span class="font-mono text-[11px] font-medium text-[#4648d4] bg-[#eff4ff] px-2 py-0.5 rounded">NIM: 20241230045</span>
</div>
<div class="bg-white border border-[#e2e8f0] p-4 rounded-xl flex flex-col gap-3 shadow-xs">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-slate-200 ring-2 ring-[#4648d4]/30 overflow-hidden shrink-0">
<img alt="Rayhan Pratama" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMlviRWVjLBT1V25YyGxaSmkScyqQeA_leCsgreRfqz9HGDLwTCigHGOIbJqZRxZkz8BxwMkbmwbnAtX3cBIcXAv-XVApbTxMfEeCTdY_y5MzUMU6xD3xlD0DA5wTf9j253kdoThoNZJP8N7lSqs-NyVDJQoJpIxA3boGD-ZlmNJOLFQdu55zEx-9g_t1jbR9d_38DvYrgvMGV96LPGslNHGZTbaHHcey9lYAyVPrM"/>
</div>
<div class="flex flex-col">
<span class="font-bold text-[14px] text-[#0f172a]">Rayhan Pratama</span>
<span class="text-xs text-[#64748b]">Divisi Perlengkapan &amp; Logistik Angkatan</span>
</div>
</div>
<div class="bg-[#f8fafc] border border-[#f1f5f9] p-3 rounded-lg">
<span class="text-[10px] font-bold text-[#64748b] uppercase block mb-1">Tujuan &amp; Urgensi Operasional:</span>
<p class="text-xs text-[#334155] leading-relaxed">
              Dibutuhkan untuk penunjang presentasi proyek gabungan kelas A &amp; B di Auditorium Lab TI serta inventaris angkatan jangka panjang untuk mata kuliah Manajemen Proyek SI semester 4 hingga tugas akhir.
            </p>
</div>
</div>
</section>
<!-- Section 3: Multi-Level Approval Stepper on Clean White -->
<section class="flex flex-col gap-2">
<span class="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">Multi-Level Approval Stepper</span>
<div class="bg-white border border-[#e2e8f0] p-4 rounded-xl flex flex-col gap-4 shadow-xs">
<!-- Step 1 (Done) -->
<div class="flex gap-3 items-start relative">
<div class="flex flex-col items-center">
<div class="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shadow-sm ring-4 ring-emerald-50">
<span class="material-symbols-outlined text-[15px]">done</span>
</div>
<div class="w-0.5 h-12 bg-emerald-300 my-1"></div>
</div>
<div class="flex-1 pb-1">
<div class="flex items-center justify-between">
<span class="font-bold text-[13px] text-[#0f172a]">Tahap 1: Pengajuan Usulan</span>
<span class="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Selesai</span>
</div>
<p class="text-xs text-[#64748b] mt-0.5">Dibuat oleh <strong class="text-[#0f172a] font-medium">Rayhan Pratama</strong></p>
<span class="font-mono text-[11px] text-[#94a3b8]">14 Mei 2025 • 09:12 WIB</span>
</div>
</div>
<!-- Step 2 (Done & Verified) -->
<div class="flex gap-3 items-start relative -mt-2">
<div class="flex flex-col items-center">
<div class="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shadow-sm ring-4 ring-emerald-50">
<span class="material-symbols-outlined text-[15px]">verified</span>
</div>
<div class="w-0.5 h-16 bg-emerald-300 my-1"></div>
</div>
<div class="flex-1 pb-1">
<div class="flex items-center justify-between">
<span class="font-bold text-[13px] text-[#0f172a]">Tahap 2: Verifikasi Bendahara</span>
<span class="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Lolos Verifikasi</span>
</div>
<p class="text-xs text-[#64748b] mt-0.5">Divalidasi oleh <strong class="text-[#0f172a] font-medium">Mohammad Husi</strong> (NIM: 20241230012)</p>
<span class="font-mono text-[11px] text-[#94a3b8] block mb-1.5">14 Mei 2025 • 10:24 WIB</span>
<div class="p-2.5 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] text-xs text-[#475569]">
<span class="font-mono text-[11px] font-bold text-[#4648d4] block mb-0.5">Catatan Verifikasi Kas:</span>
                “Saldo kas mencukupi di Pos Aset Tetap, spesifikasi proyektor EPSON EB-E01 sesuai kebutuhan lab TI.”
              </div>
</div>
</div>
<!-- Step 3 (Active) -->
<div class="flex gap-3 items-start relative -mt-2">
<div class="flex flex-col items-center">
<div class="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs ring-4 ring-amber-100 shadow-sm">
<span class="material-symbols-outlined text-[14px]">draw</span>
</div>
<div class="w-0.5 h-12 bg-slate-200 my-1"></div>
</div>
<div class="flex-1 pb-1">
<div class="flex items-center justify-between">
<span class="font-bold text-[13px] text-amber-800">Tahap 3: Otorisasi Ketua Angkatan</span>
<span class="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded animate-pulse">Sedang Aktif</span>
</div>
<p class="text-xs text-[#475569] mt-0.5">Oleh <strong class="text-[#0f172a] font-medium">Ahmad Fadhil</strong> (NIM: 20241230005)</p>
<span class="font-mono text-[11px] text-[#94a3b8]">Menunggu Tanda Tangan Kunci Digital RSA-4096</span>
</div>
</div>
<!-- Step 4 (Pending) -->
<div class="flex gap-3 items-start relative opacity-60 -mt-2">
<div class="flex flex-col items-center">
<div class="w-6 h-6 rounded-full bg-slate-200 text-[#64748b] flex items-center justify-center font-bold text-xs">
                4
              </div>
</div>
<div class="flex-1">
<div class="flex items-center justify-between">
<span class="font-medium text-[13px] text-[#64748b]">Tahap 4: Pencairan Kas &amp; Registrasi Inventaris</span>
<span class="text-xs font-mono text-[#94a3b8]">Mendatang</span>
</div>
<p class="text-xs text-[#94a3b8] mt-0.5">Auto-generate nomor register aset &amp; mutasi buku kas besar (FR-06)</p>
</div>
</div>
</div>
</section>
<!-- Section 4: Lampiran Berkas Pendukung -->
<section class="flex flex-col gap-2">
<div class="flex items-center justify-between">
<span class="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">Lampiran Berkas Pendukung</span>
<span class="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">2 Berkas Tervalidasi</span>
</div>
<div class="flex flex-col gap-2">
<div class="p-3 bg-white border border-[#e2e8f0] rounded-xl flex items-center justify-between hover:border-[#cbd5e1] hover:bg-[#f8fafc] transition-all">
<div class="flex items-center gap-3 min-w-0">
<div class="w-9 h-9 bg-red-50 text-red-600 rounded-lg flex items-center justify-center shrink-0 border border-red-100">
<span class="material-symbols-outlined text-[20px]">picture_as_pdf</span>
</div>
<div class="flex flex-col min-w-0">
<span class="text-xs font-bold text-[#0f172a] truncate">RAB_Proyektor_EPSON_E01.pdf</span>
<div class="flex items-center gap-2">
<span class="font-mono text-[10px] text-[#94a3b8]">1.8 MB</span>
<span class="font-mono text-[9px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.2 rounded">SHA-256 Verified</span>
</div>
</div>
</div>
<div class="flex items-center gap-1 shrink-0">
<button class="p-1.5 text-[#64748b] hover:text-[#4648d4] hover:bg-white rounded-lg transition-colors" title="Lihat Berkas" type="button">
<span class="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button class="p-1.5 text-[#64748b] hover:text-[#4648d4] hover:bg-white rounded-lg transition-colors" title="Unduh Berkas" type="button">
<span class="material-symbols-outlined text-[18px]">download</span>
</button>
</div>
</div>
<div class="p-3 bg-white border border-[#e2e8f0] rounded-xl flex items-center justify-between hover:border-[#cbd5e1] hover:bg-[#f8fafc] transition-all">
<div class="flex items-center gap-3 min-w-0">
<div class="w-9 h-9 bg-red-50 text-red-600 rounded-lg flex items-center justify-center shrink-0 border border-red-100">
<span class="material-symbols-outlined text-[20px]">description</span>
</div>
<div class="flex flex-col min-w-0">
<span class="text-xs font-bold text-[#0f172a] truncate">Penawaran_Vendor_SentraKomputer.pdf</span>
<span class="font-mono text-[10px] text-[#94a3b8]">840 KB • Faktur Proforma</span>
</div>
</div>
<div class="flex items-center gap-1 shrink-0">
<button class="p-1.5 text-[#64748b] hover:text-[#4648d4] hover:bg-white rounded-lg transition-colors" title="Lihat Berkas" type="button">
<span class="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button class="p-1.5 text-[#64748b] hover:text-[#4648d4] hover:bg-white rounded-lg transition-colors" title="Unduh Berkas" type="button">
<span class="material-symbols-outlined text-[18px]">download</span>
</button>
</div>
</div>
</div>
</section>
<!-- Audit Sync Notification -->
<section class="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl flex items-center gap-2.5">
<span class="material-symbols-outlined text-[#4648d4] text-[18px] shrink-0">verified_user</span>
<p class="font-mono text-[11px] text-[#64748b] leading-tight">
          Audit hash: <span class="font-bold text-[#0f172a]">0x9f4a...e71c</span> tersinkronisasi otomatis dengan Modul Aset &amp; Log Audit TI Coolify VPS.
        </p>
</section>
</div>
<!-- Drawer Action Footer (DropX Style) -->
<footer class="p-5 bg-white border-t border-[#e2e8f0] flex flex-col gap-2.5 shrink-0 shadow-lg">
<div class="flex items-center gap-2">
<button class="flex-1 bg-[#4648d4] hover:bg-[#3b3dbf] active:scale-[0.99] text-white font-bold text-[13px] py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-[#4648d4]/20" id="approve-action-btn" type="button">
<span class="material-symbols-outlined text-[18px]">verified_user</span>
<span>Setujui &amp; Tanda Tangan Digital</span>
</button>
<button class="bg-[#f8fafc] hover:bg-[#f1f5f9] text-[#334155] border border-[#e2e8f0] p-2.5 rounded-xl transition-colors" title="Minta Revisi Dokumen" type="button">
<span class="material-symbols-outlined text-[19px]">rate_review</span>
</button>
<button class="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 p-2.5 rounded-xl transition-colors" title="Tolak Usulan" type="button">
<span class="material-symbols-outlined text-[19px]">cancel</span>
</button>
</div>
<div class="flex items-center justify-between text-[#94a3b8] font-mono text-[10px] pt-1">
<span class="flex items-center gap-1">
<span class="material-symbols-outlined text-[13px] text-emerald-600">security</span>
          Immutable Audit Trail Active (FR-08)
        </span>
<span>Otoritas: Ketua / Bendahara</span>
</div>
</footer>
</aside>
<!-- Interactive Script for Drawer Open/Close & Demo Actions -->
<script>
    (function () {
      const drawer = document.getElementById('proposal-drawer');
      const backdrop = document.getElementById('drawer-backdrop');
      const closeBtn = document.getElementById('close-drawer-btn');
      const reopenBtn = document.getElementById('reopen-drawer-btn');
      const copyBtn = document.getElementById('copy-ticket-btn');
      const approveBtn = document.getElementById('approve-action-btn');

      function closeDrawer() {
        if (!drawer || !backdrop) return;
        drawer.style.transform = 'translateX(100%)';
        backdrop.style.opacity = '0';
        backdrop.style.pointerEvents = 'none';
        setTimeout(() => {
          drawer.classList.add('hidden');
          backdrop.classList.add('hidden');
        }, 280);
      }

      function openDrawer() {
        if (!drawer || !backdrop) return;
        drawer.classList.remove('hidden');
        backdrop.classList.remove('hidden');
        requestAnimationFrame(() => {
          drawer.style.transform = 'translateX(0)';
          backdrop.style.opacity = '1';
          backdrop.style.pointerEvents = 'auto';
        });
      }

      if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
      if (backdrop) backdrop.addEventListener('click', closeDrawer);
      if (reopenBtn) reopenBtn.addEventListener('click', openDrawer);

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDrawer();
      });

      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText('PGD-2025-008');
          const original = copyBtn.innerHTML;
          copyBtn.innerHTML = '<span class="material-symbols-outlined text-[16px] text-emerald-600">check</span>';
          setTimeout(() => {
            copyBtn.innerHTML = original;
          }, 1500);
        });
      }

      if (approveBtn) {
        approveBtn.addEventListener('click', () => {
          const original = approveBtn.innerHTML;
          approveBtn.innerHTML = '<span class="material-symbols-outlined animate-spin text-[18px]">sync</span><span>Menyimpan Digital Signature...</span>';
          approveBtn.disabled = true;
          setTimeout(() => {
            approveBtn.innerHTML = '<span class="material-symbols-outlined text-[18px]">done_all</span><span>Tanda Tangan Digital Terverifikasi!</span>';
            approveBtn.classList.remove('bg-[#4648d4]', 'hover:bg-[#3b3dbf]');
            approveBtn.classList.add('bg-emerald-600', 'text-white');
          }, 1200);
        });
      }
    })();
  </script>
</body></html>
