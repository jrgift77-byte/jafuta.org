import "react";

const aboutLinks = [
  { label: "Our Vision", href: "/our-vision" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Team", href: "/our-team" },
  { label: "Blog", href: "/blog" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
];

const projectLinks = [
  { label: "Women & Youth Empowerment", href: "/projects/women-youth" },
  { label: "Education & Digital Access", href: "/projects/education" },
  { label: "Water, Sanitation (WASH) & Health", href: "/projects/wash-health" },
  { label: "Livelihoods & Food Security", href: "/projects/livelihoods" },
  { label: "Conservation & Community Co-Existence", href: "/projects/conservation" },
  { label: "Creativity, Arts & Culture", href: "/projects/creativity-arts" },
];

const Footer = () => {
  return (
    <footer className="bg-[#4F4138] text-white px-5 sm:px-8 md:px-14 lg:px-24 pt-12 sm:pt-16 pb-8 sm:pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 lg:gap-8">
      
        <div className="md:col-span-5 font-light text-sm sm:text-base leading-relaxed space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 sm:gap-8">
            <div>
              <p className="font-semibold text-white tracking-wide">
                Jafuta Foundation
              </p>
              <address className="not-italic text-white/85 mt-1">
                Elephant&apos;s Walk,
                <br />
                273 Adam Stander Road,
                <br />
                Victoria Falls, Zimbabwe
              </address>
              <p className="font-medium text-white mt-2">
                PVO Registration No: 201/26
              </p>
            </div>

            <div>
              <p className="font-semibold text-white tracking-wide">
                Jafuta Foundation (US)
              </p>
              <address className="not-italic text-white/85 mt-1">
                525 Bingham Knoll,
                <br />
                Jacksonville, OR 97530
              </address>
              <p className="font-medium text-white mt-2">Registered 501(c)(3)</p>
              <p className="font-medium text-white">EIN No. 81-3902811</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col sm:items-center md:items-start justify-between gap-6 pt-2 border-t border-white/10 md:border-none md:pt-0">
            <p className="text-white/85">
              Email:{" "}
              <a
                href="mailto:gcvj@jafuta.org"
                className="text-white underline underline-offset-4 hover:text-white/80 transition-colors"
              >
                gcvj@jafuta.org
              </a>
            </p>

            <div className="inline-block bg-white p-2 sm:p-2.5 rounded-md shadow-xs w-fit">
              <img
                src="/img/jafuta-candid-logo.webp"
                alt="Candid Platinum Transparency Seal"
                className="w-36 sm:w-44 h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-7 lg:col-span-6 lg:col-start-7 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 pt-6 md:pt-0 border-t border-white/15 md:border-none">
          <div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-4 sm:mb-5">
              About
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-[15px] font-light">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 underline underline-offset-4 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 mt-6 sm:mt-8">
              <a
                href="https://www.facebook.com/JafutaFoundation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jafuta Foundation on Facebook"
                className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white/85 hover:text-white hover:border-white hover:bg-white/10 transition-all"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/jafutafoundation/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jafuta Foundation on Instagram"
                className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white/85 hover:text-white hover:border-white hover:bg-white/10 transition-all"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-4 sm:mb-5">
              Projects
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-[15px] font-light leading-snug">
              {projectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 underline underline-offset-4 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 sm:mt-14 pt-6 border-t border-white/15">
        <p className="text-center text-white/60 text-xs sm:text-[13px]">
          © {new Date().getFullYear()} Jafuta Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
