import React from 'react';
import { Link } from 'react-router-dom';

const popularTopics = [
  { label: 'How to become a nurse', href: '/how-to-become-a-nurse' },
  { label: 'BSc Nursing vs GNM', href: '/bsc-nursing-vs-gnm' },
  { label: 'Nursing career options', href: '/nursing-career-options' },
  { label: 'Scope of nursing in India', href: '/scope-of-nursing-in-india' },
];

const learningItems = ['Career paths', 'Course details', 'Skills required', 'Job opportunities'];

export function Home() {
  return (
    <div className="py-12">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-5">Nursing Career Guide in India</h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          Explore career opportunities, courses and future scope in the nursing profession.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Popular Topics</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {popularTopics.map((topic) => (
              <li key={topic.label}>
                <Link to={topic.href} className="text-teal-700 hover:underline">
                  {topic.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What You Will Learn</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {learningItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-teal-100 bg-teal-50 p-6 mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Preparing for Government Nursing Exams</h2>
          <p className="text-gray-700 mb-4">
            Many nursing graduates prepare for government nursing officer exams for better career opportunities.
          </p>
          <a
            href="https://nprep.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-teal-600 px-4 py-2 text-white font-medium hover:bg-teal-700"
          >
            Explore Preparation
          </a>
        </section>

        <section className="rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-teal-700 font-medium">
            <Link to="/nursing-career-options" className="hover:underline">Career → /nursing-career-options</Link>
            <Link to="/bsc-nursing-course-details" className="hover:underline">Courses → /bsc-nursing-course-details</Link>
            <Link to="/government-jobs-after-nursing" className="hover:underline">Jobs → /government-jobs-after-nursing</Link>
            <Link to="/skills-required-for-nurse" className="hover:underline">Skills → /skills-required-for-nurse</Link>
          </div>
        </section>
      </section>
    </div>
  );
}
