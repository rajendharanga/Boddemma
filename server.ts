import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, GenerateVideosOperation } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '25mb' }));

function getGenAIClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not configured in the server environment.');
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// In-memory store for moderated submissions & newsletter subscriptions
const newsletterSubscriptions: Array<{
  email: string;
  language: string;
  consent: boolean;
  subscribedAt: string;
}> = [];

const communitySubmissions: Array<{
  id: string;
  type: 'contact' | 'contribution';
  name: string;
  email: string;
  district?: string;
  category?: string;
  title?: string;
  content: string;
  sourceAttribution?: string;
  consentGranted: boolean;
  moderationStatus: 'pending_editorial_review';
  submittedAt: string;
}> = [];

// SEO Sitemaps & Robots.txt
const CORE_PATHS = [
  '/',
  '/boddemma/',
  '/bathukamma/',
  '/boddemma-vs-bathukamma/',
  '/bathukamma/nine-days/',
  '/bathukamma/flowers/',
  '/traditions/',
  '/folk-songs/',
  '/stories/',
  '/articles/',
  '/festival-calendar/',
  '/regional-traditions/',
  '/learn/',
  '/about/',
  '/contact/',
  '/contribute/',
  '/editorial-policy/',
  '/privacy-policy/',
  '/terms/',
];

app.get('/robots.txt', (_req, res) => {
  res.type('text/plain').send(
    `User-agent: *
Allow: /

# Boddemma.com Cultural Heritage Archive Sitemaps
Sitemap: https://boddemma.com/sitemap.xml
Sitemap: https://boddemma.com/sitemap-pages.xml
Sitemap: https://boddemma.com/sitemap-articles.xml
Sitemap: https://boddemma.com/sitemap-images.xml
`
  );
});

app.get('/sitemap.xml', (_req, res) => {
  const lastmod = '2026-10-11';
  res.type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://boddemma.com/sitemap-pages.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://boddemma.com/sitemap-articles.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://boddemma.com/sitemap-images.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>`);
});

app.get('/sitemap-pages.xml', (_req, res) => {
  const lastmod = '2026-10-11';
  const entries = CORE_PATHS.map((routePath) => {
    const enUrl = `https://boddemma.com/en${routePath}`;
    const teUrl = `https://boddemma.com/te${routePath}`;
    const xDefault = `https://boddemma.com${routePath}`;
    return `
  <url>
    <loc>${enUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="te" href="${teUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefault}" />
  </url>
  <url>
    <loc>${teUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="te" href="${teUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefault}" />
  </url>`;
  }).join('');

  res.type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries}
</urlset>`);
});

app.get('/sitemap-articles.xml', (_req, res) => {
  const lastmod = '2026-10-11';
  const slugs = [
    'sacred-ecology-of-telangana-tanks-and-flowers',
    'puttamatti-and-girlhood-understanding-boddemma',
    'oral-poetics-of-uyyalo-and-chandamama-songs',
    'botanical-guide-to-tangedu-and-gunugu',
    'nine-days-of-naivedyam-agrarian-nutrition',
    'preserving-village-courtyard-traditions-in-diaspora',
  ];
  const entries = slugs
    .map(
      (slug) => `
  <url>
    <loc>https://boddemma.com/en/articles/${slug}/</loc>
    <lastmod>${lastmod}</lastmod>
  </url>
  <url>
    <loc>https://boddemma.com/te/articles/${slug}/</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
    )
    .join('');

  res.type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}
</urlset>`);
});

app.get('/sitemap-images.xml', (_req, res) => {
  res.type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://boddemma.com/en/</loc>
    <image:image>
      <image:loc>https://boddemma.com/src/assets/images/hero_telangana_village_golden_hour_1791745534587.jpg</image:loc>
      <image:title>Telangana village women arranging Bathukamma flowers at golden hour</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://boddemma.com/en/boddemma/</loc>
    <image:image>
      <image:loc>https://boddemma.com/src/assets/images/boddemma_clay_mound_flowers_1791745546637.jpg</image:loc>
      <image:title>Traditional five-tiered Boddemma clay structure decorated with seasonal flowers</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://boddemma.com/en/bathukamma/</loc>
    <image:image>
      <image:loc>https://boddemma.com/src/assets/images/bathukamma_floral_stack_1791745559137.jpg</image:loc>
      <image:title>Concentric layered Bathukamma floral cone with Pasupu Gouramma</image:title>
    </image:image>
  </url>
</urlset>`);
});

