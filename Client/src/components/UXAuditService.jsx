import React from 'react';

const UXAuditService = () => {
  const handleScheduleClick = () => {
    // Add your scheduling logic here
    console.log('Schedule Your Website\'s Checkup clicked');
  };

  const handleViewCaseStudy = () => {
    // Add your case study logic here
    console.log('View Case Study clicked');
  };

  const handleChooseUXAudit = () => {
    // Add your UX audit selection logic here
    console.log('Choose UX Audit clicked');
  };

  const services = [
    { icon: '🔍', title: 'Usability Testing', bgColor: 'bg-yellow-100', textColor: 'text-yellow-800' },
    { icon: '⚙️', title: 'Comprehensive User Experience Audits', bgColor: 'bg-blue-100', textColor: 'text-blue-800' },
    { icon: '🔧', title: 'Ongoing Maintenance and Support', bgColor: 'bg-red-100', textColor: 'text-red-800' },
    { icon: '💻', title: 'E-Commerce Platform Integration', bgColor: 'bg-purple-100', textColor: 'text-purple-800' },
    { icon: '🎯', title: 'Personalized Recommendations', bgColor: 'bg-green-100', textColor: 'text-green-800' }
  ];

  const benefits = [
    { 
      icon: '👥', 
      title: 'Better user acquisition and retention',
      description: 'Improve user engagement and keep visitors coming back'
    },
    { 
      icon: '🎨', 
      title: 'Enhanced design responsiveness',
      description: 'Create seamless experiences across all devices'
    },
    { 
      icon: '⚡', 
      title: 'Refined performance and boosted trust',
      description: 'Optimize speed and build user confidence'
    },
    { 
      icon: '📈', 
      title: 'A website that stands out',
      description: 'Differentiate your brand in the competitive market'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Original UX Audit Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            {/* Left Side - Content */}
            <div className="lg:w-2/3 lg:pr-8">
              {/* Subtitle */}
              <p className="text-gray-600 text-sm font-medium tracking-wider uppercase mb-4">
                UX Audit Service
              </p>
              
              {/* Main Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Stand Out Of The Crowd: Rely On Our UX<br />
                Audit Services
              </h2>
              
              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                With creative tools and techniques, we facilitate a data-driven approach that helps understand user needs, preferences, and challenges. The ultimate aim is to improve your designs drastically.
              </p>
            </div>
            
            {/* Right Side - CTA Button */}
            <div className="lg:w-1/3 mt-8 lg:mt-0">
              <button
                onClick={handleScheduleClick}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full lg:w-auto whitespace-nowrap"
              >
                Schedule Your Website's Checkup
              </button>
            </div>
          </div>
          
          {/* Services Pills */}
          <div className="flex flex-wrap gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${service.bgColor} ${service.textColor} px-6 py-3 rounded-full flex items-center space-x-3 hover:shadow-md transition-all duration-300 cursor-pointer`}
              >
                <span className="text-xl">{service.icon}</span>
                <span className="font-medium text-sm md:text-base whitespace-nowrap">
                  {service.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Case Study Card */}
          <div className="bg-gray-900 rounded-3xl p-8 lg:p-12 mb-12">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Left Side - Content */}
              <div className="lg:w-1/2">
                <p className="text-gray-400 text-sm font-medium tracking-wider uppercase mb-4">
                  Case Study
                </p>
                
                <h3 className="text-white text-3xl lg:text-4xl font-bold mb-6">
                  Just Wravel
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  We redesigned and undertook proficient UX auditing for this travelling site. The results?
                </p>
                
                {/* Results */}
                <div className="mb-8">
                  <p className="text-gray-400 text-sm font-medium mb-4">Results</p>
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <div className="text-white text-3xl font-bold mb-2">31K +</div>
                      <div className="text-gray-400 text-sm">New Visitors Attracted</div>
                    </div>
                    <div>
                      <div className="text-white text-3xl font-bold mb-2">45%</div>
                      <div className="text-gray-400 text-sm">Rise in Growth</div>
                    </div>
                    <div>
                      <div className="text-white text-3xl font-bold mb-2">45%</div>
                      <div className="text-gray-400 text-sm">Bounce Rate</div>
                    </div>
                  </div>
                </div>
                
                {/* Navigation */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleViewCaseStudy}
                    className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium"
                  >
                    View Case Study
                  </button>
                  <div className="flex gap-2">
                    <button className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-gray-800 transition-all duration-300">
                      ←
                    </button>
                    <button className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-gray-800 transition-all duration-300">
                      →
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Phone Mockup */}
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="w-80 h-96 bg-gray-800 rounded-3xl p-4 shadow-2xl">
                    <div className="w-full h-full bg-gray-700 rounded-2xl overflow-hidden">
                      {/* Phone Screen Content */}
                      <div className="bg-gradient-to-b from-green-400 to-green-600 p-6 text-white">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                              <span className="text-green-600 font-bold text-sm">J</span>
                            </div>
                            <span className="font-semibold">Just</span>
                          </div>
                          <div className="flex gap-2">
                            <div className="w-6 h-6 bg-white bg-opacity-20 rounded"></div>
                            <div className="w-6 h-6 bg-white bg-opacity-20 rounded"></div>
                          </div>
                        </div>
                        
                        <h4 className="text-xl font-bold mb-2">Book Your</h4>
                        <h4 className="text-xl font-bold mb-4">Trip at <span className="text-yellow-300">Ladakh</span></h4>
                        
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                          Book Now
                        </button>
                      </div>
                      
                      <div className="p-4 bg-gray-800 text-white">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                          <div>
                            <div className="text-sm font-medium">Trending Tours</div>
                            <div className="text-xs text-gray-400">★★★★★</div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">📍 Rohtang</span>
                            <span className="text-sm">🏔️ Himachal</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">📍 Manali</span>
                            <span className="text-sm">🏔️ Trekking</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">If You Want</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-3xl mb-4 text-red-500">{benefit.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-base leading-snug">
                    {benefit.title}
                  </h4>
                </div>
              ))}
              
              {/* CTA Card */}
              <div className="bg-gray-900 p-6 rounded-2xl text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="font-bold text-base mb-4 leading-snug">
                    You must choose our UX audit company
                  </h4>
                  <button
                    onClick={handleChooseUXAudit}
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    →
                  </button>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-500 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UXAuditService;