import React, { useState } from 'react';
import type { PreparationPhase, PreparationTask } from '../types';
import confetti from 'canvas-confetti';
import { 
  CheckSquare, 
  Square, 
  Sparkles, 
  Award, 
  Calendar, 
  CheckCircle2, 
  Flame, 
  ChevronRight,
  TrendingUp,
  Clock,
  Layers
} from 'lucide-react';

interface PreparationPlanSectionProps {
  phases: PreparationPhase[];
  onToggleTask: (phaseId: number, taskId: string) => void;
}

export const PreparationPlanSection: React.FC<PreparationPlanSectionProps> = ({
  phases,
  onToggleTask
}) => {
  const [activePhaseId, setActivePhaseId] = useState<number>(1);
  const [filterCategory, setFilterCategory] = useState<'All' | 'Tasks' | 'Skills' | 'Resources' | 'Projects' | 'Milestones'>('All');

  const activePhase = phases.find(p => p.id === activePhaseId) || phases[0];

  // Calculate overall metrics
  const totalTasks = phases.reduce((acc, p) => acc + p.tasks.length, 0);
  const completedTasks = phases.reduce((acc, p) => acc + p.tasks.filter(t => t.completed).length, 0);
  const overallPercentage = Math.round((completedTasks / (totalTasks || 1)) * 100);

  const handleTaskCheck = (taskId: string, currentCompleted: boolean) => {
    onToggleTask(activePhase.id, taskId);
    if (!currentCompleted) {
      // Trigger subtle celebration confetti
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#38bdf8', '#818cf8', '#10b981']
        });
      } catch (e) {
        // Safe fallback
      }
    }
  };

  const filteredTasks = activePhase.tasks.filter(t => {
    if (filterCategory === 'All') return true;
    return t.category === filterCategory;
  });

  return (
    <section className="relative py-24 px-4 max-w-7xl mx-auto" id="preparation-plan">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
          <CheckSquare className="w-3.5 h-3.5" />
          <span>5-Phase Preparation Architecture</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] mb-4">
          My Career Preparation Plan.
        </h2>
        <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
          Break your future down into achievable milestones. Mark tasks complete as you progress, watch your journey index climb, and unlock new phases.
        </p>
      </div>

      {/* Overall Progress HUD Ring */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 mb-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          {/* Circular Holographic Progress Gauge */}
          <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
            <svg className="w-20 h-20 -rotate-90">
              <circle
                cx="40"
                cy="40"
                r="32"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="6"
                fill="transparent"
              />
              <circle
                cx="40"
                cy="40"
                r="32"
                stroke="url(#cyanBlueGradient)"
                strokeWidth="6"
                strokeDasharray={201}
                strokeDashoffset={201 - (201 * overallPercentage) / 100}
                strokeLinecap="round"
                fill="transparent"
              />
              <defs>
                <linearGradient id="cyanBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#818cf8" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-lg font-bold text-white font-mono leading-none">
                {overallPercentage}%
              </span>
              <span className="text-[9px] font-mono text-cyan-400 uppercase mt-0.5">Ready</span>
            </div>
          </div>

          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              Career Preparation Index
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] mt-0.5">
              {completedTasks} of {totalTasks} Milestones Achieved
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Active Phase: <strong className="text-cyan-300">{activePhase.name}</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/5 text-right hidden sm:block">
            <div className="text-[10px] font-mono text-gray-400 uppercase">Target Velocity</div>
            <div className="text-sm font-bold text-emerald-400 font-mono">On Track (Class 11/12)</div>
          </div>
        </div>
      </div>

      {/* 5-Phase Horizontal Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
        {phases.map((phase) => {
          const isSelected = activePhase.id === phase.id;
          const phaseCompleted = phase.tasks.filter(t => t.completed).length;
          const phaseTotal = phase.tasks.length;
          const isAllDone = phaseCompleted === phaseTotal;

          return (
            <button
              key={phase.id}
              onClick={() => setActivePhaseId(phase.id)}
              className={`p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer border relative overflow-hidden ${
                isSelected
                  ? 'glass-panel-glow border-cyan-400/60 shadow-xl shadow-cyan-950/60 bg-cyan-950/40 scale-[1.02]'
                  : 'glass-panel border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase">
                  {phase.phaseCode}
                </span>
                {isAllDone && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                )}
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white font-['Outfit'] truncate">
                {phase.name}
              </h4>
              <div className="text-[11px] font-mono text-gray-400 mt-1">
                {phaseCompleted}/{phaseTotal} done
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Phase Task Workspace */}
      {activePhase && (
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <div>
              <div className="text-xs font-mono text-cyan-400 font-semibold uppercase">
                {activePhase.phaseCode} • {activePhase.targetTimeline}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] mt-1">
                {activePhase.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light mt-1">
                {activePhase.tagline}
              </p>
            </div>

            {/* Task Category Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {(['All', 'Tasks', 'Skills', 'Resources', 'Projects', 'Milestones'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3 py-1 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                    filterCategory === cat
                      ? 'bg-cyan-500 text-gray-950 font-bold'
                      : 'bg-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Task Checklist Items */}
          <div className="space-y-4">
            {filteredTasks.map((task) => (
              <div
                key={task.id}
                onClick={() => handleTaskCheck(task.id, task.completed)}
                className={`p-4 sm:p-5 rounded-2xl transition-all duration-200 cursor-pointer border flex items-start gap-4 ${
                  task.completed
                    ? 'bg-emerald-950/20 border-emerald-500/30'
                    : 'bg-white/[0.02] hover:bg-white/[0.04] border-white/5 hover:border-cyan-500/30'
                }`}
              >
                {/* Checkbox Icon */}
                <div className="mt-0.5 shrink-0">
                  {task.completed ? (
                    <div className="w-5 h-5 rounded-lg bg-emerald-500 flex items-center justify-center text-gray-950">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-lg border border-white/20 hover:border-cyan-400 flex items-center justify-center text-transparent hover:text-cyan-400/50" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className={`text-sm sm:text-base font-bold font-['Outfit'] ${
                      task.completed ? 'text-gray-400 line-through' : 'text-white'
                    }`}>
                      {task.title}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-cyan-300 border border-white/5">
                        {task.category}
                      </span>
                      <span className="text-[10px] font-mono text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {task.estimatedTime}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed font-light mb-2">
                    {task.description}
                  </p>

                  {task.tips && (
                    <div className="text-[11px] text-cyan-300/90 font-mono bg-cyan-950/30 px-3 py-1.5 rounded-xl border border-cyan-500/20 inline-block">
                      💡 Pro-Tip: {task.tips}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
