export default function News() {
  return (
    <section className="bg-orange-100 py-16 px-6 md:px-20">
      <h2 className="text-3xl font-semibold text-center text-orange-600 mb-10">
        Bhoj Samachar 📰
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="font-bold">📍 Now serving in Aliganj, Lucknow!</h4>
          <p className="text-sm mt-2">Order before 10 AM to get lunch on time.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="font-bold">🎉 Festive Combo Offer</h4>
          <p className="text-sm mt-2">Get 1 sweet free with every Diwali meal box.</p>
        </div>
      </div>
    </section>
  );
}
