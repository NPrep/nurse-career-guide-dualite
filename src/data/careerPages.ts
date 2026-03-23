export type CareerPage = {
  path: string;
  title: string;
  intro: string;
  sections: Array<{
    heading: string;
    type: 'list' | 'ordered' | 'paragraph';
    items?: string[];
    content?: string;
  }>;
};

export const careerPages: CareerPage[] = [
  {
    path: '/how-to-become-a-nurse',
    title: 'How to Become a Nurse in India',
    intro:
      'To become a nurse, candidates must complete a nursing course such as BSc Nursing or GNM.',
    sections: [
      {
        heading: 'Steps',
        type: 'ordered',
        items: [
          'Choose nursing course',
          'Complete education',
          'Register with nursing council',
          'Apply for jobs',
        ],
      },
    ],
  },
  {
    path: '/nursing-career-options',
    title: 'Nursing Career Options in India',
    intro:
      'Nursing offers diverse career pathways across hospitals, community health, education, and administration.',
    sections: [
      {
        heading: 'Popular Career Paths',
        type: 'list',
        items: [
          'Clinical nurse in hospitals',
          'Nursing officer in public healthcare',
          'Critical care and emergency nursing',
          'Community health nursing',
          'Nurse educator and tutor roles',
        ],
      },
    ],
  },
  {
    path: '/scope-of-nursing-in-india',
    title: 'Scope of Nursing in India',
    intro:
      'The scope of nursing in India is expanding with growing healthcare demand in both urban and rural sectors.',
    sections: [
      {
        heading: 'Where Nursing Professionals Are Needed',
        type: 'list',
        items: [
          'Government hospitals and medical colleges',
          'Private multispecialty hospitals',
          'Primary health centers and community programs',
          'Home healthcare and elderly care services',
          'Teaching institutions and nursing schools',
        ],
      },
    ],
  },
  {
    path: '/career-after-bsc-nursing',
    title: 'Career After BSc Nursing',
    intro:
      'After BSc Nursing, graduates can start clinical careers, pursue higher studies, or specialize in advanced nursing domains.',
    sections: [
      {
        heading: 'Career Opportunities After BSc Nursing',
        type: 'list',
        items: [
          'Staff nurse roles in hospitals',
          'Public health and community programs',
          'MSc Nursing for specialization',
          'Nurse educator roles',
          'Healthcare administration tracks',
        ],
      },
    ],
  },
  {
    path: '/bsc-nursing-vs-gnm',
    title: 'BSc Nursing vs GNM',
    intro:
      'Both courses lead to nursing careers, but differ in duration, scope and opportunities.',
    sections: [
      {
        heading: 'Key Differences',
        type: 'list',
        items: [
          'BSc Nursing is a degree, while GNM is a diploma program',
          'BSc Nursing generally offers broader long-term growth',
          'GNM can be a faster entry route into nursing practice',
          'Higher education pathways are often stronger after BSc Nursing',
        ],
      },
    ],
  },
  {
    path: '/anm-vs-gnm',
    title: 'ANM vs GNM',
    intro:
      'ANM and GNM are foundational nursing programs with different training depth and career outcomes.',
    sections: [
      {
        heading: 'ANM and GNM Comparison',
        type: 'list',
        items: [
          'ANM focuses on basic community and maternal care',
          'GNM provides broader hospital and clinical exposure',
          'GNM usually opens more hospital-based opportunities',
          'ANM is often preferred for frontline public health services',
        ],
      },
    ],
  },
  {
    path: '/bsc-nursing-course-details',
    title: 'BSc Nursing Course Details',
    intro:
      'BSc Nursing is a professional undergraduate course focused on clinical skills, patient care, and nursing leadership.',
    sections: [
      {
        heading: 'Course Highlights',
        type: 'list',
        items: [
          'Comprehensive theoretical and practical nursing training',
          'Clinical postings in hospitals',
          'Subjects include medical-surgical, pediatric, psychiatric, and community nursing',
          'Suitable for long-term nursing and healthcare careers',
        ],
      },
    ],
  },
  {
    path: '/gnm-nursing-course-details',
    title: 'GNM Nursing Course Details',
    intro:
      'GNM is a diploma-based nursing program that prepares students for direct patient care roles.',
    sections: [
      {
        heading: 'Course Highlights',
        type: 'list',
        items: [
          'Strong focus on foundational nursing practice',
          'Early clinical exposure',
          'Covers fundamentals, midwifery, and community health nursing',
          'Useful for candidates seeking practical entry into nursing jobs',
        ],
      },
    ],
  },
  {
    path: '/skills-required-for-nurse',
    title: 'Skills Required for Nurses',
    intro: 'Nurses need technical competence along with strong interpersonal and critical thinking abilities.',
    sections: [
      {
        heading: 'Essential Skills',
        type: 'list',
        items: [
          'Communication skills',
          'Patient care',
          'Critical thinking',
          'Teamwork',
        ],
      },
    ],
  },
  {
    path: '/role-of-nurse-in-hospital',
    title: 'Role of Nurse in Hospital',
    intro:
      'Nurses are central to hospital care by monitoring patients, coordinating treatment, and ensuring safety.',
    sections: [
      {
        heading: 'Core Responsibilities',
        type: 'list',
        items: [
          'Assessing and monitoring patient condition',
          'Administering medications and treatments',
          'Supporting doctors during procedures',
          'Educating patients and families',
          'Maintaining care records and handover communication',
        ],
      },
    ],
  },
  {
    path: '/types-of-nursing-jobs',
    title: 'Types of Nursing Jobs',
    intro:
      'Nursing professionals can work across multiple specialties depending on clinical interest and career goals.',
    sections: [
      {
        heading: 'Common Nursing Job Types',
        type: 'list',
        items: [
          'Staff nurse',
          'ICU nurse',
          'Operation theatre nurse',
          'Pediatric nurse',
          'Community health nurse',
          'Nurse educator',
        ],
      },
    ],
  },
  {
    path: '/government-jobs-after-nursing',
    title: 'Government Jobs After Nursing',
    intro:
      'Nursing graduates can apply for jobs in AIIMS, ESIC hospitals, railways and state government hospitals.',
    sections: [
      {
        heading: 'Popular Government Employers',
        type: 'list',
        items: [
          'Central government hospitals and institutes',
          'State health departments',
          'Public sector healthcare bodies',
          'Municipal and district hospitals',
        ],
      },
    ],
  },
  {
    path: '/private-jobs-after-nursing',
    title: 'Private Jobs After Nursing',
    intro:
      'Private sector nursing roles are available in hospitals, clinics, home care, and corporate healthcare settings.',
    sections: [
      {
        heading: 'Private Sector Opportunities',
        type: 'list',
        items: [
          'Multispecialty hospitals',
          'Specialty clinics and day-care centers',
          'Home healthcare agencies',
          'Telehealth support teams',
          'Corporate health units',
        ],
      },
    ],
  },
  {
    path: '/abroad-opportunities-for-nurses',
    title: 'Abroad Opportunities for Nurses',
    intro:
      'Indian nurses can explore global careers in countries with high demand for trained nursing professionals.',
    sections: [
      {
        heading: 'Global Pathways',
        type: 'list',
        items: [
          'Clinical roles in international hospitals',
          'Specialized nursing tracks',
          'Long-term settlement and career growth pathways',
          'Higher earning potential with advanced certifications',
        ],
      },
    ],
  },
  {
    path: '/nursing-career-salary',
    title: 'Nursing Career Salary in India',
    intro:
      'Nursing salary in India depends on qualification, role, location, and type of healthcare institution.',
    sections: [
      {
        heading: 'What Influences Salary',
        type: 'list',
        items: [
          'Educational qualification (ANM/GNM/BSc/MSc)',
          'Clinical experience and specialization',
          'Government vs private sector',
          'City tier and hospital scale',
        ],
      },
    ],
  },
  {
    path: '/future-scope-of-nursing',
    title: 'Future Scope of Nursing',
    intro: 'The demand for nurses is increasing in India and globally.',
    sections: [
      {
        heading: 'Why Nursing Has Strong Future Scope',
        type: 'list',
        items: [
          'Expanding healthcare infrastructure',
          'Rising chronic disease burden and elderly care demand',
          'Growing need for trained nursing professionals in public health',
          'Better specialization and leadership opportunities',
        ],
      },
    ],
  },
];

export const careerPageMap = Object.fromEntries(careerPages.map((page) => [page.path, page]));
