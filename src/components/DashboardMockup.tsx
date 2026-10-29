import React from 'react';
import { BarChart3, Database, FileSpreadsheet, Sparkles, TrendingUp, CheckCircle2, Clock } from 'lucide-react';

interface DashboardMockupProps {
  type: 'attendance' | 'events' | 'ecommerce' | 'election' | 'social' | 'toolkit';
  className?: string;
  isFeatured?: boolean;
}

export const DashboardMockup: React.FC<DashboardMockupProps> = ({
  type,
  className = '',
  isFeatured = false,
}) => {
  return (
    <div
      className={`relative w-full rounded-xl overflow-hidden border border-slate-700/50 bg-slate-900/90 shadow-2xl p-4 sm:p-5 select-none ${className}`}
      aria-label="Abstract analytical dashboard visualization"
    >
      {/* Dashboard Top Header Bar */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <span className="text-slate-400 font-mono text-[11px] ml-1">
            {type === 'attendance' && 'Report // Attendance & Requests'}
            {type === 'events' && 'Report // Event Participation'}
            {type === 'ecommerce' && 'Report // Sales & Customer Funnel'}
            {type === 'election' && 'Report // Election Vote-Share'}
            {type === 'social' && 'Report // Engagement Timeseries'}
            {type === 'toolkit' && 'Pipeline // ETL & Automation'}
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-slate-500 font-mono text-[10px]">
          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">Power BI Engine</span>
          <span>Verified Schema</span>
        </div>
      </div>

      {/* Abstract Analytical Widgets */}
      {type === 'attendance' && (
        <div className="space-y-4">
          {/* Top KPI tiles (Abstract geometry, no fake numbers) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
              <span className="text-[10px] text-slate-400 block mb-1">Attendance Trend</span>
              <div className="h-2 w-16 bg-amber-400/80 rounded" />
              <div className="mt-2 h-1 w-full bg-slate-700/50 rounded overflow-hidden">
                <div className="h-full bg-amber-400/80 w-3/4 rounded" />
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
              <span className="text-[10px] text-slate-400 block mb-1">Request Status</span>
              <div className="flex items-center gap-1.5 mt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <div className="h-2 w-12 bg-emerald-400/80 rounded" />
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
              <span className="text-[10px] text-slate-400 block mb-1">Turnaround Track</span>
              <div className="flex items-center gap-1.5 mt-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <div className="h-2 w-14 bg-amber-400/70 rounded" />
              </div>
            </div>
          </div>

          {/* Abstract Chart & AI Summary Split */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-2 p-3 rounded-lg bg-slate-800/40 border border-slate-700/40">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-medium text-slate-300">Departmental Attendance Distribution</span>
                <span className="text-[9px] font-mono text-slate-500">AGGREGATION VIEW</span>
              </div>
              {/* Abstract Bar Chart */}
              <div className="h-24 sm:h-28 flex items-end justify-between gap-1.5 pt-4">
                {[65, 82, 48, 90, 72, 85, 60, 94].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full rounded-t transition-all duration-500 bg-gradient-to-t from-slate-700 to-amber-400/80 hover:to-amber-300"
                      style={{ height: `${height}%` }}
                    />
                    <div className="w-2 h-1 bg-slate-700 rounded-full" />
                  </div>
                ))}
              </div>
            </div>

            {/* AI-Assisted Summary Card */}
            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-2 text-amber-300 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Summary</span>
                </div>
                <div className="space-y-1.5 text-[11px] text-slate-300 leading-relaxed">
                  <div className="h-2 bg-amber-300/30 rounded w-full" />
                  <div className="h-2 bg-amber-300/20 rounded w-5/6" />
                  <div className="h-2 bg-amber-300/25 rounded w-4/5" />
                  <div className="h-2 bg-amber-300/15 rounded w-2/3" />
                </div>
              </div>
              <div className="pt-2 border-t border-amber-500/20 text-[10px] text-amber-400/80 font-mono">
                Automated Insights Active
              </div>
            </div>
          </div>
        </div>
      )}

      {type === 'events' && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/40">
              <span className="text-[10px] text-slate-400 block mb-2">Registered vs Attended Ratio</span>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                    <span>Registered Attendees</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-400 w-4/5 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] text-amber-300 mb-1">
                    <span>Confirmed Turnout</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 w-3/5 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/40">
              <span className="text-[10px] text-slate-400 block mb-2">Category Breakdown</span>
              <div className="h-20 flex items-end gap-2">
                {[40, 75, 55, 90, 65].map((h, i) => (
                  <div key={i} className="flex-1 bg-slate-700 hover:bg-amber-400/70 rounded-t" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-800/20 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Power Query ETL Stream: Multi-Sheet Consolidator</span>
            <span className="font-mono text-[10px] text-amber-400">Auto-Refreshed</span>
          </div>
        </div>
      )}

      {type === 'ecommerce' && (
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2.5 rounded bg-slate-800/50 border border-slate-700/40">
              <span className="text-[10px] text-slate-400 block">Revenue Momentum</span>
              <div className="h-2 w-14 bg-amber-400 rounded mt-1" />
            </div>
            <div className="p-2.5 rounded bg-slate-800/50 border border-slate-700/40">
              <span className="text-[10px] text-slate-400 block">Avg Order Value (AOV)</span>
              <div className="h-2 w-12 bg-slate-300 rounded mt-1" />
            </div>
            <div className="p-2.5 rounded bg-slate-800/50 border border-slate-700/40">
              <span className="text-[10px] text-slate-400 block">Cart-to-Checkout</span>
              <div className="h-2 w-16 bg-amber-400/80 rounded mt-1" />
            </div>
          </div>
          <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/40">
            <span className="text-[10px] text-slate-400 block mb-2">Conversion Funnel & Drop-off Flow</span>
            <div className="space-y-1.5">
              <div className="h-4 bg-slate-700 rounded w-full flex items-center px-2 text-[10px] text-slate-300">Sessions</div>
              <div className="h-4 bg-slate-700/80 rounded w-4/5 flex items-center px-2 text-[10px] text-slate-300">Cart Adds</div>
              <div className="h-4 bg-amber-500/70 rounded w-3/5 flex items-center px-2 text-[10px] text-slate-900 font-medium">Checkout Flow</div>
              <div className="h-4 bg-amber-400 rounded w-2/5 flex items-center px-2 text-[10px] text-slate-950 font-bold">Purchases</div>
            </div>
          </div>
        </div>
      )}

      {type === 'election' && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded bg-slate-800/40 border border-slate-700/40">
              <span className="text-[10px] text-slate-400 block mb-2">GR Candidate Vote-Share</span>
              <div className="h-20 flex items-end gap-2">
                <div className="flex-1 bg-amber-400 rounded-t" style={{ height: '80%' }} />
                <div className="flex-1 bg-slate-600 rounded-t" style={{ height: '62%' }} />
                <div className="flex-1 bg-slate-700 rounded-t" style={{ height: '35%' }} />
              </div>
            </div>
            <div className="p-3 rounded bg-slate-800/40 border border-slate-700/40">
              <span className="text-[10px] text-slate-400 block mb-2">Turnout by Department</span>
              <div className="space-y-2 pt-1">
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 w-5/6" />
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-400 w-3/4" />
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-500 w-2/3" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 rounded bg-slate-800/30 border border-slate-800 text-[10px] text-slate-400 font-mono">
            Integrity check: zero duplicate ballots, verified SQL constraint schema
          </div>
        </div>
      )}

      {type === 'social' && (
        <div className="space-y-3">
          <div className="p-3 rounded bg-slate-800/40 border border-slate-700/40">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-slate-400">Peak Engagement Timeseries</span>
              <span className="text-[9px] font-mono text-amber-400">Matplotlib Curve</span>
            </div>
            {/* Smooth SVG analytical wave curve */}
            <svg viewBox="0 0 400 100" className="w-full h-20 overflow-visible" aria-hidden="true">
              <path
                d="M0,80 Q50,90 100,50 T200,30 T300,60 T400,20 L400,100 L0,100 Z"
                fill="url(#amber-gradient)"
                opacity="0.3"
              />
              <path
                d="M0,80 Q50,90 100,50 T200,30 T300,60 T400,20"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="amber-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400">
            <div className="p-2 rounded bg-slate-800/30 border border-slate-800">
              Optimal Posting Windows Isolated
            </div>
            <div className="p-2 rounded bg-slate-800/30 border border-slate-800">
              Interaction Rate Normalization
            </div>
          </div>
        </div>
      )}

      {type === 'toolkit' && (
        <div className="space-y-3">
          <div className="p-3 rounded bg-slate-800/40 border border-slate-700/40">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-slate-400">20+ Automation Routines Matrix</span>
              <span className="text-[9px] font-mono text-amber-400">Python + Power Query</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-1">
              {['Deduplication', 'Multi-file Merge', 'Schema Alignment', 'Text Normalize', 'Auto Pivot', 'PDF to Excel'].map((item, idx) => (
                <div key={idx} className="p-1.5 rounded bg-slate-800/60 border border-slate-700/30 text-[10px] text-slate-300 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between p-2 rounded bg-slate-800/20 text-[10px] text-slate-400 font-mono">
            <span>openpyxl & pandas batch engine</span>
            <span className="text-emerald-400">Reusable Modules</span>
          </div>
        </div>
      )}

      {/* Decorative hairline corner accents */}
      <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-2 h-2 bg-amber-400/30" />
      </div>
    </div>
  );
};
