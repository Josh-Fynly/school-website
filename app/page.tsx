import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Animated from "@/components/Animated";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Animated>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
                <span className="text-[#D81B60]">Excellence</span> starts here
              </h1>
            </Animated>

            <Animated delay={0.2}>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-10">
                A nurturing environment where children grow, explore,
                and build strong foundations for life.
              </p>
            </Animated>

            <Animated delay={0.4}>
              <Link
                href="/contact"
                className="bg-[#D81B60] text-white px-8 py-4 rounded-xl text-lg font-medium hover:scale-105 inline-block"
              >
                Enroll Your Child
              </Link>
            </Animated>
          </div>
        </Container>
      </Section>

      {/* PROGRAMS */}
      <Section className="bg-gray-50">
        <Container>
          <Animated>
            <h2 className="text-4xl md:text-5xl font-semibold text-center mb-4">
              Programs designed for growth
            </h2>
          </Animated>

          <Animated delay={0.2}>
            <p className="text-center text-gray-600 mb-16">
              Every stage carefully structured for development
            </p>
          </Animated>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Crèche",
                desc: "Safe, nurturing care for infants and toddlers.",
              },
              {
                title: "Nursery",
                desc: "Play-based learning and early development.",
              },
              {
                title: "Primary",
                desc: "Strong academic and character foundation.",
              },
            ].map((item, i) => (
              <Animated key={i} delay={i * 0.2}>
                <div className="bg-white p-8 rounded-2xl hover:shadow-md transition">
                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>
                </div>
              </Animated>
            ))}
          </div>
        </Container>
      </Section>

      {/* WHY */}
      <Section>
        <Container>
          <Animated>
            <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
              Why parents choose us
            </h2>
          </Animated>

          <div className="grid md:grid-cols-2 gap-10 text-gray-600">
            {[
              "Safe and secure environment",
              "Qualified and caring teachers",
              "Holistic child development",
              "Modern teaching approach",
            ].map((text, i) => (
              <Animated key={i} delay={i * 0.2}>
                <p className="text-lg">✓ {text}</p>
              </Animated>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-[#D81B60] text-white text-center">
        <Container>
          <Animated>
            <h2 className="text-4xl font-semibold mb-6">
              Give your child the best start
            </h2>
          </Animated>

          <Animated delay={0.2}>
            <Link
              href="/contact"
              className="bg-white text-[#D81B60] px-8 py-4 rounded-xl font-medium hover:scale-105 inline-block"
            >
              Start Enrollment
            </Link>
          </Animated>
        </Container>
      </Section>
    </>
  );
}
