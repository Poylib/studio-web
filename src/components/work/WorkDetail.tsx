"use client";

import { WorkItem } from "@/data/works";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface WorkDetailProps {
    work: WorkItem;
    nextWork: WorkItem | null;
}

export default function WorkDetail({ work, nextWork }: WorkDetailProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <article ref={containerRef} className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-white selection:text-black">
            {/* Hero Section */}
            <div className="relative h-[80vh] w-full overflow-hidden">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0"
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={work.coverImage}
                        alt={work.title}
                        className="h-full w-full object-cover opacity-60"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-9xl font-bold uppercase tracking-tighter text-white mb-4"
                    >
                        {work.title}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="flex flex-wrap gap-4 text-sm font-mono text-neutral-400 uppercase tracking-widest"
                    >
                        <span>{work.category}</span>
                        <span>/</span>
                        <span>{work.year}</span>
                        <span>/</span>
                        <span>{work.location}</span>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Metadata Sidebar */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="space-y-8 sticky top-32">
                            <div>
                                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Client</h3>
                                <p className="text-xl">{work.client}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Services</h3>
                                <ul className="space-y-1">
                                    {work.services.map((service) => (
                                        <li key={service} className="text-lg">{service}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Description</h3>
                                <p className="text-neutral-400 leading-relaxed text-balance">{work.description}</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-24">
                        {work.content.map((block, index) => {
                            switch (block.type) {
                                case 'text':
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <p className="text-2xl md:text-3xl leading-relaxed font-light text-neutral-300">
                                                {block.value as string}
                                            </p>
                                        </motion.div>
                                    );
                                case 'image':
                                    return (
                                        <motion.figure
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8 }}
                                            className="space-y-4"
                                        >
                                            <div className="overflow-hidden rounded-sm">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={block.value as string}
                                                    alt={block.caption || ""}
                                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                                />
                                            </div>
                                            {block.caption && (
                                                <figcaption className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                                                    {block.caption}
                                                </figcaption>
                                            )}
                                        </motion.figure>
                                    );
                                case 'grid':
                                    return (
                                        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {(block.value as string[]).map((imgSrc, imgIndex) => (
                                                <motion.div
                                                    key={imgIndex}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.6, delay: imgIndex * 0.1 }}
                                                    className="overflow-hidden rounded-sm"
                                                >
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        src={imgSrc}
                                                        alt=""
                                                        className="w-full h-full object-cover aspect-[3/4] hover:scale-105 transition-transform duration-700"
                                                    />
                                                </motion.div>
                                            ))}
                                        </div>
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </div>
                </div>
            </div>

            {/* Next Project Navigation */}
            {nextWork && (
                <Link href={`/work/${nextWork.id}`} className="block group relative overflow-hidden h-[60vh] w-full">
                    <div className="absolute inset-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={nextWork.coverImage}
                            alt={nextWork.title}
                            className="h-full w-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                        <span className="text-sm font-mono text-neutral-400 uppercase tracking-widest mb-4">Next Project</span>
                        <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-white mb-8 group-hover:translate-x-4 transition-transform duration-500">
                            {nextWork.title}
                        </h2>
                        <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            <span className="text-sm font-mono uppercase tracking-widest">View Case Study</span>
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </Link>
            )}
        </article>
    );
}
