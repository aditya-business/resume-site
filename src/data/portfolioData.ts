export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: 'bars' | 'book' | 'tv' | 'mobile' | 'database' | 'cube';
  highlights: string[];
  contextLabel: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  organization: string;
  date: string;
  roleSummary: string;
  summary: string;
  accentColor: string;
  imagePath?: string;
  imageBg?: string;
  imageFit?: 'contain' | 'cover';
  imageModalAspect?: 'portrait' | 'landscape' | 'square';
  previewVariant: 'dashboard' | 'mobile' | 'brand' | 'ecommerce' | 'analytics' | 'editorial';
}

export interface ResumeEntry {
  id: string;
  title: string;
  subtitle: string;
  score: string;
  description: string;
}

export interface SkillMetric {
  name: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  projectTitle: string;
  platformMeta: string;
  rating: number;
  quote: string;
  initials: string;
  logoPath?: string;
  logoFit?: 'contain' | 'cover-circle' | 'full';
}

export interface ClientBrand {
  id: string;
  name: string;
  tagline: string;
  category: string;
  logoPath?: string;
  logoFit?: 'contain' | 'cover-circle' | 'full';
}

export interface CourseworkTab {
  id: 'iimb' | 'bhu-psych' | 'bhu-dca';
  tabLabel: string;
  title: string;
  subtitle: string;
  statusBadge: string;
  description: string;
  timelineInfo: string;
  topics: string[];
}

export interface BlogPost {
  id: string;
  category: string;
  readTime: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string[];
  previewTheme: 'studio' | 'code' | 'design';
}

export const PROFILE_INFO = {
  fullName: 'Aditya Singh',
  shortBrand: 'ADITYA',
  headlineRole: 'Undergraduate Student · IIM Bangalore & BHU',
  location: 'Varanasi, India 221001',
  phone: '+91 87967 57901',
  email: 'aditya.singh26@iimb.ac.in',
  linkedinUrl: 'https://www.linkedin.com/in/adityasinghbusiness',
  linkedinHandle: 'linkedin.com/in/adityasinghbusiness',
  resumePdfPath: '/assets/aistudio/Aditya_Singh_Resume_f045159d.pdf',
  cvPdfPath: '/assets/aistudio/Aditya_Singh_CV_14a5de02.pdf',
  portraitPath: '/assets/aistudio/me__2__498d3d18.webp',
  summary:
    'Undergraduate student pursuing a BBA in Digital Business Management at IIM Bangalore alongside Psychology, Economics, and Computer Applications at BHU. Currently gaining hands-on experience in sales, marketing, consumer behavior, and SEO.',
};

export const NAV_LINKS: NavLinkItem[] = [
  { id: 'home', label: 'HOME', href: '#home' },
  { id: 'features', label: 'SKILLS', href: '#features' },
  { id: 'portfolio', label: 'PROJECTS', href: '#portfolio' },
  { id: 'resume', label: 'RESUME', href: '#resume' },
  { id: 'testimonial', label: 'FEEDBACK', href: '#testimonial' },
  { id: 'clients', label: 'ORGANIZATIONS', href: '#clients' },
  { id: 'coursework', label: 'COURSEWORK', href: '#coursework' },
  { id: 'blog', label: 'NOTES', href: '#blog' },
  { id: 'contacts', label: 'CONTACTS', href: '#contacts' },
];

