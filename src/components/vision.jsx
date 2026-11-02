import { useState } from 'react';
import Footer from "./footer.jsx";
import ValueCard from "./valuecard.jsx";
import Form from "./form.jsx";

const Vision = () => {
  const [email, setEmail] = useState("");

  const coreValues = [
    { title: "Integrity", description: "We act with transparency, accountability, and responsibility in stewarding every resource entrusted to us." },
    { title: "Innovation", description: "We embrace creativity, technology, and new ideas that drive sustainable change." },
    { title: "Respect", description: "We honour people, culture, and the environment, working in harmony with communities and traditional leadership." },
    { title: "Collaboration", description: "We believe in meaningful partnerships with communities, donors, government, and the environment itself." },
    { title: "Empowerment", description: "We build capacity, confidence, and opportunity — never dependency." },
    { title: "Sustainability", description: "We focus on long-term, replicable impact that benefits both people and nature." },
    { title: "Compassion", description: "We lead with empathy, humility, and a deep respect for human dignity." }
  ];

  return (
    <div className="w-full">

    <section className="w-full bg-white py-16 lg:py-24">
 
  <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
    
    
    <div className="flex flex-col gap-12">
      
      
      <div>
        <h1 className="text-[34px] lg:text-[48px] font-bold leading-[1.15] text-black tracking-tight">
          "Everyone deserves to thrive with dignity and hope."
        </h1>
      </div>

      
      <div>
        <h2 className="text-[28px] font-bold text-black mb-4">Our Vision</h2>
        <p className="text-[16px] lg:text-[17px] leading-8 text-[#555555] font-light">
          To foster self-sustaining community development in the Hwange District
          (Dibutibu, Sizinda, Chisuma, Monde and Matetsi) through education,
          empowerment, and livelihood opportunities that build resilience and
          improve quality of life.
        </p>
      </div>
      
      
      <div>
        <h2 className="text-[28px] font-bold text-black mb-4">Our Mission</h2>
        <p className="text-[16px] lg:text-[17px] leading-8 text-[#555555] font-light">
          Jafuta Foundation is dedicated to empowering rural communities by providing
          increased access to essential resources and services, championing conservation,
          advancing gender equality, fostering resilience, and promoting self-sufficiency.
          Through collaborative efforts, we work to create sustainable environments that
          uplift lives and safeguard our shared future.
        </p>
      </div>

    </div>


    <div className="w-full h-full min-h-100 lg:min-h-150"> 
      <img
        src="/img/jr.webp"
        alt="Jafuta women"
        className="w-full h-full object-cover rounded-sm"
      />
    </div>

  </div>
</section>


      
      <section className="bg-[#e9ddd0] w-full py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-[30px] font-bold mb-10 text-[#2e2a26]">Our Core Values</h2>

         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreValues.map((value, index) => (
              <ValueCard 
                key={index} 
                title={value.title} 
                description={value.description} 
              />
            ))}
          </div>
        </div>
      </section>

     
     

      
      <Form email={email} setEmail={setEmail} />
      <Footer />
    </div>
  );
};

export default Vision;
