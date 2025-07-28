import Head from "next/head";

export default function Testimonial() {
  const quotes = [
    "Tastes just like maa ke haath ka khaana!",
    "Affordable, hygienic, and always on time.",
  ];

  return (
    <>
      <Head>
        <title>Testimonials | Bhojasthan</title>
        <meta name="description" content="See what our happy customers say about Bhojasthan’s tasty tiffins!" />
        <meta property="og:title" content="Bhojasthan Testimonials" />
        <meta property="og:description" content="Trusted by students and professionals across Lucknow." />
      </Head>

      <main className="bg-white py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center text-orange-500 mb-10">
          Khaate Pite Log ❤️
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {quotes.map((quote, i) => (
            <blockquote key={i} className="p-6 shadow rounded-xl italic bg-amber-50">
              “{quote}”
            </blockquote>
          ))}
        </div>
      </main>
    </>
  );
}
