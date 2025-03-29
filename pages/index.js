import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import CoreExpertise from '../components/CoreExpertise';
import AboutPreview from '../components/AboutPreview';
import BlogPreview from '../components/BlogPreview';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <FeaturedProjects />
      <CoreExpertise />
      <AboutPreview />
      <BlogPreview />
    </motion.div>
  );
} 