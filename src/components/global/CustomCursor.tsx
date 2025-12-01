"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // "Heavy" physics for Structural Silence feel
    const springConfig = { damping: 40, stiffness: 300 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "view">("default");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const moveCursor = (e: MouseEvent) => {

            const target = e.target as HTMLElement;

            // Check for specific cursor triggers
            if (target.closest("[data-cursor='view']")) {
                setCursorVariant("view");
                cursorX.set(e.clientX - 40);
                cursorY.set(e.clientY - 40);
            } else if (target.closest("a, button, [data-cursor='hover']")) {
                setCursorVariant("hover");
                cursorX.set(e.clientX - 24);
                cursorY.set(e.clientY - 24);
            } else {
                setCursorVariant("default");
                cursorX.set(e.clientX - 6);
                cursorY.set(e.clientY - 6);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY]);

    if (!isMounted) return null;

    const variants = {
        default: {
            width: 12,
            height: 12,
            backgroundColor: "#EAEAEA", // Off-white
            border: "0px solid transparent",
            backdropFilter: "none",
            mixBlendMode: "difference" as const,
            boxShadow: "none",
        },
        hover: {
            width: 48,
            height: 48,
            backgroundColor: "rgba(234, 234, 234, 0.1)",
            border: "1px solid rgba(234, 234, 234, 0.2)",
            backdropFilter: "blur(4px)",
            mixBlendMode: "normal" as const,
            boxShadow: "0 4px 24px rgba(0, 0, 0, 0.1)",
        },
        view: {
            width: 80,
            height: 80,
            backgroundColor: "rgba(234, 234, 234, 0.1)",
            border: "1px solid rgba(234, 234, 234, 0.3)",
            backdropFilter: "blur(8px)",
            mixBlendMode: "normal" as const,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
        },
    };

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center rounded-full"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
            animate={variants[cursorVariant]}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 40,
                mass: 0.8
            }}
        >
            <AnimatePresence>
                {cursorVariant === "view" && (
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="font-mono text-[10px] font-medium tracking-widest text-[#EAEAEA] uppercase"
                    >
                        VIEW
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
