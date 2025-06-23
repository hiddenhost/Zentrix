import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Images, Calendar, Clock, User, ChevronRight, BookOpen, Share2, Copy, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { blogPosts } from '@/data/blog-data';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id.toString() === id);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeSection, setActiveSection] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!post?.sections) return;
      
      const sectionElements = post.sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean);

      const currentSection = sectionElements.find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-sm border">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="text-gray-400" size={24} />
          </div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Blog post not found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <ArrowLeft size={18} className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const ImageModal = ({ src, onClose }) => (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" 
      onClick={onClose}
    >
      <div className="max-w-5xl max-h-[90vh] overflow-hidden rounded-lg">
        <img src={src} alt="Gallery image" className="max-w-full max-h-[90vh] object-contain" />
      </div>
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-white bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors backdrop-blur-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );

  const TableOfContents = () => {
    if (!post.sections || post.sections.length === 0) return null;

    return (
      <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-24">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
          <BookOpen size={18} className="mr-2 text-blue-600" />
          Table of Contents
        </h3>
        <nav className="space-y-2">
          {post.sections.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block py-2 px-3 rounded-lg text-sm transition-all duration-200 ${
                activeSection === section.id
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center">
                <span className="text-xs text-gray-400 mr-3 font-mono">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="flex-1">{section.title}</span>
                <ChevronRight size={14} className={`transition-transform ${
                  activeSection === section.id ? 'rotate-90' : ''
                }`} />
              </div>
            </a>
          ))}
        </nav>
      </div>
    );
  };

  const renderSection = (section) => {
    const HeadingComponent = section.type === 'h1' ? 'h1' : section.type === 'h2' ? 'h2' : 'h3';
    const headingClasses = {
      h1: 'text-3xl md:text-4xl font-bold text-gray-900 mb-6',
      h2: 'text-2xl md:text-3xl font-semibold text-gray-900 mb-4',
      h3: 'text-xl md:text-2xl font-semibold text-gray-900 mb-3'
    };

    return (
      <section key={section.id} id={section.id} className="scroll-mt-24 mb-12">
        <HeadingComponent className={headingClasses[section.type]}>
          {section.title}
        </HeadingComponent>
        <div className="prose prose-lg max-w-none">
          {section.content.map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-4 text-lg">
              {paragraph}
            </p>
          ))}
        </div>
        
        {section.codeBlock && (
          <div className="bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 rounded-lg p-4 my-6 overflow-x-auto">
            <pre className="text-gray-100 text-sm">
              <code>{section.codeBlock}</code>
            </pre>
          </div>
        )}

        {section.callout && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-blue-800 font-medium">{section.callout}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-12">
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full mb-6">
                {post.category}
              </span>
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed max-w-3xl">
                {post.excerpt}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
        <div className="container mx-auto px-6">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-white hover:text-white">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog" className="text-white hover:text-white">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">{post.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Article Meta */}
              <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-blue-600" />
                    <span className="font-medium">{new Date(post.publishedDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-green-600" />
                    <span className="font-medium">{post.readTime}</span>
                  </div>
                  
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Article Content */}
              <div className="bg-white rounded-xl shadow-sm border p-8">
                {post.sections ? (
                  post.sections.map(section => renderSection(section))
                ) : (
                  <div className="prose prose-lg max-w-none">
                    {post.fullContent ? (
                      <>
                        <section className="mb-12">
                          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Introduction</h2>
                          <p className="text-gray-700 leading-relaxed mb-6 text-lg">{post.fullContent.introduction}</p>
                        </section>

                        <section className="mb-12">
                          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Key Features & Benefits</h2>
                          <p className="text-gray-700 leading-relaxed mb-6 text-lg">{post.fullContent.keyFeatures}</p>
                        </section>

                        <section className="mb-12">
                          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Implementation Approach</h2>
                          <p className="text-gray-700 leading-relaxed mb-6 text-lg">{post.fullContent.implementation}</p>
                        </section>

                        <section className="mb-12">
                          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Best Practices</h2>
                          <p className="text-gray-700 leading-relaxed mb-6 text-lg">{post.fullContent.bestPractices}</p>
                        </section>

                        <section className="mb-12">
                          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Conclusion</h2>
                          <p className="text-gray-700 leading-relaxed mb-6 text-lg">{post.fullContent.conclusion}</p>
                        </section>

                        {post.fullContent.callToAction && (
                          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 my-8">
                            <div className="flex items-start">
                              <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                  <ChevronRight className="text-white" size={16} />
                                </div>
                              </div>
                              <div className="ml-4">
                                <p className="text-blue-800 font-semibold text-lg">{post.fullContent.callToAction}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <BookOpen className="text-gray-400" size={24} />
                        </div>
                        <p className="text-gray-600 text-lg">Content coming soon...</p>
                      </div>
                    )}
                  </div>
                )}

                

                {/* Share Section */}
                <section className="mt-16 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Share2 className="mr-2 text-blue-600" size={20} />
                    Share this article
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Facebook
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors font-medium"
                    >
                      Twitter
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium"
                    >
                      LinkedIn
                    </a>
                    <button
                      onClick={copyToClipboard}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center gap-2"
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                      {copied ? 'Copied!' : 'Copy Link'}
                    </button>
                  </div>
                </section>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <TableOfContents />
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
      <Footer />
    </div>
  );
};

export default BlogPostPage;