import React, { useState } from 'react';

const WhatWe = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState('webdev'); // New state for tab switching

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const techServices = [
    {
      title: "MERN Stack",
      description: "The MERN Stack is a full-stack JavaScript solution.",
      icon: "⚛️",
      color: "bg-blue-500",
      url: "https://reactjs.org"
    },
    {
      title: "Shopify",
      description: "Meet the passionate and dedicated team.",
      icon: "🛍️",
      color: "bg-green-500",
      url: "https://shopify.com"
    },
    {
      title: "Tech Stack",
      description: "Explore exciting career opportunities.",
      icon: "⚡",
      color: "bg-purple-500",
      url: "https://stackoverflow.com"
    },
    {
      title: "Wordpress",
      description: "Meet the passionate and dedicated team.",
      icon: "🌐",
      color: "bg-blue-600",
      url: "https://wordpress.com"
    },
    {
      title: "Full Stack",
      description: "Explore exciting career opportunities.",
      icon: "💻",
      color: "bg-pink-500",
      url: "https://fullstackopen.com"
    },
    {
      title: "Custom Plugin",
      description: "Explore exciting career opportunities.",
      icon: "🔧",
      color: "bg-indigo-500",
      url: "https://plugins.com"
    }
  ];
  const handleServiceClick = (url) => {
    window.open(url, '_blank');
    closeDropdown();
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <li className="relative">
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white rounded-lg shadow-2xl border border-gray-200 z-50">
          <div className="flex">
            {/* Left Content */}
            <div className="flex-1 p-8">
              {/* Navigation Pills */}
              <div className="mb-6 flex gap-4">
                <button className='text-gray-500'
                //   onClick={() => handleTabChange('webdev')}
                //   className={`px-6 py-2 rounded-full font-medium transition-colors ${
                //     activeTab === 'webdev' 
                //       ? 'bg-red-500 text-white hover:bg-red-600' 
                //       : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                //   }`}
                >
                  Why MadBrains
                </button>
              </div>

              {/* Services Section */}
              <div className="mb-8">
                <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-6">
                  {activeTab === 'webdev' ? 'TECH SERVICES' : 'DESIGN SERVICES'}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {(activeTab === 'webdev' ? techServices : designServices).map((service, index) => (
                    <div
                      key={index}
                      onClick={() => handleServiceClick(service.url)}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-300 hover:shadow-md group"
                    >
                      <div className={`w-10 h-10 ${service.color} rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform`}>
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    </li>
  );
};

export default WhatWe;