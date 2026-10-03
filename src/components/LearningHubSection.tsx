import React, { useState, useMemo } from 'react';
import type { LearningResource, CareerCategory, EducationLevel } from '../types';
import { 
  BookOpen, 
  Search, 
  ExternalLink, 
  Star, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  SlidersHorizontal,
  Bookmark
} from 'lucide-react';

interface LearningHubSectionProps {
  resources: LearningResource[];
}

export const LearningHubSection: React.FC<LearningHubSectionProps> = ({ resources }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');
  const [selectedFormat, setSelectedFormat] = useState<string>('All');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  const formats = ['All', 'Interactive Course', 'Hands-on Lab', 'Video Track', 'Project Sandbox'];

  const toggleBookmark = (id: string) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter(b => b !== id));
    } else {
      setBookmarkedIds([...bookmarkedIds, id]);
    }
  };

  const filteredResources = useMemo(() => {
    return resources.filter((res) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = res.title.toLowerCase().includes(q);
        const matchesProvider = res.provider.toLowerCase().includes(q);
        const matchesSkill = res.skill.toLowerCase().includes(q);
        const matchesTopic = res.topic.toLowerCase().includes(q);
        if (!matchesTitle && !matchesProvider && !matchesSkill && !matchesTopic) return false;
      }

      if (selectedDifficulty !== 'All' && res.difficulty !== selectedDifficulty) return false;
      if (selectedFormat !== 'All' && res.format !== selectedFormat) return false;

      return true;
    });
  }, [resources, searchQuery, selectedDifficulty, selectedFormat]);

  return (
    <section className="relative py-24 px-4 max-w-7xl mx-auto" id="learning-hub">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Curated Learning Marketplace</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] mb-4">
          Curated Learning Tracks.
        </h2>
        <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
          Skip generic search engine clutter. Access verified, world-class curricula from Harvard, Fast.ai, MIT, and TU Delft tailored directly to future careers.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-panel p-6 rounded-3xl border border-white/10 mb-8 shadow-xl">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Search bar */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic (e.g. Computer Vision, Quantum, Full Stack, Anatomy)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-gray-900/80 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Difficulty Filter */}
          <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1">
            {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-3 py-2 rounded-xl text-xs font-medium cursor-pointer transition-all ${
                  selectedDifficulty === diff
                    ? 'bg-cyan-500 text-gray-950 font-bold'
                    : 'bg-white/5 text-gray-300 hover:text-white'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        {/* Format selector pills */}
        <div className="flex items-center gap-2 overflow-x-auto pt-4 border-t border-white/10 mt-4">
          <span className="text-xs font-mono text-gray-400 uppercase">Format:</span>
          {formats.map((fmt) => (
            <button
              key={fmt}
              onClick={() => setSelectedFormat(fmt)}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap cursor-pointer transition-all ${
                selectedFormat === fmt
                  ? 'bg-purple-500 text-white font-bold shadow-md shadow-purple-500/25'
                  : 'glass-pill text-gray-400 hover:text-white'
              }`}
            >
              {fmt}
            </button>
          ))}
        </div>
      </div>

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((res) => {
          const isBookmarked = bookmarkedIds.includes(res.id);

          return (
            <div
              key={res.id}
              className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Header: Provider & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-cyan-400 font-semibold uppercase">
                    {res.provider}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 border border-white/5 text-gray-300">
                      {res.difficulty}
                    </span>
                    <button
                      onClick={() => toggleBookmark(res.id)}
                      className="text-gray-400 hover:text-cyan-400 cursor-pointer"
                      title="Save Resource"
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-cyan-400 text-cyan-400' : ''}`} />
                    </button>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white font-['Outfit'] mb-2 group-hover:text-cyan-200 transition-colors">
                  {res.title}
                </h3>

                <p className="text-xs text-gray-400 font-mono mb-3">
                  Topic: <span className="text-gray-200">{res.topic}</span>
                </p>

                {/* Why It Helps */}
                <div className="p-3.5 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 mb-4">
                  <div className="text-[10px] font-mono uppercase font-bold text-cyan-300 mb-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>Why This Curriculum Helps</span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-light">
                    {res.whyItHelps}
                  </p>
                </div>
              </div>

              {/* Card Footer: Metadata & Launch Link */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-gray-400 font-mono text-[11px]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{res.estimatedTime}</span>
                </div>

                <a
                  href={res.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-semibold flex items-center gap-1.5 border border-cyan-400/30 transition-all cursor-pointer"
                >
                  <span>Launch Track</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
