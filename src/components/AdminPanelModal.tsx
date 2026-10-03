import React, { useState } from 'react';
import type { CareerItem, CareerCategory } from '../types';
import { 
  ShieldAlert, 
  X, 
  Plus, 
  Save, 
  Trash2, 
  Edit, 
  Check, 
  Sparkles, 
  Calendar, 
  FileText,
  Database
} from 'lucide-react';

interface AdminPanelModalProps {
  careers: CareerItem[];
  onUpdateCareer: (updatedCareer: CareerItem) => void;
  onAddCareer: (newCareer: CareerItem) => void;
  onClose: () => void;
}

export const AdminPanelModal: React.FC<AdminPanelModalProps> = ({
  careers,
  onUpdateCareer,
  onAddCareer,
  onClose
}) => {
  const [selectedCareerId, setSelectedCareerId] = useState<string>(careers[0]?.id || '');
  const selectedCareer = careers.find(c => c.id === selectedCareerId) || careers[0];

  const [editTitle, setEditTitle] = useState(selectedCareer?.title || '');
  const [editTagline, setEditTagline] = useState(selectedCareer?.tagline || '');
  const [editGrowth, setEditGrowth] = useState(selectedCareer?.growthOutlook || '');
  const [editSource, setEditSource] = useState(selectedCareer?.careerFuture.sourceInfo.sourceName || '');
  const [editPubDate, setEditPubDate] = useState(selectedCareer?.careerFuture.sourceInfo.publishDate || '');
  const [editVerifiedDate, setEditVerifiedDate] = useState(selectedCareer?.careerFuture.sourceInfo.verifiedDate || '');
  const [editToday, setEditToday] = useState(selectedCareer?.careerFuture.careerToday || '');
  const [editEvolution, setEditEvolution] = useState(selectedCareer?.careerFuture.careerEvolution || '');

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSelectCareer = (career: CareerItem) => {
    setSelectedCareerId(career.id);
    setEditTitle(career.title);
    setEditTagline(career.tagline);
    setEditGrowth(career.growthOutlook);
    setEditSource(career.careerFuture.sourceInfo.sourceName);
    setEditPubDate(career.careerFuture.sourceInfo.publishDate);
    setEditVerifiedDate(career.careerFuture.sourceInfo.verifiedDate);
    setEditToday(career.careerFuture.careerToday);
    setEditEvolution(career.careerFuture.careerEvolution);
  };

  const handleSaveCurrent = () => {
    if (!selectedCareer) return;

    const updated: CareerItem = {
      ...selectedCareer,
      title: editTitle,
      tagline: editTagline,
      growthOutlook: editGrowth,
      careerFuture: {
        ...selectedCareer.careerFuture,
        careerToday: editToday,
        careerEvolution: editEvolution,
        sourceInfo: {
          ...selectedCareer.careerFuture.sourceInfo,
          sourceName: editSource,
          publishDate: editPubDate,
          verifiedDate: editVerifiedDate
        }
      }
    };

    onUpdateCareer(updated);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-gray-950/90 backdrop-blur-2xl animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl my-auto rounded-3xl glass-panel-glow border border-cyan-500/40 shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto scrollbar-none flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-['Outfit']">
                CareerPath 3D — Admin & Content Management Console
              </h3>
              <p className="text-xs font-mono text-gray-400">
                Manage Careers, Future Trend Timelines, and Source Verification Citations
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

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
          {/* Left Column: Careers List */}
          <div className="lg:col-span-4 glass-panel p-4 rounded-2xl border border-white/10 space-y-2 max-h-[550px] overflow-y-auto scrollbar-none">
            <div className="text-xs font-mono uppercase text-gray-400 font-bold mb-3 flex items-center justify-between">
              <span>Select Career ({careers.length})</span>
            </div>

            {careers.map((c) => {
              const isSelected = c.id === selectedCareerId;
              return (
                <button
                  key={c.id}
                  onClick={() => handleSelectCareer(c)}
                  className={`w-full p-3 rounded-xl text-left transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-cyan-500/20 border-cyan-400 text-white font-bold'
                      : 'bg-white/[0.02] border-white/5 text-gray-300 hover:bg-white/5'
                  }`}
                >
                  <div className="text-[10px] font-mono text-cyan-400 uppercase">{c.category}</div>
                  <div className="text-xs font-semibold mt-0.5 truncate">{c.title}</div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Editor Form */}
          <div className="lg:col-span-8 glass-panel p-6 rounded-2xl border border-white/10 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-sm font-bold text-white font-['Outfit']">
                Editing: {selectedCareer?.title}
              </span>
              <button
                onClick={handleSaveCurrent}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-cyan-500/20 cursor-pointer hover:scale-105 transition-all"
              >
                {savedSuccess ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
                <span>{savedSuccess ? 'Saved to System' : 'Save Changes'}</span>
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="text-gray-400 font-mono uppercase mb-1 block">Career Title</label>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-gray-900 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-gray-400 font-mono uppercase mb-1 block">Tagline</label>
                <textarea
                  value={editTagline}
                  onChange={(e) => setEditTagline(e.target.value)}
                  rows={2}
                  className="w-full p-2.5 rounded-xl bg-gray-900 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-gray-400 font-mono uppercase mb-1 block">Growth Outlook Formula</label>
                <input
                  type="text"
                  value={editGrowth}
                  onChange={(e) => setEditGrowth(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-gray-900 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Source & Date Verification Box (Crucial Requirement) */}
              <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-3">
                <div className="text-[11px] font-mono text-cyan-300 font-bold uppercase flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Mandatory Source & Trend Verification Metadata</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-gray-400 text-[10px] font-mono uppercase mb-1 block">Source Organization</label>
                    <input
                      type="text"
                      value={editSource}
                      onChange={(e) => setEditSource(e.target.value)}
                      className="w-full p-2 rounded-lg bg-gray-900 border border-white/10 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-[10px] font-mono uppercase mb-1 block">Publication Period</label>
                    <input
                      type="text"
                      value={editPubDate}
                      onChange={(e) => setEditPubDate(e.target.value)}
                      className="w-full p-2 rounded-lg bg-gray-900 border border-white/10 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-[10px] font-mono uppercase mb-1 block">Last Verified Date</label>
                    <input
                      type="text"
                      value={editVerifiedDate}
                      onChange={(e) => setEditVerifiedDate(e.target.value)}
                      className="w-full p-2 rounded-lg bg-gray-900 border border-white/10 text-white text-xs"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-gray-400 font-mono uppercase mb-1 block">Career Today (Current Baseline)</label>
                <textarea
                  value={editToday}
                  onChange={(e) => setEditToday(e.target.value)}
                  rows={2}
                  className="w-full p-2.5 rounded-xl bg-gray-900 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-gray-400 font-mono uppercase mb-1 block">Career Evolution (5-10 Year Outlook)</label>
                <textarea
                  value={editEvolution}
                  onChange={(e) => setEditEvolution(e.target.value)}
                  rows={2}
                  className="w-full p-2.5 rounded-xl bg-gray-900 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
