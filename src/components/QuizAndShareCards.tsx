import React, { useState } from 'react';
import { Language, QUIZ_DATA } from '../data/culturalArchive';
import { RotateCcw, Share2, Check, Copy } from 'lucide-react';

interface QuizAndShareCardsProps {
  lang: Language;
}

const SHAREABLE_FACTS = [
  {
    id: 'card-1',
    kicker: { en: 'BOTANICAL HERITAGE · TELANGANA', te: 'తెలంగాణ రాష్ట్ర పుష్పం · తంగేడు' },
    title: {
      en: 'Tangedu (Senna auriculata): The Golden Foundation of Bathukamma',
      te: 'తంగేడు పువ్వు లేనిదే బతుకమ్మ లేదు',
    },
    body: {
      en: 'Blooming across post-monsoon Deccan red soils from September to November, Tangedu forms the structural rings of Telangana’s living floral stacks.',
      te: 'సెప్టెంబర్–నవంబర్ నెలల్లో తెలంగాణ ఎర్ర నేలలపై విరగబూసే తంగేడు పువ్వు బతుకమ్మ పేర్పులో ప్రధాన పునాదిగా నిలుస్తుంది.',
    },
    accent: '#E8B83F',
  },
  {
    id: 'card-2',
    kicker: { en: 'EARTHEN PRELUDE · BODDEMMA', te: 'పుట్టమట్టి పండుగ · బొడ్డెమ్మ' },
    title: {
      en: 'Nine Nights of Puttamatti Before the Floral Stack Begins',
      te: 'బతుకమ్మకు నాంది పలికే తొమ్మిది రోజుల బొడ్డెమ్మ',
    },
    body: {
      en: 'Before Mahalaya Amavasya, young girls sculpt a five-tiered clay altar from sacred termite-mound earth, painting it with lime, turmeric, and kumkuma.',
      te: 'మహాలయ అమావాస్యకు ముందు 9 రోజుల పాటు కన్నెపిల్లలు పుట్టమట్టితో ఐదు అంతస్తుల గద్దెను కట్టి కోలిరో పాటలతో ఆరాధిస్తారు.',
    },
    accent: '#A65E43',
  },
  {
    id: 'card-3',
    kicker: { en: 'SIXTH DAY CUSTOM · ALIGINA BATHUKAMMA', te: 'ఆరవ రోజు · అలిగిన బతుకమ్మ' },
    title: {
      en: 'Why the Sixth Day of Bathukamma Observes Complete Ecological Rest',
      te: 'ఆరవ రోజున పూలు కోయరు, నైవేద్యం వండరు',
    },
    body: {
      en: 'Known as Aligina Bathukamma (or Arremidi), the sixth day leaves blooming shrubs undisturbed while households prepare roasted Sattu Pindi for Saddula Bathukamma.',
      te: 'అలిగిన బతుకమ్మ (అర్రెమిడి) రోజున పూల మొక్కలకు, మహిళలకు విశ్రాంతినిస్తూ రాబోయే సద్దుల బతుకమ్మకు సన్నాహాలు చేసుకుంటారు.',
    },
    accent: '#315D38',
  },
];

