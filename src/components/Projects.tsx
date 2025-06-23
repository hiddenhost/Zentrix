import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  Github, 
  ArrowRight,
  Star,
  Eye,
  Users,
  Sparkles,
  Code2,
  Zap
} from 'lucide-react';

const ProjectsSection = () => {
  // Featured projects for homepage (subset of your full projects)
  const featuredProjects = [
    {
      id: 1,
      title: "Vasterior",
      logo: "./assets/logo1.png", // Add your logo path here
      description: "A sleek and modern interior design website showcasing luxurious decor ideas and professional design services.",
      category: "",
      tech: ["React", "Tailwind", "CSS", "HTML"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      liveLink: "https://vasterior.com/",
      githubLink: "https://github.com/username/ecommerce",
      status: "Live",
      featured: true,
      stats: { views: "12.5K", stars: 89, users: "2.1K" },
      completion: 100,
      timeline: "6 months",
      isRoundLogo: false // Set to true if logo should be circular
    },
    {
      id: 2,
      title: "Morning Bites",
      logo: "https://morningbites.in/assets/logoo.png", // Add your logo path here
      description: "A clean and inviting bakery website with strong branding, modern visuals, intuitive navigation, and easy-to-use online ordering features.",
      category: "",
      tech: ["Next.js", "Socket.io", "UI/UX", "Redis"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      liveLink: "https://morningbites.in/",
      githubLink: "https://github.com/username/social-platform",
      status: "In Development",
      featured: false,
      stats: { views: "3.4K", stars: 45, users: "567" },
      completion: 75,
      timeline: "5 months",
      isRoundLogo: false
    },
    {
      id: 3,  
      title: "PS Decor",
      logo: "./assets/ps.png", // Add your logo path here
      description: "A portfolio and wedding planning platform displaying beautiful decor themes, event styling, and client showcases.",
      category: "",
      tech: ["Typescript", "Tailwind", "Vite", "React"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      liveLink: "https://psdecor.in/",
      githubLink: "https://github.com/username/ai-chat",
      status: "In Development",
      featured: true,
      stats: { views: "8.3K", stars: 156, users: "890" },
      completion: 95,
      timeline: "4 months",
      isRoundLogo: true // Circular logo example
    },
  ];

  const techColors = {
    'React': 'from-blue-400 to-blue-600',
    'Node.js': 'from-green-400 to-green-600',
    'Python': 'from-yellow-400 to-yellow-600',
    'MongoDB': 'from-green-500 to-emerald-600',
    'PostgreSQL': 'from-blue-500 to-indigo-600',
    'TensorFlow': 'from-orange-400 to-red-500',
    'FastAPI': 'from-teal-400 to-cyan-600',
    'Stripe': 'from-purple-400 to-indigo-500',
    'Web3.js': 'from-purple-500 to-pink-500',
    'Solidity': 'from-gray-600 to-gray-800'
  };

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );

  const ProjectCard = ({ project }) => {
    const [imageError, setImageError] = useState(false);

    return (
      <div className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-slate-600/60 hover:shadow-2xl hover:shadow-cyan-500/10">
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center">
            <Star className="w-3 h-3 mr-1" />
            Featured
          </div>
        )}

        {/* Status Badge */}
        <div className={`absolute top-4 left-4 z-20 text-xs font-semibold px-3 py-1 rounded-full ${
          project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
          project.status === 'Beta' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
          'bg-blue-500/20 text-blue-400 border border-blue-500/30'
        }`}>
          {project.status}
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Title and Logo Block */}
          <div className="flex flex-col md:flex-row md:items-center mb-6 gap-4 md:gap-6 mt-10 group">
            {/* Title and Category */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors truncate">
                {project.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">{project.category}</p>
            </div>

            {/* Logo (Handles round & horizontal) */}
            <div
              className={`relative max-h-14 flex-shrink-0 overflow-hidden transition-all duration-300 border border-slate-600/30 group-hover:border-cyan-500/50 ${
                project.isRoundLogo ? 'w-14 h-14 rounded-full' : 'w-[6.5rem] h-14 rounded-md'
              }`}
            >
              {!imageError && project.logo ? (
                <img
                  src={project.logo}
                  alt={`${project.title} logo`}
                  className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 ${
                    project.isRoundLogo ? 'rounded-full' : ''
                  }`}
                  onError={() => setImageError(true)}
                />
              ) : (
                // Fallback title block
                <div className={`w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-white font-bold text-lg flex items-center justify-center ${
                  project.isRoundLogo ? 'rounded-full' : 'rounded-md'
                }`}>
                  {project.title.charAt(0)}
                </div>
              )}
              <div className={`absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-colors duration-300 ${
                project.isRoundLogo ? 'rounded-full' : 'rounded-md'
              }`}></div>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${
                  techColors[tech] || 'from-slate-600 to-slate-700'
                } text-white`}
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-700 text-slate-300">
                +{project.tech.length - 3} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
            >
              View Live
              <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.1),transparent_50%)]" />
        <FloatingElements />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              FEATURED WORK
              <Zap className="w-4 h-4 ml-2 text-yellow-400" />
            </div>
            
            <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto leading-relaxed">
              A showcase of my latest work across technologies
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-slate-600/30 rounded-2xl p-8 sm:p-12">
              <div className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Want to see more?
                </h3>
                <p className="text-slate-400 text-lg">
                  Explore my complete portfolio with detailed case studies
                </p>
              </div>
              <Link to="/portfolio">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center group whitespace-nowrap">
                  View All 
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;