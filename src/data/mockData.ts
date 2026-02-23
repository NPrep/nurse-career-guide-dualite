// Centralized mock data to simulate a content-heavy CMS

export const careerPaths = [
  {
    id: 'government-nursing-officer',
    title: 'Government Nursing Officer',
    slug: 'government-nursing-officer',
    description: 'Secure a stable, high-paying role in central or state government hospitals.',
    whoItSuits: 'Graduates seeking job security, good pay, and structured hours.',
    qualifications: ['B.Sc Nursing', 'GNM + Experience', 'Post Basic B.Sc'],
    exams: ['AIIMS NORCET', 'RRB Staff Nurse', 'ESIC', 'DSSSB'],
    growth: [
      { role: 'Nursing Officer', exp: 'Entry Level' },
      { role: 'Senior Nursing Officer', exp: '5-7 Years' },
      { role: 'Assistant Nursing Superintendent', exp: '10-15 Years' },
      { role: 'Nursing Superintendent', exp: '20+ Years' },
    ],
  },
  {
    id: 'hospital-staff-nurse',
    title: 'Hospital Staff Nurse (Private)',
    slug: 'hospital-staff-nurse-growth',
    description: 'Fast-paced clinical exposure in top private multi-specialty hospitals.',
    whoItSuits: 'Those who want immediate clinical experience and specialization opportunities.',
    qualifications: ['GNM', 'B.Sc Nursing'],
    exams: ['Hospital Specific Interviews', 'Skill Tests'],
    growth: [
      { role: 'Staff Nurse', exp: 'Entry Level' },
      { role: 'Senior Staff Nurse / Team Leader', exp: '3-5 Years' },
      { role: 'Ward In-charge', exp: '6-10 Years' },
      { role: 'Nursing Manager', exp: '12+ Years' },
    ],
  },
  {
    id: 'community-health-officer',
    title: 'Community Health Officer (CHO)',
    slug: 'community-health-officer-cho',
    description: 'Lead primary healthcare initiatives at Health & Wellness Centers.',
    whoItSuits: 'Those interested in public health and rural service.',
    qualifications: ['B.Sc Nursing (Integrated CCH)', 'GNM + CCH Certificate'],
    exams: ['State NHM CHO Exams'],
    growth: [
      { role: 'CHO', exp: 'Entry Level' },
      { role: 'Block Program Manager', exp: 'Promotion based' },
      { role: 'District Program Officer', exp: 'Senior Level' },
    ],
  },
  {
    id: 'teaching-academics',
    title: 'Teaching & Academics',
    slug: 'teaching-and-academics',
    description: 'Shape the future of nursing as a tutor, lecturer, or professor.',
    whoItSuits: 'Those with a passion for teaching and research.',
    qualifications: ['M.Sc Nursing', 'Ph.D. (for senior roles)'],
    exams: ['NET', 'State PSC for Tutors'],
    growth: [
      { role: 'Clinical Instructor / Tutor', exp: 'Entry Level' },
      { role: 'Lecturer / Assistant Professor', exp: '3-5 Years' },
      { role: 'Associate Professor', exp: '8-10 Years' },
      { role: 'Principal / Dean', exp: '15+ Years' },
    ],
  },
];

