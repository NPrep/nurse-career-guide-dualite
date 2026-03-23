import React from 'react';
import { Link } from 'react-router-dom';

const popularTopics = [
  {
    label: 'How to become a nurse',
    description: 'Understand eligibility, course choices, licensing, and first-job pathways.',
    href: '/how-to-become-a-nurse',
  },
  {
    label: 'BSc Nursing vs GNM',
    description: 'Compare duration, curriculum depth, career progression, and opportunities.',
    href: '/bsc-nursing-vs-gnm',
  },
  {
    label: 'Nursing career options',
    description: 'Explore clinical, public-health, teaching, and administration tracks.',
    href: '/nursing-career-options',
  },
  {
    label: 'Scope of nursing in India',
    description: 'See where demand is rising and how to plan long-term growth.',
    href: '/scope-of-nursing-in-india',
  },
];

const learningItems = [
  { title: 'Career paths', description: 'Map roles from entry-level to advanced nursing domains.' },
  { title: 'Course details', description: 'Understand BSc Nursing, GNM, and related pathways clearly.' },
  { title: 'Skills required', description: 'Identify core nursing competencies and practical workplace skills.' },
  { title: 'Job opportunities', description: 'Evaluate government, private, and abroad job options.' },
];

const quickLinks = [
  { label: 'Career', href: '/nursing-career-options' },
  { label: 'Courses', href: '/bsc-nursing-course-details' },
  { label: 'Jobs', href: '/government-jobs-after-nursing' },
  { label: 'Skills', href: '/skills-required-for-nurse' },
];

export function Home() {
  return (
    <div>
      <section className="py-16 text-center bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Nursing Career Guide in India</h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore career opportunities, courses and future scope in the nursing profession.
          </p>
          <a
            href="https://nprep.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
          >
            Start Now
          </a>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">Popular Topics</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {popularTopics.map((topic) => (
              <Link
                key={topic.label}
                to={topic.href}
                className="p-6 rounded-2xl shadow-md bg-white border border-gray-100 hover:-translate-y-0.5 transition-all"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{topic.label}</h3>
                <p className="text-gray-600 leading-relaxed">{topic.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">What You Will Learn</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {learningItems.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl shadow-md bg-white">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl shadow-md bg-white border border-blue-100">
            <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">Preparing for Government Nursing Exams</h2>
            <p className="text-gray-600 leading-relaxed">
              Many nursing graduates prepare for government nursing officer exams for better career opportunities.
            </p>
            <a
              href="https://nprep.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
            >
              Explore Preparation
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">Quick Navigation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {quickLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="p-6 rounded-2xl shadow-md bg-white hover:-translate-y-0.5 transition-all"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.label}</h3>
                <p className="text-gray-600 leading-relaxed">Go to {item.href}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