export const HERO_ROLES = [
  'BBA Student at IIM Bangalore.',
  'Psychology & CS Undergrad.',
  'Sales & Marketing Intern.',
];

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'sales-marketing',
    title: 'Sales & Marketing Internship',
    description:
      'Learning hands-on go-to-market execution as an intern—supporting cohort launches, prospect outreach, and lead follow-ups.',
    icon: 'bars',
    highlights: [
      'Supported launch of the SPECIAL 50 IPMAT batch',
      'Prepared sales call notes and prospect lists',
      'Assisted with student and parent lead follow-ups',
    ],
    contextLabel: 'Entrance UG · 09/2026 – Current',
  },
  {
    id: 'seo-optimisation',
    title: 'SEO & Search Positioning',
    description:
      'Practicing on-page SEO to improve organic click-through rates (CTR) and page visibility for educational offerings.',
    icon: 'database',
    highlights: [
      'Audited and improved website page positioning',
      'Worked on CTR growth through clearer page copy',
      'Aligned landing content with student search intent',
    ],
    contextLabel: 'Practical Web Growth Experience',
  },
  {
    id: 'consumer-behavior',
    title: 'Consumer Behavior Study',
    description:
      'Connecting my BA in Psychology (Minor: Economics) coursework to understand how students and families make decisions.',
    icon: 'book',
    highlights: [
      'Applying Psychology & Economics to real outreach',
      'Studying pricing clarity and trust signals',
      'Research methodology & consumer need analysis',
    ],
    contextLabel: 'Banaras Hindu University · BA Psychology',
  },
  {
    id: 'content-presentation',
    title: 'Presentations & Content',
    description:
      'Building strong verbal communication, pitch decks for case competitions, and social posts aligned with brand books.',
    icon: 'tv',
    highlights: [
      'Created social media posts for Entrance UG programs',
      'Presented in IIM Bangalore & LSR case competitions',
      'Active in UNHRC Veto Conclave & debating',
    ],
    contextLabel: 'Communication & Case Competitions',
  },
  {
    id: 'data-python',
    title: 'Data Analysis & Python',
    description:
      'Developing analytical thinking, Python fundamentals, and Microsoft Office skills through my UG Diploma in Computer Science.',
    icon: 'cube',
    highlights: [
      'Coursework in Computer Applications & Python',
      'Attended workshops & seminars on Cybersecurity',
      'Structured problem-solving via McKinsey Forward',
    ],
    contextLabel: 'BHU UG Diploma · McKinsey Forward',
  },
  {
    id: 'team-hr',
    title: 'Teamwork & Project Execution',
    description:
      'Collaborating across student teams and remote marketing peers with clear project planning and human resource awareness.',
    icon: 'mobile',
    highlights: [
      'Collaborated across sales and marketing teams',
      'Focused on team building & reliable execution',
      'Active in quizzes, chess, and cultural arts (Flute)',
    ],
    contextLabel: 'IIM Bangalore & Co-Curriculars',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'SPECIAL 50 Batch Launch (IPMAT 2027)',
    category: 'INTERNSHIP PROJECT',
    organization: 'Entrance UG (Remote, India)',
    date: '09/2026 – Current',
    roleSummary: 'Sales & Marketing Intern',
    summary:
      'Helped plan and execute the launch of the SPECIAL 50 cohort preparing 50 aspiring students for IPM exams—centered on daily personalised mentor sessions with daily targets, a curated study library at no extra cost, accessible pricing below total IPM exam form fees, and a 3-day instant refund policy.',
    accentColor: '#FF014F',
    imagePath: '/assets/aistudio/special50_post_3e53bed9.png',
    imageBg: '#062B34',
    imageModalAspect: 'portrait',
    previewVariant: 'dashboard',
  },
  {
    id: 'p2',
    title: 'Website SEO, CTR & Page Positioning',
    category: 'SEO PRACTICE',
    organization: 'Entrance UG Web Offerings',
    date: '2026 – Current',
    roleSummary: 'SEO & Growth Intern Work',
    summary:
      'Worked on SEO across Entrance UG pages throughout my internship tenure, refining page positioning and helping improve organic click-through rates (CTR) for prospective students.',
    accentColor: '#1E2125',
    imagePath: '/assets/aistudio/Screenshot_2026-11-16_183150_881715e4.png',
    imageBg: '#FFFFFF',
    imageModalAspect: 'landscape',
    previewVariant: 'analytics',
  },
  {
    id: 'p3',
    title: 'Student & Parent Outreach Campaigns',
    category: 'OUTREACH & CONTENT',
    organization: 'Entrance UG Admissions',
    date: '2026 – Current',
    roleSummary: 'Outreach, Social Posts & Follow-Ups',
    summary:
      'Created promotional social media posts aligned with the Entrance UG brand book, prepared sales call notes and prospect lists for team review, and assisted with lead follow-ups.',
    accentColor: '#2B3038',
    imagePath: '/assets/aistudio/eug_92627af6.jpeg',
    imageBg: '#08242B',
    imageFit: 'cover',
    imageModalAspect: 'square',
    previewVariant: 'mobile',
  },
  {
    id: 'p4',
    title: 'McKinsey Forward Program',
    category: 'LEARNING PROGRAM',
    organization: 'McKinsey & Company — Forward',
    date: '2026 – Current',
    roleSummary: 'Enrolled Participant',
    summary:
      'Enrolled in the McKinsey Forward program, participating in the Mindsets for Growth webinar and building structured problem-solving skills.',
    accentColor: '#FF014F',
    imagePath: '/assets/aistudio/Screenshot_2026-11-16_183853_720b491b.png',
    imageBg: '#0134C2',
    imageModalAspect: 'landscape',
    previewVariant: 'brand',
  },
  {
    id: 'p5',
    title: 'IIM Bangalore Nexus & Conclave Cases',
    category: 'CASE COMPETITIONS',
    organization: 'IIM Bangalore & LSR (Delhi University)',
    date: '2026',
    roleSummary: 'Case Competition Participant',
    summary:
      'Participated in Nexus by IIM Bangalore, the IIM Bangalore Conclave Case Competition, and the Lady Shri Ram College (University of Delhi) case competition as an undergraduate competitor.',
    accentColor: '#0F172A',
    imagePath: '/assets/aistudio/dbeee_05134f3a.jpg',
    imageBg: '#FFFFFF',
    imageFit: 'cover',
    imageModalAspect: 'landscape',
    previewVariant: 'ecommerce',
  },
  {
    id: 'p6',
    title: 'UNHRC Veto Conclave & IIM Rohtak Quiz',
    category: 'STUDENT ACTIVITIES',
    organization: 'UNHRC · IIM Rohtak · NCSC',
    date: '2025 – 2026',
    roleSummary: 'Delegate & Quiz Participant',
    summary:
      'Participated in the Veto Conclave (UNHRC), IIM Rohtak Quiz, and National Children Science Congress—developing public speaking, debate, and analytical thinking skills.',
    accentColor: '#3C3E41',
    imagePath: '/assets/aistudio/Screenshot_2026-11-16_194628_90e4d0b0.png',
    imageBg: '#FFFFFF',
    imageFit: 'contain',
    imageModalAspect: 'square',
    previewVariant: 'editorial',
  },
];