export const exams = [
  // Central Exams
  {
    id: 'norcet',
    title: 'AIIMS NORCET',
    category: 'Central',
    slug: 'aiims-norcet',
    overview: 'The Nursing Officer Recruitment Common Eligibility Test (NORCET) is the gateway to AIIMS institutes across India.',
    eligibility: 'B.Sc Nursing OR GNM + 2 Years Experience (50 bedded hospital).',
    pattern: [
      { subject: 'Nursing Subjects', questions: 180, marks: 180 },
      { subject: 'General Knowledge & Aptitude', questions: 20, marks: 20 },
    ],
    syllabus: ['Medical Surgical Nursing', 'Pediatrics', 'OBG', 'Psychiatry', 'Community Health', 'Fundamentals of Nursing'],
  },
  {
    id: 'rrb',
    title: 'RRB Staff Nurse',
    category: 'Central',
    slug: 'rrb-staff-nurse',
    overview: 'Recruitment for Nursing Superintendents and Staff Nurses in Indian Railways.',
    eligibility: 'GNM or B.Sc Nursing.',
    pattern: [
      { subject: 'Professional Ability', questions: 70, marks: 70 },
      { subject: 'General Science', questions: 10, marks: 10 },
      { subject: 'General Arithmetic', questions: 10, marks: 10 },
      { subject: 'General Intelligence', questions: 10, marks: 10 },
    ],
    syllabus: ['Anatomy', 'Physiology', 'Nutrition', 'Nursing Foundations', 'Clinical Specialties'],
  },
  {
    id: 'esic',
    title: 'ESIC Nursing Officer',
    category: 'Central',
    slug: 'esic-nursing-officer',
    overview: 'Nursing Officer posts in Employees State Insurance Corporation hospitals.',
    eligibility: 'GNM or B.Sc Nursing.',
    pattern: [
      { subject: 'Nursing Subjects', questions: 100, marks: 100 },
      { subject: 'General Aptitude', questions: 25, marks: 25 },
    ],
    syllabus: ['MSN', 'Pediatrics', 'Mental Health', 'Community Health'],
  },
  
  // State & CHO Exams
  {
    id: 'dsssb',
    title: 'DSSSB Nursing Officer',
    category: 'State (Delhi)',
    slug: 'dsssb-nursing-officer',
    overview: 'Recruitment for Nursing Officers in Delhi Government hospitals under DSSSB.',
    eligibility: 'GNM + 1 Yr Exp or B.Sc Nursing. Registration with Nursing Council.',
    pattern: [
      { subject: 'Nursing Subjects', questions: 100, marks: 100 },
      { subject: 'General Section (Math, Hindi, Eng, GK, Reasoning)', questions: 100, marks: 100 },
    ],
    syllabus: ['Nursing Core', 'General Hindi', 'General English', 'Arithmetic', 'Reasoning'],
  },
  {
    id: 'up-cho',
    title: 'UP NHM CHO',
    category: 'State/CHO',
    slug: 'up-nhm-cho',
    overview: 'Community Health Officer recruitment under National Health Mission, Uttar Pradesh.',
    eligibility: 'B.Sc Nursing with CCH or GNM + CCH.',
    pattern: [
      { subject: 'Nursing & Public Health', questions: 80, marks: 80 },
      { subject: 'General Awareness', questions: 20, marks: 20 },
    ],
    syllabus: ['Midwifery', 'Community Health', 'Primary Health Care'],
  },
  {
    id: 'bihar-cho',
    title: 'Bihar CHO / BTSC',
    category: 'State/CHO',
    slug: 'bihar-cho-btsc',
    overview: 'Recruitment for Community Health Officers and Staff Nurses by Bihar Technical Service Commission.',
    eligibility: 'GNM / B.Sc Nursing. CCH required for CHO posts.',
    pattern: [
      { subject: 'Nursing Subjects', questions: 50, marks: 100 }, // Varies by notification
      { subject: 'General Knowledge', questions: 'Varies', marks: 'Varies' },
    ],
    syllabus: ['CHN', 'Child Health', 'Maternal Health', 'Communicable Diseases'],
  },
  {
    id: 'rajasthan-cho',
    title: 'Rajasthan CHO / NHM',
    category: 'State/CHO',
    slug: 'rajasthan-cho',
    overview: 'Major recruitment drive for Community Health Officers in Rajasthan.',
    eligibility: 'B.Sc Nursing / GNM. Integrated CCH preferred.',
    pattern: [
      { subject: 'Nursing & Health', questions: 100, marks: 100 },
    ],
    syllabus: ['General Awareness', 'Basic Anatomy', 'Public Health', 'Nutrition', 'First Aid'],
  },
  {
    id: 'mp-nhm',
    title: 'MP NHM Staff Nurse',
    category: 'State/CHO',
    slug: 'mp-nhm-staff-nurse',
    overview: 'Contractual Staff Nurse and CHO vacancies under National Health Mission, Madhya Pradesh.',
    eligibility: '10+2 with PCB, B.Sc Nursing or GNM.',
    pattern: [
      { subject: 'Nursing Domain', questions: 100, marks: 100 },
    ],
    syllabus: ['Midwifery', 'CHN', 'Critical Care', 'Fundamentals'],
  },
  {
    id: 'osssc',
    title: 'OSSSC Nursing Officer',
    category: 'State (Odisha)',
    slug: 'osssc-nursing-officer',
    overview: 'Odisha Sub-ordinate Staff Selection Commission recruitment for district cadre nursing posts.',
    eligibility: 'GNM / B.Sc Nursing. Must have Odia language proficiency.',
    pattern: [
      { subject: 'Nursing (GNM Syllabus)', questions: 60, marks: 60 },
      { subject: 'Practical Skills', questions: 25, marks: 25 },
      { subject: 'Arithmetic & English', questions: 15, marks: 15 },
    ],
    syllabus: ['GNM Syllabus', 'High School Arithmetic', 'Basic English', 'Practical Procedures'],
  },
  {
    id: 'kerala-psc',
    title: 'Kerala PSC Staff Nurse',
    category: 'State (Kerala)',
    slug: 'kerala-psc-staff-nurse',
    overview: 'Recruitment for Staff Nurse Grade II in Kerala Health Services.',
    eligibility: 'B.Sc Nursing or GNM with Kerala Nursing Council Registration.',
    pattern: [
      { subject: 'Nursing Subjects', questions: 100, marks: 100 },
    ],
    syllabus: ['Anatomy', 'Physiology', 'MSN', 'Mental Health', 'Renaissance in Kerala (GK)'],
  },
  {
    id: 'hssc',
    title: 'HSSC Staff Nurse',
    category: 'State (Haryana)',
    slug: 'hssc-staff-nurse',
    overview: 'Haryana Staff Selection Commission recruitment for Health Department.',
    eligibility: 'GNM / B.Sc Nursing with Haryana Registration.',
    pattern: [
      { subject: 'General Awareness, Reasoning, Math, Science, English, Hindi', questions: 'Varies', marks: 45 }, // Approx weightage
      { subject: 'Nursing Subject', questions: 'Varies', marks: 30 },
      { subject: 'Haryana GK', questions: 'Varies', marks: 25 },
    ],
    syllabus: ['Nursing Core', 'Haryana History & Culture', 'General Aptitude'],
  }
];

