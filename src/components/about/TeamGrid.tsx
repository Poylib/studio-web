"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
    {
        name: "Sarah Kim",
        role: "Principal Architect",
        bio: "Leading the vision of structural silence with over 15 years of experience in minimalist architecture.",
        image: "https://placehold.co/600x800/111/FFF?text=SK" // Placeholder
    },
    {
        name: "David Lee",
        role: "Creative Director",
        bio: "Focusing on the intersection of light, material, and human experience in spatial design.",
        image: "https://placehold.co/600x800/111/FFF?text=DL" // Placeholder
    },
    {
        name: "Minji Park",
        role: "Senior Designer",
        bio: "Specializing in interior details and material selection that bring warmth to concrete spaces.",
        image: "https://placehold.co/600x800/111/FFF?text=MP" // Placeholder
    },
    // Example of scalability - uncomment to test 4th member
    /*
    {
      name: "James Chen",
      role: "Visualizer",
      bio: "Crafting hyper-realistic 3D visualizations that bridge the gap between concept and reality.",
      image: "https://placehold.co/600x800/111/FFF?text=JC"
    }
    */
];

export default function TeamGrid() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-neutral-950 border-t border-neutral-900">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 md:mb-24">
                    <h2 className="text-4xl font-bold uppercase tracking-tighter text-white md:text-6xl">
                        People
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-neutral-900">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            <div className="flex flex-col">
                                <div className="flex items-baseline justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">{member.role}</span>
                                </div>
                                <p className="text-sm text-neutral-400 leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
