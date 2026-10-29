import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-slate-950/85 dark:bg-[#07090e]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 py-3 shadow-lg shadow-black/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
          >
            <span className="w-2.5 h-2.5 rounded-sm bg-amber-500 group-hover:scale-110 transition-transform" />
            <span>RIASAT ALI</span>
            <span className="text-xs font-mono font-normal text-slate-500 dark:text-slate-400">/ DA</span>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-amber-500 dark:hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded ${
                    isActive ? 'text-amber-600 dark:text-amber-400 font-semibold' : ''
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action + theme toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <ThemeToggle />

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 whitespace-nowrap shrink-0"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 dark:bg-[#07090e]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-amber-500/10 text-amber-400 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-amber-500 text-slate-950"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-xs font-mono text-slate-400">Data Analyst Portfolio</span>
          </div>
        </div>
      )}
    </header>
  );
};
