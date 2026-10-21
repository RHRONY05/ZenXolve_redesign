/**
 * Decorative SVG illustrations for the three service panels. All colours come from tokens (currentColor =
 * the panel's on-panel colour). Animations live in globals.css and are off with prefers-reduced-motion.
 */
const line = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" } as const;

/** Build: a wireframe browser whose blocks slot into place. */
export function BuildArt({ className = "" }: { className?: string }) {
  const block = (x: number, y: number, w: number, h: number, d: number, fillOpacity = 0.14) => (
    <rect key={`${x}-${y}`} className="art-block" style={{ "--d": d } as React.CSSProperties} x={x} y={y} width={w} height={h} rx="8" fill="currentColor" fillOpacity={fillOpacity} stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.2" />
  );
  return (
    <svg viewBox="0 0 440 320" role="img" aria-label="Illustration: a website wireframe being assembled" className={className}>
      <rect x="8" y="8" width="424" height="304" rx="18" {...line} strokeOpacity="0.6" />
      <path d="M8 46H432" {...line} strokeOpacity="0.4" />
      <circle cx="30" cy="27" r="4" fill="currentColor" fillOpacity="0.5" />
      <circle cx="46" cy="27" r="4" fill="currentColor" fillOpacity="0.5" />
      <circle cx="62" cy="27" r="4" fill="currentColor" fillOpacity="0.5" />
      <rect x="120" y="19" width="200" height="16" rx="8" fill="currentColor" fillOpacity="0.14" />
      {block(28, 66, 250, 96, 0, 0.22)}
      {block(292, 66, 120, 96, 1)}
      {block(28, 178, 120, 112, 2)}
      {block(160, 178, 120, 112, 3)}
      {block(292, 178, 120, 52, 4)}
      {block(292, 242, 120, 48, 5, 0.3)}
      <path className="art-block" style={{ "--d": 6 } as React.CSSProperties} d="M46 102h140M46 124h96" {...line} strokeOpacity="0.8" />
    </svg>
  );
}

/** Automate: a message flows through an agent into the CRM. */
export function AutomateArt({ className = "" }: { className?: string }) {
  const node = (x: number, y: number, label: string, glyph: React.ReactNode) => (
    <g key={label} transform={`translate(${x} ${y})`}>
      <rect width="96" height="96" rx="22" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.2" />
      <g transform="translate(24 20)" {...line}>
        {glyph}
      </g>
      <text x="48" y="80" textAnchor="middle" fill="currentColor" fillOpacity="0.8" style={{ font: "500 10px var(--font-mono)", letterSpacing: "0.06em" }}>
        {label}
      </text>
    </g>
  );
  const p1 = "M118 144 C 150 144, 150 144, 182 144";
  const p2 = "M278 144 C 310 144, 310 144, 342 144";
  return (
    <svg viewBox="0 0 440 288" role="img" aria-label="Illustration: a customer message handled by an AI agent and saved to a CRM" className={className}>
      {node(22, 96, "MESSAGE", <path d="M2 4h44v26H18l-10 10V30H2z" transform="scale(.9)" />)}
      {node(172, 96, "AI AGENT", (
        <>
          <circle cx="24" cy="22" r="14" />
          <path d="M24 2v6M24 36v6M4 22h6M38 22h6M10 8l4 4M34 32l4 4M38 8l-4 4M14 32l-4 4" />
        </>
      ))}
      {node(322, 96, "CRM", (
        <>
          <rect x="2" y="4" width="44" height="34" rx="4" />
          <path d="M2 16h44M16 16v22" />
        </>
      ))}
      <path d={p1} {...line} className="art-flow" strokeOpacity="0.75" />
      <path d={p2} {...line} className="art-flow" strokeOpacity="0.75" />
      <circle r="5" fill="currentColor" className="art-pulse" style={{ offsetPath: `path("${p1}")`, ["--d" as string]: 0 }} />
      <circle r="5" fill="currentColor" className="art-pulse" style={{ offsetPath: `path("${p2}")`, ["--d" as string]: 0.9 }} />
      <text x="22" y="232" fill="currentColor" fillOpacity="0.6" style={{ font: "400 11px var(--font-mono)", letterSpacing: "0.04em" }}>
        0.0s → 2.4s · NO HUMAN IN THE LOOP
      </text>
    </svg>
  );
}

/** Design: a bezier curve drawing itself, with anchors and handles. */
export function DesignArt({ className = "" }: { className?: string }) {
  const anchors: [number, number][] = [
    [40, 220],
    [160, 70],
    [300, 190],
    [400, 60],
  ];
  return (
    <svg viewBox="0 0 440 280" role="img" aria-label="Illustration: a vector curve with anchor points and handles" className={className}>
      <g stroke="currentColor" strokeOpacity="0.14">
        {[56, 112, 168, 224].map((y) => (
          <path key={y} d={`M16 ${y}H424`} />
        ))}
        {[88, 176, 264, 352].map((x) => (
          <path key={x} d={`M${x} 16V264`} />
        ))}
      </g>
      <path className="art-draw" pathLength={1} d="M40 220 C 80 220, 110 70, 160 70 S 260 190, 300 190 S 360 60, 400 60" {...line} strokeWidth={2.5} />
      <g {...line} strokeOpacity="0.5" strokeWidth={1}>
        <path d="M160 70L110 70M160 70L210 70M300 190L260 190M300 190L340 190" strokeDasharray="3 4" />
      </g>
      {anchors.map(([x, y], i) => (
        <g key={i} className="art-anchor" style={{ "--d": i } as React.CSSProperties}>
          <rect x={x - 6} y={y - 6} width="12" height="12" rx="2" fill="var(--panel-forest)" stroke="currentColor" strokeWidth="1.5" />
        </g>
      ))}
      {[
        [110, 70],
        [210, 70],
        [260, 190],
        [340, 190],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" fill="currentColor" fillOpacity="0.7" />
      ))}
    </svg>
  );
}
