import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

import { 
  Code, 
  Cpu, 
  Database, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  Clock,
  TrendingUp,
  GitBranch,
  Terminal,
  Layers,
  Server,
  Globe,
  Play,
  Award
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaReact, FaNodeJs, FaPython, FaAws, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiDocker } from "react-icons/si";

import {
  
  FaJava,
  FaDocker,
  FaAngular,
  FaLinux,
  FaDatabase,
} from "react-icons/fa";
import {
  
  SiTypescript,
  SiJenkins,
  SiKubernetes,
  SiPostgresql,
  SiRedux,
  SiGraphql,
  SiNextdotjs,
} from "react-icons/si";

const SoftwareDevelopmentPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    clients: 0,
    uptime: 0,
    satisfaction: 0,
    pullRequests: 8,
  commits: 32,
  coverage: 87,
  velocity: 120,
  });

  

  // Animate stats on mount
  useEffect(() => {
    const animateValue = (start, end, duration, key) => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(start + (end - start) * progress);
        
        setAnimatedStats(prev => ({ ...prev, [key]: value }));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    };

    // Start animations with delays
    setTimeout(() => animateValue(0, 250, 2000, 'projects'), 200);
    setTimeout(() => animateValue(0, 150, 2000, 'clients'), 400);
    setTimeout(() => animateValue(0, 99, 2000, 'uptime'), 600);
    setTimeout(() => animateValue(0, 98, 2000, 'satisfaction'), 800);
  }, []);
  
  const techStack = [
  { name: "React.js", level: 90, icon: <FaReact />, color: "from-cyan-400 to-blue-500" },
  { name: "Node.js", level: 85, icon: <FaNodeJs />, color: "from-lime-400 to-green-500" },
  { name: "Python", level: 80, icon: <FaPython />, color: "from-yellow-400 to-amber-500" },
  { name: "MongoDB", level: 75, icon: <SiMongodb />, color: "from-emerald-400 to-green-600" },
  { name: "Tailwind CSS", level: 88, icon: <SiTailwindcss />, color: "from-sky-400 to-teal-400" },
  { name: "Docker", level: 70, icon: <SiDocker />, color: "from-blue-400 to-indigo-500" },
  { name: "AWS", level: 65, icon: <FaAws />, color: "from-orange-400 to-yellow-500" },
  { name: "Git", level: 90, icon: <FaGitAlt />, color: "from-red-500 to-orange-500" },
  { name: "TypeScript", icon: <SiTypescript />, color: "from-blue-600 to-blue-700" },
  { name: "Java", icon: <FaJava />, color: "from-red-600 to-yellow-600" },
  { name: "Angular", icon: <FaAngular />, color: "from-red-500 to-red-700" },
  { name: "Linux", icon: <FaLinux />, color: "from-gray-600 to-black" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "from-blue-700 to-blue-900" },
  { name: "Jenkins", icon: <SiJenkins />, color: "from-red-500 to-red-700" },
  { name: "Kubernetes", icon: <SiKubernetes />, color: "from-blue-500 to-blue-700" },
  { name: "Redux", icon: <SiRedux />, color: "from-purple-600 to-purple-800" },
  
  { name: "Next.js", icon: <SiNextdotjs />, color: "from-gray-700 to-black" },
  { name: "SQL Databases", icon: <FaDatabase />, color: "from-indigo-600 to-indigo-800" },
];


  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Software Development",
      description: "Tailored solutions built from scratch to meet your specific business requirements",
      features: ["Full-stack development", "API integration", "Real-time systems", "Scalable architecture"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Enterprise Solutions",
      description: "Robust, scalable systems designed for large-scale business operations",
      features: ["ERP systems", "CRM platforms", "Business intelligence", "Workflow automation"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Compliance",
      description: "Secure software with industry-standard compliance and data protection",
      features: ["Data encryption", "GDPR compliance", "Security audits", "Penetration testing"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "High-performance applications optimized for speed and efficiency",
      features: ["Code optimization", "Database tuning", "Caching strategies", "Load balancing"]
    }
  ];

  const projects = [
    {
      title: "FinTech Trading Platform",
      description: "Real-time trading platform with advanced analytics",
      tech: ["React", "Node.js", "WebSocket", "Redis"],
      metrics: { users: "50K+", uptime: "99.9%", trades: "1M+" }
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive patient management and telemedicine platform",
      tech: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      metrics: { patients: "25K+", providers: "500+", appointments: "100K+" }
    },
    {
      title: "E-commerce Marketplace",
      description: "Multi-vendor marketplace with AI-powered recommendations",
      tech: ["Next.js", "Microservices", "MongoDB", "AWS"],
      metrics: { vendors: "1K+", products: "50K+", orders: "500K+" }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-zinc-900 to-black text-white">
      {/* Hero Section */}
       <Navbar />
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <Code className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">Software Development</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
                  Build Powerful Software Solutions
                </h1>
                <p className="text-xl text-zinc-300 leading-relaxed">
                  Transform your ideas into robust, scalable software applications with our expert development team. 
                  From concept to deployment, we deliver cutting-edge solutions that drive business growth.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                  <span className="flex items-center">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="px-8 py-4 border border-zinc-700 hover:border-zinc-600 rounded-xl font-semibold transition-all duration-300 hover:bg-zinc-800/50">
                  View Portfolio
                </button>
              </div>
            </div>
            
            {/* Unique Developer Dashboard */}
<div className="relative bg-gradient-to-br from-[#0f0f10] to-[#1a1a1c] p-6 rounded-2xl shadow-2xl border border-zinc-700/40 text-white">
  {/* Header */}
  <div className="flex justify-between items-center mb-4">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-red-500 rounded-full" />
      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
      <div className="w-3 h-3 bg-green-500 rounded-full" />
    </div>
    <div className="text-xs text-gray-400">Developer Console: main.ts</div>
  </div>

  {/* Code Preview */}
  <div className="bg-[#141416] p-4 rounded-lg border border-zinc-600 font-mono text-sm text-green-300 leading-relaxed mb-5">
    <p><span className="text-purple-400">function</span> <span className="text-sky-400">deployApp</span>() {'{'}</p>
    <p className="ml-4">const build = compileCode();</p>
    <p className="ml-4">const result = upload(build, 'prod');</p>
    <p className="ml-4">console.log(<span className="text-yellow-300">'🚀 Deployment Successful'</span>);</p>
    <p>{'}'}</p>
  </div>

  {/* Terminal Logs */}
  <div className="bg-black p-3 rounded-lg text-xs font-mono text-green-400 border border-zinc-600 mb-5">
    <p><span className="text-blue-400">root@dev</span>:~$ yarn deploy --env production</p>
    <p>🔄 Bundling modules...</p>
    <p>✔ Build complete in 2.91s</p>
    <p>📦 Uploaded to S3 → cdn.nexgen.dev</p>
    <p>✅ Deployment to server-1 completed!</p>
  </div>

  {/* AI Assistant Chat Bubble */}
  <div className="bg-zinc-800/70 p-4 rounded-xl border border-zinc-700 mb-5 shadow-inner">
    <p className="text-sm text-gray-300">💡 <span className="text-emerald-400">AI Assistant:</span> “Try using lazy loading for modules above 300kb for better performance!”</p>
  </div>

  {/* System Stats */}
  <div className="grid grid-cols-2 gap-4 text-sm">
    <div className="bg-zinc-700/40 p-4 rounded-lg">
      <p className="text-zinc-300">Memory Usage</p>
      <p className="text-xl text-lime-300 font-bold">2.3 GB / 8 GB</p>
    </div>
    <div className="bg-zinc-700/40 p-4 rounded-lg">
      <p className="text-zinc-300">CPU Load</p>
      <p className="text-xl text-orange-300 font-bold">34%</p>
    </div>
    <div className="bg-zinc-700/40 p-4 rounded-lg col-span-2">
      <p className="text-zinc-300 mb-1">Next Scheduled Deployment</p>
      <p className="text-sm text-cyan-300">⏰ Sunday, 3:30 PM - Auto-triggered from GitHub Actions</p>
    </div>
  </div>
</div>



          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Development Services</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Comprehensive software development solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-zinc-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-zinc-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zinc-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a]">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold text-white mb-2">Tech Toolbox</h2>
      <p className="text-zinc-400 text-lg">The technologies powering our code.</p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {techStack.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
          className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 flex items-center justify-center gap-4 shadow-lg hover:-translate-y-2 transition-transform duration-300"
        >
          <span className="text-3xl text-white">{tech.icon}</span>
          <span className="text-xl font-semibold text-white">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Award className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-zinc-300">
              Let's discuss your software development needs and create a solution that exceeds your expectations.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact-us">
  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
    Start Your Project Today
  </button>
</a>

            
          </div>
        </div>
      </section>
        <Footer />
    </div>
  );
};

export default SoftwareDevelopmentPage;