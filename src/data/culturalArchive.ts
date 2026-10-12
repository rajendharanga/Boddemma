export type Language = 'en' | 'te';

export const GENERATED_ASSETS = {
  heroVillage: '/src/assets/images/hero_telangana_village_golden_hour_1791745534587.jpg',
  boddemmaClay: '/src/assets/images/boddemma_clay_mound_flowers_1791745546637.jpg',
  bathukammaStack: '/src/assets/images/bathukamma_floral_stack_1791745559137.jpg',
  circleDance: '/src/assets/images/bathukamma_circle_dance_1791745570528.jpg',
  botanicalFlowers: '/src/assets/images/seasonal_flowers_botanical_1791745580487.jpg',
  tangeduBlossoms: '/src/assets/images/tangedu_golden_blossoms_closeup_1791747710652.jpg',
  gunuguPlumes: '/src/assets/images/gunugu_crimson_plumes_closeup_1791747721125.jpg',
  tankImmersion: '/src/assets/images/saddula_bathukamma_tank_immersion_1791747731315.jpg',
  pasupuGouramma: '/src/assets/images/pasupu_gouramma_sacred_worship_1791747742017.jpg',
  naivedyamOfferings: '/src/assets/images/naivedyam_festive_offerings_brass_1791747754663.jpg',
  courtyardMuggu: '/src/assets/images/courtyard_muggu_kolam_preparation_1791747764851.jpg',
} as const;

export interface BilingualText {
  en: string;
  te: string;
}

export interface PageSEOConfig {
  path: string;
  title: BilingualText;
  description: BilingualText;
  h1: BilingualText;
  breadcrumbLabel: BilingualText;
  lastReviewed: string;
}

export const PAGE_SEO_REGISTRY: Record<string, PageSEOConfig> = {
  '/': {
    path: '/',
    title: {
      en: 'Boddemma & Bathukamma: The Living Floral Traditions of Telangana | Boddemma.com',
      te: 'బొడ్డెమ్మ & బతుకమ్మ: తెలంగాణ సజీవ పూల సంప్రదాయాలు | Boddemma.com',
    },
    description: {
      en: 'Discover the stories, seasonal flowers, clay rituals, folk songs, and nine-day traditions that connect Telangana’s people to their land and floral heritage.',
      te: 'తెలంగాణ మట్టిని, పూలను, జానపద పాటలను, బొడ్డెమ్మ మరియు బతుకమ్మ సంప్రదాయాలను సమగ్రంగా పరిచయం చేసే డిజిటల్ వారసత్వ వేదిక.',
    },
    h1: {
      en: 'Boddemma & Bathukamma: The Living Floral Traditions of Telangana',
      te: 'బొడ్డెమ్మ & బతుకమ్మ: తెలంగాణ సజీవ పూల సంప్రదాయాలు',
    },
    breadcrumbLabel: { en: 'Home', te: 'ముఖপাতা (Home)' },
    lastReviewed: '2026-10-11',
  },
  '/boddemma/': {
    path: '/boddemma/',
    title: {
      en: 'Boddemma Festival in Telangana: Clay Structure, Rituals, History & Songs | Boddemma.com',
      te: 'బొడ్డెమ్మ పండుగ: చరిత్ర, పుట్టమట్టి గద్దె తయారీ, ఆచారాలు & పాటలు | Boddemma.com',
    },
    description: {
      en: 'Complete cultural guide to Boddemma—the nine-day prelusive Telangana festival honoring Goddess Gauri with sacred termite-mound clay (puttamatti) and seasonal flowers.',
      te: 'బతుకమ్మకు ముందు తొమ్మిది రోజుల పాటు పుట్టమట్టితో బొడ్డెమ్మను పేర్చి జరుపుకునే తెలంగాణ ఆడబిడ్డల సంప్రదాయ పండుగ సమగ్ర మార్గదర్శిని.',
    },
    h1: {
      en: 'Boddemma: Telangana’s Sacred Earthen Prelude to Bathukamma',
      te: 'బొడ్డెమ్మ: బతుకమ్మకు నాంది పలికే తెలంగాణ పుట్టమట్టి పూల పండుగ',
    },
    breadcrumbLabel: { en: 'Boddemma Guide', te: 'బొడ్డెమ్మ' },
    lastReviewed: '2026-10-11',
  },
  '/bathukamma/': {
    path: '/bathukamma/',
    title: {
      en: 'Bathukamma Festival Guide: History, Nine Days, Flowers, Songs & Rituals | Boddemma.com',
      te: 'బతుకమ్మ పండుగ సమగ్ర చరిత్ర: తొమ్మిది రోజుల నైవేద్యాలు, పూలు & పాటలు | Boddemma.com',
    },
    description: {
      en: 'Explore Bathukamma, the iconic floral festival of Telangana. Learn its origin narratives, concentric flower arrangement, nine-day offerings, circle dances, and tank ecology.',
      te: 'తెలంగాణ రాష్ట్ర పండుగ బతుకమ్మ చరిత్ర, తంగేడు-గునుగు పూల పేర్పు, తొమ్మిది రోజుల నైవేద్యాలు, ఆటపాటలు మరియు చెరువుల పర్యావరణ ప్రాముఖ్యత.',
    },
    h1: {
      en: 'Bathukamma: The Nine-Day Floral Symphony of Telangana',
      te: 'బతుకమ్మ: ప్రకృతిని, పూలను ఆరాధించే తెలంగాణ తొమ్మిది రోజుల మహా పండుగ',
    },
    breadcrumbLabel: { en: 'Bathukamma Guide', te: 'బతుకమ్మ' },
    lastReviewed: '2026-10-11',
  },
  '/boddemma-vs-bathukamma/': {
    path: '/boddemma-vs-bathukamma/',
    title: {
      en: 'Boddemma vs Bathukamma: Key Differences, Shared Roots & Cultural Comparison | Boddemma.com',
      te: 'బొడ్డెమ్మ మరియు బతుకమ్మ మధ్య తేడాలు & సంబంధం | Boddemma.com',
    },
    description: {
      en: 'Understand the exact differences and cultural relationship between Boddemma (the earthen clay prelude) and Bathukamma (the conical floral stack festival) across Telangana.',
      te: 'పుట్టమట్టితో చేసే బొడ్డెమ్మకు, తీరొక్క పూలతో పేర్చే బతుకమ్మకు ఉన్న తేడాలు, ఆచారాలు మరియు సాంస్కృతిక బంధం.',
    },
    h1: {
      en: 'Boddemma vs Bathukamma: Understanding Two Intertwined Traditions',
      te: 'బొడ్డెమ్మ మరియు బతుకమ్మ: రెండు వేడుకల తులనాత్మక విశ్లేషణ',
    },
    breadcrumbLabel: { en: 'Boddemma vs Bathukamma', te: 'బొడ్డెమ్మ vs బతుకమ్మ' },
    lastReviewed: '2026-10-11',
  },
  '/bathukamma/nine-days/': {
    path: '/bathukamma/nine-days/',
    title: {
      en: 'The Nine Days of Bathukamma: Traditional Names, Meanings & Daily Offerings | Boddemma.com',
      te: 'తొమ్మిది రోజుల బతుకమ్మ: రోజువారీ పేర్లు, నైవేద్యాలు & విశిష్టత | Boddemma.com',
    },
    description: {
      en: 'Day-by-day cultural guide from Engili Pula Bathukamma to Saddula Bathukamma, detailing Telugu names, transliterations, seasonal grain offerings (naivedyam), and customs.',
      te: 'ఎంగిలి పూల బతుకమ్మ నుండి సద్దుల బతుకమ్మ వరకు తొమ్మిది రోజుల పేర్లు, వాయనాలు, నైవేద్యాల తయారీ మరియు ఆచారాలు.',
    },
    h1: {
      en: 'The Nine Days of Bathukamma: Day-by-Day Rituals & Naivedyam Offerings',
      te: 'తొమ్మిది రోజుల బతుకమ్మ: రోజువారీ ఆచారాలు మరియు నైవేద్యాల విశిష్టత',
    },
    breadcrumbLabel: { en: 'Nine Days of Bathukamma', te: 'తొమ్మిది రోజుల బతుకమ్మ' },
    lastReviewed: '2026-10-11',
  },
  '/bathukamma/flowers/': {
    path: '/bathukamma/flowers/',
    title: {
      en: 'Flowers of Bathukamma & Boddemma: Botanical Encyclopedia & Telugu Names | Boddemma.com',
      te: 'బతుకమ్మ పూల విజ్ఞాన సర్వస్వం: తంగేడు, గునుగు, బంతి, చామంతి | Boddemma.com',
    },
    description: {
      en: 'Botanical guide to Telangana’s seasonal festival flowers—Tangedu (Senna auriculata), Gunugu (Celosia argentea), Banthi, Chamanthi, Katla, and Gummadi with verified scientific names.',
      te: 'తంగేడు, గునుగు, బంతి, చామంతి, కట్ల, గుమ్మడి, తామర తదితర బతుకమ్మ పూల వృక్షశాస్త్ర వివరాలు మరియు సాంప్రదాయ ప్రాముఖ్యత.',
    },
    h1: {
      en: 'Flowers of Bathukamma: Botanical Identification & Cultural Significance',
      te: 'బతుకమ్మ పూలు: వృక్షశాస్త్ర గుర్తింపు మరియు సాంస్కృతిక ప్రాముఖ్యత',
    },
    breadcrumbLabel: { en: 'Flowers Encyclopedia', te: 'బతుకమ్మ పూలు' },
    lastReviewed: '2026-10-11',
  },
  '/traditions/': {
    path: '/traditions/',
    title: {
      en: 'Rituals & Traditions of Boddemma and Bathukamma | Boddemma.com',
      te: 'బొడ్డెమ్మ & బతుకమ్మ ఆచారాలు, సంప్రదాయాలు | Boddemma.com',
    },
    description: {
      en: 'Step-by-step documentation of Telangana floral traditions: gathering puttamatti clay, harvesting Tangedu, arranging the brass tambalam, circle dancing, and tank immersion.',
      te: 'పుట్టమట్టి సేకరణ, పూల కోత, తాంబాలంలో బతుకమ్మ పేర్పు, కోలాటం, వాయనాలు మరియు చెరువులో నిమజ్జనం చేసే సంప్రదాయ పద్ధతులు.',
    },
    h1: {
      en: 'Rituals and Living Practices of Telangana’s Floral Festivals',
      te: 'తెలంగాణ పూల పండుగల ఆచారాలు మరియు సజీవ సంప్రదాయాలు',
    },
    breadcrumbLabel: { en: 'Rituals & Traditions', te: 'ఆచారాలు & సంప్రదాయాలు' },
    lastReviewed: '2026-10-11',
  },
  '/folk-songs/': {
    path: '/folk-songs/',
    title: {
      en: 'Boddemma & Bathukamma Folk Songs: Oral Heritage, Uyyalo Lyrics & Meanings | Boddemma.com',
      te: 'బొడ్డెమ్మ & బతుకమ్మ జానపద పాటలు: ఉయ్యాల పాటల సాహిత్యం & అర్థాలు | Boddemma.com',
    },
    description: {
      en: 'Explore Telangana’s women-led oral literature: authentic public-domain Boddemma and Bathukamma folk songs (Uyyalo, Chandamama, Gouramma) with Telugu script and English meanings.',
      te: 'తెలంగాణ మహిళల మౌఖిక సాహిత్య సంపద—బొడ్డెమ్మ కోలిరో పాటలు, బతుకమ్మ ఉయ్యాల, చందమామ పాటల సాహిత్యం మరియు వివరణలు.',
    },
    h1: {
      en: 'Folk Songs & Oral Heritage: The Women’s Singing Archive of Telangana',
      te: 'జానపద పాటలు & మౌఖిక వారసత్వం: తెలంగాణ మహిళల గీత భాండాగారం',
    },
    breadcrumbLabel: { en: 'Folk Songs', te: 'జానపద పాటలు' },
    lastReviewed: '2026-10-11',
  },
  '/stories/': {
    path: '/stories/',
    title: {
      en: 'Stories, Folklore & Oral Histories of Telangana’s Floral Heritage | Boddemma.com',
      te: 'కథలు, జానపద గాథలు & తరతరాల జ్ఞాపకాలు | Boddemma.com',
    },
    description: {
      en: 'Read documented origin legends, intergenerational courtyard memories, botanical essays, and community-attributed oral histories of Boddemma and Bathukamma.',
      te: 'బతుకమ్మ ఆవిర్భావ కథలు, పల్లె వాకిళ్ల జ్ఞాపకాలు, చెరువుల జీవావరణ వ్యాసాలు మరియు తరతరాల మౌఖిక చరిత్ర.',
    },
    h1: {
      en: 'Stories & Cultural Archive: Legends, Ecology, and Intergenerational Memory',
      te: 'కథలు & సాంస్కృతిక వ్యాసాలు: జానపద గాథలు మరియు తరతరాల జ్ఞాపకాలు',
    },
    breadcrumbLabel: { en: 'Stories & Archive', te: 'కథలు & వ్యాసాలు' },
    lastReviewed: '2026-10-11',
  },
  '/articles/': {
    path: '/articles/',
    title: {
      en: 'Cultural Research Articles & Essays on Boddemma and Bathukamma | Boddemma.com',
      te: 'పరిశోధనా వ్యాసాలు & సాంస్కృతిక విశ్లేషణలు | Boddemma.com',
    },
    description: {
      en: 'Searchable editorial archive of research articles on Telangana’s seasonal flowers, lunar calendar traditions, oral poetry, and heritage preservation.',
      te: 'తెలంగాణ పూల పండుగలపై పరిశోధనాత్మక వ్యాసాలు, వృక్షశాస్త్ర విశ్లేషణలు మరియు సాంస్కృతిక అధ్యయనాలు.',
    },
    h1: {
      en: 'Editorial Research Archive: Essays on Land, Flowers, and Tradition',
      te: 'సాంస్కృతిక పరిశోధనా వ్యాసాల భాండాగారం',
    },
    breadcrumbLabel: { en: 'Articles', te: 'వ్యాసాలు' },
    lastReviewed: '2026-10-11',
  },
  '/festival-calendar/': {
    path: '/festival-calendar/',
    title: {
      en: 'Telangana Festival Calendar: Boddemma & Bathukamma Lunar Dates (2024–2027) | Boddemma.com',
      te: 'తెలంగాణ పండుగల క్యాలెండర్: బొడ్డెమ్మ & బతుకమ్మ తేదీలు (2024–2027) | Boddemma.com',
    },
    description: {
      en: 'Understand how Boddemma and Bathukamma dates are determined by the Telugu lunar calendar (Bhadrapada Bahula to Ashwayuja Shukla Durgashtami) with annual schedules.',
      te: 'తెలుగు చాంద్రమాన పంచాంగం ప్రకారం భాద్రపద బహుళ పాడ్యమి నుండి ఆశ్వయుజ శుద్ధ దుర్గాష్టమి వరకు బొడ్డెమ్మ, బతుకమ్మ తేదీల వివరణ.',
    },
    h1: {
      en: 'Telangana Lunar Festival Calendar: Tracking Boddemma & Bathukamma',
      te: 'తెలంగాణ చాంద్రమాన పండుగల క్యాలెండర్: బొడ్డెమ్మ & బతుకమ్మ తేదీలు',
    },
    breadcrumbLabel: { en: 'Festival Calendar', te: 'పండుగల క్యాలెండర్' },
    lastReviewed: '2026-10-11',
  },
  '/regional-traditions/': {
    path: '/regional-traditions/',
    title: {
      en: 'Regional Traditions of Boddemma & Bathukamma Across Telangana Districts | Boddemma.com',
      te: 'తెలంగాణ ప్రాంతీయ సంప్రదాయాలు & జిల్లాల వారీ వైవిధ్యం | Boddemma.com',
    },
    description: {
      en: 'Explore documented regional customs across Karimnagar, Warangal, Nizamabad, Adilabad, Nalgonda, Mahabubnagar, and the global Telugu diaspora.',
      te: 'కరీంనగర్, వరంగల్, నిజామాబాద్, ఆదిలాబాద్, నల్లగొండ, మహబూబ్‌నగర్ మరియు ప్రవాస తెలంగాణ సమాజంలో బొడ్డెమ్మ, బతుకమ్మ వేడుకల వైవిధ్యం.',
    },
    h1: {
      en: 'Regional Traditions Across Telangana: Documented Local Observances',
      te: 'తెలంగాణ ప్రాంతీయ సంప్రదాయాలు: జిల్లాల వారీ ఆచారాల వైవిధ్యం',
    },
    breadcrumbLabel: { en: 'Regional Traditions', te: 'ప్రాంతీయ సంప్రదాయాలు' },
    lastReviewed: '2026-10-11',
  },
  '/learn/': {
    path: '/learn/',
    title: {
      en: 'Learn & Explore: Cultural Glossary, Quiz, Study Guides & Visual Studio | Boddemma.com',
      te: 'నేర్చుకోండి: సాంస్కృతిక పదకోశం, క్విజ్, విద్యార్థి మార్గదర్శకాలు | Boddemma.com',
    },
    description: {
      en: 'Educational resources for students, teachers, and families: Telugu cultural glossary, interactive knowledge quiz, shareable festival cards, and AI Cultural Visual Studio.',
      te: 'విద్యార్థులు, ఉపాధ్యాయులు మరియు కుటుంబాల కోసం తెలుగు సాంస్కృతిక పదకోశం, క్విజ్, షేరబుల్ కార్డులు మరియు విజువల్ స్టూడియో.',
    },
    h1: {
      en: 'Educational Resources, Interactive Quiz & Cultural Visual Studio',
      te: 'విద్యా వనరులు, సాంస్కృతిక పదకోశం, క్విజ్ & విజువల్ స్టూడియో',
    },
    breadcrumbLabel: { en: 'Learn & Studio', te: 'నేర్చుకోండి' },
    lastReviewed: '2026-10-11',
  },
  '/about/': {
    path: '/about/',
    title: {
      en: 'About Boddemma.com — A Cultural Heritage Initiative by The Panchayithi Network',
      te: 'Boddemma.com గురించి — ది పంచాయితీ నెట్‌వర్క్ సాంస్కృతిక వారసత్వ చొరవ',
    },
    description: {
      en: 'Learn about Boddemma.com, our heritage-preservation mission, source-verification methodology, and our parent initiative, The Panchayithi Network.',
      te: 'Boddemma.com లక్ష్యం, మూలాల ధృవీకరణ విధానం మరియు మా మాతృ సంస్థ ది పంచాయితీ నెట్‌వర్క్ (The Panchayithi Network) వివరాలు.',
    },
    h1: {
      en: 'About Boddemma.com: Preserving Telangana’s Living Floral Heritage',
      te: 'Boddemma.com గురించి: తెలంగాణ పూల వారసత్వ పరిరక్షణ వేదిక',
    },
    breadcrumbLabel: { en: 'About', te: 'మా గురించి' },
    lastReviewed: '2026-10-11',
  },
  '/contact/': {
    path: '/contact/',
    title: {
      en: 'Contact Boddemma.com Editorial & Research Desk | Boddemma.com',
      te: 'మమ్మల్ని సంప్రదించండి | Boddemma.com',
    },
    description: {
      en: 'Reach out to the Boddemma.com editorial desk for cultural research inquiries, academic collaborations, corrections, or media requests.',
      te: 'సాంస్కృతిక పరిశోధన, సవరణలు లేదా సూచనల కోసం Boddemma.com సంపాదకీయ బృందాన్ని సంప్రదించండి.',
    },
    h1: {
      en: 'Contact the Editorial & Cultural Documentation Desk',
      te: 'సంపాదకీయ మరియు సాంస్కృతిక పరిశోధనా బృందాన్ని సంప్రదించండి',
    },
    breadcrumbLabel: { en: 'Contact', te: 'సంప్రదించండి' },
    lastReviewed: '2026-10-11',
  },
  '/contribute/': {
    path: '/contribute/',
    title: {
      en: 'Contribute Oral Histories, Songs & Regional Customs | Boddemma.com',
      te: 'మీ ప్రాంత సంప్రదాయాలు, పాటలు & కథలను పంచుకోండి | Boddemma.com',
    },
    description: {
      en: 'Share your village’s Boddemma and Bathukamma customs, traditional folk songs, or family memories with full attribution and editorial moderation.',
      te: 'మీ ఊరి బొడ్డెమ్మ, బతుకమ్మ ఆచారాలు, పెద్దల పాటలు మరియు జ్ఞాపకాలను సరైన గుర్తింపుతో భవిష్యత్ తరాల కోసం నమోదు చేయండి.',
    },
    h1: {
      en: 'Contribute to the Living Archive: Share Songs, Customs & Corrections',
      te: 'సజీవ వారసత్వ భాండాగారానికి మీ ఊరి సంప్రదాయాలను అందించండి',
    },
    breadcrumbLabel: { en: 'Contribute', te: 'భాగస్వామ్యం' },
    lastReviewed: '2026-10-11',
  },
  '/editorial-policy/': {
    path: '/editorial-policy/',
    title: {
      en: 'Editorial Policy, Source Verification & Cultural Accuracy Standards | Boddemma.com',
      te: 'సంపాదకీయ విధానం & మూలాల ధృవీకరణ ప్రమాణాలు | Boddemma.com',
    },
    description: {
      en: 'How Boddemma.com verifies historical documentation, botanical taxonomy, oral histories, and regional variations without inventing traditions.',
      te: 'చారిత్రక ఆధారాలు, మౌఖిక సాహిత్యం, వృక్షశాస్త్ర నామాలు మరియు ప్రాంతీయ ఆచారాలను ధృవీకరించే Boddemma.com సంపాదకీయ ప్రమాణాలు.',
    },
    h1: {
      en: 'Editorial Policy & Source Verification Standards',
      te: 'సంపాదకీయ విధానం మరియు మూలాల ధృవీకరణ ప్రమాణాలు',
    },
    breadcrumbLabel: { en: 'Editorial Policy', te: 'సంపాదకీయ విధానం' },
    lastReviewed: '2026-10-11',
  },
  '/privacy-policy/': {
    path: '/privacy-policy/',
    title: {
      en: 'Privacy Policy & Contributor Data Protection | Boddemma.com',
      te: 'గోప్యతా విధానం (Privacy Policy) | Boddemma.com',
    },
    description: {
      en: 'Privacy safeguards, consent protocols, and contributor attribution policies for Boddemma.com, an initiative by The Panchayithi Network.',
      te: 'Boddemma.com వినియోగదారుల మరియు రచయితల వ్యక్తిగత సమాచార గోప్యతా నిబంధనలు.',
    },
    h1: {
      en: 'Privacy Policy & Data Stewardship',
      te: 'గోప్యతా విధానం మరియు సమాచార భద్రత',
    },
    breadcrumbLabel: { en: 'Privacy Policy', te: 'గోప్యతా విధానం' },
    lastReviewed: '2026-10-11',
  },
  '/terms/': {
    path: '/terms/',
    title: {
      en: 'Terms of Use & Cultural Archive Licensing | Boddemma.com',
      te: 'వినియోగ నిబంధనలు (Terms of Use) | Boddemma.com',
    },
    description: {
      en: 'Terms of use, educational citation guidelines, and intellectual property policies for Boddemma.com by The Panchayithi Network.',
      te: 'Boddemma.com సాంస్కృతిక సమాచార వినియోగ నిబంధనలు మరియు విద్యాపరమైన అనుమతులు.',
    },
    h1: {
      en: 'Terms of Use & Educational Citation Guidelines',
      te: 'వినియోగ నిబంధనలు మరియు విద్యాపరమైన మార్గదర్శకాలు',
    },
    breadcrumbLabel: { en: 'Terms of Use', te: 'నిబంధనలు' },
    lastReviewed: '2026-10-11',
  },
};

