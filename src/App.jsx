import './App.css'
import { useState } from 'react' 
import { Routes, Route, BrowserRouter, Link, useLocation } from 'react-router-dom'
import Home from './components/home'
import Vision from './components/vision'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import AboutUsPage from './components/aboutus'
import OurTeamPage from './components/OurTeamPage' 
import BlogPage from './components/BlogPage'
import Newsletter from './components/newsletter'




function NavigationWrapper() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

 
  const navTextColor = isHomePage ? "text-white" : "text-[#2b2b2b]";
  const iconColor = isHomePage ? "text-white" : "text-[#2b2b2b]";
  const hoverColor = "hover:text-[#39868E]";

  const projectItems = [
    { name: "Women & Youth Empowerment", path: "/projects" },
    { name: "Education & Digital Access", path: "/projects" },
    { name: "Water, Sanitation (WASH) & Health", path: "/projects" },
    { name: "Livelihoods & Food Security", path: "/projects" },
    { name: "Conservation & Community Co-Existence", path: "/projects" },
    { name: "Creativity, Culture & Arts", path: "/projects" },
  ];

  return (
    <>
      <nav className="w-full absolute top-0 left-0 z-50 flex flex-row justify-between items-center text-black px-6 lg:px-12 h-24 bg-transparent ">
        <div>
          <Link to="/">
            <img src="/img/logo.png" alt="Jafuta" className="p-2 h-20 w-20 rounded-full" />
          </Link>
        </div>

        <div className="flex flex-row items-center gap-10">
          
          
          <div className="flex flex-row gap-5 items-center">
            <Link to="/" className={`text-lg ${navTextColor} ${hoverColor} hover:underline`}>Home</Link>
            <Link to="/our-vision" className={`text-lg ${navTextColor} ${hoverColor} hover:underline`}>Our Vision</Link>
            
            
            <div 
              className="relative py-2"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link to="/projects" className={`text-lg ${navTextColor} ${hoverColor} hover:underline cursor-pointer`}>
                Projects
              </Link>

             
              {isDropdownOpen && (
                <div className="absolute left-0 top-full mt-1 w-80 bg-white shadow-xl rounded-sm py-2 flex flex-col z-50 border border-gray-100">
                  {projectItems.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className="px-5 py-2.5 text-[15px] text-gray-800 hover:bg-gray-50 hover:text-[#39868E] transition duration-150 font-normal border-b border-gray-50 last:border-0 leading-tight"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about-us" className={`text-lg ${navTextColor} ${hoverColor} hover:underline`}>About Us</Link>
            <Link to="/our-team" className={`text-lg ${navTextColor} ${hoverColor} hover:underline`}>Our Team</Link>
            <Link to="/blog" className={`text-lg ${navTextColor} ${hoverColor} hover:underline`}>Blog</Link>
          </div>
            
          
          <div className="flex flex-row gap-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`mt-1 ${iconColor} ${hoverColor} inline-flex items-center`}>
              <FaFacebookF className="text-lg" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`mt-1 ${iconColor} ${hoverColor} inline-flex items-center`}>
              <FaInstagram className="text-lg" />
            </a>
          </div>
           
          <div>
            <Link to="/donate">
              <button className="bg-[#39868E] hover:bg-[#32816E] px-5 py-2 flex items-center justify-center text-white rounded">
                Donate
              </button>
            </Link>
          </div>

        </div>
      </nav>

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


function App() {
  return (
    <BrowserRouter>
      <NavigationWrapper />
    </BrowserRouter>
  )
}

export default App
