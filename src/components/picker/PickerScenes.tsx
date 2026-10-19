import { FlowCard, Msg, MockBrowser, MockPhone, SceneLabel, SceneNote } from "./Mock";
import type { PickKey } from "@/content/picker";

const Step = ({ n, t, className = "flex", children }: { n: string; t: string; className?: string; children: React.ReactNode }) => (
  <div className={`${className} items-center gap-[10px] border-b border-dashed border-line py-[7px] last:border-b-0 md:py-[10px]`}>
    <span className="grid size-[22px] place-items-center rounded-[8px] bg-accent-soft font-mono text-[11px] text-accent-text md:size-[26px]">
      {n}
    </span>
    {children}
    <span className="ml-auto font-mono text-[11px] text-success">{t}</span>
  </div>
);

function AgentScene({ label }: { label: string }) {
  return (
    <>
      <SceneLabel>{label}</SceneLabel>
      <MockPhone
        className="top-12 left-[18px] h-[370px] w-[200px] rounded-[30px] p-2 md:top-[70px] md:left-12 md:h-[520px] md:w-[250px] md:rounded-[38px] md:p-2.5"
        screenClassName="rounded-[25px] md:rounded-[30px]"
      >
        <div className="bg-mock-wa px-4 pt-[26px] pb-3 text-sm font-semibold text-white md:pt-8">
          Your shop <span className="block text-[11px] font-normal opacity-80">AI assistant · online</span>
        </div>
        <div className="flex flex-col gap-2 p-3 text-xs leading-[1.4] md:text-[13px]">
          <Msg time="10:24">
            <span className="md:hidden">Price for 40 blue totes? Delivery to Chattogram?</span>
            <span className="hidden md:inline">Hi! Price for 40 units of the blue tote? Delivery to Chattogram?</span>
          </Msg>
          <Msg me time="10:24 ✓✓">
            <span className="md:hidden">40 × blue tote = ৳18,400. Delivery 2–3 days, ৳250. Reserve them?</span>
            <span className="hidden md:inline">
              40 × blue tote = ৳18,400. Delivery to Chattogram takes 2–3 days, ৳250. Shall I reserve them?
            </span>
          </Msg>
          <Msg time="10:25">
            <span className="md:hidden">Yes, cash on delivery</span>
            <span className="hidden md:inline">Yes please, cash on delivery</span>
          </Msg>
          <Msg me time="10:25 ✓✓">
            <span className="md:hidden">Done ✅ Order #4821 reserved.</span>
            <span className="hidden md:inline">Done ✅ Order #4821 reserved. You&apos;ll get a confirmation call today.</span>
          </Msg>
        </div>
      </MockPhone>
      <FlowCard className="top-[236px] left-[146px] w-[186px] p-3 text-xs md:top-[110px] md:left-[338px] md:w-[290px] md:p-4 md:text-sm">
        <div className="mono mb-1.5 text-[10px] text-ink-3 md:text-xs">
          <span className="md:hidden">Behind it</span>
          <span className="hidden md:inline">What happened behind it</span>
        </div>
        <Step n="01" t="0.0s">
          <span className="md:hidden">Message in</span>
          <span className="hidden md:inline">Message received</span>
        </Step>
        <Step n="02" t="0.8s">
          <span className="md:hidden">Stock checked</span>
          <span className="hidden md:inline">Stock + price checked</span>
        </Step>
        <Step n="03" t="1.9s" className="hidden md:flex">
          Reply written by agent
        </Step>
        <Step n="04" t="2.4s">
          <span className="md:hidden">Order in CRM</span>
          <span className="hidden md:inline">Order created in CRM</span>
        </Step>
      </FlowCard>
      <FlowCard className="top-[390px] left-[378px] hidden w-[250px] md:block">
        <div className="mono text-ink-3">This week</div>
        <div className="mt-1.5 font-serif text-[46px] leading-[50px]">312 chats</div>
        <div className="text-[13px] text-ink-3">answered without a human</div>
      </FlowCard>
      <SceneNote />
    </>
  );
}

