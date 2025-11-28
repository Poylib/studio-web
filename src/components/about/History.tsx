"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const historyData = [
    {
        year: "2025",
        events: [
            { month: "MAR", title: "Global Design Award", description: "Winner of the International Spatial Design Award 2025." },
            { month: "JAN", title: "Expansion to Europe", description: "Opened new branch office in Berlin, Germany." },
        ]
    },
    {
        year: "2024",
        events: [
            { month: "NOV", title: "Project 'Void'", description: "Completed the landmark minimalist residence in Seoul." },
            { month: "AUG", title: "Studio Founded", description: "SOCON established with a vision for structural silence." },
        ]
    }
];

export default function History() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineScale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <section ref={containerRef} className="relative py-24 md:py-32 px-6 md:px-12 bg-neutral-950">
            <div className="mx-auto max-w-5xl">
                <div className="mb-16 md:mb-24">
                    <h2 className="text-4xl font-bold uppercase tracking-tighter text-white md:text-6xl">
                        History
                    </h2>
                </div>

                <div className="relative border-l border-neutral-800 ml-3 md:ml-0 pl-8 md:pl-16">
                    {/* Animated Line Overlay */}
                    <motion.div
                        style={{ scaleY: lineScale }}
                        className="absolute left-[-1px] top-0 bottom-0 w-[1px] bg-white origin-top"
                    />

                    {historyData.map((yearGroup, yearIndex) => (
                        <div key={yearGroup.year} className="mb-24 last:mb-0">
                            <h3 className="text-8xl font-bold text-neutral-800 mb-12 select-none">
                                {yearGroup.year}
                            </h3>

                            <div className="space-y-16">
                                {yearGroup.events.map((event, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="relative group"
                                    >
                                        {/* Dot */}
                                        <div className="absolute -left-[41px] md:-left-[73px] top-2 h-2.5 w-2.5 rounded-full border border-neutral-500 bg-neutral-950 group-hover:bg-white group-hover:border-white transition-colors duration-300" />

                                        <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-4 md:gap-8">
                                            <span className="text-sm font-mono text-neutral-500 pt-1">
                                                {event.month}
                                            </span>
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-neutral-300 transition-colors">
                                                    {event.title}
                                                </h4>
                                                <p className="text-neutral-500 max-w-md">
                                                    {event.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
