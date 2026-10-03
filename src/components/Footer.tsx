import React from 'react';
import { Compass, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import type { NavTab } from './Navbar';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenWizard: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenWizard }) => {
  return (
    <footer className="relative border-t border-white/10 bg-gray-950/80 backdrop-blur-xl py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-1 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-purple-600 p-[1.5px]">
              <div className="w-full h-full bg-gray-950 rounded-[10px] flex items-center justify-center">
                <Compass className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <span className="font-extrabold text-lg text-white font-['Outfit']">
              CareerPath 3D
            </span>
          </div>
          <p className="text-xs text-gray-400 font-light leading-relaxed">
            The futuristic 3D career exploration and preparation platform for students after Class 10 and Class 12.
          </p>
          <div className="text-[10px] font-mono text-cyan-400">
            “Understand. Prepare. Grow.”
          </div>
        </div>

        {/* Quick Discovery Links */}
        <div>
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3">
            Exploration
          </h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>
              <button onClick={() => onSelectTab('explore')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                All 16 Career Domains
              </button>
            </li>
            <li>
              <button onClick={() => onSelectTab('future')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                Career Future & Trends
              </button>
            </li>
            <li>
              <button onClick={() => onSelectTab('pathways')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                Education Pathways
              </button>
            </li>
            <li>
              <button onClick={onOpenWizard} className="hover:text-cyan-300 transition-colors cursor-pointer text-cyan-400">
                Diagnostic Path Finder ✨
              </button>
            </li>
          </ul>
        </div>

        {/* Preparation & Proof-of-Work */}
        <div>
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3">
            Execution
          </h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>
              <button onClick={() => onSelectTab('preparation')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                5-Phase Preparation Plan
              </button>
            </li>
            <li>
              <button onClick={() => onSelectTab('skills')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                Skills Ecosystem
              </button>
            </li>
            <li>
              <button onClick={() => onSelectTab('projects')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                Build Experience (Projects)
              </button>
            </li>
            <li>
              <button onClick={() => onSelectTab('opportunities')} className="hover:text-cyan-300 transition-colors cursor-pointer">
                Scholarships & Hackathons
              </button>
            </li>
          </ul>
        </div>

        {/* Ethical Standards & Trust */}
        <div>
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3">
            Standards & Safety
          </h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Zero-Pressure Architecture</span>
            </li>
            <li>Non-Deterministic Guidance</li>
            <li>Verified Source Citations</li>
            <li>Minimal Necessary Permissions</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-mono gap-4">
        <div>
          © 2026 CareerPath 3D. Crafted for high school visionaries.
        </div>
        <div className="flex items-center gap-4">
          <span>Accessible WebGL 3D</span>
          <span>•</span>
          <span>Respects Reduced Motion</span>
        </div>
      </div>
    </footer>
  );
};
