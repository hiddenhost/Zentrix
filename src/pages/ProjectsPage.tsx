import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Github, 
  Code, 
  Zap, 
  Star, 
  Eye, 
  Filter, 
  Search,
  Sparkles,
  ArrowUpRight,
  Calendar,
  Users,
  TrendingUp,
  Award,
  Layers,
  Globe,
  Smartphone,
  Database,
  Brain
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';



const ProjectsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Vasterior",
      logo: "./assets/logo1.png", // Replace with actual logo
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
      timeline: "6 months"
    },
    {
      id: 2,  
      title: "PS Decor",
      logo: "./assets/ps.png", // Replace with actual logo
      description: "A portfolio and wedding planning platform displaying beautiful decor themes, event styling, and client showcases.",
      category: "",
      tech: ["Typescript", "Tailwind", "Vite", "React"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      liveLink: "https://psdecor.in/",
      githubLink: "https://github.com/username/ai-chat",
      status: "Live",
      featured: true,
      stats: { views: "8.3K", stars: 156, users: "890" },
      completion: 95,
      timeline: "4 months"
    },
    {
      id: 3,
      title: "Alluring Glimpses",
      logo: "https://alluring-glimpses-iota.vercel.app/lovable-uploads/8df232d2-758b-440c-ba34-1894e0aa4bf5.png", // Replace with actual logo
      description: "An aesthetic interior design portfolio offering creative room makeovers and functional living space inspirations.",
      category: "",
      tech: ["Next.js", "Tailwind", "GSAP", "AWS"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      liveLink: "https://alluring-glimpses-iota.vercel.app/",
      githubLink: "https://github.com/username/banking-app",
      status: "Live",
      featured: false,
      stats: { views: "15.2K", stars: 234, users: "5.6K" },
      completion: 100,
      timeline: "8 months"
    },
    {
      id: 4,
      title: "Herbsfox",
      logo: "https://herbsfox.com/wp-content/uploads/2024/01/logo1.png", // Replace with actual logo
      description: "An e-commerce site dedicated to selling pure, organic herbs and natural health wellness products.",
      category: "",
      tech: ["Wordpress", "Plugins", "Elemntor", ""],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      liveLink: "https://herbsfox.com/",
      githubLink: "https://github.com/username/analytics-dashboard",
      status: "Live",
      featured: true,
      stats: { views: "6.7K", stars: 78, users: "1.2K" },
      completion: 90,
      timeline: "3 months"
    },
    {
      id: 5,
      title: "Morning Bites",
      logo: "https://morningbites.in/assets/logoo.png", // Replace with actual logo
      description: "A clean and inviting bakery website with branding, visual appeal, and ordering features.",
      category: "",
      tech: ["Next.js", "Socket.io", "UI/UX", "Redis"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      liveLink: "https://morningbites.in/",
      githubLink: "https://github.com/username/social-platform",
      status: "In Development",
      featured: false,
      stats: { views: "3.4K", stars: 45, users: "567" },
      completion: 75,
      timeline: "5 months"
    },
    {
      id: 6,
      title: "Deal360",
      logo: "https://deal360.in/wp-content/uploads/2024/06/cropped-cropped-Navy_Blue_Minimalist_Text_Logo_20240501_223022_0000-removebg-preview-300x300.png", // Replace with actual logo
      description: "Online marketplace designed for electronics with a user-friendly shopping and browsing experience.",
      category: "",
      tech: ["Elementor", "WooCommerce", "Wordpress", "Node.js"],
      image: "",
      liveLink: "https://deal360.in/",
      githubLink: "https://github.com/username/crypto-wallet",
      status: "Live",
      featured: true,
      stats: { views: "9.1K", stars: 123, users: "876" },
      completion: 85,
      timeline: "7 months"
    },
    {
      id: 7,
      title: "Jigyasa Hospital",
      logo: "https://jigyasahospital.com/wp-content/uploads/2025/02/WhatsApp_Image_2025-02-11_at_10.14.01_fbf442ce-removebg-preview.png", // Replace with actual logo
      description: "Healthcare website offering structured medical services, information access, and user support.",
      category: "",
      tech: ["Elementor", "WooCommerce", "Wordpress", "Node.js"],
      image: "https://deal360.in/",
      liveLink: "https://jigyasahospital.com/",
      githubLink: "https://github.com/username/crypto-wallet",
      status: "Live",
      featured: true,
      stats: { views: "9.1K", stars: 123, users: "876" },
      completion: 85,
      timeline: "7 months"
    },
     {
      id: 8,
      title: "Southern Palate",
      logo: "https://www.southernpalate.com/Southern_Palate-removebg-preview.png", // Replace with actual logo
      description: "E-commerce website centered around traditional spice blends with dietary-specific offerings and clean UX.",
      category: "",
      tech: ["Elementor", "WooCommerce", "Wordpress", "Node.js"],
      image: "https://deal360.in/",
      liveLink: "https://www.southernpalate.com/",
      githubLink: "https://github.com/username/crypto-wallet",
      status: "Beta",
      featured: true,
      stats: { views: "9.1K", stars: 123, users: "876" },
      completion: 85,
      timeline: "7 months"
    },
     {
      id: 9,
      title: "KDEdu",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=80&h=80&fit=crop&crop=center", // Replace with actual logo
      description: "Educational institution site providing course info, faculty access, and student portal features.",
      category: "",
      tech: ["Elementor", "WooCommerce", "Wordpress", "Node.js"],
      image: "",
      liveLink: "https://kdedu.org/",
      githubLink: "https://github.com/username/crypto-wallet",
      status: "Live",
      featured: true,
      stats: { views: "9.1K", stars: 123, users: "876" },
      completion: 85,
      timeline: "7 months"
    },
    {
      id: 10,
      title: "Inventory",
      logo: "https://inventory.deal360.in/uploads/users/logo.png", // Replace with actual logo
      description: "A tile inventory management system built to handle product tracking, stock updates, and supplier records.",
      category: "",
      tech: ["Elementor", "WooCommerce", "Wordpress", "Node.js"],
      image: "https://deal360.in/",
      liveLink: "https://inventory.deal360.in/",
      githubLink: "https://github.com/username/crypto-wallet",
      status: "Live",
      featured: true,
      stats: { views: "9.1K", stars: 123, users: "876" },
      completion: 85,
      timeline: "7 months"
    },
     {
      id: 11,
      title: "PSSSIC",
      logo: "https://prem-singh-swatantrta-senani-inter-college.vercel.app/images/logo/logonew.png", // Replace with actual logo
      description: "A clean and informative school website showcasing academic programs, notices, faculty details, and student resources.",
      category: "",
      tech: ["Elementor", "WooCommerce", "Wordpress", "Node.js"],
      image: "https://deal360.in/",
      liveLink: "https://prem-singh-swatantrta-senani-inter-college.vercel.app/",
      githubLink: "https://github.com/username/crypto-wallet",
      status: "Live",
      featured: true,
      stats: { views: "9.1K", stars: 123, users: "876" },
      completion: 85,
      timeline: "7 months"
    },
     {
      id: 12,
      title: "Kairvi Fort Resort",
      logo: "https://heroku.in/wp-content/uploads/2025/05/cropped-Kailash_Fort_Resort_Logo-removebg-preview-300x154.png", // Replace with actual logo
      description: "A hospitality website showcasing resort details, facilities, guest experiences, and booking options.",
      category: "",
      tech: ["Elementor", "WooCommerce", "Wordpress", "Node.js"],
      image: "",
      liveLink: "https://kairvifortresort.com/",
      githubLink: "https://github.com/username/crypto-wallet",
      status: "Live",
      featured: true,
      stats: { views: "9.1K", stars: 123, users: "876" },
      completion: 85,
      timeline: "7 months"
    },
    {
      id: 13,
      title: "Kaizen",
      logo: "", // Replace with actual logo
      description: "Corporate site designed for an import-export business with service overview and product categories.",
      category: "",
      tech: ["Elementor", "WooCommerce", "Wordpress", "Node.js"],
      image: "",
      liveLink: "https://www.kaizeninc.org/",
      githubLink: "https://github.com/username/crypto-wallet",
      status: "Live",
      featured: true,
      stats: { views: "9.1K", stars: 123, users: "876" },
      completion: 85,
      timeline: "7 months"
    },
    {
      id: 14,
      title: "Garbs",
      logo: "https://garbs.in/wp-content/uploads/2024/07/cropped-Screenshot_2024-07-07_142518-removebg-preview-2.png", // Replace with actual logo
      description: "An online e-commerce platform offering trendy, affordable fashion and lifestyle products for all age groups.",
      category: "",
      tech: ["Elementor", "WooCommerce", "Wordpress", "Node.js"],
      image: "",
      liveLink: "https://garbs.in/",
      githubLink: "https://github.com/username/crypto-wallet",
      status: "Live",
      featured: true,
      stats: { views: "9.1K", stars: 123, users: "876" },
      completion: 85,
      timeline: "7 months"
    },
    {
      id: 15,
      title: "Parvs Academy",
      logo: "https://parvsacademy.online/wp-content/uploads/2024/12/cropped-cropped-IMG-20241220-WA0002-removebg-preview.png", // Replace with actual logo
      description: "Offers diverse online courses designed to boost skills, knowledge, and career opportunities across various fields.",
      category: "",
      tech: ["Elementor", "WooCommerce", "Wordpress", "Node.js"],
      image: "",
      liveLink: "https://parvsacademy.online/",
      githubLink: "https://github.com/username/crypto-wallet",
      status: "Live",
      featured: true,
      stats: { views: "9.1K", stars: 123, users: "876" },
      completion: 85,
      timeline: "7 months"
    },
    {
      id: 16,
      title: "Intirio World",
      logo: "https://www.intirioworld.in/images/logo.jpg", // Replace with actual logo
      description: "Interior design experts creating elegant, functional spaces that reflect your style and enhance daily living.",
      category: "",
      tech: ["Elementor", "WooCommerce", "Wordpress", "Node.js"],
      image: "",
      liveLink: "https://www.intirioworld.in/",
      githubLink: "https://github.com/username/crypto-wallet",
      status: "Live",
      featured: true,
      stats: { views: "9.1K", stars: 123, users: "876" },
      completion: 85,
      timeline: "7 months"
    },
    {
      id: 17,
      title: "Suchi Events",
      logo: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=80&h=80&fit=crop&crop=center", // Replace with actual logo
      description: "Expert event planners crafting memorable weddings, parties, and corporate events with creativity, elegance, and precision.",
      category: "",
      tech: ["Elementor", "WooCommerce", "Wordpress", "Node.js"],
      image: "",
      liveLink: "#",
      githubLink: "https://github.com/username/crypto-wallet",
      status: "In Development",
      featured: true,
      stats: { views: "9.1K", stars: 123, users: "876" },
      completion: 85,
      timeline: "7 months"
    },
    {
      id: 18,
      title: "Grilli",
      logo: "https://grillifoods.vercel.app/assets/images/logo.svg", // Replace with actual logo
      description: "Grilli – Serving sizzling flavors and gourmet experiences with expertly crafted grills, fresh ingredients, and warm hospitality",
      category: "",
      tech: ["Elementor", "WooCommerce", "Wordpress", "Node.js"],
      image: "",
      liveLink: "https://grillifoods.vercel.app/",
      githubLink: "https://github.com/username/crypto-wallet",
      status: "Live",
      featured: true,
      stats: { views: "9.1K", stars: 123, users: "876" },
      completion: 85,
      timeline: "7 months"
    }
    ,
    {
      id: 18,
      title: "Asquaremarketing",
      logo: "./assets/asquare.png", // Replace with actual logo
      description: "Website designed for a client specializing in hospital marketing and patient outreach.",
      category: "",
      tech: ["Elementor", "WooCommerce", "Wordpress", "Node.js"],
      image: "",
      liveLink: "http://asquaremarketing.in/",
      githubLink: "https://github.com/username/crypto-wallet",
      status: "In Development",
      featured: true,
      stats: { views: "9.1K", stars: 123, users: "876" },
      completion: 85,
      timeline: "7 months"
    }
  ];

  const categories = ['All', 'Web App', 'Mobile App', 'AI/ML', 'Data Science', 'Blockchain'];

  const techColors = {
    'React': 'from-blue-400 to-blue-600',
    'Node.js': 'from-green-400 to-green-600',
    'Python': 'from-yellow-400 to-yellow-600',
    'MongoDB': 'from-green-500 to-emerald-600',
    'PostgreSQL': 'from-blue-500 to-indigo-600',
    'Next.js': 'from-gray-700 to-gray-900',
    'React Native': 'from-cyan-400 to-blue-500',
    'TensorFlow': 'from-orange-400 to-red-500',
    'AWS': 'from-orange-300 to-yellow-500',
    'Socket.io': 'from-purple-400 to-indigo-500',
    'Web3.js': 'from-purple-500 to-pink-500',
    'Solidity': 'from-gray-600 to-gray-800'
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const filtered = projects.filter(project => {
        const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
      });
      setFilteredProjects(filtered);
      setIsLoading(false);
    }, 300);
  }, [selectedCategory, searchTerm]);

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400/40 to-purple-400/40 rounded-full animate-pulse"
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

  const ProjectCard = ({ project, index }) => (
    <div 
      className={`group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-slate-600/60 ${
        project.featured ? 'ring-2 ring-gradient-to-r ring-cyan-500/30' : ''
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
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
      className={`relative max-h-14 flex-shrink-0 overflow-hidden transition-all duration-300 group-hover:border-cyan-500/50 ${
        project.isRoundLogo ? 'w-14 h-14 rounded-full' : 'w-[6.5rem] h-14 rounded-md'
      }`}
    >
      <img
        src={project.logo}
        alt={`${project.title} logo`}
        className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 ${
          project.isRoundLogo ? 'rounded-full' : ''
        }`}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          (target.nextSibling as HTMLDivElement).style.display = 'flex';
        }}
      />
      {/* Fallback title block */}
      <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-white font-bold text-lg hidden items-center justify-center">
        {project.title.charAt(0)}
      </div>
      <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-colors duration-300 rounded-full"></div>
    </div>
  </div>

  {/* Description */}
  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
    {project.description}
  </p>

  {/* Button */}
  <div className="flex space-x-3">
    <a 
      href={project.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
    >
      View Live
      <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </a>
  </div>
</div>


    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <Navbar />
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(34,197,94,0.1),transparent_50%)]" />
        <FloatingElements />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 mt-4">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 mb-6 sm:mb-8 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-pulse" />
              MY PORTFOLIO
              <Award className="w-3 h-3 sm:w-4 sm:h-4 ml-2 text-yellow-400" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="text-white block">Featured</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
                Work
              </span>
            </h1>
          </div>

          {/* Projects Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-slate-800/50 rounded-2xl p-6 animate-pulse">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-slate-700 rounded-full mr-4"></div>
                    <div className="h-6 bg-slate-700 rounded flex-1"></div>
                  </div>
                  <div className="h-4 bg-slate-700 rounded mb-4"></div>
                  <div className="h-4 bg-slate-700 rounded mb-4"></div>
                  <div className="h-10 bg-slate-700 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-fadeIn">
                  {filteredProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center">
                    <Search className="w-10 h-10 text-slate-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
                  <p className="text-slate-400 mb-6">Try adjusting your search or filter criteria</p>
                  <button 
                    onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16 sm:mt-20">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-slate-600/30 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                Ready to bring your ideas to life? Let's discuss your next project and create something extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact-us"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Start a Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      <Footer />
    </div>
  );
};

export default ProjectsShowcase;