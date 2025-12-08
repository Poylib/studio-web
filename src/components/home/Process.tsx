'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    id: '01',
    title: '사전미팅 및 사전답사',
    description: '최고의 결과물을 위해 철저한 사전 미팅이 진행됩니다',
  },
  {
    id: '02',
    title: '촬영',
    description: '디테일을 중시하며, 피사체의 특성에 맞춰 촬영합니다',
  },
  {
    id: '03',
    title: '백업',
    description: '물리적인 공간과 클라우드 공간에 데이터를 보관합니다',
  },
  {
    id: '04',
    title: 'Retouch & C.G',
    description: '색감보정 및 세부 수정을 진행합니다',
  },
  {
    id: '05',
    title: '컨펌',
    description: '모든 과정에서 클라이언트의 동의를 받아 진행합니다',
  },
  {
    id: '06',
    title: '납품',
    description: '',
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const observerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = steps.map((_, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(index);
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
          });
        },
        { threshold: 0.5, rootMargin: '-10% 0px -10% 0px' }
      );

      if (observerRefs.current[index]) {
        observer.observe(observerRefs.current[index]!);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="relative bg-neutral-950 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-24 md:mb-32">
          <h2 className="text-6xl font-bold uppercase tracking-tighter text-white md:text-8xl lg:text-9xl">
            Process
          </h2>
        </div>

        <div className="relative border-l border-neutral-800 ml-4 md:ml-0">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                observerRefs.current[index] = el;
              }}
              className={cn(
                'group relative mb-16 pl-8 md:pl-16 transition-all duration-700 ease-out opacity-0 translate-y-10',
                'last:mb-0'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Timeline Dot */}
              <div
                className={cn(
                  'absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-neutral-500 bg-neutral-950 transition-all duration-500',
                  activeStep === index ||
                    (activeStep !== null && activeStep > index)
                    ? 'bg-white border-white scale-125'
                    : 'group-hover:border-white'
                )}
              />

              <div className="flex flex-col md:flex-row md:items-baseline md:gap-12">
                <span
                  className={cn(
                    'mb-2 text-sm font-mono text-neutral-500 transition-colors duration-500 md:mb-0',
                    activeStep === index ? 'text-white' : ''
                  )}
                >
                  {step.id}
                </span>

                <div className="flex-1">
                  <h3
                    className={cn(
                      'text-2xl font-bold text-neutral-400 transition-colors duration-500 md:text-4xl',
                      activeStep === index
                        ? 'text-white'
                        : 'group-hover:text-neutral-200'
                    )}
                  >
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className="mt-4 max-w-lg text-neutral-500 transition-colors duration-500 group-hover:text-neutral-400">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
