import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Bhojasthan</title>
        <meta
          name="description"
          content="Know the story behind Bhojasthan – how we’re serving home-cooked food with love and hygiene."
        />
        <meta
          name="keywords"
          content="about tiffin service, bhojasthan story, homemade meals, healthy lunch Lucknow"
        />
        <meta property="og:title" content="About Bhojasthan" />
        <meta
          property="og:description"
          content="Learn more about Bhojasthan’s journey and values."
        />
        <meta property="og:url" content="https://bhojasthan.in/about" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen py-16 px-6 text-center">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">About Bhojasthan</h1>
        <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
          We are on a mission to deliver hygienic, tasty, and affordable tiffin to students and working professionals. 
          Bhojasthan is built around the idea of "ghar jaisa khana" — food made with care, cleanliness, and love.
          Whether you're away from home for college or work, Bhojasthan brings warmth to your plate every day.
        </p>
      </main>
    </>
  );
}
