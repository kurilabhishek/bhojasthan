import Head from "next/head";
import BookingForm from "../components/Bookingform";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Bhojasthan</title>
        <meta
          name="description"
          content="Have a question or want to book your tiffin service? Contact Bhojasthan for quick support and delicious meals."
        />
        <meta
          name="keywords"
          content="contact tiffin service, bhojasthan phone, lucknow food delivery, student lunch service, subscribe tiffin"
        />
        <meta name="author" content="Bhojasthan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Contact Bhojasthan | Talk to Us" />
        <meta
          property="og:description"
          content="Reach out to Bhojasthan for bookings, feedback, or questions about our home-style tiffin service."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://bhojasthan.in/contact" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen py-16 px-6 text-center">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">
          Contact Bhojasthan 📞
        </h1>
        <p className="mb-10 text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Have a question, custom meal request, or need help with your subscription?
          Just fill the form below — our team will connect with you shortly.
        </p>

        <BookingForm />
      </main>
    </>
  );
}
