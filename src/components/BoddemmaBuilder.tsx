import React, { useState } from 'react';
import { BODDEMMA_STAGES, GENERATED_ASSETS, Language } from '../data/culturalArchive';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

interface BoddemmaBuilderProps {
  lang: Language;
}

export const BoddemmaBuilder: React.FC<BoddemmaBuilderProps> = ({ lang }) => {
  const [currentStage, setCurrentStage] = useState<number>(1);

  const stageObj =
    BODDEMMA_STAGES.find((s) => s.stageNumber === currentStage) || BODDEMMA_STAGES[0];

  return (
    <section
      aria-labelledby="boddemma-builder-heading"
      className="border border-[#203A2B]/15 bg-[#F5EBD6]/55 p-6 md:p-10"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#203A2B]/15">
        <div>
          <p className="text-xs uppercase tracking-widest text-[#A65E43] font-medium">
            {lang === 'te'
              ? 'ఇంటరాక్టివ్ బొడ్డెమ్మ నిర్మాణ మార్గదర్శిని · 6 దశలు'
              : 'Interactive Cultural Learning Tool · 6 Preparation Stages'}
          </p>
          <h2
            id="boddemma-builder-heading"
            className="text-2xl md:text-4xl font-serif-editorial font-semibold text-[#203A2B] mt-1"
          >
            {lang === 'te'
              ? 'పుట్టమట్టితో బొడ్డెమ్మ గద్దె తయారీ — దశలవారీగా'
              : 'Preparing a Traditional Boddemma: Step-by-Step Guide'}
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setCurrentStage(1)}
          className="px-4 py-2 text-xs font-medium bg-[#FFF8E9] text-[#203A2B] border border-[#203A2B]/30 hover:border-[#203A2B] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{lang === 'te' ? 'మొదటి దశకు' : 'Start From Stage 1'}</span>
        </button>
      </div>

      {/* Stage Stepper Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 py-6 border-b border-[#203A2B]/15">
        {BODDEMMA_STAGES.map((st) => {
          const isActive = st.stageNumber === currentStage;
          const isCompleted = st.stageNumber < currentStage;
          return (
            <button
              key={st.stageNumber}
              type="button"
              onClick={() => setCurrentStage(st.stageNumber)}
              className={`p-3 text-left border transition-colors cursor-pointer ${
                isActive
                  ? 'bg-[#203A2B] text-[#FFF8E9] border-[#203A2B]'
                  : isCompleted
                  ? 'bg-[#FFF8E9] text-[#203A2B] border-[#315D38]/50'
                  : 'bg-[#FFF8E9]/60 text-[#203A2B]/70 border-[#203A2B]/15 hover:border-[#203A2B]/40'
              }`}
            >
              <div className="font-mono-tabular text-xs opacity-80">
                0{st.stageNumber} / 06
              </div>
              <div className="text-xs font-medium mt-1 truncate">
                {st.teluguSubtitle}
              </div>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
        {/* Left: Progressive Visual Stage Illustration */}
        <div className="lg:col-span-6 bg-[#FFF8E9] border border-[#203A2B]/15 p-6">
          <div className="flex items-center justify-between text-xs text-[#203A2B]/70 mb-4">
            <span>
              {lang === 'te'
                ? 'బొడ్డెమ్మ గద్దె నిర్మాణ దృశ్య రూపం'
                : 'Progressive Earthen Altar Diagram'}
            </span>
            <span className="font-mono-tabular">
              {lang === 'te' ? 'దశ' : 'STAGE'} 0{currentStage}
            </span>
          </div>

          {/* Interactive SVG Diagram reflecting currentStage */}
          <div className="w-full aspect-[4/3] bg-[#F5EBD6]/70 border border-[#203A2B]/10 flex items-center justify-center p-4">
            <svg
              viewBox="0 0 400 280"
              className="w-full h-full max-h-[260px]"
              role="img"
              aria-label={stageObj.title[lang]}
            >
              {/* Courtyard Earthen Ground */}
              <rect x="20" y="230" width="360" height="32" fill="#A65E43" opacity="0.25" />

              {/* Stage 2+: Rice-Flour Muggu Pattern on Courtyard Floor */}
              {currentStage >= 2 && (
                <g stroke="#FFF8E9" strokeWidth="2.5" fill="none">
                  <line x1="40" y1="246" x2="360" y2="246" strokeDasharray="6 4" />
                  <polygon points="200,234 230,246 200,258 170,246" />
                  <polygon points="110,236 130,246 110,256 90,246" />
                  <polygon points="290,236 310,246 290,256 270,246" />
                  <rect x="65" y="220" width="270" height="12" fill="#8C583A" stroke="#203A2B" strokeWidth="1" />
                </g>
              )}

              {/* Stage 1 only: Puttamatti Mound */}
              {currentStage === 1 && (
                <g>
                  <path
                    d="M120,230 Q200,110 280,230 Z"
                    fill="#7A5238"
                    stroke="#203A2B"
                    strokeWidth="1.5"
                  />
                  <text
                    x="200"
                    y="195"
                    textAnchor="middle"
                    fill="#FFF8E9"
                    fontSize="12"
                    fontWeight="600"
                  >
                    పుట్టమట్టి (Puttamatti Clay)
                  </text>
                </g>
              )}

              {/* Stage 3+: Five-Tiered Stepped Clay Pyramid (Boddemma Gadde) */}
              {currentStage >= 3 && (
                <g stroke="#203A2B" strokeWidth="1.2">
                  {/* Tier 1 (Bottom) */}
                  <rect x="80" y="192" width="240" height="28" fill="#6E4B35" />
                  {/* Tier 2 */}
                  <rect x="102" y="164" width="196" height="28" fill="#78523B" />
                  {/* Tier 3 */}
                  <rect x="124" y="136" width="152" height="28" fill="#6E4B35" />
                  {/* Tier 4 */}
                  <rect x="146" y="108" width="108" height="28" fill="#78523B" />
                  {/* Tier 5 (Top step) */}
                  <rect x="168" y="82" width="64" height="26" fill="#6E4B35" />
                </g>
              )}

              {/* Stage 4+: White Lime, Turmeric & Kumkuma Vertical Stripes */}
              {currentStage >= 4 && (
                <g>
                  {[96, 130, 165, 200, 235, 270, 304].map((x, i) => (
                    <g key={`t1-${i}`}>
                      <rect x={x - 3} y="194" width="3" height="24" fill="#FFF8E9" />
                      <rect x={x} y="194" width="3" height="24" fill="#E8B83F" />
                      <circle cx={x + 12} cy="206" r="3.5" fill="#B84232" />
                    </g>
                  ))}
                  {[116, 150, 184, 216, 250, 282].map((x, i) => (
                    <g key={`t2-${i}`}>
                      <rect x={x - 2} y="166" width="3" height="24" fill="#FFF8E9" />
                      <rect x={x + 1} y="166" width="3" height="24" fill="#E8B83F" />
                      <circle cx={x + 12} cy="178" r="3" fill="#B84232" />
                    </g>
                  ))}
                  {[138, 170, 200, 230, 260].map((x, i) => (
                    <g key={`t3-${i}`}>
                      <rect x={x - 2} y="138" width="3" height="24" fill="#FFF8E9" />
                      <rect x={x + 1} y="138" width="3" height="24" fill="#E8B83F" />
                      <circle cx={x + 10} cy="150" r="3" fill="#B84232" />
                    </g>
                  ))}
                  {[160, 188, 214, 240].map((x, i) => (
                    <g key={`t4-${i}`}>
                      <rect x={x - 2} y="110" width="2.5" height="24" fill="#FFF8E9" />
                      <rect x={x + 1} y="110" width="2.5" height="24" fill="#E8B83F" />
                      <circle cx={x + 9} cy="122" r="2.8" fill="#B84232" />
                    </g>
                  ))}
                </g>
              )}

              {/* Stage 5+: Kalasham, Pasupu Gouramma & Seasonal Flowers on Steps */}
              {currentStage >= 5 && (
                <g>
                  {/* Clay Kalasham / Gurigi at Top */}
                  <ellipse cx="200" cy="66" rx="16" ry="14" fill="#A65E43" stroke="#203A2B" strokeWidth="1.2" />
                  {/* Turmeric Gouramma Cone */}
                  <polygon points="200,34 190,54 210,54" fill="#E8B83F" stroke="#203A2B" strokeWidth="1" />
                  <circle cx="200" cy="46" r="2.5" fill="#B84232" />

                  {/* Flowers on steps (Tangedu Yellow & Tumma/Katla White/Pink) */}
                  {[88, 118, 148, 178, 218, 248, 278, 308].map((x, idx) => (
                    <circle
                      key={`fl1-${idx}`}
                      cx={x}
                      cy="191"
                      r="5"
                      fill={idx % 2 === 0 ? '#E8B83F' : '#FFF8E9'}
                      stroke="#315D38"
                      strokeWidth="1"
                    />
                  ))}
                  {[110, 140, 170, 200, 230, 260, 290].map((x, idx) => (
                    <circle
                      key={`fl2-${idx}`}
                      cx={x}
                      cy="163"
                      r="4.5"
                      fill={idx % 2 === 0 ? '#E8B83F' : '#D889A5'}
                      stroke="#315D38"
                      strokeWidth="1"
                    />
                  ))}
                  {[134, 166, 200, 234, 266].map((x, idx) => (
                    <circle
                      key={`fl3-${idx}`}
                      cx={x}
                      cy="135"
                      r="4.5"
                      fill="#E8B83F"
                      stroke="#315D38"
                      strokeWidth="1"
                    />
                  ))}
                </g>
              )}

              {/* Stage 6: Evening Oil Lamps Glowing on Either Side */}
              {currentStage === 6 && (
                <g>
                  {/* Left Lamp */}
                  <polygon points="35,215 55,215 50,224 40,224" fill="#A65E43" />
                  <path d="M45,198 Q50,208 45,214 Q40,208 45,198 Z" fill="#E8B83F" />
                  {/* Right Lamp */}
                  <polygon points="345,215 365,215 360,224 350,224" fill="#A65E43" />
                  <path d="M355,198 Q360,208 355,214 Q350,208 355,198 Z" fill="#E8B83F" />
                </g>
              )}
            </svg>
          </div>

          <div className="mt-4">
            <ResilientImage
              src={GENERATED_ASSETS.boddemmaClay}
              alt="Authentic five-tiered Boddemma clay mound decorated with turmeric, kumkuma, and seasonal flowers"
              aspectClassName="aspect-[16/9]"
              caption={
                lang === 'te'
                  ? 'చిత్రం: పుట్టమట్టితో నిర్మించి పసుపు, కుంకుమ, పూలతో అలంకరించిన బొడ్డెమ్మ గద్దె'
                  : 'Documentary Reference — Five-tiered Boddemma clay structure on a rice-flour muggu.'
              }
            />
          </div>
        </div>

        {/* Right: Stage Explanation & Navigation */}
        <div className="lg:col-span-6 bg-[#FFF8E9] border border-[#203A2B]/15 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#A65E43] font-medium">
              <span className="font-mono-tabular">STAGE 0{stageObj.stageNumber} / 06</span>
              <span aria-hidden="true">·</span>
              <span>{stageObj.teluguSubtitle}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-serif-editorial font-semibold text-[#203A2B] mt-2">
              {stageObj.title[lang]}
            </h3>

            <div className="mt-6 space-y-5 border-t border-[#203A2B]/15 pt-5 text-sm">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#203A2B]/60 font-medium">
                  {lang === 'te' ? 'కావలసిన వస్తువులు' : 'Traditional Materials Used'}
                </h4>
                <p className="mt-1 font-medium text-[#315D38]">{stageObj.materials[lang]}</p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#203A2B]/60 font-medium">
                  {lang === 'te' ? 'తయారీ విధానం' : 'Preparation Method'}
                </h4>
                <p className="mt-1 text-[#203A2B]/90 leading-relaxed text-base">
                  {stageObj.explanation[lang]}
                </p>
              </div>

              <div className="bg-[#F5EBD6]/70 p-4 border border-[#203A2B]/10">
                <h4 className="text-xs uppercase tracking-wider text-[#A65E43] font-medium">
                  {lang === 'te'
                    ? 'సాంస్కృతిక నేపథ్యం & ప్రాంతీయ వైవిధ్యం'
                    : 'Cultural Context & Regional Nuance'}
                </h4>
                <p className="mt-1 text-xs md:text-sm text-[#203A2B]/85 leading-relaxed">
                  {stageObj.culturalContext[lang]}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-[#203A2B]/15 flex items-center justify-between gap-4">
            <button
              type="button"
              disabled={currentStage === 1}
              onClick={() => setCurrentStage((prev) => Math.max(1, prev - 1))}
              className="px-4 py-2.5 text-xs font-medium border border-[#203A2B]/30 text-[#203A2B] disabled:opacity-40 hover:border-[#203A2B] transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{lang === 'te' ? 'మునుపటి దశ' : 'Previous Stage'}</span>
            </button>

            <span className="font-mono-tabular text-xs text-[#203A2B]/70">
              {currentStage} / 6
            </span>

            <button
              type="button"
              disabled={currentStage === 6}
              onClick={() => setCurrentStage((prev) => Math.min(6, prev + 1))}
              className="px-5 py-2.5 text-xs font-medium bg-[#203A2B] text-[#FFF8E9] disabled:opacity-40 hover:bg-[#315D38] transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer disabled:cursor-not-allowed"
            >
              <span>{lang === 'te' ? 'తరువాతి దశ' : 'Next Stage'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
