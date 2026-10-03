import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Layers, 
  GraduationCap, 
  BookOpen, 
  Award, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  FolderGit2, 
  ChevronRight,
  Briefcase
} from 'lucide-react';

interface PathwayStep {
  id: string;
  stageName: string;
  timeframe: string;
  category: string;
  whatToLearn: string[];
  whyItMatters: string;
  options: {
    type: 'Degree Path' | 'Diploma Path' | 'Skill-Based Path' | 'Certification Path';
    title: string;
    details: string;
  }[];
  resources: string[];
  suggestedProjects: string[];
}

const MASTER_PATHWAY_STEPS: PathwayStep[] = [
  {
    id: 'step-1',
    stageName: 'Class 10 Foundation & Discovery',
    timeframe: 'Age 15 - 16',
    category: 'Self-Discovery',
    whatToLearn: [
      'Core high school mathematics (Algebra, Coordinate Geometry, Trigonometry)',
      'Basic scientific method and evidence-based observation in Physics/Chemistry/Biology',
      'Fundamental digital literacy (Markdown, command line terminal, logic puzzles)',
      'Exploration of at least 5 distinct career fields without early specialization'
    ],
    whyItMatters: 'Removes anxiety around making an irreversible mistake. Builds basic quantitative comfort and broad curiosity before stream selection.',
    options: [
      { type: 'Degree Path', title: 'Prepare for Class 11 Stream Choice', details: 'Evaluate Science (PCM/PCB), Commerce, or Humanities based on actual academic joy' },
      { type: 'Diploma Path', title: 'Polytechnic Diploma Entrance (After Class 10)', details: 'Direct entry into 3-year mechanical, electrical, or computer polytechnics' },
      { type: 'Skill-Based Path', title: 'Self-Paced Web/Logic Foundations', details: 'CS50 Python, Khan Academy math, or TryHackMe Linux rooms' }
    ],
    resources: ['Khan Academy Advanced Math', 'Harvard CS50P (Free)', 'National Science Center Exhibitions'],
    suggestedProjects: ['Build your first personal website in HTML/CSS', 'Write a reflection journal evaluating 3 professional informational interviews']
  },
  {
    id: 'step-2',
    stageName: 'Choose Suitable Subjects & Streams',
    timeframe: 'Class 10 Board Completion',
    category: 'Stream Alignment',
    whatToLearn: [
      'Understanding university degree eligibility prerequisites (e.g. PCM required for engineering/architecture, PCB for medicine/biotech)',
      'Balancing high-scoring subjects with career passions',
      'Evaluating flexible NEP 2020 cross-stream options (e.g. Physics + Economics + Computer Science)'
    ],
    whyItMatters: 'Certain careers (medicine, civil engineering, aviation) legally require specific high school subject combinations. Choosing intentionally prevents closed doors.',
    options: [
      { type: 'Degree Path', title: 'Science Stream (PCM / PCB / PCMB)', details: 'Opens engineering, medicine, pure science, research, defense, and aviation' },
      { type: 'Degree Path', title: 'Commerce Stream (with / without Math)', details: 'Opens finance, chartered accountancy, corporate economics, and investment banking' },
      { type: 'Degree Path', title: 'Humanities & Arts Stream', details: 'Opens corporate law, public policy, civil services, spatial design, and journalism' },
      { type: 'Diploma Path', title: 'Vocational High School Curriculum', details: 'Direct skill mastery in IT, applied electronics, and industrial trades' }
    ],
    resources: ['CBSE & State Board Curriculum Guides', 'National Education Policy (NEP) Subject Matrix'],
    suggestedProjects: ['Map out university prerequisite matrices for your top 3 dream careers']
  },
  {
    id: 'step-3',
    stageName: 'Class 11 & 12 Academic Depth',
    timeframe: 'Age 16 - 18',
    category: 'Rigorous Depth',
    whatToLearn: [
      'Advanced conceptual depth in chosen subjects (Calculus, Electromagnetism, Genetics, Microeconomics, or Legal Studies)',
      'High-stamina exam time management and multi-step analytical problem solving',
      'Scientific paper reading and statistical reasoning'
    ],
    whyItMatters: 'The concepts taught in Class 11 and 12 form the bedrock of all collegiate university courses and entrance exams worldwide.',
    options: [
      { type: 'Degree Path', title: 'National Competitive Entrance Track', details: 'JEE, NEET, CLAT, CUET, SAT, or UCEED exam preparation' },
      { type: 'Skill-Based Path', title: 'Open-Source Portfolio Track', details: 'Building independent apps, research papers, or competitive coding profiles' }
    ],
    resources: ['NCERT Core Textbooks', 'MIT OpenCourseWare (Introductory)', 'PortSwigger Web Academy / Kaggle'],
    suggestedProjects: ['Train an image classifier on plant leaves', 'Draft a 10-page legal memorial for a youth moot court']
  },
  {
    id: 'step-4',
    stageName: 'Entrance / Admissions / Higher Education Choice',
    timeframe: 'Class 12 Graduation',
    category: 'University Milestone',
    whatToLearn: [
      'Evaluating college ROI, faculty research output, and alumni network strength',
      'Understanding alternative pathways: Degree vs Online Degree vs Apprenticeship',
      'Writing compelling Statement of Purpose (SOP) essays and scholarship applications'
    ],
    whyItMatters: 'A prestigious brand name helps, but a driven student with a standout public portfolio at an affordable university often outperforms a passive student at an expensive private college.',
    options: [
      { type: 'Degree Path', title: '4-Year Traditional Bachelor Degree (B.Tech, MBBS, B.Des, B.A. LL.B.)', details: 'Campus life, campus placements, laboratory infrastructure' },
      { type: 'Diploma Path', title: 'Polytechnic to Lateral Entry B.Tech', details: 'Direct admission into 2nd year engineering degree after diploma' },
      { type: 'Certification Path', title: 'Hybrid Degree + High-Impact Certifications', details: 'IIT Madras Online BS Data Science or University of London International Degree' },
      { type: 'Skill-Based Path', title: 'Apprenticeships & Bootcamps', details: 'Direct developer fellowships and startup incubator apprenticeships' }
    ],
    resources: ['NIRF Higher Education Rankings', 'College Scorecard Data', 'Scholarship Portals'],
    suggestedProjects: ['Complete a comprehensive comparison matrix of 5 colleges with fees vs average placement data']
  },
  {
    id: 'step-5',
    stageName: 'Core Skills Mastery & Lab Practice',
    timeframe: 'College Year 1 - 2',
    category: 'Technical Mastery',
    whatToLearn: [
      'Advanced production toolchains (Git, Docker, Linux, Cloud GPUs, CAD software)',
      'System design principles, database sharding, and cryptographic security',
      'Writing clean, maintainable, self-documenting code and technical research reports'
    ],
    whyItMatters: 'College curricula are often theoretical. Mastering industry-standard tools during your first two years makes you instantly employable.',
    options: [
      { type: 'Skill-Based Path', title: 'The Odin Project / Fast.ai / DeepLearning.AI', details: 'Rigorous project-driven independent curricula' },
      { type: 'Certification Path', title: 'Industry Associate Certifications (AWS / CompTIA / OSCP)', details: 'Standardized third-party validation recognized globally' }
    ],
    resources: ['System Design Primer', 'NeetCode Data Structures', 'Stanford CS224N'],
    suggestedProjects: ['Deploy a containerized full-stack web application with authentication and database to AWS']
  },
  {
    id: 'step-6',
    stageName: 'Independent Proof-of-Work Projects',
    timeframe: 'College Year 2 - 3',
    category: 'Tangible Artifacts',
    whatToLearn: [
      'Transforming abstract ideas into working prototypes',
      'Creating intuitive user interfaces, handling error states, and testing edge cases',
      'Writing public documentation and recording demo video walkthroughs'
    ],
    whyItMatters: 'Resumes are claimed skills; GitHub repositories and live URLs are verifiable proof that you can actually build systems from scratch.',
    options: [
      { type: 'Skill-Based Path', title: 'Open-Source Contribution to Major Repositories', details: 'PRs to Python, Linux, React, or Hugging Face toolkits' },
      { type: 'Degree Path', title: 'Academic Research Paper with Professor', details: 'Publishing in IEEE, ACM, or peer-reviewed journals' }
    ],
    resources: ['GitHub Community Guides', 'Show HN on Hacker News', 'Product Hunt'],
    suggestedProjects: ['Build an end-to-end RAG AI document search engine with sub-second retrieval latency']
  },
  {
    id: 'step-7',
    stageName: 'Internships, Hackathons & Industry Experience',
    timeframe: 'College Year 3 - 4',
    category: 'Real-World Validation',
    whatToLearn: [
      'Collaborating in multidisciplinary teams with engineers, product managers, and designers',
      'Operating under production SLAs, code review feedback, and sprint deadlines',
      'Workplace professionalism and cross-functional communication'
    ],
    whyItMatters: 'Summer internships are the primary pipeline for full-time pre-placement offers (PPOs) at top global organizations.',
    options: [
      { type: 'Degree Path', title: 'Corporate Summer Internships', details: 'Paid internships at tech firms, investment banks, law firms, or hospitals' },
      { type: 'Skill-Based Path', title: 'Google Summer of Code (GSoC) / Remote Fellowships', details: 'Global remote open-source stipend programs' },
      { type: 'Certification Path', title: 'Hackathon Grand Finales', details: 'Winning Smart India Hackathon or Microsoft Imagine Cup' }
    ],
    resources: ['AngelList / Wellfound', 'LinkedIn Student Jobs', 'Internshala'],
    suggestedProjects: ['Ship a user-facing feature used by 1,000+ real customers during an internship']
  },
  {
    id: 'step-8',
    stageName: 'Career Launch & Lifelong Growth',
    timeframe: 'Graduation & Beyond',
    category: 'Industry Leadership',
    whatToLearn: [
      'Technical interview mastery, whiteboarding, and negotiation',
      'Long-term career capital accumulation: becoming indispensable in your niche',
      'Continuous reskilling as industry paradigms evolve'
    ],
    whyItMatters: 'Your career is a 40-year marathon. Building an identity as an adaptive, curious learner ensures you stay ahead of any automation wave.',
    options: [
      { type: 'Degree Path', title: 'Full-Time Industry Role', details: 'Joining as Associate Engineer, Resident Doctor, Junior Counsel, or Analyst' },
      { type: 'Skill-Based Path', title: 'Technology Entrepreneurship', details: 'Founding an early-stage startup backed by venture incubators' },
      { type: 'Degree Path', title: 'Master’s / Ph.D. Specialization', details: 'Advanced graduate research at global premier institutions' }
    ],
    resources: ['Levels.fyi Compensation Data', 'Y Combinator Startup School'],
    suggestedProjects: ['Maintain a public digital garden documenting your continuous technical discoveries']
  }
];

