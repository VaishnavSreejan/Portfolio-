import React, { useState } from 'react';
import { 
  Code2, Server, BarChart3, Database, Cpu, Layout, Wrench, Sparkles, Filter 
} from 'lucide-react';
import { skillCategories } from '../data/skills';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'programming': return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'backend': return <Server className="w-5 h-5 text-indigo-400" />;
      case 'data-science': return <BarChart3 className="w-5 h-5 text-violet-400" />;
      case 'database': return <Database className="w-5 h-5 text-cyan-400" />;
      case 'big-data': return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'web-dev': return <Layout className="w-5 h-5 text-amber-400" />;
      case 'dev-tools': return <Wrench className="w-5 h-5 text-slate-300" />;
      default: return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Skills &amp; <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            Carefully curated technical stack organized by functional engineering domains.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-400/40 font-bold'
                : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-400/40 font-bold'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border border-slate-800 relative group overflow-hidden"
            >
              {/* Subtle top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.accent}`} />

              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center shadow-inner">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-display text-white group-hover:text-blue-300 transition-colors">
                      {category.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {category.skills.length} competencies
                    </span>
                  </div>
                </div>

                {/* Category Brief */}
                <p className="text-xs text-slate-400 mb-5 leading-relaxed font-light">
                  {category.description}
                </p>

                {/* Skills Grid */}
                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col gap-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-200 font-sans">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                          {skill.tag}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400 leading-snug font-light">
                        {skill.note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Verified in Production / Academic</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
