"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

const socialLinks = [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-40 flex flex-col justify-between bg-[#050505] p-6 md:p-12 text-foreground overflow-hidden"
                >
                    {/* Dusty Noise Background */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.08] z-0 mix-blend-overlay">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
                    </div>

                    {/* Main Navigation */}
                    <div className="flex flex-1 flex-col justify-center space-y-2 md:space-y-4 z-10">
                        {menuItems.map((item, index) => (
                            <FlipLink
                                key={item.label}
                                href={item.href}
                                onClick={onClose}
                                delay={index * 0.1}
                            >
                                {item.label}
                            </FlipLink>
                        ))}
                    </div>

                    {/* Footer / Socials */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col md:flex-row justify-between items-end md:items-center text-xs font-mono uppercase tracking-widest text-secondary z-10"
                    >
                        <div className="flex flex-col space-y-2 mb-4 md:mb-0">
                            <span>Socon Studio</span>
                            <span>Est. 2024</span>
                        </div>

                        <div className="flex space-x-6">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-foreground transition-colors duration-300"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href, onClick, delay }: { children: string; href: string; onClick: () => void; delay: number }) => {
    return (
        <motion.div
            initial="initial"
            whileHover="hovered"
            className="relative block overflow-hidden whitespace-nowrap text-5xl md:text-9xl font-bold uppercase tracking-tighter leading-[0.85]"
        >
            <Link href={href} onClick={onClick}>
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{
                        duration: 0.5,
                        delay: delay,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >
                    {children.split("").map((l, i) => (
                        <motion.span
                            variants={{
                                initial: { y: 0 },
                                hovered: { y: "-100%" },
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * i,
                            }}
                            className="inline-block"
                            key={i}
                        >
                            {l}
                        </motion.span>
                    ))}
                </motion.div>

                <div className="absolute inset-0">
                    {children.split("").map((l, i) => (
                        <motion.span
                            variants={{
                                initial: { y: "100%" },
                                hovered: { y: 0 },
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * i,
                            }}
                            className="inline-block"
                            key={i}
                        >
                            {l}
                        </motion.span>
                    ))}
                </div>
            </Link>
        </motion.div>
    );
};