export interface SourceReference {
  id: string;
  title: string;
  publisher: string;
  url: string;
  claimsSupported: BilingualText;
  dateChecked: string;
  evidenceCategory: 'Government Documentation' | 'Botanical Taxonomy' | 'Academic & Folklore Study' | 'Oral Tradition Record';
}

export const SOURCE_REGISTER: SourceReference[] = [
  {
    id: 'SRC-TS-PORTAL',
    title: 'Bathukamma — State Festival of Telangana: Cultural Overview and Nine-Day Sequence',
    publisher: 'Government of Telangana Official State Portal',
    url: 'https://www.telangana.gov.in/about/festivals/',
    claimsSupported: {
      en: 'Recognition of Bathukamma as Telangana’s State Festival; timing from Mahalaya Amavasya for nine days; sequence of the nine daily names and traditional naivedyam offerings.',
      te: 'బతుకమ్మను తెలంగాణ రాష్ట్ర పండుగగా గుర్తించడం, మహాలయ అమావాస్య నుండి తొమ్మిది రోజుల క్రమం మరియు రోజువారీ నైవేద్యాల వివరాలు.',
    },
    dateChecked: '2026-10-11',
    evidenceCategory: 'Government Documentation',
  },
  {
    id: 'SRC-BSI-FLORA',
    title: 'Flora of Telangana (3 Volumes) — Taxonomic Documentation of Senna auriculata and Celosia argentea',
    publisher: 'Botanical Survey of India (BSI), Ministry of Environment, Forest and Climate Change',
    url: 'https://bsi.gov.in/',
    claimsSupported: {
      en: 'Botanical nomenclature, seasonal post-monsoon flowering period (September–November), and ecological distribution of Tangedu (Senna auriculata), Gunugu (Celosia argentea), and associated Deccan flora.',
      te: 'తంగేడు (Senna auriculata), గునుగు (Celosia argentea) మరియు ఇతర దక్కన్ పూల వృక్షశాస్త్ర నామాలు, వర్షాకాలం తర్వాత పూసే కాలం.',
    },
    dateChecked: '2026-10-11',
    evidenceCategory: 'Botanical Taxonomy',
  },
  {
    id: 'SRC-DEPT-CULTURE',
    title: 'Telangana Jaanapada Sahityam: Boddemma and Bathukamma Paatalu (Oral Song Traditions)',
    publisher: 'Department of Language and Culture, Government of Telangana',
    url: 'https://culture.telangana.gov.in/',
    claimsSupported: {
      en: 'Documentation of Boddemma as the nine-day prelude celebrated with puttamatti (termite-mound clay) by young girls and women; structure of Uyyalo, Chandamama, and Koliro refrains.',
      te: 'పుట్టమట్టితో బొడ్డెమ్మ గద్దె తయారీ, కన్నెపిల్లల కోలిరో పాటలు, బతుకమ్మ ఉయ్యాల మరియు చందమామ పాటల మౌఖిక సాహిత్య నిర్మాణం.',
    },
    dateChecked: '2026-10-11',
    evidenceCategory: 'Academic & Folklore Study',
  },
  {
    id: 'SRC-TANK-ECOLOGY',
    title: 'Kakatiya Tank Systems (Cheruvulu) and Seasonal Agrarian Rituals of the Deccan Plateau',
    publisher: 'Regional Historical & Environmental Studies Archive',
    url: 'https://tourism.telangana.gov.in/',
    claimsSupported: {
      en: 'Historical context of interconnected village tanks (cheruvulu) in Telangana and the concluding immersion ritual (nimajjanam) returning organic floral matter to water bodies at the end of the southwest monsoon.',
      te: 'కాకతీయుల కాలం నాటి గొలుసుకట్టు చెరువుల వ్యవస్థ మరియు వర్షాకాలం చివరలో చెరువుల్లో పూల నిమజ్జనం చేసే సంప్రదాయం.',
    },
    dateChecked: '2026-10-11',
    evidenceCategory: 'Academic & Folklore Study',
  },
];

export interface NineDayEntry {
  dayNumber: number;
  slug: string;
  teluguName: string;
  transliteration: string;
  englishRendering: BilingualText;
  tithiTiming: BilingualText;
  naivedyamTitle: BilingualText;
  naivedyamIngredients: BilingualText;
  culturalSignificance: BilingualText;
  customaryPractice: BilingualText;
  regionalVariationNote: BilingualText;
  accentColor: string;
}

