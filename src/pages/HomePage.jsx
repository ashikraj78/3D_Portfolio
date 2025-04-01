import { Suspense, lazy } from "react";
import { styles } from "../style";
import { Navbar, Hero } from "../components";
import Loading from "../components/Loading";

// Lazy load components
const About = lazy(() => import("../components/About"));
const Experience = lazy(() => import("../components/Experience"));
const Tech = lazy(() => import("../components/Tech"));
const Works = lazy(() => import("../components/Works"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));

const HomePage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>

      <Suspense fallback={<Loading />}>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}

        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
        <div className="md:fixed bottom-0 left-5 w-full">
          <Footer />
        </div>
      </Suspense>
    </div>
  );
};

export default HomePage;
