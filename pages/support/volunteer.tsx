import { useForm, ValidationError } from "@formspree/react";

export default function VolunteerPage() {
  const [state, handleSubmit] = useForm("xqaropor");

  if (state.succeeded) {
    return (
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-[#0B3D91] mb-4">
          Submission Successful
        </h2>
        <p className="text-lg">
          Thank you for your interest in volunteering with us.
          Our team will contact you shortly.
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#0B3D91] mb-8 text-center">
        Volunteer With Us
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

        <select
          name="interest"
          required
          className="w-full border p-3 rounded"
        >
          <option value="">Select Area of Interest</option>
          <option value="Youth Empowerment">Youth Empowerment</option>
          <option value="Community Outreach">Community Outreach</option>
          <option value="Environmental Projects">Environmental Projects</option>
          <option value="Media & Communications">Media & Communications</option>
        </select>

        <textarea
          name="message"
          placeholder="Why do you want to volunteer?"
          rows={5}
          required
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