function StoreScene({ label }: { label: string }) {
  const prods = [
    ["Canvas tote", "tile-2"],
    ["Blue tote", "tile-1"],
    ["Field pouch", "tile-3"],
  ];
  return (
    <>
      <SceneLabel>{label}</SceneLabel>
      <MockBrowser
        url="shop.yourbrand.com"
        className="top-12 left-[14px] h-[300px] w-[322px] md:top-[68px] md:left-9 md:h-[430px] md:w-[560px]"
      >
        <div className="flex items-end justify-between px-4 pt-5">
          <div>
            <span className="inline-block rounded-full bg-accent-soft px-[10px] py-1 text-xs text-accent-text">New season</span>
            <div className="mt-2 font-serif text-[28px] leading-8 tracking-display md:text-[40px] md:leading-[44px]">
              Everyday carry
            </div>
          </div>
          <span className="mono text-ink-3">Cart · 2</span>
        </div>
        <div className="grid grid-cols-3 gap-3 p-4">
          {prods.map(([n, tile]) => (
            <div key={n}>
              <div className="h-[90px] rounded-[10px] md:h-[130px]" style={{ background: `var(--${tile})` }} />
              <b className="mt-2 block text-[13px] font-medium">{n}</b>
              <span className="text-xs text-ink-3">৳ {n === "Field pouch" ? "320" : "460"}</span>
            </div>
          ))}
        </div>
      </MockBrowser>
      <MockPhone
        className="top-[270px] left-[150px] h-[320px] w-[170px] rounded-[32px] p-2 md:top-[250px] md:left-[420px] md:h-[400px] md:w-[200px] md:rounded-[38px] md:p-2.5"
        screenClassName="rounded-[25px] md:rounded-[30px] bg-mock-checkout!"
      >
        <div className="px-4 pt-8 pb-[10px] font-semibold">Checkout</div>
        <div className="px-4 text-[13px] leading-[1.9] text-mock-checkout-ink">
          Blue tote × 2<span className="float-right">৳ 920</span>
          <br />
          Delivery<span className="float-right">৳ 60</span>
          <br />
          <b className="text-mock-screen-ink">Total</b>
          <b className="float-right text-mock-screen-ink">৳ 980</b>
        </div>
        <div className="m-4 rounded-[12px] bg-mock-screen-ink p-3 text-center text-sm text-mock-checkout">Pay with bKash</div>
      </MockPhone>
      <SceneNote />
    </>
  );
}

function ErpScene({ label }: { label: string }) {
  const rows = [
    ["Rahman Traders", "#4821", "৳ 18,400", "Shipped"],
    ["Noor Fashion", "#4820", "৳ 6,250", "Packing"],
    ["Delta Supplies", "#4819", "৳ 42,000", "Shipped"],
    ["Green Leaf Café", "#4818", "৳ 3,900", "Packing"],
  ];
  const grid = "grid grid-cols-[1.3fr_1fr_80px] items-center border-b border-line py-[10px] md:grid-cols-[1.3fr_.8fr_1fr_80px]";
  return (
    <>
      <SceneLabel>{label}</SceneLabel>
      <MockBrowser
        url="ops.yourcompany.com/orders"
        className="top-12 left-[14px] h-[400px] w-[322px] md:top-[68px] md:left-9 md:h-[500px] md:w-[620px]"
      >
        <div className="grid grid-cols-3 gap-[10px] px-4 pt-4">
          {[
            ["Orders today", "148", ""],
            ["In production", "37", ""],
            ["Low stock", "4", "text-warn"],
          ].map(([k, v, c]) => (
            <div key={k} className="rounded-[12px] border border-line p-3">
              <span className="text-xs text-ink-3">{k}</span>
              <b className={`block font-serif text-[34px] leading-10 font-normal ${c}`}>{v}</b>
            </div>
          ))}
        </div>
        <div className="px-4 py-3 text-[13px]">
          <div className={`${grid} text-xs text-ink-3`}>
            <span>Customer</span>
            <span className="hidden md:block">Order</span>
            <span>Amount</span>
            <span>Status</span>
          </div>
          {rows.map(([c, o, a, s]) => (
            <div key={o} className={grid}>
              <span>{c}</span>
              <span className="hidden md:block">{o}</span>
              <span>{a}</span>
              <span
                className={`justify-self-start rounded-full px-2 py-[3px] text-[11px] ${
                  s === "Shipped" ? "bg-success-soft text-success" : "bg-warn-soft text-warn"
                }`}
              >
                {s}
              </span>
            </div>
          ))}
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
