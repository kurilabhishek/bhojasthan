export default function WhyChoose() {
  const features = [
    { icon: '🛡️', title: 'Hygienic & Safe Cooking' },
    { icon: '🍛', title: 'Homemade Taste Everyday' },
    { icon: '⏱️', title: 'On-time Delivery' },
    { icon: '💸', title: 'Affordable Plans for All' },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-3xl font-semibold text-center text-orange-500 mb-10">
        Why Choose Bhojasthan?
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center">
        {features.map(({ icon, title }) => (
          <div key={title} className="p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
