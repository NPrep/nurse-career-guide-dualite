import React from 'react';
import { BookOpen, CheckCircle, ExternalLink, PlayCircle } from 'lucide-react';

const freeResources = {
  youtube: ['Nursing Next Live', 'Nursing Tutor Hindi', 'Pharma Simplified for Nurses'],
  telegram: ['Nursing Exam Daily MCQs', 'NORCET PYQ Discussion Group', 'State Exam Alerts'],
  books: ['Nursing Officer Recruitment Guide by Arihant', 'Bhatia Nursing MCQ Bank', 'Lucent GK (for aptitude section)'],
};

const paidCourses = [
  {
    title: 'NPrep Test Series',
    link: 'https://qtestseries.nprep.in',
    summary: 'Best if you already know concepts and need timed practice, PYQs, and analytics.',
  },
  {
    title: 'NPrep Rapid Revision 2.0',
    link: 'https://rapid.nprep.in',
    summary: 'Best for the final revision window before NORCET/CHO and mixed exam targets.',
  },
  {
    title: 'NPrep Gold Batch',
    link: 'https://gold.nprep.in',
    summary: 'Long-format complete prep path (basic to advanced) for freshers and repeaters.',
  },
];

const examBooks = [
  {
    exam: 'AIIMS NORCET',
    titles: ['Comprehensive NORCET Guide', 'MSN High-Yield Notes', 'PYQ Compendium', 'Nursing Drug Handbook', 'One-Liner Revision Notebook'],
  },
  {
    exam: 'RRB Staff Nurse',
    titles: ['RRB Nursing Officer Solved Papers', 'General Science Rapid Notes', 'Arithmetic for Nursing Exams', 'Reasoning Workbook', 'Railway GK Capsule'],
  },
  {
    exam: 'State CHO Exams',
    titles: ['CHO Public Health Guide', 'Community Nursing MCQ Bank', 'NHM Program Summary', 'Maternal-Child Health Review', 'State GK Pocket Guide'],
  },
];

export function Courses() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Resources for Nursing Exam Preparation</h1>
        <p className="text-lg text-gray-600">A transparent mix of free resources, paid courses, and book recommendations.</p>
      </div>

      <section className="surface-card p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-5">Free Resources</h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="rounded-xl border border-gray-200 p-4">
            <p className="font-semibold text-gray-900 mb-3 inline-flex items-center gap-2"><PlayCircle className="h-4 w-4 text-red-500" /> YouTube Channels</p>
            <ul className="space-y-2 text-gray-600">{freeResources.youtube.map((item) => <li key={item}>• {item}</li>)}</ul>
          </div>
          <div className="rounded-xl border border-gray-200 p-4">
            <p className="font-semibold text-gray-900 mb-3">Telegram Groups</p>
            <ul className="space-y-2 text-gray-600">{freeResources.telegram.map((item) => <li key={item}>• {item}</li>)}</ul>
          </div>
          <div className="rounded-xl border border-gray-200 p-4">
            <p className="font-semibold text-gray-900 mb-3 inline-flex items-center gap-2"><BookOpen className="h-4 w-4 text-teal-600" /> Starter Books</p>
            <ul className="space-y-2 text-gray-600">{freeResources.books.map((item) => <li key={item}>• {item}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="surface-card p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-5">Paid Courses (NPrep)</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {paidCourses.map((course) => (
            <div key={course.title} className="rounded-xl border border-gray-200 p-5 flex flex-col">
              <h3 className="font-bold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">{course.summary}</p>
              <a href={course.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-teal-700 font-medium text-sm">
                Visit course <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="surface-card p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-5">Top 5 Books by Exam</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {examBooks.map((set) => (
            <div key={set.exam} className="rounded-xl border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-3">{set.exam}</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {set.titles.map((title) => (
                  <li key={title} className="inline-flex gap-2"><CheckCircle className="h-4 w-4 text-teal-500 mt-0.5" /> {title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
