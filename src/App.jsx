import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
