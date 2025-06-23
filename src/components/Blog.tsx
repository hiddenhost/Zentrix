import React from 'react';
import { Link } from 'react-router-dom';
import { useRevealAnimation } from '@/lib/animation-utils';
import { blogPosts } from '@/data/blog-data';
import { Calendar, ArrowRight, Clock, User, Tag, TrendingUp } from 'lucide-react';

const Blog = () => {
  useRevealAnimation();

  // Show only the first 3 blog posts on the homepage
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-16 sm:py-24 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 reveal-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <TrendingUp size={16} />
            Latest Insights
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 tracking-tight px-4">
          Tech <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Blog</span>
        </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Stay ahead with cutting-edge insights, best practices, and industry trends from our expert team
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featuredPosts.map((post, index) => (
            <article 
              key={post.id} 
              className="reveal-up group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden hover:-translate-y-2"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Blog Image */}
              <Link to={`/blog/${post.id}`} className="block relative overflow-hidden">
                <div className="aspect-[16/10] relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-700 rounded-full text-xs font-medium border border-white/20">
                      <Tag size={12} />
                      {post.category}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Meta Information */}
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(post.publishedDate).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author Info */}
                

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-16 sm:mt-20 reveal-up">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
          >
            <span>Explore All Articles</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          
          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Weekly Updates
            </div>
            
            <div className="flex items-center gap-2">
              <TrendingUp size={14} />
              Industry Insights
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;