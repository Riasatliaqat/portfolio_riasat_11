import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';
import { siteConfig } from '../data/site';

export const Education: React.FC = () => {
  const { education } = siteConfig;

  return (
    <section id="education" className="py-20 lg:py-28 bg-slate-950/60 dark:bg-[#07090e]/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl pb-10 border-b border-slate-800">
          <div className="text-xs font-mono font-medium text-amber-500 uppercase tracking-wider mb-2">
            04. Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education & Theoretical Foundation
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Rigorous computing curriculum providing the computer science theory and database engineering fundamentals behind modern analytics.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="mt-12 max-w-4xl">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-12">
            {/* Timeline Node */}
            <div className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-amber-500 ring-4 ring-slate-950" />

              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/90 group-hover:border-slate-700 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {education.degree}
                      </h3>
                      <div className="text-sm font-medium text-amber-400">
                        {education.institution}
                      </div>
                    </div>
                  </div>

                  {/* Period & CGPA Badges */}
                  <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{education.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      <Award className="w-3.5 h-3.5" />
                      <span>CGPA {education.cgpa}</span>
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-5">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>{education.location}</span>
                </div>

                {/* Highlights */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 uppercase tracking-wide">
                    <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                    <span>Academic Highlights & Coursework</span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                    {education.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-1">•</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
