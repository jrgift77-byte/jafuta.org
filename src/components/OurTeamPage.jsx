import Footer from "./footer";
import Form from "./form";

const TEAM_MEMBERS = [
  {
    name: "Gail van Jaarsveldt",
    role: "Founder & Chief Executive Officer",
    image: "/img/Gail+Image+1.webp",
  },
  {
    name: "Minenhle Moyo",
    role: "Chief Operations Officer",
    image: "/img/Minenhle+Moyo.webp",
  },
  {
    name: "Sipho Moyo",
    role: "Outreach Director",
    image: "/img/Sipho+Moyo+1.webp",
  },
  {
    name: "Courtney Connolly",
    role: "Education Director & Board Secretary",
    image: "/img/Courtney+Connelly.webp",
  },
  {
    name: "Jacqueline Gurajena",
    role: "Human Capital & Women Empowerment Programs Director",
    image: "/img/Sipho+Moyo.webp",
  },
  {
    name: "Tsitsi Mposiwa",
    role: "Counsellor & Gender Champion",
    image: "/img/Tsitsi+Mposiwa.webp",
  },
];

const TRUSTEES = [
  { name: "Benoit Fayd'herbe", image: "/img/Benoit+Fayd'herbe (1).webp" },
  { name: "Malcolm Ainscough", image: "/img/Malcolm+Ainscough.webp" },
  { name: "Kathy Cole (USA)", image: "" },
  { name: "Joshua Magaba", image: "/img/Joshua+Magaba (1).webp" },
  { name: "Gail van Jaarsveldt", image: "/img/Gail+Image+1.webp" },
  { name: "Nyasha Mupita", image: "/img/Nyasha+Mupita.webp" },
  { name: "Courtney Connolly", image: "/img/Courtney+Connelly.webp" },
  { name: "Sara Gardiner", image: "/img/Sara+Gardiner.webp" },
];

const getInitials = (name) =>
  name
    .replace(/\(.*?\)/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

export default function OurTeamPage() {
  return (
    <div className="bg-[#FAF9F6] text-[#333333] font-sans min-h-screen flex flex-col">
      <main className="grow">
        <section className="max-w-4xl mx-auto text-center py-16 sm:py-20 px-6">
          <div className="bg-white rounded-md shadow-xs border border-stone-200/80 p-8 sm:p-12 max-w-2xl mx-auto">
            <blockquote className="text-lg sm:text-xl lg:text-2xl font-serif font-medium text-[#2B2B2B] italic mb-4 leading-relaxed">
              &ldquo;If you want to go fast, go alone. If you want to go far, go
              together.&rdquo;
            </blockquote>
            <cite className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#3D7C7D] block uppercase not-italic">
              — African Proverb
            </cite>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-20 lg:pb-28">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-center mb-12 sm:mb-14 text-[#2B2B2B] tracking-tight">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {TEAM_MEMBERS.map((member) => (
              <article key={member.name} className="flex flex-col group">
                <div className="w-full aspect-4/5 bg-stone-200 rounded-sm overflow-hidden shadow-xs mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#2B2B2B] font-serif mb-1">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold tracking-wider text-[#3D7C7D] uppercase leading-snug">
                  {member.role}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#EFECE6] py-20 lg:py-28 px-6 sm:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-center mb-14 sm:mb-16 text-[#2B2B2B] tracking-tight">
              Board of Trustees
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-14 justify-items-center">
              {TRUSTEES.map((trustee) => (
                <article
                  key={trustee.name}
                  className="flex flex-col items-center text-center max-w-44 group"
                >
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#4A3E36] border-4 border-white shadow-sm overflow-hidden mb-4 flex items-center justify-center">
                    {trustee.image ? (
                      <img
                        src={trustee.image}
                        alt={trustee.name}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
                      />
                    ) : (
                      <span className="text-white font-serif text-2xl font-semibold tracking-wider">
                        {getInitials(trustee.name)}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-[#2B2B2B] leading-snug">
                    {trustee.name}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Form />
      </main>
      <Footer />
    </div>
  );
}
