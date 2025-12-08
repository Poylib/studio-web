'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  details: { label: string; value: string }[];
  color: string; // Fallback color
  image: string; // Unsplash Image URL
};

const services: ServiceItem[] = [
  {
    id: 'interior-photo',
    title: 'Interior Photography',
    description:
      'Capturing the essence of space through light and composition.',
    details: [
      { label: 'Cuts', value: '30 - 150' },
      { label: 'Time', value: '30 - 90 min' },
      { label: 'Price', value: 'KRW 350,000+' },
      { label: 'Edit', value: '7 - 10 days' },
    ],
    color: 'bg-zinc-800',
    image:
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop',
  },
  {
    id: 'architecture-photo',
    title: 'Architecture Photography',
    description: 'Documenting the structural integrity and design intent.',
    details: [
      { label: 'Cuts', value: '50 - 300' },
      { label: 'Time', value: '60 - 180 min' },
      { label: 'Price', value: 'KRW 600,000+' },
      { label: 'Edit', value: '10 - 15 days' },
    ],
    color: 'bg-zinc-700',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2400&auto=format&fit=crop',
  },
  {
    id: 'profile-video',
    title: 'Profile Video',
    description: 'Cinematic portraits that tell a professional narrative.',
    details: [
      { label: 'Length', value: '1 - 2 min' },
      { label: 'Time', value: '60 - 120 min' },
      { label: 'Price', value: 'KRW 300,000+' },
      { label: 'Edit', value: '7 - 10 days' },
    ],
    color: 'bg-zinc-600',
    image:
      'https://images.unsplash.com/photo-1533518463841-d62e1fc91373?q=80&w=2400&auto=format&fit=crop',
  },
  {
    id: 'interior-video',
    title: 'Interior Video',
    description: 'Immersive motion tours of designed environments.',
    details: [
      { label: 'Length', value: '2 min +' },
      { label: 'Time', value: '90 min +' },
      { label: 'Price', value: 'KRW 900,000+' },
      { label: 'Edit', value: '10 days +' },
    ],
    color: 'bg-zinc-500',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop',
  },
];

const travelExpenses = [
  { region: 'Seoul', cost: 'Free' },
  { region: 'Gyeonggi & Incheon', cost: '50,000' },
  { region: 'Gangwon & Chungcheong', cost: '120,000' },
  { region: 'Jeolla & Gwangju', cost: '180,000' },
  { region: 'Gyeongsang', cost: '180,000' },
  { region: 'Daegu, Ulsan, Busan', cost: '180,000' },
];

export default function PriceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState(services[0].id);

  // Handle scroll to update active service
  useEffect(() => {
    const handleScroll = () => {
      const serviceElements = services.map((s) =>
        document.getElementById(s.id)
      );

      for (const el of serviceElements) {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveService(el.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-background text-foreground py-32 px-4 md:px-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        {/* Left Column: Sticky Image */}
        <div className="hidden md:block relative h-[80vh] sticky top-32">
          <div className="w-full h-full relative overflow-hidden rounded-sm">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className={`absolute inset-0 w-full h-full ${service.color}`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeService === service.id ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Placeholder for Image */}
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-black/20" />{' '}
                {/* Overlay for text readability */}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Scrollable Content */}
        <div className="flex flex-col gap-32 pb-32">
          {/* Services */}
          <div className="flex flex-col gap-40">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="flex flex-col gap-8 min-h-[50vh] justify-center"
              >
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-balance">
                    {service.title}
                  </h2>
                  <p className="text-secondary text-lg md:text-xl max-w-md">
                    {service.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-y-6 gap-x-12 border-t border-white/10 pt-8">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <span className="text-xs font-mono text-secondary uppercase tracking-wider">
                        {detail.label}
                      </span>
                      <span className="text-xl md:text-2xl font-medium">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Travel Expenses & VAT Info */}
          <div className="border-t border-white/10 pt-16 space-y-12">
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-8">
                Travel Expenses
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {travelExpenses.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b border-white/5 pb-4"
                  >
                    <span className="text-secondary font-mono text-sm md:text-base">
                      {item.region}
                    </span>
                    <span className="text-white font-mono text-sm md:text-base">
                      {item.cost}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-secondary font-mono pt-4 mt-4">
                * Busan: Travel fee may be waived depending on schedule.
              </p>
            </div>

            <div className="bg-surface p-8 border border-white/5">
              <p className="text-sm text-secondary font-mono">
                * All prices exclude VAT. Tax invoices are available upon
                request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
