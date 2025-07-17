import React, { useState, useEffect } from 'react';
import Worked from '../components/Worked';
import ChoosePlan from '../components/ChoosePlan';
import SubscriptionProcess from '../components/SubscriptionProcess';
import WhatWeInclude from '../components/WhatWeInclude';
import Services2 from '../components/Services2';
import OurWork from '../components/OurWork';
import TackleProblem from '../components/TackleProblem';
import Reviews from '../components/Reviews';
import Payment from '../components/Payment';
import CostEffectiveDesign from '../components/CostEffectiveDesign';
import LatestBlogs from '../components/LatestBlogs';
import FAQ from '../components/FAQ';

const SubscriptionLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    { name: "Sarah Johnson", role: "Product Manager", avatar: "👩‍💼" },
    { name: "Mike Chen", role: "UI Designer", avatar: "👨‍🎨" },
    { name: "Emma Wilson", role: "Developer", avatar: "👩‍💻" }
  ];

  const stats = [
    { value: "500+", label: "Projects Completed", color: "from-orange-500 to-pink-500" },
    { value: "98%", label: "Client Satisfaction Rate", color: "from-blue-500 to-purple-500" },
    { value: "30%", label: "Average Increase in Conversions", color: "from-green-500 to-teal-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background Animation */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}

      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">UI</span>
          </div>
          <span className="text-orange-400 font-semibold">Design-to-Subscription</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        </div>

        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Welcome to the Future of{' '}
                <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Subscription UI/UX
                </span>
                <br />
                <span className="text-gray-300">Design Based Services</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Beautiful and seamless user experiences are designed nowadays in the fast-paced digital world. It is very expensive and 
                frustrating to have an in-house designer or work with freelancers. We have reimagined the way design services 
                work. We give you the{' '}
                <span className="text-blue-400 font-semibold">subscription UI/UX</span> model that brings you unlimited top-quality designs delivered at 
                unparalleled speed, flexibility, and value.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start Your Free Trial
                </button>

                {/* Testimonial Avatars */}
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className={`w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-xl transition-all duration-300 ${
                          index === activeTestimonial ? 'scale-110 ring-2 ring-orange-500' : ''
                        }`}
                      >
                        {testimonial.avatar}
                      </div>
                    ))}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-400">Trusted by more than</p>
                    <p className="text-sm font-semibold text-white">10+ freelancers</p>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-1">
                  <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">G</span>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">We're 4.9+</p>
                  <p className="text-sm text-gray-400">Based on 127 reviews</p>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Content */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 mb-6">
                    <div className="w-full h-48 bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-white text-sm">Team Collaboration</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Team Members Representation */}
                  <div className="flex -space-x-4 justify-center mb-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 border-2 border-white flex items-center justify-center text-white font-semibold">
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Stats */}
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`absolute bg-black/80 backdrop-blur-sm rounded-xl p-4 shadow-lg transform hover:scale-110 transition-all duration-300 ${
                      index === 0 ? 'top-4 -left-4' : index === 1 ? 'top-1/2 -right-4' : 'bottom-4 -left-4'
                    }`}
                  >
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      {/* <div className="relative z-10 px-8 py-16 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Fast Delivery",
                description: "Get your designs delivered in 48 hours or less"
              },
              {
                icon: "🎨",
                title: "Unlimited Revisions",
                description: "Perfect your design with unlimited revision cycles"
              },
              {
                icon: "💡",
                title: "Creative Solutions",
                description: "Innovative designs that convert and engage users"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
          <Worked />
          <ChoosePlan />
          <SubscriptionProcess />
          <WhatWeInclude />
          <Services2 />
          <OurWork />
          <TackleProblem />
          <Reviews />
          <Payment />
          <CostEffectiveDesign />
          <LatestBlogs />
          <FAQ />
    </div>
  );
};

export default SubscriptionLanding;