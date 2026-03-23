import React from 'react';
import { Link } from 'react-router-dom';
import type { CareerPage as CareerPageType } from '../data/careerPages';

type CareerPageProps = {
  page: CareerPageType;
};

export function CareerPage({ page }: CareerPageProps) {
  return (
    <div className="py-12">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">{page.title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">{page.intro}</p>

        <div className="space-y-8">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.heading}</h2>
              {section.type === 'paragraph' ? <p className="text-gray-700 leading-relaxed">{section.content}</p> : null}

              {section.type === 'list' && section.items ? (
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}

              {section.type === 'ordered' && section.items ? (
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              ) : null}
            </section>
          ))}

          <section className="rounded-xl border border-teal-100 bg-teal-50 p-6">
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
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Explore More Career Guidance</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-teal-700 font-medium">
              <Link to="/nursing-career-options" className="hover:underline">Career → /nursing-career-options</Link>
              <Link to="/bsc-nursing-course-details" className="hover:underline">Courses → /bsc-nursing-course-details</Link>
              <Link to="/government-jobs-after-nursing" className="hover:underline">Jobs → /government-jobs-after-nursing</Link>
              <Link to="/skills-required-for-nurse" className="hover:underline">Skills → /skills-required-for-nurse</Link>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
