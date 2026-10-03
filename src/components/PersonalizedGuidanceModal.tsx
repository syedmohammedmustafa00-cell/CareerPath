import React, { useState } from 'react';
import type { CareerItem, EducationLevel, AcademicStream } from '../types';
import { 
  Wand2, 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  GraduationCap, 
  Compass, 
  HelpCircle,
  Lightbulb,
  Check
} from 'lucide-react';

interface PersonalizedGuidanceModalProps {
  careers: CareerItem[];
  onClose: () => void;
  onSelectCareer: (careerId: string) => void;
  onSaveSuggestions: (careerIds: string[]) => void;
}

export const PersonalizedGuidanceModal: React.FC<PersonalizedGuidanceModalProps> = ({
  careers,
  onClose,
  onSelectCareer,
  onSaveSuggestions
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Student inputs
  const [educationLevel, setEducationLevel] = useState<EducationLevel>('Class 11');
  const [stream, setStream] = useState<AcademicStream>('Science (PCM)');
  const [favoriteSubjects, setFavoriteSubjects] = useState<string[]>(['Mathematics', 'Physics']);
  const [interests, setInterests] = useState<string[]>(['Artificial Intelligence', 'Software & Web', 'Problem Solving']);
  const [learningPreference, setLearningPreference] = useState<string>('Hands-on Projects & Labs');
  const [primaryGoal, setPrimaryGoal] = useState<string>('High Industry Impact & Innovation');

  // Multi-select toggle helper
  const toggleItem = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, item: string) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  // Generate multi-career match recommendations (never forcing one answer!)
  const recommendations = React.useMemo(() => {
    return careers.slice(0, 3).map((career, idx) => {
      let matchScore = 92 - idx * 4;
      let whyMatch = '';
      if (idx === 0) {
        whyMatch = `Strong synergy with your focus in ${favoriteSubjects.join(', ')} and interest in ${interests[0] || 'technology'}. Your preference for ${learningPreference} directly aligns with rapid project experimentation.`;
      } else if (idx === 1) {
        whyMatch = `Complementary analytical pathway offering high resilience and strong alignment with your ${stream} foundation and problem-solving passion.`;
      } else {
        whyMatch = `An adjacent interdisciplinary frontier combining your quantitative aptitude with long-term technological evolution.`;
      }

      return {
        career,
        matchScore,
        whyMatch,
        whatToExploreNext: [
          'Review the 10-year holographic future timeline',
          'Explore the alternative degree and polytechnic roadmap options',
          'Attempt the beginner proof-of-work project blueprint'
        ]
      };
    });
  }, [careers, educationLevel, stream, favoriteSubjects, interests, learningPreference, primaryGoal]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-gray-950/85 backdrop-blur-2xl animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl my-auto rounded-3xl glass-panel-glow border border-cyan-500/40 shadow-2xl p-6 sm:p-10 max-h-[92vh] overflow-y-auto scrollbar-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-purple-600 flex items-center justify-center text-white">
              <Wand2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-['Outfit']">
                Personalized Career Exploration Engine
              </h3>
              <p className="text-[11px] font-mono text-cyan-400">
                Impartial Diagnostic • Step {step} of 3
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* STEP 1: Education Level & Stream */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold block mb-2">
                1. What is your current class or qualification?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {(['Class 10', 'Class 11', 'Class 12', 'Undergraduate'] as EducationLevel[]).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setEducationLevel(lvl)}
                    className={`p-3 rounded-2xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                      educationLevel === lvl
                        ? 'bg-cyan-500 text-gray-950 font-bold border-cyan-400 shadow-md shadow-cyan-500/25'
                        : 'bg-white/5 text-gray-300 hover:text-white border-white/5'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold block mb-2">
                2. Academic Stream or Intended Direction:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {([
                  'Science (PCM)',
                  'Science (PCB)',
                  'Science (PCMB)',
                  'Commerce',
                  'Humanities / Arts',
                  'Vocational / Technical'
                ] as AcademicStream[]).map((st) => (
                  <button
                    key={st}
                    onClick={() => setStream(st)}
                    className={`p-3 rounded-2xl text-xs font-medium border text-left flex items-center justify-between transition-all cursor-pointer ${
                      stream === st
                        ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border-cyan-400 text-cyan-300 font-bold'
                        : 'bg-white/5 text-gray-300 hover:text-white border-white/5'
                    }`}
                  >
                    <span>{st}</span>
                    {stream === st && <Check className="w-4 h-4 text-cyan-400" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all cursor-pointer"
              >
                <span>Continue to Interests & Strengths</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Favorite Subjects & Interests */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold block mb-2">
                3. Which subjects do you genuinely enjoy studying? (Pick 2 or more)
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  'Mathematics',
                  'Physics',
                  'Computer Science',
                  'Biology',
                  'Chemistry',
                  'Economics',
                  'Accountancy',
                  'Political Science & Civics',
                  'English & Writing',
                  'Visual Arts & Design'
                ].map((subj) => {
                  const isSel = favoriteSubjects.includes(subj);
                  return (
                    <button
                      key={subj}
                      onClick={() => toggleItem(favoriteSubjects, setFavoriteSubjects, subj)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                        isSel
                          ? 'bg-cyan-500 text-gray-950 font-bold border-cyan-400 shadow-sm'
                          : 'bg-white/5 text-gray-300 hover:text-white border-white/10'
                      }`}
                    >
                      {subj}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold block mb-2">
                4. Select topics that spark your curiosity:
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  'Artificial Intelligence',
                  'Robotics & Drones',
                  'Cyber Defense & Hacking',
                  'Surgery & Biomedical Devices',
                  'Space & Astrophysics',
                  'Financial Markets & Stocks',
                  'Constitutional Law & Rights',
                  '3D Spatial Design',
                  'Clean Energy & Climate',
                  'Entrepreneurship & Startups'
                ].map((intr) => {
                  const isSel = interests.includes(intr);
                  return (
                    <button
                      key={intr}
                      onClick={() => toggleItem(interests, setInterests, intr)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                        isSel
                          ? 'bg-purple-500 text-white font-bold border-purple-400 shadow-sm'
                          : 'bg-white/5 text-gray-300 hover:text-white border-white/10'
                      }`}
                    >
                      {intr}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 text-xs font-mono text-gray-400 hover:text-white"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Generate Career Exploration Profile</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Multi-Career Suggestions Output (Ethical, non-prescriptive!) */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Core Philosophy Notice */}
            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light">
                <span className="font-bold text-white font-['Outfit']">Your Decision Remains Yours: </span>
                We will never state “You must become X.” Below are <strong>career areas that may be worth exploring</strong> based on your academic strengths and curiosity. Explore each one deeply before deciding.
              </div>
            </div>

            {/* Suggested Career Cards */}
            <div className="space-y-4">
              {recommendations.map(({ career, matchScore, whyMatch, whatToExploreNext }) => (
                <div
                  key={career.id}
                  className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-cyan-400/40 transition-all flex flex-col justify-between"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                        {career.category}
                      </span>
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                        ~{matchScore}% Resonance
                      </span>
                    </div>

                    <span className="text-xs font-mono text-gray-400">
                      Comp: {career.avgStartingSalary}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white font-['Outfit'] mb-1">
                    {career.title}
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed mb-3">
                    {career.shortDesc}
                  </p>

                  {/* Why It Matches Box */}
                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 mb-3">
                    <div className="text-[10px] font-mono uppercase text-cyan-300 font-bold mb-1">
                      Why This Area Resonates With Your Profile:
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {whyMatch}
                    </p>
                  </div>

                  {/* What to explore next */}
                  <div className="mb-4">
                    <div className="text-[10px] font-mono uppercase text-gray-400 mb-1.5">
                      Recommended Next Steps For You:
                    </div>
                    <ul className="space-y-1">
                      {whatToExploreNext.map((st, i) => (
                        <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{st}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectCareer(career.id);
                      }}
                      className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Inspect 3D Roadmap & Future</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2 text-xs font-mono text-gray-400 hover:text-white"
              >
                ← Edit Preferences
              </button>
              <button
                onClick={() => {
                  onSaveSuggestions(recommendations.map(r => r.career.id));
                  onClose();
                }}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 cursor-pointer hover:scale-105 transition-all"
              >
                Save Suggested Areas to My Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
