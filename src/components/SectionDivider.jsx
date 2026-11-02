import React from 'react';

export const SectionDivider = ({ label, index }) => {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-center pointer-events-none select-none z-10" aria-hidden="true">
      {/* Left Hairline Gradient */}
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-blue-500/25 to-indigo-500/30" />

      {/* Center Tech Node */}
      <div className="mx-2 sm:mx-4 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-[0_0_15px_rgba(59,130,246,0.15)] backdrop-blur-sm max-w-[85%] sm:max-w-none">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping shrink-0" />
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
        {label && (
          <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 tracking-wider sm:tracking-widest uppercase truncate">
            {index ? `[0${index}] ${label}` : label}
          </span>
        )}
      </div>

      {/* Right Hairline Gradient */}
      <div className="flex-1 h-[1px] bg-gradient-to-r from-indigo-500/30 via-blue-500/25 to-transparent" />
    </div>
  );
};

