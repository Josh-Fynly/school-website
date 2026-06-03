import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Banner Of Excellence Schools",
    template: "%s | Banner Of Excellence Schools",
  },
  description:
    "Banner Of Excellence Schools provides quality early childhood and primary education in Eket, Akwa Ibom, Nigeria.",
  keywords: [
    "Banner Of Excellence Schools",
    "Schools in Eket",
    "Nursery school in Eket",
    "Primary school in Eket",
    "Crèche in Eket",
    "Best school in Akwa Ibom",
    "Early childhood education Nigeria",
  ],
  authors: [{ name: "Banner Of Excellence Schools" }],
  creator: "Banner Of Excellence Schools",
  publisher: "Banner Of Excellence Schools",
  metadataBase: new URL(
    "https://school-website-1mebz5lb8-joshfynlygmailcoms-projects.vercel.app"
  ),
  openGraph: {
    title: "Banner Of Excellence Schools",
    description:
      "Replenishing A Culture Of Excellence For A Brighter Future.",
    url: "https://school-website-1mebz5lb8-joshfynlygmailcoms-projects.vercel.app",
    siteName: "Banner Of Excellence Schools",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
