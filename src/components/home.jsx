import Carousel from "../components/Carousel";
import Impact from "./Impact";
import Contact from "./Contact";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <main className="grow">
        <Impact />
        <Carousel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
