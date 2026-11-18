<!DOCTYPE html>

<html class="light" lang="id"><head><meta charset="utf-8"/><meta content="width=device-width, initial-scale=1.0" name="viewport"/><meta content="web_dashboard" name="shell-type"/><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;family=JetBrains+Mono:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/><style>@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{width:5px;height:5px;}::-webkit-scrollbar-track{background:transparent;}::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:4px;}</style><script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script><script id="tailwind-config">tailwind.config={darkMode:"class",theme:{extend:{colors:{"error":"#e11d48","on-tertiary":"#ffffff","outline-variant":"#e2e8f0","on-background":"#0f172a","surface":"#f8fafc","outline":"#94a3b8","on-secondary-container":"#00714d","on-primary":"#ffffff","on-secondary":"#ffffff","on-error-container":"#9f1239","secondary":"#10b981","surface-container-highest":"#e2e8f0","surface-tint":"#6366f1","surface-container-low":"#f1f5f9","inverse-on-surface":"#f8fafc","primary":"#4f46e5","surface-variant":"#f1f5f9","surface-bright":"#ffffff","surface-container-lowest":"#ffffff","on-tertiary-container":"#0f766e","error-container":"#ffe4e6","on-secondary-fixed":"#002113","surface-container":"#f8fafc","on-surface":"#0f172a","tertiary":"#0ea5e9","on-primary-fixed":"#1e1b4b","tertiary-fixed":"#e0f2fe","on-error":"#ffffff","primary-fixed-dim":"#c7d2fe","on-primary-fixed-variant":"#3730a3","inverse-primary":"#a5b4fc","tertiary-container":"#38bdf8","on-surface-variant":"#64748b","inverse-surface":"#1e293b","background":"#f8fafc","primary-container":"#4f46e5","tertiary-fixed-dim":"#bae6fd","on-tertiary-fixed-variant":"#0369a1","primary-fixed":"#e0e7ff","secondary-container":"#34d399","on-primary-container":"#ffffff","secondary-fixed-dim":"#a7f3d0","on-tertiary-fixed":"#082f49","secondary-fixed":"#d1fae5","on-secondary-fixed-variant":"#047857","surface-dim":"#f1f5f9","surface-container-high":"#ffffff"},borderRadius:{"DEFAULT":"0.375rem","lg":"0.5rem","xl":"0.75rem","2xl":"1rem","full":"9999px"},fontFamily:{"display-lg":["Plus Jakarta Sans","sans-serif"],"headline-lg":["Plus Jakarta Sans","sans-serif"],"headline-md":["Plus Jakarta Sans","sans-serif"],"label-code":["JetBrains Mono","monospace"],"body-md":["Plus Jakarta Sans","sans-serif"],"body-sm":["Plus Jakarta Sans","sans-serif"],"body-lg":["Plus Jakarta Sans","sans-serif"],"label-badge":["Plus Jakarta Sans","sans-serif"]}}}}</script></head><body class="bg-[#f8fafc] font-body-md text-slate-800 min-h-screen selection:bg-indigo-100 selection:text-indigo-700 antialiased"><aside class="fixed left-0 top-0 h-full w-64 bg-white z-50 flex flex-col justify-between border-r border-slate-200/80 shadow-sm"><div class="flex flex-col"><div class="h-16 px-5 flex items-center justify-between border-b border-slate-100"><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-indigo-200"><span class="material-symbols-outlined text-[20px]">account_balance</span></div><div class="flex flex-col min-w-0"><span class="font-bold text-slate-900 text-[15px] tracking-tight truncate leading-tight">SI-KASANG ERP</span><span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider truncate">Tata Kelola TI &amp; Kas</span></div></div><span class="p-1 rounded-md text-slate-400 hover:bg-slate-50 cursor-pointer material-symbols-outlined text-[18px]">keyboard_double_arrow_left</span></div><div class="p-4 mx-3 my-3 bg-slate-50/80 border border-slate-200/70 rounded-xl"><div class="flex items-center justify-between mb-2"><span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Akses Otoritas</span><span class="h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-100"></span></div><div class="relative"><select aria-label="Pilih Peran Sistem" class="w-full bg-white border border-slate-200 rounded-lg text-slate-700 text-xs px-2.5 py-1.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 appearance-none cursor-pointer pr-7 font-medium shadow-sm"><option selected="">Bendahara / System Admin</option><option>System Administrator</option><option>Bendahara</option><option>Ketua Angkatan</option><option>Mahasiswa</option></select><span class="material-symbols-outlined absolute right-2 top-2 pointer-events-none text-slate-400 text-[16px]">unfold_more</span></div></div><div class="px-3"><span class="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-2 block">Modul Operasional</span><nav class="flex flex-col gap-1"><a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors text-sm font-medium" href="#"><span class="material-symbols-outlined text-[20px] text-slate-400">pie_chart</span><span>Dashboard &amp; Ikhtisar</span></a><a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors text-sm font-medium" href="#"><span class="material-symbols-outlined text-[20px] text-slate-400">account_balance_wallet</span><span>Kas &amp; Iuran Mahasiswa</span></a><a class="flex items-center gap-3 px-3 py-2 rounded-lg bg-indigo-50/80 text-indigo-600 font-semibold text-sm shadow-xs border-r-2 border-indigo-600" href="#"><span class="material-symbols-outlined text-[20px] text-indigo-600">fact_check</span><span>Pengadaan &amp; Approval</span></a><a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors text-sm font-medium" href="#"><span class="material-symbols-outlined text-[20px] text-slate-400">verified_user</span><span>Aset &amp; Log Audit TI</span></a></nav></div></div><div class="p-4 border-t border-slate-100 flex flex-col gap-2.5 bg-slate-50/50"><div class="flex items-center justify-between px-3 py-2 rounded-lg bg-white border border-slate-200/80 shadow-xs"><div class="flex items-center gap-2"><span class="relative flex h-2 w-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span><span class="text-xs font-mono font-medium text-slate-600">Coolify VPS</span></div><span class="text-xs font-mono font-semibold text-emerald-600">142ms</span></div><div class="px-1"><p class="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Proyek Manpro SI</p><p class="text-xs font-semibold text-slate-800 truncate">Mohammad Husi</p><p class="text-[11px] font-mono text-slate-400">NIM: 20241230012</p></div></div></aside><div class="pl-64"><header class="fixed top-0 left-64 right-0 h-16 bg-white/95 backdrop-blur-md z-30 border-b border-slate-200/80 flex items-center justify-between px-8 shadow-xs"><div class="flex items-center gap-4 flex-1 max-w-xl"><div class="flex items-center gap-2 text-slate-500 text-xs font-medium"><span class="material-symbols-outlined text-[16px] text-slate-400">domain</span><span>SI-KASANG</span><span class="material-symbols-outlined text-[14px] text-slate-300">chevron_right</span><span class="text-indigo-600 font-semibold bg-indigo-50 px-2 py-0.5 rounded">Konsol Eksekutif</span></div><div class="relative flex-1 hidden xl:block"><span class="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-[18px]">search</span><input class="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all" placeholder="Cari NIM, transaksi, atau nomor tiket pengadaan..." type="text"/></div></div><div class="flex items-center gap-4"><div class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium"><span class="material-symbols-outlined text-amber-500 text-[16px]">calendar_today</span><span class="font-semibold text-slate-700">Semester Ganjil 2024/2025</span></div><button aria-label="Notifikasi" class="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors" type="button"><span class="material-symbols-outlined text-[20px]">notifications</span><span class="absolute top-1.5 right-1.5 h-4 w-4 bg-rose-500 text-white text-[9px] font-mono flex items-center justify-center rounded-full font-bold shadow-xs">2</span></button><div class="h-6 w-px bg-slate-200"></div><div class="flex items-center gap-3"><div class="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">MH</div><div class="flex flex-col text-left"><div class="flex items-center gap-1.5"><span class="text-xs font-bold text-slate-800 leading-tight">Mohammad Husi</span><span class="text-[10px] font-mono text-slate-400">(20241230012)</span></div><span class="text-[10px] font-semibold text-indigo-600 leading-tight">Lead Admin &amp; Bendahara</span></div></div></div></header><main class="relative pt-16 w-full px-8 min-h-screen bg-[#f8fafc]"><div class="flex flex-col w-full relative">
<div class="flex flex-col gap-6 w-full py-8">
<div class="flex items-center justify-between">
<div class="flex flex-col gap-1">
<div class="flex items-center gap-2">
<span class="text-[11px] font-bold tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-full uppercase">Governance FR-05/FR-08</span>
<span class="text-xs font-mono text-slate-400">• Segregation of Duties Enforced</span>
</div>
<h1 class="text-2xl font-bold text-slate-900 tracking-tight">Pengadaan &amp; Workflow Persetujuan Anggaran</h1>
<p class="text-xs sm:text-sm text-slate-500">Otorisasi bertingkat belanja kas angkatan, validasi ketersediaan plafon, dan penerbitan nomor register inventaris otomatis.</p>
</div>
<div class="flex items-center gap-2.5">
<button class="flex items-center gap-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors shadow-xs" type="button">
<span class="material-symbols-outlined text-[17px]">tune</span>
<span>Filter Lanjutan</span>
</button>
<button class="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all" type="button">
<span class="material-symbols-outlined text-[18px]">add_circle</span>
<span>Buat Usulan Pengadaan</span>
</button>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div class="bg-gradient-to-br from-indigo-500 to-indigo-600 p-5 rounded-2xl text-white shadow-sm flex flex-col justify-between">
<div class="flex items-center justify-between"><span class="text-xs font-medium text-indigo-100 uppercase tracking-wider">Plafon Tersedia</span><div class="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center"><span class="material-symbols-outlined text-white text-[18px]">account_balance</span></div></div>
<div class="my-3"><span class="text-2xl font-bold font-mono tracking-tight text-white">Rp 28.450.000</span></div>
<div class="flex items-center gap-1.5 text-xs text-indigo-100 font-medium"><span class="material-symbols-outlined text-[15px]">arrow_upward</span><span>87.5% Alokasi Aman</span></div>
</div>
<div class="bg-gradient-to-br from-emerald-500 to-emerald-600 p-5 rounded-2xl text-white shadow-sm flex flex-col justify-between">
<div class="flex items-center justify-between"><span class="text-xs font-medium text-emerald-100 uppercase tracking-wider">Disetujui Bulan Ini</span><div class="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center"><span class="material-symbols-outlined text-white text-[18px]">task_alt</span></div></div>
<div class="my-3"><span class="text-2xl font-bold font-mono tracking-tight text-white">Rp 6.120.000</span></div>
<div class="flex items-center gap-1.5 text-xs text-emerald-100 font-medium"><span class="material-symbols-outlined text-[15px]">done_all</span><span>8 Tiket Selesai Otorisasi</span></div>
</div>
<div class="bg-gradient-to-br from-sky-500 to-cyan-600 p-5 rounded-2xl text-white shadow-sm flex flex-col justify-between">
<div class="flex items-center justify-between"><span class="text-xs font-medium text-sky-100 uppercase tracking-wider">Menunggu Otorisasi</span><div class="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center"><span class="material-symbols-outlined text-white text-[18px]">pending_actions</span></div></div>
<div class="my-3"><span class="text-2xl font-bold font-mono tracking-tight text-white">3 Berkas</span></div>
<div class="flex items-center gap-1.5 text-xs text-sky-100 font-medium"><span class="material-symbols-outlined text-[15px]">hourglass_top</span><span>Total Rp 3.420.000</span></div>
</div>
<div class="bg-gradient-to-br from-amber-500 to-orange-500 p-5 rounded-2xl text-white shadow-sm flex flex-col justify-between">
<div class="flex items-center justify-between"><span class="text-xs font-medium text-amber-100 uppercase tracking-wider">Integritas Audit Log</span><div class="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center"><span class="material-symbols-outlined text-white text-[18px]">verified</span></div></div>
<div class="my-3"><span class="text-2xl font-bold font-mono tracking-tight text-white">100% Synced</span></div>
<div class="flex items-center gap-1.5 text-xs text-amber-100 font-medium"><span class="material-symbols-outlined text-[15px]">lock</span><span>SHA-256 Hash Valid</span></div>
</div>
</div>
<div class="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
<div class="px-6 py-4 bg-white border-b border-slate-100 flex items-center justify-between">
<div class="flex items-center gap-3">
<span class="text-base font-bold text-slate-800">Daftar Tiket Pengadaan Angkatan</span>
<span class="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">14 Total</span>
</div>
<div class="flex items-center gap-1.5">
<button class="px-3 py-1 text-white bg-indigo-600 rounded-lg text-xs font-semibold shadow-xs" type="button">Semua Status</button>
<button class="px-3 py-1 text-slate-600 hover:text-slate-900 rounded-lg text-xs font-medium" type="button">Butuh Tindakan (3)</button>
<button class="px-3 py-1 text-slate-600 hover:text-slate-900 rounded-lg text-xs font-medium" type="button">Teregistrasi Aset (8)</button>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left">
<thead class="bg-slate-50 text-slate-500 font-mono text-[11px] uppercase tracking-wider border-b border-slate-100">
<tr>
<th class="px-6 py-3 font-semibold">ID Tiket</th>
<th class="px-6 py-3 font-semibold">Rincian Pengadaan</th>
<th class="px-6 py-3 font-semibold">Pemohon</th>
<th class="px-6 py-3 font-semibold">Pos Anggaran</th>
<th class="px-6 py-3 text-right font-semibold">Nominal</th>
<th class="px-6 py-3 font-semibold">Status Persetujuan</th>
<th class="px-6 py-3 text-center font-semibold">Tindakan</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100 text-xs text-slate-700">
<tr class="bg-rose-50/40 relative cursor-pointer ring-1 ring-inset ring-rose-300">
<td class="px-6 py-3.5 font-mono text-rose-600 font-bold flex items-center gap-2">
<span class="h-2 w-2 rounded-full bg-rose-500 animate-pulse"></span>
                PGD-2025-008
              </td>