export const roadmaps = [
  {
    id: '30-day-norcet',
    title: '30-Day NORCET Crash Course',
    slug: '30-day-norcet-plan',
    description: 'Intensive revision plan for the final month before AIIMS NORCET.',
    weeks: [
      { week: 1, focus: 'Major Subjects (MSN, OBG)', tasks: ['Revise Cardio/Neuro', 'Practice 200 OBG PYQs', 'Full Mock 1'] },
      { week: 2, focus: 'Minor Subjects (Peds, Psych)', tasks: ['Developmental Milestones', 'Psychopharmacology', 'Full Mock 2'] },
      { week: 3, focus: 'Community & FON', tasks: ['Epidemiology', 'Procedures & Instruments', 'Full Mock 3'] },
      { week: 4, focus: 'Aptitude & Final Revision', tasks: ['Image-based questions', 'GK/Reasoning', 'Daily Full Mocks'] },
    ],
  },
  {
    id: 'working-nurse',
    title: 'Working Nurse Study Plan',
    slug: 'working-nurse-study-plan',
    description: 'A balanced 4-hour daily schedule for nurses working shifts.',
    weeks: [
      { week: 'Ongoing', focus: 'Daily Routine', tasks: ['1 Hr: Theory (Morning)', '1 Hr: PYQs (Commute/Break)', '2 Hrs: Deep Study (Off days)'] },
    ],
  },
];

