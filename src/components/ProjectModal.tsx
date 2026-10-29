import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Github, Layers, Target, Database, Cpu, CheckCircle2, Copy, Check, BarChart2 } from 'lucide-react';
import { Project } from '../types';
import { DashboardMockup } from './DashboardMockup';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'details' | 'preview'>('details');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const copyShareLink = () => {
    const url = `${window.location.origin}#projects`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto z-10 flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-slate-800 bg-slate-900/95 sticky top-0 z-20">
          <div className="space-y-1 pr-6">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-amber-400 font-semibold">{project.category}</span>
              <span>·</span>
              <span>Case Study</span>
              {project.featured && (
                <>
                  <span>·</span>
                  <span className="text-amber-300 font-semibold">Featured Project</span>
                </>
              )}
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* View Mode Tabs */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-slate-950/40 border-b border-slate-800 text-xs font-medium">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('details')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'details'
                  ? 'bg-slate-800 text-amber-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Project Architecture
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'preview'
                  ? 'bg-slate-800 text-amber-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Dashboard Visual
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyShareLink}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-slate-400 hover:text-slate-200 bg-slate-800/60 hover:bg-slate-800 transition-colors font-mono text-[11px]"
              title="Copy link to project"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm">
          {activeTab === 'preview' ? (
            <div className="space-y-4">
              {project.embedUrl ? (
                <div className="aspect-video w-full rounded-xl overflow-hidden border border-slate-700 bg-slate-950">
                  <iframe
                    src={project.embedUrl}
                    title={project.title}
                    className="w-full h-full border-0"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="space-y-3">
                  <DashboardMockup type={project.mockupType} />
                  <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                    <span>Abstract visual frame (Zero fabricated numbers). Replaceable via <code>/data/projects.ts</code>.</span>
                    <span className="font-mono text-amber-400">Embed Ready</span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Tool Badges */}
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-2">Technologies Used:</span>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-800 text-amber-300 border border-slate-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Structured 5-Part Breakdown: Problem/Goal → Data → Approach → Tools → Output */}
              <div className="space-y-4">
                {/* 1. Problem / Goal */}
                <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold mb-1.5 text-xs font-mono uppercase tracking-wide">
                    <Target className="w-4 h-4" />
                    <span>Problem & Goal</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {project.details.problemGoal}
                  </p>
                </div>

                {/* 2. Data */}
                <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold mb-1.5 text-xs font-mono uppercase tracking-wide">
                    <Database className="w-4 h-4" />
                    <span>Data Sources & Structure</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {project.details.data}
                  </p>
                </div>

                {/* 3. Approach */}
                <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold mb-1.5 text-xs font-mono uppercase tracking-wide">
                    <Cpu className="w-4 h-4" />
                    <span>Approach & Transformation</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {project.details.approach}
                  </p>
                </div>

                {/* 4. Tools */}
                <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold mb-1.5 text-xs font-mono uppercase tracking-wide">
                    <Layers className="w-4 h-4" />
                    <span>Core Tools</span>
                  </div>
                  <p className="text-slate-300 font-mono text-xs">
                    {project.details.tools}
                  </p>
                </div>

                {/* 5. Output */}
                <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold mb-1.5 text-xs font-mono uppercase tracking-wide">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Output & Deliverables</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {project.details.output}
                  </p>
                </div>

                {/* Key Highlights list if available */}
                {project.details.keyHighlights && project.details.keyHighlights.length > 0 && (
                  <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-wide block mb-2 font-semibold">
                      Key Highlights
                    </span>
                    <ul className="space-y-1.5 text-slate-300 text-xs">
                      {project.details.keyHighlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-400 font-bold mt-0.5">•</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-400 text-xs">
            Repository & Live Links (Placeholders):
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl || '#'}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors font-medium"
              title="GitHub Repository (Placeholder)"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>

            <a
              href={project.liveUrl || '#'}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold transition-colors"
              title="Live Power BI Report (Placeholder)"
            >
              <span>Live Dashboard</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
