import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { ArrowLeft, Calendar, Clock, User, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { Badge } from '../components/ui/Badge';

export function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" />;
  }

  const relatedPosts = blogPosts.filter(p => post.relatedSlugs.includes(p.slug));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-teal-600 mb-8">
        <ArrowLeft className="h-4 w-4 mr-1" /> Back to Blog
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <article className="lg:col-span-8">
          <header className="mb-10">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-500 border-b border-gray-100 pb-8">
              <span className="flex items-center gap-2"><User className="h-4 w-4" /> {post.author}</span>
              <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {post.date}</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> {post.readTime}</span>
            </div>
          </header>

          <div className="prose prose-teal max-w-none">
            {post.sections.map((section, idx) => {
              switch (section.type) {
                case 'h2':
                  return <h2 key={idx} id={section.id} className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">{section.content}</h2>;
                case 'h3':
                  return <h3 key={idx} className="text-xl font-semibold text-gray-800 mt-8 mb-3">{section.content}</h3>;
                case 'paragraph':
                  return <p key={idx} className="text-gray-700 leading-relaxed mb-6">{section.content}</p>;
                case 'list':
                  return (
                    <ul key={idx} className="list-disc list-inside space-y-2 mb-6 text-gray-700 bg-gray-50 p-6 rounded-xl border border-gray-100">
                      {section.items?.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  );
                case 'steps':
                  return (
                    <div key={idx} className="space-y-4 mb-8">
                      {section.items?.map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {i + 1}
                          </div>
                          <p className="text-gray-700 pt-1">{item}</p>
                        </div>
                      ))}
                    </div>
                  );
                case 'callout':
                  return (
                    <div key={idx} className={`p-6 rounded-xl mb-8 border-l-4 ${
                      section.variant === 'mistake' ? 'bg-red-50 border-red-500 text-red-900' :
                      section.variant === 'summary' ? 'bg-teal-50 border-teal-500 text-teal-900' :
                      'bg-blue-50 border-blue-500 text-blue-900'
                    }`}>
                      <div className="flex gap-3">
                        {section.variant === 'mistake' ? <AlertTriangle className="h-6 w-6 flex-shrink-0" /> :
                         section.variant === 'summary' ? <CheckCircle className="h-6 w-6 flex-shrink-0" /> :
                         <Info className="h-6 w-6 flex-shrink-0" />}
                        <div>
                          <p className="font-medium">{section.content}</p>
                        </div>
                      </div>
                    </div>
                  );
                case 'table':
                  if (!section.table) return null;
                  return (
                    <div key={idx} className="overflow-x-auto mb-8 border border-gray-200 rounded-lg shadow-sm">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            {section.table.headers.map((h, i) => (
                              <th key={i} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {section.table.rows.map((row, rIdx) => (
                            <tr key={rIdx}>
                              {section.table?.headers.map((h, cIdx) => (
                                <td key={cIdx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row[h]}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* FAQs Section */}
          {post.faqs.length > 0 && (
            <section className="mt-16 pt-10 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {post.faqs.map((faq, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Glossary Section */}
          {post.glossary.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Glossary of Terms</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {post.glossary.map((term, i) => (
                  <div key={i} className="border border-gray-200 p-4 rounded-lg">
                    <span className="font-bold text-teal-700 block mb-1">{term.term}</span>
                    <span className="text-sm text-gray-600">{term.definition}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Table of Contents */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-24">
            <h3 className="font-bold text-gray-900 mb-4">Table of Contents</h3>
            <nav className="space-y-2">
              {post.toc.map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  className="block text-sm text-gray-600 hover:text-teal-600 hover:translate-x-1 transition-all"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Related Articles</h3>
              <div className="space-y-4">
                {relatedPosts.map((related) => (
                  <Link key={related.id} to={`/blog/${related.slug}`} className="block group">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors mb-1">
                      {related.title}
                    </h4>
                    <span className="text-xs text-gray-500">{related.readTime}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
