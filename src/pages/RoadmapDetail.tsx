import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { roadmaps } from '../data/mockData';
import { ArrowLeft, CheckSquare } from 'lucide-react';

export function RoadmapDetail() {
  const { slug } = useParams();
  const plan = roadmaps.find(p => p.slug === slug);

  if (!plan) return <Navigate to="/roadmaps" />;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/roadmaps" className="inline-flex items-center text-sm text-gray-500 hover:text-teal-600 mb-6">
        <ArrowLeft className="h-4 w-4 mr-1" /> Back to Roadmaps
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">{plan.title}</h1>
      <p className="text-lg text-gray-600 mb-8">{plan.description}</p>

      <div className="space-y-8">
        {plan.weeks.map((week, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="font-bold text-gray-900">
                {typeof week.week === 'number' ? `Week ${week.week}` : week.week}
              </h3>
              <span className="text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                Focus: {week.focus}
              </span>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {week.tasks.map((task, tIdx) => (
                  <li key={tIdx} className="flex items-start">
                    <CheckSquare className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <span className="text-gray-700">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-teal-50 border border-teal-200 rounded-xl p-6 text-center">
        <h3 className="font-bold text-teal-900 mb-2">Need material for this plan?</h3>
        <p className="text-teal-800 text-sm mb-4">Access subject-wise tests and PYQs to stick to this schedule.</p>
        <div className="flex justify-center gap-4">
            <Link to="/pyqs" className="text-sm font-medium text-teal-700 underline hover:text-teal-900">Go to PYQs</Link>
            <Link to="/subject-wise-tests" className="text-sm font-medium text-teal-700 underline hover:text-teal-900">Go to Subject Tests</Link>
        </div>
      </div>
    </div>
  );
}
