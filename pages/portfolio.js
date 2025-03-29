import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "NaviCast",
    description: "Predictive modeling for vessel trajectory forecasting with 90% accuracy using ML and spatiotemporal data analysis.",
    image: "/images/project-navicast.jpg",
    tags: ["Data Science", "Python", "Scikit-Learn", "PostGIS", "AWS"],
    link: "/portfolio/navicast"
  },
  {
    id: 2,
    title: "ISMO Pipeline",
    description: "Real-time data pipeline processing 10K+ transactions/hour with automated monitoring and validation.",
    image: "/images/project-ismo.jpg",
    tags: ["Data Engineering", "Airflow", "Python", "AWS", "Spark"],
    link: "/portfolio/ismo-pipeline"
  },
  {
    id: 3,
    title: "ClearBox",
    description: "XAI framework for transparent AI decision making in high-stakes environments, reducing model bias by 40%.",
    image: "/images/project-clearbox.jpg",
    tags: ["AI/ML", "TensorFlow", "Python", "Docker", "SHAP"],
    link: "/portfolio/clearbox"
  },
  {
    id: 4,
    title: "DataFlow Monitor",
    description: "Real-time monitoring dashboard for data pipeline health and performance metrics with alert system.",
    image: "/images/project-dataflow.jpg",
    tags: ["Data Engineering", "React", "Node.js", "Prometheus", "Grafana"],
    link: "/portfolio/dataflow-monitor"
  },
  {
    id: 5,
    title: "RealtimeML",
    description: "Streaming machine learning pipeline with online model updating capabilities for dynamic environments.",
    image: "/images/project-realtimeml.jpg",
    tags: ["AI/ML", "Kafka", "Python", "Kubernetes", "MLflow"],
    link: "/portfolio/realtimeml"
  },
  {
    id: 6,
    title: "Geo Insights",
    description: "Geographic data visualization platform for maritime transportation analytics and pattern detection.",
    image: "/images/project-geoinsights.jpg",
    tags: ["Data Visualization", "Python", "GeoJSON", "D3.js", "React"],
    link: "/portfolio/geo-insights"
  }
];

const categories = [
  "All",
  "Data Engineering",
  "AI/ML",
  "Data Science",
  "Data Visualization"
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="card overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
          {project.tags.slice(0, 3).map(tag => (
            <span 
              key={tag} 
              className="text-xs font-medium bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs font-medium bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              +{project.tags.length - 3}
            </span>
          )}
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
  );
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeCategory));
  
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
            <h1 className="font-heading mb-6">My Projects</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my work in data engineering, AI, and machine learning. Each project represents a unique challenge and solution.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? 'bg-accent-blue text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                No projects found in this category. Please try another filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
} 