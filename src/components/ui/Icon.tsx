import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  GraduationCap,
  LayoutDashboard,
  Lightbulb,
  LifeBuoy,
  Menu,
  MessageCircle,
  Plus,
  ReceiptText,
  ShieldCheck,
  ShoppingBag,
  Target,
  X,
  Zap,
  type LucideProps,
} from "lucide-react";

/** lucide-react 1.x dropped brand icons, so these three keep the old lucide paths. */
function brand(children: React.ReactNode) {
  return function BrandIcon({ size = 24, strokeWidth = 2, ...rest }: LucideProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      >
        {children}
      </svg>
    );
  };
}

const Facebook = brand(<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />);
const Instagram = brand(
  <>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </>,
);
const Linkedin = brand(
  <>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </>,
);

const icons = {
  "arrow-down": ArrowDown,
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  bot: Bot,
  facebook: Facebook,
  "graduation-cap": GraduationCap,
  instagram: Instagram,
  "layout-dashboard": LayoutDashboard,
  lightbulb: Lightbulb,
  "life-buoy": LifeBuoy,
  linkedin: Linkedin,
  menu: Menu,
  "message-circle": MessageCircle,
  plus: Plus,
  "receipt-text": ReceiptText,
  "shield-check": ShieldCheck,
  "shopping-bag": ShoppingBag,
  target: Target,
  x: X,
  zap: Zap,
};

export type IconName = keyof typeof icons;

/** Same names as the data-lucide attributes in the design HTML. Decorative unless a label is given. */
export function Icon({ name, label, ...props }: { name: IconName; label?: string } & LucideProps) {
  const Cmp = icons[name];
  return <Cmp aria-hidden={label ? undefined : true} aria-label={label} {...props} />;
}
