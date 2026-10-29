import React, { useState } from 'react';
import { Terminal, BarChart, FileSpreadsheet, Database, Cpu, Search, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/skills';

const iconMap = {
  python: Terminal,
  barChart: BarChart,
  sheet: FileSpreadsheet,
  database: Database,
  code: Cpu,
};

export const Skills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredCategories = skillCategories
    .map((cat) => {
      if (!searchTerm.trim()) return cat;
      const term = searchTerm.toLowerCase();
      const matchesCategory = cat.name.toLowerCase().includes(term);
      const matchingSkills = cat.skills.filter((s) => s.toLowerCase().includes(term));
      return {
        ...cat,
        skills: matchesCategory ? cat.skills : matchingSkills,
      };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 lg:py-28 bg-slate-950/40 dark:bg-[#07090e]/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-800">
          <div>
            <div className="text-xs font-mono font-medium text-amber-500 uppercase tracking-wider mb-2">
              02. Technical Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Core Toolkit & Methodologies
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-xl">
              Grounded in rigorous data extraction, cleaning pipelines, star schema modelling, and executive dashboards.
            </p>
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter skills (e.g. DAX, CTEs, pandas)..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Grouped Skill Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = iconMap[category.iconName] || Terminal;

            return (
              <div
                key={category.name}
                className="p-6 rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700/60 flex items-center justify-center text-amber-400 group-hover:border-amber-500/50 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white tracking-tight">
                          {category.name}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400">
                          {category.skills.length} core competencies
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Badges / Chips (No percentage bars) */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-800/80 text-slate-300 border border-slate-700/70 hover:border-amber-500/40 hover:text-amber-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Applied in projects</span>
                  <span className="text-amber-400/90">Hands-on Practice</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
