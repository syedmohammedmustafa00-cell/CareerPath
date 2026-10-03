import React, { useState, useMemo } from 'react';
import type { CareerItem, CareerCategory, EducationLevel, AcademicStream } from '../types';
import { 
  Search, 
  Filter, 
  Sparkles, 
  TrendingUp, 
  GraduationCap, 
  ArrowUpRight, 
  Compass, 
  Check, 
  Bookmark, 
  BookmarkCheck,
  Zap,
  SlidersHorizontal,
  X
} from 'lucide-react';

interface ExploreCareersSectionProps {
  careers: CareerItem[];
  savedCareerIds: string[];
  onToggleSaveCareer: (careerId: string) => void;
  onSelectCareer: (careerId: string) => void;
}

export const ExploreCareersSection: React.FC<ExploreCareersSectionProps> = ({
  careers,
  savedCareerIds,
  onToggleSaveCareer,
  onSelectCareer
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CareerCategory | 'All'>('All');
  const [selectedLevel, setSelectedLevel] = useState<EducationLevel | 'All'>('All');
  const [selectedStream, setSelectedStream] = useState<AcademicStream | 'All'>('All');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // All 16 categories
  const categories: (CareerCategory | 'All')[] = [
    'All',
    'Artificial Intelligence',
    'Computer Science & IT',
    'Cybersecurity',
    'Medicine & Healthcare',
    'Engineering',
    'Science & Research',
    'Finance',
    'Law',
    'Design & Media',
    'Government & Public Services',
    'Environmental Careers',
    'Skilled & Vocational Careers',
    'Business & Management',
    'Education',
    'Architecture',
    'Emerging Careers'
  ];

  const streams: (AcademicStream | 'All')[] = [
    'All',
    'Science (PCM)',
    'Science (PCB)',
    'Science (PCMB)',
    'Commerce',
    'Humanities / Arts',
    'Vocational / Technical'
  ];

  const filteredCareers = useMemo(() => {
    return careers.filter((career) => {
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = career.title.toLowerCase().includes(q);
        const matchesTagline = career.tagline.toLowerCase().includes(q);
        const matchesCategory = career.category.toLowerCase().includes(q);
        const matchesTech = career.technologiesUsed.some(t => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesTagline && !matchesCategory && !matchesTech) return false;
      }

      // Category filter
      if (selectedCategory !== 'All' && career.category !== selectedCategory) {
        return false;
      }

      // Education Level filter
      if (selectedLevel !== 'All' && !career.educationFit.includes(selectedLevel) && !career.educationFit.includes('All')) {
        return false;
      }

      // Stream filter
      if (selectedStream !== 'All' && !career.streamFit.includes(selectedStream) && !career.streamFit.includes('Any')) {
        return false;
      }

      return true;
    });
  }, [careers, searchQuery, selectedCategory, selectedLevel, selectedStream]);

  return (
    <section className="relative py-20 px-4 max-w-7xl mx-auto" id="explore-careers">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>Interactive 3D Career Catalogue</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] mb-4">
          Explore The Career Universe.
        </h2>
        <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
          Hover over any card to experience 3D depth tilt. Click to inspect daily workflows, future evolution timelines, degree alternatives, and guided projects.
        </p>
      </div>

      {/* Control Filters Bar */}
      <div className="glass-panel p-4 sm:p-6 rounded-3xl border border-white/10 mb-8 shadow-xl">
        {/* Search bar */}
        <div className="relative mb-5">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by career title, technology (e.g. PyTorch, ROS2, DCF, Law), or industry..."
            className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-gray-900/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 text-sm sm:text-base transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Education Level & Stream Filter Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
          {/* Level Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Level:</span>
            </span>
            {(['All', 'Class 10', 'Class 11', 'Class 12', 'Undergraduate'] as (EducationLevel | 'All')[]).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3 py-1 rounded-xl text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  selectedLevel === lvl
                    ? 'bg-cyan-500 text-gray-950 font-bold shadow-md shadow-cyan-500/30'
                    : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          {/* Stream Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-purple-400" />
              <span>Stream:</span>
            </span>
            <select
              value={selectedStream}
              onChange={(e) => setSelectedStream(e.target.value as AcademicStream | 'All')}
              className="bg-gray-900 border border-white/10 text-xs text-gray-200 rounded-xl px-3 py-1.5 focus:outline-none focus:border-cyan-400"
            >
              {streams.map((s) => (
                <option key={s} value={s} className="bg-gray-900 text-white">
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Horizontal Scrolling Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pt-4 scrollbar-none pb-1">
          {categories.map((cat) => {
            const isCatActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isCatActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/25 border border-cyan-300/40'
                    : 'glass-pill text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Career Count Indicator */}
      <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-6 px-2">
        <span>Showing {filteredCareers.length} career pathways</span>
        {(selectedCategory !== 'All' || selectedLevel !== 'All' || selectedStream !== 'All' || searchQuery) && (
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedLevel('All');
              setSelectedStream('All');
              setSearchQuery('');
            }}
            className="text-cyan-400 hover:underline flex items-center gap-1"
          >
            <span>Reset filters</span>
          </button>
        )}
      </div>

      {/* 3D Interactive Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCareers.map((career) => {
          const isSaved = savedCareerIds.includes(career.id);
          const isHovered = hoveredCardId === career.id;

          return (
            <div
              key={career.id}
              onMouseEnter={() => setHoveredCardId(career.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              className="perspective-1000 group"
            >
              <div
                className={`relative rounded-3xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full border ${
                  isHovered
                    ? 'glass-panel-glow border-cyan-400/50 shadow-2xl shadow-cyan-950/60 -translate-y-2'
                    : 'glass-panel border-white/10 hover:border-white/20'
                }`}
                style={{
                  transform: isHovered
                    ? 'rotateX(3deg) rotateY(-2deg) scale(1.02)'
                    : 'rotateX(0deg) rotateY(0deg) scale(1)',
                  transformStyle: 'preserve-3d'
                }}
                onClick={() => onSelectCareer(career.id)}
              >
                {/* Top Badge & Save Button */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border"
                      style={{
                        backgroundColor: `${career.accentColor}18`,
                        color: career.accentColor,
                        borderColor: `${career.accentColor}40`
                      }}
                    >
                      {career.category}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSaveCareer(career.id);
                      }}
                      className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-cyan-400 transition-colors"
                      title={isSaved ? 'Remove from Saved' : 'Save Career'}
                    >
                      {isSaved ? (
                        <BookmarkCheck className="w-4 h-4 text-cyan-400" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Career Title & Tagline */}
                  <h3 className="text-xl font-bold text-white font-['Outfit'] tracking-tight group-hover:text-cyan-200 transition-colors mb-2 leading-snug">
                    {career.title}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed mb-4">
                    {career.shortDesc}
                  </p>

                  {/* Growth Outlook & Compensation Pill */}
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2 mb-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400 flex items-center gap-1 font-mono">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                        Growth Outlook:
                      </span>
                      <span className="text-emerald-300 font-semibold font-mono text-[11px]">
                        {career.growthOutlook}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400 font-mono">Comp Range:</span>
                      <span className="text-gray-200 font-medium font-mono text-[11px]">
                        {career.avgStartingSalary}
                      </span>
                    </div>
                  </div>

                  {/* Key Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {career.technologiesUsed.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 rounded-lg bg-black/40 border border-white/10 text-gray-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {career.technologiesUsed.length > 4 && (
                      <span className="text-[11px] px-2 py-0.5 rounded-lg bg-black/40 text-gray-500 font-mono">
                        +{career.technologiesUsed.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Explore Profile & Roadmap</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  {/* Stream suitability tags */}
                  <span className="text-[10px] font-mono text-gray-500">
                    {career.streamFit[0]}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredCareers.length === 0 && (
        <div className="text-center py-16 glass-panel rounded-3xl border border-white/10">
          <Compass className="w-12 h-12 text-gray-500 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">No careers found matching your criteria</h3>
          <p className="text-sm text-gray-400 mb-4">
            Try adjusting your search query, stream, or education level filters.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedLevel('All');
              setSelectedStream('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl bg-cyan-500 text-gray-950 font-bold text-xs"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </section>
  );
};
