import 'react';
import Footer from "./footer.jsx";
import Form from "./form.jsx";

const TEAM_MEMBERS = [
  { name: "Gail van Jaarsveldt", role: "FOUNDER & CHIEF EXECUTIVE OFFICER", image: "./public/img/Gail+Image+1.webp" },
  { name: "Minenhle Moyo", role: "CHIEF OPERATIONS OFFICER", image: "./public/img/Minenhle+Moyo.webp" },
  { name: "Sipho Moyo", role: "OUTREACH DIRECTOR", image: "./public/img/Sipho+Moyo+1.webp" },
  { name: "Courtney Connolly", role: "EDUCATION DIRECTOR & BOARD SECRETARY", image: "./public/img/Courtney+Connelly.webp" },
  { name: "Jacqueline Gurajena", role: "HUMAN CAPITAL & WOMEN EMPOWERMENT PROGRAMS DIRECTOR", image: "./public/img/Sipho+Moyo.webp" },
  { name: "Tsitsi Mposiwa", role: "COUNSELLOR & GENDER CHAMPION", image: "./public/img/Tsitsi+Mposiwa.webp" }
];

const TRUSTEES = [
  { name: "Benoit Fayd'herbe", image: "./public/img/Benoit+Fayd'herbe (1).webp" },
  { name: "Malcolm Ainscough", image: "./public/img/Malcolm+Ainscough.webp" },
  { name: "Kathy Cole (USA)", image: "https://placeholder.com" },
  { name: "Joshua Magaba", image: "./public/img/Joshua+Magaba (1).webp" },
  { name: "Gail van Jaarsveldt", image: "./public/img/Gail+Image+1.webp" },
  { name: "Nyasha Mupita", image: "./public/img/Nyasha+Mupita.webp" },
  { name: "Courtney Connolly", image: "./public/img/Courtney+Connelly.webp" },
  { name: "Sara Gardiner", image: "./public/img/Sara+Gardiner.webp" }
];

export default function OurTeamPage() {
  return (
    <div className="bg-[#FAF9F6] text-[#333333] font-sans min-h-screen">
     
      <div className="max-w-4xl mx-auto text-center py-16 px-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 md:p-12 max-w-2xl mx-auto">
          <blockquote className="text-lg md:text-xl font-medium text-gray-700 italic mb-4 leading-relaxed">
            "If you want to go fast, go alone. If you want to go far, go together."
          </blockquote>
          <cite className="text-sm font-semibold tracking-wider text-gray-500 block uppercase not-italic">
            — African Proverb
          </cite>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold font-serif text-center mb-12 text-[#2C3E50]"> 
          Meet the Team 
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="flex flex-col group">
              <div className="w-full aspect-4/5 bg-gray-200 rounded-md overflow-hidden shadow-sm mb-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 font-serif mb-1"> 
                {member.name} 
              </h3>
              <p className="text-xs font-bold tracking-wider text-gray-500 uppercase leading-snug"> 
                {member.role} 
              </p>
            </div>
          ))}
        </div>
      </div>

      
      <div className="bg-[#EFECE6] py-20 px-6">
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-serif text-center mb-16 text-[#2C3E50]"> 
            Board of Trustees 
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 justify-items-center">
            {TRUSTEES.map((trustee) => (
              <div key={trustee.name} className="flex flex-col items-center text-center max-w-40">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gray-300 border-4 border-white shadow-md overflow-hidden mb-4">
                  <img 
                    src={trustee.image} 
                    alt={trustee.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-base font-bold text-gray-800 leading-tight"> 
                  {trustee.name} 
                </h3>
              </div>
            ))}
          </div>
        </div>
        <Form />
      </div>
      <Footer />
    </div>
  );
}