<td class="px-6 py-3.5">
<div class="flex flex-col">
<span class="font-semibold text-slate-900">Pengadaan Proyektor Portable EPSON EB-E01 untuk Presentasi Manpro</span>
<span class="text-[11px] font-mono text-slate-400">Kategori: Aset Tetap Angkatan • Batch 1 - 2025</span>
</div>
</td>
<td class="px-6 py-3.5">
<div class="flex flex-col">
<span class="font-medium text-slate-800">Rayhan Pratama</span>
<span class="text-[11px] text-slate-400">Div. Perlengkapan</span>
</div>
</td>
<td class="px-6 py-3.5 font-mono text-slate-500">Aset Tetap &amp; TI</td>
<td class="px-6 py-3.5 font-mono text-slate-900 text-right font-bold">Rp 1.850.000</td>
<td class="px-6 py-3.5"><span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200"><span class="h-1.5 w-1.5 rounded-full bg-rose-500"></span>Ditolak (Perlu Revisi)</span></td>
<td class="px-6 py-3.5 text-center">
<button class="text-xs font-bold text-indigo-600 hover:text-indigo-800 underline underline-offset-2" type="button">Buka Detail</button>
</td>
</tr>
<tr class="hover:bg-slate-50/80 transition-colors">
<td class="px-6 py-3.5 font-mono text-slate-700">PGD-2025-007</td>
<td class="px-6 py-3.5">
<div class="flex flex-col">
<span class="font-medium text-slate-800">Kabel HDMI 15M High Speed &amp; Converter USB-C DisplayPort</span>
<span class="text-[11px] font-mono text-slate-400">Kategori: Perlengkapan Operasional</span>
</div>
</td>
<td class="px-6 py-3.5">
<div class="flex flex-col">
<span class="text-slate-700">Siti Aisyah</span>
<span class="text-[11px] text-slate-400">Div. Acara</span>
</div>
</td>
<td class="px-6 py-3.5 font-mono text-slate-500">Operasional Kuliah</td>
<td class="px-6 py-3.5 font-mono text-slate-800 text-right font-semibold">Rp 320.000</td>
<td class="px-6 py-3.5">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/80">
<span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  Telah Dicairkan (FR-06)
                </span>