export const QuizAndShareCards: React.FC<QuizAndShareCardsProps> = ({ lang }) => {
  // Quiz State
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Share Card State
  const [selectedCardId, setSelectedCardId] = useState(SHAREABLE_FACTS[0].id);
  const [copiedFeedback, setCopiedFeedback] = useState(false);

  const currentQ = QUIZ_DATA[currentQIndex];
  const activeCard =
    SHAREABLE_FACTS.find((c) => c.id === selectedCardId) || SHAREABLE_FACTS[0];

  const handleSelectOption = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    setAnsweredCount((c) => c + 1);
    if (idx === currentQ.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQIndex + 1 < QUIZ_DATA.length) {
      setCurrentQIndex((i) => i + 1);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setScore(0);
    setAnsweredCount(0);
    setQuizCompleted(false);
  };

  const handleShareCard = async () => {
    const shareText = `${activeCard.title[lang]} — ${activeCard.body[lang]} | Boddemma.com (An initiative by The Panchayithi Network)`;
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: activeCard.title[lang],
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch {
        // Fallback to clipboard copy
      }
    }

    try {
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      setCopiedFeedback(true);
      setTimeout(() => setCopiedFeedback(false), 3000);
    } catch {
      setCopiedFeedback(true);
      setTimeout(() => setCopiedFeedback(false), 3000);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left 7 Cols: Interactive Cultural Knowledge Quiz */}
      <section
        aria-labelledby="quiz-section-heading"
        className="lg:col-span-7 bg-[#FFF8E9] border border-[#203A2B]/15 p-6 md:p-8 flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#203A2B]/15">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#A65E43] font-medium">
                {lang === 'te' ? 'సాంస్కృతిక విజ్ఞాన పరీక్ష' : 'Interactive Cultural Knowledge Quiz'}
              </p>
              <h3
                id="quiz-section-heading"
                className="text-2xl font-serif-editorial font-semibold text-[#203A2B] mt-1"
              >
                {lang === 'te'
                  ? 'బొడ్డెమ్మ & బతుకమ్మ విశేషాలు మీకు తెలుసా?'
                  : 'Test Your Understanding of Boddemma & Bathukamma'}
              </h3>
            </div>

            <div className="text-xs font-mono-tabular text-[#203A2B]/80 shrink-0">
              {lang === 'te' ? 'స్కోరు' : 'Score'}: {score} / {QUIZ_DATA.length}
            </div>
          </div>

          {!quizCompleted ? (
            <div className="mt-6 space-y-5">
              <div className="flex items-center justify-between text-xs text-[#203A2B]/65 font-mono-tabular">
                <span>
                  {lang === 'te' ? 'ప్రశ్న' : 'Question'} 0{currentQIndex + 1} / 0{QUIZ_DATA.length}
                </span>
                <span>
                  {answeredCount} {lang === 'te' ? 'పూర్తయ్యాయి' : 'answered'}
                </span>
              </div>

              <h4 className="text-lg md:text-xl font-serif-editorial font-semibold text-[#203A2B]">
                {currentQ.question[lang]}
              </h4>

              <div className="space-y-2.5">
                {currentQ.options.map((opt, idx) => {
                  const isChosen = selectedOption === idx;
                  const isCorrect = idx === currentQ.correctIndex;
                  let stateStyle =
                    'bg-[#F5EBD6]/40 border-[#203A2B]/20 text-[#203A2B] hover:border-[#203A2B]';

                  if (selectedOption !== null) {
                    if (isCorrect) {
                      stateStyle = 'bg-[#315D38] text-[#FFF8E9] border-[#315D38]';
                    } else if (isChosen && !isCorrect) {
                      stateStyle = 'bg-[#B84232] text-[#FFF8E9] border-[#B84232]';
                    } else {
                      stateStyle = 'bg-[#F5EBD6]/20 border-[#203A2B]/10 text-[#203A2B]/60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={selectedOption !== null}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full p-3.5 text-left text-xs md:text-sm border transition-colors cursor-pointer disabled:cursor-default ${stateStyle}`}
                    >
                      <span className="font-mono-tabular mr-2 font-semibold">
                        {String.fromCharCode(65 + idx)}.
                      </span>
                      <span>{opt[lang]}</span>
                    </button>
                  );
                })}
              </div>

              {selectedOption !== null && (
                <div className="p-4 bg-[#F5EBD6] border border-[#203A2B]/15 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#203A2B]">
                    {selectedOption === currentQ.correctIndex
                      ? lang === 'te'
                        ? 'సరైన సమాధానం (Correct)'
                        : 'Correct Answer'
                      : lang === 'te'
                      ? 'వివరణ (Explanation)'
                      : 'Cultural Explanation'}
                  </p>
                  <p className="text-xs md:text-sm text-[#203A2B]/90 leading-relaxed">
                    {currentQ.explanation[lang]}
                  </p>
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="px-4 py-2 bg-[#203A2B] text-[#FFF8E9] text-xs font-medium hover:bg-[#315D38] transition-colors cursor-pointer"
                  >
                    {currentQIndex + 1 < QUIZ_DATA.length
                      ? lang === 'te'
                        ? 'తరువాతి ప్రశ్న →'
                        : 'Next Question →'
                      : lang === 'te'
                      ? 'ఫలితం చూడండి'
                      : 'View Final Score'}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="mt-8 p-6 bg-[#F5EBD6]/60 border border-[#203A2B]/15 text-center space-y-4">
              <div className="text-3xl font-serif-editorial font-bold text-[#203A2B] font-mono-tabular">
                {score} / {QUIZ_DATA.length}
              </div>
              <p className="text-sm text-[#203A2B]/85 max-w-md mx-auto">
                {lang === 'te'
                  ? 'మీరు తెలంగాణ పూల పండుగల క్విజ్‌ను పూర్తి చేశారు. మళ్లీ ప్రయత్నించడానికి రీస్టార్ట్ నొక్కండి.'
                  : 'You have completed the Telangana Floral Heritage Quiz. Share what you learned or restart below.'}
              </p>
              <button
                type="button"
                onClick={handleRestartQuiz}
                className="px-5 py-2.5 bg-[#203A2B] text-[#FFF8E9] text-xs font-medium inline-flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{lang === 'te' ? 'మళ్లీ ప్రారంభించండి' : 'Restart Quiz'}</span>
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-[#203A2B]/10 flex items-center justify-between text-xs text-[#203A2B]/65">
          <span>
            {lang === 'te'
              ? 'విద్యార్థులు & కుటుంబాల కోసం రూపొందించబడింది'
              : 'Designed for classrooms, students & cultural learners'}
          </span>
          <button
            type="button"
            onClick={handleRestartQuiz}
            className="underline hover:text-[#203A2B] cursor-pointer"
          >
            {lang === 'te' ? 'రీసెట్' : 'Reset'}
          </button>
        </div>
      </section>

      {/* Right 5 Cols: Shareable Festival Knowledge Cards */}
      <section
        aria-labelledby="share-card-heading"
        className="lg:col-span-5 bg-[#FFF8E9] border border-[#203A2B]/15 p-6 md:p-8 flex flex-col justify-between"
      >
        <div>
          <p className="text-xs uppercase tracking-widest text-[#A65E43] font-medium">
            {lang === 'te' ? 'షేరబుల్ సాంస్కృతిక కార్డులు' : 'Shareable Cultural Knowledge Cards'}
          </p>
          <h3
            id="share-card-heading"
            className="text-2xl font-serif-editorial font-semibold text-[#203A2B] mt-1"
          >
            {lang === 'te'
              ? 'పండుగ విశేషాలను మిత్రులతో పంచుకోండి'
              : 'Share a Cultural Fact Card'}
          </h3>

          <div className="flex items-center gap-2 mt-4">
            {SHAREABLE_FACTS.map((fact, idx) => (
              <button
                key={fact.id}
                type="button"
                onClick={() => setSelectedCardId(fact.id)}
                className={`px-3 py-1.5 text-xs font-mono-tabular border cursor-pointer ${
                  selectedCardId === fact.id
                    ? 'bg-[#203A2B] text-[#FFF8E9] border-[#203A2B]'
                    : 'bg-[#F5EBD6]/50 text-[#203A2B] border-[#203A2B]/20'
                }`}
              >
                Card 0{idx + 1}
              </button>
            ))}
          </div>

          {/* Visual Branded Knowledge Card */}
          <div className="mt-5 p-6 bg-[#203A2B] text-[#FFF8E9] border border-[#203A2B] relative">
            <div
              className="h-1.5 w-16 mb-4"
              style={{ backgroundColor: activeCard.accent }}
            />
            <p className="text-[11px] uppercase tracking-widest text-[#E8B83F]">
              {activeCard.kicker[lang]}
            </p>
            <h4 className="text-xl font-serif-editorial font-semibold text-[#FFF8E9] mt-2">
              {activeCard.title[lang]}
            </h4>
            <p className="text-xs md:text-sm text-[#FFF8E9]/85 leading-relaxed mt-3">
              {activeCard.body[lang]}
            </p>
            <div className="mt-6 pt-4 border-t border-[#FFF8E9]/15 flex items-center justify-between text-[11px] text-[#FFF8E9]/70">
              <span>Boddemma.com</span>
              <span>The Panchayithi Network</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#203A2B]/15 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleShareCard}
            className="w-full py-2.5 px-4 bg-[#B84232] text-[#FFF8E9] text-xs font-medium hover:bg-[#A65E43] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            {copiedFeedback ? (
              <>
                <Check className="w-4 h-4" />
                <span>
                  {lang === 'te' ? 'సందేశం కాపీ చేయబడింది!' : 'Cultural Card Text & Link Copied!'}
                </span>
              </>
            ) : (
              <>
                {typeof navigator !== 'undefined' && 'share' in navigator ? (
                  <Share2 className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                <span>
                  {lang === 'te' ? 'ఈ కార్డును షేర్ / కాపీ చేయండి' : 'Share or Copy Cultural Card'}
                </span>
              </>
            )}
          </button>
        </div>
      </section>
    </div>
  );
};
