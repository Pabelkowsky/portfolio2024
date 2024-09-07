import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import TextSlider from "./components/TextSlider";
import Services from "./components/Services";
import Works from "./components/Works";
import Footer from "./components/Footer";
import Cursor from "./Cursor";
import Lenis from "lenis";

function App() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const [screenSize, setScreenSize] = useState(() => {
    if (window.innerWidth <= 500) return "sm";
    if (window.innerWidth <= 1000) return "md";
    return "lg";
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setScreenSize("sm");
      } else if (window.innerWidth <= 1000) {
        setScreenSize("md");
      } else {
        setScreenSize("lg");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Hero lenis={lenis} />
      <Gallery />
      <Services />
      <Works screenSize={screenSize} />
      <Footer />

      {screenSize === "lg" && <Cursor />}
    </>
  );
}

export default App;
