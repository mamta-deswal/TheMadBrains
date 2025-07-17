import React, { useState } from 'react';

const CostEffectiveDesign = () => {
  const [selectedService, setSelectedService] = useState('Website Design');
  
  const services = [
    'Website Design',
    'App Design',
    'Wireframes/Structure',
    'User Flow',
    '& More'
  ];

  const handleBookTrial = () => {
    // Simulate booking a trial
    alert('Redirecting to trial booking...');
    // In a real application, you would redirect to a booking form or calendar
    // window.location.href = '/book-trial';
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Cost-Effective Choice
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            The Most Cost-Effective Design Choice
          </h1>
        </div>

        {/* Comparison Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          
          {/* Mad Brains Side */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">A</span>
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Mad Brains</div>
              <div className="text-2xl font-bold text-green-600">$599/40 Hours</div>
            </div>
          </div>

          {/* VS */}
          <div className="text-gray-500 font-medium text-lg">VS</div>

          {/* Other Agencies Side */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-2 h-2 bg-white rounded-sm"></div>
                <div className="w-2 h-2 bg-white rounded-sm"></div>
                <div className="w-2 h-2 bg-white rounded-sm"></div>
                <div className="w-2 h-2 bg-white rounded-sm"></div>
              </div>
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Other Agencies</div>
              <div className="text-2xl font-bold text-red-600">$3,000-$10,000+</div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/3 w-12 h-12 border-2 border-white rounded-full"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            
            {/* Left Side - Text and Services */}
            <div className="flex-1 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Still Thinking?<br />
                Let's Try It.
              </h2>
              
              {/* Service Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => handleServiceClick(service)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedService === service
                        ? 'bg-white text-orange-500 shadow-lg transform scale-105'
                        : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Price and CTA */}
            <div className="flex-shrink-0 text-center md:text-right">
              <div className="mb-6">
                <div className="text-4xl md:text-5xl font-bold">$599</div>
                <div className="text-lg opacity-90">/40 Hours</div>
              </div>
              
              <button
                onClick={handleBookTrial}
                className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Book a Trial Today
              </button>
            </div>
          </div>
        </div>

        
        {/* Additional Info Section */}
        {/* <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600">Professional design standards maintained across all projects</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick turnaround times without compromising quality</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">💎</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Support</h3>
              <p className="text-gray-600">Dedicated support throughout your project journey</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CostEffectiveDesign;