import  'react';
import Footer from "./footer.jsx"

export default function AboutUsPage() {
 
  const partners = [
    { name: 'Matter', logo: './img/Matter+Logo.webp' },
    { name: 'Uncommon', logo: './img/Uncommon.webp' },
    { name: 'Lesedi Community Project', logo: './img/Lesedi+Community+Projects.webp' },
    { name: 'Children Community', logo: './img/Children+Community.webp' },
    { name: 'J17 Foundation', logo: './img/j17+foundation+logo.webp' },
    { name: 'Rotary', logo: './img/Rotary+International+Logo.webp' },
    { name: 'Vimba Zimbabwe', logo: './img/Miracle+Missions+Vimba.webp' },
    { name: 'Jacana Foundation', logo: './img/hwange.jpeg' },
    { name: 'Green Team', logo: './img/Africa+Eden.webp' },
  ];

  return (
    <div className="bg-[#FAF9F6] text-[#333333] font-sans min-h-screen">
      
      
      <div className="w-full h-[60vh] bg-gray-300 relative overflow-hidden">
        <img 
          src="./img/girl.jpeg" 
          alt="Jafuta Foundation Hero" 
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className="max-w-4xl mx-auto text-center py-12 px-6">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1F2937] italic tracking-wide">
          ‘Changing lives through education, equality, and opportunity’
        </h2>
      </div>

      <div className="max-w-3xl mx-auto px-6 mb-16">
        <div className="relative aspect-video bg-black rounded-md shadow-lg overflow-hidden group">
          <iframe 
            className="w-full h-full" 
            src="https://www.youtube.com/watch?v=KgB8FFUXh0U&time_continue=4&source_ve_path=NzY3NTg&embeds_referring_euri=https%3A%2F%2Fwww.jafutafoundation.org%2F" 
            title="Jafuta Foundation - We Had A Dream"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

     
      <div className="bg-[#EFECE6] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-12 text-[#2C3E50]">Our Story</h2>
          
          <div className="space-y-16">
           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-4">
                <h3 className="text-lg font-bold uppercase tracking-wider text-gray-700">The People</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  The rural communities of Gibubutu, Chisuma, and Sidinda villages faced severe challenges due to limited access to essential resources, clean drinking water, under-resourced schools, and minimal income-generating opportunities. Most families depended on subsistence farming in a dry, arid region with scarce rainfall, making daily survival and progress an ongoing struggle.
                </p>
              </div>
              
              <div className="h-72 bg-gray-400 rounded-md overflow-hidden shadow-sm">
                <img src="./public/img/women-africa-hero-image.webp" alt="Community Members" className="w-full h-full object-cover" />
              </div>
            </div>

           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="h-72 bg-gray-400 rounded-md overflow-hidden shadow-sm order-last md:order-first">
                <img src="./public/img/Girls_sports_africa.webp" alt="Village Infrastructure" className="w-full h-full object-cover" />
              </div>
            
              <div className="space-y-4">
                <h3 className="text-lg font-bold uppercase tracking-wider text-gray-700">The Reality</h3>
                <ul className="space-y-2 text-base text-gray-600 list-disc list-inside leading-relaxed">
                  <li>Students walked long distances to school, often without access to textbooks, computers, or proper learning materials.</li>
                  <li>Communities depended on unsafe and distant water sources, forcing families to spend hours collecting water.</li>
                  <li>Many young people had no access to employment, vocational training, or life skills, leaving them without hope for a sustainable future.</li>
                  <li>Rural dwellers relied solely on subsistence farming in a dry, arid region with consistently low rainfall.</li>
                  <li>Families faced chronic food insecurity and limited access to nutritious produce during the dry months.</li>
                  <li>Girls often missed school due to lack of sanitary hygiene products, leading to absenteeism and educational disadvantage.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

     
      <div className="max-w-4xl mx-auto text-center py-16 px-6">
        <h2 className="text-3xl font-bold font-serif mb-6 text-[#2C3E50]">Our Story Now</h2>
        <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Jafuta Foundation has implemented a series of targeted, community-driven projects to address the pressing challenges faced by rural families. Each initiative was designed to promote education, equality, opportunity, and long-term self-reliance through practical and sustainable solutions.
        </p>

       
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          <div className="h-80 bg-gray-400 rounded-md overflow-hidden shadow-md">
            <img src="./public/img/boy.jpeg" alt="Impact Presentation" className="w-full h-full object-cover" />
          </div>
          <div className="h-80 bg-gray-400 rounded-md overflow-hidden shadow-md">
            <img src="./public/img/girl-school-africa.webp" alt="Tech Center Learning" className="w-full h-full object-cover" />
          </div>
           <div className="h-80 bg-gray-400 rounded-md overflow-hidden shadow-md">
            <img src="./public/img/woman-sewing-africa.webp" alt="Tech Center Learning" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      
      <div className="bg-white border-t border-b border-gray-200 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold font-serif mb-10 text-[#2C3E50]">Our Partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center">
            {partners.map((partner, idx) => (
              <img 
                key={idx} 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}