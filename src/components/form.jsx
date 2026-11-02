import React from 'react';

const Form = () => {
  const [email, setEmail] = React.useState('');

  return (
    <div>
       <section className="relative w-full h-130 lg:h-155 flex items-center justify-center">
        <img src="./img/woman-sewing-africa.webp" className="absolute inset-0 w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="relative z-10 text-center px-6 max-w-2xl">
          <h2 className="text-white text-[36px] lg:text-[52px] font-bold leading-tight">Subscribe to our newsletter.</h2>
          <p className="text-white/90 mt-3 mb-8 text-lg">Sign up to our quarterly newsletter to receive news and updates.</p>
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email Address" className="w-full max-w-95 px-6 py-4 outline-none" />
          <div className="mt-4">
            <button onClick={()=> email && alert(email)} className="bg-[#2c7a88] text-white px-10 py-3 font-semibold">Sign Up</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form;
