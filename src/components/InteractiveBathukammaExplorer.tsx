import React, { useState } from 'react';
import { BATHUKAMMA_LAYERS, Language, GENERATED_ASSETS } from '../data/culturalArchive';
import { Layers, RotateCcw } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

interface InteractiveBathukammaExplorerProps {
  lang: Language;
  onNavigate?: (path: string) => void;
}

export const InteractiveBathukammaExplorer: React.FC<InteractiveBathukammaExplorerProps> = ({
  lang,
  onNavigate,
}) => {
  const [selectedLayerId, setSelectedLayerId] = useState<string>(BATHUKAMMA_LAYERS[0].id);
  const [isExploded, setIsExploded] = useState<boolean>(false);

  const activeLayer =
    BATHUKAMMA_LAYERS.find((l) => l.id === selectedLayerId) || BATHUKAMMA_LAYERS[0];

  const handleReset = () => {
    setSelectedLayerId(BATHUKAMMA_LAYERS[0].id);
    setIsExploded(false);
  };

  return (
    <section
      aria-labelledby="interactive-bathukamma-heading"
      className="border border-[#203A2B]/15 bg-[#F5EBD6]/55 p-6 md:p-10"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#203A2B]/15">
        <div>
          <p className="text-xs uppercase tracking-widest text-[#A65E43] font-medium">
            {lang === 'te'
              ? 'ఇంటరాక్టివ్ పూల నిర్మాణ విశ్లేషణ · 7 అంతస్తులు'
              : 'Interactive Floral Architecture · 7 Concentric Tiers'}
          </p>
          <h2
            id="interactive-bathukamma-heading"
            className="text-2xl md:text-4xl font-serif-editorial font-semibold text-[#203A2B] mt-1"
          >
            {lang === 'te'
              ? 'బతుకమ్మ పూల గోపురం — ప్రతి వరుసను తాకి తెలుసుకోండి'
              : 'Anatomy of a Bathukamma: Explore Every Floral Layer'}
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setIsExploded((prev) => !prev)}
            aria-pressed={isExploded}
            className={`px-4 py-2 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer ${
              isExploded
                ? 'bg-[#203A2B] text-[#FFF8E9] border-[#203A2B]'
                : 'bg-[#FFF8E9] text-[#203A2B] border-[#203A2B]/30 hover:border-[#203A2B]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>
              {isExploded
                ? lang === 'te'
                  ? 'సాధారణ వీక్షణ (Compact View)'
                  : 'Compact Cone View'
                : lang === 'te'
                ? 'విడివిడి వరుసల వీక్షణ (Exploded View)'
                : 'Exploded Diagram View'}
            </span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 text-xs font-medium bg-[#FFF8E9] text-[#203A2B] border border-[#203A2B]/30 hover:border-[#203A2B] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{lang === 'te' ? 'రీసెట్' : 'Reset'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
        {/* Left: Interactive Conical Floral Diagram */}
        <div className="lg:col-span-7 bg-[#FFF8E9] border border-[#203A2B]/15 p-6 md:p-8">
          <div className="flex items-center justify-between text-xs text-[#203A2B]/70 mb-6">
            <span>
              {lang === 'te'
                ? 'ఏదైనా పూల వరుసపై క్లిక్ చేయండి'
                : 'Click or tap any tier to inspect its botanical composition'}
            </span>
            <span className="font-mono-tabular">
              {lang === 'te' ? 'వరుస' : 'Tier'} 0{activeLayer.orderFromTop} / 07
            </span>
          </div>

          <div
            role="listbox"
            aria-label={
              lang === 'te' ? 'బతుకమ్మ పూల వరుసలు' : 'Bathukamma concentric floral layers'
            }
            className={`flex flex-col items-center justify-center py-4 transition-all ${
              isExploded ? 'gap-4' : 'gap-1'
            }`}
          >
            {BATHUKAMMA_LAYERS.map((layer) => {
              const isSelected = layer.id === selectedLayerId;
              const isGouramma = layer.orderFromTop === 1;
              const isTambalam = layer.orderFromTop === 7;

              return (
                <button
                  key={layer.id}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => setSelectedLayerId(layer.id)}
                  style={{ width: `${layer.widthPercent}%` }}
                  className={`group relative transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#203A2B] cursor-pointer ${
                    isSelected ? 'scale-[1.02] z-10' : 'opacity-90 hover:opacity-100'
                  }`}
                >
                  {isGouramma ? (
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-14 h-16 bg-[#E8B83F] flex items-center justify-center relative border-2 ${
                          isSelected ? 'border-[#203A2B] shadow-sm' : 'border-[#A65E43]/50'
                        }`}
                        style={{
                          clipPath: 'polygon(50% 0%, 10% 100%, 90% 100%)',
                        }}
                      >
                        <span
                          aria-hidden="true"
                          className="w-3.5 h-3.5 rounded-full bg-[#B84232] mt-4 block border border-[#FFF8E9]"
                        />
                      </div>
                      {isExploded && (
                        <span className="mt-1 text-[11px] font-medium text-[#203A2B]">
                          01 · {layer.teluguScript}
                        </span>
                      )}
                    </div>
                  ) : (
                    <div
                      className={`w-full flex items-center justify-between px-3 md:px-4 transition-all ${
                        isTambalam ? 'h-11 rounded-b-xl' : 'h-12 rounded-sm'
                      } ${
                        isSelected
                          ? 'ring-2 ring-[#203A2B] shadow-sm'
                          : 'border border-[#203A2B]/20'
                      }`}
                      style={{
                        backgroundColor: layer.colorHex,
                        color:
                          layer.colorHex === '#F5EBD6' || layer.colorHex === '#E8B83F'
                            ? '#203A2B'
                            : '#FFF8E9',
                      }}
                    >
                      <span className="font-mono-tabular text-xs font-medium whitespace-nowrap">
                        0{layer.orderFromTop}
                      </span>
                      <span className="text-xs md:text-sm font-medium truncate px-2">
                        {lang === 'te' ? layer.teluguScript : layer.name.en.split(':')[1] || layer.name.en}
                      </span>
                      <span className="text-[11px] opacity-85 hidden sm:inline whitespace-nowrap">
                        {isSelected ? (lang === 'te' ? 'ఎంపికైంది' : 'Selected') : lang === 'te' ? 'చూడండి' : 'Inspect'}
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-[#203A2B]/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#203A2B]/70">
            <span>
              {lang === 'te'
                ? 'ఆకృతి: శంఖాకార గోపురం (ఇత్తడి తాంబాలం ఆధారంగా)'
                : 'Geometry: Concentric stepped floral cone on brass tambalam'}
            </span>
            {onNavigate && (
              <button
                type="button"
                onClick={() => onNavigate('/bathukamma/flowers/')}
                className="text-[#B84232] font-medium hover:underline cursor-pointer whitespace-nowrap"
              >
                {lang === 'te' ? 'అన్ని పూల వివరాలు చూడండి →' : 'Open Full Botanical Encyclopedia →'}
              </button>
            )}
          </div>
        </div>

        {/* Right: Detailed Layer Inspection Card */}
        <div className="lg:col-span-5 bg-[#FFF8E9] border border-[#203A2B]/15 p-6 md:p-8">
          <div className="flex items-center gap-2 text-xs text-[#A65E43] font-medium">
            <span className="font-mono-tabular">TIER 0{activeLayer.orderFromTop}</span>
            <span aria-hidden="true">·</span>
            <span>{activeLayer.teluguScript}</span>
          </div>

          <h3 className="text-2xl font-serif-editorial font-semibold text-[#203A2B] mt-2">
            {activeLayer.name[lang]}
          </h3>

          <dl className="mt-5 space-y-4 border-t border-[#203A2B]/15 pt-4 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-wider text-[#203A2B]/60 font-medium">
                {lang === 'te' ? 'ఉపయోగించే పూలు / పదార్థాలు' : 'Botanical Elements & Materials'}
              </dt>
              <dd className="mt-1 font-medium text-[#315D38]">{activeLayer.flowersUsed[lang]}</dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-wider text-[#203A2B]/60 font-medium">
                {lang === 'te' ? 'సాంస్కృతిక వివరణ' : 'Cultural & Ritual Context'}
              </dt>
              <dd className="mt-1 text-[#203A2B]/90 leading-relaxed">
                {activeLayer.description[lang]}
              </dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-wider text-[#203A2B]/60 font-medium">
                {lang === 'te' ? 'నిర్మాణ ప్రయోజనం' : 'Structural Function in Cone'}
              </dt>
              <dd className="mt-1 text-[#203A2B]/80">{activeLayer.structuralRole[lang]}</dd>
            </div>
          </dl>

          <div className="mt-6 pt-5 border-t border-[#203A2B]/15">
            <ResilientImage
              src={GENERATED_ASSETS.bathukammaStack}
              alt="Authentic multicolored Bathukamma floral cone with Pasupu Gouramma"
              aspectClassName="aspect-[4/3]"
              caption={
                lang === 'te'
                  ? 'చిత్రం: ఇత్తడి తాంబాలంలో పేర్చిన సాంప్రదాయ బతుకమ్మ మరియు పసుపు గౌరమ్మ'
                  : 'Fig. 1 — Traditional concentric Bathukamma stack crowned with Pasupu Gouramma.'
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
