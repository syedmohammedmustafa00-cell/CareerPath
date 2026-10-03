import React, { useState } from 'react';
import type { CareerTrendTimelineStage } from '../../types';
import { Calendar, CheckCircle2, Compass, Sparkles, TrendingUp } from 'lucide-react';

interface HolographicTimeline3DProps {
  timeline: CareerTrendTimelineStage[];
  activeStageIndex: number;
  onSelectStage: (index: number) => void;
}

export const HolographicTimeline3D: React.FC<HolographicTimeline3DProps> = ({
  timeline,
  activeStageIndex,
  onSelectStage
}) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="relative w-full py-8">
      {/* 3D Perspective Road Track */}
      <div className="relative perspective-1000 max-w-5xl mx-auto px-4">
        {/* Holographic Glowing Road Surface */}
        <div 
          className="relative h-28 rounded-2xl overflow-hidden border border-cyan-500/30 bg-gradient-to-b from-cyan-950/40 via-blue-950/20 to-gray-950 shadow-[0_0_50px_rgba(56,189,248,0.15)] flex items-center justify-between px-6 sm:px-12"
          style={{
            transform: 'rotateX(20deg) scale(0.98)',
            transformOrigin: 'bottom center'
          }}
        >
          {/* Animated Speed Lines / Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.06)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          
          {/* Neon Road Center Line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-cyan-500/20 via-cyan-400 to-purple-500/80 shadow-[0_0_15px_#38bdf8]" />

          {/* 4 Stage Nodes along the 3D Road */}
          {timeline.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={stage.phase}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => onSelectStage(idx)}
                className="relative z-10 cursor-pointer flex flex-col items-center group transition-all duration-300"
              >
                {/* 3D Holographic Pillar Glow */}
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(56,189,248,0.8)] scale-110 -translate-y-2'
                      : isHovered
                      ? 'bg-cyan-950/80 border border-cyan-400/60 shadow-[0_0_20px_rgba(56,189,248,0.4)] scale-105 -translate-y-1'
                      : 'bg-gray-900/80 border border-white/10'
                  }`}
                >
                  {stage.phase === 'TODAY' && <CheckCircle2 className={`w-6 h-6 ${isActive ? 'text-white' : 'text-cyan-400'}`} />}
                  {stage.phase === 'NEXT' && <TrendingUp className={`w-6 h-6 ${isActive ? 'text-white' : 'text-blue-400'}`} />}
                  {stage.phase === 'EMERGING' && <Sparkles className={`w-6 h-6 ${isActive ? 'text-white' : 'text-purple-400'}`} />}
                  {stage.phase === 'FUTURE' && <Compass className={`w-6 h-6 ${isActive ? 'text-white' : 'text-amber-400'}`} />}
                </div>

                {/* Phase Tag Pill */}
                <div className="mt-2 text-center">
                  <span
                    className={`text-xs font-mono font-bold tracking-widest px-2 py-0.5 rounded-full border transition-all ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50'
                        : 'bg-black/40 text-gray-400 border-white/5'
                    }`}
                  >
                    {stage.phase}
                  </span>
                  <div className="text-[10px] text-gray-400 font-mono mt-0.5">
                    {stage.period}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Phase Deep Dive Card */}
      {timeline[activeStageIndex] && (
        <div className="mt-8 max-w-4xl mx-auto glass-panel-glow p-6 sm:p-8 rounded-3xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
                STAGE {activeStageIndex + 1}: {timeline[activeStageIndex].phase} ({timeline[activeStageIndex].period})
              </span>
              <span className="text-xs font-mono text-purple-300 bg-purple-950/60 border border-purple-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                {timeline[activeStageIndex].certaintyLevel}
              </span>
            </div>
            <div className="text-xs text-gray-400 font-mono flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gray-500" />
              <span>Horizon: {timeline[activeStageIndex].period}</span>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            {timeline[activeStageIndex].headline}
          </h3>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
            {timeline[activeStageIndex].description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
            {/* Skills Gaining Importance */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Skills Gaining Importance
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {timeline[activeStageIndex].skillsInDemand.map(skill => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-lg bg-cyan-950/50 border border-cyan-500/20 text-cyan-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Technologies & Paradigms */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-300 mb-2 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
                Key Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {timeline[activeStageIndex].keyTechnologies.map(tech => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-lg bg-purple-950/50 border border-purple-500/20 text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
