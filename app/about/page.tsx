"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-12 text-center">About Us</h1>

          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Replenishing A Culture Of Excellence For A Brighter Future. We
                are committed to providing quality early childhood education
                that nurtures the whole child—intellectually, emotionally,
                socially, and physically.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                To be the leading institution for early childhood education,
                recognized for excellence, innovation, and the positive impact
                we have on our pupils and their families.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-4">Our Values</h2>
              <ul className="space-y-4">
                <li className="text-lg text-gray-600">
                  <span className="font-bold">Excellence:</span> We strive for
                  the highest standards in everything we do
                </li>
                <li className="text-lg text-gray-600">
                  <span className="font-bold">Care:</span> We provide a safe,
                  nurturing environment for every child
                </li>
                <li className="text-lg text-gray-600">
                  <span className="font-bold">Growth:</span> We support the
                  development of each child's unique potential
                </li>
                <li className="text-lg text-gray-600">
                  <span className="font-bold">Community:</span> We build strong
                  partnerships with families and staff
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

