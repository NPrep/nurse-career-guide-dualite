import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { careerPaths } from '../data/mockData';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export function CareerPathDetail() {
  const { slug } = useParams();
  const path = careerPaths.find(p => p.slug === slug);

  if (!path) {
    // Fallback for demo purposes if not found in mock data
    if (slug === 'abroad-pathways-overview') {
        return (
            <div className="max-w-4xl mx-auto px-4 py-12">
                <Link to="/career-paths" className="inline-flex items-center text-sm text-gray-500 hover:text-teal-600 mb-6">
                    <ArrowLeft className="h-4 w-4 mr-1" /> Back to Career Paths
                </Link>
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Abroad Nursing Pathways</h1>
                <p className="text-lg text-gray-700 mb-8">
                    Working abroad is a dream for many Indian nurses due to better pay, work-life balance, and professional respect.
                    This guide provides a high-level overview of the requirements for major countries.
                </p>
                {/* Content placeholder */}
                <div className="prose max-w-none text-gray-600">
                    <p>Content for abroad pathways would go here...</p>
                </div>
            </div>
        )
    }
    return <Navigate to="/career-paths" />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="mb-8">
        <Link to="/career-paths" className="inline-flex items-center text-sm text-gray-500 hover:text-teal-600">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Career Paths
        </Link>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{path.title}</h1>
      
      <div className="bg-teal-50 border border-teal-100 rounded-xl p-6 mb-10">
        <h2 className="text-lg font-semibold text-teal-900 mb-2">Overview</h2>
        <p className="text-teal-800 leading-relaxed">{path.description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-12">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Who is this for?</h3>
          <p className="text-gray-600 mb-6">{path.whoItSuits}</p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Required Qualifications</h3>
          <ul className="space-y-2 mb-6">
            {path.qualifications.map((q, i) => (
              <li key={i} className="flex items-start text-gray-700">
                <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                {q}
              </li>
            ))}
          </ul>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4">Skills to Build</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-1">
             <li>Clinical competence in respective specialty</li>
             <li>Patient communication & counseling</li>
             <li>Documentation & reporting</li>
             <li>Time management</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Career Growth Ladder</h3>
          <div className="overflow-hidden border border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role / Designation</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {path.growth.map((step, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-3 text-sm text-gray-900 font-medium">{step.role}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{step.exp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Practice Plan</h2>
        <p className="text-gray-600 mb-6">To succeed in this path, we recommend a structured approach to preparation.</p>
        
        <div className="grid sm:grid-cols-3 gap-4">
          <Link to="/pyqs" className="block p-4 border border-gray-200 rounded-lg hover:border-teal-400 hover:bg-teal-50 transition-colors">
            <h4 className="font-bold text-gray-900 mb-1">Solve PYQs</h4>
            <p className="text-xs text-gray-500">Understand the exam pattern from past papers.</p>
          </Link>
          <Link to="/subject-wise-tests" className="block p-4 border border-gray-200 rounded-lg hover:border-teal-400 hover:bg-teal-50 transition-colors">
            <h4 className="font-bold text-gray-900 mb-1">Subject Tests</h4>
            <p className="text-xs text-gray-500">Strengthen your weak subjects.</p>
          </Link>
          <Link to="/mock-tests" className="block p-4 border border-gray-200 rounded-lg hover:border-teal-400 hover:bg-teal-50 transition-colors">
            <h4 className="font-bold text-gray-900 mb-1">Full Mocks</h4>
            <p className="text-xs text-gray-500">Simulate the real exam environment.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