</td>
<td class="px-6 py-3.5 text-center">
<button class="text-xs text-slate-400 hover:text-slate-700 font-medium" type="button">Lihat</button>
</td>
</tr>
<tr class="hover:bg-slate-50/80 transition-colors">
<td class="px-6 py-3.5 font-mono text-slate-700">PGD-2025-006</td>
<td class="px-6 py-3.5">
<div class="flex flex-col">
<span class="font-medium text-slate-800">Perpanjangan Domain &amp; Server Hosting VPS Coolify SI-KASANG</span>
<span class="text-[11px] font-mono text-slate-400">Kategori: Infrastruktur TI</span>
</div>
</td>
<td class="px-6 py-3.5">
<div class="flex flex-col">
<span class="text-slate-700">Mohammad Husi</span>
<span class="text-[11px] text-slate-400">Dept. Sistem Informasi</span>
</div>
</td>
<td class="px-6 py-3.5 font-mono text-slate-500">Infrastruktur Server</td>
<td class="px-6 py-3.5 font-mono text-slate-800 text-right font-semibold">Rp 1.250.000</td>
<td class="px-6 py-3.5">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/80">
<span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  Tervalidasi &amp; Terarsip
                </span>
</td>
<td class="px-6 py-3.5 text-center">
<button class="text-xs text-slate-400 hover:text-slate-700 font-medium" type="button">Lihat</button>
</td>
</tr>
<tr class="hover:bg-slate-50/80 transition-colors">
<td class="px-6 py-3.5 font-mono text-slate-700">PGD-2025-005</td>
<td class="px-6 py-3.5">
<div class="flex flex-col">
<span class="font-medium text-slate-800">Konsumsi Workshop Metodologi Agile Scrum Kelas A &amp; B</span>
<span class="text-[11px] font-mono text-slate-400">Kategori: Kegiatan Akademik</span>
</div>
</td>
<td class="px-6 py-3.5">
<div class="flex flex-col">
<span class="text-slate-700">Dimas Kurniawan</span>
<span class="text-[11px] text-slate-400">Div. Akademik</span>
</div>
</td>
<td class="px-6 py-3.5 font-mono text-slate-500">Konsumsi &amp; Workshop</td>
<td class="px-6 py-3.5 font-mono text-slate-800 text-right font-semibold">Rp 850.000</td>
<td class="px-6 py-3.5">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/80">
<span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  Selesai LPJ
                </span>
