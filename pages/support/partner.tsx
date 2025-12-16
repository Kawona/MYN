import { useForm, ValidationError } from "@formspree/react";

export default function PartnerPage() {
  const [state, handleSubmit] = useForm("xqaropor");

  if (state.succeeded) {
    return (
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-[#0B3D91] mb-4">
          Submission Successful
        </h2>
        <p className="text-lg">
          Thank you for your interest in partnering with us.
          Our team will contact you shortly.
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#0B3D91] mb-8 text-center">
        Partner With Us
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          name="organization"
          placeholder="Organization / Individual Name"
          required
          className="w-full border p-3 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full border p-3 rounded"
        />
        <ValidationError field="email" errors={state.errors} />

        <input
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-3 rounded"
        />

        <textarea
          name="message"
          placeholder="Tell us how you want to partner with us"
          rows={5}
          className="w-full border p-3 rounded"
        />
        <ValidationError field="message" errors={state.errors} />

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-[#FFCC00] px-6 py-3 rounded font-semibold disabled:opacity-50"
        >
          {state.submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
}
