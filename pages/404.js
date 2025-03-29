import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Custom404() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 md:py-32"
    >
      <div className="container-fluid">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-heading mb-6 text-accent-blue">404</h1>
          <h2 className="text-3xl mb-6">Page Not Found</h2>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/" className="btn btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 