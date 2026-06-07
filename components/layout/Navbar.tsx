"use client";

import Link from "next/link";
import { useState } from "react";
import { school } from "@/lib/school";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="max-w-[70%] sm:max-w-none"
          >
            <h1 className="text-sm sm:text-base md:text-lg font-semibold tracking-tight leading-tight text-gray-900">
              {school?.name || "Banner Of Excellence Schools"}
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>

            <Link href="/about" className="hover:text-black transition-colors">
              About
            </Link>

            <Link href="/programs" className="hover:text-black transition-colors">
              Programs
            </Link>

            <Link href="/gallery" className="hover:text-black transition-colors">
              Gallery
            </Link>

            <Link href="/contact" className="hover:text-black transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200"
            aria-label="Toggle Menu"
          >
            <span className="text-2xl leading-none">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col gap-4 text-sm font-medium text-gray-700">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-black transition-colors"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-black transition-colors"
              >
                About
              </Link>

              <Link
                href="/programs"
                onClick={() => setMenuOpen(false)}
                className="hover:text-black transition-colors"
              >
                Programs
              </Link>

              <Link
                href="/gallery"
                onClick={() => setMenuOpen(false)}
                className="hover:text-black transition-colors"
              >
                Gallery
              </Link>

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-black transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
