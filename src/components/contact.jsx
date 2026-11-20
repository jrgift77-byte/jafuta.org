import 'react';

const Contact = () => {
  return (
    <div>
      <section className="relative w-full">
        <img 
          src="/img/Batoka-creatives-beads.webp" 
          alt="Contact" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 px-5 sm:px-8 md:px-14 lg:px-24 py-14 sm:py-20 lg:py-28 gap-10 sm:gap-12 items-start">
          
          <div className="lg:col-span-5 text-white">
            <h3 className="text-[28px] sm:text-[36px] lg:text-[48px] font-medium leading-tight">
              Contact us
            </h3>
            <p className="mt-3 sm:mt-4 text-[15px] sm:text-[17px] font-light text-white/90 leading-relaxed">
              Feel free to contact us with any questions.
            </p>
            
            <p className="mt-6 sm:mt-8 font-bold text-[16px] sm:text-[18px]">
              Email
            </p>
            <p className="mt-1 text-[16px] sm:text-[18px] font-light break-all sm:break-normal">
              Email:{' '}
              <a 
                href="mailto:gcvj@jafuta.org" 
                className="underline decoration-white/50 hover:decoration-white transition"
              >
                gcvj@jafuta.org
              </a>
            </p>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7 text-white w-full">
            <h3 className="text-[28px] sm:text-[36px] lg:text-[48px] font-medium leading-tight">
              Subscribe
            </h3>
            <p className="mt-3 sm:mt-4 text-[15px] sm:text-[17px] font-light text-white/90 leading-relaxed">
              Sign up to our quarterly newsletter to receive news and updates.
            </p>
            
            <form className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center max-w-lg w-full gap-3 sm:gap-4">
              <input 
                type="email"
                required
                placeholder="Email Address" 
                className="w-full h-12 sm:h-14 px-4 sm:px-6 bg-white text-black text-[15px] sm:text-base outline-none rounded-md" 
              />
              <button 
                type="submit"
                className="w-full sm:w-auto h-12 sm:h-14 bg-[#3D7C7D] px-8 sm:px-10 text-white text-[15px] sm:text-base font-medium whitespace-nowrap rounded-md transition hover:bg-[#2d5c5e] cursor-pointer"
              >
                Sign Up
              </button>
            </form>
            
            <p className="mt-3 sm:mt-4 text-[12px] sm:text-[13px] text-white/70">
              We respect your privacy.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
