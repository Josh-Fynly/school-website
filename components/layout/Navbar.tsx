"use client";

import { useState } from "react";
import Link from "next/link";
import { school } from "@/lib/school";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white relative z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg sm:text-xl font-semibold tracking-tight leading-tight max-w-[70%]"
        >
          {school?.name ?? "Banner Of Excellence"}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white px-6 py-4 space-y-4">
          <Link onClick={() => setOpen(false)} href="/">
            Home
          </Link>
          <Link onClick={() => setOpen(false)} href="/about">
            About
          </Link>
          <Link onClick={() => setOpen(false)} href="/programs">
            Programs
          </Link>
          <Link onClick={() => setOpen(false)} href="/gallery">
            Gallery
          </Link>
          <Link onClick={() => setOpen(false)} href="/contact">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
