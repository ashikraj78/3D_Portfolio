import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const BlogCard = ({ title, date, summary, link, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
  >
    <div className="mt-5">
      <h3 className="text-white font-bold text-[24px]">{title}</h3>
      <p className="text-secondary text-[14px] mt-2">{date}</p>
      <p className="mt-2 text-secondary text-[14px]">{summary}</p>
      <div className="mt-4 flex justify-end">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gradient font-medium cursor-pointer"
        >
          Read more
        </a>
      </div>
    </div>
  </motion.div>
);

const Blog = () => {
  // Sample blog posts - replace with your actual data
  const blogPosts = [
    {
      title: "Getting Started with React",
      date: "June 15, 2023",
      summary:
        "Learn the basics of React and how to create your first component.",
      link: "#",
    },
    {
      title: "Advanced Three.js Techniques",
      date: "July 22, 2023",
      summary: "Explore advanced 3D rendering techniques using Three.js.",
      link: "#",
    },
    {
      title: "Optimizing React Performance",
      date: "August 10, 2023",
      summary: "Tips and tricks to make your React applications faster.",
      link: "#",
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
