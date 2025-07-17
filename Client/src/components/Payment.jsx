import React, { useState } from 'react';

const Payment = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 599,
      period: 'per month',
      features: [
        'Static Website',
        'Business Website Solutions for Digital Transformation',
        'Responsive Design',
        'Basic website solutions and business web design',
        'Professional website design',
        'Website design and development',
        'Marketing Strategy',
        'Social Media Management',
        'SEO Optimization',
        'Email Marketing',
        'Design templates'
      ],
      buttonText: 'Get Started',
      buttonClass: 'border border-gray-600 text-white hover:bg-gray-700'
    },
    {
      id: 'standard',
      name: 'Standard Plan',
      price: 999,
      period: 'per month',
      popular: true,
      features: [
        'Mobile Web Design',
        'Business Website Solutions for Digital Transformation',
        'Responsive Design',
        'Website CMS',
        'Professional web design solutions and guidelines here',
        'Website design and development',
        'Marketing Strategy',
        'Social Media Management',
        'SEO Optimization',
        'Email Marketing',
        'Conversion Analytics',
        'Online Store Solutions',
        'Payment Integration'
      ],
      buttonText: 'Get Started',
      buttonClass: 'bg-orange-500 text-white hover:bg-orange-600'
    },
    {
      id: 'premium',
      name: 'Premium Package',
      price: 1599,
      period: 'per month',
      features: [
        'Fully Functional',
        'Business Website Solutions for Digital Transformation',
        'Responsive Design',
        'Analytics from website to sharing design',
        'Website design and development',
        'Marketing Strategy',
        'Social Media Management',
        'SEO Optimization',
        'Email Marketing',
        'Conversion Analytics',
        'Online Store Solutions',
        'Payment Integration',
        'High-performance cloud hosting'
      ],
      buttonText: 'Contact Us',
      buttonClass: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
      isLight: true
    }
  ];

  const services = [
    {
      hours: '10H',
      title: 'Mobile Web Design',
      subtitle: 'App Logo Design'
    },
    {
      hours: '40H',
      title: 'Mobile Web Design',
      subtitle: 'App Logo Design'
    }
  ];

  const additionalServices = [
    'Research & Wireframes',
    'Design System',
    'User Flow, Persona',
    'Research & Wireframes',
    'Design System',
    'User Flow, Persona'
  ];

  const stats = [
    { number: '800+', label: 'Projects Delivered' },
    { number: '11k', label: 'Global Family' },
    { number: '50+', label: 'Countries Covered' },
    { number: '4.8+', label: 'Google Rating' }
  ];

  const handlePayment = (planId) => {
    setSelectedPlan(planId);
    // Simulate payment gateway redirect
    const paymentGateways = [
      'https://checkout.stripe.com/demo',
      'https://www.paypal.com/checkoutnow',
      'https://razorpay.com/demo'
    ];
    
    // Select a random payment gateway for demo
    const randomGateway = paymentGateways[Math.floor(Math.random() * paymentGateways.length)];
    
    // In a real application, you would integrate with actual payment processors
    alert(`Redirecting to payment gateway for ${plans.find(p => p.id === planId)?.name}...`);
    
    // Uncomment the line below to actually redirect (for demo purposes)
    // window.open(randomGateway, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Select a Plan that Fulfills Your Design Needs
        </h1>
        <p className="text-gray-400 text-lg max-w-4xl mx-auto">
          We offer flexible plans designed to support your business needs. Whether you're just trying to get the key, long-term or need 
          massive infrastructure, we have a plan that will align to meet your design needs.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-8 ${
                plan.isLight 
                  ? 'bg-white text-gray-900' 
                  : 'bg-gray-800 border border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className={`text-sm ${plan.isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-4">What's Included</h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className={`text-sm ${plan.isLight ? 'text-gray-700' : 'text-gray-300'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handlePayment(plan.id)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${plan.buttonClass}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">What You Can get for</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-lg">
                  {service.hours}
                </div>
                <div className="text-right">
                  <div className="text-xl font-semibold">{service.title}</div>
                  <div className="text-gray-400">{service.subtitle}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {additionalServices.map((item, idx) => (
                  <div key={idx} className="text-gray-300 text-sm">
                    • {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-4">
            Don't know how long this will take? 
            <button className="text-orange-500 hover:text-orange-400 ml-2 font-semibold">
              Book a Free Call →
            </button>
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-orange-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {index === 0 ? '📊' : index === 1 ? '🌍' : index === 2 ? '🌐' : '⭐'}
                </span>
              </div>
              <div className="text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payment;