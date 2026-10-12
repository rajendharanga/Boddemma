import React, { useState } from 'react';
import {
  CALENDAR_YEARS,
  GENERATED_ASSETS,
  GLOSSARY_DATA,
  Language,
  REGIONAL_TRADITIONS,
  SOURCE_REGISTER,
} from '../data/culturalArchive';
import { EDITORIAL_ARTICLES, EditorialArticle } from '../data/editorialContent';
import { ResilientImage } from '../components/ResilientImage';
import { BoddemmaBuilder } from '../components/BoddemmaBuilder';
import { InteractiveBathukammaExplorer } from '../components/InteractiveBathukammaExplorer';
import { QuizAndShareCards } from '../components/QuizAndShareCards';
import { CulturalVisualStudio } from '../components/CulturalVisualStudio';
import { SacredLotusDivider, SmoothReveal } from '../components/TraditionalMotif';
import { Search, Printer, ArrowLeft } from 'lucide-react';

interface PageProps {
  lang: Language;
  onNavigate: (path: string) => void;
}

const REGION_IMAGES = [
  GENERATED_ASSETS.boddemmaClay,
  GENERATED_ASSETS.circleDance,
  GENERATED_ASSETS.tangeduBlossoms,
  GENERATED_ASSETS.tankImmersion,
];

/* ==========================================================================
   G. RITUALS AND TRADITIONS — /traditions/
   ========================================================================== */
