import { motion } from "framer-motion";
import { styles } from "../style";
import { Blog } from "../components";
import { Navbar } from "../components";
import Footer from "../components/Footer";

const BlogPage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <div
          className={`${styles.padding} max-w-8xl mx-auto relative z-0 pt-20`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Blog />
          </motion.div>
        </div>
      </div>
      <div className="md:fixed bottom-0 left-5 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;
