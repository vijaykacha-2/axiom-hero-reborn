
import React from 'react';

const ProcessHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Animation */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-zoom"
           style={{
             backgroundImage: `url('/lovable-uploads/39be24cc-491e-4322-acad-333bc46139da.png')`
           }}>
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-orange-500 text-sm font-medium mb-4 tracking-wider uppercase">
            Home / Our Process
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Our Process
          </h1>
          
          {/* Subheading */}
          <p className="text-white text-lg md:text-xl leading-relaxed mb-8 opacity-90 max-w-2xl mx-auto">
            We follow a proven methodology to ensure your business transformation journey is both strategic and successful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessHero;
