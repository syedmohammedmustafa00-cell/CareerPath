import React, { useState } from 'react';
import type { ExternalConnection } from '../types';
import { 
  FolderGit2, 
  ShieldCheck, 
  ExternalLink, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  Lock, 
  FileText,
  Unlink,
  Link
} from 'lucide-react';

interface ExternalConnectionsSectionProps {
  connections: ExternalConnection[];
  onToggleConnection: (connectionId: string) => void;
}

export const ExternalConnectionsSection: React.FC<ExternalConnectionsSectionProps> = ({
  connections,
  onToggleConnection
}) => {
  const [syncingId, setSyncingId] = useState<string | null>(null);

  const handleSync = (id: string) => {
    setSyncingId(id);
    setTimeout(() => {
      setSyncingId(null);
    }, 1200);
  };

  return (
    <section className="relative py-24 px-4 max-w-7xl mx-auto" id="external-connections">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
          <Lock className="w-3.5 h-3.5" />
          <span>Zero-Trust Privacy & External Sync</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] mb-4">
          Authorized Connections.
        </h2>
        <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
          Connect your GitHub, LinkedIn, or student resume with strict minimum necessary permissions. You control your data. Revoke access with a single click at any time.
        </p>
      </div>

      {/* Zero-Trust Transparency Banner */}
      <div className="glass-panel p-4 sm:p-5 rounded-3xl border border-cyan-500/30 mb-8 max-w-4xl mx-auto flex items-start gap-4 bg-cyan-950/20">
        <ShieldCheck className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
          <strong className="text-white">Strict Student Privacy Mandate: </strong>
          CareerPath 3D will never read your private code repositories, private emails, or passkeys. We only access public proof-of-work contributions to build your student portfolio.
        </div>
      </div>

      {/* Futuristic Connection Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {connections.map((conn) => {
          const isSyncing = syncingId === conn.id;

          return (
            <div
              key={conn.id}
              className={`p-6 sm:p-7 rounded-3xl transition-all duration-300 border flex flex-col justify-between shadow-xl ${
                conn.connected
                  ? 'glass-panel-glow border-cyan-400/50 bg-cyan-950/20'
                  : 'glass-panel border-white/10 opacity-80 hover:opacity-100'
              }`}
            >
              <div>
                {/* Header: Platform & Status */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white font-['Outfit'] flex items-center gap-2">
                    <span>{conn.name}</span>
                  </h3>

                  <div className="flex items-center gap-1.5">
                    {conn.connected ? (
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Connected</span>
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10">
                        Disconnected
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed font-light mb-4">
                  {conn.description}
                </p>

                {/* Profile Identity or Sync Status */}
                {conn.connected && (
                  <div className="p-3 rounded-2xl bg-black/40 border border-white/5 mb-4 text-xs font-mono">
                    <div className="text-gray-400 text-[10px] uppercase">Account Handle / File</div>
                    <div className="text-cyan-300 font-bold mt-0.5 truncate">{conn.profileIdentifier}</div>
                    {conn.lastSynced && (
                      <div className="text-gray-500 text-[10px] mt-1">
                        Last Synced: {conn.lastSynced}
                      </div>
                    )}
                  </div>
                )}

                {/* Why It Is Needed */}
                <div className="mb-4">
                  <div className="text-[10px] font-mono text-cyan-400 uppercase font-bold mb-1">
                    Why Needed:
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {conn.whyNeeded}
                  </p>
                </div>

                {/* Minimum Permissions Requested */}
                <div className="mb-6">
                  <div className="text-[10px] font-mono text-purple-300 uppercase font-bold mb-1.5">
                    Permissions Scoped:
                  </div>
                  <div className="space-y-1">
                    {conn.permissionsRequired.map((perm, i) => (
                      <div key={i} className="text-[11px] font-mono text-gray-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span>{perm}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Connect / Disconnect & Sync */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                {conn.connected ? (
                  <>
                    <button
                      onClick={() => handleSync(conn.id)}
                      disabled={isSyncing}
                      className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-cyan-300 font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-cyan-400' : ''}`} />
                      <span>{isSyncing ? 'Syncing...' : 'Sync Data'}</span>
                    </button>

                    <button
                      onClick={() => onToggleConnection(conn.id)}
                      className="px-3.5 py-2 rounded-xl bg-red-950/40 hover:bg-red-900/50 text-red-300 border border-red-500/30 text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer"
                    >
                      <Unlink className="w-3.5 h-3.5" />
                      <span>Revoke</span>
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => onToggleConnection(conn.id)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20 hover:scale-102 transition-all cursor-pointer"
                  >
                    <Link className="w-3.5 h-3.5" />
                    <span>Authorize {conn.name}</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
