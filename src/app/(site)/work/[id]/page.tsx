import { works } from '@/data/works';
import WorkDetail from '@/components/work/WorkDetail';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return works.map((work) => ({
    id: work.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const work = works.find((w) => w.slug === id);

  if (!work) {
    return {
      title: 'Project Not Found | Socon',
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
  const work = works.find((w) => w.slug === id);
  if (!work) {
    notFound();
  }

  const currentIndex = works.findIndex((w) => w.id === work.id);
  const nextWork = works[(currentIndex + 1) % works.length];

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: work.title,
    description: work.description,
    image: work.coverImage,
    dateCreated: work.year,
    locationCreated: {
      '@type': 'Place',
      name: work.location,
    },
    provider: {
      '@type': 'Organization',
      name: work.client,
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://socon.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Work',
        item: 'https://socon.com/work',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: work.title,
        item: `https://socon.com/work/${work.slug}`,
      },
    ],
  };

  return (
    <>
      <Script
        id="json-ld-work"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />
      <Script
        id="json-ld-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        strategy="beforeInteractive"
      />
      <WorkDetail work={work} nextWork={nextWork} />
    </>
  );
}
