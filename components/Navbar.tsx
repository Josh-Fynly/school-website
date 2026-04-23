"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Placeholder */}
          <Link href="/" className="font-bold text-xl">
            <span className="text-[#D81B60]">Banner</span>
            <span className="text-[#1a3a5c]">Excellence</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-[#D81B60] font-medium text-sm"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-[#D81B60] font-medium text-sm"
            >
              About
            </Link>
            <Link
              href="/programs"
              className="text-gray-600 hover:text-[#D81B60] font-medium text-sm"
            >
              Programs
            </Link>
            <Link
              href="/gallery"
              className="text-gray-600 hover:text-[#D81B60] font-medium text-sm"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="bg-[#D81B60] text-white px-6 py-2 rounded-lg font-medium text-sm hover:bg-[#1a3a5c]"
            >
              Enroll
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block text-gray-600 hover:text-[#D81B60] py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-600 hover:text-[#D81B60] py-2"
            >
              About
            </Link>
            <Link
              href="/programs"
              className="block text-gray-600 hover:text-[#D81B60] py-2"
            >
              Programs
            </Link>
            <Link
              href="/gallery"
              className="block text-gray-600 hover:text-[#D81B60] py-2"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="block bg-[#D81B60] text-white px-6 py-2 rounded-lg text-center"
            >
              Enroll
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
            }

