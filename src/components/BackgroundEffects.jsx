import React, { useEffect, useState } from 'react';

export const BackgroundEffects = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Only track cursor on mouse/pointer devices (PCs/laptops), avoid scroll performance penalty on phones
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointerDevice(mediaQuery.matches);

    if (!mediaQuery.matches) return;

    let animationFrameId;

    const handlePointerMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setMousePos({ x, y });
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Deep Atmospheric Gradient Base */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#030611] via-[#070d1e] to-[#04060f] opacity-95" 
      />

      {/* 2. Dynamic Mouse Spotlight Glow (Active on Desktop/PC) */}
      {isPointerDevice && (
        <div
          className="absolute inset-0 transition-opacity duration-700 ease-out hidden sm:block"
          style={{
            background: `radial-gradient(850px circle at ${mousePos.x}% ${mousePos.y}%, rgba(59, 130, 246, 0.12), rgba(139, 92, 246, 0.06) 35%, transparent 70%)`,
          }}
        />
      )}

      {/* 3. Luminous Floating Aurora Nebulas - Optimized for Mobile & Desktop */}
      {/* Aurora Orb 1: Cyan & Sapphire (Top Left - Hero) */}
      <div 
        className="absolute -top-24 -left-24 sm:-top-32 sm:-left-32 w-[340px] h-[340px] sm:w-[850px] sm:h-[850px] rounded-full bg-gradient-to-tr from-cyan-600/18 via-blue-600/15 to-indigo-600/15 blur-[60px] sm:blur-[140px] animate-aurora-1"
      />

      {/* Aurora Orb 2: Violet & Electric Indigo (Top Right - About / Skills) */}
      <div 
        className="absolute top-[20%] -right-28 sm:-right-40 w-[300px] h-[300px] sm:w-[800px] sm:h-[800px] rounded-full bg-gradient-to-bl from-purple-600/16 via-violet-600/16 to-blue-600/12 blur-[65px] sm:blur-[150px] animate-aurora-2"
      />

      {/* Aurora Orb 3: Emerald & Deep Azure (Mid Center - Projects) */}
      <div 
        className="absolute top-[48%] left-1/2 -translate-x-1/2 w-[350px] h-[350px] sm:w-[900px] sm:h-[900px] rounded-full bg-gradient-to-r from-blue-700/12 via-indigo-600/14 to-violet-700/14 blur-[70px] sm:blur-[160px] animate-pulse-slow"
      />

      {/* Aurora Orb 4: Sapphire & Teal (Lower Left - Experience / Certifications) */}
      <div 
        className="absolute top-[70%] -left-28 sm:-left-48 w-[320px] h-[320px] sm:w-[800px] sm:h-[800px] rounded-full bg-gradient-to-tr from-cyan-600/14 via-blue-600/14 to-indigo-700/14 blur-[60px] sm:blur-[140px] animate-aurora-1"
      />

      {/* Aurora Orb 5: Deep Violet & Magenta (Bottom Right - Contact & Footer) */}
      <div 
        className="absolute -bottom-24 -right-24 sm:-bottom-40 sm:-right-40 w-[350px] h-[350px] sm:w-[950px] sm:h-[950px] rounded-full bg-gradient-to-tl from-indigo-700/18 via-violet-600/16 to-blue-600/12 blur-[70px] sm:blur-[150px] animate-aurora-2"
      />

      {/* 4. High-Precision Cyber Matrix Grid & Coordinates */}
      <div 
        className="absolute inset-0 opacity-[0.16] sm:opacity-[0.22]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 40%, transparent 95%)',
        }}
      />

      {/* 5. Major Coordinate Grid (Desktop & Tablet) */}
      <div 
        className="absolute inset-0 opacity-[0.14] hidden sm:block"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.5) 1.5px, transparent 0)
          `,
          backgroundSize: '192px 192px',
        }}
      />

      {/* 6. Decorative Floating Cyber Geometry & Isometric Accents */}
      {/* Top Left Isometric Cube */}
      <div className="absolute top-24 left-8 opacity-20 hidden lg:block animate-float-slow">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-blue-400">
          <polygon points="50,10 90,32 90,78 50,100 10,78 10,32" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="50" y1="10" x2="50" y2="55" strokeWidth="0.8" />
          <line x1="10" y1="32" x2="50" y2="55" strokeWidth="0.8" />
          <line x1="90" y1="32" x2="50" y2="55" strokeWidth="0.8" />
          <line x1="50" y1="55" x2="50" y2="100" strokeWidth="0.8" />
          <circle cx="50" cy="55" r="2.5" fill="currentColor" />
        </svg>
      </div>

      {/* Right Margin Constellation Nodes */}
      <div className="absolute top-1/3 right-10 opacity-25 hidden xl:block animate-float-reverse">
        <svg width="160" height="200" viewBox="0 0 160 200" fill="none" stroke="currentColor" className="text-indigo-400">
          <circle cx="40" cy="30" r="3" fill="currentColor" />
          <circle cx="120" cy="60" r="2.5" fill="currentColor" />
          <circle cx="80" cy="120" r="3.5" fill="currentColor" />
          <circle cx="140" cy="170" r="2" fill="currentColor" />
          <circle cx="20" cy="160" r="2.5" fill="currentColor" />
          <line x1="40" y1="30" x2="120" y2="60" strokeWidth="0.8" strokeDasharray="2 4" />
          <line x1="120" y1="60" x2="80" y2="120" strokeWidth="0.8" />
          <line x1="80" y1="120" x2="140" y2="170" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="80" y1="120" x2="20" y2="160" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Lower Left Geometric Matrix */}
      <div className="absolute top-2/3 left-6 opacity-20 hidden lg:block animate-float-slow">
        <svg width="140" height="140" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-violet-400">
          <circle cx="50" cy="50" r="40" strokeWidth="0.8" strokeDasharray="4 6" />
          <circle cx="50" cy="50" r="25" strokeWidth="0.8" />
          <circle cx="50" cy="50" r="10" strokeWidth="0.8" strokeDasharray="2 2" />
          <line x1="50" y1="5" x2="50" y2="95" strokeWidth="0.5" strokeOpacity="0.5" />
          <line x1="5" y1="50" x2="95" y2="50" strokeWidth="0.5" strokeOpacity="0.5" />
          <circle cx="50" cy="10" r="2" fill="currentColor" />
          <circle cx="90" cy="50" r="2" fill="currentColor" />
          <circle cx="50" cy="90" r="2" fill="currentColor" />
          <circle cx="10" cy="50" r="2" fill="currentColor" />
        </svg>
      </div>

      {/* 7. Twinkling Stardust / Particle Nodes */}
      <div className="absolute inset-0">
        {[
          { top: '12%', left: '20%', delay: '0s', size: 'w-1 h-1' },
          { top: '18%', left: '75%', delay: '1.2s', size: 'w-1.5 h-1.5' },
          { top: '35%', left: '88%', delay: '0.8s', size: 'w-1 h-1' },
          { top: '48%', left: '15%', delay: '3.1s', size: 'w-1.5 h-1.5' },
          { top: '65%', left: '82%', delay: '2.2s', size: 'w-1 h-1' },
          { top: '74%', left: '25%', delay: '0.4s', size: 'w-1.5 h-1.5' },
          { top: '91%', left: '38%', delay: '1.6s', size: 'w-1 h-1' },
        ].map((star, idx) => (
          <div
            key={idx}
            className={`absolute ${star.size} rounded-full bg-blue-300 shadow-[0_0_8px_rgba(96,165,250,0.8)] animate-pulse`}
            style={{
              top: star.top,
              left: star.left,
              animationDuration: '3.5s',
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      {/* 8. Luxury Tactile Noise / Film Grain Filter */}
      <div 
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 9. Top & Bottom Subtle Vignette Edge Shading */}
      <div className="absolute inset-x-0 top-0 h-28 sm:h-32 bg-gradient-to-b from-[#030611] via-[#030611]/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-28 sm:h-32 bg-gradient-to-t from-[#030611] via-[#030611]/50 to-transparent" />
    </div>
  );
};

