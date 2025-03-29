import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const projectCards = [
  {
    id: 1,
    title: "NaviCast",
    description: "Predictive modeling for vessel trajectory forecasting with 90% accuracy using ML and spatiotemporal data analysis.",
    image: "/images/project-navicast.jpg",
    tags: ["Python", "Scikit-Learn", "PostGIS", "AWS"],
    link: "/portfolio/navicast"
  },
  {
    id: 2,
    title: "ISMO Pipeline",
    description: "Real-time data pipeline processing 10K+ transactions/hour with automated monitoring and validation.",
    image: "/images/project-ismo.jpg",
    tags: ["Airflow", "Python", "AWS", "Spark"],
    link: "/portfolio/ismo-pipeline"
  },
  {
    id: 3,
    title: "ClearBox",
    description: "XAI framework for transparent AI decision making in high-stakes environments, reducing model bias by 40%.",
    image: "/images/project-clearbox.jpg",
    tags: ["TensorFlow", "Python", "Docker", "SHAP"],
    link: "/portfolio/clearbox"
  }
];

const CardVariants = {
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

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-fluid">
        <div className="text-center mb-12">
          <h2 className="font-heading mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my latest projects in data engineering, machine learning, and AI development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectCards.map((project, index) => (
            <motion.div
              key={project.id}
              className="card overflow-hidden group"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={CardVariants}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  {/* Placeholder for project image */}
                  <span className="text-sm text-gray-500 dark:text-gray-400">Project Image</span>
                </div>
                <div className="absolute inset-0 bg-accent-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <Link href={project.link} className="text-accent-blue font-medium inline-flex items-center group-hover:underline">
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/portfolio" className="btn btn-secondary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
} 