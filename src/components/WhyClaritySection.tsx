import React, { useState } from 'react';
import { HelpCircle, CheckCircle, Sparkles, ArrowRight, ShieldCheck, Compass, Lightbulb } from 'lucide-react';

interface FloatingQuestion {
  id: string;
  question: string;
  category: string;
  problem: string;
  solution: string;
  solutionTab: string;
  color: string;
}

const QUESTIONS: FloatingQuestion[] = [
  {
    id: 'q1',
    question: '“What should I choose?”',
    category: 'Stream & Identity',
    problem: 'Students are forced into rigid PCM, PCB, or Commerce tracks at age 15 without knowing what suits their cognitive strengths.',
    solution: 'Diagnostic interest & strengths mapping that suggests multiple exploratory career sectors without locking you into a single box.',
    solutionTab: 'Discover Your Path',
    color: '#38bdf8'
  },
  {
    id: 'q2',
    question: '“What does this career actually involve?”',
    category: 'Daily Reality',
    problem: 'Glossy brochures sell job titles without showing what an engineer, doctor, or corporate counsel actually does at 10 AM on a Tuesday.',
    solution: 'Deconstructed daily workflows, work environments, problems solved, and real industry roles from entry-level to executive.',
    solutionTab: 'Understand Any Career',
    color: '#818cf8'
  },
  {
    id: 'q3',
    question: '“What skills will I need?”',
    category: 'Competence',
    problem: 'School syllabi lag behind real-world industry tools by 5-10 years, leaving graduates technically stranded.',
    solution: 'Real-time skill proficiency tracks breaking down exactly why each skill matters, where it is used, and free hands-on practice labs.',
    solutionTab: 'Skills Ecosystem',
    color: '#10b981'
  },
  {
    id: 'q4',
    question: '“Is this career changing?”',
    category: 'Future Viability',
    problem: 'Automation and AI are redefining jobs so rapidly that advice given by well-meaning relatives is already outdated.',
    solution: '3D holographic evolution timelines (Today -> Next -> Emerging -> Future) citing verified data from the World Economic Forum and IEEE.',
    solutionTab: 'Career Future Timeline',
    color: '#f59e0b'
  },
  {
    id: 'q5',
    question: '“What should I learn now?”',
    category: 'Actionability',
    problem: 'High school students feel overwhelmed by thousands of random YouTube tutorials with no coherent curriculum sequence.',
    solution: 'Curated, vetted learning tracks categorized by education level, skill, and difficulty with verified project sandboxes.',
    solutionTab: 'Learning Hub',
    color: '#ec4899'
  },
  {
    id: 'q6',
    question: '“How do I prepare?”',
    category: 'Execution',
    problem: 'Without structured milestones, students procrastinate until entrance exams or college graduation panic hits.',
    solution: 'A 5-phase preparation roadmap: Foundation, Core Skills, Proof-of-Work Projects, Real Experience, and Career Launch.',
    solutionTab: '5-Phase Preparation Plan',
    color: '#c084fc'
  }
];

interface WhyClaritySectionProps {
  onOpenWizard: () => void;
  onExploreCareers: () => void;
}

export const WhyClaritySection: React.FC<WhyClaritySectionProps> = ({
  onOpenWizard,
  onExploreCareers
}) => {
  const [activeQuestion, setActiveQuestion] = useState<FloatingQuestion>(QUESTIONS[0]);

  return (
    <section className="relative py-24 px-4 overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>The Career Dilemma After Class 10/12</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] leading-tight mb-4">
            Why Career Clarity Matters <br />
            <span className="text-gradient-cyan">Before You Choose.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            Every year, millions of high school students make life-defining education decisions based on hearsay, peer pressure, or outdated stereotypes. We turn hesitation into structured confidence.
          </p>
        </div>

        {/* Central 3D Interactive Prism & Orbiting Questions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 6 Floating Interactive Question Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {QUESTIONS.map((item, idx) => {
              const isSelected = activeQuestion.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveQuestion(item)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 border cursor-pointer relative group ${
                    isSelected
                      ? 'glass-panel-glow border-cyan-400/60 shadow-xl shadow-cyan-500/20 scale-[1.02] bg-cyan-950/40'
                      : 'glass-panel border-white/5 hover:border-white/20 hover:scale-[1.01]'
                  }`}
                  style={{
                    animationDelay: `${idx * 150}ms`
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border"
                      style={{
                        backgroundColor: `${item.color}15`,
                        color: item.color,
                        borderColor: `${item.color}40`
                      }}
                    >
                      {item.category}
                    </span>
                    {isSelected ? (
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    ) : (
                      <span className="text-gray-500 text-xs font-mono group-hover:text-white transition-colors">
                        0{idx + 1}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white font-['Outfit'] group-hover:text-cyan-200 transition-colors">
                    {item.question}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Right Column: Cinematic Solution Bridge */}
          <div className="lg:col-span-6">
            <div className="glass-panel-glow p-6 sm:p-8 rounded-3xl border border-cyan-400/40 shadow-2xl relative overflow-hidden">
              {/* Background watermark icon */}
              <Compass className="absolute -right-8 -bottom-8 w-48 h-48 text-cyan-500/5 pointer-events-none" />

              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
                  CAREERPATH RESOLUTION
                </span>
                <span className="text-xs text-gray-400 font-mono">
                  Module: {activeQuestion.solutionTab}
                </span>
              </div>

              {/* The Student Doubt */}
              <div className="mb-6 p-4 rounded-2xl bg-red-950/20 border border-red-500/20">
                <div className="text-[11px] font-mono uppercase tracking-wider text-red-400 font-bold mb-1 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>The Root Problem</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {activeQuestion.problem}
                </p>
              </div>

              {/* The CareerPath Intelligent Answer */}
              <div className="mb-6 p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30">
                <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-300 font-bold mb-1 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>How CareerPath 3D Answers It</span>
                </div>
                <p className="text-sm text-gray-200 leading-relaxed font-normal">
                  {activeQuestion.solution}
                </p>
              </div>

              {/* Cinematic Transition Punchline */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-white font-['Outfit']">
                    CareerPath helps you find the answers.
                  </div>
                  <div className="text-xs text-gray-400">
                    Explore multiple paths with zero pressure.
                  </div>
                </div>

                <button
                  onClick={onOpenWizard}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Discover Your Answers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
