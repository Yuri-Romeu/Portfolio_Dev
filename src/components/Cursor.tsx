'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
     const cursorRef = useRef<HTMLDivElement>(null);
     const dotRef = useRef<HTMLDivElement>(null);

     useEffect(() => {
          const cursor = cursorRef.current;
          const dot = dotRef.current;
          if (!cursor || !dot) return;

          const mediaQuery = window.matchMedia('(pointer: fine)');
          if (!mediaQuery.matches) return;

          let mouseX = window.innerWidth / 2;
          let mouseY = window.innerHeight / 2;
          let currentX = mouseX;
          let currentY = mouseY;
          let rafId = 0;

          const handleMouseMove = (event: MouseEvent) => {
               mouseX = event.clientX;
               mouseY = event.clientY;
          };

          const animate = () => {
               currentX += (mouseX - currentX) * 0.22;
               currentY += (mouseY - currentY) * 0.22;

               cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

               const dx = mouseX - currentX;
               const dy = mouseY - currentY;
               const distance = Math.hypot(dx, dy);
               const maxOffset = 6;
               const factor = distance > 0 ? Math.min(maxOffset, distance) / distance : 0;
               const dotX = dx * factor;
               const dotY = dy * factor;

               dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
               rafId = window.requestAnimationFrame(animate);
          };

          window.addEventListener('mousemove', handleMouseMove);
          rafId = window.requestAnimationFrame(animate);

          return () => {
               window.removeEventListener('mousemove', handleMouseMove);
               window.cancelAnimationFrame(rafId);
          };
     }, []);

     return (
          <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
               <div ref={dotRef} className="custom-cursor-dot" />
          </div>
     );
}
