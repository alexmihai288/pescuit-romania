import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/constants";
import { Toaster } from "@/components/ui/toaster";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { Footer } from "@/components/Footer";
import { ModalProvider } from "@/components/ui/animated-modal";

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
        <QueryProvider>
          <FloatingNav navItems={navItems} />
          <Toaster />
          <ModalProvider>{children}</ModalProvider>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
