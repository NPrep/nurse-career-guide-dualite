import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { exams } from '../data/mockData';
import { ArrowLeft, BookOpen, Clock, AlertCircle } from 'lucide-react';

export function ExamDetail() {
  const { slug } = useParams();
  const exam = exams.find(e => e.slug === slug);

  if (!exam) return <Navigate to="/exams" />;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/exams" className="inline-flex items-center text-sm text-gray-500 hover:text-teal-600 mb-6">
        <ArrowLeft className="h-4 w-4 mr-1" /> Back to Exams Directory
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">{exam.title} Guide</h1>
      <p className="text-lg text-gray-600 mb-8">{exam.overview}</p>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <div className="md:col-span-2 space-y-8">
          {/* Eligibility */}
          <section className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-teal-600 mt-0.5" />
              <p className="text-gray-700">{exam.eligibility}</p>
            </div>
          </section>

          {/* Pattern */}
          <section className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Exam Pattern</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-500 font-medium">
                  <tr>
                    <th className="px-4 py-2">Subject / Section</th>
                    <th className="px-4 py-2">Questions</th>
                    <th className="px-4 py-2">Marks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {exam.pattern.map((row, i) => (
                    <tr key={i}>
                      <td className="px-4 py-3 text-gray-900">{row.subject}</td>
                      <td className="px-4 py-3 text-gray-600">{row.questions}</td>
                      <td className="px-4 py-3 text-gray-600">{row.marks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Syllabus */}
          <section className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Syllabus Overview</h2>
            <div className="flex flex-wrap gap-2">
              {exam.syllabus.map((topic, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {topic}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-teal-50 border border-teal-100 rounded-xl p-6">
            <h3 className="font-bold text-teal-900 mb-3">Preparation Roadmap</h3>
            <p className="text-sm text-teal-800 mb-4">Follow a structured plan to crack {exam.title}.</p>
            <Link to="/roadmaps" className="block w-full text-center bg-teal-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors">
              View 30/60 Day Plan
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-4">Practice Now</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/pyqs" className="flex items-center text-sm text-gray-600 hover:text-teal-600">
                  <BookOpen className="h-4 w-4 mr-2" /> Previous Year Papers
                </Link>
              </li>
              <li>
                <Link to="/mock-tests" className="flex items-center text-sm text-gray-600 hover:text-teal-600">
                  <Clock className="h-4 w-4 mr-2" /> Attempt Mock Test
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
