export default function TiffinPlans() {
  const plans = [
    {
      title: 'Basic Plan',
      price: '₹999/month',
      features: ['1 Veg Sabzi', 'Dal', 'Rice', '2 Roti', 'Salad'],
    },
    {
      title: 'Premium Plan',
      price: '₹1499/month',
      features: ['2 Sabzi', 'Dal Makhani', 'Jeera Rice', '4 Roti', 'Dessert'],
    },
    {
      title: 'Custom Plan',
      price: 'Flexible',
      features: ['Choose your menu', 'Diet meal', 'Weekly plan'],
    },
  ];

  return (
    <section className="bg-orange-50 py-16 px-6 md:px-20">
      <h2 className="text-3xl font-semibold text-center text-orange-600 mb-10">
        Our Tiffin Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.title} className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
            <p className="text-orange-500 font-semibold mb-4">{plan.price}</p>
            <ul className="text-left space-y-1 mb-4">
              {plan.features.map((item) => (
                <li key={item}>✅ {item}</li>
              ))}
            </ul>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-xl hover:bg-orange-600 transition">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
