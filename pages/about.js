import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-16 md:py-24">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-center mb-12">About Me</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start mb-16">
              {/* Profile Image */}
              <div className="md:col-span-2">
                <div className="sticky top-24 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 aspect-square flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Profile Image</span>
                </div>
              </div>
              
              {/* About Content */}
              <div className="md:col-span-3 space-y-6">
                <h2 className="text-2xl font-bold">Introduction</h2>
                <p>
                  Hello! I'm Imad Eddine EL MOUSS, a data engineering and AI specialist passionate about building scalable data pipelines and developing machine learning solutions to solve complex problems.
                </p>
                <p>
                  My journey in the world of data started during my studies at Turku University of Applied Sciences, where I specialized in ICT Engineering with a focus on data science and AI. Since then, I've been exploring various aspects of data engineering, from designing efficient ETL processes to building real-time analytics systems.
                </p>
                
                <h2 className="text-2xl font-bold mt-8">My Approach</h2>
                <p>
                  I approach data problems with a focus on scalability, efficiency, and impact. I believe that good data engineering is not just about moving data around, but about creating reliable systems that enable teams to make better decisions and deliver real value.
                </p>
                <p>
                  I'm particularly interested in the intersection of data engineering and machine learning, where robust data pipelines meet advanced analytics to create intelligent systems that can learn and adapt.
                </p>
                
                <h2 className="text-2xl font-bold mt-8">Experience Highlights</h2>
                <div className="border-l-4 border-accent-blue pl-4 py-2 mb-4">
                  <h3 className="text-xl font-bold">Research Intern</h3>
                  <p className="text-gray-600 dark:text-gray-400">AIS Lab, Turku University of Applied Sciences</p>
                  <p className="text-gray-600 dark:text-gray-400">2023 - Present</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Developed vessel trajectory prediction models with 90% accuracy</li>
                    <li>Optimized geospatial data processing, reducing query time by 40%</li>
                    <li>Implemented real-time data ingestion pipeline for maritime sensor data</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Skills Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-center mb-8">Skills & Technologies</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card p-6">
                  <h3 className="font-bold mb-4 text-accent-blue">Languages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mr-2"></span>
                      Python
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mr-2"></span>
                      SQL
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mr-2"></span>
                      JavaScript
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mr-2"></span>
                      Java
                    </li>
                  </ul>
                </div>
                
                <div className="card p-6">
                  <h3 className="font-bold mb-4 text-accent-teal">Data Engineering</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent-teal rounded-full mr-2"></span>
                      Apache Airflow
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent-teal rounded-full mr-2"></span>
                      Apache Spark
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent-teal rounded-full mr-2"></span>
                      Kafka
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent-teal rounded-full mr-2"></span>
                      PostgreSQL/PostGIS
                    </li>
                  </ul>
                </div>
                
                <div className="card p-6">
                  <h3 className="font-bold mb-4 text-accent-blue">Cloud & DevOps</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mr-2"></span>
                      AWS
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mr-2"></span>
                      Azure
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mr-2"></span>
                      Docker
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mr-2"></span>
                      CI/CD
                    </li>
                  </ul>
                </div>
                
                <div className="card p-6">
                  <h3 className="font-bold mb-4 text-accent-teal">AI/ML</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent-teal rounded-full mr-2"></span>
                      TensorFlow/Keras
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent-teal rounded-full mr-2"></span>
                      Scikit-Learn
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent-teal rounded-full mr-2"></span>
                      NLP
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent-teal rounded-full mr-2"></span>
                      Computer Vision
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Education & Certifications */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-center mb-8">Education & Certifications</h2>
              
              <div className="space-y-6">
                <div className="card p-6">
                  <h3 className="font-bold text-xl mb-2">Bachelor of Engineering, ICT</h3>
                  <p className="text-gray-600 dark:text-gray-400">Turku University of Applied Sciences</p>
                  <p className="text-gray-600 dark:text-gray-400">2020 - 2024</p>
                  <p className="mt-2">Specialized in Data Science and Artificial Intelligence with focus on predictive modeling and data engineering.</p>
                </div>
                
                <div className="card p-6">
                  <h3 className="font-bold text-xl mb-2">AWS Certified Solutions Architect</h3>
                  <p className="text-gray-600 dark:text-gray-400">Amazon Web Services</p>
                  <p className="text-gray-600 dark:text-gray-400">2023</p>
                </div>
                
                <div className="card p-6">
                  <h3 className="font-bold text-xl mb-2">MATLAB Certification</h3>
                  <p className="text-gray-600 dark:text-gray-400">MathWorks</p>
                  <p className="text-gray-600 dark:text-gray-400">2022</p>
                </div>
              </div>
            </div>
            
            {/* Languages */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-center mb-8">Languages</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card p-6">
                  <h3 className="font-bold text-xl mb-2">English</h3>
                  <p>Professional working proficiency</p>
                </div>
                
                <div className="card p-6">
                  <h3 className="font-bold text-xl mb-2">French</h3>
                  <p>Native proficiency</p>
                </div>
                
                <div className="card p-6">
                  <h3 className="font-bold text-xl mb-2">Arabic</h3>
                  <p>Native proficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
} 