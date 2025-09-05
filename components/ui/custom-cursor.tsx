'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseOut = () => setIsVisible(false);

    // Add event listeners for mouse movement
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseout', handleMouseOut);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, a, [role="button"], input, textarea, select, .cursor-pointer'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseout', handleMouseOut);
      
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-electric rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-electric/50 rounded-full pointer-events-none z-[9998]"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isVisible ? 0.6 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8,
        }}
      />

      {/* Trailing glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 bg-electric/20 rounded-full pointer-events-none z-[9997] blur-md"
        style={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isVisible ? 0.4 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 35,
          mass: 1.2,
        }}
      />
    </>
  );
}