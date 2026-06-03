import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Banner Of Excellence Schools",
  description:
    "Replenishing A Culture Of Excellence For A Brighter Future.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
