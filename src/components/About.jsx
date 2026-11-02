import React from 'react';
import { GraduationCap, Target, Code, Database, BarChart2, BookOpen, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile &amp; Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            About <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            Background, technical focus, and aspirations as an engineering student and software developer.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal Introduction & Career Objectives */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bio Card */}
            <div className="glass-card p-5 sm:p-8 rounded-2xl relative shadow-xl overflow-hidden border border-slate-800/90 hover:border-blue-500/30 transition-colors">
              {/* Top Accent Beam */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
              
              {/* Corner Markers */}
              <span className="absolute top-3 left-3 text-[10px] font-mono text-blue-500/30 select-none">┌</span>
              <span className="absolute top-3 right-3 text-[10px] font-mono text-blue-500/30 select-none">┐</span>

              <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-slate-800">
                <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-blue-500 via-indigo-500 to-violet-500 overflow-hidden shadow-md shrink-0">
                  <img src={personalInfo.profileImage} alt={personalInfo.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-display text-white">
                    {personalInfo.name}
                  </h3>
                  <span className="text-xs font-mono text-blue-400">
                    Third-Year B.Tech CSE (Data Science)
                  </span>
                </div>
              </div>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                <p>
                  I am a third-year Computer Science and Engineering student specializing in Data Science, passionate about software development, Python programming, backend development, database management, and data analytics.
                </p>
                <p>
                  I enjoy building practical applications, exploring new technologies, and solving real-world problems through programming. Through academic projects, internships, and technical activities, I have gained experience in Python development, database migration, Big Data technologies, and data analysis.
                </p>
                <p>
                  I am continuously improving my technical skills and working towards becoming a skilled Software Engineer.
                </p>
              </div>
            </div>

            {/* Career Objectives Card */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl border-l-4 border-l-indigo-500 shadow-lg">
              <div className="flex items-center gap-2.5 mb-2">
                <Target className="w-5 h-5 text-indigo-400" />
                <h3 className="text-base font-bold font-display text-white">Career Objectives</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {personalInfo.careerObjective}
              </p>
            </div>

            {/* Dual Interests: Software Development & Data Science */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Software Dev Interests */}
              <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                    <Code className="w-4 h-4 text-blue-400" />
                  </div>
                  <h4 className="text-sm font-bold font-display text-white">Software Development</h4>
                </div>
                <ul className="space-y-2 text-xs text-slate-300 font-light">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                    <span>Backend RESTful APIs with Flask &amp; FastAPI</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                    <span>Database schema engineering &amp; ETL migrations</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                    <span>Authentication, JWT, and relational integrity</span>
                  </li>
                </ul>
              </div>

              {/* Data Science Interests */}
              <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/30 flex items-center justify-center">
                    <BarChart2 className="w-4 h-4 text-violet-400" />
                  </div>
                  <h4 className="text-sm font-bold font-display text-white">Data Science &amp; Analytics</h4>
                </div>
                <ul className="space-y-2 text-xs text-slate-300 font-light">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-violet-400 mt-0.5 shrink-0" />
                    <span>Data preprocessing, cleaning &amp; feature transformation</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-violet-400 mt-0.5 shrink-0" />
                    <span>Big Data distributed computing with Apache PySpark</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-violet-400 mt-0.5 shrink-0" />
                    <span>Power BI interactive reporting &amp; business insights</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Right Column: Education & Key Highlights */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl border-t-2 border-t-blue-500 relative overflow-hidden shadow-xl">
              <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-blue-400 mb-3">
                <GraduationCap className="w-4 h-4" />
                <span>Educational Background</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-1">
                {personalInfo.education.degree}
              </h3>
              
              <div className="text-sm font-medium text-indigo-300 mb-2">
                {personalInfo.education.institution}
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{personalInfo.education.location}</span>
              </div>

              <div className="inline-block text-xs font-mono px-3 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-4">
                Status: {personalInfo.education.status}
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-300 leading-relaxed font-light">
                <strong className="text-white block mb-1 font-semibold">Core Focus:</strong>
                Data Science methodologies, software engineering paradigms, database design, computer architecture, algorithms, and applied machine learning.
              </div>
            </div>

            {/* Quick Fact / Readiness Metrics */}
            <div className="glass-card p-6 rounded-2xl shadow-lg">
              <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-slate-400 mb-4">
                Technical Highlights
              </h4>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <span className="text-xs text-slate-300">Software Projects Built</span>
                  <span className="text-xs font-mono font-bold text-blue-400">3 Core Systems</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <span className="text-xs text-slate-300">Industry &amp; Training Internships</span>
                  <span className="text-xs font-mono font-bold text-indigo-400">2 Completed</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <span className="text-xs text-slate-300">Verified Technical Certifications</span>
                  <span className="text-xs font-mono font-bold text-violet-400">6 Credentials</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <span className="text-xs text-slate-300">Professional Memberships</span>
                  <span className="text-xs font-mono font-bold text-cyan-400">ISTE &amp; VBLAZE STM</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
