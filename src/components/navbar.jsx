import 'react';

export default function Navbar({ currentPage, setPage }) {
  const navItems = ['Home', 'Our Vision', 'About Us', 'Our Team', 'Blog'];
  
  return (
    <nav className="sticky top-0 bg-[#FDFBF7] shadow-sm z-50 px-6 py-4 flex justify-between items-center border-b border-stone-200">
    
      <div className="absolute top-0 left-0 bg-red-500 text-white text-[9px] font-mono px-1 select-none pointer-events-none z-50">
        &lt;Navbar /&gt;
      </div>

      <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setPage('Home')}>
        <div className="w-10 h-10 rounded-full border-2 border-[#4A5343] flex items-center justify-center bg-white">
          <span className="text-[10px] font-serif font-bold text-[#4A5343]">JAFUTA</span>
        </div>
        <div className="hidden md:block font-serif text-xs font-bold text-[#4A5343] tracking-widest">
          JAFUTA FOUNDATION
        </div>
      </div>

      <div className="flex items-center space-x-6 font-sans text-sm font-medium text-[#4A5343]">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setPage(item)}
            className={`hover:text-[#1E6B65] transition-colors py-1 ${
              currentPage === item ? 'text-[#1E6B65] font-bold border-b-2 border-[#1E6B65]' : ''
            }`}
          >
            {item}
          </button>
        ))}
        <button 
          onClick={() => setPage('Home')} 
          className="bg-[#1E6B65] text-white px-5 py-2 rounded shadow hover:bg-[#154d49] transition-all font-semibold text-xs"
        >
          Donate
        </button>
      </div>
    </nav>
  );
}
