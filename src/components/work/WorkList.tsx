"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import { works } from "@/data/works";

const categories = ["All", "Video", "Individual", "Interior", "Commercial"];

export default function WorkList() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredWorks = activeCategory === "All"
        ? works
        : works.filter(work => work.category === activeCategory);

    return (
        <section className="px-6 md:px-12 py-32 md:py-48">
            {/* Category Filter */}
            <div className="mb-16 flex flex-wrap gap-6 md:gap-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "text-sm font-medium uppercase tracking-widest transition-colors duration-300",
                            activeCategory === category
                                ? "text-white"
                                : "text-neutral-600 hover:text-neutral-400"
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredWorks.map((work) => (
                        <motion.div
                            key={work.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="break-inside-avoid"
                        >
                            <Link
                                href={`/work/${work.id}`}
                                className="group block relative"
                                data-cursor="view"
                            >
                                <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={work.coverImage}
                                        alt={work.title}
                                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </div>

                                <div className="mt-4 flex justify-between items-end opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                    <div>
                                        <h3 className="text-xl font-medium uppercase tracking-tight">{work.title}</h3>
                                        <p className="text-xs text-neutral-400 mt-1 font-mono">{work.category}</p>
                                    </div>
                                    <span className="text-xs font-mono text-neutral-500">{work.year}</span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