</td>
<td class="px-6 py-3.5 text-center">
<button class="text-xs text-slate-400 hover:text-slate-700 font-medium" type="button">Lihat</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<!-- Backdrop for Drawer -->
<div class="fixed inset-0 top-16 left-64 bg-slate-900/30 backdrop-blur-xs z-40 transition-opacity" id="drawer-backdrop"></div>
<!-- Slide-over Drawer Light Theme DropX Admin -->
<aside aria-label="Rincian Tiket Pengadaan" class="fixed top-16 right-0 w-[540px] max-w-full h-[calc(100vh-4rem)] bg-white z-50 shadow-2xl border-l border-slate-200 flex flex-col overflow-hidden" id="proposal-drawer">
<!-- Top Banner: Status Header Rejection -->
<div class="px-6 py-3.5 bg-rose-50 border-b border-rose-200/90 flex items-center justify-between gap-3 shrink-0">
<div class="flex items-center gap-2">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-rose-600 text-white shadow-xs">
<span class="material-symbols-outlined text-[14px]">cancel</span>
  STATUS: DITOLAK DENGAN CATATAN REVISI
</span>
</div>
<div class="flex items-center gap-2">
<kbd class="font-mono text-[11px] text-slate-400 bg-white border border-slate-200 px-1.5 py-0.5 rounded shadow-2xs">Esc</kbd>
<button aria-label="Tutup Rincian" class="text-slate-400 hover:text-slate-700 p-1 rounded-md hover:bg-rose-100/60 transition-colors" id="close-drawer-btn" type="button">
<span class="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
</div>
<!-- Drawer Title & Metadata Bar -->
<div class="px-6 pt-4 pb-3.5 bg-white border-b border-slate-100 shrink-0">
<div class="flex items-center justify-between mb-1.5">
<div class="flex items-center gap-1.5">
<span class="font-mono text-sm font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">PGD-2025-008</span>
<button class="text-slate-400 hover:text-indigo-600 transition-colors flex items-center p-0.5" id="copy-ticket-btn" title="Salin ID Tiket" type="button">
<span class="material-symbols-outlined text-[15px]">content_copy</span>
</button>
</div>
<span class="font-mono text-xs text-slate-400">14 Mei 2025 • 09:12 WIB</span>
</div>
<h2 class="text-base font-bold text-slate-900 leading-snug mb-2">
        Pengadaan Proyektor Portable EPSON EB-E01 untuk Presentasi Manpro
      </h2>