export const NINE_DAYS_DATA: NineDayEntry[] = [
  {
    dayNumber: 1,
    slug: 'engili-pula-bathukamma',
    teluguName: 'ఎంగిలి పూల బతుకమ్మ',
    transliteration: 'Engili Pula Bathukamma',
    englishRendering: {
      en: 'First Day — Festival of Freshly Gathered Flowers (Mahalaya Amavasya)',
      te: 'మొదటి రోజు — ఎంగిలి పూల బతుకమ్మ (మహాలయ అమావాస్య / పెత్రామాస)',
    },
    tithiTiming: {
      en: 'Bhadrapada Bahula Amavasya (Mahalaya Amavasya / Pethramasa)',
      te: 'భాద్రపద బహుళ అమావాస్య (మహాలయ అమావాస్య / పెత్రామాస)',
    },
    naivedyamTitle: {
      en: 'Nuvvulu (Sesame seeds) with Biyyampindi (Rice flour) or Nookalu (Coarse broken rice)',
      te: 'నువ్వులు, బియ్యంపిండి లేదా నూకలు',
    },
    naivedyamIngredients: {
      en: 'Roasted white/black sesame seeds pounded with jaggery, coarse rice grits, or soaked rice.',
      te: 'వేయించిన నువ్వులు, బెల్లం, బియ్యంపిండి లేదా బియ్యం నూకలు కలిపి తయారుచేసే ప్రసాదం.',
    },
    culturalSignificance: {
      en: 'Marks the formal transition from the concluding day of Boddemma into the first day of Bathukamma. Because flowers are plucked the previous evening or morning after ancestral Pethramasa rituals and sprinkled with water to keep them fresh—or because stems are trimmed while arranging—tradition calls it Engili Pula.',
      te: 'బొడ్డెమ్మ పండుగ ముగింపుతో పాటు బతుకమ్మ పండుగకు ఇది తొలి రోజు. పెత్రామాస (మహాలయ అమావాస్య) రోజున పెద్దలకు బియ్యం సమర్పించిన తర్వాత, ముందు రోజు సేకరించి నీళ్లు చల్లిన పూలతో బతుకమ్మను పేరుస్తారు కాబట్టి దీనిని ఎంగిలి పూల బతుకమ్మ అంటారు.',
    },
    customaryPractice: {
      en: 'Women clean brass tambalam plates, lay pumpkin (gummadi) leaves at the base, arrange concentric rings of Tangedu and Gunugu, place Pasupu Gouramma on top, and gather in the evening courtyard before immersing the first day’s small stack in a nearby stream or well.',
      te: 'ఇంటి ఆవరణను శుభ్రం చేసి, తాంబాలంలో గుమ్మడి ఆకులు పరిచి తంగేడు, గునుగు పూలతో బతుకమ్మను పేర్చి సాయంత్రం ఆటపాటల అనంతరం దగ్గరలోని నీటి ప్రవాహంలో నిమజ్జనం చేస్తారు.',
    },
    regionalVariationNote: {
      en: 'In parts of Karimnagar and Warangal, Pethramasa ancestral offerings take place at midday before women begin trimming flower stems in the afternoon.',
      te: 'కరీంనగర్, వరంగల్ ప్రాంతాల్లో మధ్యాహ్నం పెద్దలకు పితృ తర్పణాలు సమర్పించిన తర్వాతే సాయంత్రం బతుకమ్మ పూలను పేరుస్తారు.',
    },
    accentColor: '#E8B83F',
  },
  {
    dayNumber: 2,
    slug: 'atukula-bathukamma',
    teluguName: 'అటుకుల బతుకమ్మ',
    transliteration: 'Atukula Bathukamma',
    englishRendering: {
      en: 'Second Day — Festival of Flattened Rice Offerings',
      te: 'రెండవ రోజు — అటుకుల బతుకమ్మ',
    },
    tithiTiming: {
      en: 'Ashwayuja Shukla Padyami (First day of the bright lunar fortnight)',
      te: 'ఆశ్వయుజ శుద్ధ పాడ్యమి',
    },
    naivedyamTitle: {
      en: 'Atukulu (Flattened rice / Poha) sweetened with Bella (Jaggery) and Sappidi Pappu (Bland boiled lentils)',
      te: 'సప్పిడి పప్పు, బెల్లం మరియు అటుకులు',
    },
    naivedyamIngredients: {
      en: 'Freshly pounded flattened paddy rice mixed with grated cane jaggery and lightly boiled split green or pigeon peas.',
      te: 'ఉడకబెట్టిన సప్పిడి పప్పు, బెల్లం తురుము మరియు అటుకులతో చేసిన వాయనం.',
    },
    culturalSignificance: {
      en: 'Coincides with the first day of Sharad Navaratri in the lunar calendar. Flattened rice represents the earliest post-monsoon paddy grain available in rural households.',
      te: 'ఆశ్వయుజ శుద్ధ పాడ్యమి నాడు ప్రారంభమయ్యే ఈ రెండవ రోజు కొత్తగా వచ్చే వరి ధాన్యం నుండి తయారుచేసిన అటుకులను గౌరమ్మకు నైవేద్యంగా సమర్పిస్తారు.',
    },
    customaryPractice: {
      en: 'Young girls and women arrange a slightly wider floral base than the first day and distribute handfuls of sweetened atukulu among neighbors after evening circle songs.',
      te: 'సాయంత్రం వాకిట్లో బతుకమ్మ ఆడిన తర్వాత అటుకులు, బెల్లం ప్రసాదాన్ని ఇరుగుపొరుగు ఆడబిడ్డలకు వాయనంగా పంచుతారు.',
    },
    regionalVariationNote: {
      en: 'Some households in Nizamabad add roasted sesame or dry coconut shavings to the flattened rice mixture.',
      te: 'నిజామాబాద్ తదితర ప్రాంతాల్లో అటుకులతో పాటు ఎండు కొబ్బరి తురుము, నువ్వులు కూడా కలుపుతారు.',
    },
    accentColor: '#A65E43',
  },
  {
    dayNumber: 3,
    slug: 'muddapappu-bathukamma',
    teluguName: 'ముద్దపప్పు బతుకమ్మ',
    transliteration: 'Muddapappu Bathukamma',
    englishRendering: {
      en: 'Third Day — Festival of Soft Cooked Lentils',
      te: 'మూడవ రోజు — ముద్దపప్పు బతుకమ్మ',
    },
    tithiTiming: {
      en: 'Ashwayuja Shukla Vidiya (Second lunar day)',
      te: 'ఆశ్వయుజ శుద్ధ విదియ',
    },
    naivedyamTitle: {
      en: 'Muddapappu (Soft-boiled red gram/moong dal), Milk, and Jaggery',
      te: 'ముద్దపప్పు, పాలు మరియు బెల్లం',
    },
    naivedyamIngredients: {
      en: 'Thick, unspiced cooked lentils (kandi pappu or pesara pappu) combined with jaggery and a few drops of cow’s milk or ghee.',
      te: 'మెత్తగా ఉడికించిన కందిపప్పు లేదా పెసరపప్పు, బెల్లం మరియు పాలు.',
    },
    culturalSignificance: {
      en: 'Honors agrarian protein harvests—pulses intercropped across Telangana’s dryland fields alongside millets and cotton.',
      te: 'తెలంగాణ మెట్ట చేలలో పండే పప్పు ధాన్యాలను కృతజ్ఞతతో అమ్మవారికి నివేదించే రోజు.',
    },
    customaryPractice: {
      en: 'Three concentric tiers of seasonal blossoms are prioritized in many villages, and the lentil offering is shared on green palash (moduga) or banana leaves.',
      te: 'మూడు వరుసల పూల దొంతరలతో బతుకమ్మను పేర్చి, ఆట ముగిశాక ముద్దపప్పు-బెల్లం ప్రసాదాన్ని మోదుగ ఆకుల్లో పంచుతారు.',
    },
    regionalVariationNote: {
      en: 'Both split pigeon pea (kandi pappu) and yellow moong dal (pesara pappu) are documented depending on district crop patterns.',
      te: 'ప్రాంతాన్ని బట్టి కందిపప్పు లేదా పెసరపప్పును ముద్దపప్పుగా వండుతారు.',
    },
    accentColor: '#D889A5',
  },
  {
    dayNumber: 4,
    slug: 'nanabiyyam-bathukamma',
    teluguName: 'నానబియ్యం బతుకమ్మ',
    transliteration: 'Nanabiyyam Bathukamma',
    englishRendering: {
      en: 'Fourth Day — Festival of Soaked Rice & Jaggery',
      te: 'నాలుగవ రోజు — నానబియ్యం బతుకమ్మ',
    },
    tithiTiming: {
      en: 'Ashwayuja Shukla Thadiya (Third lunar day)',
      te: 'ఆశ్వయుజ శుద్ధ తదియ',
    },
    naivedyamTitle: {
      en: 'Nanabettina Biyyam (Soaked raw rice), Milk, and Jaggery',
      te: 'నానబెట్టిన బియ్యం, పాలు మరియు బెల్లం',
    },
    naivedyamIngredients: {
      en: 'Raw harvest rice soaked in water until tender, mixed with milk, jaggery, and occasionally sesame seeds.',
      te: 'నీటిలో నానబెట్టిన పచ్చి బియ్యం, పాలు, బెల్లం కలిపిన చల్లని ప్రసాదం.',
    },
    culturalSignificance: {
      en: 'Soaked grain (nanabiyyam) symbolizes germination, fertility, and cooling nourishment during the warm post-monsoon afternoons known locally as kanya heat.',
      te: 'నానబెట్టిన బియ్యం జీవశక్తికి, మొలకెత్తే ప్రకృతికి మరియు శరీరానికి చలువ చేసే గుణానికి ప్రతీక.',
    },
    customaryPractice: {
      en: 'Women incorporate white Chamanthi and dyed crimson Gunugu spikes into four distinct floral rings.',
      te: 'తెల్ల చామంతి, రంగురంగుల గునుగు పూలతో నాలుగు వరుసల్లో బతుకమ్మను అందంగా అలంకరిస్తారు.',
    },
    regionalVariationNote: {
      en: 'In southern Telangana, pounded sesame paste (nuvvula mudda) is often served alongside the soaked rice.',
      te: 'దక్షిణ తెలంగాణ జిల్లాల్లో నానబియ్యంతో పాటు నువ్వుల ముద్దను కూడా కలిపి ఇస్తారు.',
    },
    accentColor: '#315D38',
  },
  {
    dayNumber: 5,
    slug: 'atla-bathukamma',
    teluguName: 'అట్ల బతుకమ్మ',
    transliteration: 'Atla Bathukamma',
    englishRendering: {
      en: 'Fifth Day — Festival of Rice Crepes (Atlu)',
      te: 'ఐదవ రోజు — అట్ల బతుకమ్మ',
    },
    tithiTiming: {
      en: 'Ashwayuja Shukla Chavithi (Fourth lunar day)',
      te: 'ఆశ్వయుజ శుద్ధ చవితి',
    },
    naivedyamTitle: {
      en: 'Uppidi Pindi Atlu or Dosa-style Rice Pancakes',
      te: 'ఉప్పిడి పిండి అట్లు లేదా బియ్యంపిండి అట్లు',
    },
    naivedyamIngredients: {
      en: 'Fermented or freshly ground wet rice batter cooked into soft griddle crepes (atlu) served with jaggery or sesame powder.',
      te: 'తడి బియ్యంపిండితో పెనంపై కాల్చిన మెత్తని అట్లు, బెల్లం లేదా నువ్వుల పొడి.',
    },
    culturalSignificance: {
      en: 'Marks the midpoint of the nine-day cycle and transitions from raw/soaked offerings to cooked festive griddle foods prepared collectively in village kitchens.',
      te: 'తొమ్మిది రోజుల పండుగలో మధ్య ఘట్టం. పచ్చి/నానబెట్టిన ధాన్యాల నుండి పెనంపై వండిన అట్లను సమర్పించే సంప్రదాయం.',
    },
    customaryPractice: {
      en: 'Five tiers of flowers are arranged, and evening song circles grow larger as married daughters begin arriving at their maternal village homes.',
      te: 'ఐదు అంతస్తులుగా పూలను పేర్చి, పుట్టింటికి చేరుకున్న ఆడబిడ్డలందరూ కలిసి సందడిగా బతుకమ్మ ఆడుతారు.',
    },
    regionalVariationNote: {
      en: 'Some communities prepare sweet jaggery-infused wheat or rice crepes (తీపి అట్లు), while others prepare savory rice atlu.',
      te: 'కొన్ని ప్రాంతాల్లో బెల్లం కలిపిన తీపి అట్లు, మరికొన్ని చోట్ల చప్పిడి అట్లు సమర్పిస్తారు.',
    },
    accentColor: '#B84232',
  },
  {
    dayNumber: 6,
    slug: 'aligina-bathukamma',
    teluguName: 'అలిగిన బతుకమ్మ',
    transliteration: 'Aligina Bathukamma',
    englishRendering: {
      en: 'Sixth Day — The Day of Rest (Arremidi / No Food Offering)',
      te: 'ఆరవ రోజు — అలిగిన బతుకమ్మ (అర్రెమిడి / నైవేద్యం లేని రోజు)',
    },
    tithiTiming: {
      en: 'Ashwayuja Shukla Panchami (Fifth lunar day)',
      te: 'ఆశ్వయుజ శుద్ధ పంచమి',
    },
    naivedyamTitle: {
      en: 'No Food Offering (Traditional Rest Day)',
      te: 'నైవేద్యం ఉండదు (విశ్రాంతి రోజు)',
    },
    naivedyamIngredients: {
      en: 'No cooked or raw grain naivedyam is prepared; flowers are left undisturbed in nature.',
      te: 'ఈ రోజు పూలు కోయడం గానీ, బతుకమ్మ పేర్చడం గానీ, నైవేద్యం వండటం గానీ చేయరు.',
    },
    culturalSignificance: {
      en: 'Folklore explains that Goddess Gauri playfully grew displeased (aligindi) when an accidental impurity touched an offering in ancient times—or culturally, it serves as a vital day of ecological pause for blooming plants and rest for women before the grand final days.',
      te: 'జానపద కథనం ప్రకారం గౌరమ్మ అలిగిన రోజుగా దీనిని చెబుతారు. సాంస్కృతిక మరియు పర్యావరణ కోణంలో, పూల మొక్కలు మళ్లీ వికసించడానికి మరియు మహిళలకు విశ్రాంతినిచ్చే రోజుగా ఇది నిలుస్తుంది.',
    },
    customaryPractice: {
      en: 'Bathukamma is not stacked and no evening immersion occurs. Women use the day to roast and pound grains (sattu pindi) and dye Gunugu flowers in preparation for the culminating days.',
      te: 'ఈ రోజు బతుకమ్మను పేర్చరు. రాబోయే సద్దుల బతుకమ్మ కోసం సత్తుపిండి దంచుకోవడం, గునుగు పూలకు రంగులు అద్దడం వంటి పనులు చేసుకుంటారు.',
    },
    regionalVariationNote: {
      en: 'Known across parts of Northern Telangana as Arremidi (అర్రెమిడి) day.',
      te: 'ఉత్తర తెలంగాణ జిల్లాల్లో ఈ రోజును "అర్రెమిడి" అని కూడా పిలుస్తారు.',
    },
    accentColor: '#203A2B',
  },
  {
    dayNumber: 7,
    slug: 'vepakayala-bathukamma',
    teluguName: 'వేపకాయల బతుకమ్మ',
    transliteration: 'Vepakayala Bathukamma',
    englishRendering: {
      en: 'Seventh Day — Festival of Neem-Fruit Shaped Rice Flour Delicacies',
      te: 'ఏడవ రోజు — వేపకాయల బతుకమ్మ',
    },
    tithiTiming: {
      en: 'Ashwayuja Shukla Shashti (Sixth lunar day)',
      te: 'ఆశ్వయుజ శుద్ధ షష్ఠి',
    },
    naivedyamTitle: {
      en: 'Sakinalu-dough / Rice flour rolled into small neem-fruit (vepakaya) shapes and deep-fried',
      te: 'వేపకాయల ఆకారంలో చేసిన బియ్యంపిండి వంటకం',
    },
    naivedyamIngredients: {
      en: 'Rice flour kneaded with sesame seeds and ajwain/cumin, rolled by hand into tiny oval pellets resembling neem fruits (vepakayalu) and fried in groundnut or sesame oil.',
      te: 'బియ్యంపిండిని చిన్నచిన్న వేపకాయల ఆకారంలో చేతితో చుట్టి నూనెలో వేయించి తయారుచేసే ప్రసాదం.',
    },
    culturalSignificance: {
      en: 'Neem is revered throughout Telangana as the sacred tree of village goddesses. Shaping festive rice flour after neem fruits blends culinary artistry with reverence for protective local flora.',
      te: 'తెలంగాణ పల్లెల్లో వేప చెట్టును అమ్మవారి ప్రతిరూపంగా భావిస్తారు. బియ్యంపిండిని వేపకాయల రూపంలో చేసి గౌరమ్మకు సమర్పించడం ఇక్కడి ప్రత్యేకత.',
    },
    customaryPractice: {
      en: 'Celebrations resume with renewed vigor after the sixth day’s pause, featuring seven floral tiers and extended evening folk singing.',
      te: 'ఆరవ రోజు విరామం తర్వాత ఏడవ రోజు ఏడు వరుసల పూలతో బతుకమ్మను పేర్చి ఉత్సాహంగా ఆడుతారు.',
    },
    regionalVariationNote: {
      en: 'In several rural pockets, sweetened rice pellets or roasted gram balls are offered if fried pellets are not prepared.',
      te: 'కొన్ని గ్రామాల్లో వేయించిన బియ్యంపిండి వేపకాయలతో పాటు బెల్లం, పుట్నాల పప్పును కూడా సమర్పిస్తారు.',
    },
    accentColor: '#315D38',
  },
  {
    dayNumber: 8,
    slug: 'vennamuddala-bathukamma',
    teluguName: 'వెన్నముద్దల బతుకమ్మ',
    transliteration: 'Vennamuddala Bathukamma',
    englishRendering: {
      en: 'Eighth Day — Festival of Fresh Butter, Sesame & Jaggery Balls',
      te: 'ఎనిమిదవ రోజు — వెన్నముద్దల బతుకమ్మ',
    },
    tithiTiming: {
      en: 'Ashwayuja Shukla Saptami (Seventh lunar day)',
      te: 'ఆశ్వయుజ శుద్ధ సప్తమి',
    },
    naivedyamTitle: {
      en: 'Venna (Freshly churned butter) or Ghee mixed with Nuvvulu (Sesame), Ghee, and Jaggery',
      te: 'నువ్వులు, వెన్న (లేదా నెయ్యి) మరియు బెల్లం ముద్దలు',
    },
    naivedyamIngredients: {
      en: 'Freshly churned white butter (venna), roasted sesame seeds, and jaggery rolled into nutrient-dense spheres.',
      te: 'తాజా వెన్న, వేయించిన నువ్వులు మరియు బెల్లం కలిపి చుట్టిన బలవర్ధకమైన ముద్దలు.',
    },
    culturalSignificance: {
      en: 'Celebrates pastoral abundance—dairy cattle, curd churning, and oilseed harvests—on the eve of the grand Saddula Bathukamma finale.',
      te: 'సద్దుల బతుకమ్మకు ముందు రోజు పాడిపంటల సమృద్ధికి చిహ్నంగా వెన్న, నువ్వులు, బెల్లం ముద్దలను గౌరమ్మకు నివేదిస్తారు.',
    },
    customaryPractice: {
      en: 'Men and youth of the household head to fields and forest edges to harvest large quantities of Tangedu, Gunugu, and lotus blossoms for the next morning’s grand arrangement.',
      te: 'ఎనిమిది వరుసల బతుకమ్మ ఆడుతూనే, మరుసటి రోజు సద్దుల బతుకమ్మ కోసం ఊరి చెరువులు, అడవుల నుండి పెద్ద ఎత్తున తంగేడు, గునుగు, తామర పూలను సేకరిస్తారు.',
    },
    regionalVariationNote: {
      en: 'Because lunar tithis occasionally overlap between Saptami and Ashtami, families consult local Panchangam elders to confirm the exact evening of Vennamuddala and Saddula.',
      te: 'సప్తమి, అష్టమి తిథుల మార్పులను బట్టి స్థానిక పంచాంగం ప్రకారం వేడుక సమయాన్ని నిర్ణయిస్తారు.',
    },
    accentColor: '#E8B83F',
  },
  {
    dayNumber: 9,
    slug: 'saddula-bathukamma',
    teluguName: 'సద్దుల బతుకమ్మ',
    transliteration: 'Saddula Bathukamma',
    englishRendering: {
      en: 'Ninth & Grand Finale Day — Festival of Five Festive Rice & Roasted Grain Offerings',
      te: 'తొమ్మిదవ రోజు — సద్దుల బతుకమ్మ (మహా బతుకమ్మ వేడుక)',
    },
    tithiTiming: {
      en: 'Ashwayuja Shukla Durgashtami (usually 2 days before Dasara / Vijayadashami)',
      te: 'ఆశ్వయుజ శుద్ధ దుర్గాష్టమి (దసరాకు రెండు రోజుల ముందు)',
    },
    naivedyamTitle: {
      en: 'Five Varieties of Saddulu (Pulihora, Perugu Saddulu, Nuvvula Saddulu, Kobbari Saddulu, Chimmili) & Maleeda / Sattu Pindi',
      te: 'ఐదు రకాల సద్దులు (పులిహోర, పెరుగు అన్నం, నువ్వుల సద్ది, కొబ్బరి సద్ది, చిమ్మిలి) & మలీద / సత్తుపిండి',
    },
    naivedyamIngredients: {
      en: 'Five distinct flavored rice preparations (tamarind/lemon, curd, sesame, coconut, peanut) alongside Sattu Pindi (roasted rice, corn, wheat, or green gram flour pounded with sugar/jaggery and ghee) or Maleeda.',
      te: 'ఐదు రకాల సద్దులతో పాటు వేయించిన బియ్యం, మొక్కజొన్న లేదా గోధుమలతో దంచిన సత్తుపిండి మరియు రొట్టె-బెల్లంతో చేసే మలీద ముద్దలు.',
    },
    culturalSignificance: {
      en: 'The magnificent climax of Telangana’s floral season. Entire villages and urban neighborhoods unite in vibrant handloom sarees (Pochampally, Gadwal, Narayanpet) around towering nine-to-eleven-tiered floral cones before a torchlit evening procession to the village tank (cheruvu).',
      te: 'బతుకమ్మ పండుగలో అత్యంత వైభవమైన చివరి రోజు. ఆడబిడ్డలందరూ పట్టుచీరలు ధరించి, పెద్ద తాంబాలాల్లో ఎత్తైన బతుకమ్మలను పేర్చి, ఊరంతా ఏకమై ఆడిపాడి చెరువులో నిమజ్జనం చేస్తారు.',
    },
    customaryPractice: {
      en: 'Before immersion at dusk, women take a pinch of turmeric from the Pasupu Gouramma atop the floral cone and apply it to their mangalsutra/forehead, singing "Bathukamma Bathukamma Uyyalo, Tirigi Raavamma Uyyalo" ("Return again next year, Mother") and exchanging Sattu Pindi vayanalu.',
      te: 'చెరువు వద్ద నిమజ్జనానికి ముందు బతుకమ్మపై ఉన్న పసుపు గౌరమ్మను తమ మాంగల్యానికి అద్దుకుని, "పోయి రా బతుకమ్మ పోయి రావమ్మ..." అంటూ గంగమ్మ ఒడికి సాగనంపి ఒకరికొకరు సత్తుపిండి వాయనాలు ఇచ్చుకుంటారు.',
    },
    regionalVariationNote: {
      en: 'In Warangal, Karimnagar, and Thousand Pillar Temple precincts, thousands of women form concentric circles around giant community Bathukammas.',
      te: 'వరంగల్ వేయి స్తంభాల గుడి, కరీంనగర్, హైదరాబాద్ ట్యాంక్‌బండ్ తదితర ప్రాంతాల్లో వేలాది మంది మహిళలు ఒకేచోట చేరి సద్దుల బతుకమ్మ ఆడుతారు.',
    },
    accentColor: '#B84232',
  },
];

