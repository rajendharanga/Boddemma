import React, { useState } from 'react';
import { Language } from '../data/culturalArchive';
import { ArrowRight } from 'lucide-react';

interface InteractiveFestivalTimelineProps {
  lang: Language;
  onNavigate: (path: string) => void;
}

interface TimelineMilestone {
  id: string;
  phase: 'boddemma' | 'transition' | 'bathukamma';
  lunarTiming: { en: string; te: string };
  title: { en: string; te: string };
  summary: { en: string; te: string };
  detailLink: string;
  detailLabel: { en: string; te: string };
}

const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    id: 'ms-1',
    phase: 'boddemma',
    lunarTiming: {
      en: 'Days 1–8 of Mahalaya Paksha (Bhadrapada Bahula)',
      te: 'భాద్రపద బహుళ పక్షం (మొదటి 8 రోజులు)',
    },
    title: {
      en: 'Phase I: Nine Nights of Boddemma in the Courtyard',
      te: 'మొదటి ఘట్టం: వాకిట్లో తొమ్మిది రోజుల బొడ్డెమ్మ సంబరం',
    },
    summary: {
      en: 'Young girls and women gather termite-mound clay (puttamatti), sculpt a five-tiered earthen altar in the courtyard, paint it with lime and kumkuma, and sing brisk Koliro songs each dusk.',
      te: 'కన్నెపిల్లలు పుట్టమట్టితో ఐదు అంతస్తుల బొడ్డెమ్మ గద్దెను నిర్మించి, సున్నం, పసుపు కుంకుమలతో అలంకరించి ప్రతి సాయంత్రం కోలిరో పాటలు పాడుతారు.',
    },
    detailLink: '/boddemma/',
    detailLabel: { en: 'Read Full Boddemma Guide', te: 'బొడ్డెమ్మ పూర్తి వివరాలు' },
  },
  {
    id: 'ms-2',
    phase: 'transition',
    lunarTiming: {
      en: 'Bhadrapada Bahula Amavasya (Mahalaya Amavasya / Pethramasa)',
      te: 'భాద్రపద బహుళ అమావాస్య (మహాలయ అమావాస్య / పెత్రామాస)',
    },
    title: {
      en: 'Phase II: The Sacred Handoff — Boddemma Immersion & Engili Pula Bathukamma',
      te: 'రెండవ ఘట్టం: బొడ్డెమ్మ నిమజ్జనం & ఎంగిలి పూల బతుకమ్మ ప్రారంభం',
    },
    summary: {
      en: 'On the new moon day honoring ancestors (Pethramasa), the Boddemma ritual concludes and the very first floral cone of Bathukamma—Engili Pula Bathukamma—is arranged on the brass tambalam.',
      te: 'పెత్రామాస రోజున బొడ్డెమ్మ వేడుక ముగిసి, తాంబాలంలో తంగేడు, గునుగు పూలతో మొదటి రోజు "ఎంగిలి పూల బతుకమ్మ" ప్రారంభమవుతుంది.',
    },
    detailLink: '/boddemma-vs-bathukamma/',
    detailLabel: { en: 'Compare Boddemma & Bathukamma', te: 'బొడ్డెమ్మ vs బతుకమ్మ పోలిక' },
  },
  {
    id: 'ms-3',
    phase: 'bathukamma',
    lunarTiming: {
      en: 'Ashwayuja Shukla Padyami to Panchami (Days 2–6)',
      te: 'ఆశ్వయుజ శుద్ధ పాడ్యమి నుండి పంచమి (2–6 రోజులు)',
    },
    title: {
      en: 'Phase III: Growing Floral Cones, Daily Grain Offerings & The 6th-Day Pause',
      te: 'మూడవ ఘట్టం: పెరిగే పూల దొంతరలు, నైవేద్యాలు & ఆరవ రోజు విశ్రాంతి',
    },
    summary: {
      en: 'Each day adds another concentric tier of flowers and a seasonal grain offering (Atukulu, Muddapappu, Nanabiyyam, Atlu) until Day 6 (Aligina Bathukamma), when nature and women pause to rest.',
      te: 'అటుకులు, ముద్దపప్పు, నానబియ్యం, అట్ల నైవేద్యాలతో రోజురోజుకూ పూల వరుసలు పెరుగుతాయి. ఆరవ రోజు (అలిగిన బతుకమ్మ) విశ్రాంతి రోజుగా పాటిస్తారు.',
    },
    detailLink: '/bathukamma/nine-days/',
    detailLabel: { en: 'Explore All Nine Days', te: 'తొమ్మిది రోజుల నైవేద్యాలు' },
  },
  {
    id: 'ms-4',
    phase: 'bathukamma',
    lunarTiming: {
      en: 'Ashwayuja Shukla Shashti to Durgashtami (Days 7–9)',
      te: 'ఆశ్వయుజ శుద్ధ షష్ఠి నుండి దుర్గాష్టమి (7–9 రోజులు)',
    },
    title: {
      en: 'Phase IV: Vepakayalu, Vennamuddalu & Grand Saddula Bathukamma Immersion',
      te: 'నాలుగవ ఘట్టం: సద్దుల బతుకమ్మ మహా వేడుక & చెరువులో నిమజ్జనం',
    },
    summary: {
      en: 'Culminates on Durgashtami with towering multi-tiered Saddula Bathukamma stacks, five festive rice offerings, Sattu Pindi vayanalu, and twilight immersion in the village tank (cheruvu).',
      te: 'దుర్గాష్టమి నాడు సద్దుల బతుకమ్మతో పండుగ పతాక స్థాయికి చేరుకుంటుంది. ఐదు రకాల సద్దులు, సత్తుపిండి వాయనాలతో చెరువులో గౌరమ్మను సాగనంపుతారు.',
    },
    detailLink: '/bathukamma/',
    detailLabel: { en: 'Read Full Bathukamma Guide', te: 'బతుకమ్మ సమగ్ర చరిత్ర' },
  },
];

