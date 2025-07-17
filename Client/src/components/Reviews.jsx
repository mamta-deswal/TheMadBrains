import React, { useState } from 'react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      quote: "Game-Changer for Our Business!",
      content: "The team made the entire process so easy. From strategy to execution, everything was smooth. We're thrilled with the results and how much easier it is to capture leads now!",
      author: "Mahir Dindsa",
      position: "Founder of Tech company",
      avatar: "/api/placeholder/120/120"
    },
    {
      quote: "Exceptional Design Quality!",
      content: "Their attention to detail and creative approach transformed our user experience completely. The subscription flow is now intuitive and conversion rates have improved significantly.",
      author: "Sarah Johnson",
      position: "Product Manager at StartupCo",
      avatar: "/api/placeholder/120/120"
    },
    {
      quote: "Outstanding Results!",
      content: "Working with this team has been incredible. They understood our vision and delivered beyond expectations. Our customers love the new interface design.",
      author: "Michael Chen",
      position: "CEO of InnovateLabs",
      avatar: "/api/placeholder/120/120"
    }
  ];

  const platforms = [
    { name: "Upwork", rating: 5.0, color: "bg-green-500", textColor: "text-white" },
    { name: "Clutch", rating: 5.0, color: "bg-white", textColor: "text-black", border: "border border-gray-200" },
    { name: "Trustpilot", rating: 5.0, color: "bg-green-500", textColor: "text-white" },
    { name: "GoodFirms", rating: 5.0, color: "bg-blue-500", textColor: "text-white" },
    { name: "Google", rating: 5.0, color: "bg-white", textColor: "text-black", border: "border border-gray-200" }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-orange-500 text-sm font-medium mb-2">Reviews</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Client Reviews of Marketplaces
          </h1>
          
          {/* Special Badge */}
          <div className="flex items-center gap-3 mb-8">
            <div className="text-2xl">🤩</div>
            <span className="text-lg font-medium text-gray-700">
              We're A Special For Our Clients
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Review Content */}
          <div className="lg:w-2/3">
            <div className="flex gap-6">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gray-300 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all">
                      <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* <video src="https://youtu.be/JB7YD7OKm5g?si=TPKGoc2ZtfBRLPzw"></video> */}

              {/* Review Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 italic">
                  "{reviews[currentReview].quote}"
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {reviews[currentReview].content}
                </p>
                
                {/* Author Info */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {reviews[currentReview].author}
                  </h4>
                  <p className="text-gray-600">
                    {reviews[currentReview].position}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  {/* Dots */}
                  <div className="flex gap-2">
                    {reviews.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentReview(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentReview ? 'bg-gray-800' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Arrow Buttons */}
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={prevReview}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextReview}
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Platforms */}
          <div className="lg:w-1/3">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Our Platforms For Work
            </h3>
            
            <div className="space-y-4">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className={`${platform.color} ${platform.border || ''} rounded-lg px-4 py-3 flex items-center justify-between`}
                >
                  <span className={`font-medium ${platform.textColor}`}>
                    {platform.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      ★
                    </div>
                    <span className={`font-medium ${platform.textColor}`}>
                      {platform.rating}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;