import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const BlogCard = ({ title, date, summary, slug, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
  >
    <Link to={`/blog/${slug}`} className="block">
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{title}</h3>
        <p className="text-secondary text-[14px] mt-2">{date}</p>
        <p className="mt-2 text-secondary text-[14px]">{summary}</p>
        <div className="mt-4 flex justify-end">
          <span className="text-gradient font-medium cursor-pointer">
            Read more
          </span>
        </div>
      </div>
    </Link>
  </motion.div>
);

const Blog = () => {
  // Sample blog posts - replace with your actual data
  const blogPosts = [
    {
      title: "React Performance Analysis",
      date: "April 2, 2025",
      summary:
        "Learn how to analyze and optimize React application performance.",
      slug: "react_performance_analysis",
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My thoughts and ideas</p>
        <h2 className={styles.sectionHeadText}>Blog.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {blogPosts.map((post, index) => (
          <BlogCard key={`blog-${index}`} index={index} {...post} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Blog, "blog");
