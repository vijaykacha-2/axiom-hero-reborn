
import React from 'react';
import Navbar from '../components/Navbar';
import ProcessHero from '../components/ProcessHero';
import ProcessSteps from '../components/ProcessSteps';

const OurProcess = () => {
  return (
    <div className="w-full">
      <Navbar />
      <ProcessHero />
      <ProcessSteps />
    </div>
  );
};

export default OurProcess;
