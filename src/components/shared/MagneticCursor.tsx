"use client";

import { useEffect, useState, useRef } from "react";

export default function MagneticCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState<'default' | 'link' | 'button'>('default');
  const [isMobile, setIsMobile] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    const updateMousePosition = (e: MouseEvent) => {
      // Immediate update for responsive cursor
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;

      // Determine cursor state based on element type
      if (target.tagName === 'BUTTON' || target.classList.contains('magnetic-button') || target.classList.contains('enhanced-button')) {
        setCursorState('button');
      } else if (target.tagName === 'A' || target.classList.contains('enhanced-link')) {
        setCursorState('link');
      } else {
        setCursorState('button'); // Default for other interactive elements
      }
    };

    const handleMouseLeave = () => {
      setCursorState('default');
    };

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], .magnetic-button, .enhanced-button, .enhanced-link'
    );

    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${cursorState !== 'default' ? cursorState : ''}`}
      style={{
        transform: `translate3d(${mousePosition.x - 8}px, ${mousePosition.y - 8}px, 0)`,
      }}
    />
  );
}