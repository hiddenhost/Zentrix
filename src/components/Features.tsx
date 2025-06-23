import React, { useState, useEffect } from 'react';
import { Search, Menu, ChevronRight, Zap, Shield, Rocket, Clock, Users, Globe, Star, Sparkles, TrendingUp, Database, Code2, Cpu, ArrowRight, Check, Activity, Target, Award, Heart, Building } from 'lucide-react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Development",
      description: "Rapid prototyping and deployment with modern frameworks and cloud infrastructure",
      gradient: "from-yellow-400 via-amber-500 to-orange-500",
      glowColor: "yellow",
      badge: "SPEED",
      metric: "10x Faster",
      bgPattern: "⚡"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption, compliance standards, and security protocols built-in",
      gradient: "from-green-400 via-emerald-500 to-teal-500",
      glowColor: "green",
      badge: "SECURE",
      metric: "99.99% Safe",
      bgPattern: "🛡️"
    },
    {
      icon: Rocket,
      title: "Scalable Solutions",
      description: "Architecture designed to grow with your business from startup to enterprise",
      gradient: "from-purple-400 via-violet-500 to-pink-500",
      glowColor: "purple",
      badge: "SCALE",
      metric: "∞ Growth",
      bgPattern: "🚀"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock monitoring, maintenance, and technical support for peace of mind",
      gradient: "from-blue-400 via-sky-500 to-cyan-500",
      glowColor: "blue",
      badge: "SUPPORT",
      metric: "24/7 Live",
      bgPattern: "⏰"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced developers, designers, and marketers dedicated to your success",
      gradient: "from-indigo-400 via-blue-500 to-purple-500",
      glowColor: "indigo",
      badge: "EXPERTS",
      metric: "50+ Pros",
      bgPattern: "👥"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Multi-language, multi-region solutions that connect you with worldwide audiences",
      gradient: "from-cyan-400 via-teal-500 to-blue-500",
      glowColor: "cyan",
      badge: "GLOBAL",
      metric: "195 Countries",
      bgPattern: "🌍"
    }
  ];

  

  

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
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
        {[...Array(144)].map((_, i) => (
          <div 
            key={i} 
            className="border border-cyan-500/20 rounded-sm"
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(6,182,212,0.05)_120deg,transparent_240deg)]" />
        <FloatingElements />
        <TechGrid />
      </div>

      {/* Scanning Line Effect */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.1), transparent)',
          animation: 'scan 8s infinite linear'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 mb-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300 relative overflow-hidden">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            WHY CHOOSE US
            <div className="ml-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-shimmer" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="text-white block">Everything you need to</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-2 relative">
              succeed digitally
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-60 blur-sm" />
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-12">
            From concept to launch, we provide comprehensive digital solutions that drive exponential growth and deliver world-class user experiences.
          </p>

          {/* Live Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { number: "99.9%", label: "Uptime", icon: Activity },
              { number: "2.3s", label: "Load Time", icon: Zap },
              
              { number: "24/7", label: "Support", icon: Clock }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="flex items-center space-x-3 bg-slate-800/60 px-6 py-4 rounded-2xl border border-slate-700/50 backdrop-blur-md hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-800/80">
                  <div className="relative">
                    <stat.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                    <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">{stat.number}</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">{stat.label}</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              {/* Card Container */}
              <div className={`relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden transition-all duration-700 transform group-hover:scale-105 group-hover:-rotate-1 ${activeFeature === index ? 'shadow-2xl shadow-' + feature.glowColor + '-500/20' : ''} h-full`}>
                
                {/* Animated Border */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(${feature.glowColor === 'cyan' ? '6,182,212' : feature.glowColor === 'purple' ? '168,85,247' : feature.glowColor === 'yellow' ? '234,179,8' : feature.glowColor === 'green' ? '34,197,94' : feature.glowColor === 'blue' ? '59,130,246' : '99,102,241'}, 0.3) 90deg, transparent 180deg)`,
                    animation: 'spin 3s linear infinite'
                  }}
                />

                <div className="relative p-8 z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${feature.gradient} text-white shadow-lg`}>
                      <Star className="w-3 h-3 mr-1" />
                      {feature.badge}
                    </div>
                    <div className="text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
                      {feature.bgPattern}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-18 h-18 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-${feature.glowColor}-500/50 transition-all duration-500 relative overflow-hidden group-hover:scale-110`}>
                    <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse" />
                    <feature.icon className="h-9 w-9 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent rounded-2xl" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    {feature.description}
                  </p>

                  {/* Metric */}
                 
                </div>

                {/* Background Effects */}
                <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl animate-pulse" />
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-tl from-white/5 to-transparent rounded-full blur-2xl animate-pulse delay-1000" />
              </div>

              {/* External Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 scale-110`} />
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
        @keyframes flicker {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Features;