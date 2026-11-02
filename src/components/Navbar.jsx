import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Code2, ArrowUpRight, Search } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const Navbar = ({ onOpenResume, onOpenCommandPalette }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Memberships', href: '#memberships' },
    { label: 'Languages', href: '#languages' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section spy
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const secElement = document.getElementById(sections[i]);
        if (secElement) {
          const top = secElement.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030611]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-xl shadow-black/50 py-2.5'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Profile Photo & Name */}
          <a
            href="#home"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none min-w-0"
          >
            {/* User Profile Avatar */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-blue-500 via-indigo-500 to-violet-500 shadow-md shadow-blue-500/25 group-hover:shadow-blue-500/40 group-hover:scale-105 transition-all duration-300 shrink-0">
              <img
                src={personalInfo.profileImage}
                alt="Vaishnav Sreejan"
                className="w-full h-full object-cover rounded-full bg-slate-800"
              />
            </div>

            <div className="flex flex-col min-w-0">
              <span className="font-bold font-display tracking-tight text-white text-xs sm:text-base truncate group-hover:text-blue-400 transition-colors">
                VAISHNAV SREEJAN
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 tracking-wider truncate hidden xs:block">
                B.Tech CSE &bull; Data Science
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-blue-500/15 border border-blue-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Quick Search & Download Resume */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 text-xs font-mono transition-colors"
              title="Search Portfolio (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-[11px]">Search</span>
              <kbd className="px-1 py-0.2 rounded bg-slate-800 border border-slate-700 text-[9px] text-slate-400 ml-1">⌘K</kbd>
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-600/20 hover:shadow-blue-600/40 transition-all duration-200 border border-blue-400/30 font-sans"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Actions & Hamburger */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenCommandPalette}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-blue-400" />
            </button>

            <button
              onClick={onOpenResume}
              className="sm:hidden flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[11px] font-semibold bg-blue-600 text-white"
            >
              <FileText className="w-3 h-3" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer with Backdrop */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 xl:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="relative z-40 xl:hidden bg-[#030611]/95 backdrop-blur-2xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-1 transition-all shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-blue-400 bg-blue-500/10 border border-blue-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-3 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenCommandPalette();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800 hover:text-white"
              >
                <Search className="w-3.5 h-3.5 text-blue-400" />
                <span>Search Command (Ctrl+K)</span>
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