export const TraditionsLibraryPage: React.FC<PageProps> = ({ lang, onNavigate }) => {
  const practices = [
    {
      id: 'prac-1',
      image: GENERATED_ASSETS.courtyardMuggu,
      title: {
        en: '01. Excavating & Kneading Puttamatti for Boddemma',
        te: '01. పుట్టమట్టి సేకరణ & బొడ్డెమ్మ గద్దె తయారీ',
      },
      context: {
        en: 'Observed prior to Bhadrapada Pournami / Mahalaya Paksha across rural Telangana.',
        te: 'భాద్రపద పౌర్ణమి / మహాలయ పక్షం ప్రారంభంలో పల్లెల్లో పాటించే ఆచారం.',
      },
      body: {
        en: 'Termite-mound earth (puttamatti) is gathered with reverence from clean field margins, sieved to remove pebbles, and kneaded into a stepped square terrace (gadde). White lime, turmeric, and kumkuma stripes transform raw soil into a sacred courtyard locus.',
        te: 'పొలాల గట్లపై ఉన్న పుట్ట నుండి మెత్తని మట్టిని సేకరించి, రాళ్లు లేకుండా జల్లించి నీటితో కలిపి మూడు లేదా ఐదు అంతస్తుల గద్దెను కడతారు. సున్నం, పసుపు, కుంకుమ చారలతో అలంకరిస్తారు.',
      },
      variation: {
        en: 'Some northern districts maintain a fixed courtyard platform for 9 days; southern districts often use portable wooden planks (peetalu).',
        te: 'ఉత్తర తెలంగాణలో 9 రోజుల పాటు స్థిరమైన గద్దెను ఉంచితే, దక్షిణ ప్రాంతాల్లో చెక్క పీటలపై బొడ్డెమ్మను పెడతారు.',
      },
      source: 'SRC-DEPT-CULTURE',
    },
    {
      id: 'prac-2',
      image: GENERATED_ASSETS.gunuguPlumes,
      title: {
        en: '02. Morning Flower Foraging & Natural Gunugu Dyeing',
        te: '02. పూల సేకరణ & గునుగు పూలకు సహజ రంగులద్దడం',
      },
      context: {
        en: 'Performed by men, youth, and women from fields and tank bunds.',
        te: 'ఉదయాన్నే చేల గట్లు, చెరువు కట్టల నుండి పూలను కోసుకొచ్చే సంప్రదాయం.',
      },
      body: {
        en: 'Tangedu, Gunugu, Katla, and lotus blossoms are harvested before midday sun wilts their petals. Silvery-white Gunugu spikes (Celosia argentea) are dipped into turmeric paste, kumkuma, or natural leaf extracts to create vibrant vertical bands.',
        te: 'ఎండ ముదరకముందే తంగేడు, గునుగు, కట్ల, తామర పూలను సేకరిస్తారు. తెల్లని గునుగు పూల కంకులను పసుపు, కుంకుమ నీళ్లలో ముంచి ఎరుపు, పసుపు రంగులు అద్దుతారు.',
      },
      variation: {
        en: 'Environmental guidance discourages synthetic chemical powders in favor of natural turmeric and kumkuma.',
        te: 'చెరువుల నీరు కలుషితం కాకుండా రసాయన రంగులకు బదులు పసుపు, కుంకుమలనే వాడటం ఉత్తమం.',
      },
      source: 'SRC-BSI-FLORA',
    },
    {
      id: 'prac-3',
      image: GENERATED_ASSETS.pasupuGouramma,
      title: {
        en: '03. Layering the Brass Tambalam & Crowning Pasupu Gouramma',
        te: '03. ఇత్తడి తాంబాలంలో పూల పేర్పు & పసుపు గౌరమ్మ ప్రతిష్ఠ',
      },
      context: {
        en: 'Afternoon household preparation across all nine days (except Day 6 Aligina rest day).',
        te: 'మధ్యాహ్నం వేళ ఆడబిడ్డలందరూ కలిసి కూర్చుని బతుకమ్మను పేర్చే విధానం.',
      },
      body: {
        en: 'Broad pumpkin (gummadi) leaves line the brass tambalam. Concentric circles of Tangedu, Gunugu, Banthi, and Chamanthi are stacked with stems facing inward, packed with trimmed stem cuttings at the core for stability, and topped with Pasupu Gouramma.',
        te: 'తాంబాలంలో గుమ్మడి ఆకులు పరిచి, తంగేడు, గునుగు, బంతి, చామంతి పూలను వృత్తాకారంలో ఒకదానిపై ఒకటి గోపురంలా పేర్చి శిఖరాన పసుపు గౌరమ్మను ఉంచుతారు.',
      },
      variation: {
        en: 'In Warangal and Karimnagar, bamboo trays (sibbielu) are also traditionally used alongside brass plates.',
        te: 'ఇత్తడి తాంబాలంతో పాటు వెదురు సిబ్బిలలో కూడా బతుకమ్మను పేరుస్తారు.',
      },
      source: 'SRC-TS-PORTAL',
    },
    {
      id: 'prac-4',
      image: GENERATED_ASSETS.tankImmersion,
      title: {
        en: '04. Evening Circle Ritual, Tank Immersion & Vayanalu Exchange',
        te: '04. సాయంత్రం ప్రదక్షిణలు, చెరువులో నిమజ్జనం & వాయనాలు',
      },
      context: {
        en: 'Dusk gathering in courtyards and processions to the village cheruvu.',
        te: 'సాయంత్రం వాకిట్లో ఆరాధన అనంతరం చెరువులో నిమజ్జనం.',
      },
      body: {
        en: 'Women form concentric circles around the floral cones in the courtyard. At the water’s edge, they apply a pinch of Gouramma’s turmeric to their mangalsutra, release the biodegradable floral cone onto the tank, and exchange Sattu Pindi vayanalu.',
        te: 'బతుకమ్మ చుట్టూ ప్రదక్షిణ చేసిన తర్వాత చెరువు వద్దకు చేరుకుంటారు. గౌరమ్మ పసుపును తాళిబొట్టుకు అద్దుకుని, పూలను నీటిలో వదిలి ఒకరికొకరు వాయనాలు ఇచ్చుకుంటారు.',
      },
      variation: {
        en: 'Accompanied by flickering oil lamps floated on pumpkin leaves during the grand Saddula Bathukamma procession.',
        te: 'సద్దుల బతుకమ్మ రోజున ఊరేగింపుగా చెరువు వద్దకు వెళ్లి వైభవంగా నిమజ్జనం చేస్తారు.',
      },
      source: 'SRC-TANK-ECOLOGY',
    },
  ];

  return (
    <article className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 py-14 space-y-20">
      <SmoothReveal>
        <header className="space-y-5 border-b-2 border-[#1B3325]/15 pb-10 text-center max-w-4xl mx-auto">
          <SacredLotusDivider
            label={
              lang === 'te'
                ? 'సాంస్కృతిక ఆచారాల భాండాగారం'
                : 'Sacred Rituals & Living Practices'
            }
          />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-editorial font-bold text-[#1B3325]">
            {lang === 'te'
              ? 'బొడ్డెమ్మ & బతుకమ్మ పవిత్ర ఆచారాలు, సంప్రదాయాలు'
              : 'Sacred Rituals and Traditions of Boddemma & Bathukamma'}
          </h1>
          <p className="text-lg sm:text-xl text-[#1B3325]/85 font-serif-editorial leading-relaxed">
            {lang === 'te'
              ? 'పుట్టమట్టి సేకరణ నుండి సద్దుల బతుకమ్మ నిమజ్జనం వరకు ప్రతి ఆచారం వెనుక ఉన్న విధానం, ప్రాంతీయ వైవిధ్యం మరియు మూల ఆధారాలు.'
              : 'From dawn rice-flour muggu drawings and wildflower foraging to twilight tank immersion—every practice documented with visual and cultural depth.'}
          </p>
        </header>
      </SmoothReveal>

      <SmoothReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {practices.map((p) => (
            <section
              key={p.id}
              className="bg-[#FFF8E9] border border-[#1B3325]/20 overflow-hidden flex flex-col justify-between magazine-shadow"
            >
              <div>
                <ResilientImage
                  src={p.image}
                  alt={p.title.en}
                  aspectClassName="aspect-[16/10]"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="p-8 space-y-4">
                  <div className="text-xs text-[#B84232] font-bold uppercase tracking-wider">
                    {p.context[lang]}
                  </div>
                  <h2 className="text-3xl font-serif-editorial font-bold text-[#1B3325]">
                    {p.title[lang]}
                  </h2>
                  <p className="text-base text-[#1B3325]/90 leading-relaxed">{p.body[lang]}</p>
                </div>
              </div>
              <div className="px-8 py-4 bg-[#F4E8CE] border-t border-[#1B3325]/15 text-xs text-[#1B3325]/85">
                <strong className="text-[#B84232]">
                  {lang === 'te' ? 'ప్రాంతీయ వైవిధ్యం:' : 'Known Regional Variation:'}
                </strong>{' '}
                {p.variation[lang]}
              </div>
            </section>
          ))}
        </div>
      </SmoothReveal>

      <SmoothReveal>
        <BoddemmaBuilder lang={lang} />
      </SmoothReveal>
      <SmoothReveal>
        <InteractiveBathukammaExplorer lang={lang} onNavigate={onNavigate} />
      </SmoothReveal>
    </article>
  );
};

/* ==========================================================================
   I & M. STORIES AND ARTICLES MAGAZINE ARCHIVE — /stories/ & /articles/
   ========================================================================== */
export const StoriesAndArticlesPage: React.FC<PageProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<EditorialArticle | null>(null);

  const categories = [
    'All',
    'Ecology & Land',
    'Boddemma Heritage',
    'Botanical Research',
    'Culinary Traditions',
  ];

  const filtered = EDITORIAL_ARTICLES.filter((art) => {
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      art.title.en.toLowerCase().includes(q) ||
      art.title.te.includes(q) ||
      art.excerpt.en.toLowerCase().includes(q) ||
      art.excerpt.te.includes(q);
    return matchesCat && matchesSearch;
  });

  if (activeArticle) {
    return (
      <article className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-10 py-14 space-y-12">
        <button
          type="button"
          onClick={() => setActiveArticle(null)}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B84232] hover:underline cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>
            {lang === 'te' ? 'అన్ని వ్యాసాలకు తిరిగి వెళ్లండి' : 'Back to Cultural Magazine'}
          </span>
        </button>

        <header className="space-y-5 border-b-2 border-[#1B3325]/15 pb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#B84232] font-bold">
            <span>{activeArticle.categoryLabel[lang]}</span>
            <span aria-hidden="true">·</span>
            <span>{activeArticle.evidenceClassification[lang]}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono-tabular">{activeArticle.readingTimeMinutes} min read</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-editorial font-bold text-[#1B3325] leading-[1.08]">
            {activeArticle.title[lang]}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#1B3325]/70 pt-2">
            <div>
              <div className="font-bold text-[#1B3325]">{activeArticle.authorRole[lang]}</div>
              <div className="text-[#315D38]">{activeArticle.reviewerRole[lang]}</div>
            </div>
            <div className="font-mono-tabular">
              Published {activeArticle.publishedDate} · Reviewed {activeArticle.lastReviewedDate}
            </div>
          </div>
        </header>

        {/* Direct Summary */}
        <div className="p-8 bg-[#F4E8CE] border-l-4 border-[#B84232] space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-[#B84232] font-bold">
            {lang === 'te' ? 'ముఖ్యాంశం (Executive Summary)' : 'Editorial Lead Summary'}
          </p>
          <p className="text-lg sm:text-xl font-serif-editorial text-[#1B3325] leading-relaxed">
            {activeArticle.directAnswerSummary[lang]}
          </p>
        </div>

        <ResilientImage
          src={activeArticle.heroImage}
          alt={activeArticle.title.en}
          aspectClassName="aspect-[16/9]"
          className="magazine-shadow"
        />

        <div className="space-y-10 text-lg sm:text-xl text-[#1B3325]/90 leading-relaxed max-w-prose">
          {activeArticle.sections.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-serif-editorial font-bold text-[#1B3325]">
                {sec.heading[lang]}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p[lang]}</p>
              ))}
            </section>
          ))}
        </div>

        <footer className="pt-8 border-t border-[#1B3325]/15 space-y-4">
          <h3 className="text-2xl font-serif-editorial font-bold text-[#1B3325]">
            {lang === 'te' ? 'ఈ వ్యాసానికి ఆధారమైన మూలాలు' : 'Supporting Archival Sources'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SOURCE_REGISTER.filter((s) => activeArticle.sourceIds.includes(s.id)).map((src) => (
              <div
                key={src.id}
                className="p-5 bg-[#F4E8CE]/60 border border-[#1B3325]/15 text-xs space-y-1"
              >
                <div className="font-mono-tabular text-[#B84232] font-bold">
                  {src.id} · {src.evidenceCategory}
                </div>
                <div className="font-serif-editorial text-lg font-bold text-[#1B3325]">
                  {src.title}
                </div>
                <div className="text-[#1B3325]/70">{src.publisher}</div>
              </div>
            ))}
          </div>
        </footer>
      </article>
    );
  }

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 py-14 space-y-14">
      <SmoothReveal>
        <header className="space-y-5 border-b-2 border-[#1B3325]/15 pb-10">
          <SacredLotusDivider
            label={
              lang === 'te'
                ? 'కథలు, పరిశోధనా వ్యాసాలు & సంస్కృతి'
                : 'Illustrated Cultural Magazine & Monograph Essays'
            }
          />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-editorial font-bold text-[#1B3325] text-center max-w-4xl mx-auto">
            {lang === 'te'
              ? 'కథలు, జానపద గాథలు & సాంస్కృతిక వ్యాసాలు'
              : 'Stories, Folklore & Cultural Magazine'}
          </h1>
          <p className="text-lg sm:text-xl text-[#1B3325]/85 max-w-3xl mx-auto text-center font-serif-editorial leading-relaxed">
            {lang === 'te'
              ? 'చారిత్రక ఆధారాలు, వృక్షశాస్త్ర అధ్యయనాలు, జానపద గాథలు మరియు తరతరాల జ్ఞాపకాలను స్పష్టమైన వర్గీకరణతో ఇక్కడ చదవవచ్చు.'
              : 'Long-form illustrated essays exploring Telangana’s tank ecology, termite-mound clay rituals, seasonal botany, and sacred festive cuisine.'}
          </p>

          {/* Search & Category Filter Bar */}
          <div className="pt-6 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider border transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#1B3325] text-[#E8B83F] border-[#1B3325]'
                      : 'bg-[#FFF8E9] text-[#1B3325] border-[#1B3325]/20 hover:border-[#B84232]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative min-w-[280px]">
              <Search className="w-4 h-4 text-[#1B3325]/50 absolute left-3.5 top-3.5" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  lang === 'te' ? 'వ్యాసాలను వెతకండి...' : 'Search magazine stories...'
                }
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FFF8E9] border border-[#1B3325]/30 text-[#1B3325]"
              />
            </div>
          </div>
        </header>
      </SmoothReveal>

      <SmoothReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filtered.map((art) => (
            <article
              key={art.id}
              onClick={() => setActiveArticle(art)}
              className="group bg-[#FFF8E9] border border-[#1B3325]/20 overflow-hidden flex flex-col justify-between magazine-shadow cursor-pointer"
            >
              <div>
                <div className="overflow-hidden">
                  <ResilientImage
                    src={art.heroImage}
                    alt={art.title.en}
                    aspectClassName="aspect-[16/10]"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#B84232]">
                    <span>{art.categoryLabel[lang]}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono-tabular">{art.readingTimeMinutes} min read</span>
                  </div>
                  <h2 className="text-3xl font-serif-editorial font-bold text-[#1B3325] group-hover:text-[#B84232] transition-colors">
                    {art.title[lang]}
                  </h2>
                  <p className="text-base text-[#1B3325]/85 leading-relaxed">
                    {art.excerpt[lang]}
                  </p>
                </div>
              </div>

              <div className="px-8 py-4 bg-[#F4E8CE] border-t border-[#1B3325]/10 flex items-center justify-between text-xs">
                <span className="font-semibold text-[#315D38]">
                  {art.evidenceClassification[lang]}
                </span>
                <span className="font-bold uppercase tracking-wider text-[#B84232]">
                  {lang === 'te' ? 'పూర్తి వ్యాసం చదవండి →' : 'Read Full Story →'}
                </span>
              </div>
            </article>
          ))}
        </div>
      </SmoothReveal>
    </div>
  );
};

