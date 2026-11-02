import 'react';


export default function NewsletterSignup() {
  return (
    <div className="relative bg-stone-100/80 py-8 px-5 text-center max-w-xl mx-auto rounded-md my-6 border border-stone-200 shadow-xs">
      <div className="absolute top-0 left-0 bg-purple-600 text-white text-[9px] font-mono px-1 select-none pointer-events-none">
        &lt;NewsletterSignup /&gt;
      </div>
      
      <h3 className="text-lg font-serif font-bold text-[#4A5343] mb-0.5">Subscribe to our newsletter.</h3>
      <p className="text-xs text-stone-600 mb-4">Sign up to our quarterly newsletter to receive news and updates.</p>
      
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row justify-center items-center gap-2 max-w-sm mx-auto">
        <input 
          type="email" 
          placeholder="Email Address" 
          className="w-full px-3 py-1.5 border border-stone-300 rounded focus:outline-none focus:border-[#1E6B65] bg-white text-xs text-[#4A5343]" 
          required 
        />
        <button 
          type="submit" 
          className="w-full sm:w-auto bg-[#1E6B65] text-white px-4 py-1.5 rounded text-xs font-bold hover:bg-[#154d49] transition-all whitespace-nowrap tracking-wide uppercase"
        >
          Sign Up
        </button>
      </form>
      
      <p className="text-[9px] text-stone-400 mt-3 tracking-widest uppercase font-semibold">We respect your privacy.</p>
    </div>
  );
}
