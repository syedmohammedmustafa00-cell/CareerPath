import React, { useState } from 'react';
import type { StudentProfile, CareerItem } from '../types';
import { 
  User, 
  X, 
  GraduationCap, 
  Sparkles, 
  Award, 
  FolderGit2, 
  Target, 
  Edit3, 
  Check, 
  ShieldCheck,
  Compass
} from 'lucide-react';

interface StudentProfileModalProps {
  profile: StudentProfile;
  savedCareers: CareerItem[];
  onUpdateProfile: (updated: Partial<StudentProfile>) => void;
  onClose: () => void;
}

export const StudentProfileModal: React.FC<StudentProfileModalProps> = ({
  profile,
  savedCareers,
  onUpdateProfile,
  onClose
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(profile.name);
  const [schoolOrCollege, setSchoolOrCollege] = useState(profile.schoolOrCollege);
  const [stream, setStream] = useState(profile.stream);
  const [newGoal, setNewGoal] = useState('');

  const handleSave = () => {
    onUpdateProfile({
      name,
      schoolOrCollege,
      stream
    });
    setIsEditing(false);
  };

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGoal.trim()) return;
    onUpdateProfile({
      targetGoals: [...profile.targetGoals, newGoal.trim()]
    });
    setNewGoal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-gray-950/85 backdrop-blur-2xl animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl my-auto rounded-3xl glass-panel-glow border border-cyan-500/40 shadow-2xl p-6 sm:p-10 max-h-[92vh] overflow-y-auto scrollbar-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-600 to-purple-600 flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-cyan-500/25">
              <User className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                  {isEditing ? (
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-gray-900 border border-cyan-400 px-2 py-0.5 rounded text-white text-lg"
                    />
                  ) : (
                    profile.name
                  )}
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                  {profile.educationLevel}
                </span>
              </div>
              <p className="text-xs text-gray-400 font-mono mt-0.5">
                {profile.schoolOrCollege} • {profile.stream}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="px-3 py-1.5 rounded-xl bg-cyan-500 text-gray-950 font-bold text-xs flex items-center gap-1 cursor-pointer"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Save</span>
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 cursor-pointer text-xs flex items-center gap-1"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Edit Profile</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Profile Content Body */}
        <div className="space-y-6">
          {/* Key Traits & Strengths */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-xs font-mono uppercase text-emerald-400 font-bold mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Strong / Core Competencies</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {profile.strongSkills.map((sk) => (
                  <span key={sk} className="text-xs px-2.5 py-1 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-xs font-mono uppercase text-cyan-400 font-bold mb-2 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Skills Currently Developing</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {profile.developingSkills.map((sk) => (
                  <span key={sk} className="text-xs px-2.5 py-1 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-200">
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Careers In Exploration Radar */}
          <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
            <div className="text-xs font-mono uppercase text-purple-400 font-bold mb-3 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>Target Career Areas Exploring ({savedCareers.length})</span>
            </div>
            {savedCareers.length === 0 ? (
              <p className="text-xs text-gray-500 font-mono">
                No careers bookmarked yet. Explore the catalogue to pin domains to your radar.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {savedCareers.map((c) => (
                  <div key={c.id} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-cyan-400 uppercase">{c.category}</div>
                      <div className="text-xs font-bold text-white mt-0.5">{c.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Target Milestone Goals */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-xs font-mono uppercase text-amber-400 font-bold mb-3 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5" />
              <span>Target Student Goals</span>
            </div>
            <ul className="space-y-2 mb-4">
              {profile.targetGoals.map((goal, i) => (
                <li key={i} className="text-xs sm:text-sm text-gray-300 flex items-center gap-2 bg-black/30 p-2.5 rounded-xl border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>

            {/* Add new goal input */}
            <form onSubmit={handleAddGoal} className="flex gap-2">
              <input
                type="text"
                value={newGoal}
                onChange={(e) => setNewGoal(e.target.value)}
                placeholder="Add a new milestone goal (e.g. Build an open source tool, score 95% in Math)..."
                className="flex-1 py-2 px-3 rounded-xl bg-gray-900 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 text-xs font-bold cursor-pointer"
              >
                Add Goal
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
