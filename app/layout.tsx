import type { Metadata } from "next";

import { Navbar } from "@/components/layout/Navbar";
import { ChatWidget } from "@/components/chat/chat-widget";
import { SocialFab } from "@/components/social/social-fab";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

export const metadata: Metadata = {
  title: "Maid My Day | Home & Relocation Services, Addis Ababa",
  description:
    "Premium home and relocation services for expats, diplomats, embassy staff, and international professionals in Addis Ababa. Trusted housemaids, drivers, pet care, and home management.",
  keywords: [
    "expat services Addis Ababa",
    "housemaid Ethiopia",
    "relocation services Ethiopia",
    "driver hire Addis Ababa",
    "home management Ethiopia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-clip font-sans antialiased">
        <LenisProvider>
          <Navbar />
          {children}
          <SocialFab />
          <ChatWidget />
          <Toaster />
        </LenisProvider>
      </body>
    </html>
  );
}
