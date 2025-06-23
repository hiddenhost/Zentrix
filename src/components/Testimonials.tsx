import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
 {
  id: 1,
  name: "Charu Shukla",
  company: "Vasterior Pvt. Ltd.",
  content: "The website looks modern and professional — exactly what we needed to showcase our interiors beautifully.",
  avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
},
{
  id: 2,
  name: "",
  company: "Alluring Interiors",
  content: "The design perfectly reflects our style, and the site is easy to navigate for our clients.",
  avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
},
{
  id: 3,
  name: "Rounak Shukla",
  company: "PS Decor",
  content: "The website showcases our wedding projects beautifully and helped us get more client inquiries.",
  avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
},
{
  id: 4,
  name: "Manoj Sikka",
  company: "Morning Bites",
  content: "Our bakery website is inviting and easy to use, making it simple for customers to order online.",
  avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
},
{
  id: 5,
  name: "Akash Mittal",
  company: "Herbsfox",
  content: "The site is clean, well-organized, and perfectly suits our natural products business.",
  avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
},
{
  id: 6,
  name: "Meera Shah",
  company: "Deal360",
  content: "Fast, user-friendly, and visually appealing — our new electronics e-commerce website is a big hit.",
  avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
},
{
    id: 7,
    name: "Rishabh Singhal",
    company: "Kairvi Fort Resort",
    content: "The site turned out elegant and functional — Plus, the digital campaigns brought in real results with a noticeable boost in bookings during peak seasons.",
    avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
  },
{
    id: 8,
    name: "Dr. C.P. Singh",
    company: "Jigyasa Hospital",
    content: "The website is clean, professional, and makes appointment booking super easy. Thanks to the marketing efforts, we’ve seen a consistent rise in patient inquiries through Google and social media. Great collaboration overall!",
    avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
  },
{
  id: 9,
  name: "",
  company: "Southern Palate",
  content: "Our spice e-commerce site looks great and is easy for customers to browse and order.",
  avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
},
{
  id: 10,
  name: "",
  company: "KDEdu.in",
  content: "The college website is informative and easy for students and faculty to access essential resources.",
  avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
},
{
    id: 11,
    name: "",
    company: "Intrio World",
    content: "Absolutely love how the website represents our brand — stylish and user-friendly! The digital marketing push also helped us generate qualified leads consistently. Super happy with the experience!",
    avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
},
{
  id: 12,
  name: "",
  company: "Jai Balaji Bath and Tiles",
  content: "The digital marketing campaigns helped us reach new builders and dealers we couldn’t earlier. Our local visibility has drastically improved, and we’re seeing a steady flow of inquiries through social media and search. Very satisfied!",
  avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
},
{
  id: 13,
  name: "",
  company: "Park Square",
  content: "The digital marketing team really helped us attract property buyers. Our campaigns generated quality leads, and footfall at the site has gone up. Great results and great coordination!",
  avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
},
{
  id: 14,
  name: "",
  company: "Ahlawat Pharmacy",
  content: "Our online presence was almost zero before. Now, people discover us through search and social ads. Orders and footfall have grown steadily since the campaigns started.",
  avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
},
{
  id: 15,
  name: "",
  company: "Hawk Eye Shooting Institute",
  content: "The grand opening was a success thanks to their targeted ads. We reached the right audience at the right time. Now, we’re consistently getting student inquiries through Instagram and Google.",
  avatar: "https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
}


];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-xl lg:rounded-2xl p-4 lg:p-6 mb-4 lg:mb-6 min-h-[160px] lg:min-h-[200px] flex flex-col hover:border-blue-500/30 transition-all duration-300">
    <div className="flex items-start gap-3 lg:gap-4 mb-3 lg:mb-4">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover ring-2 ring-gray-700 flex-shrink-0"
      />
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-white text-sm lg:text-base truncate">{testimonial.name}</h3>
        <p className="text-gray-400 text-xs lg:text-sm truncate">{testimonial.company}</p>
      </div>
    </div>
    <p className="text-gray-300 text-sm lg:text-base leading-relaxed flex-1">{testimonial.content}</p>
  </div>
);

const ScrollingColumn: React.FC<{ 
  testimonials: Testimonial[]; 
  direction: 'up' | 'down';
  speed: number;
}> = ({ testimonials, direction, speed }) => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  
  return (
    <div className="h-full overflow-hidden">
      <div 
        className={`flex flex-col ${direction === 'up' ? 'animate-scroll-up' : 'animate-scroll-down'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

const MovingTestimonials: React.FC = () => {
  const column1 = testimonials.slice(0, 5);
  const column2 = testimonials.slice(5, 10);
  const column3 = testimonials.slice(2, 7);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] lg:bg-[size:50px_50px]"></div>
      <div className="absolute top-1/4 left-1/4 w-48 h-48 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 lg:w-96 lg:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Header */}
      <div className="relative z-10 text-center py-8 lg:py-16 px-4 lg:px-6">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 lg:px-4 py-1.5 lg:py-2 mb-4 lg:mb-6">
          <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-blue-400 text-xs lg:text-sm font-medium">Testimonials</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 tracking-tight px-4">
          Loved by <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Clients</span>
        </h1>
        <p className="text-gray-400 text-base lg:text-lg max-w-2xl mx-auto mb-0 px-4">
          See what industry leaders are saying about our AI-powered development tools
        </p>
      </div>

      {/* Moving Testimonials Grid */}
      <div className="relative z-10 px-4 lg:px-6 max-w-7xl mx-auto mt-0">
        {/* Mobile: Single column */}
        <div className="block md:hidden h-[500px]">
          <ScrollingColumn testimonials={testimonials.slice(0, 6)} direction="up" speed={25} />
        </div>
        
        {/* Tablet: Two columns */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-4 h-[600px]">
            <ScrollingColumn testimonials={column1} direction="up" speed={20} />
            <ScrollingColumn testimonials={column2} direction="down" speed={25} />
          </div>
        </div>
        
        {/* Desktop: Three columns */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-8 h-[600px]">
            <ScrollingColumn testimonials={column1} direction="up" speed={20} />
            <ScrollingColumn testimonials={column2} direction="down" speed={25} />
            <ScrollingColumn testimonials={column3} direction="up" speed={30} />
          </div>
        </div>
      </div>

      {/* Bottom fade overlay for mobile */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none z-20"></div>

      {/* CSS Animations */}
      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        
        .animate-scroll-up {
          animation: scroll-up linear infinite;
        }
        
        .animate-scroll-down {
          animation: scroll-down linear infinite;
        }
        
        /* Pause animations on hover for better mobile UX */
        @media (hover: hover) {
          .animate-scroll-up:hover,
          .animate-scroll-down:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
};

export default MovingTestimonials;