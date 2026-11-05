import  'react';

const footer = () => {
  return (
    <div>
        <footer className="bg-[#4F4138] px-8 lg:px-24 py-16 lg:py-20 h-200">
        <div className="max-w-360 mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 text-white font-light text-[16px] leading-[1.7]">
            <p className="font-bold">Jafuta Foundation</p>
            <p>Elephant's Walk,</p>
            <p>273 Adam Stander Road,</p>
            <p>Victoria Falls, Zimbabwe</p>
            <p className="font-bold mt-2">PVO Registration No: 201/26</p>

            <div className="mt-8">
              <p className="font-bold">Jafuta Foundation</p>
              <p>525 Bingham Knoll,</p>
              <p>Jacksonville, OR 97530</p>
              <p className="font-bold mt-2">Registered 501(c)3</p>
              <p className="font-bold">Ein No. 81-3902811</p>
            </div>

            <p className="mt-8">Email: gcvj@jafuta.org</p>
            <img src="./img/jafuta-candid-logo.webp" alt="Candid" className="mt-10 w-50 bg-white" />
          </div>

          <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white text-[22px] font-light mb-6">About</h4>
              <ul className="space-y-3 text-[15px] font-light">
                <li><a href="#" className="text-white/80 underline underline-offset-4">Our Vision</a></li>
                <li><a href="#" className="text-white/80 underline underline-offset-4">About Us</a></li>
                <li><a href="#" className="text-white/80 underline underline-offset-4">Our Team</a></li>
                <li><a href="#" className="text-white/80 underline underline-offset-4">Blog</a></li>
                <li><a href="#" className="text-white/80 underline underline-offset-4">Donate</a></li>
                <li><a href="#" className="text-white/80 underline underline-offset-4">Contact</a></li>
              </ul>
              <div className="flex gap-4 mt-10 text-white text-xl"><span>f</span><span>◎</span></div>
            </div>
            <div>
              <h4 className="text-white text-[22px] font-light mb-6">Projects</h4>
              <ul className="space-y-2 text-[14px] font-light leading-normal">
                <li><a href="#" className="text-white/80 underline underline-offset-4">Women & Youth Empowerment</a></li>
                <li><a href="#" className="text-white/80 underline underline-offset-4">Education & Digital Access</a></li>
                <li><a href="#" className="text-white/80 underline underline-offset-4">Water, Sanitation (WASH) & Health</a></li>
                <li><a href="#" className="text-white/80 underline underline-offset-4">Livelihoods & Food Security</a></li>
                <li><a href="#" className="text-white/80 underline underline-offset-4">Conservation & Community Co-Existence</a></li>
                <li><a href="#" className="text-white/80 underline underline-offset-4">Creativity, Arts & Culture</a></li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center text-white/60 text-[13px] mt-16">© 2026 Jafuta Foundation</p>
      </footer>

    </div>
  );
}

export default footer;
