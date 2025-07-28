import Head from "next/head";

export default function Gallery() {
  const images = [
    {
      src: "/gallery/roti-sabzi.jpg",
      alt: "Simple roti-sabzi combo",
    },
    {
      src: "/gallery/tiffin-meal.jpg",
      alt: "Full Bhojasthan tiffin meal with dal, rice, and sabzi",
    },
    {
      src: "/gallery/lunch-thali.jpg",
      alt: "Traditional vegetarian lunch thali with roti and dal",
    },
    {
      src: "/gallery/paneer-combo.jpg",
      alt: "Paneer special combo with jeera rice and salad",
    },
  ];

  return (
    <>
      <Head>
        <title>Gallery | Bhojasthan Meals</title>
        <meta
          name="description"
          content="Browse our Bhoj Gallery showcasing home-style vegetarian meals, thalis, and tiffin combos loved by students and professionals."
        />
        <meta
          name="keywords"
          content="bhojasthan food gallery, tiffin meal photos, indian thali, veg tiffin, student lunch service"
        />
        <meta property="og:title" content="Bhojasthan Bhoj Gallery" />
        <meta
          property="og:description"
          content="See real pictures of our healthy, home-style Indian meals delivered by Bhojasthan."
        />
        <meta property="og:image" content="/gallery/tiffin-meal.jpg" />
        <meta property="og:url" content="https://bhojasthan.in/gallery" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen py-16 px-6 bg-amber-50">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-10">
          Our Bhoj Gallery 📸
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {images.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-md transition"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="rounded-t-lg w-full h-56 object-cover"
              />
              <p className="p-3 text-center text-gray-700">{img.alt}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
