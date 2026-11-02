import React, { useState } from 'react';
import { Award, Building2, CheckCircle, ExternalLink, ShieldCheck, Sparkles, Eye, Linkedin } from 'lucide-react';
import { certifications } from '../data/certifications';
import { CertificateModal } from './CertificateModal';

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials &amp; Coursework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications &amp; <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">Recognitions</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Professional certifications in Generative AI, Power BI business intelligence, data science, and engineering internship credentials.
          </p>

          <div className="mt-4 inline-flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/vaishnav-sreejan-63ab8332a/details/certifications/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-600/15 border border-blue-500/30 text-blue-400 hover:text-white hover:bg-blue-600 text-xs font-mono transition-all duration-200"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>View All Verified Credentials on LinkedIn</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        </div>

        {/* Certificate Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Subtle top edge gradient */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.badgeColor}`} />

              <div>
                {/* Plaque Header / Preview Slot */}
                <div className="w-full h-32 rounded-xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border border-slate-700/60 p-3.5 flex flex-col justify-between mb-4 relative group-hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 truncate max-w-[180px]">
                      {cert.category}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 shadow-md shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white line-clamp-1">{cert.title}</div>
                      <div className="text-[11px] text-indigo-300 flex items-center gap-1">
                        <Building2 className="w-3 h-3 shrink-0" /> <span className="truncate">{cert.issuer}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 pt-1.5 border-t border-slate-800">
                    <span>Vaishnav Sreejan</span>
                    <span className="text-blue-400">Verified</span>
                  </div>
                </div>

                {/* Title & Issuer Info */}
                <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors mb-1 line-clamp-2">
                  {cert.title}
                </h3>
                
                <div className="text-xs font-medium text-slate-400 mb-2.5">
                  Issuer: <strong className="text-slate-200">{cert.issuer}</strong>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {cert.description}
                </p>

                {/* Skills verified */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skillsCovered.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skillsCovered.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-500">
                      +{cert.skillsCovered.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <a
                  href={cert.linkedInUrl || "https://www.linkedin.com/in/vaishnav-sreejan-63ab8332a/details/certifications/"}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-blue-400 transition-colors"
                  title="View on LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 hover:text-white border border-blue-500/30 text-xs font-medium transition-all"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note on how to customize certificate scans */}
        <div className="max-w-2xl mx-auto p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center text-xs text-slate-400">
          <p>
            <span className="text-slate-300 font-medium">Have new certificates on LinkedIn? </span>
            You can effortlessly add them in <code className="text-blue-300 font-mono bg-slate-800 px-1 py-0.5 rounded">src/data/certifications.js</code> and place any downloaded images/PDFs into <code className="text-blue-300 font-mono bg-slate-800 px-1 py-0.5 rounded">public/certificates/</code>.
          </p>
        </div>

      </div>

      {/* Modal */}
      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
};
