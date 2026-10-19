/** Static HTML illustrations for the picker stage. Always aria-hidden, always sample data. */

export function MockBrowser({ url, className = "", children }: { url: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={`absolute overflow-hidden rounded-[14px] bg-surface shadow-(--shadow-lg) ${className}`}>
      <div className="flex h-[34px] items-center gap-1.5 border-b border-line px-[14px]">
        <i className="size-[9px] rounded-full bg-line-strong" />
        <i className="size-[9px] rounded-full bg-line-strong" />
        <i className="size-[9px] rounded-full bg-line-strong" />
        <span className="ml-3 rounded-[6px] bg-surface-2 px-[10px] py-[3px] font-mono text-[11px] text-ink-3">{url}</span>
      </div>
      {children}
    </div>
  );
}

export function MockPhone({
  className = "",
  screenClassName = "",
  children,
}: {
  className?: string;
  screenClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`absolute bg-mock-phone shadow-[0_40px_70px_-24px_var(--mock-shadow)] ${className}`}>
      <div className={`flex h-full w-full flex-col overflow-hidden bg-mock-screen text-mock-screen-ink ${screenClassName}`}>
        {children}
      </div>
    </div>
  );
}

export function FlowCard({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`absolute rounded-[16px] bg-surface p-4 text-sm shadow-(--shadow-md) ${className}`}>{children}</div>;
}

export function Msg({ me, time, children }: { me?: boolean; time: string; children: React.ReactNode }) {
  return (
    <div className={`max-w-[84%] rounded-[12px] px-[11px] py-2 ${me ? "self-end bg-mock-msg-me" : "bg-mock-msg"}`}>
      {children}
      <small className="mt-[3px] block text-right text-[10px] text-mock-muted">{time}</small>
    </div>
  );
}

export function SceneLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute top-4 left-[18px] flex items-center gap-[10px] md:top-6 md:left-7">
      <span className="size-2 rounded-full bg-success shadow-[0_0_0_4px_var(--success-soft)]" />
      <span className="mono text-ink-3">{children}</span>
    </div>
  );
}

export function SceneNote() {
  return (
    <div className="mono absolute bottom-[14px] left-[18px] text-[10px] text-ink-3 md:bottom-[22px] md:left-7 md:text-xs">
      <span className="md:hidden">Sample data · illustrative</span>
      <span className="hidden md:inline">Sample data · illustrative preview</span>
    </div>
  );
}