export interface FlowerEntry {
  id: string;
  teluguName: string;
  transliteration: string;
  englishCommonName: string;
  scientificName: string;
  verificationStatus: 'Verified Botanical Taxonomy' | 'Regional Wildflower — Multiple Local Species';
  family: string;
  layerPosition: BilingualText;
  bloomingSeason: BilingualText;
  botanicalIdentification: BilingualText;
  culturalSignificance: BilingualText;
  cautionNote: BilingualText;
  colorHex: string;
  image: string;
}

export const FLOWERS_DATA: FlowerEntry[] = [
  {
    id: 'tangedu',
    teluguName: 'తంగేడు పువ్వు',
    transliteration: 'Tangedu Puvvu',
    englishCommonName: 'Tanner’s Cassia / Avaram Senna (State Flower of Telangana)',
    scientificName: 'Senna auriculata (syn. Cassia auriculata)',
    verificationStatus: 'Verified Botanical Taxonomy',
    family: 'Fabaceae',
    layerPosition: {
      en: 'Primary structural foundation and alternating golden rings throughout the Bathukamma cone; also used to adorn the tiers of Boddemma.',
      te: 'బతుకమ్మ తాంబాలంలో అడుగు భాగం నుండి పైవరకు ప్రతి వరుసలో ప్రధాన పునాదిగా మరియు బొడ్డెమ్మ గద్దె అలంకరణలో వాడుతారు.',
    },
    bloomingSeason: {
      en: 'Peak flowering across Deccan red-loam and rocky scrublands from September through November following the southwest monsoon.',
      te: 'నైరుతి రుతుపవనాల తర్వాత సెప్టెంబర్ నుండి నవంబర్ వరకు తెలంగాణ ఎర్ర నేలలు, గుట్టలపై విరగబూస్తుంది.',
    },
    botanicalIdentification: {
      en: 'A branched evergreen shrub growing 1.5–3m tall with bright golden-yellow five-petaled flowers in corymbose racemes and distinctive ear-shaped stipules at the leaf base.',
      te: 'సుమారు 1.5 నుండి 3 మీటర్ల ఎత్తు పెరిగే పొద. ఐదు బంగారు పసుపు రంగు రేకులతో కూడిన పూల గుత్తులు, ఆకు మొదట్లో చెవి ఆకారపు నిర్మాణాలు దీని ప్రత్యేక గుర్తింపు.',
    },
    culturalSignificance: {
      en: 'Declared the official State Flower of Telangana. proverbially celebrated in the folk saying "Tangedu puvvu laanti Bathukamma"—without Tangedu, a traditional Bathukamma is considered incomplete.',
      te: 'తెలంగాణ రాష్ట్ర పుష్పం. "తంగేడు పువ్వు లేనిదే బతుకమ్మ లేదు" అన్నంతగా ఈ పండుగతో విడదీయరాని బంధం కలిగి ఉంది.',
    },
    cautionNote: {
      en: 'Do not confuse with ornamental Golden Shower tree (Cassia fistula, రేల పువ్వు) or toxic yellow oleander (Thevetia peruviana). Authentic Tangedu grows on low hardy shrubs with compound pinnate leaflets.',
      te: 'దీనిని రేల పువ్వు (Cassia fistula) లేదా పచ్చ గన్నేరుతో పొరబడకూడదు. తంగేడు చిన్న ఆకులతో కూడిన పొద మొక్క.',
    },
    colorHex: '#E8B83F',
    image: GENERATED_ASSETS.tangeduBlossoms,
  },
  {
    id: 'gunugu',
    teluguName: 'గునుగు పువ్వు',
    transliteration: 'Gunugu Puvvu',
    englishCommonName: 'Silver Cockscomb / Plumed Celosia',
    scientificName: 'Celosia argentea',
    verificationStatus: 'Verified Botanical Taxonomy',
    family: 'Amaranthaceae',
    layerPosition: {
      en: 'Vertical feathery plumes arranged between Tangedu rings to build conical height and color contrast.',
      te: 'బతుకమ్మ గోపురానికి ఎత్తును, నిండుదనాన్ని ఇవ్వడానికి తంగేడు వరుసల మధ్య నిలువుగా పేరుస్తారు.',
    },
    bloomingSeason: {
      en: 'Abundant wild field flora across rain-fed agricultural bunds in Telangana during September and October.',
      te: 'సెప్టెంబర్–అక్టోబర్ నెలల్లో తెలంగాణ పంట చేల గట్ల వెంట సహజంగా మొలుస్తుంది.',
    },
    botanicalIdentification: {
      en: 'Herbaceous annual bearing dense, cylindrical, silky-white or silvery-pink conical flower spikes that taper to a point.',
      te: 'తెల్లని లేదా లేత గులాబీ రంగులో మెరిసే కంకి ఆకారపు పూల గుత్తులు కలిగిన మొక్క.',
    },
    culturalSignificance: {
      en: 'Because natural Gunugu spikes are silvery-white, Telangana women traditionally dip them into natural turmeric, kumkuma, or food-safe dyes to create vibrant crimson, magenta, yellow, and green vertical bands in the Bathukamma stack.',
      te: 'సహజంగా తెలుపు రంగులో ఉండే గునుగు పూలను పసుపు, కుంకుమ లేదా సహజ రంగుల్లో ముంచి ఎరుపు, పసుపు, ఆకుపచ్చ వరుసలుగా బతుకమ్మలో పేరుస్తారు.',
    },
    cautionNote: {
      en: 'Distinct from cultivated garden cockscomb (Celosia cristata, సీతమ్మ జడ పువ్వు), though both belong to the same genus and are used together.',
      te: 'ఇది పొలాల్లో సహజంగా పెరిగే మొక్క; తోటల్లో పెంచే సీతమ్మ జడ పువ్వు (Celosia cristata) కంటే దీని కంకులు సన్నగా, పొడవుగా ఉంటాయి.',
    },
    colorHex: '#D889A5',
    image: GENERATED_ASSETS.gunuguPlumes,
  },
  {
    id: 'banthi',
    teluguName: 'బంతి పువ్వు',
    transliteration: 'Banthi Puvvu',
    englishCommonName: 'Marigold (African & French Marigold)',
    scientificName: 'Tagetes erecta / Tagetes patula',
    verificationStatus: 'Verified Botanical Taxonomy',
    family: 'Asteraceae',
    layerPosition: {
      en: 'Middle and upper concentric rings providing dense saffron-orange and deep yellow structural stability.',
      te: 'బతుకమ్మ మధ్య మరియు పై వరుసలలో నారింజ, పసుపు రంగుల దృఢమైన వలయాలుగా పేరుస్తారు.',
    },
    bloomingSeason: {
      en: 'Cultivated widely across Telangana rural homesteads and market gardens for the autumn festival season.',
      te: 'శరదృతువు పండుగల కోసం తెలంగాణ పల్లెల్లో, తోటల్లో విస్తృతంగా సాగు చేస్తారు.',
    },
    botanicalIdentification: {
      en: 'Aromatic herbaceous plant with pinnately divided leaves and dense composite flower heads of golden-yellow, orange, or russet-red florets.',
      te: 'సువాసన గల ఆకులు, ముద్దగా ఉండే నారింజ లేదా పసుపు రంగు రేకుల పువ్వు.',
    },
    culturalSignificance: {
      en: 'Symbolizes auspiciousness and longevity; its sturdy calyx holds moisture and keeps the conical Bathukamma firm during hours of evening singing.',
      te: 'శుభప్రదమైన పువ్వు. దీని దృఢమైన నిర్మాణం వల్ల బతుకమ్మ గంటల తరబడి వాడిపోకుండా నిటారుగా నిలుస్తుంది.',
    },
    cautionNote: {
      en: 'Use fresh, unsprayed locally grown blossoms when immersing in village tanks to protect aquatic life.',
      te: 'చెరువుల నీటి స్వచ్ఛత కోసం రసాయనాలు చల్లని సహజమైన పూలను వాడటం శ్రేయస్కరం.',
    },
    colorHex: '#A65E43',
    image: GENERATED_ASSETS.botanicalFlowers,
  },
  {
    id: 'chamanthi',
    teluguName: 'చామంతి పువ్వు',
    transliteration: 'Chamanthi Puvvu',
    englishCommonName: 'Indian Chrysanthemum',
    scientificName: 'Chrysanthemum indicum',
    verificationStatus: 'Verified Botanical Taxonomy',
    family: 'Asteraceae',
    layerPosition: {
      en: 'Alternating white and bright yellow rings in the upper-middle tiers of Bathukamma.',
      te: 'బతుకమ్మ మధ్య మరియు పై వరుసలలో తెలుపు, పసుపు రంగుల అందమైన వలయాలుగా అలంకరిస్తారు.',
    },
    bloomingSeason: {
      en: 'Late monsoon through winter (September to January).',
      te: 'సెప్టెంబర్ నుండి జనవరి వరకు చల్లని వాతావరణంలో వికసిస్తుంది.',
    },
    botanicalIdentification: {
      en: 'Perennial flowering plant with lobed aromatic leaves and radially symmetrical composite flower heads in white, sulfur-yellow, and lavender.',
      te: 'సౌష్టవమైన రేకులతో తెలుపు, పసుపు, ఊదా రంగుల్లో పూసే సున్నితమైన పువ్వు.',
    },
    culturalSignificance: {
      en: 'Prized for its delicate radial symmetry, which mirrors the circular geometry of the tambalam and the women’s dance circle.',
      te: 'దీని గుండ్రని రేకుల అమరిక బతుకమ్మ వలయాకార నిర్మాణానికి మరింత శోభను చేకూరుస్తుంది.',
    },
    cautionNote: {
      en: 'Do not confuse white Chamanthi with invasive Parthenium (వయ్యారి భామ) weeds, which cause skin allergies and are never used in worship.',
      te: 'తెల్ల చామంతిని కలుపు మొక్క అయిన వయ్యారి భామ (Parthenium) తో పొరబడకూడదు.',
    },
    colorHex: '#FFF8E9',
    image: GENERATED_ASSETS.gunuguPlumes,
  },
  {
    id: 'gummadi',
    teluguName: 'గుమ్మడి పువ్వు & ఆకు',
    transliteration: 'Gummadi Puvvu',
    englishCommonName: 'Pumpkin Blossom & Broad Leaf',
    scientificName: 'Cucurbita maxima / Cucurbita moschata',
    verificationStatus: 'Verified Botanical Taxonomy',
    family: 'Cucurbitaceae',
    layerPosition: {
      en: 'Broad green Gummadi leaves line the brass tambalam base; large golden trumpet blossoms are placed near the base or crown.',
      te: 'తాంబాలం అడుగున గుమ్మడి ఆకులను పరిచి, పైన పెద్ద బంగారు రంగు గుమ్మడి పూలను అలంకరిస్తారు.',
    },
    bloomingSeason: {
      en: 'Creeps across thatched roofs, courtyard fences, and field borders during late monsoon.',
      te: 'వర్షాకాలంలో పల్లె ఇళ్ల పైకప్పులు, పెరటి కంచెలపై తీగలుగా పాకి పూస్తుంది.',
    },
    botanicalIdentification: {
      en: 'Trailing vine with broad, softly bristled palmate leaves and large five-lobed bell-shaped yellow-orange blossoms.',
      te: 'వెడల్పాటి ఆకులు, గంట ఆకారంలో ఉండే పెద్ద పసుపు-నారింజ రంగు పువ్వులు.',
    },
    culturalSignificance: {
      en: 'Broad Gummadi leaves serve as the biodegradable base inside the brass plate, while the golden stamens (boddulu) are placed beside Pasupu Gouramma.',
      te: 'తాంబాలంలో అడుగున గుమ్మడి ఆకులు పరిచి, గుమ్మడి పూల బొడ్డులను పసుపు గౌరమ్మ వద్ద ఉంచుతారు.',
    },
    cautionNote: {
      en: 'Pumpkin blossoms open early in the morning and close by midday; villagers harvest them at dawn.',
      te: 'గుమ్మడి పూలు తెల్లవారుజామున విచ్చుకుని మధ్యాహ్నానికి ముడుచుకుంటాయి కాబట్టి ఉదయాన్నే కోస్తారు.',
    },
    colorHex: '#E8B83F',
    image: GENERATED_ASSETS.botanicalFlowers,
  },
  {
    id: 'katla',
    teluguName: 'కట్ల పువ్వు',
    transliteration: 'Katla Puvvu',
    englishCommonName: 'Seasonal Wild Morning Glory / Hedge Bindweed & Purple Field Blossoms',
    scientificName: 'Ipomoea species / Blepharis & seasonal Deccan wild herbs (Regional verification note)',
    verificationStatus: 'Regional Wildflower — Multiple Local Species',
    family: 'Convolvulaceae / Acanthaceae (varies by district)',
    layerPosition: {
      en: 'Delicate purple, violet, and white accents tucked into upper rings and around Boddemma clay steps.',
      te: 'బతుకమ్మ పై వరుసలలో మరియు బొడ్డెమ్మ గద్దె చుట్టూ ఊదా, తెలుపు రంగుల అలంకరణగా ఉంచుతారు.',
    },
    bloomingSeason: {
      en: 'Post-monsoon scrublands and hedge rows across rural Telangana.',
      te: 'వర్షాకాలం తర్వాత పల్లె కంచెలు, పొలాల గట్లపై సహజంగా పూస్తాయి.',
    },
    botanicalIdentification: {
      en: 'Note on regional naming: Across Telangana districts, the vernacular name "Katla Puvvu" refers to wild purple/violet seasonal blossoms gathered from field hedges. Because local ethnobotanical usage spans more than one wild species, exact specimen taxonomy requires district-level confirmation.',
      te: 'గమనిక: తెలంగాణలోని వివిధ జిల్లాల్లో కంచెలపై పూసే ఊదా/నీలం రంగు అడవి పూలను "కట్ల పూలు" అని పిలుస్తారు. ప్రాంతాన్ని బట్టి వేర్వేరు వృక్షజాతులకు ఈ పేరు వాడుకలో ఉంది.',
    },
    culturalSignificance: {
      en: 'Represents the uncultivated wild bounty of Telangana’s commons—flowers that require no garden fence and belong equally to every village daughter.',
      te: 'ఎలాంటి సాగు లేకుండా ప్రకృతి ఒడిలో అందరికీ సమానంగా లభించే పల్లె పూల సంపదకు ప్రతీక.',
    },
    cautionNote: {
      en: 'Editorial verification note: Avoid assigning a single rigid scientific binomial without district specimen voucher.',
      te: 'సంపాదకీయ గమనిక: జిల్లాల వారీగా ఈ పేరుతో పిలిచే స్థానిక పూల జాతులను వృక్షశాస్త్రజ్ఞుల సహకారంతో నమోదు చేస్తున్నాము.',
    },
    colorHex: '#D889A5',
    image: GENERATED_ASSETS.bathukammaStack,
  },
  {
    id: 'tamara',
    teluguName: 'తామర పువ్వు',
    transliteration: 'Tamara Puvvu',
    englishCommonName: 'Sacred Lotus',
    scientificName: 'Nelumbo nucifera',
    verificationStatus: 'Verified Botanical Taxonomy',
    family: 'Nelumbonaceae',
    layerPosition: {
      en: 'Crowning ring near the apex of Saddula Bathukamma or broad petals framing the Pasupu Gouramma.',
      te: 'సద్దుల బతుకమ్మ శిఖర భాగంలో పసుపు గౌరమ్మ చుట్టూ తామర పూలను అలంకరిస్తారు.',
    },
    bloomingSeason: {
      en: 'Blooms across Telangana’s full village tanks (cheruvulu) and ponds in September and October.',
      te: 'సెప్టెంబర్–అక్టోబర్ నెలల్లో నిండుగా ఉన్న తెలంగాణ చెరువుల్లో వికసిస్తుంది.',
    },
    botanicalIdentification: {
      en: 'Aquatic perennial with peltate water-repellent leaves and large, fragrant rose-pink or white multi-petaled blossoms held above the water surface.',
      te: 'నీటిపై తేలే గుండ్రని ఆకులు, గులాబీ లేదా తెలుపు రంగులో ఉండే పెద్ద సువాసన గల పువ్వులు.',
    },
    culturalSignificance: {
      en: 'Connects the village tank (cheruvu) directly to the household courtyard—gathered from the water at dawn and returned to the water at dusk.',
      te: 'చెరువు నుండి సేకరించి తిరిగి చెరువులోనే నిమజ్జనం చేసే ప్రకృతి చక్రానికి తామర పువ్వు నిలువెత్తు సాక్ష్యం.',
    },
    cautionNote: {
      en: 'Often paired with water lilies (Kaluva puvvu, Nymphaea nouchali); true lotus holds its leaves and flowers high above the water surface.',
      te: 'కలువ పూల (Nymphaea) కంటే భిన్నంగా తామర ఆకులు, పూలు నీటి ఉపరితలం నుండి పైకి నిలబడి ఉంటాయి.',
    },
    colorHex: '#D889A5',
    image: GENERATED_ASSETS.pasupuGouramma,
  },
  {
    id: 'beerapuvvu',
    teluguName: 'బీర పువ్వు',
    transliteration: 'Beera Puvvu',
    englishCommonName: 'Ridge Gourd Blossom',
    scientificName: 'Luffa acutangula',
    verificationStatus: 'Verified Botanical Taxonomy',
    family: 'Cucurbitaceae',
    layerPosition: {
      en: 'Used to adorn both Boddemma clay steps and the outer rim of early-day Bathukamma arrangements.',
      te: 'బొడ్డెమ్మ గద్దె అలంకరణలో మరియు మొదటి రోజుల బతుకమ్మ అంచులలో ఉంచుతారు.',
    },
    bloomingSeason: {
      en: 'Late monsoon kitchen gardens and field trellises.',
      te: 'వర్షాకాలం చివరలో ఇంటి పెరళ్లు, చేల కంచెలపై పూస్తుంది.',
    },
    botanicalIdentification: {
      en: 'Climbing vine bearing bright lemon-yellow five-petaled flowers that open in the late afternoon.',
      te: 'సాయంత్రం వేళల్లో విచ్చుకునే ప్రకాశవంతమైన పసుపు రంగు ఐదు రేకుల పువ్వు.',
    },
    culturalSignificance: {
      en: 'Because ridge gourd flowers bloom specifically in the late afternoon (around 4–5 PM), their opening signals the exact hour for village girls to gather around Boddemma.',
      te: 'సాయంత్రం నాలుగు గంటల సమయంలో విచ్చుకునే బీర పువ్వులు, ఆడపిల్లలు బొడ్డెమ్మ వేడుకకు సిద్ధమయ్యే సమయాన్ని సూచిస్తాయి.',
    },
    cautionNote: {
      en: 'Harvest only non-fruiting male blossoms so household vegetable yields remain unaffected.',
      te: 'కాయలు కాసే ఆడ పూలను కాకుండా మగ పూలను మాత్రమే అలంకరణకు కోయడం పల్లె సంప్రదాయం.',
    },
    colorHex: '#E8B83F',
    image: GENERATED_ASSETS.boddemmaClay,
  },
];

