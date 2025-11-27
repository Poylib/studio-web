"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Philosophy() {
    const element = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start 0.9", "start 0.25"],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

    return (
        <section className="relative min-h-[50vh] px-6 py-24 md:px-12 md:py-32">
            <div className="mx-auto max-w-4xl">
                <motion.div
                    ref={element}
                    style={{ opacity }}
                    className="text-3xl font-medium leading-tight md:text-5xl lg:text-6xl"
                >
                    <p className="text-balance">
                        We believe that architecture is not just about structure, but about <span className="text-white">silence</span> and <span className="text-white">light</span>.
                    </p>
                    <p className="mt-12 text-balance">
                        Our lens captures the weight of materials and the void of space, creating images that feel as <span className="text-white">permanent</span> as the buildings themselves.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
