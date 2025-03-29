import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

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
  },
  {
    id: 4,
    title: "Setting Up a Multi-Environment Data Pipeline with Airflow and AWS",
    excerpt: "Step-by-step guide to creating a robust development, staging, and production pipeline using Apache Airflow and AWS services.",
    date: "December 10, 2023",
    tags: ["Data Engineering", "AWS", "DevOps"],
    slug: "/blog/multi-environment-data-pipeline"
  },
  {
    id: 5,
    title: "Real-time Analytics Architecture Patterns",
    excerpt: "Overview of different architectural patterns for implementing real-time analytics, with pros and cons for various use cases.",
    date: "November 5, 2023",
    tags: ["Architecture", "Real-time", "Kafka"],
    slug: "/blog/real-time-analytics-patterns"
  },
  {
    id: 6,
    title: "Beyond Accuracy: Better Metrics for Machine Learning Models",
    excerpt: "Why accuracy alone is insufficient for evaluating machine learning models, and what metrics you should be tracking instead.",
    date: "October 17, 2023",
    tags: ["AI", "Machine Learning", "Evaluation"],
    slug: "/blog/beyond-accuracy-ml-metrics"
  }
];

const tags = ["All", "Data Engineering", "AI", "Geospatial", "Architecture", "Ethics", "Performance"];

export default function Blog() {
  const [activeTag, setActiveTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredPosts = blogPosts
    .filter(post => {
      // Filter by tag
      if (activeTag !== "All" && !post.tags.some(tag => tag.includes(activeTag))) {
        return false;
      }
      
      // Filter by search query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        return (
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }
      
      return true;
    });
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-16 md:py-24">
        <div className="container-fluid">
          <div className="text-center mb-16">
            <h1 className="font-heading mb-6">Lab Notes</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights on data engineering, AI, and the technologies that power them.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              {/* Search */}
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                      activeTag === tag 
                        ? 'bg-accent-blue text-white' 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Blog Posts */}
          <div className="space-y-8">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                className="card p-6 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                  <div className="flex gap-2">
                    {post.tags.slice(0, 2).map(tag => (
                      <span 
                        key={tag} 
                        className="text-xs font-medium bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="text-xs font-medium bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
                
                <Link href={post.slug} className="hover:text-accent-blue transition-colors">
                  <h2 className="text-2xl font-bold mb-3 hover:text-accent-blue transition-colors">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                
                <Link href={post.slug} className="text-accent-blue font-medium inline-flex items-center hover:underline">
                  <span>Read More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </motion.div>
            ))}
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  No posts found matching your criteria. Try a different search or filter.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
} 