<div class="flex items-center gap-2">
<span class="text-[11px] font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full uppercase">Aset Tetap Angkatan (Batch 1 - 2025)</span>
<span class="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-full uppercase">
<span class="material-symbols-outlined text-[13px]">block</span>PLAFON DITANGGUHKAN
</span>
</div>
</div>
<!-- Drawer Content Scrollable -->
<div class="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-5 bg-white">
<!-- Rejection & Audit Findings Box -->
<section class="bg-[#fff1f2] border border-[#fecdd3] p-4 rounded-xl flex flex-col gap-3 shadow-xs">
<div class="flex items-start justify-between gap-2">
<div class="flex items-start gap-2.5">
<div class="p-2 bg-rose-100 text-rose-600 rounded-lg shrink-0 mt-0.5">
<span class="material-symbols-outlined text-[20px]">report_problem</span>
</div>
<div>
<h3 class="text-sm font-bold text-rose-900 leading-snug">Proposal Dikembalikan / Ditolak oleh Otoritas Finansial</h3>
<p class="text-xs text-slate-600 mt-0.5">Penelaah: <strong class="text-slate-900 font-semibold">Ahmad Fadhil</strong> (Ketua Angkatan) &amp; <strong class="text-slate-900 font-semibold">Mohammad Husi</strong> (Bendahara)</p>
<span class="font-mono text-[11px] text-rose-700/80">Waktu Penolakan: 14 Mei 2025 • 11:30 WIB</span>
</div>
</div>
<span class="text-[10px] font-bold text-rose-700 bg-white border border-rose-200 px-2 py-0.5 rounded-md uppercase font-mono shrink-0 shadow-2xs">Governance Gate FR-05</span>
</div>
<div class="bg-white border border-rose-200/80 p-3.5 rounded-lg flex flex-col gap-2 shadow-2xs">
<span class="text-xs text-rose-800 uppercase font-bold flex items-center gap-1.5 tracking-wide">
<span class="material-symbols-outlined text-[15px] text-rose-600">assignment_late</span>Catatan Revisi &amp; Temuan Audit SOP Finansial:
</span>
<ul class="text-xs text-slate-700 space-y-2 pl-1 leading-relaxed">
<li class="flex items-start gap-2">
<span class="w-4 h-4 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
<span>Spesifikasi Proyektor EB-E01 dinilai terlalu tinggi untuk kebutuhan ruang kelas; mohon pertimbangkan sewa harian atau cari alternatif vendor lokal dengan garansi resmi lebih ekonomis (<strong class="text-rose-700 font-bold bg-rose-50 px-1 py-0.5 rounded">maksimal plafon usulan direvisi ke Rp 1.200.000</strong>).</span>
</li>
<li class="flex items-start gap-2">
<span class="w-4 h-4 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
<span>Belum melampirkan 3 surat penawaran pembanding (<strong class="text-slate-900 font-semibold">Quotation Comparison Matrix</strong>) sesuai SOP Pengadaan Bab IV Ayat 3 untuk belanja di atas Rp 1.000.000.</span>
</li>
<li class="flex items-start gap-2">
<span class="w-4 h-4 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
<span>Alokasi pos beban Aset Tetap &amp; TI bulan ini telah terbebani sewa cloud server Coolify.</span>
</li>
</ul>
</div>
</section>
<!-- Nominal & Budget Plafond Overview -->
<section class="bg-slate-50 border border-slate-200/80 p-4 rounded-xl flex flex-col gap-3">
<div class="flex items-baseline justify-between">
<div class="flex flex-col">
<span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Nominal Usulan</span>
<span class="text-2xl font-bold font-mono text-slate-900">Rp 1.850.000</span>
</div>
<div class="flex flex-col items-end">
<span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Beban Anggaran</span>
<span class="font-mono text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">6.5% Kas Angkatan</span>
</div>
</div>
<div class="bg-white border border-slate-200/90 p-2.5 rounded-lg flex items-center justify-between text-xs">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-indigo-600 text-[18px]">folder_special</span>
<span class="font-semibold text-slate-700">Pos: Aset Tetap &amp; TI</span>
</div>
<span class="font-mono text-slate-500 font-medium">Sisa Plafon: Rp 28.450.000</span>
</div>
<div class="bg-amber-50/70 border border-amber-200/70 p-3 rounded-lg flex items-start gap-2.5">
<span class="material-symbols-outlined text-amber-600 text-[18px] shrink-0 mt-0.5">policy</span>
<div class="flex flex-col gap-0.5 text-xs">
<span class="font-bold text-amber-800 uppercase tracking-wide text-[11px]">SOP FR-05 Triggered (&gt; Rp 500.000)</span>
<p class="text-slate-600 leading-relaxed">
              Wajib otorisasi digital ganda (<strong class="text-slate-800 font-semibold">Segregation of Duties</strong>). Bendahara terverifikasi ➔ Menunggu Sign-off digital Ketua Angkatan sebelum pencairan kas.
            </p>
