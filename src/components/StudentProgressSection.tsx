import React from 'react';
import type { StudentProfile, CareerItem } from '../types';
import { 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  BookOpen, 
  FolderGit2, 
  Award, 
  ArrowRight,
  TrendingUp,
  GraduationCap
} from 'lucide-react';

interface StudentProgressSectionProps {
  profile: StudentProfile;
  savedCareers: CareerItem[];
  completedTasksCount: number;
  totalTasksCount: number;
  onExploreCareers: () => void;
  onOpenPreparation: () => void;
}

const JOURNEY_STAGES = [
  { id: 'UNDERSTAND', label: '1. Understand', desc: 'Deconstruct daily workflows & reality', icon: Compass, color: '#38bdf8' },
  { id: 'EXPLORE', label: '2. Explore', desc: 'Survey future industry trends & roles', icon: Sparkles, color: '#818cf8' },
  { id: 'LEARN', label: '3. Learn', desc: 'Master foundational math, logic & code', icon: BookOpen, color: '#c084fc' },
  { id: 'BUILD', label: '4. Build', desc: 'Ship original proof-of-work projects', icon: FolderGit2, color: '#10b981' },
  { id: 'EXPERIENCE', label: '5. Experience', desc: 'Participate in hackathons & internships', icon: Award, color: '#f59e0b' },
  { id: 'PREPARE', label: '6. Prepare', desc: 'Nail admissions, portfolio & interviews', icon: Activity, color: '#ec4899' },
  { id: 'GROW', label: '7. Grow', desc: 'Continuous adaptive lifelong mastery', icon: TrendingUp, color: '#06b6d4' }
];

export const StudentProgressSection: React.FC<StudentProgressSectionProps> = ({
  profile,
  savedCareers,
  completedTasksCount,
  totalTasksCount,
  onExploreCareers,
  onOpenPreparation
}) => {
  const currentStageIndex = JOURNEY_STAGES.findIndex(s => s.id === profile.journeyStage);

  return (
    <section className="relative py-24 px-4 max-w-7xl mx-auto" id="student-progress">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
          <Activity className="w-3.5 h-3.5" />
          <span>My Career Command Center</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] mb-4">
          My Career Journey.
        </h2>
        <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
          Track your progress through the 7-stage Career Operating System: from early understanding to project building and career launch.
        </p>
      </div>

      {/* 7-Stage 3D Holographic Journey Path */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/30 mb-10 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase font-semibold">
              Current Trajectory Stage:
            </div>
            <h3 className="text-2xl font-bold text-white font-['Outfit'] mt-0.5">
              Stage {currentStageIndex + 1}: {JOURNEY_STAGES[currentStageIndex]?.label}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-gray-400">
              Student Level: <strong className="text-cyan-300">{profile.educationLevel} ({profile.stream})</strong>
            </span>
          </div>
        </div>

        {/* Horizontal 7-Stage Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
          {JOURNEY_STAGES.map((st, idx) => {
            const isCompleted = idx < currentStageIndex;
            const isCurrent = idx === currentStageIndex;
            const Icon = st.icon;

            return (
              <div
                key={st.id}
                className={`p-4 rounded-2xl border transition-all text-center flex flex-col items-center justify-between ${
                  isCurrent
                    ? 'glass-panel-glow border-cyan-400/80 shadow-xl shadow-cyan-500/20 bg-cyan-950/40 scale-105'
                    : isCompleted
                    ? 'bg-emerald-950/20 border-emerald-500/30'
                    : 'bg-black/30 border-white/5 opacity-60'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 ${
                    isCurrent
                      ? 'bg-cyan-500 text-gray-950 shadow-md shadow-cyan-400/40'
                      : isCompleted
                      ? 'bg-emerald-500 text-gray-950'
                      : 'bg-white/10 text-gray-400'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-white font-['Outfit']">
                  {st.label.split('.')[1].trim()}
                </div>
                <div className="text-[10px] text-gray-400 mt-1 leading-tight font-light hidden sm:block">
                  {st.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* Milestone Statistics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-[10px] font-mono text-cyan-400 uppercase">Preparation Milestones</div>
            <div className="text-2xl font-bold text-white mt-1 font-mono">
              {completedTasksCount} / {totalTasksCount}
            </div>
            <div className="text-xs text-gray-400 mt-0.5">Tasks verified on path</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-[10px] font-mono text-purple-400 uppercase">Target Careers Exploring</div>
            <div className="text-2xl font-bold text-white mt-1 font-mono">
              {savedCareers.length} Careers
            </div>
            <div className="text-xs text-gray-400 mt-0.5">Saved in your active radar</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-[10px] font-mono text-emerald-400 uppercase">Next Recommended Step</div>
            <div className="text-sm font-bold text-emerald-300 mt-1">
              Build First Beginner Project
            </div>
            <div className="text-xs text-gray-400 mt-0.5">Ship code before Class 12 exams</div>
          </div>
        </div>
      </div>

      {/* Saved Careers Quick Access Bar */}
      {savedCareers.length > 0 && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-base font-bold text-white font-['Outfit'] flex items-center gap-2">
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>Careers In Your Active Exploration Radar</span>
            </h4>
            <button
              onClick={onExploreCareers}
              className="text-xs text-cyan-400 hover:underline flex items-center gap-1"
            >
              <span>Explore more</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedCareers.map((c) => (
              <div
                key={c.id}
                className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between group hover:border-cyan-400/40 transition-all"
              >
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase">{c.category}</div>
                  <h5 className="text-sm font-bold text-white mt-0.5 font-['Outfit']">{c.title}</h5>
                  <div className="text-[11px] text-gray-400 mt-0.5">{c.growthOutlook}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
