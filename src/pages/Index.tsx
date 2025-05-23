
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Index = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      
      {/* Placeholder for next section */}
      <section className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Next Section</h2>
          <p className="text-xl text-gray-600">Content continues here...</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
