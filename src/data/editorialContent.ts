import { BilingualText, GENERATED_ASSETS } from './culturalArchive';

export interface EditorialArticle {
  id: string;
  slug: string;
  category: 'Ecology & Land' | 'Boddemma Heritage' | 'Oral Literature' | 'Botanical Research' | 'Culinary Traditions' | 'Diaspora & Preservation';
  categoryLabel: BilingualText;
  evidenceClassification: BilingualText;
  title: BilingualText;
  excerpt: BilingualText;
  readingTimeMinutes: number;
  publishedDate: string;
  lastReviewedDate: string;
  authorRole: BilingualText;
  reviewerRole: BilingualText;
  heroImage: string;
  directAnswerSummary: BilingualText;
  sections: Array<{
    heading: BilingualText;
    paragraphs: BilingualText[];
  }>;
  sourceIds: string[];
}

export const EDITORIAL_ARTICLES: EditorialArticle[] = [
  {
    id: 'art-1',
    slug: 'sacred-ecology-of-telangana-tanks-and-flowers',
    category: 'Ecology & Land',
    categoryLabel: { en: 'Ecology & Land', te: 'పర్యావరణం & చెరువులు' },
    evidenceClassification: {
      en: 'Historical & Ecological Documentation',
      te: 'చారిత్రక & పర్యావరణ అధ్యయనం',
    },
    title: {
      en: 'Sacred Ecology: How Telangana’s Chain-Linked Tanks (Cheruvulu) and Wildflowers Shape Bathukamma',
      te: 'పవిత్ర జీవావరణం: తెలంగాణ గొలుసుకట్టు చెరువులు మరియు అడవి పూలతో బతుకమ్మ బంధం',
    },
    excerpt: {
      en: 'Examining the agrarian rhythm between post-monsoon Deccan scrubland flora, Kakatiya-era earthen water tanks, and the concluding immersion of Bathukamma.',
      te: 'దక్కన్ పీఠభూమిలో వర్షాకాలం తర్వాత వికసించే పూలు, కాకతీయుల నాటి గొలుసుకట్టు చెరువులు మరియు బతుకమ్మ నిమజ్జనం వెనుక ఉన్న పర్యావరణ విజ్ఞానం.',
    },
    readingTimeMinutes: 7,
    publishedDate: '2026-09-15',
    lastReviewedDate: '2026-10-11',
    authorRole: {
      en: 'Boddemma.com Cultural Documentation Desk (The Panchayithi Network)',
      te: 'Boddemma.com సాంస్కృతిక పరిశోధనా విభాగం (ది పంచాయితీ నెట్‌వర్క్)',
    },
    reviewerRole: {
      en: 'Reviewed against Telangana State Flora & Heritage Records',
      te: 'తెలంగాణ వృక్షశాస్త్ర & వారసత్వ ఆధారాలతో పునఃసమీక్షించబడింది',
    },
    heroImage: GENERATED_ASSETS.heroVillage,
    directAnswerSummary: {
      en: 'Bathukamma is deeply rooted in the semi-arid hydrology of the Deccan Plateau. Celebrated at the end of the southwest monsoon (Bhadrapada–Ashwayuja), the festival coincides with the full brimming of village tanks (cheruvulu) and the peak bloom of wild uncultivated flora such as Tangedu (Senna auriculata) and Gunugu (Celosia argentea).',
      te: 'బతుకమ్మ పండుగ దక్కన్ పీఠభూమి భౌగోళిక, జల వనరుల వ్యవస్థతో ముడిపడి ఉంది. నైరుతి రుతుపవనాల చివరలో ఊరి చెరువులు అలుగులు పోసే వేళ, అడవుల్లో తంగేడు, గునుగు పూలు విరగబూసినప్పుడు ఈ పండుగ జరుపుకుంటారు.',
    },
    sections: [
      {
        heading: {
          en: '1. The Post-Monsoon Landscape of Telangana',
          te: '1. రుతుపవనాల అనంతర తెలంగాణ ప్రకృతి దృశ్యం',
        },
        paragraphs: [
          {
            en: 'Unlike riverine delta regions with perennial canal irrigation, upland Telangana historically depended on rain-fed agriculture and thousands of human-engineered earthen tanks (cheruvulu and kuntas) linked in cascading chains since the Kakatiya period. When the September rains fill these tanks to overflowing (alugu), the surrounding red gravelly soils burst into yellow, crimson, and white wildflower carpets.',
            te: 'తెలంగాణ భౌగోళికంగా ఎగువ పీఠభూమి ప్రాంతం. కాకతీయుల కాలం నుండి నిర్మించబడిన వేలాది గొలుసుకట్టు చెరువులు, కుంటలే ఇక్కడి వ్యవసాయానికి జీవనాధారం. భాద్రపద మాసంలో కురిసే వర్షాలకు చెరువులు నిండి అలుగులు పారే సమయంలో, ఎర్రని గుట్టలు, చేల గట్ల వెంట తంగేడు, గునుగు, కట్ల పూలు సహజంగా వికసిస్తాయి.',
          },
          {
            en: 'Both Boddemma and Bathukamma honor this exact seasonal threshold—when water, clay (puttamatti), blooming herbs, and early grain harvests converge.',
            te: 'నీరు, పుట్టమట్టి, అడవి పూలు, కొత్త పంటలు ఒక్కచోట చేరే ఈ అపురూప కాలాన్నే బొడ్డెమ్మ, బతుకమ్మ పండుగలుగా తెలంగాణ సమాజం ఆరాధిస్తుంది.',
          },
        ],
      },
      {
        heading: {
          en: '2. Why Uncultivated Wildflowers Take Center Stage',
          te: '2. సాగు చేయని అడవి పూలకే ఎందుకు ప్రాధాన్యం?',
        },
        paragraphs: [
          {
            en: 'A defining feature of Bathukamma is that its primary blossoms—Tangedu (Senna auriculata), Gunugu (Celosia argentea), and Katla—are not commercial greenhouse flowers. They grow freely on village commons, scrubland bunds, and forest margins, making the festival accessible to every household regardless of landholding.',
            te: 'బతుకమ్మలో వాడే ప్రధాన పూలైన తంగేడు, గునుగు, కట్ల పూలు తోటల్లో ప్రత్యేకంగా సాగు చేసేవి కావు. అవి ఊరి బయట, బంజరు భూముల్లో, చేల గట్లపై సహజంగా పెరుగుతాయి. అందుకే ధనిక, పేద తేడా లేకుండా ప్రతి ఇంటి ఆడబిడ్డ ఈ పూలను సేకరించి బతుకమ్మను పేర్చగలుగుతుంది.',
          },
        ],
      },
      {
        heading: {
          en: '3. Immersion (Nimajjanam) and Responsible Stewardship',
          te: '3. చెరువులో నిమజ్జనం మరియు పర్యావరణ బాధ్యత',
        },
        paragraphs: [
          {
            en: 'During traditional immersion, only biodegradable leaves (gummadi or tamara), uncultivated petals, and natural turmeric are released into the tank while the brass tambalam is brought back home. Modern conservation guidance emphasizes avoiding synthetic chemical dyes on Gunugu plumes and never using plastic trays or non-biodegradable glitter.',
            te: 'నిమజ్జనం సమయంలో గుమ్మడి ఆకులు, సహజమైన పూలు, పసుపు గౌరమ్మను మాత్రమే నీటిలో వదిలి ఇత్తడి తాంబాలాన్ని ఇంటికి తెచ్చుకుంటారు. నేడు గునుగు పూలకు రసాయన రంగులకు బదులు సహజ రంగులను వాడటం చెరువుల పర్యావరణ పరిరక్షణకు ఎంతో అవసరం.',
          },
        ],
      },
    ],
    sourceIds: ['SRC-TS-PORTAL', 'SRC-BSI-FLORA', 'SRC-TANK-ECOLOGY'],
  },
  {
    id: 'art-2',
    slug: 'puttamatti-and-girlhood-understanding-boddemma',
    category: 'Boddemma Heritage',
    categoryLabel: { en: 'Boddemma Heritage', te: 'బొడ్డెమ్మ వారసత్వం' },
    evidenceClassification: {
      en: 'Ethnographic & Cultural Documentation',
      te: 'సాంస్కృతిక & జానపద అధ్యయనం',
    },
    title: {
      en: 'Puttamatti and Girlhood: How Boddemma Prepares the Village Courtyard for Bathukamma',
      te: 'పుట్టమట్టి మరియు బాల్యం: బతుకమ్మకు ముందే పల్లె వాకిళ్లను ముస్తాబు చేసే బొడ్డెమ్మ',
    },
    excerpt: {
      en: 'An ethnographic look at how young girls across Telangana sculpt stepped clay altars, learn communal rhythm, and initiate the eighteen-day autumn festival cycle.',
      te: 'తెలంగాణ పల్లెల్లో కన్నెపిల్లలు పుట్టమట్టితో గద్దెలు కట్టి, కోలిరో పాటలు పాడుతూ బతుకమ్మ పండుగకు ఎలా స్వాగతం పలుకుతారో వివరించే వ్యాసం.',
    },
    readingTimeMinutes: 6,
    publishedDate: '2026-09-20',
    lastReviewedDate: '2026-10-11',
    authorRole: {
      en: 'Boddemma.com Cultural Documentation Desk (The Panchayithi Network)',
      te: 'Boddemma.com సాంస్కృతిక పరిశోధనా విభాగం (ది పంచాయితీ నెట్‌వర్క్)',
    },
    reviewerRole: {
      en: 'Verified against Department of Language & Culture Folklore Records',
      te: 'భాషా సాంస్కృతిక శాఖ జానపద ఆధారాలతో ధృవీకరించబడింది',
    },
    heroImage: GENERATED_ASSETS.boddemmaClay,
    directAnswerSummary: {
      en: 'Boddemma is a nine-day earthen festival celebrated primarily by unmarried girls and women in Telangana leading up to Mahalaya Amavasya. Crafted from termite-mound clay (puttamatti) into a stepped pyramid and adorned with lime, turmeric, kumkuma, and seasonal flowers, it serves as the cultural and chronological prelude to Bathukamma.',
      te: 'బొడ్డెమ్మ అనేది మహాలయ అమావాస్యకు ముందు తొమ్మిది రోజుల పాటు తెలంగాణలో కన్నెపిల్లలు, మహిళలు జరుపుకునే మట్టి గద్దె పండుగ. పుట్టమట్టితో మెట్లుగా నిర్మించి సున్నం, పసుపు, కుంకుమ, పూలతో అలంకరించే ఈ వేడుక బతుకమ్మకు నాంది పలుకుతుంది.',
    },
    sections: [
      {
        heading: {
          en: '1. Etymology: Why is it Called Boddemma?',
          te: '1. "బొడ్డెమ్మ" అనే పేరు ఎలా వచ్చింది?',
        },
        paragraphs: [
          {
            en: 'Linguistic and folkloric scholars note two closely related meanings for the word Boddemma. In Telugu vernacular, "Boddi" or "Boddadu" affectionately refers to a young child or girl, while "Boddu" signifies the navel or the origin of life and fertility. Thus, Boddemma represents Goddess Gauri in the tender form of a young girl as well as the generative earth itself.',
            te: 'భాషా, జానపద పరిశోధకుల ప్రకారం "బొడ్డెమ్మ" అనే పదానికి రెండు ప్రధాన అర్థాలు ఉన్నాయి. వాడుక భాషలో చిన్న ఆడపిల్లను ప్రేమగా "బొడ్డి" అని పిలుస్తారు; అలాగే "బొడ్డు" అంటే సృష్టికి మూలమైన నాభి అని అర్థం. బాల గౌరీదేవిని పసిబిడ్డగా, భూమాత ప్రతిరూపంగా కొలిచే పండుగ కాబట్టి దీనికి బొడ్డెమ్మ అని పేరు వచ్చింది.',
          },
        ],
      },
      {
        heading: {
          en: '2. Intergenerational Apprenticeship in the Courtyard',
          te: '2. తరతరాల సంస్కృతిని నేర్పే ముంగిలి పాఠశాల',
        },
        paragraphs: [
          {
            en: 'While Bathukamma involves massive multi-generational circles and intricate floral engineering, Boddemma places young girls at the center of ritual leadership. Grandmothers and mothers guide them in kneading puttamatti, drawing geometric muggulu, and singing the shorter, brisker "Koliro" verses.',
            te: 'బతుకమ్మ పెద్దలతో కూడిన మహా వేడుక అయితే, బొడ్డెమ్మ చిన్నపిల్లలకు సంప్రదాయాలను నేర్పే తొలి మెట్టు. అమ్మమ్మలు, తల్లుల మార్గదర్శనంలో పిల్లలు పుట్టమట్టి తేవడం, గద్దె కట్టడం, ముగ్గులు వేయడం, కోలిరో పాటలు పాడటం నేర్చుకుంటారు.',
          },
        ],
      },
    ],
    sourceIds: ['SRC-DEPT-CULTURE', 'SRC-TS-PORTAL'],
  },
  {
    id: 'art-3',
    slug: 'oral-poetics-of-uyyalo-and-chandamama-songs',
    category: 'Oral Literature',
    categoryLabel: { en: 'Oral Literature', te: 'మౌఖిక సాహిత్యం' },
    evidenceClassification: {
      en: 'Literary & Ethnomusicological Analysis',
      te: 'జానపద సాహిత్య విశ్లేషణ',
    },
    title: {
      en: 'The Poetics of Uyyalo, Chandamama, and Koliro: How Women Preserved Telangana’s History in Song',
      te: 'ఉయ్యాలో, చందమామ, కోలిరో: పాటల రూపంలో తెలంగాణ చరిత్రను కాపాడిన మహిళా సాహిత్యం',
    },
    excerpt: {
      en: 'How call-and-response refrains allowed generations of rural women to compose, memorize, and transmit social history, myth, and agrarian wisdom without written manuscripts.',
      te: 'లిఖిత ప్రతులతో పనిలేకుండా కేవలం ఊతపదాలు, లయబద్ధమైన చప్పట్లతో తరతరాలుగా సామాజిక చరిత్రను, పురాణ కథలను భద్రపరిచిన మహిళల గీత సంపద.',
    },
    readingTimeMinutes: 8,
    publishedDate: '2026-09-28',
    lastReviewedDate: '2026-10-11',
    authorRole: {
      en: 'Boddemma.com Cultural Documentation Desk (The Panchayithi Network)',
      te: 'Boddemma.com సాంస్కృతిక పరిశోధనా విభాగం (ది పంచాయితీ నెట్‌వర్క్)',
    },
    reviewerRole: {
      en: 'Reviewed against Telangana Jaanapada Sahitya Archives',
      te: 'తెలంగాణ జానపద సాహిత్య ఆధారాలతో సమీక్షించబడింది',
    },
    heroImage: GENERATED_ASSETS.circleDance,
    directAnswerSummary: {
      en: 'Bathukamma and Boddemma songs constitute one of South Asia’s largest living bodies of women-authored oral literature. Structured around recurring refrains—"Uyyalo", "Chandamama", "Valalo", "Gouramma", and "Koliro"—they weave together Puranic narratives, sisterly solidarity, farming life, and ethical reflections.',
      te: 'బొడ్డెమ్మ, బతుకమ్మ పాటలు భారతీయ మహిళా మౌఖిక సాహిత్యంలోనే అత్యంత విశిష్టమైనవి. "ఉయ్యాలో", "చందమామ", "వల్లోల", "కోలిరో" అనే ఊతపదాల ఆధారంగా పల్లె మహిళలు తమ జీవన అనుభవాలను, పురాణ గాథలను, ప్రకృతి వర్ణనలను పాటలుగా మలిచారు.',
    },
    sections: [
      {
        heading: {
          en: '1. Acoustic Architecture of the Circle',
          te: '1. వలయాకార ఆట మరియు పాటల లయ',
        },
        paragraphs: [
          {
            en: 'Because the songs are performed outdoors in an open courtyard without amplification, the circular formation directs every singer’s voice toward the floral center. One experienced singer leads each couplet (పాదం), and the entire ring responds with the refrain ("Uyyalo" or "Chandamama") while executing a synchronized step-and-clap.',
            te: 'ఆరుబయట వాకిట్లో ఎలాంటి మైకులు లేకుండా పాడేటప్పుడు, వలయాకారంలో తిరుగుతూ పాడటం వల్ల అందరి గొంతులు బతుకమ్మ కేంద్రం వైపు ప్రతిధ్వనిస్తాయి. ఒక్కరు పాదం ఎత్తుకుంటే, మిగతా వారంతా "ఉయ్యాలో" లేదా "చందమామ" అంటూ చప్పట్లతో శ్రుతి కలుపుతారు.',
          },
        ],
      },
      {
        heading: {
          en: '2. Distinguishing Traditional Oral Ballads from Modern Recorded Songs',
          te: '2. సాంప్రదాయ జానపద గీతాలు మరియు ఆధునిక రికార్డింగ్ పాటల మధ్య తేడా',
        },
        paragraphs: [
          {
            en: 'In recent decades, studio-recorded DJ tracks and film songs have become common at urban junctions. Boddemma.com strictly distinguishes unamplified public-domain village oral ballads—sung directly by women in their own voices—from commercial studio compositions.',
            te: 'ఇటీవల పట్టణాల్లో రికార్డు చేసిన సినిమా/ప్రైవేట్ పాటల వినియోగం పెరిగినప్పటికీ, మహిళలు స్వయంగా తమ గొంతుకతో పాడే సాంప్రదాయ మౌఖిక గీతాలే బతుకమ్మకు అసలైన ప్రాణం. మా వేదికపై ఈ సాంప్రదాయ గీతాలను ప్రత్యేకంగా భద్రపరుస్తున్నాము.',
          },
        ],
      },
    ],
    sourceIds: ['SRC-DEPT-CULTURE'],
  },
  {
    id: 'art-4',
    slug: 'botanical-guide-to-tangedu-and-gunugu',
    category: 'Botanical Research',
    categoryLabel: { en: 'Botanical Research', te: 'వృక్షశాస్త్ర పరిశోధన' },
    evidenceClassification: {
      en: 'Verified Botanical & Ethnobotanical Study',
      te: 'వృక్షశాస్త్ర & సాంప్రదాయ విజ్ఞానం',
    },
    title: {
      en: 'Field Botany of Bathukamma: Identifying Senna auriculata, Celosia argentea, and Seasonal Flora',
      te: 'బతుకమ్మ పూల వృక్షశాస్త్రం: తంగేడు, గునుగు మరియు కాలానుగుణ పూల శాస్త్రీయ గుర్తింపు',
    },
    excerpt: {
      en: 'A field guide to the morphology, taxonomy, and ecological habitats of Telangana’s sacred festival flowers—with clear cautions against look-alike species.',
      te: 'తెలంగాణ పూల పండుగలో ఉపయోగించే ప్రధాన పుష్పాల శాస్త్రీయ నామాలు, ఆకృతి మరియు వాటిని పోలిన ఇతర మొక్కలతో పొరబడకుండా తీసుకోవాల్సిన జాగ్రత్తలు.',
    },
    readingTimeMinutes: 6,
    publishedDate: '2026-10-01',
    lastReviewedDate: '2026-10-11',
    authorRole: {
      en: 'Boddemma.com Botanical & Heritage Research Desk',
      te: 'Boddemma.com వృక్షశాస్త్ర & వారసత్వ విభాగం',
    },
    reviewerRole: {
      en: 'Cross-checked with Botanical Survey of India (Flora of Telangana)',
      te: 'బొటానికల్ సర్వే ఆఫ్ ఇండియా (Flora of Telangana) ఆధారాలతో సరిచూడబడింది',
    },
    heroImage: GENERATED_ASSETS.botanicalFlowers,
    directAnswerSummary: {
      en: 'The iconic Bathukamma floral cone relies on a precise botanical pairing: the flat golden corymbs of Tangedu (Senna auriculata, family Fabaceae) provide horizontal ring stability, while the tapering feathery spikes of Gunugu (Celosia argentea, family Amaranthaceae) provide vertical height.',
      te: 'బతుకమ్మ గోపుర నిర్మాణంలో తంగేడు (Senna auriculata) పూల గుత్తులు అడ్డంగా వలయాకార పునాదిని ఇస్తే, గునుగు (Celosia argentea) పూల కంకులు నిలువుగా ఎత్తును, దృఢత్వాన్ని ఇస్తాయి.',
    },
    sections: [
      {
        heading: {
          en: '1. Morphological Key to Senna auriculata (Tangedu)',
          te: '1. తంగేడు (Senna auriculata) మొక్కను గుర్తించే లక్షణాలు',
        },
        paragraphs: [
          {
            en: 'Senna auriculata is immediately recognizable in the field by its persistent, lunar/ear-shaped stipules (auricles) at the base of each leaf rachis—the very trait that gives the species its Latin name auriculata. Its bright yellow flowers grow in terminal and axillary corymbs and retain their color long after harvesting.',
            te: 'తంగేడు ఆకు కాడ మొదట్లో చెవి ఆకారంలో ఉండే చిన్న నిర్మాణాల (auricles) వల్లే దీనికి Senna auriculata అనే శాస్త్రీయ నామం వచ్చింది. కోసిన తర్వాత కూడా ఎక్కువ సమయం పాటు వాడిపోకుండా బంగారు రంగులో మెరవడం దీని ప్రత్యేకత.',
          },
        ],
      },
    ],
    sourceIds: ['SRC-BSI-FLORA', 'SRC-TS-PORTAL'],
  },
  {
    id: 'art-5',
    slug: 'nine-days-of-naivedyam-agrarian-nutrition',
    category: 'Culinary Traditions',
    categoryLabel: { en: 'Culinary Traditions', te: 'ఆహార సంప్రదాయాలు' },
    evidenceClassification: {
      en: 'Cultural & Nutritional Documentation',
      te: 'సాంస్కృతిక & ఆహార సంప్రదాయ అధ్యయనం',
    },
    title: {
      en: 'From Nuvvulu to Sattu Pindi: The Agrarian Wisdom Behind Bathukamma’s Nine Daily Offerings',
      te: 'నువ్వుల నుండి సత్తుపిండి వరకు: తొమ్మిది రోజుల బతుకమ్మ నైవేద్యాల వెనుక ఉన్న పోషకాహార విజ్ఞానం',
    },
    excerpt: {
      en: 'Why every day of Bathukamma pairs freshly harvested sesame, pulses, flattened paddy, jaggery, and roasted grains into shared community vayanalu.',
      te: 'బతుకమ్మ తొమ్మిది రోజుల్లో సమర్పించే నువ్వులు, అటుకులు, ముద్దపప్పు, నానబియ్యం, వెన్నముద్దలు, సత్తుపిండి మన పల్లె పంటలకు, ఆరోగ్యానికి ఎలా ప్రతీకగా నిలుస్తాయో తెలుసుకోండి.',
    },
    readingTimeMinutes: 5,
    publishedDate: '2026-10-04',
    lastReviewedDate: '2026-10-11',
    authorRole: {
      en: 'Boddemma.com Cultural Documentation Desk (The Panchayithi Network)',
      te: 'Boddemma.com సాంస్కృతిక పరిశోధనా విభాగం (ది పంచాయితీ నెట్‌వర్క్)',
    },
    reviewerRole: {
      en: 'Reviewed against Traditional Telangana Culinary Records',
      te: 'తెలంగాణ సాంప్రదాయ ఆహార ఆధారాలతో సమీక్షించబడింది',
    },
    heroImage: GENERATED_ASSETS.bathukammaStack,
    directAnswerSummary: {
      en: 'Each day of Bathukamma is named after the specific agricultural offering (naivedyam) prepared from newly harvested kharif crops—sesame seeds (nuvvulu), flattened rice (atukulu), lentils (muddapappu), soaked rice (nanabiyyam), rice crepes (atlu), neem-shaped rice flour (vepakayalu), fresh butter (vennamuddalu), and five festive rice dishes with roasted grain flour (saddulu and sattu pindi).',
      te: 'బతుకమ్మ తొమ్మిది రోజుల పేర్లు ఆయా రోజుల్లో అమ్మవారికి నివేదించే ఆహార పదార్థాల నుండే వచ్చాయి. ఖరీఫ్ పంటల కాలంలో వచ్చే నువ్వులు, కొత్త బియ్యం, అటుకులు, పప్పు ధాన్యాలు, బెల్లం, వెన్నలతో ఈ నైవేద్యాలను తయారు చేస్తారు.',
    },
    sections: [
      {
        heading: {
          en: '1. Harvest-to-Hearth Continuity',
          te: '1. పంట చేల నుండి ఇంటి ముంగిలికి',
        },
        paragraphs: [
          {
            en: 'The sequence of offerings mirrors the progression of autumn farm produce in Telangana. Requiring minimal commercial ingredients, these offerings combine iron-rich jaggery, calcium-rich sesame, plant proteins from red/green gram, and slow-releasing energy from roasted corn and paddy.',
            te: 'నువ్వులు, బెల్లం, పప్పులు, వేయించిన మొక్కజొన్న, బియ్యంతో చేసే సత్తుపిండి శరదృతువు వాతావరణ మార్పుల సమయంలో శరీరానికి అవసరమైన ఇనుము, కాల్షియం మరియు శక్తిని అందిస్తాయి.',
          },
        ],
      },
    ],
    sourceIds: ['SRC-TS-PORTAL', 'SRC-DEPT-CULTURE'],
  },
];

