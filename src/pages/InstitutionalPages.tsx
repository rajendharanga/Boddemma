import React, { useState } from 'react';
import { Language, SOURCE_REGISTER } from '../data/culturalArchive';
import { ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';

interface PageProps {
  lang: Language;
  onNavigate: (path: string) => void;
}

/* ==========================================================================
   N. ABOUT PAGE — /about/
   ========================================================================== */
export const AboutPage: React.FC<PageProps> = ({ lang, onNavigate }) => {
  return (
    <article className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <header className="space-y-4 border-b border-[#203A2B]/15 pb-8">
        <p className="text-xs uppercase tracking-widest text-[#A65E43] font-medium">
          {lang === 'te'
            ? 'మా లక్ష్యం & వారసత్వ పరిరక్షణ విధానం'
            : 'Mission, Editorial Integrity & Source Register'}
        </p>
        <h1 className="text-4xl sm:text-5xl font-serif-editorial font-semibold text-[#203A2B]">
          {lang === 'te'
            ? 'Boddemma.com గురించి — ది పంచాయితీ నెట్‌వర్క్ సాంస్కృతిక చొరవ'
            : 'About Boddemma.com: Preserving Telangana’s Living Floral Heritage'}
        </h1>

        <div className="p-6 bg-[#203A2B] text-[#FFF8E9] space-y-3 mt-4">
          <p className="text-lg md:text-xl font-serif-editorial font-medium text-[#E8B83F]">
            “Boddemma.com is a cultural heritage initiative by The Panchayithi Network.”
          </p>
          <p className="text-xs md:text-sm text-[#FFF8E9]/85 leading-relaxed max-w-3xl">
            {lang === 'te'
              ? 'తెలంగాణ మట్టి, పూలు, బొడ్డెమ్మ మరియు బతుకమ్మ సంప్రదాయాలను, జానపద పాటలను, వృక్షశాస్త్ర విజ్ఞానాన్ని తెలుగు మరియు ఆంగ్ల భాషలలో భవిష్యత్ తరాల కోసం శాస్త్రీయంగా భద్రపరచడమే Boddemma.com యొక్క ప్రధాన ఉద్దేశం.'
              : 'Built as a living digital museum and bilingual knowledge archive, Boddemma.com documents the stories, seasonal flowers, clay rituals, songs, and regional customs of Boddemma and Bathukamma for families, students, educators, researchers, and the global Telugu diaspora.'}
          </p>
          <a
            href="https://www.panchayithi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E8B83F] hover:underline pt-1"
          >
            <span>Visit The Panchayithi Network (https://www.panchayithi.com)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Core Editorial Principles */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-[#FFF8E9] border border-[#203A2B]/15 space-y-2.5">
          <div className="text-xs font-mono-tabular text-[#A65E43]">01 · CULTURAL ACCURACY</div>
          <h2 className="text-xl font-serif-editorial font-semibold text-[#203A2B]">
            {lang === 'te' ? 'సంప్రదాయ యథార్థత' : 'Distinct Representation of Both Traditions'}
          </h2>
          <p className="text-xs md:text-sm text-[#203A2B]/85 leading-relaxed">
            {lang === 'te'
              ? 'పుట్టమట్టితో చేసే బొడ్డెమ్మ గద్దెను, తాంబాలంలో పూలతో పేర్చే బతుకమ్మను స్పష్టమైన తేడాలతో, సరైన దృశ్య రూపాలతో వివరిస్తాము.'
              : 'We never conflate Boddemma’s termite-mound clay altar with Bathukamma’s concentric floral cone, and we never present regional customs as universal mandates.'}
          </p>
        </div>

        <div className="p-6 bg-[#FFF8E9] border border-[#203A2B]/15 space-y-2.5">
          <div className="text-xs font-mono-tabular text-[#315D38]">02 · EVIDENCE LABELLING</div>
          <h2 className="text-xl font-serif-editorial font-semibold text-[#203A2B]">
            {lang === 'te' ? 'ఆధారాల వర్గీకరణ' : 'Clear Separation of Folklore & History'}
          </h2>
          <p className="text-xs md:text-sm text-[#203A2B]/85 leading-relaxed">
            {lang === 'te'
              ? 'చారిత్రక ఆధారాలు, వృక్షశాస్త్ర నామాలు, మౌఖిక సాహిత్యం మరియు పౌరాణిక కథలను విడివిడిగా గుర్తించి పాఠకులకు అందిస్తాము.'
              : 'Historical documentation, botanical taxonomy, religious beliefs, and oral histories are explicitly labelled so researchers and students can cite with confidence.'}
          </p>
        </div>

        <div className="p-6 bg-[#FFF8E9] border border-[#203A2B]/15 space-y-2.5">
          <div className="text-xs font-mono-tabular text-[#B84232]">03 · MODERATED ARCHIVE</div>
          <h2 className="text-xl font-serif-editorial font-semibold text-[#203A2B]">
            {lang === 'te' ? 'బాధ్యతాయుత భాగస్వామ్యం' : 'Reviewed Community Stewardship'}
          </h2>
          <p className="text-xs md:text-sm text-[#203A2B]/85 leading-relaxed">
            {lang === 'te'
              ? 'పాఠకులు పంపే పాటలు, ప్రాంతీయ ఆచారాలు సంపాదకీయ సమీక్ష తర్వాతే సరైన గుర్తింపుతో ప్రచురించబడతాయి.'
              : 'Every community contribution undergoes editorial verification for cultural authenticity, copyright compliance, and consent before publication.'}
          </p>
        </div>
      </section>

      {/* Source Register Table */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-serif-editorial font-semibold text-[#203A2B]">
          {lang === 'te'
            ? 'ఆధారాల రిజిస్టర్ (Source Register & Verification Log)'
            : 'Archival Source Register & Verification Log'}
        </h2>
        <div className="overflow-x-auto border border-[#203A2B]/20 bg-[#FFF8E9]">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#203A2B] text-[#FFF8E9]">
                <th className="p-3.5 border-r border-[#FFF8E9]/15">ID & Category</th>
                <th className="p-3.5 border-r border-[#FFF8E9]/15">Source Title & Publisher</th>
                <th className="p-3.5 border-r border-[#FFF8E9]/15">Claims Supported</th>
                <th className="p-3.5">Checked</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#203A2B]/15">
              {SOURCE_REGISTER.map((src) => (
                <tr key={src.id}>
                  <td className="p-3.5 font-mono-tabular text-[#A65E43] border-r border-[#203A2B]/15">
                    <div>{src.id}</div>
                    <div className="text-[11px] text-[#203A2B]/70">{src.evidenceCategory}</div>
                  </td>
                  <td className="p-3.5 border-r border-[#203A2B]/15">
                    <div className="font-semibold text-[#203A2B]">{src.title}</div>
                    <div className="text-[#203A2B]/70">{src.publisher}</div>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B84232] hover:underline inline-block mt-0.5"
                    >
                      {src.url}
                    </a>
                  </td>
                  <td className="p-3.5 text-[#203A2B]/90 border-r border-[#203A2B]/15 leading-relaxed">
                    {src.claimsSupported[lang]}
                  </td>
                  <td className="p-3.5 font-mono-tabular text-[#203A2B]/80 whitespace-nowrap">
                    {src.dateChecked}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Domain Deployment, Search Console & Human Verification Checklist */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
        <div className="p-6 md:p-8 bg-[#F5EBD6]/70 border border-[#203A2B]/15 space-y-4">
          <h3 className="text-xl font-serif-editorial font-semibold text-[#203A2B]">
            {lang === 'te'
              ? 'boddemma.com డొమైన్ & సెర్చ్ కన్సోల్ చెక్‌లిస్ట్'
              : 'Domain Deployment & Search Console Readiness Checklist'}
          </h3>
          <ul className="space-y-2.5 text-xs md:text-sm text-[#203A2B]/85">
            <li>
              <strong>1. DNS & HTTPS Configuration:</strong> Point <code>boddemma.com</code> A/AAAA and CNAME records to the production Cloud Run / hosting endpoint and enforce TLS/HTTPS redirects.
            </li>
            <li>
              <strong>2. Canonical Host Standardization:</strong> Verify 301 redirect from <code>www.boddemma.com</code> to <code>https://boddemma.com</code> matching the canonical and hreflang tags (`en`, `te`, `x-default`).
            </li>
            <li>
              <strong>3. Google Search Console Ownership:</strong> Verify domain property via DNS TXT record and submit <code>https://boddemma.com/sitemap.xml</code>.
            </li>
            <li>
              <strong>4. Rich Results & Schema Validation:</strong> Inspect <code>/en/</code>, <code>/en/boddemma/</code>, and <code>/en/bathukamma/</code> in URL Inspection and Rich Results Test to confirm Organization, WebSite, Article, BreadcrumbList, and FAQPage JSON-LD.
            </li>
            <li>
              <strong>5. Analytics Configuration:</strong> Set optional <code>VITE_GA4_MEASUREMENT_ID</code> in production environment variables when ready (no hardcoded tracking IDs are injected).
            </li>
          </ul>
        </div>

        <div className="p-6 md:p-8 bg-[#FFF8E9] border border-[#203A2B]/15 space-y-4">
          <h3 className="text-xl font-serif-editorial font-semibold text-[#203A2B]">
            {lang === 'te'
              ? 'మానవ సంపాదకీయ సమీక్ష అవసరమయ్యే అంశాలు'
              : 'Editorial & Field Verification Checklist'}
          </h3>
          <ul className="space-y-2.5 text-xs md:text-sm text-[#203A2B]/85">
            <li>
              <strong>1. District Herbarium Vouchers for "Katla Puvvu":</strong> Confirm local botanical species variations across Northern vs. Southern Telangana districts with regional botanists.
            </li>
            <li>
              <strong>2. Annual Panchangam Tithi Confirmation (2027+):</strong> Replace astronomical estimates for 2027 with the official Telangana Vidwat Sabha Panchangam once published in Ugadi 2027.
            </li>
            <li>
              <strong>3. Community Audio Field Recordings:</strong> Attach verified public-domain field recordings of village elders’ Koliro and Uyyalo songs with signed release forms.
            </li>
            <li>
              <strong>4. Database Persistence for High-Volume Submissions:</strong> Connect the moderated <code>/api/contribute</code> and <code>/api/newsletter</code> routes to persistent storage prior to public campaign launch.
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
};

/* ==========================================================================
   O. CONTACT AND CONTRIBUTIONS — /contact/ & /contribute/
   ========================================================================== */
export const ContactAndContributePage: React.FC<
  PageProps & { mode: 'contact' | 'contribute' }
> = ({ lang, mode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('');
  const [category, setCategory] = useState(
    mode === 'contact' ? 'Editorial Inquiry / Correction' : 'Village Boddemma / Bathukamma Custom'
  );
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [sourceAttribution, setSourceAttribution] = useState('');
  const [consentGranted, setConsentGranted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{
    ok: boolean;
    message: string;
    submissionId?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);
    try {
      const res = await fetch('/api/contribute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: mode,
          name,
          email,
          district,
          category,
          title,
          content,
          sourceAttribution,
          consentGranted,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setResult({ ok: false, message: data.error || 'Submission failed.' });
      } else {
        setResult({
          ok: true,
          message: data.message,
          submissionId: data.submissionId,
        });
        setName('');
        setEmail('');
        setTitle('');
        setContent('');
        setSourceAttribution('');
        setConsentGranted(false);
      }
    } catch {
      setResult({ ok: false, message: 'Network error submitting form.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <article className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <header className="space-y-3 border-b border-[#203A2B]/15 pb-8">
        <p className="text-xs uppercase tracking-widest text-[#A65E43] font-medium">
          {mode === 'contact'
            ? lang === 'te'
              ? 'సంపాదకీయ బృందాన్ని సంప్రదించండి'
              : 'Editorial & Research Desk · The Panchayithi Network'
            : lang === 'te'
            ? 'ప్రజా సాంస్కృతిక భాగస్వామ్యం (Moderated Community Archive)'
            : 'Community Heritage Contribution · Moderated Archive'}
        </p>
        <h1 className="text-4xl sm:text-5xl font-serif-editorial font-semibold text-[#203A2B]">
          {mode === 'contact'
            ? lang === 'te'
              ? 'మమ్మల్ని సంప్రదించండి (Contact Boddemma.com)'
              : 'Contact the Editorial & Cultural Documentation Desk'
            : lang === 'te'
            ? 'మీ ఊరి బొడ్డెమ్మ, బతుకమ్మ సంప్రదాయాలు & పాటలను పంచుకోండి'
            : 'Contribute Oral Histories, Songs & Regional Customs'}
        </h1>
        <p className="text-base text-[#203A2B]/85 leading-relaxed">
          {mode === 'contact'
            ? lang === 'te'
              ? 'పరిశోధనా సూచనలు, సమాచార సవరణలు లేదా విద్యాపరమైన భాగస్వామ్యం కోసం దిగువ ఫారమ్ ద్వారా మాకు తెలియజేయండి.'
              : 'Submit factual corrections, research questions, or institutional inquiries. Every message is reviewed by our editorial desk.'
            : lang === 'te'
            ? 'మీ గ్రామంలో పాటించే ప్రత్యేక బొడ్డెమ్మ, బతుకమ్మ ఆచారాలు, పెద్దలు పాడే జానపద పాటలు లేదా తరతరాల జ్ఞాపకాలను పంపండి. సంపాదకీయ పరిశీలన తర్వాతే మీ పేరుతో ప్రచురించబడతాయి.'
            : 'Help expand Telangana’s cultural archive. Share regional customs, traditional public-domain folk songs, or family oral histories. No submission is auto-published without editorial review and source verification.'}
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="bg-[#FFF8E9] border border-[#203A2B]/15 p-6 md:p-10 space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="contrib-name"
              className="block text-xs uppercase tracking-wider text-[#203A2B]/75 font-medium mb-2"
            >
              {lang === 'te' ? 'మీ పూర్తి పేరు *' : 'Your Full Name *'}
            </label>
            <input
              id="contrib-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 text-sm bg-[#F5EBD6]/40 border border-[#203A2B]/25 text-[#203A2B]"
            />
          </div>

          <div>
            <label
              htmlFor="contrib-email"
              className="block text-xs uppercase tracking-wider text-[#203A2B]/75 font-medium mb-2"
            >
              {lang === 'te' ? 'ఇమెయిల్ చిరునామా *' : 'Email Address *'}
            </label>
            <input
              id="contrib-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 text-sm bg-[#F5EBD6]/40 border border-[#203A2B]/25 text-[#203A2B]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="contrib-district"
              className="block text-xs uppercase tracking-wider text-[#203A2B]/75 font-medium mb-2"
            >
              {lang === 'te' ? 'జిల్లా / గ్రామం పేరు' : 'Telangana District / Village (or Diaspora City)'}
            </label>
            <input
              id="contrib-district"
              type="text"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              placeholder={
                lang === 'te' ? 'ఉదా: కరీంనగర్, వరంగల్, నల్లగొండ...' : 'e.g. Karimnagar, Warangal, Siddipet...'
              }
              className="w-full p-3 text-sm bg-[#F5EBD6]/40 border border-[#203A2B]/25 text-[#203A2B]"
            />
          </div>

          <div>
            <label
              htmlFor="contrib-category"
              className="block text-xs uppercase tracking-wider text-[#203A2B]/75 font-medium mb-2"
            >
              {lang === 'te' ? 'అంశం వర్గం' : 'Submission Category'}
            </label>
            <select
              id="contrib-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 text-sm bg-[#FFF8E9] border border-[#203A2B]/25 text-[#203A2B]"
            >
              <option value="Village Boddemma / Bathukamma Custom">
                Village Boddemma / Bathukamma Custom
              </option>
              <option value="Traditional Folk Song (Public Domain)">
                Traditional Folk Song (Public Domain)
              </option>
              <option value="Botanical / Flower Identification Note">
                Botanical / Flower Identification Note
              </option>
              <option value="Editorial Inquiry / Factual Correction">
                Editorial Inquiry / Factual Correction
              </option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="contrib-title"
            className="block text-xs uppercase tracking-wider text-[#203A2B]/75 font-medium mb-2"
          >
            {lang === 'te' ? 'శీర్షిక (Title / Subject)' : 'Subject or Tradition Title'}
          </label>
          <input
            id="contrib-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 text-sm bg-[#F5EBD6]/40 border border-[#203A2B]/25 text-[#203A2B]"
          />
        </div>

        <div>
          <label
            htmlFor="contrib-content"
            className="block text-xs uppercase tracking-wider text-[#203A2B]/75 font-medium mb-2"
          >
            {lang === 'te'
              ? 'వివరాలు / సాంప్రదాయ పాట / సందేశం *'
              : 'Detailed Description, Oral History, or Message *'}
          </label>
          <textarea
            id="contrib-content"
            rows={5}
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 text-sm bg-[#F5EBD6]/40 border border-[#203A2B]/25 text-[#203A2B]"
          />
        </div>

        <div>
          <label
            htmlFor="contrib-source"
            className="block text-xs uppercase tracking-wider text-[#203A2B]/75 font-medium mb-2"
          >
            {lang === 'te'
              ? 'మూలం / ఎవరి నుండి సేకరించారు (Source & Elder Attribution)'
              : 'Source Attribution (e.g. Name of Village Elder, Published Book, or Family Tradition)'}
          </label>
          <input
            id="contrib-source"
            type="text"
            value={sourceAttribution}
            onChange={(e) => setSourceAttribution(e.target.value)}
            className="w-full p-3 text-sm bg-[#F5EBD6]/40 border border-[#203A2B]/25 text-[#203A2B]"
          />
        </div>

        <label className="flex items-start gap-3 text-xs text-[#203A2B]/85 cursor-pointer bg-[#F5EBD6]/60 p-4 border border-[#203A2B]/15">
          <input
            type="checkbox"
            checked={consentGranted}
            onChange={(e) => setConsentGranted(e.target.checked)}
            className="mt-0.5 accent-[#203A2B]"
          />
          <span>
            {lang === 'te'
              ? 'నేను అందిస్తున్న సమాచారం సత్యమైనదని, కాపీరైట్ ఉల్లంఘన లేదని ధృవీకరిస్తున్నాను. సంపాదకీయ సమీక్ష అనంతరం Boddemma.com లో ప్రచురించడానికి నా సమ్మతిని తెలుపుతున్నాను.'
              : 'I confirm that this submission is authentic, respects copyright and community privacy, and may be reviewed by the Boddemma.com editorial desk (The Panchayithi Network) prior to attributed publication.'}
          </span>
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="px-6 py-3.5 bg-[#203A2B] text-[#FFF8E9] text-xs font-semibold hover:bg-[#315D38] transition-colors cursor-pointer disabled:opacity-50"
        >
          {submitting
            ? lang === 'te'
              ? 'పంపుతోంది...'
              : 'Submitting for Editorial Review...'
            : lang === 'te'
            ? 'సమీక్ష కోసం పంపండి'
            : 'Submit to Editorial Desk'}
        </button>

        {result && (
          <div
            className={`p-4 text-xs flex items-start gap-2.5 border ${
              result.ok
                ? 'bg-[#315D38]/10 border-[#315D38] text-[#203A2B]'
                : 'bg-[#B84232]/10 border-[#B84232] text-[#B84232]'
            }`}
          >
            {result.ok ? (
              <CheckCircle2 className="w-4 h-4 text-[#315D38] shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-4 h-4 text-[#B84232] shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-medium">{result.message}</p>
              {result.submissionId && (
                <p className="font-mono-tabular mt-1 text-[#203A2B]/70">
                  Reference ID: {result.submissionId} · Status: Pending Editorial Review
                </p>
              )}
            </div>
          </div>
        )}
      </form>
    </article>
  );
};

/* ==========================================================================
   EDITORIAL POLICY, PRIVACY POLICY, TERMS & 404 PAGE
   ========================================================================== */
export const PolicyPage: React.FC<{
  lang: Language;
  policyType: 'editorial' | 'privacy' | 'terms';
}> = ({ lang, policyType }) => {
  return (
    <article className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <header className="border-b border-[#203A2B]/15 pb-6 space-y-2">
        <p className="text-xs uppercase tracking-widest text-[#A65E43] font-medium">
          Boddemma.com · An initiative by The Panchayithi Network
        </p>
        <h1 className="text-3xl sm:text-5xl font-serif-editorial font-semibold text-[#203A2B]">
          {policyType === 'editorial'
            ? lang === 'te'
              ? 'సంపాదకీయ విధానం & మూలాల ధృవీకరణ ప్రమాణాలు'
              : 'Editorial Policy & Source Verification Standards'
            : policyType === 'privacy'
            ? lang === 'te'
              ? 'గోప్యతా విధానం (Privacy Policy)'
              : 'Privacy Policy & Contributor Data Protection'
            : lang === 'te'
            ? 'వినియోగ నిబంధనలు (Terms of Use)'
            : 'Terms of Use & Cultural Archive Licensing'}
        </h1>
        <p className="text-xs font-mono-tabular text-[#203A2B]/65">
          Last Updated & Reviewed: 2026-10-11
        </p>
      </header>

      {policyType === 'editorial' && (
        <div className="space-y-6 text-sm md:text-base text-[#203A2B]/90 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-2xl font-serif-editorial font-semibold text-[#203A2B]">
              1. Distinction Between Historical Evidence, Botanical Science, and Oral Tradition
            </h2>
            <p>
              Boddemma.com strictly separates verified historical records and botanical taxonomy (such as Botanical Survey of India records for <em>Senna auriculata</em> and <em>Celosia argentea</em>) from Puranic legends, folk ballads, and oral histories. Both are vital to Telangana’s cultural heritage, and neither is misrepresented as the other.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-2xl font-serif-editorial font-semibold text-[#203A2B]">
              2. Prohibition on Fabricated Rituals, Lyrics, or Citations
            </h2>
            <p>
              We never invent rituals, fabricate folk song lyrics, or assign unverified medicinal or scientific claims to seasonal flora. Where regional customs vary by district or village, we document the variation transparently.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-2xl font-serif-editorial font-semibold text-[#203A2B]">
              3. Moderation of Community Contributions
            </h2>
            <p>
              All submissions via our Contribute desk are placed in a pending review queue (`pending_editorial_review`) and verified for cultural accuracy, public-domain/licensed rights, and contributor consent prior to publication.
            </p>
          </section>
        </div>
      )}

      {policyType === 'privacy' && (
        <div className="space-y-6 text-sm md:text-base text-[#203A2B]/90 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-2xl font-serif-editorial font-semibold text-[#203A2B]">
              1. Minimal Data Collection & Explicit Consent
            </h2>
            <p>
              Boddemma.com collects personal information (such as name and email address) only when voluntarily submitted with explicit checkbox consent through our Newsletter Dispatch or Cultural Contribution forms.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-2xl font-serif-editorial font-semibold text-[#203A2B]">
              2. Attribution & Right to Removal
            </h2>
            <p>
              Community contributors may choose how their name and village/district are credited, or request anonymization or removal of their contributed stories at any time by contacting our editorial desk.
            </p>
          </section>
        </div>
      )}

      {policyType === 'terms' && (
        <div className="space-y-6 text-sm md:text-base text-[#203A2B]/90 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-2xl font-serif-editorial font-semibold text-[#203A2B]">
              1. Educational & Cultural Heritage Use
            </h2>
            <p>
              Boddemma.com is published as a cultural heritage initiative by The Panchayithi Network (<a href="https://www.panchayithi.com" target="_blank" rel="noopener noreferrer" className="text-[#B84232] underline">https://www.panchayithi.com</a>). Educators, students, and researchers are encouraged to cite our guides with proper attribution to Boddemma.com.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-2xl font-serif-editorial font-semibold text-[#203A2B]">
              2. Respectful Representation of Living Traditions
            </h2>
            <p>
              Users of our interactive tools and Visual Studio agree not to generate or distribute imagery that misrepresents or disrespects Telangana’s cultural and religious traditions.
            </p>
          </section>
        </div>
      )}
    </article>
  );
};

export const NotFoundPage: React.FC<PageProps> = ({ lang, onNavigate }) => {
  return (
    <div className="max-w-[760px] mx-auto px-4 py-24 text-center space-y-6">
      <div className="font-mono-tabular text-xs uppercase tracking-widest text-[#A65E43]">
        HTTP 404 · Page Not Found in Cultural Archive
      </div>
      <h1 className="text-4xl font-serif-editorial font-semibold text-[#203A2B]">
        {lang === 'te'
          ? 'మీరు వెతుకుతున్న పేజీ కనుగొనబడలేదు'
          : 'This Page Could Not Be Found in the Archive'}
      </h1>
      <p className="text-sm text-[#203A2B]/80 max-w-md mx-auto">
        {lang === 'te'
          ? 'బొడ్డెమ్మ, బతుకమ్మ ప్రధాన మార్గదర్శినులను లేదా పూల విజ్ఞాన సర్వస్వాన్ని దిగువ బటన్ల ద్వారా చేరుకోండి.'
          : 'Explore our primary guides to Boddemma, Bathukamma, seasonal flowers, and folk songs below.'}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="px-5 py-2.5 bg-[#203A2B] text-[#FFF8E9] text-xs font-medium cursor-pointer"
        >
          {lang === 'te' ? 'ముఖపత్రం (Home)' : 'Return to Home'}
        </button>
        <button
          type="button"
          onClick={() => onNavigate('/boddemma/')}
          className="px-5 py-2.5 bg-[#F5EBD6] text-[#203A2B] border border-[#203A2B]/25 text-xs font-medium cursor-pointer"
        >
          {lang === 'te' ? 'బొడ్డెమ్మ మార్గదర్శిని' : 'Boddemma Guide'}
        </button>
        <button
          type="button"
          onClick={() => onNavigate('/bathukamma/')}
          className="px-5 py-2.5 bg-[#F5EBD6] text-[#203A2B] border border-[#203A2B]/25 text-xs font-medium cursor-pointer"
        >
          {lang === 'te' ? 'బతుకమ్మ మార్గదర్శిని' : 'Bathukamma Guide'}
        </button>
      </div>
    </div>
  );
};
