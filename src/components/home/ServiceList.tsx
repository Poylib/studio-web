"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Architecture",
        description: "Exterior structures & facades",
        image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop"
    },
    {
        title: "Interior",
        description: "Spatial design & atmosphere",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "Aerial",
        description: "Drone & bird's eye view",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop"
    },
    {
        title: "Commercial",
        description: "Brand spaces & retail",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function ServiceList() {
    return (
        <section className="relative px-6 py-24 md:px-12 md:py-32 bg-neutral-950">
            <div className="flex flex-col">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group border-t border-neutral-800 py-12 transition-colors hover:bg-neutral-900/30"
                    >
                        <div className="flex flex-col justify-between md:flex-row md:items-center relative z-10">
                            <h3
                                className="text-4xl font-bold uppercase tracking-tighter md:text-6xl lg:text-7xl transition-transform duration-500 group-hover:translate-x-4"
                                data-cursor="hover"
                            >
                                {service.title}
                            </h3>
                            <p className="mt-4 text-sm text-secondary md:mt-0 md:text-base">
                                {service.description}
                            </p>
                        </div>

                        {/* CSS-only Floating Image Reveal */}
                        <div className="pointer-events-none fixed top-0 left-0 z-0 h-full w-full opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-[20%] group-hover:-translate-y-[10%] scale-80 translate-x-0 translate-y-0 hidden md:flex items-center justify-center">
                            <div className="relative h-[60vh] w-[40vw] overflow-hidden grayscale">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                ))}
                <div className="border-t border-neutral-800" />
            </div>
        </section>
    );
}
