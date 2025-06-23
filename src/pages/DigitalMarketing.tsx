import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Eye, MousePointer, Star, MapPin, Search, Target, Facebook, Linkedin, BarChart3 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from "framer-motion";

const DigitalMarketingSaaS = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart },
    { id: 'google-ads', label: 'Google Ads', icon: Search },
    { id: 'meta-ads', label: 'Meta Ads', icon: Facebook },
    { id: 'linkedin-ads', label: 'LinkedIn Ads', icon: Linkedin },
    { id: 'seo-ranking', label: 'SEO Rankings', icon: TrendingUp },
    { id: 'gmb', label: 'Google My Business', icon: MapPin }
  ];

  const overviewData = [
    { name: 'Jan', impressions: 45000, clicks: 2100, conversions: 180 },
    { name: 'Feb', impressions: 52000, clicks: 2400, conversions: 220 },
    { name: 'Mar', impressions: 48000, clicks: 2800, conversions: 280 },
    { name: 'Apr', impressions: 61000, clicks: 3200, conversions: 340 },
    { name: 'May', impressions: 55000, clicks: 2900, conversions: 295 }
  ];

  const platformData = [
    { name: 'Google Ads', value: 45, color: '#4285F4' },
    { name: 'Meta Ads', value: 30, color: '#1877F2' },
    { name: 'LinkedIn', value: 15, color: '#0A66C2' },
    { name: 'Others', value: 10, color: '#6B7280' }
  ];

  const seoData = [
    { keyword: 'Digital Marketing', position: 3, volume: 12000, difficulty: 65 },
    { keyword: 'SEO Services', position: 7, volume: 8500, difficulty: 70 },
    { keyword: 'PPC Management', position: 5, volume: 4200, difficulty: 58 },
    { keyword: 'Social Media Marketing', position: 12, volume: 15000, difficulty: 72 }
  ];

  const StatCard = ({ icon: Icon, title, value, change, color = 'blue' }) => (
    <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
      <div className="flex items-center justify-between mb-4">
        <Icon className={`w-8 h-8 text-${color}-400`} />
        <span className={`text-sm font-medium px-2 py-1 rounded-full bg-${color}-400/10 text-${color}-400`}>
          +{change}%
        </span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
      <p className="text-gray-400 text-sm">{title}</p>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard icon={Eye} title="Total Impressions" value="261K" change="12" color="blue" />
        <StatCard icon={MousePointer} title="Total Clicks" value="13.4K" change="18" color="green" />
        <StatCard icon={Users} title="Conversions" value="1,315" change="24" color="purple" />
        <StatCard icon={Target} title="ROAS" value="4.2x" change="8" color="orange" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Performance Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={overviewData}>
              <XAxis dataKey="name" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Line type="monotone" dataKey="impressions" stroke="#3B82F6" strokeWidth={3} />
              <Line type="monotone" dataKey="clicks" stroke="#10B981" strokeWidth={3} />
              <Line type="monotone" dataKey="conversions" stroke="#8B5CF6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Traffic Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={platformData} cx="50%" cy="50%" outerRadius={100} dataKey="value">
                {platformData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const renderGoogleAds = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard icon={Eye} title="Impressions" value="156K" change="15" color="blue" />
        <StatCard icon={MousePointer} title="Clicks" value="8.2K" change="22" color="green" />
        <StatCard icon={Target} title="CPC" value="$2.45" change="5" color="red" />
      </div>
      <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Campaign Performance</h3>
        <div className="space-y-4">
          {['Search Campaign', 'Display Campaign', 'Shopping Campaign'].map((campaign, i) => (
            <div key={i} className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg">
              <span className="text-white font-medium">{campaign}</span>
              <div className="flex space-x-6 text-sm">
                <span className="text-blue-400">CTR: {(2.1 + i * 0.3).toFixed(1)}%</span>
                <span className="text-green-400">Conv: {(180 + i * 20)}</span>
                <span className="text-purple-400">Cost: ${(1200 + i * 300)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMetaAds = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard icon={Eye} title="Reach" value="98K" change="18" color="blue" />
        <StatCard icon={Users} title="Engagement" value="12.5K" change="25" color="green" />
        <StatCard icon={Target} title="CPM" value="$8.50" change="3" color="orange" />
      </div>
      <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Ad Set Performance</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={[
            { name: 'Awareness', facebook: 45, instagram: 38 },
            { name: 'Traffic', facebook: 52, instagram: 41 },
            { name: 'Conversions', facebook: 38, instagram: 45 }
          ]}>
            <XAxis dataKey="name" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Bar dataKey="facebook" fill="#1877F2" />
            <Bar dataKey="instagram" fill="#E4405F" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const renderLinkedInAds = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard icon={Eye} title="Impressions" value="45K" change="12" color="blue" />
        <StatCard icon={Users} title="Leads" value="342" change="28" color="green" />
        <StatCard icon={Target} title="CPL" value="$24.50" change="8" color="purple" />
      </div>
      <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Audience Insights</h3>
        <div className="grid grid-cols-2 gap-4">
          {['IT Services', 'Marketing', 'Finance', 'Healthcare'].map((industry, i) => (
            <div key={i} className="p-4 bg-gray-800/50 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-white text-sm">{industry}</span>
                <span className="text-blue-400 text-sm">{(25 + i * 15)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full" style={{width: `${25 + i * 15}%`}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSEO = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard icon={TrendingUp} title="Avg Position" value="5.2" change="15" color="green" />
        <StatCard icon={Search} title="Total Keywords" value="847" change="8" color="blue" />
        <StatCard icon={Eye} title="Organic Traffic" value="28.5K" change="32" color="purple" />
      </div>
      <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Keyword Rankings</h3>
        <div className="space-y-3">
          {seoData.map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
              <div>
                <span className="text-white font-medium">{item.keyword}</span>
                <div className="text-sm text-gray-400">Vol: {item.volume.toLocaleString()} | Difficulty: {item.difficulty}%</div>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                item.position <= 3 ? 'bg-green-400/20 text-green-400' :
                item.position <= 10 ? 'bg-yellow-400/20 text-yellow-400' :
                'bg-red-400/20 text-red-400'
              }`}>
                #{item.position}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGMB = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard icon={Eye} title="Profile Views" value="2.8K" change="22" color="blue" />
        <StatCard icon={Star} title="Avg Rating" value="4.7" change="5" color="yellow" />
        <StatCard icon={MapPin} title="Direction Requests" value="456" change="18" color="green" />
      </div>
      <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Business Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-white font-medium mb-3">Search Queries</h4>
            <div className="space-y-2">
              {['Digital marketing agency', 'SEO services near me', 'PPC management'].map((query, i) => (
                <div key={i} className="flex justify-between p-2 bg-gray-800/50 rounded">
                  <span className="text-gray-300 text-sm">{query}</span>
                  <span className="text-blue-400 text-sm">{(45 - i * 12)}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3">Customer Actions</h4>
            <div className="space-y-3">
              {[
                { action: 'Website Visits', count: 324, color: 'blue' },
                { action: 'Phone Calls', count: 89, color: 'green' },
                { action: 'Direction Requests', count: 156, color: 'purple' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">{item.action}</span>
                  <span className={`text-${item.color}-400 font-medium`}>{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'google-ads': return renderGoogleAds();
      case 'meta-ads': return renderMetaAds();
      case 'linkedin-ads': return renderLinkedInAds();
      case 'seo-ranking': return renderSEO();
      case 'gmb': return renderGMB();
      default: return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl text-white font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2 mt-14">
            Digital Marketing 
          </h1>
          <p className="text-gray-400">Unified analytics dashboard for all your marketing campaigns</p>
        </div>
        {/* Interactive Marketing Dashboard Preview */}
           <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1, ease: "backOut" }}
        className="relative mt-4 md:mt-20"
      >
        <div className="relative mx-auto max-w-6xl">
          <motion.div 
            className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 backdrop-blur-xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 group mt-5"
            whileHover={{ y: -5, rotateX: 1, rotateY: 1 }}
            transition={{ duration: 0.4, ease: "backOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-4 md:p-6 border-b border-slate-700/50">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex gap-1.5 md:gap-2">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-red-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-slate-300 font-semibold text-sm md:text-base">Marketing Analytics Pro</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="px-2 py-1 md:px-3 bg-emerald-500/20 text-emerald-400 rounded-full text-xs md:text-sm font-medium">Live Campaign</div>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Marketing Dashboard Content */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden min-h-[400px] md:aspect-video">
              <div className="absolute inset-0 p-4 md:p-8">
                {/* Marketing Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-0 md:h-full">
                  {[
                    { 
                      icon: Target, 
                      label: "Campaign ROI", 
                      value: "425%", 
                      change: "+85%", 
                      color: "emerald",
                      desc: "vs last month"
                    },
                    { 
                      icon: Users, 
                      label: "Lead Generation", 
                      value: "2.4K", 
                      change: "+32%", 
                      color: "blue",
                      desc: "new leads"
                    },
                    { 
                      icon: MousePointer, 
                      label: "CTR", 
                      value: "8.7%", 
                      change: "+2.1%", 
                      color: "purple",
                      desc: "click rate"
                    },
                    { 
                      icon: BarChart3, 
                      label: "Conversion", 
                      value: "12.3%", 
                      change: "+4.2%", 
                      color: "pink",
                      desc: "conversion rate"
                    },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className={`bg-gradient-to-br from-${stat.color}-500/10 to-${stat.color}-600/5 rounded-xl md:rounded-2xl p-3 md:p-4 border border-${stat.color}-500/20 backdrop-blur-sm relative overflow-hidden group`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2 md:mb-3">
                        <stat.icon className={`w-4 h-4 md:w-5 md:h-5 text-${stat.color}-400`} />
                        <div className={`text-${stat.color}-400 text-xs md:text-sm font-medium bg-${stat.color}-500/10 px-1.5 py-0.5 md:px-2 md:py-1 rounded-full`}>
                          {stat.change}
                        </div>
                      </div>
                      <div className="text-slate-400 text-xs mb-1">{stat.label}</div>
                      <div className="text-white text-lg md:text-xl font-bold mb-1">{stat.value}</div>
                      <div className="text-slate-500 text-xs">{stat.desc}</div>
                      
                      {/* Animated progress bar */}
                      <motion.div 
                        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-400`}
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.random() * 80 + 20}%` }}
                        transition={{ delay: 2 + index * 0.2, duration: 1 }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Marketing Campaign Performance Chart */}
                <div className="md:absolute md:bottom-8 md:left-8 md:right-8 md:h-32 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl border border-indigo-500/20 p-3 md:p-4 h-24 md:h-32 mb-4 md:mb-0">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 md:mb-4 gap-2">
                    <h3 className="text-slate-300 font-semibold text-sm">Campaign Performance</h3>
                    <div className="flex gap-2 md:gap-4 text-xs">
                      <div className="flex items-center gap-1 md:gap-2">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-400 rounded-full"></div>
                        <span className="text-slate-400">Google Ads</span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-0 bg-purple-400 rounded-full"></div>
                        <span className="text-slate-400">Facebook Ads</span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-pink-400 rounded-full"></div>
                        <span className="text-slate-400">LinkedIn Ads</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated Chart Bars */}
                  <div className="flex items-end justify-center gap-0.5 md:gap-1 h-12 md:h-16">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="flex flex-col gap-0.5 md:gap-1 flex-1">
                        {/* Google Ads */}
                        <motion.div
                          className="bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-sm"
                          initial={{ height: 0 }}
                          animate={{ height: `${Math.random() * 30 + 10}px` }}
                          transition={{
                            delay: 2.5 + i * 0.05,
                            duration: 0.5,
                            repeat: Infinity,
                            repeatDelay: 8,
                            ease: "easeOut"
                          }}
                        />
                        {/* Facebook Ads */}
                        <motion.div
                          className="bg-gradient-to-t from-purple-500 to-purple-400 rounded-sm"
                          initial={{ height: 0 }}
                          animate={{ height: `${Math.random() * 25 + 15}px` }}
                          transition={{
                            delay: 2.7 + i * 0.05,
                            duration: 0.5,
                            repeat: Infinity,
                            repeatDelay: 8,
                            ease: "easeOut"
                          }}
                        />
                        {/* LinkedIn Ads */}
                        <motion.div
                          className="bg-gradient-to-t from-pink-500 to-pink-400 rounded-sm"
                          initial={{ height: 0 }}
                          animate={{ height: `${Math.random() * 20 + 8}px` }}
                          transition={{
                            delay: 2.9 + i * 0.05,
                            duration: 0.5,
                            repeat: Infinity,
                            repeatDelay: 8,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Marketing Strategy Alerts - Mobile positioned differently */}
                <div className="space-y-2 md:space-y-3 md:absolute md:top-8 md:right-8">
                  {[
                    { text: "A/B Test: +15% CTR", color: "emerald", icon: TrendingUp },
                    { text: "Budget Alert: 85% spent", color: "yellow", icon: Target },
                    { text: "New lead source found", color: "blue", icon: Users },
                  ].map((alert, index) => (
                    <motion.div
                      key={index}
                      className={`bg-${alert.color}-500/10 border border-${alert.color}-500/30 rounded-lg p-2 md:p-3 backdrop-blur-sm w-full md:min-w-48`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 3 + index * 0.3 }}
                    >
                      <div className="flex items-center gap-2">
                        <alert.icon className={`w-3 h-3 md:w-4 md:h-4 text-${alert.color}-400`} />
                        <span className="text-slate-300 text-xs md:text-sm font-medium">{alert.text}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Scanning Effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent"
                animate={{ x: [-100, 800] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2
                }}
              />
            </div>
          </motion.div>

          {/* Glow Effect */}
          <motion.div
            className="absolute -inset-4 md:-inset-8 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl md:rounded-3xl blur-2xl md:blur-3xl -z-10"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
        {/* What We Provide Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 mt-10">What We Provide</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions to grow your business across all channels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: Search,
                title: "Google Ads Management",
                description: "Search, Display, Shopping & YouTube campaigns with advanced targeting and optimization",
                features: ["Keyword Research", "Ad Copy Creation", "Bid Management", "Conversion Tracking"]
              },
              {
                icon: Facebook,
                title: "Meta Ads (Facebook & Instagram)",
                description: "Social media advertising across Facebook and Instagram with creative strategy",
                features: ["Audience Targeting", "Creative Design", "A/B Testing", "Retargeting Campaigns"]
              },
              {
                icon: Linkedin,
                title: "LinkedIn Advertising",
                description: "B2B lead generation and brand awareness campaigns for professional audiences",
                features: ["Lead Gen Forms", "Sponsored Content", "Message Ads", "Account Targeting"]
              },
              {
                icon: TrendingUp,
                title: "Search Engine Optimization",
                description: "Organic ranking improvement through technical SEO, content, and link building",
                features: ["Keyword Optimization", "Technical SEO", "Content Strategy", "Local SEO"]
              },
              {
                icon: MapPin,
                title: "Google My Business",
                description: "Local business optimization to increase visibility in local search results",
                features: ["Profile Optimization", "Review Management", "Local Citations", "GMB Posts"]
              },
              {
                icon: BarChart3,
                title: "Analytics & Reporting",
                description: "Comprehensive tracking and reporting across all marketing channels",
                features: ["Performance Tracking", "ROI Analysis", "Custom Dashboards", "Monthly Reports"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all group">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Our Digital Marketing Services?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Target,
                  title: "ROI Focused",
                  description: "Every campaign optimized for maximum return on investment"
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Certified professionals with years of industry experience"
                },
                {
                  icon: Eye,
                  title: "Full Transparency",
                  description: "Real-time reporting and complete campaign visibility"
                },
                {
                  icon: TrendingUp,
                  title: "Scalable Growth",
                  description: "Strategies that grow with your business needs"
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <benefit.icon className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-8 p-2 bg-gray-900/50 rounded-xl backdrop-blur border border-gray-800">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>
          
        {renderContent()}
      </div>
      
    <Footer />
    </div>
  );
};

export default DigitalMarketingSaaS;