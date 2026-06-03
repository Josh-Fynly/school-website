import { school } from "@/lib/school";

export default function Footer() {
  return (
    <footer className="bg-[#1a3a5c] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">

        <p className="mb-6">{school.tagline}</p>

        <p className="text-sm text-gray-300">
          {school.phone.join(" | ")}
        </p>

        <p className="text-sm text-gray-300">
          {school.email}
        </p>

        <div className="border-t border-gray-600 mt-8 pt-4 text-sm text-gray-400">
          © {new Date().getFullYear()} {school.name}. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