export interface ComparisonRow {
  dimension: BilingualText;
  boddemma: BilingualText;
  bathukamma: BilingualText;
}

export const BODDEMMA_VS_BATHUKAMMA_TABLE: ComparisonRow[] = [
  {
    dimension: { en: 'Lunar Timing & Sequence', te: 'జరుపుకునే కాలం & తిథులు' },
    boddemma: {
      en: 'Celebrated for 9 days prior to Mahalaya Amavasya (during Bhadrapada Pournami / Bahula Paksha), concluding on Mahalaya Amavasya.',
      te: 'మహాలయ అమావాస్యకు ముందు 9 రోజుల పాటు (భాద్రపద బహుళ పక్షంలో) జరుపుకుని అమావాస్య నాడు ముగిస్తారు.',
    },
    bathukamma: {
      en: 'Begins on Mahalaya Amavasya (Engili Pula Bathukamma) and continues for 9 days through Ashwayuja Shukla Durgashtami (Saddula Bathukamma).',
      te: 'మహాలయ అమావాస్య నాడు (ఎంగిలి పూల బతుకమ్మగా) మొదలై ఆశ్వయుజ శుద్ధ దుర్గాష్టమి నాడు (సద్దుల బతుకమ్మతో) ముగుస్తుంది.',
    },
  },
  {
    dimension: { en: 'Core Medium & Structure', te: 'ప్రధాన నిర్మాణం & ఆకృతి' },
    boddemma: {
      en: 'Sculpted from sacred termite-mound clay (puttamatti) into a 3- or 5-tiered stepped square pyramid (gadde), painted with white lime, turmeric, and kumkuma, and decorated with flowers.',
      te: 'పుట్టమట్టితో మూడు లేదా ఐదు అంతస్తుల చతురస్రాకార గద్దెగా నిర్మించి, సున్నం, పసుపు, కుంకుమ చారలు వేసి పూలతో అలంకరిస్తారు.',
    },
    bathukamma: {
      en: 'Constructed entirely of concentric layers of seasonal flowers (Tangedu, Gunugu, Banthi, Chamanthi, Lotus) in a conical stack on a brass plate (tambalam) lined with Gummadi leaves.',
      te: 'ఇత్తడి తాంబాలంలో గుమ్మడి ఆకులు పరిచి, తంగేడు, గునుగు, బంతి, చామంతి పూలతో శంఖాకార గోపురంలా పేరుస్తారు.',
    },
  },
  {
    dimension: { en: 'Symbolic Form of the Deity', te: 'ఆరాధించే అమ్మవారి రూపం' },
    boddemma: {
      en: 'Honors Bala Gauri (Goddess Gauri in the form of a young girl/child) represented by the clay altar, a rice-filled clay gurigi (kalasham), and clay figures.',
      te: 'బాల గౌరీదేవిని పసిబిడ్డగా (బొడ్డిగా) భావించి మట్టి గద్దెపై బియ్యం నింపిన గురిగి, గౌరమ్మను ఉంచి కొలుస్తారు.',
    },
    bathukamma: {
      en: 'Honors Maha Gauri / Bathukamma ("Mother of Life") represented by the Pasupu Gouramma (sacred turmeric cone) placed at the apex of the flower stack.',
      te: 'సకల జీవరాశిని బతికించే మహా గౌరీదేవికి ప్రతీకగా పూల గోపురం పైన పసుపు గౌరమ్మను ఉంచి ఆరాధిస్తారు.',
    },
  },
  {
    dimension: { en: 'Primary Participants', te: 'ప్రధానంగా పాల్గొనేవారు' },
    boddemma: {
      en: 'Led primarily by young unmarried girls (kannepillalu) guided by mothers and grandmothers in neighborhood courtyards.',
      te: 'ప్రధానంగా కన్నెపిల్లలు, బాలికలు పెద్దల మార్గదర్శనంలో ఇంటి వాకిళ్లలో ఆడుతారు.',
    },
    bathukamma: {
      en: 'Women and girls of all ages across entire villages, towns, and global diaspora communities.',
      te: 'చిన్నాపెద్దా తేడా లేకుండా మహిళలందరూ ఊరంతా ఒక్కటై జరుపుకునే మహా వేడుక.',
    },
  },
  {
    dimension: { en: 'Songs & Rhythmic Refrains', te: 'పాటల శైలి & ఊతపదాలు' },
    boddemma: {
      en: 'Brisk, playful girlhood songs featuring the refrain "Koliro" or "Chanti Boddemma" (e.g., "Boddemma Boddemma koliro").',
      te: '"కోలిరో", "చంటి బొడ్డెమ్మ" అనే ఊతపదాలతో కూడిన లయబద్ధమైన చిన్న పాటలు ("బొడ్డెమ్మ బొడ్డెమ్మ కోలిరో...").',
    },
    bathukamma: {
      en: 'Expansive lyrical ballads and mythic narratives featuring refrains such as "Uyyalo", "Chandamama", "Valalo", and "Gouramma".',
      te: '"ఉయ్యాలో", "చందమామ", "వల్లోల", "గౌరమ్మ" అనే ఊతపదాలతో సాగే సుదీర్ఘ జానపద, పౌరాణిక గీతాలు.',
    },
  },
  {
    dimension: { en: 'Daily Offerings (Naivedyam)', te: 'నైవేద్యాలు & ప్రసాదాలు' },
    boddemma: {
      en: 'Boiled legumes/pulses (gudalu), roasted corn, soaked gram, jaggery, and seasonal fruits shared among children.',
      te: 'ఉడకబెట్టిన శనగలు, బొబ్బర్లు (గుడాలు), మొక్కజొన్న పొత్తులు, బెల్లం.',
    },
    bathukamma: {
      en: 'Nine distinct daily offerings (from sesame Nuvvulu and Atukulu to five varieties of Saddulu and Sattu Pindi on the final day, with Day 6 as a rest day).',
      te: 'తొమ్మిది రోజుల పాటు రోజుకో ప్రత్యేక నైవేద్యం (నువ్వులు, అటుకులు, ముద్దపప్పు నుండి సద్దులు, సత్తుపిండి వరకు).',
    },
  },
];