export const subjects = [
  { id: 'fon', name: 'Fundamentals of Nursing (FON)', slug: 'fon' },
  { id: 'msn', name: 'Medical Surgical Nursing (MSN)', slug: 'msn' },
  { id: 'obg', name: 'Obstetrics & Gynecology (OBG)', slug: 'obg' },
  { id: 'peds', name: 'Pediatrics', slug: 'pediatrics' },
  { id: 'chn', name: 'Community Health Nursing (CHN)', slug: 'chn' },
  { id: 'pharm', name: 'Pharmacology', slug: 'pharmacology' },
];

export const blogs = [
  {
    id: 1,
    title: 'How to Choose Your Nursing Career Path',
    slug: 'how-to-choose-nursing-career-path',
    excerpt: 'Confused between Clinical, Teaching, or Public Health? Here is a framework to decide.',
    category: 'Career Guidance',
    date: 'Updated for 2026',
  },
  {
    id: 2,
    title: 'NORCET vs RRB: Which Exam to Target?',
    slug: 'norcet-vs-rrb-which-exam-to-target',
    excerpt: 'A detailed comparison of salary, work-life balance, and exam difficulty.',
    category: 'Exam Guidance',
    date: 'Updated for 2026',
  },
  {
    id: 3,
    title: 'How to Use PYQs Effectively',
    slug: 'how-to-use-pyqs-effectively',
    excerpt: 'Don’t just solve them. Analyze them. Here is the 3-step method.',
    category: 'Study Strategy',
    date: 'Updated for 2026',
  },
  {
    id: 4,
    title: 'Nursing Exam Salary Comparison: NORCET, RRB, ESIC, CHO',
    slug: 'nursing-exam-salary-comparison',
    excerpt: 'Compare in-hand salary, allowances, and long-term growth across major exam routes.',
    category: 'Salary Insights',
    date: 'Updated for 2026',
  },
  {
    id: 5,
    title: 'Working Abroad as an Indian Nurse: Requirements & Pathways',
    slug: 'working-abroad-as-indian-nurse',
    excerpt: 'Step-by-step guidance on IELTS/OET, registration exams, and country-wise options.',
    category: 'Global Career',
    date: 'Updated for 2026',
  },
  {
    id: 6,
    title: 'Nursing Specializations After Government Job: What Next?',
    slug: 'nursing-specializations-after-government-job',
    excerpt: 'Explore ICU, oncology, dialysis, and educator tracks after joining a govt role.',
    category: 'Career Growth',
    date: 'Updated for 2026',
  },
  {
    id: 7,
    title: 'How Working Nurses Can Prepare in 3-4 Hours Daily',
    slug: 'working-nurse-3-hour-study-plan',
    excerpt: 'A realistic weekly model for shift workers preparing alongside full-time duties.',
    category: 'Study Strategy',
    date: 'Updated for 2026',
  },
];

