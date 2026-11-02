import "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";

export default function CommunityVoices() {
 
  const testimonials = [
    {
      name: "Edward Mazunga",
      text: "“Your commitment to my education and studies has well and truly transformed my life. I am able to pursue my studies and focus on my future as a lawyer without the burden of financial worries and I am immensely grateful for the opportunities you have created.”"
    },
    {
      name: "Muzi",
      text: "“Through access to the internet and Career Guidance program I was introduced to electrics. I knew what I wanted to be then and I am now reaching my dreams thanks to the mentorship and support through Jafuta Foundation.”"
    },
    {
      name: "Mildred M",
      text: "“From the village to becoming a qualified Software Engineer—something I never imagined before Jafuta Foundation.”"
    },
    {
      name: "Teen, Ndimakule",
      text: "“I never thought I'd use a computer until I joined the Education and Technology Centre.”"
    },
    {
      name: "Community Member",
      text: "“My daughters and I no longer walk long distances for water thanks to the solar-powered well nearby.”"
    },
    {
      name: "Solani N",
      text: "“Through my work at Batoka Creatives, I can now feed my family and pay school fees.”"
    },
    {
      name: "Student B",
      text: "“Thanks to the bicycle I received, I can attend school every day and study longer.”"
    }
  ];

  return (
    <div className="w-full bg-white px-8 lg:px-24 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        
        <h2 className="text-[32px] lg:text-[44px] font-medium text-[#2d2d2d] mb-12">
          Community Voices
        </h2>

        
        <button className="swiper-prev-btn absolute left-2 lg:-left-12.5 top-[25%] lg:top-[35%] -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#529394] text-white flex items-center justify-center shadow-lg hover:bg-[#3D7C7D] transition duration-200">
          <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>

       
        <button className="swiper-next-btn absolute right-2 lg:-right-12.5 top-[25%] lg:top-[35%] -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#529394] text-white flex items-center justify-center shadow-lg hover:bg-[#3D7C7D] transition duration-200">
          <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>

        
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-prev-btn",
            nextEl: ".swiper-next-btn",
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx} className="py-2">
              <div className="bg-[#F0E6DE] p-8 lg:p-10 min-h-90 flex flex-col justify-start rounded-sm select-none">
                <h3 className="text-[22px] font-medium text-[#2d2d2d] mb-4">
                  {item.name}
                </h3>
                <p className="text-[15px] lg:text-[16px] font-light text-[#4a4a4a] leading-relaxed italic">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

     
        <div className="mt-24 max-w-4xl pt-4">
          <blockquote className="text-[32px] lg:text-[42px] font-normal text-[#232323] leading-tight tracking-tight">
            “With the support from donors, <br /> we have been able to serve our <br /> community better than ever.”
          </blockquote>
          <p className="mt-6 text-[14px] font-light text-gray-500">
            — Gail van jaarsveld, Director
          </p>
        </div>

      </div>
    </div>
  );
}
