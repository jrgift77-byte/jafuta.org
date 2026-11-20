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
      className="relative z-10 bg-[#FDFBF7] py-8 sm:py-10 lg:py-12 px-5 sm:px-8 md:px-10 text-center w-[calc(100%-2rem)] sm:w-full max-w-lg md:max-w-xl mx-auto rounded-sm shadow-xl border border-stone-200/80"
    >
      <h3
        id="newsletter-signup-heading"
        className="text-xl sm:text-2xl md:text-[26px] font-serif font-bold text-[#2B2B2B] mb-2 leading-snug"
      >
        Subscribe to our newsletter.
      </h3>

      <p className="text-xs sm:text-sm md:text-[15px] text-[#5A5A5A] mb-5 sm:mb-6 max-w-md mx-auto leading-relaxed font-light">
        Sign up to our quarterly newsletter to receive news and updates.
      </p>

      {submitted ? (
        <div
          role="status"
          className="bg-[#3D7C7D]/10 border border-[#3D7C7D]/30 text-[#3D7C7D] text-xs sm:text-sm font-medium px-4 py-3.5 rounded-sm max-w-md mx-auto"
        >
          Thank you for subscribing! We&apos;ll keep you updated with our next
          quarterly newsletter.
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="block mx-auto mt-1.5 text-xs text-stone-600 underline hover:text-stone-900 cursor-pointer"
          >
            Add another email
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-stretch gap-2.5 sm:gap-3 max-w-md mx-auto"
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
            className="w-full sm:flex-1 px-3.5 sm:px-4 py-2.5 sm:py-3 border border-stone-300 rounded-sm bg-white text-sm text-[#2B2B2B] placeholder:text-stone-400 outline-none focus:border-[#3D7C7D] focus:ring-2 focus:ring-[#3D7C7D]/20 transition-all"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#3D7C7D] hover:bg-[#316667] active:scale-[0.99] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-sm text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      )}

      <p className="text-[10px] sm:text-[11px] text-stone-400 mt-3.5 sm:mt-4 tracking-widest uppercase font-semibold">
        We respect your privacy.
      </p>
    </section>
  );
}
