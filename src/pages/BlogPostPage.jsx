import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../style";
import { Navbar } from "../components";
import Footer from "../components/Footer";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/atom-one-dark.css"; // Choose a highlight.js theme

// Import blog posts content
import reactPerformanceContent from "../blogPosts/reactPerformance.js";

// Simple function to parse front matter
const parseFrontMatter = (content) => {
  const frontMatterRegex = /^---\s*([\s\S]*?)\s*---/;
  const match = content.match(frontMatterRegex);

  if (!match) {
    return {
      data: {},
      content: content,
    };
  }

  const frontMatterText = match[1];
  const mainContent = content.replace(frontMatterRegex, "").trim();

  // Parse front matter into an object
  const data = {};
  frontMatterText.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":");
    if (key && valueParts.length) {
      data[key.trim()] = valueParts.join(":").trim();
    }
  });

  return {
    data,
    content: mainContent,
  };
};

// Custom components for markdown rendering
const MarkdownComponents = {
  h1: (props) => <h1 className="text-3xl font-bold my-4" {...props} />,
  h2: (props) => <h2 className="text-2xl font-bold mt-6 mb-4" {...props} />,
  h3: (props) => <h3 className="text-xl font-bold mt-5 mb-3" {...props} />,
  h4: (props) => <h4 className="text-lg font-bold mt-4 mb-2" {...props} />,
  p: (props) => <p className="mb-4" {...props} />,
  ul: (props) => <ul className="list-disc ml-6 mb-4" {...props} />,
  ol: (props) => <ol className="list-decimal ml-6 mb-4" {...props} />,
  li: (props) => <li className="mb-1" {...props} />,
  a: (props) => <a className="text-purple-600 hover:underline" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-purple-500 pl-4 italic my-4"
      {...props}
    />
  ),
  code: ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto my-4">
        <code className={className} {...props}>
          {children}
        </code>
      </pre>
    ) : (
      <code
        className="bg-gray-100 text-purple-600 px-1 py-0.5 rounded"
        {...props}
      >
        {children}
      </code>
    );
  },
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Map of blog post slugs to their content
    const blogPostsMap = {
      react_performance_analysis: reactPerformanceContent,
      // Add more blog posts here as needed
    };

    try {
      // Get the content for the current slug
      const postContent = blogPostsMap[slug];

      if (!postContent) {
        throw new Error("Post not found");
      }

      // Parse the content with our custom function
      const { data, content } = parseFrontMatter(postContent);

      setPost({
        title:
          data.title ||
          slug.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        date: data.date || new Date().toLocaleDateString(),
        author: data.author,
        coverImage: data.coverImage,
        content: content,
      });
    } catch (error) {
      console.error("Error loading post:", error);
      setPost(null);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div
          className={`${styles.padding} max-w-7xl mx-auto relative z-0 pt-20`}
        >
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div
          className={`${styles.padding} max-w-7xl mx-auto relative z-0 pt-20`}
        >
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <h2 className={`${styles.sectionHeadText}`}>Blog Post Not Found</h2>
            <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
              The blog post you're looking for doesn't exist.
            </p>
            <Link to="/blog" className="mt-8 text-gradient font-medium">
              ← Back to all posts
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <div
          className={`${styles.padding} max-w-7xl mx-auto relative z-0 pt-20`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-5"
          >
            <Link to="/blog" className="text-gradient font-medium">
              ← Back to all posts
            </Link>

            <h1 className={`${styles.sectionHeadText} mt-5`}>{post.title}</h1>
            <div className="flex items-center mt-2 mb-6">
              <p className="text-secondary text-[14px]">{post.date}</p>
              {post.author && (
                <>
                  <span className="mx-2 text-secondary">•</span>
                  <p className="text-secondary text-[14px]">{post.author}</p>
                </>
              )}
            </div>

            {/* White background container for blog content */}
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 mb-20">
              <div className="text-gray-800 text-[17px] leading-[30px] blog-content">
                <ReactMarkdown
                  components={MarkdownComponents}
                  rehypePlugins={[rehypeHighlight]}
                  remarkPlugins={[remarkGfm]}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="md:fixed bottom-0 left-5 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default BlogPostPage;
