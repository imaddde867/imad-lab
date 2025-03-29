import { motion } from 'framer-motion';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "Optimizing Data Pipelines: Lessons from Handling 10K+ Transactions per Hour",
    excerpt: "Insights and best practices for building high-throughput data pipelines that remain maintainable and resilient under heavy loads.",
    date: "March 15, 2024",
    tags: ["Data Engineering", "Airflow", "Performance"],
    slug: "/blog/optimizing-data-pipelines"
  },
  {
    id: 2,
    title: "Explainable AI: Why Black Box Models Are No Longer Acceptable",
    excerpt: "Exploring the importance of transparency in AI systems and how tools like SHAP and LIME can help provide clarity in model decisions.",
    date: "February 28, 2024",
    tags: ["AI", "XAI", "Ethics"],
    slug: "/blog/explainable-ai"
  },
  {
    id: 3,
    title: "Spatiotemporal Data Processing for Maritime Analytics",
    excerpt: "A deep dive into techniques for processing geospatial time-series data at scale for applications in maritime transportation and logistics.",
    date: "January 22, 2024",
    tags: ["Geospatial", "Python", "PostGIS"],
    slug: "/blog/spatiotemporal-data-processing"
  }
];

const PostVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1, 
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5
    }
  })
};

export default function BlogPreview() {
  return (
    <section className="py-20">
      <div className="container-fluid">
        <div className="text-center mb-12">
          <h2 className="font-heading mb-4">Latest from the Lab</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on data engineering, AI, and the tech that powers them.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="card group"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={PostVariants}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                  {post.tags[0] && (
                    <span className="text-xs font-medium bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      {post.tags[0]}
                    </span>
                  )}
                </div>
                
                <Link href={post.slug} className="group-hover:text-accent-blue transition-colors">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent-blue transition-colors">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                
                <Link href={post.slug} className="text-accent-blue font-medium inline-flex items-center group-hover:underline">
                  <span>Read More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/blog" className="btn btn-secondary">
            View All Lab Notes
          </Link>
        </div>
      </div>
    </section>
  );
} 