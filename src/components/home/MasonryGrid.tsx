"use client";

import { cn } from "@/lib/utils";

const projects = [
    {
        id: 1,
        title: "Urban Center",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        size: "large"
    },
    {
        id: 2,
        title: "Forest Retreat",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop",
        size: "small"
    },
    {
        id: 3,
        title: "Tech Hub",
        category: "Office",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        size: "medium"
    },
    {
        id: 4,
        title: "Art Gallery",
        category: "Cultural",
        image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1974&auto=format&fit=crop",
        size: "medium"
    },
    {
        id: 5,
        title: "Skyline Tower",
        category: "Mixed Use",
        image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2010&auto=format&fit=crop",
        size: "large"
    },
    {
        id: 6,
        title: "Eco Villa",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
        size: "small"
    }
];

export default function MasonryGrid() {
    return (
        <section>
            <div className="columns-1 gap-8 md:columns-2 lg:columns-3 space-y-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group relative break-inside-avoid overflow-hidden bg-neutral-900"
                        data-cursor="view"
                    >
                        <div className="relative aspect-[4/5] w-full overflow-hidden grayscale transition-all duration-500 group-hover:grayscale-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6 text-white opacity-0 transition-all duration-500 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                            <h3 className="text-2xl font-bold uppercase md:text-3xl">{project.title}</h3>
                            <p className="text-sm font-medium text-neutral-300">{project.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
