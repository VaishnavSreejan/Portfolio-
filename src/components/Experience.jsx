import React from 'react';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { experiences } from '../data/experience';

export const Experience = ({ onSelectCertificate }) => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Industry Exposure</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Work Experience &amp; <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">Internships</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            Hands-on technical engineering experience acquired through production software teams and intensive data science training.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line with subtle glow */}
          <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/80 via-indigo-500/50 to-violet-500/20 shadow-[0_0_8px_rgba(59,130,246,0.5)] hidden sm:block" />
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/80 via-indigo-500/50 to-transparent sm:hidden" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className="relative flex flex-col sm:flex-row items-start group"
                >
                  {/* Timeline node icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0B0F19] border-2 border-blue-500 flex items-center justify-center z-20 shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:border-blue-400 transition-all duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
                  </div>

                  {/* Left Column (Desktop) */}
                  <div className={`sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:pr-12 sm:text-right' : 'sm:order-2 sm:pl-12'}`}>
                    <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-all duration-300 text-left shadow-xl">
                      
                      {/* Meta badges */}
                      <div className={`flex flex-wrap items-center gap-2 mb-3 ${isEven ? 'sm:justify-start' : 'justify-start'}`}>
                        <span className="text-xs font-mono px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30">
                          {exp.type}
                        </span>
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                          {exp.duration}
                        </span>
                      </div>

                      {/* Position & Organization */}
                      <h3 className="text-xl font-bold font-display text-white tracking-tight">
                        {exp.role}
                      </h3>
                      
                      <div className="flex items-center gap-2 mt-1 mb-3 text-sm text-indigo-300 font-medium">
                        <Building2 className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span>{exp.organization}</span>
                        <span className="text-slate-500">&bull;</span>
                        <span className="text-slate-400 text-xs flex items-center gap-1 font-mono">
                          <MapPin className="w-3 h-3" /> {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80 font-light">
                        "{exp.description}"
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 mb-4">
                        {exp.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-light">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Key Skills Badges */}
                      <div className="pt-3 border-t border-slate-800/80">
                        <div className="text-[10px] font-mono uppercase text-slate-400 mb-2">Key Skills:</div>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Certificate linkage button */}
                      {exp.certificateAvailable && (
                        <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                          <span className="text-[11px] text-slate-400 font-mono">Completion Certificate Available</span>
                          <a
                            href="#certifications"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <Award className="w-3.5 h-3.5" />
                            <span>View Certificate</span>
                          </a>
                        </div>
                      )}

                    </div>
                  </div>

                  {/* Empty right/left column on desktop for zigzag timeline */}
                  <div className={`hidden sm:block sm:w-1/2 ${isEven ? 'sm:order-2 sm:pl-12' : 'sm:pr-12'}`} />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
