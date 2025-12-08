import WorkList from '@/components/work/WorkList';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Work | Socon',
  description: 'Selected works and projects by Socon.',
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-white selection:text-black">
      <Suspense>
        <WorkList />
      </Suspense>
    </main>
  );
}