export const EDUCATION_ENTRIES: ResumeEntry[] = [
  {
    id: 'edu-1',
    title: 'BBA: Digital Business Management',
    subtitle: 'Indian Institute of Management, Bangalore (Expected 09/2029)',
    score: 'Student',
    description:
      'Currently enrolled undergraduate student. Completed online coursework on Business Communication, Marketing Fundamentals, Financial Statements, and Business Performance, and participated in Nexus by IIM Bangalore and the IIM Bangalore Conclave Case Competition.',
  },
  {
    id: 'edu-2',
    title: 'Bachelor of Arts: Psychology (Minor: Economics)',
    subtitle: 'Banaras Hindu University, Varanasi (Expected 10/2030)',
    score: 'Student',
    description:
      'Currently enrolled with a Major in Psychology and Minor in Economics—connecting classroom learning directly to consumer behavior, sales, and marketing.',
  },
  {
    id: 'edu-3',
    title: 'UG Diploma in Computer Applications: Computer Science',
    subtitle: 'Banaras Hindu University, Varanasi (Expected 11/2029)',
    score: 'Student',
    description:
      'Currently enrolled in Computer Applications. Attended workshops and seminars on Cybersecurity while studying Python, data analysis, research methodology, and Microsoft Office.',
  },
  {
    id: 'edu-4',
    title: 'Class XII (Senior Secondary) — PCB',
    subtitle: 'Maharishi Ved Vyas Academy · CBSE Board',
    score: '76%',
    description:
      'Completed Senior Secondary (12th) education under the Central Board of Secondary Education (CBSE) with core subjects Physics, Chemistry, and Biology.',
  },
  {
    id: 'edu-5',
    title: 'Class X (Secondary)',
    subtitle: 'Maharishi Vidya Mandir · CBSE Board',
    score: '84%',
    description:
      'Completed Secondary (10th) schooling under the Central Board of Secondary Education (CBSE) with an overall aggregate score of 84%.',
  },
];

export const CERTIFICATIONS_ENTRIES: ResumeEntry[] = [
  {
    id: 'cert-1',
    title: 'McKinsey Forward Program',
    subtitle: 'McKinsey & Company',
    score: 'Enrolled',
    description:
      'Enrolled in the McKinsey Forward program—participating in the Mindsets for Growth webinar and Problem Solving coursework.',
  },
  {
    id: 'cert-3',
    title: 'Junior Diploma in Instrumental Music (Flute)',
    subtitle: 'Prayag Sangeet Samiti',
    score: 'Certified',
    description:
      'Earned a Junior Diploma in instrumental flute performance alongside academic studies.',
  },
];

