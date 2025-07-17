import React, { useState } from 'react';

const TestimonialsComponent = () => {
  const testimonials = [
    {
      id: 1,
      text: "Working with this team was an absolute pleasure. From the initial kick-off meeting to the final launch, they were professional, responsive, and truly understood our vision. Their expertise transformed our ideas into a reality, and we couldn't be happier with the results. The level of trust and communication throughout the process was outstanding.",
      name: "Tamara Yannay",
      title: "Co-Founder & CEO TOMD™",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 2,
      text: "Their attention to detail and commitment to our project were unparalleled. They took the time to understand our unique needs and crafted a strategy that perfectly aligned with our goals. The regular feedback sessions ensured that we were always on the same page, and the final product exceeded our expectations. I highly recommend their services to anyone looking for a reliable and innovative partner.",
      name: "Jeff Bryant",
      title: "Design at TOFTAL",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 3,
      text: "We were impressed by the team's professionalism and dedication from start to finish. They not only delivered a high-quality product but also provided exceptional post-launch support. Their ability to adapt and optimize based on our evolving needs has made a significant impact on our business. Their collaboration process is top-notch, and we look forward to working with them again in the future.",
      name: "Annie Pham",
      title: "Operation Manager",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 4,
      text: "The team's technical expertise and creative vision brought our project to life in ways we never imagined. Their proactive approach to problem-solving and commitment to excellence made the entire process seamless. We've seen tremendous growth in our business metrics since launch.",
      name: "Sarah Chen",
      title: "Marketing Director",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 5,
      text: "Outstanding service from start to finish. The team was incredibly responsive, met all deadlines, and delivered beyond our expectations. Their innovative solutions have significantly improved our operational efficiency.",
      name: "Mike Johnson",
      title: "Product Manager",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 6,
      text: "Working with this team was a game-changer for our company. Their strategic insights and flawless execution helped us achieve our goals faster than we anticipated. Highly recommended for any business looking to scale.",
      name: "Lisa Rodriguez",
      title: "CEO & Founder",
      avatar: "/api/placeholder/40/40"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 1200 600" className="w-full h-full">
          {/* Simplified world map outline */}
          <path 
            d="M200 200 L300 180 L400 200 L500 190 L600 200 L700 180 L800 200 L900 190 L1000 200 L1100 180" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
          />
          <path 
            d="M150 300 L250 280 L350 300 L450 290 L550 300 L650 280 L750 300 L850 290 L950 300 L1050 280" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
          />
          <path 
            d="M100 400 L200 380 L300 400 L400 390 L500 400 L600 380 L700 400 L800 390 L900 400 L1000 380" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
          />
        </svg>
        
        {/* Location dots */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-orange-500 rounded-full"></div>
        <div className="absolute top-32 right-40 w-3 h-3 bg-blue-500 rounded-full"></div>
        <div className="absolute top-48 left-1/3 w-3 h-3 bg-green-500 rounded-full"></div>
        <div className="absolute top-64 right-1/4 w-3 h-3 bg-purple-500 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-yellow-500 rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-white font-semibold">Testimonials</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-8 max-w-md leading-tight">
            Reviews That Warms<br />
            Our Hearts
          </h1>
          
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-200 flex items-center gap-2">
            <span className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              ✓
            </span>
            Succeed With Proficiency
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-15 transition-all duration-300"
            >
              <div className="text-6xl text-gray-400 mb-4 leading-none">"</div>
              
              <p className="text-black mb-8 leading-relaxed">
                {testimonial.text}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-black">{testimonial.name}</h4>
                  <p className="text-black text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <button 
            onClick={prevTestimonial}
                      className="w-12 h-12 bg-black bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-200 group outline-1"
          >
            <svg 
              className="w-6 h-6 text-white group-hover:text-orange-400 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial}
                      className="w-12 h-12 bg-black bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-200 group outline-1"
          >
            <svg 
              className="w-6 h-6 text-white group-hover:text-orange-400 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-orange-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsComponent;