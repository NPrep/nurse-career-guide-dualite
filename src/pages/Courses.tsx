import React from 'react';
import { Badge } from '../components/ui/Badge';
import { coursesList } from '../data/mockData';
import { CheckCircle, ExternalLink } from 'lucide-react';

export function Courses() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Recommended Nursing Courses</h1>
        <p className="text-lg text-gray-600">
          A curated directory of trusted courses for competitive exams and skill enhancement. 
          We prioritize quality content and student reviews.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursesList.map((course) => (
          <div key={course.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all flex flex-col">
            <div className="h-32 bg-gradient-to-r from-teal-500 to-teal-700 flex items-center justify-center p-6 text-center">
              <h3 className="text-2xl font-bold text-white">{course.title}</h3>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <Badge variant="secondary">{course.tag}</Badge>
              </div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                {course.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        {feature}
                    </li>
                ))}
              </ul>
              
              <div className="mt-auto pt-4 border-t border-gray-100">
                <a 
                    href={course.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2.5 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center"
                >
                    View Course <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
