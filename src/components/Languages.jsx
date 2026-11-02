import React from 'react';
import { Languages as LanguagesIcon, Globe, Check, MessageSquare } from 'lucide-react';
import { languages } from '../data/languages';

export const Languages = () => {
  return (
    <section id="languages" className="py-24 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <LanguagesIcon className="w-3.5 h-3.5" />
            <span>Communication &amp; Linguistics</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Language <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">Proficiency</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            Linguistic capabilities for professional collaboration, technical documentation, and multicultural team communication.
          </p>
        </div>

        {/* 3 Language Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {languages.map((item) => (
            <div
              key={item.language}
              className="glass-card glass-card-hover rounded-2xl p-5 sm:p-7 border border-slate-800 flex flex-col justify-between relative group shadow-xl"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-blue-400 shadow-sm">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${item.levelClass}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Language Name */}
                <h3 className="text-xl font-bold font-display text-white mb-1 group-hover:text-blue-300 transition-colors">
                  {item.language}
                </h3>

                {/* Proficiency Rating Statement */}
                <div className="text-xs font-mono text-indigo-400 mb-3">
                  {item.proficiency}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {item.summary}
                </p>
              </div>

              {/* Bottom verify indicator */}
              <div className="pt-4 mt-5 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <Check className="w-3.5 h-3.5 text-blue-400" />
                <span>Verified Working Capability</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
