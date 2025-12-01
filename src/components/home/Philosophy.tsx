"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

export default function Philosophy() {
    const element = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start 0.9", "start 0.25"],
    });

    const paragraph1 = "We believe that architecture is not just about structure, but about silence and light.";
    const paragraph2 = "Our lens captures the weight of materials and the void of space, creating images that feel as permanent as the buildings themselves.";

    return (
        <section className="relative min-h-[50vh] px-6 py-24 md:px-12 md:py-32">
            <div className="mx-auto max-w-4xl">
                <div
                    ref={element}
                    className="text-3xl font-medium leading-tight md:text-5xl lg:text-6xl"
                >
                    <Paragraph value={paragraph1} progress={scrollYProgress} range={[0, 0.55]} />
                    {/* <div className="h-12" /> */}
                    <Paragraph value={paragraph2} progress={scrollYProgress} range={[0.55, 1]} />
                </div>
            </div>
        </section>
    );
}

const Paragraph = ({ value, progress, range }: { value: string; progress: MotionValue<number>; range: [number, number] }) => {
    const words = value.split(" ");
    const [startRange, endRange] = range;
    const duration = endRange - startRange;

    return (
        <p className="flex flex-wrap text-balance">
            {words.map((word, i) => {
                const step = duration / words.length;
                const start = startRange + i * step;
                const end = start + step;
                return (
                    <Word key={i} progress={progress} range={[start, end]}>
                        {word}
                    </Word>
                );
            })}
        </p>
    );
};

const Word = ({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0.1, 1]);
    const filter = useTransform(progress, range, ["blur(4px)", "blur(0px)"]);
    const color = useTransform(progress, range, ["#525252", "#ffffff"]); // neutral-600 to white

    return (
        <span className="relative mr-3 mt-3 inline-block">
            <span className="absolute opacity-10">{children}</span>
            <motion.span style={{ opacity, filter, color }}>{children}</motion.span>
        </span>
    );
};
