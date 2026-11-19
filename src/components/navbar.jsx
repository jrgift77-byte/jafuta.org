import { useState } from "react";

const navItems = ["Home", "Our Vision", "About Us", "Our Team", "Blog"];

export default function Navbar({ currentPage, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    setPage(page);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-xs border-b border-stone-200 shadow-xs">
      <nav
        aria-label="Primary Navigation"
        className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between"
      >
        <button
          type="button"
          onClick={() => handleNavClick("Home")}
          className="flex items-center gap-3 text-left cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-full border-2 border-[#4A5343] flex items-center justify-center bg-white group-hover:border-[#1E6B65] transition-colors">
            <span className="text-[10px] font-serif font-bold text-[#4A5343] group-hover:text-[#1E6B65] transition-colors">
              JAFUTA
            </span>
          </div>
          <span className="hidden sm:block font-serif text-xs sm:text-sm font-bold text-[#4A5343] tracking-widest">
            JAFUTA FOUNDATION
          </span>
        </button>

        <div className="hidden md:flex items-center gap-7 font-sans text-sm font-medium text-[#4A5343]">
          {navItems.map((item) => {
            const isActive = currentPage === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => handleNavClick(item)}
                className={`py-1 cursor-pointer transition-colors ${
                  isActive
                    ? "text-[#1E6B65] font-semibold border-b-2 border-[#1E6B65]"
                    : "hover:text-[#1E6B65] border-b-2 border-transparent"
                }`}
              >
                {item}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => handleNavClick("Donate")}
            className="bg-[#1E6B65] hover:bg-[#154d49] text-white px-5 py-2.5 rounded-sm shadow-xs transition-colors font-semibold text-xs uppercase tracking-wider cursor-pointer"
          >
            Donate
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-sm border border-stone-300 text-[#4A5343] hover:text-[#1E6B65] hover:border-[#1E6B65] transition-colors cursor-pointer"
        >
          {menuOpen ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-t border-stone-200 px-6 py-4 space-y-2 shadow-md">
          {navItems.map((item) => {
            const isActive = currentPage === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left py-2.5 px-3 rounded-sm text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "bg-[#1E6B65]/10 text-[#1E6B65] font-semibold"
                    : "text-[#4A5343] hover:bg-stone-100"
                }`}
              >
                {item}
              </button>
            );
          })}

          <div className="pt-2">
            <button
              type="button"
              onClick={() => handleNavClick("Donate")}
              className="w-full bg-[#1E6B65] hover:bg-[#154d49] text-white py-3 rounded-sm font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Donate
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
