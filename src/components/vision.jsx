import Footer from "./footer";
import ValueCard from "./valuecard";
import Form from "./form";

const coreValues = [
  {
    title: "Integrity",
    description:
      "We act with transparency, accountability, and responsibility in stewarding every resource entrusted to us.",
  },
  {
    title: "Innovation",
    description:
      "We embrace creativity, technology, and new ideas that drive sustainable change.",
  },
  {
    title: "Respect",
    description:
      "We honour people, culture, and the environment, working in harmony with communities and traditional leadership.",
  },
  {
    title: "Collaboration",
    description:
      "We believe in meaningful partnerships with communities, donors, government, and the environment itself.",
  },
  {
    title: "Empowerment",
    description:
      "We build capacity, confidence, and opportunity — never dependency.",
  },
  {
    title: "Sustainability",
    description:
      "We focus on long-term, replicable impact that benefits both people and nature.",
  },
  {
    title: "Compassion",
    description:
      "We lead with empathy, humility, and a deep respect for human dignity.",
  },
];

const Vision = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-[#2B2B2B] font-sans antialiased overflow-x-hidden">
      <main className="grow">
        <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-stretch">
            <div className="md:col-span-6 flex flex-col justify-between gap-8 sm:gap-10">
              <div>
                <span className="inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#3D7C7D] mb-3 sm:mb-4">
                  Purpose &amp; Direction
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-serif font-bold leading-[1.15] text-[#2B2B2B] tracking-tight">
                  &ldquo;Everyone deserves to thrive with dignity and
                  hope.&rdquo;
                </h1>
              </div>

              <div className="space-y-8 sm:space-y-10">
                <div className="border-l-2 border-[#3D7C7D] pl-4 sm:pl-6">
                  <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-serif font-bold text-[#2B2B2B] mb-2.5 sm:mb-3">
                    Our Vision
                  </h2>
                  <p className="text-sm sm:text-base lg:text-[17px] leading-[1.75] sm:leading-[1.8] text-[#5A5A5A] font-light">
                    To foster self-sustaining community development in the
                    Hwange District (Dibutibu, Sizinda, Chisuma, Monde and
                    Matetsi) through education, empowerment, and livelihood
                    opportunities that build resilience and improve quality of
                    life.
                  </p>
                </div>

                <div className="border-l-2 border-[#3D7C7D] pl-4 sm:pl-6">
                  <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-serif font-bold text-[#2B2B2B] mb-2.5 sm:mb-3">
                    Our Mission
                  </h2>
                  <p className="text-sm sm:text-base lg:text-[17px] leading-[1.75] sm:leading-[1.8] text-[#5A5A5A] font-light">
                    Jafuta Foundation is dedicated to empowering rural
                    communities by providing increased access to essential
                    resources and services, championing conservation, advancing
                    gender equality, fostering resilience, and promoting
                    self-sufficiency. Through collaborative efforts, we work to
                    create sustainable environments that uplift lives and
                    safeguard our shared future.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="w-full h-full min-h-70 sm:min-h-95 md:min-h-115 lg:min-h-145 overflow-hidden rounded-sm shadow-sm bg-stone-100">
                <img
                  src="/img/jr.webp"
                  alt="Women supported by Jafuta Foundation programmes"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#EFECE6] w-full py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 lg:mb-16">
              <span className="inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#3D7C7D] mb-2.5 sm:mb-3">
                What Guides Us
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2B2B2B] tracking-tight">
                Our Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={value.title}
                  className={
                    index === coreValues.length - 1
                      ? "sm:col-span-2 lg:col-span-1 lg:col-start-2"
                      : ""
                  }
                >
                  <ValueCard
                    title={value.title}
                    description={value.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Form />
      </main>
      <Footer />
    </div>
  );
};

export default Vision;
