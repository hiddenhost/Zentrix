import React, { useState, useEffect } from 'react';
import { ArrowLeft, Globe, Smartphone, Zap, Shield, Monitor, Tablet, Play, Pause } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from "framer-motion";

import { 
  FaReact, FaNodeJs, FaPython, FaAws, FaGitAlt, FaHtml5, FaCss3Alt, FaGithub, FaLinux 
} from 'react-icons/fa';

import { 
  SiMongodb, SiTailwindcss, SiDocker, SiJavascript, SiTypescript, SiPostgresql, SiFirebase, SiNextdotjs, SiRedux 
} from 'react-icons/si';


const techStack = [
  { name: "React.js", icon: <FaReact className="text-cyan-400" />, color: "text-cyan-400" },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" />, color: "text-white" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" />, color: "text-green-400" },
  { name: "Python", icon: <FaPython className="text-yellow-400" />, color: "text-yellow-400" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" />, color: "text-yellow-300" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, color: "text-blue-500" },
  { name: "MongoDB", icon: <SiMongodb className="text-emerald-400" />, color: "text-emerald-400" },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-indigo-400" />, color: "text-indigo-400" },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, color: "text-yellow-500" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, color: "text-sky-400" },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, color: "text-blue-500" },
  { name: "Redux", icon: <SiRedux className="text-purple-500" />, color: "text-purple-500" },
];

