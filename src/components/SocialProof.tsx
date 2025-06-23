import React from 'react';

interface Company {
  id: number;
  name: string;
  logo?: string;
}

const companies: Company[] = [
  { id: 1, name: "Jai Balaji Bath & Tiles", logo: "https://inventory.deal360.in/uploads/users/logo.png" },
  { id: 2, name: "Vasterior Pvt. Ltd.", logo: "./assets/logo.jpg" },
  { id: 3, name: "Morning Bites", logo: "https://morningbites.in/assets/logoo.png" },
  { id: 4, name: "Hawkeye Shooting Institute", logo: "https://via.placeholder.com/32x32/ffffff/000000?text=PM" },
  { id: 5, name: "Times Career Institute", logo: "https://timescareers.in/wp-content/uploads/2018/12/tc-logo-new2.png" },
  { id: 6, name: "Pradeep Shukla & Decor", logo: "./assets/ps.png" },
  { id: 7, name: "Kairvi Fort Resort", logo: "https://heroku.in/wp-content/uploads/2025/05/cropped-Kailash_Fort_Resort_Logo-removebg-preview-300x154.png" },
  { id: 8, name: "Herbsfox", logo: "https://herbsfox.com/wp-content/uploads/2024/01/logo1.png" },
  { id: 9, name: "Jigyasa Hospital", logo: "https://jigyasahospital.com/wp-content/uploads/2025/02/WhatsApp_Image_2025-02-11_at_10.14.01_fbf442ce-removebg-preview.png" },
  { id: 10, name: "Interio World", logo: "https://www.intirioworld.in/images/logo.jpg" },
  { id: 11, name: "TDH Import", logo: "https://via.placeholder.com/32x32/ffffff/000000?text=EE" },
  { id: 12, name: "Southern Palate", logo: "https://www.southernpalate.com/Southern_Palate-removebg-preview.png" },
  { id: 13, name: "Parv's Academy", logo: "https://parvsacademy.online/wp-content/uploads/2024/12/cropped-cropped-IMG-20241220-WA0002-removebg-preview.png" },
  { id: 14, name: "Ahlawat Pharmacy", logo: "" },
  { id: 15, name: "Kaizen", logo: "https://via.placeholder.com/32x32/ffffff/000000?text=IDC" },
  { id: 16, name: "Garbs", logo: "https://garbs.in/wp-content/uploads/2024/07/cropped-Screenshot_2024-07-07_142518-removebg-preview-2.png" },
  { id: 17, name: "Kdedu", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=80&h=80&fit=crop&crop=center" },
  { id: 18, name: "PSSSIC", logo: "https://prem-singh-swatantrta-senani-inter-college.vercel.app/images/logo/logonew.png" },
  { id: 19, name: "Alluring Glimpses", logo: "./assets/glimpse_logo.png" },
  { id: 20, name: "JP Traders", logo: "https://via.placeholder.com/32x32/ffffff/000000?text=FI" },
  { id: 21, name: "CUET Mock", logo: "https://cuetmock.com/img/logo_main_light.png" },
  { id: 22, name: "Pearl Green", logo: "https://via.placeholder.com/32x32/ffffff/000000?text=AS" },
  { id: 23, name: "Madhuam Heritage", logo: "https://via.placeholder.com/32x32/ffffff/000000?text=EE" },
  { id: 24, name: "Deal 360", logo: "https://deal360.in/wp-content/uploads/2024/06/cropped-cropped-Navy_Blue_Minimalist_Text_Logo_20240501_223022_0000-removebg-preview-300x300.png" },
  { id: 25, name: "Select Hospital", logo: "https://selecthospital.in/images/logo-3.png" },
  { id: 26, name: "Asquaremarketing", logo: "./assets/asquare.png" },
  
];

const CompanyName: React.FC<{ company: Company }> = ({ company }) => (
  <div className="inline-flex items-center justify-center px-8 py-4 mx-6 whitespace-nowrap">
    {/* Simple logo */}
    <div className="w-14 h-14 rounded-full flex items-center justify-center mr-4 flex-shrink-0 overflow-hidden bg-gray-50">
      {company.logo ? (
        <img 
          src={company.logo} 
          alt={`${company.name} logo`}
          className="w-full h-full object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.nextElementSibling!.classList.remove('hidden');
          }}
        />
      ) : null}
      <span className={`text-gray-600 text-2xl font-medium ${company.logo ? 'hidden' : ''}`}>
        {company.name.charAt(0)}
      </span>
    </div>
    
    {/* Premium Typography */}
    <span className="company-name text-white">
      {company.name}
    </span>
  </div>
);

const SingleScrollingCompanies: React.FC = () => {
  const infiniteCompanies = [...companies, ...companies, ...companies];
  
  return (
    <div className="h-32 bg-gradient-to-r from-gray-900 via-black to-gray-90 relative overflow-hidden flex items-center ">
      <div className="relative z-10 w-full overflow-hidden h-full flex items-center">
        <div className="flex">
          <div 
            className="flex animate-scroll-left-smooth items-center"
            style={{ animationDuration: '45s' }}
          >
            {infiniteCompanies.map((company, index) => (
              <CompanyName key={`${company.id}-${index}`} company={company} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Source+Serif+Pro:wght@400;600;700&family=DM+Serif+Display:wght@400&family=Crimson+Text:wght@400;600&display=swap');
        
        .company-name {
          font-family: 'Playfair Display', 'Times New Roman', serif;
          font-size: 1.375rem;
          font-weight: 500;
          color:rgb(255, 255, 255);
          letter-spacing: 0.02em;
          line-height: 1.3;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-feature-settings: 'kern' 1, 'liga' 1, 'swsh' 1, 'calt' 1;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        
        .company-name:hover {
          color: #374151;
          transform: translateY(-1px);
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        /* Alternative typography styles - you can switch between these */
        
        /* Elegant Serif Option */
        .company-name-elegant {
          font-family: 'Cormorant Garamond', 'Georgia', serif;
          font-size: 1.5rem;
          font-weight: 500;
          color: #111827;
          letter-spacing: 0.01em;
        }
        
        /* Modern Serif Option */
        .company-name-modern {
          font-family: 'Source Serif Pro', 'Times', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color:rgb(255, 255, 255);
          letter-spacing: 0.025em;
        }
        
        /* Luxury Display Option */
        .company-name-luxury {
          font-family: 'DM Serif Display', 'Times', serif;
          font-size: 1.375rem;
          font-weight: 400;
          color: #111827;
          letter-spacing: 0.03em;
        }
        
        /* Classic Option */
        .company-name-classic {
          font-family: 'Crimson Text', 'Georgia', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: #374151;
          letter-spacing: 0.015em;
        }
        
        @keyframes scroll-left-smooth {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        
        .animate-scroll-left-smooth {
          animation: scroll-left-smooth linear infinite;
        }
        
        .animate-scroll-left-smooth:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default SingleScrollingCompanies;