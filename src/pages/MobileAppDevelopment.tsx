import React, { useState, useEffect } from 'react';
import { ArrowLeft, Smartphone, Code, Palette, Shield, Zap, Globe, Users, BarChart3, Settings, Play, Download, Star, TrendingUp, Bell, Search, Menu, Heart, ShoppingCart, Camera, MapPin, Calendar, MessageSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from "framer-motion";

const MobileAppDevelopment = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlatform, setSelectedPlatform] = useState('ios');
  const [codeIndex, setCodeIndex] = useState(0);

  const codeSnippets = [
    `import React from 'react';

const MobileApp = () => {
  const [user, setUser] = useState(null);
  
  return (
    <div className="app-container">
      <h1>Mobile App Development</h1>
      <button onClick={handleLogin}>
        Get Started
      </button>
    </div>
  );
};`,
    `import SwiftUI from 'swiftui';

struct ContentView: View {
  var body: some View {
    VStack {
      Text("iOS App Development")
        .font(.largeTitle)
        .foregroundColor(.blue)
    }
  }
}`,
    `import 'package:flutter/material.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Text('Flutter Development'),
        ),
      ),
    );
  }
}`
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

    const developmentServices = [
      {
        icon: Code,
        title: "Native iOS Development",
        description: "Swift & SwiftUI applications with native performance and iOS design guidelines",
        technologies: ["Swift", "SwiftUI", "Xcode", "Core Data", "CloudKit"],
        color: "from-blue-500 to-blue-600"
      },
      {
        icon: Smartphone,
        title: "Native Android Development",
        description: "Kotlin & Java applications following Material Design principles",
        technologies: ["Kotlin", "Java", "Android Studio", "Jetpack Compose", "Firebase"],
        color: "from-green-500 to-green-600"
      },
      {
        icon: Globe,
        title: "Cross-Platform Development",
        description: "React Native & Flutter apps with shared codebase for both platforms",
        technologies: ["React Native", "Flutter", "Dart", "Expo", "TypeScript"],
        color: "from-purple-500 to-purple-600"
      },
      {
        icon: Palette,
        title: "UI/UX Design & Branding",
        description: "Complete brand identity and user experience design for mobile applications",
        technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "After Effects"],
        color: "from-pink-500 to-pink-600"
      },
      {
        icon: Shield,
        title: "Backend & API Development",
        description: "Secure and scalable backend infrastructure with RESTful APIs",
        technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "AWS"],
        color: "from-orange-500 to-orange-600"
      },
      {
        icon: BarChart3,
        title: "Analytics & Performance",
        description: "Advanced analytics, crash reporting, and performance monitoring",
        technologies: ["Firebase Analytics", "Crashlytics", "New Relic", "Mixpanel"],
        color: "from-cyan-500 to-cyan-600"
      }
    ];

  const dashboardStats = [
    { label: "Active Projects", value: "24", change: "+12%", color: "text-green-400" },
    { label: "Apps Deployed", value: "156", change: "+8%", color: "text-blue-400" },
    { label: "Client Satisfaction", value: "98%", change: "+2%", color: "text-purple-400" },
    { label: "Code Coverage", value: "94%", change: "+5%", color: "text-orange-400" }
  ];

  const features = [
    { icon: Zap, title: "Performance", desc: "Optimized for speed" },
    { icon: Shield, title: "Security", desc: "Enterprise-grade" },
    { icon: Users, title: "Scalable", desc: "Grows with your business" },
    { icon: Globe, title: "Cross-platform", desc: "iOS & Android ready" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <Navbar /> 

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Mobile App Development
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Transform your ideas into powerful mobile experiences with native performance and stunning design.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
                    <feature.icon className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-slate-300">{feature.title}</span>
                  </div>
                ))}
              </div>
             
            </div>

            {/* Right Code Editor */}
            <div className="bg-slate-900/90 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-700/50">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-400 text-sm">mobile-app.{codeIndex === 0 ? 'jsx' : codeIndex === 1 ? 'swift' : 'dart'}</span>
                </div>
                <Code className="w-4 h-4 text-slate-400" />
              </div>
              <div className="p-4 font-mono text-sm">
                <pre className="text-slate-300 leading-relaxed">
                  <code>{codeSnippets[codeIndex]}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Development Dashboard</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Real-time insights into our mobile app development process</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {dashboardStats.map((stat, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">{stat.label}</span>
                  <TrendingUp className="w-4 h-4 text-green-400" />
                </div>
                <div className="flex items-end space-x-2">
                  <span className="text-3xl font-bold text-white">{stat.value}</span>
                  <span className={`text-sm ${stat.color}`}>{stat.change}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Phone Mockups */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* iPhone Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                    
                    {/* Screen Content */}
                    <div className="h-full bg-gradient-to-br from-blue-50 to-purple-50 relative">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-6 pt-12 pb-4 text-black text-sm font-medium">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-black rounded-full"></div>
                            <div className="w-1 h-1 bg-black rounded-full"></div>
                            <div className="w-1 h-1 bg-black rounded-full"></div>
                          </div>
                          <div className="w-6 h-3 border border-black rounded-sm">
                            <div className="w-4 h-1 bg-green-500 rounded-sm mt-0.5 ml-0.5"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="px-6 mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <h1 className="text-2xl font-bold text-gray-900">ECommerce Pro</h1>
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                            <ShoppingCart className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        
                        {/* Search Bar */}
                        <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3">
                          <Search className="w-5 h-5 text-gray-400" />
                          <span className="ml-3 text-gray-500">Search products...</span>
                        </div>
                      </div>

                      {/* Featured Card */}
                      <div className="px-6 mb-6">
                        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-6 text-white">
                          <h3 className="text-lg font-semibold mb-2">Summer Sale</h3>
                          <p className="text-sm opacity-90 mb-3">Up to 50% off on all items</p>
                          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 inline-block">
                            <span className="text-sm font-medium">Shop Now</span>
                          </div>
                        </div>
                      </div>

                      {/* Product Grid */}
                      <div className="px-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Products</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="bg-white rounded-xl p-3 shadow-sm">
                              <div className="w-full h-20 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                                <Camera className="w-6 h-6 text-gray-400" />
                              </div>
                              <div className="text-sm font-medium text-gray-900 mb-1">Product {item}</div>
                              <div className="text-xs text-gray-500 mb-2">$29.99</div>
                              <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Android Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-[600px] bg-gray-800 rounded-[2rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                    {/* Screen Content */}
                    <div className="h-full bg-gradient-to-br from-green-50 to-blue-50 relative">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-6 pt-8 pb-4 text-black text-sm">
                        <span className="font-medium">2:30 PM</span>
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            <div className="w-1 h-3 bg-green-500 rounded-full"></div>
                            <div className="w-1 h-3 bg-green-500 rounded-full"></div>
                            <div className="w-1 h-3 bg-green-500 rounded-full"></div>
                            <div className="w-1 h-3 bg-gray-300 rounded-full"></div>
                          </div>
                          <div className="w-6 h-3 border border-black rounded-sm">
                            <div className="w-5 h-1 bg-green-500 rounded-sm mt-0.5"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="px-6 mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                              <Heart className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h1 className="text-xl font-bold text-gray-900">FitTracker</h1>
                              <p className="text-sm text-gray-500">Health & Fitness</p>
                            </div>
                          </div>
                          <Menu className="w-6 h-6 text-gray-600" />
                        </div>
                      </div>

                      {/* Stats Cards */}
                      <div className="px-6 mb-6">
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Today's Progress</h3>
                            <Calendar className="w-5 h-5 text-gray-400" />
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between mb-2">
                                <span className="text-sm text-gray-600">Steps</span>
                                <span className="text-sm font-semibold text-gray-900">8,543 / 10,000</span>
                              </div>
                              <div className="w-full bg-gray-200 h-2 rounded-full">
                                <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-4/5"></div>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-4 pt-4">
                              <div className="text-center">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                  <Zap className="w-6 h-6 text-orange-500" />
                                </div>
                                <div className="text-lg font-bold text-gray-900">324</div>
                                <div className="text-xs text-gray-500">Calories</div>
                              </div>
                              <div className="text-center">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                  <MapPin className="w-6 h-6 text-blue-500" />
                                </div>
                                <div className="text-lg font-bold text-gray-900">2.1</div>
                                <div className="text-xs text-gray-500">Miles</div>
                              </div>
                              <div className="text-center">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                  <Heart className="w-6 h-6 text-red-500" />
                                </div>
                                <div className="text-lg font-bold text-gray-900">72</div>
                                <div className="text-xs text-gray-500">BPM</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="px-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 text-white">
                            <Play className="w-6 h-6 mb-2" />
                            <div className="text-sm font-medium">Start Workout</div>
                          </div>
                          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-4 text-white">
                            <BarChart3 className="w-6 h-6 mb-2" />
                            <div className="text-sm font-medium">View Stats</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200">
                      <div className="flex justify-around py-2">
                        <div className="w-8 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
                        <div className="w-8 h-1 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Development Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Comprehensive mobile app development and branding solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-white">Technologies:</div>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Development Process</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our proven methodology ensures successful app delivery from concept to store launch
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery & Planning", desc: "Requirements analysis, market research, and technical planning" },
              { step: "02", title: "Design & Prototyping", desc: "UI/UX design, branding, and interactive prototypes" },
              { step: "03", title: "Development & Testing", desc: "Agile development with continuous testing and QA" },
              { step: "04", title: "Launch & Support", desc: "App store deployment and ongoing maintenance" }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{phase.title}</h3>
                <p className="text-slate-400 leading-relaxed">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MobileAppDevelopment;