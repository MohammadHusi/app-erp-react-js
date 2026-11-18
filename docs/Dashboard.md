<!DOCTYPE html>

<html lang="en"><head><meta charset="utf-8"/><meta content="width=device-width, initial-scale=1.0" name="viewport"/><meta content="web_dashboard" name="shell-type"/><link href="https://fonts.googleapis.com" rel="preconnect"/><link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/><style>@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}</style><script src="https://cdn.tailwindcss.com"></script><script id="tailwind-config">tailwind.config = { darkMode: "class", theme: { extend: { "colors": { "secondary-fixed-dim": "#4edea3", "inverse-surface": "#213145", "tertiary-fixed": "#acedff", "on-primary": "#ffffff", "surface-container-low": "#eff4ff", "on-surface-variant": "#464554", "primary-container": "#6063ee", "on-primary-fixed-variant": "#2f2ebe", "primary": "#4648d4", "on-background": "#0b1c30", "secondary-container": "#6cf8bb", "surface": "#f8f9ff", "on-primary-fixed": "#07006c", "surface-variant": "#d3e4fe", "surface-container-highest": "#d3e4fe", "on-tertiary-fixed": "#001f26", "on-primary-container": "#fffbff", "primary-fixed": "#e1e0ff", "on-tertiary-container": "#f9fdff", "on-secondary-fixed": "#002113", "surface-dim": "#cbdbf5", "surface-container": "#e5eeff", "surface-tint": "#494bd6", "inverse-on-surface": "#eaf1ff", "surface-bright": "#f8f9ff", "secondary": "#006c49", "background": "#f8f9ff", "on-secondary": "#ffffff", "surface-container-lowest": "#ffffff", "inverse-primary": "#c0c1ff", "outline": "#767586", "tertiary-fixed-dim": "#4cd7f6", "on-surface": "#0b1c30", "primary-fixed-dim": "#c0c1ff", "tertiary-container": "#008096", "on-secondary-container": "#00714d", "on-error": "#ffffff", "error-container": "#ffdad6", "on-secondary-fixed-variant": "#005236", "secondary-fixed": "#6ffbbe", "on-tertiary": "#ffffff", "outline-variant": "#c7c4d7", "error": "#ba1a1a", "on-tertiary-fixed-variant": "#004e5c", "on-error-container": "#93000a", "surface-container-high": "#dce9ff", "tertiary": "#006577" }, "borderRadius": { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" }, "spacing": { "space-md": "1rem", "space-2xs": "0.25rem", "margin": "1.75rem", "space-sm": "0.75rem", "space-xl": "2rem", "space-lg": "1.5rem", "space-2xl": "2.5rem", "gutter": "1.25rem", "gutter-mobile": "0.75rem", "margin-mobile": "1rem", "space-xs": "0.5rem" }, "fontFamily": { "display-md": ["Plus Jakarta Sans"], "label-sm": ["Plus Jakarta Sans"], "label-caps": ["Plus Jakarta Sans"], "body-sm": ["Plus Jakarta Sans"], "headline-lg": ["Plus Jakarta Sans"], "body-md": ["Plus Jakarta Sans"], "body-lg": ["Plus Jakarta Sans"], "title-sm": ["Plus Jakarta Sans"], "label-md": ["Plus Jakarta Sans"], "headline-md": ["Plus Jakarta Sans"], "display-lg": ["Plus Jakarta Sans"] }, "fontSize": { "display-md": ["26px", { "lineHeight": "34px", "letterSpacing": "-0.015em", "fontWeight": "700" }], "label-sm": ["11px", { "lineHeight": "16px", "fontWeight": "600" }], "label-caps": ["11px", { "lineHeight": "16px", "letterSpacing": "0.08em", "fontWeight": "700" }], "body-sm": ["12px", { "lineHeight": "18px", "fontWeight": "400" }], "headline-lg": ["20px", { "lineHeight": "28px", "letterSpacing": "-0.01em", "fontWeight": "600" }], "body-md": ["14px", { "lineHeight": "20px", "fontWeight": "400" }], "body-lg": ["15px", { "lineHeight": "22px", "fontWeight": "400" }], "title-sm": ["14px", { "lineHeight": "20px", "fontWeight": "600" }], "label-md": ["13px", { "lineHeight": "18px", "fontWeight": "500" }], "headline-md": ["16px", { "lineHeight": "24px", "letterSpacing": "-0.005em", "fontWeight": "600" }], "display-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700" }] } } } };</script></head><body class="bg-surface font-body-md text-on-surface antialiased"><aside class="fixed left-0 top-0 h-full w-[260px] bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between"><div class="flex flex-col"><div class="h-[68px] px-space-lg flex items-center gap-space-sm bg-surface-container-lowest"><div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-primary-container flex items-center justify-center text-on-primary shadow-sm"><span class="material-symbols-outlined text-[20px]">account_balance_wallet</span></div><div class="flex flex-col min-w-0"><span class="font-headline-md text-headline-md tracking-tight text-on-surface truncate">SI-KASANG ERP</span><span class="font-label-sm text-label-sm text-on-surface-variant truncate">Mohammad Husi</span></div></div><div class="px-space-md py-space-sm overflow-y-auto max-h-[calc(100vh-140px)]"><div class="px-space-xs pt-space-xs pb-space-2xs"><span class="font-label-caps text-label-caps uppercase text-outline tracking-wider">Dashboard</span></div><nav class="flex flex-col gap-space-2xs" data-active-classes="bg-surface-container-high text-primary font-title-sm shadow-sm"><a aria-current="page" class="flex items-center gap-space-sm px-space-sm py-space-xs rounded-lg transition-all bg-surface-container-high text-primary font-title-sm shadow-sm" data-path="ikhtisar-finansial" href="#"><span class="material-symbols-outlined text-[18px]">grid_view</span><span class="truncate">Default / Ikhtisar</span></a><a class="flex items-center gap-space-sm px-space-sm py-space-xs rounded-lg text-on-surface-variant font-body-md text-body-md hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="analisis-kas" href="#"><span class="material-symbols-outlined text-[18px]">insights</span><span class="truncate">Arus Kas &amp; Analisis</span></a><a class="flex items-center gap-space-sm px-space-sm py-space-xs rounded-lg text-on-surface-variant font-body-md text-body-md hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="tata-kelola-server" href="#"><span class="material-symbols-outlined text-[18px]">dns</span><span class="truncate">Server &amp; Tata Kelola</span></a></nav><div class="px-space-xs pt-space-md pb-space-2xs"><span class="font-label-caps text-label-caps uppercase text-outline tracking-wider">Modul Operasional</span></div><nav class="flex flex-col gap-space-2xs" data-active-classes="bg-surface-container-high text-primary font-title-sm shadow-sm"><a class="flex items-center gap-space-sm px-space-sm py-space-xs rounded-lg text-on-surface-variant font-body-md text-body-md hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="kas-iuran-mahasiswa" href="#"><span class="material-symbols-outlined text-[18px]">payments</span><span class="truncate">Kas &amp; Iuran (FR-01/02)</span></a><a class="flex items-center gap-space-sm px-space-sm py-space-xs rounded-lg text-on-surface-variant font-body-md text-body-md hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="pengadaan-approval" href="#"><span class="material-symbols-outlined text-[18px]">verified</span><span class="truncate">Pengadaan (FR-04/05)</span></a><a class="flex items-center gap-space-sm px-space-sm py-space-xs rounded-lg text-on-surface-variant font-body-md text-body-md hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="inventaris-aset-ti" href="#"><span class="material-symbols-outlined text-[18px]">inventory_2</span><span class="truncate">Aset TI (FR-06/07)</span></a><a class="flex items-center gap-space-sm px-space-sm py-space-xs rounded-lg text-on-surface-variant font-body-md text-body-md hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="log-audit-governance" href="#"><span class="material-symbols-outlined text-[18px]">security</span><span class="truncate">Audit Log (FR-08/09)</span></a></nav><div class="px-space-xs pt-space-md pb-space-2xs"><span class="font-label-caps text-label-caps uppercase text-outline tracking-wider">Sistem &amp; Laporan</span></div><nav class="flex flex-col gap-space-2xs" data-active-classes="bg-surface-container-high text-primary font-title-sm shadow-sm"><a class="flex items-center gap-space-sm px-space-sm py-space-xs rounded-lg text-on-surface-variant font-body-md text-body-md hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="ekspor-laporan-uat" href="#"><span class="material-symbols-outlined text-[18px]">description</span><span class="truncate">Ekspor &amp; Laporan UAT</span></a><a class="flex items-center gap-space-sm px-space-sm py-space-xs rounded-lg text-on-surface-variant font-body-md text-body-md hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="coolify-vps-database" href="#"><span class="material-symbols-outlined text-[18px]">database</span><span class="truncate">VPS &amp; Database</span></a></nav></div></div><div class="p-space-sm m-space-sm rounded-xl bg-surface-container-low"><div class="flex items-center justify-between"><div class="flex items-center gap-space-xs"><span class="relative flex h-2.5 w-2.5"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed-dim opacity-75"></span><span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span></span><span class="font-label-sm text-label-sm text-on-surface font-semibold">Coolify VPS</span></div><span class="font-label-sm text-label-sm text-secondary font-medium">142ms</span></div><div class="mt-space-2xs flex items-center justify-between text-outline"><span class="font-body-sm text-body-sm">IT Governance v2.4</span><span class="font-label-sm text-label-sm text-secondary bg-secondary-container/40 px-1.5 py-0.5 rounded">ONLINE</span></div></div></aside><div class="pl-[260px]"><header class="fixed top-0 left-[260px] right-0 h-[68px] bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg"><div class="flex items-center gap-space-md"><button class="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors" type="button"><span class="material-symbols-outlined text-[20px]">menu</span></button><div class="relative flex items-center w-80 lg:w-96"><span class="material-symbols-outlined absolute left-3 text-outline text-[18px]">search</span><input class="w-full pl-9 pr-14 py-space-xs bg-surface-container-low rounded-full font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search dashboards, transactions, NIM..." type="text"/><div class="absolute right-2 px-1.5 py-0.5 rounded bg-surface-container-lowest text-outline font-label-sm text-label-sm shadow-sm select-none">Ctrl K</div></div></div><div class="flex items-center gap-space-sm"><button class="w-9 h-9 flex items-center justify-center rounded-full hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors" title="Fullscreen" type="button"><span class="material-symbols-outlined text-[20px]">fullscreen</span></button><button class="w-9 h-9 flex items-center justify-center rounded-full hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors" title="Toggle Mode" type="button"><span class="material-symbols-outlined text-[20px]">light_mode</span></button><button class="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors" title="Notifications" type="button"><span class="material-symbols-outlined text-[20px]">notifications</span><span class="absolute top-2 right-2 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span></button><div class="h-6 w-[1px] bg-surface-container-high mx-space-2xs"></div><div class="flex items-center gap-space-sm pl-space-2xs"><div class="flex flex-col text-right hidden sm:flex"><span class="font-title-sm text-title-sm text-on-surface font-semibold">Mohammad Husi</span><span class="font-label-sm text-label-sm text-on-surface-variant">Bendahara / Admin (20241230012)</span></div><div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span class="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main class="w-full pt-[68px] px-space-lg py-space-lg bg-surface min-h-screen"><div class="flex flex-col w-full gap-space-lg">
<!-- Header Welcome Banner -->
<div class="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div class="flex flex-col">
<h1 class="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
        Selamat Datang, Mohammad Husi! <span class="font-label-md text-label-md font-semibold text-primary bg-primary-fixed px-2.5 py-0.5 rounded-full ml-1">NIM: 20241230012</span>
</h1>
<p class="font-body-md text-body-md text-on-surface-variant mt-0.5">
        Berikut adalah ikhtisar lengkap tata kelola finansial, iuran mahasiswa, dan pengadaan kas angkatan.
      </p>
</div>
<div class="flex items-center gap-space-xs shrink-0">
<button class="flex items-center gap-space-2xs px-3.5 py-2 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container-high transition-all" type="button">
<span class="material-symbols-outlined text-[18px] text-on-surface-variant">download</span>
<span>Download Laporan Kas</span>
</button>
<button class="flex items-center gap-space-2xs px-4 py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md shadow-md hover:bg-primary-container transition-all" type="button">
<span class="material-symbols-outlined text-[18px]">add</span>
<span>+ Buat Transaksi Baru</span>
</button>
</div>
</div>
<!-- Top Row: 4 Vivid Gradient Stat KPI Cards (Strict DropX Aesthetic) -->
<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
<!-- Card 1: Purple / Violet Gradient -->
<div class="relative overflow-hidden rounded-2xl p- space-md p-5 bg-gradient-to-br from-[#6754e8] to-[#5136d8] text-white shadow-[0_8px_20px_-4px_rgba(99,84,232,0.3)]">
<div class="flex items-center justify-between">
<span class="font-label-md text-label-md text-white/80 font-medium">Total Saldo Kas Angkatan</span>
<div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm text-white">
<span class="material-symbols-outlined text-[20px]">payments</span>
</div>
</div>
<div class="mt-3">
<div class="font-display-lg text-display-lg font-bold tracking-tight text-white leading-none">Rp 28.450.000</div>
<div class="flex items-center gap-1.5 mt-2.5 text-white/90 font-label-sm text-label-sm">
<span class="font-bold">↑ 18.2%</span>
<span class="text-white/70">vs bulan lalu</span>
</div>
</div>
<div class="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/5 pointer-events-none"></div>
</div>
<!-- Card 2: Vibrant Emerald / Teal Green Gradient -->
<div class="relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-[#059669] to-[#047857] text-white shadow-[0_8px_20px_-4px_rgba(5,150,105,0.3)]">
<div class="flex items-center justify-between">
<span class="font-label-md text-label-md text-white/80 font-medium">Mahasiswa Terverifikasi (Lunas)</span>
<div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm text-white">
<span class="material-symbols-outlined text-[20px]">group</span>
</div>
</div>
<div class="mt-3">
<div class="font-display-lg text-display-lg font-bold tracking-tight text-white leading-none">104 / 120</div>
<div class="flex items-center gap-1.5 mt-2.5 text-white/90 font-label-sm text-label-sm">
<span class="font-bold">↑ 12.5%</span>
<span class="text-white/70">kepatuhan iuran minggu ini</span>
</div>
</div>
<div class="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/5 pointer-events-none"></div>
</div>
<!-- Card 3: Ocean Blue / Cyan Gradient -->
<div class="relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-[#0284c7] to-[#0369a1] text-white shadow-[0_8px_20px_-4px_rgba(2,132,199,0.3)]">
<div class="flex items-center justify-between">
<span class="font-label-md text-label-md text-white/80 font-medium">Pengadaan Disetujui</span>
<div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm text-white">
<span class="material-symbols-outlined text-[20px]">shopping_bag</span>
</div>
</div>
<div class="mt-3">
<div class="font-display-lg text-display-lg font-bold tracking-tight text-white leading-none">Rp 4.250.000</div>
<div class="flex items-center gap-1.5 mt-2.5 text-white/90 font-label-sm text-label-sm">
<span class="font-bold">↑ 8.7%</span>
<span class="text-white/70">8 Proposal • 100% Selesai Audit</span>
</div>
</div>
<div class="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/5 pointer-events-none"></div>
</div>
<!-- Card 4: Coral / Warm Orange Gradient -->
<div class="relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-[#ea580c] to-[#c2410c] text-white shadow-[0_8px_20px_-4px_rgba(234,88,12,0.3)]">
<div class="flex items-center justify-between">
<span class="font-label-md text-label-md text-white/80 font-medium">Rasio Kepatuhan Iuran</span>
<div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm text-white">
<span class="material-symbols-outlined text-[20px]">trending_up</span>
</div>
</div>
<div class="mt-3">
<div class="font-display-lg text-display-lg font-bold tracking-tight text-white leading-none">92.5%</div>
<div class="flex items-center gap-1.5 mt-2.5 text-white/90 font-label-sm text-label-sm">
<span class="font-bold">↑ 2.1%</span>
<span class="text-white/70">target mingguan tercapai</span>
</div>
</div>
<div class="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/5 pointer-events-none"></div>
</div>
</div>
<!-- Second Row: Quick Feature Navigation Cards (6 White Cards Grid from DropX) -->
<div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-space-sm">
<a class="bg-surface-container-lowest rounded-xl p-4 flex flex-col items-center text-center shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:shadow-md hover:-translate-y-0.5 transition-all" href="#">
<div class="w-10 h-10 rounded-xl bg-purple-50 text-[#6754e8] flex items-center justify-center mb-2.5">
<span class="material-symbols-outlined text-[22px]">payments</span>
</div>
<span class="font-title-sm text-title-sm text-on-surface font-semibold">Iuran Kas</span>
<span class="font-body-sm text-body-sm text-on-surface-variant truncate w-full mt-0.5">Buku besar &amp; rekonsiliasi</span>
</a>
<a class="bg-surface-container-lowest rounded-xl p-4 flex flex-col items-center text-center shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:shadow-md hover:-translate-y-0.5 transition-all" href="#">
<div class="w-10 h-10 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center mb-2.5">
<span class="material-symbols-outlined text-[22px]">assignment_turned_in</span>
</div>
<span class="font-title-sm text-title-sm text-on-surface font-semibold">Pengadaan</span>
<span class="font-body-sm text-body-sm text-on-surface-variant truncate w-full mt-0.5">Usulan &amp; approval flow</span>
</a>
<a class="bg-surface-container-lowest rounded-xl p-4 flex flex-col items-center text-center shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:shadow-md hover:-translate-y-0.5 transition-all" href="#">
<div class="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center mb-2.5">
<span class="material-symbols-outlined text-[22px]">devices</span>
</div>
<span class="font-title-sm text-title-sm text-on-surface font-semibold">Inventaris Aset</span>
<span class="font-body-sm text-body-sm text-on-surface-variant truncate w-full mt-0.5">Katalog lab &amp; pinjaman</span>
</a>
<a class="bg-surface-container-lowest rounded-xl p-4 flex flex-col items-center text-center shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:shadow-md hover:-translate-y-0.5 transition-all" href="#">
<div class="w-10 h-10 rounded-xl bg-indigo-50 text-[#4648d4] flex items-center justify-center mb-2.5">
<span class="material-symbols-outlined text-[22px]">shield_person</span>
</div>
<span class="font-title-sm text-title-sm text-on-surface font-semibold">Log Audit TI</span>
<span class="font-body-sm text-body-sm text-on-surface-variant truncate w-full mt-0.5">Jejak ISO 27001 &amp; RBAC</span>
</a>
<a class="bg-surface-container-lowest rounded-xl p-4 flex flex-col items-center text-center shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:shadow-md hover:-translate-y-0.5 transition-all" href="#">
<div class="w-10 h-10 rounded-xl bg-cyan-50 text-[#008096] flex items-center justify-center mb-2.5">
<span class="material-symbols-outlined text-[22px]">cloud_done</span>
</div>
<span class="font-title-sm text-title-sm text-on-surface font-semibold">Server &amp; DB</span>
<span class="font-body-sm text-body-sm text-on-surface-variant truncate w-full mt-0.5">Coolify 142ms latency</span>
</a>
<a class="bg-surface-container-lowest rounded-xl p-4 flex flex-col items-center text-center shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:shadow-md hover:-translate-y-0.5 transition-all" href="#">
<div class="w-10 h-10 rounded-xl bg-rose-50 text-[#e11d48] flex items-center justify-center mb-2.5">
<span class="material-symbols-outlined text-[22px]">support_agent</span>
</div>
<span class="font-title-sm text-title-sm text-on-surface font-semibold">Helpdesk &amp; WA</span>
<span class="font-body-sm text-body-sm text-on-surface-variant truncate w-full mt-0.5">Reminder broadcast</span>
</a>
</div>
<!-- Third Row: Main Visual Analytics Split (Line Chart & DropX Purple Bar Chart) -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-space-md">
<!-- Left Card: Arus Kas Masuk & Pengeluaran -->
<div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-[0_1px_6px_rgba(0,0,0,0.03)] flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-4">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[20px]">account_balance</span>
<h2 class="font-headline-md text-headline-md font-bold text-on-surface">Arus Kas Masuk &amp; Pengeluaran</h2>
</div>
<a class="font-label-md text-label-md text-primary font-semibold hover:underline flex items-center gap-1" href="#">
<span>Lihat rincian</span>
<span class="material-symbols-outlined text-[16px]">arrow_outward</span>
</a>
</div>
<div class="flex items-center gap-space-md text-outline font-body-sm text-body-sm mb-4">
<div class="flex items-center gap-1.5">
<span class="w-2.5 h-2.5 rounded-full bg-primary"></span>
<span>Kas Masuk (Iuran)</span>
</div>
<div class="flex items-center gap-1.5">
<span class="w-2.5 h-2.5 rounded-full bg-outline-variant"></span>
<span>Kas Keluar (Pengadaan)</span>
</div>
</div>
<!-- SVG Line Chart with Gradient Fill -->
<div class="relative w-full h-[220px]">
<svg class="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 540 200">
<defs>
<lineargradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#4648d4" stop-opacity="0.25"></stop>
<stop offset="100%" stop-color="#4648d4" stop-opacity="0.0"></stop>
</lineargradient>
</defs>
<!-- Horizontal Grid lines -->
<line stroke="#f1f5f9" stroke-width="1" x1="40" x2="540" y1="20" y2="20"></line>
<line stroke="#f1f5f9" stroke-width="1" x1="40" x2="540" y1="65" y2="65"></line>
<line stroke="#f1f5f9" stroke-width="1" x1="40" x2="540" y1="110" y2="110"></line>
<line stroke="#f1f5f9" stroke-dasharray="3 3" stroke-width="1" x1="40" x2="540" y1="155" y2="155"></line>
<!-- Y-Axis Labels -->
<text fill="#94a3b8" font-family="inherit" font-size="11" text-anchor="end" x="32" y="24">60jt</text>
<text fill="#94a3b8" font-family="inherit" font-size="11" text-anchor="end" x="32" y="69">45jt</text>
<text fill="#94a3b8" font-family="inherit" font-size="11" text-anchor="end" x="32" y="114">30jt</text>
<text fill="#94a3b8" font-family="inherit" font-size="11" text-anchor="end" x="32" y="159">15jt</text>
<!-- Filled Spline Area -->
<path d="M 45 145 C 110 135, 150 100, 210 115 C 270 130, 310 90, 370 85 C 430 80, 480 35, 535 25 L 535 170 L 45 170 Z" fill="url(#areaGradient)"></path>
<!-- Primary Smooth Line -->
<path d="M 45 145 C 110 135, 150 100, 210 115 C 270 130, 310 90, 370 85 C 430 80, 480 35, 535 25" fill="none" stroke="#4648d4" stroke-linecap="round" stroke-width="3"></path>
<!-- Highlight Peak Dot -->
<circle cx="370" cy="85" fill="#ffffff" r="4" stroke="#4648d4" stroke-width="3"></circle>
<circle cx="535" cy="25" fill="#4648d4" r="5"></circle>
</svg>
</div>
</div>
<!-- X-Axis Labels -->
<div class="flex justify-between pl-10 pr-2 pt-2 text-outline font-label-sm text-label-sm">
<span>Jan</span>
<span>Feb</span>
<span>Mar</span>
<span>Apr</span>
<span>Mei</span>
<span>Jun</span>
<span>Jul</span>
<span>Agu</span>
</div>
</div>
<!-- Right Card: Aktivitas Iuran per Hari / Minggu (Site Traffic Bar Aesthetic) -->
<div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-[0_1px_6px_rgba(0,0,0,0.03)] flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-4">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-[#6754e8] text-[20px]">calendar_month</span>
<h2 class="font-headline-md text-headline-md font-bold text-on-surface">Aktivitas Iuran per Hari / Minggu</h2>
</div>
<a class="font-label-md text-label-md text-primary font-semibold hover:underline flex items-center gap-1" href="#">
<span>Detail</span>
<span class="material-symbols-outlined text-[16px]">arrow_outward</span>
</a>
</div>
<div class="relative w-full h-[220px] flex items-end">
<!-- Y-Axis Labels Left Side -->
<div class="h-full flex flex-col justify-between text-outline font-label-sm text-label-sm pr-3 pb-6 select-none">
<span>6000</span>
<span>4500</span>
<span>3000</span>
<span>1500</span>
<span>0</span>
</div>
<!-- Bar Chart Columns Container -->
<div class="flex-1 h-full flex items-end justify-between gap-2 sm:gap-4 pb-6 relative">
<!-- Background guidelines -->
<div class="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6">
<div class="w-full h-px bg-surface-container"></div>
<div class="w-full h-px bg-surface-container"></div>
<div class="w-full h-px bg-surface-container"></div>
<div class="w-full h-px bg-surface-container"></div>
<div class="w-full h-px bg-surface-container"></div>
</div>
<!-- Monday -->
<div class="flex-1 flex flex-col items-center h-full justify-end z-10 group cursor-pointer">
<div class="w-full max-w-[36px] bg-[#7c69ef] rounded-md transition-all group-hover:bg-[#6049e7]" style="height: 52%;"></div>
</div>
<!-- Tuesday -->
<div class="flex-1 flex flex-col items-center h-full justify-end z-10 group cursor-pointer">
<div class="w-full max-w-[36px] bg-[#7c69ef] rounded-md transition-all group-hover:bg-[#6049e7]" style="height: 68%;"></div>
</div>
<!-- Wednesday -->
<div class="flex-1 flex flex-col items-center h-full justify-end z-10 group cursor-pointer">
<div class="w-full max-w-[36px] bg-[#7c69ef] rounded-md transition-all group-hover:bg-[#6049e7]" style="height: 64%;"></div>
</div>
<!-- Thursday (Peak) -->
<div class="flex-1 flex flex-col items-center h-full justify-end z-10 group cursor-pointer">
<div class="w-full max-w-[36px] bg-[#6754e8] rounded-md transition-all group-hover:bg-[#503cd1] shadow-sm" style="height: 94%;"></div>
</div>
<!-- Friday -->
<div class="flex-1 flex flex-col items-center h-full justify-end z-10 group cursor-pointer">
<div class="w-full max-w-[36px] bg-[#7c69ef] rounded-md transition-all group-hover:bg-[#6049e7]" style="height: 78%;"></div>
</div>
<!-- Saturday -->
<div class="flex-1 flex flex-col items-center h-full justify-end z-10 group cursor-pointer">
<div class="w-full max-w-[36px] bg-[#7c69ef] rounded-md transition-all group-hover:bg-[#6049e7]" style="height: 50%;"></div>
</div>
<!-- Sunday -->
<div class="flex-1 flex flex-col items-center h-full justify-end z-10 group cursor-pointer">
<div class="w-full max-w-[36px] bg-[#7c69ef] rounded-md transition-all group-hover:bg-[#6049e7]" style="height: 44%;"></div>
</div>
</div>
</div>
</div>
<!-- X-Axis Labels -->
<div class="flex justify-between pl-10 pr-2 text-outline font-label-sm text-label-sm">
<span class="flex-1 text-center">Sen</span>
<span class="flex-1 text-center">Sel</span>
<span class="flex-1 text-center">Rab</span>
<span class="flex-1 text-center font-bold text-primary">Kam</span>
<span class="flex-1 text-center">Jum</span>
<span class="flex-1 text-center">Sab</span>
<span class="flex-1 text-center">Min</span>
</div>
</div>
</div>
<!-- Fourth Row: Recent Transactions Table & IT Governance Status Widget -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
<!-- Left 2/3: Mutasi Kas Terkini (Ledger Audit Real-Time) -->
<div class="lg:col-span-2 bg-surface-container-lowest rounded-2xl p-space-lg shadow-[0_1px_6px_rgba(0,0,0,0.03)]">
<div class="flex items-center justify-between mb-4">
<div>
<h2 class="font-headline-md text-headline-md font-bold text-on-surface">Mutasi Kas Terkini (Ledger Audit Real-Time)</h2>
<p class="font-body-sm text-body-sm text-on-surface-variant">Log transaksi terverifikasi dengan tanda tangan digital SHA-256</p>
</div>
<div class="flex items-center gap-1.5">
<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-outline font-label-sm text-label-sm">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Sync Otomatis
          </span>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left">
<thead>
<tr class="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider">
<th class="py-2.5 px-3 rounded-l-lg">ID &amp; Waktu</th>
<th class="py-2.5 px-3">Mahasiswa / PIC</th>
<th class="py-2.5 px-3">Kategori</th>
<th class="py-2.5 px-3">Nominal</th>
<th class="py-2.5 px-3 rounded-r-lg">Status &amp; Approval</th>
</tr>
</thead>
<tbody class="divide-y divide-surface-container-high/60 font-body-sm text-body-sm text-on-surface">
<!-- Row 1 -->
<tr class="hover:bg-surface-container-low/50 transition-colors">
<td class="py-3 px-3">
<div class="font-semibold text-primary">#TRX-2025-089</div>
<div class="font-label-sm text-label-sm text-outline">Hari ini, 10:14 WIB</div>
</td>
<td class="py-3 px-3">
<div class="font-semibold text-on-surface">Siti Rahmawati</div>
<div class="font-label-sm text-label-sm text-on-surface-variant">NIM: 20241230045</div>
</td>
<td class="py-3 px-3">
<span class="px-2 py-0.5 rounded-md bg-purple-100 text-purple-700 font-label-sm text-label-sm font-semibold">Iuran Bulanan</span>
</td>
<td class="py-3 px-3 font-semibold text-secondary">
                +Rp 50.000
              </td>
<td class="py-3 px-3">
<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span class="material-symbols-outlined text-[14px]">check_circle</span>
                  Lunas
                </span>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-surface-container-low/50 transition-colors">
<td class="py-3 px-3">
<div class="font-semibold text-primary">#TRX-2025-088</div>
<div class="font-label-sm text-label-sm text-outline">Kemarin, 16:40 WIB</div>
</td>
<td class="py-3 px-3">
<div class="font-semibold text-on-surface">Mohammad Husi</div>
<div class="font-label-sm text-label-sm text-on-surface-variant">Bendahara Angkatan</div>
</td>
<td class="py-3 px-3">
<span class="px-2 py-0.5 rounded-md bg-blue-100 text-blue-700 font-label-sm text-label-sm font-semibold">Pengadaan Lab</span>
</td>
<td class="py-3 px-3 font-semibold text-error">
                -Rp 1.450.000
              </td>
<td class="py-3 px-3">
<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-semibold">
<span class="material-symbols-outlined text-[14px]">verified</span>
                  Disetujui
                </span>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-surface-container-low/50 transition-colors">
<td class="py-3 px-3">
<div class="font-semibold text-primary">#TRX-2025-087</div>
<div class="font-label-sm text-label-sm text-outline">21 Mei 2025</div>
</td>
<td class="py-3 px-3">
<div class="font-semibold text-on-surface">Rayhan Pratama</div>
<div class="font-label-sm text-label-sm text-on-surface-variant">NIM: 20241230089</div>
</td>
<td class="py-3 px-3">
<span class="px-2 py-0.5 rounded-md bg-purple-100 text-purple-700 font-label-sm text-label-sm font-semibold">Iuran Bulanan</span>
</td>
<td class="py-3 px-3 font-semibold text-secondary">
                +Rp 50.000
              </td>
<td class="py-3 px-3">
<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 font-label-sm text-label-sm font-semibold">
<span class="material-symbols-outlined text-[14px]">hourglass_top</span>
                  Verifikasi
                </span>
</td>
</tr>
<!-- Row 4 -->
<tr class="hover:bg-surface-container-low/50 transition-colors">
<td class="py-3 px-3">
<div class="font-semibold text-primary">#TRX-2025-086</div>
<div class="font-label-sm text-label-sm text-outline">20 Mei 2025</div>
</td>
<td class="py-3 px-3">
<div class="font-semibold text-on-surface">Divisi Acara Seminar</div>
<div class="font-label-sm text-label-sm text-on-surface-variant">PIC: Anisa Tri</div>
</td>
<td class="py-3 px-3">
<span class="px-2 py-0.5 rounded-md bg-teal-100 text-teal-700 font-label-sm text-label-sm font-semibold">Sewa Domain &amp; VPS</span>
</td>
<td class="py-3 px-3 font-semibold text-error">
                -Rp 450.000
              </td>
<td class="py-3 px-3">
<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span class="material-symbols-outlined text-[14px]">check_circle</span>
                  Lunas
                </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<!-- Right 1/3: Server & Governance Widget -->
<div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-[0_1px_6px_rgba(0,0,0,0.03)] flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-4">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[20px]">security</span>
<h2 class="font-headline-md text-headline-md font-bold text-on-surface">Tata Kelola &amp; Node VPS</h2>
</div>
<span class="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
</div>
<div class="space-y-3">
<!-- Item 1: Coolify Status -->
<div class="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
<div class="flex items-center gap-2.5">
<div class="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
<span class="material-symbols-outlined text-[18px]">dns</span>
</div>
<div class="flex flex-col">
<span class="font-title-sm text-title-sm text-on-surface">Coolify Deployment</span>
<span class="font-label-sm text-label-sm text-outline">Latensi: 142ms • Singapore</span>
</div>
</div>
<span class="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container/50 text-secondary font-bold">ONLINE</span>
</div>
<!-- Item 2: PostgreSQL Cluster -->
<div class="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
<div class="flex items-center gap-2.5">
<div class="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
<span class="material-symbols-outlined text-[18px]">database</span>
</div>
<div class="flex flex-col">
<span class="font-title-sm text-title-sm text-on-surface">PostgreSQL Cluster</span>
<span class="font-label-sm text-label-sm text-outline">WAL Replication 100% Sync</span>
</div>
</div>
<span class="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container/50 text-secondary font-bold">HEALTHY</span>
</div>
<!-- Item 3: Immutable Hash -->
<div class="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
<div class="flex items-center gap-2.5">
<div class="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-sm">
<span class="material-symbols-outlined text-[18px]">lock</span>
</div>
<div class="flex flex-col">
<span class="font-title-sm text-title-sm text-on-surface">Audit Ledger SHA-256</span>
<span class="font-label-sm text-label-sm text-outline">Immutable Merkle Root verified</span>
</div>
</div>
<span class="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-bold">PASS</span>
</div>
</div>
</div>
<!-- Governance Meta Footer -->
<div class="pt-4 mt-4 border-t border-surface-container flex items-center justify-between text-outline font-label-sm text-label-sm">
<span>Prinsip SOD (Segregation of Duties)</span>
<span class="font-semibold text-on-surface-variant">Aktif • ISO/IEC 27001</span>
</div>
</div>
</div>
</div></main></div></body></html>
