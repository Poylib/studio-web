'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-neutral-950 px-6 md:px-12"
    >
      {/* Background Texture/Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1920px] mx-auto">
        <div className="flex flex-col items-center justify-center">
          {/* STRUCTURAL */}
          <motion.h1
            style={{ x: y1, opacity }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] font-bold uppercase leading-[0.8] tracking-tighter text-neutral-100 mix-blend-difference"
          >
            STRUCTURAL
          </motion.h1>

          {/* SILENCE */}
          <motion.h1
            style={{ x: y2, opacity }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] font-bold uppercase leading-[0.8] tracking-tighter text-neutral-800"
          >
            SILENCE
          </motion.h1>
        </div>

        {/* Intro Text - Absolute positioned or grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 md:col-start-9">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h2 className="text-xl font-medium text-white mb-6">
                The Architecture of Light
              </h2>
              <p className="text-neutral-400 leading-relaxed text-sm md:text-base font-mono">
                SOCON exists in the space between the built environment and the
                lens. We strip away the noise to reveal the silent, structural
                core of every space.
                <br />
                <br />[ EST. 2024 ]
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4"
      >
        <div className="h-[1px] w-12 bg-neutral-700" />
        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
          Scroll to Explore
        </span>
      </motion.div>
    </section>
  );
}
