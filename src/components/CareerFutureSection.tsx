import React, { useState } from 'react';
import type { CareerItem } from '../types';
import { HolographicTimeline3D } from './3d/HolographicTimeline3D';
import { Sparkles, Calendar, ExternalLink, ArrowRight, ShieldCheck, Compass, Lightbulb, BookOpen } from 'lucide-react';

interface CareerFutureSectionProps {
  careers: CareerItem[];
  selectedCareerId?: string;
  onSelectCareer: (careerId: string) => void;
}

export const CareerFutureSection: React.FC<CareerFutureSectionProps> = ({
  careers,
  selectedCareerId,
  onSelectCareer
}) => {
  const [currentCareerId, setCurrentCareerId] = useState<string>(
    selectedCareerId || careers[0]?.id || 'ai-engineer'
  );
  const [activeStage, setActiveStage] = useState(0);

  const activeCareer = careers.find(c => c.id === currentCareerId) || careers[0];

  return (
    <section className="relative py-24 px-4 max-w-7xl mx-auto" id="career-future">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>My Career Future: 2026 - 2035 Horizon</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] mb-4">
          Where Is This Career Going?
        </h2>
        <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
          Never prepare for how a career looked 10 years ago. Explore how AI, autonomous robotics, quantum computing, and planetary policy are evolving each discipline.
        </p>
      </div>

      {/* Domain Quick Switcher Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {careers.slice(0, 8).map((c) => {
          const isSelected = c.id === currentCareerId;
          return (
            <button
              key={c.id}
              onClick={() => {
                setCurrentCareerId(c.id);
                setActiveStage(0);
              }}
              className={`px-4 py-2 rounded-2xl text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                isSelected
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border-cyan-400/50 text-cyan-300 font-bold shadow-lg shadow-cyan-500/20 scale-105'
                  : 'glass-panel border-white/5 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {c.title.split('&')[0].trim()}
            </button>
          );
        })}
      </div>

      {/* Main Future Dashboard Panel */}
      {activeCareer && (
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-2xl relative">
          {/* Header Row: Career Title + Verified Source Data */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                <span>Domain Focus:</span>
                <span className="font-bold text-white uppercase">{activeCareer.category}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                {activeCareer.title}
              </h3>
            </div>

            {/* Verified Source Citation Box */}
            <div className="p-3 sm:px-4 sm:py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs font-mono">
              <div className="text-gray-400 flex items-center gap-1.5 mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Source: <strong className="text-gray-200">{activeCareer.careerFuture.sourceInfo.sourceName}</strong></span>
              </div>
              <div className="text-gray-400 flex items-center justify-between gap-4 text-[11px]">
                <span>Pub: {activeCareer.careerFuture.sourceInfo.publishDate}</span>
                <span className="text-cyan-400">Verified: {activeCareer.careerFuture.sourceInfo.verifiedDate}</span>
              </div>
            </div>
          </div>

          {/* 3D Holographic Road Component */}
          <HolographicTimeline3D
            timeline={activeCareer.careerFuture.timeline}
            activeStageIndex={activeStage}
            onSelectStage={setActiveStage}
          />

          {/* Comparative Section: Today vs Evolution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-3xl bg-black/40 border border-white/10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 mb-2 block">
                CAREER TODAY (Current Industry Baseline)
              </span>
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                {activeCareer.careerFuture.careerToday}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-950/30 to-blue-950/20 border border-purple-500/30">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 mb-2 block">
                CAREER EVOLUTION (5 - 10 Year Shift)
              </span>
              <p className="text-sm text-gray-200 leading-relaxed font-light">
                {activeCareer.careerFuture.careerEvolution}
              </p>
            </div>
          </div>

          {/* Future Skills & Learning Opportunities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Emerging Areas & Future Skills */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Emerging Areas & Skills Gaining Importance</span>
              </h4>
              <div className="space-y-2 mb-4">
                {activeCareer.careerFuture.emergingAreas.map((area, i) => (
                  <div key={i} className="text-xs sm:text-sm text-gray-300 flex items-center gap-2 bg-emerald-950/20 p-2.5 rounded-xl border border-emerald-500/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                {activeCareer.careerFuture.futureSkills.map((sk) => (
                  <span key={sk} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-gray-300">
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* Future Learning: What Students Can Start Doing Today */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  <span>Future Learning: Start In High School</span>
                </h4>
                <div className="space-y-2.5 mb-6">
                  {activeCareer.careerFuture.futureLearning.map((item, i) => (
                    <div key={i} className="text-xs sm:text-sm text-gray-200 flex items-start gap-2.5 bg-amber-950/20 p-2.5 rounded-xl border border-amber-500/20">
                      <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectCareer(activeCareer.id)}
                className="w-full py-3 rounded-2xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>View Full {activeCareer.title} Roadmap</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
