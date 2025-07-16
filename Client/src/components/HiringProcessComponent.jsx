import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HiringProcessComponent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/blogs');
  };

  const steps = [
    {
      id: 1,
      title: "Schedule A Call",
      description: "Schedule a call with our team to discuss needs, timelines, and goals.",
      icon: (
        <svg className="w-12 h-12 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Get Consultation",
      description: "In-depth discussion with experts. Analyze requirements and feasibility",
      icon: (
        <svg className="w-12 h-12 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <path d="M8 9l4 4 4-4"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Get An Estimate",
      description: "Get a detailed project estimate and choose an engagement, from Us.",
      icon: (
        <svg className="w-12 h-12 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10,9 9,9 8,9"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Kickoff The Project",
      description: "Initiate the project with a meet-and-greet session. Followed by onboarding.",
      icon: (
        <svg className="w-12 h-12 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    }
  ];

  const handleKickstartClick = () => {
    // Navigate to blogs page
    // window.location.href = '/blogs.j';

  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
              Platforms
            </span>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="lg:w-2/3 text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Get Your Business Up & Running With Our 
                <span className="block">Streamlined Hiring Process</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                Our MERN stack web development solutions are fast-tracked to kickstart your project in a few days.
              </p>
            </div>
            
            <div className="lg:w-1/3 flex justify-center lg:justify-end">
              <button
                onClick={() => navigate('/Blog')}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
              >
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                Kickstart Your Project
              </button>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                currentStep === index ? 'ring-2 ring-orange-500' : ''
              }`}
              onClick={() => setCurrentStep(index)}
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  <span className="text-sm font-bold text-gray-600">{step.id}</span>
                </div>
              </div>

              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="p-3 bg-orange-50 rounded-2xl">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl opacity-0 hover:opacity-5 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default HiringProcessComponent;