import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/ui/Badge';
import { Brain, FileText, MapPin, TrendingUp } from 'lucide-react';

const examCards = [
  { name: 'AIIMS NORCET', frequency: '2x/year', vacancies: '3,000-3,500', difficulty: 'High', salary: '₹56k-₹1.78L', fit: ['BSc Nursing', 'GNM + exp', 'All India'] },
  { name: 'RRB Staff Nurse', frequency: 'Every 2-3 years', vacancies: '1,000-1,500', difficulty: 'Medium', salary: '₹44k-₹1.42L', fit: ['GNM/BSc', 'Railway jobs', 'All India'] },
  { name: 'ESIC Nursing Officer', frequency: 'Irregular', vacancies: '500-1,000', difficulty: 'Medium', salary: '₹56k-₹1.78L', fit: ['GNM/BSc', 'Urban preference', 'Central govt'] },
  { name: 'DSSSB Nursing Officer', frequency: '1-2 years', vacancies: '1,000+', difficulty: 'Medium-High', salary: '₹44k-₹1.42L', fit: ['Delhi target', 'GNM/BSc', 'State quota'] },
  { name: 'State CHO Exams', frequency: 'Annual', vacancies: '3,000-8,000', difficulty: 'Medium', salary: '₹35k-₹45k', fit: ['Community health', 'BSc+ CCH', 'State based'] },
  { name: 'Kerala/UP/Bihar PSC', frequency: 'Annual/biannual', vacancies: '500-5,000', difficulty: 'Medium', salary: '₹39k-₹1.24L', fit: ['State service', 'Language advantage', 'GNM/BSc'] },
];

const quizFlow = [
  '1) Qualification: GNM / BSc / PB BSc?',
  '2) Experience: Fresher / 1-2 years / 2+ years?',
  '3) Location: All India / Home State / Metro cities?',
];

export function Exams() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Nursing Exam Directory</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Compare India&apos;s major nursing exams by frequency, vacancy trends, difficulty, and salary outcomes.
        </p>
      </div>

      <div className="surface-card p-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Brain className="h-5 w-5 text-teal-600" />
          <h2 className="text-lg font-bold text-gray-900">Which exam is right for me?</h2>
        </div>
        <p className="text-sm text-gray-600 mb-4">Use this quick 3-question flow to shortlist your best-fit exams:</p>
        <div className="grid md:grid-cols-3 gap-3 mb-4">
          {quizFlow.map((step) => (
            <div key={step} className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700">{step}</div>
          ))}
        </div>
        <p className="text-sm text-teal-700 font-medium">Typical recommendations: NORCET + ESIC (central), RRB (broad), CHO/PSC (state-focused).</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examCards.map((exam) => (
          <div key={exam.name} className="surface-card p-6 hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-teal-50 p-2 rounded-lg">
                <FileText className="h-5 w-5 text-teal-700" />
              </div>
              <Badge variant="secondary">{exam.difficulty}</Badge>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-3">{exam.name}</h3>
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <p className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-gray-400" /> Frequency: {exam.frequency}</p>
              <p>Approx vacancies: {exam.vacancies}</p>
              <p>Salary range: {exam.salary}</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {exam.fit.map((tag) => (
                <span key={tag} className="px-2 py-1 rounded-full bg-slate-100 text-slate-700 text-xs">{tag}</span>
              ))}
            </div>

            <Link to="/exams/aiims-norcet" className="text-sm font-medium text-teal-700 inline-flex items-center gap-1">
              View details <MapPin className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
