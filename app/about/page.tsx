export default function About() {
  return (
    <section className="py-24 px-4 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-16">
        About Us
      </h1>

      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold mb-3">Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Replenishing a culture of excellence for a brighter future
            through quality early childhood education.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-3">Vision</h2>
          <p className="text-gray-600">
            To be a leading institution recognized for excellence and
            impact.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-3">Core Values</h2>
          <ul className="space-y-3 text-gray-600">
            <li><b>Excellence:</b> High standards always</li>
            <li><b>Care:</b> Safe and nurturing environment</li>
            <li><b>Growth:</b> Supporting every child</li>
            <li><b>Community:</b> Strong family partnerships</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
