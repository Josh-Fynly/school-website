"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    parent: "",
    child: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Form submitted!");
  };

  return (
    <section className="py-24 px-4 max-w-3xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-12">
        Enroll
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {[
          ["Parent Name", "parent"],
          ["Child Name", "child"],
          ["Email", "email"],
          ["Phone", "phone"],
        ].map(([label, key]) => (
          <input
            key={key}
            placeholder={label}
            className="w-full border p-4 rounded-lg"
            onChange={(e) =>
              setForm({ ...form, [key]: e.target.value })
            }
          />
        ))}

        <select
          className="w-full border p-4 rounded-lg"
          onChange={(e) =>
            setForm({ ...form, program: e.target.value })
          }
        >
          <option>Select Program</option>
          <option>Crèche</option>
          <option>Nursery</option>
          <option>Primary</option>
        </select>

        <textarea
          placeholder="Message (optional)"
          className="w-full border p-4 rounded-lg"
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
        />

        <button className="w-full bg-[#D81B60] text-white py-4 rounded-lg font-semibold">
          Submit
        </button>
      </form>

      <div className="mt-12 text-gray-600 text-center">
        <p>08035732076 | 08029168211</p>
        <p>banner@excellenceschools.com</p>
      </div>
    </section>
  );
}
