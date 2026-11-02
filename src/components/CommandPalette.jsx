import React, { useState, useEffect } from 'react';
import { 
  Search, X, FileText, ArrowRight, Code2, FolderGit2, Briefcase, 
  Award, Mail, Github, Linkedin, ExternalLink, Terminal, Sparkles, Users 
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { projects } from '../data/projects';
import { skillCategories } from '../data/skills';
import { certifications } from '../data/certifications';
import { memberships } from '../data/memberships';

export const CommandPalette = ({ isOpen, onClose, onOpenResume }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        onClose(prev => !prev);
      }
      if (e.key === 'Escape') {
        onClose(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  if (!isOpen) return null;

  // Flattened items for command palette
  const allItems = [
    // Quick Actions
    {
      category: 'Quick Actions',
      id: 'action-resume',
      title: 'Download / View Resume',
      subtitle: 'Print or export Vaishnav Sreejan Resume',
      icon: <FileText className="w-4 h-4 text-blue-400" />,
      action: () => { onClose(false); onOpenResume(); }
    },
    {
      category: 'Quick Actions',
      id: 'action-contact',
      title: 'Contact Vaishnav Sreejan',
      subtitle: personalInfo.contact.email,
      icon: <Mail className="w-4 h-4 text-violet-400" />,
      action: () => { onClose(false); window.location.href = '#contact'; }
    },
    {
      category: 'Quick Actions',
      id: 'action-github',
      title: 'Open GitHub Profile',
      subtitle: 'github.com/VaishnavSreejan',
      icon: <Github className="w-4 h-4 text-slate-300" />,
      action: () => { window.open(personalInfo.contact.github, '_blank'); }
    },
    {
      category: 'Quick Actions',
      id: 'action-linkedin',
      title: 'Open LinkedIn Profile',
      subtitle: 'linkedin.com/in/vaishnav-sreejan-63ab8332a',
      icon: <Linkedin className="w-4 h-4 text-blue-400" />,
      action: () => { window.open(personalInfo.contact.linkedin, '_blank'); }
    },

    // Navigation sections
    {
      category: 'Navigation',
      id: 'nav-about',
      title: 'About Me & Education',
      subtitle: 'St. Thomas College of Engineering & Technology',
      icon: <Sparkles className="w-4 h-4 text-indigo-400" />,
      action: () => { onClose(false); window.location.href = '#about'; }
    },
    {
      category: 'Navigation',
      id: 'nav-skills',
      title: 'Skills & Technical Stack',
      subtitle: 'Python, SQL, PySpark, FastAPI, PostgreSQL',
      icon: <Code2 className="w-4 h-4 text-emerald-400" />,
      action: () => { onClose(false); window.location.href = '#skills'; }
    },
    {
      category: 'Navigation',
      id: 'nav-experience',
      title: 'Experience & Internships',
      subtitle: 'Dinesh IT Systems & Neovent Innovations',
      icon: <Briefcase className="w-4 h-4 text-cyan-400" />,
      action: () => { onClose(false); window.location.href = '#experience'; }
    },
    {
      category: 'Navigation',
      id: 'nav-certs',
      title: 'Certifications Gallery',
      subtitle: 'YIP 9.0, IBM, DASHNOVA, CodeAlpha & Internship Credentials',
      icon: <Award className="w-4 h-4 text-amber-400" />,
      action: () => { onClose(false); window.location.href = '#certifications'; }
    },
    {
      category: 'Navigation',
      id: 'nav-memberships',
      title: 'Professional Memberships & Activities',
      subtitle: 'ISTE & VBLAZE STM Design Club',
      icon: <Users className="w-4 h-4 text-blue-400" />,
      action: () => { onClose(false); window.location.href = '#memberships'; }
    },

    // Projects
    ...projects.map((p) => ({
      category: 'Projects',
      id: `proj-${p.id}`,
      title: p.title,
      subtitle: `${p.category} • ${p.association}`,
      icon: <FolderGit2 className="w-4 h-4 text-blue-400" />,
      action: () => { onClose(false); window.location.href = '#projects'; }
    })),

    // Certifications
    ...certifications.map((c) => ({
      category: 'Certifications',
      id: `cert-${c.id}`,
      title: c.title,
      subtitle: `Issuer: ${c.issuer}`,
      icon: <Award className="w-4 h-4 text-teal-400" />,
      action: () => { onClose(false); window.location.href = '#certifications'; }
    })),

    // Memberships
    ...memberships.map((m) => ({
      category: 'Memberships',
      id: `mem-${m.id}`,
      title: m.organization,
      subtitle: `${m.position} • ${m.category}`,
      icon: <Users className="w-4 h-4 text-indigo-400" />,
      action: () => { onClose(false); window.location.href = '#memberships'; }
    }))
  ];

  const filteredItems = query.trim() === ''
    ? allItems
    : allItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-28 px-3 sm:px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-[#090D18] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/60">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search YIP 9.0, VBLAZE, SQL Migrator, skills..."
            className="w-full bg-transparent border-none text-white placeholder-slate-500 focus:outline-none text-base sm:text-sm font-sans"
          />
          <div className="flex items-center gap-1.5 shrink-0 ml-2">
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] font-mono text-slate-400">
              ESC
            </kbd>
            <button
              onClick={() => onClose(false)}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-10 text-center text-xs text-slate-500 font-mono">
              No matching commands or entries found.
            </div>
          ) : (
            filteredItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={item.action}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-colors ${
                  selectedIndex === idx
                    ? 'bg-blue-600/20 text-white border border-blue-500/30'
                    : 'text-slate-300 hover:bg-slate-800/60 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold truncate">{item.title}</div>
                    <div className="text-[11px] text-slate-400 truncate font-light">{item.subtitle}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 ml-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-500 border border-slate-800">
                    {item.category}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigate with mouse or keyboard</span>
          <span>Pro tip: Press <kbd className="px-1 py-0.5 rounded bg-slate-800 text-blue-400">Ctrl+K</kbd> anywhere</span>
        </div>
      </div>
    </div>
  );
};
