import React, { useEffect } from 'react';
import { Language, PAGE_SEO_REGISTRY } from '../data/culturalArchive';
import { FAQ_DATA } from '../data/editorialContent';

interface SEOManagerProps {
  currentPath: string;
  lang: Language;
  customTitle?: string;
  customDescription?: string;
  articleSchema?: {
    headline: string;
    description: string;
    datePublished: string;
    dateModified: string;
    image: string;
  };
  includeFaqSchema?: boolean;
}

export const SEOManager: React.FC<SEOManagerProps> = ({
  currentPath,
  lang,
  customTitle,
  customDescription,
  articleSchema,
  includeFaqSchema = false,
}) => {
  useEffect(() => {
    const normalizedPath = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;
    const seoEntry = PAGE_SEO_REGISTRY[normalizedPath] || PAGE_SEO_REGISTRY['/'];

    const title = customTitle || seoEntry.title[lang];
    const description = customDescription || seoEntry.description[lang];
    const canonicalUrl = `https://boddemma.com/${lang}${normalizedPath}`;
    const enUrl = `https://boddemma.com/en${normalizedPath}`;
    const teUrl = `https://boddemma.com/te${normalizedPath}`;
    const xDefaultUrl = `https://boddemma.com${normalizedPath}`;

    document.documentElement.lang = lang;
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (selector.includes('property=')) {
          const propMatch = selector.match(/property="([^"]+)"/);
          if (propMatch) el.setAttribute('property', propMatch[1]);
        } else if (selector.includes('name=')) {
          const nameMatch = selector.match(/name="([^"]+)"/);
          if (nameMatch) el.setAttribute('name', nameMatch[1]);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[property="og:locale"]', 'content', lang === 'te' ? 'te_IN' : 'en_IN');
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);

    const setLink = (rel: string, href: string, hreflang?: string) => {
      const selector = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]:not([hreflang])`;
      let link = document.querySelector(selector) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        if (hreflang) link.hreflang = hreflang;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    setLink('canonical', canonicalUrl);
    setLink('alternate', enUrl, 'en');
    setLink('alternate', teUrl, 'te');
    setLink('alternate', xDefaultUrl, 'x-default');

    // Build dynamic Schema.org JSON-LD graph
    const graph: any[] = [
      {
        '@type': 'Organization',
        '@id': 'https://boddemma.com/#organization',
        name: 'Boddemma.com',
        url: 'https://boddemma.com',
        description:
          'Boddemma.com — A cultural heritage initiative by The Panchayithi Network.',
        parentOrganization: {
          '@type': 'Organization',
          name: 'The Panchayithi Network',
          url: 'https://www.panchayithi.com',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://boddemma.com/#website',
        url: 'https://boddemma.com',
        name: "Boddemma.com — The Digital Home of Telangana's Floral Heritage",
        publisher: { '@id': 'https://boddemma.com/#organization' },
        inLanguage: ['en', 'te'],
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description,
        inLanguage: lang,
        isPartOf: { '@id': 'https://boddemma.com/#website' },
        dateModified: seoEntry.lastReviewed,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement:
          normalizedPath === '/'
            ? [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: PAGE_SEO_REGISTRY['/'].breadcrumbLabel[lang],
                  item: `https://boddemma.com/${lang}/`,
                },
              ]
            : [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: PAGE_SEO_REGISTRY['/'].breadcrumbLabel[lang],
                  item: `https://boddemma.com/${lang}/`,
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: seoEntry.breadcrumbLabel[lang],
                  item: canonicalUrl,
                },
              ],
      },
    ];

    if (articleSchema) {
      graph.push({
        '@type': 'Article',
        headline: articleSchema.headline,
        description: articleSchema.description,
        datePublished: articleSchema.datePublished,
        dateModified: articleSchema.dateModified,
        inLanguage: lang,
        author: {
          '@type': 'Organization',
          name: 'Boddemma.com Cultural Documentation Desk (The Panchayithi Network)',
          url: 'https://www.panchayithi.com',
        },
        publisher: { '@id': 'https://boddemma.com/#organization' },
        mainEntityOfPage: { '@id': `${canonicalUrl}#webpage` },
      });
    }

    if (includeFaqSchema) {
      graph.push({
        '@type': 'FAQPage',
        mainEntity: FAQ_DATA.map((faq) => ({
          '@type': 'Question',
          name: faq.question[lang],
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer[lang],
          },
        })),
      });
    }

    const scriptEl = document.getElementById('schema-jsonld');
    if (scriptEl) {
      scriptEl.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': graph,
      });
    }
  }, [currentPath, lang, customTitle, customDescription, articleSchema, includeFaqSchema]);

  return null;
};
