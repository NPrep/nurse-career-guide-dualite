import React from 'react';
import { pyqCollections } from '../../data/mockData';
import { FileText, ExternalLink } from 'lucide-react';

export function PYQs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Previous Year Question Papers (PYQs)</h1>
      <p className="text-lg text-gray-600 mb-12 max-w-3xl">
        The best way to predict your exam score is to solve past papers. 
        Access authentic memory-based papers for NORCET, RRB, CHO, ESIC, and other major exams.
      </p>

      <div className="space-y-12">
        {pyqCollections.map((collection) => (
          <div key={collection.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-teal-50 px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-teal-900">{collection.title}</h2>
            </div>
            <div className="p-6">
              <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
                {collection.papers.map((paper, index) => (
                  <a 
                    key={index} 
                    href={paper.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-teal-50 hover:border-teal-200 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-gray-400 group-hover:text-teal-600 flex-shrink-0" />
                      <span className="font-medium text-gray-700 group-hover:text-teal-900">{paper.title}</span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-teal-600 flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-gray-50 border border-dashed border-gray-300 rounded-xl text-center">
        <p className="text-gray-500">More PYQs for State Exams coming soon.</p>
      </div>
    </div>
  );
}
