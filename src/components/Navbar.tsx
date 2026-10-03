import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Sparkles, 
  BookOpen, 
  CheckSquare, 
  FolderGit2, 
  Award, 
  Bot, 
  User, 
  Menu, 
  X, 
  ShieldAlert, 
  Activity,
  Layers,
  Wand2
} from 'lucide-react';

export type NavTab = 
  | 'home' 
  | 'explore' 
  | 'future' 
  | 'pathways' 
  | 'skills' 
  | 'preparation' 
  | 'learning' 
  | 'projects' 
  | 'opportunities' 
  | 'progress' 
  | 'ai' 
  | 'connections';

interface NavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenProfile: () => void;
  onOpenAdmin: () => void;
  onOpenWizard: () => void;
  savedCareersCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenProfile,
  onOpenAdmin,
  onOpenWizard,
  savedCareersCount
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'home', label: 'Overview', icon: Activity },
    { id: 'explore', label: 'Explore Careers', icon: Compass },
    { id: 'future', label: 'Career Future', icon: Sparkles },
    { id: 'pathways', label: 'Pathways', icon: Layers },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'preparation', label: 'Preparation', icon: CheckSquare },
    { id: 'learning', label: 'Learning Hub', icon: BookOpen },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'opportunities', label: 'Opportunities', icon: Award },
    { id: 'progress', label: 'Journey', icon: Activity },
    { id: 'ai', label: 'CareerPath AI', icon: Bot },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3 transition-all duration-300">
      <nav
        className={`w-full max-w-7xl transition-all duration-300 rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between border ${
          isScrolled
            ? 'glass-panel-glow border-cyan-500/30 shadow-2xl shadow-cyan-950/50 backdrop-blur-2xl bg-gray-950/80'
            : 'glass-panel border-white/10 backdrop-blur-xl bg-gray-950/60'
        }`}
      >
        {/* Brand Logo */}
        <button
          onClick={() => onSelectTab('home')}
          className="flex items-center gap-2.5 group cursor-pointer text-left"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[1.5px] shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-gray-950 rounded-[10px] flex items-center justify-center">
              <Compass className="w-5 h-5 text-cyan-400 group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-white font-['Outfit']">
                CareerPath
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-bold">
                3D
              </span>
            </div>
            <p className="text-[9px] font-mono text-gray-400 -mt-0.5 tracking-wider hidden sm:block">
              FUTURE CAREER OS
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-500/15 shadow-[0_0_12px_rgba(56,189,248,0.3)] border border-cyan-400/40 font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-gray-400'}`} />
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Action Controls & Profile */}
        <div className="flex items-center gap-2">
          {/* Diagnostic Wizard Trigger */}
          <button
            onClick={onOpenWizard}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 text-cyan-300 border border-cyan-400/40 shadow-sm cursor-pointer transition-all hover:scale-105"
            title="Discover Your Path"
          >
            <Wand2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Path Finder</span>
          </button>

          {/* Admin Control */}
          <button
            onClick={onOpenAdmin}
            className="hidden lg:flex items-center gap-1 px-2.5 py-1.5 text-xs font-mono rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 cursor-pointer transition-all"
            title="Admin Data & Trend Management Console"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[11px]">Admin</span>
          </button>

          {/* Student Profile Button */}
          <button
            onClick={onOpenProfile}
            className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-full bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 text-gray-200 transition-all cursor-pointer"
            title="Student Profile & Portfolio"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
              <User className="w-4 h-4" />
            </div>
            <div className="hidden sm:block text-left">
              <div className="text-xs font-semibold text-white leading-none">Class 11/12</div>
              <div className="text-[10px] text-cyan-400 font-mono mt-0.5">
                {savedCareersCount} Saved
              </div>
            </div>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-4 top-20 z-50 glass-panel-glow p-4 rounded-3xl border border-cyan-500/30 backdrop-blur-2xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2.5 rounded-xl text-xs font-medium flex items-center gap-2 text-left cursor-pointer transition-all ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-semibold'
                      : 'bg-white/5 text-gray-300 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                onOpenWizard();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/20"
            >
              <Wand2 className="w-3.5 h-3.5" />
              <span>Discover Path</span>
            </button>
            <button
              onClick={() => {
                onOpenAdmin();
                setMobileMenuOpen(false);
              }}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-xs flex items-center gap-1"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Admin</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
