import Head from "next/head";

export default function FAQ() {
  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "Currently, we serve Aliganj, Gomti Nagar, and nearby areas in Lucknow.",
    },
    {
      question: "What time will the tiffin be delivered?",
      answer: "Lunch is delivered between 12 PM to 1:30 PM. Dinner between 7 PM to 9 PM.",
    },
    {
      question: "Is there a weekly or trial plan?",
      answer: "Yes! You can try our 3-day trial or choose weekly flexible plans.",
    },
    {
      question: "Can I pause the service for a few days?",
      answer: "Yes, just inform us 24 hours in advance via WhatsApp.",
    },
  ];

  return (
    <>
      <Head>
        <title>FAQs | Bhojasthan</title>
        <meta
          name="description"
          content="Frequently asked questions about Bhojasthan’s tiffin service, delivery timings, trial plans, and more."
        />
        <meta
          name="keywords"
          content="bhojasthan faq, tiffin service questions, lunch delivery lucknow, trial meal plan"
        />
        <meta property="og:title" content="FAQs | Bhojasthan Tiffin Service" />
        <meta
          property="og:description"
          content="Everything you need to know about Bhojasthan — delivery, service areas, trial plans, and support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bhojasthan.in/faq" />
      </Head>

      <main className="min-h-screen py-16 px-6">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-10">
          FAQs - Frequently Asked Questions ❓
        </h1>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white shadow rounded-lg p-4">
              <h3 className="font-semibold text-lg text-orange-500 mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
