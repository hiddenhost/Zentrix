// Using regular anchor tags instead of React Router Link
import { 
  Code, 
  Database, 
  Shield, 
  Monitor, 
  Palette, 
  Megaphone, 
  Smartphone, 
  Cloud,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Instagram,
  MapPin,
  Phone,
  ArrowRight,
  Zap,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const solutions = [
    { name: "Software Development", href: "/software-development", icon: Code },
    { name: "Web Development", href: "/web-development", icon: Monitor },
    { name: "UI/UX Design", href: "/ui-ux-design", icon: Palette },
    { name: "Designing & Branding", href: "/logo-branding", icon: Zap },
    { name: "Mobile App Development", href: "/mobile-app-development", icon: Smartphone },
    { name: "Cloud Solutions", href: "/cloud-solutions", icon: Cloud },
    { name: "Digital Marketing", href: "/digital-marketing", icon: Megaphone }
  ];

  const resources = [
    { name: "Blog", href: "/blog" }, 
    { name: "Support", href: "/support" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Licenses", href: "/licenses" },
    { name: "Security", href: "/security" }
  ];

  const company = [
    { name: "Careers", href: "/careers" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Press Kit", href: "/press" }
  ];

  const socialLinks = [
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Instagram", href: "#", icon: Instagram }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/50 overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-slate-900 to-slate-950"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute inset-0 bg-grid-slate-100/[0.02] bg-[length:32px_32px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Company Branding Section */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="mb-8">
                <a href="/" className="inline-block group">
                  <div className="relative p-2 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-300">
                    <img
                      src="/assets/zen_logo.png"
                      alt="Zentrix Infotech Logo"
                      className="w-24 h-24 object-contain filter brightness-110 drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </a>
              </div>

              {/* Company Description */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Zentrix Infotech
                </h3>
                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  Transforming ideas into powerful digital solutions. We build next-generation software that drives innovation and growth for businesses worldwide.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center text-slate-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors mr-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <span>Moradabad, Uttar Pradesh, India</span>
                </div>
                <div className="flex items-start text-slate-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-green-600/20 transition-colors mr-3 mt-1">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <a 
                      href="tel:+917248800839"
                      className="hover:text-green-400 cursor-pointer transition-all duration-200"
                    >
                      +91 (724) 880-0839
                    </a>
                    <a 
                      href="tel:+916397036898" 
                      className="hover:text-green-400 cursor-pointer transition-all duration-200"
                    >
                      +91 (639) 703-6898
                    </a>
                  </div>
                </div>
                <a 
                  href="mailto:zentrixit@gmail.com"
                  className="flex items-center text-slate-300 hover:text-white transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-purple-600/20 transition-colors mr-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="group-hover:text-purple-400">zentrixit@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Solutions */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-6 flex items-center">
                  <div className="w-6 h-6 rounded-lg bg-blue-600/20 flex items-center justify-center mr-2">
                    <Database className="w-4 h-4 text-blue-400" />
                  </div>
                  Solutions
                </h3>
                <ul className="space-y-3">
                  {solutions.map((solution) => {
                    const IconComponent = solution.icon;
                    return (
                      <li key={solution.name}>
                        <a 
                          href={solution.href}
                          className="flex items-center text-slate-400 hover:text-white transition-all duration-200 group py-1"
                        >
                          <IconComponent className="w-4 h-4 mr-3 text-slate-500 group-hover:text-blue-400 transition-colors" />
                          <span className="group-hover:translate-x-1 transition-transform duration-200 text-sm">
                            {solution.name}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-6">Resources</h3>
                <ul className="space-y-3">
                  {resources.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-all duration-200 hover:translate-x-1 transform inline-block py-1 text-sm group"
                      >
                        {link.name}
                        <ExternalLink className="w-3 h-3 ml-1 inline opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
                <ul className="space-y-3">
                  {company.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-all duration-200 hover:translate-x-1 transform inline-block py-1 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal & Social */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-6 flex items-center">
                  <div className="w-6 h-6 rounded-lg bg-green-600/20 flex items-center justify-center mr-2">
                    <Shield className="w-4 h-4 text-green-400" />
                  </div>
                  Legal
                </h3>
                <ul className="space-y-3 mb-8">
                  {legal.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-all duration-200 hover:translate-x-1 transform inline-block py-1 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Social Links */}
                <div>
                  <h4 className="text-white font-medium text-sm mb-4">Follow Us</h4>
                  <div className="flex space-x-3">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600/20 transition-all duration-200 group"
                        >
                          <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Updated) */}
        <div className="border-t border-slate-800/50 py-8">
          <div className="flex justify-center items-center text-slate-400 text-sm">
            © 2024 Zentrix Infotech. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
