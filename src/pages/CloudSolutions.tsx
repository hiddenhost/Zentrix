import React, { useState, useEffect } from 'react';
import { Cloud, Shield, Database, Zap, BarChart3, Server, Globe, Activity, ArrowRight, Play, Container, Cpu, HardDrive, Network } from 'lucide-react';
import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaPython, FaAws, FaGitAlt, FaHtml5, FaCss3Alt, FaGithub, FaLinux 
} from 'react-icons/fa';

import { 
  SiMongodb, SiTailwindcss, SiDocker, SiJavascript, SiTypescript, SiPostgresql, SiFirebase, SiNextdotjs, SiRedux 
} from 'react-icons/si';

import { 
  SiAmazonec2, SiAmazons3, SiKubernetes, SiAmazoncloudwatch, SiAwslambda, 
   SiAmazonrds,  SiAmazoneks,
  SiTerraform, SiAnsible, SiPrometheus, SiGrafana, SiJenkins, SiGitlab
} from 'react-icons/si';

import { 
   FaDocker
} from 'react-icons/fa';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const CloudServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  const [metrics, setMetrics] = useState({ cpu: 67, memory: 84, network: 45, storage: 72 });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        cpu: Math.max(20, Math.min(95, prev.cpu + (Math.random() - 0.5) * 10)),
        memory: Math.max(30, Math.min(90, prev.memory + (Math.random() - 0.5) * 8)),
        network: Math.max(15, Math.min(85, prev.network + (Math.random() - 0.5) * 12)),
        storage: Math.max(40, Math.min(95, prev.storage + (Math.random() - 0.5) * 6))
      }));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { name: 'Cloud Infrastructure', icon: Server, color: 'blue', instances: 2847, status: 'Healthy' },
    { name: 'Security Shield', icon: Shield, color: 'green', instances: 156, status: 'Protected' },
    { name: 'Data Analytics', icon: BarChart3, color: 'purple', instances: 934, status: 'Processing' },
    { name: 'Global CDN', icon: Globe, color: 'cyan', instances: 78, status: 'Optimized' }
  ];

  const features = [
    { title: 'Auto-Scaling Infrastructure', desc: 'Dynamic resource allocation', icon: Server, color: 'blue' },
    { title: 'Advanced Security Suite', desc: 'AI-powered threat detection', icon: Shield, color: 'green' },
    { title: 'Real-time Analytics', desc: 'Instant insights & reporting', icon: BarChart3, color: 'purple' },
    { title: 'Global Edge Network', desc: 'Ultra-low latency worldwide', icon: Globe, color: 'cyan' },
    { title: 'Container Orchestration', desc: 'Kubernetes-native deployment', icon: Container, color: 'orange' },
    { title: 'Serverless Computing', desc: 'Event-driven functions', icon: Zap, color: 'yellow' }
  ];

  const cloudTools = [
    { name: "AWS EC2", icon: <SiAmazonec2 className="text-orange-400" />, color: "text-orange-400" },
    { name: "AWS S3", icon: <SiAmazons3 className="text-green-400" />, color: "text-green-400" },
    { name: "Docker", icon: <FaDocker className="text-blue-400" />, color: "text-blue-400" },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" />, color: "text-blue-500" },
    { name: "CloudWatch", icon: <SiAmazoncloudwatch className="text-purple-400" />, color: "text-purple-400" },
    { name: "Lambda", icon: <SiAwslambda className="text-yellow-400" />, color: "text-yellow-400" },
    
    { name: "RDS", icon: <SiAmazonrds className="text-blue-600" />, color: "text-blue-600" },
    
    { name: "Route 53", icon: <FaAws className="text-orange-500" />, color: "text-orange-500" },
    { name: "EKS", icon: <SiAmazoneks className="text-blue-300" />, color: "text-blue-300" },
    { name: "Terraform", icon: <SiTerraform className="text-purple-500" />, color: "text-purple-500" },
    { name: "Ansible", icon: <SiAnsible className="text-red-400" />, color: "text-red-400" },
    { name: "Prometheus", icon: <SiPrometheus className="text-orange-600" />, color: "text-orange-600" },
    { name: "Grafana", icon: <SiGrafana className="text-orange-400" />, color: "text-orange-400" },
    { name: "Jenkins", icon: <SiJenkins className="text-blue-400" />, color: "text-blue-400" },
    { name: "GitLab", icon: <SiGitlab className="text-orange-500" />, color: "text-orange-500" },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white overflow-hidden">
      <Navbar />
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 25s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }
      `}</style>

      {/* Hero with Live Dashboard */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                <span className="text-sm">Live Production Environment</span>
              </div>
              
              <h1 className="text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Enterprise Cloud
                </span><br />
                <span className="text-white">That Just Works</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Deploy, scale, and manage your applications with our intelligent cloud platform. 
                Trusted by 10,000+ developers worldwide.
              </p>
              
              
            </div>

            {/* Live Dashboard */}
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl mt-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="font-semibold">Production Console</span>
                </div>
                <div className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                  All Systems Operational
                </div>
              </div>

              {/* Live Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: 'CPU Usage', value: metrics.cpu, color: 'blue' },
                  { label: 'Memory', value: metrics.memory, color: 'green' },
                  { label: 'Network I/O', value: metrics.network, color: 'purple' },
                  { label: 'Storage', value: metrics.storage, color: 'orange' }
                ].map((metric, i) => (
                  <div key={i} className="bg-white/5 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-400">{metric.label}</span>
                      <span className="text-sm font-mono">{Math.round(metric.value)}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className={`h-full bg-gradient-to-r from-${metric.color}-500 to-${metric.color}-400 rounded-full transition-all duration-1000`}
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Status */}
              <div className="space-y-3">
                {services.map((service, i) => (
                  <div key={i} 
                    className={`flex items-center justify-between p-3 rounded-lg transition-all cursor-pointer ${
                      activeService === i ? 'bg-blue-500/20 border border-blue-400/30' : 'bg-white/5 hover:bg-white/10'
                    }`}
                    onClick={() => setActiveService(i)}>
                    <div className="flex items-center space-x-3">
                      <service.icon className={`w-5 h-5 text-${service.color}-400`} />
                      <div>
                        <div className="font-medium text-sm">{service.name}</div>
                        <div className="text-xs text-gray-400">{service.instances} instances</div>
                      </div>
                    </div>
                    <div className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                      {service.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Tools */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Cloud Solutions</h2>
            <p className="text-gray-400">Enterprise-ready tools for modern applications</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, i) => (
              <div key={i} className="group bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all hover:transform hover:scale-105 cursor-pointer">
                <feature.icon className={`w-8 h-8 text-${feature.color}-400 group-hover:scale-110 transition-transform mb-4`} />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{feature.desc}</p>
                <button className="w-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-400 py-2 rounded-lg hover:from-blue-500/30 hover:to-purple-600/30 transition-all">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          {/* Cloud Tools Marquee */}
          <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold text-white mb-2">Tech Toolbox</h2>
      <p className="text-zinc-400 text-lg">The technologies powering our code.</p>
    </div>

        <div className="flex flex-wrap justify-center gap-8">
          {cloudTools.map((tech, i) => (
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

          
        </div>
      </section>

      
      <Footer  />
    </div>
  );
};

export default CloudServicesPage;