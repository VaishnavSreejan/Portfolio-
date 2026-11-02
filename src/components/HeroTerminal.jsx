import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Play, RefreshCw } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const HeroTerminal = () => {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Vaishnav Sreejan Developer Shell v2.4 (x86_64)' },
    { type: 'output', text: 'Type "help" or click one of the quick commands below.' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isRunningEtl, setIsRunningEtl] = useState(false);
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: 'command', text: cmd }];

    if (cleanCmd === 'clear') {
      setHistory([]);
      return;
    }

    if (cleanCmd === 'help') {
      newHistory.push({
        type: 'output',
        text: 'Available commands:\n  whoami      - Developer profile & academic background\n  skills      - Technical capabilities & stack\n  projects    - View 3 featured software projects\n  run etl     - Simulate SQL Migrator pipeline execution\n  contact     - View direct email & social links\n  clear       - Clear terminal window'
      });
    } else if (cleanCmd === 'whoami') {
      newHistory.push({
        type: 'output',
        text: `Name:        ${personalInfo.name}\nRole:        ${personalInfo.title}\nCollege:     ${personalInfo.education.institution}\nDegree:      ${personalInfo.education.degree}\nStatus:      ${personalInfo.education.status}`
      });
    } else if (cleanCmd === 'skills') {
      newHistory.push({
        type: 'output',
        text: 'Languages:   Python, SQL, HTML, CSS, JavaScript\nBackend:     Flask, FastAPI, REST APIs, SQLAlchemy, JWT\nBig Data:    Apache PySpark, Apache HBase\nDatabases:   PostgreSQL, MySQL, SQLite\nAnalytics:   Pandas, NumPy, Scikit-learn, Power BI'
      });
    } else if (cleanCmd === 'projects') {
      newHistory.push({
        type: 'output',
        text: '1. SQL Migrator   - Backend ETL System (MySQL -> PostgreSQL, CSV/Excel, Flask)\n2. KINO           - Big Data Movie Recommendation (PySpark, HBase, FastAPI)\n3. Pipeline Ripes - RISC-V 5-stage CPU Pipeline Hazard Analysis'
      });
    } else if (cleanCmd === 'contact') {
      newHistory.push({
        type: 'output',
        text: `Email:    ${personalInfo.contact.email}\nGitHub:   ${personalInfo.contact.github}\nLinkedIn: ${personalInfo.contact.linkedin}\nLocation: ${personalInfo.contact.location}`
      });
    } else if (cleanCmd === 'run etl') {
      setIsRunningEtl(true);
      newHistory.push({ type: 'output', text: '[INFO] Initializing SQL Migrator ETL pipeline...' });
      setHistory(newHistory);

      setTimeout(() => {
        setHistory(prev => [
          ...prev,
          { type: 'output', text: '[EXTRACT] Connecting to MySQL source database... OK (Found 12 schemas)' },
          { type: 'output', text: '[TRANSFORM] Normalizing data types & verifying relational constraints...' },
          { type: 'output', text: '[LOAD] Batch inserting records into PostgreSQL with atomic transactions...' },
          { type: 'success', text: '[SUCCESS] 100% Data migration completed. Audit report generated successfully.' }
        ]);
        setIsRunningEtl(false);
      }, 700);
      return;
    } else if (cleanCmd === '') {
      // do nothing
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not found: "${cmd}". Type "help" for a list of available commands.`
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleCommand(inputVal);
    setInputVal('');
  };

  return (
    <div className="w-full rounded-2xl bg-[#070A12] border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center space-x-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-2 text-slate-400 text-[11px] font-sans font-medium">vaishnav@terminal:~</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Interactive</span>
        </div>
      </div>

      {/* Quick Action Command Chips */}
      <div className="flex flex-wrap items-center gap-1.5 p-2 sm:p-2.5 bg-slate-950/70 border-b border-slate-800/80 text-[11px]">
        <span className="text-slate-500 text-[10px] mr-1 hidden sm:inline">Try:</span>
        {['whoami', 'skills', 'projects', 'run etl', 'clear'].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleCommand(cmd)}
            disabled={isRunningEtl}
            className="px-2.5 py-1 sm:py-0.5 rounded-md bg-slate-800 hover:bg-slate-700 hover:text-white text-slate-300 transition-colors border border-slate-700/60 active:scale-95"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Output Log Area */}
      <div className="p-3 sm:p-4 max-h-48 sm:max-h-56 min-h-[140px] sm:min-h-[160px] overflow-y-auto space-y-2 select-text">
        {history.map((item, idx) => (
          <div key={idx} className="leading-relaxed">
            {item.type === 'command' && (
              <div className="flex items-center gap-1 text-slate-300">
                <span className="text-emerald-400 font-bold">$</span>
                <span className="text-white font-semibold">{item.text}</span>
              </div>
            )}
            {item.type === 'output' && (
              <pre className="text-slate-300 whitespace-pre-wrap font-mono text-[10px] sm:text-[11px] leading-relaxed">
                {item.text}
              </pre>
            )}
            {item.type === 'success' && (
              <pre className="text-emerald-400 whitespace-pre-wrap font-mono text-[10px] sm:text-[11px] font-semibold">
                {item.text}
              </pre>
            )}
            {item.type === 'error' && (
              <pre className="text-red-400 whitespace-pre-wrap font-mono text-[10px] sm:text-[11px]">
                {item.text}
              </pre>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Input Prompt */}
      <form onSubmit={onSubmit} className="flex items-center px-3 sm:px-4 py-2 bg-slate-950 border-t border-slate-800/80">
        <span className="text-emerald-400 font-bold mr-2 text-xs">$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type command (e.g. whoami)..."
          className="flex-1 bg-transparent border-none text-white placeholder-slate-600 focus:outline-none text-base sm:text-xs font-mono"
        />
        <button
          type="submit"
          className="text-slate-500 hover:text-blue-400 p-1.5 transition-colors"
          title="Submit command"
          aria-label="Submit command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};

