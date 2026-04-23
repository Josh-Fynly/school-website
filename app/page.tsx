"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section - Apple Style */}
      <section className="pt-32 pb-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-[#D81B60]">Excellence</span> starts here
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
            Quality early childhood education that nurtures every child's potential.
            From Crèche to Primary, we provide a safe, caring environment where children
            thrive.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#D81B60] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1a3a5c] transition"
          >
            Enroll Your Child
          </Link>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-12 bg-white"></div>

      {/* Programs Section */}
      <section className="py-24 px-4 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Our Programs</h2>
          <p className="text-center text-gray-600 text-lg mb-16 font-light">
            Designed for every stage of early childhood development
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Crèche */}
            <div className="bg-white p-8 rounded-2xl">
              <div className="text-4xl mb-4">👶</div>
              <h3 className="text-2xl font-bold mb-3">Crèche</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Ages 0-2 years. Nurturing care and early developmental
                stimulation in a safe, loving environment.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Professional caregivers</li>
                <li>✓ Safe facilities</li>
                <li>✓ Early development focus</li>
              </ul>
            </div>

            {/* Nursery */}
            <div className="bg-white p-8 rounded-2xl border-2 border-[#D81B60]">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-3">Nursery</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Ages 2-4 years. Play-based learning that develops social,
                emotional, and cognitive skills.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Creative activities</li>
                <li>✓ Social development</li>
                <li>✓ Structured play</li>
              </ul>
            </div>

            {/* Primary */}
            <div className="bg-white p-8 rounded-2xl">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-3">Primary</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Ages 4-12 years. Comprehensive curriculum building strong
                academic foundations and life skills.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Core subjects</li>
                <li>✓ Extra-curricular activities</li>
                <li>✓ Character development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-12 bg-white"></div>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            Why choose Banner of Excellence?
          </h2>

          <div className="space-y-12">
            {/* Feature 1 */}
            <div className="flex gap-8">
              <div className="text-5xl flex-shrink-0">🏡</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Safe Environment</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our facilities are designed with your child's safety as the
                  top priority. Modern infrastructure, trained staff, and
                  security measures ensure peace of mind.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-8">
              <div className="text-5xl flex-shrink-0">👨‍🏫</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Qualified Staff</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our dedicated teachers are trained professionals passionate
                  about early childhood education and committed to each child's
                  individual development.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-8">
              <div className="text-5xl flex-shrink-0">🌱</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Holistic Development</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We nurture every aspect of growth—academic, social, emotional,
                  and physical—preparing children for lifelong success.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-8">
              <div className="text-5xl flex-shrink-0">💡</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Modern Curriculum</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our programs blend traditional values with modern teaching
                  methods, preparing students for an ever-changing world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-12 bg-[#F5F5F5]"></div>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-[#D81B60]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-6">Ready to enroll?</h2>
          <p className="text-xl mb-8 font-light opacity-90">
            Join our community of excellence. Contact us today to schedule a
            visit.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#D81B60] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
        }
        
