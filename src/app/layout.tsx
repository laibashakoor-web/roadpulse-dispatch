import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RoadPulse Dispatch | Truck Dispatching Services",
  description:
    "RoadPulse Dispatch provides load booking, route planning, driver support, documentation handling, and 24/7 dispatch services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <header className="site-header">
          <div className="container nav-wrapper">
            <Link href="/" className="brand">
              RoadPulse Dispatch
            </Link>
            <nav className="main-nav" aria-label="Primary navigation">
              <Link href="/#home">Home</Link>
              <Link href="/#about">About Us</Link>
              <Link href="/#services">Services</Link>
              <Link href="/#pricing">Pricing Plans</Link>
              <Link href="/#contact">Contact</Link>
              <Link href="/#driver-registration" className="nav-cta">
                Driver Registration
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container footer-wrapper">
            <p>© {new Date().getFullYear()} RoadPulse Dispatch. All rights reserved.</p>
            <p>Nationwide truck dispatching support, 24/7.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
