import  'react';

const Impact = () => {
  return (
    <div>
      <div className="w-full  font-sans antialiased overflow-x-hidden">

     <section className="relative h-screen w-full overflow-hidden">
  <img src="./public/img/hero.png" alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
  <div className="absolute inset-0 bg-black/30" />
  
  
  <div className="relative z-10 h-full flex flex-col justify-start px-10 lg:px-24 pt-32 pb-8">
    <h1 className="text-[34px] lg:text-[56px] mt-60 mr-25 leading-normal text-white tracking-tight">
      Empowering Rural Communities<br/>Through Action.
    </h1>
  </div>
</section>

      
      <section className="bg-white px-8 lg:px-24 py-20 lg:py-28">
        <div className="max-w-305 mx-auto flex flex-row gap-0 lg:gap-20">
            <div className="flex w-1/2 flex-col">
          <h2 className="text-[38px] lg:text-[56px] leading-[1.05] font-medium text-[#2B2B2B]">Supporting education<br/>and community.</h2>
          <button className="mt-8 w-50 lg:mt-10 bg-[#3D7C7D] px-10 py-4 text-[13px] tracking-[0.2em] uppercase text-white">Our Vision</button>
          </div>
          <div className="mt-10 w-1/2 space-y-6 text-[18px] lg:text-[19px] leading-[1.8] text-[#5A5A5A] font-light flex flex-col">
            <p>We provide rural families with access to quality education, digital technology, clean water, nutritional gardens, equal opportunities for girls, skills training, and income-generating initiatives,</p>
            <p>Jafuta Foundation is nurturing healthier and more resilient communities by restoring dignity, strengthening independence, and inspiring lasting hope for generations to come.</p>
          </div>
        </div>
      </section>

      
      <section className="bg-[#4A3E36] px-8 lg:px-24 py-16 lg:py-24">
        <div className="max-w-360 mx-auto flex flex-col gap-20 lg:gap-32">

          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6"><img src="./public/img/women-nonprofit-skills.webp" alt="Women & Youth" className="w-full h-105 lg:h-150 object-cover" /></div>
            <div className="lg:col-span-5 lg:col-start-8">
              <h3 className="text-[32px] lg:text-[42px] leading-[1.1] font-medium text-white">Women & Youth<br/>Empowerment</h3>
              <p className="mt-6 text-[16px] lg:text-[17px] leading-[1.8] text-[#E8DDD5]/90 font-light">Through deepened impact in gender empowerment, girls' dignity, education, scholarships, and vocational skills training, Jafuta Foundation creates pathways for women and young people to build confidence, and develop meaningful livelihoods.</p>
              <button className="mt-8 bg-[#3D7C7D] px-8 py-3 text-[13px] uppercase text-white">Learn More</button>
            </div>
          </div>

         
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <h3 className="text-[32px] lg:text-[42px] leading-[1.1] font-medium text-white">Education & Digital<br/>Access</h3>
              <p className="mt-6 text-[16px] lg:text-[17px] leading-[1.8] text-[#E8DDD5]/90 font-light">We strengthen rural education through supplementary and informal learning, teacher development & training, learning resources, scholarships, and access to technology—bridging the digital divide and expanding education opportunities for rural children and youth.</p>
              <button className="mt-8 bg-[#3D7C7D] px-8 py-3 text-[13px] uppercase text-white">Learn More</button>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2"><img src="./public/img/women-nonprofit-skills.webp" alt="Education" className="w-full h-105 lg:h-150 object-cover" /></div>
          </div>

          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6"><img src="./public/img/women-nonprofit-skills.webp" alt="WASH" className="w-full h-105 lg:h-150 object-cover" /></div>
            <div className="lg:col-span-5 lg:col-start-8">
              <h3 className="text-[32px] lg:text-[42px] leading-[1.1] font-medium text-white">Water, Sanitation (WASH)<br/>& Health</h3>
              <p className="mt-6 text-[16px] lg:text-[17px] leading-[1.8] text-[#E8DDD5]/90 font-light">Improving health and livelihoods by expanding access to solar-powered boreholes/wells, clean and accessible water points, safe sanitation, hygiene education, mobile health clinics, and mental health education and counselling within rural communities.</p>
              <button className="mt-8 bg-[#3D7C7D] px-8 py-3 text-[13px] uppercase text-white">Learn More</button>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <h3 className="text-[32px] lg:text-[42px] leading-[1.1] font-medium text-white">Livelihoods & Food<br/>Security</h3>
              <p className="mt-6 text-[16px] lg:text-[17px] leading-[1.8] text-[#E8DDD5]/90 font-light">Our Livelihoods & Food Security Programme supports communities through nutritional community gardens, climate-smart agriculture, and the growing and distribution of food-bearing and indigenous trees.</p>
              <button className="mt-8 bg-[#3D7C7D] px-8 py-3 text-[13px] uppercase text-white">Learn More</button>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2"><img src="./public/img/women-nonprofit-skills.webp" alt="Livelihoods" className="w-full h-105 lg:h-150 object-cover" /></div>
          </div>

          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6"><img src="./public/img/women-nonprofit-skills.webp" alt="Conservation" className="w-full h-105 lg:h-150 object-cover" /></div>
            <div className="lg:col-span-5 lg:col-start-8">
              <h3 className="text-[32px] lg:text-[42px] leading-[1.1] font-medium text-white">Conservation &<br/>Community<br/>Co-Existence</h3>
              <p className="mt-6 text-[16px] lg:text-[17px] leading-[1.8] text-[#E8DDD5]/90 font-light">We protect wildlife while supporting the communities that live alongside it. Through education, conflict-mitigation, habitat restoration, and conservation-linked livelihoods, we can help people and wildlife to better coexist safely and sustainably.</p>
              <button className="mt-8 bg-[#3D7C7D] px-8 py-3 text-[13px] uppercase text-white">Learn More</button>
            </div>
          </div>

         
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <h3 className="text-[32px] lg:text-[42px] leading-[1.1] font-medium text-white">Creativity, Arts & Culture</h3>
              <p className="mt-6 text-[16px] lg:text-[17px] leading-[1.8] text-[#E8DDD5]/90 font-light">From deep cultural roots to contemporary creative talent, we celebrate Zimbabwe's identity through artistic and visual expression.</p>
              <button className="mt-8 bg-[#3D7C7D] px-8 py-3 text-[13px] uppercase text-white">Learn More</button>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2"><img src="./public/img/women-nonprofit-skills.webp" alt="Creativity" className="w-full h-105 lg:h-150 object-cover" /></div>
          </div>

        </div>
      </section>
    </div>
    </div>
  );
}

export default Impact;
