import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Sparkles, ArrowRight, LayoutGrid, Filter } from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../types';
import { DashboardMockup } from './DashboardMockup';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'End-to-End', 'Business Analytics', 'Reporting', 'Automation'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const gridProjects = filteredProjects.filter((p) => !p.featured || selectedCategory !== 'All');

  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-950 dark:bg-[#07090e] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="text-xs font-mono font-medium text-amber-500 uppercase tracking-wider mb-2">
              03. Selected Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Data Analytics & BI Projects
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-xl">
              End-to-end analytical implementations bridging SQL databases, automated Python scripts, and interactive Power BI reports.
            </p>
          </div>

          {/* Interactive Filter Tabs (Button Segmented Controls) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project Card (Only when All or End-to-End is active) */}
        {selectedCategory === 'All' && (
          <div className="mt-10 mb-12">
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Featured Highlight</span>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 shadow-xl shadow-amber-500/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Details & Pitch */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span>{featuredProject.category}</span>
                  <span>·</span>
                  <span className="text-amber-400">Python · SQL · Power BI</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {featuredProject.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {featuredProject.shortDescription}
                </p>

                {/* Key architectural highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  {featuredProject.details.keyHighlights?.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Tool Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-slate-800 text-amber-300 border border-slate-700/80"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setActiveModalProject(featuredProject)}
                    className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wide transition-colors flex items-center gap-2"
                  >
                    <span>View Architecture & Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={featuredProject.liveUrl || '#'}
                    className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-xs transition-colors flex items-center gap-1.5"
                    title="Live Dashboard Preview (Placeholder)"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Dashboard</span>
                  </a>

                  <a
                    href={featuredProject.githubUrl || '#'}
                    className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
                    aria-label="GitHub Repository"
                    title="GitHub Repository (Placeholder)"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Dashboard Visual */}
              <div className="lg:col-span-6 cursor-pointer" onClick={() => setActiveModalProject(featuredProject)}>
                <DashboardMockup type={featuredProject.mockupType} isFeatured={true} />
              </div>
            </div>
          </div>
        )}

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-6 rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 hover:bg-slate-900 transition-all duration-200 group"
            >
              <div>
                {/* Visual Thumbnail */}
                <div
                  className="mb-4 rounded-lg overflow-hidden border border-slate-800 cursor-pointer group-hover:border-slate-700 transition-colors"
                  onClick={() => setActiveModalProject(project)}
                >
                  <DashboardMockup type={project.mockupType} />
                </div>

                {/* Metadata */}
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                  <span className="text-amber-400">{project.category}</span>
                  <span>·</span>
                  <span>Analytics</span>
                </div>

                <h3
                  className="text-lg font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors cursor-pointer mb-2"
                  onClick={() => setActiveModalProject(project)}
                >
                  {project.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Tool tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2 text-xs">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 font-medium text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Case Study</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl || '#'}
                    className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    aria-label="GitHub Repository"
                    title="GitHub (Placeholder)"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={project.liveUrl || '#'}
                    className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-amber-400 transition-colors"
                    aria-label="Live Dashboard"
                    title="Live Dashboard (Placeholder)"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