// Functional Newsletter & Cultural Updates API
app.post('/api/newsletter', (req, res) => {
  const { email, language = 'en', consent } = req.body || {};
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    res.status(400).json({ error: 'Please provide a valid email address.' });
    return;
  }
  if (!consent) {
    res.status(400).json({ error: 'Explicit consent is required to subscribe to cultural updates.' });
    return;
  }
  newsletterSubscriptions.push({
    email: email.trim().toLowerCase(),
    language,
    consent: Boolean(consent),
    subscribedAt: new Date().toISOString(),
  });
  res.json({
    ok: true,
    message:
      language === 'te'
        ? 'ధన్యవాదాలు! బొడ్డెమ్మ & బతుకమ్మ సాంస్కృతిక సమాచారం కోసం మీ నమోదు పూర్తయింది.'
        : 'Thank you. Your subscription to Boddemma.com seasonal cultural updates is confirmed.',
  });
});

// Functional Contact & Moderated Community Contribution API
app.post('/api/contribute', (req, res) => {
  const {
    type = 'contribution',
    name,
    email,
    district,
    category,
    title,
    content,
    sourceAttribution,
    consentGranted,
  } = req.body || {};

  if (!name || !email || !content) {
    res.status(400).json({ error: 'Name, email, and message/tradition details are required.' });
    return;
  }
  if (!consentGranted) {
    res.status(400).json({
      error: 'Please confirm editorial review, attribution, and privacy consent before submitting.',
    });
    return;
  }

  const record = {
    id: `SUB-${Date.now()}`,
    type: type === 'contact' ? ('contact' as const) : ('contribution' as const),
    name: String(name).trim(),
    email: String(email).trim(),
    district: district ? String(district).trim() : undefined,
    category: category ? String(category).trim() : undefined,
    title: title ? String(title).trim() : undefined,
    content: String(content).trim(),
    sourceAttribution: sourceAttribution ? String(sourceAttribution).trim() : undefined,
    consentGranted: true,
    moderationStatus: 'pending_editorial_review' as const,
    submittedAt: new Date().toISOString(),
  };

  communitySubmissions.push(record);

  res.json({
    ok: true,
    submissionId: record.id,
    status: record.moderationStatus,
    message:
      'Your submission has been logged for editorial verification by The Panchayithi Network research team. No community submission is published without source review.',
  });
});

