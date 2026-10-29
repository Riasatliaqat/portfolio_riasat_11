import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { siteConfig } from '../data/site';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 dark:bg-[#07090e] border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand info */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-bold text-white tracking-tight text-sm">
              RIASAT ALI
            </span>
            <span className="hidden sm:inline text-slate-700">·</span>
            <span className="text-slate-400 font-mono text-[11px]">
              Data Analyst (Python · Power BI · Excel · SQL)
            </span>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 font-medium">
            <a href="#about" className="hover:text-amber-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">
              Projects
            </a>
            <a href="#education" className="hover:text-amber-400 transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors text-xs font-mono"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              <Mail className="w-3 h-3 text-amber-500" />
              <span>{siteConfig.email}</span>
            </a>
            <span>·</span>
            <span className="text-slate-400 font-mono">Decision-Ready Insights</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
