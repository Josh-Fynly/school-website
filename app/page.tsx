import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-32 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          <span className="text-[#D81B60]">Excellence</span> starts here
        </h1>

        <p className="text-lg md:text-xl text-gray-600 font-light mb-10 leading-relaxed">
          Quality early childhood education that nurtures every child's
          potential—from Crèche to Primary.
        </p>

        <Link
          href="/contact"
          className="bg-[#D81B60] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#1a3a5c]"
        >
          Enroll Your Child
        </Link>
      </section>

      {/* Programs */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Programs
          </h2>

          <p className="text-center text-gray-600 mb-16 font-light">
            Designed for every stage of early childhood development
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Crèche",
                desc: "Ages 0–2. Safe, nurturing care for early development.",
              },
              {
                title: "Nursery",
                desc: "Ages 2–4. Play-based learning and social growth.",
              },
              {
                title: "Primary",
                desc: "Ages 4–12. Strong academic and character foundation.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm"
              >
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Why choose us?
        </h2>

        <div className="space-y-10 text-gray-600">
          <p>
            ✔ Safe environment with trained staff and secure facilities
          </p>
          <p>
            ✔ Qualified educators focused on individual development
          </p>
          <p>
            ✔ Holistic learning — academic, emotional, social growth
          </p>
          <p>
            ✔ Modern curriculum for a changing world
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#D81B60] text-white text-center py-24 px-4">
        <h2 className="text-4xl font-bold mb-6">Ready to enroll?</h2>
        <p className="mb-8 font-light">
          Join a culture of excellence today.
        </p>

        <Link
          href="/contact"
          className="bg-white text-[#D81B60] px-8 py-4 rounded-xl font-semibold"
        >
          Get Started
        </Link>
      </section>
    </>
  );
}
