import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading mb-4">About Me</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 aspect-square flex items-center justify-center">
                {/* Placeholder for profile image */}
                <span className="text-gray-500 dark:text-gray-400">Profile Image</span>
              </div>
            </motion.div>
            
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">
                Hello! I'm Imad, a Data Engineering & AI specialist with a passion for building robust, scalable data solutions and exploring the frontiers of machine learning.
              </p>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
                My journey has taken me from analyzing vessel trajectories to optimizing real-time data pipelines, always with a focus on data-driven decision making and impactful solutions.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>2+ years of experience</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Based in Finland</span>
                </div>
              </div>
              
              <Link href="/about" className="btn btn-secondary">
                Learn More About Me
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 