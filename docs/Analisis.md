<!DOCTYPE html>

<html lang="id"><head><meta charset="utf-8"/><meta content="width=device-width, initial-scale=1.0" name="viewport"/><meta content="web_dashboard" name="shell-type"/><link href="https://fonts.googleapis.com" rel="preconnect"/><link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/><style>@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}</style><script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script><script id="tailwind-config">tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        "colors": {
          "error": "#ba1a1a",
          "on-tertiary": "#ffffff",
          "outline-variant": "#e2e8f0",
          "on-background": "#0b1c30",
          "surface": "#f8f9ff",
          "outline": "#64748b",
          "on-secondary-container": "#00714d",
          "on-primary": "#ffffff",
          "on-secondary": "#ffffff",
          "on-error-container": "#93000a",
          "secondary": "#059669",
          "surface-container-highest": "#e2e8f0",
          "surface-tint": "#6354e8",
          "surface-container-low": "#f1f5f9",
          "inverse-on-surface": "#eaf1ff",
          "primary": "#6354e8",
          "surface-variant": "#f8faff",
          "surface-bright": "#f8f9ff",
          "surface-container-lowest": "#ffffff",
          "on-tertiary-container": "#f9fdff",
          "error-container": "#fef2f2",
          "surface-container": "#f8fafc",
          "on-surface": "#0f172a",
          "tertiary": "#0284c7",
          "tertiary-container": "#e0f2fe",
          "on-surface-variant": "#475569",
          "background": "#f8f9ff",
          "primary-container": "#7c69ef",
          "primary-fixed": "#eeecfd"
        },
        "fontFamily": {
          "sans": ["Plus Jakarta Sans", "sans-serif"],
          "display": ["Plus Jakarta Sans", "sans-serif"]
        }
      }
    }
  };</script></head><body class="bg-[#f8f9ff] font-sans text-on-surface antialiased selection:bg-primary-container selection:text-white"><aside class="fixed left-0 top-0 h-full w-[260px] bg-white border-r border-[#e2e8f0] shadow-[0_2px_12px_rgba(0,0,0,0.03)] z-50 flex flex-col justify-between"><div class="flex flex-col"><div class="h-[70px] px-6 flex items-center gap-3 border-b border-[#f1f5f9]"><div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6354e8] to-[#4338ca] flex items-center justify-center text-white shadow-md shadow-indigo-500/20"><span class="material-symbols-outlined text-[22px]">account_balance_wallet</span></div><div class="flex flex-col min-w-0"><span class="font-bold text-[17px] tracking-tight text-slate-900 leading-tight">SI-KASANG ERP</span><span class="text-[11px] font-semibold text-slate-400 tracking-wider uppercase">Tata Kelola TI &amp; Keuangan</span></div></div><div class="p-4 border-b border-[#f1f5f9] bg-slate-50/50"><div class="flex items-center justify-between mb-1.5"><span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Akses Otoritas</span><span class="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600"><span class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span> Aktif</span></div><div class="relative"><select aria-label="Pilih Peran Sistem" class="w-full bg-white border border-slate-200 rounded-lg text-slate-800 text-xs font-semibold px-3 py-2 focus:outline-none focus:border-indigo-600 appearance-none cursor-pointer pr-8 shadow-sm"><option selected="">Bendahara / System Admin</option><option>System Administrator</option><option>Bendahara</option><option>Ketua Angkatan</option><option>Mahasiswa</option></select><span class="material-symbols-outlined absolute right-2.5 top-2.5 pointer-events-none text-slate-400 text-[18px]">unfold_more</span></div></div><div class="px-4 py-3 overflow-y-auto max-h-[calc(100vh-210px)]"><div class="px-2 pt-2 pb-1.5"><span class="text-[11px] font-bold uppercase text-slate-400 tracking-wider">DASHBOARD</span></div><nav class="flex flex-col gap-1"><a class="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#f0edff] text-[#6354e8] font-bold text-sm shadow-sm" href="#"><span class="material-symbols-outlined text-[19px]">grid_view</span><span>Default / Ikhtisar</span></a><a class="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 font-medium text-sm hover:bg-slate-100 hover:text-slate-900 transition-all" href="#"><span class="material-symbols-outlined text-[19px]">query_stats</span><span>Arus Kas &amp; Analisis</span></a><a class="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 font-medium text-sm hover:bg-slate-100 hover:text-slate-900 transition-all" href="#"><span class="material-symbols-outlined text-[19px]">dns</span><span>Server &amp; Tata Kelola</span></a></nav><div class="px-2 pt-5 pb-1.5"><span class="text-[11px] font-bold uppercase text-slate-400 tracking-wider">MODUL OPERASIONAL</span></div><nav class="flex flex-col gap-1"><a class="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 font-medium text-sm hover:bg-slate-100 hover:text-slate-900 transition-all" href="#"><span class="material-symbols-outlined text-[19px]">payments</span><span>Kas &amp; Iuran Mahasiswa</span></a><a class="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 font-medium text-sm hover:bg-slate-100 hover:text-slate-900 transition-all" href="#"><span class="material-symbols-outlined text-[19px]">fact_check</span><span>Pengadaan &amp; Approval</span></a><a class="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 font-medium text-sm hover:bg-slate-100 hover:text-slate-900 transition-all" href="#"><span class="material-symbols-outlined text-[19px]">inventory_2</span><span>Aset TI (Inventaris)</span></a><a class="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 font-medium text-sm hover:bg-slate-100 hover:text-slate-900 transition-all" href="#"><span class="material-symbols-outlined text-[19px]">verified_user</span><span>Aset &amp; Log Audit TI</span></a></nav><div class="px-2 pt-5 pb-1.5"><span class="text-[11px] font-bold uppercase text-slate-400 tracking-wider">SISTEM &amp; LAPORAN</span></div><nav class="flex flex-col gap-1"><a class="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 font-medium text-sm hover:bg-slate-100 hover:text-slate-900 transition-all" href="#"><span class="material-symbols-outlined text-[19px]">description</span><span>Ekspor &amp; Laporan UAT</span></a><a class="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 font-medium text-sm hover:bg-slate-100 hover:text-slate-900 transition-all" href="#"><span class="material-symbols-outlined text-[19px]">database</span><span>VPS &amp; PostgreSQL DB</span></a></nav></div></div><div class="p-3 m-3 rounded-xl bg-slate-50 border border-slate-200/80 shadow-sm"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><span class="relative flex h-2 w-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span><span class="text-xs font-semibold text-slate-700">Coolify VPS</span></div><span class="text-xs font-bold text-emerald-600">142ms</span></div><div class="mt-2 flex items-center justify-between text-slate-500 text-[11px]"><span class="font-medium">Mohammad Husi</span><span class="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold text-[10px]">ONLINE</span></div></div></aside><div class="pl-[260px]"><header class="fixed top-0 left-[260px] right-0 h-[70px] bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] z-40 flex items-center justify-between px-8 shadow-sm"><div class="flex items-center gap-4"><button class="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors" type="button"><span class="material-symbols-outlined text-[20px]">dock_to_right</span></button><div class="relative flex items-center w-80 lg:w-96"><span class="material-symbols-outlined absolute left-3.5 text-slate-400 text-[18px]">search</span><input class="w-full pl-10 pr-16 py-2 bg-slate-100/80 hover:bg-slate-100 rounded-full text-xs text-slate-800 placeholder:text-slate-400 border border-transparent focus:border-indigo-500 focus:bg-white focus:outline-none transition-all" placeholder="Search dashboards, apps, components..." type="text"/><div class="absolute right-3 px-2 py-0.5 rounded bg-white text-slate-400 text-[10px] font-semibold border border-slate-200 select-none shadow-xs">Ctrl K</div></div></div><div class="flex items-center gap-2.5"><div class="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold"><span class="material-symbols-outlined text-[15px] text-amber-600">calendar_today</span><span>Semester Ganjil 2024/2025</span></div><button class="w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors" title="Fullscreen" type="button"><span class="material-symbols-outlined text-[19px]">fullscreen</span></button><button class="w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors" title="Toggle Theme" type="button"><span class="material-symbols-outlined text-[19px]">dark_mode</span></button><button class="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors" title="Notifications" type="button"><span class="material-symbols-outlined text-[20px]">notifications</span><span class="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white"></span></button><div class="h-6 w-px bg-slate-200 mx-1"></div><div class="flex items-center gap-3 pl-1 cursor-pointer"><div class="w-9 h-9 rounded-full bg-[#0284c7] text-white flex items-center justify-center font-bold text-xs ring-2 ring-sky-100">MH</div><div class="flex flex-col text-left"><div class="flex items-center gap-1"><span class="text-xs font-bold text-slate-800 leading-tight">Mohammad Husi</span><span class="material-symbols-outlined text-[14px] text-slate-400">expand_more</span></div><div class="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold"><span class="material-symbols-outlined text-[12px]">verified</span><span>Admin (20241230012)</span></div></div></div></div></header><main class="w-full pt-[70px] px-8 py-7 bg-[#f8f9ff] min-h-screen"><div class="flex flex-col w-full gap-6">
<!-- Context & Welcome Bar -->
<div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
<div class="flex flex-col">
<div class="flex items-center gap-2 mb-1">
<span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-[#6354e8] text-[11px] font-bold uppercase tracking-wider">
<span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            Audit Active • FR-03 Operational
          </span>
<span class="text-xs font-mono font-semibold text-slate-400">/ 2025.Q1-GEN</span>
</div>
<h1 class="text-2xl font-extrabold text-slate-900 tracking-tight">
          Selamat Datang, Mohammad Husi <span class="text-sm font-semibold text-[#6354e8] bg-[#eeecfd] px-2.5 py-0.5 rounded-full ml-1 font-mono">NIM: 20241230012</span>
</h1>
<p class="text-xs sm:text-sm text-slate-500 mt-0.5">
          Ringkasan Eksekutif Keuangan Angkatan, Progres Iuran Mingguan &amp; Pengadaan Terintegrasi. Seluruh pencatatan terkunci dalam sistem ledger desentral berstandar kepatuhan akademik.
        </p>
</div>
<div class="flex items-center gap-2.5 shrink-0 flex-wrap">
<button class="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-xs hover:bg-slate-50 hover:border-slate-300 transition-all" type="button">
<span class="material-symbols-outlined text-[18px] text-slate-500">download</span>
<span>Download Laporan Kas (PDF/Excel)</span>
</button>
<button class="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#6354e8] hover:bg-[#5136d8] text-white text-xs font-bold shadow-md shadow-indigo-500/20 transition-all" type="button">
<span class="material-symbols-outlined text-[18px]">add_circle</span>
<span>+ Catat Transaksi Baru</span>
</button>
</div>
</div>
<!-- 4 Main KPI Gradient Cards (DropX Admin Design) -->
<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
<!-- Card 1: Total Kas Terkumpul (Purple DropX) -->
<div class="relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-[#6754e8] to-[#5136d8] text-white shadow-[0_10px_25px_-5px_rgba(99,84,232,0.35)] flex flex-col justify-between min-h-[140px]">
<div class="flex items-center justify-between">
<span class="text-xs font-semibold text-white/80">Total Kas Terkumpul</span>
<div class="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm text-white">
<span class="material-symbols-outlined text-[19px]">payments</span>
</div>
</div>
<div class="mt-3">
<div class="text-2xl lg:text-[28px] font-extrabold tracking-tight text-white leading-none">Rp 28.450.000</div>
<div class="flex items-center gap-1.5 mt-2.5 text-xs text-white/90">
<span class="font-bold flex items-center gap-0.5">↑ 12.4%</span>
<span class="text-white/70">vs bulan sebelumnya</span>
</div>
</div>
<div class="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/10 pointer-events-none blur-lg"></div>
</div>
<!-- Card 2: Pemasukan Iuran Bulan Ini (Emerald Green DropX) -->
<div class="relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-[#059669] to-[#047857] text-white shadow-[0_10px_25px_-5px_rgba(5,150,105,0.35)] flex flex-col justify-between min-h-[140px]">
<div class="flex items-center justify-between">
<span class="text-xs font-semibold text-white/80">Pemasukan Iuran Bulan Ini</span>
<div class="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm text-white">
<span class="material-symbols-outlined text-[19px]">account_balance_wallet</span>
</div>
</div>
<div class="mt-3">
<div class="text-2xl lg:text-[28px] font-extrabold tracking-tight text-white leading-none">Rp 4.800.000</div>
<div class="flex flex-col gap-1.5 mt-2">
<div class="flex justify-between items-center text-[11px] text-white/90 font-medium">
<span class="text-white/75">Target: Rp 5.500.000</span>
<span class="font-bold">87.2%</span>
</div>
<div class="w-full bg-white/25 rounded-full h-1.5 overflow-hidden">
<div class="bg-white h-1.5 rounded-full" style="width: 87.2%"></div>
</div>
</div>
</div>
<div class="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/10 pointer-events-none blur-lg"></div>
</div>
<!-- Card 3: Pengeluaran Disetujui (Cyan Ocean DropX) -->
<div class="relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-[#0284c7] to-[#0369a1] text-white shadow-[0_10px_25px_-5px_rgba(2,132,199,0.35)] flex flex-col justify-between min-h-[140px]">
<div class="flex items-center justify-between">
<span class="text-xs font-semibold text-white/80">Pengeluaran Disetujui</span>
<div class="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm text-white">
<span class="material-symbols-outlined text-[19px]">shopping_cart_checkout</span>
</div>
</div>
<div class="mt-3">
<div class="text-2xl lg:text-[28px] font-extrabold tracking-tight text-white leading-none">Rp 3.120.000</div>
<div class="flex items-center gap-2 mt-2.5 text-xs text-white/90">
<span class="inline-flex items-center gap-1 font-bold bg-white/20 px-2 py-0.5 rounded-md">
<span class="material-symbols-outlined text-[13px]">task_alt</span>
            5 Disetujui
          </span>
<span class="text-white/75 font-medium">2 Pending</span>
</div>
</div>
<div class="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/10 pointer-events-none blur-lg"></div>
</div>
<!-- Card 4: Kepatuhan Iuran Mahasiswa (Vibrant Coral Orange DropX) -->
<div class="relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-[#ea580c] to-[#c2410c] text-white shadow-[0_10px_25px_-5px_rgba(234,88,12,0.35)] flex flex-col justify-between min-h-[140px]">
<div class="flex items-center justify-between">
<span class="text-xs font-semibold text-white/80">Kepatuhan Iuran Mahasiswa</span>
<div class="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm text-white">
<span class="material-symbols-outlined text-[19px]">verified</span>
</div>
</div>
<div class="mt-3">
<div class="text-2xl lg:text-[28px] font-extrabold tracking-tight text-white leading-none">92.5%</div>
<div class="flex items-center justify-between text-xs text-white/90 mt-2.5">
<span class="font-bold flex items-center gap-1"><span class="h-1.5 w-1.5 rounded-full bg-white"></span> 111 Lunas</span>
<span class="text-white/80 flex items-center gap-1"><span class="h-1.5 w-1.5 rounded-full bg-red-300"></span> 9 Menunggak</span>
<span class="text-white/60 font-medium">Total 120</span>
</div>
</div>
<div class="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/10 pointer-events-none blur-lg"></div>
</div>
</div>
<!-- Quick Navigation Grid (DropX Clean White Badges) -->
<div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
<a class="bg-white rounded-xl p-3.5 flex flex-col items-center text-center border border-slate-200 shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-indigo-200 hover:-translate-y-0.5 transition-all group" href="#">
<div class="w-10 h-10 rounded-xl bg-purple-50 text-[#6354e8] group-hover:bg-[#6354e8] group-hover:text-white flex items-center justify-center mb-2 transition-all">
<span class="material-symbols-outlined text-[20px]">payments</span>
</div>
<span class="text-xs font-bold text-slate-800">Iuran Kas</span>
<span class="text-[11px] text-slate-400 truncate w-full mt-0.5">Buku besar &amp; rekon</span>
</a>
<a class="bg-white rounded-xl p-3.5 flex flex-col items-center text-center border border-slate-200 shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-emerald-200 hover:-translate-y-0.5 transition-all group" href="#">
<div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center mb-2 transition-all">
<span class="material-symbols-outlined text-[20px]">assignment_turned_in</span>
</div>
<span class="text-xs font-bold text-slate-800">Pengadaan</span>
<span class="text-[11px] text-slate-400 truncate w-full mt-0.5">Proposal &amp; approval</span>
</a>
<a class="bg-white rounded-xl p-3.5 flex flex-col items-center text-center border border-slate-200 shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-sky-200 hover:-translate-y-0.5 transition-all group" href="#">
<div class="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white flex items-center justify-center mb-2 transition-all">
<span class="material-symbols-outlined text-[20px]">devices</span>
</div>
<span class="text-xs font-bold text-slate-800">Inventaris Aset</span>
<span class="text-[11px] text-slate-400 truncate w-full mt-0.5">Katalog lab &amp; pinjam</span>
</a>
<a class="bg-white rounded-xl p-3.5 flex flex-col items-center text-center border border-slate-200 shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-indigo-200 hover:-translate-y-0.5 transition-all group" href="#">
<div class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center mb-2 transition-all">
<span class="material-symbols-outlined text-[20px]">security</span>
</div>
<span class="text-xs font-bold text-slate-800">Log Audit TI</span>
<span class="text-[11px] text-slate-400 truncate w-full mt-0.5">ISO 27001 &amp; RBAC</span>
</a>
<a class="bg-white rounded-xl p-3.5 flex flex-col items-center text-center border border-slate-200 shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-teal-200 hover:-translate-y-0.5 transition-all group" href="#">
<div class="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white flex items-center justify-center mb-2 transition-all">
<span class="material-symbols-outlined text-[20px]">cloud_done</span>
</div>
<span class="text-xs font-bold text-slate-800">Server &amp; DB</span>
<span class="text-[11px] text-slate-400 truncate w-full mt-0.5">Coolify 142ms latency</span>
</a>
<a class="bg-white rounded-xl p-3.5 flex flex-col items-center text-center border border-slate-200 shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-rose-200 hover:-translate-y-0.5 transition-all group" href="#">
<div class="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white flex items-center justify-center mb-2 transition-all">
<span class="material-symbols-outlined text-[20px]">support_agent</span>
</div>
<span class="text-xs font-bold text-slate-800">Helpdesk &amp; WA</span>
<span class="text-[11px] text-slate-400 truncate w-full mt-0.5">Reminder broadcast</span>
</a>
</div>
<!-- Chart & Quick Approvals Split -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
<!-- Left: Interactive Cash Flow Wave Chart (8 cols) -->
<div class="lg:col-span-8 bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_1px_6px_rgba(0,0,0,0.03)] flex flex-col justify-between">
<div>
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
<div>
<h2 class="text-base font-bold text-slate-900 flex items-center gap-2">
<span class="material-symbols-outlined text-[#6354e8] text-[20px]">ssid_chart</span>
                Arus Kas &amp; Proyeksi Fiskal (Jan - Jun 2025)
              </h2>
<p class="text-xs text-slate-500 mt-0.5">
                Komparasi arus dana masuk (iuran mahasiswa, sponsor) versus pengeluaran operasional per divisi
              </p>
</div>
<div class="flex items-center gap-3">
<div class="hidden sm:flex items-center gap-3 text-xs font-medium text-slate-500">
<div class="flex items-center gap-1.5">
<span class="w-2.5 h-2.5 rounded-full bg-[#6354e8]"></span>
<span>Pemasukan</span>
</div>
<div class="flex items-center gap-1.5">
<span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
<span>Pengeluaran</span>
</div>
</div>
<div class="inline-flex p-0.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold">
<button class="px-2.5 py-1 rounded-md bg-white text-[#6354e8] shadow-xs" type="button">Sem 1</button>
<button class="px-2.5 py-1 rounded-md text-slate-500 hover:text-slate-900 transition-colors" type="button">Sem 2</button>
</div>
</div>
</div>
<!-- Clean Light SVG Line Chart -->
<div class="relative w-full h-[220px] bg-slate-50/60 rounded-xl p-3 border border-slate-100 flex flex-col justify-between overflow-hidden">
<!-- Horizontal Grid Lines -->
<div class="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-40">
<div class="w-full h-px bg-slate-200"></div>
<div class="w-full h-px bg-slate-200"></div>
<div class="w-full h-px bg-slate-200"></div>
<div class="w-full h-px bg-slate-200"></div>
</div>
<div class="relative w-full h-44 z-10">
<svg class="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 700 180">
<defs>
<lineargradient id="lightInflowGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#6354e8" stop-opacity="0.22"></stop>
<stop offset="100%" stop-color="#6354e8" stop-opacity="0.0"></stop>
</lineargradient>
<lineargradient id="lightOutflowGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#f59e0b" stop-opacity="0.18"></stop>
<stop offset="100%" stop-color="#f59e0b" stop-opacity="0.0"></stop>
</lineargradient>
</defs>
<!-- Inflow Area & Spline Line -->
<path d="M 0,140 Q 70,80 140,65 T 280,45 T 420,70 T 560,20 T 700,30 L 700,180 L 0,180 Z" fill="url(#lightInflowGrad)"></path>
<path d="M 0,140 Q 70,80 140,65 T 280,45 T 420,70 T 560,20 T 700,30" fill="none" stroke="#6354e8" stroke-linecap="round" stroke-width="3"></path>
<!-- Outflow Path (Dashed) -->
<path d="M 0,160 Q 70,140 140,120 T 280,95 T 420,110 T 560,85 T 700,75 L 700,180 L 0,180 Z" fill="url(#lightOutflowGrad)"></path>
<path d="M 0,160 Q 70,140 140,120 T 280,95 T 420,110 T 560,85 T 700,75" fill="none" stroke="#f59e0b" stroke-dasharray="4 4" stroke-linecap="round" stroke-width="2.5"></path>
<!-- Interactive Node Points -->
<circle cx="560" cy="20" fill="#ffffff" r="5" stroke="#6354e8" stroke-width="3"></circle>
<circle cx="560" cy="85" fill="#ffffff" r="4.5" stroke="#f59e0b" stroke-width="2.5"></circle>
<circle cx="700" cy="30" fill="#6354e8" r="4.5"></circle>
</svg>
<!-- Floating Micro Metric Badge -->
<div class="absolute top-2 right-24 bg-white/95 backdrop-blur-sm border border-slate-200 px-3 py-1.5 rounded-lg shadow-md flex flex-col pointer-events-none text-xs">
<span class="text-[#6354e8] font-bold">Mei: Rp 5.20M</span>
<span class="text-amber-600 font-medium">Keluar: Rp 2.45M</span>
</div>
</div>
<!-- X-Axis Labels -->
<div class="flex justify-between items-center text-xs font-semibold text-slate-500 pt-1 z-10">
<span>Jan 25</span>
<span>Feb 25</span>
<span>Mar 25</span>
<span>Apr 25</span>
<span class="text-[#6354e8] font-bold">Mei 25 (Puncak)</span>
<span>Jun 25 (Proyeksi)</span>
</div>
</div>
</div>
<!-- Metric Sub-summary Bar -->
<div class="grid grid-cols-3 gap-3 pt-3 mt-4 bg-slate-50 rounded-xl p-3 border border-slate-100">
<div class="flex flex-col">
<span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Surplus Bersih</span>
<span class="text-sm font-bold text-emerald-600 font-mono">+Rp 25.330.000</span>
</div>
<div class="flex flex-col">
<span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Rasio Efisiensi</span>
<span class="text-sm font-bold text-[#6354e8] font-mono">65.4%</span>
</div>
<div class="flex flex-col">
<span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status Cadangan</span>
<span class="text-sm font-bold text-emerald-700 font-mono">Optimal (AAA)</span>
</div>
</div>
</div>
<!-- Right: Persetujuan Segera / Procurement Flow (4 cols) -->
<div class="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_1px_6px_rgba(0,0,0,0.03)] flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-2">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-amber-500 text-[20px]">fact_check</span>
<h3 class="text-base font-bold text-slate-900 leading-tight">Persetujuan Segera</h3>
</div>
<span class="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200">
              2 Tiket
            </span>
</div>
<p class="text-xs text-slate-500 mb-4 leading-relaxed">
            Sesuai SOP Keuangan Angkatan, pengadaan &gt; Rp 500.000 mewajibkan dual-sign (Bendahara &amp; Ketua Angkatan).
          </p>
<!-- Item 1: Requiring Dual Sign -->
<div class="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl mb-3 flex flex-col gap-2">
<div class="flex items-start justify-between gap-2">
<div class="flex flex-col">
<span class="text-xs font-bold text-slate-900 leading-snug">
                  Pembelian Proyektor Portable &amp; Kabel HDMI
                </span>
<span class="text-[11px] font-mono text-slate-400">Tiket: #PROC-2025-014</span>
</div>
<span class="text-xs font-bold text-slate-900 font-mono whitespace-nowrap">
                Rp 1.850.000
              </span>
</div>
<div class="flex items-center gap-1.5">
<span class="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded-md">
<span class="material-symbols-outlined text-[13px]">pending</span>
                Menunggu Approval Ketua Angkatan
              </span>
</div>
<div class="flex items-center justify-between pt-2 border-t border-slate-200/60 text-xs">
<span class="text-[11px] text-slate-400">Ketentuan &gt; Rp 500.000</span>
<div class="flex gap-1.5">
<button class="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 text-[11px] font-bold transition-colors" type="button">
                  Tolak
                </button>
<button class="px-3 py-1 rounded-lg bg-[#6354e8] hover:bg-[#5136d8] text-white text-[11px] font-bold shadow-xs transition-colors" type="button">
                  Approve (Ketua)
                </button>
</div>
</div>
</div>
<!-- Item 2: Approved by Bendahara -->
<div class="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl flex flex-col gap-2">
<div class="flex items-start justify-between gap-2">
<div class="flex flex-col">
<span class="text-xs font-bold text-slate-900 leading-snug">
                  Konsumsi Makrab Angkatan Batch 1
                </span>
<span class="text-[11px] font-mono text-slate-400">Tiket: #PROC-2025-015</span>
</div>
<span class="text-xs font-bold text-slate-900 font-mono whitespace-nowrap">
                Rp 450.000
              </span>
</div>
<div class="flex items-center gap-1.5">
<span class="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded-md">
<span class="material-symbols-outlined text-[13px]">done_all</span>
                Approved by Bendahara (Tier 1)
              </span>
</div>
<div class="flex items-center justify-between pt-2 border-t border-slate-200/60 text-xs">
<span class="text-[11px] font-semibold text-emerald-600">Dana Siap Dicairkan</span>
<button class="px-3 py-1 rounded-lg bg-slate-200/80 hover:bg-slate-300 text-slate-800 text-[11px] font-bold transition-colors" type="button">
                Disburse Dana
              </button>
</div>
</div>
</div>
<div class="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-slate-400 text-[11px]">
<span>Total Usulan Terbuka: <strong class="text-slate-700">Rp 2.300.000</strong></span>
<a class="text-[#6354e8] font-bold hover:underline" href="#">Audit SOP &gt;</a>
</div>
</div>
</div>
<!-- Bottom Row: Recent Ledger Audit Table & System Governance Widgets -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-6">
<!-- Left: Tabel Transaksi Terkini (8 cols) -->
<div class="lg:col-span-8 bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_1px_6px_rgba(0,0,0,0.03)] flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-4">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-emerald-600 text-[20px]">history_edu</span>
<h2 class="text-base font-bold text-slate-900">Transaksi Terkini (Ledger Audit)</h2>
</div>
<a class="text-xs font-bold text-[#6354e8] hover:underline flex items-center gap-1" href="#">
              Lihat Semua Transaksi
              <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left">
<thead>
<tr class="bg-slate-50 text-slate-500 text-[11px] font-bold uppercase tracking-wider">
<th class="py-2.5 px-3 rounded-l-lg">Tanggal</th>
<th class="py-2.5 px-3">Deskripsi &amp; Entitas</th>
<th class="py-2.5 px-3">Kategori</th>
<th class="py-2.5 px-3 text-center">Tipe</th>
<th class="py-2.5 px-3 text-right">Nominal</th>
<th class="py-2.5 px-3">Verifikator</th>
<th class="py-2.5 px-3 rounded-r-lg text-center">Status</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100 text-xs text-slate-700 font-medium">
<!-- Row 1 -->
<tr class="hover:bg-slate-50/80 transition-colors">
<td class="py-3 px-3 font-mono text-slate-500 whitespace-nowrap">24 Mei 2025</td>
<td class="py-3 px-3">
<div class="font-bold text-slate-900">Iuran Kas Mingguan #21</div>
<div class="text-[11px] text-slate-400 font-mono">34 Mahasiswa Terdata</div>
</td>
<td class="py-3 px-3 text-slate-600">Iuran Rutin</td>
<td class="py-3 px-3 text-center">
<span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                    Masuk
                  </span>
</td>
<td class="py-3 px-3 text-right font-mono font-bold text-emerald-600 whitespace-nowrap">+Rp 680.000</td>
<td class="py-3 px-3 text-slate-600 text-[11px]">Mohammad Husi</td>
<td class="py-3 px-3 text-center">
<span class="inline-flex items-center gap-1 text-emerald-600 text-[11px] font-semibold">
<span class="material-symbols-outlined text-[14px]">check_circle</span>
                    Terverifikasi
                  </span>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-slate-50/80 transition-colors">
<td class="py-3 px-3 font-mono text-slate-500 whitespace-nowrap">23 Mei 2025</td>
<td class="py-3 px-3">
<div class="font-bold text-slate-900">Domain &amp; VPS Coolify Cloud</div>
<div class="text-[11px] text-slate-400 font-mono">Inv: #SRV-2025-09</div>
</td>
<td class="py-3 px-3 text-slate-600">Infrastruktur TI</td>
<td class="py-3 px-3 text-center">
<span class="px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 text-[10px] font-bold border border-rose-200">
                    Keluar
                  </span>
</td>
<td class="py-3 px-3 text-right font-mono font-bold text-rose-600 whitespace-nowrap">-Rp 320.000</td>
<td class="py-3 px-3 text-slate-600 text-[11px]">Admin Sistem</td>
<td class="py-3 px-3 text-center">
<span class="inline-flex items-center gap-1 text-emerald-600 text-[11px] font-semibold">
<span class="material-symbols-outlined text-[14px]">check_circle</span>
                    Terverifikasi
                  </span>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-slate-50/80 transition-colors">
<td class="py-3 px-3 font-mono text-slate-500 whitespace-nowrap">21 Mei 2025</td>
<td class="py-3 px-3">
<div class="font-bold text-slate-900">Sponsorship Event Webinar Tech</div>
<div class="text-[11px] text-slate-400 font-mono">PT Niaga Inovasi Digital</div>
</td>
<td class="py-3 px-3 text-slate-600">Eksternal &amp; Sponsor</td>
<td class="py-3 px-3 text-center">
<span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                    Masuk
                  </span>
</td>
<td class="py-3 px-3 text-right font-mono font-bold text-emerald-600 whitespace-nowrap">+Rp 2.500.000</td>
<td class="py-3 px-3 text-slate-600 text-[11px]">Mohammad Husi</td>
<td class="py-3 px-3 text-center">
<span class="inline-flex items-center gap-1 text-emerald-600 text-[11px] font-semibold">
<span class="material-symbols-outlined text-[14px]">check_circle</span>
                    Terverifikasi
                  </span>
</td>
</tr>
<!-- Row 4 -->
<tr class="hover:bg-slate-50/80 transition-colors">
<td class="py-3 px-3 font-mono text-slate-500 whitespace-nowrap">19 Mei 2025</td>
<td class="py-3 px-3">
<div class="font-bold text-slate-900">Pengadaan Banner &amp; Nametag Makrab</div>
<div class="text-[11px] text-slate-400 font-mono">Divisi Acara Angkatan</div>
</td>
<td class="py-3 px-3 text-slate-600">Logistik Kegiatan</td>
<td class="py-3 px-3 text-center">
<span class="px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 text-[10px] font-bold border border-rose-200">
                    Keluar
                  </span>
</td>
<td class="py-3 px-3 text-right font-mono font-bold text-rose-600 whitespace-nowrap">-Rp 450.000</td>
<td class="py-3 px-3 text-slate-600 text-[11px]">Mohammad Husi</td>
<td class="py-3 px-3 text-center">
<span class="inline-flex items-center gap-1 text-emerald-600 text-[11px] font-semibold">
<span class="material-symbols-outlined text-[14px]">check_circle</span>
                    Terverifikasi
                  </span>
</td>
</tr>
<!-- Row 5 -->
<tr class="hover:bg-slate-50/80 transition-colors">
<td class="py-3 px-3 font-mono text-slate-500 whitespace-nowrap">18 Mei 2025</td>
<td class="py-3 px-3">
<div class="font-bold text-slate-900">Pelunasan Iuran Ganjil Tahap 1</div>
<div class="text-[11px] text-slate-400 font-mono">18 Mahasiswa Batch 2</div>
</td>
<td class="py-3 px-3 text-slate-600">Iuran Rutin</td>
<td class="py-3 px-3 text-center">
<span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                    Masuk
                  </span>
</td>
<td class="py-3 px-3 text-right font-mono font-bold text-emerald-600 whitespace-nowrap">+Rp 900.000</td>
<td class="py-3 px-3 text-slate-600 text-[11px]">Mohammad Husi</td>
<td class="py-3 px-3 text-center">
<span class="inline-flex items-center gap-1 text-emerald-600 text-[11px] font-semibold">
<span class="material-symbols-outlined text-[14px]">check_circle</span>
                    Terverifikasi
                  </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<!-- Right: Tata Kelola & Status Sistem (4 cols) -->
<div class="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_1px_6px_rgba(0,0,0,0.03)] flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-2">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-emerald-600 text-[20px]">dns</span>
<h3 class="text-base font-bold text-slate-900 leading-tight">
                Tata Kelola &amp; Status Sistem
              </h3>
</div>
<span class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
</div>
<p class="text-xs text-slate-500 mb-4">
            Pemantauan telemetri real-time infrastruktur Coolify Cloud &amp; kepatuhan non-fungsional proyek SI.
          </p>
<div class="space-y-2.5">
<!-- Latency -->
<div class="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
<div class="flex items-center gap-2.5">
<div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
<span class="material-symbols-outlined text-[18px]">speed</span>
</div>
<div class="flex flex-col">
<span class="text-xs font-bold text-slate-800">Server Response Time</span>
<span class="text-[10px] text-slate-400">NFR-01: &lt; 200ms</span>
</div>
</div>
<div class="flex items-center gap-1.5">
<span class="font-mono text-xs font-bold text-emerald-600">142ms</span>
<span class="w-2 h-2 rounded-full bg-emerald-500"></span>
</div>
</div>
<!-- DB -->
<div class="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
<div class="flex items-center gap-2.5">
<div class="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
<span class="material-symbols-outlined text-[18px]">database</span>
</div>
<div class="flex flex-col">
<span class="text-xs font-bold text-slate-800">PostgreSQL Cluster</span>
<span class="text-[10px] text-slate-400">ACID • Auto-backup</span>
</div>
</div>
<span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">HEALTHY</span>
</div>
<!-- Anti-Gravity Engine -->
<div class="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
<div class="flex items-center gap-2.5">
<div class="w-8 h-8 rounded-lg bg-indigo-50 text-[#6354e8] flex items-center justify-center">
<span class="material-symbols-outlined text-[18px]">shield</span>
</div>
<div class="flex flex-col">
<span class="text-xs font-bold text-slate-800">Anti-Gravity Engine</span>
<span class="text-[10px] text-slate-400">Lock &amp; Audit Trail</span>
</div>
</div>
<span class="px-2 py-0.5 rounded-full bg-indigo-100 text-[#6354e8] text-[10px] font-bold">ACTIVE</span>
</div>
<!-- UAT Verification -->
<div class="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
<div class="flex items-center gap-2.5">
<div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
<span class="material-symbols-outlined text-[18px]">assignment_turned_in</span>
</div>
<div class="flex flex-col">
<span class="text-xs font-bold text-slate-800">UAT Verification</span>
<span class="text-[10px] text-slate-400">Plan 4.2 (100% Passed)</span>
</div>
</div>
<span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">PASSED</span>
</div>
</div>
</div>
<!-- Terminal Footer Signature -->
<div class="mt-4 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-500 font-mono text-[10px] flex items-center justify-between">
<span>DEPLOY: v2.4.1-prod</span>
<span class="text-emerald-600 font-bold">UPTIME: 99.98%</span>
</div>
</div>
</div>
</div></main></div></body></html>