// New Specific Data
export const pyqCollections = [
  {
    id: 'norcet',
    title: 'AIIMS NORCET Previous Year Papers',
    papers: [
      { title: 'NORCET - 3 (2022) Shift - 1', link: 'https://links.nprep.in/f2X7pvwHMZb' },
      { title: 'NORCET 3 - 2022 ; Shift-II', link: 'https://links.nprep.in/K7VH496yQZb' },
      { title: 'NORCET 7 prelims - ( sep.) 2024', link: 'https://links.nprep.in/aXOX5oZXPZb' },
      { title: 'NORCET 3 - June 2023', link: 'https://links.nprep.in/weaumiphIZb' },
      { title: 'NORCET 20 Nov, Shift 2', link: 'https://links.nprep.in/xkOMXfpAhZb' },
    ]
  },
  {
    id: 'rrb',
    title: 'RRB Staff Nurse Previous Year Papers',
    papers: [
      { title: 'RRB Shift - I (20 JULY )', link: 'https://links.nprep.in/Wm36lpRx0Zb' },
      { title: 'RRB Shift - I (21 July 2019)', link: 'https://links.nprep.in/9PwNw5DuPZb' },
      { title: 'RRB Nursing Superintendent 29 APRIL Shift 3', link: 'https://links.nprep.in/8LR9YaHPEZb' },
      { title: 'RRB Nursing Officer', link: 'https://links.nprep.in/iYJK63NtHZb' },
      { title: 'RRB Nursing Officer-2021', link: 'https://links.nprep.in/QNGYhi8GfZb' },
    ]
  },
  {
    id: 'cho',
    title: 'CHO (Community Health Officer) Papers',
    papers: [
      { title: 'MP CHO', link: 'https://links.nprep.in/OT7EWR5r3Zb' },
      { title: 'MP CHO Paper - 2022', link: 'https://links.nprep.in/EKC5ZE7r3Zb' },
      { title: 'Rajasthan CHO - 2024', link: 'https://links.nprep.in/rocuf2uwYXb' },
      { title: 'Rajasthan CHO-2023', link: 'https://links.nprep.in/J4rAoKv3ZZb' },
      { title: 'UK CHO - 2021', link: 'https://links.nprep.in/3MAAJScs3Zb' },
      { title: 'UP CHO', link: 'https://links.nprep.in/7eNfOtC51Zb' },
      { title: 'NHM Haryana CHO Official Paper (Held On_ 29 Jan 2023) PRIYA', link: 'https://links.nprep.in/SBr7raqs3Zb' },
    ]
  },
  {
    id: 'esic',
    title: 'ESIC Nursing Officer Papers',
    papers: [
      { title: 'ESIC 19 Mar, Shift 2', link: 'https://links.nprep.in/wjFgvVwa7Zb' },
      { title: 'ESIC shift 1 2016', link: 'https://links.nprep.in/8IQ1zxGs8Zb' },
      { title: 'ESIC Paper - 2019 Shift - I', link: 'https://links.nprep.in/wpMKcyDzQZb' },
      { title: 'ESIC 2019 shift 2', link: 'https://links.nprep.in/Bk1Ehoy14Zb' },
      { title: 'UPSC ESIC NO 07 July 2024', link: 'https://links.nprep.in/PKB7mMivuZb' },
    ]
  },
  {
    id: 'btsc',
    title: 'BTSC Staff Nurse Papers',
    papers: [
      { title: 'BTSC Staff Nurse', link: 'https://links.nprep.in/fCgXW8DSWZb' },
      { title: 'BTSC Staff Nurse', link: 'https://links.nprep.in/oCMagiQs8Zb' },
      { title: 'BTSC Staff Nurse', link: 'https://links.nprep.in/M23vprRs8Zb' },
      { title: 'BTSC Staff Nurse Paper- 2025', link: 'https://links.nprep.in/ZpyBui10qZb' },
    ]
  },
  {
    id: 'dsssb',
    title: 'DSSSB Nursing Officer Papers',
    papers: [
      { title: 'DSSSB Public health nurse solved paper 2015 m', link: 'https://links.nprep.in/Q7Cp7d4n8Zb' },
      { title: 'DSSSB Shift - I 28 August 2019', link: 'https://links.nprep.in/PYdwRLVs8Zb' },
      { title: 'DSSSB Shirt - II 28 AUG 2019', link: 'https://links.nprep.in/FZqrzFWs8Zb' },
      { title: 'DSSSB Shirt - II 29 Aug. 2019', link: 'https://links.nprep.in/Na51lFXs8Zb' },
      { title: 'DSSSB 29 Aug. S-I-2019', link: 'https://links.nprep.in/e6PFDXYs8Zb' },
    ]
  },
  {
    id: 'others',
    title: 'Other Institutes (SGPGI, GMCH, PGIMER)',
    papers: [
      { title: 'SGPGI Lucknow, Nursing Officer - 2022', link: 'https://links.nprep.in/Vy4XCouzQZb' },
      { title: 'Government Medical College & Hospital (GMCH), Chandigarh', link: 'https://links.nprep.in/Jol2zqwzQZb' },
      { title: 'PGIMS Rohtak - 2017', link: 'https://links.nprep.in/EWf3btIKZZb' },
      { title: 'PGIMER Chandigarh, Staff Nurse - 2015', link: 'https://links.nprep.in/w3MkLFIJZZb' },
    ]
  }
];