// Gemini AI Feature 1 & 2: Generate High-Quality Cultural Illustrations (1K, 2K, 4K & Aspect Ratios)
app.post('/api/ai/generate-image', async (req, res) => {
  try {
    const {
      prompt,
      model = 'gemini-3-pro-image-preview',
      aspectRatio = '1:1',
      imageSize = '1K',
    } = req.body || {};

    if (!prompt || typeof prompt !== 'string') {
      res.status(400).json({ error: 'Please provide a descriptive cultural prompt.' });
      return;
    }

    const ai = getGenAIClient();
    const selectedModel =
      model === 'gemini-nano-banana-2.1' ? 'gemini-nano-banana-2.1' : 'gemini-3-pro-image-preview';

    const response = await ai.models.generateContent({
      model: selectedModel,
      contents: {
        parts: [
          {
            text: `Authentic Telangana cultural heritage documentary illustration/photograph: ${prompt}. Respectful traditional accuracy, natural earthy tones, warm daylight.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio,
          imageSize,
        },
      },
    });

    let imageUrl: string | null = null;
    let textNote = '';

    const parts = response.candidates?.[0]?.content?.parts || [];
    for (const part of parts) {
      if (part.inlineData?.data) {
        const mime = part.inlineData.mimeType || 'image/png';
        imageUrl = `data:${mime};base64,${part.inlineData.data}`;
      } else if (part.text) {
        textNote += part.text;
      }
    }

    if (!imageUrl) {
      res.status(500).json({ error: 'No image was returned by the model.' });
      return;
    }

    res.json({ imageUrl, textNote, model: selectedModel, aspectRatio, imageSize });
  } catch (err: any) {
    res.status(500).json({
      error: err?.message || 'Failed to generate image via Gemini API.',
    });
  }
});

// Gemini AI Feature 4: Create & Edit Images with gemini-nano-banana-2.1
app.post('/api/ai/edit-image', async (req, res) => {
  try {
    const { prompt, base64ImageData, mimeType = 'image/jpeg', aspectRatio = '1:1' } = req.body || {};
    if (!prompt) {
      res.status(400).json({ error: 'Please provide instructions for creating or editing the image.' });
      return;
    }

    const ai = getGenAIClient();
    const parts: any[] = [];
    if (base64ImageData) {
      const cleanedBase64 = base64ImageData.replace(/^data:[^;]+;base64,/, '');
      parts.push({
        inlineData: {
          data: cleanedBase64,
          mimeType,
        },
      });
    }
    parts.push({
      text: prompt,
    });

    const response = await ai.models.generateContent({
      model: 'gemini-nano-banana-2.1',
      contents: { parts },
      config: {
        imageConfig: {
          aspectRatio,
        },
      },
    });

    let imageUrl: string | null = null;
    let textNote = '';
    const responseParts = response.candidates?.[0]?.content?.parts || [];
    for (const part of responseParts) {
      if (part.inlineData?.data) {
        const outMime = part.inlineData.mimeType || 'image/png';
        imageUrl = `data:${outMime};base64,${part.inlineData.data}`;
      } else if (part.text) {
        textNote += part.text;
      }
    }

    if (!imageUrl) {
      res.status(500).json({ error: 'Model did not return an edited image.' });
      return;
    }

    res.json({ imageUrl, textNote, model: 'gemini-nano-banana-2.1' });
  } catch (err: any) {
    res.status(500).json({
      error: err?.message || 'Failed to process image with gemini-nano-banana-2.1.',
    });
  }
});

// Gemini AI Feature 3: Animate Images into Video using veo-3.1-fast-generate-preview
app.post('/api/ai/generate-video', async (req, res) => {
  try {
    const {
      prompt = 'Gentle breeze moving across the Telangana seasonal flowers and warm courtyard oil lamps flickering softly',
      base64ImageData,
      mimeType = 'image/jpeg',
      aspectRatio = '16:9',
    } = req.body || {};

    if (!base64ImageData) {
      res.status(400).json({ error: 'Please upload or select a reference photo to animate.' });
      return;
    }

    const validAspect = aspectRatio === '9:16' ? '9:16' : '16:9';
    const cleanedBase64 = base64ImageData.replace(/^data:[^;]+;base64,/, '');
    const ai = getGenAIClient();

    const operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt,
      image: {
        imageBytes: cleanedBase64,
        mimeType,
      },
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: validAspect,
      },
    });

    res.json({ operationName: operation.name });
  } catch (err: any) {
    res.status(500).json({
      error: err?.message || 'Failed to start Veo video generation.',
    });
  }
});

app.post('/api/ai/video-status', async (req, res) => {
  try {
    const { operationName } = req.body || {};
    if (!operationName) {
      res.status(400).json({ error: 'Missing operationName' });
      return;
    }
    const ai = getGenAIClient();
    const op = new GenerateVideosOperation();
    op.name = operationName;
    const updated = await ai.operations.getVideosOperation({ operation: op });
    res.json({ done: Boolean(updated.done) });
  } catch (err: any) {
    res.status(500).json({ error: err?.message || 'Failed to check video operation status.' });
  }
});

app.post('/api/ai/video-download', async (req, res) => {
  try {
    const { operationName } = req.body || {};
    if (!operationName) {
      res.status(400).json({ error: 'Missing operationName' });
      return;
    }
    const apiKey = process.env.GEMINI_API_KEY || '';
    const ai = getGenAIClient();
    const op = new GenerateVideosOperation();
    op.name = operationName;
    const updated = await ai.operations.getVideosOperation({ operation: op });
    const uri = updated.response?.generatedVideos?.[0]?.video?.uri;
    if (!uri) {
      res.status(404).json({ error: 'Completed video URI not found.' });
      return;
    }
    const videoRes = await fetch(uri, {
      headers: { 'x-goog-api-key': apiKey },
    });
    res.setHeader('Content-Type', 'video/mp4');
    if (videoRes.body) {
      const reader = videoRes.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(Buffer.from(value));
      }
    }
    res.end();
  } catch (err: any) {
    res.status(500).json({ error: err?.message || 'Failed to download generated video.' });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Boddemma.com server listening at http://0.0.0.0:${PORT}`);
  });
}

startServer();
