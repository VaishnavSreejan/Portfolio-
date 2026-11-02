import React, { useState } from 'react';
import { 
  Mail, Send, Linkedin, Github, MapPin, Copy, Check, MessageSquare, 
  Sparkles, AlertCircle, Info, ExternalLink 
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' }); // idle | sending | success | fallback
  const [showConfigGuide, setShowConfigGuide] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ state: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setFormStatus({ state: 'sending', message: 'Processing your message...' });

    const formEndpoint = import.meta.env?.VITE_CONTACT_ENDPOINT;

    if (formEndpoint) {
      try {
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setFormStatus({
            state: 'success',
            message: 'Thank you! Your message has been sent successfully. I will get back to you promptly.'
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
          return;
        } else {
          throw new Error('Submission returned error');
        }
      } catch (err) {
        // Fallback gracefully
      }
    }

    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personalInfo.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    window.location.href = mailtoUrl;

    setFormStatus({
      state: 'fallback',
      message: 'Opening your default email client with your message pre-filled. If it did not open automatically, you can email me directly at vaishnavsreejan1@gmail.com!'
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-navy-950/60">
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Let's Connect and <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">Build Something Great</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            Open for software engineering opportunities, internships, data engineering collaborations, and technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Card */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-6 shadow-xl">
              <h3 className="text-lg font-bold font-display text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                Contact Information
              </h3>

              {/* Email Block */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start justify-between gap-3 group">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase">Direct Email</span>
                    <a
                      href={`mailto:${personalInfo.contact.email}`}
                      className="block text-sm font-semibold text-white hover:text-blue-400 transition-colors break-all"
                    >
                      {personalInfo.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700 shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Block */}
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 hover:bg-slate-850 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase">LinkedIn Profile</span>
                    <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                      vaishnav-sreejan-63ab8332a
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
              </a>

              {/* GitHub Block */}
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 hover:bg-slate-850 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase">GitHub Profile</span>
                    <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors font-mono text-xs">
                      VaishnavSreejan
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
              </a>

              {/* Location Block */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Location</span>
                  <div className="text-sm font-semibold text-white font-mono">
                    {personalInfo.contact.location}
                  </div>
                </div>
              </div>

            </div>

            {/* Quick config note */}
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-400 font-light">
              <button
                onClick={() => setShowConfigGuide(!showConfigGuide)}
                className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium font-sans"
              >
                <Info className="w-4 h-4" />
                <span>Email Backend Setup Information</span>
              </button>

              {showConfigGuide && (
                <div className="mt-3 space-y-2 pt-2 border-t border-slate-800 text-slate-300 font-sans text-xs">
                  <p>
                    By default, this form triggers a pre-filled client email link (<code className="text-blue-300 font-mono">mailto:</code>) so no messages are lost even without an API server.
                  </p>
                  <p>
                    To enable 1-click headless submission via Formspree or Web3Forms, create a <code className="text-blue-300 font-mono">.env</code> file with:
                  </p>
                  <pre className="p-2 rounded bg-slate-950 font-mono text-[11px] text-emerald-400">
                    VITE_CONTACT_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
                  </pre>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 font-light">
                Fill in the details below and I will respond to your inquiry as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Recruiter / Hiring Lead"
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base sm:text-sm text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base sm:text-sm text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineer Role Inquiry"
                    className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base sm:text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message, project idea, or opportunity details here..."
                    className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base sm:text-sm text-white placeholder-slate-500 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Feedback message */}
                {formStatus.message && (
                  <div
                    className={`p-3.5 rounded-xl text-xs flex items-start gap-2.5 ${
                      formStatus.state === 'success'
                        ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40'
                        : formStatus.state === 'error'
                        ? 'bg-red-950/60 text-red-300 border border-red-500/40'
                        : 'bg-blue-950/60 text-blue-300 border border-blue-500/40'
                    }`}
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{formStatus.message}</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formStatus.state === 'sending'}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 font-display"
                >
                  <Send className="w-4 h-4" />
                  <span>{formStatus.state === 'sending' ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
