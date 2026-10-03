import React, { useState } from 'react';
import type { SkillItem } from '../types';
import { 
  Award, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink, 
  Compass, 
  ChevronRight, 
  Code, 
  BookOpen, 
  Flame, 
  HelpCircle,
  Lightbulb,
  X
} from 'lucide-react';

interface SkillsSectionProps {
  skills: SkillItem[];
  onSelectCareer?: (careerId: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, onSelectCareer }) => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(skills[0]);
  const [filterCategory, setFilterCategory] = useState<'All' | 'Technical' | 'Analytical' | 'Soft & Leadership'>('All');
  const [filterStatus, setFilterStatus] = useState<'All' | 'Strong' | 'Developing' | 'Explore'>('All');

  const filteredSkills = skills.filter((s) => {
    if (filterCategory !== 'All' && s.category !== filterCategory) return false;
    if (filterStatus !== 'All' && s.status !== filterStatus) return false;
    return true;
  });

  return (
    <section className="relative py-24 px-4 max-w-7xl mx-auto" id="skills-ecosystem">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>Interactive 3D Skill Environment</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] mb-4">
          Build Skills That Compound.
        </h2>
        <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
          No boring bar charts. Explore skill spheres categorized as <strong className="text-emerald-400">Strong</strong>, <strong className="text-cyan-400">Developing</strong>, and <strong className="text-purple-400">Explore</strong>. Click any skill to unlock verified learning routes, practice ideas, and project blueprints.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 glass-panel p-4 rounded-3xl border border-white/10">
        {/* Status Filters */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-gray-400 uppercase tracking-wider mr-1">Status:</span>
          {(['All', 'Strong', 'Developing', 'Explore'] as const).map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium cursor-pointer transition-all ${
                filterStatus === st
                  ? st === 'Strong'
                    ? 'bg-emerald-500 text-gray-950 font-bold shadow-md shadow-emerald-500/30'
                    : st === 'Developing'
                    ? 'bg-cyan-500 text-gray-950 font-bold shadow-md shadow-cyan-500/30'
                    : st === 'Explore'
                    ? 'bg-purple-500 text-white font-bold shadow-md shadow-purple-500/30'
                    : 'bg-white text-gray-950 font-bold'
                  : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto">
          <span className="text-xs font-mono text-gray-400 uppercase tracking-wider mr-1">Type:</span>
          {(['All', 'Technical', 'Analytical', 'Soft & Leadership'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium cursor-pointer transition-all whitespace-nowrap ${
                filterCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-md shadow-cyan-500/30'
                  : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Interactive 3D Skill Spheres & Detail Drawer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Skill Spheres & Cluster Cards (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkill.id === skill.id;
            const statusColor = 
              skill.status === 'Strong' ? 'text-emerald-300 border-emerald-400/50 bg-emerald-500/10' :
              skill.status === 'Developing' ? 'text-cyan-300 border-cyan-400/50 bg-cyan-500/10' :
              'text-purple-300 border-purple-400/50 bg-purple-500/10';

            return (
              <div
                key={skill.id}
                onClick={() => setSelectedSkill(skill)}
                className={`p-5 rounded-3xl cursor-pointer transition-all duration-300 border relative group overflow-hidden ${
                  isSelected
                    ? 'glass-panel-glow border-cyan-400/70 shadow-2xl shadow-cyan-950/70 scale-[1.02] bg-cyan-950/40'
                    : 'glass-panel border-white/5 hover:border-white/20 hover:scale-[1.01]'
                }`}
              >
                {/* 3D Ring Progress Indicator */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${statusColor}`}>
                    {skill.status}
                  </span>

                  {/* Circular Holographic Ring */}
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <svg className="w-8 h-8 -rotate-90">
                      <circle
                        cx="16"
                        cy="16"
                        r="13"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="3"
                        fill="transparent"
                      />
                      <circle
                        cx="16"
                        cy="16"
                        r="13"
                        stroke={skill.status === 'Strong' ? '#10b981' : skill.status === 'Developing' ? '#38bdf8' : '#a855f7'}
                        strokeWidth="3"
                        strokeDasharray={81.6}
                        strokeDashoffset={81.6 - (81.6 * skill.proficiency) / 100}
                        strokeLinecap="round"
                        fill="transparent"
                      />
                    </svg>
                    <span className="absolute text-[9px] font-mono font-bold text-white">
                      {skill.proficiency}%
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white font-['Outfit'] group-hover:text-cyan-200 transition-colors mb-2">
                  {skill.name}
                </h3>
                <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed mb-3">
                  {skill.whyItMatters}
                </p>

                {/* Related career tags */}
                <div className="flex flex-wrap gap-1">
                  {skill.relatedCareers.slice(0, 2).map((rel) => (
                    <span key={rel} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400">
                      {rel}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Deep Dive Skill Drawer (5 cols) */}
        {selectedSkill && (
          <div className="lg:col-span-5 glass-panel-glow p-6 sm:p-8 rounded-3xl border border-cyan-400/50 shadow-2xl relative sticky top-24">
            <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/10 mb-4">
              <div>
                <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold">
                  {selectedSkill.category} Skill
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit'] mt-0.5">
                  {selectedSkill.name}
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full">
                {selectedSkill.status} • {selectedSkill.proficiency}%
              </span>
            </div>

            {/* Why It Matters */}
            <div className="mb-4 p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20">
              <div className="text-[11px] font-mono uppercase font-bold text-cyan-300 mb-1 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-cyan-400" />
                <span>Why It Matters</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light">
                {selectedSkill.whyItMatters}
              </p>
            </div>

            {/* Where It Is Used */}
            <div className="mb-4">
              <div className="text-xs font-mono uppercase text-gray-400 font-semibold mb-1">
                Where It Is Used in Industry:
              </div>
              <p className="text-xs text-gray-300 leading-relaxed bg-white/[0.02] p-3 rounded-2xl border border-white/5">
                {selectedSkill.whereItIsUsed}
              </p>
            </div>

            {/* How to Learn It */}
            <div className="mb-4">
              <div className="text-xs font-mono uppercase text-cyan-300 font-semibold mb-2">
                Recommended Learning Sequence:
              </div>
              <ul className="space-y-1.5">
                {selectedSkill.howToLearn.map((step, idx) => (
                  <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Beginner Free Resources */}
            <div className="mb-4">
              <div className="text-xs font-mono uppercase text-purple-300 font-semibold mb-2">
                Curated Free Learning Tracks:
              </div>
              <div className="space-y-2">
                {selectedSkill.beginnerResources.map((res, i) => (
                  <a
                    key={i}
                    href={res.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-2xl bg-purple-950/20 hover:bg-purple-950/40 border border-purple-500/20 flex items-center justify-between text-xs text-white transition-all group"
                  >
                    <div>
                      <div className="font-semibold text-gray-200 group-hover:text-cyan-300 transition-colors">
                        {res.title}
                      </div>
                      <div className="text-[10px] text-gray-400 font-mono mt-0.5">
                        {res.platform} • {res.isFree ? 'Free Verified' : 'Curated'}
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Practice & Project Ideas */}
            <div className="pt-3 border-t border-white/10">
              <div className="text-xs font-mono uppercase text-amber-300 font-semibold mb-2">
                Proof-of-Work Project Ideas:
              </div>
              <ul className="space-y-1.5">
                {selectedSkill.projectIdeas.map((proj, i) => (
                  <li key={i} className="text-xs text-gray-300 flex items-start gap-2 bg-amber-950/10 p-2.5 rounded-xl border border-amber-500/20">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{proj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
