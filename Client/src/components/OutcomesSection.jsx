import React from 'react';
import { useNavigate } from 'react-router-dom';

const OutcomesSection = () => {
const navigate = useNavigate();
const handleButtonClick = () => {
  navigate('/blogs');
};

  return (
    <div className="w-full bg-pink-50 p-8 flex items-center justify-center">
      <div className="bg-orange-500 rounded-3xl px-16 py-12 max-w-7xl w-full relative">
        <div className="flex items-center justify-between">
          {/* Left side - Text content */}
          <div className="flex-1 max-w-2xl">
            {/* Small header text */}
            <p className="text-white text-lg font-normal mb-6 opacity-90">
              Outcomes To Expect With Us
            </p>
            
            {/* Main heading */}
            <h1 className="text-white text-5xl font-bold">
              Partnering With Us Leads To Goal Achievement In A Sustainable Yet Effective Manner.
            </h1>
          </div>
          
          {/* Right side - Buttons */}
          <div className="flex gap-4 ml-12">
            {/* Capture Your Audience button */}
            <button
            //   onClick={handleButtonClick}
            onClick={() => navigate('/Blog')}
              className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center gap-3 shadow-sm whitespace-nowrap cursor-pointer"
            >
              <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </span>
              Capture Your Audience
            </button>
            
            {/* Consult Our Team button */}
            <button
            //   onClick={handleButtonClick}
            onClick={() => navigate('/Blog')}
              className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-200 flex items-center gap-3 shadow-sm whitespace-nowrap cursor-pointer"
            >
              <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </span>
              Consult Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutcomesSection;