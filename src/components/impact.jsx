const programmes = [
  {
    title: "Women & Youth Empowerment",
    description:
      "Through deepened impact in gender empowerment, girls' dignity, education, scholarships, and vocational skills training, Jafuta Foundation creates pathways for women and young people to build confidence, and develop meaningful livelihoods.",
    image: "/img/women-nonprofit-skills.webp",
    alt: "Women & Youth Empowerment",
    href: "/projects/women-youth",
  },
  {
    title: "Education & Digital Access",
    description:
      "We strengthen rural education through supplementary and informal learning, teacher development & training, learning resources, scholarships, and access to technology—bridging the digital divide and expanding education opportunities for rural children and youth.",
    image: "/img/women-nonprofit-skills.webp",
    alt: "Education & Digital Access",
    href: "/projects/education",
  },
  {
    title: "Water, Sanitation (WASH) & Health",
    description:
      "Improving health and livelihoods by expanding access to solar-powered boreholes/wells, clean and accessible water points, safe sanitation, hygiene education, mobile health clinics, and mental health education and counselling within rural communities.",
    image: "/img/women-nonprofit-skills.webp",
    alt: "Water, Sanitation (WASH) & Health",
    href: "/projects/wash-health",
  },
  {
    title: "Livelihoods & Food Security",
    description:
      "Our Livelihoods & Food Security Programme supports communities through nutritional community gardens, climate-smart agriculture, and the growing and distribution of food-bearing and indigenous trees.",
    image: "/img/women-nonprofit-skills.webp",
    alt: "Livelihoods & Food Security",
    href: "/projects/livelihoods",
  },
  {
    title: "Conservation & Community Co-Existence",
    description:
      "We protect wildlife while supporting the communities that live alongside it. Through education, conflict-mitigation, habitat restoration, and conservation-linked livelihoods, we can help people and wildlife to better coexist safely and sustainably.",
    image: "/img/women-nonprofit-skills.webp",
    alt: "Conservation & Community Co-Existence",
    href: "/projects/conservation",
  },
  {
    title: "Creativity, Arts & Culture",
    description:
      "From deep cultural roots to contemporary creative talent, we celebrate Zimbabwe's identity through artistic and visual expression.",
    image: "/img/women-nonprofit-skills.webp",
    alt: "Creativity, Arts & Culture",
    href: "/projects/creativity-arts",
  },
];

const Impact = () => {
  return (
    <div className="w-full font-sans antialiased overflow-x-hidden">
      <section className="relative min-h-[85vh] lg:h-screen w-full overflow-hidden flex items-end">
        <img
          src="/img/hero.png"
          alt="Jafuta Foundation community impact"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/35 to-black/25" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-24 lg:pb-28">
          <h1 className="text-3xl sm:text-5xl lg:text-[60px] font-semibold leading-[1.15] text-white tracking-tight max-w-3xl">
            Empowering Rural Communities Through Action.
          </h1>
        </div>
      </section>

      <section className="bg-white px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-6 flex flex-col items-start">
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] leading-[1.1] font-medium text-[#2B2B2B] tracking-tight">
              Supporting education and community.
            </h2>
            <a
              href="/our-vision"
              className="mt-8 lg:mt-10 inline-block bg-[#3D7C7D] hover:bg-[#316667] transition-colors px-9 py-4 text-xs sm:text-[13px] font-medium tracking-[0.2em] uppercase text-white"
            >
              Our Vision
            </a>
          </div>

          <div className="lg:col-span-6 space-y-6 text-base sm:text-lg lg:text-[19px] leading-[1.8] text-[#5A5A5A] font-light">
            <p>
              We provide rural families with access to quality education,
              digital technology, clean water, nutritional gardens, equal
              opportunities for girls, skills training, and income-generating
              initiatives.
            </p>
            <p>
              Jafuta Foundation is nurturing healthier and more resilient
              communities by restoring dignity, strengthening independence, and
              inspiring lasting hope for generations to come.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#4A3E36] px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto flex flex-col gap-20 lg:gap-28">
          {programmes.map((item, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={item.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "order-1 lg:order-2 lg:col-start-7" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-xs shadow-md">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-72 sm:h-96 lg:h-130 object-cover hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </div>

                <div
                  className={`lg:col-span-5 ${
                    isEven ? "order-2 lg:order-1" : "lg:col-start-8"
                  }`}
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-[40px] leading-[1.15] font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-base lg:text-[17px] leading-[1.8] text-[#E8DDD5]/90 font-light">
                    {item.description}
                  </p>
                  <a
                    href={item.href}
                    className="mt-8 inline-block bg-[#3D7C7D] hover:bg-[#316667] transition-colors px-8 py-3.5 text-xs sm:text-[13px] font-medium tracking-[0.15em] uppercase text-white"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Impact;
