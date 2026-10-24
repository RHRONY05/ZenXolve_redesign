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

/** Tab 1: AI WhatsApp Sales Agent taking real orders */
function AgentScene({ label }: { label: string }) {
  return (
    <>
      <SceneLabel>{label}</SceneLabel>
      <MockPhone
        className="top-12 left-[18px] h-[370px] w-[210px] rounded-[32px] p-2 md:top-[64px] md:left-10 md:h-[530px] md:w-[265px] md:rounded-[38px] md:p-2.5"
        screenClassName="rounded-[26px] md:rounded-[32px] bg-[#0b141a]"
      >
        {/* WhatsApp Real Mobile Header */}
        <div className="bg-[#1f2c34] px-3.5 pt-7 pb-2.5 border-b border-white/10 flex items-center gap-2.5">
          <svg className="size-4 text-slate-300 -ml-0.5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <div className="size-8 rounded-full bg-gradient-to-tr from-amber-600 via-rose-600 to-amber-400 flex items-center justify-center text-xs font-bold text-white shadow-[0_0_10px_rgba(245,158,11,0.4)]">
            🔥
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-white truncate flex items-center gap-1">
              <span>Grill Ghor Bot</span>
              <svg className="size-3 text-cyan-400 inline" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-normal">
              <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse" />
              AI Assistant · Online
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </div>
        </div>

        {/* WhatsApp Chat Bubbles with Live Order Placement */}
        <div className="flex flex-col gap-2.5 p-3 text-xs leading-[1.4] md:text-[13px] overflow-y-auto">
          <Msg time="10:24">
            <span className="md:hidden">Hi! 2 Crispy Chicken and 1 Solo Combo to Dhanmondi?</span>
            <span className="hidden md:inline">Hi! Can I order 2 Crispy Chicken and 1 Solo Combo to Dhanmondi?</span>
          </Msg>

          <Msg me time="10:24 ✓✓">
            <div>
              <p className="font-medium text-white mb-1.5">Fresh & ready! Here is your bill:</p>
              <div className="rounded-lg bg-black/25 border border-white/10 p-2 text-[11px] leading-tight space-y-1 mb-1.5">
                <div className="flex justify-between text-slate-200">
                  <span>🍗 2 × Crispy Chicken</span>
                  <span className="font-mono text-[#67e8f9]">৳480</span>
                </div>
                <div className="flex justify-between text-slate-200">
                  <span>🍔 1 × Solo Combo</span>
                  <span className="font-mono text-[#67e8f9]">৳390</span>
                </div>
                <div className="flex justify-between text-slate-300 border-t border-white/10 pt-1">
                  <span>🛵 Delivery (25 min)</span>
                  <span className="font-mono text-slate-300">৳60</span>
                </div>
                <div className="flex justify-between text-white font-bold border-t border-white/15 pt-1">
                  <span>Total</span>
                  <span className="font-mono text-[#67e8f9]">৳930</span>
                </div>
              </div>
              <p className="text-slate-200">Confirm with Cash on Delivery or bKash?</p>
            </div>
          </Msg>

          <Msg time="10:25">
            <span>Cash on delivery please!</span>
          </Msg>

          <Msg me time="10:25 ✓✓">
            <span>Done ✅ Order #GG-4821 confirmed! Kitchen is preparing your order. Track at grillghor.com/track.</span>
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
        <Step n="02" t="0.4s">
          <span>Menu & stock verified</span>
        </Step>
        <Step n="03" t="1.1s" className="hidden md:flex">
          Order created in POS & CRM
        </Step>
        <Step n="04" t="1.6s">
          <span>Kitchen KDS ticket issued</span>
        </Step>
      </FlowCard>

      {/* Metric Stat Card */}
      <FlowCard className="top-[385px] left-[345px] hidden w-[270px] md:block p-5">
        <div className="font-mono text-xs uppercase tracking-wider text-[#a78bfa] flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-[#a78bfa]" />
          This week
        </div>
        <div className="mt-1.5 font-sans text-[44px] leading-[48px] font-bold bg-gradient-to-r from-white via-cyan-200 to-[#67e8f9] bg-clip-text text-transparent">
          312 orders
        </div>
        <div className="text-xs text-slate-400 mt-1">processed without staff intervention</div>
      </FlowCard>
      <SceneNote />
    </>
  );
}

