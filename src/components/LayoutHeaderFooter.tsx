import React, { useState } from 'react';
import { Language, PAGE_SEO_REGISTRY } from '../data/culturalArchive';
import { Globe, Menu, X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { ToranamTopBorder } from './TraditionalMotif';

interface HeaderProps {
  currentPath: string;
  lang: Language;
  onNavigate: (path: string) => void;
  onToggleLanguage: (newLang: Language) => void;
}

export const SiteHeader: React.FC<HeaderProps> = ({
  currentPath,
  lang,
  onNavigate,
  onToggleLanguage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const primaryNav = [
    { path: '/boddemma/', label: { en: 'Boddemma', te: 'బొడ్డెమ్మ' } },
    { path: '/bathukamma/', label: { en: 'Bathukamma', te: 'బతుకమ్మ' } },
    { path: '/bathukamma/nine-days/', label: { en: 'Nine Days', te: 'తొమ్మిది రోజులు' } },
    { path: '/bathukamma/flowers/', label: { en: 'Flowers', te: 'పూలు' } },
    { path: '/stories/', label: { en: 'Magazine', te: 'వ్యాసాలు' } },
  ];

  const secondaryRibbonLinks = [
    { path: '/boddemma-vs-bathukamma/', label: { en: 'Boddemma vs Bathukamma', te: 'బొడ్డెమ్మ vs బతుకమ్మ' } },
    { path: '/traditions/', label: { en: 'Sacred Rituals', te: 'ఆచారాలు' } },
    { path: '/festival-calendar/', label: { en: 'Lunar Calendar', te: 'పండుగల క్యాలెండర్' } },
    { path: '/regional-traditions/', label: { en: 'Regional Customs', te: 'ప్రాంతీయ వైవిధ్యం' } },
    { path: '/learn/', label: { en: 'Learn & Visual Studio', te: 'నేర్చుకోండి & స్టూడియో' } },
  ];

  const normalizedPath = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;
  const activeSeo = PAGE_SEO_REGISTRY[normalizedPath] || PAGE_SEO_REGISTRY['/'];

  return (
    <>
      <ToranamTopBorder />
      {/* Strictly 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#FFF8E9]/95 backdrop-blur-md border-b border-[#B84232]/20">
        <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-10 py-4">
          {/* Zone 1: Single text element Brand Wordmark */}
          <a
            href={`/${lang}/`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/');
            }}
            className="text-2xl md:text-3xl font-serif-editorial font-bold tracking-tight text-[#203A2B] whitespace-nowrap shrink-0"
          >
            Boddemma.com
          </a>

          {/* Zone 2: 5 concise single-line text navigation links */}
          <nav
            aria-label={lang === 'te' ? 'ప్రధాన నావిగేషన్' : 'Primary Navigation'}
            className="hidden md:flex items-center gap-8 text-base font-serif-editorial font-bold text-[#203A2B]"
          >
            {primaryNav.map((item) => {
              const isActive = normalizedPath === item.path;
              return (
                <a
                  key={item.path}
                  href={`/${lang}${item.path}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.path);
                  }}
                  className={`hover:text-[#B84232] transition-colors whitespace-nowrap shrink-0 py-1 ${
                    isActive
                      ? 'text-[#B84232] underline decoration-[#E8B83F] decoration-2 underline-offset-8'
                      : ''
                  }`}
                >
                  {item.label[lang]}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('/contribute/')}
              className="hidden sm:inline-flex px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FFF8E9] bg-[#B84232] hover:bg-[#203A2B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {lang === 'te' ? 'సంప్రదాయాలను పంచుకోండి' : 'Contribute Heritage'}
            </button>

            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="md:hidden p-2 text-[#203A2B] border border-[#203A2B]/25 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Curatorial Operational Utility Ribbon (Below Header: Language Switcher, Secondary Archive Links & Breadcrumb) */}
      <div className="bg-[#F4E8CE] border-b border-[#B84232]/20 text-xs">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 py-2.5 flex flex-wrap items-center justify-between gap-4">
          {/* Secondary Archive Navigation */}
          <div className="flex items-center gap-4 overflow-x-auto py-0.5 no-scrollbar">
            {secondaryRibbonLinks.map((link, idx) => (
              <React.Fragment key={link.path}>
                {idx > 0 && (
                  <span aria-hidden="true" className="text-[#B84232]/40">
                    ·
                  </span>
                )}
                <a
                  href={`/${lang}${link.path}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(link.path);
                  }}
                  className={`whitespace-nowrap shrink-0 font-semibold hover:text-[#B84232] transition-colors ${
                    normalizedPath === link.path
                      ? 'text-[#B84232] underline underline-offset-4'
                      : 'text-[#203A2B]'
                  }`}
                >
                  {link.label[lang]}
                </a>
              </React.Fragment>
            ))}
          </div>

          {/* Visible EN / తెలుగు Language Switcher */}
          <div className="flex items-center gap-2 shrink-0 ml-auto">
            <Globe className="w-3.5 h-3.5 text-[#B84232]" />
            <div
              role="group"
              aria-label="Language switcher"
              className="inline-flex border border-[#203A2B]/30 bg-[#FFF8E9]"
            >
              <button
                type="button"
                onClick={() => onToggleLanguage('en')}
                className={`px-3 py-1 text-xs font-bold cursor-pointer transition-colors whitespace-nowrap ${
                  lang === 'en'
                    ? 'bg-[#203A2B] text-[#E8B83F]'
                    : 'text-[#203A2B] hover:bg-[#F4E8CE]'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onToggleLanguage('te')}
                className={`px-3 py-1 text-xs font-bold cursor-pointer transition-colors whitespace-nowrap ${
                  lang === 'te'
                    ? 'bg-[#203A2B] text-[#E8B83F]'
                    : 'text-[#203A2B] hover:bg-[#F4E8CE]'
                }`}
              >
                తెలుగు
              </button>
            </div>
          </div>
        </div>

        {/* Breadcrumb Bar on inner pages */}
        {normalizedPath !== '/' && (
          <nav
            aria-label="Breadcrumb"
            className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 py-2 border-t border-[#203A2B]/10 text-xs text-[#203A2B]/80 flex items-center gap-2"
          >
            <a
              href={`/${lang}/`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
              }}
              className="hover:underline font-medium"
            >
              {lang === 'te' ? 'ముఖపత్రం (Home)' : 'Home'}
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-[#B84232] font-bold">
              {activeSeo.breadcrumbLabel[lang]}
            </span>
            <span aria-hidden="true" className="ml-auto hidden sm:inline">
              ·
            </span>
            <span className="hidden sm:inline font-mono-tabular">
              {lang === 'te' ? 'చివరి సమీక్ష:' : 'Editorial Review:'} {activeSeo.lastReviewed}
            </span>
          </nav>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF8E9] border-b border-[#203A2B]/20 px-4 py-5 space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {[...primaryNav, ...secondaryRibbonLinks].map((item) => (
              <a
                key={item.path}
                href={`/${lang}${item.path}`}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  onNavigate(item.path);
                }}
                className="p-3 text-sm font-serif-editorial font-bold border border-[#203A2B]/15 bg-[#F4E8CE]/60 text-[#203A2B]"
              >
                {item.label[lang]}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('/contribute/');
            }}
            className="w-full py-3 bg-[#B84232] text-[#FFF8E9] text-xs font-bold uppercase tracking-wider"
          >
            {lang === 'te' ? 'సంప్రదాయాలను పంచుకోండి' : 'Contribute Heritage'}
          </button>
        </div>
      )}
    </>
  );
};

interface FooterProps {
  lang: Language;
  onNavigate: (path: string) => void;
  onToggleLanguage: (newLang: Language) => void;
}

export const SiteFooter: React.FC<FooterProps> = ({
  lang,
  onNavigate,
  onToggleLanguage,
}) => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [subStatus, setSubStatus] = useState<{ ok: boolean; msg: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubStatus(null);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, language: lang, consent }),
      });
      const data = await res.json();
      if (!res.ok) {
        setSubStatus({ ok: false, msg: data.error || 'Subscription failed.' });
      } else {
        setSubStatus({ ok: true, msg: data.message });
        setEmail('');
        setConsent(false);
      }
    } catch {
      setSubStatus({ ok: false, msg: 'Network error while subscribing.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#1B3325] text-[#FFF8E9] border-t-4 border-[#E8B83F] mt-24">
      {/* Newsletter & Seasonal Cultural Updates Section */}
      <div className="border-b border-[#FFF8E9]/15">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-[#E8B83F] font-bold">
              {lang === 'te'
                ? 'సాంస్కృతిక సమాచార లేఖ (Seasonal Heritage Dispatch)'
                : 'Seasonal Cultural Magazine Dispatch'}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif-editorial font-bold text-[#FFF8E9]">
              {lang === 'te'
                ? 'బొడ్డెమ్మ & బతుకమ్మ వార్షిక తేదీలు, పరిశోధనా వ్యాసాలను పొందండి'
                : 'Receive Annual Panchangam Festival Dates & Illustrated Cultural Essays'}
            </h2>
            <p className="text-sm text-[#FFF8E9]/80">
              {lang === 'te'
                ? 'మేము స్పామ్ పంపము. కేవలం పండుగ తేదీలు, పూల విశేషాలు మరియు పరిశోధనా వ్యాసాలను మాత్రమే పంపుతాము.'
                : 'Curated seasonal dispatches when new district traditions, botanical studies, and verified festival dates are published.'}
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="lg:col-span-6 space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={
                  lang === 'te' ? 'మీ ఇమెయిల్ చిరునామా...' : 'Enter your email address...'
                }
                className="flex-1 px-4 py-3.5 text-sm bg-[#FFF8E9] text-[#1B3325] placeholder:text-[#1B3325]/50 focus:outline-none"
              />
              <button
                type="submit"
                disabled={submitting}
                className="px-7 py-3.5 bg-[#E8B83F] text-[#1B3325] text-xs font-bold uppercase tracking-wider hover:bg-[#d9a72b] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {submitting
                  ? lang === 'te'
                    ? 'నమోదు చేస్తోంది...'
                    : 'Subscribing...'
                  : lang === 'te'
                  ? 'సభ్యత్వం పొందండి'
                  : 'Subscribe to Updates'}
              </button>
            </div>

            <label className="flex items-start gap-2.5 text-xs text-[#FFF8E9]/80 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 accent-[#E8B83F]"
              />
              <span>
                {lang === 'te'
                  ? 'Boddemma.com (The Panchayithi Network) నుండి సాంస్కృతిక సమాచార మెయిల్స్ అందుకోవడానికి నేను అంగీకరిస్తున్నాను.'
                  : 'I consent to receive cultural archive updates from Boddemma.com in accordance with the Privacy Policy.'}
              </span>
            </label>

            {subStatus && (
              <div
                className={`text-xs p-3 flex items-center gap-2 ${
                  subStatus.ok
                    ? 'bg-[#315D38] text-[#FFF8E9]'
                    : 'bg-[#B84232] text-[#FFF8E9]'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{subStatus.msg}</span>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Main Footer Directory & Attribution */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#FFF8E9]/15">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <div className="text-3xl font-serif-editorial font-bold text-[#FFF8E9]">
                Boddemma.com
              </div>
              <p className="text-base italic font-serif-editorial text-[#E8B83F] mt-0.5">
                Discover. Celebrate. Preserve.
              </p>
            </div>

            <p className="text-sm text-[#FFF8E9]/80 leading-relaxed max-w-md">
              {lang === 'te'
                ? 'Boddemma.com — ది పంచాయితీ నెట్‌వర్క్ (The Panchayithi Network) వారి సాంస్కృతిక వారసత్వ చొరవ. తెలంగాణ మట్టి, పూలు, బొడ్డెమ్మ మరియు బతుకమ్మ సంప్రదాయాలను భవిష్యత్ తరాల కోసం భద్రపరిచే డిజిటల్ భాండాగారం.'
                : 'Boddemma.com — A cultural heritage initiative by The Panchayithi Network. Dedicated to documenting and preserving Telangana’s living floral traditions for families, students, researchers, and future generations.'}
            </p>

            <div className="pt-1">
              <a
                href="https://www.panchayithi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E8B83F] hover:underline"
              >
                <span>An initiative by The Panchayithi Network (panchayithi.com)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 1: Explore Festivals */}
          <div className="space-y-3 text-xs">
            <h3 className="uppercase tracking-wider text-[#E8B83F] font-bold">
              {lang === 'te' ? 'పండుగ మార్గదర్శకాలు' : 'Festival Guides'}
            </h3>
            <ul className="space-y-2.5 text-[#FFF8E9]/85">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/boddemma/')}
                  className="hover:text-[#E8B83F] cursor-pointer"
                >
                  {lang === 'te' ? 'బొడ్డెమ్మ సమగ్ర చరిత్ర' : 'Explore Boddemma'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/bathukamma/')}
                  className="hover:text-[#E8B83F] cursor-pointer"
                >
                  {lang === 'te' ? 'బతుకమ్మ సమగ్ర చరిత్ర' : 'Explore Bathukamma'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/boddemma-vs-bathukamma/')}
                  className="hover:text-[#E8B83F] cursor-pointer"
                >
                  {lang === 'te' ? 'బొడ్డెమ్మ vs బతుకమ్మ' : 'Boddemma vs Bathukamma'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/bathukamma/nine-days/')}
                  className="hover:text-[#E8B83F] cursor-pointer"
                >
                  {lang === 'te' ? 'తొమ్మిది రోజుల బతుకమ్మ' : 'Nine Days of Bathukamma'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/festival-calendar/')}
                  className="hover:text-[#E8B83F] cursor-pointer"
                >
                  {lang === 'te' ? 'తెలంగాణ పండుగల క్యాలెండర్' : 'Telangana Festival Calendar'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Flowers, Traditions & Magazine */}
          <div className="space-y-3 text-xs">
            <h3 className="uppercase tracking-wider text-[#E8B83F] font-bold">
              {lang === 'te' ? 'పూలు, ఆచారాలు & వ్యాసాలు' : 'Flowers, Rituals & Magazine'}
            </h3>
            <ul className="space-y-2.5 text-[#FFF8E9]/85">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/bathukamma/flowers/')}
                  className="hover:text-[#E8B83F] cursor-pointer"
                >
                  {lang === 'te' ? 'బతుకమ్మ పూల విజ్ఞానం' : 'Flowers of Bathukamma'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/traditions/')}
                  className="hover:text-[#E8B83F] cursor-pointer"
                >
                  {lang === 'te' ? 'ఆచారాలు & సంప్రదాయాలు' : 'Rituals & Traditions'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/stories/')}
                  className="hover:text-[#E8B83F] cursor-pointer"
                >
                  {lang === 'te' ? 'కథలు & వ్యాసాలు' : 'Stories & Articles'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/regional-traditions/')}
                  className="hover:text-[#E8B83F] cursor-pointer"
                >
                  {lang === 'te' ? 'ప్రాంతీయ సంప్రదాయాలు' : 'Regional Traditions'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/learn/')}
                  className="hover:text-[#E8B83F] cursor-pointer"
                >
                  {lang === 'te' ? 'నేర్చుకోండి & విజువల్ స్టూడియో' : 'Learn & Visual Studio'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional & Governance */}
          <div className="space-y-3 text-xs">
            <h3 className="uppercase tracking-wider text-[#E8B83F] font-bold">
              {lang === 'te' ? 'సంస్థాగత సమాచారం' : 'About & Governance'}
            </h3>
            <ul className="space-y-2.5 text-[#FFF8E9]/85">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/about/')}
                  className="hover:text-[#E8B83F] cursor-pointer"
                >
                  {lang === 'te' ? 'మా గురించి (About)' : 'About Boddemma.com'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/contact/')}
                  className="hover:text-[#E8B83F] cursor-pointer"
                >
                  {lang === 'te' ? 'సంప్రదించండి (Contact)' : 'Contact'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/contribute/')}
                  className="hover:text-[#E8B83F] cursor-pointer"
                >
                  {lang === 'te' ? 'భాగస్వామ్యం (Contribute)' : 'Contribute Stories & Customs'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/editorial-policy/')}
                  className="hover:text-[#E8B83F] cursor-pointer"
                >
                  {lang === 'te' ? 'సంపాదకీయ విధానం' : 'Editorial Policy'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/privacy-policy/')}
                  className="hover:text-[#E8B83F] cursor-pointer"
                >
                  {lang === 'te' ? 'గోప్యతా విధానం' : 'Privacy Policy'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/terms/')}
                  className="hover:text-[#E8B83F] cursor-pointer"
                >
                  {lang === 'te' ? 'వినియోగ నిబంధనలు' : 'Terms of Use'}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright, Technical SEO Sitemap Links & Language Toggle */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#FFF8E9]/70">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} <strong>Boddemma.com</strong> — A cultural heritage initiative by{' '}
              <a
                href="https://www.panchayithi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E8B83F] hover:underline"
              >
                The Panchayithi Network
              </a>
              .
            </p>
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#FFF8E9]/55">
              <a href="/sitemap.xml" target="_blank" className="hover:underline">
                XML Sitemap Index
              </a>
              <span aria-hidden="true">·</span>
              <a href="/robots.txt" target="_blank" className="hover:underline">
                robots.txt
              </a>
              <span aria-hidden="true">·</span>
              <span>Canonical Host: https://boddemma.com</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span>{lang === 'te' ? 'భాష:' : 'Language:'}</span>
            <button
              type="button"
              onClick={() => onToggleLanguage('en')}
              className={`px-3 py-1 border text-xs cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#E8B83F] text-[#1B3325] border-[#E8B83F] font-bold'
                  : 'border-[#FFF8E9]/30 text-[#FFF8E9]'
              }`}
            >
              English (EN)
            </button>
            <button
              type="button"
              onClick={() => onToggleLanguage('te')}
              className={`px-3 py-1 border text-xs cursor-pointer ${
                lang === 'te'
                  ? 'bg-[#E8B83F] text-[#1B3325] border-[#E8B83F] font-bold'
                  : 'border-[#FFF8E9]/30 text-[#FFF8E9]'
              }`}
            >
              తెలుగు (TE)
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
