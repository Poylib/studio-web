'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';

export default function ContactCTA() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-32 text-center md:px-12">
      <h2 className="mb-12 text-5xl font-bold tracking-tighter md:text-8xl lg:text-9xl">
        Ready to <br /> Visualize?
      </h2>

      <MagneticButton>
        <Link
          href="/contact"
          className="flex h-32 w-32 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-neutral-200 md:h-48 md:w-48"
          data-cursor="hover"
        >
          <span className="text-lg font-bold uppercase tracking-widest md:text-xl">
            Start
          </span>
        </Link>
      </MagneticButton>
    </section>
  );
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    x.set((clientX - centerX) * 0.3);
    y.set((clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}
