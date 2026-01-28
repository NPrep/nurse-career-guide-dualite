import React from 'react';
import { subjectTests } from '../../data/mockData';
import { ChevronRight, FileQuestion } from 'lucide-react';

export function SubjectTests() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Subject-wise Practice Tests</h1>
      <p className="text-lg text-gray-600 mb-12 max-w-3xl">
        Master one subject at a time. Recommended for students in their early preparation phase or those targeting weak areas.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjectTests.map((test, index) => (
          <a 
            key={index}
            href={test.link}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-teal-300 transition-all group"
          >
            <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <FileQuestion className="h-6 w-6 text-blue-600" />
                </div>
                <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-blue-600 transition-colors" />
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700">{test.subject}</h2>
            <p className="text-sm text-gray-500">Click to attempt test on NPrep</p>
          </a>
        ))}
      </div>
    </div>
  );
}
