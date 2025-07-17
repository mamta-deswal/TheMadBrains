import React from 'react';

const Ecommerce = () => {
  // Navigation function - replace this with actual React Router navigation
  const handlePortfolioClick = () => {

    window.location.href = '/portfolio';
  };

  const services = [
    {
      id: 1,
      title: "Website Designing & Development",
      icon: "✓"
    },
    {
      id: 2,
      title: "Payment Gateway Integration",
      icon: "✓"
    },
    {
      id: 3,
      title: "E-Commerce Platform Integration",
      icon: "✓"
    },
    {
      id: 4,
      title: "Continuous Maintenance & Support",
      icon: "✓"
    },
    {
      id: 5,
      title: "Mobile Responsive Designs",
      icon: "✓"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50 px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full">
                Ecommerce
              </span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Unparalleled E-Commerce Expertise
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our expertise as a top-notch <span className="font-semibold text-gray-900">e-commerce development</span> agency yields success in the competitive market. Our support extends to the following services:
              </p>
            </div>

            {/* Services List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <div key={service.id} className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-base">{service.title}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={handlePortfolioClick}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                </svg>

                <span>See our portfolio</span>
              </button>
            </div>
          </div>

          {/* Right Content - Image and Graphics */}
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200 rounded-full opacity-30 -z-10"></div>
            <div className="absolute bottom-20 left-0 w-24 h-24 bg-orange-200 rounded-full opacity-40 -z-10"></div>

            {/* Main content container */}
            <div className="relative">
              {/* Product Card */}
              <div className="absolute top-5 left-5 bg-gray-200 rounded-2xl shadow-xl p-4 z-10 transform -rotate-0 hover:bg-gray-300">
                <div className="w-20 h-20 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-2xl">🪑</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Office Mini Sofa</h3>
                <p className="text-orange-500 font-bold text-lg">$48.00</p>
                <button className="w-full bg-orange-500 text-white py-2 rounded-lg text-sm mt-2 hover:bg-orange-600 transition-colors">
                  Add to Cart
                </button>
              </div>

              {/* Main Person Image */}
              <div className="relative pl-70">
                <div className="w-80 h-96 bg-gradient-to-br from-orange-400 to-pink-400 rounded-3xl flex items-end justify-center overflow-hidden">
                  {/* Person silhouette */}
                  <div className="w-64 h-80 bg-red-300 rounded-t-full relative">
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-red-400 rounded-full"></div>
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-40 h-48 bg-red-400 rounded-t-full"></div>
                    {/* Glasses */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-8 h-4 border-2 border-gray-800 rounded-full"></div>
                    {/* Laptop */}
                    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-gray-800 rounded-md"></div>
                  </div>
                </div>
              </div>

              {/* Success Rate Badge */}
              <div className="absolute top-4 right-4 bg-white rounded-2xl shadow-xl p-4 z-10">
                <div className="relative w-16 h-16 mb-2">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="2"
                      strokeDasharray="95, 100"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-orange-500">95%</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 text-center">Success Rate</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;