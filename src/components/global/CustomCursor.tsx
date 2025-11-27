"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "view">("default");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const moveCursor = (e: MouseEvent) => {
            // Center the cursor (base size 16px)
            cursorX.set(e.clientX - 8);
            cursorY.set(e.clientY - 8);

            const target = e.target as HTMLElement;

            // Check for specific cursor triggers
            if (target.closest("[data-cursor='view']")) {
                setCursorVariant("view");
            } else if (target.closest("a, button, [data-cursor='hover']")) {
                setCursorVariant("hover");
            } else {
                setCursorVariant("default");
            }
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY]);

    if (!isMounted) return null;

    const variants = {
        default: {
            scale: 1,
            backgroundColor: "rgba(255, 255, 255, 1)",
            border: "0px solid transparent",
            backdropFilter: "none",
        },
        hover: {
            scale: 2, // Subtle scale for links
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            border: "0px solid transparent",
            backdropFilter: "none",
        },
        view: {
            scale: 4, // Large scale for grid items
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(2px)",
        },
    };

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[9999] flex h-4 w-4 items-center justify-center rounded-full bg-white mix-blend-difference"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
            animate={variants[cursorVariant]}
            transition={{
                scale: { type: "spring", stiffness: 300, damping: 20 },
                layout: { duration: 0.3 }
            }}
        >
            <AnimatePresence>
                {cursorVariant === "view" && (
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="text-[3px] font-bold tracking-widest text-white uppercase"
                    >
                        View
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
