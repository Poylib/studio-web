"use client";

import Link from "next/link";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";

export default function FrameNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="pointer-events-none fixed inset-0 z-50 p-6 md:p-12 text-xs font-medium uppercase tracking-widest text-foreground mix-blend-difference">
                {/* Top Left */}
                <div className="pointer-events-auto absolute top-6 left-6 md:top-12 md:left-12">
                    <Link href="/" className="hover:opacity-50 transition-opacity">
                        SOCON
                    </Link>
                </div>

                {/* Top Right */}
                <div className="pointer-events-auto absolute top-6 right-6 md:top-12 md:right-12">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="hover:opacity-50 transition-opacity"
                    >
                        {isMenuOpen ? "[ CLOSE ]" : "[ MENU ]"}
                    </button>
                </div>

                {/* Bottom Left */}
                <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 opacity-50">
                    <span>Home</span>
                </div>

                {/* Bottom Right */}
                <div className="pointer-events-auto absolute bottom-6 right-6 md:bottom-12 md:right-12">
                    <Link href="/contact" className="hover:opacity-50 transition-opacity">
                        Contact
                    </Link>
                </div>
            </nav>

            <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}
