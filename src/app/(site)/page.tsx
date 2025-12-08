import Hero from '@/components/home/Hero';
import Philosophy from '@/components/home/Philosophy';
import ServiceList from '@/components/home/ServiceList';
import Process from '@/components/home/Process';
import MasonryGrid from '@/components/home/MasonryGrid';
import ClientMarquee from '@/components/home/ClientMarquee';
import ContactCTA from '@/components/home/ContactCTA';

export default function Home() {
  return (
    <main className="bg-neutral-950 text-white selection:bg-white selection:text-black">
      <Hero />
      <Philosophy />
      <ServiceList />
      <Process />
      <MasonryGrid />
      <ClientMarquee />
      <ContactCTA />
    </main>
  );
}
