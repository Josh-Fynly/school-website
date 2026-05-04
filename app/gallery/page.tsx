export default function Gallery() {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-16">
        Gallery
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="bg-gray-200 h-48 rounded-xl"
          />
        ))}
      </div>
    </section>
  );
}
