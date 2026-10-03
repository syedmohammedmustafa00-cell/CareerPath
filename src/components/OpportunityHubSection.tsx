import React, { useState } from 'react';
import type { OpportunityItem, EducationLevel } from '../types';
import { Award, Calendar, MapPin, ExternalLink, Sparkles, Filter, CheckCircle2, Bookmark } from 'lucide-react';

interface OpportunityHubSectionProps {
  opportunities: OpportunityItem[];
}

export const OpportunityHubSection: React.FC<OpportunityHubSectionProps> = ({ opportunities }) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedClass, setSelectedClass] = useState<EducationLevel | 'All'>('All');
  const [savedIds, setSavedIds] = useState<string[]>([]);

  const types = ['All', 'Scholarship', 'Hackathon', 'Olympiad', 'Internship', 'Competition', 'Workshop'];

  const toggleSave = (id: string) => {
    if (savedIds.includes(id)) {
      setSavedIds(savedIds.filter(s => s !== id));
    } else {
      setSavedIds([...savedIds, id]);
    }
  };

  const filteredOpps = opportunities.filter((opp) => {
    if (selectedType !== 'All' && opp.type !== selectedType) return false;
    if (selectedClass !== 'All' && !opp.eligibleClasses.includes(selectedClass) && !opp.eligibleClasses.includes('All')) return false;
    return true;
  });

  return (
    <section className="relative py-24 px-4 max-w-7xl mx-auto" id="opportunity-hub">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>Verified Student Opportunities</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] mb-4">
          Competitions, Grants & Fellowships.
        </h2>
        <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
          Unlock high-value opportunities for Class 10, 11, 12 and Undergraduate students: national government scholarships, premier hackathons, and global science olympiads.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="glass-panel p-6 rounded-3xl border border-white/10 mb-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Type pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium cursor-pointer transition-all whitespace-nowrap ${
                selectedType === t
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-md shadow-cyan-500/25'
                  : 'bg-white/5 text-gray-300 hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Education level selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-gray-400 uppercase">Eligibility:</span>
          {(['All', 'Class 10', 'Class 11', 'Class 12', 'Undergraduate'] as (EducationLevel | 'All')[]).map((cls) => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono cursor-pointer transition-all ${
                selectedClass === cls
                  ? 'bg-purple-500 text-white font-bold'
                  : 'bg-white/5 text-gray-400 hover:text-white'
              }`}
            >
              {cls}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredOpps.map((opp) => {
          const isSaved = savedIds.includes(opp.id);
          const typeBadge =
            opp.type === 'Scholarship' ? 'text-emerald-300 bg-emerald-950/40 border-emerald-500/30' :
            opp.type === 'Hackathon' ? 'text-cyan-300 bg-cyan-950/40 border-cyan-500/30' :
            opp.type === 'Olympiad' ? 'text-purple-300 bg-purple-950/40 border-purple-500/30' :
            'text-amber-300 bg-amber-950/40 border-amber-500/30';

          return (
            <div
              key={opp.id}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between shadow-xl group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${typeBadge}`}>
                      {opp.type}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">
                      {opp.organization}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleSave(opp.id)}
                    className="p-1 text-gray-400 hover:text-cyan-400 cursor-pointer"
                    title="Bookmark"
                  >
                    <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-cyan-400 text-cyan-400' : ''}`} />
                  </button>
                </div>

                <h3 className="text-xl font-bold text-white font-['Outfit'] mb-2 group-hover:text-cyan-200 transition-colors">
                  {opp.title}
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed font-light mb-4">
                  {opp.description}
                </p>

                {/* Award & Deadline Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-2xl bg-black/40 border border-white/5 mb-4">
                  <div>
                    <div className="text-[10px] font-mono text-gray-400 uppercase">Award / Grant</div>
                    <div className="text-xs font-bold text-emerald-400 mt-0.5 font-mono">{opp.award}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-gray-400 uppercase">Application Deadline</div>
                    <div className="text-xs font-bold text-cyan-300 mt-0.5 font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      {opp.deadline}
                    </div>
                  </div>
                </div>

                {/* Key Eligibility Requirements */}
                <div className="mb-4">
                  <div className="text-[10px] font-mono text-gray-400 uppercase mb-1.5 font-semibold">
                    Eligibility Checklist:
                  </div>
                  <ul className="space-y-1">
                    {opp.requirements.map((req, i) => (
                      <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer: Career Relevance & Apply Link */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1">
                  {opp.careerRelevance.slice(0, 2).map((rel) => (
                    <span key={rel} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400">
                      {rel}
                    </span>
                  ))}
                </div>

                <a
                  href={opp.applyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs flex items-center gap-1.5 shadow-md shadow-cyan-500/20 hover:scale-105 transition-all cursor-pointer"
                >
                  <span>Official Application</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
