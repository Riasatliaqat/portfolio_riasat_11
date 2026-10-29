import React, { useState } from 'react';
import { Mail, Phone, Send, Download, Check, AlertCircle, Copy, ExternalLink, FileText } from 'lucide-react';
import { siteConfig } from '../data/site';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject cannot be empty.';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission handling and construct mailto link
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Open mailto fallback pre-filled
      const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      
      try {
        window.location.href = mailtoUrl;
      } catch (err) {
        // Handled silently
      }
    }, 600);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-950 dark:bg-[#07090e] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl pb-10 border-b border-slate-800">
          <div className="text-xs font-mono font-medium text-amber-500 uppercase tracking-wider mb-2">
            05. Direct Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's Collaborate on Data Projects
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Open to data analyst roles, Power BI dashboard consultations, and analytics automation opportunities.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info & CV Download */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Direct Contact Channels
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Email Address</span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm font-semibold text-white hover:text-amber-400 transition-colors break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(siteConfig.email, 'email')}
                  className="p-1.5 rounded hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Phone & WhatsApp</span>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-semibold text-white hover:text-amber-400 transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(siteConfig.phone, 'phone')}
                  className="p-1.5 rounded hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="pt-2 text-xs text-slate-400 font-mono flex items-center justify-between border-t border-slate-800">
                <span>Location Base</span>
                <span className="text-slate-300 font-sans font-medium">{siteConfig.location}</span>
              </div>
            </div>

            {/* Download CV Tile */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/90 border border-amber-500/30">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white tracking-tight">Curriculum Vitae</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Updated overview of data engineering projects, analytical tools, and computer science degree.
                  </p>
                </div>
              </div>

              <a
                href="/cv.pdf"
                download="Riasat_Ali_CV.pdf"
                className="w-full py-3 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <Download className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below. This form validates your message and provides a seamless email dispatch.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span>Message Ready for Dispatch!</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Thank you, {formData.name}. Your message has been prepared for dispatch. If your email application didn't automatically pop up, you can also reach Riasat directly at{' '}
                    <strong className="text-amber-400 font-mono">{siteConfig.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-2 text-xs font-semibold text-amber-400 underline hover:text-amber-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-colors ${
                          errors.name
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-800 focus:border-amber-500 focus:ring-amber-500'
                        }`}
                      />
                      {errors.name && (
                        <span className="flex items-center gap-1 text-[11px] text-rose-400 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-colors ${
                          errors.email
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-800 focus:border-amber-500 focus:ring-amber-500'
                        }`}
                      />
                      {errors.email && (
                        <span className="flex items-center gap-1 text-[11px] text-rose-400 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject / Project Scope *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Data Analyst Role / Power BI Consultation"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-colors ${
                        errors.subject
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-amber-500 focus:ring-amber-500'
                      }`}
                    />
                    {errors.subject && (
                      <span className="flex items-center gap-1 text-[11px] text-rose-400 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message Details *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your requirements, dataset scope, or timeline..."
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-colors resize-none ${
                        errors.message
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-amber-500 focus:ring-amber-500'
                      }`}
                    />
                    {errors.message && (
                      <span className="flex items-center gap-1 text-[11px] text-rose-400 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Validating...' : 'Submit Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
