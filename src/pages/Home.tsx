import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CalendarCheck2,
  Download,
  FileText,
  GraduationCap,
  Map,
  NotebookPen,
} from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { blogs } from '../data/mockData';

const personaCards = [
  {
    title: "I'm a Nursing Student",
    description: 'Build fundamentals, choose exam targets, and avoid study chaos.',
    path: '/exams',
    icon: GraduationCap,
  },
  {
    title: "I'm a Graduate preparing for Govt Jobs",
    description: 'Follow exam-wise timelines and high-yield revision roadmaps.',
    path: '/roadmaps',
    icon: Briefcase,
  },
  {
    title: "I want to Practice Questions",
    description: 'Use PYQs, daily challenges, and timed mocks to improve speed.',
    path: '/practice',
    icon: NotebookPen,
  },
  {
    title: "I'm looking for Courses & Resources",
    description: 'Compare free resources, books, and structured paid options.',
    path: '/courses',
    icon: BookOpen,
  },
];

export function Home() {
  return (
    <div className="pb-12">
      <section className="bg-gradient-to-b from-teal-50 via-cyan-50/40 to-slate-50 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4">For Indian Nursing Students & Professionals</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Nurse Career Guide – <span className="text-teal-600">Exams, Roadmaps & Practice</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Persona-first guidance for every nursing journey. Start as a student, graduate, or working nurse and get
            the exact plan, exam pathway, and practice workflow you need.
          </p>

          <div className="surface-card p-6 sm:p-8 text-left">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Start Here: What describes you best?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personaCards.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    to={item.path}
                    className="group rounded-xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-teal-600" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Everything you need to succeed</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="surface-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Map className="h-6 w-6 text-teal-600" />
                <h3 className="font-bold text-lg">Career Roadmaps</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">30/60-day visual plans with weekly checkpoints and PDF downloads.</p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-gray-500 flex items-center"><div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></div>30-Day NORCET Calendar</li>
                <li className="text-sm text-gray-500 flex items-center"><div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></div>Working Nurse Timeline</li>
              </ul>
              <Link to="/roadmaps" className="text-teal-600 text-sm font-medium hover:underline">Explore Roadmaps &rarr;</Link>
            </div>

            <div className="surface-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-teal-600" />
                <h3 className="font-bold text-lg">Exam Directory</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Compare difficulty, vacancies, and salary, then use the quick-fit quiz.</p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-gray-500 flex items-center"><div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></div>AIIMS NORCET</li>
                <li className="text-sm text-gray-500 flex items-center"><div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></div>RRB, ESIC, DSSSB, State PSC</li>
              </ul>
              <Link to="/exams" className="text-teal-600 text-sm font-medium hover:underline">Browse Exams &rarr;</Link>
            </div>

            <div className="surface-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <CalendarCheck2 className="h-6 w-6 text-teal-600" />
                <h3 className="font-bold text-lg">Practice Hub</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Daily 10-question challenge, PYQs progress, subject-wise strengths.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary">PYQs</Badge>
                <Badge variant="secondary">Subject Tests</Badge>
                <Badge variant="secondary">Mocks</Badge>
              </div>
              <p className="text-xs text-gray-400 mb-3">For structured prep with resources, check the <Link to="/courses" className="text-teal-600 underline">Resources page</Link>.</p>
              <Link to="/practice" className="text-teal-600 text-sm font-medium hover:underline">Start Practicing &rarr;</Link>
            </div>
          </div>

          <div className="mt-8 surface-card p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="font-semibold text-gray-900">Need offline study plans?</p>
              <p className="text-sm text-gray-600">Download printable roadmap PDFs and track week-wise completion.</p>
            </div>
            <Link to="/roadmaps" className="inline-flex items-center gap-2 text-teal-700 font-medium">
              Download Roadmaps <Download className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="nprep-testimonial-cta">
            <h2 className="text-3xl font-semibold text-[var(--text-primary)]">Hear from real students</h2>
            <a className="cta" href="https://nprep.in/blogs?filter=NORCET+Success+Story" target="_blank" rel="noopener noreferrer">
              Read verified success stories on NPrep
            </a>
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
          {blogs.slice(0, 6).map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.slug}`} className="group">
              <div className="aspect-video bg-gray-100 rounded-xl mb-4 overflow-hidden">
                <div className="w-full h-full bg-teal-50 flex items-center justify-center text-teal-200">
                  <FileText className="h-12 w-12" />
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{blog.category}</Badge>
                {blog.date.includes('2026') ? <Badge className="bg-emerald-100 text-emerald-700">Updated for 2026</Badge> : null}
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
