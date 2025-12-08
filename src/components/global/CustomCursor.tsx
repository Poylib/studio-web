'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const [cursorVariant, setCursorVariant] = useState<
    'default' | 'hover' | 'view'
  >('default');
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 모바일/터치 디바이스 감지
  useEffect(() => {
    const checkMobile = () => {
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
      const isTouchDevice =
        'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;

      // 정밀 포인터가 없거나, 작은 화면이면서 터치 디바이스인 경우 모바일로 간주
      setIsMobile(!hasFinePointer || (isSmallScreen && isTouchDevice));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // PC 환경에서 기본 커서 숨기기
  useEffect(() => {
    if (!isMobile && isMounted) {
      document.body.style.cursor = 'none';

      // 모든 요소에 cursor: none 적용
      const style = document.createElement('style');
      style.id = 'hide-cursor';
      style.textContent = '* { cursor: none !important; }';
      document.head.appendChild(style);

      return () => {
        document.body.style.cursor = '';
        const existingStyle = document.getElementById('hide-cursor');
        if (existingStyle) {
          existingStyle.remove();
        }
      };
    }
  }, [isMobile, isMounted]);

  // 기본 커서 크기 (scale 1일 때)
  const BASE_SIZE = 24;

  useEffect(() => {
    setIsMounted(true);
    const moveCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check for specific cursor triggers
      if (target.closest("[data-cursor='view']")) {
        setCursorVariant('view');
      } else if (target.closest("a, button, [data-cursor='hover']")) {
        setCursorVariant('hover');
      } else {
        setCursorVariant('default');
      }

      // 항상 중심점 기준으로 위치 계산
      cursorX.set(e.clientX - BASE_SIZE / 2);
      cursorY.set(e.clientY - BASE_SIZE / 2);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  if (!isMounted || isMobile) return null;

  const variants = {
    default: {
      scale: 1,
      backgroundColor: '#EAEAEA',
      border: '0px solid transparent',
      backdropFilter: 'none',
      mixBlendMode: 'difference' as const,
      boxShadow: 'none',
    },
    hover: {
      scale: 2,
      backgroundColor: 'rgba(234, 234, 234, 0.1)',
      border: '1px solid rgba(234, 234, 234, 0.2)',
      backdropFilter: 'blur(4px)',
      mixBlendMode: 'normal' as const,
      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
    },
    view: {
      scale: 3.33,
      backgroundColor: 'rgba(234, 234, 234, 0.1)',
      border: '1px solid rgba(234, 234, 234, 0.3)',
      backdropFilter: 'blur(8px)',
      mixBlendMode: 'normal' as const,
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
    },
  };

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] flex h-6 w-6 items-center justify-center rounded-full"
      style={{
        x: cursorX,
        y: cursorY,
      }}
      animate={variants[cursorVariant]}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 40,
        mass: 0.8,
      }}
    >
      <AnimatePresence>
        {cursorVariant === 'view' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="font-mono text-[4px] font-medium tracking-widest text-[#EAEAEA] uppercase"
          >
            VIEW
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
