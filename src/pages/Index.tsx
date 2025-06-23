
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import Features from '@/components/Features';
import SocialProof from '@/components/SocialProof';
import Testimonials from '@/components/Testimonials';
import PricingPreview from '@/components/PricingPreview';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import Aboutus from '@/components/Aboutus';
import Blog from '@/components/Blog';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <WhatWeDo />
      <SocialProof />
      <Features />
      
      <Aboutus />
      <Projects />
      <Blog />
      
      
      <Testimonials />
      
      <Footer />
    </div>
  );
};

export default Index;