export interface BathukammaLayer {
  id: string;
  orderFromTop: number;
  name: BilingualText;
  teluguScript: string;
  flowersUsed: BilingualText;
  description: BilingualText;
  structuralRole: BilingualText;
  colorHex: string;
  widthPercent: number;
}

export const BATHUKAMMA_LAYERS: BathukammaLayer[] = [
  {
    id: 'layer-gouramma',
    orderFromTop: 1,
    name: {
      en: 'Apex Crown: Pasupu Gouramma (Sacred Turmeric Cone)',
      te: 'శిఖర భాగం: పసుపు గౌరమ్మ',
    },
    teluguScript: 'పసుపు గౌరమ్మ',
    flowersUsed: {
      en: 'Freshly ground turmeric paste (Pasupu), vermilion (Kumkuma), and pumpkin flower stamens',
      te: 'పసుపు ముద్ద, కుంకుమ బొట్టు, గుమ్మడి పూల బొడ్డులు',
    },
    description: {
      en: 'At the pinnacle of the floral cone rests Gouramma—the symbolic form of Goddess Gauri sculpted from pure turmeric paste and adorned with a vermilion dot. Before immersion, married women touch this turmeric to their mangalsutra as a blessing for longevity and harmony.',
      te: 'పూల గోపురం పైన తమలపాకు లేదా గుమ్మడి ఆకుపై పసుపుతో చేసిన గౌరమ్మను ఉంచి కుంకుమ బొట్టు పెడతారు. నిమజ్జనం సమయంలో ఆడబిడ్డలు ఈ పసుపును తమ తాళిబొట్టుకు, నుదుటికి అద్దుకుంటారు.',
    },
    structuralRole: {
      en: 'Spiritual focal apex crowning the central stalk.',
      te: 'బతుకమ్మకు ఆధ్యాత్మిక శిఖరం మరియు కేంద్ర బిందువు.',
    },
    colorHex: '#E8B83F',
    widthPercent: 22,
  },
  {
    id: 'layer-lotus-crown',
    orderFromTop: 2,
    name: {
      en: 'Upper Crown Ring: Tamara & Golden Tangedu',
      te: 'పై వరుస: తామర & తంగేడు పూల వలయం',
    },
    teluguScript: 'తామర & తంగేడు వరుస',
    flowersUsed: {
      en: 'Nelumbo nucifera (Tamara petals) and Senna auriculata (Tangedu)',
      te: 'తామర రేకులు, తంగేడు పూలు',
    },
    description: {
      en: 'A tight, fragrant collar of pink lotus petals and golden Tangedu blossoms that cradles the Pasupu Gouramma at the summit.',
      te: 'పసుపు గౌరమ్మ చుట్టూ తామర పూల రేకులు, బంగారు రంగు తంగేడు పూలతో అందమైన చిన్న వలయాన్ని ఏర్పాటు చేస్తారు.',
    },
    structuralRole: {
      en: 'Stabilizes the narrow top of the cone and frames the deity.',
      te: 'గౌరమ్మ పీఠానికి రక్షణగా నిలిచే పై వరుస.',
    },
    colorHex: '#D889A5',
    widthPercent: 38,
  },
  {
    id: 'layer-crimson-gunugu',
    orderFromTop: 3,
    name: {
      en: 'Fifth Tier: Crimson & Magenta Gunugu Plumes',
      te: 'ఐదవ అంతస్తు: రంగులద్దిన ఎర్ర గునుగు కంకులు',
    },
    teluguScript: 'ఎర్ర గునుగు పూల వరుస',
    flowersUsed: {
      en: 'Celosia argentea (Gunugu spikes dyed with kumkuma/natural colors)',
      te: 'కుంకుమ/సహజ రంగులద్దిన గునుగు పూల కంకులు',
    },
    description: {
      en: 'Feathery spikes of Celosia argentea dipped in rich vermilion and magenta hues, laid radially with their plumes pointing outward.',
      te: 'సహజంగా తెల్లగా ఉండే గునుగు పూల కంకులకు ఎరుపు, గులాబీ రంగులద్ది కొనలు బయటకు కనిపించేలా గుండ్రంగా పేరుస్తారు.',
    },
    structuralRole: {
      en: 'Adds vertical loft and unmistakable textural contrast against smooth petals.',
      te: 'బతుకమ్మ గోపురానికి ఎత్తును, ఆకర్షణీయమైన రంగుల సమ్మేళనాన్ని ఇస్తుంది.',
    },
    colorHex: '#B84232',
    widthPercent: 52,
  },
  {
    id: 'layer-banthi-marigold',
    orderFromTop: 4,
    name: {
      en: 'Fourth Tier: Saffron Banthi (Marigold) Ring',
      te: 'నాలుగవ అంతస్తు: నారింజ బంతి పూల వరుస',
    },
    teluguScript: 'బంతి పూల వరుస',
    flowersUsed: {
      en: 'Tagetes erecta (Saffron and golden marigolds)',
      te: 'నారింజ మరియు పసుపు బంతి పూలు',
    },
    description: {
      en: 'Dense, spherical marigold heads packed closely in a concentric circle, filling the middle waist of the floral cone.',
      te: 'ముద్దగా ఉండే బంతి పూలను ఒకదానికొకటి ఆనుకుని ఉండేలా పేర్చి మధ్య భాగానికి పటిష్టతను ఇస్తారు.',
    },
    structuralRole: {
      en: 'Provides structural compression that locks the lower stems in place.',
      te: 'కింది వరుసల పూల కాడలు కదలకుండా బరువుగా నిలిపి ఉంచుతుంది.',
    },
    colorHex: '#A65E43',
    widthPercent: 66,
  },
  {
    id: 'layer-chamanthi-white',
    orderFromTop: 5,
    name: {
      en: 'Third Tier: Ivory Chamanthi & Silver Gunugu',
      te: 'మూడవ అంతస్తు: తెల్ల చామంతి & గునుగు వరుస',
    },
    teluguScript: 'చామంతి పూల వరుస',
    flowersUsed: {
      en: 'Chrysanthemum indicum (Chamanthi) and natural white Celosia argentea',
      te: 'తెల్ల చామంతి, పసుపు చామంతి మరియు తెల్ల గునుగు పూలు',
    },
    description: {
      en: 'A luminous white and pale-yellow band that creates visual rhythm between the darker terracotta and forest-green lower layers.',
      te: 'ఎరుపు, పసుపు వరుసల మధ్య తెల్లని చామంతి పూల వలయం బతుకమ్మకు ప్రత్యేక కాంతిని ఇస్తుంది.',
    },
    structuralRole: {
      en: 'Mid-tier concentric step tapering inward at ~15 degrees.',
      te: 'గోపురం ఆకృతి క్రమంగా పైకి సన్నబడేలా చేసే మధ్య వరుస.',
    },
    colorHex: '#F5EBD6',
    widthPercent: 78,
  },
  {
    id: 'layer-katla-tangedu',
    orderFromTop: 6,
    name: {
      en: 'Second Tier: Primary Golden Tangedu & Katla Ring',
      te: 'రెండవ అంతస్తు: తంగేడు & కట్ల పూల ప్రధాన వలయం',
    },
    teluguScript: 'తంగేడు & కట్ల పూల వరుస',
    flowersUsed: {
      en: 'Senna auriculata (Tangedu) interspersed with purple Katla wildflowers',
      te: 'తంగేడు పూలు మరియు ఊదా రంగు కట్ల పూలు',
    },
    description: {
      en: 'Thick bundles of golden Tangedu petals with stems pointing toward the center of the plate, forming the broad lower shoulder of the arrangement.',
      te: 'తంగేడు పూల కాడలు లోపలికి, రేకులు బయటకు కనిపించేలా దట్టంగా పేర్చే ప్రధాన వరుస.',
    },
    structuralRole: {
      en: 'Primary load-bearing floral ring above the base leaves.',
      te: 'బతుకమ్మ ఆకృతిని నిలబెట్టే అత్యంత కీలకమైన పునాది పూల వరుస.',
    },
    colorHex: '#E8B83F',
    widthPercent: 90,
  },
  {
    id: 'layer-tambalam-base',
    orderFromTop: 7,
    name: {
      en: 'Foundation: Brass Tambalam, Gummadi Leaves & Central Stalk',
      te: 'పునాది: ఇత్తడి తాంబాలం & గుమ్మడి ఆకులు',
    },
    teluguScript: 'ఇత్తడి తాంబాలం & గుమ్మడి ఆకులు',
    flowersUsed: {
      en: 'Broad Cucurbita (Gummadi) or Palash (Moduga) leaves over a polished brass plate (Tambalam)',
      te: 'ఇత్తడి తాంబాలం, గుమ్మడి ఆకులు లేదా తామర ఆకులు',
    },
    description: {
      en: 'The entire arrangement is built on a wide brass or bamboo plate (tambalam) lined with fresh pumpkin or lotus leaves so the entire floral stack can be lifted gently onto the water during immersion while taking the brass plate back home.',
      te: 'ఇత్తడి తాంబాలం లేదా వెదురు సిబ్బిలో గుమ్మడి ఆకులను పరిచి బతుకమ్మను పేరుస్తారు. చెరువులో నిమజ్జనం చేసేటప్పుడు ఆకులతో సహా పూల గోపురాన్ని నీటిలో వదిలి, తాంబాలాన్ని ఇంటికి తిరిగి తెచ్చుకుంటారు.',
    },
    structuralRole: {
      en: 'Portable vessel and biodegradable leaf base for clean water immersion.',
      te: 'బతుకమ్మను మోసుకెళ్లడానికి మరియు నీటిలో సులభంగా నిమజ్జనం చేయడానికి ఆధారం.',
    },
    colorHex: '#315D38',
    widthPercent: 100,
  },
];