const WebDevelopment = () => {
  const [currentDevice, setCurrentDevice] = useState('desktop');
  const [isAnimating, setIsAnimating] = useState(false);

  const features = [
    {
      icon: Globe,
      title: "Modern Web Apps",
      description: "Cutting-edge web applications built with React, Next.js, and the latest technologies."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Pixel-perfect designs that work flawlessly across all devices and screen sizes."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with advanced performance techniques and best practices."
    },
    {
      icon: Shield,
      title: "SEO Optimized",
      description: "Built with SEO best practices to ensure maximum visibility and search rankings."
    }
  ];

  const getDeviceStyles = () => {
    switch (currentDevice) {
      case 'desktop':
        return 'w-full h-96 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-600 rounded-lg overflow-hidden shadow-2xl';
      case 'tablet':
        return 'w-80 h-96 mx-auto bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-600 rounded-xl overflow-hidden shadow-2xl';
      case 'mobile':
        return 'w-64 h-96 mx-auto bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-600 rounded-2xl overflow-hidden shadow-2xl';
      default:
        return 'w-full h-96 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-600 rounded-lg overflow-hidden shadow-2xl';
    }
  };

  const MockWebsite = () => (
    <div className={`${isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'} transition-all duration-300`}>
      <div className={getDeviceStyles()}>
        {/* Browser Header */}
        <div className="bg-slate-700 p-2 flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 bg-slate-600 rounded px-3 py-1 ml-4">
            <span className="text-xs text-slate-300">https://yourwebsite.com</span>
          </div>
        </div>
        
        {/* Website Content */}
        <div className="p-4 h-full bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
          {currentDevice === 'desktop' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold">LOGO</div>
                <div className="flex space-x-4">
                  <div className="bg-slate-300 rounded h-2 w-12"></div>
                  <div className="bg-slate-300 rounded h-2 w-12"></div>
                  <div className="bg-slate-300 rounded h-2 w-12"></div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg">
                <div className="bg-white/20 rounded h-4 w-3/4 mb-2"></div>
                <div className="bg-white/20 rounded h-3 w-1/2"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-white p-4 rounded shadow">
                    <div className="bg-blue-200 rounded h-16 mb-2"></div>
                    <div className="bg-slate-200 rounded h-2 mb-1"></div>
                    <div className="bg-slate-200 rounded h-2 w-3/4"></div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {currentDevice === 'tablet' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold">LOGO</div>
                <div className="bg-slate-300 rounded h-6 w-6"></div>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg">
                <div className="bg-white/20 rounded h-3 w-3/4 mb-2"></div>
                <div className="bg-white/20 rounded h-2 w-1/2"></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="bg-white p-3 rounded shadow">
                    <div className="bg-blue-200 rounded h-12 mb-2"></div>
                    <div className="bg-slate-200 rounded h-2 mb-1"></div>
                    <div className="bg-slate-200 rounded h-2 w-2/3"></div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {currentDevice === 'mobile' && (
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">LOGO</div>
                <div className="bg-slate-300 rounded h-4 w-4"></div>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg">
                <div className="bg-white/20 rounded h-3 w-full mb-1"></div>
                <div className="bg-white/20 rounded h-2 w-3/4"></div>
              </div>
              <div className="space-y-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-white p-3 rounded shadow">
                    <div className="bg-blue-200 rounded h-8 mb-2"></div>
                    <div className="bg-slate-200 rounded h-2 mb-1"></div>
                    <div className="bg-slate-200 rounded h-2 w-4/5"></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black">
      <Navbar />
      {/* Navigation */}
      
      
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-white mt-10">
              Web Development
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Create stunning, high-performance websites that captivate your audience and drive conversions. 
              See how your website will look across all devices.
            </p>
          </div>

          {/* Responsive Demo Section */}
          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Perfect Responsiveness in Action</h2>
              <p className="text-zinc-400 mb-6">See how your website transforms seamlessly from desktop to mobile</p>
            </div>

            {/* Side by Side Demo Container */}
            <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 rounded-2xl p-8 border border-zinc-700/50">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                
                {/* Desktop View - Left Side */}
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Monitor className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-semibold">Desktop Version</span>
                  </div>
                  
                  {/* Desktop Mockup */}
                  <div className="transition-all duration-500 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-600 rounded-lg overflow-hidden shadow-2xl">
                    {/* Browser Header */}
                    <div className="bg-slate-800 p-2 flex items-center space-x-2 border-b border-slate-700">
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-slate-700 rounded-md px-3 py-1 ml-4 border border-slate-600">
                        <span className="text-xs text-slate-300">https://vasterior.com</span>
                      </div>
                    </div>
                    
                    {/* Desktop Content */}
                    <div className="h-96 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
                      {/* Navigation */}
                      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200 px-6 py-3 flex justify-between items-center">
                        <div className="flex items-center space-x-8">
                          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold">
                            TechFlow
                          </div>
                          <div className="flex space-x-6 text-xs text-slate-600">
                            <span className="hover:text-indigo-600 cursor-pointer">Features</span>
                            <span className="hover:text-indigo-600 cursor-pointer">Pricing</span>
                            <span className="hover:text-indigo-600 cursor-pointer">About</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-md text-xs">Login</div>
                          <div className="bg-indigo-600 text-white px-3 py-1.5 rounded-md text-xs">Get Started</div>
                        </div>
                      </div>

                      {/* Hero Section */}
                      <div className="px-6 py-6 text-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                        <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs mb-3">
                          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                          New: AI-Powered Analytics
                        </div>
                        <h1 className="text-xl font-bold text-slate-900 mb-2">
                          Scale Your Business with AI
                        </h1>
                        <p className="text-sm text-slate-600 mb-4 max-w-md mx-auto">
                          Transform your workflow with intelligent automation
                        </p>
                        <div className="flex justify-center space-x-2 mb-4">
                          <div className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-xs">Start Free Trial</div>
                          <div className="border border-slate-300 text-slate-700 px-4 py-2 rounded-lg text-xs">Watch Demo</div>
                        </div>
                        
                        {/* Desktop Dashboard */}
                        <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-3">
                          <div className="bg-slate-50 rounded-lg p-2">
                            <div className="grid grid-cols-3 gap-2 mb-2">
                              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded p-2 text-white">
                                <div className="text-xs opacity-90">Revenue</div>
                                <div className="text-sm font-bold">$24.5k</div>
                              </div>
                              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded p-2 text-white">
                                <div className="text-xs opacity-90">Users</div>
                                <div className="text-sm font-bold">1,247</div>
                              </div>
                              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded p-2 text-white">
                                <div className="text-xs opacity-90">Growth</div>
                                <div className="text-sm font-bold">+18%</div>
                              </div>
                            </div>
                            <div className="bg-white rounded border h-6 flex items-end px-1 space-x-0.5">
                              {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                                <div key={i} className="bg-indigo-400 rounded-sm flex-1" style={{height: `${height}%`}}></div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile View - Right Side */}
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Smartphone className="w-5 h-5 text-green-400" />
                    <span className="text-white font-semibold">Mobile Version</span>
                  </div>
                  
                  {/* Mobile Mockup */}
                  <div className="mx-auto w-64 transition-all duration-500 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-600 rounded-2xl overflow-hidden shadow-2xl">
                    {/* Mobile Browser Header */}
                    <div className="bg-slate-800 p-2 flex items-center space-x-2 border-b border-slate-700">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-slate-700 rounded px-2 py-1 ml-2 border border-slate-600">
                        <span className="text-xs text-slate-300">yoursaas.com</span>
                      </div>
                    </div>
                    
                    {/* Mobile Content */}
                    <div className="h-96 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
                      {/* Mobile Navigation */}
                      <div className="bg-white/95 backdrop-blur-sm border-b border-slate-200 px-3 py-2.5 flex justify-between items-center">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-2 py-1 rounded text-xs font-bold">
                          TechFlow
                        </div>
                        <div className="w-5 h-5 bg-slate-200 rounded flex flex-col justify-center items-center space-y-0.5">
                          <div className="w-2.5 h-0.5 bg-slate-500 rounded"></div>
                          <div className="w-2.5 h-0.5 bg-slate-500 rounded"></div>
                        </div>
                      </div>

                      {/* Mobile Hero */}
                      <div className="px-3 py-4 text-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                        <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full text-xs mb-2">
                          <span className="w-1 h-1 bg-indigo-500 rounded-full mr-1"></span>
                          AI-Powered
                        </div>
                        <h1 className="text-base font-bold text-slate-900 mb-1.5">
                          Scale Your Business
                        </h1>
                        <p className="text-sm text-slate-600 mb-3">
                          Intelligent automation for teams
                        </p>
                        <div className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm mb-3">
                          Start Free Trial
                        </div>
                        
                        {/* Mobile Dashboard */}
                        <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-2.5">
                          <div className="space-y-2 mb-2">
                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded p-2 text-white flex justify-between">
                              <span className="text-xs">Revenue</span>
                              <span className="text-sm font-bold">$24.5k</span>
                            </div>
                            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded p-2 text-white flex justify-between">
                              <span className="text-xs">Users</span>
                              <span className="text-sm font-bold">1,247</span>
                            </div>
                          </div>
                          <div className="bg-slate-50 rounded p-1.5">
                            <div className="flex items-end space-x-0.5 h-4">
                              {[40, 60, 35, 80, 50].map((height, i) => (
                                <div key={i} className="bg-indigo-400 rounded-sm flex-1" style={{height: `${height}%`}}></div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Comparison Text */}
              <div className="text-center mt-8 pt-6 border-t border-zinc-700/50">
                <p className="text-zinc-400">
                  <span className="text-blue-400 font-semibold">Desktop:</span> Full navigation & detailed dashboard
                  <span className="mx-4">•</span>
                  <span className="text-green-400 font-semibold">Mobile:</span> Optimized touch interface & stacked layout
                </p>
              </div>
            </div>
          </div>
           {/* Tech Stack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">

        {/* Features Grid – Refined SaaS UI */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
  {features.map((feature, index) => (
    <div
      key={index}
      className="group bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700/40 rounded-2xl p-6 shadow-md transition-all duration-300 hover:shadow-blue-500/20 hover:-translate-y-1"
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-zinc-800 text-blue-400 mb-6 transition-transform group-hover:scale-110">
        <feature.icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">
        {feature.title}
      </h3>
      <p className="text-sm text-zinc-400 leading-relaxed mb-4">
        {feature.description}
      </p>

      {/* Simulated UI Block */}
      <div className="bg-zinc-900/50 border border-zinc-700/30 rounded-xl p-4 text-sm text-zinc-300">
        <p className="mb-2 font-medium">Example:</p>
        {feature.title === "Modern Web Apps" && (
          <div>
            <p className="mb-1">📊 Dashboard: User Analytics</p>
            <div className="h-2 rounded-full bg-blue-600 w-3/4 mb-1"></div>
            <p className="text-xs text-zinc-500">Active Users: 1.2k</p>
          </div>
        )}
        {feature.title === "Responsive Design" && (
          <div>
            <p className="mb-1">📱 Devices:</p>
            <div className="flex space-x-2 text-xs text-zinc-400">
              <span>✔️ Mobile</span>
              <span>✔️ Tablet</span>
              <span>✔️ Desktop</span>
            </div>
          </div>
        )}
        {feature.title === "Lightning Fast" && (
          <div>
            <p>⚡ Load Time: <span className="text-green-400">0.8s</span></p>
            <p className="text-xs text-zinc-500">GTMetrix Grade: A</p>
          </div>
        )}
        {feature.title === "SEO Optimized" && (
          <div>
            <p>🔍 Meta Tags & Alt Text</p>
            <p className="text-xs text-zinc-500">Lighthouse Score: 97</p>
          </div>
        )}
      </div>
    </div>
  ))}
</div>
        <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold text-white mb-2">Tech Toolbox</h2>
      <p className="text-zinc-400 text-lg">The technologies powering our code.</p>
    </div>

        <div className="flex flex-wrap justify-center gap-8">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-2 p-4 bg-zinc-900 rounded-xl w-32 shadow-lg cursor-default select-none"
            >
              <div className={`text-5xl ${tech.color}`}>
                {tech.icon}
              </div>
              <span className="text-white font-semibold text-lg">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </section>
          

         
        </div>
      
      </section>

      

      <Footer />
    </div>
  );
};

export default WebDevelopment;