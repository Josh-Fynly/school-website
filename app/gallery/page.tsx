"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Gallery() {
  return (
    <>
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-bold mb-4 text-center">Gallery</h1>
          <p className="text-center text-gray-600 text-xl mb-12 font-light">
            A glimpse into life at Banner of Excellence
          </p>

          {/* Placeholder for gallery images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-[#F5F5F5] aspect-square rounded-2xl flex items-center justify-center"
              >
                <p className="text-gray-400 text-center">
                  Gallery Image {i + 1}
                  <br />
                  <span className="text-sm">(Add your photos here)</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

