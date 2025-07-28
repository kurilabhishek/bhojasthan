import Head from 'next/head';
import Hero from '../components/Hero';
import WhyChoose from '../components/WhyChoose';
import TiffinPlans from '../components/TiffinPlans';

import News from '../components/News';
import Contact from './contact';

export default function Home() {
  return (
    <>
     

<Head>
  <title>Bhojasthan | Home-style Tiffin Service</title>
  <meta name="description" content="Delicious, hygienic, and affordable home-style tiffin meals for students and working professionals in Lucknow." />
  <meta name="keywords" content="tiffin service, home-style food, Lucknow meals, student lunch, Bhojasthan" />
  <meta property="og:title" content="Bhojasthan | Home-style Tiffin Service" />
  <meta property="og:description" content="Tasty and hygienic home-cooked food, delivered daily." />
  <meta property="og:image" content="/og-image.jpg" />
  <meta property="og:type" content="website" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.ico" />
</Head>

      <main className="bg-amber-50 min-h-screen text-gray-800 font-sans">
        <Hero />
        <WhyChoose />
        <TiffinPlans />
       
        <News />
        <Contact />
      </main>
    </>
  );
}
