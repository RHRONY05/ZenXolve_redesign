import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { ChromeProvider } from "@/components/chrome/ChromeProvider";
import { FloatingBottomNav } from "@/components/chrome/FloatingBottomNav";
import { InnerPageHeader } from "@/components/chrome/InnerPageHeader";
import { SiteFooter } from "@/components/chrome/SiteFooter";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xenzolve.com"),
  title: {
    default: "XenZolve · Software your business runs on",
    template: "%s · XenZolve",
  },
  description:
    "We build powerful websites, intelligent AI systems, and custom software that help startups and businesses scale faster. From Dhaka, for anywhere.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xenzolve.com",
    siteName: "XenZolve",
    title: "XenZolve · Software your business runs on",
    description:
      "We build powerful websites, intelligent AI systems, and custom software that help startups and businesses scale faster. From Dhaka, for anywhere.",
  },
  twitter: {
    card: "summary_large_image",
    title: "XenZolve · Software your business runs on",
    description:
      "We build powerful websites, intelligent AI systems, and custom software that help startups and businesses scale faster.",
  },
};

/** Runs before first paint: sets dark mode and saved palette (cosmic or editorial) */
const themeScript = `try{document.documentElement.dataset.theme="dark";var p=localStorage.getItem("palette");if(!p||(p!=="cosmic"&&p!=="editorial"))p="cosmic";document.documentElement.dataset.palette=p;}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={plexSans.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ChromeProvider>
          <InnerPageHeader />
          <main id="main">{children}</main>
          <SiteFooter />
          <FloatingBottomNav />
        </ChromeProvider>
      </body>
    </html>
  );
}
