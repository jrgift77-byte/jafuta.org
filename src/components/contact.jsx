import 'react';

const contact = () => {
  return (
    <div>
       <section className="relative w-full">
        <img src="./public/img/Batoka-creatives-beads.webp" alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        
       
        <div className="relative z-10 max-w-360 mx-auto grid lg:grid-cols-12 px-8 lg:px-24 py-20 lg:py-28 gap-12 items-start">
          
          
          <div className="lg:col-span-5 text-white">
            <h3 className="text-[36px] lg:text-[48px] font-medium leading-tight">Contact us</h3>
            <p className="mt-4 text-[17px] font-light text-white/90 leading-relaxed">Feel free to contact us with any questions.</p>
            
            <p className="mt-8 font-bold text-[18px]">Email</p>
            <p className="mt-1 text-[18px] font-light">Email: gcvj@jafuta.org</p>
          </div>
          
         
          <div className="lg:col-span-6 lg:col-start-7 text-white">
            <h3 className="text-[36px] lg:text-[48px] font-medium leading-tight">Subscribe</h3>
            <p className="mt-4 text-[17px] font-light text-white/90 leading-relaxed">Sign up to our quarterly newsletter to receive news and updates.</p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center max-w-115 w-full gap-4">
              <input 
                placeholder="Email Address" 
                className="w-full h-15 px-6 bg-white text-black outline-none rounded-md" 
              />
              <button 
                className="w-full sm:w-auto h-15 bg-[#3D7C7D] px-10 text-white font-medium whitespace-nowrap rounded-md transition hover:bg-[#2d5c5e]"
              >
                Sign Up
              </button>
            </div>
            
            <p className="mt-4 text-[13px] text-white/70">We respect your privacy.</p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default contact;
