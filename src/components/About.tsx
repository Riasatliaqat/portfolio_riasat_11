import React, { useState } from 'react';
import { Database, FileCode2, Sheet, BarChart2, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import { siteConfig } from '../data/site';

const stepIcons = [Database, FileCode2, Sheet, BarChart2, Lightbulb];

export const About: React.FC = () => {
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState<number>(0);

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-950/60 dark:bg-[#07090e]/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-medium text-amber-500 uppercase tracking-wider mb-2">
            01. Background & Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            End-to-End Analytics & Decision-Ready Reporting
          </h2>
        </div>

        {/* About Summary & Core Philosophy */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {siteConfig.aboutSummary}
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300">
              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="font-semibold text-white mb-1 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                  <span>Full-Cycle Ownership</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Bridging the gap between raw database tables, automated cleansing scripts, and intuitive executive dashboards.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="font-semibold text-white mb-1 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                  <span>AI-Assisted Workflow</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Leveraging modern AI-assisted summaries to synthesize narrative insights from complex operational datasets.
                </p>
              </div>
            </div>
          </div>

          {/* Quick facts card */}
          <div className="lg:col-span-5 p-6 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              Analytical Focus
            </div>
            <div className="space-y-4">
              <div className="border-b border-slate-800/80 pb-3">
                <span className="text-xs text-slate-400 block">Primary Specialization</span>
                <span className="text-sm font-semibold text-white">Data Cleansing, Dimensional Modelling & Dashboards</span>
              </div>
              <div className="border-b border-slate-800/80 pb-3">
                <span className="text-xs text-slate-400 block">Core Toolset</span>
                <span className="text-sm font-semibold text-amber-400 font-mono">Python · Power BI · Excel · SQL</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Academic Foundation</span>
                <span className="text-sm font-semibold text-white">BS Computer Science (2022–2026), CGPA 3.1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Workflow Strip: SQL → Python → Power Query → Power BI → Insights */}
        <div className="mt-16 pt-12 border-t border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                Data Pipeline Architecture
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                The End-to-End Analytical Workflow
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              A disciplined, reproducible pipeline turning raw transactional data into high-conviction decision support.
            </p>
          </div>

          {/* Workflow Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            {siteConfig.workflow.map((item, idx) => {
              const Icon = stepIcons[idx % stepIcons.length];
              const isSelected = activeWorkflowIndex === idx;

              return (
                <button
                  key={item.step}
                  onClick={() => setActiveWorkflowIndex(idx)}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                    isSelected
                      ? 'bg-slate-900 border-amber-500/80 shadow-lg shadow-amber-500/10'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  {/* Step number badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-slate-400">
                      0{item.step}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                  </div>

                  <div className="font-semibold text-sm text-white mb-1">
                    {item.tool}
                  </div>
                  <div className="text-xs text-amber-400/90 font-mono mb-2">
                    {item.action}
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Arrow to next item (hidden on last and on mobile) */}
                  {idx < siteConfig.workflow.length - 1 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Workflow Step Detailed Inspector */}
          <div className="mt-4 p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 font-mono font-bold">
                0{siteConfig.workflow[activeWorkflowIndex].step}
              </div>
              <div>
                <div className="text-sm font-semibold text-white flex items-center gap-2">
                  <span>{siteConfig.workflow[activeWorkflowIndex].name}</span>
                  <span className="text-xs font-mono text-amber-400">({siteConfig.workflow[activeWorkflowIndex].action})</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {siteConfig.workflow[activeWorkflowIndex].description}
                </div>
              </div>
            </div>
            <div className="text-xs font-mono text-slate-500 whitespace-nowrap">
              Active Stage {activeWorkflowIndex + 1} of 5
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
