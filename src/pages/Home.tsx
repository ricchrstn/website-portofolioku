import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Lenis from "lenis";
import { lazy, Suspense, useEffect } from "react";

const About = lazy(() => import("@/components/About"));
const Career = lazy(() => import("@/components/Career"));
const Skills = lazy(() => import("@/components/Skills"));
const Project = lazy(() => import("@/components/Project"));
const Footer = lazy(() => import("@/components/Footer"));

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Suspense>
          <About />
          <Career />
          <Skills />
          <Project />
          <Footer />
        </Suspense>
      </main>
    </>
  );
};

export default Home;
