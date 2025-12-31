"use client";

import { useForm, ValidationError } from "@formspree/react";

export const metadata = {
  title: "Contact Us | Meridian Youth Network",
};

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xqaropor");

  if (state.succeeded) {
    return (
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-[#0B3D91] mb-4">
          Message Sent Successfully
        </h2>
        <p className="text-lg">
          Thank you for contacting Meridian Youth Network.
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#0B3D91] mb-8 text-center">
        Contact Us
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          name="name"
          required
          placeholder="Full Name"
          className="w-full border p-3 rounded"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email Address"
          className="w-full border p-3 rounded"
        />

        <textarea
          name="message"
          required
          rows={5}
          placeholder="Your Message"
          className="w-full border p-3 rounded"
        />

        <ValidationError errors={state.errors} />

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-[#FFCC00] text-[#0B3D91] font-semibold px-6 py-3 rounded"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
