import React from 'react';
import {
  FLOWERS_DATA,
  GENERATED_ASSETS,
  Language,
  NINE_DAYS_DATA,
  REGIONAL_TRADITIONS,
} from '../data/culturalArchive';
import { EDITORIAL_ARTICLES, FAQ_DATA } from '../data/editorialContent';
import { ResilientImage } from '../components/ResilientImage';
import { InteractiveFestivalTimeline } from '../components/InteractiveFestivalTimeline';
import { InteractiveBathukammaExplorer } from '../components/InteractiveBathukammaExplorer';
import { BoddemmaBuilder } from '../components/BoddemmaBuilder';
import { SacredLotusDivider, SmoothReveal } from '../components/TraditionalMotif';
import { ArrowRight } from 'lucide-react';

interface HomePageProps {
  lang: Language;
  onNavigate: (path: string) => void;
}

const DAY_IMAGES = [
  GENERATED_ASSETS.tangeduBlossoms,
  GENERATED_ASSETS.naivedyamOfferings,
  GENERATED_ASSETS.bathukammaStack,
  GENERATED_ASSETS.gunuguPlumes,
  GENERATED_ASSETS.courtyardMuggu,
  GENERATED_ASSETS.botanicalFlowers,
  GENERATED_ASSETS.heroVillage,
  GENERATED_ASSETS.pasupuGouramma,
  GENERATED_ASSETS.tankImmersion,
];

