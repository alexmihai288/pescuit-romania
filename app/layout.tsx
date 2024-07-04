import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/constants";
import { Toaster } from "@/components/ui/toaster";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pescuit România",
  description: "Găsește locul potrivit de pescuit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <FloatingNav navItems={navItems} />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
