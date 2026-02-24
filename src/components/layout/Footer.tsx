import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Phone, AlertTriangle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-teal-600 p-1 rounded-md">
                <Stethoscope className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg text-gray-900">
                Nurse<span className="text-teal-600">Career</span>Guide
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Your trusted companion for nursing career navigation, exam preparation, and professional growth in India.
            </p>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Phone className="h-4 w-4 text-teal-600" />
                <a href="tel:+916377639169" className="hover:underline">+91 6377 6391 69</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Exams & Practice</h3>
            <ul className="space-y-3">
              <li><Link to="/exams/aiims-norcet" className="text-sm text-gray-600 hover:text-teal-600">AIIMS NORCET</Link></li>
              <li><Link to="/exams/rrb-staff-nurse" className="text-sm text-gray-600 hover:text-teal-600">RRB Staff Nurse</Link></li>
              <li><Link to="/pyqs" className="text-sm text-gray-600 hover:text-teal-600">Previous Year Papers</Link></li>
              <li><Link to="/mock-tests" className="text-sm text-gray-600 hover:text-teal-600">Mock Tests</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/roadmaps" className="text-sm text-gray-600 hover:text-teal-600">Study Roadmaps</Link></li>
              <li><Link to="/courses" className="text-sm text-gray-600 hover:text-teal-600">Recommended Courses</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-600 hover:text-teal-600">Guidance Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 hover:text-teal-600">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="nprep-disclaimer-banner bg-yellow-50 border border-yellow-100 rounded-lg p-4 mb-6 flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                    <strong>Disclaimer:</strong> This website is an informational portal designed to help nursing students and professionals. 
                    We are <strong>not</strong> an official government website or affiliated with any exam conducting body (like AIIMS, RRB, ESIC). 
                    Please verify all official notifications from their respective official websites.
                </p>
            </div>
            <div className="text-center space-y-2">
                <p className="text-sm text-gray-500">
                  In association with <a href="https://nprep.in" target="_blank" rel="noopener noreferrer" className="text-teal-600 font-semibold hover:underline">NPrep</a>
                </p>
                <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} NurseCareerGuide.com. All rights reserved.</p>
            </div>
        </div>
      </div>
    </footer>
  );
}