export interface BoddemmaStage {
  stageNumber: number;
  title: BilingualText;
  teluguSubtitle: string;
  materials: BilingualText;
  explanation: BilingualText;
  culturalContext: BilingualText;
}

export const BODDEMMA_STAGES: BoddemmaStage[] = [
  {
    stageNumber: 1,
    title: {
      en: 'Gathering Sacred Termite-Mound Earth (Puttamatti)',
      te: '1. పుట్టమట్టి సేకరణ',
    },
    teluguSubtitle: 'పుట్టమట్టి & ఎర్రమట్టి సేకరణ',
    materials: {
      en: 'Fine clay from natural termite mounds (puttamatti) or clean tank-bed red soil, water',
      te: 'పుట్టమట్టి లేదా చెరువు ఒండ్రుమట్టి, నీరు',
    },
    explanation: {
      en: 'Before Bhadrapada Pournami or during Mahalaya Paksha, village girls and elders collect fine,stone-free clay from a termite mound (puttamatti). The earth is moistened and kneaded until smooth and plastic.',
      te: 'భాద్రపద పౌర్ణమి లేదా మహాలయ పక్షంలో ఆడపిల్లలు ఊరి బయట ఉన్న పుట్ట నుండి మెత్తని పుట్టమట్టిని సేకరించి, రాళ్లు లేకుండా జల్లించి నీటితో కలిపి సిద్ధం చేస్తారు.',
    },
    culturalContext: {
      en: 'Termite-mound earth is traditionally regarded in Telangana agrarian culture as pure, mineral-rich, and connected to subterranean water veins.',
      te: 'తెలంగాణ గ్రామీణ సంస్కృతిలో పుట్టమట్టిని అత్యంత పవిత్రమైనదిగా, భూదేవి శక్తికి ప్రతీకగా భావిస్తారు.',
    },
  },
  {
    stageNumber: 2,
    title: {
      en: 'Preparing the Courtyard & Drawing the Rice-Flour Muggu',
      te: '2. వాకిలి అలికి బియ్యంపిండి ముగ్గు వేయడం',
    },
    teluguSubtitle: 'అష్టదళ పద్మం & గద్దె పీఠం',
    materials: {
      en: 'Cow-dung wash (kallapi), rice flour (biyyampindi), wooden plank (peeta)',
      te: 'కళ్లాపి, బియ్యంపిండి ముగ్గు, చెక్క పీట',
    },
    explanation: {
      en: 'The eastern or central courtyard (vakili) is swept clean, sprinkled with water, and adorned with an auspicious geometric muggu (often an eight-petaled lotus or stepped square). A low wooden plank can also be placed at the center.',
      te: 'ఇంటి ముంగిలిని శుభ్రంగా ఊడ్చి కళ్లాపి చల్లి, బియ్యంపిండితో అందమైన ముగ్గు వేసి దానిపై చెక్క పీటను లేదా నేరుగా మట్టి పీఠాన్ని ఏర్పాటు చేస్తారు.',
    },
    culturalContext: {
      en: 'Establishes a sacred domestic precinct where neighborhood girls gather every evening at dusk.',
      te: 'వాకిలిని పవిత్ర వేదికగా మార్చి సాయంత్రం వేళ వాడకట్టు పిల్లలందరూ చేరేలా చేస్తుంది.',
    },
  },
  {
    stageNumber: 3,
    title: {
      en: 'Sculpting the Stepped Clay Pyramid (Boddemma Gadde)',
      te: '3. ఐదు అంతస్తుల మట్టి గద్దె (బొడ్డెమ్మ) నిర్మాణం',
    },
    teluguSubtitle: 'మూడు లేదా ఐదు మెట్ల చతురస్రాకార గద్దె',
    materials: {
      en: 'Kneaded puttamatti clay shaped into 3 or 5 concentric square tiers',
      te: 'పుట్టమట్టితో మూడు లేదా ఐదు అంతస్తుల మెట్లు',
    },
    explanation: {
      en: 'Unlike Bathukamma (which is built entirely of flowers on a plate), Boddemma is sculpted from clay into a stepped square or circular terrace (gadde) of three or five diminishing levels, often with four small corner bastions (burujulu).',
      te: 'బతుకమ్మలా కాకుండా బొడ్డెమ్మను మట్టితో నిర్మిస్తారు. అడుగున వెడల్పుగా ఉండి పైకి వెళ్లేకొద్దీ చిన్నదయ్యేలా మూడు లేదా ఐదు అంతస్తుల చతురస్రాకార గద్దెగా, నాలుగు మూలల బురుజులతో తీర్చిదిద్దుతారు.',
    },
    culturalContext: {
      en: 'Note on regional variation: In some northern Telangana villages, a permanent 5-step earthen platform is built in the courtyard for all nine days; in others, fresh clay forms are made daily.',
      te: 'ప్రాంతీయ వైవిధ్యం: కొన్ని ఊళ్లలో తొమ్మిది రోజుల పాటు ఉండేలా ఒకే పెద్ద మట్టి గద్దెను కడతారు; మరికొన్ని చోట్ల ప్రతిరోజూ చిన్న మట్టి బొడ్డెమ్మలను చేస్తారు.',
    },
  },
  {
    stageNumber: 4,
    title: {
      en: 'Painting with Lime, Turmeric & Vermilion Stripes',
      te: '4. సున్నం, పసుపు, కుంకుమలతో అలంకరణ',
    },
    teluguSubtitle: 'నామాలు & పసుపు కుంకుమ బొట్లు',
    materials: {
      en: 'White lime wash (sunnam) or rice paste, turmeric (pasupu), vermilion (kumkuma)',
      te: 'తెల్ల సున్నం (లేదా బియ్యంపిండి), పసుపు, కుంకుమ',
    },
    explanation: {
      en: 'Once the clay surface firms slightly, vertical stripes of white lime or rice flour, golden turmeric, and red kumkuma are painted along every step of the earthen pyramid.',
      te: 'మట్టి గద్దె ఆరిన తర్వాత తెల్ల సున్నం లేదా బియ్యంపిండితో నిలువు చారలు గీసి, పసుపు మరియు కుంకుమ బొట్లతో ప్రతి మెట్టును అలంకరిస్తారు.',
    },
    culturalContext: {
      en: 'The triad of white, yellow, and red over dark earth gives Boddemma its unmistakable visual identity across Telangana villages.',
      te: 'నల్లని లేదా ఎర్రని మట్టి గద్దెపై తెలుపు, పసుపు, కుంకుమ చారలు బొడ్డెమ్మకు సాంప్రదాయ రూపాన్ని ఇస్తాయి.',
    },
  },
  {
    stageNumber: 5,
    title: {
      en: 'Crowning with Kalasham, Gouramma & Evening Blossoms',
      te: '5. కలశం, గౌరమ్మ మరియు పూలతో అలంకరణ',
    },
    teluguSubtitle: 'తంగేడు, బీరపువ్వు, కట్ల పూల సమర్పణ',
    materials: {
      en: 'Small clay/brass pot (kalasham) filled with rice, turmeric Gouramma, Tangedu, Beerapuvvu, Katla, and Vaama flowers',
      te: 'చిన్న మట్టి గురిగి (కలశం), బియ్యం, పసుపు గౌరమ్మ, తంగేడు, బీర, కట్ల పూలు',
    },
    explanation: {
      en: 'At the topmost tier, a tiny earthen pot (gurigi/kalasham) filled with raw rice and topped with a turmeric cone (or small clay figures of Boddemma and Boddanna) is placed. Every step is lined with seasonal Tangedu, white jasmine/tumma, and yellow ridge-gourd blossoms.',
      te: 'గద్దె పైభాగాన బియ్యం పోసిన చిన్న మట్టి గురిగిని ఉంచి, దానిపై పసుపు గౌరమ్మను పెడతారు. ప్రతి మెట్టుపై తంగేడు, బీరపువ్వు, కట్ల పూలను పేరుస్తారు.',
    },
    culturalContext: {
      en: 'Honors fertility, girlhood companionship, and the approaching harvest.',
      te: 'కన్నెపిల్లల సౌభాగ్యానికి, పంటల సమృద్ధికి చిహ్నంగా ఈ అలంకరణ ఉంటుంది.',
    },
  },
  {
    stageNumber: 6,
    title: {
      en: 'Evening Circle Songs, Clapping & Concluding Immersion',
      te: '6. సాయంత్రం కోలిరో పాటలు, వాయనాలు & నిమజ్జనం',
    },
    teluguSubtitle: 'బొడ్డెమ్మ బొడ్డెమ్మ కోలిరో... ఆటపాటలు',
    materials: {
      en: 'Evening oil lamp, soaked gram/corn/jaggery offerings (upiri/gudalu), community song circle',
      te: 'దీపం, ఉడకబెట్టిన శనగలు/మొక్కజొన్న గుడాలు, కోలిరో పాటలు',
    },
    explanation: {
      en: 'Each evening for nine days leading up to Mahalaya Amavasya, young girls and women circle the Boddemma clapping and singing "Boddemma Boddemma koliro...". On the final day (Amavasya), the clay structure or upper clay figures are respectfully immersed in the local stream or well, ushering in Engili Pula Bathukamma.',
      te: 'తొమ్మిది రోజుల పాటు ప్రతి సాయంత్రం ఆడపిల్లలు చుట్టూ తిరుగుతూ "బొడ్డెమ్మ బొడ్డెమ్మ కోలిరో..." అని పాడుతూ ఆడుతారు. మహాలయ అమావాస్య రోజున బొడ్డెమ్మను నీటిలో నిమజ్జనం చేయడంతో ఎంగిలి పూల బతుకమ్మ ప్రారంభమవుతుంది.',
    },
    culturalContext: {
      en: 'Serves as the intergenerational school of Telangana folk culture—where young girls learn rhythm, floral identification, and community harmony before joining the larger Bathukamma circles.',
      te: 'చిన్నపిల్లలకు తెలంగాణ జానపద పాటలు, పూల గుర్తింపు మరియు సమష్టి జీవనాన్ని నేర్పే సంప్రదాయ పాఠశాల బొడ్డెమ్మ.',
    },
  },
];

export interface FolkSongEntry {
  id: string;
  festival: 'Boddemma' | 'Bathukamma';
  title: BilingualText;
  refrainType: string;
  teluguLyrics: string[];
  transliteration: string[];
  englishMeaning: string[];
  culturalTheme: BilingualText;
  sourceNote: BilingualText;
  tempoBpm: number;
}

