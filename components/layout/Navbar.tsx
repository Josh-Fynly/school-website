import Link from "next/link";
import { school } from "@/lib/school";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Brand */}
        <Link href="/" className="text-xl font-semibold tracking-tight">
          {school?.name ?? "Banner Of Excellence"}
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
