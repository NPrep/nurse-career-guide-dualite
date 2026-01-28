import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileQuestion, PenTool } from 'lucide-react';

export function PracticeHub() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Since the user asked for specific pages for PYQs, Subject Tests, etc., 
            this component might not be directly linked in nav, but acts as a redirect or landing 
            if someone hits /practice. For now, I'll redirect or show a menu.
            However, the prompt specified /pyqs, /subject-wise-tests etc. as top level. 
            I will keep this as a simple landing page if needed.
        */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Practice Hub</h1>
        <div className="grid md:grid-cols-3 gap-8">
            <Link to="/pyqs" className="bg-white p-8 rounded-xl border border-gray-200 hover:border-teal-400 hover:shadow-lg transition-all text-center group">
                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-100">
                    <BookOpen className="h-8 w-8 text-teal-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Previous Year Papers</h2>
                <p className="text-gray-600">Download and solve past papers for NORCET, RRB, ESIC.</p>
            </Link>

            <Link to="/subject-wise-tests" className="bg-white p-8 rounded-xl border border-gray-200 hover:border-teal-400 hover:shadow-lg transition-all text-center group">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100">
                    <FileQuestion className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Subject-wise Tests</h2>
                <p className="text-gray-600">Focus on specific subjects like MSN, OBG, or Pharma.</p>
            </Link>

            <Link to="/mock-tests" className="bg-white p-8 rounded-xl border border-gray-200 hover:border-teal-400 hover:shadow-lg transition-all text-center group">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-100">
                    <PenTool className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Full Mock Tests</h2>
                <p className="text-gray-600">Simulate the real exam experience with timed tests.</p>
            </Link>
        </div>
    </div>
  );
}
