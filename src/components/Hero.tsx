import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Github, Linkedin, ArrowDown, ExternalLink, Terminal } from 'lucide-react';
import { siteConfig } from '../data/site';
import { DashboardMockup } from './DashboardMockup';

// Hook for count-up animation
function useCountUp(end: number, duration: number = 1500, startOnView: boolean = true) {
  const [count, setCount] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number | null = null;
    let frameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [end, duration, hasStarted]);

  return { count, ref: elementRef };
}

const StatTile: React.FC<{ value: number; suffix?: string; label: string; sublabel: string }> = ({
  value,
  suffix = '',
  label,
  sublabel,
}) => {
  const { count, ref } = useCountUp(value, 1800);

  return (
    <div
      ref={ref}
      className="p-5 sm:p-6 rounded-xl bg-slate-900/60 dark:bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 backdrop-blur-sm group"
    >
      <div className="flex items-baseline gap-1">
        <span className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-mono tabular-nums group-hover:text-amber-400 transition-colors">
          {count}
        </span>
        {suffix && (
          <span className="text-2xl sm:text-3xl font-bold text-amber-500 font-mono">
            {suffix}
          </span>
        )}
      </div>
      <div className="mt-2 text-sm font-semibold text-slate-200 dark:text-slate-100 tracking-tight">
        {label}
      </div>
      <div className="mt-0.5 text-xs text-slate-400 dark:text-slate-400">
        {sublabel}
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState<number>(0);
  const [displayText, setDisplayText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [typingSpeed, setTypingSpeed] = useState<number>(100);

  // Cycling titles typing effect
  useEffect(() => {
    const currentTitle = siteConfig.titles[titleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentTitle.length) {
          // Pause before deleting
          setTypingSpeed(2000);
          setIsDeleting(true);
        } else {
          setTypingSpeed(80);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % siteConfig.titles.length);
          setTypingSpeed(300);
        } else {
          setTypingSpeed(40);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, typingSpeed]);

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden bg-analytics-grid">
      {/* Decorative decorative chart-line grid background (aria-hidden) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-30 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute -top-1/4 left-1/4 w-[1000px] h-[600px] text-amber-500/10"
          viewBox="0 0 1000 600"
          fill="none"
        >
          <path
            d="M-100,500 C150,420 300,550 550,300 C800,50 950,220 1200,80"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <path
            d="M-50,560 C200,490 350,580 600,340 C850,100 1000,260 1250,130"
            stroke="currentColor"
            strokeWidth="1"
          />
          <defs>
            <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="550" cy="300" r="300" fill="url(#hero-glow)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Hero: Left typography & CTAs, Right Dashboard Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[480px]">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Domain-authentic kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 font-mono">
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              <span>Data Analyst Portfolio</span>
              <span className="text-slate-600">·</span>
              <span className="text-amber-400">Python · Power BI · Excel · SQL</span>
            </div>

            {/* Name & Animated Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
                {siteConfig.name}
              </h1>

              {/* Typing Animation Cycling */}
              <div className="mt-3 flex items-center h-10 sm:h-12">
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-amber-400 font-mono">
                  {displayText}
                </span>
                <span className="inline-block w-2 sm:w-2.5 h-6 sm:h-8 ml-1.5 bg-amber-400 animate-pulse" />
              </div>
            </div>

            {/* One-line Pitch */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 max-w-2xl leading-relaxed">
              {siteConfig.pitch}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                Contact Me
              </a>
            </div>

            {/* Contact links / Icons */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono border-t border-slate-800/80">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
                title="Email Riasat Ali"
              >
                <Mail className="w-4 h-4 text-amber-500" />
                <span>{siteConfig.email}</span>
              </a>

              <span className="text-slate-700 hidden sm:inline">|</span>

              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
                title="Call Riasat Ali"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>{siteConfig.phone}</span>
              </a>

              <span className="text-slate-700 hidden sm:inline">|</span>

              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.github}
                  className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-amber-400 transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub (Placeholder)"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.linkedin}
                  className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-amber-400 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn (Placeholder)"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Dashboard Anchor (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-amber-600/10 rounded-2xl blur-xl opacity-50" />
              <DashboardMockup type="attendance" isFeatured={true} />
            </div>
          </div>
        </div>

        {/* Full-width KPI Strip below the split (as specified in Frontend Design guidelines) */}
        <div className="mt-16 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            {siteConfig.stats.map((stat, idx) => (
              <StatTile
                key={idx}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                sublabel={stat.sublabel}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
