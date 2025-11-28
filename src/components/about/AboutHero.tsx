"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section className="relative min-h-[60vh] flex flex-col justify-end px-6 pb-24 md:px-12 md:pb-32 pt-48">
            <div className="mx-auto w-full max-w-7xl border-t border-neutral-800 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

                    {/* Motto */}
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-6xl font-bold uppercase tracking-tighter text-white md:text-8xl lg:text-9xl leading-[0.85]"
                        >
                            Structural<br />
                            <span className="text-neutral-600">Silence</span>
                        </motion.h1>
                    </div>

                    {/* Intro Text */}
                    <div className="flex flex-col justify-end">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="max-w-md"
                        >
                            <h2 className="text-xl font-medium text-white mb-6">
                                Crafting immersive environments through light and material.
                            </h2>
                            <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                                SOCON is a spatial design studio dedicated to capturing the essence of architecture.
                                We believe that every space has a voice, a silent narrative waiting to be heard.
                                Our work is an exploration of the delicate balance between structure and emptiness,
                                light and shadow.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
