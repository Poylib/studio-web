import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import History from "@/components/about/History";
import TeamGrid from "@/components/about/TeamGrid";
import ProcessDetail from "@/components/about/ProcessDetail";

export const metadata: Metadata = {
    title: "About | Socon",
    description: "Learn about SOCON's philosophy, history, and the team behind the lens.",
};

export default function AboutPage() {
    return (
        <main className="bg-neutral-950 min-h-screen">
            <AboutHero />
            <History />
            <TeamGrid />
            <ProcessDetail />
        </main>
    );
}
