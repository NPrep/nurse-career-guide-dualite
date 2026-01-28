import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FileText } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { blogs } from '../data/mockData';
import { Map } from 'lucide-react'; // Re-imported Map here as it was used in removed section but needed for Key Modules

export function Home() {
  return (
    <div className="pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4">For Indian Nursing Students & Professionals</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Nurse Career Guide – <span className="text-teal-600">Exams, Roadmaps & Practice</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Navigating your nursing career shouldn't be confusing. Whether you are aiming for AIIMS NORCET, state government jobs, or exploring specialization, we provide the roadmap, exam details, and practice materials you need.
          </p>
          
          {/* Start Here Grid */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 text-left">Start Here: What describes you best?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                // Removed Career Path specific options
                { label: "I'm a Nursing Student (BSc/GNM)", path: "/exams" },
                { label: "I'm a Graduate preparing for Govt Jobs", path: "/roadmaps" },
                { label: "I want to Practice Questions", path: "/pyqs" },
                { label: "I'm looking for Courses", path: "/courses" },
              ].map((item, idx) => (
                <Link 
                  key={idx} 
                  to={item.path}
                  className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition-all group text-left"
                >
                  <span className="font-medium text-gray-700 group-hover:text-teal-800">{item.label}</span>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-teal-600" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Goal Section Removed as it was purely Career Path based */}

      {/* Key Modules */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Everything you need to succeed</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Roadmaps */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Map className="h-6 w-6 text-teal-600" />
                <h3 className="font-bold text-lg">Career Roadmaps</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Step-by-step study plans for 30, 60, and 90 days. Tailored for working nurses and full-time students.</p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-gray-500 flex items-center"><div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></div>30-Day NORCET Plan</li>
                <li className="text-sm text-gray-500 flex items-center"><div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></div>Working Nurse Schedule</li>
              </ul>
              <Link to="/roadmaps" className="text-teal-600 text-sm font-medium hover:underline">Explore Roadmaps &rarr;</Link>
            </div>

            {/* Exam Directory */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-teal-600" />
                <h3 className="font-bold text-lg">Exam Directory</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Detailed syllabus, eligibility, and patterns for all major Indian nursing exams.</p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-gray-500 flex items-center"><div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></div>AIIMS NORCET</li>
                <li className="text-sm text-gray-500 flex items-center"><div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></div>RRB & ESIC</li>
              </ul>
              <Link to="/exams" className="text-teal-600 text-sm font-medium hover:underline">Browse Exams &rarr;</Link>
            </div>

            {/* Practice Hub */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-teal-600" />
                <h3 className="font-bold text-lg">Practice Hub</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Access previous year questions, subject-wise tests, and full-length mocks.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary">PYQs</Badge>
                <Badge variant="secondary">Subject Tests</Badge>
                <Badge variant="secondary">Mocks</Badge>
              </div>
              <p className="text-xs text-gray-400 mb-3">Some learners follow structured courses alongside practice. See the <Link to="/courses" className="text-teal-600 underline">Courses page</Link> for options.</p>
              <Link to="/pyqs" className="text-teal-600 text-sm font-medium hover:underline">Start Practicing &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates / Blog */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Latest Guidance</h2>
          <Link to="/blog" className="text-teal-600 font-medium hover:text-teal-700 flex items-center text-sm">
            Read all articles <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.slug}`} className="group">
              <div className="aspect-video bg-gray-100 rounded-xl mb-4 overflow-hidden">
                 {/* Placeholder for blog image */}
                 <div className="w-full h-full bg-teal-50 flex items-center justify-center text-teal-200">
                    <FileText className="h-12 w-12" />
                 </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{blog.category}</Badge>
                <span className="text-xs text-gray-500">{blog.date}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">{blog.title}</h3>
              <p className="text-sm text-gray-500 line-clamp-2">{blog.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