</div>
</div>
</section>
<!-- Applicant & Justification -->
<section class="flex flex-col gap-2">
<div class="flex items-center justify-between">
<span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Informasi Pemohon &amp; Justifikasi</span>
<span class="font-mono text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">NIM: 20241230045</span>
</div>
<div class="bg-white border border-slate-200/90 p-4 rounded-xl flex flex-col gap-3 shadow-2xs">
<div class="flex items-center gap-3">
<img class="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-100" data-alt="Close up professional portrait of Rayhan Pratama, a male Indonesian computer science student in dark university polo shirt under subtle studio lighting with blue slate backdrops" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMlviRWVjLBT1V25YyGxaSmkScyqQeA_leCsgreRfqz9HGDLwTCigHGOIbJqZRxZkz8BxwMkbmwbnAtX3cBIcXAv-XVApbTxMfEeCTdY_y5MzUMU6xD3xlD0DA5wTf9j253kdoThoNZJP8N7lSqs-NyVDJQoJpIxA3boGD-ZlmNJOLFQdu55zEx-9g_t1jbR9d_38DvYrgvMGV96LPGslNHGZTbaHHcey9lYAyVPrM"/>
<div class="flex flex-col">
<span class="text-sm font-bold text-slate-900">Rayhan Pratama</span>
<span class="text-xs text-slate-500">Divisi Perlengkapan &amp; Logistik Angkatan</span>
</div>
</div>
<div class="bg-slate-50 border border-slate-200/70 p-3 rounded-lg">
<span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Tujuan &amp; Urgensi Operasional:</span>
<p class="text-xs text-slate-700 leading-relaxed">
              Dibutuhkan untuk penunjang presentasi proyek gabungan kelas A &amp; B di Auditorium Lab TI serta inventaris angkatan jangka panjang untuk mata kuliah Manajemen Proyek SI semester 4 hingga tugas akhir.
            </p>
