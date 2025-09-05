'use client';

import { useEffect, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export default function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationId: number;
    let trailId = 0;

    const updateTrail = () => {
      setTrail(prevTrail => {
        const newTrail = [...prevTrail];
        
        // Add new point
        if (mousePosition.x !== 0 || mousePosition.y !== 0) {
          newTrail.push({
            x: mousePosition.x,
            y: mousePosition.y,
            id: trailId++
          });
        }
        
        // Keep only last 15 points
        if (newTrail.length > 15) {
          newTrail.shift();
        }
        
        return newTrail;
      });
      
      animationId = requestAnimationFrame(updateTrail);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationId = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [mousePosition]);

  return (
    <>
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: point.x - 3,
            top: point.y - 3,
            opacity: (index + 1) / trail.length * 0.5,
            transform: `scale(${(index + 1) / trail.length})`,
            transition: 'opacity 0.1s ease-out, transform 0.1s ease-out',
          }}
        />
      ))}
    </>
  );
}