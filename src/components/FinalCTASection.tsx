import React from 'react';
import { Compass, Sparkles, ArrowRight, Wand2 } from 'lucide-react';

interface FinalCTASectionProps {
  onStartJourney: () => void;
  onOpenWizard: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onStartJourney,
  onOpenWizard
}) => {
  return (
    <section className="relative py-28 px-4 max-w-5xl mx-auto text-center overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 glass-panel-glow p-8 sm:p-14 rounded-3xl border border-cyan-400/40 shadow-2xl backdrop-blur-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-6 shadow-md shadow-cyan-500/20">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>The CareerPath 3D Creed</span>
        </div>

        {/* Philosophy Quotation */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] leading-tight mb-6 max-w-3xl mx-auto">
          “Your future is not something you simply choose. <br className="hidden sm:inline" />
          <span className="text-gradient-cyan">
            It is something you understand, prepare for, and build.”
          </span>
        </h2>

        <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-300 leading-relaxed font-light mb-8">
          Step into your future with clarity, verifiable skills, and an authentic proof-of-work portfolio. Explore without fear; grow with direction.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartJourney}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-base shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_45px_rgba(56,189,248,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <Compass className="w-5 h-5 text-cyan-200 group-hover:rotate-45 transition-transform" />
            <span>Start My Career Journey</span>
            <ArrowRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenWizard}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-panel border border-white/10 hover:border-purple-400/50 text-gray-200 hover:text-white font-bold text-base hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Wand2 className="w-5 h-5 text-purple-400" />
            <span>Diagnostic Path Finder</span>
          </button>
        </div>
      </div>
    </section>
  );
};
