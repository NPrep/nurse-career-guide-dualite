import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { Badge } from '../components/ui/Badge';
import { FileText, Clock, Calendar } from 'lucide-react';

export function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Nursing Career & Exam Guidance Blog</h1>
        <p className="text-lg text-gray-600">
          In-depth articles, strategies, and guides to help you navigate your nursing career.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((blog) => (
          <Link key={blog.id} to={`/blog/${blog.slug}`} className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all">
            <div className="aspect-video bg-gray-100 flex items-center justify-center text-gray-300 group-hover:bg-teal-50 group-hover:text-teal-200 transition-colors relative">
                 <FileText className="h-16 w-16" />
                 <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm shadow-sm">{blog.category}</Badge>
                 </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {blog.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {blog.readTime}</span>
                <Badge className="bg-emerald-100 text-emerald-700">Updated for 2026</Badge>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">{blog.title}</h2>
              <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">{blog.excerpt}</p>
              <span className="text-teal-600 font-medium text-sm mt-auto inline-flex items-center">Read Article &rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
