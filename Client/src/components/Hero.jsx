import React, { useState, useEffect } from 'react';

const FloatingIcon = ({ icon, className, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`absolute rounded-full bg-gray-800 p-4 shadow-lg transition-all duration-300 hover:bg-gray-700 hover:scale-110 cursor-pointer ${className}`}
      style={{ 
        animation: `float 6s ease-in-out infinite ${delay}s`,
        animationDelay: `${delay}s`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`w-6 h-6 transition-all duration-300 ${isHovered ? 'text-orange-400' : 'text-white'} flex items-center justify-center font-bold text-lg`}
      >
        {icon}
      </div>
    </div>
  );
};

const ParticleEffect = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 5,
        });
      }
      setParticles(newParticles);
    };
    
    generateParticles();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-orange-400 rounded-full opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `twinkle 3s ease-in-out infinite ${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const handleGetStarted = () => {
    // Add your navigation logic here
    alert('Starting your transformation journey!');
  };

  // WhatsApp and Call Functions
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number (include country code without + sign)
    const phoneNumber = "1234567890"; // Example: "919876543210" for India
    const message = "Hello! I'm interested in your services."; // Optional pre-filled message

    // WhatsApp URL format
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab/window
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    // Replace with your actual phone number
    const phoneNumber = "+1234567890"; // Include country code with + sign

    // Tel URL format
    const telUrl = `tel:${phoneNumber}`;

    // Open phone dialer
    window.location.href = telUrl;
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden pt-15">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-purple-500/5"></div>
      
      {/* Particle Effect */}
      <ParticleEffect />
      
      {/* Mouse Follower Effect */}
      <div 
        className="absolute pointer-events-none z-12"
        style={{
          left: mousePosition.x - 70,
          top: mousePosition.y - 70,
          background: 'radial-gradient(circle, rgba(255,146,268,0.4) 0%, transparent 50%)',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          transition: 'all 0.1s ease-out'
        }}
      />

      
      {/* Floating Icons */}
      <FloatingIcon 
        icon="🎨" 
        className="top-20 left-20 bg-pink-600/20 border border-pink-500/30" 
        delay={0}
      />
      <FloatingIcon 
        icon="💻" 
        className="top-32 right-32 bg-blue-600/20 border border-blue-500/30" 
        delay={1}
      />
      <FloatingIcon 
        icon="🛍️" 
        className="bottom-40 left-16 bg-green-600/20 border border-green-500/30" 
        delay={2}
      />
      <FloatingIcon 
        icon="🔧" 
        className="bottom-32 right-20 bg-purple-600/20 border border-purple-500/30" 
        delay={3}
      />
      <FloatingIcon 
        icon="📱" 
        className="top-1/2 left-10 bg-gray-600/20 border border-gray-500/30" 
        delay={4}
      />
      <FloatingIcon 
        icon="⚡" 
        className="top-1/3 right-16 bg-yellow-600/20 border border-yellow-500/30" 
        delay={5}
      />
      <FloatingIcon 
        icon="✨" 
        className="bottom-1/2 right-1/4 bg-orange-600/20 border border-orange-500/30" 
        delay={2.5}
      />
      <FloatingIcon 
        icon="🚀" 
        className="top-1/4 left-1/3 bg-indigo-600/20 border border-indigo-500/30" 
        delay={1.5}
      />
      
      {/* Contact Icons - Updated with functionality */}
      <div className="fixed top-1/2 right-8 transform -translate-y-1/2 flex flex-col gap-4 z-20">
        <button
          onClick={handleCallClick}
          className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <div className="w-5 h-5 text-white flex items-center justify-center font-bold">📞</div>
        </button>
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <div className="w-5 h-5 text-white flex items-center justify-center font-bold">💬</div>
        </button>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Brand Badge */}
        <div className="flex items-center gap-2 mb-8 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
          {/* <div className="w-3 h-3 bg-orange-500 rounded-full"></div> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-airplane-fill" viewBox="0 0 16 16">
            <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849" />
          </svg>
          <span className="text-white font-medium ">The MadBrains</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold text-white mb-8 max-w-6xl">
          <span className="bg-gradient-to-r from-white via-gray-100 to-orange-300 bg-clip-text text-transparent">
            Designing & Developing Your
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Vision For Growth
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-gray-200 text-sm md:text-xl max-w-3xl mb-4 leading-relaxed">
          At The Mad Brains, we allow unlimited creativity in bringing your UI and UX design and 
          development dreams to reality. From scalability to crafting experiences you can't miss, our{' '}
          <span className="text-white font-semibold">UI UX design company</span> stands with you in every stage.
        </p>
        
        {/* CTA Button */}
        <button 
          onClick={handleGetStarted}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          className="mt-8 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3 group"
        >
          <div className={`w-5 h-5 transition-transform duration-300 ${isButtonHovered ? 'rotate-12' : ''} flex items-center justify-center font-bold`}>
            📞
          </div>
          Let's Begin Your Transformation
          {/* <div className="w-0 group-hover:w-2 h-2 bg-white rounded-full transition-all duration-300"></div>  */}
        </button>
        
        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>500+ Projects Delivered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>99% Client Satisfaction</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default Hero;