export const InteractiveFestivalTimeline: React.FC<InteractiveFestivalTimelineProps> = ({
  lang,
  onNavigate,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const current = TIMELINE_MILESTONES[activeIndex];

  return (
    <section
      aria-labelledby="timeline-heading"
      className="border border-[#203A2B]/15 bg-[#FFF8E9] p-6 md:p-10"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#203A2B]/15">
        <div>
          <p className="text-xs uppercase tracking-widest text-[#A65E43] font-medium">
            {lang === 'te'
              ? '18 రోజుల అవిచ్ఛిన్న సాంస్కృతిక ప్రయాణం'
              : 'The 18-Day Autumn Cultural Continuum'}
          </p>
          <h2
            id="timeline-heading"
            className="text-2xl md:text-4xl font-serif-editorial font-semibold text-[#203A2B] mt-1"
          >
            {lang === 'te'
              ? 'బొడ్డెమ్మ నుండి సద్దుల బతుకమ్మ వరకు — పండుగ క్రమం'
              : 'Festival Journey Timeline: From Puttamatti Clay to Tank Immersion'}
          </h2>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('/festival-calendar/')}
          className="text-xs font-medium text-[#B84232] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
        >
          {lang === 'te'
            ? '2024–2027 పంచాంగం తేదీలు చూడండి →'
            : 'View Annual Lunar Calendar Dates (2024–2027) →'}
        </button>
      </div>

      {/* Horizontal Milestone Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 py-6">
        {TIMELINE_MILESTONES.map((ms, index) => {
          const isSelected = index === activeIndex;
          return (
            <button
              key={ms.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`p-4 text-left border transition-colors cursor-pointer ${
                isSelected
                  ? 'bg-[#203A2B] text-[#FFF8E9] border-[#203A2B]'
                  : 'bg-[#F5EBD6]/50 text-[#203A2B] border-[#203A2B]/15 hover:border-[#203A2B]/40'
              }`}
            >
              <div className="text-xs font-mono-tabular opacity-75">
                0{index + 1} ·{' '}
                {ms.phase === 'boddemma'
                  ? 'BODDEMMA'
                  : ms.phase === 'transition'
                  ? 'AMAVASYA TRANSITION'
                  : 'BATHUKAMMA'}
              </div>
              <div className="font-serif-editorial text-lg font-semibold mt-1">
                {ms.title[lang]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Milestone Detail Box */}
      <div className="bg-[#F5EBD6]/60 border border-[#203A2B]/15 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-3xl space-y-2">
          <div className="text-xs text-[#A65E43] font-medium">
            {lang === 'te' ? 'తెలుగు తిథి క్రమం:' : 'Telugu Lunar Timing:'}{' '}
            <span className="text-[#203A2B]">{current.lunarTiming[lang]}</span>
          </div>
          <h3 className="text-2xl font-serif-editorial font-semibold text-[#203A2B]">
            {current.title[lang]}
          </h3>
          <p className="text-sm md:text-base text-[#203A2B]/90 leading-relaxed">
            {current.summary[lang]}
          </p>
          <p className="text-xs text-[#203A2B]/65 pt-1">
            {lang === 'te'
              ? 'గమనిక: తెలుగు చాంద్రమాన తిథుల ఆధారంగా ప్రతి సంవత్సరం ఇంగ్లీష్ క్యాలెండర్ తేదీలు మారుతుంటాయి.'
              : 'Note: This sequence follows the Telugu lunar calendar; exact Gregorian dates vary each year according to local Panchangam calculations.'}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onNavigate(current.detailLink)}
          className="px-5 py-3 bg-[#203A2B] text-[#FFF8E9] text-xs font-medium hover:bg-[#315D38] transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 self-start md:self-center cursor-pointer"
        >
          <span>{current.detailLabel[lang]}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
