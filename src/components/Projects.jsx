import React, { useState } from 'react';
import { 
  FolderGit2, ExternalLink, Github, CheckCircle2, Building2, ArrowRight, 
  Layers, Sparkles, Terminal, Cpu, Search 
} from 'lucide-react';
import { projects } from '../data/projects';
import { SqlMigratorIllustration, KinoIllustration, RipesIllustration } from './ProjectIllustrations';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [filterTag, setFilterTag] = useState('ALL');

  const availableTags = ['ALL', 'Python', 'Flask', 'PostgreSQL', 'PySpark', 'FastAPI', 'Ripes'];

  const matchesTag = (p) => {
    if (filterTag === 'ALL') return true;
    return p.technologies.some(t => t.toLowerCase().includes(filterTag.toLowerCase()));
  };

  const primaryProjects = projects.filter((p) => p.prominence === 'primary' && matchesTag(p));
  const secondaryProjects = projects.filter((p) => p.prominence === 'secondary' && matchesTag(p));

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Systems</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Projects &amp; <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">Architectures</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            Production backend ETL pipelines, distributed Big Data engines, and low-level microprocessor pipeline investigations.
          </p>
        </div>

        {/* Tech Stack Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          <span className="text-xs font-mono text-slate-500 mr-1 hidden sm:inline">Filter by Stack:</span>
          {availableTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setFilterTag(tag)}
              className={`px-3 py-1 rounded-xl text-xs font-mono transition-all ${
                filterTag === tag
                  ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30 border border-blue-400/40'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* PRIMARY PROJECTS: SQL Migrator & KINO (High Visual Prominence) */}
        <div className="space-y-12 mb-16">
          {primaryProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 relative group overflow-hidden shadow-2xl"
            >
              {/* Glowing top accent beam */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 via-indigo-500/50 to-transparent" />

              {/* Cyber Corner Markers */}
              <span className="absolute top-3 left-3 text-[10px] font-mono text-blue-400/40 select-none">┌</span>
              <span className="absolute top-3 right-3 text-[10px] font-mono text-blue-400/40 select-none">┐</span>
              <span className="absolute bottom-3 left-3 text-[10px] font-mono text-blue-400/40 select-none">└</span>
              <span className="absolute bottom-3 right-3 text-[10px] font-mono text-blue-400/40 select-none">┘</span>

              {/* Subtle accent glow */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/10 group-hover:bg-blue-500/20 rounded-full blur-3xl transition-all duration-500 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left/Main Column: Project Details */}
                <div className="lg:col-span-7 space-y-5">
                  
                  {/* Category & Association Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/30">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{project.association}</span>
                    </span>
                  </div>

                  {/* Title & Type */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {project.type} &bull; {project.associationType}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                    "{project.summary}"
                  </p>

                  {/* Key Features highlights */}
                  <div className="pt-2">
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Key Features &amp; Capabilities
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.keyFeatures.slice(0, 6).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Badges */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-900/80 text-blue-300 border border-slate-800 group-hover:border-slate-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/30 transition-all duration-200"
                    >
                      <span>View Deep Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Repository</span>
                      </a>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                </div>

                {/* Right Column: Dedicated Interactive Technical Illustration */}
                <div className="lg:col-span-5">
                  <div className="p-1 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20">
                    {project.id === 'sql-migrator' ? (
                      <SqlMigratorIllustration />
                    ) : (
                      <KinoIllustration />
                    )}
                  </div>
                  <div className="text-center mt-2.5">
                    <span className="text-[11px] font-mono text-slate-400">
                      💡 Click stages &amp; mood buttons above to test live interactive simulator
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* SECONDARY PROJECT: Pipeline Hazards Using Ripes (Academic Architecture Focus) */}
        {secondaryProjects.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px flex-1 bg-slate-800" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Microprocessor Systems &amp; Low-Level Pipeline Study
              </span>
              <span className="h-px flex-1 bg-slate-800" />
            </div>

            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card rounded-2xl p-5 sm:p-8 border border-slate-800/80 hover:border-slate-700 transition-colors shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 text-cyan-300 border border-slate-700">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900/80 text-slate-400 border border-slate-800 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-slate-400" />
                        {project.association}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((t) => (
                        <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
                      >
                        <span>View Details &amp; Analysis</span>
                        <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <RipesIllustration />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Project Details Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
};