export const EducationPathwaySection: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>(MASTER_PATHWAY_STEPS[0].id);

  const activeStep = MASTER_PATHWAY_STEPS.find(s => s.id === activeStepId) || MASTER_PATHWAY_STEPS[0];

  return (
    <section className="relative py-24 px-4 max-w-7xl mx-auto" id="education-pathways">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>Interactive 3D Career Roadmap</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] mb-4">
          The Journey From Class 10 To Mastery.
        </h2>
        <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
          There is no single rigid ladder. Click each stage along the 8-step roadmap to explore learning milestones, degree routes, polytechnic diplomas, and skill-based portfolios.
        </p>
      </div>

      {/* 8-Step Interactive Horizontal Stepper */}
      <div className="mb-10 overflow-x-auto pb-4 scrollbar-none">
        <div className="flex items-center gap-2 min-w-max px-2">
          {MASTER_PATHWAY_STEPS.map((step, idx) => {
            const isSelected = activeStep.id === step.id;
            return (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => setActiveStepId(step.id)}
                  className={`px-4 py-3 rounded-2xl flex items-center gap-3 transition-all cursor-pointer border ${
                    isSelected
                      ? 'glass-panel-glow border-cyan-400/60 shadow-xl shadow-cyan-950/60 text-white bg-cyan-950/50 scale-105'
                      : 'glass-panel border-white/5 text-gray-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-mono font-bold ${
                      isSelected
                        ? 'bg-cyan-500 text-gray-950 shadow-md shadow-cyan-400/50'
                        : 'bg-white/10 text-gray-300'
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold font-['Outfit'] whitespace-nowrap">
                      {step.stageName.split('&')[0].trim()}
                    </div>
                    <div className="text-[10px] font-mono text-cyan-400/80">
                      {step.timeframe}
                    </div>
                  </div>
                </button>

                {idx < MASTER_PATHWAY_STEPS.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-gray-600 shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Selected Step Deep Dive Display */}
      {activeStep && (
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-2xl relative animate-in fade-in duration-200">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                Phase {MASTER_PATHWAY_STEPS.findIndex(s => s.id === activeStep.id) + 1} • {activeStep.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] mt-1">
                {activeStep.stageName}
              </h3>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
              Target Horizon: <span className="text-cyan-300 font-bold">{activeStep.timeframe}</span>
            </div>
          </div>

          {/* Why It Matters */}
          <div className="my-6 p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300 mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Why This Stage Matters</span>
            </div>
            <p className="text-sm text-gray-200 leading-relaxed font-light">
              {activeStep.whyItMatters}
            </p>
          </div>

          {/* What to learn & Suggested Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* What to learn */}
            <div className="p-6 rounded-3xl bg-black/40 border border-white/10">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>What To Learn During This Stage</span>
              </h4>
              <ul className="space-y-3">
                {activeStep.whatToLearn.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Suggested Projects */}
            <div className="p-6 rounded-3xl bg-black/40 border border-white/10 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 mb-4 flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-purple-400" />
                  <span>Suggested Proof-of-Work Projects</span>
                </h4>
                <ul className="space-y-3">
                  {activeStep.suggestedProjects.map((proj, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 bg-purple-950/20 p-3 rounded-2xl border border-purple-500/20">
                      <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{proj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="text-[10px] font-mono text-gray-400 uppercase mb-2">Useful Learning Resources:</div>
                <div className="flex flex-wrap gap-2">
                  {activeStep.resources.map((res) => (
                    <span key={res} className="text-xs font-mono px-3 py-1 rounded-xl bg-white/5 text-gray-300 border border-white/10">
                      {res}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Multiple Pathways / Options at this stage */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-4">
              Multiple Alternative Tracks (Choose What Fits You Best):
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeStep.options.map((opt, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-cyan-300 px-2 py-0.5 rounded bg-cyan-500/20 border border-cyan-500/30">
                      {opt.type}
                    </span>
                    <h5 className="text-sm font-bold text-white mt-2 font-['Outfit']">
                      {opt.title}
                    </h5>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      {opt.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