export const EXPERIENCE_ENTRIES: ResumeEntry[] = [
  {
    id: 'exp-1',
    title: 'Sales and Marketing Intern',
    subtitle: 'Entrance UG, Remote, India (09/2026 – Current)',
    score: 'Intern',
    description:
      'Planned and executed the launch of the SPECIAL 50 batch for IPMAT aspirants. Generated leads and conversions, worked on SEO to improve CTR and page positioning, prepared sales call notes and prospect lists, created social media posts, and assisted with lead follow-up.',
  },
  {
    id: 'exp-2',
    title: 'Student Outreach & Brand Collaboration',
    subtitle: 'Entrance UG Admissions Campaigns (2026 – Current)',
    score: 'Remote',
    description:
      'Collaborated with sales and marketing team members on customer outreach strategies, created promotional posts aligned with the Entrance UG brand book, and supported admissions outreach.',
  },
];

export const KEY_PROJECT_ENTRIES: ResumeEntry[] = [
  {
    id: 'proj-1',
    title: 'Key Project: SPECIAL 50 Launch (IPMAT 2027)',
    subtitle: '50 Aspiring Students · Entrance UG Cohort',
    score: 'Internship',
    description:
      'Supported the launch and promotion built around daily personalised mentor sessions with daily targets, a curated study library at no extra cost, accessible pricing below total IPM exam form fees, and a 3-day instant refund policy.',
  },
  {
    id: 'proj-2',
    title: 'SEO CTR & Page Positioning Work',
    subtitle: 'Entrance UG Website Pages',
    score: 'Ongoing',
    description:
      'Practiced on-page SEO throughout my internship tenure to help improve website CTR and organic search positioning.',
  },
];

export const DESIGN_SKILLS: SkillMetric[] = [
  { name: 'Customer Engagement & Outreach' },
  { name: 'Presentation & Verbal Communication' },
  { name: 'Content Creation & Social Posts' },
  { name: 'SEO & Website CTR Practice' },
  { name: 'Human Resource & Team Building' },
];

export const DEV_SKILLS: SkillMetric[] = [
  { name: 'Data Analysis & Research Methodology' },
  { name: 'Project Planning & Analytical Thinking' },
  { name: 'Microsoft Office' },
  { name: 'Python (Undergraduate Study)' },
  { name: 'English (C2) & Hindi (Native)' },
];

export const INTERVIEW_ENTRIES: ResumeEntry[] = [
  {
    id: 'act-1',
    title: 'Veto Conclave — UNHRC',
    subtitle: 'Student Debate & Policy Forum',
    score: 'Participant',
    description:
      'Practiced structured debating, policy research, and confident public speaking in committee sessions.',
  },
  {
    id: 'act-2',
    title: 'Case Competitions — IIM Bangalore & LSR (DU)',
    subtitle: 'Nexus by IIMB · IIMB Conclave · Lady Shri Ram College',
    score: 'Competitor',
    description:
      'Collaborated with student teams on business cases, market analysis, and structured presentations.',
  },
  {
    id: 'act-3',
    title: 'IIM Rohtak Quiz & National Children Science Congress',
    subtitle: 'Student Quiz & Science Inquiry',
    score: 'Participant',
    description:
      'Participated in national student quiz and science inquiry events beyond regular classroom coursework.',
  },
];

