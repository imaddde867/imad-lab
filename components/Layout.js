import Head from 'next/head';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Layout({ children, title = 'ImadLab - Engineering Intelligence' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Data Engineering & AI specialist crafting scalable, real-time solutions and exploring the frontiers of machine learning." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-primary-dark/70 border-b border-gray-200 dark:border-gray-800">
        <div className="container-fluid py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-heading font-bold bg-gradient-to-r from-accent-blue to-accent-teal bg-clip-text text-transparent">ImadLab</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium hover:text-accent-blue transition-colors">
              Home
            </Link>
            <Link href="/about" className="font-medium hover:text-accent-blue transition-colors">
              About
            </Link>
            <Link href="/portfolio" className="font-medium hover:text-accent-blue transition-colors">
              Portfolio
            </Link>
            <Link href="/blog" className="font-medium hover:text-accent-blue transition-colors">
              Lab Notes
            </Link>
            <Link href="/contact" className="font-medium hover:text-accent-blue transition-colors">
              Contact
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
          >
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="font-medium hover:text-accent-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="font-medium hover:text-accent-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/portfolio" 
                className="font-medium hover:text-accent-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                href="/blog" 
                className="font-medium hover:text-accent-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Lab Notes
              </Link>
              <Link 
                href="/contact" 
                className="font-medium hover:text-accent-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </header>

      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container-fluid py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-sm">© {new Date().getFullYear()} ImadLab. All rights reserved.</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">"In God we trust. All others must bring data."</p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://linkedin.com" className="text-gray-500 hover:text-accent-blue transition-colors" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://github.com" className="text-gray-500 hover:text-accent-blue transition-colors" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 