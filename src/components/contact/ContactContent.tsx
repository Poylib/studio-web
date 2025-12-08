'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

export default function ContactContent() {
  const [copied, setCopied] = useState(false);
  const email = 'hello@socon.studio'; // Placeholder email

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <motion.div
      className="min-h-screen w-full px-4 pt-32 pb-20 md:px-12 md:pt-40 flex flex-col justify-between"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="mb-16 md:mb-0">
        <h1 className="text-6xl md:text-[10rem] leading-[0.85] font-bold tracking-tighter uppercase text-balance">
          Contact
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mt-12 w-full">
        {/* Left Column: Contact Info & SNS */}
        <div className="md:col-span-6 flex flex-col gap-12">
          {/* Email */}
          <motion.div
            variants={itemVariants}
            className="group cursor-pointer"
            onClick={handleCopyEmail}
          >
            <p className="text-secondary font-mono text-sm mb-2 uppercase tracking-wider">
              Get in Touch
            </p>
            <div className="flex items-center gap-4">
              <span className="text-2xl md:text-4xl font-medium group-hover:text-white transition-colors duration-300">
                {email}
              </span>
              <div className="p-2 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300">
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </div>
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div variants={itemVariants}>
            <p className="text-secondary font-mono text-sm mb-4 uppercase tracking-wider">
              Socials
            </p>
            <div className="flex flex-col gap-2">
              {['Instagram', 'Behance', 'LinkedIn'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="group flex items-center justify-between border-b border-white/10 py-4 hover:pl-4 transition-all duration-300"
                >
                  <span className="text-xl md:text-2xl font-medium">
                    {platform}
                  </span>
                  <ArrowUpRight
                    size={24}
                    className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Notice / Policy */}
        <div className="md:col-span-5 md:col-start-8 flex flex-col justify-end">
          <motion.div
            variants={itemVariants}
            className="bg-surface p-6 md:p-8 border border-white/5 space-y-6"
          >
            <div className="flex items-center gap-2 text-secondary mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest">
                Process Protocol
              </span>
            </div>

            <div className="font-mono text-sm md:text-base text-secondary space-y-6 leading-relaxed">
              <p>
                <span className="text-white">
                  스튜디오 소콘의 작업시간은 10일 ~ 15일 입니다.
                </span>
              </p>
              <p>
                비교적 오랜기간이 소요되는 이유는 초안 작업에서, 촬영후 당일 1차
                색감보정을 진행하고{' '}
                <span className="text-white">3일 ~ 5일 후 새로운 시점</span>으로
                한번 더 진행하기 때문입니다.
              </p>
              <p>
                또한, 기존의 프리셋을 사용하는 것이 아닌{' '}
                <span className="text-white">
                  최상의 결과물을 위해 맞춤형 보정
                </span>
                을 진행하기 때문입니다.
              </p>
              <div className="h-px w-full bg-white/10 my-4" />
              <p className="text-white">
                결과물이 급히 필요하신 분은 미리 말씀해주시기 바랍니다.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
