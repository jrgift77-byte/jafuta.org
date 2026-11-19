function ValueCard({ title, description }) {
  return (
    <article className="bg-white p-8 lg:p-10 rounded-sm border border-stone-200/80 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center h-full">
      <h3 className="font-serif font-bold text-xl lg:text-[22px] text-[#2B2B2B] tracking-tight">
        {title}
      </h3>
      <div className="w-16 h-0.5 bg-[#3D7C7D] mx-auto my-4" />
      <p className="text-[15px] lg:text-base leading-relaxed text-[#5A5A5A] font-light">
        {description}
      </p>
    </article>
  );
}

export default ValueCard;
