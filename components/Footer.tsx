import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a3a5c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Banner of Excellence</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Replenishing A Culture Of Excellence For A Brighter Future
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-[#D81B60]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#D81B60]">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#D81B60]">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D81B60]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="text-sm text-gray-300 mb-2">
              📞 08035732076 | 08029168211
            </p>
            <p className="text-sm text-gray-300">
              ✉️ banner@excellenceschools.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Banner of Excellence Schools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

