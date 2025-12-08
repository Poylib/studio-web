'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const historyData = [
  {
    year: '2025',
    events: [
      {
        month: 'MAR',
        title: 'Global Design Award',
        description: 'Winner of the International Spatial Design Award 2025.',
      },
      {
        month: 'JAN',
        title: 'Expansion to Europe',
        description: 'Opened new branch office in Berlin, Germany.',
      },
    ],
  },
  {
    year: '2024',
    events: [
      {
        month: 'NOV',
        title: "Project 'Void'",
        description: 'Completed the landmark minimalist residence in Seoul.',
      },
      {
        month: 'AUG',
        title: 'Studio Founded',
        description: 'SOCON established with a vision for structural silence.',
      },
    ],
  },
];

export default function History() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-6 md:px-12 bg-neutral-950 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-32 border-b border-neutral-800 pb-8 flex justify-between items-end">
          <h2 className="text-4xl font-bold uppercase tracking-tighter text-white md:text-6xl">
            History
          </h2>
          <span className="font-mono text-neutral-500 text-sm">
            [ TIMELINE ]
          </span>
        </div>

        <div className="relative">
          {/* Vertical Grid Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-neutral-900 hidden md:block" />
          <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-neutral-900 hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-neutral-900 hidden md:block" />

          {historyData.map((yearGroup, yearIndex) => (
            <div
              key={yearGroup.year}
              className="relative mb-32 last:mb-0 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Year Column */}
                <div className="relative">
                  <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-8xl md:text-9xl font-bold text-neutral-900 stroke-text select-none"
                    style={{ WebkitTextStroke: '1px #333' }}
                  >
                    {yearGroup.year}
                  </motion.h3>
                </div>

                {/* Events Column */}
                <div className="md:col-span-2 space-y-24 pt-8">
                  {yearGroup.events.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="relative pl-8 border-l border-neutral-800"
                    >
                      {/* Crosshair Marker */}
                      <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 bg-neutral-950 border border-neutral-500 flex items-center justify-center">
                        <div className="w-[1px] h-full bg-neutral-500" />
                        <div className="h-[1px] w-full bg-neutral-500 absolute" />
                      </div>

                      <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                        <span className="text-sm font-mono text-neutral-500 w-12">
                          {event.month}
                        </span>
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-4">
                            {event.title}
                          </h4>
                          <p className="text-neutral-400 max-w-md leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
