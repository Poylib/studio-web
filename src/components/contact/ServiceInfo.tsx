'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

type ServiceItem = {
  title: string;
  details: { label: string; value: string }[];
};

const services: ServiceItem[] = [
  {
    title: '인테리어 촬영',
    details: [
      { label: '촬영컷수', value: '30 - 150컷' },
      { label: '촬영시간', value: '30분 - 90분' },
      { label: '촬영비용', value: '350,000원 부터' },
      { label: '편집기간', value: '7일 - 10일' },
    ],
  },
  {
    title: '건축물 촬영',
    details: [
      { label: '촬영컷수', value: '50 - 300컷' },
      { label: '촬영시간', value: '60분 - 180분' },
      { label: '촬영비용', value: '600,000원 부터' },
      { label: '편집기간', value: '10일 - 15일' },
    ],
  },
  {
    title: '프로필 영상',
    details: [
      { label: '영상길이', value: '1분 - 2분' },
      { label: '촬영시간', value: '60분 - 120분' },
      { label: '촬영비용', value: '300,000원 부터' },
      { label: '편집기간', value: '7일 - 10일' },
    ],
  },
  {
    title: '인테리어 영상',
    details: [
      { label: '영상길이', value: '2분 이상' },
      { label: '촬영시간', value: '90분 이상' },
      { label: '촬영비용', value: '900,000원 부터' },
      { label: '편집기간', value: '10일 이상' },
    ],
  },
];

const travelExpenses = [
  { region: '서울시', cost: '없음' },
  { region: '경기도 전역 및 인천광역시', cost: '5만원' },
  { region: '강원도 및 충청도 전역', cost: '12만원' },
  { region: '전라도 전역 및 광주광역시', cost: '18만원' },
  { region: '경상도 전역', cost: '18만원' },
  { region: '대구광역시, 울산광역시, 부산광역시', cost: '18만원' },
];

export default function ServiceInfo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-t border-white/10 mt-12">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 group"
      >
        <span className="text-2xl md:text-3xl font-bold uppercase tracking-tight group-hover:pl-4 transition-all duration-300">
          Service Guide
        </span>
        <span className="p-2 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            className="overflow-hidden"
          >
            <div className="pb-12 pt-4 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
              {/* Pricing Section */}
              <div className="space-y-8">
                <h3 className="text-secondary font-mono text-sm uppercase tracking-wider mb-6">
                  Pricing Standard
                </h3>
                <div className="grid grid-cols-1 gap-8">
                  {services.map((service, index) => (
                    <div key={index} className="space-y-3">
                      <h4 className="text-xl font-medium">{service.title}</h4>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-secondary font-mono">
                        {service.details.map((detail, idx) => (
                          <React.Fragment key={idx}>
                            <span>{detail.label}</span>
                            <span className="text-white">{detail.value}</span>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-secondary font-mono pt-4 border-t border-white/5">
                  * VAT 별도이며, 세금계산서 발행가능합니다.
                </p>
              </div>

              {/* Travel Expenses Section */}
              <div>
                <h3 className="text-secondary font-mono text-sm uppercase tracking-wider mb-6">
                  Travel Expenses
                </h3>
                <ul className="space-y-4 font-mono text-sm">
                  {travelExpenses.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center border-b border-white/5 pb-2"
                    >
                      <span className="text-secondary">{item.region}</span>
                      <span className="text-white">{item.cost}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-secondary font-mono pt-4 mt-4">
                  * 부산광역시는 일정 조율시 출장비가 없을 수 있습니다.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
