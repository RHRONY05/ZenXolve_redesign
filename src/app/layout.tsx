import type { Metadata } from "next";
import {
  Instrument_Serif,
  Inter_Tight,
  JetBrains_Mono,
  IBM_Plex_Sans,
  Source_Serif_4,
  IBM_Plex_Mono,
} from "next/font/google";
import { ChromeProvider } from "@/components/chrome/ChromeProvider";
import { MobileContactBar } from "@/components/chrome/MobileContactBar";
import { MobileHeader } from "@/components/chrome/MobileHeader";
import { MobileMenu } from "@/components/chrome/MobileMenu";
import { SiteFooter } from "@/components/chrome/SiteFooter";
import { SiteHeader } from "@/components/chrome/SiteHeader";
import { ThemeCustomizerDock } from "@/components/chrome/ThemeCustomizer";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});
const sans = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight", display: "swap" });
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
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

/** Runs before first paint: picks the saved theme, palette, and font so there is no flash. */
const themeScript = `try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t;var p=localStorage.getItem("palette");if(p)document.documentElement.dataset.palette=p;var f=localStorage.getItem("font");if(f)document.documentElement.dataset.font=f;}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontClasses = `${serif.variable} ${sans.variable} ${mono.variable} ${plexSans.variable} ${sourceSerif.variable} ${plexMono.variable}`;

  return (
    <html lang="en" suppressHydrationWarning className={fontClasses}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ChromeProvider>
          <SiteHeader />
          <MobileHeader />
          <MobileMenu />
          <main id="main">{children}</main>
          <SiteFooter />
          <MobileContactBar />
          <ThemeCustomizerDock />
        </ChromeProvider>
      </body>
    </html>
  );
}
