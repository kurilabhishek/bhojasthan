import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    plan: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/kurilrpf@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("✅ Booking submitted! Check your email.");
        setForm({ name: "", phone: "", plan: "", message: "" });
      } else {
        alert("❌ Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("⚠️ Network error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-lg mx-auto"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
        required
      />
      <select
        name="plan"
        value={form.plan}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
        required
      >
        <option value="">Select Plan</option>
        <option>Basic Plan</option>
        <option>Premium Plan</option>
        <option>Custom Plan</option>
      </select>
      <textarea
        name="message"
        placeholder="Any special instructions?"
        value={form.message}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
      />
      <button
        type="submit"
        disabled={loading}
        className={`${
          loading ? "bg-orange-300 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"
        } text-white py-2 px-4 rounded`}
      >
        {loading ? "Submitting..." : "Submit Booking"}
      </button>
    </form>
  );
}
