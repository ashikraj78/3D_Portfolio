import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loading from "./components/Loading";

// Lazy load other components
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Blog = lazy(() => import("./components/Blog"));
const Contact = lazy(() => import("./components/Contact"));
// const StarsCanvas = lazy(() => import("./components/StarsCanvas"));
const Footer = lazy(() => import("./components/Footer"));

// Lazy load pages
const HomePage = lazy(() => import("./pages/HomePage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));

// ScrollToHashElement component to handle hash navigation
const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash in the URL
    if (location.hash) {
      // Get the element by id (without the # character)
      const id = location.hash.substring(1);

      // Try different possible ID formats
      let element = document.getElementById(id);

      // If not found, try with a # prefix (some components might use #id format)
      if (!element) {
        element = document.getElementById(`#${id}`);
      }

      // If the element exists, scroll to it
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        console.log(`Element with id ${id} not found`);

        // Debug: log all IDs in the document
        const allElements = document.querySelectorAll("[id]");
        console.log(
          "Available IDs:",
          Array.from(allElements).map((el) => el.id)
        );
      }
    } else if (location.pathname === "/") {
      // If navigating to homepage without hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

function App() {
  // Handle mobile viewport height issue (100vh problem)
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);

    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToHashElement />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