export const LANGUAGES_AND_INTERESTS: ResumeEntry[] = [
  {
    id: 'lang-1',
    title: 'Languages — English (C2) & Hindi (Native)',
    subtitle: 'Academic & Outreach Communication',
    score: 'C2 / Native',
    description:
      'Proficient (C2) in English for academic coursework, presentations, and outreach, alongside Native fluency in Hindi.',
  },
  {
    id: 'int-2',
    title: 'Interests & Hobbies',
    subtitle: 'Beyond the Classroom',
    score: 'Active',
    description:
      'Public speaking, debating, case competitions, playing chess, playing instrumental flute, and gaming.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Entrance UG Team',
    role: 'Internship Mentors & Peers',
    company: 'Entrance UG (Remote, India)',
    projectTitle: 'SPECIAL 50 Batch Launch (IPMAT 2027)',
    platformMeta: 'Internship · 09/2026 – Current',
    rating: 5,
    quote:
      'As a student intern, Aditya stepped up with strong ownership during the SPECIAL 50 launch—preparing clear sales call notes, assisting with parent follow-ups, creating brand-consistent social posts, and contributing steadily to SEO work.',
    initials: 'EU',
    logoPath: '/assets/aistudio/eug_92627af6.jpeg',
    logoFit: 'full',
  },
  {
    id: 't2',
    name: 'IIM Bangalore Case Teammates',
    role: 'Undergraduate Peers',
    company: 'Nexus & IIMB Conclave',
    projectTitle: 'Student Case Competitions',
    platformMeta: 'IIM Bangalore · LSR University of Delhi',
    rating: 5,
    quote:
      'Aditya brings genuine curiosity across Digital Business Management and Psychology—communicating ideas clearly in presentations and keeping our student team organized under tight competition timelines.',
    initials: 'IB',
    logoPath: '/assets/aistudio/iimb_55f875ad.webp',
    logoFit: 'contain',
  },
];

export const CLIENT_CATEGORIES = [
  'All Highlights',
  'Universities',
  'Internship',
  'Programs',
  'Competitions',
  'Certifications',
];

export const CLIENT_BRANDS: ClientBrand[] = [
  {
    id: 'c1',
    name: 'IIM Bangalore',
    tagline: 'BBA DIGITAL BUSINESS',
    category: 'Universities',
    logoPath: '/assets/aistudio/iimb_55f875ad.webp',
    logoFit: 'contain',
  },
  {
    id: 'c2',
    name: 'Banaras Hindu University',
    tagline: 'BA PSYCHOLOGY & UG DCA',
    category: 'Universities',
    logoPath: '/assets/logos/bhu_seal.png',
    logoFit: 'contain',
  },
  {
    id: 'c3',
    name: 'Entrance UG',
    tagline: 'SALES & MARKETING INTERN',
    category: 'Internship',
    logoPath: '/assets/aistudio/eug_92627af6.jpeg',
    logoFit: 'full',
  },
  {
    id: 'c4',
    name: 'McKinsey Forward',
    tagline: 'PROBLEM SOLVING PROGRAM',
    category: 'Programs',
    logoPath: '/assets/aistudio/mc_1e8e86b9.png',
    logoFit: 'contain',
  },
  {
    id: 'c5',
    name: 'LSR (Delhi University)',
    tagline: 'CASE COMPETITION',
    category: 'Competitions',
    logoPath: '/assets/aistudio/du_4ce2c2c1.jpg',
    logoFit: 'cover-circle',
  },
  {
    id: 'c6',
    name: 'Prayag Sangeet Samiti',
    tagline: 'JUNIOR DIPLOMA (FLUTE)',
    category: 'Certifications',
    logoPath: '/assets/aistudio/pgs_97ea2300.jpg',
    logoFit: 'contain',
  },
  {
    id: 'c7',
    name: 'UNHRC Veto Conclave',
    tagline: 'DEBATE & DIPLOMACY',
    category: 'Competitions',
    logoPath: '/assets/aistudio/Screenshot_2026-11-16_194628_90e4d0b0.png',
    logoFit: 'cover-circle',
  },
  {
    id: 'c8',
    name: 'IIM Rohtak',
    tagline: 'NATIONAL QUIZ',
    category: 'Competitions',
    logoPath: '/assets/aistudio/iimr_f1135fd4.jpg',
    logoFit: 'contain',
  },
  {
    id: 'c10',
    name: 'IIM Bangalore Case Competition',
    tagline: 'NEXUS & CONCLAVE CASES',
    category: 'Competitions',
    logoPath: '/assets/aistudio/iimb_55f875ad.webp',
    logoFit: 'contain',
  },
  {
    id: 'c9',
    name: 'National Children Science Congress',
    tagline: 'STUDENT SCIENCE FORUM',
    category: 'Programs',
  },
];

