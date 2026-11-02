import 'react';
import Footer from "./footer.jsx";

const ARTICLES = [
  {
    id: 1,
    date: 'April 2026',
    title: 'New Beginnings & Big Dreams',
    excerpts: [
      "It's hard to believe we are already in April – the year is flying by! And what a start it has been. We hit the ground running in January (and we haven't stopped yet) as the new school year began.",
      "There is something incredibly special about this time of year. Watching our scholarship students – both new and returning – receive their uniforms and school supplies is always a deeply moving moment."
    ],
    image: './public/img/Children-africa-school-JafutaFoundation.webp',
    alt: 'Children in classroom using tablets',
  },
  {
    id: 2,
    date: 'Mar 2026',
    title: '2025 Annual Report',
    excerpts: [
      "The 2025 financial year was marked by consolidation, measurable impact, and strengthened institutional maturity for Jafuta Foundation. Operating in complex rural communities in the Chidobe and Matedsi Wards of Matabeleland North, the Foundation continued to deliver high-impact, community-driven programs aligned with its mission."
    ],
    image: './public/img/Batoka-creatives-beads.webp',
    alt: '2025 Annual Report Cover booklet',
  },
  {
    id: 3,
    date: 'Dec 2025',
    title: 'Jafuta Foundation 2025 Year End Reflection',
    excerpts: [
      "As we close 2025, we do so with full hearts and deep gratitude. This has been a year of remarkable progress on the ground – made possible by the belief, generosity, and encouragement of our supporters, partners, and friends."
    ],
    image: './public/img/boy_boxer_africa.webp',
    alt: 'Smiling child with sports gear',
  },
  {
    id: 4,
    date: 'Sept 2025',
    title: 'Celebrating our Batoka Creatives!',
    excerpts: [
      "As we cross into the second half of the year, it's incredible to reflect on how much has already happened – and how busy our team on the ground has been!"
    ],
    image: './public/img/Batoka-creatives-beads.webp',
    alt: 'Hand processing grain crops close up',
  }
];

export default function NewsletterGrid() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-5 pb-16 pt-24 text-center">
        <h2 className="text-3xl font-bold font-serif text-[#2C3E50] mb-16 tracking-wide mx-auto">
          Jafuta Foundation Newsletters
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-20 items-stretch">
          {ARTICLES.map((article) => (
            <article key={article.id} className="flex flex-col items-start text-left">
              
              <div className="w-full h-80 overflow-hidden mb-6 rounded-md shadow-sm">
                <img 
                  src={article.image} 
                  alt={article.alt} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="flex flex-col grow w-full items-start">
                <span className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-2 block">
                  {article.date}
                </span>
                
                <h3 className="text-2xl font-bold font-serif text-[#2C3E50] mb-4 leading-snug max-w-md">
                  {article.title}
                </h3>
                
                <div className="space-y-4 mb-8 grow max-w-lg">
                  {article.excerpts.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed text-[15px]">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
               
                <a 
                  href={`/blog/${article.id}`} 
                  className="mt-auto text-[#5FA9B7] hover:text-[#4A8A96] text-base font-medium tracking-wide underline decoration-1 underline-offset-4 transition-colors duration-200"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
