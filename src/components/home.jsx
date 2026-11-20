import Carousel from "./carousel";
import Impact from "./Impact";
import Contact from "./contact";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-neutral-900 overflow-x-hidden">
      <main className="grow w-full flex flex-col">
        <Impact />
        <Carousel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
