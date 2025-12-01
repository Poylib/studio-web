import { works } from "@/data/works";
import WorkDetail from "@/components/work/WorkDetail";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateStaticParams() {
    return works.map((work) => ({
        id: work.id.toString(),
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const work = works.find((w) => w.id.toString() === id);

    if (!work) {
        return {
            title: "Project Not Found | Socon",
        };
    }

    return {
        title: `${work.title} | Socon`,
        description: work.description,
        openGraph: {
            title: `${work.title} | Socon`,
            description: work.description,
            images: [
                {
                    url: work.coverImage,
                    width: 1200,
                    height: 630,
                    alt: work.title,
                },
            ],
        },
    };
}

export default async function WorkDetailPage({ params }: PageProps) {
    const { id } = await params;
    const work = works.find((w) => w.id.toString() === id);

    if (!work) {
        notFound();
    }

    const currentIndex = works.findIndex((w) => w.id === work.id);
    const nextWork = works[(currentIndex + 1) % works.length];

    // JSON-LD Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": work.title,
        "description": work.description,
        "image": work.coverImage,
        "dateCreated": work.year,
        "locationCreated": {
            "@type": "Place",
            "name": work.location
        },
        "provider": {
            "@type": "Organization",
            "name": work.client
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <WorkDetail work={work} nextWork={nextWork} />
        </>
    );
}
