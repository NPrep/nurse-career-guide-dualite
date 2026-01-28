import React from 'react';
import { mockTestLinks } from '../../data/mockData';
import { Clock, CheckCircle, ExternalLink } from 'lucide-react';

export function MockTests() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Full Length Mock Tests</h1>
      <p className="text-lg text-gray-600 mb-12 max-w-3xl">
        Simulate the actual exam environment. 
        Strict timing, negative marking, and performance analysis.
      </p>

      <div className="grid gap-6">
        {mockTestLinks.map((mock, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:shadow-md transition-all">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{mock.title}</h2>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <span className="flex items-center"><Clock className="h-4 w-4 mr-1" /> Exam Duration</span>
                <span className="flex items-center"><CheckCircle className="h-4 w-4 mr-1" /> Full Syllabus</span>
              </div>
            </div>
            <div className="flex-shrink-0">
               <a 
                 href={mock.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
               >
                 Start Mock <ExternalLink className="ml-2 h-4 w-4" />
               </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-8">
        <h3 className="text-lg font-bold text-blue-900 mb-4">Mock Analysis Checklist</h3>
        <p className="text-blue-800 mb-4">After every mock, check:</p>
        <ul className="list-disc list-inside text-blue-800 space-y-1">
            <li>Did I finish on time?</li>
            <li>Which subject had the most negatives?</li>
            <li>Did I make silly mistakes in easy questions?</li>
        </ul>
      </div>
    </div>
  );
}
