import  "react";
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
    <div className="w-full bg-white px-4 sm:px-8 md:px-14 lg:px-24 py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[44px] font-medium text-[#2d2d2d]">
            Community Voices
          </h2>

          <div className="flex items-center gap-3 lg:hidden">
            <button 
              type="button"
              aria-label="Previous testimonial"
              className="swiper-prev-btn w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#529394] text-white flex items-center justify-center shadow-md hover:bg-[#3D7C7D] transition duration-200"
            >
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>

            <button 
              type="button"
              aria-label="Next testimonial"
              className="swiper-next-btn w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#529394] text-white flex items-center justify-center shadow-md hover:bg-[#3D7C7D] transition duration-200"
            >
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        <button 
          type="button"
          aria-label="Previous testimonial"
          className="swiper-prev-btn hidden lg:flex absolute -left-14 top-[38%] -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#529394] text-white items-center justify-center shadow-lg hover:bg-[#3D7C7D] transition duration-200"
        >
          <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>

        <button 
          type="button"
          aria-label="Next testimonial"
          className="swiper-next-btn hidden lg:flex absolute -right-14 top-[38%] -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#529394] text-white items-center justify-center shadow-lg hover:bg-[#3D7C7D] transition duration-200"
        >
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
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="w-full"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx} className="py-2 h-auto">
              <div className="bg-[#F0E6DE] p-6 sm:p-8 lg:p-10 min-h-65 sm:min-h-80 lg:min-h-90 h-full flex flex-col justify-start rounded-sm select-none">
                <h3 className="text-[19px] sm:text-[22px] font-medium text-[#2d2d2d] mb-3 sm:mb-4">
                  {item.name}
                </h3>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-light text-[#4a4a4a] leading-relaxed italic">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-14 sm:mt-20 lg:mt-24 max-w-4xl pt-2 sm:pt-4">
          <blockquote className="text-[24px] sm:text-[32px] lg:text-[42px] font-normal text-[#232323] leading-snug sm:leading-tight tracking-tight">
            “With the support from donors, <br className="hidden sm:inline" /> we have been able to serve our <br className="hidden sm:inline" /> community better than ever.”
          </blockquote>
          <p className="mt-4 sm:mt-6 text-[13px] sm:text-[14px] font-light text-gray-500">
            — Gail van jaarsveld, Director
          </p>
        </div>

      </div>
    </div>
  );
}
