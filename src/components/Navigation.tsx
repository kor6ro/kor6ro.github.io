'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Github, 
  Instagram, 
  Youtube,
  Facebook,
  Twitter,
  Mail 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Projects', href: '#projects' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const socialIcons = [
    { icon: Github, href: 'https://github.com/kor6ro', label: 'GitHub', color: 'hover:text-white' },
    { icon: Twitter, href: 'https://x.com/kor6ro', label: 'X', color: 'hover:text-white' },
    { icon: Instagram, href: 'https://instagram.com/kor6ro', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Youtube, href: 'https://youtube.com/@kor6ro', label: 'YouTube', color: 'hover:text-red-500' },
    { icon: Facebook, href: 'https://facebook.com/kor6ro', label: 'Facebook', color: 'hover:text-blue-500' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 glass-header">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 group" aria-label="Home">
                <span className="text-xl font-bold text-white tracking-widest transition-all group-hover:tracking-[0.15em] duration-200">
                  KOR<span className="text-[var(--color-wasmer-accent)]">6</span>RO
                </span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-6" aria-label="Main Navigation">
              <div className="flex items-baseline space-x-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className="nav-link-underline hover:text-white px-2 py-1 text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="flex items-center space-x-4 pl-6 border-l border-[var(--color-wasmer-border)]/50">
                {socialIcons.map((social) => (
                  <motion.a 
                    key={social.label}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ color: '#fff', scale: 1.1 }}
                    className={`text-gray-400/80 transition-colors ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={18} strokeWidth={1} />
                  </motion.a>
                ))}
              </div>
            </nav>
            
            {/* Mobile menu button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                type="button"
                aria-label="Open sidebar"
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white focus:outline-none transition-colors"
              >
                <Menu className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar - Moved outside header to break stacking context */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            {/* Sidebar Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 350 }}
              className="absolute top-0 right-0 bottom-0 w-[280px] max-w-[85vw] bg-[#0d1117] flex flex-col border-l border-[var(--color-wasmer-border)] shadow-2xl overflow-hidden"
            >
              <div className="p-6 flex items-center justify-between border-b border-[var(--color-wasmer-border)]/50 bg-[#161b22]/40">
                <span className="text-xl font-bold text-white tracking-widest uppercase">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl hover:bg-[var(--color-wasmer-surface)] text-gray-400 hover:text-white transition-colors"
                  aria-label="Close sidebar"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex-grow py-8 px-4 space-y-2 overflow-y-auto">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-4 rounded-xl text-xl font-semibold text-gray-400 hover:text-white hover:bg-[var(--color-wasmer-surface)] transition-all"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="p-8 border-t border-[var(--color-wasmer-border)]/50 bg-[#161b22]/60">
                <div className="grid grid-cols-3 gap-6">
                   {socialIcons.map((social) => (
                     <a 
                       key={social.label} 
                       href={social.href} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className={`flex justify-center text-gray-500 transition-colors p-2 ${social.color}`} 
                       aria-label={social.label}
                     >
                       <social.icon size={22} strokeWidth={1} />
                     </a>
                   ))}
                   <a href="mailto:kor6rokun@gmail.com" className="flex justify-center text-gray-500 hover:text-yellow-500 transition-colors p-2" aria-label="Email"><Mail size={22} strokeWidth={1} /></a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}



