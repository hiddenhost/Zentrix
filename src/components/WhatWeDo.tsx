import React, { useState, useEffect } from 'react';
import { Code, Globe, Palette, Zap, TrendingUp, Smartphone, Cloud, ArrowRight, Sparkles, Star } from 'lucide-react';

const HorizontalServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    {
      title: "Software Development",
      description: "Custom software solutions",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      details: "Enterprise-grade applications built with modern tech stacks",
      route: "/software-development"
    },
    {
      title: "Web Development",
      description: "Modern web applications",
      icon: Globe,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      details: "Responsive, fast, and SEO-optimized web experiences",
      route: "/web-development"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design",
      icon: Palette,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      details: "Intuitive interfaces that convert visitors to customers",
      route: "/ui-ux-design"
    },
    {
      title: "Logo & Branding",
      description: "Brand identity solutions",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/10 to-orange-500/10",
      details: "Memorable brand identities that stand out in the market",
      route: "/logo-branding"
    },
    {
      title: "Digital Marketing",
      description: "Growth & engagement",
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      details: "Data-driven strategies that scale your business exponentially",
      route: "/digital-marketing"
    },
    {
      title: "Mobile App Development",
      description: "iOS & Android apps",
      icon: Smartphone,
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-500/10 to-purple-500/10",
      details: "Native and cross-platform mobile experiences",
      route: "/mobile-app-development"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud services",
      icon: Cloud,
      gradient: "from-teal-500 to-blue-500",
      bgGradient: "from-teal-500/10 to-blue-500/10",
      details: "Secure, scalable infrastructure for modern businesses",
      route: "/cloud-solutions"
    }
  ];

  // Navigation function
  const handleNavigation = (route) => {
    // For React Router
    // window.location.href = route;
    
    // For Next.js Router (uncomment if using Next.js)
    // router.push(route);
    
    // Simple navigation (current implementation)
    window.location.href = route;
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, services.length]);

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden ">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.1),transparent_50%)]" />
        <FloatingElements />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 ">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 ">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 mb-6 sm:mb-8 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-pulse" />
            OUR SERVICES
            <Star className="w-3 h-3 sm:w-4 sm:h-4 ml-2 text-yellow-400" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight">
            <span className="text-white block">Services that</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-1 sm:mt-2">
              drive success
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive solutions designed to transform your digital presence and accelerate business growth
          </p>
        </div>

        {/* Services Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Service Display */}
          <div className="flex items-center justify-center mb-8 sm:mb-12">
            <div className="relative w-full max-w-sm sm:max-w-lg md:max-w-2xl px-2 sm:px-0">
              <div className={`relative bg-gradient-to-br ${services[currentIndex].bgGradient} backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 transition-all duration-700 transform hover:scale-105`}>
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-transparent via-slate-600/50 to-transparent animate-pulse" />
                
                {/* Glowing Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${services[currentIndex].gradient} rounded-2xl sm:rounded-3xl blur-3xl opacity-20 -z-10 scale-110`} />

                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${services[currentIndex].gradient} mx-auto mb-4 sm:mb-6 md:mb-8 flex items-center justify-center shadow-2xl relative overflow-hidden`}>
                    {React.createElement(services[currentIndex].icon, { className: "h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white relative z-10" })}
                    <div className="absolute inset-0 bg-white/20 rounded-2xl sm:rounded-3xl animate-pulse" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">
                    {services[currentIndex].title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-3 sm:mb-4 md:mb-6">
                    {services[currentIndex].description}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed mb-6 sm:mb-8 px-2">
                    {services[currentIndex].details}
                  </p>
                  
                  {/* CTA Button */}
                  
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Service Navigation */}
          <div className="relative overflow-hidden">
            {/* Mobile: Vertical Stack */}
            <div className="block sm:hidden space-y-4 pb-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`cursor-pointer transition-all duration-500 ${
                    index === currentIndex 
                      ? 'scale-105 opacity-100' 
                      : 'scale-95 opacity-60'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className={`relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-xl border rounded-xl p-4 transition-all duration-300 ${
                    index === currentIndex 
                      ? 'border-slate-500/50 shadow-lg' 
                      : 'border-slate-700/30'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg`}>
                        {React.createElement(service.icon, { className: "h-6 w-6 text-white" })}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-1">
                          {service.title}
                        </h4>
                        <p className="text-slate-400 text-sm">
                          {service.description}
                        </p>
                      </div>
                      <button
                        className={`px-3 py-1 rounded-lg bg-gradient-to-r ${service.gradient} text-white text-xs font-semibold`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavigation(service.route);
                        }}
                      >
                        View →
                      </button>
                    </div>
                    
                    {/* Progress Bar */}
                    {index === currentIndex && (
                      <div className="mt-3 w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${service.gradient} rounded-full transition-all duration-300`}
                          style={{
                            animation: isHovered ? 'none' : 'progress 3s linear infinite'
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Horizontal Scroll */}
            <div className="hidden sm:block overflow-x-auto scrollbar-hide">
              <div className="flex space-x-4 md:space-x-6 pb-4 min-w-max">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-72 md:w-80 cursor-pointer transition-all duration-500 group ${
                      index === currentIndex 
                        ? 'scale-105 opacity-100' 
                        : 'scale-95 opacity-60 hover:opacity-80'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <div className={`relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-xl border rounded-2xl p-6 transition-all duration-300 ${
                      index === currentIndex 
                        ? 'border-slate-500/50 shadow-lg' 
                        : 'border-slate-700/30 hover:border-slate-600/50'
                    }`}>
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg`}>
                          {React.createElement(service.icon, { className: "h-8 w-8 text-white" })}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white mb-2">
                            {service.title}
                          </h4>
                          <p className="text-slate-400 text-sm">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Quick Action Button */}
                      <button
                        className={`mt-4 w-full px-4 py-2 rounded-xl bg-gradient-to-r ${service.gradient} text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavigation(service.route);
                        }}
                      >
                        View Details →
                      </button>
                      
                      {/* Progress Bar */}
                      {index === currentIndex && (
                        <div className="mt-4 w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${service.gradient} rounded-full transition-all duration-300`}
                            style={{
                              animation: isHovered ? 'none' : 'progress 3s linear infinite'
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 sm:space-x-3 mt-6 sm:mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? `bg-gradient-to-r ${services[currentIndex].gradient} scale-125` 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;  /* Internet Explorer 10+ */
          scrollbar-width: none;  /* Firefox */
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Safari and Chrome */
        }
      `}</style>
    </section>
  );
};

export default HorizontalServices;