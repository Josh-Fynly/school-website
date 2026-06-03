import Link from "next/link";
import { school } from "@/lib/school";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        <Link href="/" className="font-bold">
          <span className="text-[#D81B60]">Banner Of</span>{" "}
          <span>Excellence</span>
        </Link>

        <div className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact" className="text-[#D81B60]">
            Enroll
          </Link>
        </div>
      </div>
    </nav>
  );
}
