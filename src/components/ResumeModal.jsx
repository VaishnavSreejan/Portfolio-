import React, { useEffect } from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, GraduationCap, Briefcase, Code, Award, Users } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { experiences } from '../data/experience';
import { projects } from '../data/projects';
import { skillCategories } from '../data/skills';
import { certifications } from '../data/certifications';
import { memberships } from '../data/memberships';

export const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#080C16] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar - Responsive for Phone & PC */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-slate-900/90 border-b border-slate-800 gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shrink-0" />
            <h3 className="text-xs sm:text-sm font-semibold text-white tracking-wide font-display truncate">
              Vaishnav Sreejan &bull; Resume
            </h3>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={handlePrint}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <a
              href="/Vaishnav_Sreejan_Resume.pdf"
              download="Vaishnav_Sreejan_Resume.pdf"
              className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-medium text-white transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700"
              aria-label="Close resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#090D16] space-y-6 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-slate-800 pb-5 flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
                VAISHNAV SREEJAN
              </h1>
              <p className="text-sm font-medium text-blue-400 mt-1">
                Aspiring Software Engineer | B.Tech CSE (Data Science) Student
              </p>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-3 text-xs text-slate-400">
                <span className="flex items-center gap-1 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" /> Kannur, Kerala, India
                </span>
                <a href={`mailto:${personalInfo.contact.email}`} className="flex items-center gap-1 hover:text-blue-400 transition-colors font-mono">
                  <Mail className="w-3.5 h-3.5 text-slate-500" /> {personalInfo.contact.email}
                </a>
                <a href={personalInfo.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-400 transition-colors font-mono">
                  <Linkedin className="w-3.5 h-3.5 text-slate-500" /> LinkedIn
                </a>
                <a href={personalInfo.contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-400 transition-colors font-mono">
                  <Github className="w-3.5 h-3.5 text-slate-500" /> GitHub
                </a>
              </div>
            </div>

            <div className="w-20 h-20 rounded-full p-0.5 bg-gradient-to-tr from-blue-500 to-indigo-500 overflow-hidden shadow-lg shrink-0 hidden sm:block">
              <img src={personalInfo.profileImage} alt={personalInfo.name} className="w-full h-full object-cover rounded-full" />
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2 flex items-center gap-1.5">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Third-year Computer Science and Engineering student specializing in Data Science with practical experience in Python development, database migrations, Big Data technologies (PySpark, HBase), and REST API design. Dedicated to building reliable backend architectures, optimizing relational workflows, and turning complex data into actionable engineering solutions.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" /> Education
            </h2>
            <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold font-display text-white">
                    {personalInfo.education.degree}
                  </h3>
                  <p className="text-xs text-slate-400">{personalInfo.education.institution}, {personalInfo.education.location}</p>
                </div>
                <span className="text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded">
                  {personalInfo.education.status}
                </span>
              </div>
            </div>
          </div>

          {/* Internships & Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" /> Internship Experience
            </h2>
            <div className="space-y-3">
              {experiences.map((exp) => (
                <div key={exp.id} className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                  <div className="flex flex-wrap justify-between items-baseline gap-1">
                    <h3 className="text-sm font-bold font-display text-white">{exp.role}</h3>
                    <span className="text-xs font-mono text-slate-400">{exp.duration}</span>
                  </div>
                  <div className="text-xs text-indigo-400 font-medium">{exp.organization} &bull; {exp.location}</div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed font-light">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {exp.skills.map((s) => (
                      <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2 flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5" /> Featured Technical Projects
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-bold font-display text-white">{proj.title}</h3>
                    <span className="text-[10px] font-mono text-slate-400">{proj.association}</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed font-light">{proj.summary}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {proj.technologies.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-900/40">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/80">
                  <span className="font-semibold text-slate-200">{cat.title}: </span>
                  <span className="text-slate-400 font-light">{cat.skills.map((s) => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Memberships */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" /> Certifications ({certifications.length})
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {certifications.map((c) => (
                  <li key={c.id} className="bg-slate-900/40 p-2 rounded border border-slate-800">
                    <div className="font-medium text-slate-200">{c.title}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{c.issuer}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" /> Professional Memberships ({memberships.length})
              </h2>
              <div className="space-y-2">
                {memberships.map((m) => (
                  <div key={m.id} className="bg-slate-900/40 p-2.5 rounded border border-slate-800 text-xs">
                    <div className="font-semibold text-white">{m.organization}</div>
                    <div className="text-blue-400 text-[11px] font-mono">{m.position} &bull; {m.duration}</div>
                    <div className="text-slate-400 text-[10px] mt-0.5 font-light">{m.category}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
