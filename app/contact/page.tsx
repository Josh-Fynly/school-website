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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate form
      if (!formData.parentName || !formData.childName || !formData.email || !formData.phone) {
        setSubmitMessage("Please fill in all required fields.");
        setIsSubmitting(false);
        return;
      }

      // Log form data (for now, in production connect to backend)
      console.log("Form submitted:", formData);
      
      setSubmitMessage("Thank you! We'll contact you soon.");
      setFormData({
        parentName: "",
        childName: "",
        email: "",
        phone: "",
        program: "nursery",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 5000);
    }
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
              {submitMessage && (
                <div className={`p-4 rounded-lg ${submitMessage.includes("error") || submitMessage.includes("required") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
                  {submitMessage}
                </div>
              )}

              <input
                type="text"
                name="parentName"
                placeholder="Parent's Name"
                value={formData.parentName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D81B60] transition"
                required
              />

              <input
                type="text"
                name="childName"
                placeholder="Child's Name"
                value={formData.childName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D81B60] transition"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D81B60] transition"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D81B60] transition"
                required
              />

              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D81B60] transition"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D81B60] transition"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D81B60] text-white py-3 rounded-lg font-semibold hover:bg-[#1a3a5c] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