export const subjectTests = [
  { subject: 'MSN', link: 'https://links.nprep.in/hm3aQhddIZb' },
  { subject: 'OBG', link: 'https://links.nprep.in/cpRfJAdQPYb' },
  { subject: 'CHN', link: 'https://links.nprep.in/vGYx4MAtWZb' },
  { subject: 'Pedia', link: 'https://links.nprep.in/NbTlCc02ZZb' },
  { subject: 'Psychiatry', link: 'https://links.nprep.in/mEhGXn27ZZb' },
  { subject: 'Nutrition', link: 'https://links.nprep.in/xqzNDqLI1Zb' },
  { subject: 'Research', link: 'https://links.nprep.in/IuYQSDcC6Zb' },
];

export const mockTestLinks = [
  { title: 'NORCET', link: 'https://links.nprep.in/XMYlOC6F5Zb' },
  { title: 'AIIMS Nursing Officer Exams', link: 'https://links.nprep.in/u34K12Mq6Zb' },
  { title: 'KGMU Nursing Officer', link: 'https://links.nprep.in/NOfgXlxg6Zb' },
  { title: 'SGPGI Nursing Officer', link: 'https://links.nprep.in/C0hk9CHg6Zb' },
  { title: 'PGIMER', link: 'https://links.nprep.in/X6m4Q62F6Zb' },
  { title: 'RRB Nursing Officer', link: 'https://links.nprep.in/pC4gYL3eSZb' },
  { title: 'AIIMS CRE', link: 'https://links.nprep.in/VpwyAGbG6Zb' },
];

export const coursesList = [
  {
    id: 'test-series',
    title: 'Test Series',
    link: 'https://qtestseries.nprep.in',
    features: [
      '30,000+ Questions - QBank(Topic Wise)',
      'Each Question with Explaination',
      'Subject Wise Tests',
      'Daily Test Series',
      'Previous Year Question Papers',
      'IBQs, Clinical Scenario Questions',
    ],
    price: null,
    tag: 'Best for Practice',
  },
  {
    id: 'rapid-revision',
    title: 'Rapid Revision 2.0',
    link: 'https://rapid.nprep.in',
    features: [
      'NORCET/ CHO/ BTSC/ KGMU/ GMCH - All Covered',
      'Complete Nursing Syllabus in 100 Hours',
      'Previous Year Papers - with Explainations',
      'Daily Test Series',
      '30,000+ Questions - QBank (Topic Wise)',
      'Subject Wise Tests',
    ],
    price: null,
    tag: 'Best for Revision',
  },
  {
    id: 'gold-batch',
    title: 'GOLD Batch',
    link: 'https://gold.nprep.in',
    features: [
      'NORCET 10 & 11/ CHO / BTSC/ KGMU/ GMCH - All Covered',
      '900 Hours - Basic to Advanced Theory (with Clinicals)',
      '100 Hrs - Rapid Revision 2.0',
      '30,000 Questions - QBank (Topic Wise)',
      'Daily Test Series',
      'Previous Year Papers',
      'Subject Wise Papers',
    ],
    price: null,
    tag: 'Comprehensive',
  },
];
