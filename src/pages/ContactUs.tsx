import React, { useState, useEffect, useCallback } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Send, MessageSquare, 
  Github, Twitter, Linkedin, Globe, Zap, Shield, 
  Cpu, Database, Code, Terminal, ChevronRight,
  User, FileText, AlertCircle, CheckCircle, Heart
} from 'lucide-react';

// TypeScript interfaces
interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function TechContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    priority: 'medium'
  });
  
  const [activeField, setActiveField] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState(new Date());
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  // Debounced mouse move handler to reduce performance impact
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    // Throttle mouse move events
    let throttleTimer: NodeJS.Timeout | null = null;
    const throttledMouseMove = (e: MouseEvent) => {
      if (throttleTimer === null) {
        throttleTimer = setTimeout(() => {
          handleMouseMove(e);
          throttleTimer = null;
        }, 50); // Throttle to 20fps
      }
    };

    window.addEventListener('mousemove', throttledMouseMove, { passive: true });
    
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      clearInterval(timer);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, [handleMouseMove]);

  // Validate form fields
  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.length > 1000) {
      errors.message = 'Message must be less than 1000 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Clear specific error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormErrors];
        return newErrors;
      });
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission for demo
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In real implementation, replace with actual form submission
      console.log('Form data:', formData);
      
      setIsSubmitted(true);
      setFormData({
        name: '', email: '', company: '', 
        subject: '', message: '', priority: 'medium'
      });
      
      // Auto-hide thank you message after 8 seconds
      setTimeout(() => setIsSubmitted(false), 8000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      value: 'zentrixit@gmail.com',
      desc: 'Get response within 2-4 hours',
      color: 'from-blue-500 to-cyan-500',
      action: () => window.open('mailto:zentrixit@gmail.com', '_blank')
    },
    {
      icon: Phone,
      title: 'Phone Support',
      value: '+91 7248800839\n+91 6397036898',
      desc: 'Mon-Fri, 9AM-6PM IST',
      color: 'from-green-500 to-emerald-500',
      action: () => window.open('tel:+917248800839', '_blank')
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: '+91 7248800839\n+91 6397036898',
      desc: 'Instant messaging support',
      color: 'from-green-600 to-green-400',
      action: () => window.open('https://wa.me/916397036898', '_blank')
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Moradabad, 244001',
      desc: 'Uttar Pradesh, India',
      color: 'from-orange-500 to-red-500',
      action: () => window.open('https://maps.google.com/?q=Moradabad,+Uttar+Pradesh,+India', '_blank')
    }
  ];

  const techSpecs = [
    { icon: Zap, label: '99.9% Uptime', value: 'SLA Guaranteed' },
    { icon: Shield, label: 'SOC 2 Certified', value: 'Enterprise Security' },
    { icon: Cpu, label: 'Edge Computing', value: 'Global CDN' },
    { icon: Database, label: 'Real-time Sync', value: 'Sub-second latency' }
  ];

  const messageLength = formData.message.length;
  const maxLength = 1000;

  return (
    <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
      {/* Optimized Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl transition-transform duration-300 ease-out will-change-transform"
          style={{ 
            transform: `translate(${mousePos.x - 192}px, ${mousePos.y - 192}px)`
          }}
        ></div>
      </div>

      {/* Optimized Matrix Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        ></div>
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['<API/>', '{JSON}', 'HTTP/2', 'WebSocket', 'GraphQL', 'REST'].map((code, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/20 font-mono text-xs animate-pulse"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {code}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm mb-6 mt-10">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-mono">COMMUNICATION_INTERFACE.ACTIVE</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            CONTACT
          </h1>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with our engineering team. We're here to help you build the future.
          </p>
        </div>

        {/* Status Bar */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {techSpecs.map((spec, i) => (
            <div key={i} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-lg p-4 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <spec.icon className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-sm font-semibold text-white">{spec.label}</div>
                  <div className="text-xs text-gray-400">{spec.value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/20 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Code className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold">Initialize Communication</h2>
              </div>

              <div className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-mono text-gray-400 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      FULL_NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField('')}
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                        activeField === 'name' 
                          ? 'border-cyan-500 bg-gray-800/70' 
                          : formErrors.name 
                            ? 'border-red-500' 
                            : 'border-gray-700'
                      }`}
                      placeholder="Enter your full name"
                      autoComplete="name"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-xs text-red-400">{formErrors.name}</p>
                    )}
                  </div>
                  
                  <div className="relative">
                    <label className="block text-sm font-mono text-gray-400 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      EMAIL_ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField('')}
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                        activeField === 'email' 
                          ? 'border-cyan-500 bg-gray-800/70' 
                          : formErrors.email 
                            ? 'border-red-500' 
                            : 'border-gray-700'
                      }`}
                      placeholder="your.email@company.com"
                      autoComplete="email"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-xs text-red-400">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Company and Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-mono text-gray-400 mb-2">
                      <Globe className="w-4 h-4 inline mr-2" />
                      ORGANIZATION
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('company')}
                      onBlur={() => setActiveField('')}
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                        activeField === 'company' ? 'border-cyan-500 bg-gray-800/70' : 'border-gray-700'
                      }`}
                      placeholder="Your company name"
                      autoComplete="organization"
                    />
                  </div>
                  
                  <div className="relative">
                    <label className="block text-sm font-mono text-gray-400 mb-2">
                      <FileText className="w-4 h-4 inline mr-2" />
                      SUBJECT_LINE
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField('subject')}
                      onBlur={() => setActiveField('')}
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                        activeField === 'subject' ? 'border-cyan-500 bg-gray-800/70' : 'border-gray-700'
                      }`}
                      placeholder="Brief description of inquiry"
                    />
                  </div>
                </div>

                {/* Priority Level */}
                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2">
                    <AlertCircle className="w-4 h-4 inline mr-2" />
                    PRIORITY_LEVEL
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {(['low', 'medium', 'high', 'urgent'] as const).map((priority) => (
                      <label key={priority} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="priority"
                          value={priority}
                          checked={formData.priority === priority}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 focus:ring-2"
                        />
                        <span className={`text-sm font-mono ${
                          priority === 'urgent' ? 'text-red-400' : 
                          priority === 'high' ? 'text-orange-400' :
                          priority === 'medium' ? 'text-yellow-400' : 'text-green-400'
                        }`}>
                          {priority.toUpperCase()}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <label className="block text-sm font-mono text-gray-400 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    MESSAGE_PAYLOAD *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField('')}
                    rows={6}
                    maxLength={maxLength}
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none ${
                      activeField === 'message' 
                        ? 'border-cyan-500 bg-gray-800/70' 
                        : formErrors.message 
                          ? 'border-red-500' 
                          : 'border-gray-700'
                    }`}
                    placeholder="Describe your technical requirements, questions, or collaboration ideas..."
                  />
                  <div className="flex justify-between items-center mt-2">
                    {formErrors.message && (
                      <p className="text-xs text-red-400">{formErrors.message}</p>
                    )}
                    <div className="text-xs text-gray-500 font-mono ml-auto">
                      {messageLength} / {maxLength}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      <span>TRANSMITTING...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>SEND_MESSAGE</span>
                    </>
                  )}
                </button>

                {/* Enhanced Thank You Message */}
                {isSubmitted && (
                  <div className="p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl backdrop-blur-sm">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-green-500/20 rounded-full">
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-green-400 font-bold text-lg mb-2">
                          🎉 Message Successfully Transmitted!
                        </div>
                        <div className="space-y-2">
                          <p className="text-green-300">
                            <strong>Thank you!</strong> Your message has been successfully sent to our team at <strong>zentrixit@gmail.com</strong>
                          </p>
                          <p className="text-green-300 text-sm">
                            We've received your inquiry and will respond to your email within 2-4 hours during business hours.
                          </p>
                          <div className="flex items-center space-x-2 text-green-400 text-sm mt-3">
                            <Heart className="w-4 h-4 text-pink-400" />
                            <span>We appreciate you reaching out to us!</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="bg-gray-900/20 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Terminal className="w-5 h-5 mr-2 text-cyan-400" />
                Contact Channels
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, i) => (
                  <div 
                    key={i} 
                    className="group cursor-pointer p-4 rounded-lg border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:bg-gray-800/30"
                    onClick={method.action}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${method.color}`}>
                        <method.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {method.title}
                        </div>
                        <div className="text-cyan-400 text-sm font-mono break-all whitespace-pre-line">{method.value}</div>
                        <div className="text-gray-400 text-xs">{method.desc}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Status */}
            <div className="bg-gray-900/20 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Server Time</span>
                  <span className="font-mono text-cyan-400">
                    {currentTime.toLocaleTimeString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Response Time</span>
                  <span className="font-mono text-green-400">&lt; 2hrs</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">System Load</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-2 bg-gray-700 rounded-full">
                      <div className="w-3/4 h-full bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-xs text-green-400">75%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}