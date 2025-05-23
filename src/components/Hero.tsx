
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Animation */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-zoom"
           style={{
             backgroundImage: `url('/lovable-uploads/39be24cc-491e-4322-acad-333bc46139da.png')`
           }}>
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          {/* Main Content */}
          <div className="text-left">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8">
              Empowering Your{' '}
              <span className="relative inline-block">
                Business Growth
                {/* Orange Brushstroke Underline */}
                <svg 
                  className="absolute -bottom-4 left-0 w-full h-6" 
                  viewBox="0 0 400 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M5 15c30-8 60-12 90-8 25 3 50 8 75 6 30-3 60-8 90-4 25 3 50 8 75 6 20-2 40-5 60-3" 
                    stroke="#f97316" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    className="animate-draw-line"
                  />
                </svg>
              </span>
            </h1>
            
            {/* Subheading */}
            <div className="max-w-md">
              <p className="text-white text-lg leading-relaxed mb-8 opacity-90">
                Adipiscing elit, sed do eiusmod tempor incididunt ut ipsum 
                et dolore magna aliqua. Ut enim ad minim veniam. Nostrud 
                error sit voluptatem accusantium.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Arrow */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToNext}
      >
        <ChevronDown className="w-8 h-8 text-white hover:text-orange-500 transition-colors duration-300" />
      </div>
    </section>
  );
};

export default Hero;