export const HomePage: React.FC<HomePageProps> = ({ lang, onNavigate }) => {
  const featuredArticle = EDITORIAL_ARTICLES[0];

  return (
    <div className="space-y-24 pb-12">
      {/* GRAND MAGAZINE COVER HERO SECTION */}
      <section className="relative bg-[#1B3325] text-[#FFF8E9] overflow-hidden border-b-4 border-[#E8B83F]">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left 7 Cols: Bold Spiritual Editorial Cover Headline */}
          <div className="lg:col-span-7 px-4 sm:px-8 lg:px-12 py-14 md:py-24 flex flex-col justify-between z-10">
            <SmoothReveal className="space-y-7">
              <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.22em] uppercase text-[#E8B83F] font-bold">
                <span>
                  {lang === 'te'
                    ? 'తెలంగాణ పవిత్ర పూల వారసత్వ పత్రిక'
                    : 'Sacred Cultural Heritage Monograph'}
                </span>
                <span aria-hidden="true">·</span>
                <span>The Panchayithi Network</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[4.4rem] font-serif-editorial font-bold leading-[1.06] text-[#FFF8E9]">
                {lang === 'te'
                  ? 'బొడ్డెమ్మ & బతుకమ్మ: తెలంగాణ సజీవ పూల సంప్రదాయాలు'
                  : 'Boddemma & Bathukamma: The Living Floral Traditions of Telangana'}
              </h1>

              <p className="text-lg sm:text-xl text-[#FFF8E9]/90 leading-relaxed max-w-2xl font-serif-editorial">
                {lang === 'te'
                  ? 'తెలంగాణ మట్టిని, చెరువులను, పసుపు గౌరమ్మను, తీరొక్క అడవి పూలను తరతరాల సంస్కృతితో ముడివేసే పవిత్ర సంప్రదాయాల దృశ్య ప్రయాణం.'
                  : "Discover the stories, flowers, rituals, and sacred traditions that connect Telangana's people to their land and heritage."}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/boddemma/')}
                  className="px-8 py-4 bg-[#E8B83F] text-[#1B3325] text-sm font-bold uppercase tracking-wider hover:bg-[#d9a72b] transition-all flex items-center gap-2.5 whitespace-nowrap cursor-pointer"
                >
                  <span>{lang === 'te' ? 'బొడ్డెమ్మను అన్వేషించండి' : 'Explore Boddemma'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/bathukamma/')}
                  className="px-8 py-4 bg-[#B84232] text-[#FFF8E9] hover:bg-[#9e3527] text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer"
                >
                  {lang === 'te' ? 'బతుకమ్మను తెలుసుకోండి' : 'Discover Bathukamma'}
                </button>
              </div>
            </SmoothReveal>

            {/* Magazine Cover Strip */}
            <div className="mt-14 pt-8 border-t border-[#FFF8E9]/20 grid grid-cols-3 gap-6">
              <div>
                <div className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#E8B83F]">
                  18 {lang === 'te' ? 'రోజులు' : 'Sacred Days'}
                </div>
                <div className="text-xs text-[#FFF8E9]/75 mt-1">
                  {lang === 'te' ? 'బొడ్డెమ్మ & బతుకమ్మ పండుగ చక్రం' : '9 Days Clay + 9 Days Flowers'}
                </div>
              </div>
              <div>
                <div className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#E8B83F]">
                  {lang === 'te' ? 'తంగేడు' : 'Tangedu'}
                </div>
                <div className="text-xs text-[#FFF8E9]/75 mt-1">
                  {lang === 'te' ? 'తెలంగాణ రాష్ట్ర పుష్పం' : 'Golden State Flower of Telangana'}
                </div>
              </div>
              <div>
                <div className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#E8B83F]">
                  {lang === 'te' ? 'గౌరమ్మ' : 'Gouramma'}
                </div>
                <div className="text-xs text-[#FFF8E9]/75 mt-1">
                  {lang === 'te' ? 'పసుపు గౌరీదేవి ఆరాధన' : 'Sacred Turmeric Mother Goddess'}
                </div>
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Multi-Image Editorial Cover Collage */}
          <div className="lg:col-span-5 grid grid-cols-2 grid-rows-2 gap-2 p-2 bg-[#14261C]">
            <div className="col-span-2 row-span-1 relative overflow-hidden min-h-[260px]">
              <ResilientImage
                src={GENERATED_ASSETS.heroVillage}
                alt="Telangana village women arranging Bathukamma flowers at golden hour"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                aspectClassName="h-full"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4">
                <span className="text-[11px] uppercase tracking-widest text-[#E8B83F] font-bold">
                  {lang === 'te' ? 'పల్లె వాకిలి' : 'Village Courtyard'}
                </span>
                <p className="text-sm font-serif-editorial font-semibold text-[#FFF8E9]">
                  {lang === 'te'
                    ? 'ముంగిట్లో ముగ్గుపై తీరొక్క పూల బతుకమ్మ పేర్పు'
                    : 'Golden Hour Floral Preparation in Rural Telangana'}
                </p>
              </div>
            </div>

            <div className="col-span-1 row-span-1 relative overflow-hidden min-h-[200px]">
              <ResilientImage
                src={GENERATED_ASSETS.pasupuGouramma}
                alt="Sacred Pasupu Gouramma turmeric cone with kumkuma and brass oil lamps"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                aspectClassName="h-full"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-3">
                <p className="text-xs font-serif-editorial font-bold text-[#E8B83F]">
                  {lang === 'te' ? 'పసుపు గౌరమ్మ' : 'Pasupu Gouramma'}
                </p>
              </div>
            </div>

            <div className="col-span-1 row-span-1 relative overflow-hidden min-h-[200px]">
              <ResilientImage
                src={GENERATED_ASSETS.boddemmaClay}
                alt="Traditional five-tiered Boddemma clay altar decorated with seasonal flowers"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                aspectClassName="h-full"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-3">
                <p className="text-xs font-serif-editorial font-bold text-[#E8B83F]">
                  {lang === 'te' ? 'పుట్టమట్టి బొడ్డెమ్మ' : 'Puttamatti Boddemma'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 space-y-28">
        {/* 1. SPIRITUAL EDITORIAL PULL-QUOTE & VISUAL MOSAIC */}
        <SmoothReveal>
          <section className="space-y-12">
            <div className="text-center max-w-4xl mx-auto space-y-5">
              <SacredLotusDivider
                label={lang === 'te' ? 'మట్టి, పువ్వు & గౌరమ్మ' : 'Sacred Soil, Wild Blossoms & Goddess Gauri'}
              />
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif-editorial font-bold text-[#1B3325] leading-[1.12]">
                {lang === 'te'
                  ? 'పుట్టమట్టిలో మొదలై చెరువు అలలపై వికసించే ఆధ్యాత్మిక పూల కావ్యం'
                  : 'An Eighteen-Day Sacred Dialogue Between Earth, Flower, and Water'}
              </h2>
              <p className="text-lg sm:text-xl text-[#1B3325]/85 font-serif-editorial leading-relaxed max-w-3xl mx-auto">
                {lang === 'te'
                  ? 'తెలంగాణలో శరదృతువు అంటే ప్రకృతి మాతను పూలతో అభిషేకించే పుణ్యకాలం. భాద్రపద మాసంలో పుట్టమట్టితో గద్దె కట్టి బాల గౌరిని "బొడ్డెమ్మ"గా కొలిచి, మహాలయ అమావాస్య నుండి దుర్గాష్టమి వరకు తంగేడు, గునుగు పూల గోపురంపై "పసుపు గౌరమ్మ"ను నిలిపి ఆరాధించే అపురూప సంప్రదాయం.'
                  : 'When the late monsoon fills Telangana’s chain-linked village tanks and carpets the red earth in golden Tangedu, every courtyard becomes a living sanctum—honoring Mother Nature first through sculpted termite-mound clay (Boddemma) and then through towering cones of wild blossoms (Bathukamma).'}
              </p>
            </div>

            {/* 4-Panel Magazine Photo Essay Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  img: GENERATED_ASSETS.courtyardMuggu,
                  kicker: { en: '01 · SACRED COURTYARD', te: '01 · పవిత్ర ముంగిలి' },
                  title: { en: 'Dawn Muggu & Clay Altar', te: 'ముగ్గుపై బొడ్డెమ్మ పీఠం' },
                  path: '/boddemma/',
                },
                {
                  img: GENERATED_ASSETS.tangeduBlossoms,
                  kicker: { en: '02 · GOLDEN FLORA', te: '02 · బంగారు తంగేడు' },
                  title: { en: 'Wild Tangedu Harvest', te: 'తంగేడు పూల సేకరణ' },
                  path: '/bathukamma/flowers/',
                },
                {
                  img: GENERATED_ASSETS.pasupuGouramma,
                  kicker: { en: '03 · DIVINE APEX', te: '03 · పసుపు గౌరమ్మ' },
                  title: { en: 'Pasupu Gouramma Worship', te: 'గౌరీదేవి కుంకుమ పూజ' },
                  path: '/bathukamma/',
                },
                {
                  img: GENERATED_ASSETS.tankImmersion,
                  kicker: { en: '04 · TWILIGHT FINALE', te: '04 · గంగమ్మ ఒడికి' },
                  title: { en: 'Cheruvu Tank Immersion', te: 'చెరువులో దీపాల నిమజ్జనం' },
                  path: '/traditions/',
                },
              ].map((card, i) => (
                <div
                  key={i}
                  onClick={() => onNavigate(card.path)}
                  className="group relative overflow-hidden border border-[#203A2B]/20 bg-[#1B3325] cursor-pointer magazine-shadow"
                >
                  <ResilientImage
                    src={card.img}
                    alt={card.title.en}
                    aspectClassName="aspect-[3/4]"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#E8B83F] font-bold">
                      {card.kicker[lang]}
                    </span>
                    <h3 className="text-2xl font-serif-editorial font-bold text-[#FFF8E9] mt-1">
                      {card.title[lang]}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </SmoothReveal>

        {/* 2. TWO DISTINCT OVERSIZED MAGAZINE FEATURE SPREADS: BODDEMMA & BATHUKAMMA */}
        <SmoothReveal>
          <section aria-labelledby="twin-traditions-heading" className="space-y-10">
            <div className="border-b-2 border-[#203A2B]/15 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#B84232] font-bold">
                  {lang === 'te' ? 'రెండు పవిత్ర సంప్రదాయాలు' : 'Two Pillars of Telangana Heritage'}
                </p>
                <h2
                  id="twin-traditions-heading"
                  className="text-4xl sm:text-5xl font-serif-editorial font-bold text-[#1B3325] mt-1"
                >
                  {lang === 'te'
                    ? 'పుట్టమట్టి బొడ్డెమ్మ — తీరొక్క పూల బతుకమ్మ'
                    : 'The Stepped Clay of Boddemma & The Floral Cone of Bathukamma'}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => onNavigate('/boddemma-vs-bathukamma/')}
                className="px-5 py-2.5 bg-[#F4E8CE] border border-[#B84232]/40 text-xs font-bold uppercase tracking-wider text-[#B84232] hover:bg-[#B84232] hover:text-[#FFF8E9] transition-colors whitespace-nowrap cursor-pointer"
              >
                {lang === 'te'
                  ? 'రెండింటి మధ్య పూర్తి తేడాలు →'
                  : 'Compare Boddemma vs Bathukamma →'}
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
              {/* Feature Spread 1: Boddemma */}
              <article className="bg-[#F4E8CE] border-2 border-[#203A2B]/15 flex flex-col justify-between magazine-shadow overflow-hidden">
                <div>
                  <div className="relative overflow-hidden">
                    <ResilientImage
                      src={GENERATED_ASSETS.boddemmaClay}
                      alt="Traditional five-tiered Boddemma clay altar made from termite-mound earth decorated with lime stripes, turmeric, kumkuma, and seasonal flowers"
                      aspectClassName="aspect-[16/10]"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#1B3325]/90 text-[#E8B83F] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest">
                      {lang === 'te' ? 'మొదటి 9 రోజులు · పుట్టమట్టి గద్దె' : 'Part I · Puttamatti Clay Altar'}
                    </div>
                  </div>

                  <div className="p-8 md:p-10 space-y-4">
                    <div className="text-xs uppercase tracking-widest text-[#B84232] font-bold">
                      బొడ్డెమ్మ పండుగ · Bhadrapada Bahula Paksha
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-serif-editorial font-bold text-[#1B3325] leading-tight">
                      {lang === 'te'
                        ? 'బొడ్డెమ్మ: బాల గౌరీదేవి పుట్టమట్టి ఆరాధన'
                        : 'Boddemma: The Sacred Five-Tiered Earthen Altar'}
                    </h3>

                    <p className="text-base md:text-lg text-[#1B3325]/85 leading-relaxed">
                      {lang === 'te'
                        ? 'మహాలయ అమావాస్యకు ముందు తొమ్మిది రోజుల పాటు కన్నెపిల్లలు పుట్టమట్టిని సేకరించి ఐదు అంతస్తుల గద్దెను నిర్మిస్తారు. సున్నం, పసుపు, కుంకుమలతో అలంకరించి, గద్దెపై బియ్యం నింపిన గురిగిని, పూలను ఉంచి సాయంత్రం దీపాల వెలుగులో ఆరాధిస్తారు.'
                        : 'Observed for nine days leading up to Mahalaya Amavasya, Boddemma honors Goddess Gauri in her child form. Sculpted from sacred termite-mound earth (puttamatti) into a stepped terrace painted with white lime, turmeric, and vermilion, it initiates Telangana’s autumn sacred season.'}
                    </p>
                  </div>
                </div>

                <div className="px-8 md:px-10 pb-8 pt-5 border-t border-[#203A2B]/15 flex items-center justify-between bg-[#FFF8E9]/60">
                  <span className="text-xs font-bold text-[#1B3325]/75">
                    {lang === 'te' ? 'ముగింపు: మహాలయ అమావాస్య' : 'Concludes on Mahalaya Amavasya'}
                  </span>
                  <button
                    type="button"
                    onClick={() => onNavigate('/boddemma/')}
                    className="px-6 py-3 bg-[#1B3325] text-[#E8B83F] text-xs font-bold uppercase tracking-wider hover:bg-[#315D38] transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>{lang === 'te' ? 'బొడ్డెమ్మ మార్గదర్శిని' : 'Explore Boddemma Guide'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>

              {/* Feature Spread 2: Bathukamma */}
              <article className="bg-[#F4E8CE] border-2 border-[#203A2B]/15 flex flex-col justify-between magazine-shadow overflow-hidden">
                <div>
                  <div className="relative overflow-hidden">
                    <ResilientImage
                      src={GENERATED_ASSETS.bathukammaStack}
                      alt="Concentric multicolored Bathukamma floral stack on a brass tambalam crowned with yellow turmeric Pasupu Gouramma"
                      aspectClassName="aspect-[16/10]"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#B84232] text-[#FFF8E9] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest">
                      {lang === 'te' ? 'తరువాతి 9 రోజులు · పూల గోపురం' : 'Part II · Concentric Floral Cone'}
                    </div>
                  </div>

                  <div className="p-8 md:p-10 space-y-4">
                    <div className="text-xs uppercase tracking-widest text-[#315D38] font-bold">
                      బతుకమ్మ పండుగ · Amavasya to Durgashtami
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-serif-editorial font-bold text-[#1B3325] leading-tight">
                      {lang === 'te'
                        ? 'బతుకమ్మ: తొమ్మిది రోజుల పూల గోపుర మహా ఉత్సవం'
                        : 'Bathukamma: The Nine-Day Floral Symphony of Life'}
                    </h3>

                    <p className="text-base md:text-lg text-[#1B3325]/85 leading-relaxed">
                      {lang === 'te'
                        ? 'ఎంగిలి పూల బతుకమ్మతో ప్రారంభమై సద్దుల బతుకమ్మతో ముగిసే తొమ్మిది రోజుల పండుగ. ఇత్తడి తాంబాలంలో గుమ్మడి ఆకులు పరిచి, తంగేడు, గునుగు, బంతి, చామంతి పూలను గోపురంలా పేర్చి పైన పసుపు గౌరమ్మను ఉంచి భక్తితో కొలుస్తారు.'
                        : 'From Mahalaya Amavasya to Durgashtami, women arrange concentric rings of golden Tangedu, crimson Gunugu, marigold, and lotus on brass tambalam plates—crowning the floral cone with a sacred turmeric Pasupu Gouramma before twilight immersion in village tanks.'}
                    </p>
                  </div>
                </div>

                <div className="px-8 md:px-10 pb-8 pt-5 border-t border-[#203A2B]/15 flex items-center justify-between bg-[#FFF8E9]/60">
                  <span className="text-xs font-bold text-[#1B3325]/75">
                    {lang === 'te' ? 'ముగింపు: సద్దుల బతుకమ్మ (దుర్గాష్టమి)' : 'Culminates on Saddula Bathukamma'}
                  </span>
                  <button
                    type="button"
                    onClick={() => onNavigate('/bathukamma/')}
                    className="px-6 py-3 bg-[#B84232] text-[#FFF8E9] text-xs font-bold uppercase tracking-wider hover:bg-[#1B3325] transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>{lang === 'te' ? 'బతుకమ్మ మార్గదర్శిని' : 'Explore Bathukamma Guide'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            </div>
          </section>
        </SmoothReveal>

        {/* 3. VISUAL FLOWER GALLERY & INTERACTIVE BATHUKAMMA LAYER EXPLORER */}
        <SmoothReveal>
          <section className="space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[#203A2B]/15 pb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#B84232] font-bold">
                  {lang === 'te' ? 'పవిత్ర పుష్పాల విజ్ఞానం' : 'Sacred Botanical Gallery'}
                </p>
                <h2 className="text-4xl sm:text-5xl font-serif-editorial font-bold text-[#1B3325] mt-1">
                  {lang === 'te'
                    ? 'తెలంగాణ మట్టిపై వికసించే బతుకమ్మ పూలు'
                    : 'The Sacred Wildflowers of Telangana'}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => onNavigate('/bathukamma/flowers/')}
                className="px-5 py-2.5 bg-[#1B3325] text-[#E8B83F] text-xs font-bold uppercase tracking-wider hover:bg-[#315D38] transition-colors whitespace-nowrap cursor-pointer"
              >
                {lang === 'te'
                  ? 'మొత్తం 8 పూల చిత్రాలు & వివరాలు →'
                  : 'Open Full Illustrated Flower Guide →'}
              </button>
            </div>

            {/* Image-Rich Magazine Cards for Top 4 Flowers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FLOWERS_DATA.slice(0, 4).map((flower) => (
                <article
                  key={flower.id}
                  onClick={() => onNavigate('/bathukamma/flowers/')}
                  className="group bg-[#FFF8E9] border border-[#203A2B]/20 overflow-hidden flex flex-col justify-between cursor-pointer magazine-shadow"
                >
                  <div>
                    <div className="relative overflow-hidden">
                      <ResilientImage
                        src={flower.image}
                        alt={`${flower.transliteration} (${flower.scientificName})`}
                        aspectClassName="aspect-[4/3]"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3 flex items-center justify-between text-xs text-[#FFF8E9]">
                        <span className="font-bold text-[#E8B83F]">{flower.teluguName}</span>
                        <span className="italic font-serif-editorial">
                          {flower.scientificName.split('(')[0]}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-2.5">
                      <h3 className="text-2xl font-serif-editorial font-bold text-[#1B3325]">
                        {flower.transliteration}
                      </h3>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#315D38]">
                        {flower.englishCommonName}
                      </p>
                      <p className="text-sm text-[#1B3325]/85 leading-relaxed line-clamp-3">
                        {flower.culturalSignificance[lang]}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-5 pt-3 border-t border-[#203A2B]/10 text-xs font-bold text-[#B84232] group-hover:underline">
                    {lang === 'te' ? 'వృక్షశాస్త్ర వివరాలు చూడండి →' : 'Inspect Botanical Profile →'}
                  </div>
                </article>
              ))}
            </div>

            {/* Interactive Bathukamma Layer Stack Explorer */}
            <InteractiveBathukammaExplorer lang={lang} onNavigate={onNavigate} />
          </section>
        </SmoothReveal>

        {/* 4. ILLUSTRATED NINE DAYS OF BATHUKAMMA MAGAZINE SHOWCASE */}
        <SmoothReveal>
          <section className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[#203A2B]/15 pb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#B84232] font-bold">
                  {lang === 'te' ? 'తొమ్మిది రోజుల నైవేద్యాల క్రమం' : 'Nine Days of Sacred Offerings'}
                </p>
                <h2 className="text-4xl sm:text-5xl font-serif-editorial font-bold text-[#1B3325] mt-1">
                  {lang === 'te'
                    ? 'ఎంగిలి పూల నుండి సద్దుల బతుకమ్మ వరకు — 9 రోజుల దృశ్య మాలిక'
                    : 'The Nine Days of Bathukamma & Daily Naivedyam'}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => onNavigate('/bathukamma/nine-days/')}
                className="px-5 py-2.5 bg-[#B84232] text-[#FFF8E9] text-xs font-bold uppercase tracking-wider hover:bg-[#1B3325] transition-colors whitespace-nowrap cursor-pointer"
              >
                {lang === 'te' ? 'ప్రతి రోజు పూర్తి వివరాలు చూడండి →' : 'Explore All 9 Days in Detail →'}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {NINE_DAYS_DATA.map((day, idx) => (
                <article
                  key={day.dayNumber}
                  onClick={() => onNavigate('/bathukamma/nine-days/')}
                  className="group bg-[#FFF8E9] border border-[#203A2B]/20 overflow-hidden flex flex-col justify-between cursor-pointer magazine-shadow"
                >
                  <div>
                    <div className="relative overflow-hidden">
                      <ResilientImage
                        src={DAY_IMAGES[idx % DAY_IMAGES.length]}
                        alt={day.transliteration}
                        aspectClassName="aspect-[16/10]"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 bg-[#1B3325] text-[#E8B83F] px-3 py-1 text-xs font-mono-tabular font-bold">
                        DAY 0{day.dayNumber}
                      </div>
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4">
                        <div className="text-xs text-[#E8B83F] font-bold">{day.teluguName}</div>
                        <h3 className="text-2xl font-serif-editorial font-bold text-[#FFF8E9]">
                          {day.transliteration}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 space-y-2.5">
                      <div className="text-xs font-bold text-[#B84232] uppercase tracking-wider">
                        {lang === 'te' ? 'నైవేద్యం:' : 'Sacred Offering:'} {day.naivedyamTitle[lang]}
                      </div>
                      <p className="text-sm text-[#1B3325]/85 leading-relaxed line-clamp-3">
                        {day.culturalSignificance[lang]}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-5 pt-3 border-t border-[#203A2B]/10 flex items-center justify-between text-xs font-bold text-[#1B3325]">
                    <span>{day.tithiTiming[lang].split('(')[0]}</span>
                    <span className="text-[#B84232] group-hover:underline">
                      {lang === 'te' ? 'వివరాలు →' : 'Read Ritual →'}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </SmoothReveal>

        {/* 5. INTERACTIVE BODDEMMA STEP-BY-STEP BUILDER & TIMELINE */}
        <SmoothReveal className="space-y-16">
          <BoddemmaBuilder lang={lang} />
          <InteractiveFestivalTimeline lang={lang} onNavigate={onNavigate} />
        </SmoothReveal>

        {/* 6. CINEMATIC SPIRITUAL MAGAZINE SPREAD: NAIVEDYAM & TANK IMMERSION */}
        <SmoothReveal>
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left 7 Cols: Twilight Tank Immersion Visual Feature */}
            <div className="lg:col-span-7 relative overflow-hidden border-2 border-[#203A2B]/20 min-h-[420px] flex flex-col justify-end magazine-shadow">
              <ResilientImage
                src={GENERATED_ASSETS.tankImmersion}
                alt="Women in silk sarees immersing glowing Bathukamma flower stacks and oil lamps in a Telangana village tank at dusk"
                className="absolute inset-0 w-full h-full object-cover"
                aspectClassName="h-full w-full absolute inset-0"
              />
              <div className="relative z-10 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-8 md:p-12 space-y-4 text-[#FFF8E9]">
                <span className="text-xs uppercase tracking-[0.22em] text-[#E8B83F] font-bold">
                  {lang === 'te'
                    ? 'సద్దుల బతుకమ్మ నిమజ్జనం & చెరువుల సంస్కృతి'
                    : 'Sacred Hydrology & Twilight Immersion'}
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif-editorial font-bold leading-tight text-[#FFF8E9]">
                  {featuredArticle.title[lang]}
                </h2>
                <p className="text-sm sm:text-base text-[#FFF8E9]/90 leading-relaxed max-w-2xl">
                  {featuredArticle.directAnswerSummary[lang]}
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onNavigate('/stories/')}
                    className="px-6 py-3 bg-[#E8B83F] text-[#1B3325] text-xs font-bold uppercase tracking-wider hover:bg-[#d9a72b] transition-colors cursor-pointer"
                  >
                    {lang === 'te' ? 'పూర్తి పరిశోధనా వ్యాసం చదవండి →' : 'Read Full Magazine Feature →'}
                  </button>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Sacred Naivedyam Culinary Heritage Feature */}
            <div className="lg:col-span-5 bg-[#F4E8CE] border-2 border-[#203A2B]/15 overflow-hidden flex flex-col justify-between magazine-shadow">
              <div>
                <ResilientImage
                  src={GENERATED_ASSETS.naivedyamOfferings}
                  alt="Traditional Bathukamma Naivedyam offerings on banana leaves and brass plates with sesame balls, flattened rice, and sattu pindi"
                  aspectClassName="aspect-[4/3]"
                />
                <div className="p-8 space-y-3">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#B84232] font-bold">
                    {lang === 'te' ? 'సాంప్రదాయ నైవేద్యాలు & వాయనాలు' : 'Sacred Harvest Offerings'}
                  </span>
                  <h3 className="text-3xl font-serif-editorial font-bold text-[#1B3325]">
                    {lang === 'te'
                      ? 'సత్తుపిండి, వెన్నముద్దలు & ఐదు రకాల సద్దులు'
                      : 'From Nuvvulu to Sattu Pindi: Agrarian Devotion on Banana Leaves'}
                  </h3>
                  <p className="text-sm md:text-base text-[#1B3325]/85 leading-relaxed">
                    {lang === 'te'
                      ? 'తెలంగాణ చేలలో పండే నువ్వులు, కొత్త బియ్యం, అటుకులు, కందిపప్పు, బెల్లం, వెన్నలతో తయారుచేసే తొమ్మిది రోజుల నైవేద్యాలు ప్రకృతికి మనిషి సమర్పించే కృతజ్ఞతా వాయనాలు.'
                      : 'Freshly harvested sesame, flattened paddy, jaggery, hand-churned butter, and roasted grain Sattu Pindi transform autumn farm bounty into shared neighborhood blessings (vayanalu).'}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-4 border-t border-[#203A2B]/15">
                <button
                  type="button"
                  onClick={() => onNavigate('/traditions/')}
                  className="text-xs font-bold uppercase tracking-wider text-[#B84232] hover:underline cursor-pointer"
                >
                  {lang === 'te' ? 'అన్ని ఆచారాలు & నైవేద్యాలు చూడండి →' : 'Explore Sacred Rituals & Offerings →'}
                </button>
              </div>
            </div>
          </section>
        </SmoothReveal>

        {/* 7. REGIONAL TRADITIONS ILLUSTRATED PREVIEW */}
        <SmoothReveal>
          <section className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[#203A2B]/15 pb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#B84232] font-bold">
                  {lang === 'te' ? 'ప్రాంతీయ సంప్రదాయాలు' : 'Regional Diversity Across Telangana'}
                </p>
                <h2 className="text-4xl sm:text-5xl font-serif-editorial font-bold text-[#1B3325] mt-1">
                  {lang === 'te'
                    ? 'తెలంగాణ జిల్లాల వారీ ఆచారాల వైవిధ్యం'
                    : 'Living Traditions Across Telangana’s Districts'}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => onNavigate('/regional-traditions/')}
                className="px-5 py-2.5 bg-[#1B3325] text-[#E8B83F] text-xs font-bold uppercase tracking-wider hover:bg-[#315D38] transition-colors whitespace-nowrap cursor-pointer"
              >
                {lang === 'te' ? 'ప్రాంతీయ డైరెక్టరీని తెరవండి →' : 'Open Regional Directory →'}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {REGIONAL_TRADITIONS.slice(0, 2).map((reg, idx) => (
                <div
                  key={reg.id}
                  onClick={() => onNavigate('/regional-traditions/')}
                  className="bg-[#FFF8E9] border border-[#203A2B]/20 overflow-hidden grid grid-cols-1 sm:grid-cols-12 cursor-pointer magazine-shadow group"
                >
                  <div className="sm:col-span-5 overflow-hidden">
                    <ResilientImage
                      src={idx === 0 ? GENERATED_ASSETS.courtyardMuggu : GENERATED_ASSETS.circleDance}
                      alt={reg.regionName.en}
                      aspectClassName="aspect-[4/3] sm:h-full"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="sm:col-span-7 p-6 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-[#B84232]">
                        {reg.districts.join(' · ')}
                      </div>
                      <h3 className="text-2xl font-serif-editorial font-bold text-[#1B3325]">
                        {reg.regionName[lang]}
                      </h3>
                      <p className="text-xs md:text-sm text-[#1B3325]/85 leading-relaxed">
                        {reg.bathukammaHighlight[lang]}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#315D38] group-hover:underline">
                      {lang === 'te' ? 'జిల్లా ఆచారాలు చదవండి →' : 'View District Customs →'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </SmoothReveal>

        {/* 8. FREQUENTLY ASKED QUESTIONS */}
        <SmoothReveal>
          <section aria-labelledby="home-faq-heading" className="space-y-8">
            <div className="border-b-2 border-[#203A2B]/15 pb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#B84232] font-bold">
                {lang === 'te' ? 'తరచుగా అడిగే ప్రశ్నలు (FAQ)' : 'Essential Cultural Questions'}
              </p>
              <h2
                id="home-faq-heading"
                className="text-4xl sm:text-5xl font-serif-editorial font-bold text-[#1B3325] mt-1"
              >
                {lang === 'te'
                  ? 'బొడ్డెమ్మ & బతుకమ్మపై ముఖ్యమైన ప్రశ్నలు – సమాధానాలు'
                  : 'Frequently Asked Questions About Boddemma & Bathukamma'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FAQ_DATA.map((faq) => (
                <div
                  key={faq.id}
                  className="p-8 bg-[#F4E8CE]/70 border border-[#203A2B]/15 space-y-3"
                >
                  <h3 className="text-2xl font-serif-editorial font-bold text-[#1B3325]">
                    {faq.question[lang]}
                  </h3>
                  <p className="text-sm md:text-base text-[#1B3325]/85 leading-relaxed">
                    {faq.answer[lang]}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </SmoothReveal>
      </div>
    </div>
  );
};
