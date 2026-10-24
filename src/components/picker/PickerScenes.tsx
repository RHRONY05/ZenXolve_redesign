import React from "react";
import Image from "next/image";
import { FlowCard, Msg, MockBrowser, MockPhone, SceneLabel, SceneNote } from "./Mock";
import type { PickKey } from "@/content/picker";

const Step = ({
  n,
  t,
  className = "flex",
  children,
}: {
  n: string;
  t: string;
  className?: string;
  children: React.ReactNode;
}) => (
  <div className={`${className} items-center gap-3 border-b border-white/10 py-2 last:border-b-0 md:py-2.5`}>
    <span className="grid size-[22px] place-items-center rounded-md bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 font-mono text-[11px] font-bold text-[#c4b5fd] md:size-[26px]">
      {n}
    </span>
    <span className="text-slate-200 text-xs md:text-sm font-medium">{children}</span>
    <span className="ml-auto font-mono text-[11px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
      {t}
    </span>
  </div>
);

/** Tab 1: AI WhatsApp Sales Agent for Apex Athletics (Sports & Performance Footwear) */
function AgentScene({ label }: { label: string }) {
  return (
    <>
      <SceneLabel>{label}</SceneLabel>
      <MockPhone
        className="top-12 left-[18px] h-[370px] w-[210px] rounded-[32px] p-2 md:top-[64px] md:left-10 md:h-[530px] md:w-[265px] md:rounded-[38px] md:p-2.5"
        screenClassName="rounded-[26px] md:rounded-[32px] bg-[#0b141a] overflow-hidden"
      >
        {/* WhatsApp Real Mobile Header */}
        <div className="bg-[#1f2c34] px-3.5 pt-7 pb-2.5 border-b border-white/10 flex items-center gap-2.5 shrink-0">
          <svg className="size-4 text-slate-300 -ml-0.5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          {/* Elegant geometric performance star brand mark */}
          <div className="size-8 rounded-full bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 flex items-center justify-center shadow-[0_0_12px_rgba(139,92,246,0.5)]">
            <svg className="size-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6Z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-white truncate flex items-center gap-1">
              <span>Apex Athletics</span>
              <svg className="size-3 text-cyan-400 inline" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-normal">
              <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse" />
              AI Concierge · Online
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </div>
        </div>

        {/* WhatsApp Chat Thread: 2-sided conversation UI (Left / Right) */}
        <div
          className="flex flex-col gap-2 p-2.5 md:p-3 text-xs leading-snug md:text-[12px] overflow-hidden select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* 01: Customer message (Left, Incoming from customer) */}
          <Msg time="10:24">
            <span className="md:hidden">Hi! Got AeroPulse Pro in size 10.5?</span>
            <span className="hidden md:inline">Hi! Do you have the AeroPulse Pro Runner in size 10.5 in stock?</span>
          </Msg>

          {/* 02: AI Concierge reply (Right, Outgoing response with card) */}
          <Msg me time="10:24 ✓✓">
            <div>
              <p className="font-medium text-white mb-1">Hey Alex! 👟 2 pairs left in Volt White. Reserved:</p>
              <div className="rounded-lg bg-black/40 border border-white/10 p-1.5 text-[10.5px] leading-tight space-y-0.5 mb-1">
                <div className="flex justify-between text-slate-200">
                  <span>👟 AeroPulse Pro (US 10.5)</span>
                  <span className="font-mono text-[#67e8f9]">$185</span>
                </div>
                <div className="flex justify-between text-slate-200">
                  <span>🧦 Carbon Grip Socks</span>
                  <span className="font-mono text-[#67e8f9]">$25</span>
                </div>
                <div className="flex justify-between text-white font-bold border-t border-white/15 pt-0.5">
                  <span>Total (Free Shipping)</span>
                  <span className="font-mono text-[#67e8f9]">$210</span>
                </div>
              </div>
              <p className="text-slate-200">Lock in your pair before it sells out?</p>
            </div>
          </Msg>

          {/* 03: Customer confirmation (Left, Incoming from customer) */}
          <Msg time="10:25">
            <span>Yes please, lock it in!</span>
          </Msg>

          {/* 04: AI Concierge confirmation (Right, Outgoing confirmation) */}
          <Msg me time="10:25 ✓✓">
            <span>Done! ✅ Reserved 15m. Stripe link: pay.apexgear.com/inv_8912</span>
          </Msg>
        </div>
      </MockPhone>

      {/* Workflow Architecture Card */}
      <FlowCard className="top-[225px] left-[135px] w-[205px] p-3 text-xs md:top-[90px] md:left-[325px] md:w-[310px] md:p-5 md:text-sm">
        <div className="font-mono mb-2 text-[10px] uppercase tracking-wider text-[#a78bfa] flex items-center gap-1.5 md:text-xs">
          <span className="size-1.5 rounded-full bg-[#67e8f9] shadow-[0_0_6px_#67e8f9]" />
          <span>What happened behind it</span>
        </div>
        <Step n="01" t="0.0s">
          <span>WhatsApp webhook in</span>
        </Step>
        <Step n="02" t="0.3s">
          <span>Live inventory verified</span>
        </Step>
        <Step n="03" t="0.7s" className="hidden md:flex">
          <span>Customer CRM profile matched</span>
        </Step>
        <Step n="04" t="1.1s">
          <span>Stripe checkout link created</span>
        </Step>
      </FlowCard>

      {/* Metric Stat Card */}
      <FlowCard className="top-[385px] left-[345px] hidden w-[270px] md:block p-5">
        <div className="font-mono text-xs uppercase tracking-wider text-[#a78bfa] flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-[#a78bfa]" />
          This week
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-sans text-3xl font-extrabold text-[#67e8f9] tracking-tight">840 orders</span>
        </div>
        <p className="mt-1 text-xs text-slate-400">processed without human intervention</p>
      </FlowCard>
      <SceneNote />
    </>
  );
}

/** Tab 2: AeroGear Pro Store with REAL Product Images & High-Fidelity Stripe Checkout */
function StoreScene({ label }: { label: string }) {
  const prods = [
    {
      n: "AeroPulse Runner",
      desc: "Carbon Plate · Volt White",
      price: "185",
      tag: "Bestseller",
      img: "/store/product-shoe-side.jpg",
    },
    {
      n: "Apex Watch Ultra",
      desc: "Biometric GPS · Obsidian",
      price: "240",
      tag: "Popular",
      img: "/store/product-smartwatch.jpg",
    },
    {
      n: "Polarized Eyewear",
      desc: "UV400 · Ultralight Frame",
      price: "140",
      tag: "New",
      img: "/store/product-4-eyewear.jpg",
    },
  ];

  return (
    <>
      <SceneLabel>{label}</SceneLabel>
      {/* Background Storefront Browser */}
      <MockBrowser
        url="store.aerogear.io"
        className="top-12 left-[14px] h-[320px] w-[326px] md:top-[64px] md:left-8 md:h-[440px] md:w-[570px]"
      >
        <div className="px-5 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-0.5 text-[11px] font-medium text-cyan-300">
                  <span className="size-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
                  <span>2026 Performance Lab</span>
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">Aerospace Gear</span>
              </div>
              <div className="mt-1.5 font-sans text-xl md:text-2xl font-bold text-white tracking-tight">
                AeroGear Pro Store
              </div>
            </div>
            <span className="font-mono text-xs text-[#67e8f9] px-2.5 py-1 rounded-full bg-[#67e8f9]/10 border border-[#67e8f9]/25 flex items-center gap-1.5">
              <span>Cart · 2 items ($188)</span>
            </span>
          </div>

          {/* Category Filter Pills */}
          <div
            className="mt-3 flex gap-2 overflow-x-auto pb-1 text-xs"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <span className="px-3 py-1 rounded-full bg-white/10 text-white font-medium">All · 34</span>
            <span className="px-3 py-1 rounded-full bg-white/[0.04] text-slate-400 hover:text-white border border-white/10">Footwear · 14</span>
            <span className="px-3 py-1 rounded-full bg-white/[0.04] text-slate-400 hover:text-white border border-white/10">Wearables · 8</span>
            <span className="px-3 py-1 rounded-full bg-white/[0.04] text-slate-400 hover:text-white border border-white/10">Eyewear · 12</span>
          </div>
        </div>

        {/* Real Product Cards with Studio Images */}
        <div className="grid grid-cols-3 gap-3 p-5 pt-3">
          {prods.map((p) => (
            <div key={p.n} className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 flex flex-col justify-between hover:border-white/20 transition-all">
              <div className="relative h-[85px] rounded-lg md:h-[110px] bg-[#111322] overflow-hidden flex items-center justify-center p-1.5 border border-white/5">
                <Image
                  src={p.img}
                  alt={p.n}
                  width={140}
                  height={140}
                  className="h-full w-full object-contain rounded-md"
                />
                <span className="absolute top-1.5 right-1.5 font-mono text-[9px] px-1.5 py-0.5 rounded bg-black/75 text-slate-200 backdrop-blur-sm border border-white/10">
                  {p.tag}
                </span>
              </div>
              <div className="mt-2">
                <b className="block text-xs md:text-[13px] font-semibold text-white truncate">{p.n}</b>
                <span className="text-[10px] text-slate-400 block truncate">{p.desc}</span>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="font-mono text-xs md:text-sm font-bold text-[#67e8f9]">${p.price}</span>
                  <button type="button" className="px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-[11px] font-semibold text-white">
                    + Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MockBrowser>

      {/* Floating Stripe Payment Sheet - Coded to match Stripe Elements exactly */}
      <div
        className="absolute top-[160px] left-[15px] w-[310px] rounded-2xl border border-white/15 bg-[#0e1022]/95 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl md:top-[100px] md:left-[365px] md:w-[325px] md:p-5 text-white"
        style={{ zIndex: 30 }}
      >
        {/* Header with Amount */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <svg className="size-4 text-slate-400 hover:text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            <span className="text-xs font-medium text-slate-300">Stripe Checkout</span>
          </div>
          <span className="font-sans text-lg font-bold text-white tracking-tight">$188.00</span>
        </div>

        <div className="pt-2 text-[11px] text-slate-400 mb-2.5">
          Order #AG-8192 · Guaranteed secure 256-bit encryption
        </div>

        {/* Payment Method Selector Tabs */}
        <div className="grid grid-cols-4 gap-1.5 mb-3 text-[10px] font-medium">
          <div className="flex items-center justify-center gap-1 rounded-lg border-2 border-[#635bff] bg-[#635bff]/15 py-1.5 text-white shadow-[0_0_10px_rgba(99,91,255,0.25)]">
            <span>💳 Card</span>
          </div>
          <div className="flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] py-1.5 text-slate-400 hover:text-white">
            <span>G Pay</span>
          </div>
          <div className="flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] py-1.5 text-slate-400 hover:text-white">
            <span>Affirm</span>
          </div>
          <div className="flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] py-1.5 text-slate-400 hover:text-white">
            <span>Cash App</span>
          </div>
        </div>

        {/* Stripe Elements Card Form */}
        <div className="space-y-2 text-xs">
          <div>
            <label className="block text-[10px] uppercase font-mono text-slate-400 mb-1">Card number</label>
            <div className="relative flex items-center rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-white">
              <span className="font-mono text-xs flex-1 tracking-wider text-slate-200">4242 4242 4242 4242</span>
              <div className="flex items-center gap-1 text-[9px] font-bold">
                <span className="px-1 py-0.5 rounded bg-[#1a1f71] text-white">VISA</span>
                <span className="px-1 py-0.5 rounded bg-[#eb001b] text-white">MC</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[10px] uppercase font-mono text-slate-400 mb-1">Expiration</label>
              <div className="rounded-lg border border-white/15 bg-black/40 px-3 py-1.5 font-mono text-xs text-slate-200">
                12 / 28
              </div>
            </div>
            <div>
              <label className="block text-[10px] uppercase font-mono text-slate-400 mb-1">CVC</label>
              <div className="flex items-center justify-between rounded-lg border border-white/15 bg-black/40 px-3 py-1.5 font-mono text-xs text-slate-200">
                <span>•••</span>
                <svg className="size-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <rect width="20" height="14" x="2" y="5" rx="2"/>
                  <line x1="2" x2="22" y1="10" y2="10"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[10px] uppercase font-mono text-slate-400 mb-1">Country</label>
              <div className="rounded-lg border border-white/15 bg-black/40 px-3 py-1.5 text-[11px] text-slate-200 flex items-center justify-between">
                <span>United States</span>
                <span className="text-[10px] text-slate-400">▾</span>
              </div>
            </div>
            <div>
              <label className="block text-[10px] uppercase font-mono text-slate-400 mb-1">ZIP</label>
              <div className="rounded-lg border border-white/15 bg-black/40 px-3 py-1.5 font-mono text-xs text-slate-200">
                94103
              </div>
            </div>
          </div>
        </div>

        {/* Primary Pay Button */}
        <div className="mt-3">
          <button
            type="button"
            className="w-full rounded-xl bg-gradient-to-r from-[#635bff] to-[#7c3aed] py-2.5 px-4 text-center text-xs font-semibold text-white shadow-[0_4px_16px_rgba(99,91,255,0.4)] hover:brightness-110 flex items-center justify-center gap-1.5 transition-all"
          >
            <span>Pay $188.00</span>
          </button>
        </div>

        {/* Stripe Badge Footer */}
        <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
          <svg className="size-3 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
          </svg>
          <span>Powered by</span>
          <span className="font-bold text-white tracking-wide">stripe</span>
        </div>
      </div>
      <SceneNote />
    </>
  );
}

/** Tab 3: The Live Business Management System / OmniStock B2B Inventory SaaS */
function ErpScene({ label }: { label: string }) {
  const items = [
    {
      n: "AeroPulse Pro Sensor",
      sku: "SKU: AP-902",
      meta: "148 units · Fast-mover",
      price: "240",
      color: "from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30",
      icon: (
        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
    },
    {
      n: "Titanium Mount Assembly",
      sku: "SKU: TM-410",
      meta: "84 units · Bestseller",
      price: "185",
      color: "from-violet-500/20 to-purple-500/20 text-violet-300 border-violet-500/30",
      icon: (
        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <rect width="18" height="18" x="3" y="3" rx="2"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      ),
    },
    {
      n: "CoreLogic Node v2",
      sku: "SKU: CL-108",
      meta: "210 units · In stock",
      price: "320",
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30",
      icon: (
        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <rect width="16" height="16" x="4" y="4" rx="2"/>
          <rect width="6" height="6" x="9" y="9" rx="1"/>
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>
        </svg>
      ),
    },
    {
      n: "UltraSync Gateway",
      sku: "SKU: UG-550",
      meta: "62 units · Low stock",
      price: "145",
      color: "from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30",
      icon: (
        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/>
        </svg>
      ),
    },
    {
      n: "Precision Telemetry Pod",
      sku: "SKU: PT-304",
      meta: "95 units · In stock",
      price: "210",
      color: "from-fuchsia-500/20 to-pink-500/20 text-fuchsia-300 border-fuchsia-500/30",
      icon: (
        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
    },
    {
      n: "Thermal Shield Module",
      sku: "SKU: TS-801",
      meta: "170 units · Active",
      price: "85",
      color: "from-blue-500/20 to-indigo-500/20 text-blue-300 border-blue-500/30",
      icon: (
        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      <SceneLabel>{label}</SceneLabel>
      <MockBrowser
        url="admin.omnistock.io/inventory"
        className="top-10 left-[10px] h-[415px] w-[335px] md:top-[56px] md:left-6 md:h-[530px] md:w-[670px]"
      >
        <div className="flex h-[calc(100%-38px)]">
          {/* Left Mini Sidebar */}
          <div className="hidden md:flex w-[150px] border-r border-white/10 bg-[#070815] p-3 flex-col justify-between shrink-0">
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-white/10">
                {/* Clean 3D stacked cube / layers SaaS icon */}
                <span className="size-6 rounded-lg bg-gradient-to-tr from-[#8b5cf6] to-[#06b6d4] text-white flex items-center justify-center p-1 shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                  <svg className="size-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>
                </span>
                <div>
                  <div className="text-[11px] font-bold text-white leading-tight">OmniStock</div>
                  <div className="text-[9px] text-[#a78bfa] font-mono">Operations Cloud</div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="mt-3 space-y-1 text-[11px]">
                <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-[#8b5cf6]/15 border border-[#8b5cf6]/30 text-[#c4b5fd] font-semibold">
                  <span className="size-1.5 rounded-full bg-[#67e8f9]" />
                  <span>Inventory</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-400 hover:text-white">
                  <span>Orders</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-400 hover:text-white">
                  <span>Warehouses</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-400 hover:text-white">
                  <span>Integrations</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-400 hover:text-white">
                  <span>Settings</span>
                </div>
              </div>
            </div>

            {/* Region / Status Indicator */}
            <div className="flex items-center justify-between p-1.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                <span>US-East</span>
              </span>
              <span className="font-mono text-emerald-400">99.9%</span>
            </div>
          </div>

          {/* Right Main Table Canvas */}
          <div className="flex-1 flex flex-col overflow-hidden bg-[#0c0e22]">
            {/* Top Toolbar */}
            <div className="p-3 md:p-4 border-b border-white/10 flex items-center justify-between shrink-0 bg-white/[0.01]">
              <div>
                <h3 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                  <span>Inventory Catalog</span>
                  <span className="text-[10px] font-normal text-slate-400 hidden sm:inline">· Syncing live to 4 warehouses & Shopify</span>
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] hover:brightness-110 text-white font-semibold text-[11px] flex items-center gap-1 cursor-pointer shadow-[0_0_12px_rgba(139,92,246,0.3)]">
                  + Add item
                </span>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div
              className="px-3 md:px-4 py-2 border-b border-white/5 flex gap-1.5 overflow-x-auto text-[10px] md:text-[11px] shrink-0 bg-white/[0.02]"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <span className="px-2.5 py-0.5 rounded-full bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 text-[#c4b5fd] font-semibold shrink-0">
                All · 64
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5 shrink-0">
                Hardware · 22
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5 shrink-0">
                Electronics · 18
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5 shrink-0">
                Sensors · 14
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5 shrink-0">
                Accessories · 10
              </span>
            </div>

            {/* Item Rows (Close-up, zoomed view) */}
            <div
              className="flex-1 overflow-y-auto px-3 md:px-4 divide-y divide-white/5 text-xs"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="py-2 flex items-center justify-between font-mono text-[10px] uppercase text-slate-500 tracking-wider">
                <span>Item</span>
                <span>Price · In Stock</span>
              </div>

              {items.map((it) => (
                <div key={it.n} className="py-2 flex items-center justify-between gap-3 hover:bg-white/[0.02] rounded px-1 transition-colors">
                  {/* Left: Icon & Names */}
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className={`size-7 md:size-8 rounded-lg bg-gradient-to-tr ${it.color} border p-1.5 flex items-center justify-center shrink-0`}>
                      {it.icon}
                    </div>
                    <div className="min-w-0 truncate">
                      <div className="font-semibold text-white truncate text-[11px] md:text-xs">
                        {it.n}
                      </div>
                      <div className="text-[10px] text-slate-400 flex items-center gap-1.5 truncate">
                        <span className="font-mono text-slate-500">{it.sku}</span>
                        <span>·</span>
                        <span className="text-slate-300">{it.meta}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Price & Active Emerald Toggle */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-mono font-bold text-white text-[11px] md:text-xs">
                      ${it.price}
                    </span>
                    <span className="relative inline-flex h-4 w-7 md:h-5 md:w-9 items-center rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.5)]">
                      <span className="inline-block size-3 md:size-4 translate-x-3.5 md:translate-x-4 rounded-full bg-white transition" />
                    </span>
                    <button
                      type="button"
                      aria-label="Edit item"
                      className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MockBrowser>
      <SceneNote />
    </>
  );
}

export function PickerScene({
  name,
  active,
  label,
}: {
  name: PickKey;
  active: boolean;
  label: string;
}) {
  return (
    <div
      className={`absolute inset-0 transition-all duration-500 ease-out ${
        active
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      {name === "agent" && <AgentScene label={label} />}
      {name === "store" && <StoreScene label={label} />}
      {name === "erp" && <ErpScene label={label} />}
    </div>
  );
}

export const PickerScenes = PickerScene;