export interface FAQEntry {
  id: string;
  category: 'General' | 'Boddemma' | 'Bathukamma' | 'Flowers & Dates';
  question: BilingualText;
  answer: BilingualText;
}

export const FAQ_DATA: FAQEntry[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: {
      en: 'What is the relationship between Boddemma and Bathukamma?',
      te: 'బొడ్డెమ్మకు మరియు బతుకమ్మకు ఉన్న సంబంధం ఏమిటి?',
    },
    answer: {
      en: 'Boddemma and Bathukamma form a continuous 18-day autumn cultural cycle in Telangana. Boddemma is celebrated for nine days leading up to Mahalaya Amavasya using a stepped clay altar made of termite-mound earth (puttamatti). As Boddemma concludes on Mahalaya Amavasya (Pethramasa), the nine-day Bathukamma festival immediately begins with Engili Pula Bathukamma.',
      te: 'బొడ్డెమ్మ, బతుకమ్మలు తెలంగాణలో వరుసగా 18 రోజుల పాటు సాగే జంట పండుగలు. మహాలయ అమావాస్యకు ముందు 9 రోజులు పుట్టమట్టితో బొడ్డెమ్మ పండుగ జరుపుకుంటారు. అమావాస్య నాడు బొడ్డెమ్మ ముగియగానే ఎంగిలి పూల బతుకమ్మతో 9 రోజుల బతుకమ్మ పండుగ ప్రారంభమవుతుంది.',
    },
  },
  {
    id: 'faq-2',
    category: 'Boddemma',
    question: {
      en: 'Why is termite-mound clay (puttamatti) used to build Boddemma?',
      te: 'బొడ్డెమ్మ తయారీలో పుట్టమట్టిని ఎందుకు ఉపయోగిస్తారు?',
    },
    answer: {
      en: 'In Telangana agrarian tradition, puttamatti (earth brought up by termites from deep underground) is revered as naturally filtered, stone-free, mineral-rich, and ritually pure clay. It binds smoothly when moistened, allowing families to sculpt the three- or five-tiered stepped Boddemma platform without cracking.',
      te: 'భూమి లోపలి పొరల నుండి వచ్చే పుట్టమట్టి రాళ్లు లేకుండా మెత్తగా, జిగురుగా మరియు పవిత్రంగా ఉంటుంది. అందుకే పగుళ్లు రాకుండా ఐదు అంతస్తుల బొడ్డెమ్మ గద్దెను నిర్మించడానికి పుట్టమట్టిని వాడుతారు.',
    },
  },
  {
    id: 'faq-3',
    category: 'Bathukamma',
    question: {
      en: 'What are the nine days of Bathukamma in traditional order?',
      te: 'తొమ్మిది రోజుల బతుకమ్మ పేర్లు వరుసగా ఏమిటి?',
    },
    answer: {
      en: 'The nine days are: (1) Engili Pula Bathukamma, (2) Atukula Bathukamma, (3) Muddapappu Bathukamma, (4) Nanabiyyam Bathukamma, (5) Atla Bathukamma, (6) Aligina Bathukamma (rest day with no food offering), (7) Vepakayala Bathukamma, (8) Vennamuddala Bathukamma, and (9) Saddula Bathukamma.',
      te: '(1) ఎంగిలి పూల బతుకమ్మ, (2) అటుకుల బతుకమ్మ, (3) ముద్దపప్పు బతుకమ్మ, (4) నానబియ్యం బతుకమ్మ, (5) అట్ల బతుకమ్మ, (6) అలిగిన బతుకమ్మ (నైవేద్యం ఉండదు), (7) వేపకాయల బతుకమ్మ, (8) వెన్నముద్దల బతుకమ్మ, (9) సద్దుల బతుకమ్మ.',
    },
  },
  {
    id: 'faq-4',
    category: 'Flowers & Dates',
    question: {
      en: 'Why do Boddemma and Bathukamma dates change on the Gregorian calendar each year?',
      te: 'ఇంగ్లీష్ క్యాలెండర్ ప్రకారం ప్రతి సంవత్సరం బొడ్డెమ్మ, బతుకమ్మ తేదీలు ఎందుకు మారుతుంటాయి?',
    },
    answer: {
      en: 'Both festivals follow the Telugu luni-solar calendar (Panchangam) rather than fixed Gregorian dates. Engili Pula Bathukamma always falls on Bhadrapada Bahula Amavasya (Mahalaya Amavasya), and Saddula Bathukamma is observed on Ashwayuja Shukla Durgashtami, which shifts between late September and mid-October each year.',
      te: 'ఈ పండుగలను తెలుగు చాంద్రమాన పంచాంగం తిథుల ప్రకారం జరుపుకుంటారు. భాద్రపద బహుళ అమావాస్య నాడు బతుకమ్మ మొదలై ఆశ్వయుజ శుద్ధ దుర్గాష్టమి నాడు ముగుస్తుంది కాబట్టి, ఇంగ్లీష్ క్యాలెండర్‌లో సెప్టెంబర్–అక్టోబర్ మధ్య తేదీలు మారుతుంటాయి.',
    },
  },
  {
    id: 'faq-5',
    category: 'Bathukamma',
    question: {
      en: 'Who is Pasupu Gouramma placed at the top of Bathukamma?',
      te: 'బతుకమ్మ పైన ఉంచే పసుపు గౌరమ్మ ఎవరికి ప్రతీక?',
    },
    answer: {
      en: 'Pasupu Gouramma is a conical emblem of Goddess Gauri (the patron deity of womanhood, nature, and life force) molded from wet turmeric paste and marked with vermilion. She sits atop the floral stack and is immersed along with the flowers after women bless themselves with a pinch of her sacred turmeric.',
      te: 'పసుపు గౌరమ్మ సాక్షాత్తూ గౌరీదేవి (ప్రకృతి మాత) ప్రతిరూపం. పసుపు ముద్దతో తయారుచేసి కుంకుమ బొట్టు పెట్టి పూల గోపురం శిఖరాన ఉంచుతారు. నిమజ్జనం వేళ మహిళలు ఆ పసుపును తమ మాంగల్యానికి అద్దుకుని ఆశీస్సులు పొందుతారు.',
    },
  },
];
