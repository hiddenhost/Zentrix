import React, { useState, useEffect } from 'react';
import { ArrowLeft, Palette, Target, Zap, Users, BarChart3, Eye, Download, Play, CheckCircle, Star, Layers, PenTool, Type, Brush, Grid, MousePointer } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LogoBranding = () => {
  const [activeTab, setActiveTab] = useState('design');
  const [selectedColor, setSelectedColor] = useState('#3B82F6');
  const [logoAnimation, setLogoAnimation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoAnimation(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: PenTool,
      title: "Logo Design",
      description: "Custom logos that capture your brand's essence",
      features: ["Vector Graphics", "Multiple Variations", "Scalable Formats", "Color Psychology"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Complete visual identity systems",
      features: ["Color Palettes", "Typography Systems", "Brand Guidelines", "Asset Library"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Type,
      title: "Brand Strategy",
      description: "Strategic positioning and messaging",
      features: ["Brand Positioning", "Target Audience", "Competitive Analysis", "Brand Voice"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Grid,
      title: "Brand Applications",
      description: "Design across all touchpoints",
      features: ["Business Cards", "Letterheads", "Digital Assets", "Marketing Materials"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const designProcess = [
    { step: "01", title: "Discovery", desc: "Understanding your vision", status: "completed" },
    { step: "02", title: "Research", desc: "Market & competitor analysis", status: "completed" },
    { step: "03", title: "Concept", desc: "Initial design concepts", status: "active" },
    { step: "04", title: "Refinement", desc: "Iterating on feedback", status: "pending" },
    { step: "05", title: "Delivery", desc: "Final assets & guidelines", status: "pending" }
  ];

  const colorPalette = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#6366F1'];

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Brand Design Studio
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                Logo & Brand
                <br />
                <span className="text-blue-400">Design</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Transform your vision into a powerful brand identity. We create logos and brand systems that resonate with your audience and drive business growth.
              </p>
              
            </div>

            {/* Interactive Logo Preview */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 backdrop-blur-xl border border-white/10">
                <div className="text-center mb-6">
                  <h3 className="text-white font-semibold mb-2">Live Logo Preview</h3>
                  <p className="text-slate-400 text-sm">See how your logo adapts</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-xl p-8 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${logoAnimation === 0 ? 'from-blue-500 to-purple-600' : logoAnimation === 1 ? 'from-green-500 to-emerald-600' : logoAnimation === 2 ? 'from-orange-500 to-red-600' : 'from-purple-500 to-pink-600'} transition-all duration-1000 flex items-center justify-center text-white font-bold text-xl`}>
                      B
                    </div>
                  </div>
                  <div className="bg-slate-900 rounded-xl p-8 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${logoAnimation === 0 ? 'from-blue-500 to-purple-600' : logoAnimation === 1 ? 'from-green-500 to-emerald-600' : logoAnimation === 2 ? 'from-orange-500 to-red-600' : 'from-purple-500 to-pink-600'} transition-all duration-1000 flex items-center justify-center text-white font-bold text-xl`}>
                      B
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-2">
                  {colorPalette.map((color, index) => (
                    <button
                      key={index}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === color ? 'border-white scale-110' : 'border-white/30'}`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className=" px-6 border-y border-white/10">
      
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Brand Design Services</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Comprehensive branding solutions that cover every aspect of your visual identity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Tools Interface */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Brand Design Tools</h2>
            <p className="text-slate-400 text-lg">Professional tools for creating exceptional brands</p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl backdrop-blur-xl border border-white/10 overflow-hidden">
            {/* Tool Tabs */}
            <div className="border-b border-white/10 p-6">
              <div className="flex space-x-1 bg-slate-800/50 rounded-xl p-1">
                {['design', 'colors', 'typography', 'assets'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all capitalize ${
                      activeTab === tab 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tool Interface */}
            <div className="p-8">
              {activeTab === 'design' && (
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Logo Variants</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-white rounded-xl p-6 flex items-center justify-center h-24">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Design Options</h3>
                    <div className="space-y-3">
                      {['Minimalist', 'Modern', 'Classic', 'Bold'].map((style, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                          <span className="text-white">{style}</span>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            <span className="text-slate-400 text-sm">{4.5 + i * 0.1}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'colors' && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Brand Color Palette</h3>
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
                    {colorPalette.map((color, i) => (
                      <div key={i} className="text-center">
                        <div 
                          className="w-full h-20 rounded-xl mb-2 cursor-pointer hover:scale-105 transition-transform"
                          style={{ backgroundColor: color }}
                        ></div>
                        <div className="text-slate-400 text-xs font-mono">{color}</div>
                      </div>
                    ))}
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-800/50">
                      <div className="text-white font-semibold mb-2">Primary</div>
                      <div className="text-slate-400 text-sm">Brand identity color</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/50">
                      <div className="text-white font-semibold mb-2">Secondary</div>
                      <div className="text-slate-400 text-sm">Supporting colors</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/50">
                      <div className="text-white font-semibold mb-2">Accent</div>
                      <div className="text-slate-400 text-sm">Highlighting elements</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'typography' && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-6">Typography System</h3>
                  <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-slate-800/50">
                      <div className="text-4xl font-bold text-white mb-2">Heading Font</div>
                      <div className="text-slate-400">Perfect for headlines and titles</div>
                    </div>
                    <div className="p-6 rounded-xl bg-slate-800/50">
                      <div className="text-lg text-white mb-2">Body text font for reading</div>
                      <div className="text-slate-400">Optimized for readability and user experience</div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 rounded-xl bg-slate-800/50">
                        <div className="text-2xl font-bold text-white mb-2">Aa</div>
                        <div className="text-slate-400 text-sm">Primary</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-slate-800/50">
                        <div className="text-2xl text-white mb-2">Aa</div>
                        <div className="text-slate-400 text-sm">Secondary</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-slate-800/50">
                        <div className="text-2xl italic text-white mb-2">Aa</div>
                        <div className="text-slate-400 text-sm">Accent</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'assets' && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-6">Brand Assets</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {['Business Cards', 'Letterhead', 'Social Media', 'Web Assets'].map((asset, i) => (
                      <div key={i} className="text-center p-6 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all cursor-pointer group">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <Download className="w-8 h-8 text-blue-400" />
                        </div>
                        <div className="text-white font-semibold mb-1">{asset}</div>
                        <div className="text-slate-400 text-sm">Ready to download</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Dashboard */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900/50 to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Design Process Dashboard</h2>
            <p className="text-slate-400 text-lg">Track your project progress in real-time</p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 backdrop-blur-xl border border-white/10">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Process Steps */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold text-white mb-6">Project Timeline</h3>
                <div className="space-y-4">
                  {designProcess.map((step, index) => (
                    <div key={index} className="flex items-center p-4 rounded-xl bg-slate-800/50 border border-white/5">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold mr-4 ${
                        step.status === 'completed' ? 'bg-green-500 text-white' :
                        step.status === 'active' ? 'bg-blue-500 text-white' :
                        'bg-slate-600 text-slate-300'
                      }`}>
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold">{step.title}</div>
                        <div className="text-slate-400 text-sm">{step.desc}</div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        step.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                        step.status === 'active' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-slate-600/20 text-slate-400'
                      }`}>
                        {step.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Stats */}
              
            </div>
          </div>
        </div>
      </section>

      

      <Footer />
    </div>
  );
};

export default LogoBranding;