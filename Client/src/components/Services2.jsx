import React from 'react';

const Services2 = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: 'UI/UX Design',
      description: 'Designing User-Centric interfaces that are functional and visually appealing.',
      features: [
        { label: 'Wireframes', tag: 'UI Design' },
        { label: 'User Persona', tag: 'UX Design' },
        { label: 'User Flow', tag: '& +6 More' }
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v16H7V4z"/>
          <circle cx="12" cy="17" r="1"/>
        </svg>
      ),
      title: 'Mobile App Design',
      description: 'Designing engaging and functional apps that enhance user experience.',
      features: [
        { label: 'Native Mobile apps', tag: 'Wire frames' },
        { label: 'User Flow', tag: 'Design System' },
        { label: '& +7 More', tag: '' }
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'SaaS Design',
      description: 'Creating sophisticated and intuitive design solutions for your SaaS.',
      features: [
        { label: 'Wireframes', tag: 'UI Design' },
        { label: 'Design System', tag: 'Prototype' },
        { label: '& +9 More', tag: '' }
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H4V8h16v8z"/>
          <path d="M6 10h8v4H6z"/>
        </svg>
      ),
      title: 'MVP Design',
      description: 'Crafting MVP designs that highlight key features and functionality.',
      features: [
        { label: 'Wireframes', tag: 'UI Design' },
        { label: 'User Journey', tag: 'UX Design' },
        { label: 'User Flow', tag: '& +6 More' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-medium mb-2">Services</p>
          <h1 className="text-4xl font-bold text-gray-900">
            What We Provide
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Icon */}
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{feature.label}</span>
                    {feature.tag && (
                      <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {feature.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <button className="flex items-center gap-2 text-gray-900 font-medium text-sm hover:text-orange-500 transition-colors">
                Learn More
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services2;