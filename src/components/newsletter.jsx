import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section
      aria-labelledby="newsletter-signup-heading"
      className="bg-stone-100/90 py-8 px-6 text-center max-w-xl mx-auto rounded-md my-8 border border-stone-200 shadow-xs"
    >
      <h3
        id="newsletter-signup-heading"
        className="text-xl font-serif font-bold text-[#4A5343] mb-1"
      >
        Subscribe to our newsletter.
      </h3>

      <p className="text-xs sm:text-sm text-stone-600 mb-5 max-w-md mx-auto leading-relaxed">
        Sign up to our quarterly newsletter to receive news and updates.
      </p>

      {submitted ? (
        <div
          role="status"
          className="bg-white border border-[#1E6B65]/25 text-[#1E6B65] text-xs font-medium px-4 py-3 rounded-sm max-w-md mx-auto"
        >
          Thank you for subscribing! We&apos;ll keep you updated with our next
          quarterly newsletter.
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="block mx-auto mt-1.5 text-[11px] text-stone-500 underline hover:text-stone-800 cursor-pointer"
          >
            Add another email
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-stretch gap-2.5 max-w-md mx-auto"
        >
          <label htmlFor="newsletter-signup-email" className="sr-only">
            Email Address
          </label>
          <input
            id="newsletter-signup-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            className="w-full sm:flex-1 px-3.5 py-2.5 border border-stone-300 rounded-sm bg-white text-xs sm:text-sm text-[#4A5343] placeholder:text-stone-400 outline-none focus:border-[#1E6B65] focus:ring-2 focus:ring-[#1E6B65]/20 transition-all"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#1E6B65] hover:bg-[#154d49] active:scale-[0.99] text-white px-5 py-2.5 rounded-sm text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      )}

      <p className="text-[10px] text-stone-400 mt-4 tracking-widest uppercase font-semibold">
        We respect your privacy.
      </p>
    </section>
  );
}
