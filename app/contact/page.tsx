"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    email: "",
    phone: "",
    program: "nursery",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be connected to a backend later
    console.log("Form submitted:", formData);
    alert("Thank you! We'll contact you soon.");
    setFormData({
      parentName: "",
      childName: "",
      email: "",
      phone: "",
      program: "nursery",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-4 text-center">Get in Touch</h1>
          <p className="text-center text-gray-600 text-xl mb-12 font-light">
            Have questions? We'd love to hear from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <p className="text-gray-600">
                  📞 08035732076
                  <br />
                  📞 08029168211
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-gray-600">
                  ✉️ banner@excellenceschools.com
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  No. 12 Udo Ebu / Inyang Effe Street
                  <br />
                  Ekit Itam II, Itu L.G.A
                </p>
              </div>
            </div>

            {/* Enrollment Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="parentName"
                placeholder="Parent's Name"
                value={formData.parentName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D81B60]"
                required
              />

              <input
                type="text"
                name="childName"
                placeholder="Child's Name"
                value={formData.childName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D81B60]"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D81B60]"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D81B60]"
                required
              />

              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D81B60]"
              >
                <option value="creche">Crèche (0-2 years)</option>
                <option value="nursery">Nursery (2-4 years)</option>
                <option value="primary">Primary (4-12 years)</option>
              </select>

              <textarea
                name="message"
                placeholder="Message (optional)"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D81B60]"
              />

              <button
                type="submit"
                className="w-full bg-[#D81B60] text-white py-3 rounded-lg font-semibold hover:bg-[#1a3a5c] transition"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
              }
