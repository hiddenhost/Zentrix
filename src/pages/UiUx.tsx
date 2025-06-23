import React, { useState, useEffect } from 'react';
import { Eye, Brain, Palette, Users, MousePointer, Smartphone, Monitor, Zap, Target, Code, Layers, BarChart3, ArrowRight, ChevronDown, Play, Pause } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const UIUXDesignPage = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [currentProcess, setCurrentProcess] = useState(0);

  const processSteps = [
    { title: "Research", desc: "User interviews, market analysis", icon: Users, color: "from-blue-500 to-cyan-500" },
    { title: "Define", desc: "Problem definition, user personas", icon: Target, color: "from-purple-500 to-pink-500" },
    { title: "Ideate", desc: "Brainstorming, concept development", icon: Brain, color: "from-green-500 to-emerald-500" },
    { title: "Prototype", desc: "Wireframes, interactive mockups", icon: Layers, color: "from-orange-500 to-red-500" },
    { title: "Test", desc: "User testing, feedback iteration", icon: BarChart3, color: "from-indigo-500 to-purple-500" }
  ];

  const uiComponents = [
    { name: "Typography", desc: "Hierarchical text systems for readability", example: "Headings, body text, captions" },
    { name: "Color Systems", desc: "Accessible color palettes and tokens", example: "Primary, secondary, semantic colors" },
    { name: "Components", desc: "Reusable interface elements", example: "Buttons, forms, cards, modals" },
    { name: "Layout Grids", desc: "Structured spacing and alignment", example: "12-column grid, flexbox, CSS Grid" },
    { name: "Icons & Graphics", desc: "Visual communication elements", example: "Icon libraries, illustrations, imagery" },
    { name: "Animations", desc: "Motion design for interactions", example: "Transitions, micro-interactions, loading states" }
  ];

  const uxPrinciples = [
    { name: "User Research", desc: "Understanding user needs, behaviors, and pain points through interviews and analytics", impact: "85% better product-market fit" },
    { name: "Information Architecture", desc: "Organizing content and features in logical, findable structures", impact: "60% reduction in user confusion" },
    { name: "User Journey Mapping", desc: "Visualizing the complete user experience across touchpoints", impact: "40% improvement in conversion rates" },
    { name: "Wireframing & Prototyping", desc: "Creating low and high-fidelity representations of the product", impact: "70% faster development cycles" },
    { name: "Usability Testing", desc: "Validating designs with real users before development", impact: "50% fewer post-launch issues" },
    { name: "Accessibility Design", desc: "Ensuring products are usable by people with diverse abilities", impact: "30% larger addressable market" }
  ];

  const techStack = [
    { category: "Design Tools", tools: ["Figma", "Adobe XD", "Sketch", "Framer"] },
    { category: "Prototyping", tools: ["Principle", "InVision", "Marvel", "Axure"] },
    { category: "Research", tools: ["Hotjar", "Maze", "UserTesting", "Optimal Workshop"] },
    { category: "Development", tools: ["React", "Vue", "Angular", "Tailwind CSS"] }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAnimating) {
        setCurrentProcess((prev) => (prev + 1) % processSteps.length);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-20 pb-0 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-white mb-4 mt-10">UI/UX</h2>
          </div>  
        </div>
      </section>

      {/* Creative UI/UX Mockup Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Interactive Design Showcase</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience modern UI/UX principles through interactive elements and micro-animations
            </p>
          </div>

          {/* Main Mockup Container */}
          <div className="relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 rounded-3xl p-8 border border-purple-500/20 shadow-2xl">
            {/* Browser Chrome */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 bg-gray-800/50 rounded-lg px-4 py-1 ml-4">
                <span className="text-gray-400 text-sm">https://designstudio.app</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 mb-8 border border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-8">
                  <div className="text-white font-bold text-xl">DesignStudio</div>
                  <nav className="hidden md:flex space-x-6">
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Work</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                  </nav>
                </div>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform">
                  Get Started
                </button>
              </div>
            </div>

            {/* Hero Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center bg-purple-500/20 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-sm">
                    <Palette className="w-4 h-4 mr-2" />
                    Creative Design
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Crafting Digital
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Experiences</span>
                  </h1>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    We transform ideas into beautiful, functional digital products that users love and businesses need.
                  </p>
                </div>

                {/* Interactive Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-500/20 hover:scale-105 transition-transform cursor-pointer">
                    <div className="text-2xl font-bold text-white">150+</div>
                    <div className="text-sm text-gray-300">Projects</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/20 hover:scale-105 transition-transform cursor-pointer">
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-sm text-gray-300">Satisfaction</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-4 border border-orange-500/20 hover:scale-105 transition-transform cursor-pointer">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-sm text-gray-300">Support</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                    Start Your Project
                  </button>
                  <button className="border border-gray-600 text-gray-300 px-8 py-3 rounded-full hover:border-white hover:text-white transition-all duration-300 flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo
                  </button>
                </div>
              </div>

              {/* Interactive Design Preview */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm">
                  {/* Mobile App Mockup */}
                  <div className="bg-black rounded-3xl p-4 mb-6 relative overflow-hidden">
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 h-80 relative">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center text-white text-sm mb-6">
                        <span>9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-4 h-2 bg-white/50 rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <Eye className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-white font-semibold">Design Vision</div>
                            <div className="text-white/70 text-sm">Creative Dashboard</div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                            <div className="w-8 h-8 bg-white/20 rounded-lg mb-2"></div>
                            <div className="text-white text-sm font-medium">Projects</div>
                            <div className="text-white/70 text-xs">24 Active</div>
                          </div>
                          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                            <div className="w-8 h-8 bg-white/20 rounded-lg mb-2"></div>
                            <div className="text-white text-sm font-medium">Team</div>
                            <div className="text-white/70 text-xs">12 Members</div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-white text-sm font-medium">Progress</span>
                            <span className="text-white/70 text-sm">78%</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div className="bg-white h-2 rounded-full w-3/4"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute -top-2 -right-2 w-16 h-16 bg-yellow-400/20 rounded-full blur-xl"></div>
                      <div className="absolute bottom-4 -left-2 w-12 h-12 bg-blue-400/20 rounded-full blur-lg"></div>
                    </div>
                  </div>

                  {/* Design Tools */}
                  <div className="flex justify-center space-x-4">
                    <div className="bg-gray-700/50 rounded-lg p-3 hover:bg-gray-600/50 transition-colors cursor-pointer">
                      <Smartphone className="w-5 h-5 text-gray-300" />
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-3 hover:bg-gray-600/50 transition-colors cursor-pointer">
                      <Monitor className="w-5 h-5 text-gray-300" />
                    </div>
                    <div className="bg-purple-600/50 rounded-lg p-3">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Floating Design Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-60"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-lg opacity-40"></div>
                <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-md opacity-50"></div>
              </div>
            </div>

            {/* Interactive Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MousePointer className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Interactive Prototypes</h3>
                <p className="text-gray-300 text-sm">Click-through prototypes that feel like the real thing</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">User Psychology</h3>
                <p className="text-gray-300 text-sm">Designs based on behavioral science and user research</p>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Performance Focused</h3>
                <p className="text-gray-300 text-sm">Lightning-fast interfaces optimized for all devices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI Components Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">UI Design Components</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The building blocks that make up beautiful and functional user interfaces
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uiComponents.map((component, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-xl font-semibold text-white mb-3">{component.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{component.desc}</p>
                <div className="bg-gray-700/30 rounded-lg p-3">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Examples</p>
                  <p className="text-sm text-blue-300">{component.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      

      {/* UX Principles Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">UX Design Principles</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Core methodologies that drive user-centered design decisions
            </p>
          </div>
          
          <div className="space-y-6">
            {uxPrinciples.map((principle, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{principle.name}</h3>
                    <p className="text-gray-300 leading-relaxed">{principle.desc}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <div className="bg-green-500/20 border border-green-500/30 rounded-lg px-4 py-2">
                      <p className="text-green-300 font-semibold text-sm">{principle.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Design Process Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Design Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our systematic approach to creating user-centered designs
            </p>
            
          </div>

          <div className="relative">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center relative">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ${
                    currentProcess === index ? 'bg-gradient-to-r ' + step.color + ' scale-110 shadow-2xl' : 'bg-gray-700/50 scale-100'
                  }`}>
                    <step.icon className={`w-8 h-8 transition-colors duration-500 ${
                      currentProcess === index ? 'text-white' : 'text-gray-400'
                    }`} />
                  </div>
                  <h3 className={`font-semibold mb-2 transition-colors duration-500 ${
                    currentProcess === index ? 'text-white' : 'text-gray-300'
                  }`}>{step.title}</h3>
                  <p className={`text-sm text-center max-w-32 transition-colors duration-500 ${
                    currentProcess === index ? 'text-gray-200' : 'text-gray-400'
                  }`}>{step.desc}</p>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute -right-8 top-8 text-gray-600 w-6 h-6" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* Technology Stack Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern tools and technologies we use to create exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-4">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer /> 
    </div>
  );
};

export default UIUXDesignPage;