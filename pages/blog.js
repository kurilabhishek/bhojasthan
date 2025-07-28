export default function Blog() {
  return (
    <main className="min-h-screen py-16 px-6 text-center">
      <h1 className="text-3xl font-bold text-orange-600 mb-4">📝 BhojPatrika – Our Blog</h1>
      <p className="mb-10">Stories, updates & thoughts from the kitchen of Bhojasthan.</p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "5 Reasons to Choose Home-Style Tiffin Over Junk Food",
            date: "July 20, 2025",
            summary: "Eating ghar ka khaana isn't just about taste—it's about health, savings, and peace of mind.",
          },
          {
            title: "How We Maintain Hygiene in Every Meal",
            date: "July 18, 2025",
            summary: "From sanitized kitchens to daily checks, here's how Bhojasthan ensures safe food delivery.",
          },
          {
            title: "Customer Spotlight: Ritika’s Tiffin Journey",
            date: "July 15, 2025",
            summary: "From missing home food to loving our lunchboxes—read her journey with us.",
          },
        ].map((post, index) => (
          <article
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left"
          >
            <h2 className="text-xl font-bold text-orange-500">{post.title}</h2>
            <p className="text-xs text-gray-400 mb-2">{post.date}</p>
            <p className="text-sm text-gray-700">{post.summary}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
