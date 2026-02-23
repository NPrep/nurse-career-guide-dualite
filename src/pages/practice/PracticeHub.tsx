import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle2, Clock3, FileQuestion, PenTool, Radar } from 'lucide-react';

const countdown = '11h 42m 09s';

export function PracticeHub() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Practice Hub</h1>

      <div className="surface-card p-6 mb-8">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm text-teal-700 font-semibold">Daily Challenge</p>
            <h2 className="text-xl font-bold text-gray-900">Today&apos;s 10 Questions</h2>
            <p className="text-sm text-gray-600">Finish before midnight to keep your streak active.</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Time left</p>
            <p className="font-mono text-lg font-semibold text-amber-600">{countdown}</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <Link to="/pyqs" className="bg-white p-8 rounded-xl border border-gray-200 hover:border-teal-400 hover:shadow-lg transition-all text-center group">
          <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-100">
            <BookOpen className="h-8 w-8 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Previous Year Papers</h2>
          <p className="text-gray-600 mb-3">Download and solve past papers for NORCET, RRB, ESIC.</p>
          <p className="text-xs text-teal-700 font-medium inline-flex items-center gap-1"><CheckCircle2 className="h-4 w-4" /> You&apos;ve solved 42 of 180 papers</p>
        </Link>

        <Link to="/subject-wise-tests" className="bg-white p-8 rounded-xl border border-gray-200 hover:border-teal-400 hover:shadow-lg transition-all text-center group">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100">
            <FileQuestion className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Subject-wise Tests</h2>
          <p className="text-gray-600">Focus on specific subjects like MSN, OBG, or Pharma.</p>
        </Link>

        <Link to="/mock-tests" className="bg-white p-8 rounded-xl border border-gray-200 hover:border-teal-400 hover:shadow-lg transition-all text-center group">
          <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-100">
            <PenTool className="h-8 w-8 text-purple-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Full Mock Tests</h2>
          <p className="text-gray-600">Simulate the real exam experience with timed tests.</p>
        </Link>
      </div>

      <div className="surface-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <Radar className="h-5 w-5 text-teal-600" />
          <h2 className="font-bold text-gray-900">Subject Strength Radar (example)</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-56 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
            <div className="absolute h-40 w-40 rounded-full border border-slate-300" />
            <div className="absolute h-28 w-28 rounded-full border border-slate-300" />
            <div className="absolute h-16 w-16 rounded-full border border-slate-300" />
            <div className="absolute h-36 w-32 rotate-12 bg-teal-200/70 clip-path-polygon" style={{ clipPath: 'polygon(50% 0%, 85% 30%, 75% 80%, 30% 95%, 5% 45%)' }} />
          </div>
          <div className="space-y-3 text-sm text-gray-600">
            <p className="font-medium text-gray-900">Current strengths</p>
            <p>MSN: 82% accuracy</p>
            <p>OBG: 74% accuracy</p>
            <p>Community: 69% accuracy</p>
            <p>Pharmacology: 58% accuracy</p>
            <p className="inline-flex items-center gap-1 text-amber-700"><Clock3 className="h-4 w-4" /> Suggested focus this week: Pharmacology + CHN PYQs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
