"use client";

import { motion } from "framer-motion";

const steps = [
    { id: "01", title: "Meeting", description: "Initial consultation and site analysis to understand the core requirements." },
    { id: "02", title: "Shooting", description: "On-site photography focusing on light, shadow, and material textures." },
    { id: "03", title: "Backup", description: "Secure data management with triple redundancy across physical and cloud storage." },
    { id: "04", title: "Retouch", description: "Meticulous post-processing to enhance the atmosphere while maintaining authenticity." },
    { id: "05", title: "Confirm", description: "Collaborative review process to ensure the vision aligns with the client's needs." },
    { id: "06", title: "Delivery", description: "Final delivery of high-resolution assets optimized for various media formats." },
];

export default function ProcessDetail() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-neutral-900">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <h2 className="text-4xl font-bold uppercase tracking-tighter text-white md:text-6xl">
                        Process
                    </h2>
                    <p className="text-neutral-400 max-w-md text-sm md:text-base pb-2">
                        Our workflow is designed to ensure precision and artistic integrity at every stage.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative p-8 border border-neutral-800 bg-neutral-950 hover:border-neutral-600 transition-colors duration-300 group"
                        >
                            <span className="block text-4xl md:text-5xl font-bold text-neutral-800 mb-8 group-hover:text-neutral-700 transition-colors">
                                {step.id}
                            </span>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neutral-200 transition-colors">
                                {step.title}
                            </h3>

                            <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-400 transition-colors">
                                {step.description}
                            </p>

                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-neutral-800 group-hover:border-white transition-colors duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