/* ==========================================================================
   J. TELANGANA FESTIVAL CALENDAR — /festival-calendar/
   ========================================================================== */
export const FestivalCalendarPage: React.FC<PageProps> = ({ lang }) => {
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const yearData =
    CALENDAR_YEARS.find((y) => y.year === selectedYear) || CALENDAR_YEARS[2];

  return (
    <article className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 py-14 space-y-16">
      <SmoothReveal>
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-[#1B3325] text-[#FFF8E9] border-2 border-[#E8B83F] magazine-shadow overflow-hidden">
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-5 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[#E8B83F] font-bold">
              {lang === 'te'
                ? 'తెలుగు చాంద్రమాన పంచాంగం & వార్షిక తేదీలు'
                : 'Telugu Luni-Solar Panchangam · Annual Festival Schedule'}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-editorial font-bold text-[#FFF8E9] leading-[1.08]">
              {lang === 'te'
                ? 'తెలంగాణ పండుగల క్యాలెండర్: బొడ్డెమ్మ & బతుకమ్మ తేదీలు (2024–2027)'
                : 'Telangana Festival Calendar: Boddemma & Bathukamma Lunar Dates'}
            </h1>
            <p className="text-lg text-[#FFF8E9]/90 font-serif-editorial leading-relaxed">
              {lang === 'te'
                ? 'తెలుగు చాంద్రమాన పంచాంగం ప్రకారం భాద్రపద బహుళ పక్షం నుండి ఆశ్వయుజ శుద్ధ దుర్గాష్టమి వరకు తిథుల ఆధారంగా ప్రతి సంవత్సరం పండుగ తేదీలు నిర్ణయించబడతాయి.'
                : 'Governed by the Telugu lunar calendar—commencing in Bhadrapada Bahula Paksha, transitioning on Mahalaya Amavasya (Pethramasa), and culminating on Ashwayuja Shukla Durgashtami.'}
            </p>
          </div>
          <div className="lg:col-span-5">
            <ResilientImage
              src={GENERATED_ASSETS.tankImmersion}
              alt="Twilight Saddula Bathukamma immersion with floating lamps"
              aspectClassName="h-full min-h-[300px]"
              className="w-full h-full object-cover"
            />
          </div>
        </header>
      </SmoothReveal>

      {/* Year Selector */}
      <SmoothReveal>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {CALENDAR_YEARS.map((item) => (
              <button
                key={item.year}
                type="button"
                onClick={() => setSelectedYear(item.year)}
                className={`px-7 py-3.5 text-sm font-mono-tabular font-bold border transition-colors cursor-pointer ${
                  selectedYear === item.year
                    ? 'bg-[#1B3325] text-[#E8B83F] border-[#E8B83F] border-2'
                    : 'bg-[#FFF8E9] text-[#1B3325] border-[#1B3325]/25 hover:border-[#B84232]'
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono-tabular font-bold text-[#315D38]">
            [{yearData.verificationStatus}]
          </span>
        </div>
      </SmoothReveal>

      {/* Selected Year Schedule Card */}
      <SmoothReveal>
        <section className="bg-[#F4E8CE] border-2 border-[#1B3325]/20 p-8 md:p-12 space-y-8 magazine-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1B3325]/15 pb-5">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#B84232] font-bold">
                {yearData.teluguSamvatsaram[lang]}
              </div>
              <h2 className="text-4xl font-serif-editorial font-bold text-[#1B3325] mt-1">
                {selectedYear} {lang === 'te' ? 'పండుగ తేదీల పట్టిక' : 'Sacred Lunar Schedule'}
              </h2>
            </div>
            <span className="font-mono-tabular text-sm font-bold text-[#1B3325]/70">
              Bhadrapada – Ashwayuja Masam
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#FFF8E9] border border-[#1B3325]/15 space-y-2">
              <div className="text-xs uppercase tracking-wider text-[#B84232] font-bold">
                {lang === 'te' ? '1. బొడ్డెమ్మ (9 రోజులు)' : '1. Boddemma Window'}
              </div>
              <div className="font-serif-editorial text-2xl font-bold text-[#1B3325]">
                {yearData.boddemmaWindow[lang]}
              </div>
              <p className="text-xs text-[#1B3325]/70">
                Bhadrapada Bahula Paksha leading to Amavasya
              </p>
            </div>

            <div className="p-6 bg-[#FFF8E9] border border-[#1B3325]/15 space-y-2">
              <div className="text-xs uppercase tracking-wider text-[#315D38] font-bold">
                {lang === 'te'
                  ? '2. ఎంగిలి పూల బతుకమ్మ (మొదటి రోజు)'
                  : '2. Engili Pula Bathukamma (Day 1)'}
              </div>
              <div className="font-serif-editorial text-2xl font-bold text-[#1B3325]">
                {yearData.pethramasaEngiliPulaDate}
              </div>
              <p className="text-xs text-[#1B3325]/70">
                Bhadrapada Bahula Amavasya (Pethramasa)
              </p>
            </div>

            <div className="p-6 bg-[#FFF8E9] border border-[#1B3325]/15 space-y-2">
              <div className="text-xs uppercase tracking-wider text-[#1B3325]/75 font-bold">
                {lang === 'te'
                  ? '3. అలిగిన బతుకమ్మ (6వ రోజు విశ్రాంతి)'
                  : '3. Aligina Bathukamma (Day 6 Rest)'}
              </div>
              <div className="font-serif-editorial text-2xl font-bold text-[#1B3325]">
                {yearData.aliginaRestDayDate}
              </div>
              <p className="text-xs text-[#1B3325]/70">Ashwayuja Shukla Panchami</p>
            </div>

            <div className="p-6 bg-[#1B3325] text-[#FFF8E9] border border-[#E8B83F] space-y-2">
              <div className="text-xs uppercase tracking-wider text-[#E8B83F] font-bold">
                {lang === 'te'
                  ? '4. సద్దుల బతుకమ్మ (9వ రోజు ముగింపు)'
                  : '4. Saddula Bathukamma (Grand Finale)'}
              </div>
              <div className="font-serif-editorial text-2xl font-bold text-[#E8B83F]">
                {yearData.saddulaBathukammaDate}
              </div>
              <p className="text-xs text-[#FFF8E9]/80">
                Ashwayuja Shukla Durgashtami (Dasara: {yearData.dasaraDate})
              </p>
            </div>
          </div>

          <p className="text-sm text-[#1B3325]/85 pt-2">
            <strong>{lang === 'te' ? 'పంచాంగ గమనిక:' : 'Editorial Verification Note:'}</strong>{' '}
            {yearData.notes[lang]}
          </p>
        </section>
      </SmoothReveal>
    </article>
  );
};

/* ==========================================================================
   K. REGIONAL TRADITIONS — /regional-traditions/
   ========================================================================== */
export const RegionalTraditionsPage: React.FC<PageProps> = ({ lang, onNavigate }) => {
  return (
    <article className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 py-14 space-y-16">
      <SmoothReveal>
        <header className="space-y-5 border-b-2 border-[#1B3325]/15 pb-10 text-center max-w-4xl mx-auto">
          <SacredLotusDivider
            label={
              lang === 'te'
                ? 'జిల్లాల వారీ సంప్రదాయాల డైరెక్టరీ'
                : 'District & Sub-Regional Heritage Atlas'
            }
          />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-editorial font-bold text-[#1B3325]">
            {lang === 'te'
              ? 'తెలంగాణ ప్రాంతీయ సంప్రదాయాలు: జిల్లాల వారీ ఆచారాలు'
              : 'Regional Traditions Across Telangana Districts'}
          </h1>
          <p className="text-lg sm:text-xl text-[#1B3325]/85 font-serif-editorial leading-relaxed">
            {lang === 'te'
              ? 'ఉత్తర, మధ్య, దక్షిణ తెలంగాణ మరియు హైదరాబాద్ పట్టణ ప్రాంతాల్లో బొడ్డెమ్మ, బతుకమ్మ వేడుకల ప్రత్యేకతలు.'
              : 'Explore how courtyard clay altars, bamboo trays, tank immersions, and festive offerings vary across Telangana’s cultural regions.'}
          </p>
        </header>
      </SmoothReveal>

      <SmoothReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {REGIONAL_TRADITIONS.map((reg, idx) => (
            <section
              key={reg.id}
              className="bg-[#FFF8E9] border border-[#1B3325]/20 overflow-hidden flex flex-col justify-between magazine-shadow"
            >
              <div>
                <ResilientImage
                  src={REGION_IMAGES[idx % REGION_IMAGES.length]}
                  alt={reg.regionName.en}
                  aspectClassName="aspect-[16/9]"
                  className="w-full h-full object-cover"
                />
                <div className="p-8 space-y-4">
                  <div className="text-xs uppercase tracking-wider text-[#B84232] font-bold">
                    {reg.districts.join(' · ')}
                  </div>

                  <h2 className="text-3xl font-serif-editorial font-bold text-[#1B3325]">
                    {reg.regionName[lang]}
                  </h2>

                  <div className="space-y-3 text-base text-[#1B3325]/90 leading-relaxed pt-2">
                    <p>
                      <strong className="text-[#B84232]">
                        {lang === 'te' ? 'బొడ్డెమ్మ ఆచారం:' : 'Boddemma Custom:'}
                      </strong>{' '}
                      {reg.boddemmaPractice[lang]}
                    </p>
                    <p>
                      <strong className="text-[#315D38]">
                        {lang === 'te' ? 'బతుకమ్మ ప్రత్యేకత:' : 'Bathukamma Highlight:'}
                      </strong>{' '}
                      {reg.bathukammaHighlight[lang]}
                    </p>
                    <p>
                      <strong className="text-[#1B3325]">
                        {lang === 'te' ? 'ప్రత్యేక నైవేద్యాలు:' : 'Signature Offerings:'}
                      </strong>{' '}
                      {reg.signatureSongOrFood[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </SmoothReveal>

      <SmoothReveal>
        <div className="p-8 bg-[#1B3325] text-[#FFF8E9] border-2 border-[#E8B83F] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 magazine-shadow">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-[#E8B83F]">
              {lang === 'te'
                ? 'మీ జిల్లా లేదా గ్రామానికి చెందిన ప్రత్యేక ఆచారాన్ని చేర్చండి'
                : 'Contribute Your Village or District’s Specific Tradition'}
            </h3>
            <p className="text-sm text-[#FFF8E9]/85">
              {lang === 'te'
                ? 'సంపాదకీయ బృందం పరిశీలన అనంతరం మీ పేరుతో ప్రాంతీయ డైరెక్టరీలో ప్రచురించబడుతుంది.'
                : 'All regional submissions undergo editorial review and are published with community attribution.'}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/contribute/')}
            className="px-7 py-3.5 bg-[#E8B83F] text-[#1B3325] text-xs font-bold uppercase tracking-wider whitespace-nowrap cursor-pointer"
          >
            {lang === 'te' ? 'మా ఊరి ఆచారాన్ని పంపండి →' : 'Submit Regional Custom →'}
          </button>
        </div>
      </SmoothReveal>
    </article>
  );
};

/* ==========================================================================
   L. EDUCATIONAL RESOURCES, GLOSSARY, QUIZ & VISUAL STUDIO — /learn/
   ========================================================================== */
export const LearnAndStudioPage: React.FC<PageProps> = ({ lang, onNavigate }) => {
  const [glossaryQuery, setGlossaryQuery] = useState('');

  const filteredGlossary = GLOSSARY_DATA.filter((item) => {
    const q = glossaryQuery.toLowerCase();
    return (
      item.term.toLowerCase().includes(q) ||
      item.teluguScript.includes(q) ||
      item.meaning.en.toLowerCase().includes(q) ||
      item.meaning.te.includes(q)
    );
  });

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 py-14 space-y-20">
      <SmoothReveal>
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#1B3325]/15 pb-10">
          <div className="space-y-4 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#B84232] font-bold">
              {lang === 'te'
                ? 'విద్యార్థులు, ఉపాధ్యాయులు & కుటుంబాల కోసం'
                : 'For Students, Teachers, Researchers & Families'}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-editorial font-bold text-[#1B3325]">
              {lang === 'te'
                ? 'విద్యా వనరులు, సాంస్కృతిక పదకోశం, క్విజ్ & విజువల్ స్టూడియో'
                : 'Interactive Learning, Cultural Glossary & Visual Studio'}
            </h1>
            <p className="text-lg text-[#1B3325]/85 font-serif-editorial leading-relaxed">
              {lang === 'te'
                ? 'బొడ్డెమ్మ, బతుకమ్మ పండుగల ప్రాథమిక అవగాహన, తెలుగు సాంస్కృతిక పదకోశం, ఇంటరాక్టివ్ క్విజ్ మరియు AI విజువల్ స్టూడియో.'
                : 'Explore visual classroom explainers, a searchable Telugu cultural glossary, an interactive knowledge quiz, shareable fact cards, and our AI Cultural Visual Studio.'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            className="px-5 py-3 bg-[#1B3325] text-[#E8B83F] text-xs font-bold uppercase tracking-wider flex items-center gap-2 shrink-0 self-start md:self-auto cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>
              {lang === 'te' ? 'స్టడీ షీట్ ప్రింట్ చేయండి' : 'Print Classroom Study Sheet'}
            </span>
          </button>
        </header>
      </SmoothReveal>

      {/* Illustrated Beginner Explainers */}
      <SmoothReveal>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-[#FFF8E9] border border-[#1B3325]/20 overflow-hidden magazine-shadow">
            <ResilientImage
              src={GENERATED_ASSETS.boddemmaClay}
              alt="Boddemma clay altar"
              aspectClassName="aspect-[16/9]"
            />
            <div className="p-8 space-y-3">
              <div className="text-xs uppercase tracking-wider text-[#B84232] font-bold">
                {lang === 'te' ? 'విద్యార్థి మార్గదర్శిని 01' : 'Visual Study Guide 01'}
              </div>
              <h2 className="text-3xl font-serif-editorial font-bold text-[#1B3325]">
                {lang === 'te'
                  ? 'బొడ్డెమ్మ: 5 నిమిషాల్లో ప్రాథమిక పరిచయం'
                  : 'Beginner’s Guide to Boddemma'}
              </h2>
              <p className="text-base text-[#1B3325]/85 leading-relaxed">
                {lang === 'te'
                  ? '1. ఎప్పుడు: బతుకమ్మకు ముందు 9 రోజులు. 2. దేనితో చేస్తారు: పుట్టమట్టితో 3 లేదా 5 అంతస్తుల గద్దె కట్టి సున్నం, పసుపు, కుంకుమలతో అలంకరిస్తారు. 3. ప్రాముఖ్యత: చిన్న ఆడపిల్లలకు సమష్టి జీవనాన్ని, ప్రకృతి ఆరాధనను నేర్పుతుంది.'
                  : '1. When: Celebrated for 9 days before Bathukamma begins. 2. Material: Sculpted from sacred termite-mound clay (puttamatti) into a 5-step pyramid painted with white lime, turmeric, and red kumkuma. 3. Purpose: Teaches young girls community bonding and reverence for Mother Earth.'}
              </p>
            </div>
          </div>

          <div className="bg-[#FFF8E9] border border-[#1B3325]/20 overflow-hidden magazine-shadow">
            <ResilientImage
              src={GENERATED_ASSETS.bathukammaStack}
              alt="Bathukamma floral stack"
              aspectClassName="aspect-[16/9]"
            />
            <div className="p-8 space-y-3">
              <div className="text-xs uppercase tracking-wider text-[#315D38] font-bold">
                {lang === 'te' ? 'విద్యార్థి మార్గదర్శిని 02' : 'Visual Study Guide 02'}
              </div>
              <h2 className="text-3xl font-serif-editorial font-bold text-[#1B3325]">
                {lang === 'te'
                  ? 'బతుకమ్మ: ప్రకృతి & పూల పండుగ పరిచయం'
                  : 'Beginner’s Guide to Bathukamma'}
              </h2>
              <p className="text-base text-[#1B3325]/85 leading-relaxed">
                {lang === 'te'
                  ? '1. ఎప్పుడు: మహాలయ అమావాస్య నుండి దుర్గాష్టమి వరకు 9 రోజులు. 2. ఎలా పేరుస్తారు: ఇత్తడి తాంబాలంలో గుమ్మడి ఆకులు పరిచి, తంగేడు, గునుగు, బంతి, చామంతి పూలతో గోపురంలా పేర్చి పైన పసుపు గౌరమ్మను ఉంచుతారు. 3. ముగింపు: చెరువులో పూలను నిమజ్జనం చేస్తారు.'
                  : '1. When: 9 days from Mahalaya Amavasya to Durgashtami. 2. How it is built: Concentric rings of wild seasonal flowers (Tangedu, Gunugu, Banthi, Chamanthi) arranged on a brass tambalam and topped with Pasupu Gouramma. 3. Ecological lesson: Honors rain-fed tanks (cheruvulu) and native flora.'}
              </p>
            </div>
          </div>
        </section>
      </SmoothReveal>

      {/* Interactive Quiz & Shareable Festival Cards */}
      <SmoothReveal>
        <QuizAndShareCards lang={lang} />
      </SmoothReveal>

      {/* AI Cultural Visual Studio */}
      <SmoothReveal>
        <CulturalVisualStudio lang={lang} />
      </SmoothReveal>

      {/* Searchable Telugu Cultural Glossary */}
      <SmoothReveal>
        <section aria-labelledby="glossary-heading" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[#1B3325]/15 pb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#B84232] font-bold">
                {lang === 'te' ? 'తెలుగు సాంస్కృతిక పదకోశం' : 'Searchable Cultural Terminology'}
              </p>
              <h2
                id="glossary-heading"
                className="text-3xl sm:text-4xl font-serif-editorial font-bold text-[#1B3325] mt-1"
              >
                {lang === 'te'
                  ? 'బొడ్డెమ్మ & బతుకమ్మ పదకోశం (Glossary)'
                  : 'Glossary of Telugu Sacred Festival Terms'}
              </h2>
            </div>

            <div className="relative min-w-[280px]">
              <Search className="w-4 h-4 text-[#1B3325]/50 absolute left-3.5 top-3.5" />
              <input
                type="search"
                value={glossaryQuery}
                onChange={(e) => setGlossaryQuery(e.target.value)}
                placeholder={
                  lang === 'te'
                    ? 'పదాన్ని వెతకండి (ఉదా: పుట్టమట్టి)...'
                    : 'Search term (e.g. Puttamatti, Tambalam)...'
                }
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FFF8E9] border border-[#1B3325]/30 text-[#1B3325]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredGlossary.map((g) => (
              <div
                key={g.term}
                className="p-7 bg-[#FFF8E9] border border-[#1B3325]/15 flex flex-col justify-between space-y-4 magazine-shadow"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#B84232] font-bold">
                    <span className="text-base">{g.teluguScript}</span>
                    <span className="font-mono-tabular uppercase">{g.term}</span>
                  </div>
                  <h3 className="text-2xl font-serif-editorial font-bold text-[#1B3325] mt-1">
                    {g.term} ({g.teluguScript})
                  </h3>
                  <p className="text-base text-[#1B3325]/90 mt-2 leading-relaxed">
                    {g.meaning[lang]}
                  </p>
                  <p className="text-xs text-[#1B3325]/70 mt-2">
                    <strong>{lang === 'te' ? 'సందర్భం:' : 'Context:'}</strong> {g.context[lang]}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate(g.relatedRoute)}
                  className="text-left text-xs font-bold uppercase tracking-wider text-[#B84232] hover:underline pt-3 border-t border-[#1B3325]/10 cursor-pointer"
                >
                  {lang === 'te' ? 'సంబంధిత మార్గదర్శిని చూడండి →' : 'Read Related Guide →'}
                </button>
              </div>
            ))}
          </div>
        </section>
      </SmoothReveal>
    </div>
  );
};
