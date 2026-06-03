import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Banner Of Excellence Schools",
  description: "Quality early childhood education in Nigeria"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
