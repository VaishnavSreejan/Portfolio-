import React from 'react';
import { Users, Award, Calendar, CheckCircle2, Bookmark, Building, Sparkles, ExternalLink, Linkedin, Compass } from 'lucide-react';
import { memberships } from '../data/memberships';

export const Memberships = () => {
  return (
    <section id="memberships" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Community &amp; Affiliations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Professional Memberships &amp; <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">Activities</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            Active involvement in engineering bodies, design leadership clubs, and innovation programs.
          </p>
        </div>

        {/* Organizations Stack */}
        <div className="max-w-4xl mx-auto space-y-8">
          {memberships.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-slate-700/80 transition-all duration-300"
            >
              {/* Outer decorative gradient highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Left Column: Organization Emblem & Identity */}
                <div className="md:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80">
                  {/* Membership Image / Crest */}
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-1 shadow-lg shadow-blue-500/25 mb-4 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full bg-[#0A0E1A] rounded-[14px] flex flex-col items-center justify-center p-2 text-center">
                      <span className="font-extrabold font-display text-base sm:text-lg tracking-wider text-white">
                        {item.shortName}
                      </span>
                      <span className="text-[9px] font-mono text-blue-400 uppercase mt-0.5">
                        {item.id === 'iste-membership' ? 'India' : 'Design Club'}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-base font-bold font-display text-white mb-1">
                    {item.shortName}
                  </h4>
                  <span className="text-xs font-mono text-slate-400 mb-3">
                    {item.category}
                  </span>

                  <div className="flex flex-col items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {item.statusBadge}
                    </span>

                    {item.linkedInUrl && (
                      <a
                        href={item.linkedInUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-blue-400 transition-colors mt-1"
                      >
                        <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                        <span>View Organization</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Position, Duration, Description & Key Involvements */}
                <div className="md:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                    <div>
                      <span className="text-xs font-mono text-blue-400 block mb-0.5">Role / Position:</span>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                        {item.position}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-slate-400 block mb-0.5">Organization &amp; Chapter:</span>
                    <p className="text-sm font-medium text-slate-200">
                      {item.organization}
                    </p>
                    {item.institution && (
                      <p className="text-xs text-indigo-400 font-mono mt-0.5">
                        {item.institution}
                      </p>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 font-light">
                    "{item.description}"
                  </p>

                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Key Involvements &amp; Contributions:
                    </span>
                    {item.keyInvolvements.map((inv, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{inv}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
