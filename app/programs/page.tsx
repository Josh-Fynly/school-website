"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Programs() {
  return (
    <>
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-12 text-center">Our Programs</h1>

          <div className="space-y-16">
            {/* Crèche */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Crèche (0-2 years)</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our Crèche program provides expert care for the very youngest
                learners. We focus on creating a safe, supportive environment
                where infants and toddlers can explore, play, and develop at
                their own pace.
              </p>
              <div className="bg-[#F5F5F5] p-8 rounded-2xl">
                <h3 className="font-bold text-lg mb-4">Focus Areas:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Sensory development and exploration</li>
                  <li>✓ Motor skill development</li>
                  <li>✓ Language development</li>
                  <li>✓ Emotional bonding and attachment</li>
                  <li>✓ Safe, clean facilities</li>
                </ul>
              </div>
            </div>

            {/* Nursery */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Nursery (2-4 years)</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our Nursery program combines structured learning with
                play-based activities. Children develop social skills, creative
                expression, and pre-academic foundations in an engaging,
                supportive classroom environment.
              </p>
              <div className="bg-[#F5F5F5] p-8 rounded-2xl">
                <h3 className="font-bold text-lg mb-4">Focus Areas:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Social and emotional development</li>
                  <li>✓ Creative expression through art & music</li>
                  <li>✓ Early literacy and numeracy</li>
                  <li>✓ Cooperative play and teamwork</li>
                  <li>✓ Language enrichment</li>
                </ul>
              </div>
            </div>

            {/* Primary */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Primary (4-12 years)</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our Primary program provides a comprehensive, balanced
                curriculum that develops strong academic foundations while
                nurturing character, creativity, and critical thinking skills.
              </p>
              <div className="bg-[#F5F5F5] p-8 rounded-2xl">
                <h3 className="font-bold text-lg mb-4">Core Subjects:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ English Language & Literature</li>
                  <li>✓ Mathematics</li>
                  <li>✓ Sciences</li>
                  <li>✓ Social Studies</li>
                  <li>✓ Physical Education</li>
                  <li>✓ Arts & Crafts</li>
                  <li>✓ Music & Drama</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
                  }
