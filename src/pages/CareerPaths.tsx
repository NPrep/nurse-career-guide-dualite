import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase } from 'lucide-react';
import { careerPaths } from '../data/mockData';

export function CareerPaths() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Nursing Career Paths</h1>
        <p className="text-lg text-gray-600">
          Explore the diverse opportunities available in the nursing profession. From clinical roles in government hospitals to teaching and public health.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {careerPaths.map((path) => (
          <div key={path.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-teal-50 p-3 rounded-lg">
                <Briefcase className="h-6 w-6 text-teal-600" />
              </div>
              <Link 
                to={`/career-paths/${path.slug}`}
                className="text-sm font-medium text-teal-600 hover:text-teal-700 flex items-center"
              >
                View Details <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{path.title}</h2>
            <p className="text-gray-600 mb-4">{path.description}</p>
            
            <div className="space-y-3">
              <div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Best For</span>
                <p className="text-sm text-gray-700">{path.whoItSuits}</p>
              </div>
              <div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Key Exams</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {path.exams.map((exam, i) => (
                    <span key={i} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                      {exam}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Static Card for Abroad - since it's an overview */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <Link 
                to="/career-paths/abroad-pathways-overview"
                className="text-sm font-medium text-teal-600 hover:text-teal-700 flex items-center"
              >
                View Details <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Abroad Pathways Overview</h2>
            <p className="text-gray-600 mb-4">High-level guidance for nurses aspiring to work in USA, UK, Australia, Canada, or Ireland.</p>
            <div className="space-y-3">
                <p className="text-sm text-gray-700">Includes overview of NCLEX, OET/IELTS requirements and general process steps. (No immigration advice).</p>
            </div>
        </div>
      </div>
    </div>
  );
}
