import React from 'react';

const WordPressIndustrySolutions = () => {
  const industries = [
    {
      id: 1,
      title: "Healing With Innovation",
      description: "We craft patient-focused WordPress solutions for healthcare providers, integrating features such as appointment scheduling, telemedicine, and secure access to medical data. These tools enhance patient engagement and streamline healthcare delivery for all.",
      icon: "💊",
      centerIcon: "❤️",
      connections: ["🏥", "⚕️", "🔬", "📱"]
    },
    {
      id: 2,
      title: "Driving Digital Commerce",
      description: "Boost your online sales with our expertly designed e-commerce platforms. Our WordPress solutions focus on creating seamless user experiences, from optimized product pages to integrated payment systems that drive business growth.",
      icon: "🛒",
      centerIcon: "⚠️",
      connections: ["🏪", "💳", "📦", "📈"]
    },
    {
      id: 3,
      title: "Securing Financial Transactions",
      description: "Our bespoke financial websites are designed to protect and empower. With cutting-edge encryption, secure login systems, and fraud detection protocols, we ensure your financial data is safeguarded while delivering a seamless user experience.",
      icon: "🏦",
      centerIcon: "🔒",
      connections: ["💰", "📊", "🔐", "💎"]
    },
    {
      id: 4,
      title: "Transforming Education",
      description: "Revolutionize learning with our educational WordPress platforms. From interactive course management to student portals and virtual classrooms, we create engaging digital environments that enhance the educational experience for institutions and learners alike.",
      icon: "🎓",
      centerIcon: "📚",
      connections: ["👨‍🎓", "💻", "🎯", "📝"]
    },
    {
      id: 5,
      title: "Real Estate Excellence",
      description: "Elevate property showcasing with our real estate WordPress solutions. We integrate advanced search filters, virtual tours, property management tools, and lead generation systems to help you connect buyers with their dream properties seamlessly.",
      icon: "🏠",
      centerIcon: "🗝️",
      connections: ["🏢", "📍", "💼", "📱"]
    },
    {
      id: 6,
      title: "Restaurant & Hospitality",
      description: "Enhance dining experiences with our hospitality-focused WordPress platforms. From online reservations and menu management to delivery integration and customer reviews, we help restaurants and hotels create memorable digital experiences.",
      icon: "🍽️",
      centerIcon: "⭐",
      connections: ["👨‍🍳", "🥘", "🍷", "🎉"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-400 via-gray-600 to-gray-700 px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-4">
          <div className="inline-block bg-gray-800 rounded-full px-4 py-2 mb-8">
            <span className="text-gray-300 text-sm ">WordPress Web Development</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Transforming Industries With Tailored WordPress Web Solutions
          </h1>
          <p className="text-gray-300 text-lg max-w-4xl text-shadow-5xs">
            Our WordPress development agency spells magic with our expertise and dedication in diverse industries. Check out the sectors we cover:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {industries.map((industry) => (
            <div key={industry.id} className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300 border border-gray-700">
              {/* Icon Network */}
              <div className="relative mb-8 h-32 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Connection lines */}
                  <div className="absolute w-20 h-20 border border-gray-600 rounded-full"></div>
                  <div className="absolute w-32 h-32 border border-gray-700 rounded-full opacity-50"></div>
                  
                  {/* Center icon */}
                  <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl">
                    {industry.centerIcon}
                  </div>
                  
                  {/* Surrounding icons */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm">
                    {industry.connections[0]}
                  </div>
                  <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm">
                    {industry.connections[1]}
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm">
                    {industry.connections[2]}
                  </div>
                  <div className="absolute left-0 top-1/2 transform -translate-x-2 -translate-y-1/2 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm">
                    {industry.connections[3]}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {industry.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordPressIndustrySolutions;