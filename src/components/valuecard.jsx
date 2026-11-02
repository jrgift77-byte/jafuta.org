import 'react';

function ValueCard({ title, description }) {
  return (
    <div className="bg-white p-8 lg:p-10 items-center justify-center">
      <h3 className="text-center font-bold text-[20px]">{title}</h3>
      <div className="w-28 h-[0.5px] bg-black mx-auto my-3"></div>
      <p className="text-[16px] leading-7 text-gray-700">{description}</p>
    </div>
  );
}

export default ValueCard;
