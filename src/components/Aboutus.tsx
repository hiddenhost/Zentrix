import React, { useState, useEffect } from 'react';
import { Building, Heart, Target, Users, Globe, Lightbulb, Shield, Rocket, Award, ArrowRight, Sparkles, Zap } from 'lucide-react';

const AboutUsSection = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const valueInterval = setInterval(() => {
      setActiveValue(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(valueInterval);
  }, []);

  const companyValues = [
    { 
      icon: "🎯", 
      title: "Innovation & Excellence", 
      description: "We push the boundaries of what's possible, constantly exploring new technologies and methodologies to deliver cutting-edge solutions that set industry standards."
    },
    { 
      icon: "💡", 
      title: "Client-Centric Approach", 
      description: "Your success is our priority. We listen, understand, and collaborate closely with every client to ensure our solutions perfectly align with your business goals and vision."
    },
    { 
      icon: "🚀", 
      title: "Agile & Adaptive", 
      description: "In a rapidly evolving digital landscape, we embrace change and adapt quickly. Our agile methodologies ensure we deliver results efficiently while maintaining flexibility."
    },
    { 
      icon: "🌟", 
      title: "Quality & Integrity", 
      description: "We believe in doing things right the first time. Our commitment to quality, transparency, and ethical practices forms the foundation of every partnership we build."
    }
  ];

  const teamHighlights = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Diverse Expertise",
      description: "Our multidisciplinary team brings together creative designers, skilled developers, strategic thinkers, and technology enthusiasts.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Perspective",
      description: "With experience across various industries and markets, we understand the nuances of building solutions that work worldwide.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "We stay ahead of the curve by constantly learning, experimenting with new technologies, and evolving our expertise.",
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );

  const TechGrid = () => (
    <div className="absolute inset-0 opacity-5">
      <div className="grid grid-cols-12 gap-4 h-full">
        {[...Array(120)].map((_, i) => (
          <div 
            key={i} 
            className="border border-emerald-500/20 rounded-sm"
            style={{
              animation: `pulse ${2 + Math.random() * 3}s infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(34,197,94,0.05)_120deg,transparent_240deg)]" />
        <FloatingElements />
        <TechGrid />
      </div>

      {/* Scanning Line Effect */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.1), transparent)',
          animation: 'scan 10s infinite linear'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 text-emerald-300 mb-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300 relative overflow-hidden">
            <Building className="w-4 h-4 mr-2 animate-pulse" />
            ABOUT US
            <div className="ml-2 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-shimmer" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="text-white block">Crafting the future of</span>
            <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-2 relative">
              digital innovation
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full animate-bounce opacity-60 blur-sm" />
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            We are a passionate team of innovators, creators, and problem-solvers dedicated to transforming ideas into powerful digital experiences that make a meaningful impact.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Content - Our Story */}
          <div className="relative">
            <h3 className="text-4xl md:text-5xl font-black mb-8 text-white leading-tight">
              Our 
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Story
              </span>
            </h3>
            
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p className="text-lg">
                Born from a vision to bridge the gap between innovative technology and real-world business challenges, we started as a small team of passionate technologists who believed that great software could change everything.
              </p>
              
              <p className="text-lg">
                What began as a shared dream has evolved into a thriving company that helps businesses of all sizes harness the power of digital transformation. We've learned that success isn't just about writing code—it's about understanding people, solving problems, and creating experiences that truly matter.
              </p>
              
              <p className="text-lg">
                Today, we continue to push boundaries, embrace new challenges, and maintain the same entrepreneurial spirit that started it all. Every project we take on is an opportunity to make a difference, and every client relationship is built on trust, transparency, and shared success.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="mt-10 p-6 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl border border-emerald-500/20 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-emerald-400 mr-3" />
                <h4 className="text-xl font-bold text-white">Our Mission</h4>
              </div>
              <p className="text-slate-300 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value in an ever-evolving technological landscape.
              </p>
            </div>
          </div>
          
          {/* Right Content - Interactive Values */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-3xl border border-slate-700/50 backdrop-blur-xl p-8 relative overflow-hidden hover:border-emerald-500/50 transition-all duration-500">
              
              {/* Values Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <Heart className="w-8 h-8 text-emerald-400 mr-3" />
                  <h4 className="text-2xl font-bold text-white">Our Values</h4>
                </div>
                
                {/* Active Value Display */}
                <div className="mb-8 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/30 min-h-[200px] relative overflow-hidden">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{companyValues[activeValue].icon}</span>
                    <h5 className="text-xl font-bold text-white">{companyValues[activeValue].title}</h5>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {companyValues[activeValue].description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-700">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-400 to-blue-400 transition-all duration-300"
                      style={{ width: `${((animationKey % 4) + 1) * 25}%` }}
                    />
                  </div>
                </div>

                {/* Value Indicators */}
                <div className="flex justify-center space-x-3">
                  {companyValues.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveValue(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeValue === index 
                          ? 'bg-emerald-400 scale-125' 
                          : 'bg-slate-600 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Scanning Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-2000" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-scan" />
            </div>
            
            {/* External Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-600/10 rounded-3xl blur-3xl -z-10 animate-pulse" />
          </div>
        </div>

        {/* Team Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamHighlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${highlight.gradient} mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse" />
                <div className="text-white relative z-10">
                  {highlight.icon}
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                {highlight.title}
              </h4>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {highlight.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default AboutUsSection;