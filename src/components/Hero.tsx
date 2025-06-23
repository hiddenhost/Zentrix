import { Button } from '@/components/ui/button';
import { ArrowDown, ChevronRight, Sparkles, Zap, Code, Megaphone, Play, Star, TrendingUp, Shield, Cpu, Database, Cloud, Layers, GitBranch, Terminal, Target, Users, MousePointer, BarChart3 } from 'lucide-react';
// Using href for navigation instead of react-router-dom
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState([]);
  const rotatingWords = ['AI Solutions', 'SaaS Platforms', 'Cloud Apps', "Web Devlopment",'Software Devlopment','Digital Marketing','Data Analytics', 'Automation', 'ML Models'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-15, 15, -15],
      rotate: [0, 3, -3, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(99, 102, 241, 0.3), 0 0 40px rgba(147, 51, 234, 0.2)",
        "0 0 30px rgba(99, 102, 241, 0.5), 0 0 60px rgba(147, 51, 234, 0.3)",
        "0 0 20px rgba(99, 102, 241, 0.3), 0 0 40px rgba(147, 51, 234, 0.2)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 ">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-60"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [-50, 50, -50],
            y: [-30, 30, -30],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-indigo-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [50, -50, 50],
            y: [30, -30, 30],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Matrix Grid Effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)]"></div>
        </div>

        {/* Scanning Lines */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent h-1"
          animate={{
            y: [0, 800],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-8 mt-24">
            <motion.div 
              className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-indigo-300 relative overflow-hidden group backdrop-blur-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              variants={glowVariants}
              animate="animate"
            >
              <div className="flex items-center gap-2">
                
                <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                
                <span className="relative z-10 font-semibold">Zentrix_Infotech</span>
                <div className="ml-2 px-2 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full text-xs flex items-center gap-1">
  <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
  Live
</div>

              </div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8 leading-none"
          >
            <span className="block text-white mb-4 drop-shadow-2xl">
              Build the
              <motion.span 
                className="inline-block ml-4 text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Future
              </motion.span>
            </span>
            <motion.div className="relative">
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent filter drop-shadow-lg">
                of Technology
              </span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl -z-10"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.h1>
          
          {/* Dynamic Subtitle */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-2xl md:text-3xl text-slate-300 max-w-5xl mx-auto mb-6 leading-relaxed font-medium">
              Enterprise-grade solutions powered by
            </p>
            <div className="flex items-center justify-center gap-3 text-2xl md:text-3xl">
              <span className="text-slate-300">cutting-edge</span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentWord}
                  initial={{ opacity: 0, y: 30, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -30, rotateX: 90 }}
                  transition={{ duration: 0.5, ease: "backOut" }}
                  className="relative"
                >
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 backdrop-blur-sm">
                    {rotatingWords[currentWord]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <Button 
                size="lg" 
                className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white text-xl px-12 py-6 h-auto group border-0 shadow-2xl hover:shadow-indigo-500/40 transition-all duration-500 rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => window.location.href = '/contact-us'}
              >
                <div className="relative z-10 flex items-center">
                  <Zap className="mr-3 h-6 w-6" />
                  Start Building
                  <motion.div
                    className="ml-3"
                    animate={{ 
                      x: isHovered ? [0, 5, 0] : 0,
                      rotate: isHovered ? [0, 15, 0] : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </motion.div>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="text-xl px-12 py-6 h-auto border-2 border-slate-600 text-slate-200 hover:bg-slate-800/50 hover:text-white hover:border-indigo-400 transition-all duration-500 rounded-2xl backdrop-blur-sm bg-slate-900/20 group cursor-pointer"
                onClick={() => window.location.href = '/'}
              >
                <Play className="mr-3 h-6 w-6 group-hover:text-indigo-400 transition-colors" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-8 mb-20 text-slate-400"
          >
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-lg font-semibold text-white">4.9/5</span>
              <span>Client Rating</span>
            </div>
            <div className="w-px h-8 bg-slate-600"></div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span className="text-lg font-semibold text-white">99.9%</span>
              <span>Uptime</span>
            </div>
            <div className="w-px h-8 bg-slate-600"></div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-lg font-semibold text-white">SOC 2</span>
              <span>Compliant</span>
            </div>
          </motion.div>

          {/* Fixed Floating Tech Icons - smaller and positioned to avoid overlap */}
          <div className="absolute inset-0 pointer-events-none">
            {[
              { Icon: Cpu, position: 'top-20 left-8', delay: 0, color: 'text-indigo-400' },
              { Icon: Database, position: 'top-32 right-12', delay: 1, color: 'text-purple-400' },
              { Icon: Cloud, position: 'bottom-96 left-16', delay: 2, color: 'text-cyan-400' },
              { Icon: Layers, position: 'bottom-80 right-8', delay: 3, color: 'text-pink-400' },
              { Icon: GitBranch, position: 'top-1/3 left-4', delay: 4, color: 'text-emerald-400' },
              { Icon: Terminal, position: 'top-1/2 right-4', delay: 5, color: 'text-orange-400' },
            ].map(({ Icon, position, delay, color }, index) => (
              <motion.div 
                key={index}
                className={`absolute ${position} hidden 2xl:block`}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ 
                  opacity: [0, 0.6, 0.4, 0.6],
                  scale: [0, 1, 0.9, 1],
                  rotate: [-180, 0, 10, 0],
                  y: [-10, 10, -10]
                }}
                transition={{
                  duration: 3,
                  delay: delay * 0.5,
                  repeat: Infinity,
                  repeatDelay: 10,
                  ease: "easeInOut"
                }}
              >
                <div className="w-12 h-12 bg-slate-800/30 rounded-2xl backdrop-blur-sm border border-slate-700/50 flex items-center justify-center shadow-lg">
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Interactive Code Dashboard Preview */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        className="relative mt-8 lg:mt-20"
      >
        {/* Main Laptop/Desktop Mockup */}
        <div className="relative mx-auto max-w-7xl">
          <motion.div 
            className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 backdrop-blur-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 group"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* VS Code Header */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-2 lg:p-4 border-b border-slate-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 lg:gap-4">
                  <div className="flex gap-1 lg:gap-2">
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <Code className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400" />
                  <span className="text-slate-300 font-semibold text-sm lg:text-base">Zentrix IDE Pro</span>
                </div>
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="px-2 py-1 lg:px-3 lg:py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs lg:text-sm font-medium flex items-center gap-1 lg:gap-2">
                    <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="hidden sm:inline">Live Coding</span>
                    <span className="sm:hidden">Live</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Editor Content */}
            <div className="aspect-[4/3] lg:aspect-video bg-gradient-to-br from-slate-950 to-slate-900 relative overflow-hidden">
              <div className="flex h-full flex-col lg:flex-row">
                {/* File Explorer Sidebar - Hidden on mobile, shown on desktop */}
                <div className="hidden lg:block w-64 bg-slate-900/50 border-r border-slate-700/50 p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Terminal className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300 font-medium text-sm">EXPLORER</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    {[
                      { name: "src", type: "folder", icon: "📁", expanded: true },
                      { name: "components", type: "folder", icon: "📁", expanded: true, indent: 1 },
                      { name: "Hero.tsx", type: "file", icon: "⚛️", active: true, indent: 2 },
                      { name: "Dashboard.tsx", type: "file", icon: "⚛️", indent: 2 },
                      { name: "utils", type: "folder", icon: "📁", indent: 1 },
                      { name: "api.ts", type: "file", icon: "🟦", indent: 2 },
                      { name: "package.json", type: "file", icon: "📦" },
                      { name: "README.md", type: "file", icon: "📝" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className={`flex items-center gap-3 py-1 px-2 rounded hover:bg-slate-700/30 cursor-pointer ${
                          item.active ? 'bg-indigo-500/20 text-indigo-300' : 'text-slate-400'
                        }`}
                        style={{ paddingLeft: `${(item.indent || 0) * 16 + 8}px` }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <span className="text-xs">{item.icon}</span>
                        <span className="text-xs font-medium">{item.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Main Code Editor */}
                <div className="flex-1 relative flex flex-col">
                  {/* Tab Bar */}
                  <div className="bg-slate-800/50 border-b border-slate-700/50 p-2">
                    <div className="flex gap-1 lg:gap-2 overflow-x-auto">
                      {['Hero.tsx', 'Dashboard.tsx', 'api.ts'].map((tab, index) => (
                        <div
                          key={tab}
                          className={`px-2 lg:px-4 py-1 lg:py-2 rounded-t-lg text-xs lg:text-sm font-medium flex items-center gap-1 lg:gap-2 whitespace-nowrap ${
                            index === 0 
                              ? 'bg-slate-900 text-indigo-300 border-t-2 border-indigo-400' 
                              : 'text-slate-400 hover:text-slate-300'
                          }`}
                        >
                          <span className="text-xs">{index === 0 ? '⚛️' : index === 1 ? '⚛️' : '🟦'}</span>
                          <span className="hidden sm:inline">{tab}</span>
                          <span className="sm:hidden">{tab.split('.')[0]}</span>
                          {index === 0 && <div className="w-1 h-1 bg-orange-400 rounded-full"></div>}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Code Content */}
                  <div className="flex-1 p-2 lg:p-6 font-mono text-xs lg:text-sm overflow-hidden">
                    <div className="space-y-1">
                      {[
                        { line: 1, code: "import React, { useState } from 'react';", mobile: "import React from 'react';" },
                        { line: 2, code: "import { motion } from 'framer-motion';", mobile: "import { motion } from 'framer';" },
                        { line: 3, code: "", mobile: "" },
                        { line: 4, code: "const Hero = () => {", mobile: "const Hero = () => {" },
                        { line: 5, code: "  const [isVisible, setIsVisible] = useState(false);", mobile: "  const [visible, setVisible]" },
                        { line: 6, code: "", mobile: "" },
                        { line: 7, code: "  useEffect(() => {", mobile: "  useEffect(() => {" },
                        { line: 8, code: "    setIsVisible(true);", mobile: "    setVisible(true);" },
                        { line: 9, code: "  }, []);", mobile: "  }, []);" },
                        { line: 10, code: "", mobile: "" },
                        { line: 11, code: "  return (", mobile: "  return (" },
                        { line: 12, code: "    <motion.div", mobile: "    <motion.div" },
                        { line: 13, code: "      initial={{ opacity: 0, y: 50 }}", mobile: "      initial={{ y: 50 }}" },
                        { line: 14, code: "      animate={{ opacity: 1, y: 0 }}", mobile: "      animate={{ y: 0 }}" },
                        { line: 15, code: "      className=\"hero-container\"", mobile: "      className=\"hero\"" },
                        { line: 16, code: "    >", mobile: "    >" },
                        { line: 17, code: "      <h1>Build the Future</h1>", mobile: "      <h1>Future</h1>" },
                        { line: 18, code: "    </motion.div>", mobile: "    </motion.div>" },
                        { line: 19, code: "  );", mobile: "  );" },
                        { line: 20, code: "};", mobile: "};" },
                      ].map((lineData, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center"
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + index * 0.03 }}
                        >
                          <span className="text-slate-500 w-4 lg:w-8 text-right mr-2 lg:mr-4 select-none text-xs">
                            {lineData.line || ""}
                          </span>
                          <div className="flex-1 overflow-hidden">
                            <motion.span 
                              className="text-slate-300 block truncate lg:overflow-visible"
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ delay: 1 + index * 0.03, duration: 0.5 }}
                            >
                              <span className="lg:hidden">{lineData.mobile}</span>
                              <span className="hidden lg:inline">{lineData.code}</span>
                            </motion.span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Terminal at bottom */}
                  <div className="bg-slate-950/80 border-t border-slate-700/50 p-2 lg:p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Terminal className="w-3 h-3 lg:w-4 lg:h-4 text-emerald-400" />
                      <span className="text-slate-300 font-medium text-xs lg:text-sm">TERMINAL</span>
                    </div>
                    <div className="font-mono text-xs lg:text-sm">
                      <div className="flex items-center text-emerald-400">
                        <span className="text-slate-500">Zentrix@dev:~$</span>
                        <motion.span 
                          className="ml-2 truncate"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2, duration: 1 }}
                        >
                          <span className="lg:hidden">npm run dev</span>
                          <span className="hidden lg:inline">npm run dev --turbo</span>
                        </motion.span>
                        <motion.div
                          className="w-1 lg:w-2 h-3 lg:h-4 bg-emerald-400 ml-1"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      </div>
                      <motion.div 
                        className="text-emerald-300 text-xs mt-1 lg:mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5 }}
                      >
                        ✓ Local: localhost:3000
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Live Preview - Hidden on mobile, shown on large screens */}
                <div className="hidden xl:block w-80 bg-slate-900/30 border-l border-slate-700/50">
                  <div className="p-4 border-b border-slate-700/50">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-slate-300 font-medium text-sm">LIVE PREVIEW</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20 p-4 mb-4">
                      <motion.h3 
                        className="text-white font-bold text-lg mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.5 }}
                      >
                        Build the Future
                      </motion.h3>
                      <motion.p 
                        className="text-slate-400 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3 }}
                      >
                        Component rendered successfully
                      </motion.p>
                    </div>
                    
                    {/* Performance Metrics */}
                    <div className="space-y-3">
                      {[
                        { label: "Build Time", value: "1.2s", color: "emerald" },
                        { label: "Bundle Size", value: "245KB", color: "blue" },
                        { label: "Performance", value: "98/100", color: "purple" },
                      ].map((metric, index) => (
                        <motion.div
                          key={index}
                          className="flex justify-between items-center p-2 bg-slate-800/30 rounded-lg"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 3.5 + index * 0.2 }}
                        >
                          <span className="text-slate-400 text-sm">{metric.label}</span>
                          <span className={`text-${metric.color}-400 font-medium text-sm`}>{metric.value}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Typing Cursor Effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent w-0.5 lg:w-1"
                animate={{ x: [0, 200, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />
            </div>
          </motion.div>

          {/* Glow Effect */}
          <motion.div
            className="absolute -inset-4 lg:-inset-8 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl lg:rounded-3xl blur-2xl lg:blur-3xl -z-10"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Mobile Mockup - Responsive positioning */}
        <motion.div 
          className="absolute -right-4 lg:-right-20 top-4 lg:top-20 w-40 h-64 lg:w-64 lg:h-96 hidden md:block"
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
        >
          <div className="relative w-full h-full bg-slate-900 rounded-2xl lg:rounded-3xl border-4 lg:border-8 border-slate-700 shadow-2xl overflow-hidden">
            {/* Phone Header */}
            <div className="bg-slate-800 p-2 lg:p-3 flex justify-center">
              <div className="w-8 lg:w-16 h-0.5 lg:h-1 bg-slate-600 rounded-full"></div>
            </div>
            
            {/* Mobile Code Editor */}
            <div className="bg-slate-950 h-full p-2 lg:p-3 overflow-hidden">
              <div className="flex items-center gap-1 lg:gap-2 mb-2 lg:mb-3">
                <Code className="w-3 h-3 lg:w-4 lg:h-4 text-indigo-400" />
                <span className="text-slate-300 font-semibold text-xs">Mobile IDE</span>
              </div>
              
              <div className="space-y-1 text-xs font-mono">
                {[
                  "import React from 'react';",
                  "",
                  "const App = () => {",
                  "  return (",
                  "    <div>",
                  "      <h1>Hello</h1>",
                  "    </div>",
                  "  );",
                  "};"
                ].map((line, index) => (
                  <motion.div
                    key={index}
                    className="flex"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.5 + index * 0.1 }}
                  >
                    <span className="text-slate-600 w-4 lg:w-6 text-right mr-1 lg:mr-2 text-xs">
                      {line && index + 1}
                    </span>
                    <span className="text-slate-300 text-xs truncate">{line}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Mobile Terminal */}
              <div className="absolute bottom-2 lg:bottom-4 left-2 lg:left-3 right-2 lg:right-3 bg-slate-900/80 rounded-lg p-1.5 lg:p-2">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-emerald-400 text-xs">Ready</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile-only Stats Panel */}
        <motion.div 
          className="md:hidden mt-8 bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300 font-medium text-sm">LIVE PREVIEW</span>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Build", value: "1.2s", color: "emerald" },
              { label: "Size", value: "245KB", color: "blue" },
              { label: "Score", value: "98/100", color: "purple" },
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="text-center p-3 bg-slate-800/30 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 + index * 0.2 }}
              >
                <div className={`text-${metric.color}-400 font-bold text-lg`}>{metric.value}</div>
                <div className="text-slate-400 text-xs">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="p-3 rounded-full border-2 border-slate-600 bg-slate-900/50 backdrop-blur-sm hover:border-indigo-400 transition-colors cursor-pointer group ">
          <ArrowDown className="h-6 w-6 text-slate-400 group-hover:text-indigo-400 transition-colors" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;