</div>
</div>
</section>
<!-- Dual Multi-Level Approval Stepper with Rejection at Stage 3 -->
<section class="flex flex-col gap-2">
<span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Dual Multi-Level Approval Stepper</span>
<div class="bg-white border border-slate-200/90 p-4 rounded-xl flex flex-col gap-4 shadow-2xs">
<!-- Step 1: Pengajuan Usulan -->
<div class="flex gap-3 items-start relative">
<div class="flex flex-col items-center">
<div class="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-[12px] shadow-2xs">
<span class="material-symbols-outlined text-[14px]">done</span>
</div>
<div class="w-0.5 h-14 bg-emerald-200 my-1"></div>
</div>
<div class="flex-1 pb-1">
<div class="flex items-center justify-between">
<span class="text-xs font-bold text-slate-900">Tahap 1: Pengajuan Usulan</span>
<span class="font-mono text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Selesai</span>
</div>
<p class="text-xs text-slate-600 mt-0.5">Dibuat oleh <strong class="text-slate-800 font-semibold">Rayhan Pratama</strong></p>
<span class="font-mono text-[11px] text-slate-400">14 Mei 2025 • 09:12 WIB</span>
</div>
</div>
<!-- Step 2: Verifikasi Bendahara -->
<div class="flex gap-3 items-start relative -mt-2">
<div class="flex flex-col items-center">
<div class="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-[12px] shadow-2xs">
<span class="material-symbols-outlined text-[14px]">verified</span>
</div>
<div class="w-0.5 h-20 bg-emerald-200 my-1"></div>
</div>
<div class="flex-1 pb-1">
<div class="flex items-center justify-between">
<span class="text-xs font-bold text-slate-900">Tahap 2: Verifikasi Bendahara</span>
<span class="font-mono text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Lolos Verifikasi Awal</span>
</div>
<p class="text-xs text-slate-600 mt-0.5">Divalidasi oleh <strong class="text-slate-800 font-semibold">Mohammad Husi</strong> (NIM: 20241230012)</p>
<span class="font-mono text-[11px] text-slate-400 block mb-1">14 Mei 2025 • 10:24 WIB</span>
<div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
<span class="font-mono text-[11px] text-indigo-600 font-bold block mb-0.5">Catatan Verifikasi Kas:</span>
“Saldo kas mencukupi di Pos Aset Tetap, spesifikasi proyektor EPSON EB-E01 sesuai kebutuhan lab TI.”
</div>
</div>
</div>
<!-- Step 3: Otorisasi Ketua Angkatan (DITOLAK) -->
<div class="flex gap-3 items-start relative -mt-2">
<div class="flex flex-col items-center">
<div class="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold text-[12px] ring-4 ring-rose-100 shadow-2xs">
<span class="material-symbols-outlined text-[14px]">close</span>
</div>
<div class="w-0.5 h-12 bg-slate-200 my-1"></div>
</div>
<div class="flex-1 pb-1">
<div class="flex items-center justify-between">
<span class="text-xs font-bold text-rose-600">Tahap 3: Otorisasi Ketua Angkatan</span>
<span class="font-mono text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">Ditolak / Dikembalikan</span>
</div>
<p class="text-xs text-slate-600 mt-0.5">Ditolak oleh <strong class="text-slate-900 font-semibold">Ahmad Fadhil</strong> (NIM: 20241230005) dengan 3 catatan telaah revisi</p>
<span class="font-mono text-[11px] text-rose-600 font-medium">14 Mei 2025 • 11:30 WIB • Otorisasi Dibatalkan</span>
</div>
</div>
<!-- Step 4: Pencairan Kas (Dibatalkan) -->
<div class="flex gap-3 items-start relative opacity-60 -mt-2">
<div class="flex flex-col items-center">
<div class="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-[12px]">
<span class="material-symbols-outlined text-[13px]">block</span>
</div>
</div>
<div class="flex-1">
<div class="flex items-center justify-between">
<span class="text-xs font-semibold text-slate-400">Tahap 4: Pencairan Kas &amp; Registrasi Inventaris</span>
<span class="font-mono text-[11px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded">Dibatalkan</span>
</div>
<p class="text-xs text-slate-400 mt-0.5">Menunggu usulan revisi diajukan ulang (Resubmit FR-04)</p>
</div>
</div>
</div>
</section>
<!-- Lampiran Berkas Pendukung -->
<section class="flex flex-col gap-2">
<div class="flex items-center justify-between">
<span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Lampiran Berkas Pendukung</span>
<span class="font-mono text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">2 Berkas Tervalidasi</span>
</div>
<div class="flex flex-col gap-2">
<div class="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between hover:border-slate-300 transition-colors shadow-2xs">
<div class="flex items-center gap-3 min-w-0">
<div class="p-2 bg-rose-50 text-rose-600 rounded-lg shrink-0">
<span class="material-symbols-outlined text-[20px]">picture_as_pdf</span>
</div>
<div class="flex flex-col min-w-0">
<span class="text-xs font-semibold text-slate-800 truncate">RAB_Proyektor_EPSON_E01.pdf</span>
<div class="flex items-center gap-2">
<span class="font-mono text-[11px] text-slate-400">1.8 MB</span>
<span class="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-medium">SHA-256 Verified</span>
</div>
</div>
</div>
<div class="flex items-center gap-1 shrink-0">
<button class="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-colors" title="Lihat Berkas" type="button">
<span class="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button class="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-colors" title="Unduh Berkas" type="button">
<span class="material-symbols-outlined text-[18px]">download</span>
</button>
</div>
</div>
<div class="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between hover:border-slate-300 transition-colors shadow-2xs">
<div class="flex items-center gap-3 min-w-0">
<div class="p-2 bg-rose-50 text-rose-600 rounded-lg shrink-0">
<span class="material-symbols-outlined text-[20px]">description</span>
</div>
<div class="flex flex-col min-w-0">
<span class="text-xs font-semibold text-slate-800 truncate">Penawaran_Vendor_SentraKomputer.pdf</span>
<span class="font-mono text-[11px] text-slate-400">840 KB • Faktur Proforma</span>
</div>
</div>
<div class="flex items-center gap-1 shrink-0">
<button class="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-colors" title="Lihat Berkas" type="button">
<span class="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button class="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-colors" title="Unduh Berkas" type="button">
<span class="material-symbols-outlined text-[18px]">download</span>
</button>
</div>
</div>
</div>
</section>
<!-- Audit Hash Info Bar -->
<section class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-2.5">
<span class="material-symbols-outlined text-slate-400 text-[18px] shrink-0">info</span>
<p class="font-mono text-[11px] text-slate-500 leading-tight">
          Audit hash: <span class="text-slate-800 font-semibold">0x9f4a...e71c</span> tersinkronisasi otomatis dengan Modul Aset &amp; Log Audit TI Coolify VPS.
        </p>
