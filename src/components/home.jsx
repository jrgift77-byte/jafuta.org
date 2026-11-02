import  "react";
import Carousel from '../components/carousel'; 

import Impact from "./impact.jsx"

import Contact from "./contact.jsx"
import Footer from "./footer.jsx"
export default function Home() {
  return (
    <>
      <Impact />
      <Carousel />
      <Contact />
      <Footer />
    </>
  );
}