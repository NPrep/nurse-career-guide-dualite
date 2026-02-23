import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock3, Download, Map, Tag } from 'lucide-react';

const roadmapPlans = [
  {
    id: '30-day-norcet',
    title: '30-Day NORCET Sprint',
    slug: '30-day-norcet-plan',
    description: 'Fast revision mode for candidates in the final month before exam day.',
    persona: 'For final year BSc',
    duration: '30 Days',
    pdf: '/downloads/30-day-norcet-roadmap.pdf',
    progress: ['Week 1: Foundations', 'Week 2: MSN Deep Dive', 'Week 3: PYQ + Mocks', 'Week 4: Final Revision'],
    preview: 'calendar',
  },
  {
    id: 'working-nurse',
    title: '60-Day Working Nurse Plan',
    slug: 'working-nurse-study-plan',
    description: 'Shift-friendly timeline with short weekday blocks and longer off-day sessions.',
    persona: 'For working nurses',
    duration: '60 Days',
    pdf: '/downloads/60-day-working-nurse-roadmap.pdf',
    progress: ['Week 1-2: Concept Reset', 'Week 3-4: Subject Strengthening', 'Week 5-6: PYQ Cycles', 'Week 7-8: Full Mocks'],
    preview: 'timeline',
  },
  {
    id: 'student-60',
    title: '60-Day Full-Time Student Plan',
    slug: '60-day-student-plan',
    description: 'Designed for full-time students preparing 6-8 hours daily with weekly assessment.',
    persona: 'For full-time students',
    duration: '60 Days',
    pdf: '/downloads/60-day-full-time-student-roadmap.pdf',
    progress: ['Week 1-2: Core Subjects', 'Week 3-4: Weak Topic Repair', 'Week 5-6: Speed + Accuracy', 'Week 7-8: Test Strategy'],
    preview: 'timeline',
  },
];

function CalendarPreview() {
  return (
    <div className="grid grid-cols-7 gap-1.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
      {Array.from({ length: 28 }).map((_, i) => (
        <div
          key={i}
          className={`h-6 rounded ${i % 6 === 0 ? 'bg-teal-200' : i % 5 === 0 ? 'bg-teal-100' : 'bg-white border border-slate-200'}`}
        />
      ))}
    </div>
  );
}

function TimelinePreview() {
  return (
    <div className="space-y-3">
      {['Foundation', 'Core Nursing', 'PYQ Drills', 'Mocks & Analysis'].map((step, idx) => (
        <div key={step} className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-teal-500" />
          <div className="h-px flex-1 bg-slate-300" />
          <span className="text-xs text-slate-600">{`Phase ${idx + 1}: ${step}`}</span>
        </div>
      ))}
    </div>
  );
}

export function Roadmaps() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Career Roadmaps</h1>
        <p className="text-lg text-gray-600">
          Visual, persona-based study systems with printable PDFs and week-by-week progress tracking.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {roadmapPlans.map((plan) => (
          <div key={plan.id} className="surface-card p-6 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <Map className="h-5 w-5 text-teal-700" />
                <h2 className="font-bold text-gray-900">{plan.title}</h2>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-teal-100 text-teal-700">{plan.duration}</span>
            </div>

            <p className="text-sm text-gray-600 mb-3">{plan.description}</p>
            <div className="inline-flex items-center gap-1 text-xs mb-4 px-2 py-1 rounded-full bg-indigo-50 text-indigo-700">
              <Tag className="h-3 w-3" /> {plan.persona}
            </div>

            <div className="mb-4 rounded-xl border border-gray-200 p-3 bg-white">
              {plan.preview === 'calendar' ? <CalendarPreview /> : <TimelinePreview />}
            </div>

            <div className="space-y-2 mb-5">
              {plan.progress.map((stage) => (
                <p key={stage} className="text-xs text-gray-600">{stage} →</p>
              ))}
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
              <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> Structured weekly</span>
              <span className="inline-flex items-center gap-1"><Clock3 className="h-3 w-3" /> Daily tasks</span>
            </div>

            <div className="flex gap-2">
              <Link
                to={`/roadmaps/${plan.slug}`}
                className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg border border-teal-600 py-2 text-sm font-medium text-teal-700 hover:bg-teal-50"
              >
                View Plan <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={plan.pdf}
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-3 text-gray-700 hover:bg-gray-50"
              >
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
