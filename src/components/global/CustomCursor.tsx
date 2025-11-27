"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const moveCursor = (e: MouseEvent) => {
            // Center the cursor (base size 16px)
            cursorX.set(e.clientX - 8);
            cursorY.set(e.clientY - 8);

            const target = e.target as HTMLElement;
            // Check if hovering over interactive elements
            const isInteractive = target.closest("a, button, [data-cursor='hover']");
            setIsHovering(!!isInteractive);
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY]);

    if (!isMounted) return null;

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[9999] flex h-4 w-4 items-center justify-center rounded-full bg-white mix-blend-difference"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
            animate={{
                scale: isHovering ? 4 : 1,
                backgroundColor: isHovering ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 1)",
                border: isHovering ? "1px solid rgba(255, 255, 255, 0.2)" : "0px solid transparent",
                backdropFilter: isHovering ? "blur(2px)" : "none",
            }}
            transition={{
                scale: { type: "spring", stiffness: 300, damping: 20 },
                layout: { duration: 0.3 }
            }}
        >
            {isHovering && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[3px] font-bold tracking-widest text-white uppercase"
                >
                    View
                </motion.span>
            )}
        </motion.div>
    );
}
