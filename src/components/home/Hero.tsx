"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="h-full w-full bg-neutral-900">
                    {/* Placeholder for Hero Image - using a dark gradient for now */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10" />
                    <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Socon Architecture"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                </div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12">
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="text-6xl font-bold tracking-tighter md:text-9xl lg:text-[12rem] leading-[0.9]"
                    >
                        SOCON
                    </motion.h1>
                </div>
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                        className="mt-6 max-w-xl text-lg text-secondary md:text-2xl"
                    >
                        Architectural Photography & <br />
                        Spatial Visualization.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
