import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Crack AIIMS NORCET 2025: The Ultimate Strategy Guide',
    slug: 'crack-aiims-norcet-strategy-guide',
    excerpt: 'A comprehensive 18-step guide to cracking the toughest nursing exam in India. Includes study plans, subject weightage, and common mistakes to avoid.',
    category: 'Exam Guidance',
    date: 'Jan 15, 2025',
    readTime: '12 min read',
    author: 'Nurse Career Guide Team',
    relatedSlugs: ['rrb-staff-nurse-guide', 'nursing-officer-salary-structure'],
    toc: [
      { id: 'intro', title: 'Introduction to NORCET' },
      { id: 'eligibility', title: 'Eligibility Criteria Checklist' },
      { id: 'pattern', title: 'Exam Pattern & Negative Marking' },
      { id: 'syllabus', title: 'Detailed Syllabus Breakdown' },
      { id: 'weightage', title: 'Subject-wise Weightage Analysis' },
      { id: 'study-plan', title: '3-Phase Study Plan' },
      { id: 'books', title: 'Recommended Books & Resources' },
      { id: 'pyqs', title: 'Importance of PYQs' },
      { id: 'mock-tests', title: 'Mock Test Strategy' },
      { id: 'mistakes', title: 'Common Mistakes to Avoid' },
      { id: 'exam-day', title: 'Exam Day Tips' },
      { id: 'faqs', title: 'Frequently Asked Questions' }
    ],
    sections: [
      { type: 'h2', id: 'intro', content: 'Introduction to AIIMS NORCET' },
      { type: 'paragraph', content: 'The Nursing Officer Recruitment Common Eligibility Test (NORCET) is the gateway to the most prestigious nursing jobs in India. Conducted by AIIMS New Delhi, this exam selects Nursing Officers for all AIIMS institutes across the country. It is known for its competitive nature and clinical-scenario based questions.' },
      { type: 'callout', variant: 'summary', content: 'Quick Summary: NORCET is held twice a year. It tests 200 MCQs in 3 hours. 180 questions are from Nursing subjects and 20 from General Knowledge & Aptitude.' },

      { type: 'h2', id: 'eligibility', content: 'Eligibility Criteria Checklist' },
      { type: 'table', table: {
          title: 'NORCET Eligibility Checklist',
          type: 'checklist',
          headers: ['Criteria', 'Requirement', 'Note'],
          rows: [
            { Criteria: 'Education', Requirement: 'B.Sc Nursing / Post Basic B.Sc', Note: 'No experience required' },
            { Criteria: 'Education (Alternative)', Requirement: 'GNM Diploma', Note: 'Requires 2 Years Experience in 50-bedded hospital' },
            { Criteria: 'Age Limit', Requirement: '18 - 30 Years', Note: 'Age relaxation applicable for SC/ST/OBC' },
            { Criteria: 'Registration', Requirement: 'Valid RN & RM', Note: 'Must be registered with State/Indian Nursing Council' }
          ]
        } 
      },

      { type: 'h2', id: 'pattern', content: 'Exam Pattern & Negative Marking' },
      { type: 'paragraph', content: 'Understanding the exam pattern is crucial. NORCET uses a negative marking scheme that punishes guessing. You get 3 hours to solve 200 questions. One-third (0.33) marks are deducted for every wrong answer.' },

      { type: 'h2', id: 'weightage', content: 'Subject-wise Weightage Analysis' },
      { type: 'table', table: {
          title: 'Subject Weightage (Estimated)',
          type: 'comparison',
          headers: ['Subject', 'Approx Questions', 'Priority Level'],
          rows: [
            { Subject: 'MSN + Patho + Pharm', 'Approx Questions': '40-50', 'Priority Level': '⭐⭐⭐⭐⭐' },
            { Subject: 'Fundamentals (FON)', 'Approx Questions': '30-35', 'Priority Level': '⭐⭐⭐⭐⭐' },
            { Subject: 'OBG', 'Approx Questions': '20-25', 'Priority Level': '⭐⭐⭐⭐' },
            { Subject: 'Pediatrics', 'Approx Questions': '15-20', 'Priority Level': '⭐⭐⭐⭐' },
            { Subject: 'Psychiatry', 'Approx Questions': '10-15', 'Priority Level': '⭐⭐⭐' },
            { Subject: 'CHN', 'Approx Questions': '10-12', 'Priority Level': '⭐⭐⭐' },
            { Subject: 'GK & Aptitude', 'Approx Questions': '20', 'Priority Level': '⭐⭐' }
          ]
        }
      },

      { type: 'h2', id: 'study-plan', content: '3-Phase Study Plan' },
      { type: 'steps', items: [
          'Phase 1 (Theory Completion): Focus on clearing concepts. Read standard textbooks or coaching notes. Duration: 3-4 Months.',
          'Phase 2 (MCQ Practice): Start solving topic-wise MCQs. Target 200-300 questions daily. Duration: 2 Months.',
          'Phase 3 (Revision & Mocks): Solve full-length mock tests and revise volatile topics like lab values and drug doses. Duration: 1 Month.'
        ]
      },

      { type: 'h2', id: 'mistakes', content: 'Common Mistakes to Avoid' },
      { type: 'callout', variant: 'mistake', content: 'Common Mistake: Ignoring General Aptitude. Many students miss the cutoff by 1-2 marks because they completely ignored the 20 marks of GK/Maths. Dedicate at least 30 mins daily to this section.' }
    ],
    faqs: [
      { question: 'Is GNM eligible for NORCET?', answer: 'Yes, GNM candidates are eligible if they have 2 years of experience in a minimum 50-bedded hospital.' },
      { question: 'Is there an interview in NORCET?', answer: 'No, selection is based purely on the CBT (Computer Based Test) marks and merit list.' },
      { question: 'How many times is NORCET conducted?', answer: 'Currently, AIIMS conducts NORCET twice a year (Prelims and Mains pattern may apply).' }
    ],
    glossary: [
      { term: 'CBT', definition: 'Computer Based Test - an exam taken on a computer instead of paper.' },
      { term: 'Negative Marking', definition: 'A system where marks are deducted for incorrect answers (1/3rd in NORCET).' },
      { term: 'Percentile', definition: 'A score indicating the percentage of candidates who scored equal to or below you.' }
    ]
  },
  {
    id: '2',
    title: 'RRB Staff Nurse Recruitment 2025: Complete Guide',
    slug: 'rrb-staff-nurse-guide',
    excerpt: 'Railway Recruitment Board (RRB) offers one of the best nursing jobs in India. Learn about the syllabus, exam pattern, and perks of being a Railway Nurse.',
    category: 'Exam Guidance',
    date: 'Jan 20, 2025',
    readTime: '14 min read',
    author: 'Nurse Career Guide Team',
    relatedSlugs: ['crack-aiims-norcet-strategy-guide', 'esic-nursing-officer-guide'],
    toc: [
      { id: 'intro', title: 'Why Choose RRB Staff Nurse?' },
      { id: 'eligibility', title: 'Eligibility Criteria' },
      { id: 'pattern', title: 'Exam Pattern Breakdown' },
      { id: 'syllabus', title: 'Detailed Syllabus' },
      { id: 'salary', title: 'Salary & Perks' },
      { id: 'strategy', title: 'Preparation Strategy' },
      { id: 'mistakes', title: 'Common Mistakes' },
      { id: 'faqs', title: 'Frequently Asked Questions' }
    ],
    sections: [
      { type: 'h2', id: 'intro', content: 'Why Choose RRB Staff Nurse?' },
      { type: 'paragraph', content: 'The Indian Railways is one of the largest employers in the world, and its medical department is vast. Working as a Staff Nurse (now designated as Nursing Superintendent in many zones) in Railway Hospitals is considered a "Royal Job" due to the unique perks like free travel passes and relaxed work culture compared to high-load emergency hospitals.' },
      { type: 'callout', variant: 'summary', content: 'Quick Summary: RRB exams are not annual. They happen every 2-4 years. The competition is immense, but the non-nursing section (Math/Science) often decides the winner.' },

      { type: 'h2', id: 'eligibility', content: 'Eligibility Criteria' },
      { type: 'table', table: {
          title: 'RRB Eligibility Checklist',
          type: 'checklist',
          headers: ['Parameter', 'Requirement', 'Details'],
          rows: [
            { Parameter: 'Qualification', Requirement: 'GNM / B.Sc Nursing', Details: 'Must be registered with INC/State Council.' },
            { Parameter: 'Experience', Requirement: 'Not Mandatory', Details: 'Freshers can apply (unlike AIIMS GNM requirement).' },
            { Parameter: 'Age Limit', Requirement: '20 - 40 Years', Details: 'Relaxation: OBC (3 yrs), SC/ST (5 yrs).' }
          ]
        }
      },

      { type: 'h2', id: 'pattern', content: 'Exam Pattern Breakdown' },
      { type: 'paragraph', content: 'The RRB Staff Nurse exam pattern is distinct because it gives significant weightage to non-nursing subjects. If you are weak in Math or General Science, you need to start early.' },
      { type: 'table', table: {
          title: 'RRB Exam Pattern',
          type: 'comparison',
          headers: ['Section', 'Questions', 'Marks'],
          rows: [
            { Section: 'Professional Ability (Nursing)', Questions: '70', Marks: '70' },
            { Section: 'General Science (Phy/Chem/Bio)', Questions: '10', Marks: '10' },
            { Section: 'General Arithmetic', Questions: '10', Marks: '10' },
            { Section: 'General Awareness & Reasoning', Questions: '10', Marks: '10' },
            { Section: 'Total', Questions: '100', Marks: '100' }
          ]
        }
      },

      { type: 'h2', id: 'syllabus', content: 'Detailed Syllabus' },
      { type: 'paragraph', content: 'While the nursing syllabus is standard, the General Science section covers 10th-grade CBSE Physics, Chemistry, and Life Sciences.' },
      { type: 'list', items: [
          'Nursing: Anatomy, Physiology, Nutrition, MSN, OBG, CHN, Psychology.',
          'Arithmetic: Time & Work, Distance, Profit & Loss, Percentages, Ratios.',
          'General Science: Human Body, Diseases, Environmental Science, Basic Physics formulas.',
          'Reasoning: Coding-Decoding, Blood Relations, Series.'
        ]
      },

      { type: 'h2', id: 'salary', content: 'Salary & Perks' },
      { type: 'paragraph', content: 'Railway nurses enjoy Level-7 Pay Matrix benefits, similar to AIIMS, but with added railway-specific bonuses.' },
      { type: 'table', table: {
          title: 'Salary Structure (Approx)',
          type: 'standard',
          headers: ['Component', 'Amount (Approx)', 'Notes'],
          rows: [
            { Component: 'Basic Pay', 'Amount (Approx)': '₹44,900', Notes: '7th CPC Level 7' },
            { Component: 'DA (50%)', 'Amount (Approx)': '₹22,450', Notes: 'Revised periodically' },
            { Component: 'HRA', 'Amount (Approx)': '₹4,000 - ₹12,000', Notes: 'Depends on City (X, Y, Z)' },
            { Component: 'Allowances', 'Amount (Approx)': '₹5,000+', Notes: 'Dress, Nursing, Transport' },
            { Component: 'Gross Salary', 'Amount (Approx)': '₹75,000 - ₹85,000', Notes: 'Pre-tax' }
          ]
        }
      },

      { type: 'h2', id: 'strategy', content: 'Step-by-Step Preparation Strategy' },
      { type: 'steps', items: [
          'Step 1: Analyze PYQs. RRB repeats questions. Download the 2019 and 2015 papers from our PYQ section.',
          'Step 2: Master the "General Science" section. Read NCERT Class 9 & 10 Science books. This 10-mark section is the rank booster.',
          'Step 3: Practice Arithmetic. You do not need to be a mathematician, but you must know basic formulas for percentage and profit/loss.',
          'Step 4: Take Mock Tests. Since the exam is 90 minutes for 100 questions, speed is critical.'
        ]
      },

      { type: 'h2', id: 'mistakes', content: 'Common Mistakes' },
      { type: 'callout', variant: 'mistake', content: 'Mistake: Ignoring Math/Science. Many nursing students score 60/70 in nursing but 0/30 in the general section. In RRB, you cannot clear the cutoff without the general section.' }
    ],
    faqs: [
      { question: 'Is there negative marking in RRB?', answer: 'Yes, 1/3rd mark is deducted for every wrong answer.' },
      { question: 'Is the job transferable?', answer: 'Yes, but usually within the Railway Zone you applied for. Inter-zone transfers are possible after some years.' },
      { question: 'Can final year students apply?', answer: 'No, you must have your registration certificate on the date of application.' }
    ],
    glossary: [
      { term: 'RRB', definition: 'Railway Recruitment Board - the body that conducts exams for Indian Railways.' },
      { term: 'Zone', definition: 'Indian Railways is divided into zones (e.g., Northern Railway, Western Railway). You apply to a specific zone.' },
      { term: 'Pass', definition: 'A privilege for railway employees allowing free travel on trains for self and family.' }
    ]
  },
  {
    id: '3',
    title: 'Community Health Officer (CHO): Role, Salary & Career',
    slug: 'cho-career-path-guide',
    excerpt: 'CHO is a rapidly growing career path in India under the Ayushman Bharat scheme. Understand the role, bridge course, and state-wise opportunities.',
    category: 'Career Guidance',
    date: 'Feb 02, 2025',
    readTime: '12 min read',
    author: 'Nurse Career Guide Team',
    relatedSlugs: ['rrb-staff-nurse-guide', 'nursing-officer-salary-structure'],
    toc: [
        { id: 'role', title: 'What is a CHO?' },
        { id: 'eligibility', title: 'Eligibility & CCH Course' },
        { id: 'salary', title: 'Salary & Incentives Structure' },
        { id: 'bond', title: 'Service Bond Details' },
        { id: 'growth', title: 'Career Growth' },
        { id: 'faqs', title: 'Frequently Asked Questions' }
    ],
    sections: [
        { type: 'h2', id: 'role', content: 'What is a Community Health Officer (CHO)?' },
        { type: 'paragraph', content: 'The Community Health Officer (CHO) is the backbone of the Ayushman Bharat scheme. Posted at Health & Wellness Centers (HWCs) in rural areas, CHOs bridge the gap between the community and the medical officer. They are responsible for OPDs, maternal health, immunization, and screening for non-communicable diseases like diabetes and hypertension.' },
        
        { type: 'h2', id: 'eligibility', content: 'Eligibility & CCH Course' },
        { type: 'paragraph', content: 'The eligibility for CHO varies slightly by state, but the core requirement is the Certificate in Community Health (CCH).' },
        { type: 'table', table: {
            title: 'CHO Eligibility Scenarios',
            type: 'comparison',
            headers: ['Candidate Type', 'Requirement', 'Process'],
            rows: [
              { CandidateType: 'B.Sc Nursing (New Syllabus)', Requirement: 'Integrated CCH in curriculum', Process: 'Direct Recruitment Exam' },
              { CandidateType: 'GNM / Old B.Sc', Requirement: 'No CCH in curriculum', Process: 'Entrance Exam -> 6 Month Bridge Course -> Posting' },
              { CandidateType: 'Ayush Doctors (Some States)', Requirement: 'BAMS/BUMS', Process: 'Depends on State Policy' }
            ]
          }
        },

        { type: 'h2', id: 'salary', content: 'Salary & Incentives Structure' },
        { type: 'paragraph', content: 'CHO salary has two components: a fixed honorarium and a Performance Based Incentive (PBI). This makes it different from regular staff nurse jobs.' },
        { type: 'table', table: {
            title: 'Typical CHO Salary Structure',
            type: 'standard',
            headers: ['Component', 'Amount', 'Condition'],
            rows: [
              { Component: 'Fixed Salary', Amount: '₹20,000 - ₹25,000', Condition: 'Monthly Fixed' },
              { Component: 'Performance Incentive (PBI)', Amount: 'Up to ₹15,000', Condition: 'Based on 15 indicators (OPD count, Teleconsultation, etc.)' },
              { Component: 'Total Potential', Amount: '₹35,000 - ₹40,000', Condition: 'If targets met' }
            ]
          }
        },

        { type: 'h2', id: 'bond', content: 'Service Bond Details' },
        { type: 'callout', variant: 'summary', content: 'Important: Most states require CHOs to sign a surety bond (ranging from ₹1 Lakh to ₹2.5 Lakhs) to serve for a minimum of 3 years. Breaking the bond requires paying the penalty.' },

        { type: 'h2', id: 'growth', content: 'Career Growth' },
        { type: 'steps', items: [
            'Level 1: Community Health Officer (HWC)',
            'Level 2: Block Program Manager / Public Health Manager (After 5-7 years, depending on state policy)',
            'Level 3: District Program Coordinator (Senior level)'
        ]},
        { type: 'paragraph', content: 'Note: CHO is primarily a clinical-public health role. Growth into administrative roles depends heavily on state NHM policies.' }
    ],
    faqs: [
        { question: 'Is CHO a permanent government job?', answer: 'In most states, it is a contractual post under NHM. However, some states like Bihar and Rajasthan have created permanent cadres or offer loyalty bonuses.' },
        { question: 'Can I prepare for NORCET while working as a CHO?', answer: 'Yes, but HWC timings (usually 9 to 4) and OPD load can be demanding. You will need a disciplined study schedule.' }
    ],
    glossary: [
        { term: 'HWC', definition: 'Health and Wellness Center - upgraded Sub-Centers.' },
        { term: 'PBI', definition: 'Performance Based Incentive - variable pay based on work.' },
        { term: 'Teleconsultation', definition: 'Consulting a doctor via video call (eSanjeevani) for complex cases.' }
    ]
  },
  {
    id: '4',
    title: 'ESIC Nursing Officer: Exam Pattern & Syllabus Decoded',
    slug: 'esic-nursing-officer-guide',
    excerpt: 'ESIC hospitals offer great work-life balance. Here is a deep dive into the ESIC Nursing Officer recruitment process and previous year trends.',
    category: 'Exam Guidance',
    date: 'Feb 10, 2025',
    readTime: '11 min read',
    author: 'Nurse Career Guide Team',
    relatedSlugs: ['crack-aiims-norcet-strategy-guide', 'rrb-staff-nurse-guide'],
    toc: [
        { id: 'about', title: 'About ESIC' },
        { id: 'pattern', title: 'Exam Pattern' },
        { id: 'syllabus', title: 'Syllabus Analysis' },
        { id: 'posting', title: 'Job Location & Transfers' },
        { id: 'faqs', title: 'Frequently Asked Questions' }
    ],
    sections: [
        { type: 'h2', id: 'about', content: 'About ESIC' },
        { type: 'paragraph', content: 'The Employees State Insurance Corporation (ESIC) is a statutory body under the Ministry of Labour and Employment. ESIC hospitals cater to insured industrial workers. The job profile is excellent, with a manageable patient load compared to AIIMS, making it a favorite for those seeking work-life balance.' },
        
        { type: 'h2', id: 'pattern', content: 'Exam Pattern' },
        { type: 'paragraph', content: 'ESIC exams are conducted by UPSC or ESIC itself. The pattern usually includes a mix of Nursing and General Aptitude.' },
        { type: 'table', table: {
            title: 'ESIC Exam Pattern',
            type: 'standard',
            headers: ['Subject', 'Questions', 'Marks'],
            rows: [
              { Subject: 'Technical (Nursing)', Questions: '100', Marks: '100' },
              { Subject: 'General Awareness & Aptitude', Questions: '25', Marks: '25' },
              { Subject: 'Total', Questions: '125', Marks: '125' }
            ]
          }
        },

        { type: 'h2', id: 'syllabus', content: 'Syllabus Analysis' },
        { type: 'list', items: [
            'Nursing: Standard B.Sc syllabus. Focus heavily on MSN and Community Health.',
            'Aptitude: Basic Arithmetic, Reasoning, and Current Affairs (Last 6 months).',
            'Note: ESIC questions are often direct and less clinical-scenario based than NORCET.'
        ]},

        { type: 'h2', id: 'posting', content: 'Job Location & Transfers' },
        { type: 'paragraph', content: 'ESIC has hospitals in almost every major industrial city in India. Postings are usually in Tier-1 and Tier-2 cities. Transfers are possible after completing the probation period, subject to vacancy.' },
        
        { type: 'callout', variant: 'summary', content: 'Pro Tip: ESIC hospitals often have shifts that are strictly regulated, meaning less overtime stress compared to other central govt hospitals.' }
    ],
    faqs: [
        { question: 'Is ESIC a central government job?', answer: 'Yes, it is a permanent central government job with all associated benefits.' },
        { question: 'What is the probation period?', answer: 'Usually 2 years.' }
    ],
    glossary: [
        { term: 'Statutory Body', definition: 'An organization created by an Act of Parliament.' },
        { term: 'Insured Person (IP)', definition: 'The worker covered under the ESI Act who receives treatment.' }
    ]
  },
  {
    id: '5',
    title: 'DSSSB Nursing Officer: How to Secure a Job in Delhi',
    slug: 'dsssb-nursing-officer-guide',
    excerpt: 'Want to work in Delhi government hospitals? DSSSB is your route. We analyze the exam pattern which includes Hindi and Math.',
    category: 'Exam Guidance',
    date: 'Feb 15, 2025',
    readTime: '13 min read',
    author: 'Nurse Career Guide Team',
    relatedSlugs: ['nursing-officer-salary-structure'],
    toc: [
        { id: 'intro', title: 'The DSSSB Opportunity' },
        { id: 'hospitals', title: 'List of Hospitals' },
        { id: 'pattern', title: 'The Unique Exam Pattern' },
        { id: 'strategy', title: 'Section A Strategy' },
        { id: 'faqs', title: 'Frequently Asked Questions' }
    ],
    sections: [
        { type: 'h2', id: 'intro', content: 'The DSSSB Opportunity' },
        { type: 'paragraph', content: 'The Delhi Subordinate Services Selection Board (DSSSB) recruits Nursing Officers for hospitals under the Govt of NCT of Delhi. These are state govt jobs but offer salary parity with Central Govt (AIIMS) due to Delhi\'s special status.' },
        
        { type: 'h2', id: 'hospitals', content: 'Where will you be posted?' },
        { type: 'list', items: [
            'Lok Nayak Hospital (LNJP)',
            'GTB Hospital',
            'Deen Dayal Upadhyay Hospital (DDU)',
            'Ambedkar Hospital',
            'Various Delhi Govt Dispensaries'
        ]},

        { type: 'h2', id: 'pattern', content: 'The Unique Exam Pattern' },
        { type: 'paragraph', content: 'DSSSB is the toughest exam for "Pure Nursing" students because 50% of the paper is Non-Nursing.' },
        { type: 'table', table: {
            title: 'DSSSB Sectional Breakdown',
            type: 'comparison',
            headers: ['Section', 'Subject', 'Marks'],
            rows: [
              { Section: 'Section A (Non-Tech)', Subject: 'General Awareness', Marks: '20' },
              { Section: 'Section A', Subject: 'General Intelligence (Reasoning)', Marks: '20' },
              { Section: 'Section A', Subject: 'Arithmetical Ability', Marks: '20' },
              { Section: 'Section A', Subject: 'General Hindi', Marks: '20' },
              { Section: 'Section A', Subject: 'General English', Marks: '20' },
              { Section: 'Section B (Tech)', Subject: 'Nursing Subjects', Marks: '100' },
              { Section: 'Total', Subject: '200 Questions', Marks: '200' }
            ]
          }
        },

        { type: 'h2', id: 'strategy', content: 'How to Crack Section A?' },
        { type: 'callout', variant: 'mistake', content: 'Critical Mistake: Ignoring Hindi. The 20 marks in Hindi are the easiest to score. Basic grammar (Sandhi, Samas, Vilom) is asked.' },
        { type: 'steps', items: [
            'Hindi: Read a basic 10th-grade Hindi grammar book (Lucent Hindi is good).',
            'Math: Focus on speed. You have less than 1 minute per question.',
            'Reasoning: Practice daily. This is a high-scoring area.'
        ]}
    ],
    faqs: [
        { question: 'Is registration with Delhi Nursing Council mandatory?', answer: 'Yes, at the time of document verification, you usually need to show proof of registration with the Delhi Nursing Council.' },
        { question: 'Is there an age limit?', answer: 'Yes, typically up to 30 or 32 years, which is often a point of contention and litigation. Check the latest notification carefully.' }
    ],
    glossary: [
        { term: 'NCT', definition: 'National Capital Territory (Delhi).' },
        { term: 'Sectional Cutoff', definition: 'Some DSSSB exams require you to pass Section A and B separately (check specific notification).' }
    ]
  },
  {
    id: '6',
    title: 'Nursing Officer Salary in India: 7th Pay Commission Explained',
    slug: 'nursing-officer-salary-structure',
    excerpt: 'Confused about Level-7 Pay Matrix? We calculate the in-hand salary for AIIMS, Railway, and State Govt nurses including HRA and DA.',
    category: 'Career Guidance',
    date: 'Feb 20, 2025',
    readTime: '10 min read',
    author: 'Nurse Career Guide Team',
    relatedSlugs: ['crack-aiims-norcet-strategy-guide', 'rrb-staff-nurse-guide'],
    toc: [
        { id: 'matrix', title: 'Level 7 Pay Matrix' },
        { id: 'components', title: 'Salary Components' },
        { id: 'calculation', title: 'In-Hand Salary Calculation' },
        { id: 'deductions', title: 'Deductions' },
        { id: 'faqs', title: 'Frequently Asked Questions' }
    ],
    sections: [
        { type: 'h2', id: 'matrix', content: 'Understanding Level 7 Pay Matrix' },
        { type: 'paragraph', content: 'Nursing Officers in Central Govt (AIIMS, RRB, ESIC, JIPMER) fall under Pay Level 7 of the 7th Central Pay Commission (CPC). The starting Basic Pay is ₹44,900.' },
        
        { type: 'h2', id: 'components', content: 'Key Salary Components' },
        { type: 'list', items: [
            'Basic Pay: Fixed at ₹44,900 for entry level.',
            'Dearness Allowance (DA): Linked to inflation. Currently 50% of Basic Pay.',
            'House Rent Allowance (HRA): Depends on city (X=27%, Y=18%, Z=9%).',
            'Nursing Allowance: Fixed at ₹7,200 per month.',
            'Dress Allowance: ₹1,800 per month (paid annually usually, but calculated monthly here for reference).',
            'TA (Transport Allowance): Fixed amount + DA on TA.'
        ]},

        { type: 'h2', id: 'calculation', content: 'In-Hand Salary Calculation (X-Class City like Delhi)' },
        { type: 'table', table: {
            title: 'Salary Slip Breakdown (Estimated)',
            type: 'standard',
            headers: ['Component', 'Amount', 'Calculation'],
            rows: [
              { Component: 'Basic Pay', Amount: '₹44,900', Calculation: 'Fixed' },
              { Component: 'DA (50%)', Amount: '₹22,450', Calculation: '50% of Basic' },
              { Component: 'HRA (27%)', Amount: '₹12,123', Calculation: '27% of Basic' },
              { Component: 'Nursing Allowance', Amount: '₹7,200', Calculation: 'Fixed' },
              { Component: 'Transport Allowance', Amount: '₹4,000+', Calculation: 'Varies' },
              { Component: 'Gross Salary', Amount: '₹90,000+', Calculation: 'Total Earnings' }
            ]
          }
        },

        { type: 'h2', id: 'deductions', content: 'Deductions (NPS & Tax)' },
        { type: 'paragraph', content: 'From the Gross Salary, approximately 10% of (Basic + DA) is deducted for NPS (National Pension System). Income Tax is deducted as per the tax regime you choose. Expect net in-hand to be around ₹75,000 - ₹80,000.' }
    ],
    faqs: [
        { question: 'Does salary increase every year?', answer: 'Yes, there is an annual increment of 3% on the Basic Pay.' },
        { question: 'Is Nursing Allowance taxable?', answer: 'Yes, it is fully taxable.' }
    ],
    glossary: [
        { term: 'CPC', definition: 'Central Pay Commission.' },
        { term: 'HRA', definition: 'House Rent Allowance - paid if you do not take govt accommodation.' },
        { term: 'NPS', definition: 'National Pension System - a contributory pension scheme.' }
    ]
  },
  {
    id: '7',
    title: 'Top 10 Nursing Specializations for High Salary in India',
    slug: 'top-nursing-specializations',
    excerpt: 'Move beyond general bedside nursing. Explore careers in Critical Care, OT, Informatics, and Nurse Anesthetist roles.',
    category: 'Career Guidance',
    date: 'Feb 25, 2025',
    readTime: '12 min read',
    author: 'Nurse Career Guide Team',
    relatedSlugs: ['cho-career-path-guide'],
    toc: [
        { id: 'why', title: 'Why Specialize?' },
        { id: 'list', title: 'Top 10 Specializations' },
        { id: 'comparison', title: 'Salary Comparison' },
        { id: 'how', title: 'How to Specialize' },
        { id: 'faqs', title: 'Frequently Asked Questions' }
    ],
    sections: [
        { type: 'h2', id: 'why', content: 'Why Specialize?' },
        { type: 'paragraph', content: 'General nursing is great, but specialization brings respect, higher pay, and reduced physical workload in later years. In private corporate hospitals, specialists are paid 30-50% more than general staff nurses.' },

        { type: 'h2', id: 'list', content: 'Top 10 Specializations' },
        { type: 'list', items: [
            '1. Critical Care Nurse (ICU): High demand, high skill.',
            '2. OT Nurse (Scrub Nurse): Essential for surgeries.',
            '3. Nurse Anesthetist (CRNA): Emerging field in India.',
            '4. Neonatal ICU (NICU) Nurse: Specialized care for newborns.',
            '5. Dialysis Nurse: Growing demand due to kidney diseases.',
            '6. Cardiac Nurse: Cath lab and CCU roles.',
            '7. Emergency / Trauma Nurse: Fast-paced ER work.',
            '8. Oncology Nurse: Cancer care and chemotherapy admin.',
            '9. Psychiatric Nurse: Mental health hospitals.',
            '10. Nurse Educator / Tutor: Academic route.'
        ]},

        { type: 'h2', id: 'comparison', content: 'Salary Potential (Private Sector)' },
        { type: 'table', table: {
            title: 'Specialty vs Salary',
            type: 'comparison',
            headers: ['Specialty', 'Entry Salary', 'Senior Salary'],
            rows: [
              { Specialty: 'General Ward', 'Entry Salary': '₹15k - ₹20k', 'Senior Salary': '₹35k - ₹40k' },
              { Specialty: 'ICU / CCU', 'Entry Salary': '₹25k - ₹30k', 'Senior Salary': '₹60k - ₹80k' },
              { Specialty: 'OT / Cath Lab', 'Entry Salary': '₹22k - ₹28k', 'Senior Salary': '₹55k - ₹75k' },
              { Specialty: 'Nurse Manager', 'Entry Salary': 'N/A', 'Senior Salary': '₹1 Lakh+' }
            ]
          }
        },

        { type: 'h2', id: 'how', content: 'How to Specialize?' },
        { type: 'steps', items: [
            'Option 1: Post Basic Diploma (1 Year) after GNM/B.Sc.',
            'Option 2: M.Sc Nursing (2 Years).',
            'Option 3: Fellowship courses offered by corporate hospitals (Medanta, Apollo, etc.).'
        ]}
    ],
    faqs: [
        { question: 'Which specialty is best for going abroad?', answer: 'ICU and OT nurses are in highest demand in UK, USA, and Middle East.' },
        { question: 'Do I need M.Sc for ICU?', answer: 'Not mandatory, but a Post Basic Diploma or experience certificate helps.' }
    ],
    glossary: [
        { term: 'Scrub Nurse', definition: 'Nurse who assists the surgeon directly within the sterile field.' },
        { term: 'Cath Lab', definition: 'Catheterization Laboratory - for heart procedures.' }
    ]
  },
  {
    id: '8',
    title: 'How to Balance Night Shifts with Exam Preparation',
    slug: 'balance-work-and-study',
    excerpt: 'Working nurses often struggle to find study time. Here is a practical schedule to manage hospital duties and NORCET prep.',
    category: 'Study Strategy',
    date: 'Mar 01, 2025',
    readTime: '10 min read',
    author: 'Nurse Career Guide Team',
    relatedSlugs: ['crack-aiims-norcet-strategy-guide'],
    toc: [
        { id: 'struggle', title: 'The Working Nurse Struggle' },
        { id: 'strategy', title: 'The "Micro-Study" Strategy' },
        { id: 'roster', title: 'Sample Roster Plan' },
        { id: 'night', title: 'Surviving Night Shifts' },
        { id: 'faqs', title: 'Frequently Asked Questions' }
    ],
    sections: [
        { type: 'h2', id: 'struggle', content: 'The Working Nurse Struggle' },
        { type: 'paragraph', content: 'Working 8-12 hour shifts and then studying is physically exhausting. However, 60% of NORCET selections are working nurses. Why? Because they have clinical knowledge and value their time more.' },
        
        { type: 'h2', id: 'strategy', content: 'The "Micro-Study" Strategy' },
        { type: 'paragraph', content: 'Stop looking for 4-hour blocks of time. They don\'t exist. Use "Micro-Study" sessions.' },
        { type: 'list', items: [
            'Commute (30 mins): Watch a video lecture or listen to audio notes.',
            'Lunch Break (20 mins): Solve 20 MCQs on an app.',
            'Before Sleep (30 mins): Revise one topic.'
        ]},

        { type: 'h2', id: 'roster', content: 'Sample Study Plan for Shift Duties' },
        { type: 'table', table: {
            title: 'Shift-wise Study Plan',
            type: 'standard',
            headers: ['Shift', 'Study Slot 1', 'Study Slot 2'],
            rows: [
              { Shift: 'Morning (7-2)', 'Study Slot 1': '5 PM - 8 PM (Theory)', 'Study Slot 2': '9 PM - 10 PM (MCQs)' },
              { Shift: 'Evening (2-8)', 'Study Slot 1': '8 AM - 11 AM (Theory)', 'Study Slot 2': '10 PM - 11 PM (Revision)' },
              { Shift: 'Night (8-8)', 'Study Slot 1': 'During lulls in shift (MCQs)', 'Study Slot 2': 'Sleep till 2 PM -> Study 4 PM - 7 PM' }
            ]
          }
        },

        { type: 'h2', id: 'night', content: 'Surviving Night Shifts' },
        { type: 'callout', variant: 'summary', content: 'Tip: Do not try to read heavy theory during a night shift. You will fall asleep. Solve MCQs instead. The active engagement keeps you awake.' }
    ],
    faqs: [
        { question: 'Should I quit my job to prepare?', answer: 'Only if you have financial support and have failed multiple times due to lack of time. Otherwise, experience counts.' },
        { question: 'How to manage fatigue?', answer: 'Prioritize sleep. Do not compromise on 6-7 hours of sleep, or your retention will be zero.' }
    ],
    glossary: [
        { term: 'Micro-Study', definition: 'Studying in short bursts of 15-20 minutes.' },
        { term: 'Burnout', definition: 'Physical and mental exhaustion caused by prolonged stress.' }
    ]
  },
  {
    id: '9',
    title: 'Best Books & Resources for Nursing Competitive Exams',
    slug: 'best-books-nursing-exams',
    excerpt: 'Target High, PR Yadav, or Saunders? We review the best books for theory and MCQ practice for Indian nursing exams.',
    category: 'Study Strategy',
    date: 'Mar 05, 2025',
    readTime: '10 min read',
    author: 'Nurse Career Guide Team',
    relatedSlugs: ['crack-aiims-norcet-strategy-guide'],
    toc: [
        { id: 'approach', title: 'The 3-Book Rule' },
        { id: 'theory', title: 'Best Theory Books' },
        { id: 'mcq', title: 'Best MCQ Books' },
        { id: 'comparison', title: 'Book Comparison' },
        { id: 'faqs', title: 'Frequently Asked Questions' }
    ],
    sections: [
        { type: 'h2', id: 'approach', content: 'The 3-Book Rule' },
        { type: 'paragraph', content: 'Do not hoard books. You only need three types of resources: One for Concept (NCLEX level), One for Indian Exam Practice (Volume), and One for Non-Nursing.' },

        { type: 'h2', id: 'theory', content: 'Best Theory Books (Concept Building)' },
        { type: 'list', items: [
            'Saunders Comprehensive Review for NCLEX-RN: The "Bible" for clearing concepts. Excellent for MSN, Peds, and Psych.',
            'Mosby\'s Comprehensive Review: Good alternative to Saunders.'
        ]},

        { type: 'h2', id: 'mcq', content: 'Best MCQ Books (Practice)' },
        { type: 'list', items: [
            'Target High (Muthuvenkatachalam): Excellent for image-based questions and recent papers.',
            'PR Yadav (Vol 1 & 2): Great for volume practice. Good for state exams and RRB.'
        ]},

        { type: 'h2', id: 'comparison', content: 'Which one to buy?' },
        { type: 'table', table: {
            title: 'Book Recommendation Table',
            type: 'comparison',
            headers: ['Book', 'Best For', 'Difficulty Level'],
            rows: [
              { Book: 'Saunders', 'Best For': 'Concepts & NORCET Mains', 'Difficulty Level': 'High (Conceptual)' },
              { Book: 'Target High', 'Best For': 'NORCET Prelims & Images', 'Difficulty Level': 'Moderate' },
              { Book: 'PR Yadav', 'Best For': 'RRB, ESIC, State Exams', 'Difficulty Level': 'Easy to Moderate' },
              { Book: 'Lucent GK', 'Best For': 'General Knowledge', 'Difficulty Level': 'Basic' }
            ]
          }
        }
    ],
    faqs: [
        { question: 'Is coaching material enough?', answer: 'Good coaching notes are often sufficient for theory, but you MUST buy an MCQ book for practice.' },
        { question: 'PDF vs Physical Book?', answer: 'Physical books are recommended for deep study. PDFs are good for quick reference on duty.' }
    ],
    glossary: [
        { term: 'NCLEX', definition: 'National Council Licensure Examination (USA) - standard for conceptual nursing.' },
        { term: 'Image-Based Question (IBQ)', definition: 'Questions where you have to identify a tool, disease, or sign from an image.' }
    ]
  }
];
