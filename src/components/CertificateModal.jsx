import React, { useEffect } from 'react';
import { X, Award, CheckCircle, ExternalLink, ShieldCheck, Building2, Sparkles, Linkedin } from 'lucide-react';

export const CertificateModal = ({ certificate, onClose }) => {
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

  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#0B0F19] border border-slate-700/80 rounded-2xl shadow-2xl p-5 sm:p-8 text-slate-200"
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

        {/* Certificate Display: Scanned Image or Plaque Preview */}
        {certificate.image ? (
          <div className="relative mb-6 rounded-xl overflow-hidden border border-slate-700 shadow-xl bg-slate-900">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-auto object-contain max-h-[60vh] mx-auto"
            />
          </div>
        ) : (
          <div className="relative mb-6 p-6 sm:p-8 rounded-xl bg-gradient-to-br from-[#0e1627] via-[#0f172a] to-[#141b2f] border-2 border-slate-700/60 shadow-xl overflow-hidden">
            {/* Subtle background ornamentation */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Issuer Crest / Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg mb-4 border border-blue-400/30">
                <Award className="w-8 h-8 text-white" />
              </div>

              <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-1">
                Certificate of Completion &amp; Competency
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white max-w-lg mb-2">
                {certificate.title}
              </h3>

              <div className="flex items-center gap-2 text-slate-300 font-medium text-sm mb-4">
                <Building2 className="w-4 h-4 text-indigo-400" />
                <span>Issued by <strong className="text-white font-semibold">{certificate.issuer}</strong></span>
              </div>

              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent my-2" />

              <div className="text-xs text-slate-400 mt-2">
                Presented to <span className="text-slate-100 font-semibold">Vaishnav Sreejan</span> in recognition of successful participation and technical proficiency.
              </div>

              <div className="mt-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-[11px] font-mono text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Credential</span>
              </div>
            </div>
          </div>
        )}

        {/* Certificate Details */}
        <div className="space-y-5">
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Program Overview</h4>
            <p className="text-sm text-slate-300 bg-slate-900/50 p-4 rounded-xl border border-slate-800 leading-relaxed">
              {certificate.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Skills &amp; Competencies Validated</h4>
            <div className="flex flex-wrap gap-2">
              {certificate.skillsCovered.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Quick upload guide */}
          <div className="text-xs text-slate-400 bg-slate-900/40 p-3.5 rounded-xl border border-slate-800/80 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-300 font-medium">To display your actual certificate image or PDF:</span>
              <p className="mt-0.5 text-slate-400">
                Place your file in <code className="bg-slate-800 px-1 py-0.5 rounded text-blue-300 font-mono">public/certificates/</code> and set the <code className="bg-slate-800 px-1 py-0.5 rounded text-blue-300 font-mono">image</code> property in <code className="bg-slate-800 px-1 py-0.5 rounded text-blue-300 font-mono">src/data/certifications.js</code>.
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 mt-6 border-t border-slate-800">
          <a
            href={certificate.linkedInUrl || "https://www.linkedin.com/in/vaishnav-sreejan-63ab8332a/details/certifications/"}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600/15 hover:bg-blue-600/25 text-blue-400 hover:text-blue-300 border border-blue-500/30 text-xs font-medium transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>Verify on LinkedIn</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