export const FOLK_SONGS_DATA: FolkSongEntry[] = [
  {
    id: 'song-boddemma-koliro',
    festival: 'Boddemma',
    title: {
      en: 'Boddemma Boddemma Koliro (Traditional Girlhood Invocation)',
      te: 'బొడ్డెమ్మ బొడ్డెమ్మ కోలిరో (సాంప్రదాయ బొడ్డెమ్మ పాట)',
    },
    refrainType: 'Koliro / Chanti Boddemma cadence',
    teluguLyrics: [
      'బొడ్డెమ్మ బొడ్డెమ్మ కోలిరో — బొడ్డెమ్మ నా బిడ్డ కోలిరో',
      'పుట్టమట్టి తెచ్చిరి కోలిరో — గద్దెలు కట్టిరి కోలిరో',
      'సున్నంబు బొట్లు పెట్టిరి కోలిరో — పసుపు కుంకుమ పెట్టిరి కోలిరో',
      'తంగేడు పూలు పేర్చిరి కోలిరో — బీరపువ్వులు పెట్టిరి కోలిరో',
      'నిండుగా దీపాలు వెలిగె కోలిరో — ఆడబిడ్డలంతా చేరిరి కోలిరో',
    ],
    transliteration: [
      'Boddemma Boddemma koliro — Boddemma naa bidda koliro',
      'Puttamatti techiri koliro — gaddelu kattiri koliro',
      'Sunnambu botlu pettiri koliro — pasupu kumkuma pettiri koliro',
      'Tangedu poolu perchiri koliro — beerapuvvulu pettiri koliro',
      'Ninduga deepalu velige koliro — aadabiddalantha cheriri koliro',
    ],
    englishMeaning: [
      'O Boddemma, cherished Boddemma, we bow in song — O Boddemma, like our own child, we celebrate you.',
      'We brought sacred clay from the termite mound — and sculpted the stepped earthen altar.',
      'We adorned the steps with white lime dots — and auspicious turmeric and vermilion.',
      'We arranged golden Tangedu blossoms — and bright yellow ridge-gourd flowers.',
      'The courtyard lamps glow brightly — as all the daughters of the village gather in a circle.',
    ],
    culturalTheme: {
      en: 'Describes the literal material preparation of the Boddemma clay altar while nurturing a bond of affection among young girls in the neighborhood courtyard.',
      te: 'పుట్టమట్టి తేవడం నుండి గద్దె కట్టి పసుపు కుంకుమలు, పూలతో అలంకరించే విధానాన్ని కళ్లకు కట్టినట్లు వివరించే సాంప్రదాయ కన్నెపిల్లల పాట.',
    },
    sourceNote: {
      en: 'Public-domain traditional oral refrain documented across Karimnagar, Warangal, and Siddipet districts.',
      te: 'కరీంనగర్, వరంగల్, సిద్దిపేట జిల్లాల పల్లెల్లో తరతరాలుగా పాడుకునే మౌఖిక జానపద గీతం.',
    },
    tempoBpm: 96,
  },
  {
    id: 'song-bathukamma-uyyalo',
    festival: 'Bathukamma',
    title: {
      en: 'Bathukamma Bathukamma Uyyalo (The Classic Invocation)',
      te: 'బతుకమ్మ బతుకమ్మ ఉయ్యాలో (సాంప్రదాయ ఉయ్యాల పాట)',
    },
    refrainType: 'Uyyalo (Cradle/Swing Meter)',
    teluguLyrics: [
      'బతుకమ్మ బతుకమ్మ ఉయ్యాలో — బంగారు బతుకమ్మ ఉయ్యాలో',
      'మా ఊరి గౌరమ్మ ఉయ్యాలో — మమ్మేలు తల్లివి ఉయ్యాలో',
      'తంగేడు పువ్వుల్లో ఉయ్యాలో — తామర రేకుల్లో ఉయ్యాలో',
      'గునుగు పూల వరుసల్లో ఉయ్యాలో — గుమ్మడి పువ్వుల్లో ఉయ్యాలో',
      'ఏటేటా రావమ్మ ఉయ్యాలో — మా ఇంట నిలవమ్మ ఉయ్యాలో',
    ],
    transliteration: [
      'Bathukamma Bathukamma uyyalo — Bangaru Bathukamma uyyalo',
      'Maa oori Gouramma uyyalo — mammelu tallivi uyyalo',
      'Tangedu puvvullo uyyalo — tamara rekullo uyyalo',
      'Gunugu poola varusallo uyyalo — gummadi puvvullo uyyalo',
      'Eteta raavamma uyyalo — maa inta nilavamma uyyalo',
    ],
    englishMeaning: [
      'O Bathukamma, Mother of Life, uyyalo — O golden Bathukamma, uyyalo.',
      'Goddess Gauri of our village, uyyalo — you are the Mother who protects us, uyyalo.',
      'Dwelling amidst golden Tangedu blossoms, uyyalo — and sacred lotus petals, uyyalo.',
      'In the rows of feathery Gunugu plumes, uyyalo — and bright pumpkin flowers, uyyalo.',
      'Return to us year after year, uyyalo — and bless our homes with life, uyyalo.',
    ],
    culturalTheme: {
      en: 'The word "Uyyalo" (meaning swing or cradle) acts as the rhythmic anchor at the end of every half-line, allowing one lead singer to improvise verses while the entire circle joins in unison on the refrain and hand-clap.',
      te: 'ప్రతి పాదం చివర "ఉయ్యాలో" అనే ఊతపదంతో సాగే ఈ పాట, ఒకరు పాడుతుంటే చుట్టూ ఉన్న మహిళలందరూ చప్పట్లతో కోరస్ పాడటానికి అనువుగా ఉంటుంది.',
    },
    sourceNote: {
      en: 'Public-domain traditional oral refrain documented throughout Telangana.',
      te: 'తెలంగాణ అంతటా ప్రచారంలో ఉన్న ప్రాచీన ప్రజా సాహిత్య ఉయ్యాల పాట.',
    },
    tempoBpm: 88,
  },
  {
    id: 'song-chittociro-chandamama',
    festival: 'Bathukamma',
    title: {
      en: 'Chittociro Chitti Bathukamma & Chandamama Refrain',
      te: 'చిత్తోచిరో చిట్టి బతుకమ్మ — చందమామ పాట',
    },
    refrainType: 'Chandamama / Valalo Meter',
    teluguLyrics: [
      'చిత్తోచిరో చిట్టి బతుకమ్మ — గుమ్మడి పువ్వుల బతుకమ్మ',
      'ఒక్కొక్క పువ్వేసి చందమామ — ఒక్క జాము ఆయె చందమామ',
      'రెండేసి పువ్వేసి చందమామ — రెండు జాములాయె చందమామ',
      'మూడేసి పువ్వేసి చందమామ — మూడు జాములాయె చందమామ',
      'పుట్టింటి ఆడబిడ్డ చందమామ — పూలతో కొలిచెను చందమామ',
    ],
    transliteration: [
      'Chittociro chitti Bathukamma — gummadi puvvula Bathukamma',
      'Okkokka puvvesi chandamama — okka jaamu aaye chandamama',
      'Rendesi puvvesi chandamama — rendu jaamulaaye chandamama',
      'Moodesi puvvesi chandamama — moodu jaamulaaye chandamama',
      'Puttinti aadabidda chandamama — poolatho kolichenu chandamama',
    ],
    englishMeaning: [
      'Little Bathukamma of gentle grace — Bathukamma adorned with pumpkin blossoms.',
      'Placing flower by flower, O Chandamama — the first watch of the day has passed.',
      'Placing flowers in pairs, O Chandamama — two watches of time have flowed by.',
      'Placing flowers in threes, O Chandamama — three watches of patient devotion have passed.',
      'The daughter returned to her maternal home, O Chandamama — worships with wild blossoms.',
    ],
    culturalTheme: {
      en: 'Captures the meditative patience of building the floral stack tier by tier and the emotional homecoming of daughters to their maternal villages during the festival.',
      te: 'ఒక్కొక్క పువ్వును ఓపికగా పేరుస్తూ సమయం గడిచే విధానాన్ని, పుట్టింటికి వచ్చిన ఆడబిడ్డల ఆనందాన్ని వ్యక్తం చేసే చందమామ పాట.',
    },
    sourceNote: {
      en: 'Public-domain traditional oral song recorded in Telangana folklore collections.',
      te: 'తెలంగాణ జానపద గీత సంకలనాలలో నమోదైన సాంప్రదాయ గీతం.',
    },
    tempoBpm: 92,
  },
];

export interface GlossaryItem {
  term: string;
  teluguScript: string;
  meaning: BilingualText;
  context: BilingualText;
  relatedRoute: string;
}

export const GLOSSARY_DATA: GlossaryItem[] = [
  {
    term: 'Boddemma',
    teluguScript: 'బొడ్డెమ్మ',
    meaning: {
      en: 'The nine-day prelusive festival celebrated by unmarried girls and women using a stepped clay altar made of termite-mound earth (puttamatti).',
      te: 'బతుకమ్మకు ముందు తొమ్మిది రోజుల పాటు పుట్టమట్టితో గద్దె కట్టి కన్నెపిల్లలు జరుపుకునే పండుగ.',
    },
    context: {
      en: 'Concludes on Mahalaya Amavasya as Bathukamma begins.',
      te: 'భాద్రపద పౌర్ణమి/బహుళ పక్షంలో మొదలై మహాలయ అమావాస్య నాడు ముగుస్తుంది.',
    },
    relatedRoute: '/boddemma/',
  },
  {
    term: 'Bathukamma',
    teluguScript: 'బతుకమ్మ',
    meaning: {
      en: 'Literally "Mother of Life" or "Live Forever, Mother" (Bathuku = life/live, Amma = mother); Telangana’s nine-day floral festival.',
      te: '"బతుకు + అమ్మ" — సకల జీవరాశిని బతికించే తల్లి, తెలంగాణ పూల పండుగ.',
    },
    context: {
      en: 'Celebrated from Mahalaya Amavasya to Durgashtami with conical stacks of seasonal wildflowers.',
      te: 'మహాలయ అమావాస్య నుండి దుర్గాష్టమి వరకు తొమ్మిది రోజులు జరుపుకుంటారు.',
    },
    relatedRoute: '/bathukamma/',
  },
  {
    term: 'Puttamatti',
    teluguScript: 'పుట్టమట్టి',
    meaning: {
      en: 'Sacred, fine-grained clay gathered from natural termite mounds in rural fields.',
      te: 'పుట్ట నుండి సేకరించిన పవిత్రమైన మెత్తని మట్టి.',
    },
    context: {
      en: 'Primary material used to sculpt the stepped Boddemma structure.',
      te: 'బొడ్డెమ్మ గద్దె తయారీలో ఉపయోగించే ప్రధాన మట్టి.',
    },
    relatedRoute: '/boddemma/',
  },
  {
    term: 'Pasupu Gouramma',
    teluguScript: 'పసుపు గౌరమ్మ',
    meaning: {
      en: 'A conical representation of Goddess Gauri fashioned from wet turmeric paste and marked with vermilion (kumkuma).',
      te: 'పసుపు ముద్దతో తయారుచేసి కుంకుమ బొట్టు పెట్టిన గౌరీదేవి ప్రతిరూపం.',
    },
    context: {
      en: 'Placed at the very pinnacle of the Bathukamma floral stack.',
      te: 'బతుకమ్మ శిఖర భాగాన తమలపాకు లేదా గుమ్మడి ఆకుపై ఉంచుతారు.',
    },
    relatedRoute: '/bathukamma/',
  },
  {
    term: 'Tambalam / Sibbi',
    teluguScript: 'తాంబాలం / సిబ్బి',
    meaning: {
      en: 'A broad flat plate of brass, copper, or woven bamboo on which the Bathukamma flower stack is arranged.',
      te: 'బతుకమ్మ పూలను పేర్చడానికి వాడే వెడల్పాటి ఇత్తడి పళ్లెం లేదా వెదురు సిబ్బి.',
    },
    context: {
      en: 'Lined with broad Gummadi or lotus leaves prior to flower layering.',
      te: 'దీనిలో గుమ్మడి లేదా తామర ఆకులు పరిచి పూలను పేరుస్తారు.',
    },
    relatedRoute: '/traditions/',
  },
  {
    term: 'Pethramasa (Mahalaya Amavasya)',
    teluguScript: 'పెత్రామాస (మహాలయ అమావాస్య)',
    meaning: {
      en: 'Telangana vernacular term for Pitru Amavasya / Mahalaya Amavasya—the new moon day honoring ancestors.',
      te: 'పితృదేవతలను స్మరించుకునే మహాలయ అమావాస్య (భాద్రపద బహుళ అమావాస్య).',
    },
    context: {
      en: 'The pivotal day when Boddemma concludes and Engili Pula Bathukamma begins.',
      te: 'బొడ్డెమ్మ ముగిసి, మొదటి రోజు ఎంగిలి పూల బతుకమ్మ ప్రారంభమయ్యే రోజు.',
    },
    relatedRoute: '/festival-calendar/',
  },
  {
    term: 'Sattu Pindi / Maleeda',
    teluguScript: 'సత్తుపిండి / మలీద',
    meaning: {
      en: 'Traditional roasted grain flour (rice, corn, wheat, or pulses) pounded with jaggery/sugar and ghee; Maleeda is made from crushed rotis with jaggery.',
      te: 'వేయించిన ధాన్యాలను బెల్లం/చక్కెరతో దంచిన పిండి; రొట్టె ముక్కలు, బెల్లం, నెయ్యితో చేసే ప్రసాదం మలీద.',
    },
    context: {
      en: 'Offered and exchanged as Vayanalu on Saddula Bathukamma.',
      te: 'సద్దుల బతుకమ్మ రోజున వాయనంగా ఇచ్చుకునే సాంప్రదాయ నైవేద్యం.',
    },
    relatedRoute: '/bathukamma/nine-days/',
  },
  {
    term: 'Uyyalo / Chandamama / Koliro',
    teluguScript: 'ఉయ్యాలో / చందమామ / కోలిరో',
    meaning: {
      en: 'Refrain words sung at the end of folk verses to synchronize collective clapping and circular movement.',
      te: 'బతుకమ్మ, బొడ్డెమ్మ పాటల్లో ప్రతి పాదం చివర అందరూ కలిసి పాడే ఊతపదాలు.',
    },
    context: {
      en: 'Anchors Telangana women’s oral poetry across generations.',
      te: 'మహిళలందరూ లయబద్ధంగా చప్పట్లు కొడుతూ పాడటానికి తోడ్పడే మౌఖిక సాహిత్య శైలి.',
    },
    relatedRoute: '/folk-songs/',
  },
];

export interface QuizQuestion {
  id: string;
  question: BilingualText;
  options: BilingualText[];
  correctIndex: number;
  explanation: BilingualText;
}

