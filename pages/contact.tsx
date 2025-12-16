import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Meridian Youth Network</title>
      </Head>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-[#0B3D91] mb-8 text-center">
          Contact Us
        </h1>

        <form
          action="https://formspree.io/f/CONTACT_FORM_ID"
          method="POST"
          className="space-y-6"
        >
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

          <button
            type="submit"
            className="bg-[#FFCC00] text-[#0B3D91] font-semibold px-6 py-3 rounded"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
