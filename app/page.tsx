import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { school } from "@/lib/school";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Section className="pt-24 pb-28">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#D81B60] font-medium mb-6 tracking-wide uppercase text-sm">
              Early Childhood Excellence
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-tight text-gray-900">
              Building strong foundations for the future
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {school.tagline}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#D81B60] hover:opacity-90 transition text-white px-8 py-4 rounded-2xl font-medium"
              >
                Enroll Your Child
              </Link>

              <Link
                href="/about"
                className="border border-gray-300 hover:border-gray-400 transition px-8 py-4 rounded-2xl font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* PROGRAMS */}
      <Section className="bg-gray-50 py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Programs designed for growth
            </h2>

            <p className="text-gray-600 mt-4 text-lg">
              Every stage carefully structured for development
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {school.programs.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {p.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* WHY US */}
      <Section className="py-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-10">
              Why parents choose us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {school.features.map((f, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-2xl p-6 bg-white"
              >
                <p className="text-lg text-gray-700">
                  ✓ {f}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-24">
        <Container>
          <div className="bg-[#D81B60] text-white rounded-[2rem] px-8 py-16 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Give your child the best start
            </h2>

            <p className="text-white/90 max-w-2xl mx-auto text-lg mb-10">
              Join a nurturing learning environment focused on excellence,
              growth, and character development.
            </p>

            <Link
              href="/contact"
              className="bg-white text-[#D81B60] px-8 py-4 rounded-2xl font-semibold inline-block hover:scale-[1.02] transition"
            >
              Start Enrollment
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
