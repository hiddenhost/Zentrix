import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap, Code, Cpu, Database, Shield, Globe, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TechComingSoon() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [glitchText, setGlitchText] = useState('NexGen');

  const glitchChars = '!@#$%^&*(){}[]|\\:";\'<>?,./_+-=`~';
  const originalText = 'NexGen ';

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      let iterations = 0;
      const glitchTimer = setInterval(() => {
        setGlitchText(
          originalText
            .split('')
            .map((char, i) => {
              if (i < iterations) return originalText[i];
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            })
            .join('')
        );
        iterations += 1/3;
        if (iterations >= originalText.length) {
          clearInterval(glitchTimer);
          setGlitchText(originalText);
        }
      }, 50);
    }, 4000);

    return () => clearInterval(glitchInterval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

 

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
        <Navbar />
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-3xl transition-all duration-1000 ease-out"
          style={{ 
            left: mousePos.x - 192, 
            top: mousePos.y - 192,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        
        {/* Status Indicator */}
        <div className="mb-8 flex items-center space-x-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm mt-16">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-cyan-400 text-sm font-mono">SYSTEM INITIALIZING</span>
        </div>

        {/* Main Logo/Title */}
        <div className="text-center mb-12">
          <h1 className="text-8xl md:text-9xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-mono tracking-wider">
            {glitchText}
          </h1>
          <p className="text-xl md:text-4xl text-gray-300 font-light tracking-wide">
            IT Services
          </p>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6 mt-2"></div>
          
          <p className="text-gray-500 text-5xl mt-8">Will be Update Soon..</p>
        </div>
        
        {/* Countdown Timer */}
        <div className="flex space-x-8 mb-12">
          {[
            { label: 'DAYS', value: '07' },
            { label: 'HOURS', value: '12' },
            { label: 'MINS', value: '34' },
            { label: 'SECS', value: '56' }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 border border-cyan-500/30 rounded-lg bg-gray-900/50 backdrop-blur-sm flex items-center justify-center mb-2">
                <span className="text-2xl md:text-3xl font-mono font-bold text-cyan-400">{item.value}</span>
              </div>
              <span className="text-xs text-gray-500 font-mono">{item.label}</span>
            </div>
          ))}
        </div>

        

        

        {/* Progress Bar */}
        <div className="mt-12 w-full max-w-md">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Development Progress</span>
            <span>54%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full w-[54%] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 flex items-center space-x-6 text-gray-400">
         
          
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm"> NexGen </span>
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-cyan-500/30"></div>
      <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-cyan-500/30"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-cyan-500/30"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-cyan-500/30"></div>
      
    </div>
  );
}