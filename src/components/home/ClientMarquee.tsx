"use client";

// import { motion } from "framer-motion";

const clients = [
    "Hyundai E&C", "Samsung C&T", "Gansam Architects", "Heerim", "Posco A&C", "Haeahn",
    "Hyundai E&C", "Samsung C&T", "Gansam Architects", "Heerim", "Posco A&C", "Haeahn"
];

export default function ClientMarquee() {
    return (
        <section className="overflow-hidden py-24 md:py-32 bg-neutral-950">
            <div className="relative flex w-full overflow-hidden">
                <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-12 md:gap-24">
                    {clients.map((client, index) => (
                        <span
                            key={index}
                            className="text-4xl font-bold uppercase text-neutral-800 md:text-6xl lg:text-7xl"
                        >
                            {client}
                        </span>
                    ))}
                </div>
                <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-12 md:gap-24" aria-hidden="true">
                    {clients.map((client, index) => (
                        <span
                            key={`duplicate-${index}`}
                            className="text-4xl font-bold uppercase text-neutral-800 md:text-6xl lg:text-7xl"
                        >
                            {client}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
