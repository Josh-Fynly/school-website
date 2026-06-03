import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { school } from "@/lib/school";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-semibold mb-6">
              <span className="text-[#D81B60]">Excellence</span> starts here
            </h1>

            <p className="text-gray-600 text-lg mb-10">
              {school.tagline}
            </p>

            <Link
              href="/contact"
              className="bg-[#D81B60] text-white px-8 py-4 rounded-xl"
            >
              Enroll Your Child
            </Link>
          </div>
        </Container>
      </Section>

      {/* PROGRAMS */}
      <Section className="bg-gray-50">
        <Container>
          <h2 className="text-4xl text-center mb-10">
            Programs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {school.programs.map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* WHY */}
      <Section>
        <Container>
          <h2 className="text-4xl text-center mb-10">
            Why Parents Choose Us
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {school.features.map((f, i) => (
              <p key={i} className="text-gray-600">
                ✓ {f}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-[#D81B60] text-white text-center">
        <Container>
          <h2 className="text-4xl mb-6">
            Give your child the best start
          </h2>

          <Link
            href="/contact"
            className="bg-white text-[#D81B60] px-8 py-4 rounded-xl"
          >
            Start Enrollment
          </Link>
        </Container>
      </Section>

      <Footer />
    </>
  );
}


