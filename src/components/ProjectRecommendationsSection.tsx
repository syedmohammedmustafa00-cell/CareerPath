import React, { useState } from 'react';
import type { CareerItem, CareerProject } from '../types';
import { FolderGit2, Sparkles, Terminal, CheckCircle2, Clock, Code, ArrowRight } from 'lucide-react';

interface ProjectRecommendationsSectionProps {
  careers: CareerItem[];
  onSelectCareer: (careerId: string) => void;
}

export const ProjectRecommendationsSection: React.FC<ProjectRecommendationsSectionProps> = ({
  careers,
  onSelectCareer
}) => {
  const [selectedCareerId, setSelectedCareerId] = useState<string>(careers[0]?.id || 'ai-engineer');
  const [activeTier, setActiveTier] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');

  const activeCareer = careers.find(c => c.id === selectedCareerId) || careers[0];

  const filteredProjects = (activeCareer?.projects || []).filter(p => {
    if (activeTier === 'All') return true;
    return p.difficulty === activeTier;
  });

  return (
    <section className="relative py-24 px-4 max-w-7xl mx-auto" id="projects-section">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Proof-Of-Work Engine</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] mb-4">
          Build Your Experience.
        </h2>
        <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
          The best resume is a public project that works. Choose your target career domain and build step-by-step tiered projects from High School beginner up to production grade.
        </p>
      </div>

      {/* Career Domain Selector Chips */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {careers.slice(0, 7).map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCareerId(c.id)}
            className={`px-4 py-2 rounded-2xl text-xs font-medium whitespace-nowrap cursor-pointer transition-all border ${
              selectedCareerId === c.id
                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border-cyan-400/50 text-cyan-300 font-bold shadow-lg shadow-cyan-500/20'
                : 'glass-panel border-white/5 text-gray-400 hover:text-white'
            }`}
          >
            {c.title.split('&')[0].trim()}
          </button>
        ))}
      </div>

      {/* Tier Filter Pills (Beginner, Intermediate, Advanced) */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((tier) => (
          <button
            key={tier}
            onClick={() => setActiveTier(tier)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
              activeTier === tier
                ? tier === 'Beginner'
                  ? 'bg-emerald-500 text-gray-950 font-bold shadow-md shadow-emerald-500/30'
                  : tier === 'Intermediate'
                  ? 'bg-cyan-500 text-gray-950 font-bold shadow-md shadow-cyan-500/30'
                  : tier === 'Advanced'
                  ? 'bg-purple-500 text-white font-bold shadow-md shadow-purple-500/30'
                  : 'bg-white text-gray-950 font-bold'
                : 'glass-pill text-gray-400 hover:text-white'
            }`}
          >
            {tier}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProjects.map((proj) => {
          const badgeClass =
            proj.difficulty === 'Beginner' ? 'text-emerald-300 bg-emerald-950/40 border-emerald-500/30' :
            proj.difficulty === 'Intermediate' ? 'text-cyan-300 bg-cyan-950/40 border-cyan-500/30' :
            'text-purple-300 bg-purple-950/40 border-purple-500/30';

          return (
            <div
              key={proj.id}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${badgeClass}`}>
                    {proj.difficulty}
                  </span>
                  <span className="text-[11px] font-mono text-gray-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {proj.estimatedHours}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-['Outfit'] mb-2 leading-snug">
                  {proj.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-light mb-4">
                  {proj.description}
                </p>

                {/* Tangible Deliverable Box */}
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 mb-4">
                  <div className="text-[10px] font-mono text-gray-400 uppercase mb-1">
                    Tangible Deliverable:
                  </div>
                  <div className="text-xs text-gray-200 leading-relaxed">
                    {proj.deliverable}
                  </div>
                </div>

                {/* Step-by-Step Guided Implementation */}
                <div className="mb-4">
                  <div className="text-[10px] font-mono text-cyan-300 font-bold uppercase mb-2">
                    Guided Implementation Steps:
                  </div>
                  <ol className="space-y-1.5">
                    {proj.steps.map((st, i) => (
                      <li key={i} className="text-xs text-gray-300 flex items-start gap-2 bg-white/[0.02] p-2 rounded-xl">
                        <span className="font-mono text-cyan-400 font-bold shrink-0">{i + 1}.</span>
                        <span>{st}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Tools Chips */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                {proj.toolsUsed.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
