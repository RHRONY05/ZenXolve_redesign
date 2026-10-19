import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { ChromeProvider } from "@/components/chrome/ChromeProvider";
import { MobileContactBar } from "@/components/chrome/MobileContactBar";
import { MobileHeader } from "@/components/chrome/MobileHeader";
import { MobileMenu } from "@/components/chrome/MobileMenu";
import { SiteFooter } from "@/components/chrome/SiteFooter";
import { SiteHeader } from "@/components/chrome/SiteHeader";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <ChromeProvider>
          <SiteHeader />
          <MobileHeader />
          <MobileMenu />
          <main id="main">{children}</main>
          <SiteFooter />
          <MobileContactBar />
        </ChromeProvider>
      </body>
    </html>
  );
}