</section>
</div>
<!-- DropX Admin Light Action Toolbar Bottom -->
<footer class="p-4 bg-white border-t border-slate-200 flex flex-col gap-2.5 shrink-0 shadow-lg">
<div class="flex items-center gap-2.5">
<button class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow" id="approve-action-btn" type="button">
<span class="material-symbols-outlined text-[18px]">edit_document</span>
<span>Ajukan Revisi Proposal (Resubmit FR-04)</span>
</button>
<button class="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 py-2.5 px-3 rounded-xl transition-colors flex items-center gap-1.5 text-xs font-semibold shadow-2xs" title="Unduh Berita Acara Penolakan (PDF)" type="button">
<span class="material-symbols-outlined text-[17px] text-slate-500">download</span>
<span>BA Penolakan</span>
</button>
<button class="bg-white border border-slate-200 hover:bg-slate-50 text-slate-400 hover:text-slate-700 p-2.5 rounded-xl transition-colors shadow-2xs" title="Arsipkan / Tutup Tiket" type="button">
<span class="material-symbols-outlined text-[18px]">archive</span>
</button>
</div>
<div class="flex items-center justify-between text-slate-400 font-mono text-[11px]">
<span class="flex items-center gap-1 text-slate-600">
<span class="material-symbols-outlined text-[14px] text-amber-500">replay</span>Alokasi plafon kas dikembalikan otomatis ke Pos Cadangan Kas
</span>
<span class="text-rose-600 font-bold">Status: Closed for Revision</span>
</div>
</footer>
</aside>
<script>
    (function () {
      const drawer = document.getElementById('proposal-drawer');
      const backdrop = document.getElementById('drawer-backdrop');
      const closeBtn = document.getElementById('close-drawer-btn');
      const copyBtn = document.getElementById('copy-ticket-btn');
      const approveBtn = document.getElementById('approve-action-btn');

      function closeDrawer() {
        if (!drawer || !backdrop) return;
        drawer.style.transform = 'translateX(100%)';
        drawer.style.transition = 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)';
        backdrop.style.opacity = '0';
        backdrop.style.pointerEvents = 'none';
        backdrop.style.transition = 'opacity 0.2s ease-in-out';
        setTimeout(() => {
          drawer.classList.add('hidden');
          backdrop.classList.add('hidden');
        }, 260);
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

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDrawer();
      });

      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText('PGD-2025-008');
          const original = copyBtn.innerHTML;
          copyBtn.innerHTML = '<span class="material-symbols-outlined text-[15px] text-emerald-600">check</span>';
          setTimeout(() => {
            copyBtn.innerHTML = original;
          }, 1500);
        });
      }

      if (approveBtn) {
        approveBtn.addEventListener('click', () => {
          const original = approveBtn.innerHTML;
          approveBtn.innerHTML = '<span class="material-symbols-outlined animate-spin text-[18px]">sync</span><span>Membuka Form Revisi FR-04...</span>';
          setTimeout(() => {
            approveBtn.innerHTML = '<span class="material-symbols-outlined text-[18px]">done_all</span><span>Form Terbuka!</span>';
            approveBtn.classList.remove('bg-indigo-600');
            approveBtn.classList.add('bg-emerald-600');
          }, 1000);
        });
      }
    })();
  </script>
</div></main></div></body></html>