export const COURSEWORK_TABS: CourseworkTab[] = [
  {
    id: 'iimb',
    tabLabel: 'IIM Bangalore',
    title: 'BBA: Digital Business Management',
    subtitle: 'Indian Institute of Management, Bangalore',
    statusBadge: 'Expected 09/2029',
    description:
      'Undergraduate management programme focused on digital business fundamentals, communication, marketing, and financial performance—paired with active participation in case competitions.',
    timelineInfo: 'Currently Enrolled · Undergraduate Management Programme',
    topics: [
      'Business Communication',
      'Marketing Fundamentals',
      'Financial Statements & Performance',
      'Nexus by IIM Bangalore',
      'IIMB Conclave Case Competition',
      'Applied Internship Alongside Studies',
    ],
  },
  {
    id: 'bhu-psych',
    tabLabel: 'BHU Psychology',
    title: 'Bachelor of Arts: Psychology',
    subtitle: 'Banaras Hindu University, Varanasi',
    statusBadge: 'Expected 10/2030',
    description:
      'Studying Psychology with a Minor in Economics—exploring human decision-making, motivation, and economic behavior alongside real-world sales and marketing work.',
    timelineInfo: 'Major: Psychology · Minor: Economics',
    topics: [
      'Consumer Behavior Foundations',
      'Research Methodology',
      'Economics Minor Coursework',
      'Human Communication & Persuasion',
      'Analytical & Critical Thinking',
      'Audience & Student Outreach Insight',
    ],
  },
  {
    id: 'bhu-dca',
    tabLabel: 'BHU Computer Apps',
    title: 'UG Diploma in Computer Applications',
    subtitle: 'Banaras Hindu University, Varanasi',
    statusBadge: 'Expected 11/2029',
    description:
      'Building technical literacy in computer science, Python programming, data analysis, and cybersecurity awareness to complement management and marketing studies.',
    timelineInfo: 'Field of Study: Computer Science',
    topics: [
      'Python Fundamentals',
      'Data Analysis Basics',
      'Cybersecurity Workshops & Seminars',
      'Microsoft Office Productivity',
      'Research & Documentation',
      'Structured Problem Solving',
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    category: 'INTERNSHIP NOTE',
    readTime: '3 min read',
    title: 'What I Learned Helping Launch the SPECIAL 50 Cohort for IPMAT Aspirants',
    date: 'October 2026',
    author: 'Aditya Singh',
    previewTheme: 'studio',
    excerpt:
      'Student reflections from my internship at Entrance UG on listening to prospective students and parents, preparing call notes, and keeping outreach transparent.',
    content: [
      'Working on the SPECIAL 50 launch as a student intern at Entrance UG showed me how much clarity matters when students and parents evaluate exam preparation.',
      'Listening carefully during outreach follow-ups and writing organized sales call notes helped our team highlight what students actually valued: daily mentor accountability, curated study material, and a fair 3-day refund policy.',
      'Seeing classroom concepts from Digital Business Management come alive in a real launch has been the highlight of my first internship.',
    ],
  },
  {
    id: 'b2',
    category: 'SEO LEARNINGS',
    readTime: '4 min read',
    title: 'Practicing On-Page SEO to Improve Website CTR and Page Positioning',
    date: 'September 2026',
    author: 'Aditya Singh',
    previewTheme: 'code',
    excerpt:
      'Notes from working on Entrance UG web pages—learning how clearer headings and search-aligned copy help students find the right academic information.',
    content: [
      'Before my internship, SEO sounded purely technical. Working directly on Entrance UG’s academic pages taught me that good SEO starts with understanding what a student is genuinely searching for.',
      'By organizing page structure and sharpening headlines, we worked toward better page positioning and stronger click-through rates (CTR).',
      'Combining analytical tracking with clear, honest writing is a skill I am continuing to practice every week.',
    ],
  },
  {
    id: 'b3',
    category: 'STUDENT REFLECTION',
    readTime: '4 min read',
    title: 'Connecting Psychology, Economics, and Digital Business as an Undergrad',
    date: 'August 2026',
    author: 'Aditya Singh',
    previewTheme: 'design',
    excerpt:
      'How studying Digital Business Management alongside Psychology, Economics, and Computer Applications shapes the way I approach case competitions and teamwork.',
    content: [
      'Pursuing Digital Business Management at IIM Bangalore while studying Psychology, Economics, and Computer Applications at BHU gives me three different lenses on the same problem.',
      'Psychology helps me notice human motivation, Economics sharpens how I think about incentives and pricing, and Computer Applications builds structured analytical habits.',
      'Whether preparing for a case competition or collaborating on a team project, connecting those perspectives makes learning genuinely exciting.',
    ],
  },
];
