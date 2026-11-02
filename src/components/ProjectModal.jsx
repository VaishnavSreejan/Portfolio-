import React, { useEffect } from 'react';
import { X, CheckCircle2, Layers, Cpu, Database, ExternalLink, Github, Building2, Sparkles } from 'lucide-react';
import { SqlMigratorIllustration, KinoIllustration, RipesIllustration } from './ProjectIllustrations';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#080C16] border border-slate-700/80 rounded-2xl shadow-2xl p-5 sm:p-8 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700 shadow-md z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header section */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/30">
              {project.category}
            </span>
            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-indigo-400" />
              {project.association}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm font-mono text-slate-400 mt-1">
            {project.associationType} &bull; {project.status}
          </p>
        </div>

        {/* Technical Illustration */}
        <div className="mb-6">
          {project.id === 'sql-migrator' && <SqlMigratorIllustration />}
          {project.id === 'kino-movie-system' && <KinoIllustration />}
          {project.id === 'pipeline-hazards-ripes' && <RipesIllustration />}
        </div>

        {/* Overview */}
        <div className="mb-6">
          <h3 className="text-base font-bold font-display text-white mb-2 flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-400" /> System Architecture &amp; Context
          </h3>
          <p className="text-sm leading-relaxed text-slate-300 bg-slate-900/60 p-4 rounded-xl border border-slate-800 font-light">
            {project.description}
          </p>
        </div>

        {/* Architecture / Execution Highlights */}
        {project.architectureHighlights && (
          <div className="mb-6">
            <h3 className="text-base font-bold font-display text-white mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-400" /> Engineering Architecture &amp; Workflow
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.architectureHighlights.map((arch, idx) => (
                <div key={idx} className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-3.5">
                  <div className="text-xs font-mono font-semibold text-blue-400 mb-1">{arch.step}</div>
                  <div className="text-xs text-slate-300 leading-normal font-light">{arch.detail}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Concepts (for Ripes project) */}
        {project.keyConcepts && (
          <div className="mb-6">
            <h3 className="text-base font-bold font-display text-white mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" /> Core Architectural Concepts Studied
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.keyConcepts.map((concept, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60 text-xs text-slate-300 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>{concept}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features */}
        <div className="mb-6">
          <h3 className="text-base font-bold font-display text-white mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Key Features &amp; Capabilities
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-light">
                <CheckCircle2 className="w-4 h-4 text-emerald-400/80 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-800/80 text-blue-300 border border-slate-700/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <div className="text-xs text-slate-500 font-mono">
            {project.repoUrl ? "Public repository available" : "Enterprise / Academic codebase"}
          </div>
          <div className="flex items-center gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium border border-slate-700 transition-colors font-mono"
              >
                <Github className="w-4 h-4" /> View Repository
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors font-mono"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium border border-slate-700 transition-colors font-mono"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
