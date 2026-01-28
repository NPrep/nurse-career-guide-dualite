import React from 'react';
import { Link } from 'react-router-dom';
import { exams } from '../data/mockData';
import { Badge } from '../components/ui/Badge';
import { FileText, ArrowRight } from 'lucide-react';

export function Exams() {
  const centralExams = exams.filter(e => e.category === 'Central');
  const stateExams = exams.filter(e => e.category !== 'Central');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Nursing Exams Directory</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Comprehensive guide to all major nursing entrance and recruitment exams in India. 
          Find syllabus, eligibility, patterns, and preparation strategies.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="w-2 h-8 bg-teal-500 rounded-full mr-3"></span>
          Central / National Exams
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {centralExams.map(exam => (
            <Link key={exam.id} to={`/exams/${exam.slug}`} className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-teal-50 transition-colors">
                  <FileText className="h-6 w-6 text-gray-600 group-hover:text-teal-600" />
                </div>
                <Badge variant="secondary">{exam.category}</Badge>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{exam.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2 mb-4">{exam.overview}</p>
              <span className="text-sm font-medium text-teal-600 flex items-center">View Exam Details <ArrowRight className="ml-1 h-4 w-4"/></span>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
          State & CHO Exams
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stateExams.map(exam => (
            <Link key={exam.id} to={`/exams/${exam.slug}`} className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-blue-50 transition-colors">
                  <FileText className="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
                </div>
                <Badge variant="outline">{exam.category}</Badge>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{exam.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2 mb-4">{exam.overview}</p>
              <span className="text-sm font-medium text-teal-600 flex items-center">View Exam Details <ArrowRight className="ml-1 h-4 w-4"/></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
