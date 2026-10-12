import React, { useState } from 'react';
import { GENERATED_ASSETS, Language } from '../data/culturalArchive';
import { Image as ImageIcon, Film, Wand2, Upload, Loader2 } from 'lucide-react';

interface CulturalVisualStudioProps {
  lang: Language;
}

const ASPECT_RATIOS = ['1:1', '2:3', '3:2', '3:4', '4:3', '9:16', '16:9', '21:9'] as const;
const IMAGE_SIZES = ['1K', '2K', '4K'] as const;
const VIDEO_ASPECTS = ['16:9', '9:16'] as const;

export const CulturalVisualStudio: React.FC<CulturalVisualStudioProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'generate' | 'edit' | 'video'>('generate');

  // Tab 1: Generate High-Quality Image (gemini-3-pro-image-preview / gemini-nano-banana-2.1)
  const [genPrompt, setGenPrompt] = useState(
    'Traditional Telangana Bathukamma floral cone with golden Tangedu and crimson Gunugu flowers on a brass tambalam in a village courtyard'
  );
  const [genModel, setGenModel] = useState<'gemini-3-pro-image-preview' | 'gemini-nano-banana-2.1'>(
    'gemini-3-pro-image-preview'
  );
  const [genSize, setGenSize] = useState<(typeof IMAGE_SIZES)[number]>('1K');
  const [genAspect, setGenAspect] = useState<(typeof ASPECT_RATIOS)[number]>('16:9');
  const [genLoading, setGenLoading] = useState(false);
  const [genResultUrl, setGenResultUrl] = useState<string | null>(null);
  const [genError, setGenError] = useState<string | null>(null);

  // Tab 2: Create & Edit Image (gemini-nano-banana-2.1)
  const [editPrompt, setEditPrompt] = useState(
    'Add glowing brass oil lamps and fresh yellow marigold petals around the base in warm evening light'
  );
  const [editAspect, setEditAspect] = useState<(typeof ASPECT_RATIOS)[number]>('4:3');
  const [editSourceBase64, setEditSourceBase64] = useState<string | null>(null);
  const [editSourceMime, setEditSourceMime] = useState<string>('image/jpeg');
  const [editLoading, setEditLoading] = useState(false);
  const [editResultUrl, setEditResultUrl] = useState<string | null>(null);
  const [editError, setEditError] = useState<string | null>(null);

  // Tab 3: Animate Photo into Video (veo-3.1-fast-generate-preview)
  const [videoPrompt, setVideoPrompt] = useState(
    'Gentle autumn breeze moving across the Tangedu petals and warm oil lamps flickering softly in the village courtyard'
  );
  const [videoAspect, setVideoAspect] = useState<(typeof VIDEO_ASPECTS)[number]>('16:9');
  const [videoSourceBase64, setVideoSourceBase64] = useState<string | null>(null);
  const [videoSourceMime, setVideoSourceMime] = useState<string>('image/jpeg');
  const [videoLoading, setVideoLoading] = useState(false);
  const [videoStatusMessage, setVideoStatusMessage] = useState<string>('');
  const [videoResultUrl, setVideoResultUrl] = useState<string | null>(null);
  const [videoError, setVideoError] = useState<string | null>(null);

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    target: 'edit' | 'video'
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      if (target === 'edit') {
        setEditSourceBase64(result);
        setEditSourceMime(file.type || 'image/jpeg');
      } else {
        setVideoSourceBase64(result);
        setVideoSourceMime(file.type || 'image/jpeg');
      }
    };
    reader.readAsDataURL(file);
  };

  const loadArchiveSampleAsBase64 = async (url: string, target: 'edit' | 'video') => {
    try {
      const resp = await fetch(url);
      const blob = await resp.blob();
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        if (target === 'edit') {
          setEditSourceBase64(base64);
          setEditSourceMime(blob.type || 'image/jpeg');
        } else {
          setVideoSourceBase64(base64);
          setVideoSourceMime(blob.type || 'image/jpeg');
        }
      };
      reader.readAsDataURL(blob);
    } catch {
      // ignore
    }
  };

  const handleGenerateImage = async (e: React.FormEvent) => {
    e.preventDefault();
    setGenLoading(true);
    setGenError(null);
    try {
      const response = await fetch('/api/ai/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: genPrompt,
          model: genModel,
          imageSize: genSize,
          aspectRatio: genAspect,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Unable to generate image.');
      }
      setGenResultUrl(data.imageUrl);
    } catch (err: any) {
      setGenError(err?.message || 'Image generation failed.');
    } finally {
      setGenLoading(false);
    }
  };

  const handleEditImage = async (e: React.FormEvent) => {
    e.preventDefault();
    setEditLoading(true);
    setEditError(null);
    try {
      const response = await fetch('/api/ai/edit-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: editPrompt,
          base64ImageData: editSourceBase64,
          mimeType: editSourceMime,
          aspectRatio: editAspect,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Unable to edit image.');
      }
      setEditResultUrl(data.imageUrl);
    } catch (err: any) {
      setEditError(err?.message || 'Image editing failed.');
    } finally {
      setEditLoading(false);
    }
  };

  const handleGenerateVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoSourceBase64) {
      setVideoError(
        lang === 'te'
          ? 'దయచేసి ఫోటోను అప్‌లోడ్ చేయండి లేదా ఆర్కైవ్ చిత్రాన్ని ఎంచుకోండి.'
          : 'Please upload a photo or select a cultural archive image first.'
      );
      return;
    }

    setVideoLoading(true);
    setVideoError(null);
    setVideoResultUrl(null);
    setVideoStatusMessage(
      lang === 'te'
        ? 'వీడియో యానిమేషన్ ప్రారంభమైంది (veo-3.1-fast-generate-preview)...'
        : 'Starting Veo cultural animation (veo-3.1-fast-generate-preview)...'
    );

    try {
      const startRes = await fetch('/api/ai/generate-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: videoPrompt,
          base64ImageData: videoSourceBase64,
          mimeType: videoSourceMime,
          aspectRatio: videoAspect,
        }),
      });
      const startData = await startRes.json();
      if (!startRes.ok || !startData.operationName) {
        throw new Error(startData.error || 'Could not start Veo video generation.');
      }

      const operationName = startData.operationName;
      let isDone = false;
      let attempts = 0;

      while (!isDone && attempts < 40) {
        attempts += 1;
        await new Promise((r) => setTimeout(r, 4500));
        setVideoStatusMessage(
          lang === 'te'
            ? `పూల కదలికలను రూపొందిస్తోంది... (తనిఖీ ${attempts})`
            : `Synthesizing floral motion frames... (Check ${attempts})`
        );
        const pollRes = await fetch('/api/ai/video-status', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ operationName }),
        });
        const pollData = await pollRes.json();
        if (!pollRes.ok) {
          throw new Error(pollData.error || 'Error polling video status.');
        }
        if (pollData.done) {
          isDone = true;
        }
      }

      if (!isDone) {
        throw new Error('Video generation timed out. Please try again.');
      }

      const downloadRes = await fetch('/api/ai/video-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ operationName }),
      });
      if (!downloadRes.ok) {
        throw new Error('Failed to download completed video stream.');
      }
      const videoBlob = await downloadRes.blob();
      const objectUrl = URL.createObjectURL(videoBlob);
      setVideoResultUrl(objectUrl);
      setVideoStatusMessage('');
    } catch (err: any) {
      setVideoError(err?.message || 'Video generation failed.');
      setVideoStatusMessage('');
    } finally {
      setVideoLoading(false);
    }
  };

  return (
    <section
      aria-labelledby="visual-studio-heading"
      className="border border-[#203A2B]/15 bg-[#F5EBD6]/55 p-6 md:p-10"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#203A2B]/15">
        <div>
          <p className="text-xs uppercase tracking-widest text-[#A65E43] font-medium">
            {lang === 'te'
              ? 'డిజిటల్ వారసత్వ విజువల్ స్టూడియో'
              : 'Interactive Cultural Illustration & Motion Studio'}
          </p>
          <h2
            id="visual-studio-heading"
            className="text-2xl md:text-4xl font-serif-editorial font-semibold text-[#203A2B] mt-1"
          >
            {lang === 'te'
              ? 'సాంస్కృతిక చిత్రాల సృష్టి, సవరణ & వీడియో యానిమేషన్'
              : 'Create, Edit & Animate Floral Heritage Visuals'}
          </h2>
        </div>

        {/* Interactive Mode Switcher */}
        <div className="flex items-center gap-1 p-1 bg-[#FFF8E9] border border-[#203A2B]/20 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('generate')}
            className={`px-3.5 py-2 text-xs font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'generate'
                ? 'bg-[#203A2B] text-[#FFF8E9]'
                : 'text-[#203A2B] hover:bg-[#F5EBD6]'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>{lang === 'te' ? '1K/2K/4K చిత్ర సృష్టి' : 'Studio Image (1K–4K)'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('edit')}
            className={`px-3.5 py-2 text-xs font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'edit'
                ? 'bg-[#203A2B] text-[#FFF8E9]'
                : 'text-[#203A2B] hover:bg-[#F5EBD6]'
            }`}
          >
            <Wand2 className="w-3.5 h-3.5" />
            <span>{lang === 'te' ? 'చిత్ర సవరణ' : 'Create & Edit'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('video')}
            className={`px-3.5 py-2 text-xs font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'video'
                ? 'bg-[#203A2B] text-[#FFF8E9]'
                : 'text-[#203A2B] hover:bg-[#F5EBD6]'
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>{lang === 'te' ? 'వీడియో యానిమేషన్' : 'Animate to Video'}</span>
          </button>
        </div>
      </div>

      {/* TAB 1: Generate High-Quality Images (1K, 2K, 4K & 8 Aspect Ratios) */}
      {activeTab === 'generate' && (
        <form onSubmit={handleGenerateImage} className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          <div className="lg:col-span-6 space-y-5 bg-[#FFF8E9] border border-[#203A2B]/15 p-6">
            <div>
              <label
                htmlFor="studio-gen-prompt"
                className="block text-xs uppercase tracking-wider text-[#203A2B]/75 font-medium mb-2"
              >
                {lang === 'te' ? 'సాంస్కృతిక చిత్ర వివరణ (Prompt)' : 'Cultural Visual Prompt'}
              </label>
              <textarea
                id="studio-gen-prompt"
                rows={3}
                value={genPrompt}
                onChange={(e) => setGenPrompt(e.target.value)}
                className="w-full p-3 text-sm bg-[#F5EBD6]/40 border border-[#203A2B]/25 text-[#203A2B] focus:outline-none focus:border-[#203A2B]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#203A2B]/75 font-medium mb-2">
                  {lang === 'te' ? 'మోడల్ ఎంపిక' : 'Generation Model'}
                </label>
                <select
                  value={genModel}
                  onChange={(e) =>
                    setGenModel(
                      e.target.value as 'gemini-3-pro-image-preview' | 'gemini-nano-banana-2.1'
                    )
                  }
                  className="w-full p-2.5 text-xs bg-[#FFF8E9] border border-[#203A2B]/30 text-[#203A2B]"
                >
                  <option value="gemini-3-pro-image-preview">
                    gemini-3-pro-image-preview (Studio Quality)
                  </option>
                  <option value="gemini-nano-banana-2.1">
                    gemini-nano-banana-2.1 (Flexible Aspect Ratios)
                  </option>
                </select>
              </div>

              <div>
                <span className="block text-xs uppercase tracking-wider text-[#203A2B]/75 font-medium mb-2">
                  {lang === 'te' ? 'చిత్ర పరిమాణం (Resolution)' : 'Image Resolution Size'}
                </span>
                <div className="flex items-center gap-2">
                  {IMAGE_SIZES.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setGenSize(size)}
                      className={`flex-1 py-2 text-xs font-mono-tabular font-medium border cursor-pointer ${
                        genSize === size
                          ? 'bg-[#203A2B] text-[#FFF8E9] border-[#203A2B]'
                          : 'bg-[#FFF8E9] text-[#203A2B] border-[#203A2B]/25'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <span className="block text-xs uppercase tracking-wider text-[#203A2B]/75 font-medium mb-2">
                {lang === 'te' ? 'చిత్ర నిష్పత్తి (Aspect Ratio)' : 'Aspect Ratio Control'}
              </span>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
                {ASPECT_RATIOS.map((ratio) => (
                  <button
                    key={ratio}
                    type="button"
                    onClick={() => setGenAspect(ratio)}
                    className={`py-2 text-xs font-mono-tabular border cursor-pointer ${
                      genAspect === ratio
                        ? 'bg-[#315D38] text-[#FFF8E9] border-[#315D38]'
                        : 'bg-[#FFF8E9] text-[#203A2B] border-[#203A2B]/20 hover:border-[#203A2B]'
                    }`}
                  >
                    {ratio}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={genLoading}
              className="w-full py-3 px-5 bg-[#203A2B] text-[#FFF8E9] text-xs font-medium hover:bg-[#315D38] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {genLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>
                    {lang === 'te' ? 'చిత్రాన్ని రూపొందిస్తోంది...' : 'Generating Cultural Visual...'}
                  </span>
                </>
              ) : (
                <span>
                  {lang === 'te'
                    ? `చిత్రాన్ని రూపొందించండి (${genSize} · ${genAspect})`
                    : `Generate Cultural Image (${genSize} · ${genAspect})`}
                </span>
              )}
            </button>

            {genError && (
              <p className="text-xs text-[#B84232] bg-[#B84232]/10 p-3 border border-[#B84232]/30">
                {genError}
              </p>
            )}
          </div>

          <div className="lg:col-span-6 bg-[#FFF8E9] border border-[#203A2B]/15 p-6 flex flex-col items-center justify-center min-h-[320px]">
            {genResultUrl ? (
              <div className="w-full space-y-3">
                <img
                  src={genResultUrl}
                  alt={genPrompt}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[380px] object-contain border border-[#203A2B]/15"
                />
                <p className="text-xs text-[#203A2B]/70 font-mono-tabular">
                  {genModel} · {genSize} · {genAspect} (Artistic Cultural Interpretation)
                </p>
              </div>
            ) : (
              <div className="text-center max-w-sm space-y-2 text-[#203A2B]/65">
                <ImageIcon className="w-8 h-8 mx-auto text-[#A65E43] stroke-[1.5]" />
                <p className="font-serif-editorial text-lg text-[#203A2B]">
                  {lang === 'te'
                    ? 'బొడ్డెమ్మ & బతుకమ్మ అధ్యయన చిత్రాలను సృష్టించండి'
                    : 'Studio-Grade Cultural Illustration Preview'}
                </p>
                <p className="text-xs">
                  {lang === 'te'
                    ? '1K, 2K లేదా 4K పరిమాణం మరియు 8 నిష్పత్తులలో చిత్రాలను రూపొందించవచ్చు.'
                    : 'Select 1K, 2K, or 4K resolution and any of 8 aspect ratios (1:1 to 21:9).'}
                </p>
              </div>
            )}
          </div>
        </form>
      )}

      {/* TAB 2: Create & Edit Images with gemini-nano-banana-2.1 */}
      {activeTab === 'edit' && (
        <form onSubmit={handleEditImage} className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          <div className="lg:col-span-6 space-y-5 bg-[#FFF8E9] border border-[#203A2B]/15 p-6">
            <div>
              <span className="block text-xs uppercase tracking-wider text-[#203A2B]/75 font-medium mb-2">
                {lang === 'te'
                  ? '1. ఫోటో అప్‌లోడ్ చేయండి లేదా ఆర్కైవ్ చిత్రాన్ని ఎంచుకోండి (ఐచ్ఛికం)'
                  : '1. Upload Reference Photo or Load Archive Visual (Optional)'}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <label className="px-3.5 py-2 text-xs font-medium bg-[#F5EBD6] text-[#203A2B] border border-[#203A2B]/25 hover:border-[#203A2B] cursor-pointer flex items-center gap-1.5">
                  <Upload className="w-3.5 h-3.5" />
                  <span>{lang === 'te' ? 'ఫోటో అప్‌లోడ్' : 'Upload Photo'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'edit')}
                    className="hidden"
                  />
                </label>

                <button
                  type="button"
                  onClick={() =>
                    loadArchiveSampleAsBase64(GENERATED_ASSETS.boddemmaClay, 'edit')
                  }
                  className="px-3 py-2 text-xs bg-[#FFF8E9] border border-[#203A2B]/25 hover:border-[#203A2B] cursor-pointer"
                >
                  {lang === 'te' ? 'బొడ్డెమ్మ చిత్రం' : 'Use Boddemma Sample'}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    loadArchiveSampleAsBase64(GENERATED_ASSETS.bathukammaStack, 'edit')
                  }
                  className="px-3 py-2 text-xs bg-[#FFF8E9] border border-[#203A2B]/25 hover:border-[#203A2B] cursor-pointer"
                >
                  {lang === 'te' ? 'బతుకమ్మ చిత్రం' : 'Use Bathukamma Sample'}
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="edit-prompt-input"
                className="block text-xs uppercase tracking-wider text-[#203A2B]/75 font-medium mb-2"
              >
                {lang === 'te'
                  ? '2. సవరణ లేదా సృష్టి సూచనలు (gemini-nano-banana-2.1)'
                  : '2. Prompt to Create or Edit Image (gemini-nano-banana-2.1)'}
              </label>
              <textarea
                id="edit-prompt-input"
                rows={3}
                value={editPrompt}
                onChange={(e) => setEditPrompt(e.target.value)}
                className="w-full p-3 text-sm bg-[#F5EBD6]/40 border border-[#203A2B]/25 text-[#203A2B] focus:outline-none focus:border-[#203A2B]"
              />
            </div>

            <div>
              <span className="block text-xs uppercase tracking-wider text-[#203A2B]/75 font-medium mb-2">
                {lang === 'te' ? 'నిష్పత్తి (Aspect Ratio)' : 'Aspect Ratio'}
              </span>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
                {ASPECT_RATIOS.map((ratio) => (
                  <button
                    key={ratio}
                    type="button"
                    onClick={() => setEditAspect(ratio)}
                    className={`py-2 text-xs font-mono-tabular border cursor-pointer ${
                      editAspect === ratio
                        ? 'bg-[#315D38] text-[#FFF8E9] border-[#315D38]'
                        : 'bg-[#FFF8E9] text-[#203A2B] border-[#203A2B]/20'
                    }`}
                  >
                    {ratio}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={editLoading}
              className="w-full py-3 px-5 bg-[#203A2B] text-[#FFF8E9] text-xs font-medium hover:bg-[#315D38] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {editLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{lang === 'te' ? 'సవరిస్తోంది...' : 'Processing with gemini-nano-banana-2.1...'}</span>
                </>
              ) : (
                <span>
                  {lang === 'te'
                    ? 'gemini-nano-banana-2.1 తో చిత్రాన్ని రూపొందించండి / సవరించండి'
                    : 'Run Create / Edit with gemini-nano-banana-2.1'}
                </span>
              )}
            </button>

            {editError && (
              <p className="text-xs text-[#B84232] bg-[#B84232]/10 p-3 border border-[#B84232]/30">
                {editError}
              </p>
            )}
          </div>

          <div className="lg:col-span-6 bg-[#FFF8E9] border border-[#203A2B]/15 p-6 flex flex-col items-center justify-center min-h-[320px]">
            {editResultUrl ? (
              <img
                src={editResultUrl}
                alt="Edited cultural visual"
                referrerPolicy="no-referrer"
                className="w-full max-h-[360px] object-contain border border-[#203A2B]/15"
              />
            ) : editSourceBase64 ? (
              <div className="w-full space-y-2 text-center">
                <img
                  src={editSourceBase64}
                  alt="Selected source for editing"
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[300px] object-contain mx-auto border border-[#203A2B]/15"
                />
                <p className="text-xs text-[#203A2B]/70">
                  {lang === 'te' ? 'ఎంచుకున్న మూల చిత్రం సిద్ధంగా ఉంది' : 'Source image loaded and ready for prompt editing'}
                </p>
              </div>
            ) : (
              <div className="text-center max-w-sm space-y-2 text-[#203A2B]/65">
                <Wand2 className="w-8 h-8 mx-auto text-[#A65E43] stroke-[1.5]" />
                <p className="font-serif-editorial text-lg text-[#203A2B]">
                  {lang === 'te'
                    ? 'టెక్స్ట్ ప్రాంప్ట్‌తో చిత్రాలను సృష్టించండి లేదా మార్చండి'
                    : 'Prompt-Based Image Creation & Editing'}
                </p>
                <p className="text-xs">
                  {lang === 'te'
                    ? 'gemini-nano-banana-2.1 మోడల్ ద్వారా పూల అలంకరణలు, దీపాల వెలుగులను జోడించండి.'
                    : 'Powered by gemini-nano-banana-2.1 for rapid cultural illustration refinement.'}
                </p>
              </div>
            )}
          </div>
        </form>
      )}

      {/* TAB 3: Animate Images into Video (veo-3.1-fast-generate-preview) */}
      {activeTab === 'video' && (
        <form onSubmit={handleGenerateVideo} className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          <div className="lg:col-span-6 space-y-5 bg-[#FFF8E9] border border-[#203A2B]/15 p-6">
            <div>
              <span className="block text-xs uppercase tracking-wider text-[#203A2B]/75 font-medium mb-2">
                {lang === 'te'
                  ? '1. ఫోటో అప్‌లోడ్ చేయండి లేదా ఆర్కైవ్ ఫోటో ఎంచుకోండి'
                  : '1. Upload a Photo to Animate with Veo'}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <label className="px-3.5 py-2 text-xs font-medium bg-[#F5EBD6] text-[#203A2B] border border-[#203A2B]/25 hover:border-[#203A2B] cursor-pointer flex items-center gap-1.5">
                  <Upload className="w-3.5 h-3.5" />
                  <span>{lang === 'te' ? 'ఫోటో అప్‌లోడ్ చేయండి' : 'Upload Photo'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'video')}
                    className="hidden"
                  />
                </label>

                <button
                  type="button"
                  onClick={() =>
                    loadArchiveSampleAsBase64(GENERATED_ASSETS.heroVillage, 'video')
                  }
                  className="px-3 py-2 text-xs bg-[#FFF8E9] border border-[#203A2B]/25 hover:border-[#203A2B] cursor-pointer"
                >
                  {lang === 'te' ? 'పల్లె వాకిలి చిత్రం' : 'Load Village Courtyard Photo'}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    loadArchiveSampleAsBase64(GENERATED_ASSETS.circleDance, 'video')
                  }
                  className="px-3 py-2 text-xs bg-[#FFF8E9] border border-[#203A2B]/25 hover:border-[#203A2B] cursor-pointer"
                >
                  {lang === 'te' ? 'బతుకమ్మ ఆట చిత్రం' : 'Load Circle Dance Photo'}
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="video-prompt-input"
                className="block text-xs uppercase tracking-wider text-[#203A2B]/75 font-medium mb-2"
              >
                {lang === 'te'
                  ? '2. యానిమేషన్ వివరణ (veo-3.1-fast-generate-preview)'
                  : '2. Motion Direction Prompt (veo-3.1-fast-generate-preview)'}
              </label>
              <textarea
                id="video-prompt-input"
                rows={2}
                value={videoPrompt}
                onChange={(e) => setVideoPrompt(e.target.value)}
                className="w-full p-3 text-sm bg-[#F5EBD6]/40 border border-[#203A2B]/25 text-[#203A2B] focus:outline-none focus:border-[#203A2B]"
              />
            </div>

            <div>
              <span className="block text-xs uppercase tracking-wider text-[#203A2B]/75 font-medium mb-2">
                {lang === 'te'
                  ? '3. వీడియో నిష్పత్తి (16:9 ప్రకృతి దృశ్యం / 9:16 నిలువు)'
                  : '3. Video Aspect Ratio (16:9 Landscape or 9:16 Portrait)'}
              </span>
              <div className="grid grid-cols-2 gap-3">
                {VIDEO_ASPECTS.map((aspect) => (
                  <button
                    key={aspect}
                    type="button"
                    onClick={() => setVideoAspect(aspect)}
                    className={`py-2.5 text-xs font-mono-tabular font-medium border cursor-pointer ${
                      videoAspect === aspect
                        ? 'bg-[#203A2B] text-[#FFF8E9] border-[#203A2B]'
                        : 'bg-[#FFF8E9] text-[#203A2B] border-[#203A2B]/25'
                    }`}
                  >
                    {aspect === '16:9' ? '16:9 (Landscape)' : '9:16 (Portrait)'}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={videoLoading}
              className="w-full py-3 px-5 bg-[#203A2B] text-[#FFF8E9] text-xs font-medium hover:bg-[#315D38] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {videoLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{videoStatusMessage || 'Generating Veo Video...'}</span>
                </>
              ) : (
                <span>
                  {lang === 'te'
                    ? `ఫోటోను వీడియోగా యానిమేట్ చేయండి (${videoAspect})`
                    : `Animate Photo into Video (${videoAspect})`}
                </span>
              )}
            </button>

            {videoError && (
              <p className="text-xs text-[#B84232] bg-[#B84232]/10 p-3 border border-[#B84232]/30">
                {videoError}
              </p>
            )}
          </div>

          <div className="lg:col-span-6 bg-[#FFF8E9] border border-[#203A2B]/15 p-6 flex flex-col items-center justify-center min-h-[320px]">
            {videoResultUrl ? (
              <video
                src={videoResultUrl}
                controls
                autoPlay
                loop
                className="w-full max-h-[360px] border border-[#203A2B]/15"
              />
            ) : videoSourceBase64 ? (
              <div className="w-full space-y-2 text-center">
                <img
                  src={videoSourceBase64}
                  alt="Selected frame for Veo video animation"
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[280px] object-contain mx-auto border border-[#203A2B]/15"
                />
                <p className="text-xs text-[#203A2B]/70">
                  {lang === 'te'
                    ? 'veo-3.1-fast-generate-preview యానిమేషన్ కోసం ఫోటో సిద్ధంగా ఉంది'
                    : 'Reference photo ready for veo-3.1-fast-generate-preview animation'}
                </p>
              </div>
            ) : (
              <div className="text-center max-w-sm space-y-2 text-[#203A2B]/65">
                <Film className="w-8 h-8 mx-auto text-[#A65E43] stroke-[1.5]" />
                <p className="font-serif-editorial text-lg text-[#203A2B]">
                  {lang === 'te'
                    ? 'బతుకమ్మ ఫోటోలను సజీవ వీడియోలుగా మార్చండి'
                    : 'Animate Cultural Photographs with Veo'}
                </p>
                <p className="text-xs">
                  {lang === 'te'
                    ? 'ఫోటోను అప్‌లోడ్ చేసి 16:9 లేదా 9:16 నిష్పత్తిలో వీడియోను రూపొందించండి.'
                    : 'Upload any floral or festival photograph and generate a 16:9 or 9:16 video using veo-3.1-fast-generate-preview.'}
                </p>
              </div>
            )}
          </div>
        </form>
      )}
    </section>
  );
};
