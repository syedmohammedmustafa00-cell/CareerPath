import React, { useState } from 'react';
import type { CareerItem } from '../types';
import { CareerMetaphor3D } from './3d/CareerMetaphor3D';
import { HolographicTimeline3D } from './3d/HolographicTimeline3D';
import { 
  X, 
  Bookmark, 
  BookmarkCheck, 
  Sparkles, 
  Compass, 
  Layers, 
  FolderGit2, 
  Building2, 
  Briefcase, 
  GraduationCap, 
  Cpu, 
  HelpCircle, 
  TrendingUp, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';

interface CareerDetailModalProps {
  career: CareerItem;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onClose: () => void;
}

export const CareerDetailModal: React.FC<CareerDetailModalProps> = ({
  career,
  isSaved,
  onToggleSave,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'future' | 'pathway' | 'projects'>('overview');
  const [activeTimelineStage, setActiveTimelineStage] = useState(0);
  const [selectedPathwayOption, setSelectedPathwayOption] = useState<number>(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-gray-950/85 backdrop-blur-2xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl my-auto rounded-3xl glass-panel-glow border border-cyan-500/40 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Action Bar */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-gray-950/60 backdrop-blur-xl sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border"
              style={{
                backgroundColor: `${career.accentColor}20`,
                color: career.accentColor,
                borderColor: `${career.accentColor}50`
              }}
            >
              {career.category}
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-gray-400">
              Demand Index: <span className="text-white font-bold">{career.demandIndex}/100</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(career.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                isSaved
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                  : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
              }`}
            >
              {isSaved ? <BookmarkCheck className="w-4 h-4 text-cyan-400" /> : <Bookmark className="w-4 h-4" />}
              <span>{isSaved ? 'Saved to Journey' : 'Save Career'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 cursor-pointer"
              aria-label="Close Career Profile"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-8 flex-1 scrollbar-none">
          {/* Header & 3D Interactive Career Metaphor */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>{career.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight mb-3">
                {career.title}
              </h2>
              <p className="text-sm sm:text-base text-cyan-100/90 leading-relaxed font-light mb-4">
                {career.tagline}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] font-mono text-gray-400 uppercase">Growth Outlook</div>
                  <div className="text-sm font-bold text-emerald-400 mt-0.5">{career.growthOutlook}</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] font-mono text-gray-400 uppercase">Starting Compensation</div>
                  <div className="text-xs sm:text-sm font-bold text-gray-200 mt-0.5 font-mono">{career.avgStartingSalary}</div>
                </div>
              </div>
            </div>

            {/* 3D Visualization */}
            <div className="lg:col-span-5">
              <CareerMetaphor3D
                metaphorType={career.metaphorType}
                color={career.accentColor}
                secondaryColor={career.secondaryColor}
              />
            </div>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="flex items-center gap-2 border-b border-white/10 pb-3 overflow-x-auto">
            {[
              { id: 'overview', label: '1. What & Where', icon: Compass },
              { id: 'future', label: '2. Where Is It Going? (Future)', icon: Sparkles },
              { id: 'pathway', label: '3. Education Roadmap', icon: Layers },
              { id: 'projects', label: '4. Hands-on Projects', icon: FolderGit2 }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/50 text-cyan-300 font-bold'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: OVERVIEW (What they do, where they work, problems solved, role levels) */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in fade-in duration-150">
              {/* What is this career? */}
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10">
                <h3 className="text-lg font-bold text-white font-['Outfit'] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-cyan-400" />
                  <span>What Is This Career Actually About?</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                  {career.longDesc}
                </p>
              </div>

              {/* Grid: What They Do & Problems Solved */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* What they do day-to-day */}
                <div className="p-6 rounded-3xl glass-panel border border-white/10">
                  <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-cyan-300 mb-4 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    <span>What Do They Actually Do?</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {career.whatTheyDo.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Problems Solved */}
                <div className="p-6 rounded-3xl glass-panel border border-white/10">
                  <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-purple-300 mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span>Real-World Problems They Solve</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {career.problemsSolved.map((prob, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-2" />
                        <span>{prob}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Where They Work & Industries Hiring */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    <span>Work Environments & Example Employers</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {career.whereTheyWork.map((loc, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-xl text-xs bg-white/5 border border-white/10 text-gray-200"
                      >
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-purple-400" />
                    <span>Industries Actively Hiring</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {career.industriesHiring.map((ind, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-xl text-xs bg-purple-950/40 border border-purple-500/20 text-purple-200"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hierarchy of Roles (Entry -> Senior -> Executive) */}
              <div className="p-6 rounded-3xl glass-panel border border-white/10">
                <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-cyan-300 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span>Career Ladder & Typical Roles</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {career.typicalRoles.map((role, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-black/40 border border-white/5">
                      <div className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">
                        {role.level}
                      </div>
                      <div className="text-sm font-bold text-white mt-1">
                        {role.title}
                      </div>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                        {role.exp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Technologies */}
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Core Technologies & Tool Stack</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {career.technologiesUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-xl text-xs font-mono bg-cyan-950/40 border border-cyan-500/30 text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MY CAREER FUTURE (Holographic Road, Evolution, Source & Date Citations) */}
          {activeTab === 'future' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Nuanced Disclaimer Header */}
              <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  <span className="font-bold text-white">Non-Guaranteed Evolutionary Modeling: </span>
                  Career trends represent emerging directions and skills gaining importance based on verified industry surveys, not deterministic guarantees. Always cross-reference with your personal interest.
                </div>
              </div>

              {/* Source Verification Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2 rounded-2xl bg-white/[0.02] border border-white/5 text-xs font-mono text-gray-400">
                <div>
                  Source: <span className="text-white font-medium">{career.careerFuture.sourceInfo.sourceName}</span>
                </div>
                <div>
                  Publication: <span className="text-cyan-300">{career.careerFuture.sourceInfo.publication}</span> ({career.careerFuture.sourceInfo.publishDate})
                </div>
                <div className="text-emerald-400">
                  Verified: {career.careerFuture.sourceInfo.verifiedDate}
                </div>
              </div>

              {/* 3D Holographic Road Timeline */}
              <HolographicTimeline3D
                timeline={career.careerFuture.timeline}
                activeStageIndex={activeTimelineStage}
                onSelectStage={setActiveTimelineStage}
              />

              {/* Career Today vs Evolution Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-3xl glass-panel border border-white/10">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 mb-2">
                    Career Today
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {career.careerFuture.careerToday}
                  </p>
                </div>

                <div className="p-6 rounded-3xl glass-panel border border-purple-500/30 bg-purple-950/20">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 mb-2">
                    Career Evolution
                  </h4>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {career.careerFuture.careerEvolution}
                  </p>
                </div>
              </div>

              {/* Emerging Areas & Future Learning */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-3">
                    Emerging Areas to Explore
                  </h4>
                  <ul className="space-y-2">
                    {career.careerFuture.emergingAreas.map((area, i) => (
                      <li key={i} className="text-xs sm:text-sm text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3">
                    What Students Can Start Learning Now
                  </h4>
                  <ul className="space-y-2">
                    {career.careerFuture.futureLearning.map((item, i) => (
                      <li key={i} className="text-xs sm:text-sm text-gray-300 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: EDUCATION PATHWAYS (Multi-Branch: Degree, Diploma, Skill, Cert) */}
          {activeTab === 'pathway' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-gray-300">
                <span className="font-bold text-white">Multiple Viable Routes: </span>
                There is no single mandatory path into {career.title}. Review traditional degree routes, polytechnic diplomas, and skill-based portfolios below.
              </div>

              {/* Pathway Stages */}
              <div className="space-y-6">
                {career.educationPathways.map((stage, idx) => (
                  <div key={stage.id} className="p-6 rounded-3xl glass-panel border border-white/10 relative">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <h4 className="text-lg font-bold text-white font-['Outfit']">
                          {stage.stageName}
                        </h4>
                      </div>
                      <span className="text-xs font-mono text-gray-400 bg-black/40 px-3 py-1 rounded-full border border-white/5">
                        Duration: {stage.duration}
                      </span>
                    </div>

                    <p className="text-xs text-cyan-200/80 font-mono mb-4">
                      {stage.subTitle}
                    </p>

                    <div className="p-4 rounded-2xl bg-black/30 border border-white/5 mb-4">
                      <div className="text-[11px] font-mono text-gray-400 uppercase mb-1">Why This Stage Matters</div>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {stage.whyItMatters}
                      </p>
                    </div>

                    {/* What to learn checklist */}
                    <div className="mb-4">
                      <div className="text-xs font-mono text-cyan-300 font-semibold uppercase mb-2">Core Learning Goals:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {stage.whatToLearn.map((item, i) => (
                          <div key={i} className="text-xs text-gray-300 flex items-start gap-2 bg-white/[0.02] p-2 rounded-xl">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Multi-Track Options (Degree, Diploma, Skill, Cert) */}
                    <div>
                      <div className="text-xs font-mono text-purple-300 font-semibold uppercase mb-2">Available Pathway Options:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {stage.options.map((opt, i) => (
                          <div key={i} className="p-3.5 rounded-2xl bg-purple-950/20 border border-purple-500/20">
                            <span className="text-[10px] font-mono uppercase font-bold text-purple-300 px-2 py-0.5 rounded bg-purple-500/20 border border-purple-500/30">
                              {opt.pathType}
                            </span>
                            <div className="text-xs font-bold text-white mt-1.5">{opt.title}</div>
                            <div className="text-[11px] text-gray-400 mt-1">
                              Duration: <span className="text-gray-300">{opt.duration}</span>
                            </div>
                            <div className="text-[11px] text-gray-400 mt-0.5">
                              Exemplary Institutions: <span className="text-cyan-300">{opt.institutesOrCertifiers.join(', ')}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: HANDS-ON PROJECTS (Beginner, Intermediate, Advanced) */}
          {activeTab === 'projects' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-gray-300">
                <span className="font-bold text-white">Tangible Proof-of-Work: </span>
                Building real projects separates serious students from passive readers. Start with a beginner project before college, progressing to an advanced build.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {career.projects.map((proj) => {
                  const badgeColor = 
                    proj.difficulty === 'Beginner' ? 'text-emerald-300 bg-emerald-950/40 border-emerald-500/30' :
                    proj.difficulty === 'Intermediate' ? 'text-cyan-300 bg-cyan-950/40 border-cyan-500/30' :
                    'text-purple-300 bg-purple-950/40 border-purple-500/30';

                  return (
                    <div key={proj.id} className="glass-panel p-6 rounded-3xl border border-white/10 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-full border ${badgeColor}`}>
                            {proj.difficulty}
                          </span>
                          <span className="text-[11px] font-mono text-gray-400">
                            {proj.estimatedHours}
                          </span>
                        </div>

                        <h4 className="text-base font-bold text-white font-['Outfit'] mb-2">
                          {proj.title}
                        </h4>
                        <p className="text-xs text-gray-300 leading-relaxed mb-4">
                          {proj.description}
                        </p>

                        <div className="p-3 rounded-2xl bg-black/40 border border-white/5 mb-4">
                          <div className="text-[10px] font-mono text-gray-400 uppercase mb-1">Final Deliverable</div>
                          <div className="text-xs text-gray-200 leading-relaxed">{proj.deliverable}</div>
                        </div>

                        <div className="mb-4">
                          <div className="text-[10px] font-mono text-cyan-300 uppercase mb-1.5 font-semibold">Guided Steps:</div>
                          <ol className="space-y-1.5">
                            {proj.steps.map((st, i) => (
                              <li key={i} className="text-[11px] text-gray-400 flex items-start gap-1.5">
                                <span className="font-mono text-cyan-400 font-bold shrink-0">{i + 1}.</span>
                                <span>{st}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                        {proj.toolsUsed.map((tool) => (
                          <span key={tool} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
