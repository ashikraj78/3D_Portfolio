import { Suspense, lazy, useEffect, useRef } from "react";
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
  const componentsLoaded = useRef(false);

  // Scroll to hash on initial load if present
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);

      // Function to attempt scrolling
      const scrollToElement = () => {
        // Try different possible ID formats
        let element = document.getElementById(id);

        // If not found, try with a # prefix
        if (!element) {
          element = document.getElementById(`#${id}`);
        }

        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return true;
        }
        return false;
      };

      // Try immediately
      if (!scrollToElement()) {
        // If failed, try again after components have loaded
        const checkInterval = setInterval(() => {
          if (scrollToElement() || componentsLoaded.current) {
            clearInterval(checkInterval);
          }
        }, 100);

        // Clear interval after 5 seconds to prevent infinite checking
        setTimeout(() => {
          clearInterval(checkInterval);
        }, 5000);
      }
    }

    // Mark components as loaded after a delay
    setTimeout(() => {
      componentsLoaded.current = true;
    }, 2000);
  }, []);

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
