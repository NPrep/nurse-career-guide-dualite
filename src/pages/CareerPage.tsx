import React from 'react';
import { Link } from 'react-router-dom';
import type { CareerPage as CareerPageType } from '../data/careerPages';

type CareerPageProps = {
  page: CareerPageType;
};

export function CareerPage({ page }: CareerPageProps) {
  return (
    <div>
      <section className="py-16 text-center bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{page.title}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">{page.intro}</p>
        </div>
      </section>

      {page.sections.map((section, index) => (
        <section key={section.heading} className={`py-12 px-6 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">{section.heading}</h2>

            {section.type === 'paragraph' ? (
              <div className="p-6 rounded-2xl shadow-md bg-white">
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            ) : null}

            {section.type === 'list' && section.items ? (
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                {section.items.map((item) => (
                  <div key={item} className="p-6 rounded-2xl shadow-md bg-white">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{item}</h3>
                    <p className="text-gray-600 leading-relaxed">• Key nursing career insight and practical guidance for this area.</p>
                  </div>
                ))}
              </div>
            ) : null}

            {section.type === 'ordered' && section.items ? (
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                {section.items.map((item, itemIndex) => (
                  <div key={item} className="p-6 rounded-2xl shadow-md bg-white">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Step {itemIndex + 1}</h3>
                    <p className="text-gray-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ))}

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
              Start Now
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">Explore More Career Guidance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <Link to="/nursing-career-options" className="p-6 rounded-2xl shadow-md bg-white hover:-translate-y-0.5 transition-all">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Career</h3>
              <p className="text-gray-600 leading-relaxed">Go to /nursing-career-options</p>
            </Link>
            <Link to="/bsc-nursing-course-details" className="p-6 rounded-2xl shadow-md bg-white hover:-translate-y-0.5 transition-all">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Courses</h3>
              <p className="text-gray-600 leading-relaxed">Go to /bsc-nursing-course-details</p>
            </Link>
            <Link to="/government-jobs-after-nursing" className="p-6 rounded-2xl shadow-md bg-white hover:-translate-y-0.5 transition-all">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Jobs</h3>
              <p className="text-gray-600 leading-relaxed">Go to /government-jobs-after-nursing</p>
            </Link>
            <Link to="/skills-required-for-nurse" className="p-6 rounded-2xl shadow-md bg-white hover:-translate-y-0.5 transition-all">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Skills</h3>
              <p className="text-gray-600 leading-relaxed">Go to /skills-required-for-nurse</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
