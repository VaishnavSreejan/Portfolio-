import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030611]/85 backdrop-blur-xl border-t border-slate-800/80 pt-14 pb-8 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-gradient-to-r from-blue-600/15 via-indigo-600/15 to-violet-600/15 blur-2xl pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60 text-center md:text-left">
          
          {/* Identity */}
          <div className="space-y-1">
            <h3 className="text-xl font-bold font-display tracking-tight text-white">
              VAISHNAV SREEJAN
            </h3>
            <p className="text-xs font-mono text-slate-400">
              Aspiring Software Engineer | Data Science Student
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6 text-sm font-medium">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="font-mono text-xs">GitHub</span>
            </a>

            <span className="text-slate-700">|</span>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span className="font-mono text-xs">LinkedIn</span>
            </a>

            <span className="text-slate-700">|</span>

            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="flex items-center gap-1.5 text-slate-400 hover:text-violet-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="font-mono text-xs">Email</span>
            </a>
          </div>

          {/* Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors shadow-sm"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p className="font-mono">
            Designed and Developed by Vaishnav Sreejan
          </p>
          <p>
            &copy; {new Date().getFullYear()} Vaishnav Sreejan. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
