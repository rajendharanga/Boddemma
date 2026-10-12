import React, { useState } from 'react';
import {
  FLOWERS_DATA,
  GENERATED_ASSETS,
  Language,
  NINE_DAYS_DATA,
  SOURCE_REGISTER,
} from '../data/culturalArchive';
import { BODDEMMA_VS_BATHUKAMMA_TABLE, FAQ_DATA } from '../data/editorialContent';
import { ResilientImage } from '../components/ResilientImage';
import { BoddemmaBuilder } from '../components/BoddemmaBuilder';
import { InteractiveBathukammaExplorer } from '../components/InteractiveBathukammaExplorer';
import { SacredLotusDivider, SmoothReveal } from '../components/TraditionalMotif';
import { ArrowRight, Search } from 'lucide-react';

interface PageProps {
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

const FLOWER_IMAGES: Record<string, string> = {
  tangedu: GENERATED_ASSETS.tangeduBlossoms,
  gunugu: GENERATED_ASSETS.gunuguPlumes,
  banthi: GENERATED_ASSETS.bathukammaStack,
  chamanthi: GENERATED_ASSETS.botanicalFlowers,
  gummadi: GENERATED_ASSETS.naivedyamOfferings,
  katla: GENERATED_ASSETS.botanicalFlowers,
  tamara: GENERATED_ASSETS.pasupuGouramma,
  beera: GENERATED_ASSETS.boddemmaClay,
};

/* ==========================================================================
   B. BODDEMMA PILLAR GUIDE — /boddemma/
   ========================================================================== */
export const BoddemmaGuidePage: React.FC<PageProps> = ({ lang, onNavigate }) => {
  return (
    <article className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 py-14 space-y-20">
      {/* Magazine Cover Header */}
      <SmoothReveal>
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-[#1B3325] text-[#FFF8E9] border-2 border-[#E8B83F] magazine-shadow overflow-hidden">
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E8B83F] font-bold">
                <span>
                  {lang === 'te'
                    ? 'సమగ్ర సాంస్కృతిక మార్గదర్శిని'
                    : 'Sacred Cultural Monograph · Pillar Guide'}
                </span>
                <span aria-hidden="true">·</span>
                <span>బొడ్డెమ్మ పండుగ</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-editorial font-bold text-[#FFF8E9] leading-[1.08]">
                {lang === 'te'
                  ? 'బొడ్డెమ్మ: బతుకమ్మకు నాంది పలికే తెలంగాణ పుట్టమట్టి పూల పండుగ'
                  : 'Boddemma: Telangana’s Sacred Earthen Prelude to Bathukamma'}
              </h1>

              {/* Concise Direct Definition */}
              <div className="p-6 bg-[#FFF8E9]/10 border-l-4 border-[#E8B83F] space-y-2">
                <p className="text-xs uppercase tracking-[0.18em] text-[#E8B83F] font-bold">
                  {lang === 'te'
                    ? 'సంక్షిప్త నిర్వచనం (Quick Definition)'
                    : 'Sacred Essence — What is Boddemma?'}
                </p>
                <p className="text-base sm:text-lg text-[#FFF8E9]/95 font-serif-editorial leading-relaxed">
                  {lang === 'te'
                    ? 'బొడ్డెమ్మ అనేది తెలంగాణలో బతుకమ్మ పండుగకు ముందు తొమ్మిది రోజుల పాటు (భాద్రపద పౌర్ణమి/బహుళ పక్షం నుండి మహాలయ అమావాస్య వరకు) కన్నెపిల్లలు మరియు మహిళలు జరుపుకునే సాంప్రదాయ మట్టి-పూల పండుగ. పుట్టమట్టితో మూడు లేదా ఐదు అంతస్తుల గద్దెను నిర్మించి, సున్నం, పసుపు, కుంకుమ, అడవి పూలతో అలంకరించి బాల గౌరీదేవిని ఆరాధిస్తారు.'
                    : 'Boddemma (బొడ్డెమ్మ) is a traditional nine-day autumn festival celebrated in Telangana primarily by unmarried girls and women during the waning lunar fortnight of Bhadrapada, concluding on Mahalaya Amavasya (the day Bathukamma begins). Boddemma centers on a stepped three- or five-tiered earthen altar sculpted from termite-mound clay (puttamatti), painted with white lime, turmeric, and vermilion, and adorned with seasonal wildflowers to honor Goddess Gauri in her child form.'}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('/boddemma-vs-bathukamma/')}
                className="px-7 py-3.5 bg-[#E8B83F] text-[#1B3325] text-xs font-bold uppercase tracking-wider hover:bg-[#d9a72b] transition-colors cursor-pointer"
              >
                {lang === 'te'
                  ? 'బొడ్డెమ్మ vs బతుకమ్మ తేడాలు →'
                  : 'Compare Boddemma vs Bathukamma →'}
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/traditions/')}
                className="px-7 py-3.5 bg-transparent text-[#FFF8E9] border border-[#FFF8E9]/40 hover:border-[#E8B83F] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                {lang === 'te' ? 'పవిత్ర ఆచారాలు చూడండి' : 'Explore Sacred Clay Rituals'}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-rows-2 gap-2 p-2 bg-[#13241A]">
            <ResilientImage
              src={GENERATED_ASSETS.boddemmaClay}
              alt="Authentic Telangana Boddemma stepped clay structure decorated with lime, turmeric, kumkuma, and seasonal flowers"
              aspectClassName="h-full min-h-[240px]"
              className="w-full h-full object-cover"
              priority
            />
            <ResilientImage
              src={GENERATED_ASSETS.courtyardMuggu}
              alt="Courtyard rice-flour lotus muggu and five-tiered Boddemma clay altar at dawn"
              aspectClassName="h-full min-h-[240px]"
              className="w-full h-full object-cover"
            />
          </div>
        </header>
      </SmoothReveal>

      {/* Deep Illustrated Magazine Spreads */}
      <SmoothReveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-12 text-lg text-[#1B3325]/90 leading-relaxed">
            <section className="space-y-4 bg-[#F4E8CE]/60 border border-[#1B3325]/15 p-8">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B84232] font-bold">
                {lang === 'te' ? 'అధ్యాయం 01' : 'Chapter 01 · Etymology & Spirit'}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif-editorial font-bold text-[#1B3325]">
                {lang === 'te'
                  ? 'బొడ్డెమ్మ అర్థం, ఆవిర్భావం మరియు సాంస్కృతిక ప్రాముఖ్యత'
                  : 'Meaning, Etymology, and Spiritual Significance'}
              </h2>
              <p>
                {lang === 'te'
                  ? 'తెలుగు భాషా సంప్రదాయంలో "బొడ్డి" అంటే చిన్న ఆడపిల్ల అని, "బొడ్డు" అంటే సృష్టికి మూలమైన నాభి అని అర్థం. పార్వతీదేవి (గౌరమ్మ)ని పసిబిడ్డ రూపంలో ఆరాధించే పండుగ కనుక దీనిని "బొడ్డెమ్మ" అని పిలుస్తారు. కన్నెపిల్లలకు సమష్టి జీవనాన్ని, ప్రకృతి ఆరాధనను పరిచయం చేసే తొలి సాంస్కృతిక వేదిక ఇది.'
                  : 'In Telangana’s linguistic heritage, the root "Boddi" affectionately denotes a young girl or child, while "Boddu" refers to the navel—the center of birth and earthly vitality. Worshipping Goddess Gauri as a young girl ("Bala Gauri") reflects the tender, formative stage of both the post-monsoon harvest and the young daughters of the household who lead the ritual.'}
              </p>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ResilientImage
                src={GENERATED_ASSETS.tangeduBlossoms}
                alt="Fresh golden Tangedu blossoms in hammered brass basket"
                aspectClassName="aspect-[4/3]"
                caption={
                  lang === 'te'
                    ? 'పుట్టమట్టి గద్దెపై అలంకరించే బంగారు తంగేడు పూలు'
                    : 'Golden Tangedu blossoms arranged along the clay steps'
                }
              />
              <ResilientImage
                src={GENERATED_ASSETS.naivedyamOfferings}
                alt="Traditional pulse and jaggery offerings on banana leaf"
                aspectClassName="aspect-[4/3]"
                caption={
                  lang === 'te'
                    ? 'సాయంత్రం ఆట అనంతరం పంచే గుడాలు & నైవేద్యం'
                    : 'Evening offerings of boiled pulses (gudalu) and jaggery'
                }
              />
            </div>

            <section className="space-y-4 bg-[#F4E8CE]/60 border border-[#1B3325]/15 p-8">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B84232] font-bold">
                {lang === 'te' ? 'అధ్యాయం 02' : 'Chapter 02 · Sacred Earth'}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif-editorial font-bold text-[#1B3325]">
                {lang === 'te'
                  ? 'పుట్టమట్టి ప్రాముఖ్యత మరియు గద్దె నిర్మాణం'
                  : 'The Sacred Architecture of Puttamatti Clay'}
              </h2>
              <p>
                {lang === 'te'
                  ? 'బొడ్డెమ్మ తయారీలో పుట్టమట్టి (చెదల పుట్ట నుండి తీసిన మట్టి) ప్రధానమైనది. ఇది భూగర్భం నుండి సహజంగా జల్లించబడి పైకి వచ్చిన శుద్ధమైన మట్టి. దీనితో మూడు లేదా ఐదు అంతస్తుల చతురస్రాకార గద్దెను నిర్మించి, నాలుగు మూలలా చిన్న బురుజులు పెడతారు. సున్నం (తెలుపు), పసుపు, కుంకుమలతో నిలువు చారలు గీసి, తంగేడు, బీరపువ్వు, కట్ల, తుమ్మ, గుమ్మడి పూలతో అలంకరిస్తారు.'
                  : 'The defining material of Boddemma is puttamatti—fine earth excavated from natural termite mounds. Revered as sterile, mineral-rich, and free of surface impurities, this clay is kneaded into a stepped square terrace (gadde) of three or five tiers with four corner turrets (burujulu). Each evening, girls adorn the steps with late-afternoon blooming flowers such as yellow ridge-gourd blossoms (Beerapuvvu), Tangedu, white Tumma flowers, and purple Katla.'}
              </p>
            </section>
          </div>

          {/* Right 4 Cols: Illustrated Fact Sheet */}
          <aside className="lg:col-span-4 space-y-6 bg-[#1B3325] text-[#FFF8E9] border-2 border-[#E8B83F] p-8 magazine-shadow">
            <h3 className="text-2xl font-serif-editorial font-bold text-[#E8B83F] border-b border-[#FFF8E9]/20 pb-3">
              {lang === 'te' ? 'బొడ్డెమ్మ ముఖ్యాంశాలు' : 'Boddemma Sacred Dossier'}
            </h3>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-[#E8B83F] text-xs uppercase tracking-wider font-bold">
                  Telugu Name
                </dt>
                <dd className="font-serif-editorial font-bold text-xl text-[#FFF8E9] mt-0.5">
                  బొడ్డెమ్మ పండుగ
                </dd>
              </div>
              <div>
                <dt className="text-[#E8B83F] text-xs uppercase tracking-wider font-bold">
                  Deity Form
                </dt>
                <dd className="text-[#FFF8E9]/90 mt-0.5">
                  Bala Gauri (Goddess Gauri as a young girl) & Bhudevi (Mother Earth)
                </dd>
              </div>
              <div>
                <dt className="text-[#E8B83F] text-xs uppercase tracking-wider font-bold">
                  Core Material
                </dt>
                <dd className="text-[#FFF8E9]/90 mt-0.5">
                  Puttamatti (Termite-mound clay), White Lime, Turmeric, Kumkuma
                </dd>
              </div>
              <div>
                <dt className="text-[#E8B83F] text-xs uppercase tracking-wider font-bold">
                  Concluding Day
                </dt>
                <dd className="text-[#FFF8E9]/90 mt-0.5">
                  Bhadrapada Bahula Amavasya (Pethramasa)
                </dd>
              </div>
            </dl>

            <div className="pt-5 border-t border-[#FFF8E9]/20 space-y-3">
              <button
                type="button"
                onClick={() => onNavigate('/bathukamma/')}
                className="w-full py-3 bg-[#E8B83F] text-[#1B3325] text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                {lang === 'te' ? 'బతుకమ్మ మార్గదర్శిని →' : 'Explore Bathukamma Guide →'}
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/boddemma-vs-bathukamma/')}
                className="w-full py-3 bg-[#B84232] text-[#FFF8E9] text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                {lang === 'te' ? 'బొడ్డెమ్మ vs బతుకమ్మ →' : 'Boddemma vs Bathukamma →'}
              </button>
            </div>
          </aside>
        </div>
      </SmoothReveal>

      {/* Interactive Step-by-Step Boddemma Builder */}
      <SmoothReveal>
        <BoddemmaBuilder lang={lang} />
      </SmoothReveal>

      {/* Verified Source Register */}
      <SmoothReveal>
        <section className="border-t-2 border-[#1B3325]/15 pt-12 space-y-6">
          <h2 className="text-3xl font-serif-editorial font-bold text-[#1B3325]">
            {lang === 'te'
              ? 'మూలాలు & సంపాదకీయ ధృవీకరణ (Sources & References)'
              : 'Sources, References & Editorial Verification'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SOURCE_REGISTER.map((src) => (
              <div
                key={src.id}
                className="p-6 bg-[#F4E8CE]/60 border border-[#1B3325]/15 text-sm space-y-1.5"
              >
                <div className="font-mono-tabular text-xs text-[#B84232] font-bold">
                  {src.id} · {src.evidenceCategory} · Checked {src.dateChecked}
                </div>
                <div className="font-serif-editorial text-xl font-bold text-[#1B3325]">
                  {src.title}
                </div>
                <div className="text-xs text-[#1B3325]/70 font-semibold">{src.publisher}</div>
                <p className="text-[#1B3325]/85 pt-1">{src.claimsSupported[lang]}</p>
              </div>
            ))}
          </div>
        </section>
      </SmoothReveal>
    </article>
  );
};

/* ==========================================================================
   C. BATHUKAMMA PILLAR GUIDE — /bathukamma/
   ========================================================================== */
export const BathukammaGuidePage: React.FC<PageProps> = ({ lang, onNavigate }) => {
  return (
    <article className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 py-14 space-y-20">
      <SmoothReveal>
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-[#1B3325] text-[#FFF8E9] border-2 border-[#E8B83F] magazine-shadow overflow-hidden">
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E8B83F] font-bold">
                <span>
                  {lang === 'te'
                    ? 'తెలంగాణ రాష్ట్ర పండుగ మార్గదర్శిని'
                    : 'Telangana State Festival Monograph'}
                </span>
                <span aria-hidden="true">·</span>
                <span>బతుకమ్మ పండుగ</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-editorial font-bold text-[#FFF8E9] leading-[1.08]">
                {lang === 'te'
                  ? 'బతుకమ్మ: ప్రకృతిని, పూలను ఆరాధించే తెలంగాణ తొమ్మిది రోజుల మహా పండుగ'
                  : 'Bathukamma: The Nine-Day Floral Symphony of Telangana'}
              </h1>

              {/* Direct Definition */}
              <div className="p-6 bg-[#FFF8E9]/10 border-l-4 border-[#E8B83F] space-y-2">
                <p className="text-xs uppercase tracking-[0.18em] text-[#E8B83F] font-bold">
                  {lang === 'te'
                    ? 'సంక్షిప్త నిర్వచనం — బతుకమ్మ అంటే ఏమిటి?'
                    : 'Sacred Essence — What is Bathukamma?'}
                </p>
                <p className="text-base sm:text-lg text-[#FFF8E9]/95 font-serif-editorial leading-relaxed">
                  {lang === 'te'
                    ? 'బతుకమ్మ ("బతుకు + అమ్మ" = జీవాన్ని ప్రసాదించే తల్లి) తెలంగాణకు మాత్రమే ప్రత్యేకమైన తొమ్మిది రోజుల పూల పండుగ. భాద్రపద బహుళ అమావాస్య (మహాలయ అమావాస్య) నాడు ప్రారంభమై ఆశ్వయుజ శుద్ధ దుర్గాష్టమి నాడు సద్దుల బతుకమ్మతో ముగుస్తుంది. మహిళలు తంగేడు, గునుగు, బంతి, చామంతి తదితర కాలానుగుణ పూలను ఇత్తడి తాంబాలంలో శంఖాకార గోపురంలా పేర్చి, పైన పసుపు గౌరమ్మను ఉంచి చెరువుల్లో నిమజ్జనం చేస్తారు.'
                    : 'Bathukamma (బతుకమ్మ, literally "Mother of Life") is the nine-day floral festival of Telangana celebrated from Mahalaya Amavasya to Durgashtami. Women arrange uncultivated seasonal wildflowers—led by golden Tangedu and feathery Gunugu—into concentric conical tiers on a brass plate (tambalam), crown it with a turmeric Pasupu Gouramma, and immerse the blossoms in local water tanks (cheruvulu).'}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('/bathukamma/nine-days/')}
                className="px-7 py-3.5 bg-[#E8B83F] text-[#1B3325] text-xs font-bold uppercase tracking-wider hover:bg-[#d9a72b] transition-colors cursor-pointer"
              >
                {lang === 'te'
                  ? 'తొమ్మిది రోజుల నైవేద్యాలు చూడండి →'
                  : 'Explore All Nine Days & Offerings →'}
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/bathukamma/flowers/')}
                className="px-7 py-3.5 bg-[#B84232] text-[#FFF8E9] text-xs font-bold uppercase tracking-wider hover:bg-[#9c3527] transition-colors cursor-pointer"
              >
                {lang === 'te' ? 'బతుకమ్మ పూల విజ్ఞానం' : 'Botanical Flower Encyclopedia'}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-rows-2 gap-2 p-2 bg-[#13241A]">
            <ResilientImage
              src={GENERATED_ASSETS.bathukammaStack}
              alt="Concentric multicolored Bathukamma floral arrangement on brass tambalam crowned with Pasupu Gouramma"
              aspectClassName="h-full min-h-[240px]"
              className="w-full h-full object-cover"
              priority
            />
            <ResilientImage
              src={GENERATED_ASSETS.pasupuGouramma}
              alt="Sacred Pasupu Gouramma turmeric cone with kumkuma and lit brass oil lamps"
              aspectClassName="h-full min-h-[240px]"
              className="w-full h-full object-cover"
            />
          </div>
        </header>
      </SmoothReveal>

      {/* Deep Illustrated Editorial Content */}
      <SmoothReveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-12 text-lg text-[#1B3325]/90 leading-relaxed">
            <section className="space-y-4 bg-[#F4E8CE]/60 border border-[#1B3325]/15 p-8">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B84232] font-bold">
                {lang === 'te' ? 'అధ్యాయం 01' : 'Chapter 01 · Myth & Agrarian Gratitude'}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif-editorial font-bold text-[#1B3325]">
                {lang === 'te'
                  ? 'బతుకమ్మ ఆవిర్భావ కథలు మరియు చారిత్రక నేపథ్యం'
                  : 'Origin Narratives, Folklore, and Tank Ecology'}
              </h2>
              <p>
                {lang === 'te'
                  ? 'బతుకమ్మ ఆవిర్భావానికి సంబంధించి తెలంగాణ జానపద సాహిత్యంలో అనేక ప్రసిద్ధ కథనాలు ఉన్నాయి. చోళ రాజు ధర్మాంగదుడు మరియు సత్యవతి దంపతుల ప్రార్థనతో గౌరీదేవి వారి ఇంట బిడ్డగా జన్మించిందని, సప్తరుషులు ఆ బాలికను "బతుకమ్మ" (చిరకాలం బతుకు తల్లీ) అని ఆశీర్వదించారని జానపద గాథ చెబుతుంది. కాకతీయుల కాలం నాటి గొలుసుకట్టు చెరువుల వ్యవసాయ సంస్కృతికి, మహిళల సమష్టి జీవనానికి ఈ పండుగ నిలువెత్తు ప్రతిరూపం.'
                  : 'In Telangana’s cherished legend, King Dharmangada and Queen Satyavati prayed for a child blessed with enduring life, and sages blessed their daughter with the name "Bathukamma" ("Live long, O Mother"). Equally profound is the ecological dimension: Bathukamma celebrates the post-monsoon filling of Telangana’s chain-linked village tanks (cheruvulu) and the medicinal wild flora blooming across uplands.'}
              </p>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ResilientImage
                src={GENERATED_ASSETS.gunuguPlumes}
                alt="Feathery crimson and silver Gunugu flower plumes on Pochampally ikat silk"
                aspectClassName="aspect-[4/3]"
                caption={
                  lang === 'te'
                    ? 'పసుపు, కుంకుమలతో సహజ రంగులద్దిన గునుగు పూలు'
                    : 'Natural kumkuma-dyed Gunugu (Celosia argentea) plumes'
                }
              />
              <ResilientImage
                src={GENERATED_ASSETS.tankImmersion}
                alt="Saddula Bathukamma twilight immersion in a Telangana village tank"
                aspectClassName="aspect-[4/3]"
                caption={
                  lang === 'te'
                    ? 'సద్దుల బతుకమ్మ నాడు చెరువులో దీపాల నిమజ్జనం'
                    : 'Twilight Saddula Bathukamma immersion in the village cheruvu'
                }
              />
            </div>

            <section className="space-y-4 bg-[#F4E8CE]/60 border border-[#1B3325]/15 p-8">
              <span className="text-xs uppercase tracking-[0.2em] text-[#315D38] font-bold">
                {lang === 'te' ? 'అధ్యాయం 02' : 'Chapter 02 · Sacred Floral Craft'}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif-editorial font-bold text-[#1B3325]">
                {lang === 'te'
                  ? 'బతుకమ్మను ఎలా పేరుస్తారు? (తాంబాలం నుండి పసుపు గౌరమ్మ వరకు)'
                  : 'How Bathukamma is Built: Concentric Floral Geometry'}
              </h2>
              <p>
                {lang === 'te'
                  ? 'మధ్యాహ్నం వేళ మహిళలు ఇత్తడి తాంబాలం లేదా వెదురు సిబ్బిని తీసుకుని, దాని అడుగున వెడల్పాటి గుమ్మడి ఆకులు లేదా తామర ఆకులను పరుస్తారు. ఆపై తంగేడు పూల కాడలు లోపలికి, బంగారు రేకులు బయటకు కనిపించేలా మొదటి వలయాన్ని ఏర్పాటు చేస్తారు. మధ్యలో గునుగు పూల కంకులను నిలువుగా ఉంచుతూ, బంతి, చామంతి, కట్ల పూలను ఒకదానిపై ఒకటి శంఖాకార గోపురంలా పేరుస్తారు. చివరగా శిఖర భాగాన పసుపు ముద్దతో చేసిన "గౌరమ్మ"ను ఉంచి కుంకుమ బొట్టు పెడతారు.'
                  : 'Preparation begins in the afternoon. Women line a flat brass plate (tambalam) or woven bamboo tray (sibbi) with broad pumpkin (gummadi) or lotus leaves. Flower stems are trimmed evenly and laid in concentric rings with petals facing outward and stems interlocking at the core. Alternating tiers of golden Tangedu, dyed Gunugu plumes, saffron Banthi, and white Chamanthi taper inward into a graceful cone, crowned at the summit with Pasupu Gouramma.'}
              </p>
            </section>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <ResilientImage
              src={GENERATED_ASSETS.circleDance}
              alt="Telangana women and girls forming a circle and dancing around Bathukamma stacks at twilight"
              aspectClassName="aspect-[4/3]"
              caption={
                lang === 'te'
                  ? 'సాయంత్రం వేళ దీపాల వెలుగులో బతుకమ్మ చుట్టూ ఆడుతున్న మహిళలు.'
                  : 'Evening circle dance around Bathukamma stacks in a Telangana courtyard.'
              }
            />
            <div className="bg-[#1B3325] text-[#FFF8E9] border-2 border-[#E8B83F] p-8 space-y-4 magazine-shadow">
              <h3 className="text-2xl font-serif-editorial font-bold text-[#E8B83F]">
                {lang === 'te' ? 'తొమ్మిది రోజుల జాబితా' : 'The Nine Sacred Days'}
              </h3>
              <ol className="space-y-2.5 text-sm text-[#FFF8E9]/90 font-serif-editorial">
                {NINE_DAYS_DATA.map((d) => (
                  <li
                    key={d.dayNumber}
                    className="flex items-center justify-between border-b border-[#FFF8E9]/10 pb-1.5"
                  >
                    <span className="font-bold text-[#E8B83F]">0{d.dayNumber}</span>
                    <span>{lang === 'te' ? d.teluguName : d.transliteration}</span>
                  </li>
                ))}
              </ol>
              <button
                type="button"
                onClick={() => onNavigate('/bathukamma/nine-days/')}
                className="w-full py-3 bg-[#E8B83F] text-[#1B3325] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>
                  {lang === 'te' ? 'రోజువారీ నైవేద్యాలు చూడండి' : 'View Illustrated Nine-Day Guide'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </aside>
        </div>
      </SmoothReveal>

      {/* Interactive Layer Explorer */}
      <SmoothReveal>
        <InteractiveBathukammaExplorer lang={lang} onNavigate={onNavigate} />
      </SmoothReveal>

      {/* FAQs */}
      <SmoothReveal>
        <section className="space-y-8 border-t-2 border-[#1B3325]/15 pt-12">
          <h2 className="text-3xl sm:text-4xl font-serif-editorial font-bold text-[#1B3325]">
            {lang === 'te'
              ? 'బతుకమ్మపై తరచుగా అడిగే ప్రశ్నలు'
              : 'Bathukamma Frequently Asked Questions'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQ_DATA.map((f) => (
              <div
                key={f.id}
                className="p-7 bg-[#F4E8CE]/65 border border-[#1B3325]/15 space-y-3"
              >
                <h3 className="text-2xl font-serif-editorial font-bold text-[#1B3325]">
                  {f.question[lang]}
                </h3>
                <p className="text-base text-[#1B3325]/85 leading-relaxed">{f.answer[lang]}</p>
              </div>
            ))}
          </div>
        </section>
      </SmoothReveal>
    </article>
  );
};

/* ==========================================================================
   D. BODDEMMA VS BATHUKAMMA — /boddemma-vs-bathukamma/
   ========================================================================== */
export const ComparisonPage: React.FC<PageProps> = ({ lang, onNavigate }) => {
  const [highlightMode, setHighlightMode] = useState<'both' | 'boddemma' | 'bathukamma'>('both');

  return (
    <article className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 py-14 space-y-16">
      <SmoothReveal>
        <header className="space-y-5 border-b-2 border-[#1B3325]/15 pb-10">
          <SacredLotusDivider
            label={
              lang === 'te'
                ? 'తులనాత్మక సాంస్కృతిక విశ్లేషణ'
                : 'Comparative Sacred Heritage Study'
            }
          />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-editorial font-bold text-[#1B3325] text-center max-w-4xl mx-auto">
            {lang === 'te'
              ? 'బొడ్డెమ్మ vs బతుకమ్మ: రెండు వేడుకల మధ్య తేడాలు మరియు అనుబంధం'
              : 'Boddemma vs Bathukamma: Two Sacred Chapters of One Floral Season'}
          </h1>
          <p className="text-lg sm:text-xl text-[#1B3325]/85 max-w-3xl mx-auto text-center font-serif-editorial leading-relaxed">
            {lang === 'te'
              ? 'బొడ్డెమ్మ మరియు బతుకమ్మ వేర్వేరు పండుగలు కావు; అవి ఒకే శరదృతువు పండుగ చక్రంలోని రెండు వరుస ఘట్టాలు. పుట్టమట్టితో చేసే బొడ్డెమ్మ మొదటి తొమ్మిది రోజులు సాగితే, పూలతో పేర్చే బతుకమ్మ తరువాతి తొమ్మిది రోజులు సాగుతుంది.'
              : 'Boddemma and Bathukamma are sequential nine-day chapters of Telangana’s 18-day autumn floral season. Boddemma is the prelusive clay-altar festival led by young girls using termite-mound earth (puttamatti), whereas Bathukamma is the conical floral stack festival celebrated from Mahalaya Amavasya to Durgashtami.'}
          </p>
        </header>
      </SmoothReveal>

      {/* Interactive Side-by-Side Visual Switcher */}
      <SmoothReveal>
        <section className="space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-serif-editorial font-bold text-[#1B3325]">
              {lang === 'te'
                ? 'నిర్మాణ మరియు దృశ్య పోలిక'
                : 'Side-by-Side Visual & Structural Comparison'}
            </h2>
            <div className="inline-flex border border-[#1B3325]/30 bg-[#FFF8E9] p-1">
              {(['both', 'boddemma', 'bathukamma'] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setHighlightMode(mode)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider cursor-pointer ${
                    highlightMode === mode
                      ? 'bg-[#1B3325] text-[#E8B83F]'
                      : 'text-[#1B3325] hover:bg-[#F4E8CE]'
                  }`}
                >
                  {mode === 'both'
                    ? lang === 'te'
                      ? 'రెండూ పక్కపక్కనే'
                      : 'Side-by-Side'
                    : mode === 'boddemma'
                    ? lang === 'te'
                      ? 'బొడ్డెమ్మ (మట్టి గద్దె)'
                      : 'Focus: Boddemma'
                    : lang === 'te'
                    ? 'బతుకమ్మ (పూల గోపురం)'
                    : 'Focus: Bathukamma'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(highlightMode === 'both' || highlightMode === 'boddemma') && (
              <div className="bg-[#FFF8E9] border-2 border-[#B84232]/25 overflow-hidden magazine-shadow">
                <ResilientImage
                  src={GENERATED_ASSETS.boddemmaClay}
                  alt="Boddemma five-tiered puttamatti clay structure decorated with flowers"
                  aspectClassName="aspect-[16/10]"
                />
                <div className="p-8 space-y-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#B84232] font-bold">
                    {lang === 'te' ? 'పుట్టమట్టి గద్దె' : 'Part I · Termite-Mound Clay Altar'}
                  </span>
                  <h3 className="text-3xl font-serif-editorial font-bold text-[#1B3325]">
                    {lang === 'te'
                      ? 'బొడ్డెమ్మ (పుట్టమట్టి గద్దె నిర్మాణం)'
                      : 'Boddemma: Earthen Stepped Pyramid'}
                  </h3>
                  <p className="text-base text-[#1B3325]/85 leading-relaxed">
                    {lang === 'te'
                      ? 'పుట్టమట్టితో 3 లేదా 5 అంతస్తులుగా కట్టిన చతురస్రాకార గద్దె. సున్నం, పసుపు, కుంకుమ చారలు వేసి, పైన బియ్యం పోసిన గురిగి మరియు పూలతో అలంకరిస్తారు.'
                      : 'Built from termite-mound clay (puttamatti) into a 3- or 5-tiered stepped square terrace, painted with lime, turmeric, and kumkuma, and lined with seasonal flowers.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => onNavigate('/boddemma/')}
                    className="px-6 py-3 bg-[#B84232] text-[#FFF8E9] text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    {lang === 'te' ? 'బొడ్డెమ్మ గైడ్ చదవండి →' : 'Open Full Boddemma Guide →'}
                  </button>
                </div>
              </div>
            )}

            {(highlightMode === 'both' || highlightMode === 'bathukamma') && (
              <div className="bg-[#FFF8E9] border-2 border-[#315D38]/25 overflow-hidden magazine-shadow">
                <ResilientImage
                  src={GENERATED_ASSETS.bathukammaStack}
                  alt="Bathukamma concentric floral cone on a brass tambalam"
                  aspectClassName="aspect-[16/10]"
                />
                <div className="p-8 space-y-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#315D38] font-bold">
                    {lang === 'te' ? 'తాంబాలంలో పూల గోపురం' : 'Part II · Pure Wildflower Stack'}
                  </span>
                  <h3 className="text-3xl font-serif-editorial font-bold text-[#1B3325]">
                    {lang === 'te'
                      ? 'బతుకమ్మ (తాంబాలంలో పూల గోపురం)'
                      : 'Bathukamma: Concentric Floral Stack'}
                  </h3>
                  <p className="text-base text-[#1B3325]/85 leading-relaxed">
                    {lang === 'te'
                      ? 'ఇత్తడి తాంబాలంలో గుమ్మడి ఆకులు పరిచి, తంగేడు, గునుగు, బంతి, చామంతి పూలతో శంఖాకార గోపురంలా పేర్చి పైన పసుపు గౌరమ్మను ఉంచుతారు.'
                      : 'Built entirely of concentric rings of seasonal blossoms (Tangedu, Gunugu, Banthi, Chamanthi) on a brass tambalam, crowned with Pasupu Gouramma.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => onNavigate('/bathukamma/')}
                    className="px-6 py-3 bg-[#1B3325] text-[#E8B83F] text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    {lang === 'te' ? 'బతుకమ్మ గైడ్ చదవండి →' : 'Open Full Bathukamma Guide →'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </SmoothReveal>

      {/* Structured Comparison Table */}
      <SmoothReveal>
        <section className="space-y-6">
          <h2 className="text-3xl font-serif-editorial font-bold text-[#1B3325]">
            {lang === 'te' ? 'సమగ్ర తులనాత్మక పట్టిక' : 'Comprehensive Attribute Comparison Matrix'}
          </h2>
          <div className="overflow-x-auto border-2 border-[#1B3325]/20 bg-[#FFF8E9] magazine-shadow">
            <table className="w-full text-left border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-[#1B3325] text-[#FFF8E9] font-serif-editorial text-lg">
                  <th className="p-5 font-bold w-1/4 border-r border-[#FFF8E9]/15 text-[#E8B83F]">
                    {lang === 'te' ? 'అంశం (Dimension)' : 'Cultural Dimension'}
                  </th>
                  <th className="p-5 font-bold w-[37.5%] border-r border-[#FFF8E9]/15">
                    {lang === 'te' ? 'బొడ్డెమ్మ (Boddemma)' : 'Boddemma (బొడ్డెమ్మ)'}
                  </th>
                  <th className="p-5 font-bold w-[37.5%]">
                    {lang === 'te' ? 'బతుకమ్మ (Bathukamma)' : 'Bathukamma (బతుకమ్మ)'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1B3325]/15">
                {BODDEMMA_VS_BATHUKAMMA_TABLE.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-[#FFF8E9]' : 'bg-[#F4E8CE]/50'}>
                    <td className="p-5 font-serif-editorial font-bold text-lg text-[#1B3325] border-r border-[#1B3325]/15">
                      {row.dimension[lang]}
                    </td>
                    <td className="p-5 text-[#1B3325]/90 border-r border-[#1B3325]/15 leading-relaxed">
                      {row.boddemma[lang]}
                    </td>
                    <td className="p-5 text-[#1B3325]/90 leading-relaxed">
                      {row.bathukamma[lang]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </SmoothReveal>
    </article>
  );
};

/* ==========================================================================
   E. NINE DAYS OF BATHUKAMMA — /bathukamma/nine-days/
   ========================================================================== */
export const NineDaysPage: React.FC<PageProps> = ({ lang }) => {
  const [selectedDayNum, setSelectedDayNum] = useState<number>(1);
  const selectedDay =
    NINE_DAYS_DATA.find((d) => d.dayNumber === selectedDayNum) || NINE_DAYS_DATA[0];

  return (
    <article className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 py-14 space-y-16">
      <SmoothReveal>
        <header className="space-y-5 border-b-2 border-[#1B3325]/15 pb-10">
          <SacredLotusDivider
            label={
              lang === 'te'
                ? 'తొమ్మిది రోజుల నైవేద్యాలు & ఆచారాలు'
                : 'Nine-Day Sacred Ritual & Culinary Sequence'
            }
          />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-editorial font-bold text-[#1B3325] text-center max-w-4xl mx-auto">
            {lang === 'te'
              ? 'తొమ్మిది రోజుల బతుకమ్మ: రోజువారీ పేర్లు, తిథులు మరియు నైవేద్యాలు'
              : 'The Nine Days of Bathukamma: Sacred Names, Rituals & Offerings'}
          </h1>
          <p className="text-lg sm:text-xl text-[#1B3325]/85 max-w-3xl mx-auto text-center font-serif-editorial leading-relaxed">
            {lang === 'te'
              ? 'మహాలయ అమావాస్య నాడు ఎంగిలి పూల బతుకమ్మతో మొదలై దుర్గాష్టమి నాడు సద్దుల బతుకమ్మ వరకు సాగే తొమ్మిది రోజుల పేర్లు, తిథులు మరియు నైవేద్యాల సమగ్ర దృశ్య వివరణ.'
              : 'Every day of Bathukamma carries a distinct Telugu name derived from the seasonal grain, sesame, jaggery, or rice offering (naivedyam) presented to Goddess Gauri.'}
          </p>
        </header>
      </SmoothReveal>

      {/* Interactive Day Selector Tabs */}
      <SmoothReveal>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2.5">
          {NINE_DAYS_DATA.map((day) => {
            const active = day.dayNumber === selectedDayNum;
            return (
              <button
                key={day.dayNumber}
                type="button"
                onClick={() => setSelectedDayNum(day.dayNumber)}
                className={`p-3.5 text-left border transition-all cursor-pointer ${
                  active
                    ? 'bg-[#1B3325] text-[#E8B83F] border-[#E8B83F] border-2 shadow-md'
                    : 'bg-[#FFF8E9] text-[#1B3325] border-[#1B3325]/20 hover:border-[#B84232]'
                }`}
              >
                <div className="font-mono-tabular text-xs font-bold opacity-80">
                  DAY 0{day.dayNumber}
                </div>
                <div className="text-sm font-serif-editorial font-bold mt-1 truncate">
                  {lang === 'te' ? day.teluguName.split(' ')[0] : day.transliteration.split(' ')[0]}
                </div>
              </button>
            );
          })}
        </div>
      </SmoothReveal>

      {/* Selected Day Spotlight Magazine Spread */}
      <SmoothReveal>
        <section className="bg-[#1B3325] text-[#FFF8E9] border-2 border-[#E8B83F] grid grid-cols-1 lg:grid-cols-12 items-stretch magazine-shadow overflow-hidden">
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#E8B83F] font-mono-tabular font-bold uppercase tracking-widest">
                <span>DAY 0{selectedDay.dayNumber} OF 09</span>
                <span aria-hidden="true">·</span>
                <span>{selectedDay.tithiTiming[lang]}</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-serif-editorial font-bold text-[#FFF8E9]">
                {selectedDay.teluguName} — {selectedDay.transliteration}
              </h2>
              <p className="text-lg font-serif-editorial italic text-[#E8B83F]">
                {selectedDay.englishRendering[lang]}
              </p>

              <div className="p-6 bg-[#FFF8E9]/10 border-l-4 border-[#E8B83F] space-y-2">
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#E8B83F] font-bold">
                  {lang === 'te'
                    ? 'సమర్పించే నైవేద్యం (Sacred Naivedyam Offering)'
                    : 'Sacred Naivedyam Offering'}
                </h3>
                <p className="text-2xl font-serif-editorial font-bold text-[#FFF8E9]">
                  {selectedDay.naivedyamTitle[lang]}
                </p>
                <p className="text-sm text-[#FFF8E9]/85">
                  {selectedDay.naivedyamIngredients[lang]}
                </p>
              </div>

              <div className="space-y-3 text-base sm:text-lg text-[#FFF8E9]/90 leading-relaxed">
                <p>{selectedDay.culturalSignificance[lang]}</p>
                <p>{selectedDay.customaryPractice[lang]}</p>
              </div>
            </div>

            <div className="p-4 bg-black/30 border border-[#FFF8E9]/15 text-xs text-[#FFF8E9]/80">
              <strong className="text-[#E8B83F]">
                {lang === 'te' ? 'ప్రాంతీయ గమనిక:' : 'Regional Variation Note:'}
              </strong>{' '}
              {selectedDay.regionalVariationNote[lang]}
            </div>
          </div>

          <div className="lg:col-span-5">
            <ResilientImage
              src={DAY_IMAGES[(selectedDay.dayNumber - 1) % DAY_IMAGES.length]}
              alt={`${selectedDay.transliteration} (${selectedDay.teluguName}) cultural illustration`}
              aspectClassName="h-full min-h-[360px]"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </SmoothReveal>

      {/* Illustrated Gallery of All 9 Days */}
      <SmoothReveal>
        <section className="space-y-8 pt-8 border-t-2 border-[#1B3325]/15">
          <h2 className="text-3xl sm:text-4xl font-serif-editorial font-bold text-[#1B3325]">
            {lang === 'te'
              ? 'మొత్తం తొమ్మిది రోజుల చిత్రమాలిక & వివరణ'
              : 'Illustrated Nine-Day Gallery & Ritual Guide'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NINE_DAYS_DATA.map((day, idx) => (
              <div
                key={day.dayNumber}
                onClick={() => {
                  setSelectedDayNum(day.dayNumber);
                  window.scrollTo({ top: 240, behavior: 'smooth' });
                }}
                className="group bg-[#FFF8E9] border border-[#1B3325]/20 overflow-hidden flex flex-col justify-between magazine-shadow cursor-pointer"
              >
                <div>
                  <div className="relative overflow-hidden">
                    <ResilientImage
                      src={DAY_IMAGES[idx % DAY_IMAGES.length]}
                      alt={day.transliteration}
                      aspectClassName="aspect-[16/10]"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-[#1B3325]/90 text-[#E8B83F] font-mono-tabular text-xs font-bold">
                      DAY 0{day.dayNumber}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="text-xs text-[#B84232] font-bold uppercase tracking-wider">
                      {day.tithiTiming[lang]}
                    </div>
                    <h3 className="text-2xl font-serif-editorial font-bold text-[#1B3325]">
                      {lang === 'te' ? day.teluguName : day.transliteration}
                    </h3>
                    <p className="text-sm text-[#1B3325]/85 leading-relaxed">
                      {day.culturalSignificance[lang]}
                    </p>
                  </div>
                </div>
                <div className="px-6 py-4 bg-[#F4E8CE] border-t border-[#1B3325]/10 text-xs">
                  <span className="font-bold text-[#B84232] uppercase tracking-wider block">
                    {lang === 'te' ? 'నైవేద్యం:' : 'Sacred Offering:'}
                  </span>
                  <span className="font-serif-editorial font-bold text-sm text-[#1B3325]">
                    {day.naivedyamTitle[lang]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </SmoothReveal>
    </article>
  );
};

/* ==========================================================================
   F. FLOWERS OF BATHUKAMMA — /bathukamma/flowers/
   ========================================================================== */
export const FlowersEncyclopediaPage: React.FC<PageProps> = ({ lang, onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFlowers = FLOWERS_DATA.filter((f) => {
    const q = searchQuery.toLowerCase();
    return (
      f.transliteration.toLowerCase().includes(q) ||
      f.teluguName.includes(q) ||
      f.englishCommonName.toLowerCase().includes(q) ||
      f.scientificName.toLowerCase().includes(q)
    );
  });

  return (
    <article className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 py-14 space-y-16">
      <SmoothReveal>
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-[#1B3325] text-[#FFF8E9] border-2 border-[#E8B83F] magazine-shadow overflow-hidden">
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#E8B83F] font-bold">
                {lang === 'te'
                  ? 'వృక్షశాస్త్ర & సాంస్కృతిక పూల విజ్ఞాన సర్వస్వం'
                  : 'Sacred Flora Monograph & Ethnobotanical Guide'}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-editorial font-bold text-[#FFF8E9] leading-[1.08]">
                {lang === 'te'
                  ? 'బతుకమ్మ & బొడ్డెమ్మ పూలు: శాస్త్రీయ గుర్తింపు మరియు ప్రాముఖ్యత'
                  : 'Sacred Flowers of Bathukamma: Botanical & Spiritual Guide'}
              </h1>
              <p className="text-lg text-[#FFF8E9]/90 font-serif-editorial leading-relaxed">
                {lang === 'te'
                  ? 'తంగేడు (Senna auriculata), గునుగు (Celosia argentea), బంతి, చామంతి, గుమ్మడి, కట్ల, తామర, బీర పువ్వుల వృక్షశాస్త్ర నామాలు, గుర్తింపు లక్షణాలు మరియు సాంస్కృతిక ప్రాముఖ్యత.'
                  : 'Explore the documented seasonal wildflowers of Telangana’s autumn festivals—featuring scientific binomials, concentric layer placement, and medicinal tank ecology.'}
              </p>
            </div>

            <div className="relative max-w-lg pt-2">
              <Search className="w-4 h-4 text-[#1B3325]/60 absolute left-4 top-6" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  lang === 'te'
                    ? 'పువ్వు పేరుతో వెతకండి (ఉదా: తంగేడు, గునుగు, Senna)...'
                    : 'Search by Telugu, English, or scientific name (e.g. Tangedu, Senna)...'
                }
                className="w-full pl-11 pr-4 py-3.5 text-sm bg-[#FFF8E9] text-[#1B3325] placeholder:text-[#1B3325]/60 focus:outline-none"
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <ResilientImage
              src={GENERATED_ASSETS.botanicalFlowers}
              alt="Botanical flat-lay of Telangana seasonal flowers including golden Tangedu, feathery Gunugu, orange Banthi, white Chamanthi, and Gummadi leaves"
              aspectClassName="h-full min-h-[320px]"
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </header>
      </SmoothReveal>

      {/* Illustrated Botanical Cards Grid */}
      <SmoothReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredFlowers.map((flower) => {
            const flowerImg = FLOWER_IMAGES[flower.id] || GENERATED_ASSETS.botanicalFlowers;
            return (
              <section
                key={flower.id}
                className="bg-[#FFF8E9] border border-[#1B3325]/20 overflow-hidden flex flex-col justify-between magazine-shadow"
              >
                <div>
                  <div className="relative overflow-hidden">
                    <ResilientImage
                      src={flowerImg}
                      alt={`${flower.transliteration} (${flower.scientificName})`}
                      aspectClassName="aspect-[16/9]"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-[#1B3325]/90 text-[#E8B83F] text-xs font-bold">
                      {flower.teluguName}
                    </div>
                  </div>

                  <div className="p-8 space-y-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#B84232] border-b border-[#1B3325]/10 pb-3">
                      <span className="italic font-serif-editorial text-base font-bold text-[#1B3325]">
                        {flower.scientificName}
                      </span>
                      <span className="font-mono-tabular text-[11px] text-[#315D38] font-bold">
                        Family: {flower.family}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-3xl font-serif-editorial font-bold text-[#1B3325]">
                        {flower.transliteration} — {flower.englishCommonName}
                      </h2>
                    </div>

                    <dl className="space-y-4 text-sm md:text-base">
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-[#B84232] font-bold">
                          {lang === 'te' ? 'వృక్షశాస్త్ర గుర్తింపు' : 'Botanical Identification'}
                        </dt>
                        <dd className="text-[#1B3325]/90 mt-1 leading-relaxed">
                          {flower.botanicalIdentification[lang]}
                        </dd>
                      </div>

                      <div>
                        <dt className="text-xs uppercase tracking-wider text-[#315D38] font-bold">
                          {lang === 'te' ? 'బతుకమ్మ / బొడ్డెమ్మలో స్థానం' : 'Sacred Layer Placement'}
                        </dt>
                        <dd className="text-[#315D38] font-serif-editorial font-bold text-lg mt-0.5">
                          {flower.layerPosition[lang]}
                        </dd>
                      </div>

                      <div>
                        <dt className="text-xs uppercase tracking-wider text-[#1B3325]/65 font-bold">
                          {lang === 'te' ? 'సాంస్కృతిక ప్రాముఖ్యత' : 'Traditional & Spiritual Significance'}
                        </dt>
                        <dd className="text-[#1B3325]/90 mt-1 leading-relaxed">
                          {flower.culturalSignificance[lang]}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="px-8 py-4 bg-[#F4E8CE] border-t border-[#1B3325]/15 text-xs text-[#1B3325]/85">
                  <strong className="text-[#B84232]">
                    {lang === 'te' ? 'గుర్తింపు గమనిక:' : 'Botanical Note:'}
                  </strong>{' '}
                  {flower.cautionNote[lang]}
                </div>
              </section>
            );
          })}
        </div>
      </SmoothReveal>

      {/* Interactive Layer Explorer below encyclopedia */}
      <SmoothReveal>
        <InteractiveBathukammaExplorer lang={lang} onNavigate={onNavigate} />
      </SmoothReveal>
    </article>
  );
};
