import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  

  const offices = [
    {
      name: "Mohali",
      address: "5th Floor E 276, Industrial Area, Sector 75, Sahibzada Ajit Singh Nagar, Punjab 160055"
    },
    {
      name: "Abohar",
      address: "3rd Floor, Sarv Bangla, Abohar - Hanumangarh Rd, Abohar, Punjab 152116"
    }
  ];

  const services = [
    "Front End Service",
    "E-Commerce",
    "UI/UX Design Service",
    "Shopify Development",
    "UX Audit",
    "Restaurant Website Design",
    "Get Free Ux Audit"
  ];

  const company = [
    "Blog",
    "Team",
    "Career",
    "Portfolio",
    "Contact Us"
  ];

  const otherLinks = [
    "Privacy Policy",
    "Refund Policy",
    "Terms & Conditions"
  ];

  const socialLinks = [
    { name: "Facebook", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Behance", url: "#" },
    { name: "Dribbble", url: "#" },
    { name: "Design Rush", url: "#" }
  ];

  const testimonials = [
    {
      platform: "Up Work",
      logo: "up",
      rating: 5,
      featured: false
    },
    {
      platform: "Behance",
      logo: "Be",
      rating: 5,
      featured: "Projects get featured on Behance"
    },
    {
      platform: "Clutch",
      logo: "C",
      rating: 5,
      featured: false
    },
    {
      platform: "Dribbble",
      logo: "●",
      rating: 5,
      featured: "Projects get highlighted on Dribbble"
    },
    {
      platform: "Goodfirms",
      logo: "G",
      rating: 5,
      featured: false
    }
  ];

  const handleItemHover = (item) => {
    setHoveredItem(item);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };
  

  return (
    <div>
      {/* White Horizontal Bar */}
      <div className="bg-white py-16 px-6 relative">
        <div className="max-w-6xl mx-auto relative">
          {/* Orange CTA Section placed within white bar */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 py-12 px-6 rounded-2xl shadow-xl">
            <div className="text-center">
              <p className="text-sm font-medium mb-2 opacity-90 text-white">Work with us</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                Improve Your Experience & Start the Conversation
              </h2>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 px-6 py-3 rounded-full flex items-center gap-2 text-black font-medium">
                  <span className="text-lg">📞</span>
                  +1 76772059
                </button>
                
                <button className="bg-white hover:bg-gray-100 transition-all duration-300 px-6 py-3 rounded-full flex items-center gap-2 text-gray-900 font-medium">
                  <span className="text-lg">📅</span>
                  Schedule a Call
                </button>
                
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 px-6 py-3 rounded-full flex items-center gap-2 text-black  font-medium">
                  <span className="text-lg">✉️</span>
                  themadbrains.com
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Section */}
      <footer className="bg-gray-900 text-white">

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Offices */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Offices</h3>
            <div className="space-y-6">
              {offices.map((office, index) => (
                <div key={index}>
                  <h4 
                    className={`font-medium mb-2 cursor-pointer transition-colors duration-300 ${
                      hoveredItem === `office-${index}` ? 'text-orange-500' : 'text-white'
                    }`}
                    onMouseEnter={() => handleItemHover(`office-${index}`)}
                    onMouseLeave={handleItemLeave}
                  >
                    {office.name}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className={`text-sm transition-colors duration-300 hover:text-orange-500 ${
                      hoveredItem === `service-${index}` ? 'text-orange-500' : 'text-gray-300'
                    }`}
                    onMouseEnter={() => handleItemHover(`service-${index}`)}
                    onMouseLeave={handleItemLeave}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className={`text-sm transition-colors duration-300 hover:text-orange-500 ${
                      hoveredItem === `company-${index}` ? 'text-orange-500' : 'text-gray-300'
                    }`}
                    onMouseEnter={() => handleItemHover(`company-${index}`)}
                    onMouseLeave={handleItemLeave}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Other Link</h3>
            <ul className="space-y-2">
              {otherLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className={`text-sm transition-colors duration-300 hover:text-orange-500 ${
                      hoveredItem === `other-${index}` ? 'text-orange-500' : 'text-gray-300'
                    }`}
                    onMouseEnter={() => handleItemHover(`other-${index}`)}
                    onMouseLeave={handleItemLeave}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Find Us */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Find Us</h3>
            <ul className="space-y-2">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a 
                    href={social.url} 
                    className={`text-sm transition-colors duration-300 hover:text-orange-500 ${
                      hoveredItem === `social-${index}` ? 'text-orange-500' : 'text-gray-300'
                    }`}
                    onMouseEnter={() => handleItemHover(`social-${index}`)}
                    onMouseLeave={handleItemLeave}
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400">
            All Rights Reserved By - Mad Brains 2025
          </p>
        </div>
      </div>
      </footer>

      {/* Testimonials Section */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center transition-all duration-300 cursor-pointer ${
                  hoveredItem === `testimonial-${index}` ? 'transform scale-105' : ''
                }`}
                onMouseEnter={() => handleItemHover(`testimonial-${index}`)}
                onMouseLeave={handleItemLeave}
              >
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-white">
                    {testimonial.logo}
                  </span>
                </div>
                <div className="flex mb-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-sm font-medium text-white mb-1">
                  {testimonial.platform}
                </p>
                {/* {testimonial.featured && (
                  <p className="text-xs text-gray-400 max-w-32">
                    {testimonial.featured}
                  </p>
                )} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;