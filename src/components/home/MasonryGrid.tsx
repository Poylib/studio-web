'use client';

import Link from 'next/link';
import Image from 'next/image';
import { works } from '@/data/works';

export default function MasonryGrid() {
  // 홈 페이지에서는 최근 6개 프로젝트만 표시
  const featuredWorks = works.slice(0, 6);

  return (
    <section>
      <div className="columns-1 gap-8 md:columns-2 lg:columns-3 space-y-8">
        {featuredWorks.map((work) => (
          <Link
            key={work.id}
            href={`/work/${work.slug}`}
            className="group relative block break-inside-avoid overflow-hidden bg-neutral-900"
            data-cursor="view"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden grayscale transition-all duration-500 group-hover:grayscale-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                src={work.coverImage}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 text-white opacity-0 transition-all duration-500 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
              <h3 className="text-2xl font-bold uppercase md:text-3xl">
                {work.title}
              </h3>
              <p className="text-sm font-medium text-neutral-300">
                {work.category}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
