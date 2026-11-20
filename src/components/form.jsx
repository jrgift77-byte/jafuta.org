import { useState } from "react";

const NewsletterForm = () => {
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
      aria-labelledby="newsletter-heading"
      className="relative w-full min-h-105 sm:min-h-125 lg:min-h-150 flex items-center justify-center overflow-hidden"
    >
      <img
        src="/img/woman-sewing-africa.webp"
        alt="Community member sewing as part of Jafuta Foundation livelihoods program"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 lg:py-20 text-center">
        <h2
          id="newsletter-heading"
          className="text-white text-2xl sm:text-4xl md:text-[44px] lg:text-[52px] font-bold leading-tight tracking-tight"
        >
          Subscribe to our newsletter.
        </h2>

        <p className="text-white/90 mt-3 sm:mt-4 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg font-light max-w-lg mx-auto leading-relaxed">
          Sign up to our quarterly newsletter to receive news and updates.
        </p>

        {submitted ? (
          <div
            role="status"
            className="bg-white/95 text-[#2c7a88] text-sm sm:text-base font-medium px-5 sm:px-6 py-4 rounded-md max-w-md mx-auto shadow-md"
          >
            Thank you for subscribing! Check your inbox for our next quarterly
            update.
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="block mx-auto mt-2 text-xs text-neutral-600 underline hover:text-neutral-900 cursor-pointer"
            >
              Register another email
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-lg mx-auto"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email Address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full sm:flex-1 bg-white text-neutral-900 placeholder:text-neutral-500 text-sm sm:text-base px-4 sm:px-5 py-3 sm:py-3.5 rounded-sm shadow-sm outline-none focus:ring-2 focus:ring-[#2c7a88] transition-all"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#2c7a88] hover:bg-[#23636f] active:scale-[0.99] text-white text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-sm font-semibold tracking-wide shadow-sm transition-all cursor-pointer whitespace-nowrap"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterForm;