export const QUIZ_DATA: QuizQuestion[] = [
  {
    id: 'q1',
    question: {
      en: 'What is the primary structural distinction between Boddemma and Bathukamma?',
      te: 'బొడ్డెమ్మకు, బతుకమ్మకు ఉన్న ప్రధాన నిర్మాణ పరమైన తేడా ఏమిటి?',
    },
    options: [
      {
        en: 'Boddemma is sculpted as a stepped clay altar from termite-mound earth (puttamatti) adorned with flowers, whereas Bathukamma is a concentric floral cone arranged on a brass tambalam.',
        te: 'బొడ్డెమ్మను పుట్టమట్టితో గద్దెలా కట్టి పూలతో అలంకరిస్తారు; బతుకమ్మను తాంబాలంలో పూర్తిగా పూలతోనే గోపురంలా పేరుస్తారు.',
      },
      {
        en: 'Both are made exclusively of carved sandalwood.',
        te: 'రెండూ చందనం చెక్కతో మాత్రమే తయారు చేస్తారు.',
      },
      {
        en: 'Boddemma is celebrated in winter while Bathukamma is celebrated in summer.',
        te: 'బొడ్డెమ్మ వేసవిలో, బతుకమ్మ చలికాలంలో జరుపుకుంటారు.',
      },
      {
        en: 'Bathukamma uses only artificial paper flowers.',
        te: 'బతుకమ్మలో కాగితపు పూలను మాత్రమే వాడుతారు.',
      },
    ],
    correctIndex: 0,
    explanation: {
      en: 'Boddemma centers on a three- or five-tiered earthen structure (gadde) formed from sacred puttamatti clay and painted with lime, turmeric, and kumkuma, whereas Bathukamma is a layered conical arrangement of seasonal flowers crowned with Pasupu Gouramma.',
      te: 'బొడ్డెమ్మ పుట్టమట్టితో మూడు లేదా ఐదు అంతస్తుల గద్దెగా నిర్మించబడుతుంది. బతుకమ్మ తాంబాలంలో తంగేడు, గునుగు తదితర పూలతో గోపురంలా పేర్చబడుతుంది.',
    },
  },
  {
    id: 'q2',
    question: {
      en: 'Which flower is officially recognized as the State Flower of Telangana and forms the foundational rings of Bathukamma?',
      te: 'తెలంగాణ రాష్ట్ర పుష్పంగా గుర్తింపు పొంది, బతుకమ్మ పేర్పులో ప్రధాన పునాదిగా నిలిచే పువ్వు ఏది?',
    },
    options: [
      { en: 'Tangedu (Senna auriculata)', te: 'తంగేడు పువ్వు (Senna auriculata)' },
      { en: 'Gulabi (Rosa indica)', te: 'గులాబీ పువ్వు' },
      { en: 'Malle (Jasminum sambac)', te: 'మల్లె పువ్వు' },
      { en: 'Kanakambaram (Crossandra)', te: 'కనకాంబరం' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'Tangedu (Senna auriculata / Tanner’s Cassia) blooms abundantly across Telangana’s post-monsoon scrublands and serves as the golden structural foundation of Bathukamma.',
      te: 'తంగేడు పువ్వు (Senna auriculata) తెలంగాణ రాష్ట్ర పుష్పం. బతుకమ్మ పేర్పులో ఇది అత్యంత కీలకమైన పువ్వు.',
    },
  },
  {
    id: 'q3',
    question: {
      en: 'What is unique about the sixth day of Bathukamma, traditionally called Aligina Bathukamma (or Arremidi)?',
      te: 'బతుకమ్మ పండుగలో ఆరవ రోజు అయిన "అలిగిన బతుకమ్మ" (అర్రెమిడి) ప్రత్యేకత ఏమిటి?',
    },
    options: [
      {
        en: 'No flowers are stacked and no cooked food offering (naivedyam) is made—it serves as a traditional day of rest and preparation.',
        te: 'ఈ రోజు బతుకమ్మను పేర్చరు మరియు ఎలాంటి నైవేద్యం సమర్పించరు—ఇది విశ్రాంతి మరియు సన్నాహక రోజు.',
      },
      {
        en: 'It is the only day celebrated at midnight on hilltops.',
        te: 'ఈ రోజు అర్ధరాత్రి కొండలపై మాత్రమే జరుపుకుంటారు.',
      },
      {
        en: 'Only clay pots are immersed without any songs.',
        te: 'పాటలు లేకుండా కేవలం మట్టి కుండలను మాత్రమే నిమజ్జనం చేస్తారు.',
      },
      {
        en: 'Nine varieties of spicy curries are offered.',
        te: 'తొమ్మిది రకాల కారపు కూరలను నైవేద్యంగా పెడతారు.',
      },
    ],
    correctIndex: 0,
    explanation: {
      en: 'On the sixth day (Aligina Bathukamma), neither flower stacking nor food offering takes place. Women use the day to rest and prepare roasted sattu pindi grains for the final days.',
      te: 'ఆరవ రోజున బతుకమ్మను పేర్చరు, నైవేద్యం ఉండదు. మహిళలు విశ్రాంతి తీసుకుంటూ సద్దుల బతుకమ్మ కోసం సత్తుపిండి తయారు చేసుకుంటారు.',
    },
  },
  {
    id: 'q4',
    question: {
      en: 'On which Telugu lunar day does the first day of Bathukamma (Engili Pula Bathukamma) commence?',
      te: 'మొదటి రోజు "ఎంగిలి పూల బతుకమ్మ" ఏ తెలుగు తిథి నాడు ప్రారంభమవుతుంది?',
    },
    options: [
      {
        en: 'Bhadrapada Bahula Amavasya (Mahalaya Amavasya / Pethramasa)',
        te: 'భాద్రపద బహుళ అమావాస్య (మహాలయ అమావాస్య / పెత్రామాస)',
      },
      {
        en: 'Chaitra Shukla Padyami (Ugadi)',
        te: 'చైత్ర శుద్ధ పాడ్యమి (ఉగాది)',
      },
      {
        en: 'Kartika Pournami',
        te: 'కార్తీక పౌర్ణమి',
      },
      {
        en: 'Magha Shukla Panchami',
        te: 'మాఘ శుద్ధ పంచమి',
      },
    ],
    correctIndex: 0,
    explanation: {
      en: 'Bathukamma begins on Bhadrapada Bahula Amavasya (known across Telangana as Pethramasa or Mahalaya Amavasya) and culminates nine days later on Ashwayuja Shukla Durgashtami.',
      te: 'భాద్రపద బహుళ అమావాస్య (పెత్రామాస / మహాలయ అమావాస్య) నాడు ఎంగిలి పూల బతుకమ్మ మొదలై ఆశ్వయుజ శుద్ధ దుర్గాష్టమి నాడు సద్దుల బతుకమ్మతో ముగుస్తుంది.',
    },
  },
];

export interface RegionalTraditionEntry {
  id: string;
  regionName: BilingualText;
  districts: string[];
  verificationStatus: 'Documented Cultural Practice' | 'Attributed Community Oral Record';
  boddemmaPractice: BilingualText;
  bathukammaHighlight: BilingualText;
  signatureSongOrFood: BilingualText;
  sourceCitationId: string;
}

export const REGIONAL_TRADITIONS: RegionalTraditionEntry[] = [
  {
    id: 'reg-karimnagar-peddapalli',
    regionName: {
      en: 'Karimnagar, Jagtial, Rajanna Sircilla & Peddapalli',
      te: 'కరీంనగర్, జగిత్యాల, రాజన్న సిరిసిల్ల & పెద్దపల్లి',
    },
    districts: ['Karimnagar', 'Jagtial', 'Rajanna Sircilla', 'Peddapalli'],
    verificationStatus: 'Documented Cultural Practice',
    boddemmaPractice: {
      en: 'Permanent five-tiered clay Boddemma platforms (gaddelu) are constructed in neighborhood courtyards for nine days prior to Pethramasa, painted daily with fresh lime and kumkuma.',
      te: 'పెత్రామాసకు తొమ్మిది రోజుల ముందు వాడకట్టు కూడళ్లలో ఐదు మెట్ల మట్టి బొడ్డెమ్మ గద్దెలను నిర్మించి, ప్రతిరోజూ సున్నం, కుంకుమలతో అలంకరించి కోలిరో పాటలు పాడుతారు.',
    },
    bathukammaHighlight: {
      en: 'Renowned for towering Saddula Bathukamma cones with intricately dyed multi-color Gunugu bands and large community gatherings along the Manair river and historic tanks.',
      te: 'మానేరు నది, స్థానిక చెరువుల తీరాన రంగురంగుల గునుగు పూలతో ఎత్తైన బతుకమ్మలను పేర్చి వేలాది మంది మహిళలు కోలాటం ఆడుతారు.',
    },
    signatureSongOrFood: {
      en: 'Roasted corn and rice Sattu Pindi, Sakinalu-style Vepakayalu on Day 7, and long narrative Uyyalo ballads.',
      te: 'మొక్కజొన్న, బియ్యం సత్తుపిండి, ఏడవ రోజు బియ్యంపిండి వేపకాయలు మరియు కథాత్మక ఉయ్యాల పాటలు.',
    },
    sourceCitationId: 'SRC-DEPT-CULTURE',
  },
  {
    id: 'reg-warangal-hanamkonda',
    regionName: {
      en: 'Warangal, Hanamkonda, Jangaon & Mulugu (Kakatiya Heartland)',
      te: 'వరంగల్, హనుమకొండ, జనగామ & ములుగు (కాకతీయ ప్రాంతం)',
    },
    districts: ['Warangal', 'Hanamkonda', 'Jangaon', 'Mulugu'],
    verificationStatus: 'Documented Cultural Practice',
    boddemmaPractice: {
      en: 'Girls mold clay figures of Boddemma and Boddanna atop the stepped platform and place a rice-filled clay gurigi crowned with a turmeric cone.',
      te: 'మట్టి గద్దెపై బియ్యం నింపిన చిన్న మట్టి గురిగిని ఉంచి, బొడ్డెమ్మ-బొడ్డన్న మట్టి రూపాలను పెట్టి ఆరాధిస్తారు.',
    },
    bathukammaHighlight: {
      en: 'Historic celebrations around the Thousand Pillar Temple, Padmakshi Temple tank, and chain-linked Kakatiya cheruvulu.',
      te: 'వేయి స్తంభాల గుడి, పద్మాక్షి గుడి గుండం మరియు కాకతీయుల గొలుసుకట్టు చెరువుల వద్ద చారిత్రక వైభవంతో వేడుకలు జరుగుతాయి.',
    },
    signatureSongOrFood: {
      en: 'Five varieties of Saddulu on the ninth day alongside Maleeda (crushed wheat rotis with jaggery and ghee).',
      te: 'సద్దుల బతుకమ్మ రోజున ఐదు రకాల సద్దులు మరియు గోధుమ రొట్టెలు, బెల్లం, నెయ్యితో చేసే మలీద ముద్దలు.',
    },
    sourceCitationId: 'SRC-TANK-ECOLOGY',
  },
  {
    id: 'reg-nizamabad-adilabad',
    regionName: {
      en: 'Nizamabad, Kamareddy, Nirmal & Adilabad (Godavari Basin)',
      te: 'నిజామాబాద్, కామారెడ్డి, నిర్మల్ & ఆదిలాబాద్ (గోదావరి పరివాహక ప్రాంతం)',
    },
    districts: ['Nizamabad', 'Kamareddy', 'Nirmal', 'Adilabad'],
    verificationStatus: 'Documented Cultural Practice',
    boddemmaPractice: {
      en: 'In several rural mandals, Boddemma is observed with daily boiled pulse offerings (gudalu) and rhythmic stick-clapping (kolatam) by young girls.',
      te: 'సాయంత్రం వేళల్లో ఉడకబెట్టిన శనగలు, బొబ్బర్లు (గుడాలు) నైవేద్యంగా పెట్టి ఆడపిల్లలు కోలాటం ఆడుతారు.',
    },
    bathukammaHighlight: {
      en: 'Strong presence of red turmeric and wild forest flowers alongside Tangedu; rhythmic two-step and three-step circle dances.',
      te: 'తంగేడుతో పాటు అటవీ ప్రాంత పూల వినియోగం, విశిష్టమైన అడుగులతో సాగే కోలాటం మరియు బతుకమ్మ ఆట.',
    },
    signatureSongOrFood: {
      en: 'Jaggery-sweetened sesame and groundnut Chimmili and roasted jowar/bajra Sattu Pindi.',
      te: 'నువ్వులు, పల్లీల చిమ్మిలి మరియు జొన్న/సజ్జ సత్తుపిండి.',
    },
    sourceCitationId: 'SRC-DEPT-CULTURE',
  },
  {
    id: 'reg-nalgonda-mahabubnagar',
    regionName: {
      en: 'Nalgonda, Suryapet, Nagarkurnool & Mahabubnagar (Southern Plateau)',
      te: 'నల్లగొండ, సూర్యాపేట, నాగర్‌కర్నూల్ & మహబూబ్‌నగర్ (దక్షిణ తెలంగాణ)',
    },
    districts: ['Nalgonda', 'Suryapet', 'Mahabubnagar', 'Nagarkurnool'],
    verificationStatus: 'Attributed Community Oral Record',
    boddemmaPractice: {
      en: 'Portable wooden planks (peetalu) with freshly molded clay cones and wild Katla and Tangedu blossoms are carried to a central street corner each evening.',
      te: 'చెక్క పీటలపై మట్టితో చేసిన బొడ్డెమ్మలను అలంకరించి సాయంత్రం వీధి కూడలికి తీసుకువచ్చి ఆడుతారు.',
    },
    bathukammaHighlight: {
      en: 'Emphasis on broad brass tambalams with lotus, pumpkin blossoms, and marigold rings; ballads recounting local agrarian resilience and kinship.',
      te: 'తామర, గుమ్మడి, బంతి పూల వినియోగం మరియు పల్లె జీవన కష్టసుఖాలను, బంధుత్వాలను వర్ణించే జానపద గీతాలు.',
    },
    signatureSongOrFood: {
      en: 'Soaked rice with sesame paste (nuvvula mudda) and sweetened flattened rice.',
      te: 'నానబియ్యం, నువ్వుల ముద్ద మరియు బెల్లం అటుకులు.',
    },
    sourceCitationId: 'SRC-TS-PORTAL',
  },
];

export interface LunarCalendarYear {
  year: number;
  verificationStatus: 'Verified Historical/Current Panchangam' | 'Astronomical Lunar Estimate — Confirm with Local Panchangam';
  teluguSamvatsaram: BilingualText;
  boddemmaWindow: BilingualText;
  pethramasaEngiliPulaDate: string;
  aliginaRestDayDate: string;
  saddulaBathukammaDate: string;
  dasaraDate: string;
  notes: BilingualText;
}

export const CALENDAR_YEARS: LunarCalendarYear[] = [
  {
    year: 2024,
    verificationStatus: 'Verified Historical/Current Panchangam',
    teluguSamvatsaram: { en: 'Sri Krodhi Nama Samvatsaram', te: 'శ్రీ క్రోధి నామ సంవత్సరం' },
    boddemmaWindow: {
      en: 'September 18 – October 2, 2024 (Bhadrapada Pournami / Mahalaya Paksha)',
      te: 'సెప్టెంబర్ 18 – అక్టోబర్ 2, 2024 (భాద్రపద బహుళ పక్షం)',
    },
    pethramasaEngiliPulaDate: '2024-10-02',
    aliginaRestDayDate: '2024-10-07',
    saddulaBathukammaDate: '2024-10-10',
    dasaraDate: '2024-10-12',
    notes: {
      en: 'Verified against Telangana State Festival Calendar 2024.',
      te: '2024 తెలంగాణ ప్రభుత్వ పండుగల క్యాలెండర్ ప్రకారం ధృవీకరించబడింది.',
    },
  },
  {
    year: 2025,
    verificationStatus: 'Verified Historical/Current Panchangam',
    teluguSamvatsaram: { en: 'Sri Vishwavasu Nama Samvatsaram', te: 'శ్రీ విశ్వావసు నామ సంవత్సరం' },
    boddemmaWindow: {
      en: 'September 12 – September 21, 2025 (9-day observance leading to Mahalaya Amavasya)',
      te: 'సెప్టెంబర్ 12 – సెప్టెంబర్ 21, 2025 (మహాలయ అమావాస్యకు ముందు 9 రోజులు)',
    },
    pethramasaEngiliPulaDate: '2025-09-21',
    aliginaRestDayDate: '2025-09-26',
    saddulaBathukammaDate: '2025-09-29',
    dasaraDate: '2025-10-02',
    notes: {
      en: 'Verified lunar schedule from Bhadrapada Amavasya (Sept 21, 2025) to Durgashtami (Sept 29–30, 2025).',
      te: 'భాద్రపద అమావాస్య (సెప్టెంబర్ 21, 2025) నుండి దుర్గాష్టమి వరకు ధృవీకరించిన తేదీలు.',
    },
  },
  {
    year: 2026,
    verificationStatus: 'Verified Historical/Current Panchangam',
    teluguSamvatsaram: { en: 'Sri Parabhava Nama Samvatsaram', te: 'శ్రీ పరాభవ నామ సంవత్సరం' },
    boddemmaWindow: {
      en: 'October 1 – October 10, 2026 (9-day observance in Bhadrapada Bahula Paksha)',
      te: 'అక్టోబర్ 1 – అక్టోబర్ 10, 2026 (భాద్రపద బహుళ పక్షం)',
    },
    pethramasaEngiliPulaDate: '2026-10-10',
    aliginaRestDayDate: '2026-10-15',
    saddulaBathukammaDate: '2026-10-18',
    dasaraDate: '2026-10-20',
    notes: {
      en: 'In 2026, Mahalaya Amavasya (Pethramasa / Engili Pula Bathukamma) falls on October 10, with Saddula Bathukamma observed on Durgashtami (October 18–19 depending on local tithi overlap).',
      te: '2026లో మహాలయ అమావాస్య (ఎంగిలి పూల బతుకమ్మ) అక్టోబర్ 10న ప్రారంభమై, దుర్గాష్టమి (అక్టోబర్ 18–19) నాడు సద్దుల బతుకమ్మతో ముగుస్తుంది.',
    },
  },
  {
    year: 2027,
    verificationStatus: 'Astronomical Lunar Estimate — Confirm with Local Panchangam',
    teluguSamvatsaram: { en: 'Sri Plavanga Nama Samvatsaram', te: 'శ్రీ ప్లవంగ నామ సంవత్సరం' },
    boddemmaWindow: {
      en: 'September 20 – September 29, 2027 (Estimated 9-day window prior to Amavasya)',
      te: 'సెప్టెంబర్ 20 – సెప్టెంబర్ 29, 2027 (అంచనా తేదీలు)',
    },
    pethramasaEngiliPulaDate: '2027-09-29',
    aliginaRestDayDate: '2027-10-04',
    saddulaBathukammaDate: '2027-10-07',
    dasaraDate: '2027-10-09',
    notes: {
      en: 'Provisional lunar tithi projection. Annual festival dates must always be confirmed against the published Telangana State Panchangam for that year.',
      te: 'ఇవి చాంద్రమాన గణన ఆధారిత తాత్కాలిక తేదీలు. ఆయా సంవత్సరపు అధికారిక తెలంగాణ పంచాంగం ప్రకారం నిర్ధారించుకోవాలి.',
    },
  },
];
