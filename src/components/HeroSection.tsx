import React from 'react';
import { CareerUniverse3D } from './3d/CareerUniverse3D';
import { ArrowRight, Compass, Sparkles, Wand2, Shield, Flame, BookMarked, Terminal } from 'lucide-react';

interface HeroSectionProps {
  onExploreCareers: () => void;
  onDiscoverPath: () => void;
  onSelectCareer: (careerId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCareers,
  onDiscoverPath,
  onSelectCareer
}) => {
  return (
    <section className="relative min-h-[92vh] pt-24 pb-16 flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Career Universe Interactive Canvas in Background */}
      <div className="absolute inset-0 z-0">
        <CareerUniverse3D onSelectCareer={onSelectCareer} />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-6 pointer-events-none">
        {/* Futuristic Philosophy Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-medium mb-6 shadow-[0_0_20px_rgba(56,189,248,0.2)] animate-pulse pointer-events-auto">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="font-['Space_Grotesk'] tracking-wide">
            Don’t Just Choose A Career. Understand It. Prepare For It. Grow With It.
          </span>
        </div>

        {/* Main Cinematic Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-['Outfit'] leading-[1.1] mb-6">
          Your Career Journey <br className="hidden sm:inline" />
          <span className="text-gradient-cyan">Starts Here.</span>
        </h1>

        {/* Supporting Subheading */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-light mb-8">
          Understand careers before choosing them. Explore how industries are transforming in the next decade. Build the verifiable skills and projects you need to become career-ready after Class 10 & 12.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
          <button
            onClick={onExploreCareers}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-base shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <Compass className="w-5 h-5 text-cyan-200 group-hover:rotate-45 transition-transform" />
            <span>Explore Careers</span>
            <ArrowRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onDiscoverPath}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-panel-glow border border-purple-400/40 text-purple-200 font-bold text-base hover:text-white hover:border-purple-400 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-950/40"
          >
            <Wand2 className="w-5 h-5 text-purple-400" />
            <span>Discover Your Path</span>
          </button>
        </div>

        {/* Live Interactive Stats Pill Group */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pointer-events-auto">
          <div className="glass-panel p-3 sm:p-4 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all text-left">
            <div className="text-[10px] sm:text-xs font-mono text-cyan-400 flex items-center gap-1">
              <Compass className="w-3.5 h-3.5" />
              <span>CAREERS MAPPED</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white mt-1 font-['Outfit']">
              16+ Domains
            </div>
            <div className="text-[11px] text-gray-400 mt-0.5">
              Class 10/12 to 2035 Horizon
            </div>
          </div>

          <div className="glass-panel p-3 sm:p-4 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all text-left">
            <div className="text-[10px] sm:text-xs font-mono text-purple-400 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FUTURE TRENDS</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white mt-1 font-['Outfit']">
              Verified Data
            </div>
            <div className="text-[11px] text-gray-400 mt-0.5">
              Cited from WEF & IEEE
            </div>
          </div>

          <div className="glass-panel p-3 sm:p-4 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all text-left">
            <div className="text-[10px] sm:text-xs font-mono text-emerald-400 flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5" />
              <span>PROOF OF WORK</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white mt-1 font-['Outfit']">
              45+ Projects
            </div>
            <div className="text-[11px] text-gray-400 mt-0.5">
              Beginner to Advanced
            </div>
          </div>

          <div className="glass-panel p-3 sm:p-4 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-all text-left">
            <div className="text-[10px] sm:text-xs font-mono text-amber-400 flex items-center gap-1">
              <BookMarked className="w-3.5 h-3.5" />
              <span>PREP JOURNEY</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white mt-1 font-['Outfit']">
              5 Phases
            </div>
            <div className="text-[11px] text-gray-400 mt-0.5">
              From Foundation to Launch
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
