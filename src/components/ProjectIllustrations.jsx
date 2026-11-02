import React, { useState } from 'react';
import { Database, ArrowRight, Layers, FileSpreadsheet, Film, Sparkles, Cpu, Clock, ShieldCheck, Play, Check } from 'lucide-react';

export const SqlMigratorIllustration = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      num: 1,
      title: "01. Extract",
      tech: "MySQL / CSV Ingestion",
      status: "Schema & Constraints Identified",
      sample: "SELECT * FROM source_tables WHERE tenant_id = :id"
    },
    {
      num: 2,
      title: "02. Transform",
      tech: "SQLAlchemy & Pandas Engine",
      status: "Dialect Normalization & Typing",
      sample: "DataFrame.apply(normalize_dialect_types)"
    },
    {
      num: 3,
      title: "03. Load",
      tech: "PostgreSQL Target DB",
      status: "Atomic Batch Commit & Constraints",
      sample: "session.bulk_insert_mappings(TargetModel, rows)"
    },
    {
      num: 4,
      title: "04. Audit",
      tech: "Reporting & pytest Suite",
      status: "Row-Count & Checksum Verified",
      sample: "assert migration_audit['failed_rows'] == 0"
    }
  ];

  const current = steps.find(s => s.num === activeStep) || steps[0];

  return (
    <div className="w-full bg-gradient-to-br from-[#0a1122] via-[#0d162c] to-[#141d36] rounded-2xl p-5 border border-blue-500/30 relative overflow-hidden group shadow-2xl">
      {/* Background glow effects */}
      <div className="absolute -top-12 -right-12 w-44 h-44 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      
      {/* Top Header Bar */}
      <div className="flex items-center justify-between z-10 border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          <span className="text-[11px] font-mono text-slate-300 ml-2 font-medium">sql_migrator_service.py</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-500/30">
            Interactive Pipeline
          </span>
        </div>
      </div>

      {/* Stepper Buttons (2 cols on phone, 4 on desktop) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-4 z-10 relative">
        {steps.map((s) => (
          <button
            key={s.num}
            type="button"
            onClick={() => setActiveStep(s.num)}
            className={`py-1.5 px-2 rounded-lg text-center font-mono transition-all text-[10px] ${
              activeStep === s.num
                ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/40 border border-blue-400'
                : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Pipeline Diagram */}
      <div className="grid grid-cols-7 items-center gap-1 sm:gap-1.5 my-2 z-10 relative">
        {/* Source DB */}
        <div className={`col-span-2 rounded-xl p-2 sm:p-3 text-center transition-all ${
          activeStep === 1
            ? 'bg-blue-950/80 border-2 border-blue-400 shadow-lg'
            : 'bg-slate-900/90 border border-slate-800'
        }`}>
          <Database className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-blue-400 mb-1" />
          <div className="text-[10px] sm:text-[11px] font-semibold text-white">Source SQL</div>
          <div className="text-[8px] sm:text-[9px] text-slate-400 font-mono truncate">MySQL / CSV</div>
          <div className="mt-1 text-[7px] sm:text-[8px] bg-slate-800 text-blue-300 rounded px-1 py-0.5 font-mono">
            {activeStep === 1 ? 'Extracting...' : 'Extracted'}
          </div>
        </div>

        {/* Arrow 1 */}
        <div className="col-span-1 flex flex-col items-center justify-center">
          <ArrowRight className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeStep >= 2 ? 'text-indigo-400 animate-pulse' : 'text-slate-600'}`} />
          <span className="text-[7px] sm:text-[8px] font-mono text-slate-500">Pipe</span>
        </div>

        {/* ETL Engine */}
        <div className={`col-span-1 rounded-xl p-1.5 sm:p-2.5 text-center transition-all ${
          activeStep === 2
            ? 'bg-indigo-950/80 border-2 border-indigo-400 shadow-lg'
            : 'bg-slate-900/90 border border-slate-800'
        }`}>
          <Layers className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-indigo-400 mb-1" />
          <div className="text-[9px] sm:text-[10px] font-bold text-white">ETL</div>
          <div className="text-[7px] sm:text-[8px] text-indigo-300 font-mono">Engine</div>
        </div>

        {/* Arrow 2 */}
        <div className="col-span-1 flex flex-col items-center justify-center">
          <ArrowRight className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeStep >= 3 ? 'text-emerald-400 animate-pulse' : 'text-slate-600'}`} />
          <span className="text-[7px] sm:text-[8px] font-mono text-slate-500">Load</span>
        </div>

        {/* Target DB */}
        <div className={`col-span-2 rounded-xl p-2 sm:p-3 text-center transition-all ${
          activeStep >= 3
            ? 'bg-emerald-950/60 border-2 border-emerald-400 shadow-lg'
            : 'bg-slate-900/90 border border-slate-800'
        }`}>
          <Database className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-emerald-400 mb-1" />
          <div className="text-[10px] sm:text-[11px] font-semibold text-white">Target SQL</div>
          <div className="text-[8px] sm:text-[9px] text-slate-400 font-mono truncate">PostgreSQL</div>
          <div className="mt-1 text-[7px] sm:text-[8px] bg-emerald-950 text-emerald-300 rounded px-1 py-0.5 font-mono flex items-center justify-center gap-0.5">
            <ShieldCheck className="w-2.5 h-2.5" /> Verified
          </div>
        </div>
      </div>

      {/* Dynamic Step Code Inspector */}
      <div className="mt-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800/90 font-mono text-[11px]">
        <div className="flex items-center justify-between text-slate-400 mb-1 text-[10px]">
          <span className="text-blue-400 font-semibold">{current.tech}</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <Check className="w-3 h-3" /> {current.status}
          </span>
        </div>
        <div className="text-slate-300 truncate font-mono text-[10px] bg-slate-900/80 p-1.5 rounded border border-slate-800">
          <code>{current.sample}</code>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-3 mt-3 border-t border-slate-800/80 font-mono">
        <span className="flex items-center gap-1 text-slate-300">
          <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" /> CSV / Excel I/O
        </span>
        <span className="text-slate-400">Schema Integrity 100%</span>
        <span className="text-blue-400 font-semibold">JWT Secured</span>
      </div>
    </div>
  );
};

