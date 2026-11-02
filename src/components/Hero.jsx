import React from 'react';
import { 
  ArrowDown, FileText, Send, Github, Linkedin, Mail, MapPin, 
  Terminal, Code2, Sparkles, CheckCircle2, User, Cpu, Search, Database, Layers
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { HeroTerminal } from './HeroTerminal';

export const Hero = ({ onOpenResume, onOpenCommandPalette }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 sm:py-32 overflow-hidden">
      {/* Local Ambient Glow Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-violet-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-6 w-80 h-80 bg-cyan-500/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-6 w-96 h-96 bg-violet-500/15 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Architectural Technical Lines */}
      <div className="absolute top-20 left-10 text-[10px] font-mono text-slate-600 hidden xl:block select-none pointer-events-none">
        <div>SYS: ARCH_64</div>
        <div>LOC: 11.8745° N, 75.3704° E</div>
        <div>STATUS: ACTIVE_SEEKING_ROLES</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Primary CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill & Command Bar Trigger */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-mono text-slate-300 shadow-md shadow-emerald-950/40">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span className="text-emerald-300/90 font-medium">Seeking Software Engineer &amp; Data Science Roles</span>
              </div>

              <button
                onClick={onOpenCommandPalette}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-950/60 hover:bg-blue-900/60 border border-blue-500/40 text-xs font-mono text-blue-300 hover:text-white transition-all shadow-md shadow-blue-950/30 group"
                title="Open Command Palette"
              >
                <Search className="w-3 h-3 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Quick Search</span>
                <kbd className="px-1.5 py-0.2 rounded bg-slate-800/90 border border-slate-700 text-[10px] text-slate-300 ml-1">Ctrl+K</kbd>
              </button>
            </div>

            {/* Greeting & Name */}
            <div>
              <div className="inline-flex items-center gap-2 text-sm sm:text-lg font-mono text-blue-400 font-medium mb-1 tracking-wider">
                <span className="text-slate-500">//</span>
                <span>Hi, I'm</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold font-display tracking-tight text-white leading-tight">
                VAISHNAV <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(59,130,246,0.35)]">SREEJAN</span>
              </h1>
            </div>

            {/* Titles */}
            <div className="space-y-1.5">
              <h2 className="text-lg sm:text-2xl font-bold font-heading text-slate-100 tracking-tight flex items-center justify-center lg:justify-start gap-2">
                <span>{personalInfo.heroSubtitle}</span>
              </h2>
              <p className="text-xs sm:text-base font-mono text-indigo-400 font-medium flex items-center justify-center lg:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>{personalInfo.heroDegree}</span>
              </p>
            </div>

            {/* Introduction Statement */}
            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light px-2 sm:px-0">
              "{personalInfo.heroIntroduction}"
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-0.5 border border-blue-400/40"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-blue-500/40 shadow-md shadow-black/40 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-950/60 hover:bg-slate-800/80 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-700 transition-all duration-200 backdrop-blur-sm"
              >
                <Send className="w-4 h-4 text-violet-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Location Quick Info */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-sm text-slate-400 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-500">Connect:</span>
              
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span className="text-xs font-mono">GitHub</span>
              </a>

              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-blue-400 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono">LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-violet-500/40 text-slate-300 hover:text-violet-400 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4 text-violet-400" />
                <span className="text-xs font-mono">Email</span>
              </a>

              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-slate-400 ml-auto bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-800/80">
                <MapPin className="w-3.5 h-3.5 text-blue-400" /> {personalInfo.contact.location}
              </span>
            </div>
          </div>

          {/* Right Column: Profile Frame & Live Interactive Terminal */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6 relative">
            
            {/* Floating Cyber Badges (Desktop) */}
            <div className="absolute -top-6 -left-6 z-20 hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-blue-500/40 backdrop-blur-md shadow-xl shadow-blue-950/40 animate-float-slow">
              <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-400">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-bold text-white font-display">Python &amp; SQL</span>
                <span className="text-[9px] font-mono text-blue-400">Core Stack</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 z-20 hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-violet-500/40 backdrop-blur-md shadow-xl shadow-violet-950/40 animate-float-reverse">
              <div className="w-7 h-7 rounded-lg bg-violet-500/15 border border-violet-400/30 flex items-center justify-center text-violet-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-bold text-white font-display">YIP 9.0 Innovator</span>
                <span className="text-[9px] font-mono text-violet-400">K-DISC Recognised</span>
              </div>
            </div>

            {/* Profile Photo Card */}
            <div className="w-full max-w-md p-1 rounded-3xl bg-gradient-to-b from-blue-500/50 via-indigo-500/30 to-violet-500/50 shadow-2xl shadow-blue-900/30 relative">
              <div className="bg-[#0B0F19]/95 rounded-[22px] p-5 border border-slate-800/90 backdrop-blur-xl">
                
                {/* Official Profile Photo Slot */}
                <div className="relative group w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border border-slate-700/60 flex flex-col items-center justify-center overflow-hidden mb-4 shadow-inner">
                  {/* Background grid */}
                  <div className="absolute inset-0 bg-dots opacity-30" />
                  
                  <div className="relative z-10 flex flex-col items-center py-2">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-indigo-500 to-violet-500 shadow-2xl shadow-blue-500/40 overflow-hidden mb-2 relative group-hover:scale-105 transition-transform duration-300 ring-4 ring-blue-500/20">
                      <img
                        src={personalInfo.profileImage}
                        alt="Vaishnav Sreejan"
                        className="w-full h-full object-cover rounded-full bg-slate-800"
                      />
                    </div>
                    <span className="text-base font-bold font-display text-white tracking-wide">
                      VAISHNAV SREEJAN
                    </span>
                    <span className="text-xs font-mono text-blue-400 mt-0.5">
                      Aspiring Software Engineer
                    </span>
                  </div>

                  {/* Status chip */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between px-3 py-1.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-700/80 text-[11px] font-mono text-slate-300 shadow-md">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
                      <span>St. Thomas College of Engg. &amp; Tech.</span>
                    </span>
                    <span className="text-blue-400 text-[10px] font-bold">Kannur</span>
                  </div>
                </div>

                {/* Live Interactive Hero Terminal */}
                <HeroTerminal />

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
