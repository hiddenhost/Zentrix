import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Zap, Code, Database, Shield, Monitor, Palette, Megaphone, Smartphone, Cloud } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set background opacity based on scroll position
      setIsScrolled(currentScrollY > 20);
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up or at top - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeDropdown]);

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileSolutionsOpen(false);
    setMobileResourcesOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
      } ${
        isScrolled 
          ? 'bg-gradient-to-b from-slate-900 to-slate-950 backdrop-blur-xl shadow-lg border-b border-zinc-800/50' 
          : 'bg-gradient-to-b from-slate-900 to-slate-950 backdrop-blur-sm border-b border-zinc-800/30'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Advanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-slate-900 to-slate-950"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute inset-0 bg-grid-slate-100/[0.02] bg-[length:32px_32px]"></div>
          <div className="flex items-center justify-between h-16">
            
            {/* Logo - Compact Size for Integration */}
            <a href="/" className="flex items-center space-x-2 group flex-shrink-0">
              <div className="relative">
                <div className="w-32 h-10 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                  <img
                    src="/assets/zen_logo.png"
                    alt="ZENTRIX Logo"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </a>

            {/* Center Navigation - Integrated Design */}
            <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
              <a href="/" className="flex items-center text-sm font-medium text-zinc-300 hover:text-white transition-all duration-200 relative group">
                <Shield className="w-4 h-4 mr-2" />
                Home
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-full"></div>
              </a>

              {/* Solutions Dropdown with Hover */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('solutions')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className="flex items-center text-sm font-medium text-zinc-300 hover:text-white transition-all duration-200 relative group"
                >
                  <Database className="w-4 h-4 mr-2" />
                  Solutions
                  <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-full"></div>
                </button>
                
                {activeDropdown === 'solutions' && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-80 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800/50 rounded-xl shadow-2xl py-3 animate-fade-in">
                    <div className="px-3 space-y-1">
                      <a href="/software-development" className="flex items-center px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all duration-200 group">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                          <Code className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-white">Software Development</div>
                          <div className="text-xs text-zinc-400">Custom software solutions</div>
                        </div>
                      </a>
                      <a href="/web-development" className="flex items-center px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all duration-200 group">
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                          <Monitor className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-white">Web Development</div>
                          <div className="text-xs text-zinc-400">Modern web applications</div>
                        </div>
                      </a>
                      <a href="/ui-ux-design" className="flex items-center px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all duration-200 group">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                          <Palette className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-white">UI/UX Design</div>
                          <div className="text-xs text-zinc-400">User-centered design</div>
                        </div>
                      </a>
                      <a href="/logo-branding" className="flex items-center px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all duration-200 group">
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                          <Zap className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-white">Designing & Branding</div>
                          <div className="text-xs text-zinc-400">Brand identity solutions</div>
                        </div>
                      </a>
                      <a href="/digital-marketing" className="flex items-center px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all duration-200 group">
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                          <Megaphone className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-white">Digital Marketing</div>
                          <div className="text-xs text-zinc-400">Growth & engagement</div>
                        </div>
                      </a>
                      <a href="/mobile-app-development" className="flex items-center px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all duration-200 group">
                        <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                          <Smartphone className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-white">Mobile App Development</div>
                          <div className="text-xs text-zinc-400">iOS & Android apps</div>
                        </div>
                      </a>
                      <a href="/cloud-solutions" className="flex items-center px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all duration-200 group">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                          <Cloud className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-white">Cloud Solutions</div>
                          <div className="text-xs text-zinc-400">Scalable cloud services</div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
              <a href="/portfolio" className="flex items-center text-sm font-medium text-zinc-300 hover:text-white transition-all duration-200 relative group">
                <Code className="w-4 h-4 mr-2" />
                Portfolio
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-full"></div>
              </a>
              
              {/* Resources Dropdown with Hover */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className="flex items-center text-sm font-medium text-zinc-300 hover:text-white transition-all duration-200 relative group"
                >
                  Resources
                  <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-full"></div>
                </button>
                
                {activeDropdown === 'resources' && (
                  <div className="absolute top-full right-0 mt-3 w-48 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800/50 rounded-xl shadow-2xl py-2 animate-fade-in">
                    <div className="px-2 space-y-1">
                      
                     
                      <a href="/blog" className="block px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all duration-200">Blog</a>
                      
                      <a href="/support" className="block px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all duration-200">Support</a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Actions - Get Started Button Integrated */}
            <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
              <a href="/contact-us">
                <button className="relative overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 group text-sm border border-cyan-500/20">
                  <span className="relative z-10 flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Get Started
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700"></div>
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-zinc-300 hover:text-white hover:bg-zinc-800/50 p-2 rounded-lg transition-all duration-200"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-zinc-950/98 backdrop-blur-xl border-t border-zinc-800/50 max-h-screen overflow-y-auto">
            <div className="px-4 pt-4 pb-6 space-y-3">
              
              {/* Home */}
              <a 
                href="/" 
                onClick={closeMobileMenu}
                className="flex items-center px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-xl transition-all duration-200"
              >
                <Shield className="w-5 h-5 mr-3 text-cyan-400" />
                <span className="font-medium">Home</span>
              </a>

              {/* Solutions - Collapsible */}
              <div className="space-y-1">
                <button
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-xl transition-all duration-200"
                >
                  <div className="flex items-center">
                    <Database className="w-5 h-5 mr-3 text-emerald-400" />
                    <span className="font-medium">Solutions</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileSolutionsOpen && (
                  <div className="pl-4 space-y-1 animate-fade-in">
                    <a href="/software-development" onClick={closeMobileMenu} className="flex items-center px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/30 rounded-lg transition-all duration-200">
                      <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md flex items-center justify-center mr-3">
                        <Code className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-zinc-200">Software Development</div>
                        <div className="text-xs text-zinc-500">Custom software solutions</div>
                      </div>
                    </a>
                    <a href="/web-development" onClick={closeMobileMenu} className="flex items-center px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/30 rounded-lg transition-all duration-200">
                      <div className="w-7 h-7 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-md flex items-center justify-center mr-3">
                        <Monitor className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-zinc-200">Web Development</div>
                        <div className="text-xs text-zinc-500">Modern web applications</div>
                      </div>
                    </a>
                    <a href="/ui-ux-design" onClick={closeMobileMenu} className="flex items-center px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/30 rounded-lg transition-all duration-200">
                      <div className="w-7 h-7 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md flex items-center justify-center mr-3">
                        <Palette className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-zinc-200">UI/UX Design</div>
                        <div className="text-xs text-zinc-500">User-centered design</div>
                      </div>
                    </a>
                    <a href="/logo-branding" onClick={closeMobileMenu} className="flex items-center px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/30 rounded-lg transition-all duration-200">
                      <div className="w-7 h-7 bg-gradient-to-r from-orange-500 to-red-500 rounded-md flex items-center justify-center mr-3">
                        <Zap className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-zinc-200">Logo & Branding</div>
                        <div className="text-xs text-zinc-500">Brand identity solutions</div>
                      </div>
                    </a>
                    <a href="/digital-marketing" onClick={closeMobileMenu} className="flex items-center px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/30 rounded-lg transition-all duration-200">
                      <div className="w-7 h-7 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-md flex items-center justify-center mr-3">
                        <Megaphone className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-zinc-200">Digital Marketing</div>
                        <div className="text-xs text-zinc-500">Growth & engagement</div>
                      </div>
                    </a>
                    <a href="/mobile-app-development" onClick={closeMobileMenu} className="flex items-center px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/30 rounded-lg transition-all duration-200">
                      <div className="w-7 h-7 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md flex items-center justify-center mr-3">
                        <Smartphone className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-zinc-200">Mobile App Development</div>
                        <div className="text-xs text-zinc-500">iOS & Android apps</div>
                      </div>
                    </a>
                    <a href="/cloud-solutions" onClick={closeMobileMenu} className="flex items-center px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/30 rounded-lg transition-all duration-200">
                      <div className="w-7 h-7 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md flex items-center justify-center mr-3">
                        <Cloud className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-zinc-200">Cloud Solutions</div>
                        <div className="text-xs text-zinc-500">Scalable cloud services</div>
                      </div>
                    </a>
                  </div>
                )}
              </div>

              {/* Portfolio */}
              <a 
                href="/portfolio" 
                onClick={closeMobileMenu}
                className="flex items-center px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-xl transition-all duration-200"
              >
                <Code className="w-5 h-5 mr-3 text-blue-400" />
                <span className="font-medium">Portfolio</span>
              </a>

              {/* Resources - Collapsible */}
              <div className="space-y-1">
                <button
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-xl transition-all duration-200"
                >
                  <div className="flex items-center">
                    <Database className="w-5 h-5 mr-3 text-purple-400" />
                    <span className="font-medium">Resources</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileResourcesOpen && (
                  <div className="pl-8 space-y-1 animate-fade-in">
                    
                    <a href="/blog" onClick={closeMobileMenu} className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/30 rounded-lg transition-all duration-200">
                      Blog
                    </a>
                    
                    <a href="/support" onClick={closeMobileMenu} className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/30 rounded-lg transition-all duration-200">
                      Support
                    </a>
                  </div>
                )}
              </div>

              {/* Get Started Button - Mobile */}
              <div className="pt-4 border-t border-zinc-800/50">
                <a href="/contact-us" onClick={closeMobileMenu}>
                  <button className="w-full relative overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white font-semibold px-6 py-4 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group border border-cyan-500/20">
                    <span className="relative z-10 flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Get Started
                    </span>
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700"></div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      

      <style>
        {`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in {
            animation: fade-in 200ms ease-out;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;