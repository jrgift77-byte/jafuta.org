import "./App.css";
import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Home from "./components/home";
import Vision from "./components/vision";
import AboutUsPage from "./components/aboutus";
import OurTeamPage from "./components/OurTeamPage";
import BlogPage from "./components/BlogPage";
import Newsletter from "./components/newsletter";

const projectItems = [
  { name: "Women & Youth Empowerment", path: "/projects/women-youth" },
  { name: "Education & Digital Access", path: "/projects/education" },
  { name: "Water, Sanitation (WASH) & Health", path: "/projects/wash-health" },
  { name: "Livelihoods & Food Security", path: "/projects/livelihoods" },
  {
    name: "Conservation & Community Co-Existence",
    path: "/projects/conservation",
  },
  { name: "Creativity, Culture & Arts", path: "/projects/creativity-arts" },
];

const mainNavLinks = [
  { name: "Our Vision", path: "/our-vision" },
  { name: "About Us", path: "/about-us" },
  { name: "Our Team", path: "/our-team" },
  { name: "Blog", path: "/blog" },
];

function NavigationWrapper() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <NavigationContent key={location.pathname} location={location} />;
}

function NavigationContent({ location }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);

  const isHomePage =
    location.pathname === "/" || location.pathname === "/home";

  const navTextColor = isHomePage ? "text-white" : "text-[#2B2B2B]";
  const hoverColor = "hover:text-[#3D7C7D]";

  const getLinkClassName = ({ isActive }) =>
    `text-base lg:text-[17px] font-medium transition-colors py-1 border-b-2 ${
      isActive
        ? "text-[#3D7C7D] border-[#3D7C7D]"
        : `${navTextColor} ${hoverColor} border-transparent`
    }`;

  return (
    <>
      <header
        className={`w-full top-0 left-0 z-50 transition-colors ${
          isHomePage
            ? "absolute bg-transparent"
            : "sticky bg-[#FDFBF7]/95 backdrop-blur-xs border-b border-stone-200"
        }`}
      >
        <nav
          aria-label="Primary Navigation"
          className="max-w-7xl mx-auto px-6 lg:px-12 h-24 flex items-center justify-between"
        >
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/img/logo.png"
              alt="Jafuta Foundation"
              className="h-16 w-16 lg:h-20 lg:w-20 p-1.5 rounded-full object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <NavLink to="/" end className={getLinkClassName}>
                Home
              </NavLink>

              <NavLink to="/our-vision" className={getLinkClassName}>
                Our Vision
              </NavLink>

              <div
                className="relative py-3"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1.5 text-base lg:text-[17px] font-medium transition-colors py-1 border-b-2 ${
                      isActive || location.pathname.startsWith("/projects")
                        ? "text-[#3D7C7D] border-[#3D7C7D]"
                        : `${navTextColor} ${hoverColor} border-transparent`
                    }`
                  }
                >
                  <span>Projects</span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </NavLink>

                {isDropdownOpen && (
                  <div className="absolute left-0 top-full w-80 bg-white shadow-xl rounded-sm py-2 flex flex-col z-50 border border-stone-100">
                    {projectItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="px-5 py-3 text-[15px] text-[#2B2B2B] hover:bg-stone-50 hover:text-[#3D7C7D] transition-colors font-normal border-b border-stone-100 last:border-0 leading-snug"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {mainNavLinks.slice(1).map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={getLinkClassName}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jafuta Foundation on Facebook"
                className={`${navTextColor} ${hoverColor} transition-colors p-1.5`}
              >
                <FaFacebookF className="text-base" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jafuta Foundation on Instagram"
                className={`${navTextColor} ${hoverColor} transition-colors p-1.5`}
              >
                <FaInstagram className="text-base" />
              </a>
            </div>

            <Link
              to="/donate"
              className="bg-[#3D7C7D] hover:bg-[#316667] px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-white rounded-sm transition-colors shadow-xs"
            >
              Donate
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            className={`lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-sm border transition-colors cursor-pointer ${
              isHomePage
                ? "border-white/40 text-white hover:bg-white/10"
                : "border-stone-300 text-[#2B2B2B] hover:border-[#3D7C7D] hover:text-[#3D7C7D]"
            }`}
          >
            {isMobileMenuOpen ? (
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

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-200 px-6 py-5 shadow-xl space-y-2">
            <Link
              to="/"
              className="block py-2.5 text-base font-medium text-[#2B2B2B] hover:text-[#3D7C7D]"
            >
              Home
            </Link>

            <Link
              to="/our-vision"
              className="block py-2.5 text-base font-medium text-[#2B2B2B] hover:text-[#3D7C7D]"
            >
              Our Vision
            </Link>

            <div>
              <button
                type="button"
                onClick={() => setIsMobileProjectsOpen((prev) => !prev)}
                className="w-full flex items-center justify-between py-2.5 text-base font-medium text-[#2B2B2B] hover:text-[#3D7C7D] cursor-pointer"
              >
                <span>Projects</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isMobileProjectsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isMobileProjectsOpen && (
                <div className="pl-4 border-l-2 border-[#3D7C7D]/30 space-y-1.5 my-1">
                  {projectItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block py-1.5 text-sm text-stone-600 hover:text-[#3D7C7D]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {mainNavLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2.5 text-base font-medium text-[#2B2B2B] hover:text-[#3D7C7D]"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/donate"
              className="block mt-2 text-center bg-[#3D7C7D] hover:bg-[#316667] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white rounded-sm transition-colors"
            >
              Donate
            </Link>
          </div>
        )}
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/our-vision" element={<Vision />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/our-team" element={<OurTeamPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <NavigationWrapper />
    </BrowserRouter>
  );
}
