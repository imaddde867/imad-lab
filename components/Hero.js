import { motion } from 'framer-motion';
import Link from 'next/link';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <ParticleBackground />
      
      <div className="container-fluid">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="font-heading bg-gradient-to-r from-accent-blue to-accent-teal bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Imad Eddine EL MOUSS:<br />
            <span className="block">Architecting Data, Engineering Intelligence</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Data Engineering & AI specialist crafting scalable, real-time solutions and exploring the frontiers of machine learning.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/portfolio" className="btn btn-primary w-full sm:w-auto">Explore Projects</Link>
            <Link href="/contact" className="btn btn-secondary w-full sm:w-auto">Get In Touch</Link>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 animate-bounce text-accent-blue" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </motion.div>
    </section>
  );
} 