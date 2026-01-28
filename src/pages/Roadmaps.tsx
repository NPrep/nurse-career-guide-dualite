import React from 'react';
import { Link } from 'react-router-dom';
import { roadmaps } from '../data/mockData';
import { Map, Calendar, Clock } from 'lucide-react';

export function Roadmaps() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Study Roadmaps</h1>
        <p className="text-lg text-gray-600">
          Structured, day-by-day study plans designed for different timelines and student profiles. 
          Stop guessing what to study next.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {roadmaps.map(plan => (
          <div key={plan.id} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-teal-100 p-2 rounded-lg">
                <Map className="h-6 w-6 text-teal-700" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">{plan.title}</h2>
            </div>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            
            <div className="flex items-center gap-6 mb-8 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{plan.weeks.length > 1 ? `${plan.weeks.length} Weeks` : 'Flexible'}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>Daily Schedule</span>
              </div>
            </div>

            <Link 
              to={`/roadmaps/${plan.slug}`}
              className="block w-full text-center py-3 border border-teal-600 text-teal-600 font-medium rounded-lg hover:bg-teal-50 transition-colors"
            >
              View Full Plan
            </Link>
          </div>
        ))}

        {/* Placeholder for more */}
        <div className="bg-gray-50 border border-dashed border-gray-300 rounded-xl p-8 flex flex-col justify-center items-center text-center opacity-75">
          <h3 className="font-bold text-gray-900 mb-2">Weak Subject Recovery Plan</h3>
          <p className="text-sm text-gray-500 mb-4">Coming soon: A specialized plan for students weak in Anatomy or Pharma.</p>
          <span className="px-3 py-1 bg-gray-200 text-gray-600 text-xs rounded-full">Coming Soon</span>
        </div>
      </div>
    </div>
  );
}
