import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-teal-600 p-1 rounded-md">
                <Stethoscope className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg text-gray-900">
                Nurse<span className="text-teal-600">Career</span>Guide
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Nursing career guidance platform focused on courses, career options, skills, and job opportunities in India.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Career Links</h3>
            <ul className="space-y-3">
              <li><Link to="/how-to-become-a-nurse" className="text-sm text-gray-600 hover:text-teal-600">How to Become a Nurse</Link></li>
              <li><Link to="/nursing-career-options" className="text-sm text-gray-600 hover:text-teal-600">Nursing Career Options</Link></li>
              <li><Link to="/scope-of-nursing-in-india" className="text-sm text-gray-600 hover:text-teal-600">Scope of Nursing</Link></li>
              <li><Link to="/future-scope-of-nursing" className="text-sm text-gray-600 hover:text-teal-600">Future Scope</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Courses & Jobs</h3>
            <ul className="space-y-3">
              <li><Link to="/bsc-nursing-course-details" className="text-sm text-gray-600 hover:text-teal-600">BSc Nursing Details</Link></li>
              <li><Link to="/gnm-nursing-course-details" className="text-sm text-gray-600 hover:text-teal-600">GNM Course Details</Link></li>
              <li><Link to="/government-jobs-after-nursing" className="text-sm text-gray-600 hover:text-teal-600">Government Jobs</Link></li>
              <li><Link to="/private-jobs-after-nursing" className="text-sm text-gray-600 hover:text-teal-600">Private Jobs</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 text-center space-y-2">
          <p className="text-sm text-gray-500">
            Many graduates choose government exam pathways later. <a href="https://nprep.in" target="_blank" rel="noopener noreferrer" className="text-teal-600 font-semibold hover:underline">Explore Preparation at NPrep</a>.
          </p>
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} nursecareerguide.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
