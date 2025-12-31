"use client";

import Head from "next/head";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xqaropor");

  if (state.succeeded) {
    return (
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-[#0B3D91] mb-4">
          Message Sent Successfully
        </h2>
        <p className="text-lg">
          Thank you for reaching out. We will get back to you shortly.
        </p>
      </section>
    );
  }

  return (
    <>
      <Head>
        <title>Contact Us | Meridian Youth Network</title>
      </Head>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-[#0B3D91] mb-8 text-center">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            placeholder="Full Name"
            required
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full border p-3 rounded"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full border p-3 rounded"
          />

          <ValidationError field="email" prefix="Email" errors={state.errors} />
          <ValidationError field="message" prefix="Message" errors={state.errors} />

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-[#FFCC00] text-[#0B3D91] font-semibold px-6 py-3 rounded disabled:opacity-50"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
    </>
  );
}
