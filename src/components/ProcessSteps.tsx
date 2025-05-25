
import React from 'react';
import { Search, Target, Rocket, TrendingUp } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery & Analysis",
      description: "We start by understanding your business challenges, goals, and current market position through comprehensive analysis.",
      features: [
        "Business Assessment",
        "Market Research",
        "Competitor Analysis",
        "Goal Setting"
      ]
    },
    {
      number: "02", 
      icon: Target,
      title: "Strategy Development",
      description: "Based on our findings, we develop a customized strategy tailored to your specific needs and objectives.",
      features: [
        "Strategic Planning",
        "Action Roadmap",
        "Resource Allocation",
        "Timeline Creation"
      ]
    },
    {
      number: "03",
      icon: Rocket,
      title: "Implementation",
      description: "We execute the strategy with precision, providing hands-on support throughout the implementation process.",
      features: [
        "Project Management",
        "Team Training",
        "Process Optimization",
        "Quality Assurance"
      ]
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Monitor & Optimize",
      description: "We continuously monitor progress and optimize strategies to ensure sustained growth and success.",
      features: [
        "Performance Tracking",
        "Regular Reviews",
        "Strategy Refinement",
        "Growth Scaling"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step process ensures systematic approach to business transformation and sustainable growth.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative mb-16 lg:mb-0">
              {/* Desktop Layout */}
              <div className={`hidden lg:flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                {/* Content Side */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                  <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                    index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'
                  }`} 
                  style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="flex items-center mb-4">
                      <div className="bg-orange-500 text-white p-3 rounded-lg mr-4">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <span className="text-6xl font-bold text-gray-100">{step.number}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <ul className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 animate-pulse">
                    {step.number}
                  </div>
                </div>

                {/* Empty Side */}
                <div className="w-5/12"></div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden">
                <div className="bg-white p-6 rounded-xl shadow-lg mb-8 animate-fade-in"
                     style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-500 text-white p-3 rounded-lg mr-4">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <span className="text-4xl font-bold text-gray-200">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 text-sm">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our proven process can help you achieve your business goals and drive sustainable growth.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