export const KinoIllustration = () => {
  const [selectedMood, setSelectedMood] = useState('Adventurous');

  const moodData = {
    Adventurous: {
      tagline: "Action & Sci-Fi Epics",
      recommendations: ["Interstellar (2014)", "Dune: Part Two (2024)", "Inception (2010)"],
      cluster: "PySpark Cosine Matrix: 0.94 Match"
    },
    Contemplative: {
      tagline: "Philosophical & Psychological Dramas",
      recommendations: ["Oppenheimer (2023)", "Arrival (2016)", "Blade Runner 2049 (2017)"],
      cluster: "HBase Feature Vector: High Depth"
    },
    Uplifting: {
      tagline: "Feel-Good & Inspiring Journeys",
      recommendations: ["The Secret Life of Walter Mitty", "Green Book", "Spider-Man: Across the Spider-Verse"],
      cluster: "Sentiment Hydration: 0.91 Positive"
    }
  };

  const current = moodData[selectedMood] || moodData.Adventurous;

  return (
    <div className="w-full bg-gradient-to-br from-[#120d28] via-[#141031] to-[#1c133f] rounded-2xl p-5 border border-violet-500/30 relative overflow-hidden group shadow-2xl">
      {/* Background glow effects */}
      <div className="absolute -top-12 -right-12 w-44 h-44 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Bar */}
      <div className="flex items-center justify-between z-10 border-b border-purple-950 pb-3 mb-4">
        <div className="flex items-center space-x-2">
          <Film className="w-4 h-4 text-violet-400" />
          <span className="text-[11px] font-mono text-purple-200 font-medium">KINO Distributed Recommendation Engine</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/15 text-violet-300 border border-violet-500/30">
          PySpark + HBase
        </span>
      </div>

      {/* Interactive Mood Selector */}
      <div className="mb-4">
        <div className="text-[10px] font-mono text-slate-400 mb-1.5 flex items-center justify-between">
          <span>Click a Mood Sentiment:</span>
          <span className="text-violet-400 font-medium">{current.tagline}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {Object.keys(moodData).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setSelectedMood(m)}
              className={`px-3 py-1 rounded-lg text-xs font-medium font-mono transition-all ${
                selectedMood === m
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-600/40 border border-violet-400'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              ✨ {m}
            </button>
          ))}
        </div>
      </div>

      {/* Recommended Output Carousel / List */}
      <div className="p-3.5 rounded-xl bg-slate-950/80 border border-purple-900/40 mb-3 space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono">
          <span className="text-purple-300 font-semibold">TMDb &amp; RDD Cluster Results:</span>
          <span className="text-[10px] text-emerald-400 font-mono">{current.cluster}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {current.recommendations.map((title, idx) => (
            <div key={idx} className="p-2 rounded-lg bg-slate-900/90 border border-purple-900/30 text-xs text-slate-200 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
              <span className="truncate font-sans font-medium">{title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cluster Node Specs */}
      <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-slate-400 pt-2 border-t border-purple-950">
        <div><span>Storage:</span> <strong className="text-slate-200 block">Apache HBase</strong></div>
        <div><span>Compute:</span> <strong className="text-slate-200 block">Apache PySpark</strong></div>
        <div><span>API Sync:</span> <strong className="text-emerald-400 block">&lt; 40ms FastAPI</strong></div>
      </div>
    </div>
  );
};

export const RipesIllustration = () => {
  const [cycle, setCycle] = useState(1);

  const stages = [
    { code: "IF", title: "Instruction Fetch", color: "border-blue-500/40 bg-blue-950/40 text-blue-300" },
    { code: "ID", title: "Instruction Decode", color: "border-indigo-500/40 bg-indigo-950/40 text-indigo-300" },
    { code: "EX", title: "Execute (ALU)", color: "border-amber-500/40 bg-amber-950/40 text-amber-300" },
    { code: "MEM", title: "Memory Access", color: "border-purple-500/40 bg-purple-950/40 text-purple-300" },
    { code: "WB", title: "Write Back", color: "border-emerald-500/40 bg-emerald-950/40 text-emerald-300" }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-[#090f1b] via-[#0c1426] to-[#121e33] rounded-2xl p-5 border border-slate-700/60 relative overflow-hidden group shadow-2xl">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between z-10 border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center space-x-2">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <span className="text-[11px] font-mono text-slate-200">RISC-V 5-Stage Clock Cycle Simulator</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
            Clock Cycle: 0{cycle}
          </span>
          <button
            type="button"
            onClick={() => setCycle(cycle >= 5 ? 1 : cycle + 1)}
            className="px-2 py-0.5 rounded bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-mono transition-colors"
          >
            Step Cycle &rarr;
          </button>
        </div>
      </div>

      {/* 5-stage pipeline diagram with active cycle animation */}
      <div className="grid grid-cols-5 gap-2 my-3">
        {stages.map((stage, idx) => {
          const isActive = idx + 1 === cycle;
          return (
            <div
              key={stage.code}
              className={`p-3 rounded-xl border text-center transition-all ${
                isActive
                  ? 'border-cyan-400 bg-cyan-950/60 shadow-lg shadow-cyan-500/20 scale-105'
                  : stage.color
              }`}
            >
              <div className="text-xs font-bold font-mono">{stage.code}</div>
              <div className="text-[8px] text-slate-400 truncate">{stage.title}</div>
              <div className={`mt-1 text-[8px] font-mono ${isActive ? 'text-cyan-300 font-bold' : 'text-slate-500'}`}>
                {isActive ? '● ACTIVE' : `Stage 0${idx + 1}`}
              </div>
            </div>
          );
        })}
      </div>

      {/* Hazard analysis note */}
      <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-[10px] text-slate-300 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-amber-400">
          <Clock className="w-3.5 h-3.5" />
          <span>Hazards Observed: RAW Data Dependencies &bull; Branch Penalties</span>
        </span>
        <span className="text-slate-400">Mitigation: Stalling &amp; Forwarding</span>
      </div>
    </div>
  );
};
