import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque, Kantumruy_Pro } from "next/font/google";
import { MotionConfig } from "motion/react";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/i18n/context";
import { IntroLoader } from "@/components/motion/intro-loader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "500", "600"],
});

// Fallback-only: appended after the brand fonts in globals.css so Khmer
// glyphs render cleanly while Latin text keeps using Bricolage/Geist.
const kantumruyPro = Kantumruy_Pro({
  variable: "--font-khmer",
  subsets: ["khmer"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ARG TECH — Smart Farming. Sustainable Future.",
  description:
    "ARG TECH fuses in-field sensors, satellite imagery, and weather modeling into one live map of your operation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${bricolageGrotesque.variable} ${kantumruyPro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <MotionConfig reducedMotion="user">
              <IntroLoader />
              {children}
            </MotionConfig>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
