/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Language } from './data/culturalArchive';
import { SEOManager } from './components/SEOManager';
import { SiteHeader, SiteFooter } from './components/LayoutHeaderFooter';
import { HomePage } from './pages/HomePage';
import {
  BoddemmaGuidePage,
  BathukammaGuidePage,
  ComparisonPage,
  NineDaysPage,
  FlowersEncyclopediaPage,
} from './pages/PillarGuidesPages';
import {
  TraditionsLibraryPage,
  StoriesAndArticlesPage,
  FestivalCalendarPage,
  RegionalTraditionsPage,
  LearnAndStudioPage,
} from './pages/ArchiveAndInteractivePages';
import {
  AboutPage,
  ContactAndContributePage,
  PolicyPage,
  NotFoundPage,
} from './pages/InstitutionalPages';

function parseLocationPath(rawPathname: string): { lang: Language; routePath: string } {
  let clean = rawPathname || '/';
  let detectedLang: Language = 'en';

  if (clean === '/te' || clean.startsWith('/te/')) {
    detectedLang = 'te';
    clean = clean.slice(3) || '/';
  } else if (clean === '/en' || clean.startsWith('/en/')) {
    detectedLang = 'en';
    clean = clean.slice(3) || '/';
  }

  if (!clean.startsWith('/')) {
    clean = `/${clean}`;
  }
  if (!clean.endsWith('/')) {
    clean = `${clean}/`;
  }

  return { lang: detectedLang, routePath: clean };
}

export default function App() {
  const initial = parseLocationPath(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  const [lang, setLang] = useState<Language>(initial.lang);
  const [currentPath, setCurrentPath] = useState<string>(initial.routePath);

  useEffect(() => {
    const onPopState = () => {
      const parsed = parseLocationPath(window.location.pathname);
      setLang(parsed.lang);
      setCurrentPath(parsed.routePath);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const handleNavigate = useCallback(
    (targetRoute: string) => {
      let normalized = targetRoute.startsWith('/') ? targetRoute : `/${targetRoute}`;
      if (!normalized.endsWith('/')) {
        normalized = `${normalized}/`;
      }
      setCurrentPath(normalized);
      const browserUrl = `/${lang}${normalized}`;
      try {
        window.history.pushState({}, '', browserUrl);
      } catch {
        // Ignore in restricted iframe history environments
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [lang]
  );

  const handleToggleLanguage = useCallback(
    (newLang: Language) => {
      setLang(newLang);
      const browserUrl = `/${newLang}${currentPath}`;
      try {
        window.history.pushState({}, '', browserUrl);
      } catch {
        // Ignore in restricted iframe history environments
      }
    },
    [currentPath]
  );

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage lang={lang} onNavigate={handleNavigate} />;
      case '/boddemma/':
        return <BoddemmaGuidePage lang={lang} onNavigate={handleNavigate} />;
      case '/bathukamma/':
        return <BathukammaGuidePage lang={lang} onNavigate={handleNavigate} />;
      case '/boddemma-vs-bathukamma/':
        return <ComparisonPage lang={lang} onNavigate={handleNavigate} />;
      case '/bathukamma/nine-days/':
        return <NineDaysPage lang={lang} onNavigate={handleNavigate} />;
      case '/bathukamma/flowers/':
        return <FlowersEncyclopediaPage lang={lang} onNavigate={handleNavigate} />;
      case '/traditions/':
        return <TraditionsLibraryPage lang={lang} onNavigate={handleNavigate} />;
      case '/stories/':
      case '/articles/':
        return <StoriesAndArticlesPage lang={lang} onNavigate={handleNavigate} />;
      case '/festival-calendar/':
        return <FestivalCalendarPage lang={lang} onNavigate={handleNavigate} />;
      case '/regional-traditions/':
        return <RegionalTraditionsPage lang={lang} onNavigate={handleNavigate} />;
      case '/learn/':
        return <LearnAndStudioPage lang={lang} onNavigate={handleNavigate} />;
      case '/about/':
        return <AboutPage lang={lang} onNavigate={handleNavigate} />;
      case '/contact/':
        return (
          <ContactAndContributePage
            lang={lang}
            onNavigate={handleNavigate}
            mode="contact"
          />
        );
      case '/contribute/':
        return (
          <ContactAndContributePage
            lang={lang}
            onNavigate={handleNavigate}
            mode="contribute"
          />
        );
      case '/editorial-policy/':
        return <PolicyPage lang={lang} policyType="editorial" />;
      case '/privacy-policy/':
        return <PolicyPage lang={lang} policyType="privacy" />;
      case '/terms/':
        return <PolicyPage lang={lang} policyType="terms" />;
      default:
        return <NotFoundPage lang={lang} onNavigate={handleNavigate} />;
    }
  };

  const includeFaqSchema =
    currentPath === '/' || currentPath === '/boddemma/' || currentPath === '/bathukamma/';

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8E9] text-[#1B3325]">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1B3325] focus:text-[#FFF8E9] focus:text-xs"
      >
        {lang === 'te' ? 'ప్రధాన సమాచారానికి వెళ్లండి' : 'Skip to main cultural content'}
      </a>

      <SEOManager
        currentPath={currentPath}
        lang={lang}
        includeFaqSchema={includeFaqSchema}
      />

      <SiteHeader
        currentPath={currentPath}
        lang={lang}
        onNavigate={handleNavigate}
        onToggleLanguage={handleToggleLanguage}
      />

      <main id="main-content" className="flex-1">
        {renderPage()}
      </main>

      <SiteFooter
        lang={lang}
        onNavigate={handleNavigate}
        onToggleLanguage={handleToggleLanguage}
      />
    </div>
  );
}
