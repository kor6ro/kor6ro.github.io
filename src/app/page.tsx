'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Rocket, 
  ArrowRight
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const hoverScale = {
  scale: 1.03,
  transition: { duration: 0.15, ease: "easeOut" }
} as const;

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      {/* Hero Section - Humble & Simple Rewrite */}
      <section id="hero" className="w-full flex items-center justify-center py-24 md:py-48 px-4 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 2 }}
             className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(88,166,255,0.05)_0%,transparent_70%)]"
           />
        </div>
        
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="relative z-10 max-w-3xl text-center space-y-8 md:space-y-12"
        >
          <div className="space-y-4 md:space-y-6">
            <motion.span 
              variants={fadeIn}
              className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-wasmer-border)]/40 bg-white/5 text-xs font-medium tracking-widest text-gray-400 uppercase"
            >
              Developer & Student
            </motion.span>
            <motion.h1 
              variants={fadeIn}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white transition-all hover:scale-[1.01] duration-500"
            >
              I build <span className="text-gray-400">simple</span> things for the web.
            </motion.h1>
          </div>

          <motion.p 
            variants={fadeIn}
            className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto leading-relaxed font-light"
          >
            I'm a developer who enjoys crafting clean interfaces and learning as I go. Focusing on building effective, focused solutions with modern tools.
          </motion.p>
          
          <motion.div 
            variants={fadeIn}
            className="flex justify-center pt-4"
          >
            <motion.a 
              href="#projects" 
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black px-12 py-4 rounded-xl font-bold transition-all shadow-xl hover:shadow-white/20 text-base md:text-lg"
            >
              Explore Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full flex items-center py-24 md:py-48 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16 md:mb-20 space-y-4 md:space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">Selected works from my portfolio.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {[1, 2, 3].map((item, i) => (
              <motion.div 
                key={item} 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                whileHover={{ y: -8, ...hoverScale }}
                className="glass-panel rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden flex flex-col group transition-all duration-200 shadow-2xl"
              >
                <div className="h-48 md:h-56 bg-[var(--color-wasmer-surface)]/50 border-b border-[var(--color-wasmer-border)]/50 relative overflow-hidden flex items-center justify-center">
                   <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-wasmer-accent)]/5 to-transparent" />
                   <Rocket className="w-12 h-12 md:w-16 md:h-16 text-gray-500 group-hover:scale-110 group-hover:text-[var(--color-wasmer-accent)]/70 transition-all duration-500 ease-out" strokeWidth={1} />
                </div>
                <div className="p-8 md:p-10 flex-grow flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Project Name {item}</h3>
                  <p className="text-gray-400 mb-6 md:mb-8 flex-grow text-base md:text-lg font-light leading-snug">A brief description of this amazing project and the technologies used to build it.</p>
                  <a href="#" className="text-[var(--color-wasmer-accent)] hover:text-white font-bold text-base md:text-lg inline-flex items-center gap-2 md:gap-3 transition-all group/link underline-offset-8 hover:underline decoration-1">
                    View Project
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover/link:translate-x-1.5" strokeWidth={1} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