/** Tab 2: Customer-Facing Online Ordering Store with bKash Checkout */
function StoreScene({ label }: { label: string }) {
  const prods = [
    { n: "Crispy Chicken · 2 pc", bn: "ক্রিস্পি চিকেন - ২ পিস", price: "240", img: "/picker/item-1-chicken.png", tag: "bestseller", time: "~8 min" },
    { n: "Solo Combo", bn: "সোলো কম্বো", price: "390", img: "/picker/item-2-combo.png", tag: "bestseller", time: "~12 min" },
    { n: "Classic Beef Burger", bn: "ক্লাসিক বিফ বার্গার", price: "280", img: "/picker/item-5-burger.png", tag: "popular", time: "~10 min" },
  ];

  return (
    <>
      <SceneLabel>{label}</SceneLabel>
      <MockBrowser
        url="order.grillghor.com"
        className="top-12 left-[14px] h-[320px] w-[326px] md:top-[64px] md:left-8 md:h-[440px] md:w-[570px]"
      >
        <div className="px-5 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-block rounded-full bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 text-[11px] font-medium text-amber-300">
                  🔥 Open for orders
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">Dhanmondi Branch</span>
              </div>
              <div className="mt-1.5 font-sans text-xl md:text-2xl font-bold text-white">
                Grill Ghor · অনলাইন মেনু
              </div>
            </div>
            <span className="font-mono text-xs text-[#67e8f9] px-2.5 py-1 rounded-full bg-[#67e8f9]/10 border border-[#67e8f9]/25 flex items-center gap-1.5">
              <span>Cart · 3 items</span>
            </span>
          </div>

          {/* Category Pills */}
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1 text-xs">
            <span className="px-3 py-1 rounded-full bg-white/10 text-white font-medium">All · 28</span>
            <span className="px-3 py-1 rounded-full bg-white/[0.04] text-slate-400 hover:text-white border border-white/10">Burgers · 6</span>
            <span className="px-3 py-1 rounded-full bg-white/[0.04] text-slate-400 hover:text-white border border-white/10">Fried Chicken · 5</span>
            <span className="px-3 py-1 rounded-full bg-white/[0.04] text-slate-400 hover:text-white border border-white/10">Shawarma · 4</span>
          </div>
        </div>

        {/* Product Cards with Real Thumbnails */}
        <div className="grid grid-cols-3 gap-3 p-5 pt-3">
          {prods.map((p) => (
            <div key={p.n} className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 flex flex-col justify-between hover:border-white/20 transition-all">
              <div className="relative h-[85px] rounded-lg md:h-[110px] bg-[#141628] overflow-hidden flex items-center justify-center p-2">
                {/* Real Menu Item Image */}
                <Image
                  src={p.img}
                  alt={p.n}
                  width={80}
                  height={80}
                  className="size-16 md:size-20 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                />
                <span className="absolute top-1.5 right-1.5 font-mono text-[9px] px-1.5 py-0.5 rounded bg-black/60 text-slate-300">
                  {p.time}
                </span>
              </div>
              <div className="mt-2">
                <b className="block text-xs md:text-[13px] font-semibold text-white truncate">{p.n}</b>
                <span className="text-[10px] text-slate-400 block truncate">{p.bn}</span>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="font-mono text-xs md:text-sm font-bold text-[#67e8f9]">৳ {p.price}</span>
                  <button type="button" className="px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-[11px] font-semibold text-white">
                    + Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MockBrowser>

      {/* Floating Mobile Checkout Sheet */}
      <MockPhone
        className="top-[180px] left-[135px] h-[320px] w-[190px] rounded-[32px] p-2 md:top-[115px] md:left-[405px] md:h-[390px] md:w-[230px] md:rounded-[36px] md:p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        screenClassName="rounded-[25px] md:rounded-[28px] bg-[#0c0e1e] border border-white/10 text-white flex flex-col justify-between"
      >
        <div className="px-3.5 pt-6 pb-2 font-semibold text-xs md:text-sm text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
            <span>Order Checkout</span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">#GG-4091</span>
        </div>
        <div className="px-3.5 py-2 text-xs leading-[1.7] text-slate-300 flex-1 flex flex-col justify-center">
          <div className="flex justify-between py-0.5">
            <span className="text-slate-300 truncate pr-2">Crispy Chicken × 2</span>
            <span className="font-mono text-white">৳ 480</span>
          </div>
          <div className="flex justify-between py-0.5">
            <span className="text-slate-300 truncate pr-2">Solo Combo × 1</span>
            <span className="font-mono text-white">৳ 390</span>
          </div>
          <div className="flex justify-between py-0.5 border-b border-white/10 pb-1.5 text-slate-400">
            <span>Delivery (25 min)</span>
            <span className="font-mono text-slate-300">৳ 60</span>
          </div>
          <div className="flex justify-between pt-2 text-xs md:text-sm font-bold text-white">
            <span>Total</span>
            <span className="text-[#67e8f9] font-mono text-sm md:text-base">৳ 930</span>
          </div>
        </div>
        <div className="p-3 pt-0">
          <div className="rounded-xl bg-[#e2136e] py-2 px-3 text-center text-xs font-semibold text-white shadow-[0_4px_16px_rgba(226,19,110,0.45)] hover:brightness-110 flex items-center justify-center gap-1.5 cursor-pointer">
            <span>Pay with bKash</span>
          </div>
        </div>
      </MockPhone>
      <SceneNote />
    </>
  );
}

/** Tab 3: The Live Business Management System / Menu & Catalog Admin Dashboard */
function ErpScene({ label }: { label: string }) {
  const items = [
    { n: "Crispy Chicken - 2 pc", bn: "ক্রিস্পি চিকেন - ২ পিস", meta: "~8 min · bestseller", price: "240", img: "/picker/item-1-chicken.png" },
    { n: "Solo Combo", bn: "সোলো কম্বো", meta: "~12 min · bestseller", price: "390", img: "/picker/item-2-combo.png" },
    { n: "Cookies & Cream Shake", bn: "কুকিজ অ্যান্ড ক্রিম শেক", meta: "~4 min · pairs-well", price: "220", img: "/picker/item-3-shake.png" },
    { n: "Chicken Shawarma", bn: "চিকেন শাওয়ারমা", meta: "~6 min · bestseller", price: "180", img: "/picker/item-4-shawarma.png" },
    { n: "Classic Beef Burger", bn: "ক্লাসিক বিফ বার্গার", meta: "~10 min · bestseller", price: "280", img: "/picker/item-5-burger.png" },
    { n: "Masala Fries", bn: "মসলা ফ্রাইজ", meta: "~4 min · pairs-well", price: "150", img: "/picker/item-7-masala-fries.png" },
  ];

  return (
    <>
      <SceneLabel>{label}</SceneLabel>
      <MockBrowser
        url="admin.grillghor.com/menu"
        className="top-10 left-[10px] h-[415px] w-[335px] md:top-[56px] md:left-6 md:h-[530px] md:w-[670px]"
      >
        <div className="flex h-[calc(100%-38px)]">
          {/* Left Mini Sidebar */}
          <div className="hidden md:flex w-[140px] border-r border-white/10 bg-[#070815] p-3 flex-col justify-between shrink-0">
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-white/10">
                <span className="size-6 rounded bg-amber-500/20 text-amber-300 flex items-center justify-center text-xs font-bold">
                  🔥
                </span>
                <div>
                  <div className="text-[11px] font-bold text-white leading-tight">গ্রিল ঘর</div>
                  <div className="text-[9px] text-slate-400">Admin Portal</div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="mt-3 space-y-1 text-[11px]">
                <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 font-semibold">
                  <span>মেনু (Menu)</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-400 hover:text-white">
                  <span>অফার (Offers)</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-400 hover:text-white">
                  <span>টেবিল ও কিউআর</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-400 hover:text-white">
                  <span>সেটিংস</span>
                </div>
              </div>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center justify-center gap-1 p-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-slate-400">
              <span className="px-1.5 py-0.5 rounded bg-white/10 text-white font-bold">EN</span>
              <span className="px-1.5 py-0.5">বাং</span>
            </div>
          </div>

          {/* Right Main Table Canvas */}
          <div className="flex-1 flex flex-col overflow-hidden bg-[#0c0e22]">
            {/* Top Toolbar */}
            <div className="p-3 md:p-4 border-b border-white/10 flex items-center justify-between shrink-0 bg-white/[0.01]">
              <div>
                <h3 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                  <span>Menu</span>
                  <span className="text-[10px] font-normal text-slate-400 hidden sm:inline">· Changes show on guest menu immediately</span>
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-[11px] flex items-center gap-1 cursor-pointer shadow-[0_0_12px_rgba(245,158,11,0.3)]">
                  + Add item
                </span>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="px-3 md:px-4 py-2 border-b border-white/5 flex gap-1.5 overflow-x-auto text-[10px] md:text-[11px] shrink-0 bg-white/[0.02]">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-semibold shrink-0">
                All · 28
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5 shrink-0">
                Set meals · 4
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5 shrink-0">
                Burgers · 6
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5 shrink-0">
                Fried chicken · 5
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5 shrink-0">
                Shawarma · 4
              </span>
            </div>

            {/* Item Rows (Close-up, zoomed view) */}
            <div className="flex-1 overflow-y-auto px-3 md:px-4 divide-y divide-white/5 text-xs">
              <div className="py-2 flex items-center justify-between font-mono text-[10px] uppercase text-slate-500 tracking-wider">
                <span>Item</span>
                <span>Price · Available</span>
              </div>

              {items.map((it) => (
                <div key={it.n} className="py-2 flex items-center justify-between gap-3 hover:bg-white/[0.02] rounded px-1 transition-colors">
                  {/* Left: Thumbnail & Names */}
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Image
                      src={it.img}
                      alt={it.n}
                      width={32}
                      height={32}
                      className="size-7 md:size-8 rounded-lg object-contain bg-[#141628] p-0.5 border border-white/10 shrink-0"
                    />
                    <div className="min-w-0 truncate">
                      <div className="font-semibold text-white truncate text-[11px] md:text-xs">
                        {it.n} <span className="text-slate-400 font-normal text-[10px] hidden md:inline">· {it.bn}</span>
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">
                        {it.meta}
                      </div>
                    </div>
                  </div>

                  {/* Right: Price & Active Green Toggle Switch */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-mono font-bold text-white text-xs md:text-sm">
                      ৳{it.price}
                    </span>

                    {/* Toggle Switch */}
                    <div className="w-8 h-4.5 rounded-full bg-emerald-500/90 p-0.5 flex items-center justify-end shadow-[0_0_8px_rgba(16,185,129,0.4)] cursor-pointer">
                      <div className="size-3.5 rounded-full bg-white shadow-sm" />
                    </div>

                    {/* Pencil Edit Icon */}
                    <svg className="size-3.5 text-slate-400 hover:text-white cursor-pointer hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
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

export function PickerScene({ name, label, active }: { name: PickKey; label: string; active: boolean }) {
  return (
    <div
      className={`scene absolute inset-0 ${active ? "on" : ""}`}
      data-scene={name}
      aria-hidden={!active}
      inert={!active}
    >
      {name === "agent" && <AgentScene label={label} />}
      {name === "store" && <StoreScene label={label} />}
      {name === "erp" && <ErpScene label={label} />}
    </div>
  );
}
